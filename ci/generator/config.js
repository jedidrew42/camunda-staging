var slug = require('slugg');
var Config = {};
Config.spaceId = 'vpidbgnakfvf';
Config.accessToken = '63bd56e62381aff6acbc9f46d9095b6f9424bf0e0f5267cd7b523b18cf6c822a';
Config.contentTypes =
  [
    {
        'type': 'reference',
        'limit': 1000,
        'order': 'fields.priority',
        'locale': '*',
        'singleLangFields': ['technicalName', 'logo', 'pdf', 'thumbnail', 'industry', 'country', 'region', 'metatitle'],
        'attachmentFields': ['logo', 'pdf', 'thumbnail'],
        'markdownFields': ['company', 'companydescription', 'customerQuote', 'teaser', 'useCase', 'videoLink'],
        'overviewFields': ['priority', 'technicalName', 'logo', 'teaser', 'company', 'industry', 'region'],
        'markdownPath': '../../content/case-studies/',
        'overviewPath': '../../data/case-studies/overview.json',
        'shortcodeName': 'case-study-single',
        'specialMarkdownLine': `contact: true
contacthidden: true
mycontent: static`,
        'replaceNewline': 'true',
        'metatitleFallback': function(fields) {
            return fields.company + ' Case Study | Camunda BPM';
        }
    },
    {
        'type': 'partner',
        'limit': 1000,
        'order': 'fields.priority',
        'locale': '*',
        'singleLangFields': ['technicalName', 'company', 'logo', 'type', 'city', 'level', 'employees', 'developers', 'priority', 'countryCode', 'siRegion', 'website', 'city', 'metatitle'],
        'attachmentFields': ['logo'],
        'markdownFields': ['company', 'type', 'website', 'countryCode', 'city', 'description', 'siRegion', 'level'],
        'overviewFields': ['priority', 'technicalName', 'logo', 'siRegion', 'level', 'countryCode', 'city', 'type', 'company'],
        'markdownPath': '../../content/partners/',
        'overviewPath': '../../data/partners/overview.json',
        'shortcodeName': 'partner-single',
        'specialMarkdownLine': `contact: true
contacthidden: true
mycontent: static`,
        'replaceNewline': 'true',
        'metatitleFallback': function(fields) {
            return 'Camunda Partners - ' + fields.company + ' | Camunda BPM';
        }
    },
    {
        'type': 'training',
        'limit': 1000,
        'order': 'fields.priority',
        'locale': '*',
        'singleLangFields': ['technicalName', 'pricing', 'category', 'nameDe', 'name'],
        'attachmentFields': [],
        'markdownFields': ['name', 'nameDe', 'category', 'targetGroup', 'courseOverview', 'agenda', 'courseGoals', 'prerequisites', 'duration', 'certificate', 'pricing'],
        'overviewFields': ['name', 'nameDe', 'technicalName', 'category'],
        'markdownPath': '../../content/services/training/',
        'overviewPath': '../../data/services/overview.json',
        'shortcodeName': 'training-single',
        'specialMarkdownLine': `contact: true
showSubNavCustom: true
mycontent: static`,
        'replaceNewline': 'true',
        'metatitleFallback': function(fields, locale) {
            if (locale === 'de') {
                return 'Camunda Training - ' + fields.nameDe + ' | Camunda BPM';
            } else {
                return 'Camunda Training - ' + fields.name + ' | Camunda BPM';
            }

        }
    },
    {
        'type': 'whitepaper',
        'limit': 1000,
        'order': 'fields.priority',
        'locale': '*',
        'singleLangFields': ['technicalName'],
        'attachmentFields': ['pdf', 'thumbnail'],
        'markdownFields': ['title', 'teaser', 'mcAutomationId', 'mcEmailId', 'hsFormId'],
        'overviewFields': ['priority', 'title', 'technicalName', 'thumbnail'],
        'markdownPath': '../../content/learn/whitepapers/',
        'overviewPath': '../../data/learn/overview.json',
        'shortcodeName': 'whitepapers-single',
        'specialMarkdownLine': 'mycontent: static',
        'replaceNewline': 'true',
        'metatitleFallback': function(fields) {
          if (fields.title) {
            return 'Camunda Whitepaper - ' + fields.title + ' | Camunda BPM';
          } else {
            return 'Camunda Whitepaper | Camunda BPM';
          }
        }
    },
    {
        'type': 'press',
        'limit': 1000,
        'order': 'fields.date',
        'locale': '*',
        'singleLangFields': ['date'],
        'attachmentFields': [],
        'markdownFields': ['title', 'text', 'date'],
        'overviewFields': ['title', 'text', 'date'],
        'markdownPath': '../../content/about/press/',
        'overviewPath': '../../data/about/press/overview.json',
        'shortcodeName': 'press-single',
        'specialMarkdownLine': '',
        'replaceNewline': false,
        'technicalNameFallback': function(fields) {
          return slug(fields.title);
        },
        'metatitleFallback': function(fields) {
          if (fields.title) {
            return 'Camunda Press - ' + fields.title + ' | Camunda BPM';
          } else {
            return 'Camunda Press | Camunda BPM';
          }
        }
    },
    {
        'type': 'pressCoverage',
        'limit': 1000,
        'order': 'fields.date',
        'locale': '*',
        'singleLangFields': ['date','logo','title','language','link'],
        'attachmentFields': ['logo'],
        'markdownFields': [],
        'overviewFields': ['date','logo','title','language','link'],
        'overviewPath': '../../data/about/press/presscoverage.json'
    },
    {
        'type': 'webinar',
        'limit': 1000,
        'order': 'fields.datetime',
        'locale': '*',
        'singleLangFields': ['technicalName','image','language','hubspotid','datetime','datetimeend','recordinglink','embedlink','gotowebinarwebinarkey'],
        'attachmentFields': ['image'],
        'markdownFields': ['title','image','language','hubspotid','description','recordinglink','embedlink','datetime','datetimeend','gotowebinarwebinarkey'],
        'overviewFields': ['technicalName','title','language','recordinglink','datetime','datetimeend'],
        'markdownPath': '../../content/learn/webinars/',
        'overviewPath': '../../data/learn/webinar.json',
        'shortcodeName': 'webinar-single',
        'specialMarkdownLine': '',
        'replaceNewline': false,
        'specialMarkdownLine': `showSubNavCustom: true`,
        'metatitleFallback': function(fields) {
          if (fields.title) {
            return 'Camunda Webinar - ' + fields.title + ' | Camunda BPM';
          } else {
            return 'Camunda Webinar | Camunda BPM';
          }
        }
    }
];

module.exports = Config;
