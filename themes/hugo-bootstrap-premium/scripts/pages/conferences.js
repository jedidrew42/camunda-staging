import axios from 'axios';
import moment from 'moment';
import tablesort from 'tablesort';
import helpers from '../lib/helpers';

require('moment/locale/de');
require('moment/locale/en-gb');

export default class Conferences {
  constructor() {
    this.locale = helpers.getLocale();
  }

  loadConferences() {
    moment.locale(this.locale);
    const $conferencesTable = $('.conferences');
    const cmsParams = {
      params: {
        list: 'event',
        locale: helpers.getLocale()
      }
    };
    axios.get(`${helpers.getUrl('cms')}`, cmsParams).then((result) => {
      if (result && result.data) {
        let eventRows = '';
        result.data.items.sort((a, b) => {
          const c = new Date(a.fields.begin);
          const d = new Date(b.fields.begin);
          return c - d;
        });
        result.data.items.forEach((event) => {
          const showEvent = Conferences.checkShowEvent(event);
          let exhibition = '';
          let presentation = '';
          if (showEvent) {
            if (event.fields.exhibition) {
              exhibition = 'Exhibition';
              if (event.fields.presentation) {
                exhibition = 'Exhibition,';
              }
            }
            if (event.fields.presentation) {
              presentation = 'Presentation';
              if (event.fields.presentationLink != null && event.fields.presentationLink !== '') {
                presentation = `<a href="${event.fields.presentationLink}" target="_blank">Presentation</a>`;
              }
            }
            let title = event.fields.name;
            if (event.fields.link != null) {
              title = `<a href="${event.fields.link}" target="_blank">${event.fields.name}</a>`;
            }
            let { country } = event.fields;
            if (event.fields.countryCode) {
              country = `<img src="/img/flags/${event.fields.countryCode}.png" alt="${event.fields.country}" title="${event.fields.country}">`;
            }
            const eventRow = `<tr>
              <td>${title}</td>
              <td data-sort="${moment(event.fields.begin).toISOString()}">${moment(event.fields.begin).format('ll')} - ${moment(event.fields.end).format('ll')}</td>
              <td>${event.fields.city}</td>
              <td data-sort="${event.fields.country}">${country}</td>
              <td>${exhibition} ${presentation}</a></td>
            </tr>
              `;
            eventRows += eventRow;
          }
        });
        $('tbody', $conferencesTable).empty().append(eventRows).removeClass('loading-indicator');
        tablesort($conferencesTable[0]);
      }
    });
  }

  static checkShowEvent(event) {
    // check if end event is before todays date
    if (event.fields.end && moment(event.fields.end).isBefore(moment())) {
      return false;
    }
    return true;
  }
}
