var contentful = require('contentful');
var fs = require('fs');
var path = require('path');

var config = require('./config');

function getClient() {
    // Get args from the task
    var spaceId = config["spaceId"];
    var accessToken = config["accessToken"];
    // Create Contentful client
    var client = contentful.createClient({
        space: spaceId,
        accessToken: accessToken // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    });
    return client;
}

function deleteFiles(directory) {
  let files = fs.readdirSync(directory);

  for (const file of files) {
    if (!file.startsWith('_index') && !file.startsWith('feedback')) {
      fs.unlinkSync(path.join(directory, file));
    }
  }
}

function fetchUpdates() {
  var client = getClient();
  console.log("Initial sync");

  config.contentTypes.forEach((contentType, index) => {
    client.getEntries({
      'content_type': contentType.type,
      'locale': contentType.locale,
      'order': contentType.order,
      'limit': contentType.limit
    }).then(function(entries) {
      // create the overview json
      createJSON(entries, contentType);

      // delete all files in folder
      if (contentType.markdownPath != null) {
        deleteFiles(contentType.markdownPath);
      }
      // create all markdowns
      entries.items.forEach(function(entry) {
        var newEntry = createNewEntryPerLocale(entry);
        // we need the english entry for fallback reasons

        var englishEntry = newEntry.find((item) => {
          return item.locale === 'en-us';
        });
        if (contentType.markdownPath != null) {
          newEntry.forEach(function(entry) {
            var md = createMd(contentType, entries.includes, englishEntry, entry, entry.locale);
            writeFile(md.path, md.content);
          });
        }
      });
    });
  });
}

function addAttachmentFields(contentType, data, entry, locale) {
  contentType.attachmentFields.forEach(function(attachmentField) {
    entry.fields[attachmentField + 'URL'] = '';
    if (entry.fields[attachmentField] && entry.fields[attachmentField].length>0) {
      entry.fields[attachmentField] = entry.fields[attachmentField][0];
    }
    if (entry.fields[attachmentField] && entry.fields[attachmentField].sys) {
      var file = getFile(data, entry.fields[attachmentField].sys);
      if (file != null && file[locale] != null) {
        entry.fields[attachmentField + 'URL'] = file[locale].url;
      } else if (file != null && file['en-US'] != null) {
        entry.fields[attachmentField + 'URL'] = file['en-US'].url;
      }
    }
  });
  return entry;
}

function createMd(contentType, data, englishEntry, entry, locale) {
  contentType.singleLangFields.forEach((item) => {
    entry.fields[item] = englishEntry.fields[item];
  });

  entry = addAttachmentFields(contentType, data, entry, locale);

  Object.keys(entry.fields).forEach(function(field) {
    if (contentType.replaceNewline) {
      if (entry.fields[field] != null && (typeof entry.fields[field] === 'string' || entry.fields[field] instanceof String)) {
        entry.fields[field] = entry.fields[field].replace(/(\r\n|\n|\r)/gm,'');
      }
    } else {
      if (entry.fields[field] != null && (typeof entry.fields[field] === 'string' || entry.fields[field] instanceof String)) {
        entry.fields[field] = entry.fields[field].replace(/(\r\n|\n|\r)/gm,'<br>');
      }
    }
    if (entry.fields[field] != null && (typeof entry.fields[field] === 'string' || entry.fields[field] instanceof String)) {
      entry.fields[field] = entry.fields[field].replace(/"/g,"'");
    }
  });

  var title = `title: "${contentType.metatitleFallback(entry.fields, locale)}"`;
  if (entry.fields.metatitle) {
    title = `title: "${entry.fields.metatitle}"`;
  }
  var description = ``;
  if (entry.fields.metadescription) {
    description = `description: "${entry.fields.metadescription}"`;
  }

  var md = {
    content:
`---
${title}
${description}
date: 2017-10-25T10:39:22+02:00
draft: false
${contentType.specialMarkdownLine}
---
{{<${contentType.shortcodeName}${getMarkdownFields(contentType, entry.fields)}>}}`
  };

  if (entry.fields.technicalName == null) {
    if (contentType.technicalNameFallback != null) {
      entry.fields.technicalName = contentType.technicalNameFallback(englishEntry.fields);
    }
  }

  if (entry.fields.technicalName == null) {
    console.log(entry.fields);
  } else {
    if (locale === 'en-us') {
      md.path = `${contentType.markdownPath}${entry.fields.technicalName.trim().toLowerCase()}.md`;
    } else {
      md.path = `${contentType.markdownPath}${entry.fields.technicalName.trim().toLowerCase()}.${entry.locale}.md`;
    }
  }


  return md;
}

function getMarkdownFields(contentType, fields) {
  var markdown = '';
  contentType.markdownFields.forEach(function(markdownField) {
    markdown = `${markdown}
${markdownField.toLowerCase()}="${fields[markdownField] || ''}"`;
  });
  contentType.attachmentFields.forEach(function(attachmentField) {
    var url = fields[attachmentField + 'URL'];
    markdown = `${markdown}
${attachmentField.toLowerCase()}="${url || ''}"`;
  });
  return markdown;
}

function createJSON(entries, contentType) {
  var items = {'de':[],'en':[]};
  var data = entries.includes;
  entries.items.forEach((entry) => {
    var germanObject = {};
    var englishObject = {};

    contentType.overviewFields.forEach(function(overviewField) {
      var germanLocale = 'de';
      if (contentType.singleLangFields.indexOf(overviewField) > -1) {
        germanLocale = 'en-US';
      }
      if (contentType.attachmentFields.indexOf(overviewField) > -1) {
        germanObject[overviewField] = getFileFromField(entry.fields[overviewField], data, germanLocale);
        englishObject[overviewField] = getFileFromField(entry.fields[overviewField], data);
      } else {
        germanObject[overviewField] = getValue(entry.fields[overviewField], germanLocale);
        englishObject[overviewField] = getValue(entry.fields[overviewField]);
      }
    });
    if (contentType.technicalNameFallback != null) {
      var entryWithLocale = doCreateNewEntryPerLocale(entry);
      germanObject['technicalName'] = contentType.technicalNameFallback(entryWithLocale[0].fields);
      englishObject['technicalName'] = contentType.technicalNameFallback(entryWithLocale[0].fields);
    }
    items.de.push(germanObject);
    items.en.push(englishObject);
  });
  writeFile(contentType.overviewPath, JSON.stringify(items));
}

function getFileFromField(field, data, locale='en-US') {
  var value = getValue(field,locale);
  if (value != '') {
    if (value && value.length>0) {
      value = value[0];
    }
    if (value && value.sys) {
      var file = getFile(data, value.sys);
      if (file != null && file[locale] != null) {
        value = file[locale].url;
      } else if (file != null && file['en-US'] != null) {
        value = file['en-US'].url;
      }
    }
  }
  return value;
}

function getValue(value,lang='en-US') {
  if (value != null) {
    if (value[lang] != null) {
      return value[lang];
    } else {
      return '';
    }
  } else {
    return '';
  }
}


fetchUpdates()

function getFile(data, sys) {
  var file = '';
  data.Asset.forEach(function(asset) {
    if (asset.sys.id === sys.id) {
      file = asset.fields.file;
    }
  });
  return file;
}

function writeFile(path, content) {
  fs.writeFile(path, content, function(err) {
    if(err) {
        return console.log(err);
    }
  });
}

/**
 * Removes locale information for all fields in an Contentful entry
 * and returns an array with one entry per found locale
 *
 * {
 *  "sys": {
 *      "id": "1234"
 *  },
 *  "fields": {
 *      "headline": {
 *          "en-US": "Hello world"
 *          "sv": "Hej världen"
 *      }
 *  }
 * }
 * Becomes an array with:
 * {
 *  "sys": {
 *      "id":"1234"
 *  },
 *  "fields": {
 *      "headline": "Hello world"
 *  }
 *  "locale":"en-us"
 * },
 *
 * {
 *  "sys": {
 *      "id": "1234"
 *  },
 *  "fields": {
 *      "headline": "Hej världen"
 *  },
 *  "locale": "sv"
 * }
 */
function createNewEntryPerLocale(entryOrAsset, context) {
    var entry = entryOrAsset;
    var arrayOfEntries = doCreateNewEntryPerLocale(entry);
    return arrayOfEntries;
}
var EntryWithLocale = (function () {
    function EntryWithLocale() {
    }
    return EntryWithLocale;
})();
var EntryWithoutLocale = (function () {
    function EntryWithoutLocale() {
    }
    return EntryWithoutLocale;
})();
function doCreateNewEntryPerLocale(entryWithLocale) {
    var locales = {};
    var fields = entryWithLocale.fields;
    for (var field in fields) {
        for (var localeName in fields[field]) {
            if (locales[localeName] == null) {
                var newEntry = locales[localeName] = new EntryWithoutLocale();
                newEntry.sys = entryWithLocale.sys;
                newEntry.fields = {};
                newEntry.locale = localeName.toLowerCase();
                locales[localeName] = newEntry;
            }
            var entry = locales[localeName];
            entry.fields[field] = fields[field][localeName];
        }
    }
    return Object.keys(locales).map(function (l) { return locales[l]; });
}
