var W = window;
var D = W.document;
var DA = D.all;
var a = 0;
var offsetX = 0;
var offsetY = 0;

var NAVIGATOR = 0;
x = navigator.userAgent;
if (x.indexOf("MSIE") > 0 && x.indexOf("Opera") <= 0) NAVIGATOR = 1;
else NAVIGATOR = 0;

function go(url, opt, w, h, s, r) {
  if (!url) return false;
  if (opt == 1) {
    if (!w) w = 700;
    if (!h) h = 400;
    if (!s) s = 1;
    else s = 0;
    if (!r) r = 1;
    else r = 0;
    l = (screen.width - w) / 2;
    t = (screen.height - h) / 2;

    window.open(
      url,
      "_blank",
      "toolbar=0,scrollbars=" +
        s +
        ",resizable=" +
        r +
        ",left=" +
        l +
        ",top=" +
        t +
        ",width=" +
        w +
        ",height=" +
        h
    );
  } else if (opt == 2) {
    window.open(url, "_blank");
  } else if (opt == 3) {
    var wd = window.open(
      url,
      "_blank",
      "fullscreen=1, scrollbars=1, toolbar=0, resizable=1"
    );
  } else {
    window.location.href = url;
  }
}

function get_object_offset(obj) {
  var x = (y = 0);
  while (true) {
    x += obj.offsetLeft;
    y += obj.offsetTop;
    if (!obj.offsetParent) break;
    obj = obj.offsetParent;
  }
  offsetX = x;
  offsetY = y;
}

function move_div() {
  var o = document.getElementById("head_line");
  var div = document.getElementById("sec_div");
  if (!o || !div) return false;
  get_object_offset(o);
  div.style.top = offsetY - 1 + "px";
  div.style.left = offsetX + "px";
  div.style.width = o.clientWidth - 2 + "px";
}

function m(url, obj) {
  alert(1);
  var width = 680;
  var height = 450;
  var w = screen.width;
  if (w >= 1024) {
    width = 720;
    height = 600;
  }
  var l = (screen.width - width) / 2;
  var t = (screen.height - height) / 2 - 30;
  //window.open( url, "_blank", "toolbar=0,scrollbars=1,resizable=1,left="+l+",top="+t+",width="+width+",height="+height );
  window.open(url, "_blank");

  event.returnValue = false;
  return true;
}

function clear_cookie(cname) {
  document.cookie = cname + ' = ""; domain=my.ss.lv; path=/ expires=0';
}

function show_data(lg, key, data, mod) {
  if (!mod) window.close();
  go("/" + lg + "/search_result/index.html?" + key + "=" + data, 2);
}

function wopen(url, target, w, h, asize, title, res, rett) {
  if (!url) {
    event.cancelBubble = true;
    event.returnValue = false;
    return;
  }
  if (!target) target = "_blank";
  if (!w) w = 500;
  if (!h) h = 400;
  if (!title) title = "";

  w = parseInt(w, 10);
  h = parseInt(h, 10);
  if (asize) asize = true;
  else asize = false;

  var aw = screen.availWidth;
  var ah = screen.availHeight;
  if (w > aw) w = aw;
  if (h > ah) h = ah;

  if (res) r = 0;
  else r = 1;

  var left = Math.round((aw - w) / 2);
  var top = Math.round((ah - h) / 2);

  var wd = window.open(
    url,
    target,
    "channelmode= 0, directories=0, height=" +
      h +
      "px, width=" +
      w +
      "px, location=0, menubar=0, resizable=" +
      r +
      ", scrollbars=1, status=0, toolbar=0, top=" +
      top +
      "px, left=" +
      left +
      "px"
  );
  if (!asize) {
    if (rett) return wd;
    else return false;
  }

  if (url.indexOf(window.location.host) != -1 || url.indexOf("http://") == -1)
    wd.attachEvent("onload", function () {
      resize_new_win(wd, asize, title);
    });
}

function winopen(url, target) {
  if (!url) {
    return false;
  }

  if (!target) {
    target = "_blank";
  }
  var wd = window.open(url, target);
}

function printflash(txt) {
  document.write(txt);
}

//code speed detector
function explain(func) {
  var START = new Date();
  START = Date.parse(START) + START.getMilliseconds();

  func();

  var END = new Date();
  END = Date.parse(END) + END.getMilliseconds();

  return END - START + " ms";
}

