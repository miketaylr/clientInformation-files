var _w = window,
  _n = navigator,
  _d = document,
  _a = alert;
var _j = (Jobboard = {
  ProductName: "Jobweb",
  Version: 3,
  Build: 9,
  Company: "Strategies Group PLC",
  ServerType: "live",
  LogDebug: "/jobboard/scripts/ajax/LogDebug.asp",
  FirebugLite: "/jobboard/scripts/JS/firebug/",
  VideoCVServer:
    "rtmp://arsenic.strategiesuk.net/simplevideostreaming/_definst_/",
  FlashPlayer: "/jobboard/flash/FlowPlayerDark.swf",
  FlashCounter: "/jobboard/flash/textCounter.swf",
  FlashMaxCurVersion: 10,
  FlashMinVersion: [6, 65],
  FlashWrapper: "/jobboard/flash/c.swf",
  CSSCounterImage: "/jobboard/images/cssCounter.png",
  LogJSErrors: false,
  SuppressJSErrors: 0,
  EnhanceCSSDoc: false,
  StoreListeners: false,
  CMSEditorDisplay: "Lightbox",
  FadeDuration: 1000,
  MaxOverlayFade: 0.7,
  FadeOverlayStyles: { background: "#333" },
  AjaxLoaderImg: "/jobboard/images/ajax-loader.gif",
});
function checkLoadListener(a, b, fn) {
  var c,
    r = true,
    pl = _p.Listeners,
    d = b == "load" ? _p.WinLoadArr : _p.WinUnloadArr,
    e = _w.attachEvent ? "on" + b : b;
  if (inArray(d, fn) > -1) {
    return false;
  }
  if (a[e]) {
    c = a[e];
    a[e] = null;
    if (d.length > 0) {
      d.unshift(c);
    } else {
      d[0] = c;
    }
  }
  if (b == "unload") {
    if (!_p.HasUnloader) {
      _p.HasUnloader = true;
      var a = _w.addEventListener ? _w : _d.addEventListener ? _d : _w;
      _p.addLoadListener(a, "unload", function () {
        _p.RunWindowUnload();
      });
    }
  }
  d.push(fn);
  _p.AddListener(a, b, fn);
  return true;
}
function getName(a) {
  var b = "";
  if (a.id) {
    b += a.id + "_";
  }
  if (a.tagName) {
    b += a.tagName + "_";
  }
  b += Math.random(new Date().getTime());
  return b;
}
function getGUID(a) {
  if (typeof a.guid === "undefined") {
    a.guid = a === window ? "window" : a === document ? "document" : getName(a);
  }
  return a.guid;
}
function getDetails(o) {
  var d = "NOT AN OBJECT";
  if (o) {
    d =
      o === window
        ? "window"
        : o === document
        ? "document"
        : o.name
        ? o.name
        : o.id
        ? o.id
        : o.nodeName
        ? o.nodeName
        : "UNKNOWN";
  }
  return d;
}
AD = addEvent = function (a, b, fn, c) {
  a = typeof a == "string" ? G(a) : a;
  if (!a) return false;
  if (a && (a.nodeType == 3 || a.nodeType == 8)) return false;
  var d,
    e = false,
    r = true,
    c = c ? c : false,
    pl = _p ? _p.Listeners : [];
  if (_p) {
    if (a === _w || a === _d) {
      if (/^(un)?load/.test(b.toLowerCase())) {
        return checkLoadListener(a, b, fn);
      }
    }
  }
  var g = "ev__" + b;
  if (a[g]) {
    if (inArray(a[g], fn) > -1) {
      return;
    }
  } else {
    a[g] = [];
    a[g].eventCount = 0;
    e = true;
  }
  if (a["on" + b]) {
    d = a["on" + b];
    a[g][0] = d;
    a["on" + b] = null;
    a[g].eventCount++;
    if (a.addEventListener) {
      a.addEventListener(b, d, false);
    }
    if (_p) {
      _p.AddListener(a, g, d);
    }
  }
  if (a.addEventListener) {
    a.addEventListener(b, fn, c);
  } else {
    if (e) {
      if (a.attachEvent) {
        r = a.attachEvent("on" + b, function () {
          RunEvents.call(a, window.event);
        });
      } else {
        a["on" + b] = RunEvents;
      }
    }
  }
  if (r) {
    a[g].push(fn);
    a[g].eventCount++;
  }
  if (_p) {
    _p.AddListener(a, g, fn);
  }
  return r;
};
function RemoveAllEvents(b, c) {
  var r = false,
    d = "ev__" + c,
    e = b[d];
  if (e) {
    for (var a in e) {
      if (typeof e[a] == "function") {
        r = RE(b, c, e[a], false);
      }
    }
  }
  if (b.detachEvent) {
    r = r && b.detachEvent("on" + c, RunEvents);
  }
  return r;
}
function RunEvents(e) {
  var a = this,
    rv = true,
    fe;
  e = StandardiseEvent(e, a);
  var b = "ev__" + e.type,
    c = a[b];
  if (c && c.length) {
    l = c.length;
    for (var i = 0; i < l; i++) {
      if (typeof c[i] == "function") {
        if (Function.call) {
          fe = c[i].call(a, e);
        } else {
          a.RunFunction = c[i];
          fe = a.RunFunction(e);
        }
        if (typeof fe !== undefined) {
          rv = fe && rv;
        }
      }
    }
  }
  if (a.RunFunction) a.RunFunction = kill(a.RunFunction);
  return rv;
}
function kill(a) {
  if (a) {
    try {
      delete a;
    } catch (e) {}
    try {
      a = null;
    } catch (e) {}
  }
  return a;
}
RE = removeEvent = function (a, b, fn, c) {
  var r = true,
    d = false,
    c = c ? c : false;
  if (!a) return r;
  if (!fn) return r;
  if (a && (a.nodeType == 3 || a.nodeType == 8)) return false;
  var f = "ev__" + b,
    g = a[f];
  if (a[f]) {
    var el = g.length,
      vl = false;
    for (var x = 0; x < el; x++) {
      if (typeof g[x] == "function" && g[x].toString() === fn.toString()) {
        a[f][x] = kill(a[f][x]);
        a[f].eventCount--;
        break;
      }
    }
  } else {
    if (a.removeEventListener) {
      a.removeEventListener(b, fn, c);
    } else if (a.detachEvent) {
      r = a.detachEvent("on" + b, RunEvents);
    } else {
      a["on" + b] = null;
    }
    if (a[f] && a[f].eventCount && !isNaN(a[f].length)) {
      a[f].eventCount--;
    }
  }
  if (a.removeEventListener) {
    a.removeEventListener(b, fn, c);
    d = true;
  }
  if (a[f] && a[f].eventCount && a[f].eventCount == 0) {
    a[f] = kill(a[f]);
    if (!d && a.detachEvent) {
      r = a.detachEvent("on" + b, RunEvents);
    }
  }
  if (_p) {
    _p.RemoveListener(a, f, fn);
  }
  return r;
};
function inArray(a, v) {
  if (v) {
    for (var x = a.length; x >= 0; x--) {
      if (a[x] && a[x].toString() === v.toString()) {
        return x;
      }
    }
  }
  return -1;
}
function CancelEvent(e) {
  if (e.preventDefault) {
    e.preventDefault();
  } else if (window.event) {
    e.returnValue = false;
  }
}
function StopPropagation(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  } else if (e.cancelBubble) {
    e.cancelBubble = true;
  }
}
function StopEvent(e) {
  e = GetEvent(e);
  StopPropagation(e);
  CancelEvent(e);
}
function GetEvent(e, el) {
  if (!el) el = this;
  e =
    e || ((el.ownerDocument || el.document || el).parentWindow || window).event;
  if (e) {
    e = StandardiseEvent(e);
  }
  return e;
}
function SetEventTarget(e) {
  if (!e) return null;
  if (!e.target) e.target = e.srcElement;
  switch (e.type) {
    case "mouseover":
      e.relatedTarget = e.fromElement;
      break;
    case "mouseout":
      e.relatedTarget = e.toElement;
  }
  return e;
}
function SetEventCords(e) {
  var a = getMouseXY(e);
  if (a) {
    e.posX = a.x;
    e.posY = a.y;
  } else {
    (e.posX = 0), (e.posY = 0);
  }
  return e;
}
function StandardiseEvent(e) {
  e = SetEventTarget(e);
  e = SetEventCords(e);
  return e;
}
function getElement(a) {
  if (_w.event) {
    return _w.event.srcElement;
  } else {
    return a.currentTarget;
  }
}
function getTargetElement(a) {
  if (_w.event) {
    return _w.event.srcElement;
  } else {
    return a.target;
  }
}
function GetElementFromEvent(e) {
  var el;
  e = GetEvent(e);
  el = e.target;
  if (el && el.nodeType && el.nodeType == 3) {
    el = el.parentNode;
  }
  return el;
}
A = addLoadEvent = function (func) {
  DOM(func);
};
W = addWinLoadEvent = function (a, b) {
  if (_p) {
    _p.AddWindowOnLoadEvent(a, b);
  } else {
    AD(_w, "load", a);
  }
  return true;
};
addAfterLoadEvent = function (a) {
  if (_p) {
    _p.AddAfterLoadEvent(a);
    return true;
  }
  return false;
};
UNL = addWinUnloadEvent = function (a) {
  if (_p) {
    _p.AddWindowUnloadEvent(a);
  } else {
    AD(_w, "unload", a);
  }
  return true;
};
DOM = addDOMLoadEvent = function (fn) {
  if (typeof fn != "function") {
    return;
  }
  if (_p && ((_b && _b.w3cDOM) || (_d.getElementById && _d.createElement))) {
    _p.AddDOMLoadEvent(fn);
  } else {
    if (_p) {
      _p.AddWindowOnLoadEvent(fn);
    } else {
      AD(_w, "load", func);
    }
  }
};
EL = onElementLoad = function (elID, func) {
  if (typeof func != "function") return false;
  if (_p) {
    if (_p[elID]) {
      return true;
    } else {
      _p.Listeners[_p.Listeners.length] = [elID, "ElementLoad", func];
      _p.OnElement(elID, func);
      return true;
    }
  } else {
    AD(_w, "load", func);
  }
};
var isEventSupported = (function () {
  var win = this,
    TAGNAMES = {
      select: "input",
      change: "input",
      submit: "form",
      reset: "form",
      error: "img",
      load: "img",
      abort: "img",
    };
  function isEventSupported(a) {
    var el = document.createElement(TAGNAMES[a] || "div"),
      b = "on" + a.toLowerCase(),
      c = b in el;
    if (!c && el.setAttribute) {
      el.setAttribute(b, "return;");
      c = typeof el[b] == "function";
    }
    if (!c && win.Event && typeof win.Event == "object") {
      c = a.toUpperCase() in win.Event;
    }
    el = null;
    return c;
  }
  return isEventSupported;
})();
var _db = (Debugger = {
  ready: false,
  debugCache: [],
  hasCache: false,
  debugCount: 0,
  debugInterval: null,
  forceFirebug: true,
  isFirefox: /Firefox/i.test(_n.userAgent) ? true : false,
  debug: false,
  ClearCache: function () {
    if (this.debugCache.length > 0) {
      for (var c = 0; c < this.debugCache.length; c++) {
        this.Log(this.debugCache[c]);
      }
      this.debugCache.length = 0;
      this.hasCache = false;
    }
  },
  FirebugReady: function () {
    if (this.CheckFirebug()) {
      this.ClearCache();
      clearInterval(this.debugInterval);
      this.debugInterval = null;
    }
  },
  CheckFirebug: function () {
    if (this.ready) {
      return true;
    } else {
      if (this.forceFirebug && !this.isFirefox) {
        if (typeof firebug != "undefined" && firebug.env && firebug.env.init) {
          return (this.ready = true);
        } else {
          return (this.ready = false);
        }
      } else {
        return (this.ready = typeof _w.console != "undefined");
      }
    }
  },
  Log: function (a) {
    if (this.forceFirebug && !this.isFirefox) {
      firebug.d.console.cmd.log(a);
    } else {
      console.log(a);
    }
  },
});
if (Jobboard.ServerType != "live" && _db) {
  ShowDebug = function (msg) {
    if (!_db.debug) return;
    _db.debugCount++;
    var logMsg = _db.debugCount.toString() + ": " + msg;
    if (!_db.CheckFirebug()) {
      _db.debugCache.push(logMsg);
      _db.hasCache = true;
      if (_db.debugInterval == null) {
        _db.debugInterval = setInterval(function () {
          _db.FirebugReady();
        }, 1000);
      }
    } else {
      if (_db.hasCache) {
        _db.ClearCache();
      }
      _db.Log(logMsg);
      ShowDebug = function (msg) {
        if (!_db.debug) return;
        _db.debugCount++;
        var logMsg = _db.debugCount.toString() + ": " + msg;
        _db.Log(logMsg);
      };
    }
  };
} else {
  ShowDebug = function () {};
}
(function () {
  _b = Browser = {
    userAgent: _n.userAgent,
    platform: _n.platform,
    name: null,
    version: 0,
    gecko: false,
    khtml: false,
    webkit: false,
    webkitversion: 0,
    opera: false,
    ie: false,
    tridentversion: 0,
    ieDocMode: 5,
    ieBrowserMode: "NA",
    windows: false,
    mac: false,
    linux: false,
    xml: false,
    jscript: false,
    javascript: false,
    flashEnabled: false,
    flashVersion: "0",
    quirksMode: null,
    cssGradeA: null,
    cssEnhanced: false,
    boxModel: false,
    styleFloat: "cssFloat",
    opacity: false,
    anchorsEnabled: false,
    regexpEnabled: false,
    cookieEnabled: false,
    imagesEnabled: false,
    formsEnabled: false,
    linksEnabled: false,
    framesEnabled: false,
    javaEnabled: false,
    AJAXEnabled: undefined,
    spoof: null,
    bot: null,
    widgeEditor: false,
    dom: _d.all
      ? _d.getElementById
        ? 2
        : 1
      : _d.getElementById
      ? 4
      : _d.layers
      ? 3
      : 0,
    w3cDOM:
      typeof _d.getElementById != "undefined" &&
      typeof _d.getElementsByTagName != "undefined" &&
      typeof _d.createElement != "undefined",
    BrowserName: function () {
      var a = this.userAgent;
      if (this.name === null) {
        this.version = (a.match(/.+(?:ox|rv|ion|ra|ie|me)[\/:\s]([\d.]+)/i) ||
          [])[1];
        if (/^\s*$/.test(a)) {
          this.name = "Blank Agent";
          this.spoof = true;
        } else if (/Opera/i.test(a) || _w.opera) {
          this.name = "Opera";
          this.opera = true;
          if (!(_w.attachEvent && _w.addEventListener)) {
            this.spoof = true;
          } else if (_w.opera && !/Opera/i.test(a)) {
            this.spoof = true;
          }
        } else if (/WebKit/i.test(a) || /Apple/i.test(a)) {
          this.webkit = true;
          if (/Chrome/i.test(a)) {
            this.name = "Chrome";
          } else if (/Apple.*Mobile.*Safari/i.test(a)) {
            this.name = "Mobile Safari";
          } else {
            this.name = "Safari";
          }
        } else if (/msie/i.test(a) && !_w.opera) {
          this.tridentversion = (a.match(/.+Trident\/([\d.]+)/i) || [])[1];
          this.name = "Internet Explorer";
          this.ie = true;
          if (!_w.ActiveXObject || !this.jscript) {
            this.spoof = true;
          }
          if (!this.spoof) {
            this.ieDocMode = _d.documentMode
              ? _d.documentMode
              : _d.compatMode && _d.compatMode == "CSS1Compat"
              ? 7
              : 5;
            var b = parseInt(this.version);
            this.ieBrowserMode =
              b == 7
                ? _d.documentMode && /trident\/\d/i.test(a)
                  ? "Compat Mode"
                  : "IE 7 Mode"
                : b >= 8 && _d.documentMode
                ? "IE " + b + " Mode"
                : "NA";
            if (this.ieDocMode == 9) {
              if (!(_w.attachEvent && _w.addEventListener)) {
                this.spoof = true;
              }
            }
          }
        } else if (/Firefox/i.test(a) || _n.vendor == "Firefox") {
          this.name = "Firefox";
          this.gecko = true;
        } else if (/Firebird/i.test(a) || _n.vendor == "Firebird") {
          this.name = "Firebird";
          this.gecko = true;
        } else if (/konqueror/i.test(a) || /KHTML/i.test(a)) {
          this.name = "Konqueror";
          this.khtml = true;
        } else {
          this.name = _n.appName;
          if (
            _n.product &&
            _n.product.toLowerCase() == "gecko" &&
            a.indexOf("Gecko") != -1
          ) {
            this.gecko = true;
          }
        }
        if (this.webkit) {
          this.webkitversion = a.match(/AppleWebKit\/(\d+)/)[1];
        }
        if (!this.spoof && (this.gecko || this.khtml || this.webkit)) {
          if (_w.attachEvent || !_w.addEventListener) {
            this.spoof = true;
          } else if (_w.ActiveXObject || this.jscript) {
            this.spoof = true;
          }
        }
        if (!this.spoof && (this.khtml || this.webkit)) {
          if (_d.all) this.spoof = true;
        }
      }
      return this.name;
    },
    isSpoof: function () {
      if (this.spoof === null) {
        if (/(?:spoof|spoofer|fake|ripper)/i.test(this.userAgent)) {
          this.spoof = true;
        } else if (/[a-z1-9]{20,}/i.test(this.userAgent)) {
          if (!this.name || this.name.length == 0) {
            this.name = "Fake Agent";
          }
          this.spoof = true;
        } else {
          this.spoof = false;
        }
      }
      return this.spoof;
    },
    isBot: function () {
      if (this.bot === null) {
        if (
          /(?:robot|bot\W|mine|archive|spider|crawl|job|@|https?:\/{2})/i.test(
            this.userAgent
          )
        ) {
          this.bot = true;
        } else {
          this.bot = false;
        }
      }
      return this.bot;
    },
    ScriptTest: function () {
      /*@cc_on;@if(@_jscript){this.jscript=true}@else*/ this.javascript = true; /*@end;@*/
    },
    OperatingSystemTest: function () {
      var p = this.platform.toLowerCase(); /*@cc_on;@if(@_win32){this.windows=true}@elif(@_win16){this.windows=true}@elif(@_win64){this.windows=true}@elif(@_mac){this.mac=true}@elif(@_alpha){this.linux=true}@else*/
      (this.windows = p ? /win/i.test(p) : /win/.test(this.userAgent)),
        (this.mac = p ? /mac/i.test(p) : /mac/.test(this.userAgent)),
        (this.linux = p
          ? /linux/i.test(p)
          : /linux/i.test(this.userAgent)); /*@end;@*/
    },
    SniffFlash: function () {
      var a = [0, 0],
        p = _n.plugins;
      if (p && typeof p["Shockwave Flash"] == "object") {
        var b = p["Shockwave Flash"].description;
        if (typeof b != "undefined") {
          b = b.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
          var c = parseInt(b.replace(/^(.*)\..*$/, "$1"), 10),
            d = /r/.test(b) ? parseInt(b.replace(/^.*r(.*)$/, "$1"), 10) : 0;
          a = [c, d];
        }
      } else if (_w.ActiveXObject) {
        var m = 10;
        if (Jobboard.FlashMaxCurVersion && Jobboard.FlashMaxCurVersion > 9) {
          m = Jobboard.FlashMaxCurVersion + 1;
        }
        for (var ii = m; ii >= 4; ii--) {
          try {
            var f = eval(
              "new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');"
            );
          } catch (e) {}
        }
        if (typeof f == "object") {
          if (ii == 6) {
            f.AllowScriptAccess = "always";
          }
          try {
            var b = f.GetVariable("$version");
            if (typeof b != "undefined") {
              b = b.replace(/^\S+\s+(.*)$/, "$1").split(",");
              a = [parseInt(b[0], 10), parseInt(b[2], 10)];
            }
          } catch (e) {
            if (ii > 4) {
              a = [ii, 0];
            }
          }
        }
      }
      if (a[0] == 0 && a[1] == 0) {
        this.flashEnabled = false;
      } else {
        this.flashEnabled = true;
        this.flashVersion = a[0].toString() + "." + a[1].toString();
      }
      return;
    },
    BrowserTest: function () {
      this.anchorsEnabled = _d.anchors ? "true" : "false";
      this.regexpEnabled = _w.RegExp ? "true" : "false";
      _d.cookie = "cookies=true";
      this.cookieEnabled = _d.cookie ? "true" : "false";
      this.imagesEnabled = _d.images ? "true" : "false";
      this.formsEnabled = _d.forms ? "true" : "false";
      this.linksEnabled = _d.links ? "true" : "false";
      this.framesEnabled = _w.frames ? "true" : "false";
      this.javaEnabled = _n.javaEnabled();
      var m = _d.getElementsByTagName("meta");
      for (var i = 0; i < m.length; i++) {
        if (
          /content-type/i.test(m[i].getAttribute("http-equiv")) &&
          /xml/i.test(m[i].getAttribute("content"))
        ) {
          this.xml = true;
          break;
        }
      }
      return;
    },
    StyleTest: function () {
      this.quirksMode = _d.documentMode
        ? _d.documentMode == 5
          ? true
          : false
        : _d.compatMode
        ? _d.compatMode == "BackCompat"
          ? true
          : false
        : true;
      if (!this.w3cDOM) {
        if (this.quirksmode) {
          this.boxModel = this.cssGradeA = false;
        } else {
          this.boxModel = this.cssGradeA = true;
        }
        this.opacity = this.ie ? false : true;
        this.styleFloat = this.ie ? "styleFloat" : "cssFloat";
      } else {
        var b = false,
          c = _d.createElement("div");
        c.style.display = "none";
        c.innerHTML =
          '<a href="/a" style="color:red;float:left;opacity:.5;">a</a>';
        _d.body.appendChild(c);
        var a = c.getElementsByTagName("a")[0];
        this.styleFloat = !!a.style.cssFloat ? "cssFloat" : "styleFloat";
        this.opacity = a.style.opacity === "0.5";
        _d.body.removeChild(c);
        var c = _d.createElement("div");
        _d.body.appendChild(c);
        c.style.visibility = "hidden";
        c.style.padding = "10px";
        c.style.width = "20px";
        var f = c.offsetWidth;
        if (f != 40) {
          _d.body.removeChild(c);
          b = true;
        }
        if (!b) {
          c.style.position = "absolute";
          c.style.left = "10px";
          var g = c.offsetLeft;
          if (g != 10) {
            _d.body.removeChild(c);
            b = true;
          }
        }
        if (!b) {
          this.boxModel = true;
        } else {
          this.boxModel = false;
        }
        var h,
          i,
          j,
          td,
          k,
          l,
          m = _d.body.style.marginTop,
          c2 = _d.createElement("div");
        html =
          '<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';
        k = {
          position: "absolute",
          top: 0,
          left: 0,
          margin: 0,
          border: 0,
          width: "1px",
          height: "1px",
          visibility: "hidden",
        };
        for (l in k) {
          c2.style[l] = k[l];
        }
        c2.innerHTML = html;
        _d.body.insertBefore(c2, _d.body.firstChild);
        (h = c2.firstChild),
          (i = h.firstChild),
          (td = h.nextSibling.firstChild.firstChild);
        this.doesNotAddBorder = i.offsetTop !== 5;
        this.doesAddBorderForTableAndCells = td.offsetTop === 5;
        (h.style.overflow = "hidden"), (h.style.position = "relative");
        this.subtractsBorderForOverflowNotVisible = i.offsetTop === -5;
        _d.body.style.marginTop = "1px";
        this.doesNotIncludeMarginInBodyOffset = _d.body.offsetTop === 0;
        _d.body.style.marginTop = m;
        try {
          if (c) {
            _d.body.removeChild(c);
          }
          if (c2) {
            _d.body.removeChild(c2);
          }
        } catch (e) {}
      }
      return;
    },
    CSSTest: function () {
      if (this.cssGradeA === null) {
        if (this.cookieEnabled) {
          var ck = readCookie("enhanced");
          if (ck != "undefined") {
            if (ck == "true") {
              this.cssGradeA = true;
              if (Jobboard.EnhanceCSSDoc) {
                if (!this.cssEnhanced) {
                  enhanceDocument();
                }
              }
              return true;
            } else if (ck == "false") {
              this.cssGradeA = false;
              return true;
            }
          }
        }
      }
      var a = false;
      if (this.w3cDOM) {
        var b = _d.createElement("div");
        b.style.visibility = "hidden";
        _d.body.appendChild(b);
        if (!a) {
          var c = _d.createElement("div");
          c.style.width = "5px";
          c.style.cssFloat = "left";
          c.style.styleFloat = "left";
          b.appendChild(c);
          var d = c.cloneNode(true);
          b.appendChild(d);
          var e = c.offsetTop,
            f = d.offsetTop;
          if (e != f) {
            _d.body.removeChild(b);
            a = true;
          }
        }
        if (!a) {
          b.innerHTML =
            '<ul><li style="width: 5px; float: left;">test</li><li style="width: 5px; float: left;clear: left;">test</li></ul>';
          var g = b.getElementsByTagName("li")[0].offsetTop,
            h = b.getElementsByTagName("li")[1].offsetTop;
          if (g == h) {
            _d.body.removeChild(b);
            a = true;
          }
        }
        if (!a) {
          b.innerHTML = '<div style="height: 20px;"></div>';
          b.style.padding = "0";
          b.style.height = "10px";
          b.style.overflow = "auto";
          var i = b.offsetHeight;
          if (i != 10) {
            _d.body.removeChild(b);
            a = true;
          }
        }
        if (!a) {
          b.innerHTML =
            '<div style="line-height: 2; font-size: 10px;">Te<br />st</div>';
          b.style.padding = "0";
          b.style.height = "auto";
          b.style.overflow = "";
          var i = b.offsetHeight;
          if (i > 40) {
            _d.body.removeChild(b);
            a = true;
          }
        }
        if (!a) {
          if (_w.onresize == false) {
            _d.body.removeChild(b);
            a = true;
          }
        }
        if (!a) {
          if (!_w.print) {
            _d.body.removeChild(b);
            a = true;
          }
        }
        if (!a) {
          if (_w.clientInformation && _w.opera) {
            _d.body.removeChild(b);
            a = true;
          }
        }
        if (!a) {
          _d.body.removeChild(b);
          if (Jobboard.EnhanceCSSDoc) {
            if (!this.cssEnhanced) {
              enhanceDocument();
            }
          }
          createCookie("enhanced", "true");
          this.cssGradeA = true;
          return true;
        }
      }
      createCookie("enhanced", "false");
      this.cssGradeA = false;
      return false;
    },
    GUITest: function () {
      this.StyleTest();
      this.CSSTest();
      this.widgeEditor = this.WYSIWYGTest();
      return;
    },
    WYSIWYGTest: function () {
      if (this.w3cDOM) {
        if (
          typeof GetBody().contentEditable != "undefined" ||
          typeof _d.designMode != "undefined"
        ) {
          return true;
        }
      }
      return false;
    },
    Settings: function () {
      var s = "UserAgent: " + this.userAgent + "<br />",
        x = 0;
      for (var p in this) {
        if (typeof this[p] != "function" && p != "userAgent") {
          x++;
          s += p + ": " + this[p];
          if (x % 4 == 0) {
            s += "<br />";
          } else {
            s += " - ";
          }
        }
      }
      return s;
    },
  };
  _p = PageLoader = {
    Listeners: {},
    DOMLoaded: false,
    BodyLoaded: false,
    WindowLoaded: false,
    HasUnloader: false,
    DoCleanUp: false,
    AfterLoaded: false,
    FreePos: [],
    WinUnloadArr: [],
    WinLoadArr: [],
    AfterLoadArr: [],
    DOMArr: [],
    BodyFuncs: {},
    DOMTimer: null,
    AddWindowUnloadEvent: function (fn) {
      if (typeof fn == "function") {
        if (inArray(this.WinUnloadArr, fn) > -1) {
          return false;
        }
        this.WinUnloadArr.push(fn);
        if (!this.HasUnloader) {
          this.HasUnloader = true;
          var a = _w.addEventListener ? _w : _d.addEventListener ? _d : _w;
          return this.addLoadListener(a, "unload", function () {
            PageLoader.RunWindowUnload();
          });
        }
      }
      return false;
    },
    AddWindowOnLoadEvent: function (fn, a) {
      if (typeof fn == "function") {
        if (!a && inArray(this.WinLoadArr, fn) > -1) {
          return false;
        }
        if (this.WindowLoaded) {
          fn();
        } else {
          this.WinLoadArr.push(fn);
          this.AddListener(_w, "ev__load", fn);
          this.ShowListeners();
        }
      }
      return true;
    },
    OnElement: function (a, b) {
      var f = false,
        c = this;
      if (this.WindowLoaded || this.DOMLoaded) {
        if (this[a]) {
          return;
        }
        if (getEl(a)) {
          f = true;
          this[a] = true;
          if (Function.call) {
            b.call(a);
          } else {
            b();
          }
          return true;
        }
      }
      if (!f) {
        setTimeout(function () {
          c.OnElement(a, b);
        }, 200);
      }
      return true;
    },
    OnBody: function (a) {
      var b = this;
      if (typeof a != "function") return false;
      if (this.BodyLoaded || _d.getElementsByTagName("body")[0] || _d.body) {
        if (this.BodyFuncs[a]) {
          return;
        }
        a();
        this.BodyFuncs[a] = true;
        this.BodyLoaded = true;
      } else {
        setTimeout(function () {
          b.OnBody(a);
        }, 200);
      }
      return;
    },
    AddAfterLoadEvent: function (fn) {
      if (this.AfterLoaded) {
        fn();
      } else {
        this.AfterLoadArr.push(fn);
        this.AddListener(_w, "ev__AfterLoad", fn);
      }
      return true;
    },
    AddDOMLoadEvent: function (fn) {
      if (this.DOMLoaded) {
        fn();
      } else {
        this.DOMArr.push(fn);
        this.AddListener(_d, "ev__DOMLoad", fn);
      }
      return true;
    },
    RunWindowUnload: function () {
      if (this.WinUnloadArr) {
        for (var x = 0; x < this.WinUnloadArr.length; x++) {
          fn = this.WinUnloadArr[x];
          if (fn.toString() !== "function(){PageLoader.CleanUp();}") {
            fn();
          }
        }
        if (this.DoCleanUp) {
          PageLoader.CleanUp();
        }
      }
      return true;
    },
    RunWindowLoaded: function () {
      if (this.WindowLoaded) {
        return;
      } else {
        var da = this.DOMArr;
        for (var i = 0; i < da.length; i++) {
          if (da && typeof da == "function") {
            try {
              da[i]();
            } catch (e) {}
          }
        }
        this.WindowLoaded = true;
        for (var i = 0; i < this.WinLoadArr.length; i++) {
          if (typeof this.WinLoadArr[i] == "function") {
            this.WinLoadArr[i]();
          }
        }
        this.onAfterLoaded();
      }
      return true;
    },
    RunDOMLoadFunctions: function () {
      if (this.DOMLoaded) {
        return;
      }
      if (Browser.ie && Browser.windows) {
        var s = _d.createElement("span");
        try {
          var t = GetBody().appendChild(s);
          t.parentNode.removeChild(t);
        } catch (e) {
          if (!this.DOMTimer) {
            this.DOMTimer = setInterval(function () {
              PageLoader.RunDOMLoadFunctions();
            }, 10);
          }
          return;
        }
      }
      this.BodyLoaded = true;
      this.DOMLoaded = true;
      if (this.DOMTimer) {
        clearInterval(this.DOMTimer);
        this.DOMTimer = null;
      }
      for (var i = 0; i < this.DOMArr.length; i++) {
        this.DOMArr[i]();
        this.DOMArr[i] = kill(this.DOMArr[i]);
      }
      return true;
    },
    onDOMLoad: function () {
      if (Browser.w3cDOM && !Browser.spoof) {
        if (
          (Browser.webkit && Browser.webkitversion < 525) ||
          Browser.khtml ||
          (Browser.opera && Browser.version < 9 && _d.readyState != "undefined")
        ) {
          PageLoader.DOMTimer = setInterval(function () {
            if (/loaded|complete/.test(_d.readyState)) {
              PageLoader.RunDOMLoadFunctions();
            }
          }, 10);
        } else if (_d.addEventListener) {
          addEvent(
            _d,
            "DOMContentLoaded",
            function () {
              removeEvent(_d, "DOMContentLoaded", arguments.callee);
              PageLoader.RunDOMLoadFunctions();
            },
            false
          );
        } else if (_d.attachEvent) {
          addEvent(
            _d,
            "onreadystatechange",
            function () {
              if (_d.readyState === "complete") {
                removeEvent(_d, "onreadystatechange", arguments.callee);
                PageLoader.RunDOMLoadFunctions();
              }
            },
            false
          );
          if (_d.documentElement.doScroll && _w == _w.top)
            (function () {
              if (this.DOMLoaded) return;
              try {
                _d.documentElement.doScroll("left");
              } catch (e) {
                setTimeout(arguments.callee, 0);
                return;
              }
              PageLoader.RunDOMLoadFunctions();
            })();
        }
      }
      this.AddWindowOnLoadEvent(function () {
        PageLoader.RunDOMLoadFunctions();
      });
      return true;
    },
    Setup: function () {
      this.onDOMLoad();
      this.onWindowLoaded();
      if (Browser.windows && Browser.ie) {
        this.DoCleanUp = true;
        this.AddWindowUnloadEvent(function () {
          PageLoader.CleanUp();
        });
      }
      return true;
    },
    CleanUp: function () {
      if (!Jobboard.StoreListeners) return true;
      var y, a, ev, b, i, fn;
      for (var x in this.Listeners) {
        a = this.Listeners[x];
        for (y in o) {
          ev = o[y];
          if (ev && ev.length) {
            b = ev.replace(/^ev__/, "");
            for (i = 0; i < ev.length; i++) {
              fn = ev[i];
              if (typeof fn == "function") {
                r = removeEvent(a, b, fn, false);
              }
            }
          }
        }
      }
      return true;
    },
    onWindowLoaded: function () {
      var a;
      if (_w.addEventListener) {
        a = _w;
      } else if (_d.addEventListener) {
        a = _d;
      } else {
        a = _w;
      }
      this.addLoadListener(a, "load", function () {
        PageLoader.RunWindowLoaded();
      });
      return true;
    },
    onAfterLoaded: function () {
      if (this.DOMLoaded && this.WindowLoaded) {
        this.AfterLoaded = true;
        for (var x = 0; x < this.AfterLoadArr.length; x++) {
          this.AfterLoadArr[x]();
        }
      }
      return true;
    },
    RunFunctions: function (e, a, b) {
      var rv = true;
      e = StandardiseEvent(e, a);
      if (a && b && b.length) {
        for (var i = 0; i < b.length; i++) {
          if (typeof b[i] == "function") {
            if (Function.call) {
              rv = b[i].call(a, e) && rv;
            } else {
              a.RunFunction = b[i];
              rv = a.RunFunction(a, e) && rv;
            }
          }
        }
        if (a.RunFunction) a.RunFunction = kill(a.RunFunction);
      }
      return rv;
    },
    HasListener: function (a, b, fn) {
      if (!this.Listeners || !this.Listeners.length) return false;
      var pl = this.Listeners;
      for (var x = 0; x < pl.length; x++) {
        if (
          pl[x] &&
          pl[x][0] === a &&
          pl[x][1] == b &&
          pl[x][2].toString() === fn.toString()
        ) {
          return true;
        }
      }
      return false;
    },
    AddListener: function (a, b, fn) {
      if (!Jobboard.StoreListeners) return true;
      if (!a || !b || !fn) return false;
      var id = getGUID(a);
      var o = this.Listeners[id];
      if (!o) {
        o = this.Listeners[id] = {};
      }
      var es = o[b];
      if (!es) {
        es = o[b] = [];
      }
      for (var x = 0; x < es.length; x++) {
        if (!es[x] || typeof es[x] != "function") {
          es[x] = fn;
          return true;
        }
      }
      es[x] = fn;
      return true;
    },
    RemoveListener: function (a, b, fn) {
      if (!Jobboard.StoreListeners) return true;
      if (!a || !b || !fn) return false;
      var id = a.guid;
      if (!id) return false;
      var o = this.Listeners[id];
      if (!o) return false;
      var es = o[b],
        fs = fn.toString();
      if (!es || !es.length) return false;
      var r = false,
        el = es.length,
        v = false;
      for (var x = 0; x < el; x++) {
        if (es[x]) {
          if (fs === es[x].toString()) {
            es[x] = kill(es[x]);
          } else {
            v = true;
          }
        }
      }
      if (!v) {
        o[b] = kill(o[b]);
      }
      return r;
    },
    ShowListeners: function () {
      if (!Jobboard.StoreListeners) return true;
      if (this.Listeners) {
        var o;
        for (var x in this.Listeners) {
          o = this.Listeners[x];
          for (var y in o) {
            ev = o[y];
            if (ev) {
              if (ev.length) {
                for (i = 0; i < ev.length; i++) {
                  if (ev[i] && typeof ev[i] == "function") {
                  }
                }
              } else {
              }
            }
          }
        }
      }
      return;
    },
    ShowObjectListeners: function (a, b) {
      var c = "No Listeners Stored;";
      if (!Jobboard.StoreListeners) return c;
      var d = "",
        m = "";
      if (a.guid) {
        if (!/^ev__/.test(b)) {
          if (/^on/i.test(b)) {
            b = b.replace(/^on/i, "");
          }
          b += "ev__" + b;
        }
        var i;
        o = this.Listeners[a.guid];
        enumObj(o);
        var es = o[b];
        if (es) {
          for (var x = 0; x < es.length; x++) {
            fn = es[x];
            if (typeof fn == "function") {
              m = "Function[" + x + "] = " + fn.toString();
              d += m + "<br />";
            }
          }
        }
      }
      if (d == "") d = c;
      return d;
    },
    addLoadListener: function (a, b, fn) {
      var r = true,
        pl = PageLoader.Listeners,
        c = b == "load" ? PageLoader.WinLoadArr : PageLoader.WinUnloadArr,
        d = "ev__" + b;
      if (inArray(c, fn) > -1) {
        return false;
      }
      if (typeof fn == "function") {
        if (a.addEventListener) {
          a.addEventListener(b, fn, false);
        } else if (a.attachEvent) {
          r = a.attachEvent("on" + b, fn);
        } else {
          a["on" + b] = fn;
        }
      }
      this.AddListener(a, d, fn);
      return r;
    },
  };
  Browser.ScriptTest();
  Browser.BrowserName();
  Browser.isSpoof();
  Browser.isBot();
  Browser.OperatingSystemTest();
  Browser.BrowserTest();
  Browser.SniffFlash();
  PageLoader.Setup();
  DOM(function () {
    Browser.GUITest();
  });
})();
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (a) {
    var b = this.length,
      c = Number(arguments[1]) || 0;
    c = c < 0 ? Math.ceil(c) : Math.floor(c);
    if (c < 0) {
      c += b;
    }
    for (; c < b; c++) {
      if (c in this && this[c] === a) {
        return c;
      }
    }
    return -1;
  };
}
if (!Array.prototype.push) {
  Array.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
    }
    return this.length;
  };
}
if (!Array.prototype.unshift) {
  Array.prototype.unshift = function () {
    var i = unshift.arguments.length;
    for (var j = this.length - 1; j >= 0; --j) {
      this[j + i] = this[j];
    }
    for (j = 0; j < i; ++j) {
      this[j] = unshift.argument[j];
    }
  };
}
if (!Array.prototype.shift) {
  Array.prototype.shift = function (a) {
    var b = this[0];
    for (var i = 1; i < this.length; ++i) {
      this[i - 1] = this[i];
    }
    this.length--;
    return b;
  };
}
_w.onerror = function (a, b, c) {
  if (_j.LogJSErrors) {
    var d = "msg=" + enc(a) + "&url=" + enc(b) + "&line=" + c;
    X("/jobboard/scripts/ajax/logError.asp", d, "");
  }
  if (_j.SuppressJSErrors == 0) {
    return false;
  } else {
    if (
      _j.SuppressJSErrors == 1 ||
      (_j.SuppressJSErrors == 2 && (_b.dom == 0 || _b.dom == 1 || _b.dom == 3))
    ) {
      return true;
    } else {
      return false;
    }
  }
};
var _st = _w.setTimeout,
  _si = _w.setInterval;
