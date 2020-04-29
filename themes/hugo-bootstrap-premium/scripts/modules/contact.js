import axios from 'axios';
import helpers from '../lib/helpers';

export default class Contact {
  constructor() {
    this.config = { headers: { 'Content-Type': 'multipart/form-data' } };
  }

  initContactForm() {
    $('#contact .success-message').hide();
    $('body').on('contactRequest', 'form', () => {
      const formData = new FormData($('#contact form')[0]);
      const source = Cookies.get('source');
      if (source != null) {
        formData.append('source', source);
      }
      formData.append('website', window.location.href);

      axios.post(helpers.getUrl('mql'), formData, this.config).then(() => {
      });
      // google tag manager
      dataLayer.push({'event': 'ContactusSubmission'});
      _hsq.push(["trackEvent", {
          id: "ContactusSubmission",
          value: true
      }]);
    });
  }

  initTrialForm() {
    $('#trialform .success-message').hide();
    $('body').on('downloadTrialRequest', 'form', (event) => {
      const formData = new FormData($('#trialform form')[0]);
      const source = Cookies.get('source');
      if (source != null) {
        formData.append('source', source);
      }
      formData.append('website', window.location.href);
      axios.post(helpers.getUrl('trial'), formData, this.config).then(() => {

      });
      dataLayer.push({'event': 'DownloadTrialRequest'});
      _hsq.push(["trackEvent", {
          id: "DownloadTrialRequest",
          value: true
      }]);
    });
  }

  initPartnerForm() {
    $('#partnerForm .success-message').hide();
    $('#partnerForm [name="landingPage"]').val(window.location.href);
    $('#partnerForm form').on('submit', (event) => {
      event.preventDefault();
      const formData = new FormData($('#partnerForm form')[0]);
      const source = Cookies.get('source');
      if (source != null) {
        formData.append('source', source);
      }
      axios.post(helpers.getUrl('partners'), formData, this.config).then(() => {
        $('#partnerForm form').hide();
        $('#partnerForm .success-message').show();
      });
    });
  }
}
