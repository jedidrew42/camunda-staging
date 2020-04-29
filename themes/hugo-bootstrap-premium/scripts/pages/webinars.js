import axios from 'axios';
import moment from 'moment';
import helpers from '../lib/helpers';

require('moment/locale/de');
require('moment/locale/en-gb');

export default class Webinars {
  init() {
    this.locale = helpers.getLocale();
    this.loadWebinars();
    this.loadRecordings();
  }

  loadWebinars() {
    moment.locale(this.locale);
    const $webinarList = $('.webinars-list');
    const i18n = JSON.parse($webinarList.attr('data-i18n'));

    axios.get(helpers.getUrl('webinars')).then((result) => {
      if (result && result.data) {
        let webinarRows = '';
        if (result.data.length > 0) {
          result.data.forEach((webinar) => {
            const video = {
              name: webinar.name,
              language: i18n.languages[webinar.locale],
              previewImage: '/svg/video-sign-up.svg',
              link: webinar.registrationUrl,
              linkTitle: i18n.registration,
              description: '',
              previewLinkClass: 'webinar-registration',
              linkClass: 'webinar-registration btn btn-default',
              datetime: `${moment(webinar.times[0].startTime).format('LL')} ${moment(webinar.times[0].startTime).format('LT')} - ${moment(webinar.times[0].endTime).format('LT')}`
            };
            const webinarRow = this.getPreviewRow(video);
            webinarRows += webinarRow;
          });
        }

        $('.webinars-list').prepend(webinarRows).removeClass('loading-indicator');
        $('.webinar-registration').on('click', () => {
          dataLayer.push({'event': 'WebinarGoToSignup'});
          _hsq.push(["trackEvent", {
							id: "WebinarGoToSignup",
							value: webinar.name
					}]);
        });
      }
    });
  }

  loadRecordings() {
    const $webinarList = $('.webinars-list');
    const i18n = JSON.parse($webinarList.attr('data-i18n'));

    axios.get(helpers.getUrl('webinars/recordings.php')).then((result) => {
      const videos = result.data;
      let videoRows = '';
      videos.sort((a, b) => {
        const c = new Date(b.created_time);
        const d = new Date(a.created_time);
        return c - d;
      });
      videos.forEach((video) => {
        if (video.language) {
          video.language = i18n.languages[video.language];
          if (video.language == null) {
            video.language = i18n.languages.en;
          }
        } else {
          video.language = i18n.languages.en;
        }
        video.previewLinkClass = '';
        video.datetime = moment(video.created_time).format('LL');
        video.previewImage = video.pictures.sizes[2].link_with_play_button;
        video.linkTitle = 'Watch Now';
        video.linkClass = 'vid-url';
        videoRows += this.getPreviewRow(video);
      });
      $('.webinars-list').append(videoRows);
    });
  }

  getPreviewRow(video) {
    return `<div class="row mb-50">
        <div class="col-md-3 col-sm-3 col-xs-3 video-img">
          <div class="video-thumb video-thumb-list">
             <a class="vid-url sm-marginauto ${video.previewLinkClass}" href="${video.link}" target="_blank">
               <img src="${video.previewImage}" class="img-responsive">
             </a>
          </div>
       </div>
       <div class="col-md-9 col-sm-9 col-xs-9">
          <div class="video-content-wrapper">
             <h4 class="light"><a class="vid-url" href="${video.link}" target="_blank">${video.name}</a></h4>
             <div class="date">
                <p>${video.datetime}</p>
             </div>
             <div class="video-description m-b-10">
                <p><strong>${video.language}</strong></p>
                <p class="text-overflow">${video.description}</p>
             </div>
             <a href="${video.link}" class="${video.linkClass}" target="_blank">
              <strong>${video.linkTitle}</strong>
            </a>
          </div>
       </div>
    </div>`;
  }
}
