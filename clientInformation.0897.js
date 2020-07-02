/* >> jQuery $ recover: rel-1-0-0 */
ll = {};

// As someone calls ``jQuery.noConflict(true)`` later, we keep a reference to jQuery here
ll.jQuery = ll.$ = $;
/* << */

/* >> jQuery extensions Version: rel-3-0-0 */
(function ($) {
  ll.$.fn.extend({
    allAttrs: function (withoutList) {
      var set = this;
      var attrsObjsList = [];
      withoutList = withoutList || [];
      set.each(function (n) {
        var obj = {};
        for (var i = 0; i < this.attributes.length; ++i) {
          var a = this.attributes[i];
          if (ll.$.inArray(a.nodeName, withoutList) == -1) {
            obj[a.nodeName] = a.nodeValue;
          }
        }
        attrsObjsList.push(obj);
      });
      return attrsObjsList;
    },
    // if value is a jquery object .html() will be used to handle value.
    // Otherwise a dom xhtml string representation will be produced.
    xhtml: function (value) {
      var i,
        j,
        node,
        nodeName,
        nodeType,
        attr,
        attrName,
        attrValue,
        str,
        singleTags = [
          "img",
          "br",
          "hr",
          "area",
          "base",
          "basefont",
          "col",
          "frame",
          "input",
          "isindex",
          "link",
          "meta",
          "param",
        ],
        encodeSpecialChars = function (s) {
          s = s.replace(/&/g, "&amp;");
          s = s.replace(/</g, "&lt;");
          s = s.replace(/>/g, "&gt;");
          //s = s.replace(/"/, '&quote;');
          return s;
        };
      if (value === undefined) {
        // wrap value into root.
        node = this.get(0);
        nodeName = node.nodeName.toLowerCase();
        nodeType = node.nodeType;
        if (nodeType === 1) {
          // element node
          str = "<" + nodeName;
          if (node.attributes.length) {
            for (j = 0; j < node.attributes.length; j += 1) {
              attr = node.attributes[j];
              attrName = attr.nodeName.toLowerCase();
              attrValue = attr.nodeValue;
              str +=
                " " + attrName + '="' + encodeSpecialChars(attrValue) + '"';
            }
          }
          if (jQuery.inArray(nodeName, singleTags) > -1) {
            str += " />";
          } else {
            str += ">";
            for (i = 0; i < node.childNodes.length; i += 1) {
              str += jQuery.fn.xhtml.call(ll.$(node.childNodes[i]));
            }
            str += "</" + nodeName + ">";
          }
          return str;
        } else if (nodeType === 3) {
          return encodeSpecialChars(node.nodeValue);
        } else if (nodeType === 8) {
          return "/*" + encodeSpecialChars(node.nodeValue) + "*/";
        }
        return "";
      } else {
        jQuery.fn.html(value);
      }
    },
    equalSize: function (dimension) {
      var equalWidth, equalHeight;
      equalWidth = function (items) {
        var maxVal = 0;
        items.each(function (i) {
          if (ll.$(this).width() > maxVal) {
            maxVal = ll.$(this).width();
          }
        });
        if (Utils.migBrowser.msie && Utils.migBrowser.version == 6.0) {
          items.css({ width: maxVal });
        }
        items.css({ "min-width": maxVal });
      };
      equalHeight = function (items) {
        var maxVal = 0;
        items.each(function (i) {
          if (ll.$(this).height() > maxVal) {
            maxVal = ll.$(this).height();
          }
        });
        if (Utils.migBrowser.msie && Utils.migBrowser.version == 6.0) {
          items.css({ height: maxVal });
        }
        items.css({ "min-height": maxVal });
      };
      if (!dimension || dimension === "both") {
        equalWidth(ll.$(this));
        equalHeight(ll.$(this));
      } else if (dimension === "width") {
        equalWidth(ll.$(this));
      } else if (dimension === "height") {
        equalHeight(ll.$(this));
      }
      return this;
    },
  });

  // get iso date and get iso time
  ll.$.extend({
    // deprecated
    getISODate: function (gmtDateStr, lang) {
      var dateBox = {
          de: {
            month: [
              "Januar",
              "Februar",
              "MÃ¤rz",
              "April",
              "Mai",
              "Juni",
              "Juli",
              "August",
              "September",
              "Oktober",
              "November",
              "Dezember",
            ],
            separator: ".",
          },
          en: {
            month: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            separator: "/",
          },
        },
        date,
        sep,
        y,
        fy,
        m,
        d,
        md,
        mm,
        my;
      if (arguments.length === 0) {
        date = new Date();
        lang = "en";
      } else if (arguments.length == 1) {
        var arg = arguments[0];
        if (typeof arg == "string" && arg.length == 2) {
          lang = arg;
          date = new Date();
        } else {
          lang = "en";
          date = new Date(gmtDateStr);
        }
      } else {
        date = new Date(gmtDateStr);
      }
      sep = dateBox[lang].separator;
      y = date.getYear() - 100;
      fy = date.getFullYear();
      m = date.getMonth();
      d = date.getDate();
      md = d < 10 ? "0" + d : d;
      mm = m + 1 < 10 ? "0" + (m + 1) : m + 1;
      my = y < 10 ? "0" + y : y;
      if (lang == "de") {
        return {
          short: d + sep + (m + 1) + sep + y,
          _short: d + sep + (m + 1) + sep + y,
          middle: md + sep + mm + sep + my,
          _middle: md + sep + mm + sep + my,
          long: md + sep + dateBox[lang].month[m] + sep + fy,
          _long: md + sep + dateBox[lang].month[m] + sep + fy,
        };
      }
      return {
        short: m + 1 + sep + d + sep + y,
        _short: m + 1 + sep + d + sep + y,
        middle: mm + sep + md + sep + my,
        _middle: mm + sep + md + sep + my,
        long: dateBox[lang].month[m] + sep + md + sep + fy,
        _long: dateBox[lang].month[m] + sep + md + sep + fy,
      };
    },
    // deprecated
    getISOTime: function (gmtDateStr) {
      var date, h, m, s;
      if (gmtDateStr) {
        date = new Date(gmtDateStr);
      }
      date = new Date();
      h = date.getHours();
      if (h < 10) {
        h = "0" + h;
      }
      m = date.getMinutes();
      if (m < 10) {
        m = "0" + m;
      }
      s = date.getSeconds();
      if (s < 10) {
        s = "0" + s;
      }
      return h + ":" + m + ":" + s;
    },
    formatDate: function (gmtDateStr, lang) {
      var dateBox = {
          de: {
            month: [
              "Januar",
              "Februar",
              "MÃ¤rz",
              "April",
              "Mai",
              "Juni",
              "Juli",
              "August",
              "September",
              "Oktober",
              "November",
              "Dezember",
            ],
            separator: ".",
          },
          en: {
            month: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            separator: "/",
          },
        },
        date,
        sep,
        fy,
        m,
        d,
        y,
        md,
        mm,
        my;
      if (arguments.length === 0) {
        date = new Date();
        lang = "en";
      } else if (arguments.length == 1) {
        arg = arguments[0];
        if (typeof arg == "string" && arg.length == 2) {
          lang = arg;
          date = new Date();
        } else {
          lang = "en";
          date = new Date(gmtDateStr);
        }
      } else {
        date = new Date(gmtDateStr);
      }
      sep = dateBox[lang].separator;
      y = date.getYear() - 100;
      fy = date.getFullYear();
      m = date.getMonth();
      d = date.getDate();
      y = y < 10 ? "0" + y : y;
      md = d < 10 ? "0" + d : d;
      mm = m + 1 < 10 ? "0" + (m + 1) : m + 1;
      my = fy;
      if (lang == "de") {
        return {
          _short: d + sep + (m + 1) + sep + y,
          _middle: md + sep + mm + sep + my,
          _long: [md + sep, dateBox[lang].month[m], fy].join("&nbsp;"),
        };
      }
      return {
        _short: m + 1 + sep + d + sep + y,
        _middle: mm + sep + md + sep + my,
        _long: [dateBox[lang].month[m] + sep, md, fy].join("&nbsp;"),
      };
    },
    formatTime: function (gmtDateStr) {
      var date = gmtDateStr ? new Date(gmtDateStr) : new Date(),
        h,
        m,
        s;
      h = date.getHours();
      if (h < 10) {
        h = "0" + h;
      }
      m = date.getMinutes();
      if (m < 10) {
        m = "0" + m;
      }
      s = date.getSeconds();
      if (s < 10) {
        s = "0" + s;
      }
      return { time: h + ":" + m + ":" + s, timeWithoutSec: h + ":" + m };
    },
  });

  // setter and getter for language resources
  ll.$.extend({
    lang: function (name, lang) {
      if (arguments.length > 1) {
        if (typeof lang === "object") {
          if (!ll.$.lang._res) {
            ll.$.lang._res = {};
          }
          ll.$.lang._res[name] = lang;
          return lang;
        } else {
          if (
            ll.$.lang._res &&
            ll.$.lang._res[name] &&
            ll.$.lang._res[name][lang]
          ) {
            return ll.$.lang._res[name][lang];
          }
        }
        return "?-invalid-language-resource-?";
      } else if (arguments.length == 1) {
        if (typeof I18N_LANGUAGE !== "undefined") {
          lang = I18N_LANGUAGE;
        } else {
          lang = ll.$("html").prop("lang");
        }
        if (!lang) {
          lang = "en";
        }
        if (ll.$.lang._res) {
          return ll.$.lang._res[name][lang];
        }
        return "?-invalid-language-resource-?";
      }
      if (typeof I18N_LANGUAGE !== "undefined") {
        lang = I18N_LANGUAGE;
      } else {
        lang = ll.$("html").prop("lang");
      }
      return lang;
    },
  });

  // scroll to plugin easing type elasout
  ll.$.easing.elasout = function (x, t, b, c, d) {
    var s = 1.70158,
      p = 0,
      a = c;
    if (t === 0) {
      return b;
    }
    if ((t /= d) == 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = (p / (2 * Math.PI)) * Math.asin(c / a);
    }
    return (
      a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
      c +
      b
    );
  };

  // serialize json data
  ll.$.extend({
    toJson: function (o) {
      var type = typeof o,
        escapeable,
        meta,
        tempList,
        i,
        k;
      if (type == "undefined") {
        return "undefined";
      } else if (type == "number" || type == "boolean") {
        return o + "";
      } else if (o === null) {
        return "null";
      } else if (type == "string") {
        escapeable = /["\\\x00-\x1f\x7f-\x9f]/g;
        meta = {
          "\b": "\\b",
          "\t": "\\t",
          "\n": "\\n",
          "\f": "\\f",
          "\r": "\\r",
          '"': '\\"',
          "\\": "\\\\",
        };
        if (escapeable.test(o)) {
          return (
            '"' +
            o.replace(escapeable, function (a) {
              var c = meta[a];
              if (typeof c === "string") {
                return c;
              }
              c = a.charCodeAt();
              return (
                "\\u00" +
                Math.floor(c / 16).toString(16) +
                (c % 16).toString(16)
              );
            }) +
            '"'
          );
        }
        return '"' + o + '"';
      } else if (type == "function") {
        return;
      } else if (type == "object" && typeof o.toJson == "function") {
        return o.toJson();
      } else if (type == "object" && typeof o.length == "number") {
        tempList = [];
        for (i = 0; i < o.length; i++) {
          tempList.push(ll.$.toJson(o[i]));
        }
        return "[" + tempList.join(",") + "]";
      }

      tempList = [];
      if (
        typeof o.toJsonAttrs == "object" &&
        typeof o.toJsonAttrs.length == "number"
      ) {
        for (i = 0; i < o.toJsonAttrs.length; i++) {
          k = o.toJsonAttrs[i];
          if (typeof o[k] != "function") {
            tempList.push(ll.$.toJson(k) + ":" + ll.$.toJson(o[k]));
          }
        }
      } else {
        for (k in o) {
          if (typeof o[k] != "function") {
            tempList.push(ll.$.toJson(k) + ":" + ll.$.toJson(o[k]));
          }
        }
      }
      return "{" + tempList.join(",") + "}";
    },
  });
})(jQuery);
/* << */

/* >> utilities requires jQuery 1.2.6+ Version: rel-2-0-0 */
/**
 * Utils holds the most common used utilities to get a session or parameters
 * from URLs and many other utility functions. This library will be extended
 * in short intervals. We try to keep the library as small as possible.
 * @version  rel-1-19-3
 * @author   <a href="mailto:peter@livinglogic.de">Peter Boeker</a>}
 * @public
 * @namespace Utils holds the most common used utilities to get a session or parameters from URLs and many other utility functions.
 * @property {string} pixelPath Standard path to the spacer pixel gif.
 * @property {Object} [pingJob] The variable which holds the handler of a job which regularly requests the pong.do
 *                              action of the CMS to keep the session alive. If for any reason the job has to be
 *                              stopped this variable has to be used.
 */
Utils = {
  pixelPath: "/xist4c/px/spc.gif",
  pingJob: null,
  staticTestUrlRex: /xist4c\/xist4c/,
  /**
   * Anonymous function. Use it as a placeholder.
   * @deprecated This method should no longer be used.
   * @public
   */
  doNothing: function () {},
  /**
   * Returns a jquery object with a spacer pixel image DOM element.
   * @public
   * @return   {jquery object}
   */
  pixel: function () {
    return ll.$(
      '<img src="' +
        this.pixelPath +
        '" height="1" width="1" border="0" alt=""/>'
    );
  },
  /**
   * Same as method <b>pixel()</b> but it returns only XHTML string for the pixel image
   * (instead of a DOM object).
   * @public
   * @return   {String}
   */
  pixelAsString: function () {
    return (
      '<img src="' +
      this.pixelPath +
      '" height="1" width="1" border="0" alt=""/>'
    );
  },
  /**
   * Recalculates an image with defined attributes in a given object.
   * @public
   * @param    {Object} args Image description object that holds information about
   *							 the image, maximum width, maximum height and whether the image
   *							 should be scaled proportional or not.
   *							 Attention: For IE you must pass the image in the traditional way, like
   *											"new Image(...)" otherwise the recalculation fails.
   * @example
   * var scaledImage = Utils.getRecalculatedImage({
   *		"image": // jQuery selected image. On IE then you must pass the image
   *					//	in the traditional way like a image generated with
   *					// "new Image(...)".
   *		"maxWidth": 90 // Maximum width of the image.
   *		"maxHeight": 110 // Maximum height of the image.
   *		"proportional": true // Scale image proportional true / false.
   * });
   * @return   {jquery object} jQuery object of the scaled image.
   */
  getRecalculatedImage: function (args) {
    var img = args.image,
      w,
      mw,
      mh,
      nw,
      nh,
      f;
    if (!img.attr || Utils.browser.msie) {
      w = img.width;
      h = img.height;
    } else {
      w = img.attr("width");
      h = img.attr("height");
    }
    mw = args.maxWidth;
    mh = args.maxHeight;
    f = 1;
    if (args.proportional) {
      f = mw / w;
      nw = mw;
      nh = h * f;
      if (nh > mh) {
        f = mh / nh;
        nh = mh;
        nw = nw * f;
      }
      if (!img.attr || Utils.browser.msie) {
        img.width = nw;
        img.height = nh;
      } else {
        img.attr("width", nw);
        img.attr("height", nh);
      }
      return img;
    }
    if (!img.attr || Utils.browser.msie) {
      img.width = mw;
      img.height = mh;
    } else {
      img.attr("width", mw);
      img.attr("height", mh);
    }
    return img;
  },
  /**
   * Use this method to quickly get an object with all URL parameters.
   * If there no URL parameters the method returns null.
   * If multible URL parameters have the same name the resulting object
   * hold them as an array of these values.
   * @public
   * @param    {String} url URL with parameters or only the parameter string like <code>?foo=a&foo2=b&foo3=c</code>.
   *							 <b>Important</b>: If you pass only the parameter string you have to ensure that it starts
   *							 with a question mark!
   * @param    {Boolean} [dontDecode] In normal use, the method will decode all URL parameters.
   *											You can prevent this behavior by passing this boolean parameter.
   * @return   {Object} Object with keys as parameter names and values as parameter values.
   */
  getUrlParamsAsJson: function (url, dontDecode) {
    var self = this,
      urlParams;
    if (!url) {
      url = window.location.href;
    }
    if (url.search(/\?/) > -1 && url.search(/\=/) > -1) {
      urlParams = url.substring(url.search(/\?/) + 1, url.length);
      urlParams = urlParams.split("&");
      jParams = {};
      ll.$(urlParams).each(function () {
        var parVal = this.split("="),
          record,
          k = parVal[0],
          v,
          i;
        if (parVal.length > 2) {
          v = "";
          for (i = 1; i < parVal.length; i += 1) {
            v += parVal[i] + "=";
          }
          v = v.substring(0, v.lastIndexOf("="));
        } else {
          v = parVal[1];
        }
        if (!dontDecode) {
          k = decodeURIComponent(k);
          v = decodeURIComponent(v);
        }
        if (jParams[k] && typeof jParams[k] !== "undefined") {
          if (self.isArray(jParams[k])) {
            jParams[k].push(v);
          } else {
            jParams[k] = [jParams[k]];
            jParams[k].push(v);
          }
        } else {
          jParams[k] = v;
        }
      });
      return jParams;
    }
    return null;
  },
  /**
   * Use this method to quickly transform an object with key, value pairs into
   * an URL parameter string.
   * If a key holds an array of values the resulting string will look like this:
   * <code>?foo=a&foo=b&foo=c</code>.
   * @public
   * @param    {Object} params Object with key, value pairs.
   * @param    {Boolean} [noEmptyParams] In normal use the method returns all given
   *													object keys if empty or not. You can skip
   *													empty parameters by passing true for noEmptyParams.
   * @return   {String} URL encoded parameter string with a leading question mark.
   */
  getUrlParamsFromJson: function (params, noEmptyParams) {
    var paramStr = "?",
      i,
      self = this,
      k;
    if (params && typeof params === "object") {
      for (k in params) {
        if (params[k] && self.isArray(params[k])) {
          for (i = 0; i < params[k].length; i += 1) {
            paramStr += [
              encodeURIComponent(k),
              "=",
              encodeURIComponent(params[k][i]),
              "&",
            ].join("");
          }
        } else {
          if (noEmptyParams) {
            if (params[k]) {
              paramStr += [
                encodeURIComponent(k),
                "=",
                encodeURIComponent(params[k]),
                "&",
              ].join("");
            }
          } else {
            paramStr += [
              encodeURIComponent(k),
              "=",
              encodeURIComponent(params[k]),
              "&",
            ].join("");
          }
        }
      }
      return paramStr.substring(0, paramStr.length - 1);
    }
    return null;
  },
  /**
   * Returns a string with stripped tags.
   * @public
   * @param    {String} str String to get tag stripped.
   * @return   {String} Tag stripped string.
   */
  stripTags: function (str) {
    if (typeof str == "string") {
      return str.replace(/<\/?[^>]+>/gi, "");
    }
    return null;
  },
  /**
   * Use this method if you have a long string that must be clipped to show as an
   * teaser in a news list etc.
   * <b>Important</b>: Dont use this method if you have a HTML-string. The method will
   * not recognize it and can potentially clip in the middle of a tag!
   * @example
   * var string = Utils.clipStringAfter(fooStr, 250, {
   *		"endChar": "." // Character to search for after tge clipping point
   *							// passed in.
   *		"decorator": "..." // String that is added to the clipped string.
   * });
   * @public
   * @param    {String} str plain text.
   * @param    {Integer} len String length to clip to. If the option <code>endChar</code>
   *                     is not set, the method tries to clip the string at this position.
   *                     With the option <code>endChar</code> the method searches for the
   *                     next occurrence of <code>endChar</code> and clips the string there.
   * @param    {Object} opts Object that holds properties to control the behavior.
   * @return   {String} Clipped string.
   */
  clipStringAfter: function (str, len, opts) {
    var rStr = "",
      defaults = {
        endChar: null,
        decorator: null,
      },
      i;
    if (opts && this.isObject(opts)) {
      ll.$.extend(defaults, opts);
    }
    if (str.length > len) {
      rStr = str.substring(0, len);
      if (typeof defaults.endChar === "string") {
        if (str.substr(len, 1) != defaults.endChar) {
          for (i = 0; i < str.substr(len, str.length).length; i += 1) {
            if (str.substr(len + i, 1) == defaults.endChar) {
              rStr += str.substr(len, i);
              break;
            }
          }
        }
      }
      if (typeof defaults.decorator === "string") {
        rStr += defaults.decorator;
      }
      return rStr;
    }
    return str;
  },
  /**
   * Converts a given native float number into a simple german locale number.
   * @public
   * @param    {float} f Float number to convert.
   * @return   {String}
   */
  parseDeFloat: function (f) {
    f = f.replace(/\./g, "");
    f = f.replace(/\,/, ".");
    return f;
  },
  /**
   * Returns the URL session id if any.
   * @deprecated Use {@link Utils.getXist4cSessionId} instead.
   */
  getUrlSession: function (keyString) {
    var sidKeyLength = 12,
      sidKeyRex = /;jsessionid=/,
      sid = null,
      loc = window.location.href,
      params = Utils.getUrlParamsAsJson(),
      paramStartRex = /\?/,
      endPos,
      ks = keyString || "";
    if (sidKeyRex.test(loc)) {
      if (params) {
        endPos = loc.search(paramStartRex);
      } else {
        endPos = loc.length;
      }
      return ks + loc.substring(loc.search(sidKeyRex) + sidKeyLength, endPos);
    }
    return "";
  },
  /**
   * Tests if the given parameter is an object.
   * @public
   * @param    {Object} obj To test object.
   * @return   {Boolean}
   */
  isObject: function (obj) {
    return obj && typeof obj === "object" && typeof obj.length !== "number";
  },
  /**
   * Tests if the given parameter is an array.
   * @public
   * @param    {Object} obj To test object.
   * @return   {Boolean}
   */
  isArray: function (obj) {
    return (
      obj &&
      typeof obj !== "string" &&
      typeof obj === "object" &&
      typeof obj.length === "number"
    );
  },
  /**
   * Tests if the given parameter is a function.
   * @public
   * @param    {Object} obj To test object.
   * @return   {Boolean}
   */
  isFunction: function (obj) {
    return typeof obj === "function";
  },
  /**
   * Tests if the given parameter is a string.
   * @public
   * @param    {Object} obj To test object.
   * @return   {Boolean}
   */
  isString: function (obj) {
    return typeof obj === "string";
  },
  /**
   * Use this function if you need to test something in a loop and
   * you want to do something if the test is true.
   * For web developers, this is useful when you have to wait until a DOM
   * element has been rendered before doing things with it.
   * @public
   * @param    {Function} condition A Function that tests something and return
   *											 <code>true</code> if the test is true or
   *											 <code>false</code> if not. The interval
   *											 object will be passed to the function.
   *											 The function context is Utils.
   * @param    {Integer} interval The loop interval in milliseconds.
   * @param    {Integer} maxloops Maximum loop count. The loop stops automatically
   *										  if the condition is <code>true</code> or the maximum
   *										  loop count has been reached.
   * @param    {Function} callback If the condition returns true this function will
   *											be called. The interval object will be passed to
   *											the function. The function context is Utils.
   * @return   {void}
   */
  busyWait: function (condition, interval, maxloops, callback) {
    var ivFunc,
      cnt = 0,
      self = this,
      stdInterval = 1000,
      intervalObj = null;
    if (
      parseInt(Number(interval), 10) !== "NaN" &&
      parseInt(Number(interval), 10) > 0
    ) {
      stdInterval = parseInt(interval, 10);
    }
    if (Utils.isFunction(condition)) {
      if (!intervalObj) {
        ivFunc = function () {
          var ready = condition.call(self, intervalObj);
          if (ready) {
            clearInterval(intervalObj);
            intervalObj = null;
            if (Utils.isFunction(callback)) {
              callback.call(self, intervalObj);
            }
          }
          cnt += 1;
          if (cnt == maxloops) {
            clearInterval(intervalObj);
            intervalObj = null;
            return null;
          }
        };
        intervalObj = setInterval(ivFunc, stdInterval);
      }
    }
  },
  /**
   * Returns the currenty used session id if any.
   * First it checks the URL for a session id. If the URL contains no session id the method checks
   * the cookie with the name of the option <code>sessionCookieName</code>. At last
   * <code>XIST4C_Globals.sitemap[0]</code> is tested for a session id.
   * @public
   * @param    {Object} opts Options to change standard behavior. See: {@link Utils.getXist4cSessionId-defaults}
   * @return   {String | null}
   */
  getXist4cSessionId: function (opts) {
    /**
     * Options to change standard behavior
     * @type {Object}
     * @namespace Utils.getXist4cSessionId.defaults
     * @property {String} appGatewayXist4cSessionParam Standard app gateway xist4c session parameter name ("xist4c_eagw_sId").
     * @property {String} sessionPrefix Standard tomcat session prefix (";jsessionid").
     * @property {String} sessionCookieName Standard session cookie name ("JSESSIONID").
     * @property {Boolean} returnOnlyUrlSession If <code>true</code> the method checks only the URL for session info.
     * @property {Boolean} returnWithPrefix Returns the found session with the sessionPrefix.
     */
    var defaults = {
        appGatewayXist4cSessionParam: "xist4c_eagw_sId",
        sessionPrefix: ";jsessionid",
        sessionCookieName: "JSESSIONID",
        returnOnlyUrlSession: false,
        returnWithPrefix: false,
      },
      u = window.location.href,
      c,
      end,
      appGwSessParam = defaults.appGatewayXist4cSessionParam,
      sessionPrefix = defaults.sessionPrefix,
      node,
      params = this.getUrlParamsAsJson();
    if (opts && typeof opts === "object") {
      ll.$.extend(defaults, opts);
    }
    if (params && typeof params[appGwSessParam] !== "undefined") {
      if (defaults.returnWithPrefix) {
        return sessionPrefix + "=" + params[appGwSessParam];
      }
      return params[appGwSessParam];
    }
    if (
      u.search(sessionPrefix) > -1 ||
      (params && params[sessionPrefix.substring(1)])
    ) {
      // Test url for session entry.
      if (u.search(sessionPrefix) == -1) {
        if (defaults.returnWithPrefix) {
          return sessionPrefix + "=" + params[sessionPrefix.substring(1)];
        }
        return params[sessionPrefix.substring(1)];
      } else {
        if (u.indexOf("?") === -1) {
          end = u.length;
        } else {
          end = u.indexOf("?");
        }
        if (defaults.returnWithPrefix) {
          return u.substring(u.search(sessionPrefix), end);
        }
        return u.substring(
          u.search(sessionPrefix) + (sessionPrefix.length + 1),
          end
        );
      }
    } else if (!defaults.returnOnlyUrlSession) {
      if (
        typeof ll.$.cookie !== "undefined" &&
        (c = ll.$.cookie(defaults.sessionCookieName))
      ) {
        // When a cookie holds the session.
        if (defaults.returnWithPrefix) {
          return [sessionPrefix, "=", c].join("");
        }
        return c;
      } else {
        // Last instance, test the XIST4C_GLOBALS for sessioned href's.
        if (
          XIST4C_GLOBALS &&
          XIST4C_GLOBALS.sitemap &&
          XIST4C_GLOBALS.sitemap.length
        ) {
          node = XIST4C_GLOBALS.sitemap[1][0];
          if (node.href && node.href.search(sessionPrefix) > -1) {
            if (node.href.indexOf("?") === -1) {
              end = node.href.length;
            } else {
              end = node.href.indexOf("?");
            }
            if (defaults.returnWithPrefix) {
              return node.href.substring(node.href.search(sessionPrefix), end);
            }
            return node.href.substring(
              node.href.search(sessionPrefix) + (sessionPrefix.length + 1),
              end
            );
          }
        }
      }
    }
    return null;
  },
  /**
   * Returns a default option with the passed name.
   * Use this method with a specific context by calling it with <code>.call()</code>
   * or <code>.apply()</code>.
   * If the default with the <code>name</code> is not found <code>null</code> will be returned.
   * If no <code>defaults</code> object is found <code>null</code> will be returned.
   * If there's no <code>name</code> attribute the <code>defaults</code> object will be returned if present.
   * @example
   * // A little object with defaults.
   * var Foo = {
   *		"defaults": {
   *			"something": "bar"
   *		};
   * };
   *
   * var something = Utils.getDefault.call(Foo, "something");
   * @public
   * @param    {String} name Name of the <code>defaults</code> property.
   * @return   {Mutable | null}
   */
  getDefault: function (name) {
    var dv;
    if (typeof this.defaults === "object") {
      if (typeof name === "string") {
        dv = this.defaults[name];
        if (typeof dv === "undefined") {
          return null;
        }
        return dv;
      }
      return this.defaults;
    }
    return null;
  },
  /**
   * A simple method that returns a timestamp with the current, which can be used for solving ajax caching problems.
   * @public
   * @return   {Long} Timestamp.
   */
  timestamp: function () {
    return new Date().getTime();
  },
  /**
   * A simple function which requests the pong.do action of the CMS.
   * WARNING: Dont use this function directly! Use  <code>{@link Utils.startPinging}</code> and <code>{@link Utils.stopPinging}</code> to
   * handle the ping process.
   * @public
   * @return {Void}
   */
  ping: function () {
    if (typeof waf !== "object") {
      ll.$.post(
        "/xist4c/web/pong.do" +
          (Utils.getXist4cSessionId({ returnWithPrefix: true }) || "")
      );
    }
  },
  /**
   * A function which starts an endless loop doing requests to pong.do.
   * If there's already a job running it is stopped first.
   * @param    {Integer} seconds The loop interval in seconds.
   * @public
   * @return {Void}
   */
  startPinging: function (seconds) {
    if (this.pingJob !== null) {
      this.stopPinging();
    }
    this.pingJob = setInterval(Utils.ping, seconds * 1000);
  },
  /**
   * Stopps a running ping job or does nothing if no such job is running.
   * @public
   * @return {Void}
   */
  stopPinging: function () {
    if (this.pingJob !== null) {
      clearInterval(this.pingJob);
      this.pingJob = null;
    }
  },
  /**
   * Builds a parent-child tree from an object array (e.g. xist4c sitemap)
   * @param    {Object} sitemap The object-array sitemap.
   * @public
   * @return   {Array}
   */
  buildPCTreeFromObjectArray: function (sitemap) {
    var newArr = [];
    for (var i = 0; i < sitemap.length; i++) {
      var data = sitemap[i];
      if (typeof data === "object" && typeof data.length !== "number") {
        newArr.push(new Node(data));
      } else {
        newArr[newArr.length - 1].children = Utils.buildPCTreeFromObjectArray(
          data
        );
      }
    }
    return newArr;
  },
  /**
   * Walks through a node list and collects nodes filtered by given properties/decisions.
   * @param    {Function} decision A Function that test something and return
   *											 <code>true</code> if the test is true or
   *											 <code>false</code> if not.
   * @param    {Function} action A Function that will be executed if decision returns true.
   * @param    {Array} nodes Sitemap that will be walked through.
   * @param    {Array} collection An array with nodes already filtered by previous treeWalker calls.
   * @public
   * @return   {Array} collection Returns the collection array with nodes filtered by the decision.
   */
  treeWalker: function (decision, action, nodes, collection) {
    var self = this,
      i,
      node,
      n;
    if (!nodes) {
      nodes = this.nodes;
    }
    for (i = 0; i < nodes.length; i += 1) {
      node = nodes[i];
      if (Utils.isFunction(decision)) {
        if (decision.call(this, node)) {
          if (Utils.isFunction(action)) {
            if (Utils.isArray(collection)) {
              collection.push(action.call(this, node));
              if (node.children) {
                Utils.treeWalker(decision, action, node.children, collection);
              }
            } else {
              return action.call(this, node);
            }
          }
        } else {
          if (node.children) {
            n = Utils.treeWalker(decision, action, node.children, collection);
            if (Utils.isObject(n)) {
              return n;
            }
          }
        }
      }
    }
    if (Utils.isArray(collection)) {
      return collection;
    }
    return null;
  },
  /**
   * Returns a copy of the given object.
   * @public
   * @param    {Object} o Object to copy.
   * @return   {Object} Copy of the object o.
   */
  clone: function (o) {
    function F() {}
    F.prototype = o;
    var result = new F();
    result.__prototype__ = o;
    result.__id__ = Utils.timestamp() + Math.round(1000000 * Math.random());
    return result;
  },
  /**
   * Increments a sequence and returns its new value.
   * @example
   * Utils.sequence.next();
   * @public
   * @return   {Integer} New sequence value.
   */
  sequence: (function () {
    var seq = 0;
    return {
      next: function () {
        return ++seq;
      },
    };
  })(),
  /**
   * Determines the dimensions (width, height) of an given image.
   * @public
   * @param    {String} imgRes Absolute URL to an image or native javascript Image object <code>new Image()</code>.
   * @param    {Function} callback A function that is called when the image dimensions are determined.
   *                               A parameter with the dimension object is passed to the function.
   * @param    {Integer} maxLoops Maximum loops for the function to determining the image dimensions.
   * @return   {void}
   */
  getImageDims: function (imgRes, callback, maxLoops) {
    var img,
      ml = maxLoops ? maxLoops : 600;
    img = new Image();
    img.src = imgRes;
    Utils.busyWait(
      function (intervalObj) {
        if (img.width && img.height) {
          return true;
        }
        return false;
      },
      100,
      maxLoops,
      function (intervalObj) {
        callback({
          width: img.width,
          height: img.height,
        });
      }
    );
  },
  /**
   * Tests the URL string of the current page for static mode footprints.
   * @public
   * @return   {void}
   */
  isStaticTest: function () {
    var rex = this.staticTestUrlRex;
    if (rex.test(window.location.href)) {
      return true;
    }
    return false;
  },
  /**
   * Simple browser detection. Returns an object with the fundametal data of the current browser.
   * The data object contains the browser name, version, renderer version (If available) and base type e.q "Mozilla".
   * @public
   * @return   {Object} Detected browser data.
   */
  browser: (function () {
    var ua = navigator.userAgent,
      comps,
      i,
      c,
      keyVals,
      obj = {},
      ieRex = /msie/i;
    if (ieRex.test(ua)) {
      comps = ua.substring(0, ua.indexOf(" ")).split("/");
      if (comps.length > 1) {
        obj[comps[0].toLowerCase()] = comps[1];
      }
      comps = ua.substring(ua.search(ieRex), ua.length);
      comps = comps.substring(0, comps.indexOf(";"));
      comps = comps.split(" ");
      if (comps.length > 1) {
        obj[comps[0].toLowerCase()] = comps[1];
      }
    } else {
      comps = ua.split(" ");
      for (i = 0; i < comps.length; i++) {
        c = comps[i];
        keyVals = c.split("/");
        if (keyVals.length > 1) {
          obj[keyVals[0].toLowerCase()] = keyVals[1];
        }
      }
    }
    return obj;
  })(),
  /* Migration browser detection. Enhanced version of the jQuery migration file's browser detection.
   * The data object contains the browser name and the version.
   * @public
   * @return   {Object} Detected browser data.
   * @example
   * Utils.migBrowser.msie;
   */
  migBrowser: (function () {
    var ua,
      match,
      matched,
      browser = {};

    ua = navigator.userAgent.toLowerCase();

    match =
      /(chrome)[ \/]([\w.]+)/.exec(ua) ||
      /(webkit)[ \/]([\w.]+)/.exec(ua) ||
      /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
      /(msie) ([\w.]+)/.exec(ua) ||
      (ua.indexOf("compatible") < 0 &&
        /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)) ||
      [];

    // check for IE11 (masked as mozilla)
    if (
      ua.indexOf("like gecko") > 0 &&
      !!/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)
    ) {
      match[1] = "msie";
    }

    matched = {
      browser: match[1] || "",
      version: match[2] || "0",
    };

    if (matched.browser) {
      browser[matched.browser] = true;
      browser.version = matched.version;
    }

    // Chrome is Webkit, but Webkit is also Safari.
    if (browser.chrome) {
      browser.webkit = true;
    } else if (browser.webkit) {
      browser.safari = true;
    }
    return browser;
  })(),
};
/* << */