function create_element(type, id, father, add) {
  if (!father) father = document.body;
  if (!add) add = "";
  var newElem = document.createElement(type);
  newElem.id = id;
  if (add != "") {
    add = "\
		with( newElem ) {\
			" + add + "\
		}";
    eval(add);
  }
  father.appendChild(newElem);
  return newElem;
}

function preg_quote(reg) {
  return reg.replace(/([\.\\\+\*\?\[\^\]\$\(\)\{\}\|])/g, "\\$1");
}

//universal all-selector for checkboxes
function select_all(obj, name, callback) {
  if (!name) name = false;
  var f = obj.form;
  var mm = false;
  if (name) {
    mm = new RegExp(preg_quote(name, "i"));
  }
  if (
    callback &&
    typeof callback != "function" &&
    typeof callback != "object"
  ) {
    callback = false;
  }

  for (var i = 0; i < f.length; i++) {
    if (f[i] == obj) continue;
    if (!/checkbox/i.test(f[i].type)) continue;
    if (mm && !mm.test(f[i].name)) continue;
    //	if( f[i].checked == obj.checked ) continue;

    f[i].checked = obj.checked;
    if (callback) callback(f[i], obj);
  }
}

//checks if any checkbox is checked
function any_checked(f, name) {
  name = name ? new RegExp(preg_quote(name)) : false;
  for (var i = 0; i < f.length; i++) {
    if (f[i].type != "checkbox") continue;
    if (name && !name.test(f[i].name)) continue;
    if (!f[i].checked) continue;
    return true;
  }
  return false;
}

function alert_r(obj, inline, callcnt) {
  if (!inline) inline = false;
  if (!callcnt) callcnt = 0;

  var type = typeof obj;
  if (type != "array" && type != "object") {
    if (inline) {
      return obj;
    }
    alert(obj);
    return;
  }

  var sep = "";
  for (var i = 0; i < callcnt; i++) {
    sep += "\t";
  }

  var r = "";
  r += type + " (" + sep + "\n";
  for (var i in obj) {
    try {
      //	if( !/height/i.test(i) ) continue;
      //r += sep + "\t" + "[" + i + "] = " + alert_r( obj[i], 1, callcnt + 1 ) + "\n";
      r += sep + "\t" + "[" + i + "] = " + obj[i] + "\n";
    } catch (e) {}
  }
  r += sep + ")\n";

  if (inline) {
    return r;
  }

  alert(r);
}

function number_format(number, decimals, dec_point, thousands_sep) {
  var exponent = "";
  var numberstr = number.toString();
  var eindex = numberstr.indexOf("e");
  var i, z;
  if (eindex > -1) {
    exponent = numberstr.substring(eindex);
    number = parseFloat(numberstr.substring(0, eindex));
  }

  if (decimals != null) {
    var temp = Math.pow(10, decimals);
    number = Math.round(number * temp) / temp;
  }
  var sign = number < 0 ? "-" : "";
  var integer = (number > 0
    ? Math.floor(number)
    : Math.abs(Math.ceil(number))
  ).toString();

  var fractional = number.toString().substring(integer.length + sign.length);
  dec_point = dec_point != null ? dec_point : ".";
  fractional =
    (decimals != null && decimals > 0) || fractional.length > 1
      ? dec_point + fractional.substring(1)
      : "";
  if (decimals != null && decimals > 0) {
    for (i = fractional.length - 1, z = decimals; i < z; ++i) fractional += "0";
  }

  thousands_sep =
    thousands_sep != dec_point || fractional.length == 0 ? thousands_sep : null;
  if (thousands_sep != null && thousands_sep != "") {
    for (i = integer.length - 3; i > 0; i -= 3)
      integer = integer.substring(0, i) + thousands_sep + integer.substring(i);
  }
  return sign + integer + fractional + exponent;
}

function _price(price, discounts, round) {
  if (round == null) round = true;
  if (discounts == null) discounts = [];

  price = parseFloat(price);

  for (var i = 0; i < discounts.length; i++) {
    price *= 1 - discounts[i] / 100;
  }

  if (!round) return price / 100;
  return number_format(price / 100, 2, ".", "");
}

