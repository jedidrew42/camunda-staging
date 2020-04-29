import axios from 'axios';
import helpers from '../lib/helpers';

export default class SubscribeForm {
  static initEventListener() {
    const $subscribeForm = $('.subscribe-form');
    $('.success-message', $subscribeForm).hide();
    $subscribeForm.on('submit', (event) => {
      event.preventDefault();
      $('.success-message', $subscribeForm).show();
      $('[type="submit"]', $subscribeForm).hide();
      $('[name="EMAIL"]', $subscribeForm).hide();
      const email = $('[name="EMAIL"]', $subscribeForm).val();
      const source = $('[name="SOURCE"]', $subscribeForm).val();
      const locale = helpers.getLocale();

      const params = {
        params: {
          source,
          locale,
          email
        }
      };

      let host = '';
      // dev fallback
      if (window.location.hostname === 'localhost') {
        host = 'http://bpmn.wtf';
      }
      axios.get(`${host}/backend/mc/subscribe.php`, params, (result) => {
        if (result === 'invalid request' || result.status === 'error') {
          // send error to google
        }
      });
      // google tag manager
      dataLayer.push({'event': 'NewsletterSignup'});
      _hsq.push(["trackEvent", {
          id: "NewsletterSignup",
          value: true
      }]);
    });
  }
}
