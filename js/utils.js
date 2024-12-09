var Utils = {
  /**
   * Returns a random number between min and max
   * @param {number} min Minimum number
   * @param {number} max Maximum number
   * @return {number} Random number between min and max
   */
  randomRange: function (min, max) {
    return Math.random() * (max - min) + min;
  },

  /*
   *   Random integer beween a range. Rounded.
   */
  randomRangeRound: function (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  },

  /*
   *   Randomise array
   *   Ref: http://dtm.livejournal.com/38725.html
   */
  shuffle: function (list) {
    var i, j, t;
    for (i = 1; i < list.length; i++) {
      j = Math.floor(Math.random() * (1 + i)); // choose j in [0..i]
      if (j != i) {
        t = list[i]; // swap list[i] and list[j]
        list[i] = list[j];
        list[j] = t;
      }
    }
    return list;
  },

  /*
   *   Checks if var is a function
   */
  isFunction: function (possibleFunction) {
    // return (typeof(possibleFunction) == typeof(Function));
    return possibleFunction && typeof possibleFunction == typeof Function;
  },

  /*
   *   Is value in array (Doesn't support ie6)
   */
  isInArray: function (arr, obj) {
    return arr.indexOf(obj) != -1;
  },

  getDeviceInfo: function () {
    var pixelRatio = window.devicePixelRatio || 1;

    /*
     * You should NOT use window.innerWidth and window.innerHeight to determine
     * phone model due to it reporting the viewport size. If the page is zoomed in,
     * it will report the size of the zoomed in area, and not the proper size of
     * the available screen.
     */
    // var viewport = {
    //     width: window.innerWidth,
    //     height: window.innerHeight
    // };

    // // *** Use this .
    // var screen = {
    //     width: window.screen.availWidth * pixelRatio,
    //     height: window.screen.availHeight * pixelRatio
    // };

    var android = /android/i.test(navigator.userAgent),
      webos = /hpwos/i.test(navigator.userAgent),
      iPad = /iPad/i.test(navigator.userAgent),
      iPhone = /iPhone/i.test(navigator.userAgent),
      iPhone3x = iPhone && pixelRatio == 1,
      iPhone4x = iPhone && pixelRatio == 2 && window.screen.availHeight == 480,
      iPhone5x = iPhone && pixelRatio == 2 && window.screen.availHeight == 568,
      iOS = /iPhone OS 5_0/i.test(navigator.userAgent),
      iOS = iPhone || iPad,
      mobile = iOS || android || webos;

    var deviceInfo = {
      pixelRatio: pixelRatio,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      screen: {
        width: window.screen.availWidth * pixelRatio,
        height: window.screen.availHeight * pixelRatio,
      },
      android: android,
      webos: webos,
      iPad: iPad,
      iPhone: iPhone,
      iPhone3x: iPhone3x,
      iPhone4x: iPhone4x,
      iPhone5x: iPhone5x,
      ios5: iOS,
      iOS: iOS,
      mobile: mobile,
    };

    return deviceInfo;
  },

  /**
   * Instead of using arra.concat, returns a new array on each call making it
   * very heavy, use this method.
   *
   *  Slow: output = output.concat( newOutput );
   *
   *  Much faster:  fastConcat( output, newOutput );
   */
  fastConcat: function (dest, src) {
    for (var i = 0; i < src.length; i++) {
      dest.push(src[i]);
    }
    return dest;
  },

  sortByName: function (arr) {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
  }

};