//v2.0
function getChildsByTagName(name, obj, near) {
  if (!obj) obj = document.body;
  var reg = name.match(/([a-z]+[0-9]*)/gi);
  if (!reg) return [];
  reg = new RegExp("^(" + reg.join("|") + ")$", "i");

  var ret = [];
  var cld = obj.childNodes;
  for (var i = 0; i < cld.length; i++) {
    if (reg.test(cld[i].tagName)) {
      ret.push(cld[i]);
      if (near) continue;
    }
    ret = ret.concat(getChildsByTagName(name, cld[i], near));
  }
  return ret;
}

function getParentByTagName(name, obj) {
  name = name.toUpperCase();

  var prnt = obj.parentNode;
  if (!prnt) return false;
  if (prnt.tagName == name) return prnt;
  return getParentByTagName(name, prnt);
}

function msie6_png(obj) {
  if (!window.clientInformation) return;
  var v = window.clientInformation.appVersion.match(/MSIE\s+([0-9]+)/i);
  //if( !v && !v[1] ) return;
  if (!v || !v[1]) return; //Maks 7.10.2014. Rugalsja IE debuger
  if (v[1] > 6) return;
  if (!/\.png/i.test(obj.src)) return;

  with (obj) {
    style.filter =
      "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" +
      src +
      ",sizingMethod=crop)";
    src = "/img/p.gif";
  }
}

function get_numeric_string(num, cnt10, cnt1, cnt2) {
  if (!cnt10) cnt10 = "items";
  if (!cnt1) cnt1 = "item";
  if (!cnt2) cnt2 = "items";

  var label = /:l:/i;
  var n = parseInt(num);
  if (n > 10 && n < 20)
    return label.test(cnt10) ? cnt10.replace(label, num) : num + " " + cnt10;
  var s = num.toString();
  var l = parseInt(s.replace(/^.*(.)$/, "$1"));

  if (l == 1) return label.test(cnt1) ? cnt1.replace(label, s) : s + " " + cnt1;
  if (l > 1 && l < 5)
    return label.test(cnt2) ? cnt2.replace(label, s) : s + " " + cnt2;
  if ((l > 4 && l <= 9) || l == 0)
    return label.test(cnt10) ? cnt10.replace(label, s) : s + " " + cnt10;
}

//gets actual label object
function get_label(obj) {
  var el = document.getElementsByTagName("label");
  for (var i = 0; i < el.length; i++) {
    if (el[i].htmlFor != obj.id) continue;
    return el[i];
  }
  return false;
}

function _display(id, set) {
  if (typeof _DISPLAY == "undefined") _DISPLAY = {};
  if (!_DISPLAY[id]) _DISPLAY[id] = document.getElementById(id);
  if (!_DISPLAY[id]) return false;

  _DISPLAY[id].style.display = set ? "" : "none";
  return _DISPLAY[id];
}

//accociative array
function assoc_array_length(obj) {
  if (typeof obj != "array" && typeof obj != "object") return 0;
  var len = 0;
  for (var i in obj) len++;
  return len;
}
function assoc_array_sum(obj) {
  if (typeof obj != "array" && typeof obj != "object") return 0;
  var sum = 0;
  for (var i in obj) {
    if (/^\-?[0-9]+$/.test(obj[i])) {
      sum += parseInt(obj[i]);
    } else sum += parseFloat(obj[i]);
  }
  return sum;
}

