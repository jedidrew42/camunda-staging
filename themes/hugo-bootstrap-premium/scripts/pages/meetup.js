import axios from 'axios';
import moment from 'moment';
import helpers from '../lib/helpers';

require('moment/locale/de');
require('moment/locale/en-gb');

export default class Meetup {
  constructor() {
    this.locale = helpers.getLocale();
  }

  loadMeetups() {
    moment.locale(this.locale);
    const $meetups = $('.meetups');
    axios.get(`${helpers.getUrl('meetup')}?events=true`).then((result) => {
      if (result && result.data) {
        let meetupSections = '';
        result.data.events.forEach((event, index) => {
          const eventDate = moment(new Date(event.time));
          if (index > 0) {
            meetupSections += '<hr>';
          }
          let location = '<strong>Venue is not defined yet.</strong>';
          if (event.venue) {
            location = `<strong>${event.venue.city}, ${event.venue.localized_country_name}</strong>`;
          }
          let description = '';
          if (event.description) {
            description = event.description;
          }
          let group = '';
          if (event.group) {
            group = `<p>${event.group.name}</p>`;
          }

          const meetupSection = `<section>
            <h3 class="light lead">${event.name}</h3>
            ${group}
            <p>${location} - ${eventDate.format('LLLL')}</p>
            <p>${description}</p>
            <p><a class="btn btn-primary" href="${event.link}">Attend</a></p>
          </section>`;
          meetupSections += meetupSection;
        });
        $meetups.empty().append(meetupSections).removeClass('loading-indicator');
      }
    });
  }
}
