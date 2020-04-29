var contentful = require('contentful-management');
var fs = require("fs");
var partners = fs.readFileSync("donepartners.json");
partners = JSON.parse(partners);
console.log(partners.length);
function upload() {
  const client = contentful.createClient({
    accessToken: 'CFPAT-3ec8567c650f4b75da9b1c91bda8525c018a69675310c96c262fb413d0bb6605'
  });
var globalSpace;
partners.forEach((partner, index) => {
  client.getSpace('vpidbgnakfvf').then((space) => {
    globalSpace = space;
    globalSpace.createAsset({
      fields: {
        title: {
          'en-US': partner.name
        },
        file: {
          'en-US': {
            contentType: 'image/png',
            fileName: partner.logo,
            upload: 'https://camunda.com/img/camunda/partners/'+partner.logo
          }
        }
      }
    }).then((asset) => {
      asset.processForAllLocales().then((asset) => {
        asset.publish().then((asset) => console.log(`Asset ${asset.sys.id} published.`));
      });
      console.log(asset);
      var logo = {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: asset.sys.id
        }
      };
      globalSpace.createEntry('partner', {
        fields: {
          company: {
            'en-US': partner.name
          },
          logo: {
            'en-US': logo
          },
          type: {
            'en-US': 'si'},
          website: {
            'en-US': partner.website},
          countryCode: {
            'en-US': partner.hqCountry},
          city: {
            'en-US': partner.hqCity},
          siRegion: {
            'en-US': getRegion(partner.si_region)},
          level: {
            'en-US': getLevel(partner.level)},
          employees: {
            'en-US': partner.employees},
          developers: {
            'en-US': partner.developers},
          description: {
            'en-US': partner.description_en,
            'de': partner.description_de
          }
        }
      })
      .then((entry) => entry.publish())
      .catch(console.error)
  })
  .then((asset) => console.log(asset))
  .catch(console.error)
})});


}

function getRegion(region) {
  var regions = region.split(',').map(v => v.toLowerCase());
  var returnRegion = [];
  regions.forEach((regionItem) => {
    if (regionItem == 'europe' || regionItem == 'mea') {
      returnRegion.push("emea");
    } else if (regionItem == 'na' || regionItem == 'dach' || regionItem == 'apac') {
      returnRegion.push(regionItem);
    }
  });
  return returnRegion;
}

function getLevel(level) {
  var levels = {
    "1": "basic",
    "2": "certified",
    "3": "advanced"
  }
  return levels[level];
}

//upload();
