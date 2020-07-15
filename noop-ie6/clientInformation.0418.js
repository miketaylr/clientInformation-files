var xmlhttp;
/*@cc_on @*/
/*@if( @_jscript_version >= 5 )
	try { xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");}
	catch (e) {
		try { xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); }
		catch(E) { xmlhttp=false; }
	}
@else
	xmlhttp=false
@end @*/
if (!xmlhttp && typeof XMLHttpRequest != "undefined") {
  try {
    xmlhttp = new XMLHttpRequest();
  } catch (e) {
    xmlhttp = false;
  }
}
if (!xmlhttp && window.createRequest) {
  try {
    xmlhttp = window.createRequest();
  } catch (e) {
    xmlhttp = false;
  }
}

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
  //fullscreen=0,
  /*
	if( r ) {
		wd.attachEvent( "onresize", function() {
			
		} );
	}
	*/
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

//############################################
function main_location(url, name) {
  if (!name) name = "main";
  if (self.name == name) {
    location.href = url;
    return false;
  }
  father = window;
  for (i = 0; i < 100; i++) {
    father = father.opener;
    if (father && typeof father.name == "string") {
      if (father.name == name) {
        father.location.href = url;
        return;
      }
    } else {
      break;
    }
  }
  window.open(url, name);
}

function create_element(type, id, father, add) {
  if (!father) father = document.body;
  if (!add) add = "";
  var newElem = document.createElement(type);
  if (id) newElem.id = id;
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

function destroy_element(id) {
  if (/object/.test(typeof id)) el = id;
  else el = document.getElementById(id);
  if (el) {
    el.outerHTML = "";
  }
}

function stop_(obj) {
  if (!obj) obj = document.getElementById("snd");
  if (!obj) return false;
  obj.style.display = "none";
  obj.innerHTML = "";
}

function play_(name, volume, player, obj) {
  if (!obj) obj = document.getElementById("snd");
  if (!obj) return false;

  stop_(obj);

  obj.style.display = "";
  obj.innerHTML =
    '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' +
    '	codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0"' +
    '	style="height: 0px; width: 0px;>' +
    '<param name="allowScriptAccess" value="sameDomain">' +
    '<param name="movie" value="' +
    player +
    '">' +
    '<param name="flashvars" value="name=' +
    name +
    "&volume=" +
    volume +
    '">' +
    '<embed src="' +
    player +
    '" allowScriptAccess="sameDomain"' +
    '	type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer"' +
    '	flashvars="name=' +
    name +
    "&volume=" +
    volume +
    '"' +
    '	style="height: 0px; width: 0px;">' +
    "</object>";
}

function rand(from, to) {
  return from + Math.round((to - from) * Math.random());
}

function calc_chars(obj) {
  var MAXLEN = obj.getAttribute
    ? parseInt(obj.getAttribute("maxlength"))
    : 1000;
  if (parseInt(obj.value.length) > MAXLEN) {
    obj.value = obj.value.substr(0, MAXLEN);
  }
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

//#########################################################

function winfull(url, target) {
  if (!url) return false;
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
    url,
    target,
    "fullscreen=1,scrollbars=1,toolbar=0,resizable=1" + nofs
  );
  if (window.chrome) ww.resizeTo(screen.availWidth, screen.availHeight);
}

//##########################################################

function cost_format(cost) {
  cost = parseFloat(cost);
  cost *= 100;
  cost = Math.round(cost);
  cost /= 100;
  var m = cost.toString().match(/^[0-9]+\.[0-9]([0-9]?)$/);
  if (m) {
    return cost + (m[1] ? "" : "0");
  }
  return cost + ".00";
}

//##########################################################

function date(format, time) {
  if (!time) time = new Date();
  var ret = format;
  with (time) {
    ret = ret.replace(/Y/g, getFullYear());
    ret = ret.replace(/m/g, withnull(getMonth() + 1));
    ret = ret.replace(/d/g, withnull(getDate()));
    ret = ret.replace(/H/g, withnull(getHours()));
    ret = ret.replace(/i/g, withnull(getMinutes()));
    ret = ret.replace(/s/g, withnull(getSeconds()));
    ret = ret.replace(/j/g, getDate());
    ret = ret.replace(/G/g, getHours());
    //	ret = ret.replace( /w/g, getDay() );
    ret = ret.replace(
      /y/g,
      getFullYear()
        .toString()
        .replace(/^[0-9]{2}([0-9]{2})$/, "$1")
    );
  }
  return ret;
}

function withnull(val) {
  return ("0" + val).replace(/^[0-9]?([0-9]{2})$/, "$1");
}

var PREV = new Array();
function _preview(link, e, obj) {
  if (!e) e = event;

  var xx = e.clientX;
  var yy = e.clientY;

  if (!obj.onmousemove) {
    obj.onmousemove = function (e) {
      if (!PREV[link]) return;
      if (!e) e = event;
      _prevmove(PREV[link], e.clientX, e.clientY);
    };
  }

  if (!obj.onmouseout) {
    obj.onmouseout = function () {
      if (PREV[link]) PREV[link].style.display = "none";
    };
  }

  if (PREV[link]) {
    PREV[link].style.display = "";
    _prevmove(PREV[link], xx, yy);
    return;
  }

  if (!xmlhttp) return;
  var ajax = xmlhttp;

  ajax.open("GET", "/w_inc/preview.js?link=" + link, true);
  ajax.onreadystatechange = function () {
    if (ajax.readyState != 4) return;

    cmd = ajax.responseText;
    if (!cmd) return;

    PREV[link] = create_element("DIV");
    with (PREV[link]) {
      style.position = "absolute";
      style.width = 2;
      style.top = -400;
      style.left = -400;
    }

    eval(cmd);
    _prevmove(PREV[link], xx, yy);
  };
  ajax.setRequestHeader("Accept", "message/x-jl-formresult");
  ajax.send("");
}

function _prevmove(obj, x, y) {
  x += 5;
  y -= 5 + obj.scrollHeight;
  x += document.body.scrollLeft;
  y += document.body.scrollTop;

  var WIN_W = document.body.scrollWidth;

  if (x + obj.scrollWidth > WIN_W) {
    x = WIN_W - obj.scrollWidth;
  }

  obj.style.left = x;
  obj.style.top = y;
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

var SAVE_TITLE = "";
var BLINK_TO = false;
var BLINK = false;
function _blink(run) {
  if (BLINK_TO) clearInterval(BLINK_TO);
  if (!run) {
    if (SAVE_TITLE) document.title = SAVE_TITLE;
    return;
  }
  if (!SAVE_TITLE) SAVE_TITLE = document.title;

  BLINK_TO = setInterval(function () {
    BLINK = !BLINK;
    document.title = BLINK
      ? "* * * * * * * * * * * * * * * * " + SAVE_TITLE
      : SAVE_TITLE;
  }, 1000);
}

function sel_all(obj, name) {
  if (!name) name = false;
  var f = obj.form;
  for (var i = 0; i < f.length; i++) {
    if (f[i] == obj) continue;
    if (!/checkbox/i.test(f[i].type)) continue;
    if (name && f[i].name.replace(/\[[^\[\]]*\]/g, "") != name) continue;
    f[i].checked = obj.checked;
  }
}

function getChildsByTagName(name, obj) {
  if (!obj) obj = document.body;
  name = name.toUpperCase();

  var ret = [];
  var cld = obj.childNodes;
  for (var i = 0; i < cld.length; i++) {
    if (cld[i].tagName == name) ret.push(cld[i]);
    ret = ret.concat(getChildsByTagName(name, cld[i]));
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
/*
page: http://www.faces.eu/
url: http://img.faces.eu/w_inc/main.js?5
*/