/* >> IE fixes and workarounds (requires jQuery 1.4.0+) Version: rel-2-0-0 */
if (Utils.migBrowser.msie && parseInt(Utils.migBrowser.version, 10) < 9) {
  for (
    var e,
      l = "article aside figcaption figure footer header hgroup nav section time".split(
        " "
      );
    (e = l.pop());
    document.createElement(e)
  ) {}
}

(function setIEClasses() {
  if (Utils.migBrowser.msie) {
    var version, htmlElm;
    version = parseInt(Utils.migBrowser.version, 10);
    htmlElm = ll.$("html").addClass("ie");
    if (version > 9) {
      htmlElm.addClass("gt-ie9");
    } else if (version == 9) {
      htmlElm.addClass("gt-ie8");
    } else if (version == 8) {
      htmlElm.addClass("lt-ie9");
    } else if (version == 7) {
      htmlElm.addClass("lt-ie9 lt-ie8");
    } else if (version < 7) {
      htmlElm.addClass("lt-ie9 lt-ie8 lt-ie7");
    }
  }
})();
/* << */

// >> FrontendEditor bridge Version: rel-1-0-0
// This object is the man in the middle between FeE and CMS-Scripting.
FrontendEditorBridge = {
  records: [],
  record: function (initSeq) {
    var recObj = {},
      attrs = null;
    if (Utils.isFunction(initSeq)) {
      recObj.recreate = initSeq;
      if (attributes.length > 1) {
        recObj.attributes = [];
        for (i = 1; i < attributes.length; i += 1) {
          recObj.attributes.push(attributes[i]);
        }
        attrs = recObj.attributes;
      }
      this.records.push(recObj);
      return initSeq.apply(window, attrs);
    }
  },
};
// <<

/* >> AJAX URL Manager jQuery 1.2.6+ Version: rel-2-0-0 */
/**
 * Manages AJAX url handlers. You can add new handlers, Switch between live and developer mode to
 * test with static prototypes of data objects that should simulate successful response.
 * @version rel-1-2-2
 * @example
 * // Switch AjaxURLManager to global <code>live</code> mode.
 * AjaxURLManager.setMode('live');
 * // Register handler
 * AjaxURLManager.registerKey('myhandler', {"foo": 1}, 'myTestData.txt', null);
 *
 * // Getting an URL from the AjaxURLManager.
 * var Foo = {
 *		send: function () {
 *			var url = AjaxURLManager.getUrlWithKey('myhandler');
 *			ll.$.getJSON(url, function (data, textStatus) {
 *				...
 *			});
 *		}
 * };
 * @namespace AjaxURLManager
 * @author   <a href="mailto:peter@livinglogic.de">Peter Boeker</a>}
 * @type {Object}
 */
AjaxURLManager = {
  mode: "static",
  URL: {},
  sessionData: null,
  baseURL: "/backend/",
  baseURLStatic: "../static/",
  /**
   * Set the base URL to new value. The default handler path is <code>/backend/</code>.
   * If you have an other handler like the default you can adapt that with this method.
   * For examble, you have a handler behind <code>/mypath-to-the-handler/...</code> and you want
   * to tell AjaxURLManager to request with this path, then type the following code.
   * @example
   * AjaxURLManager.setBaseURL('/mypath-to-the-handler/');
   * @public
   * @param    {String} url Handler base URL.
   * @return {void}
   */
  setBaseURL: function (url) {
    this.baseURL = url;
  },
  /**
   * Set the base development URL to new value. The default static handler path is
   * <code>../static/</code>. Is your development path different from that, then you can
   * adapt it to your development path with this code.
   * @example
   * AjaxURLManager.setBaseURLStatic('../my-static/');
   * @public
   * @param    {String} url Path to the static development data.
   * @return {void}
   */
  setBaseURLStatic: function (url) {
    this.baseURLStatic = url;
  },
  /**
   * Switch the global mode to the given mode.
   * There are two modes the AjaxURLManager supports.
   * The global mode will request all registered handlers with this mode.
   * Allowed attributes are <code>'static'</code> or <code>'live'</code>.
   * If mode is set to <code>static</code>, then the static base URl is used to request.
   * Otherwise the base URL is used to request.
   * @privat
   * @param    {String} mode Mode into the AjaxURLManager should switch.
   * @return {void}
   */
  setMode: function (mode) {
    this.mode = APP_MODE = mode;
  },
  /**
   * Register a handler to the AjaxURLManager.
   * @example
   * AjaxURLManager.registerKey('foohandler', {"foo1": 1, "foo2": 2}, 'test-foo.txt', false, null);
   * @public
   * @param    {String} key Name of the handler.
   * @param    {Object} attrs Object that holds the additional URL parameter.
   * @param    {String} staticFile File name of the static data file.
   * @param    {Boolean} allwaysStatic Flag to request with static (developer) or live modus.
   * @param    {String} baseURL Use this parameter to set a different base URL with this handler.
   *							 If is set to <code>null</code> the global base URL setting is used.
   * @return {void}
   */
  registerKey: function (key, attrs, staticFile, allwaysStatic, baseURL) {
    this.URL[key] = {
      attrs: attrs,
      staticFile: staticFile,
      allwaysStatic: allwaysStatic,
      baseURL: baseURL || null,
    };
  },
  /**
   * Returns the url with the given key and attributes.
   * If the key does not exist it will return <code>null</code>.
   * @public
   * @param    {String} key The key of the registered handler.
   * @param    {Object} [attrs] Additional URL parameter.
   * @return   {String | null} URL-String.
   */
  getUrlWithKey: function (key, attrs) {
    var data,
      realAttrs = {};
    if (this.URL[key]) {
      data = this.URL[key];
      if (data.attrs || attrs) {
        if (data.attrs) {
          attrs = ll.$.extend(data.attrs, attrs);
        }
        for (var k in attrs) {
          if (attrs[k] !== null) {
            realAttrs[k] = attrs[k];
          }
        }
        if (this.sessionData) {
          realAttrs = ll.$.extend(realAttrs, this.sessionData);
        }
        attrs = "?" + ll.$.param(realAttrs);
      } else {
        if (this.sessionData) {
          attrs = ll.$.extend(data.attrs, this.sessionData);
          attrs = "?" + ll.$.param(this.sessionData);
        }
      }
      if (
        (this.mode == "static" && data.staticFile) ||
        (data.allwaysStatic && data.staticFile)
      ) {
        return [this.baseURLStatic, data.staticFile, attrs].join("");
      }
      if (data.baseURL) {
        return [data.baseURL, key, attrs].join("");
      }
      return [this.baseURL, key, attrs].join("");
    }
    return null;
  },
};
/* << */

