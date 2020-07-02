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
    return wd;
  }

  if (url.indexOf(window.location.host) != -1 || url.indexOf("http://") == -1)
    wd.attachEvent("onload", function () {
      resize_new_win(wd, asize, title);
    });
  return wd;
}

//php analog
function setcookie(name, value, expire, path, domain) {
  if (!name) return;
  if (!path) path = "/";
  if (!domain)
    domain = "." + location.host.replace(/^(.*\.)?([^\.]+\.[^\.]+)$/, "$2");
  if (value === "" || value == null) expire = strtotime("2000-02-25"); //past

  var set = name + "=" + value;
  set += ";path=" + path;
  set += ";Domain=" + domain;
  if (expire) {
    expire = date("l,d-M-Y H:i:s", expire);
    set += ";expires=" + expire;
  }
  document.cookie = set;
}

function month_length(date) {
  var dm = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var yy = date.getFullYear();
  if ((yy % 4 == 0 && yy % 100) || yy % 400 == 0) dm[1] = 29;
  return dm[date.getMonth()];
}

function strtotime(date) {
  var m = date.match(
    /^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(\s([0-9]{1,2}):([0-9]{1,2})(:([0-9]{1,2}))?)?$/
  );
  if (!m) return new Date();

  if (!m[4]) return new Date(m[1], m[2] - 1, m[3]);
  return new Date(m[1], m[2] - 1, m[3], m[5], m[6], m[7] ? m[8] : 0);
}

function date(format, time) {
  if (!time) time = new Date();
  var ret = format;
  with (time) {
    ret = ret.replace(/(^|[^\\])Y/g, _esc("$1" + getFullYear()));
    ret = ret.replace(/(^|[^\\])m/g, _esc("$1" + withnull(getMonth() + 1)));
    ret = ret.replace(/(^|[^\\])n/g, _esc("$1" + (getMonth() + 1)));
    ret = ret.replace(/(^|[^\\])d/g, _esc("$1" + withnull(getDate())));
    ret = ret.replace(/(^|[^\\])H/g, _esc("$1" + withnull(getHours())));
    ret = ret.replace(/(^|[^\\])i/g, _esc("$1" + withnull(getMinutes())));
    ret = ret.replace(/(^|[^\\])s/g, _esc("$1" + withnull(getSeconds())));
    ret = ret.replace(/(^|[^\\])j/g, _esc("$1" + getDate()));
    ret = ret.replace(/(^|[^\\])G/g, _esc("$1" + getHours()));
    ret = ret.replace(/(^|[^\\])w/g, _esc("$1" + getDay()));
    ret = ret.replace(
      /(^|[^\\])y/g,
      _esc(
        "$1" +
          getFullYear()
            .toString()
            .replace(/^[0-9]{2}([0-9]{2})$/, "$1")
      )
    );
    ret = ret.replace(/(^|[^\\])t/g, _esc("$1" + month_length(time)));
    ret = ret.replace(
      /(^|[^\\])M/g,
      _esc("$1" + toUTCString().replace(/^[^0-9]+[0-9]+\s*([a-z]{3}).+/i, "$1"))
    ); //Jul
    ret = ret.replace(
      /(^|[^\\])l/g,
      _esc(
        "$1" +
          [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ][getDay() - 1]
      )
    );
  }
  return ret.replace(/\\/g, "");

  function withnull(num) {
    return ("0" + num).replace(/^.?(..)$/, "$1");
  }
  function _esc(val) {
    return val.replace(/([YmndHisjGwytMl])/g, "\\$1");
  }
}

//#########################################################

function go(url) {
  if (url) {
    top.location.href = url;
  }
}

//#########################################################

