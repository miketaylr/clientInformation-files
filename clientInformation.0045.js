/*
 * å¤æ­æµè§å¨åç§°
 * */
(function () {
  "use strict";

  var win = window;
  var nav = win.navigator;
  var doc = win.document;
  var ieAX = win.ActiveXObject;
  var ieMode = doc.documentMode;
  var REG_APPLE = /^Apple/;
  var ieVer = _getIeVersion() || ieMode || 0;
  var isIe = ieAX || ieMode;
  var chromiumType = _getChromiumType();
  var browserName;
  var userAgent = window.navigator.userAgent.toLowerCase();
  var browser = {
    msie: false,
    firefox: false,
    opera: false,
    safari: false,
    chrome: false,
    netscape: false,
    appname: "unknown",
    version: 0,
  };

  /**
   * æ£æµ external æ¯å¦åå«è¯¥å­æ®µ
   * @param reg æ­£å
   * @param type æ£æµç±»åï¼0ä¸ºé®ï¼1ä¸ºå¼
   * @returns {boolean}
   * @private
   */
  function _testExternal(reg, type) {
    var external = win.external || {};
    for (var i in external) {
      if (reg.test(type ? external[i] : i)) {
        console.log(external[i]);
        return true;
      }
    }

    return false;
  }

  /**
   * è·å Chromium åæ ¸æµè§å¨ç±»å
   * @link http://www.adtchrome.com/js/help.js
   * @link https://ext.chrome.360.cn/webstore
   * @link https://ext.se.360.cn
   * @return {String}
   *         360ee 360æéæµè§å¨
   *         360se 360å®å¨æµè§å¨
   *         sougou æçæµè§å¨
   *         liebao çè±¹æµè§å¨
   *         chrome è°·æ­æµè§å¨
   *         ''    æ æ³å¤æ­
   * @version 1.0
   * 2014å¹´3æ12æ¥20:39:55
   */

  function _getChromiumType() {
    if (
      isIe ||
      typeof win.scrollMaxX !== "undefined" ||
      REG_APPLE.test(nav.vendor || "")
    ) {
      return "";
    }

    var _track = "track" in document.createElement("track");
    var webstoreKeysLength =
      win.chrome && win.chrome.webstore
        ? Object.keys(win.chrome.webstore).length
        : 0;

    // æçæµè§å¨
    if (_testExternal(/^sogou/i, 0)) {
      return "sogou";
    }

    // çè±¹æµè§å¨
    if (_testExternal(/^liebao/i, 0)) {
      return "liebao";
    }

    // chrome
    if (
      win.clientInformation &&
      win.clientInformation.languages &&
      win.clientInformation.languages.length > 2
    ) {
      return "chrome";
    }

    if (_track) {
      // 360æéæµè§å¨
      // 360å®å¨æµè§å¨
      return webstoreKeysLength > 1 ? "360ee" : "360se";
    }

    return "";
  }

  function appInfo() {
    var browser = {
        msie: false,
        firefox: false,
        opera: false,
        safari: false,
        chrome: false,
        netscape: false,
        appname: "unknown",
        version: 0,
      },
      userAgent = window.navigator.userAgent.toLowerCase();
    if (/(msie|firefox|opera|chrome|netscape)\D+(\d[\d.]*)/.test(userAgent)) {
      browser[RegExp.$1] = true;
      browser.appname = RegExp.$1;
      browser.version = RegExp.$2;
    } else if (/version\D+(\d[\d.]*).*safari/.test(userAgent)) {
      // safari
      browser.safari = true;
      browser.appname = "safari";
      browser.version = RegExp.$2;
    }
    return browser;
  }

  // è·å¾ieæµè§å¨çæ¬

  function _getIeVersion() {
    var v = 3,
      p = document.createElement("p"),
      all = p.getElementsByTagName("i");

    while (
      ((p.innerHTML = "/*[if gt IE " + ++v + "]><i></i><![endif]*/"), all[0])
    );

    return v > 4 ? v : 0;
  }

  var myos = appInfo();
  if (!!ieVer) {
    browserName = "IE" + ieVer + "æµè§å¨";
  } else if (chromiumType === "chrome" || chromiumType === "360ee") {
    browserName = "è°·æ­æè360æéæµè§å¨";
  } else if (chromiumType === "sogou") {
    browserName = "æçæµè§å¨";
  } else if (chromiumType === "liebao") {
    browserName = "çè±¹æµè§å¨";
  } else if (chromiumType === "360se") {
    browserName = "360å®å¨æµè§å¨";
  } else if (myos.appname === "firefox") {
    browserName = "ç«çæµè§å¨";
  } else if (myos.appname === "safari") {
    browserName = "è¹ææµè§å¨";
  } else {
    browserName = "ä½ çæµè§å¨æªç¥";
  }
  $("#browserName").text(browserName);
})();
/*
page: http://www.huizuche.com/
url: http://www.huizuche.com/Scripts/browser.js
*/