/* >> livinglogic extended object with own prototype extension Version: rel-2-0-0 */
/**
 * @class Base class of all livinglogic objects.
 * All classes must inherit from LLObject.
 * @version rel-1-3-0
 * @property {Object} __property__ The prototype object of the current object.
 * @property {Object} defaults Object to hold params that can change standard behavior for
 *                             create, init and runtime.
 */
LLObject = {
  __prototype__: null,
  defaults: {},
  /**
   * Standard constructor.
   * @public
   * @param  {Object} [opts] Object with parameters which can change the object standard behavior.
   * @return {Object} Base object.
   */
  create: function (opts) {
    if (typeof opts === "object") {
      ll.$.extend(this.defaults, opts);
    }
    return Utils.clone(this);
  },
  /**
   * Returns <code>true</code> if the passed class-type is equal to <code>type</code> in
   *	the inheritance chain. Otherwise it will return <code>false</code>.
   * @public
   * @param  {Object} type Object to test if it is in the inheritance chain.
   * @return {Boolean}
   */
  instanceOf: function (type) {
    if (this == type) {
      return true;
    } else if (this.__prototype__ === null) {
      return false;
    } else {
      return this.__prototype__.instanceOf(type);
    }
  },
  /**
   * Searches the <code>defaults</code> object first level, for the given <code>name</code>.
   * If <code>name</code> undefined, the <code>altVal</code> will return.
   * If no <code>name</code> and no <code>altVal</code> given and it has a <code>defaults</code> object, then returns the
   * <code>defaults</code> object, otherwise <code>null</code>.
   * @public
   * @param  {String} name   Name of a defaults first level property.
   * @param  {Misc} altVal The alternative return value if <code>name</code> not found or <code>null</code>.
   * @return {defaults | altVal | null}
   */
  getDef: function (name, altVal) {
    if (typeof this.defaults === "object") {
      if (typeof this.defaults[name] !== "undefined") {
        return this.defaults[name];
      } else if (typeof altVal !== "undefined") {
        return altVal;
      }
      return this.defaults;
    } else {
      if (typeof altVal !== "undefined") {
        return altVal;
      }
    }
    return null;
  },
  /**
   * Do the same like <code>getDef</code> but returns the <code>altVal</code> parameter also
   * if the defaults property is <code>null</code>.
   * If <code>name</code> undefined or <code>null</code>, the <code>altVal</code> will return.
   * If no <code>name</code> and no <code>altVal</code> given and it has a <code>defaults</code> object, then returns the
   * <code>defaults</code> object, otherwise <code>null</code>.
   * @public
   * @param  {String} name   Name of a defaults first level property.
   * @param  {Misc} altVal The alternative return value if <code>name</code> not found or <code>null</code>.
   * @return {defaults | altVal | null}
   */
  getDefAttr: function (name, altVal) {
    if (typeof this.defaults === "object") {
      if (typeof this.defaults[name] !== "undefined") {
        if (!this.defaults[name]) {
          if (typeof altVal !== "undefined") {
            return altVal;
          }
        } else {
          return this.defaults[name];
        }
      } else if (typeof altVal !== "undefined") {
        return altVal;
      }
      return this.defaults;
    } else {
      if (typeof altVal !== "undefined") {
        return altVal;
      }
    }
    return null;
  },
};
/* << */

/* >> XIST4C Globals */
if (
  typeof XIST4C_GLOBALS === "undefined" ||
  typeof XIST4C_GLOBALS !== "object"
) {
  XIST4C_GLOBALS = {};
}
/* << */

/* >> LivingLogic DropDown Node (requires jQuery 1.2.6) Version: rel-2-0-0 */
Node = function (Args) {
  for (var name in Args) {
    this[name] = Args[name];
  }
  this.children = [];
};

Node.prototype.childrenLayer = function (level) {
  var layerId = ["childrenLevelContainer_", this.level].join("");
  if (level) {
    layerId = ["childrenLevelContainer_", level].join("");
  }
  return ll
    .$("<div></div>")
    .css({
      position: "absolute",
      right: ["-", LL_DropDownNavi.layerWidth, "px"].join(""),
      top: 0,
      "z-index": this.level * 10,
      width: [LL_DropDownNavi.layerWidth, "px"].join(""),
    })
    .attr({ id: layerId })
    .hide();
};

Node.prototype.nodeChildrenShell = function () {
  var cs = ll
    .$("<div></div>")
    .attr({ class: ["navCHS_", this.level + 1].join("") });
  var self = this;
  if (this.styName) {
    var sty = ["co_", this.styName].join("");
    var d = ll.$("<div></div>").attr({ class: sty });
    if (this.children.length > 0) {
      ll.$(this.children).each(function (i) {
        var Args = {};
        if (i === 0) {
          Args.first = true;
        }
        if (i == self.children.length - 1) {
          Args.last = true;
        }
        d.append(this.nodeShell(Args));
      });
    }
    cs.append(d);
    return cs;
  }
  if (this.children.length > 0) {
    ll.$(this.children).each(function (i) {
      var Args = {};
      if (i === 0) {
        Args.first = true;
      }
      if (i == self.children.length - 1) {
        Args.last = true;
      }
      cs.append(this.nodeShell(Args));
    });
  }
  return cs;
};

Node.prototype.nodeFirstLevelShell = function () {
  var ns = ll
      .$("<div></div>")
      .attr({ class: ["navNS_", this.level].join(""), id: this.id }),
    node = this.node(),
    sty,
    d,
    cs;
  ns.append(this.childrenLayer(1));
  if (this.styName) {
    sty = ["co_", this.styName].join("");
    d = ll.$("<div></div>").attr({ class: sty });
    d.append(node);
    if (this.children.length > 0) {
      cs = this.nodeChildrenShell();
      d.append(cs);
    }
    ns.append(d);
    return ns;
  }
  ns.append(node);
  if (this.children.length > 0) {
    cs = this.nodeChildrenShell();
    ns.append(cs);
  }
  return ns;
};

Node.prototype.nodeShell = function (Args) {
  var ns = ll
      .$("<div></div>")
      .attr({ class: ["navNS_", this.level].join(""), id: this.id }),
    csOffset = ll
      .$("<div></div>")
      .css({ position: "relative" })
      .attr({ id: [this.id, "_layerOffset"].join("") }),
    node,
    origClassName,
    newClassName,
    sty,
    d;
  ns.append(csOffset);
  node = this.node();
  if (Args) {
    origClassName = node.attr("class");
    newClassName = "";
    if (Args.first) {
      newClassName += [" ", origClassName, "_first"].join("");
    }
    if (Args.last) {
      newClassName += [" ", origClassName, "_last"].join("");
    }
    node.attr("class", origClassName + " " + newClassName);
  }
  if (this.styName) {
    sty = ["co_", this.styName].join("");
    d = ll.$("<div></div>").attr({ class: sty });
    d.append(node);
    ns.append(d);
    return ns;
  }
  ns.append(node);
  return ns;
};

Node.prototype.node = function () {
  var outer = ll
      .$("<div></div>")
      .attr({ class: ["navEl_", this.level, "_", this.type].join("") }),
    n = ll.$("<div></div>").attr({ class: "outer" }),
    text = ll.$("<span></span>").attr({ class: "inner" }).text(this.title),
    self = this,
    level;
  if (this.href) {
    if (this.type == "here") {
      text = ll
        .$("<div></div>")
        .attr({ class: "noLink" })
        .append(text)
        .css("cursor", "hand");
    } else if (this.type == "inPath") {
      text = ll
        .$("<a></a>")
        .attr({ href: this.href })
        .append(text)
        .css("cursor", "hand");
    } else if (this.type == "normal") {
      text = ll
        .$("<a></a>")
        .attr({ href: this.href })
        .append(text)
        .css("cursor", "hand");
    }
  }
  n.append(text);
  outer.append(n);
  outer.css("cursor", "hand");
  if (this.children.length > 0 && this.level > 0) {
    outer.bind("mouseover", function (e) {
      var levelCont = ["#childrenLevelContainer_", self.level].join(""),
        layerOffset;
      if (ll.$(levelCont).size() === 0) {
        ll.$("body").append(self.childrenLayer());
      }
      layerOffset = ["#", self.id, "_layerOffset"].join("");
      ll.$(levelCont).empty().append(self.nodeChildrenShell()).hide();
      ll.$(layerOffset).append(ll.$(levelCont));
      ll.$(levelCont).fadeIn(200);
    });
  } else {
    level = self.level === 0 ? self.level + 1 : self.level;
    outer.bind("mouseover", function (e) {
      ll.$("#childrenLevelContainer_" + level).fadeOut(200);
    });
  }
  return outer;
};

/* << */

/* >> LivingLogic DropDown Navigation (requires jQuery 1.2.6) Version: rel-2-0-0 */
LL_DropDownNavi = {
  path: [],
  layerWidth: 160,
  lay: {
    pixel: function () {
      return ll
        .$("<img />")
        .attr({ src: "/xist4c/px/spc.gif", width: 1, height: 1, alt: "" });
    },
    nodesOuterShell: function (content) {
      var nos = ll.$(
        '<div class="navOuterShell">' +
          '<div class="noDes1">' +
          '<div class="noDes2">' +
          '<div class="topImg">' +
          '<div class="bottomImg">' +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>"
      );
      nos.find("div.topImg").append(LL_DropDownNavi.lay.pixel());
      nos.find("div.bottomImg").append(content);
      nos.find("div.bottomImg").append(LL_DropDownNavi.lay.pixel());
      nos.bind("mouseleave", function () {
        ll.$("div[id^=childrenLevelContainer_]").fadeOut(500);
      });
      return nos;
    },
  },
  sitemap: null,
  init: function (Args) {
    this.sitemap = this.buildTreeFromArray(XIST4C_GLOBALS.sitemap);
    lay = LL_DropDownNavi.lay;
    var homeNode = this.sitemap[0].nodeFirstLevelShell();
    if (Args && Args.target) {
      var target = ll.$(["#", Args.target].join(""));
      target.append(lay.nodesOuterShell(homeNode));
    } else {
      ll.$("div.navOuterShell")
        .find("div.navNS_0")
        .remove()
        .end()
        .find("div.noDes2")
        .append(homeNode)
        .bind("mouseleave", function () {
          ll.$("div[id^=childrenLevelContainer_]").fadeOut(500);
        });
    }
  },
  renderFirstLevel: function () {
    var lay = LL_DropDownNavi.lay;
    var nodes = [];
    ll.$(this.sitemap[1]).each(function (i) {
      var node = this;
      if (typeof node == "object" && typeof node.length != "number") {
        node = lay.nodeShell(node, lay.node(node));
        nodes.push(node);
      }
    });
    return lay.nodeChildrenShell(this.sitemap[0], nodes);
  },
  getChildren: function (id, level) {},
  renderChildrenLayer: function (id, level) {
    for (var i = 0; i < this.sitemap[1].length; i++) {
      var node = this.sitemap[1][i];
      if (node.id == id) {
        //if (i)
      }
    }
  },
  buildTreeFromArray: function (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      var data = arr[i];
      if (typeof data == "object" && typeof data.length != "number") {
        newArr.push(new Node(data));
      } else {
        newArr[newArr.length - 1].children = this.buildTreeFromArray(data);
      }
    }
    return newArr;
  },
};
/* << */

/* >> DEPRECATED */
function hideInputBg(field) {
  ipField = document.getElementById(field);
  ipField.style.background = "#fff";
}
/* << */

/* >> IE Refresh: rel-1-0-0 */
function IE_Refresh() {
  if (
    Utils.migBrowser.msie &&
    Utils.migBrowser.version &&
    parseInt(Utils.migBrowser.version, 10) < 7
  ) {
    location.reload();
  }
}
window.onresize = IE_Refresh;
/* << */

/* >> Standard Popup functions Version: rel-1-0-0 */
function StandardPopup(Attrs) {
  // @params IE and Gecko-Browser compatible window parameter attributes.
  this.params = [
    "left",
    "top",
    "location",
    "menubar",
    "resizable",
    "scrollbars",
    "status",
    "toolbar",
    "height",
    "width",
  ];
  this.href = Attrs.href ? Attrs.href : "http://www.google.de"; // url to the popup content
  this.name = Attrs.name ? Attrs.name : "standardPopup"; // standard window name
  this.height = Attrs.height ? Attrs.height : "550"; // standard height opened window
  this.width = Attrs.width ? Attrs.width : "650"; // standard width opened window
  this.left = Attrs.left ? Attrs.left : null; // window left position from the upper left corner of the client screen
  this.top = Attrs.top ? Attrs.top : null; // window top position from the top of the client screen
  this.locationbar = Attrs.location ? Attrs.location : "no"; // ['yes', 'no'] display the locationbar
  this.menubar = Attrs.menubar ? Attrs.menubar : "no"; // ['yes', 'no'] display the menubar
  this.resizable = Attrs.resizable ? Attrs.resizable : "yes"; // ['yes', 'no'] allows the user to change the window size
  this.scrollbars = Attrs.scrollbars ? Attrs.scrollbars : "yes"; // ['yes', 'no'] show scrollbars if necessary
  this.status = Attrs.status ? Attrs.status : "no"; // ['yes', 'no'] show statusbar
  this.toolbar = Attrs.toolbar ? Attrs.toolbar : "no"; // ['yes', 'no'] show toolbar
  this.blank = Attrs.blank ? Attrs.blank : "false"; // ['true', 'false'] show window as popup or blank window
  this.wRef = null; // window reference to make changes on the opened windowe
}

StandardPopup.prototype._formatParams = function () {
  var str = "'";
  var objParam;
  for (var i = 0; i < this.params.length; ++i) {
    objParam = this.params[i] == "location" ? "locationbar" : this.params[i];
    p = eval("this." + objParam);
    if (p) {
      str += this.params[i] + "=" + p + ",";
    }
  }
  str = str.substring(0, str.length - 1);
  str += "'";
  return str;
};

StandardPopup.prototype.open = function () {
  if (this.blank) {
    this.wRef = window.open(this.href);
  } else {
    var paraStr = this._formatParams();
    this.wRef = window.open(this.href, this.name, paraStr);
  }
  if (this.wRef) {
    this.wRef.focus();
  }
  return false;
};
/* << */

/* >> rss publisher, (requires jQuery 1.2.6) Version: rel-3-0-0 */
RSSPublisher = {
  publishers: false,
  register: function (args) {
    this.append(args);
  },
  append: function (args) {
    var RSSObj = new RSS();
    RSSObj.target = args.target;
    RSSObj.source = args.source;
    RSSObj.tags = args.tags;
    RSSObj.descLength = args.descLength;
    RSSObj.descLengthEnding = args.descLengthEnding;
    RSSObj.pubDateFormat = args.pubDateFormat;
    RSSObj.refresh = args.refresh;
    RSSObj.itemsCount = args.itemsCount ? args.itemsCount : 5;
    RSSObj.staticTest = args.staticTest;
    if (args.acceptMimeTypes && typeof args.acceptMimeTypes == "object") {
      RSSObj.acceptMimeTypesCgiStr = this.createMimeTypeCgiStr(
        args.acceptMimeTypes
      );
    }
    if (typeof this.publishers != "boolean") {
      this.publishers.push(RSSObj);
    } else {
      this.publishers = [RSSObj];
    }
    RSSObj.getSource();
  },
  createMimeTypeCgiStr: function (mtList) {
    var str = "&mimetypes=";
    for (var i = 0; i < mtList.length; ++i) {
      str += encodeURIComponent(this.strTrim(mtList[i])) + ",";
    }
    return str.substring(0, str.length - 1);
  },
  strTrim: function (str) {
    var ccSpace = 32,
      ps = 0,
      pe = 0,
      psLock = false,
      peLock = false,
      i,
      string;
    for (i = 0; i < str.length; ++i) {
      if (str.charCodeAt(i) == ccSpace) {
        if (!psLock) {
          ps++;
        }
        if (str.charCodeAt(str.length - 1 - i) == ccSpace) {
          if (!peLock) {
            pe++;
          }
        } else {
          peLock = true;
        }
      } else {
        psLock = true;
        if (str.charCodeAt(str.length - 1 - i) == ccSpace) {
          if (!peLock) {
            pe++;
          }
        } else {
          peLock = true;
        }
      }
    }
    string = str.substring(ps, str.length);
    return string.substring(0, str.length - pe - ps);
  },
};

function RSS() {
  this.root = ll.$("<div></div>");
  this.target = null;
  this.source = null;
  this.tags = ["title", "description"];
  this.descLength = null;
  this.descLengthEnding = " ";
  this.pubDateFormat = 2;
  this.refresh = null;
  this.itemsCount = null;
  this.staticTest = false;
  this.charCount = 0;
  this.stop = false;
}

RSS.prototype.getSource = function () {
  this.charCount = 0;
  this.stop = false;
  this.root.empty();
  var url = this.staticTest
    ? this.source
    : "/datagateway/feedparse/?url=" + encodeURIComponent(this.source);
  var self = this;
  ll.$.ajax({
    type: "GET",
    dataType: "json",
    url: url,
    success: function (data, msg) {
      self.handleSource(data, msg);
    },
    error: function (req, status, error) {
      self.handleSourceError(req, status, error);
    },
  });
  if (this.refresh) {
    setTimeout(function () {
      self.getSource();
    }, this.refresh * 1000);
  }
};

RSS.prototype.handleSource = function (data, msg) {
  var items = data.entries;
  var count = items.length;
  if (this.itemsCount < count) {
    count = this.itemsCount;
  }
  var tags = this.tags;
  var self = this;
  for (var i = 0; i < count; ++i) {
    var href = self.getLink(items[i]);
    self.appendElement(self.getItem(items[i], tags, href, i), self.root);
  }
  this.publish();
};

RSS.prototype.handleSourceError = function (def) {
  ll.$("#" + this.target).html(
    "<div>Service ist voruebergehend nicht verfuegbar.</div>"
  );
};

RSS.prototype.appendElement = function (elm, root) {
  if (elm) {
    ll.$(root).append(elm);
    return true;
  }
  return false;
};

RSS.prototype.cloneXML2DOM = function (src, tar, igRoot, len, correctHyphen) {
  var i, node, text, newNode, j, pos, t, c, subNode;
  for (i = 0; i < src.childNodes.length; i++) {
    node = src.childNodes[i];
    switch (node.nodeType) {
      case 1:
        if (!igRoot) {
          newNode = tar.appendChild(document.createElement(node.nodeName));
          for (j = 0; j < node.attributes.length; j++) {
            newNode.setAttribute(
              node.attributes[j].nodeName,
              node.attributes[j].nodeValue
            );
          }
          this.cloneXML2DOM(node, newNode, false, correctHyphen);
        } else {
          this.cloneXML2DOM(node, tar, false, correctHyphen);
        }
        break;
      case 3:
        if (len) {
          text = node.nodeValue;
          if (this.charCount + text.length < len) {
            this.charCount += text.length;
          } else {
            pos = 0;
            t = "";
            while (1) {
              t += text.substr(pos, 1);
              if (t.length + this.charCount >= len) {
                c = t.charAt(t.length - 1);
                if (c == this.descLengthEnding || pos == t.length) {
                  this.charCount += t.length;
                  if (c == this.descLengthEnding) {
                    t += c == " " ? "...." : " ....";
                    this.stop = true;
                  } else {
                    this.stop = false;
                  }
                  text = t;
                  break;
                }
              } else if (text.length + this.charCount < len) {
                c = text.charAt(text.length - 1);
                this.charCount += text.length;
                text += c == " " ? "...." : " ....";
                this.stop = true;
                break;
              }
              pos++;
            }
          }
        } else {
          text = node.nodeValue;
        }
        if (correctHyphen) {
          text = this.correctHyphenatedText(text);
        }
        subNode = document.createTextNode(text);
        tar.appendChild(subNode);
    }
    if (this.stop) {
      this.charCount = 0;
      break;
    }
  }
};

RSS.prototype.correctHyphenatedText = function (text) {
  return text.replace(/-/g, "- ");
};

RSS.prototype.cloneContent = function (src, len, correctHyphen) {
  var root = ll.$("<div></div>").get(0);
  if (len) {
    this.charCount = 0;
    this.stop = false;
  }
  this.cloneXML2DOM(src, root, false, len, correctHyphen);
  return root.childNodes;
};

RSS.prototype.getFirstNodeMatch = function (nName, parent, type) {
  var n = parent.childNodes;
  nName = nName.toLowerCase();
  type = type ? type : 1;
  for (var i = 0; i < n.length; ++i) {
    if (n[i].nodeType == type && n[i].nodeName.toLowerCase() == nName) {
      return n[i];
    }
  }
  return false;
};

RSS.prototype.getLink = function (item) {
  return item.link;
};

RSS.prototype.getItem = function (item, tags, href, count) {
  var sty = count % 2 === 0 ? "item" : "item odd",
    itemShell = ll.$("<div></div>").attr({ class: sty }).get(0);
  for (var j = 0; j < tags.length; ++j) {
    switch (tags[j]) {
      case "title":
        this.appendElement(this.getTitle(item, href), itemShell);
        break;
      case "description":
        this.appendElement(this.getDescription(item), itemShell);
        break;
      case "pubDate":
        this.appendElement(this.getPubDate(item), itemShell);
        break;
    }
  }
  return itemShell;
};

RSS.prototype.getTitle = function (item, href) {
  var title = ll.$("<div>" + item.title + "</div>").get(0);
  if (title) {
    return Layout.getTitle(this.cloneContent(title, false, true), href);
  }
  return false;
};

