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
  //if( rett )return wd;
}

//#########################################################

function go(url) {
  if (url) {
    top.location.href = url;
  }
}

function mod(url, m, nr, args) {
  var d_args = new Array();
  var w = (h = 10);

  d_args[0] = window;
  d_args[1] = args;
  prop =
    "dialogHeight: " +
    h +
    "px; dialogWidth: " +
    w +
    "px; edge: Raised; center: Yes; scroll: Yes; help: No; resizable: Yes; status: No;";
  if (m) W.showModelessDialog(url, d_args, prop);
  else W.showModalDialog(url, d_args, prop);
}

//#########################################################

function winfull(url, target) {
  if (!url) {
    return false;
  }

  if (!target) {
    target = "_blank";
  }
  var wd = window.open(
    url,
    target,
    "fullscreen=1, scrollbars=1, toolbar=0, resizable=1"
  );
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

function alert_r(obj, ret, separator) {
  if (!ret) ret = false;
  if (!separator) separator = "\n";
  var r = "";
  for (var i in obj) {
    r += i + ": " + obj[i] + separator;
  }
  if (ret) {
    return r;
  }
  alert(r);
}

function create_element(type, father) {
  if (!father) father = document.body;
  var newElem = document.createElement(type);
  father.appendChild(newElem);
  return newElem;
}

function alert_r(obj, ret, separator) {
  if (!ret) ret = false;
  if (!separator) separator = "\n";
  var r = "";
  for (var i in obj) {
    r += i + ": " + obj[i] + separator;
  }
  if (ret) {
    return r;
  }
  alert(r);
}

function msie6_png(obj) {
  if (!window.clientInformation) return;
  var v = window.clientInformation.appVersion.match(/MSIE\s+([0-9]+)/i);
  if (!v && !v[1]) return;
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

function htmlspecialchars(txt) {
  return txt.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function quot(txt) {
  return txt.replace(/"/g, "&quot;");
}

function js(txt) {
  txt = txt.replace(/\\/g, "\\");
  txt = txt.replace(/\r/g, "\\r");
  txt = txt.replace(/\n/g, "\\n");
  txt = txt.replace(/"/g, '\\"');
  return txt;
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
      _esc(
        "$1" +
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ][getMonth()]
      )
    );
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
          ][getDay()]
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

function rad2deg(ang) {
  return (ang / Math.PI) * 180;
}
function deg2rad(ang) {
  return (ang * Math.PI) / 180;
}
/*
page: http://www.ping.eu/
url: http://www.ping.eu/jss/main.js?5
*/
