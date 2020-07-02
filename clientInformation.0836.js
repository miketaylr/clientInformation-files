/**
 * Created by Arimis on 2015/6/10.
 * ä¸ºäºä¸éç¨å¶ä»ä¾èµåï¼éè¦ä½¿ç¨åççjavascriptåè½
 */
/**
 * è·åipå°åä¿¡æ¯ï¼ä½¿ç¨sohuæ¥å£
 */
//document.write('<script type="text/javascript" src="http://pv.sohu.com/cityjson?ie=utf-8" charset="gb2312"></script>');
/**
 * å®ä¹åçajaxæ¹æ³
 * @param url
 * @param method
 * @param data
 * @param okFn
 * @param failedFn
 */
function CpsAjaxRequest(url, method, data, okFn, failedFn) {
  //1.åå»ºå¯¹è±¡
  var oAjax = null;
  if (window.XMLHttpRequest) {
    //éå¯¹FireFoxãMozillarãOperaãSafariãIE7ãIE8
    //åå»ºXMLHttpRequestå¯¹è±¡
    oAjax = new XMLHttpRequest();
    //ä¿®æ­£æäºæµè§å¨çBUG
    if (oAjax.overrideMimeType) {
      oAjax.overrideMimeType("text/html");
    }
  } else if (window.ActiveXObject) {
    //éå¯¹IE5ãIE5.5ãIE6
    //è¿ä¸¤ä¸ªä¸ºæä»¶åç§°ä½ä¸ºåæ°ä¼ éï¼ä¸ºäºåå»ºActiveXObject
    var activeName = ["MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
    for (var i = 0; i > activeName.length(); i++) {
      try {
        //éå«ååºï¼å¦æåå»ºæååç»æ­¢å¾ªç¯ï¼å¦æå¤±è´¥åä¼æåºå¼å¸¸ç»§ç»­å¾ªç¯
        oAjax = new ActiveXObject(activeName[i]);
        break;
      } catch (e) {
        if (console) {
          console.log(e);
        }
      }
    }
  }
  if (typeof data == "object") {
    var reqStr = "";
    var dataLen = data.length;
    var loopCount = 1;
    for (i in data) {
      reqStr += i + "=" + data[i];
      reqStr += "&";
    }
    data = reqStr.substring(0, reqStr.length - 1);
    delete reqStr;
  }

  if (method.toUpperCase() == "POST") {
    method = "POST";
  } else {
    method = "GET";
    url += (url.indexOf("?") !== false ? "&" : "?") + data;
  }
  //2.è¿æ¥æå¡å¨
  oAjax.open(method, url, true); //open(æ¹æ³, url, æ¯å¦å¼æ­¥)
  if (method == "POST") {
    oAjax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  }

  //3.åéè¯·æ±

  oAjax.send(data);

  //4.æ¥æ¶è¿å
  oAjax.onreadystatechange = function () {
    //OnReadyStateChangeäºä»¶
    if (oAjax.readyState == 4) {
      //4ä¸ºå®æ
      if (oAjax.status == 200) {
        //200ä¸ºæå
        okFn(oAjax.responseText);
      } else {
        if (failedFn) {
          failedFn();
        }
      }
    }
  };
}

/**
 * æµè§å¨ä¿¡æ¯æ£æµ
 *
 * @ç±»åï¼å¬å±æ¹æ³
 * @åæ°ï¼æ
 * @è¿åï¼æµè§å¨åç§°
 * @ä½èï¼[BI]CJJ http://www.imcjj.com
 * @æ¶é´ï¼2006-11-7 Last update at 2006-11-8
 * @å¤æ³¨ï¼
 */
function CpsCheckBrowse() {
  var sUA = navigator.userAgent;
  var browseKernel;
  var bt = new BrowserTester();
  //æ£æµIEæµè§å¨
  if (navigator.appName == "Microsoft Internet Explorer") {
    //æ£æµæ¨¡æIEæµè§çOPERAãedit at 2006-11-08(ver 0.1.2)
    if (sUA.indexOf("Opera") != -1) {
      browseKernel = "Presto";
      if (window.opera && document.childNodes) {
        return "Opera 7+";
      } else {
        return "Opera 6-";
      }
    }
    browseKernel = "Trident";
    if (sUA.indexOf("Maxthon") != -1) {
      return "Maxthon";
    }
    if (sUA.indexOf("TencentTraveler") != -1) {
      //ver 0.1.3
      return "è¾è¿TT";
    }
    if (document.getElementById) {
      return "IE5+";
    } else {
      return "IE4-";
    }
  }
  //æ£æµGeckoæµè§å¨
  if (sUA.indexOf("Gecko") != -1) {
    browseKernel = "Gecko";
    if (navigator.vendor == "Mozilla") {
      return "Mozilla";
    }
    if (navigator.vendor == "Firebird") {
      return "Firebird";
    }
    if (sUA.indexOf("Firefox") != -1) {
      return "Firefox";
    }
    return "Gecko";
  }
  //Netscapeæµè§å¨
  if (sUA.indexOf("Netscape") != -1) {
    browseKernel = "Gecko";
    if (document.getElementById) {
      return "Netscape 6+";
    } else {
      return "Netscape 5-";
    }
  }
  //æ£æµSafariæµè§å¨
  if (sUA.indexOf("Safari") != -1) {
    browseKernel = "KHTML";
    return "Safari";
  }
  if (sUA.indexOf("konqueror") != -1) {
    browseKernel = "KHTML";
    return "Konqueror";
  }
  //è°·æ­æµè§å¨

  //ç®åä¸çå¬è®¤æµè§ç½é¡µéåº¦æå¿«çæµè§å¨ï¼ä½å®å ç¨çç³»ç»èµæºä¹å¾å¤§ã
  if (sUA.indexOf("Opera") != -1) {
    browseKernel = "Presto";
    if (window.opera && document.childNodes) {
      return "Opera 7+";
    } else {
      return "Opera 6-";
    }
    return "Opera";
  }
  if (
    sUA.indexOf("hotjava") != -1 &&
    typeof navigator.accentColorName == "undefined"
  ) {
    return "HotJava";
  }
  if (
    document.all &&
    document.getElementById &&
    navigator.savePreferences &&
    sUA.indexOf("netfront") < 0 &&
    navigator.appName != "Blazer"
  ) {
    return "Escape 5";
  }
  //Konqueror / Safari / OmniWeb 4.5+
  if (
    navigator.vendor == "KDE" ||
    (document.childNodes &&
      (!document.all || navigator.accentColorName) &&
      !navigator.taintEnabled)
  ) {
    browseKernel = "KHTML";
    return "KDE";
  }
  if (navigator.__ice_version) {
    return "ICEbrowser";
  }
  if (window.ScriptEngine && ScriptEngine().indexOf("InScript") + 1) {
    if (document.createElement) {
      return "iCab 3+";
    } else {
      return "iCab 2-";
    }
  }
  if (document.layers && !document.classes) {
    return "Omniweb 4.2-";
  }
  if (document.layers && !navigator.mimeTypes["*"]) {
    return "Escape 4";
  }
  if (navigator.appName.indexOf("WebTV") + 1) {
    return "WebTV";
  }
  if (sUA.indexOf("netgem") != -1) {
    return "Netgem NetBox";
  }
  if (sUA.indexOf("opentv") != -1) {
    return "OpenTV";
  }
  if (sUA.indexOf("ipanel") != -1) {
    return "iPanel MicroBrowser";
  }
  if (document.getElementById && !document.childNodes) {
    return "Clue browser";
  }
  if (
    document.getElementById &&
    (sUA.indexOf("netfront") != -1 || navigator.appName == "Blazer")
  ) {
    return "NetFront 3+";
  }
  if (sUA.indexOf("msie") + 1 && window.ActiveXObject) {
    return "Pocket Internet Explorer";
  }
  return "Unknown";
}

/**
 * æä½ç³»ç»ä¿¡æ¯æ£æµ
 *
 * @ç±»åï¼å¬å±æ¹æ³
 * @åæ°ï¼æ
 * @è¿åï¼æä½ç³»ç»åç§°
 * @ä½èï¼[BI]CJJ http://www.imcjj.com
 * @æ¶é´ï¼2006-11-7
 * @å¤æ³¨ï¼
 */
function CpsCheckOS() {
  var sUA = navigator.userAgent.toLowerCase();
  if (sUA.indexOf("win") != -1) {
    if (sUA.indexOf("nt 5.2") != -1) {
      return "Windows 2003";
    }
    if (sUA.indexOf("nt 5.1") != -1 || sUA.indexOf("XP") != -1) {
      return "Windows XP";
    }
    if (sUA.indexOf("nt 5.0") != -1 || sUA.indexOf("2000") != -1) {
      return "Windows 2000";
    }
    if (sUA.indexOf("winnt") != -1 || sUA.indexOf("windows nt") != -1) {
      return "Windows NT";
    }
    if (sUA.indexOf("win98") != -1 || sUA.indexOf("windows 98") != -1) {
      return "Windows 98";
    }
    return "Windows";
  }
  if (sUA.indexOf("linux") != -1) {
    return "Linux";
  }
  if (sUA.indexOf("freebsd") != -1) {
    return "FreeBSD";
  }
  if (sUA.indexOf("x11") != -1) {
    return "Unix";
  }
  if (sUA.indexOf("mac") != -1) {
    return "Mac";
  }
  if (sUA.indexOf("sunos") != -1) {
    return "Sun OS";
  }
  if (
    sUA.indexOf("os/2") != -1 ||
    navigator.appVersion.indexOf("OS/2") != -1 ||
    sUA.indexOf("ibm-webexplorer") != -1
  ) {
    return "OS 2";
  }
  if (navigator.platform == "PalmOS") {
    return "Palm OS";
  }
  if (
    navigator.platform == "WinCE" ||
    navigator.platform == "Windows CE" ||
    navigator.platform == "Pocket PC"
  ) {
    return "Windows CE";
  }
  if (sUA.indexOf("webtv") != -1) {
    return "WebTV Platform";
  }
  if (sUA.indexOf("netgem") != -1) {
    return "Netgem";
  }
  if (sUA.indexOf("opentv") != -1) {
    return "OpenTV Platform";
  }
  if (sUA.indexOf("symbian") != -1) {
    return "Symbian";
  }
  return "Unknown";
}

var BrowserTester = function () {
  /**
   * @module core/navigator/shell
   */
  "use strict";

  var ieAX = window.ActiveXObject;
  var ieMode = document.documentMode;
  var ieVer = _getIeVersion() || ieMode || 0;
  var isIe = ieAX || ieMode;
  var chromiumType = _getChromiumType();

  /**
   * å¤æ­æ¯å¦ä¸º IE æµè§å¨
   *
   * @example
   * shell.isIE;
   * // true or false
   */
  var isIE = (function () {
    return !!ieVer;
  })();
  /**
   * IE çæ¬
   *
   * @example
   * shell.ieVersion;
   * // 6/7/8/9/10/11/12...
   */
  var ieVersion = (function () {
    return ieVer;
  })();
  /**
   * æ¯å¦ä¸ºè°·æ­ chrome æµè§å¨
   *
   * @example
   * shell.isChrome;
   * // true or false
   */
  var isChrome = (function () {
    return chromiumType === "chrome";
  })();
  /**
   * æ¯å¦ä¸º360å®å¨æµè§å¨
   *
   * @example
   * shell.is360se;
   * // true or false
   */
  var is360se = (function () {
    return chromiumType === "360se";
  })();
  /**
   * æ¯å¦ä¸º360æéæµè§å¨
   *
   * @example
   * shell.is360ee;
   * // true or false
   */
  var is360ee = (function () {
    return chromiumType === "360ee";
  })();
  /**
   * æ¯å¦ä¸ºçè±¹å®å¨æµè§å¨
   *
   * @example
   * shell.isLiebao;
   * // true or false
   */
  var isLiebao = (function () {
    return chromiumType === "liebao";
  })();
  /**
   * æ¯å¦æçé«éæµè§å¨
   *
   * @example
   * shell.isSogou;
   * // true or false
   */
  var isSogou = (function () {
    return chromiumType === "sogou";
  })();
  /**
   * æ¯å¦ä¸º QQ æµè§å¨
   *
   * @example
   * shell.isQQ;
   * // true or false
   */
  var isQQ = (function () {
    return chromiumType === "qq";
  })();

  /**
   * æ£æµ external æ¯å¦åå«è¯¥å­æ®µ
   * @param reg æ­£å
   * @param type æ£æµç±»åï¼0ä¸ºé®ï¼1ä¸ºå¼
   * @returns {boolean}
   * @private
   */
  function _testExternal(reg, type) {
    var external = window.external || {};
    for (var i in external) {
      if (reg.test(type ? external[i] : i)) {
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
    if (isIe || typeof window.scrollMaxX !== "undefined") {
      return "";
    }

    var _track = "track" in document.createElement("track");
    var webstoreKeysLength =
      window.chrome && window.chrome.webstore
        ? Object.keys(window.chrome.webstore).length
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
      window.clientInformation &&
      window.clientInformation.languages &&
      window.clientInformation.languages.length > 2
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
};
//cookiesè¯»åJS
function CpsGetCookie(Name) {
  var search = Name + "=";
  if (document.cookie.length > 0) {
    offset = document.cookie.indexOf(search);
    if (offset != -1) {
      offset += search.length;
      end = document.cookie.indexOf(";", offset);
      if (end == -1) end = document.cookie.length;
      var cookieVal = CpsBase64decode(
        decodeURIComponent(document.cookie.substring(offset, end))
      );
      jsonObj = CpsJSON.parse(cookieVal);
      if (jsonObj) {
        delete cookieVal;
        return jsonObj;
      } else {
        return cookieVal;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

/**
 * @param name
 * @param value
 * @param expires ç§
 * @param path
 * @param domain
 * @param secure
 * @constructor
 */
function CpsSetCookie(name, value, expires, path, domain, secure) {
  var argv = CpsSetCookie.arguments;
  var argc = CpsSetCookie.arguments.length;
  var expires = argc > 2 ? argv[2] : null;
  var path = argc > 3 ? argv[3] : null;
  var domain = argc > 4 ? argv[4] : null;
  var secure = argc > 5 ? argv[5] : false;
  if (typeof value == "object") {
    value = CpsJSON.stringify(value);
  }
  var now = new Date();
  var nowMicroSec = now.getTime();
  expires = new Date(nowMicroSec + expires * 1000);

  value = CpsBase64encode(value);
  document.cookie =
    name +
    "=" +
    decodeURI(value) +
    (expires == null ? "" : ";expires=" + expires.toUTCString()) +
    (path == null ? "" : ";path=" + path) +
    (domain == null ? "" : ";domain=" + domain) +
    (secure == true ? ";secure" : "");
}

var CpsJSON = typeof JSON != "undefined" ? JSON : {};
// implement JSON.stringify serialization
CpsJSON.stringify =
  typeof CpsJSON.stringify != "undefined"
    ? CpsJSON.stringify
    : function (obj) {
        var t = typeof obj;
        if (t != "object" || obj === null) {
          // simple data type
          if (t == "string") obj = '"' + obj + '"';
          return String(obj);
        } else {
          // recurse array or object
          var n,
            v,
            json = [],
            arr = obj && obj.constructor == Array;
          for (n in obj) {
            v = obj[n];
            t = typeof v;
            if (t == "string") v = '"' + v + '"';
            else if (t == "object" && v !== null) v = JSON.stringify(v);
            json.push((arr ? "" : '"' + n + '":') + String(v));
          }
          return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
        }
      };

// implement JSON.parse de-serialization
CpsJSON.parse =
  typeof CpsJSON.parse != "undefined"
    ? CpsJSON.parse
    : function (str) {
        if (str === "") str = '""';
        eval("var p=" + str + ";");
        return p;
      };

var CpsBase64EncodeChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var CpsBase64DecodeChars = new Array(
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  62,
  -1,
  -1,
  -1,
  63,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  -1,
  -1,
  -1,
  -1,
  -1
);
//å®¢æ·ç«¯Base64ç¼ç 
function CpsBase64encode(str) {
  var out, i, len;
  var c1, c2, c3;
  len = str.length;
  i = 0;
  out = "";
  while (i < len) {
    c1 = str.charCodeAt(i++) & 0xff;
    if (i == len) {
      out += CpsBase64EncodeChars.charAt(c1 >> 2);
      out += CpsBase64EncodeChars.charAt((c1 & 0x3) << 4);
      out += "==";
      break;
    }
    c2 = str.charCodeAt(i++);
    if (i == len) {
      out += CpsBase64EncodeChars.charAt(c1 >> 2);
      out += CpsBase64EncodeChars.charAt(
        ((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4)
      );
      out += CpsBase64EncodeChars.charAt((c2 & 0xf) << 2);
      out += "=";
      break;
    }
    c3 = str.charCodeAt(i++);
    out += CpsBase64EncodeChars.charAt(c1 >> 2);
    out += CpsBase64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
    out += CpsBase64EncodeChars.charAt(((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6));
    out += CpsBase64EncodeChars.charAt(c3 & 0x3f);
  }
  return out;
}
//å®¢æ·ç«¯Base64è§£ç 
function CpsBase64decode(str) {
  var c1, c2, c3, c4;
  var i, len, out;
  len = str.length;
  i = 0;
  out = "";
  while (i < len) {
    /* c1 */
    do {
      c1 = CpsBase64DecodeChars[str.charCodeAt(i++) & 0xff];
    } while (i < len && c1 == -1);
    if (c1 == -1) break;
    /* c2 */
    do {
      c2 = CpsBase64DecodeChars[str.charCodeAt(i++) & 0xff];
    } while (i < len && c2 == -1);
    if (c2 == -1) break;
    out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
    /* c3 */
    do {
      c3 = str.charCodeAt(i++) & 0xff;
      if (c3 == 61) return out;
      c3 = CpsBase64DecodeChars[c3];
    } while (i < len && c3 == -1);
    if (c3 == -1) break;
    out += String.fromCharCode(((c2 & 0xf) << 4) | ((c3 & 0x3c) >> 2));
    /* c4 */
    do {
      c4 = str.charCodeAt(i++) & 0xff;
      if (c4 == 61) return out;
      c4 = CpsBase64DecodeChars[c4];
    } while (i < len && c4 == -1);
    if (c4 == -1) break;
    out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
  }
  return out;
}
/**
 * è·åæµè§å¨URLåæ°å¼
 * @param name
 * @returns {null}
 * @constructor
 */
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  } else {
    return null;
  }
}

/*è¿å¥ç½é¡µæ¶è®°å½ç¸å³æ°æ®ï¼åªè®°å½ææ¨å¹¿ç çç¨æ·æµè§ä¿¡æ¯*/
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    var p = CpsGetCookie("cpsviewlog");
    //var vtc = p, vp = null, vs = null, vurl = null, vip = "", vtype = 1;
    var vtc = GetQueryString("__t__"),
      target;
    var shop_id = document.getElementById("site_city")
      ? document.getElementById("site_city").getAttribute("shop-id")
      : 0;
    target = CpsGetCookie("kelacps");
    if (vtc) {
      p.target_code = vtc;
      p.promoted_url = window.location.href;
      CpsSetCookie(
        "kelacps",
        {
          target_code: vtc,
          url: window.location.href,
          entry_time: Date.now(),
          promoter: "",
          shop_id: shop_id,
          client_ip: "",
        },
        2592000,
        "/",
        window.JsDomain
      ); /*æææ30å¤©*/
    } else if (target) {
      p.target_code = target.target_code;
      p.promoter = target.promoter;
      p.shop_id = target.shop_id;
      p.promoted_url = target.url;
      p.type = 2;
    }

    var data = {
      target_code: "",
      promoter: "",
      shop_id: "",
      promoted_url: "",
      referrer: CpsBase64encode(document.referrer),
      land_url: CpsBase64encode(location.href),
      land_time: new Date().getTime(),
      browser: CpsCheckBrowse(),
      os: CpsCheckOS(),
      type: "",
    };
    for (var name in data) {
      if (!data[name]) data[name] = p[name];
    }

    CpsSetCookie(
      "cpsviewlog",
      data,
      2592000,
      "/",
      window.JsDomain
    ); /*æææ30å¤©*/

    /*å¦æç¨æ·è¶è¿30åéæ²¡ææä½é¡µé¢ï¼èªå¨ä¸æ¥æ¥å¿*/
    CpsReportData();
  }
};

/*ç¦»å¼ç½é¡µæ¶æäº¤ç»è®¡ï¼åªæ*/
window.onbeforeunload = CpsReportData;

function CpsReportData() {
  var data = CpsGetCookie("cpsviewlog");
  data.exit_time = new Date().getTime();
  for (var name in data) {
    if (!data[name]) data[name] = "";
  }

  var host = window.location.host;
  if (data.referrer.indexOf("m=user&c=order&a=settle&data") > 0) {
    data.referrer =
      "http://" + host + "/index.php?m=user&c=order&a=settle&data";
  }
  CpsAjaxRequest(
    "http://" + host + "/pc.php?m=api&c=cps&a=log",
    "post",
    data,
    function () {}
  );
}

/*
page: http://www.kela.cn/
url: http://www.kela.cn/Public/js/common/cps_stat.js?1
*/