RSS.prototype.getDescription = function (item) {
  var description = ll.$("<div>" + item.summary + "</div>").get(0);
  if (description) {
    return Layout.getDescription(
      this.cloneContent(description, this.descLength, true)
    );
  }
  return false;
};

RSS.prototype.getPubDate = function (item) {
  var pubDate = item.published_parsed.value;
  if (pubDate) {
    return Layout.getPubDate(
      this.cloneContent(this.formatDate(pubDate), false, false)
    );
  }
  return false;
};

RSS.prototype.formatDate = function (dateStr) {
  var lang = ll.$("html").attr("lang");
  var date = ll.$.getISODate(new Date(dateStr), lang);
  var time = ll.$.getISOTime(new Date(dateStr));
  if (this.pubDateFormat == 1) {
    return date._short;
  } else if (this.pubDateFormat == 2) {
    return date._middle;
  } else if (this.pubDateFormat == 3) {
    return date._long;
  } else if (this.pubDateFormat == 4) {
    return date._long + " " + time;
  }
};

RSS.prototype.publish = function () {
  ll.$("#" + this.target)
    .empty()
    .html(ll.$(this.root).html());
};

Layout = {
  getTitle: function (t, href) {
    if (href) {
      t = ll.$("<a></a>").attr({ href: href, target: "_blank" }).append(t);
    }
    return ll
      .$("<div></div>")
      .attr({ class: "rssElementTitle" })
      .append(ll.$("<h3></h3>").append(ll.$("<span></span>").append(t)))
      .get(0);
  },
  getDescription: function (desc) {
    return ll
      .$("<div></div>")
      .attr({ class: "rssElementDesc" })
      .append(ll.$("<div></div>").attr({ class: "inner" }).append(desc))
      .get(0);
  },
  getPubDate: function (d) {
    return ll
      .$("<div></div>")
      .attr({ class: "rssElementPubDate" })
      .append(ll.$("<span></span>").append(d))
      .get(0);
  },
};
/* << */

/* >> Generic Multimedia CMS tool, (requires jQuery 1.2.6) Version: rel-3-0-0 */
function GenericMultimedia(args) {
  this.lang = this.getLang();
  this.altText = args.altText;
  this.altImg = args.altImg;
  this.data = args.data;
  this.htmlSrcDom = this.getHtmlSrcDom(args.htmlSrc);
  this.javaApplet = this.isJavaApplet();
  this.modifyAndWriteDocumentElements();
}

GenericMultimedia.prototype.getLang = function () {
  var htmlEl = ll.$("html");
  if (htmlEl.attr("lang")) {
    return this.formatLang(htmlEl.attr("lang"));
  } else if (htmlEl.attr("xml:lang")) {
    return this.formatLang(htmlEl.attr("xml:lang"));
  }
  return "en";
};

GenericMultimedia.prototype.formatLang = function (lang) {
  if (lang.search(/-/) > -1) {
    return lang.substring(0, lang.search(/-/));
  }
  return lang;
};

GenericMultimedia.prototype.getHtmlSrcDom = function (htmlSrc) {
  if (typeof htmlSrc == "string" && htmlSrc.length > 0) {
    return ll.$("<div>" + htmlSrc + "</div>").get(0);
  }
  return null;
};

GenericMultimedia.prototype.isJavaApplet = function () {
  var isJavaApp = false;
  ll.$("xml > *", this.htmlSrcDom).each(function (n) {
    if (this.nodeType == 1 && this.nodeName.toLowerCase() == "object") {
      if (ll.$(this).attr("classid")) {
        isJavaApp = ll.$(this).attr("classid").search("java:") > -1;
      }
    }
  });
  return isJavaApp;
};

GenericMultimedia.prototype.modifyAndWriteDocumentElements = function () {
  var output = "";
  var onlyEmbed = false;
  var model;
  var self = this;
  ll.$("> *", this.htmlSrcDom).each(function (n) {
    if (self.javaApplet || (!self.useEmbed() && !self.javaApplet)) {
      if (this.nodeType == 1 && this.nodeName.toLowerCase() == "object") {
        model = false;
        output += self.startElement(
          "object",
          self.getNodeAttributes(this),
          model
        );
        ll.$("param, embed", this).each(function (n) {
          if (this.nodeType == 1 && this.nodeName.toLowerCase() == "param") {
            model = true;
            output += self.startElement(
              "param",
              self.getNodeAttributes(this),
              model
            );
          }
          if (this.nodeType == 1 && this.nodeName.toLowerCase() == "embed") {
            model = true;
            output += self.startElement(
              "embed",
              self.getNodeAttributes(this),
              model
            );
          }
        });
      }
    } else {
      onlyEmbed = true;
      ll.$("param, embed", this).each(function (n) {
        if (this.nodeType == 1 && this.nodeName.toLowerCase() == "embed") {
          model = true;
          output += self.startElement(
            "embed",
            self.getNodeAttributes(this),
            model
          );
        }
      });
    }
    if (self.altText || self.altImg) {
      var text = "";
      var img = "";
      if (self.altText) {
        text = "<p>" + self.altText + "</p>";
      }
      if (self.altImg) {
        img = '<img src="' + self.altImg + '" alt="" title="" />';
      }
      if (!Utils.migBrowser.safari) {
        //Workarround for safari 3.2.1 which interpreted the standard wrong.
        if (self.useEmbed() && !self.javaApplet) {
          output += "<noembed>" + text + img + "</noembed>";
        } else {
          output += text + img;
        }
      }
    }
    if (!onlyEmbed) {
      output += self.endElement("object");
    }
  });
  document.write(output);
};

GenericMultimedia.prototype.useEmbed = function () {
  var agent = navigator.userAgent;
  if (agent.search(/MSIE | Safari/) > -1) {
    return false;
  }
  return true;
};

GenericMultimedia.prototype.getNodeAttributes = function (node) {
  var name = node.nodeName.toLowerCase();
  var codebase = false;
  if (node.attributes.length > 0) {
    var attrs = {};
    var attrValue = "";
    for (var i = 0; i < node.attributes.length; ++i) {
      var attrName = node.attributes[i].nodeName.toLowerCase();
      attrValue = node.attributes[i].nodeValue;
      if (
        name == "object" &&
        (attrName == "classid" || attrName == "movie" || attrName == "data")
      ) {
        if (attrValue && attrValue !== "null") {
          if (attrName == "classid") {
            attrs[attrName] = this.makeClassidAttribute(attrValue);
          } else if (this.javaApplet && attrName == "codebase") {
            codebase = true;
            attrs[attrName] = this.makeJavaAppletCodebaseAttribute();
          } else {
            if (attrName == "codebase") {
              codebase = true;
            }
            attrs[attrName] = this.data + this.copyCgiArgs(attrValue);
          }
        }
      } else if (name == "embed" && attrName == "src") {
        attrs[attrName] = this.data + this.copyCgiArgs(attrValue);
      } else {
        attrs[attrName] = attrValue || "";
      }
    }
    if (this.javaApplet && !codebase) {
      codebase = true;
      attrs.codebase = this.makeJavaAppletCodebaseAttribute();
    }
    if (name == "param") {
      attrNameValue = attrs.name.toLowerCase();
      attrValueValue = attrs.value;
      if (
        attrNameValue == "filename" ||
        attrNameValue == "movie" ||
        attrNameValue == "src" ||
        attrNameValue == "url"
      ) {
        attrs.value = this.data + this.copyCgiArgs(attrValueValue);
      }
    }
    return attrs;
  }
  return null;
};

GenericMultimedia.prototype.copyCgiArgs = function (value) {
  if (value.lastIndexOf("?") > -1) {
    return value.substring(value.lastIndexOf("?"), value.length);
  }
  return "";
};

GenericMultimedia.prototype.startElement = function (name, attrs, single) {
  var element = "<" + name;
  for (var attrName in attrs) {
    element += " " + attrName + '="' + attrs[attrName] + '"';
  }
  if (single) {
    return (element += "/>");
  }
  return (element += ">");
};

GenericMultimedia.prototype.endElement = function (name) {
  return "</" + name + ">";
};

GenericMultimedia.prototype.makeClassidAttribute = function (value) {
  var data = this.data;
  if (value.search("java:") > -1) {
    return (
      "java:" +
      data.substring(data.lastIndexOf("/") + 1, data.length) +
      this.copyCgiArgs(value)
    );
  }
  return value;
};

GenericMultimedia.prototype.makeJavaAppletCodebaseAttribute = function () {
  var data = this.data;
  return data.substring(0, data.lastIndexOf("/") + 1);
};
/* << */

/* >> bookmarking tool (requires jQuery 1.2.6 and ll StandardPopup) Version: rel-3-0-0 */
function BookmarkStoreAt(args) {
  this.targetName = null;
  this.container = null;
  this.titleHTML = null;
  this.textHTML = null;
  this.descSliceStandard = " ...";
  this.imgPath = "/xist4c/web/img/standard/bookmarkTool";
  this.bmItems = [
    "delicious",
    "mrwong",
    "blinklist",
    "yahoo",
    "yigg",
    "furl",
    "oneview",
    "folkd",
    "linkarena",
    "google",
    "webnews",
  ];
  this.bmURL = null;
  this.bmTitle = null;
  this.bmTargets = {};
  this.init(args);
}

BookmarkStoreAt.prototype.init = function (args) {
  this.targetName = args.targetName;
  if (ll.$("#" + args.targetName).size() > 0) {
    this.container = ll.$("#" + args.targetName).get(0);
  }
  if (args.bmItems) {
    this.bmItems = args.bmItems;
  }
  if (args.imgPath) {
    this.imgPath = args.imgPath;
  }
  this.titleHTML = args.titleHTML;
  this.textHTML = args.textHTML;
  this.bmURL = encodeURIComponent(location.href);
  this.bmTitle = encodeURIComponent(document.title);
  this.bmTargets.delicious = {
    title: "del.icio.us",
    desc: "del.icio.us",
    url: "http://del.icio.us/post?url=" + this.bmURL + "&title=" + this.bmTitle,
  };
  this.bmTargets.mrwong = {
    title: "Mister Wong",
    desc: "Mister Wong",
    url:
      "http://www.mister-wong.de/index.php?action=addurl&bm_url=" +
      this.bmURL +
      "&bm_description=" +
      this.bmTitle,
  };
  this.bmTargets.blinklist = {
    title: "BlinkList",
    desc: "BlinkList",
    url:
      "http://www.blinklist.com/index.php?Action=Blink/addblink.php&Description=&Url=" +
      this.bmURL +
      "&Title=" +
      this.bmTitle,
  };
  this.bmTargets.yahoo = {
    title: "Yahoo MyWeb",
    desc: "Yahoo MyWeb",
    url:
      "http://myweb2.search.yahoo.com/myresults/bookmarklet?u=" +
      this.bmURL +
      "&t=" +
      this.bmTitle,
  };
  this.bmTargets.yigg = {
    title: "YiGG",
    desc: "YiGG",
    url:
      "http://yigg.de/neu?exturl=" + this.bmURL + "&exttitle=" + this.bmTitle,
  };
  this.bmTargets.furl = {
    title: "Furl",
    desc: "Furl",
    url:
      "http://www.furl.net/storeIt.jsp?u=" + this.bmURL + "&t=" + this.bmTitle,
  };
  this.bmTargets.oneview = {
    title: "OneView",
    desc: "OneView",
    url:
      "http://beta.oneview.de:80/quickadd/neu/addBookmark.jsf?URL=" +
      this.bmURL +
      "&title=" +
      this.bmTitle,
  };
  this.bmTargets.folkd = {
    title: "Folkd",
    desc: "Folkd",
    url: "http://www.folkd.com/submit/page/" + this.bmURL,
  };
  this.bmTargets.linkarena = {
    title: "Linkarena",
    desc: "Linkarena",
    url:
      "http://linkarena.com/bookmarks/addlink/?url=" +
      this.bmURL +
      "&title=" +
      this.bmTitle +
      "&desc=&tags=",
  };
  this.bmTargets.google = {
    title: "Google",
    desc: "Google",
    url:
      "http://www.google.com/bookmarks/mark?op=add&hl=de&bkmk=" +
      this.bmURL +
      "&title=" +
      this.bmTitle,
  };
  this.bmTargets.webnews = {
    title: "Webnews",
    desc: "Webnews",
    url:
      "http://www.webnews.de/einstellen?url=" +
      this.bmURL +
      "&title=" +
      this.bmTitle,
  };
  this._createLayout();
};

BookmarkStoreAt.prototype.store = function (target) {
  this.open(this.bmTargets[target].url);
};

BookmarkStoreAt.prototype.open = function (url) {
  if (typeof StandardPopup == "function") {
    var p = new StandardPopup({ href: url, blank: true });
    p.open();
  } else {
    window.open(url);
  }
};

BookmarkStoreAt.prototype.changeDescSlice = function (key) {
  var el = "#bmDescSlice_" + this.targetName;
  var slice = this.descSliceStandard;
  if (key) {
    slice = "<span>" + this.bmTargets[key].desc + "</span>";
  }
  ll.$(el).html(slice);
};

BookmarkStoreAt.prototype._getTitle = function () {
  return ll
    .$('<div class="bookmarkTitleOuter"><h3>' + this.titleHTML + "</h3></div>")
    .get(0);
};

BookmarkStoreAt.prototype._getText = function () {
  return ll
    .$(
      '<div class="bookmarkTextOuter"><p>' +
        this.textHTML +
        '<span id="bmDescSlice_' +
        this.targetName +
        '" class="bmDescSlice">' +
        this.descSliceStandard +
        "</span></p></div>"
    )
    .get(0);
};

BookmarkStoreAt.prototype._getImageItems = function () {
  var bmi = this.bmItems,
    imgOuter = ll.$('<div class="imgOuter"></div>'),
    img,
    self = this,
    x = function (bmImgId) {
      img = ll
        .$("<img/>")
        .attr({
          src: self.imgPath + "/" + bmImgId + ".gif",
          alt: self.bmTargets[bmImgId].title,
          title: self.bmTargets[bmImgId].title,
        })
        .click(function (e) {
          self.store(bmImgId);
        });
      if (self.textHTML.length > 0) {
        img
          .mouseover(function (e) {
            self.changeDescSlice(bmImgId);
          })
          .mouseout(function (e) {
            self.changeDescSlice(false);
          });
      }
      return img;
    };
  for (var i = 0; i < bmi.length; ++i) {
    imgOuter.append(x(bmi[i]));
  }
  return imgOuter.get(0);
};

BookmarkStoreAt.prototype._createLayout = function () {
  var outer = ll.$('<div id="bookmarksOuter"></div>').get(0);
  if (this.titleHTML.length > 0) {
    outer.appendChild(this._getTitle());
  }
  if (this.textHTML.length > 0) {
    outer.appendChild(this._getText());
  }
  outer.appendChild(this._getImageItems());
  this.container.appendChild(outer);
};
/* << */

/* >> login teaser (requires jQuery 1.2.6) Version: rel-3-0-0 */
function handleFieldPrompt(fieldList) {
  ll.$(function () {
    var x = function (f) {
      var elm = ll.$("#" + f);
      if (elm.length === 0) {
        elm = ll.$(f);
      }
      if (elm.length) {
        elm
          .focus(function (e) {
            hidePrompt(ll.$(this), e);
          })
          .blur(function (e) {
            if (ll.$(this).val() === "") {
              showPrompt(ll.$(this), e);
            }
          });
        if (elm.val() !== "") {
          hidePrompt(elm);
        }
      }
    };
    for (var i = 0; i < fieldList.length; ++i) {
      x(fieldList[i]);
    }
  });
}

function hidePrompt(field, e) {
  field.css({ "background-image": "none" });
}

function showPrompt(field, e) {
  field.removeAttr("style");
}

ll.$(function () {
  handleFieldPrompt([
    "c_qSearch",
    "c_stdSearch",
    "qlUser",
    "qlPassword",
    "t_qSearch",
    "t_LoginUser",
    "t_LoginPass",
    "mopCouponPmt",
    "c_qShopSearchCont",
    "c_qShopSearch",
  ]);
});
/* << */

