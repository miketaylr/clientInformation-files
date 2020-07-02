function FC_DEFINE(e) {
  (this.isMobile = e),
    this.setHostData(),
    (this.isFC = !1),
    (this.SERVER_HOST = window.location.host),
    (this.COOKIE_DOMAIN = "." + this.getDomainName(window.location.host)),
    this.checkFC(),
    1 == isDefined(IS_MOBILE) && 1 == IS_MOBILE && (this.isMobile = !0),
    this.setDefaultData(),
    this.setActiveData(),
    this.setAjaxData(),
    this.setValues(),
    this.setGlobalKey(),
    this.setStorageKey(),
    this.setAdultSite();
}
function FC_PROTOCOL() {
  this.setProtocolUrl();
}
function isMobileAgent() {
  if (isDefined(IS_MOBILE)) return IS_MOBILE ? !0 : !1;
  var e = /kfapwi|kfthwi|kfsowi|slik|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
    navigator.userAgent.toLowerCase()
  );
  return e ? !0 : !1;
}
function FC_CATEGORY() {
  (this.cateName = null),
    (this.cateType = null),
    (this.subCate = null),
    (this.main = null),
    (this.sub = null),
    this.setData(),
    (this.adult_keys = ["11", "12", "1101", "1203", "1205", "1204", "1204"]);
}
function FC_APP() {
  (this.IS_MOBILE = !1),
    (this.MEMBER = null),
    (this.DEFINE = new FC_DEFINE()),
    (this.ADULT_OPEN = this.DEFINE.ADULT_OPEN),
    (this.PROTOCOL = new FC_PROTOCOL()),
    (this.loadedFirst = !1),
    (this.fc_category = null),
    (this.SELECTED = { main: 1, sub: 1001, page: 1 }),
    (this.loadData = null),
    0 == this.DEFINE.DEBUG_CONSOLE_MSG &&
      (console = {
        log: function () {},
        debug: function () {},
        warn: function () {},
        error: function () {},
      }),
    top != window && (top.location = window.location);
}
function DetectBrowser(e) {
  if (!_FC_Browser)
    if (
      ((_FC_Browser = -1),
      "Microsoft Internet Explorer" == _AppName &&
        window.attachEvent &&
        window.ActiveXObject)
    ) {
      var t = _UserAgent.indexOf("MSIE");
      (_FC_Browser = FC_BROWSER_IE),
        (_FC_BrowserEngineVersion = ParseFloat(
          _UserAgent.substring(t + 5, _UserAgent.indexOf(";", t))
        )),
        (_FC_BrowserRuntimeVersion =
          document.documentMode || _FC_BrowserEngineVersion);
    } else if ("Netscape" == _AppName && window.addEventListener) {
      var a = _UserAgent.indexOf("Firefox"),
        i = _UserAgent.indexOf("Safari"),
        n = _UserAgent.indexOf("Chrome"),
        s = _UserAgent.indexOf("AppleWebKit");
      if (a >= 0)
        (_FC_Browser = FC_BROWSER_FIREFOX),
          (_FC_BrowserRuntimeVersion = ParseFloat(_UserAgent.substring(a + 8)));
      else if (i >= 0) {
        var o = _UserAgent.substring(0, i).lastIndexOf("/");
        (_FC_Browser = n >= 0 ? FC_BROWSER_CHROME : FC_BROWSER_SAFARI),
          (_FC_BrowserRuntimeVersion = ParseFloat(
            _UserAgent.substring(o + 1, i)
          ));
      } else {
        var r = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(_UserAgent);
        r &&
          ((_FC_Browser = FC_BROWSER_IE),
          (_FC_BrowserRuntimeVersion = _FC_BrowserEngineVersion = ParseFloat(
            r[1]
          )));
      }
      s >= 0 && (_FC_WebkitVersion = ParseFloat(_UserAgent.substring(s + 12)));
    } else {
      var r = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(_UserAgent);
      r &&
        ((_FC_Browser = FC_BROWSER_OPERA),
        (_FC_BrowserRuntimeVersion = ParseFloat(r[2])));
    }
  return e == _FC_Browser;
}
function IsBrowserIE_FC() {
  return DetectBrowser(FC_BROWSER_IE);
}
function IsBrowserIE_FCQuirks() {
  return (
    IsBrowserIE_FC() &&
    (6 > _FC_BrowserRuntimeVersion || "BackCompat" == document.compatMode)
  );
}
function IsBrowserFireFox_FC() {
  return DetectBrowser(FC_BROWSER_FIREFOX);
}
function IsBrowserSafari_FC() {
  return DetectBrowser(FC_BROWSER_SAFARI);
}
function IsBrowserChrome_FC() {
  return DetectBrowser(FC_BROWSER_CHROME);
}
function IsBrowserOpera_FC() {
  return DetectBrowser(FC_BROWSER_OPERA);
}
function IsBrowserBadTransform_FC() {
  return (
    IsBrowserSafari_FC() && _FC_WebkitVersion > 534 && 535 > _FC_WebkitVersion
  );
}
function IsBrowserIE_FC9Earlier_FC() {
  return IsBrowserIE_FC() && 9 > _FC_BrowserRuntimeVersion;
}
function isBrowserIe() {
  var e = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./),
    t = window.navigator.userAgent,
    a = t.indexOf("MSIE ");
  return a > 0 || e ? !0 : !1;
}
function isMobile() {
  var e = !1,
    t = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
      navigator.userAgent.toLowerCase()
    );
  return (e = t ? !0 : !1);
}
function isBrowserSafari() {
  var e = !1,
    t = navigator.userAgent.toLowerCase();
  return (e =
    t.search("iphone") > -1 || t.search("ipad") > -1 || t.search("ipod") > -1
      ? !0
      : !1);
}
function checkMobileDeviceAgent() {
  var e = "AOS",
    t = /kfapwi|kfthwi|kfsowi|slik|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
      navigator.userAgent.toLowerCase()
    );
  if (t) {
    var a = navigator.userAgent.toLowerCase();
    e =
      a.search("kfapwi") > -1 ||
      a.search("kfthwi") > -1 ||
      a.search("slik") > -1
        ? "KINDLE"
        : a.search("iphone") > -1 ||
          a.search("ipad") > -1 ||
          a.search("ipod") > -1
        ? "IOS"
        : "AOS";
  } else e = "PC";
  return e;
}
function checkDeviceAgent() {
  var e = "pc",
    t = /kfapwi|kfthwi|kfsowi|slik|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
      navigator.userAgent.toLowerCase()
    );
  if (t) {
    var a = navigator.userAgent.toLowerCase();
    e =
      a.search("kfapwi") > -1 ||
      a.search("kfthwi") > -1 ||
      a.search("slik") > -1
        ? "mobile"
        : a.search("iphone") > -1 ||
          a.search("ipad") > -1 ||
          a.search("ipod") > -1
        ? "mobile"
        : "mobile";
  } else e = "pc";
  return e;
}
function isSamsungBroDeviceAgent() {
  var e = /kfapwi|kfthwi|kfsowi|slik|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
    navigator.userAgent.toLowerCase()
  );
  if (e) {
    var t = navigator.userAgent.toLowerCase();
    if (t.search("samsung") > -1) return !0;
  }
  return !1;
}
function isOsWindoww8() {
  var e = navigator.userAgent.toLowerCase(),
    t = /windows nt 6.2/.test(e) || /windows nt 6.3/.test(e);
  return t;
}
function isHtml5Suport() {
  var e = IsBrowserIE_FC();
  return 1 == e && 8 > _FC_BrowserRuntimeVersion ? !1 : !0;
}
function isIe8Ver() {
  var e = IsBrowserIE_FC();
  return 1 == e && 8 == _FC_BrowserRuntimeVersion ? !0 : !1;
}
function supports_canvas() {
  return !!document.createElement("canvas").getContext;
}
function supports_canvas_text() {
  if (!supports_canvas()) return !1;
  var e = document.createElement("canvas"),
    t = e.getContext("2d");
  return "function" == typeof t.fillText;
}
function supports_video() {
  return !!document.crealeElement("video").canPlayType;
}
function supports_local_storage() {
  return "localStorage" in window && null != window.localStorage;
}
function supports_input_type() {
  var e = document.createElement("input");
  return e.setAttribute("type", "TYPE"), "text" !== e.type;
}
function supports_input_autofocus() {
  var e = document.createElement("input");
  return "autofocus" in e;
}
function isDefined(e) {
  var t = !1;
  return (
    null != e &&
      ((str_temp = e + ""),
      (str_temp = str_temp.replace(" ", "")),
      "undefined" != str_temp &&
        "" != str_temp &&
        "null" != str_temp &&
        (t = !0)),
    t
  );
}
function getFileExtension(e) {
  var t = -1;
  t = e.lastIndexOf(".");
  var a = "";
  return (a = -1 != t ? e.substring(t + 1, e.len) : "");
}
function getDayOfWeek() {
  var e = new Date(),
    t = e.getDay();
  return t;
}
function changeTimeStampToData(e, t) {
  var a = new Date(1e3 * e),
    i = a.getFullYear(),
    n = a.getMonth() + 1,
    s = a.getDate(),
    o = a.getHours(),
    r = o > 9 ? o : "0" + o,
    l = a.getMinutes(),
    c = l > 9 ? l : "0" + l;
  a.getSeconds();
  var d = i + "." + n + "." + s + " " + r + ":" + c;
  return 1 == t ? d : 2 == t ? r + ":" + c : d;
}
function strrpos(e, t, a) {
  var i = -1;
  return (
    a
      ? ((i = (e + "").slice(a).lastIndexOf(t)), -1 !== i && (i += a))
      : (i = (e + "").lastIndexOf(t)),
    i >= 0 ? i : !1
  );
}
function getObject(objectId, nodeObject) {
  var doc = document;
  return (
    "" != nodeObject && (doc = eval(nodeObject + ".document")),
    doc.getElementById && doc.getElementById(objectId)
      ? doc.getElementById(objectId)
      : doc.all && doc.all(objectId)
      ? doc.all(objectId)
      : doc.layers && doc.layers[objectId]
      ? doc.layers[objectId]
      : !1
  );
}
function randomNumberFromRange(e, t) {
  return Math.floor(Math.random() * (t - e + 1) + e);
}
function is_checked() {
  var e = document.getElementsByName("chk[]"),
    t = !1;
  for (i = 0; e.length > i; i++) e[i].checked && (t = !0);
  return t;
}
function checkAll() {
  for (
    var e = document.getElementsByName("chk[]"),
      t = document.getElementById("chkall"),
      a = t.checked,
      i = 0;
    e.length > i;
    i++
  )
    e[i].checked = a;
}
function randomRange(e, t) {
  return Math.floor(Math.random() * (t - e + 1) + e);
}
function PopupCenter(e, t, a, i) {
  var n = void 0 != window.screenLeft ? window.screenLeft : screen.left,
    s = void 0 != window.screenTop ? window.screenTop : screen.top,
    o = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : screen.width,
    r = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : screen.height,
    l = o / 2 - a / 2 + n,
    c = r / 2 - i / 2 + s,
    d = window.open(
      e,
      t,
      "scrollbars=yes, width=" +
        a +
        ", height=" +
        i +
        ", top=" +
        c +
        ", left=" +
        l
    );
  window.focus && d.focus();
}
function onclickAndroidPurchase(e, t) {
  return (
    console.log("onclickAndroidPurchase"),
    console.log("payId:" + e),
    console.log("purchaseCode:" + t),
    0 == checkAndroidApp()
      ? (fc_alert("êµ¬ê¸ íë ì´ ê²°ì  ì ì©ìëë¤."), void 0)
      : (startAndroidPurchase(e, t), void 0)
  );
}
function mtoonIframeResize(e) {
  document.getElementById("webtoonFrame").setAttribute("height", e),
    (document.getElementById("webtoonFrame").style.height = e),
    $("html, body").animate(
      { scrollTop: $("#webtoonFrame").offset().top },
      "slow"
    );
}
function mtoonPublishResize() {
  document
    .getElementById("webtoonFrame")
    .setAttribute("height", window.innerHeight),
    (document.getElementById("webtoonFrame").style.height = window.innerHeight),
    $("html, body").animate(
      { scrollTop: $("#webtoonFrame").offset().top },
      "slow"
    );
}
function getRealOffsetTop(e) {
  return e ? e.offsetTop + getRealOffsetTop(e.offsetParent) : 0;
}
function getRealOffsetLeft(e) {
  return e ? e.offsetLeft + getRealOffsetLeft(e.offsetParent) : 0;
}
function meIframeResize(e) {
  document.getElementById("meFrame").setAttribute("height", e),
    (document.getElementById("meFrame").style.height = e),
    (parent.document.body.scrollTop = document.getElementById(
      "meFrame"
    ).offsetParent.offsetTop);
}
function mePublishResize() {
  document.getElementById("meFrame").setAttribute("height", window.innerHeight),
    (document.getElementById("meFrame").style.height = window.innerHeight),
    (parent.document.body.scrollTop = document.getElementById(
      "meFrame"
    ).offsetParent.offsetTop);
}
function number_format(e) {
  var t = /(^[+-]?\d+)(\d{3})/;
  for (e += ""; t.test(e); ) e = e.replace(t, "$1,$2");
  return e;
}
function check_upload_no_str(e) {
  (arrList = []),
    (arrList[0] = "BL"),
    (arrList[1] = "1pondo"),
    (arrList[2] = "2ë1"),
    (arrList[3] = "3ë1"),
    (arrList[4] = "69"),
    (arrList[5] = "Cì»µ"),
    (arrList[6] = "Dì»µ"),
    (arrList[7] = "EBODY"),
    (arrList[8] = "Eì»µ"),
    (arrList[9] = "Fì»µ"),
    (arrList[10] = "Gì»µ"),
    (arrList[11] = "Së¼ì¸"),
    (arrList[12] = "ama10"),
    (arrList[13] = "c2joy"),
    (arrList[14] = "sex"),
    (arrList[15] = "sod"),
    (arrList[16] = "ê°ì´"),
    (arrList[17] = "ê°ê°"),
    (arrList[18] = "ê°ì ë¡"),
    (arrList[19] = "ê°ì¸ë°©ì¡"),
    (arrList[20] = "ê±°ë¬¼"),
    (arrList[21] = "ê±°ì "),
    (arrList[22] = "ê±¸ë "),
    (arrList[23] = "ê²½ë ¨"),
    (arrList[24] = "ê³ ì´"),
    (arrList[25] = "êµ­no"),
    (arrList[26] = "êµ­ë¸"),
    (arrList[27] = "êµ­ì°"),
    (arrList[28] = "êµ­ì°nomo"),
    (arrList[29] = "êµ­ì°ë¸ëª¨"),
    (arrList[30] = "ê¸ëë¨¸"),
    (arrList[31] = "ê¸ë°"),
    (arrList[32] = "ê¼­ì§"),
    (arrList[33] = "ê½ë¼"),
    (arrList[34] = "ë¨ì¹"),
    (arrList[35] = "ë¸ëª¨"),
    (arrList[36] = "ë¸ëª¨ì¼"),
    (arrList[37] = "ë¸ì¶"),
    (arrList[38] = "ë¸ì¶ì¬"),
    (arrList[39] = "ë¸ì¶ì"),
    (arrList[40] = "ë¸í¬í°"),
    (arrList[41] = "ë¸íì² "),
    (arrList[42] = "ëë°"),
    (arrList[43] = "ëì¼"),
    (arrList[44] = "ëë"),
    (arrList[45] = "ëë¬¼"),
    (arrList[46] = "ëë¦¼ë¹µ"),
    (arrList[47] = "ëì¸ì§"),
    (arrList[48] = "ë±í"),
    (arrList[49] = "ë¡"),
    (arrList[50] = "ë¼ì¸"),
    (arrList[51] = "ëì ë¦¬"),
    (arrList[52] = "ë ì¦"),
    (arrList[53] = "ë ì¦ë¹ì¸"),
    (arrList[54] = "ë¡ë¦¬"),
    (arrList[55] = "ë§ì¬ì§"),
    (arrList[56] = "ëª¸ë§¤"),
    (arrList[57] = "ëª¸ìº "),
    (arrList[58] = "ë¬´ì­ì "),
    (arrList[59] = "ë¬´ì­ì í"),
    (arrList[60] = "ë¬¼ê±´"),
    (arrList[61] = "ë¯¸ë"),
    (arrList[62] = "ë¯¸ì"),
    (arrList[63] = "ë°ë"),
    (arrList[64] = "ë°¤ë¬¸í"),
    (arrList[65] = "ë°±ë§"),
    (arrList[66] = "ë°±ì¥"),
    (arrList[67] = "ë°±ì¥í¼ë¶"),
    (arrList[68] = "ë²ê¸°ê¸°"),
    (arrList[69] = "ë² ëì¬"),
    (arrList[70] = "ë² ì´ê¸"),
    (arrList[71] = "ë³´ì§"),
    (arrList[72] = "ë¶ì¹´ê²"),
    (arrList[73] = "ë¶ì¹´ì¼"),
    (arrList[74] = "ë¶ì"),
    (arrList[75] = "ë¶ê°ë¶ê°"),
    (arrList[76] = "ë¸ë¼"),
    (arrList[77] = "ë¹¨ê°ê±°"),
    (arrList[78] = "ì¬ê¹ì"),
    (arrList[79] = "ì¬ì¡"),
    (arrList[80] = "ì¬ì "),
    (arrList[81] = "ìê¸°"),
    (arrList[82] = "ìno"),
    (arrList[83] = "ìë¸"),
    (arrList[84] = "ìì"),
    (arrList[85] = "ììnomo"),
    (arrList[86] = "ììë¸ëª¨"),
    (arrList[87] = "ì±ê¸°ë¸ì¶"),
    (arrList[88] = "ì±ì¸"),
    (arrList[89] = "ì±ì¸ëìì"),
    (arrList[90] = "ì±ì¸ëª¨ë"),
    (arrList[91] = "ì±ì¸ë¬¼"),
    (arrList[92] = "ì±ì¸ì ë"),
    (arrList[93] = "ì±ì¸ìí"),
    (arrList[94] = "ì±ì¸í"),
    (arrList[95] = "ì¹ì¤"),
    (arrList[96] = "ì¤ìí"),
    (arrList[97] = "ì¤í¬"),
    (arrList[98] = "ì´ê°"),
    (arrList[99] = "ì´ê³¨"),
    (arrList[100] = "ì°ë¦¬ì¬"),
    (arrList[101] = "ì êµë"),
    (arrList[102] = "ì ë¬´"),
    (arrList[103] = "ì¼ê²ì"),
    (arrList[104] = "ì¼ê²"),
    (arrList[105] = "ì¼ë¸"),
    (arrList[106] = "ì¼ë"),
    (arrList[107] = "ì¼ì¤"),
    (arrList[108] = "ì¼ì ë"),
    (arrList[109] = "ì¼ì¸"),
    (arrList[110] = "ì¼ì¸ë¸ì¶"),
    (arrList[111] = "ì¼ì¸ìì"),
    (arrList[112] = "ì¼í"),
    (arrList[113] = "ì¼íìì"),
    (arrList[114] = "ì¼íìí"),
    (arrList[115] = "ìë©ì´"),
    (arrList[116] = "ìë¡"),
    (arrList[117] = "ìë¡ë¬¼"),
    (arrList[118] = "ìë¡ìì"),
    (arrList[119] = "ìí"),
    (arrList[120] = "ìíë"),
    (arrList[121] = "ì¬ê³ ì"),
    (arrList[122] = "ì¬ëì"),
    (arrList[123] = "ì¬ì¹"),
    (arrList[124] = "ìì§ëë"),
    (arrList[125] = "ì·ë²ê¸°"),
    (arrList[126] = "ìê°ì´"),
    (arrList[127] = "ìëì"),
    (arrList[128] = "ì ë"),
    (arrList[129] = "ì ëª¨"),
    (arrList[130] = "ì ë°©"),
    (arrList[131] = "ì ë¶ë"),
    (arrList[132] = "ì¡êµ¬"),
    (arrList[133] = "ì¡ë"),
    (arrList[134] = "ìë"),
    (arrList[135] = "ìëª¨ë¸ì¶"),
    (arrList[136] = "ìë¶"),
    (arrList[137] = "ìë¶ë¸ì¶"),
    (arrList[138] = "ì´ë°"),
    (arrList[139] = "ì´ìì§"),
    (arrList[140] = "ì¼no"),
    (arrList[141] = "ì¼ë¸"),
    (arrList[142] = "ì¼ë³¸"),
    (arrList[143] = "ì¼ë³¸nomo"),
    (arrList[144] = "ì¼ë³¸ë¸ëª¨"),
    (arrList[145] = "ìëë°"),
    (arrList[146] = "ìì°ì°"),
    (arrList[147] = "ìì"),
    (arrList[148] = "ììë"),
    (arrList[149] = "ìì§"),
    (arrList[150] = "ìí¹"),
    (arrList[151] = "ì ê°ì´"),
    (arrList[152] = "ì í±ì´"),
    (arrList[153] = "ì¤ë§"),
    (arrList[154] = "ì¤êµ­ìë¡"),
    (arrList[155] = "ì¤ë¸"),
    (arrList[156] = "ì§ì´¬"),
    (arrList[157] = "ì§ìº "),
    (arrList[158] = "ì§ë´"),
    (arrList[159] = "ì§ë´ì¬ì "),
    (arrList[160] = "ì§ì¬"),
    (arrList[161] = "ì§ì¸"),
    (arrList[162] = "ìµì"),
    (arrList[163] = "ìµìì "),
    (arrList[164] = "ì¹´í¡ë"),
    (arrList[165] = "ìº ë"),
    (arrList[166] = "ìº ë°©"),
    (arrList[167] = "ì½ë"),
    (arrList[168] = "í´ë½ìì"),
    (arrList[169] = "íë"),
    (arrList[170] = "í¨í°ì¬"),
    (arrList[171] = "íí°ì¬"),
    (arrList[172] = "í¬ë¥´ë¸"),
    (arrList[173] = "íêµ­ë¬¼"),
    (arrList[174] = "íë¦¬"),
    (arrList[175] = "íëë¦¼"),
    (arrList[176] = "í¼ìì"),
    (arrList[177] = "íì³ë³´ê¸°"),
    (arrList[178] = "íë§"),
    (arrList[179] = "íì¸ê³¼"),
    (arrList[180] = "íì¸ëë¬¼"),
    (arrList[181] = "í¥ë¶"),
    (arrList[182] = "í¥ë¶ì "),
    (arrList[183] = "ë³´ì§ë¹"),
    (arrList[184] = "19ê¸"),
    (arrList[185] = "90ëì"),
    (arrList[186] = "91ëì"),
    (arrList[187] = "92ëì"),
    (arrList[188] = "93ëì"),
    (arrList[189] = "94ëì"),
    (arrList[190] = "95ëì"),
    (arrList[191] = "96ëì"),
    (arrList[192] = "97ëì"),
    (arrList[193] = "Hì»µ"),
    (arrList[194] = "Nëª¨"),
    (arrList[195] = "noëª¨"),
    (arrList[196] = "tokyo"),
    (arrList[197] = "uëª¨"),
    (arrList[198] = "ê°í¸ì¬"),
    (arrList[199] = "ê°±ë±"),
    (arrList[200] = "ê²ì¤"),
    (arrList[201] = "ê³ ë¬¸"),
    (arrList[202] = "ê³¼ë¶"),
    (arrList[203] = "êµë°°"),
    (arrList[204] = "êµ¬ë¦¬ë¹"),
    (arrList[205] = "êµ­n"),
    (arrList[206] = "ê·¸ë"),
    (arrList[207] = "ê·¼ì¹"),
    (arrList[208] = "ê·¼ì¹ìê°"),
    (arrList[209] = "ê¸ë°ë"),
    (arrList[210] = "ê¸°í"),
    (arrList[211] = "ê¸°íë¬¼"),
    (arrList[212] = "ê¸¸ê±°ë¦¬"),
    (arrList[213] = "ëë ì´í°"),
    (arrList[214] = "ëêµ"),
    (arrList[215] = "ë¨í¸"),
    (arrList[216] = "ë®ìê¼´"),
    (arrList[217] = "ëì°ë¯¸"),
    (arrList[218] = "ëì¿í«"),
    (arrList[219] = "ë·êµ¬ë©"),
    (arrList[220] = "ë¬ìì"),
    (arrList[221] = "ë¬ììë¯¸ë"),
    (arrList[222] = "ë ì´ì±ê±¸"),
    (arrList[223] = "ë ì´ì±ëª¨ë¸"),
    (arrList[224] = "ë ì ë"),
    (arrList[225] = "ë§ì¬ì§ìµ"),
    (arrList[226] = "ë§ì¬ì§ì¾"),
    (arrList[227] = "ë§ì"),
    (arrList[228] = "ëªíAV"),
    (arrList[229] = "ëªíë"),
    (arrList[230] = "ëªíëª¸ë§¤"),
    (arrList[231] = "ëª¨ë¸"),
    (arrList[232] = "ëª¨ì "),
    (arrList[233] = "ëª°ëì´¬ì"),
    (arrList[234] = "ëª½ì "),
    (arrList[235] = "ë¯¸ëì¤ì»¤í¸"),
    (arrList[236] = "ë¯¸ìë"),
    (arrList[237] = "ëª°ì¹´"),
    (arrList[238] = "ë¯¸í¼ëª¨"),
    (arrList[239] = "ë°ê¼´"),
    (arrList[240] = "ë°§ì¤"),
    (arrList[241] = "ë²ì­"),
    (arrList[242] = "ë³ë"),
    (arrList[243] = "ë³í"),
    (arrList[244] = "ë¹í¤ë"),
    (arrList[245] = "ìë"),
    (arrList[246] = "ìì¤"),
    (arrList[247] = "ì±êµì¡"),
    (arrList[248] = "ì±ë°©"),
    (arrList[249] = "ì±ì¸ë°©ì¡"),
    (arrList[250] = "ì¹ë"),
    (arrList[251] = "ììë³µ"),
    (arrList[252] = "ììì¥"),
    (arrList[253] = "ìì§ë®ì"),
    (arrList[254] = "ìí¼ëª¨ë¸"),
    (arrList[255] = "ì¤ì·"),
    (arrList[256] = "ì¤íí¹"),
    (arrList[257] = "ì¤í¸ë¦½"),
    (arrList[258] = "ì¤í"),
    (arrList[259] = "ì í¼"),
    (arrList[260] = "ì¤ì ì ì¬"),
    (arrList[261] = "ìë"),
    (arrList[262] = "ìë"),
    (arrList[263] = "ìëì´ì"),
    (arrList[264] = "ìë§ì¶ì´"),
    (arrList[265] = "ìíë¦¬ì¹´"),
    (arrList[266] = "ì ì¡"),
    (arrList[267] = "ì¼ì¬"),
    (arrList[268] = "ì¼ì "),
    (arrList[269] = "ì¼êµ´ì¬ì "),
    (arrList[270] = "ì¼ì¸"),
    (arrList[271] = "ìì¤íí±"),
    (arrList[272] = "ìì ¤"),
    (arrList[273] = "ì¬ê°í¸ì¬"),
    (arrList[274] = "ì¬ê´ë°©"),
    (arrList[275] = "ì¬ì "),
    (arrList[276] = "ì¬ìì¬"),
    (arrList[277] = "ì´ë"),
    (arrList[278] = "ì¤ì¼"),
    (arrList[279] = "ì¬ë¸ì¶"),
    (arrList[280] = "ì·ë²ê¸°ê²ì"),
    (arrList[281] = "ìì "),
    (arrList[282] = "ìí¼ì¤"),
    (arrList[283] = "ì¨ë©ëëì¤"),
    (arrList[284] = "ì¨ë©ëë ì¤"),
    (arrList[285] = "ì ë¶ëë¤"),
    (arrList[286] = "ìê¼´"),
    (arrList[287] = "ìê¼´ì¬"),
    (arrList[288] = "ìë°"),
    (arrList[289] = "ì¼n"),
    (arrList[290] = "ì¼u"),
    (arrList[291] = "ì¼ë°ì¸"),
    (arrList[292] = "ìê¸°"),
    (arrList[293] = "ìì¸"),
    (arrList[294] = "ì ì·"),
    (arrList[295] = "ì ê¼­ì§"),
    (arrList[296] = "ì§ì§"),
    (arrList[297] = "ì§§ìì¹ë§"),
    (arrList[298] = "ìª½ë°ë¦¬"),
    (arrList[299] = "ì­ë¹µë"),
    (arrList[300] = "ì²­ìê¸ëë¨¸"),
    (arrList[301] = "ì´ëë°"),
    (arrList[302] = "ì´ë¯¸ë"),
    (arrList[303] = "ì´ë¯¸ëì¤ì»¤í¸"),
    (arrList[304] = "ì¹í"),
    (arrList[305] = "ì»¤í"),
    (arrList[306] = "ì»¤íì¤í"),
    (arrList[307] = "ì»¤íì´¬ì"),
    (arrList[308] = "ì»¤í¼ì¤íí¹"),
    (arrList[309] = "ì¿¡no"),
    (arrList[310] = "ì¿¡ë¸"),
    (arrList[311] = "ì¿¡ì°"),
    (arrList[312] = "í´ì´"),
    (arrList[313] = "íë ¥"),
    (arrList[314] = "í¬ëªì¸ê°"),
    (arrList[315] = "í°í¬í°"),
    (arrList[316] = "íì´í¬ìº"),
    (arrList[317] = "íì´í¬íì"),
    (arrList[318] = "í­íì ì¬"),
    (arrList[319] = "íë"),
    (arrList[320] = "íì "),
    (arrList[321] = "íëì½ì´"),
    (arrList[322] = "í©ì±"),
    (arrList[323] = "í«í¬ì¸ "),
    (arrList[324] = "í­ë¬¸"),
    (arrList[325] = "íí"),
    (arrList[326] = "í¼ì"),
    (arrList[327] = "íì¬ìì"),
    (arrList[328] = "íí"),
    (arrList[329] = "ë¬´ì­"),
    (arrList[330] = "ì¬ë¸"),
    (arrList[331] = "ì¤ì½"),
    (arrList[332] = "êµ¬ ë©"),
    (arrList[333] = "ê·¹ê°ìì"),
    (arrList[334] = "êµ¬ë©"),
    (arrList[335] = "100ë¬´"),
    (arrList[336] = "100ë¬´ì­ì "),
    (arrList[337] = "ì­ì "),
    (arrList[338] = "ê·¹ê°"),
    (arrList[339] = "ìì"),
    (arrList[340] = "ê°ìì"),
    (arrList[341] = "ì¡°ë³´ì"),
    (arrList[342] = "ìë¡í±"),
    (arrList[343] = "ì¤ì¸í"),
    (arrList[344] = "ë² ëì "),
    (arrList[345] = "ì¡ê¸°ì¤"),
    (arrList[346] = "ì´ë§ë¼"),
    (arrList[347] = "ì ë¼ë¸ì¶"),
    (arrList[348] = "ë°°ëì "),
    (arrList[349] = "ì ì¬ì "),
    (arrList[350] = "ììíí"),
    (arrList[351] = "ë°ì² ì"),
    (arrList[352] = "ìµê°ì ë¼"),
    (arrList[353] = "ìì"),
    (arrList[354] = "ì ì"),
    (arrList[355] = "ë¶ë¶"),
    (arrList[356] = "ê²©ë ¬"),
    (arrList[357] = "ë¸ ì¶"),
    (arrList[358] = "ì½ê¸°"),
    (arrList[359] = "ì±ì "),
    (arrList[360] = "ìë°í"),
    (arrList[361] = "ê¸ë¨"),
    (arrList[362] = "ìíë°"),
    (arrList[363] = "ìë¦ë¤ì´íëìë°ë¤"),
    (arrList[364] = "ë´ë§ë"),
    (arrList[365] = "ì ì¬"),
    (arrList[366] = "ë¹ììì"),
    (arrList[367] = "ì ë¼"),
    (arrList[368] = "ëì¸ì¡ì¦"),
    (arrList[369] = "ìëíë°í"),
    (arrList[370] = "ìë°íì ì¬"),
    (arrList[371] = "ìí´ë"),
    (arrList[372] = "íê²©ë¸ì¶"),
    (arrList[373] = "ë°°ëì¬"),
    (arrList[374] = "ì°½ìì ì ì¬"),
    (arrList[375] = "ë¶ë¥íì¥"),
    (arrList[376] = "íëë°©"),
    (arrList[377] = "ë¶ë¥"),
    (arrList[378] = "ì¹1ì¤"),
    (arrList[379] = "íìì§"),
    (arrList[380] = "ë°ë¦¬ìì¸"),
    (arrList[381] = "ë² ëì  ëª¨ì"),
    (arrList[382] = "ë°°ëì  ëª¨ì"),
    (arrList[383] = "ë² ëì  ì¡ê¸°ì¤"),
    (arrList[384] = "ë°°ëì  ì¡ê¸°ì¤"),
    (arrList[385] = "ì±ì¸í¨ë¬ë"),
    (arrList[386] = "ì±ì¸ í¨ë¬ë"),
    (arrList[387] = "ë¸ì¶ ìí"),
    (arrList[388] = "ìµê³  ìì"),
    (arrList[389] = "ìµê³ ìì"),
    (arrList[390] = "íê²© ìì"),
    (arrList[391] = "ìµê³  ë¸ì¶"),
    (arrList[392] = "ì­ì  ë¸ì¶"),
    (arrList[393] = "í­ì "),
    (arrList[394] = "ê°ì "),
    (arrList[395] = "ì¼ë¦"),
    (arrList[396] = "ìëí"),
    (arrList[397] = "ììì"),
    (arrList[398] = "ë¸ì¶ ì¡ê¸°ì¤"),
    (arrList[399] = "ë¸ì¶ ëª¨ì"),
    (arrList[400] = "ë¬´ì­ì  ëª¨ì"),
    (arrList[401] = "ë¬´ì­ì  ìí"),
    (arrList[402] = "ì²«ê²½í"),
    (arrList[403] = "ì í¼ì¬í"),
    (arrList[404] = "ë¸ì»·"),
    (arrList[405] = "ì¶ì¥"),
    (arrList[406] = "ë² ë"),
    (arrList[407] = "ìì§ì¬ì"),
    (arrList[408] = "ì¬ ëë"),
    (arrList[409] = "ì±ê°ë"),
    (arrList[410] = "íê²©ë¸ì¶ì"),
    (arrList[411] = "ë²ê°ì¤ìí"),
    (arrList[412] = "ì±ë¸ì"),
    (arrList[413] = "ìì ë¸ì¶"),
    (arrList[414] = "ë°ì "),
    (arrList[415] = "ê¹ëë¯¸"),
    (arrList[416] = "ì±ì"),
    (arrList[417] = "ì ë¼ì ì¬"),
    (arrList[418] = "íë"),
    (arrList[419] = "ìì´ê°"),
    (arrList[420] = "ë¬´ì­ ì¬ë¸"),
    (arrList[421] = "ì¬ë¸ ë¬´ì­"),
    (arrList[422] = "ë¬´ì­ì  ì¬ë¸ì¶"),
    (arrList[423] = "ì¬ë¸ì¶ ë¬´ì­ì "),
    (arrList[424] = "ë¬´ì­ì  ì¬ë¸"),
    (arrList[425] = "ì¬ë¸ ë¬´ì­ì "),
    (arrList[426] = "ì¬ë¸ì¶ ë¬´ì­"),
    (arrList[427] = "ë¬´ì­ ì¬ë¸ì¶");
  var t,
    a = [
      ",",
      ".",
      "/",
      ";",
      "'",
      "[",
      "]",
      "<",
      ">",
      "?",
      ":",
      '"',
      "{",
      "}",
      "~",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "_",
      "=",
      "+",
      " ",
    ];
  for (i = 0; a.length > i; i++)
    for (t = e.indexOf(a[i]); -1 != t; )
      (e = e.replace(a[i], "")), (t = e.indexOf(a[i]));
  for (
    console.log("check_upload_no_str:::" + e), i = 0;
    arrList.length > i;
    i++
  )
    if (-1 != e.indexOf(arrList[i]))
      return (
        alert(
          "ì ëª©ì ì¬ì© íì¤ ì ìë ë¨ì´ê° í¬í¨ëì´ ììµëë¤.[" + arrList[i] + "]"
        ),
        !1
      );
  return !0;
}
function loadScript(e) {
  var t = document.createElement("script");
  (t.type = "text/javascript"),
    (t.src = e),
    (t.async = !0),
    document.body.appendChild(t);
}
function nfile_checkCustomProtocolUrl(e, t) {
  var a = !1;
  if (1 == getStorageInstalledCUS()) return !0;
  if (1 == isBrowserIe() && null != e) {
    try {
      console.log("check ie ax progid");
      var i = new ActiveXObject(e);
      a = i ? !0 : !1;
    } catch (n) {
      a = !1;
    }
    return 1 == a && setStorageInstalledCUS("1"), a;
  }
  try {
    console.log("check other br cus");
    var s = "",
      o = "filecast://" + s;
    return loadAppByUri(o, t, null), !1;
  } catch (n) {
    a = !1;
  }
  return a;
}
function nfile_checkCustomProtocolUrlIE11() {
  alert("nfile_checkCustomProtocolUrlIE11");
  var e = IsBrowserIE_FC();
  return 0 == e || (1 == e && 11 > parseInt(_FC_BrowserRuntimeVersion))
    ? (alert("IE just 11"), !1)
    : void 0;
}
function nfile_AXCheck(e) {
  var t;
  try {
    var a = new ActiveXObject(e);
    t = a ? !0 : !1;
  } catch (i) {
    t = !1;
  }
  return t ? !0 : !1;
}
function nfile_AX_check(e) {
  return 1 == isBrowserIe()
    ? 1 == nfile_AXCheck(e.DEFINE.AX_PROGID)
      ? (console.log("nfile_AXCheck result true"), !0)
      : (console.log("nfile_AXCheck result false"), !1)
    : !0;
}
function nfile_check_version() {
  console.log("---nfile_check_version----");
  try {
    return (
      1 == isBrowserIe() &&
        (console.log("check VersionCheck"), WebCtrl.VersionCheck()),
      !0
    );
  } catch (e) {
    return console.log("nfile_check_version e error"), !1;
  }
}
function nfile_check() {
  return (
    console.log("---nfile_check----"),
    null == APP && (APP = new FC_APP()),
    nfile_AX_check(APP)
  );
}
function nfile_install() {
  console.log("----nfile_install---");
  try {
    var e = navigator.userAgent.toLowerCase(),
      t = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
    if (-1 != e.indexOf("msie") || t) {
      console.log("action install");
      var a = WebCtrl.CheckInstall();
      return 0 == parseInt(a) ? !1 : !0;
    }
  } catch (i) {
    return console.log("nfile_install e error"), console.debug(i), !0;
  }
}
function nfile_IsWinXPSP2() {
  try {
    var e = window.clientInformation,
      t = /[^A-Z0-9]MSIE[ ]+6.0[^A-Z0-9]/i,
      a = /[^A-Z0-9]WINDOWS[ ]+NT[ ]+5.1[^A-Z0-9]/i;
    if (
      e.appMinorVersion.replace(/\s/g, "").toUpperCase().indexOf(";SP2;") >=
        0 &&
      1 == t.test(e.userAgent) &&
      1 == a.test(e.userAgent)
    )
      return !0;
  } catch (i) {
    return !1;
  }
  return !1;
}
function nfile_shortcut(e) {
  nfile_check() && WebCtrl.MakeShortCut(e);
}
function nfile_upload(e, t, a) {
  console.log("nfile_upload"), console.log(e), console.log(t), console.log(a);
  var i = WebCtrl.UpLoad(e, t, 0, a);
  return console.log("uploadCheck::" + i), i;
}
function filecast_downloader(e, t, a) {
  console.log("============filecast_downloader============="),
    null == APP && (APP = new FC_APP());
  var i = 0,
    n = 1,
    s =
      e.userid +
      "|" +
      e.userpw +
      "|" +
      i +
      "|" +
      e.idx +
      "|" +
      e.idx_purchase +
      "|" +
      e.ftp +
      "|" +
      n;
  if (null != t && 1 != a) {
    var o =
      "^$filecast$^" +
      t.userid +
      "|" +
      t.fileno +
      "|" +
      t.mureka +
      "|" +
      t.down +
      "|" +
      t.pay_log +
      "|" +
      t.cp_name +
      "|" +
      t.contents_id +
      "|" +
      t.set_point;
    o +=
      "|" +
      t.pay_datetime +
      "|" +
      t.osp_pay_key +
      "|" +
      t.realname +
      "|" +
      t.seller_user +
      "|" +
      t.bbs_no +
      "|" +
      t.cpr_div +
      "|" +
      t.filename +
      "|" +
      t.mbc;
  } else var o = "";
  var r = null;
  (r = 1 == a ? s : s + o), console.debug(r);
  var l = Base64.encode(r);
  (l += "filecast://"), console.debug(l);
  var c = "filecast://" + l,
    d = function () {
      console.log("filecast_downloader:::failCallbackFun"),
        0 == FILE_FN.ACTIVE_CHECK;
    };
  checkCustumProtocolCheck(c, d);
}
function nfile_download(e, t, a, i, n) {
  null == APP && (APP = new FC_APP());
  var s = nfile_AX_check(APP);
  if ((console.log("checkAx:" + s), 0 == s))
    return (
      alert(
        "ë³´ë¨ ë¹ ë¥¸ ìëë¡ íì¼ì ë¤ì´ë¡ë íê¸° ìí´ TidyWebìì ë°°í¬í ë¤ì´ë¡ë ì ì© íë¡ê·¸ë¨ì ì¤ì¹íìì¼í©ëë¤."
      ),
      self.location.reload(!0),
      windowOpenCenter(
        APP.DEFINE.SERVER_OLDURL + "/guide/multi_guide1.php",
        "guide",
        "680",
        "800",
        "scrollbars=yes"
      ),
      void 0
    );
  var o = navigator.userAgent.toLowerCase(),
    r = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
  -1 != o.indexOf("msie") || r
    ? WebCtrl.DownLoad(e, t, 0, a, i, n, 1)
    : document
        .getElementById(APP.DEFINE.varNP_ID)
        .DownLoad(e, t, 0, a, i, n, 1);
  try {
    (Show_Share_layout_obj = parent.document.getElementById("GNB")),
      (Show_Share_layout_obj.style.display = "");
  } catch (l) {}
}
function nfile_downloads_re(e, t, a, i, n) {
  var s = navigator.userAgent.toLowerCase(),
    o = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
  -1 != s.indexOf("msie") || o
    ? WebCtrl.DownLoads(e, t, 0, a, i, n, 1, 2)
    : document
        .getElementById(APP.DEFINE.varNP_ID)
        .DownLoads(e, t, 0, a, i, n, 1, 2);
  try {
    (Show_Share_layout_obj = parent.document.getElementById("GNB")),
      (Show_Share_layout_obj.style.display = "");
  } catch (r) {}
}
function nfile_downloads_hash(e, t, a, i, n) {
  var s = navigator.userAgent.toLowerCase(),
    o = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
  -1 != s.indexOf("msie") || o
    ? WebCtrl.DownLoads(e, t, 0, a, i, n, 1, 3)
    : document
        .getElementById(APP.DEFINE.varNP_ID)
        .DownLoads(e, t, 0, a, i, n, 1, 3);
  try {
    (Show_Share_layout_obj = parent.document.getElementById("GNB")),
      (Show_Share_layout_obj.style.display = "");
  } catch (r) {}
}
function nfile_downloads(e, t, a, i, n) {
  var s = navigator.userAgent.toLowerCase(),
    o = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
  -1 != s.indexOf("msie") || o
    ? WebCtrl.DownLoads(e, t, 0, a, i, n, 1, 1)
    : document
        .getElementById(APP.DEFINE.varNP_ID)
        .DownLoads(e, t, 0, a, i, n, 1, 1);
  try {
    (Show_Share_layout_obj = parent.document.getElementById("GNB")),
      (Show_Share_layout_obj.style.display = "");
  } catch (r) {}
}
function nfile_checkCountSet() {
  var e = 0,
    t = 0,
    a = document[Name_Transe_Form],
    n = a.elements.nfile_trans_folder,
    s = n.length;
  if (s) for (i = 0; s > i; i++) n[i].checked && "" != n[i].value && e++;
  else n.checked && "" != n.value && e++;
  var o = a.elements.nfile_trans_file,
    r = o.length;
  if (r)
    for (i = 0; r > i; i++)
      o[i].checked && "" != o[i].value && (e++, (t += parseInt(o[i].label)));
  else o.checked && "" != o.value && (e++, (t += parseInt(o.label)));
  (document.all.checkCount.innerHTML = e),
    (document.all.checkSize.innerHTML = parseSize(t, 1));
}
function nfile_checkFolder(e) {
  var t = e.form.elements.nfile_trans_folder,
    a = t.length;
  if (a)
    for (i = 0; a > i; i++)
      t[i].value.indexOf(e.value) >= 0 && (t[i].checked = e.checked);
  else t.value.indexOf(e.value) >= 0 && (t.checked = e.checked);
  var t = e.form.elements.nfile_trans_file,
    a = t.length;
  if (a)
    for (i = 0; a > i; i++)
      (temp = t[i].value.split("|")),
        temp[0].indexOf(e.value) >= 0 && (t[i].checked = e.checked);
  else
    (temp = t.value.split("|")),
      temp[0].indexOf(e.value) >= 0 && (t.checked = e.checked);
  nfile_checkCountSet();
}
function nfile_checkFile() {
  nfile_checkCountSet();
}
function nfile_isChecked() {
  var e = document[Name_Transe_Form],
    t = e.elements.nfile_trans_file,
    a = t.length;
  if (a) {
    for (i = 0; a > i; i++) if (t[i].checked) return !0;
    return !1;
  }
  return t.checked ? !0 : !1;
}
function nfile_downloadFile() {
  var e = document[Name_Transe_Form];
  nfile_isChecked()
    ? (nfile_Trans_Make(), (e.pg_mode.value = "nfile_down"), e.submit())
    : alert(
        "ë¤ì´ ë°ì¼ì¤ íì¼ì ì ííì¸ì.\nìë¡ëê° ìë£ ëì§ ìì íì¼ì ì ííìë ë¤ì´ ë°ì¼ì¤ ì ììµëë¤."
      );
}
function nfile_checkAll(e) {
  var t,
    a = document[Name_Transe_Form];
  e ? ((t = !0), (a.chkall.checked = t)) : (t = a.chkall.checked ? !0 : !1);
  var n = a.elements.nfile_trans_folder,
    s = n.length;
  if (s) for (i = 0; s > i; i++) n[i].checked = t;
  else n.checked = t;
  var n = a.elements.nfile_trans_file,
    s = n.length;
  if (s) for (i = 0; s > i; i++) n[i].checked = t;
  else n.checked = t;
  nfile_checkCountSet();
}
function nfile_downloadAll() {
  nfile_checkAll(!0), nfile_downloadFile();
}
function nfile_uploadFile() {
  var e = document[Name_Transe_Form];
  nfile_isChecked()
    ? (nfile_Trans_Make(), (e.pg_mode.value = "nfile_up"), e.submit())
    : alert("ì´ì´ì¬ë¦¬ê¸° íì¤ íì¼ì ì ííì¸ì.");
}
function nfile_removeFile() {
  var e = document[Name_Transe_Form];
  nfile_isChecked()
    ? confirm("ì­ì íìê² ìµëê¹") &&
      (nfile_Trans_Make(), (e.pg_mode.value = "nfile_remove"), e.submit())
    : alert("ì­ì íì¤ íì¼ì ì ííì¸ì.");
}
function nfile_Trans_Make() {
  var e = [],
    t = [],
    a = document[Name_Transe_Form],
    n = a.elements.nfile_trans_file,
    s = n.length,
    o = a.elements.nfile_trans_folder,
    r = o.length,
    l = 0;
  for (i = 0; s > i; i++)
    n[i].checked && "" != n[i].value && ((e[l] = n[i].value), l++);
  for (l = 0, i = 0; r > i; i++)
    o[i].checked && "" != o[i].value && ((t[l] = o[i].value), l++);
  (a.nfile_files.value = ""),
    (a.nfile_folders.value = ""),
    (a.nfile_files.value = e.join("<>")),
    (a.nfile_folders.value = t.join("<>"));
}
function fileKeeping() {
  var e = document[Name_Transe_Form];
  (e.pg_mode.value = "nfile_keeping"), e.submit();
}
function nfile_Upload_Add_Make() {
  var e = document[Name_Insert_Form];
  if (1 == e.nfile_upload_list.length)
    return alert("ì¶ê° ìë¡ë íì¤ íì¼ì ì íí´ ì£¼ì¸ì!"), !1;
  var t = [];
  for (i = 1; e.nfile_upload_list.length > i; i++)
    (e.nfile_upload_list.options[i].selected = !0),
      (t[i - 1] = e.nfile_upload_list.options[i].value);
  return (
    (e.nfile_files.value = ""),
    (e.nfile_files.value = t.join("<>")),
    e.submit(),
    !0
  );
}
function nfile_DoUpload(e) {
  null == APP && (APP = new FC_APP());
  var t = nfile_AX_check(APP);
  return 0 == t
    ? (alert(
        "íì¼ì ìë¡ë íì¤ë ¤ë©´ TidyWebìì ë°°í¬í ìë¡ë ì ì© íë¡ê·¸ë¨ì ì¤ì¹íìì¼í©ëë¤."
      ),
      self.location.reload(!0),
      windowOpenCenter(
        APP.DEFINE.SERVER_OLDURL + "/guide/upload_guide.php",
        "guide",
        "680",
        "800",
        "scrollbars=yes"
      ),
      void 0)
    : 0 == nfile_check_version()
    ? (console.log("nfile_DoUpload nfile_check_version false"), void 0)
    : (console.log("nfile_DoUpload nfile_check_version true"),
      nfile_Upload_Insert(e),
      void 0);
}
function nfile_Upload_Insert(e) {
  if (
    (navigator.userAgent.toLowerCase(),
    !!navigator.userAgent.match(/Trident.*rv[ :]*11\./),
    !nfile_check())
  )
    return (
      alert(
        "ì»¨íì¸  ìë¡ëë¥¼ ìí´ìë\nìë¨ì íì¼ìë² íì¼ì ì¡ ê´ë¦¬ìë¥¼ ì¤ì¹í´ì£¼ì¸ì."
      ),
      void 0
    );
  var t = document.uploadForm;
  console.log("file list1~~~~~~~~~~"),
    console.debug(t.nfile_upload_list),
    (t.filepath.value = ""),
    (lastIndex = ""),
    jQuery("#nfile_upload_list").empty(),
    jQuery("#nfile_upload_list").html('<option value="">ëª©ë¡</option>'),
    nfile_UploadRemove(),
    console.log("file list2~~~~~~~~~~"),
    console.debug(t.nfile_upload_list),
    "file" == e
      ? isBrowserIe()
        ? WebCtrl.ShowDlgFile()
        : alert("ì§ìëì§ ìë ë¸ë¼ì°ì ¸ìëë¤. ìµì¤íë¡ììë§ íì¼ ìë¡ëê° ê°ë¥í©ëë¤.")
      : "folder" == e &&
        (isBrowserIe()
          ? WebCtrl.ShowDlgFolder()
          : alert(
              "ì§ìëì§ ìë ë¸ë¼ì°ì ¸ìëë¤. ìµì¤íë¡ììë§ íì¼ ìë¡ëê° ê°ë¥í©ëë¤."
            ));
  var a = [];
  if (
    ((t.filetype.value = e),
    t.filepath.value && t.nfile_upload_list.length > lastIndex)
  ) {
    for (t.filepath.value = "", o = 1; lastIndex > o; o++)
      t.nfile_upload_list.options[o].selected = !0;
    nfile_UploadRemove();
  }
  if (
    (console.log("file list receive~~~~~~~~~~"),
    console.debug(t.nfile_upload_list),
    (Check_nds = 0),
    0 != isDefined(t.nfile_upload_list))
  ) {
    for (o = 1; t.nfile_upload_list.length > o; o++)
      (Select_File_Datas = t.nfile_upload_list.options[o].value),
        (Select_File_Datas_ary = Select_File_Datas.split("||")),
        console.debug(Select_File_Datas_ary),
        console.log(Select_File_Datas_ary),
        Select_File_Datas_ary.length > 2 &&
          ((File_Type_name = Select_File_Datas_ary[2].substr(
            Select_File_Datas_ary[2].length - 4
          )),
          (Real_file_type_lower = File_Type_name.substr(1, 3)),
          "." == File_Type_name.substr(0, 1) &&
            "nds" == Real_file_type_lower.toLowerCase() &&
            ((t.nfile_upload_list.options[o] = null), (Check_nds = 1)));
    if (
      (Check_nds && alert("ì íí íì¼ì¤ NDSíì¼ì´ ìì´ ì í íì¼ìì ì ì¸ëììµëë¤."),
      t.nfile_upload_list.length > 1)
    ) {
      for (o = 1; t.nfile_upload_list.length > o; o++)
        a[o - 1] = t.nfile_upload_list.options[o].value;
      lastIndex = o;
      var i = t.nfile_upload_list.options[1].value.split("\\"),
        n = i[i.length - 1].split("||");
      (t.filename.value = n[0]),
        (t.nfile_files.value = ""),
        (t.nfile_files.value = a.join("<>"));
      for (var s = parseInt("0"), o = 0; a.length > o; o++) {
        var r = a[o],
          l = r.split("||");
        0 == o && (t.filepath.value = l[2]),
          "-1" != l[1] && (s += parseInt(l[1]));
      }
      t.size.value = s;
      var c = Math.round(t.size.value / 1045576, 0, ""),
        d = Math.round(c / 10);
      (d = 10 * Math.round(d / 10)),
        10 > d && (d = 10),
        (t.cash.value = d),
        jQuery("#uploadFileSize").html(parseSize(t.size.value, 2));
    }
    return !1;
  }
}
function nfile_UploadSelect(e) {
  var t = document[Name_Insert_Form];
  for (i = 1; t.nfile_upload_list.length > i; i++)
    t.nfile_upload_list.options[i].selected = "select" == e ? !0 : !1;
}
function nfile_UploadCheck(e) {
  var t = document[Name_Insert_Form];
  for (i = 1; t.nfile_upload_list.length > i; i++)
    if (t.nfile_upload_list[i].text == e) return i;
  return 0;
}
function nfile_UploadRemove() {
  var e = document[Name_Insert_Form],
    t = 0;
  for (i = e.nfile_upload_list.length - 1; i > 0; i--)
    if (
      1 == e.nfile_upload_list.options[i].selected &&
      ((info = e.nfile_upload_list[i].value.split("||")), "-1" == info[1])
    )
      for (j = 1; e.nfile_upload_list.length > j; j++)
        e.nfile_upload_list[j].text.indexOf(e.nfile_upload_list[i].text) >= 0 &&
          (e.nfile_upload_list.options[j].selected = !0);
  for (i = e.nfile_upload_list.length - 1; i > 0; i--)
    if (1 == e.nfile_upload_list.options[i].selected) {
      for (j = i; e.nfile_upload_list.length - 1 > j; j++)
        (e.nfile_upload_list[j].value = e.nfile_upload_list[j + 1].value),
          (e.nfile_upload_list[j].text = e.nfile_upload_list[j + 1].text);
      t++;
    }
  (e.nfile_upload_list.length -= t), nfile_UploadSelect("unselect");
}
function nfile_OpenUpLoad(e, t) {
  WebCtrl.OpenUpLoad(e + "/" + t);
}
function nfile_OpenDownLoad(e) {
  WebCtrl.OpenDownLoad(e);
}
function nfile_OpenUpLoad1(e, t, a, i) {
  return "file" == i
    ? (WebCtrl.OpenUpLoad(e + "/" + t + "/" + a), void 0)
    : "folder" == i
    ? (WebCtrl.OpenUpLoad(e + "/" + t + "/" + a + "\\"), void 0)
    : void 0;
}
function nfile_OpenDownLoad1(e, t, a) {
  WebCtrl.OpenDownLoad(e + "/" + t + "/" + a);
}
function open_check() {
  try {
    return WebCtrl.UpdateOpenCheck(), !0;
  } catch (e) {
    return !1;
  }
}
function openPdsUploadInsert(e) {
  WebCtrl.ShowDlgOpenFile();
  var e = document[Name_Insert_Form],
    t = [];
  if (e.nfile_upload_list.length > 1) {
    for (n = 1; e.nfile_upload_list.length > n; n++)
      (t[n - 1] = e.nfile_upload_list.options[n].value),
        n > 1 &&
          ((e.nfile_upload_list.options[n - 1].selected = "unselect"),
          nfile_UploadRemove());
    lastIndex = n;
    var a = e.nfile_upload_list.options[1].value.split("\\");
    (e.filename.value = a[a.length - 1]),
      (e.nfile_files.value = ""),
      (e.nfile_files.value = t.join("<>"));
    for (var i = parseInt("0"), n = 0; t.length > n; n++) {
      var s = t[n],
        o = s.split("||");
      0 == n && (e.filepath.value = o[2]),
        "-1" != o[1] && (i += parseInt(o[1]));
    }
    e.size.value = i;
    var r = Round(e.size.value / 1045576, 0, "");
    if (
      "ADT" == document.all.category1.value ||
      "req" == document.all.category1.value
    )
      var l = Math.round(r / 10);
    else var l = Math.round(r / 10);
    var l = 10 * Math.round(l / 10);
    if (10 > l) var l = 10;
  }
}
function openPdsUploadInsert1(e) {
  var t = document[Name_Insert_Form],
    a = [];
  if (
    ("file" == e
      ? WebCtrl.ShowDlgOpenFile()
      : "folder" == e && WebCtrl.ShowDlgOpenFolder(),
    (t.filetype.value = e),
    t.filepath.value && t.nfile_upload_list.length > lastIndex)
  ) {
    for (t.filepath.value = "", s = 1; lastIndex > s; s++)
      t.nfile_upload_list.options[s].selected = !0;
    nfile_UploadRemove();
  }
  if (((lastIndex = 30), t.nfile_upload_list.length > lastIndex)) {
    for (
      alert("íì¼ëª©ë¡ì ìµë " + lastIndex + "ê°ê¹ì§ë§ ë±ë¡ ê°ë¥í©ëë¤."), s = 1;
      lastIndex > s;
      s++
    )
      t.nfile_upload_list.options[s].selected = !0;
    nfile_UploadRemove(), (t.filepath.value = "");
  }
  if (t.nfile_upload_list.length > 1) {
    for (s = 1; t.nfile_upload_list.length > s; s++)
      (a[s - 1] = t.nfile_upload_list.options[s].value),
        "file" == e &&
          s > 1 &&
          ((t.nfile_upload_list.options[s - 1].selected = "unselect"),
          nfile_UploadRemove());
    lastIndex = s;
    var i = t.nfile_upload_list.options[1].value.split("\\");
    (t.filename.value = i[i.length - 1]),
      (t.nfile_files.value = ""),
      (t.nfile_files.value = a.join("<>"));
    for (var n = parseInt("0"), s = 0; a.length > s; s++) {
      var o = a[s],
        r = o.split("||");
      0 == s && (t.filepath.value = r[2]),
        "-1" != r[1] && (n += parseInt(r[1]));
    }
    t.size.value = n;
    var l = Round(t.size.value / 1045576, 0, "");
    if (
      "ADT" == document.all.category1.value ||
      "" != document.all.link_idx.value ||
      document.all.chkGrade.value > 1
    )
      var c = Math.round(l / 10);
    else var c = Math.round(l / 10);
    var c = 10 * Math.round(c / 10);
    if (10 > c) var c = 10;
  }
}
function nfile_Upload_Insert_Re(e) {
  if (nfile_check()) {
    var t = document.uploadForm,
      a = [];
    if (
      ((t.filetype.value = e),
      t.filepath.value && t.nfile_upload_list.length > lastIndex)
    ) {
      for (t.filepath.value = "", s = 1; lastIndex > s; s++)
        t.nfile_upload_list.options[s].selected = !0;
      alert(1), nfile_UploadRemove();
    }
    if (t.nfile_upload_list.length > 1) {
      for (s = 1; t.nfile_upload_list.length > s; s++)
        a[s - 1] = t.nfile_upload_list.options[s].value;
      lastIndex = s;
      var i = t.nfile_upload_list.options[1].value.split("\\");
      (t.filename.value = i[i.length - 1]),
        (t.nfile_files.value = ""),
        (t.nfile_files.value = a.join("<>"));
      for (var n = parseInt("0"), s = 0; a.length > s; s++) {
        var o = a[s],
          r = o.split("||");
        0 == s && (t.filepath.value = r[2]),
          "-1" != r[1] && (n += parseInt(r[1]));
      }
      t.size.value = n;
      var l = Round(t.size.value / 1045576, 0, "");
      if (
        "ADT" == document.all.category1.value ||
        "" != document.all.link_idx.value ||
        document.all.chkGrade.value > 1
      )
        var c = Math.round(l / 10);
      else var c = Math.round(l / 10);
      var c = 10 * Math.round(c / 10);
      if (10 > c) var c = 10;
      (t.cash.value = c),
        ($("div_size").innerHTML = parseSize(t.size.value, 2));
    }
  }
}
function nfile_Upload_Insert_Hash(e) {
  if (nfile_check()) {
    var t = document.uploadForm;
    "file" == e
      ? WebCtrl.ShowDlgFile()
      : "folder" == e && WebCtrl.ShowDlgFolder();
    var a = [];
    if (
      ((t.filetype.value = e),
      t.filepath.value && t.nfile_upload_list.length > lastIndex)
    ) {
      for (t.filepath.value = "", o = 1; lastIndex > o; o++)
        t.nfile_upload_list.options[o].selected = !0;
      nfile_UploadRemove();
    }
    if (t.nfile_upload_list.length > 1) {
      for (o = 1; t.nfile_upload_list.length > o; o++)
        a[o - 1] = t.nfile_upload_list.options[o].value;
      lastIndex = o;
      var i = t.nfile_upload_list.options[1].value.split("\\"),
        n = i[i.length - 1].split("||");
      (t.filename.value = n[0]),
        (t.nfile_files.value = ""),
        (t.nfile_files.value = a.join("<>"));
      for (var s = parseInt("0"), o = 0; a.length > o; o++) {
        var r = a[o],
          l = r.split("||");
        0 == o && (t.filepath.value = l[2]),
          "-1" != l[1] && (s += parseInt(l[1]));
      }
      t.size.value = s;
    }
  }
}
function nfile_ChkMureka(e, t, a, i, n, s, o, r, l, c, d, u, _, p, m, h) {
  console.log("==============nfile_ChkMureka========="),
    null == APP && (APP = new FC_APP()),
    1 == isBrowserIe()
      ? WebCtrl.ChkMureka(e, t, a, i, n, s, o, r, l, c, d, u, _, p, m, h)
      : document
          .getElementById(APP.DEFINE.varNP_ID)
          .ChkMureka(e, t, a, i, n, s, o, r, l, c, d, u, _, p, m, h);
}
function do_down(e, t) {
  if (!m_id) return do_login_layer(), void 0;
  if (-1 != agt.indexOf("msie") || isIE11) {
    if (!nfile_check())
      return (
        alert(
          "ì»¨íì¸  ë¤ì´ë¡ëë¥¼ ìí´ìë ìë¨ì ë¸ëì Active X\níì¼ì ì¡ ê´ë¦¬ì íë¡ê·¸ë¨ì´ ì¤ì¹ ëì´ì¼ í©ëë¤."
        ),
        windowOpenCenter(
          "/html/guide/multi_guide1.php",
          "uploader",
          "680",
          "800",
          "scrollbars=yes"
        ),
        void 0
      );
  } else newcheckInstall();
  murekacheck(e, t);
}
function Round(e, t, a) {
  if (0 == t) return Math.round(e);
  if (t > 0) {
    for (var i = "1", n = 0; t > n; n++) i += "0";
    var s = Number(i);
    return "F" == a ? Math.round(e * s) / s : Math.round(e / s) * s;
  }
}
function parseSize(e, t) {
  var a = parseInt(e);
  return 0 == a
    ? "0Bytes"
    : 1024 > a
    ? a + "Bytes"
    : Math.pow(1024, 2) > a
    ? Round(a / 1024, t, "F") + "KB"
    : Math.pow(1024, 3) > a
    ? Round(a / 1048576, t, "F") + "MB"
    : Math.pow(1024, 4) > a
    ? Round(a / 1048576e3, t, "F") + "GB"
    : Round(a / Math.pow(1024, 4), t, "F") + "TB";
}
function Image_Multi_Upload_cancel() {}
function Image_Multi_Upload_complute(e) {
  for (
    File_names_ary = e.split("~@~"), str = "", str2 = "", rof = 0;
    File_names_ary.length > rof;
    rof++
  )
    File_names_ary[rof] &&
      ((str +=
        '<div style="padding:5px;"><img src="/_tmp/' +
        Ymd +
        "/" +
        File_names_ary[rof] +
        '"></div>'),
      (str2 +=
        '<input type="hidden" name="contents_images[]" value="' +
        File_names_ary[rof] +
        '">'));
  geditor_contents.get_range(),
    geditor_contents.insert_editor(str),
    (document.getElementById("div_contents_images").innerHTML += str2);
}
function initMoving(e, t, a, i) {
  if (!e) return !1;
  var n = e;
  (n.initTop = t),
    (n.topLimit = a),
    (n.bottomLimit =
      Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      ) -
      i -
      n.offsetHeight),
    (n.style.position = "absolute"),
    (n.top = n.initTop),
    (n.getTop =
      "number" == typeof window.pageYOffset
        ? function () {
            return window.pageYOffset;
          }
        : "number" == typeof document.documentElement.scrollTop
        ? function () {
            return Math.max(
              document.documentElement.scrollTop,
              document.body.scrollTop
            );
          }
        : function () {
            return 0;
          }),
    (n.getHeight = self.innerHeight
      ? function () {
          return self.innerHeight;
        }
      : document.documentElement.clientHeight
      ? function () {
          return document.documentElement.clientHeight;
        }
      : function () {
          return 500;
        }),
    (n.move = setInterval(function () {
      (pos =
        n.initTop > 0
          ? n.getTop() + n.initTop
          : n.getTop() + n.getHeight() + n.initTop),
        pos > n.bottomLimit && (pos = n.bottomLimit),
        n.topLimit > pos && (pos = n.topLimit),
        (interval = n.top - pos),
        (n.top = n.top - interval / 4),
        (n.style.top = n.top + "px");
    }, 30));
}
function htmlspecialchars_decode(e, t) {
  var a = 0,
    i = 0,
    n = !1;
  t === void 0 && (t = 2),
    (e = ("" + e).replace(/&lt;/g, "<").replace(/&gt;/g, ">"));
  var s = {
    ENT_NOQUOTES: 0,
    ENT_HTML_QUOTE_SINGLE: 1,
    ENT_HTML_QUOTE_DOUBLE: 2,
    ENT_COMPAT: 2,
    ENT_QUOTES: 3,
    ENT_IGNORE: 4,
  };
  if ((0 === t && (n = !0), "number" != typeof t)) {
    for (t = [].concat(t), i = 0; t.length > i; i++)
      0 === s[t[i]] ? (n = !0) : s[t[i]] && (a |= s[t[i]]);
    t = a;
  }
  return (
    t & s.ENT_HTML_QUOTE_SINGLE && (e = e.replace(/&#0*39;/g, "'")),
    n || (e = e.replace(/&quot;/g, '"')),
    (e = e.replace(/&amp;/g, "&"))
  );
}
function onlyNumber() {
  (48 > event.keyCode || event.keyCode > 57) && (event.returnValue = !1);
}
function go_cat_preview(e, t) {
  if ("new" == t)
    var t = 386,
      a = 586;
  else var a = 643;
  var i = currcatpage;
  "right" == e
    ? 5 > currcatpage && currcatpage++
    : "left" == e && currcatpage > 1 && currcatpage--,
    i == currcatpage && alert("ë¤ì´ë¡ëí ê°ìí´ì£¼ì¸ì."),
    $("#catoon_clickarea").css("display", "block"),
    $("#preview_comment").html("ë¤ì´ë¡ë í ê°ìí´ ì£¼ì¸ì."),
    $("#preview_layer1").addClass("cartoon_layer_s");
  var n =
    "http://cm.filecast.co.kr/image.php?fno=" +
    currfno +
    "&fhs=" +
    currfhs +
    "&haf=0&dno=" +
    currcatpage;
  $("#playerBsylefpxSmqI").css("background-image", "url(" + n + ")"),
    $("#playerBsylefpxSmqI").css("border", "solid 0px red"),
    $("#playerBsylefpxSmqI").css("width", a),
    $("#playerBsylefpxSmqI").css("height", t),
    $("#playerBsylefpxSmqI").css("resize", "both"),
    $("#playerBsylefpxSmqI").css("-webkit-background-size", "cover"),
    $("#playerBsylefpxSmqI").css("-moz-background-size", "cover"),
    $("#playerBsylefpxSmqI").css("-o-background-size", "cover"),
    $("#playerBsylefpxSmqI").css("background-size", "cover"),
    $("#playerBsylefpxSmqI").css("background-repeat", "no-repeat"),
    $("#playerBsylefpxSmqI").css("background-position", "top");
}
function getNPVersion() {
  return null == APP && (APP = new FC_APP()), APP.DEFINE.varNPVersion;
}
function getNPFilePath() {
  return (
    null == APP && (APP = new FC_APP()),
    APP.DEFINE.varHostName + APP.DEFINE.varNPFilePath
  );
}
function getNPMIME() {
  return null == APP && (APP = new FC_APP()), APP.DEFINE.varNPMIME;
}
function isNPInstall() {
  var e = !1,
    t = navigator.mimeTypes[getNPMIME()];
  if (t) {
    var a = t.enabledPlugin;
    e = a ? !0 : !1;
  } else e = !1;
  return e;
}
function isNPLoaded(e) {
  var t = !1,
    a = document.getElementById(e).Install;
  return (
    document.getElementById(e).Version, (t = "OK" != a && "ok" != a ? !1 : !0)
  );
}
function isNPUpdate(e) {
  var t = !1;
  if (isNPLoaded(e)) {
    var a = document.getElementById(e).Version;
    getNPVersion() != a && (t = !0);
  } else t = !1;
  return t;
}
function newcheckInstall(e) {
  isNPInstall(e)
    ? isNPLoaded(e.DEFINE.varNP_ID) &&
      isNPUpdate(e.DEFINE.varNP_ID) &&
      installPlugin(e)
    : (alert("Please install"), installPlugin(e));
}
function installPlugin(e) {
  console.log("installPlugin");
  var t = navigator.userAgent.toLowerCase();
  -1 != t.indexOf("chrome")
    ? (console.log("chrome"),
      windowOpenCenter(
        e.DEFINE.SERVER_OLDURL + "/guide/multi_guide1.php",
        "uploader",
        "680",
        "800",
        "scrollbars=yes"
      ))
    : -1 != t.indexOf("firefox")
    ? windowOpenCenter(
        e.DEFINE.SERVER_OLDURL + "/guide/multi_guide1.php",
        "uploader",
        "680",
        "800",
        "scrollbars=yes"
      )
    : -1 != t.indexOf("safari") &&
      windowOpenCenter(
        e.DEFINE.SERVER_OLDURL + "/guide/multi_guide1.php",
        "uploader",
        "680",
        "800",
        "scrollbars=yes"
      );
}
function Commentlist(e, t, a, i) {
  (this.psase_int = [
    "gift",
    "good",
    "idx",
    "link_idx",
    "state",
    "thread",
    "userid",
    "depth",
    "down_coupon",
  ]),
    (this.bbs_type = e),
    (this.order = a),
    (this.m_idx = parseInt(i.m_idx)),
    isDefined(t.m_idx) && (this.m_idx = parseInt(t.m_idx)),
    (this.m_level = parseInt(i.m_level)),
    (this.owner_idx = parseInt(i.owner_idx)),
    (this.bbs_idx = parseInt(i.bbs_idx)),
    (this.is_seller = !1),
    (this.is_own = !1),
    (this.is_editer = !1),
    (this.best_order = 3),
    this.setData(t);
}
function Contentslist(e, t, a, i) {
  (this.is_img_lazy = !1),
    (this.order = a),
    (this.max_order = i),
    (this.is_event_sale = !1),
    (this.event_sale_price = 0),
    (this.psase_int = [
      "regdate",
      "purchase_cnt",
      "flag_adult",
      "flag_hd",
      "flag_vip",
      "size",
      "cate1",
      "chkcopy",
      "sale_cash",
      "event_sale_price",
    ]),
    (this.fail_img = [
      "http://pic.filecast.co.kr///.gif",
      "http://pic.filecast.co.kr/",
    ]),
    (this.movie_cate = [1, 2, 3]),
    (this.cartoon_cate = [4, 9]),
    (this.stream_img = null),
    (this.list_img_thumbnail = null),
    (this.newTime = t),
    (this.thumb_img = null),
    (this.url_img_thumbnail = null),
    (this.url_img_first = null),
    (this.sale_cash = 0),
    this.setData(e);
}
function linkContentsList(e, t) {
  (this.order = t),
    (this.psase_int = ["cate1", "cate2", "idx", "rank", "show_age"]),
    this.setData(e);
}
function linkContentsChapterList(e, t) {
  (this.order = t),
    (this.psase_int = ["cate1", "cate2", "idx", "rank", "show_age"]),
    this.setData(e);
}
function ContentsRecomm() {}
function Eventlist(e, t, a) {
  (this.psase_int = ["sort", "status", "idx", "type"]),
    (this.style_type = {
      mileage: 0,
      attend: 1,
      facebook: 2,
      seller: 3,
      app: 4,
      child: 6,
      cross: 5,
      pro1: 1,
    }),
    (this.order = t),
    (this.getData = a),
    (this.is_adult = 0),
    this.setData(e);
}
function Couponlist(e, t, a) {
  (this.psase_int = [
    "idx",
    "max_count",
    "status",
    "used_count",
    "cash_bonus",
    "coupon_type",
    "display_status",
  ]),
    (this.order = t),
    (this.getData = a),
    this.setData(e);
}
function Ranklist(e, t, a) {
  (this.psase_int = ["board_idx", "cate1", "idx", "rank"]),
    (this.order = t),
    (this.type = a),
    this.setData(e);
}
function FreePointlist(e, t, a) {
  (this.psase_int = ["sort", "status", "idx", "type"]),
    (this.style_type = {
      mileage: 0,
      attend: 1,
      facebook: 2,
      seller: 3,
      app: 4,
      child: 6,
      cross: 5,
      pro1: 1,
    }),
    (this.order = t),
    (this.getData = a),
    (this.is_adult = 0),
    this.setData(e);
}
function MyPointList(e, t, a) {
  (this.psase_int = [
    "gift",
    "good",
    "idx",
    "link_idx",
    "state",
    "thread",
    "userid",
    "depth",
    "down_coupon",
  ]),
    (this.order = t),
    (this.kind = a),
    this.setData(e);
}
function FaqList(e, t, a) {
  (this.psase_int = [
    "gift",
    "good",
    "idx",
    "link_idx",
    "state",
    "thread",
    "userid",
    "depth",
    "down_coupon",
  ]),
    (this.order = t),
    (this.kind = a),
    this.setData(e);
}
function NoticeList(e, t, a) {
  (this.psase_int = [
    "gift",
    "good",
    "idx",
    "link_idx",
    "state",
    "thread",
    "userid",
    "depth",
    "down_coupon",
  ]),
    (this.order = t),
    (this.kind = a),
    this.setData(e);
}
function Friendlist(e, t, a) {
  (this.psase_int = [
    "gift",
    "good",
    "idx",
    "link_idx",
    "state",
    "thread",
    "userid",
    "depth",
    "down_coupon",
  ]),
    (this.order = t),
    (this.kind = a),
    this.setData(e);
}
function FC_member(e, t) {
  0 == isDefined(t) && (t = !1),
    (this.flag_uploader = 0),
    (this.isMobile = t),
    (this.psase_int = [
      "idx",
      "flag_uploader",
      "regdate",
      "purchase_cnt",
      "flag_adult",
      "flag_child",
      "flag_authentic",
      "m_level",
      "cash_base",
      "cash_bonus",
      "apples",
    ]),
    (this.global_code = [
      "US",
      "CA",
      "DE",
      "FR",
      "GB",
      "SG",
      "PH",
      "VN",
      "TH",
      "CN",
      "JP",
      "AU",
      "NZ",
    ]),
    (this.remain_subscription = 0),
    (this.down_coupon = 0),
    (this.apples = 0),
    (this.lv = -1),
    (this.member_vip_charge = !1),
    this.setData(e);
}
function Notelist(e, t, a) {
  (this.psase_int = [
    "gift",
    "good",
    "idx",
    "link_idx",
    "state",
    "thread",
    "userid",
    "depth",
    "down_coupon",
  ]),
    (this.order = t),
    (this.kind = a),
    this.setData(e);
}
void 0 == window.console &&
  (console = { log: function () {}, debug: function () {} }),
  void 0 == window.console.debug && (console.debug = function () {});
var APP = null,
  FC_LAZY = null,
  APP_PAGE = null;
IS_MOBILE = !1;
var oEditors = [],
  FC_ROUTER = function (e) {
    function t() {
      var t = jQuery.deparam.fragment();
      e.router(e, t);
    }
    jQuery(window).on("hashchange", t), t();
  };
(FC_DEFINE.prototype.getDomainName = function (e) {
  return (
    (e = e.replace("m.", "")),
    (e = e.replace("blue.", "")),
    (e = e.replace("tam.", ""))
  );
}),
  (FC_DEFINE.prototype.setHostData = function () {
    var e = window.location.host;
    (this.HOST_NAME = e), (this.SERVER_DOMAIN = this.getDomainName(e));
  }),
  (FC_DEFINE.prototype.checkFC = function () {
    var e = gCookie.get("is_check");
    this.isFC = "1" == e ? !0 : !1;
  }),
  (FC_DEFINE.prototype.setDefaultData = function () {
    (this.DEBUG_MSG = this.isFC),
      (this.DEBUG_CONSOLE_MSG = this.isFC),
      (this.USE_CUSTOM_URL = !0),
      (this.ADULT_OPEN = !1),
      (this.MOBILE_VIDEO_JS_USE = !1),
      (this.MOBILE_MEDIAELEMENT_JS_USE = !0),
      (this.OPEN_NOVEL_CATEGORY = 1 == this.isMobile ? !0 : !1),
      (this.SERVER_ROOT = this.getServerHost(!1)),
      (this.SERVER_SSL_ROOT = this.getServerHost(!0)),
      (this.CI_ROOT = this.SERVER_ROOT + "/www"),
      (this.MOBILE_ROOT = this.SERVER_ROOT + "/mobile"),
      (this.INTRO = this.ROOT + "/index.php"),
      (this.HTML_ROOT = this.SERVER_ROOT + "/html"),
      (this.NON_HTML_ROOT = this.SERVER_ROOT + "/html/home/no_html5/"),
      (this.FILE_ROOT = "http://static.filecast.co.kr"),
      (this.JS = this.FILE_ROOT + "/_js"),
      (this.CSS = this.FILE_ROOT + "/_css"),
      (this.IMG = this.FILE_ROOT + "/_img"),
      (this.LIB = this.FILE_ROOT + "/_lib"),
      (this.TEMPLATE = this.FILE_ROOT + "/_template"),
      (this.PREVIEW_IMG_SERVER = "http://pic.filecast.co.kr/preview"),
      (this.UPLOAD_IMG_SERVER = "http://pic.filecast.co.kr"),
      (this.NIELSEN_RATING_URL = this.SERVER_ROOT + "/html/banner/nielsen.php"),
      (this.SERVER_PROTOCOL = this.SERVER_ROOT + "/www"),
      (this.SERVER_SSL_PROTOCOL = this.SERVER_SSL_ROOT + "/www"),
      (this.SERVER_NEWURL = this.SERVER_ROOT + "/www"),
      (this.SERVER_OLDURL = this.SERVER_ROOT + "/html"),
      (this.ADD_DOMAIN = "http://filecast.kr"),
      this.setPageUrl(),
      (this.APP_URL_SETUP_FILE =
        "http://app.filecast.co.kr/app/FileCast_downloader.exe"),
      (this.APP_URL_SETUP_UPLOADER_FILE =
        "http://app.filecast.co.kr/app/FileCast_uploader.exe"),
      (this.APP_URL_AOS_APK_FILE =
        "http://app.filecast.co.kr/app/aos/v14/filecast_v14.apk"),
      (this.APP_AOS_ID = "com.tidyweb.filecast"),
      (this.APP_IOS_ID = "1184690297"),
      (this.APP_IOS_VERSION = "1"),
      (this.APP_URL_SETUP_IOS =
        "itms-appss://itunes.apple.com/kr/app/id" + this.APP_IOS_ID + "?mt=8"),
      (this.APP_URL_SETUP_AOS = "market://details?id=" + this.APP_AOS_ID),
      (this.APP_URL_SETUP_PC =
        "https://play.google.com/store/apps/details?id=" + this.APP_AOS_ID),
      (this.APP_URL_OPEN_AOS =
        "intent://filecast#Intent;scheme=filecastApp;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=" +
        this.APP_AOS_ID +
        ";end"),
      (this.APP_URL_OPEN_IOS = "filecast://"),
      (this.AX_DOWNLOAD_SERVER = this.FILE_ROOT + "/app"),
      (this.AX_VERSION = "2015,12,8,1"),
      (this.AX_CODEBASE = this.getAxCodeBase()),
      (this.AX_CLASSID = "clsid:E09B2580-4DF3-4FF4-8060-7B4F7A8A9124"),
      (this.AX_PROGID = "WebhardWebControl.FileCast"),
      (this.varNP_ID = "NKWebhard"),
      (this.varNPVersion = "1.0.0.4"),
      (this.varNPMIME = "application/filecast-download-plugin"),
      (this.varNPFilePath = "/setup/setupWebControl.exe"),
      (this.varHostName = "filecast.co.kr"),
      (this.sns_facebook_id = "553739901455260");
  }),
  (FC_DEFINE.prototype.getServerHost = function (e) {
    var t = window.location.host,
      a = "http://" + t;
    if (1 == e) {
      var i = "https://" + t,
        n = gCookie.get("ssl_server_type");
      return (
        "1" == n
          ? (i = a)
          : "m.filecast.co.kr" == t
          ? (i = "https://filecast.co.kr")
          : "filecast.kr" == t || "m.filecast.kr" == t
          ? (i = a)
          : ("tam.filecast.co.kr" == t || "blue.filecast.co.kr" == t) &&
            (i = a),
        i
      );
    }
    return a;
  }),
  (FC_DEFINE.prototype.setAdultSite = function () {
    if ("filecast.kr" == this.HOST_NAME || "m.filecast.kr" == this.HOST_NAME)
      return (this.ADULT_OPEN = !1), void 0;
    var e = this.getStorageData(this.STORAGE.SERVER_ADULT);
    this.ADULT_OPEN = "NO" == e ? !1 : !0;
  }),
  (FC_DEFINE.prototype.getStorageData = function (e) {
    var t = null;
    if (1 == this.isMobile && "undefined" != typeof Storage)
      var t = localStorage.getItem(e);
    else var t = gCookie.get(e);
    return t;
  }),
  (FC_DEFINE.prototype.setStorageData = function (e, t, a) {
    if (1 == this.isMobile && "undefined" != typeof Storage)
      localStorage.setItem(e, t);
    else {
      var i = 100;
      1 == isDefined(a) && (i = a), gCookie.set(e, t, i);
    }
    return !0;
  }),
  (FC_DEFINE.prototype.delStorageData = function (e) {
    return (
      1 == this.isMobile && "undefined" != typeof Storage
        ? localStorage.removeItem(e)
        : gCookie.del(e),
      !0
    );
  }),
  (FC_DEFINE.prototype.setActiveData = function () {
    this.DEVICE_TYPE = this.checkDeviceAgent();
  }),
  (FC_DEFINE.prototype.getAxCodeBase = function () {
    var e =
      this.AX_DOWNLOAD_SERVER +
      "/FileCastWebControl.CAB#version=" +
      this.AX_VERSION;
    return (
      1 == this.is64Platform() &&
        (e =
          this.AX_DOWNLOAD_SERVER +
          "/FileCastWebControlx64.CAB#version=" +
          this.AX_VERSION),
      e
    );
  }),
  (FC_DEFINE.prototype.setAjaxData = function () {
    (this.AJAX_TIMEOUT =
      1 == isBrowserSafari() ? 3e4 : 1 == IsBrowserIE_FC() ? 0 : 3e4),
      (this.AJAX_HTTP_TYPE = "json"),
      (this.AJAX_SEND_TYPE = "POST"),
      (this.AJAX_RETURN_TYPE = "JSON");
  }),
  (FC_DEFINE.prototype.is64Platform = function () {
    return -1 != navigator.userAgent.indexOf("MSIE") &&
      -1 != navigator.userAgent.indexOf("Win64") &&
      -1 != navigator.userAgent.indexOf("x64")
      ? !0
      : !1;
  }),
  (FC_DEFINE.prototype.setValues = function () {
    (this.MIN = {}),
      (this.MAX = {}),
      (this.SIZE = { PREVIEW: { WIDTH: "100%" } });
  }),
  (FC_DEFINE.prototype.setPrice = function () {
    this.PRICE = {};
  }),
  (FC_DEFINE.prototype.setGlobalKey = function () {
    this.GLOBAL = {};
  }),
  (FC_DEFINE.prototype.setStorageKey = function () {
    this.STORAGE = {
      SERVER_TIME: "server_time",
      SERVER_DATE: "server_date",
      SERVER_ADULT: "fc_adult",
      DEVICE_TYPE: "device_type",
      DEVICE_KEY: "device_key",
      USER_AUTO_LOGIN: "fc_user_auto_login",
      USER_EMAIL: "fc_user_email",
      USER_ACCESS_TOKEN: "fc_user_access_token",
      USER_LOGIN_TOKEN: "fc_user_login_token",
      TARGET_MENU: "fc_target_url",
      LOGIN_NEXT_PAGE: "fc_login_next_url",
      LOGIN_NEXT_PAGE_SUB: "fc_login_next_url_sub",
      ADULT_NEXT_PAGE: "fc_adult_next_url",
      USER_PUSH_KEY: "fc_user_push_key",
      USER_DEVICE_KEY: "fc_user_device_key",
    };
  }),
  (FC_DEFINE.prototype.setPageUrl = function () {
    this.LINK = { OLD: {}, NEW: { CONTENTS: this.CI_ROOT + "/contents" } };
  }),
  (FC_DEFINE.prototype.checkDeviceAgent = function () {
    var e = "pc",
      t = /kfapwi|kfthwi|kfsowi|slik|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
        navigator.userAgent.toLowerCase()
      );
    if (t) {
      var a = navigator.userAgent.toLowerCase();
      e =
        a.search("kfapwi") > -1 ||
        a.search("kfthwi") > -1 ||
        a.search("slik") > -1
          ? "mobile"
          : a.search("iphone") > -1 ||
            a.search("ipad") > -1 ||
            a.search("ipod") > -1
          ? "mobile"
          : "mobile";
    } else e = "pc";
    return e;
  }),
  (FC_PROTOCOL.prototype.setProtocolUrl = function () {
    this.URL = {
      HOME: {
        MAIN: "/home/main/",
        COPYRIGHT: "/home/ajax_copyright_list/",
        NIELSEN: "/banner/nielsen.php",
        IS_VIP: "/home/home_is_vip_member_info/",
      },
      CONTENTS: {
        CLIST: "/contents/ajax_list",
        REAL_LIST: "/contents/ajax_real_list",
        VIEW: "/contents/view",
        VIEW2: "/contents/view2",
        START_DOWNLOD: "/file/install_start",
        CHECK_INSTALLED: "/file/install_check",
        UPLOAD_ACTION: "/file/upload_action/",
        FOLLOW_NOVEL_ACTION: "/file/follow_novel_action/",
        EDIT_ACTION: "/file/edit_action",
        DOWN_ACTION: "/download/down_action",
        OPEN_NOVEL_VIEW: "/contents/novel_viewer/",
        OPEN_NOVEL_MOBILE_VIEW: "/contents_m/novel_mobile_viewer/",
        SELLER_CONTENTS: "/contents/seller_contents_list/",
        FAVORITES: "/contents/action_favorites/",
        MOBILE_NEWLIST: "/contents_m/mobile_newest_list/",
        MOBILE_REAL: "/contents_m/mobile_list_top/",
        MOBILE_CATE: "/contents_m/mobile_cate_list/",
        MOBILE_LIST: "/contents_m/mobile_list/",
        MOBILE_FILE_LIST: "/contents_m/mobile_file_list/",
        MOBILE_BBS_CONTENTS: "/contents_m/mobile_bbs_contents/",
        MOBILE_BBS_VIEW: "/contents_m/mobile_view/",
        MOBILE_SELLER_CONTENTS: "/contents_m/mobile_seller_contents_list/",
        RANK_REALTIME: "/contents/rank_realtime/",
        GOOD_CONTENTS_LIST: "/contents/good_contents_list/",
        RANK_YESTERDAY: "/contents/rank_yesterday/",
        FREE_TOP_LIST: "/free/get_ajax_free_top_list/",
        MOBILE_KIDS_LIST: "/contents_m/mobile_kids_list/",
        MOBILE_KIDS_INFO: "/contents_m/mobile_kids_info/",
        MOBILE_KIDS_CHAPTER_LIST: "/contents_m/mobile_kids_chapter_list/",
        MOBILE_KIDS_CHAPTER_VIEW: "/contents_m/mobile_kids_chapter_view/",
        GET_MTON_USERKEY: "/contents/get_mton_userkey/",
        GET_HOW_RECOMM: "/contents/how_recomm_list/",
      },
      CHARGE: {
        CHAGE_METHOD_INFO: "/charge/charge_method_info/",
        GIVE_COUPON: "/charge/give_coupon",
        MILEAGE_CHANGE: "/charge/mileage_change/",
        PAY_BANKBOOK: "/pay/payment_bankbook/",
        PAY_BANK_ACCOUNT_LIST: "/pay/bank_account_list/",
        PAY_REF_INFO: "/charge/get_fc_pay_info/",
      },
      CS: {
        LIST: "/cs/getAjax",
        FAQ_LIST: "/cs/faq/",
        QNA_LIST: "/cs/getQnaAjax",
        QNA_INPUT: "/cs/inputQna",
        ALIM_LIST: "/cs/alim",
        ALIM_LIST_AJAX: "/cs/getAlimAjax",
        ALIM_READ: "/cs/readAlim",
        NOTICE_WRITE: "/cs/input_board",
        NOTICE_DELETE: "/cs/delete_board",
        FAQ_WRITE_FORM: "/cs/faq_write",
        NOTICE_WRITE_FORM: "/cs/notice_write",
        CONTENTS_NOTICE: "/contents_m/get_contents_notice",
        MOBILE_FAQ: "/cs/faq_list/",
        MOBILE_FAQ_LIST: "/cs/faq_idx_list/",
        NOTICE_VIEW_LIST: "/cs/notice_view",
        NOTICE_LIST: "/cs/notice",
      },
      NOTE: {
        NOTE_LIST: "/note/index",
        NOTE_DELETE: "/note/del_note",
        NOTE_READ: "/note/read_note",
        NOTE_SEND: "/note/send_note",
        NOTE_MOBILE_SEND: "/note/send_mobile_note",
        NOTE_LIST_AJAX: "/note/receive_note_ajax",
        NOTE_MOBILE_LIST: "/note/note_list/",
        NOTE_MOBILE_DELETE_LIST: "/note/note_delete_list/",
      },
      REQ: {
        REQUEST_LIST: "/req/rlist",
        REQUEST_LIST_AJAX: "/req/rlist_ajax",
        REQUEST_VIEW: "/req/rview",
        REQUEST_VIEW_AJAX: "/req/rview_ajax",
        REQUEST_WRITE_FORM: "/req/rwrite",
        REQUEST_WRITE: "/req/rwriteProc",
        REQUEST_COMMENT_WRITE: "/req/r_comment_write",
        REQUEST_COMMENT_LIST: "/req/r_comment_ajax",
        REQUEST_COMMENT_DEL: "/req/r_comment_del",
      },
      MYPAGE: {
        INDEX: "/mypage/index",
        PURCHASE_LIST: "/mypage/purchase/",
        PURCHASE_AJAX_LIST: "/mypage/purchase_ajax",
        PURCHASE_DELETE: "/mypage/deletePurchase",
        QNA_AJAX_LIST: "/mypage/qna_ajax",
        COMMNET_INPUT: "/mypage/inputComment",
        LIKE_LIST: "/mypage/like",
        LIKE_DELETE: "/mypage/deleteLike",
        REQUEST_LIST: "/mypage/request",
        REQUEST_VIEW: "/mypage/requestView",
        REQUEST_WRITE_FORM: "/mypage/rwrite",
        REQUEST_DELETE: "/mypage/deleteReq",
        CHARGE_LOG_LIST: "/mypage/charge_log",
        CHARGE_LOG_MOBILE_LIST: "/mypage/mypoint_list",
        POINT_LOG_LIST: "/mypage/point_log",
        POINT_LOG_AJAX_LIST: "/mypage/point_log_ajax",
        POINT_LOG_DELETE: "/mypage/deletePointLog",
        COUPON_LOG_LIST: "/mypage/coupon_log",
        MILEAGE_LOG_LIST: "/mypage/mileage_log",
        MILEAGE_AJAX_LIST: "/mypage/mileage_ajax",
        PWD_CHANGE: "/mypage/pwd_change",
        PWD_CHANGE_PROC: "/mypage/pwd_change_proc",
        NICK_OVERLAP_CHECK: "/mypage/nickOverlapCheck",
        SELLER_REQUEST: "/mypage/seller_request",
        SELLER_REQUEST_PROC: "/mypage/seller_requestProc",
        LEAVE_PAGE: "/mypage/leave",
        LEAVE_PROC: "/mypage/leaveProc",
        CHILD_PROC: "/mypage/child_proc",
        MOBILE_MYVIEW: "/mypage/mobile_myview_list/",
        MOBILE_MYZZIM: "/mypage/mobile_myzzim_list/",
        MOBILE_NOTICE: "/cs/notice_list/",
        MOBILE_NOTICE_LIST: "/cs/notice_idx_list/",
      },
      SELLER: {
        UPLOAD_LIST: "/seller/index",
        UPLOAD_LIST_PROC: "/seller/uploadListProc",
        REPLY_LIST: "/seller/reply",
        ITEM_LIST: "/seller/item",
        PAYMENT_LIST: "/seller/pointPayment",
        HISTORY_LIST: "/seller/history",
        BEST_SEARCH_WORD: "/seller/bestWord",
        NOTICE_LIST: "/seller/notice",
        NOTICE_VIEW_LIST: "/seller/notice_view",
        NOTICE_WRITE_FORM: "/seller/notice_write",
        ITEM_RANKUP_BUY: "/seller/item_buy",
        GRADE_UP: "/seller/grade_up",
        SEND_COUPON: "/seller/send_coupon/",
        M_CONTENT_LIST: "/seller/mobile_seller_pds/",
        M_CONTENT_LIST_AJAX: "/seller/mobile_seller_pds_ajax/",
        M_NICKNAME2IDX: "/seller/mobile_nickname2idx/",
      },
      MEMBER: {
        CHECK_UNIQUE: "/user/check_unique_email/",
        USER_LOGIN: "/user/user_login/",
        CHECK_LOGIN: "/user/check_login/",
        M_USER_LOGIN: "/user/user_login/",
        USER_LOGIN_CHECK: "/user/user_login_check/",
        USER_LOGOUT: "/user/logout_ajax/",
        USER_CREATE: "/user/create/",
        CHANGE_GNG: "/member/gng_change/",
        REALNAME_AUTH: "/member/realname_confirm",
        FIND_PWD: "/member/find_password",
        FIND_EMAIL: "/member/find_email",
        SAVE_LOG: "/user/save_user_log/",
      },
      LOGIN: { SERVER_LIST: "/n_server/status" },
      THEME: {
        LIST_GROUP: "/theme/theme_group",
        LIST_CATE: "/theme/theme_cate",
        LIST_DETAIL: "/theme/theme_detail",
        LIST_DETAIL_SEARCH: "/theme/theme_detail_list",
        VOTE: "/theme/theme_vote/",
        MOBILE_MAIN: "/theme/m_main/",
        MOBILE_CATE_LIST: "/theme/m_theme_cate/",
      },
      MOVIES: { M_LIST: "/movies/m_list/" },
      SEARCH: {
        INDEX: "/search/",
        MOBILE_INDEX: "/index.php",
        ACTION: "/search/action/",
        BRO_MORE: "/search/get_ajax_more_broadcast_list/",
        BRO_MORE_ALL: "/search/get_ajax_more_broadcast_list_all/",
        GET_BBS_IDX: "/search/get_ajax_bro_view_idx/",
        CALL_BC_VOTE: "/search/call_bro_vote/",
        SELLER_FILE_AJAX: "/search/seller_file_ajax/",
      },
      COUPON: {
        REGISTER: "/coupon/register/",
        LIST: "/coupon/ajax_clist/",
        CU_REGISTER: "/coupon/cu_register/",
      },
      COMMENT: {
        LIST: "/comment/clist/",
        LIST_ALL: "/comment/clist_all/",
        BBS_WRITE: "/comment/write_bbs/",
        NOTICE_WRITE: "/comment/write_notice/",
        REPLY: "/comment/reply/",
        DEL: "/comment/del/",
        GOOD: "/comment/good/",
        REPORT: "/comment/report/",
      },
      EVENT: {
        VIEW: "/event/view/",
        LIST: "/event/ajax_event_list/",
        MOVE: "/event/ajax_view_move/",
        ATTEND_LIST: "/event/attend_mydata",
        ATTEND_JOIN: "/event/attend_join/",
        FACEBOOK_JOIN: "/event/facebook_join/",
        MOBILE_VIEW: "/event/ajax_mobile_view/",
        MOBILE_HTML_VIEW: "/event/m_view/",
        AUTH_LOGIN_CHECK: "/event_action/auth_login_check/",
        AUTH_LOGIN_CHECK_FOC: "/event_action/auth_login_check_foc/",
        GIVE_FIXED_CHARGE: "/event_action/give_fixed_charge_event/",
        SNS_REG: "/event_sns/sns_join/",
        GIVE_COUPON_NEWYEAR: "/event_action/give_coupon_new_year/",
        MBC_SALE_DRAMA_LIST: "/event_action/ajax_mbc_sale_list/",
        KAKAO_FRIEND_JOIN: "/event_action/kakao_friend_join/",
        KAKAO_FRIEND_S_COUNT: "/event_action/get_kakao_friend_count/",
        FREE_POINT_VIEW: "/event/ajax_mobile_view/",
        FREE_POINT_LIST: "/event/ajax_free_point_list/",
        KMOVIE_HIT_SALE_LIST: "/event_action/ajax_k_movie_hit_sale_list/",
        MOBILE_KING_SELLER_LIST: "/event/king_seller_mobile_view/",
      },
      MOBILE: {
        HOME: "/home_m/main/",
        BBS_WRITE: "/comment/write_bbs/",
        NOTICE_WRITE: "/comment/write_notice/",
        REPLY: "/comment/reply/",
        DEL: "/comment/del/",
        GOOD: "/comment/good/",
        SAVE_PUSH: "/user/save_push_key/",
        AOS_PAY_START: "/pay/aos_pay_start/",
        AOS_PAY_COMPLETE: "/pay/in_app/aos/aos_complete.php",
      },
      FRIEND: {
        FRIEND_LIST: "/friend/f_list/",
        FRIEND_DELETE: "/friend/del_friend/",
        FRIEND_SEND: "/friend/reg_friend/",
        FRIEND_SEARCH: "/friend/search_list_friend/",
        FRIEND_SELLER_LIKE: "/friend/seller_friend_like/",
        FRIEND_UPDATE: "/friend/update_friend/",
        FRIEND_MODAL: "/friend/modify_friend_Modal/",
        FRIEND_LIST_AJAX: "/friend/receive_friend_ajax/",
        FRIEND_FIRST_SEND: "/friend/first_reg_friend/",
      },
    };
  }),
  (FC_PROTOCOL.prototype.ajaxCall = function (e, t) {
    (this.address = e.server),
      (this.uri = e.uri),
      (this.param = e.params),
      (this.success_fun = e.success),
      (this.error_fun = e.error_fun),
      (this.error_type = e.error_type),
      (this.loading = e.loading_bar),
      (this.loading_stay = e.loading_stay),
      (this.timeout = t.DEFINE.AJAX_TIMEOUT),
      (this.type = t.DEFINE.AJAX_SEND_TYPE),
      (this.dataType = t.DEFINE.AJAX_HTTP_TYPE),
      1 == this.error_type ? this.send() : this.sendbase();
  }),
  (FC_PROTOCOL.prototype.send = function () {
    var e = this,
      t = {
        url: this.address + this.uri,
        timeout: this.timeout,
        cache: !1,
        type: this.type,
        dataType: this.dataType,
        contents: { self: e },
        data: this.param,
        success: this.ajaxSuccess,
        error: this.ajaxError,
        beforeSend: null,
        complete: null,
      };
    1 == this.loading &&
      ((t.beforeSend = function () {
        console.log("beforeSend"), utility.loading.show();
      }),
      (t.complete = function () {
        console.log("ajax complete:" + t.url),
          1 != e.loading_stay && utility.loading.hide();
      })),
      $.ajax(t);
  }),
  (FC_PROTOCOL.prototype.sendbase = function () {
    var e = this,
      t = {
        url: this.address + this.uri,
        timeout: this.timeout,
        cache: !1,
        type: this.type,
        dataType: this.dataType,
        contents: { self: e },
        data: this.param,
        success: this.ajaxSuccess,
        error: this.ajaxError,
        beforeSend: null,
        complete: null,
      };
    1 == this.loading &&
      ((t.beforeSend = function () {
        utility.loading.show();
      }),
      (t.complete = function () {
        console.log("ajax complete:" + t.url),
          1 != e.loading_stay && utility.loading.hide();
      })),
      console.log("ajax url:" + t.url),
      console.debug(this.param),
      jQuery.ajax(t);
  }),
  (FC_PROTOCOL.prototype.ajaxError = function (e, t) {
    console.log("ajaxError"), console.log(e.status), console.debug(t);
    var a = new FC_DEFINE(),
      i = "";
    if ("timeout" === t)
      console.log("Time out error."), (i = "ìë²ì ìì²­ìê°ì´ ì´ê³¼ëììµëë¤.");
    else {
      if (0 === e.status)
        return (
          console.log("Not connect. Verify Network."),
          (i = "ë¤í¸ìí¬ ì°ê²°ì´ ëì´ì¡ìµëë¤. ë¤í¸ìí¬ ìíë¥¼ íì¸í´ì£¼ì¸ì."),
          1 == a.isFC && alert(i),
          void 0
        );
      if ("abort" === t)
        console.log("Ajax request aborted."),
          (i = "ìë²ë¡ ìì²­ì´ ì¤ë¨ëììµëë¤. ë¤ì ìëí´ì£¼ì¸ì.");
      else if (404 == e.status)
        console.log("Requested page not found. [404]"),
          (i = "ìì²­í íì´ì§ë¥¼ ì°¾ì ì ììµëë¤.");
      else if (500 == e.status)
        console.log("Internal Server Error [500]."),
          (i = "ìë²ì ì¤ë¥ê° ë°ìíììµëë¤. ê´ë¦¬ììê² ë¬¸ìíì¸ì.");
      else {
        if ("parsererror" === t)
          return (
            console.log("Requested JSON parse failed."),
            (i =
              "ë°ì´íê°ì´ ì¬ë°ë¥´ì§ ììµëë¤. ë¤ì ìëíê±°ë ë¬¸ì ê° ê³ìë  ê²½ì° ê´ë¦¬ììê² ë¬¸ìíì¸ì."),
            1 == a.isFC && alert(i),
            void 0
          );
        console.log("Uncaught Error.\n" + e.responseText),
          (i = "ìììë ë¬¸ì ìëë¤. ì ìí ë¤ì ìëí´ì£¼ì¸ì.");
      }
    }
    var n = "";
    1 == APP.DEFINE.DEBUG_MSG, (i += n), fc_alert(i);
  }),
  (FC_PROTOCOL.prototype.ajaxSuccess = function (e) {
    var t = this.contents.self;
    return (
      null == APP && (APP = new FC_APP()),
      "json" == this.dataType && (APP.DEFINE.AJAX_HTTP_TYPE = "JSON"),
      "HTML" == APP.DEFINE.AJAX_HTTP_TYPE || "html" == t.dataType
        ? ((APP.DEFINE.AJAX_HTTP_TYPE = "JSON"), t.success_fun(e), void 0)
        : ("jsonp" == APP.DEFINE.AJAX_HTTP_TYPE &&
            (APP.DEFINE.AJAX_HTTP_TYPE = "json"),
          1 == isDefined(e.status.fc_adult) &&
            "NO" == e.status.fc_adult &&
            APP.DEFINE.setStorageData(
              APP.DEFINE.STORAGE.SERVER_ADULT,
              e.status.fc_adult
            ),
          1 == isDefined(e.status.server_time) &&
            APP.DEFINE.setStorageData(
              APP.DEFINE.STORAGE.SERVER_ADULT,
              e.status.server_time
            ),
          1 == isDefined(e.status.server_date) &&
            APP.DEFINE.setStorageData(
              APP.DEFINE.STORAGE.SERVER_ADULT,
              e.status.server_date
            ),
          1 == isDefined(e.status.is_adult) &&
            APP.DEFINE.setStorageData(
              APP.DEFINE.STORAGE.SERVER_ADULT,
              e.status.is_adult
            ),
          1 == isDefined(e.status.event_message) && console.log("server event"),
          1 == isDefined(e.status.fc_user) &&
            isDefined(e.status.fc_user.access_token) &&
            gCookie.set(
              APP.DEFINE.STORAGE.USER_ACCESS_TOKEN,
              e.status.fc_user.access_token,
              365
            ),
          1 == parseInt(e.status.code)
            ? (t.success_fun(e.result), void 0)
            : 1 == t.error_type && "function" == typeof t.error_fun
            ? (console.log("error_fun~~~"), t.error_fun(e), void 0)
            : (t.errorCommon(e, APP, t), void 0))
    );
  }),
  (FC_PROTOCOL.prototype.errorCommon = function (e, t, a) {
    if (
      (console.log("errorCommon"),
      console.debug(e),
      0 == isDefined(e.status.key))
    )
      return alert(e.status.message), void 0;
    if ("ERR_NOT_ALERT" != e.status.key) {
      var i = e.status.message;
      1 == t.DEFINE.DEBUG_MSG;
      var n = function (e) {
          var t = e.replace(/\n/g, "<br />");
          1 == isMobileAgent()
            ? (jQuery("#fc-modal-alert-msg").html(t),
              jQuery("#fcMobileAlertModal").modal("show"))
            : alert(e);
        },
        s = function () {
          sendServerLog(1, "ERR_UPLOAD_CASH_NOT_ENOUGH"), GO_MENU("charge");
        },
        o = function () {
          location.reload(!0);
        };
      switch (e.status.key) {
        case "ERR_NOT_ALERT":
          break;
        case "ERR_NOT_REALNAME_REGISTER":
          GO_MENU("adultSinup");
          break;
        case "ERR_NOT_ADULT_REGISTER":
          GO_MENU("adultSinup");
          break;
        case "ERR_NOT_LOGIN":
          GO_MENU("login");
          break;
        case "ERR_UPLOAD_CASH_NOT_ENOUGH":
          var r =
            "        ë³´ì íì  í¬ì¸í¸ê° ë¶ì¡±í©ëë¤.\n\n         í¬ì¸í¸ ì¶©ì  í ì´ì©í´ì£¼ì¸ì.\n\níì¼ìºì¤í¸ ìµë80% ì­ëê¸ í ì¸ ì´ë²¤í¸ ì§íì¤!";
          fc_alert(r, "", s);
          break;
        case "ERR_UPLOAD_DOWNCOUNT_OVER":
          fc_alert(i, "", o);
          break;
        case "ERR_NOT_FOUND_PAID_LOG":
          if (1 == confirm(i)) {
            s();
            break;
          }
          break;
        default:
          n(i),
            1 == isDefined(a) &&
              "function" == typeof a.error_fun &&
              (console.log("error~~~"), a.error_fun(e));
      }
    }
  });
var sendServerLog = function (e, t) {
  if (null == APP) var a = new FC_APP();
  else var a = APP;
  var i = { type: e, data: t },
    n = function () {
      console.log("sendServerLog:logSaveSucess");
    },
    s = {
      server: a.DEFINE.SERVER_PROTOCOL,
      uri: a.PROTOCOL.URL.MEMBER.SAVE_LOG,
      success: n,
      error_type: !0,
      loading_bar: !1,
      params: i,
    };
  a.PROTOCOL.ajaxCall(s, a);
};
(FC_CATEGORY.prototype.setData = function () {
  var e = {};
  (e["1"] = "movie"),
    (e["2"] = "broadcast"),
    (e["3"] = "ani"),
    (e["4"] = "book"),
    (e["5"] = "game"),
    (e["6"] = "utility"),
    (e["7"] = "music"),
    (e["8"] = "education"),
    (e["9"] = "image"),
    (e["11"] = "adult"),
    (e["12"] = "novel"),
    (e["13"] = "link"),
    (e["21"] = "child"),
    (e["100"] = "real"),
    (e["200"] = "best"),
    (e["300"] = "free"),
    (e["400"] = "ranking");
  var t = {};
  (t.movie = [
    "1001",
    "1002",
    "1003",
    "1004",
    "1005",
    "1006",
    "1007",
    "1008",
    "1009",
  ]),
    (t.broadcast = [
      "2001",
      "2002",
      "2003",
      "2004",
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
    ]),
    (t.ani = [
      "3001",
      "3002",
      "3003",
      "3004",
      "3005",
      "3006",
      "3007",
      "3008",
      "3009",
    ]),
    (t.book = [
      "4001",
      "4002",
      "4003",
      "4004",
      "4005",
      "4006",
      "4007",
      "4008",
      "1205",
    ]),
    (t.game = ["5001", "5002", "5003", "5004", "5005", "5006", "5007", "5008"]),
    (t.utility = ["6001", "6002", "6003", "6004", "6005"]),
    (t.music = ["7001", "7002", "7003", "7004", "7005", "7006"]),
    (t.education = ["8001", "8002", "8003", "8004", "8005", "8006"]),
    (t.image = ["9001", "9002"]),
    (t.adult =
      1 == IS_MOBILE
        ? ["1101", "1", "3", "2", "4", "1203", "1205", "1204"]
        : ["1101", "1", "3", "2", "4", "9", "5", "1205", "1204", "1203"]),
    (t.novel = ["1201", "1205"]),
    (t.link = ["1301", "1302"]),
    (t.child = ["1", "2", "3", "4", "5", "8"]),
    (t.real = ["1", "2", "3", "4", "8", "9"]),
    (t.best = ["1", "2", "3", "4", "8", "9"]),
    (t.free =
      1 == IS_MOBILE
        ? ["0", "1", "2", "3", "4", "8", "9", "11"]
        : ["1", "2", "3", "4", "5", "8", "9", "11"]),
    (t.ranking = ["1", "2", "3", "4", "8", "9"]),
    (FC_CAT = {}),
    (FC_CAT["0"] = "ì ì²´"),
    (FC_CAT["1"] = "ìí"),
    (FC_CAT["1001"] = "ì¡ì"),
    (FC_CAT["1002"] = "ì½ë¯¸ë"),
    (FC_CAT["1003"] = "ëë¼ë§"),
    (FC_CAT["1004"] = "ë©ë¡"),
    (FC_CAT["1005"] = "ê³µí¬/ì¤ë¦´ë¬"),
    (FC_CAT["1006"] = "SF/ ííì§"),
    (FC_CAT["1007"] = "ì ì"),
    (FC_CAT["1008"] = "íêµ­ìí"),
    (FC_CAT["1009"] = "í´ì´ìí"),
    (FC_CAT["1000"] = "ë¯¸ë¶ë¥"),
    (FC_CAT["2"] = "ë°©ì¡"),
    (FC_CAT["2001"] = "ëë¼ë§"),
    (FC_CAT["2002"] = "ì¼/ìë¥"),
    (FC_CAT["2003"] = "ìì¬/êµì"),
    (FC_CAT["2004"] = "ë¤íë©í°ë¦¬"),
    (FC_CAT["2005"] = "ì¤í¬ì¸ "),
    (FC_CAT["2006"] = "ì ì/ì ë"),
    (FC_CAT["2007"] = "ë¯¸ë"),
    (FC_CAT["2008"] = "ì¼ë"),
    (FC_CAT["2009"] = "í´ì¸ë°©ì¡"),
    (FC_CAT["2000"] = "ë¯¸ë¶ë¥"),
    (FC_CAT["3"] = "ì ë"),
    (FC_CAT["3001"] = "ì½ë¯¸ë"),
    (FC_CAT["3002"] = "ì¡ì"),
    (FC_CAT["3003"] = "ì°ì "),
    (FC_CAT["3004"] = "SF/ííì§"),
    (FC_CAT["3005"] = "ê³µí¬"),
    (FC_CAT["3006"] = "ê°ì¡±/ì ì"),
    (FC_CAT["3007"] = "ì¤í¬ì¸ "),
    (FC_CAT["3008"] = "ê·¹ì¥í"),
    (FC_CAT["3009"] = "ì¼ë°"),
    (FC_CAT["3000"] = "ë¯¸ë¶ë¥"),
    (FC_CAT["4"] = "ëì"),
    1 == IS_MOBILE && (FC_CAT["4"] = "e-book"),
    (FC_CAT["4001"] = "ë¬´í/ì¡ì"),
    (FC_CAT["4002"] = "ìì "),
    (FC_CAT["4003"] = "ì½ë¯¹"),
    (FC_CAT["4004"] = "í¸ë¬"),
    (FC_CAT["4005"] = "êµì"),
    (FC_CAT["4006"] = "ì ì"),
    (FC_CAT["4007"] = "ì¡ì§"),
    (FC_CAT["4008"] = "ì¼ë°"),
    (FC_CAT["4000"] = "ë¯¸ë¶ë¥"),
    (FC_CAT["5"] = "ê²ì"),
    (FC_CAT["5001"] = "ì¡ì"),
    (FC_CAT["5002"] = "ì ëµìë®¬"),
    (FC_CAT["5003"] = "ë¡¤íë ì"),
    (FC_CAT["5004"] = "ì´ëë²¤ì³"),
    (FC_CAT["5005"] = "ì¤í¬ì¸ "),
    (FC_CAT["5006"] = "ê°ì¡±/ì ì"),
    (FC_CAT["5007"] = "ê³ ì "),
    (FC_CAT["5008"] = "ì¼ë°"),
    (FC_CAT["5000"] = "ë¯¸ë¶ë¥"),
    (FC_CAT["6"] = "ì í¸"),
    (FC_CAT["6001"] = "ì´ë¯¸ì§/ê·¸ëí½"),
    (FC_CAT["6002"] = "ë¬¸ì/í¸ì§"),
    (FC_CAT["6003"] = "ì¬ì´ë/ìì¤í"),
    (FC_CAT["6004"] = "ì´ìì²´ì "),
    (FC_CAT["6005"] = "ì¼ë°"),
    (FC_CAT["6000"] = "ë¯¸ë¶ë¥"),
    (FC_CAT["7"] = "ìì"),
    (FC_CAT["7001"] = "í/ë°ë¼ë"),
    (FC_CAT["7002"] = "ë½/ë©í"),
    (FC_CAT["7003"] = "íí©/ëì¤"),
    (FC_CAT["7004"] = "í´ëì/ì¬ì¦"),
    (FC_CAT["7005"] = "O.S.T"),
    (FC_CAT["7006"] = "ì¼ë°"),
    (FC_CAT["7000"] = "ë¯¸ë¶ë¥"),
    (FC_CAT["8"] = "êµì¡"),
    (FC_CAT["8001"] = "ìì´/ì´í"),
    (FC_CAT["8002"] = "ì´/ì¤/ê³ íìµ"),
    (FC_CAT["8003"] = "ì»´í¨í°"),
    (FC_CAT["8004"] = "ìê²©ì¦"),
    (FC_CAT["8005"] = "ì ì"),
    (FC_CAT["8006"] = "ì¼ë°"),
    (FC_CAT["8000"] = "ë¯¸ë¶ë¥"),
    (FC_CAT["9"] = "ì´ë¯¸ì§"),
    (FC_CAT["9001"] = "ìì°/ë°°ê²½"),
    (FC_CAT["9002"] = "ì¼ë°"),
    (FC_CAT["9000"] = "ë¯¸ë¶ë¥"),
    (FC_CAT["11"] = "ì±ì¸"),
    (FC_CAT["1101"] = "ì¼ë°"),
    (FC_CAT["1102"] = "ìí"),
    (FC_CAT["1103"] = "ì ë"),
    (FC_CAT["1104"] = "ë°©ì¡"),
    (FC_CAT["1105"] = "ëì"),
    (FC_CAT["1106"] = "ì´ë¯¸ì§"),
    (FC_CAT["1107"] = "ê²ì"),
    (FC_CAT["1100"] = "ë¯¸ë¶ë¥"),
    (FC_CAT["12"] = "ìì¤"),
    (FC_CAT["1201"] = "ì¼ë°"),
    (FC_CAT["1202"] = "ì±ì¸ìì¤"),
    (FC_CAT["1203"] = "ì±ì¸ì¹í°"),
    (FC_CAT["1204"] = "ì±ì¸ì©í"),
    (FC_CAT["1205"] = "ì±ì¸ì¹ìì¤"),
    (FC_CAT["13"] = "ë¬´ë£"),
    (FC_CAT["1301"] = "ì¼ë°"),
    (FC_CAT["1302"] = "ì´ë¦°ì´ê´"),
    (FC_CAT["21"] = "ì ì"),
    (FC_CAT["200"] = "ì¸ê¸°"),
    (FC_CAT["100"] = "ì¤ìê°"),
    (FC_CAT["10000"] = "ë¯¸ë¶ë¥"),
    (FC_CAT["300"] = "ë¬´ë£"),
    (FC_CAT["30000"] = "ì±ì¸"),
    (FC_CAT["400"] = "ì¤ìê°ê¸ìì¹"),
    (this.cateType = e),
    (this.cateName = FC_CAT),
    (this.subCate = t),
    this.setCategoryMain();
}),
  (FC_CATEGORY.prototype.setCategoryMain = function () {
    var e = [],
      t = this.cateType;
    for (var a in t) {
      var i = { key: t[a], idx: a, name: this.cateName[a] };
      e.push(i);
    }
    (this.main = e), this.setCategorySub();
  }),
  (FC_CATEGORY.prototype.setCategorySub = function () {
    var e = {},
      t = this.main;
    for (var a in t) {
      var i = t[a].idx,
        n = t[a].key,
        s = this.subCate[n],
        o = {};
      for (var r in s) {
        var l = { key: s[r], idx: r, name: this.cateName[s[r]] };
        o[r] = l;
      }
      e[i] = o;
    }
    this.sub = e;
  }),
  (FC_CATEGORY.prototype.getCategorySubList = function (e) {
    return 0 == isDefined(e) && (e = 1), (e = parseInt(e)), this.sub[e];
  }),
  (FC_CATEGORY.prototype.getCategorySubLength = function (e) {
    0 == isDefined(e) && (e = 1);
    var t = this.cateType[e],
      a = this.subCate[t];
    return a.length;
  }),
  (FC_CATEGORY.prototype.getSortOrderName = function (e) {
    this.sort_oredr = {
      sort: "ìµì ì",
      id: "ë±ë¡ì¼ì",
      purchase_cnt: "ì¸ê¸°ì",
      is_hd: "ê³ íì§",
      is_adult: "ì±ì¸",
      is_non_adult: "ì±ì¸ì ì¸",
      rank: "ì¸ê¸°ì",
      is_non_my: "ë´ê°ë³¸ìë£ ì ì¸",
      is_non_copy: "ì í´ì ì¸",
      size: "ì©ëì",
      count_comment: "ì½ë©í¸ì",
    };
    var t = this.sort_oredr.sort;
    for (var a in this.sort_oredr)
      if (a == e) {
        t = this.sort_oredr[e];
        break;
      }
    return t;
  }),
  (FC_APP.prototype.checkSuportHtml5 = function () {
    return 0 == isHtml5Suport()
      ? (alert("ì§ìíì§ ìë ë¸ë¼ì°ì ¸ìëë¤."),
        (location.href = this.DEFINE.NON_HTML_ROOT),
        void 0)
      : void 0;
  }),
  (FC_APP.prototype.start = function (e, t, a) {
    console.log("app start"),
      (this.viewContainer = "#homeContainer"),
      (this.containerClassName = ".view-frame"),
      (this.containerAni = !0),
      (this.loadedFirst = a),
      (this.loadData = t),
      (this.page = e),
      this.loadedFirst && (this.fc_category = new FC_CATEGORY());
    var i = this;
    FC_ROUTER(i);
  }),
  (FC_APP.prototype.setTopAlam = function () {}),
  (FC_APP.prototype.setMember = function (e) {
    (this.MEMBER = new FC_member(e, !1)),
      1 == this.MEMBER.flag_uploader && jQuery(".my_upload").show();
  }),
  (FC_APP.prototype.router = function (e, t) {
    switch (
      ((e.url = e.changeUrl(e, t)),
      e.page != APP_PAGE &&
        (e.setContentsCennter(),
        e.showModalOnEvent(e),
        FC_APP_FN.setBindLeftMenu(e),
        SEARCH_FN.searchFormValidate(e),
        (APP_PAGE = e.page)),
      e.page)
    ) {
      case "home":
        WEB_HOME.start(e, e.loadData, e.url),
          FC_MEMBER_FN.checkAutoMobileLogin();
        break;
      case "contents":
        WEB_CONTENTS.start(e, e.url, e.loadData),
          FC_MEMBER_FN.checkAutoMobileLogin();
        break;
      case "charge":
        WEB_CHARGE.start(e, e.loadData, e.url);
        break;
      case "cs":
        WEB_CS.start(e);
        break;
      case "qna":
        WEB_QNA.start(e, e.url);
        break;
      case "mypage":
        WEB_MYPAGE.start(e, e.loadData, e.url, t);
        break;
      case "seller":
        WEB_SELLER.start(e, e.loadData, e.url, t);
        break;
      case "member":
        WEB_MEMBER.start(e, e.loadData, e.url, t);
        break;
      case "theme":
        WEB_THEME.start(e, e.loadData, e.url);
        break;
      case "movies":
        WEB_MOVIES.start(e, e.loadData, e.url);
        break;
      case "note":
        WEB_NOTE.start(e, e.url, t);
        break;
      case "req":
        WEB_REQ.start(e, e.url, t);
        break;
      case "search":
        WEB_SEARCH.start(e, e.loadData, e.url);
        break;
      case "search_seller":
        WEB_SEARCH_SELLER.start(e, e.loadData, e.url);
        break;
      case "coupon":
        WEB_COUPON.start(e, e.loadData, e.url);
        break;
      case "event":
        WEB_EVENT.start(e, e.loadData, e.url);
        break;
      case "broadcast":
      case "company":
        WEB_ETC.start(e);
        break;
      case "m_view":
        WEB_CONTENTS.VIEW.loadContentsView(!0);
        break;
      case "friend":
        WEB_FRIEND.start(e, e.loadData, e.url);
        break;
      default:
    }
  }),
  (FC_APP.prototype.showModalOnEvent = function () {
    console.log("set ModalOnEvent"),
      jQuery("#contentsViewModal").on("shown.bs.modal", function () {
        return (
          console.log("contentsViewModal shown.bs.modal"),
          1 > jQuery("#bbsBoardIdx").length
            ? ($(this).modal("hide"), void 0)
            : (WEB_CONTENTS.VIEW.loadContentsView(),
              1 == IsBrowserChrome_FC() &&
                jQuery("body").css({ "padding-right": "17px" }),
              void 0)
        );
      }),
      jQuery("#contentsViewModal").on("hidden.bs.modal", function () {
        console.log("contentsViewModal hidden.bs.modal"),
          jQuery("#loadViewContents").empty(),
          null != FILE_FN.SET_INTVAL &&
            (clearInterval(FILE_FN.SET_INTVAL), (FILE_FN.SET_INTVAL = null)),
          (FILE_FN.SET_INTVAL_COUNT = 0),
          utility.ui.removeViewHash(),
          jQuery(".modal:visible").length &&
            $(document.body).addClass("modal-open"),
          jQuery("body").css({ "padding-right": "0px" });
      });
  }),
  (FC_APP.prototype.contentsRouter = function (e) {
    WEB_CONTENTS.start(e);
  }),
  (FC_APP.prototype.changeUrl = function (e, t) {
    console.log("app changeUrl");
    var a = { uri: null, params: {} };
    if (jQuery.isPlainObject) {
      var i = 0;
      for (var n in t)
        0 == i ? (a.uri = n.replace("!", "")) : (a.params[n] = t[n]), i++;
    } else a.uri = "/www";
    return a;
  }),
  (FC_APP.prototype.setSelectUri = function (e, t, a) {
    return (
      console.log("app setSelectUri"),
      (this.SELECTED.main = parseInt(e)),
      (this.SELECTED.sub = parseInt(t)),
      (this.SELECTED.page = parseInt(a)),
      (this.url.uri =
        "/" +
        this.SELECTED.main +
        "/" +
        this.SELECTED.sub +
        "/" +
        this.SELECTED.page +
        "/"),
      this.url.uri
    );
  }),
  (FC_APP.prototype.setNewSelectUri = function (e) {
    return (
      console.log("app setNewSelectUri"),
      (this.SELECTED.page = parseInt(e)),
      this.setSelectUri(
        this.SELECTED.main,
        this.SELECTED.sub,
        this.SELECTED.page
      )
    );
  }),
  (FC_APP.prototype.setAdultContes = function () {
    0 == parseInt(this.DEFINE.ADULT_OPEN) && jQuery(".adultCounts").hide();
  }),
  (FC_APP.prototype.setContentsCennter = function () {
    console.log("setContentsCennter");
    var e = utility.ui.viewport().width,
      t = $(".btm_wrap");
    if (t.outerWidth() > e) {
      var a = t.outerWidth() / 2 - e / 2;
      scrollLeft = $(document).scrollLeft(a);
    }
    jQuery("#search").focus().select();
  }),
  (FC_APP_FN = {}),
  (FC_APP_FN.setBindLeftMenuActive = function (e, t) {
    console.log("app setBindLeftMenuActive"),
      jQuery(".left-menu").removeClass("active"),
      jQuery(".left-menu." + e).addClass("active"),
      jQuery(".sub-tap-menu").hide();
    var a = 0;
    if (
      (100 > parseInt(t) && (a = t),
      jQuery("#fc-search-form-category").val(a),
      jQuery("#fc-contetns-copy-sale-top").hide(),
      200 == parseInt(t))
    )
      jQuery(".rank-sub-tab-menu").show();
    else if (300 == parseInt(t)) {
      jQuery(".nomal-sub-tab-menu").show(),
        jQuery("#fc-contetns-copy-sale-top").show();
      var i = jQuery("#fc-contetns-copy-sale-top").data("loaded");
      "1" == i && null != WEB_CONTENTS.DATA.SALE_ISCROLL
        ? (WEB_CONTENTS.DATA.SALE_ISCROLL.refresh(),
          WEB_CONTENTS.DATA.SALE_ISCROLL.goToPage(0, 0, 0))
        : WEB_CONTENTS.getFreeTopContentsData();
    } else
      11 == parseInt(t)
        ? (jQuery(".nomal-sub-tab-menu").show(),
          jQuery(".is_non_adult").hide(),
          jQuery(".is_non_copy").addClass("round_r"))
        : (jQuery(".nomal-sub-tab-menu").show(),
          jQuery(".is_non_adult").show(),
          jQuery(".is_non_copy").removeClass("round_r"));
  }),
  (FC_APP_FN.setBindLeftMenu = function () {
    console.log("app setBindLeftMenu");
  }),
  (FC_APP_FN.onClickLeftAdultMenu = function (e) {
    console.log("FC_APP_FN onClickLeftMenu");
    var t = jQuery(e).data("main"),
      a = jQuery(e).data("sub"),
      i = jQuery(e).data("seo"),
      n = parseInt(jQuery("#memberValidAdult").val());
    if ((0 == isAllowGoodBrowsers() && (i = "1"), 11 == parseInt(t) && 1 != n))
      return GO_MENU("adultSinup", t, 11), void 0;
    jQuery(".left-menu").removeClass("active"), jQuery(this).addClass("active");
    var s = "/www/contents/#!/" + t + "/" + a + "/1/";
    ("1" == i || 1 == i) &&
      (s = "/www/contents/page_contents_list/" + t + "/" + a + "/1/"),
      (location.href = s);
  }),
  (FC_APP_FN.setBindSubCateMenu = function () {}),
  (FC_APP_FN.serverDisplayAdult = function (e) {
    var t = gCookie.get(e.DEFINE.STORAGE.SERVER_ADULT);
    return 0 == isDefined(t) ? !1 : 1 == parseInt(t) ? !0 : !1;
  }),
  (FC_APP_FN.openContentsView = function (e, t, a) {
    if (
      (console.log("FC_APP_FN.openContentsView"),
      console.log("bbs id:" + e),
      0 == isDefined(e))
    )
      return alert("ì ë³´ê° ì¬ë°ë¥´ì§ ììµëë¤. íì¸í ë¤ì ìëí´ ì£¼ì¸ì."), void 0;
    if ("8" == _FC_BrowserRuntimeVersion)
      return FC_APP_FN.openWindowsContentsView(e, t, a), void 0;
    var i = 0,
      n = "0",
      s = null,
      o = 0,
      r = 0;
    if ((0 == isDefined(r) && (r = "0"), isDefined(t))) {
      (i = jQuery(t).data("cate1")), (o = jQuery(t).data("chapter_idx"));
      var l = jQuery(t).hasClass("fc-adult-open"),
        c = parseInt(jQuery("#memberValidAdult").val());
      if ((11 == parseInt(i) || 1 == l) && 1 != c)
        return console.debug(c), GO_MENU("adultSinup"), void 0;
      var r = jQuery(t).data("req");
    }
    null == APP && (APP = new FC_APP()), utility.loading.show();
    var d = function () {
      1 == jQuery("#fc-loading .contents .viewImg").hasClass("rotated") &&
        utility.loading.hide();
    };
    1 == IsBrowserIE_FC()
      ? setTimeout(d, 15e3)
      : setTimeout(d, APP.DEFINE.AJAX_TIMEOUT - 2e3),
      jQuery("#fc-search-brocast-chapter").length > 0 &&
        ((s = jQuery("#fc-search-brocast-chapter").data("keywd")), (n = "1"));
    var u = {
      time: $.now(),
      broContents: n,
      broKeywd: s,
      cate1: i,
      chapterIdx: o,
      req: r,
    };
    if ((console.debug(u), 2 == a))
      var _ =
        APP.DEFINE.SERVER_PROTOCOL +
        APP.PROTOCOL.URL.CONTENTS.VIEW2 +
        "/" +
        e +
        "/";
    else
      var _ =
        APP.DEFINE.SERVER_PROTOCOL +
        APP.PROTOCOL.URL.CONTENTS.VIEW +
        "/" +
        e +
        "/";
    console.log("get url:" + _),
      jQuery
        .get(_, u)
        .done(function (e) {
          return (
            utility.loading.hide(),
            "ERR_NOT_LOGIN" == e
              ? (utility.ui.removeViewHash(), GO_MENU("login"), void 0)
              : "ERR_NOT_ADULT_REGISTER" == e
              ? (utility.ui.removeViewHash(), GO_MENU("adultSinup"), void 0)
              : (WEB_CONTENTS.VIEW.openContentsView(e), void 0)
          );
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (FC_APP_FN.openWindowsContentsView = function (e, t) {
    if (
      (console.log("FC_APP_FN.openContentsView"),
      console.log("bbs id:" + e),
      0 == isDefined(e))
    )
      return alert("ì ë³´ê° ì¬ë°ë¥´ì§ ììµëë¤. íì¸í ë¤ì ìëí´ ì£¼ì¸ì."), void 0;
    var a = 0,
      i = 0,
      n = null;
    if (isDefined(t)) {
      (a = jQuery(t).data("cate1")), (i = jQuery(t).data("chapter_idx"));
      var s = jQuery(t).hasClass("fc-adult-open"),
        o = parseInt(jQuery("#memberValidAdult").val());
      if ((11 == parseInt(a) || 1 == s) && 1 != o)
        return console.debug(o), GO_MENU("adultSinup"), void 0;
      n = jQuery(t).data("share");
    }
    null == APP && (APP = new FC_APP());
    var r =
      APP.DEFINE.SERVER_PROTOCOL +
      APP.PROTOCOL.URL.CONTENTS.VIEW +
      "/" +
      e +
      "/1/?open_win=1&share=" +
      n;
    window.open(
      r,
      "fc_view",
      "scrollbars=yes,toolbar=no,resizable=no,width=920,height=800,left=0,top=0"
    );
  }),
  (FC_APP_FN.onClickContentsSeller = function (e) {
    console.log("FC_APP_FN.onClickContentsSeller");
    var t = {
      nickname: jQuery(e).data("nickname"),
      userid: jQuery(e).data("userid"),
    };
    console.debug(t), null == APP && (APP = new FC_APP());
    var a = TEMPLATE_FUN.sellerLayer(t);
    jQuery(".fc-seller-layer").remove(), jQuery(e).parent().append(a);
  }),
  (FC_APP_FN.closeContentsSeller = function () {
    console.log("FC_APP_FN.closeContentsSeller"),
      jQuery(".fc-seller-layer").remove();
  }),
  (FC_APP_FN.noticeLayerControl = function (e) {
    null == APP && (APP = new FC_APP());
    var t = jQuery("#memberLoginOk").val();
    if (0 == t || "" == t) return GO_MENU("login"), void 0;
    if ("alim" == e) {
      jQuery("#notice_qna_layer").hide(), jQuery("#notice_note_layer").hide();
      var a = function (e) {
          var t = e.alim_list,
            a = "";
          a += "<ul>";
          for (var i = 0; t.length > i; i++)
            a += TEMPLATE_FUN.alimPopListHtml(t[i]);
          (a += "</ul>"), jQuery("#notice_alim_list").html(a);
        },
        i = {
          server: APP.DEFINE.SERVER_PROTOCOL,
          uri: APP.PROTOCOL.URL.CS.ALIM_LIST_AJAX,
          success: a,
          error_type: !0,
          loading_bar: !1,
        };
      APP.PROTOCOL.ajaxCall(i, APP);
    } else if ("qna" == e) {
      jQuery("#notice_alim_layer").hide(), jQuery("#notice_note_layer").hide();
      var a = function (t) {
          var a = t.qna_list,
            i = "";
          i += "<ul>";
          for (var n = 0; a.length > n; n++)
            i += TEMPLATE_FUN.qnaPopListHtml(a[n], e);
          (i += "</ul>"), jQuery("#notice_qna_list").html(i);
        },
        n = { writer: 1 },
        i = {
          server: APP.DEFINE.SERVER_PROTOCOL,
          uri: APP.PROTOCOL.URL.CS.QNA_LIST,
          success: a,
          error_type: !0,
          loading_bar: !1,
          params: n,
        };
      APP.PROTOCOL.ajaxCall(i, APP);
    } else {
      jQuery("#notice_alim_layer").hide(), jQuery("#notice_qna_layer").hide();
      var a = function (e) {
          var t = e.list,
            a = "";
          a += "<ul>";
          for (var i = 0; t.length > i; i++)
            a += TEMPLATE_FUN.memoPopListHtml(t[i]);
          (a += "</ul>"), jQuery("#notice_note_list").html(a);
        },
        i = {
          server: APP.DEFINE.SERVER_PROTOCOL,
          uri: APP.PROTOCOL.URL.NOTE.NOTE_LIST_AJAX,
          success: a,
          error_type: !0,
          loading_bar: !1,
        };
      APP.PROTOCOL.ajaxCall(i, APP);
    }
    jQuery("#notice_" + e + "_layer").toggle();
  }),
  (FC_APP_FN.alimClick = function (e) {
    var t = APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.CS.ALIM_READ;
    $.post(t), gCookie.set(e + "_alim", 1, { path: "/", expires_day: 30 });
  }),
  (FC_APP_FN.noticeLayerMove = function (e) {
    "qna" == e && (jQuery("#memberLoginOk").val(), GO_MENU("qna"));
  }),
  (FC_APP_FN.setHomeContentsImgLazy = function () {
    var e = IsBrowserIE_FC();
    if (e)
      return (
        $("#contentsListTbody .lazy").each(function () {
          $(this).attr("src", $(this).data("original"));
        }),
        void 0
      );
    FC_LAZY = null;
    var t = APP.DEFINE.IMG + "/common/no_img.png";
    FC_LAZY = $("#contentsListTbody .lazy").lazyload({
      threshold: 200,
      placeholder: t,
      delay: 50,
    });
  }),
  (FC_APP_FN.closeContentsSaleTopLayer = function () {
    console.log("FC_APP_FN.closeContentsSaleTopLayer"),
      jQuery("#fc-contetns-copy-sale-top").hide();
  }),
  (FC_APP_FN.onClickControlRequest = function () {
    window.open(
      "http://939.co.kr/filecast",
      "íì¼ìºì¤í¸ PC ìê²©ì§ììë¹ì¤",
      "width=1200, height=650, left=100, top=100, menubar=no, status=no, toolbar=no, scrollbars=no"
    );
  }),
  (FC_APP_FN.onclickNeverOpenModal = function (e) {
    var t = {
      modal: jQuery(e).data("modal_name"),
      cookie_name: jQuery(e).data("cookie_name"),
    };
    gCookie.set(t.cookie_name, "Y", 1), jQuery("#" + t.modal).modal("hide");
  }),
  (FC_APP_FN.onclickOpenPopupYakkawn = function () {
    window.open(
      "/www/company/bank_popup_privacy/",
      "fc_yakkawn",
      "scrollbars=no,toolbar=no,location=no,status=no,width=433,height=500,left=0,top=0"
    );
  });
var FC_REGEX_WHITESPACE_GLOBAL = /\S+/g,
  FC_ROWSER_OTHER = -1,
  FC_ROWSER_UNKNOWN = 0,
  FC_BROWSER_IE = 1,
  FC_BROWSER_FIREFOX = 2,
  FC_BROWSER_SAFARI = 3,
  FC_BROWSER_CHROME = 4,
  FC_BROWSER_OPERA = 5,
  _FC_Device,
  _FC_Browser = 0,
  _FC_BrowserRuntimeVersion = 0,
  _FC_BrowserEngineVersion = 0,
  _FC_BrowserJavascriptVersion = 0,
  _FC_WebkitVersion = 0,
  _Navigator = navigator,
  _AppName = _Navigator.appName,
  _AppVersion = _Navigator.appVersion,
  _UserAgent = _Navigator.userAgent,
  ParseFloat = parseFloat,
  fcCheckSuportHtml5 = function () {
    if (0 == isHtml5Suport()) {
      var e = window.location.host,
        t = "http://" + e + "/www/home/no_html5/";
      return (location.href = t), !1;
    }
    return !0;
  },
  checkPhonegab = function () {
    var e = jQuery("#isPhonegap").val();
    return 1 == e || "1" == e ? !0 : !1;
  },
  checkPhonegabStorage = function () {
    if ("undefined" == typeof Storage) return !1;
    var e = localStorage.getItem("isPhonegap");
    return 1 == e || "1" == e ? !0 : !1;
  },
  checkAndroidApp = function () {
    var e = jQuery("#isAndroidApp").val();
    return 1 == e || "1" == e ? !0 : !1;
  },
  checkIosApp = function () {
    var e = jQuery("#isIphoneApp").val();
    return 1 == e || "1" == isAndroidApp ? !0 : !1;
  },
  getAppVersionNum = function () {
    var e = jQuery("#fcAppVersion").val();
    return isDefined(e) ? parseInt(e) : 1;
  },
  checkAndroidWeb = function () {
    var e = /mobile|android/i.test(navigator.userAgent);
    return e ? !0 : !1;
  },
  checkAndroidOneStore = function () {
    var e = jQuery("#isOneStore").val();
    return 0 == isDefined(e) ? !1 : parseInt(e) > 0 ? !0 : !1;
  },
  getHashObject = function (e) {
    var t = location.hash;
    1 == isDefined(e) && (t = e), (t = t.replace("#", ""));
    var a = t.split("&"),
      i = {};
    for (var n in a)
      for (var s in a[n]) {
        var o = a[n].split("=");
        i[o[0]] = o[1];
      }
    return i;
  },
  cehckIsFcMember = function () {
    var e = jQuery("#isFcMember").val();
    return 0 == isDefined(e) ? !1 : 1 == e || "1" == e ? !0 : !1;
  },
  getFcMemberGrade = function () {
    var e = jQuery("#memberThatGrade").val();
    return isDefined(e) ? parseInt(e) : 0;
  },
  getFcMemberEmail = function () {
    var e = jQuery("#memberValidEmail").val();
    return 1 == isDefined(e) && "" != e ? e : "";
  },
  checkIsManager = function () {
    var e = gCookie.get("is_check");
    return "1" == e || 1 == e ? !0 : !1;
  },
  isAllowGoodBrowsers = function () {
    var e = jQuery("#IS_ALLOW_GOOD_BROWSERS").val();
    return 0 == isDefined(e) ? !0 : "NO" == e ? !1 : !0;
  };
(Number.prototype.format2 = function (e) {
  if (0 == e) return 0;
  for (var t = /(^[+-]?\d+)(\d{3})/, a = e + ""; t.test(a); )
    a = a.replace(t, "$1,$2");
  return a;
}),
  (fc_number_format = function (e) {
    var t = parseInt(e);
    if (0 == t) return 0;
    for (var a = /(^[+-]?\d+)(\d{3})/, i = t + ""; a.test(i); )
      i = i.replace(a, "$1,$2");
    return i;
  }),
  (Number.prototype.format2 = function (e) {
    if (0 == e) return 0;
    for (var t = /(^[+-]?\d+)(\d{3})/, a = e + ""; t.test(a); )
      a = a.replace(t, "$1,$2");
    return a;
  }),
  (function (e, t) {
    var a = e.parse,
      i = [1, 4, 5, 6, 7, 10, 11];
    e.parse = function (n) {
      var s,
        o,
        r = 0;
      if (
        (o = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(
          n
        ))
      ) {
        for (var l, c = 0; (l = i[c]); ++c) o[l] = +o[l] || 0;
        (o[2] = (+o[2] || 1) - 1),
          (o[3] = +o[3] || 1),
          "Z" !== o[8] &&
            o[9] !== t &&
            ((r = 60 * o[10] + o[11]), "+" === o[9] && (r = 0 - r)),
          (s = e.UTC(o[1], o[2], o[3], o[4], o[5] + r, o[6], o[7]));
      } else s = a ? a(n) : 0 / 0;
      return s;
    };
  })(Date);
var validateEmail = function (e) {
    if (e) {
      var t = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return t.test(e) ? !0 : !1;
    }
    return !1;
  },
  gCookie = {
    cookie_arr: null,
    set: function (e, t, a, i) {
      0 == isDefined(i) &&
        (null == APP && (APP = new FC_APP()), (i = APP.DEFINE.COOKIE_DOMAIN));
      var n = new Date();
      n.setDate(n.getDate() + a),
        (document.cookie =
          e +
          "=" +
          escape(t) +
          "; domain=" +
          i +
          ";path=/; expires=" +
          n.toGMTString() +
          ";");
    },
    get: function (e) {
      for (var t = e + "=", a = 0; document.cookie.length >= a; ) {
        var i = a + t.length;
        if (document.cookie.substring(a, i) == t)
          return (
            -1 == (endOfCookie = document.cookie.indexOf(";", i)) &&
              (endOfCookie = document.cookie.length),
            unescape(document.cookie.substring(i, endOfCookie))
          );
        if (((a = document.cookie.indexOf(" ", a) + 1), 0 == a)) break;
      }
      return "";
    },
    del: function (e, t) {
      0 == isDefined(t) &&
        (null == APP && (APP = new FC_APP()), (t = APP.DEFINE.COOKIE_DOMAIN));
      var a = new Date();
      a.setDate(a.getDate() - 1),
        (document.cookie =
          e + "=; domain=" + t + "; path=/; expires=" + a.toGMTString() + ";");
    },
    set_expires_date: function (e, t) {
      var a = new Date();
      a.setTime(a.getTime() + 1e3 * e * t);
      var e = "expires=" + a.toUTCString();
      this.cookie_arr.push(e);
    },
  },
  addZero = function (e) {
    return 10 > e ? "0" + e : e;
  },
  reString_checking = function (e, t) {
    for (
      mem_strings = "", mem_strings_count = 0, re_message_check = 0, rof = 0;
      e.length > rof;
      rof++
    )
      if (
        ((check_String =
          e.charCodeAt(rof) > 255 ? e.substr(rof, 1) : e.substr(rof, 1)),
        mem_strings == check_String
          ? mem_strings_count++
          : ((mem_strings = check_String), (mem_strings_count = 1)),
        mem_strings_count >= t)
      ) {
        re_message_check = 1;
        break;
      }
    return re_message_check;
  },
  text_String_real_length = function (e) {
    for (tot_text_len = 0, rof = 0; e.length > rof; rof++)
      e.charCodeAt(rof) > 255 && tot_text_len++, tot_text_len++;
    return tot_text_len;
  },
  checkEmailForm = function (e) {
    var t = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (6 > e.length || !t.test(e)) return !1;
    var a = e.split("@");
    return a.length > 2 ? !1 : !0;
  },
  sortObject = function (e) {
    var t = [];
    for (var a in e) e.hasOwnProperty(a) && t.push({ key: a, value: e[a] });
    return (
      t.sort(function (e, t) {
        return t.value - e.value;
      }),
      t
    );
  },
  intro_go_page = function (e) {
    "wlaunpop" == $.cookie("p_id") && alert("ê°í¸ íìê°ì í ë¬´ë£ë¤ì´ ë°ì¼ì¸ì"),
      (location.href = e);
  },
  setComma = function (e) {
    e = "" + e;
    var t = "";
    for (i = 0; e.length > i; i++)
      t =
        i > 0 && 0 == i % 3
          ? e.charAt(e.length - i - 1) + "," + t
          : e.charAt(e.length - i - 1) + t;
    return t;
  },
  fcGetHashData = function (e) {
    if (0 == isDefined(e)) return null;
    e = e.replace(/#/gi, "");
    var t = e.split("&"),
      a = {};
    for (var i in t)
      for (var n in t[i]) {
        var s = t[i].split("=");
        a[s[0]] = s[1];
      }
    return a;
  },
  getFcHashValues = function () {
    var e = "",
      t = window.location.href.split("#");
    return (
      t.length > 1 && (e = "#" + t[1]),
      1 == isDefined(e) && "" != e ? fcGetHashData(e) : null
    );
  },
  fcGetUrlData = function () {
    var e = window.location.search.split("?"),
      t = {};
    if (!(e.length > 1)) return null;
    var a = e[1].split("&");
    for (var i in a) {
      var n = a[i].split("=");
      t[n[0]] = n[1];
    }
    return console.log("urlData"), console.debug(t), t;
  },
  windowOpenCenter = function (e, t, a, i, n) {
    console.log(e), window.open(e, t, "width=" + a + " height=" + i + " " + n);
  },
  actionAnimation = function (e, t) {
    console.log("actionAnimation"),
      jQuery(t)
        .removeClass()
        .addClass(e + " animated")
        .one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function () {
            jQuery(t).removeClass(e + " animated");
          }
        );
  },
  view_jwplayer = function (e, t, a, i) {
    showJwplayer(e, t, a, i);
  },
  loadVideoJs = function (e, t) {
    if (
      (console.log("video on"), !(1 > jQuery("#view-preview-wrap-div").length))
    )
      if (1 == isDefined(t)) {
        var a = videojs(e);
        a.controls(!1),
          jQuery("#view-video-js-preview-contents-play").unbind("click"),
          jQuery("#view-video-js-preview-contents-play").bind(
            "click",
            function () {
              console.debug(a), a.play(), a.controls(!0), jQuery(this).hide();
            }
          );
      } else jQuery("#view-video-js-preview-contents-play").hide();
  },
  loadVideoPreviw = function (e, t) {
    if (
      (console.log("loadVideoPreviw : video on"),
      console.log("EleId:" + e),
      console.log("isViewLayer:" + t),
      !(1 > jQuery(e).length))
    ) {
      var a = function (e) {
          $("#video-container")[0].player.setSrc(e);
        },
        i = function () {
          var e = $("#video-prev-src-input").val();
          console.log(e), a(e);
        };
      1 == isDefined(t)
        ? (console.log("mediaelementplayer load go"),
          $("#video-container").mediaelementplayer({
            success: function (e) {
              $("#video-info").html("mode: " + e.pluginType), i();
            },
            error: function () {
              alert(
                "ëìì ì¬ìì ì§ìíì§ ìë ë¸ë¼ì°ì ¸ì´ê±°ë ë¯¸ë¦¬ë³´ê¸° íì¼ì´ ììµëë¤."
              );
            },
          }))
        : jQuery("#view-video-js-preview-contents-play").hide();
    }
  },
  Base64 = {
    _keyStr:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (e) {
      var t,
        a,
        i,
        n,
        s,
        o,
        r,
        l = "",
        c = 0;
      for (e = Base64._utf8_encode(e); e.length > c; )
        (t = e.charCodeAt(c++)),
          (a = e.charCodeAt(c++)),
          (i = e.charCodeAt(c++)),
          (n = t >> 2),
          (s = ((3 & t) << 4) | (a >> 4)),
          (o = ((15 & a) << 2) | (i >> 6)),
          (r = 63 & i),
          isNaN(a) ? (o = r = 64) : isNaN(i) && (r = 64),
          (l =
            l +
            this._keyStr.charAt(n) +
            this._keyStr.charAt(s) +
            this._keyStr.charAt(o) +
            this._keyStr.charAt(r));
      return l;
    },
    decode: function (e) {
      var t,
        a,
        i,
        n,
        s,
        o,
        r,
        l = "",
        c = 0;
      for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); e.length > c; )
        (n = this._keyStr.indexOf(e.charAt(c++))),
          (s = this._keyStr.indexOf(e.charAt(c++))),
          (o = this._keyStr.indexOf(e.charAt(c++))),
          (r = this._keyStr.indexOf(e.charAt(c++))),
          (t = (n << 2) | (s >> 4)),
          (a = ((15 & s) << 4) | (o >> 2)),
          (i = ((3 & o) << 6) | r),
          (l += String.fromCharCode(t)),
          64 != o && (l += String.fromCharCode(a)),
          64 != r && (l += String.fromCharCode(i));
      return (l = Base64._utf8_decode(l));
    },
    _utf8_encode: function (e) {
      e = e.replace(/\r\n/g, "\n");
      for (var t = "", a = 0; e.length > a; a++) {
        var i = e.charCodeAt(a);
        128 > i
          ? (t += String.fromCharCode(i))
          : i > 127 && 2048 > i
          ? ((t += String.fromCharCode(192 | (i >> 6))),
            (t += String.fromCharCode(128 | (63 & i))))
          : ((t += String.fromCharCode(224 | (i >> 12))),
            (t += String.fromCharCode(128 | (63 & (i >> 6)))),
            (t += String.fromCharCode(128 | (63 & i))));
      }
      return t;
    },
    _utf8_decode: function (e) {
      for (var t = "", a = 0, i = (c1 = c2 = 0); e.length > a; )
        (i = e.charCodeAt(a)),
          128 > i
            ? ((t += String.fromCharCode(i)), a++)
            : i > 191 && 224 > i
            ? ((c2 = e.charCodeAt(a + 1)),
              (t += String.fromCharCode(((31 & i) << 6) | (63 & c2))),
              (a += 2))
            : ((c2 = e.charCodeAt(a + 1)),
              (c3 = e.charCodeAt(a + 2)),
              (t += String.fromCharCode(
                ((15 & i) << 12) | ((63 & c2) << 6) | (63 & c3)
              )),
              (a += 3));
      return t;
    },
  },
  getStorageInstalledCUS = function () {
    console.log("getStorageInstalledCUS");
    var e = "FC_DOWNLOADER_INSTALLED",
      t = "0",
      t = $.cookie(e);
    return (
      console.log("saveValue::" + t), 1 == parseInt(t) || "1" == t ? !0 : !1
    );
  },
  setStorageInstalledCUS = function (e) {
    var t = "FC_DOWNLOADER_INSTALLED",
      a = e;
    return $.cookie(t, a, { expires: 365, path: "/" }), !0;
  },
  moveDownloadController = function () {
    console.log("moveDownloadController"),
      jQuery("#fc-warning-guid-install-allways").fadeIn();
  },
  hideAllDownloadGuide = function () {
    jQuery("#fc-warning-guid-install-allways").hide(),
      jQuery("#fc-warning-guid-install").hide();
  },
  showDownloadBannerGuide = function () {
    console.log("showDownloadBannerGuide"),
      jQuery("#fc-warning-guid-install-allways").hide(),
      jQuery("#contents-view-top-btn-list").hide(),
      jQuery("#fc-warning-guid-install").fadeIn(),
      $.removeCookie("nonInstallDownloaderGuide", { path: "/" });
  },
  hideDownloadBannerGuide = function () {
    console.log("nonInstallDownloaderGuide"),
      jQuery("#fc-warning-guid-install").hide(),
      jQuery("#fc-warning-guid-install-allways").show(),
      jQuery("#contents-view-top-btn-list").show(),
      $.cookie("nonInstallDownloaderGuide", "1", { expires: 365, path: "/" });
  },
  checkInstallDownloaderGuide = function () {
    console.log("checkInstallDownloaderGuide");
    var e = $.cookie("nonInstallDownloaderGuide");
    return 1 == isDefined(e) ? ("1" == e ? !0 : !1) : !1;
  },
  loadAppByUri = function (e, t, a) {
    var i,
      n,
      s,
      o,
      r = null,
      l = !0,
      c = new FC_DEFINE();
    c.APP_URL_SETUP_FILE;
    var d = ["pagehide", "blur"];
    (s = function () {
      return l
        ? ((l = !1),
          i(),
          setStorageInstalledCUS("1"),
          null != a &&
            alert(
              "ë¤ì´ë¡ëê° ì¤ì¹ëê²ì íì¸íììµëë¤.\në¤ì ë¤ì´ë¡ëë¥¼ í´ë¦­í´ì£¼ì¸ì."
            ),
          void 0)
        : !1;
    }),
      (o = function () {
        return l
          ? ((l = !1),
            i(),
            console.log("chaning location to "),
            "function" == typeof t
              ? t()
              : null != t && moveDownloadController(),
            void 0)
          : !1;
      }),
      (n = function () {
        window.clearTimeout(r),
          $.each(d, function (e, t) {
            console.log("eventName = ", t), window.addEventListener(t, s);
          });
      }),
      (i = function () {
        console.log("clear events"),
          $.each(d, function (e, t) {
            console.log("removeEventListener ", t),
              window.document.removeEventListener(t, s);
          });
      }),
      $("#hiddenAction").attr("src", e),
      n(),
      (r = setTimeout(o, 1e3));
  },
  checkDownloadInstallActivexObject = function (e) {
    var t = IsBrowserIE_FC();
    if (1 == t && null != e) {
      try {
        console.log("check ie ax progid:" + e);
        var a = new ActiveXObject(e);
        a
          ? (console.log("yes progid:" + e), (installed = !0))
          : (console.log("no progid:" + e), (installed = !1));
      } catch (i) {
        console.log("Ax check ìì§ ì¤ì¹ë¥¼ ìíì¨ë¤ì©..^^" + e), (installed = !1);
      }
      return installed;
    }
    return !1;
  },
  checkCustumProtocolCheck = function (e, t) {
    window.protocolCheck(e, function () {
      console.log("fail checkCustumProtocolCheck"), t();
    }),
      event.preventDefault ? event.preventDefault() : (event.returnValue = !1);
  },
  fc_alert = function (e, t, a, i) {
    return (
      1 == jQuery("#fc-loading .contents .viewImg").hasClass("rotated") &&
        utility.loading.hide(),
      0 == IS_MOBILE
        ? (alert(e), "function" == typeof a && a(), void 0)
        : ((e = e.replace(/\n/g, "<br>")),
          1 == isDefined(t) && jQuery("#fc-modal-alert-title").html(t),
          jQuery("#fc-modal-alert-msg").html(e),
          1 == isDefined(i) && jQuery("#fcMobileAlertModal").data("fun", i),
          1 == isDefined(a) && jQuery("#fcMobileAlertModal").data("closed", a),
          jQuery("#fcMobileAlertModal").modal("show"),
          void 0)
    );
  },
  testCallbackFun = function () {
    alert("testCallbackFun");
  },
  fc_confirm = function (e, t, a, i, n, s) {
    return (
      1 == jQuery("#fc-loading .contents .viewImg").hasClass("rotated") &&
        utility.loading.hide(),
      0 == IS_MOBILE
        ? (alert(e), "function" == typeof n && n(), void 0)
        : (1 == isDefined(t) && jQuery("#fc-modal-confirm-title").html(t),
          1 == isDefined(a) && jQuery("#fc-modal-confirm-okbtn-title").html(a),
          jQuery("#fc-modal-confirm-msg").html(e),
          1 == isDefined(s) && jQuery("#fcMobileConfirmModal").data("fun", s),
          1 == isDefined(n) &&
            jQuery("#fcMobileConfirmModal").data("closed", n),
          jQuery("#fc-modal-confirm-okbtn-title").unbind("click"),
          jQuery("#fc-modal-confirm-okbtn-title").bind("click", function () {
            "function" == typeof i && i(),
              jQuery("#fcMobileConfirmModal").modal("hide");
          }),
          jQuery("#fcMobileConfirmModal").modal("show"),
          void 0)
    );
  },
  fc_fileDownload = function (e) {
    jQuery.fileDownload(e, {
      successCallback: function (e) {
        console.log(
          "You just got a file download dialog or ribbon for this URL :" + e
        );
      },
      failCallback: function (e, t) {
        console.log("failcallback"), console.debug(e), console.debug(t);
      },
    });
  },
  getServerInfo = function () {
    console.log("getServerInfo");
    var e = new FC_DEFINE(!0),
      t = e.getStorageData(e.STORAGE.USER_PUSH_KEY);
    alert(t);
  },
  checkDirectView = function () {
    var e = jQuery("#fcDirectViewLayer").val();
    return 1 == isDefined(e) && e > 0 ? !0 : !1;
  },
  getDirectViewHeadVer = function () {
    var e = jQuery("#fcDirectViewLayer").val();
    return 1 == isDefined(e) ? parseInt(e) : 0;
  },
  goSeoHome = function (e, t) {
    var a = null;
    1 == e && (a = "sitemap");
    var i = jQuery("#web-seo-view-partner").val();
    1 == isDefined(i) && 0 != i && "false" != i && (a = i),
      (location.href =
        "open_win" == a || null == a
          ? t.SERVER_ROOT + "/"
          : "sitemap" == a
          ? t.SERVER_ROOT + "/www/member/p_join/"
          : t.SERVER_ROOT + "/?p_id=" + a);
  },
  appExcuteFromWep = function (e, t) {
    if ((console.log("appExcuteFromWep"), 0 == isMobile())) {
      var a = "toolbar=0, status=0, menubar=0,height=800,width=1024",
        i = e.APP_URL_SETUP_PC;
      return window.open(i, "fc_google_play", a), void 0;
    }
    0 == isDefined(e) && (e = null == APP ? new FC_DEFINE(!0) : APP.DEFINE),
      deeplink.setup({
        iOS: { appId: "1184690297", appName: "íì¼ìºì¤í¸ ë¤ì´ë¡ë ì ì© ì±" },
        android: {
          appId: e.APP_AOS_ID,
          scheme: "filecastApp",
          host: "filecast",
        },
      });
    var n = e.APP_URL_OPEN_AOS;
    return (
      1 == isDefined(t) &&
        (n =
          "intent://filecast?view_id=" +
          t +
          "#Intent;scheme=filecastApp;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=" +
          e.APP_AOS_ID +
          ";end"),
      console.log("app open url:" + n),
      "IOS" == checkMobileDeviceAgent()
        ? ((n = e.APP_URL_OPEN_IOS),
          fc_alert(
            "íì¬ ë¤ì´ë¡ë ìë¹ì¤ë ìëë¡ì´ë ê¸°ê¸°ììë§ ê°ë¥í©ëë¤<br>IOSë²ì ì íì¬ ì¤ë¹ì¤ìëë¤."
          ),
          void 0)
        : (console.log("deeplink.open"), deeplink.open(n), void 0)
    );
  },
  iosAppExcuteFromWep = function (e) {
    console.log("appExcuteFromWep");
    var t = new FC_APP(),
      a = t.DEFINE;
    if (0 == t.OPEN_IOS_DOWNLOAD)
      return (
        fc_alert(
          "íì¬ ë¤ì´ë¡ë ìë¹ì¤ë ìëë¡ì´ë ê¸°ê¸°ììë§ ê°ë¥í©ëë¤<br>IOSë²ì ì íì¬ ì¤ë¹ì¤ìëë¤."
        ),
        void 0
      );
    if (0 == isMobile()) return (location.href = a.APP_URL_SETUP_IOS), void 0;
    var i = function (e) {
        var t = "";
        t = "ios" == e ? a.APP_URL_SETUP_IOS : a.APP_URL_SETUP_AOS;
        var i = gCookie.get("ios_go_appstore_check");
        if (
          ((check_ios_cookie_cnt = 0),
          1 == jQuery.isNumeric(i) && (check_ios_cookie_cnt = parseInt(i)),
          3 > check_ios_cookie_cnt)
        ) {
          if (
            1 !=
            confirm(
              'ì±ì´ ì¤ì¹ëì§ ìì ê²½ì°\n"íì¼ìºì¤í¸"ì±ì ì¤ì¹í´ì£¼ì¸ì.\n\nì±ì¤í ì´ë¡ ì´ë íìê² ìµëê¹?'
            )
          )
            return (
              gCookie.set(
                "ios_go_appstore_check",
                check_ios_cookie_cnt + 1,
                365
              ),
              void 0
            );
          console.log(t),
            gCookie.set("ios_go_appstore_check", check_ios_cookie_cnt + 1, 365),
            (document.location.href = t);
        }
      },
      n = function (e) {
        document.location.href = e;
      },
      s = function (e, t) {
        console.log("executeAppOrGoStore"),
          console.log("os:" + e),
          console.log("url:" + t);
        var a = new Date();
        setTimeout(function () {
          2500 > new Date() - a && i(e);
        }, 2e3),
          n(t);
      },
      o = function (t) {
        if (
          (console.log("successGetAccessTokenKeySaveFun"),
          console.debug(t),
          1 != isDefined(t.access_token) || 1 != isDefined(t.user_email))
        )
          return (
            fc_alert(
              "ë¡ê·¸ì¸ ì ë³´ë¥¼ íì¸í  ì ììµëë¤.<br>ë¬¸ì ê° ê³ìëë©´ ê³ ê°ì¼í°ì ë¬¸ìí´ì£¼ì¸ì."
            ),
            void 0
          );
        gCookie.set("fc_user_email", t.user_email, 365),
          gCookie.set("fc_user_access_token", t.access_token, 365);
        var i = a.APP_URL_SETUP_IOS,
          n = "ios";
        1 == isDefined(t.user_id) &&
        1 == isDefined(t.access_token) &&
        1 == isDefined(e)
          ? ("IOS" == checkMobileDeviceAgent()
              ? (i =
                  "filecast://download?bbs_idx=" +
                  e +
                  "&user_id=" +
                  t.user_id +
                  "&access_token=" +
                  t.access_token +
                  "&version=" +
                  a.APP_IOS_VERSION)
              : ((i =
                  "intent://filecast?bbs_idx=" +
                  viewIdx +
                  "#Intent;scheme=filecastApp;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=" +
                  a.APP_AOS_ID +
                  ";end"),
                (n = "aos")),
            s(n, i))
          : (alert("data.user_id:" + t.user_id),
            alert("data.access_token:" + t.access_token),
            alert("bbs_idx:" + e)),
          console.log("app open url:" + i);
      },
      r = {
        server: t.DEFINE.SERVER_PROTOCOL,
        uri: "/user/get_access_token2",
        success: o,
        error_type: !1,
        loading_bar: !1,
      };
    t.PROTOCOL.ajaxCall(r, t);
  },
  showMobileAjaxLoading = function (e, t) {
    0 == isDefined(e) && (e = "ë°ì´íë¥¼ ë¶ë¬ì¤ë ì¤ìëë¤."),
      "resultLoading" != jQuery("body").find("#resultLoading").attr("id") &&
        (1 == t
          ? jQuery("body").append(
              '<div id="resultLoading" style="display:none"><div><img src="http://static.filecast.co.kr/_mobile/_img/common/mobile_loading.png" onclick="stopMobileAjaxLoading();"><div>' +
                e +
                '</div></div><div class="bg"></div></div>'
            )
          : jQuery("body").append(
              '<div id="resultLoading" style="display:none" onclick="stopMobileAjaxLoading();"><div onclick="stopMobileAjaxLoading();"><img src="http://static.filecast.co.kr/_mobile/_img/common/mobile_loading.png"><div>' +
                e +
                '</div></div><div class="bg"></div></div>'
            )),
      jQuery("#resultLoading").css({
        width: "100%",
        height: "100%",
        position: "fixed",
        "z-index": "10000000",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        margin: "auto",
      }),
      jQuery("#resultLoading .bg").css({
        background: "#000000",
        opacity: "0.7",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
      }),
      jQuery("#resultLoading>div:first").css({
        width: "300px",
        height: "75px",
        "text-align": "center",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        margin: "auto",
        "font-size": "16px",
        "z-index": "10",
        color: "#b2cfdb",
      }),
      jQuery("#resultLoading>div:first img").css({
        display: "inline-block",
        "margin-bottom": "8px",
      }),
      jQuery("#resultLoading .bg").height("100%"),
      jQuery("#resultLoading").fadeIn(300),
      jQuery("body").css("cursor", "wait");
  },
  stopMobileAjaxLoading = function () {
    jQuery("#resultLoading .bg").height("100%"),
      jQuery("#resultLoading").fadeOut(300),
      jQuery("body").css("cursor", "default");
  },
  setAppCache = function (e, t) {
    console.log("setAppCache"),
      console.log("key:" + e),
      console.log("value:" + t);
    var a = function () {
        console.log("setSuccessCallback"), console.log("setSuccessCallback");
      },
      i = function () {
        console.log("onDeviceReadyPhonegab");
        var i = new LoginCache();
        i.setlogin(e, t, a);
      };
    return 1 == checkAndroidApp() && getAppVersionNum() > 9
      ? (document.addEventListener("deviceready", i), void 0)
      : (localStorage.setItem(e, t), void 0);
  },
  getAppCache = function (e, t) {
    console.log("getAppCache:" + e);
    var a = function (e) {
        return (
          console.log("getSuccessCallback:" + e),
          "function" == typeof t ? (t(e), void 0) : e
        );
      },
      i = function () {
        console.log("onDeviceReadyPhonegab");
        var t = new LoginCache();
        t.getlogin(e, a);
      };
    if (1 == checkAndroidApp() && getAppVersionNum() > 9)
      return document.addEventListener("deviceready", i), void 0;
    var n = localStorage.getItem(e);
    return "function" == typeof t ? (t(n), void 0) : n;
  },
  setFcLoginKey = function (e, t) {
    if (0 != isMobile()) {
      var a = e + "||" + t;
      setAppCache("fc_login_key", a);
    }
  },
  delFcLoginKey = function () {
    0 == isMobile();
  },
  getFcLoginKey = function (e) {
    if ((console.log("getFcLoginKey"), 0 == isMobile()))
      return console.log("no mobile"), void 0;
    var t = function (t) {
      console.log("successGetAppCache"), console.log("get data:" + t);
      var a = null;
      if (1 == isDefined(t))
        if ("LOGOUT" == t) {
          console.log(t), (a = null);
          var i = window.location.host;
          if ("m.filecast.kr" == i) return GO_APP_HOME(null, null), void 0;
        } else {
          var n = t.split("||");
          n.length > 1 && (a = { userEmail: n[0], loginToken: n[1] });
        }
      return (
        console.log("returnData"),
        console.debug(a),
        "function" == typeof e ? (e(a), void 0) : a
      );
    };
    getAppCache("fc_login_key", t);
  },
  getAppPushKey = function () {
    console.log("getAppPushKey");
    var e = new FC_DEFINE(!0),
      t = e.getStorageData(e.STORAGE.USER_PUSH_KEY);
    return 0 == isDefined(t) && (t = ""), console.log(t), t;
  },
  getAppDeviceKey = function () {
    console.log("getAppDeviceKey");
    var e = new FC_DEFINE(!0);
    console.debug(e);
    var t = e.getStorageData(e.STORAGE.USER_DEVICE_KEY);
    return 0 == isDefined(t) && (t = ""), console.log(t), t;
  },
  fcMobilePagination = function (e, t) {
    if ((console.log("fcMobilePagination:" + e), 0 == isDefined(e)))
      return console.log("no target ele"), void 0;
    var a = e,
      i = jQuery(e),
      n = {
        click_callback: function () {},
        page: 1,
        total_page: 1,
        group: 1,
        group_count: 4,
        span_class: "fc-m-paging-span",
        select_group: 1,
        total_group_count: 1,
      },
      s = jQuery.extend({}, n, t || {});
    (s.total_group_count = Math.ceil(s.total_page / s.group_count)),
      console.log("$p_options"),
      console.debug(s);
    var o = function (e, t) {
        for (var a = [], i = 0; t > i; i++) a.push((e - 1) * s.group_count + i);
        return a;
      },
      r = function (e) {
        return '<span class="prev" data-group="' + e + '">&lt; ì´ì </span>';
      },
      l = function (e) {
        return '<span class="next" data-group="' + e + '">ë¤ì &gt;</span>';
      },
      c = function (e, t) {
        var a = s.span_class + " num-" + e;
        return (
          e == t && (a += " active"),
          '<span class="' + a + '" data-page="' + e + '" >' + e + "</span>"
        );
      },
      d = function (e, t) {
        var a = parseInt(e.page),
          n = parseInt(e.total_page),
          d = (parseInt(e.group), parseInt(e.group_count)),
          u = Math.ceil(a / d),
          _ = o(u, d);
        console.log("$select_group_ids"),
          console.debug(_),
          (s.select_group = u);
        for (var p = [], m = 0; d > m && !(_[m] + 1 > n); m++)
          (p[m] = { num: _[m] + 1, html: null }), (p[m].html = c(_[m] + 1, a));
        if ((console.debug(e), console.debug(p), !(1 > p.length))) {
          var h = [];
          h.push(r(u - 1));
          for (var E in p) h.push(p[E].html);
          h.push(l(u + 1)),
            i.html(h.join("")).show(),
            "function" == typeof t && t(e);
        }
      },
      u = function (e) {
        jQuery(a + " ." + e.span_class).unbind("click"),
          jQuery(a + " ." + e.span_class).bind("click", function () {
            var t = jQuery(this).data("page");
            jQuery("." + e.span_class).removeClass("active"),
              jQuery(this).addClass("active"),
              e.click_callback(t);
          }),
          jQuery(a + " .prev").unbind("click"),
          jQuery(a + " .prev").bind("click", function () {
            var t = parseInt(jQuery(this).data("group"));
            return 1 > t
              ? (fc_alert("íì´ì§ ì²ììëë¤."), void 0)
              : ((s.page = t * s.group_count - 3),
                d(s, u),
                e.click_callback(s.page),
                void 0);
          }),
          jQuery(a + " .next").unbind("click"),
          jQuery(a + " .next").bind("click", function () {
            var t = parseInt(jQuery(this).data("group"));
            return t > s.total_group_count
              ? (fc_alert("íì´ì§ ë§ì§ë§ìëë¤."), void 0)
              : ((s.page = t * s.group_count - 3),
                d(s, u),
                e.click_callback(s.page),
                void 0);
          });
      };
    d(s, u);
  },
  checkMainContentsLoad = function () {
    return (
      console.log("checkMainContentsLoad"),
      0 > jQuery(".mobile-contetns-container-li").length
        ? !1
        : $(".mobile-contetns-container-li").is(":visible")
        ? !0
        : !1
    );
  },
  isFcSnsChannelEmail = function (e) {
    var t = null;
    if (-1 != e.indexOf("@facebook")) t = "íì´ì¤ë¶";
    else if (-1 != e.indexOf("@kakao")) t = "ì¹´ì¹´ì¤í¡";
    else if (-1 != e.indexOf("@naver")) {
      var a = e.split("@naver");
      console.debug(a), a.length > 1 && "" == a[1] && (t = "ë¤ì´ë²");
    }
    return t;
  },
  resetLoginDIV = function (e) {
    "1" == e
      ? MOBILE_ADULT_NOVEL.loginUiReset()
      : WEB_ADULT_NOVEL.loginUiReset();
  };
(function (e) {
  function t(e, t, a) {
    return e.addEventListener
      ? (e.addEventListener(t, a),
        {
          remove: function () {
            e.removeEventListener(t, a);
          },
        })
      : (e.attachEvent(t, a),
        {
          remove: function () {
            e.detachEvent(t, a);
          },
        });
  }
  function a(e, t) {
    var a = document.createElement("iframe");
    return (
      (a.src = t),
      (a.id = "hiddenIframe"),
      (a.style.display = "none"),
      e.appendChild(a),
      a
    );
  }
  function i(i, n) {
    function s() {
      clearTimeout(o), l.remove();
    }
    var o = setTimeout(function () {
        n(), l.remove();
      }, 1e3),
      r = document.querySelector("#hiddenIframe");
    r || (r = a(document.body, "about:blank"));
    var l = t(e, "blur", s);
    r.contentWindow.location.href = i;
  }
  function n(a, i) {
    function n() {
      clearTimeout(s), setStorageInstalledCUS("1"), o.remove();
    }
    var s = setTimeout(function () {
        i(), o.remove();
      }, 1e3),
      o = t(e, "blur", n);
    e.location = a;
  }
  function s(t, i) {
    console.log("openUriUsingSafari");
    var n = document.querySelector("#hiddenIframe");
    n || (n = a(document.body, "about:blank")),
      (n.contentWindow.location = t),
      e.setTimeout(function () {
        i();
      }, 500);
  }
  function o(e, t) {
    console.log("openUriUsingFirefox");
    var i = document.querySelector("#hiddenIframe");
    i || (i = a(document.body, "about:blank"));
    try {
      i.contentWindow.location.href = e;
    } catch (n) {
      "NS_ERROR_UNKNOWN_PROTOCOL" == n.name && t();
    }
  }
  function r(e, t) {
    var a = navigator.userAgent.toLowerCase(),
      n = /windows nt 6.2/.test(a) || /windows nt 6.3/.test(a);
    n
      ? d(e, t)
      : 10 === _()
      ? l(e, t)
      : 9 === _() || 11 === _()
      ? i(e, t)
      : c(e, t);
  }
  function l(t, i) {
    var n = setTimeout(i, 1e3);
    e.addEventListener("blur", function () {
      clearTimeout(n);
    });
    var s = document.querySelector("#hiddenIframe");
    s || (s = a(document.body, "about:blank"));
    try {
      s.contentWindow.location.href = t;
    } catch (o) {
      i(), clearTimeout(n);
    }
  }
  function c(t, a) {
    var i = e.open("", "", "width=0,height=0");
    i.document.write("<iframe src='" + t + "'></iframe>"),
      setTimeout(function () {
        try {
          i.location.href, i.setTimeout("window.close()", 1e3);
        } catch (e) {
          i.close(), a();
        }
      }, 1e3);
  }
  function d(e, t) {
    navigator.msLaunchUri
      ? navigator.msLaunchUri(
          e,
          function () {
            setStorageInstalledCUS("1");
          },
          t
        )
      : t();
  }
  function u() {
    var t = !!e.opera || navigator.userAgent.indexOf(" OPR/") >= 0;
    return {
      isOpera: t,
      isFirefox: "undefined" != typeof InstallTrigger,
      isSafari:
        Object.prototype.toString.call(e.HTMLElement).indexOf("Constructor") >
        0,
      isChrome: !!e.chrome && !t,
      isIE: !1 || !!document.documentMode,
    };
  }
  function _() {
    var e = -1;
    if ("Microsoft Internet Explorer" === navigator.appName) {
      var t = navigator.userAgent,
        a = RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
      null != a.exec(t) && (e = parseFloat(RegExp.$1));
    } else if ("Netscape" === navigator.appName) {
      var t = navigator.userAgent,
        a = RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
      null != a.exec(t) && (e = parseFloat(RegExp.$1));
    }
    return e;
  }
  e.protocolCheck = function (e, t) {
    function a() {
      t && t();
    }
    var i = u();
    i.isFirefox
      ? o(e, a)
      : i.isChrome
      ? n(e, a)
      : i.isIE
      ? r(e, a)
      : i.isSafari
      ? s(e, a)
      : n(e, a);
  };
})(window),
  (utility = {}),
  (utility.loading = {}),
  (utility.loading.show = function () {
    if (1 != checkPhonegab()) {
      var e = utility.ui.viewport(),
        t = e.height,
        a = e.width;
      jQuery("#fc-loading").css({
        width: a + "px",
        height: t + "px",
        position: "fixed",
      }),
        jQuery("#fc-loading").show(),
        jQuery("#fc-loading .contents .viewImg").addClass("rotated");
      var i = new FC_DEFINE(),
        n = function () {
          1 == jQuery("#fc-loading .contents .viewImg").hasClass("rotated") &&
            utility.loading.hide();
        };
      1 == IsBrowserIE_FC()
        ? setTimeout(n, 15e3)
        : setTimeout(n, i.AJAX_TIMEOUT - 2e3);
    }
  }),
  (utility.loading.hide = function (e) {
    1 != checkPhonegab() &&
      ("popup" == e
        ? jQuery("#fc-loading").hide()
        : (jQuery("#fc-loading").hide(),
          jQuery("#fc-loading").removeAttr("style")));
  });
var errors = {},
  checkImage = function (e, t, a, i) {
    var n = new Image(),
      s = !1,
      o = !1;
    return (
      (n.onload = function () {
        s || ((s = !0), t && t.call && t.call(n));
      }),
      (n.onerror = function () {
        o || ((errors[e] = o = !0), a && a.call && a(i));
      }),
      errors[e]
        ? (n.onerror.call(n), void 0)
        : ((n.src = e), n.complete && n.onload.call(n), void 0)
    );
  };
(utility.ui = {}),
  (utility.ui.viewport = function () {
    var e = window,
      t = "inner";
    return (
      "innerWidth" in window ||
        ((t = "client"), (e = document.documentElement || document.body)),
      { width: e[t + "Width"], height: e[t + "Height"] }
    );
  }),
  (utility.ui.screenViewport = function () {
    var e = { width: window.screen.width, height: window.screen.height };
    return e;
  }),
  (utility.ui.onErrorImgLoad = function (e) {
    if (
      (console.log("utility.ui.onErrorImgLoad"),
      null == APP && (APP = new FC_APP()),
      1 == APP.DEFINE.isMobile)
    ) {
      var t = APP.DEFINE.FILE_ROOT + "/_mobile/_img/common/no_img.png";
      jQuery(e).attr("src", t), jQuery(e).css({ height: "100%" });
    } else {
      var t = APP.DEFINE.IMG + "/common/no_img.png";
      jQuery(e).attr("src", t),
        jQuery(e).css({ "background-size": "45px 45px" });
    }
  }),
  (utility.ui.onErrorImgLoadViewContents = function (e) {
    console.log("utility.ui.onErrorImgLoadViewContents"),
      null == APP && (APP = new FC_APP());
    var t = APP.DEFINE.IMG + "/common/no_img.png";
    jQuery(e)
      .css({ width: "45px", height: "45px" })
      .attr({ src: t, title: "ì²¨ë¶í ì´ë¯¸ì§ ê²½ë¡ê° ì¬ë°ë¥´ì§ ììµëë¤." }),
      jQuery(e).css({ width: "45px", height: "45px" });
  }),
  (utility.ui.onErrorImgLoadAfterChange = function (e) {
    console.log("utility.ui.onErrorImgLoadAfterChange"),
      null == APP && (APP = new FC_APP());
    var t = jQuery(e).data("errimg");
    0 == isDefined(t) &&
      (t = APP.DEFINE.FILE_ROOT + "/_mobile/_img/common/no_img.jpg"),
      jQuery(e).attr("src", t);
  }),
  (utility.ui.modalTop = function () {
    console.log("utility.ui.modalTop"), $("#contentsViewModal").scrollTop(0);
  }),
  (utility.ui.bodyTop = function () {
    return (
      console.log("utility.ui.bodyTop"),
      1 == IsBrowserIE_FC()
        ? (jQuery("html").scrollTop(0), void 0)
        : (jQuery("body").scrollTop(0), void 0)
    );
  }),
  (utility.ui.mobileViewTop = function () {
    console.log("utility.ui.mobileViewTop"),
      jQuery("#fcMobileContentsViewModal").scrollTop(0);
  }),
  (utility.ui.mobileKidsViewTop = function () {
    console.log("utility.ui.mobileKidsViewTop"), jQuery("body").scrollTop(0);
  }),
  (utility.ui.goElement = function (e, t, a, i) {
    if (!(1 > $(e).length)) {
      0 == isDefined(t) && (t = 500), 0 == isDefined(a) && (a = 15);
      var n = 0;
      n = 1 == i ? $(e).offset().top + a : $(e).offset().top - a;
      var s = $("html,body");
      s.animate({ scrollTop: n }, t);
    }
  }),
  (utility.ui.checkNonImg = function (e, t) {
    new FC_DEFINE();
    var a = function (e) {
        var t = $(e).css("background-image");
        return (t = t
          .replace(/.*\s?url\([\'\"]?/, "")
          .replace(/[\'\"]?\).*/, ""));
      },
      i = function (e) {
        console.log("failureImg");
        var a = APP.DEFINE.IMG + "/common/no_img.png";
        "bg" == t
          ? $(e).css("background-image", "url('" + a + "')")
          : $(e).attr("src", "url('" + a + "')");
      };
    "bg" == t
      ? $(e).each(function () {
          var e = a(this),
            t = this;
          "none" != e && checkImage(e, function () {}, i, t);
        })
      : $(e).each(function () {
          var e = $(this).attr("src"),
            t = this;
          "" != e && checkImage(e, function () {}, i, t);
        });
  }),
  (utility.ui.getBbsTitleStyle = function (e, t) {
    0 == isDefined(t) && (t = 20);
    var a = "d_color",
      i = e / t;
    return (a =
      0.1 >= i
        ? "a_color"
        : 0.3 >= i
        ? "b_color"
        : 0.5 >= i
        ? "c_color"
        : "d_color");
  }),
  (utility.ui.removeViewHash = function () {
    var e = location.hash.split("/");
    if ((console.debug(e), e.length > 6 && "view" == e[4])) {
      for (var t = "", a = 1; 4 > a; a++) t += e[a] + "/";
      console.log(t), (location.hash = "!/" + t);
    }
  });
var contorl_check = !1,
  Name_Insert_Form = "uploadForm",
  Name_Transe_Form = "nfileFormTrans",
  lastIndex = "",
  ADT_cash_check = !1;
document.write(
  '<script type="text/javascript" for="WebCtrl" event="UpSelectComplete(strPath,  strSize, strMode, strHash)">'
),
  document.write("var form = document[Name_Insert_Form];"),
  document.write("if(form.nfile_upload_list.length < 10000) {"),
  document.write("		idx = nfile_UploadCheck(strPath);"),
  document.write("		if(idx){"),
  document.write('				info = form.nfile_upload_list[idx].value.split("||"); '),
  document.write('				if (info[0] == "-1" || info[0].indexOf(strMode) >= 0) {'),
  document.write(
    '					form.nfile_upload_list[idx].value = strMode + "||" + strSize + "||" + strPath;'
  ),
  document.write("				}"),
  document.write("		}"),
  document.write("		else {"),
  document.write("				form.nfile_upload_list.length++;"),
  document.write(
    '				form.nfile_upload_list[form.nfile_upload_list.length-1].value = strMode + "||" + strSize + "||" + strPath + "||" + strHash;'
  ),
  document.write(
    "				form.nfile_upload_list[form.nfile_upload_list.length-1].text = strPath;"
  ),
  document.write("		}"),
  document.write("	}"),
  document.write("</script>");
var lastIndex = "",
  agt = navigator.userAgent.toLowerCase(),
  isIE11 = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./),
  currcatpage = 0,
  currfno = 0,
  currfhs = 0;
(COMMENT_DATA = { ORDER: 0, VALID: null }),
  (Commentlist.prototype.setData = function (e) {
    for (var t in e)
      this[t] = jQuery.inArray(t, this.psase_int) >= 0 ? parseInt(e[t]) : e[t];
    this.setInfo();
  }),
  (Commentlist.prototype.setInfo = function () {
    (this.starType = "type" + this.gift),
      (this.name_title = ""),
      (this.userid == this.m_idx || this.m_level > 5) && (this.is_editer = !0),
      (this.owner_idx == this.m_idx || this.m_level > 5) && (this.is_own = !0),
      this.owner_idx == this.userid &&
        ((this.is_seller = !0),
        (this.name_title = '<span class="seller">[íë§¤ì]</span>')),
      (this.w_date = changeTimeStampToData(this.regdate, 1));
  }),
  (Commentlist.prototype.listHtmlMobileHome = function () {
    var e = "",
      t = "";
    if (this.depth > 1) e = "reply";
    else if (this.order < this.best_order) {
      e = "best";
      var t = "best";
    }
    var a = "";
    1 == this.down_coupon
      ? (a = '<a class="coupon_02"></a>')
      : 1 == this.is_own &&
        0 == this.is_seller &&
        (a = '<a class="coupon_01 hand"></a>');
    var i = "comment-list-idx-" + this.idx,
      n = "";
    1 == this.depth
      ? ((n +=
          '<div class="comment ' +
          e +
          '" id="' +
          i +
          '" data-order="' +
          this.order +
          '">'),
        (n +=
          '	<p class="c_writer"><span class="' +
          e +
          '"></span>' +
          this.nickname +
          "</p>"),
        (n += '	<ul class="comment_list">'),
        (n +=
          '		<li onclick="COMMENTLIST_FUN.likeComment(this);" data-mobile="1" data-type="' +
          this.bbs_type +
          '" data-idx="' +
          this.idx +
          '" data-depth="' +
          this.depth +
          '" data-thread="' +
          this.thread +
          '" class="hand"><span class="identify"></span><span class="num comment-like-count">' +
          this.good +
          '</span><span class="bar"> | </span></li>'),
        (n +=
          '		<li onclick="COMMENTLIST_FUN.openReplyFormMobile(this);" data-link_idx="' +
          this.link_idx +
          '" data-type="' +
          this.bbs_type +
          '" data-idx="' +
          this.idx +
          '" data-depth="' +
          this.depth +
          '" data-thread="' +
          this.thread +
          '" class="hand"><span>ëµê¸</span><span class="bar"> | </span></li>'),
        (n +=
          0 == this.is_editer
            ? "		<li><span>ì ê³ </span></li>"
            : '		<li onclick="COMMENTLIST_FUN.delComment(this);" data-type="' +
              this.bbs_type +
              '" data-idx="' +
              this.idx +
              '" data-depth="' +
              this.depth +
              '" data-thread="' +
              this.thread +
              '" class="hand"><span>ì­ì </span></li>'),
        (n += "	</ul>"),
        (n += '	<p class="c_content">' + this.comment + "</p>"),
        (n += "</div>"))
      : ((n += '<div class="comment ' + e + '" id="' + i + '">'),
        (n += '<div class="inner">'),
        (n +=
          '	<p class="c_writer"><span class="' +
          e +
          '"></span>' +
          this.nickname +
          "</p>"),
        (n += '	<ul class="comment_list">'),
        (n +=
          0 == this.is_editer
            ? "		<li><span>ì ê³ </span></li>"
            : '		<li onclick="COMMENTLIST_FUN.delComment(this);" data-link_idx="' +
              this.link_idx +
              '" data-type="' +
              this.bbs_type +
              '" data-idx="' +
              this.idx +
              '" data-depth="' +
              this.depth +
              '" data-thread="' +
              this.thread +
              '" class="hand"><span>ì­ì </span></li>'),
        (n += "	</ul>"),
        (n += '	<p class="c_content">' + this.comment + "</p>"),
        (n += '	<div class="bg"></div>'),
        (n += "</div>"),
        (n += "</div>"));
    try {
      return n;
    } finally {
      (n = null), (i = null), (a = null), (e = null), (t = null);
    }
  }),
  (Commentlist.prototype.listViewHtml = function () {
    var e = "",
      t = "";
    if (this.depth > 1) e = "reply";
    else if (this.order < this.best_order) {
      e = "best3";
      var t = "best";
    }
    var a = "",
      i = "";
    1 == this.down_coupon
      ? (i = '<span class="coupon_02"></span>')
      : 1 == this.is_own &&
        0 == this.is_seller &&
        (a =
          '<span class="coupon_01 hand" data-link_idx="' +
          this.link_idx +
          '" data-owner="' +
          this.owner_idx +
          '" data-type="' +
          this.bbs_type +
          '" data-idx="' +
          this.idx +
          '" onclick="COMMENTLIST_FUN.sendDownloadCoupon(this);"></span>');
    var n = "comment-list-idx-" + this.idx,
      s = "";
    1 == this.depth
      ? ((s += '<div class="v_comment ' + e + '" id="' + n + '">'),
        (s += '		<div class="top clist ' + t + '">'),
        (s += '			<span class="ico best"></span>'),
        (s += '			<p class="comment-list-content">' + this.comment + "</p>"),
        (s += "		</div>"),
        (s += '	 <div class="btm">'),
        (s += '			<div class="left">'),
        (s +=
          "				" +
          i +
          '<span class="id comment-list-nickname">' +
          this.nickname +
          '</span> <span class="star_score ' +
          this.starType +
          '"></span>' +
          a),
        (s += "			</div>"),
        (s += '			<div class="right">'),
        (s +=
          1 == this.is_editer
            ? '         <span class="btn_del" onclick="COMMENTLIST_FUN.delComment(this);" data-type="' +
              this.bbs_type +
              '" data-idx="' +
              this.idx +
              '" data-depth="' +
              this.depth +
              '" data-thread="' +
              this.thread +
              '">ì­ì  </span>'
            : '			    <span class="btn_notify" onclick="COMMENTLIST_FUN.reportComment(this);" data-userid="' +
              this.userid +
              '" data-type="' +
              this.bbs_type +
              '" data-idx="' +
              this.idx +
              '">ì ê³ </span><span class="bar">|</span> '),
        (s +=
          '				<span class="like" onclick="COMMENTLIST_FUN.likeComment(this);" data-type="' +
          this.bbs_type +
          '" data-idx="' +
          this.idx +
          '" data-depth="' +
          this.depth +
          '" data-thread="' +
          this.thread +
          '" data-good="' +
          this.good +
          '">â¡<span class="comment-like-count">' +
          this.good +
          "</span></span>"),
        (s +=
          '				<span class="btn_reply" onclick="COMMENTLIST_FUN.openReplyViewForm(this);" data-link_idx="' +
          this.link_idx +
          '" data-type="' +
          this.bbs_type +
          '" data-idx="' +
          this.idx +
          '" data-depth="' +
          this.depth +
          '" data-thread="' +
          this.thread +
          '" data-good="' +
          this.good +
          '">ëµë³íê¸°</span>'),
        (s += "			</div>"),
        (s += "		</div>"),
        (s += "</div>"))
      : ((s += '<div class="v_comment ' + e + '" id="' + n + '">'),
        (s += '	<div class="bg_reply"></div>'),
        (s += '	<div class="top">'),
        (s += '     <p class="comment-list-content">' + this.comment + "</p>"),
        (s += " </div>"),
        (s += '	<div class="btm">'),
        (s += '		<div class="left">'),
        (s +=
          '			<span class="writer"><span class="id comment-list-nickname">' +
          this.nickname +
          '</span> <span class="bar">|</span> <span class="time">' +
          this.w_date +
          "</span> " +
          a +
          "</span>"),
        (s += "		</div>"),
        (s += '		<div class="right">'),
        1 == this.is_editer &&
          (s +=
            '		<span class="btn_del" onclick="COMMENTLIST_FUN.delComment(this);" data-type="' +
            this.bbs_type +
            '" data-idx="' +
            this.idx +
            '" data-depth="' +
            this.depth +
            '" data-thread="' +
            this.thread +
            '">ì­ì </span>'),
        (s += "		 </div>"),
        (s += "	</div>"),
        (s += "</div>"));
    try {
      return s;
    } finally {
      (s = null), (n = null), (a = null), (e = null), (t = null), (i = null);
    }
  }),
  (Commentlist.prototype.listEventHtml = function (e) {
    var t = !0;
    1 == isDefined(e) && 1 == e && (t = !1);
    var a = "",
      i = "",
      n = "",
      s = !1;
    if (this.depth > 1) n = "reply type1";
    else if (this.order < this.best_order) {
      a = "type" + this.order;
      var i = "best";
      s = !0;
    }
    var o = "",
      r = "";
    1 == this.down_coupon
      ? (r = '<span class="coupon_02"></span>')
      : 1 == this.is_own &&
        0 == this.is_seller &&
        (o = '<span class="coupon_01 hand"></span>');
    var l = "comment-list-idx-" + this.idx,
      c = "";
    (c += '<div class="comment ' + n + '" id="' + l + '">'),
      (c += "	<dl>"),
      (c += " 	<dt>"),
      1 == s &&
        (c +=
          ' 		<span class="r_best ' + a + '">' + (this.order + 1) + "ë±</span>"),
      (c +=
        1 == t
          ? ' 		<span class="id">' +
            this.nickname +
            '</span><span class="bar">|</span>  <span class="time">' +
            this.w_date +
            "</span>"
          : ' 		<span class="id">' + this.nickname + "</span>"),
      (c += " 	</dt>"),
      (c += "     <dd>" + this.comment + "</dd>"),
      (c += " </dl>"),
      (c += ' <div class="right">'),
      (c += ' 	<ul class="comment_list">'),
      1 == this.depth
        ? ((c +=
            '     	<li class="hand" onclick="COMMENTLIST_FUN.likeComment(this);" data-type="' +
            this.bbs_type +
            '" data-idx="' +
            this.idx +
            '" data-depth="' +
            this.depth +
            '" data-thread="' +
            this.thread +
            '" data-good="' +
            this.good +
            '" ><span class="identify">â¡</span>ê³µê°<span class="num comment-like-count">' +
            this.good +
            '</span><span class="bar"> | </span></li>'),
          1 == this.is_editer &&
            ((c +=
              '         <li class="hand" onclick="COMMENTLIST_FUN.openReplyViewForm(this);" data-link_idx="' +
              this.link_idx +
              '" data-type="' +
              this.bbs_type +
              '" data-idx="' +
              this.idx +
              '" data-depth="' +
              this.depth +
              '" data-thread="' +
              this.thread +
              '" data-good="' +
              this.good +
              '" ><a>ëµê¸</a><span class="bar"> | </span></li>'),
            (c +=
              '         <li class="hand" onclick="COMMENTLIST_FUN.delComment(this);" data-type="' +
              this.bbs_type +
              '" data-idx="' +
              this.idx +
              '" data-depth="' +
              this.depth +
              '" data-thread="' +
              this.thread +
              '"><a>ì­ì </a></li>')))
        : 1 == this.is_editer &&
          (c +=
            '         <li class="hand" onclick="COMMENTLIST_FUN.delComment(this);" data-type="' +
            this.bbs_type +
            '" data-idx="' +
            this.idx +
            '" data-depth="' +
            this.depth +
            '" data-thread="' +
            this.thread +
            '"><a>ì­ì </a></li>'),
      (c += "     </ul>"),
      (c += "  </div>"),
      this.depth > 1 && (c += '	 <div class="bg_reply"></div>'),
      (c += "</div>");
    try {
      return c;
    } finally {
      (c = null), (l = null), (o = null), (a = null), (i = null), (e = null);
    }
  }),
  (COMMENTLIST_FUN = {}),
  (COMMENTLIST_FUN.bindBbsCommentPage = function () {}),
  (COMMENTLIST_FUN.getCommentList = function (e, t, a, i, n) {
    console.log("==COMMENTLIST_FUN.getCommentList===");
    var s = { bbs_type: e, bbs_idx: t, page: parseInt(a), limit: parseInt(i) },
      o = new FC_APP();
    o.DEFINE.AJAX_HTTP_TYPE = "JSON";
    var r = {
      server: o.DEFINE.SERVER_PROTOCOL,
      uri: o.PROTOCOL.URL.COMMENT.LIST,
      success: n,
      error_type: !0,
      loading_bar: !1,
      params: s,
    };
    o.PROTOCOL.ajaxCall(r, o);
    var l = jQuery("#fc-comment-pagination-info").data("loaded");
    1 == a && "0" == l && COMMENTLIST_FUN.setAfterCommentList();
  }),
  (COMMENTLIST_FUN.getCommentMoreAllList = function (e, t, a, i, n) {
    console.log("==COMMENTLIST_FUN.getCommentList===");
    var s = { bbs_type: e, bbs_idx: t, page: 2, limit: parseInt(i) },
      o = new FC_APP();
    o.DEFINE.AJAX_HTTP_TYPE = "JSON";
    var r = {
      server: o.DEFINE.SERVER_PROTOCOL,
      uri: o.PROTOCOL.URL.COMMENT.LIST_ALL,
      success: n,
      error_type: !0,
      loading_bar: !1,
      params: s,
    };
    o.PROTOCOL.ajaxCall(r, o);
    var l = jQuery("#fc-comment-pagination-info").data("loaded");
    1 == a && "0" == l && COMMENTLIST_FUN.setAfterCommentList();
  }),
  (COMMENTLIST_FUN.setAfterCommentList = function () {
    console.log("COMMENTLIST_FUN.setAfterCommentList "),
      jQuery("#fc-comment-pagination-info").data("loaded", "1");
  }),
  (COMMENTLIST_FUN.writeComment = function (e, t) {
    console.log("COMMENTLIST_FUN.writeComment---â "),
      null == APP && (APP = new FC_APP());
    var a = function (e) {
      "function" == typeof t &&
        (console.log("writeComment successHttpWriteComment data---â¶"),
        console.debug(e),
        t(e));
    };
    console.log(APP.PROTOCOL.URL.COMMENT.BBS_WRITE),
      console.debug(e),
      console.debug(APP),
      (APP.DEFINE.AJAX_HTTP_TYPE = "JSON");
    var i = {
      server: APP.DEFINE.SERVER_PROTOCOL,
      uri: APP.PROTOCOL.URL.COMMENT.BBS_WRITE,
      success: a,
      error_type: !0,
      loading_bar: !1,
      params: e,
    };
    APP.PROTOCOL.ajaxCall(i, APP);
  }),
  (COMMENTLIST_FUN.delComment = function (e, t) {
    console.log("COMMENTLIST_FUN.delCommentList");
    var a = {
      type: jQuery(e).data("type"),
      comment_idx: jQuery(e).data("idx"),
      depth: jQuery(e).data("depth"),
      thread: jQuery(e).data("thread"),
    };
    APP.DEFINE.AJAX_HTTP_TYPE = "JSON";
    var i = function (e) {
      for (var a = e.delete_data, i = 0, n = 0; a.length > n; n++) {
        var s = "#comment-list-idx-" + a[n];
        jQuery(s).remove(), i++;
      }
      if (
        (jQuery(".comment-replay-form").length > 0 &&
          jQuery(".comment-replay-form").remove(),
        fc_alert("ë¨ê¸°ì  ëê¸ íê°ê° ì­ì ëììµëë¤."),
        "function" == typeof t && t(e),
        jQuery(".mobile-comment-count").length > 0)
      ) {
        var o = parseInt(jQuery(".mobile-comment-count").text()),
          r = o - 1;
        0 > r && (r = 0), jQuery(".mobile-comment-count").text(r);
      }
    };
    null == APP && (APP = new FC_APP());
    var n = {
      server: APP.DEFINE.SERVER_PROTOCOL,
      uri: APP.PROTOCOL.URL.COMMENT.DEL,
      success: i,
      error_type: !1,
      loading_bar: !1,
      params: a,
    };
    APP.PROTOCOL.ajaxCall(n, APP);
  }),
  (COMMENTLIST_FUN.likeComment = function (e, t) {
    console.log("COMMENTLIST_FUN.likeComment");
    var a = {
      type: jQuery(e).data("type"),
      comment_idx: jQuery(e).data("idx"),
      depth: jQuery(e).data("depth"),
      thread: jQuery(e).data("thread"),
      idx: jQuery(e).data("idx"),
      mobile: jQuery(e).data("mobile"),
    };
    "event" == a.type && jQuery("#fc-event-view-idx").val();
    var i = function (i) {
      var n = parseInt(jQuery(e).find(".comment-like-count").html());
      jQuery(e)
        .find(".comment-like-count")
        .text(n + parseInt(i.update_data.count)),
        "bbs" == a.type
          ? fc_alert(
              "ê³µê°í´ì£¼ìì ê°ì¬í©ëë¤.\në¹ì ì ê³µê°ì´ ìë¡ëìê² í° íì´ ë©ëë¤."
            )
          : "event" == a.type && fc_alert("ê³µê°í´ì£¼ìì ê°ì¬í©ëë¤.\n"),
        "function" == typeof t && t(i);
    };
    null == APP && (APP = new FC_APP()), (APP.DEFINE.AJAX_HTTP_TYPE = "JSON");
    var n = {
      server: APP.DEFINE.SERVER_PROTOCOL,
      uri: APP.PROTOCOL.URL.COMMENT.GOOD,
      success: i,
      error_type: !1,
      loading_bar: !1,
      params: a,
    };
    APP.PROTOCOL.ajaxCall(n, APP);
  }),
  (COMMENTLIST_FUN.sendDownloadCoupon = function (e, t) {
    console.log("COMMENTLIST_FUN.likeComment");
    var a = {
        type: jQuery(e).data("type"),
        bbs_idx: jQuery(e).data("link_idx"),
        comment_idx: jQuery(e).data("idx"),
        owner: jQuery(e).data("owner"),
        idx: jQuery(e).data("idx"),
      },
      i = function (i) {
        fc_alert("ì¿ í°ì´ ì§ê¸ëììµëë¤.");
        var n = "#comment-list-idx-" + a.comment_idx;
        jQuery(n).find(".left").prepend('<span class="coupon_02"></span>'),
          jQuery(e).remove(),
          "function" == typeof t && t(i);
      };
    null == APP && (APP = new FC_APP()), (APP.DEFINE.AJAX_HTTP_TYPE = "JSON");
    var n = {
      server: APP.DEFINE.SERVER_PROTOCOL,
      uri: APP.PROTOCOL.URL.SELLER.SEND_COUPON,
      success: i,
      error_type: !1,
      loading_bar: !1,
      params: a,
    };
    APP.PROTOCOL.ajaxCall(n, APP);
  }),
  (COMMENTLIST_FUN.replyComment = function (e) {
    console.log("COMMENTLIST_FUN.replyComment");
    var t = {
      type: jQuery(e).data("type"),
      comment_idx: jQuery(e).data("idx"),
      depth: jQuery(e).data("depth"),
      thread: jQuery(e).data("thread"),
      bbs_idx: jQuery(e).data("link_idx"),
      gift: 0,
      value_ele: jQuery(e).data("ele"),
      good: jQuery(e).data("good"),
    };
    if ((console.debug(t), "bbs" == t.type))
      t.comments = jQuery("#" + t.value_ele).val();
    else {
      if ("event" != t.type) return "notice" == t.type ? void 0 : void 0;
      t.comments = jQuery("#" + t.value_ele).val();
    }
    if (5 > t.comments.length)
      return (
        fc_alert("ëê¸ì 5ì ì´ì ìì±ì ë±ë¡ ê°ë¥í©ëë¤."),
        jQuery("#" + t.value_ele).focus(),
        void 0
      );
    var a = function (e) {
      console.log("successHttpReplyComment");
      var a = e.comment_data,
        i = {
          m_idx: jQuery("#memberLoginOk").val(),
          m_level: jQuery("#memberValidLevel").val(),
          owner_idx: jQuery("#bbsOwenerIdx").val(),
          bbs_idx: jQuery("#bbsBoardIdx").val(),
          good: a.good,
        };
      COMMENT_DATA.ORDER++;
      var n = new Commentlist(t.type, a, COMMENT_DATA.ORDER, i);
      if ("bbs" == t.type)
        if (1 == IS_MOBILE) var s = n.listHtmlMobileHome();
        else var s = n.listViewHtml();
      else if ("event" == t.type) var s = n.listEventHtml();
      var o = "#comment-list-idx-" + t.comment_idx;
      if (
        (jQuery(o).after(s),
        jQuery(".comment-replay-form-contents").val(""),
        jQuery(".comment-replay-form").remove(),
        jQuery(".mobile-comment-count").length > 0)
      ) {
        var r = parseInt(jQuery(".mobile-comment-count").text()),
          l = r + 1;
        jQuery(".mobile-comment-count").text(l);
      }
    };
    COMMENTLIST_FUN.writeComment(t, a);
  }),
  (COMMENTLIST_FUN.reportComment = function (e) {
    if ((console.log("COMMENTLIST_FUN.delCommentList"), 0 == fc_check_login()))
      return GO_MENU("login"), void 0;
    var t = {
        type: jQuery(e).data("type"),
        comment_idx: jQuery(e).data("idx"),
        userid: jQuery(e).data("userid"),
        nickname: null,
        contents: null,
      },
      a = "#comment-list-idx-" + t.comment_idx;
    (t.nickname = jQuery(a).find(".comment-list-nickname").html()),
      (t.contents = jQuery(a).find(".comment-list-content").html()),
      console.debug(t),
      FC_MODAL_OPEN("fcModalCommentBadReport", !1, t);
  }),
  (COMMENTLIST_FUN.reportCommentAction = function () {
    console.log("COMMENTLIST_FUN.reportCommentAction");
    var e = new FC_DEFINE(),
      t = new FC_PROTOCOL(),
      a = e.SERVER_PROTOCOL + t.URL.COMMENT.REPORT,
      i = function (e) {
        $.param(e);
        var t = {};
        for (var a in e) {
          var i = e[a].name;
          t[i] = e[a].value;
        }
        return console.debug(t), !0;
      },
      n = function (e) {
        console.log("errStatusMsg");
        var t = e.replace(/\n/g, " ");
        fc_alert(t);
      },
      s = function (e) {
        var t = e;
        return (
          console.debug(t),
          1 != parseInt(t.status.code)
            ? (n(t.status.message), void 0)
            : (alert(
                "ëê¸ ì ê³ ê° ì ìëììµëë¤.\níì¸í ì ì¬ë¥¼ ì§ííëë¡ íê² ìµëë¤."
              ),
              $("#fcModalCommentBadReport").modal("hide"),
              void 0)
        );
      },
      o = {
        target: "#output1",
        beforeSubmit: i,
        success: s,
        url: a,
        dataType: "json",
      };
    $("#fc-modal-comment-report-form").ajaxForm(o);
  }),
  (COMMENTLIST_FUN.openReplyViewForm = function (e) {
    console.log("COMMENTLIST_FUN.openReplyViewForm");
    var t = {
      type: jQuery(e).data("type"),
      comment_idx: jQuery(e).data("idx"),
      depth: jQuery(e).data("depth"),
      thread: jQuery(e).data("thread"),
      link_idx: jQuery(e).data("link_idx"),
      good: jQuery(e).data("good"),
    };
    console.debug(t);
    var a = parseInt(t.depth) + 1,
      i = "comment-replay-form-idx-" + t.comment_idx,
      n = "comment-replay-form-contents-" + t.comment_idx,
      s = "";
    if ("bbs" == t.type)
      (s +=
        '<div class="v_comment reply input type1 comment-replay-form" id="' +
        i +
        '">'),
        (s += '    <div class="bg_reply"></div>'),
        (s += '    <div class="comment_input">'),
        (s +=
          '         <textarea class="comment-replay-form-contents" name="comment-replay-form-contents" id="' +
          n +
          '" placeholder="ëê¸ì 5ì ì´ì ìì±ì ë±ë¡ ê°ë¥í©ëë¤. (ìµë 255ì)"></textarea>'),
        (s +=
          '         <span onclick="COMMENTLIST_FUN.replyComment(this);" data-link_idx="' +
          t.link_idx +
          '" data-ele="' +
          n +
          '" data-type="' +
          t.type +
          '" data-idx="' +
          t.comment_idx +
          '" data-depth="' +
          a +
          '" data-thread="' +
          t.thread +
          '" data-good="' +
          t.good +
          '" class="btn_register">ë±ë¡</span>'),
        (s += "    </div>"),
        (s += "</div>");
    else {
      if ("event" != t.type)
        return "notice" == t.type
          ? void 0
          : (fc_alert("ê²ìí ì¢ë¥ë¥¼ ì íí´ì£¼ì¸ì."), void 0);
      (s +=
        '<div class="comment reply input type1 comment-replay-form" id="' +
        i +
        '">'),
        (s += '    <div class="comment_input">'),
        (s += '        <div class="input_inner type1">'),
        (s +=
          '            <textarea class="comment-replay-form-contents" name="comment-replay-form-contents" id="' +
          n +
          '" placeholder="ëê¸ì 5ì ì´ì ìì±ì ë±ë¡ ê°ë¥í©ëë¤. (ìµë 255ì)"></textarea>'),
        (s +=
          '            <span onclick="COMMENTLIST_FUN.replyComment(this);" data-link_idx="' +
          t.link_idx +
          '" data-ele="' +
          n +
          '" data-type="' +
          t.type +
          '" data-idx="' +
          t.comment_idx +
          '" data-depth="' +
          a +
          '" data-thread="' +
          t.thread +
          '" data-good="' +
          t.good +
          '" class="hand"><a class="btn_register">ë±ë¡</a></span>'),
        (s += "        </div>	"),
        (s += "    </div>"),
        (s += '    <div class="bg_reply"></div>'),
        (s += "</div>");
    }
    var o = "#comment-list-idx-" + t.comment_idx;
    jQuery(".comment-replay-form").remove(), jQuery(o).after(s);
  }),
  (COMMENTLIST_FUN.openReplyFormMobile = function (e) {
    console.log("COMMENTLIST_FUN.openReplyForm");
    var t = {
        type: jQuery(e).data("type"),
        design_type: jQuery(e).data("ftype"),
        comment_idx: jQuery(e).data("idx"),
        depth: jQuery(e).data("depth"),
        thread: jQuery(e).data("thread"),
        link_idx: jQuery(e).data("link_idx"),
        good: jQuery(e).data("good"),
      },
      a = parseInt(t.depth) + 1,
      i = "#comment-list-idx-" + t.comment_idx;
    jQuery(".replyArea").remove();
    var n = "comment-replay-form-idx-" + t.comment_idx,
      s = "comment-replay-form-contents-" + t.comment_idx,
      o = "";
    return "bbs" != t.type
      ? "notice" == t.type
        ? void 0
        : (fc_alert("ê²ìí ì¢ë¥ë¥¼ ì íí´ì£¼ì¸ì."), void 0)
      : ((o += '<div class="replyArea" id="' + n + '">'),
        (o += '	<div class="bg"></div>'),
        (o += '	<div class="reply">'),
        (o +=
          '		<textarea class="comment-replay-form-contents" name="comment-replay-form-contents" id="' +
          s +
          '" placeholder="ëê¸ì 5ì ì´ì ìì±ì ë±ë¡ ê°ë¥í©ëë¤. (ìµë 255ì)"></textarea>'),
        (o +=
          '		<span class="btn_reply hand" onclick="COMMENTLIST_FUN.replyComment(this);" data-link_idx="' +
          t.link_idx +
          '" data-ele="' +
          s +
          '" data-type="' +
          t.type +
          '" data-idx="' +
          t.comment_idx +
          '" data-depth="' +
          a +
          '" data-thread="' +
          t.thread +
          '" data-good="' +
          t.good +
          '" >ë±ë¡</span>'),
        (o += "	</div>"),
        (o += "</div>"),
        jQuery(i).find(".c_content").after(o),
        void 0);
  }),
  (COMMENTLIST_FUN.writeCommentFormValidate = function (e, t, a) {
    console.log("FC_APP_FUN.writeBBSCommentFormValidate"),
      null == APP && (APP = new FC_APP());
    var i = function (e) {
      var t = jQuery(e).serialize();
      COMMENTLIST_FUN.writeComment(t, a);
    };
    (COMMENT_DATA.VALID = null),
      (COMMENT_DATA.VALID = jQuery("#" + e).validate({
        debug: !0,
        errorClass: "form-error",
        messages: {
          comments: {
            required: "ì½ë©í¸ ë´ì©ì ìë ¥í´ì£¼ì¸ì.",
            minlength: jQuery.validator.format(
              "ì½ë©í¸ ë´ì©ì {0}ì ì´ì ìë ¥í´ì£¼ì¸ì"
            ),
          },
        },
        submitHandler: function (e) {
          i(e);
        },
        success: function () {},
      }));
  }),
  (Contentslist.prototype.setData = function (e) {
    for (var t in e)
      this[t] = jQuery.inArray(t, this.psase_int) >= 0 ? parseInt(e[t]) : e[t];
    (this.is_free = !1),
      (this.is_sale = !1),
      (this.orignal_price = 0),
      (this.is_movie = !1),
      (this.is_cartoon = !1),
      (this.is_adult_category = !1),
      (this.is_adult_countent = !1),
      (this.newItem = !1),
      (this.hotItem = !1),
      (this.showPrevImg = !0),
      (this.thumb_img = null),
      (this.fc_adult_class = ""),
      (this.listClass = ""),
      (this.mobileListIcon = ""),
      (this.trEleClass = ""),
      (this.no_img_url = APP.DEFINE.IMG + "/common/no_img.png"),
      (this.no_img_url_big = APP.DEFINE.IMG + "/common/no_img_big.png"),
      (this.display_img = this.no_img_url),
      this.setInfo();
  }),
  (Contentslist.prototype.setInfo = function () {
    (this.displayFileSize = this.getFileSize(this.size)),
      this.setAdultContents(),
      this.setIcons(),
      this.checkMovieFile(),
      this.setCopyrightContents(),
      this.setImages();
  }),
  (Contentslist.prototype.setIcons = function () {
    parseInt(this.purchase_cnt) > 10
      ? ((this.hotItem = !0), (this.listClass += " hot"))
      : parseInt(this.count_comment) > 10 &&
        ((this.hotItem = !0), (this.listClass += " hot")),
      1 == this.flag_hd && (this.listClass += " hd");
    var e = parseInt(this.order) % 2;
    1 == e && (this.trEleClass = "bg"),
      1 == this.is_adult_countent &&
        ((this.fc_adult_class = "fc-adult-open"),
        (this.mobileListIcon += "ico adult"));
  }),
  (Contentslist.prototype.setAdultContents = function () {
    (this.is_adult_countent =
      1 == this.flag_adult || 11 == this.cate1 ? !0 : !1),
      11 == this.cate1 && (this.is_adult_category = !0);
  }),
  (Contentslist.prototype.setCopyrightContents = function () {
    1 == this.chkcopy
      ? ((this.is_copyright_content = !0), (this.cash_price = this.cash))
      : ((this.is_copyright_content = !1),
        (this.cash_price = parseInt(this.get_non_copyright_content_price())),
        0 == this.is_adult_countent &&
          (this.cash_price = parseInt(this.cash_price / 1))),
      (this.orignal_price = this.cash_price),
      (this.sale_txt = ""),
      this.sale_cash > 0 &&
        (1 == this.sale_cash
          ? ((this.is_free = !0),
            (this.cash_price = 0),
            (this.sale_txt = "ë¬´ë£"))
          : ((this.is_sale = !0),
            (this.cash_price = this.sale_cash),
            (this.sale_txt = this.sale_cash + "ì"))),
      1 == this.is_copyright_content && this.orignal_price == this.sale_cash,
      (this.orignal_price = Math.round(this.orignal_price)),
      (this.displayCash = fc_number_format(this.orignal_price)),
      (0 == this.displayCash || "0" == this.displayCash) &&
        (this.sale_txt = "ë¬´ë£");
  }),
  (Contentslist.prototype.setSaleEventData = function (e) {
    for (var t in e)
      this[t] = jQuery.inArray(t, this.psase_int) >= 0 ? parseInt(e[t]) : e[t];
    1 == this.is_event_sale &&
      0 == this.is_copyright_content &&
      13 != this.cate1 &&
      ((this.sale_cash = this.event_sale_price), this.setCopyrightContents());
  }),
  (Contentslist.prototype.get_non_copyright_content_price = function () {
    if (1 == isDefined(this.cash_price)) return this.cash_price;
    if (12 == this.cate1) return 20;
    var e = this.size;
    1 == isDefined(this.file_full_size) && (e = this.file_full_size);
    var t = Math.round(
      10 * Math.round(Math.round(Math.round(e / 1045576) / 10) / 10)
    );
    return (
      1 == IS_MOBILE &&
        11 == this.cate1 &&
        (t = Math.round(
          10 * Math.round(Math.round(Math.round(e / 1045576) / 10) / 7)
        )),
      (t = 13 == this.cate1 ? (10 > t ? 0 : t) : 30 > t ? 30 : t)
    );
  }),
  (Contentslist.prototype.setImages = function () {
    if (isDefined(this.list_img_thumbnail)) {
      var e = this.list_img_thumbnail.substr(0, 2),
        t = this.list_img_thumbnail.substr(2, 2);
      this.list_img_thumbnail =
        APP.DEFINE.UPLOAD_IMG_SERVER +
        "/" +
        e +
        "/" +
        t +
        "/" +
        this.list_img_thumbnail;
    }
    if (
      (1 == isDefined(this.url_img_thumbnail) &&
        (this.display_img =
          -1 == jQuery.inArray(this.url_img_thumbnail, this.fail_img)
            ? this.url_img_thumbnail
            : null),
      null == this.display_img && 1 == isDefined(this.url_img_first))
    ) {
      var a = this.url_img_first.split("."),
        i = a.length;
      if (a.length > 0) {
        var n = "." + a[i - 1];
        this.display_img = this.url_img_first.replace(n, "_thumb.gif");
      }
    }
    null != this.display_img &&
      -1 != jQuery.inArray(this.display_img, this.fail_img) &&
      (this.display_img = this.thumb_img),
      null != this.stream_img &&
        -1 != jQuery.inArray(this.stream_img, this.fail_img) &&
        (this.stream_img = this.no_img_url),
      0 == isDefined(this.preview_img)
        ? ((this.preview_img = null), this.set_preview_img())
        : this.set_preview_img_class();
  }),
  (Contentslist.prototype.set_preview_img = function () {
    parseInt(this.idx) / 1e5,
      (this.preview_img =
        0 == this.is_adult_countent ? this.display_img : null),
      this.set_preview_img_class();
  }),
  (Contentslist.prototype.setTheumNailImg = function () {}),
  (Contentslist.prototype.set_preview_img_class = function () {
    (this.nonImgclass = ""),
      (this.add_top_style = ""),
      (this.imgSpanEleName = "thume-img-span-ele-" + this.idx);
  }),
  (Contentslist.prototype.checkMovieFile = function () {
    jQuery.inArray(this.cate1, this.movie_cate) >= 0
      ? (this.is_movie = !0)
      : ((this.is_cartoon =
          jQuery.inArray(this.cate1, this.cartoon_cate) >= 0 ? !0 : !1),
        (this.is_movie = !1));
  }),
  (Contentslist.prototype.check_adult = function () {
    return 1 == parseInt(this.flag_adult) ? !0 : !1;
  }),
  (Contentslist.prototype.htmlList = function (e) {
    console.log("htmlList"), console.log(this.display_img);
    var t = e[this.cate2];
    this.add_style =
      "background:url(" + this.display_img + "); background-size: 45px auto;";
    var a = "";
    (a +=
      '  <tr class="' +
      this.trEleClass +
      " " +
      this.fc_adult_class +
      '" data-cate1="' +
      this.cate1 +
      '">'),
      (a +=
        '	    <td class="hand clist ' +
        this.listClass +
        '" data-cate1="' +
        this.cate1 +
        '" onclick="FC_APP_FN.openContentsView(' +
        this.idx +
        ', this);">'),
      (a +=
        1 == this.is_img_lazy
          ? '		 <img class="list_sumimg lazy ' +
            this.nonImgclass +
            '" src="' +
            this.no_img_url +
            '" data-original="' +
            this.display_img +
            '">'
          : '		 <img class="list_sumimg lazy ' +
            this.nonImgclass +
            '" src="' +
            this.display_img +
            '">'),
      (a += '	     <span class="tit">' + this.title + "</span>"),
      this.count_comment > 0 &&
        (a += '		<span class="reply_num">[' + this.count_comment + "]</span>"),
      (a +=
        '	     <span class="ico hot">Hot</span><span class="ico new">new</span><span class="ico hd">hd</span>'),
      (a += "	    </td>"),
      (a += "		<td>" + this.displayFileSize + "</td>"),
      (a += "		<td>" + this.displayCash + "P</td>"),
      (a +=
        '		<td><em data-nickname="' +
        this.nickname +
        '" data-userid="' +
        this.userid +
        '" onclick="FC_APP_FN.onClickContentsSeller(this);">' +
        this.nickname +
        "</em></td>"),
      (a += "	</tr>");
    try {
      return a;
    } finally {
      (a = null), (t = null), (e = null);
    }
  }),
  (Contentslist.prototype.contentsHtmlList = function (e, t) {
    console.log("contentsHtmlList");
    var a = this.display_img;
    1 == isDefined(this.list_img_thumbnail) && (a = this.list_img_thumbnail);
    var i = e[this.cate2];
    this.add_style = "background:url(" + a + "); background-size: 45px auto;";
    var n = "",
      s =
        "/www/contents/#!/" +
        APP.SELECTED.main +
        "/" +
        APP.SELECTED.sub +
        "/" +
        APP.SELECTED.page +
        "/view/" +
        this.idx +
        "/";
    (n +=
      '  <tr class="' +
      this.trEleClass +
      " " +
      this.fc_adult_class +
      '" data-cate1="' +
      this.cate1 +
      '">'),
      (n +=
        '	    <td class="hand clist ' +
        this.listClass +
        '" data-cate1="' +
        this.cate1 +
        '" colspan="4">'),
      (n += '			<a href="' + s + '" class="view_link">'),
      (n += '			<div class="one">'),
      (n +=
        1 == this.is_img_lazy
          ? '				<img class="list_sumimg lazy ' +
            this.nonImgclass +
            '" src="' +
            this.no_img_url +
            '" data-original="' +
            a +
            '" onerror="utility.ui.onErrorImgLoadAfterChange(this)" data-errimg="' +
            this.no_img_url +
            '" >'
          : '				<img class="list_sumimg lazy ' +
            this.nonImgclass +
            '" src="' +
            a +
            '" onerror="utility.ui.onErrorImgLoadAfterChange(this)" data-errimg="' +
            this.no_img_url +
            '" >'),
      (n +=
        '				<span class="ico adult">19</span><span class="ico requst">requst</span>'),
      (n +=
        '				<span class="tit z_color fc-contents-list-tit">' +
        this.title +
        "</span>"),
      this.count_comment > 0 &&
        (n += '			<span class="reply_num">(' + this.count_comment + ")</span>"),
      (n +=
        '				<span class="ico hot">Hot</span><span class="ico new">new</span><span class="ico hd">hd</span>'),
      (n += "			</div>"),
      (n += '			<div class="two">' + this.displayFileSize + "</div>"),
      1 == this.is_event_sale &&
      0 == this.is_copyright_content &&
      10 == this.sale_cash
        ? ((n += '		<div class="f_block three">'),
          (n += '			<span class="event_ico"></span>'),
          (n += '			<span class="free_txt">' + this.sale_txt + "</span>"),
          (n += "		</div>"))
        : (this.orignal_price > this.cash_price && 1 == this.is_sale) ||
          (this.cash == this.sale_cash && 1 == this.is_sale)
        ? ((n += '		<div class="f_block three">'),
          (n += '			<span class="sum_plus"></span>'),
          (n += '			<span class="free_txt">' + this.sale_txt + "</span>"),
          (n += "		</div>"))
        : 0 == this.displayCash || "0" == this.displayCash
        ? ((n += '		<div class="f_block three">'),
          (n += '			<span class="free_txt type1">' + this.sale_txt + "</span>"),
          (n += "		</div>"))
        : 1 == this.is_free || 1 == this.is_sale
        ? ((n += '		<div class="f_block three">'),
          (n += '			<span class="line">' + this.displayCash + "P</span>"),
          (n += '			<span class="free_txt">' + this.sale_txt + "</span>"),
          (n += "		</div>"))
        : (n += '		<div class="three">' + this.displayCash + "P</div>"),
      (n += "			</a>"),
      (n += '			<div class="four">'),
      (n +=
        '				<em data-idx="' +
        this.idx +
        '" onclick="WEB_CONTENTS.onclickSellerNickname(this);" class="nickname">' +
        this.nickname +
        "</em>"),
      (n +=
        '				<span class="btn_datalist" data-type="seller_list" data-nickname="' +
        this.nickname +
        '" onclick="WEB_CONTENTS.onclickSellerInfoList(this)">ìë£ì¤</span>'),
      (n +=
        '      		<div class="user_list" id="fc-contents-list-seller-info-' +
        this.idx +
        '">'),
      (n += "					<p>" + this.nickname + "</p>"),
      (n += "					<ul>"),
      (n +=
        '						<li data-type="seller_list" data-nickname="' +
        this.nickname +
        '" onclick="WEB_CONTENTS.onclickSellerInfoList(this)">Â·<span>íë§¤ìë£ë³´ê¸°</span></li>'),
      (n +=
        '						<li data-type="note" data-nickname="' +
        this.nickname +
        '" onclick="WEB_CONTENTS.onclickSellerInfoList(this)">Â·<span>ìª½ì§ë³´ë´ê¸°</span></li>'),
      (n += "					</ul>"),
      (n += "				</div>"),
      (n += "			</div>"),
      (n += "		</td>"),
      (n += "	</tr>");
    try {
      return n;
    } finally {
      (n = null), (s = null), (i = null), (t = null), (a = null);
    }
  }),
  (Contentslist.prototype.htmlSearchList = function (e) {
    var t = this.title.replace(e, '<span class="search_text">' + e + "</span>"),
      a = this.url_img_thumbnail;
    1 == isDefined(this.list_img_thumbnail) && (a = this.list_img_thumbnail),
      0 == isDefined(a) && (a = this.no_img_url);
    var i = "";
    (i +=
      '  <tr class="' + this.trEleClass + " " + this.fc_adult_class + '" >'),
      (i += '	    <td class="hand clist ' + this.listClass + '" colspan="4">'),
      (i +=
        '	    <a class="view_link" data-keywd="' +
        e +
        '" data-cate1="' +
        this.cate1 +
        '" onclick="FC_APP_FN.openContentsView(' +
        this.idx +
        ', this);">'),
      (i += '	    <div class="one">'),
      (i +=
        '			<img class="list_sumimg ' +
        this.nonImgclass +
        '" src="' +
        a +
        '" data- data-errimg="' +
        this.no_img_url +
        '">'),
      (i +=
        '			<span class="ico adult">19</span><span class="ico requst">requst</span>'),
      (i += '			<span class="tit z_color fc-contents-list-tit">' + t + "</span>"),
      this.count_comment > 0 &&
        (i += '		<span class="reply_num">(' + this.count_comment + ")</span>"),
      (i +=
        '			<span class="ico hot">Hot</span><span class="ico new">new</span><span class="ico hd">hd</span>'),
      (i += "	    </div>"),
      (i += '		<div class="two">' + this.displayFileSize + "</div>"),
      1 == this.is_event_sale &&
      0 == this.is_copyright_content &&
      10 == this.sale_cash
        ? ((i += '		<div class="f_block three">'),
          (i += '			<span class="event_ico"></span>'),
          (i += '			<span class="free_txt">' + this.sale_txt + "</span>"),
          (i += "		</div>"))
        : (this.orignal_price > this.cash_price && 1 == this.is_sale) ||
          (this.cash == this.sale_cash && 1 == this.is_sale)
        ? ((i += '		<div class="f_block three">'),
          (i += '			<span class="sum_plus"></span>'),
          (i += '			<span class="free_txt">' + this.sale_txt + "</span>"),
          (i += "		</div>"))
        : 0 == this.displayCash || "0" == this.displayCash
        ? ((i += '		<div class="f_block three">'),
          (i += '			<span class="free_txt type1">' + this.sale_txt + "</span>"),
          (i += "		</div>"))
        : 1 == this.is_free || 1 == this.is_sale
        ? ((i += '		<div class="f_block three">'),
          (i += '			<span class="line">' + this.displayCash + "P</span>"),
          (i += '			<span class="free_txt">' + this.sale_txt + "</span>"),
          (i += "		</div>"))
        : (i += '		<div class="three">' + this.displayCash + "P</div>"),
      (i += "	    </a>"),
      (i += '		<div class="four">'),
      (i +=
        '				<em data-idx="' +
        this.idx +
        '" onclick="WEB_CONTENTS.onclickSellerNickname(this);" class="nickname">' +
        this.nickname +
        "</em>"),
      (i +=
        '				<span class="btn_datalist" data-type="seller_list" data-nickname="' +
        this.nickname +
        '" onclick="WEB_CONTENTS.onclickSellerInfoList(this)">ìë£ì¤</span>'),
      (i +=
        '      		<div class="user_list" id="fc-contents-list-seller-info-' +
        this.idx +
        '">'),
      (i += "					<p>" + this.nickname + "</p>"),
      (i += "					<ul>"),
      (i +=
        '						<li data-type="seller_list" data-nickname="' +
        this.nickname +
        '" onclick="WEB_CONTENTS.onclickSellerInfoList(this)">Â·<span>íë§¤ìë£ë³´ê¸°</span></li>'),
      (i +=
        '						<li data-type="note" data-nickname="' +
        this.nickname +
        '" onclick="WEB_CONTENTS.onclickSellerInfoList(this)">Â·<span>ìª½ì§ë³´ë´ê¸°</span></li>'),
      (i += "					</ul>"),
      (i += "				</div>"),
      (i += "		</div>"),
      (i += "		</td>"),
      (i += "	</tr>");
    try {
      return i;
    } finally {
      (i = null), (t = null), (e = null), (a = null);
    }
  }),
  (Contentslist.prototype.htmlListBestTop = function (e, t) {
    var a = " hide";
    null != this.preview_img && 1 == this.is_movie && (a = " show");
    var i = e[this.cate2];
    0 == t && (i = e[this.cate1] + ">" + e[this.cate2]);
    var n = "num_" + this.order,
      s = "";
    (s +=
      '  <div class="content_show ' +
      this.fc_adult_class +
      '" data-cate1="' +
      this.cate1 +
      '" onclick="FC_APP_FN.openContentsView(' +
      this.idx +
      ', this);">'),
      (s +=
        '    <div class="con_img ' +
        this.nonImgclass +
        '" style="' +
        this.add_top_style +
        '" id="' +
        this.imgSpanEleName +
        '"></div>'),
      (s += '    <span class="' + n + '">' + this.order + "</span>"),
      1 == this.is_movie && (s += '    <a class="btn_play' + a + '">ì¬ì</a>'),
      (s += "	</div>"),
      (s +=
        '	<a><span class="title">' +
        this.title +
        '</span><span class="category">' +
        i +
        "</span></a>");
    try {
      return s;
    } finally {
      (s = null), (i = null), (t = null), (e = null), (a = null);
    }
  }),
  (Contentslist.prototype.htmlListBest = function (e, t) {
    var a = e[this.cate2];
    0 == t && (a = e[this.cate1] + ">" + e[this.cate2]);
    var i = "";
    (i +=
      '  <tr class="' +
      this.trEleClass +
      " " +
      this.fc_adult_class +
      '" data-cate1="' +
      this.cate1 +
      '" onclick="FC_APP_FN.openContentsView(' +
      this.idx +
      ', this);">'),
      (i += '	    <td colspan="3" class="hand clist ' + this.listClass + '">'),
      (i +=
        '		 <img class="list_sumimg' +
        this.nonImgclass +
        '" src="' +
        this.display_img +
        '">'),
      (i +=
        '	     <span class="ico adult">19</span><span class="ico requst">requst</span>'),
      (i += "	     <a>" + this.title + "</a>"),
      this.count_comment > 0 &&
        (i += '		<span class="reply_num">(' + this.count_comment + ")</span>"),
      (i +=
        '	     <span class="ico hot">Hot</span><span class="ico new">new</span><span class="ico hd">hd</span>'),
      (i += "	    </td>"),
      (i += '		<td><span class="txt_gray">' + a + "</span></td>"),
      (i += "	</tr>");
    try {
      return i;
    } finally {
      (i = null), (a = null), (e = null), (t = null);
    }
  }),
  (Contentslist.prototype.htmlListTheme = function (e) {
    var t = this.title.replace(e, '<span class="search_text">' + e + "</span>"),
      a = "";
    (a +=
      '<li class="hand ' +
      this.fc_adult_class +
      '" onclick="FC_APP_FN.openContentsView(' +
      this.idx +
      ');">'),
      (a += '	<div><span><a class="tit">' + t + "</a></span></div>"),
      (a +=
        '	<div><span class="txt_black">' +
        this.displayFileSize +
        "</span></div>"),
      (a +=
        '  <div><span class="txt_black last">' +
        this.nickname +
        "</span></div>"),
      (a += "</li>");
    try {
      return a;
    } finally {
      (a = null), (t = null), (e = null);
    }
  }),
  (Contentslist.prototype.htmlViewSellerContents = function (e) {
    var t = e[this.cate1] + "> " + e[this.cate2];
    this.listClass = "";
    var a = "";
    (this.newItem = !1),
      (this.hotItem = !1),
      parseInt(this.purchase_cnt) > 10
        ? ((this.hotItem = !0), (this.listClass += " hot"))
        : parseInt(this.count_comment) > 10 &&
          ((this.hotItem = !0), (this.listClass += " hot")),
      1 == this.flag_hd && (this.listClass += " hd"),
      (a +=
        '<li class=" hand' +
        this.trEleClass +
        " " +
        this.fc_adult_class +
        '" data-cate1="' +
        this.cate1 +
        '" data-idx="' +
        this.idx +
        '" onclick="WEB_CONTENTS.VIEW.getContentsViewFromOtherList(this);">'),
      (a += '  <div class="clist ' + this.listClass + ' l1">'),
      (a +=
        '		<span class="list_sumimg"><img onerror="utility.ui.onErrorImgLoad(this);" src="' +
        this.display_img +
        '" style="width:45px;height:45px;"></span>'),
      (a +=
        '		<span class="ico adult"></span><span class="tit view-seller-contents-list">' +
        this.title +
        ".</span>"),
      this.count_comment > 0 &&
        (a += '		<span class="reply_num">(' + this.count_comment + ")</span>"),
      (a +=
        '	    <span class="ico hot">Hot</span><span class="ico new">new</span><span class="ico hd">hd</span>'),
      (a += "  </div>"),
      (a += '  <div class="l2">' + t + "</div>"),
      (a += "</li>");
    try {
      return a;
    } finally {
      (a = null), (t = null), (e = null);
    }
  }),
  (Contentslist.prototype.htmlMobileHome = function (e, t) {
    0 == isDefined(e) &&
      ((fc_category = new FC_CATEGORY()), (e = fc_category.cateName));
    var a = e[this.cate1] + ">" + e[this.cate2],
      i = "mobile-home-list-view-li-" + this.idx,
      n = "mobile-home-list-detail-view-div-" + this.idx,
      s = "mobile-contents-detail-info-" + this.idx,
      o = "";
    (o +=
      '						<li class="mobile-contents-list-li ' +
      this.fc_adult_class +
      '" id="' +
      i +
      '" data-title="' +
      this.title +
      '">'),
      (o += '							<div class="hand">'),
      (o +=
        '								<div class="top mobile-contents-list-div" data-is_adult="' +
        this.is_adult_countent +
        '" data-seller_list="' +
        t +
        '" data-seller="' +
        this.m_id +
        '" data-cate1="' +
        this.cate1 +
        '" id="mobile-contents-list-div-' +
        this.idx +
        '" data-click="0" data-bbs_no="' +
        this.idx +
        '" data-idx="' +
        this.idx +
        '" data-type="home" data-img="' +
        this.stream_bestimg +
        '" onclick="FC_APP_FUN.openMobileContentsView(this,' +
        this.idx +
        ',true);">'),
      (o += '									<div class="r_imgArea">'),
      (o += "										<span></span>"),
      (o +=
        1 == t
          ? 1 == this.is_img_lazy
            ? '										<img id="' +
              this.imgSpanEleName +
              '" class="mobile img-list lazy" data-previmg="' +
              this.stream_img +
              '" data-original="' +
              this.stream_thumbnail +
              '" src="' +
              this.stream_img +
              '"/>'
            : '										<img id="' +
              this.imgSpanEleName +
              '" class="mobile img-list lazy" data-previmg="' +
              this.stream_img +
              '" data-original="' +
              this.stream_thumbnail +
              '" src="' +
              this.stream_thumbnail +
              '"/>'
          : 1 == this.is_img_lazy
          ? '										<img id="' +
            this.imgSpanEleName +
            '" class="mobile img-list lazy" data-previmg="' +
            this.stream_img +
            '" data-original="' +
            this.stream_thumbnail +
            '" src=""/>'
          : '										<img id="' +
            this.imgSpanEleName +
            '" class="mobile img-list lazy" data-previmg="' +
            this.stream_img +
            '" src="' +
            this.stream_thumbnail +
            '"/>'),
      (o += "									</div>"),
      (o += '									<div class="l_conArea">'),
      (o +=
        '										<p class="con_tit c_list fc-mobile-contents-list-tit"><span class="' +
        this.mobileListIcon +
        '"></span>' +
        this.title +
        "</p>"),
      (o += '										<span class="category">' + a + "</span>"),
      "Y" == this.is_mobile
        ? ((o += '										<div class="file_info">'),
          1 == this.is_movie &&
            (o +=
              '											<span class="time"><span></span>' +
              this.display_play_time +
              "</span>"),
          (o +=
            (this.orignal_price > this.cash_price && 1 == this.is_sale) ||
            (this.cash == this.sale_cash && 1 == this.is_sale)
              ? '						<span class="point"><span class="ico"></span><span class="sum_ico"></span><span class="free type1">' +
                this.sale_cash +
                "ì</span></span>"
              : 0 == this.cash_price
              ? 0 == this.orignal_cash
                ? 13 == this.cate1
                  ? '						<span class="view_free"></span>'
                  : '						<span class="point"><span class="ico"></span><span class="free type1">ë¬´ë£</span></span>'
                : '						<span class="point"><span class="ico"></span><span class="price type1">' +
                  this.orignal_cash +
                  '</span><span class="free">ë¬´ë£</span></span>'
              : this.sale_cash > 1
              ? '						<span class="point"><span class="ico"></span><span class="price type1">' +
                this.orignal_cash +
                '</span> <span class="free"> â ' +
                this.cash_price +
                "ì</span></span>"
              : '						<span class="point"><span class="ico"></span><span class="price">' +
                this.cash_price +
                "</span></span>"),
          (o += "										</div>"))
        : 1 == this.just_mobile_down
        ? ((o += '										<div class="down_info">'),
          (o += "											<span>ëª¨ë°ì¼ ë¤ì´ë¡ë ì ì©</span>"),
          (o += "										</div>"))
        : 1 == this.just_pc_down &&
          ((o += '										<div class="down_info">'),
          (o += "											<span>PC/ë¤ì´ë¡ë ì ì©</span>"),
          (o += "										</div>")),
      (o += "									</div>"),
      (o += "								</div>"),
      (o += "							</div>"),
      (o += "						</li>");
    try {
      return o;
    } finally {
      (o = null), (a = null), (i = null), (n = null), (s = null);
    }
  }),
  (Contentslist.prototype.htmlMobileMyDown = function (e) {
    e[this.cate1] + ">" + e[this.cate2];
    var t = "mobile-home-list-view-li-" + this.idx;
    "mobile-home-list-detail-view-div-" + this.idx,
      "mobile-contents-detail-info-" + this.idx,
      console.log(this.is_cartoon);
    var a = "";
    return (
      (a += '<li class="mobile-contents-list-li" id="' + t + '">'),
      (a +=
        '	<span class="check" data-val=' + this.pidx + "><span></span></span>"),
      (a +=
        '	<span class="hand" data-click="0" data-idx="' +
        this.idx +
        '" data-type="mydown" data-bbs_no="' +
        this.idx +
        '" onclick="FC_APP_FUN.openMobileContentsView(null, ' +
        this.idx +
        ', true);">'),
      (a +=
        '		<div class="top" data-click="0" data-idx="' +
        this.idx +
        '" data-cate1="' +
        this.cate1 +
        '" data-type="mydown">'),
      (a += '			<div class="r_imgArea">'),
      (a += "				<span></span>"),
      (a +=
        1 == this.is_img_lazy
          ? '					<img onerror="utility.ui.onErrorImgLoad(this);" id="' +
            this.imgSpanEleName +
            '" class="mobile img-list lazy" data-previmg="' +
            this.preview_img +
            '" data-original="' +
            this.stream_img +
            '" src=""/>'
          : '					<img onerror="utility.ui.onErrorImgLoad(this);" id="' +
            this.imgSpanEleName +
            '" class="mobile img-list lazy" data-previmg="' +
            this.preview_img +
            '" data-original="' +
            this.stream_img +
            '" src="' +
            this.stream_img +
            '"/>'),
      (a += "			</div>"),
      (a += '			<div class="l_conArea">'),
      (a +=
        '				<p class="con_tit"><span class="' +
        this.mobileListIcon +
        '"></span>' +
        this.title +
        "</p>"),
      (a +=
        '				<span class="category">' +
        e[this.cate1] +
        "<span>&gt;</span>" +
        e[this.cate2] +
        "</span>"),
      (a += '				<div class="file_info">'),
      (a +=
        '					<span class="time"><span></span>' +
        this.display_play_time +
        "</span>"),
      (a += '					<span class="point">-' + this.end_time + "ìê°</span>"),
      (a += "				</div>"),
      (a += "			</div>"),
      (a += "		</div>"),
      (a += "	</span>"),
      (a += "</li>")
    );
  }),
  (Contentslist.prototype.htmlMobileMyZzim = function (e) {
    e[this.cate1] + ">" + e[this.cate2];
    var t = "mobile-home-list-view-li-" + this.idx;
    "mobile-home-list-detail-view-div-" + this.idx,
      "mobile-contents-detail-info-" + this.idx,
      console.log(this.is_cartoon);
    var a = "";
    return (
      (a += '<li class="mobile-contents-list-li" id="' + t + '">'),
      (a +=
        '	<span class="check" data-val=' + this.zidx + "><span></span></span>"),
      (a +=
        '	<span class="hand" data-click="0" data-idx="' +
        this.idx +
        '" data-type="myzzim" data-bbs_no="' +
        this.idx +
        '" onclick="FC_APP_FUN.openMobileContentsView(null, ' +
        this.idx +
        ', true);">'),
      (a +=
        '		<div class="top" data-click="0" data-idx="' +
        this.idx +
        '" data-cate1="' +
        this.cate1 +
        '" data-type="myzzim">'),
      (a += '			<div class="r_imgArea">'),
      (a +=
        1 == this.is_img_lazy
          ? '					<img onerror="utility.ui.onErrorImgLoad(this);" id="' +
            this.imgSpanEleName +
            '" class="mobile img-list lazy" data-previmg="' +
            this.preview_img +
            '" data-original="' +
            this.stream_img +
            '" src=""/>'
          : '					<img onerror="utility.ui.onErrorImgLoad(this);" id="' +
            this.imgSpanEleName +
            '" class="mobile img-list lazy" data-previmg="' +
            this.preview_img +
            '" data-original="' +
            this.stream_img +
            '" src="' +
            this.stream_img +
            '"/>'),
      (a += "				<span></span>"),
      (a += "			</div>"),
      (a += '			<div class="l_conArea">'),
      (a +=
        '				<p class="con_tit"><span class="' +
        this.mobileListIcon +
        '"></span>' +
        this.title +
        "</p>"),
      (a +=
        '				<span class="category">' +
        e[this.cate1] +
        "<span>&gt;</span>" +
        e[this.cate2] +
        "</span>"),
      (a += '				<div class="file_info">'),
      (a +=
        '					<span class="time"><span></span>' +
        this.display_play_time +
        "</span>"),
      (a += '					<span class="point">-' + this.end_time + "ìê°</span>"),
      (a += "				</div>"),
      (a += "			</div>"),
      (a += "		</div>"),
      (a += "	</span>"),
      (a += "</li>")
    );
  }),
  (Contentslist.prototype.getFileSize = function (e) {
    var t = e;
    if (t > 0)
      var a = Math.floor(100 * (t / 1024)) / 100,
        i = Math.floor(100 * (a / 1024)) / 100,
        n = Math.floor(100 * (i / 1024)) / 100;
    var s = 0,
      o = "";
    return (
      n > 1
        ? ((s = n), (o = '<span class="txt_black">G</span>'))
        : i > 1
        ? ((s = i), (o = '<span class="txt_black">M</span>'))
        : a > 1
        ? ((s = a), (o = '<span class="txt_black">K</span>'))
        : t > 1
        ? ((s = t), (o = '<span class="txt_black">B</span>'))
        : ((s = e), (o = '<span class="txt_black">G</span>')),
      (s = s.toFixed(1)),
      s + o
    );
  });
var CONTENTS_FUN = {};
(CONTENTS_FUN.setFavoritesContents = function (e) {
  console.log("CONTENTS_FUN.setFavoritesContents");
  var t = new FC_APP();
  t.fc_category = new FC_CATEGORY();
  var a = {
    bbs_idx: jQuery(e).data("idx"),
    is_mobile: jQuery(e).data("mobile"),
    is_web: jQuery(e).data("is_web"),
  };
  if (0 == fc_check_login()) return GO_MENU("login", "view"), void 0;
  var i = function (e) {
      return (
        console.debug(e),
        e.count,
        e.count > 1
          ? "Y" == a.is_web
            ? (fc_alert(
                "í´ë¹ ì½íì¸ ë ì´ë¯¸ ì°í ì½íì¸ ìëë¤.<br>'PC' ë§ì´íì´ì§ ì° ëª©ë¡ìì íì¸í´ ë³´ì¸ì."
              ),
              void 0)
            : (fc_alert(
                "í´ë¹ ì½íì¸ ë ì´ë¯¸ ì°í ì½íì¸ ìëë¤.\në§ì´íì´ì§ ì°ëª©ë¡ìì íì¸í´ ë³´ì¸ì."
              ),
              void 0)
          : "Y" == a.is_web
          ? (fc_alert(
              "í´ë¹ ì½íì¸ ë¥¼ ì°íì¨ìµëë¤.<br>í´ë¹ íì¼ì PC/ë¤ì´ë¡ëì©ì¼ë¡, 'PC' ë§ì´íì´ì§ ì° ëª©ë¡ìì ë³´ì¤ ì ììµëë¤."
            ),
            void 0)
          : (fc_alert(
              "í´ë¹ ì½íì¸ ë¥¼ ì° íì¨ìµëë¤.\nëª©ë¡ì ë§ì´íì´ì§ ì°ëª©ë¡ìì ë³´ì¤ ì ììµëë¤."
            ),
            void 0)
      );
    },
    n = {
      server: t.DEFINE.SERVER_PROTOCOL,
      uri: t.PROTOCOL.URL.CONTENTS.FAVORITES,
      success: i,
      error_type: !0,
      loading_bar: !1,
      params: a,
    };
  t.PROTOCOL.ajaxCall(n, t);
}),
  (CONTENTS_FUN.contentsBadReport = function (e) {
    if ((console.log("CONTENTS_FUN.contentsBadReport"), 0 == fc_check_login()))
      return GO_MENU("login"), void 0;
    var t = {
      title: jQuery("#contents-view-top-title").find(".txt").html(),
      idx: jQuery(e).data("idx"),
      is_mobile: jQuery(e).data("mobile"),
      type: jQuery(e).data("type"),
      s_title: jQuery(e).data("title"),
    };
    if ((console.debug(t), "1" == t.is_mobile)) {
      var a = "#mobile-home-list-view-li-" + t.idx;
      t.title = jQuery(a).data("title");
    }
    var i = t.title;
    0 == isDefined(i) && (i = t.s_title);
    var n = t.idx + " : " + i,
      s = i;
    ("smart_db" == t.type || "theme" == t.type) &&
      ((i = t.s_title), (n = "smart DB:" + i), (s = n)),
      (t.saveTitle = s),
      (t.disPlayTitle = n),
      FC_MODAL_OPEN("fcModalContentsReport", !1, t);
  }),
  (CONTENTS_FUN.reportBadContentsAction = function () {
    console.log("CONTENTS_FUN.reportBadContentsAction");
    var e = new FC_DEFINE(),
      t = new FC_PROTOCOL(),
      a = e.SERVER_PROTOCOL + t.URL.CS.QNA_INPUT,
      i = function (e) {
        $.param(e);
        var t = {};
        for (var a in e) {
          var i = e[a].name;
          t[i] = e[a].value;
        }
        return console.debug(t), !0;
      },
      n = function (e) {
        console.log("errStatusMsg");
        var t = e.replace(/\n/g, " ");
        fc_alert(t);
      },
      s = function (e) {
        var t = e;
        if ((console.debug(t), 1 != parseInt(t.status.code)))
          return n(t.status.message), void 0;
        var a = function () {
          $("#fcModalContentsReport").modal("hide");
        };
        return (
          fc_alert(
            "ì½íì¸  ì ê³ ê° ì ìëììµëë¤.\níì¸í ì ì¬ë¥¼ ì§ííëë¡ íê² ìµëë¤.",
            "",
            a
          ),
          void 0
        );
      },
      o = {
        target: "#output1",
        beforeSubmit: i,
        beforeSerialize: function (e) {
          console.log("beforeSerialize"), console.debug(e);
          var t = $(e).find(".form-bbs-idx").val(),
            a = $(e).find(".form-bbs-title").val(),
            i = $(e).find(".orignal-contents").val(),
            n =
              "<b>::ì½íì¸  ì ê³ ::</b><br>ì½íì¸  ë²í¸:" +
              t +
              "<br>ì½íì¸  ì ëª©:" +
              a;
          1 == isDefined(i) && (n += "<br>ì ê³ ë´ì©:" + i);
          var s = jQuery("#isPhonegap").val(),
            o = 1 == s ? 2 : 1;
          $(e).find(".form-bbs-is-mobile").val(o),
            $(e).find(".form-bbs-contents").val(n);
        },
        success: s,
        url: a,
        dataType: "json",
      };
    $("#fc-modal-contents-bad-report").ajaxForm(o),
      jQuery("#fc-modal-contents-bad-report").find(".orignal-contents").focus();
  }),
  (CONTENTS_FUN.voteBrocastContents = function (e) {
    console.log("CONTENTS_FUN.voteBrocastContents");
    var t = {
        keywd: jQuery(e).data("keywd"),
        bro_idx: jQuery(e).data("bro_idx"),
        show_date: jQuery(e).data("show_date"),
        bbs_idx: jQuery(e).data("bbs_idx"),
        chapter: jQuery(e).data("chapter"),
        cate1: jQuery(e).data("cate1"),
        content_idx: jQuery(e).data("content_idx"),
      },
      a = function (e) {
        console.debug(e);
      },
      i = new FC_APP(),
      n = {
        server: i.DEFINE.SERVER_PROTOCOL,
        uri: i.PROTOCOL.URL.SEARCH.CALL_BC_VOTE,
        success: a,
        error_type: !1,
        loading_bar: !0,
        params: t,
      };
    i.PROTOCOL.ajaxCall(n, i);
  }),
  (linkContentsList.prototype.setData = function (e) {
    for (var t in e)
      this[t] = jQuery.inArray(t, this.psase_int) >= 0 ? parseInt(e[t]) : e[t];
    this.setInfo();
  }),
  (linkContentsList.prototype.setInfo = function () {}),
  (linkContentsList.prototype.htmlMobileKids = function () {
    var e = "";
    (e += '<li class="mobile-contents-list-li">'),
      (e +=
        '	<div class="hand" data-title="' +
        this.title +
        '" data-thumbnail="' +
        this.url_thumbnail +
        '" data-idx="' +
        this.idx +
        '" onclick="MOBILE_KIDS.onclickLinkContentsList(' +
        this.idx +
        ', this);">'),
      (e += '		<div class="top">'),
      (e += '			<div class="r_imgArea">'),
      (e += '				<img src="' + this.url_thumbnail + '"/>'),
      (e += "				<span></span>"),
      (e += "			</div>"),
      (e += '			<div class="l_conArea">'),
      (e += '				<p class="con_tit kids">' + this.title + "</p>"),
      (e += '				<span class="btn_kfree">íì°¨ë¬´ë£ê°ì</span>'),
      (e += "			</div>"),
      (e += "		</div>"),
      (e += "	</div>"),
      (e += "</li>");
    try {
      return e;
    } finally {
      e = null;
    }
  }),
  (linkContentsChapterList.prototype.setData = function (e) {
    for (var t in e)
      this[t] = jQuery.inArray(t, this.psase_int) >= 0 ? parseInt(e[t]) : e[t];
    this.setInfo();
  }),
  (linkContentsChapterList.prototype.setInfo = function () {}),
  (linkContentsChapterList.prototype.htmlMobileKidsChapter = function (e, t) {
    var a = e[this.cate1] + " &gt; " + e[this.cate2],
      i = "";
    (i += '<li class="mobile-contents-list-li">'),
      (i +=
        '	<div class="hand" onclick="MOBILE_KIDS.onClickOpenMobileKidsContentsView(' +
        this.idx +
        ", " +
        t +
        ');">'),
      (i += '		<div class="top">'),
      (i += '			<div class="r_imgArea">'),
      (i += '				<img src="' + this.url_thumbnail_list + '"/>'),
      (i += "				<span></span>"),
      (i += "			</div>"),
      (i += '			<div class="l_conArea">'),
      (i +=
        '				<p class="con_tit c_list">' +
        this.title +
        " : " +
        this.chapter_title +
        "</p>"),
      (i += '				<span class="category">' + a + "</span>"),
      (i += '				<div class="file_info">'),
      (i += '					<span class="view_free"></span>'),
      (i += "				</div>"),
      (i += "			</div>"),
      (i += "		</div>"),
      (i += "	</div>"),
      (i += "</li>");
    try {
      return i;
    } finally {
      (i = null), (e = null), (a = null), (t = null);
    }
  }),
  (ContentsRecomm.prototype.recommendHtmlList = function (e, t, a) {
    var i = "";
    (i +=
      '<h3><span class="hand" onclick="GO_MENU(\'theme\');">ì´ë° ìë£ ì´ëì?</span></h3>'),
      (i += '<a href="' + t + '" class="thema_tit">' + a + "</a>"),
      (i += "<ul>"),
      console.log(e);
    for (var n in e)
      (this[n] =
        jQuery.inArray(n, this.psase_int) >= 0 ? parseInt(e[n]) : e[n]),
        (i +=
          '  <li><a href="' +
          this[n].a_href +
          '"><img src="' +
          this[n].img_src +
          '" alt="" class="main-theme-img no_img"><span>' +
          this[n].title +
          "</span></a></li>");
    (i += "</ul>"),
      (i +=
        '<p class="more hand" onclick="GO_MENU(\'theme\');"><a><span>+</span> íì¼ ìºì¤í¸ íë§ ëë³´ê¸°</a></p>');
    try {
      return i;
    } finally {
      i = null;
    }
  }),
  (Eventlist.prototype.setData = function (e) {
    for (var t in e)
      this[t] = jQuery.inArray(t, this.psase_int) >= 0 ? parseInt(e[t]) : e[t];
    this.setInfo();
  }),
  (Eventlist.prototype.setInfo = function () {
    this.m_img_url = null == this.m_img_url ? this.img_url : this.m_img_url;
  }),
  (Eventlist.prototype.listWebHtml = function () {
    var e = "";
    return (
      (e += "<li>"),
      "0" == this.status
        ? ((e +=
            '		<span class="b_img hand"><a><img src="' +
            this.img_url +
            '" alt="" class="alpha-40"/></a></span>'),
          (e +=
            '		<span class="e_tit hand alpha-40"><a>' +
            this.title +
            "</a></span>"))
        : ((e +=
            '		<span class="b_img hand" onclick="WEB_EVENT.onclickEventList(' +
            this.idx +
            ', this);" data-view_key="' +
            this.view_key +
            '" data-idx="' +
            this.idx +
            '" data-is_adult="' +
            this.is_adult +
            '"><a><img src="' +
            this.img_url +
            '" alt="" /></a></span>'),
          (e +=
            '		<span class="e_tit hand" onclick="WEB_EVENT.onclickEventList(' +
            this.idx +
            ', this);" data-view_key="' +
            this.view_key +
            '" data-idx="' +
            this.idx +
            '" data-is_adult="' +
            this.is_adult +
            '"><a>' +
            this.title +
            "</a></span>")),
      (e += "		<dl>"),
      (e += "			<dt>ëì</dt>"),
      (e += "			<dd>" + this.target + "</dd>"),
      (e += "			<dt>ê¸°ê°</dt>"),
      (e += "			<dd>" + this.display_time + "</dd>"),
      (e += "			<dt>ë°©ë²</dt>"),
      (e += "			<dd>" + this.event_rule + "</dd>"),
      (e += "		</dl>"),
      (e += "</li>")
    );
  }),
  (Eventlist.prototype.listMobileHtml = function () {
    var e = this.style_type[this.view_key],
      t = "type" + e,
      a = "";
    return (
      (a += "<li>"),
      "0" == this.status
        ? ((a += '	<div class="top ' + t + '">'),
          (a +=
            '		<img src="' + this.m_img_url + '" alt="" style="opacity: 0.3;"/>'),
          (a += "	</div>"))
        : ((a +=
            '	<div class="top ' +
            t +
            '" hand" data-idx="' +
            this.idx +
            '" onclick="MOBILE_EVENT.onclickEventList(this);" data-view_key="' +
            this.view_key +
            '" data-is_adult="' +
            this.is_adult +
            '">'),
          (a += '		<img src="' + this.m_img_url + '" alt="" />'),
          (a += "	</div>")),
      (a += '	<div class="btm">'),
      (a += "		<p>" + this.title + "</p>"),
      (a += "		<dl>"),
      (a += "			<dt>ëì : </dt>"),
      (a += "			<dd>" + this.target + "</dd>"),
      (a += "			<dt>ê¸°ê° : </dt>"),
      (a += "			<dd>" + this.display_time + "</dd>"),
      (a += "		</dl>"),
      (a += "	</div>"),
      (a += "</li>")
    );
  }),
  (Eventlist.prototype.listMobileMainHtml = function () {
    this.style_type[this.view_key];
    var e = "";
    return (
      (e +=
        '<li class="hand" data-idx="' +
        this.idx +
        '" onclick="MOBILE_EVENT.onclickEventList(this);" data-view_key="' +
        this.view_key +
        '" data-is_adult="' +
        this.is_adult +
        '">'),
      (e +=
        '	<span class="txt">' + this.title + '</span><span class="ico"></span>'),
      (e += "</li>")
    );
  }),
  (Eventlist.prototype.viewMobileHtml = function (e, t) {
    var a = this.blog,
      i = "";
    i =
      "kids" == this.view_key
        ? "kids1601"
        : "blog2" == this.view_key
        ? "blog V1604"
        : "intel2" == this.view_key
        ? "intel v1604"
        : this.view_key;
    var n = "";
    return (
      (n += '<div class="e_con ' + i + '">'),
      (n +=
        "kakao_friend" == this.view_key
          ? TEMPLATE_MOBILE_FUN.eventViewKakaoFriend(t)
          : TEMPLATE_MOBILE_FUN.mobileEventViewTempleate(this.view_key, a)),
      (n += "</div>")
    );
  }),
  (Eventlist.prototype.newMobileViewHtml = function (e) {
    this.blog;
    var t = "";
    t =
      "kids" == this.view_key
        ? "kids1601"
        : "blog2" == this.view_key
        ? "blog V1604"
        : "intel2" == this.view_key
        ? "intel v1604"
        : this.view_key;
    var a = "";
    return (a += '<div class="e_con ' + t + '">'), (a += e), (a += "</div>");
  }),
  (Eventlist_FUN = {}),
  (Couponlist.prototype.setData = function (e) {
    for (var t in e)
      this[t] = jQuery.inArray(t, this.psase_int) >= 0 ? parseInt(e[t]) : e[t];
    this.setInfo();
  }),
  (Couponlist.prototype.setInfo = function () {
    (this.input_ele = "coupon-code-input-" + this.idx),
      (this.display_code = this.pre_fix),
      "" != this.pre_fix &&
        null != this.pre_fix &&
        (this.display_code = this.pre_fix + "-");
  }),
  (Couponlist.prototype.listMobileHtml = function () {
    var e = "";
    return (
      (e += '<div class="coupon">'),
      (e += '	<div class="top">'),
      (e +=
        '		<div class="bg_coupon"><img src="' +
        this.img_url +
        '" alt=""/></div>'),
      (e += '		<div class="right">'),
      (e += '			 <span class="c_tit">' + this.m_title + "</span>"),
      (e += "			 <span>" + this.title + "</span>"),
      (e += "			 <p>" + this.contents + "</p>"),
      (e += "		</div>"),
      (e += "	</div>"),
      (e += '	<div class="btm">'),
      (e += '			<fieldset style="height:37px;">'),
      (e +=
        11 == this.idx
          ? '				<input type="text" class="coupon-input-code" id="' +
            this.input_ele +
            '" placeholder="ì¿ í°ë²í¸ë¥¼ ìë ¥í´ ì£¼ì¸ì! (- í¬í¨)"/ >'
          : '				<input type="number" class="coupon-input-code" id="' +
            this.input_ele +
            '" placeholder="ì¿ í°ë²í¸ë¥¼ ìë ¥í´ ì£¼ì¸ì! (- ì ì¸)"/ value="' +
            this.display_code +
            '">'),
      (e +=
        "				<span data-pre_fix=" +
        this.display_code +
        '" data-type="' +
        this.coupon_type +
        '" data-idx="' +
        this.idx +
        '" onclick="MOBILE_COUPON.onsubmitCouponCode(this);">ë±ë¡</span>'),
      (e += "			</fieldset>"),
      (e += "	</div>"),
      (e += "</div>")
    );
  }),
  (Ranklist.prototype.setData = function (e) {
    for (var t in e)
      this[t] = jQuery.inArray(t, this.psase_int) >= 0 ? parseInt(e[t]) : e[t];
    this.setInfo();
  }),
  (Ranklist.prototype.setInfo = function () {
    if (((this.thumb_img = null), 1 == isDefined(this.img))) {
      var e = this.img.split("."),
        t = e.length;
      if (e.length > 0) {
        var a = "." + e[t - 1];
        this.thumb_img = this.img.replace(a, "_thumb.gif");
      }
    }
    null == this.thumb_img &&
      (this.thumb_img = APP.DEFINE.IMG + "/common/no_img.png"),
      (this.rank_class = ""),
      (this.rank_style = ""),
      (this.yest_rank_class = ""),
      3 > this.order &&
        ((this.yest_rank_class = "txt_color"),
        (this.rank_class = "best"),
        (this.rank_style =
          "background: url('" +
          this.thumb_img +
          "') no-repeat center 33%;background-size: 45px 45px;")),
      (this.display_rank = this.order + 1);
  }),
  (Ranklist.prototype.listRealHtml = function () {
    var e = APP.DEFINE.IMG + "/common/no_img.png",
      t = "";
    (t +=
      '<li class="hand ' +
      this.rank_class +
      '" onclick="FC_APP_FN.openContentsView(' +
      this.board_idx +
      ');">'),
      (t +=
        '	<span class="">' +
        this.display_rank +
        '</span><span class="list_sumimg" >'),
      3 > this.order &&
        (t +=
          '		<img src="' +
          this.img +
          '" onerror="utility.ui.onErrorImgLoadAfterChange(this)" data-errimg="' +
          e +
          '" alt="" />'),
      (t += "	</span>"),
      (t += "	<a>" + this.title + "</a>"),
      (t += "</li>");
    try {
      return t;
    } finally {
      (t = null), (keyWd = null);
    }
  }),
  (Ranklist.prototype.listYesterHtml = function () {
    var e = "";
    return (
      (e +=
        '<li class="hand" onclick="FC_APP_FN.openContentsView(' +
        this.board_idx +
        ');">'),
      (e +=
        '	<span class="' +
        this.yest_rank_class +
        '">' +
        this.display_rank +
        "</span>"),
      (e += "	<a>" + this.title + "</a>"),
      (e += "</li>")
    );
  }),
  (Ranklist.prototype.mobileMainRealTimeHtml = function () {
    var e = "rank-list-f-list-group",
      t = "",
      a = "";
    this.order > 4 && ((e = "rank-list-s-ilst-group"), (t = "display:none;")),
      3 > this.order && (a = "rank_top");
    var i = this.order + 1,
      n = "";
    (n +=
      '<li class="hand ' +
      e +
      " " +
      a +
      '" onclick="FC_APP_FUN.openMobileContentsView(null, ' +
      this.board_idx +
      ', 1);" style="' +
      t +
      '">'),
      (n += '	<span class="rank type' + i + '">' + i + "</span>"),
      3 > this.order &&
        (1 == isDefined(this.m_img) && (this.img = this.m_img),
        (n +=
          '	<span class="r_sumImg"><span class="shadow"></span><img src="' +
          this.img +
          '" alt="" /></span>')),
      (n += '	<span class="tit">' + this.title + "</span>"),
      (n += '	<span class="ico up"></span>'),
      (n += "</li>");
    try {
      return n;
    } finally {
      (n = null),
        (gData = null),
        (e = null),
        (i = null),
        (t = null),
        (a = null);
    }
  }),
  (Ranklist.prototype.mobileCateRealTimeHtml = function (e) {
    console.log("mobileCateRealTimeHtml" + e);
    var t = "rank-list-f-list-group",
      a = "";
    this.order > 4 && ((t = "rank-list-s-ilst-group"), (a = "display:none;"));
    var i = this.order + 1,
      n = "";
    (n +=
      '<li class="hand ' +
      t +
      '" onclick="FC_APP_FUN.openMobileContentsView(null, ' +
      this.board_idx +
      ');" style="' +
      a +
      '">'),
      (n += '	<span class="rank type' + i + '">' + i + "</span>"),
      (n += '	<span class="tit">' + this.title + "</span>"),
      (n += '	<span class="ico up"></span>'),
      (n += "</li>");
    try {
      return n;
    } finally {
      (n = null), (gData = null), (t = null), (i = null), (a = null);
    }
  }),
  (FreePointlist.prototype.setData = function (e) {
    for (var t in e)
      this[t] = jQuery.inArray(t, this.psase_int) >= 0 ? parseInt(e[t]) : e[t];
    this.setInfo();
  }),
  (FreePointlist.prototype.setInfo = function () {
    this.m_img_url = null == this.m_img_url ? this.img_url : this.m_img_url;
  }),
  (FreePointlist.prototype.listWebHtml = function () {
    var e = "";
    return (
      (e += "<li>"),
      "0" == this.status
        ? ((e +=
            '		<span class="b_img hand"><a><img src="' +
            this.img_url +
            '" alt="" class="alpha-40"/></a></span>'),
          (e +=
            '		<span class="e_tit hand alpha-40"><a>' +
            this.title +
            "</a></span>"))
        : ((e +=
            '		<span class="b_img hand" onclick="WEB_EVENT.onclickFreePointlist(' +
            this.idx +
            ', this);" data-view_key="' +
            this.view_key +
            '" data-idx="' +
            this.idx +
            '" data-is_adult="' +
            this.is_adult +
            '"><a><img src="' +
            this.img_url +
            '" alt="" /></a></span>'),
          (e +=
            '		<span class="e_tit hand" onclick="WEB_EVENT.onclickFreePointlist(' +
            this.idx +
            ', this);" data-view_key="' +
            this.view_key +
            '" data-idx="' +
            this.idx +
            '" data-is_adult="' +
            this.is_adult +
            '"><a>' +
            this.title +
            "</a></span>")),
      (e += "		<dl>"),
      (e += "			<dt>ëì</dt>"),
      (e += "			<dd>" + this.target + "</dd>"),
      (e += "			<dt>ê¸°ê°</dt>"),
      (e += "			<dd>" + this.display_time + "</dd>"),
      (e += "			<dt>ë°©ë²</dt>"),
      (e += "			<dd>" + this.event_rule + "</dd>"),
      (e += "		</dl>"),
      (e += "</li>")
    );
  }),
  (FreePointlist.prototype.listMobileHtml = function () {
    var e = this.style_type[this.view_key],
      t = "type" + e,
      a = "";
    return (
      (a += "<li>"),
      "0" == this.status
        ? ((a += '	<div class="top ' + t + '">'),
          (a +=
            '		<img src="' + this.m_img_url + '" alt="" style="opacity: 0.3;"/>'),
          (a += "	</div>"))
        : ((a +=
            '	<div class="top ' +
            t +
            '" hand" data-idx="' +
            this.idx +
            '" onclick="MOBILE_FREE_POINT.onclickFreePointlist(this);" data-view_key="' +
            this.view_key +
            '" data-is_adult="' +
            this.is_adult +
            '">'),
          (a += '		<img src="' + this.m_img_url + '" alt="" />'),
          (a += "	</div>")),
      (a += '	<div class="btm">'),
      (a += "		<p>" + this.title + "</p>"),
      (a += "		<dl>"),
      (a += "			<dt>ëì : </dt>"),
      (a += "			<dd>" + this.target + "</dd>"),
      (a += "			<dt>ê¸°ê° : </dt>"),
      (a += "			<dd>" + this.display_time + "</dd>"),
      (a += "		</dl>"),
      (a += "	</div>"),
      (a += "</li>")
    );
  }),
  (FreePointlist.prototype.listMobileMainHtml = function () {
    this.style_type[this.view_key];
    var e = "";
    return (
      (e +=
        '<li class="hand" data-idx="' +
        this.idx +
        '" onclick="MOBILE_FREE_POINT.onclickFreePointlist(this);" data-view_key="' +
        this.view_key +
        '" data-is_adult="' +
        this.is_adult +
        '">'),
      (e +=
        '	<span class="txt">' + this.title + '</span><span class="ico"></span>'),
      (e += "</li>")
    );
  }),
  (FreePointlist.prototype.viewMobileHtml = function (e, t) {
    var a = this.blog,
      i = "",
      n = 0;
    i =
      "kids" == this.view_key
        ? "kids1601"
        : "blog2" == this.view_key
        ? "blog V1604"
        : "intel2" == this.view_key
        ? "intel v1604"
        : this.view_key;
    var s = "";
    return (
      (s += '<div class="e_con ' + i + '">'),
      "kakao_friend" == this.view_key
        ? (s += TEMPLATE_MOBILE_FUN.eventViewKakaoFriend(t))
        : t
        ? "free_point_view" == t.this_hash_action
          ? ((n = 1),
            (s += TEMPLATE_MOBILE_FUN.mobileEventViewTempleate(
              this.view_key,
              a,
              n
            )))
          : (s += TEMPLATE_MOBILE_FUN.mobileEventViewTempleate(
              this.view_key,
              a
            ))
        : (s += TEMPLATE_MOBILE_FUN.mobileEventViewTempleate(this.view_key, a)),
      (s += "</div>")
    );
  }),
  (Eventlist_FUN = {}),
  (MyPointList.prototype.setData = function (e) {
    for (var t in e)
      this[t] = jQuery.inArray(t, this.psase_int) >= 0 ? parseInt(e[t]) : e[t];
    this.setInfo();
  }),
  (MyPointList.prototype.setInfo = function () {}),
  (MyPointList.prototype.mobileListHtml = function (e) {
    var t = 0 == e % 2 ? "bg" : "",
      a = "P";
    "mp" == this.kind ? (a = "M") : "bp" == this.kind && (a = "B");
    var i = new Date(),
      n = i.getTime() + 144e4,
      s = 1e3 * this.regdate,
      o = new Date(s),
      r = "";
    0 == this.expiredate
      ? (r = "-")
      : ((r = 1e3 * this.expiredate - n),
        (r = Math.ceil(r / 864e5)),
        0 > r ? (r = "ë§ë£") : (r += "ì¼"));
    var l = "";
    (l += '<li class="' + t + '">'),
      (l +=
        '<div><span class="date">' + o.toLocaleDateString() + "</span></div>"),
      (l += '<div><span class="con">' + this.info + "</span></div>"),
      (l += '<div><span class="txt_blue">' + r + "</span></div>"),
      (l += "<div><span >" + this.cash + " " + a + "</span></div>"),
      (l += "</li>");
    try {
      return l;
    } finally {
      l = null;
    }
  }),
  (FaqList.prototype.setData = function (e) {
    for (var t in e)
      this[t] = jQuery.inArray(t, this.psase_int) >= 0 ? parseInt(e[t]) : e[t];
    this.setInfo();
  }),
  (FaqList.prototype.setInfo = function () {}),
  (FaqList.prototype.mobileListHtml = function () {
    var e = "";
    (e += "<li>"),
      (e +=
        '<a onclick="MOBILE_FAQ_VIEW.onclickFaqView(' + this.idx + ')"><span>'),
      (e += '<div class="top">'),
      (e += "<p>" + this.title + "</p>"),
      (e += "</div>"),
      (e += '<div class="btm">'),
      (e += '<span class="date"><span>' + this.regdate + "</span></span>"),
      (e += '<span class="n_writer">ê´ë¦¬ì</span>'),
      (e += "</div>"),
      (e += "</span></a>"),
      (e += "</li>");
    try {
      return e;
    } finally {
      e = null;
    }
  }),
  (FaqList.prototype.mobileViewHtml = function (e, t, a, i) {
    var n = "";
    (n += '<div class="notice type1">'),
      (n += '    <div class="n_view">'),
      (n += '        <div class="top">'),
      (n += "            <p>" + this.title + "</p>"),
      (n += "        </div>"),
      (n += '        <div class="btm type1">'),
      (n +=
        '            <span class="date">ìì±ì¼ <span>' +
        this.regdate +
        "</span></span>"),
      (n += '            <span class="n_writer">ê´ë¦¬ì</span>'),
      (n += "        </div>"),
      (n += '        <div class="n_con">' + this.content + "</div>"),
      (n += "    </div>"),
      (n += "</div>"),
      (n += '<div class="move_list">'),
      (n += '    <div class="listArea">'),
      (n += "        <ul>"),
      (n +=
        '            <li style="height: 42px; background-color: #e0e0e0; margin: 0px;">'),
      (n +=
        '                <p onclick="MOBILE_FAQ_VIEW.onclickFaqView(' +
        a +
        ')">' +
        i +
        "</p>"),
      (n += "            </li>"),
      (n +=
        '            <li style="height: 42px; background-color: #e0e0e0; margin: 0px;">'),
      (n +=
        '                <p onclick="MOBILE_FAQ_VIEW.onclickFaqView(' +
        e +
        ')">' +
        t +
        "</p>"),
      (n += "            </li>"),
      (n += "        </ul>"),
      (n += "    </div>"),
      (n += '    <span class="top_list"></span>'),
      (n += '    <span class="btm_list"></span>'),
      (n += "</div>");
    try {
      return n;
    } finally {
      n = null;
    }
  }),
  (NoticeList.prototype.setData = function (e) {
    for (var t in e)
      this[t] = jQuery.inArray(t, this.psase_int) >= 0 ? parseInt(e[t]) : e[t];
    this.setInfo();
  }),
  (NoticeList.prototype.setInfo = function () {}),
  (NoticeList.prototype.mobileListHtml = function () {
    var e = "";
    (e += "<li>"),
      (e +=
        '<a onclick="MOBILE_NOTICE.onclickNoticeView(' +
        this.idx +
        ')"><span>'),
      (e += '<div class="top">'),
      (e += "<p>" + this.title + "</p>"),
      (e += "</div>"),
      (e += '<div class="btm">'),
      (e += '<span class="date"><span>' + this.regdate + "</span></span>"),
      (e += '<span class="n_writer">ê´ë¦¬ì</span>'),
      (e += "</div>"),
      (e += "</span></a>"),
      (e += "</li>");
    try {
      return e;
    } finally {
      e = null;
    }
  }),
  (NoticeList.prototype.mobileViewHtml = function (e, t, a, i) {
    var n = "";
    (n += '<div class="notice type1">'),
      (n += '    <div class="n_view">'),
      (n += '        <div class="top">'),
      (n += "            <p>" + this.title + "</p>"),
      (n += "        </div>"),
      (n += '        <div class="btm type1">'),
      (n +=
        '            <span class="date">ìì±ì¼ <span>' +
        this.regdate +
        "</span></span>"),
      (n += '            <span class="n_writer">ê´ë¦¬ì</span>'),
      (n += "        </div>"),
      (n += '        <div class="n_con">' + this.content + "</div>"),
      (n += "    </div>"),
      (n += "</div>"),
      (n += '<div class="move_list">'),
      (n += '    <div class="listArea">'),
      (n += "        <ul>"),
      (n +=
        '            <li style="height: 42px; background-color: #e0e0e0; margin: 0px;">'),
      (n +=
        '                <p onclick="MOBILE_NOTICE.onclickNoticeView(' +
        a +
        ')">' +
        i +
        "</p>"),
      (n += "            </li>"),
      (n +=
        '            <li style="height: 42px; background-color: #e0e0e0; margin: 0px;">'),
      (n +=
        '                <p onclick="MOBILE_NOTICE.onclickNoticeView(' +
        e +
        ')">' +
        t +
        "</p>"),
      (n += "            </li>"),
      (n += "        </ul>"),
      (n += "    </div>"),
      (n += '    <span class="top_list"></span>'),
      (n += '    <span class="btm_list"></span>'),
      (n += "</div>");
    try {
      return n;
    } finally {
      n = null;
    }
  }),
  (Friendlist.prototype.setData = function (e) {
    for (var t in e)
      this[t] = jQuery.inArray(t, this.psase_int) >= 0 ? parseInt(e[t]) : e[t];
    this.setInfo();
  }),
  (Friendlist.prototype.setInfo = function () {}),
  (Friendlist.prototype.webListHtml = function () {
    this.order = Number(this.order);
    var e = "bg";
    if (
      (1 == this.order % 2 || (e = ""), 0 >= this.order || "" == this.order)
    ) {
      var t = "";
      (t += "<li>"),
        (t += '<div class="no_friend">ë±ë¡í ì¹êµ¬ê° ììµëë¤.</div>'),
        (t += "</li>");
    } else if ("me" == this.kind) {
      var t = "";
      (t += '<li class="' + e + '">'),
        (t +=
          '    <div class="l1"><span class="num">' +
          this.order +
          "</span></div>"),
        (t +=
          '    <div class="l2"><span class="f_id"><a href="/www/search/seller_file/?seller=' +
          this.nickname +
          '" target="_self">' +
          this.nickname +
          "</a></span></div>"),
        (t +=
          '    <div class="l3"><span class="text">' +
          this.remark +
          "</span></div>"),
        (t += "</li>");
    } else {
      var t = "";
      (t += '<li class="' + e + '" data-type="' + this.kind + '">'),
        (t +=
          '    <div class="l1"><input type="checkbox" id="chk" name="chk[]" value="' +
          this.idx +
          '"><span class="num">' +
          this.order +
          "</span></div>"),
        (t +=
          '    <div class="l2"><span class="f_id"><a href="/www/search/seller_file/?seller=' +
          this.nickname +
          '" target="_self">' +
          this.nickname +
          "</a></span></div>"),
        (t +=
          '    <div class="l3"><span class="text">' +
          this.remark +
          "</span></div>"),
        (t +=
          '    <div class="l4"><span class="btn_finfo_edit" onclick="WEB_FRIEND.friendModify(\'' +
          this.nickname +
          "'," +
          this.idx +
          ');">ìì </span></div>'),
        (t += "</li>");
    }
    try {
      return t;
    } finally {
      t = null;
    }
  }),
  (Friendlist.prototype.ListTitleHtml = function (e) {
    if ("my" == e) {
      var t = "";
      (t +=
        '<div class="l1"><input type="checkbox" id="chkall" name="chkall" onclick="checkAll();" ><span class="num">ë²í¸</span></div>'),
        (t += '<div class="l2">ëë¤ì</div>'),
        (t += '<div class="l3">ì¤ëª</div>'),
        (t += '<div class="l4">ì¹êµ¬ ì¶ê°</div>');
    } else if ("me" == e) {
      var t = "";
      (t += '<div class="l1"><span class="num">ë²í¸</span></div>'),
        (t += '<div class="l2">ëë¤ì</div>'),
        (t += '<div class="l3">ì¤ëª</div>'),
        (t += '<div class="l4"><span class="num">ë²í¸</span></div>'),
        (t += '<div class="l5">ëë¤ì</div>'),
        (t += '<div class="l6">ì¤ëª</div>');
    } else {
      var t = "";
      (t +=
        '<div class="l1"><input type="checkbox" id="chkall" name="chkall" onclick="checkAll();" ><span class="num">ë²í¸</span></div>'),
        (t += '<div class="l2">ëë¤ì</div>'),
        (t += '<div class="l3">ì¤ëª</div>'),
        (t += '<div class="l4">ì¹êµ¬ ì¶ê°</div>');
    }
    try {
      return t;
    } finally {
      t = null;
    }
  }),
  (Friendlist.prototype.mobileListHtml = function () {
    this.order = Number(this.order);
    var e = "bg";
    if (
      (1 == this.order % 2 || (e = ""), 0 >= this.order || "" == this.order)
    ) {
      var t = "";
      (t += "<li>"),
        (t += '<div class="no_friend">ë±ë¡í ì¹êµ¬ê° ììµëë¤.</div>'),
        (t += "</li>");
    } else {
      var t = "";
      (t += '<li class="' + e + '">'),
        (t +=
          '	<span class="check"><input type="checkbox" id="chk" name="chk[]" value="' +
          this.idx +
          '" data-rowno="' +
          this.order +
          '"></span>'),
        (t += '	<span class="seller_name">'),
        (t +=
          '		<span class="id" data-seller="' +
          this.f_id +
          '" onclick="MOBILE_SELLER.onclickGoSellerHome(this,1);return false;">' +
          this.nickname +
          "</span>"),
        (t += '		<span class="text">' + this.remark + "</span>"),
        (t += "	</span>"),
        (t +=
          '	<span class="btn_send_memo" data-nickname="' +
          this.nickname +
          '" data-idx="' +
          this.idx +
          '" data-is_admin="false" onclick="MOBILE_NOTE.sendNote(this)">ìª½ì§</span>'),
        (t +=
          '	<span class="btn_sellerroom" onclick="MOBILE_FRIEND.friendModify(\'' +
          this.nickname +
          "'," +
          this.idx +
          ');">ìì </span>'),
        (t += "</li>");
    }
    try {
      return t;
    } finally {
      t = null;
    }
  }),
  (Friendlist.prototype.mobileListTitleHtml = function () {
    var e = "";
    (e += '          <li class="top">'),
      (e +=
        '				<span class="check"><input type="checkbox" id="chkall" name="chkall" onclick="checkAll();" ></span>'),
      (e +=
        '				<input type="button" class="btn_del" value="ì­ì " onclick="MOBILE_FRIEND.friendDelete();">'),
      (e += "			</li>"),
      (e += '			<li class="tit">'),
      (e += '				<div class="area"></div>'),
      (e += "				<p>ëë¤ì / ì¤ëª</p>"),
      (e += '				<span class="right">ìì </span>'),
      (e += "			</li>");
    try {
      return e;
    } finally {
      e = null;
    }
  }),
  (Friendlist.prototype.mobileSellerLikeAndAddHtml = function () {
    var e = "";
    (e += '				<span class="like" data-type="seller_like">'),
      (e +=
        '					<span class="ico"></span><span class="num" id="mSellerPdsSlike_span">-</span>'),
      (e += "				</span>");
    try {
      return e;
    } finally {
      e = null;
    }
  });
var WEB_MEMBER_EMIL_PATTERN = /[`~,!+#$%^&*|\\\'\";:\/?\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]/gi;
(FC_member.prototype.setData = function (e) {
  for (var t in e)
    this[t] = jQuery.inArray(t, this.psase_int) >= 0 ? parseInt(e[t]) : e[t];
  this.setInfo();
}),
  (FC_member.prototype.setInfo = function () {
    "function" == typeof fc_number_format
      ? ((this.d_cash_base = fc_number_format(this.cash_base)),
        (this.d_total_cash = fc_number_format(this.total_cash)),
        (this.d_cash_bonus = fc_number_format(this.cash_bonus)),
        (this.d_remain_subscription = fc_number_format(
          this.remain_subscription
        )),
        (this.d_down_coupon = fc_number_format(this.down_coupon)),
        (this.d_apples = fc_number_format(this.apples)))
      : ((this.d_cash_base = this.cash_base),
        (this.d_total_cash = this.total_cash),
        (this.d_cash_bonus = this.cash_bonus),
        (this.d_remain_subscription = this.remain_subscription),
        (this.d_down_coupon = this.down_coupon),
        (this.d_apples = this.apples)),
      (this.member_type = "ì¼ë°íì"),
      this.flag_uploader > 0 && (this.member_type = "íë§¤ì"),
      (this.fc_adult = !0),
      1 == this.flag_child && (this.fc_adult = !1),
      this.setAdult(),
      this.showInfo(),
      this.setCookie(),
      1 == this.isMobile && this.setMobileLogin();
  }),
  (FC_member.prototype.showInfo = function () {
    jQuery(".loginBox").removeClass("show"),
      jQuery("#fcMemberLoginOk").addClass("show"),
      jQuery(".not-login-contents").hide(),
      jQuery(".login-contents").show(),
      1 == this.isMobile &&
        (1 == this.flag_child && jQuery("#fcMemberChildBtn").addClass("on"),
        jQuery("#fcMemberType").html(this.member_type)),
      jQuery("#fcMemberNickname").html(this.nickname),
      jQuery("#fcMemberEmail").html(this.email),
      jQuery("#fcMemberCashBase").html(this.d_total_cash),
      jQuery("#fcMemberCashBonus").html(this.d_cash_bonus),
      jQuery("#fcMemberRmainSubscription").html(this.d_remain_subscription),
      jQuery("#fcMemberDownCoupon").html(this.d_down_coupon),
      jQuery("#fcMemberApples").html(this.d_apples),
      jQuery("#memberLoginOk").val(this.idx),
      jQuery("#memberValidUploader").val(this.flag_uploader),
      jQuery("#memberValidAauthentic").val(this.flag_authentic),
      jQuery("#memberValidAdult").val(this.flag_adult),
      jQuery("#memberValidChild").val(this.flag_child),
      jQuery("#memberThatGrade").val(this.lv),
      jQuery("#memberValidEmail").val(this.email);
    var e = 0;
    1 != this.flag_adult &&
      "" != this.join_userid &&
      (Date.now ||
        (Date.now = function () {
          return new Date().valueOf();
        }),
      600 >= Math.floor(Date.now() / 1e3) - this.regdate),
      jQuery("#memberSimpleAuth").val(e),
      1 == this.flag_child
        ? jQuery("#fcMemberChildMark").addClass("on")
        : jQuery("#fcMemberChildMark").removeClass("on"),
      jQuery("#event-fb-over-layer").length > 0 &&
        this.idx > 0 &&
        this.flag_authentic > 0 &&
        jQuery("#event-fb-over-layer").hide(),
      1 == this.member_vip_charge && this.setMemberEvent();
  }),
  (FC_member.prototype.setMemberEvent = function () {
    if (0 != this.member_vip_charge)
      if (1 == this.isMobile) {
        var e =
          "http://static.filecast.co.kr/_mobile/_img/banner/charge1701_v_banner.png";
        jQuery("#mobile-main-charge-banner-img").attr({ src: e });
      } else
        jQuery("#pc-main-rolling-banner")
          .removeClass("m1701")
          .addClass("m1701_v"),
          $("#m_etc_title").html("2017 ì ì ë ìí´ ì­ëê¸ íí!"),
          $("#m_etc_subtitle").html(
            "80%í ì¸<br /> + ë¬´ì¡°ê±´ 10ë§ í¬ì¸í¸ ì§ê¸!"
          );
  }),
  (FC_member.prototype.setCookie = function () {
    gCookie.set("email", this.email, 60);
  }),
  (FC_member.prototype.setAdult = function () {
    this.setAdultShowDisplay();
  }),
  (FC_member.prototype.setAdultShowDisplay = function () {
    1 == this.fc_adult
      ? jQuery(".fc-adult-open").show()
      : jQuery(".fc-adult-open").hide();
  }),
  (FC_member.prototype.setMobileLogin = function () {
    1 == isDefined(this.idx) && this.idx > 0
      ? (jQuery(".btn-mobile-login").hide(),
        jQuery(".btn-mobile-out").show(),
        1 == this.flag_child
          ? jQuery("#fcMemberChildBtn").addClass("on")
          : jQuery("#fcMemberChildBtn").removeClass("on"))
      : (jQuery(".btn-mobile-out").hide(), jQuery(".btn-mobile-login").show());
    var e =
      '<span class="txt btn-mobile-out" data-type="login_out" onclick="FC_APP_FUN.onclickLogOut(this);">ë¡ê·¸ìì</span>';
    jQuery("#fc-mobile-top-login-txt-div").html(e);
  }),
  (FC_member.prototype.mobileMemberHtml = function () {
    var e = "";
    1 != this.flag_child && (e = "on");
    var t = "";
    return (
      (t += '<div class="top" id="mobile-fc-logined-div" data-loaded="1">'),
      (t += '			<div class="my_name">'),
      (t += '				<span id="fcMemberNickname"><b>' + this.nickname + "</b>ë</span>"),
      (t += "			</div>"),
      (t += '			<ul class="my_video">'),
      (t +=
        '				<li onclick="GO_SIDE_MENU(\'MENU\',\'mydown\');"><span><span class="ico"></span> <span class="txt">ë´ê° ë³¸ ìì</span></span></li>'),
      (t +=
        '				<li onclick="GO_SIDE_MENU(\'MENU\',\'myzzim\');"><span><span class="ico"></span> <span class="txt">ì°í ìì</span></span></li>'),
      (t += "			</ul>"),
      (t += '			<div class="my_info">'),
      (t += "				<ul>"),
      (t += "					<li>"),
      (t += '						<div class="my_id">'),
      (t += '							<span class="info_tit type1">ìì´ë</span>'),
      (t +=
        '							<span class="info_con type1"><span class="txt_white" id="fcMemberEmail">' +
        this.email +
        "</span></span>"),
      (t += "						</div>"),
      (t += "					</li>"),
      (t += "					<li>"),
      (t += "						<div>"),
      (t += '							<span class="info_tit">íìë±ê¸</span>'),
      (t +=
        '							<span class="info_con"><span class="txt_white" id="fcMemberType">' +
        this.member_type +
        "</span></span>"),
      (t += "						</div>"),
      (t += "						<div>"),
      (t += '							<span class="info_tit">í¬ì¸í¸</span>'),
      (t +=
        '							<span class="info_con"><span class="txt_blue" id="fcMemberCashBase">' +
        this.d_total_cash +
        "</span> P</span>"),
      (t += "						</div>"),
      (t += "						<div>"),
      (t += '							<span class="info_tit">ë³´ëì¤ í¬ì¸í¸</span>'),
      (t +=
        '							<span class="info_con"><span class="txt_white type1" id="fcMemberCashBonus">' +
        this.d_cash_bonus +
        "</span> B</span>"),
      (t += "						</div>"),
      (t += "					</li>"),
      (t += "					<li>"),
      (t += "						<div>"),
      (t += '							<span class="info_tit">ì¿ í°</span>'),
      (t +=
        '							<span class="info_con"><span class="txt_white type1" id="fcMemberDownCoupon">' +
        this.d_down_coupon +
        "</span> ì¥</span>"),
      (t += "						</div>"),
      (t += "						<div>"),
      (t += '							<span class="info_tit">ë§ì¼ë¦¬ì§</span>'),
      (t +=
        '							<span class="info_con"><span class="txt_white type1" id="fcMemberApples">' +
        this.d_apples +
        "</span> M</span>"),
      (t += "						</div>"),
      (t += "						<div>"),
      (t += '							<span class="info_tit">ì ì¡ì </span>'),
      (t +=
        '							<span class="info_con"><span class="txt_orange" id="fcMemberRmainSubscription">' +
        this.d_remain_subscription +
        "</span> ì¼</span>"),
      (t += "						</div>"),
      (t += "					</li>"),
      (t += "				</ul>"),
      (t += "			</div>"),
      (t += '			<div class="my_child">'),
      (t +=
        '				<span class="txt">ìë ìì¬ ë³´í¸ ìë¹ì¤</span><span class="btn_child ' +
        e +
        '" id="fcMemberChildBtn" onclick="GO_SIDE_MENU(\'MENU\',\'child\');"> on,off ì¤ì </span>'),
      (t += "			</div>"),
      (t += '			<div class="btn_wrap">'),
      (t +=
        "				<span class=\"btn_point\" onclick=\"GO_SIDE_MENU('MENU','charge');\">í¬ì¸í¸ ì¶©ì íê¸°</span>"),
      (t +=
        "				<span class=\"btn_edit\" onclick=\"GO_SIDE_MENU('MENU','pwdchange');\">ë¹ë°ë²í¸ ë³ê²½</span>"),
      (t += "			</div>"),
      (t += "		</div>")
    );
  }),
  (FC_MEMBER_FN = {}),
  (FC_MEMBER_FN.showMemberNotice = function (e) {
    console.log("showMemberNotice");
    var t = "";
    if (isDefined(e.alim.alim)) {
      var a = e.alim.alim;
      null != a &&
        a > 0 &&
        (a > 99 && (a = "99+"),
        (t = '<span class="num">' + a + "</span>"),
        jQuery("#alim_cnt_html").html(t));
    }
    if (isDefined(e.alim.qna_cnt)) {
      var i = e.alim.qna_cnt;
      null != i &&
        i > 0 &&
        (i > 99 && (i = "99+"),
        (t = '<span class="num">' + i + "</span>"),
        jQuery("#qna_cnt_html").html(t));
    }
    if (isDefined(e.alim.note_cnt)) {
      var n = e.alim.note_cnt;
      null != n &&
        n > 0 &&
        (n > 99 && (n = "99+"),
        (t = '<span class="num">' + n + "</span>"),
        jQuery("#note_cnt_html").html(t));
    }
  }),
  (FC_MEMBER_FN.setDefaultMemberData = function (e, t) {
    jQuery("#memberLoginOk").val("0"),
      jQuery("#memberValidUploader").val("0"),
      jQuery("#memberValidAauthentic").val("0"),
      jQuery("#memberValidAdult").val("0"),
      jQuery("#memberValidChild").val("0"),
      1 == e &&
        (0 == isDefined(t) && (t = new FC_APP()),
        FC_MEMBER_FN.insetMobileTopLoginBtn(t));
  }),
  (FC_MEMBER_FN.setLogout = function (e, t) {
    console.log("FC_MEMBER_FN.setLogout"),
      jQuery(".loginBox").removeClass("show"),
      jQuery("#fcMemberLoginNonOk").addClass("show"),
      FC_MEMBER_FN.setDefaultMemberData(t, e),
      gCookie.del(e.DEFINE.STORAGE.USER_AUTO_LOGIN),
      gCookie.del(e.DEFINE.STORAGE.USER_EMAIL),
      gCookie.del(e.DEFINE.STORAGE.USER_ACCESS_TOKEN),
      gCookie.del(e.DEFINE.STORAGE.USER_LOGIN_TOKEN),
      gCookie.del(e.DEFINE.STORAGE.LOGIN_NEXT_PAGE),
      gCookie.del(e.DEFINE.STORAGE.LOGIN_NEXT_PAGE_SUB),
      gCookie.del(e.DEFINE.STORAGE.ADULT_NEXT_PAGE),
      gCookie.del("fc_sns_next_url"),
      delFcLoginKey(),
      null != e && 1 == isDefined(e.MEMBER) && (e.MEMBER = null);
  }),
  (FC_MEMBER_FN.insetMobileTopLoginBtn = function (e) {
    if (1 == e.IS_MOBILE)
      if (1 == fc_check_login()) {
        var t =
          '<span class="txt btn-mobile-out" data-type="login_out" onclick="FC_APP_FUN.onclickLogOut(this);">ë¡ê·¸ìì</span>';
        jQuery("#fc-mobile-top-login-txt-div").html(t);
      } else {
        var a =
          '<span class="txt btn-mobile-login" data-type="login" onclick="FC_APP_FUN.onclickLoginFormOpen(this);">ë¡ê·¸ì¸</span>';
        jQuery("#fc-mobile-top-login-txt-div").html(a);
      }
  }),
  (FC_MEMBER_FN.checkAutoMobileLogin = function () {
    console.log("FC_MEMBER_FN.checkAutoMobileLogin");
    var e = new FC_APP();
    if ((FC_MEMBER_FN.insetMobileTopLoginBtn(e), 1 == fc_check_login())) {
      console.log("logined already"),
        jQuery("#memberLoginOk").val(),
        gCookie.get(e.DEFINE.STORAGE.USER_ACCESS_TOKEN);
      var t = gCookie.get(e.DEFINE.STORAGE.USER_EMAIL),
        a = gCookie.get(e.DEFINE.STORAGE.USER_LOGIN_TOKEN);
      "m.filecast.kr" == e.DEFINE.HOST_NAME &&
        (console.log("m.filecast.kr"),
        1 == checkAndroidApp() && GO_APP_HOME(t, a));
    }
    FC_MEMBER_FN.checkAutoMobileLoginAction(e);
  }),
  (FC_MEMBER_FN.checkAutoMobileLoginAction = function (e) {
    console.log("FC_MEMBER_FN.checkAutoMobileLoginAction");
    var t = "1",
      a = gCookie.get(e.DEFINE.STORAGE.USER_EMAIL),
      i = gCookie.get(e.DEFINE.STORAGE.USER_ACCESS_TOKEN),
      n = gCookie.get(e.DEFINE.STORAGE.USER_LOGIN_TOKEN),
      s = "0",
      o = "";
    if (0 == isDefined(a))
      return console.log("clealed user data in phone"), void 0;
    var r = 0;
    1 == IS_MOBILE &&
      ((s = "1"),
      (o = getAppDeviceKey()),
      (r = 1),
      1 == checkAndroidApp() && (r = 2));
    var l = {
        auto_login: t,
        user_email: a,
        access_token: i,
        login_token: n,
        is_mobile: s,
        device_key: o,
        device_type: r,
      },
      c = function (t) {
        console.log("autoLoginAuthSucess"),
          isDefined(t.member) && e.setMember(t.member),
          gCookie.set(e.DEFINE.STORAGE.USER_EMAIL, t.member.email, 365),
          gCookie.set(e.DEFINE.STORAGE.USER_ACCESS_TOKEN, t.access_token, 365),
          1 == isDefined(t.login_token) &&
            (gCookie.set(e.DEFINE.STORAGE.USER_LOGIN_TOKEN, t.login_token, 31),
            setFcLoginKey(t.member.email, t.access_token));
        var a = function () {};
        isDefined(t.check_event) &&
          1 == t.check_event &&
          (1 == e.IS_MOBILE
            ? MOBILE_MEMBER.checkLoginEvent(t, a, "autologin")
            : WEB_MEMBER.checkLoginEvent(t, a, "autologin")),
          0 == IS_MOBILE &&
            1 == isDefined(t.alim) &&
            FC_MEMBER_FN.showMemberNotice(t);
      },
      d = function () {
        console.log("failAutoLogin");
      },
      u = {
        server: e.DEFINE.SERVER_PROTOCOL,
        uri: e.PROTOCOL.URL.MEMBER.USER_LOGIN_CHECK,
        success: c,
        error_type: !0,
        error_fun: d,
        loading_bar: !1,
        params: l,
      };
    e.PROTOCOL.ajaxCall(u, e);
  }),
  (FC_MEMBER_FN.getLoginInfo = function () {
    console.log("onClickSideMenu"), null == APP && (APP = new FC_APP());
    var e = function (e) {
        console.debug(e);
        var t = e.member;
        1 == isDefined(t) && null != t && APP.setMember(t);
      },
      t = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: APP.PROTOCOL.URL.MEMBER.CHECK_LOGIN,
        success: e,
        error_type: !1,
        loading_bar: !1,
        params: {},
      };
    APP.PROTOCOL.ajaxCall(t, APP);
  }),
  (FC_MEMBER_FN.checkAdultContents = function () {
    return 0 == fc_check_login()
      ? (GO_MENU("login"), !1)
      : 0 == fc_check_adult()
      ? (GO_MENU("adultSinup"), !1)
      : !0;
  }),
  (Notelist.prototype.setData = function (e) {
    for (var t in e)
      this[t] = jQuery.inArray(t, this.psase_int) >= 0 ? parseInt(e[t]) : e[t];
    this.setInfo();
  }),
  (Notelist.prototype.setInfo = function () {
    (this.showNickname = this.nickname),
      (this.sender_is_admin = !1),
      null == this.showNickname &&
        ((this.showNickname = "ê´ë¦¬ì"), (this.sender_is_admin = !0));
  }),
  (Notelist.prototype.mobileListHtml = function () {
    var e = "bg";
    1 == this.order % 2 || (e = "");
    var t = 1e3 * this.sendDate,
      a = new Date(t);
    if (0 == isDefined(this.seq) || 1 > this.seq) {
      var i = "";
      (i += '<li class="no_memo">'),
        (i += "    <div>ìª½ì§ê° ììµëë¤.</div>"),
        (i += "</li>");
    } else {
      var i = "";
      (i +=
        '<li class="contents-note-list-li" id="contents-note-list-li-' +
        this.seq +
        '" name="note_list">'),
        (i += '    <form name="noteMemoForm">'),
        (i += '        <div class="tit_wrap">'),
        (i +=
          '            <input type="checkbox" class="noteCheckSelect" id="checkBox_list_' +
          this.seq +
          '" style="width:0px; height:0px;" name="check_note" value="' +
          this.seq +
          '">'),
        (i +=
          '            <div class="check" onclick="MOBILE_NOTE.noteCheckBox(' +
          this.seq +
          ');"><span></span></div>'),
        (i +=
          '            <div class="right" data-seq="' +
          this.seq +
          '" data-kind="' +
          this.kind +
          '" onclick="MOBILE_NOTE.contentShow(this);">'),
        (i += '                <p class="tit">' + this.memo + "</p>"),
        (i += '                <div class="info">'),
        (i +=
          '                    <span class="name">' +
          this.showNickname +
          "</span>"),
        (i +=
          '                    <span class="date">' +
          a.toLocaleDateString() +
          "</span>"),
        (i += "                </div>"),
        (i += "            </div>"),
        (i += "        </div>"),
        (i += '        <div class="memo_area">'),
        (i += '            <div class="check_btm"></div>'),
        (i += '            <div class="memo_content_wrap">'),
        (i += '	              <div class="memo_content">'),
        (i += "                    <p>" + this.memo + "</p>"),
        (i += "                </div>"),
        (i += '                <div class="memo_control">'),
        "send" != this.kind
          ? ((i +=
              '                    <span class="m_button memo_close" onclick="MOBILE_NOTE.contentClose(this);"><span class="ico"></span> <span class="txt">ì ê¸° <span class="s_txt">(ëª©ë¡ì¼ë¡ ëìê°ê¸°)</span></span></span>'),
            (i +=
              '                    <span class="m_button send" id="go-memo-mobile-modal" data-nickname="' +
              this.showNickname +
              '" data-is_admin="' +
              this.sender_is_admin +
              '" data-idx="' +
              this.idx +
              '" onclick="MOBILE_NOTE.sendNote(this)">ëµì¥ íê¸°</span>'))
          : (i +=
              '                    <span class="m_button memo_close" onclick="MOBILE_NOTE.contentClose(this);" style="width:100%;"><span class="ico"></span> <span class="txt">ì ê¸° <span class="s_txt">(ëª©ë¡ì¼ë¡ ëìê°ê¸°)</span></span></span>'),
        (i += "                </div>"),
        (i += "            </div>"),
        (i += "        </div>"),
        (i += "    </form>"),
        (i += "</li>");
    }
    try {
      return i;
    } finally {
      (i = null), (a = null);
    }
  }),
  (TEMPLATE_FUN = {}),
  (TEMPLATE_FUN.sellerLayer = function (e) {
    var t = "";
    (t += '	<div class="user_list fc-seller-layer">'),
      (t +=
        '		<p class="hand" onclick="FC_APP_FN.closeContentsSeller();">' +
        e.nickname +
        "</p>"),
      (t += "		<ul>"),
      (t += "			<li>Â·<span>íë§¤ìë£ë³´ê¸°</span></li>"),
      (t +=
        "			<li onclick=\"WEB_NOTE.sendNoteLayer('" +
        e.nickname +
        "');\">Â·<span>ìª½ì§ë³´ë´ê¸°</span></li>"),
      (t += "		</ul>"),
      (t += "	</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_FUN.alimPopListHtml = function (e) {
    var t = "";
    "" != e.link
      ? ((t += "<li >"),
        (t +=
          "<a onclick = \"FC_APP_FN.alimClick('" +
          e.wr_id +
          '\')" class="hand" href="' +
          e.link +
          '" target="' +
          e.target +
          '" >' +
          e.wr_subject +
          "&nbsp;<span>-" +
          e.wr_subject2 +
          "</span></a></li>"))
      : (t +=
          '<li onclick = "GO_MENU(\'alim\');"><a class="hand" >' +
          e.wr_subject +
          "&nbsp;<span>-" +
          e.wr_subject2 +
          "</span></a></li>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_FUN.qnaPopListHtml = function (e, t) {
    var a = "";
    (a +=
      "<li onclick = \"FC_APP_FN.noticeLayerMove('" +
      t +
      '\')"><a class="hand">' +
      e.cut_content +
      "</a><span>" +
      e.cut_regdate +
      "</span>"),
      (a +=
        "O" == e.state
          ? ' <span class="r_condition">[ëµë³ ìë£]</span> '
          : ' <span class="r_condition">[ì ì ìë£]</span>'),
      (a += "</li>");
    try {
      return a;
    } finally {
      (a = null), (e = null), (t = null);
    }
  }),
  (TEMPLATE_FUN.memoPopListHtml = function (e) {
    var t = "";
    (t += "<li>"),
      (t +=
        '	<a class="hand" onclick = "GO_MENU(\'note\');">' + e.memo + "</a>"),
      (t += "	<span>-" + e.sendDate + "</span>"),
      1 == isDefined(e.nickName) &&
        (t +=
          '	<span class="send_reply" onclick="WEB_NOTE.sendNoteLayer(\'' +
          e.nickname +
          "');\">ëµì¥íê¸°</span>"),
      (t += "</li>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_FUN.copyNoticeListHtml = function (e) {
    var t = "";
    (t += '<li onclick="GO_MENU(\'copyright\')" class="hand">'),
      (t += "	<span>Â·</span>"),
      (t += "	<a>" + e.title + "</a>"),
      (t += "</li>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_FUN.brocastRankingListHtml = function (e, t) {
    var a = e.title;
    -1 != a.indexOf("ì¼ë°¤") && (a = "ì¼ë°¤"),
      (a = a.replace(/\(/g, "|")),
      (a = a.replace(/\)/g, "|")),
      (a = a.split("|"));
    var i = e.title;
    i =
      1 > a.length
        ? e.title
        : 2 > a.length
        ? a[0]
        : a.length > 2
        ? a[1]
        : e.title;
    var n = "";
    0 == t && (n = "top");
    var s = Math.ceil(e.ratting);
    console.log("barWidth:" + s),
      APP.DEFINE.SERVER_NEWURL + "/search/?location=main&search=" + i;
    var o = "";
    (o +=
      '<li class="hand ' +
      n +
      "\" onclick=\"GO_MENU('search','" +
      i +
      "', 2);\">"),
      (o += "  <a>" + i + "</a>"),
      (o +=
        '  <span class="p_bar" style="width:' +
        2.5 * s +
        'px;"></span><span class="right"><span>' +
        e.ratting +
        "</span>%</span>"),
      (o += "</li>");
    try {
      return o;
    } finally {
      (o = null),
        (n = null),
        (t = null),
        (e = null),
        (a = null),
        (i = null),
        (s = null);
    }
  }),
  (TEMPLATE_FUN.brocastChapterListHtml = function (e) {
    var t =
        jQuery("#fc-search-brocast-chapter").data("keywd") + " " + e.chapter,
      a = APP.DEFINE.IMG + "/common/no_img_big.png",
      i = "";
    1 == isDefined(e.is_event_sale) &&
      1 == e.is_event_sale &&
      (i = '<span class="sun_300">' + e.event_price + "ì</span>");
    var n = '<span class="num"><b>' + e.chapter + "í</b></span>";
    "" != e.chapter1 &&
      (n =
        '<span class="num" style="width: 60px;"><b>' +
        e.chapter1 +
        "<b></span>");
    var s = "";
    (s +=
      '<li class="fc-search-iscroll-li" style="display: inline-block;" data-count="' +
      e.chapter +
      '">'),
      (s += '	<div class="list_img">'),
      (s +=
        '		<img src="' +
        e.thumbnail_img +
        '" alt="ë¯¸ë¦¬ë³´ê¸° ì´ë¯¸ì§" onerror="utility.ui.onErrorImgLoadAfterChange(this)" data-errimg="' +
        a +
        '" style="width: 178px; height: 99px;"/>'),
      (s += '		<div class="info">'),
      (s += n),
      (s += '			<span class="date">' + e.display_show_date + "</span>"),
      (s += "		</div>"),
      (s += "	</div>"),
      (s +=
        '	<div class="num_play" data-cate1="2" data-chapter_idx="' +
        e.idx +
        '" data-content_idx="' +
        e.content_idx +
        '" data-chapter="' +
        e.chapter +
        '" data-bbs_idx="' +
        e.bbs_no +
        '" data-bro_idx="' +
        e.idx +
        '" data-keywd="' +
        t +
        '" data-show_date="' +
        e.show_date +
        '" onclick="SEARCH_FN.onclickBrocastChapter(this);">'),
      (s += '		<span class="area"><span>ë°ë¡ë³´ê¸°</span></span>'),
      (s += "	</div>"),
      (s += '	<div class="list_txt">'),
      (s += "		<p>" + e.content + "</p>"),
      (s += "	</div>"),
      (s += i),
      (s += "</li>");
    try {
      return s;
    } finally {
      (s = null), (t = null), (e = null), (a = null), (i = null);
    }
  }),
  (TEMPLATE_FUN.viewBroChapterListHtml = function (e, t) {
    var a = jQuery("#fc-view-brocast-chapter").data("keywd") + " " + e.chapter,
      i = jQuery("#fc-view-brocast-chapter").data("chapter_idx"),
      n = "fc-broadcast-chapter-list-li-" + e.idx,
      s = "";
    i == e.idx && (s = "active");
    var o = "n_list_img",
      r = "fc-view-iscroll-li";
    "theme" == t && ((o = "list_img"), (r = "fc-theme-iscroll-li"));
    var l = APP.DEFINE.IMG + "/common/no_img_big.png",
      c = "";
    1 == isDefined(e.is_event_sale) &&
      1 == e.is_event_sale &&
      (c = '<span class="sun_300">' + e.event_price + "ì</span>");
    var d = '<span class="num"><b>' + e.chapter + "í</b></span>";
    "" != e.chapter1 &&
      (d =
        '<span class="num" style="width: 60px;"><b>' +
        e.chapter1 +
        "<b></span>");
    var u = "";
    (u +=
      '<li class="' +
      r +
      " " +
      s +
      '" id="' +
      n +
      '" data-cate1="2" data-chapter_idx=""' +
      e.idx +
      '"" data-chapter="' +
      e.chapter +
      '" data-content_idx="' +
      e.content_idx +
      '" data-bbs_idx="' +
      e.bbs_no +
      '" data-bro_idx="' +
      e.idx +
      '" data-keywd="' +
      a +
      '" data-show_date="' +
      e.show_date +
      '" onclick="SEARCH_FN.onclickBrocastChapter(this, true);">'),
      (u += '	<div class="' + o + '">'),
      (u +=
        '		<img src="' +
        e.thumbnail_img +
        '" alt="ë¯¸ë¦¬ë³´ê¸° ì´ë¯¸ì§" onerror="utility.ui.onErrorImgLoadAfterChange(this)" data-errimg="' +
        l +
        '"/>'),
      (u += '		<div class="info">'),
      (u += d),
      (u += '			<span class="date">' + e.show_date_mobile + "</span>"),
      (u += "		</div>"),
      (u += '		<div class="num_play">'),
      (u += '			<span class="area"><span>ë°ë¡ë³´ê¸°</span></span>'),
      (u += "		</div>"),
      (u += c),
      (u += "	</div>"),
      (u += '	<div class="list_txt">'),
      (u += "		<p>" + e.content + "</p>"),
      (u += "	</div>"),
      (u += "</li>");
    try {
      return u;
    } finally {
      (u = null),
        (a = null),
        (e = null),
        (s = null),
        (n = null),
        (i = null),
        (t = null),
        (o = null),
        (r = null),
        (l = null),
        (c = null);
    }
  }),
  (TEMPLATE_FUN.selectBroChapterListHtml = function (e) {
    var t = jQuery("#fc-view-brocast-chapter").data("keywd") + " " + e.chapter,
      a = "";
    (a +=
      '<li data-cate1="2" data-chapter="' +
      e.chapter +
      '" data-content_idx="' +
      e.content_idx +
      '" data-bbs_idx="' +
      e.bbs_no +
      '" data-bro_idx="' +
      e.content_idx +
      '" data-keywd="' +
      t +
      '" data-show_date="' +
      e.show_date +
      '" onclick="SEARCH_FN.onclickBrocastChapter(this);">'),
      (a += '	<span class="num">' + e.chapter + "í</span>"),
      (a +=
        '	<span class="date">[' +
        e.show_date_2 +
        "." +
        e.day_of_week +
        "]</span>"),
      (a += '	<span class="tit">' + e.content + "</span></li>"),
      (a += "</li>");
    try {
      return a;
    } finally {
      (a = null), (t = null), (e = null);
    }
  }),
  (TEMPLATE_FUN.themeMovieContentsHtml = function (e) {
    if (0 == isDefined(e)) return "";
    var t = "background: url('" + e.thumbnail + "') no-repeat 0 0;",
      a = "";
    (a +=
      '<div class="btn_n_close" onclick="WEB_THEME.closeThemeDetailInfo(this);">ë«ê¸°</div>'),
      (a += '<div class="c_imgArea" style="' + t + '"></div>'),
      (a += '<div class="c_conArea">'),
      (a += '	<h5><span class="link">' + e.title + "</span></h5>"),
      (a += "	<ul>"),
      (a += "		<li>" + e.cate_2_name + "</li>"),
      (a += '		<li class="bar">|</li>'),
      (a += "		<li>" + e.public_date + " ê°ë´</li>"),
      (a += "	</ul>"),
      (a += '	<div class="info">'),
      (a += '		<span class="txt_style">ê°ë</span>'),
      (a += "		<span>" + e.display_director + "</span>"),
      (a += '		<span class="bar">|</span>'),
      (a += '		<span class="txt_style">ì¶ì°</span>'),
      (a += "		<span>" + e.display_actor + "</span>"),
      (a += "	</div>"),
      (a += '	<div class="c_txt">'),
      (a += "		<p>" + e.synopsis + "</p>"),
      (a += "	</div>"),
      (a += "</div>"),
      (a += '<div class="c_score">'),
      (a += '	<span class="star_score style1">');
    for (var i = 0; 5 > i; i++)
      a +=
        e.star_count > i
          ? '<span class="case on"></span>'
          : '<span class="case"></span>';
    (a += "	</span>"),
      (a += '	<span class="score"> íì <b>' + e.rating + "</b></span>"),
      (a +=
        1 == isDefined(e.bbs_no)
          ? '	<span class="btn_go active" onclick="FC_APP_FN.openContentsView(' +
            e.bbs_no +
            ');">ë°ë¡ ë³´ê¸°</span>'
          : '	<span class="btn_go">ë°ë¡ ë³´ê¸°</span>'),
      (a += "</div>"),
      (a += '<div class="t_go">'),
      (a +=
        "	<p>ë°ë¡ë³´ê¸° ì´ì©ì ì°ê²°ë ì½íì¸ ê° ì¬ë°ë¥´ì§ ìë¤ë©´ ì ê³ í´ì£¼ì¸ì! ì ê³ íìë©´ ì´ìíìì íì¸ í 300Pë¥¼ ì ë¬¼ë¡ ëë¦½ëë¤. </p>"),
      1 == isDefined(e.bbs_no) &&
        (a +=
          '	<span class="btn_s_error" data-idx="' +
          e.bbs_no +
          '" data-type="theme" data-title="' +
          e.title +
          '" data-mobile="0" onclick="CONTENTS_FUN.contentsBadReport(this);">ì¤ë¥ ì ê³ íê¸°</span>'),
      (a += "</div>");
    try {
      return a;
    } finally {
      (a = null), (e = null), (t = null), (i = null);
    }
  }),
  (TEMPLATE_FUN.themeBroadcastContentsHtml = function (e, t, a) {
    if ((console.log("themeBroadcastContentsHtml"), 0 == isDefined(e)))
      return "";
    var i =
        "background: url('" +
        e.thumbnail +
        "') no-repeat 0 0; background-size:72px 72px;",
      n = "fc-theme-bro-chapter-list-iscroll-" + e.idx,
      s = 1e4,
      o = 1,
      r = "";
    1 == a && (r += '<div class="section_bg"></div>'),
      (r +=
        '<div class="btn_n_close" onclick="WEB_THEME.closeThemeDetailInfo(this);">ë«ê¸°</div>'),
      (r += '<div class="c_imgArea" style="' + i + '"></div>'),
      (r += '<div class="c_conArea">'),
      (r += '	<h5><span class="link">' + e.title + "</span></h5>"),
      (r += '	<div class="info">'),
      (r += "		<span>" + e.corp_name + "</span>"),
      (r += '		<span class="bar">|</span>'),
      (r += "		<span>" + e.show_day + "</span>"),
      (r += "		<span>" + e.display_show_time + "</span>"),
      (r += '		<span class="bar">|</span>'),
      (r += "		<span>" + e.genre_name + "</span>"),
      (r += '		<span class="bar">|</span>'),
      (r += '		<span class="txt_style">ì¶ì°</span>'),
      (r += "		<span>" + e.actor + "</span>"),
      (r += "	</div>"),
      (r += "</div>"),
      (r +=
        '<div class="c_con_num fc-theme-bro-chapter-title" style="display:none;">'),
      (r += "	<p>íì°¨ë³ ê°ìíê¸°</p>"),
      (r += '	<div class="select_num">'),
      (r += '		<div onclick="WEB_THEME.clickBroadcastContentsSelect(this);">'),
      (r += "			<p>ë³´ê³ ì¶ì íì°¨ë¥¼ ì íí´ ì£¼ì¸ì.</p>"),
      (r += '			<span class="n_bg"></span>'),
      (r += "		</div>"),
      (r += '		<div class="select_list fc-theme-brocast-chapter-select-list">'),
      (r += '			<ul class="fc-theme-brocast-chapter-list-ul">');
    for (var l = 0; t.list.length > l; l++)
      (r += TEMPLATE_FUN.selectBroChapterListHtml(t.list[l], "theme")),
        s > parseInt(t.list[l].chapter) && (s = parseInt(t.list[l].chapter));
    console.log("last_chapter_idx::" + s),
      1 >= s && (o = 0),
      (r += "			</ul>"),
      (r +=
        '			<div class="btn_listMore" data-loc="theme" data-show_day="' +
        e.show_day +
        '" data-more="' +
        o +
        '" data-chapter_idx="' +
        e.idx +
        '" data-keywd="' +
        e.keywd +
        '" data-last="' +
        s +
        '" onclick="SEARCH_FN.getSelectMoreBrocastList(this);"><span></span>ë¨ì íì°¨ ëë³´ê¸°</div>'),
      (r += "		</div>"),
      (r += "	</div>"),
      (r += '	<div class="btn_new">'),
      (r +=
        '		<span class="new fc-bc-sort active" data-sort="sort" onclick="WEB_THEME.onClickBrocastSort(this);">ìµì ì</span>'),
      (r += '		<span class="bar">|</span>'),
      (r +=
        '		<span class="best fc-bc-sort" data-sort="vote" onclick="WEB_THEME.onClickBrocastSort(this);">ì¸ê¸°ì</span>'),
      (r += "	</div>"),
      (r += "	/* num_list */"),
      (r += '	<div class="num_list">'),
      (r += '		<div class="btn_move fc-theme-bro-iscroll-btn">'),
      (r += '			<span class="prev"></span>'),
      (r += '			<span class="next"></span>'),
      (r += "		</div>"),
      (r += '		<div class="list_wrap" style="width:748px;" id="' + n + '">'),
      (r += '			<ul style="height:136px;" class="fc-theme-iscroll-ul">');
    for (var l = 0; t.list.length > l; l++)
      r += TEMPLATE_FUN.viewBroChapterListHtml(t.list[l], "theme");
    (r += "			</ul>"), (r += "		</div>"), (r += "	<div>"), (r += "<div>");
    try {
      return r;
    } finally {
      (r = null),
        (e = null),
        (t = null),
        (i = null),
        (n = null),
        (s = null),
        (o = null);
    }
  }),
  (TEMPLATE_FUN.freeContentsTopListHtml = function (e) {
    console.log("TEMPLATE_FUN.freeContentsTopListHtml");
    var t = APP.DEFINE.IMG + "/common/no_img_big.png";
    isDefined(e.img_url) && (t = e.img_url);
    var a = "GO_MENU('search', '" + e.title + "');";
    isDefined(e.keyword) && (a = "GO_MENU('search', '" + e.keyword + "');"),
      isDefined(e.bbs_idx) &&
        (a = "FC_APP_FN.openContentsView(" + e.bbs_idx + ");");
    var i = "";
    (i += '<li class="fc-contetns-copy-sale-top-li" onclick="' + a + '">'),
      (i +=
        '	<img src="' +
        t +
        '" alt="" /><span class="txt">' +
        e.title +
        "</span>"),
      (i += "</li>");
    try {
      return i;
    } finally {
      (i = null), (e = null), (a = null), (t = null);
    }
  }),
  (TEMPLATE_FUN.buyAgeBarGraphHtml = function (e) {
    var t = "";
    (t += '<span class="bar_tit">ì°ë ¹ë³</span>'),
      (t += '<div class="bar_graph">');
    for (var a = "", i = 0; e.length > i; i++)
      (a = 0 == i ? "most" : ""),
        (t += '<div class="t' + e[i][0] + '">'),
        (t +=
          '  <span class="bar"><span style="width:' +
          e[i][1] +
          'px;"></span></span>'),
        (t += '  <span class="per ' + a + '"><b>' + e[i][1] + "</b>%</span>"),
        (t += "</div>");
    return (t += "</div>");
  }),
  (TEMPLATE_FUN.buyGenderBarGraphHtml = function (e) {
    var t = [];
    for (var a in e) "man" == e[a][0] ? (t.man = e[a][1]) : (t.woman = e[a][1]);
    var i = "",
      n = "";
    t.man > t.woman ? (i = "most") : t.man < t.woman && (n = "most");
    var s = "";
    return (
      (s += '<span class="bar_tit">ì±ë³</span>'),
      (s += '<div class="bar_graph">'),
      (s +=
        ' <div class="woman"><span class="bar"><span style="width:' +
        t.woman +
        'px;"></span></span><span class="per ' +
        n +
        '">' +
        t.woman +
        "%</span></div>"),
      (s +=
        ' <div class="men"><span class="bar"><span style="width:' +
        t.man +
        'px;"></span></span><span class="per ' +
        i +
        '">' +
        t.man +
        "%</span></div>"),
      (s += "</div>")
    );
  }),
  (TEMPLATE_FUN.latestMovieContentsHtml = function (e) {
    if (0 == isDefined(e)) return "";
    var t =
        "/www/search/?force_category=1&category=1&location=main&search=" +
        e.search_text,
      a = "",
      i = "";
    "1" == e.is_hot
      ? (a = '<span class="ico_hot"></span>')
      : 1 == e.is_new && (a = '<span class="ico_new"></span>'),
      1 == e.is_adult && (i = '<span class="ico"></span>');
    var n = "";
    (n += "<li>"),
      (n += '	<a href="' + t + '">'),
      (n +=
        '		<span class="m_img">' +
        a +
        '<img src="' +
        e.thumbnail +
        '" alt="" /></span>'),
      (n += '		<p><span class="txt">' + i + e.title + "</span></p>"),
      (n += '		<span class="category">' + e.cate_2_name + "</span>"),
      (n += '		<span class="date">ê°ë´ì¼ : ' + e.public_date + "</span>"),
      (n += "	</a>"),
      (n += "</li>");
    try {
      return n;
    } finally {
      (n = null), (e = null), (i = null);
    }
  }),
  (TEMPLATE_HTML = {}),
  (TEMPLATE_MODAL = {}),
  (TEMPLATE_MODAL.fcSellerGuideModal = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcSellerGuideModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (t += '	<div class="modal-dialog" role="document">'),
      (t += '		<div class="pop_layer">'),
      (t += "			<h1>íë§¤ì ì ì± ë³´ê¸°</h1>"),
      (t += '			<div class="layer_top type1">'),
      (t += "				<ul>"),
      (t +=
        '					<li class="t1" id="seller_guide_1" onclick="WEB_SELLER.guideLayerTab(this.id);"><a class="hand">íë§¤ì ë±ê¸ ë° íí</a><span class="bg"></span></li>'),
      (t +=
        '					<li class="t2" id="seller_guide_2" onclick="WEB_SELLER.guideLayerTab(this.id);"><a class="hand">ì ì©ë íì¸</a><span class="bg"></span></li>'),
      (t +=
        '					<li class="t3" id="seller_guide_3" onclick="WEB_SELLER.guideLayerTab(this.id);"><a class="hand">ì½íì¸  ë±ë¡ì ì ìì¬í­</a><span class="bg"></span></li>'),
      (t += "				</ul>"),
      (t += "			</div>"),
      (t += '			<div class="layer_btm">'),
      (t += '				<div class="layer_con" id="seller_guide_1_tab">'),
      (t += "					<h2>íì¼ìºì¤í¸ íë§¤ìê° ëëê±´?</h2>"),
      (t +=
        "					<p>ë³¸ì¸ì ì½íì¸ ë¥¼ íì¼ìºì¤í¸ì ë±ë¡í  ì ìë ìê²©ì ê°ì§ íìì íë§¤íìì´ë¼ê³  íë©° ì½íì¸ ê° íë§¤ë  ê²½ì° <br /> ë±ê¸ì ë°ë¼ í¬ì¸í¸ê° ì ë¦½ë©ëë¤.</p>"),
      (t +=
        "					<p>ì ë¦½ë í¬ì¸í¸ë íê¸ì¼ë¡ êµííì¬ ì¶ê¸ì´ ê°ë¥íë©° í¬ì¸í¸ì íê¸ì ì í ë¹ì¨ì 2:1ìëë¤.<br /> â» ë¬´ìì¼ë¡ ë°ê¸ë ì¿ í°, ë³´ëì¤í¬ì¸í¸, ì ì¡ì ë ì ë¦½ëì§ ììµëë¤.</p>"),
      (t += "					<h2>íë§¤ì ë±ë¡ í ê¸°ë³¸(ë¬´ë£) ì ê³µ ìì´í</h2>"),
      (t += '					<div class="p_tbl_style">'),
      (t += '						<div class="p_tit">'),
      (t += '							<div class="p1">ìì´íëª</div>'),
      (t += '							<div class="p2" scope="col">ê¸°ë³¸ ì ê³µ ê°ì</div>'),
      (t += '							<div class="p3" scope="col">í¨ê³¼</div>'),
      (t += "						</div>"),
      (t += '						<div class="line">'),
      (t += '							<div class="p1">ìì ë±ë¡ ìì´í</div>'),
      (t += '							<div class="p2">50ê°</div>'),
      (t += '							<div class="p3">ë´ê° ë±ë¡í ê¸ì ìµìë¨ì ë±ë¡</div>'),
      (t += "						</div>"),
      (t += "					</div>"),
      (t += "					<h2>ë±ê¸ì ë ë° í¤í</h2>"),
      (t += '					<div class="p_tbl_style type1">'),
      (t += '						<div class="p_tit">'),
      (t += '							<div class="l1">ë±ê¸</div>'),
      (t += '							<div class="l2">íë§¤ììµ(ì½íì¸  íë§¤ê¸ì¡ ê¸°ì¤)</div>'),
      (t += '							<div class="l3">ë±ì ìê±´</div>'),
      (t += '							<div class="l4">ì¶ê¸ê°ë¥ê¸ì¡</div>'),
      (t += "						</div>"),
      (t += '						<div class="line">'),
      (t +=
        '							<div class="l1"><span class="g_ico type1"></span> <span class="txt_gray">1ë¨ê³</span><span class="bold">NEW</span></div>'),
      (t += '							<div class="l2">35%</div>'),
      (t += '							<div class="l3">ê¸°ë³¸</div>'),
      (t += '							<div class="l4">40,000í¬ì¸í¸</div>'),
      (t += "						</div>"),
      (t += '						<div class="line bg">'),
      (t +=
        '							<div class="l1"><span class="g_ico type2"></span> <span class="txt_gray">2ë¨ê³</span><span class="bold">SILVER</span></div>'),
      (t += '							<div class="l2">40%</div>'),
      (t += '							<div class="l3">70,000ì </div>'),
      (t += '							<div class="l4">40,000í¬ì¸í¸</div>'),
      (t += "						</div>"),
      (t += '						<div class="line">'),
      (t +=
        '							<div class="l1"><span class="g_ico type3"></span> <span class="txt_gray">3ë¨ê³</span><span class="bold">GOLD</span></div>'),
      (t += '							<div class="l2">45%</div>'),
      (t += '							<div class="l3">150,000ì </div>'),
      (t += '							<div class="l4">40,000í¬ì¸í¸</div>'),
      (t += "						</div>"),
      (t += '						<div class="line bg">'),
      (t +=
        '							<div class="l1"><span class="g_ico type4"></span> <span class="txt_gray">4ë¨ê³</span><span class="bold">VIP</span></div>'),
      (t += '							<div class="l2">50%</div>'),
      (t += '							<div class="l3">300,000ì </div>'),
      (t += '							<div class="l4">40,000í¬ì¸í¸</div>'),
      (t += "						</div>"),
      (t += "					</div>"),
      (t += "				</div>"),
      (t +=
        '				<div class="layer_con" id="seller_guide_2_tab" style="display:none;">'),
      (t += "					<h2>íë§¤ì ë±ìê¸°ì¤</h2>"),
      (t +=
        "					<p>íì¼ìºì¤í¸ììë ìëì ìê±´ì ê¸°ì¤ì¼ë¡ ë±ìì²ë¦¬ê° ëê³  ììµëë¤. ê° ë±ê¸ë³ ì¹ê²©ìê±´ì ë¶í©ëë©´ ë±ìì ì²­ì <br /> í  ì ììµëë¤. ì ì²­ í ì´ìì§ì ì¬ì¬ì ë°ë¼ ìµë 1ì£¼ì¼ì´ë´ ê²°ê³¼ë¥¼ íµë³´í´ ëë¦½ëë¤.</p>"),
      (t += "					<h2>ëì íë§¤íí©</h2>"),
      (t += '					<div class="p_tbl_style type1 style1">'),
      (t += '						<div class="p_tit">'),
      (t += '							<div class="p1">ë±ê¸</div>'),
      (t += '							<div class="p2">íë§¤ì ì</div>'),
      (t += '							<div class="p_size p3">ì ì©ë</div>'),
      (t += "						</div>"),
      (t += "						<div>"),
      (t +=
        '							<div id="seller_info" class="p1"><span class="g_ico type1"></span> <span class="txt_gray" id="seller_grade_layer">1ë¨ê³</span><span class="bold">NEW</span></div>'),
      (t +=
        '							<div class="p2"><span class="bold" id="seller_point_layer">0</span>ì </div>'),
      (t += '							<div class="p3">'),
      (t += '								<div class="star_score style1 none" id="seller_star">'),
      (t +=
        '									<span class="s_area"  id="seller_area"><span id="star1" class="case"></span><span id="star2" class="case"></span><span id="star3" class="case"></span><span id="star4" class="case"></span><span id="star5" class="case"></span></span>'),
      (t += "								</div>"),
      (t +=
        '								<span onclick="WEB_SELLER.gradeUp();"><a class="btn_grade_u hand">ë±ì ì ì²­</a></span>'),
      (t += "							</div>"),
      (t += "						</div>"),
      (t += "					</div>"),
      (t += '					<div class="sell_score">'),
      (t += '						<div class="sell_l">'),
      (t += "							<h3>íë§¤ì ì ê³ì°</h3>"),
      (t +=
        "							<p>íë§¤ì ì = (ì½íì¸ ë±ë¡ì X 10) + íë§¤íì + êµ¬ë§¤ë§ì¡±ë íê°ì ì<br />"),
      (t += "								â»ë¨, ì±ì¸ìë£ë ì½íì¸  íë§¤ì ì ê³ì°ìì ì ì¸ë©ëë¤. 	"),
      (t += "							</p>"),
      (t += "						</div>"),
      (t += '						<div class="sell_r">'),
      (t += "							<ul>"),
      (t += '								<li><span class="star_score type5"></span> 5ì </li>'),
      (t += '								<li><span class="star_score type4"></span> 4ì </li>'),
      (t += '								<li><span class="star_score type3"></span> 3ì </li>'),
      (t += '								<li><span class="star_score type2"></span> 2ì </li>'),
      (t += '								<li><span class="star_score type1"></span> 1ì </li>'),
      (t += "							</ul>"),
      (t += "						</div>"),
      (t += "					</div>"),
      (t += "					<h2>íë§¤ì ë±ì ìê±´</h2>"),
      (t += '					<div class="p_tbl_style type1 style2">'),
      (t += '						<div class="p_tit">'),
      (t += '							<div class="l1">ë±ê¸</div>'),
      (t += '							<div class="l2">íë§¤ ì ì</div>'),
      (t += '							<div class="l3">ì ì©ë</div>'),
      (t += "						</div>"),
      (t += '						<div class="line">'),
      (t +=
        '							<div class="l1"><span class="g_ico type1"></span> <span class="txt_gray">1ë¨ê³</span><span class="bold">NEW</span></div>'),
      (t += '							<div class="l2">ê¸°ë³¸</div>'),
      (t += '							<div class="l3">ê¸°ë³¸</div>'),
      (t += "						</div>"),
      (t += '						<div class="line">'),
      (t +=
        '							<div class="l1"><span class="g_ico type2"></span> <span class="txt_gray">2ë¨ê³</span><span class="bold">SILVER</span></div>'),
      (t += '							<div class="l2">70,000ì </div>'),
      (t += '							<div class="l3"><span class="star_score type3"></span></div>'),
      (t += "						</div>"),
      (t += '						<div class="line">'),
      (t +=
        '							<div class="l1"><span class="g_ico type3"></span> <span class="txt_gray">3ë¨ê³</span><span class="bold">GOLD</span></div>'),
      (t += '							<div class="l2">150,000ì </div>'),
      (t += '							<div class="l3"><span class="star_score type4"></span></div>'),
      (t += "						</div>"),
      (t += '						<div class="line">'),
      (t +=
        '							<div class="l1"><span class="g_ico type4"></span> <span class="txt_gray">4ë¨ê³</span><span class="bold">VIP</span></div>'),
      (t += '							<div class="l2">300,000ì </div>'),
      (t += '							<div class="l3"><span class="star_score type5"></span></div>'),
      (t += "						</div>"),
      (t += "					</div>"),
      (t += "				</div>"),
      (t +=
        '				<div class="layer_con" id="seller_guide_3_tab" style="display:none;">'),
      (t += "					<h2>ì½íì¸  ë±ë¡ì ì£¼ìì¬í­</h2>"),
      (t +=
        "					<p>íì¼ìºì¤í¸ììë ëª¨ë  íìì´ ë¯¿ê³  êµ¬ë§¤í  ì ìëë¡ ì½íì¸  ë±ë¡ì ì¤ìì¬í­ì´ ë§ë ¨ëì´ ìì¼ë©° ìë°ì í¬ì¸í¸<br /> íì, íë§¤ ìê²© ì ì§ ë±ì ì ì¬ë¥¼ ë°ì ì ììµëë¤. <br />"),
      (t +=
        "					ì½íì¸  ë±ë¡ì ìë ë´ì©ì ë°ëì íì¸í´ ì£¼ìê³  ì´ë¡ ì¸í´ í¼í´ë¥¼ ë°ì§ ìëë¡ ì ìí´ ì£¼ìê¸° ë°ëëë¤."),
      (t += "					</p>"),
      (t += '					<div class="p_table">'),
      (t += "						<table>"),
      (t += "							<tbody>"),
      (t += "								<tr>"),
      (t += '									<th scope="row">ì ìê¶ ë³´í¸ ìë£</th>'),
      (t +=
        "									<td>ì½íì¸  ë±ë¡ ì  ì ìê¶ ë³´í¸ ëª©ë¡ì ë°ëì íì¸í´ì£¼ìê¸° ë°ë¼ë©° íìëì ë³´í¸íê¸° ìí´ ì´ìíìì ëª¨ëí°ë§ í ì­ì ë  ì ììµëë¤.</td>"),
      (t += "								</tr>"),
      (t += '								<tr class="bg">'),
      (t += '									<th scope="row">ì½íì¸  ì¤ëª ë¶ì¶©ë¶</th>'),
      (t +=
        "									<td>ì ëª© ë´ì©ì ë³´ê³  ì´ë í ì½íì¸ ì¸ì§ ì ì ìëë¡ íê° ì´ìì ì´ë¯¸ì§ (ì¤í¬ë¦°ì·), ë´ì©, ì¤ê±°ë¦¬, ì¬ì©ë² ë±ì ë°ëì í¨ê» ìë ¥í´ì£¼ì­ìì¤.</td>"),
      (t += "								</tr>"),
      (t += "								<tr>"),
      (t += '									<th scope="row">ê´ê³ ì± í¹ì <br /> ê³¼ì¥ë ì ëª© ì¬ì©</th>'),
      (t +=
        "									<td>ì ëª©ì ë°ë³µ,ê´í¸ë¬¸ì ë± ì ëª©ê³¼ ë¬´ê´íê±°ë ê³¼ì¥ë ë¬¸êµ¬ë¥¼ ì ëª©ì í¬í¨ëë©´ ìë©ëë¤. ì) ê°ì¶, ëë°, ìµë¤ë¤ì´, [ì¶][ì²] ë±ì ë°ë³µ,ê´ê³ ì± ë¬¸êµ¬</td>"),
      (t += "								</tr>"),
      (t += '								<tr class="bg">'),
      (t += '									<th scope="row">ì¹´íê³ ë¦¬ ì íì¤ë¥</th>'),
      (t +=
        "									<td>ë±ë¡í  ìë£ì ë¶ë¥ì ë§ë ì¹´íê³ ë¦¬ë¥¼ ì íí´ì£¼ìê¸° ë°ëëë¤.</td>"),
      (t += "								</tr>"),
      (t += "								<tr>"),
      (t += '									<th scope="row">ë´ì©ì ê´ê³ ê°<br />í¬í¨ë ì½íì¸ </th>'),
      (t +=
        "									<td>ë´ì© ë° ì¤í¬ë¦°ì·,ì´ë¯¸ì§ì ì íë²í¸,íì¬ì´í¸ ê´ê³ ê° í¬í¨ëë©´ ìë©ëë¤.</td>"),
      (t += "								</tr>"),
      (t += '								<tr class="bg">'),
      (t += '									<th scope="row">êµ¬ì±ììê° <br />ë¶ì¶©ë¶í ì½íì¸ </th>'),
      (t +=
        "									<td>ìë§ì´ íìíê±°ë ë³ë ì¤ííë¡ê·¸ë¨ ë±ì´ íìí ì½íì¸ ë ë°ëì í¨ê» ë±ë¡í´ì£¼ìê³  íìì ì¸ ììê° ë¹ ì ¸ ìì ê²½ì°ìë í´ë¹ ë´ì­ì ìë ¤ì¼í©ëë¤.</td>"),
      (t += "								</tr>"),
      (t += "								<tr>"),
      (t += '									<th scope="row">ì½íì¸  ë¶í  ë±ë¡</th>'),
      (t +=
        "									<td>í ê°ì ì½íì¸ ë¥¼ íì¼ë³ë¡ ë°ë¡ ë±ë¡íê±°ë ë¶ë¦¬í´ì ë±ë¡í´ìë ìëë©° ìë¦¬ì¦ì¼ ê²½ì° 1-5 ííë¡ ë¬¶ì´ì ë±ë¡í´ ì£¼ì­ìì¤</td>"),
      (t += "								</tr>"),
      (t += '								<tr class="bg">'),
      (t += '									<th scope="row">ì±ì¸ì½íì¸  <br /> ë±ë¡ ê·ì  ìë°</th>'),
      (t +=
        "									<td>ì±ì¸ìë£ë ë°ëì 19ê¸ íê¸°ë¥¼ íì¬ ë¯¸ì±ëìê° ì´ì©í  ì ìëë¡ í´ì£¼ìê³  ë°ëì ì±ì¸ ì¹´íê³ ë¦¬ì ë±ë¡í´ì£¼ìê¸° ë°ëëë¤.</td>"),
      (t += "								</tr>"),
      (t += "							</tbody>"),
      (t += "						</table>"),
      (t += "					</div>"),
      (t +=
        '					<p class="p_txt">â» ë±ë¡ë ì½íì¸ ê° 3í ì´ì ì­ì  ë  ê²½ì° íë§¤ìê²©ì´ ì ì§ëë©° 5í ì´ìì¼ ê²½ì° íë§¤ ìê²©ì´ ì·¨ìëë¯ë¡<br /> ê°ë³í ì ìí´ì£¼ìê¸° ë°ëëë¤</p>'),
      (t += "					<h2>íë§¤ì íì ì£¼ìì¬í­</h2>"),
      (t +=
        '					<p>íë§¤ìê° ì§ì¼ì¼ í  íìì¬í­ìëë¤. <span class="txt_red">ìë°ì ê²½ê³ ìì´ ì ì¬</span>ëì¤ë ë°ëì ì§ì¼ì£¼ì¸ì!</p>'),
      (t += '					<div class="p_table">'),
      (t += "						<table>"),
      (t += "							<tbody>"),
      (t += "								<tr>"),
      (t += '									<th scope="row">í¬ì¸í¸ ì ì¡ íì,<br />íë§¤ ìê²© ì·¨ì</th>'),
      (t += '									<td><span class="txt_red">í íìì ì½íì¸  êµ¬ë§¤ í ì¬íë§¤</span>'),
      (t +=
        "										<p>ë¤ë¥¸ íìì ì½íì¸ ë¥¼ ë¤ì´ë°ì ì¬ë±ë¡íë íìë ìë±ë¡ììê² í¼í´ë¥¼ ë¼ì¹ <br /> ë¿ë§ ìëë¼ ì½íì¸ ì íì¼íë¥¼ ì´ëíë ë± ì¬ê°í ë¬¸ì ê° ë°ìíê¸° ëë¬¸ì<br /> ê¸ì§íê³  ììµëë¤.</p>"),
      (t += "									</td>"),
      (t += "								</tr>"),
      (t += '								<tr class="bg">'),
      (t +=
        '									<th scope="row">í¬ì¸í¸ ì ì¡ íì,<br />íë§¤ ìê²© ì·¨ì,<br />ì´ì© ì ì§ 30ì¼</th>'),
      (t += '									<td><span class="txt_red">íì ìë£ ë±ë¡ ë° íë§¤</span>'),
      (t +=
        "										<p>íì ìë£ë íì¼ìºì¤í¸ ì ì²´ì ì ë¢°ë¥¼ ìê² ë§ë¤ê³  ë¤ì íìì´ í¼í´ë¥¼ ìê²<br /> ëë¯ë¡ ê°ë ¥íê² ê·ì íê³  ììµëë¤. ì¤ì  ë±ë¡í ìë£ê° ì¤ëªí ë´ì©ì´<br /> ìëê±°ë ì¬ì©í  ì ìë íì¼ì´ ë±ë¡ë  ê²½ì° íë§¤ ìê²©ì´ ì¦ì ì ì§ëë©° ì ì¬ë¥¼<br /> ë°ê²ë©ëë¤.</p>"),
      (t += "									</td>"),
      (t += "								</tr>"),
      (t += "								<tr>"),
      (t += '									<th scope="row">í¬ì¸í¸ íì,<br />ê³ì  ì­ì </th>'),
      (t += '									<td><span class="txt_red">í ì¬ì´í¸ ê´ê³  íì</span>'),
      (t +=
        "										/* <p>ì½íì¸  ë±ë¡ì ì´ì©íê±°ë ì¸ì´íëìì ì´ë í ë°©ë²ì¼ë¡ë íì¬ì´í¸ ê´ê³ ë<br /> ì ì¬ ì¬ì´í¸ íë³´ë¥¼ ê¸ì§ í©ëë¤.</p> */"),
      (t += "									</td>"),
      (t += "								</tr>"),
      (t += '								<tr class="bg">'),
      (t += '									<th scope="row">íë§¤ ìê²© ì·¨ì</th>'),
      (t += '									<td><span class="txt_red">ë³¸ì¸ ì½íì¸  ì¤ë³µ ë±ë¡</span>'),
      (t += "										<p>íë³´ë¥¼ ìí´ ëì¼ ì½íì¸ ë¥¼ ê³ìì ì¼ë¡ ë±ë¡íë íì</p>"),
      (t += "									</td>"),
      (t += "								</tr>"),
      (t += "								<tr>"),
      (t += '									<th scope="row">íë§¤ ìê²© ì·¨ì í¹ì<br /> ì´ì© ì ì§ 30ì¼</th>'),
      (t +=
        '									<td><span class="txt_red">ë§ê¸, ê²ìí ë±ì ì¥ìì ë¹ë°©, ìì¤ ì¬ì©ì</span></td>'),
      (t += "								</tr>"),
      (t += '								<tr class="bg">'),
      (t += '									<th scope="row">í¬ì¸í¸ íì í¹ì<br /> ì´ì© ì ì§ 30ì¼</th>'),
      (t += '									<td><span class="txt_red">ì±ì¸ ì½íì¸  ì¤ìì¬í­ ìë°</span></td>'),
      (t += "								</tr>"),
      (t += "								<tr>"),
      (t +=
        '									<th scope="row">ë±ë¡ ì½íì¸  ì­ì ,<br /> ëì  3í ì­ì ì<br /> íë§¤ ìê²© 7ì¼ ì ì§,<br />ëì  5í ì­ì ì<br /> íë§¤ ìê²© ì·¨ì </th>'),
      (t += '									<td><span class="txt_red">ì¼ë° ì½íì¸  ì¤ìì¬í­ ìë°</span></td>'),
      (t += "								</tr>"),
      (t += "							</tbody>"),
      (t += "						</table>"),
      (t += "					</div>"),
      (t += "				</div>"),
      (t += "			</div>"),
      (t +=
        '			<a  class="btn_close type2 style1 hand" data-dismiss="modal"></a>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcItemBuyModal = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcItemBuyModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (t += '	<div class="modal-dialog" role="document">'),
      (t += '		<div class="pop_layer item1">'),
      (t += "			<h1>íë§¤ì ìì´í êµ¬ì</h1>"),
      (t += '			<div class="p_l_con">'),
      (t +=
        '				<p>ë³´ì  í¬ì¸í¸ : <span class="point"><b id="item_cash">0</b> P</span> <span class="btn_charge" onclick="GO_MENU(\'charge\');">ì¶©ì íê¸°</span></p>'),
      (t += '				<form action="#" method="post">'),
      (t += "					<fieldset>"),
      (t += '					<dl class="item_info">'),
      (t += "						<dt>ìíëª<span>:</span></dt>"),
      (t += "						<dd><span>ìì ë±ë¡ ìì´í</span></dd>"),
      (t += "						<dt>ê°ê²©<span>:</span></dt>"),
      (t += '						<dd><span id="rank_up_price">300</span> P</dd>'),
      (t += "						<dt>ìë<span>:</span></dt>"),
      (t +=
        '						<dd><input type="text" name="cnt_rankup" id="cnt_rankup" onkeyup="WEB_SELLER.procItem(this.value);"/> ê°  <span class="c_point">ê²°ì í¬ì¸í¸ : <span id="cnt_rankp">0</span> P</span></dd>'),
      (t += "						<dt>ì¤ëª<span>:</span></dt>"),
      (t += "						<dd>ë±ë¡í ì½íì¸ (ê¸)ì ê²ìê¸ ìµìë¨ì ë±ë¡</dd>"),
      (t += "					</dl>"),
      (t += "					</fieldset>"),
      (t += "				</form>"),
      (t += "			</div>"),
      (t +=
        '			<span onclick="WEB_SELLER.rankUpBuy(\'cash\');"><a class="hand btn_buy">êµ¬ë§¤íê¸°</a></span>'),
      (t += '			<a class="btn_close type2 style1 hand" data-dismiss="modal"></a>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcItemCashModal = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcItemCashModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (t += '	<div class="modal-dialog" role="document">'),
      (t += '		<div class="pop_layer item2">'),
      (t += "			<h1>ìì´í ìºì ì¬ì©</h1>"),
      (t += '			<div class="cash">'),
      (t += "				<p>ìì´í ìºìë ì½íì¸  ë±ë¡ì íìí ìì´í êµ¬ë§¤ë¡ ì¬ì©ë©ëë¤.</p>"),
      (t +=
        '				<p>ë³´ì  ìì´í ìºì : <span id="seller_cash_layer">0</span> ìºì</p>'),
      (t += "			</div>"),
      (t += '			<div class="item_menu">'),
      (t += "				<ul>"),
      (t +=
        '					<li class="active" id="item_use" onclick="WEB_SELLER.itemLayerTab(1);"><a class="hand">ìì´í ì¬ì©</a><span class="bg"></span></li>'),
      (t +=
        '					<li id="item_guide"onclick="WEB_SELLER.itemLayerTab(2);" ><a class="hand">ìì´í ìºì ìë´</a><span class="bg"></span></li>'),
      (t += "				</ul>"),
      (t += "			</div>"),
      (t += '			<div class="item_con">'),
      (t += '				<div class="con1"id="item_con1">'),
      (t += "					<h2>íë§¤ì ìì´í ì¬ì© íí©</h2>"),
      (t += "					<ul>"),
      (t += "						<li>"),
      (t += "							<div><span>ìì´íëª</span></div>"),
      (t += "							<div><span>ì¤ëª</span></div>"),
      (t += "							<div><span>ê°ê²©</span></div>"),
      (t += "							<div><span>ìë</span></div>"),
      (t += "							<div><span>ê¸ì¡</span></div>"),
      (t += "						</li>"),
      (t += "						<li>"),
      (t += "							<div><span>ììë±ë¡ìì´í</span></div>"),
      (t += "							<div><span>ë±ë¡í ê¸ì ìµììë¡ ë±ë¡</span></div>"),
      (t += "							<div><span>20ìºì</span></div>"),
      (t +=
        '							<div><span><input type="text" id="cnt_rankup2" name="cnt_rankup2" onkeyup="WEB_SELLER.procItemCash(this.value);"/> ê°</span></div>'),
      (t += '							<div><span id="cash_rank_up_cash">0 ìºì</span></div>'),
      (t += "						</li>"),
      (t += "					</ul>"),
      (t +=
        '					<p class="total">ì´ êµ¬ë§¤ìë : <span id="cash_rank_up_cnt">0</span> ê° / ì´ êµ¬ë§¤ìºì : <span><b id="cash_rank_up_cash1">0</b> ìºì</span></p>'),
      (t +=
        '					<a class="hand btn_buy" onclick="WEB_SELLER.rankUpBuy(\'sel_cash\');">êµ¬ë§¤íê¸°</a>'),
      (t += "				</div>"),
      (t += '				<div class="con2" id="item_con2" style="display:none;">'),
      (t += "					<h2>ìì´í ìºìë?</h2>"),
      (t +=
        "					<p>ìì´í ìºìë ì ì¡ì  ê°ì ì ë¦½ì´ ëì§ ìë ìë¨ì ì´ì©íì¬ íë§¤íìëì ì½íì¸ ë¥¼ êµ¬ë§¤íìì ê²½ì° <br />ì´ìëí ë³´ìì¼ë¡ ë¬´ë£ë¡ ìì´íì êµ¬ìí  ì ìë ìºììëë¤.</p>"),
      (t += "					<h2>ìì´í êµ¬ë§¤ ê°ê²©</h2>"),
      (t += "					<p>ìì ë±ë¡ ìì´í : 20ìºì</p>"),
      (t += "					<h2>ìì´í ì ë¦½ ë´ì­</h2>"),
      (t += "					<table>"),
      (t += '						<caption class="blind">ìì´í ì ë¦½ ë´ì­</caption>'),
      (t += "						<colgroup>"),
      (t += '							<col width="110px"/>'),
      (t += '							<col width="*"/>'),
      (t += '							<col width="70px"/>'),
      (t += "						</colgroup>"),
      (t += "						<thead>"),
      (t += "							<tr>"),
      (t += "							<th>ìì´í ëª</th>"),
      (t += "							<th>ì ë¦½ ìì´í ìºì</th>"),
      (t += "							<th>ì ë¦½ ì í</th>"),
      (t += "							</tr>"),
      (t += "						</thead>"),
      (t += "						<tbody>"),
      (t += "							<tr>"),
      (t += "							<td>ë¤ì´ë¡ë ì¿ í°</td>"),
      (t += "							<td>1ìºì</td>"),
      (t += "							<td>ì í ìì</td>"),
      (t += "							</tr>"),
      (t += "							<tr>"),
      (t += "							<td>ì ì¡ì </td>"),
      (t += "							<td>1ìºì</td>"),
      (t += "							<td>ì í ìì</td>"),
      (t += "							</tr>"),
      (t += "							<tr>"),
      (t += "							<td>ë³´ëì¤ í¬ì¸í¸</td>"),
      (t += "							<td>1ìºì</td>"),
      (t += "							<td>ì í ìì</td>"),
      (t += "							</tr>"),
      (t += "						</tbody>"),
      (t += "					</table>"),
      (t += "				</div>"),
      (t += "			</div>"),
      (t += '			<a class="btn_close type2 style1 hand" data-dismiss="modal"></a>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcJoinMemberAgree = function () {
    var e = "";
    (e += '	<textarea name="agreeJoinText" id="textarea-join-agree-yakun">'),
      (e += "[ê°ì¸ì ë³´ ì·¨ê¸ë°©ì¹¨]\n"),
      (e +=
        "(ì£¼)íì´ëì¹(ì´í 'íì¬')ë ì´ì©ìë¤ì ê°ì¸ì ë³´ë³´í¸ë¥¼ ë§¤ì° ì¤ììíë©°, ì´ì©ìê° íì¬ì íì¼ìºì¤í¸(www.filecast.co.kr)ìë¹ì¤(ì´í 'ìë¹ì¤')ë¥¼"),
      (e +=
        "ì´ì©í¨ê³¼ ëìì ì¨ë¼ì¸ììì íì¬ì ì ê³µí ê°ì¸ì ë³´ê° ë³´í¸ ë°ì ì ìëë¡ ìµì ì ë¤íê³  ììµëë¤. ì´ì íì¬ë ì ë³´íµì ë§ ì´ì© ì´ì§ ë° ì ë³´ë³´í¸ ë±ì"),
      (e +=
        "ê´í ë²ë¥ , ê°ì¸ì ë³´ë³´í¸ë², íµì ë¹ë°ë³´í¸ë², ì ê¸°íµì ì¬ìë² ë± ì ë³´íµì ìë¹ì¤ì ê³µìê° ì¤ìíì¬ì¼ í  ê´ë ¨ ë²ë ¹ìì ê°ì¸ì ë³´ë³´í¸ ê·ì ì ì¤ìíë©°,"),
      (e +=
        "ê´ë ¨ ë²ë ¹ì ìê±°í ê°ì¸ì ë³´ì·¨ê¸ë°©ì¹¨ì ì íì¬ ì´ì©ì ê¶ìµ ë³´í¸ì ìµì ì ë¤íê³  ììµëë¤.\n"),
      (e += "\r\n"),
      (e +=
        "ë³¸ ê°ì¸ì ë³´ì·¨ê¸ë°©ì¹¨ì íì¬ìì ì ê³µíë ìë¹ì¤ì ì ì©ëë©° ìëì ê°ì ë´ì©ì ë´ê³  ììµëë¤.\n"),
      (e += ""),
      (e += "ê°. ê°ì¸ì ë³´ì·¨ê¸ë°©ì¹¨ì ëí ëì\n"),
      (e += "ë. ìì§íë ê°ì¸ì ë³´í­ëª©ê³¼ ì´ì©ëª©ì \n"),
      (e += "ë¤. ê°ì¸ì ë³´ ìì§ì ëí ëì\n"),
      (e += "ë¼. íì¼ìºì¤í¸ê° ìì§í ê°ì¸ì ë³´ì ê³µì  ë° ì ê³µ\n"),
      (e += "ë§. ì´ì©ì ìì ì ê°ì¸ì ë³´ ê´ë¦¬(ì´ë,ì ì ,ì­ì  ë±)ì ê´í ì¬í­\n"),
      (e += "ë°. ê°ì¸ì ë³´ ìë ìì§ ì¥ì¹ì ì¤ì¹/ì´ì ë° ê±°ë¶ì ê´í ì¬í­\n"),
      (e += "ì¬. ê°ì¸ì ë³´ê´ë ¨ ê¸°ì ì -ê´ë¦¬ì  ëì±\n"),
      (e += "ì. ê°ì¸ì ë³´ì ìíê´ë¦¬\n"),
      (e += "ì. ê°ì¸ì ë³´ê´ë ¨ ìê²¬ ìë ´ ë° ë¶ë§ì²ë¦¬ì ê´í ì¬í­\n"),
      (e += "ì°¨. íì¼ìºì¤í¸ ê°ì¸ì ë³´ ê´ë¦¬ì±ìì ë° ë´ë¹ìì ìì\n"),
      (e += "ì¹´. ê°ì  ì  ê³ ì§ ìë¬´\n"),
      (e += "\r\n"),
      (e += "ê°. ê°ì¸ì ë³´ì·¨ê¸ë°©ì¹¨ì ëí ëì"),
      (e +=
        "íì¬ë ì´ì©ìë¤ì´ íì¬ì ì´ì©ì½ê´ ë° ê°ì¸ì ë³´ ë³´í¸ì ì±ì ë´ì©ì ëíì¬ íì ê°ìì 'ì´ì©ì½ê´ ë° ê°ì¸ì ë³´ì·¨ê¸ë°©ì¹¨ ëì'ë¼ë ê²ì ì²´í¬í  ì ìë ì ì°¨ë¥¼ ë§ë ¨íì¬, í´ë¹ ì²´í¬ë°ì¤ì ì²´í¬ë¥¼ í  ê²½ì° ê°ì¸ì ë³´ ìì§ì ëí´ ëìí ê²ì¼ë¡ ë´ëë¤."),
      (e += "\r\n"),
      (e += "ë. ìì§íë ê°ì¸ì ë³´ í­ëª©ê³¼ ì´ì©ëª©ì "),
      (e +=
        "1. íì¼ìºì¤í¸ììë íìê°ì, ìíí ê³ ê°ìë´, ê°ì¢ ìë¹ì¤ì ì ê³µ ë±ì ìí´ ìëì ê°ì ìµìíì ê°ì¸ì ë³´ë¥¼ íì í­ëª©ì¼ë¡ ìì§í©ëë¤.\n"),
      (e +=
        "íì¼ìºì¤í¸ì ì½íì¸ ë¥¼ ìì ë¡­ê² ì´ì©íê³ ì í  ê²½ì° ë¤ìì ì ë³´ë¥¼ ìë ¥í´ ì£¼ìì¼í©ëë¤.\n"),
      (e += "2.íìê°ìì ìì§íë ê°ì¸ì ë³´ì í­ëª©\n"),
      (e += "- ìì´ë(ëë ì´ë©ì¼),ëë¤ì,ë¹ë°ë²í¸\n"),
      (e += "3. ì´ì©ì ëì í ê°ì¸ì ë³´ë¥¼ ì¶ê° ìì§íë ê²½ì°\n"),
      (e +=
        "- ë¬¸ì/ì ê³  : ì í, PCì¹,ëª¨ë°ì¼ ê³ ê°ì¼í°ìì ë°ì ì íë²í¸, í´ëí°ë²í¸ë¥¼ ìì§í  ì ìì¼ë©°, ë¬¸ì/ì ê³  ì íì ë°ë¼ íìëê»ì ì¶ê°ë¡ ìë ¥íìë ê°ì¸ì ë³´ê° ìì ì ììµëë¤.\n"),
      (e +=
        "- ë³¸ì¸íì¸ : ì´ë¦, ìëìì¼, ì±ë³, í´ëí°ë²í¸(í´ëí° ì¸ì¦ì), ìì´í ë²í¸(ìì´í ì¸ì¦ì)\n"),
      (e +=
        "- ì´ë²¤í¸ ì°¸ì¬ ë° ë¹ì²¨ ì ê²½íë°°ì¡ : í´ëí° ë²í¸, ì£¼ì, ì íë²í¸, ë©ì ì /SNS ì£¼ì\n"),
      (e +=
        "4. ìë¹ì¤ ì´ì© ê³¼ì ìì ì´ì©ìì ê´í ì ë³´ë¥¼ ì ë³´íµì ìë¹ì¤ ì ê³µìê° ìëíë ë°©ë²ì¼ë¡ ìì±íì¬ ì´ë¥¼ ì ì¥(ìì§)íê±°ë, ì´ì©ì ê¸°ê¸°ì ê³ ì í ì ë³´ë¥¼"),
      (e +=
        "ìëì ê°ì íì¸íì§ ëª» íëë¡ ìì íê² ë³íí íì IP ì£¼ì, ì¿ í¤, ë°©ë¬¸ ì¼ì, ìë¹ì¤ ì´ì©ê¸°ë¡, ë¶ë ì´ì© ê¸°ë¡ ë±ì ìë¹ì¤ ì´ì© ê¸°ë¡, ê¸°ê¸°ì ë³´ê° "),
      (e += "ìëì¼ë¡ ìì±ëê±°ë ì¶ê°ë¡ ìì§ë  ì ììµëë¤.\n"),
      (e += "5. ìì±ì ë³´ ìì§ì ëí ì¶ê° ì¤ëª\n"),
      (e +=
        "- IP(Internet Protocol) ì£¼ìë ì¸í°ë· ë§ ì¬ììê° ì¸í°ë·ì ì ìíë ì´ì©ìì PC ë± ê¸°ê¸°ì ë¶ì¬íë ì¨ë¼ì¸ ì£¼ìì ë³´ ìëë¤. IP ì£¼ìê° "),
      (e +=
        "ê°ì¸ì ë³´ì í´ë¹íëì§ ì¬ë¶ì ëí´ìë ê°êµ­ë§ë¤ ë§¤ì° ë¤ìí ê²¬í´ê° ììµëë¤.\n"),
      (e +=
        "- ë³¸ ê°ì¸ì ë³´ì·¨ê¸ë°©ì¹¨ì ê¸°ì¬ë ê¸°ê¸°ì ë³´ë ìì° ë° íë§¤ ê³¼ì ìì ê¸°ê¸°ì ë¶ì¬ë ì ë³´ë¿ ìëë¼, ê¸°ê¸°ì êµ¬ëì ìí´ ì¬ì©ëë S/Wë¥¼ íµí´ íì¸ ê°ë¥í"),
      (e +=
        "ì ë³´ë¥¼ ëª¨ë ì¼ì»«ìµëë¤. OS(Windows, MAC OS ë±) ì¤ì¹ ê³¼ì ìì ì´ì©ìê° PCì ë¶ì¬íë ì»´í¨í°ì ì´ë¦, PCì ì¥ì°©ë ì£¼ë³ê¸°ê¸°ì ì¼ë ¨ë²í¸,"),
      (e +=
        "ì¤ë§í¸í°ì íµì ì íìí ê³ ì í ìë³ê°(IMEI, IMSI), ì¤ì ì¸ì´ ë° ì¤ì  íì¤ì, USIMì íµì ì¬ ì½ë ë±ì ìë¯¸í©ëë¤. ë¨, íì¬ë ê¸°ê¸°ì ê³ ì í ìë³ê°ì"),
      (e +=
        "ìì§í  íìê° ìë ê²½ì°, ì´ë¥¼ ìì§íê¸° ì ì íì¬ë ìëì ê°ì ììë³¼ ì ìë ë°©ìì¼ë¡ ìí¸í íì¬ ìë³ì±(Identifiability)ì ì ê±°í íì ìì§í©ëë¤.\n"),
      (e += "6. ê°ì¸ì ë³´ ìì§ ë°©ë²\n"),
      (e += "- ííì´ì§, ìë©´ìì, í©ì¤, ì í, ì´ë©ì¼, ë¬¸ì/ì ê³ íê¸°\n"),
      (e += "- ìì±ì ë³´ ìì§ í´ì íµí ìì§\n"),
      (e += "7. ìì§í ê°ì¸ì ë³´ì ì´ì©\n"),
      (e +=
        "- íì ê°ì ìì¬ì íì¸, ì°ë ¹ íì¸ ë° ì´ì©ì íì¸, ì´ì©ì ìë³, íìíí´ ìì¬ì íì¸ ë± íìê´ë¦¬ë¥¼ ìíì¬ ê°ì¸ì ë³´ë¥¼ ì´ì©í©ëë¤.\n"),
      (e +=
        "- ì½íì¸  ë± ê¸°ì¡´ ìë¹ì¤ ì ê³µ(ê´ê³  í¬í¨)ì ëíì¬, ì¸êµ¬íµê³íì  ë¶ì, ìë¹ì¤ ë°©ë¬¸ ë° ì´ì©ê¸°ë¡ì ë¶ì, ê°ì¸ì ë³´ ë° ê´ì¬ì ê¸°ë°í ì´ì©ìê°"),
      (e +=
        "ê´ê³ì íì±, ì§ì¸ ë° ê´ì¬ì¬ ë±ì ê¸°ë°í ë§ì¶¤í ìë¹ì¤ ì ê³µ ë± ì ê· ìë¹ì¤ ììì ë°êµ´ ë° ê¸°ì¡´ ìë¹ì¤ ê°ì  ë±ì ìíì¬ ê°ì¸ì ë³´ë¥¼ ì´ì©í©ëë¤.\n"),
      (e +=
        "- ë²ë ¹ ë° íì¼ìºì¤í¸ ì´ì©ì½ê´ì ìë°íë íìì ëí ì´ì© ì í ì¡°ì¹, ë¶ì  ì´ì© íìë¥¼ í¬í¨íì¬ ìë¹ì¤ì ìíí ì´ìì ì§ì¥ì ì£¼ë íìì ëí ë°©ì§"),
      (e +=
        "ë° ì ì¬, ê³ì ëì© ë° ë¶ì ê±°ë ë°©ì§, ì½ê´ ê°ì  ë±ì ê³ ì§ì¬í­ ì ë¬, ë¶ìì¡°ì ì ìí ê¸°ë¡ ë³´ì¡´, ë¯¼ìì²ë¦¬ ë± ì´ì©ì ë³´í¸ ë° ìë¹ì¤ ì´ìì ìíì¬ "),
      (e += "ê°ì¸ì ë³´ë¥¼ ì´ì©í©ëë¤.\n"),
      (e +=
        "- ì ë£ ìë¹ì¤ ì ê³µì ë°ë¥´ë ë³¸ì¸ì¸ì¦, êµ¬ë§¤ ë° ìê¸ ê²°ì , ìí ë° ìë¹ì¤ì ë°°ì¡ì ìíì¬ ê°ì¸ì ë³´ë¥¼ ì´ì©í©ëë¤.\n"),
      (e +=
        "- ì´ë²¤í¸ ì ë³´ ë° ì°¸ì¬ê¸°í ì ê³µ, ê´ê³ ì± ì ë³´ ì ê³µ ë± ë§ì¼í ë° íë¡ëª¨ì ëª©ì ì¼ë¡ ê°ì¸ì ë³´ë¥¼ ì´ì©í©ëë¤.\n"),
      (e +=
        "- ìë¹ì¤ ì´ì©ê¸°ë¡ê³¼ ì ì ë¹ë ë¶ì, ìë¹ì¤ ì´ì©ì ëí íµê³, ìë¹ì¤ ë¶ì ë° íµê³ì ë°ë¥¸ ë§ì¶¤ ìë¹ì¤ ì ê³µ ë° ê´ê³  ê²ì¬ ë±ì ê°ì¸ì ë³´ë¥¼ ì´ì©í©ëë¤.\n"),
      (e +=
        "- ë³´ì, íë¼ì´ë²ì, ìì  ì¸¡ë©´ìì ì´ì©ìê° ìì¬íê³  ì´ì©í  ì ìë ìë¹ì¤ ì´ì©íê²½ êµ¬ì¶ì ìí´ ê°ì¸ì ë³´ë¥¼ ì´ì©í©ëë¤.\n"),
      (e +=
        "8. ì´ì©ìì ê¸°ë³¸ì  ì¸ê¶ ì¹¨í´ì ì°ë ¤ê° ìë ë¯¼ê°í ê°ì¸ì ë³´(ì¸ì¢ ë° ë¯¼ì¡±, ì¬ì ë° ì ì¡°, ì¶ì ì§ ë° ë³¸ì ì§, ì ì¹ì ì±í¥ ë° ë²ì£ê¸°ë¡, ê±´ê°ìí ë° ì±ìí ë±) ì ìì§íì§ ììµëë¤.\n"),
      (e += "\r\n"),
      (e += "ë¤. ê°ì¸ì ë³´ìì§ì ëí ëì\n"),
      (e +=
        "íì¼ìºì¤í¸ë ì´ì©ìê° ê°ì¸ì ë³´ì·¨ê¸ë°©ì¹¨ ëë ì´ì©ì½ê´ì ë´ì©ì ëí´ ãëìíë¤ãë²í¼ ëë ãëìíì§ ìëë¤ãë²í¼ì í´ë¦­í  ì ìë ì ì°¨ë¥¼ ë§ë ¨íì¬, ãëìíë¤ãë²í¼ì í´ë¦­íë©´ ê°ì¸ì ë³´ ìì§ì ëí´ ëìí ê²ì¼ë¡ ë´ëë¤.\n"),
      (e += "\r\n"),
      (e += "ë¼. íì¼ìºì¤í¸ê° ìì§í ê°ì¸ì ë³´ì ê³µì  ë° ì ê³µ\n"),
      (e +=
        'íì¬ë ì´ì©ìë¤ì ê°ì¸ì ë³´ë¥¼ "ë. ê°ì¸ì ë³´ì ìì§ëª©ì  ë° ì´ì©ëª©ì "ìì ê³ ì§í ë²ì ë´ìì ì¬ì©íë©°, ì´ì©ìì ì¬ì  ëì ìì´ë ë ë²ìë¥¼ ì´ê³¼íì¬'),
      (e +=
        "ì´ì©íê±°ë ìì¹ì ì¼ë¡ ì´ì©ìì ê°ì¸ì ë³´ë¥¼ ì¸ë¶ì ê³µê°íì§ ììµëë¤. ë¤ë§, ìëì ê²½ì°ìë ìì¸ë¡ í©ëë¤.\n"),
      (e += "ì²«ì§¸ , ì´ì©ìë¤ì´ ì¬ì ì ê³µê°ì ëìí ê²½ì°\n"),
      (e +=
        "ëì§¸ , ííì´ì§ì ê²ìí íì¼ìºì¤í¸ ìë¹ì¤ ì´ì©ì½ê´ì´ë ê¸°í íììë¹ì¤ ë±ì ì´ì©ì½ê´ì ìë°í ê²½ì°\n"),
      (e +=
        "ìì§¸ , íì¼ìºì¤í¸ ìë¹ì¤ë¥¼ ì´ì©íì¬ íì¸ìê² ì ì ì -ë¬¼ì§ì  í¼í´ë¥¼ ì¤ì¼ë¡ì ê·¸ì ëí ë²ì ì¸ ì¡°ì¹ë¥¼ ì·¨íê¸° ìíì¬ ê°ì¸ì ë³´ë¥¼ ê³µê°í´ì¼ íë¤ê³ "),
      (e += "íë¨ëë ì¶©ë¶í ê·¼ê±°ê° ìë ê²½ì°\n"),
      (e +=
        "ë·ì§¸ , ê¸°í ë²ì ìí´ ìêµ¬ëë¤ê³  ì ìë¡ íë¨ëë ê²½ì° (ex. ê´ë ¨ë²ì ìê±° ì ë²í ì ì°¨ì ìí ì ë¶ê¸°ê´ì ìì²­ì´ ìë ê²½ì° ë±)\n"),
      (e +=
        "ë¤ì¯ì§¸ , íµê³ìì±, íì ì°êµ¬ë ìì¥ì¡°ì¬ë¥¼ ìíì¬ í¹ì  ê°ì¸ì ìë³í  ì ìë ííë¡ ê´ê³ ì£¼, íë ¥ìì²´ë ì°êµ¬ë¨ì²´ ë±ì ì ê³µíë ê²½ì° ê·¸ë¦¬ê³  íì¬ë ìë¡ì´"),
      (e +=
        "ê¸°ì ê°ë°ì´ë ë³´ë¤ ëì ìë¹ì¤ì ì ê³µì ìíì¬ ì´ì©ìë¤ì ê°ì¸ì ë³´ë¥¼ ê³µì í  ì ììµëë¤. ì´ ê²½ì°ìë ì ë³´ìì§ ëë ì ë³´ì ê³µ ì´ì ì ì´ì©ìë¤ìê²"),
      (e +=
        "ê°ì¸ì ë³´ë¥¼ ê³µì í  ê¸°ê´ì´ë ë¨ì²´ê° ëêµ¬ì¸ì§, ì´ë¤ ì ë³´ê° ì íìíì§, ê·¸ë¦¬ê³  ì¸ì ê¹ì§ ì´ë»ê² ë³´í¸ëê³  ê´ë¦¬ëëì§ ìë ¤ëë¦¬ê³  ëìë¥¼ êµ¬íë ì ì°¨ë¥¼"),
      (e +=
        "ê±°ì¹ê²ëë©°, ì´ì©ìë¤ì ëìê° ìë ê²½ì°ìë ì¶ê°ì ì¸ ì ë³´ë¥¼ ììë¡ ìì§íê±°ë ê³µì íì§ ììµëë¤.\n"),
      (e += "\r\n"),
      (e += "ë§. ì´ì©ì ìì ì ê°ì¸ì ë³´ ê´ë¦¬(ì´ë,ì ì ,ì­ì  ë±)ì ê´í ì¬í­\n"),
      (e +=
        "1. ì´ì©ìê° íì¼ìºì¤í¸ì íìì¼ë¡ì íì¬ì ì ê³µíë ìë¹ì¤ë¥¼ ì´ì©íë ëì íì¬ë ì´ì©ìë¤ì ê°ì¸ì ë³´ë¥¼ ê³ìì ì¼ë¡ ë³´ì íë©° ìë¹ì¤ ì ê³µ ë±ì ìí´"),
      (e +=
        "ì´ì©í©ëë¤. ë¤ë§, íì ë³¸ì¸ì´ ì§ì  ì­ì íê±°ë ìì í ì ë³´, ê°ìí´ì§ë¥¼ ìì²­í ê²½ì°ìë ì¬ìí  ì ìë ë°©ë²ì ìíì¬ ëì¤í¬ìì ìì í ì­ì íë©°"),
      (e +=
        "ì¶í ì´ëì´ë ì¬ìì´ ë¶ê°ë¥í ìíë¡ íê¸°í©ëë¤. ê·¸ë¦¬ê³  ì¼ìì ì¸ ëª©ì (ì¤ë¬¸ì¡°ì¬, ì´ë²¤í¸ ë±)ì¼ë¡ ìë ¥ë°ì ê°ì¸ì ë³´ë ê·¸ ëª©ì ì´ ë¬ì±ë ì´íìë ëì¼í"),
      (e += "ë°©ë²ì¼ë¡ ì¬í ì¬ìì´ ë¶ê°ë¥í ìíë¡ íê¸°í©ëë¤. \n"),
      (e +=
        "2. ì´ì©ìì ê°ì¸ì ë³´ë ë¤ìê³¼ ê°ì´ ê°ì¸ì ë³´ì ìì§ëª©ì  ëë ì ê³µë°ì ëª©ì ì´ ë¬ì±ëë©´ íê¸°íë ê²ì ìì¹ì¼ë¡ í©ëë¤. ë¤ë§, ìëì ê²½ì° íìì ë³´ë¥¼ ë³´ê´í©ëë¤. ì ììê±°ë ë±ììì ìë¹ì ë³´í¸ì ê´í ë²ë¥ , ì ìê¸ìµê±°ëë², íµì ë¹ë°ë³´í¸ë² ë± ë²ë ¹ìì ì¼ì ê¸°ê° ì ë³´ì ë³´ê´ì ê·ì íë ê²½ì°ë ìëì ê°ìµëë¤. íì¬ë ì´ ê¸°ê° ëì ë²ë ¹ì ê·ì ì ë°ë¼ ê°ì¸ì ë³´ë¥¼ ë³´ê´íë©°, ë³¸ ì ë³´ë¥¼ ë¤ë¥¸ ëª©ì ì¼ë¡ë ì ë ì´ì©íì§ ììµëë¤.\n"),
      (e += "- ì ììê±°ë ë±ìì ìë¹ì ë³´í¸ì ê´í ë²ë¥ \n"),
      (e += "ê³ì½ ëë ì²­ì½ì² í ë±ì ê´í ê¸°ë¡: 5ë ë³´ê´\n"),
      (e += "ëê¸ê²°ì  ë° ì¬í ë±ì ê³µê¸ì ê´í ê¸°ë¡: 5ë ë³´ê´\n"),
      (e += "ìë¹ìì ë¶ë§ ëë ë¶ìì²ë¦¬ì ê´í ê¸°ë¡: 3ë ë³´ê´\n"),
      (e += "- ì ìê¸ìµê±°ëë²\n"),
      (e += "ì ìê¸ìµì ê´í ê¸°ë¡: 5ë ë³´ê´\n"),
      (e += "- íµì ë¹ë°ë³´í¸ë²\n"),
      (e += "ë¡ê·¸ì¸ ê¸°ë¡: 3ê°ì\n"),
      (e +=
        "3. ë²ì  ëë¦¬ì¸ì ì¸ì ë ì§ ë±ë¡ëì´ ìë ìì  í¹ì ë¹í´ ë§ 14ì¸ ë¯¸ë§ ìëì ê°ì¸ì ë³´ë¥¼ ì¡°ííê±°ë ìì í  ì ìì¼ë©° ê°ìí´ì§ë¥¼ ìì²­í  ìë ììµëë¤. ì´ì©ì í¹ì ë§ 14ì¸ ë¯¸ë§ ìëì ê°ì¸ì ë³´ ì¡°í ìì ì ìí´ìë âê°ì¸ì ë³´ ë³ê²½â(ëë âíìì ë³´ìì â ë±)ì ê°ìí´ì§(ëìì² í)ë¥¼ ìí´ìë âíìíí´âë¥¼ í´ë¦­ íì¬ ë³¸ì¸ íì¸ ì ì°¨ë¥¼ ê±°ì¹ì  í ì§ì  ì´ë, ì ì  ëë íí´ê° ê°ë¥í©ëë¤. í¹ì ê°ì¸ì ë³´ê´ë¦¬ì±ìììê² ìë©´, ì í ëë ì´ë©ì¼ë¡ ì°ë½íìë©´ ì§ì²´ìì´ ì¡°ì¹íê² ìµëë¤. ì´ì©ìê° ê°ì¸ì ë³´ì ì¤ë¥ì ëí ì ì ì ìì²­íì  ê²½ì°ìë ì ì ì ìë£íê¸° ì ê¹ì§ ë¹í´ ê°ì¸ì ë³´ë¥¼ ì´ì© ëë ì ê³µíì§ ììµëë¤. ëí ìëª»ë ê°ì¸ì ë³´ë¥¼ ì 3ì ìê² ì´ë¯¸ ì ê³µí ê²½ì°ìë ì ì  ì²ë¦¬ê²°ê³¼ë¥¼ ì 3ììê² ì§ì²´ìì´ íµì§íì¬ ì ì ì´ ì´ë£¨ì´ì§ëë¡ íê² ìµëë¤. ì´ì©ì í¹ì ë²ì  ëë¦¬ì¸ì ìì²­ì ìí´ í´ì§ ëë ì­ì ë ê°ì¸ì ë³´ë âíì¼ìºì¤í¸ê° ìì§íë ê°ì¸ì ë³´ì ë³´ì  ë° ì´ì©ê¸°ê°âì ëªìë ë°ì ë°ë¼ ì²ë¦¬íê³  ê·¸ ì¸ì ì©ëë¡ ì´ë ëë ì´ì©í  ì ìëë¡ ì²ë¦¬íê³  ììµëë¤.\n"),
      (e +=
        "4. íìíí´, ìë¹ì¤ ì¢ë£, ì´ì©ììê² ëìë°ì ê°ì¸ì ë³´ ë³´ì ê¸°ê°ì ëëì ê°ì´ ê°ì¸ì ë³´ì ìì§ ë° ì´ì©ëª©ì ì´ ë¬ì±ë ê°ì¸ì ë³´ë ì¬ìì´ ë¶ê°ë¥í ë°©ë²ì¼ë¡ íê¸°íê³  ììµëë¤. ë²ë ¹ìì ë³´ì¡´ìë¬´ë¥¼ ë¶ê³¼í ì ë³´ì ëí´ìë í´ë¹ ê¸°ê° ê²½ê³¼ í ì§ì²´ìì´ ì¬ìì´ ë¶ê°ë¥í ë°©ë²ì¼ë¡ íê¸°í©ëë¤.\n"),
      (e +=
        "ì ìì  íì¼ ííì ê²½ì° ë³µêµ¬ ë° ì¬ìì´ ëì§ ìëë¡ ê¸°ì ì ì¸ ë°©ë²ì ì´ì©íì¬ ìì íê² ì­ì íë©°, ì¶ë ¥ë¬¼ ë±ì ë¶ìíê±°ë ìê°íë ë°©ì ë±ì¼ë¡ íê¸°í©ëë¤.\n"),
      (e +=
        "5. ìì´ëì ê²½ì° ìë¹ì¤ ì´ì©ì í¼ì ì ë°©ì§íê¸° ìíì¬ ë³´ì¡´ëë©°, íì¼ìºì¤í¸ì ì´ì©ì½ê´ ë±ì ìë°íì¬ ê³ì ì­ì ê° ì´ë£¨ì´ì§ íìê³¼ ê°ì¸ì´ ì­ì ë¥¼ í ê²½ì° í¼ì  ì´ì©ì ë°©ì§íê¸° ìíì¬ 2ë ëì í´ë¹ ì ë³´ë¥¼ ë³´ê´í©ëë¤.\n"),
      (e += "\r\n"),
      (e += "ë°. ê°ì¸ì ë³´ ìë ìì§ ì¥ì¹ì ì¤ì¹/ì´ì ë° ê±°ë¶ì ê´í ì¬í­\n"),
      (e +=
        "1. ì¿ í¤ë ì¹ì¬ì´í¸ë¥¼ ì´ìíëë° ì´ì©ëë ìë²ê° ì´ì©ìì ë¸ë¼ì°ì ì ë³´ë´ë ìì£¼ ìì íì¤í¸ íì¼ë¡ì ì´ì©ìì ì»´í¨í°ì ì ì¥ë©ëë¤.\n"),
      (e +=
        "2. íì¬ë ê°ì¸íëê³  ë§ì¶¤íë ìë¹ì¤ë¥¼ ì ê³µíê¸° ìí´ì ì´ì©ìì ì ë³´ë¥¼ ì ì¥íê³  ììë¡ ë¶ë¬ì¤ë ì¿ í¤ë¥¼ ì¬ì©í©ëë¤. ì´ì©ìê° ì¹ì¬ì´í¸ì ë°©ë¬¸í  ê²½ì° ì¹ ì¬ì´í¸ ìë²ë ì´ì©ìì ëë°ì´ì¤ì ì ì¥ëì´ ìë ì¿ í¤ì ë´ì©ì ì½ì´ ì´ì©ìì íê²½ì¤ì ì ì ì§íê³  ë§ì¶¤íë ìë¹ì¤ë¥¼ ì ê³µíê² ë©ëë¤. ì¿ í¤ë ì´ì©ìê° ì¹ ì¬ì´í¸ë¥¼ ë°©ë¬¸í  ë, ì¹ ì¬ì´í¸ ì¬ì©ì ì¤ì íëë¡ ì ìíê³  í¸ë¦¬íê² ì¬ì©í  ì ìëë¡ ëìµëë¤. ëí, ì´ì©ìì ì¹ì¬ì´í¸ ë°©ë¬¸ ê¸°ë¡, ì´ì© ííë¥¼ íµí´ì ìµì íë ê´ê³  ë± ë§ì¶¤í ì ë³´ë¥¼ ì ê³µíê¸° ìí´ íì©ë©ëë¤.\n"),
      (e +=
        "3. ì¿ í¤ ìì§ ê±°ë¶ - ì¿ í¤ë ê°ì¸ì ìë³íë ì ë³´ë¥¼ ìëì /ë¥ëì ì¼ë¡ ìì§íì§ ìì¼ë©°, ì´ì©ìë ì¿ í¤ ì¤ì¹ì ëí ì íê¶ì ê°ì§ê³  ììµëë¤. ë°ë¼ì, ì´ì©ìë ì¹ ë¸ë¼ì°ì ìì ìµìì ì¤ì í¨ì¼ë¡ì¨ ëª¨ë  ì¿ í¤ë¥¼ íì©íê±°ë, ì¿ í¤ê° ì ì¥ë  ëë§ë¤ íì¸ì ê±°ì¹ê±°ë, ëª¨ë  ì¿ í¤ì ì ì¥ì ê±°ë¶í  ìë ììµëë¤. ë¤ë§ ì¿ í¤ ì¤ì¹ë¥¼ ê±°ë¶í  ê²½ì° ì¹ ì¬ì©ì´ ë¶í¸í´ì§ë©° íì¬ì ì¼ë¶ ìë¹ì¤ ì´ì©ì ì´ë ¤ìì´ ìì ì ììµëë¤.\n"),
      (e += "<ì¤ì  ë°©ë²ì ì>\n"),
      (e +=
        "Internet Explorerì ê²½ì° : ì¹ ë¸ë¼ì°ì  ìë¨ì ëêµ¬ ë©ë´ > ì¸í°ë· ìµì > ê°ì¸ì ë³´ > ì¤ì \n"),
      (e +=
        "Chromeì ê²½ì° : ì¹ ë¸ë¼ì°ì  ì°ì¸¡ì ì¤ì  ë©ë´ > íë©´ íë¨ì ê³ ê¸ ì¤ì  íì > ê°ì¸ì ë³´ì ì½íì¸  ì¤ì  ë²í¼ > ì¿ í¤\n"),
      (e += "\r\n"),
      (e += "ì¬. ê°ì¸ì ë³´ê´ë ¨ ê¸°ì ì -ê´ë¦¬ì  ëì±\n"),
      (e +=
        "íì¬ë ì´ì©ìë¤ì ê°ì¸ì ë³´ë¥¼ ì·¨ê¸í¨ì ìì´ ê°ì¸ì ë³´ê° ë¶ì¤, ëë, ëì¶, ë³ì¡° ëë í¼ìëì§ ìëë¡ ìì ì± íë³´ë¥¼ ìíì¬ ë¤ìê³¼ ê°ì ê¸°ì ì  ëì±ì ê°êµ¬íê³  ììµëë¤. ì´ì©ìë¤ì ê°ì¸ì ë³´ë ë¹ë°ë²í¸ì ìí´ ì² ì í ë³´í¸ëê³  ììµëë¤. íì¼ìºì¤í¸ íì ìì´ë(ID)ì ë¹ë°ë²í¸ë ë³¸ì¸ë§ì´ ìê³  ìì¼ë©°, ê°ì¸ì ë³´ì íì¸ ë° ë³ê²½ë ë¹ë°ë²í¸ë¥¼ ìê³  ìë ë³¸ì¸ì ìí´ìë§ ê°ë¥í©ëë¤. ë°ë¼ì ì´ì©ì ì¬ë¬ë¶ê»ìë ë¹ë°ë²í¸ë¥¼ ëêµ¬ìê²ë ìë ¤ì£¼ìë©´ ìë©ëë¤. ì´ë¥¼ ìí´ íì¬ììë ê¸°ë³¸ì ì¼ë¡ PCììì ì¬ì©ì ë§ì¹ì  í ì¨ë¼ì¸ììì ë¡ê·¸ìì(LOG-OUT)íìê³  ì¹ë¸ë¼ì°ì ë¥¼ ì¢ë£íëë¡ ê¶ì¥í©ëë¤. í¹í ë¤ë¥¸ ì¬ëê³¼ PCë¥¼ ê³µì íì¬ ì¬ì©íê±°ë ê³µê³µì¥ì(íì¬ë íêµ, ëìê´, ì¸í°ë· ê²ìë°© ë±)ìì ì´ì©í ê²½ì°ìë ê°ì¸ì ë³´ê° ë¤ë¥¸ ì¬ëìê² ìë ¤ì§ë ê²ì ë§ê¸° ìí´ ìì ê°ì ì ì°¨ê° ëì± íìí  ê²ìëë¤. íì¬ë í´í¹ì´ë ì»´í¨í° ë°ì´ë¬ì¤ ë±ì ìí´ íìì ê°ì¸ì ë³´ê° ì ì¶ëê±°ë í¼ìëë ê²ì ë§ê¸° ìí´ ìµì ì ë¤íê³  ììµëë¤. ê°ì¸ì ë³´ì í¼ìì ëë¹í´ì ìë£ë¥¼ ììë¡ ë°±ìíê³  ìê³ , ìµì  ë°±ì íë¡ê·¸ë¨ì ì´ì©íì¬ ì´ì©ìë¤ì ê°ì¸ì ë³´ë ìë£ê° ëì¶ëê±°ë ììëì§ ìëë¡ ë°©ì§íê³  ìì¼ë©°, ìí¸ìê³ ë¦¬ì¦ ë±ì íµíì¬ ë¤í¸ìí¬ììì ê°ì¸ì ë³´ë¥¼ ìì íê² ì ì¡í  ì ìëë¡ íê³  ììµëë¤. ê·¸ë¦¬ê³  ì¹¨ìì°¨ë¨ìì¤íì ì´ì©íì¬ ì¸ë¶ë¡ë¶í°ì ë¬´ë¨ ì ê·¼ì íµì íê³  ìì¼ë©°, ê¸°í ìì¤íì ì¼ë¡ ìì ì±ì íë³´íê¸° ìí ê°ë¥í ëª¨ë  ê¸°ì ì  ì¥ì¹ë¥¼ ê°ì¶ë ¤ ë¸ë ¥íê³  ììµëë¤. íì¬ì ê°ì¸ì ë³´ê´ë ¨ ì·¨ê¸ ì§ìì ë´ë¹ìì íì ìí¤ê³  ìê³  ì´ë¥¼ ìí ë³ëì ë¹ë°ë²í¸ë¥¼ ë¶ì¬íì¬ ì ê¸°ì ì¼ë¡ ê°±ì íê³  ìì¼ë©°, ë´ë¹ìì ëí ìì êµì¡ì íµíì¬ íì¼ìºì¤í¸ ê°ì¸ì ë³´ ë³´í¸ì ì±ì ì¤ìë¥¼ í­ì ê°ì¡°íê³  ììµëë¤.\n"),
      (e += "\r\n"),
      (e += "ì. ê°ì¸ì ë³´ì ìíê´ë¦¬\n"),
      (e +=
        "íì¬ë ìë¹ì¤ í¥ìì ìí´ì ì´ì©ìë¤ì ê°ì¸ì ë³´ë¥¼ ì¸ë¶ì ë¬¸ìì²´ì ìííì¬ ì²ë¦¬í  ì ììµëë¤. ëí ìíê³ì½ ë±ì íµíì¬ ìë¹ì¤ì ê³µìì ê°ì¸ì ë³´ë³´í¸ ê´ë ¨ ì§ììì, ê°ì¸ì ë³´ì ê´í ë¹ë°ì ì§, ì 3ì ì ê³µì ê¸ì§ ë° ì¬ê³ ìì ì±ìë¶ë´ ë±ì ëªíí ê·ì íê³  ë¹í´ ê³ì½ë´ì©ì ìë©´ ëë ì ìì ì¼ë¡ ë³´ê´í  ê²ìëë¤.\n"),
      (e +=
        "1. ë¤ë , ë¤ì°ê¸°ì , í¬ì¸í¸íí¬, KGëª¨ë¹ë¦¬ì¸ì¤, íì´íë¸, ë©í¬ë¡ì¤ : ê²°ì ì²ë¦¬(í´ëí°, ë¬´íµì¥ ìê¸, ê³ì¢ì´ì²´, ì ì©ì¹´ë, ì§ë¥ìíê¶ ë° í¬ì¸í¸ ì í ë± ê¸°í ê²°ì ìë¨)\n"),
      (e += "2. KCB: ë³¸ì¸íì¸ ìë¹ì¤\n"),
      (e +=
        "  ? íì¼ìºì¤í¸ë ìíìì²´ì ì ê·ì²´ê²°, í´ì§ì ë°ë¼ ê·¸ íí©ì ë³ê²½í  ì ìì¼ë©°, ë³ê²½ì ìë¬´ì í´ì¬ íí©ì ê°ì¸ì ë³´ì·¨ê¸ë°©ì¹¨ ë±ì ê³µì§íì¬ ìë´í©ëë¤..\n"),
      (e += "\r\n"),
      (e += "ì. ê°ì¸ì ë³´ê´ë ¨ ìê²¬ ìë ´ ë° ë¶ë§ì²ë¦¬ì ê´í ì¬í­\n"),
      (e +=
        'íì¬ë ê°ì¸ì ë³´ë³´í¸ì ê´ë ¨íì¬ ì´ì©ì ì¬ë¬ë¶ë¤ì ìê²¬ì ìë ´íê³  ìì¼ë©° ë¶ë§ì ì²ë¦¬íê¸° ìíì¬ ëª¨ë  ì ì°¨ì ë°©ë²ì ë§ë ¨íê³  ììµëë¤. ì´ì©ìë¤ì íë¨ì ëªìí "ì°¨. íì¼ìºì¤í¸ ê°ì¸ì ë³´ ê´ë¦¬ì±ìì ë° ë´ë¹ìì ìì-ì±ëª ë° ì°ë½ì²"í­ì ì°¸ê³ íì¬ ì íë ë©ì¼ì íµíì¬ ë¶ë§ì¬í­ì ì ê³ í  ì ìê³ , íì¬ë ì´ì©ìë¤ì ì ê³ ì¬í­ì ëíì¬ ì ìíê³  ì¶©ë¶í ëµë³ì ëë¦¬ëë¡ íê² ìµëë¤. ê¸°í ê°ì¸ì ë³´ì¹¨í´ì ëí ì ê³ ë ìë´ì´ íìíì  ê²½ì°ìë ìë ê¸°ê´ì ë¬¸ìíìê¸° ë°ëëë¤.\n'),
      (e +=
        "ê°ì¸ì ë³´ì¹¨í´ì ê³ ì¼í° ( http://privacy.kisa.or.kr / êµ­ë²ìì´ 118 )\n"),
      (e +=
        "ì ë³´ë³´í¸ë§í¬ì¸ì¦ììí ( http://www.eprivacy.or.kr / 02-580-0533~4 )\n"),
      (e +=
        "ëê²ì°°ì²­ ì¬ì´ë²ë²ì£ìì¬ë¨ ( http://www.spo.go.kr / 02-3480-3571 )\n"),
      (e += "ê²½ì°°ì²­ ì¬ì´ë²ìì êµ­ ( http://www.ctrc.go.kr / 1566-0112 )\n"),
      (e += "\r\n"),
      (e += "ì°¨. íì¼ìºì¤í¸ ê°ì¸ì ë³´ ê´ë¦¬ì±ìì ë° ë´ë¹ìì ìì\n"),
      (e +=
        'íì¼ìºì¤í¸ë ê·íê° ì¢ì ì ë³´ë¥¼ ìì íê² ì´ì©í  ì ìëë¡ ìµì ì ë¤íê³  ììµëë¤. ê°ì¸ì ë³´ë¥¼ ë³´í¸íëë° ìì´ ì´ì©ììê² ê³ ì§í ì¬í­ë¤ì ë°íë ì¬ê³ ê° ë°ìí  ê²½ì° ê°ì¸ì ë³´ê´ë¦¬ì±ììê° ì±ìì ì§ëë¤. ë¨, ì´ì©ì ê°ì¸ì ë³´ì ê´ë ¨í ìì´ë(ID)ì ë¹ë°ë²í¸ì ëí ë³´ìì ì§ì±ìì í´ë¹ ì´ì©ì ë³¸ì¸ìê² ììµëë¤. íì¼ìºì¤í¸ììë ë¹ë°ë²í¸ì ëí´ ì´ë í ë°©ë²ì¼ë¡ë ì´ì©ììê² ì§ì ì ì¼ë¡ ì§ë¬¸íë ê²½ì°ë ìì¼ë¯ë¡ íì¸ìê² ë¹ë°ë²í¸ê° ì ì¶ëì§ ìëë¡ ê°ë³í ì£¼ìíìê¸° ë°ëëë¤. í¹í "ì¬. ê°ì¸ì ë³´ê´ë ¨ ê¸°ì ì -ê´ë¦¬ì  ëì±"í­ìì ëªìí ê²ê³¼ ê°ì´ ê³µê³µì¥ììì ì¨ë¼ì¸ììì ì ìí´ ìì ê²½ì°ìë ëì± ì ìíìì¼ í©ëë¤. íì¼ìºì¤í¸ë ê°ì¸ì ë³´ì ëí ìê²¬ìë ´ ë° ë¶ë§ì²ë¦¬ë¥¼ ë´ë¹íë ê°ì¸ì ë³´ ê´ë¦¬ì±ìì ë° ë´ë¹ìë¥¼ ì§ì íê³  ìê³ , ì°ë½ì²ë ìëì ê°ìµëë¤.\n'),
      (e += "ê°ì¸ì ë³´ê´ë¦¬ë¶ì : ì´ìí ì¡°ë¯¼ì íì¥\n"),
      (e += "ì°ë½ì² : 1600-0335\n"),
      (e += "ì´ë©ì¼ : help.filecast@gmail.com\n"),
      (e += "\r\n"),
      (e += "ì¹´. ê°ì  ì  ê³ ì§ ìë¬´\n"),
      (e +=
        "ë³¸ ê°ì¸ì ë³´ì·¨ê¸ë°©ì¹¨ì ë´ì© ì¶ê°, ì­ì  ë° ìì ì´ ìì ê²½ì° ê°ì  ìµì 7ì¼ ì ì âê³µì§ì¬í­âì íµí´ ì¬ì  ê³µì§ë¥¼ í  ê²ìëë¤.\n"),
      (e +=
        "ë¤ë§, ìì§íë ê°ì¸ì ë³´ì í­ëª©, ì´ì©ëª©ì ì ë³ê²½ ë±ê³¼ ê°ì´ ì´ì©ì ê¶ë¦¬ì ì¤ëí ë³ê²½ì´ ë°ìí  ëìë ìµì 30ì¼ ì ì ê³µì§íë©°, íì ì ì´ì©ì ëìë¥¼ ë¤ì ë°ì ìë ììµëë¤.\n"),
      (e += "ê³µê³ ì¼ì: 2016ë 5ì 4ì¼\n"),
      (e += "ìíì¼ì: 2016ë 5ì 11ì¼\n"),
      (e += "ì´ë©ì¼ : help.filecast@gmail.com\n"),
      (e += "</textarea>"),
      (e += "	<p>"),
      (e +=
        '		<input type="checkbox" class="join-agree-checkbox" name="agreeJoinInfo" id="agreeJoinInfo" tabindex="8"/>'),
      (e +=
        '		<span>ê°ì¸ì ë³´ ìì§ ë° ì´ì©ì <span class="t_blue">ëì</span>í©ëë¤.</span>'),
      (e += "	</p>");
    try {
      return e;
    } finally {
      (e = null), (sellerData = null);
    }
  }),
  (TEMPLATE_MODAL.fcJoinTerms = function () {
    var e = "";
    (e += '	<textarea name="agreeJoinText" id="textarea-join-agree-yakun">'),
      (e += "[íì¼ìºì¤í¸ ì´ì©ì½ê´]\n"),
      (e += "ì 1ì¡° (ëª©ì )\n"),
      (e +=
        'ë³¸ ì½ê´ì (ì£¼)íì´ëì¹(ì´í "íì¬"ë¼ í¨)ìì ì´ìíë íì¼ìºì¤í¸(www.filecast.co.kr)ì ì¸í°ë· ê´ë ¨ ìë¹ì¤ (ì´í "ìë¹ì¤"ë¼ í¨)ë¥¼ ì´ì©í¨ì ìì´ íì¬ì ì´ì©ìì ê¶ë¦¬, ìë¬´ ë° ì±ìì¬í­ì ê·ì í¨ì ëª©ì ì¼ë¡ í©ëë¤.\r\n'),
      (e += "\r\n"),
      (e += "ì 2ì¡° (ì½ê´ì í¨ë ¥ ë° ë³ê²½)\r\n"),
      (e +=
        "1. ë³¸ ì½ê´ì ìë¹ì¤ë¥¼ ì´ì©íê³ ì íë ì´ì©ìì ëí´ ìë¹ì¤ íë©´ì ê²ìë¥¼ íµíì¬ ê³µì§í¨ì¼ë¡ì¨ í¨ë ¥ì´ ë°ìë©ëë¤.\r\n"),
      (e +=
        "2. íì¬ê° íìíë¤ê³  ì¸ì ëë ê²½ì° ë³¸ ì½ê´ë´ì©ì ë³ê²½í  ì ìì¼ë©°, ë³ê²½ë ê²½ì°ìë ê³µì§ì¬í­ì´ë ì 1í­ê³¼ ê°ì ë°©ë²ì íµí´ ê·¸ ë´ì©ì ìë¦½ëë¤.\r\n"),
      (e +=
        "3. íìì ë³ê²½ë ì½ê´ì ëìíì§ ìì ê²½ì° íìíí´ë¥¼ ìì²­í  ì ìì¼ë©° ë³ê²½ë ì½ê´ì í¨ë ¥ ë°ìì¼ 7ì¼ ì´íìë ìë¹ì¤ë¥¼ ì¬ì©í  ê²½ì° ë³ê²½ì¬í­ì ëìíë ê²ì¼ë¡ ê°ì£¼ë©ëë¤.\r\n"),
      (e += "\r\n"),
      (e += "ì 3ì¡° (ì½ê´ ì¸ ì¤ì¹)\r\n"),
      (e +=
        "ë³¸ ì½ê´ì ëªìëì§ ìì ì¬í­ì ëíì¬ë íì¬ì ê³µì§ë ê´ê³ë²ë ¹(ì ê¸°íµì  ê¸°ë³¸ë², ì ê¸°íµì  ì¬ìë², ì ë³´íµì ë§ ì´ì©ì´ì§ ë±ì ê´í ë²ë¥  ë° ê¸°í ê´ë ¨ ë²ê·)ìì ì í ë°ì ë°ë¦ëë¤.\r\n"),
      (e += "\r\n"),
      (e += "ì 4ì¡° (íìê°ì)\r\n"),
      (e +=
        "1. ì´ì©ìë íì¬ì ìë¹ì¤ë¥¼ ì´ì©í¨ì ìì´ ë¨¼ì  íìì¼ë¡ ê°ìíì¬ì¼ í©ëë¤.\r\n"),
      (e +=
        "2. ìë¹ì¤ì íìì¼ë¡ ê°ìíê¸° ìí´ìë [íìê°ì]ë©ë´ë¥¼ íµíì¬ íì¬ìì ìì²­íë ìì ììì ë°ë¼ ê°ì¸ ì¸ì ì¬í­ì ì ê³µíì¬ ì´ì©ì ì²­ì í©ëë¤.\r\n"),
      (e += "3. íì ê°ìì íìí ìì ì ììì ë¤ìê³¼ ê°ìµëë¤.\r\n"),
      (e += "	ã±. ìì´ë \r\n"),
      (e += "	ã´. ë¹ë°ë²í¸ \r\n"),
      (e += "	ã·. ëë¤ì \r\n"),
      (e += "	ã¹. ì´ë©ì¼(ê³µì§ ë° ì´ë²¤í¸ìë¦¼, ë¹ë°ë²í¸ì°¾ê¸°ë±ì íìí¨)\r\n"),
      (e +=
        "4. íì¬ë ìë¹ì¤ë¥¼ ìíì¬ íìí ìµìíì ì ë³´(ìì´ë,ë¹ë°ë²í¸,ëë¤ì,ì´ë©ì¼)ì¸ì ë¶íìí ê°ì¸ì ë³´ë¥¼ ìì²­ íì§ ììµëë¤. ë¨, íìì ë°ë¼ ë§19ì¸ì´ì ì±ì¸ìë¹ì¤ ë° ë³´ë¤ ì§ ëì ìë¹ì¤ ì ê³µ ë±ì ìí´ ì´ë¦, ìëìì¼, ì°ë½ì², ì£¼ìë¥¼ ì¶ê°ë¡ ìì²­í  ì ììµëë¤.\r\n"),
      (e +=
        "5. íì¬ë ë³¸ ìë¹ì¤ì ì´ì©ì ìí íìê°ìì ëíì¬ ê¸°ì , ìë¬´ìíìì ì§ì¥ì´ ìì ê²½ì°ë¥¼ ì ì¸íê³ ë ì§ì²´ìì´ ì´ì©ì ì²­ì ì¹ëí©ëë¤.\r\n"),
      (e += "6. íìê°ìì ë§ 14ì¸ ì´ìë¶í° ë¨ëë¸ì ëêµ¬ë í  ì ììµëë¤.\r\n"),
      (e += "				\r\n"),
      (e += "ì 5ì¡° (íìì ë³´ì ë³´í¸ ë° ì¬ì©)\r\n"),
      (e += "1. íì¬ë íìì ê°ì¸ì ë³´ë¥¼ ë³´í¸íê³  ì¡´ì¤í©ëë¤.\r\n"),
      (e +=
        "2. ì´ì©ì ê°ì¸ì ë³´ì ë³´í¸ ë° ì¬ì©ì ëí´ìë ê°ì¸ì ë³´ì·¨ê¸ë°©ì¹¨ ë° ëª©ì ì¸ì¬ì© ë° ì 3ìì ëí ì ê³µ ë° ê³µì  ê° ì ì©ë©ëë¤.\r\n"),
      (e +=
        "3. íì¬ë ìë¹ì¤ ì ê³µê³¼ ê´ë ¨íì¬ ì·¨ëí íìì ì ìì ë³´ë¥¼ ì¹ëìì´ ëì¤ ëë ë°°í¬ í  ì ììµëë¤.\r\n"),
      (e += "ë¨, ë¤ìì ê° í¸ì í´ë¹íë ê²½ì°ìë ê·¸ë¬íì§ ìëí©ëë¤. \r\n"),
      (e += "ã±. ì ë³´íµì ìë¹ì¤ì ì ê³µì ë°ë¥¸ ìê¸ ì ì°ì ìíì¬ íìí ê²½ì°\r\n"),
      (e +=
        "ã´. íµê³ìì±, íì ì°êµ¬ ëë ìì¥ì¡°ì¬ë¥¼ ìíì¬ íìí ê²½ì°ë¡ì í¹ì  ê°ì¸ì ììë³¼ ì ìë ííë¡ ê°ê³µíì¬ ì ê³µíë ê²½ì°\r\n"),
      (e +=
        "ã·. ê´ê³ ë²ë ¹ì ìíì¬ ìì¬ì ëª©ì ì¼ë¡ ì í´ì§ ì ì°¨ì ë°©ë²ì ë°ë¼ ê´ê³ ê¸°ê´ì ìêµ¬ê° ìë ê²½ì°\r\n"),
      (e += "ã¹. ë¤ë¥¸ ë²ë¥ ì í¹ë³í ê·ì ì´ ìë ê²½ì°\r\n"),
      (e += "ã. ì ë³´íµì ì¤ë¦¬ììíì ìì²­ì´ ìë ê²½ì°\r\n"),
      (e += "				\r\n"),
      (e += "ì 6ì¡° (íìì ë³´ì ê´ë¦¬)\r\n"),
      (e += "1. íììì´ë ë° ë¹ë°ë²í¸ì ëí ê´ë¦¬ì±ìì ì´ì©ììê² ììµëë¤.\r\n"),
      (e +=
        "2. íììì´ëë ë¤ìì ê²½ì°ì ííì¬ ì´ì©ìì ìì²­ ëë íì¬ì íë¨ì ìíì¬ ë³ê²½ ë° íìíí´í  ì ììµëë¤.\r\n"),
      (e +=
        "	ã±. ìì´ëê° íìì ì íë²í¸ë ìëìì¼ë±ì¼ë¡ ëì´ ìì´ì ì¬ìí ë° ì ë³´ì¹¨í´ì ì°ë ¤ê° ìë ê²½ì° \r\n"),
      (e += "	ã´. íì¸ìê² íì¤ê°ì ì£¼ê±°ë ë¯¸íììì ì´ê¸ëë ê²½ì°\r\n"),
      (e += "	ã·. ììì ì´ê³  í©ë¦¬ì ì¸ ì¬ì ê° ìë ê²½ì°\r\n"),
      (e += "	ã¹. ìë¹ì¤ ì´ìì, ì§ì ëë ê´ê³ìë¡ ì¤ì¸í  ì ìë ê²½ì°\r\n"),
      (e += "				\r\n"),
      (e += "ì 7ì¡° (íì¬ì ìë¬´)\r\n"),
      (e +=
        "1. íì¬ë í¹ë³í ì¬ì ì´ ìë í íìì´ ìë¹ì¤ ì´ì©ì ì ì²­í ë ì ìë¹ì¤ë¥¼ ì´ì©í  ììëë¡ í©ëë¤.\r\n"),
      (e +=
        "2. íì¬ë ì´ ì½ê´ìì ì í ë°ì ë°ë¼ ê³ìì ì´ê³  ìì ì ì¸ ìë¹ì¤ë¥¼ ì ê³µì ìíì¬ ì§ìì ì¼ë¡ ë¸ë ¥íë©°, ì¤ë¹ì ì¥ì ê° ìê¸°ê±°ë ë©¸ì¤ ë ëìë ì§ì²´ ìì´ ì´ë¥¼ ìë¦¬ ë³µêµ¬íì¬ì¼ í©ëë¤.\r\n"),
      (e +=
        "3. íì¬ë íìì¼ë¡ë¶í° ìì ì ì ì°¨ì ìí´ ì ê¸°ëë ìê²¬ì´ë ë¶ë§ì´ ì ë¹íë¤ê³  ì¸ì í  ê²½ì°ìë ì ì í ì ì°¨ë¥¼ ê±°ì³ ì²ë¦¬íì¬ì¼ í©ëë¤. \r\n"),
      (e +=
        '4. íì¬ë íìì ê°ì¸ë³´í¸ì ê´ë ¨íì¬ "ì 5ì¡° íìì ë³´ì ë³´í¸"ì ì ìë ë´ì©ì ì§íµëë¤.\r\n'),
      (e +=
        "5. íì¬ë ì´ì©ê³ì½ì ì²´ê²°, ê³ì½ì¬í­ì ë³ê²½ ë° í´ì§ ë± ì´ì©ê³ ê°ê³¼ì ê³ì½ê´ë ¨ ì ì°¨ ë° ë´ì© ë±ì ìì´ ì´ì©ê³ ê°ìê² í¸ìë¥¼ ì ê³µíëë¡ ë¸ë ¥í©ëë¤.\r\n"),
      (e += "				\r\n"),
      (e += "ì 8ì¡° (íìì ìë¬´)\r\n"),
      (e +=
        "1. íìì ì´ ì½ê´ìì ê·ì íë ì¬í­ê³¼ ì´ì©ìë´ ëë ê³µì§ì¬í­ ë±ì íµíì¬ ê³µì§íë ì¬í­ì ì¤ìíì¬ì¼ íë©°, ê¸°í íì¬ì ìë¬´ì ë°©í´ëë íìë¥¼ íì¬ìë ìë©ëë¤.\r\n"),
      (e +=
        "2. íìì ìì´ëì ë¹ë°ë²í¸ë¥¼ ê´ë¦¬í  ìë¬´ë¥¼ ê°ì§ë©° ë¶ì¬ë ìì´ëì ë¹ë°ë²í¸ì ê´ë¦¬ ìí, ë¶ì ì¬ì©ì ìíì¬ ë°ìíë ëª¨ë  ê²°ê³¼ì ëí ì±ìì íììê² ììµëë¤.\r\n"),
      (e +=
        "3. íìì ìì ì ìì´ëë ë¹ë°ë²í¸ê° ë¶ì íê² ì¬ì©ëìë¤ë ì¬ì¤ì ë°ê²½í ê²½ì° ì¦ì íì¬ì ì ê³ íì¬ì¼ íë©°, ì ê³ ë¥¼ íì§ ìì ë°ìíë ëª¨ë  ê²°ê³¼ì ëí ì±ìì íììê² ììµëë¤.\r\n"),
      (e +=
        "4. íìì íì¬ì ì¬ì ì¹ë ìì´ë ìë¹ì¤ë¥¼ ì´ì©íì¬ ììíëì í  ì ìì¼ë©°, ê·¸ ìì íëì ê²°ê³¼ì íìì´ ì½ê´ì ìë°í ììíëì íì¬ ë°ìí ê²°ê³¼ì ëíì¬ íì¬ë ì±ìì ì§ì§ ììµëë¤. íìì ì´ì ê°ì ììíëì¼ë¡ íì¬ê° ìí´ë¥¼ ìì ê²½ì° íìì íì¬ì ëíì¬ ìí´ë°°ììë¬´ë¥¼ ì§ëë¤.\r\n"),
      (e +=
        "5. íìì´ ë³¸ ìë¹ì¤ë¥¼ íµíì¬ ê²ì¬í ê²ìë¬¼ê³¼ ì½íì¸ ì ëª¨ë  ê¶ë¦¬ì ì±ìì íììê² ììµëë¤.\r\n"),
      (e +=
        "6. íì¬ì ì ìê¶, ì 3ìì ì ìê¶ë± ê¸°í ê¶ë¦¬ë¥¼ ì¹¨í´íë íìë íì§ ììì¼ í©ëë¤.\r\n"),
      (e +=
        "7. íìì í¬ì¸í¸ ë° ìºìë¥¼ ë¤ë¥¸ íìê³¼ íê¸ ê±°ëë¥¼ í  ì ìì¼ë©°, ê±°ë ë° ê±°ëìë ììë ë³´ì í í¬ì¸í¸ ë° ìºììì¼ë¶ í¹ì ì ì¡ì íì¬ê° íì ë° ê°ì íí´í  ì ììµëë¤.\r\n"),
      (e +=
        "8. íìì ìë¹ì¤ ì´ì©ê³¼ ê´ë ¨íì¬ ë¤ì ê° í¸ì í´ë¹ëë íìë¥¼ íì¬ìë ìë©ëë¤.\r\n"),
      (e +=
        "	ã±. ë¤ë¥¸ íìì ìì´ëì ë¹ë°ë²í¸, ìëìì¼ ë±ì ê°ì¸ì ë³´ë¥¼ ëì©íë íì\r\n"),
      (e +=
        "	ã´. ë³¸ ìë¹ì¤ë¥¼ íµíì¬ ì»ì ì ë³´ë¥¼ íì¬ì ì¬ì ì¹ë ìì´ íìì ì´ì© ì´ì¸ ëª©ì ì¼ë¡ ë³µì íê±°ë ì´ë¥¼ ì¶í ë° ë°©ì¡ ë±ì ì¬ì©íê±°ë ì  3ììê² ì ê³µíë íì\r\n"),
      (e +=
        "	ã·. íì¸ì í¹í, ìí, ììë¹ë°, ì ìê¶ ê¸°í ì§ì ì¬ì°ê¶ì ì¹¨í´íë ë´ì©ì ê²ì, ì ìë©ì¼ ëë ê¸°íì ë°©ë²ì¼ë¡ íì¸ìê² ì í¬íë íì\r\n"),
      (e +=
        "	ã¹. ê³µê³µì§ì ë° ë¯¸íììì ìë°ëë ì ì, ìëí ë´ì©ì ì ë³´ ë¬¸ì¥, ëí ë±ì ì ì¡, ê²ì, ì ìë©ì¼ ëë ê¸°íì ë°©ë²ì¼ë¡ íì¸ìê² ì í¬íë íì\r\n"),
      (e +=
        "	ã. ëª¨ìì ì´ê±°ë ìíì ì´ì´ì íì¸ì íë¼ì´ë²ìë¥¼ ì¹¨í´í  ì ìë ë´ì©ì ì ì¡, ê²ì,ì ìë©ì¼ ëë ê¸°íì ë°©ë²ì¼ë¡ íì¸ìê² ì í¬íë íì\r\n"),
      (e +=
        "	ã. íì¬ì ì¹ì¸ì ë°ì§ ìê³  ë¤ë¥¸ ì¬ì©ìì ê°ì¸ì ë³´ë¥¼ ìì§ ëë ì ì¥íë íì\r\n"),
      (e += "				\r\n"),
      (e += "ì 9ì¡° (ê²ìë¬¼ì ê´ë¦¬)\r\n"),
      (e +=
        "1. íì¬ë ë¤ì ê° í­ì í´ë¹íë ê²ìë¬¼ì´ë ìë£ë ì¬ì íµì§ ìì´ ì­ì í  ì ììµëë¤.\r\n"),
      (e += "	ã±. ë¤ë¥¸ íì ëë ì 3ìë¥¼ ë¹ë°©íê±°ë ëªìë¥¼ í¼ìíë ë´ì©ì¸ ê²½ì°\r\n"),
      (e += "	ã´. ê³µê³µì§ì ë° ë¯¸íììì ìë°ëë ë´ì©ì¸ ê²½ì° \r\n"),
      (e += "	ã·. ë²ì£ì  íìì ê²°ë¶ëë¤ê³  ì¸ì ëë ë´ì©ì¸ ê²½ì°\r\n"),
      (e +=
        "	ã¹. íì¬ì ì ìê¶ í¹ì ì 3ìì ì ìê¶ ë± ê¸°í ì§ì ì¬ì°ê¶ì ì¹¨í´íë ê²½ì°\r\n"),
      (e += "	ã. íìì´ ìëë¬¼ì ê²ì¬íê±°ë ìëì¬ì´í¸ë¥¼ ë§í¬íë ê²½ì°\r\n"),
      (e += "	ã. ì´ì©ì ID ëë ê²ìì ì¬ì´ë² ìì°ì ë§¤ë§¤ì ê´ë ¨ë ë´ì©ì¸ ê²½ì°\r\n"),
      (e += "	ã. ê²ìíì ì±ê²©ì ë¶í©íì§ ìë ê²ìë¬¼ì ê²½ì°\r\n"),
      (e += "	ã. ê¸°í ê´ë ¨ë²ë ¹ì ìë°ëë¤ê³  íë¨ëë ê²½ì°\r\n"),
      (e +=
        "2. íìì´ ìë¹ì¤ ë´ì ê²ìí ê²ìë¬¼ì ì ìê¶ì í´ë¹ ê²ìë¬¼ì ì ìììê² ê·ìë©ëë¤.\r\n"),
      (e +=
        "3. íìì´ ìë¹ì¤ ë´ì ê²ìíë ê²ìë¬¼ì ìë¹ì¤ ë° ê´ë ¨ íë¡ëª¨ì ë±ì ë¸ì¶ë  ì ìì¼ë©°, í´ë¹ ë¸ì¶ì ìí´ íìí ë²ì ë´ììë ì¼ë¶ ìì , ë³µì , í¸ì§ëì´ ê²ìë  ì ììµëë¤.\r\n"),
      (e +=
        "ì´ ê²½ì°, íì¬ë ì ìê¶ë² ê·ì ì ì¤ìíë©°, íìì ì¸ì ë ì§ ê³ ê°ì¼í° ëë ìë¹ì¤ ë´ ê´ë¦¬ê¸°ë¥ì íµí´ í´ë¹ ê²ìë¬¼ì ëí´ ì­ì , ê²ìê²°ê³¼ ì ì¸, ë¹ê³µê° ë±ì ì¡°ì¹ë¥¼ ì·¨í  ì ììµëë¤.\r\n"),
      (e +=
        "4. íìì ìë¹ì¤ë¥¼ ì´ì©íì¬ ì·¨ëí ì ë³´ë¥¼ ììê°ê³µ, íë§¤íë íì ë± ìë¹ì¤ì ê²ì¬ë ìë£ë¥¼ ììì ì¸ ëª©ì ì¼ë¡ ì¬ì©í  ì ììµëë¤.\r\n"),
      (e +=
        "5. íìì íì¸ì ì ìê¶ ë± ì§ì ì¬ì°ê¶ì ì¹¨í´íì§ ìì ìë¬´ë¥¼ ë¶ë´íë©°, ì´ë¥¼ ìë°íì¬ ë°ìíë ë¯¼, íì¬ìì ì±ìì ì ì ì¼ë¡ íì ë³¸ì¸ì´ ë¶ë´íì¬ì¼ í©ëë¤.\r\n"),
      (e +=
        "6. íì¬ë ìëì ê°ì´ ë¶ë²ë³µì ë¬¼ ë³µì /ì ì¡ìì ëí ì ì¬ë¥¼ í  ì ììµëë¤.\r\n"),
      (e +=
        "	ã±. ê²½ê³  : ìë¹ì¤ ë¶ì í© ì½íì¸ ë¥¼ ìë¡ë í ì ì¡ì(ìë¡ë)ìê² ìª½ì§ ë° ì´ë©ì¼ ê²½ê³ ë¬¸ ë°ì¡\r\n"),
      (e +=
        "	ã´. ê°ì íí´ : ëì ê²½ê³  3í ì ì ì¡ì(ìë¡ë)ë ì¬ì ê³ ì§ ìì´ ê°ì íí´ ì²ë¦¬\r\n"),
      (e +=
        "	ã·. íì¬ë ë¶ë² ë³µì ë¬¼ì ê²½ì°ì ë°ë¼ ì ì¡ì(ìë¡ë)ë¥¼ ëì ê²½ê³ ì ìê´ìì´ ê°ì íí´ê° ê°ë¥í©ëë¤.\r\n"),
      (e +=
        "	ã¹. íì¬ë ììµì ì¸ ì¹¨í´ìë¥¼ ì ì¬ëììë¡ ê°ì£¼íì¬ ì´ì ë°ë¼ ê°ì  íí´, í¬ì¸í¸ëª°ì, ê±°ëììµ ì¶ê¸ì ì§ ë±ì ì ì¬ë¥¼ í  ì ììµëë¤.\r\n"),
      (e += "	ã. ì ì¬ëììì ìë£ë 2ë ëì ë³´ê´í©ëë¤.\r\n"),
      (e += "				\r\n"),
      (e += "ì 10ì¡° (ìë¹ì¤ì ì´ì©ìê°)\r\n"),
      (e +=
        "1. ìë¹ì¤ë íì¬ì ìë¬´ì ëë ê¸°ì ìì ì¥ì  ë± ê¸°í í¹ë³í ì¬ì ê° ìë í ì°ì¤ë¬´í´ 1ì¼ 24ìê° ì ê³µì ìì¹ì¼ë¡ í©ëë¤.\r\n"),
      (e +=
        "2. íì¬ë ìë¹ì¤ì ì¼ë¶ ëë ì ë¶ì ëí ì´ì©ì ì íí  ì ìì¼ë©°, ì´ ê²½ì° ì¬ì  ê³µì§íë ë¶ê°í­ë ¥ì ì¸ ê²½ì°ìë ì¬íì ê³µì§í©ëë¤.\r\n"),
      (e += "				\r\n"),
      (e += "ì 11ì¡° (ìë¹ì¤ì ì í)\r\n"),
      (e += "1. íì¬ë ë¤ìì ê²½ì°ì ííì¬ ìë¹ì¤ì ì´ì©ì ì íí  ì ììµëë¤.\r\n"),
      (e +=
        "	ã±. ì ê¸°íµì  ì¬ìë²ì ê·ì ë ê¸°ê°íµì  ì¬ììê° ì ê¸°íµì ìë¹ì¤ë¥¼ ì¤ì§íì ê²½ì°\r\n"),
      (e += "	ã´. ê¸°í ë¶ê°í­ë ¥ì  ì¬ì ê° ìë ê²½ì°\r\n"),
      (e += "2. íì¬ë ë¤ìì ê²½ì°ì ííì¬ í¹ì  íìì ìë¹ì¤ì´ì©ì ì íí  ì ììµëë¤.\r\n"),
      (e += "	ã±. ë³¸ì¸ì ì¤ëªì ì¬ì©íì§ ìê³  íì¸ì ëªìë¥¼ ëì©íì¬ ì¬ì©í ê²½ì°\r\n"),
      (e += "	ã´. ìëë¬¼, ì´ì ë¬¼, ë¶ë²ì ìë¬¼ ë±ì ë°°í¬ ë° ì ì\r\n"),
      (e += '	ã·. "ì 8ì¡° íìì ìë¬´"ìì ê·ì í ì¬í­ì ìë°°ëë íìë¥¼ í ê²½ì°\r\n'),
      (e += "				\r\n"),
      (e += "ì 12ì¡° (ìë¹ì¤ì ê³µì´ ë¶ê°ë¥í ê²½ì°ì ì²ë¦¬ë°©ì ì ì)\r\n"),
      (e +=
        "1. ìë¹ì¤ì ê³µ ë¶ê°ë¥ ê²½ì° : ì²ì¬ì§ë³, ì¤ë¥(ì¥ì ), ì ê², ìë¹ì¤ìë, ìë¹ì¤ì¢ë£(íì), ë±\r\n"),
      (e +=
        "2. íì¬ë ì 10ì¡°ì ìë ìë¹ì¤ì ì íì¬í­ì ì ì¸ íê³  ì´ì©ììê² ê³µì§ ìì´ ìë¹ì¤ë¥¼ ì¤ë¨ íì§ ììµëë¤.\r\n"),
      (e +=
        "3. íì¬ê° ì 10ì¡°ì ìë ìë¹ì¤ì ì íì¬í­ì ì ì¸ íê³  ì´ì©ììê² ê³µì§ ìì´ ìë¹ì¤ë¥¼ ì¤ë¨ íìì ì,\r\n"),
      (e +=
        "ìë¹ì¤ ì¤ë¨ì ëí ì´ì©ììê² ë°ë¥¸ ìí´ë¥¼ ìê°ì¼ë¡ êµ¬ë¶íì¬ ìë¹ì¤ ì¤ë¨ ìê° ë§í¼ ê·¸ì ììíë ëì²´ ìë¹ì¤ ëë í¬ì¸í¸, ì ì¡ì ë¥¼ ë³´ìì§ê¸ í©ëë¤.\r\n"),
      (e += "				\r\n"),
      (e += "ì 13ì¡° (í¬ì¸í¸ì êµ¬ì)\r\n"),
      (e += "ë³¸ ìë¹ì¤ìì í¬ì¸í¸ì êµ¬ìì ë¤ìì íµíì¬ í  ì ììµëë¤.\r\n"),
      (e += "	ã±. ì ì©ì¹´ëê²°ì (êµ­ë´, í´ì¸)\r\n"),
      (e += "	ã´. í¸ëí°ê²°ì  \r\n"),
      (e += "	ã·. ê³ì¢ì´ì²´\r\n"),
      (e += "	ã¹. ARSê²°ì  \r\n"),
      (e += "	ã. í°ë¹ê²°ì  \r\n"),
      (e += "	ã. ëììíê¶(ë¶ìºì)\r\n"),
      (e += "	ã. ë¬¸íìíê¶(í´í¼ë¨¸ë, ì»¬ì³ëë)\r\n"),
      (e += "	ã. ë§ì¼ë¦¬ì§(í¬ì¸í¸íí¬)\r\n"),
      (e += "	ã. ê²ììíê¶ \r\n"),
      (e += "				\r\n"),
      (e += "ì 14ì¡° (ìë¹ì¤ì ì´ì©ìê¸)\r\n"),
      (e += "ë³¸ ìë¹ì¤ì ì ì¸ê³µê³¼ê¸ì í¬í¨í ì´ì©ìê¸ì ë¤ìê³¼ ê°ìµëë¤.\r\n"),
      (e += "ã±. íë§¤ììë£ : íë§¤ë±ë¡ìê²©ì íë§¤ì¡ì 25%\r\n"),
      (e += "ã´. ì¶©ì ìºì íë¶ììë£ : ê²°ì ììë£ ë° ë¶ê°ì¸ë±ë¥¼ ì ì¸í ê¸ì¡\r\n"),
      (e +=
        "ã·. ê±°ëììµ ì¶ê¸ ììë£ : ì¶ê¸ì¡ì 50% ììë£ ë° ì´ì©ìê¸ì íì¬ë°©ì¹¨ì ë°ë¼ ë³ê²½ë  ì ììµëë¤.\r\n"),
      (e += "\r\n"),
      (e += "ì 15ì¡° (ì´ì©ì ë¶ë§ííë³ ì²ë¦¬ì ì°¨ ë° ì²ë¦¬ê¸°ê°)\r\n"),
      (e += "ì´ì©ì ë¶ë§ííì ì²ë¦¬ì ì°¨ ë° ì²ë¦¬ê¸°ê°ì ìëì ê°ìµëë¤.\r\n"),
      (e += "1. ë¶ë§íí : ê²°ì , ì¤ë¥(ì¥ì ), ì´ì©/ì°ë ¹ ì í ë±\r\n"),
      (e +=
        "2. ì´ì©ìë ìë¹ì¤ì ë¶ë§ì´ ìì ì, íì¬ì ê³ ê°ì¼í°, ê²ìí, ë±ì ì´ì©íì¬ 24ìê° ê±´ì í  ì ììµëë¤.\r\n"),
      (e +=
        "3. íì¬ë ê³ ê°ì¼í°, ê²ìí ë±ì ì´ì©ì ë¶ë§ì¬í­ì ëíì¬ ììì¼ ê¸°ì¤ ìµì¥ 12ìê° ì´ë´ ëµë³ ë° ì¡°ì¹ì¬í­ì íì  í©ëë¤.\r\n"),
      (e += "\r\n"),
      (e += "ì 16ì¡° (ê±°ëììµì¶ê¸ì ì±)\r\n"),
      (e +=
        "íì¬ë íìì´ ë³´ì íê³  ìë ìºìì ëíì¬ ì¶ê¸ìì²­ì´ ìì ê²½ì° ë¤ìê³¼ ê°ì ì ì°¨ì ìíì¬ ì¶ê¸í´ ëë¦½ëë¤.\r\n"),
      (e +=
        "ã±. íìì ìë¹ì¤ ë©ë´ì¤ ë§ì´íì´ì§ > íë§¤ê´ë¦¬ > ìºì ì¶ê¸ì ì²­ ë©ë´ë¥¼ íµíì¬ ì¶ê¸ í¬ë§ì¡ê³¼ ì¶ê¸ì íìí ê³ì¢ì ë³´ë¥¼ ìë ¥í©ëë¤.\r\n"),
      (e +=
        "ã´. ì¶ê¸ì ì²­ì ë§¤ì£¼ ëª©ìì¼ ê·¼ë¬´ìê° ì¤ì ì¼ê´ ì²ë¦¬ ë©ëë¤.(ì ì£¼ ëª©ìì¼ë¶í° ~ ê¸ì£¼ ììì¼ ì ì²­ ê±´ê¹ì§ ì¼ê´ì²ë¦¬)\r\n"),
      (e += "ã·. íìì ì¶ê¸ ì ì²­ì ì¶ê¸ ë ì§ì ìíì ììë¡ ì§ì í  ì ììµëë¤.\r\n"),
      (e +=
        "ã¹. ì¶ê¸ìì²­ì¡ì 50%ë ì ì¸ê³µê³¼ê¸ì í¬í¨í ììë£ì´ë¯ë¡ í¬ë§ ì¶ê¸ìì²­ì¡ì 50%ë¥¼ íê¸ì¼ë¡ ìê¸ë°ìµëë¤.\r\n"),
      (e += "ã. ìíì¡ê¸ ììë£ë íì¬ ë¶ë´ìëë¤.\r\n"),
      (e += "ã. ì¶ê¸ê¸ì¡ì 40,000 ìºìì´ìì¼ ê²½ì°ìë§ ê°ë¥í©ëë¤.\r\n"),
      (e += "\r\n"),
      (e += "ì 17ì¡° (íìíí´)\r\n"),
      (e +=
        "1. íìíí´ë¥¼ í¬ë§í  ê²½ì° íìë³¸ì¸ì´ ì§ì  ìë¹ì¤ ë©ë´ì¤ ë§ì´íì´ì§ > íìì ë³´ìì ì íµíì¬ í  ì ììµëë¤.\r\n"),
      (e += "2. íìíí´ì ê²½ì° ê°ìì¼ë¡ë¶í° 7ì¼ì´ë´ìë ì ì²­í  ì ììµëë¤.\r\n"),
      (e +=
        "3. íì¬ë íìíí´ ì ì²­ì´ ì ìëë©´ ì§ì²´ìì´ ì´ì ìíì¬ ìë¹ì¤ì ì´ì©ì ì íí©ëë¤.\r\n"),
      (e +=
        "4. íìíí´ì í´ë¹ íìì ì ë³´ë ì­ì ë©ëë¤. ë¨, ë¤ì ê° í¸ì ê²½ì°ìì ìì¸ë¡ í©ëë¤.\r\n"),
      (e +=
        "4-1. ë³¸ ì½ê´ì ì ê·ì  ìë°ì ì´ì ë¡ íì¬ë¡ë¶í° ì´ì©ê³ì½ì´ í´ì§ë íìì ê°ì¸ì ë³´ì ê²½ì°, ì¬ê°ì ë°©ì§ë¥¼ ìí´ ê¸°ë³¸ì ì¸ ê°ì¸ì ë³´ë¥¼ ë³´ê´í  ì ììµëë¤.\r\n"),
      (e +=
        "4-2. íë¶, ì ì° ë± íì¬ê° íìë¡ íë ê²½ì°ì ëí´ìë ì¼ì  ê¸°ê° ëì ì¼ë¶ ìë£ë¥¼ ë³´ê´í  ì ìì¼ë©°, ë³´ê´ì¤ì¸ ìë£ë íì¬ê° ììë¡ íê¸°í  ì ììµëë¤.\r\n"),
      (e += "\r\n"),
      (e += "ì 18ì¡° (ìí´ë°°ì)\r\n"),
      (e +=
        "1. íì¬ë ë¬´ë£ìë¹ì¤ì ì¥ì , ì ê³µ ì¤ë¨, ë³´ê´ë ìë£ ë©¸ì¤ ëë ì­ì , ë³ì¡° ë±ì¼ë¡ ì¸í ìí´ì ëíì¬ë ë°°ìíì§ ììµëë¤.\r\n"),
      (e +=
        "2. íì¬ë íì¬ì ê·ì±ì¬ì ë¡ ì¸íì¬ íììê² ì§ìì ì¼ë¡ ìë¹ì¤ë¥¼ ì ê³µíì§ ëª»íë ê²½ì° ì ë£ìë¹ì¤ ì´ì©ììê² ì´ì©ê¸ì¡ì 100%ë¥¼ ë°°ìí©ëë¤.\r\n"),
      (e += "3. ê¸°í ìí´ë°°ìì ë°©ë²ê³¼ ì ì°¨ ë±ì ê´ê³ë²ë ¹ì ë°ë¦ëë¤.\r\n"),
      (e += "\r\n"),
      (e += "ì 19ì¡° (ë©´ì±)\r\n"),
      (e +=
        "1. íì¬ë íìì´ ìë¹ì¤ì ê²ì¬í ì ë³´, ìë£, ì¬ì¤ì ì íì±, ì ë¢°ì±ë± ë´ì©ì ê´íì¬ë ì´ë í ì±ìë ë¶ë´íì§ ìëíê³  ìë¹ì¤ ìë£ì ëí ì´ì©ì¼ë¡ ë°ìíë ìí´ë±ì ëí´ìë ì±ìì´ ë©´ì ë©ëë¤.\r\n"),
      (e +=
        "2. íì¬ë íìì´ ìë¹ì¤ë¥¼ ì´ì©íì¬ ê¸°ëíë ììµì´ë ìë¹ì¤ë¥¼ íµíì¬ ì»ì ìë£ë¡ ì¸í ìí´ì ê´íì¬ ì±ìì´ ë©´ì ë©ëë¤.\r\n"),
      (e +=
        "3. íì¬ë íì ìí¸ê° ëë íìê³¼ ì 3ì ìí¸ê°ì ìë¹ì¤ë¥¼ ë§¤ê°ë¡ ë°ìí ë¶ìì ëí´ìë ê°ìí  ìë¬´ê° ìì¼ë©° ì´ë¡ ì¸í ìí´ë¥¼ ë°°ìí  ì±ìì´ ììµëë¤.\r\n"),
      (e +=
        "4. íì¬ë íìì ê·ì±ì¬ì ë¡ ì¸íì¬ ìë¹ì¤ ì´ì©ì ì¥ì ê° ë°ìí ê²½ì°ìë ì±ìì´ ë©´ì ë©ëë¤.\r\n"),
      (e +=
        "5. ë³¸ ì½ê´ì ê·ì ì ìë°í¨ì¼ë¡ ì¸íì¬ íì¬ì ìí´ê° ë°ìíê² ëë ê²½ì°, ì´ ì½ê´ì ìë°í íìì íì¬ì ë°ìíë ëª¨ë  ìí´ë¥¼ ë°°ìíì¬ì¼ íë©°, ìí´ë¡ë¶í° íì¬ë¥¼ ë©´ì±ìì¼ì¼ í©ëë¤.\r\n"),
      (e += "6. íì¬ë ì 3ìì ìí ë¶ì ì¬ì© ë±ì ëíì¬ ì±ìì ì§ì§ ììµëë¤.\r\n"),
      (e +=
        "7. ì ê¸°íµì ìë¹ì¤ í¹ì±ì ë¶ê°í¼í ì¬ì ë¡ ìë¹ì¤ ì ê³µì´ ë¶ê°ë¥í ê²½ì° ì±ìì´ ììµëë¤.\r\n"),
      (e += "8. ì¸ë¶ ì¹¨ìì ìí ë°ì´í°ì ì ì¶ê³¼ í¼ìì ëí´ íì¬ë ì±ìì´ ììµëë¤.\r\n"),
      (e += "\r\n"),
      (e += "ì 20ì¡° (ìíí¸ì¨ì´ ì¤ì¹ ë° ìë£ì ì¡ê¸°ì  ì¬ì©ëì)\r\n"),
      (e +=
        "1. ì´ì©ìë ì½íì¸ ë¥¼ êµ¬ë§¤ì PCì ì ì¥íê¸° ìí íì¼ìºì¤í¸ ë¤ì´ë¡ë íë¡ê·¸ë¨ê³¼ íë§¤ì ìë²ì ì ì¥íê¸° ìí íì¼ìºì¤í¸ ìë¡ë íë¡ê·¸ë¨ì ì¤ì¹ì ëìí©ëë¤.\r\n"),
      (e +=
        "2. ì´ì©ìë ë°ííë©´, ë¹ ë¥¸ì¤í, ì¦ê²¨ì°¾ê¸°, ììë©ë´ì íì¼ìºì¤í¸ ííì´ì§ ë°ë¡ê°ê¸° ë±ë¡í¨ì ëìí©ëë¤.\r\n"),
      (e +=
        "3. íì¬ë ìë£ì ì ì¡ì ìíì¬ ì´ì©ì ê°ì ë°ì´í°ë¥¼ ì¤ê³ ì ì¡íë ê¸°ì ì ì¬ì©í  ì ììµëë¤.\r\n"),
      (e +=
        "4. ì´ì©ìë ì´ ì½ê´ì íµí´, PC ë± ìì ì ì´ì©ì¥ì¹ë¥¼ íµíì¬ ë¤ë¥¸ ì¬ëì´ ì¤ê³ ì ì¡ ë°ë ê²ì íì©íëë° ëìí©ëë¤.\r\n"),
      (e +=
        "5. ì ì¡ê¸°ì ì ëí ì¶ê°ì ì¸ ë´ì©ì ëí ì¸ë¶ ëìë ë³ëì ìíí¸ì¨ì´ ìµì¢ ì¬ì©ì ì¬ì©ê¶ ê³ì½ìì ëí ëìë¥¼ íµíì¬ í©ëë¤.\r\n"),
      (e += "\r\n"),
      (e += "ì 21ì¡° (ê´í ë²ì)\r\n"),
      (e +=
        "ìë¹ì¤ ì´ì©ì¼ë¡ ë°ìí ë¶ìì ëí´ ìì¡ì´ ì ê¸°ë  ê²½ì° íì¬ì ë³¸ì¬ ìì¬ì§ë¥¼ ê´í íë ë²ìì ìë¥¼ ì ê¸°í  ì ììµëë¤.\r\n"),
      (e += "\r\n"),
      (e += "ì 22ì¡° (ê¸°íì¬í­)\r\n"),
      (e +=
        "ì´ ì½ê´ì ëªìëì§ ìëí ì¬í­ì ê´íì¬ë ì ê¸°íµì ê¸°ë³¸ë², ì ê¸°íµì ì¬ìë²ë± ê¸°í ê´ê³ë²ë ¹ì ê·ì ì ìí©ëë¤. \r\n"),
      (e += "\r\n"),
      (e += "</textarea>"),
      (e += "	<p>"),
      (e +=
        '		<input class="join-agree-checkbox" type="checkbox" name="agreeJoinYak" id="agreeJoinYak" tabindex="8"/>'),
      (e +=
        '		<span>íì¼ìºì¤í¸ ì´ì©ì½ê´ì <span class="t_blue">ëì</span>í©ëë¤.</span>'),
      (e += "	</p>");
    try {
      return e;
    } finally {
      (e = null), (sellerData = null);
    }
  }),
  (TEMPLATE_MODAL.fcLoginModal = function (e) {
    var t = "";
    (t +=
      '<div class="modal fc-web-login-form-modal" id="fcLoginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (t += '  <div class="modal-dialog center_style type2" role="document">'),
      (t += '        <div class="layer_layout">'),
      (t += '			<div class="login_wrap">'),
      (t += '				<h1 class="layer_tit"><span></span></h1>'),
      (t +=
        "				/* ê¸°ë³¸ ë¡ê·¸ì¸ ë ì´ì´ì  .layer_txtê° ë³´ì´ê³  ë¡ê·¸ì¸ì´ íìí ë ì´ì´ì .layer_txt_loginê° ë³´ì*/"),
      (t += '				<p class="layer_txt" style="display:none">íì¼ìºì¤í¸ ë¡ê·¸ì¸</p>'),
      (t += '				<p class="layer_txt_login">ë¡ê·¸ì¸ì´ íìí ìë¹ì¤ìëë¤.</p>'),
      (t +=
        '				<form method="post" id="form_login" name="form_login" data-email="" data-e_check="0">'),
      (t += "					<fieldset>"),
      (t += '						<legend class="blind">íì¼ìºì¤í¸ ë¡ê·¸ì¸í¼</legend>'),
      (t +=
        '						<input type="text" name="user_email" id="user_id" placeholder="ì´ë©ì¼ì ìë ¥íì¸ì" class="input_id" />'),
      (t += "						/* input textìë ¥ì í´ëì¤ action  */"),
      (t += '						<label for="user_id" class="blind">ì´ë©ì¼ìë ¥</label>'),
      (t +=
        '						<p class="login_txt">â» <span class="">ì´ë©ì¼ ID (abc@filecast.co.kr)</span></p>'),
      (t += "						/* ì¤ë¥ì span í´ëì¤ error  */"),
      (t +=
        '						<input type="password" name="user_pass" id="user_pw" placeholder="ë¹ë°ë²í¸ë¥¼ ìë ¥íì¸ì" class="input_pw"/>'),
      (t += "						/* input textìë ¥ì í´ëì¤ action  */"),
      (t += '						<label for="user_pw" class="blind">ë¹ë°ë²í¸ìë ¥</label>'),
      (t += '						<div class="find_wrap">'),
      (t += "							<p>"),
      (t +=
        '								<input type="checkbox" name="checkKeepLogin" id="checkKeepLogin" checked="checked"/>'),
      (t += '								<label for="check">ë¡ê·¸ì¸ ìí ì ì§</label>'),
      (t += "							</p>"),
      (t +=
        '							<a class="hand right"><span onclick="WEB_MEMBER.findId();">ìì´ë</span> / <span onclick="WEB_MEMBER.findPwd();">ë¹ë°ë²í¸ ì°¾ê¸°</span></a>'),
      (t += "						</div>"),
      (t +=
        '						/* <a class="hand btn_log" type="submit">íì¼ ìºì¤í¸ ë¡ê·¸ì¸</a> */'),
      (t +=
        '						<button type="submit" class="hand btn_log">íì¼ìºì¤í¸ ë¡ê·¸ì¸</button>'),
      (t += "					</fieldset>"),
      (t += "				</form>"),
      (t += '				<div class="join_q">'),
      (t += "					<p>ê³ì ì´ ìì¼ì¸ì?</p>"),
      (t +=
        "					<a class=\"hand\" onclick=\"GO_MENU('join', 'modal');\"><b>íì¼ìºì¤í¸ ë¬´ë£ íì ê°ìíê¸°</b> &gt;</a>"),
      (t += "				</div>"),
      (t += '				<a class="btn_close type1 hand" data-dismiss="modal"></a>'),
      (t += "			</div> "),
      (t += "		</div>"),
      (t += "  </div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcLoginModalSns = function (e) {
    var t = "";
    (t +=
      '<div class="modal fc-web-login-form-modal" id="fcLoginModalSns" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (t +=
        '  <div class="modal-dialog center_style type2 style1" role="document">'),
      (t += '	<div class="layer_layout" id="fc-web-new-login-form-container">'),
      (t += '		<div class="login_wrap">'),
      (t += '			<h1 class="layer_tit"><a class="hand"><span></span></a></h1>'),
      (t += '			<p class="layer_txt" style="display:none">íì¼ìºì¤í¸ ë¡ê·¸ì¸</p>'),
      (t += '			<p class="layer_txt_login">ë¡ê·¸ì¸ì´ íìí ìë¹ì¤ìëë¤.</p>'),
      (t +=
        '			<form method="post" id="form_login" name="form_login" data-email="" data-e_check="0">'),
      (t += "				<fieldset>"),
      (t += '					<legend class="blind">íì¼ìºì¤í¸ ë¡ê·¸ì¸í¼</legend>'),
      (t +=
        '					<input type="email" name="user_email" id="web_user_email" placeholder="ì´ë©ì¼ì ìë ¥íì¸ì" class="input_id"/>'),
      (t +=
        '					<label id="user_id-error" class="form-error" for="user_id" style="display:none;">ì¬ë°ë¥¸ ì´ë©ì¼ì£¼ìë¥¼ ìë ¥íìì¤.</label>'),
      (t += "					/* input textìë ¥ì í´ëì¤ action  */"),
      (t += '					<label for="user_id" class="blind">ì´ë©ì¼ìë ¥</label>'),
      (t +=
        '					<p class="login_txt">â» <span class="">ì´ë©ì¼ ID (abc@filecast.co.kr)</span></p>'),
      (t += "					/* ì¤ë¥ì span í´ëì¤ error  */"),
      (t +=
        '					<input type="password" name="user_pass" id="web_user_pw" placeholder="ë¹ë°ë²í¸ë¥¼ ìë ¥íì¸ì" class="input_pw"/>'),
      (t +=
        '					<label id="user_pw-error" class="form-error" for="user_pw" style="display:none;">ë¹ë° ë²í¸ë¥¼ ìë ¥í´ì£¼ì¸ì.</label>'),
      (t += "					/* input textìë ¥ì í´ëì¤ action  */"),
      (t += '					<label for="user_pw" class="blind">ë¹ë°ë²í¸ìë ¥</label>'),
      (t += '					<div class="find_wrap">'),
      (t += "						<p>"),
      (t +=
        '							<input type="checkbox" name="checkKeepLogin" id="checkKeepLogin" checked="checked"/>'),
      (t += '							<label for="check">ë¡ê·¸ì¸ ìí ì ì§</label>'),
      (t += "						</p>"),
      (t +=
        '						<a><span class="hand" onclick="WEB_MEMBER.findId();">ìì´ë</span> / <span class="hand" onclick="WEB_MEMBER.findPwd();">ë¹ë°ë²í¸ ì°¾ê¸°</span></a>'),
      (t += "					</div>"),
      (t +=
        '					<button type="submit" class="hand btn_log">íì¼ ìºì¤í¸ ë¡ê·¸ì¸</button>'),
      (t += "				</fieldset>"),
      (t += "			</form>"),
      (t += '			<div class="sns_login">'),
      (t +=
        '				<p class="txt">íì´ì¤ë¶, ì¹´ì¹´ì¤í¡, ë¤ì´ë² ê³ì ì¼ë¡ë ìë¹ì¤ ì´ì©ì´ ê°ë¥í©ëë¤.</p>'),
      (t += '				<div class="sns_login_btn">'),
      (t += "					<ul>"),
      (t +=
        '						<li class="facebook" data-type="facebook" onclick="WEB_MEMBER.onclickSnsJoin(this);"><span>íì´ì¤ë¶</span></li>'),
      (t +=
        '						<li class="kakao" data-type="kakao" onclick="WEB_MEMBER.onclickSnsJoin(this);"><span>ì¹´ì¹´ì¤í¡</span></li>'),
      (t +=
        '						<li class="naver" data-type="naver" onclick="WEB_MEMBER.onclickSnsJoin(this);"><span>ë¤ì´ë²</span></li>'),
      (t += "					</ul>"),
      (t += "				</div>"),
      (t += "			</div>"),
      (t += '			<div class="join_q">'),
      (t += "				<p>ê³ì ì´ ìì¼ì¸ì?</p>"),
      (t +=
        '				<a class="hand" data-type="filecast" onclick="WEB_MEMBER.onclickSnsJoin(this);"><b>íì¼ìºì¤í¸ ë¬´ë£ íì ê°ìíê¸°</b> &gt;</a>'),
      (t += "			</div>"),
      (t += '			<a class="btn_close type1 hand"  data-dismiss="modal"></a>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "  </div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcJoinModal = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcJoinModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (t += '  <div class="modal-dialog center_style type3" role="document">'),
      (t += '	<div class="layer_layout">'),
      (t += '	   <div class="join_wrap">'),
      (t += '		<h1 class="layer_tit style1"><span></span></h1>'),
      (t += '		<p class="layer_txt">íì¼ìºì¤í¸ íì ê°ì</p>'),
      (t +=
        '		<p>" íì¼ìºì¤í¸ íì ê°ìì 10ì´ë©´ ì¶©ë¶í©ëë¤. ê·¸ë¦¬ê³  ê·¸ë§í ê°ì¹ê° ììµëë¤. "</p>'),
      (t +=
        '		<form method="post" id="form_signup" name="form_signup" data-email="" data-e_check="0">'),
      (t += '			<fieldset id="focusguard-2">'),
      (t += '				<legend class="blind">íì¼ìºì¤í¸ íìê°ìí¼</legend>'),
      (t += '				<div class="form_top">'),
      (t +=
        '					<input type="text" name="join_user_id" id="join_user_id" placeholder="ì´ë©ì¼ (3ì ì´ì)" class="input_id type1 style1" tabindex="2" maxlength="20"/>'),
      (t += '					<label for="user_id" class="blind">ì´ë©ì¼ìë ¥</label> '),
      (t += '					<span class="f_left">@</span>'),
      (t +=
        '					<input type="text" name="email_host" id="join_email_host"  class="input_id type1 style2" tabindex="3" maxlength="25"/>'),
      (t += '					<div class="select_wrap">'),
      (t +=
        '						<select name="select_email_host" id="select_email_host" class="select_style1">'),
      (t += '							<option value="@">ì§ì ìë ¥</option>'),
      (t += '							<option value="naver.com">ë¤ì´ë²</option>'),
      (t += '							<option value="daum.net">ë¤ì</option>'),
      (t += '							<option value="hanmail.net">íë©ì¼</option>'),
      (t += '							<option value="nate.com">ë¤ì´í¸</option>'),
      (t += '							<option value="hotmail.com">í«ë©ì¼</option>'),
      (t += '							<option value="gmail.com">ì§ë©ì¼</option>'),
      (t += '							<option value="dreamwiz.com">ëë¦¼ìì¦</option>'),
      (t += "						</select>"),
      (t += "					</div>"),
      (t += "				</div>"),
      (t +=
        '				<input type="hidden" name="join_user_email" id="join_user_email"/>'),
      (t += '				<input type="hidden" name="os_type" id="PC"/>'),
      (t +=
        '				<input type="hidden" name="device_type" id="web-device_type" value="pc"/>'),
      (t += '				<p class="join_txt" id="join-txt-notice-email">'),
      (t +=
        '					â» íì¼ìºì¤í¸ë <span class="dspan">ì´ë©ì¼ ìì´ë</span>ë¥¼ ë°ìµëë¤./<span class="dspan">ë¬´ë£ ì¿ í°</span>ì´ ë§¤ë¬ <span class="dspan">ì´ë©ì¼</span>ë¡ ë°ì¡ë©ëë¤.'),
      (t += "				</p>"),
      (t +=
        '				<div id="join-valid-custome-err-msg" class="join-valid-custome-err-msg"></div>'),
      (t +=
        '				<input type="password" name="user_pass" id="user_pw1" placeholder="ë¹ë°ë²í¸ (4ì ì´ì,12ì ì´í, ìë¬¸/ì«ì ì¡°í©)" class="input_pw" tabindex="4" maxlength="12"/>'),
      (t += '				<label for="user_pw" class="blind">ë¹ë°ë²í¸ìë ¥</label>'),
      (t +=
        '				<input type="password" name="user_pass2" id="user_pw2" placeholder="ë¹ë°ë²í¸ íì¸" class="input_pw type1" tabindex="5" maxlength="12"/>'),
      (t += '				<label for="user_pw" class="blind">ë¹ë°ë²í¸íì¸</label>'),
      (t +=
        '				<button type="submit" class="hand btn_log type1" id="btnCorfirmJoin" tabindex="6">íì¼ìºì¤í¸ íì ê°ì ìë£</button>'),
      (t +=
        '				<div id="tab-join-last-temp" tabindex="7" style="height: 1px;"></div>'),
      (t += "			</fieldset>"),
      (t += "		</form>"),
      (t += '		<div class="join_q type1" onclick="GO_MENU(\'login\');">'),
      (t += "			<p>ê¸°ì¡´ ê³ì ì´ ìì¼ì ê°ì?</p>"),
      (t += "			<a><b>ë¡ê·¸ì¸íë¬ ê°ê¸°</b> &gt;</a>"),
      (t += "		</div>"),
      (t += '		<div class="join_btm">'),
      (t +=
        '			<p class="all_agree"><input class="join-agree-checkbox" type="checkbox" name="agreeJoin" id="agreeJoin"/><span>ìë ì´ì©ì½ê´ / ê°ì¸ì ë³´ ìì§ ë° ì´ì©ì ëìí©ëë¤.</span></p>'),
      (t += '			<div class="terms">'),
      (t += TEMPLATE_MODAL.fcJoinTerms()),
      (t += "			</div>"),
      (t += '			<div class="agreement">'),
      (t += '				<span class="txt_img"></span>'),
      (t += "				<p>"),
      (t +=
        '					<input type="checkbox" class="join-agree-checkbox" name="agreeJoinInfo" id="agreeJoinInfo" tabindex="8"/>'),
      (t +=
        '					<span>ê°ì¸ì ë³´ ìì§ ë° ì´ì©ì <span class="t_blue">ëì</span>í©ëë¤.</span>'),
      (t += "				</p>"),
      (t += "			</div>"),
      (t += "		</div>"),
      (t += "		</div>"),
      (t += '		<a class="btn_close type1 hand" data-dismiss="modal"></a>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcJoinStartModal = function (e) {
    var t = "";
    (t +=
      '<div class="modal fc-web-login-form-modal" id="fcJoinStartModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (t += '  <div class="modal-dialog center_style type3" role="document">'),
      (t += '		<div class="layer_layout">'),
      (t += '			<div class="join_wrap sns">'),
      (t +=
        '				<h1 class="layer_tit style1"><a class="hand"><span></span></a></h1>'),
      (t +=
        '				<p class="layer_txt">íì¼ìºì¤í¸ ê°ìíê³  ìµì ìí, ë°©ì¡, ì ë, ì±ì¸ ë± ë¬´ë£ ë¤ì´ë¡ë íì¸ì!</p>'),
      (t += '				<div class="step_notice">'),
      (t += "					<ul>"),
      (t += '						<li class="step1"><span>ë¬´ë£í¬ì¸í¸<br />ì§ê¸!</span></li>'),
      (t += '						<li class="step2"><span>PC/ëª¨ë°ì¼<br />OK!</span></li>'),
      (t += '						<li class="step3"><span>ê°ì¸ì ë³´<br />NO!</span></li>'),
      (t += '						<li class="step4"><span>í°ë³´ ë°±ì <br />ì¤ì¹!</span></li>'),
      (t += "					</ul>"),
      (t += "				</div>"),
      (t += '				<div class="new_join">'),
      (t += "					<h2>íì¼ìºì¤í¸ ê°í¸ íì ê°ì</h2>"),
      (t +=
        "					<p>ê°ì¸ì ë³´ NO! ìì´ë(ì´ë©ì¼), í¨ì¤ìë ìë ¥ ë§ì¼ë¡ ê°í¸íê² íì ê°ì!</p>"),
      (t +=
        '					<div class="btn_join_go" data-type="filecast" onclick="WEB_MEMBER.onclickSnsJoin(this);">'),
      (t += '						<span class="txt">íì¼ìºì¤í¸ íì ê°ìíë¬ ê°ê¸°</span>'),
      (t += "					</div>"),
      (t += "				</div>"),
      (t += '				<div class="sns_join">'),
      (t += "					<h2>SNS ê³ì ì¼ë¡ íì ê°ì</h2>"),
      (t +=
        "					<p>íì´ì¤ë¶, ì¹´ì¹´ì¤í¡, ë¤ì´ë² ê³ì ì¼ë¡ í¸ë¦¬íê² íì¼ìºì¤í¸ì íì ê°ì!</p>"),
      (t += "					<ul>"),
      (t +=
        '						<li class="facebook" data-type="facebook" onclick="WEB_MEMBER.onclickSnsJoin(this);">'),
      (t += '							<span class="txt">íì´ì¤ë¶ ê³ì ì¼ë¡ íì ê°ì</span>'),
      (t += '							<span class="bg"></span>'),
      (t += "						</li>"),
      (t +=
        '						<li class="kakaotalk" data-type="kakao" onclick="WEB_MEMBER.onclickSnsJoin(this);">'),
      (t += '							<span class="txt">ì¹´ì¹´ì¤í¡ ê³ì ì¼ë¡ íì ê°ì</span>'),
      (t += '							<span class="bg"></span>'),
      (t += "						</li>"),
      (t +=
        '						<li class="naver" data-type="naver" onclick="WEB_MEMBER.onclickSnsJoin(this);">'),
      (t += '							<span class="txt">ë¤ì´ë² ê³ì ì¼ë¡ íì ê°ì</span>'),
      (t += '							<span class="bg"></span>'),
      (t += "						</li>"),
      (t += "					</ul>"),
      (t += "				</div>"),
      (t += '				<a class="btn_close type1 hand" data-dismiss="modal"></a>'),
      (t += "			</div>"),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcJoinModal = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcJoinModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (t += '  <div class="modal-dialog center_style type3" role="document">'),
      (t += '	<div class="layer_layout">'),
      (t += '	   <div class="join_wrap">'),
      (t += '		<h1 class="layer_tit style1"><span></span></h1>'),
      (t += '		<p class="layer_txt">íì¼ìºì¤í¸ íì ê°ì</p>'),
      (t +=
        '		<p>" íì¼ìºì¤í¸ íì ê°ìì 10ì´ë©´ ì¶©ë¶í©ëë¤. ê·¸ë¦¬ê³  ê·¸ë§í ê°ì¹ê° ììµëë¤. "</p>'),
      (t +=
        '		<form method="post" id="form_signup" name="form_signup" data-email="" data-e_check="0">'),
      (t += '			<fieldset id="focusguard-2">'),
      (t += '				<legend class="blind">íì¼ìºì¤í¸ íìê°ìí¼</legend>'),
      (t += '				<div class="form_top">'),
      (t +=
        '					<input type="text" name="join_user_id" id="join_user_id" placeholder="ì´ë©ì¼ (3ì ì´ì)" class="input_id type1 style1" tabindex="2" maxlength="25"/>'),
      (t += '					<label for="user_id" class="blind">ì´ë©ì¼ìë ¥</label> '),
      (t += '					<span class="f_left">@</span>'),
      (t +=
        '					<input type="text" name="email_host" id="join_email_host"  class="input_id type1 style2" tabindex="3" maxlength="25"/>'),
      (t += '					<div class="select_wrap">'),
      (t +=
        '						<select name="select_email_host" id="select_email_host" class="select_style1">'),
      (t += '							<option value="@">ì§ì ìë ¥</option>'),
      (t += '							<option value="naver.com">ë¤ì´ë²</option>'),
      (t += '							<option value="daum.net">ë¤ì</option>'),
      (t += '							<option value="hanmail.net">íë©ì¼</option>'),
      (t += '							<option value="nate.com">ë¤ì´í¸</option>'),
      (t += '							<option value="hotmail.com">í«ë©ì¼</option>'),
      (t += '							<option value="gmail.com">ì§ë©ì¼</option>'),
      (t += '							<option value="dreamwiz.com">ëë¦¼ìì¦</option>'),
      (t += "						</select>"),
      (t += "					</div>"),
      (t += "				</div>"),
      (t +=
        '				<input type="hidden" name="join_user_email" id="join_user_email"/>'),
      (t += '				<input type="hidden" name="os_type" id="PC"/>'),
      (t +=
        '				<input type="hidden" name="device_type" id="web-device_type" value="pc"/>'),
      (t += '				<p class="join_txt" id="join-txt-notice-email">'),
      (t +=
        '					â» íì¼ìºì¤í¸ë <span class="dspan">ì´ë©ì¼ ìì´ë</span>ë¥¼ ë°ìµëë¤./<span class="dspan">ë¬´ë£ ì¿ í°</span>ì´ ë§¤ë¬ <span class="dspan">ì´ë©ì¼</span>ë¡ ë°ì¡ë©ëë¤.'),
      (t += "				</p>"),
      (t +=
        '				<div id="join-valid-custome-err-msg" class="join-valid-custome-err-msg"></div>'),
      (t +=
        '				<input type="password" name="user_pass" id="user_pw1" placeholder="ë¹ë°ë²í¸ (4ì ì´ì,12ì ì´í, ìë¬¸/ì«ì ì¡°í©)" class="input_pw" tabindex="4" maxlength="12"/>'),
      (t += '				<label for="user_pw" class="blind">ë¹ë°ë²í¸ìë ¥</label>'),
      (t +=
        '				<input type="password" name="user_pass2" id="user_pw2" placeholder="ë¹ë°ë²í¸ íì¸" class="input_pw type1" tabindex="5" maxlength="12"/>'),
      (t += '				<label for="user_pw" class="blind">ë¹ë°ë²í¸íì¸</label>'),
      (t +=
        '				<button type="submit" class="hand btn_log type1" id="btnCorfirmJoin" tabindex="6">íì¼ìºì¤í¸ íì ê°ì ìë£</button>'),
      (t +=
        '				<div id="tab-join-last-temp" tabindex="7" style="height: 1px;"></div>'),
      (t += "			</fieldset>"),
      (t += "		</form>"),
      (t += '		<div class="join_q type1" onclick="GO_MENU(\'login\');">'),
      (t += "			<p>ê¸°ì¡´ ê³ì ì´ ìì¼ì ê°ì?</p>"),
      (t += "			<a><b>ë¡ê·¸ì¸íë¬ ê°ê¸°</b> &gt;</a>"),
      (t += "		</div>"),
      (t += '		<div class="join_btm">'),
      (t +=
        '			<p class="all_agree"><input class="join-agree-checkbox" type="checkbox" name="agreeJoin" id="agreeJoin"/><span>ìë ì´ì©ì½ê´ / ê°ì¸ì ë³´ ìì§ ë° ì´ì©ì ëìí©ëë¤.</span></p>'),
      (t += '			<div class="terms">'),
      (t += TEMPLATE_MODAL.fcJoinTerms()),
      (t += "			</div>"),
      (t += '			<div class="agreement">'),
      (t += '				<span class="txt_img"></span>'),
      (t += "				<p>"),
      (t +=
        '					<input type="checkbox" class="join-agree-checkbox" name="agreeJoinInfo" id="agreeJoinInfo" tabindex="8"/>'),
      (t +=
        '					<span>ê°ì¸ì ë³´ ìì§ ë° ì´ì©ì <span class="t_blue">ëì</span>í©ëë¤.</span>'),
      (t += "				</p>"),
      (t += "			</div>"),
      (t += "		</div>"),
      (t += "		</div>"),
      (t += '		<a class="btn_close type1 hand" data-dismiss="modal"></a>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcAdultSignupModal = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcAdultSignupModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (t += '  <div class="modal-dialog center_style type9" role="document">'),
      (t += '        <input type="hidden" id="auth_return_url" value="">'),
      (t += "        /* ìì´í, í´ëí° ì í*/"),
      (t += '		<div class="pop_layer adult2">'),
      (t += "			<h1>ì±ì¸ ì¸ì¦ ì ì°¨</h1>"),
      (t += '			<div class="coupon_top type1">'),
      (t +=
        '				<p class="ad_txt">ë³¸ ì ë³´ ë´ì©ì <span>ì²­ìëìê² ì í´í ì ë³´</span>ë¥¼ í¬í¨íê³  ìì´ <br />ì±ì¸ì¸ì¦ ì ì°¨ë¥¼ ê±°ì³ì¼ í©ëë¤.</p>'),
      (t +=
        "				<p>ë³¸ ì ë³´ ë´ì©ì ì²­ìë ì í´ë§¤ì²´ë¬¼ë¡ì ì ë³´íµì ë§ ì´ì© ì´ì§ ë° ì ë³´ë³´í¸<br />ë±ì ê´í ë²ë¥  ë° ì²­ìë ë³´í¸ë²ì ê·ì ì ìíì¬ 19ì¸ ë¯¸ë§ì ì²­ìëì´ <br /> ì´ì©í  ì ììµëë¤.</p>"),
      (t +=
        '				<p class="bold">â» 19ì¸ ë¯¸ë§ì´ê±°ë ì±ì¸ ì¸ì¦ì ìíì§ ìì¼ì¤ ê²½ì° <span class="btn_back" data-dismiss="modal">ëìê°ê¸°</span></p>'),
      (t += "			</div>"),
      (t += '			<div class="coupon_btm type1 style1">'),
      (t +=
        '				<p class="info_txt"><span class="bg"></span>ë³¸ì¸ ì¸ì¦ì ì ê³µëë ì ë³´ë í´ë¹ ì¸ì¦ê¸°ê´ìì ì§ì  ìì§íë©°, ì¸ì¦ ì´ì¸ì ì¶í ë³¸ì¸ íì¸ ì©ëë¡ í´ëí° ë²í¸ê°<br /> &nbsp;&nbsp;&nbsp;ìì§ë©ëë¤.</p>'),
      (t +=
        '				<div class="iPine hand" onclick="WEB_MEMBER.adultAuth(\'ipin\');">'),
      (t += "					<p>ìì´í ì¸ì¦</p>"),
      (t += '					<a class="hand btn_ipine">ìì´íì´ë?</a>'),
      (t += '					<a class="hand">ìì´íì íµí´ ë³¸ì¸ ì¸ì¦íê¸° <span>&gt;</span></a>'),
      (t += "				</div>"),
      (t +=
        '					<div class="cPhone hand" onclick="WEB_MEMBER.adultAuth(\'phone\');">'),
      (t += "					<p>í´ëí° ì¸ì¦</p>"),
      (t +=
        '					<a class="hand">ë³¸ì¸ëªì í´ëí°ì íµí´ ë³¸ì¸ ì¸ì¦íê¸° <span>&gt;</span></a>'),
      (t += "				</div>"),
      (t += "			</div>"),
      (t += '			<a class="btn_close type2 style1 hand" data-dismiss="modal"></a>'),
      (t += "		</div>"),
      (t += "  </div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcPwdFindModal = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcPwdFindModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" >'),
      (t += '	<div class="modal-dialog center_style type4">'),
      (t += '		<div class="layer_layout">'),
      (t += '			<div class="login_wrap find_pw">'),
      (t +=
        '				<h1 class="layer_tit" style="margin-bottom:10px;"><span></span></h1>'),
      (t += '				<p class="layer_txt">ë¹ë°ë²í¸ ì°¾ê¸°</p>'),
      (t += '				<form onsubmit ="return false;">'),
      (t += "					<fieldset>"),
      (t += '						<legend class="blind">íì¼ìºì¤í¸ ë¹ë°ë²í¸ì°¾ê¸°í¼</legend>'),
      (t += '						<label for="" class="find_label">ìì´ë(ì´ë©ì¼)</label>'),
      (t +=
        '						<input type="text" id="find_pwd_email" class="input_id type3" onkeydown="javascript: if (event.keyCode == 13) {WEB_MEMBER.findPwdProc();}"/>'),
      (t += "						<ul>"),
      (t +=
        "							<li><span>Â·</span>íìê°ìì ìë ¥íì  ìì´ë(ì´ë©ì¼)ë¡ ë¹ë°ë²í¸ê° ë°ì¡ëë©° ê°ìì ìë ¥ íì  ë©ì¼ ì£¼ìê°<br />  &nbsp;&nbsp;ìëª» ê¸°ì¬ëìê±°ë ìì¼ë©´ ë¹ë°ë²í¸ë¥¼ ë°ì¼ì¤ ì ììµëë¤.</li>"),
      (t +=
        "							<li><span>Â·</span>ìë ¥íì  ë©ì¼ ì£¼ìê° ìì ê²½ì°ìë 10:00 ~ 18:00 ì¬ì´ì ê³ ê°ì¼í° (1600-0335) ë¡ <br />&nbsp;&nbsp;ì íì£¼ìê¸° ë°ëëë¤.</li>"),
      (t +=
        "							<li><span>Â·</span>ë¹ë°ë²í¸ ìì ì [ë§ì´íì´ì§] â [ë¹ë°ë²í¸ ë³ê²½]ìì íì¤ ì ììµëë¤.</li>"),
      (t +=
        "							<li><span>Â·</span>ë¤ì, íë©ì¼, ë¤ì´í¸ ë©ì¼ì ë°ì¡ì´ ëì§ ìì ì ììµëë¤.</li>"),
      (t += "						</ul>"),
      (t +=
        '						<button class="hand btn_log" type="button" onclick="WEB_MEMBER.findPwdProc();">ë¹ë°ë²í¸ ì°¾ê¸°</button>'),
      (t += "					</fieldset>"),
      (t += "				</form>"),
      (t += '				<div class="join_q">'),
      (t += "					<p>ê³ì ì´ ìì¼ì¸ì?</p>"),
      (t +=
        '					<a class="hand" onclick="GO_MENU(\'join\');"><b>íì¼ìºì¤í¸ ë¬´ë£ íì ê°ìíê¸°</b> &gt;</a>'),
      (t += "				</div>"),
      (t += '				<a class="btn_close type1 hand" data-dismiss="modal"></a>'),
      (t += "			</div>"),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcIdFindModal = function (e) {
    var t = new Date(),
      a = "";
    (a +=
      '<div class="modal" id="fcIdFindModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" >'),
      (a += '	<div class="modal-dialog center_style type4" role="document">'),
      (a += '		<div class="layer_layout"  id="find_id">'),
      (a += '			<div class="login_wrap find_id">'),
      (a += '				<h1 class="layer_tit"><span></span></h1>'),
      (a += '				<p class="layer_txt">íì¼ìºì¤í¸ ìì´ë ì°¾ê¸°</p>'),
      (a +=
        '				<p class="find_info">â» <b>ì±ì¸ì¸ì¦</b> í¹ì <b>ê²°ì ì ë³´</b>ê° ìì ê²½ì°ìë§ ìì´ë ì°¾ê¸°ê° ê°ë¥í©ëë¤.</p>'),
      (a += '				<div class="coupon_btm type1">'),
      (a += '					<form onsubmit ="return false;">'),
      (a += "						<fieldset>"),
      (a += '							<legend class="blind">íì¼ìºì¤í¸ ìì´ëì°¾ê¸°í¼</legend>'),
      (a +=
        '								<p><label for="">ì´ë¦</label><input type="text" id="find_id_name"  name="find_id_name" /></p>'),
      (a +=
        '								 <p><label for="">ì±ë³</label><input type="radio" name="find_id_gender" value="1" checked /><span>ë¨ì</span><input type="radio" name="find_id_gender" value="0"/><span>ì¬ì</span></p>'),
      (a += '								<p><label for="">ìëìì¼</label>'),
      (a += '									<select name="birth_find_id_y" id="birth_find_id_y">');
    for (var i = 1930; t.getFullYear() >= i; i++)
      a += '									<option value="' + i + '">' + i + "</option>";
    (a += "									</select> ë "),
      (a += '									<select name="birth_find_id_m" id="birth_find_id_m">');
    for (var n = "", s = 1; 12 >= s; s++)
      (n = "0" + s),
        (n = n.slice("-2")),
        (a += '										<option value="' + n + '">' + s + "</option>");
    (a += "									</select> ì"),
      (a += '									<select name="birth_find_id_d" id="birth_find_id_d">');
    for (var o = "", r = 1; 31 >= r; r++)
      (o = "0" + r),
        (o = o.slice("-2")),
        (a += '										<option value="' + o + '">' + r + "</option>");
    (a += "									</select> ì¼"),
      (a += "								</p>"),
      (a +=
        '							<button class="hand btn_log" onclick="WEB_MEMBER.findIdProc();">ìì´ë ì°¾ê¸°</button>'),
      (a += "						</fieldset>"),
      (a += "					</form>"),
      (a += "				</div>"),
      (a += '			<div class="join_q">'),
      (a += "				<p>ê³ì ì´ ìì¼ì¸ì?</p>"),
      (a +=
        '				<a class="hand" onclick="GO_MENU(\'join\');">íì¼ìºì¤í¸ ë¬´ë£ íì ê°ìíê¸°</a>'),
      (a += "				</div>"),
      (a += '				<a class="btn_close type1 hand" data-dismiss="modal"></a>'),
      (a += "			</div>"),
      (a += "		</div>"),
      (a +=
        '		<div class="layer_layout" style="display:none;" id="find_id_result">'),
      (a += '			<div class="login_wrap find_id" >'),
      (a += '				<h1 class="layer_tit"><span></span></h1>'),
      (a += '				<p class="layer_txt type1">ìì´ë ì°¾ê¸°</p>'),
      (a +=
        '				<p class="find_info">â» <b>ì±ì¸ì¸ì¦</b> í¹ì <b>ê²°ì ì ë³´</b>ê° ìì ê²½ì°ìë§ ìì´ë ì°¾ê¸°ê° ê°ë¥í©ëë¤.</p>'),
      (a += '				<div class="id_list">'),
      (a += '					<ul id="find_id_list">'),
      (a += "					</ul>"),
      (a += "				</div>"),
      (a += '				<div class="paging type4" id="find_id_paging">'),
      (a += "				</div>"),
      (a += '				<a class="btn_close type1 hand" data-dismiss="modal"></a>'),
      (a += "			</div>"),
      (a += "		</div>"),
      (a += "	</div>"),
      (a += "</div>");
    try {
      return a;
    } finally {
      (a = null), (e = null), (t = null), (i = null), (r = null), (s = null);
    }
  }),
  (TEMPLATE_MODAL.fcLeaveModal = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcLeaveModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (t += '  <div class="modal-dialog center_style type7" role="document">'),
      (t += '  <div class="popup_secede">'),
      (t += '   <form action="" method="post">'),
      (t += "		<fieldset>"),
      (t += '			<legend class="blind">íìíí´</legend>'),
      (t += "			<h1>íì¼ìºì¤í¸ íìíí´ <span>www.filecast.co.kr</span></h1>"),
      (t +=
        '			<p class="s_q"><span>â </span> íì¼ìºì¤í¸ë¥¼ íí´íìë ì´ì ë ë¬´ìì¸ê°ì?</p>'),
      (t += '			<p class="s_e">íìëê»ì íí´íìë ì´ì ë¥¼ ìë ¤ì£¼ìë©´ <br />'),
      (t += "				ì¢ì ìë¹ì¤ ì ê³µì ìí´ ë¸ë ¥íê² ìµëë¤.ê°ì¬í©ëë¤."),
      (t += "			</p>"),
      (t += '			<div class="c_area">'),
      (t +=
        '				<p><input type="radio" name="kind" value="1"/><label for="">ì ì ì¡°ì¹ë¡ ì¸í ì´ì©ì í</label></p>'),
      (t +=
        '				<p><input type="radio" name="kind" value="2"/><label for="">ì°¾ë ìë£ê° ìì´ì</label></p>'),
      (t +=
        '				<p><input type="radio" name="kind" value="3"/><label for="">ë¤ë¥¸ ì¬ì´í¸ë¥¼ ì´ì©í´ì</label></p>'),
      (t +=
        '				<p><input type="radio" name="kind" value="4"/><label for="">ì½íì¸  ê°ê²©ì´ ë¹ì¸ì</label></p>'),
      (t +=
        '				<p><input type="radio" name="kind" value="5"/><label for="">ì´ë²¤í¸ê° ë¶ì¡±í´ì</label></p>'),
      (t +=
        '				<p><input type="radio" name="kind" value="6"/><label for="">ë¤ì´ë¡ë ìëê° ëë ¤ì</label></p>'),
      (t +=
        '				<p><input type="radio"  name="kind" value="7"/><label for="">ê·¸ë¥ ì´ì©íê¸° ì«ì´ì</label></p>'),
      (t +=
        '				<p class="last"><input type="radio"  name="kind" id="etc" value="10"/><label for="">ê¸°í</label></p>'),
      (t += '				<div class="t_area">'),
      (t +=
        '					<textarea name="info" id="info" placeholder="ê¸°í ì¬ì  ë° ê±´ìì¬í­ì ìë ¥í´ ì£¼ì¸ì(5ê¸ì ì´ì)" onKeyup ="WEB_MYPAGE.leaveLayerCheck(this)"></textarea>'),
      (t +=
        '					<label for=""><span id="str_state"><span> 0 </span> / 200 byte</span></label>'),
      (t += "				</div>"),
      (t += "			</div>"),
      (t += '			<div class="b_wrap">'),
      (t +=
        '				<input type="button" class="btn_s"  onclick= "WEB_MYPAGE.leaveSubmit();" value="íìíí´"/>'),
      (t +=
        '				<input type="button" class="btn_c" data-dismiss="modal" value="íí´ì·¨ì"/>'),
      (t += "			</div>"),
      (t += "		</fieldset>"),
      (t += "	</form>"),
      (t += "	</div>"),
      (t += "  </div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcNoteModal = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcNoteModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (t += '	<div class="modal-dialog center_style type8" role="document">'),
      (t += '		<div class="popup_note">'),
      (t += '			<div class="header_pop">'),
      (t += "				<h1>ìª½ì§ë³´ë´ê¸°</h1>"),
      (t += "			</div>"),
      (t += '			<div class="popup_n_con">'),
      (t +=
        '			<form name="memo_submit" action="#" method="post" onsubmit ="WEB_NOTE.sendNote(); return false;">'),
      (t += "				<fieldset>"),
      (t +=
        '					<p class="d_user"><label for="">ë°ë ì¬ë</label><input type="text" name="nickname" id = "nickname" placeholder="ë°ë ì¬ëì ëë¤ìì ìë ¥íì¸ì!"/></p>'),
      (t +=
        '					<p><label for="">ìª½ì§ ë´ì©</label><textarea name="memo" id="memo" onKeyUp="WEB_NOTE.checkByte(this, memo_submit.memo.value)"></textarea></p>'),
      (t +=
        '					<p style="font-size: 12px; text-align: right; padding-right: 30px;"><input type="text" name="h_time_cbyte" id="h_time_cbyte" style="border:0px;background-color: transparent; width: 30px" value="0">/600 Byte (íê¸300ì)</p>'),
      (t += '					<div class="btn_n_wrap">'),
      (t += '						<input type="submit" value="ìª½ì§ ë³´ë´ê¸°"/>'),
      (t += '						<input type="button" value="ë«ê¸°" data-dismiss="modal"/>'),
      (t += "					</div>"),
      (t += "				</fieldset>"),
      (t += "			</form>"),
      (t += "			</div>"),
      (t += '			<a class="btn_close type2 style1" data-dismiss="modal"></a>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcFriAddModal = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcFriAddModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (t += '    <div class="modal-dialog center_style type11">'),
      (t += '		<div class="pop_layer friend_add" role="document">'),
      (t += "			<h1>ì¹êµ¬ ì¶ê°íê¸°</h1>"),
      (t += '			<div class="frend_wrap">'),
      (t += '				<span class="bg"></span>'),
      (t += '				<div class="add_form">'),
      (t += '					<p class="tit">ì¹êµ¬ ì¶ê°íê¸°</p>'),
      (t +=
        '					<form action="#" method="post" onsubmit ="WEB_FRIEND.saveFriData(); return false;">'),
      (t += "						<fieldset>"),
      (t += '							<legend class="blind">ì¹êµ¬ì¶ê° í¼</legend>'),
      (t +=
        '							<p class="line"><label for="">ëë¤ì</label><input type="text" class="i_text" name="nickname" id = "nickname" placeholder="ë°ë ì¬ëì ëë¤ìë¥¼ ìë ¥íì¸ì!" readonly /></p>'),
      (t +=
        '							<p class="line"><label for="" class="l_type1">ì¤ëª</label><textarea  name="remark" id="remark" class="i_text type1"></textarea></p>'),
      (t += '							<div class="btn_area">'),
      (t +=
        '								<input type="button" class="btn cancle" value="ì·¨ì" data-dismiss="modal"/>'),
      (t += '								<input type="submit" class="btn add" value="ì¹êµ¬ ì¶ê°íê¸°"/>'),
      (t += "							</div>"),
      (t += "						</fieldset>"),
      (t += "					</form>"),
      (t += "				</div>"),
      (t += "			</div>"),
      (t += '			<a class="btn_close type4" data-dismiss="modal"></a>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcFriModifyModal = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcFriModifyModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (t += '    <div class="modal-dialog center_style type11">'),
      (t += '		<div class="pop_layer friend_edit" role="document">'),
      (t += "			<h1>ì¹êµ¬ ì ë³´ ìì </h1>"),
      (t += '			<div class="frend_wrap">'),
      (t += '				<span class="bg"></span>'),
      (t += '				<div class="add_form">'),
      (t += '					<p class="tit">ì¹êµ¬ ì ë³´ ìì </p>'),
      (t +=
        '					<form action="#" method="post" onsubmit ="WEB_FRIEND.update_friend_modify(); return false;">'),
      (t +=
        '                      <input type="hidden" name="idx" id="idx" value="' +
        e.idx +
        '">'),
      (t += "						<fieldset>"),
      (t += '							<legend class="blind">ì¹êµ¬ì¶ê° í¼</legend>'),
      (t +=
        '							<p class="line"><label for="">ëë¤ì</label><input type="text" class="i_text" name="nickname" id = "nickname" readonly /></p>'),
      (t +=
        '							<p class="line"><label for="" class="l_type1">ì¤ëª</label><textarea  name="remark" id="remark" class="i_text type1"></textarea></p>'),
      (t += '							<div class="btn_area">'),
      (t +=
        '								<input type="button" class="btn cancle" value="ì·¨ì" data-dismiss="modal"/>'),
      (t +=
        '								<input type="submit" class="btn add" value="ì¹êµ¬ ì ë³´ ìì íê¸°"/>'),
      (t += "							</div>"),
      (t += "						</fieldset>"),
      (t += "					</form>"),
      (t += "				</div>"),
      (t += "			</div>"),
      (t += '			<a class="btn_close type4" data-dismiss="modal"></a>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcChildModalOn = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcChildModalOn" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (t += '	<div class="modal-dialog">'),
      (t += '		<div class="pop_layer child v1604">'),
      (t += "			<h1>ìë ìì¬ ìë¹ì¤ ì¤ì </h1>"),
      (t += '			<div class="layer_top">'),
      (t +=
        '				<form  id="childOnForm" onsubmit="return false;" onKeydown="javascript:if(event.keyCode == 13) {WEB_MYPAGE.childProcNew(\'on\'); }">'),
      (t += "					<fieldset>"),
      (t +=
        '						<input type="password" name="child_pwd" maxlength="12" placeholder="ìíìë ë¹ë°ë²í¸ë¥¼ ìë ¥íì¸ì (4ì ì´ì)" class="style1"/>'),
      (t +=
        '						<input type="password" name="child_pwd1" maxlength="12" placeholder="ë¹ë°ë²í¸ íì¸" class="style2">'),
      (t +=
        '						<input type="button" value="íì¸" class="style1" onclick="WEB_MYPAGE.childProcNew(\'on\');"/>'),
      (t += "					</fieldset>"),
      (t += "				</form>"),
      (t += "			</div>"),
      (t += '			<div class="child_txt">'),
      (t += "				<h2>ìë ìì¬ ìë¹ì¤ë?</h2>"),
      (t += "				<p>ì±ì¸ ìë£ê° ë¸ì¶ëì§ ìëë¡ ì¤ì íë ìë¹ì¤ìëë¤.</p>"),
      (t +=
        "				<p>ì°ë¦¬ ìì´ë¤ì ì±ì¸ ìë£ ì ê·¼ì ìì²ì°¨ë¨ìí´ì¼ë¡ ìì¬íê³  ì¬ì©íì¤ ì ììµëë¤.</p>"),
      (t += "				<h2>ì ì±</h2>"),
      (t +=
        "				<p>- ìë ìì¬ ìë¹ì¤ ONì íì ìë ë¡ê·¸ìì í í´ë¦°ì¬ì´í¸ë¡ ì´ëë©ëë¤.</p>"),
      (t += "				<p>- ìë ìì¬ ìë¹ì¤ OFFì íì ìëì¼ë¡ ê¸°ë³¸ ì¬ì´í¸ë¡ ì´ì©ë©ëë¤.</p>"),
      (t += "				<h2>ì¤ì  ë°©ë²</h2>"),
      (t +=
        "				<p>- ìëìì¬ìë¹ì¤ ì¬ì©ì ìíìë ë¹ë°ë²í¸ë¥¼ ìë ¥íì  í íì¸ì ëë¬ì£¼ì¸ì.</p>"),
      (t += "				<p>- ë¹ë°ë²í¸ë ìëìì¬ìë¹ì¤ë¥¼ í´ì§íì¤ ê²½ì° íìí©ëë¤.</p>"),
      (t += "			</div>"),
      (t += '			<a class="btn_close type2 style1" data-dismiss="modal"></a>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcChildModalOff = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcChildModalOff" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (t += '	<div class="modal-dialog">'),
      (t += '		<div class="pop_layer child v1604">'),
      (t += "			<h1>ìë ìì¬ ìë¹ì¤ ì¤ì </h1>"),
      (t += '			<div class="layer_top type2">'),
      (t +=
        '				<form  method="post" id="childOffForm" onsubmit="return false;"  onKeydown="javascript:if(event.keyCode == 13) {WEB_MYPAGE.childProcNew(\'off\'); }">'),
      (t += "					<fieldset>"),
      (t +=
        '						<input type="password" name="child_pwd" placeholder="ì¤ì íì¨ë ë¹ë°ë²í¸ë¥¼ ìë ¥íì¸ì (4ì ì´ì)" class="style1"/>'),
      (t +=
        '						<input type="button" value="íì¸" class="style1" onclick="WEB_MYPAGE.childProcNew(\'off\');"/>'),
      (t += "					</fieldset>"),
      (t += "				</form>"),
      (t += "			</div>"),
      (t += '			<div class="child_txt">'),
      (t += "				<h2>í´ì§ ë°©ë²</h2>"),
      (t += "				<p>ìëìì¬ìë¹ì¤ ì¤ì ì ìë ¥íì  ë¹ë°ë²í¸ë¥¼ ìë ¥í´ì£¼ì¸ì.</p>"),
      (t += "				<p>ë¹ë°ë²í¸ë¥¼ ìì´ë²ë¦¬ì¨ë¤ë©´ ê³ ê°ì¼í°ë¡ ë¬¸ìí´ì£¼ì¸ì.</p>"),
      (t += "			</div>"),
      (t += '			<a class="btn_close type2 style1" data-dismiss="modal"></a>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcAdultSignupSimpleModal = function (e) {
    var t = new Date(),
      a = "";
    (a +=
      '<div class="modal" id="fcAdultSignupSimpleModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (a += '  <div class="modal-dialog center_style type9" role="document">'),
      (a += '		<div class="pop_layer">'),
      (a += "			<h1>ì±ì¸ ì¸ì¦ ì ì°¨</h1>"),
      (a += '			<div class="coupon_top type1">'),
      (a +=
        '				<p class="ad_txt">ë³¸ ì ë³´ ë´ì©ì <span>ì²­ìëìê² ì í´í ì ë³´</span>ë¥¼ í¬í¨íê³  ìì´ <br />ì±ì¸ì¸ì¦ ì ì°¨ë¥¼ ê±°ì³ì¼ í©ëë¤.</p>'),
      (a +=
        "				<p>ë³¸ ì ë³´ ë´ì©ì ì²­ìë ì í´ë§¤ì²´ë¬¼ë¡ì ì ë³´íµì ë§ ì´ì© ì´ì§ ë° ì ë³´ë³´í¸<br />ë±ì ê´í ë²ë¥  ë° ì²­ìë ë³´í¸ë²ì ê·ì ì ìíì¬ 19ì¸ ë¯¸ë§ì ì²­ìëì´ <br /> ì´ì©í  ì ììµëë¤.</p>"),
      (a +=
        '				<p class="bold">â» ì±ì¸ ì¸ì¦ì ì±ì¸ ì¬ë¶ íì¸ ì©ëë¡ë§ íì©íë©°, ì´ë¤ ì ë³´ë ê¸°ë¡ëì§ ììµëë¤.</p>'),
      (a +=
        '				<p class="bold">â» 19ì¸ ë¯¸ë§ì´ê±°ë ì±ì¸ ì¸ì¦ì ìíì§ ìì¼ì¤ ê²½ì° <span class="btn_back">ëìê°ê¸°</span></p>'),
      (a += "			</div>"),
      (a += '			<div class="coupon_btm">'),
      (a += '				<form action="#" method="post">'),
      (a += "					<fieldset>"),
      (a +=
        '					<p><label for="">ì´ë¦</label><input type="text" name="adult_name" id="adult_name" /></p>'),
      (a +=
        '					<p><label for="">ì±ë³</label><input type="radio" name="adult_gender" value="1" checked /><span>ë¨ì</span><input type="radio" name="adult_gender" value="0" /><span>ì¬ì</span></p>'),
      (a += '					<p><label for="">ìëìì¼</label>'),
      (a += '						<select name="birth_adult_y" id="birth_adult_y">');
    for (var i = 1930; t.getFullYear() >= i; i++)
      a += '									<option value="' + i + '">' + i + "</option>";
    (a += "						</select> ë "),
      (a += '						<select name="birth_adult_m" id="birth_adult_m">');
    for (var n = 1; 12 >= n; n++)
      a += '										<option value="' + n + '">' + n + "</option>";
    (a += "						</select> ì"),
      (a += '						<select name="birth_adult_d" id="birth_adult_d">');
    for (var s = 1; 31 >= s; s++)
      a += '										<option value="' + s + '">' + s + "</option>";
    (a += "						</select> ì¼"),
      (a += "					</p>"),
      (a +=
        '					<input type="button" value="ì±ì¸ ì¸ì¦íê¸°" onclick="WEB_MEMBER.simpleAdultAuth();"/>'),
      (a += "					</fieldset>"),
      (a += "				</form>"),
      (a += "			</div>"),
      (a += '			<a class="btn_close type2 style1 hand" data-dismiss="modal"></a>'),
      (a += "		</div>"),
      (a += "  </div>"),
      (a += "</div>");
    try {
      return a;
    } finally {
      (a = null), (e = null), (t = null), (i = null), (n = null), (s = null);
    }
  }),
  (TEMPLATE_MODAL.fcRealNameSignupModal = function (e) {
    var t = "",
      a = new Date(),
      i = "";
    (i +=
      '<div class="modal" id="fcRealNameSignupModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (i += '  <div class="modal-dialog center_style type9" role="document">'),
      (i += '		<div class="pop_layer">'),
      (i += "			<h1>íì¼ìºì¤í¸ ì¤ëªì¸ì¦</h1>"),
      (i += '			<div class="coupon_top type2">'),
      (i += "				<p>ì´ë¦ê³¼ ìëìì¼ ë§ì¼ë¡ë ê°ë¨íê² ì¤ëªì¸ì¦ì´ ë©ëë¤</p>"),
      (i +=
        '				<p class="bold">â» ë³¸ì¸ íì¸ì ìë ¥íì  ì ë³´ë ì¤ë³µì¬ì© íì¸ì©ëë¡ë§ ì¬ì©ëë©°, <br /> ì ë³´ë ê¸°ë¡ëì§ ììµëë¤.</p>'),
      (i += "			</div>"),
      (i += '			<div class="coupon_btm">'),
      (i += '				<form action="#" method="post">'),
      (i += '					<input type="hidden" id="realname_return">'),
      (i += "					<fieldset>"),
      (i +=
        '					<p><label for="">ì´ë¦</label><input type="text" name="auth_name" id="auth_name" /></p>'),
      (i +=
        '					<p><label for="">ì±ë³</label><input type="radio" name="auth_gender" value="1" checked /><span>ë¨ì</span><input type="radio" name="auth_gender" value="0" /><span>ì¬ì</span></p>'),
      (i += '					<p><label for="">ìëìì¼</label>'),
      (i += '						<select name="birth_auth_y" id="birth_auth_y">');
    for (var n = 1930; a.getFullYear() >= n; n++)
      (t = 1996 == n ? "selected" : ""),
        (i += '									<option value="' + n + '" ' + t + ">" + n + "</option>");
    (i += "						</select> ë "),
      (i += '						<select name="birth_auth_m" id="birth_auth_m">');
    for (var s = 1; 12 >= s; s++)
      i += '										<option value="' + s + '">' + s + "</option>";
    (i += "						</select> ì"),
      (i += '						<select name="birth_auth_d" id="birth_auth_d">');
    for (var o = 1; 31 >= o; o++)
      i += '										<option value="' + o + '">' + o + "</option>";
    (i += "						</select> ì¼"),
      (i += "					</p>"),
      (i +=
        '					<input type="button" value="ì¤ëª ì¸ì¦íê¸°" onclick="WEB_MEMBER.realnameAuth();"/>'),
      (i += "					</fieldset>"),
      (i += "				</form>"),
      (i += "			</div>"),
      (i += '			<a class="btn_close type2 style1 hand" data-dismiss="modal"></a>'),
      (i += "		</div>"),
      (i += "	  </div>"),
      (i += "	</div>");
    try {
      return i;
    } finally {
      (i = null),
        (e = null),
        (t = null),
        (a = null),
        (n = null),
        (s = null),
        (o = null);
    }
  }),
  (TEMPLATE_MODAL.fcGlobalConnect = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcGlobalConnect" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-code="">'),
      (t += '  <div class="modal-dialog" role="document">'),
      (t += '		<div class="intro" class="btn btn-default" data-dismiss="modal">'),
      (t += '			<div class="top">'),
      (t +=
        '				<div class="country ' +
        e +
        '" id="fc-global-connect-modal-div"></div>'),
      (t += "			</div>"),
      (t += '			<div class="btm">'),
      (t +=
        '				<p>íì¼ìºì¤í¸ë ì¬ì©ìë¤ì´ ê°ì¥ ì¾ì í íê²½ìì ì´ì©íì¤ ì ìëë¡ ìµì ì ë¤íê³  ììµëë¤. <span class="logo"></span></p>'),
      (t += "			</div>"),
      (t += "		</div>"),
      (t += "  </div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcModalCommentBadReport = function (e) {
    console.log("fcModalCommentBadReport"), console.debug(e);
    var t = "";
    (t +=
      '<div class="modal" id="fcModalCommentBadReport" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-idx="">'),
      (t +=
        '  <div class="modal-dialog center_style type8 style2" role="document">'),
      (t +=
        '	<form id="fc-modal-comment-report-form" name="fc-modal-comment-report-form" method="post">'),
      (t +=
        '		<input type="hidden" class="form-comment-idx" name="comment_idx" value="' +
        e.comment_idx +
        '"/>'),
      (t +=
        '		<input type="hidden" class="form-type" name="type" value="' +
        e.type +
        '"/>'),
      (t +=
        '		<input type="hidden" class="form-nickname" name="nickname" value="' +
        e.nickname +
        '"/>'),
      (t +=
        '		<input type="hidden" class="form-contents" name="contents" value="' +
        e.contents +
        '"/>'),
      (t +=
        '		<input type="hidden" class="form-userid" name="userid" value="' +
        e.userid +
        '"/>'),
      (t += '		<div class="popup_m_change" style="border: 2px solid #000;">'),
      (t += "			<h1>ëê¸ ì ê³ íê¸°</h1>"),
      (t += '			<div class="report_detail">'),
      (t += "				<div>"),
      (t += "					<h2>ìì±ì ë´ì©</h2>"),
      (t += '					<p class="contents">' + e.contents + "</p>"),
      (t += '					<span class="nickname">' + e.nickname + "</span>"),
      (t += "				</div>"),
      (t += "				<div>"),
      (t += "					<h2>ì¬ì  ì í</h2>"),
      (t += "					<p>ì¬ë¬ ì¬ì ì í´ë¹ë  ê²½ì°, ëíì ì¸ ì¬ì  1ê°ë¥¼ ì íí´ ì£¼ì¸ì.</p>"),
      (t +=
        '					<p><input type="radio" name="kind" value="1" checked="checked"/><label for="">ê´ê³  ë° íë³´ ê²ìë¬¼</label></p>'),
      (t +=
        '					<p><input type="radio" name="kind" value="2"/><label for="">ìëì± ë° ì²­ìëìì¸ ë¶ì í©í ë´ì©</label></p>'),
      (t +=
        '					<p><input type="radio" name="kind" value="3"/><label for="">ìì¤ ë° ëªìí¼ì / ì¬ìí ì¹¨í´</label></p>'),
      (t +=
        '					<p><input type="radio" name="kind" value="4"/><label for="">ê¸°í</label></p>'),
      (t += "				</div>"),
      (t += "			</div>"),
      (t += '			<div class="btn_charge_wrap type1">'),
      (t += '				<input type="submit" value="ì ê³ íê¸°" class="submit"/>'),
      (t += '				<span class="btn btn-default" data-dismiss="modal">ì·¨ì</span>'),
      (t += "			</div>"),
      (t += '			<a class="btn_close type2 style1" data-dismiss="modal"></a>'),
      (t += "		</div>"),
      (t += "	</form>"),
      (t += "  </div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcModalContentsReport = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcModalContentsReport" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-idx="">'),
      (t +=
        '	<div class="modal-dialog center_style type8 style1" role="document">'),
      (t += '		<div class="popup_note">'),
      (t += '			<div class="header_pop">'),
      (t += "				<h1>ì½íì¸  ì ê³ íê¸°</h1>"),
      (t += "			</div>"),
      (t += '			<div class="popup_n_con">'),
      (t +=
        '			<form method="post" name="fc-modal-contents-bad-report" id="fc-modal-contents-bad-report">'),
      (t +=
        '				<input type="hidden" name="bbs_idx" class="form-bbs-idx" value="' +
        e.idx +
        '"/>'),
      (t +=
        '				<input type="hidden" name="bbs_title" class="form-bbs-title" value="' +
        e.saveTitle +
        '"/>'),
      (t +=
        '				<input type="hidden" name="content" class="form-bbs-contents" value=""/>'),
      (t +=
        '				<input type="hidden" name="one_category_num" class="" value="17"/>	'),
      (t += "				<fieldset>"),
      (t +=
        '					<p class="d_user"><label for="">ì½íì¸ </label><input type="text" name="bad_title" class="form-bbs-display-title" value="' +
        e.disPlayTitle +
        '" readonly="readonly"/></p>'),
      (t += '					<div class="d_radio_area">'),
      (t += '						<label for="" class="name">ì ê³  ë¶ë¥</label>'),
      (t += '						<p class="type1">'),
      (t +=
        '							<span><input type="radio" name="one_category_num2" value="66" checked class="radio"><span>ë¶ë ì½íì¸ </span> <input type="radio" name="one_category_num2"  value="46" class="radio"><span>íì ìë£</span> <input type="radio" name="one_category_num2"  value="47" class="radio"><span>ì ìê¶ ìë°</span></span>'),
      (t +=
        '							<span class="style1"><input type="radio" name="one_category_num2"  value="73" class="radio"><span>ë¶ë² ì±ì¸ë¬¼</span> <input type="radio" name="one_category_num2" value="68" class="radio"><span>ë¶ë² ì±ì¸ë¬¼(ìì²­)</span> <input type="radio" name="one_category_num2"  value="74" class="radio" checked><span>ê¸°í</span></span>'),
      (t += "						</p>"),
      (t += "					</div>"),
      (t +=
        '					<p class="type2"><label for="">ì ê³  ë´ì©</label><textarea name="orignal_contents" class="orignal-contents"></textarea></p>'),
      (t += '					<div class="btn_n_wrap">'),
      (t += '						<input type="submit" value="ì ê³  íê¸°"/>'),
      (t += '						<input type="button" value="ë«ê¸°"  data-dismiss="modal"/>'),
      (t += "					</div>"),
      (t += "				</fieldset>"),
      (t += "			</form>"),
      (t += "			</div>"),
      (t += '			<a class="btn_close type2 style1" data-dismiss="modal"></a>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcModalMobileEvent = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcModalMobileEvent" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-idx="">'),
      (t += '	<div class="modal-dialog" role="document">'),
      (t += '		<div class="m_preview event">'),
      (t += '			<span class="btn_m_close" data-dismiss="modal"></span>'),
      (t += '			<div id="failBaboIframeDiv"></div>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.tempChangeMethodListCommon = function (e) {
    console.log("tempChangeMethodListCommon"), console.debug(e);
    var t = e.pay_info,
      a = e.pay_method,
      i = t.idx,
      n = "",
      s = cehckIsFcMember(),
      o = isBrowserIe(),
      r = "";
    r += "					<ul>";
    for (var l = 0; a.length > l; l++)
      if (((n = a[l].pay_title), 1 == a[l].is_test))
        1 == s &&
          ((n = a[l].pay_name),
          (r +=
            '						<li onclick="WEB_CHARGE.payGoNew(' +
            a[l].idx +
            ", " +
            i +
            ');"><span class="hand">' +
            n +
            "</span></li>"));
      else {
        if (1 == o && 2 == a[l].use_agent) continue;
        if (0 == o && 1 == a[l].use_agent) continue;
        r +=
          '						<li onclick="WEB_CHARGE.payGoNew(' +
          a[l].idx +
          ", " +
          i +
          ');"><span class="hand">' +
          n +
          "</span></li>";
      }
    (r +=
      '						<li data-userid="' +
      t.userid +
      '" data-email="' +
      t.email +
      '" data-type="okCash" onclick="WEB_CHARGE.pointPark(this);"><span class="hand">OKìºì¬ë°±</span></li>'),
      (r +=
        '						<li data-userid="' +
        t.userid +
        '" data-email="' +
        t.email +
        '" data-type="cardMileage" onclick="WEB_CHARGE.pointPark(this);"><span class="hand">ì¹´ëì¬ ë§ì¼ë¦¬ì§</span></li>'),
      (r +=
        '						<li onclick="WEB_CHARGE.payGoNew(100, ' +
        i +
        ');"><span class="hand">ìºì¤í¸ ë§ì¼ë¦¬ì§</span></li>'),
      (r += "					</ul>");
    try {
      return r;
    } finally {
      (r = null), (t = null), (o = null);
    }
  }),
  (TEMPLATE_MODAL.fcChargeModaComon = function (e) {
    console.log("TEMPLATE_MODAL.fcChargeModaComon"), console.debug(e);
    var t = e.pay_info,
      a = "type1607",
      i = "style" + t.group + "_" + t.sort,
      n =
        '<span class="fc_type ' +
        i +
        '" style="display:block;">í¬ì¸í¸ ' +
        fc_number_format(t.charge_cash_base) +
        "P";
    t.charge_cash_bonus > 0 &&
      (n +=
        '<span class="ico_plus">+</span>ë³´ëì¤í¬ì¸í¸ ' +
        fc_number_format(t.charge_cash_bonus) +
        "B"),
      t.charge_event_bonus > 0 &&
        (n +=
          '<span class="ico_plus">+</span>Event ' +
          fc_number_format(t.charge_event_bonus) +
          "B"),
      (n += "</span>");
    var s =
      '<span class="total">' +
      fc_number_format(t.real_pay_price) +
      '</span>ìì¼ë¡ ì´  <span class="fix">í¬ì¸í¸ ' +
      fc_number_format(t.charge_cash_base) +
      "P</span>";
    t.charge_cash_bonus > 0 &&
      (s +=
        'ì <span class="point">ë³´ëì¤ ' +
        fc_number_format(t.charge_cash_bonus) +
        "B</span>"),
      t.charge_mileage > 0 &&
        (s +=
          'ì <span class="mileage">ë§ì¼ë¦¬ì§ ' +
          fc_number_format(t.charge_mileage) +
          "ì</span>"),
      t.charge_event_bonus > 0 &&
        (s +=
          'ì <span class="fix">ì´ë²¤í¸ ' +
          fc_number_format(t.charge_event_bonus) +
          "B</span>"),
      (s += "ê° ì ë¦½ë©ëë¤.");
    var o = "";
    (o += "/* charge form1512 */"),
      (o +=
        '<div class="modal" id="fcChargeModaComon" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (o += '	<div class="modal-dialog center_style type5">'),
      (o +=
        '		<div class="pop_layer event_c ' +
        a +
        '" id="fcChargeModaComon-class">'),
      (o += '		<input type="hidden" name="charge_point" id="charge_point">'),
      (o +=
        "			<h1>ì§ì  ë¹êµí´ ë³´ì¸ì! <span>íì¼ìºì¤í¸ í¬ì¸í¸ ì¶©ì ì ì´ëë³´ë¤ë ì ë ´</span>í©ëë¤.</h1>"),
      (o += '			<div class="e_top">'),
      (o += "				<div>"),
      (o += '					<div class="tit"><span>ì ë¦½ë´ì­</span></div>'),
      (o += '					<div class="con type1">'),
      (o += n),
      (o += "					</div>"),
      (o += "				</div>"),
      (o += '				<p class="e_c_txt" id="pay_total_text1">' + s + "</p>"),
      (o += '				<span class="bg"></span>'),
      (o += "			</div>"),
      (o += '			<div class="c_btm">'),
      (o += '				<div class="c_left">'),
      (o += "					<h2>ê²°ì ìë¨ì ì ííì¸ì</h2>"),
      (o += TEMPLATE_MODAL.tempChangeMethodListCommon(e)),
      (o += "				</div>"),
      (o += '				<div class="c_right type1">'),
      (o += "					<h2>ê²°ì  ê¸ì¡</h2>"),
      (o += "					<dl>"),
      (o += '						<dt class="top">ì ìê°</dt>'),
      (o +=
        '						<dd class="top"><span id="prime_price1">' +
        fc_number_format(t.prime_price) +
        "</span> ì</dd>"),
      (o += "						<dt>í ì¸ê°</dt>"),
      (o +=
        '						<dd><span id="pay_price1">' +
        fc_number_format(t.real_pay_price) +
        "</span> ì</dd>"),
      (o += '						<dt class="total">ì´ ê²°ì ê¸ì¡</dt>'),
      (o +=
        '						<dd class="total"><span class="num" id="real_pay_price1">' +
        fc_number_format(t.real_pay_price) +
        '</span> ì<span class="tax">â» VAT ë³ë</span></dd>'),
      (o += "					</dl>"),
      (o += "				</div>"),
      (o += "			</div>"),
      (o += '			<a class="btn_close hand" data-dismiss="modal"></a>'),
      (o += "		</div>"),
      (o += "	</div>"),
      (o += "</div>");
    try {
      return o;
    } finally {
      (o = null), (e = null), (t = null), (s = null);
    }
  }),
  (TEMPLATE_MODAL.fcFlatChargeModalNew = function (e) {
    console.log("TEMPLATE_MODAL.fcFlatChargeModalNew"), console.debug(e);
    var t = e.pay_info;
    if (0 == isDefined(t.idx)) return "";
    var a = "";
    a =
      "7" == t.idx
        ? "fix_d"
        : "8" == t.idx
        ? "fix_d90"
        : "77" == t.idx
        ? "fix_d"
        : "78" == t.idx
        ? "fix_d30_p50"
        : "79" == t.idx
        ? "fix_d30_p100"
        : "fix_d30_p";
    var i = "";
    (i +=
      '<div class="modal" id="fcFlatChargeModalNew" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (i += '  <div class="modal-dialog center_style type5" role="document">'),
      (i += '		<div class="pop_layer charge">'),
      (i +=
        '			<input type="hidden" name="charge_point" id="charge_point" value="' +
        t.real_pay_price +
        '">'),
      (i +=
        "			<h1>ì§ì  ë¹êµí´ ë³´ì¸ì! <span>íì¼ìºì¤í¸ ì ì¡ì  ì´ì©ê¶ì ì´ëë³´ë¤ë ì ë ´</span>í©ëë¤.</h1>"),
      (i += '			<div class="c_top">'),
      (i += '				<ul class="type1">'),
      (i += '					<li class="list_tit">'),
      (i += '						<div class="l7"><span>ì ë¦½ë´ì­</span></div>'),
      (i += "					</li>"),
      (i += '					<li class="' + a + '" id="flat_image_7">'),
      (i += "						<span></span>"),
      (i += "					</li>"),
      (i += "				</ul>"),
      (i += '				<p id="flat_total_text">'),
      (i +=
        t.charge_cash_base > 0
          ? '				<span class="total" id="flat_total_text">' +
            fc_number_format(t.real_pay_price) +
            '</span>ìì¼ë¡ ì´  <span class="fix">' +
            fc_number_format(t.ration_period) +
            'ì¼ ë¬´ì í ì´ì©</span>ê³¼ <span class="point"><b>' +
            fc_number_format(t.charge_cash_base) +
            "</b>í¬ì¸í¸(P)</span>ê° ì ë¦½ë©ëë¤."
          : '				<span class="total" id="flat_total_text">' +
            fc_number_format(t.real_pay_price) +
            '</span>ìì¼ë¡   <span class="fix">' +
            fc_number_format(t.ration_period) +
            "ì¼ ë¬´ì í ì´ì©</span>ì´ ê°ë¥í©ëë¤."),
      (i += "				</p>"),
      (i += '				<span class="bg"></span>'),
      (i += "			</div>"),
      (i += '			<div class="c_btm">'),
      (i += '				<div class="c_left">'),
      (i += "					<h2>ê²°ì ìë¨ì ì ííì¸ì</h2>"),
      (i += TEMPLATE_MODAL.tempChangeMethodListCommon(e)),
      (i += "				</div>"),
      (i += '				<div class="c_right">'),
      (i += "					<h2>ê²°ì  ê¸ì¡</h2>"),
      (i += "					<dl>"),
      (i += '						<dt class="top">ì ìê°</dt>'),
      (i +=
        '						<dd class="top"><span id="flat_prime_price">' +
        fc_number_format(t.prime_price) +
        "</span> ì</dd>"),
      (i += "						<dt>í ì¸ê°</dt>"),
      (i +=
        '						<dd><span  id="flat_pay_price">' +
        fc_number_format(t.real_pay_price) +
        "</span> ì</dd>"),
      (i += "						<dt>ì¶ê°ì¿ í°í ì¸</dt>"),
      (i += "						<dd><span>-</span> %</dd>"),
      (i += '						<dt class="total">ì´ ê²°ì ê¸ì¡</dt>'),
      (i +=
        '						<dd class="total"><span class="num" id="flat_real_pay_price">' +
        fc_number_format(t.real_pay_price) +
        '</span> ì<span class="tax">â» VAT ë³ë</span></dd>'),
      (i += "					</dl>"),
      (i += "				</div>"),
      (i += "			</div>"),
      (i += '			<a class="btn_close hand" data-dismiss="modal" ></a>'),
      (i += "		</div>"),
      (i += "	</div>"),
      (i += "</div>");
    try {
      return i;
    } finally {
      (i = null), (e = null), (a = null);
    }
  }),
  (TEMPLATE_MODAL.fcAutopayChargeModal = function (e) {
    if (
      (console.log("TEMPLATE_MODAL.fcAutopayChargeModal"),
      console.log(e),
      0 == isDefined(e.idx))
    )
      return "";
    var t = parseInt(
        100 * ((e.prime_price - e.real_pay_price) / e.prime_price)
      ),
      a = "";
    (a +=
      '<div class="modal" id="fcAutopayChargeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'),
      (a += '	<div class="modal-dialog center_style type5">'),
      (a += '		<div class="pop_layer charge">'),
      (a += '			<input type="hidden" name="charge_point" id="charge_point">'),
      (a +=
        "			<h1>ì§ì  ë¹êµí´ ë³´ì¸ì! <span>íì¼ìºì¤í¸ ì ì¡ì  ì´ì©ê¶ì ì´ëë³´ë¤ë ì ë ´</span>í©ëë¤.</h1>"),
      (a += '			<div class="c_top type1">'),
      (a +=
        '				<p class="c_use">ì íí ì´ì©ê¶ : <span class="txt_orange">ì ê¸° ê²°ì  30ì¼ ë¬´ì í ì´ì©ê¶ (ë§¤ì ê°í¸ ê²°ì )</span></p>'),
      (a += '				<ul class="explain">'),
      (a += "					<li>- 24ìê° ë¬´ì í ì´ì©íì¤ ì ììµëë¤.</li>"),
      (a += "					<li>- ë§¤ë¬ " + t + "% ì ë ´í ê°ê²©ì¼ë¡ ì´ì©ì´ ê°ë¥í©ëë¤.</li>"),
      (a += "					<li>- í¸ë¦¬í ë§¤ì ê°í¸ ê²°ì ìëë¤.</li>"),
      (a += "				</ul>"),
      (a += "			</div>"),
      (a += '			<div class="c_btm type1">'),
      (a += '				<div class="c_choice_wrap">'),
      (a += '					<div class="total">'),
      (a +=
        '						<span><span class="txt_red">ì´ ê²°ì ê¸ì¡</span> <span class="num" id="autopay_total_text">' +
        fc_number_format(e.real_pay_price) +
        '</span>ì <span class="txt_blue">â» VAT ë³ë</span></span>'),
      (a += "					</div>"),
      (a += '					<div class="c_choice">'),
      (a += "						<p>ê²°ì  ë°©ë²ì ì íí´ ì£¼ì¸ì!</p>"),
      (a +=
        '						<span class="phone" onclick="WEB_CHARGE.autoPayGo(16, ' +
        e.idx +
        ');">í´ëí°</span>'),
      (a +=
        '						<span class="credit" onclick="WEB_CHARGE.autoPayGo(39, ' +
        e.idx +
        ');">ì ì©ì¹´ë</span>'),
      (a += "					</div>"),
      (a += '					<div class="agree">'),
      (a += "						<p>ì ê°í¸ ê²°ì  ì´ì©ì½ê´ì ëìí©ëë¤.</p>"),
      (a +=
        '						<span class="check" id="autopay_button" onclick="WEB_CHARGE.autopayAgree();"></span>'),
      (a += "					</div>"),
      (a += "				</div>"),
      (a += "				<ul>"),
      (a += "					<li>- ìí êµ¬ë§¤ì ë¶ê°ì¸ 10%ê° ë³ë ì²­êµ¬ë©ëë¤.</li>"),
      (a += "					<li>- êµ¬ë§¤íì  ìíì í ì¬ì´í¸ìì ì´ì©íì¤ ì ììµëë¤.</li>"),
      (a +=
        "					<li>- ì¶ê° ê²°ì ì ë²ê±°ë¡ì ìì´ ì ì²­íì  ë¤ì ë¬ ë¶í° ì´ì©ìê¸ì´ ìëì¼ë¡ ê²°ì ë©ëë¤.</li>"),
      (a += "					<li>- ì ê² ìê°ìë ìë¹ì¤ê° ì¼ì ì¤ì§ë  ì ììµëë¤.</li>"),
      (a +=
        "					<li>- ìë¹ì¤ í´ì§ë¥¼ ìíì¤ ê²½ì° ê³ ê°ì¼í°ë¡ ìì²­íìë©´ ì·¨ìê° ê°ë¥í©ëë¤</li>"),
      (a += "				</ul>"),
      (a += "			</div>"),
      (a += '			<a class="btn_close hand" data-dismiss="modal"></a>'),
      (a += "		</div>"),
      (a += "	</div>"),
      (a += "</div>");
    try {
      return a;
    } finally {
      (a = null), (e = null), (t = null);
    }
  }),
  (TEMPLATE_MODAL.fcModalCharge1608 = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcModalCharge1608" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-idx="">'),
      (t +=
        '	<div class="modal-dialog center_style type15" style="display:block;">'),
      (t += '		<div class="charge1608_popup">'),
      (t +=
        '			<img src="http://static.filecast.co.kr/_img/charge/popup1608_1.png" alt="" />'),
      (t +=
        '			<span class="btn_n_close hand" data-cookie_name="fcModalCharge1608" data-modal_name="fcModalCharge1608" onclick="FC_APP_FN.onclickNeverOpenModal(this);" ></span>'),
      (t += '			<span class="btn_close hand" data-dismiss="modal"></span>'),
      (t += '			<span class="btn_go hand" onclick="GO_MENU(\'charge\');"></span>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcModalEventKakaoFriendJoin = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcModalEventKakaoFriendJoin" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-idx="">'),
      (t +=
        '	<div class="modal-dialog center_style type15" style="display:block;">'),
      (t += '		<div class="charge1607_popup">'),
      (t += '			<div class="charge_pop_body">'),
      (t +=
        '				<span data-cookie_name="fcModalEventKakaoFriendJoin" data-modal_name="fcModalEventKakaoFriendJoin" onclick="FC_APP_FN.onclickNeverOpenModal(this);" class="btn_n_close hand"></span>'),
      (t += '				<span data-dismiss="modal" class="btn_close hand"></span>'),
      (t += '				<span class="btn_go hand" onclick="GO_MENU(\'charge\');"></span>'),
      (t += "			</div>"),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcModalCharge1609 = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcModalCharge1609" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-idx="">'),
      (t +=
        '	<div class="modal-dialog center_style type15" style="display:block;">'),
      (t += '		<div class="charge1609_popup">'),
      (t +=
        '			<img src="http://static.filecast.co.kr/_img/charge/popup1609.png" alt="" />'),
      (t +=
        '			<span class="btn_n_close hand" data-cookie_name="fcModalCharge1609" data-modal_name="fcModalCharge1609" onclick="FC_APP_FN.onclickNeverOpenModal(this);" ></span>'),
      (t += '			<span class="btn_close hand" data-dismiss="modal"></span>'),
      (t += '			<span class="btn_go hand" onclick="GO_MENU(\'charge\');"></span>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcModalCharge1610 = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcModalCharge1610" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-idx="">'),
      (t +=
        '	<div class="modal-dialog center_style type15" style="display:block;">'),
      (t += '		<div class="charge1610_popup">'),
      (t +=
        '			<img src="http://static.filecast.co.kr/_img/charge/popup1610.png" alt="" />'),
      (t +=
        '			<span class="btn_n_close hand" data-cookie_name="fcModalCharge1610" data-modal_name="fcModalCharge1610" onclick="FC_APP_FN.onclickNeverOpenModal(this);" ></span>'),
      (t += '			<span class="btn_close hand" data-dismiss="modal"></span>'),
      (t += '			<span class="btn_go hand" onclick="GO_MENU(\'charge\');"></span>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcModalCharge1611 = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcModalCharge1611" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-idx="">'),
      (t +=
        '	<div class="modal-dialog center_style type15" style="display:block;">'),
      (t += '		<div class="charge1611_popup">'),
      (t +=
        '			<img src="http://static.filecast.co.kr/_img/charge/popup1611.png" alt="" />'),
      (t +=
        '			<span class="btn_n_close hand" data-cookie_name="fcModalCharge1611" data-modal_name="fcModalCharge1611" onclick="FC_APP_FN.onclickNeverOpenModal(this);" ></span>'),
      (t += '			<span class="btn_close hand" data-dismiss="modal"></span>'),
      (t += '			<span class="btn_go hand" onclick="GO_MENU(\'charge\');"></span>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcModalCharge1612 = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcModalCharge1612" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-idx="">'),
      (t +=
        '	<div class="modal-dialog center_style type15" style="display:block;">'),
      (t += '		<div class="charge1612_popup">'),
      (t +=
        '			<img src="http://static.filecast.co.kr/_img/charge/popup1612.png" alt="" />'),
      (t +=
        '			<p class="txt">ì§ê¸ ì¶©ì íë©´ 12ë§ í¬ì¸í¸ + ìµë 80% í ì¸ í¤íì ë°ì¼ì¤ ì ììµëë¤.</p>'),
      (t +=
        '			<span class="btn_n_close hand" data-cookie_name="fcModalCharge1612" data-modal_name="fcModalCharge1612" onclick="FC_APP_FN.onclickNeverOpenModal(this);" ></span>'),
      (t += '			<span class="btn_close hand" data-dismiss="modal"></span>'),
      (t += '			<span class="btn_go hand" onclick="GO_MENU(\'charge\');"></span>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcModalCharge1701 = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcModalCharge1701" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-idx="">'),
      (t +=
        '	<div class="modal-dialog center_style type16" style="display:block;">'),
      (t += '		<div class="charge1701_first_popup">'),
      (t +=
        '			<img src="http://static.filecast.co.kr/_img/charge/popup1701_first.png" alt="" />'),
      (t +=
        '			<span class="btn_n_close hand" data-cookie_name="fcModalCharge1701" data-modal_name="fcModalCharge1701" onclick="FC_APP_FN.onclickNeverOpenModal(this);" ></span>'),
      (t += '			<span class="btn_close hand" data-dismiss="modal"></span>'),
      (t +=
        '			<span class="btn_more" onclick="GO_MENU(\'charge\');">100,000B ë°ì¼ë¬ê°ê¸°</span>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcModalCharge1701Vip = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcModalCharge1701Vip" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-idx="">'),
      (t +=
        '	<div class="modal-dialog center_style type16" style="display:block;">'),
      (t += '		<div class="charge1701_v_popup">'),
      (t +=
        '			<img src="http://static.filecast.co.kr/_img/charge/popup1701_gm.png" alt="" />'),
      (t +=
        '			<span class="btn_n_close hand" data-cookie_name="fcModalCharge1701Vip" data-modal_name="fcModalCharge1701Vip" onclick="FC_APP_FN.onclickNeverOpenModal(this);" ></span>'),
      (t += '			<span class="btn_close hand" data-dismiss="modal"></span>'),
      (t +=
        '			<span class="btn_more" onclick="GO_MENU(\'charge\');">100,000B ë°ì¼ë¬ê°ê¸°</span>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL.fcModalcontents10again = function (e) {
    var t = "";
    (t +=
      '<div class="modal" id="fcModalcontents10again" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-idx="">'),
      (t +=
        '	<div class="modal-dialog center_style type15" style="display:block;">'),
      (t += '		<div class="chistmas2016_popup">'),
      (t +=
        '			<img src="http://static.filecast.co.kr/_img/event/chistmas2016_popup_1.png" alt="" />'),
      (t +=
        '			<span class="btn_n_close hand" data-cookie_name="fcModalcontents10again" data-modal_name="fcModalcontents10again" onclick="FC_APP_FN.onclickNeverOpenModal(this);" ></span>'),
      (t += '			<span class="btn_close hand" data-dismiss="modal"></span>'),
      (t += '			<span class="btn_more hand" onclick="GO_EVENT(44);"></span>'),
      (t += "		</div>"),
      (t += "	</div>"),
      (t += "</div>");
    try {
      return t;
    } finally {
      (t = null), (e = null);
    }
  }),
  (TEMPLATE_MODAL_FUN = {}),
  (TEMPLATE_MODAL_FUN.setModalOnEvent = function (e, t) {
    if (
      (console.log("setModalOnEvent"),
      console.debug(t),
      1 == IsBrowserChrome_FC() &&
        jQuery("body").css({ "padding-right": "17px" }),
      "fcLoginModal" == e)
    ) {
      var a = new FC_APP();
      $("#fcLoginModal").on("shown.bs.modal", function () {
        var e = $(this);
        console.debug(a),
          "search" == t
            ? (e.find(".layer_txt_login").hide(), e.find(".layer_txt").show())
            : (e.find(".layer_txt").hide(), e.find(".layer_txt_login").show()),
          WEB_MEMBER.loginFormValidate(a);
      });
    } else if ("fcLoginModalSns" == e) {
      var a = new FC_APP();
      $("#fcLoginModalSns").on("shown.bs.modal", function () {
        var e = $(this);
        console.debug(a),
          "search" == t
            ? (e.find(".layer_txt_login").hide(), e.find(".layer_txt").show())
            : (e.find(".layer_txt").hide(), e.find(".layer_txt_login").show()),
          WEB_MEMBER.NLOGIN.start(a);
      });
    } else if ("fcJoinModal" == e) {
      var a = new FC_APP();
      $("#fcJoinModal").on("shown.bs.modal", function () {
        jQuery("#join_user_id").focus(), WEB_MEMBER.joinFormValidate(a);
      });
    } else if ("fcAdultSignupModal" == e)
      $("#fcAdultSignupModal").on("hidden.bs.modal", function () {
        console.log("fcAdultSignupModal close"),
          FC_APP_FN.setBindLeftMenu(self);
      });
    else if ("fcGlobalConnect" == e)
      $("#fcGlobalConnect").on("shown.bs.modal", function () {
        console.log("fcGlobalConnect bind"),
          window.setTimeout(function () {
            location.reload();
          }, 3e3);
      });
    else if ("fcNoteModal" == e)
      $("#fcNoteModal").on("shown.bs.modal", function () {
        var e = jQuery("#fc-recieve-memo-nickname").val();
        1 == isDefined(e)
          ? (jQuery("#nickname").val(e), jQuery("#memo").focus())
          : jQuery("#nickname").focus();
      });
    else if ("fcFriAddModal" == e)
      $("#fcFriAddModal").on("shown.bs.modal", function () {
        var e = jQuery("#fc-recieve-memo-nickname").val();
        1 == isDefined(e)
          ? (jQuery("#nickname").val(e), jQuery("#remark").focus())
          : jQuery("#nickname").focus();
      });
    else if ("fcFriModifyModal" == e)
      $("#fcFriModifyModal").on("shown.bs.modal", function () {
        console.debug(t);
        var e = t.nickname,
          a = t.remark;
        t.idx,
          1 == isDefined(e)
            ? (jQuery("#nickname").val(e),
              jQuery("#remark").val(a),
              jQuery("#remark").focus())
            : jQuery("#nickname").focus();
      });
    else if ("fcModalContentsReport" == e)
      $("#fcModalContentsReport").on("shown.bs.modal", function () {
        console.log("fcModalContentsReport bind"),
          CONTENTS_FUN.reportBadContentsAction();
      });
    else if ("fcIdFindModal" == e)
      $("#fcIdFindModal").on("shown.bs.modal", function () {
        console.log("fcIdFindModal bind"), jQuery("#find_id").show();
      });
    else if ("fcModalCommentBadReport" == e)
      $("#fcModalCommentBadReport").on("shown.bs.modal", function () {
        console.log("fcModalCommentBadReport bind"),
          COMMENTLIST_FUN.reportCommentAction();
      });
    else if ("fcRealNameSignupModal" == e)
      $("#fcRealNameSignupModal").on("shown.bs.modal", function () {
        console.log("fcRealNameSignupModal bind"), jQuery("#auth_name").focus();
      });
    else if ("fcModalMobileEvent" == e) {
      if (null == APP) var a = new FC_APP();
      else var a = APP;
      $("#fcModalMobileEvent").on("shown.bs.modal", function () {
        jQuery("#failBaboIframeDiv").empty();
        var e = "http://m.filecast.co.kr";
        null != t &&
          (e =
            a.DEFINE.MOBILE_ROOT +
            "/?action=view&view_id=" +
            t.viewId +
            "&category=" +
            t.cate1);
        var i =
          '<iframe src="' +
          e +
          '" frameborder="0" width="360" height="640"></iframe>';
        $("#failBaboIframeDiv").html(i);
      }),
        $("#fcModalMobileEvent").on("hidden.bs.modal", function () {
          console.log("fcModalMobileEvent bind"),
            jQuery("#failBaboIframeDiv").empty();
        });
    } else
      "fcSellerGuideModal" == e
        ? $("#fcSellerGuideModal").on("shown.bs.modal", function () {
            console.log("fcSellerGuideModal bind"), WEB_SELLER.guideLayerTab(t);
          })
        : "fcItemBuyModal" == e
        ? $("#fcItemBuyModal").on("shown.bs.modal", function () {
            jQuery("#item_cash").html(jQuery("#cash_base").val()),
              jQuery("#rank_up_price").html(jQuery("#rank_up_cash").val());
          })
        : "fcItemCashModal" == e &&
          $("#fcItemCashModal").on("shown.bs.modal", function () {
            WEB_SELLER.itemLayerTab(t);
          });
    jQuery(document).on("hidden.bs.modal", ".modal", function () {
      jQuery(".modal:visible").length &&
        $(document.body).addClass("modal-open"),
        jQuery("body").css({ "padding-right": "0px" });
    });
  });
var fc_check_login = function () {
    var e = jQuery("#memberLoginOk").val();
    return 1 != isDefined(e) ? !1 : ((e = parseInt(e)), e > 1 ? !0 : !1);
  },
  fc_check_adult = function () {
    var e = parseInt(jQuery("#memberValidAdult").val());
    return 1 != isDefined(e) ? !1 : ((e = parseInt(e)), e > 0 ? !0 : !1);
  },
  fc_check_child = function () {
    var e = parseInt(jQuery("#memberValidChild").val());
    return 1 != isDefined(e) ? !1 : ((e = parseInt(e)), 1 == e ? !0 : !1);
  },
  fc_check_realname = function () {
    return 1 > parseInt(jQuery("#memberValidAauthentic").val()) ||
      "NaN" == parseInt(jQuery("#memberValidAauthentic").val())
      ? !1
      : !0;
  },
  GO_MENU = function (e, t, a) {
    if (null == APP) var i = new FC_DEFINE();
    else var i = APP.DEFINE;
    var n = i.SERVER_NEWURL,
      s = i.SERVER_OLDURL,
      o = fc_check_login();
    0 == isDefined(a) && (a = 0), t === void 0 && (t = "");
    var r = {
        home: "/home/main/",
        contents: "/contents/",
        mypage: "/mypage/",
        seller: "/seller/",
        theme: "/theme/",
        theme_view: "/theme/main/" + t,
        faq: "/cs/faq/",
        qna: "/cs/qna/",
        note: "/note/?kind=receive",
        my_down: "/mypage/purchase/",
        my_like: "/mypage/like/",
        my_req: "/mypage/#!/request",
        req: "/req/rlist/",
        req_write: "/req/rlist/#!/?req_write",
        coupon: "/coupon/",
        event: "/event/",
        joinSeller: "/mypage/seller_request/",
        charge: "/charge/main/",
        flat: "/charge/flat/",
        mileage: "/charge/mileage/",
        point_park: "/event/mileage/",
        alim: "/cs/alim",
        search: "/search/?location=main&category=" + a + "&search=",
        seller_file: "/search/seller_file/?seller=" + t,
        broadcast: "/broadcast/",
        mtoon: "/contents/#!/11/1203/1/" + t,
        movies: "/movies/",
        freecharge: "/freecharge/",
        free_event: "/event/free/",
        p_join: "/member/p_join/?non_popup=" + t,
        meweb: "/contents/#!/11/1205/1/",
        king_seller: "/event_king_seller/",
        notice: "/cs/#!/notice/1/",
        notice_view: "/cs/#!/notice_view/" + t + "/",
      },
      l = [
        "my_down",
        "qna",
        "my_like",
        "my_req",
        "joinSeller",
        "mileage",
        "alim",
        "mypage",
        "fileUpload",
        "adultSinup",
        "adultSinupSimple",
        "realname",
        "req_write",
        "comment_report",
        "mtoon",
        "meweb",
        "king_seller",
        "charge",
        "flat",
      ];
    if (jQuery.inArray(e, l) >= 0 && 0 == o)
      return (
        1 == isDefined(a) &&
          "11" == a &&
          gCookie.set(i.STORAGE.ADULT_NEXT_PAGE, "adult", 1),
        "login" != e &&
          "signup" != e &&
          "njoin" != e &&
          (gCookie.set(i.STORAGE.LOGIN_NEXT_PAGE, e, 1),
          1 == isDefined(t) && gCookie.set(i.STORAGE.LOGIN_NEXT_PAGE_SUB, t)),
        GO_LOGIN(null, t),
        void 0
      );
    if ("joinSeller" == e) {
      var c = jQuery("#memberValidEmail").val();
      if (null != isFcSnsChannelEmail(c))
        return (
          alert("SNSë¥¼ íµí´ ê°ìí íìì íë§¤ì ì ì²­ ìê²©ì´ ì íë©ëë¤."), void 0
        );
    }
    var d = ["joinSeller", "mtoon", "meweb", "fileUpload"];
    if (jQuery.inArray(e, d) >= 0 && 0 == fc_check_realname())
      return GO_MENU("adultSinup", e), void 0;
    var u = ["mtoon", "meweb"];
    if (jQuery.inArray(e, u) >= 0) {
      var _ = fc_check_child();
      if (1 == _)
        return (
          alert("ìëìì¬ìë¹ì¤ê° ON ìí ìëë¤. \ní´ë¹ìë¹ì¤ë OFF ìíììë§ ê°ë¥í©ëë¤."),
          void 0
        );
    }
    switch (e) {
      case "index":
        location.href = n;
        break;
      case "search":
        var p = encodeURI(t),
          m = n + r[e] + p;
        location.href = m;
        break;
      case "view":
        if (0 == isDefined(t)) {
          alert("ì ë³´ê° ì³ë°ë¥´ì§ ììµëë¤.");
          break;
        }
        FC_APP_FN.openContentsView(t);
        break;
      case "copyright":
        var h = s + "/copyright/copy_05.php";
        windowOpenCenter(h, "cv", "1020", "850", "scrollbars=1");
        break;
      case "login":
        GO_LOGIN(null, t);
        break;
      case "join":
        GO_JOIN(null, t);
        break;
      case "njoin":
        GO_JOIN(null, t);
        break;
      case "signup":
        GO_SIGNUP(t);
        break;
      case "logout":
        1 != isDefined(t)
          ? confirm("ë¡ê·¸ìì íìê² ìµëê¹?") && WEB_MEMBER.logOut()
          : WEB_MEMBER.logOut();
        break;
      case "fileUpload":
        var E = jQuery("#memberValidUploader").val();
        if ("1" != E) {
          alert("ë¨¼ì  íë§¤ìë¡ ë±ë¡í´ì¼ íì¼ì ìë¡ë ê°ë¥í©ëë¤.");
          var m = n + r.joinSeller;
          location.href = m;
          break;
        }
        FILE_FN.openFileUploader(t);
        break;
      case "adultSinup":
        if ("1" == jQuery("#memberSimpleAuth").val())
          return (
            0 != isDefined(t) ? GO_MENU("realname", t) : GO_MENU("realname"),
            void 0
          );
        0 != isDefined(t) && jQuery("#auth_return_url").val(t),
          "modal" != t && jQuery(".modal.in").modal("hide"),
          FC_MODAL_OPEN("fcAdultSignupModal");
        break;
      case "adultSinupSimple":
        jQuery(".modal.in").modal("hide"),
          FC_MODAL_OPEN("fcAdultSignupSimpleModal");
        break;
      case "realname":
        0 != isDefined(t) && jQuery("#realname_return").val(t),
          jQuery(".modal.in").modal("hide"),
          FC_MODAL_OPEN("fcRealNameSignupModal");
        break;
      case "country":
        console.log("go country");
        var f = "KR";
        1 == isDefined(t) && (f = t), FC_MODAL_OPEN("fcGlobalConnect", !1, f);
        break;
      case "adult":
        console.log("go adult"),
          FC_APP_FN.onClickLeftAdultMenu(".menu11.left-menu.adult");
        break;
      case "coupon":
        if ((console.log("go coupon"), 1 == isDefined(t) && "false" != t))
          var m = n + r[e] + "?p_id=" + t;
        else var m = n + r[e];
        location.href = m;
        break;
      default:
        if (e in r) {
          var m = n + r[e];
          location.href = m;
        } else alert("íì´ì§ ì ë³´ê° ì³ë°ë¥´ì§ ììµëë¤.[" + e + "]");
    }
  },
  GO_JOIN = function (e, t) {
    return (
      console.log("GO_JOIN"),
      1 == fc_check_login()
        ? (alert("ì´ë¯¸ íì¼ ìºì¤í¸ íìì´ì­ëë¤."), void 0)
        : ("modal" != t
            ? jQuery(".modal.in").modal("hide")
            : jQuery(".fc-web-login-form-modal").modal("hide"),
          FC_MODAL_OPEN("fcJoinStartModal", !0, t),
          void 0)
    );
  },
  GO_SIGNUP = function (e) {
    console.log("GO_SIGNUP");
    var t = gCookie.get("p_id");
    return 1 == isDefined(t)
      ? (GO_MENU("p_join", e), void 0)
      : (FC_MODAL_OPEN("fcJoinModal", !0, e), void 0);
  },
  GO_LOGIN = function (e, t) {
    console.log("GO_LOGIN");
    var a = getDirectViewHeadVer();
    if (a > 0)
      return (
        alert("ê°í¸ íìê°ì í ë¬´ë£ë¡ ì´ì©íì¸ì!"), goSeoHome(a, fc_define), void 0
      );
    1 == fc_check_login(),
      "modal" != t
        ? jQuery(".modal.in").modal("hide")
        : jQuery("#fcJoinModal").modal("hide");
    var i = "fcLoginModalSns";
    1 == isDefined(t) && jQuery("#" + i).data("type", t),
      FC_MODAL_OPEN(i, !0, t);
  },
  GO_EVENT = function (e) {
    if (0 == isDefined(e)) return GO_MENU("event"), void 0;
    if (null == APP) var t = new FC_DEFINE();
    else var t = APP.DEFINE;
    var a = t.SERVER_NEWURL,
      i = a + "/event/view/" + e + "/";
    location.href = i;
  },
  GO_PAGE = function (e) {
    if (0 == isDefined(e)) return GO_MENU("home"), void 0;
    if (null == APP) var t = new FC_DEFINE();
    else var t = APP.DEFINE;
    var a = t.SERVER_NEWURL,
      i = a + e;
    location.href = i;
  },
  GO_PAGE2 = function (e) {
    return 0 == isDefined(e)
      ? (GO_MENU("home"), void 0)
      : "soramall_event" == e
      ? (window.open("http://soramall.net/?p_id=filecast"), void 0)
      : "soramall" == e
      ? (window.open("http://soramall.net/?p_id=filecast"), void 0)
      : ((location.href = e), void 0);
  },
  GO_SEARCH = function (e, t) {
    console.log("GO_SEARCH");
    var a = "/www/search/?category=2&force_category=" + t + "&search=" + e;
    location.href = a;
  },
  GO_NEXT_PAGE = function (e, t) {
    if ((console.log("GO_NEXT_PAGE"), null == APP)) var a = new FC_DEFINE();
    else var a = APP.DEFINE;
    var i = !0,
      n = function () {
        gCookie.del(a.STORAGE.LOGIN_NEXT_PAGE),
          gCookie.del(a.STORAGE.LOGIN_NEXT_PAGE_SUB),
          gCookie.del(a.STORAGE.ADULT_NEXT_PAGE);
      },
      s = gCookie.get(a.STORAGE.LOGIN_NEXT_PAGE),
      o = gCookie.get(a.STORAGE.LOGIN_NEXT_PAGE_SUB),
      r = gCookie.get(a.STORAGE.ADULT_NEXT_PAGE);
    if (s) {
      if ("adultSinup" == s) {
        if ("1" == jQuery("#memberValidAdult").val())
          return n(), "adult" == r && GO_MENU(r), void 0;
      } else if ("realname" == s) {
        if ("1" == jQuery("#memberValidAauthentic").val())
          return n(), "adult" == r && GO_MENU(r), void 0;
        i = !1;
      } else if ("adultSinupSimple" == s) {
        if ("1" == jQuery("#memberSimpleAuth").val())
          return n(), "adult" == r && GO_MENU(r), void 0;
      } else if ("meweb" == s || "mtoon" == s)
        return n(), location.reload(), void 0;
      return (
        "coupon" == s && (i = !1),
        1 == e && (i = !0),
        1 == i &&
          (gCookie.del(a.STORAGE.LOGIN_NEXT_PAGE),
          gCookie.del(a.STORAGE.LOGIN_NEXT_PAGE_SUB),
          gCookie.del(a.STORAGE.ADULT_NEXT_PAGE)),
        1 == isDefined(o) ? GO_MENU(s, o) : GO_MENU(s),
        void 0
      );
    }
    return (
      1 == i &&
        (gCookie.del(a.STORAGE.LOGIN_NEXT_PAGE),
        gCookie.del(a.STORAGE.LOGIN_NEXT_PAGE_SUB),
        gCookie.del(a.STORAGE.ADULT_NEXT_PAGE)),
      1 == t && GO_MENU("home"),
      void 0
    );
  },
  GO_MAIN_DOMAIN_HOME = function (e, t) {
    if (
      (console.log("GO_MAIN_DOMAIN_HOME"),
      0 == isDefined(e) || 0 == isDefined(t))
    )
      (e = ""), (t = "");
    else if (1 == isDefined(e)) {
      var a = ["75411", "407363"];
      if (jQuery.inArray(e, a) >= 0) return;
    }
    var i = location.href,
      n = i.replace(/filecast.kr/i, "filecast.co.kr");
    console.log("locationHref:" + i);
    var s =
      "http://filecast.co.kr/www/user/user_auto_login/?url=" +
      encodeURIComponent(n) +
      "&user=" +
      e +
      "&token=" +
      encodeURIComponent(t);
    location.href = s;
  },
  FC_MODAL_OPEN = function (e, t, a) {
    if (
      (console.log("FC_MODAL_OPEN:" + e),
      0 == isDefined(t) && (t = !1),
      1 == isDefined(TEMPLATE_MODAL[e]))
    ) {
      var i = TEMPLATE_MODAL[e](a),
        n = "#fc-web-modal-first-div";
      if (1 == t) n = "#fc-web-modal-second-div";
      else if ("contentsViewModal" == e)
        return FC_APP_FN.openContentsView(a), void 0;
      jQuery(n).html(i),
        TEMPLATE_MODAL_FUN.setModalOnEvent(e, a),
        jQuery("#" + e).modal("show");
    } else alert("íì´ì§ ì ë³´ë¥¼ íì¸ í ë¤ì ìëí´ì£¼ì¸ì.[modal:" + e + "]");
  },
  WEB_ADULT_NOVEL = {};
(WEB_ADULT_NOVEL.DATA = {
  content_type: "JSON",
  defaultUri: "/200/1/1/",
  isDefault: !1,
  pagination: {},
  SALE_ISCROLL: null,
  NOTICE_RUN: !1,
}),
  (WEB_ADULT_NOVEL.start = function (e, t, a) {
    console.log("WEB_ADULT_NOVEL.start");
    var i = e;
    console.log(t),
      console.log(a),
      console.debug(i),
      0 == isDefined(i.url.uri) &&
        ((i.url.uri = WEB_ADULT_NOVEL.DATA.defaultUri),
        (WEB_ADULT_NOVEL.DATA.isDefault = !0));
    var n = 0,
      s = 0,
      o = t.uri.split("/");
    jQuery.inArray(1, o) && (n = o[1]),
      o.length > 2 && (s = o[2]),
      console.log(t.uri),
      "1205" == s
        ? (jQuery("#MEWebContents").show(),
          jQuery("#mtoonContents").hide(),
          jQuery("#leftContents").hide(),
          WEB_ADULT_NOVEL.onclickViewMEWeb(i))
        : (jQuery("#leftContents").show(),
          jQuery("#MEWebContents").hide(),
          jQuery("#mtoonContents").hide(),
          WEB_CONTENTS.loadData(i.url, a)),
      11 == n
        ? (WEB_CONTENTS.noticeChange("notice-adult"),
          jQuery("#contents-notice-list").hide(),
          jQuery("#contents-notice-list-adult").show())
        : (WEB_CONTENTS.noticeChange(),
          jQuery("#contents-notice-list").show(),
          jQuery("#contents-notice-list-adult").hide()),
      WEB_CONTENTS.subBanner(n);
  }),
  (WEB_ADULT_NOVEL.onclickViewMEWeb = function (e) {
    if ((console.log("WEB_ADULT_NOVEL.onclickViewMEWeb"), null == e))
      var t = new FC_APP();
    else var t = e;
    var a = null;
    if (0 == fc_check_login())
      return (
        console.log("ë¡ê·¸ì¸ í ì´ì©í´ì£¼ì¸ì."),
        alert("ë¡ê·¸ì¸ í ì´ì©í´ì£¼ì¸ì."),
        GO_MENU("meweb"),
        void 0
      );
    if (0 == fc_check_adult())
      return (
        console.log("ì±ì¸ì¸ì¦í ì´ì©í´ ì£¼ì¸ì."),
        alert("ì±ì¸ì¸ì¦í ì´ì©í´ ì£¼ì¸ì."),
        GO_MENU("adultSinup"),
        void 0
      );
    var i = function (e) {
        document.domain = "filecast.co.kr";
        var i = new Date().getTime(),
          n = e.userkey,
          s = "filecast";
        a =
          "http://" +
          s +
          ".aspw.me.co.kr/auth/?userCode=" +
          n +
          "&fw=" +
          window.innerWidth +
          "&fh=" +
          window.innerHeight +
          "&t=" +
          i +
          "&cate=main";
        var o =
          '<iframe src="' +
          a +
          '" id="meFrame" width="100%" scrolling="no" frameborder="0"" style="min-height:1408px"></iframe>';
        jQuery("#MEWebContents").html(o),
          (t.loadData = null),
          console.log(t.url.uri),
          WEB_CONTENTS.setCategory(t.url.uri);
      },
      n = {
        server: t.DEFINE.SERVER_PROTOCOL,
        uri: t.PROTOCOL.URL.CONTENTS.GET_MTON_USERKEY,
        success: i,
        error_type: !1,
        loading_bar: !1,
      };
    t.PROTOCOL.ajaxCall(n, t);
  }),
  (WEB_ADULT_NOVEL.loginUiReset = function () {
    console.log("WEB_ADULT_NOVEL.loginUiReset");
    var e = new FC_APP(),
      t = function (t) {
        e.setMember(t.member),
          e.MEMBER.setData(t.member),
          console.log("ë¦¬ì ë¡ê·¸ì¸ UI");
      },
      a = {
        server: e.DEFINE.SERVER_PROTOCOL,
        uri: e.PROTOCOL.URL.MEMBER.CHECK_LOGIN,
        success: t,
        error_type: !1,
        loading_bar: !1,
      };
    e.PROTOCOL.ajaxCall(a, e);
  });
var WEB_ADULT_MTOON = {};
WEB_ADULT_MTOON.onclickViewMtoon = function (e) {
  console.log("WEB_ADULT_MTOON.onclickViewMtoon"),
    0 == isDefined(e) && (e = "");
  var t = jQuery("#memberLoginOk").val(),
    a = null;
  if (1 == isDefined(t) && t > 0) {
    var i = jQuery("#memberValidAdult").val();
    1 > i && (alert("ì±ì¸ì¸ì¦í ì´ì©í´ ì£¼ì¸ì."), GO_MENU("adultSinup"));
    var n = function (t) {
        document.domain = "filecast.co.kr";
        var i = new Date().getTime(),
          n = t.userkey,
          s = e;
        a =
          "" == s
            ? "http://filecast.aspw.mtoon.com/auth/?userCode=" +
              n +
              "&fw=" +
              window.innerWidth +
              "&rw=" +
              window.innerHeight +
              "&t=" +
              i
            : "http://filecast.aspw.mtoon.com/auth/?userCode=" +
              n +
              "&fw=" +
              window.innerWidth +
              "&rw=" +
              window.innerHeight +
              "&t=" +
              i +
              "&mode=ep_list&svr_idx=" +
              s;
        var o =
          '<iframe src="' +
          a +
          '" id="webtoonFrame" width="100%" scrolling="no" frameborder="0" style="min-height:1408px"></iframe>';
        jQuery("#mtoonContents").html(o),
          (APP.loadData = null),
          WEB_CONTENTS.setCategory(APP.url.uri);
      },
      s = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: APP.PROTOCOL.URL.CONTENTS.GET_MTON_USERKEY,
        success: n,
        error_type: !1,
        loading_bar: !1,
      };
    return APP.PROTOCOL.ajaxCall(s, APP), void 0;
  }
  return alert("ë¡ê·¸ì¸ í ì´ì©í´ì£¼ì¸ì."), GO_MENU("mtoon"), void 0;
};
var WEB_CHARGE = {};
(WEB_CHARGE.DATA = {}),
  (WEB_CHARGE.start = function (e, t) {
    console.log("WEB_CHARGE.start"),
      console.debug(t),
      (APP = e),
      WEB_CHARGE.loadPage();
  }),
  (WEB_CHARGE.loadPage = function () {
    var e = function (e, t) {
      var a = $(e),
        i = t;
      $({ percentage: 0 })
        .stop(!0)
        .animate(
          { percentage: i },
          {
            duration: 2e3,
            step: function () {
              var e = Math.round(this.percentage);
              a.html("<b>" + e + "</b>%");
            },
          }
        )
        .promise()
        .done(function () {
          a.html("<b>" + i + "</b>%");
        });
    };
    e(".num_count42", 42),
      e(".num_count45", 45),
      e(".num_count60", 60),
      e(".num_count62", 62),
      e(".num_count65", 65),
      e(".num_count67", 67),
      e(".num_count70", 70),
      e(".num_count80", 80);
  }),
  (WEB_CHARGE.onClickPointCharge = function (e) {
    console.log("WEB_CHARGE.onClickPointCharge");
    var t = jQuery(e).data("idx"),
      a = jQuery("#fcChargePageTypeName").val();
    jQuery("#moneyIdx").val(t), WEB_CHARGE.chargeLayerCommon(e, a);
  }),
  (WEB_CHARGE.onClickFlatCharge = function (e) {
    console.log("WEB_CHARGE.onClickFlatCharge");
    var t = jQuery(e).data("idx"),
      a = jQuery(e).data("group");
    jQuery("#moneyIdx").val(t), WEB_CHARGE.chargeLayerCommon(e, a);
  }),
  (WEB_CHARGE.onClickAutoPayCharge = function (e) {
    console.log("WEB_CHARGE.onClickFlatCharge");
    var t = jQuery(e).data("idx"),
      a = jQuery(e).data("group");
    jQuery("#moneyIdx").val(t), WEB_CHARGE.chargeLayerCommon(e, a);
  }),
  (WEB_CHARGE.chargeLayerCommon = function (e, t) {
    console.log("WEB_CHARGE.chargeLayerCommon:" + t);
    var a = new FC_APP();
    if (0 == fc_check_login()) return GO_MENU("login", "modal"), void 0;
    var i = jQuery(e).data("idx"),
      n = t;
    0 == isDefined(n) && (n = jQuery("#fcChargePageTypeName").val());
    var s = { pay_idx: i, group_idx: n },
      o = function (e) {
        if (
          (console.log("successFunCharageInfo"),
          console.debug(e),
          1 == isDefined(e.member) && a.setMember(e.member),
          1 == isDefined(e.pay_info))
        ) {
          var t = e.pay_info.method;
          if (
            (1 == isDefined(e.member) &&
              ((e.pay_info.userid = e.member.idx),
              (e.pay_info.email = e.member.email)),
            "P" == t)
          ) {
            var i = TEMPLATE_MODAL.fcChargeModaComon(e);
            jQuery("#fc-web-modal-first-div").html(i),
              TEMPLATE_MODAL_FUN.setModalOnEvent(
                "fcChargeModaComon",
                e.pay_info
              ),
              jQuery("#fcChargeModaComon").modal("show");
          } else if ("F" == t) {
            var i = TEMPLATE_MODAL.fcFlatChargeModalNew(e);
            jQuery("#fc-web-modal-first-div").html(i),
              TEMPLATE_MODAL_FUN.setModalOnEvent(
                "fcFlatChargeModalNew",
                e.pay_info
              ),
              jQuery("#fcFlatChargeModalNew").modal("show");
          } else if ("A" == t) {
            var i = TEMPLATE_MODAL.fcAutopayChargeModal(e.pay_info);
            jQuery("#fc-web-modal-first-div").html(i),
              TEMPLATE_MODAL_FUN.setModalOnEvent(
                "fcAutopayChargeModal",
                e.pay_info
              ),
              jQuery("#fcAutopayChargeModal").modal("show");
          } else alert("ê²°ì  ì ë³´ê° ì³ë°ë¥´ì§ ììµëë¤.");
          jQuery("#charge_point").val(e.pay_info.real_pay_price);
        }
      },
      r = {
        server: a.DEFINE.SERVER_PROTOCOL,
        uri: a.PROTOCOL.URL.CHARGE.PAY_REF_INFO,
        success: o,
        error_type: !1,
        loading_bar: !1,
        params: s,
      };
    a.PROTOCOL.ajaxCall(r, a);
  }),
  (WEB_CHARGE.paypal_info = function () {
    window.open(
      "/www/charge/paypal_popup",
      "paypal_popup",
      "width=681,height=700,scrollbars=yes"
    );
  }),
  (WEB_CHARGE.autoPayGo = function (e, t) {
    var a = jQuery("#autopay_button");
    return 0 == a.hasClass("active")
      ? (alert("ì½ê´ì ëìë¥¼ íìì¼ í©ëë¤."), void 0)
      : 0 == isDefined(e) || 0 == isDefined(t)
      ? (alert("ì ë¬ ê°ì´ ì³ë°ë¥´ì§ ììµëë¤.B"), void 0)
      : (WEB_CHARGE.payGoNew(e, t), void 0);
  }),
  (WEB_CHARGE.autopayAgree = function () {
    var e = jQuery("#autopay_button"),
      t = e.hasClass("active");
    0 == t ? e.addClass("active") : e.removeClass("active");
  }),
  (WEB_CHARGE.chargeGo = function () {
    var e = document.getElementById("moneyIdx").value,
      t = document.getElementById("info_" + e);
    return "" == e || 19 == e || 20 == e || 21 == e || 22 == e
      ? (alert("ì¿ í°ì ì íí´ ì£¼ì¸ì."), void 0)
      : (WEB_CHARGE.chargeLayer(t), void 0);
  }),
  (WEB_CHARGE.payGoNew = function (e, t) {
    console.log("WEB_CHARGE.payGoNew"), console.log(e), console.log(t);
    var a = new FC_APP();
    if (
      0 == isDefined(t) &&
      (0 == isDefined(t) && (t = jQuery("#event_moneyIdx").val()),
      0 == isDefined(t))
    )
      return alert("ì ë¬ ê°ì´ ì³ë°ë¥´ì§ ììµëë¤.B"), void 0;
    if (0 == isDefined(e)) return alert("ì ë¬ ê°ì´ ì³ë°ë¥´ì§ ììµëë¤.A"), void 0;
    if (56 == e) {
      var i = new Date(),
        n = i.getHours();
      1 > n && (e = 4);
    } else if (100 == e) {
      var s = $("#charge_point").val();
      return (
        window.open(
          "/www/charge/mileage_popup?charge_point=" + s,
          "mileage_popup",
          "width=400 height=340"
        ),
        void 0
      );
    }
    if (30 == e) return GO_EVENT(7), void 0;
    var o = "",
      r = { method_idx: e, module_idx: o, money_idx: t };
    if (56 == e)
      var l = window.open(
        "about:blank",
        "payda",
        "width=100, height=100, scrollbars=yes"
      );
    else
      var l = window.open(
        "http://filecast.co.kr/html/pay/pay_ing_popup.html",
        "payWin",
        "width=580, height=350, scrollbars=yes"
      );
    var c = function (e) {
        if (
          (console.log("WEB_CHARGE.payGo:listSucess"),
          console.debug(e),
          6 > e.member.m_level && (1 == e.stop || 2 == e.stop))
        )
          return (
            l.close(),
            alert(
              "ì ííì  ê²°ì ìë¨ì ì ê²ì¤ ìëë¤.\në¤ë¥¸ê²°ì  ìë¨ì ì´ì©í´ ì£¼ì¸ì."
            ),
            void 0
          );
        var a = window.location.host,
          i =
            "http://" +
            a +
            decodeURIComponent(e.url) +
            "?methodIdx=" +
            e.method_idx +
            "&moneyIdx=" +
            t +
            "&is_mobile=0";
        console.log("popup_url::" + i), (l.location = i);
      },
      d = a.PROTOCOL.URL.CHARGE.CHAGE_METHOD_INFO,
      u = {
        server: a.DEFINE.SERVER_PROTOCOL,
        uri: d,
        success: c,
        error_type: !0,
        loading_bar: !1,
        params: r,
      };
    a.PROTOCOL.ajaxCall(u, a);
  }),
  (WEB_CHARGE.mileageChange = function (e) {
    if (null == t) var t = new FC_APP();
    var a = { mileage_point: e },
      i = function () {
        alert("ë§ì¼ë¦¬ì§ ì í ìë£íììµëë¤."),
          window.close(),
          (opener.location.href = t.DEFINE.SERVER_PROTOCOL + "/charge/mileage");
      },
      n = t.PROTOCOL.URL.CHARGE.MILEAGE_CHANGE,
      s = {
        server: t.DEFINE.SERVER_PROTOCOL,
        uri: n,
        success: i,
        error_type: !0,
        loading_bar: !1,
        params: a,
      };
    t.PROTOCOL.ajaxCall(s, t);
  }),
  (WEB_CHARGE.chargeHalfEventClose = function () {
    gCookie.set("charge_half_event_close", "Y", 7),
      jQuery("#fcChargeHalfEvent").modal("hide");
  }),
  (WEB_CHARGE.couponPayEventClose = function () {
    gCookie.set("coupon_pay_event_close", "Y", 7),
      jQuery("#fcCouponPayEventModal").modal("hide");
  }),
  (WEB_CHARGE.chargePayEventClose = function () {
    gCookie.set("charge_pay_event_close", "Y", 7),
      jQuery("#fcCharge1512Modal").modal("hide");
  }),
  (WEB_CHARGE.couponPayGo = function () {
    jQuery("#coupon_pay_event_info").hide(),
      jQuery("#coupon_pay_event_pay").show();
  }),
  (WEB_CHARGE.chargePay1601EventClose = function () {
    gCookie.set("charge_pay_event_1601", "Y", 7),
      jQuery("#fcModalCharge1601").modal("hide");
  }),
  (WEB_CHARGE.newyearGift = function () {
    jQuery("#gift_layer_1601").show();
  }),
  (WEB_CHARGE.BANKDA = {}),
  (WEB_CHARGE.BANKDA.view = function () {
    console.log("WEB_CHARGE.BANKDA.view");
    var e = function () {
      var e = 466,
        t = 698;
      window.resizeTo(e, t);
    };
    e(), WEB_CHARGE.BANKDA.inputFormValidate();
  }),
  (WEB_CHARGE.BANKDA.inputFormValidate = function () {
    console.log("WEB_CHARGE.BANKDA.inputFormValidate");
    var e = new FC_APP(),
      t = e.DEFINE.SERVER_SSL_PROTOCOL + e.PROTOCOL.URL.CHARGE.PAY_BANKBOOK,
      a = function (e) {
        $.param(e);
        var t = {};
        for (var a in e) {
          var i = e[a].name;
          t[i] = e[a].value;
        }
        if (
          (console.debug(t), 0 == isDefined(t.bank_name) || "" == t.bank_name)
        )
          return (
            alert("ìê¸ ìíì ì íí´ì£¼ì¸ì."), jQuery("#bank_name").focus(), !1
          );
        if (0 == isDefined(t.bank_input_name) || "" == t.bank_input_name)
          return (
            alert("ìê¸ìëªì ìë ¥í´ì£¼ì¸ì."),
            jQuery("#bank_input_name").focus(),
            !1
          );
        if (0 == isDefined(t.phone_2) || "" == t.phone_2)
          return (
            alert("í´ëí° ë²í¸ë¥¼ ìë ¥í´ì£¼ì¸ì."),
            jQuery("#bank_phone_2").focus(),
            !1
          );
        if (0 == isDefined(t.phone_3) || "" == t.phone_3)
          return (
            alert("í´ëí° ë²í¸ë¥¼ ìë ¥í´ì£¼ì¸ì."),
            jQuery("#bank_phone_3").focus(),
            !1
          );
        var n = jQuery("#bank_agree").is(":checked");
        return 0 == n
          ? (alert("ì´ì©ì½ê´ê³¼ ê°ì¸ì ë³´ ì·¨ê¸ë°©ì¹¨ì ëìí´ì¼ë§ í©ëë¤."),
            jQuery("#bank_agree").focus(),
            !1)
          : !0;
      },
      i = function (e) {
        console.log("errStatusMsg"), alert(e);
      },
      n = function (e) {
        console.log("successJoinFormFun");
        var t = e;
        if (
          (console.debug("====="),
          console.debug(t),
          1 != parseInt(t.status.code))
        )
          return i(t.status.message), void 0;
        if (
          (jQuery("#fc-web-bankbook-input-step-one").hide(),
          1 == isDefined(t.result.pay_info))
        ) {
          var a = t.result.pay_info,
            n = jQuery("#fc-web-bankbook-input-step-two");
          n.find(".pay-title").html(a.pay_title);
          var s = fc_number_format(a.input_price);
          n.find(".pay-price").html(s + "ì"),
            n.find(".pay-bank-name").html(a.bank_name),
            n.find(".pay-bank-account").html(a.show_bank_account),
            n.find(".pay-bank-owner").html(a.bank_owner),
            n.find(".input-user-name").html(a.input_name),
            n.find(".input-user-tel").html(a.input_tel);
        }
        return n.show(), void 0;
      },
      s = {
        target: "#fc-web-bankbook-input-step-one",
        beforeSubmit: a,
        success: n,
        url: t,
        dataType: "jsonp",
      };
    $("#fc-web-bankbook-input").ajaxForm(s);
  }),
  (WEB_CHARGE.flatLayerNew = function (e) {
    console.log("WEB_CHARGE.flatLayerNew");
    var t = jQuery(e).data("idx"),
      a = jQuery(e).data("prime_price"),
      i = jQuery(e).data("real_pay_price"),
      n = jQuery(e).data("days"),
      s = jQuery(e).data("point"),
      o = { idx: t, prime_price: a, real_pay_price: i, days: n, point: s };
    console.debug(o), jQuery("#moneyIdx").val(t);
    var r = TEMPLATE_MODAL.fcFlatChargeModalNew(o);
    jQuery("#fc-web-modal-first-div").html(r),
      TEMPLATE_MODAL_FUN.setModalOnEvent("fcFlatChargeModalNew", o),
      jQuery("#fcFlatChargeModalNew").modal("show");
  }),
  (WEB_CHARGE.autopayLayer = function (e) {
    var t = e.getAttribute("data-idx"),
      a = e.getAttribute("data-real_pay_price"),
      i = 45;
    "9" == t
      ? (i = 45)
      : "80" == t
      ? (i = 50)
      : "81" == t
      ? (i = 47)
      : "82" == t && (i = 48);
    var n = { idx: t, real_pay_price: a, salePer: i };
    jQuery("#moneyIdx").val(t);
    var s = TEMPLATE_MODAL.fcAutopayChargeModal(n);
    jQuery("#fc-web-modal-first-div").html(s),
      TEMPLATE_MODAL_FUN.setModalOnEvent("fcAutopayChargeModal", n),
      jQuery("#fcAutopayChargeModal").modal("show");
  }),
  (WEB_CHARGE.pointPark = function (e) {
    console.log("WEB_CHARGE.pointPark");
    var t = jQuery(e).data("type");
    document.domain = "filecast.co.kr";
    var a = new FC_APP(),
      i = window.open(
        "about:blank",
        "DRMOKWindow",
        "width=425, height=550, resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=435, top=100"
      ),
      n = function (e) {
        if ((console.debug(e), 1 == e.result.login)) {
          var a = e.result.email;
          if ((e.result.userid, "okCash" == t))
            var n =
              "http://okcashbag.mecross.co.kr/popup_auth.php?m_code=dual&a_code=o_filecast&user_id=" +
              a;
          else if ("cardMileage" == t)
            var n =
              "http://mobilecheck.mecross.co.kr/event_mobile/cert.php?m_code=dual_mobile&a_code=s_filecast&userid=" +
              a;
          return console.log(n), (i.location = n), void 0;
        }
        return i.close(), GO_MENU("login"), void 0;
      },
      s = {
        server: a.DEFINE.SERVER_PROTOCOL,
        uri: a.PROTOCOL.URL.EVENT.AUTH_LOGIN_CHECK,
        success: n,
        error_type: !1,
        loading_bar: !1,
        params: {},
      };
    a.PROTOCOL.ajaxCall(s, a);
  });
var WEB_CONTENTS = {};
(WEB_CONTENTS.DATA = {
  content_type: "JSON",
  defaultUri: "/200/1/1/",
  isDefault: !1,
  pagination: {},
  SALE_ISCROLL: null,
  NOTICE_RUN: !1,
  rollingTimer: null,
}),
  (WEB_CONTENTS.start = function (e, t, a) {
    console.log("WEB_CONTENTS.start"),
      (APP = e),
      console.log(t),
      console.log(a),
      console.debug(APP.url),
      0 == isDefined(APP.url.uri) &&
        ((APP.url.uri = WEB_CONTENTS.DATA.defaultUri),
        (WEB_CONTENTS.DATA.isDefault = !0));
    var i = 0,
      n = 0,
      s = 0,
      o = t.uri.split("/");
    jQuery.inArray(1, o) && (i = o[1]),
      o.length > 2 && (n = o[2]),
      o.length > 4 && (s = o[4]),
      console.log("ì²´í¬ë©¤ë²"),
      "1203" == n
        ? (jQuery("#mtoonContents").show(),
          jQuery("#MEWebContents").hide(),
          jQuery("#leftContents").hide(),
          WEB_ADULT_MTOON.onclickViewMtoon(s))
        : "1205" == n
        ? (jQuery("#MEWebContents").show(),
          jQuery("#mtoonContents").hide(),
          jQuery("#leftContents").hide(),
          WEB_ADULT_NOVEL.start(APP, t, a))
        : (jQuery("#leftContents").show(),
          jQuery("#MEWebContents").hide(),
          jQuery("#mtoonContents").hide(),
          WEB_CONTENTS.loadData(APP.url, a)),
      11 == i
        ? (WEB_CONTENTS.noticeChange("notice-adult"),
          jQuery("#contents-notice-list").hide(),
          jQuery("#contents-notice-list-adult").show())
        : (WEB_CONTENTS.noticeChange(),
          jQuery("#contents-notice-list").show(),
          jQuery("#contents-notice-list-adult").hide()),
      WEB_CONTENTS.subBanner(i);
  }),
  (WEB_CONTENTS.noticeChange = function (e) {
    if (1 == isDefined(e) && "notice-adult" == e)
      var t = "contents-notice-list-adult";
    else var t = "contents-notice-list";
    var a = 0,
      i = $("#" + t + " li").length,
      n = Math.floor(Math.random() * (i - a)) + a;
    $("#" + t + " li").hide(),
      $("#" + t + " li")
        .eq(n)
        .show();
  }),
  (WEB_CONTENTS.noticeRolling = function () {
    var e = function () {
      WEB_CONTENTS.DATA.NOTICE_RUN = !0;
      var e = $("#contents-notice-list");
      e.animate({ marginTop: "-17px" }, 0, null, function () {
        e.css("marginTop", "0px").append(e.find("> li:first"));
      });
    };
    0 == WEB_CONTENTS.DATA.NOTICE_RUN && setInterval(e, 3500);
  }),
  (WEB_CONTENTS.loadData = function (e, t) {
    console.log("WEB_CONTENTS.loadPage"),
      console.debug(APP.url),
      (e.params.content_type = WEB_CONTENTS.DATA.content_type);
    var a = {
      url: APP.PROTOCOL.URL.CONTENTS.CLIST + APP.url.uri,
      param: e.params,
    };
    if (
      (1 == isDefined(APP.loadData) &&
        (0 == isDefined(APP.loadData.main) ||
          0 == isDefined(APP.loadData.sub)) &&
        (APP.loadData = null),
      1 == isDefined(APP.url.uri))
    ) {
      var i = location.hash.split("/");
      APP.url.uri.split("/"),
        console.debug(i),
        console.log("open view"),
        console.debug(i);
      var n = !1;
      if (i.length > 6 && ("view" == i[4] || "view2" == i[4])) {
        var s = 1;
        "view2" == i[4] && (s = 2);
        var o = i[1],
          r = parseInt(jQuery("#memberValidAdult").val());
        if (11 == parseInt(o) && 1 != r)
          return console.debug(r), GO_MENU("adultSinup"), void 0;
        (n = !0), FC_APP_FN.openContentsView(i[5], null, s);
      }
      if (
        APP.SELECTED.main == i[1] &&
        APP.SELECTED.sub == i[2] &&
        APP.SELECTED.page == i[3]
      )
        return console.log("just open view"), void 0;
      1 == i[1]
        ? (jQuery("#fc-right-hot-issue").show(),
          null != WEB_HOME.DATA.SET_TIMER &&
            (clearInterval(WEB_HOME.DATA.SET_TIMER),
            (WEB_HOME.DATA.SET_TIMER = null)),
          WEB_HOME.setHotIssueBanner(APP))
        : (jQuery("#fc-right-hot-issue").hide(),
          null != WEB_HOME.DATA.SET_TIMER &&
            (clearInterval(WEB_HOME.DATA.SET_TIMER),
            (WEB_HOME.DATA.SET_TIMER = null))),
        2 == i[1]
          ? WEB_HOME.setBCrating()
          : jQuery("#fc-nilsen-broadcasting-rank").hide();
    }
    WEB_CONTENTS.setCategory(APP.url.uri),
      WEB_CONTENTS.setPageBind(),
      0 == isDefined(t)
        ? WEB_CONTENTS.getPageData(a, !0)
        : "SEO" != t.SEO && WEB_CONTENTS.getPageData(a, !0);
  }),
  (WEB_CONTENTS.setCategory = function (e) {
    console.log("set category"), console.debug(APP.loadData);
    var t = 200,
      a = 1,
      i = 1;
    if (APP.loadData)
      (t = APP.loadData.main), (a = APP.loadData.sub), (i = APP.loadData.page);
    else {
      var n = e.split("/");
      jQuery.inArray(1, n) && (t = n[1]),
        jQuery.inArray(2, n) && (a = n[2]),
        jQuery.inArray(3, n) && (i = n[3]);
    }
    if (1 == isDefined(APP.fc_category)) var s = APP.fc_category;
    else var s = new FC_CATEGORY();
    s.cateName[t];
    var o = s.cateType[t],
      r = s.getCategorySubList(t),
      l = s.getCategorySubLength(t),
      c = function (e, i, n) {
        var o = "";
        e.key == a && (o = "active");
        var r = APP.DEFINE.LINK.NEW.CONTENTS + "/#!/" + t + "/" + e.key + "/1/",
          l = "";
        return (
          1 == APP.ADULT_OPEN
            ? (l +=
                "1204" == e.key
                  ? '<li class="menu-cate2 hand"><a href="http://www.soramall.kr/intro.php?p_id=filecast" target="_blank" style="text-decoration:none;color:#24b6e5;">ì±ì¸ì©í ìë¼ëª°</a><span class="mouse_on"></span></li>'
                  : "1203" == e.key
                  ? e.key == a
                    ? '<li class="menu-cate2 hand ' +
                      o +
                      '" data-main="' +
                      t +
                      '" data-sub="' +
                      e.key +
                      '"><a onclick="WEB_CONTENTS.onclickViewMtoon();">' +
                      e.name +
                      '</a><span class="mouse_on"></span></li>'
                    : '<li class="menu-cate2 hand ' +
                      o +
                      '" data-main="' +
                      t +
                      '" data-sub="' +
                      e.key +
                      '"><a href="' +
                      r +
                      '" style="text-decoration:none;color:#24b6e5;">' +
                      e.name +
                      '</a><span class="mouse_on"></span></li>'
                  : "1205" == e.key
                  ? '<li class="menu-cate2 hand ' +
                    o +
                    '" data-main="' +
                    t +
                    '" data-sub="' +
                    e.key +
                    '"><a href="' +
                    r +
                    '" style="text-decoration:none;color:#24b6e5;">' +
                    e.name +
                    '</a><span class="mouse_on"></span></li>'
                  : '<li class="menu-cate2 hand ' +
                    o +
                    '" data-main="' +
                    t +
                    '" data-sub="' +
                    e.key +
                    '"><a href="' +
                    r +
                    '">' +
                    e.name +
                    '</a><span class="mouse_on"></span></li>')
            : 0 > jQuery.inArray(e.key, s.adult_keys) &&
              (l +=
                '<li class="menu-cate2 hand ' +
                o +
                '" data-main="' +
                t +
                '" data-sub="' +
                e.key +
                '"><a href="' +
                r +
                '">' +
                e.name +
                '</a><span class="mouse_on"></span></li>'),
          n - 1 > i && (l += '<li class="bar">|</li>'),
          l
        );
      },
      d = [],
      u = 0;
    for (var _ in r)
      0 != APP.DEFINE.OPEN_NOVEL_CATEGORY || ("1202" != r[_].key && "12" != t)
        ? (d.push(c(r[_], u, l)), u++)
        : l--;
    if (
      (jQuery("#cotentsMainCateTitle").removeClass(
        "movie broadcast ani book game utility music education image adult free etc best"
      ),
      jQuery("#cotentsMainCateTitle").addClass(o),
      jQuery("#subCategoryDepth").html(d.join("")),
      (APP.SELECTED.main = parseInt(t)),
      (APP.SELECTED.sub = parseInt(a)),
      (APP.SELECTED.page = parseInt(i)),
      FC_APP_FN.setBindLeftMenuActive(o, t),
      APP.setAdultContes(),
      FC_APP_FN.setBindSubCateMenu(),
      parseInt(t) > 99)
    )
      var p = 0;
    else var p = t;
    var m = jQuery("#fc-right-rank-top-best").data("cate");
    parseInt(p) != parseInt(m) && WEB_CONTENTS.setRankListRealTime(p, 10);
    var m = jQuery("#fc-right-rank-top-yesterday").data("cate");
    parseInt(p) != parseInt(m) && WEB_CONTENTS.setRankListYesterday(p, 10);
  }),
  (WEB_CONTENTS.setRankListRealTime = function (e, t) {
    console.log("WEB_CONTENTS : setRankListRealTime");
    var a = new FC_APP(),
      i = { cate1: e, limit: t },
      n = function (t) {
        console.log("successHttpRealRankingList"), console.debug(t);
        for (var a = t.send_data.bbs, i = [], n = 0; a.length > n; n++) {
          var s = new Ranklist(a[n], n, "real");
          i.push(s.listRealHtml());
        }
        jQuery("#fc-right-rank-top-best").html(i.join("")),
          jQuery("#fc-right-rank-top-best").data("cate", e),
          utility.ui.checkNonImg(
            "#fc-right-rank-top-best li > .list_sumimg",
            "bg"
          ),
          console.debug(r);
        var o = "ìºì¤í¸";
        if (0 == e || 11 == e || e > 99) o = "ìºì¤í¸";
        else {
          var r = new FC_CATEGORY();
          isDefined(r.cateName[e]) && (o = r.cateName[e]);
        }
        jQuery(".fc-rank-tit-where-cate").html(o + "ìì");
      },
      s = {
        server: a.DEFINE.SERVER_PROTOCOL,
        uri: a.PROTOCOL.URL.CONTENTS.RANK_REALTIME,
        success: n,
        error_type: !1,
        loading_bar: !1,
        params: i,
      };
    a.PROTOCOL.ajaxCall(s, a);
  }),
  (WEB_CONTENTS.setRankListYesterday = function (e, t) {
    console.log("WEB_CONTENTS : setRankListYesterday");
    var a = new FC_APP(),
      i = { cate1: e, limit: t },
      n = function (t) {
        console.log("successHttpYestdayRankingList"), console.debug(t);
        for (var a = t.send_data.bbs, i = [], n = 0; a.length > n; n++) {
          var s = new Ranklist(a[n], n, "yester");
          i.push(s.listYesterHtml());
        }
        jQuery("#fc-right-rank-top-yesterday").html(i.join("")),
          jQuery("#fc-right-rank-top-yesterday").data("cate", e);
      },
      s = {
        server: a.DEFINE.SERVER_PROTOCOL,
        uri: a.PROTOCOL.URL.CONTENTS.RANK_YESTERDAY,
        success: n,
        error_type: !1,
        loading_bar: !1,
        params: i,
      };
    a.PROTOCOL.ajaxCall(s, a);
  }),
  (WEB_CONTENTS.contentsPaging = function (e, t) {
    console.log("contentsPaging"),
      jQuery("#fc_paging").empty(),
      jQuery("#fc_paging").html(
        '<ul id="pagination-contents" class="pagination-sm">'
      );
    var a = 15;
    if (0 == t) {
      var a = 1;
      jQuery("#fc_paging").empty();
    }
    var i = function (e, t) {
      APP.setNewSelectUri(t);
      var a = { url: APP.PROTOCOL.URL.CONTENTS.CLIST + APP.url.uri };
      WEB_CONTENTS.getPageData(a, !1);
    };
    jQuery("#pagination-contents").twbsPagination({
      startPage: e.page,
      onPageClick: i,
      visiblePages: a,
      totalPages: e.total_page,
    });
  }),
  (WEB_CONTENTS.getPageData = function (e, t) {
    console.log("getPageData");
    var a = new FC_APP();
    null == a.fc_category && (a.fc_category = new FC_CATEGORY());
    var i = function (e) {
      console.log("WEB_CONTENTS.getPageData "), console.debug(e);
      try {
        jQuery(
          ".select_order[data-sort='" + e.send_data.select_order + "']"
        ).addClass("active"),
          jQuery("#changePageCount")
            .val(e.send_data.page_count)
            .prop("selected", !0);
        var i = {
            list: e.send_data.bbs.list,
            limit: parseInt(e.send_data.bbs.limit),
            page: parseInt(e.send_data.bbs.page),
            total_page: parseInt(e.send_data.bbs.total_page),
            new_time: e.send_data.bbs.new_time,
          },
          n = [],
          s = 0,
          o = {},
          r = {},
          l = !1;
        jQuery("#non-adult-merge-opt").html("20ê°ì©"),
          (1 == isDefined(e.send_data.main) ||
            1 == isDefined(e.send_data.sub)) &&
            11 == e.send_data.main &&
            1101 == e.send_data.sub &&
            "sort" == e.send_data.select_order &&
            11 > e.send_data.page &&
            ((l = !0), jQuery("#non-adult-merge-opt").html("30ê°ì©"));
        var c = [];
        for (var d = 0 in i.list)
          (o[s] = new Contentslist(i.list[d], i.new_time, d)),
            1 == isDefined(e.fc_event.sale) &&
              o[s].setSaleEventData(e.fc_event.sale),
            11 == i.list[d].cate1 &&
              "1" == i.list[d].chkcopy &&
              (i.list[d].purchase_cnt = 0),
            -1 == jQuery.inArray(i.list[d].idx, c) &&
              ((r[d] = parseInt(i.list[d].purchase_cnt)),
              n.push(o[s].contentsHtmlList(a.fc_category.cateName)),
              c.push(i.list[d].idx),
              s++);
        parseInt(i.total_page) > 1
          ? 1 == t && WEB_CONTENTS.contentsPaging(i, !0)
          : jQuery("#fc_paging").empty(),
          jQuery("#contentsListTbody").empty();
        var u = jQuery("#contentsListTbody").html(n.join(""));
        if (
          (console.log("getHowRecommend____in"),
          WEB_CONTENTS.getHowRecommend(),
          console.log("getHowRecommend____out"),
          99 > e.send_data.main && e.send_data.main > 0)
        )
          for (var _ = sortObject(r), p = 0; _.length > p; p++) {
            var m = utility.ui.getBbsTitleStyle(p + 1, _.length),
              h = _[p].key;
            _[p].value > 0 &&
              jQuery(".fc-contents-list-tit:eq(" + h + ")")
                .removeClass("z_color")
                .addClass(m);
          }
        return (
          WEB_CONTENTS.setListBind(),
          FC_APP_FN.setBindLeftMenu(a),
          WEB_CONTENTS.setListTopText(a, e.send_data.select_order),
          FC_APP_FN.setHomeContentsImgLazy(),
          $("html,body").scrollTop(0),
          void 0
        );
      } finally {
        (n = null), (s = null), (o = null), (i = null), (u = null);
      }
    };
    if (APP.loadData) {
      var n = APP.loadData;
      (e.url =
        APP.PROTOCOL.URL.CONTENTS.CLIST +
        "/" +
        n.main +
        "/" +
        n.sub +
        "/" +
        n.page +
        "/"),
        (APP.loadData = null);
    }
    var s = {
      server: a.DEFINE.SERVER_PROTOCOL,
      uri: e.url,
      success: i,
      error_type: !0,
      loading_bar: !0,
      params: e.param,
    };
    a.PROTOCOL.ajaxCall(s, a);
  }),
  (WEB_CONTENTS.setPageBind = function () {
    jQuery(".select_order").removeClass("active"),
      jQuery(".select_order").unbind("click"),
      jQuery(".select_order").bind("click", function () {
        var e = jQuery(this).data("sort");
        if ("is_non_my" == e && 0 == fc_check_login())
          return GO_MENU("login"), void 0;
        jQuery(".select_order").removeClass("active"),
          jQuery(this).addClass("active");
        var t = { select_order: e },
          a = { url: APP.PROTOCOL.URL.CONTENTS.CLIST + APP.url.uri, param: t };
        console.debug(a), WEB_CONTENTS.getPageData(a, !0);
      }),
      jQuery("#changePageCount").change(function () {
        jQuery("#changePageCount option:selected").each(function () {
          var e = jQuery(this).val(),
            t = {
              url: APP.PROTOCOL.URL.CONTENTS.CLIST + APP.url.uri,
              param: { page_count: e },
            };
          WEB_CONTENTS.getPageData(t, !0);
        });
      });
  }),
  (WEB_CONTENTS.setListBind = function () {}),
  (WEB_CONTENTS.setListTopText = function (e, t) {
    console.log("setListTopText:" + t);
    var a = e.SELECTED.main,
      i = e.SELECTED.sub;
    200 == a && (t = "rank");
    var n = e.fc_category,
      s = n.cateName[a] + ">" + n.cateName[i];
    0 == i && (s = n.cateName[a]);
    var o = n.getSortOrderName(t),
      r =
        'íì¬ <span class="cate">' +
        s +
        '</span> ë¶ë¥ ìë£ë¥¼ <span class="sub_tab">' +
        o +
        "</span> ì ë ¬ë¡ ë³´ê³  ê³ì­ëë¤.";
    jQuery(".now_txt").html(r);
  }),
  (WEB_CONTENTS.VIEW = {}),
  (WEB_CONTENTS.VIEW.openContentsView = function (e) {
    return (
      console.log("WEB_CONTENTS.VIEW.openContentsView"),
      0 == isDefined(e)
        ? (alert("ìì²­í ë°ì´íë¥¼ ì°¾ì ì ììµëë¤."), void 0)
        : (jQuery("#loadViewContents").empty(),
          jQuery("#loadViewContents").html(e),
          1 == jQuery("#contentsViewModal").hasClass("in")
            ? (console.log("modal yet"),
              setTimeout(function () {
                WEB_CONTENTS.VIEW.loadContentsView();
              }, 500))
            : jQuery("#contentsViewModal").modal("show"),
          void 0)
    );
  }),
  (WEB_CONTENTS.VIEW.loadContentsView = function (e) {
    console.log("WEB_CONTENTS.VIEW.loadContentsView"),
      WEB_CONTENTS.VIEW.openContentsViewBind(),
      WEB_CONTENTS.VIEW.setCommentList(1, !0),
      WEB_CONTENTS.VIEW.setSellerContentsList(1),
      WEB_CONTENTS.VIEW.setBroadCastList(!0),
      WEB_CONTENTS.VIEW.setPurchaseGraph();
    var t = !0;
    1 == isDefined(e) && (t = !1),
      window.setTimeout(function () {
        loadVideoPreviw("#view-video-js-preview-contents", t);
      }, 500),
      jQuery("#contentsViewModal").scrollTop(0);
  }),
  (WEB_CONTENTS.VIEW.getContentsViewFromOtherList = function (e) {
    var t = $(e).data("idx");
    if (0 == isDefined(t))
      return alert("ì ë³´ê° ì¬ë°ë¥´ì§ ììµëë¤. íì¸í ë¤ì ìëí´ ì£¼ì¸ì."), void 0;
    if (1 == jQuery(e).hasClass("fc-adult-open")) {
      if (0 == fc_check_login()) return GO_MENU("login", "modal"), void 0;
      var a = parseInt(jQuery("#memberValidAdult").val());
      if (1 != a) return GO_MENU("adultSinup", "modal"), void 0;
    }
    $(".view-seller-contents-list").removeClass("active"),
      $(e).find(".view-seller-contents-list").addClass("active"),
      WEB_CONTENTS.VIEW.getContentsViewOnView(t);
  }),
  (WEB_CONTENTS.VIEW.getContentsViewOnView = function (e) {
    if ((console.log("WEB_CONTENTS.getContentsViewOnView"), 0 == isDefined(e)))
      return alert("ì ë³´ê° ì¬ë°ë¥´ì§ ììµëë¤. íì¸í ë¤ì ìëí´ ì£¼ì¸ì."), void 0;
    var t = new FC_APP(),
      a = function (e) {
        console.log("successHttpGetViewhtml"),
          console.log(e),
          jQuery("#fc-contents-view-info-div").html(e),
          $("#contentsViewModal").scrollTop(0),
          window.setTimeout(function () {
            loadVideoPreviw("#view-video-js-preview-contents", !1),
              WEB_CONTENTS.VIEW.setCommentList(1, !0),
              WEB_CONTENTS.VIEW.setPurchaseGraph();
          }, 500);
      };
    t.DEFINE.AJAX_HTTP_TYPE = "html";
    var i = {
      server: t.DEFINE.SERVER_PROTOCOL,
      uri: t.PROTOCOL.URL.CONTENTS.VIEW + "/" + e + "/",
      success: a,
      error_type: !1,
      loading_bar: !1,
      params: { target: "view" },
    };
    t.PROTOCOL.ajaxCall(i, t);
  }),
  (WEB_CONTENTS.VIEW.setCommentList = function (e, t) {
    if (
      (console.log("setCommentList:" + t), !(1 > jQuery("#bbsBoardIdx").length))
    ) {
      var a = jQuery("#bbsBoardIdx").val(),
        i = "bbs-contetns-comment-list",
        n = jQuery("#bbs-comment-get-more");
      (1 == t || 1 == e) && (COMMENT_DATA.ORDER = 0);
      var s = {
        bbs_type: "bbs",
        bbs_idx: a,
        page: e,
        limit: n.data("limit"),
        m_idx: jQuery("#memberLoginOk").val(),
        m_level: jQuery("#memberValidLevel").val(),
        owner_idx: jQuery("#bbsOwenerIdx").val(),
        view_type: jQuery("#bbsViewType").val(),
        loadFirst: t,
      };
      if ((console.debug(s), 0 == isDefined(s.bbs_idx)))
        return (
          fc_alert("ì»¨íì¸  ë²í¸ë¥¼ ì°¾ì ì ììµëë¤. íì¸í ë¤ì ìëí´ ì£¼ì¸ì."),
          void 0
        );
      var o = function (e) {
        console.log("successHttpGetCommentList"), console.debug(e);
        for (
          var a = e.comment_list.list, o = [], r = 0, l = 0;
          a.length > l;
          l++
        ) {
          var c = new Commentlist(s.bbs_type, a[l], COMMENT_DATA.ORDER, s);
          o.push(c.listViewHtml()),
            c.idx > r && (r = c.idx),
            COMMENT_DATA.ORDER++;
        }
        var d = {
          limit: e.comment_list.limit,
          page: e.comment_list.page,
          total_count: e.comment_list.total_count,
          total_page: e.comment_list.total_page,
          total: e.comment_list.total_page,
          last_idx: r,
        };
        if (
          (1 == s.page && 1 == t
            ? jQuery("#" + i).html(o.join(""))
            : jQuery("#" + i).append(o.join("")),
          d.total_page > d.page)
        ) {
          var u = parseInt(d.total_count) - parseInt(d.limit);
          n.find(".c_count").text(u), n.data(d).show();
        } else n.hide();
      };
      1 == t
        ? COMMENTLIST_FUN.getCommentList(
            s.bbs_type,
            s.bbs_idx,
            s.page,
            s.limit,
            o
          )
        : COMMENTLIST_FUN.getCommentMoreAllList(
            s.bbs_type,
            s.bbs_idx,
            s.page,
            s.limit,
            o
          );
    }
  }),
  (WEB_CONTENTS.getBbsMoreAllCommentList = function (e) {
    console.log("==COMMENTLIST_FUN.getBbsMoreCommentList===");
    var t = {
        type: jQuery(e).data("type"),
        link_idx: jQuery("#bbsBoardIdx").val(),
        page: parseInt(jQuery(e).data("page")),
        total_page: parseInt(jQuery(e).data("total_page")),
        limit: jQuery(e).data("limit"),
        m_idx: jQuery("#memberLoginOk").val(),
        m_level: jQuery("#memberValidLevel").val(),
        ele: "bbs-contetns-comment-list",
        owner_idx: jQuery("#bbsOwenerIdx").val(),
      },
      a = t.page + 1;
    a > 2 || WEB_CONTENTS.VIEW.setCommentList(a);
  }),
  (WEB_CONTENTS.setCommentListPaging = function () {
    console.log("WEB_CONTENTS.setCommentListPaging");
    var e = jQuery("#fc-comment-pagination-info"),
      t = { total: e.data("total"), page: e.data("page") };
    if ((console.debug(t), 2 > t.total))
      return jQuery("#fc-comment-list-pagination-div").empty(), void 0;
    jQuery("#fc-comment-list-pagination-div").html(
      '<ul id="view-comment-pagination-contents" class="pagination-sm">'
    );
    var a = 10;
    if (1 > t.total) {
      var a = 1;
      jQuery("#fc-comment-list-pagination-div").empty();
    }
    var i = function (e, a) {
      console.log(a), console.debug(t), WEB_CONTENTS.VIEW.setCommentList(a, !1);
    };
    $("#view-comment-pagination-contents").twbsPagination({
      startPage: t.page,
      onPageClick: i,
      visiblePages: a,
      totalPages: t.total,
    });
  }),
  (WEB_CONTENTS.getFreeTopContentsData = function (e) {
    console.log("WEB_CONTENTS.getFreeTopContentsData");
    var t = "#fc-contetns-copy-sale-top",
      a = {
        page: e,
        limit: jQuery(t).data("limit"),
        sort: jQuery(t).data("sort"),
        total_page: jQuery(t).data("total_page"),
      };
    if (parseInt(a.total_page) < parseInt(e))
      return alert("íì´ì§ì ë§ì§ë§ìëë¤."), void 0;
    var i = function (a) {
        console.debug(a);
        var i = a.free_data.list;
        if (!(1 > i.length)) {
          for (var n = [], s = 0; i.length > s; s++) {
            var o = TEMPLATE_FUN.freeContentsTopListHtml(i[s]);
            n.push(o);
          }
          if (
            (parseInt(a.free_data.page),
            "1" == e
              ? jQuery(t).find(".fc-contetns-copy-sale-top-ul").html(n.join(""))
              : jQuery(t)
                  .find(".fc-contetns-copy-sale-top-ul")
                  .append(n.join("")),
            jQuery(t).data("page", a.free_data.page),
            jQuery(t).data("sort", a.free_data.sort),
            jQuery(t).data("loaded", "1"),
            null != WEB_CONTENTS.DATA.SALE_ISCROLL)
          ) {
            var r = jQuery(".fc-contetns-copy-sale-top-li").length,
              l = 134 * r;
            jQuery(t).find("fc-contetns-copy-sale-top-ul").width(l),
              setTimeout(function () {
                WEB_CONTENTS.DATA.SALE_ISCROLL.refresh();
              }, 500);
          } else WEB_CONTENTS.setFreeTopContentsListIscroll(!0);
        }
      },
      n = new FC_APP(),
      s = {
        server: n.DEFINE.SERVER_PROTOCOL,
        uri: n.PROTOCOL.URL.CONTENTS.FREE_TOP_LIST,
        success: i,
        error_type: !1,
        loading_bar: !0,
        params: a,
      };
    n.PROTOCOL.ajaxCall(s, n);
  }),
  (WEB_CONTENTS.setFreeTopContentsListIscroll = function (e) {
    console.log("WEB_CONTENTS.setFreeTopContentsListIscroll"),
      (WEB_CONTENTS.DATA.SALE_ISCROLL = null);
    var t = "#fc-contetns-copy-sale-top-iscroll";
    if (!(1 > jQuery(".fc-contetns-copy-sale-top-li").length)) {
      if (0 == e && null != WEB_CONTENTS.DATA.SALE_ISCROLL)
        return WEB_CONTENTS.DATA.SALE_ISCROLL.refresh(), void 0;
      var a = jQuery(t).find(".fc-contetns-copy-sale-top-li").length;
      jQuery(t).width(804),
        jQuery(t)
          .find(".fc-contetns-copy-sale-top-ul")
          .width(134 * a),
        (WEB_CONTENTS.DATA.SALE_ISCROLL = null),
        (WEB_CONTENTS.DATA.SALE_ISCROLL = new IScroll(t, {
          scrollX: !0,
          scrollY: !1,
          mouseWheel: !1,
          momentum: !1,
          snap: !0,
        }));
      var i = function (e, t, a) {
        6 >= a ||
          (console.log("bindContetnsViewIScrollBtn"),
          jQuery("#fc-contetns-copy-sale-top-btn .prev").unbind("click"),
          jQuery("#fc-contetns-copy-sale-top-btn .prev").bind(
            "click",
            function () {
              e.prev();
            }
          ),
          jQuery("#fc-contetns-copy-sale-top-btn .next").unbind("click"),
          jQuery("#fc-contetns-copy-sale-top-btn .next").bind(
            "click",
            function () {
              e.next();
            }
          ));
      };
      i(WEB_CONTENTS.DATA.SALE_ISCROLL, t, a);
    }
  }),
  (WEB_CONTENTS.VIEW.openContentsViewBind = function () {
    if (
      (console.log("openContentsViewBind"), 1 > jQuery("#bbsBoardIdx").length)
    )
      return jQuery("#contentsViewModal").modal("hide"), void 0;
    var e = !1,
      t = !1,
      a = !0,
      n = IsBrowserIE_FC();
    IsBrowserChrome_FC();
    var s = isOsWindoww8(),
      o = utility.ui.viewport();
    console.log("isWin8" + s),
      console.log("ver:" + _FC_BrowserRuntimeVersion),
      jQuery("#contentsViewModal").unbind("scroll"),
      jQuery("#contentsViewModal").bind("scroll", function () {
        var i = jQuery("#contentsViewModal").scrollTop(),
          r = jQuery("#contents-view-top-title");
        jQuery(".btn_v_top").css({ top: i + 0.88 * o.height }),
          parseInt(i) > 30
            ? (1 == n
                ? 0 == e &&
                  (r.addClass("view-title-position-fix"),
                  r.removeClass("round"),
                  (e = !0),
                  s && r.css({ width: "898px" }))
                : r.css({ top: i - 33 }),
              hideAllDownloadGuide())
            : 30 > parseInt(i) &&
              (1 == n
                ? 1 == e &&
                  (r.removeClass("view-title-position-fix"),
                  (e = !1),
                  s && r.css({ width: "898px" }))
                : r.css({ top: "0", "margin-left": "0px" }));
        var l = jQuery("#contents-view-top-btn-list");
        jQuery(l).show();
        var c = jQuery(".file_list1").height(),
          d = parseInt(c);
        0 == parseInt(i) && 0 == a
          ? (jQuery("#contentsViewDetail").css({ "border-radius": "8px" }),
            r.css({ "border-radius": "8px 8px 0 0" }),
            (a = !0))
          : 1 == a &&
            parseInt(i) > 1 &&
            (jQuery("#contentsViewDetail").css({
              "border-radius": "0 0 8px 8px",
            }),
            r.css({ "border-radius": "0px" }),
            (a = !1)),
          parseInt(i) > d + 91
            ? 1 == n
              ? 0 == t &&
                (l.addClass("view-top-btn-position-fix"),
                (t = !0),
                l.css({
                  width: "899px",
                  background: "rgba(60, 61, 71, 0.9)",
                  transition: "background-color 300ms",
                }),
                s &&
                  l.css({
                    width: "899px",
                    background: "rgba(60, 61, 71, 0.9)",
                    transition: "background-color 300ms",
                  }))
              : l.css({
                  "margin-top": i - 95 - c,
                  position: "absolute",
                  background: "rgba(60, 61, 71, 0.9)",
                  "-webkit-transition": "background-color 500ms",
                })
            : d > parseInt(i)
            ? 1 == n
              ? 1 == t &&
                (l.removeClass("view-top-btn-position-fix"),
                (t = !1),
                l.css({
                  background: "#d7d9da",
                  transition: "background-color 300ms",
                }),
                s &&
                  l.css({
                    width: "898px",
                    "margin-left": "0px",
                    background: "#d7d9da",
                    transition: "background-color 300ms",
                  }))
              : l.css({
                  "margin-top": "0",
                  position: "relative",
                  background: "#d7d9da",
                  "-webkit-transition": "background-color 300ms",
                })
            : 1 == n
            ? 0 == t &&
              (l.addClass("view-top-btn-position-fix"),
              (t = !0),
              l.css({
                width: "899px",
                background: "rgba(60, 61, 71, 0.9)",
                transition: "background-color 300ms",
              }),
              s &&
                l.css({
                  width: "899px",
                  background: "rgba(60, 61, 71, 0.9)",
                  transition: "background-color 300ms",
                }))
            : l.css({
                "margin-top": i - 95 - c,
                position: "absolute",
                background: "rgba(60, 61, 71, 0.9)",
                "-webkit-transition": "background-color 500ms",
              });
      });
    var r = 0,
      l = function (e) {
        jQuery(".view-comment-star").removeClass("on");
        var t = "";
        for (i = 1; e >= i; i++)
          (function (a) {
            1 == a
              ? (t = "ì ë§ë³ë¡ìì")
              : 2 == a
              ? (t = "ê·¸ì ê·¸ëì")
              : 3 == a
              ? (t = "ë³´íµì´ìì")
              : 4 == a
              ? (t = "ì¢ìì")
              : 5 == a && (t = "ì ë§ì¢ìì"),
              jQuery("#star" + a).addClass("on"),
              jQuery(".star_score .cnt").text(e),
              jQuery(".star_score .txt").text(t),
              jQuery("#comment-write-input-gift").val(a);
          })(i);
      };
    jQuery(".view-comment-star").unbind("mouseover"),
      jQuery(".view-comment-star").mouseover(function (e) {
        var t = e.target.id.replace("star", "");
        l(t);
      }),
      jQuery(".view-comment-star").unbind("click"),
      jQuery(".view-comment-star").click(function (e) {
        var t = e.target.id.replace("star", "");
        (r = t), l(r);
      }),
      jQuery(".star_score").unbind("mouseout"),
      jQuery(".star_score").mouseout(function () {
        return 0 != r
          ? (l(r), void 0)
          : (jQuery(".view-comment-star").removeClass("on"),
            jQuery(".star_score .cnt").text("0"),
            jQuery(".star_score .txt").text(""),
            void 0);
      }),
      WEB_CONTENTS.VIEW.writeBBSCommentFormValidate();
  }),
  (WEB_CONTENTS.VIEW.writeBBSCommentFormValidate = function () {
    console.log("WEB_CONTENTS.VIEW.writeBBSCommentFormValidate");
    var e = function (e) {
      var t = e.comment_data,
        a = {
          m_idx: jQuery("#memberLoginOk").val(),
          m_level: jQuery("#memberValidLevel").val(),
          owner_idx: 1,
          bbs_idx: jQuery("#fc-event-view-idx").val(),
        };
      COMMENT_DATA.ORDER++;
      var i = new Commentlist("bbs", t, COMMENT_DATA.ORDER, a),
        n = i.listViewHtml();
      jQuery("#bbs-contetns-comment-list").prepend(n),
        jQuery("#comment-write-textarea-comments").val("");
    };
    COMMENTLIST_FUN.writeCommentFormValidate("writeBbsCommentForm", !1, e);
  }),
  (WEB_CONTENTS.VIEW.setSellerContentsList = function (e) {
    if (
      (console.log("WEB_CONTENTS.VIEW.setSellerContentsList"),
      1 > jQuery("#bbsBoardIdx").length)
    )
      return alert(jQuery("#bbsBoardIdx").val()), void 0;
    0 == isDefined(e) && (e = 1);
    var t = new FC_APP();
    t.fc_category = new FC_CATEGORY();
    var a = 5;
    e > 1 && (a = 20);
    var i = {
      seller: jQuery("#bbsOwenerIdx").val(),
      page: parseInt(e),
      limit: a,
    };
    if (0 == isDefined(i.seller))
      return (
        fc_alert("ì»¨íì¸  ë²í¸ë¥¼ ì°¾ì ì ììµëë¤. íì¸í ë¤ì ìëí´ ì£¼ì¸ì."), void 0
      );
    var n = function (a) {
        console.debug(a), console.debug(a.send_data);
        var i = {
            limit: parseInt(a.send_data.bbs.limit),
            page: parseInt(a.send_data.bbs.page),
            total_page: parseInt(a.send_data.bbs.total_page),
            total_count: parseInt(a.send_data.bbs.total_page),
            new_time: a.send_data.bbs.new_time,
          },
          n = a.send_data.bbs.list,
          s = [],
          o = 0,
          r = {};
        for (var l = 0 in n)
          (r[o] = new Contentslist(n[l], i.new_time, l)),
            1 == isDefined(a.fc_event.sale) &&
              r[o].setSaleEventData(a.fc_event.sale),
            s.push(r[o].htmlViewSellerContents(t.fc_category.cateName)),
            o++;
        1 == e
          ? jQuery("#view-seller-other-contents-list").html(s.join(""))
          : jQuery("#view-seller-other-contents-list").append(s.join(""));
        for (var l = 0 in r) r[l].setTheumNailImg();
        jQuery("#view-more-seller-contents-list").data(i),
          i.page >= i.total_page &&
            jQuery("#view-more-seller-contents-list").hide();
      },
      s = {
        server: t.DEFINE.SERVER_PROTOCOL,
        uri: t.PROTOCOL.URL.CONTENTS.SELLER_CONTENTS,
        success: n,
        error_type: !0,
        loading_bar: !0,
        params: i,
      };
    t.PROTOCOL.ajaxCall(s, t);
  }),
  (WEB_CONTENTS.VIEW.onclickMoreSellerContents = function () {
    var e = {
        limit: parseInt(
          jQuery("#view-more-seller-contents-list").data("limit")
        ),
        page: parseInt(jQuery("#view-more-seller-contents-list").data("page")),
        total_page: parseInt(
          jQuery("#view-more-seller-contents-list").data("total_page")
        ),
        total_count: parseInt(
          jQuery("#view-more-seller-contents-list").data("total_count")
        ),
        new_time: jQuery("#view-more-seller-contents-list").data("new_time"),
      },
      t = e.page + 1;
    return t > e.total_page
      ? (alert("íì´ì§ ëìëë¤."),
        jQuery("#view-more-seller-contents-list").hide(),
        void 0)
      : (WEB_CONTENTS.VIEW.setSellerContentsList(t), void 0);
  }),
  (WEB_CONTENTS.VIEW.sellerContentsPaging = function (e) {
    console.log("sellerContentsPaging"),
      jQuery("#fc-seller-contetns-list-pagination-div").empty(),
      jQuery("#fc-seller-contetns-list-pagination-div").html(
        '<ul id="fc-seller-pagination-contents" class="pagination-sm">'
      );
    var t = 10,
      a = function (e, t) {
        WEB_CONTENTS.VIEW.setSellerContentsList(t);
      };
    jQuery("#fc-seller-pagination-contents").twbsPagination({
      startPage: e.page,
      onPageClick: a,
      visiblePages: t,
      totalPages: e.total_page,
    });
  }),
  (WEB_CONTENTS.VIEW.contentsEdit = function () {
    console.log("WEB_CONTENTS.VIEW.contentsEdit"),
      jQuery(".non-editor-view-div").hide(),
      jQuery(".active-editor-view-div").show();
    var e = new FC_APP();
    console.debug(APP),
      (oEditors = []),
      nhn.husky.EZCreator.createInIFrame({
        oAppRef: oEditors,
        elPlaceHolder: "upLoadFileContents",
        sSkinURI:
          e.DEFINE.HTML_ROOT + "/smartEditor2/SmartEditor2Skin_Filecast.php",
        fCreator: "createSEditor2",
      }),
      jQuery("#bbsCategoryMain").val(),
      jQuery("#bbsCategorySub").val(),
      WEB_UPLOAD.bindClickMainMenu(e),
      WEB_UPLOAD.bindClickSubMenu(),
      WEB_CONTENTS.VIEW.editFormValidate(e);
  }),
  (WEB_CONTENTS.VIEW.contentsEditCancle = function () {
    console.log("WEB_CONTENTS.VIEW.contentsEditCancle"),
      jQuery(".active-editor-view-div").hide(),
      jQuery(".non-editor-view-div").show();
  }),
  (WEB_CONTENTS.VIEW.editFormValidate = function (e) {
    var t = function (t) {
      console.debug(t);
      var a = jQuery(t).serialize();
      if ((console.debug(a), 0 == nfile_AX_check(e)))
        return (
          alert(
            "íì¼ì ìë¡ë íê±°ë ë¤ì´ë¡ë íìë ¤ë©´ ì ì© íë¡ê·¸ë¨ì ì¤ì¹íìì¼í©ëë¤."
          ),
          windowOpenCenter(
            e.DEFINE.SERVER_OLDURL + "/guide/upload_guide.php",
            "guide",
            "680",
            "800",
            "scrollbars=yes"
          ),
          void 0
        );
      var i = function (e) {
          console.debug(e), fc_alert("ìë£ê° ìì ëììµëë¤.");
          var t = jQuery("#bbsBoardIdx").val();
          WEB_CONTENTS.VIEW.getContentsViewOnView(t);
        },
        n = {
          server: e.DEFINE.SERVER_PROTOCOL,
          uri: e.PROTOCOL.URL.CONTENTS.EDIT_ACTION,
          success: i,
          error_type: !1,
          loading_bar: !1,
          params: a,
        };
      e.PROTOCOL.ajaxCall(n, e);
    };
    jQuery("#editViewForm").validate({
      errorClass: "form-error",
      ignore: "not:hidden",
      rules: {
        uploadTitle: { required: !0, minlength: 6, maxlength: 90 },
        upLoadFileContents: { required: !0 },
      },
      messages: {
        uploadTitle: {
          required: "ì½íì¸  ì ëª©ì ìë ¥í´ì£¼ì¸ì.",
          minlength: jQuery.validator.format("ì ëª©ì {0}ì ì´ì ìë ¥í´ì¼í©ëë¤."),
          maxlength: jQuery.validator.format("ì ëª©ì {0}ì ì´ì ëì ì ììµëë¤."),
        },
        upLoadFileContents: { required: "ë´ì©ì ìë ¥í´ ì£¼ì¸ì." },
      },
      submitHandler: function (e) {
        return (
          console.log("submitHandler"),
          console.log(jQuery("#upLoadFileContents").val()),
          "" == jQuery("#upLoadFileContents").val() ||
          "<p>&nbsp;</p>" == jQuery("#upLoadFileContents").val()
            ? (alert("ë´ì©ì ìë ¥í´ì£¼ì¸ì."), void 0)
            : (t(e), void 0)
        );
      },
      success: function (e) {
        console.log(e),
          oEditors.getById.upLoadFileContents.exec("UPDATE_CONTENTS_FIELD", []);
      },
    });
  }),
  (WEB_CONTENTS.VIEW.openMobileContentsView = function (e) {
    console.log("WEB_CONTENTS.openMobileContentsView");
    var t = {
        bbs_idx: jQuery(e).data("bbs_idx"),
        cate1: jQuery(e).data("cate1"),
        is_mobile: jQuery(e).data("is_mobile"),
      },
      a = t.bbs_idx;
    "Y" != t.is_mobile && (a = 0),
      null == APP && (APP = new FC_APP()),
      console.log("onClickMobileExp"),
      (t.viewId = a),
      FC_MODAL_OPEN("fcModalMobileEvent", !1, t);
  }),
  (WEB_CONTENTS.VIEW.SCROLL = null),
  (WEB_CONTENTS.VIEW.SCROLL_FLAG = !1),
  (WEB_CONTENTS.VIEW.SCROLL_MOVE = 0),
  (WEB_CONTENTS.VIEW.setBroadCastList = function (e) {
    if (
      (console.log("WEB_CONTENTS.VIEW.setBroadCastList"),
      (WEB_CONTENTS.VIEW.SCROLL = null),
      (WEB_CONTENTS.VIEW.SCROLL_FLAG = !1),
      (WEB_CONTENTS.VIEW.SCROLL_MOVE = 0),
      !(1 > jQuery("#fc-view-b-chapter-iscroll").length))
    ) {
      if (0 == e && null != WEB_CONTENTS.VIEW.SCROLL)
        return WEB_CONTENTS.VIEW.SCROLL.refresh(), void 0;
      var t = "#fc-view-b-chapter-iscroll",
        a = jQuery(t + " .fc-view-iscroll-li").length;
      if (
        (jQuery(t).width(704),
        jQuery(t + " .fc-view-iscroll-ul").width(176 * a),
        0 != isIe8Ver())
      )
        return jQuery(t).css({ overflow: "auto" }), void 0;
      (WEB_CONTENTS.VIEW.SCROLL = null),
        (WEB_CONTENTS.VIEW.SCROLL = new IScroll(t, {
          scrollX: !0,
          scrollY: !1,
          mouseWheel: !1,
          momentum: !1,
          snap: !0,
        })),
        WEB_CONTENTS.VIEW.SCROLL.on("scrollEnd", function () {
          console.log("scroll ended"),
            console.log(this.currentPage),
            this.currentPage,
            console.log("this.maxScrollX:" + this.maxScrollX),
            this.x - 704 < this.maxScrollX &&
              0 == WEB_CONTENTS.VIEW.SCROLL_FLAG &&
              ((WEB_CONTENTS.VIEW.SCROLL_FLAG = !0),
              WEB_CONTENTS.VIEW.getMoreBrocastList(!1));
        });
      var i = function (e, t, a) {
        4 >= a ||
          (Math.ceil(a / 5),
          jQuery("#fc-view-iscroll-btn .prev_list").unbind("click"),
          jQuery("#fc-view-iscroll-btn .prev_list").bind("click", function () {
            console.debug(WEB_CONTENTS.VIEW.SCROLL),
              WEB_CONTENTS.VIEW.SCROLL.x > -352 &&
              0 == WEB_CONTENTS.VIEW.SCROLL_FLAG
                ? ((WEB_CONTENTS.VIEW.SCROLL_FLAG = !0),
                  WEB_CONTENTS.VIEW.getMoreBrocastList(!1, !0))
                : e.prev();
          }),
          jQuery("#fc-view-iscroll-btn .next_list").unbind("click"),
          jQuery("#fc-view-iscroll-btn .next_list").bind("click", function () {
            WEB_CONTENTS.VIEW.SCROLL.x <= WEB_CONTENTS.VIEW.SCROLL.maxScrollX &&
            0 == WEB_CONTENTS.VIEW.SCROLL_FLAG
              ? ((WEB_CONTENTS.VIEW.SCROLL_FLAG = !0),
                WEB_CONTENTS.VIEW.getMoreBrocastList(!1))
              : e.next();
          }));
      };
      i(WEB_CONTENTS.VIEW.SCROLL, t, a);
      var n = {
        chapter: jQuery("#fc-view-brocast-chapter").data("chapter_idx"),
        idx: jQuery("#fc-view-brocast-chapter").data("idx"),
      };
      if ("0" != n.chapter && 1 == isDefined(n.chapter)) {
        var s = "#fc-broadcast-chapter-list-li-" + n.idx + "-" + n.chapter;
        console.log("targetBroListEle:" + s);
        var o = jQuery(s),
          r = jQuery("#fc-view-iscroll-ul .fc-view-iscroll-li").index(o);
        if (jQuery(s).length > 0) {
          console.debug(WEB_CONTENTS.VIEW.SCROLL);
          var l = Math.floor(r / 4);
          console.log(l),
            WEB_CONTENTS.VIEW.SCROLL.goToPage(l, 0, 0),
            (WEB_CONTENTS.VIEW.SCROLL_MOVE = n.chapter),
            console.debug(WEB_CONTENTS.VIEW.SCROLL);
        }
      }
    }
  }),
  (WEB_CONTENTS.VIEW.drawDonutGraph = function (e, t, a) {
    if (0 != supports_canvas_text()) {
      for (
        var i = {
            10: "#50a4de",
            20: "#de5050",
            30: "#ffae00",
            40: "#93d354",
            man: "#50a4de",
            woman: "#93d354",
          },
          n = [],
          s = [],
          o = [],
          r = 0;
        e.length > r;
        r++
      )
        (n[r] = i[e[r][0]]), (s[r] = e[r][1]), (o[r] = e[r][1]);
      for (var l = 0, r = s.length - 1; r > 0; r--)
        s[r] > 0 && 10 > s[r] && ((l = 10 - s[r]), (s[r] = 10), (s[0] -= l));
      var c = 140,
        d = 140,
        u = Math.min(c, d) / 2,
        _ = s,
        n = n;
      if (
        (jQuery("#" + a).attr("width", c),
        jQuery("#" + a).attr("height", c),
        "undefined" != typeof d3)
      ) {
        var p = d3.layout.pie(),
          m = d3.svg
            .arc()
            .innerRadius(u - 44)
            .outerRadius(u - 10),
          h = d3
            .select("#" + a)
            .selectAll("g")
            .data(p(_))
            .enter()
            .append("g")
            .attr("transform", "translate(" + c / 2 + "," + d / 2 + ")");
        h.append("path")
          .attr("class", "pie")
          .style("fill", function (e, t) {
            return n[t];
          })
          .transition()
          .duration(200)
          .delay(function (e, t) {
            return 200 * t;
          })
          .ease("linear")
          .attrTween("d", function (e) {
            var t = d3.interpolate(
              { startAngle: e.startAngle, endAngle: e.startAngle },
              { startAngle: e.startAngle, endAngle: e.endAngle }
            );
            return function (e) {
              return m(t(e));
            };
          });
        var E = "age-donut-graph" == a ? "ì°ë ¹ë³" : "ì±ë³";
        d3
          .select("#" + a)
          .append("text")
          .attr("class", "name")
          .attr("transform", "translate(" + c / 2 + "," + (d / 2 + 5) + ")")
          .text(E),
          h
            .append("text")
            .attr("class", "per")
            .style("font-weight", function (e) {
              return e.data == t ? "bold" : void 0;
            })
            .attr("transform", function (e) {
              return "translate(" + m.centroid(e) + ")";
            })
            .text(function (e, t) {
              return 1 > o[t] ? "" : o[t] + "%";
            });
      }
    }
  }),
  (WEB_CONTENTS.VIEW.setPurchaseGraph = function () {
    var e = jQuery("#purchase_stat").val();
    if (0 == isDefined(e)) return jQuery("#view_donut").hide(), !1;
    if (((e = JSON.parse(e)), 1 > e.cnt))
      return jQuery("#view_donut").hide(), !1;
    var t = e.sort_age,
      a = e.gender;
    WEB_CONTENTS.VIEW.drawDonutGraph(t, e.most_year_per, "age-donut-graph"),
      WEB_CONTENTS.VIEW.drawDonutGraph(
        a,
        e.most_gender_per,
        "gender-donut-graph"
      ),
      jQuery("#view_donut").show();
  }),
  (WEB_CONTENTS.VIEW.getMoreBrocastList = function (e, t) {
    console.log("WEB_CONTENTS.getMoreBrocastList");
    var a = "#fc-view-brocast-paging-div",
      i = parseInt(jQuery(a).data("page")) + 1;
    if (1 == t && ((i = parseInt(jQuery(a).data("page")) - 1), 1 > i))
      return (WEB_CONTENTS.VIEW.SCROLL_FLAG = !1), void 0;
    var n = {
      page: i,
      limit: jQuery(a).data("limit"),
      bro_idx: jQuery(a).data("bro_idx"),
      sort: jQuery(a).data("sort"),
      total_page: jQuery(a).data("total_page"),
    };
    if ((console.debug(n), !(parseInt(n.total_page) < parseInt(n.page)))) {
      var s = function (i) {
          console.debug(i),
            jQuery(a).data("page", i.bro_data.page),
            jQuery(a).data("sort", i.bro_data.sort),
            (WEB_CONTENTS.VIEW.SCROLL_FLAG = !1);
          var n = i.bro_data.list;
          if (!(1 > n.length)) {
            console.log("#fc-view-iscroll-ul ìë³¸ë°ì´í°");
            for (var s = [], o = 0; n.length > o; o++)
              s.push(TEMPLATE_FUN.viewBroChapterListHtml(n[o]));
            if (
              (console.log("ooooooooooooooooo listHtml oooooooooooooooooooo"),
              console.debug(s),
              1 == e
                ? jQuery("#fc-view-iscroll-ul").html(s)
                : 1 == t
                ? jQuery("#fc-view-iscroll-ul").prepend(s)
                : jQuery("#fc-view-iscroll-ul").append(s),
              null != WEB_CONTENTS.VIEW.SCROLL)
            ) {
              var r = jQuery("#fc-view-b-chapter-iscroll .fc-view-iscroll-li")
                .length;
              jQuery("#fc-view-iscroll-ul").width(176 * r),
                WEB_CONTENTS.VIEW.SCROLL.refresh(),
                1 == t && WEB_CONTENTS.VIEW.SCROLL.goToPage(4, 0, 0);
            }
          }
        },
        o = new FC_APP(),
        r = {
          server: o.DEFINE.SERVER_PROTOCOL,
          uri: o.PROTOCOL.URL.SEARCH.BRO_MORE,
          success: s,
          error_type: !1,
          loading_bar: !0,
          params: n,
        };
      o.PROTOCOL.ajaxCall(r, o);
    }
  }),
  (WEB_CONTENTS.VIEW.onclickMoreFileList = function () {
    jQuery(".fc-view-filelist-tr").show(),
      jQuery(".file_more").hide(),
      jQuery(".file_return").show();
  }),
  (WEB_CONTENTS.VIEW.onclickReturnFileList = function () {
    jQuery(".file_return").hide(),
      jQuery(".file_more").show(),
      jQuery(".fc-view-filelist-tr.second-tr").hide();
  }),
  (WEB_CONTENTS.VIEW.onclickFavoritesContents = function (e) {
    return 0 == fc_check_login()
      ? (GO_MENU("login", "modal"), void 0)
      : (CONTENTS_FUN.setFavoritesContents(e), void 0);
  }),
  (WEB_CONTENTS.VIEW.shareSns = function (e) {
    if ((console.log("WEB_CONTENTS.VIEW.shareSns"), 0 == fc_check_login()))
      return (
        alert("ë¡ê·¸ì¸ í ì´ë²¤í¸ì ì°¸ì¬í´ ì£¼ì¸ì"), GO_MENU("login"), void 0
      );
    var t = {
      bbs_idx: jQuery(e).data("bbs_idx"),
      share: jQuery(e).data("share"),
      title: jQuery(e).data("title"),
      server: jQuery(e).data("server"),
    };
    if (
      (console.debug(t),
      jQuery(".fc-web-form-sns-area").hide(),
      "facebook" == t.share)
    ) {
      console.log("share facebook"),
        0 == isDefined(APP) && (APP = new FC_APP());
      var a = gCookie.get(APP.DEFINE.STORAGE.USER_ACCESS_TOKEN),
        i =
          "toolbar=0, status=0, menubar=0,height=500,width=600,scrollbars=yes",
        n = window.open("about:blank", "fc_facebook_view", i),
        s = "http://filecast.co.kr/www/contents/view/" + t.bbs_idx + "/3/";
      console.log(s), (s = encodeURIComponent(s));
      var o =
        t.server + "/www/event_sns/facebook_share/" + t.bbs_idx + "/" + a + "/";
      console.log(o), (o = encodeURIComponent(o));
      var r = APP.DEFINE.sns_facebook_id,
        l =
          "https://www.facebook.com/dialog/share?app_id=" +
          r +
          "&href=" +
          s +
          "&redirect_uri=" +
          o;
      console.log(l), (n.location = l), n.focus();
    } else if ("twitter" == t.share) {
      jQuery("#web-view-event-twitter-url").show();
      var c = encodeURI(
          "ë¬´ë£ìí, íì¼ê³µì , TVë¤ìë³´ê¸°,ë¬´ë£ë¤ì´, p2pì¬ì´í¸,í ë í¸,ì¤ìê°ê°ì"
        ),
        d = encodeURI(t.title);
      WEB_EVENT.snsEventLoadForm(t.share);
      var i =
          "toolbar=0, status=0, menubar=0,height=500,width=600,scrollbars=yes",
        u = window.open("about:blank", "fc_sns_view", i),
        s = "http://filecast.co.kr/www/contents/view/" + t.bbs_idx + "/3/",
        o = "http://filecast.co.kr/www/event/sns_share_event/" + t.share + "/",
        l =
          "https://twitter.com/intent/tweet?text=" +
          d +
          "&url=" +
          s +
          "&hashtags=" +
          c;
      console.log(l), (u.location = l), u.focus();
    } else if ("google" == t.share) {
      jQuery("#web-view-event-google-url").show(),
        WEB_EVENT.snsEventLoadForm(t.share);
      var i =
          "toolbar=0, status=0, menubar=0,height=600,width=600,scrollbars=yes",
        u = window.open("about:blank", "fc_sns_view", i),
        s = "http://filecast.co.kr/www/contents/view/" + t.bbs_idx + "/3/",
        o = "http://filecast.co.kr/www/event/sns_share_event/" + t.share + "/",
        l = "https://plus.google.com/share?url={" + s + "}";
      (u.location = l), u.focus();
    }
  }),
  (WEB_CONTENTS.subBanner = function (e) {
    console.log("WEB_CONTENTS.subBanner");
    var t = 0,
      a = 0,
      i = [],
      n = [],
      s = 0;
    jQuery(".sub-event-banner-cate").hide(),
      jQuery(".sub-event-banner-cate").each(function (s) {
        var o = this;
        console.log(s + ": " + jQuery(this).text()),
          jQuery(o).data("category") == e
            ? (i.push(o), jQuery(o).show(), t++)
            : "0" == jQuery(o).data("category")
            ? (n.push(o), jQuery(o).hide(), a++)
            : jQuery(o).hide();
      }),
      t > 0
        ? (s = t)
        : a > 0 &&
          ((s = a),
          jQuery("#sub-event-banner-rolling-div").find(".else-cate").show()),
      s > 0 && jQuery("#sub-event-banner").show(),
      isDefined(WEB_CONTENTS.DATA.rollingTimer)
        ? (clearInterval(WEB_CONTENTS.DATA.rollingTimer),
          (WEB_CONTENTS.DATA.rollingTimer = null))
        : (WEB_CONTENTS.DATA.rollingTimer = null);
    var o = jQuery("#sub-event-banner-rolling-div");
    o.css("top", "0");
    var r = function () {
      console.debug(o);
      var e = 0,
        t = 0,
        a = function () {
          console.log("moveDiv"),
            t++,
            (e = -71 * t),
            o.css("top", e + "px"),
            t >= s && ((t = 0), o.css("top", "0"));
        };
      WEB_CONTENTS.DATA.rollingTimer = setInterval(function () {
        a();
      }, 3300);
    };
    s > 1
      ? r()
      : (isDefined(WEB_CONTENTS.DATA.rollingTimer) &&
          clearInterval(WEB_CONTENTS.DATA.rollingTimer),
        (WEB_CONTENTS.DATA.rollingTimer = null));
  }),
  (WEB_CONTENTS.onclickSellerNickname = function (e) {
    console.log("WEB_CONTENTS.onclickSellerNickname");
    var t = jQuery(e).data("idx"),
      a = jQuery("#fc-contents-list-seller-info-" + t);
    a.show(),
      a.mouseleave(function () {
        jQuery(this).css("display", "none");
      });
  }),
  (WEB_CONTENTS.onclickSellerInfoList = function (e) {
    console.log("WEB_CONTENTS.onclickSellerInfoList");
    var t = jQuery(e).attr("data-type"),
      a = jQuery(e).data("nickname");
    return (
      (a = encodeURIComponent(a)),
      "seller_list" == t
        ? (GO_MENU("seller_file", a), void 0)
        : "note" == t
        ? (WEB_NOTE.sendNoteLayer(a), void 0)
        : void 0
    );
  }),
  (WEB_CONTENTS.getHowRecommend = function () {
    console.log("WEB_CONTENTS.getHowRecommend"),
      null == APP && (APP = new FC_APP());
    var e = [],
      t = function (e) {
        console.log(e);
        try {
          var t = {
              list: e.how_list.list,
              limit: parseInt(e.how_list.limit),
              page: parseInt(e.how_list.page),
              total_page: parseInt(e.how_list.total_page),
              a_href: e.how_list.a_href,
              thema_tit: e.how_list.thema_tit,
              new_time: e.new_time,
            },
            a = [],
            i = {};
          (i = new ContentsRecomm()),
            a.push(i.recommendHtmlList(t.list, t.a_href, t.thema_tit)),
            jQuery("#how_recommend").empty();
          var n = jQuery("#how_recommend").html(a.join(""));
        } finally {
          (a = null), (listCount = null), (i = null), (t = null), (n = null);
        }
      },
      a = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: APP.PROTOCOL.URL.CONTENTS.GET_HOW_RECOMM,
        success: t,
        error_type: !0,
        loading_bar: !0,
        params: e,
      };
    APP.PROTOCOL.ajaxCall(a, APP);
  });
var WEB_COUPON = {};
(WEB_COUPON.DATA = null),
  (WEB_COUPON.start = function (e, t) {
    console.log("WEB_COUPON.start"),
      (this.app = e),
      (APP = this.app),
      WEB_COUPON.loadData(APP, t),
      WEB_COUPON.bindingPage(APP, null);
  }),
  (WEB_COUPON.loadData = function (e, t) {
    console.log("WEB_COUPON.loadPage"),
      console.debug(t),
      isDefined(t) &&
        1 == isDefined(t.p_id) &&
        0 == fc_check_login() &&
        (gCookie.set(e.DEFINE.STORAGE.LOGIN_NEXT_PAGE, "coupon"),
        gCookie.set(e.DEFINE.STORAGE.LOGIN_NEXT_PAGE_SUB, t.p_id));
  }),
  (WEB_COUPON.bindingPage = function () {
    console.log("WEB_COUPON.bindingPage"),
      jQuery(".coupon-input-code").unbind("click"),
      jQuery(".coupon-input-code").bind("click", function () {
        return 1 > parseInt(jQuery("#memberLoginOk").val()) ||
          "NaN" == parseInt(jQuery("#memberLoginOk").val())
          ? (GO_MENU("login"), void 0)
          : 1 > parseInt(jQuery("#memberValidAauthentic").val()) ||
            "NaN" == parseInt(jQuery("#memberValidAauthentic").val())
          ? (alert("ì¤ëª ì¸ì¦ í ì¿ í°ì ë±ë¡í´ì£¼ì¸ì."),
            GO_MENU("realname"),
            void 0)
          : void 0;
      });
  });
var COUPON_FN = {};
(COUPON_FN.onsubmitCouponCode = function (e) {
  console.log("COUPON_FN.onsubmitCouponCode");
  var t = {
    idx: jQuery(e).data("idx"),
    type: jQuery(e).data("type"),
    pre_fix: jQuery(e).data("pre_fix"),
    code: null,
    is_mobile: "0",
  };
  console.debug(t);
  var a = jQuery("#coupon-code-input-" + t.idx);
  if (
    ((t.code = a.val()),
    console.log("couponCode:::" + t.code),
    0 == isDefined(t.code) || t.code == t.pre_fix)
  )
    return alert("ì¿ í°ë²í¸ë¥¼ ìë ¥í´ ì£¼ì¸ì."), jQuery(a).focus(), void 0;
  if (
    (console.log(jQuery("#memberLoginOk").val()),
    1 > parseInt(jQuery("#memberLoginOk").val()) ||
      "NaN" == parseInt(jQuery("#memberLoginOk").val()))
  )
    return GO_MENU("login"), void 0;
  if (
    (console.log(jQuery("#memberValidAauthentic").val()),
    1 > parseInt(jQuery("#memberValidAauthentic").val()) ||
      "NaN" == parseInt(jQuery("#memberValidAauthentic").val()))
  )
    return (
      alert("ì¤ëª ì¸ì¦ í ì¿ í°ì ë±ë¡í´ì£¼ì¸ì."), GO_MENU("realname"), void 0
    );
  null == APP && (APP = new FC_APP());
  var i = function (e) {
      console.log("successHttpRegistCoupon"),
        console.debug(e),
        APP.setMember(e.member);
      var t =
        "ì¿ í°ìíì´ ì§ê¸ ëììµëë¤.\níì¼ ìºì¤í¸ë¥¼ ì°¾ìì£¼ìì ëë¨í ê°ì¬í©ëë¤.";
      1 == isDefined(e.show_msg) && "" != e.show_msg && (t = e.show_msg),
        alert(t),
        GO_MENU("home");
    },
    n = t,
    s = {
      server: APP.DEFINE.SERVER_PROTOCOL,
      uri: APP.PROTOCOL.URL.COUPON.REGISTER,
      success: i,
      error_type: !1,
      loading_bar: !1,
      params: n,
    };
  APP.PROTOCOL.ajaxCall(s, APP);
}),
  (COUPON_FN.onsubmitCouponCodeCu = function (e) {
    console.log("COUPON_FN.onsubmitCouponCode");
    var t = {
      idx: jQuery(e).data("idx"),
      type: jQuery(e).data("type"),
      pre_fix: jQuery(e).data("pre_fix"),
      code: null,
      is_mobile: "0",
    };
    console.debug(t);
    var a = jQuery("#coupon-code-input-" + t.idx);
    if (
      ((t.code = a.val()),
      console.log("couponCode:::" + t.code),
      0 == isDefined(t.code) || t.code == t.pre_fix)
    )
      return alert("ì¿ í°ë²í¸ë¥¼ ìë ¥í´ ì£¼ì¸ì."), jQuery(a).focus(), void 0;
    if (
      (console.log(jQuery("#memberLoginOk").val()),
      1 > parseInt(jQuery("#memberLoginOk").val()) ||
        "NaN" == parseInt(jQuery("#memberLoginOk").val()))
    )
      return GO_MENU("login"), void 0;
    if (
      (console.log(jQuery("#memberValidAauthentic").val()),
      1 > parseInt(jQuery("#memberValidAauthentic").val()) ||
        "NaN" == parseInt(jQuery("#memberValidAauthentic").val()))
    )
      return (
        alert("ì¤ëª ì¸ì¦ í ì¿ í°ì ë±ë¡í´ì£¼ì¸ì."), GO_MENU("realname"), void 0
      );
    null == APP && (APP = new FC_APP());
    var i = function (e) {
        if (
          (console.log("successHttpRegistCoupon"),
          console.debug(e),
          "E000" == e.result.RESULT_CODE)
        ) {
          APP.setMember(e.member);
          var t = e.result.RESULT_MESSAGE;
          alert(t), GO_MENU("home");
        } else {
          var t = e.result.RESULT_MESSAGE;
          alert(t);
        }
      },
      n = t,
      s = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: APP.PROTOCOL.URL.COUPON.CU_REGISTER,
        success: i,
        error_type: !1,
        loading_bar: !1,
        params: n,
      };
    APP.PROTOCOL.ajaxCall(s, APP);
  });
var WEB_CS = {};
(WEB_CS.DATA = {
  content_type: "JSON",
  defaultUri: "/200/1/1/",
  isDefault: !1,
  pagination: {},
}),
  (WEB_CS.start = function (e) {
    console.log("WEB_CS.start in"),
      (APP = e),
      console.debug(APP.url),
      0 == isDefined(APP.url.uri) &&
        ((APP.url.uri = WEB_CS.DATA.defaultUri), (WEB_CS.DATA.isDefault = !0));
    var t,
      a,
      i,
      n = APP.url,
      s = 0,
      o = null,
      r = n.uri.split("/");
    if (
      (console.debug(r),
      jQuery.inArray(1, r) && (s = r[1]),
      r.length > 2 && (t = r[2]),
      r.length > 3 && (a = r[3]),
      r.length > 4 && (i = r[4]),
      r.length > 5 && (o = r[5]),
      "notice" == s &&
        (console.log("uri notice in"),
        console.log("split:" + r.length),
        r.length > 3 &&
          5 > r.length &&
          (console.log("cate2ë¶ë¥"),
          1 == isDefined(t)
            ? WEB_CS.noticeList_load(t)
            : WEB_CS.noticeList_load(1)),
        r.length > 4 &&
          6 > r.length &&
          (console.log("cate3ë¶ë¥"),
          1 == isDefined(a) &&
            (a >= 1 ? WEB_CS.noticeView(a, t) : WEB_CS.noticeList_load(t))),
        r.length > 5 &&
          7 > r.length &&
          (console.log("cate4ë¶ë¥"),
          1 == isDefined(t)
            ? 1 == i
              ? WEB_CS.noticeList_load(t, 1)
              : WEB_CS.noticeList_load(t)
            : WEB_CS.noticeList_load(1)),
        r.length > 6 &&
          8 > r.length &&
          (console.log("cate5ë¶ë¥"), 1 == isDefined(o))))
    ) {
      var l = decodeURI(o),
        c = l.split("-"),
        d = c[0],
        u = c[1];
      a >= 1
        ? WEB_CS.noticeView(a, t, d, u)
        : 1 == isDefined(t)
        ? WEB_CS.noticeList_load(t, 2, d, u)
        : WEB_CS.noticeList_load(1, 2, d, u);
    }
    "notice_write" == s &&
      (console.log("uri notice_write in"),
      r.length > 2 &&
        (1 == isDefined(t)
          ? (console.log(t), WEB_CS.noticeWriteForm(t))
          : (console.log("else------------"), WEB_CS.noticeWriteForm()))),
      "notice_view" == s &&
        (console.log("uri notice_view in"),
        r.length > 2 &&
          (1 == isDefined(t)
            ? (console.log(t), WEB_CS.noticeView(t))
            : (console.log("else------------"), WEB_CS.noticeList_load(1))));
  }),
  (WEB_CS.pageList = function (e) {
    var t = jQuery("input:hidden[name=sca]").val(),
      a = jQuery("input:text[name=stx]").val(),
      i = jQuery("select[name=sfl]").val(),
      n = { page: e, sca: t, sfl: i, stx: a },
      s = function (e) {
        WEB_CS.setData(e.cs_list), WEB_CS.pageData(e.page);
      },
      o = APP.PROTOCOL.URL.CS.LIST,
      r = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: o,
        success: s,
        error_type: !0,
        loading_bar: !1,
        params: n,
      };
    APP.PROTOCOL.ajaxCall(r, APP);
  }),
  (WEB_CS.faqList = function (e) {
    var t = "content",
      a = void 0 != jQuery("#word").val() ? jQuery("#word").val() : "",
      i = void 0 != jQuery("#kind").val() ? jQuery("#kind").val() : "";
    (getUrl = APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.CS.FAQ_LIST),
      $.get(getUrl, { page: e, type: "ajax", word: a, column: t, kind: i })
        .done(function (e) {
          jQuery("#list").html(e);
          var t = jQuery("#total_count").val();
          t > 0
            ? (jQuery("#search-list-result-div").show(),
              jQuery("#search-list-no-result-div").hide())
            : (jQuery("#search-list-result-div").hide(),
              jQuery("#search-list-no-result-div").show());
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_CS.alimList = function (e) {
    (getUrl = APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.CS.ALIM_LIST),
      $.get(getUrl, { page: e, type: "ajax" })
        .done(function (e) {
          jQuery("#list").html(e);
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_CS.faqCateChange = function (e, t) {
    jQuery("#kind").val(e),
      jQuery("#word").val(""),
      jQuery(".hand").removeClass("active"),
      jQuery("#" + t).addClass("active"),
      WEB_CS.faqList(1);
  }),
  (WEB_CS.contentShow = function (e) {
    "none" == jQuery("#content_" + e).css("display")
      ? (jQuery(".q_content").hide(),
        jQuery(".size1").removeClass("active"),
        jQuery(".size2").removeClass("active"),
        jQuery(".btn_close1").attr("class", "btn_open"),
        jQuery("#content_" + e).show(),
        jQuery("#button_" + e).attr("class", "btn_close1"),
        jQuery("#size1_" + e).addClass("active"),
        jQuery("#size2_" + e).addClass("active"))
      : (jQuery("#content_" + e).hide(),
        jQuery("#button_" + e).attr("class", "btn_open"),
        jQuery("#size1_" + e).removeClass("active"),
        jQuery("#size2_" + e).removeClass("active"));
  }),
  (WEB_CS.noticeWrite = function () {
    (getUrl = APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.CS.WRITE_PAG),
      $.get(getUrl, { page: page, type: "ajax" })
        .done(function (e) {
          jQuery("#list").html(e);
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_CS.faqWriteForm = function (e) {
    (getUrl = APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.CS.FAQ_WRITE_FORM),
      $.get(getUrl, { idx: e, type: "ajax" })
        .done(function (e) {
          jQuery("#list").html(e),
            (oEditors = []),
            null == APP && (APP = new FC_APP()),
            nhn.husky.EZCreator.createInIFrame({
              oAppRef: oEditors,
              elPlaceHolder: "faqFormContent",
              sSkinURI:
                APP.DEFINE.HTML_ROOT +
                "/smartEditor2/SmartEditor2Skin_Filecast.php",
              fCreator: "createSEditor2",
            });
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_CS.faqWriteSubmit = function () {
    oEditors.getById.faqFormContent.exec("UPDATE_CONTENTS_FIELD", []);
    try {
      WEB_CS.faqNoticeReg();
    } catch (e) {}
  }),
  (WEB_CS.faqNoticeReg = function () {
    var e = jQuery("#title").val(),
      t = jQuery("#is_ad").val(),
      a = jQuery("#faqFormContent").val();
    if (2 > e.length)
      return alert("ì ëª©ì ìë ¥ í´ì£¼ì¸ì."), jQuery("#title").focus(), !1;
    if (20 > a.length) return alert("ë´ì©ì ìë ¥ í´ì£¼ì¸ì."), !1;
    var i = jQuery("#idx").val(),
      n = jQuery("#kind").val(),
      s = { idx: i, title: e, content: a, is_ad: t, code: "faq", kind: n },
      o = function () {
        alert("ë±ë¡ ëììµëë¤."), window.location.reload(!0);
      },
      r = APP.PROTOCOL.URL.CS.NOTICE_WRITE,
      l = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: r,
        success: o,
        error_type: !0,
        loading_bar: !1,
        params: s,
      };
    return APP.PROTOCOL.ajaxCall(l, APP), !1;
  }),
  (WEB_CS.faqDel = function (e) {
    var t = { chk: e, type: "faq" },
      a = function (e) {
        e.result > 0 ? alert("ì­ì  ëììµëë¤.") : alert("ì­ì  ëì§ ìììµëë¤."),
          WEB_CS.faqList(1);
      },
      i = APP.PROTOCOL.URL.CS.NOTICE_DELETE,
      n = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: i,
        success: a,
        error_type: !0,
        loading_bar: !1,
        params: t,
      };
    APP.PROTOCOL.ajaxCall(n, APP);
  }),
  (WEB_CS.noticeTopHtml = function () {
    console.log("WEB_CS.noticeTopHtml in");
    var e = "";
    (e += '<h2 class="depth1 client" title="ê³ ê°ì¼í°">ê³ ê°ì¼í°</h2>'),
      (e += '	<ul class="depth2">'),
      (e +=
        '	<li class="active" onclick="GO_MENU(\'notice\');"><a class="hand">ê³µì§ì¬í­</a><span class="mouse_on"></span></li>'),
      (e += '	<li class="bar">|</li>'),
      (e += '	<li onclick="GO_MENU(\'faq\');"><a class="hand">FAQ</a></li>'),
      (e += '	<li class="bar">|</li>'),
      (e +=
        '	<li onclick="GO_MENU(\'qna\');"><a class="hand">1:1 ë¬¸ì</a></li>'),
      (e += "	</ul>"),
      jQuery(".m_content").html(e);
  }),
  (WEB_CS.noticeList = function (e) {
    console.log("WEB_CS.noticeList in"), 0 == isDefined(e) && (e = 1);
    var t = void 0 != jQuery("#column").val() ? jQuery("#column").val() : "",
      a =
        void 0 != jQuery("#list input#word").val()
          ? jQuery("#list input#word").val()
          : "";
    if (1 == isDefined(a)) {
      var i = encodeURI(t + "-" + a);
      location.href =
        APP.DEFINE.CI_ROOT + "/cs/#!/notice/" + e + "/0/1/" + i + "/";
    } else location.href = APP.DEFINE.CI_ROOT + "/cs/#!/notice/" + e + "/0/1/";
    console.log("href out");
  }),
  (WEB_CS.noticeMoveList = function (e) {
    console.log("WEB_CS.noticeMoveList in"), 0 == isDefined(e) && (e = 1);
    var t = void 0 != jQuery("#column").val() ? jQuery("#column").val() : "",
      a =
        void 0 != jQuery("#list input#word").val()
          ? jQuery("#list input#word").val()
          : "";
    if (1 == isDefined(a)) {
      var i = encodeURI(t + "-" + a);
      location.href =
        APP.DEFINE.CI_ROOT + "/cs/#!/notice/" + e + "/0/1/" + i + "/";
    } else location.href = APP.DEFINE.CI_ROOT + "/cs/#!/notice/" + e + "/0/1/";
    console.log("href out");
  }),
  (WEB_CS.noticeList_load = function (e, t, a, i) {
    if ((console.log("WEB_CS.noticeList_load in"), null == n))
      var n = new FC_APP();
    0 == isDefined(e) && (e = 1),
      WEB_CS.noticeTopHtml(),
      jQuery(".l_content .tabMenu").hide(),
      jQuery(".sub_tabMenu").hide();
    var a = void 0 != a ? a : "",
      i = void 0 != i ? i : "",
      s = { page: e, type: "ajax", word: i, column: a },
      o = function (e) {
        jQuery("#list").html(e),
          1 == isDefined(i) &&
            (jQuery("#column").val(a), jQuery("#list input#word").val(i)),
          "" != a &&
            jQuery("select[name=column] > option[value=" + a + "]").attr(
              "selected",
              "true"
            ),
          1 == isDefined(t) && utility.ui.goElement(".m_content", 100, 0);
      };
    n.DEFINE.AJAX_HTTP_TYPE = "html";
    var r = {
      server: n.DEFINE.SERVER_PROTOCOL,
      uri: n.PROTOCOL.URL.CS.NOTICE_LIST,
      success: o,
      error_type: !1,
      loading_bar: !1,
      params: s,
    };
    n.PROTOCOL.ajaxCall(r, n);
  }),
  (WEB_CS.noticeView = function (e, t, a, i) {
    if ((console.log("WEB_CS.noticeView in"), null == n)) var n = new FC_APP();
    WEB_CS.noticeTopHtml(),
      jQuery(".l_content .tabMenu").hide(),
      jQuery(".sub_tabMenu").hide();
    var s = { page: t, type: "ajax", idx: e, word: i, column: a },
      o = function (e) {
        jQuery("#list").html(e),
          1 == isDefined(i) &&
            (jQuery("#column").val(a), jQuery("#list input#word").val(i)),
          utility.ui.goElement(".m_content", 500, 0);
      };
    n.DEFINE.AJAX_HTTP_TYPE = "html";
    var r = {
      server: n.DEFINE.SERVER_PROTOCOL,
      uri: n.PROTOCOL.URL.CS.NOTICE_VIEW_LIST,
      success: o,
      error_type: !1,
      loading_bar: !1,
      params: s,
    };
    n.PROTOCOL.ajaxCall(r, n);
  }),
  (WEB_CS.noticeMoveWrite = function (e) {
    console.log("WEB_CS.noticeMoveWrite in"),
      (location.href = APP.DEFINE.CI_ROOT + "/cs/#!/notice_write/" + e);
  }),
  (WEB_CS._onSubmitNotice = function () {
    console.log("_onSubmit  in"),
      console.log(oEditors.getById.content),
      oEditors.getById.csNoticeContents.exec("UPDATE_CONTENTS_FIELD", []);
    try {
      WEB_CS.noticeReg();
    } catch (e) {}
  }),
  (WEB_CS.noticeWriteForm = function (e) {
    if ((console.log("WEB_CS.noticeWriteForm in"), null == t))
      var t = new FC_APP();
    WEB_CS.noticeTopHtml(),
      jQuery(".l_content .tabMenu").hide(),
      jQuery(".sub_tabMenu").hide();
    var a = { type: "ajax", idx: e },
      i = function (e) {
        jQuery("#list").html(e),
          (oEditors = []),
          nhn.husky.EZCreator.createInIFrame({
            oAppRef: oEditors,
            elPlaceHolder: "csNoticeContents",
            sSkinURI:
              t.DEFINE.HTML_ROOT +
              "/smartEditor2/SmartEditor2Skin_Filecast.php",
            fCreator: "createSEditor2",
          });
      };
    t.DEFINE.AJAX_HTTP_TYPE = "html";
    var n = {
      server: t.DEFINE.SERVER_PROTOCOL,
      uri: t.PROTOCOL.URL.CS.NOTICE_WRITE_FORM,
      success: i,
      error_type: !1,
      loading_bar: !1,
      params: a,
    };
    t.PROTOCOL.ajaxCall(n, t);
  }),
  (WEB_CS.noticeReg = function () {
    console.log("WEB_CS.noticeReg in");
    var e = jQuery("#title").val(),
      t = jQuery("#is_ad").val(),
      a = jQuery("#csNoticeContents").val();
    if (2 > e.length)
      return alert("ì ëª©ì ìë ¥ í´ì£¼ì¸ì."), jQuery("#title").focus(), !1;
    if (20 > a.length) return alert("ë´ì©ì ìë ¥ í´ì£¼ì¸ì."), !1;
    var i = jQuery("#idx").val(),
      n = { idx: i, title: e, content: a, is_ad: t, code: "notice" },
      s = function () {
        alert("ë±ë¡ ëììµëë¤."), window.location.reload(!0);
      },
      o = APP.PROTOCOL.URL.CS.NOTICE_WRITE,
      r = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: o,
        success: s,
        error_type: !0,
        loading_bar: !1,
        params: n,
      };
    return APP.PROTOCOL.ajaxCall(r, APP), !1;
  }),
  (WEB_CS.noticeDelete = function (e) {
    if ((console.log("WEB_CS.noticeDelete in"), is_checked())) {
      var t = [];
      $("input[name='chk[]']:checked").each(function () {
        t.push($(this).val());
      });
      var a = { chk: t, type: e },
        i = function (e) {
          e.result > 0 ? alert("ì­ì  ëììµëë¤.") : alert("ë¤ìíë² ìëí´ ì£¼ì¸ì."),
            WEB_CS.noticeList(1);
        },
        n = APP.PROTOCOL.URL.CS.NOTICE_DELETE,
        s = {
          server: APP.DEFINE.SERVER_PROTOCOL,
          uri: n,
          success: i,
          error_type: !0,
          loading_bar: !1,
          params: a,
        };
      APP.PROTOCOL.ajaxCall(s, APP);
    } else alert("ì íë ìë£ê° ììµëë¤.");
  }),
  (WEB_CS.noticeDel = function (e) {
    console.log("WEB_CS.noticeDel in");
    var t = { chk: e, type: "notice" },
      a = function (e) {
        e.result > 0 ? alert("ì­ì  ëììµëë¤.") : alert("ì­ì  ëì§ ìììµëë¤."),
          WEB_CS.noticeList(1);
      },
      i = APP.PROTOCOL.URL.CS.NOTICE_DELETE,
      n = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: i,
        success: a,
        error_type: !0,
        loading_bar: !1,
        params: t,
      };
    APP.PROTOCOL.ajaxCall(n, APP);
  });
var WEB_QNA = {};
(WEB_QNA.DATA = {
  content_type: "JSON",
  defaultUri: "/200/1/1/",
  isDefault: !1,
  pagination: {},
}),
  (WEB_QNA.start = function (e) {
    (APP = e),
      WEB_QNA.scroll_down(),
      $(".oneToone_wrap img").css("cursor", "pointer"),
      $(".oneToone_wrap img").on("click", function () {
        var e = new Image();
        e.src = jQuery(this).attr("src");
        var t = window.open(
          "",
          "",
          "width=" +
            e.width +
            ",height=" +
            e.height +
            ",scrollbars=no,resizeable=no"
        );
        t.document.write(
          '<title>íì¼ìºì¤í¸ IMAGE</title><body topmargin=0 leftmargin=0 style="overflow-y:hidden;overflow-x:hidden" > <img style=cursor:hand; onclick="self.close()" src="' +
            e.src +
            '"></body>'
        );
      });
  }),
  (WEB_QNA.pageList = function (e) {
    var t = jQuery("#page").val(),
      a = { userid: e, page: t },
      i = function (e) {
        0 == e.qna_add ? jQuery("#add_qna").hide() : jQuery("#add_qna").show(),
          WEB_QNA.setData(e.qna_list, e.nickname, e.regdate, e.page);
      },
      n = APP.PROTOCOL.URL.CS.QNA_LIST,
      s = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: n,
        success: i,
        error_type: !0,
        loading_bar: !1,
        params: a,
      };
    APP.PROTOCOL.ajaxCall(s, APP);
  }),
  (WEB_QNA.addList = function (e) {
    var t = parseInt(jQuery("#page").val());
    jQuery("#page").val(t + 1), WEB_QNA.pageList(e);
  }),
  (WEB_QNA.scroll_down = function () {
    setTimeout(function () {
      (content_scroll = document.getElementById("check_top")),
        content_scroll.scrollHeight >= 0 &&
          (content_scroll.scrollTop = content_scroll.scrollHeight);
    }, 500);
  }),
  (WEB_QNA.inputQna = function () {
    var e = jQuery("#content").val();
    if (5 > e.length)
      return (
        alert("ê¶ê¸íì  ë´ì©ì ë³´ë¤ ìì¸í ì ì´ì£¼ì¸ì."),
        jQuery("#content").focus(),
        void 0
      );
    var t = { content: e },
      a = function (e) {
        "not_login" == e.result
          ? alert("ë¡ê·¸ì¸ í ì´ì©í´ ì£¼ì¸ì.")
          : "0" == e.result
          ? alert("ë±ë¡ ëì§ ìììµëë¤.\nì ìíì ì´ì©í´ ì£¼ì¸ì.")
          : (jQuery("#page").val(1),
            WEB_QNA.inputSetData(e.input),
            WEB_QNA.scroll_down(),
            jQuery("#content").val(""));
      },
      i = APP.PROTOCOL.URL.CS.QNA_INPUT,
      n = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: i,
        success: a,
        error_type: !0,
        loading_bar: !1,
        params: t,
      };
    APP.PROTOCOL.ajaxCall(n, APP);
  }),
  (WEB_QNA.inputSetData = function (data) {
    var startdate = "201611041030",
      enddate = "201611041800",
      now = new Date();
    (year = now.getFullYear()),
      (month = now.getMonth() + 1),
      2 > (month + "").length && (month = "0" + month),
      (date = now.getDate()),
      2 > (date + "").length && (date = "0" + date),
      (hour = now.getHours()),
      2 > (hour + "").length && (hour = "0" + hour),
      (minutes = now.getMinutes()),
      2 > (minutes + "").length && (minutes = "0" + minutes),
      (today = year + "" + month + date + hour + minutes);
    var returnHtml = "";
    (returnHtml += '<div class="user_wrap">'),
      (returnHtml += '<div class="u_con">'),
      (returnHtml += '<p class="q_con">' + data.content + "</p>"),
      (returnHtml += '<div class="u_btm">'),
      (returnHtml +=
        "<span>" +
        data.regdate +
        '</span><span class="oto_ing type1">ë¬¸ì ìë£</span>'),
      (returnHtml += "</div>"),
      (returnHtml += '<div class="bg"></div>'),
      (returnHtml += "</div>"),
      (returnHtml += "</div>"),
      (returnHtml += '<div class="manage_wrap">'),
      (returnHtml +=
        '<p><span class="m_img"><span class="img_inner"></span></span> <strong>íì¼ìºì¤í¸ ì´ìí</strong></p>'),
      (returnHtml += '<div class="m_con">'),
      (returnHtml +=
        eval(today) > eval(startdate) && eval(today) < eval(enddate)
          ? '<p class="a_con">ë¹ì¬ ìí¬ì ì¼ì ì¼ë¡ ì¸íì¬ 11ì 4ì¼(ê¸) 10ì 30ë¶ ~ 5ì¼(í ) 16ì 00ë¶ ê¹ì§<br>ê³ ê°ì¼í° ì´ìì´ ì¼ìì¤ì§ ë©ëë¤.<br>ìí¬ì ì¼ì  ì¢ë£ í íìëì ë¬¸ìì¬í­ì ì ìí ì²ë¦¬ ëìëë¦¬ê² ì¬ì¤ë<br>ì´ ì  ë§ì ìí´ ë°ëëë¤. ê°ì¬í©ëë¤.</p>'
          : '<p class="a_con">ì´ìíìì íìëì ë¬¸ìë´ì©ì íì¸ì¤ì ììµëë¤. ì¡°ê¸ë§ ê¸°ë¤ë ¤ì£¼ì¸ì.</p>'),
      (returnHtml += '<div class="m_btm">'),
      (returnHtml +=
        "<span>" +
        data.regdate +
        '</span><span class="oto_ing type1">ì ì ìë£</span>'),
      (returnHtml += "</div>"),
      (returnHtml += '<div class="bg"></div>'),
      (returnHtml += "</div>"),
      (returnHtml += "</div>"),
      jQuery("#list").append(returnHtml);
  }),
  (WEB_QNA.setData = function (e, t, a, i) {
    for (
      var n = function (e) {
          var t = "";
          return (
            "U" == e.kind
              ? ((t += '<div class="user_wrap">'),
                (t += '<div class="u_con">'),
                (t += '<p class="q_con">' + e.content + "</p>"),
                (t += '<div class="u_btm">'),
                (t +=
                  "<span>" +
                  e.regdate +
                  '</span><span class="oto_ing type1">ë¬¸ììë£</span>'),
                (t += "</div>"),
                (t += '<div class="bg"></div>'),
                (t += "</div>"),
                (t += "</div>"))
              : ((t += '<div class="manage_wrap">'),
                (t +=
                  '<p><span class="m_img"><span class="img_inner"></span></span> <strong>íì¼ìºì¤í¸ ì´ìí</strong></p>'),
                (t += '<div class="m_con">'),
                (t += '		<div class="a_con">' + e.content + "</div>"),
                (t += '		<div class="m_btm">'),
                (t +=
                  "		<span>" +
                  e.regdate +
                  '</span><span class="oto_ing type1">ëµë³ ìë£</span>'),
                (t += "		</div>"),
                (t += '		<div class="bg"></div>'),
                (t += "		</div>"),
                (t += "</div>")),
            t
          );
        },
        s = [],
        o = 0;
      e.length > o;
      o++
    ) {
      var r = n(e[o]);
      s.push(r);
    }
    i > 1
      ? jQuery("#list").prepend(s.join(""))
      : jQuery("#list").html(s.join(""));
  });
var WEB_ETC = {};
WEB_ETC.start = function (e) {
  console.log("WEB_ETC.start"), (this.app = e), (APP = this.app);
};
var WEB_EVENT = {};
(WEB_EVENT.DATA = { ORDER: 0, CALENDAR: null, FORM: null }),
  (WEB_EVENT.start = function (e, t, a) {
    if (
      (console.log("WEB_EVENT.start"),
      console.debug(t),
      console.debug(a),
      (this.app = e),
      (APP = this.app),
      console.debug(APP),
      console.debug(t),
      1 == isDefined(t) && 1 == isDefined(t.event_key))
    )
      return WEB_EVENT.loadViewPage(t.event_key, t.event_idx, APP), void 0;
    if (1 == isDefined(a.uri)) {
      var i = null,
        n = { idx: null, view_key: null },
        s = a.uri.split("/");
      if (
        (console.debug(s),
        s.length > 2 && ((i = s[1]), (n.idx = s[1]), (n.view_key = s[2])),
        null != i)
      )
        return WEB_EVENT.getEventView(i, n), void 0;
    }
    WEB_EVENT.loadData(APP, t);
  }),
  (WEB_EVENT.loadData = function (e) {
    console.log("WEB_EVENT.loadPage"),
      jQuery(".event-left-view-container").hide(),
      jQuery("#event-left-contents").show(),
      WEB_EVENT.setPaging(e),
      WEB_EVENT.setEventCenterBannerJssor(e);
  }),
  (WEB_EVENT.setPaging = function (e) {
    console.log("setPaging");
    var t = jQuery("#event-list-pagination-info"),
      a = {
        total: t.data("total"),
        page: t.data("page"),
        limit: t.data("limit"),
        type: t.data("type"),
        status: t.data("status"),
      };
    if (2 > a.total)
      return jQuery("#fc-event-list-pagination-div").empty(), void 0;
    jQuery("#fc-event-list-pagination-div").html(
      '<ul id="event-list-pagination-contents" class="pagination-sm">'
    );
    var i = 10;
    if (1 > a.total) {
      var i = 1;
      jQuery("#fc-event-list-pagination-div").empty();
    }
    var n = function (e, t) {
      console.log(t), console.debug(a), (a.page = t), WEB_EVENT.getEventList(a);
    };
    parseInt(a.page);
    var s = null;
    (s = $("#event-list-pagination-contents").twbsPagination({
      startPage: a.page,
      onPageClick: n,
      visiblePages: i,
      totalPages: a.total,
    })),
      1 == e &&
        jQuery("#event-list-pagination-contents li:eq(1)").addClass("active");
  }),
  (WEB_EVENT.getEventList = function (e, t) {
    console.log("WEB_EVENT.getEventList");
    var a = new FC_APP(),
      i = function (a) {
        console.log("successHttpHtmlEventList"),
          (e.total = a.event_list.total_page),
          (e.page = a.event_list.page),
          (e.limit = a.event_list.limit),
          jQuery("#event-list-pagination-info").data(e);
        for (var i = [], n = 0; a.event_list.list.length > n; n++) {
          var s = new Eventlist(a.event_list.list[n], n, null),
            o = s.listWebHtml();
          i.push(o);
        }
        jQuery("#event-list-ul").html(i.join("")),
          1 == t && WEB_EVENT.setPaging(t);
      },
      n = {
        server: a.DEFINE.SERVER_PROTOCOL,
        uri: a.PROTOCOL.URL.EVENT.LIST,
        success: i,
        error_type: !1,
        loading_bar: !1,
        params: e,
      };
    a.PROTOCOL.ajaxCall(n, a);
  }),
  (WEB_EVENT.onclickEventList = function (e, t) {
    console.log("onclickEventList in-------------");
    var a = {
        view_key: jQuery(t).data("view_key"),
        idx: jQuery(t).data("idx"),
        is_adult: jQuery(t).data("is_adult"),
      },
      i = ["mileage", "adult_parody"],
      n = fc_check_login();
    if (jQuery.inArray(a.view_key, i) >= 0 && 0 == n)
      return (
        jQuery("#fcJoinModal").modal("hide"),
        FC_MODAL_OPEN("fcLoginModal"),
        void 0
      );
    if ("1" == a.is_adult) {
      var s = parseInt(jQuery("#memberValidAdult").val());
      if (0 == n)
        return (
          jQuery("#fcJoinModal").modal("hide"),
          FC_MODAL_OPEN("fcLoginModal"),
          void 0
        );
      if (1 != s) return GO_MENU("adultSinup", "event"), void 0;
    }
    location.href = "/www/event/#!/" + a.idx + "/" + a.view_key + "/";
  }),
  (WEB_EVENT.onclickChangeSortEventList = function (e) {
    jQuery(".e_tab li").removeClass("active"), jQuery(e).addClass("active");
    var t = {
      total: jQuery("#event-list-pagination-info").data("total"),
      page: 1,
      limit: jQuery("#event-list-pagination-info").data("limit"),
      type: jQuery(e).data("type"),
      status: jQuery(e).data("status"),
    };
    WEB_EVENT.getEventList(t, !0);
  }),
  (WEB_EVENT.onclickMoveNextView = function (e) {
    console.log("WEB_EVENT.onclickMoveNextView");
    var t = {
        move_type: jQuery(e).data("type"),
        now_idx: jQuery(e).data("idx"),
      },
      a = new FC_APP(),
      i = function (e) {
        console.log("successHttpHtmlNextView");
        var t = e.next_idx,
          a = { view_key: e.next_view_key };
        jQuery("#event-left-list-container").length > 0
          ? (location.href = "/www/event/#!/" + t + "/" + a.view_key + "/")
          : GO_EVENT(t);
      },
      n = {
        server: a.DEFINE.SERVER_PROTOCOL,
        uri: a.PROTOCOL.URL.EVENT.MOVE,
        success: i,
        error_type: !1,
        loading_bar: !1,
        params: t,
      };
    a.PROTOCOL.ajaxCall(n, a);
  }),
  (WEB_EVENT.onclickEventListHome = function (e) {
    return (
      console.log("WEB_EVENT.onclickEventListHome"),
      { has_head: jQuery(e).data("has_head") },
      jQuery("#event-left-contents").length > 0
        ? (jQuery("#event-left-list-container").hide(),
          jQuery("#event-left-contents").show(),
          utility.ui.bodyTop(),
          (location.hash = "!/"),
          void 0)
        : (null == APP ? new FC_DEFINE() : APP.DEFINE,
          (location.href = "/www/event/"),
          void 0)
    );
  }),
  (WEB_EVENT.getEventView = function (e, t) {
    console.log("WEB_EVENT.getEventView:" + e), console.debug(t);
    var a = new FC_APP(),
      i = function (i) {
        console.log("successHttpHtmlEventView"),
          jQuery("#event-left-contents").hide(),
          jQuery("#event-left-list-container").length > 0
            ? jQuery("#event-left-list-container").html(i).show()
            : jQuery(".event-left-view-container").html(i).show(),
          WEB_EVENT.loadViewPage(t.view_key, e, a),
          utility.ui.bodyTop();
      };
    a.DEFINE.AJAX_HTTP_TYPE = "html";
    var n = {
      server: a.DEFINE.SERVER_PROTOCOL,
      uri: a.PROTOCOL.URL.EVENT.VIEW + "/" + e + "/0/",
      success: i,
      error_type: !1,
      loading_bar: !1,
      params: {},
    };
    a.PROTOCOL.ajaxCall(n, a);
  }),
  (WEB_EVENT.loadViewPage = function (e, t, a) {
    console.debug(WEB_EVENT),
      isDefined(e) &&
        (1 == isDefined(WEB_EVENT[e]) && WEB_EVENT[e].load(t, a, e),
        WEB_EVENT.getCommentList(t, 1, !0),
        WEB_EVENT.writeEventCommentFormValidate());
  }),
  (WEB_EVENT.getCommentList = function (e, t, a) {
    console.log("getCommentList:" + a);
    var i = "event-view-comment-list",
      n = jQuery("#fc-comment-pagination-info");
    (1 == a || 1 == t) && (WEB_EVENT.DATA.ORDER = 0);
    var s = {
        bbs_type: "event",
        bbs_idx: e,
        page: t,
        limit: n.data("limit"),
        m_idx: jQuery("#memberLoginOk").val(),
        m_level: jQuery("#memberValidLevel").val(),
        owner_idx: 1,
      },
      o = function (e) {
        console.log("successHttpGetCommentList");
        for (var t = e.comment_list.list, n = [], o = 0; t.length > o; o++) {
          var r = new Commentlist(s.bbs_type, t[o], WEB_EVENT.DATA.ORDER, s);
          n.push(r.listEventHtml(!0)), WEB_EVENT.DATA.ORDER++;
        }
        var l = {
          limit: e.comment_list.limit,
          page: e.comment_list.page,
          total_count: e.comment_list.total_count,
          total: e.comment_list.total_page,
        };
        if (
          (jQuery(".event-view-comment-count").html(l.total_count),
          jQuery("#" + i).html(n.join("")),
          jQuery("#fc-comment-pagination-info").data(l),
          1 == a)
        ) {
          WEB_EVENT.setCommentListPaging();
          var c = jQuery("#event-view-comment-list").height();
          jQuery("#event-view-comment-list").css({ "min-height": c + "px" });
        }
      };
    COMMENTLIST_FUN.getCommentList(s.bbs_type, s.bbs_idx, s.page, s.limit, o);
  }),
  (WEB_EVENT.setCommentListPaging = function () {
    console.log("WEB_EVENT.setCommentListPaging");
    var e = jQuery("#fc-comment-pagination-info"),
      t = {
        total: e.data("total"),
        page: e.data("page"),
        type: e.data("type"),
        idx: e.data("idx"),
      };
    if (!(2 > t.total)) {
      jQuery("#fc-comment-list-pagination-div").html(
        '<ul id="view-comment-pagination-contents" class="pagination-sm">'
      );
      var a = 10;
      if (1 > t.total) {
        var a = 1;
        jQuery("#fc-comment-list-pagination-div").empty();
      }
      var i = function (e, a) {
        WEB_EVENT.getCommentList(t.idx, a, !1);
      };
      $("#view-comment-pagination-contents").twbsPagination({
        startPage: t.page,
        onPageClick: i,
        visiblePages: a,
        totalPages: t.total,
      });
    }
  }),
  (WEB_EVENT.writeEventCommentFormValidate = function () {
    console.log("WEB_EVENT.writeEventCommentFormValidate"),
      null == APP && (APP = new FC_APP());
    var e = function (e) {
        console.log("submitCommentWrite");
        var t = jQuery(e).serialize(),
          a = function (e) {
            var t = e.comment_data,
              a = {
                m_idx: jQuery("#memberLoginOk").val(),
                m_level: jQuery("#memberValidLevel").val(),
                owner_idx: 1,
                bbs_idx: jQuery("#fc-event-view-idx").val(),
              };
            WEB_EVENT.DATA.ORDER++;
            var i = new Commentlist("event", t, WEB_EVENT.DATA.ORDER, a),
              n = i.listEventHtml();
            jQuery("#event-view-comment-list").prepend(n),
              jQuery("#comment-write-textarea-comments").val("");
          };
        COMMENTLIST_FUN.writeComment(t, a);
      },
      t = null;
    t = jQuery("#writeEventCommentForm").validate({
      errorClass: "form-error",
      debug: !0,
      rules: { comments: { required: !0, minlength: 5 } },
      messages: {
        comments: {
          required: "ì½ë©í¸ ë´ì©ì ìë ¥í´ì£¼ì¸ì.",
          minlength: jQuery.validator.format(
            "ì½ë©í¸ ë´ì©ì {0}ì ì´ì ìë ¥í´ì£¼ì¸ì"
          ),
        },
      },
      submitHandler: function (t) {
        e(t);
      },
      success: function () {},
    });
  }),
  (WEB_EVENT.setEventCenterBannerJssor = function () {
    function e() {
      var t = i.$Elmt.parentNode.clientWidth;
      t ? i.$ScaleWidth(Math.min(t, 778)) : window.setTimeout(e, 30);
    }
    var t = [
        {
          $Duration: 1200,
          x: -0.3,
          $During: { $Left: [0.3, 0.7] },
          $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear,
          },
          $Opacity: 2,
        },
        {
          $Duration: 1200,
          x: 0.3,
          $SlideOut: !0,
          $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear,
          },
          $Opacity: 2,
        },
      ],
      a = {
        $AutoPlay: !0,
        $AutoPlaySteps: 1,
        $AutoPlayInterval: 4e3,
        $PauseOnHover: 1,
        $ArrowKeyNavigation: !0,
        $SlideDuration: 500,
        $MinDragOffsetToSlide: 20,
        $SlideSpacing: 0,
        $DisplayPieces: 1,
        $ParkingPosition: 0,
        $UISearchMode: 1,
        $PlayOrientation: 1,
        $DragOrientation: 3,
        $SlideshowOptions: {
          $Class: $JssorSlideshowRunner$,
          $Transitions: t,
          $TransitionsOrder: 1,
          $ShowLink: !1,
        },
        $BulletNavigatorOptions: {
          $Class: $JssorBulletNavigator$,
          $ChanceToShow: 2,
          $Lanes: 1,
          $SpacingX: 10,
          $SpacingY: 10,
        },
        $ArrowNavigatorOptions: {
          $Class: $JssorArrowNavigator$,
          $ChanceToShow: 2,
          $AutoCenter: 2,
        },
        $ThumbnailNavigatorOptions: {
          $Class: $JssorThumbnailNavigator$,
          $ChanceToShow: 2,
          $ActionMode: 0,
          $DisableDrag: !0,
        },
        $LazyLoading: 0,
      },
      i = new $JssorSlider$("sliderb_container", a);
    e(),
      $(window).bind("load", e),
      $(window).bind("resize", e),
      $(window).bind("orientationchange", e);
  }),
  (WEB_EVENT.attend = {}),
  (WEB_EVENT.attend.load = function () {
    if ((console.log("WEB_EVENT.attend.load"), null == APP))
      var e = new FC_APP();
    else var e = APP;
    WEB_EVENT.attend.setAttendCalendar(e, !0);
  }),
  (WEB_EVENT.attend.getPageData = function () {}),
  (WEB_EVENT.attend.setAttendCalendar = function (e, t) {
    console.log("setAttendCalendar"),
      parseInt(jQuery("#memberLoginOk").val()),
      parseInt(jQuery("#memberValidAauthentic").val());
    var a = null,
      i = null,
      n = function (e) {
        console.log("myDateFunction"), console.debug(e);
        var t = $("#" + e).find(".day");
        t.data("year"), t.data("month");
        var a = t.data("type");
        return "today" == a
          ? (WEB_EVENT.attend.onclickJoinAttend(), void 0)
          : void 0;
      },
      s = function (e) {
        console.log("myNavFunction");
        var t = $("#" + e).data("navigation"),
          a = $("#" + e).data("to");
        console.log("nav " + t + " to:" + a.month + "/" + a.year),
          { year: a.year, month: a.month };
      },
      o = function (t) {
        console.log("callbackFun"),
          console.debug(t),
          1 == isDefined(t[33]) &&
            ((i = t[33]),
            console.debug(i),
            e.setMember(i),
            jQuery("#event-attend-member-check").show(),
            jQuery("#event-attend-member-check")
              .find(".user_id")
              .html(i.nickname)),
          1 == isDefined(t[32]) &&
            ((a = t[32]),
            console.debug(a),
            jQuery("#event-attend-member-check")
              .find(".total")
              .html(a.attend_days),
            jQuery("#event-attend-member-check")
              .find(".check-day")
              .html(a.succession_count));
      };
    WEB_EVENT.DATA.CALENDAR = null;
    var r = e.DEFINE.SERVER_PROTOCOL + e.PROTOCOL.URL.EVENT.ATTEND_LIST + "/1/";
    (WEB_EVENT.DATA.CALENDAR = $("#fc-attend-calendar").zabuto_calendar({
      cell_border: !0,
      action: function () {
        return n(this.id, !1);
      },
      action_nav: function () {
        return s(this.id, this);
      },
      ajax: { url: r, modal: !0 },
      language: "kor",
      today: !0,
      weekstartson: 0,
      nav_icon: {
        prev: '<i class="fc-select-month m_prev"><a>&lt;</a></i>',
        next: '<i class="fc-select-month m_next"><a>&gt;</a></i>',
      },
      callbackFun: o,
    })),
      console.debug(WEB_EVENT.DATA.CALENDAR);
  }),
  (WEB_EVENT.attend.onclickJoinAttend = function () {
    console.log("onclickJoinAttend");
    var e = parseInt(jQuery("#memberLoginOk").val()),
      t = parseInt(jQuery("#memberValidAauthentic").val());
    if (1 > e)
      return (
        alert("ì´ë²¤í¸ë ë¡ê·¸ì¸ í ì°¸ì¬ê° ê°ë¥í©ëë¤."), GO_MENU("login"), void 0
      );
    if (1 > t)
      return (
        alert("ì´ë²¤í¸ë ì¤ëª ì¸ì¦ í ì°¸ì¬ê° ê°ë¥í©ëë¤."),
        GO_MENU("realname"),
        void 0
      );
    var a = new FC_APP(),
      i = function (e) {
        console.log("successHttpJoinAttendEvent"),
          console.debug(e),
          jQuery("#event-attend-member-check").show(),
          1 == isDefined(e.member) &&
            (a.setMember(e.member),
            jQuery("#event-attend-member-check")
              .find(".user_id")
              .html(e.member.nickname)),
          1 == isDefined(e.log_data) &&
            (jQuery("#event-attend-member-check")
              .find(".total")
              .html(e.log_data.attend_days),
            jQuery("#event-attend-member-check")
              .find(".check-day")
              .html(e.log_data.succession_count));
        var t = e.log_data.cash;
        alert("ì´ë²¤í¸ì ì°¸ì¬í´ ì£¼ìì ê°ì¬í©ëë¤.\n" + t + "pê° ì§ê¸ëììµëë¤."),
          jQuery(".today-div").parent().addClass("event active");
      },
      n = {
        server: a.DEFINE.SERVER_PROTOCOL,
        uri: a.PROTOCOL.URL.EVENT.ATTEND_JOIN,
        success: i,
        error_type: !1,
        loading_bar: !1,
        params: {},
      };
    a.PROTOCOL.ajaxCall(n, a);
  }),
  (WEB_EVENT.facebook = {}),
  (WEB_EVENT.facebook.load = function () {
    console.log("WEB_EVENT.facebook.load"),
      WEB_EVENT.facebook.loginCheck(),
      (function (e, t, a) {
        var i,
          n = e.getElementsByTagName(t)[0],
          s = "164741076908518";
        e.getElementById(a) ||
          ((i = e.createElement(t)),
          (i.id = a),
          (i.src =
            "//connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.4&appId=" +
            s),
          n.parentNode.insertBefore(i, n));
      })(document, "script", "facebook-jssdk"),
      (window.fbAsyncInit = function () {
        FB.Event.subscribe("edge.create", function () {
          WEB_EVENT.facebook.onclickFaceBookLike();
        }),
          FB.Event.subscribe("edge.remove", function (e) {
            console.log("You liked remove the URL: " + e);
          });
      });
  }),
  (WEB_EVENT.facebook.loginCheck = function () {
    var e = parseInt(jQuery("#memberLoginOk").val()),
      t = parseInt(jQuery("#memberValidAauthentic").val());
    e > 0 && t > 0 && jQuery("#event-fb-over-layer").hide();
  }),
  (WEB_EVENT.facebook.onclickOverLayer = function (e) {
    console.log("WEB_EVENT.facebook.onclickOverLayer");
    var t = parseInt(jQuery("#memberLoginOk").val()),
      a = parseInt(jQuery("#memberValidAauthentic").val());
    return 1 > t
      ? (alert("ì´ë²¤í¸ë ë¡ê·¸ì¸ í ì°¸ì¬ê° ê°ë¥í©ëë¤."),
        GO_MENU("login"),
        void 0)
      : 1 > a
      ? (alert("ì´ë²¤í¸ë ì¤ëª ì¸ì¦ í ì°¸ì¬ê° ê°ë¥í©ëë¤."),
        GO_MENU("realname"),
        void 0)
      : (jQuery(e).hide(), void 0);
  }),
  (WEB_EVENT.facebook.onclickFaceBookLike = function () {
    console.log("WEB_EVENT.facebook.onclickFaceBookLike");
    var e = parseInt(jQuery("#memberLoginOk").val()),
      t = parseInt(jQuery("#memberValidAauthentic").val());
    if (1 > e)
      return (
        alert("ì´ë²¤í¸ë ë¡ê·¸ì¸ í ì°¸ì¬ê° ê°ë¥í©ëë¤."), GO_MENU("login"), void 0
      );
    if (1 > t)
      return (
        alert("ì´ë²¤í¸ë ì¤ëª ì¸ì¦ í ì°¸ì¬ê° ê°ë¥í©ëë¤."),
        GO_MENU("realname"),
        void 0
      );
    var a = new FC_APP(),
      i = function (e) {
        if (
          (console.log("successHttpHtmlFacebookEvent"),
          console.debug(e),
          1 == isDefined(e.member) && a.setMember(e.member),
          1 == isDefined(e.log_data))
        ) {
          var t = e.log_data.cash;
          alert("ì´ë²¤í¸ì ì°¸ì¬í´ ì£¼ìì ê°ì¬í©ëë¤.\n" + t + "pê° ì§ê¸ëììµëë¤.");
        }
      },
      n = {
        server: a.DEFINE.SERVER_PROTOCOL,
        uri: a.PROTOCOL.URL.EVENT.FACEBOOK_JOIN,
        success: i,
        error_type: !1,
        loading_bar: !1,
        params: {},
      };
    a.PROTOCOL.ajaxCall(n, a);
  }),
  (WEB_EVENT.seller = {}),
  (WEB_EVENT.seller.load = function () {
    console.log("WEB_EVENT.seller.load");
  }),
  (WEB_EVENT.seller.onClickSingUpSeller = function () {
    console.log("onClickSingUpSeller");
    var e = parseInt(jQuery("#memberLoginOk").val()),
      t = parseInt(jQuery("#memberValidAauthentic").val());
    return 1 > e
      ? (alert("ì´ë²¤í¸ë ë¡ê·¸ì¸ í ì°¸ì¬ê° ê°ë¥í©ëë¤."),
        GO_MENU("login"),
        void 0)
      : 1 > t
      ? (alert("ì´ë²¤í¸ë ì¤ëª ì¸ì¦ í ì°¸ì¬ê° ê°ë¥í©ëë¤."),
        GO_MENU("adultSinup"),
        void 0)
      : (GO_MENU("joinSeller"), void 0);
  }),
  (WEB_EVENT.contents10 = {}),
  (WEB_EVENT.contents10.load = function () {
    console.log("WEB_EVENT.contents10.load");
  }),
  (WEB_EVENT.seller2 = {}),
  (WEB_EVENT.seller2.load = function () {
    console.log("WEB_EVENT.seller2.load");
  }),
  (WEB_EVENT.mobile = {}),
  (WEB_EVENT.mobile.load = function () {
    console.log("WEB_EVENT.mobile.load"), jQuery("#failBaboIframeDiv").empty();
  }),
  (WEB_EVENT.mobile.onClickMobileExp = function () {
    console.log("onClickMobileExp");
    var e = null;
    FC_MODAL_OPEN("fcModalMobileEvent", !1, e);
  }),
  (WEB_EVENT.self = {}),
  (WEB_EVENT.self.load = function () {
    console.log("WEB_EVENT.self.load");
  }),
  (WEB_EVENT.self.authPop = function () {
    document.domain = "filecast.co.kr";
    var e = new FC_APP(),
      t = window.open(
        "about:blank",
        "DRMOKWindow",
        "width=425, height=550, resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=435, top=100"
      ),
      a = function (e) {
        if (1 == e.result.login) {
          var a = e.result.email,
            i =
              "http://mobilecheck.mecross.co.kr/popup/cert.html?a_code=s_filecast&userid=" +
              a;
          return (t.location = i), void 0;
        }
        return t.close(), GO_MENU("login"), void 0;
      },
      i = {
        server: e.DEFINE.SERVER_PROTOCOL,
        uri: e.PROTOCOL.URL.EVENT.AUTH_LOGIN_CHECK,
        success: a,
        error_type: !1,
        loading_bar: !1,
        params: {},
      };
    e.PROTOCOL.ajaxCall(i, e);
  }),
  (WEB_EVENT.mobile_app = {}),
  (WEB_EVENT.mobile_app.load = function () {
    console.log("WEB_EVENT.mobile_app.load");
  }),
  (WEB_EVENT.free = {}),
  (WEB_EVENT.free.load = function () {
    console.log("WEB_EVENT.free.load");
  }),
  (WEB_EVENT.free.getDetailInfo = function (e) {
    console.log("WEB_THEME.getThemeCate!!!"),
      (WEB_THEME.SCROLL_FLAG = !1),
      (WEB_THEME.BRO_SCROLL = null);
    var t = {
      idx: $(e).data("idx"),
      keywd: $(e).data("keywd"),
      ele: $(e).data("ele"),
      type: $(e).data("type"),
    };
    if (jQuery(e).hasClass("active"))
      return (
        jQuery("#" + t.ele).hide(100),
        jQuery(e).children(".btn_l_close").css({ display: "none" }),
        jQuery(e).removeClass("active"),
        void 0
      );
    null == APP && (APP = new FC_APP());
    var a = function (a) {
        console.log("successThemeDetailInfo"),
          console.debug(a),
          jQuery(".btn_l_close").css({ display: "none" }),
          jQuery(".theme-item-list-li").removeClass("active"),
          jQuery(e).addClass("active"),
          jQuery(e).children(".btn_l_close").css({ display: "block" }),
          jQuery(".theme_section").empty().css({ display: "none" });
        var i = "movie",
          n = "",
          s = !0;
        if (isDefined(a.theme_info)) {
          if (0 == isDefined(a.theme_info.movie))
            return alert("ì¼ì¹í ì ë³´ë¥¼ ì°¾ì ì ììµëë¤."), void 0;
          (n = TEMPLATE_FUN.themeBroadcastContentsHtml(
            a.theme_info.movie,
            a.theme_info.chapter,
            1
          )),
            (i = "broad"),
            (s = !1);
        }
        if (
          (jQuery("#" + t.ele)
            .addClass(i)
            .html(n)
            .show(),
          0 == s)
        ) {
          var o =
              "#fc-theme-bro-chapter-list-iscroll-" + a.theme_info.movie.idx,
            r = "#fc-theme-brocast-paging-div";
          if (isDefined(a.theme_info.chapter)) {
            var l = a.theme_info.chapter,
              c = {
                page: l.page,
                limit: l.limit,
                bro_idx: a.theme_info.movie.idx,
                sort: l.sort,
                total_page: l.total_page,
                ele: o,
              };
            console.debug(c), jQuery(r).data(c);
          }
          console.log("scrollEle::" + o),
            1 == isDefined(a.theme_info.chapter.list) &&
              a.theme_info.chapter.list.length > 0 &&
              (jQuery(".fc-theme-bro-chapter-title").show(),
              setTimeout(function () {
                WEB_THEME.setIScrollBroascastList(o, !0);
              }, 500));
        }
        var d = $("html,body");
        d.animate({ scrollTop: $(e).offset().top }, 500);
      },
      i = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: APP.PROTOCOL.URL.THEME.LIST_DETAIL,
        success: a,
        error_type: !1,
        loading_bar: !0,
        params: { idx: t.idx, keywd: t.keywd, type: t.type },
      };
    APP.PROTOCOL.ajaxCall(i, APP);
  }),
  (WEB_EVENT.blog = {}),
  (WEB_EVENT.blog.load = function (e, t, a) {
    console.log("WEB_EVENT.blog.load"), WEB_EVENT.snsEventLoadForm(a);
  }),
  (WEB_EVENT.blog2 = {}),
  (WEB_EVENT.blog2.load = function (e, t, a) {
    console.log("WEB_EVENT.blog2.load"), WEB_EVENT.snsEventLoadForm(a);
  }),
  (WEB_EVENT.intel2 = {}),
  (WEB_EVENT.intel2.load = function (e, t, a) {
    console.log("WEB_EVENT.intel2.load"),
      WEB_EVENT.snsEventLoadForm(a),
      jQuery(".check_area ul li").on("click", function () {
        jQuery("#data-keyword").val(jQuery(this).attr("data-keyword")),
          $("input[name=check]").prop("checked", !1),
          jQuery(this).children(":checkbox").prop("checked", !0);
      }),
      jQuery("#naver_kin").on("click", function () {
        var e = jQuery("#data-keyword").val();
        jQuery(".keyword-kin").val(e), jQuery("#naver_kin_form").submit();
      }),
      jQuery("#daum_kin").on("click", function () {
        var e = jQuery("#data-keyword").val();
        jQuery(".keyword-kin").val(e), jQuery("#daum_kin_form").submit();
      });
    var i = jQuery(".check_area ul li").length,
      n = randomNumberFromRange(0, i - 1);
    jQuery(".check_area ul li").eq(n).trigger("click");
  }),
  (WEB_EVENT.intel = {}),
  (WEB_EVENT.intel.load = function (e, t, a) {
    console.log("WEB_EVENT.intel.load"), WEB_EVENT.snsEventLoadForm(a);
  }),
  (WEB_EVENT.sns = {}),
  (WEB_EVENT.sns.load = function () {
    console.log("WEB_EVENT.sns.load");
  }),
  (WEB_EVENT.pro1 = {}),
  (WEB_EVENT.pro1.load = function () {
    console.log("WEB_EVENT.pro1.load");
  }),
  (WEB_EVENT.pro2 = {}),
  (WEB_EVENT.pro2.load = function () {
    console.log("WEB_EVENT.pro2.load");
  }),
  (WEB_EVENT.pro3 = {}),
  (WEB_EVENT.pro3.load = function () {
    console.log("WEB_EVENT.pro3.load");
  }),
  (WEB_EVENT.snsEventLoadForm = function (e) {
    console.log("WEB_EVENT.snsEventLoadForm"), (WEB_EVENT.DATA.FORM = null);
    var t = new FC_APP(),
      a = {
        view: e,
        ele_id: "#event-sns-blog-input-div",
        form_id: "#eventFormBlog",
        form_action: t.PROTOCOL.URL.EVENT.SNS_REG + e + "/",
        type: 1,
        msg: ["í¬í ì¬ì´í¸ ìì´ë", "í¬ì¤íê¸ URL ì£¼ì"],
        form_sns_id: "#form-sns-user-id",
        form_sns_url: "#form-sns-user-url",
      };
    "intel" == e || "intel2" == e
      ? ((a.form_id = "#eventFormIntel"),
        (a.ele_id = "#eventFormIntel"),
        (a.msg = ["í¬í¸ì¬ì´í¸ ëµë³ ìì´ë", "ëµë³ URL ì£¼ì"]))
      : "sns" == e
      ? ((a.form_id = "#eventFormFacebook"),
        (a.msg = ["í¬í ì¬ì´í¸ ìì´ë", "í¬ì¤íê¸ URL ì£¼ì"]))
      : "twitter" == e
      ? ((a.form_id = "#eventFormTwitter"),
        (a.msg = ["í¬í ì¬ì´í¸ ìì´ë", "í¬ì¤íê¸ URL ì£¼ì"]),
        (a.form_sns_id = "#form-sns-twitter-user-id"),
        (a.form_sns_url = "#form-sns-twitter-user-url"))
      : "google" == e &&
        ((a.form_id = "#eventFormGoogle"),
        (a.msg = ["í¬í ì¬ì´í¸ ìì´ë", "í¬ì¤íê¸ URL ì£¼ì"]),
        (a.form_sns_id = "#form-sns-user-google-id"),
        (a.form_sns_url = "#form-sns-google-user-url"));
    var i = t.DEFINE.SERVER_PROTOCOL + a.form_action;
    console.log(i);
    var n = function (e, t, i) {
        var n = $.param(e);
        console.debug(e), console.debug(t), console.debug(i), console.debug(n);
        var o = {};
        for (var r in e) {
          var l = e[r].name;
          o[l] = e[r].value;
        }
        console.debug(o);
        var c = parseInt(jQuery("#memberLoginOk").val());
        if ((parseInt(jQuery("#memberValidAauthentic").val()), 1 > c))
          return (
            s("ì´ë²¤í¸ë ë¡ê·¸ì¸ í ì°¸ì¬ê° ê°ë¥í©ëë¤."), GO_MENU("login"), !1
          );
        if (0 == isDefined(o.sns_id) || "" == o.sns_id) {
          var d = a.msg[0] + "ë¥¼ ìë ¥í´ì£¼ì¸ì.";
          return s(d), jQuery(a.form_sns_id).focus(), !1;
        }
        if (0 == isDefined(o.sns_url) || "" == o.sns_url) {
          var d = a.msg[1] + "ë¥¼ ìë ¥í´ ì£¼ì¸ì.";
          return s(d), jQuery(a.form_sns_id).focus(), !1;
        }
        return !0;
      },
      s = function (e) {
        console.log("errStatusMsg"), alert(e);
      },
      o = function (i) {
        console.log("successEventJoinFormFun");
        var n = i;
        return (
          console.debug("====="),
          console.debug(n),
          0 == isDefined(n.status)
            ? (alert("ë°ì´íë¥¼ íì¸í  ì ììµëë¤.\në¤ì ìëí´ì£¼ì¸ì."), void 0)
            : 1 != parseInt(n.status.code)
            ? (t.PROTOCOL.errorCommon(n, t, null), void 0)
            : (isDefined(n.result.member) && t.setMember(n.result.member),
              alert(
                "ì´ë²¤í¸ì ì°¸ì¬í´ ì£¼ìì ê°ì¬í©ëë¤.\níì¸ í ì´ìíìì í¬ì¸í¸ë¥¼ ì ë¦½í´ ëë¦¬ê² ìµëë¤."
              ),
              $(a.form_id).unbind("submit"),
              "twitter" == e
                ? jQuery(".twitter_area").remove()
                : "google" == e && jQuery(".google_area").remove(),
              void 0)
        );
      },
      r = {
        target: ".url_input",
        beforeSubmit: n,
        success: o,
        url: i,
        dataType: "json",
      };
    WEB_EVENT.DATA.FORM = jQuery(a.form_id).ajaxForm(r);
  }),
  (WEB_EVENT.mbc_sale = {}),
  (WEB_EVENT.mbc_sale.load = function () {
    console.log("WEB_EVENT.mbc_sale.load");
  }),
  (WEB_EVENT.mbc_sale.getList = function (e) {
    console.log("WEB_EVENT.mbc_sale.getList");
    var t = jQuery(e).data("sort"),
      a = new FC_APP(),
      i = { sort: t, runing: "off", show_type: 1 },
      n = function (t) {
        console.log("successGetHttpMbcDramaList"), console.debug(t);
        for (
          var a = t.sale_list, i = [], n = null, s = null, o = 0;
          a.length > o;
          o++
        )
          (s = encodeURI(a[o].title)),
            (n =
              '<li><a href="/www/search/?category=main&location=main&search=' +
              s +
              '"><span class="img"><img src="' +
              a[o].thumbnail +
              '" alt="" /></span><span class="txt">' +
              a[o].title +
              "</span></a></li>"),
            i.push(n);
        jQuery("#event-mbc-sale-end-list-ul").html(i.join("")),
          jQuery(".mbc-end-sort-btn").removeClass("active"),
          jQuery(e).addClass("active");
      },
      s = {
        server: a.DEFINE.SERVER_PROTOCOL,
        uri: a.PROTOCOL.URL.EVENT.MBC_SALE_DRAMA_LIST,
        success: n,
        error_type: !1,
        loading_bar: !0,
        params: i,
      };
    a.PROTOCOL.ajaxCall(s, a);
  }),
  (WEB_EVENT.mbc_sale_show = {}),
  (WEB_EVENT.mbc_sale_show.load = function () {
    console.log("WEB_EVENT.mbc_sale_show.load");
  }),
  (WEB_EVENT.mbc_sale_show.getList = function (e) {
    console.log("WEB_EVENT.mbc_sale_show.getList");
    var t = jQuery(e).data("sort"),
      a = new FC_APP(),
      i = { sort: t, runing: "off", show_type: 2 },
      n = function (t) {
        console.log("successGetHttpMbcDramaList"), console.debug(t);
        for (
          var a = t.sale_list, i = [], n = null, s = null, o = 0;
          a.length > o;
          o++
        )
          (s = encodeURI(a[o].title)),
            (n =
              '<li><a href="/www/search/?category=main&location=main&search=' +
              s +
              '"><span class="img"><img src="' +
              a[o].thumbnail +
              '" alt="" /></span><span class="txt">' +
              a[o].title +
              "</span></a></li>"),
            i.push(n);
        jQuery("#event-mbc-sale-show-end-list-ul").html(i.join("")),
          jQuery(".mbc-end-sort-btn").removeClass("active"),
          jQuery(e).addClass("active");
      },
      s = {
        server: a.DEFINE.SERVER_PROTOCOL,
        uri: a.PROTOCOL.URL.EVENT.MBC_SALE_DRAMA_LIST,
        success: n,
        error_type: !1,
        loading_bar: !0,
        params: i,
      };
    a.PROTOCOL.ajaxCall(s, a);
  }),
  (WEB_EVENT.edu_sale = {}),
  (WEB_EVENT.edu_sale.load = function () {
    console.log("WEB_EVENT.edu_sale.load");
  }),
  (WEB_EVENT.free_charge = {}),
  (WEB_EVENT.free_charge.onclickBanner = function () {
    if (
      (console.log("WEB_EVENT.free_charge.onclickBanner"),
      0 == fc_check_login())
    )
      return (
        jQuery("#fcJoinModal").modal("hide"),
        FC_MODAL_OPEN("fcLoginModal"),
        void 0
      );
    var e = jQuery("#memberLoginOk").val(),
      t =
        "http://event.lifeday.co.kr/event/gateway?c_code=c00000002&m_code=m00000089&s_code=s00000120&b_code=b00000170&event_idx=choisun_event_1&event_name=july_web_1&cp_name=choisun&userid=" +
        e;
    console.log(t),
      window.open(
        t,
        "freeChargeWin",
        "width=820, height=826, resizable=0, scrollbars=yes, status=0, titlebar=0, toolbar=0, left=0, top=0"
      );
  }),
  (WEB_EVENT.kakao_friend = {}),
  (WEB_EVENT.kakao_friend.load = function () {
    console.log("WEB_EVENT.kakao_friend.load");
    var e = new FC_APP(),
      t = function (e) {
        console.log("successGetHttpMbcDramaList"),
          console.debug(e),
          1 == isDefined(e.sender) &&
            null != e.sender &&
            WEB_EVENT.kakao_friend.showSenderCount(e.sender);
      },
      a = {
        server: e.DEFINE.SERVER_PROTOCOL,
        uri: e.PROTOCOL.URL.EVENT.KAKAO_FRIEND_S_COUNT,
        success: t,
        error_type: !1,
        loading_bar: !0,
        params: {},
      };
    e.PROTOCOL.ajaxCall(a, e);
  }),
  (WEB_EVENT.kakao_friend.showSenderCount = function (e) {
    console.log("WEB_EVENT.kakao_friend.showSenderCount"), console.debug(e);
    var t = parseInt(e.invited_count);
    jQuery(".fc-web-kakao-friend-event-i-count-txt").html(t),
      t > 70 && (t = 70);
    var a = null,
      i = null,
      n = 0,
      s = 5,
      o = 0;
    if (!(1 > t)) {
      5 > t
        ? ((s = 5), (n = 100 * (t / 5)), (o = 13 + 57 * (t / 5)))
        : 15 > t
        ? ((s = 15),
          (a = ["in5"]),
          (i = ["person5"]),
          (n = 100 * ((t - 5) / 10)),
          (o = 70 + 128 * ((t - 5) / 10)))
        : 30 > t
        ? ((s = 30),
          (a = ["in5", "in15"]),
          (i = ["person5", "person15"]),
          (n = 100 * ((t - 15) / 15)),
          (o = 198 + 186 * ((t - 15) / 15)))
        : 70 > t
        ? ((s = 70),
          (a = ["in5", "in15", "in30"]),
          (i = ["person5", "person15", "person30"]),
          (n = 100 * ((t - 30) / 40)),
          (o = 384 + 305 * ((t - 30) / 40)))
        : t >= 70 &&
          ((s = 100),
          (a = ["in5", "in15", "in30", "in70"]),
          (i = ["person5", "person15", "person30", "person70"]),
          (n = 100),
          (o = 689));
      var r = "";
      if (null != a)
        for (var l = 0; a.length > l; l++)
          jQuery(".add_num." + a[l]).addClass("active"),
            jQuery(".circle." + i[l]).addClass("active"),
            (r = ".graph_bar." + i[l] + " .bar_area"),
            jQuery(r).css({ width: "100%" });
      var c = ".graph_bar.person" + s + " .bar_area";
      jQuery(c).animate({ width: n + "%" }, 2e3, function () {}),
        70 > t &&
          (jQuery("#fc-web-kakao-friend-event-i-count .n_txt").html(t),
          jQuery("#fc-web-kakao-friend-event-i-count")
            .css({ left: o + "px" })
            .show()),
        console.log("countBalloonWidth::" + o),
        console.log("thisBarPer::" + n),
        console.log("missionCount:" + t);
    }
  }),
  (WEB_EVENT.kakao_friend.joinWebEvent = function () {
    new FC_DEFINE(!1),
      console.log("WEB_EVENT.kakao_friend.joinWebEvent"),
      alert("ì¹´ì¹´ì¤í¡ ì¹êµ¬ ì´ë ì´ë²¤í¸ë ëª¨ë°ì¼ììë§ ì°¸ì¬ê° ê°ë¥í©ëë¤.");
  });
var WEB_EVENT_KING_SELLER = {};
(WEB_EVENT_KING_SELLER.DATA = { ORDER: 0, CALENDAR: null, FORM: null }),
  (WEB_EVENT_KING_SELLER.start = function () {}),
  (WEB_EVENT_KING_SELLER.onclickEventList = function (e, t) {
    console.log("WEB_EVENT_KING_SELLER.onclickEventList in-------------");
    var a = {
        view_key: jQuery(t).data("view_key"),
        idx: jQuery(t).data("idx"),
        is_adult: jQuery(t).data("is_adult"),
      },
      i = ["mileage", "adult_parody", "king_seller"],
      n = fc_check_login();
    return jQuery.inArray(a.view_key, i) >= 0 && 0 == n
      ? (GO_MENU("king_seller"), void 0)
      : (WEB_EVENT_KING_SELLER.getEventView(e, a), void 0);
  }),
  (WEB_EVENT_KING_SELLER.getEventView = function () {
    console.log("WEB_EVENT_KING_SELLER.getEventView");
    var e = new FC_APP(),
      t = "/www" + e.PROTOCOL.URL.EVENT.KING_SELLER_VIEW;
    location.href = t;
  });
var FILE_FN = {};
(FILE_FN.ACTIVE_CHECK = !1),
  (FILE_FN.SET_INTVAL = null),
  (FILE_FN.SET_INTVAL_COUNT = 0),
  (FILE_FN.NOVEL_POPUP = null),
  (FILE_FN.openFileUploader = function (e) {
    null == e && (e = ""),
      console.log("FILE_FN.openFileUploader"),
      null == APP && (APP = new FC_APP()),
      console.debug(APP);
    var t = parseInt(jQuery("#memberLoginOk").val()),
      a = parseInt(jQuery("#memberValidUploader").val());
    if (0 == t) return FC_MODAL_OPEN("fcLoginModal"), void 0;
    if (0 == a)
      return alert("íë§¤ì ë±ë¡í ì´ì©íì¸ì."), GO_MENU("joinSeller"), void 0;
    if (2 == a) return alert("íë§¤ì ì¹ì¸ ì¬ì¬ì¤ìëë¤."), void 0;
    var i = APP.SELECTED.main;
    (0 == i || 300 == i) && (i = 1);
    var n = APP.DEFINE.SERVER_NEWURL + "/file/upload/" + i + "/?link_idx=" + e;
    windowOpenCenter(
      n,
      "uploader",
      "880",
      "820",
      "scrollbars=1,top=20,left=20"
    );
  }),
  (FILE_FN.checkFileDownloader = function (e, t) {
    if (
      (console.log("FILE_FN.checkFileDownloader"),
      utility.ui.modalTop(),
      0 == fc_check_login())
    )
      return GO_MENU("login", "modal"), void 0;
    var a = new FC_APP();
    console.debug(a);
    var i = jQuery(t).data("type"),
      n = {
        copy: jQuery(t).data("copy"),
        alam: jQuery(t).data("alam"),
        dcount: jQuery(t).data("dcount"),
        file: jQuery(t).data("file"),
        cate1: jQuery(t).data("cate1"),
        type: jQuery(t).data("type"),
        is_adult: jQuery(t).data("is_adult"),
        price: jQuery("#bbsViewCashPrice").val(),
      };
    if (
      (console.debug(n),
      ("1" == n.copy && "11" == n.cate1) ||
        ("1" == n.copy && "1" == n.cate1 && "1" == n.is_adult))
    ) {
      var s =
        "í´ë¹ ì±ì¸ ì½íì¸ ë ì ìê¶ì¬ì ì í´ ë ì½íì¸ ìëë¤\nì í´í¬ì¸í¸ " +
        n.price +
        "pê° ìëª¨ë©ëë¤.";
      if (0 == confirm(s)) return;
    }
    if ("1" == n.copy && "0" == n.alam && "3" == n.dcount)
      return (
        fc_alert(
          "ì¬ ë¤ì´ë¡ë ìê°ì´ ì§ë¬ê±°ë ë¤ì ë¤ì´ë¡ë ê°ë¥í íìë¥¼ ì´ê³¼íììµëë¤.\ní¬ì¸í¸ë¡ ë¤ìë°ì¼ìë ¤ë©´ íì¼ ë°ê¸°ë¥¼ ë¤ì í´ë¦­í´ì£¼ì¸ì."
        ),
        jQuery(t).data("alam", "1"),
        void 0
      );
    if ("NOVEL" == n.type || "REDOWN_NOVEL" == n.type) {
      var o = utility.ui.viewport(),
        r =
          "toolbar=0, status=0, scrollbars=yes,menubar=0,height=" +
          o.height +
          ",width=920";
      return (
        (FILE_FN.NOVEL_POPUP = window.open("about:blank", "fc_novel_view", r)),
        WEB_DOWOLOAD.downloadFile(a, e, n.type, n.file),
        void 0
      );
    }
    return 1 != getStorageInstalledCUS()
      ? (showDownloadBannerGuide(),
        FILE_FN.checkDownloaderInstalled(a, FILE_FN.setDownloaderInstallOk),
        void 0)
      : (console.log("getStorageInstalledCUS installed"),
        0 == checkInstallDownloaderGuide()
          ? jQuery("#fc-warning-guid-install").show()
          : moveDownloadController(),
        FILE_FN.actionFileDownload(a, e, i),
        void 0);
  }),
  (FILE_FN.setDownloaderInstallOk = function (e) {
    console.log("FILE_FN.setDownloaderInstallOk:" + e),
      0 != e &&
        (null != FILE_FN.SET_INTVAL && clearInterval(FILE_FN.SET_INTVAL),
        (FILE_FN.SET_INTVAL = null),
        (FILE_FN.SET_INTVAL_COUNT = 0),
        setStorageInstalledCUS(1),
        hideDownloadBannerGuide());
  }),
  (FILE_FN.onclickInstalledDownloader = function () {
    console.log("FILE_FN.onclickInstalledDownloader:"),
      FILE_FN.setDownloaderInstallOk(!0),
      nonInstallDownloaderGuide();
  }),
  (FILE_FN.checkDownloaderInstallLoop = function () {
    console.log("FILE_FN.checkDownloaderInstallLoop");
    var e = new FC_APP();
    null != FILE_FN.SET_INTVAL && clearInterval(FILE_FN.SET_INTVAL),
      (FILE_FN.SET_INTVAL = null),
      (FILE_FN.SET_INTVAL_COUNT = 0);
    var t = function (e) {
      return (
        console.log(
          "callbackFun:" + FILE_FN.SET_INTVAL_COUNT + "isSuccess:" + e
        ),
        FILE_FN.SET_INTVAL_COUNT >= 200 || 1 == e
          ? (clearInterval(FILE_FN.SET_INTVAL),
            (FILE_FN.SET_INTVAL = null),
            (FILE_FN.SET_INTVAL_COUNT = 0),
            FILE_FN.setDownloaderInstallOk(!0),
            void 0)
          : (FILE_FN.SET_INTVAL_COUNT++, void 0)
      );
    };
    FILE_FN.SET_INTVAL = setInterval(function () {
      FILE_FN.checkDownloaderInstalled(e, t);
    }, 1e3);
  }),
  (FILE_FN.startDownloaderInstaller = function () {
    console.log("FILE_FN.startDownloaderInstaller");
    var e = new FC_APP();
    console.log(e.DEFINE.APP_URL_SETUP_FILE),
      1 == IsBrowserIE_FC() && 9 > _FC_BrowserRuntimeVersion
        ? (window.location.href = e.DEFINE.APP_URL_SETUP_FILE)
        : ($("#fc-install-download-link").prop(
            "href",
            e.DEFINE.APP_URL_SETUP_FILE
          ),
          $("#fc-install-download-link").prop(
            "download",
            e.DEFINE.APP_URL_SETUP_FILE
          ),
          $("#fc-install-download-link")[0].click());
    var t = function (e) {
        console.log("successHttpGetData"),
          console.debug(e),
          window.setTimeout(function () {
            FILE_FN.checkDownloaderInstallLoop();
          }, 3e3);
      },
      a = {
        server: e.DEFINE.SERVER_PROTOCOL,
        uri: e.PROTOCOL.URL.CONTENTS.START_DOWNLOD,
        success: t,
        error_type: !1,
        loading_bar: !1,
        params: {},
      };
    e.PROTOCOL.ajaxCall(a, e);
  }),
  (FILE_FN.actionFileDownload = function (e, t, a) {
    console.log("FILE_FN.actionFileDownload");
    var i = parseInt(jQuery("#memberLoginOk").val());
    return (
      parseInt(jQuery("#memberValidUploader").val()),
      0 == i
        ? (FC_MODAL_OPEN("fcLoginModal"), void 0)
        : (WEB_DOWOLOAD.downloadFile(e, t, a), void 0)
    );
  }),
  (FILE_FN.checkDownloaderInstalled = function (e, t) {
    console.log("FILE_FN.checkDownloaderInstalled");
    var a = function (e) {
        return (
          console.log("successHttpGetData"),
          console.debug(e),
          1 == isDefined(e.check) && "1" == e.check
            ? (t(!0), void 0)
            : (t(!1), void 0)
        );
      },
      i = {
        server: e.DEFINE.SERVER_PROTOCOL,
        uri: e.PROTOCOL.URL.CONTENTS.CHECK_INSTALLED,
        success: a,
        error_type: !1,
        loading_bar: !1,
        params: {},
      };
    e.PROTOCOL.ajaxCall(i, e);
  }),
  (FILE_FN.installAXController = function (e, t, a) {
    console.log("FILE_FN.installAXController");
    var i = e.DEFINE.AX_CODEBASE,
      n = e.DEFINE.AX_CLASSID,
      s = "";
    (s += '<OBJECT ID="WebCtrl" '),
      (s += 'CLASSID="' + n + '" '),
      (s += 'CODEBASE="' + i + '" '),
      (s += 'Width="0" Height="0">'),
      (s += "</OBJECT>"),
      console.log(s),
      jQuery("#FcWebControllerAx").html(s);
    var o = parseInt(jQuery("#memberLoginOk").val());
    1 == nfile_AX_check(e)
      ? (1 == nfile_install() && 0 != o && FILE_FN.updateMemberGrid(e, 2),
        WEB_DOWOLOAD.downloadFile(e, t, a))
      : (console.log("again AX"),
        0 != o && FILE_FN.updateMemberGrid(e, 1),
        jQuery("#FcWebControllerAx").html(s),
        windowOpenCenter(
          e.DEFINE.SERVER_OLDURL + "/guide/upload_guide.php",
          "uploader",
          "680",
          "800",
          "scrollbars=yes"
        ));
  }),
  (FILE_FN.installPlugInOtherBrowser = function (e, t, a) {
    console.log("FILE_FN.installPlugInOtherBrowser");
    var i = e.DEFINE.varNP_ID,
      n = e.DEFINE.varNPMIME,
      s = '<embed id="' + i + '" type="' + n + '"  width="0" height="0">';
    console.log(s),
      jQuery("#FcWebControllerAx").html(s),
      WEB_DOWOLOAD.downloadFile(e, t, a);
  }),
  (FILE_FN.updateMemberGrid = function (e, t) {
    return console.log("FC_APP_FN.updateMemberGrid"), void 0;
  });
var WEB_UPLOAD = {};
(WEB_UPLOAD.loadPage = function (e) {
  console.log("WEB_UPLOAD.loadPage"),
    console.debug(e),
    WEB_UPLOAD.checkUploaderController(e),
    WEB_UPLOAD.uploadFormInit(),
    WEB_UPLOAD.bindClickMainMenu(e),
    WEB_UPLOAD.uploadFormValidate(e);
}),
  (WEB_UPLOAD.uploadFormInit = function (e, t) {
    var a = '<select name="nfile_upload_list" id="nfile_upload_list" multiple>';
    (a += '<option value="">ëª©ë¡</option>'),
      (a += "</select>"),
      (a += '<input type="hidden" name="size" value="">'),
      (a += '<input type="hidden" name="code_title" value="">'),
      (a += '<input type="hidden" name="option_title"'),
      t && (a += ' value="||bold|||"'),
      (a += ">"),
      (a += '<input type="hidden" name="filename" value="">'),
      (a += '<input type="hidden" name="filetype" value="">'),
      (a += '<input type="hidden" name="nfile_files" value="">'),
      $("#div_nfile_upload").html(a);
  }),
  (WEB_UPLOAD.setCategory = function (e) {
    console.log("WEB_UPLOAD.setCategory::" + e),
      jQuery(".up-main-cate[data-main='" + e + "']").addClass("active"),
      WEB_UPLOAD.setSubCategory(e);
  }),
  (WEB_UPLOAD.setSubCategory = function (e) {
    if (
      (console.log("WEB_UPLOAD.setSubCategory::" + e),
      1 == isDefined(APP.fc_category))
    )
      var t = APP.fc_category;
    else var t = new FC_CATEGORY();
    if (1 == isDefined(APP.DEFINE)) var a = APP.DEFINE;
    else var a = new FC_DEFINE(!1);
    console.log(a), t.cateName[e], t.cateType[e];
    var i = t.getCategorySubList(e),
      n = t.getCategorySubLength(e);
    console.log("subCateCount::" + n);
    var s = function (e, t) {
        var a = "";
        console.log("gCateCount:" + t),
          console.log("subCateCount:" + n),
          0 == t && ((a = "active"), jQuery("#fcCategorySub").val(e.key));
        var i = "";
        return (
          (i +=
            '<li class="up-sub-cate hand ' +
            a +
            '" data-sub="' +
            e.key +
            '"><a>' +
            e.name +
            "</a></li>"),
          n - 1 > t && (i += '<li class="bar">|</li>'),
          console.log(i),
          i
        );
      },
      o = [],
      r = 0;
    console.debug(i);
    for (var l in i)
      11 == e
        ? (0 == r && o.push(s(i[l], r)),
          1 == a.isFC && 7 == r && o.push(s(i[l], r)))
        : o.push(s(i[l], r)),
        r++,
        console.log("cateCount::" + r);
    console.debug(o),
      jQuery("#upSubCategoryList").html(o.join("")),
      WEB_UPLOAD.bindClickSubMenu();
  }),
  (WEB_UPLOAD.bindClickMainMenu = function () {
    console.log("WEB_UPLOAD.bindClickMenu"),
      jQuery(".up-main-cate").unbind("click"),
      jQuery(".up-main-cate").bind("click", function () {
        jQuery(".up-main-cate").removeClass("active"),
          jQuery(this).addClass("active"),
          jQuery(this)
            .parents()
            .next()
            .css({ "border-top": "1px solid #24b6e5" });
        var e = $(this).data("main");
        jQuery("#fcCategoryMain").val(e), WEB_UPLOAD.setSubCategory(e);
      }),
      WEB_UPLOAD.bindClickSubMenu(),
      jQuery("#titleMsgLabel").unbind("click"),
      jQuery("#titleMsgLabel").bind("click", function () {
        jQuery(this).hide(), jQuery("#uploadTitle").removeClass("non-text");
      }),
      jQuery("#uploadTitle").unbind("click"),
      jQuery("#uploadTitle").bind("click", function () {
        jQuery(this).removeClass("non-text"), jQuery("#titleMsgLabel").hide();
      });
  }),
  (WEB_UPLOAD.bindClickSubMenu = function () {
    jQuery(".up-sub-cate").unbind("click"),
      jQuery(".up-sub-cate").bind("click", function () {
        jQuery(".up-sub-cate").removeClass("active"),
          jQuery(this).addClass("active");
        var e = $(this).data("sub");
        jQuery("#fcCategorySub").val(e),
          "1202" == e
            ? (jQuery("#novelType").val("1"),
              jQuery(".not_novel_form").hide(),
              jQuery(".novel_form").show())
            : (jQuery("#novelType").val("0"),
              jQuery("#upLoadFileContents").css({ height: "350px" }),
              jQuery(".novel_form").hide(),
              jQuery(".not_novel_form").show());
      });
  }),
  (WEB_UPLOAD.uploadFormValidate = function (e) {
    var t = function (t) {
      console.debug(t);
      var a = jQuery(t).serialize();
      if ((console.debug(a), 0 == nfile_AX_check(e)))
        return (
          alert(
            "íì¼ì ìë¡ë íê±°ë ë¤ì´ë¡ë íìë ¤ë©´ ì ì© íë¡ê·¸ë¨ì ì¤ì¹íìì¼í©ëë¤."
          ),
          windowOpenCenter(
            e.DEFINE.SERVER_OLDURL + "/guide/upload_guide.php",
            "guide",
            "680",
            "800",
            "scrollbars=yes"
          ),
          void 0
        );
      {
        jQuery("#fcCategoryMain").val();
      }
      jQuery("#uploadTitle").val();
      var i = function (t) {
          if (
            (console.debug(t),
            APP.setMember(t.member),
            isDefined(t.novel_type) && "1" == t.novel_type)
          )
            return 1 == confirm("ìì¤ì ë±ë¡ ìë£íììµëë¤.\nì´ì´ì ì¬ë¦¬ìê² ìµëê¹?")
              ? (WEB_UPLOAD.uploadFollowNovelContentsValidate(t.bbs), void 0)
              : (self.close(), void 0);
          gCookie.set(e.DEFINE.STORAGE.USER_EMAIL, t.user.user_email, 365),
            gCookie.set(
              e.DEFINE.STORAGE.USER_ACCESS_TOKEN,
              t.user.access_token,
              365
            );
          var a = nfile_upload(
            t.user.user_email,
            t.user.access_token,
            t.bbs.idx
          );
          return (
            console.log("uploadCheck:::" + a),
            "1" == a ? (self.close(), void 0) : void 0
          );
        },
        n = {
          server: e.DEFINE.SERVER_PROTOCOL,
          uri: e.PROTOCOL.URL.CONTENTS.UPLOAD_ACTION,
          success: i,
          error_type: !1,
          loading_bar: !1,
          params: a,
        };
      e.PROTOCOL.ajaxCall(n, e);
    };
    jQuery("#uploadForm").validate({
      errorClass: "form-error",
      ignore: "not:hidden",
      rules: {
        uploadTitle: { required: !0, minlength: 6, maxlength: 90 },
        upLoadFileContents: { required: !0 },
      },
      messages: {
        uploadTitle: {
          required: "ì½íì¸  ì ëª©ì ìë ¥í´ì£¼ì¸ì.",
          minlength: jQuery.validator.format("ì ëª©ì {0}ì ì´ì ìë ¥í´ì¼í©ëë¤."),
          maxlength: jQuery.validator.format("ì ëª©ì {0}ì ì´ì ëì ì ììµëë¤."),
        },
        upLoadFileContents: { required: "ë´ì©ì ìë ¥í´ ì£¼ì¸ì." },
      },
      submitHandler: function (e) {
        if ("" == jQuery("#fcCategoryMain").val())
          return alert("ìë¡ëí  íì¼ì ë¶ë¥ë¥¼ ì íí´ì£¼ì¸ì."), void 0;
        if ("" == jQuery("#fcCategorySub").val())
          return alert("ìë¡ëí  íì¼ì ë¶ë¥ë¥¼ ì íí´ì£¼ì¸ì."), void 0;
        if (
          "" == jQuery("#upLoadFileContents").val() ||
          "<p>&nbsp;</p>" == jQuery("#upLoadFileContents").val()
        )
          return alert("ë´ì©ì ìë ¥í´ì£¼ì¸ì."), void 0;
        var a = jQuery("#novelType").val();
        if ("1" == a) {
          if ("" == jQuery("#upLoadNovelContents").val())
            return alert("ìë¡ëí  ìì¤ ë´ì©ì ìë ¥í´ì£¼ì¸ì."), void 0;
        } else if ("" == jQuery("#uploadFilepath").val())
          return alert("ìë¡ëí  íì¼ì´ë í´ëë¥¼ ì íí´ì£¼ì¸ì."), void 0;
        t(e);
      },
      success: function (e) {
        console.log(e),
          oEditors.getById.upLoadFileContents.exec("UPDATE_CONTENTS_FIELD", []);
      },
    });
  }),
  (WEB_UPLOAD.uploadFollowNovelContentsValidate = function (e) {
    console.log("uploadFollowNovelContentsValidate"), console.debug(e);
    var t = new FC_APP();
    if (0 == isDefined(e))
      return alert("ì½íì¸  ì ë³´ë¥¼ íì¸í  ì ììµëë¤."), void 0;
    var a = "ì±ì¸ > ì±ì¸ìì¤";
    if (1 == isDefined(t.fc_category)) var i = t.fc_category;
    else var i = new FC_CATEGORY();
    console.debug(i);
    var n = i.cateName[e.cate1],
      s = i.cateName[e.cate2];
    (a = n + " > " + s), jQuery(".category-novel-follow").html(a);
    var o = function (e) {
      var t = e.chapter + 1,
        a = e.title + "[" + t + "]";
      jQuery("#popup-default-file-form").hide(),
        jQuery("#popup-novel-follow").show(),
        jQuery("#followBbsIdx").val(e.idx),
        jQuery("#followNovelChapter").val(t),
        jQuery(".category-novel-chapter").html(a),
        jQuery("#uploadNovelTitle").val(e.title),
        jQuery("#followUpLoadNovelContents").val("");
    };
    o(e);
    var r =
        t.DEFINE.SERVER_PROTOCOL + t.PROTOCOL.URL.CONTENTS.FOLLOW_NOVEL_ACTION,
      l = function (e) {
        $.param(e);
        var t = {};
        for (var a in e) {
          var i = e[a].name;
          t[i] = e[a].value;
        }
        return (
          console.debug(t),
          0 == isDefined(t.uploadNovelTitle) || "" == t.uploadNovelTitle
            ? (alert("ìì¤ ì ëª©ì ìë ¥í´ì£¼ì¸ì."),
              jQuery("#uploadNovelTitle").focus(),
              !1)
            : 0 == isDefined(t.followUpLoadNovelContents) ||
              "" == t.followUpLoadNovelContents
            ? (alert("ìì¤ ë´ì©ì ìë ¥í´ì£¼ì¸ì."),
              jQuery("#followUpLoadNovelContents").focus(),
              !1)
            : 100 > t.followUpLoadNovelContents.length
            ? (alert("ìì¤ ë´ì©ì 100ì ì´ì ìë ¥í´ì£¼ì¸ì."),
              jQuery("#followUpLoadNovelContents").focus(),
              !1)
            : !0
        );
      },
      c = function (e) {
        console.log("errStatusMsg"), alert(e);
      },
      d = function (e) {
        console.log("successJoinFormFun");
        var a = e;
        if (
          (console.debug("====="),
          console.debug(a),
          1 != parseInt(a.status.code))
        )
          return c(a.status.message), void 0;
        var i = a.result.member;
        return (
          t.setMember(i),
          isDefined(a.result.novel_type) && "1" == a.result.novel_type
            ? 1 == confirm("ìì¤ ë±ë¡ì ìë£íììµëë¤.\nì´ì´ì ì¬ë¦¬ìê² ìµëê¹?")
              ? (o(a.result.bbs), void 0)
              : (self.close(), void 0)
            : void 0
        );
      },
      u = {
        target: "#popup-novel-follow",
        beforeSubmit: l,
        success: d,
        url: r,
        dataType: "json",
      };
    $("#uploadNovelForm").ajaxForm(u);
  }),
  (WEB_UPLOAD.checkUploaderController = function (e, t) {
    if (1 != isBrowserIe()) {
      if ("down" == t) return;
      return (
        alert("íì¼ ìë¡ëë ìµì¤íë¡ ë¸ë¼ì°ì ¸ììë§ ì§ìë©ëë¤."),
        0 == e.DEFINE.DEBUG_MSG,
        void 0
      );
    }
    WEB_UPLOAD.installAXController(e);
  }),
  (WEB_UPLOAD.installAXController = function (e) {
    console.log("WEB_UPLOAD.installAXController");
    var t = e.DEFINE.AX_CODEBASE,
      a = e.DEFINE.AX_CLASSID,
      i = "";
    (i += '<OBJECT ID="WebCtrl" '),
      (i += 'CLASSID="' + a + '" '),
      (i += 'CODEBASE="' + t + '" '),
      (i += 'Width="0" Height="0">'),
      (i += "</OBJECT>"),
      console.log(i),
      jQuery("#FcWebControllerUploadAx").html(i),
      1 == nfile_AX_check(e) && nfile_check_version();
  }),
  (WEB_UPLOAD.installPlugInOtherBrowser = function (e) {
    console.log("WEB_UPLOAD.installPlugInOtherBrowser");
    var t = e.DEFINE.varNP_ID,
      a = e.DEFINE.varNPMIME,
      i = '<embed id="' + t + '" type="' + a + '"  width="0" height="0">';
    console.log(i), jQuery("#FcWebControllerUploadAx").html(i);
  });
var WEB_DOWOLOAD = {};
(WEB_DOWOLOAD.downloadFileAgain = function () {
  console.log("WEB_DOWOLOAD.downloadFileAgain"),
    null == APP && (APP = new FC_APP());
  var e = APP.DEFINE.getStorageData("bbsIdx"),
    t = APP.DEFINE.getStorageData("downType");
  1 == getStorageInstalledCUS()
    ? WEB_DOWOLOAD.downloadFile(APP, e, t)
    : location.reload();
}),
  (WEB_DOWOLOAD.downloadFile = function (e, t, a, i) {
    console.debug("WEB_DOWOLOAD.downloadFile"),
      0 == isDefined(a) && (a = "TRY");
    var n = jQuery("#search").val();
    1 == IS_MOBILE && (n = jQuery("#mobile-search-2-text").val());
    var s = { bbsIdx: t, keywd: n, file_idx: i },
      o = function (t) {
        console.debug(t), e.setMember(t.member), t.down.download_type;
        var i = 1,
          n = null,
          s = {
            userid: t.user.user_email,
            userpw: t.user.access_token,
            idx: t.file.idx,
            idx_purchase: t.file.purchars_idx,
            ftp: t.file.ftp,
          };
        if (
          (gCookie.set(e.DEFINE.STORAGE.USER_EMAIL, t.user.user_email, 365),
          gCookie.set(
            e.DEFINE.STORAGE.USER_ACCESS_TOKEN,
            t.user.access_token,
            365
          ),
          "NOVEL" == a || "REDOWN_NOVEL" == a || 1 == t.down.is_novel)
        )
          return WEB_DOWOLOAD.openPopupNovelView(t.down), void 0;
        if (1 == isDefined(t.mureka) && null != t.mureka) {
          var o = parseInt(t.down.cehck_mureka);
          if (1 == o) {
            var i = 2,
              r = t.mureka;
            console.log("custom url mureka call"),
              (n = {
                userid: r.userid,
                fileno: r.u_file_idx,
                mureka: r.u_hash,
                down: r.down,
                pay_log: r.pay_log,
                cp_name: r.u_cp_company,
                contents_id: r.u_video_content_id,
                set_point: r.u_money,
                pay_datetime: r.pay_datetime,
                osp_pay_key: r.osp_pay_key,
                realname: r.title,
                seller_user: r.seller_user,
                bbs_no: r.submit_bbs_no,
                cpr_div: r.cpr_div,
                filename: r.filename,
                mbc: r.mbc,
                hash_count: r.hash_count,
              });
          } else (i = 1), (n = null);
        } else (i = 1), (n = null);
        filecast_downloader(s, n, i),
          "REDOWN_CONTENTS" != a &&
            (jQuery(".btn-view-down").hide(),
            jQuery(".btn-view-redown").show()),
          parseInt(t.down.down_count) >= parseInt(t.down.max_down_count) &&
            (jQuery(".btn-view-down").show(),
            jQuery(".btn-view-redown").hide()),
          jQuery(".btn-view-down").data("dcount", t.down.down_count),
          jQuery(".btn-view-redown").data("dcount", t.down.down_count),
          jQuery(".btn-view-down").data("copy", t.down.chkcopy),
          jQuery(".btn-view-redown").data("copy", t.down.chkcopy),
          jQuery(".sns_area").show();
      },
      r = function (e) {
        console.log("error_fun"),
          console.log(e),
          null != FILE_FN.NOVEL_POPUP && FILE_FN.NOVEL_POPUP.close();
      },
      l = {
        server: e.DEFINE.SERVER_PROTOCOL,
        uri: e.PROTOCOL.URL.CONTENTS.DOWN_ACTION + "/" + a + "/",
        success: o,
        error_type: !1,
        loading_bar: !1,
        error_fun: r,
        params: s,
      };
    e.PROTOCOL.ajaxCall(l, e);
  }),
  (WEB_DOWOLOAD.openPopupNovelView = function (e) {
    console.log("WEB_DOWOLOAD.openPopupNovelView"),
      console.debug(e),
      null == APP && (APP = new FC_APP());
    var t =
      APP.DEFINE.SERVER_PROTOCOL +
      APP.PROTOCOL.URL.CONTENTS.OPEN_NOVEL_VIEW +
      "?bbsIdx=" +
      e.bbs_idx +
      "&purchars_idx=" +
      e.purchars_idx +
      "&file=" +
      e.file_idx;
    if ((console.log(t), null != FILE_FN.NOVEL_POPUP))
      return (
        (FILE_FN.NOVEL_POPUP.location = t), FILE_FN.NOVEL_POPUP.focus(), void 0
      );
    var a = utility.ui.viewport(),
      i = "height=" + a.height + ",width=" + a.height,
      n = window.open(t, "fc_novel_view", i),
      s = function () {
        if (
          !n ||
          n.closed ||
          "about:blank" == n.location.href ||
          n === void 0 ||
          "undefined" == n.closed ||
          "undefined" == n ||
          0 == parseInt(n.innerWidth)
        )
          return (location.href = t), void 0;
        try {
          n.focus();
        } catch (e) {
          location.href = t;
        }
      };
    setTimeout(function () {
      if (
        !n ||
        n.closed ||
        "undefined" == n.closed ||
        "undefined" == n ||
        0 == parseInt(n.innerWidth)
      )
        return (
          fc_alert(
            "íì ì°¨ë¨ ê¸°ë¥ì´ ì¤ì ëì´ììµëë¤\n\nì°¨ë¨ ê¸°ë¥ì í´ì (íìíì©) íë©´ ë í¸ë¦¬í©ëë¤.",
            "íì ì°¨ë¨ í´ì ",
            s
          ),
          void 0
        );
      try {
        n.focus();
      } catch (e) {
        location.href = t;
      }
    }, 1e3);
  });
var WEB_FRIEND = {};
(WEB_FRIEND.DATA = {
  content_type: "JSON",
  defaultUri: "/200/1/1/",
  isDefault: !1,
  pagination: {},
  menu: [],
}),
  (WEB_FRIEND.start = function (e, t) {
    console.log("WEB_FRIEND.start"),
      (APP = e),
      WEB_FRIEND.friendList(1, e, !1, t);
  }),
  (WEB_FRIEND.friendList = function (e, t, a, i) {
    console.log("WEB_FRIEND.friendList");
    var n = jQuery("#kind").val();
    0 == isDefined(n) && (n = "my");
    var s = new FC_APP();
    if ((console.debug(i), i)) {
      e || (e = i.page);
      var o = i.search,
        r = i.s_column,
        l = i.main,
        c = i.sub,
        d = i.total_page,
        u = i.total_count,
        _ = i.limit;
    } else if (!e) var e = 1;
    1 == a && jQuery("#web-home-list-pull-down").find(".pullDownLabel").empty();
    var p = jQuery("#web-home-list-pull-down");
    console.log(o), console.log(e);
    var m = {
      action: "friend",
      type: "ajax",
      main: l,
      sub: c,
      page: e,
      total_page: d,
      total_count: u,
      limit: _,
      category: !1,
      location: p.data("location"),
      sort: p.data("sort"),
      sort_order: p.data("sort_order"),
      is_mobile: 1,
      first_load: p.data("first_load"),
      is_smart: p.data("is_smart"),
      kind: n,
    };
    o
      ? ((m.search_key = o), (m.s_column = r))
      : (m.search_key = p.data("search")),
      console.debug(m);
    var h = function (e) {
        console.log("successHttpFriendList"), console.debug(e);
        var t = e.f_list.limit,
          i = e.f_list.page,
          n = e.f_list.total_page,
          l = Number(e.f_list.total_count),
          c = [],
          d = "",
          u = e.f_list.list.length,
          _ = e.f_list.kind;
        if (
          (console.debug(m),
          (m = {
            action: "friend",
            type: "ajax",
            limit: t,
            main: 0,
            page: i,
            kind: _,
            sub: 0,
            total_count: l,
            total_page: n,
            is_mobile: 1,
          }),
          o &&
            ((o = parseInt(e.f_list.search_key)),
            (m.search = o),
            (r = parseInt(e.f_list.s_column)),
            (m.s_column = r)),
          console.debug(m),
          0 == u)
        ) {
          var p = e.f_list.list[0],
            h = new Friendlist(p, 0, _);
          c.push(h.webListHtml()),
            jQuery("#fc_paging").css("display", "none"),
            console.log("test-listê¸¸ì´:" + u);
        } else {
          for (var E = 0; u > E; E++) {
            var p = e.f_list.list[E],
              h = new Friendlist(
                p,
                Number(e.f_list.total_count - t * (i - 1) - E),
                _
              );
            c.push(h.webListHtml());
          }
          l >= t
            ? jQuery("#fc_paging").css("display", "block")
            : jQuery("#fc_paging").css("display", "none");
        }
        var h = new Friendlist();
        (d = h.ListTitleHtml(_)),
          jQuery(".list_tit").html(d),
          "my" == _
            ? (jQuery("#fc-web-friend-listTitle-ul").removeClass("type9"),
              jQuery("#fc-web-friend-list-ul").removeClass("type9"),
              jQuery("#fc-web-friend-listTitle-ul").addClass(
                "type7 style3 type1"
              ),
              jQuery("#fc-web-friend-list-ul").addClass("type7 style3 type1"),
              jQuery("#fc-web-friend-list-ul").html(c.join("")),
              jQuery(".con_search").css("display", "block"))
            : "me" == _ &&
              (jQuery("#fc-web-friend-listTitle-ul").removeClass(
                "type7 style3 type1"
              ),
              jQuery("#fc-web-friend-list-ul").removeClass(
                "type7 style3 type1"
              ),
              jQuery("#fc-web-friend-listTitle-ul").addClass("type9"),
              jQuery("#fc-web-friend-list-ul").addClass("type9"),
              jQuery("#fc-web-friend-list-ul").html(c.join("")),
              jQuery(".con_search").css("display", "none"),
              jQuery(".type9 ul").css("list-style-type", "none"),
              jQuery(".type9 li").css("display", "inline")),
          0 == s.use_scroll_page
            ? ((s.loadedFirst = !1),
              1 != a &&
                utility.ui.goElement("#mobile_friend_content_list_area", 0, 0))
            : 1 == a && (s.loadedFirst = !1),
          console.debug(m),
          jQuery("#web-home-list-pull-down").data(m),
          jQuery("#web-home-top-content").data(m),
          n >= i
            ? WEB_FRIEND.contentsPaging(m, !0)
            : jQuery("#fc_paging").empty();
      },
      E = {
        server: s.DEFINE.SERVER_PROTOCOL,
        uri: s.PROTOCOL.URL.FRIEND.FRIEND_LIST,
        success: h,
        error_type: !1,
        loading_bar: !0,
        params: m,
      };
    s.PROTOCOL.ajaxCall(E, APP);
  }),
  (WEB_FRIEND.menuChange = function (e, t) {
    console.log("WEB_FRIEND.menuChange"),
      jQuery("#my").removeClass("active on"),
      jQuery("#me").removeClass("active on"),
      jQuery("#" + t).addClass("active on"),
      "my" == e
        ? (jQuery(".my_content > h3").html("ë´ê° ë±ë¡í ì¹êµ¬"),
          jQuery("#fc-web-friend-sub_title").html(
            "<span>Â·</span> ë´ê° ì¹êµ¬ë¡ ë±ë¡í íìì ì ë³´ë¥¼ íì¸í  ì ììµëë¤."
          ),
          jQuery(".list_t_style").css("display", "block"),
          jQuery("#chkall").css("display", "block"),
          jQuery("#chk").css("display", "block"))
        : "me" == e &&
          (jQuery(".my_content > h3").html("ëë¥¼ ë±ë¡í ì¹êµ¬"),
          jQuery("#fc-web-friend-sub_title").html(
            "<span>Â·</span> ëë¥¼ ì¹êµ¬ë¡ ë±ë¡í íìì ì ë³´ë¥¼ íì¸í  ì ììµëë¤."
          ),
          jQuery(".list_t_style").css("display", "none"),
          jQuery("#chkall").css("display", "none"),
          jQuery("#chkal2").css("display", "none"),
          jQuery("#chk").css("display", "none")),
      jQuery("#kind").val(e),
      WEB_FRIEND.friendList(1);
  }),
  (WEB_FRIEND.friendModifyModalData = function () {
    return (
      console.log("successfriendModifyModalData"),
      console.debug(data),
      (result = data)
    );
  }),
  (WEB_FRIEND.friendModify = function (e, t) {
    var a = new FC_APP(),
      i = { type: "ajax", ridx: t },
      n = function (t) {
        console.log("WEB_FRIEND.friendModify"),
          jQuery("#remark").val(""),
          jQuery("#nickname").val("");
        var a = [];
        (a.nickname = e),
          (a.remark = t.SuccessModalData.remark),
          (a.idx = t.SuccessModalData.idx),
          FC_MODAL_OPEN("fcFriModifyModal", "", a);
      },
      s = a.PROTOCOL.URL.FRIEND.FRIEND_MODAL,
      o = {
        server: a.DEFINE.SERVER_PROTOCOL,
        uri: s,
        success: n,
        error_type: !1,
        loading_bar: !0,
        params: i,
      };
    a.PROTOCOL.ajaxCall(o, APP);
  }),
  (WEB_FRIEND.update_friend_modify = function () {
    jQuery("#nickname").val();
    var e = jQuery("#remark").val(),
      t = jQuery("#idx").val(),
      a = new FC_APP(),
      i = { type: "ajax", ridx: t, remark: e },
      n = function (e) {
        console.debug(e),
          WEB_FRIEND.friendList(1),
          jQuery("#fcFriModifyModal").modal("hide");
      },
      s = a.PROTOCOL.URL.FRIEND.FRIEND_UPDATE,
      o = {
        server: a.DEFINE.SERVER_PROTOCOL,
        uri: s,
        success: n,
        error_type: !1,
        loading_bar: !0,
        params: i,
      };
    a.PROTOCOL.ajaxCall(o, APP);
  }),
  (WEB_FRIEND.friendDelete = function () {
    if (is_checked()) {
      var e = [];
      if (
        ($("input[name='chk[]']:checked").each(function () {
          e.push($(this).val());
        }),
        1 != confirm("ì ë§ ì­ì íìê² ìµëê¹??"))
      )
        return;
      var t = jQuery("#kind").val(),
        a = { chk: e, kind: t },
        i = function (e) {
          1 == isDefined(e)
            ? (fc_alert("ì­ì  ëììµëë¤."), WEB_FRIEND.friendList(1))
            : fc_alert("ì­ì íì§ ëª»íìµëë¤.");
        },
        n = APP.PROTOCOL.URL.FRIEND.FRIEND_DELETE,
        s = {
          server: APP.DEFINE.SERVER_PROTOCOL,
          uri: n,
          success: i,
          error_type: !1,
          loading_bar: !0,
          params: a,
        };
      APP.PROTOCOL.ajaxCall(s, APP);
    } else fc_alert("ì íë ìë£ê° ììµëë¤.");
  }),
  (WEB_FRIEND.get_search = function () {
    console.debug("WEB_FRIEND.get_search");
    var e = jQuery("#s_word").val(),
      t = jQuery("#s_column").val(),
      a = jQuery("#kind").val(),
      i = new FC_APP(),
      n = {
        action: "friend",
        category: !1,
        type: "ajax",
        kind: a,
        s_column: t,
        page: 1,
        is_mobile: 1,
        search: e,
      };
    console.debug(n), WEB_FRIEND.friendList(1, i, !1, n);
  }),
  (WEB_FRIEND.AddFriendLike = function (e, t) {
    console.debug("WEB_FRIEND.AddFriendLike");
    var a = { nickname: e, like: 1 },
      i = function (a) {
        console.log("success search data"),
          console.debug(a),
          a.result_like.in_rows,
          a.result_like.up_rows;
        var i = a.result_like.seller_like_cnt,
          n = a.result_like.state;
        return 0 >= n
          ? (fc_alert(e + "ëì ì´ë¯¸ ì¢ìì íì¨ìµëë¤."),
            console.log("DOM Like:" + t + " /DB Like:" + i),
            jQuery("#seller_like").html(t),
            !1)
          : (fc_alert(e + "ëì ì¢ìì íìµëë¤!"),
            (t = Number(t) + 1),
            console.log("DOM Like:" + t + " /DB Like:" + i),
            jQuery("#seller_like").html(t),
            !1);
      },
      n = APP.PROTOCOL.URL.FRIEND.FRIEND_SELLER_LIKE;
    console.debug(n);
    var s = {
      server: APP.DEFINE.SERVER_PROTOCOL,
      uri: n,
      success: i,
      error_type: !1,
      loading_bar: !0,
      params: a,
    };
    APP.PROTOCOL.ajaxCall(s, APP);
  }),
  (WEB_FRIEND.sendFriAddLayer = function (e) {
    console.log("WEB_FRIEND.sendFriAddLayer"),
      jQuery("#remark").val(""),
      jQuery("#nickname").val(""),
      1 == isDefined(e) && jQuery("#fc-recieve-memo-nickname").val(e),
      FC_MODAL_OPEN("fcFriAddModal");
  }),
  (WEB_FRIEND.saveFriData = function () {
    console.log("WEB_FRIEND.saveFriData");
    var e = jQuery("#nickname").val();
    if ("" == e)
      return (
        fc_alert("ë±ë¡í  ëë¤ìì ìë ¥í´ ì£¼ì¸ì."), jQuery("#nickname").focus(), !1
      );
    var t = jQuery("#remark").val();
    if ("" == t)
      return (
        fc_alert("ì¤ëªì ìë ¥í´ ì£¼ì¸ì.", "ì¹êµ¬ ì¶ê°íê¸°"),
        jQuery("#remark").focus(),
        !1
      );
    var t = jQuery("#remark").val();
    (t = t.replace(/(<([^>]+)>)/gi, "")),
      (t = t.replace(/(&nbsp;)+/gi, "")),
      (t = t.replace(/\s{2,}/gi, "")),
      (t = t.replace(/\'/gi, ""));
    var a = { nickname: e, memo: t },
      i = function () {
        jQuery("#nickname").val(""),
          jQuery("#remark").val(""),
          $("#fcFriAddModal").modal("hide"),
          fc_alert(e + "ëì´ ì¹êµ¬ ì¶ê° ëììµëë¤.");
      },
      n = APP.PROTOCOL.URL.FRIEND.FRIEND_SEND;
    console.log(a);
    var s = {
      server: APP.DEFINE.SERVER_PROTOCOL,
      uri: n,
      success: i,
      error_type: !1,
      loading_bar: !0,
      params: a,
    };
    APP.PROTOCOL.ajaxCall(s, APP);
  }),
  (WEB_FRIEND.ModifyFriData = function () {
    console.log("WEB_FRIEND.ModifyFriData");
    var e = jQuery("#nickname").val();
    if ("" == e)
      return (
        fc_alert("ë±ë¡í  ëë¤ìì ìë ¥í´ ì£¼ì¸ì."), jQuery("#nickname").focus(), !1
      );
    var t = jQuery("#remark").val();
    if ("" == t)
      return fc_alert("ì¤ëªì ìë ¥í´ ì£¼ì¸ì."), jQuery("#remark").focus(), !1;
    var t = jQuery("#remark").val(),
      a = { nickname: e, memo: t },
      i = function () {
        jQuery("#nickname").val(""),
          jQuery("#remark").val(""),
          $("#fcFriModifyModal").modal("hide");
      },
      n = APP.PROTOCOL.URL.FRIEND.FRIEND_SEND;
    console.log(a);
    var s = {
      server: APP.DEFINE.SERVER_PROTOCOL,
      uri: n,
      success: i,
      error_type: !1,
      loading_bar: !0,
      params: a,
    };
    APP.PROTOCOL.ajaxCall(s, APP);
  }),
  (WEB_FRIEND.contentsPaging = function (e, t) {
    console.log("WEB_FRIEND.contentsPaging"),
      jQuery("#fc_paging").empty(),
      jQuery("#fc_paging").html(
        '<ul id="pagination-contents" class="pagination-sm">'
      );
    var a = e.page,
      i = e.total_page,
      n = e.limit,
      s = n;
    if (0 == t) {
      var s = 1;
      jQuery("#fc_paging").empty();
    }
    var o = function (e, t) {
      APP.setNewSelectUri(t),
        { url: APP.PROTOCOL.URL.FRIEND.FRIEND_LIST + APP.url.uri },
        WEB_FRIEND.friendList(t);
    };
    jQuery("#pagination-contents").twbsPagination({
      startPage: a,
      onPageClick: o,
      visiblePages: s,
      totalPages: i,
    });
  }),
  (WEB_FRIEND.first_addFriend = function (e) {
    console.log("WEB_FRIEND.first_addFriend");
    var t = { nickname: e };
    console.log(t);
    var a = function (t) {
        console.log("first_addFriend_Sucess-DATA"), console.log(t);
        var a = t.addFriendResult.ret;
        if ("yes" == a)
          return (
            console.log("ì´ë¯¸ ë±ë¡í ì ì´ ììµëë¤."),
            fc_alert("ì´ë¯¸ ë±ë¡ë ì¹êµ¬ìëë¤."),
            void 0
          );
        if ("no" == a) WEB_FRIEND.sendFriAddLayer(e);
        else if ("stop" == a)
          return (
            console.log("íìí íë¼ë¯¸í°ê° ììµëë¤! íì¸íê³  ë¤ì ìëí´ ì£¼ì­ìì."),
            void 0
          );
      },
      i = APP.PROTOCOL.URL.FRIEND.FRIEND_FIRST_SEND,
      n = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: i,
        success: a,
        error_type: !1,
        loading_bar: !0,
        params: t,
      };
    APP.PROTOCOL.ajaxCall(n, APP);
  });
var WEB_HOME = {};
(WEB_HOME.DATA = {
  SET_TIMER: null,
  GOOD_COUNT: 1,
  B_ISCROLL: null,
  LOAD_FLAG: !1,
}),
  (WEB_HOME.start = function (e, t, a) {
    console.log("WEB_HOME.start"),
      (this.app = e),
      (APP = this.app),
      isDefined(t.is_check) &&
        (gCookie.set("is_check", t.is_check, 1),
        "1" == t.is_check
          ? ((APP.DEFINE.isFC = !0),
            (APP.DEFINE.DEBUG_CONSOLE_MSG = !0),
            (APP.DEFINE.USE_CUSTOM_URL = !0))
          : ((APP.DEFINE.isFC = !1),
            (APP.DEFINE.DEBUG_CONSOLE_MSG = !1),
            (APP.DEFINE.USE_CUSTOM_URL = !1))),
      console.debug(APP),
      console.log(t),
      WEB_HOME.loadData(a),
      WEB_HOME.setHotIssueBanner(APP),
      WEB_HOME.checkMoveOtherPage(t, a),
      WEB_HOME.mainBannerRolling(),
      1 == isDefined(t.popup),
      WEB_HOME.setGoodContentsSwipe(!0);
  }),
  (WEB_HOME.mainBannerRolling = function () {
    setInterval(function () {
      $(".m_banner ul").append($(".m_banner ul").children("li").eq(0));
    }, 4e3);
  }),
  (WEB_HOME.checkMoveOtherPage = function (e, t) {
    console.log("WEB_HOME.checkOtherPage"),
      1 == isDefined(e.url)
        ? (console.log(e.url), GO_MENU(e.url))
        : 1 == isDefined(e.view)
        ? GO_MENU("view", e.view)
        : 1 == isDefined(t.uri) && GO_MENU(t.uri);
  }),
  (WEB_HOME.loadData = function () {
    console.log("WEB_HOME.loadPage"),
      jQuery("#fc-btm-wrap-div").removeClass("sub"),
      jQuery("#fcContainerContent").removeClass("sub"),
      jQuery(".btm_inner").removeClass("sub"),
      WEB_HOME.setBindTopMainCateMenu(APP),
      WEB_HOME.setEmptyTheumNailImg();
  }),
  (WEB_HOME.getPageData = function (e) {
    console.log("getPageData");
    var t = function (e) {
        console.log("successHttpFun"),
          console.debug(e),
          jQuery(
            ".select_order[data-sort='" + e.send_data.select_order + "']"
          ).addClass("active"),
          jQuery("#changePageCount")
            .val(e.send_data.page_count)
            .attr("selected", "selected");
        var t = {
          list: e.send_data.bbs.list,
          limit: parseInt(e.send_data.bbs.limit),
          page: parseInt(e.send_data.bbs.page),
          total_page: parseInt(e.send_data.bbs.total_page),
          new_time: e.send_data.bbs.new_time,
        };
        console.debug(t);
        var a = FC_APP_FN.serverDisplayAdult(APP),
          i = [],
          n = [],
          s = [],
          o = [],
          r = 0,
          l = {};
        for (var c = 0 in t.list)
          (l[r] = new Contentslist(t.list[c], t.new_time, c)),
            1 == isDefined(e.fc_event.sale) &&
              l[r].setSaleEventData(e.fc_event.sale),
            0 != a || 1 != l[r].check_adult()
              ? (0 == r
                  ? i.push(
                      l[r].htmlListBestTop(
                        APP.fc_category.cateName,
                        APP.SELECTED.main
                      )
                    )
                  : 1 == r
                  ? n.push(
                      l[r].htmlListBestTop(
                        APP.fc_category.cateName,
                        APP.SELECTED.main
                      )
                    )
                  : s.push(
                      l[r].htmlListBest(
                        APP.fc_category.cateName,
                        APP.SELECTED.main
                      )
                    ),
                r++)
              : o.push(t.list[c]);
        jQuery("#homeBestContents1").html(i.join("")),
          jQuery("#homeBestContents2").html(n.join("")),
          jQuery("#homeBestContentsList").html(s.join(""));
      },
      a = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: e.url,
        success: t,
        error_type: !0,
        loading_bar: !1,
        params: e.param,
      };
    APP.PROTOCOL.ajaxCall(a, APP);
  }),
  (WEB_HOME.getDataCopyright = function () {
    var e = function (e) {
        console.log("successHttpFunCopyright"), console.debug(e);
        for (var t = e.bbs_list, a = [], i = 0; t.length > i; i++) {
          var n = TEMPLATE_FUN.copyNoticeListHtml(t[i]);
          a.push(n);
        }
        jQuery("#home-tabs-copyright ul").html(a.join(""));
      },
      t = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: APP.PROTOCOL.URL.HOME.COPYRIGHT,
        success: e,
        error_type: !0,
        loading_bar: !1,
        params: {},
      };
    APP.PROTOCOL.ajaxCall(t, APP);
  }),
  (WEB_HOME.setPageClickBind = function (e) {
    console.log("WEB_HOME.setPageClickBind"),
      jQuery(".notice-tabs").unbind("click"),
      jQuery(".notice-tabs").bind("click", function () {
        jQuery(".notice-tabs").removeClass("active"),
          jQuery(this).addClass("active");
        var t = $(this).data("load"),
          a = $(this).data("type");
        "copyright" == a
          ? (jQuery("#home-tabs-notice").hide(),
            jQuery("#home-tabs-copyright").show(),
            "0" == t
              ? (WEB_HOME.getDataCopyright(e), $(this).data("load", "1"))
              : GO_MENU("copyright"))
          : ("block" == jQuery("#home-tabs-notice").css("display") &&
              GO_MENU("notice"),
            jQuery("#home-tabs-copyright").hide(),
            jQuery("#home-tabs-notice").show());
      });
  }),
  (WEB_HOME.setBindTopMainCateMenu = function () {
    jQuery(".home-cate-main").unbind("click"),
      jQuery(".home-cate-main").bind("click", function () {
        jQuery(".home-cate-main a").removeClass("on"),
          jQuery(this).find("a").addClass("on");
        var e = $(this).data("main");
        APP.SELECTED.main = e;
        var t = {
          url: APP.PROTOCOL.URL.CONTENTS.REAL_LIST + "/" + e + "/",
          param: {},
        };
        WEB_HOME.getPageData(t, !0);
      });
  }),
  (WEB_HOME.setEmptyTheumNailImg = function () {
    jQuery(".list_sumimg ").each(function () {}),
      FC_APP_FN.setHomeContentsImgLazy();
  }),
  (WEB_HOME.setMainCenterBannerJssor = function () {
    function e() {
      var t = i.$Elmt.parentNode.clientWidth;
      t ? i.$ScaleWidth(Math.min(t, 827)) : window.setTimeout(e, 30);
    }
    var t = [
        {
          $Duration: 1200,
          x: -0.3,
          $During: { $Left: [0.3, 0.7] },
          $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear,
          },
          $Opacity: 2,
        },
        {
          $Duration: 1200,
          x: 0.3,
          $SlideOut: !0,
          $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear,
          },
          $Opacity: 2,
        },
      ],
      a = {
        $AutoPlay: !0,
        $AutoPlaySteps: 1,
        $AutoPlayInterval: 4e3,
        $PauseOnHover: 1,
        $ArrowKeyNavigation: !0,
        $SlideDuration: 500,
        $MinDragOffsetToSlide: 20,
        $SlideSpacing: 0,
        $DisplayPieces: 1,
        $ParkingPosition: 0,
        $UISearchMode: 1,
        $PlayOrientation: 1,
        $DragOrientation: 3,
        $SlideshowOptions: {
          $Class: $JssorSlideshowRunner$,
          $Transitions: t,
          $TransitionsOrder: 1,
          $ShowLink: !1,
        },
        $BulletNavigatorOptions: {
          $Class: $JssorBulletNavigator$,
          $ChanceToShow: 2,
          $Lanes: 1,
          $SpacingX: 10,
          $SpacingY: 10,
        },
        $ArrowNavigatorOptions: {
          $Class: $JssorArrowNavigator$,
          $ChanceToShow: 2,
          $AutoCenter: 2,
        },
        $ThumbnailNavigatorOptions: {
          $Class: $JssorThumbnailNavigator$,
          $ChanceToShow: 2,
          $ActionMode: 0,
          $DisableDrag: !0,
        },
        $LazyLoading: 0,
      },
      i = new $JssorSlider$("sliderb_container", a);
    e(),
      $(window).bind("load", e),
      $(window).bind("resize", e),
      $(window).bind("orientationchange", e);
  }),
  (WEB_HOME.rotateHotIssueBanner = function (e) {
    var t = "#home-hot-issue-list-div",
      a = jQuery(t),
      i = parseInt(a.data("active")),
      n = i + 1,
      s = function (e) {
        var t = "#home-hot-issue-list-div",
          i = "#home-hot-issue-list-point",
          n = parseInt(a.data("count"));
        e >= n && (e = 0),
          0 == jQuery.isNumeric(e) && (e = 0),
          jQuery(t + " .home-hot-issue-list-span").fadeOut("slow"),
          jQuery(t + " .b" + e).fadeIn("slow"),
          jQuery(t).data("active", e),
          jQuery(i + " .hot-issue-list-point").removeClass("active"),
          jQuery(i + " p")
            .eq(e)
            .addClass("active");
      };
    1 == isDefined(e) ? s(e) : s(n);
  }),
  (WEB_HOME.setHotIssueBanner = function () {
    console.log("setHotIssueBanner"),
      (WEB_HOME.DATA.SET_TIMER = null),
      (WEB_HOME.DATA.SET_TIMER = setInterval(
        "WEB_HOME.rotateHotIssueBanner()",
        4e3
      )),
      jQuery(".hot-issue-list-point").unbind("click"),
      jQuery(".hot-issue-list-point").bind("click", function () {
        var e = parseInt(jQuery(this).data("order"));
        console.log("nextBanner click" + e), WEB_HOME.rotateHotIssueBanner(e);
      });
  }),
  (WEB_HOME.setBCrating = function (e) {
    console.log("WEB_HOME.setBCrating"), null == e && (e = new FC_APP());
    var t = new Date(),
      a = t.getFullYear() + "ë" + (t.getMonth() + 1) + "ì" + t.getDate() + "ì¼";
    jQuery("#fc-bc-list-rating-update").html(a);
    var i = function (e) {
        console.log("setBCrating:successHttpBcData"), console.debug(e);
        for (var t = [], a = 0; e.clist.length > a; a++) {
          var i = TEMPLATE_FUN.brocastRankingListHtml(e.clist[a], a);
          t.push(i);
        }
        jQuery("#fc-bc-list-rating").html(t.join("")),
          jQuery("#fc-nilsen-broadcasting-rank").show();
      },
      n = {
        server: e.DEFINE.SERVER_OLDURL,
        uri: e.PROTOCOL.URL.HOME.NIELSEN,
        success: i,
        error_type: !1,
        loading_bar: !1,
        params: {},
      };
    e.PROTOCOL.ajaxCall(n, e);
  }),
  (WEB_HOME.setGoodContentsSwipe = function (e) {
    if (
      (console.log("WEB_HOME.setGoodContentsSwipe:" + e),
      1 != IsBrowserIE_FC9Earlier_FC())
    ) {
      var t = function () {
          jQuery(".good-contents-list-img-lazy").each(function () {
            jQuery(this).attr("src", jQuery(this).data("original")),
              jQuery(this).removeClass("good-contents-list-img-lazy");
          });
        },
        a = document.getElementById("pc-main-good-contents-swipe");
      (window.myGoodContentsSwipe = Swipe(a, {
        callback: function (e) {
          e > 0 && t();
        },
        transitionEnd: function () {},
      })),
        (WEB_HOME.DATA.B_ISCROLL = window.myGoodContentsSwipe);
    }
  }),
  (WEB_HOME.setGoodContentsIScroll = function (e) {
    console.log("WEB_HOME.setGoodContentsIScroll:" + e);
    var t = "#pc-main-good-contents-iscroll";
    if (
      (jQuery(".fc-pc-good-contents-list-li").length,
      1 == e && (WEB_HOME.DATA.B_ISCROLL = null),
      null != WEB_HOME.DATA.B_ISCROLL)
    )
      return WEB_HOME.DATA.B_ISCROLL.refresh(), void 0;
    var a = function () {
      jQuery(".good-contents-list-img-lazy").each(function () {
        jQuery(this).attr("src", jQuery(this).data("original")),
          jQuery(this).removeClass("good-contents-list-img-lazy");
      });
    };
    (WEB_HOME.DATA.LOAD_FLAG = !1),
      (WEB_HOME.DATA.B_ISCROLL = new IScroll(t, {
        scrollX: !0,
        scrollY: !1,
        mouseWheel: !1,
        momentum: !1,
        snap: !0,
        click: !0,
      })),
      WEB_HOME.DATA.B_ISCROLL.on("scrollEnd", a),
      jQuery("#today-btn-prev").unbind("click"),
      jQuery("#today-btn-prev").bind("click", function () {
        WEB_HOME.DATA.B_ISCROLL.prev();
      }),
      jQuery("#today-btn-next").unbind("click"),
      jQuery("#today-btn-next").bind("click", function () {
        WEB_HOME.DATA.B_ISCROLL.x == WEB_HOME.DATA.B_ISCROLL.maxScrollX,
          WEB_HOME.DATA.B_ISCROLL.next();
      });
  });
var WEB_MEMBER = {};
(WEB_MEMBER.MSG = {
  df:
    'â» íì¼ìºì¤í¸ë <span class="dspan">ì´ë©ì¼ ìì´ë</span>ë¥¼ ë°ìµëë¤./<span class="dspan">ë¬´ë£ ì¿ í°</span>ì´ ë§¤ë¬ <span class="dspan">ì´ë©ì¼</span>ë¡ ë°ì¡ë©ëë¤.',
  not_host: "ì´ë©ì¼ í¸ì¤í¸ ì£¼ìë¥¼ ìë ¥/ì íí´ ì£¼ì¸ì.",
  fail_email: "ì¬ë°ë¥¸ ì´ë©ì¼ì£¼ìë¥¼ ìë ¥í´ì£¼ì¸ì.",
  input_email: "ì´ë©ì¼ ê·ì¹ì ë§ë ì¬ë°ë¥¸ ì´ë©ì¼ì£¼ìë¥¼ ìë ¥í´ì£¼ì¸ì.",
  min_email: "ì´ë©ì¼ ì£¼ìë¥¼ 3ì ì´ì ìë ¥í´ì£¼ì¸ì.",
  input_pass: "í¨ì¤ìëë¥¼ ìë ¥í´ì£¼ì¸ì.",
  input_pass2: "ë¹ë°ë²í¸ íì¸ì í¨ì¤ìëë¥¼ ìë ¥í´ì£¼ì¸ì.",
  min_pass: "í¨ì¤ìëë¥¼ 4ì ì´ì ìë ¥í´ì£¼ì¸ì.",
  not_same_pass: "í¨ì¤ìëê° ìë¡ ì¼ì¹ íì§ ììµëë¤.",
  fail_sp_email: "ë©ì¼ ì£¼ìì ì¬ì©í  ì ìë í¹ìë¬¸ìê° í¬í¨ëì´ ììµëë¤.",
  check_agree:
    "ì´ì©ì½ê´ê³¼ ê°ì¸ì ë³´ ì·¨ê¸ë°©ì¹¨ì ëìí´ì¼ë§ íìê°ìì´ ê°ë¥í©ëë¤.\nëì í ì¦ì ê°ìíìê² ìµëê¹?",
  not_uniq_mail: "ì´ë¯¸ ë±ë¡ë ì´ë©ì¼ ì£¼ììëë¤.",
}),
  (WEB_MEMBER.start = function (e, t) {
    console.log("WEB_MEMBER.start"),
      console.debug(t),
      (APP = e),
      "partner_join" == t.name &&
        (("timead" == gCookie.get("p_id") ||
          "keywordmap" == gCookie.get("p_id") ||
          "clickpop" == gCookie.get("p_id") ||
          "adnpop" == gCookie.get("p_id")) &&
          alert("ê²ìíì  ìë£ë¥¼ ì°¾ììµëë¤.\níìê°ì í ë¬´ë£ë¡ ì´ì©íì¸ì!"),
        1 == isDefined(t.non_popup) &&
          "1" != t.non_popup &&
          FC_MODAL_OPEN("fcJoinStartModal", !0, "pJoin"),
        WEB_MEMBER.pJoinFormValidate(e),
        jQuery("#join_user_id-p").focus());
  }),
  (WEB_MEMBER.NLOGIN = {}),
  (WEB_MEMBER.NLOGIN.start = function (e) {
    console.log("WEB_MEMBER.NLOGIN.start"),
      WEB_MEMBER.NLOGIN.loadPage(e),
      WEB_MEMBER.NLOGIN.loginFormValidate(e);
  }),
  (WEB_MEMBER.NLOGIN.loadPage = function () {
    console.log("WEB_MEMBER.NLOGIN.loadPage");
    var e = gCookie.get("email");
    if (1 == isDefined(e)) {
      var t = isFcSnsChannelEmail(e);
      null != t
        ? jQuery("#web_user_email").val(
            "SNSê³ì (" + t + ")ì íµí´ íì¼ìºì¤í¸ë¥¼ ì´ì©ì¤ì´ì­ëë¤."
          )
        : (jQuery("#web_user_email").val(e), jQuery("#web_user_email").focus());
    }
  }),
  (WEB_MEMBER.NLOGIN.afterLoginOk = function (e) {
    if (
      (console.log("WEB_MEMBER.NLOGIN.afterLoginOk"),
      console.debug(e),
      1 == isDefined(APP))
    )
      var t = APP;
    else var t = new FC_APP();
    var a = function (e) {
        if (
          (console.log("checkEventCallBackFun"),
          console.debug(e),
          1 == isDefined(e.country_code))
        ) {
          var t = e.country_code,
            a = [
              "US",
              "CA",
              "DE",
              "FR",
              "GB",
              "SG",
              "PH",
              "VN",
              "TH",
              "CN",
              "JP",
              "AU",
              "NZ",
            ];
          if (jQuery.inArray(t, a) >= 0)
            return console.log(t), GO_MENU("country", t), void 0;
        }
        var i = "/www/",
          n = gCookie.get("fc_sns_next_url");
        isDefined(n) ? (i = decodeURI(n)) : GO_NEXT_PAGE(!1);
      },
      i = e;
    if (1 != parseInt(i.status.code))
      return t.PROTOCOL.errorCommon(i, t), void 0;
    var n = i.result.member;
    return (
      t.setMember(n),
      1 == checkDirectView()
        ? (location.reload(!0), void 0)
        : (jQuery("#event-view-attend-wrap").length > 0 && location.reload(!0),
          jQuery(".fc-web-login-form-modal").modal("hide"),
          jQuery(".fcLoginModalSns").modal("hide"),
          1 == isDefined(i.result.alim) &&
            FC_MEMBER_FN.showMemberNotice(i.result),
          1 == isDefined(i.result.user) &&
            (gCookie.set(t.DEFINE.STORAGE.USER_AUTO_LOGIN, "1", 365),
            gCookie.set(
              t.DEFINE.STORAGE.USER_EMAIL,
              i.result.member.email,
              365
            ),
            gCookie.set(
              t.DEFINE.STORAGE.USER_ACCESS_TOKEN,
              i.result.access_token,
              365
            ),
            1 == isDefined(i.result.login_token) &&
              (gCookie.set(
                t.DEFINE.STORAGE.USER_LOGIN_TOKEN,
                i.result.login_token,
                31
              ),
              setFcLoginKey(i.result.member.email, i.result.login_token))),
          WEB_MEMBER.checkLoginEvent(i.result, a, "login"),
          void 0)
    );
  }),
  (WEB_MEMBER.NLOGIN.loginFormValidate = function (e) {
    console.log("WEB_MEMBER.NLOGIN.loginFormValidate");
    var t = function () {
        console.log("nloginBeforeSerializeFun");
        var e = jQuery("#web_user_email").val();
        return -1 != e.indexOf("SNS") && jQuery("#web_user_email").val(""), !0;
      },
      a = function (e, t) {
        var a =
          '<ul class="input-notice"><li><span class="join-error-msg">' +
          e +
          "</span></li></ul>";
        "email" == t
          ? (jQuery("#user_id-error").html(a).show(),
            jQuery("#web_user_email").focus())
          : (t = "pass") &&
            (jQuery("#user_pw-error").html(a).show(),
            jQuery("#web_user_pw").focus());
      },
      i = function (e, t, i) {
        console.log("nloginBeforeSubmitFun");
        var n = $.param(e);
        console.debug(e), console.debug(t), console.debug(i), console.debug(n);
        var s = {};
        for (var o in e) {
          var r = e[o].name;
          s[r] = e[o].value;
        }
        if (
          (console.debug(s), 0 == isDefined(s.user_email) || "" == s.user_email)
        )
          return a(WEB_MEMBER.MSG.input_email, "email"), !1;
        var l = WEB_MEMBER_EMIL_PATTERN;
        return 0 == isDefined(s.user_email) || 1 == l.test(s.user_email)
          ? (a(WEB_MEMBER.MSG.fail_sp_email, "email"),
            jQuery("#web_user_email").focus(),
            !1)
          : (jQuery("#user_id-error").hide(),
            0 == isDefined(s.user_pass) || "" == s.user_pass
              ? (a(WEB_MEMBER.MSG.input_pass, "pass"), !1)
              : 4 > s.user_pass.length
              ? (a(WEB_MEMBER.MSG.min_pass, "pass"), !1)
              : (jQuery("#user_pw-error").hide(), !0));
      },
      n = e.DEFINE.SERVER_SSL_PROTOCOL + e.PROTOCOL.URL.MEMBER.USER_LOGIN,
      s = {
        target: "#fc-web-new-login-form-container",
        beforeSerialize: t,
        beforeSubmit: i,
        success: WEB_MEMBER.NLOGIN.afterLoginOk,
        url: n,
        dataType: "jsonp",
      };
    $("#form_login").ajaxForm(s),
      jQuery("#web_user_email").unbind("click"),
      jQuery("#web_user_email").bind("click", function () {
        console.log("web_user_email"), jQuery(".form-error").hide();
        var e = jQuery(this).val();
        -1 != e.indexOf("SNS") && jQuery(this).val("");
      }),
      jQuery("#web_user_pw").unbind("click"),
      jQuery("#web_user_pw").bind("click", function () {
        console.log("web_user_pw"), jQuery(".form-error").hide();
      });
  }),
  (WEB_MEMBER.loginFormValidate = function (e) {
    console.log("WEB_MEMBER.loginFormValidate");
    var t = function (t) {
      var a = jQuery(t).serialize(),
        i = jQuery("#checkKeepLogin").is(":checked");
      console.log("autoSave::" + i);
      var n = function (t) {
          if ((console.debug(t), 1 == checkDirectView()))
            return location.reload(!0), void 0;
          e.setMember(t.member),
            1 == t.member.flag_uploader && $("#my_upload").show(),
            jQuery(".fc-web-login-form-modal").modal("hide"),
            1 == isDefined(t.alim) && FC_MEMBER_FN.showMemberNotice(t),
            jQuery("#event-view-attend-wrap").length > 0 && location.reload(!0),
            1 == i &&
              1 == isDefined(t.access_token) &&
              (gCookie.set(e.DEFINE.STORAGE.USER_AUTO_LOGIN, "1", 365),
              gCookie.set(e.DEFINE.STORAGE.USER_EMAIL, t.member.email, 365),
              gCookie.set(
                e.DEFINE.STORAGE.USER_ACCESS_TOKEN,
                t.access_token,
                365
              ),
              1 == isDefined(t.login_token) &&
                gCookie.set(
                  e.DEFINE.STORAGE.USER_LOGIN_TOKEN,
                  t.login_token,
                  31
                ));
          var a = function (t) {
            if (1 == isDefined(t.country_code) && 1 == isDefined(e.MEMBER)) {
              var a = t.country_code;
              jQuery.inArray(a, e.MEMBER.global_code) >= 0
                ? (console.log(a), GO_MENU("country", a))
                : "KR" == a && console.log("country_code" + a);
            }
            GO_NEXT_PAGE(!1);
          };
          WEB_MEMBER.checkLoginEvent(t, a, "login");
        },
        s = function (e) {
          console.log(e);
          var t = e.status.message,
            a =
              '<label class="form-error">' + t.replace(/\n/g, " ") + "</label>";
          jQuery(".fc-web-login-form-modal").find(".login_txt").html(a);
        };
      e.DEFINE.AJAX_HTTP_TYPE = "jsonp";
      var o = {
        server: e.DEFINE.SERVER_SSL_PROTOCOL,
        uri: e.PROTOCOL.URL.MEMBER.USER_LOGIN,
        success: n,
        error_fun: s,
        error_type: !1,
        loading_bar: !1,
        params: a,
      };
      e.PROTOCOL.ajaxCall(o, e);
    };
    jQuery("#form_login").validate({
      errorClass: "form-error",
      debug: !0,
      rules: {
        user_email: { required: !0, email: !0 },
        user_pass: { required: !0 },
      },
      messages: {
        user_id: {
          required: "ì´ë©ì¼ ì£¼ìë¥¼ ìë ¥í´ì£¼ì¸ì.",
          minlength: jQuery.validator.format("ìì´ëë {0}ì ì´ì"),
        },
        user_pass: {
          required: "ë¹ë° ë²í¸ë¥¼ ìë ¥í´ì£¼ì¸ì.",
          minlength: jQuery.validator.format(
            "Please, at least {0} characters are necessary"
          ),
          maxlength: jQuery.validator.format(
            "Please, at most {0} characters are necessary"
          ),
        },
        user_email: {
          required: "ì´ë©ì¼ ì£¼ìë¥¼ ìë ¥í´ì£¼ì¸ì.",
          email: "ì¬ë°ë¥¸ ì´ë©ì¼ì£¼ìë¥¼ ìë ¥íìì¤.",
        },
      },
      submitHandler: function (e) {
        console.log("submitHandler"), t(e);
      },
      success: function () {
        var e = $("#user_id").val() + "@" + $("#email_host").val();
        $("#user_email").val(e);
      },
    });
    var a = gCookie.get("email");
    if (1 == isDefined(a)) {
      var i = isFcSnsChannelEmail(a);
      null != i
        ? jQuery("#user_id").val(
            "SNSê³ì (" + i + ")ì íµí´ íì¼ìºì¤í¸ë¥¼ ì´ì©ì¤ì´ì­ëë¤."
          )
        : (jQuery("#user_id").val(a), jQuery("#user_id").focus());
    }
  }),
  (WEB_MEMBER.joinFormValidate = function (e) {
    console.log("WEB_MEMBER.joinFormValidate");
    var t =
        '<ul class="input-notice" id="input-join-form-notice"><li>' +
        WEB_MEMBER.MSG.df +
        "</li></ul>",
      a = "#join-txt-notice-email";
    console.debug(e), jQuery(a).html(t);
    var i = e.DEFINE.SERVER_SSL_PROTOCOL + e.PROTOCOL.URL.MEMBER.USER_CREATE,
      n = function (e) {
        jQuery(a).html(t), $.param(e);
        var i = {};
        for (var n in e) {
          var s = e[n].name;
          i[s] = e[n].value;
        }
        if (
          (console.debug(i),
          0 == isDefined(i.join_user_id) || "" == i.join_user_id)
        ) {
          var o =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.fail_email +
            "</span></li></ul>";
          return jQuery(a).html(o), jQuery("#join_user_id").focus(), !1;
        }
        var r = WEB_MEMBER_EMIL_PATTERN;
        if (0 == isDefined(i.join_user_id) || 1 == r.test(i.join_user_id)) {
          var o =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.fail_sp_email +
            "</span></li></ul>";
          return jQuery(a).html(o), jQuery("#join_user_id").focus(), !1;
        }
        if (1 == r.test(i.join_user_id)) {
          var o =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.fail_sp_email +
            "</span></li></ul>";
          return jQuery(a).html(o), jQuery("#join_user_id").focus(), !1;
        }
        if (0 == isDefined(i.email_host) || "" == i.email_host) {
          var o =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.not_host +
            "</span></li></ul>";
          return jQuery(a).html(o), jQuery("#email_host").focus(), !1;
        }
        if (0 == isDefined(i.email_host) || 1 == r.test(i.email_host)) {
          var o =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.fail_sp_email +
            "</span></li></ul>";
          return jQuery(a).html(o), jQuery("#email_host").focus(), !1;
        }
        if (0 == checkEmailForm(i.join_user_email)) {
          var o =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.fail_sp_email +
            "</span></li></ul>";
          return jQuery(a).html(o), jQuery("#join_user_id").focus(), !1;
        }
        if (0 == isDefined(i.join_user_email) || "" == i.join_user_email) {
          var o =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.fail_email +
            "</span></li></ul>";
          return jQuery(a).html(o), jQuery("#join_user_id").focus(), !1;
        }
        if (0 == isDefined(i.user_pass)) {
          var o =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.input_pass +
            "</span></li></ul>";
          return jQuery(a).html(o), !1;
        }
        if (4 > i.user_pass.length) {
          var o =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.min_pass +
            "</span></li></ul>";
          return jQuery(a).html(o), !1;
        }
        if (0 == isDefined(i.user_pass2)) {
          var o =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.input_pass2 +
            "</span></li></ul>";
          return jQuery(a).html(o), !1;
        }
        if (i.user_pass != i.user_pass2) {
          var o =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.not_same_pass +
            "</span></li></ul>";
          return jQuery(a).html(o), !1;
        }
        var l = jQuery("#agreeJoin").is(":checked");
        return 0 == l
          ? (alert(
              "ì´ì©ì½ê´ê³¼ ê°ì¸ì ë³´ ì·¨ê¸ë°©ì¹¨ì ëìí´ì¼ë§ íìê°ìì´ ê°ë¥í©ëë¤."
            ),
            jQuery("#agreeJoin").focus(),
            !1)
          : !0;
      },
      s = function (e) {
        console.log("errStatusMsg");
        var t =
          '<ul class="input-notice"><li><span class="join-error-msg">' +
          e.replace(/\n/g, " ") +
          "</span></li></ul>";
        jQuery(a).html(t);
      },
      o = function (t) {
        console.log("successJoinFormFun");
        var a = t;
        if (
          (console.debug("====="),
          console.debug(a),
          1 != parseInt(a.status.code))
        )
          return s(a.status.message), void 0;
        var i = a.result.member;
        e.setMember(i), $("#fcJoinModal").modal("hide");
        var n = function () {
            jQuery("#bbsBoardIdx").length > 0
              ? jQuery("#bbsBoardIdx").val() > 0
                ? (location.href =
                    e.DEFINE.CI_ROOT +
                    "/home/?view=" +
                    jQuery("#bbsBoardIdx").val())
                : GO_MENU("home")
              : GO_NEXT_PAGE(!1);
          },
          o = gCookie.get("p_id"),
          r = o.indexOf("naverview", 0);
        if ("mingky" == o || "naversearch" == o || 0 == r) {
          var l = new Date();
          return l.getHours(), $("#memberValidAdult").val(1), void 0;
        }
        return WEB_MEMBER.checkLoginEvent(a.result, n, "join"), void 0;
      },
      r = {
        target: "#fcJoinModal",
        beforeSubmit: n,
        success: o,
        url: i,
        dataType: "jsonp",
      };
    $("#form_signup").ajaxForm(r);
    var l = function () {
        var e = $("#join_user_id").val();
        $("#select_email_host option:selected").val();
        var t = $("#join_email_host").val();
        if ("" == t) {
          var i =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.not_host +
            "</span></li></ul>";
          return jQuery(a).html(i), $("#select_email_host").focus(), !1;
        }
        if ("" == e || "" == t) {
          var i =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.fail_email +
            "</span></li></ul>";
          return jQuery(a).html(i), $("#join_user_id").focus(), !1;
        }
        return !0;
      },
      c = function () {
        var t = "",
          i = $("#join_user_id").val(),
          n = $("#join_email_host").val(),
          s = $("#select_email_host option:selected").val(),
          o = n;
        o = "@" == s ? n : s;
        var t = $("#join_user_id").val() + "@" + o;
        if (1 == l()) {
          var r = WEB_MEMBER_EMIL_PATTERN;
          if (1 == r.test(i)) {
            var c =
              '<ul class="input-notice"><li><span class="join-error-msg">ë©ì¼ ì£¼ìì ì¬ì©í  ì ìë í¹ìë¬¸ìê° í¬í¨ëì´ ììµëë¤.</span></li></ul>';
            return jQuery(a).html(c), jQuery("#join_user_id").focus(), void 0;
          }
          if (1 == r.test(n)) {
            var c =
              '<ul class="input-notice"><li><span class="join-error-msg">ë©ì¼ ì£¼ìì ì¬ì©í  ì ìë í¹ìë¬¸ìê° í¬í¨ëì´ ììµëë¤.</span></li></ul>';
            return (
              jQuery(a).html(c), jQuery("#join_email_host").focus(), void 0
            );
          }
          jQuery("#join_user_email").val(t),
            WEB_MEMBER.joinFormValidateOnCheckUniqEmil(e);
        } else
          "" == n
            ? jQuery("#join_email_host").focus()
            : jQuery("#join_user_email").focus();
      };
    jQuery("#join_user_id").unbind("click"),
      $("#join_user_id").bind("click", function () {
        console.log("join_user_id click"), jQuery(a).html(t);
      }),
      jQuery("#agreeJoin").unbind("click"),
      $("#agreeJoin").bind("click", function () {
        console.log("agreeJoin click"),
          1 == this.checked
            ? jQuery(".join-agree-checkbox").prop("checked", !0)
            : jQuery(".join-agree-checkbox").prop("checked", !1);
      }),
      jQuery("#agreeJoinYak").unbind("click"),
      $("#agreeJoinYak").bind("click", function () {
        console.log("agreeJoinYak click"),
          1 == this.checked
            ? 1 == jQuery("#agreeJoinInfo").is(":checked") &&
              jQuery("#agreeJoin").prop("checked", !0)
            : jQuery("#agreeJoin").prop("checked", !1);
      }),
      jQuery("#agreeJoinInfo").unbind("click"),
      $("#agreeJoinInfo").bind("click", function () {
        console.log("agreeJoinInfo click"),
          1 == this.checked
            ? 1 == jQuery("#agreeJoinYak").is(":checked") &&
              jQuery("#agreeJoin").prop("checked", !0)
            : jQuery("#agreeJoin").prop("checked", !1);
      }),
      jQuery("#join_user_id").unbind("blur"),
      jQuery("#join_user_id").bind("blur", function () {
        console.log("join_user_id blur");
        var e = $(this).val(),
          t = WEB_MEMBER_EMIL_PATTERN;
        if ((console.log(e), "" == e)) {
          var i =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.input_email +
            "</span></li></ul>";
          return jQuery(a).html(i).show(), $("#join_user_id").focus(), void 0;
        }
        if (3 > e.length) {
          var i =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.min_email +
            "</span></li></ul>";
          return jQuery(a).html(i).show(), $("#join_user_id").focus(), void 0;
        }
        if (1 == t.test(e)) {
          var i =
            '<ul class="input-notice"><li><span class="join-error-msg">ë©ì¼ ì£¼ìì ì¬ì©í  ì ìë í¹ìë¬¸ìê° í¬í¨ëì´ ììµëë¤.</span></li></ul>';
          return jQuery(a).html(i), jQuery("#join_user_id").focus(), void 0;
        }
        var n = "",
          s = $("#join_email_host").val(),
          o = $("#select_email_host option:selected").val(),
          r = s;
        r = "@" == o ? s : o;
        var n = $("#join_user_id").val() + "@" + r;
        jQuery("#join_user_email").val(n);
      }),
      jQuery("#join_email_host").unbind("focus"),
      jQuery("#join_email_host").bind("focus", function () {
        console.log("join_email_host focus"), $(this).val();
        var e = WEB_MEMBER_EMIL_PATTERN;
        if (3 > $("#join_user_id").val().length) {
          var t =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.min_email +
            "</span></li></ul>";
          return jQuery(a).html(t).show(), $("#join_user_id").focus(), void 0;
        }
        if (1 == e.test($("#join_user_id").val())) {
          var t =
            '<ul class="input-notice"><li><span class="join-error-msg">ë©ì¼ ì£¼ìì ì¬ì©í  ì ìë í¹ìë¬¸ìê° í¬í¨ëì´ ììµëë¤.</span></li></ul>';
          return jQuery(a).html(t), jQuery("#join_user_id").focus(), void 0;
        }
      }),
      jQuery("#select_email_host").unbind("change"),
      $("#select_email_host").change(function () {
        var e = $(this).val();
        if (
          ("@" == e
            ? $("#join_email_host").val("").prop("readonly", !1)
            : ($("#join_email_host").prop("readonly", !0),
              $("#join_email_host").val(e)),
          1 == l())
        )
          return c(), void 0;
        var t =
          '<ul class="input-notice"><li><span class="join-error-msg">' +
          WEB_MEMBER.MSG.not_host +
          "</span></li></ul>";
        return jQuery(a).html(t), void 0;
      }),
      jQuery("#user_pw1").unbind("focus"),
      jQuery("#user_pw1").bind("focus", function () {
        console.log("user_pw1 focus");
        var e = WEB_MEMBER_EMIL_PATTERN;
        if (3 > $("#join_user_id").val().length) {
          var t =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.min_email +
            "</span></li></ul>";
          return jQuery(a).html(t).show(), $("#join_user_id").focus(), void 0;
        }
        if (1 == e.test($("#join_user_id").val())) {
          var t =
            '<ul class="input-notice"><li><span class="join-error-msg">ë©ì¼ ì£¼ìì ì¬ì©í  ì ìë í¹ìë¬¸ìê° í¬í¨ëì´ ììµëë¤.</span></li></ul>';
          return jQuery(a).html(t), jQuery("#join_user_id").focus(), void 0;
        }
        if ("" == $("#join_email_host").val()) {
          var t =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.not_host +
            "</span></li></ul>";
          return (
            jQuery(a).html(t).show(), $("#join_email_host").focus(), void 0
          );
        }
        if (1 != l()) {
          var t =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.input_email +
            "</span></li></ul>";
          return jQuery(a).html(t).show(), $("#join_user_id").focus(), void 0;
        }
        c();
      }),
      jQuery("#user_pw2").unbind("focus"),
      jQuery("#user_pw2").bind("focus", function () {
        console.log("user_pw2 focus"), $(this).val();
        var e = $("#user_pw1").val(),
          t = WEB_MEMBER_EMIL_PATTERN;
        if (3 > $("#join_user_id").val().length) {
          var i =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.min_email +
            "</span></li></ul>";
          return jQuery(a).html(i).show(), $("#join_user_id").focus(), void 0;
        }
        if (1 == t.test($("#join_user_id").val())) {
          var i =
            '<ul class="input-notice"><li><span class="join-error-msg">ë©ì¼ ì£¼ìì ì¬ì©í  ì ìë í¹ìë¬¸ìê° í¬í¨ëì´ ììµëë¤.</span></li></ul>';
          return jQuery(a).html(i), jQuery("#join_user_id").focus(), void 0;
        }
        if ("" == $("#join_email_host").val()) {
          var i =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.not_host +
            "</span></li></ul>";
          return (
            jQuery(a).html(i).show(), $("#join_email_host").focus(), void 0
          );
        }
        if ("" == e) {
          var i =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.input_pass +
            "</span></li></ul>";
          return jQuery(a).html(i).show(), $("#user_pw1").focus(), void 0;
        }
        if (1 != l()) {
          var i =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.input_email +
            "</span></li></ul>";
          return jQuery(a).html(i).show(), $("#join_user_id").focus(), void 0;
        }
        c();
      });
  }),
  (WEB_MEMBER.joinFormValidateOnCheckUniqEmil = function (e) {
    console.log("joinFormValidateOnCheckUniqEmil");
    var t = $("#join_user_email").val();
    if ("" == t) {
      var a =
        '<ul class="input-notice"><li><span class="join-error-msg">' +
        WEB_MEMBER.MSG.input_email +
        "</span></li></ul>";
      return (
        jQuery("#join-txt-notice-email").html(a).show(),
        $("#join_user_id").focus(),
        void 0
      );
    }
    var i = function () {
        console.log("setDuplicateEmail");
        var e =
          '<ul class="input-notice"><li><span class="join-error-msg">' +
          WEB_MEMBER.MSG.not_uniq_mail +
          "</span></li></ul>";
        jQuery("#join-txt-notice-email").html(e), $("#join_user_id").focus();
      },
      n = function () {
        console.log("setNotDuplicateEmail");
        var e = '<span class="dspan">ì¬ì©ì´ ê°ë¥í ì´ë©ì¼ ì£¼ììëë¤.</span>';
        jQuery("#join-txt-notice-email").html(e);
      },
      s = { join_user_email: t },
      o = {
        e_check: jQuery("#fcJoinModal").data("e_check"),
        email: jQuery("#fcJoinModal").data("email"),
      };
    if (o.email == s.join_user_email)
      return 1 == parseInt(o.e_check) ? i(o.email) : n(), void 0;
    var r = function (e) {
        var t = { e_check: e.check, email: e.get };
        jQuery("#fcJoinModal").data({ e_check: t.e_check, email: t.email }),
          1 == parseInt(t.e_check) ? i(t.email) : n();
      },
      l = {
        server: e.DEFINE.SERVER_PROTOCOL,
        uri: e.PROTOCOL.URL.MEMBER.CHECK_UNIQUE,
        success: r,
        error_type: !0,
        loading_bar: !1,
        params: s,
      };
    e.PROTOCOL.ajaxCall(l, e);
  }),
  (WEB_MEMBER.logOut = function () {
    console.log("WEB_MEMBER.logOut"), null == APP && (APP = new FC_APP());
    var e = function (e) {
        console.debug(e),
          FC_MEMBER_FN.setLogout(APP),
          alert("ë¡ê·¸ ìì íì¨ìµëë¤."),
          (location.href = "/index.php");
      },
      t = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: APP.PROTOCOL.URL.MEMBER.USER_LOGOUT,
        success: e,
        error_type: !1,
        loading_bar: !1,
        params: { device_type: 0 },
      };
    APP.PROTOCOL.ajaxCall(t, APP);
  }),
  (WEB_MEMBER.findId = function () {
    jQuery(".fc-web-login-form-modal").modal("hide"),
      FC_MODAL_OPEN("fcIdFindModal"),
      jQuery("#find_id_result").hide(),
      jQuery("#find_id_name").focus();
  }),
  (WEB_MEMBER.findIdProc = function (e) {
    var t = new FC_APP();
    e = void 0 != e ? e : 1;
    var a = jQuery('input:radio[name="find_id_gender"]:checked').val(),
      i = jQuery("#find_id_name").val(),
      n = jQuery("#birth_find_id_y").val(),
      s = jQuery("#birth_find_id_m").val(),
      o = jQuery("#birth_find_id_d").val(),
      r = n + s + o;
    if ("" == i)
      return alert("ì´ë¦ì ìë ¥í´ ì£¼ì¸ì."), jQuery("#find_id_name").focus(), !1;
    jQuery("#find_id").hide();
    var l = { page: e, find_id_birth: r, name: i, gender: a },
      c = function (e) {
        console.debug(e);
        var t = e.list,
          a = "";
        (a += '<li class="tit">'),
          (a += "	<div>ì´ë©ì¼</div>"),
          (a += "	<div>ê°ìì¼</div>"),
          (a += "</li>");
        var i = "bg";
        if (e.cnt > 0) {
          for (var n = 0; t.length > n; n++)
            (i = 0 == n % 2 ? "bg" : ""),
              (a += '<li class="' + i + '">'),
              (a += "	<div>" + t[n].email + "</div>"),
              (a += "	<div>" + t[n].regdate + "</div>"),
              (a += "</li>");
          jQuery("#find_id_paging").html(e.paging);
        } else
          (a += '<li><p class="no_data">ê²ì ê²°ê³¼ê° ììµëë¤.</p></li>'),
            jQuery("#find_id_paging").empty();
        jQuery("#find_id_list").html(a), jQuery("#find_id_result").show();
      };
    t.DEFINE.AJAX_HTTP_TYPE = "jsonp";
    var d = t.PROTOCOL.URL.MEMBER.FIND_EMAIL,
      u = {
        server: t.DEFINE.SERVER_SSL_PROTOCOL,
        uri: d,
        success: c,
        error_type: !0,
        loading_bar: !1,
        params: l,
      };
    t.PROTOCOL.ajaxCall(u, t);
  }),
  (WEB_MEMBER.findPwd = function () {
    jQuery(".fc-web-login-form-modal").modal("hide"),
      FC_MODAL_OPEN("fcPwdFindModal");
  }),
  (WEB_MEMBER.findPwdProc = function () {
    var e = jQuery("#find_pwd_email").val();
    if (null == e || 5 > e.length)
      return alert("ì´ë©ì¼ì ìë ¥í´ ì£¼ì¸ì."), void 0;
    var t = { email: e },
      a = function (e) {
        jQuery("#fcPwdFindModal").modal("hide"),
          "success" == e.result
            ? alert("ë©ì¼ë¡ ê³ì  ì ë³´ë¥¼ ë°ì¡ íììµëë¤. ë©ì¼ì íì¸í´ ì£¼ì¸ì.")
            : alert("ê°ìì ë±ë¡íì  IDì ì´ë©ì¼ì ì ííê² ìë ¥í´ ì£¼ì¸ì.");
      },
      i = new FC_APP(),
      n = i.PROTOCOL.URL.MEMBER.FIND_PWD;
    i.DEFINE.AJAX_HTTP_TYPE = "jsonp";
    var s = {
      server: i.DEFINE.SERVER_SSL_PROTOCOL,
      uri: n,
      success: a,
      error_type: !0,
      loading_bar: !1,
      params: t,
    };
    i.PROTOCOL.ajaxCall(s, i);
  }),
  (WEB_MEMBER.adultAuth = function (e) {
    var t = jQuery("#auth_return_url").val();
    "ipin" == e
      ? window.open(
          "/www/member/ipin_auth?return=" + t,
          "ipin2",
          "width=448,height=560"
        )
      : "phone" == e &&
        window.open(
          "/www/member/phone_auth_view?return=" + t,
          "phone",
          "width=628,height=580"
        );
  }),
  (WEB_MEMBER.realnameAuth = function () {
    var e = jQuery('input:radio[name="auth_gender"]:checked').val(),
      t = jQuery("#auth_name").val(),
      a = jQuery("#birth_auth_y").val(),
      i = jQuery("#birth_auth_m").val(),
      n = jQuery("#birth_auth_d").val();
    (i = "0" + i), (i = i.slice("-2")), (n = "0" + n), (n = n.slice("-2"));
    var s = a + i + n,
      o = new FC_APP();
    if ("" == t)
      return alert("ì´ë¦ì ìë ¥í´ ì£¼ì¸ì."), jQuery("#auth_name").focus(), !1;
    var r = { auth_birth: s, auth_name: t, auth_gender: e },
      l = function (e) {
        jQuery("#fcRealNameSignupModal").modal("hide"),
          o.setMember(e.member),
          alert("ë³¸ì¸íì¸ ì±ê³µ - ë³¸ì¸íì¸ì´ ìë£ ëììµëë¤.");
        var t = jQuery("#realname_return").val();
        "" != t &&
          (console.debug(t),
          11 == t
            ? (null == o && (o = new FC_APP()),
              (location.href = o.DEFINE.LINK.NEW.CONTENTS + "/#!/11/1101/1/"))
            : GO_MENU(t)),
          GO_NEXT_PAGE(!0);
      },
      c = o.PROTOCOL.URL.MEMBER.REALNAME_AUTH;
    o.DEFINE.AJAX_HTTP_TYPE = "jsonp";
    var d = {
      server: o.DEFINE.SERVER_SSL_PROTOCOL,
      uri: c,
      success: l,
      error_type: !0,
      loading_bar: !1,
      params: r,
    };
    o.PROTOCOL.ajaxCall(d, o);
  }),
  (WEB_MEMBER.simpleAdultAuth = function () {
    var e = jQuery('input:radio[name="adult_gender"]:checked').val(),
      t = jQuery("#adult_name").val(),
      a = jQuery("#birth_adult_y").val(),
      i = jQuery("#birth_adult_m").val(),
      n = jQuery("#birth_adult_d").val(),
      s = a + i + n;
    if ("" == t)
      return alert("ì´ë¦ì ìë ¥í´ ì£¼ì¸ì."), jQuery("#adult_name").focus(), !1;
    var o = new FC_APP(),
      r = { auth_birth: s, auth_name: t, auth_gender: e },
      l = function (e) {
        jQuery("#fcAdultSignupSimpleModal").modal("hide"),
          o.setMember(e.member),
          alert("ë³¸ì¸ì¸ì¦ì´ ìë£ ëììµëë¤."),
          GO_NEXT_PAGE(!0);
      },
      c = o.PROTOCOL.URL.MEMBER.REALNAME_AUTH;
    o.DEFINE.AJAX_HTTP_TYPE = "jsonp";
    var d = {
      server: o.DEFINE.SERVER_SSL_PROTOCOL,
      uri: c,
      success: l,
      error_type: !0,
      loading_bar: !1,
      params: r,
    };
    o.PROTOCOL.ajaxCall(d, o);
  }),
  (WEB_MEMBER.pJoinFormValidateOnCheckUniqEmil = function (e) {
    console.log("pJoinFormValidateOnCheckUniqEmil");
    var t = $("#join_user_email-p").val();
    if ("" == t) {
      var a =
        '<ul class="input-notice"><li><span class="join-error-msg">' +
        WEB_MEMBER.MSG.input_email +
        "</span></li></ul>";
      return (
        jQuery("#join-txt-notice-email-p").html(a).show(),
        $("#join_user_id-p").focus(),
        void 0
      );
    }
    var i = function () {
        console.log("setpDuplicateEmail");
        var e =
          '<ul class="input-notice"><li><span class="join-error-msg">' +
          WEB_MEMBER.MSG.not_uniq_mail +
          "</span></li></ul>";
        console.debug(e),
          jQuery("#join-txt-notice-email-p").html(e),
          $("#join_user_id-p").focus();
      },
      n = function () {
        console.log("setNotDuplicateEmail");
        var e = '<span class="dspan">ì¬ì©ì´ ê°ë¥í ì´ë©ì¼ ì£¼ììëë¤.</span>';
        jQuery("#join-txt-notice-email-p").html(e);
      };
    console.debug("suck");
    var s = { join_user_email: t },
      o = {
        e_check: jQuery("#form_signup-p").data("e_check"),
        email: jQuery("#form_signup-p").data("email"),
      };
    if (o.email == s.join_user_email)
      return 1 == parseInt(o.e_check) ? i(o.email) : n(), void 0;
    var r = function (e) {
      console.log("successUniqueHttpFun"), console.debug(e);
      var t = { e_check: e.check, email: e.get };
      jQuery("#form_signup-p").data({ e_check: t.e_check, email: t.email }),
        1 == parseInt(t.e_check) ? i(t.email) : n();
    };
    e.DEFINE.AJAX_HTTP_TYPE = "jsonp";
    var l = {
      server: e.DEFINE.SERVER_SSL_PROTOCOL,
      uri: e.PROTOCOL.URL.MEMBER.CHECK_UNIQUE,
      success: r,
      error_type: !0,
      loading_bar: !1,
      params: s,
    };
    e.PROTOCOL.ajaxCall(l, e);
  }),
  (WEB_MEMBER.pJoinFormValidate = function (e) {
    console.log("WEB_MEMBER.pJoinFormValidate");
    var t =
        '<ul class="input-notice" id="input-join-form-notice"><li>' +
        WEB_MEMBER.MSG.df +
        "</li></ul>",
      a = "#join-txt-notice-email-p";
    console.debug(e);
    var i = e.DEFINE.SERVER_SSL_PROTOCOL + e.PROTOCOL.URL.MEMBER.USER_CREATE,
      n = function (e) {
        $.param(e);
        var t = {};
        for (var i in e) {
          var n = e[i].name;
          t[n] = e[i].value;
        }
        if (
          (console.debug(t),
          0 == isDefined(t.join_user_id) || "" == t.join_user_id)
        ) {
          var s =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.fail_email +
            "</span></li></ul>";
          return jQuery(a).html(s), jQuery("#join_user_id-p").focus(), !1;
        }
        var o = WEB_MEMBER_EMIL_PATTERN;
        if (0 == isDefined(t.join_user_id) || 1 == o.test(t.join_user_id)) {
          var s =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.fail_sp_email +
            "</span></li></ul>";
          return jQuery(a).html(s), jQuery("#join_user_id-p").focus(), !1;
        }
        if (1 == o.test(t.join_user_id)) {
          var s =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.fail_sp_email +
            "</span></li></ul>";
          return jQuery(a).html(s), jQuery("#join_user_id-p").focus(), !1;
        }
        if (0 == isDefined(t.email_host) || "" == t.email_host) {
          var s =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.not_host +
            "</span></li></ul>";
          return jQuery(a).html(s), jQuery("#email_host-p").focus(), !1;
        }
        if (0 == isDefined(t.email_host) || 1 == o.test(t.email_host)) {
          var s =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.fail_sp_email +
            "</span></li></ul>";
          return jQuery(a).html(s), jQuery("#email_host-p").focus(), !1;
        }
        if (0 == checkEmailForm(t.join_user_email)) {
          var s =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.fail_sp_email +
            "</span></li></ul>";
          return jQuery(a).html(s), jQuery("#join_user_id-p").focus(), !1;
        }
        if (0 == isDefined(t.join_user_email) || "" == t.join_user_email) {
          var s =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.fail_email +
            "</span></li></ul>";
          return jQuery(a).html(s), jQuery("#join_user_id-p").focus(), !1;
        }
        if (0 == isDefined(t.user_pass)) {
          var s =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.input_pass +
            "</span></li></ul>";
          return jQuery(a).html(s), jQuery("#user_pw1-p").focus(), !1;
        }
        if (0 == isDefined(t.user_pass2)) {
          var s =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.input_pass2 +
            "</span></li></ul>";
          return jQuery(a).html(s), !1;
        }
        if (t.user_pass != t.user_pass2) {
          var s =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.not_same_pass +
            "</span></li></ul>";
          return jQuery(a).html(s), !1;
        }
        var r = jQuery("#agreeJoin-p").is(":checked");
        return 0 == r
          ? 1 == confirm(WEB_MEMBER.MSG.check_agree)
            ? (jQuery("#agreeJoin-p").prop("checked", !0), !0)
            : !1
          : parseInt(jQuery("#memberLoginOk").val()) > 0
          ? (alert("ì´ë¯¸ ë¡ê·¸ì¸ì¤ ìëë¤."), !1)
          : !0;
      },
      s = function (e) {
        console.log("errStatusMsg");
        var t =
          '<ul class="input-notice"><li><span class="join-error-msg">' +
          e.replace(/\n/g, " ") +
          "</span></li></ul>";
        jQuery(a).html(t);
      },
      o = function (t) {
        console.log("successJoinFormFun");
        var a = t;
        if (
          (console.debug("====="),
          console.debug(a),
          1 != parseInt(a.status.code))
        )
          return s(a.status.message), void 0;
        var i = a.result.member;
        e.setMember(i);
        var n = function () {
          GO_MENU("home");
        };
        return WEB_MEMBER.checkLoginEvent(a.result, n, "join"), void 0;
      },
      r = { beforeSubmit: n, success: o, url: i, dataType: "jsonp" };
    $("#form_signup-p").ajaxForm(r);
    var l = function () {
        var e = $("#join_user_id-p").val();
        $("#select_email_host-p option:selected").val();
        var i = $("#join_email_host-p").val();
        if ("" == i) {
          var n =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.not_host +
            "</span></li></ul>";
          return jQuery(a).html(n), $("#select_email_host-p").focus(), !1;
        }
        if ("" == e || "" == i) {
          var n =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.fail_email +
            "</span></li></ul>";
          return jQuery(a).html(n), $("#join_user_id-p").focus(), !1;
        }
        return jQuery(a).html(t), !0;
      },
      c = function () {
        var t = "",
          i = $("#join_user_id-p").val(),
          n = $("#join_email_host-p").val(),
          s = $("#select_email_host-p option:selected").val(),
          o = n;
        o = "@" == s ? n : s;
        var t = $("#join_user_id-p").val() + "@" + o;
        if (1 == l()) {
          var r = WEB_MEMBER_EMIL_PATTERN;
          if (1 == r.test(i)) {
            var c =
              '<ul class="input-notice"><li><span class="join-error-msg">ë©ì¼ ì£¼ìì ì¬ì©í  ì ìë í¹ìë¬¸ìê° í¬í¨ëì´ ììµëë¤.</span></li></ul>';
            return jQuery(a).html(c), jQuery("#join_user_id-p").focus(), void 0;
          }
          if (1 == r.test(n)) {
            var c =
              '<ul class="input-notice"><li><span class="join-error-msg">ë©ì¼ ì£¼ìì ì¬ì©í  ì ìë í¹ìë¬¸ìê° í¬í¨ëì´ ììµëë¤.</span></li></ul>';
            return (
              jQuery(a).html(c), jQuery("#join_email_host-p").focus(), void 0
            );
          }
          jQuery("#join_user_email-p").val(t),
            WEB_MEMBER.pJoinFormValidateOnCheckUniqEmil(e);
        } else
          "" == n
            ? jQuery("#join_email_host-p").focus()
            : jQuery("#join_user_email-p").focus();
      };
    jQuery("#join_user_id-p").unbind("click"),
      $("#join_user_id-p").bind("click", function () {
        console.log("join_user_id click"), jQuery(a).html(t);
      }),
      jQuery("#agreeJoin-p").unbind("click"),
      $("#agreeJoin-p").bind("click", function () {
        console.log("agreeJoin-p click"),
          1 == this.checked
            ? jQuery(".p-join-agree-checkbox").prop("checked", !0)
            : jQuery(".p-join-agree-checkbox").prop("checked", !1);
      }),
      jQuery("#agreePjoinYak").unbind("click"),
      $("#agreePjoinYak").bind("click", function () {
        console.log("agreePjoinYak click"),
          1 == this.checked
            ? 1 == jQuery("#agreePjoinInfo").is(":checked") &&
              jQuery("#agreeJoin-p").prop("checked", !0)
            : jQuery("#agreeJoin-p").prop("checked", !1);
      }),
      jQuery("#agreePjoinInfo").unbind("click"),
      $("#agreePjoinInfo").bind("click", function () {
        console.log("agreePjoinInfo click"),
          1 == this.checked
            ? 1 == jQuery("#agreePjoinYak").is(":checked") &&
              jQuery("#agreeJoin-p").prop("checked", !0)
            : jQuery("#agreeJoin-p").prop("checked", !1);
      }),
      jQuery("#join_user_id-p").unbind("blur"),
      jQuery("#join_user_id-p").bind("blur", function () {
        var e = $(this).val(),
          t = WEB_MEMBER_EMIL_PATTERN;
        if ("" == e) {
          var i =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.input_email +
            "</span></li></ul>";
          return jQuery(a).html(i).show(), void 0;
        }
        if (3 > e.length) {
          var i =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.min_email +
            "</span></li></ul>";
          return jQuery(a).html(i).show(), void 0;
        }
        if (1 == t.test(e)) {
          var i =
            '<ul class="input-notice"><li><span class="join-error-msg">ë©ì¼ ì£¼ìì ì¬ì©í  ì ìë í¹ìë¬¸ìê° í¬í¨ëì´ ììµëë¤.</span></li></ul>';
          return jQuery(a).html(i), void 0;
        }
        var n = "",
          s = $("#join_email_host-p").val(),
          o = $("#select_email_host-p option:selected").val(),
          r = s;
        r = "@" == o ? s : o;
        var n = $("#join_user_id-p").val() + "@" + r;
        jQuery("#join_user_email-p").val(n);
      }),
      jQuery("#join_email_host-p").unbind("focus"),
      jQuery("#join_email_host-p").bind("focus", function () {
        console.log("join_email_host-p focus"), $(this).val();
        var e = WEB_MEMBER_EMIL_PATTERN;
        if (3 > $("#join_user_id-p").val().length) {
          var i =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.min_email +
            "</span></li></ul>";
          return jQuery(a).html(i).show(), $("#join_user_id-p").focus(), void 0;
        }
        if (1 == e.test($("#join_user_id-p").val())) {
          var i =
            '<ul class="input-notice"><li><span class="join-error-msg">ë©ì¼ ì£¼ìì ì¬ì©í  ì ìë í¹ìë¬¸ìê° í¬í¨ëì´ ììµëë¤.</span></li></ul>';
          return jQuery(a).html(i), jQuery("#join_user_id").focus(), void 0;
        }
        jQuery(a).html(t);
      }),
      jQuery("#select_email_host-p").unbind("change"),
      $("#select_email_host-p").change(function () {
        var e = $(this).val();
        if (
          ("@" == e
            ? $("#join_email_host-p").val("").prop("readonly", !1)
            : ($("#join_email_host-p").prop("readonly", !0),
              $("#join_email_host-p").val(e)),
          1 == l())
        )
          return c(), void 0;
        var t =
          '<ul class="input-notice"><li><span class="join-error-msg">' +
          WEB_MEMBER.MSG.not_host +
          "</span></li></ul>";
        return jQuery(a).html(t), void 0;
      }),
      jQuery("#user_pw1-p").unbind("focus"),
      jQuery("#user_pw1-p").bind("focus", function () {
        console.log("user_pw1-p focus");
        var e = WEB_MEMBER_EMIL_PATTERN;
        if (3 > $("#join_user_id-p").val().length) {
          var i =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.min_email +
            "</span></li></ul>";
          return jQuery(a).html(i).show(), $("#join_user_id-p").focus(), void 0;
        }
        if (1 == e.test($("#join_user_id-p").val())) {
          var i =
            '<ul class="input-notice"><li><span class="join-error-msg">ë©ì¼ ì£¼ìì ì¬ì©í  ì ìë í¹ìë¬¸ìê° í¬í¨ëì´ ììµëë¤.</span></li></ul>';
          return jQuery(a).html(i), jQuery("#join_user_id-p").focus(), void 0;
        }
        if ("" == $("#join_email_host-p").val()) {
          var i =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.not_host +
            "</span></li></ul>";
          return (
            jQuery(a).html(i).show(), $("#join_email_host-p").focus(), void 0
          );
        }
        if (1 != l()) {
          var i =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.input_email +
            "</span></li></ul>";
          return jQuery(a).html(i).show(), $("#join_user_id-p").focus(), void 0;
        }
        c(), jQuery(a).html(t);
      }),
      jQuery("#user_pw2-p").unbind("focus"),
      jQuery("#user_pw2-p").bind("focus", function () {
        console.log("user_pw2 focus"), $(this).val();
        var e = $("#user_pw1-p").val(),
          i = WEB_MEMBER_EMIL_PATTERN;
        if (3 > $("#join_user_id-p").val().length) {
          var n =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.min_email +
            "</span></li></ul>";
          return jQuery(a).html(n).show(), $("#join_user_id-p").focus(), void 0;
        }
        if (1 == i.test($("#join_user_id-p").val())) {
          var n =
            '<ul class="input-notice"><li><span class="join-error-msg">ë©ì¼ ì£¼ìì ì¬ì©í  ì ìë í¹ìë¬¸ìê° í¬í¨ëì´ ììµëë¤.</span></li></ul>';
          return jQuery(a).html(n), jQuery("#join_user_id-p").focus(), void 0;
        }
        if ("" == $("#join_email_host-p").val()) {
          var n =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.not_host +
            "</span></li></ul>";
          return (
            jQuery(a).html(n).show(), $("#join_email_host-p").focus(), void 0
          );
        }
        if ("" == e) {
          var n =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.input_pass +
            "</span></li></ul>";
          return jQuery(a).html(n).show(), $("#user_pw1-p").focus(), void 0;
        }
        if (1 != l()) {
          var n =
            '<ul class="input-notice"><li><span class="join-error-msg">' +
            WEB_MEMBER.MSG.input_email +
            "</span></li></ul>";
          return jQuery(a).html(n).show(), $("#join_user_id-p").focus(), void 0;
        }
        c(), jQuery(a).html(t);
      });
  }),
  (WEB_MEMBER.checkLoginEvent = function (e, t, a) {
    console.log("FC_APP_FN.checkLoginEven"), console.debug(e), console.debug(a);
    var i = !1,
      n = window.location.host;
    console.log("host:" + n);
    var s = null,
      o = 0;
    1 == isDefined(e.event_list) && ((s = e.event_list), (o = s.length)),
      console.log("eventList"),
      console.debug(s);
    var r = function (a) {
        if (o > a) {
          var n = s[a];
          l(n, a, r);
        } else if (((i = !0), "function" == typeof t))
          return console.log("callbackFun~~~"), t(e), void 0;
      },
      l = function (t, a, i) {
        var n = t.modal;
        if (0 == isDefined(n)) return !1;
        if (
          "Y" != gCookie.get(n) &&
          1 == t.status &&
          (console.log("open!!v"), "function" == typeof TEMPLATE_MODAL[n])
        ) {
          var s = TEMPLATE_MODAL[n](e);
          return (
            jQuery("#fc-web-modal-first-div").html(s),
            jQuery("#" + n).modal("show"),
            1 == IsBrowserChrome_FC() &&
              jQuery("body").css({ "padding-right": "17px" }),
            $("#" + n).on("hidden.bs.modal", function () {
              return (
                jQuery("body").css({ "padding-right": "0px" }),
                "function" == typeof i ? (i(a + 1), void 0) : void 0
              );
            }),
            !0
          );
        }
        return !1;
      };
    if (!(null != s && s.length > 0))
      return (
        "function" == typeof t && (console.log("callbackFun~~~"), t(e)), void 0
      );
    var c = 0,
      d = null,
      u = !1;
    for (var _ in s) {
      if (((d = s[_]), "NOTICE_ALERT" == d.modal)) {
        alert(d.name, "", t);
        break;
      }
      if (((u = l(d, c, r)), 1 == u)) break;
      c++;
    }
    return 0 == u
      ? ("function" == typeof t && (console.log("callbackFun~~~"), t(e)),
        void 0)
      : void 0;
  }),
  (WEB_MEMBER.onclickSnsJoin = function (e) {
    console.log("WEB_MEMBER.onclickSnsJoin");
    var t = jQuery(e).data("type");
    if (
      (console.log("snsType::" + t),
      jQuery(".modal.in").modal("hide"),
      "naver" == t)
    ) {
      var a = "/www/oauth/open_naver_web/";
      PopupCenter(a, "Filecast_oAuth", 600, 600);
    } else if ("kakao" == t) {
      var a = "/www/oauth/open_kakao_web/";
      PopupCenter(a, "Filecast_oAuth", 600, 600);
    } else if ("facebook" == t) {
      var a = "/www/oauth/open_facebook_web/";
      PopupCenter(a, "Filecast_oAuth", 600, 600);
    } else GO_MENU("signup", 1);
  });
var WEB_MOVIES = {};
(WEB_MOVIES.DATA = null),
  (WEB_MOVIES.start = function (e, t, a) {
    console.log("WEB_MOVIES.start"),
      (APP = e),
      console.debug(t),
      console.debug(a),
      (WEB_MOVIES.DATA = t),
      WEB_MOVIES.loadData(APP, WEB_MOVIES.DATA);
  }),
  (WEB_MOVIES.loadData = function (e, t) {
    console.log("WEB_MOVIES.loadPage"), console.debug(e);
    var a = "KOR";
    1 == isDefined(t.cate1) && (a = t.cate1);
    var i = {
      cate1: a,
      page: 1,
      total_page: jQuery("#fc-movies-paging").data("total_page"),
    };
    WEB_MOVIES.setBindPage(e), WEB_MOVIES.setMoviesPaging(i);
  }),
  (WEB_MOVIES.setBindPage = function () {
    jQuery(".menu2.left-menu.movie").addClass("active");
  }),
  (WEB_MOVIES.getPageData = function (e, t) {
    console.log("getPageData"), console.debug(e);
    var a = t;
    0 == isDefined(a) && (a = new FC_APP());
    var i = function (t) {
        console.log("successHttpFun"), console.debug(t);
        var i = {
          list: t.send_data.bbs.list,
          limit: parseInt(t.send_data.bbs.limit),
          page: parseInt(t.send_data.bbs.page),
          total_page: parseInt(t.send_data.bbs.total_page),
          total_count: parseInt(t.send_data.bbs.total_count),
          cate: e.cate1,
        };
        console.debug(i);
        for (var n = [], s = 0; i.list.length > s; s++)
          n.push(TEMPLATE_FUN.latestMovieContentsHtml(i.list[s]));
        jQuery("#fc-web-movies-main-list-ul").html(n.join("")),
          i.total_count > 0 &&
            jQuery(".fc-web-movies-count-span").text(
              fc_number_format(i.total_count)
            ),
          utility.ui.bodyTop(),
          (e.cate1 = i.cate),
          (e.page = i.page),
          (e.total_page = i.total_page),
          jQuery("#fc-movies-paging").data(e),
          1 == i.page &&
            (WEB_MOVIES.setMoviesPaging(e, a),
            jQuery(".movie-top-cate-menu-btn").removeClass("active"),
            jQuery(".menu-" + e.cate1).addClass("active"));
      },
      n = {
        server: a.DEFINE.SERVER_PROTOCOL,
        uri: a.PROTOCOL.URL.MOVIES.M_LIST,
        success: i,
        error_type: !0,
        loading_bar: !1,
        params: e,
      };
    a.PROTOCOL.ajaxCall(n, a);
  }),
  (WEB_MOVIES.setMoviesPaging = function (e, t) {
    console.log("setMoviesPaging"),
      console.debug(e),
      jQuery("#fc-movies-paging").empty(),
      jQuery("#fc-movies-paging").html(
        '<ul id="pagination-contents" class="pagination-sm">'
      );
    var a = 15;
    if (1 > e.total_page) {
      var a = 1;
      return jQuery("#fc-movies-paging").empty(), void 0;
    }
    var i = function (a, i) {
      (e.page = i), WEB_MOVIES.getPageData(e, t);
    };
    jQuery("#pagination-contents").twbsPagination({
      startPage: e.page,
      onPageClick: i,
      visiblePages: a,
      totalPages: e.total_page,
    });
  }),
  (WEB_MOVIES.onclickMoviesCate = function (e) {
    var t = { cate1: jQuery(e).data("cate"), page: 1 };
    WEB_MOVIES.getPageData(t, null);
  });
var WEB_MYPAGE = {};
(WEB_MYPAGE.DATA = {
  content_type: "JSON",
  defaultUri: "/200/1/1/",
  isDefault: !1,
  pagination: {},
  menu: [
    "purchase",
    "like",
    "notice",
    "request",
    "charge_log",
    "pwd_change",
    "point_log",
    "coupon_log",
    "mileage_log",
    "seller_request",
    "leave",
  ],
}),
  (WEB_MYPAGE.start = function (e, t, a, i) {
    APP = e;
    for (var n = WEB_MYPAGE.DATA.menu, s = 0; n.length > s; s++)
      jQuery("#" + n[s]).removeClass("active");
    if ("/purchase" == a.uri)
      jQuery("#purchase").addClass("active"),
        WEB_MYPAGE.starEffect(),
        WEB_MYPAGE.purchaseList(1);
    else if ("/like" == a.uri)
      jQuery("#like").addClass("active"), WEB_MYPAGE.likeList(1);
    else if ("/notice" == a.uri)
      jQuery("#notice").addClass("active"), WEB_MYPAGE.noticeList(1);
    else if ("/?notice_idx" == a.uri) {
      jQuery("#notice").addClass("active");
      var o = i["!/?notice_idx"],
        r = i.page;
      WEB_MYPAGE.noticeView(o, r);
    } else if ("/?notice_page" == a.uri) {
      jQuery("#notice").addClass("active");
      var r = i["!/?notice_page"];
      WEB_MYPAGE.noticeList(r);
    } else if ("/?notice_write" == a.uri) {
      jQuery("#notice").addClass("active");
      var o = i["!/?notice_write"];
      WEB_MYPAGE.noticeWriteForm(o);
    } else if ("/request" == a.uri)
      jQuery("#request").addClass("active"), WEB_MYPAGE.reqList(1);
    else if ("/charge_log" == a.uri)
      jQuery("#charge_log").addClass("active"), WEB_MYPAGE.chargePageList(1);
    else if ("/point_log" == a.uri)
      jQuery("#point_log").addClass("active"), WEB_MYPAGE.pointPageList(1);
    else if ("/coupon_log" == a.uri)
      jQuery("#coupon_log").addClass("active"), WEB_MYPAGE.couponPageList(1);
    else if ("/mileage_log" == a.uri)
      jQuery("#mileage_log").addClass("active"), WEB_MYPAGE.mileagePageList(1);
    else if ("/pwd_change" == a.uri)
      jQuery("#pwd_change").addClass("active"), WEB_MYPAGE.pwdChangePageList();
    else if ("/seller_request" == a.uri)
      jQuery("#seller_request").addClass("active"),
        WEB_MYPAGE.sellerRequestPageList();
    else if ("/leave" == a.uri)
      jQuery("#leave").addClass("active"), WEB_MYPAGE.leavePage();
    else if ("/?req_idx" == a.uri) {
      jQuery("#request").addClass("active");
      var o = i["!/?req_idx"];
      WEB_MYPAGE.reqView(o);
    } else if ("/?req_page" == a.uri) {
      jQuery("#request").addClass("active");
      var r = i["!/?req_page"];
      WEB_MYPAGE.reqList(r);
    } else
      "/?req_write" == a.uri
        ? (jQuery("#request").addClass("active"), WEB_MYPAGE.reqRegForm(""))
        : "index" == t.name
        ? WEB_MYPAGE.starEffect()
        : "purchase" == t.name
        ? (jQuery("#purchase").addClass("active"), WEB_MYPAGE.starEffect())
        : "like" == t.name
        ? jQuery("#like").addClass("active")
        : "notice" == t.name || "noticeView" == t.name
        ? jQuery("#notice").addClass("active")
        : "request" == t.name
        ? jQuery("#request").addClass("active")
        : "charge_log" == t.name
        ? jQuery("#charge_log").addClass("active")
        : "seller_request" == t.name &&
          jQuery("#seller_request").addClass("active");
    "Y" == gCookie.get("seller_join") &&
      (WEB_SELLER.guideLayer("seller_guide_1"),
      gCookie.set("seller_join", "N", { path: "/", expires_day: 1 }));
  }),
  (WEB_MYPAGE.starEffect = function () {
    var e = function (e, t) {
      for (var a = 1; 5 >= a; a++) $("#star" + a + t).removeClass("on");
      var n = "";
      for (i = 1; e >= i; i++)
        (function (e) {
          1 == e
            ? (n = "ì ë§ë³ë¡ìì")
            : 2 == e
            ? (n = "ê·¸ì ê·¸ëì")
            : 3 == e
            ? (n = "ë³´íµì´ìì")
            : 4 == e
            ? (n = "ì¢ìì")
            : 5 == e && (n = "ì ë§ì¢ìì"),
            $("#star" + e + t).addClass("on"),
            $("#txt_" + t).text(n),
            $("#cnt_" + t).text(e);
        })(i);
    };
    $(".star_score").mouseout(function (t) {
      var a = t.target.id.substr(5),
        i = $("#gift_" + a).val();
      return "" != i
        ? (e(i, a), void 0)
        : ($(".case").removeClass("on"),
          $("#txt_" + a).empty(),
          $("#cnt_" + a).text("0"),
          void 0);
    }),
      $(".case").click(function (t) {
        var a = t.target.id.substr(4, 1),
          i = t.target.id.substr(5);
        $("#gift_" + i).val(a), e(a, i);
      }),
      $(".case").mouseover(function (t) {
        var a = t.target.id.substr(4, 1),
          i = t.target.id.substr(5);
        e(a, i);
      });
  }),
  (WEB_MYPAGE.indexList = function (e) {
    (getUrl = APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.MYPAGE.INDEX),
      $.get(getUrl, { page: e, type: "ajax" })
        .done(function (e) {
          jQuery("#list").html(e), WEB_MYPAGE.starEffect();
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_MYPAGE.purchaseList = function (e) {
    (getUrl =
      APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.MYPAGE.PURCHASE_LIST),
      $.get(getUrl, { page: e, type: "ajax" })
        .done(function (e) {
          jQuery("#list").html(e), WEB_MYPAGE.starEffect();
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_MYPAGE.qnaAjaxList = function (e) {
    var t = jQuery("#display_page").val(),
      a = { page: e, display_page: t },
      i = function (e) {
        WEB_MYPAGE.qnaSetData(e.qna), jQuery("#qna_paging").html(e.qna_paging);
      },
      n = APP.PROTOCOL.URL.MYPAGE.QNA_AJAX_LIST,
      s = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: n,
        success: i,
        error_type: !0,
        loading_bar: !1,
        params: a,
      };
    APP.PROTOCOL.ajaxCall(s, APP);
  }),
  (WEB_MYPAGE.mileageDateSelect = function (e, t) {
    var a = jQuery("#custom_date").val();
    jQuery(".btn_date").removeClass("active"),
      "" == a || a != e
        ? (jQuery("#custom_date").val(e), jQuery("#" + t).addClass("active"))
        : jQuery("#custom_date").val(""),
      WEB_MYPAGE.mileageAjaxList(1);
  }),
  (WEB_MYPAGE.mileageAjaxList = function (e) {
    var t =
        void 0 != jQuery("select[name=s_y]").val()
          ? jQuery("select[name=s_y]").val()
          : "",
      a =
        void 0 != jQuery("select[name=s_m]").val()
          ? jQuery("select[name=s_m]").val()
          : "",
      i =
        void 0 != jQuery("select[name=s_d]").val()
          ? jQuery("select[name=s_d]").val()
          : "",
      n =
        void 0 != jQuery("select[name=e_y]").val()
          ? jQuery("select[name=e_y]").val()
          : "",
      s =
        void 0 != jQuery("select[name=e_m]").val()
          ? jQuery("select[name=e_m]").val()
          : "",
      o =
        void 0 != jQuery("select[name=e_d]").val()
          ? jQuery("select[name=e_d]").val()
          : "",
      r =
        void 0 != jQuery("#custom_date").val()
          ? jQuery("#custom_date").val()
          : "",
      l = {
        page: e,
        s_y: t,
        s_m: a,
        s_d: i,
        e_y: n,
        e_m: s,
        e_d: o,
        custom_date: r,
      },
      c = function (t) {
        WEB_MYPAGE.mileageSetData(t.mileage),
          jQuery("#paging").html(t.paging),
          jQuery("#dateSelectBox").html(t.dateSelectBox),
          jQuery("#page").val(e),
          "" == r && jQuery(".btn_date").removeClass("active");
      },
      d = APP.PROTOCOL.URL.MYPAGE.MILEAGE_AJAX_LIST,
      u = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: d,
        success: c,
        error_type: !0,
        loading_bar: !1,
        params: l,
      };
    APP.PROTOCOL.ajaxCall(u, APP);
  }),
  (WEB_MYPAGE.purchaseAjaxList = function (e) {
    var t = jQuery("#display_page").val(),
      a = { page: e, display_page: t },
      i = function (t) {
        WEB_MYPAGE.purchaseSetData(t.purchase),
          WEB_MYPAGE.starEffect(),
          jQuery("#pur_paging").html(t.pur_paging),
          jQuery("#page").val(e);
      },
      n = APP.PROTOCOL.URL.MYPAGE.PURCHASE_AJAX_LIST,
      s = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: n,
        success: i,
        error_type: !0,
        loading_bar: !1,
        params: a,
      };
    APP.PROTOCOL.ajaxCall(s, APP);
  }),
  (WEB_MYPAGE.qnaSetData = function (e) {
    for (
      var t = function (e) {
          var t = "";
          return (
            (t += "<li>"),
            (t += '<div class="l1">' + e.display_regdate + "</div>"),
            (t +=
              '<div class="l2" onclick="GO_MENU(\'qna\');"><a class="tit hand">' +
              e.display_content +
              "</a></div>"),
            (t +=
              '<div class="l3"><span class="' +
              e.txt_class +
              '">' +
              e.txt_state +
              "</span></div>"),
            (t += "</li>")
          );
        },
        a = [],
        i = 0;
      e.length > i;
      i++
    ) {
      var n = t(e[i]);
      a.push(n);
    }
    jQuery("#qna_list").html(a.join(""));
  }),
  (WEB_MYPAGE.mileageSetData = function (e) {
    for (
      var t = function (e) {
          e.num;
          var t = "";
          return (
            (t += "<li>"),
            (t += '<div class="l1"><span>' + e.regdate + "</span></div>"),
            (t += '<div class="l2"><span>ì ë¦½</div>'),
            (t +=
              '<div class="l3"><span class="tit">' + e.info + "</span></div>"),
            (t += '<div class="l4"><span><b>' + e.cash + "</b>M</span></div>"),
            (t += "</li>")
          );
        },
        a = [],
        i = 0;
      e.length > i;
      i++
    ) {
      var n = t(e[i]);
      a.push(n);
    }
    0 == e.length &&
      a.push('<li class="txt_center">ë§ì¼ë¦¬ì§ ì ë¦½ë´ì­ì´ ììµëë¤.</li>'),
      jQuery("#list").html(a.join(""));
  }),
  (WEB_MYPAGE.purchaseSetData = function (e) {
    for (
      var t = function (e) {
          e.num;
          var t = "";
          return (
            (t += "<li>"),
            (t +=
              '<div class="l1"><input type="checkbox" id="chk" name="chk[]" value="' +
              e.idx +
              '"/><span>' +
              e.link_idx +
              "</span></div>"),
            (t +=
              1 == e.credit_check
                ? '<div class="l2"><span class="star_score type' +
                  e.grade_point +
                  '"></span></div>'
                : '<div class="l2"><a class="hand btn app" onclick="WEB_MYPAGE.commentAreaToggle(\'coment_area_' +
                  e.idx +
                  "');\">íê°íê¸°</a></div>"),
            (t +=
              '<div class="l3"><span data-type="REDOWN_CONTENTS" onclick="FILE_FN.checkFileDownloader(\'' +
              e.link_idx +
              '\',this)"><a class="hand btn down">ë¤ì´ë¡ë</a></span></div>'),
            (t +=
              '<div class="l4"><span onclick="FC_APP_FN.openContentsView(\'' +
              e.link_idx +
              '\')"><a class="tit hand">' +
              e.title +
              "</a></span></div>"),
            (t +=
              '<div class="l5"><span class="txt_black">' +
              e.display_size +
              "</span></div>"),
            (t += '<div class="l6"><span>' + e.cate_name + "</span></div>"),
            (t +=
              '<div class="l7"><span>' + e.display_method + "</span></div>"),
            (t +=
              '<div class="l8"><span class="txt_sblue">' +
              e.expire_days +
              "ìê°</span></div>"),
            (t +=
              '<div class="l9"><span class="txt_black">' +
              e.sellernick +
              "</span></div>"),
            (t += "</li>"),
            1 != e.credit_check &&
              ((t +=
                '<li class="appraisal" id="coment_area_' +
                e.idx +
                '" style="display:none;">'),
              (t += '<span class="bg"></span>'),
              (t += '<div class="app_input">'),
              (t += '<dl class="star_wrap">'),
              (t += "<dt>ì½íì¸  ë³ì </dt>"),
              (t += '<dd class="star_score style1" id="score' + e.idx + '">'),
              (t += '<span id="star1' + e.idx + '" class="case on"></span>'),
              (t += '<span id="star2' + e.idx + '" class="case on"></span>'),
              (t += '<span id="star3' + e.idx + '" class="case on"></span>'),
              (t += '<span id="star4' + e.idx + '" class="case on"></span>'),
              (t += '<span id="star5' + e.idx + '" class="case on"></span>'),
              (t +=
                '<em><span><strong class="cnt" id="cnt_' +
                e.idx +
                '"?>5</strong>/5</span> <strong class="txt" id="txt_' +
                e.idx +
                '">ì ë§ì¢ìì</strong></em>'),
              (t += "</dd></dl>"),
              (t +=
                '<input type="hidden" name="gift" id="gift_' +
                e.idx +
                '" value=5>'),
              (t += '<div class="input_inner">'),
              (t +=
                '<textarea id="wr_content_' +
                e.idx +
                '" placeholder="íê°ê¸ì 5ì ì´ì ìì± ì ë±ë¡ ê°ë¥í©ëë¤.&#10;ë³ì ë§ ì íí  ê²½ì°, ê¸°ë³¸ íê°ê¸ì´ ë±ë¡ë©ëë¤.">'),
              (t += "</textarea></div>"),
              (t +=
                '<a href="#n" class="btn_register" onclick="WEB_MYPAGE.commentReg(\'' +
                e.idx +
                "','" +
                e.userid +
                "','ajax');\">ë±ë¡</a>"),
              (t += "</div></li>")),
            t
          );
        },
        a = [],
        i = 0;
      e.length > i;
      i++
    ) {
      var n = t(e[i]);
      a.push(n);
    }
    jQuery("#pur_list").html(a.join(""));
  }),
  (WEB_MYPAGE.cateChange = function (e) {
    var t = "";
    if ("" == e) t = '<option value="">ìë¶ë¥</option>';
    else {
      var a = new FC_CATEGORY(),
        i = a.getCategorySubList(e);
      t += '<option value="">ì ì²´</option>';
      for (var n in i)
        t += '<option value="' + i[n].key + '">' + i[n].name + "</option>";
    }
    jQuery("#cate2").html(t);
  }),
  (WEB_MYPAGE.pageData = function (e, t) {
    jQuery("#paging").empty();
    var a = e,
      i = 10,
      n = jQuery("#total_page").val(),
      s = parseInt((a - 1) / i) * i + 1,
      o = s + i - 1;
    o >= n && (o = n);
    var r = "";
    if (
      ((r += "<ul>"),
      s > 1 &&
        (r +=
          '<li><a class="prev hand" onclick="WEB_MYPAGE.' +
          t +
          "(" +
          (parseInt(a) - 1) +
          ');">&lt; ì´ì íì´ì§</a></li>'),
      n > 1)
    )
      for (var l = s; o >= l; l++)
        r +=
          a != l
            ? '<li onclick="WEB_MYPAGE.' +
              t +
              "(" +
              l +
              ');"><a class="hand">' +
              l +
              "</a></li>"
            : '<li class="active"><a>' + l + "</a></li>";
    n > o &&
      (r +=
        '<li><a class="next hand" onclick="WEB_MYPAGE.' +
        t +
        "(" +
        (parseInt(a) + 1) +
        ');">ë¤ìíì´ì§ &gt;</a></li>'),
      (r += "</ul>"),
      jQuery("#paging").html(r);
  }),
  (WEB_MYPAGE.commentReg = function (e, t, a) {
    var i = jQuery("#wr_content_" + e).val(),
      n = jQuery("#gift_" + e).val();
    if ("" == n) return alert("ë³ì ì ìë ¥í´ ì£¼ì¸ì."), void 0;
    if (10 > text_String_real_length(i))
      return (
        alert(
          "íê¸ 5ìì´ì ìë ¥í´ì£¼ì¸ì.\n\në¶ì±ì¤í íê°ë ëµë³ì í¬ì¸í¸ê° ëª°ìë  ì ììì ìë ¤ëë¦½ëë¤."
        ),
        void 0
      );
    if (
      !reString_checking(i, 3) ||
      confirm(
        "ë¶ì±ì¤í íê°ë±ë¡ì 7ì¼ê° íê°ê¶íì´ ì ì§ë©ëë¤.\níì¬ íê°ê¸ì ë±ë¡íìê² ìµëê¹?"
      )
    ) {
      var s = { idx: e, content: i, gift: n },
        o = function (e) {
          if ("err_1" == e.result)
            alert("ë±ë¡ ëì§ ìììµëë¤. ë¤ì íë² ìëí´ ì£¼ì¸ì.");
          else if ("err_2" == e.result) alert("ì´ë¯¸ íê°íì  ë´ì­ìëë¤.");
          else if ("err_3" == e.result)
            alert("íìëì ì ì¬ë¡ ì¸í´ ëê¸ì ë±ë¡íì¤ ì ììµëë¤." + e.msg);
          else if ("err_4" == e.result)
            alert("ëê¸ ë´ì©ì ê¸ì¹ì´ê° í¬í¨ëì´ ììµëë¤. ëê¸ì ë±ë¡ëì§ ìììµëë¤.");
          else if ("success" == e.result) {
            var t = jQuery("#page").val();
            "ajax" == a
              ? WEB_MYPAGE.purchaseAjaxList(t)
              : WEB_MYPAGE.purchaseList(t);
          }
        },
        r = APP.PROTOCOL.URL.MYPAGE.COMMNET_INPUT,
        l = {
          server: APP.DEFINE.SERVER_PROTOCOL,
          uri: r,
          success: o,
          error_type: !0,
          loading_bar: !1,
          params: s,
        };
      APP.PROTOCOL.ajaxCall(l, APP);
    }
  }),
  (WEB_MYPAGE.commentAreaToggle = function (e) {
    jQuery("#" + e).toggle();
  }),
  (WEB_MYPAGE.pruchaseDelete = function (e) {
    if (is_checked()) {
      var t = [];
      $("input[name='chk[]']:checked").each(function () {
        t.push($(this).val());
      });
      var a = { chk: t },
        i = function () {
          alert("ì­ì  ëììµëë¤.");
          var t = jQuery("#page").val();
          "ajax" == e
            ? WEB_MYPAGE.purchaseAjaxList(t)
            : WEB_MYPAGE.purchaseList(t);
        },
        n = APP.PROTOCOL.URL.MYPAGE.PURCHASE_DELETE,
        s = {
          server: APP.DEFINE.SERVER_PROTOCOL,
          uri: n,
          success: i,
          error_type: !0,
          loading_bar: !1,
          params: a,
        };
      APP.PROTOCOL.ajaxCall(s, APP);
    } else alert("ì íë ìë£ê° ììµëë¤.");
  }),
  (WEB_MYPAGE.likeDelete = function () {
    if (is_checked()) {
      var e = [];
      $("input[name='chk[]']:checked").each(function () {
        e.push($(this).val());
      });
      var t = { chk: e },
        a = function () {
          alert("ì­ì  ëììµëë¤."), WEB_MYPAGE.likeList(1);
        },
        i = APP.PROTOCOL.URL.MYPAGE.LIKE_DELETE,
        n = {
          server: APP.DEFINE.SERVER_PROTOCOL,
          uri: i,
          success: a,
          error_type: !0,
          loading_bar: !1,
          params: t,
        };
      APP.PROTOCOL.ajaxCall(n, APP);
    } else alert("ì íë ìë£ê° ììµëë¤.");
  }),
  (WEB_MYPAGE.likeList = function (e) {
    var t =
        void 0 != jQuery("select[name=cate1]").val()
          ? jQuery("select[name=cate1]").val()
          : "",
      a =
        void 0 != jQuery("select[name=cate2]").val()
          ? jQuery("select[name=cate2]").val()
          : "";
    (getUrl = APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.MYPAGE.LIKE_LIST),
      $.get(getUrl, { page: e, type: "ajax", cate1: t, cate2: a })
        .done(function (e) {
          jQuery("#list").html(e),
            "" != t &&
              (jQuery("#cate1").val(t),
              WEB_MYPAGE.cateChange(t),
              "" != a &&
                jQuery("select[name=cate2] > option[value=" + a + "]").attr(
                  "selected",
                  "true"
                ));
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_MYPAGE.noticeList = function (e) {
    var t = void 0 != jQuery("#column").val() ? jQuery("#column").val() : "",
      a = void 0 != jQuery("#word").val() ? jQuery("#word").val() : "";
    (getUrl = APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.MYPAGE.NOTICE_LIST),
      $.get(getUrl, { page: e, type: "ajax", word: a, column: t })
        .done(function (e) {
          jQuery("#list").html(e),
            jQuery("#word").val(a),
            "" != t &&
              jQuery("select[name=column] > option[value=" + t + "]").attr(
                "selected",
                "true"
              );
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_MYPAGE.noticeView = function (e, t) {
    (getUrl =
      APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.MYPAGE.NOTICE_VIEW_LIST),
      $.get(getUrl, { page: t, idx: e, type: "ajax" })
        .done(function (e) {
          jQuery("#list").html(e);
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_MYPAGE.noticeMoveList = function (e) {
    var t = jQuery("#memberLoginOk").val();
    location.href =
      null != t && 0 != t
        ? APP.DEFINE.CI_ROOT + "/mypage/#!/?notice_page=" + e
        : APP.DEFINE.CI_ROOT + "/mypage/notice?page=" + e;
  }),
  (WEB_MYPAGE.noticeMoveWrite = function (e) {
    location.href = APP.DEFINE.CI_ROOT + "/mypage/#!/?notice_write=" + e;
  }),
  (WEB_MYPAGE.noticeWriteForm = function (e) {
    (getUrl =
      APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.MYPAGE.NOTICE_WRITE_FORM),
      $.get(getUrl, { idx: e, type: "ajax" })
        .done(function (e) {
          jQuery("#list").html(e);
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_MYPAGE.noticeReg = function () {
    var e = jQuery("#title").val(),
      t = jQuery("#is_ad").val(),
      a = jQuery("#content").val();
    if (2 > e.length)
      return alert("ì ëª©ì ìë ¥ í´ì£¼ì¸ì."), jQuery("#title").focus(), !1;
    if (5 > a.length)
      return alert("ë´ì©ì ìë ¥ í´ì£¼ì¸ì."), jQuery("#content").focus(), !1;
    var i = jQuery("#idx").val(),
      n = { idx: i, title: e, content: a, is_ad: t, code: "notice" },
      s = function () {
        alert("ë±ë¡ ëììµëë¤."),
          (location.href = APP.DEFINE.CI_ROOT + "/mypage/#!/notice");
      },
      o = APP.PROTOCOL.URL.CS.NOTICE_WRITE,
      r = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: o,
        success: s,
        error_type: !0,
        loading_bar: !1,
        params: n,
      };
    return APP.PROTOCOL.ajaxCall(r, APP), !1;
  }),
  (WEB_MYPAGE.noticeDelete = function (e) {
    if (is_checked()) {
      var t = [];
      $("input[name='chk[]']:checked").each(function () {
        t.push($(this).val());
      });
      var a = { chk: t, type: e },
        i = function (t) {
          t.result > 0 ? alert("ì­ì  ëììµëë¤.") : alert("ë¤ìíë² ìëí´ ì£¼ì¸ì."),
            "notice" == e
              ? WEB_MYPAGE.noticeList(1)
              : "seller" == e && WEB_SELLER.noticeList(1);
        },
        n = APP.PROTOCOL.URL.CS.NOTICE_DELETE,
        s = {
          server: APP.DEFINE.SERVER_PROTOCOL,
          uri: n,
          success: i,
          error_type: !0,
          loading_bar: !1,
          params: a,
        };
      APP.PROTOCOL.ajaxCall(s, APP);
    } else alert("ì íë ìë£ê° ììµëë¤.");
  }),
  (WEB_MYPAGE.noticeDel = function (e) {
    var t = { chk: e, type: "seller" },
      a = function (e) {
        e.result > 0 ? alert("ì­ì  ëììµëë¤.") : alert("ì­ì  ëì§ ìììµëë¤."),
          WEB_MYPAGE.noticeList(1);
      },
      i = APP.PROTOCOL.URL.CS.NOTICE_DELETE,
      n = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: i,
        success: a,
        error_type: !0,
        loading_bar: !1,
        params: t,
      };
    APP.PROTOCOL.ajaxCall(n, APP);
  }),
  (WEB_MYPAGE.reqList = function (e) {
    var t = jQuery("#cate_code").val(),
      a = jQuery("#s_word").val(),
      i = jQuery("#s_column").val();
    (getUrl =
      APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.MYPAGE.REQUEST_LIST),
      $.get(getUrl, {
        page: e,
        type: "ajax",
        cate_code: t,
        s_word: a,
        s_column: i,
      })
        .done(function (e) {
          jQuery("#list").html(e),
            jQuery("input:text[name=s_word]").val(a),
            jQuery("select[name=s_column] > option[value=" + i + "]").attr(
              "selected",
              "true"
            );
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_MYPAGE.reqRegForm = function (e) {
    (getUrl =
      APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.MYPAGE.REQUEST_WRITE_FORM),
      $.get(getUrl, { idx: e, type: "ajax" })
        .done(function (e) {
          jQuery("#list").html(e);
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_MYPAGE.reqReg = function () {
    var e = jQuery("#title").val(),
      t = jQuery("#code").val(),
      a = jQuery("#contents").val();
    if (2 > e.length)
      return alert("ë´ì©ì ìë ¥ í´ì£¼ì¸ì."), jQuery("#title").focus(), !1;
    if ("" == t)
      return alert("ì¹´íê³ ë¦¬ë¥¼ ì íí´ ì£¼ì¸ì."), jQuery("#code").focus(), !1;
    if (5 > a.length)
      return alert("ë´ì©ì ìë ¥ í´ì£¼ì¸ì."), jQuery("#contents").focus(), !1;
    var i = jQuery("#idx").val(),
      n = { idx: i, title: e, code: t, contents: a },
      s = function () {
        alert("ìë£ ëììµëë¤."), GO_MENU("my_req");
      },
      o = APP.PROTOCOL.URL.REQ.REQUEST_WRITE,
      r = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: o,
        success: s,
        error_type: !0,
        loading_bar: !1,
        params: n,
      };
    return APP.PROTOCOL.ajaxCall(r, APP), !1;
  }),
  (WEB_MYPAGE.reqMoveList = function (e) {
    location.href = APP.DEFINE.CI_ROOT + "/mypage/#!/?req_page=" + e;
  }),
  (WEB_MYPAGE.reqMoveReg = function () {
    location.href = APP.DEFINE.CI_ROOT + "/mypage/#!/?req_write";
  }),
  (WEB_MYPAGE.reqView = function (e) {
    (getUrl =
      APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.MYPAGE.REQUEST_VIEW),
      $.get(getUrl, { idx: e, type: "ajax" })
        .done(function (e) {
          jQuery("#list").html(e);
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_MYPAGE.reqWrite = function (e) {
    (getUrl =
      APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.MYPAGE.REQUEST_MODIFY_FORM),
      $.get(getUrl, { idx: e, type: "ajax" })
        .done(function (e) {
          jQuery("#list").html(e);
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_MYPAGE.reqDelete = function (e) {
    var t = { idx: e },
      a = function (e) {
        1 == e.result ? alert("ì­ì  ëììµëë¤.") : alert("ì­ì  ëì§ ìììµëë¤."),
          WEB_MYPAGE.reqList(1);
      },
      i = APP.PROTOCOL.URL.MYPAGE.REQUEST_DELETE,
      n = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: i,
        success: a,
        error_type: !0,
        loading_bar: !1,
        params: t,
      };
    APP.PROTOCOL.ajaxCall(n, APP);
  }),
  (WEB_MYPAGE.cateSelect = function (e) {
    jQuery("#cate_code").val(e), WEB_MYPAGE.reqList(1);
  }),
  (WEB_MYPAGE.chargePageList = function (e) {
    var t =
        void 0 != jQuery("select[name=s_y]").val()
          ? jQuery("select[name=s_y]").val()
          : "",
      a =
        void 0 != jQuery("select[name=s_m]").val()
          ? jQuery("select[name=s_m]").val()
          : "",
      i =
        void 0 != jQuery("select[name=s_d]").val()
          ? jQuery("select[name=s_d]").val()
          : "",
      n =
        void 0 != jQuery("select[name=e_y]").val()
          ? jQuery("select[name=e_y]").val()
          : "",
      s =
        void 0 != jQuery("select[name=e_m]").val()
          ? jQuery("select[name=e_m]").val()
          : "",
      o =
        void 0 != jQuery("select[name=e_d]").val()
          ? jQuery("select[name=e_d]").val()
          : "",
      r =
        void 0 != jQuery("input:text[name=word]").val()
          ? jQuery("input:text[name=word]").val()
          : "";
    (getUrl =
      APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.MYPAGE.CHARGE_LOG_LIST),
      $.get(getUrl, {
        page: e,
        type: "ajax",
        s_y: t,
        s_m: a,
        s_d: i,
        e_y: n,
        e_m: s,
        e_d: o,
        word: r,
      })
        .done(function (e) {
          jQuery("#list").html(e), jQuery("input:text[name=word]").val(r);
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_MYPAGE.pointPageList = function (e) {
    var t =
        void 0 != jQuery("select[name=s_y]").val()
          ? jQuery("select[name=s_y]").val()
          : "",
      a =
        void 0 != jQuery("select[name=s_m]").val()
          ? jQuery("select[name=s_m]").val()
          : "",
      i =
        void 0 != jQuery("select[name=s_d]").val()
          ? jQuery("select[name=s_d]").val()
          : "",
      n =
        void 0 != jQuery("select[name=e_y]").val()
          ? jQuery("select[name=e_y]").val()
          : "",
      s =
        void 0 != jQuery("select[name=e_m]").val()
          ? jQuery("select[name=e_m]").val()
          : "",
      o =
        void 0 != jQuery("select[name=e_d]").val()
          ? jQuery("select[name=e_d]").val()
          : "",
      r =
        void 0 != jQuery("input:text[name=word]").val()
          ? jQuery("input:text[name=word]").val()
          : "";
    (getUrl =
      APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.MYPAGE.POINT_LOG_LIST),
      $.get(getUrl, {
        page: e,
        type: "ajax",
        s_y: t,
        s_m: a,
        s_d: i,
        e_y: n,
        e_m: s,
        e_d: o,
        word: r,
      })
        .done(function (e) {
          jQuery("#list").html(e), jQuery("input:text[name=word]").val(r);
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_MYPAGE.pointLogDelete = function () {
    if (is_checked()) {
      var e = [];
      $("input[name='chk[]']:checked").each(function () {
        e.push($(this).val());
      });
      var t = { chk: e },
        a = function () {
          alert("ì­ì  ëììµëë¤."), WEB_MYPAGE.pointPageList(1);
        },
        i = APP.PROTOCOL.URL.MYPAGE.POINT_LOG_DELETE,
        n = {
          server: APP.DEFINE.SERVER_PROTOCOL,
          uri: i,
          success: a,
          error_type: !0,
          loading_bar: !1,
          params: t,
        };
      APP.PROTOCOL.ajaxCall(n, APP);
    } else alert("ì íë ìë£ê° ììµëë¤.");
  }),
  (WEB_MYPAGE.mileagePageList = function (e) {
    var t =
        void 0 != jQuery("select[name=s_y]").val()
          ? jQuery("select[name=s_y]").val()
          : "",
      a =
        void 0 != jQuery("select[name=s_m]").val()
          ? jQuery("select[name=s_m]").val()
          : "",
      i =
        void 0 != jQuery("select[name=s_d]").val()
          ? jQuery("select[name=s_d]").val()
          : "",
      n =
        void 0 != jQuery("select[name=e_y]").val()
          ? jQuery("select[name=e_y]").val()
          : "",
      s =
        void 0 != jQuery("select[name=e_m]").val()
          ? jQuery("select[name=e_m]").val()
          : "",
      o =
        void 0 != jQuery("select[name=e_d]").val()
          ? jQuery("select[name=e_d]").val()
          : "",
      r =
        void 0 != jQuery("input:text[name=word]").val()
          ? jQuery("input:text[name=word]").val()
          : "";
    (getUrl =
      APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.MYPAGE.MILEAGE_LOG_LIST),
      $.get(getUrl, {
        page: e,
        type: "ajax",
        s_y: t,
        s_m: a,
        s_d: i,
        e_y: n,
        e_m: s,
        e_d: o,
        word: r,
      })
        .done(function (e) {
          jQuery("#list").html(e), jQuery("input:text[name=word]").val(r);
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_MYPAGE.couponPageList = function (e) {
    var t =
        void 0 != jQuery("select[name=s_y]").val()
          ? jQuery("select[name=s_y]").val()
          : "",
      a =
        void 0 != jQuery("select[name=s_m]").val()
          ? jQuery("select[name=s_m]").val()
          : "",
      i =
        void 0 != jQuery("select[name=s_d]").val()
          ? jQuery("select[name=s_d]").val()
          : "",
      n =
        void 0 != jQuery("select[name=e_y]").val()
          ? jQuery("select[name=e_y]").val()
          : "",
      s =
        void 0 != jQuery("select[name=e_m]").val()
          ? jQuery("select[name=e_m]").val()
          : "",
      o =
        void 0 != jQuery("select[name=e_d]").val()
          ? jQuery("select[name=e_d]").val()
          : "",
      r =
        void 0 != jQuery("input:text[name=word]").val()
          ? jQuery("input:text[name=word]").val()
          : "",
      l = void 0 != jQuery("#kind").val() ? jQuery("#kind").val() : "";
    (getUrl =
      APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.MYPAGE.COUPON_LOG_LIST),
      $.get(getUrl, {
        page: e,
        type: "ajax",
        s_y: t,
        s_m: a,
        s_d: i,
        e_y: n,
        e_m: s,
        e_d: o,
        word: r,
        kind: l,
      })
        .done(function (e) {
          jQuery("#list").html(e), jQuery("input:text[name=word]").val(r);
          var t = jQuery("#kind").val();
          jQuery("#btn_" + t).addClass("active");
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_MYPAGE.couponPageKind = function (e) {
    jQuery("#kind").val(e), WEB_MYPAGE.couponPageList(1);
  }),
  (WEB_MYPAGE.pwdChangePageList = function () {
    var e = new FC_APP();
    (getUrl = e.DEFINE.SERVER_PROTOCOL + e.PROTOCOL.URL.MYPAGE.PWD_CHANGE),
      $.get(getUrl, { type: "ajax" })
        .done(function (e) {
          jQuery("#list").html(e);
        })
        .fail(function (t, a) {
          e.PROTOCOL.ajaxError(t, a);
        });
  }),
  (WEB_MYPAGE.pwdChange = function () {
    var e = jQuery("#nowPwd"),
      t = jQuery("#chPwd1"),
      a = jQuery("#chPwd2"),
      i = new FC_APP();
    if (t.val() != a.val())
      return (
        alert("ë³ê²½íì¤ ë¹ë°ë²í¸ê° ìë¡ ë¤ë¦ëë¤."),
        t.val(""),
        a.val(""),
        t.focus(),
        void 0
      );
    if (e.val() == t.val())
      return (
        alert("íì¬ ë¹ë°ë²í¸ì ë³ê²½íì¤ ë¹ë°ë²í¸ê° ê°ìµëë¤."),
        t.val(""),
        a.val(""),
        t.focus(),
        void 0
      );
    if (4 > t.val().length || null != t.val().match(/[^a-zA-Z0-9]/))
      return (
        alert("ë¹ë°ë²í¸ë ìë¬¸/ì«ì 4~12 ê¸ìë¡ ìë ¥íì¸ì."),
        t.val(""),
        a.val(""),
        t.focus(),
        void 0
      );
    var n = { nowPwd: e.val(), chPwd: t.val() },
      s = function (e) {
        return "loginError" == e.result
          ? (alert("ë¡ê·¸ì¸ í ì´ì©í´ ì£¼ì¸ì."), void 0)
          : "pwdError" == e.result
          ? (alert("íì¬ ë¹ë°ë²í¸ê° ë¤ë¦ëë¤."), void 0)
          : 0 == e.result
          ? (alert("ìì ì´ ëì§ ìììµëë¤. ë¤ì íë² ìëí´ ì£¼ì¸ì."), void 0)
          : (alert("ë¹ë°ë²í¸ê° ìì  ëììµëë¤."),
            WEB_MYPAGE.pwdChangePageList(),
            void 0);
      },
      o = i.PROTOCOL.URL.MYPAGE.PWD_CHANGE_PROC;
    i.DEFINE.AJAX_HTTP_TYPE = "jsonp";
    var r = {
      server: i.DEFINE.SERVER_SSL_PROTOCOL,
      uri: o,
      success: s,
      error_type: !0,
      loading_bar: !1,
      params: n,
    };
    i.PROTOCOL.ajaxCall(r, i);
  }),
  (WEB_MYPAGE.sellerRequestPageList = function () {
    (getUrl =
      APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.MYPAGE.SELLER_REQUEST),
      $.get(getUrl, { type: "ajax" })
        .done(function (e) {
          jQuery("#list").html(e);
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_MYPAGE.nickOverlapCheck = function () {
    var e = jQuery("#nickname").val();
    if ("" == e)
      return alert("ëë¤ìì ìë ¥í´ ì£¼ì¸ì."), jQuery("#nickname").focus(), void 0;
    var t = { nickname: e },
      a = function (e) {
        var t = "";
        switch (e.result) {
          case 110:
            t = "ëë¤ìì ê³µë°±ìì´ íê¸, ìë¬¸, ì«ìë§ ìë ¥ ê°ë¥í©ëë¤.";
            break;
          case 120:
            t = "íê¸ 2~6ê¸ì, ìë¬¸ 4~12ê¸ìë¡ ì´ì© ê°ë¥í©ëë¤.";
            break;
          case 130:
            t = "ì´ë¯¸ ì¡´ì¬íë ëë¤ì ìëë¤.";
            break;
          case 0:
            t = "ì¬ì©íìë ì¢ì ë³ëª ìëë¤.";
            break;
          default:
            t = "ìëª»ë ì ê·¼ìëë¤.\n\n";
        }
        0 == e.result
          ? jQuery("#nickname_duplicate").val("n")
          : jQuery("#nickname_duplicate").val("y"),
          alert(t);
      },
      i = APP.PROTOCOL.URL.MYPAGE.NICK_OVERLAP_CHECK,
      n = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: i,
        success: a,
        error_type: !0,
        loading_bar: !1,
        params: t,
      };
    APP.PROTOCOL.ajaxCall(n, APP);
  }),
  (WEB_MYPAGE.sellerRequest = function () {
    if ("y" == jQuery("#nickname_duplicate").val())
      return (
        alert("ëë¤ì ì¤ë³µíì¸ì í´ì£¼ì¸ì."), jQuery("#reg_m_nick").focus(), !1
      );
    if ("" == jQuery("#nickname").val())
      return alert("ëë¤ìì ìë ¥íì¬ ì£¼ì¸ì."), jQuery("#reg_m_nick").focus(), !1;
    if ("" == jQuery("#login_passwd").val())
      return (
        alert("ë¡ê·¸ì¸ ë¹ë°ë²í¸ë¥¼ ìë ¥íì¬ ì£¼ì¸ì."),
        jQuery("#login_passwd").focus(),
        !1
      );
    var e = jQuery("#nickname").val(),
      t = jQuery("#login_passwd").val(),
      a = { nickname: e, login_passwd: t },
      i = new FC_APP(),
      n = function (e) {
        if ("fail_auth" == e.result) alert(e.msg), GO_MENU("realname");
        else {
          if ("fail" == e.result)
            return alert(e.msg.replace(/\\n/g, "\n")), void 0;
          fc_alert(
            "            íë§¤ì ì ì²­ì´ ìë£ëììµëë¤.\n\n        ì´ìí ì¬ì¬í 24ìê° ì´ë´ ì²ë¦¬ ë©ëë¤.\n\nâë±ê¸íê´´! ë¬´ì¡°ê±´ íë§¤ììµ 50%ê° ì ë¦½ë©ëë¤!â"
          ),
            GO_MENU("mypage"),
            gCookie.set("seller_join", "Y", { path: "/", expires_day: 1 });
        }
      },
      s = i.PROTOCOL.URL.MYPAGE.SELLER_REQUEST_PROC;
    i.DEFINE.AJAX_HTTP_TYPE = "jsonp";
    var o = {
      server: i.DEFINE.SERVER_SSL_PROTOCOL,
      uri: s,
      success: n,
      error_type: !0,
      loading_bar: !1,
      params: a,
    };
    i.PROTOCOL.ajaxCall(o, i);
  }),
  (WEB_MYPAGE.leavePage = function (e) {
    (getUrl = APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.MYPAGE.LEAVE_PAGE),
      $.get(getUrl, { page: e, type: "ajax" })
        .done(function (e) {
          jQuery("#list").html(e);
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_MYPAGE.leaveFormCheck = function () {
    var e = jQuery("#m_email1"),
      t = jQuery("#m_email2"),
      a = jQuery("#my_channel").val(),
      i = jQuery("#myPwd");
    if (0 == a) {
      if ("" == e.val() || null == e.val())
        return alert("ë©ì¼ì£¼ìì IDë¥¼ ìë ¥í´ ì£¼ì¸ì."), e.focus(), void 0;
      if ("" == t.val() || null == t.val())
        return alert("ë©ì¼ì£¼ìì ëë©ì¸ì ìë ¥í´ ì£¼ì¸ì."), t.focus(), void 0;
      if ("" == i.val() || null == i.val())
        return alert("ë¹ë°ë²í¸ë¥¼ ìë ¥í´ ì£¼ì¸ì."), i.focus(), void 0;
      $("#myId").val(e.val() + "@" + t.val());
    } else $("#myId").val(a), $("#myPwd").val(3811059);
    confirm(
      "íìíí´ë¥¼ ì§í íìê² ìµëê¹?\n\níí´ì ë³´ì íê³  ê³ì  ëª¨ë  í¬ì¸í¸ì ì¿ í°ì´ ì­ì ëì´\n\në³µêµ¬ëì§ ìì¼ë ì ì¤íê² ê²°ì í´ ì£¼ìê¸° ë°ëëë¤."
    ) && FC_MODAL_OPEN("fcLeaveModal");
  }),
  (WEB_MYPAGE.leaveLayerCheck = function (e) {
    var t,
      a,
      n = 0,
      s = 200;
    jQuery("#etc").attr("checked", !0);
    var o = 0;
    for (i = 0; e.value.length > i; i++)
      (tempStr = e.value.charAt(i)),
        (n += escape(tempStr).length > 4 ? 2 : 1),
        200 >= n && o++;
    return (
      (t = n),
      n > s
        ? (alert("200byte ì´ë´ë¡ ìì±í´ì£¼ì¸ì."),
          jQuery("#info").val(e.value.substring(0, o)),
          WEB_MYPAGE.leaveLayerCheck(jQuery("#info")),
          !1)
        : ((a = t + "<span>/200 byte</span>"),
          jQuery("#str_state").html(a),
          void 0)
    );
  }),
  (WEB_MYPAGE.leaveSubmit = function () {
    console.log("WEB_MYPAGE.leaveSubmit");
    var e = jQuery('input:radio[name="kind"]:checked').val(),
      t = jQuery("#info").val();
    if (null == e) return alert("íí´ì¬ì ë¥¼ ì íí´ ì£¼ì¸ì."), void 0;
    if (10 == e && 5 > t.length)
      return alert("íí´ì¬ì ë¥¼ 5ê¸ì ì´ì ìë ¥í´ ì£¼ì¸ì."), void 0;
    var a = jQuery("#myId").val(),
      i = jQuery("#myPwd").val(),
      n = new FC_APP(),
      s = { myId: a, myPwd: i, kind: e, info: t },
      o = function (e) {
        console.debug(e),
          1 == e.result &&
            (1 == isDefined(e.msg)
              ? alert(e.msg)
              : alert("íí´ ì²ë¦¬ ëììµëë¤.\n\nì´ì©í´ ì£¼ìì ê°ì¬í©ëë¤."),
            GO_MENU("logout", "no_alert"));
      },
      r = n.PROTOCOL.URL.MYPAGE.LEAVE_PROC;
    n.DEFINE.AJAX_HTTP_TYPE = "jsonp";
    var l = {
      server: n.DEFINE.SERVER_SSL_PROTOCOL,
      uri: r,
      success: o,
      error_type: !0,
      loading_bar: !1,
      params: s,
    };
    n.PROTOCOL.ajaxCall(l, n);
  }),
  (WEB_MYPAGE.childFormOpen = function () {
    var e = jQuery("#memberValidChild").val();
    1 == e ? FC_MODAL_OPEN("fcChildModalOff") : FC_MODAL_OPEN("fcChildModalOn");
  }),
  (WEB_MYPAGE.childProcNew = function (e) {
    var t = "#fcChildModalOn";
    if ("on" == e) {
      var a = $("#childOnForm").find('input[name="child_pwd"]').val(),
        i = $("#childOnForm").find('input[name="child_pwd1"]').val();
      if ("" == a)
        return (
          alert("ë¹ë°ë²í¸ë¥¼ ìë ¥í´ì£¼ì¸ì."),
          $("#childOnForm").find('input[name="child_pwd"]').focus(),
          void 0
        );
      if (4 > a.length)
        return (
          alert("ë¹ë°ë²í¸ë¥¼ 4ì ì´ì ìë ¥í´ì£¼ì¸ì."),
          $("#childOnForm").find('input[name="child_pwd"]').focus(),
          void 0
        );
      if (a != i)
        return (
          alert("í¨ì¤ìëê° ìë¡ ì¼ì¹ íì§ ììµëë¤."),
          $("#childOnForm").find('input[name="child_pwd1"]').focus(),
          void 0
        );
    } else {
      t = "#fcChildModalOff";
      var a = $("#childOffForm").find('input[name="child_pwd"]').val();
      if ("" == a)
        return (
          alert("ë¹ë°ë²í¸ë¥¼ ìë ¥í´ì£¼ì¸ì."),
          $("#childOffForm").find('input[name="child_pwd"]').focus(),
          void 0
        );
    }
    var n = new FC_APP(),
      s = { pwd: a },
      o = function (e) {
        console.debug(e),
          $(t).modal("hide"),
          1 != e.flag_child
            ? fc_alert(
                "ìëìì¬ ìë¹ì¤ë¥¼ ì ì²­íììµëë¤.\n\nìëìì¬ ìë¹ì¤ë ë´ì ë³´ / ê¸°ë³¸ì ë³´ìì ì¤ì  ê°ë¥í©ëë¤."
              )
            : fc_alert("ìëìì¬ ìë¹ì¤ë¥¼ ì¤ì§ì²ë¦¬ íììµëë¤."),
          1 == isDefined(e.member) && n.setMember(e.member),
          GO_MENU("home");
      },
      r = n.PROTOCOL.URL.MYPAGE.CHILD_PROC;
    n.DEFINE.AJAX_HTTP_TYPE = "jsonp";
    var l = {
      server: n.DEFINE.SERVER_SSL_PROTOCOL,
      uri: r,
      success: o,
      error_type: !0,
      loading_bar: !1,
      params: s,
    };
    n.PROTOCOL.ajaxCall(l, n);
  }),
  (WEB_MYPAGE.childProc = function () {
    var e = jQuery("#child_pwd").val();
    if ("" == e)
      return (
        fc_alert("ë¹ë°ë²í¸ë¥¼ ìë ¥í´ ì£¼ì¸ì."),
        jQuery("#child_pwd").focus(),
        void 0
      );
    var t = { pwd: e },
      a = function (e) {
        console.debug(e),
          1 != e.flag_child
            ? ($("#fcChildModalOn").modal("hide"),
              fc_alert(
                "ìëìì¬ ìë¹ì¤ë¥¼ ì ì²­íììµëë¤.\n\nìëìì¬ ìë¹ì¤ë ë´ì ë³´ / ê¸°ë³¸ì ë³´ìì ì¤ì  ê°ë¥í©ëë¤."
              ))
            : ($("#fcChildModalOff").modal("hide"),
              fc_alert("ìëìì¬ ìë¹ì¤ë¥¼ ì¤ì§ì²ë¦¬ íììµëë¤.")),
          1 == isDefined(e.member) && APP.setMember(e.member),
          GO_MENU("home");
      },
      i = APP.PROTOCOL.URL.MYPAGE.CHILD_PROC,
      n = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: i,
        success: a,
        error_type: !0,
        loading_bar: !1,
        params: t,
      };
    APP.PROTOCOL.ajaxCall(n, APP);
  }),
  (WEB_MYPAGE.adultAuth = function () {
    {
      jQuery("#memberValidAdult").val();
    }
    GO_MENU("adultSinup");
  });
var WEB_NOTE = {};
(WEB_NOTE.DATA = {
  content_type: "JSON",
  defaultUri: "/200/1/1/",
  isDefault: !1,
  pagination: {},
  menu: [],
}),
  (WEB_NOTE.start = function (e) {
    APP = e;
  }),
  (WEB_NOTE.contentShow = function (e) {
    "none" == jQuery("#content_" + e).css("display")
      ? (jQuery(".q_content").hide(),
        jQuery(".size1").removeClass("active"),
        jQuery(".size2").removeClass("active"),
        jQuery(".btn_close1").attr("class", "btn_open type1"),
        jQuery("#content_" + e).show(),
        jQuery("#button_" + e).attr("class", "btn_close1 type1"),
        jQuery("#size1_" + e).addClass("active"),
        jQuery("#size2_" + e).addClass("active"),
        "receive" == jQuery("#kind").val() && WEB_NOTE.readNote(e))
      : (jQuery("#size1_" + e).removeClass("active"),
        jQuery("#size2_" + e).removeClass("active"),
        jQuery("#content_" + e).hide(),
        jQuery("#button_" + e).attr("class", "btn_open type1"));
  }),
  (WEB_NOTE.readNote = function (e) {
    var t = { seq: e },
      a = function () {},
      i = APP.PROTOCOL.URL.NOTE.NOTE_READ,
      n = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: i,
        success: a,
        error_type: !0,
        loading_bar: !1,
        params: t,
      };
    APP.PROTOCOL.ajaxCall(n, APP);
  }),
  (WEB_NOTE.noteList = function (e) {
    var t = void 0 != jQuery("#kind").val() ? jQuery("#kind").val() : "";
    (getUrl = APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.NOTE.NOTE_LIST),
      $.get(getUrl, { page: e, type: "ajax", kind: t })
        .done(function (e) {
          jQuery("#list").html(e);
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_NOTE.menuChange = function (e, t) {
    jQuery("#send").removeClass("active on"),
      jQuery("#receive").removeClass("active on"),
      jQuery("#keep").removeClass("active on"),
      jQuery("#" + t).addClass("active on"),
      jQuery("#kind").val(e),
      WEB_NOTE.noteList(1);
  }),
  (WEB_NOTE.noteDelete = function () {
    if (is_checked()) {
      var e = [];
      $("input[name='chk[]']:checked").each(function () {
        e.push($(this).val());
      });
      var t = jQuery("#kind").val(),
        a = { chk: e, kind: t },
        i = function () {
          alert("ì­ì  ëììµëë¤."), WEB_NOTE.noteList(1);
        },
        n = APP.PROTOCOL.URL.NOTE.NOTE_DELETE,
        s = {
          server: APP.DEFINE.SERVER_PROTOCOL,
          uri: n,
          success: i,
          error_type: !0,
          loading_bar: !1,
          params: a,
        };
      APP.PROTOCOL.ajaxCall(s, APP);
    } else alert("ì íë ìë£ê° ììµëë¤.");
  }),
  (WEB_NOTE.sendNoteLayer = function (e) {
    return 0 == fc_check_login()
      ? (GO_MENU("login"), void 0)
      : (jQuery("#memo").val(""),
        jQuery("#nickname").val(""),
        1 == isDefined(e) && jQuery("#fc-recieve-memo-nickname").val(e),
        FC_MODAL_OPEN("fcNoteModal"),
        void 0);
  }),
  (WEB_NOTE.checkByte = function (e, t) {
    var a,
      i = 0,
      n = 0,
      s = 0,
      o = 0,
      r = 0,
      l = 600,
      c = jQuery(e);
    for (k = 0; c.val().length > k; k++)
      (a = c.val().charAt(k)),
        escape(a).length > 4 ? (n += 2) : "\r" != a && i++;
    if (((s = n + i), s > l)) {
      (o = s - l),
        alert("íì©ë ê¸ììê° ì´ê³¼ëììµëë¤.\r\nì´ê³¼ë ë¶ë¶ì ìëì¼ë¡ ì­ì ë©ëë¤."),
        (r = n / 2 + i - o);
      var d = t.substr(0, r);
      c.val(d), (s = n + i - o);
    }
    jQuery("#h_time_cbyte").val(s);
  }),
  (WEB_NOTE.sendNote = function () {
    var e = jQuery("#nickname").val();
    if ("" == e)
      return (
        alert("ë°ë ì¬ëì ëë¤ìì ìë ¥í´ ì£¼ì¸ì."), jQuery("#r_id").focus(), !1
      );
    var t = jQuery("#memo").val();
    if ("" == t)
      return alert("ìª½ì§ ë´ì©ì ìë ¥í´ ì£¼ì¸ì."), jQuery("#memo").focus(), !1;
    var t = jQuery("#memo").val(),
      a = { nickname: e, memo: t },
      i = function (e) {
        alert(e.msg),
          $("#fcNoteModal").modal("hide"),
          WEB_NOTE.noteList(1),
          jQuery("#nickname").val(""),
          jQuery("#memo").val("");
      },
      n = APP.PROTOCOL.URL.NOTE.NOTE_SEND,
      s = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: n,
        success: i,
        error_type: !0,
        loading_bar: !1,
        params: a,
      };
    APP.PROTOCOL.ajaxCall(s, APP);
  });
var WEB_REQ = {};
(WEB_REQ.DATA = {
  content_type: "JSON",
  defaultUri: "/200/1/1/",
  isDefault: !1,
  pagination: {},
}),
  (WEB_REQ.start = function (e, t, a) {
    (APP = e), console.debug(t), console.debug(a);
    var i = { type: "list", page: "1", idx: null };
    if (((hashCount = 0), isDefined(a)))
      for (var n in a) {
        var s = a[n],
          o = n.replace("!/", "");
        (i[o] = s), hashCount++;
      }
    if ((console.debug(i), utility.ui.bodyTop(), "list" == i.type))
      return (i.page = parseInt(i.page)), WEB_REQ.reqList(i.page), void 0;
    if ("view" == i.type) {
      if (isDefined(a.idx)) return WEB_REQ.reqView(a.idx), void 0;
    } else if ("req_write" == i.type)
      return WEB_REQ.reqRegForm("", i.page), void 0;
    return;
  }),
  (WEB_REQ.reqList = function (e) {
    var t = jQuery("#cate_code").val(),
      a = jQuery("#s_word").val(),
      i = jQuery("#s_column").val();
    (getUrl = APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.REQ.REQUEST_LIST),
      $.get(getUrl, {
        page: e,
        type: "ajax",
        cate_code: t,
        s_word: a,
        s_column: i,
      })
        .done(function (e) {
          jQuery("#list").html(e),
            jQuery("input:text[name=s_word]").val(a),
            jQuery("select[name=s_column] > option[value=" + i + "]").attr(
              "selected",
              "true"
            );
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_REQ.cateSelect = function (e) {
    jQuery("#cate_code").val(e), WEB_REQ.reqList(1);
  }),
  (WEB_REQ.reqView = function (e) {
    getUrl = APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.REQ.REQUEST_VIEW;
    var t = void 0 != jQuery("#page").val() ? jQuery("#page").val() : "";
    $.get(getUrl, { idx: e, type: "ajax", page: t })
      .done(function (e) {
        jQuery("#list").html(e);
      })
      .fail(function (e, t) {
        APP.PROTOCOL.ajaxError(e, t);
      });
  }),
  (WEB_REQ.reqMoveList = function (e) {
    location.href = APP.DEFINE.CI_ROOT + "/req/rlist/#!/?page=" + e;
  }),
  (WEB_REQ.reqMoveReg = function () {
    return 0 == fc_check_login()
      ? (GO_MENU("login"), void 0)
      : ((location.href = APP.DEFINE.CI_ROOT + "/req/rlist/#!/?req_write"),
        void 0);
  }),
  (WEB_REQ.reqRegForm = function (e, t) {
    0 == isDefined(t) && (t = 1),
      (getUrl =
        APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.REQ.REQUEST_WRITE_FORM),
      $.get(getUrl, { idx: e, type: "ajax", page: t })
        .done(function (e) {
          jQuery("#list").html(e);
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_REQ.reqCmtSetData = function (e) {
    for (
      var t = function (e) {
          var t = "";
          return (
            1 == e.depth
              ? ((t += '<div class="comment" id="comment_' + e.idx + '">'),
                (t += "  <dl>"),
                (t +=
                  '    <dt><span class="id">' +
                  e.nickname +
                  '</span><span class="bar">|</span><span class="time">' +
                  e.regdate +
                  "</span></dt>"),
                (t += "    <dd>" + e.comment + "</dd>"),
                (t += "  </dl>"),
                (t += '  <div class="right">'),
                (t += '    <ul class="comment_list">'),
                (t +=
                  "      <li  onclick=\"WEB_REQ.cmtLike('" +
                  e.idx +
                  '\');"  class="hand"><span class="identify">â¡</span>ê³µê°<span class="num" id="good_' +
                  e.idx +
                  '">' +
                  e.good +
                  '</span><span class="bar"> | </span></li>'),
                (t +=
                  '      <li class="hand" onclick="WEB_REQ.cmtInputForm(this);" data-thread="' +
                  e.thread +
                  '" data-depth="' +
                  e.depth +
                  '" data-idx="' +
                  e.idx +
                  '" data-link_idx="' +
                  e.link_idx +
                  '"><a>ëµê¸</a>'),
                (t +=
                  '      <span class="bar"> | </span></li><li onclick="WEB_REQ_reqCmtDelete(\'' +
                  e.idx +
                  '\');"><a class="hand">ì­ì </a></li>'),
                (t += "    </ul>"),
                (t += "  </div>"),
                (t += "</div>"))
              : ((t += '<div class="comment reply type1">'),
                (t += "  <dl>"),
                (t +=
                  '    <dt><span class="id">' +
                  e.nickname +
                  '</span><span class="bar">|</span><span class="time">' +
                  e.regdate +
                  "</span></dt>"),
                (t += "    <dd>" + e.comment + "</dd>"),
                (t += "  </dl>"),
                (t += '  <div class="right">'),
                (t += '    <ul class="comment_list">'),
                (t +=
                  "      <li onclick=\"WEB_REQ_reqCmtDelete('" +
                  e.idx +
                  '\');"><a class="hand">ì­ì </a></li>'),
                (t += "    </ul>"),
                (t += "  </div>"),
                (t += '   <div class="bg_reply"></div>'),
                (t += "</div>")),
            t
          );
        },
        a = [],
        i = 0;
      e.length > i;
      i++
    ) {
      var n = t(e[i]);
      a.push(n);
    }
    jQuery("#commentArea").html(a.join(""));
  }),
  (WEB_REQ.reqCmtList = function (e) {
    var t = jQuery("#idx").val(),
      a = { idx: t, page: e },
      i = function (e) {
        WEB_REQ.reqCmtSetData(e.comment_list), jQuery("#paging").html(e.paging);
      },
      n = APP.PROTOCOL.URL.REQ.REQUEST_COMMENT_LIST,
      s = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: n,
        success: i,
        error_type: !0,
        loading_bar: !1,
        params: a,
      };
    APP.PROTOCOL.ajaxCall(s, APP);
  }),
  (WEB_REQ.cmtInputForm = function (e) {
    var t = e.getAttribute("data-idx"),
      a = e.getAttribute("data-link_idx");
    e.getAttribute("data-depth");
    var i = e.getAttribute("data-thread"),
      n = "comment-replay-form-idx-" + t;
    if (jQuery(".comment-replay-form").attr("id") != n) {
      var s = "comment-replay-form-contents-" + t,
        o = "";
      (o +=
        '<div class="comment reply input comment-replay-form"  id="' +
        n +
        '">'),
        (o += '  <div class="comment_input">'),
        (o += '    <div class="input_inner">'),
        (o +=
          '      <textarea name="cmt" id="' +
          s +
          '" placeholder="ëê¸ì 5ì ì´ì ìì±ì ë±ë¡ ê°ë¥í©ëë¤. (ìµë 255ì)"></textarea>'),
        (o +=
          '      <span onclick="WEB_REQ.reqCmtReg(this);" class="hand" data-ele="' +
          s +
          '" data-link_idx="' +
          a +
          '" data-idx="' +
          t +
          '" data-thread="' +
          i +
          '"><a class="btn_register">ë±ë¡</a></span>'),
        (o += "    </div>	"),
        (o += "  </div>"),
        (o += '  <div class="bg_reply"></div>'),
        (o += "</div>"),
        jQuery("#comment_" + t).after(o);
    } else jQuery(".comment-replay-form").remove();
  }),
  (WEB_REQ.cmtLike = function (e) {
    var t = { type: "req", comment_idx: e },
      a = function (e) {
        console.debug(e),
          alert("ê³µê°í´ì£¼ìì ê°ì¬í©ëë¤."),
          jQuery("#good_" + e.update_data.idx).html(
            parseInt(jQuery("#good_" + e.update_data.idx).html()) +
              parseInt(e.update_data.count)
          );
      };
    null == APP && (APP = new FC_APP());
    var i = {
      server: APP.DEFINE.SERVER_PROTOCOL,
      uri: APP.PROTOCOL.URL.COMMENT.GOOD,
      success: a,
      error_type: !1,
      loading_bar: !1,
      params: t,
    };
    APP.PROTOCOL.ajaxCall(i, APP);
  }),
  (WEB_REQ.reqCmtReg = function (e) {
    var t = jQuery("#" + jQuery(e).attr("data-ele")).val(),
      a = jQuery(e).attr("data-link_idx"),
      i = jQuery(e).attr("data-thread");
    if ((jQuery(e).attr("data-depth"), 10 > text_String_real_length(t)))
      return alert("íê¸ 5ìì´ì ìë ¥í´ì£¼ì¸ì."), void 0;
    var n = { idx: a, comment: t, thread: i },
      s = function () {
        jQuery("#comment").val(""),
          alert("ëê¸ì´ ë±ë¡ ëììµëë¤."),
          WEB_REQ.reqCmtList(1);
      },
      o = APP.PROTOCOL.URL.REQ.REQUEST_COMMENT_WRITE,
      r = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: o,
        success: s,
        error_type: !0,
        loading_bar: !1,
        params: n,
      };
    APP.PROTOCOL.ajaxCall(r, APP);
  }),
  (WEB_REQ.reqReg = function () {
    var e = jQuery("#title").val(),
      t = jQuery("#code").val(),
      a = jQuery("#contents").val();
    if ((jQuery("#memberLoginOk").val(), 2 > e.length))
      return alert("ì ëª©ì ìë ¥ í´ì£¼ì¸ì."), jQuery("#title").focus(), !1;
    if ("" == t)
      return alert("ì¹´íê³ ë¦¬ë¥¼ ì íí´ ì£¼ì¸ì."), jQuery("#code").focus(), !1;
    if (5 > a.length)
      return alert("ë´ì©ì ìë ¥ í´ì£¼ì¸ì."), jQuery("#contents").focus(), !1;
    var i = jQuery("#idx").val(),
      n = { idx: i, title: e, code: t, contents: a },
      s = function () {
        alert("ìë£ ëììµëë¤."), GO_MENU("req");
      },
      o = APP.PROTOCOL.URL.REQ.REQUEST_WRITE,
      r = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: o,
        success: s,
        error_type: !0,
        loading_bar: !1,
        params: n,
      };
    return APP.PROTOCOL.ajaxCall(r, APP), !1;
  }),
  (WEB_REQ_reqCmtDelete = function (e) {
    var t = { idx: e },
      a = function () {
        alert("ì­ì  ëììµëë¤."), WEB_REQ.reqCmtList(1);
      },
      i = APP.PROTOCOL.URL.REQ.REQUEST_COMMENT_DEL,
      n = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: i,
        success: a,
        error_type: !0,
        loading_bar: !1,
        params: t,
      };
    APP.PROTOCOL.ajaxCall(n, APP);
  }),
  (WEB_REQ.reqDelete = function (e) {
    var t = { idx: e },
      a = function (e) {
        1 == e.result ? alert("ì­ì  ëììµëë¤.") : alert("ì­ì  ëì§ ìììµëë¤."),
          WEB_REQ.reqList(1);
      },
      i = APP.PROTOCOL.URL.MYPAGE.REQUEST_DELETE,
      n = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: i,
        success: a,
        error_type: !0,
        loading_bar: !1,
        params: t,
      };
    APP.PROTOCOL.ajaxCall(n, APP);
  });
var WEB_SEARCH = {};
(WEB_SEARCH.DATA = null),
  (WEB_SEARCH.SCROLL = null),
  (WEB_SEARCH.start = function (e, t, a) {
    console.log("WEB_SEARCH.start"),
      (this.app = e),
      (APP = this.app),
      console.debug(APP),
      console.debug(t),
      console.log(a),
      WEB_SEARCH.loadData(APP, t);
  }),
  (WEB_SEARCH.loadData = function (e, t) {
    console.log("WEB_SEARCH.loadPage"),
      console.debug(e),
      jQuery("#search-pagination-info");
    var a = {
      page: 1,
      limit: t.limit,
      keywd: t.keywd,
      cate1: t.category,
      force_category: t.force_category,
      location: jQuery("#fc-search-form-location").val(),
      page_load: "1",
      seller: t.search_seller,
    };
    WEB_SEARCH.getSearchNextData(e, a, 1, "1"),
      WEB_SEARCH.setBroadcastContents(e);
  }),
  (WEB_SEARCH.setBroadcastContents = function () {
    if (
      (console.log("WEB_SEARCH.setBroadcastContents"),
      !(1 > jQuery("#fc-search-brocast-chapter").length))
    ) {
      WEB_SEARCH.setBroadcastContentsSelectBinding();
      var e = "#fc-search-b-chapter-iscroll";
      jQuery(e).width(796);
      var t = jQuery(e + " .fc-search-iscroll-li").length;
      return (
        jQuery(e + " .fc-search-iscroll-ul").width(199 * t),
        0 != isIe8Ver()
          ? (jQuery(e).css({ overflow: "auto" }), void 0)
          : ((WEB_SEARCH.SCROLL = null),
            (WEB_SEARCH.SCROLL = new IScroll(e, {
              scrollX: !0,
              scrollY: !1,
              mouseWheel: !1,
              momentum: !1,
              snap: !0,
            })),
            WEB_SEARCH.SCROLL.on("scrollEnd", function () {
              console.log("scroll ended"),
                console.log(this.currentPage),
                this.currentPage;
            }),
            WEB_SEARCH.bindIScrollBtn(WEB_SEARCH.SCROLL, e, t),
            void 0)
      );
    }
  }),
  (WEB_SEARCH.setBroadcastContentsSelectBinding = function () {
    console.log("setBroadcastContentsSelectBinding");
    var e = jQuery("#fc-search-brocast-chapter").data("max_chapter");
    1 > e ||
      1 > jQuery("#fc-search-brocast-chapter-select-go").length ||
      (jQuery("#fc-search-brocast-chapter-select-go").unbind("click"),
      jQuery("#fc-search-brocast-chapter-select-go").bind("click", function () {
        jQuery(this).hasClass("active")
          ? (jQuery("#fc-search-brocast-chapter-select-list").hide(),
            jQuery(this).removeClass("active"))
          : (jQuery("#fc-search-brocast-chapter-select-list").show(),
            jQuery(this).addClass("active"));
      }));
  }),
  (WEB_SEARCH.setBroadcastContentsPagin = function (e) {
    if ((console.log("WEB_SEARCH.setBroadcastContentsPagin:" + e), !(0 > e))) {
      jQuery("#fc-search-brocast-paging-div").data("ipage", e),
        jQuery(".fc-search-pagin-li").removeClass("on");
      var t = function (e) {
          return (
            '<li class="hand" onclick="WEB_SEARCH.goBroadcastContentsPagin(' +
            e +
            ');" style="margin-left:6px;"><span class="fc-search-pagin-li x' +
            e +
            '">' +
            e +
            "</span></li>"
          );
        },
        a = ".fc-search-pagin-li.x" + (e + 1);
      if (
        (console.log(a),
        console.log("activeEle.length:" + $(a).length),
        jQuery(a).length > 0)
      )
        jQuery(a).addClass("on");
      else {
        for (
          var i = e / 5 + 1,
            n = 5 * (parseInt(i) - 1) + 1,
            s = n + 5,
            o = [],
            r = n;
          s > r;
          r++
        )
          o.push(t(r));
        var l =
          '<li class="prev" onclick="WEB_SEARCH.goBroadcastContentsPagin(' +
          (n - 1) +
          ');"><span>&lt;</span></li>';
        (l += o.join("")),
          (l +=
            '<li class="next" onclick="WEB_SEARCH.goBroadcastContentsPagin(' +
            s +
            ');"><span>&gt;</span></li>'),
          jQuery("#fc-search-brocast-paging-ol").html(l),
          setTimeout(function () {
            jQuery(a).addClass("on");
          }, 100);
      }
    }
  }),
  (WEB_SEARCH.goBroadcastContentsPagin = function (e) {
    if (
      (console.log("WEB_SEARCH.goBroadcastContentsPagin::" + e),
      null != WEB_SEARCH.SCROLL)
    ) {
      if ("0" == e) return WEB_SEARCH.SCROLL.goToPage(0, 0, 500), void 0;
      var t = e;
      console.log("nextPage::" + t);
      var a = parseInt(jQuery("#fc-search-brocast-paging-div").data("load"));
      if ((console.log("loadPage::" + a), t > a)) {
        var i = a / 5 + 1;
        setTimeout(function () {
          SEARCH_FN.getMoreBrocastList(i, !0);
        }, 100);
      } else {
        var n = e - 1;
        0 > n && (n = 0), WEB_SEARCH.SCROLL.goToPage(n, 0, 500);
      }
    }
  }),
  (WEB_SEARCH.bindIScrollBtn = function (e, t, a) {
    return 4 >= a
      ? (jQuery("#fc-search-brocast-paging-div").hide(), void 0)
      : (Math.ceil(a / 5),
        jQuery(".fc-search-iscroll-btn .btn_l_prev").unbind("click"),
        jQuery(".fc-search-iscroll-btn .btn_l_prev").bind("click", function () {
          e.prev();
        }),
        jQuery(".fc-search-iscroll-btn .btn_l_next").unbind("click"),
        jQuery(".fc-search-iscroll-btn .btn_l_next").bind("click", function () {
          e.next();
          var t = e.currentPage.pageX + 1,
            a = t + 1,
            i = parseInt(jQuery("#fc-search-brocast-paging-div").data("load"));
          if (a > i) {
            var n = i / 5 + 1;
            if (2 > n) return;
            setTimeout(function () {
              SEARCH_FN.getMoreBrocastList(n);
            }, 100);
          }
        }),
        void 0);
  }),
  (WEB_SEARCH.onClickBrocastSort = function (e) {
    console.log("WEB_SEARCH.onClickBrocastSort");
    var t = jQuery(e).data("sort");
    jQuery("#fc-search-brocast-paging-div").data("sort", t),
      setTimeout(function () {
        SEARCH_FN.getMoreBrocastList(1);
      }, 100);
  }),
  (WEB_SEARCH.setPaging = function (e, t) {
    console.log("setPaging");
    var a = jQuery("#search-pagination-info"),
      i = {
        total: a.data("total"),
        page: a.data("page"),
        count: a.data("count"),
        limit: a.data("limit"),
        keywd: a.data("keywd"),
        cate1: a.data("cate1"),
        sort_order: a.data("sort"),
        first_load: a.data("first_load"),
        seller: a.data("seller"),
        location: jQuery("#fc-search-form-location").val(),
      };
    if (
      (jQuery(".select_order[data-sort='" + i.sort_order + "']").addClass(
        "active"
      ),
      jQuery("#changePageCount").val(i.limit).prop("selected", !0),
      2 > i.total)
    )
      return jQuery("#fc-search-pagination-div").empty(), void 0;
    jQuery("#fc-search-pagination-div").html(
      '<ul id="search-pagination-contents" class="pagination-sm">'
    );
    var n = 15;
    if (1 > i.total) {
      var n = 1;
      jQuery("#fc-search-pagination-div").empty();
    }
    var s = function (t, a) {
      console.log(a),
        console.debug(t),
        WEB_SEARCH.getSearchNextData(e, i, a, "0");
    };
    $("#search-pagination-contents").twbsPagination({
      startPage: i.page,
      onPageClick: s,
      visiblePages: n,
      totalPages: i.total,
    }),
      "1" == t &&
        jQuery("#search-pagination-contents li:eq(1)").addClass("active");
  }),
  (WEB_SEARCH.setListTopText = function (e, t, a) {
    var i = e,
      n = APP.fc_category,
      s = n.cateName[i],
      o = n.getSortOrderName(t),
      r =
        'íì¬ <span class="cate">' +
        s +
        '</span> ë¶ë¥ì \'<span class="search_txt">' +
        a +
        '</span>\'ì¼ë¡ ê²ìë ìë£ë¥¼ <span class="sub_tab">' +
        o +
        "</span> ì ë ¬ë¡ ë³´ê³  ê³ì­ëë¤.";
    jQuery(".now_txt").html(r);
  }),
  (WEB_SEARCH.setPageBind = function () {
    jQuery("#changePageCount").change(function () {
      $("#changePageCount option:selected").each(function () {
        var e = $(this).val();
        WEB_SEARCH.onClickChangeSort("limit", this, e);
      });
    });
  }),
  (WEB_SEARCH.setSearchResultCategoryCount = function (e, t, a) {
    var i = e.fc_category,
      n = function (e, t) {
        var n = "",
          s = i.cateName[e];
        a == e && (n = " on");
        var o = "";
        return (
          (o +=
            '<li class="search-category-list hand ' +
            n +
            '" data-cate="' +
            e +
            '" onclick="WEB_SEARCH.onClickChangeSort(\'cate\', this)">'),
          (o += "	<a>" + s + '<span class="num">(' + t + ")</span></a>"),
          (o += '	<span class="bar">|</span>'),
          (o += "</li>")
        );
      },
      s = [],
      o = [],
      r = 0,
      l = 0;
    for (var c in t)
      0 != c && (l += parseInt(t[c])),
        "12" != c && "13" != c && (s.push(n(c, t[c], r)), o.push(c), r++);
    if (
      (jQuery("#web-search-result-category-count").html(s.join("")),
      jQuery("#web-search-result-category-count li")
        .eq(0)
        .find(".num")
        .html("(" + l + ")"),
      0 > $.inArray(a, o) && "0" != a)
    ) {
      var d = n(a, 0, r + 1);
      jQuery("#web-search-result-category-count").append(d);
    }
    jQuery("#web-search-result-category-count li").last().find(".bar").remove();
    var u = i.cateType[a];
    jQuery(".left-menu." + u).addClass("active");
  }),
  (WEB_SEARCH.setSearchListAjaxData = function (e) {
    console.log("WEB_SEARCH.setSearchListAjaxData"),
      null == APP && (APP = new FC_APP());
    var t = e.first_load;
    if (0 == isDefined(e.bbs_data) && "1" == t)
      return (
        jQuery("#search-list-no-result-div").show(),
        jQuery("#web-search-tbl-div").hide(),
        void 0
      );
    var a = e.bbs_data.bbs.list,
      i = e.bbs_data.new_time,
      n = jQuery("#search-pagination-info");
    n.data({
      total: e.bbs_data.bbs.total_page,
      page: e.bbs_data.bbs.page,
      count: e.bbs_data.bbs.total_count,
      limit: e.bbs_data.bbs.limit,
      keywd: e.bbs_data.keywd,
      cate1: e.bbs_data.cate1,
      sort: e.bbs_data.sort_order,
      first_load: t,
    });
    var s = [],
      o = 0,
      r = [],
      l = {};
    for (var c = 0 in a)
      "13" != a[c].cate1 &&
        ((r[o] = new Contentslist(a[c], i, c)),
        1 == isDefined(e.fc_event.sale) &&
          r[o].setSaleEventData(e.fc_event.sale),
        11 == r[o].cate1 && "1" == r[o].chkcopy && (r[o].purchase_cnt = 0),
        (l[c] = r[o].purchase_cnt),
        s.push(r[o].htmlSearchList(e.bbs_data.keywd)),
        o++);
    jQuery("#fc-search-contents-list").html(s.join(""));
    for (var d = sortObject(l), u = 0; d.length > u; u++) {
      var _ = utility.ui.getBbsTitleStyle(u + 1, d.length),
        p = d[u].key;
      jQuery(".fc-contents-list-tit:eq(" + p + ")")
        .removeClass("z_color")
        .addClass(_);
    }
    if (
      ("1" == e.bbs_data.new_paging && WEB_SEARCH.setPaging(APP),
      "1" == t || 1 == t)
    ) {
      if (e.bbs_data.bbs.list.length > 0)
        jQuery("#web-search-tbl-div").show(),
          jQuery("#search-list-no-result-div").hide(),
          WEB_SEARCH.setPaging(APP, t),
          WEB_SEARCH.setPageBind(APP);
      else {
        var m = gCookie.get("is_partner"),
          h = gCookie.get("is_search");
        if ("1" == m && "1" == h)
          return (
            gCookie.del("is_partner", APP.DEFINE.COOKIE_DOMAIN),
            gCookie.del("is_search", APP.DEFINE.COOKIE_DOMAIN),
            GO_MENU("home"),
            void 0
          );
        1 == isDefined(e.is_login_member) &&
          (1 == e.is_login_member
            ? jQuery(".web-result-except-notlogin").hide()
            : jQuery(".web-result-except-notlogin").show()),
          jQuery("#search-list-no-result-div").show(),
          jQuery("#web-search-tbl-div").hide();
      }
      var E = e.bbs_data.cate1;
      1 == isDefined(e.cate_count_list) &&
        WEB_SEARCH.setSearchResultCategoryCount(APP, e.cate_count_list, E);
    }
    WEB_SEARCH.setListTopText(
      e.bbs_data.cate1,
      e.bbs_data.sort_order,
      e.bbs_data.keywd
    ),
      $("html,body").scrollTop(0),
      jQuery(".fc-left-side-bar").height(jQuery("#container").height() + 20),
      isDefined(e.bbs_data.bad_search) &&
        (jQuery("#web-search-bad-keyword")
          .find(".bad-str")
          .text(e.bbs_data.bad_search),
        jQuery("#web-search-bad-keyword").show(),
        jQuery(".web-result-except-notlogin").hide());
  }),
  (WEB_SEARCH.getSearchNextData = function (e, t, a, i) {
    console.log("WEB_THEME.getSearchNextData"), null == e && (e = new FC_APP());
    var n = "0";
    isDefined(t.page_load) && (n = t.page_load);
    var s = {
        search: t.keywd,
        page: a,
        category: t.cate1,
        location: t.location,
        sort_order: t.sort_order,
        limit: t.limit,
        first_load: i,
        page_load: n,
        seller: t.seller,
        force_category: t.force_category,
      },
      o = {
        server: e.DEFINE.SERVER_PROTOCOL,
        uri: e.PROTOCOL.URL.SEARCH.ACTION,
        success: WEB_SEARCH.setSearchListAjaxData,
        error_type: !1,
        loading_bar: !0,
        params: s,
      };
    e.PROTOCOL.ajaxCall(o, e),
      1 == t.cate1
        ? jQuery(".left-menu.movie").addClass("active")
        : 11 == t.cate1 && jQuery(".left-menu.adult").addClass("active");
  }),
  (WEB_SEARCH.onClickChangeSort = function (e, t, a) {
    jQuery(".main_menu li").removeClass("active");
    var i = jQuery("#search-pagination-info"),
      n = {
        total: i.data("total"),
        page: i.data("page"),
        count: i.data("count"),
        limit: i.data("limit"),
        keywd: i.data("keywd"),
        cate1: i.data("cate1"),
        sort_order: i.data("sort"),
        first_load: i.data("first_load"),
        seller: i.data("seller"),
        location: jQuery("#fc-search-form-location").val(),
      };
    "sort" == e
      ? (jQuery(".select_order").removeClass("active"),
        jQuery(t).addClass("active"),
        (n.sort_order = jQuery(t).data("sort")))
      : "limit" == e
      ? (console.log("limitCount:::" + a), (n.limit = a))
      : (jQuery(".search-category-list").removeClass("on"),
        jQuery(t).addClass("on"),
        (n.cate1 = jQuery(t).data("cate")),
        jQuery("#fc-search-form-location").val(n.cate1)),
      null == APP && (APP = new FC_APP()),
      WEB_SEARCH.getSearchNextData(APP, n, 1, "1");
  }),
  (WEB_SEARCH.setFirstTheumNailImg = function (e) {
    this.no_img_url = e.DEFINE.IMG + "/common/no_img.png";
    var t = function (e) {
        jQuery(e).removeAttr("style"), jQuery(e).addClass("no_img");
      },
      a = function (e) {
        jQuery(e).data("previmg"), jQuery(e).data("original", no_img_url);
      },
      i = function () {},
      n = function (e, n, s) {
        "1" == e ? checkImage(n, i, a, s) : checkImage(n, i, t, s);
      };
    $(".search-img-list-sapn").each(function () {
      var e = this,
        t = $(this).data("original"),
        a = $(this).data("is_mobile");
      n(a, t, e);
    }),
      FC_APP_FN.setHomeContentsImgLazy();
  });
var SEARCH_FN = {};
(SEARCH_FN.setHotKeyWordPlaceholder = function () {
  var e = jQuery("#fc-hot-key-word").val();
  console.log("hotKeywd:" + e);
  var t = null;
  if (
    (1 == isDefined(e) && (t = JSON.parse(e)), console.debug(t), $.isArray(t))
  ) {
    var a = t.length - 1,
      i = 0,
      n = randomNumberFromRange(i, a),
      s = t[n];
    jQuery("#search").attr("placeholder", s);
  } else {
    var o = "ì°¾ì ìë£ì ì ëª©ì´ë ê²ìì´ë¥¼ ìë ¥í´ì£¼ì¸ì.";
    jQuery("#search").attr("placeholder", o);
  }
}),
  (SEARCH_FN.searchFormValidate = function (e) {
    SEARCH_FN.setHotKeyWordPlaceholder();
    var t = function () {
      var t = jQuery("#fcSearchForm").serialize(),
        a = e.DEFINE.SERVER_PROTOCOL + e.PROTOCOL.URL.SEARCH.INDEX + "?" + t;
      location.href = a;
    };
    jQuery("#fcSearchForm").validate({
      errorClass: "form-error",
      submitHandler: function (e) {
        console.log("submitHandler");
        var a = jQuery("#search").val();
        return "" == a
          ? (alert("ê²ìì´ë¥¼ ìë ¥í´ì£¼ì¸ì."), jQuery("#search").focus(), void 0)
          : 2 > a.length
          ? (alert("ê²ìì´ë 2ì ì´ì ìë ¥í´ì£¼ì¸ì."),
            jQuery("#search").select(),
            void 0)
          : (t(e), void 0);
      },
      success: function () {},
    });
  }),
  (SEARCH_FN.onclickBrocastChapter = function (e) {
    console.log("SEARCH_FN.onclickBrocastChapter");
    var t = {
      keywd: jQuery(e).data("keywd"),
      bro_idx: jQuery(e).data("bro_idx"),
      show_date: jQuery(e).data("show_date"),
      bbs_idx: jQuery(e).data("bbs_idx"),
      chapter: jQuery(e).data("chapter"),
      cate1: jQuery(e).data("cate1"),
      content_idx: jQuery(e).data("content_idx"),
    };
    if ((CONTENTS_FUN.voteBrocastContents(e), isDefined(t.bbs_idx))) {
      var a = parseInt(t.bbs_idx);
      if (0 != a) return FC_APP_FN.openContentsView(a, e), void 0;
    }
    var i = function (e) {
        return (
          console.debug(e),
          "0" == e.bbs_idx || 0 == e.bbs_idx
            ? (alert("ì¼ì¹í ì»¨íì¸  ì ë³´ë¥¼ ì°¾ì ì ììµëë¤."), void 0)
            : (FC_APP_FN.openContentsView(e.bbs_idx), void 0)
        );
      },
      n = new FC_APP(),
      s = {
        server: n.DEFINE.SERVER_PROTOCOL,
        uri: n.PROTOCOL.URL.SEARCH.GET_BBS_IDX,
        success: i,
        error_type: !1,
        loading_bar: !0,
        params: t,
      };
    n.PROTOCOL.ajaxCall(s, n);
  }),
  (SEARCH_FN.getMoreBrocastList = function (e, t) {
    console.log("SEARCH_FN.getMoreBrocastList");
    var a = "#fc-search-brocast-paging-div",
      i = {
        page: e,
        limit: jQuery(a).data("limit"),
        bro_idx: jQuery(a).data("bro_idx"),
        sort: jQuery(a).data("sort"),
        total_page: jQuery(a).data("total_page"),
      };
    if (!(parseInt(i.total_page) < parseInt(e))) {
      var n = function (n) {
          console.debug(n);
          var s = n.bro_data.list;
          if (!(1 > s.length)) {
            for (
              var o = [], r = parseInt(i.chapter_idx), l = 0;
              s.length > l;
              l++
            ) {
              var c = TEMPLATE_FUN.brocastChapterListHtml(s[l]);
              o.push(c);
              var d = parseInt(s[l].chapter);
              r > d && (r = d);
            }
            var u = parseInt(n.bro_data.page);
            if (
              ("1" == e
                ? (jQuery("#fc-search-iscroll-ul").html(o.join("")),
                  jQuery(a).data("load", 5),
                  (t = !0))
                : jQuery("#fc-search-iscroll-ul").append(o.join("")),
              jQuery(a).data("page", n.bro_data.page),
              jQuery(a).data("sort", n.bro_data.sort),
              jQuery(a).data("load", 5 * u),
              jQuery(".fc-bc-sort").removeClass("active"),
              jQuery(".fc-bc-sort." + n.bro_data.sort).addClass("active"),
              null != WEB_SEARCH.SCROLL)
            ) {
              var _ = jQuery(".fc-search-iscroll-li").length,
                p = 199 * _;
              jQuery("#fc-search-iscroll-ul").width(p),
                setTimeout(function () {
                  if ((WEB_SEARCH.SCROLL.refresh(), 1 == t)) {
                    var e = 5 * (u - 1);
                    WEB_SEARCH.SCROLL.goToPage(e, 0, 1e3);
                  }
                }, 500);
            } else WEB_SEARCH.setBroadcastContents(APP);
          }
        },
        s = new FC_APP(),
        o = {
          server: s.DEFINE.SERVER_PROTOCOL,
          uri: s.PROTOCOL.URL.SEARCH.BRO_MORE,
          success: n,
          error_type: !1,
          loading_bar: !0,
          params: i,
        };
      s.PROTOCOL.ajaxCall(o, s);
    }
  }),
  (SEARCH_FN.closeSearchDiv = function (e) {
    if ("smartdb" == e) jQuery("#fcSmartDBDiv").remove();
    else {
      if ("brocast" != e) return;
      jQuery("#fc-search-brocast-chapter").remove();
    }
  }),
  (SEARCH_FN.getSelectMoreBrocastList = function (e) {
    console.log("SEARCH_FN.getMoreBrocastList");
    var t = {
      keywd: jQuery(e).data("keywd"),
      chapter_idx: jQuery(e).data("chapter_idx"),
      more: jQuery(e).data("more"),
      last_chapter_idx: jQuery(e).data("last"),
      show_day: jQuery(e).data("show_day"),
      loc: jQuery(e).data("loc"),
    };
    if ((console.debug(t), 1 == parseInt(t.more))) {
      var a = function (e) {
          var a = "";
          return (
            (a +=
              '<li data-cate1="2" data-chapter="' +
              e.chapter +
              '" data-content_idx="' +
              e.content_idx +
              '" data-bbs_idx="' +
              e.bbs_no +
              '" data-bro_idx="' +
              e.content_idx +
              '" data-keywd="' +
              t.keywd +
              '" data-show_date="' +
              e.show_date +
              '" onclick="SEARCH_FN.onclickBrocastChapter(this);">'),
            (a += '	<span class="num">' + e.chapter + "í</span>"),
            (a +=
              '	<span class="date">[' +
              e.show_date_2 +
              "." +
              e.day_of_week +
              "]</span>"),
            (a += '	<span class="tit">' + e.content + "</span></li>"),
            (a += "</li>")
          );
        },
        i = function (i) {
          console.debug(i);
          for (
            var n = [],
              s = parseInt(t.last_chapter_idx),
              o = i.bro_data.list,
              r = 0;
            o.length > r;
            r++
          ) {
            var l = a(o[r]);
            n.push(l);
            var c = parseInt(o[r].chapter);
            s > c && (s = c);
          }
          "theme" == t.loc
            ? jQuery(".fc-theme-brocast-chapter-list-ul").append(n.join(""))
            : jQuery("#fc-search-brocast-chapter-list").append(n.join("")),
            jQuery(e).data({ last: s, more: "0" });
        },
        n = new FC_APP(),
        s = {
          server: n.DEFINE.SERVER_PROTOCOL,
          uri: n.PROTOCOL.URL.SEARCH.BRO_MORE_ALL,
          success: i,
          error_type: !1,
          loading_bar: !1,
          params: t,
        };
      n.PROTOCOL.ajaxCall(s, n);
    }
  });
var WEB_SEARCH_SELLER = {};
(WEB_SEARCH_SELLER.start = function (e) {
  console.log("WEB_SEARCH_SELLER.start"),
    (this.app = e),
    (APP = this.app),
    jQuery(".s_category .cate1").on("click", function () {
      jQuery(".s_category  .cate1").removeClass("active"),
        jQuery(this).addClass("active");
      var e = jQuery(this).attr("data-value");
      WEB_SEARCH_SELLER.getCateChangeData(e), jQuery("#seller_cate1").val(e);
    }),
    WEB_SEARCH_SELLER.getCateChangeData(0);
}),
  (WEB_SEARCH_SELLER.setSellerLayer = function () {
    jQuery(".four").unbind("click"),
      jQuery(".four").bind("click", function (e) {
        jQuery(this).children("div").css("display", "block"),
          jQuery(this)
            .children("div")
            .mouseleave(function () {
              jQuery(this).css("display", "none");
            }),
          e.stopPropagation();
      }),
      jQuery(".four")
        .find("li")
        .bind("click", function () {
          var e = jQuery(this).attr("data-type"),
            t = jQuery(this).data("nickname");
          return "seller_list" == e
            ? (GO_MENU("seller_file", t), void 0)
            : "note" == e
            ? (WEB_NOTE.sendNoteLayer(t), void 0)
            : void 0;
        });
  }),
  (WEB_SEARCH_SELLER.setSearchListAjaxData = function (e) {
    if (
      (console.log("WEB_SEARCH_SELLER.setSearchListAjaxData"),
      console.debug(e),
      e.bbs.total_count > 0)
    ) {
      var t = e.bbs.list,
        a = e.new_time,
        i = [],
        n = 0,
        s = [];
      for (var o = 0 in t)
        (s[n] = new Contentslist(t[o], a, o)),
          1 == isDefined(e.fc_event.sale) &&
            s[n].setSaleEventData(e.fc_event.sale),
          1 == isDefined(e.bbs.keywd)
            ? i.push(s[n].htmlSearchList(e.bbs.keywd))
            : i.push(s[n].htmlSearchList("")),
          n++;
      jQuery("#fc-search-contents-list2").html(i.join("")),
        WEB_SEARCH_SELLER.setSellerLayer(),
        jQuery("#fc-search-pagination-div2").html(
          '<ul id="search-pagination-contents2" class="pagination-sm">'
        );
      var r = function (e, t) {
          WEB_SEARCH_SELLER.getSearchNextData(e, t);
        },
        l = 15;
      1 > e.bbs.total_page &&
        ((e.bbs.total_page = 1),
        (l = 1),
        jQuery("#fc-search-pagination-div2").empty()),
        1 > parseInt(e.bbs.page) && (e.bbs.page = 1),
        $("#search-pagination-contents2").twbsPagination({
          startPage: parseInt(e.bbs.page),
          onPageClick: r,
          visiblePages: l,
          totalPages: e.bbs.total_page,
        });
    } else
      jQuery("#fc-search-contents-list2").html(
        '<tr><td><div class="seller_nofile"><p>íë§¤ìì ë¤ë¥¸ ìë£ê° ììµëë¤.</p></div></td></tr>'
      ),
        jQuery("#fc-search-pagination-div2").empty();
  }),
  (WEB_SEARCH_SELLER.getSearchData = function () {
    jQuery(".s_category  .cate1").removeClass("active"),
      jQuery(".s_category  .cate1").first().addClass("active");
    var e = jQuery("#seller_keyword").val(),
      t = jQuery("#seller_userid").val(),
      a = { userid: t, keywd: e, page: 1 },
      i = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: APP.PROTOCOL.URL.SEARCH.SELLER_FILE_AJAX,
        success: WEB_SEARCH_SELLER.setSearchListAjaxData,
        error_type: !1,
        loading_bar: !0,
        params: a,
      };
    APP.PROTOCOL.ajaxCall(i, APP);
  }),
  (WEB_SEARCH_SELLER.getCateChangeData = function (e) {
    var t = jQuery("#seller_userid").val(),
      a = jQuery("#seller_keyword").val(),
      i = { userid: t, cate1: e, keywd: a, page: 1 },
      n = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: APP.PROTOCOL.URL.SEARCH.SELLER_FILE_AJAX,
        success: WEB_SEARCH_SELLER.setSearchListAjaxData,
        error_type: !1,
        loading_bar: !0,
        params: i,
      };
    APP.PROTOCOL.ajaxCall(n, APP);
  }),
  (WEB_SEARCH_SELLER.getSearchNextData = function (e, t) {
    var a = jQuery("#seller_userid").val(),
      i = jQuery("#seller_cate1").val(),
      n = jQuery("#seller_keyword").val(),
      s = { userid: a, keywd: n, cate1: i, page: t },
      o = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: APP.PROTOCOL.URL.SEARCH.SELLER_FILE_AJAX,
        success: WEB_SEARCH_SELLER.setSearchListAjaxData,
        error_type: !1,
        loading_bar: !0,
        params: s,
      };
    APP.PROTOCOL.ajaxCall(o, APP);
  }),
  (WEB_SEARCH_SELLER.setFriendAdd = function (e) {
    if ((console.log("setFriendAdd"), 0 == fc_check_login()))
      return console.log("ë¡ê·¸ì¸ì´ íìí ìë¹ì¤ ìëë¤."), GO_MENU("login"), void 0;
    var t = jQuery("#seller_userid").val(),
      a = jQuery("#memberLoginOk").val(),
      i = jQuery(e).data("type"),
      n = jQuery(e).data("nickname");
    return a == t
      ? (console.log(
          "ê²½ê³ !! ìê¸° ìì ì ì¢ìì íê±°ë ì¹êµ¬ì¶ê° íë ê²ì ì ë¹íì§ ìì íììëë¤."
        ),
        fc_alert("ìê¸° ìì ì ì¢ìì/ì¹êµ¬ì¶ê°ë¥¼ í  ì ììµëë¤!"),
        void 0)
      : "seller_like" == i
      ? (console.log("like--------------" + n),
        (slike = jQuery("#seller_like").html()),
        WEB_FRIEND.AddFriendLike(n, slike),
        void 0)
      : "seller_add_friend" == i
      ? (console.log("add_friend--------------" + n),
        WEB_FRIEND.first_addFriend(n),
        void 0)
      : void 0;
  });
var WEB_SELLER = {};
(WEB_SELLER.DATA = {
  content_type: "JSON",
  defaultUri: "/200/1/1/",
  isDefault: !1,
  pagination: {},
  menu: ["index", "reply", "item", "payment", "history", "bestWord", "notice"],
  seller_guide: ["seller_guide_1", "seller_guide_2", "seller_guide_3"],
}),
  (WEB_SELLER.start = function (e, t, a, i) {
    APP = e;
    for (var n = WEB_SELLER.DATA.menu, s = 0; n.length > s; s++)
      jQuery("#" + n[s]).removeClass("active");
    if ("/index" == a.uri)
      jQuery("#index").addClass("active"), WEB_SELLER.uploadList(1);
    else if ("/reply" == a.uri)
      jQuery("#reply").addClass("active"), WEB_SELLER.replyList(1);
    else if ("/item" == a.uri)
      jQuery("#item").addClass("active"), WEB_SELLER.itemList(1);
    else if ("/payment" == a.uri)
      jQuery("#payment").addClass("active"), WEB_SELLER.paymentList(1);
    else if ("/history" == a.uri)
      jQuery("#history").addClass("active"), WEB_SELLER.historyList(1);
    else if ("/bestWord" == a.uri)
      jQuery("#bestWord").addClass("active"), WEB_SELLER.bestWordList(1);
    else if ("/notice" == a.uri)
      jQuery("#notice").addClass("active"), WEB_SELLER.noticeList(1);
    else if ("/?notice_idx" == a.uri) {
      jQuery("#notice").addClass("active");
      var o = i["!/?notice_idx"],
        r = i.page;
      WEB_SELLER.noticeView(o, r);
    } else if ("/?notice_page" == a.uri) {
      jQuery("#notice").addClass("active");
      var r = i["!/?notice_page"];
      WEB_SELLER.noticeList(r);
    } else if ("/?notice_write" == a.uri) {
      jQuery("#notice").addClass("active");
      var o = i["!/?notice_write"];
      WEB_SELLER.noticeWriteForm(o);
    } else "" != t.name && jQuery("#" + t.name).addClass("active");
  }),
  (WEB_SELLER.uploadList = function (e) {
    getUrl = APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.SELLER.UPLOAD_LIST;
    var t =
        void 0 != jQuery("select[name=column]").val()
          ? jQuery("select[name=column]").val()
          : "",
      a =
        void 0 != jQuery("input:text[name=word]").val()
          ? jQuery("input:text[name=word]").val()
          : "",
      i =
        void 0 != jQuery("select[name=cate1]").val()
          ? jQuery("select[name=cate1]").val()
          : "",
      n =
        void 0 != jQuery("select[name=cate2]").val()
          ? jQuery("select[name=cate2]").val()
          : "",
      s =
        void 0 != jQuery("select[name=ing]").val()
          ? jQuery("select[name=ing]").val()
          : "",
      o =
        void 0 != jQuery("input:hidden[name=adminStop]").val()
          ? jQuery("input:hidden[name=adminStop]").val()
          : "",
      r =
        void 0 != jQuery("select[name=display_page]").val()
          ? jQuery("select[name=display_page]").val()
          : "",
      l = void 0 != jQuery("#orderby").val() ? jQuery("#orderby").val() : "";
    $.get(getUrl, {
      page: e,
      type: "ajax",
      cate1: i,
      cate2: n,
      ing: s,
      adminStop: o,
      display_page: r,
      column: t,
      word: a,
      orderby: l,
    })
      .done(function (e) {
        jQuery("#list").html(e),
          jQuery("input:hidden[name=adminStop]").val(o),
          "1" == o
            ? jQuery("#blockTxt").html("ë³´ê¸°í´ì ")
            : jQuery("#blockTxt").html("ë³´ê¸°"),
          "" != s &&
            jQuery("select[name=ing] > option[value=" + s + "]").attr(
              "selected",
              "true"
            ),
          "" != r &&
            jQuery("select[name=display_page] > option[value=" + r + "]").attr(
              "selected",
              "true"
            ),
          jQuery("input:text[name=word]").val(a),
          "" != i &&
            (jQuery("select[name=cate1] > option[value=" + i + "]").attr(
              "selected",
              "true"
            ),
            WEB_SELLER.cateChange(i)),
          "" != n &&
            jQuery("select[name=cate2] > option[value=" + n + "]").attr(
              "selected",
              "true"
            ),
          jQuery("#orderby").val(l),
          "down_up" == l
            ? jQuery("#down_sort").html("â ë¤ì´ì")
            : "down" == l
            ? jQuery("#down_sort").html("â ë¤ì´ì")
            : "expire_up" == l
            ? jQuery("#expire_sort").html("â ìì¬ì¼")
            : "expire" == l && jQuery("#expire_sort").html("â ìì¬ì¼");
      })
      .fail(function (e, t) {
        APP.PROTOCOL.ajaxError(e, t);
      });
  }),
  (WEB_SELLER.uploadListSort = function (e) {
    var t = jQuery("#orderby").val();
    (t =
      "down" == e
        ? "down" == t
          ? "down_up"
          : "down"
        : "expire_up" == t
        ? "expire"
        : "expire_up"),
      jQuery("#orderby").val(t),
      WEB_SELLER.uploadList(1);
  }),
  (WEB_SELLER.uploadListProc = function (e) {
    var t = [];
    if (
      ($("input[name='chk[]']:checked").each(function () {
        t.push($(this).val());
      }),
      "" == t)
    )
      return alert("ì íë ì»¨íì¸ ê° ììµëë¤."), !1;
    var a = { mode: e, chk: t },
      i = function (e) {
        if ((console.debug(e), "reupload" == e.result)) {
          WEB_UPLOAD.installAXController(APP);
          for (var t = e.userid, a = e.token, i = 0; e.list.length > i; i++)
            nfile_upload(t, a, e.list[i]);
        } else {
          alert(e.msg);
          var n = void 0 != jQuery("#page").val() ? jQuery("#page").val() : 1;
          WEB_SELLER.uploadList(n);
        }
      },
      n = APP.PROTOCOL.URL.SELLER.UPLOAD_LIST_PROC,
      s = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: n,
        success: i,
        error_type: !0,
        loading_bar: !1,
        params: a,
      };
    APP.PROTOCOL.ajaxCall(s, APP);
  }),
  (WEB_SELLER.blockUploadList = function () {
    var e = jQuery("#adminStop").val();
    "0" == e
      ? (jQuery("#adminStop").val(1), jQuery("#blockTxt").html("ë³´ê¸°í´ì "))
      : (jQuery("#adminStop").val(0), jQuery("#blockTxt").html("ë³´ê¸°")),
      WEB_SELLER.uploadList(1);
  }),
  (WEB_SELLER.cateChange = function (e) {
    var t = "";
    if ("" == e) t = '<option value="">ìë¶ë¥</option>';
    else {
      var a = new FC_CATEGORY(),
        i = a.getCategorySubList(e);
      t += '<option value="">ì ì²´</option>';
      for (var n in i)
        t += '<option value="' + i[n].key + '">' + i[n].name + "</option>";
    }
    jQuery("#cate2").html(t);
  }),
  (WEB_SELLER.replyList = function (e) {
    getUrl = APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.SELLER.REPLY_LIST;
    var t =
        void 0 != jQuery("select[name=column]").val()
          ? jQuery("select[name=column]").val()
          : "",
      a =
        void 0 != jQuery("input:text[name=word]").val()
          ? jQuery("input:text[name=word]").val()
          : "";
    $.get(getUrl, { page: e, type: "ajax", column: t, word: a })
      .done(function (e) {
        jQuery("#list").html(e),
          jQuery("input:text[name=word]").val(a),
          jQuery("select[name=column] > option[value=" + t + "]").attr(
            "selected",
            "true"
          );
      })
      .fail(function (e, t) {
        APP.PROTOCOL.ajaxError(e, t);
      });
  }),
  (WEB_SELLER.guideLayer = function (e) {
    FC_MODAL_OPEN("fcSellerGuideModal", !1, e);
  }),
  (WEB_SELLER.guideLayerTab = function (e) {
    for (var t = WEB_SELLER.DATA.seller_guide, a = 0; t.length > a; a++)
      jQuery("#" + t[a]).removeClass("active"),
        jQuery("#" + t[a] + "_tab").css("display", "none");
    if (
      (jQuery("#" + e).addClass("active"),
      jQuery("#" + e + "_tab").css("display", "block"),
      "seller_guide_2" == e)
    ) {
      var i = jQuery("#grade").val(),
        n = jQuery("#display_grade").html();
      jQuery("#seller_info").html(
        '<span class="g_ico type' +
          i +
          '"></span> <span class="txt_gray" id="seller_grade_layer">' +
          i +
          'ë¨ê³</span><span class="bold">' +
          n +
          "</span>"
      ),
        null != jQuery("#seller_point") &&
          jQuery("#seller_point_layer").html(jQuery("#seller_point").val()),
        jQuery("#seller_star").css("display", "block");
      var s = jQuery("#credit_score").val();
      jQuery("#seller_area").attr("title", s + "ì ");
      for (var a = 0; s > a; a++) jQuery("#star" + (a + 1)).addClass("on");
    }
  }),
  (WEB_SELLER.gradeUp = function () {
    var e = function () {
        alert("ë±ìì ì²­ì´ ìë£ ëììµëë¤.\n\nê´ë¦¬ìì ì¹ì¸ì ê¸°ë¤ë ¤ ì£¼ì¸ì."),
          $("#fcSellerGuideModal").modal("hide");
      },
      t = APP.PROTOCOL.URL.SELLER.GRADE_UP,
      a = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: t,
        success: e,
        error_type: !0,
        loading_bar: !1,
      };
    APP.PROTOCOL.ajaxCall(a, APP);
  }),
  (WEB_SELLER.itemList = function (e) {
    getUrl = APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.SELLER.ITEM_LIST;
    var t = jQuery("#kind").val();
    $.get(getUrl, { page: e, type: "ajax", kind: t })
      .done(function (e) {
        jQuery("#list").html(e);
      })
      .fail(function (e, t) {
        APP.PROTOCOL.ajaxError(e, t);
      });
  }),
  (WEB_SELLER.itemLayerTab = function (e) {
    1 == e
      ? (jQuery("#item_guide").removeClass("active"),
        jQuery("#item_use").addClass("active"),
        jQuery("#item_con1").css("display", "block"),
        jQuery("#item_con2").css("display", "none"))
      : (jQuery("#item_guide").addClass("active"),
        jQuery("#item_use").removeClass("active"),
        jQuery("#item_con1").css("display", "none"),
        jQuery("#item_con2").css("display", "block")),
      jQuery("#seller_cash_layer").html(jQuery("#seller_cash").val());
  }),
  (WEB_SELLER.itemLayer = function (e) {
    FC_MODAL_OPEN("fcItemCashModal", !1, e);
  }),
  (WEB_SELLER.procItem = function (e) {
    var t = jQuery("#rank_up_cash").val();
    (e = e ? e : 0),
      t * parseInt(e),
      jQuery("#cnt_rankp").html(setComma(t * parseInt(e)));
  }),
  (WEB_SELLER.procItemCash = function (e) {
    var t = jQuery("#rank_up_cash_sel").val();
    (e = e ? e : 0), jQuery("#cash_rank_up_cnt").html(e);
    var a = t * parseInt(e);
    jQuery("#cash_rank_up_cash").html(a + " ìºì"),
      jQuery("#cash_rank_up_cash1").html(a);
  }),
  (WEB_SELLER.rankUpBuy = function (e) {
    if ("sel_cash" == e) var t = jQuery("#cnt_rankup2").val();
    else var t = jQuery("#cnt_rankup").val();
    if (0 == isDefined(t) || 1 == isNaN(t) || 1 > t)
      return (
        alert("ìì´í ìëì ìë ¥í´ ì£¼ì¸ì."),
        "sel_cash" == e
          ? jQuery("#cnt_rankup2").focus()
          : jQuery("#cnt_rankup").focus(),
        void 0
      );
    var a = { cnt_rankup: t, code: "3", kind: e },
      i = function () {
        $("#fcItemBuyModal").modal("hide"),
          $("#fcItemCashModal").modal("hide"),
          WEB_SELLER.itemList(1),
          alert("ìì´í êµ¬ë§¤ê° ìë£ ëììµëë¤.");
      },
      n = APP.PROTOCOL.URL.SELLER.ITEM_RANKUP_BUY,
      s = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: n,
        success: i,
        error_type: !0,
        loading_bar: !1,
        params: a,
      };
    APP.PROTOCOL.ajaxCall(s, APP);
  }),
  (WEB_SELLER.itemKind = function (e) {
    jQuery("#kind").val(e), WEB_SELLER.itemList(1);
  }),
  (WEB_SELLER.paymentList = function (e) {
    (getUrl =
      APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.SELLER.PAYMENT_LIST),
      $.get(getUrl, { page: e, type: "ajax" })
        .done(function (e) {
          jQuery("#list").html(e);
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_SELLER.paymentGo = function (e, t) {
    if ("1" == e)
      window.open(
        "http://www.pointcash.co.kr/point_in/p_exchange/auth/1353?user_id=" + t
      );
    else {
      if ("2" == e)
        return alert("40,000p ì´ìì´ ëì´ì¼ ì¶ê¸ ì ì²­ì´ ê°ë¥í©ëë¤."), !1;
      "3" == e ? GO_MENU("adultSinup") : alert("ìëª»ë ì ê·¼ìëë¤.");
    }
  }),
  (WEB_SELLER.historyList = function (e) {
    var t =
        void 0 != jQuery("select[name=s_y]").val()
          ? jQuery("select[name=s_y]").val()
          : "",
      a =
        void 0 != jQuery("select[name=s_m]").val()
          ? jQuery("select[name=s_m]").val()
          : "",
      i =
        void 0 != jQuery("select[name=s_d]").val()
          ? jQuery("select[name=s_d]").val()
          : "",
      n =
        void 0 != jQuery("select[name=e_y]").val()
          ? jQuery("select[name=e_y]").val()
          : "",
      s =
        void 0 != jQuery("select[name=e_m]").val()
          ? jQuery("select[name=e_m]").val()
          : "",
      o =
        void 0 != jQuery("select[name=e_d]").val()
          ? jQuery("select[name=e_d]").val()
          : "",
      r =
        void 0 != jQuery("input:text[name=nickname]").val()
          ? jQuery("input:text[name=nickname]").val()
          : "";
    (getUrl =
      APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.SELLER.HISTORY_LIST),
      $.get(getUrl, {
        page: e,
        type: "ajax",
        s_y: t,
        s_m: a,
        s_d: i,
        e_y: n,
        e_m: s,
        e_d: o,
        nickname: r,
      })
        .done(function (e) {
          jQuery("#list").html(e), jQuery("input:text[name=nickname]").val(r);
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_SELLER.bestWordList = function (e) {
    console.log("WEB_SELLER.bestWordList");
    var t =
        void 0 != jQuery("select[name=s_y]").val()
          ? jQuery("select[name=s_y]").val()
          : "",
      a =
        void 0 != jQuery("select[name=s_m]").val()
          ? jQuery("select[name=s_m]").val()
          : "",
      i =
        void 0 != jQuery("select[name=s_d]").val()
          ? jQuery("select[name=s_d]").val()
          : "",
      n =
        void 0 != jQuery("select[name=e_y]").val()
          ? jQuery("select[name=e_y]").val()
          : "",
      s =
        void 0 != jQuery("select[name=e_m]").val()
          ? jQuery("select[name=e_m]").val()
          : "",
      o =
        void 0 != jQuery("select[name=e_d]").val()
          ? jQuery("select[name=e_d]").val()
          : "",
      r = jQuery("#web-seller-best-keywd-cate").val();
    0 == isDefined(r) && (r = 0),
      (getUrl =
        APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.SELLER.BEST_SEARCH_WORD),
      $.get(getUrl, {
        page: e,
        type: "ajax",
        s_y: t,
        s_m: a,
        s_d: i,
        e_y: n,
        e_m: s,
        e_d: o,
        s_cate: r,
      })
        .done(function (e) {
          jQuery("#list").html(e);
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_SELLER.onClickBestWordList = function (e) {
    console.log("WEB_SELLER.onClickBestWordList");
    var t = jQuery(e).data("cate1");
    jQuery("#web-seller-best-keywd-cate").val(t), WEB_SELLER.bestWordList(1);
  }),
  (WEB_SELLER.noticeList = function (e) {
    var t = void 0 != jQuery("#column").val() ? jQuery("#column").val() : "",
      a = void 0 != jQuery("#word").val() ? jQuery("#word").val() : "";
    (getUrl = APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.SELLER.NOTICE_LIST),
      $.get(getUrl, { page: e, type: "ajax", word: a, column: t })
        .done(function (e) {
          jQuery("#list").html(e),
            jQuery("#word").val(a),
            "" != t &&
              jQuery("select[name=column] > option[value=" + t + "]").attr(
                "selected",
                "true"
              );
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_SELLER.noticeViewList = function (e) {
    var t = void 0 != jQuery("#stx").val() ? jQuery("#stx").val() : "",
      a = void 0 != jQuery("#sfl").val() ? jQuery("#sfl").val() : "";
    (getUrl =
      APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.SELLER.NOTICE_VIEW_LIST),
      $.get(getUrl, { page: e, type: "ajax", stx: t, sfl: a })
        .done(function (e) {
          jQuery("#list").html(e),
            jQuery("#stx").val(t),
            "" != a &&
              jQuery("select[name=sfl] > option[value=" + a + "]").attr(
                "selected",
                "true"
              );
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_SELLER.noticeView = function (e, t) {
    (getUrl =
      APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.SELLER.NOTICE_VIEW_LIST),
      $.get(getUrl, { page: t, idx: e, type: "ajax" })
        .done(function (e) {
          jQuery("#list").html(e);
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_SELLER.noticeDel = function (e) {
    var t = { chk: e, type: "seller" },
      a = function (e) {
        e.result > 0 ? alert("ì­ì  ëììµëë¤.") : alert("ì­ì  ëì§ ìììµëë¤."),
          WEB_SELLER.noticeList(1);
      },
      i = APP.PROTOCOL.URL.CS.NOTICE_DELETE,
      n = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: i,
        success: a,
        error_type: !0,
        loading_bar: !1,
        params: t,
      };
    APP.PROTOCOL.ajaxCall(n, APP);
  }),
  (WEB_SELLER.noticeMoveList = function (e) {
    location.href = APP.DEFINE.CI_ROOT + "/seller/#!/?notice_page=" + e;
  }),
  (WEB_SELLER.noticeMoveWrite = function (e) {
    location.href = APP.DEFINE.CI_ROOT + "/seller/#!/?notice_write=" + e;
  }),
  (WEB_SELLER.noticeWriteForm = function (e) {
    (getUrl =
      APP.DEFINE.SERVER_PROTOCOL + APP.PROTOCOL.URL.SELLER.NOTICE_WRITE_FORM),
      $.get(getUrl, { idx: e, type: "ajax" })
        .done(function (e) {
          jQuery("#list").html(e),
            (oEditors = []),
            null == APP && (APP = new FC_APP()),
            nhn.husky.EZCreator.createInIFrame({
              oAppRef: oEditors,
              elPlaceHolder: "sellerNoticeContent",
              sSkinURI:
                APP.DEFINE.HTML_ROOT +
                "/smartEditor2/SmartEditor2Skin_Filecast.php",
              fCreator: "createSEditor2",
            });
        })
        .fail(function (e, t) {
          APP.PROTOCOL.ajaxError(e, t);
        });
  }),
  (WEB_SELLER.noticeSubmit = function () {
    oEditors.getById.sellerNoticeContent.exec("UPDATE_CONTENTS_FIELD", []);
    try {
      WEB_SELLER.noticeReg();
    } catch (e) {}
  }),
  (WEB_SELLER.noticeReg = function () {
    var e = jQuery("#title").val(),
      t = jQuery("#is_ad").val(),
      a = jQuery("#sellerNoticeContent").val();
    if (2 > e.length)
      return alert("ì ëª©ì ìë ¥ í´ì£¼ì¸ì."), jQuery("#title").focus(), !1;
    if (5 > a.length) return alert("ë´ì©ì ìë ¥ í´ì£¼ì¸ì."), !1;
    var i = jQuery("#idx").val(),
      n = { idx: i, title: e, content: a, is_ad: t },
      s = function () {
        alert("ë±ë¡ ëììµëë¤."), window.location.reload(!0);
      },
      o = APP.PROTOCOL.URL.CS.NOTICE_WRITE,
      r = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: o,
        success: s,
        error_type: !0,
        loading_bar: !1,
        params: n,
      };
    return APP.PROTOCOL.ajaxCall(r, APP), !1;
  }),
  (WEB_SELLER.openSellerItemBuyPop = function () {
    FC_MODAL_OPEN("fcItemBuyModal");
  });
var WEB_THEME = {};
(WEB_THEME.DATA = null),
  (WEB_THEME.SCROLL = {}),
  (WEB_THEME.BRO_SCROLL = null),
  (WEB_THEME.SCROLL_FLAG = !1),
  (WEB_THEME.start = function (e, t, a) {
    console.log("WEB_THEME.start"),
      (this.app = e),
      (APP = this.app),
      console.debug(APP),
      console.debug(t),
      console.log(a),
      (WEB_THEME.DATA = t),
      WEB_THEME.loadData(APP, WEB_THEME.DATA);
  }),
  (WEB_THEME.loadData = function (e, t) {
    console.log("WEB_MOVIES.loadPage"),
      console.debug(e),
      WEB_THEME.setIscroll(e),
      WEB_THEME.setPaging(e),
      WEB_THEME.setGotoThemeList(e, t);
  }),
  (WEB_THEME.setGotoThemeList = function (e, t) {
    console.log("WEB_MOVIES.setGotoThemeList"),
      console.debug(e),
      1 == isDefined(t.cate1) &&
        jQuery("#themeAreaList").length &&
        utility.ui.goElement("#themeAreaList", 100, 200);
  }),
  (WEB_THEME.setIscroll = function (e) {
    console.log("WEB_MOVIES.setIscroll"), console.debug(e);
    var t = {},
      a = jQuery(".theme_area").length;
    console.log("themeLength:" + a);
    for (var i = 0; a > i; i++)
      (t[i] = {}),
        (t[i] = {
          key: "T" + i,
          ele: "#theme-iscroll-ele-" + i,
          ctroll: "#theme-iscroll-controll-ele-" + i,
        }),
        (WEB_THEME.SCROLL["T" + i] = null);
    for (
      var n = function (e, t, a) {
          return 5 >= a
            ? (jQuery(t).hide(), void 0)
            : (Math.ceil(a / 5),
              jQuery(t + " .btn_l_prev").unbind("click"),
              jQuery(t + " .btn_l_prev").bind("click", function () {
                e.prev();
              }),
              jQuery(t + " .btn_l_next").unbind("click"),
              jQuery(t + " .btn_l_next").bind("click", function () {
                e.next();
              }),
              jQuery(".fc-left-side-bar").height(
                jQuery("#container").height() - 20
              ),
              void 0);
        },
        s = 0;
      a > s;
      s++
    ) {
      var o = jQuery(t[s].ele + " .theme-item-list-li").length;
      jQuery(t[s].ele + " .theme-item-list-ul").width(150 * o),
        console.log(o),
        console.log(jQuery(t[s].ele + " .theme-item-list-ul").width()),
        0 == isIe8Ver()
          ? (WEB_THEME.SCROLL[t[s].key] = new IScroll(t[s].ele, {
              scrollX: !0,
              scrollY: !1,
              mouseWheel: !1,
              momentum: !1,
              snap: !0,
            }))
          : (jQuery(t[s].ele).css({ overflow: "auto" }),
            jQuery(t[s].ctroll).hide()),
        n(WEB_THEME.SCROLL[t[s].key], t[s].ctroll, o);
    }
  }),
  (WEB_THEME.setPaging = function () {
    if (
      (console.log("setPaging"), !(1 > jQuery("#theme-pagination-info").length))
    ) {
      var e = jQuery("#theme-pagination-info"),
        t = {
          total: e.data("total"),
          page: e.data("page"),
          cate1: e.data("cate1"),
          cate2: e.data("cate2"),
        };
      if ((console.debug(t), !(2 > t.total))) {
        jQuery("#fc-theme-pagination-div").html(
          '<ul id="theme-pagination-contents" class="pagination-sm">'
        );
        var a = 10;
        if (1 > t.total) {
          var a = 1;
          jQuery("#fc-theme-pagination-div").empty();
        }
        var i = function (e, a) {
          console.log(a),
            console.debug(t),
            WEB_THEME.getThemeCate(t.cate1, t.cate2, a, null);
        };
        $("#theme-pagination-contents").twbsPagination({
          startPage: t.page,
          onPageClick: i,
          visiblePages: a,
          totalPages: t.total,
        });
      }
    }
  }),
  (WEB_THEME.getThemeListAjaxData = function (e) {
    console.log("WEB_THEME.getThemeListAjaxData"),
      jQuery("#themeAreaList").html(e),
      jQuery("#theme-iscroll-ele-0").length &&
        (WEB_THEME.setIscroll(APP),
        WEB_THEME.setPaging(APP),
        utility.ui.goElement("#themeAreaList", 100, 200));
  }),
  (WEB_THEME.getThemeGroup = function (e) {
    console.log("WEB_THEME.getThemeGroup"),
      null == APP && (APP = new FC_APP()),
      (APP.DEFINE.AJAX_HTTP_TYPE = "html");
    var t = {
      server: APP.DEFINE.SERVER_PROTOCOL,
      uri: APP.PROTOCOL.URL.THEME.LIST_GROUP + "/" + e,
      success: WEB_THEME.getThemeListAjaxData,
      error_type: !1,
      loading_bar: !1,
      params: {},
    };
    APP.PROTOCOL.ajaxCall(t, APP);
  }),
  (WEB_THEME.getThemeCate = function (e, t, a) {
    console.log("WEB_THEME.getThemeCate"),
      null == APP && (APP = new FC_APP()),
      0 == isDefined(a) && (a = 1),
      (APP.DEFINE.AJAX_HTTP_TYPE = "html");
    var i = {
      server: APP.DEFINE.SERVER_PROTOCOL,
      uri: APP.PROTOCOL.URL.THEME.LIST_CATE,
      success: WEB_THEME.getThemeListAjaxData,
      error_type: !1,
      loading_bar: !1,
      params: { cate1: e, cate2: t, page: a },
    };
    APP.PROTOCOL.ajaxCall(i, APP);
  }),
  (WEB_THEME.getThemeSearch = function (e, t) {
    console.log("WEB_THEME.getThemeSearch");
    var a = null;
    if ((1 == isDefined(e) && (a = e), 1 == isDefined(t))) {
      var i = jQuery(t).data("keyword");
      1 == isDefined(i) && (a = i);
    }
    isDefined(a) &&
      ((a = encodeURI(a)), (location.href = "/www/theme/?theme_search=" + a));
  }),
  (WEB_THEME.getThemeDetailInfo = function (e) {
    console.log("WEB_THEME.getThemeCate"),
      (WEB_THEME.SCROLL_FLAG = !1),
      (WEB_THEME.BRO_SCROLL = null);
    var t = {
      idx: $(e).data("idx"),
      keywd: $(e).data("keywd"),
      ele: $(e).data("ele"),
      type: $(e).data("type"),
    };
    if (jQuery(e).hasClass("active"))
      return (
        jQuery("#" + t.ele).hide(100),
        jQuery(e).children(".btn_l_close").css({ display: "none" }),
        jQuery(e).removeClass("active"),
        void 0
      );
    null == APP && (APP = new FC_APP());
    var a = function (a) {
        console.log("successThemeDetailInfo"),
          console.debug(a),
          jQuery(".btn_l_close").css({ display: "none" }),
          jQuery(".theme-item-list-li").removeClass("active"),
          jQuery(e).addClass("active"),
          jQuery(e).children(".btn_l_close").css({ display: "block" }),
          jQuery(".theme_section").empty().css({ display: "none" }),
          jQuery(".theme_section").removeClass("movie broad");
        var i = "movie",
          n = "",
          s = !0;
        if (isDefined(a.theme_info)) {
          if (0 == isDefined(a.theme_info.movie))
            return alert("ì¼ì¹í ì ë³´ë¥¼ ì°¾ì ì ììµëë¤."), void 0;
          "1" == a.theme_type
            ? (n = TEMPLATE_FUN.themeMovieContentsHtml(a.theme_info.movie))
            : ((n = TEMPLATE_FUN.themeBroadcastContentsHtml(
                a.theme_info.movie,
                a.theme_info.chapter
              )),
              (i = "broad"),
              (s = !1));
        }
        if (
          (jQuery("#" + t.ele)
            .addClass(i)
            .html(n)
            .show(),
          0 == s)
        ) {
          var o =
              "#fc-theme-bro-chapter-list-iscroll-" + a.theme_info.movie.idx,
            r = "#fc-theme-brocast-paging-div";
          if (isDefined(a.theme_info.chapter)) {
            var l = a.theme_info.chapter,
              c = {
                page: l.page,
                limit: l.limit,
                bro_idx: a.theme_info.movie.idx,
                sort: l.sort,
                total_page: l.total_page,
                ele: o,
              };
            console.debug(c), jQuery(r).data(c);
          }
          console.log("scrollEle::" + o),
            1 == isDefined(a.theme_info.chapter.list) &&
              a.theme_info.chapter.list.length > 0 &&
              (jQuery(".fc-theme-bro-chapter-title").show(),
              setTimeout(function () {
                WEB_THEME.setIScrollBroascastList(o, !0);
              }, 500));
        }
        var d = $("html,body");
        d.animate({ scrollTop: $(e).offset().top }, 500);
      },
      i = {
        server: APP.DEFINE.SERVER_PROTOCOL,
        uri: APP.PROTOCOL.URL.THEME.LIST_DETAIL,
        success: a,
        error_type: !1,
        loading_bar: !0,
        params: { idx: t.idx, keywd: t.keywd, type: t.type },
      };
    APP.PROTOCOL.ajaxCall(i, APP);
  }),
  (WEB_THEME.setIScrollBroascastList = function (e, t) {
    if (!(1 > jQuery(".fc-theme-bro-chapter-title").length)) {
      if (
        (1 == t && (WEB_THEME.BRO_SCROLL = null), null != WEB_THEME.BRO_SCROLL)
      )
        return WEB_THEME.BRO_SCROLL.refresh(), void 0;
      var a = jQuery(e + " .fc-theme-iscroll-li").length;
      5 > a ||
        (jQuery(e + " .fc-theme-iscroll-ul").width(187 * a),
        (WEB_THEME.BRO_SCROLL = null),
        (WEB_THEME.BRO_SCROLL = new IScroll(e, {
          scrollX: !0,
          scrollY: !1,
          mouseWheel: !1,
          momentum: !1,
          snap: !0,
        })),
        WEB_THEME.BRO_SCROLL.on("scrollEnd", function () {
          console.log("scroll ended"),
            console.log(this.currentPage),
            this.currentPage,
            this.currentPage,
            console.log("this.maxScrollX:" + this.maxScrollX),
            console.log("this.x:" + this.x),
            this.x <= this.maxScrollX &&
              0 == WEB_THEME.SCROLL_FLAG &&
              ((WEB_THEME.SCROLL_FLAG = !0),
              WEB_THEME.getMoreBrocastList(e, !1));
        }),
        jQuery(".fc-theme-bro-iscroll-btn .prev").unbind("click"),
        jQuery(".fc-theme-bro-iscroll-btn .prev").bind("click", function () {
          WEB_THEME.BRO_SCROLL && WEB_THEME.BRO_SCROLL.prev();
        }),
        jQuery(".fc-theme-bro-iscroll-btn .next").unbind("click"),
        jQuery(".fc-theme-bro-iscroll-btn .next").bind("click", function () {
          WEB_THEME.BRO_SCROLL.x <= WEB_THEME.BRO_SCROLL.maxScrollX &&
          0 == WEB_THEME.SCROLL_FLAG
            ? ((WEB_THEME.SCROLL_FLAG = !0),
              WEB_THEME.getMoreBrocastList(e, !1, !0))
            : WEB_THEME.BRO_SCROLL && WEB_THEME.BRO_SCROLL.next();
        }));
    }
  }),
  (WEB_THEME.getMoreBrocastList = function (e, t, a) {
    console.log("WEB_CONTENTS.getMoreBrocastList");
    var i = "#fc-theme-brocast-paging-div",
      n = parseInt(jQuery(i).data("page")) + 1;
    1 == t && (n = 1);
    var s = {
      page: n,
      limit: jQuery(i).data("limit"),
      bro_idx: jQuery(i).data("bro_idx"),
      sort: jQuery(i).data("sort"),
      total_page: jQuery(i).data("total_page"),
    };
    if ((console.debug(s), !(parseInt(s.total_page) < parseInt(s.page)))) {
      var o = function (n) {
          console.debug(n),
            jQuery(i).data("page", n.bro_data.page),
            jQuery(i).data("sort", n.bro_data.sort),
            (WEB_THEME.SCROLL_FLAG = !1);
          var s = n.bro_data.list;
          if (!(1 > s.length)) {
            for (var o = [], r = 0; s.length > r; r++)
              o.push(TEMPLATE_FUN.viewBroChapterListHtml(s[r], "theme"));
            if (
              (1 == t
                ? jQuery(e + " .fc-theme-iscroll-ul").html(o)
                : jQuery(e + " .fc-theme-iscroll-ul").append(o),
              null != WEB_THEME.BRO_SCROLL)
            ) {
              var l = jQuery(e).find(".fc-theme-iscroll-li").length;
              jQuery(e + " .fc-theme-iscroll-ul").width(187 * l),
                WEB_THEME.BRO_SCROLL.refresh(),
                1 == a && WEB_THEME.BRO_SCROLL.next();
            }
          }
        },
        r = new FC_APP(),
        l = {
          server: r.DEFINE.SERVER_PROTOCOL,
          uri: r.PROTOCOL.URL.SEARCH.BRO_MORE,
          success: o,
          error_type: !1,
          loading_bar: !0,
          params: s,
        };
      r.PROTOCOL.ajaxCall(l, r);
    }
  }),
  (WEB_THEME.onClickBrocastSort = function (e) {
    console.log("WEB_THEME.onClickBrocastSort");
    var t = jQuery(e).data("sort"),
      a = jQuery("#fc-theme-brocast-paging-div").data("ele");
    jQuery("#fc-theme-brocast-paging-div").data("sort", t),
      jQuery(".fc-bc-sort").removeClass("active"),
      jQuery(e).addClass("active"),
      setTimeout(function () {
        WEB_THEME.getMoreBrocastList(a, !0, !1);
      }, 100);
  }),
  (WEB_THEME.closeThemeDetailInfo = function () {
    console.log("WEB_THEME.closeThemeDetailInfo"),
      jQuery(".btn_l_close").hide(),
      jQuery(".theme-item-list-li").removeClass("active"),
      jQuery(".theme_section").hide(300).empty(),
      jQuery(".theme_section").removeClass("movie broad"),
      (WEB_THEME.SCROLL_FLAG = !1),
      (WEB_THEME.BRO_SCROLL = null);
  }),
  (WEB_THEME.voteTheme = function (e) {
    console.log("COMMENTLIST_FUN.likeComment");
    var t = { idx: jQuery(e).data("idx") },
      a = function (t) {
        var a = parseInt(jQuery(e).find(".vote-num").html());
        jQuery(e)
          .find(".vote-num")
          .text(a + parseInt(t.update_data.count)),
          alert("ê³µê°í´ì£¼ìì ê°ì¬í©ëë¤.\në¹ì ì ê³µê°ì´ ìë¡ëìê² í° íì´ ë©ëë¤.");
      };
    null == APP && (APP = new FC_APP());
    var i = {
      server: APP.DEFINE.SERVER_PROTOCOL,
      uri: APP.PROTOCOL.URL.THEME.VOTE,
      success: a,
      error_type: !1,
      loading_bar: !1,
      params: t,
    };
    APP.PROTOCOL.ajaxCall(i, APP);
  }),
  (WEB_THEME.clickBroadcastContentsSelect = function (e) {
    console.log("clickBroadcastContentsSelect"),
      jQuery(e).hasClass("active")
        ? (jQuery(".fc-theme-brocast-chapter-select-list").hide(),
          jQuery(e).removeClass("active"))
        : (jQuery(".fc-theme-brocast-chapter-select-list").show(),
          jQuery(e).addClass("active"));
  });
/*
page: http://www.filecast.co.kr/
url: http://static.filecast.co.kr/__release/js/web.01.12.02.filecast.min.js
*/