//x-browser range element v1.0
function input_range(obj) {
  //check for necessarity
  var tst = document.createElement("input");
  try {
    tst.type = "range";
    if (tst.type == "range") {
      delete tst;
      return;
    }
  } catch (e) {}
  delete tst;

  //detect elements
  var els = [];
  if (obj) {
    if (
      typeof obj == "object" &&
      obj.tagName == "INPUT" &&
      obj.getAttribute("type").toLowerCase() == "range"
    ) {
      els.push(obj);
    } else return;
  } else {
    var ii = document.getElementsByTagName("input");
    for (var i = 0; i < ii.length; i++) {
      if (ii[i].getAttribute("type").toLowerCase() != "range") continue;
      els.push(ii[i]);
    }
  }

  //begin
  var v, el, html, attr, size, tmp;
  for (var k = 0; k < els.length; k++) {
    v = els[k];

    //size
    tmp = v.currentStyle ? v.currentStyle : getComputedStyle(v, null);
    size = [0, 0];
    size[0] =
      v.scrollWidth +
      parseInt(tmp.paddingLeft) +
      parseInt(tmp.paddingRight) +
      parseInt(tmp.borderLeftWidth) +
      parseInt(tmp.borderRightWidth) -
      2;
    size[1] =
      v.scrollHeight +
      parseInt(tmp.paddingTop) +
      parseInt(tmp.paddingBottom) +
      parseInt(tmp.borderTopWidth) +
      parseInt(tmp.borderBottomWidth);

    //prev values
    attr = [];
    attr["val"] = /^\-?[0-9]+$/.test(v.value) ? Math.ceil(v.value) : 50;
    attr["vmin"] = v.getAttribute("min");
    attr["vmax"] = v.getAttribute("max");
    attr["vstep"] = v.getAttribute("step");
    if (attr["vmin"] === null) attr["vmin"] = 0;
    if (attr["vmax"] === null) attr["vmax"] = 100;
    if (attr["vstep"] === null) attr["vstep"] = 1;
    attr["runner"] = 10; //runner width
    attr["max"] = size[0] - attr["runner"];

    attr["mrg"] =
      ((attr["val"] - attr["vmin"]) / (attr["vmax"] - attr["vmin"])) * 100;
    attr["mrg"] *= attr["max"];
    attr["mrg"] =
      (Math.round(attr["mrg"] / attr["vstep"]) * attr["vstep"]) / 100;
    attr["mrg"] = Math.round(attr["mrg"]);

    //emulation
    el = document.createElement("div");
    el.style.display = v.currentStyle ? "inline" : "inline-block"; //MSIE/FFox
    el.style.cursor = "default";
    el.style.width = size[0] + "px";
    el.style.height = size[1] + "px";

    tmp = v.scrollHeight;
    el.onselectstart = function () {
      return false;
    };
    v.parentNode.replaceChild(el, v);

    //runner
    html =
      '<div style="background-color: buttonface; border: 1px outset; position: absolute; margin-top: -1px; margin-left: ' +
      attr["mrg"] +
      "px;" +
      " -moz-user-select: none; -khtml-user-select: none; user-select: none;" +
      " height: " +
      tmp +
      "px; width: " +
      attr["runner"] +
      'px;"' +
      "></div>" +
      '<hr width="' +
      size[0] +
      '">';

    el.innerHTML = html;
    el.childNodes[0].onmousedown = function (e) {
      if (!e) e = event;
      XPOSITION = (e.x ? e.x : e.clientX) - parseInt(this.style.marginLeft);
      MOVEELEMENT = this;

      document.body.onmousemove = function (e) {
        if (!e) e = event;

        var v = MOVEELEMENT.parentNode.childNodes[2];

        var vmin = v.getAttribute("min");
        var vmax = v.getAttribute("max");
        var vstep = v.getAttribute("step");
        if (vmin === null) vmin = 0;
        if (vmax === null) vmax = 100;
        if (vstep === null) vstep = 1;
        var max =
          parseInt(MOVEELEMENT.parentNode.style.width) -
          parseInt(MOVEELEMENT.style.width);
        var mrg = (e.x ? e.x : e.clientX) - XPOSITION;
        if (mrg > max) mrg = max;
        if (mrg < 0) mrg = 0;
        var mrgstep = (max / (vmax - vmin)) * vstep;
        MOVEELEMENT.style.marginLeft =
          Math.round(Math.round(mrg / mrgstep) * mrgstep) + "px";

        //element form change
        var val = Math.ceil(vmin) + Math.round((mrg / max) * (vmax - vmin));
        val = Math.round(val / vstep) * vstep;
        v.value = val;
        v.onchange();
      };

      document.body.onmouseup = function () {
        document.body.onmousemove = null;
      };
    };

    v.style.display = "none";
    el.appendChild(v);
  }
}