/* >> client current date (requires jQuery 1.2.6) Version: rel-3-0-0 */
function getCurrentDate(id) {
  ll.$(function () {
    //getElement(id).innerHTML = '';
    var week = [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ];
    var month = [
      "Januar",
      "Februar",
      "MÃ¤rz",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ];
    var date = new Date();
    var d = week[date.getDay()];
    var dom = date.getDate();
    var m = month[date.getMonth()];
    var y = date.getFullYear();
    var std = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    if (dom < 10) {
      dom = "0" + dom;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    var timeSection = ll.$(
      '<span class="timeSection"><span class="inner"></span></span>'
    );
    var timeSectionInner = timeSection.find(".inner");
    timeSectionInner
      .append('<span class="sepYT">,</span>')
      .append('<span class="hour">' + std + "</span>")
      .append('<span class="sepHM">:</span>')
      .append('<span class="min">' + min + "</span>")
      .append('<span class="sepHM">:</span>')
      .append('<span class="sec">' + sec + "</span>")
      .append('<span class="clock">Uhr</span>');
    ll.$("#" + id)
      .empty()
      .append(
        ll
          .$("<div></div>")
          .append('<span class="weekday">' + d + "</span>")
          .append('<span class="sepWD">,</span>')
          .append('<span class="text">den </span>')
          .append('<span class="day">' + dom + ".</span>")
          .append('<span class="month">' + m + "</span>")
          .append('<span class="year">' + y + "</span>")
          .append(timeSection)
      );
    setTimeout(function () {
      getCurrentDate(id);
    }, 1000);
  });
}
/* << */

/* >> LL_TableColumnEnhancer (require jQuery 1.2.6) Version: rel-3-0-0 */
LL_TableColumnEnhancer = function () {
  this.table = null;
  this.colConfig = [0, 1, 2, -3, -2, -1];
  this.tableFullWidth = 0;
  this.tableFullHeight = 0;
  this.tableCurrentWidth = 0;
  this.tableCurrentHeight = 0;
  this.variantsWidth = 0;
  this.variantsHeight = 0;
  this.moved = false;
  this.columns = []; // holds to hide columns with there cells
  this.idOuter = null;
  ll.$("#variants").hide();
};

LL_TableColumnEnhancer.prototype.setColumnConfig = function () {
  if (arguments.length > 0) {
    var conf = [];
    for (var i = 0; i < arguments.length; ++i) {
      if (!isNaN(parseInt(arguments[i], 10))) {
        conf.push(arguments[i]);
      }
    }
    if (conf.length > 0) {
      this.colConfig = conf;
    }
    return this.colConfig;
  }
  return null;
};

LL_TableColumnEnhancer.prototype.init = function (id, idOuter, display) {
  var t = ll.$("#" + id).get(0);
  this.idOuter = idOuter;
  var columnsIndex = [];
  var self = this,
    visibleTdCount = 0;
  ll.$(t)
    .find("tr:nth-child(2) td")
    .each(function (i) {
      if (ll.$(this).css("display") != "none") {
        visibleTdCount++;
      }
    });
  if (t.nodeName.toLowerCase() == "table") {
    if (visibleTdCount > this.colConfig.length) {
      this.table = t;
      this.tableFullWidth = t.offsetWidth;
      this.tableFullHeight = t.offsetHeight;
      for (var k = 0; k < this.getElementChildNodesCount(t, 1); ++k) {
        var tbody = t.childNodes[k];
        for (var i = 0; i < this.getElementChildNodesCount(tbody, 1); ++i) {
          var row = this.getElementChildNodeWithName(tbody, "tr", i);
          for (var j = 0; j < this.getElementChildNodesCount(row, 1); ++j) {
            columnsIndex = this.getColumnsIndex(
              this.getElementChildNodesCount(row, 1),
              this.colConfig
            );
            var cell = this.getElementChildNodeWithName(row, "td", j);
            if (!this._inArray(j, columnsIndex)) {
              if (this.columns[j] instanceof DefaultTableColumn) {
                this.columns[j].addCell(cell);
              } else {
                this.columns[j] = new DefaultTableColumn(j);
                this.columns[j].addCell(cell);
              }
            }
          }
        }
      }
      ll.$("#variantsButtons").show();
      this.updateDisplay(display);
      ll.$("#variantsViewAllButton").click(function (e) {
        self.openInlinePopup();
      });
      ll.$("#variantsViewLessButton").click(function (e) {
        self.closeInlinePopup();
      });
      ll.$("#variants").show();
      this.tableCurrentWidth = this.getContentAreaDimensions().w;
      this.tableCurrentHeight = t.offsetHeight;
      this.variantsWidth = ll.$("#" + this.idOuter).width();
      this.variantsHeight = ll.$("#" + this.idOuter).height();
    } else {
      ll.$("#variants").show();
    }
  }
};

LL_TableColumnEnhancer.prototype.getContentAreaDimensions = function () {
  var ca, dims;
  ca = ll.$("td.contentColumn");
  return { w: ca.width(), h: ca.height() };
};

LL_TableColumnEnhancer.prototype.openInlinePopup = function () {
  var contOrig = ll.$("#variantsOuterShell");
  var cont = ll.$("#variantsPopupContainer");
  var elm = ll.$("#" + this.idOuter);
  if (elm) {
    cont.empty().append(elm);
    contOrig.empty().append(
      ll.$("<img/>").attr({
        src: "/xist4c/px/spc.gif",
        height: this.variantsHeight + 32,
        width: 1,
        class: "variantsDvShellDummy",
      })
    );
    this.updateDisplay(true);
    ll.$("#variantsInlinePopupOuter").show();
    this.tableFullWidth = this.table.offsetWidth;
    if (this.tableFullWidth <= this.tableCurrentWidth) {
      this.tableFullWidth = this.tableCurrentWidth;
      ll.$(this.table).css({ width: this.tableCurrentWidth + "px" });
    }
    var distance = (this.tableFullWidth - this.tableCurrentWidth) / 2 + 12;
    ll.$("#variantsPopupShell").css("left", "-" + distance + "px");
    this.moved = true;
    var self = this;
    ll.$("#variantsViewLessButton").click(function (e) {
      self.closeInlinePopup();
    });
  }
};

LL_TableColumnEnhancer.prototype.closeInlinePopup = function () {
  var cont = ll.$("#variantsOuterShell").get(0);
  ll.$("#variantsInlinePopupOuter").hide();
  var elm = ll.$("#" + this.idOuter);
  if (elm.size() > 0) {
    this.updateDisplay(false);
    cont.replaceChild(
      elm.get(0),
      this.getElementChildNodeWithName(cont, "img", null)
    );
  }
  var self = this;
  ll.$("#variantsViewAllButton").click(function (e) {
    self.openInlinePopup();
  });
};

LL_TableColumnEnhancer.prototype.updateDisplay = function (display, e) {
  if (e) {
    e.stop();
  }
  this.hidden = true;
  if (display) {
    this.hidden = false;
  }
  for (var i = 0; i < this.columns.length; ++i) {
    var col = this.columns[i];
    if (col instanceof DefaultTableColumn) {
      col.setDisplay(display);
    }
  }
  if (this.hidden) {
    ll.$("#variantsViewAllButton").css({ display: "inline" });
    ll.$("#variantsViewLessButton").css({ display: "none" });
  } else {
    ll.$("#variantsViewAllButton").css({ display: "none" });
    ll.$("#variantsViewLessButton").css({ display: "inline" });
  }
};

LL_TableColumnEnhancer.prototype._inArray = function (needle, arr) {
  for (var i = 0; i < arr.length; ++i) {
    if (needle == arr[i]) {
      return true;
    }
  }
  return false;
};

LL_TableColumnEnhancer.prototype.getElementChildNodeWithName = function (
  parent,
  name,
  pos
) {
  pos = pos ? pos : 0;
  var count = 0;
  var childs = parent.childNodes;
  if (childs) {
    for (var i = 0; i < childs.length; ++i) {
      var c = childs[i];
      if (c.nodeType == 1) {
        var nname = c.nodeName.toLowerCase();
        var n = name.toLowerCase();
        if (n == nname && count == pos) {
          return c;
        }
        ++count;
      }
    }
  }
  return null;
};

LL_TableColumnEnhancer.prototype.getElementChildNodesCount = function (
  parent,
  type
) {
  var childs = parent.childNodes;
  var count = 0;
  if (childs) {
    for (var i = 0; i < childs.length; ++i) {
      var c = childs[i];
      if (c.nodeType == type) {
        ++count;
      }
    }
  }
  return count;
};

LL_TableColumnEnhancer.prototype.getColumnsIndex = function (
  colCount,
  permCols
) {
  for (var i = 0; i < permCols.length; ++i) {
    if (permCols[i] < 0) {
      permCols[i] += colCount;
    }
  }
  return permCols;
};

DefaultTableColumn = function (cid) {
  this.cid = cid;
  this.cells = [];
  this.hidden = false;
};

DefaultTableColumn.prototype.addCell = function (Cell) {
  if (
    Cell.nodeName.toLowerCase() == "td" ||
    Cell.nodeName.toLowerCase() == "th"
  ) {
    this.cells.push(new DefaultTableCell(Cell));
  }
};

DefaultTableColumn.prototype.setDisplay = function (display) {
  this.hidden = true;
  if (display) {
    this.hidden = false;
  }
  for (var i = 0; i < this.cells.length; ++i) {
    this.cells[i].setDisplay(display);
  }
};

DefaultTableCell = function (domel) {
  this.domel = domel;
  this.hidden = false;
  this.attrs = {};
  this.children = null;
  this.content = null;
  this._backupAttrsAndChildren();
  this._backupContent();
};

DefaultTableCell.prototype._backupAttrsAndChildren = function () {
  var elm = this.domel;
  this.children = elm.childNodes;
  for (var i = 0; i < elm.attributes.length; ++i) {
    var attr = elm.attributes[i];
    var name = attr.nodeName;
    var value = attr.nodeValue;
    this.attrs[name] = value;
  }
};

DefaultTableCell.prototype._backupContent = function () {
  var node = this.domel;
  while (node.nodeType == 1) {
    node = node.childNodes[0];
    if (node && node.nodeType == 3) {
      this.content = node.nodeValue;
      break;
    } else {
      if (!node) {
        break;
      }
    }
  }
};

DefaultTableCell.prototype.setDisplay = function (display) {
  if (display) {
    this.hidden = false;
    ll.$(this.domel).css({ display: "" });
    return true;
  }
  this.hidden = true;
  ll.$(this.domel).css({ display: "none" });
  return true;
};
/* << */

/* >> LL_CookieTool (require jQuery 1.2.6+) Version: rel-1-1-0  **-Deprecated-** use jquery cookie plugin instead */
LL_CookieTool = {
  isCookieEnabled: function () {
    if (navigator.cookieEnabled === true) {
      return true;
    }
    return false;
  },
  setCookies: function (cObjs) {
    for (var i = 0; i < arguments.length; ++i) {
      var c = arguments[i];
      c.setCookie();
    }
  },
  getCookie: function (name) {
    var cstr = document.cookie;
    if (cstr.length > 0) {
      cookies = cstr.split("; ");
      for (var i = 0; i < cookies.length; ++i) {
        var cook = cookies[i];
        if (cook.substring(0, cook.lastIndexOf("=")) == name) {
          return cook.substring(cook.lastIndexOf("=") + 1, cook.length);
        }
      }
    }
    return null;
  },
  eraseCookie: function (name, domain, path) {
    var c = new CookieData(name, null, domain, path, null, null);
    c.eraseCookie();
  },
};

CookieData = function (name, value, domain, path, expires, secure) {
  this.name = name;
  this.value = value;
  this.domain = domain;
  this.path = path;
  this.expires = expires;
  this.secure = secure;
};

CookieData.prototype.setCookie = function () {
  var cook = this.name + "=" + unescape(this.value);
  cook += this.domain ? "; domain=" + this.domain : "";
  cook += this.expires ? "; expires=" + this.expires : "";
  cook += this.path ? "; path=" + this.path : "/";
  cook += this.secure ? "; secure" : "";
  document.cookie = cook;
};

CookieData.prototype.eraseCookie = function () {
  var cook = this.name + "=; expires=Thu, 01-Jan-70 00:00:01 GMT";
  cook += this.domain ? "; domain=" + this.domain : "";
  cook += this.path ? "; path=" + this.path : "/";
  document.cookie = cook;
};
/* << */

/* >> LL_FontSizeAdjust (require jQuery 1.2.6, plugins: cookie 1.0) Version: rel-3-0-0 */
LL_FontSizeAdjust = {
  symbols: [],
  currentFS: 0,
  domain: location.hostname,
  customerPath: "standard/xx/",
  coId: -1,
  init: function (path, coId) {
    // path: Specifies the image and css path
    // coId: The content object id of a special startpage with different css rules.
    if (coId) {
      this.coId = coId;
    }
    this.connectAndGetSymbols();
    this.setCustomerPath(path);
    this.handleFontSize(this.getFontSize());
  },
  connectAndGetSymbols: function () {
    var self = this;
    ll.$("div[id*=font_adjust_symbol_]").each(function (n) {
      self.symbols.push(this);
      ll.$(this).click(function () {
        self.handleFontSize(n);
      });
    });
  },
  setCustomerPath: function (path) {
    if (path) {
      p = path;
    } else {
      if (
        XIST4C_GLOBALS &&
        XIST4C_GLOBALS.uplPath &&
        XIST4C_GLOBALS.uplPath !== "../upload/01_123/"
      ) {
        p = XIST4C_GLOBALS.uplPath;
      } else {
        p = this.customerPath;
      }
    }
    this.customerPath = p;
  },
  getFontSize: function () {
    var size = ll.$.cookie("FontSizeAdjust");
    if (size) {
      return size;
    }
    return this.currentFS;
  },
  setFontSize: function (size) {
    ll.$.cookie("FontSizeAdjust", size, { path: "/", expires: 100 });
    return size;
  },
  isStartpage: function () {
    if (
      XIST4C_GLOBALS &&
      XIST4C_GLOBALS.meta &&
      this.coId == XIST4C_GLOBALS.meta.coID
    ) {
      return true;
    }
    return false;
  },
  handleFontSize: function (size, e) {
    if (navigator.cookieEnabled) {
      this.currentFS = this.setFontSize(size);
      var head = ll.$("head").get(0);
      ll.$("#fontSizeAdjustCssLink").remove();
      ll.$("#fontSizeAdjustCssLink_startpage").remove();
      var l1 = document.createElement("link");
      l1.href = this.customerPath + "layout_fontSize" + this.currentFS + ".css";
      l1.type = "text/css";
      l1.rel = "stylesheet";
      l1.id = "fontSizeAdjustCssLink";
      head.appendChild(l1);
      if (this.isStartpage()) {
        var l2 = document.createElement("link");
        l2.href =
          this.customerPath +
          "layout_fontSizeStartpage" +
          this.currentFS +
          ".css";
        l2.type = "text/css";
        l2.rel = "stylesheet";
        l2.id = "fontSizeAdjustCssLink_startpage";
        head.appendChild(l2);
      }
    }
    this.switchStyleSheet(this.currentFS);
  },
  switchStyleSheet: function (size) {
    // change the stylesheet element at the head element.
    if (this.symbols.length > 0) {
      for (var i = 0; i < this.symbols.length; ++i) {
        var s = this.symbols[i];
        if (i == size) {
          this.updateSymbol(s, "act");
        } else {
          this.updateSymbol(s, "pass");
        }
      }
    }
  },
  updateSymbol: function (sym, status) {
    var className = sym.className;
    var pref = className.substring(0, className.lastIndexOf("_") + 1);
    var suff = className
      .substring(className.lastIndexOf("_") + 1, className.length)
      .toLowerCase();
    if (status) {
      sym.className = pref + status;
      return sym;
    } else {
      if (suff == "pass") {
        sym.className = pref + "act";
        return sym;
      }
      sym.className = pref + "pass";
      return sym;
    }
    return null;
  },
  handleSymbolStyle: function () {
    // switch the symbol css rules to get an active or passive symbol.
  },
};
/* << */

/* >> LL_RelationshipManager (require jQuery 1.2.6+) Version: rel-3-0-0 */
LL_RelationshipManager = function () {
  this.relHandler = [];
};

LL_RelationshipManager.prototype.addRelHandler = function (Handler) {
  if (Handler instanceof DefaultRelationHandler) {
    this.relHandler.push(Handler);
    if (Handler.elms.length > 0 && Handler.autoAction) {
      Handler.action();
    }
  }
};

// abstract relation handler
DefaultRelationHandler = function () {
  this.name = "testDefaultHandler";
  this.links = document.links;
  this.autoAction = false;
  this.filter(this.name);
  this.elms = []; // holds the elements and the rel attrs as a json object
};

// filter links wih rels with a given name and allocates the attributes.
DefaultRelationHandler.prototype.filter = function (name) {
  var links = this.links;
  for (var i = 0; i < links.length; ++i) {
    this.addElementAndGetRelAttrs(links[i]);
  }
};

DefaultRelationHandler.prototype.addElementAndGetRelAttrs = function (elm) {
  var attr = ll.$(elm).attr("rel"),
    relAttrs = null,
    obj;
  if (attr) {
    if (
      attr.toLowerCase() == this.name.toLowerCase() ||
      attr.substring(0, attr.indexOf("[")).toLowerCase() ==
        this.name.toLowerCase()
    ) {
      if (attr.search(/\[/) > -1 && attr.search(/\]/) > -1) {
        relAttrs = attr.substring(attr.indexOf("[") + 1, attr.lastIndexOf("]"));
        relAttrs = relAttrs.split(",");
      }
      obj = { elm: elm, relAttrs: relAttrs };
      this.elms.push(obj);
      return obj;
    }
  }
  return null;
};

DefaultRelationHandler.prototype.action = function () {}; // do something with the rels

// Use the xpopup functionality to display detail information
XPopupHandler = function () {
  this.name = "xpopup";
  this.autoAction = true;
  this.filter(this.name);
};
XPopupHandler.prototype = new DefaultRelationHandler();

XPopupHandler.prototype.action = function () {
  var self = this;
  setTimeout(function () {
    var TAttrs = null,
      TAttrsArr = [],
      elm,
      eAttrs,
      TAttrsStr,
      i,
      j,
      tAttrRaw,
      key,
      value,
      openObj = 0,
      callback = "";
    for (i = 0; i < self.elms.length; ++i) {
      elm = self.elms[i].elm;
      eAttrs = self.elms[i].relAttrs;
      if (eAttrs && eAttrs.length == 6) {
        TAttrs.url = elm.href;
        TAttrs.height = "auto";
        TAttrs.width = "auto";
      } else {
        TAttrsStr = eAttrs.slice(6).join(",");
        eval("TAttrs = {" + TAttrsStr + "}");
        if (!TAttrs.url) {
          TAttrs.url = elm.href;
        }
        if (TAttrs.callback) {
          callback = TAttrs.callback;
        }
      }
      LL_XPopup.registerPopup(
        elm,
        eAttrs[0],
        eAttrs[1],
        eAttrs[2],
        eAttrs[3],
        eAttrs[4],
        eAttrs[5],
        TAttrs,
        callback
      );
    }
  }, 10);
};

// use the xpopup to display lightbox photogalleries
LightboxHandler = function () {
  this.name = "lightbox";
  this.autoAction = true;
  this.filter(this.name);
};
LightboxHandler.prototype = new DefaultRelationHandler();

LightboxHandler.prototype.action = function () {
  var self = this;
  setTimeout(function () {
    for (var i = 0; i < self.elms.length; ++i) {
      var TAttrs = {};
      var TAttrsArr = [];
      var elm = self.elms[i].elm;
      var eAttrs = self.elms[i].relAttrs;
      if (eAttrs && eAttrs.length == 1) {
        TAttrs.group = eAttrs[0];
      }
      TAttrs.url = elm.href;
      TAttrs.background = "true";
      // TAttrs.fixedPosition = 'true';
      LL_XPopup.registerPopup(elm, "click", "IMAGE", "p_c", "c", 0, 0, TAttrs);
    }
  }, 10);
};

// Use the xpopup functionality to display detail information (avoid doubles)
XPopupTriggerHandler = function () {
  this.name = "xpopupTrigger";
  this.autoAction = true;
  this.filter(this.name);
};

XPopupTriggerHandler.prototype = new DefaultRelationHandler();

XPopupTriggerHandler.prototype.action = function () {
  var self = this;
  setTimeout(function () {
    var i,
      elm,
      relAttrs,
      cb = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (relAttrs.length > 1 && ll.$("#" + relAttrs[1]).length > 0) {
          ll.$("#" + relAttrs[1]).trigger(relAttrs[0]);
        }
      };
    for (i = 0; i < self.elms.length; ++i) {
      elm = self.elms[i].elm;
      relAttrs = self.elms[i].relAttrs;
      ll.$(elm).bind(relAttrs[0], cb);
    }
  }, 10);
};
/* << */

/* >> LL_XPopup (require jQuery 1.2.6 and LL_RelationshipManager with XPopupHandler) Version: rel-3-0-0 */
/*
		Possible positions for the source and popup element:
		nw, w, sw, n, c, s, ne, e, se, p_nw, p_w, p_sw, p_n, p_c, p_s, p_ne, p_e, p_se, cursor (only for the source element)

		possible types: IMAGE, WEBPAGE, AJAX, CONTENT
			IMAGE: Display images in a special gallery mode.
			WEBPAGE: Display a web page in an iframe.
			AJAX: Load ajax-content into a div container with a given url.
			HTMLSRC: Display simple html

		Example for rel-Attributes: xpopup[onmouseenter,WEBPAGE,ne,nw,10,10,height:300,width:200]
			identfier[event, type, source position, popup position, popup margin width, popup margin height,--mode attributes--]
			--mode attributes--:
				A commata separated list with key:value items.
				Note: Each mode can have different attributes.
	*/
LL_XPopup = {
  xpopups: [],
  popup: null,
  initScrollPos: 0,
  preparedGallery: [],
  currentGalleryIdx: -1,
  galleryOverall: -1,
  slideshowBusy: 0,
  slideshowInterval: null,
  nextConnect: null,
  previousConnect: null,
  closeConnect: null,
  registerPopup: function (
    elm,
    event,
    type,
    spos,
    ppos,
    margin_w,
    margin_h,
    TypeAttrs,
    callback
  ) {
    //type = 'AJAX';
    var self = this,
      cb = callback || null;
    setTimeout(function () {
      self.makePopup();
    }, 1);
    switch (type) {
      case "IMAGE":
        this.xpopups.push(
          new ImageXPopup(
            elm,
            event,
            spos,
            ppos,
            margin_w,
            margin_h,
            TypeAttrs,
            cb
          )
        );
        break;
      case "WEBPAGE":
        this.xpopups.push(
          new WebpageXPopup(
            elm,
            event,
            spos,
            ppos,
            margin_w,
            margin_h,
            TypeAttrs,
            cb
          )
        );
        break;
      case "AJAX":
        this.xpopups.push(
          new AjaxXPopup(
            elm,
            event,
            spos,
            ppos,
            margin_w,
            margin_h,
            TypeAttrs,
            cb
          )
        );
        break;
      case "HTMLSRC":
        this.xpopups.push(
          new HtmlSrcXPopup(
            elm,
            event,
            spos,
            ppos,
            margin_w,
            margin_h,
            TypeAttrs,
            cb
          )
        );
        break;
    }
  },
  makePopup: function () {
    if (!this.popup) {
      this.popup = ll
        .$("<div></div>")
        .append(this.makeCloseButton())
        .append(ll.$("<div>").attr({ id: "xpopupContent" }))
        .append(ll.$("<div>").attr({ id: "xpopupAddOns" }))
        .attr({ id: "xpopup", class: "xpopup" })
        .css({ display: "none" })
        .get(0);
      ll.$("body").append(this.popup);
    }
    return this.popup;
  },
  makeCloseButton: function () {
    var self = this;
    ll.$(document).keydown(function (e) {
      self.destruct(e);
    });
    return ll
      .$("<div>")
      .append(
        ll
          .$("<div>")
          .append(
            ll
              .$("<img>")
              .attr({
                src: "/xist4c/px/spc.gif",
                alt: "",
                id: "xpopupCloseGfx",
              })
              .click(function (e) {
                self.destruct(e);
              })
          )
          .attr({ class: "inner" })
      )
      .attr({ id: "xpopupCloseButton" })
      .get(0);
  },
  showBodyScrollbars: function () {
    ll.$("body").css("overflow", "auto");
  },
  cleanUp: function (pupData) {
    var self = this;
    var bg = ll.$("#xpopup_background");
    if (bg.size() > 0) {
      bg.fadeOut(function () {
        bg.remove();
        if (pupData && pupData.Attrs && !pupData.Attrs.preventOverflowHidden) {
          self.showBodyScrollbars();
        }
      });
    } else {
      if (pupData && pupData.Attrs && !pupData.Attrs.preventOverflowHidden) {
        this.showBodyScrollbars();
      }
    }
    ll.$("#xpopupGalleryOverview").remove();
    ll.$("#xpopup").unbind(".specials");
    ll.$("#xpopupContent").empty();
    this.initScrollPos = 0;
    this.preparedGallery = [];
    this.currentGalleryIdx = -1;
    this.galleryOverall = -1;
    this.slideshowBusy = 0;
    if (this.slideshowInterval) {
      clearTimeout(this.slideshowInterval);
    }
  },
  destruct: function (e) {
    var self = this,
      pupData = ll.$(this.popup).find("#xpopupContent").data("xpopupContent");
    if (this.popup) {
      if (e) {
        if (e.type == "keydown") {
          if (e.keyCode == 27) {
            if (Utils.isObject(pupData) && Utils.isFunction(pupData.callback)) {
              pupData.callback.call(pupData, "close");
            }
            ll.$(this.popup).fadeOut(function () {
              self.cleanUp(pupData);
            });
          }
        } else if (
          e.type == "click" ||
          e.type == "mouseleave" ||
          e.type == "mouseout"
        ) {
          if (e.type == "click") {
            if (Utils.isObject(pupData) && Utils.isFunction(pupData.callback)) {
              pupData.callback.call(pupData, "close");
            }
            ll.$(this.popup).fadeOut(function () {
              self.cleanUp(pupData);
            });
          } else {
            if (Utils.isObject(pupData) && Utils.isFunction(pupData.callback)) {
              pupData.callback.call(pupData, "close");
            }
            ll.$(this.popup).hide();
            this.cleanUp(pupData);
          }
        }
      } else {
        if (Utils.isObject(pupData) && Utils.isFunction(pupData.callback)) {
          pupData.callback.call(pupData, "close");
        }
        ll.$(this.popup).fadeOut(function () {
          self.cleanUp(pupData);
        });
      }
    }
  },
};