_w.setTimeout = function (a, b) {
  if (typeof a == "function") {
    var c = Array.prototype.slice.call(arguments, 2),
      f = function () {
        a.apply(null, c);
      };
    return _st(f, b);
  }
  return _st(a, b);
};
_w.setInterval = function (a, b) {
  if (typeof a == "function") {
    var c = Array.prototype.slice.call(arguments, 2),
      f = function () {
        a.apply(null, c);
      };
    return _si(f, b);
  }
  return _si(a, b);
};
if (!_d.getElementsByTagName("*").length) {
  if (_d.all) {
    _d.getElementsByTagName = function (a) {
      if (a == "*") {
        return _d.all;
      } else {
        if (IsIEversion(5, 2)) {
          a = a.toUpper();
        }
        return _d.all.tags(a);
      }
    };
  }
}
if (!_d.getElementsByClassName) {
  _d.getElementsByClassName = function (a, b, c) {
    var d = [],
      el = (b ? b : _d).getElementsByTagName(c ? c : "*"),
      re = new RegExp("(^|\\s)" + a + "(\\s|$)");
    for (var i = 0, j = el.length; i < j; i++) {
      re.test(el[i].className) ? d.push(el[i]) : "";
    }
    return d;
  };
}
ScrollToElement = {
  source: 0,
  dest: 0,
  speed: 10,
  pos: 0,
  step: 100,
  timer: null,
  moveby: "",
  ScrollTo: function (el) {
    var a = this;
    a.dest = a.GetElementOffset(el);
    a.pos = getScrollPosition().y;
    if (a.dest > a.pos) {
      a.moveby = "down";
    } else if (this.dest < a.pos) {
      a.moveby = "up";
    } else {
      return;
    }
    this.timer = setInterval(ScrollToElement.Move, 50);
  },
  Move: function () {
    var a = false;
    if (ScrollToElement.moveby == "down") {
      ScrollToElement.pos = ScrollToElement.pos + ScrollToElement.step;
      if (ScrollToElement.pos >= ScrollToElement.dest) {
        a = true;
      }
    } else {
      ScrollToElement.pos = ScrollToElement.pos - ScrollToElement.step;
      if (ScrollToElement.pos <= ScrollToElement.dest) {
        a = true;
      }
    }
    if (a) {
      _w.scroll(0, ScrollToElement.dest);
      clearInterval(ScrollToElement.timer);
      return;
    } else {
      _w.scroll(0, ScrollToElement.pos);
    }
  },
  GetElementOffset: function (el) {
    var a = this,
      pos =
        el.offsetParent && el.offsetTop + a.GetElementOffset(el.offsetParent);
    return pos;
  },
};
SelectedOptions = {
  count: 0,
  labels: [],
  defaultmsg:
    "You have selected ##SELOPTIONS## options across the following fields: ##FIELDS##.\nYou can only have a maximum of ##MAXLISTSELECT## selected options in total across those specific fields.",
  msg: "",
  maxsel: 16,
  Validate: function () {
    this.msg = "";
    this.count = 0;
    if (this.maxsel == -1) return true;
    this.AddMultipleSelect();
    this.AddDivCheckbox();
    if (this.count > this.maxsel) {
      this.msg = this.defaultmsg
        .replace(/##MAXLISTSELECT##/, this.maxsel)
        .replace(/##SELOPTIONS##/, this.count)
        .replace(/##FIELDS##/, this.labels.join(", "));
      return false;
    } else {
      this.msg = "";
      return true;
    }
  },
  AddMultipleSelect: function () {
    var lb = _d.getElementsByTagName("select"),
      len = lb.length;
    if (len > 0) {
      for (var i = 0; i < len; i++) {
        el = lb[i];
        if (el.type == "select-multiple") {
          lt = NoOfSelected(el);
          this.count += lt;
          if (lt > 0) {
            lbl = this.GetLabel(el);
            this.labels.push(lbl);
          }
        }
      }
    }
  },
  AddDivCheckbox: function () {
    var lb = GF.getElementsByClassName("divCheckBoxList", null, "DIV");
    len = lb.length;
    if (len > 0) {
      for (var i = 0; i < len; i++) {
        el = lb[i];
        lt = this.NoOfChecked(el);
        if (lt > 0) {
          this.count += lt;
          lbl = this.GetLabel(el);
          this.labels.push(lbl);
        }
      }
    }
  },
  GetLabel: function (el) {
    var id = el.id
      .replace(/^(chk|rad|lst|txt|div)/i, "")
      .replace(/CheckboxControl$/i, "");
    var a = "label" + id,
      lb = getEl(a),
      txt = getText(lb);
    txt = txt.replace(":*", "");
    return txt;
  },
  NoOfChecked: function (el) {
    var a = 0,
      chks = GF.getElementsByClassName("checkboxOption", el, "input");
    for (var i = 0, l = chks.length; i < l; i++) {
      var o = chks[i];
      if (o.checked && o.value == "") {
        a = 0;
        break;
      } else if (o.checked && o.value != "") {
        a++;
      }
    }
    return a;
  },
};
function NoOfSelected(a) {
  if (!hasOptions(a)) {
    return 0;
  }
  var b = 0;
  for (var i = 0; i < a.options.length; i++) {
    var o = a.options[i];
    if (o.selected && o.value != "") {
      b++;
    }
  }
  return b;
}
function Trim(v) {
  return v.replace(/(^\s*)([\S\s]+?)(\s*$)/, "$2");
}
function GetBody() {
  return _d.getElementsByTagName("body")[0] || _d.body;
}
function extend(b, c) {
  if (b && c) {
    for (var a in c) {
      b[a] = c[a];
    }
  }
  return;
}
function setAttributes(b, c) {
  b = getObj(b);
  if (b && c) {
    for (var a in c) {
      if (a == "class" || a == "className") {
        b.className = c[a];
      } else if (a == "style") {
        b.style.cssText = c[a];
      } else {
        b.setAttribute(a, c[a]);
      }
    }
  }
  return b;
}
function encodeURL(v) {
  if (v && v.length > 0 && v.indexOf("?") > 0) {
    var q = "",
      a = v.split("?");
    if (a.length == 2) {
      var q = enc(a[1]);
      return a[0] + "?" + q;
    } else {
      return v;
    }
  } else {
    return v;
  }
}
function enc(a) {
  if (typeof encodeURIComponent == "function") {
    return encodeURIComponent(a);
  } else {
    return escape(a);
  }
}
function denc(a) {
  if (typeof decodeURIComponent == "function") {
    return decodeURIComponent(a);
  } else {
    return unescape(a);
  }
}
function addClass(e, c) {
  if (e) {
    if (e.className == "undefined" || e.className == "") {
      e.className = c;
    } else {
      if (!hasClass(e, c)) {
        e.className += " " + c;
      }
    }
  }
}
function delClass(e, c) {
  if (e) {
    if (e.className != "undefined" && e.className != "") {
      if (e.className.split(" ").length > 1) {
        e.className = e.className.replace(new RegExp("\\b" + c + "\\b"), "");
      } else {
        e.className = e.className.replace(new RegExp(c + "\\b"), "");
      }
    }
  }
}
function hasClass(e, c) {
  if (e) {
    if (e.className != "") {
      cs = e.className.split(" ");
      for (i = 0; i < cs.length; i++) {
        if (cs[i] == c) return true;
      }
    }
  }
  return false;
}
function toggleClass(e, c) {
  if (hasClass(e, c)) {
    delClass(e, c);
  } else {
    addClass(e, c);
  }
}
function replaceClasses(e, cl, n) {
  if (e && n != "" && cl) {
    for (var x = 0; x < cl.length; x++) {
      if (hasClass(e, cl[x])) {
        delClass(e, cl[x]);
      }
    }
    addClass(e, n);
  }
}
GE = fncGetEmailAddr = function (a, b) {
  return a + "@" + b;
};
function WinParam(p) {
  if (p == "off" || p == "no" || p == "0" || p == 0) {
    return false;
  } else if (p == "on" || p == "yes" || p == "1" || p == 1) {
    return true;
  } else if (p) {
    return true;
  } else {
    return false;
  }
}
function bookmarksite(a, b) {
  if (_w.sidebar) {
    _w.sidebar.addPanel(a, b, "");
  } else if (_w.opera && _w.print) {
    var c = _d.createElement("a");
    c.setAttribute("href", b);
    c.setAttribute("title", a);
    c.setAttribute("rel", "sidebar");
    c.click();
  } else if (_d.all) {
    _w.external.AddFavorite(b, a);
  }
}
OW = OpenWin = function (a) {
  OpenNewWin("win", 200, 265, 0, 0, 0, 0, 1, 0, 0, 0, a, "win", "");
};
ON = OpenNewWin = function (a, b, c, d, e, f, g, i, j, k, l, m, n, o) {
  if (d == 0 && e == 0) {
    var w = screen.availWidth || screen.width || _w.innerWidth || 0,
      h = screen.availHeight || screen.height || _w.innerHeight || 0;
    e = w > 0 ? (w - b) / 2 : 100;
    d = h > 0 ? (h - c) / 2 : 100;
  }
  if (n == "modal" && _d.all) {
    var sF = "",
      _rv;
    sF += "unadorned:" + (WinParam(j) ? "1;" : "0;");
    sF += "help:" + (WinParam(k) ? "1;" : "0;");
    sF += "status:" + (WinParam(g) ? "1;" : "0;");
    sF += "scroll:" + (WinParam(i) ? "1;" : "0;");
    sF += "resizable:" + (WinParam(f) ? "1;" : "0;");
    sF += b ? "dialogWidth:" + b + "px;" : "";
    sF += c
      ? "dialogHeight:" + (parseInt(c) + (WinParam(g) ? 42 : 0)) + "px;"
      : "";
    sF += d ? "dialogTop:" + d + "px;" : "";
    sF += e ? "dialogLeft:" + e + "px;" : "";
    if (n == "modal") {
      _rv = _w.showModalDialog(m, o ? o : "", sF);
      if ("undefined" != typeof _rv) {
        return _rv;
      }
    }
  } else {
    var sF = "";
    sF += b ? "width=" + b + "," : "";
    sF += c ? "height=" + c + "," : "";
    sF += d ? "top=" + d + "," : "";
    sF += e ? "left=" + e + "," : "";
    sF += "resizable=" + (WinParam(f) ? "1," : "0,");
    sF += "status=" + (WinParam(g) ? "1," : "0,");
    sF += "scrollbars=" + (WinParam(i) ? "1," : "0,");
    sF += "titlebar=" + (WinParam(j) ? "1," : "0,");
    sF += "toolbar=" + (WinParam(k) ? "1," : "0,");
    sF += "menubar=" + (WinParam(l) ? "1," : "0,");
    m = m ? m : "about:blank";
    a = a ? a.replace(/ /gi, "") : "win";
    _rv = _w.open(m, a, sF).focus();
    return _rv;
  }
};
function JobScroller(a, b, c) {
  var d = this,
    e = false; /*@cc_on;@if(@_jscript_version==5.6){e=true}@end;@*/
  var f = 2000,
    g = 1,
    h = 1;
  this.CopySpeed = g;
  this.PauseSpeed = h == 0 ? this.CopySpeed : 0;
  this.ActualHeight = "";
  var i = "ScrollJobs" + a,
    j = "ScrollJobsContainer" + a;
  this.Scroller = _d.getElementById(i);
  this.Container = _d.getElementById(j);
  this.Scroller.style.top = 0;
  this.ScrollerHeight = this.Container.offsetHeight;
  if (!e && b > c) {
    var k = parseInt(this.ScrollerHeight / c);
    this.ActualHeight = parseInt(k * b) + 16;
  } else {
    this.ActualHeight = this.Scroller.offsetHeight;
  }
  if (_w.opera || _n.userAgent.indexOf("Netscape/7") != -1) {
    this.Scoller.style.height = this.ScrollerHeight + "px";
    this.Sroller.style.overflow = "scroll";
    return;
  }
  addEvent(d.Container, "mouseover", function () {
    d.CopySpeed = d.PauseSpeed;
  });
  addEvent(d.Container, "mouseout", function () {
    d.CopySpeed = g;
  });
  setTimeout(function () {
    lefttime = setInterval(function () {
      d.ScrollJobs();
    }, 30);
  }, f);
}
var flag = false;
JobScroller.prototype.ScrollJobs = function () {
  var a = this.Scroller;
  if (parseInt(a.style.top) > this.ActualHeight * -1 + 8) {
    a.style.top = parseInt(a.style.top) - this.CopySpeed + "px";
  } else {
    a.style.top = parseInt(this.ScrollerHeight) + 8 + "px";
  }
};
/* For legacy browsers if(_d.getElementById){G=getEl=function(id,a){if(!a){a=_d}return a.getElementById(id)}}else if(_d.all){G=getEl=function(id,a){if(!a){a=_d}return a.all[id]}}else if(_d.layers){G=getEl=function(id,a){if(!a)a=_d;if(a.layers[id]){return a.layers[id]}else{for(var x=0,y;!y&&x<a.layers.length;x++){y=getEl(id,a.layers[x].document)};return y}}}else{G=getEl=function(id,a){if(!a){a=_d}return a[id]}}*/
G = getEl = function (id, a) {
  if (typeof id == "undefined" || id == "" || !id) {
    return null;
  }
  if (!a) {
    a = _d;
  }
  return a.getElementById(id);
};
function getObj(el) {
  return !el ? _d : typeof el == "string" ? getEl(el) : el;
}
function setText(el, a) {
  el = getObj(el);
  if (el && typeof a == "string") {
    if (el.innerText) {
      el.innerText = a;
    } else if (el.textContent) {
      el.textContent = a;
    } else if (_d.createElement) {
      if (el.firstChild) {
        el.firstChild.nodeValue = a;
      } else {
        el.appendChild(_d.createTextNode(a));
      }
    }
  }
}
function getText(el) {
  el = getObj(el);
  var a = "";
  if (el) {
    if (el.innerText) {
      a = el.innerText;
    } else if (el.textContent) {
      a = el.textContent;
    } else if (el.firstChild && el.firstChild.nodeType == 3) {
      a = el.firstChild.nodeValue;
    }
  }
  return a;
}
function getFlashMovie3(a) {
  var b;
  if (_b.ie) {
    if (_d.getElementById) {
      b = _d.getElementById(a);
      if (b) return b;
    }
  }
  b = _d[a] ? _d[a] : _w[a];
  if (b) return b;
  if (_d.embeds) {
    b = _d.embeds[a];
  }
  return b;
}
function getFlashMovie(a) {
  var r = null,
    o = G(a);
  if (o && o.nodeName == "OBJECT") {
    if (typeof o.SetVariable != "undefined") {
      r = o;
    } else {
      var n = o.getElementsByTagName("object")[0];
      if (n) {
        r = n;
      }
    }
  }
  if (!r) {
    r = _d[a] ? _d[a] : _w[a];
    if (r) return r;
    if (_d.embeds) {
      r = _d.embeds[a];
    }
  }
  return r;
}
function getFlashMovie2(a) {
  if (_b.ie) {
    var b = _d[a];
  } else {
    if (_d.embeds && _d.embeds[a]) {
      var b = _d.embeds[a];
    }
  }
  return b;
}
function preventPaste(e) {
  e = GetEvent(e);
  var a = getKeyCode(e);
  if ((e.ctrlKey && a == 86) || (a == 118 && e.metaKey)) {
    StopEvent(e);
  }
  return;
}
function getIframe(id) {
  var a;
  if (_d.getElementById) {
    return _d.getElementById(id);
  } else if (_w.frames && _w.frames.length) {
    return _w.frames[id];
  }
}
function getIframeWin(a) {
  if (a) {
    if (a.contentWindow) {
      return a.contentWindow;
    } else if (a.contentDocument && _b && _b.opera) {
      return a.contentDocument;
    } else {
      return a;
    }
  }
}
function getIframeDoc(a) {
  if (a) {
    if (a.contentDocument) {
      return a.contentDocument;
    } else if (a.contentWindow.document) {
      return a.contentWindow.document;
    } else if (a.document) {
      return a.document;
    }
  }
}
function nextObject(o) {
  if (o) {
    while (1) {
      o = o.nextSibling;
      if (o) {
        if (o.nodeType == 1) {
          return o;
        }
      } else {
        return;
      }
    }
  }
}
function getQuerystring() {
  var a = "";
  if (location.href) {
    var q = _w.location.search;
    if (q && q.length > 1) {
      a = q.substring(1, q.length);
    }
  }
  return a;
}
var arrScrollers = new Array(),
  IFrameID = "";
function AddScroller(a, b, c) {
  var d = new Scroller(a);
  if (b != "") {
    if (!geEl(c)) {
      alert(
        "Scroller cannot be setup due to no loading iframe with the id of '" +
          c +
          "'"
      );
      return false;
    }
    d.LoadFromFile = true;
    IFrameID = c;
    d.SourceFile = b;
  } else {
    d.LoadFromFile = false;
  }
  arrScrollers[arrScrollers.length] = d;
}
function Scroller(a) {
  var b = this,
    c;
  c = getEl(a);
  var d = a + "_firstPage",
    e = a + "_secondPage";
  if (!getEl(d) || !getEl(e)) {
    alert(
      "Scroller setup incorrectly must specify a first and second page (id = scrollerID_firstPage)"
    );
    return false;
  }
  this.ScrollerName = c.id;
  this.FirstPage = getEl(d);
  this.SecondPage = getEl(e);
  this.LoadFromFile = false;
  this.SourceFile = "";
  this.HTML = "";
  this.MoveInterval = 50;
  this.ScrollDelay = 20;
  this.CanvasColor = "transparent";
  this.LeftPadding = 0;
  this.canvasLeft = c.style.left;
  this.canvasTop = c.style.top;
  this.canvasWidth = c.style.width;
  this.canvasHeight = c.style.height;
  this.canvas = c;
  this.UpperPage = "";
  this.LowerPage = "";
  this.ScrollSpeed = 2;
  this.DoPause = 1;
  this.CopySpeed = this.ScrollSpeed;
  this.PauseSpeed = this.DoPause == 0 ? this.CopySpeed : 0;
}
Scroller.prototype.MoveUp = function () {
  this.UpperPage.style.top =
    parseInt(this.UpperPage.style.top) - this.CopySpeed + "px";
  this.LowerPage.style.top =
    parseInt(this.LowerPage.style.top) - this.CopySpeed + "px";
  if (parseInt(this.LowerPage.style.top) <= 0) {
    if (this.UpperPage.clientHeight) {
      this.UpperPage.style.top =
        parseInt(this.UpperPage.style.top) +
        parseInt(this.UpperPage.clientHeight) * 2 +
        "px";
    } else {
      this.UpperPage.style.top =
        parseInt(this.UpperPage.style.top) +
        parseInt(this.UpperPage.innerHeight) * 2 +
        "px";
    }
    this.RotateThePages();
  }
};
Scroller.prototype.RotateThePages = function () {
  if (this.UpperPage == this.FirstPage) {
    this.UpperPage = this.SecondPage;
    this.LowerPage = this.FirstPage;
    return true;
  }
  this.UpperPage = this.FirstPage;
  this.LowerPage = this.SecondPage;
  return true;
};
Scroller.prototype.ScrollPages = function () {
  var a = this;
  setTimeout(function () {
    lefttime = setInterval(function () {
      a.MoveUp();
    }, a.MoveInterval);
  }, 0);
};
Scroller.prototype.LaunchScroller = function () {
  if (this.SecondPage.clientHeight) {
    this.SecondPage.style.top = this.SecondPage.clientHeight;
  } else {
    this.SecondPage.style.top = this.SecondPage.innerHeight;
  }
  this.ScrollPages();
};
Scroller.prototype.MakeSecondPage = function () {
  var a = this;
  this.SecondPage.style.left = this.LeftPadding;
  addEvent(a.SecondPage, "mouseover", function () {
    a.CopySpeed = a.PauseSpeed;
  });
  addEvent(a.SecondPage, "mouseout", function () {
    a.CopySpeed = a.ScrollSpeed;
  });
  this.LowerPage = this.SecondPage;
  if (this.SecondPage.style) {
    this.SecondPage.style.visibility = "visible";
  } else {
    this.SecondPage.visibility = "visible";
  }
  this.LaunchScroller();
};
Scroller.prototype.ShowAndScroll = function () {
  var a = this;
  this.FirstPage.style.left = this.LeftPadding;
  this.FirstPage.style.top = "0px";
  if (this.FirstPage.style) {
    this.FirstPage.style.visibility = "visible";
  } else {
    this.FirstPage.visibility = "visible";
  }
  this.UpperPage = this.FirstPage;
  addEvent(a.FirstPage, "mouseover", function () {
    a.CopySpeed = a.PauseSpeed;
  });
  addEvent(a.FirstPage, "mouseout", function () {
    a.CopySpeed = a.ScrollSpeed;
  });
  this.MakeSecondPage();
};
Scroller.prototype.FillAllPages = function () {
  var a;
  if (_d.frames) {
    a = this.HTML[0].innerHTML;
  } else {
    a = this.HTML;
  }
  this.FirstPage.innerHTML = a;
  this.SecondPage.innerHTML = a;
};
Scroller.prototype.MakeCanvas = function () {
  var bS = false;
  if (this.LoadFromFile) {
    this.FillAllPages();
  }
  if (this.canvas.clip) {
    this.canvas.clip.width = this.canvasWidth;
    this.canvas.clip.height = this.canvasHeight;
  } else {
    this.canvas.style.clip =
      "rect(0 " + this.canvasWidth + " " + this.canvasHeight + " 0)";
  }
  if (this.canvas.style) {
    bS = true;
    this.canvas.style.width = this.canvasWidth;
    this.canvas.style.height = this.canvasHeight;
  } else {
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
  }
  this.canvas.style.left = this.canvasLeft;
  this.canvas.style.top = this.canvasTop;
  this.canvas.style.backgroundColor = this.CanvasColor;
  if (bS) {
    this.canvas.style.visibility = "visible";
  } else {
    this.canvas.visibility = "visible";
  }
};
Scroller.prototype.FillCanvas = function () {
  var a = this;
  if (this.LoadFromFile) {
    if (_d.frames) {
      this.HTML = _d.frames(IFrameID).document.all.tags("body");
    } else {
      var b = _d.getElementById(IFrameID).contentWindow.document.body;
      this.HTML = b.innerHTML.toString();
    }
  }
  this.MakeCanvas();
  setTimeout(function () {
    a.ShowAndScroll();
  }, a.ScrollDelay);
};
var Loaded = 0,
  intval;
function LoadScrollers() {
  if (arrScrollers.length >= 0) {
    intval = setInterval(LoadScroller, 200);
  }
}
function LoadScroller() {
  if (Loaded < arrScrollers.length) {
    var a = arrScrollers[Loaded];
    if (a.LoadFromFile) {
      _d.getElementById(IFrameID).src = a.SourceFile;
    }
    setTimeout(function () {
      a.FillCanvas();
    }, 100);
    Loaded++;
  } else {
    clearInterval(intval);
  }
}
function IsGecko() {
  var a = _n.userAgent,
    b = a.indexOf("konqueror") != -1 ? true : false,
    c = a.indexOf("safari") != -1 && a.indexOf("mac") != -1 ? true : false,
    d =
      !is_khtml && _n.product && _n.product.toLowerCase() == "gecko"
        ? true
        : false;
  if (d && _n.appName.indexOf("gecko") == -1) {
    return true;
  } else {
    return false;
  }
}
function IsIE() {
  var a = _n.appName;
  if (!_w.opera && a == "Microsoft Internet Explorer") {
    return true;
  } else {
    return false;
  }
}
function IsFirefox() {
  if (!_w.opera && _n.userAgent.indexOf("Firefox") != -1) {
    return true;
  } else {
    return false;
  }
}
function IEVersion() {
  var a = _n.userAgent.toLowerCase(),
    b = _n.appVersion.toLowerCase(),
    c = a.indexOf("mac") != -1,
    d = b.indexOf("msie");
  if (d != -1) {
    if (c) {
      var d = a.indexOf("msie");
      is_minor = parseFloat(a.substring(d + 5, a.indexOf(";", d)));
    } else is_minor = parseFloat(b.substring(d + 5, b.indexOf(";", d)));
    return is_minor;
  } else {
    return -1;
  }
}
function IsIEversion(vs, cm) {
  var r = -1;
  if (_w.opera) {
    return r;
  }
  var a = IEVersion();
  if (a == -1) return -1;
  switch (cm) {
    case 0:
      if (is_minor == vs) {
        r = 1;
      } else {
        r = 0;
      }
      break;
    case 1:
      if (is_minor > vs) {
        r = 1;
      } else {
        r = 0;
      }
      break;
    case 2:
      if (is_minor < vs) {
        r = 1;
      } else {
        r = 0;
      }
      break;
  }
  return r;
}
function logJSFlash() {
  var p = "/jobboard/inc/jwl.asp",
    u =
      "js=1&f=" +
      (_b.flashEnabled ? 1 : 0) +
      "&fv=" +
      Browser.flashVersion +
      "&sp=" +
      (_b.spoof ? 1 : 0);
  var i = new Image(1, 1);
  i.src = p + "?" + u;
  i.onload = function () {
    return;
  };
}
ScriptOnDemand = {};
ScriptOnDemand.Loaded = Array();
ScriptOnDemand.Timers = {};
ScriptOnDemand.LoadScript = function (a, c) {
  var b = _b,
    d = this;
  if (_d.createElement) {
    var f = _d.getElementsByTagName("head")[0];
    if (d.Loaded.indexOf(a) == -1) {
      var g = _d.createElement("script");
      g.setAttribute("type", "text/javascript");
      g.setAttribute("src", a);
      if (typeof c == "function") {
        g.onload = g.onreadystatechange = function () {
          if (
            !g.readyState ||
            g.readyState == "loaded" ||
            g.readyState == "complete"
          ) {
            c();
            d.Loaded.push(a);
            f.removeChild(g);
            f = null;
            g = null;
          }
        };
        if (
          (b.name == "Safari" && b.userAgent.match(/Version\/3/)) ||
          b.name == "Opera"
        ) {
          ScriptOnDemand.Timers[a] = setInterval(function () {
            if (/loaded|complete/.test(_d.readyState)) {
              clearInterval(ScriptOnDemand.Timers[a]);
              c();
              d.Loaded.push(a);
              f.removeChild(g);
              f = null;
              g = null;
            }
          }, 25);
        }
      }
      g.onerror = function () {
        throw "Error loading script: " + a + " " + e.toString();
        return true;
      };
      f.appendChild(g);
    } else {
      if (typeof c == "function") {
        c();
      }
    }
  }
};
function PageQuery(a) {
  this.ParamValues = {};
  this.ParamNo = 0;
  var b,
    c = "";
  if (a && a.length > 0) {
    if (a.substring(0, 1) != "?") a = "?" + a;
    b = a;
  } else {
    if (location.search.length > 0) {
      b = location.href;
    } else {
      b = "";
    }
  }
  this.ParseQuery = function (a) {
    var d = /[?&]([^=]+)(?:=([^&#]*))?/g,
      e = /(\#.*$)/,
      f,
      h,
      i,
      j = 0;
    while ((f = d.exec(a))) {
      h = denc(f[1]);
      val = denc(f[2]);
      if (this.ParamValues[h]) {
        if (h && h != "") this.ParamValues[h] = this.ParamValues[h] + "," + val;
      } else {
        this.ParamValues[h] = val;
        j++;
      }
    }
    this.ParamNo = j;
    i = e.exec(a);
    if (i) c = i[0].replace("#", "");
  };
  if (b.length) {
    this.ParseQuery(b);
  }
  this.GetValue = function (h) {
    if (!this.ParamValues[h]) return "";
    return this.ParamValues[h];
  };
  this.GetAnchor = c;
  this.OutputParams = function () {
    var k = "";
    if (this.ParamValues && this.ParamNo > 0) {
      for (var h in this.ParamValues) {
        k += h + ": " + this.ParamValues[h] + "\n";
      }
    }
    if (c != "") k += "Anchor: " + c + "\n";
    return k;
  };
}
function enumObj(a, b) {
  var l = b && b != "" ? b + " - " : "";
  for (var x in a) {
    try {
    } catch (e) {}
  }
}
function enhanceDocument() {
  if (!/\benhanced\b/.exec(_d.body.className)) {
    _d.body.className += " enhanced";
  }
  var a = _d.getElementsByTagName("link");
  for (i = 0; i < a.length; i++) {
    if (/\bbasicNoCascade\b/.exec(a[i].className)) {
      a[i].disabled = true;
    }
    if (/\benhanced\b/.exec(a[i].className)) {
      a[i].disabled = true;
      a[i].disabled = false;
    }
  }
  _b.cssEnhanced = true;
}
function deleteAllCookies() {
  var ck = _d.cookie.split(";");
  for (var i = 0, l = ck.length; i < l; i++) {
    deleteCookie(ck[i]);
  }
}
function deleteCookie(a) {
  _d.cookie = a + "=; expires=Thu, 01-Jan-70 00:00:01 GMT;";
}
function createCookie(a, b, c) {
  if (c) {
    var d = new Date();
    d.setTime(d.getTime() + c * 24 * 60 * 60 * 1000);
    var e = "; expires=" + d.toGMTString();
  } else var e = "";
  _d.cookie = a + "=" + escape(b) + e + "; path=/";
}
function readCookie(a) {
  var b = a + "=",
    ca = _d.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(b) == 0) {
      var r = denc(c.substring(b.length, c.length));
      return r;
    }
  }
  return null;
}
function SlideMotion(a, b, c, d, f, g, h, i, j) {
  var k = this;
  this.pageid = a;
  this.clickid = c;
  this.slideid = b;
  this.speed = d;
  this.toggle = f;
  this.savestate = j;
  this.defstate = i || "down";
  this.count = 0;
  if (typeof g == "function") {
    this.openfunc = g;
  }
  if (typeof h == "function") {
    this.closefunc = h;
  }
  getObjDesc(this.toggle);
  this.slider = k.GetControlName();
  this.container = getEl(this.slideid);
  if (!this.container) return false;
  this.clickel = getEl(this.clickid);
  if (!this.clickel) return false;
  this.inmotion = false;
  var l = getElementDimensions(this.container, true);
  enumObj(l);
  this.height = l.innerHeight;
  this.boxExtraHeight = l.boxExtraHeight || 0;
  addEvent(k.clickel, "click", function (e) {
    k.DoSlide();
  });
  if (this.savestate) {
    this.savedstate = k.GetSavedState();
  } else {
    this.savedstate = "";
  }
  if (this.savedstate == "up" || this.savedstate == "down") {
    if (this.savedstate == "up") {
      if (this.defstate == "down") {
        this.state = "down";
        k.ChangeState();
      } else {
        this.state = "up";
      }
    } else {
      if (this.defstate == "up") {
        this.state = "up";
        k.ChangeState();
      } else {
        this.state = "down";
      }
    }
  } else {
    this.state = this.defstate;
  }
}
SlideMotion.prototype.ChangeState = function () {
  var a = this;
  if (a.state == "down") {
    this.inmotion = true;
    a.SlideUp();
  } else if (a.state == "up") {
    this.inmotion = true;
    a.SlideDown();
  } else {
    throw (
      "Invalid state passed to slider object; " +
      a.state +
      " is not recognised;"
    );
  }
};
SlideMotion.prototype.GetControlName = function () {
  var a = this,
    name = "";
  name = "slider_" + a.pageid + "_" + a.slideid;
  return name;
};
SlideMotion.prototype.GetSavedState = function () {
  var a = this,
    savedstate;
  if (_b.cookieEnabled) {
    savedstate = readCookie(a.slider);
    if (savedstate && (savedstate == "up" || savedstate == "down")) {
      return savedstate;
    }
  }
  return savedstate;
};
SlideMotion.prototype.DoSlide = function () {
  var a = this;
  if (a.inmotion) {
    return false;
  } else {
    a.inmotion = true;
  }
  a.container.style.overflow = "hidden";
  clearInterval(a.timer);
  if (a.state == "down") {
    a.SlideUp();
  } else {
    a.SlideDown();
  }
};
SlideMotion.prototype.SlideUp = function () {
  var a = this;
  if (getStyle(a.container, "display") != "none") {
    if (a.toggle) {
      a.toggle.style.display = "none";
    }
    a.timer = setInterval(function () {
      a.MoveUp();
    }, 10);
  }
};
SlideMotion.prototype.SlideDown = function () {
  var a = this;
  if (getStyle(a.container, "display") == "none") {
    a.SlideHeight(0);
    a.timer = setInterval(function () {
      a.MoveDown();
    }, 10);
  }
};
SlideMotion.prototype.Completed = function () {
  var a = this;
  clearInterval(a.timer);
  a.inmotion = false;
  if (a.state == "up") {
    a.state = "down";
    if (a.toggle) {
      a.toggle.style.display = "block";
    }
    if (a.openfunc && typeof a.openfunc == "function") {
      a.openfunc.call();
    }
  } else {
    a.state = "up";
    if (a.closefunc && typeof a.closefunc == "function") {
      a.closefunc.call();
    }
  }
  a.container.style.overflow = "auto";
  if (a.savestate) {
    createCookie(a.slider, a.state);
  }
};
SlideMotion.prototype.MoveUp = function () {
  var a = this,
    height = a.SlideHeight(),
    newheight;
  if (height > 0) {
    newheight = height - a.speed;
    if (newheight < 0) {
      newheight = 0;
    }
    a.FadingMove(newheight);
  } else {
    a.SlideHeight(0);
    a.container.style.display = "none";
    a.Completed();
  }
};
SlideMotion.prototype.MoveDown = function () {
  var a = this,
    height = a.SlideHeight(),
    newheight;
  a.container.style.display = "block";
  if (height < a.height) {
    newheight = height + a.speed;
    if (newheight > a.height) {
      newheight = a.height;
    }
    a.FadingMove(newheight);
  } else {
    a.SlideHeight(a.height);
    a.Completed();
  }
};
SlideMotion.prototype.FadingMove = function (a) {
  var b = this;
  b.SlideHeight(a);
  opacity = a / b.height;
  setOpacity(b.container, opacity);
};
SlideMotion.prototype.SlideHeight = function (a) {
  var b = this;
  if (typeof a == "undefined") {
    if (
      b.container.style.display != "none" &&
      b.container.style.display != ""
    ) {
      return b.container.offsetHeight - b.boxExtraHeight;
    }
    var c = b.container.style.display;
    b.container.style.display = "block";
    a = parseInt(b.container.offsetHeight - b.boxExtraHeight);
    b.container.style.display = c;
    return a;
  } else {
    b.container.style.height = a + "px";
  }
};
function getXmlHttp() {
  var a,
    b,
    c = "",
    d = false,
    f = [
      "MSXML2.XMLHTTP.6.0",
      "MSXML2.XMLHTTP.5.0",
      "MSXML2.XMLHTTP.4.0",
      "MSXML2.XMLHTTP.3.0",
      "MSXML2.XMLHTTP",
      "MICROSOFT.XMLHTTP.1.0",
      "MICROSOFT.XMLHTTP.1",
      "MICROSOFT.XMLHTTP",
    ];
  if (typeof XMLHttpRequest != "undefined") {
    try {
      a = new XMLHttpRequest();
      d = true;
    } catch (e) {}
  }
  if (!d && typeof ActiveXObject != "undefined") {
    for (var i = 0; i < f.length; i++) {
      b = f[i];
      try {
        new ActiveXObject(b);
        c = b;
        break;
      } catch (e) {}
    }
    if (c != "") {
      try {
        a = new ActiveXObject(c);
        d = true;
      } catch (e) {}
    }
  }
  if (!d && _w.createRequest) {
    try {
      a = _w.createRequest();
      d = true;
    } catch (e) {}
  }
  if (d && typeof a == "object") {
    Browser.AJAXEnabled = true;
  } else {
    Browser.AJAXEnabled = false;
  }
  return a;
}
X = xmlhttpPost = function (a, b, c, d, e) {
  var f = false;
  if (Browser.AJAXEnabled == false) {
    f = true;
  } else {
    var g = getXmlHttp();
    if (typeof g != "object" || !Browser.AJAXEnabled) {
      f = true;
    }
  }
  if (f) {
    cl = _w.location.href;
    if (cl.indexOf("/jobboard/cands/userTest.asp") == -1) {
      _w.location.href = "/jobboard/cands/userTest.asp?er=1";
    }
    return;
  } else {
    g.open("POST", a, true);
    g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var handler = function () {
      handleXMLHttpResponse(arguments.callee, arguments.callee.xmlhttp);
    };
    handler.xmlhttp = g;
    handler.strResultFunc = c;
    handler.param1 = d;
    handler.param2 = e;
    handler.url = a;
    handler.submit = b;
    g.onreadystatechange = handler;
    g.send(b);
  }
};
function handleXMLHttpResponse(a, b) {
  if (b.readyState == 4) {
    var c = a.param1,
      d = a.param2,
      f = a.url,
      g = a.strResultFunc,
      h = b.responseText;
    var i = -1;
    try {
      i = b.status;
      switch (i) {
        case 404:
          alert(
            "Error: Not Found. The requested URL " + f + " could not be found."
          );
          break;
        case 500:
          handleErrFullPage(h);
          break;
        default:
          if (g != "") {
            if (typeof g == "function") {
              g.call(this, h, c, d);
            } else {
              eval(g + "(h,c,d)");
            }
          } else {
          }
          break;
      }
    } catch (e) {
      return;
    }
  }
  return;
}
function handleErrFullPage(a) {
  alert("handle full error = " + a);
  return;
  var b;
  try {
    b = _w.open("", "errorWin");
    if (b) {
      b.document.write(
        "<html><head><title>Error Message</title></head><body>" +
          a +
          "</body></html>"
      );
      b.document.close();
    } else {
      throw a;
    }
  } catch (e) {
    alert(
      "An error occurred, but the error message cannot be displayed because of your browser's pop-up blocker.\nPlease allow pop-ups from this Web site.\n\nThe error message was\n\n" +
        a
    );
  }
}
var gstrList = "",
  gbReq = false;
function getMouseXY(e) {
  if (!e) e = GetEvent(e);
  var a = 0,
    b = 0;
  if (e) {
    if (e.pageX || e.pageY) {
      a = parseInt(e.pageX + 10);
      b = parseInt(e.pageY);
    } else if (e.clientX || e.clientY) {
      var c = getScrollPosition();
      a = parseInt(e.clientX) + 10 + c.x;
      b = parseInt(e.clientY) + c.y;
    }
  }
  var mouse = { x: a, y: b };
  return mouse;
}
function getViewportSize() {
  var a = 0,
    b = 0;
  if (typeof self.innerWidth != "undefined") {
    a = self.innerWidth;
    b = self.innerHeight;
  } else if (
    typeof _d.documentElement != "undefined" &&
    typeof _d.documentElement.clientWidth != "undefined" &&
    _d.documentElement.clientWidth != 0
  ) {
    a = _d.documentElement.clientWidth;
    b = _d.documentElement.clientHeight;
  } else {
    a = _d.getElementsByTagName("body")[0].clientWidth;
    b = _d.getElementsByTagName("body")[0].clientHeight;
  }
  var size = { width: a, height: b };
  return size;
}
function getScrollPosition() {
  var x = 0,
    y = 0;
  if (typeof _w.pageYOffset == "number") {
    x = _w.pageXOffset;
    y = _w.pageYOffset;
  } else if (
    typeof _d.documentElement != "undefined" &&
    (_d.documentElement.scrollLeft || _d.documentElement.scrollTop)
  ) {
    x = _d.documentElement.scrollLeft;
    y = _d.documentElement.scrollTop;
  } else if (_d.body && (_d.body.scrollLeft || _d.body.scrollTop)) {
    x = _d.body.scrollLeft;
    y = _d.body.scrollTop;
  }
  var position = { x: x, y: y };
  return position;
}
function getPageSize() {
  var a = getViewportSize();
  if (_w.innerHeight && _w.scrollMaxY) {
    xScroll = _d.body.scrollWidth;
    yScroll = _w.innerHeight + _w.scrollMaxY;
  } else if (_d.body.scrollHeight > document.body.offsetHeight) {
    xScroll = _d.body.scrollWidth;
    yScroll = _d.body.scrollHeight;
  } else {
    xScroll = _d.body.offsetWidth;
    yScroll = _d.body.offsetHeight;
  }
  if (yScroll < a.height) {
    pageHeight = a.height;
  } else {
    pageHeight = yScroll;
  }
  if (xScroll < a.width) {
    pageWidth = a.width;
  } else {
    pageWidth = xScroll;
  }
  var pageSize = {
    pageWidth: pageWidth,
    pageHeight: pageHeight,
    viewportWidth: a.width,
    viewportHeight: a.height,
  };
  return pageSize;
}
function findBodyPos(a) {
  var b = _d.body.offsetTop,
    c = _d.body.offsetLeft;
  if (Browser.doesNotIncludeMarginInBodyOffset) {
    (b += parseInt(getCSSStyle(a, "marginTop", _w), 10) || 0),
      (c += parseInt(getCSSStyle(a, "marginLeft", _w), 10) || 0);
  }
  return { left: c, top: b };
}
function getObjDesc(a, p) {
  p = p || false;
  var s = "";
  s += "Object Type: " + typeof a + " - ";
  s += "Object: " + a + " - ";
  if (a) {
    s +=
      (a === _w
        ? "WINDOW"
        : a === _d
        ? "DOCUMENT"
        : a.nodeName
        ? a.nodeName.toString().toUpperCase()
        : "") + " - ";
    s += a.id ? "id: " + a.id + " - " : "";
    s += a.name ? "name: " + a.name + " - " : "";
    s += a.className ? "class: " + a.className + " - " : "";
    s += a.tagName ? "tagName: " + a.tagName + " - " : "";
    s += a.nodeType ? "nodeType: " + a.nodeType + " - " : "";
    s += !p
      ? a.parentNode
        ? "[ PARENT DETAILS = " + getObjDesc(a.parentNode, true) + "]"
        : "[ NO PARENT NODE ]"
      : "";
  } else {
    s += "NULL";
  }
  if (p) return s;
  return "";
}
function findPos(a) {
  var b = 0,
    c = 0;
  if (!a) return { left: b, top: c };
  if (_d.documentElement["getBoundingClientRect"]) {
    if (a === a.ownerDocument.body) {
      return findBodyPos(a);
    }
    var e = a.getBoundingClientRect(),
      doc = a.ownerDocument,
      body = doc.body,
      docEl = doc.documentElement,
      clientTop = docEl.clientTop || body.clientTop || 0,
      clientLeft = docEl.clientLeft || body.clientLeft || 0,
      c =
        e.top +
        (self.pageYOffset ||
          (Browser.boxModel && docEl.scrollTop) ||
          body.scrollTop) -
        clientTop,
      b =
        e.left +
        (self.pageXOffset ||
          (Browser.boxModel && docEl.scrollLeft) ||
          body.scrollLeft) -
        clientLeft;
  } else {
    if (a.x && a.y) {
      c += a.y;
      b += a.x;
    } else {
      if (a === a.ownerDocument.body) {
        return findBodyPos(a);
      } else {
        var g = a,
          j = g.offsetParent,
          k = g,
          doc = g.ownerDocument,
          computedStyle,
          docElem = doc.documentElement,
          body = doc.body,
          defaultView = doc.defaultView,
          prevComputedStyle = defaultView.getComputedStyle(g, null),
          c = g.offsetTop,
          b = g.offsetLeft;
        while ((g = g.parentNode) && g !== body && g !== docElem) {
          computedStyle = defaultView.getComputedStyle(g, null);
          (c -= g.scrollTop), (b -= g.scrollLeft);
          if (g === j) {
            (c += g.offsetTop), (b += g.offsetLeft);
            if (
              Browser.doesNotAddBorder &&
              !(
                Browser.doesAddBorderForTableAndCells &&
                /^t(able|d|h)$/i.test(g.tagName)
              )
            )
              (c += parseInt(computedStyle.borderTopWidth, 10) || 0),
                (b += parseInt(computedStyle.borderLeftWidth, 10) || 0);
            (k = j), (j = g.offsetParent);
          }
          if (
            Browser.subtractsBorderForOverflowNotVisible &&
            computedStyle.overflow !== "visible"
          )
            (c += parseInt(computedStyle.borderTopWidth, 10) || 0),
              (b += parseInt(computedStyle.borderLeftWidth, 10) || 0);
          prevComputedStyle = computedStyle;
        }
        if (
          prevComputedStyle.position === "relative" ||
          prevComputedStyle.position === "static"
        )
          (c += body.offsetTop), (b += body.offsetLeft);
        if (prevComputedStyle.position === "fixed")
          (c += Math.max(docElem.scrollTop, body.scrollTop)),
            (b += Math.max(docElem.scrollLeft, body.scrollLeft));
      }
    }
  }
  return { left: b, top: c };
}
function findPosition(a) {
  var b = findPos(a);
  return { x: b.left, y: b.top };
}
function getElementStyle(a, b, c, d) {
  var e = b == "" ? (c == "" ? "" : c) : b;
  if (e != "") {
    return getCSSStyle(a, e, d);
  } else {
    return "";
  }
}
function setStyles(b, c) {
  var js;
  b = getObj(b);
  if (!b || !c) return;
  for (var a in c) {
    js = toCamelCase(a);
    b.style[js] = c[a];
  }
  return;
}
function fadeTo(a, b, to, c, d) {
  var e = new Date().getTime() + c;
  var f = function () {
    setOpacity(a, b);
    if (b == to) {
      if (typeof d == "function") {
        d.call(this);
      }
      return;
    }
    c = e - new Date().getTime();
    b = c <= 50 ? to : b + (to - b) / (c / 50);
    setTimeout(f, 50);
  };
  f();
}
function getOpacity(a) {
  if (Browser.opacity) {
    return a.style["opacity"];
  } else {
    var b = a.style["filter"].match(/opacity\=(\d+)/i);
    return b ? parseFloat(b[1] / 100) + "" : 1;
  }
}
function setOpacity(a, b) {
  if (Browser.opacity) {
    a.style["opacity"] = b;
  } else {
    a.style.zoom = 1;
    a.style.filter =
      (a.style.filter || "").replace(/alpha\([^)]*\)/, "") +
      (parseInt(b) + "" == "NaN"
        ? ""
        : "alpha(opacity=" + Math.round(b * 100) + ")");
  }
}
function getBorderAndMargin(el) {
  var a, b, c, d, pl, pr, pt, pb, ml, mr, mt, mb, bh, bw, ph, pw, mh, mw;
  el = getObj(el);
  a = parseInt(getCSSStyle(el, "border-left-width"));
  b = parseInt(getCSSStyle(el, "border-right-width"));
  c = parseInt(getCSSStyle(el, "border-bottom-width"));
  d = parseInt(getCSSStyle(el, "border-top-width"));
  a = isNaN(a) ? 0 : a;
  b = isNaN(b) ? 0 : b;
  c = isNaN(c) ? 0 : c;
  d = isNaN(d) ? 0 : d;
  bh = c + d;
  bw = a + b;
  pl = parseInt(getCSSStyle(el, "padding-left"));
  pr = parseInt(getCSSStyle(el, "padding-right"));
  pt = parseInt(getCSSStyle(el, "padding-top"));
  pb = parseInt(getCSSStyle(el, "padding-bottom"));
  pl = isNaN(pl) ? 0 : pl;
  pr = isNaN(pr) ? 0 : pr;
  pt = isNaN(pt) ? 0 : pt;
  pb = isNaN(pb) ? 0 : pb;
  ph = pt + pb;
  pw = pl + pr;
  ml = parseInt(getCSSStyle(el, "margin-left"));
  mr = parseInt(getCSSStyle(el, "margin-right"));
  mt = parseInt(getCSSStyle(el, "margin-top"));
  mb = parseInt(getCSSStyle(el, "margin-bottom"));
  ml = isNaN(ml) ? 0 : ml;
  mr = isNaN(mr) ? 0 : mr;
  mt = isNaN(mt) ? 0 : mt;
  mb = isNaN(mb) ? 0 : mb;
  mh = mb + mt;
  mw = ml + mr;
  var ret = {
    borderLeft: a,
    borderRightWidth: b,
    borderBottomWidth: c,
    borderTopWidth: d,
    borderHeight: bh,
    borderWidth: bw,
    paddingLeft: pl,
    paddingRight: pr,
    paddingHeight: ph,
    paddingBottom: pb,
    paddingHeight: ph,
    paddingWidth: pw,
    marginLeft: ml,
    marginRight: mr,
    marginTop: mt,
    marginBottom: mb,
    marginHeight: mh,
    marginWidth: mw,
  };
  enumObj(ret);
  return ret;
}
function isVisible(a) {
  while (a && a !== _d) {
    var es = getStyle(a, "display");
    if (es == "none") return false;
    a = a.parentNode;
  }
  return true;
}
function getVisibleObj(a) {
  arrEls = [];
  while (a && a !== _d) {
    var es = getStyle(a, "display");
    if (es == "none") {
      arrEls.push(a);
    }
    a = a.parentNode;
  }
  return arrEls;
}
function Swap(a, b, c, d) {
  var g;
  for (var x = 0, l = b.length; x < l; x++) {
    g = b[x];
    g.old = {};
    for (var h in c) {
      g.old[h] = g.style[h];
      g.style[h] = c[h];
    }
  }
  d.call(a);
  for (var x = 0, l = b.length; x < l; x++) {
    g = b[x];
    for (var h in c) {
      g.style[h] = g.old[h];
    }
    try {
      delete g.old;
    } catch (e) {
      g.old = null;
    }
  }
}
function getElementDimensions(el, retBordersAndMargins) {
  var bmp;
  el = getObj(el);
  if (!el) {
    return {};
  }
  var display = getStyle(el, "display");
  if (el.style.display == "none" || el.style.display == null) {
    el.style.display = "block";
    el.style.display = "none";
  }
  var w = 0,
    h = 0,
    cw = 0,
    ch = 0,
    bw = 0,
    bh = 0,
    iw = 0,
    ih = 0,
    pxw = 0,
    pxh = 0,
    pxs = false;
  var arrEls = getVisibleObj(el);
  function getElDim() {
    var els = el.style;
    (w = el.offsetWidth),
      (h = el.offsetHeight),
      (cw = el.clientWidth),
      (ch = el.clientHeight);
    if (els.pixelWidth) {
      (pxw = els.pixelWidth), (pxh = els.pixelHeight);
      if ((pxw > 0 || pxh > 0) && (w > 0 || h > 0)) {
        pxs = true;
        if (Browser.boxModel && !retBordersAndMargins) {
          (bpw = w - pxw), (bph = h - pxh);
        }
      }
    }
    if (retBordersAndMargins || !pxs || !Browser.boxModel) {
      bmp = getBorderAndMargin(el);
      bpw = bmp.borderWidth + bmp.paddingWidth;
      bph = bmp.borderHeight + bmp.paddingHeight;
    }
  }
  if (arrEls && arrEls.length > 0) {
    var styles = { visibility: "hidden", display: "block" };
    Swap(el, arrEls, styles, getElDim);
  } else {
    getElDim();
  }
  if (Browser.boxModel) {
    (iw = w - bpw), (ih = h - bph);
  } else {
    (iw = pxw || w - bpw), (ih = pxh || h - bph);
  }
  var ret = {
    BoxModel: Browser.boxModel,
    QuirksMode: Browser.quirksMode,
    width: w,
    height: h,
    clientWidth: cw,
    clientHeight: ch,
    innerWidth: iw,
    innerHeight: ih,
    boxExtaWidth: bpw,
    boxExtraHeight: bph,
  };
  if (retBordersAndMargins) {
    for (var a in bmp) {
      ret[a] = bmp[a];
    }
  }
  return ret;
}
function getCSSStyle(el, a, b) {
  if (!b) b = _w;
  doc = b.document;
  var c,
    e = getObj(el),
    g = e.style;
  if (e) {
    if (a == "opacity") {
      return getOpacity(e);
    } else if (a == "fontSize" || a == "font-size") {
      return getFontSize(e).style;
    } else if (a == "width") {
      return getElementDimensions(e).width;
    } else if (a == "height") {
      return getElementDimensions(e).height;
    }
    if (a.match(/float/i)) {
      a = Browser.styleFloat;
    }
    ret = getStyle(e, a);
    if (!/^\d+(px)?$/i.test(ret) && /^\d/.test(ret)) {
      if (
        /(em|ex|%|in|cm|mm|pt|pc|small|medium|large|thin|thick)$/i.test(ret)
      ) {
        ret = getPixelSize(e, ret);
      }
    }
    return ret;
  }
}
function toCamelCase(a) {
  var b = a.replace(/\-(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
  return b;
}
function toCSSProp(b) {
  return b.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function getStyle(el, a) {
  var b = getObj(el),
    c = (val = ""),
    d = b.ownerDocument || b.document || _d,
    e = toCamelCase(a),
    g = toCSSProp(a);
  if (
    typeof d.defaultView !== "undefined" &&
    typeof d.defaultView.getComputedStyle !== "undefined"
  ) {
    if (a.match(/float/i)) {
      a = "float";
    }
    var h = d.defaultView.getComputedStyle(b, null);
    if (h) {
      c = h.getPropertyValue(g);
    }
  } else if (b.currentStyle) {
    c = b.currentStyle[e];
  } else if (b.style[e]) {
    c = b.style[e];
  }
  return c;
}
fontCache = {};
function getFontSize(el) {
  var em,
    px,
    a,
    fs,
    u,
    b,
    cn,
    c = false,
    d = false;
  el = typeof el == "string" ? _d.getElementById(el) : el;
  cn = el.id ? el.id : el.tagName == "BODY" ? "BODY" : "";
  fs = getStyle(el, "fontSize");
  if (cn && fontCache[cn]) {
    if (fontCache[cn].style == fs) {
      return fontCache[cn];
    }
  }
  u = fs.match(/^\d*\.?\d*\s*([\w%]+)$/)[1];
  if (fs != "1em") {
    a = getPixelSize(el, "1em");
  } else {
    a = px;
  }
  if (u == "em") {
    px = em2px(fs, el);
    em = fs;
  } else {
    if (u == "%") {
      if (el.tagName == "BODY") {
        px = getPixelSize(el, "1em");
      } else {
        var ps = getFontSize(el.parentNode || el);
        if (/%$/.test(ps.style)) {
          if (ps.style == fs) {
            d = true;
          }
        }
        var px = (ps.px / 100) * parseFloat(fs);
      }
    } else if (u == "pt") {
      px = Math.round(1.3333 * parseFloat(fs));
    } else if (u == "px") {
      px = parseFloat(fs);
    } else {
      px = getPixelSize(el, fs);
    }
    if (d) {
      var e = getPixelSize(el, "1em", true);
      if (e == px) {
        c = false;
      } else {
        if (e == a) {
          px = e;
          c = true;
        }
      }
    }
    em = px2em(parseFloat(px), el);
  }
  var fontSize = { style: fs, px: px, em: em, emu: a, auto: c ? "auto" : "NA" };
  if (cn) {
    fontCache[cn] = fontSize;
  }
  return fontSize;
}
function calcRealSize(a) {
  var b, c, d, e;
  d = _d.createElement("div");
  d.style.visibility = "hidden";
  var w = 0,
    h = 0;
  if (typeof a == "object" && a != null) {
    e = a.style.display;
    a.style.display = "inline";
    d.appendChild(a.cloneNode(true));
    d.style.display = "inline";
    _d.body.appendChild(d);
    w = d.offsetWidth;
    h = d.offsetHeight;
    a.style.display = e;
    _d.body.removeChild(d);
  } else if (typeof a == "string" && a != "") {
    e = d.style.display;
    d.innerHTML = a;
    d.style.display = "inline";
    _d.body.appendChild(d);
    w = d.offsetWidth;
    h = d.offsetHeight;
    d.style.display = e;
    _d.body.removeChild(d);
  }
  return { width: w, height: h };
}
function getPixelSize(el, a) {
  var px,
    el = !el ? _d.body : typeof el == "string" ? getEl(el) : el,
    ue = el.tagName.toUpperCase();
  if (Browser.w3cDOM && Browser.createElement) {
    var b = _d.createElement("div");
    b.style.position = "absolute";
    b.style.visibility = "hidden";
    b.style.lineHeight = "0";
    if (!force && ue != "BODY" && (/(%|em)$/.test(a) || ue === "IMG")) {
      el = el.parentNode || el;
      b.style.height = a;
    } else {
      b.style.borderStyle = "solid";
      b.style.borderBottomWidth = "0";
      b.style.borderTopWidth = a;
    }
    el.appendChild(b);
    px = b.offsetHeight;
    el.removeChild(b);
  } else if (el.currentStyle && /%$/.test(a)) {
    var c = el.style,
      d = c.left,
      e = el.runtimeStyle.left;
    el.runtimeStyle.left = el.currentStyle.left;
    c.left = ret || 0;
    px = c.pixelLeft;
    c.left = d;
    el.runtimeStyle.left = e;
  }
  return px || 0;
}
function px2em(px, el) {
  if (!px || px == "0") return 0;
  var em = getPixelSize(el, "1em"),
    a = (((px / em) * 100) / 100).toFixed(2);
  return a;
}
function em2px(em, el) {
  if (!em || em == "0") return 0;
  em = parseFloat(em) + "em";
  var px = getPixelSize(el, em);
  return px;
}
function getDimensions(id) {
  var a = getElementDimensions(id, false);
  if (a.BoxModel) {
    (width = a.width), (height = a.height);
  } else {
    (width = a.innerWidth + a.boxExtraWidth),
      (height = a.innerHeight + a.boxExtraHeight);
  }
  var dimensions = { width: width, height: height };
  return dimensions;
}
function getWidth(id) {
  var a = 0,
    el = getObj(id);
  if (!el) {
    return 0;
  }
  if (Browser.w3cDOM) {
    return el.offsetWidth || el.clientWidth;
  } else {
    if (Browser.dom == 3) {
      a = parseInt(el.document.width);
    }
  }
  if (typeof a != "number" || a == 0) {
    var b = el.style ? el.style : el;
    a = b.width || b.pixelWidth;
  }
  if (a && !/^\d+(px)?$/i.test(a) && /^\d/.test(a)) {
    a = getPixelSize(el, a);
  }
  return parseInt(a);
}
function getHeight(id) {
  var a = 0,
    el = getObj(id);
  if (!el) {
    return 0;
  }
  if (Browser.w3cDOM) {
    return el.offsetHeight || el.clientHeight;
  } else {
    if (Browser.dom == 3) {
      a = parseInt(el.document.height);
    }
  }
  if (typeof a != "number" || a == 0) {
    var b = el.style ? el.style : el;
    a = b.height || b.pixelHeight;
  }
  if (a && !/^\d+(px)?$/i.test(a) && /^\d/.test(a)) {
    a = getPixelSize(el, a);
  }
  return parseInt(a);
}
PageInit = {
  SetClasses: function () {
    var a = this,
      look4b = [
        "setFocus",
        "setDrag",
        "setDragParent",
        "setPopup",
        "salaryMask",
        "setSystemHelp",
        "setAutoComplete",
      ],
      elements = _d.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
      if (
        elements[i].tagName.toLowerCase() !== "svg" &&
        elements[i].tagName.toLowerCase() !== "lineargradient" &&
        elements[i].tagName.toLowerCase() !== "stop" &&
        elements[i].tagName.toLowerCase() !== "text"
      ) {
        if (elements[i].className.indexOf(" ") >= 0) {
          var b = elements[i].className.split(" ");
          for (var j = 0; j < b.length; j++) {
            if (inArray(look4b, b[j]) >= 0) {
              a.RunSetClass(elements[i], b[j]);
            }
          }
        } else if (inArray(look4b, elements[i].className) >= 0) {
          a.RunSetClass(elements[i], elements[i].className);
        }
      }
    }
  },
  RunSetClass: function (el, a) {
    var b = this;
    switch (a) {
      case "setFocus":
        b.SetFocus(el);
        break;
      case "setDrag":
        b.SetDraggable(el);
        break;
      case "setDragParent":
        b.SetParentDraggable(el);
        break;
      case "setPopup":
        b.SetPopup(el);
        break;
      case "salaryMask":
        b.SetSalaryMask(el);
        break;
      case "setSystemHelp":
        b.SetSystemHelp(el);
        break;
      case "setAutoComplete":
        b.SetAutoComplete(el);
        break;
      default:
        break;
    }
  },
  SetAutoComplete: function (el) {
    el = getObj(el);
    if (el && el.tagName.toLowerCase() == "input") {
      el.setAttribute("autocomplete", "off");
    }
  },
  SetSystemHelp: function (el) {
    el = getObj(el);
    if (el && el.tagName.toLowerCase() == "a") {
      addEvent(el, "click", function (e) {
        OpenNewWin(
          "sysHelp",
          800,
          600,
          0,
          0,
          1,
          0,
          1,
          0,
          0,
          0,
          el.href,
          "sysHelp",
          ""
        );
        StopEvent(e);
        return false;
      });
    }
  },
  SetSalaryMask: function (el) {
    el = getObj(el);
    if (el && el.tagName.toLowerCase() == "input") {
      addEvent(el, "keydown", function (e) {
        SalCharMask(e, this.value);
      });
    }
  },
  SetPopup: function (el) {
    el = getObj(el);
    if (el && el.tagName.toLowerCase() == "a") {
      addEvent(el, "click", function () {
        OpenNewWin(
          "win_" + el.id,
          400,
          600,
          0,
          0,
          1,
          0,
          1,
          0,
          0,
          0,
          el.href,
          "win",
          ""
        );
        return false;
      });
    }
  },
  SetFocus: function (el) {
    el = getObj(el);
    var a = findPosition(el).y,
      height = getViewportSize(el).height,
      scroll = getScrollPosition(el).y;
    if (el) {
      if (a < height + scroll) {
        try {
          el.focus();
        } catch (e) {}
      }
    }
  },
  SetParentDraggable: function (el) {
    el = getObj(el);
    if (el.tagName.toLowerCase() == "div") {
      addEvent(el, "mousedown", function (e) {
        StartDrag(e, this.parentNode.id);
      });
    }
  },
  SetDraggable: function (el) {
    el = getObj(el);
    if (el.tagName.toLowerCase() == "div") {
      addEvent(el, "mousedown", function (e) {
        StartDrag(e, this.id);
      });
    }
  },
  SetFocusAll: function () {
    var a = this,
      arrT = _d.getElementsByClassName("setFocus");
    if (arrT && arrT.length > 0) {
      a.SetFocus(arrT[0]);
    }
  },
  SetDraggableAll: function () {
    var a = this,
      el,
      arrD = _d.getElementsByClassName("setDrag");
    if (arrD && arrD.length > 0) {
      for (var x = 0; x < arrD.length; x++) {
        a.SetDraggable(arrD[x]);
      }
    }
  },
  setPopupAll: function () {
    var a = this,
      el,
      arrD = _d.getElementsByClassName("setPopup");
    if (arrD && arrD.length > 0) {
      for (var x = 0; x < arrD.length; x++) {
        a.SetPopup(arrD[x].id);
      }
    }
  },
  setSalaryMaskAll: function () {
    var a = this,
      el,
      arrD = _d.getElementsByClassName("salaryMask");
    if (arrD && arrD.length > 0) {
      for (var x = 0; x < arrD.length; x++) {
        a.SetSalaryMask(arrD[x].id);
      }
    }
  },
};
InputNotes = {
  FocusElement: [],
  BlurElement: [],
  ExcludeBlank: ["strName"],
  AddedNotes: [],
  DefaultNotes: [],
  OnlyEG: true,
  EG: "e.g.",
  Reformat: function (a, b) {
    if (a != "") {
      var c = InputNotes.EG.replace(".", "\\."),
        word2 = c.toUpperCase();
      var d = "(^[\\s\\S]+?)(" + c + "[\\s\\S]+$)",
        regex1 = new RegExp(d, "i"),
        regex2 = new RegExp(word2, "i");
      a = a.replace(regex1, "$2").replace(regex2, "e.g.");
      a = a.replace(/etc\.?/, "");
      a = a.replace(/DD\/MM\/YYYY/i, "06/10/1976");
      switch (b) {
        case "salary":
          regex1 = new RegExp("(^" + c + "? \\d+?)(\\D*$)", "i");
          a = a.replace(regex1, "$1");
          break;
      }
      a = a.replace(/<\w+[^>]*?>/, "");
    }
    return a;
  },
  GetDefaultNotes: function (id) {
    var n,
      a = "";
    for (var x = 0; x < InputNotes.DefaultNotes.length; x++) {
      n = InputNotes.DefaultNotes[x];
      if (n.id == id) {
        a = n.notes;
        break;
      }
    }
    return a;
  },
  GetNotes: function (el) {
    var a = this,
      b = "",
      html = "",
      n;
    var b = InputNotes.GetDefaultNotes(el.id);
    if (b == "") {
      n = el;
      while (1) {
        n = n.nextSibling;
        if (n) {
          if (n.nodeType == 1 && n.nodeName != "BR") {
            break;
          }
        } else {
          break;
        }
      }
      if (n) {
        if (n.className == "notes") {
          b = getText(n);
          html = n.innerHTML;
        }
        if (InputNotes.OnlyEG) {
          var c = new RegExp(InputNotes.EG.replace(".", "\\."), "i");
          if (!c.test(b)) {
            b = "";
          } else {
            var c2 = new RegExp(
              "(^[\\s\\S]*)(" +
                InputNotes.EG.replace(".", "\\.") +
                "[\\s\\S]+$)",
              "i"
            );
            n.innerHTML = html.replace(
              c2,
              '$1<span class="inputnotes">$2</span>'
            );
          }
        } else {
          addClass(n, "inputnotes");
        }
      }
    }
    return b;
  },
  IsEmpty: function (v) {
    return v == null || v.length == 0 || /^\s+$/.test(v);
  },
  ShowNotes: function () {
    var self = this;
    SS("INPUT[type=text]").each(function () {
      var def = "",
        notes = InputNotes.GetNotes(this);
      if (notes != "" && self.IsEmpty(this.value)) {
        if (/Salary/.test(this.id)) {
          def = "salary";
        }
        this.value = notes = InputNotes.Reformat(notes, def);
        addClass(this, "InputNotes");
        var noteobj = { id: this.id, notes: notes };
        InputNotes.AddedNotes.push(noteobj);
        InputNotes.FocusElement[this.id] = function () {
          if (this.value == notes) {
            this.value = "";
            delClass(this, "InputNotes");
          }
        };
        InputNotes.BlurElement[this.id] = function () {
          if (this.value == "") {
            this.value = notes;
            addClass(this, "InputNotes");
          }
        };
        addEvent(this, "focus", InputNotes.FocusElement[this.id]);
        addEvent(this, "blur", InputNotes.BlurElement[this.id]);
        if (_d.activeElement.id == this.id) {
          this.blur();
          this.hideFocus = false;
        }
      }
    });
  },
  RemoveNotes: function () {
    Debugger.debug = true;
    var id, a;
    for (var x = 0; x < InputNotes.AddedNotes.length; x++) {
      id = InputNotes.AddedNotes[x].id;
      a = InputNotes.AddedNotes[x].notes;
      el = getEl(id);
      if (el) {
        val = el.value;
        if (val == a) {
          el.value = "";
          removeEvent(el, "focus", InputNotes.FocusElement[id]);
          removeEvent(el, "blur", InputNotes.BlurElement[id]);
          delClass(el, "InputNotes");
        }
      }
    }
    return true;
  },
  BlankForm: function () {
    var counter = (blank = 0);
    SS("FORM.styled INPUT[type=text]").each(function () {
      counter++;
      if (this.nodeType) {
        if (this.value == "" || this.value == "0" || this.value.length == 0) {
          blank++;
        } else {
          if (InputNotes.ExcludeBlank.length > 0) {
            for (var x = 0; x < InputNotes.ExcludeBlank.length; x++) {
              if (this.id == InputNotes.ExcludeBlank[x]) {
                blank++;
              }
            }
          }
        }
      }
    });
    if (counter == blank) {
      return true;
    } else {
      return false;
    }
  },
};
DOM(function () {
  SS(
    "FORM INPUT[type=text],FORM INPUT[type=password], FORM SELECT, FORM TEXTAREA"
  ).each(function () {
    addEvent(this, "focus", function () {
      addClass(this, "FormInputFocus");
    });
    addEvent(this, "blur", function () {
      delClass(this, "FormInputFocus");
    });
  });
  PageInit.SetClasses();
  SS("FORM INPUT[type=text],FORM INPUT[type=password]").each(function () {
    if (this.nodeType && hasClass(this, "strength")) {
      var ps = new PasswordStength(this);
      ps.Create();
      ps.Setup();
      ps.TestStrength(this.value);
    }
  });
});
function PasswordStength(el) {
  this.PasswordField = el;
  this.CheckedForm = false;
  this.StepWidth = 0;
  this.MinChars = 6;
  this.Ban = [];
  this.DefaultBanned = [
    "password",
    "password1",
    "pa$$word",
    "psw",
    "admin",
    "user",
    "login",
    "member",
    "test",
    "email",
  ];
  this.InnerBar = null;
  this.OuterBar = null;
  this.TextBar = null;
  this.CurrentValue = "";
  this.CurrentScore = 0;
  this.LastValue = "";
  this.LastDesc = "";
  this.LastClass = "";
  this.LastScore = 0;
  this.LastLevel = "";
  this.StoreStrength = false;
  this.StoreStrengthInputID = "";
  if (typeof PasswordConfig == "object" && PasswordConfig.Levels) {
    this.Levels = PasswordConfig.Levels;
  } else {
    this.Levels = {
      Empty: {
        Class: "empty",
        Desc: "Password Strength",
        Score: 0,
        Level: "Empty",
      },
      VeryWeak: {
        Class: "veryweak",
        Desc: "Very Weak",
        Score: 1,
        Level: "VeryWeak",
      },
      Weak: { Class: "weak", Desc: "Weak", Score: 2, Level: "Weak" },
      Good: { Class: "good", Desc: "Good", Score: 4, Level: "Good" },
      Strong: { Class: "strong", Desc: "Strong", Score: 6, Level: "Strong" },
      VeryStrong: {
        Class: "verystrong",
        Desc: "Very Strong",
        Score: 8,
        Level: "VeryStrong",
      },
    };
  }
  this.CurrentLevel = "Empty";
  this.CurrentClass = "empty";
  if (typeof PasswordConfig == "object" && PasswordConfig.CurrentDesc) {
    this.CurrentDesc = PasswordConfig.CurrentDesc;
  } else {
    this.CurrentDesc = "Password Strength";
  }
}
PasswordStength.prototype.Create = function () {
  var a = getDimensions(this.PasswordField).width,
    rnd = new String(Math.random(new Date().getTime())).replace(/\./g, ""),
    div1 = document.createElement("div"),
    div2 = document.createElement("div");
  (div3 = document.createElement("div")),
    (inp = document.createElement("input")),
    (id = rnd),
    (addinput = false);
  if (getEl("pwdid")) {
    id = getEl("pwdid").value != "" ? getEl("pwdid").value : rnd;
    inp.setAttribute("name", "pswstrengthval_" + id);
    inp.setAttribute("type", "hidden");
    inp.setAttribute("value", "");
    addinput = true;
  } else {
    addinput = false;
  }
  div1.setAttribute("id", "pswstrength_" + id);
  div2.setAttribute("id", "pswstrengthbar_" + id);
  div3.setAttribute("id", "pswstrengthtext_" + id);
  if (addinput) {
    inp.setAttribute("id", "pswstrengthval_" + id);
    inp.setAttribute("name", "pswstrengthval_" + id);
    inp.setAttribute("type", "hidden");
    inp.setAttribute("value", "");
    this.StoreStrengthInputID = "pswstrengthval_" + id;
  }
  addClass(div1, "passwordStrength");
  addClass(div2, "passwordStrengthbar");
  addClass(div3, "passwordStrengthtext");
  div1.appendChild(div2);
  div1.appendChild(div3);
  if (addinput) {
    div1.appendChild(inp);
    this.StoreStrength = true;
  }
  this.PasswordField.parentNode.insertBefore(
    div1,
    this.PasswordField.nextSibling
  );
  this.OuterBar = div1;
  this.InnerBar = div2;
  this.TextBar = div3;
  this.MinChars = 6;
  this.Setup();
};
PasswordStength.prototype.Setup = function () {
  var a = this;
  this.StepWidth = 100 / this.MinChars;
  extend(this.Ban, this.DefaultBanned);
  enumObj(this.Ban);
  addEvent(a.PasswordField, "keyup", function (e) {
    if (a.AllowedKey(e)) {
      a.TestStrength(a.PasswordField.value);
    } else {
    }
  });
};
PasswordStength.prototype.AllowedKey = function (e) {
  var a,
    b = e ? e : GetEvent(e);
  if (!b) return false;
  a = getKeyCode(b);
  if (!a && (b.ctrlKey || b.shiftKey || b.metaKey)) {
    return false;
  }
  if (a == 36 || a == 35 || a == 39 || a == 37) return false;
  return true;
};
PasswordStength.prototype.AddBanned = function () {
  var f = 0,
    i = 0,
    ban = [];
  if (!this.CheckedForm) {
    var a = ["strName", "txtName", "strEmail", "txtEmail", "strClientName"];
    for (var x = 0; x < a.length; x++) {
      var el = getEl(a[x]);
      if (el) {
        i++;
        if (el.value != "" && el.value.length > 0) {
          ban.push(el.value);
          f++;
        }
      }
    }
    if (f > 0) {
      for (var x = 0; x < ban.length; x++) {
        this.Ban.push(ban[x]);
      }
      this.CheckedForm = true;
      enumObj(this.Ban);
    }
    if (i == 0) {
      this.CheckedForm = true;
    }
  }
  return true;
};
PasswordStength.prototype.SetCurrentLevelByName = function (a) {
  this.CurrentLevel = a;
  var b = this.GetLevel(a);
  this.CurrentClass = b.Classthis.CurrentDesc = b.Desc;
};
PasswordStength.prototype.SetCurrentLevelByObject = function (a) {
  if (typeof a == "object") {
    this.CurrentLevel = a.Level;
    this.CurrentClass = a.Class;
    this.CurrentDesc = a.Desc;
  }
};
PasswordStength.prototype.GetLevelScore = function (a) {
  var b,
    max = {};
  if (this.Levels) {
    for (var l in this.Levels) {
      b = this.Levels[l];
      if (a >= b.Score) {
        max = { Level: b.Level, Class: b.Class, a: b.Score, Desc: b.Desc };
      }
    }
  }
  if (typeof max.Desc == "undefined") {
    if (this.IsEmpty(this.CurrentValue)) {
      b = this.GetLevel("Empty");
    } else {
      b = this.GetLevel("VeryWeak");
    }
    max = { Level: b.Level, Class: b.Class, a: b.Score, Desc: b.Desc };
  }
  return max;
};
PasswordStength.prototype.GetLevel = function (a) {
  var b = {};
  if (this.Levels) {
    for (var l in this.Levels) {
      if (a == l) {
        b = this.Levels[l];
        return b;
      }
    }
  }
  return b;
};
PasswordStength.prototype.TestStrength = function (a) {
  this.AddBanned();
  this.CurrentValue = Trim(a);
  if (this.LastValue == this.CurrentValue && !this.IsEmpty(this.CurrentValue)) {
    return;
  }
  var nw = this.StepWidth * a.length;
  this.UpdateBarWidth(nw);
  this.CurrentScore = this.GetStengthScore();
  var b = this.GetLevelScore(this.CurrentScore);
  if (this.StoreStrength) {
    if (getEl(this.StoreStrengthInputID)) {
      getEl(this.StoreStrengthInputID).value = b.Level;
    }
  }
  this.UpdateBarClass(b.Class);
  this.UpdateBarText(b.Desc);
  this.SetCurrentLevelByObject(b);
  this.LastLevel = this.CurrentLevel;
  this.LastScore = this.CurrentScore;
  this.LastValue = this.CurrentValue;
  this.LastClass = this.CurrentClass;
  this.LastDesc = this.CurrentDesc;
  return true;
};
PasswordStength.prototype.ChangeScore = function (a, b) {
  enumObj(a);
  if (b > this.LastScore) {
    if (this.LastLevel == "Empty") {
      a.Level = "VeryWeak";
      a.Class = "veryweak";
      a.Desc = "VeryWeak";
    } else if (this.LastLevel == "VeryWeak") {
      a.Level = "Weak";
      a.Class = "weak";
      a.Desc = "Weak";
    } else if (this.LastLevel == "Weak") {
      a.Level = "Good";
      a.Class = "good";
      a.Desc = "Good";
    } else if (this.LastLevel == "Good") {
      a.Level = "Strong";
      a.Class = "strong";
      a.Desc = "Strong";
    } else if (this.LastLevel == "Strong") {
      a.Level = "VeryStrong";
      a.Class = "verystrong";
      a.Desc = "Very Strong";
    }
  } else if (b < this.LastScore) {
    if (this.LastLevel == "VeryStrong") {
      a.Level = "Strong";
      a.Class = "strong";
      a.Desc = "Strong";
    } else if (this.LastLevel == "Strong") {
      a.Level = "Good";
      a.Class = "good";
      a.Desc = "Good";
    } else if (this.LastLevel == "Good") {
      a.Level = "Weak";
      a.Class = "weak";
      a.Desc = "Weak";
    } else if (this.LastLevel == "Weak") {
      a.Level = "VeryWeak";
      a.Class = "veryweak";
      a.Desc = "Very Weak";
    } else if (
      this.LastLevel == "VeryWeak" &&
      this.IsEmpty(this.CurrentValue)
    ) {
      a.Level = "Empty";
      a.Class = "empty";
      a.Desc = "";
    }
  } else {
    if (this.IsEmpty(this.CurrentValue)) {
      a.Level = "Empty";
      a.Class = "empty";
      a.Desc = "";
    } else if (a.Level == "VeryWeak") {
      a.Level = "VeryWeak";
      a.Class = "veryweak";
      a.Desc = "Very Weak";
    } else {
      a.Level = this.LastLevel || "VeryWeak";
      a.Class = this.LastClass || "veryweak";
      a.Desc = this.LastDesc || "Very Weak";
    }
  }
  return a;
};
PasswordStength.prototype.CountOcc = function (a, re, f) {
  return a.length - a.replace(new RegExp(re, f), "").length;
};
PasswordStength.prototype.GetStengthScore = function () {
  var u = (l = sp = d = s = 0);
  if (this.IsEmpty(this.CurrentValue)) {
    return s;
  }
  u = this.CountOcc(this.CurrentValue, "[A-Z]", "g");
  if (u > 0) {
    s++;
  } else if (u > 2) {
    s++;
  }
  l = this.CountOcc(this.CurrentValue, "[a-z]", "g");
  if (l > 0) {
    s++;
  } else if (l > 2) {
    s++;
  }
  d = this.CountOcc(this.CurrentValue, "[0-9]", "g");
  if (d > 0) {
    s++;
  } else if (d > 2) {
    s++;
  }
  sp = this.CountOcc(this.CurrentValue, "[^sa-z1-9]", "gi");
  s += sp;
  if (this.CurrentValue.length > this.MinChars) {
    s++;
    if (this.CurrentValue.length > this.MinChars + 2) {
      s++;
    }
    if (this.CurrentValue.length > this.MinChars + 4) {
      s++;
    }
    if (this.CurrentValue.length > this.MinChars + 6) {
      s++;
    }
    if (this.CurrentValue.length > this.MinChars + 8) {
      s++;
    }
  }
  if (l >= 1 && u >= 1 && d >= 1 && sp >= 1) {
    if (this.CurrentValue.length > this.MinChars * 2) {
      s += 5;
    } else if (this.CurrentValue.length > this.MinChars) {
      s += 2;
    }
  } else if (l >= 1 && u >= 1 && d >= 1) {
    if (this.CurrentValue.length > this.MinChars * 2) {
      s += 3;
    } else if (this.CurrentValue.length > this.MinChars) {
      s += 2;
    }
  } else if (l >= 1 && d >= 1 && sp >= 1) {
    if (this.CurrentValue.length > this.MinChars * 2) {
      s += 3;
    } else if (this.CurrentValue.length > this.MinChars) {
      s += 2;
    }
  } else if (l >= 1 && sp >= 1) {
    if (this.CurrentValue.length > this.MinChars * 2) {
      s += 3;
    } else if (this.CurrentValue.length > this.MinChars) {
      s += 2;
    }
  }
  if (this.Ban.length > 0) {
    var a = this.CurrentValue.toLowerCase();
    for (var x = 0; x < this.Ban.length; x++) {
      if (a.indexOf(this.Ban[x].toLowerCase()) >= 0) {
        s == 4;
      }
    }
  }
  if (this.CurrentValue.length <= 2) {
    var ws = this.Levels.VeryWeak.Score;
  } else if (this.CurrentValue.length <= 4) {
    var ws = this.Levels.Weak.Score;
    if (s >= ws) {
      s = ws;
    }
  }
  return s;
};
PasswordStength.prototype.IsEmpty = function (v) {
  return v == null || v.length == 0 || /^\s+$/.test(v);
};
PasswordStength.prototype.UpdateBarText = function (nt) {
  if (this.TextBar) {
    setText(this.TextBar, nt);
  }
};
PasswordStength.prototype.UpdateBarWidth = function (w) {
  if (this.InnerBar) {
    if (parseInt(w) >= 100) {
      this.InnerBar.style.width = "100%";
    } else {
      this.InnerBar.style.width = parseInt(w) + "%";
    }
  }
};
PasswordStength.prototype.UpdateBarClass = function (c) {
  if (this.OuterBar) {
    var cl = ["empty", "veryweak", "weak", "good", "strong", "verystrong"];
    replaceClasses(this.OuterBar, cl, c);
  }
};
function setupFloatingContent(e) {
  var a = G("contentFloat");
  if (a) {
    var b = new PageQuery(),
      sc = b.GetValue("display"),
      oc = G("openContent");
    if (sc) {
      openContent(e);
    }
    if (oc) {
      AD(oc, "click", function (e) {
        openContent(e);
      });
    }
  }
}
DOM(function (e) {
  setupFloatingContent(e);
});
var objContentFloat;
function openContent(e) {
  var cw,
    ch,
    x = 0,
    y = 0,
    cc = G("closeContent");
  if (cc) {
    AD(cc, "click", function (e) {
      HideObject(e, "contentFloat");
      StopEvent(e);
    });
  }
  objContentFloat = new Floater("contentFloat");
  setTimeout(showDiv, 500);
}
function showDiv(e) {
  ShowObject(e, "contentFloat", 0, 0, "", "", 0, 0);
  if (G("contentFloat").offsetWidth > G("container").offsetWidth) {
    G("contentFloat").style.width = G("container").offsetWidth - 100 + "px";
  }
  if (G("contentFloat").offsetHeight > 500) {
    G("contentBlock").style.height = "500px";
    G("contentBlock").style.overflow = "auto";
  }
  objContentFloat.width = G("contentFloat").offsetWidth;
  objContentFloat.height = G("contentFloat").offsetHeight;
  var c = objContentFloat.CenterObject();
  objContentFloat.divStartLeft = c.startX;
  objContentFloat.divStartTop = c.startY;
  G("contentFloat").style.top = objContentFloat.divStartTop + "px";
  G("contentFloat").style.left = objContentFloat.divStartLeft + "px";
}
function Lightbox(id, a, b) {
  var c = this;
  this.fade = _b.w3cDOM ? true : false;
  this.contentArea = getObj(id);
  this.contentAreaDim = getDimensions(this.contentArea);
  this.pageDim = getPageSize();
  this.scroll = getScrollPosition();
  this.hideOverflow = "X";
  this.maxOverlayFade = _j.MaxOverlayFade || 0.7;
  this.fadeDuration = _j.FadeDuration || 1000;
  this.fadeOverlayStyles = _j.FadeOverlayStyles || { background: "#333" };
  this.getSizes = function () {
    this.contentAreaDim = getDimensions(this.contentArea);
    this.pageDim = getPageSize();
    this.scroll = getScrollPosition();
    return;
  };
  this.resizeOverlay = function () {
    var d = this.pageDim.pageHeight + "px",
      e = this.pageDim.pageWidth + "px";
    var overlaystyles = {
      height: d,
      width: e,
      position: "absolute",
      top: "0px",
      left: "0px",
    };
    setStyles(this.overlay, overlaystyles);
    return;
  };
  this.centerContent = function () {
    var f, h;
    f = h = 0;
    if (a > 0 && b > 0) {
      (f = a + "px"), (h = b + "px");
    } else {
      var a =
          this.pageDim.viewportWidth / 2 -
          this.contentAreaDim.width / 2 +
          this.scroll.x,
        b =
          this.pageDim.viewportHeight / 2 -
          this.contentAreaDim.height / 2 +
          this.scroll.y;
      f = (a < 0 ? 0 : a) + "px";
      h = (b < 0 ? 0 : b) + "px";
    }
    var contentstyles = { zIndex: 1010, left: f, top: h };
    setStyles(this.contentArea, contentstyles);
    return;
  };
  this.resize = function () {
    c.getSizes();
    c.resizeOverlay();
    c.centerContent();
    return;
  };
  this.showContent = function () {
    if (this.fade) {
      this.overlay = _d.createElement("div");
      var d = this.pageDim.pageHeight + "px",
        e = this.pageDim.pageWidth + "px";
      var overlaystyles = {
        visibility: "hidden",
        backgroundRepeat: "repeat",
        height: d,
        width: e,
        position: "absolute",
        top: "0px",
        left: "0px",
        zIndex: 1001,
      };
      extend(overlaystyles, this.fadeOverlayStyles);
      setStyles(this.overlay, overlaystyles);
      this.overlay.setAttribute("id", "overlay");
      if (this.hideOverflow != "") {
        switch (this.hideOverflow) {
          case "X":
            GetBody().style.overflowX = "hidden";
            break;
          case "Y":
            GetBody().style.overflowY = "hidden";
            break;
          case "XY":
            GetBody().style.overflow = "hidden";
            break;
        }
      }
      GetBody().appendChild(this.overlay);
    }
    this.centerContent();
    if (this.fade) {
      if (G("peelAdLarge")) G("peelAdLarge").style.display = "none";
      if (G("peelAdSmall")) G("peelAdSmall").style.display = "none";
      this.overlay = G("overlay");
      fadeTo(this.overlay, 0, this.maxOverlayFade, this.fadeDuration);
      this.overlay.style.display = "block";
      this.overlay.style.visibility = "visible";
      fadeTo(this.contentArea, 0, 1, this.fadeDuration);
    }
    this.contentArea.style.display = "block";
    AD(_w, "resize", this.resize);
  };
  this.hideContentWin = function () {
    c.contentArea.style.display = "none";
  };
  this.hideOverlay = function () {
    c.overlay.style.display = "none";
    GetBody().removeChild(c.overlay);
    if (G("peelAdLarge")) G("peelAdLarge").style.display = "block";
    if (G("peelAdSmall")) G("peelAdSmall").style.display = "block";
  };
  this.hideContent = function (id) {
    this.contentArea = this.contentArea || getObj(id);
    if (this.fade) {
      fadeTo(
        this.overlay,
        this.maxOverlayFade,
        0,
        this.fadeDuration,
        this.hideOverlay
      );
      fadeTo(this.contentArea, 1, 0, this.fadeDuration, this.hideContentWin);
    } else {
      this.hideContentWin();
    }
    if (this.hideOverflow != "") {
      GetBody().style.overflow = "auto";
    }
    RE(_w, "resize", this.resize);
  };
}
LoadingImage = {
  objLightbox: {},
  div: null,
  loadingID: "LoadingCV",
  visible: false,
  text: "File transfer in progress. Please wait.",
  ChangeLoadingText: function (txt) {
    var self = this;
    setText(getEl("AjaxLoadingText"), txt);
  },
  CreateLoading: function () {
    this.div = document.createElement("div");
    this.div.setAttribute("id", this.loadingID);
    setStyles(this.div, {
      position: "absolute",
      display: "none",
      width: "19em",
      height: "38px",
      padding: "20px 15px 0 55px",
      "font-weight": "bold",
      "font-size": "1.2em",
      border: "1px solid",
      "border-color": "#4d8fcc",
      "border-radius": "10px",
      "-moz-border-radius": "10px",
      "-webkit-border-radius": "10px",
      background:
        "url(/jobboard/images/progressbar/processing.gif) no-repeat scroll 10px 10px #fff",
    });
    var p = document.createElement("p"),
      t = document.createTextNode("File transfer in progress. Please wait.");
    addClass(p, "Loading");
    p.appendChild(t);
    this.div.appendChild(p);
    GetBody().appendChild(this.div);
  },
  HideLoading: function () {
    var a = this;
    var lb = a.objLightbox;
    if (typeof lb == "object" && a.visible) {
      lb.hideOverlay();
      lb.hideContentWin();
      removeEvent(_w, "resize", lb.resize);
    }
  },
  ShowLoading: function (a, b) {
    Debugger.debug = true;
    var c = this;
    if (Browser.w3cDOM) {
      a = getObj(a);
      b = getObj(b);
      c.objLightbox = new Lightbox(a);
      c.objLightbox.hideOverflow = "XY";
      c.objLightbox.showContent();
      c.visible = true;
      if (b) {
        if (b.nodeName && b.nodeName.toUpperCase() == "FORM") {
          if (b) {
            setTimeout(function () {
              b.submit();
            }, 2000);
          }
        } else if (typeof b == "function") {
          setTimeout(function () {
            b.call();
          }, 2000);
        }
      }
    }
    return;
  },
};
var objFloaters = {},
  currentFloater = null,
  debugCount = 0,
  debugStep = 10,
  objWinStats = null;
function OutputWindowStats() {
  if (objWinStats && typeof objWinStats == "object") {
    var a =
      "CaptureMouse = " +
      objWinStats.captureMouse +
      ", MouseX = " +
      objWinStats.mouseX +
      ", MouseY = " +
      objWinStats.mouseY +
      ", ScrollX = " +
      objWinStats.scrollX +
      ", ScrollY = " +
      objWinStats.scrollY +
      ", ViewportWidth = " +
      objWinStats.viewportWidth +
      ", ViewportHeight = " +
      objWinStats.viewportHeight;
  } else {
  }
}
WindowStats = function (e) {
  var a = this;
  this.mouseX = 0;
  this.mouseY = 0;
  this.scrollX = 0;
  this.scrollY = 0;
  this.viewportHeight = 0;
  this.viewportWidth = 0;
  this.debugMoves = 10;
  this.debugStep = 0;
  this.captureMouse = false;
  if (_d.captureEvents && Event) {
    _d.captureEvents(Event.MOUSEMOVE);
  }
  AD(_w, "scroll", function (e) {
    a.UpdateScroll(e);
  });
  AD(_w, "resize", function (e) {
    a.UpdateViewport(e);
  });
  AD(_d, "mousemove", function (e) {
    if (a.captureMouse) {
      a.UpdateMouse(e);
    }
  });
  this.UpdateWindowStats();
};
WindowStats.prototype.Destroy = function (e) {
  var a = this;
  this.captureMouse = false;
  RE(_w, "scroll", function (e) {
    a.UpdateScroll(e);
  });
  RE(_w, "resize", function (e) {
    a.UpdateViewport(e);
  });
  RE(_d, "mousemove", function (e) {
    if (a.captureMouse) {
      a.UpdateMouse(e);
    }
  });
  if (_d.captureEvents && Event) {
    _d.releaseEvents(Event.MOUSEMOVE);
  }
};
WindowStats.prototype.UpdateWindowStats = function (e) {
  this.UpdateMouse(e);
  this.UpdateScroll();
  this.UpdateViewport();
};
WindowStats.prototype.UpdateMouse = function (e) {
  if (!e) e = _w.event;
  var a = getMouseXY(e);
  this.mouseX = a.x;
  this.mouseY = a.y;
  if (this.debugMoves > 0) {
    if (this.debugStep == this.debugMoves) {
      OutputWindowStats();
      this.debugStep = 0;
    } else {
      this.debugStep++;
    }
  }
};
WindowStats.prototype.UpdateScroll = function (e) {
  var a = getScrollPosition();
  this.scrollX = a.x;
  this.scrollY = a.y;
};
WindowStats.prototype.UpdateViewport = function () {
  var a = getViewportSize();
  this.viewportHeight = a.height;
  this.viewportWidth = a.width;
  OutputWindowStats();
};
ShowObject = function (e, id, a, b, c, d, f, i, j, k) {
  var l, m, n;
  k = k || id;
  if (objFloaters[id]) {
    l = objFloaters[id];
  } else {
    l = new Floater(e, id);
  }
  if (!l || !l.exists) return;
  if (!isNaN(parseInt(c))) {
    l.internalWidth = c;
  }
  if (!isNaN(parseInt(d))) {
    l.internalHeight = d;
  }
  if (!isNaN(parseInt(f))) {
    l.internalWidthPadding = f;
  }
  if (!isNaN(parseInt(i))) {
    l.internalHeightPadding = i;
  }
  var o = getDimensions(k);
  var w = parseInt(o.width),
    h = parseInt(o.height);
  if (isNaN(w) || w == 0) {
    if (l.internalWidth > 0) {
      l.width = l.internalWidth + l.internalWidthPadding;
    }
  } else {
    l.width = w;
  }
  if (isNaN(h) || h == 0) {
    if (l.internalHeight > 0) {
      l.height = l.internalHeight + l.internalHeightPadding;
    }
  } else {
    l.height = h;
  }
  l.origPrevMov = j;
  CheckHidden(l);
  if (a == 0 || b == 0) {
    var p = l.CenterObject();
    a = p.startX;
    b = p.startY;
  }
  l.divStartLeft = a;
  l.divStartTop = b;
  l.divStyle.left = l.divStartLeft + l.px;
  l.divStyle.top = l.divStartTop + l.px;
  l.divStyle.display = "block";
};
Floater.prototype.CenterObject = function () {
  var a = this;
  var b = 200,
    c = 200;
  if (!isNaN(a.width)) {
    var b = objWinStats.viewportWidth / 2 - a.width / 2;
    b += objWinStats.scrollX;
  }
  if (!isNaN(a.height)) {
    var c = objWinStats.viewportHeight / 2 - a.height / 2;
    c += objWinStats.scrollY;
  }
  var center = { startX: b, startY: c };
  return center;
};
CheckHidden = function (a) {
  if (a && objWinStats && a.origPrevMov) {
    if (
      a.width + 50 > objWinStats.viewportWidth ||
      a.height + 50 > objWinStats.viewportHeight
    ) {
      a.prevMov = false;
    } else {
      a.prevMov = true;
    }
  } else {
    a.prevMov = false;
  }
  return;
};
HideObject = function (e, id) {
  var a, b;
  if (id) {
    a = getFloatObj(id, null);
    if (a) {
      b = a.divStyle;
    } else {
      var el = G(id);
      b = el.style ? el.style : el;
    }
    b.display = "none";
    if (a) {
      a.intMotion = false;
      a.RemoveEvents();
      a = kill(a);
    }
    if (objFloaters[id]) {
      objFloaters[id] = kill(objFloaters[id]);
    }
  }
  if (objWinStats && typeof objWinStats == "object") {
    objWinStats.Destroy();
  }
  objWinStats = kill(objWinStats);
};
function Floater(e, id) {
  this.id = id;
  this.el = G(id);
  if (!this.el) {
    this.exists = false;
    return;
  } else {
    this.exists = true;
  }
  this.divStyle = this.el.style ? this.el.style : this.el;
  this.posX = 0;
  this.posY = 0;
  this.posLastX = 0;
  this.posLastY = 0;
  this.startPosX = 0;
  this.startPosY = 0;
  this.divStartLeft = 0;
  this.divStartTop = 0;
  this.zIndex = 10000;
  this.mousemove = null;
  this.mouseup = null;
  this.overDiv = false;
  this.inMotion = false;
  this.origPrevMov = false;
  this.prevMov = true;
  this.internalWidth = 0;
  this.internalHeight = 0;
  this.internalWidthPadding = 0;
  this.internalHeightPadding = 0;
  if (_b.dom == 3) {
    this.px = "";
  } else {
    this.px = "px";
  }
  objFloaters[id] = this;
  if (!objWinStats || typeof objWinStats != "object") {
    objWinStats = new WindowStats(e);
  }
}
Floater.prototype.Destroy = function (e) {
  this.RemoveEvents();
};
Floater.prototype.RemoveEvents = function (e) {
  var a = this;
  if (_d.captureEvents && Event) {
    _d.releaseEvents(Event.MOUSEDOWN | Event.MOUSEUP);
  }
  RE(_d, "mousemove", a.onmousemove);
  RE(_d, "mouseup", a.onmouseup);
  this.onmousemove = null;
  this.onmouseup = null;
  return;
};
function StartDrag(e, id) {
  var a = getFloatObj(id, null);
  if (!a) {
    StopEvent(e);
    return;
  } else {
    a.inMotion = true;
  }
  if (!objWinStats || typeof objWinStats != "object") {
    objWinStats = new WindowStats(e);
  } else {
    objWinStats.UpdateMouse(e);
  }
  if (_d.captureEvents && Event) {
    _d.captureEvents(Event.MOUSEDOWN | Event.MOUSEUP);
  }
  var el, x, y;
  if (!id) {
    el = GetElementFromEvent(e);
  }
  objWinStats.captureMouse = true;
  objWinStats.UpdateMouse(e);
  a.startPosX = objWinStats.mouseX;
  a.startPosY = objWinStats.mouseY;
  if (isNaN(parseInt(a.divStyle.left)) || isNaN(parseInt(a.divStyle.left))) {
    var b = findPos(a.el);
    a.divStartLeft = b.left;
    a.divStartTop = b.top;
  } else {
    a.divStartLeft = parseInt(a.divStyle.left, 10);
    a.divStartTop = parseInt(a.divStyle.top, 10);
  }
  a.divStyle.zIndex = ++a.zIndex;
  var c = a.id;
  if (a.mousemove === null) {
    a.onmousemove = function (e) {
      Drag(e, a.id, a);
    };
    AD(_d, "mousemove", a.onmousemove);
  }
  if (a.mouseup === null) {
    a.onmouseup = function (e) {
      StopDrag(e, c, a);
    };
    AD(_d, "mouseup", a.onmouseup);
  }
  StopEvent(e);
}
function ShowDebugStep(a) {
  if (debugCount == debugStep) {
  }
}
function AdjustFloat(e, id, a) {
  if (typeof a != "object") {
    if (objFloaters[id]) {
      var a = objFloaters[id];
    } else {
      ShowDebugStep("no stored float object with this id = " + id);
      return;
    }
  }
}
function getFloatObj(id, a) {
  if (!a || typeof a != "object") {
    if (objFloaters[id]) {
      return objFloaters[id];
    }
  } else {
    return a;
  }
}
function Drag(e, id, a) {
  if (!e) {
    e = _w.event;
  }
  a = getFloatObj(id, a);
  if (a) {
    if (!a.inMotion) {
      StopEvent(e);
      return;
    }
    var x = objWinStats.mouseX,
      y = objWinStats.mouseY;
    if (x == 0 && y == 0) {
      if (this.posLastX >= 5) {
        x = posLastX;
      }
      if (this.posLastY >= 5) {
        y = posLastY;
      }
    }
    var b = parseInt(a.divStartLeft + x - a.startPosX),
      c = parseInt(a.divStartTop + y - a.startPosY);
    if (a.prevMov) {
      if (b < objWinStats.scrollX) {
        b = objWinStats.scrollX;
      } else {
        var d = parseInt(a.width);
        if (!isNaN(d)) {
          if (b + d > objWinStats.viewportWidth + objWinStats.scrollX) {
            b = objWinStats.viewportWidth + objWinStats.scrollX - d;
          }
        }
      }
      if (c < objWinStats.scrollY) {
        c = objWinStats.scrollY;
      } else {
        var f = parseInt(a.height);
        if (!isNaN(f)) {
          if (c + f > objWinStats.viewportHeight + objWinStats.scrollY) {
            c = objWinStats.viewportHeight + objWinStats.scrollY - f;
          }
        }
      }
    }
    a.divStyle.left = b + a.px;
    a.divStyle.top = c + a.px;
    if (x == 0) {
      if (this.posLastX <= 5) {
        this.posLastX = x;
      }
    } else {
      this.posLastX = x;
    }
    if (y == 0) {
      if (this.posLastY <= 5) {
        this.posLastY = y;
      }
    } else {
      this.posLastY = y;
    }
    StopEvent(e);
  }
  if (debugCount == debugStep) {
    debugCount = 0;
  } else {
    debugCount++;
  }
}
function StopDrag(e, id, a) {
  if (!e) {
    e = _w.event;
  }
  a = getFloatObj(id, a);
  if (!a) {
    return;
  }
  a.inMotion = false;
  a.RemoveEvents();
}
var IEPNGFix = _w.IEPNGFix || {};
IEPNGFix.tileBG = function (a, b, c) {
  var e = this.data[a.uniqueID],
    elmW = Math.max(a.clientWidth, a.scrollWidth),
    elmH = Math.max(a.clientHeight, a.scrollHeight),
    bgX = a.currentStyle.backgroundPositionX,
    bgY = a.currentStyle.backgroundPositionY,
    bgR = a.currentStyle.backgroundRepeat;
  if (!e.tiles) {
    e.tiles = { a: a, src: "", cache: [], img: new Image(), old: {} };
  }
  var f = e.tiles,
    pngW = f.img.width,
    pngH = f.img.height;
  if (b) {
    if (!c && b != f.src) {
      f.img.onload = function () {
        this.onload = null;
        IEPNGFix.tileBG(a, b, 1);
      };
      return (f.img.src = b);
    }
  } else {
    if (f.src) c = 1;
    pngW = pngH = 0;
  }
  f.src = b;
  if (
    !c &&
    elmW == f.old.w &&
    elmH == f.old.h &&
    bgX == f.old.x &&
    bgY == f.old.y &&
    bgR == f.old.r
  ) {
    return;
  }
  var pos = {
      top: "0%",
      left: "0%",
      center: "50%",
      bottom: "100%",
      right: "100%",
    },
    x,
    y,
    pc;
  x = pos[bgX] || bgX;
  y = pos[bgY] || bgY;
  if ((pc = x.match(/(\d+)%/))) {
    x = Math.round((elmW - pngW) * (parseInt(pc[1]) / 100));
  }
  if ((pc = y.match(/(\d+)%/))) {
    y = Math.round((elmH - pngH) * (parseInt(pc[1]) / 100));
  }
  x = parseInt(x);
  y = parseInt(y);
  var repeatX = { repeat: 1, "repeat-x": 1 }[bgR],
    repeatY = { repeat: 1, "repeat-y": 1 }[bgR];
  if (repeatX) {
    x %= pngW;
    if (x > 0) x -= pngW;
  }
  if (repeatY) {
    y %= pngH;
    if (y > 0) y -= pngH;
  }
  this.hook.enabled = 0;
  if (!{ relative: 1, absolute: 1 }[a.currentStyle.position]) {
    a.style.position = "relative";
  }
  var g = 0,
    xPos,
    maxX = repeatX ? elmW : x + 0.1,
    yPos,
    maxY = repeatY ? elmH : y + 0.1,
    d,
    s,
    isNew;
  if (pngW && pngH) {
    for (xPos = x; xPos < maxX; xPos += pngW) {
      for (yPos = y; yPos < maxY; yPos += pngH) {
        isNew = 0;
        if (!f.cache[g]) {
          f.cache[g] = _d.createElement("div");
          isNew = 1;
        }
        var i = Math.max(0, xPos + pngW > elmW ? elmW - xPos : pngW),
          clipB = Math.max(0, yPos + pngH > elmH ? elmH - yPos : pngH);
        d = f.cache[g];
        s = d.style;
        s.behavior = "none";
        s.left = xPos - parseInt(a.currentStyle.paddingLeft) + "px";
        s.top = yPos + "px";
        s.width = i + "px";
        s.height = clipB + "px";
        s.clip =
          "rect(" +
          (yPos < 0 ? 0 - yPos : 0) +
          "px," +
          i +
          "px," +
          clipB +
          "px," +
          (xPos < 0 ? 0 - xPos : 0) +
          "px)";
        s.display = "block";
        if (isNew) {
          s.position = "absolute";
          s.zIndex = -999;
          if (a.firstChild) {
            a.insertBefore(d, a.firstChild);
          } else {
            a.appendChild(d);
          }
        }
        this.fix(d, b, 0);
        g++;
      }
    }
  }
  while (g < f.cache.length) {
    this.fix(f.cache[g], "", 0);
    f.cache[g++].style.display = "none";
  }
  this.hook.enabled = 1;
  f.old = { w: elmW, h: elmH, x: bgX, y: bgY, r: bgR };
};
IEPNGFix.update = function () {
  for (var i in IEPNGFix.data) {
    var t = IEPNGFix.data[i].tiles;
    if (t && t.elm && t.src) {
      IEPNGFix.tileBG(t.elm, t.src);
    }
  }
};
IEPNGFix.update.timer = 0;
if (_w.attachEvent && !_w.opera) {
  _w.attachEvent("onresize", function () {
    clearTimeout(IEPNGFix.update.timer);
    IEPNGFix.update.timer = setTimeout(IEPNGFix.update, 100);
  });
}
/*
page: http://www.computerjobs.ie/
url: http://sjbimg.com/jobboardv3/scripts/JS/JobboardGlobal.js?bn=3.1.3
*/