function winfull(url, target) {
  if (!url) return false;
  var addu = "";
  if (screen.width >= 1024 && screen.height >= 768) addu = "&size=1";
  if (!target) target = "_blank";

  var nofs = "";
  if (window.chrome)
    nofs =
      ",width=" +
      screen.availWidth +
      ",height=" +
      screen.availHeight +
      ",left=0,top=0";
  var ww = window.open(
    url + addu,
    target,
    "fullscreen=1,scrollbars=1,toolbar=0,resizable=1" + nofs
  );
  if (window.chrome) ww.resizeTo(screen.availWidth, screen.availHeight);
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

//##########################################################

function up(obj) {
  if (!obj) {
    document.body.scrollTop = document.body.scrollHeight + 500;
    return;
  }
  obj.scrollTop = obj.scrollHeight;
}

//################################################

function wresize(w, h) {
  if (!w || !h) return false;
  self.resizeTo(w, h);
  self.moveTo(
    (screen.availWidth - document.body.clientWidth) / 2,
    (screen.availHeight - document.body.clientHeight) / 2
  );
}

//################################################

function photo_menu(foto_id, e, type, uid) {
  if (!e) e = event;
  if (!type) type = 0;
  if (!uid) uid = 0;

  var acm = document.getElementById("show_adm_cm");
  if (!acm || window.innerHeight) {
    //Ð»Ð¸Ð±Ð¾ Ð½Ðµ IE
    acm = create_element("SCRIPT", "show_adm_cm");
  }

  if (acm) {
    var xx = e.clientX; //e.x ? e.x : e.pageX;
    var yy = e.clientY; //e.y ? e.y : e.pageY;

    acm.src =
      "/jss/pmenu.js?foto_id=" +
      foto_id +
      "&xx=" +
      xx +
      "&yy=" +
      yy +
      (uid ? "&uid=" + uid : "") +
      (type ? "&type=" + type : "") +
      "&" +
      new Date().getTime();
  }
}

//################################################

function destroy_element(id) {
  var el = false;
  if (/object/.test(typeof id)) el = id;
  else el = document.getElementById(id);
  if (el) {
    el.outerHTML = "";
  }
}

//################################################

function create_element(type, id, father, add) {
  if (!father) father = document.body;
  if (!add) add = "";
  var newElem = document.createElement(type);
  newElem.id = id;
  eval(add);
  father.appendChild(newElem);
  return newElem;
}

//################################################

var EX_INFO = false;
function get_menu(html, x, y, nofilter) {
  var ww = document.body.scrollWidth;
  var hh = document.body.scrollHeight;

  if (!EX_INFO) {
    EX_INFO = create_element("DIV", "admin_contextmenu");
    EX_INFO.style.display = "none";
  }

  if (!x) x = 0;
  if (!y) y = 0;
  var xx = x + document.body.scrollLeft;
  var yy = y + document.body.scrollTop;

  if (!EX_INFO) {
    return;
  }
  EX_INFO.innerHTML = html;
  EX_INFO.style.position = "absolute";
  EX_INFO.style.display = "";
  if (EX_INFO.scrollWidth + xx > ww) xx = ww - EX_INFO.scrollWidth;
  if (EX_INFO.scrollHeight + yy > hh) yy = hh - EX_INFO.scrollHeight;
  EX_INFO.style.top = yy;
  EX_INFO.style.left = xx;
  EX_INFO.style.zIndex = 100;
  EX_INFO.style.textAlign = "center";
  if (!nofilter)
    EX_INFO.style.filter =
      "progid:DXImageTransform.Microsoft.Shadow(direction=135,color=black,strength=3)";

  if (!document.onkeypress) {
    document.onkeypress = function () {
      if (event.keyCode == 27) {
        close_win();
      }
    };
  }
  if (!document.mousedown) {
    document.onmousedown = function () {
      if (FOCUSED) return;
      close_win();
    };
  }
  var FOCUSED = false;
  EX_INFO.onmousedown = function () {
    FOCUSED = true;
  };
  EX_INFO.onmouseup = function () {
    FOCUSED = false;
  };
}

//################################################

function close_win() {
  if (!EX_INFO) return;
  EX_INFO.style.display = "none";
  EX_INFO.innerHTML = "";

  document.onkeypress = null;
  document.onmousedown = null;
}

function _noexp(num) {
  return num < 1 / 1000000 ? 0 : num;
}

function msie6_png(obj) {
  if (!window.clientInformation) return;
  var v = window.clientInformation.appVersion.match(/MSIE\s+([0-9]+)/i);
  if (!v || !v[1]) return;
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

function _parse_color(color) {
  var dcol = {
    aqua: "#00FFFF",
    black: "#000000",
    blue: "#0000FF",
    fuchsia: "#FF00FF",
    gray: "#808080",
    green: "#008000",
    lime: "#00FF00",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    purple: "#800080",
    red: "#FF0000",
    silver: "#C0C0C0",
    teal: "#008080",
    white: "#FFFFFF",
    yellow: "#FFFF00",
  };

  if (dcol[color.toLowerCase()]) color = dcol[color.toLowerCase()];
  else {
    var tmp = color.match(
      /rgb\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/i
    );
    if (tmp) {
      color = "#";
      for (var i = 1; i <= 3; i++) {
        color += parseInt(tmp[i]).toString(16);
      }
    }
  }

  var m = color.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!m) return new Array();

  delete m[0];
  return m;
}

function _middlec(sc, ec, proc) {
  sc = _parse_color(sc);
  ec = _parse_color(ec);

  var ret = new Array();
  for (var i = 1; i <= 3; i++) {
    sc[i] = parseInt(sc[i], 16);
    ec[i] = parseInt(ec[i], 16);
    ret[i] = sc[i] + ((ec[i] - sc[i]) * proc) / 100;
    ret[i] = Math.round(ret[i]);
    ret[i] = ret[i].toString(16);
    ret[i] = ("0" + ret[i]).replace(/^.*(.{2})$/, "$1");
  }
  return "#" + ret.join("");
}

function get_fsize_string(size, units, prec) {
  if (units == null) units = [];
  if (units[0] == null) units[0] = "b";
  if (units[1] == null) units[1] = "Kb";
  if (units[2] == null) units[2] = "Mb";
  if (units[3] == null) units[3] = "Gb";
  if (units[4] == null) units[4] = "Tb";
  if (prec == null) prec = 3;

  if (size < 1024) return size + " " + units[0];
  if (size >= 1024 && size < 1048576)
    return rr(size / 1024, prec) + " " + units[1];
  if (size >= 1048576 && size < 1073741824)
    return rr(size / 1048576, prec) + " " + units[2];
  if (size >= 1073741824 && size < 1099511627776)
    return rr(size / 1073741824, prec) + " " + units[3];
  return rr(size / 1099511627776, prec) + " " + units[4];

  function rr(num, prec) {
    prec = Math.pow(10, prec);
    num *= prec;
    num = Math.round(num);
    num /= prec;
    return num;
  }
}

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

//fast onmouseover manual
var FMAN_COLLECTION = [];
function fastman(obj, e, id) {
  if (!e) e = event;
  if (typeof id == "object") {
    var fman = id;
  } else {
    if (!FMAN_COLLECTION[id]) FMAN_COLLECTION[id] = document.getElementById(id);
    var fman = FMAN_COLLECTION[id];
  }

  if (e.type == "mouseout") {
    fman.style.display = "none";
    return;
  }
  fman.style.display = "";
  fman.style.left = e.clientX + 20 + document.body.scrollLeft + "px";
  fman.style.top = e.clientY + 20 + document.body.scrollTop + "px";
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

//gets actual label object
function get_label(obj) {
  var el = document.getElementsByTagName("label");
  for (var i = 0; i < el.length; i++) {
    if (el[i].htmlFor != obj.id) continue;
    return el[i];
  }
  return false;
}

//javascript analog of PHP function
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

//functions for "option" element
function _asvalues(obj) {
  //	if( typeof obj != 'object' ) return false;
  if (!obj.length) obj = [obj];
  if (obj[0].type != "radio") return false;
  var ret = [];
  for (var i = 0; i < obj.length; i++) {
    ret[obj[i].value] = obj[i];
  }
  return ret;
}
function _value(obj) {
  var tmp = _checked(obj);
  return tmp ? tmp.value : "";
}
function _checked(obj) {
  //	if( typeof obj != 'object' ) return false;
  if (!obj.length) obj = [obj];
  if (obj[0].type != "radio") return false;
  for (var i = 0; i < obj.length; i++) {
    if (obj[i].checked) return obj[i];
  }
  return false;
}
function _focus(obj) {
  //	if( typeof obj != 'object' ) return false;
  if (!obj.length) obj = [obj];
  if (obj[0].type != "radio") return false;
  for (var i = 0; i < obj.length; i++) {
    if (obj[i].disabled) continue;
    obj[i].focus();
    break;
  }
}

function _blink(obj, c2, c1, proc) {
  if (c2 == null) c2 = "red";
  if (c1 == null) {
    var c1 = obj.style.color;
    if (!c1) {
      c1 = obj.style.color = "black";
    }
  }
  if (proc == null) proc = 100;
  if (proc < 0) {
    obj.style.color = c1;
    return;
  }

  obj.style.color = _middlec(c1, c2, proc);
  setTimeout(function () {
    _blink(obj, c2, c1, proc - 1);
  }, 1);
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

function get_time_string(time, units, full) {
  if (units == null) units = [];
  if (!units[0]) units[0] = "s";
  if (!units[1]) units[1] = "m";
  if (!units[2]) units[2] = "h";
  if (!units[3]) units[3] = "d";

  var k = [60, 60 * 60, 60 * 60 * 24];
  var ret = "";
  for (var i = 0; i <= k.length; i++) {
    if (k[i] && time >= k[i]) continue;
    var ff = time;
    if (i) {
      ff = Math.floor(time / k[i - 1]);
      if (!full) {
        var ll = time % (ff * k[i - 1]);
        ll /= k[i - 1] / 10;
        ff += Math.round(ll) / 10;
      }
    }
    if (ff) ret = ff + " " + units[i];

    if (i && full) {
      var ll = time % (ff * k[i - 1]);
      ret += " " + get_time_string(ll, units, full);
    }
    break;
  }
  return ret;
}

//Ð²ÑÑÑÐ°Ð²Ð»ÑÐµÑ ÑÐ°Ð·Ð¼ÐµÑ ÑÐ¾ÑÐºÐ¸ Ñ ÑÐ¾ÑÑÐ°Ð½ÐµÐ½Ð¸ÐµÐ¼ Ð¿ÑÐ¾Ð¿Ð¾ÑÑÐ¸Ð¹
function _set_imgsize(img, setsize, crop) {
  //ÑÐ¾Ð·Ð´Ð°ÑÐ¼ Ð¾Ð±ÑÐµÐºÑ image, ÑÐ°Ðº ÐºÐ°Ðº Ñ img Ð½Ðµ Ð²ÑÐµÐ³Ð´Ð° Ð¾ÐºÐ°Ð·ÑÐ²Ð°ÐµÑÑÑ Ð·Ð°Ð´Ð°Ð½Ñ ÑÐ°Ð·Ð¼ÐµÑÑ (+ Ð¾Ð½Ð¸ Ð¼Ð¾Ð³ÑÑ Ð±ÑÑÑ Ð·Ð°Ð´Ð°Ð½Ñ ÑÑÐºÐ°Ð¼Ð¸)
  var loader = new Image();
  loader.source = img;
  loader.onload = function () {
    var img = this.source;
    var size = [this.width, this.height];

    //Ð½Ðµ Ð¿Ð¾Ð»ÑÑÐ¸Ð»Ð¾ÑÑ Ð¿ÑÐ¾Ð±Ð¸ÑÑ ÑÐ°Ð·Ð¼ÐµÑÑ ÐºÐ°ÑÑÐ¸Ð½ÐºÐ¸ (Ð¿ÑÐ¸ Ð½Ð¾Ð²Ð¾Ð¼ Ð¿Ð¾Ð´ÑÐ¾Ð´Ðµ ÑÐµÑÐµÐ· Ð»Ð¾Ð´ÑÑÑ -- Ð½Ðµ Ð´Ð¾Ð»Ð¶Ð½Ð¾ Ð±ÑÑÑ)
    if (!size[0] || !size[1]) {
      alert(size[0]); //test
      return;
    }
    var k = size[0] / size[1];
    var k2 = setsize[0] / setsize[1];

    //Ð¿ÑÐ¾Ð¿Ð¾ÑÑÐ¸Ð¸ ÑÐ¾Ð²Ð¿Ð´Ð°ÑÑ
    if (k == k2) {
      img.width = setsize[0];
      img.height = setsize[1];
      return;
    }

    //Ð²ÑÑÐ¸ÑÐ»ÑÐµÐ¼ ÑÐ°Ð·Ð¼ÐµÑÑ
    var newsize = [setsize[0], setsize[1]]; //Ð½Ð¾Ð²ÑÐ¹ ÑÐ°Ð·Ð¼ÐµÑ
    var border = [0, 0, 0, 0]; //Ð³ÑÐ°Ð½Ð¸ÑÐ°
    if (k > k2) {
      newsize[1] = Math.round(setsize[0] / k);
      border[0] = Math.round((setsize[1] - newsize[1]) / 2);
      border[2] = setsize[1] - newsize[1] - border[0];
    } else {
      newsize[0] = Math.round(setsize[1] * k);
      border[3] = Math.round((setsize[0] - newsize[0]) / 2);
      border[1] = setsize[0] - newsize[0] - border[3];
    }

    //Ð¿ÑÐ¸Ð¼ÐµÐ½ÑÐµÐ¼
    img.width = newsize[0];
    img.height = newsize[1];
    img.style.border = "solid transparent";
    img.style.borderWidth = border.join("px ") + "px";

    //test : if crop Ð½Ðµ ÑÐµÐ°Ð»Ð¸Ð·Ð¾Ð²Ð°Ð½Ð¾, ÑÐ°Ðº ÐºÐ°Ðº Ð¿Ð¾ÐºÐ° Ð±ÐµÐ· Ð½Ð°Ð´Ð¾Ð±Ð½Ð¾ÑÑÐ¸. 05.12.2012
  };
  //Ð·Ð°Ð³ÑÑÐ¶Ð°ÐµÐ¼ ÐºÐ°ÑÑÐ¸Ð½ÐºÑ Ð² Ð»Ð¾Ð´ÑÑÑ
  loader.src = img.src;
}

function htmlspecialchars(txt) {
  return txt.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

//Ð·Ð°Ð¿ÑÐ¾Ñ ÑÐ°Ð·ÑÐµÑÐµÐ½Ð¸Ñ Ð½Ð° Ð·Ð°ÐºÑÑÑÐ¸Ðµ/Ð¿Ð¾ÐºÐ¸Ð´Ð°Ð½Ð¸Ðµ Ð¾ÐºÐ½Ð°
function _confirm_close(set) {
  if (!set) {
    window.onbeforeunload = document.body.onbeforeunload = null;
    return;
  }

  window.onbeforeunload = document.body.onbeforeunload = function () {
    if (!window.chrome) {
      return "âââââââââââââââââââ\n" + set + "\n" + "âââââââââââââââââââ";
    }
    return set;
  };
}
function rad2deg(ang) {
  return (ang / Math.PI) * 180;
}
function deg2rad(ang) {
  return (ang * Math.PI) / 180;
}

//ÑÐ°Ð·ÑÐµÑÐ°ÐµÐ¼ ÑÐ¾Ð»ÑÐºÐ¾ ÑÐ¸ÑÑÑ Ð½Ð° Ð²Ð²Ð¾Ð´Ðµ
function _only_numbers(e) {
  var code = e.keyCode || e.charCode;
  if (!(code >= 48 && code <= 57) && !/^(8|36|35|37|39|46)$/.test(code)) {
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
  }
  return true;
}

//Ð»Ð¾ÐºÐ°Ð»ÑÐ½Ð¾Ðµ ÑÐµÑÐµÐ½Ð¸Ðµ Ð´Ð»Ñ ÑÐ¼ÐµÐ½Ñ ÑÐ°ÑÐºÐ»Ð°Ð´ÐºÐ¸ Ð±ÐµÐ· Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ÑÑÐ¸ ÑÐ´Ð»ÐµÐ°ÑÑ ÑÑÐ¾ ÑÐµÑÐµÐ· ÐÐ¡.
//ÑÑÐµÐ¼Ð°: Ð¿Ð¾ ÑÐ¼Ð¾Ð»ÑÐ°Ð½Ð¸Ñ ÑÑÐ¾Ð¸Ñ Ð»Ð°ÑÑÑÑÐºÐ°Ñ ÑÐ°ÑÐºÐ»Ð°Ð´ÐºÐ°;
//Ð¿ÑÐ¸ Ð²Ð¸ÑÑÑÐ°Ð»ÑÐ½Ð¾Ð¼ Ð¿ÐµÑÐµÐºÐ»ÑÑÐµÐ½Ð¸Ð¸ ÑÑÐ° ÑÑÐ½ÐºÑÐ¸Ñ Ð½Ð°ÑÐ¸Ð½Ð°ÐµÑ Ð¿Ð¾Ð´ÑÐ¾Ð²ÑÐ²Ð°ÑÑ ÑÐ¾Ð¾ÑÐ². ÑÐ¸Ð¼Ð²Ð¾Ð»Ñ ÑÑÑÑÐºÐ¾Ð¹ ÑÐ°ÑÐºÐ»Ð°Ð´ÐºÐ¸
function _lat2rus(e) {
  //Ð¸ÑÐ¿Ð¾Ð»ÑÐ·Ð¾Ð²Ð°Ð½Ð¸Ðµ: onkeypress="return _lat2rus(event);"
  //Ð¾Ð±ÑÐµÐºÑÑ
  if (!e) e = event;
  var obj = e.target || e.srcElement;
  var key = String.fromCharCode(e.keyCode || e.charCode);

  //ÑÐ¾Ð¾ÑÐ²ÐµÑÑÑÐ²Ð¸Ñ
  var cc = arguments.callee;
  if (!cc.replaces) {
    var ff = "`qwertyuiop[]asdfghjkl;'zxcvbnm,./~@#$^&QWERTYUIOP{}ASDFGHJKL:\"|ZXCVBNM<>?ÄÅ«Ä«ÄÅ¡Ä£Ä·Ä¼Å¾ÄÅÄÅªÄªÄÅ Ä¢Ä¶Ä»Å½ÄÅ".match(
      /./g
    );
    var tt = 'ÑÐ¹ÑÑÐºÐµÐ½Ð³ÑÑÐ·ÑÑÑÑÐ²Ð°Ð¿ÑÐ¾Ð»Ð´Ð¶ÑÑÑÑÐ¼Ð¸ÑÑÐ±Ñ.Ð"â;:?ÐÐ¦Ð£ÐÐÐÐÐ¨Ð©ÐÐ¥ÐªÐ¤Ð«ÐÐÐÐ ÐÐÐÐÐ­/Ð¯Ð§Ð¡ÐÐÐ¢Ð¬ÐÐ®,ÑÐ³ÑÑÑÐ¿Ð»Ð´ÑÑÑÐ£ÐÐ¨Ð¤Ð«ÐÐÐÐ¯Ð¡Ð¢'.match(
      /./g
    );
    cc.replaces = {};
    for (var i = 0; i < ff.length; i++) {
      cc.replaces[ff[i]] = tt[i];
    }
  }

  //Ð¿ÑÐ¾Ð²ÐµÑÐºÐ° Ð°ÑÑÐ¾ÑÐ¸Ð°ÑÐ¸Ð¸
  var sym = cc.replaces[key];
  if (!sym) return true; //Ð¿ÐµÑÐ°ÑÐ°ÐµÐ¼ ÐºÐ°Ðº ÐµÑÑÑ

  //Ð´Ð»Ñ ÑÐºÑÐ¿Ð»Ð¾ÑÐµÑÐ°, ÐºÐ¾ÑÐ¾ÑÑÐ¹ Ð¿Ð¾Ð·Ð²Ð¾Ð»ÑÐµÑ Ð¿ÑÐ¾ÑÑÐ¾ Ð¿Ð¾Ð´Ð¼ÐµÐ½Ð¸ÑÑ ÐºÐ¾Ð´ ÐºÐ»Ð°Ð²Ð¸ÑÐ¸ Ð² ÑÐ²ÐµÐ½ÑÐµ
  if (obj.selectionStart == null) {
    e.keyCode = sym.charCodeAt(0);
    return true;
  }

  //Ð´Ð»Ñ Ð¾ÑÑÐ°Ð»ÑÐ½ÑÑ Ð´ÐµÐ»Ð°ÐµÐ¼ Ð¸ÑÐºÑÑÑÑÐ²ÐµÐ½Ð½Ñ Ð·Ð°Ð¼ÐµÐ½Ñ
  var txt = [
    obj.value.substr(0, obj.selectionStart), //ÑÐµÐºÑÑ Ð´Ð¾ ÐºÑÑÑÐ¾ÑÐ°
    obj.value.substr(obj.selectionEnd, obj.value.length), //ÑÐµÐºÑÑ Ð¿Ð¾ÑÐ»Ðµ ÐºÑÑÑÐ¾ÑÐ°
  ];
  //Ð½Ð¾Ð²Ð¾Ðµ Ð·Ð½Ð°ÑÐµÐ½Ð¸Ðµ ÑÐ»ÐµÐ¼ÐµÐ½ÑÐ°
  obj.value = txt[0] + sym + txt[1];
  //ÑÑÐ°Ð²Ð¸Ð¼ ÐºÑÑÑÐ¾Ñ Ð½Ð° Ð¼ÐµÑÑÐ¾
  obj.selectionStart = obj.selectionEnd = txt[0].length + 1;

  //ÐµÑÑÐµÑÑÐ²ÐµÐ½Ð½ÑÐµ Ð´ÐµÐ¹ÑÑÐ²Ð¸Ñ Ð¾ÑÐ¼ÐµÐ½ÑÐµÐ¼
  e.returnValue = false;
  return false;
}

//Ð¾Ð³ÑÐ°Ð½Ð¸ÑÐµÐ½Ð¸Ðµ ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð² Ð½Ð° Ð²Ð²Ð¾Ð´Ðµ (Ð½Ð°Ð²ÐµÑÐ¸Ð²Ð°ÑÑ Ð½Ð° onkeypress)
function _lim_input(e, lim) {
  var code = e.keyCode || e.charCode;

  if (
    !lim.test(String.fromCharCode(code) || "") &&
    !/^(8|36|35|37|39|46)$/.test(code)
  ) {
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
  }
  return true;
}

//ÑÐµÑÑÐ¾Ð²Ð°Ñ ÑÑÐ½ÐºÑÐ¸Ñ Ð´Ð»Ñ Ð¾ÑÑÐ»ÐµÐ¶Ð¸Ð²Ð°Ð½Ð¸Ñ ÑÐ¾Ð±ÑÑÐ¸Ð¹
function _debug(txt, add) {
  //	if( !/tester=1/.test( document.cookie ) ) return;
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
page: http://www.fotki.lv/
url: http://fotki.lv/jss/main.js?20
*/