DefaultXPopup = function (
  src,
  event,
  spos,
  ppos,
  margin_w,
  margin_h,
  TypeAttrs,
  callback
) {
  this.src = src;
  this.event = event;
  this.spos = spos; // layer position on the connected source element
  this.ppos = ppos; // position of the popup layer relative to the layer position of the source element
  this.mw = margin_w; // margin width of the popup from the connected source element (negative integer values allowed)
  this.mh = margin_h; // margin height of the popup from the connected source element (negative integer values allowed)
  this.Attrs = TypeAttrs;
  this.srcDeferred = null;
  this.srcOutDeferred = null;
  this.callback = callback || null;
  if (arguments.length >= 6) {
    this.connectSrcElement();
  }
};

DefaultXPopup.prototype.connectSrcElement = function () {
  var self = this;
  ll.$(this.src).bind(this.event, function (e) {
    self.show(e);
  });
};

DefaultXPopup.prototype.pushContentIntoPopup = function () {
  ll.$("#xpopupContent")
    .empty()
    .append(this.getContent())
    .data("xpopupContent", this);
  if (Utils.isFunction(this.callback)) {
    this.callback.call(this, "load");
  }
};

DefaultXPopup.prototype.getContent = function () {
  return ll.$("<span>Test Content of the default xpopup!</span>").get(0);
};

DefaultXPopup.prototype.getAttr = function (name) {
  if (this.Attrs) {
    for (var k in this.Attrs) {
      if (k.toLowerCase() == name.toLowerCase()) {
        return this.Attrs[name];
      }
    }
  }
  return null;
};

DefaultXPopup.prototype.setPopupPosition = function (src, mousePos) {
  var self = this,
    p = LL_XPopup.popup,
    srcDims = { w: ll.$(src).outerWidth(), h: ll.$(src).outerHeight() },
    srcPos = { x: ll.$(src).offset().left, y: ll.$(src).offset().top },
    mCords = mousePos,
    pDims = { w: ll.$(p).width(), h: ll.$(p).height() },
    vpDims = { w: ll.$(window).width(), h: ll.$(window).height() },
    vpPos = { x: ll.$(document).scrollLeft(), y: ll.$(document).scrollTop() },
    pWidth = pDims.w,
    pHeight = pDims.h,
    buffer = 0,
    xPos,
    yPos,
    x,
    y;

  if (navigator.appVersion.search("MSIE 8") > -1) {
    vpPos = {
      x: document.body.parentElement.scrollLeft,
      y: document.body.parentElement.scrollTop,
    };
  }

  LL_XPopup.initScrollPos = vpPos;
  if (this.spos.substring(0, 2) == "p_") {
    srcDims = vpDims;
    if (!this.isIE()) {
      if (this.isFixedPosition()) {
        vpPos = { x: 0, y: 0 };
      }
    }
    srcPos = vpPos;
  } else {
    if (!this.isIE()) {
      if (this.isFixedPosition()) {
        srcPos.x = srcPos.x - vpPos.x;
        srcPos.y = srcPos.y - vpPos.y;
        vpPos = { x: 0, y: 0 };
      }
    }
  }
  if (
    this.spos == "nw" ||
    this.spos == "w" ||
    this.spos == "sw" ||
    this.spos == "p_nw" ||
    this.spos == "p_w" ||
    this.spos == "p_sw"
  ) {
    x = srcPos.x;
  } else if (
    this.spos == "n" ||
    this.spos == "c" ||
    this.spos == "s" ||
    this.spos == "p_n" ||
    this.spos == "p_c" ||
    this.spos == "p_s"
  ) {
    x = srcPos.x + srcDims.w / 2;
  } else if (
    this.spos == "ne" ||
    this.spos == "e" ||
    this.spos == "se" ||
    this.spos == "p_ne" ||
    this.spos == "p_e" ||
    this.spos == "p_se"
  ) {
    x = srcPos.x + srcDims.w;
  } else if (this.spos == "cursor") {
    x = mCords.x;
  } else {
    x = 0;
  }

  if (
    this.spos == "nw" ||
    this.spos == "n" ||
    this.spos == "ne" ||
    this.spos == "p_nw" ||
    this.spos == "p_n" ||
    this.spos == "p_ne"
  ) {
    y = srcPos.y;
  } else if (
    this.spos == "w" ||
    this.spos == "c" ||
    this.spos == "e" ||
    this.spos == "p_w" ||
    this.spos == "p_c" ||
    this.spos == "p_e"
  ) {
    y = srcPos.y + srcDims.h / 2;
  } else if (
    this.spos == "sw" ||
    this.spos == "s" ||
    this.spos == "se" ||
    this.spos == "p_sw" ||
    this.spos == "p_s" ||
    this.spos == "p_se"
  ) {
    y = srcPos.y + srcDims.h;
  } else if (this.spos == "cursor") {
    y = mCords.y;
  } else {
    y = 0;
  }

  relPopPos = this.getRelativePopupPosition(x, y, srcDims, pDims, this.ppos);
  xPos = relPopPos.x;
  yPos = relPopPos.y;
  if (xPos + pWidth > vpDims.w + vpPos.x) {
    xPos = vpDims.w + vpPos.x - (pWidth + buffer);
  }
  if (yPos + pHeight > vpDims.h + vpPos.y) {
    yPos = vpDims.h + vpPos.y - (pHeight + buffer);
  }
  if (xPos <= vpPos.x) {
    xPos = vpPos.x + buffer;
  }
  if (yPos <= vpPos.y) {
    yPos = vpPos.y + buffer;
  }
  ll.$(LL_XPopup.popup).animate(
    { left: xPos, top: yPos },
    "fast",
    "swing",
    function () {
      self.handlePopupPositionMode();
    }
  );
};

DefaultXPopup.prototype.setPopupWidth = function () {
  ll.$("#xpopup, #xpopupContent").css({ width: null });
};

DefaultXPopup.prototype.isIE = function () {
  if (window.clientInformation) {
    if (window.clientInformation.appName == "Microsoft Internet Explorer") {
      return true;
    }
  }
  return false;
};

DefaultXPopup.prototype.isFixedPosition = function () {
  var fp = this.getAttr("fixedPosition");
  if (fp) {
    if (typeof fp === "string" || typeof fp === "number") {
      if (fp || fp == 1) {
        return true;
      }
    } else {
      return fp;
    }
  }
  return false;
};

DefaultXPopup.prototype.handlePopupPositionMode = function (e) {
  if (!this.isIE()) {
    if (this.isFixedPosition()) {
      return ll.$(LL_XPopup.popup).attr("class", "xpopup_fixed");
    }
  }
  return ll.$(LL_XPopup.popup).attr("class", "xpopup");
};

DefaultXPopup.prototype.getRelativePopupPosition = function (
  xPos,
  yPos,
  srcDims,
  pDims,
  ppos
) {
  if (!ppos || ppos == "nw") {
    xPos += this.mw / 1;
    yPos += this.mh / 1;
    return { x: xPos, y: yPos };
  } else if (ppos == "w") {
    xPos += this.mw / 1;
    return { x: xPos, y: yPos - pDims.h / 2 };
  } else if (ppos == "sw") {
    xPos += this.mw / 1;
    yPos -= this.mh / 1;
    return { x: xPos, y: yPos - pDims.h };
  } else if (ppos == "n") {
    yPos += this.mh / 1;
    return { x: xPos - pDims.w / 2, y: yPos };
  } else if (ppos == "c") {
    return { x: xPos - pDims.w / 2, y: yPos - pDims.h / 2 };
  } else if (ppos == "s") {
    yPos -= this.mh / 1;
    return { x: xPos - pDims.w / 2, y: yPos - pDims.h };
  } else if (ppos == "ne") {
    xPos -= this.mw / 1;
    yPos += this.mh / 1;
    return { x: xPos - pDims.w, y: yPos };
  } else if (ppos == "e") {
    xPos -= this.mw / 1;
    return { x: xPos - pDims.w, y: yPos - pDims.h / 2 };
  } else if (ppos == "se") {
    xPos -= this.mw / 1;
    yPos -= this.mh / 1;
    return { x: xPos - pDims.w, y: yPos - pDims.h };
  }
};

DefaultXPopup.prototype.handleSrcAndPopupConnect = function () {
  if (this.event != "click" && this.spos != this.ppos) {
    ll.$(this.src).bind("mouseleave", function (e) {
      LL_XPopup.destruct(e);
    });
  } else if (this.event != "click" && this.spos == this.ppos) {
    ll.$(LL_XPopup.popup).bind("mouseleave", function (e) {
      LL_XPopup.destruct(e);
    });
  }
};

DefaultXPopup.prototype.makeAddOns = function (e) {
  ll.$("#xpopupAddOns").empty();
};

DefaultXPopup.prototype.makeBackground = function (r, g, b, opacity) {
  var red,
    green,
    blue,
    op = opacity || 0.9;
  rv = r ? r : 0;
  gv = g ? g : 0;
  bv = b ? b : 0;
  var bg = ll
    .$("<div> </div>")
    .attr("id", "xpopup_background")
    .css({
      display: "none",
      position: "absolute",
      "z-index": 500000,
      left: 0,
      top: 0,
      "background-color": "rgb(" + rv + "," + gv + "," + bv + ")",
      width: ll.$(document).width(),
      height: ll.$(document).height(),
    });
  if (ll.$("#xpopup_background").size() === 0) {
    bg.click(function (e) {
      LL_XPopup.destruct(e);
    });
    ll.$("body").append(bg);
    bg.css({ display: "block", opacity: 0 }).fadeTo("fast", op);
  }
};

DefaultXPopup.prototype.hideBodyScrollbars = function () {
  ll.$("body").css({ overflow: "hidden" });
};

DefaultXPopup.prototype.show = function (e) {
  var mousePos = { x: 0, y: 0 },
    self = this;
  if (e) {
    e.preventDefault();
    mousePos = { x: e.pageX, y: e.pageY };
  }
  var aos = ll.$("#xpopupAddOns");
  aos.hide();
  src = this.src;
  if (this.Attrs && !this.Attrs.preventOverflowHidden) {
    this.hideBodyScrollbars();
  }
  Utils.busyWait(
    function (intervalObj) {
      if (ll.$("#xpopupContent").length) {
        return true;
      }
      return false;
    },
    30,
    10000,
    function (intervalObj) {
      self.pushContentIntoPopup();
      self.handleSrcAndPopupConnect();
      self.makeAddOns();
      aos.show();
      var pupData = ll
        .$(LL_XPopup.popup)
        .find("#xpopupContent")
        .data("xpopupContent");
      self.setPopupPosition(src, mousePos);
      ll.$(LL_XPopup.popup).fadeIn();
      if (Utils.isObject(pupData) && Utils.isFunction(pupData.callback)) {
        pupData.callback.call(pupData, "show");
      }
    }
  );
};

// Image xpopup
ImageXPopup = function (
  src,
  event,
  spos,
  ppos,
  margin_w,
  margin_h,
  TypeAttrs,
  callback
) {
  /* TypeAttrs: url, href, jsFunc, height, width, background
   * url: Source of the image to display.
   * group: An identifier for group related images.
   * href: Link reference for the image.
   * jsFunc: Mochikit bind or partial functions.
   * height: Popup height.
   * width: Popup width.
   * background: The popup stay on a dark background
   * fixedPosition: The popup is position fixed and has no response on scroll events.
   */
  this.constructor(
    src,
    event,
    spos,
    ppos,
    margin_w,
    margin_h,
    TypeAttrs,
    callback
  );
  this.image = this.makeImage(this.getAttr("url"), {
    border: 0,
    alt: "",
    title: "",
  });
  this.appearingHud = null;
  this.activeHud = false;
};
ImageXPopup.prototype = new DefaultXPopup();

ImageXPopup.prototype.setPopupWidth = function (w) {
  var p = ll.$("#xpopup");
  var pc = ll.$("#xpopupContent");
  var imgWidth = w.substring(0, w.length - 2) / 1;
  var pl = pc.css("padding-left");
  pl = pl.substring(0, pl.length - 2) / 1;
  var pr = pc.css("padding-right");
  pr = pr.substring(0, pr.length - 2) / 1;
  p.css({ width: imgWidth + pl + pr + "px" });
};

ImageXPopup.prototype.getSrcImage = function () {
  nodes = ll.$("img", this.src);
  if (nodes.size() > 0) {
    return nodes.get(0);
  }
  return null;
};

ImageXPopup.prototype.getSrcImageTitle = function () {
  var elm = this.getSrcImage();
  if (elm && elm.title && elm.title !== "") {
    return elm.title;
  }
  return null;
};

ImageXPopup.prototype.prepareGalleryByGroup = function () {
  LL_XPopup.preparedGallery = [];
  LL_XPopup.currentGalleryIdx = -1;
  LL_XPopup.galleryOverall = -1;
  var grp = this.getAttr("group");
  if (grp) {
    var xpopups = LL_XPopup.xpopups;
    var idx = -1;
    for (var i = 0; i < xpopups.length; ++i) {
      var xp = xpopups[i];
      if (xp instanceof ImageXPopup) {
        if (xp.getAttr("group") == grp) {
          idx++;
          if (xp === this) {
            LL_XPopup.currentGalleryIdx = idx;
          }
          LL_XPopup.preparedGallery.push(xp);
        }
      }
    }
    if (LL_XPopup.preparedGallery.length > 0) {
      LL_XPopup.galleryOverall = LL_XPopup.preparedGallery.length;
    }
  }
};

ImageXPopup.prototype.makeImage = function (src, attrs) {
  var img = new Image();
  img.src = src;
  for (var k in attrs) {
    if (k == "class") {
      img.className = attrs[k];
    } else {
      img[k] = attrs[k];
    }
  }
  return img;
};

ImageXPopup.prototype.resizeImgOnOverflow = function (
  img,
  maxHeight,
  maxWidth
) {
  var h = img.height;
  var w = img.width;
  var ah = maxHeight;
  var aw = maxWidth;
  if (ah && aw) {
    if (h > ah) {
      w = Math.floor((w * ah) / h);
      h = ah;
    }
    if (w > aw) {
      h = Math.floor((h * aw) / w);
      w = aw;
    }
    img.height = h;
    img.width = w;
  }
  return img;
};

ImageXPopup.prototype.makeImageTitleIfAny = function () {
  var t = this.getSrcImageTitle();
  if (t) {
    return ll
      .$("<div>")
      .append(ll.$("<span>" + t + "</span>"))
      .attr({ id: "xpopupImgTitle", class: "xpopupImgTitle" })
      .get(0);
  }
  return null;
};

ImageXPopup.prototype.activateHud = function (e) {
  if (!this.appearingHud && !this.activeHud) {
    this.appearingHud = 1;
    this.activeHud = true;
    var self = this;
    ll.$("#xpopupHoverMenuOuter").fadeIn("fast");
    self.appearingHud = null;
  }
  this.activeHud = true;
};

ImageXPopup.prototype.deactivateHud = function (e) {
  if (this.activeHud) {
    ll.$("#xpopupHoverMenuOuter").hide();
  }
  this.activeHud = false;
};

ImageXPopup.prototype.makeHudAndPrepareGallery = function () {
  var self = this;
  ll.$(LL_XPopup.popup).unbind("mousemove.special");
  ll.$(LL_XPopup.popup).bind("mousemove.special", function (e) {
    e.preventDefault();
    e.stopPropagation();
    self.activateHud(e);
  });
  ll.$("#xpopup_background").bind("mouseover.special", function (e) {
    e.preventDefault();
    e.stopPropagation();
    self.deactivateHud(e);
  });
  this.prepareGalleryByGroup();
  var hm = ll
    .$("<div>")
    .append(
      ll
        .$("<div>")
        .append(
          ll
            .$("<div>")
            .append(
              this.getPlayPauseButton(),
              this.getPreviousButton(),
              this.getNextButton(),
              this.getThumbsButton(),
              this.getCloseButton()
            )
            .attr({ id: "xpopupHoverMenu" })
        )
        .attr({ id: "xpopupHoverMenuPos" })
    )
    .attr({ id: "xpopupHoverMenuOuter" })
    .get(0);
  return hm;
};

ImageXPopup.prototype.buttonsStateController = function () {
  var buttons = [
    "xpopupHoverMenuPlayPauseButton",
    "xpopupHoverMenuPreviousButton",
    "xpopupHoverMenuNextButton",
    "xpopupHoverMenuThumbsButton",
    "xpopupHoverMenuCloseButton",
  ];

  if (LL_XPopup.galleryOverall > 1) {
    this.updateButton(buttons[0], "act");
    if (LL_XPopup.slideshowBusy) {
      this.updateButton(buttons[0], "act", "pauseButton");
    }
    this.updateButton(buttons[3], "act"); // Thumb not connected now.
  } else {
    this.updateButton(buttons[0], "pass");
    this.updateButton(buttons[3], "pass");
  }

  if (LL_XPopup.galleryOverall > 1 && LL_XPopup.currentGalleryIdx > 0) {
    this.updateButton(buttons[1], "act");
  } else {
    this.updateButton(buttons[1], "pass");
  }

  if (
    LL_XPopup.galleryOverall > 1 &&
    LL_XPopup.currentGalleryIdx < LL_XPopup.preparedGallery.length - 1
  ) {
    this.updateButton(buttons[2], "act");
  } else {
    this.updateButton(buttons[2], "pass");
  }
  this.updateButton(buttons[4], "act");
};

ImageXPopup.prototype.getPlayPauseButton = function () {
  var self = this;
  return ll
    .$("<div>")
    .attr({ class: "playButton_pass", id: "xpopupHoverMenuPlayPauseButton" })
    .click(function (e) {
      self.handleSlideshow(e);
      self.activeHud = false;
    })
    .get(0);
};

ImageXPopup.prototype.getPreviousButton = function () {
  var self = this;
  return ll
    .$("<div>")
    .attr({ class: "previousButton_pass", id: "xpopupHoverMenuPreviousButton" })
    .click(function (e) {
      self.changeImage(-1, "pager", e);
      self.activeHud = false;
    })
    .get(0);
};

ImageXPopup.prototype.getNextButton = function () {
  var self = this;
  return ll
    .$("<div>")
    .attr({ class: "nextButton_pass", id: "xpopupHoverMenuNextButton" })
    .click(function (e) {
      self.changeImage(1, "pager", e);
      self.activeHud = false;
    })
    .get(0);
};

ImageXPopup.prototype.getThumbsButton = function () {
  var self = this;
  return ll
    .$("<div>")
    .attr({ class: "thumbsButton_pass", id: "xpopupHoverMenuThumbsButton" })
    .click(function (e) {
      self.handleGalleryOverview(e);
      self.activeHud = false;
    })
    .get(0);
};

ImageXPopup.prototype.getCloseButton = function () {
  var self = this,
    lay = ll
      .$("<div>")
      .attr({ class: "closeButton_pass", id: "xpopupHoverMenuCloseButton" })
      .click(function (e) {
        if (Utils.isFunction(self.callback)) {
          self.callback.call(self, "close");
        }
        LL_XPopup.destruct(e);
        self.activeHud = false;
      })
      .get(0);
  return lay;
};

ImageXPopup.prototype.updateButton = function (id, state, cnPrefix) {
  var button = ll.$("#" + id);
  if (arguments.length < 3) {
    var cn = button.attr("class");
    cnPrefix = cn.substring(0, cn.lastIndexOf("_"));
  }
  button.attr({ class: cnPrefix + "_" + state });
};

ImageXPopup.prototype.isButtonActive = function (e, className) {
  var cn = e.target.className;
  if (className) {
    cn = className;
  }
  var state = cn.substring(cn.lastIndexOf("_") + 1, cn.length).toLowerCase();
  if (state == "act") {
    return true;
  }
  return false;
};

ImageXPopup.prototype.makeAddOns = function (e) {
  var aos = ll.$("#xpopupAddOns");
  aos.empty();
  aos.append(this.makeHudAndPrepareGallery());
  ll.$("#xpopupHoverMenu").css({ left: this.image.width / 2 - 132 + "px" });
  var title = this.makeImageTitleIfAny();
  aos.append(title);
  this.buttonsStateController();
};

ImageXPopup.prototype.changeImage = function (idx, modeStr, e) {
  var xpopup,
    self = this;
  if (LL_XPopup.slideshowBusy > 0) {
    if (e && this.isButtonActive(e) && modeStr == "pager") {
      idx = LL_XPopup.currentGalleryIdx += idx;
      xpopup = LL_XPopup.preparedGallery[idx];
      xpopup.show();
    } else if (modeStr == "slideshow") {
      idx = LL_XPopup.currentGalleryIdx += idx;
      if (idx == LL_XPopup.preparedGallery.length) {
        idx = LL_XPopup.currentGalleryIdx = 0;
      }
      xpopup = LL_XPopup.preparedGallery[idx];
      ll.$("#xpopup").fadeOut("fast", function () {
        xpopup.pushContentIntoPopup();
        xpopup.makeAddOns();
        setTimeout(function () {
          var mousePos = { x: 0, y: 0 };
          xpopup.setPopupPosition(xpopup.src, mousePos);
          ll.$("#xpopup").fadeIn();
        }, 500);
      });
    }
    if (LL_XPopup.slideshowInterval) {
      clearTimeout(LL_XPopup.slideshowInterval);
    }
    LL_XPopup.slideshowInterval = setTimeout(function () {
      self.changeImage(1, "slideshow");
    }, 7000);
  } else {
    if (e && this.isButtonActive(e) && modeStr == "pager") {
      idx = LL_XPopup.currentGalleryIdx += idx;
      xpopup = LL_XPopup.preparedGallery[idx];
      xpopup.show();
    } else if (modeStr == "gallery") {
      idx = LL_XPopup.currentGalleryIdx = idx;
      xpopup = LL_XPopup.preparedGallery[idx];
      xpopup.show();
    }
  }
};

