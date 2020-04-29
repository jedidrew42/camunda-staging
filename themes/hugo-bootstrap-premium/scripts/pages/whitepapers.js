import axios from 'axios';
import helpers from '../lib/helpers';

export default class Whitepapers {
  static loadSingleWhitepaper() {
    const i18n = JSON.parse($('.whitepapers-detail').attr('data-i18n'));
    $('.whitepapers-detail .download-whitepaper').on('click', () => {
      dataLayer.push({ event: 'DownloadWhitepaper' });
    });

    $('.whitepapers-detail form').on('submit', (event) => {
      event.preventDefault();
      const email = $('.whitepapers-detail form [name="email"]').val();
      const mcAutomationId = $('.whitepapers-detail form [name="mcAutomationId"]').val();
      const mcEmailId = $('.whitepapers-detail form [name="mcEmailId"]').val();
      const source = Cookies.get('source');

      const formData = {
        params: {
          email,
          mcAutomationId,
          mcEmailId,
          source: source
        }
      };
      const whitepaperDownloadLink = $('.whitepapers-detail form').attr('data-downloadlink');

      axios.get(`${helpers.getUrl('mc')}whitepaper.php`, formData).then((result) => {
        if (result && result.data && result.data.status === 400) {
          // show download link because user is already subscribed
          $('.form-inline').empty();
          $('.form-success').empty().append(`<a class="btn btn-primary" href="${whitepaperDownloadLink}">${i18n.download}</a>`).show();
        } else {
          // show success-message
          $('.form-inline').empty();
          $('.form-success').empty().append(`<p>${i18n.successMessage}</p>`).show();
        }
      });

      // google tag manager
      dataLayer.push({ event: 'DownloadWhitepaper' });
    });
  }
}
