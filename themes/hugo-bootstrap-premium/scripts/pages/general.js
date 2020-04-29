import moment from 'moment';
import helpers from '../lib/helpers';


require('moment/locale/de');
require('moment/locale/en-gb');

export default class General {
  static polyfillFind() {
    if (!Array.prototype.find) {
      Object.defineProperty(Array.prototype, 'find', {
        value: function (predicate) {
          // 1. Let O be ? ToObject(this value).
          if (this == null) {
            throw new TypeError('"this" is null or not defined');
          }

          var o = Object(this);

          // 2. Let len be ? ToLength(? Get(O, "length")).
          var len = o.length >>> 0;

          // 3. If IsCallable(predicate) is false, throw a TypeError exception.
          if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
          }

          // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
          var thisArg = arguments[1];

          // 5. Let k be 0.
          var k = 0;

          // 6. Repeat, while k < len
          while (k < len) {
            // a. Let Pk be ! ToString(k).
            // b. Let kValue be ? Get(O, Pk).
            // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
            // d. If testResult is true, return kValue.
            var kValue = o[k];
            if (predicate.call(thisArg, kValue, k, o)) {
              return kValue;
            }
            // e. Increase k by 1.
            k++;
          }

          // 7. Return undefined.
          return undefined;
        }
      });
    }
  }
  static attachPopUp() {
    const baseID = $(this).attr('data-diagram-element');
    const svgElement = $(`[data-element-id="${baseID}"] .djs-visual`);

    // Attach pop-up
    svgElement.attr({
      rel: 'popover',
      class: 'bpmn-hover'
    }).popover({
      container: 'body',
      placement: 'auto',
      trigger: 'hover',
      title: $(this).attr('title'),
      content: $(this).attr('data-content')
    });
  }
  static showLightbox(evt, $lightboxImg, $lightboxContent) {
    const img = evt.target.src ? evt.target : $('img', evt.target)[0];
    $lightboxImg.attr('src', img.src);

    // if (img.naturalWidth < window.document.body.clientWidth) {
    //   $lightboxContent.css('margin-left', (-4 - (img.naturalWidth / 2)) + 'px');
    // } else {
    //   $lightboxContent.css('margin-left', (0 - (window.document.body.clientWidth / 2)) + 'px');
    // }

    // if (img.naturalHeight < window.document.body.clientHeight) {
    //   $lightboxContent.css('margin-top', (-4 - (img.naturalHeight / 2)) + 'px');
    // } else {
    //   $lightboxContent.css('margin-top', (0 - (window.document.body.clientHeight / 2)) + 'px');
    // }
    $lightboxContent.parent().addClass('open');
  }

  static attachLightbox() {
    const $lightbox = $('<div class="lightbox"></div>');
    const $lightboxContent = $('<div class="content"></div>');
    const $lightboxImg = $('<img>');
    $lightbox.append($lightboxContent);
    $lightbox.on('click', () => {
      $lightbox.removeClass('open');
    });
    $lightboxContent.append($lightboxImg);
    $('body').append($lightbox);
    $('figure.image.clickable img:not(.js-processed)').each((index, img) => {
      img.classList.add('js-processed');
      if (img.parentNode.parentNode.classList.contains('no-lightbox')) { return; }
      if (img.clientWidth < img.naturalWidth) {
        const figure = img.parentNode.parentNode;
        figure.classList.add('clickable');
        figure.addEventListener('click', (evt) => {
          this.showLightbox(evt, $lightboxImg, $lightboxContent);
        });
      }
    });
  }

  static initHoverProducts() {
    $('#cawemo, #admin, #optimize, #tasklist, #cockpit, #modeler, #workflow-engine, #decision-engine').on('click', (evt) => {
      let id = $(evt.target).attr('id');
      if (evt.target.pathName !== 'g' || id.indexOf('-bg') > -1 || id == null) {
        id = $(evt.target).parent().attr('id');
      }
      if ($(`#${id}`)[0].tagName !== 'g' || id.indexOf('-bg') > -1 || id == null) {
        id = $(`#${id}`).parent().attr('id');
      }
      const newTarget = $(`#product-${id}`);
      $('html,body').animate({
        scrollTop: newTarget.offset().top
      }, 1000);
    });
  }

  static initOptOut() {
    $('.tracking, .not-tracking').hide();

    const hs_cookie = '__hs_do_not_track';
    const is_tracked = Cookies.get(hs_cookie) !== 'yes' ? true : false;
    // console.log({is_tracked});

    if (is_tracked) {
      $('.tracking').show();
    } else {
      $('.not-tracking').show();
    }

    $('.doNotTrack').on('click', () => {
      if (window._hsq)
        window._hsq.push(['doNotTrack']);
      else
        Cookies.set(hs_cookie, 'yes');

      window.location.reload();
    });

    $('.doTrack').on('click', () => {
      if (window._hsq)
        window._hsq.push(['doNotTrack', { track: true }]);
      else
        Cookies.set(hs_cookie, 'no');

      window.location.reload();
    });

  }

  static newsBar() {

    let hide_bar  = sessionStorage.getItem('hide-news-bar');
    let $news_bar = $('.news-bar');
    let size      = $news_bar.data('size');

    if ($news_bar.length) {

      if (!hide_bar){
        $('body').addClass('show-news-bar');

        if( size )
         $('body').addClass(`bar-${size}`);
      }


      $news_bar.find('.news-bar__close').on('click', () => {
        $('body').removeClass('show-news-bar');
        sessionStorage.setItem('hide-news-bar', true);
      });

    }

  }

  static initAnimations() {
    moment.locale(helpers.getLocale());
    $('.parse-date').each((index, item) => {
      $(item).html(moment($(item).html()).format('LL'));
    });
    $('.parse-date-time').each((index, item) => {
      $(item).html(moment($(item).html()).format('LLLL'));
    });

    this.initOptOut();
    $('.bpmn-diagram-popover').each(this.attachPopUp);
    this.attachLightbox();
    this.initHoverProducts();
    $('.community-download').on('click', () => {
      dataLayer.push({ 'event': 'DownloadCommunity' });
    });
    $('.error_404').each((index, item) => {
      dataLayer.push({ '404error': window.location.href });
      window._hsq.push(["trackEvent", {
        id: "404error",
        value: window.location.href
      }]);
    });

    var svg = document.querySelectorAll('figure svg');
    var len = svg.length;
    for (var i = 0; i < len; i++) {
      if (parseInt(svg[i].parentNode.clientWidth) > 0) {
        var viewBox = svg[i].getAttribute('viewBox');
        viewBox = viewBox.replace(/\s\s+/g, ' ');
        var w = viewBox.split(' ')[2];
        var h = viewBox.split(' ')[3];
        var x = h / w * 100;
        $(svg[i].parentNode).css('padding-bottom', x + '%');
        //svg[i].parentNode.setAttribute('style', 'padding-bottom:' + x +'%');
      }
    }


    // subnavigation
    $('.scroll-left a').on('click', (event) => {
      event.preventDefault();
      $('.scroll-left').parent().scrollLeft($('.scroll-right').parent().scrollLeft() - 30);
    });
    $('.scroll-right a').on('click', (event) => {
      event.preventDefault();
      $('.scroll-right').parent().scrollLeft($('.scroll-right').parent().scrollLeft() + 30);
    });

    $('a[href*="#"]:not([href="#"]):not([data-toggle="tab"])').on('click', function () {
      if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && window.location.hostname === this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
      return true;
    });

    try {
      const $elem = $(`#${$(window.location).attr('href').split('#/')[1]}`);
      const $others = $(`.${$elem.attr('class')}`);
      const offset = $elem.offset();
      const offsetTop = offset.top;

      $(window).on('load', () => {
        $('body, html').delay(250).animate({
          opacity: 1,
          scrollTop: offsetTop
        }, 'slow', () => {
          $others.not($elem).animate({
            opacity: '.3'
          }).delay(5000).animate({
            opacity: '1'
          })
            .stop();
        });
      });
    } catch (err) {
      return false;
    }
  }
}