ImageXPopup.prototype.getContent = function () {
  var img = null;
  var href, jsFunc;
  if (this.Attrs) {
    var Attrs = this.Attrs;
    img = this.resizeImgOnOverflow(
      this.image,
      this.getAttr("height"),
      this.getAttr("width")
    );
    ll.$(img).css({ "vertical-align": "middle" });
    height = Attrs.height ? Attrs.height + "px" : img.height + "px";
    width = Attrs.width ? Attrs.width + "px" : img.width + "px";
    if (Attrs.href && !Attrs.jsFunc) {
      href = Attrs.href;
      img = ll.$("<a>").append(img).attr({ href: Attrs.href }, img);
    }
    if (Attrs.jsFunc) {
      ll.$(img).css({ cursor: "pointer" }).click(Attrs.jsFunc);
    }
    if (this.Attrs.background) {
      if (
        this.Attrs.background ||
        this.Attrs.background == 1 ||
        Utils.isObject(this.Attrs.background)
      ) {
        if (Utils.isObject(this.Attrs.background)) {
          this.makeBackground(
            this.Attrs.background.r,
            this.Attrs.background.g,
            this.Attrs.background.b,
            this.Attrs.background.opacity
          );
        } else {
          this.makeBackground();
        }
      }
    }
  }
  this.setPopupWidth(width);
  return ll
    .$("<div>")
    .append(img)
    .css({
      height: height,
      width: width,
      overflow: "auto",
      "text-align": "center",
    });
};

ImageXPopup.prototype.changeSlideshowPopupCSS = function () {
  var xPopupClass, xPopupTitleClass;
  if (LL_XPopup.slideshowBusy) {
    xPopupClass = "xpopup_slideshow";
    xPopupTitleClass = "xpopupImgTitle_slideshow";
    if (!this.isIE() && this.isFixedPosition()) {
      xPopupClass = "xpopup_slideshow_fixed";
    }
  } else {
    xPopupClass = "xpopup";
    xPopupTitleClass = "xpopupImgTitle";
    if (!this.isIE() && this.isFixedPosition()) {
      xPopupClass = "xpopup_fixed";
    }
  }
  ll.$("#xpopup").attr({ class: xPopupClass });
  if (ll.$("#xpopupImgTitle").size() > 0) {
    ll.$("#xpopupImgTitle").attr({ class: xPopupTitleClass });
  }
};

ImageXPopup.prototype.handleSlideshow = function (e) {
  var buttonClass,
    self = this;
  if (this.isButtonActive(e)) {
    if (LL_XPopup.slideshowBusy) {
      buttonClass = "playButton";
      LL_XPopup.slideshowBusy = 0;
      clearTimeout(LL_XPopup.slideshowInterval);
    } else {
      buttonClass = "pauseButton";
      LL_XPopup.slideshowBusy = 1;
      LL_XPopup.slideshowInterval = setTimeout(function () {
        self.changeImage(1, "slideshow");
      }, 7000);
    }
    this.updateButton("xpopupHoverMenuPlayPauseButton", "act", buttonClass);
  }
};

ImageXPopup.prototype.handleGalleryImgClick = function (idx, e) {
  e.preventDefault();
  e.stopPropagation();
  var self = this;
  ll.$("#xpopupGalleryOverview").fadeOut("fast", function () {
    ll.$("#xpopupGalleryOverview").remove();
  });
  this.changeImage(idx, "gallery");
};

ImageXPopup.prototype.handleGalleryOverview = function (e) {
  if (LL_XPopup.slideshowBusy) {
    this.handleSlideshow({
      target: ll.$("#xpopupHoverMenuPlayPauseButton").get(0),
    });
  }
  ll.$("#xpopup").hide();
  var images = this.getOverviewImagesWithDeco();
  var vpDims = { w: ll.$(window).width(), h: ll.$(window).height() };
  var vpPos = { x: ll.$(document).scrollLeft(), y: ll.$(document).scrollTop() };
  var px = null;
  var py = null;
  var h = vpDims.h;
  var w = vpDims.w;
  var position = "fixed";
  if (this.isIE()) {
    if (navigator.appVersion.search("MSIE 8") > -1) {
      vpPos = {
        x: document.body.parentElement.scrollLeft,
        y: document.body.parentElement.scrollTop,
      };
    }
    px = vpPos.x;
    py = vpPos.y;
    position = "absolute";
  }
  var container = ll
    .$("<div>")
    .attr({ id: "xpopupGalleryOverview", class: "xpopupGalleryOverview" })
    .css({
      height: "100%",
      width: "100%",
      position: position,
      left: px,
      top: py,
    })
    .click(function (e) {
      LL_XPopup.destruct(e);
    });
  for (var i = 0; i < images.length; ++i) {
    container.append(images[i]);
  }
  ll.$("body").append(container);
  ll.$("#xpopupGalleryOverview").fadeIn("fast");
};

ImageXPopup.prototype.getOverviewImagesWithDeco = function () {
  var pg = LL_XPopup.preparedGallery,
    images = [],
    mw = 135,
    mh = 90,
    x = function (self, idx) {
      var srcImg = pg[idx].getSrcImage();
      var paddingTop = "0";
      if (srcImg.height < mh) {
        paddingTop = parseInt((mh - srcImg.height) / 2, 10) + "px";
      }
      var img = self.makeImage(srcImg.src, {
        width: srcImg.width,
        height: srcImg.height,
        border: 0,
        alt: srcImg.alt,
        title: srcImg.title,
      });
      img = Utils.getRecalculatedImage({
        image: img,
        maxWidth: mw,
        maxHeight: mh,
        proportional: true,
      });
      var imgWrapped = ll
        .$("<span></span>")
        .append(img)
        .css({ "padding-top": paddingTop });
      images.push(
        ll
          .$("<div>")
          .append(
            ll
              .$("<a></a>")
              .append(
                ll
                  .$("<span></span>")
                  .append(imgWrapped)
                  .attr({ class: "image" })
              )
              .attr({ class: "inner1", href: "#" })
          )
          .attr({ class: "xpopupGalleryImageDeco" })
          .click(function (e) {
            self.handleGalleryImgClick(idx, e);
          })
          .get(0)
      );
      return images;
    };
  for (var i = 0; i < pg.length; ++i) {
    images = x(this, i);
  }
  return images;
};

// Webpage xpopup
WebpageXPopup = function (
  src,
  event,
  spos,
  ppos,
  margin_w,
  margin_h,
  TypeAttrs,
  callback
) {
  /* TypeAttrs: url, href, jsFunc, height, width, background
   * url: Source of the image to display.
   * height: Popup height.
   * width: Popup width.
   * background: The xpopup stay on a dark background
   * fixedPosition: The popup is position fixed and has no response on scroll events.
   */
  this.constructor(
    src,
    event,
    spos,
    ppos,
    margin_w,
    margin_h,
    TypeAttrs,
    callback
  );
};
WebpageXPopup.prototype = new DefaultXPopup();

WebpageXPopup.prototype.getContent = function () {
  this.setPopupWidth();
  var height = parseInt(ll.$(window).height() / 1.5, 10);
  var width = parseInt(ll.$(window).width() / 1.5, 10);
  var url = "http://www.example.com";
  if (this.Attrs) {
    height = this.Attrs.height == "auto" ? height : this.Attrs.height;
    width = this.Attrs.width == "auto" ? width : this.Attrs.width;
    url = this.Attrs.url ? this.Attrs.url : url;
    if (this.Attrs.background) {
      if (
        this.Attrs.background == "true" ||
        this.Attrs.background == 1 ||
        Utils.isObject(this.Attrs.background)
      ) {
        if (Utils.isObject(this.Attrs.background)) {
          this.makeBackground(
            this.Attrs.background.r,
            this.Attrs.background.g,
            this.Attrs.background.b,
            this.Attrs.background.opacity
          );
        } else {
          this.makeBackground();
        }
      }
    }
  }
  return ll
    .$("<iframe>")
    .attr({ src: url, frameborder: 0, height: height, width: width })
    .get(0);
};

// Ajax xpopup
AjaxXPopup = function (
  src,
  event,
  spos,
  ppos,
  margin_w,
  margin_h,
  TypeAttrs,
  callback
) {
  /* TypeAttrs: url, href, jsFunc, height, width, background
   * url: Source of the image to display.
   * height: Popup height.
   * width: Popup width.
   * background: The popup stay on a dark background
   * fixedPosition: The popup is position fixed and has no response on scroll events.
   */
  this.constructor(
    src,
    event,
    spos,
    ppos,
    margin_w,
    margin_h,
    TypeAttrs,
    callback
  );
  this.def = null;
};
AjaxXPopup.prototype = new DefaultXPopup();

AjaxXPopup.prototype.getContent = function () {
  this.setPopupWidth();
  var height = parseInt(ll.$(window).height() / 3, 10),
    width = parseInt(ll.$(window).width() / 2, 10),
    url = "/",
    container;
  if (this.Attrs) {
    height = this.Attrs.height == "auto" ? height : this.Attrs.height + "px";
    width = this.Attrs.width == "auto" ? width : this.Attrs.width + "px";
    url = this.Attrs.url ? this.Attrs.url : url;
    if (this.Attrs.background) {
      if (
        this.Attrs.background == "true" ||
        this.Attrs.background == 1 ||
        Utils.isObject(this.Attrs.background)
      ) {
        if (Utils.isObject(this.Attrs.background)) {
          this.makeBackground(
            this.Attrs.background.r,
            this.Attrs.background.g,
            this.Attrs.background.b,
            this.Attrs.background.opacity
          );
        } else {
          this.makeBackground();
        }
      }
    }
  }
  if (Utils.isObject(url) && url.type === "xpopupJsonContainer") {
    var text = url.data[url.useProperty];
    container = ll
      .$("<div>")
      .css({ height: height, width: width, overflow: "auto" })
      .html(text);
  } else {
    container = ll
      .$("<div>")
      .css({ height: height, width: width, overflow: "auto" })
      .load(url);
  }
  return container.get(0);
};

AjaxXPopup.prototype.loadContent = function (container, def) {
  var pupData = ll
    .$(LL_XPopup.popup)
    .find("#xpopupContent")
    .data("xpopupContent");
  if (Utils.isObject(pupData) && Utils.isFunction(pupData.callback)) {
    pupData.callback.call(pupData, "load");
  }
  container.innerHTML = def.responseText;
};

AjaxXPopup.prototype.loadContentError = function (def) {
  var pupData = ll
    .$(LL_XPopup.popup)
    .find("#xpopupContent")
    .data("xpopupContent");
  if (Utils.isObject(pupData) && Utils.isFunction(pupData.callback)) {
    pupData.callback.call(pupData, "loadError");
  }
  /* LOGGING >> */
  if (window.console) {
    console.log("Fehler beim Abruf von AJAX content:", def.message);
  }
  /* << LOGGING */
};

// simple HTML source xpopup
HtmlSrcXPopup = function (
  src,
  event,
  spos,
  ppos,
  margin_w,
  margin_h,
  TypeAttrs,
  callback
) {
  /* TypeAttrs: url, href, jsFunc, height, width, background
   * url: Source of the image to display.
   * height: Popup height.
   * width: Popup width.
   * background: The popup stay on a dark background
   * fixedPosition: The popup is position fixed and has no response on scroll events.
   */
  this.constructor(
    src,
    event,
    spos,
    ppos,
    margin_w,
    margin_h,
    TypeAttrs,
    callback
  );
  this.def = null;
};
HtmlSrcXPopup.prototype = new DefaultXPopup();

HtmlSrcXPopup.prototype.getContent = function () {
  this.setPopupWidth();
  var height = parseInt(ll.$(window).height() / 3, 10);
  var width = parseInt(ll.$(window).width() / 2, 10);
  var cont = "<div></div>";
  if (this.Attrs) {
    height = this.Attrs.height == "auto" ? height : this.Attrs.height + "px";
    width = this.Attrs.width == "auto" ? width : this.Attrs.width + "px";
    cont = this.Attrs.cont ? this.Attrs.cont : cont;
    if (this.Attrs.background) {
      if (
        this.Attrs.background == "true" ||
        this.Attrs.background == 1 ||
        Utils.isObject(this.Attrs.background)
      ) {
        if (Utils.isObject(this.Attrs.background)) {
          this.makeBackground(
            this.Attrs.background.r,
            this.Attrs.background.g,
            this.Attrs.background.b,
            this.Attrs.background.opacity
          );
        } else {
          this.makeBackground();
        }
      }
    }
  }
  var container = ll
    .$("<div>")
    .css({ height: height, width: width, overflow: "auto" })
    .append(cont);
  return container.get(0);
};
/* << */

/* >> tabbed elements (requires jQuery 1.2.6) Version: rel-2-0-0 */
TabbedElements = {
  tabGroups: [],
  tabsCont: null,
  tabsOuter: null,
  register: function (tabEl, activeId) {
    this.tabsCont = ll.$("#" + tabEl).get(0);
    var tOut = (this.tabsOuter = this.tabsCont.parentNode);
    tOutChilds = this._getTabContainerChildNodes("div", tOut);
    var titlesOuter = this._getTabContainerElementsTitleShells(tOutChilds);
    var grp = { id: tabEl, tabs: [], elements: [], hereId: -1 };
    for (var i = 1; i < tOutChilds.length - 1; ++i) {
      grp.tabs.push(
        this._getTab(
          this._getTabTitleAndDeleteShell(titlesOuter[i - 1]),
          this.tabGroups.length,
          i - 1
        )
      );
      grp.elements.push(tOutChilds[i]);
    }
    this.tabGroups.push(grp);
    var actGrpId = this.tabGroups.length - 1;
    this._fillTabsElement(actGrpId);
    this._prepareParagraphShells(actGrpId);
    this.show(actGrpId, activeId);
  },
  _getTabGroupId: function (id) {
    if (!isNaN(id)) {
      return id;
    } else {
      for (var i = 0; i < this.tabGroups.length; ++i) {
        var strId = this.tabGroups[i].id
          .substring(
            this.tabGroups[i].id.indexOf("_") + 1,
            this.tabGroups[i].id.length
          )
          .toLowerCase();
        if (strId == id.toLowerCase()) {
          return i;
        }
      }
    }
    return false;
  },
  _getTabTitleAndDeleteShell: function (titleEl) {
    t = titleEl.getElementsByTagName("h3")[0];
    ll.$(titleEl).remove();
    return t.innerHTML;
  },
  _getTabContainerChildNodes: function (elmName, parent) {
    var nList = [];
    for (var i = 0; i < parent.childNodes.length; ++i) {
      var n = parent.childNodes[i];
      if (n.nodeType == 1 && n.nodeName.toLowerCase == elmName.toLowerCase) {
        nList.push(n);
      }
    }
    return nList;
  },
  _getFirstMatchChildNode: function (node, tag, nodeType) {
    if (!nodeType) {
      nodeType = 1;
    }
    for (var i = 0; i < node.childNodes.length; ++i) {
      if (node.childNodes[i].nodeType == nodeType) {
        if (tag && node.childNodes[i].nodeName.toLowerCase == tag.toLowerCase) {
          return node.childNodes[i];
        }
        if (!tag) {
          return node.childNodes[i];
        }
      }
    }
    return false;
  },
  _getTabContainerElementsTitleShells: function (contentElms) {
    var tList = [];
    var prevNode;
    for (var i = 1; i < contentElms.length - 1; ++i) {
      var node = contentElms[i];
      while (this._getFirstMatchChildNode(node, "div", 1)) {
        prevNode = node;
        node = this._getFirstMatchChildNode(node, "div", 1);
      }
      tList.push(prevNode);
    }
    return tList;
  },
  _getTab: function (title, grpId, tabId) {
    var id = "tab_" + grpId + "_" + tabId;
    var tab = ll
      .$(
        '<div id="' +
          id +
          '" class="tab_passive">' +
          '<div class="inner1">' +
          '<div class="inner2">' +
          "<span>" +
          title +
          "</span>" +
          "</div>" +
          "</div>" +
          "</div>"
      )
      .get(0);
    var self = this;
    ll.$(tab.childNodes[0].childNodes[0].childNodes[0]).bind("click", function (
      e
    ) {
      self.show(grpId, tabId, e);
    });
    return tab;
  },
  _fillTabsElement: function (grpId) {
    var tabs = this.tabGroups[grpId].tabs;
    var outer = ll.$('<div class="outer1"></div>');
    for (var i = 0; i < tabs.length; ++i) {
      outer.append(ll.$(tabs[i]));
    }

    outer.append(
      ll
        .$("<div></div>")
        .css({ clear: "both", "min-height": "1px", "margin-bottom": "-1px" })
    );
    ll.$(this.tabsCont).css({ display: "block" });
    ll.$(this.tabsCont).append(outer);
  },
  _prepareParagraphShells: function (grpId) {
    var paras = this.tabGroups[grpId].elements;
    for (var i = 0; i < paras.length; ++i) {
      var id = "tabContent_" + grpId + "_" + i;
      ll.$(paras[i]).css({ display: "none" });
    }
  },
  show: function (grpId, tabId, e) {
    grpId = this._getTabGroupId(grpId);
    tabId = isNaN(parseInt(tabId, 10)) ? 0 : tabId;
    if (tabId > this.tabGroups[grpId].tabs.length - 1 || tabId < 0) {
      tabId = 0;
    }
    var tabs = this.tabGroups[grpId].tabs;
    var elements = this.tabGroups[grpId].elements;
    var hereId = this.tabGroups[grpId].hereId;
    if (hereId > -1) {
      ll.$(tabs[hereId]).attr("class", "tab_passive");
      ll.$(elements[hereId]).css({ display: "none" });
    }
    ll.$(tabs[tabId]).attr("class", "tab_active");
    ll.$(elements[tabId]).css({ display: "block" });
    this.tabGroups[grpId].hereId = tabId;
  },
};
/* << */

/* >> Calendar control (requires jQuery 1.2.6+ and scrollTo plugin). Version: rel-2-0-0 */
// The script supports horizontal and vertical scrolling in the future!
function CalendarControl(mode) {
  this.months = [];
  this.scrollToDef = null;
  this.mode = this.getMode(mode); // horizontal or vertical
  this.currScrollPos = 0;
  this.scrollPane = ll.$("#calendarHorizontalScrollPane");
  this.mBoxName = "calendarMonthContainer_"; // month container id snippet
  this.ctrlBoxName = "#horizontalScrollControls"; // holds the calendar controlls (left and right arrow)
  // @controls:
  // 'key': [element, event, binding, attributes, connection id]
  this.controlsHorz = {
    l: [ll.$("#scrollLeft"), "click", "scroll", -1],
    r: [ll.$("#scrollRight"), "click", "scroll", 1],
  };
  this.scrollStep = 2; // how many months to scroll with one click
}

CalendarControl.prototype.init = function (args) {
  this.handleLayout();
  this.detectMonths();
  if (args.current > 0) {
    if (args.current % this.scrollStep > 0) {
      this.currScrollPos =
        Math.floor(args.current / this.scrollStep) * this.scrollStep;
    } else {
      this.currScrollPos = args.current - this.scrollStep;
    }
    var mode = this.mode > 1 ? "y" : "x";
    this.scrollPane.scrollTo(
      this.months[this.currScrollPos].monthElement,
      600,
      { axis: mode, offset: { left: -35, top: 0 } }
    );
  }
  this.handleControls();
};

CalendarControl.prototype.handleControls = function () {
  var c = this.controlsHorz,
    self = this,
    status = {
      l: this.currScrollPos > 0 ? 1 : null,
      r: this.currScrollPos + this.scrollStep < this.months.length ? 1 : null,
    },
    x = function (self, ctrl) {
      ctrl[0].bind(ctrl[1], function (e) {
        e.preventDefault();
        self[ctrl[2]](ctrl[3]);
      });
    };
  for (var i in c) {
    var ctrl = c[i];
    ctrl[0].unbind().removeClass("act").addClass("pass");
    if (status[i]) {
      x(self, ctrl);
      ctrl[0].removeClass("pass").addClass("act");
    }
  }
};

CalendarControl.prototype.handleLayout = function () {
  ll.$(this.ctrlBoxName).show();
  this.scrollPane.css({ overflow: "hidden" });
};

CalendarControl.prototype.detectMonths = function () {
  for (var count = 0; ; ) {
    var month = ll.$("#" + this.mBoxName + count++);
    if (month.size() === 0) {
      break;
    }
    this.months.push(new CalendarMonth(month));
  }
};

CalendarControl.prototype.scroll = function (direction) {
  var nextPos = this.currScrollPos + direction * this.scrollStep;
  if (nextPos >= 0 && nextPos <= this.months.length) {
    var mode = this.mode > 1 ? "y" : "x";
    this.scrollPane.scrollTo(this.months[nextPos].monthElement, 600, {
      axis: mode,
      offset: { left: -35, top: 0 },
    });
    this.currScrollPos = nextPos;
  }
  this.handleControls();
};

