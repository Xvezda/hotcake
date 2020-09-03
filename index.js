/*
 * Copyright (c) 2020 Xvezda <xvezda@naver.com>
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
(function() {
  var initialized = false;

  function normalize(url) {
    var virtualLink = document.createElement('a');
    virtualLink.href = url;
    return virtualLink.href;
  }

  function poll(url, callback) {
    var xhr = new XMLHttpRequest();
    var newUrl = url + ((url.indexOf('?') !== -1 ? '&' : '?') +
      (new Date).getTime());
    xhr.open('GET', newUrl);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    xhr.onreadystatechange = function(event) {
      switch (xhr.readyState) {
        case XMLHttpRequest.DONE:
          callback(event.target.response, url);
          break;
        default:
          // throw new Error('unexpected state code')
          break;
      }
    };

    xhr.send(null);
  }

  function Hotcake(options) {
    initialized = true;

    var cache = {};
    var defaultOptions = {
      mode: 'parallel',
      observe: ['./'],
      interval: 3000,
    };
    options = options || {}

    for (var key in defaultOptions) {
      if (!(key in options)) {
        options[key] = defaultOptions[key];
      }
    }

    function polling(url) {
      setTimeout(function() {
        poll(url, function(response) {
          var key = normalize(url);
          var oldData = cache[key];
          var newData = response;
          if (oldData !== undefined && oldData !== newData) {
            return window.location.reload();
          }
          cache[key] = newData;
          polling(url);
        });
      }, options.interval);
    }

    // Initialize caches
    for (var i = 0; i < options.targets.length; ++i) {
      poll(options.targets[i], function(response, url) {
        cache[normalize(url)] = response;
        polling(url);
      });
    }
  }

  // Expose
  if (typeof window !== 'undefined' && !('Hotcake' in window)) {
    window.Hotcake = Hotcake;
  }

  window.onload = function(event) {
    if (!initialized) {
      window.Hotcake.o = new Hotcake();  // Active instance
    }
  };
})();
