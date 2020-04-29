import axios from 'axios';
import moment from 'moment';
import helpers from '../lib/helpers';

require('moment/locale/de');
require('moment/locale/en-gb');

export default class Training {
  constructor() {
    moment.locale(helpers.getLocale());
  }

  loadTrainings() {
    axios.get(helpers.getUrl('eventbrite'), { params: { 'training-venues': true } }).then((venues) => {
      this.venues = venues.data.venues;
      if ($('.training-detail').length > 0) {
        this.loadSingleTraining();
      } else {
        this.loadTrainingOverview();
      }
    });
  }

  loadTrainingOverview() {
    this.loadNextTrainings();
  }

  loadNextTrainings() {
    const $trainingNextDates = $('.training-next-dates');
    const i18n = JSON.parse($trainingNextDates.attr('data-i18n'));
    axios.get(helpers.getUrl('eventbrite'), { params: { trainings: true } }).then((result) => {
      if (result && result.data) {
        const { events } = result.data;
        let dateTableRows = '';
        events.sort((a, b) => {
          const c = new Date(a.start.local);
          const d = new Date(b.start.local);
          return c - d;
        });
        const trainings = JSON.parse($trainingNextDates.attr('data-trainings'));
        events.forEach((event) => {
          const venue = this.venues.find(item => item.id === event.venue_id);
          if (venue != null) {
            event.city = `${venue.address.city}, ${venue.address.country}`;
          }
          let training = trainings.en.find(item => item.name === event.name.text);
          event.language = 'en';
          if (training == null) {
            training = trainings.de.find(item => item.nameDe === event.name.text);
            event.language = 'de';
          }

          if (training != null) {
            dateTableRows += `<tr itemscope itemtype="http://schema.org/EducationEvent">
                <td>
                  <meta itemprop="name" content="${event.name.text}">
                  <meta itemprop="startDate" content="${event.start.local}">
                  <meta itemprop="endDate" content="${event.end.local}">
                  <meta itemprop="url" content="${event.url}">
                  <div itemscope itemprop="location" itemtype="http://schema.org/Place">
                    <meta itemprop="name" content="${event.city}">
                    <div itemprop="address" itemscope="itemscope" itemtype="http://schema.org/PostalAddress">
                      <meta itemprop="addressLocality" content="${event.city}">
                    </div>
                  </div>
                  <a href="${training.technicalName}">${event.name.text}</a></td>
                <td>${i18n.languages[event.language]}</td>
                <td>${moment(event.start.local).format('lll')}</td>
                <td>${moment(event.end.local).format('lll')}</td>
                <td>${event.city}</td>
                <td><a href="${event.url}" data-event-id-open="${event.id}" class="btn btn-default">${i18n.booknow}</a></td>
              </tr>
              <tr><td style="padding:0; border-top:0;" colspan="6"><div style="height:0;overflow:hidden;transition: height 2s;" data-event-id="${event.id}"></div></td></tr>`;
          }
        });

        $('tbody', $trainingNextDates).empty()
          .removeClass('loading-indicator')
          .empty()
          .append(dateTableRows);
        $('tbody [data-event-id-open]', $trainingNextDates).on('click', (evt) => {
          evt.preventDefault();
          $('[data-event-id]').css('height', '0px');
          const id = $(evt.target).attr('data-event-id-open');
          $(`[data-event-id="${id}"]`).empty().append(`<iframe width="100%" height="410" frameborder="0" src="//eventbrite.ca/tickets-external?eid=${id}&ref=etckt"></iframe>`);
          $(`[data-event-id="${id}"]`).css('height', '410px');
          // google tag manager
          dataLayer.push({ event: 'TrainingBookNow' });
        });
        $('.search-nexttrainings').on('keyup', function() {
          const $rows = $('table.next-trainings tbody tr');
          const val = $.trim($('.search-nexttrainings').val()).replace(/ +/g, ' ').toLowerCase();
          $rows.show().filter(function() {
            const text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
            return !~text.indexOf(val);
          }).hide();
        });
      }
    });
  }

