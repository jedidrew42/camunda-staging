export default class Partners {
  constructor() {
    this.$partner = $('.partner');
  }
  init() {
    $('select', this.$partner).on('change', () => {
      this.hq = $('select.hq', this.$partner).val();
      this.region = $('select.region', this.$partner).val();
      this.level = $('select.level', this.$partner).val();

      $('ul.cards li', this.$partner).each((index, partner) => {
        let display = 'block';

        if (this.level !== '') {
          if ($(partner).attr('data-partner-level') !== this.level) {
            display = 'none';
          }
        }

        if (this.region != null && this.region !== '') {
          if ($(partner).attr('data-partner-available').indexOf(this.region) < 0) {
            display = 'none';
          }
        }

        if (this.hq !== '') {
          if ($(partner).attr('data-partner-location').toUpperCase() !== this.hq) {
            display = 'none';
          }
        }

        $(partner).css('display', display);

      });
    });
  }
}
