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

function m(url) {
  var width = 680;
  var height = 450;
  var w = screen.width;
  if (w >= 1024) {
    width = 720;
    height = 600;
  }
  var l = (screen.width - width) / 2;
  var t = (screen.height - height) / 2 - 30;

  window.open(
    url,
    "_blank",
    "toolbar=0,scrollbars=1,resizable=1,left=" +
      l +
      ",top=" +
      t +
      ",width=" +
      width +
      ",height=" +
      height
  );

  event.returnValue = false;
  return true;
}

function clear_cookie(cname) {
  document.cookie = cname + ' = ""; domain=www.ss.lv; path=/ expires=0';
}

function show_data(lg, key, data, mod) {
  if (!mod) window.close();
  go("/" + lg + "/search_result/index.html?" + key + "=" + data, 2);
}

function nl2br(text) {
  return text.replace(/\n/g, "<br>");
}

function htmlspecialchars(text) {
  return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function trim(text) {
  return text.replace(/^\s+/, "").replace(/\s+$/, "");
}

function _words_cnt(txt) {
  txt = trim(txt);
  var m = txt.match(/\s+/g);
  if (!m) return 0;
  return m.length + 1;
}

function bad_email(email) {
  return (
    email.length < 7 ||
    !/^[~\._a-z0-9-]+@([\._a-z0-9-]{2,}\.[a-z]{2,4})$/i.test(email)
  );
}

function msie6_png(obj) {
  if (!window.clientInformation) return;
  var v = window.clientInformation.appVersion.match(/MSIE\s+([0-9]+)/i);
  //if( !v && !v[1] ) return;
  if (!v || !v[1]) return; //Maks 22.10.2014. Rugalsja IE debuger

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
/*
page: http://www.translito.com/
url: http://www.translito.com/js/main.js?2
*/