//ÑÐ¼ÑÐ»ÑÑÐ¸Ñ Ð°Ð»ÐµÑÑÐ°
function alert2(txt, ashtml) {
  //v1.1
  var cc = arguments.callee;
  txt = /^(undefined)$/i.test(typeof txt) ? typeof txt : txt.toString();

  //HTML
  if (!cc.ALERT) {
    //ÑÐ°Ð¼ Ð°Ð»ÐµÑÑ
    cc.ALERT = document.createElement("div");
    cc.ALERT.style.position = "absolute";
    cc.ALERT.style.zIndex = 201;
    cc.ALERT.style.borderRadius = "10px";
    cc.ALERT.style.boxShadow = "0px 0px 10px black";
    cc.ALERT.style.padding = "10px";
    cc.ALERT.style.backgroundColor = "buttonface";
    cc.ALERT.style.top = "0px";
    cc.ALERT.style.left = "0px";
    cc.ALERT.style.textAlign = "center";
    cc.ALERT.innerHTML =
      '<div style="text-align: left; margin-bottom: 10px; swidth: 1px; white-space: nowrap;"></div>'; //text
    document.body.appendChild(cc.ALERT);

    //OK button
    var btn = document.createElement("button");
    btn.innerHTML = "OK";
    btn.style.width = "100px";
    btn.onclick = function () {
      this.parentNode.style.display = "none";
      cc.ALERT_BG.style.display = "none";
    };
    cc.ALERT.appendChild(btn);

    //ÑÐ¾Ð½
    cc.ALERT_BG = document.createElement("div");
    cc.ALERT_BG.style.backgroundColor = "black";
    cc.ALERT_BG.className = "alpha60";
    cc.ALERT_BG.style.position = "absolute";
    cc.ALERT_BG.style.zIndex = 200;
    cc.ALERT_BG.style.width = "100%";
    cc.ALERT_BG.style.height = "100%";
    cc.ALERT_BG.style.left = "0px";
    cc.ALERT_BG.style.top = "0px";
    document.body.appendChild(cc.ALERT_BG);
  }
  //Ð·Ð°Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ðµ Ð¸ Ð²ÑÐ²Ð¾Ð´
  cc.ALERT.childNodes[0].innerHTML = ashtml
    ? txt
    : txt.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
  cc.ALERT.style.display = "";
  cc.ALERT_BG.style.display = "";
  cc.ALERT.childNodes[1].focus(); //ÑÐ¾ÐºÑÑÐ¸Ð¼ ÐºÐ½Ð¾Ð¿ÐºÑ ÐÐ
  cc.ALERT.style.left =
    Math.round(
      (parseInt(document.body.offsetWidth) - parseInt(cc.ALERT.scrollWidth)) / 2
    ) +
    document.body.scrollLeft +
    "px";
  cc.ALERT.style.top =
    Math.round(
      (parseInt(document.body.offsetHeight) - parseInt(cc.ALERT.scrollHeight)) /
        2
    ) +
    document.body.scrollTop +
    "px";
}

function htmlspecialchars(txt) {
  return txt.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function _debug(txt, add) {
  var cc = arguments.callee;
  if (!cc.obj) {
    cc.obj = document.createElement("DIV");
    with (cc.obj) {
      expand = true;
      style.zIndex = 100000;
      style.backgroundColor = "buttonface";
      style.border = "outset 2px;";
      style.right = "0px";
      style.bottom = "0px";
      style.width = "400px";
      style.height = "400px";
      style.padding = "5px";
      style.position = "fixed";
      style.cssText += ";//position: absolute";
      style.cssText +=
        ';//margin-top: expression( parseInt( document.body.scrollTop ) + "px" )';
      style.cssText +=
        ';//margin-left: expression( parseInt( document.body.scrollLeft ) + "px" )';
      innerHTML =
        '<a style="position: absolute; margin-top: -13px; font-size: 11px; text-decoration: none; color: blue;' +
        ' background-color: buttonface; font-family: Verdana;" href="javascript:;" ' +
        "onclick=\"with( parentNode ) {expand = !expand; style.height = expand ? '400px' : '20px';}\">ÑÐºÑÑÑÑ/Ð¿Ð¾ÐºÐ°Ð·Ð°ÑÑ</a>" +
        '<textarea wrap="off" style="font-family: Lucida console; font-size: 11px; overflow: auto; width: 390px; height: 98%;" ' +
        'id="debug_ta"></textarea>';
    }
    document.body.appendChild(cc.obj);
    cc.txt = document.getElementById("debug_ta");
  }
  txt = alert_r(txt, 1);
  if (add) cc.txt.value += txt + "\n";
  else cc.txt.value = txt + "\n";
  cc.txt.scrollTop = 100000000000;
}
/*
page: http://www.sys.lv/
url: https://ads.sys.lv/jss/main.js?4
*/
