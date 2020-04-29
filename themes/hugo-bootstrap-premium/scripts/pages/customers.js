import Hash from 'hash-handler';

import helpers from '../lib/helpers';

export default class Customers {
  init() {
    this.hash = Hash();
    this.$customers = $('.customers');
    this.params = helpers.getParams(window.location.search);

    this.$industrySelect = $('select.industry', this.$customers);
    this.$regionSelect = $('select.region', this.$customers);

    this.initCustomerSelect();
  }

  initCustomerSelect() {
    this.$industrySelect.on('change', () => {
      this.filterResults();
    });
    this.$regionSelect.on('change', () => {
      this.filterResults();
    });
    this.loadDefaultValues();
  }

  filterResults() {
    this.industry = this.$industrySelect.val();
    this.region = this.$regionSelect.val();
    this.hash.set({
      industry: this.industry,
      region: this.region
    });
    $('ul.cards li', this.$customers).each((index, customer) => {
      let display = 'block';
      if (this.industry !== '') {
        if ($(customer).attr('data-customer-industry') !== this.industry) {
          display = 'none';
        }
      }
      if (this.region !== '') {
        if ($(customer).attr('data-customer-region') !== this.region) {
          display = 'none';
        }
      }

      $(customer).css('display', display);
    });
  }

  loadDefaultValues() {
    const hashValue = this.hash.get();
    if (hashValue != null) {
      const { region, industry } = hashValue;
      if (region != null) {
        this.$regionSelect.val(region).change();
      }
      if (industry != null) {
        this.$industrySelect.val(industry).change();
      }
    }
  }
}
