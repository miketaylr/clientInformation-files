var win = window;
var nav = win.navigator;
var doc = win.document;
var ieAX = win.ActiveXObject;
var ieMode = doc.documentMode;
var REG_APPLE = /^Apple/;
var ieVer = _getIeVersion() || ieMode || 0;
var isIe = ieAX || ieMode;
var chromiumType = _getChromiumType();

/**
 * ÅÐ¶ÏÊÇ·ñÎª IE ä¯ÀÀÆ÷
 *
 * @example
 * shell.isIE;
 * // true or false
 */
var isIE = function () {
  return !!ieVer;
};
/**
 * IE °æ±¾
 *
 * @example
 * shell.ieVersion;
 * // 6/7/8/9/10/11/12...
 */
var ieVersion = function () {
  return ieVer;
};
/**
 * ÊÇ·ñÎª¹È¸è chrome ä¯ÀÀÆ÷
 *
 * @example
 * shell.isChrome;
 * // true or false
 */
var isChrome = function () {
  return chromiumType === "chrome";
};
/**
 * ÊÇ·ñÎª360°²È«ä¯ÀÀÆ÷
 *
 * @example
 * shell.is360se;
 * // true or false
 */
var is360se = function () {
  return chromiumType === "360se";
};
/**
 * ÊÇ·ñÎª360¼«ËÙä¯ÀÀÆ÷
 *
 * @example
 * shell.is360ee;
 * // true or false
 */
var is360ee = function () {
  return chromiumType === "360ee";
};
/**
 * ÊÇ·ñÎªÁÔ±ª°²È«ä¯ÀÀÆ÷
 *
 * @example
 * shell.isLiebao;
 * // true or false
 */
var isLiebao = function () {
  return chromiumType === "liebao";
};
/**
 * ÊÇ·ñËÑ¹·¸ßËÙä¯ÀÀÆ÷
 *
 * @example
 * shell.isSogou;
 * // true or false
 */
var isSogou = function () {
  return chromiumType === "sogou";
};
/**
 * ÊÇ·ñÎª QQ ä¯ÀÀÆ÷
 *
 * @example
 * shell.isQQ;
 * // true or false
 */
var isQQ = function () {
  return chromiumType === "qq";
};
/**
 * »ñÈ¡ Chromium ÄÚºËä¯ÀÀÆ÷ÀàÐÍ
 * @link http://www.adtchrome.com/js/help.js
 * @link https://ext.chrome.360.cn/webstore
 * @link https://ext.se.360.cn
 * @return {String}
 *         360ee 360¼«ËÙä¯ÀÀÆ÷
 *         360se 360°²È«ä¯ÀÀÆ÷
 *         sougou ËÑ¹·ä¯ÀÀÆ÷
 *         liebao ÁÔ±ªä¯ÀÀÆ÷
 *         chrome ¹È¸èä¯ÀÀÆ÷
 *         ''    ÎÞ·¨ÅÐ¶Ï
 * @version 1.0
 * 2014Äê3ÔÂ12ÈÕ20:39:55
 */

function _getChromiumType() {
  if (
    isIe ||
    typeof win.scrollMaxX !== "undefined" ||
    REG_APPLE.test(nav.vendor || "")
  ) {
    return "";
  }

  if (_testExternal(/^sogou/i, 0)) {
    return "sogou";
  }

  if (_testExternal(/^liebao/i, 0)) {
    return "liebao";
  }

  var _track = "track" in document.createElement("track");
  if (_track) {
    var webstoreKeysLength =
      win.chrome && win.chrome.webstore
        ? Object.keys(win.chrome.webstore).length
        : 0;
    if (webstoreKeysLength > 1) {
      if (win.clientInformation && win.clientInformation.permissions) {
        return "360ee";
      } else {
        return "chrome";
      }
    } else {
      return "360se";
    }
  }

  return "";
}

// »ñµÃieä¯ÀÀÆ÷°æ±¾
function _getIeVersion() {
  var v = 3,
    p = document.createElement("p"),
    all = p.getElementsByTagName("i");

  while (
    ((p.innerHTML = "/*[if gt IE " + ++v + "]><i></i><![endif]*/"), all[0])
  );

  return v > 4 ? v : 0;
}

/**
 * ¼ì²â external ÊÇ·ñ°üº¬¸Ã×Ö¶Î
 * @param reg ÕýÔò
 * @param type ¼ì²âÀàÐÍ£¬0Îª¼ü£¬1ÎªÖµ
 * @returns {boolean}
 * @private
 */
function _testExternal(reg, type) {
  var external = win.external || {};

  for (var i in external) {
    if (reg.test(type ? external[i] : i)) {
      return true;
    }
  }

  return false;
}
/*
page: http://www.i3done.com/
url: http://www.i3done.com/statics/js/browser.js
*/