CalendarControl.prototype.getMonthDims = function () {
  return {
    w: this.months[0].monthElement.width(),
    h: this.months[0].monthElement.height(),
  };
};

CalendarControl.prototype.getMode = function (mode) {
  mode = String(mode).toLowerCase;
  if (mode == "h") {
    return 1;
  } else if (mode == "v") {
    return 2;
  }
  return 1;
};

function CalendarMonth(monthElement) {
  this.monthElement = monthElement;
  this.name = this.getName();
  this.here = null;
}

CalendarMonth.prototype.getName = function () {
  return null;
};
/* << */

/* >> LivingLogic jsPager (requires jQuery 1.2.6 +): rel-1-1-0 */
JsPager = ll.$.extend(Utils.clone(LLObject), {
  create: function (options) {
    var o = LLObject.create.call(this);
    o.items = [];
    o.groupCnt = -1;
    o.pos = 0;
    o.data = null;
    o.countPerLine = 1;
    o.slideInterval = 0;
    o.hideControls = false;
    o.interval = null;
    o.defaults = {
      target: null,
      duration: 400,
      itemWidth: null,
    };
    if (options) {
      ll.$.extend(o.defaults, options);
    }
    for (var k in o.defaults) {
      o[k] = o.defaults[k];
    }
    o.prepareContentArea();
    return o;
  },
  slide: function (pos) {
    this.pos += pos;
    if (this.pos < 0) {
      this.pos = 0;
    } else if (this.pos > this.groupCnt) {
      if (this.interval) {
        this.pos = 0;
      } else {
        this.pos = this.groupCnt;
      }
    }
    ll.$(this.target)
      .find("div.jsArea")
      .scrollTo(this.props.width * this.pos, this.props.duration, {
        axis: "x",
      });
    if (!this.hideControls) {
      this.handlePager();
    }
  },
  handlePager: function () {
    var buttonL = ll.$(this.target.find("td.button_l div.jsPagerButtons"));
    var buttonR = ll.$(this.target.find("td.button_r div.jsPagerButtons"));

    if (this.pos === 0) {
      buttonL.addClass("jspb_disabled").removeClass("jspb_enabled");
      buttonR.addClass("jspb_enabled").removeClass("jspb_disabled");
    } else if (this.pos == this.groupCnt) {
      buttonL.addClass("jspb_enabled").removeClass("jspb_disabled");
      buttonR.addClass("jspb_disabled").removeClass("jspb_enabled");
    } else {
      buttonL.addClass("jspb_enabled").removeClass("jspb_disabled");
      buttonR.addClass("jspb_enabled").removeClass("jspb_disabled");
    }
  },
  getWidth: function () {
    var w;
    w = this.target.find(".pagerCont").width();
    return w;
  },
  prepareContentArea: function () {
    var t = this.target,
      w,
      h,
      content;
    t.css({ overflow: "auto" });
    if (typeof this.props.width === "undefined") {
      this.props.width = this.getWidth();
    }
    if (typeof this.props.height === "undefined") {
      this.props.height = "auto";
    }
    w = this.props.width;
    h = this.props.height;
    content = t.find("div.jsArea");
    content.css({
      width: w,
      height: h,
      overflow: "hidden",
    });
    if (this.props.height === "auto") {
      this.target.addClass("jsPagerShell_autoHeight");
    }
    // Fill missing properties:
    if (typeof this.props.duration === "undefined") {
      this.props.duration = this.duration;
    }
    if (typeof this.props.itemWidth === "undefined") {
      this.props.itemWidth = this.itemWidth;
    }
  },
  makeContentAreaItems: function () {
    var self = this;
    var t = self.target;
    var prefix = t.attr("id");
    var d = this.target.find("div.jsPagerItem");
    var grpShell = null;
    var slideInterval;

    if (d && typeof d.length == "number") {
      var groups = 1;
      if (d.length / self.countPerLine >= 1) {
        groups = d.length / self.countPerLine;
        if (groups % 1 > 0) {
          groups++;
        }
      }
      var scrollPaneWidth = self.props.width * groups;
      var scrollPane = ll.$(
        '<div class="ms_scrollPane ms_scrollPane_' + prefix + '"></div>'
      );
      scrollPane.css({ width: scrollPaneWidth, height: self.props.height });
      if (groups > 1) {
        if (this.props.slideInterval && this.props.slideInterval > 0) {
          slideInterval = this.props.slideInterval;
        } else {
          slideInterval = 0;
        }
        if (this.hideControls) {
          t.find("table.jsPagerOuterTable td.button").hide();
        } else {
          t.find(".prev")
            .bind("click", function (e) {
              self.slide(-1);
            })
            .css({ cursor: "pointer" })
            .end()
            .find(".next")
            .css({ cursor: "pointer" })
            .bind("click", function (e) {
              self.slide(1);
            });
          t.find("div.jsPagerButtons").hover(
            function () {
              ll.$(this).addClass("jspb_hover");
            },
            function () {
              ll.$(this).removeClass("jspb_hover");
            }
          );
        }
        if (slideInterval > 0) {
          this.interval = setInterval(function () {
            self.slide(1);
          }, slideInterval);
        }
      }
      ll.$(d).each(function (i) {
        if (i % self.countPerLine === 0) {
          self.groupCnt++;
          var hwAttrs = { width: self.props.width, height: self.props.height };
          grpShell = ll.$(
            '<div id="ms_grpShell_' +
              prefix +
              "_" +
              self.groupCnt +
              '" class="ms_grpShell"></div>'
          );
          grpShell.css(hwAttrs);
          var table = ll.$(
            '<table class="jsPagerContentTable" cellpadding="0" cellspacing="0" border="0"><tr></tr></table>'
          );
          table.css(hwAttrs);
          grpShell.append(table);
        }
        var item = JsPagerItem.create(i, this, self);
        self.items.push(item);
        item = item.make();
        grpShell.find("table tr").append(item);
        scrollPane.append(grpShell);
      });
      t.find(".jsArea").append(scrollPane);
    }
    t.find("div.jsPagerItem").empty();
    if (!this.hideControls) {
      this.handlePager();
    }
  },
});

JsPagerItem = ll.$.extend(Utils.clone(LLObject), {
  create: function (id, data, JsPager) {
    var o = LLObject.create.call(this);
    o.slider = JsPager || null;
    o.id = id;
    o.data = data || null;
    o.itemWidth = JsPager.defaults.props.itemWidth || null;
    return o;
  },
  make: function () {
    var sliderId = this.slider.target.attr("id");
    var item = ll.$("<td>" + ll.$(this.data).html() + "</td>");
    item.css({ "vertical-align": "top", "text-align": "center" });
    return item;
  },
});
/* << */

/* >> Media player element (requires jQuery 1.2.6 +) Version: rel-2-1-0 */
//options: mode, target, width, height, filePath, filePath2, filePath3, youTubeUrl,
//previewFilePath, previewWidth, previewHeight, autostart, windowMode, duration, expertData
MediaPlayerSystem = ll.$.extend(Utils.clone(LLObject), {
  create: function (options) {
    var k;
    var o = LLObject.create.call(this);
    o.urlPrefix = "/xist4c/";
    o.players = [];
    o.defaults = {
      target: null,
      popupPrefix: "popup_",
    };
    o.remaked = null;
    if (options) {
      ll.$.extend(o.defaults, options);
    }
    for (k in o.defaults) {
      o[k] = o.defaults[k];
    }
    return o;
  },
  make: function () {
    //static test case or DevPack
    if (
      window.location.href.search("/xist4c/xist4c") !== -1 ||
      window.location.href.search("DevPack_") > 0
    ) {
      this.urlPrefix = "../";
    }
    if (this.windowMode) {
      this.createPrevIcon();
    }
    if (this.mode === "swf") {
      this.modeSWF();
    } else if (this.mode === "wmv") {
      this.modeWMV();
    } else {
      this.modeJWP();
    }
    if (!this.remaked) {
      this.remake();
    }
  },
  remake: function () {
    var self = this,
      targetEl;
    if (
      ll.$("#" + this.target).parents(".tabsOuterShell, .accordionOuterShell")
        .length > 0 &&
      this.mode !== "swf" &&
      this.mode !== "wmv"
    ) {
      self.remaked = true;
      // TODO: insert what to do by using tabs or accordions!
    }
  },
  processSWF: function (target) {
    var expressInstall, flashvars, params, attributes;
    expressInstall = this.urlPrefix + "web/swfobject/expressInstall.swf";
    flashvars = {};
    params = {
      wmode: "transparent",
      play: this.autostart,
    };
    attributes = {
      align: "left",
      styleclass: "mediaPlayerSWF",
    };
    eval(this.expertData);
    swfobject.embedSWF(
      this.filePath,
      target,
      this.width,
      this.height,
      "9.0.0",
      expressInstall,
      flashvars,
      params,
      attributes
    );
  },
  modeSWF: function () {
    if (swfobject) {
      if (this.windowMode) {
        this.modePopup(this.processSWF, this.popupPrefix + this.target);
      } else {
        this.processSWF(this.target);
      }
    }
  },
  processWMV: function (target) {
    var el, playerSrc, attributes;
    el = document.getElementById(target);
    playerSrc = this.urlPrefix + "web/wmvplayer/wmvplayer.xaml";
    attributes = {
      width: this.width,
      height: this.height,
      file: this.filePath,
      image: this.previewFilePath,
      autostart: "" + this.autostart,
    };
    if (this.duration) {
      attributes.duration = this.duration;
    }
    eval(this.expertData);
    this.players.push(new jeroenwijering.Player(el, playerSrc, attributes));
  },
  modeWMV: function () {
    if (this.windowMode) {
      this.modePopup(this.processWMV, this.popupPrefix + this.target);
    } else {
      this.processWMV(this.target);
    }
  },
  processJWP: function (target) {
    var playerSrc, fileList, attributes, expData;
    playerSrc = this.urlPrefix + "web/mediaplayer/player.swf";
    fileList = [{ file: this.filePath }];
    if (Utils.migBrowser.msie) {
      if (
        this.filePath2 &&
        this.filePath2.match(/flv$/) &&
        this.filePath2.match(/flv$/).length
      ) {
        fileList = [{ file: this.filePath2 }];
      } else if (
        this.filePath3 &&
        this.filePath3.match(/flv$/) &&
        this.filePath3.match(/flv$/).length
      ) {
        fileList = [{ file: this.filePath3 }];
      } else {
        if (this.filePath2) {
          fileList.push({ file: this.filePath2 });
        }
        if (this.filePath3) {
          fileList.push({ file: this.filePath3 });
        }
      }
    } else {
      if (this.filePath2) {
        fileList.push({ file: this.filePath2 });
      }
      if (this.filePath3) {
        fileList.push({ file: this.filePath3 });
      }
    }
    attributes = {
      id: "player_" + this.target,
      flashplayer: playerSrc,
      width: this.width,
      height: this.height,
      image: this.previewFilePath,
      provider: this.mode,
      autostart: this.autostart,
      levels: fileList,
      controlbar: "bottom",
    };
    if (this.mode !== "youtube") {
      if (Utils.migBrowser.msie) {
        attributes.mode = [{ type: "flash", src: playerSrc }];
      } else {
        attributes.modes = [
          { type: "html5" },
          { type: "flash", src: playerSrc },
          { type: "download" },
        ];
      }
    }
    if (this.duration) {
      attributes.duration = this.duration;
    }
    expData = eval(this.expertData);
    // Fix for old expert data values e.g. {autostart:'true'}:
    if (typeof expData === "string" && this.expertData.indexOf("{") === 0) {
      eval("expData = " + this.expertData + ";");
      ll.$.extend(attributes, expData);
    }
    jwplayer(target).setup(attributes);
  },
  modeJWP: function () {
    if (this.windowMode) {
      this.modePopup(this.processJWP, this.popupPrefix + this.target);
    } else {
      this.processJWP(this.target);
    }
  },
  createPrevIcon: function () {
    var self = this,
      prevImgShell,
      prevLink,
      prevImg,
      icon,
      prevImgHeight,
      prevImgWidth,
      iconWidth,
      iconHeight;
    ll.$(function () {
      prevImgShell = ll.$("#" + self.target).find(".preview");
      prevImg = prevImgShell.find("img");
      prevLink = prevImgShell.find("a");
      prevLink.prepend('<span class="icon"></span>');
      icon = prevImgShell.find(".icon");
      prevImgHeight = self.getDimensions(prevImg, "height");
      prevImgWidth = self.getDimensions(prevImg, "width");
      iconHeight = self.getDimensions(icon, "height");
      iconWidth = self.getDimensions(icon, "width");
      icon.css({
        top: (prevImgHeight - iconHeight) / 2 + "px",
        left: (prevImgWidth - iconWidth) / 2 + "px",
      });
    });
  },
  getDimensions: function (image, dim) {
    // get width and height even if elements are hidden
    if (dim === "width") {
      if (image.width() > 0) {
        return image.width();
      } else if (image.css("width").length > 0) {
        return parseInt(image.css("width").split("px")[0], 10);
      }
      return image.attr("width");
    } else if (dim === "height") {
      if (image.height() > 0) {
        return image.height();
      } else if (image.css("height").length > 0) {
        return parseInt(image.css("height").split("px")[0], 10);
      }
      return image.attr("height");
    }
    return null;
  },
  modePopup: function (func, target) {
    var self = this,
      prevImg,
      content;
    prevImg = ll.$("#" + this.target).find(".preview a");
    content =
      '<div class="multimediaPopupOuter"><div id="' +
      this.popupPrefix +
      this.target +
      '"></div></div>';
    LL_XPopup.registerPopup(
      prevImg,
      "click",
      "HTMLSRC",
      "p_c",
      "c",
      0,
      0,
      {
        cont: content,
        height: self.height,
        width: self.width,
        background: "false",
        preventOverflowHidden: "true",
      },
      // function context 'this' is the xpopup content object instance.
      // 'action' is a string of the current xpopup action: 'close' | 'show' | 'load' | 'loadError'.
      function (action) {
        if (action === "show") {
          func.call(self, target);
        }
      }
    );
  },
});
/* << */

/* >> Trigger Form Submit (requires jQuery 1.2.6 +) Version: rel-2-0-0 */
SpecSubmitAction = ll.$.extend(Utils.clone(LLObject), {
  create: function () {
    var o = LLObject.create.call(this);
    return o;
  },
  bindFields: function (outerEl, innerEl, event, form) {
    var self = this,
      outerElm,
      formElm;
    if (outerEl && innerEl && event) {
      if (typeof outerEl === "object") {
        outerElm = outerEl;
      } else {
        outerElm = ll.$(outerEl);
      }
      if (outerElm.length) {
        if (!form) {
          form = outerEl;
        }
        if (typeof form === "object") {
          formElm = form;
        } else {
          formElm = ll.$(form);
        }

        outerElm.find(innerEl).bind(event, function (e) {
          if (innerEl == "a") {
            e.preventDefault();
            e.stopPropagation();
          }
          self.sendRequest(formElm);
        });
      }
    }
  },
  sendRequest: function (form) {
    // static test
    if (document.URL.search(/static\//) > 0) {
      alert(
        'Send form "' +
          form.attr("class") +
          '" with values: ' +
          form.serialize()
      );
    } else {
      form.submit();
    }
  },
});

var mopStdModeRadiosAction = function () {
  mopRadios = SpecSubmitAction.create();
  mopRadios.bindFields(
    ll.$("form.mOfPay").eq(0),
    "input.radio",
    "click",
    ll.$("form.mOfPay").eq(0)
  );
};
/* << */

/* >> Slider (requires jQuery 1.4.4+) Version: rel-2-0-0 */
Slider = ll.$.extend(Utils.clone(LLObject), {
  init: function (opts) {
    var o = LLObject.create.call(this);
    o.defaults = {
      target: null,
      props: null,
      container: "sliderCont",
      generateNextPrev: true,
      pagination: true,
      generatePagination: true,
      fadeSpeed: 500,
      effect: "fade",
      crossfade: true,
      randomize: false,
      play: 5000,
      hoverPause: true,
      pause: 2500,
      autoHeight: false,
    };
    if (opts && typeof opts === "object") {
      o.defaults = ll.$.extend(o.defaults, opts);
    }
    return o;
  },
  make: function () {
    var slider, sliderCont, jsSliderItem;
    if (this.defaults.props && typeof this.defaults.props === "object") {
      this.defaults = ll.$.extend(this.defaults, this.defaults.props);
    }
    slider = this.getDefAttr("target", null);
    if (slider && slider.length) {
      sliderCont = slider.find("." + this.getDefAttr("container", null));
      jsSliderItem = slider.find(".jsSliderItem");
      if (sliderCont && sliderCont.length) {
        sliderCont.css("width", sliderCont.css("width"));
      }
      if (jsSliderItem && jsSliderItem.length) {
        jsSliderItem.css("width", jsSliderItem.css("width"));
      }
      slider.slides(this.defaults);
    }
  },
});
/* << */

/* >> Multiple Column Float Handling (requires jQuery 1.4.0+ and Masonry Plugin) Version: rel-2-0-0 */
MultiColFloatHandler = ll.$.extend(Utils.clone(LLObject), {
  init: function (opts) {
    var o = LLObject.create.call(this);
    o.defaults = {
      outerShell: ll.$("div.multipleCol_flexible").not(function (i) {
        return ll.$(this).parents(".no-masonry").length === 1;
      }),
      itemCls: ".col",
      equalColWidth: true,
      gutter: true,
    };
    if (opts && typeof opts === "object") {
      o.defaults = ll.$.extend(o.defaults, opts);
    }
    return o;
  },
  make: function () {
    var outerShell,
      itemCls,
      self = this;
    outerShell = this.getDefAttr("outerShell", null);
    itemCls = this.getDefAttr("itemCls", null);
    if (
      typeof ll.$().masonry === "function" &&
      outerShell &&
      outerShell.length &&
      itemCls &&
      outerShell.find(itemCls).length
    ) {
      outerShell.each(function (i) {
        self.floatItems(ll.$(this), itemCls);
      });
    }
  },
  getColCount: function (outerShell) {
    var clsList, colCount;
    if (outerShell.find(".col").length) {
      clsList = outerShell.find(".col").eq(0).attr("class").split(" ");
      for (var i = clsList.length - 1; i >= 0; i--) {
        if (clsList[i].search(/colCount_/) !== -1) {
          return parseInt(clsList[i].split("_")[1], 10);
        }
      }
    }
    return null;
  },
  getItemWidth: function (outerEl, itemsCls, colCount, gutter) {
    var itemW;
    if (gutter) {
      itemW = Math.floor(
        (outerEl.width() - (colCount - 1) * gutter) / colCount
      );
    } else {
      itemW = Math.floor(outerEl.width() / colCount);
    }
    outerEl.find(itemsCls).css("width", itemW); // fix a firefox problem
    return itemW;
  },
  getGutter: function (outerEl, itemsCls) {
    var items,
      gutterW = null;
    items = outerEl.find(itemsCls);
    gutterW = items.eq(0).css("marginRight");
    items.css("marginRight", 0);
    if (gutterW) {
      gutterW = parseFloat(gutterW);
      if (gutterW > 0) {
        return gutterW;
      }
    }
    return null;
  },
  floatItems: function (outerEl, itemsCls) {
    var colCount,
      colWidth,
      gutter = null;
    if (this.getDefAttr("gutter", null)) {
      gutter = this.getGutter(outerEl, itemsCls);
    }
    if (this.getDefAttr("equalColWidth", null)) {
      colCount = this.getColCount(outerEl);
    }
    if (colCount) {
      colWidth = this.getItemWidth(outerEl, itemsCls, colCount, gutter);
      outerEl.masonry({
        itemSelector: itemsCls,
        // set columnWidth a fraction of the container width:
        columnWidth: colWidth,
        gutter: gutter,
      });
    } else {
      outerEl.masonry({
        itemSelector: itemsCls,
        gutter: gutter,
      });
    }
  },
});
/* << */

/* >> News Article Handler (requires jQuery 1.4.0+) Version: rel-1-0-0 */
NewsArticleHandler = ll.$.extend(Utils.clone(LLObject), {
  init: function (opts) {
    var o = LLObject.create.call(this);
    o.defaults = {
      outerShell: ll.$(".newsParagraph"),
    };
    if (opts && typeof opts === "object") {
      o.defaults = ll.$.extend(o.defaults, opts);
    }
    return o;
  },
  make: function () {
    var outerShell;
    outerShell = this.getDef("outerShell", null);
    if (outerShell && outerShell.length) {
      this.inlineSublink(outerShell);
    }
  },
  inlineSublink: function (outerShell) {
    var outerShellInlineSublink;
    outerShellInlineSublink = outerShell.filter(".newsParagraph_inlineSublink");
    outerShellInlineSublink
      .find(".paraSublinkShell_inline")
      .prev("p, div")
      .addClass("js-nextToLast");
  },
});
/* << */

// >> Some starters Version: rel-1-0-0
ll.$(function () {
  if (
    ll.$("body.template_light").length &&
    !(Utils.migBrowser.msie && parseInt(Utils.migBrowser.version, 10) < 8)
  ) {
    multiColFloats = MultiColFloatHandler.init();
    multiColFloats.make();
  }
  if (ll.$(".newsParagraph").length) {
    newsArticleStuff = NewsArticleHandler.init();
    newsArticleStuff.make();
  }
});
// <<
/*
page: http://www.deraktionaer.de/
url: http://www.deraktionaer.de/xist4c/web/standard.js
*/
