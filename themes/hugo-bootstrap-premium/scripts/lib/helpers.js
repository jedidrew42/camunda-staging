class Helpers {
  static getUrl(type) {
    let host = '';
    // dev fallback
    if (window.location.hostname === 'localhost') {
      host = 'http://stage.camunda.com';
    }
    host += `/backend/${type}/`;
    return host;
  }

  static getLocale() {
    return $('body').attr('class').match(/lang[\w-]*\b/)[0].split('lang-')[1];
  }

  static getParams(query) {
    if (!query) {
      return { };
    }

    return (/^[?#]/.test(query) ? query.slice(1) : query)
      .split('&')
      .reduce((params, param) => {
        const [key, value] = param.split('=');
        params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
        return params;
      }, { });
  }

  static getFile(data, sys) {
    let file = '';
    data.includes.Asset.forEach((asset) => {
      if (asset.sys.id === sys.id) {
        file = asset.fields.file;
      }
    });
    return file;
  }
}

module.exports = Helpers;