  loadSingleTraining() {
    const i18n = JSON.parse($('.training-detail').attr('data-i18n'));
    const training = JSON.parse($('.training-detail').attr('data-training'));

    const requests = [];
    requests.push(axios.get(helpers.getUrl('eventbrite'), { params: { 'training-dates': training.name, l: 'en' } }));
    requests.push(axios.get(helpers.getUrl('eventbrite'), { params: { 'training-dates': training.nameDe, l: 'de' } }));
    axios.all(requests).then((results) => {
      const events = [];
      results.forEach((response) => {
        response.data.events.forEach((event) => {
          if (event.name.text === response.config.params['training-dates']) {
            event.language = response.config.params.l;
            events.push(event);
          }
        });
      });
      events.sort((a, b) => {
        const c = new Date(a.start.local);
        const d = new Date(b.start.local);
        return c - d;
      });
      this.renderTrainingList(events, i18n);
    });
  }

  renderTrainingList(events, i18n) {
    let dateTableRows = '';
    if (events.length > 0) {
      events.forEach((event) => {
        const venue = this.venues.find(item => item.id === event.venue_id);
        if (venue != null) {
          event.city = `${venue.address.city}, ${venue.address.country}`;
        }
        let bookButton = `<a href="${event.url}" data-event-id-open="${event.id}" class="btn btn-primary">${i18n.booknow}</a>`;
        if (event.ticket_availability && event.ticket_availability.is_sold_out) {
          bookButton = `<a href="${event.url}" class="btn btn-primary disabled">${i18n.soldout}</a>`;
        }
        dateTableRows += `<tr itemscope itemtype="http://schema.org/EducationEvent">
              <td>
                <meta itemprop="name" content="${event.name.text}">
                <meta itemprop="startDate" content="${event.start.local}">
                <meta itemprop="endDate" content="${event.end.local}">
                <meta itemprop="url" content="${event.url}">
                <div itemscope itemprop="location" itemtype="http://schema.org/Place">
                <meta itemprop="name" content="${event.city}">
                <div itemprop="address" itemscope="itemscope" itemtype="http://schema.org/PostalAddress">
                  <meta itemprop="addressLocality" content="${event.city}">
                </div>
              </div>${i18n.languages[event.language]}</td>
              <td>${moment(event.start.local).format('lll')}</td>
              <td>${moment(event.end.local).format('lll')}</td>
              <td>${event.city}</td>
              <td>${bookButton}</td></tr>
          <tr><td style="padding:0; border-top:0;" colspan="5"><div style="height:0;overflow:hidden;transition: height 2s;" data-event-id="${event.id}"></div></td></tr>`;
      });
      const dateTable = `<div class="text-center">
          <h2 class="light">${i18n.booking}</h2>
        </div>
        <table class="table">
          <tr><th>${i18n.language}</th><th>${i18n.begin}</th><th>${i18n.end}</th><th>${i18n.city}</th><th>${i18n.book}</th></tr>
          ${dateTableRows}
        </table>
      `;
      $('.training-detail .dates').append(dateTable);
      $('.training-detail .dates [data-event-id-open]').on('click', (evt) => {
        evt.preventDefault();
        $('[data-event-id]').css('height', '0px');
        const id = $(evt.target).attr('data-event-id-open');
        $(`[data-event-id="${id}"]`).empty().append(`<iframe width="100%" height="410" frameborder="0" src="//eventbrite.ca/tickets-external?eid=${id}&ref=etckt"></iframe>`);
        $(`[data-event-id="${id}"]`).css('height', '410px');

        // google tag manager
        dataLayer.push({ event: 'TrainingBookNow' });
        _hsq.push(["trackEvent", {
            id: "TrainingBookNow",
            value: id
        }]);
      });
    } else {
      const dateTable = `<div class="text-center">
        <h2 class="light">${i18n.booking}</h2>
      </div>
      <p>${i18n.noDatesScheduled}</p>`;
      $('.training-detail .dates').append(dateTable);
    }
  }
}
