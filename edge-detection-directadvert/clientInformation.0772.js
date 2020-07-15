/*
    Library of DirectADVERT
*/
if (typeof __da_lib == "undefined") __da_lib = {};

if (!__da_lib.loaded) {
  __da_lib.loaded = true;

  /*
    Browser Detect set v1.0
    Detects the browser and its version (IE6+, Opera, Firefox, Chrome, Safari )
    
    http://xiper.net/
    
    Author Andrei Kosyack
    
    DA fix: MS Edge support
*/
  __da_lib.browserDetectNav = function (chrAfterPoint) {
    var UA = window.navigator.userAgent,
      OperaB = /Opera[ \/]+\w+\.\w+/i,
      OperaV = /Version[ \/]+\w+\.\w+/i,
      EdgeB = /Edge\/\w+\.\w+/i,
      FirefoxB = /Firefox\/\w+\.\w+/i,
      ChromeB = /Chrome\/\w+\.\w+/i,
      SafariB = /Version\/\w+\.\w+/i,
      IEB = /MSIE *\d+\.\w+/i,
      IE11B = /Trident.*rv[ :]*\w+/i,
      SafariV = /Safari\/\w+\.\w+/i,
      browser = new Array(),
      browserSplit = /[ \/\.]/i,
      OperaV = UA.match(OperaV),
      Firefox = UA.match(FirefoxB),
      Chrome = UA.match(ChromeB),
      Safari = UA.match(SafariB),
      SafariV = UA.match(SafariV),
      IE = UA.match(IEB),
      IE11 = UA.match(IE11B),
      Opera = UA.match(OperaB),
      Edge = UA.match(EdgeB);

    if ((!Opera == "") & (!OperaV == ""))
      browser[0] = OperaV[0].replace(/Version/, "Opera");
    else if (!Opera == "") browser[0] = Opera[0];
    else if (!IE == "") browser[0] = IE[0];
    else if (!IE11 == "") {
      var arr = IE11[0].split(":");
      var version = arr[arr.length - 1];

      if (version.indexOf(".") < 0) {
        version += ".0";
      }

      browser[0] = "MSIE " + version;
    } else if (!Firefox == "") browser[0] = Firefox[0];
    else if (!Edge == "") browser[0] = Edge[0];
    else if (!Chrome == "") browser[0] = Chrome[0];
    else if (!Safari == "" && !SafariV == "")
      browser[0] = Safari[0].replace("Version", "Safari");

    var outputData;

    if (browser[0] != null) outputData = browser[0].split(browserSplit);

    if (
      ((chrAfterPoint == null) | (chrAfterPoint == 0)) &
      (outputData != null)
    ) {
      chrAfterPoint = outputData[2].length;
      outputData[2] = outputData[2].substring(0, chrAfterPoint);

      return outputData;
    } else if (chrAfterPoint != null) {
      outputData[2] = outputData[2].substr(0, chrAfterPoint);

      return outputData;
    } else return false;
  };

  __da_lib.browserDetectJS = function () {
    var browser = new Array();

    if (window.opera) {
      browser[0] = "Opera";
      browser[1] = window.opera.version();
    } else if (window.chrome && window.chrome.webstore) {
      browser[0] = "Chrome";
    } else if (window.sidebar) {
      browser[0] = "Firefox";
    } else if (!window.external && browser[0] !== "Opera") {
      browser[0] = "Safari";
    } else if (window.ActiveXObject) {
      browser[0] = "MSIE";

      if (window.navigator.userProfile) browser[1] = "6";
      else if (window.Storage) browser[1] = "8";
      else if (!window.Storage && !window.navigator.userProfile)
        browser[1] = "7";
      else browser[1] = "Unknown";
    } else if (window.clientInformation.userAgent.indexOf("Edge") != -1) {
      browser[0] = "Edge";
    }
    if (!browser) return false;
    else return browser;
  };

  __da_lib.getBrowser = function (chrAfterPoint) {
    if (__da_lib.browser == undefined) {
      var browserNav = __da_lib.browserDetectNav(chrAfterPoint),
        browserJS = __da_lib.browserDetectJS();

      if (browserNav[0] == browserJS[0] || browserNav[0] == "MSIE")
        __da_lib.browser = browserNav;
      else if (browserNav[0] != browserJS[0]) __da_lib.browser = browserJS;
      else __da_lib.browser = false;

      if (__da_lib.browser.length == 1) {
        __da_lib.browser.push("0");
      }
    }

    return __da_lib.browser;
  };

  __da_lib.isItBrowser = function (browserCom, browserVer, detectMethod) {
    var browser;

    switch (detectMethod) {
      case 1:
        browser = __da_lib.browserDetectNav();
        break;
      case 2:
        browser = __da_lib.browserDetectJS();
        break;
      default:
        browser = __da_lib.getBrowser();
    }

    if ((browserCom == browser[0]) & (browserVer == browser[1])) return true;
    else if (
      (browserCom == browser[0]) &
      (browserVer == null || browserVer == 0)
    )
      return true;
    else return false;
  };

  // get coockie
  __da_lib.getCookie = function (name) {
    if (!document.cookie) {
      return null;
    }

    var matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );

    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

  //set cookie
  __da_lib.setCookie = function (name, value, props) {
    props = props || {};
    var exp = props.expires;

    if (typeof exp == "number" && exp) {
      var d = new Date();
      d.setTime(d.getTime() + exp * 1000);
      exp = props.expires = d;
    }

    if (exp && exp.toUTCString) {
      props.expires = exp.toUTCString();
    }

    value = encodeURIComponent(value);
    var updatedCookie = name + "=" + value;

    for (var propName in props) {
      updatedCookie += "; " + propName;
      var propValue = props[propName];

      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }

    document.cookie = updatedCookie;
  };

  //get doctype
  __da_lib.getDoctype = function () {
    if (__da_lib.docType == undefined) {
      if (document.doctype) {
        __da_lib.docType =
          document.doctype.name +
          "+" +
          document.doctype.publicId +
          "+" +
          document.doctype.systemId;
      } else if (document.body.parentNode) {
        var dbp = document.body.parentNode;

        __da_lib.docType = dbp.parentNode.firstChild.nodeValue;
      }
    }

    __da_lib.debug("docType", __da_lib.docType);

    return __da_lib.docType;
  };

  // detect mobile
  __da_lib.getMobile = function () {
    if (__da_lib.mobile == undefined) {
      __da_lib.mobile = null;

      if (navigator.userAgent.match(/iPhone/i)) {
        __da_lib.mobile = "iphone";
      } else if (navigator.userAgent.match(/iPod/i)) {
        __da_lib.mobile = "ipod";
      } else if (navigator.userAgent.match(/iPad/i)) {
        __da_lib.mobile = "ipad";
      } else if (
        navigator.userAgent.match(
          /(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Windows Phone|Opera M)/
        )
      ) {
        __da_lib.mobile = true;
      }
    }

    return __da_lib.mobile;
  };

  // detect css3
  __da_lib.isCss3 = function () {
    if (__da_lib.css3 == undefined) {
      __da_lib.css3 = false;

      var myBrowser = __da_lib.getBrowser();

      if (myBrowser[0] != "MSIE" && myBrowser[0] != "Edge") {
        var userAgent = window.navigator.userAgent.toLowerCase();
        var browsers = [
          { name: /webkit/, version: 4 },
          { name: /opera/, version: 10.5 },
          { name: /mozilla/, version: 3.6 },
        ];

        for (var x = 0; x < browsers.length; x++) {
          var br = browsers[x];

          if (br.name.test(userAgent)) {
            var version =
              myBrowser[1].indexOf(".") > -1
                ? myBrowser[1].split(".")
                : myBrowser[1].split(",");
            var versionParsed = version[0];

            if (version.length > 1) {
              versionParsed += ".";

              for (var i = 1; i < version.length; i++) {
                versionParsed += version[i];
              }
            }

            if (parseFloat(versionParsed) >= br.version) {
              __da_lib.css3 = true;
            }
          }
        }
      } else if (myBrowser[0] == "Edge" || __da_lib.isIe() >= 9) {
        __da_lib.css3 = true;
      }
    }

    __da_lib.debug("css3", __da_lib.css3);

    return __da_lib.css3;
  };

  //check ie
  __da_lib.isIe = function () {
    if (__da_lib.ie == undefined) {
      __da_lib.ie =
        __da_lib.getBrowser()[0] == "MSIE" ? __da_lib.getBrowser()[1] : 0;
    }

    return __da_lib.ie;
  };

  //compute element width
  __da_lib.getStyle = function (element, style) {
    var strValue = "";

    if (typeof style != "string") {
      return strValue;
    }

    if (document.defaultView && document.defaultView.getComputedStyle) {
      strValue = document.defaultView
        .getComputedStyle(element, "")
        .getPropertyValue(style);
    } else if (element.currentStyle) {
      style = style.replace(/\-(\w)/g, function (strMatch, p1) {
        return p1.toUpperCase();
      });
      strValue = element.currentStyle[style];
    }

    if (
      (!strValue || !parseInt(strValue)) &&
      (style == "width" || style == "height")
    ) {
      var htmlStyle = element.getAttribute("style");

      if (htmlStyle && htmlStyle.indexOf(style) > -1) {
        htmlStyle = htmlStyle
          .substring(htmlStyle.indexOf(style) + style.length + 1)
          .replace(/^\s+|\s+$/g, "");
        strValue = htmlStyle.substring(
          0,
          htmlStyle.indexOf(";") > -1
            ? htmlStyle.indexOf(";")
            : htmlStyle.length
        );
      }
    }

    return strValue;
  };

  //http://kangax.github.io/cft/#IS_POSITION_FIXED_SUPPORTED
  __da_lib.isPositionFixed = function () {
    if (__da_lib.positionFixed == undefined) {
      __da_lib.positionFixed = null;

      if (document.createElement) {
        var el = document.createElement("div");

        if (el && el.style) {
          el.style.position = "fixed";
          el.style.top = "10px";

          var root = document.body;

          if (root && root.appendChild && root.removeChild) {
            root.appendChild(el);
            __da_lib.positionFixed = el.offsetTop === 10;
            root.removeChild(el);
          }
        }
      }
    }

    return __da_lib.positionFixed;
  };

  // ÐÐ¸Ð½Ð°Ð¼Ð¸ÑÐµÑÐºÐ°Ñ Ð¿ÑÐ¸ÑÑÑÐºÐ¾Ð²ÐºÐ° ÑÐ¾Ð±ÑÑÐ¸Ð¹
  __da_lib.on = function (el, evt, fn, bubble) {
    if ("addEventListener" in el) {
      // BBOS6 doesn't support handleEvent, catch and polyfill
      try {
        el.addEventListener(evt, fn, bubble);
      } catch (e) {
        if (typeof fn == "object" && fn.handleEvent) {
          el.addEventListener(
            evt,
            function (e) {
              // Bind fn as this and set first arg as event object
              fn.handleEvent.call(fn, e);
            },
            bubble
          );
        } else {
          throw e;
        }
      }
    } else if ("attachEvent" in el) {
      // check if the callback is an object and contains handleEvent
      if (typeof fn == "object" && fn.handleEvent) {
        el.attachEvent("on" + evt, function () {
          // Bind fn as this
          fn.handleEvent.call(fn);
        });
      } else {
        el.attachEvent("on" + evt, fn);
      }
    }
  };

  // ÐÑÑÐ¸ÑÐ»ÐµÐ½Ð¸Ðµ Ð¿Ð¾Ð·Ð¸ÑÐ¸Ð¸ ÑÐ»ÐµÐ¼ÐµÐ½ÑÐ° Ð´Ð»Ñ ÑÑÐ°ÑÑÑ Ð±ÑÐ°ÑÐ·ÐµÑÐ¾Ð²
  __da_lib.getOffsetSum = function (elem) {
    var top = 0,
      left = 0;

    while (elem) {
      top = top + parseFloat(elem.offsetTop);
      left = left + parseFloat(elem.offsetLeft);
      elem = elem.offsetParent;
    }

    return { top: Math.round(top), left: Math.round(left) };
  };

  // ÐÑÑÐ¸ÑÐ»ÐµÐ½Ð¸Ðµ Ð¿Ð¾Ð·Ð¸ÑÐ¸Ð¸ ÑÐ»ÐµÐ¼ÐµÐ½ÑÐ° Ð´Ð»Ñ Ð½Ð¾Ð²ÑÑ Ð±ÑÐ°ÑÐ·ÐµÑÐ¾Ð²
  __da_lib.getOffsetRect = function (elem) {
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docElem = document.documentElement;

    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    var scrollLeft =
      window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

    // ÐÐ¾ÐºÑÐ¼ÐµÐ½Ñ(html Ð¸Ð»Ð¸ body) Ð±ÑÐ²Ð°ÐµÑ ÑÐ´Ð²Ð¸Ð½ÑÑ Ð¾ÑÐ½Ð¾ÑÐ¸ÑÐµÐ»ÑÐ½Ð¾ Ð¾ÐºÐ½Ð° (IE). ÐÐ¾Ð»ÑÑÐ°ÐµÐ¼ ÑÑÐ¾Ñ ÑÐ´Ð²Ð¸Ð³.
    var clientTop = docElem.clientTop || body.clientTop || 0;
    var clientLeft = docElem.clientLeft || body.clientLeft || 0;

    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
  };

  // ÐÑÑÐ¸ÑÐ»ÐµÐ½Ð¸Ðµ Ð¿Ð¾Ð·Ð¸ÑÐ¸Ð¸ ÑÐ»ÐµÐ¼ÐµÐ½ÑÐ°
  __da_lib.getOffset = function (elem) {
    if (elem.getBoundingClientRect) {
      // "Ð¿ÑÐ°Ð²Ð¸Ð»ÑÐ½ÑÐ¹" Ð²Ð°ÑÐ¸Ð°Ð½Ñ
      return __da_lib.getOffsetRect(elem);
    } else {
      // Ð¿ÑÑÑÑ ÑÐ°Ð±Ð¾ÑÐ°ÐµÑ ÑÐ¾ÑÑ ÐºÐ°Ðº-ÑÐ¾
      return __da_lib.getOffsetSum(elem);
    }
  };

  // Ð­Ð»ÐµÐ¼ÐµÐ½Ñ Ð² Ð²Ð¸Ð´Ð¸Ð¼Ð¾Ð¹ Ð¾Ð±Ð»Ð°ÑÑÐ¸ ÑÐºÑÐ°Ð½Ð°
  __da_lib.inWindow = function (el, isFull, ofs) {
    if (typeof el == "string") {
      el = document.getElementById(el);
    }

    if (!el) return false;

    var body = document.body;
    var docElem = document.documentElement;

    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    var scrollLeft =
      window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

    var windowWidth = 0,
      windowHeight = 0;

    if (body && body.offsetWidth) {
      windowWidth = body.offsetWidth;
      windowHeight = body.offsetHeight;
    }

    if (document.compatMode == "CSS1Compat" && docElem && docElem.offsetWidth) {
      windowWidth = docElem.offsetWidth;
      windowHeight = docElem.offsetHeight;
    }

    if (window.innerWidth && window.innerHeight) {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
    }

    var docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    var docWidth = Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );

    var offset = __da_lib.getOffset(el);
    offset.width = el.offsetWidth;
    offset.height = el.offsetHeight;

    for (var x in ofs) {
      offset[x] = ofs[x];
    }

    if (
      ((scrollTop <= offset.top &&
        offset.top + (isFull ? offset.height - 1 : 0) <=
          scrollTop + windowHeight) ||
        (!isFull &&
          scrollTop > offset.top &&
          offset.top + offset.height - 1 >= scrollTop) ||
        (scrollTop <= offset.top &&
          scrollTop + windowHeight >= offset.top &&
          scrollTop + windowHeight >= docHeight)) && // ÐÑÐ¾Ð²ÐµÑÐ¸Ð¼ ÑÐ²Ð°ÑÐ°ÐµÑ Ð»Ð¸ Ð²ÑÑÐ¾ÑÑ ÑÐ°Ð¹ÑÐ°
      ((scrollLeft <= offset.left &&
        offset.left + (isFull ? offset.width - 1 : 0) <=
          scrollLeft + windowWidth) ||
        (!isFull &&
          scrollLeft > offset.left &&
          offset.left + offset.width - 1 >=
            scrollLeft + (isFull ? windowWidth : 0)) ||
        (scrollLeft <= offset.left &&
          scrollLeft + windowWidth >= offset.left &&
          scrollLeft + windowWidth >= docWidth)) // ÐÑÐ¾Ð²ÐµÑÐ¸Ð¼ ÑÐ²Ð°ÑÐ°ÐµÑ Ð»Ð¸ ÑÐ¸ÑÐ¸Ð½Ñ ÑÐ°Ð¹ÑÐ°
    ) {
      return true;
    }

    return false;
  };

  if (!__da_lib.loadScript) {
    // Dynamic load script ({id, src, charset, onload})
    __da_lib.loadScript = function (params) {
      var newScript = document.createElement("script");
      newScript.type = "text/javascript";

      for (var x in params) {
        if (typeof params[x] != "function")
          newScript.setAttribute(x, params[x]);
      }

      if (params.onload) {
        if (newScript.addEventListener)
          newScript.addEventListener("load", params.onload, false);
        else if (newScript.readyState)
          newScript.onreadystatechange = function () {
            if (this.readyState == "complete") params.onload();
          };
      }

      document.body.appendChild(newScript);
    };
  }

  // detect debug mode
  __da_lib.isDebugMode = function (debugMode) {
    if (!debugMode)
      return (
        window.location.hash &&
        window.location.hash.substring(1) == "__da_debug"
      );

    return debugMode;
  };

  // output debug info
  __da_lib.debug = function (param, value, debugMode) {
    if (!__da_lib.isDebugMode(debugMode))
      //nothing if no debug
      return;

    //__da_lib.dbglog(param + ' = ' + value, true);

    if (!document.getElementById("directAdvertDebug")) {
      var obj = document.createElement("div");
      obj.id = "directAdvertDebug";
      obj.setAttribute(
        "style",
        "position: fixed; position: absolute !ie; z-index: 100000; left: 0; top: 0; border: 0.1em solid #f00; background: #fff; color: #000; padding: 1em; line-height: normal; font-size: 16px;" +
          (__da_lib.getMobile() != "iphone"
            ? " -webkit-text-size-adjust: none;"
            : "")
      );
      obj.innerHTML =
        '<a href="javascript:void(0)" style="position: absolute; top: 1em; right: 1em; color: #00f; text-decoration: none;" title="close" onclick="this.parentNode.style.display = \'none\';"><b>x</b></a><h3 style="margin: 0; padding: 0; font-size: inherit; font-weight: bold;">Debug info:</h3></div>';
      document.body.appendChild(obj);
    }

    if (!document.getElementById(param + "DirectAdvertDebug")) {
      var obj = document.createElement("div");
      obj.id = param + "DirectAdvertDebug";
      document.getElementById("directAdvertDebug").appendChild(obj);
    }

    document.getElementById(param + "DirectAdvertDebug").innerHTML =
      param + " = " + value;
  };

  // output debug info
  __da_lib.dbglog = function (str, debugMode) {
    if (!__da_lib.isDebugMode(debugMode))
      //nothing if no debug
      return;

    if (!__da_lib.isIe() && console) console.log(str);
  };
}
/*
page: http://www.odnopolchane.net/
url: http://st.directadvert.ru/js/lib.js
*/
