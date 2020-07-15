//inline prototypes
"function" != typeof String.prototype.startsWith &&
  (String.prototype.startsWith = function (t) {
    return this.slice(0, t.length) === t;
  }),
  "function" != typeof String.prototype.endsWith &&
    (String.prototype.endsWith = function (t) {
      return -1 !== this.indexOf(t, this.length - t.length);
    }),
  "function" != typeof String.prototype.trim &&
    (String.prototype.trim = function () {
      return this.replace(/^\s+|\s+$/g, "");
    }),
  (LL_Utils.loadCss = function (t) {
    var e = document.createElement("link");
    e.setAttribute("rel", "stylesheet"),
      e.setAttribute("type", "text/css"),
      e.setAttribute("href", t),
      document.getElementsByTagName("head")[0].appendChild(e);
  }),
  (LL_Utils.listen = function (t, e, n) {
    if ("string" != typeof e)
      e.addEventListener // W3C DOM
        ? e.addEventListener(t, n, !1)
        : e.attachEvent // IE DOM
        ? (e.attachEvent("on" + t, n),
          e === window //IE8 compatibility
            ? e.document &&
              (e.document.attachEvent("on" + t, n),
              e.document.body && e.document.body.attachEvent("on" + t, n))
            : e === window.document &&
              e.body &&
              e.body.attachEvent("on" + t, n)) // Not much to do
        : (e["on" + t] = n);
    else
      for (var i = e.split(","), o = 0; o < i.length; o++) {
        var r = LL_Utils.$(i[o].replace(/\s/g, ""));
        r && LL_Utils.listen(t, r, n);
      }
  }),
  (LL_Utils.removeListener = function (t, e, n) {
    if ("string" == typeof e)
      for (var i = e.split(","), o = 0; o < i.length; o++) {
        var r = LL_Utils.$(i[o].replace(/\s/g, ""));
        r && LL_Utils.removeListener(t, r, n);
      }
    else
      try {
        e.removeEventListener // W3C DOM
          ? e.removeEventListener(t, n, !1)
          : e.detachEvent // IE DOM
          ? (e.detachEvent("on" + t, n),
            e === window //IE8 compatibility
              ? e.document &&
                (e.document.detachEvent("on" + t, n),
                e.document.body && e.document.body.detachEvent("on" + t, n))
              : e === window.document &&
                e.body &&
                e.body.detachEvent("on" + t, n))
          : (e["on" + t] = null);
      } catch (a) {}
  }),
  (LL_Utils.await = function (t, e) {
    var n = t,
      i = t ? t.split(".") : t;
    if (
      (i && 2 === i.length && (n = i[0]),
      n in window && "undefined" != typeof window[n])
    ) {
      var o = !0;
      if (
        (i &&
          2 === i.length &&
          (o = i[1] in window[n] && "undefined" != typeof window[n][i[1]]),
        o)
      )
        return void (e && e.apply(this, []));
    }
    !(function (t, e) {
      LL_Utils.___internals.await_internal(t, e);
    })(t, e);
  }),
  (LL_Utils.getTimeStamp = function () {
    return window.performance && "function" == typeof performance.now
      ? performance.now()
      : new Date().getTime();
  }),
  (LL_Utils.indexOf = function (t, e) {
    if ("undefined" != typeof t && "function" == typeof t.indexOf)
      return t.indexOf(e);
    for (var n = -1, i = 0; i < t.length; i++)
      if (t[i] === e) {
        n = i;
        break;
      }
    return n;
  }),
  (LL_Utils.___internals.await_internal = function (t, e) {
    LL_Utils.intervals.set(
      "await_" + t,
      function () {
        var n = t,
          i = t ? t.split(".") : t;
        if (
          (i && 2 === i.length && (n = i[0]),
          n in window && "undefined" != typeof window[n])
        ) {
          var o = !0;
          if (
            (i &&
              2 === i.length &&
              (o = i[1] in window[n] && "undefined" != typeof window[n][i[1]]),
            o)
          )
            return (
              LL_Utils.intervals.clear("await_" + t),
              void (e && e.apply(this, []))
            );
        }
      },
      111
    );
  });
var urlPattern = {
  protocol: "",
  query: "",
  domain: "",
  path: "",
  ref: "",
  params: [],
  setupPattern: function (r) {
    (urlPattern.protocol = ""),
      (urlPattern.query = ""),
      (urlPattern.domain = ""),
      (urlPattern.path = ""),
      (urlPattern.ref = ""),
      (urlPattern.params = []),
      (r = r.toLowerCase());
    var t = r.indexOf("://");
    (urlPattern.protocol = r.substring(0, t)),
      (r = /*"http" +*/ r.substring(t + 3));
    var n = r.indexOf("?"),
      u = r.indexOf("/"),
      e = r.indexOf("#");
    0 > n && 0 > u && 0 > e
      ? (urlPattern.domain = r)
      : 0 > n && 0 > e
      ? ((urlPattern.domain = r.substring(0, u)),
        (urlPattern.path = r.substring(u + 1)))
      : 0 > u && 0 > e
      ? ((urlPattern.domain = r.substring(0, n)),
        (urlPattern.query = r.substring(n + 1)))
      : 0 > n &&
        0 > u &&
        ((urlPattern.domain = r.substring(0, e)),
        (urlPattern.ref = r.substring(e + 1))),
      n > 0 && u > 0 && e > 0
        ? ((urlPattern.domain = r.substring(0, u)),
          (urlPattern.path = r.substring(u + 1, n)),
          (urlPattern.query = r.substring(n + 1, e)),
          (urlPattern.ref = r.substring(e + 1)))
        : n > 0 && e > 0
        ? ((urlPattern.domain = r.substring(0, n)),
          (urlPattern.query = r.substring(n + 1, e)),
          (urlPattern.ref = r.substring(e + 1)))
        : u > 0 && e > 0
        ? ((urlPattern.domain = r.substring(0, u)),
          (urlPattern.path = r.substring(u + 1, e)),
          (urlPattern.ref = r.substring(e + 1)))
        : n > 0 &&
          u > 0 &&
          ((urlPattern.domain = r.substring(0, u)),
          (urlPattern.path = r.substring(u + 1, n)),
          (urlPattern.query = r.substring(n + 1))),
      urlPattern.path.length > 0 &&
        urlPattern.path.startsWith("/") &&
        (urlPattern.path = urlPattern.path.subStr(1)),
      // Get url params
      urlPattern.query.length > 0 &&
        (urlPattern.query.indexOf("&") >= 0
          ? (urlPattern.params = urlPattern.query.split("&"))
          : (urlPattern.params = new Array(urlPattern.query)));
  },
  match: function (r, t) {
    // Start match veryfication
    if (
      // Set up the pattern
      (urlPattern.setupPattern(r), !t)
    )
      return !1;
    t = t.toLowerCase();
    var n = t.indexOf("://");
    (-1 == n || n > 6) && (t = "http://" + t), (n = t.indexOf("://"));
    var u = t.substring(0, n);
    t = /*"http" + */ t.substring(n + 3);
    var e = t.indexOf("?"),
      a = t.indexOf("/"),
      s = t.indexOf("#"),
      i = "",
      l = "",
      g = "",
      P = "";
    if (
      (0 > e && 0 > a && 0 > s
        ? (i = t)
        : 0 > e && 0 > s
        ? ((i = t.substring(0, a)), (l = t.substring(a + 1)))
        : 0 > a && 0 > s
        ? ((i = t.substring(0, e)), (g = t.substring(e + 1)))
        : 0 > e && 0 > a && ((i = t.substring(0, s)), (P = t.substring(s + 1))),
      e > 0 && a > 0 && s > 0
        ? ((i = t.substring(0, a)),
          (l = t.substring(a + 1, e)),
          (g = t.substring(e + 1, s)),
          (P = t.substring(s + 1)))
        : e > 0 && s > 0
        ? ((i = t.substring(0, e)),
          (g = t.substring(e + 1, s)),
          (P = t.substring(s + 1)))
        : a > 0 && s > 0
        ? ((i = t.substring(0, a)),
          (l = t.substring(a + 1, s)),
          (P = t.substring(s + 1)))
        : e > 0 &&
          a > 0 &&
          ((i = t.substring(0, a)),
          (l = t.substring(a + 1, e)),
          (g = t.substring(e + 1))),
      urlPattern.query &&
        0 != urlPattern.query.length &&
        "*" != urlPattern.query &&
        "+" != urlPattern.query)
    ) {
      if (urlPattern.query) {
        var h;
        if (((h = g.indexOf("&") >= 0 ? g.split("&") : new Array(g)), !h))
          return !1;
        for (var b = "", d = {}, f = 0; f < h.length; f++) {
          var o = h[f].split("=");
          d[o[0]] = o[1];
        }
        for (var f = 0; f < urlPattern.params.length; f++) {
          b = urlPattern.params[f].split("=")[0];
          var p = urlPattern.params[f].split("=")[1];
          if (!urlPattern.arrayContainsKey(d, b)) return !1;
          if (!urlPattern.equalsWithWildcard(p, d[b])) return !1;
        }
      }
    } else if (!urlPattern.equalsWithWildcard(urlPattern.query, g)) return !1;
    l && l.startsWith("/") && (l = l.substring(1)),
      // The domain must not contain the port
      i.indexOf(":") >= 0 && (i = i.split(":")[0]);
    var W =
      urlPattern.equalsWithWildcard(urlPattern.protocol, u) &&
      urlPattern.equalsHostWithWildcard(urlPattern.domain, i) &&
      urlPattern.equalsWithWildcard(urlPattern.path, l) &&
      urlPattern.equalsWithWildcard(urlPattern.ref, P);
    return W;
  },
  equalsHostWithWildcard: function (r, t) {
    var n = urlPattern.equalsWithWildcard(r, t);
    return (
      !n &&
        r.startsWith("*.") &&
        (n = urlPattern.equalsWithWildcard(r, "." + t)),
      n
    );
  },
  equalsWithWildcard: function (r, t) {
    if (!((r && 0 != r.length) || (t && 0 != t.length))) return !0;
    if ((!t || 0 == t.length) && "*" == r) return !0;
    if (!t || 0 == t.length || !r || 0 == r.length) return !1;
    if (r.startsWith("*")) return t.endsWith(r.substring(1));
    if (r.endsWith("*")) {
      var n = t.startsWith(r.substring(0, r.length - 1));
      return n;
    }
    return r.startsWith("+")
      ? t.endsWith(r.substring(1)) && t.length > r.length - 1
      : r.endsWith("+")
      ? t.startsWith(r.substring(0, r.length - 1)) && t.length > r.length + 1
      : r == t;
  },
  arrayContainsKey: function (r, t) {
    //for(var i=0; i<urlParams.length; i++) {
    for (var n in r) if (n == t) return !0;
    return !1;
  },
};
if (!window.LL_Utils) throw "Storage init error: D0001";
var LL_Storage_Manager = {
  dataServerID: "LL_DataServer",
  dataServerURL: window.LL_Deployment
    ? "https:" +
      LL_Deployment.dataServerPath +
      "/webinterfaces/storage/" +
      LL_Deployment.getRelease() +
      "/"
    : null,
  localStorageSupported: !1,
  safariPrivateMode: !1,
  asyncSupported: !1,
  asyncTimeout: 5e3,
  defaultHandler: function () {},
  commandQueue: [],
  timers: {},
  handlers: {},
  providerName: null,
  iPadChrome: function () {
    for (
      var e = navigator.userAgent,
        a = ["Mozilla", "CriOS", "Safari", "Mobile"],
        r = 0;
      r < a.length;
      r++
    )
      if (e.indexOf(a[r]) < 0) return !1;
    return !0;
  },
  detectStorageType: function () {
    var e = "other",
      a = function () {
        var e = navigator.userAgent;
        if (/trident\/7.0/i.test(e)) return !0;
        if (/msie[\/\s](\d+\.\d+)/i.test(e)) {
          var a =
            /*@cc_on function () {
                switch (@_jscript_version) {
                    case 1.0: return 3.0;
                    case 3.0: return 4.0;
                    case 5.0: return 5.0;
                    case 5.1: return 5.0;
                    case 5.5: return 5.5;
                    case 5.6: return 6.0;
                    case 5.7: return (window.XMLHttpRequest ? 7.0 : 6.0);
                    case 5.8: return 8.0;
                    case 9: return 9.0;
                    case 10: return 10.0;
                    default: return @_jscript_version;
                }
            } () || @*/
            0;
          if (11 === a) return !0;
        }
        return !1;
      },
      r = navigator.userAgent;
    //N.B.: do no change order in which providers are added
    return (
      r &&
        (a() && !window.indexedDB
          ? (e = "ie11_comp")
          : a() || /Edge/i.test(r)
          ? (e = "ie11")
          : /MSIE/i.test(r)
          ? (e = "ie")
          : /Chrome/i.test(r) || LL_Storage_Manager.iPadChrome()
          ? (e = "chrome")
          : /Firefox/i.test(r)
          ? (e = "firefox")
          : /Safari/i.test(r) && (e = "safari")),
      "_" + e
    );
  },
  isStorageSupported: function () {
    try {
      //needed to detect Safari in private mode
      return window.localStorage
        ? (localStorage.setItem("LL_testItem", 1),
          localStorage.removeItem("LL_testItem"),
          !0)
        : !1;
    } catch (e) {
      return (LL_Storage_Manager.safariPrivateMode = !0), !1;
    }
  },
  messageListener: function (e) {
    //must be ASYNC
    var a = e.source,
      r = e.data,
      t = e.origin;
    LL_Storage_Manager.dataServerURL &&
      (!t ||
        LL_Storage_Manager.dataServerURL
          .toLowerCase()
          .startsWith(t.toLowerCase())) &&
      "string" == typeof r &&
      setTimeout(function () {
        LL_Storage_Manager.handleCommand(a, r);
      }, 0);
  },
  init: function (e) {
    (LL_Storage_Manager.asyncReady = !1),
      (LL_Storage_Manager.localStorageSupported = LL_Storage_Manager.isStorageSupported()),
      (LL_Storage_Manager.asyncSupported =
        LL_Storage_Manager.dataServerURL &&
        !LL_Storage_Manager.safariPrivateMode
          ? !!window.postMessage
          : !1),
      (LL_Storage_Manager.handlers.ready = LL_Storage_Manager.onAsyncReady),
      LL_Utils.listen("message", window, LL_Storage_Manager.messageListener),
      e && LL_Storage_Manager.asyncSupported && LL_Storage_Manager.embedFrame();
  },
  embedFrame: function () {
    if (null === LL_Utils.$(LL_Storage_Manager.dataServerID)) {
      var e = document.createElement("iframe");
      (e = document.createElement("iframe")),
        e.setAttribute("id", LL_Storage_Manager.dataServerID),
        e.setAttribute("name", LL_Storage_Manager.dataServerID),
        e.setAttribute(
          "src",
          LL_Storage_Manager.dataServerURL +
            "ll_storage" +
            LL_Storage_Manager.detectStorageType() +
            ".html?version=" +
            LL_Deployment.version
        ),
        (e.width = "1px"),
        (e.height = "1px"),
        (e.frameBorder = 0),
        e.setAttribute("title", "hidden co-browse frame"), //508 compliance
        e.setAttribute("scrolling", "no"),
        e.setAttribute("allowTransparency", "true"),
        e.setAttribute("aria-hidden", "true"),
        e.setAttribute(
          "style",
          "display: block; border: 0 none; width: 1px; height: 1px; position:absolute; top:100%; margin-top:-1px; left:100%; margin-left:-1px;"
        ),
        LL_Utils.listen("load", e, LL_Storage_Manager.onAsyncReady),
        (LL_Storage_Manager.asyncLoadTime = LL_Utils.getTimeStamp()),
        (LL_Storage_Manager.asyncReady = !1),
        0 == LL_Storage_Manager.asyncReadyTimer &&
          (LL_Storage_Manager.asyncReadyTimer = setInterval(function () {
            LL_Storage_Manager.checkAsyncReady() &&
              0 != LL_Storage_Manager.asyncReadyTimer &&
              (clearInterval(LL_Storage_Manager.asyncReadyTimer),
              (LL_Storage_Manager.asyncReadyTimer = 0));
          }, 1e3)),
        null != document.body && document.body.appendChild(e);
    }
  },
  onAsyncReady: function (e) {
    if (
      ((LL_Storage_Manager.asyncReady = !0),
      //DIAGNOSTICS
      "string" == typeof e && (LL_Storage_Manager.providerName = e),
      LL_Storage_Manager.commandQueue.length > 0)
    ) {
      for (var a = 0; a < LL_Storage_Manager.commandQueue.length; a++) {
        var r = LL_Storage_Manager.commandQueue[a];
        frames[LL_Storage_Manager.dataServerID].postMessage(r, "*");
      }
      LL_Storage_Manager.commandQueue = [];
    }
  },
  dataServerReady: function () {
    return (
      LL_Storage_Manager.asyncReady &&
      LL_Utils.$(LL_Storage_Manager.dataServerID)
    );
  },
  formatASCII: function (e) {
    for (var a = "" + e; a.length < 3; ) a = "0" + a;
    return a;
  },
  prepareCommandArg: function (e) {
    if ("object" == typeof e)
      return LL_Storage_Manager.prepareCommandArg(
        LL_Storage_Manager.stringify(e)
      );
    if (e && "string" == typeof e) {
      for (var a = ":,();|{}", r = 0; r < a.length; r++)
        e.indexOf(a.charAt(r)) > -1 &&
          (e = e.replace(
            new RegExp("\\" + a.charAt(r), "g"),
            "LL_LITERAL_" + LL_Storage_Manager.formatASCII(a.charCodeAt(r))
          ));
      return e;
    }
    return e;
  },
  prepareCommandArgs: function () {
    for (var e = "", a = 0; a < arguments.length; a++)
      a > 0 && (e += ","),
        (e += LL_Storage_Manager.prepareCommandArg(arguments[a]));
    return e;
  },
  asyncSendCommand: function (e, a, r, t) {
    LL_Storage_Manager.assertFrameLoaded(),
      a &&
        r &&
        (t
          ? ((LL_Storage_Manager.timers[a] = setTimeout(function () {
              try {
                (LL_Storage_Manager.handlers[a] = null),
                  delete LL_Storage_Manager.handlers[a],
                  delete LL_Storage_Manager.timers[a];
              } catch (e) {}
              t.call();
            }, LL_Storage_Manager.asyncTimeout)),
            (LL_Storage_Manager.handlers[a] = function (e) {
              try {
                clearTimeout(LL_Storage_Manager.timers[a]),
                  delete LL_Storage_Manager.timers[a];
              } catch (t) {}
              r.call(this, e);
            }))
          : (LL_Storage_Manager.handlers[a] = r)),
      LL_Storage_Manager.checkAsyncReady()
        ? frames[LL_Storage_Manager.dataServerID].postMessage(e, "*")
        : (LL_Storage_Manager.commandQueue[
            LL_Storage_Manager.commandQueue.length
          ] = e);
  },
  restoreArg: function (e) {
    if (!e || "string" != typeof e) return e;
    for (; e.indexOf("LL_LITERAL_") > -1; ) {
      var a = e.indexOf("LL_LITERAL_"),
        r = e.substring(a + 11, a + 14);
      e = e.replace(
        new RegExp("LL_LITERAL_" + r, "g"),
        String.fromCharCode(new Number(r))
      );
    }
    return e;
  },
  handleCommand: function (e, a) {
    for (var r = a.split(";"), t = 0; t < r.length; t++) {
      var n,
        o = r[t],
        g = [],
        L = o.indexOf("(");
      if (
        (-1 != L
          ? ((n = o.substring(0, L)),
            (g[0] = LL_Storage_Manager.restoreArg(
              o.substring(L + 1, o.length - 1)
            )))
          : (n = o),
        n)
      )
        if ((g.splice(g.length, 0, e), LL_Storage_Manager.handlers[n]))
          try {
            var s = LL_Storage_Manager.handlers[n];
            if ("ready" !== n && -1 === n.toLowerCase().indexOf("listener"))
              try {
                (LL_Storage_Manager.handlers[n] = null),
                  delete LL_Storage_Manager.handlers[n];
              } catch (i) {}
            s.apply(this, g);
          } catch (_) {}
        else if (LL_Storage_Manager.defaultHandler)
          try {
            g.splice(0, 0, n), LL_Storage_Manager.defaultHandler.apply(this, g);
          } catch (_) {}
    }
  },
  checkAsyncReady: function () {
    return LL_Storage_Manager.asyncReady
      ? !0
      : (LL_Storage_Manager.embedFrame(),
        LL_Utils.getTimeStamp() - LL_Storage_Manager.asyncLoadTime > 4e3 &&
          (LL_Utils.removeNodes(LL_Storage_Manager.dataServerID),
          LL_Storage_Manager.embedFrame()),
        LL_Storage_Manager.asyncReady);
  },
  asyncReadyTimer: 0,
  asyncReady: !1,
  asyncLoadTime: 0,
  setItem: function (e, a, r) {
    if (!e || !a) return !1;
    var t = "" + e + "_" + a;
    if (LL_Storage_Manager.localStorageSupported)
      return localStorage.setItem(t, r), !0;
    //document cookies
    var n = new Date();
    n.setDate(n.getDate() + 1);
    var o = escape(r) + "; expires = " + n.toUTCString();
    return (document.cookie = t + " = " + o), !0;
  },
  setItemAsync: function (e, a, r, t, n) {
    if (LL_Storage_Manager.asyncSupported) {
      var o = t ? "setItem" + e + a + LL_Utils.getTimeStamp() : "",
        g =
          "setItem(" + LL_Storage_Manager.prepareCommandArgs(e, a, r, o) + ")";
      LL_Storage_Manager.asyncSendCommand(g, o, t, n);
    } else LL_Storage_Manager.setItem(e, a, r), t && t.call();
  },
  stringify: function (e) {
    if (window.JSON && JSON.stringify) return JSON.stringify(e);
    if (!e) return "{}";
    var a = "{",
      r = 0;
    for (var t in e) {
      var n = "";
      e.hasOwnProperty(t) &&
        ((n = e[t]),
        (n = n && "object" == typeof n ? stringify(n) : '"' + n + '"')),
        (a += (r++ > 0 ? "," : "") + '"' + t + '":' + n);
    }
    return (a += "}");
  },
  parse: function (e) {
    try {
      if (window.JSON && JSON.parse) return JSON.parse(e);
      for (var a = {}, r = e.split(","), t = 0; t < r.length; t++) {
        var n = r[t].split(":"),
          o = n[0].replace(/"/g, ""),
          g = n[1];
        if (n.length > 2) for (j = 2; j < n.length; j++) g += ":" + n[j];
        0 === t && o.startsWith("{") && (o = o.substring(1)),
          t === r.length - 1 &&
            "}" === g.charAt(g.length - 1) &&
            (g = g.substring(0, g.length - 1)),
          g.startsWith('"') &&
            '"' === g.charAt(g.length - 1) &&
            (g = g.substring(1, g.length - 1)),
          (a[o] = g);
      }
      return a;
    } catch (L) {}
    return {};
  },
  setItemsAsync: function (e, a, r, t) {
    if (LL_Storage_Manager.asyncSupported) {
      var n = r ? "setItems" + e + LL_Utils.getTimeStamp() : "",
        o = "setItems(" + LL_Storage_Manager.prepareCommandArgs(e, n, a) + ")";
      LL_Storage_Manager.asyncSendCommand(o, n, r, t);
    } else {
      for (var g in a) {
        var L = "";
        a.hasOwnProperty(g) && (L = a[g]), LL_Storage_Manager.setItem(e, g, L);
      }
      r && r.call();
    }
  },
  getItem: function (e, a) {
    if (!e || !a) return null;
    var r = "" + e + "_" + a;
    if (LL_Storage_Manager.localStorageSupported)
      return localStorage.getItem(r);
    //document cookies
    var t,
      n,
      o,
      g = document.cookie.split(";");
    for (t = 0; t < g.length; t++)
      if (
        ((n = g[t].substr(0, g[t].indexOf("="))),
        (o = g[t].substr(g[t].indexOf("=") + 1)),
        (n = n.replace(/^\s+|\s+$/g, "")),
        n == r)
      )
        return unescape(o);
    return null;
  },
  getItemAsync: function (e, a, r, t) {
    if (LL_Storage_Manager.asyncSupported) {
      var n = "getItem" + e + a + LL_Utils.getTimeStamp(),
        o = "getItem(" + LL_Storage_Manager.prepareCommandArgs(e, a, n) + ")";
      LL_Storage_Manager.asyncSendCommand(o, n, r, t);
    } else {
      var g = [];
      (g[0] = LL_Storage_Manager.getItem(e, a)),
        setTimeout(function () {
          r.apply(this, g);
        }, 0);
    }
  },
  getItemsAsync: function (e, a, r, t) {
    if (LL_Storage_Manager.asyncSupported) {
      var n = "getItems" + e + LL_Utils.getTimeStamp(),
        o = "getItems(" + LL_Storage_Manager.prepareCommandArgs(e, n, a) + ")";
      r &&
        (t
          ? ((LL_Storage_Manager.timers[n] = setTimeout(function () {
              try {
                (LL_Storage_Manager.handlers[n] = null),
                  delete LL_Storage_Manager.handlers[n],
                  delete LL_Storage_Manager.timers[n],
                  t.call();
              } catch (e) {}
            }, LL_Storage_Manager.asyncTimeout)),
            (LL_Storage_Manager.handlers[n] = function (e) {
              try {
                clearTimeout(LL_Storage_Manager.timers[n]),
                  delete LL_Storage_Manager.timers[n];
              } catch (a) {}
              try {
                var t = LL_Storage_Manager.parse(e);
                r.call(this, t);
              } catch (a) {}
            }))
          : (LL_Storage_Manager.handlers[n] = function (e) {
              try {
                var a = LL_Storage_Manager.parse(e);
                r.call(this, a);
              } catch (t) {}
            })),
        LL_Storage_Manager.asyncSendCommand(o);
    } else {
      for (var g = {}, L = a.split(","), s = 0; s < L.length; s++)
        g[L[s]] = LL_Storage_Manager.getItem(e, L[s]);
      setTimeout(function () {
        r.call(this, g);
      }, 0);
    }
  },
  removeItem: function (e, a) {
    if (!e || !a) return null;
    var r = "" + e + "_" + a;
    if (LL_Storage_Manager.localStorageSupported) localStorage.removeItem(r);
    else {
      var t,
        n,
        o,
        g = document.cookie.split(";");
      for (t = 0; t < g.length; t++)
        if (
          ((n = g[t].substr(0, g[t].indexOf("="))),
          (o = g[t].substr(g[t].indexOf("=") + 1)),
          (n = n.replace(/^\s+|\s+$/g, "")),
          n == r)
        ) {
          //delete this cookie
          document.cookie = r + " = ;expires=Thu, 01 Jan 1970 00:00:01 GMT";
          break;
        }
    }
  },
  removeItemAsync: function (e, a, r, t) {
    if (LL_Storage_Manager.asyncSupported) {
      var n = r ? "removeItem" + e + a + LL_Utils.getTimeStamp() : "",
        o =
          "removeItem(" + LL_Storage_Manager.prepareCommandArgs(e, a, n) + ")";
      LL_Storage_Manager.asyncSendCommand(o, n, r, t);
    } else LL_Storage_Manager.removeItem(e, a), r && r.call();
  },
  clear: function (e) {
    if (!e) return !1;
    if (LL_Storage_Manager.localStorageSupported)
      for (var a = localStorage.length - 1; a > -1; a--) {
        var r = localStorage.key(a);
        r &&
          r.startsWith(e) &&
          //if ((/^namespace/).test(key)) {
          localStorage.removeItem(r);
      }
    else {
      //document cookies
      var a,
        t,
        n,
        o = document.cookie.split(";");
      for (a = 0; a < o.length; a++)
        (t = o[a].substr(0, o[a].indexOf("="))),
          (n = o[a].substr(o[a].indexOf("=") + 1)),
          (t = t.replace(/^\s+|\s+$/g, "")),
          t.startsWith(e + "_") &&
            //delete this cookie
            (document.cookie = t + " = ;expires=Thu, 01 Jan 1970 00:00:01 GMT");
    }
  },
  clearAsync: function (e, a, r) {
    if (LL_Storage_Manager.asyncSupported) {
      var t = a ? "clear" + e + LL_Utils.getTimeStamp() : "",
        n = "clear(" + LL_Storage_Manager.prepareCommandArgs(e, t) + ")";
      LL_Storage_Manager.asyncSendCommand(n, t, a, r);
    } else LL_Storage_Manager.clear(e), a && a.call();
  },
  assertFrameLoaded: function () {
    !document.getElementById(LL_Storage_Manager.dataServerID) &&
      LL_Storage_Manager.asyncReady &&
      ((LL_Storage_Manager.asyncReady = !1), LL_Storage_Manager.init(!0));
  },
};
LL_Storage_Manager.init(!0);
if (!window.LL_Deployment) throw "Cobrowse_Manager init error: D0001";
var LL_Cobrowse_Manager = {
  Events: {
    ChatCobrowseInitiated: {
      name: "ChatCobrowseInitiated",
      addEventCommand: "addChatSessionListener",
      removeEventCommand: "removeChatSessionListener",
      invalidateCommand: "invalidateChatSession",
      dispatchEventCommand: "newSession",
      dispatch: function (e, n, t) {
        return LL_Cobrowse_Manager.dispatchEvent(
          LL_Cobrowse_Manager.Events.ChatCobrowseInitiated,
          e,
          n,
          t
        );
      },
      listen: function (e, n) {
        return LL_Cobrowse_Manager.addEventListener(
          LL_Cobrowse_Manager.Events.ChatCobrowseInitiated,
          e,
          n
        );
      },
      invalidate: function (e) {
        var n = LL_Deployment.siteCode;
        return LL_Cobrowse_Manager.invalidateEvent(
          LL_Cobrowse_Manager.Events.ChatCobrowseInitiated,
          n,
          e
        );
      },
    },
    ChatCobrowseTerminated: {
      name: "ChatCobrowseTerminated",
      addEventCommand: "addChatSessionTerminatedListener",
      removeEventCommand: "removeChatSessionTerminatedListener",
      invalidateCommand: "invalidateChatSessionTerminated",
      dispatchEventCommand: "ChatSessionTerminated",
      eventsToInvalidate: [],
      dispatch: function (e) {
        return LL_Cobrowse_Manager.dispatchEvent(
          LL_Cobrowse_Manager.Events.ChatCobrowseTerminated,
          e,
          e
        );
      },
      listen: function (e, n) {
        return LL_Cobrowse_Manager.addEventListener(
          LL_Cobrowse_Manager.Events.ChatCobrowseTerminated,
          e,
          n
        );
      },
      invalidate: function (e) {
        return LL_Cobrowse_Manager.invalidateEvent(
          LL_Cobrowse_Manager.Events.ChatCobrowseTerminated,
          e,
          e
        );
      },
    },
    NumberGenerated: {
      name: "NumberGenerated",
      addEventCommand: "addSessionStartListener",
      removeEventCommand: "removeSessionStartListener",
      invalidateCommand: "invalidateSession",
      dispatchEventCommand: "newStandaloneSession",
      dispatch: function (e, n) {
        return LL_Cobrowse_Manager.dispatchEvent(
          LL_Cobrowse_Manager.Events.NumberGenerated,
          e,
          n
        );
      },
      listen: function (e, n) {
        return LL_Cobrowse_Manager.addEventListener(
          LL_Cobrowse_Manager.Events.NumberGenerated,
          e,
          n
        );
      },
      invalidate: function (e) {
        var n = LL_Deployment.siteCode;
        return LL_Cobrowse_Manager.invalidateEvent(
          LL_Cobrowse_Manager.Events.NumberGenerated,
          n,
          e
        );
      },
    },
    SessionDisconnected: {
      //invalidates all other events with the same presentation token
      name: "SessionDisconnected",
      addEventCommand: "addSessionDisconnectedListener",
      removeEventCommand: "removeSessionDisconnectedListener",
      invalidateCommand: "invalidateDisconnectedEvent",
      dispatchEventCommand: "disconnectSession",
      eventsToInvalidate: [],
      dispatch: function (e) {
        return LL_Cobrowse_Manager.dispatchEvent(
          LL_Cobrowse_Manager.Events.SessionDisconnected,
          e,
          e
        );
      },
      listen: function (e, n) {
        return LL_Cobrowse_Manager.addEventListener(
          LL_Cobrowse_Manager.Events.SessionDisconnected,
          e,
          n
        );
      },
      invalidate: function (e) {
        return LL_Cobrowse_Manager.invalidateEvent(
          LL_Cobrowse_Manager.Events.SessionDisconnected,
          e,
          e
        );
      },
    },
    EscalationAccepted: {
      name: "EscalationAccepted",
      addEventCommand: "addEscalationAcceptedListener",
      removeEventCommand: "removeEscalationAcceptedListener",
      invalidateCommand: "invalidateEscalationEvent",
      dispatchEventCommand: "acceptEscalation",
      eventsToInvalidate: [],
      dispatch: function (e) {
        return LL_Cobrowse_Manager.dispatchEvent(
          LL_Cobrowse_Manager.Events.EscalationAccepted,
          e,
          e
        );
      },
      listen: function (e, n) {
        return LL_Cobrowse_Manager.addEventListener(
          LL_Cobrowse_Manager.Events.EscalationAccepted,
          e,
          n
        );
      },
      invalidate: function (e) {
        return LL_Cobrowse_Manager.invalidateEvent(
          LL_Cobrowse_Manager.Events.EscalationAccepted,
          e,
          e
        );
      },
    },
    ContextReady: {
      name: "ContextReady",
      addEventCommand: "addContextReadyListener",
      removeEventCommand: "removeContextReadyListener",
      invalidateCommand: null,
      dispatchEventCommand: "contextReady",
      dispatch: function (e) {
        var n = Math.floor(100001 * Math.random()),
          //DIAGNOSTICS
          t =
            LL_Deployment.scriptServerPath +
            "/webinterfaces/integrated/public/log_data.aspx";
        return LL_Cobrowse_Manager.dispatchEvent(
          LL_Cobrowse_Manager.Events.ContextReady,
          e,
          n,
          t
        );
      },
      listen: function (e, n) {
        return LL_Cobrowse_Manager.addEventListener(
          LL_Cobrowse_Manager.Events.ContextReady,
          e,
          n
        );
      },
      invalidate: function () {
        return LL_Cobrowse_Manager.invalidateEvent(
          LL_Cobrowse_Manager.Events.ChatCobrowseInitiated
        );
      },
    },
    ContextStateChange: {
      name: "ContextStateChange",
      localEvent: !0,
      addEventCommand: null,
      remoteEventCommand: null,
      invalidateCommand: null,
      dispatchEventCommand: null,
      dispatch: function () {
        var e = LL_Cobrowse_Manager.dispatchEvent(
          LL_Cobrowse_Manager.Events.ContextStateChange
        );
        if ("function" == typeof LL_Cobrowse_Manager.Context.onreadystatechange)
          try {
            LL_Cobrowse_Manager.Context.onreadystatechange.apply(this, []),
              (e = !0);
          } catch (n) {}
        return e;
      },
      listen: function (e) {
        return LL_Cobrowse_Manager.addEventListener(
          LL_Cobrowse_Manager.Events.ContextStateChange,
          null,
          e
        );
      },
      remove: function (e) {
        return LL_Cobrowse_Manager.removeEventListener(
          LL_Cobrowse_Manager.Events.ContextStateChange,
          null,
          e
        );
      },
    },
  },
  Session: {
    start: function () {
      //PUBLIC function to start a session
      return LL_Session.start();
    },
    disconnect: function (e) {
      return LL_Session.stop(e);
    },
    getState: function () {
      var e = { Active: !1, LastKnownMode: null },
        n = LL_Cobrowse_Manager.Context.getType(),
        t = LL_Cobrowse_Manager.readyState();
      //launcher mode
      //engine mode
      return (
        (e.Active = t === LL_Cobrowse_Manager.Context.contextStates.IN_SESSION),
        n === LL_Cobrowse_Manager.Context.contextIDs.LAUNCHER
          ? "ICB" === LL_ICB_Core.CobrowseMode
            ? (e.LastKnownMode =
                "undefined" != typeof LL_ICB_Core.LastKnownMode
                  ? LL_ICB_Core.LastKnownMode
                  : "ICB")
            : (e.LastKnownMode = "ACB")
          : n === LL_Cobrowse_Manager.Context.contextIDs.ENGINE &&
            (e.LastKnownMode =
              "undefined" != typeof LL_ICB_Core.LastKnownMode
                ? LL_ICB_Core.LastKnownMode
                : "ICB"),
        e
      );
    },
  },
  Context: {
    contextIDs: {
      UNKNOWN: "UNKNOWN",
      MINI_LAUNCHER: "MINI_LAUNCHER",
      LAUNCHER: "LAUNCHER",
      ENGINE: "ENGINE",
    },
    contextStates: {
      UNNOWN: "UNKNOWN",
      INIT: "INIT",
      STANDBY: "STANDBY",
      IN_SESSION: "IN_SESSION",
    },
    getType: function () {
      //returns:
      //          "MINI_LAUNCHER" for minilauncher.js context (engine load not started or completed),
      //          "LAUNCHER" for launcher context (engine load not started or completed),
      //          "ENGINE" for engine context
      //          "UNKNOWN" for anything else
      //returns:
      //          "MINI_LAUNCHER" for minilauncher.js context (engine load not started or completed),
      //          "LAUNCHER" for launcher context (engine load not started or completed),
      //          "ENGINE" for engine context
      //          "UNKNOWN" for anything else
      return window.LL_ICB_Core
        ? "undefined" != typeof LL_ICB_Core.ltb_urls
          ? LL_Cobrowse_Manager.Context.contextIDs.ENGINE
          : window.LL_Mini_Launcher
          ? LL_Cobrowse_Manager.Context.contextIDs.MINI_LAUNCHER
          : LL_Cobrowse_Manager.Context.contextIDs.LAUNCHER
        : LL_Cobrowse_Manager.Context.contextIDs.UNKNOWN;
    },
    readyState: function () {
      //returns:
      //          "INIT" when current module is in INIT state (after INIT is complete it should change to STANDBY or IN_SESSION)
      //          "STANDBY" when current module is awaiting for user action (session not active)
      //          "IN_SESSION" when session is in progress - or session disconnect is in progress
      //          "UNKNOWN" for anything else
      var e = LL_Cobrowse_Manager.Context.getType();
      //mini-launcher context, engine not loaded
      //launcher mode
      //ENGINE mode
      return e === LL_Cobrowse_Manager.Context.contextIDs.UNKNOWN
        ? LL_Cobrowse_Manager.Context.contextStates.UNNOWN
        : window.LL_Session &&
          (LL_Session.launchNewSID || LL_Session.launchElement)
        ? LL_Cobrowse_Manager.Context.contextStates.INIT
        : e === LL_Cobrowse_Manager.Context.contextIDs.MINI_LAUNCHER
        ? window.LL_initInProgress
          ? LL_Cobrowse_Manager.Context.contextStates.INIT
          : LL_Mini_Launcher.pingWaitTimer
          ? LL_Cobrowse_Manager.Context.contextStates.INIT
          : LL_Mini_Launcher.mobSafariPingWait
          ? LL_Cobrowse_Manager.Context.contextStates.INIT
          : LL_Mini_Launcher.engineStarted
          ? LL_Cobrowse_Manager.Context.contextStates.INIT
          : LL_Cobrowse_Manager.Context.contextStates.STANDBY
        : e === LL_Cobrowse_Manager.Context.contextIDs.LAUNCHER
        ? window.LL_initInProgress
          ? LL_Cobrowse_Manager.Context.contextStates.INIT
          : window.LL_PingTimer
          ? LL_Cobrowse_Manager.Context.contextStates.INIT
          : LL_ICB_Core.mobSafariPingWait
          ? LL_Cobrowse_Manager.Context.contextStates.INIT
          : LL_ICB_Core.StartSessionInitiated
          ? LL_Cobrowse_Manager.Context.contextStates.INIT
          : LL_ICB_Core.activePingVerificationFromStartSession
          ? LL_Cobrowse_Manager.Context.contextStates.INIT
          : LL_ICB_Core.engineStarted
          ? LL_Cobrowse_Manager.Context.contextStates.INIT
          : LL_ICB_Core.presentationToken
          ? LL_Cobrowse_Manager.Context.contextStates.IN_SESSION
          : LL_Cobrowse_Manager.Context.contextStates.STANDBY
        : e == LL_Cobrowse_Manager.Context.contextIDs.ENGINE &&
          window.communicationHandler
        ? window.LL_initInProgress
          ? LL_Cobrowse_Manager.Context.contextStates.INIT
          : LL_ICB_Core.initPingTimer
          ? LL_Cobrowse_Manager.Context.contextStates.INIT
          : LL_ICB_Core.mobSafariPingWait
          ? LL_Cobrowse_Manager.Context.contextStates.INIT
          : LL_ICB_Core.StartSessionInitiated
          ? LL_Cobrowse_Manager.Context.contextStates.INIT
          : LL_ICB_Core.activePingVerificationFromStartSession
          ? LL_Cobrowse_Manager.Context.contextStates.INIT
          : LL_ICB_Core.presentationToken ||
            communicationHandler.presentationToken
          ? LL_Cobrowse_Manager.Context.contextStates.IN_SESSION
          : LL_Cobrowse_Manager.Context.contextStates.STANDBY
        : LL_Cobrowse_Manager.Context.contextStates.UNNOWN;
    },
    onreadystatechange: void 0,
  },
  moduleState: {
    UNNOWN: "UNKNOWN",
    INIT: "INIT",
    STANDBY: "STANDBY",
    IN_SESSION: "IN_SESSION",
  },
  readyState: function () {
    return LL_Cobrowse_Manager.Context.readyState();
  },
  addEventListener: function (e, n, t) {
    var a = e.addEventCommand;
    if (e.localEvent) {
      if (((a = e.name || ""), !window.LL_Storage_Manager)) return !1;
    } else {
      if (!window.LL_Storage_Manager || !LL_Storage_Manager.asyncSupported)
        //throw "Async must be supported";
        return !1;
      if (!a) return !1;
    }
    //don't add the event to the event handler collection if event with such handler already exists in the collection
    var o = !0,
      r = a + "_" + LL_Utils.getTimeStamp();
    for (var s in LL_Storage_Manager.handlers)
      LL_Storage_Manager.handlers.hasOwnProperty(s) &&
        LL_Storage_Manager.handlers["_" + s] === t &&
        //update handler
        ((r = s), (o = !1));
    if (e.localEvent)
      (LL_Storage_Manager.handlers["_" + r] = t),
        o && (LL_Storage_Manager.handlers[r] = function () {});
    else {
      var L = a + "(" + n + "," + r + ")";
      (LL_Storage_Manager.handlers[r] = function (e) {
        !(function (n, t) {
          try {
            var a = !1,
              o = {
                presentationToken: null,
                presentationCode: null,
                SID: null,
              };
            try {
              window.LL_Session &&
                (o.presentationToken ||
                  (o.presentationToken = LL_Session.presentationToken),
                o.presentationCode ||
                  (o.presentationCode = LL_Session.presentationCode),
                o.SID || (o.SID = LL_Session.SID)),
                !o.presentationCode &&
                  window.LL_Storage_Manager &&
                  ((a = !0),
                  LL_Storage_Manager.getItemsAsync(
                    LL_Deployment.siteCode,
                    "pc,SID,pc_token",
                    function (a) {
                      var o = {};
                      (o.presentationToken = a.pc_token),
                        (o.presentationCode = a.pc),
                        (o.SID = a.SID),
                        n &&
                          (n.apply(this, [e, o]),
                          (LL_Storage_Manager.handlers[t] = null),
                          delete LL_Storage_Manager.handlers[t],
                          (LL_Storage_Manager.handlers["_" + t] = null),
                          delete LL_Storage_Manager.handlers["_" + t]);
                    }
                  ));
            } catch (r) {}
            n &&
              !a &&
              (n.apply(this, [e, o]),
              (LL_Storage_Manager.handlers[t] = null),
              delete LL_Storage_Manager.handlers[t],
              (LL_Storage_Manager.handlers["_" + t] = null),
              delete LL_Storage_Manager.handlers["_" + t]);
          } catch (s) {}
        })(t, r);
      }),
        (LL_Storage_Manager.handlers["_" + r] = t),
        LL_Storage_Manager.asyncSendCommand(L);
    }
    return !0;
  },
  removeEventListener: function (e, n, t) {
    var a = e.removeEventCommand;
    if (e.localEvent) {
      if (!window.LL_Storage_Manager) return !1;
    } else {
      if (!window.LL_Storage_Manager || !LL_Storage_Manager.asyncSupported)
        //throw "Async must be supported";
        return !1;
      if (!a) return !1;
    }
    for (var o in LL_Storage_Manager.handlers)
      if (
        LL_Storage_Manager.handlers.hasOwnProperty(o) &&
        LL_Storage_Manager.handlers["_" + o] === t
      )
        if (e.localEvent)
          //local event: no communication with storage
          (LL_Storage_Manager.handlers["_" + o] = null),
            delete LL_Storage_Manager.handlers["_" + o],
            (LL_Storage_Manager.handlers[o] = null),
            delete LL_Storage_Manager.handlers[o];
        else {
          var r = a + "(" + n + "," + o + ")";
          LL_Storage_Manager.asyncSendCommand(r);
        }
    return !0;
  },
  dispatchEvent: function (e, n, t) {
    if (e.localEvent) {
      if (!window.LL_Storage_Manager) return !1;
      for (var a in LL_Storage_Manager.handlers)
        if (
          LL_Storage_Manager.handlers.hasOwnProperty(a) &&
          0 === a.toString().indexOf(e.name)
        ) {
          //this is one of the handlers to our event
          var o = LL_Storage_Manager.handlers["_" + a];
          if ("function" == typeof o)
            try {
              o.apply(this, [n, t]);
            } catch (r) {}
        }
    } else {
      if (!window.LL_Storage_Manager || !LL_Storage_Manager.asyncSupported)
        //throw "Async must be supported";
        return !1;
      var s = e.dispatchEventCommand;
      if (!s) return !1;
      for (var L = s + "(", i = 1; i < arguments.length; i++)
        L += arguments[i] + ",";
      if (
        ((L += ")"),
        LL_Storage_Manager.asyncSendCommand(L, null),
        e.eventsToInvalidate && e.eventsToInvalidate.length > 0)
      )
        for (var i = 0; i < e.eventsToInvalidate.length; i++) {
          var _ = e.eventsToInvalidate[i];
          _.invalidate(n, t);
        }
    }
    return !0;
  },
  invalidateEvent: function (e, n, t) {
    if (e && e.localEvent) return !1;
    if (!window.LL_Storage_Manager || !LL_Storage_Manager.asyncSupported)
      //throw "Async must be supported";
      return !1;
    var a = e.invalidateCommand;
    if (!a) return !1;
    var o = null,
      r = a + "(" + n + "," + t + ",)";
    return LL_Storage_Manager.asyncSendCommand(r, o), !0;
  },
  extParams: {},
  setExtParams: function (e) {
    LL_Cobrowse_Manager.extParams = e;
  },
};
LL_Cobrowse_Manager.Events.SessionDisconnected.eventsToInvalidate.push(
  LL_Cobrowse_Manager.Events.NumberGenerated,
  LL_Cobrowse_Manager.Events.EscalationAccepted
),
  LL_Cobrowse_Manager.Events.EscalationAccepted.eventsToInvalidate.push(
    LL_Cobrowse_Manager.Events.NumberGenerated
  ),
  LL_Cobrowse_Manager.Events.ChatCobrowseTerminated.eventsToInvalidate.push(
    LL_Cobrowse_Manager.Events.ChatCobrowseInitiated
  );
var LL_Debug = {
  debugLevel: "0",
  filter: !1,
  channelID: null,
  monitoringID: null,
  time_delta: 0,
  metrics: {
    host_page_to_page_transition_time: 0,
    host_page_load: 0,
    host_redirect_network_latency: 0,
    host_cobrowse_script_recovery_time: 0,
    host_cobrowse_script_recovery_time_start: 0,
    host_page_size: 0,
    connect_GRID_time: 0,
    green_light_time: 0,
    image_wait_time: 0,
    grid_latency_time: 0,
    push_data_cnt: 0,
    mutation_data_cnt: 0,
    push_data_size: 0,
    mutation_data_size: 0,
    push_data_loss: 0,
  },
  set: function (e, t, n) {},
  setItems: function (e, t) {},
  filterEvent: function (e) {
    switch (e) {
      case "error":
        LL_Debug.debugLevel > 0 && (LL_Debug.filter = !0);
        break;
      case "log":
        LL_Debug.debugLevel > 10 && (LL_Debug.filter = !0);
        break;
      case "info":
        LL_Debug.debugLevel > 1 && (LL_Debug.filter = !0);
        break;
      case "debug":
        LL_Debug.debugLevel > 1 && (LL_Debug.filter = !0);
    }
  },
  event: function (e, t, n, _) {
    if (
      LL_Session.presentationToken &&
      LL_Deployment.debugLevel &&
      LL_Debug.monitoringID
    ) {
      if ((LL_Debug.filterEvent(e), LL_Debug.filter))
        if (
          ("undefined" == typeof n
            ? (n = "{}")
            : (LL_Debug.channelID && (n.channelID = LL_Debug.channelID),
              (n.monitoringID = LL_Debug.monitoringID),
              (n.URL =
                window.location.protocol +
                "//" +
                window.location.host +
                window.location.pathname)),
          LL_Debug.validateMetricValue(n))
        )
          LL_Debug.sendCommand(LL_Session.presentationToken, t, t, n);
        else {
          //validation failed, submit error:
          var a = "";
          for (var i in n)
            n.hasOwnProperty(i) && (a += i + " = " + n[i] + "; ");
          if (_)
            for (var i in _)
              _.hasOwnProperty(i) && (a += i + " = " + _[i] + "; ");
          LL_Debug.sendCommand(
            LL_Session.presentationToken,
            "SessionError",
            "SessionError",
            { ErrorCode: "error", ErrorMessage: a }
          );
        }
      LL_Debug.filter = !1;
    }
  },
  error: function (e, t, n) {},
  log: function (e, t) {},
  info: function (e, t) {},
  newContext: function (e) {},
  sendCommand: function (e, t, n, _) {
    if (e && window.LL_Storage_Manager && LL_Storage_Manager.asyncSupported) {
      var a =
        "logData(" + LL_Storage_Manager.prepareCommandArgs(e, t, n, _) + ")";
      LL_Storage_Manager.asyncSendCommand(a);
    }
  },
  validateMetricValue: function (e) {
    for (var t in e)
      if (e.hasOwnProperty(t)) {
        var n = e[t];
        if ("number" == typeof n && (n >= 1e7 || -1e7 >= n)) return !1;
      }
    return !0;
  },
  init: function () {
    parseInt(window.LL_Deployment && LL_Deployment.debugLevel)
      ? (LL_Debug.debugLevel = LL_Deployment.debugLevel)
      : (LL_Debug.debugLevel = "0");
  },
  sendSessionInProgress: function () {
    if (
      window.LL_Debug &&
      0 !== LL_Debug.debugLevel &&
      (0 !== LL_Debug.push_data_size || 0 !== LL_Debug.mutation_data_size)
    ) {
      var e = {
        push_data_cnt: LL_Debug.metrics.push_data_cnt,
        mutation_data_cnt: LL_Debug.metrics.mutation_data_cnt,
        push_data_size: LL_Debug.metrics.push_data_size,
        mutation_data_size: LL_Debug.metrics.mutation_data_size,
        push_data_loss: LL_Debug.metrics.push_data_loss,
      };
      LL_Debug.event("debug", "SessionInProgress", e),
        (LL_Debug.metrics.push_data_cnt = LL_Debug.metrics.mutation_data_cnt = LL_Debug.metrics.push_data_size = LL_Debug.metrics.mutation_data_size = LL_Debug.metrics.push_data_loss = 0);
    }
  },
};
LL_Debug.init();
var deployJava = {
  debug: null,
  firefoxJavaVersion: null,
  myInterval: null,
  preInstallJREList: null,
  returnPage: null,
  brand: null,
  locale: null,
  installType: null,
  EAInstallEnabled: !1,
  EarlyAccessURL: null,
  oldMimeType: "application/npruntime-scriptable-plugin;DeploymentToolkit",
  mimeType: "application/java-deployment-toolkit",
  browserName: null,
  browserName2: null,
  getJREs: function () {
    var e = new Array();
    if (deployJava.isPluginInstalled())
      for (
        var a = deployJava.getPlugin(), r = a.jvms, n = 0;
        n < r.getLength();
        n++
      )
        e[n] = r.get(n).version;
    else {
      var l = deployJava.getBrowser();
      "MSIE" == l
        ? deployJava.testUsingActiveX("1.7.0")
          ? (e[0] = "1.7.0")
          : deployJava.testUsingActiveX("1.6.0")
          ? (e[0] = "1.6.0")
          : deployJava.testUsingActiveX("1.5.0")
          ? (e[0] = "1.5.0")
          : deployJava.testUsingActiveX("1.4.2")
          ? (e[0] = "1.4.2")
          : deployJava.testForMSVM() && (e[0] = "1.1")
        : "Netscape Family" == l &&
          (deployJava.getJPIVersionUsingMimeType(),
          null != deployJava.firefoxJavaVersion
            ? (e[0] = deployJava.firefoxJavaVersion)
            : deployJava.testUsingMimeTypes("1.7")
            ? (e[0] = "1.7.0")
            : deployJava.testUsingMimeTypes("1.6")
            ? (e[0] = "1.6.0")
            : deployJava.testUsingMimeTypes("1.5")
            ? (e[0] = "1.5.0")
            : deployJava.testUsingMimeTypes("1.4.2")
            ? (e[0] = "1.4.2")
            : "Safari" == deployJava.browserName2 &&
              (deployJava.testUsingPluginsArray("1.7.0")
                ? (e[0] = "1.7.0")
                : deployJava.testUsingPluginsArray("1.6")
                ? (e[0] = "1.6.0")
                : deployJava.testUsingPluginsArray("1.5")
                ? (e[0] = "1.5.0")
                : deployJava.testUsingPluginsArray("1.4.2") &&
                  (e[0] = "1.4.2")));
    }
    if (deployJava.debug)
      for (var n = 0; n < e.length; ++n)
        alert("We claim to have detected Java SE " + e[n]);
    return e;
  },
  versionCheck: function (e) {
    var a = 0,
      r = "^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:_(\\d+))?)?)?(\\*|\\+)?$",
      n = e.match(r);
    if (null != n) {
      for (var l = !0, t = new Array(), o = 1; o < n.length; ++o)
        "string" == typeof n[o] && "" != n[o] && ((t[a] = n[o]), a++);
      "+" == t[t.length - 1]
        ? ((l = !1), t.length--)
        : "*" == t[t.length - 1] && t.length--;
      for (var i = deployJava.getJREs(), o = 0; o < i.length; ++o)
        if (deployJava.compareVersionToPattern(i[o], t, l)) return !0;
      return !1;
    }
    return alert("Invalid versionPattern passed to versionCheck: " + e), !1;
  },
  isWebStartInstalled: function (e) {
    var a = deployJava.getBrowser();
    if ("?" == a || "Safari" == deployJava.browserName2) return !0;
    ("undefined" == e || null == e) && (e = "1.4.2");
    var r = !1,
      n = "^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:_(\\d+))?)?)?$",
      l = e.match(n);
    return (
      null != l
        ? (r = deployJava.versionCheck(e + "+"))
        : (deployJava.debug &&
            alert(
              "Invalid minimumVersion argument to isWebStartInstalled(): " + e
            ),
          (r = deployJava.versionCheck("1.4.2+"))),
      r
    );
  },
  getJPIVersionUsingMimeType: function () {
    for (var e = 0; e < navigator.mimeTypes.length; ++e) {
      var a = navigator.mimeTypes[e].type,
        r = a.match(/^application\/x-java-applet;jpi-version=(.*)$/);
      if (null != r) {
        deployJava.firefoxJavaVersion = r[1];
        break;
      }
    }
  },
  isPluginInstalled: function () {
    var e = deployJava.getPlugin();
    return e && e.jvms ? !0 : !1;
  },
  isAutoUpdateEnabled: function () {
    return deployJava.isPluginInstalled()
      ? deployJava.getPlugin().isAutoUpdateEnabled()
      : !1;
  },
  setEarlyAccess: function (e) {
    deployJava.EAInstallEnabled = e;
  },
  isPlugin2: function () {
    if (deployJava.isPluginInstalled() && deployJava.versionCheck("1.6.0_10+"))
      try {
        return deployJava.getPlugin().isPlugin2();
      } catch (e) {}
    return !1;
  },
  allowPlugin: function () {
    deployJava.getBrowser();
    var e =
      "Chrome" != deployJava.browserName2 &&
      "Safari" != deployJava.browserName2 &&
      "Opera" != deployJava.browserName2;
    return e;
  },
  getPlugin: function () {
    deployJava.refresh();
    var e = null;
    return (
      deployJava.allowPlugin() &&
        (e = document.getElementById("deployJavaPlugin")),
      e
    );
  },
  compareVersionToPattern: function (e, a, r) {
    var n = "^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:_(\\d+))?)?)?$",
      l = e.match(n);
    if (null != l) {
      for (var t = 0, o = new Array(), i = 1; i < l.length; ++i)
        "string" == typeof l[i] && "" != l[i] && ((o[t] = l[i]), t++);
      var s = Math.min(o.length, a.length);
      if (r) {
        for (var i = 0; s > i; ++i) if (o[i] != a[i]) return !1;
        return !0;
      }
      for (var i = 0; s > i; ++i) {
        if (o[i] < a[i]) return !1;
        if (o[i] > a[i]) return !0;
      }
      return !0;
    }
    return !1;
  },
  getBrowser: function () {
    if (null == deployJava.browserName) {
      var e = navigator.userAgent.toLowerCase();
      deployJava.debug && alert("userAgent -> " + e),
        -1 != e.indexOf("msie") || -1 != e.indexOf("trident")
          ? ((deployJava.browserName = "MSIE"),
            (deployJava.browserName2 = "MSIE"))
          : -1 != e.indexOf("firefox")
          ? ((deployJava.browserName = "Netscape Family"),
            (deployJava.browserName2 = "Firefox"))
          : -1 != e.indexOf("chrome")
          ? ((deployJava.browserName = "Netscape Family"),
            (deployJava.browserName2 = "Chrome"))
          : -1 != e.indexOf("safari")
          ? ((deployJava.browserName = "Netscape Family"),
            (deployJava.browserName2 = "Safari"))
          : -1 != e.indexOf("mozilla")
          ? ((deployJava.browserName = "Netscape Family"),
            (deployJava.browserName2 = "Other"))
          : -1 != e.indexOf("opera")
          ? ((deployJava.browserName = "Netscape Family"),
            (deployJava.browserName2 = "Opera"))
          : ((deployJava.browserName = "?"),
            (deployJava.browserName2 = "unknown")),
        deployJava.debug &&
          alert(
            "Detected browser name:" +
              deployJava.browserName +
              ", " +
              deployJava.browserName2
          );
    }
    return deployJava.browserName;
  },
  testUsingActiveX: function (e) {
    var a = "JavaWebStart.isInstalled." + e + ".0";
    if (!(ActiveXObject || "ActiveXObject" in window))
      return (
        deployJava.debug &&
          alert("Browser claims to be IE, but no ActiveXObject object?"),
        !1
      );
    try {
      return null != new ActiveXObject(a);
    } catch (r) {
      return !1;
    }
  },
  testForMSVM: function () {
    var e = "{08B0E5C0-4FCB-11CF-AAA5-00401C608500}";
    if ("undefined" != typeof oClientCaps) {
      var a = oClientCaps.getComponentVersion(e, "ComponentID");
      return "" == a || "5,0,5000,0" == a ? !1 : !0;
    }
    return !1;
  },
  testUsingMimeTypes: function (e) {
    if (!navigator.mimeTypes)
      return (
        deployJava.debug &&
          alert(
            "Browser claims to be Netscape family, but no mimeTypes[] array?"
          ),
        !1
      );
    for (var a = 0; a < navigator.mimeTypes.length; ++a) {
      var r = navigator.mimeTypes[a].type,
        n = r.match(
          /^application\/x-java-applet\x3Bversion=(1\.8|1\.7|1\.6|1\.5|1\.4\.2)$/
        );
      if (null != n && deployJava.compareVersions(n[1], e)) return !0;
    }
    return !1;
  },
  testUsingPluginsArray: function (e) {
    if (!navigator.plugins || !navigator.plugins.length) return !1;
    for (
      var a = navigator.platform.toLowerCase(), r = 0;
      r < navigator.plugins.length;
      ++r
    ) {
      var n = navigator.plugins[r].description;
      if (-1 != n.search(/^Java Switchable Plug-in (Cocoa)/)) {
        if (deployJava.compareVersions("1.5.0", e)) return !0;
      } else if (
        -1 != n.search(/^Java/) &&
        -1 != a.indexOf("win") &&
        (deployJava.compareVersions("1.5.0", e) ||
          deployJava.compareVersions("1.6.0", e))
      )
        return !0;
    }
    return deployJava.compareVersions("1.5.0", e) ? !0 : !1;
  },
  done: function (e, a) {},
  compareVersions: function (e, a) {
    for (var r = e.split("."), n = a.split("."), l = 0; l < r.length; ++l)
      r[l] = Number(r[l]);
    for (var l = 0; l < n.length; ++l) n[l] = Number(n[l]);
    return (
      2 == r.length && (r[2] = 0),
      r[0] > n[0]
        ? !0
        : r[0] < n[0]
        ? !1
        : r[1] > n[1]
        ? !0
        : r[1] < n[1]
        ? !1
        : r[2] > n[2]
        ? !0
        : r[2] < n[2]
        ? !1
        : !0
    );
  },
  enableAlerts: function () {
    (deployJava.browserName = null), (deployJava.debug = !0);
  },
  poll: function () {
    deployJava.refresh();
    var e = deployJava.getJREs();
    0 == deployJava.preInstallJREList.length &&
      0 != e.length &&
      (clearInterval(deployJava.myInterval),
      null != deployJava.returnPage && (location.href = deployJava.returnPage)),
      0 != deployJava.preInstallJREList.length &&
        0 != e.length &&
        deployJava.preInstallJREList[0] != e[0] &&
        (clearInterval(deployJava.myInterval),
        null != deployJava.returnPage &&
          (location.href = deployJava.returnPage));
  },
  writePluginTag: function () {},
  refresh: function () {
    navigator.plugins.refresh(!1);
    var e = deployJava.getBrowser();
    if ("Netscape Family" == e && deployJava.allowPlugin()) {
      var a = document.getElementById("deployJavaPlugin");
      null == a && deployJava.writeEmbedTag();
    }
  },
  writeEmbedTag: function () {},
  do_initialize: function () {
    if ((deployJava.writePluginTag(), null == deployJava.locale)) {
      var e = null;
      if (null == e)
        try {
          e = navigator.userLanguage;
        } catch (a) {}
      if (null == e)
        try {
          e = navigator.systemLanguage;
        } catch (a) {}
      if (null == e)
        try {
          e = navigator.language;
        } catch (a) {}
      null != e && (e.replace("-", "_"), (deployJava.locale = e));
    }
  },
};
deployJava.do_initialize();
var LL_BR_Core = new (function () {
  (this.browser = null),
    (this.ICBSupported = !1),
    (this.ACBSupported = "none"),
    (this.ICBAllowed = window.LL_Deployment
      ? LL_Deployment.icbConfig.icbMode
      : !1),
    (this.ACBAllowed = window.LL_Deployment
      ? LL_Deployment.acbConfig.acbMode
      : !1),
    (this.ll_posY = 0),
    (this.Init = function () {
      return window.LL_Deployment
        ? ((LL_BR_Core.ICBSupported = LL_BR_Core.ICBAllowed
            ? LL_BR_Core.IsICBSupported()
            : !1),
          void (LL_BR_Core.ACBSupported = LL_BR_Core.ACBAllowed
            ? LL_BR_Core.IsACBSupported()
            : "none"))
        : void (
            window.console &&
            console.error &&
            console.error(
              "Cobrowse launcher init error: key references not resolved (D003)"
            )
          );
    }),
    (this.isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i) ? !0 : !1;
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i) ? !0 : !1;
      },
      iOS: function () {
        return LL_BR_Core.browser &&
          LL_BR_Core.browser.OS &&
          -1 !== LL_BR_Core.browser.OS.indexOf("IOS")
          ? !0
          : !1;
      },
      iOSVersion: function () {
        return LL_BR_Core.isMobile.iOS ? LL_BR_Core.browser.OSVersion : "0";
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) ? !0 : !1;
      },
      any: function () {
        return (
          LL_BR_Core.isMobile.Android() ||
          LL_BR_Core.isMobile.BlackBerry() ||
          LL_BR_Core.isMobile.iOS() ||
          LL_BR_Core.isMobile.Windows()
        );
      },
    }),
    (this.hasRequiredVersion = function (e, r) {
      try {
        for (
          var o = e.split("."),
            i = r.split("."),
            n = Math.min(o.length, i.length),
            s = 0;
          n > s;
          s++
        ) {
          var t = Number(i[s]),
            a = Number(o[s]);
          if (((isNaN(t) || isNaN(a)) && ((t = i[s]), (a = o[s])), t > a))
            return !0;
          if (a > t) return !1;
        }
        return !0;
      } catch (L) {
        return !0;
      }
    }),
    (this.IsICBSupported = function () {
      LL_BR_Core.browser || (LL_BR_Core.browser = LL_BR_Core.DetectBrowser());
      var e = !1;
      if (LL_BR_Core.isMobile.iOS()) {
        var r = new Number(LL_BR_Core.isMobile.iOSVersion());
        if (r && !isNaN(r) && 6 > r && 0 !== r)
          //false
          return e;
        e = !0;
      } else if (
        -1 !== LL_BR_Core.browser.OS.indexOf("Mac OS") &&
        LL_BR_Core.browser.OSVersion
      ) {
        var o = "10.6";
        if (
          ((e = LL_BR_Core.hasRequiredVersion(o, LL_BR_Core.browser.OSVersion)),
          !e)
        )
          return e;
      } else {
        if (
          "Safari" === LL_BR_Core.browser.BrowserName &&
          LL_BR_Core.browser.BrowserVersion < 6
        )
          //false
          return e;
        if (
          LL_BR_Core.browser.WebSocket &&
          LL_BR_Core.browser.PostMessage &&
          LL_BR_Core.browser.LocalStorage
        )
          e = !0;
        else if (LL_BR_Core.browser.isIE())
          try {
            var i = Number(LL_BR_Core.browser.BrowserVersion);
            e = i > 9;
          } catch (n) {}
      }
      if (e && LL_Deployment.acbConfig.acbUrls && window.urlPattern)
        for (var s = 0; s < LL_Deployment.acbConfig.acbUrls.length; s++)
          if (
            urlPattern.match(
              LL_Deployment.acbConfig.acbUrls[s],
              self.location.href
            )
          ) {
            e = !1;
            break;
          }
      return e;
    }),
    (this.IsLTBSupported = function (e) {
      var r =
        window.LL_Deployment && LL_Deployment.acbConfig.restrictionGroup
          ? LL_Deployment.acbConfig.restrictionGroup.toUpperCase()
          : "NONE";
      if (!r || "NONE" === r || "none" === e) return e;
      LL_BR_Core.browser || (LL_BR_Core.browser = LL_BR_Core.DetectBrowser());
      var o = window.LL_Deployment && LL_Deployment.acbConfig.acbMacMode,
        i = LL_BR_Core.browser,
        n = "none";
      return (
        -1 !== LL_Utils.indexOf(["GROUP1", "GROUP2", "GROUP3"], r) &&
          ("Windows" === i.OS
            ? -1 !==
                LL_Utils.indexOf(
                  ["Chrome", "MSIE", "Firefox", "MS Edge"],
                  i.BrowserName
                ) && (n = e)
            : "Mac OS X" === i.OS &&
              (-1 === i.OSVersion.indexOf("10.9") || o) &&
              ("Chrome" === i.BrowserName ||
                ("Safari" === i.BrowserName && i.BrowserVersion >= "5.5")) &&
              (n = e),
          "none" === n &&
            "GROUP2" === r &&
            ("Windows" === i.OS || "Mac OS X" === i.OS) &&
            (n = e)),
        window.LL_Log &&
          n != e &&
          LL_Log.event(
            "Message",
            "LL_BR_Core.IsLTBSupported",
            "Restricted ACB(" + r + ") mode"
          ),
        n
      );
    }),
    (this.IsACBSupported = function () {
      LL_BR_Core.browser || (LL_BR_Core.browser = LL_BR_Core.DetectBrowser());
      var e = LL_BR_Core.browser,
        r = "none";
      if (
        ("Windows" === e.OS &&
          -1 !==
            LL_Utils.indexOf(["Vista", "7", "8", "8.1", "10"], e.OSVersion) &&
          (("MSIE" === e.BrowserName || "MS Edge" === e.BrowserName) &&
          window.LL_Deployment &&
          LL_Deployment.acbConfig.acbNetMode
            ? (r = ".net")
            : window.LL_Deployment &&
              LL_Deployment.acbConfig.acbWinMode &&
              (r = "win")),
        "Safari" === e.BrowserName && "Windows" === e.OS)
      )
        return LL_BR_Core.IsLTBSupported(r);
      if ("Opera" === e.BrowserName && "Windows" === e.OS) return "none";
      if (window.LL_Deployment && LL_Deployment.acbConfig.acbNetMode) {
        if ("MSIE" === e.BrowserName && e.NetVersion >= "2.0")
          return LL_BR_Core.IsLTBSupported(".net");
        //Chrome ClickOnce plugin
        if ("Chrome" === e.BrowserName && "Windows" === e.OS) {
          var o = 0;
          if (window.clientInformation && window.clientInformation.plugins)
            for (var i = 0; i < clientInformation.plugins.length; i++)
              "ClickOnce plugin for Chrome" ==
                clientInformation.plugins[i].name && (o = 1);
          if (1 == o) return LL_BR_Core.IsLTBSupported(".net");
        }
        //Firefox .NET
        if ("Firefox" === e.BrowserName && e.NetVersion >= "2.0")
          return LL_BR_Core.IsLTBSupported(".net");
      }
      if (".net" === r)
        //bypass java detection
        return LL_BR_Core.IsLTBSupported(r);
      if (
        -1 !== e.OS.indexOf("Mac OS") &&
        e.OSVersion &&
        window.LL_Deployment &&
        LL_Deployment.acbConfig.acbMacMode &&
        e.OSVersion
      ) {
        var n;
        n =
          LL_Deployment.acbConfig.Mac_ACB_OS_Versions &&
          LL_Deployment.acbConfig.Mac_ACB_OS_Versions.length > 0
            ? LL_Deployment.acbConfig.Mac_ACB_OS_Versions.split(",")
            : [];
        for (var s = !0, i = 0; i < n.length; i++)
          if (0 == n[i].indexOf("!")) {
            // exception, this version (!##.#) is not supported
            var t = n[i].replace(/^\D+/g, "");
            if (-1 != e.OSVersion.indexOf(t)) {
              s = !1;
              break;
            }
          }
        if (s)
          for (var i = 0; i < n.length; i++) {
            if (n[i].indexOf("+") > -1) {
              // OS is supported starting this version
              var t = n[i].replace("+", "");
              if (
                LL_BR_Core.hasRequiredVersion(t, LL_BR_Core.browser.OSVersion)
              )
                return LL_BR_Core.IsLTBSupported("mac");
              break;
            }
            if (-1 == n[i].indexOf("!") && -1 != e.OSVersion.indexOf(n[i]))
              return LL_BR_Core.IsLTBSupported("mac");
          }
      }
      if (navigator.javaEnabled() && window.deployJava) {
        var a = "",
          L = "1.5",
          _ = deployJava.getJREs(),
          w = _.length;
        if (w) {
          // If FireFox version 36.0 or higher or Chrome version 39.0 - increase the min version of Java to force the launcher
          (("Firefox" === e.BrowserName &&
            parseFloat(e.BrowserVersion) >= 36) ||
            ("Chrome" === e.BrowserName &&
              parseFloat(e.BrowserVersion) >= 39)) &&
            (L = "1.7");
          for (var i = 0; w > i; i++) {
            var d = _[i],
              B = !L || (L && "" + d > "" + L);
            B && "" + d > "" + a && (a = d);
          }
        }
        if (a)
          return LL_BR_Core.IsLTBSupported(
            window.LL_Deployment &&
              LL_Deployment.acbConfig.unsupportedJavaVersions
              ? LL_Deployment.acbConfig.unsupportedJavaVersions.indexOf(a) < 0
                ? "java"
                : r
              : "java"
          );
      }
      return LL_BR_Core.IsLTBSupported(r);
    }),
    (this.DetectBrowser = function () {
      var e = navigator.userAgent.toLowerCase(),
        r = {
          OS: "",
          OSVersion: "",
          BrowserName: "",
          BrowserVersion: "0",
          NetVersion: "",
          WebSocket: !1,
          PostMessage: !1,
          LocalStorage: !1,
          isIE: function () {
            return "MSIE" === this.BrowserName;
          },
          isIE8: function () {
            return "MSIE" === this.BrowserName && "8.0" === this.BrowserVersion;
          },
          isIOS: function () {
            return (
              navigator.userAgent.match(/iPhone/i) ||
              navigator.userAgent.match(/iPod/i) ||
              navigator.userAgent.match(/iPad/i)
            );
          },
        };
      //System version
      if (
        //OS detection
        (/windows/i.test(e)
          ? (r.OS = "Windows")
          : /mac os x/i.test(e)
          ? (r.OS = "Mac OS X")
          : /mac/i.test(e)
          ? (r.OS = "Mac OS")
          : /linux/i.test(e) && (r.OS = "Linux"),
        "Windows" == r.OS)
      )
        /windows nt.+\sarm\;/i.test(e)
          ? (r.OSVersion = "RT")
          : /windows nt[\/\s](\d+\.\d+)/i.test(e) &&
            ("6.0" == RegExp.$1
              ? (r.OSVersion = "Vista")
              : "6.1" == RegExp.$1
              ? (r.OSVersion = "7")
              : "6.2" == RegExp.$1
              ? (r.OSVersion = "8")
              : "6.3" == RegExp.$1
              ? (r.OSVersion = "8.1")
              : ("6.4" == RegExp.$1 || "10.0" == RegExp.$1) &&
                (r.OSVersion = "10"));
      else if ("Mac OS X" == r.OS)
        //IOS
        for (
          var o = [
              /mac os x[\/\s](\d+(_|.)\d+)/i, //Mac OS X
              /cpu os[\/\s](\d+_\d+)/i, //IOS
              /cpu iphone os[\/\s](\d+_\d+)/i,
            ],
            i = 0;
          i < o.length;
          i++
        ) {
          var n = e.match(o[i]);
          if (n && n.length > 1) {
            (r.OSVersion = ("" + n[1]).replace(/_/g, ".")),
              i >= o.length - 2 && (r.OS = "IOS");
            break;
          }
        }
      //Browser detection
      if (/firefox[\/\s](\d+\.\d+)/i.test(e))
        (r.BrowserName = "Firefox"), (r.BrowserVersion = "" + RegExp.$1);
      else if (/msie[\/\s](\d+\.\d+)/i.test(e)) {
        r.BrowserName = "MSIE";
        var s =
          /*@cc_on function () {
                switch (@_jscript_version) {
                    case 1.0: return 3.0;
                    case 3.0: return 4.0;
                    case 5.0: return 5.0;
                    case 5.1: return 5.0;
                    case 5.5: return 5.5;
                    case 5.6: return 6.0;
                    case 5.7: return (window.XMLHttpRequest ? 7.0 : 6.0);
                    case 5.8: return 8.0;
                    case 9: return 9.0;
                    case 10: return 10.0;
                    default: return @_jscript_version;
                }
            } () || @*/
          0;
        r.BrowserVersion = s.toFixed(1);
      } else
        /trident\/(7|8).0/i.test(e)
          ? ((r.BrowserName = "MSIE"), (r.BrowserVersion = "11.0"))
          : /edge\/(\d+\.\d+)/i.test(e)
          ? ((r.BrowserName = "MS Edge"), (r.BrowserVersion = "" + RegExp.$1))
          : /opera/i.test(e) && /version[\/\s](\d+\.\d+)/i.test(e)
          ? ((r.BrowserName = "Opera"), (r.BrowserVersion = "" + RegExp.$1))
          : /chrome/i.test(e) && /opr[\/\s](\d+\.\d+)/i.test(e)
          ? ((r.BrowserName = "Opera"), (r.BrowserVersion = "" + RegExp.$1))
          : /chrome[\/\s](\d+\.\d+)/i.test(e)
          ? ((r.BrowserName = "Chrome"), (r.BrowserVersion = "" + RegExp.$1))
          : /crios[\/\s](\d+\.\d+)/i.test(e)
          ? ((r.BrowserName = "Chrome"), (r.BrowserVersion = "" + RegExp.$1))
          : /safari[\/\s](\d+\.\d+)/i.test(e)
          ? ((r.BrowserName = "Safari"),
            (r.BrowserVersion = "" + RegExp.$1),
            /version[\/\s](\d+\.\d+)/i.test(e) &&
              (r.BrowserVersion = "" + RegExp.$1))
          : ("Mac OS" == r.OS || "Mac OS X" == r.OS || "IOS" == r.OS) &&
            /version[\/\s](\d+\.\d+)/i.test(e) &&
            ((r.BrowserName = "Safari"), (r.BrowserVersion = "" + RegExp.$1));
      //.NET detection
      if ("Windows" == r.OS && "RT" != r.OSVersion) {
        var t = e.match(/\.net(\d+\.\d+)|\.net\sclr\s(\d+\.\d+)/g);
        if (t) {
          for (var i = 0; i < t.length; i++)
            t[i] = t[i].replace(/\.net\sclr\s/, "").replace(/\.net/, "");
          t.sort(), (r.NetVersion = t[t.length - 1]);
        }
      }
      //WebSocket, PostMessage, LocalStorage
      return (
        (r.WebSocket = "WebSocket" in window),
        (r.PostMessage = "postMessage" in window),
        (r.LocalStorage = "localStorage" in window),
        r
      );
    });
})();
LL_BR_Core.Init();
if (!window.LL_Session || !window.LL_Utils)
  throw "Cobrowse launcher init error: D0001";
(window.console && window.console.log) ||
  (window.console = { log: function () {} }),
  (LL_Utils.getTimeString = function () {
    var e = new Date(),
      s = e.getHours();
    10 > s && (s = "0" + s);
    var n = e.getMinutes();
    10 > n && (n = "0" + n);
    var t = e.getSeconds();
    10 > t && (t = "0" + t);
    for (var o = e.getMilliseconds().toString(); o.length < 3; ) o = "0" + o;
    return "" + s + ":" + n + ":" + t + "." + o;
  }),
  (LL_Utils.getDateTimeString = function () {
    function e(e) {
      return 10 > e && (e = "0" + e), e;
    }
    var s = new Date(),
      n = e(s.getHours()),
      t = e(s.getMinutes()),
      o = e(s.getSeconds()),
      i = e(s.getDate()),
      L = e(s.getMonth() + 1),
      r = s.getFullYear();
    return "" + L + "/" + i + "/" + r + " " + n + ":" + t + ":" + o;
  }),
  (LL_Session.start = function (e) {
    var s = LL_Session.currentState.get();
    return s !== LL_Session.states.READY && s !== LL_Session.states.STARTING
      ? { result: !1, reason: "Invalid app state: " + s }
      : LL_BR_Core.ICBSupported || "none" !== LL_BR_Core.ACBSupported
      ? (e &&
          e.SID &&
          ((LL_Session.SID = e.SID),
          LL_Storage_Manager.removeItem(
            "CHAT",
            LL_Deployment.siteCode.replace(/:/g, "").toUpperCase()
          )),
        LL_Session.currentState.change(LL_Session.states.STARTING),
        LL_Session.pings.active && LL_Session.pings.stop(),
        LL_Storage_Manager.dataServerReady() || LL_Storage_Manager.init(!0),
        void LL_Storage_Manager.getItemsAsync(
          LL_Deployment.siteCode,
          "pc_token,StartSessionInitiated",
          function (e) {
            (LL_Session.___internals.StartSessionInitiated =
              "null" != e.StartSessionInitiated
                ? e.StartSessionInitiated
                : null),
              LL_Session.___internals.startSessionInternal({
                verify: !0,
                presentationToken: "null" !== e.pc_token ? e.pc_token : null,
              });
          },
          function () {
            (LL_Session.___internals.StartSessionInitiated = null),
              LL_Session.___internals.startSessionInternal({ verify: !1 });
          }
        ))
      : { result: !1, reason: "Environment not supported" };
  }),
  (LL_Session.activationInProgress = !1),
  (LL_Session.___internals.StartSessionNetworkTime_Start = 0),
  (LL_Session.___internals.validateRequestSent = !1),
  (LL_Session.___internals.processedRequestSent = !1),
  (LL_Session.___internals.validationToken = null),
  (LL_Session.___internals.StartSessionInitiated = null),
  (LL_Session.___internals.validationRequestUrl =
    LL_Deployment.scriptServerPath +
    "/webinterfaces/icb/" +
    LL_Deployment.getRelease() +
    "/llscripts/validate.aspx"),
  (LL_Session.___internals.startRequestUrl =
    LL_Deployment.scriptServerPath +
    "/webinterfaces/icb/" +
    LL_Deployment.getRelease() +
    "/llscripts/start_session.aspx"),
  (LL_Session.___internals.endSessionReason = null),
  (LL_Session.___internals.startSessionInternal = function (e) {
    var s = new Date().getTime();
    if (
      (LL_Session.currentState.change(LL_Session.states.STARTING),
      e.verify && e.presentationToken)
    )
      return (
        LL_Session.pings.checkToken(
          e.presentationToken,
          null,
          LL_Cobrowse_Launcher.checkToken_callback
        ),
        !1
      );
    if (
      e.verify &&
      LL_Session.___internals.StartSessionInitiated &&
      "null" !== LL_Session.___internals.StartSessionInitiated &&
      s - LL_Session.___internals.StartSessionInitiated < 2e4
    )
      return setTimeout(LL_Session.start, 5e3), !1;
    if (
      (LL_Storage_Manager.setItemAsync(
        LL_Deployment.siteCode,
        "StartSessionInitiated",
        s
      ),
      !LL_Session.___internals.validateRequestSent)
    )
      if (
        ((LL_Session.___internals.validateRequestSent = !1),
        (LL_Session.___internals.StartSessionNetworkTime_Start = new Date().getTime()),
        LL_Utils.timers.get("StartSessionNetworkTimeout") ||
          LL_Utils.timers.set(
            "StartSessionNetworkTimeout",
            function () {
              window.LL_Debug &&
                LL_Debug.event("debug", "NetworkTimeout", {
                  OperationType: "StartTimeout",
                }),
                LL_Cobrowse_Launcher.sessionError({
                  requestStatus: "TIMEOUT",
                  errorCode: 100,
                });
            },
            6e4
          ),
        window.LL_customFunctions &&
          "function" == typeof LL_customFunctions().validate)
      )
        try {
          LL_customFunctions().validate(
            LL_Deployment.siteCode,
            LL_Utils.getTimeStamp()
          );
        } catch (n) {
          LL_Utils.timers.clear("StartSessionNetworkTimeout"),
            LL_Cobrowse_Launcher.sessionError({
              requestStatus: "ERROR",
              errorCode: 110,
            });
        }
      else {
        var t =
          LL_Session.___internals.validationRequestUrl +
          "?siteID=" +
          LL_Deployment.siteCode +
          "&localtime=" +
          LL_Utils.getTimeStamp();
        LL_Cobrowse_Launcher.CobrowseMode &&
          LL_Cobrowse_Launcher.CobrowseMode.startsWith("ACB ") &&
          (t += "&host_umode=cobrowsing"),
          LL_Utils.loadScript("validationRequestUrl_livelook", t),
          LL_Utils.timers.set(
            "StartSessionTimeout",
            function () {
              LL_Session.___internals.startSessionInternal({ verify: !1 });
            },
            1e4
          );
      }
  }),
  (LL_Session.___internals.validateHostSession_callback = function (e) {
    if (
      !LL_Session.___internals.processedRequestSent &&
      !LL_Session.___internals.validateRequestSent &&
      (LL_Utils.timers.clear("StartSessionTimeout"),
      (LL_Session.___internals.validateRequestSent = !0),
      e.requestStatus)
    ) {
      LL_Session.___internals.validationToken = e.validationToken;
      var s =
        LL_Session.___internals.startRequestUrl +
        "?validationToken=" +
        LL_Session.___internals.validationToken +
        "&siteID=" +
        LL_Deployment.siteCode +
        "&acb_mode=" +
        LL_BR_Core.ACBSupported +
        "&localtime=" +
        LL_Utils.getDateTimeString();
      LL_Deployment.debugLevel &&
        (s +=
          "&screen_width=" +
          screen.width +
          "&screen_height=" +
          screen.height +
          "&storage_provider=" +
          LL_Storage_Manager.providerName),
        LL_Cobrowse_Launcher.CobrowseMode &&
          LL_Cobrowse_Launcher.CobrowseMode.startsWith("ACB ") &&
          (s += "&host_umode=cobrowsing"),
        LL_Session.SID && (s += "&SID=" + escape(LL_Session.SID)),
        window.LL_Cobrowse_Manager &&
          LL_Cobrowse_Manager.preferredGrid &&
          (s += "&grid=" + escape(LL_Cobrowse_Manager.preferredGrid));
      try {
        if (
          LL_Cobrowse_Manager.extParams &&
          LL_Cobrowse_Manager.extParams.hasOwnProperty("extKey")
        ) {
          var n = LL_Cobrowse_Manager.extParams.extKey;
          n && (s += "&extKey=" + escape(n));
        }
      } catch (t) {}
      LL_Deployment.UI.language &&
        (s += "&lang=" + escape(LL_Deployment.UI.language)),
        LL_Utils.loadScript("validateHostSession_livelook", s),
        (LL_Session.___internals.processedRequestSent = !1),
        LL_Utils.timers.set(
          "validateHostSessionTimeout",
          function () {
            LL_Session.___internals.validateHostSession_callback(e);
          },
          1e4
        );
    }
  }),
  (LL_Session.___internals.startHostSession_callback = function (e) {
    if (!LL_Session.___internals.processedRequestSent) {
      var s = new Date().getTime(),
        n = s - LL_Session.___internals.StartSessionNetworkTime_Start;
      if (!(n >= 6e4))
        try {
          if (e.requestStatus) {
            LL_Storage_Manager.removeItemAsync(
              LL_Deployment.siteCode,
              "StartSessionInitiated"
            ),
              (LL_Session.___internals.StartSessionInitiated = null),
              (LL_Session.presentationCode = e.presentationCode),
              (LL_Session.presentationToken = e.presentationToken),
              LL_Storage_Manager.clear(LL_Deployment.siteCode),
              LL_Storage_Manager.setItem(
                LL_Deployment.siteCode,
                "pc_token",
                LL_Session.presentationToken
              ),
              LL_Storage_Manager.setItemsAsync(LL_Deployment.siteCode, {
                pc_token: LL_Session.presentationToken,
                pc: LL_Session.presentationCode,
                SID: LL_Session.SID,
              });
            var t = LL_Session.presentationCode;
            if (
              (LL_Session.SID ||
                LL_Utils.await("LL_CustomUI.V4Panel", function () {
                  LL_CustomUI.V4Panel.setPresentationCode(t);
                }),
              LL_Utils.timers.clear("StartSessionNetworkTimeout"),
              LL_Utils.timers.clear("validateHostSessionTimeout"),
              (LL_Session.___internals.processedRequestSent = !0),
              window.LL_Cobrowse_Manager &&
                (LL_Cobrowse_Manager.Events.NumberGenerated.dispatch(
                  LL_Deployment.siteCode,
                  LL_Session.presentationToken
                ),
                LL_Cobrowse_Manager.Events.SessionDisconnected.listen(
                  LL_Session.presentationToken,
                  LL_Cobrowse_Launcher.listeners.disconnectHandler
                ),
                window.LL_Debug))
            ) {
              var o = {
                ScreenHeight: screen.height,
                ScreenWidth: screen.width,
                JavaEnabled: navigator.javaEnabled(),
                CookiesEnabled: navigator.cookieEnabled,
                ICBSupported: LL_BR_Core.ICBSupported,
                ACBSupported: LL_BR_Core.ACBSupported,
                UserAgentString: navigator.userAgent,
              };
              LL_Session.SID && (o.SID = LL_Session.SID),
                LL_Debug.setItems(LL_Session.presentationToken, o),
                LL_Debug.info(LL_Session.presentationToken, "Session started");
            }
            (LL_Session.mode = LL_Cobrowse_Launcher.CobrowseMode),
              LL_Session.currentState.change(LL_Session.states.ACTIVE),
              LL_Cobrowse_Launcher.startEngine();
          }
        } catch (i) {}
    }
  }),
  (LL_Session.stop = function (e) {
    var s = LL_Session.currentState.get();
    if (
      ((LL_Cobrowse_Launcher.ios8PageHidden = !1),
      (LL_Cobrowse_Launcher.engineStarted = !1),
      LL_Session.pings.changeWindowTitle({
        action: "remove",
        pc: LL_Session.presentationCode,
      }),
      e &&
        e.interactive &&
        (LL_Cobrowse_Manager.Events.SessionDisconnected.dispatch(
          LL_Session.presentationToken,
          LL_Session.presentationToken
        ),
        window.LL_CustomUI && LL_CustomUI.setWait(),
        (LL_Cobrowse_Launcher.errorOccured = !1)),
      e &&
        e.event &&
        window.mouseControl &&
        mouseControl.stopCustomPropagation(e.event),
      LL_Utils.timers.clear("StartSessionNetworkTimeout"),
      LL_Session.presentationToken)
    ) {
      if (e && e.send) {
        LL_Session.currentState.change(LL_Session.states.DISCONNECTING);
        var n =
          LL_Session.pings.hostStatusUpdateUrl +
          "?pc_token=" +
          LL_Session.presentationToken +
          "&localtime=" +
          LL_Utils.getTimeStamp() +
          "&state=DISCONNECTED";
        LL_Utils.loadScript("hostDisconnect_livelook", n, null, 5e3),
          (LL_Session.pings.___internals.hostAliveLoaded = !1),
          window.LL_Debug &&
            LL_Debug.log(LL_Session.presentationToken, "SessionTerminated");
      }
    } else
      s !== LL_Session.states.STARTING &&
        LL_Storage_Manager.clearAsync(LL_Deployment.siteCode);
    LL_Utils.timers.clear("StartSessionTimeout"),
      LL_Utils.timers.clear("validateHostSessionTimeout"),
      (LL_Session.activationInProgress = !1),
      (LL_Session.___internals.validateRequestSent = !1),
      (LL_Session.___internals.processedRequestSent = !1),
      e.reason && (LL_Session.___internals.endSessionReason = e.reason),
      LL_Cobrowse_Manager.Events.NumberGenerated.listen(
        LL_Deployment.siteCode,
        LL_Cobrowse_Launcher.listeners.SessionStarted_listener
      );
  }),
  (LL_Session.pings = {
    hostStatusUpdateUrl:
      LL_Deployment.scriptServerPath +
      "/webinterfaces/icb/" +
      LL_Deployment.getRelease() +
      "/llscripts/host_alive.aspx",
    checkSidUrl:
      LL_Deployment.scriptServerPath +
      "/webinterfaces/icb/" +
      LL_Deployment.getRelease() +
      "/llscripts/check_sid.aspx",
    active: !1,
    counter: 0,
    hostAliveLoaded: !1,
    start: function (e, s) {
      return !LL_Session.presentationToken || LL_Session.pings.active
        ? !1
        : ((LL_Session.pings.counter = 0),
          (LL_Session.pings.active = !0),
          (LL_Session.pings.currentState.___internals.stateID = void 0),
          e &&
            -1 === LL_Utils.indexOf(LL_Session.pings.callbacks, e) &&
            LL_Session.pings.callbacks.push(e),
          LL_Utils.intervals.set(
            "ping_interval",
            LL_Session.pings.___internals.hostAlive,
            s ? s : 2e3
          ),
          LL_Session.pings.___internals.hostAlive(),
          !0);
    },
    stop: function () {
      return (
        LL_Utils.intervals.clear("ping_interval"),
        (LL_Session.pings.active = !1),
        (LL_Session.pings.callbacks = []),
        !0
      );
    },
    changeInterval: function (e) {
      return LL_Session.pings.active
        ? (LL_Utils.intervals.set(
            "ping_interval",
            LL_Session.pings.___internals.hostAlive,
            e ? e : 2e3
          ),
          !0)
        : !1;
    },
    currentState: {
      get: function () {
        return LL_Session.pings.currentState.___internals.stateID;
      },
      change: function (e) {
        if (LL_Session.pings.currentState.___internals.stateID !== e) {
          (LL_Session.pings.currentState.___internals.previousStateID =
            LL_Session.pings.currentState.___internals.stateID),
            (LL_Session.pings.currentState.___internals.stateID = e);
          for (
            var s = LL_Session.pings.currentState.___internals.listeners, n = 0;
            n < s.length;
            n++
          )
            s[n] &&
              !(function (e, s, n) {
                setTimeout(function () {
                  e.apply(this, [s, n]);
                }, 0);
              })(
                s[n],
                e,
                LL_Session.pings.currentState.___internals.previousStateID
              );
        }
      },
      listen: function (e) {
        var s = LL_Session.pings.currentState.___internals.listeners;
        -1 === LL_Utils.indexOf(s, e) && s.push(e);
      },
      removeListener: function (e) {
        for (
          var s = LL_Session.pings.currentState.___internals.listeners,
            n = s.length - 1;
          n >= 0;
          n--
        )
          s[n] === e && delete s[n];
      },
      ___internals: { stateID: void 0, previousStateID: void 0, listeners: [] },
    },
    states: {
      WAIT: 1e3,
      ACTIVATE: 1001,
      ACTIVE: 1002,
      ELEVATING: 1003,
      ELEVATED: 1004,
      DISCONNECTED: 1005,
      ERROR: 1006,
    },
    checkToken: function (e, s, n) {
      if (
        (LL_Session.currentState.get() === LL_Session.states.READY &&
          LL_Session.currentState.change(LL_Session.states.INIT),
        n)
      ) {
        var t = LL_Session.pings.___internals.checkTokenListeners;
        if (t.length > 0) {
          if (-1 === LL_Utils.indexOf(t, n)) return void t.push(n);
        } else t.push(n);
      }
      LL_Session.pings.responseTimer.start();
      var o =
        LL_Session.pings.hostStatusUpdateUrl +
        "?pc_token=" +
        encodeURIComponent(e);
      LL_Session.mode &&
        LL_Session.mode.startsWith("ACB ") &&
        (o += "&host_umode=cobrowsing"),
        LL_Session.activationInProgress && (o += "&event=activationAccepted");
      var i = LL_Session.browser.BrowserName;
      LL_Session.pings.___internals.hostAliveLoaded ||
        (o += "&pageloaded=true"),
        "Safari" === i
          ? (o += "&localtime=" + LL_Utils.getTimeStamp())
          : ("MSIE" !== i && "MS Edge" !== i) ||
            LL_Session.pings.counter++ % 3 != 0 ||
            (o += "&localtime=" + LL_Utils.getTimeStamp()),
        (o = LL_Session.pings.___internals.appendParams(o, s)),
        LL_Utils.loadScript("hostStatusUpdate_livelook_" + e, o, null, 5e3),
        (LL_Session.pings.___internals.pendingToken = e);
    },
    checkSID: {
      start: function () {
        LL_Utils.intervals.set(
          "checkSid_interval",
          LL_Session.pings.___internals.checkSID,
          1e4
        ),
          LL_Session.pings.sidTimer.start(),
          LL_Session.currentState.change(LL_Session.states.INIT),
          LL_Utils.await("LL_CustomUILoader", function () {
            LL_CustomUILoader.setWait(!0);
          });
      },
      clear: function () {
        LL_Session.pings.sidTimer.clear(),
          LL_Utils.intervals.clear("checkSid_interval");
      },
    },
    callback_handler: function (e) {
      if (
        LL_Session.pings.active ||
        LL_Session.currentState.get() === LL_Session.states.DISCONNECTING
      ) {
        if (
          LL_Session.presentationToken &&
          e.presentationToken !== LL_Session.presentationToken
        )
          return;
        if (
          e.sessionState !== LL_Session.pings.currentState.get() &&
          (LL_Session.pings.currentState.change(e.sessionState),
          LL_Session.browser.OS.startsWith("Mac OS") &&
            LL_Session.presentationCode)
        ) {
          var s;
          (s =
            -1 !==
            LL_Utils.indexOf(
              [
                LL_Session.pings.states.ACTIVATE,
                LL_Session.pings.states.ELEVATING,
              ],
              e.sessionState
            )
              ? "update"
              : "remove"),
            LL_Session.pings.changeWindowTitle({
              action: s,
              pc: LL_Session.presentationCode,
            });
        }
        if (e) {
          e.sessionState !== LL_Session.pings.states.ERROR &&
            LL_Session.pings.responseTimer.clear();
          for (
            var n = LL_Session.pings.callbacks, t = n.length - 1;
            t >= 0;
            t--
          ) {
            var o = n[t];
            if (o)
              try {
                o.apply(this, [e]);
              } catch (i) {}
          }
        }
      } else {
        if (!e) return;
        if (
          (e.sessionState !== LL_Session.pings.states.ERROR &&
            LL_Session.pings.responseTimer.clear(),
          e.sessionState !== LL_Session.pings.states.DISCONNECTED &&
            (LL_Storage_Manager.removeItemAsync(
              LL_Deployment.siteCode,
              "StartSessionInitiated"
            ),
            (LL_Session.___internals.StartSessionInitiated = null)),
          LL_Session.presentationToken &&
            e.presentationToken !== LL_Session.presentationToken)
        )
          return;
        if (LL_Session.browser.OS.startsWith("Mac OS") && e.pc) {
          var s;
          (s =
            -1 !==
            LL_Utils.indexOf(
              [
                LL_Session.pings.states.ACTIVATE,
                LL_Session.pings.states.ELEVATING,
              ],
              e.sessionState
            )
              ? "update"
              : "remove"),
            LL_Session.pings.changeWindowTitle({ action: s, pc: e.pc });
        }
        for (
          var n = LL_Session.pings.___internals.checkTokenListeners,
            t = n.length - 1;
          t >= 0;
          t--
        ) {
          var o = n[t];
          if (o)
            try {
              o.apply(this, [LL_Session.pings.___internals.pendingToken, e]);
            } catch (i) {}
          delete n[t], n.pop();
        }
        LL_Session.pings.___internals.pendingToken = null;
      }
    },
    changeWindowTitle: function (e) {
      var s, n, t, o;
      if (-1 !== LL_Session.browser.OS.indexOf("Mac OS")) {
        e && ((s = e.action), (n = e.pc));
        try {
          if (
            (window.self !== window.top
              ? ((t = window.top), (o = top.document))
              : ((t = window), (o = document)),
            t.document && "string" == typeof o.title)
          )
            if ("update" === s)
              -1 === o.title.indexOf(n) &&
                (o.title = "(#" + n + ") " + o.title);
            else if ("remove" === s && o.title.indexOf(n) > -1) {
              var i = "(#" + n + ") ";
              o.title = o.title.replace(i, "");
            }
        } catch (L) {}
      }
    },
    callbacks: [],
    responseTimer: {
      start: function () {
        LL_Utils.timers.get("LL_noPingResponse") ||
          LL_Utils.timers.set(
            "LL_noPingResponse",
            function () {
              LL_Storage_Manager.removeItemAsync(
                LL_Deployment.siteCode,
                "StartSessionInitiated"
              ),
                (LL_Session.___internals.StartSessionInitiated = null),
                window.LL_Debug &&
                  LL_Debug.set(
                    LL_Session.presentationToken,
                    "DisconnectReason",
                    "TimeoutHostExpired"
                  ),
                LL_Session.stop({
                  send: !0,
                  interactive: !0,
                  reason: "ResponseTimer",
                }),
                LL_Cobrowse_Launcher.sessionError({
                  requestStatus: "TIMEOUT",
                  errorCode: 200,
                }),
                LL_Session.SID &&
                  (LL_Cobrowse_Manager.Events.ChatCobrowseInitiated.invalidate(
                    LL_Session.SID
                  ),
                  LL_Cobrowse_Manager.Events.ChatCobrowseTerminated.invalidate(
                    LL_Session.SID
                  )),
                window.LL_Debug &&
                  LL_Debug.event("debug", "NetworkTimeout", {
                    OperationType: "MainNetworkTimeout",
                  });
            },
            LL_Session.pings.responseTimer.waitTime
          );
      },
      clear: function () {
        LL_Utils.timers.clear("LL_noPingResponse");
      },
      waitTime: 18e4,
    },
    sidTimer: {
      start: function () {
        LL_Utils.timers.get("LL_sidResponse") ||
          LL_Utils.timers.set(
            "LL_sidResponse",
            function () {
              LL_Utils.intervals.clear("checkSid_interval"),
                LL_Session.presentationToken ||
                  (LL_Cobrowse_Launcher.sessionError({
                    requestStatus: "TIMEOUT",
                    errorCode: 120,
                  }),
                  window.LL_Debug &&
                    LL_Debug.set(
                      LL_Session.SID,
                      "DisconnectReason",
                      "TimeoutSidExpired"
                    )),
                LL_Session.SID &&
                  (LL_Cobrowse_Manager.Events.ChatCobrowseInitiated.invalidate(
                    LL_Session.SID
                  ),
                  LL_Cobrowse_Manager.Events.ChatCobrowseTerminated.invalidate(
                    LL_Session.SID
                  ));
            },
            LL_Session.pings.sidTimer.waitTime
          );
      },
      clear: function () {
        LL_Utils.timers.clear("LL_sidResponse");
      },
      waitTime: 18e4,
    },
    ___internals: {
      appendParams: function (e, s) {
        if (e && s)
          for (var n in s)
            if (s.hasOwnProperty(n)) {
              var t = s[n];
              t && (e += "&" + n + "=" + encodeURIComponent(t));
            }
        return e;
      },
      checkTokenListeners: [],
      pendingToken: null,
      hostAlive: function () {
        var e = LL_Session.presentationToken;
        if (e && LL_Session.currentState.get() === LL_Session.states.ACTIVE) {
          LL_Session.pings.responseTimer.start();
          var s =
            LL_Session.pings.hostStatusUpdateUrl +
            "?pc_token=" +
            encodeURIComponent(e);
          LL_Session.CobrowseMode &&
            LL_Session.CobrowseMode.startsWith("ACB ") &&
            (s += "&host_umode=cobrowsing"),
            LL_Session.activationInProgress &&
              (s += "&event=activationAccepted"),
            "undefined" == typeof LL_Session.configuration &&
              (s += "&config=true");
          var n = LL_Session.browser.BrowserName;
          LL_Session.pings.___internals.hostAliveLoaded ||
            (s += "&pageloaded=true"),
            "Safari" === n
              ? (s += "&localtime=" + LL_Utils.getTimeStamp())
              : ("MSIE" !== n && "MS Edge" !== n) ||
                LL_Session.pings.counter++ % 3 !== 0 ||
                (s += "&localtime=" + LL_Utils.getTimeStamp()),
            LL_Utils.loadScript("hostStatusUpdate_livelook_" + e, s);
        }
      },
      checkSID: function () {
        if (
          LL_Session.currentState.get() !== LL_Session.states.READY &&
          !LL_Session.SID
        )
          return !1;
        LL_Session.currentState.change(LL_Session.states.INIT);
        var e =
          LL_Session.pings.checkSidUrl +
          "?sid=" +
          encodeURIComponent(LL_Session.SID);
        LL_Utils.loadScript(
          "checkSid_livelook_" + LL_Session.SID,
          e,
          null,
          LL_Session.pings.sidTimer.waitTime
        );
      },
      onStateChange: function (e) {
        {
          var s = LL_Session.pings.currentState.get();
          LL_Session.currentState.get();
        }
        if (
          LL_Session.presentationToken &&
          (-1 !==
            LL_Utils.indexOf(
              [LL_Session.states.INIT, LL_Session.states.READY],
              e
            ) ||
            e === LL_Session.pings.states.DISCONNECTED)
        )
          if (
            (LL_Session.pings.stop(),
            LL_Session.pings.currentState.change(null),
            LL_Session.presentationToken &&
              LL_Cobrowse_Manager.removeEventListener(
                LL_Cobrowse_Manager.Events.SessionDisconnected,
                LL_Session.presentationToken,
                LL_Cobrowse_Launcher.listeners.disconnectHandler
              ),
            s === LL_Session.pings.states.DISCONNECTED)
          ) {
            var n = function (e) {
              if (
                -1 !==
                LL_Utils.indexOf(
                  [LL_Session.states.DISCONNECTING, LL_Session.states.ACTIVE],
                  LL_Session.currentState.get()
                )
              ) {
                var s = e && e.StartSessionInitiated,
                  n = e && e.pc_token,
                  t = LL_Session.presentationToken;
                LL_Storage_Manager.clear(t),
                  LL_Storage_Manager.clear(LL_Deployment.siteCode),
                  (LL_Session.presentationCode = null),
                  (LL_Session.presentationToken = null),
                  (LL_Session.SID = null),
                  (LL_Session.isInactive = !1),
                  (LL_Session.mode = null),
                  (LL_Session.pings.currentState.___internals.stateID = void 0),
                  (LL_Session.configuration = void 0),
                  LL_Storage_Manager.clearAsync(
                    LL_Deployment.siteCode,
                    function () {
                      s &&
                        "null" !== s &&
                        LL_Storage_Manager.setItemAsync(
                          LL_Deployment.siteCode,
                          "StartSessionInitiated",
                          s
                        ),
                        n &&
                          n !== t &&
                          "null" !== n &&
                          LL_Storage_Manager.setItemAsync(
                            LL_Deployment.siteCode,
                            "pc_token",
                            n
                          );
                    }
                  ),
                  LL_Storage_Manager.clearAsync(t),
                  -1 !==
                    LL_Utils.indexOf(
                      [
                        LL_Session.states.ACTIVE,
                        LL_Session.states.DISCONNECTING,
                      ],
                      LL_Session.currentState.get()
                    ) && LL_Session.currentState.change(LL_Session.states.INIT),
                  LL_Session.currentState.change(LL_Session.states.READY);
              }
            };
            LL_Storage_Manager.getItemsAsync(
              LL_Deployment.siteCode,
              "pc_token,StartSessionInitiated",
              n,
              n
            );
          } else
            (LL_Session.presentationCode = null),
              (LL_Session.presentationToken = null),
              (LL_Session.SID = null),
              (LL_Session.isInactive = !1),
              (LL_Session.mode = null),
              (LL_Session.pings.currentState.___internals.stateID = void 0);
      },
    },
    presentationCode: null,
    presentationToken: null,
    SID: null,
  }),
  LL_Session.currentState.listen(LL_Session.pings.___internals.onStateChange),
  LL_Session.pings.currentState.listen(
    LL_Session.pings.___internals.onStateChange
  );
var LL_Cobrowse_Launcher = {
  listeners: {
    SID_listener: function (e, s) {
      if (
        !(
          LL_Cobrowse_Launcher.ios8PageHidden ||
          (LL_Session.SID && LL_Session.presentationCode)
        )
      ) {
        if (s && "acb" === s) {
          if (LL_Session.SID && LL_Session.SID === e) return;
          (LL_Session.SID = e), LL_Session.pings.checkSID.start();
        } else {
          if (LL_Session.pings.active)
            return -1 !==
              LL_Utils.indexOf(
                [
                  LL_Session.pings.states.WAIT,
                  LL_Session.pings.states.DISCONNECTED,
                ],
                LL_Session.pings.currentState.get()
              )
              ? (LL_Session.stop({
                  send: !0,
                  interactive: !0,
                  reason: "SID_Override",
                }),
                void LL_Cobrowse_Manager.Events.ChatCobrowseInitiated.invalidate(
                  e
                ))
              : void LL_Cobrowse_Manager.Events.ChatCobrowseInitiated.invalidate(
                  e
                );
          if (LL_Session.currentState.get() !== LL_Session.states.READY) return;
        }
        LL_Cobrowse_Manager.Events.ChatCobrowseTerminated.listen(
          e,
          LL_Cobrowse_Launcher.listeners.ChatTerminated_listener
        ),
          LL_Session.SID ||
            (LL_Session.start({ SID: e }),
            LL_Utils.timers.set("SID_invalidate", function () {}, 111));
      }
    },
    ChatTerminated_listener: function (e) {
      LL_Session.SID &&
        e === LL_Session.SID &&
        LL_Session.presentationToken &&
        LL_Session.currentState.get() === LL_Session.states.ACTIVE &&
        (LL_Session.currentState.change(LL_Session.states.DISCONNECTING),
        LL_Session.stop({ send: !0, interactive: !0 }),
        LL_Cobrowse_Manager.Events.ChatCobrowseInitiated.invalidate(e),
        LL_Cobrowse_Manager.Events.ChatCobrowseTerminated.invalidate(e));
    },
    SessionStarted_listener: function (e) {
      LL_Cobrowse_Manager.Events.NumberGenerated.listen(
        LL_Deployment.siteCode,
        LL_Cobrowse_Launcher.listeners.SessionStarted_listener
      ),
        LL_Session.presentationToken ||
          LL_Cobrowse_Launcher.lastCheckedToken === e ||
          (LL_Session.currentState.get() === LL_Session.states.READY &&
            ((LL_Session.isInactive = !0),
            LL_Session.currentState.change(LL_Session.states.STARTING),
            (LL_Session.___internals.endSessionReason = null),
            LL_Session.pings.checkToken(
              e,
              null,
              LL_Cobrowse_Launcher.checkToken_callback
            ),
            (LL_Cobrowse_Launcher.lastCheckedToken = e)));
    },
    disconnectHandler: function (e) {
      LL_Session.presentationToken &&
        e === LL_Session.presentationToken &&
        LL_Session.currentState.get() === LL_Session.states.ACTIVE &&
        (LL_Session.currentState.change(LL_Session.states.DISCONNECTING),
        LL_Session.stop({ send: !1, interactive: !0 }),
        LL_Session.currentState.change(LL_Session.states.INIT),
        LL_Cobrowse_Launcher.init());
    },
    onStorageChange: function (e) {
      var s = e.key,
        n = e.newValue,
        t =
          s ==
            "CHAT_" + LL_Deployment.siteCode.replace(/:/g, "").toUpperCase() ||
          s ==
            "CHAT_terminated_" +
              LL_Deployment.siteCode.replace(/:/g, "").toUpperCase();
      t && n && LL_Cobrowse_Launcher.waitForStorage(s, n);
    },
    mobSafariPageShow: function (e) {
      0 != LL_Cobrowse_Launcher.mobSafariShowCount++ &&
        LL_Cobrowse_Launcher.mobSafariPageShow_internal(e);
    },
    ios8PageShow: function (e) {
      return window.document
        ? "visible" != document.visibilityState
          ? void (LL_Cobrowse_Launcher.ios8PageHidden = !0)
          : (LL_Cobrowse_Launcher.mobSafariPageShow_internal(e),
            void (LL_Cobrowse_Launcher.ios8PageHidden = !1))
        : void 0;
    },
    message_listener: function (e) {
      var s = e.data;
      if ("string" == typeof s)
        if (
          0 ===
          s.indexOf("newSession(" + LL_Deployment.siteCode.toUpperCase() + ",")
        ) {
          var n = s.split(",");
          if (2 === n.length) {
            if (LL_Cobrowse_Launcher.ios8PageHidden)
              return void setTimeout(
                LL_Cobrowse_Launcher.message_listener,
                111,
                { data: s }
              );
            (n = n[1].replace(")", "")),
              LL_Cobrowse_Launcher.listeners.SID_listener(n);
          } else if (n.length > 2) {
            var t = n[2].replace(")", "");
            LL_Cobrowse_Launcher.listeners.SID_listener(n[1], t);
          }
        } else if (
          0 ===
          s.indexOf(
            LL_Cobrowse_Manager.Events.ChatCobrowseTerminated
              .dispatchEventCommand + "("
          )
        ) {
          var o = s.split("("),
            n = o[1];
          n && (n = n.replace(")", "")),
            LL_Cobrowse_Launcher.listeners.ChatTerminated_listener(n);
        } else if (s === "checkmode_" + LL_Deployment.siteCode) {
          var i = e.source,
            L = e.origin;
          try {
            setTimeout(function () {
              i.postMessage(
                "nestedmode_" + LL_Deployment.siteCode,
                L ? L : "*"
              );
            }, 0);
          } catch (e) {}
        } else
          s === "nestedmode_" + LL_Deployment.siteCode &&
            top != window &&
            ((LL_Cobrowse_Launcher.detectingMode = !1),
            (LL_Session.broadcastMode = "PASSIVE"));
    },
  },
  localStorageSupported: !!window.localStorage,
  CobrowseMode: "ICB",
  activateHtmlUrl:
    LL_Deployment.scriptServerPath +
    "/framework/" +
    LL_Deployment.getRelease() +
    "/activate.aspx?lang=" +
    LL_Deployment.UI.language,
  escalateHtmlUrl:
    LL_Deployment.scriptServerPath +
    "/framework/" +
    LL_Deployment.getRelease() +
    "/escalate.aspx?lang=" +
    LL_Deployment.UI.language,
  clickonceDelayUrl:
    LL_Deployment.scriptServerPath +
    "/framework/" +
    LL_Deployment.getRelease() +
    "/clickoncedelay.aspx?lang=" +
    LL_Deployment.UI.language,
  setReadyState: function () {
    return LL_Cobrowse_Launcher.detectingMode
      ? void setTimeout(LL_Cobrowse_Launcher.setReadyState, 111)
      : void (
          -1 ===
            LL_Utils.indexOf(
              [LL_Session.states.ACTIVE, LL_Session.states.STARTING],
              LL_Session.currentState.get()
            ) && LL_Session.currentState.change(LL_Session.states.READY)
        );
  },
  init: function (e) {
    if (
      !window.LL_BR_Core ||
      !window.LL_Cobrowse_Manager ||
      !window.LL_Storage_Manager
    )
      return (
        LL_Session.currentState.change(LL_Session.states.ERROR),
        void (
          window.console &&
          console.error &&
          console.error(
            "Cobrowse launcher init error: key references not resolved (D002)"
          )
        )
      );
    if ((LL_Session.currentState.change(LL_Session.states.INIT), e)) {
      if (
        (window.LL_Debug &&
          !LL_Debug.host_cobrowse_script_recovery_time_start &&
          (LL_Debug.host_cobrowse_script_recovery_time_start = new Date().getTime()),
        (LL_Session.browser = LL_BR_Core.DetectBrowser()),
        LL_BR_Core.ICBSupported ||
          (LL_Cobrowse_Launcher.CobrowseMode =
            "none" === LL_BR_Core.ACBSupported
              ? "none"
              : "ACB " + LL_BR_Core.ACBSupported),
        window.LL_customFunctions &&
          "function" == typeof LL_customFunctions().init)
      )
        try {
          LL_customFunctions().init("launcher");
        } catch (s) {}
      if (
        ((LL_Cobrowse_Launcher.detectingMode = !0),
        top !== window && "postMessage" in window)
      ) {
        var n = function () {
          LL_Cobrowse_Launcher.detectingMode &&
            top.postMessage("checkmode_" + LL_Deployment.siteCode, "*");
        };
        n(),
          LL_Utils.intervals.set("detectingNestedModeLoop", n, 777),
          LL_Utils.timers.set(
            "detectingNestedMode",
            function () {
              LL_Cobrowse_Launcher.detectingMode &&
                ((LL_Cobrowse_Launcher.detectingMode = !1),
                (LL_Session.broadcastMode = "ACTIVE")),
                LL_Utils.intervals.clear("detectingNestedModeLoop");
            },
            2e3 + (LL_Deployment.launchPoint.delayTimer || 0)
          );
      } else
        (LL_Session.broadcastMode = "ACTIVE"),
          (LL_Cobrowse_Launcher.detectingMode = !1);
      if (
        !window.LL_Storage_Manager ||
        !window.LL_Cobrowse_Manager ||
        !window.LL_BR_Core
      )
        return (
          LL_Session.currentState.change(LL_Session.states.ERROR),
          window.console &&
            console.error &&
            console.error(
              "Error loading launcher: key references not resolved"
            ),
          !1
        );
      (LL_BR_Core.ICBSupported || LL_BR_Core.ACBSupported) &&
        LL_Cobrowse_Manager.Events.ChatCobrowseInitiated.listen(
          LL_Deployment.siteCode,
          LL_Cobrowse_Launcher.listeners.SID_listener
        ),
        LL_BR_Core.isMobile.iOS() &&
          "Safari" === LL_Session.browser.BrowserName &&
          (LL_Session.browser.OSVersion.startsWith("7.")
            ? window.addEventListener(
                "pageshow",
                LL_Cobrowse_Launcher.listeners.mobSafariPageShow,
                !1
              )
            : window.document &&
              document.addEventListener(
                "visibilitychange",
                LL_Cobrowse_Launcher.listeners.ios8PageShow,
                !1
              )),
        LL_Cobrowse_Launcher.localStorageSupported &&
          (LL_Utils.intervals.set(
            "SID_interval",
            LL_Cobrowse_Launcher.waitForStorage,
            15e3
          ),
          window.addEventListener
            ? window.addEventListener(
                "storage",
                LL_Cobrowse_Launcher.listeners.onStorageChange,
                !1
              )
            : window.attachEvent &&
              window.attachEvent(
                "onstorage",
                LL_Cobrowse_Launcher.listeners.onStorageChange
              )),
        window.attachEvent
          ? window.attachEvent(
              "onmessage",
              LL_Cobrowse_Launcher.listeners.message_listener
            )
          : window.addEventListener
          ? window.addEventListener(
              "message",
              LL_Cobrowse_Launcher.listeners.message_listener,
              !1
            )
          : (window.onmessage =
              LL_Cobrowse_Launcher.listeners.message_listener),
        LL_Cobrowse_Manager.Events.NumberGenerated.listen(
          LL_Deployment.siteCode,
          LL_Cobrowse_Launcher.listeners.SessionStarted_listener
        );
    }
    var t = LL_Storage_Manager.getItem(LL_Deployment.siteCode, "pc_token");
    LL_Storage_Manager.getItemAsync(
      LL_Deployment.siteCode,
      "pc_token",
      function (e) {
        (e && "undefined" !== e && "null" !== e) || (e = t),
          e && "undefined" !== e && "null" !== e
            ? LL_Session.pings.checkToken(
                e,
                null,
                LL_Cobrowse_Launcher.checkToken_callback
              )
            : LL_Cobrowse_Launcher.setReadyState();
      },
      function () {
        t && "undefined" !== t && "null" !== t
          ? LL_Session.pings.checkToken(
              t,
              null,
              LL_Cobrowse_Launcher.checkToken_callback
            )
          : setTimeout(function () {
              LL_Cobrowse_Launcher.init(!1);
            }, 1);
      }
    );
  },
  mobSafariShowCount: 0,
  mobSafariPingWait: !1,
  ios8PageHidden: !1,
  mobSafariPageShow_internal: function (e) {
    if (!LL_Session.presentationToken) {
      var s = LL_Session.currentState.get();
      if (s === LL_Session.states.INIT)
        return void setTimeout(
          LL_Cobrowse_Launcher.mobSafariPageShow_internal,
          111
        );
      if (s === LL_Session.states.READY) {
        var n = LL_Storage_Manager.getItem(LL_Deployment.siteCode, "pc_token");
        n &&
          "null" !== n &&
          "undefined" !== n &&
          LL_Session.pings.checkToken(
            n,
            null,
            LL_Cobrowse_Launcher.checkToken_callback
          );
      }
    }
  },
  waitForStorage: function () {
    if (!LL_Cobrowse_Launcher.ios8PageHidden)
      try {
        var e,
          s,
          n = arguments;
        if (
          (n.length > 1
            ? ((e = n[0]), (s = n[1]))
            : ((e =
                "CHAT_terminated_" +
                LL_Deployment.siteCode.replace(/:/g, "").toUpperCase()),
              (s = localStorage.getItem(e)),
              s ||
                ((e =
                  "CHAT_" +
                  LL_Deployment.siteCode.replace(/:/g, "").toUpperCase()),
                (s = localStorage.getItem(e)))),
          s)
        ) {
          var t = s.split(";");
          if (t.length > 1) {
            var o = t[0],
              i = t[1],
              L = t[2],
              r = new Date().getTime(),
              a = r - i;
            12e4 > a
              ? -1 !== e.indexOf("CHAT_terminated_") &&
                LL_Cobrowse_Launcher.listeners.ChatTerminated_listener &&
                -1 !==
                  LL_Utils.indexOf(
                    [
                      LL_Session.states.ACTIVE,
                      LL_Session.states.STARTING,
                      LL_Session.states.DISCONNECTING,
                    ],
                    LL_Session.currentState.get()
                  )
                ? setTimeout(function () {
                    LL_Cobrowse_Launcher.listeners.ChatTerminated_listener(o),
                      localStorage.removeItem(e);
                  }, 0)
                : -1 !== e.indexOf("CHAT_") &&
                  LL_Cobrowse_Launcher.listeners.SID_listener &&
                  LL_Session.currentState.get() === LL_Session.states.READY &&
                  setTimeout(function () {
                    LL_Cobrowse_Launcher.listeners.SID_listener(o, L),
                      localStorage.removeItem(e);
                  }, 0)
              : localStorage.removeItem(e);
          }
        }
      } catch (_) {}
  },
  lastCheckedToken: null,
  ping_callback: function (e) {
    if (e) {
      {
        var s = e.presentationToken;
        e.sessionState;
      }
      if (
        !s ||
        s === LL_Session.presentationToken ||
        e.sessionState !== LL_Session.pings.states.DISCONNECTED
      )
        if (e.sessionState !== LL_Session.pings.states.ERROR)
          e.sessionState === LL_Session.pings.states.DISCONNECTED &&
            (LL_Session.stop({ send: !1, interactive: !0 }),
            (LL_Session.isInactive = !1));
        else if (window.LL_Debug) {
          var n = "";
          try {
            n = JSON.stringify(e);
          } catch (t) {}
          LL_Debug.error(pc_token, "Error", n);
        }
    }
  },
  checkToken_callback: function (e, s) {
    if (
      (LL_Session.pings.checkSID.clear(),
      s && LL_Session.currentState.get() !== LL_Session.states.ACTIVE)
    ) {
      {
        var n = s.presentationToken;
        s.sessionState;
      }
      if (
        !n ||
        n === e ||
        s.sessionState !== LL_Session.pings.states.DISCONNECTED
      )
        if (s.sessionState !== LL_Session.pings.states.ERROR) {
          var t = LL_Session.currentState.get() === LL_Session.states.STARTING;
          switch (
            (s.sessionState !== LL_Session.pings.states.DISCONNECTED &&
              (LL_Storage_Manager.removeItemAsync(
                LL_Deployment.siteCode,
                "StartSessionInitiated"
              ),
              (LL_Session.___internals.StartSessionInitiated = null),
              (LL_Session.mode = s.session_mode),
              (LL_Session.presentationCode = s.pc),
              (LL_Session.presentationToken = s.presentationToken),
              (LL_Session.SID = s.SID),
              LL_Session.pings.currentState.change(s.sessionState),
              LL_Cobrowse_Manager.Events.SessionDisconnected.listen(
                LL_Session.presentationToken,
                LL_Cobrowse_Launcher.listeners.disconnectHandler
              ),
              LL_Session.currentState.change(LL_Session.states.ACTIVE),
              (LL_Session.isInactive ||
                t ||
                s.sessionState === LL_Session.pings.states.ELEVATED) &&
                LL_Utils.await("LL_CustomUI.V4Panel", function () {
                  LL_CustomUI.render();
                })),
            s.sessionState)
          ) {
            case LL_Session.pings.states.WAIT:
            case LL_Session.pings.states.ACTIVATE:
            case LL_Session.pings.states.ELEVATING:
            case LL_Session.pings.states.ACTIVE:
              LL_Cobrowse_Launcher.startEngine();
              break;
            case LL_Session.pings.states.ELEVATED:
              break;
            case LL_Session.pings.states.DISCONNECTED:
              t
                ? LL_Storage_Manager.removeItemAsync(
                    LL_Deployment.siteCode,
                    "pc_token",
                    function () {
                      LL_Session.___internals.startSessionInternal({
                        verify: !0,
                        presentationToken: null,
                      });
                    },
                    function () {
                      LL_Session.___internals.startSessionInternal({
                        verify: !0,
                        presentationToken: null,
                      });
                    }
                  )
                : (LL_Session.stop({ send: !1, interactive: !1 }),
                  LL_Cobrowse_Launcher.setReadyState()),
                (LL_Session.isInactive = !1);
              break;
            case LL_Session.pings.states.ERROR:
          }
        } else if (window.LL_Debug) {
          var o = "";
          try {
            o = JSON.stringify(s);
          } catch (i) {}
          LL_Debug.error(e, "Error", o);
        }
    }
  },
  startEngine: function () {
    if (!LL_Session.presentationToken)
      return void (
        window.console &&
        console.error &&
        console.error("ENGINE_INIT_ERR: INV_APP_STATE 0")
      );
    LL_Cobrowse_Manager.Events.ContextReady.dispatch(
      LL_Session.presentationToken
    );
    var e = LL_Session.mode,
      s = LL_Session.pings.currentState.get();
    if (
      -1 ===
        LL_Utils.indexOf(
          [LL_Session.pings.states.DISCONNECTED, LL_Session.pings.states.ERROR],
          s
        ) &&
      LL_Session.currentState.get() !== LL_Session.states.DISCONNECTING
    ) {
      if ("ICB" !== e && s !== LL_Session.pings.states.ELEVATING)
        return void LL_Session.pings.start(LL_Cobrowse_Launcher.ping_callback);
      var n = "communicationHandler",
        t = LL_Deployment.icbConfig.hostEngineURL
          ? LL_Deployment.icbConfig.hostEngineURL
          : LL_Deployment.scriptServerPath +
            "/webinterfaces/icb/" +
            LL_Deployment.getRelease() +
            "/engine.aspx?session_mode=host",
        o = function () {
          LL_ICB_Core.init();
        };
      if (LL_Deployment.version) {
        var i = -1 === t.indexOf("?") ? "?" : "&";
        t += i + LL_Deployment.version;
      }
      if (LL_Deployment.UI.language) {
        var i = -1 === t.indexOf("?") ? "?" : "&";
        t += i + "lang=" + LL_Deployment.UI.language;
      }
      LL_Session.pings.start(LL_Cobrowse_Launcher.ping_callback),
        window.LL_Debug &&
          LL_Debug.info(LL_Session.presentationToken, "Loading engine " + t),
        LL_Utils.require(n, t, o, function (e) {
          window.console &&
            console.error &&
            console.error("Error loading engine: ", e);
        });
    }
  },
  customFunctionProceed: function () {
    try {
      window.LL_customFunctions &&
        LL_customFunctions().customLauncher &&
        LL_customFunctions().customLauncher.apply(this, []);
    } catch (e) {}
  },
  sessionError: function (e) {
    LL_Session.currentState.change(LL_Session.states.ERROR),
      (LL_Cobrowse_Launcher.errorOccured = !0),
      window.LL_CustomUI &&
        LL_CustomUI.V4Panel &&
        LL_CustomUI.V4Panel.displayError(e.errorCode),
      window.LL_Debug &&
        LL_Session.presentationToken &&
        LL_Debug.error(
          LL_Session.presentationToken,
          "Error",
          "Session Start Error, code: " + e.errorCode
        ),
      LL_Session.stop({ send: !1, interactive: !1 });
  },
};
var LL_CustomUILoader = {
  modules: {
    NumberGenerationWindow: "hostui",
    NumberGenerationWindowTC: "hostui_tc",
    AgentConnected: "hostui_agent_connected",
    NotSupportedEnv: "hostui_unsupported_env",
    Animation: "hostui_animation",
    ACB: "acb_functions",
  },
  animationEnabled: 2 === LL_Deployment.launchPoint.type,
  loadCommonFunctions: function () {
    if ((LL_CustomUILoader.loadUtils(), LL_CustomUILoader.animationEnabled)) {
      var e = LL_CustomUILoader.getFilePath(
        LL_CustomUILoader.modules.Animation,
        !0
      );
      LL_Utils.require(
        "LL_CustomUI.animate",
        e,
        function () {
          LL_CustomUI.animate();
        },
        LL_CustomUILoader.dependencyError
      );
    }
  },
  loadUtils: function () {
    "undefined" == typeof LL_CustomUI.utils &&
      ((LL_CustomUI.setWait = LL_CustomUILoader.setWait),
      (LL_CustomUI.render = LL_CustomUILoader.render),
      (LL_CustomUI.start_acb = LL_CustomUILoader.start_acb),
      (LL_CustomUI.utils = {}),
      (LL_CustomUI.utils.stopEvent = function (e) {
        e &&
          (e.preventDefault && e.preventDefault(),
          e.stopPropagation && e.stopPropagation(),
          e.stopImmediatePropagation && e.stopImmediatePropagation(),
          (e.cancelBubble = !0),
          (e.returnValue = !1));
      }),
      (LL_CustomUI.utils.doFocus = function (e) {
        try {
          LL_Utils.$(e).focus();
        } catch (t) {}
      }),
      (LL_CustomUI.utils.css = function (e, t) {
        var o = LL_Utils.$(e);
        if (o)
          for (var n in t)
            if (t.hasOwnProperty(n)) {
              for (var s = n; -1 !== s.indexOf("-"); ) {
                var L = s.indexOf("-");
                (s = s.replace("-", "")), (s[L] = s[L].toUpperCase());
              }
              o.style[s] = t[n];
            }
      }),
      (LL_CustomUI.utils.toggleADA_State = function (e, t) {
        if (e && t)
          for (var o = e.split(","), n = 0; n < o.length; n++) {
            var s = o[n].replace(/\s/g, "");
            if (s) {
              var L = LL_Utils.$(s);
              if (!L) continue;
              if ("disable" == t.toLowerCase())
                L.setAttribute("disabled", "disabled"),
                  L.setAttribute("aria-hidden", "true");
              else if ("enable" == t.toLowerCase()) {
                L.setAttribute("disabled", "");
                try {
                  L.removeAttribute("disabled");
                } catch (i) {}
                (L.disabled = !1), L.setAttribute("aria-hidden", "false");
              }
            }
          }
      }),
      (LL_CustomUI.utils.globalKeyHandler = function (e) {
        if (e) {
          var t = function (e) {
              if (e) {
                var t = e.parentNode;
                if (
                  t &&
                  "V4LLPanel_LogoToggler" == t.id &&
                  ((t = t.parentNode),
                  t &&
                    "V4LLPanel_MovingToggler" == t.id &&
                    ((t = t.parentNode),
                    t && "V4LLPanel_InnerContainer" == t.id))
                )
                  return (
                    (t = t.parentNode),
                    t && "V4LLTermsAndConditionsWindow" == t.id
                  );
              }
              return !1;
            },
            o = e.target || event.srcElement;
          if (o) {
            var n = o ? o.id : "",
              s = window.event ? e.keyCode : e.which,
              L = !1;
            if (o && o.disabled) L = !0;
            else if (10 == s || 13 == s || 32 == s)
              if (
                "V4LLPanel_InnerTitle" == n ||
                "V4LLPanel_CollapsedNarrowNoAgent" == n
              )
                LL_CustomUI.noAgentPanel.isOpen ||
                  (LL_CustomUI.noAgentPanel.expand(), (L = !0));
              else if ("V4LLPanel_CollapsedNumContNarrow" == n)
                LL_CustomUI.agentConnectedPanel &&
                !LL_CustomUI.agentConnectedPanel.isOpen &&
                LL_CustomUI.agentConnectedPanel.isAgentConnected
                  ? (LL_CustomUI.agentConnectedPanel.expand(), (L = !0))
                  : LL_CustomUI.noAgentPanel.isOpen ||
                    (LL_CustomUI.noAgentPanel.expand(), (L = !0));
              else if ("V4LLPanel_TermsAndConditionsToggler" == n)
                LL_CustomUI.tcPanel.expand(), (L = !0);
              else if (
                "V4LLPanel_PanelMinimize" == n ||
                "V4LLPanel_PanelMinimizeTC" == n
              ) {
                L = !0;
                var i =
                  (LL_CustomUI.tcPanel &&
                    LL_CustomUI.tcPanel.isDisconnectConfirmWindowOpen) ||
                  (LL_Utils.$("V4LLPanelDisconnectConfirmWindow") &&
                    "block" ==
                      LL_Utils.$("V4LLPanelDisconnectConfirmWindow").style
                        .display) ||
                  (LL_Utils.$("V4LLPanelDisconnectConfirmWindowTC") &&
                    "block" ==
                      LL_Utils.$("V4LLPanelDisconnectConfirmWindowTC").style
                        .display);
                if (!i) {
                  var r =
                    LL_CustomUI.isTermsAndConditionsEnabled &&
                    t(e.target || event.srcElement);
                  r
                    ? LL_CustomUI.tcPanel.collapse()
                    : LL_CustomUI.noAgentPanel.collapse();
                }
              } else if (
                "V4LLPanel_PanelClose" == n ||
                "V4LLPanel_PanelCloseTC" == n
              ) {
                L = !0;
                var i =
                  (LL_CustomUI.tcPanel &&
                    LL_CustomUI.tcPanel.isDisconnectConfirmWindowOpen) ||
                  (LL_Utils.$("V4LLPanelDisconnectConfirmWindow") &&
                    "block" ==
                      LL_Utils.$("V4LLPanelDisconnectConfirmWindow").style
                        .display) ||
                  (LL_Utils.$("V4LLPanelDisconnectConfirmWindowTC") &&
                    "block" ==
                      LL_Utils.$("V4LLPanelDisconnectConfirmWindowTC").style
                        .display);
                if (!i) {
                  var a = LL_Session.currentState.get();
                  if (
                    a == LL_Session.states.ACTIVE ||
                    a == LL_Session.states.READY
                  ) {
                    var r =
                      LL_CustomUI.isTermsAndConditionsEnabled &&
                      t(e.target || event.srcElement);
                    r
                      ? LL_CustomUI.tcPanel.openDisconnectConfirmWindow()
                      : window.LL_BR_Core &&
                        !LL_BR_Core.ICBSupported &&
                        "none" == LL_BR_Core.ACBSupported
                      ? LL_CustomUI.V4Panel.collapse()
                      : LL_CustomUI.noAgentPanel.openDisconnectConfirmWindow();
                  } else LL_CustomUI.V4Panel.collapse();
                }
              } else
                "V4LLPanel_AgentConnectedPanelClose" == n
                  ? ((L = !0), LL_CustomUI.agentConnectedPanel.collapse())
                  : "V4LLPanel_CloseDeclineButtonTC" == n
                  ? ((L = !0), LL_CustomUI.tcPanel.declineSessionEnd())
                  : "V4LLPanel_CloseConfirmButtonTC" == n
                  ? ((L = !0), LL_CustomUI.tcPanel.confirmSessionEnd())
                  : "V4LLPanel_CloseDeclineButton" == n
                  ? ((L = !0), LL_CustomUI.noAgentPanel.declineSessionEnd())
                  : "V4LLPanel_CloseConfirmButton" == n
                  ? ((L = !0), LL_CustomUI.noAgentPanel.confirmSessionEnd())
                  : "LL_sessionEnded_cancel" == n
                  ? ((L = !0), LL_CustomUI.SessionEndedPopup.hide())
                  : "V4LLPanel_DisconnectTrigger" == n
                  ? ((L = !0), LL_CustomUI.noAgentPanel.doDisconnect())
                  : "redirect_cancel" == n
                  ? ((L = !0), LL_CustomUI.RedirectPopup.hide)
                  : "V4LLPanel_StartSessionNow" == n &&
                    LL_CustomUI.tcPanel.startSession();
            else
              27 == s &&
                (LL_CustomUI.noAgentPanel.isDisconnectConfirmWindowOpen
                  ? ((L = !0), LL_CustomUI.noAgentPanel.declineSessionEnd())
                  : LL_CustomUI.tcPanel.isDisconnectConfirmWindowOpen &&
                    ((L = !0), LL_CustomUI.tcPanel.declineSessionEnd()));
            return L ? (LL_CustomUI.utils.stopEvent(e), !1) : void 0;
          }
        }
      }),
      LL_CustomUI.utils.ADA ||
        ((LL_CustomUI.utils.ADA = {}),
        (LL_CustomUI.utils.ADA.ADA_Compliance =
          "true" == LL_CustomUI.ADA_compliance),
        (LL_CustomUI.utils.ADA.border_color = "Gray"),
        (LL_CustomUI.utils.ADA.elementIDs = [
          "V4LLPanel_PanelMinimize",
          "V4LLPanel_PanelClose",
          "V4LLPanel_PanelMinimizeTC",
          "V4LLPanel_PanelCloseTC",
          "V4LLPanel_CollapsedNumContNarrow",
          "V4LLPanel_TermsAndConditions",
          "V4LLPanel_TermsAndConditionsTC",
          "V4LLPanel_DisconnectTrigger",
          "V4LLPanel_moreInfoLink",
          "redirect_accept",
          "LL_Feedback_Button",
          "LL_CloseModal_Link",
          "V4LLPanel_CloseDeclineButtonTC",
          "V4LLPanel_CloseConfirmButtonTC",
          "V4LLPanel_StartSessionNow",
          "V4LLPanel_CollapsedNarrowNoAgent",
          "V4LLPanel_GenericToggler",
          "V4LLPanel_InnerTitle",
          "V4LLPanel_CloseDeclineButton",
          "V4LLPanel_CloseConfirmButton",
          "V4LLPanel_TermsAndConditionsToggler",
        ]),
        (LL_CustomUI.utils.ADA.BOAelementIDs = [
          "V4LLPanel_CloseDeclineButton",
          "V4LLPanel_CloseConfirmButton",
        ]),
        (LL_CustomUI.utils.ADA.CreateStyleForFocus = function () {
          if (
            LL_CustomUI.utils.ADA.ADA_Compliance &&
            !document.getElementById("LL_idForStyle") &&
            (LL_CustomUI.utils.isAnyIE() || LL_CustomUI.utils.isFireFox())
          ) {
            LL_CustomUI.utils.isFireFox() &&
              (LL_CustomUI.utils.ADA.border_color = "#9ecaed");
            var e = document.createElement("style");
            (e.type = "text/css"), e.setAttribute("id", "LL_idForStyle");
            for (var t = "", o = 0; o < this.elementIDs.length; o++)
              t += LL_CustomUI.utils.isFireFox()
                ? "#" +
                  this.elementIDs[o] +
                  ":focus{outline: 1px solid " +
                  this.border_color +
                  "}\r\n "
                : "#" +
                  this.elementIDs[o] +
                  ":focus{border: 0.5px solid " +
                  this.border_color +
                  "}\r\n ";
            for (var o = 0; o < this.BOAelementIDs.length; o++)
              LL_CustomUI.utils.isFireFox() ||
                (t +=
                  "#" +
                  this.BOAelementIDs[o] +
                  ":focus{border: .5px solid black}\r\n ");
            try {
              e.styleSheet
                ? (e.styleSheet.cssText = t)
                : e.appendChild(document.createTextNode(t)),
                document.getElementsByTagName("head")[0].appendChild(e);
            } catch (n) {}
          }
        })),
      (LL_CustomUI.utils.removeNodes = LL_Utils.removeNodes),
      (LL_CustomUI.utils.GenerateLLV4PanelPosition = function (e, t, o) {
        var n = "",
          s = "bottom: 0;";
        switch (("true" == o && (s = "bottom: 30px;"), e)) {
          case "bottom_right":
            n = "" == t ? s + " right: 0;" : s + " right:" + t + "px;";
            break;
          case "top_left":
            n = "" == t ? "top: 0; left: 0;" : "top: 0; left:" + t + "px;";
            break;
          case "top_middle":
            n = "top: 0;";
            break;
          case "right_middle":
            n = "right: 0;";
            break;
          case "top_right":
            n = "" == t ? "top: 0; right: 0;" : "top: 0; right:" + t + "px;";
            break;
          case "bottom_left":
            n = "" == t ? s + " left: 0;" : s + " left:" + t + "px;";
            break;
          case "bottom_middle":
            n = s;
            break;
          case "left_middle":
            n = "left: 0;";
        }
        return n;
      }),
      (LL_CustomUI.utils.isQuirksMode = function () {
        return (
          LL_CustomUI.utils.isIELower10() &&
          "backcompat" == document.compatMode.toLowerCase()
        );
      }),
      (LL_CustomUI.utils.isIELower10 = function () {
        return (
          "microsoft internet explorer" == navigator.appName.toLowerCase() &&
          LL_CustomUI.utils.getInternetExplorerVersion() < 10
        );
      }),
      (LL_CustomUI.utils.isIE6 = function () {
        return (
          "microsoft internet explorer" == navigator.appName.toLowerCase() &&
          parseFloat(navigator.appVersion) < 7
        );
      }),
      (LL_CustomUI.utils.isAnyIE = function () {
        return LL_CustomUI.utils.getInternetExplorerVersion() > 0;
      }),
      (LL_CustomUI.utils.isSafari = function () {
        return /^((?!chrome).)*safari/i.test(navigator.userAgent);
      }),
      (LL_CustomUI.utils.isFireFox = function () {
        return /^((?!chrome).)*firefox/i.test(navigator.userAgent);
      }),
      (LL_CustomUI.utils.isAndroid = function () {
        try {
          var e = navigator.userAgent;
          return (
            e.indexOf("Mozilla/5.0") > -1 &&
            e.indexOf("Android ") > -1 &&
            e.indexOf("AppleWebKit") > -1
          );
        } catch (t) {
          return !1;
        }
      }),
      (LL_CustomUI.utils.isBottomLocation = function () {
        var e = LL_CustomUI.V4LLPanel_position;
        return "bottom_right" == e || "bottom_left" == e || "bottom_middle";
      }),
      (LL_CustomUI.utils.isLeftLocation = function () {
        var e = LL_CustomUI.V4LLPanel_position;
        return "left_middle" == e;
      }),
      (LL_CustomUI.utils.isRightLocation = function () {
        var e = LL_CustomUI.V4LLPanel_position;
        return "right_middle" == e;
      }),
      (LL_CustomUI.utils.getElementSize = function (e) {
        var t = LL_Utils.$(e),
          o = t ? t.offsetHeight : 0,
          n = t ? t.offsetWidth : 0;
        return { elementHeight: o, elementWidth: n };
      }),
      (LL_CustomUI.utils.getDocHeight = function () {
        var e = document;
        return Math.max(
          Math.max(e.body.scrollHeight, e.documentElement.scrollHeight),
          Math.max(e.body.offsetHeight, e.documentElement.offsetHeight),
          Math.max(e.body.clientHeight, e.documentElement.clientHeight)
        );
      }),
      (LL_CustomUI.utils.GetScrollPosition = function () {
        if (!document || !document.body) return 0;
        var e = document.body.scrollTop;
        return (
          0 == e &&
            (e = window.pageYOffset
              ? window.pageYOffset
              : document.body.parentElement
              ? document.body.parentElement.scrollTop
              : 0),
          e
        );
      }),
      (LL_CustomUI.utils.getInternetExplorerVersion = function () {
        var e = -1;
        if ("Microsoft Internet Explorer" == navigator.appName) {
          var t = navigator.userAgent,
            o = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
          null != o.exec(t) && (e = parseFloat(RegExp.$1));
        } else navigator.userAgent.indexOf("Trident/7.0") > -1 && (e = 11);
        return e;
      }),
      (LL_CustomUI.utils.getViewport = function () {
        var e, t;
        return (
          "undefined" != typeof window.innerWidth
            ? ((e = window.innerWidth), (t = window.innerHeight))
            : "undefined" != typeof document.documentElement &&
              "undefined" != typeof document.documentElement.clientWidth &&
              0 != document.documentElement.clientWidth
            ? ((e = document.documentElement.clientWidth),
              (t = document.documentElement.clientHeight))
            : ((e = document.getElementsByTagName("body")[0].clientWidth),
              (t = document.getElementsByTagName("body")[0].clientHeight)),
          [e, t]
        );
      }),
      (LL_CustomUI.utils.setPositionOnScroll = function (e, t, o) {
        var n = LL_Utils.$(e);
        if (n) {
          var s = LL_CustomUI.utils.getViewport(),
            L = s[1],
            i = LL_CustomUI.utils.getElementSize(e),
            r = i.elementHeight,
            a = LL_CustomUI.utils.GetScrollPosition();
          "right_middle" == o || "left_middle" == o
            ? (n.style.top = L / 2 - r / 2 + a - t + "px")
            : (n.style.top = L - r + a - t + "px");
        }
      }),
      (LL_CustomUI.utils.setElementInTheMiddle = function (e, t, o) {
        var n = LL_Utils.$(e),
          s = LL_CustomUI.utils.getElementSize(e),
          L = s.elementWidth,
          i = "undefined" == typeof o ? s.elementHeight : o,
          r = document.body.clientWidth,
          a = LL_CustomUI.utils.getViewport(),
          u = a[1];
        t.indexOf("top") >= 0 || t.indexOf("bottom") >= 0
          ? (n.style.left = (r - L) / 2 + "px")
          : (n.style.top = (u - i) / 2 + "px");
      }),
      (LL_CustomUI.utils.listen = LL_Utils.listen),
      (LL_CustomUI.utils.removeListener = LL_Utils.removeListener),
      (LL_CustomUI.utils.preloadImages = function () {
        var e = [],
          t = /\/images\/V4LLPanel\/|\/company\/.+\.(gif|jpg|jpeg|tiff|png)$/i;
        for (prop in LL_CustomUI)
          try {
            if (
              "string" == typeof LL_CustomUI[prop] &&
              t.test(LL_CustomUI[prop]) &&
              -1 === LL_Utils.indexOf(e, LL_CustomUI[prop])
            ) {
              {
                new Image();
              }
              e.push(LL_CustomUI[prop]);
            }
          } catch (o) {}
      }),
      (LL_CustomUI.img = function (e) {
        var t,
          o = -1 !== e.indexOf("/"),
          n = "/company/config";
        if (o) t = e;
        else {
          t = LL_CustomUI[e];
          var s;
          if (!t.startsWith(n)) {
            var L = window["LL_CustomUI_" + LL_Deployment.UI.defaultLanguage];
            L && ((s = L[e]), s.startsWith(n) && (t = s));
          }
        }
        var i = t ? t.toLowerCase() : "";
        if (
          !i ||
          i.startsWith("//") ||
          i.startsWith("http:") ||
          i.startsWith("https:")
        )
          return i;
        var r = i.startsWith(n),
          a =
            -1 ===
            LL_Deployment.containers["private"].indexOf(
              LL_Deployment.scriptServerPath
            );
        if (
          (-1 ===
            LL_Deployment.containers.global.indexOf(
              LL_Deployment.scriptServerPath
            ) &&
            (-1 !== i.indexOf("/framework/v4")
              ? (i = i.replace("/framework/v4", LL_Deployment.getRelease()))
              : -1 !== i.indexOf("/framework") &&
                (i = i.replace("/framework", ""))),
          r)
        )
          if (a) {
            var u = i.split("/");
            i =
              LL_Deployment.containers["private"].replace(
                "/webinterfaces/icb",
                ""
              ) +
              "/ui/images/" +
              u[u.length - 1];
          } else
            i =
              LL_Deployment.containers["private"].replace(
                "/webinterfaces/icb",
                ""
              ) + i.replace(/\/\//g, "/");
        else
          i =
            LL_Deployment.containers.global.replace("/webinterfaces/icb", "") +
            (i.startsWith("/") ? "" : "/") +
            i.replace(/\/\//g, "/");
        return i;
      }));
  },
  dependencyError: function (e) {
    LL_Session.currentState.removeListener(LL_CustomUILoader.processAppState),
      LL_Session.pings.currentState.removeListener(
        LL_CustomUILoader.processSessionState
      ),
      LL_Session.currentState.change(LL_Session.states.ERROR),
      window.console && console.error && console.error("Error loading UI: ", e);
  },
  initComplete: !1,
  processAppState: function (e) {
    switch (e) {
      case LL_Session.states.ERROR:
        LL_Session.currentState.removeListener(
          LL_CustomUILoader.processAppState
        ),
          LL_Session.pings.currentState.removeListener(
            LL_CustomUILoader.processSessionState
          ),
          LL_CustomUILoader.render();
        break;
      case LL_Session.states.INIT:
        break;
      case LL_Session.states.READY:
        LL_CustomUILoader.initComplete &&
          LL_CustomUI.V4Panel &&
          LL_CustomUI.V4Panel.destroy(),
          LL_CustomUILoader.init();
        break;
      case LL_Session.states.STARTING:
        LL_CustomUILoader.initComplete || LL_CustomUILoader.init(),
          LL_CustomUILoader.setWait();
        break;
      case LL_Session.states.ACTIVE:
        LL_CustomUILoader.processSessionState(),
          LL_Session.pings.currentState.listen(
            LL_CustomUILoader.processSessionState
          );
        break;
      case LL_Session.states.DISCONNECTING:
        if (
          (LL_CustomUILoader.setWait(),
          -1 !==
            LL_Utils.indexOf(
              [
                LL_Session.pings.states.ACTIVE,
                LL_Session.pings.states.ELEVATING,
              ],
              LL_Session.pings.currentState.get()
            ))
        ) {
          if ("PASSIVE" === LL_Session.broadcastMode) return;
          LL_Utils.await("LL_CustomUI.SessionEndedPopup", function () {
            LL_CustomUI.SessionEndedPopup.init(LL_Session.feedbackUrl);
          });
        }
    }
  },
  processSessionState: function (e, t) {
    if (null !== e && void 0 !== e) {
      var o = "";
      for (var n in LL_Session.pings.states)
        if (LL_Session.pings.states[n] === e) {
          o = n;
          break;
        }
      switch (e) {
        case LL_Session.pings.states.WAIT:
        case LL_Session.pings.states.ACTIVATE:
        case LL_Session.pings.states.ELEVATING:
        case LL_Session.pings.states.ACTIVE:
          LL_CustomUILoader.render();
          break;
        case LL_Session.pings.states.ELEVATED:
          LL_CustomUI.V4Panel && LL_CustomUI.V4Panel.destroy(400);
          break;
        case LL_Session.pings.states.DISCONNECTED:
          if (
            -1 !==
            LL_Utils.indexOf(
              [
                LL_Session.pings.states.ACTIVE,
                LL_Session.pings.states.ELEVATING,
              ],
              t
            )
          ) {
            if ("PASSIVE" === LL_Session.broadcastMode) return;
            LL_Utils.await("LL_CustomUI.SessionEndedPopup", function () {
              LL_CustomUI.SessionEndedPopup.init(LL_Session.feedbackUrl);
            });
          }
          LL_Session.pings.currentState.removeListener(
            LL_CustomUILoader.processSessionState
          );
      }
    }
  },
  stealthMode: {
    listen: function () {
      if (LL_BR_Core.isMobile.any())
        window.addEventListener(
          "touchstart",
          LL_CustomUILoader.stealthMode.touchStart,
          !1
        ),
          window.addEventListener(
            "touchmove",
            LL_CustomUILoader.stealthMode.touchMove,
            !1
          ),
          window.addEventListener(
            "touchend",
            LL_CustomUILoader.stealthMode.touchEnd,
            !1
          );
      else if (
        "Windows" === LL_BR_Core.browser.OS &&
        "RT" === LL_BR_Core.browser.OSVersion
      )
        window.document &&
          document.body &&
          ((LL_CustomUILoader.stealthMode.gesture = new MSGesture()),
          (LL_CustomUILoader.stealthMode.gesture.target = document.body),
          document.body.addEventListener(
            "pointerdown",
            LL_CustomUILoader.stealthMode.touchMSEvents,
            !1
          ),
          document.body.addEventListener(
            "MSGestureHold",
            LL_CustomUILoader.stealthMode.touchMSEvents,
            !1
          ),
          window.addEventListener(
            "contextmenu",
            LL_CustomUILoader.stealthMode.touchMSPreventContext,
            !1
          ));
      else {
        LL_Utils.listen(
          "keydown",
          self,
          LL_CustomUILoader.stealthMode.keyCodeListener
        );
        for (var e = 0; e < frames.length; e++) {
          var t = frames[e],
            o = !1;
          try {
            o = !!t.location.href;
          } catch (n) {
            o = !1;
          }
          o &&
            LL_Utils.listen(
              "keydown",
              t,
              LL_CustomUILoader.stealthMode.keyCodeListener
            );
        }
      }
      return !0;
    },
    removeListeners: function () {
      if (LL_BR_Core.isMobile.any())
        window.removeEventListener(
          "touchstart",
          LL_CustomUILoader.stealthMode.touchStart,
          !1
        ),
          window.removeEventListener(
            "touchmove",
            LL_CustomUILoader.stealthMode.touchMove,
            !1
          ),
          window.removeEventListener(
            "touchend",
            LL_CustomUILoader.stealthMode.touchEnd,
            !1
          );
      else if (
        "Windows" === LL_BR_Core.browser.OS &&
        "RT" === LL_BR_Core.browser.OSVersion
      )
        window.document &&
          document.body &&
          (document.body.removeEventListener(
            "pointerdown",
            LL_CustomUILoader.stealthMode.touchMSEvents,
            !1
          ),
          document.body.removeEventListener(
            "MSGestureHold",
            LL_CustomUILoader.stealthMode.touchMSEvents,
            !1
          ));
      else {
        LL_Utils.removeListener(
          "keydown",
          self,
          LL_CustomUILoader.stealthMode.keyCodeListener
        );
        for (var e = 0; e < frames.length; e++) {
          var t = frames[e],
            o = !1;
          try {
            o = !!t.location.href;
          } catch (n) {
            o = !1;
          }
          o &&
            LL_Utils.removeListener(
              "keydown",
              t,
              LL_CustomUILoader.stealthMode.keyCodeListener
            );
        }
      }
    },
    keyCodeListener: function (e) {
      e || (e = window.event);
      var t = e.keyCode ? e.keyCode : e.which,
        o = e.ctrlKey;
      return !o || (13 != t && 10 != t)
        ? void 0
        : (LL_CustomUI.utils.stopEvent(e),
          setTimeout(
            LL_CustomUILoader.stealthMode.stealth_trigger_handler,
            111
          ),
          !1);
    },
    touchStart: function (e) {
      var t = e.touches || e.changedTouches;
      t &&
        t.length >= 3 &&
        (LL_CustomUILoader.stealthMode.touchStartTimer = new Date().getTime());
    },
    touchEnd: function (e) {
      if (
        !LL_CustomUILoader.stealthMode.panelShown &&
        0 !== LL_CustomUILoader.stealthMode.touchStartTimer
      ) {
        var t = new Date().getTime();
        t - LL_CustomUILoader.stealthMode.touchStartTimer >=
          LL_CustomUILoader.stealthMode.touchTimePressed &&
          (e.preventDefault(),
          LL_CustomUILoader.stealthMode.stealth_trigger_handler()),
          (LL_CustomUILoader.stealthMode.touchStartTimer = 0);
      }
    },
    touchMove: function (e) {},
    touchMSEvents: function (e) {
      if ("pointerdown" == e.type)
        return void LL_CustomUILoader.stealthMode.gesture.addPointer(
          e.pointerId
        );
      if ("MSGestureHold" == e.type) {
        if (1 == e.detail)
          return void (LL_CustomUILoader.stealthMode.touchStartTimer = new Date().getTime());
        var t = new Date().getTime();
        (LL_CustomUILoader.stealthMode.touchDiff =
          t - LL_CustomUILoader.stealthMode.touchStartTimer),
          LL_CustomUILoader.stealthMode.touchDiff >=
            LL_CustomUILoader.stealthMode.touchTimePressed &&
            LL_CustomUILoader.stealthMode.stealth_trigger_handler(),
          (LL_CustomUILoader.stealthMode.touchStartTimer = 0);
      }
    },
    touchMSPreventContext: function (e) {
      return LL_Cobrowse_Launcher.touchDiff >=
        LL_Cobrowse_Launcher.touchTimePressed
        ? ((LL_Cobrowse_Launcher.touchDiff = 0),
          LL_CustomUI.utils.stopEvent(e),
          window.removeEventListener(
            "contextmenu",
            LL_Cobrowse_Launcher.listeners.touchMSPreventContext,
            !1
          ),
          !1)
        : void 0;
    },
    touchStartTimer: 0,
    gesture: null,
    touchDiff: 0,
    touchTimePressed: 1e3,
    panelShown: !1,
    stealth_trigger_handler: function () {
      return LL_CustomUILoader.stealthMode.panelShown ||
        LL_Session.currentState.get() !== LL_Session.states.READY
        ? (LL_CustomUILoader.stealthMode.removeListeners(), !1)
        : ((LL_CustomUILoader.stealthMode.panelShown = !0),
          void LL_CustomUILoader.render());
    },
  },
  init: function () {
    LL_Session.currentState.get() === LL_Session.states.READY
      ? ((LL_CustomUILoader.initComplete = !0),
        LL_CustomUILoader.animationEnabled
          ? LL_CustomUILoader.render()
          : 1 === LL_Deployment.launchPoint.type &&
            LL_Deployment.launchPoint.stealthMode
          ? ((LL_CustomUILoader.stealthMode.panelShown = !1),
            LL_CustomUILoader.stealthMode.listen())
          : LL_CustomUILoader.render())
      : LL_Session.currentState.get() === LL_Session.states.ACTIVE &&
        ((LL_CustomUILoader.initComplete = !0), LL_CustomUILoader.render());
  },
  setWait: function () {
    LL_Utils.await("LL_CustomUI.V4Panel", function () {
      LL_CustomUI.V4Panel.setWait(!0);
    });
  },
  render: function () {
    if (
      (1 === LL_Deployment.launchPoint.type &&
        LL_Deployment.launchPoint.stealthMode &&
        ((LL_CustomUILoader.stealthMode.panelShown = !0),
        LL_CustomUILoader.stealthMode.removeListeners()),
      "PASSIVE" !== LL_Session.broadcastMode)
    ) {
      var e = !0;
      if (
        (void 0 !== window.Cobrowse &&
          void 0 !== Cobrowse.API.DefaultUI.liveExpertPanelEnabled &&
          (e = Cobrowse.API.DefaultUI.liveExpertPanelEnabled),
        !e)
      )
        return void (
          void 0 !== window.LL_CustomUI &&
          void 0 !== window.LL_CustomUI.V4Panel &&
          LL_CustomUI.V4Panel.hide()
        );
      var t = LL_Session.currentState.get();
      if (t === LL_Session.states.READY)
        if (
          ((LL_CustomUILoader.initComplete = !0),
          LL_Utils.timers.clear("panelDelayTimer"),
          LL_BR_Core.ICBSupported || "none" !== LL_BR_Core.ACBSupported)
        ) {
          var o = LL_CustomUILoader.getFilePath(
            LL_CustomUI.isTermsAndConditionsEnabled
              ? LL_CustomUILoader.modules.NumberGenerationWindowTC
              : LL_CustomUILoader.modules.NumberGenerationWindow
          );
          LL_Utils.require(
            "LL_CustomUI.noAgent",
            o,
            function () {
              LL_CustomUI.V4Panel &&
                LL_CustomUI.V4Panel !== LL_CustomUI.noAgentPanel &&
                LL_CustomUI.V4Panel.destroy(),
                LL_CustomUI.isTermsAndConditionsEnabled &&
                  (LL_CustomUI.tcPanel && LL_CustomUI.tcPanel.destroy(),
                  LL_CustomUI.Tc()),
                LL_CustomUI.noAgent(),
                (LL_CustomUI.V4Panel = LL_CustomUI.noAgentPanel),
                LL_CustomUI.V4Panel.init();
            },
            LL_CustomUILoader.dependencyError
          );
        } else {
          var o = LL_CustomUILoader.getFilePath(
            LL_CustomUILoader.modules.NotSupportedEnv
          );
          LL_Utils.require(
            "LL_CustomUI.unsupportedEnv",
            o,
            function () {
              LL_CustomUI.V4Panel &&
                LL_CustomUI.V4Panel !== LL_CustomUI.unsupportedEnvPanel &&
                LL_CustomUI.V4Panel.destroy(),
                LL_CustomUI.unsupportedEnv(),
                (LL_CustomUI.V4Panel = LL_CustomUI.unsupportedEnvPanel),
                LL_CustomUI.V4Panel.init();
            },
            LL_CustomUILoader.dependencyError
          );
        }
      else if (t === LL_Session.states.ACTIVE) {
        if (!LL_Session.pings.currentState.get()) return;
        var n = LL_Session.presentationCode;
        if (
          ((LL_CustomUILoader.initComplete = !0),
          -1 !==
            LL_Utils.indexOf(
              [
                LL_Session.pings.states.ACTIVE,
                LL_Session.pings.states.ELEVATING,
              ],
              LL_Session.pings.currentState.get()
            ))
        ) {
          var o = LL_CustomUILoader.getFilePath(
            LL_CustomUILoader.modules.AgentConnected
          );
          LL_Utils.require(
            "LL_CustomUI.agentConnected",
            o,
            function () {
              LL_CustomUI.V4Panel &&
                LL_CustomUI.V4Panel !== LL_CustomUI.agentConnectedPanel &&
                LL_CustomUI.V4Panel.destroy(),
                LL_CustomUI.agentConnected(),
                LL_Session.SID && (n = LL_CustomUI.v4_activated_text),
                (LL_CustomUI.V4Panel = LL_CustomUI.agentConnectedPanel),
                LL_CustomUI.V4Panel.init(),
                LL_CustomUI.V4Panel.setPresentationCode(n),
                LL_Session.pings.currentState.get() ===
                  LL_Session.pings.states.ELEVATING && LL_CustomUI.start_acb();
            },
            LL_CustomUILoader.dependencyError
          );
        } else if (
          LL_Session.pings.currentState.get() !==
          LL_Session.pings.states.ELEVATED
        ) {
          var o = LL_CustomUILoader.getFilePath(
            LL_CustomUI.isTermsAndConditionsEnabled
              ? LL_CustomUILoader.modules.NumberGenerationWindowTC
              : LL_CustomUILoader.modules.NumberGenerationWindow
          );
          LL_Utils.require(
            "LL_CustomUI.noAgent",
            o,
            function () {
              LL_CustomUI.V4Panel &&
                LL_CustomUI.V4Panel !== LL_CustomUI.noAgentPanel &&
                LL_CustomUI.V4Panel.destroy(),
                LL_CustomUI.isTermsAndConditionsEnabled &&
                  (LL_CustomUI.tcPanel && LL_CustomUI.tcPanel.destroy(),
                  LL_CustomUI.Tc()),
                LL_CustomUI.noAgent(),
                LL_Session.SID && (n = LL_CustomUI.V3Activating_text),
                (LL_CustomUI.V4Panel = LL_CustomUI.noAgentPanel),
                LL_CustomUI.V4Panel.init(),
                LL_CustomUI.V4Panel.setPresentationCode(n),
                LL_Session.pings.currentState.get() ===
                  LL_Session.pings.states.ACTIVATE && LL_CustomUI.start_acb();
            },
            LL_CustomUILoader.dependencyError
          );
        } else
          (LL_CustomUILoader.initComplete = !0),
            LL_CustomUI.V4Panel && LL_CustomUI.V4Panel.destroy(400);
      } else if (t === LL_Session.states.ERROR) {
        if (LL_CustomUI.V4Panel) {
          var o = LL_CustomUILoader.getFilePath(
            LL_CustomUI.isTermsAndConditionsEnabled
              ? LL_CustomUILoader.modules.NumberGenerationWindowTC
              : LL_CustomUILoader.modules.NumberGenerationWindow
          );
          LL_Utils.require(
            "LL_CustomUI.noAgent",
            o,
            function () {
              LL_CustomUI.V4Panel &&
                LL_CustomUI.V4Panel !== LL_CustomUI.noAgentPanel &&
                LL_CustomUI.V4Panel.destroy(),
                LL_CustomUI.isTermsAndConditionsEnabled &&
                  (LL_CustomUI.tcPanel && LL_CustomUI.tcPanel.destroy(),
                  LL_CustomUI.Tc()),
                LL_CustomUI.noAgent(),
                (LL_CustomUI.V4Panel = LL_CustomUI.noAgentPanel),
                LL_CustomUI.V4Panel.init(),
                LL_CustomUI.V4Panel.displayError();
            },
            LL_CustomUILoader.dependencyError
          );
        }
      } else
        window.console &&
          console.error &&
          console.error(
            "UI_Manager: Invalid app state (" +
              t +
              ":" +
              LL_Session.pings.currentState.get() +
              ")"
          );
    }
  },
  start_acb: function () {
    var e = LL_CustomUILoader.getFilePath(LL_CustomUILoader.modules.ACB, !0);
    LL_Utils.require(
      "LL_CustomUI.LLActivationPopup",
      e,
      function () {
        LL_CustomUI.LLActivationPopup.init();
      },
      LL_CustomUILoader.dependencyError
    );
  },
  pre_init: function () {
    return window.LL_BR_Core
      ? (LL_CustomUILoader.loadCommonFunctions(),
        LL_CustomUILoader.processAppState(LL_Session.currentState.get()),
        void LL_Session.currentState.listen(LL_CustomUILoader.processAppState))
      : (LL_CustomUILoader.dependencyError(
          "LAUNCHER_LOAD_ERR: reference not resolved (LL_BR_Core)"
        ),
        !1);
  },
  getFilePath: function (e, t) {
    var o =
        window.document && "backcompat" === document.compatMode.toLowerCase(),
      n = LL_CustomUI.utils.isAnyIE();
    return (
      (noIEFile = "undefined" != typeof t && 1 == t ? !0 : !1),
      LL_Deployment.containers.global +
        "/" +
        LL_Deployment.getRelease() +
        "/client/ui/" +
        e +
        ((n || o || LL_CustomUI.utils.isAndroid()) && !noIEFile ? "_ie" : "") +
        ".js"
    );
  },
  changeLanguage: function (e) {
    var t = function () {
        window.LL_CustomUI &&
          LL_CustomUI.V4Panel &&
          (LL_CustomUI.V4Panel.destroy(), delete LL_CustomUI.V4Panel),
          window.LL_CustomUI &&
            LL_CustomUI.noAgentPanel &&
            delete LL_CustomUI.noAgentPanel,
          LL_CustomUI.render();
      },
      o = function () {
        var e = window["LL_CustomUI_" + LL_Deployment.UI.defaultLanguage],
          o = LL_CustomUI;
        if (null != e) {
          null == o && (o = {});
          for (var n in e)
            e.hasOwnProperty(n) && !o.hasOwnProperty(n) && (o[n] = e[n]);
          t();
        }
      },
      n = function (e) {
        window.console &&
          console.error &&
          console.error("Cobrowse launcher failed to load: \n" + e),
          (LL_Deployment.UI.language = LL_Deployment.UI.defaultLanguage),
          (LL_CustomUI = window["LL_CustomUI_" + LL_Deployment.UI.language]),
          t();
      };
    if (!window.LL_CustomUI || LL_CustomUI.language != e) {
      (window["LL_CustomUI_" + LL_Deployment.UI.language] = LL_CustomUI),
        (LL_Deployment.UI.language = e),
        (LL_CustomUI = void 0);
      var s = LL_Deployment.UI.getUIPath(e);
      LL_Utils.require("LL_CustomUI", s, o, n);
    }
  },
};
LL_Utils.await("LL_CustomUI", LL_CustomUILoader.pre_init);
("use strict");
function cobrowse() {
  function e(e, n) {
    return {
      listen: function (e) {
        var n = this.___internals.listeners;
        -1 === LL_Utils.indexOf(n, e) && n.push(e);
      },
      removeListener: function (e) {
        for (var n = this.___internals.listeners, t = n.length - 1; t >= 0; t--)
          n[t] === e && n.splice(t, 1);
      },
      ___internals: { eventName: e, listeners: [] },
    };
  }
  function n(e, n) {
    if (
      void 0 !== e &&
      void 0 !== e.___internals &&
      void 0 !== e.___internals.listeners
    )
      for (var t = 0; t < e.___internals.listeners.length; t++)
        e.___internals.listeners[t] &&
          !(function (e, n) {
            setTimeout(function () {
              e.call(this, n);
            }, 0);
          })(e.___internals.listeners[t], n);
  }
  function t(e) {
    if (void 0 !== window.Cobrowse && u) {
      var t = window.Cobrowse.API.Session.previousState,
        s = window.Cobrowse.API.Session.getState();
      if (
        ((this.Cobrowse.API.Session.accessCode =
          null === LL_Session.presentationCode
            ? void 0
            : LL_Session.presentationCode),
        (this.Cobrowse.API.Session.mode = o(s)),
        s !== t)
      ) {
        if (s === window.Cobrowse.States.STARTING) {
          var i = { SID: LL_Session.SID };
          n(window.Cobrowse.Events.SessionStarting, i);
        } else if (
          s === window.Cobrowse.States.ACTIVE &&
          t === window.Cobrowse.States.STARTING
        ) {
          var i = {
            accessCode: LL_Session.presentationCode,
            SID: LL_Session.SID,
            mode: LL_Session.mode,
          };
          n(window.Cobrowse.Events.SessionStarted, i);
        } else if (
          (s === window.Cobrowse.States.READY &&
            t === window.Cobrowse.States.DISCONNECTING) ||
          s === window.Cobrowse.States.ERROR
        ) {
          var i = { reason: "unknown" };
          if (LL_Session && LL_Session.___internals.endSessionReason)
            switch (LL_Session.___internals.endSessionReason) {
              case "User-initiated":
                i.reason = d.User;
                break;
              case "SID_Override":
                i.reason = d.Network;
                break;
              case "ResponseTimer":
                i.reason = d.TimeOut;
                break;
              default:
                i.reason = d.User;
            }
          n(window.Cobrowse.Events.SessionEnded, i);
        }
        this.Cobrowse.API.Session.previousState = s;
        // Fire event
        var i = { state: s, previousState: t };
        n(window.Cobrowse.Events.StateChanged, i);
      }
    }
  }
  function s(e) {
    var t = window.Cobrowse.API.Session.previousState,
      s = window.Cobrowse.API.Session.getState();
    if (
      ((window.Cobrowse.API.Session.accessCode =
        null === LL_Session.presentationCode
          ? void 0
          : LL_Session.presentationCode),
      (window.Cobrowse.API.Session.mode = o(s)),
      s !== t)
    ) {
      if (
        ((this.Cobrowse.API.Session.previousState = s),
        s === window.Cobrowse.States.ACTIVE_WAIT)
      );
      else if (
        s === window.Cobrowse.States.ACTIVE_ACTIVE &&
        t === window.Cobrowse.States.ACTIVE_WAIT
      ) {
        var i = {
          id: LL_Session.presentationCode,
          name: LL_Session.SID,
          mode: LL_Session.mode,
        };
        n(window.Cobrowse.Events.SessionStarted, i);
      }
      // Fire event
      var i = { state: s, previousState: t };
      n(window.Cobrowse.Events.StateChanged, i);
    }
  }
  function o(e) {
    if (void 0 === LL_Session) return null;
    var n = null === LL_Session.mode ? void 0 : LL_Session.mode;
    return void 0 === n || null === n
      ? null
      : n.indexOf("ACB") > -1
      ? "ACB"
      : "ICB" == n
      ? e === Cobrowse.States.ACTIVE_ESCALATED
        ? "ACB"
        : "ICB"
      : void 0;
  }
  function i(e) {
    if ("undefined" != typeof LL_Session && void 0 !== LL_Session) {
      var n = LL_Session.currentState.get();
      if (LL_Utils.indexOf(e, n) > -1) return !0;
    }
    return !1;
  }
  function a() {
    var e = S();
    "Ok" == e && clearInterval(L);
  }
  var r = !0,
    _ = 200,
    d = {
      User: "USER_INITIATED",
      TimeOut: "USER_TIMEOUT",
      Network: "NETWORK_TIMEOUT",
    },
    l = {
      API: {
        checkEnvironment: function () {
          if (u) {
            var e = [LL_Session.states.INIT, LL_Session.states.READY];
            if (i(e)) {
              var n = { ICB: !1, ACB: !1 };
              return (
                window.LL_BR_Core &&
                  ((n.ACB = "none" !== LL_BR_Core.IsACBSupported()),
                  (n.ICB = LL_BR_Core.IsICBSupported())),
                n
              );
            }
          }
        },
        setReportingId: function (e) {
          if (!u) return !1;
          if (void 0 === e || void 0 === e.extKey) return !1;
          var n = [LL_Session.states.INIT, LL_Session.states.READY];
          if (!i(n)) return !1;
          try {
            {
              LL_Cobrowse_Manager.setExtParams(e);
            }
            return !0;
          } catch (t) {
            return !1;
          }
        },
        Session: {
          accessCode: null,
          mode: null,
          previousState: null,
          start: function (e) {
            if (u) {
              var n = [LL_Session.states.READY];
              if (i(n)) {
                var t = { result: !0, description: "" },
                  s = LL_Session.start(e);
                return (
                  s && ((t.result = s.result), (t.description = s.reason)), t
                );
              }
            }
          },
          stop: function (e) {
            if (u) {
              var n = [LL_Session.states.STARTING, LL_Session.states.ACTIVE];
              if (i(n)) {
                var t = { result: !0, description: "" },
                  s = { send: !0, reason: null };
                e && e.reason && (s.reason = e.reason);
                var o = LL_Session.stop(s);
                return (
                  o && ((t.result = o.result), (t.description = o.reason)), t
                );
              }
            }
          },
          getState: function () {
            if (u && void 0 !== window.LL_Session) {
              var e,
                n = LL_Session.currentState.get();
              switch (n) {
                case LL_Session.states.INIT:
                  e = Cobrowse.States.INIT;
                  break;
                case LL_Session.states.READY:
                  e = Cobrowse.States.READY;
                  break;
                case LL_Session.states.STARTING:
                  e = Cobrowse.States.STARTING;
                  break;
                case LL_Session.states.ACTIVE:
                  e = Cobrowse.States.ACTIVE;
                  break;
                case LL_Session.states.DISCONNECTING:
                  e = Cobrowse.States.DISCONNECTING;
                  break;
                case LL_Session.states.ERROR:
                  e = Cobrowse.States.ERROR;
                  break;
                default:
                  e = "";
              }
              if (e === Cobrowse.States.ACTIVE && LL_Session.pings) {
                var t = LL_Session.pings.currentState.get();
                switch (t) {
                  case LL_Session.pings.states.WAIT:
                    e = Cobrowse.States.ACTIVE_WAIT;
                    break;
                  case LL_Session.pings.states.ACTIVE:
                    e = Cobrowse.States.ACTIVE_ACTIVE;
                    break;
                  case LL_Session.pings.states.ELEVATING:
                    e = Cobrowse.States.ACTIVE_ESCALATING;
                    break;
                  case LL_Session.pings.states.ELEVATED:
                    e = Cobrowse.States.ACTIVE_ESCALATED;
                    break;
                  case LL_Session.pings.states.ERROR:
                    e = Cobrowse.States.ERROR;
                }
              }
              return e;
            }
          },
          startAdvancedMode: function () {
            if (
              u &&
              Cobrowse.API.Session.getState() ===
                Cobrowse.States.ACTIVE_ESCALATING
            ) {
              // Check current state. Action is available only in Escalating state.
              var e,
                n = { result: !0, description: "" };
              try {
                if (
                  void 0 !== window.LL_Session &&
                  void 0 !== LL_Session.presentationToken &&
                  void 0 !== window.LL_BR_Core &&
                  void 0 !== LL_BR_Core.ACBSupported &&
                  void 0 !== window.LL_Deployment
                ) {
                  // TODO: make protocol flexible
                  var t = "https:",
                    s =
                      t +
                      LL_Deployment.scriptServerPath +
                      "/framework/" +
                      LL_Deployment.getRelease() +
                      "/download.aspx?pc_token=" +
                      LL_Session.presentationToken;
                  LL_Utils.indexOf(
                    [".net", "win", "mac"],
                    LL_BR_Core.ACBSupported
                  ) > -1
                    ? (window.location = s)
                    : window.open(
                        s,
                        "LiveLOOK_ACB",
                        "toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,titlebar=0,status=0,width=940,height=660,left=" +
                          Math.max(0, (screen.width - 940) / 2) +
                          ",top=" +
                          Math.max(0, (screen.height - 710) / 2)
                      );
                }
              } catch (o) {
                (e.reason = "Error happened"), (e.result = !1);
              }
              return (
                e && ((n.result = e.result), (n.description = e.reason)), n
              );
            }
          },
        },
        DefaultUI: {
          setLanguage: function (e) {
            LL_CustomUILoader.changeLanguage(e);
          },
          getLanguage: function () {
            return window.LL_Deployment ? LL_Deployment.UI.language : void 0;
          },
          ___internals: {
            _liveExpertPanelEnabled: null,
            _escalationPopupEnabled: null,
            _sessionEndedPopupEnabled: null,
            _navigatingAwayPopupEnabled: null,
          },
        },
      },
      Events: {
        SessionStarting: (function () {
          return new e("SessionStarting");
        })(),
        SessionStarted: (function () {
          var n = new e("SessionStarted");
          return n;
        })(),
        SessionEnded: (function () {
          return new e("SessionEnded");
        })(),
        AgentConnected: (function () {
          return new e("AgentConnected");
        })(),
        AgentDisconnected: (function () {
          return new e("AgentDisconnected");
        })(),
        StateChanged: (function () {
          return new e("StateChanged");
        })(),
        NavigatingAway: (function () {
          return new e("NavigatingAway");
        })(),
      },
      States: {
        INIT: "INIT",
        READY: "READY",
        STARTING: "STARTING",
        ACTIVE: "ACTIVE",
        ACTIVE_WAIT: "ACTIVE:WAIT",
        ACTIVE_ACTIVE: "ACTIVE:ACTIVE",
        ACTIVE_ESCALATING: "ACTIVE:ESCALATING",
        ACTIVE_ESCALATED: "ACTIVE:ESCALATED",
        DISCONNECTING: "DISCONNECTING",
        ERROR: "ERROR",
      },
      ___internals: {
        Callbacks: {
          AgentConnectedCallback: function (e) {
            function t(t) {
              if (null == t || "null" === t) {
                //save agent data
                var s = !1;
                // fire event
                if (
                  (LL_Storage_Manager.setItemAsync(
                    LL_Session.presentationToken,
                    "participant_" + e.ParticipantId,
                    e.Name,
                    function () {
                      s = !0;
                    }
                  ),
                  window.Cobrowse && window.Cobrowse.Events)
                ) {
                  var o = { id: e.ParticipantId, name: e.Name };
                  n(window.Cobrowse.Events.AgentConnected, o);
                }
              }
            }
            void 0 !== window.LL_Storage_Manager &&
              void 0 !== e &&
              void 0 !== e.Name &&
              // check if a new agent
              LL_Storage_Manager.getItemAsync(
                LL_Session.presentationToken,
                "participant_" + e.ParticipantId,
                t
              );
          },
          AgentDisconnectedCallback: function (e) {
            function t(t) {
              if (void 0 !== t && null != t && "null" !== t) {
                //clear agent data
                var s = t,
                  o = !1;
                // fire event
                if (
                  (LL_Storage_Manager.setItemAsync(
                    LL_Session.presentationToken,
                    "participant_" + e.ParticipantId,
                    null,
                    function () {
                      o = !0;
                    }
                  ),
                  window.Cobrowse && window.Cobrowse.Events)
                ) {
                  var i = { id: e.ParticipantId, name: s };
                  n(window.Cobrowse.Events.AgentDisconnected, i);
                }
              }
            }
            void 0 !== window.LL_Storage_Manager &&
              LL_Storage_Manager.getItemAsync(
                LL_Session.presentationToken,
                "participant_" + e.ParticipantId,
                t
              );
          },
          NavigatingAwayCallback: function (e) {
            function t(e) {
              if (window.Cobrowse && window.Cobrowse.Events) {
                var t = { url: null };
                e && (t.url = e);
              }
              n(window.Cobrowse.Events.NavigatingAway, t);
            }
            // async call
            setTimeout(t, 0, e);
          },
        },
      },
    },
    u = !1,
    S = function () {
      if (
        !u &&
        "undefined" != typeof LL_Session &&
        void 0 !== LL_Session &&
        void 0 !== LL_Session.pings
      ) {
        var o = l;
        // --- Initialize events
        LL_Session.pings.currentState.listen(s),
          LL_Session.currentState.listen(t);
        // Initialize DefaultUI
        try {
          // Check if dynamic properties are working in a current browser
          var i = {};
          Object.defineProperty(i, "someProp", {
            get: function () {
              return 0;
            },
          });
        } catch (a) {
          r = !1;
        }
        return (
          r
            ? (Object.defineProperty(
                o.API.DefaultUI,
                "liveExpertPanelEnabled",
                {
                  get: function () {
                    // Initialize
                    return (
                      null === this.___internals._liveExpertPanelEnabled &&
                        (this.___internals._liveExpertPanelEnabled = !0),
                      this.___internals._liveExpertPanelEnabled
                    );
                  },
                  set: function (e) {
                    this.___internals._liveExpertPanelEnabled = e;
                  },
                }
              ),
              Object.defineProperty(o.API.DefaultUI, "escalationPopupEnabled", {
                get: function () {
                  // Initialize
                  return (
                    null === this.___internals._escalationPopupEnabled &&
                      (this.___internals._escalationPopupEnabled = !0),
                    this.___internals._escalationPopupEnabled
                  );
                },
                set: function (e) {
                  this.___internals._escalationPopupEnabled = e;
                },
              }),
              Object.defineProperty(
                o.API.DefaultUI,
                "sessionEndedPopupEnabled",
                {
                  get: function () {
                    // Initialize
                    return (
                      null === this.___internals._sessionEndedPopupEnabled &&
                        (this.___internals._sessionEndedPopupEnabled = !0),
                      this.___internals._sessionEndedPopupEnabled
                    );
                  },
                  set: function (e) {
                    this.___internals._sessionEndedPopupEnabled = e;
                  },
                }
              ),
              Object.defineProperty(
                o.API.DefaultUI,
                "navigatingAwayPopupEnabled",
                {
                  get: function () {
                    // Initialize
                    return (
                      null === this.___internals._navigatingAwayPopupEnabled &&
                        (this.___internals._navigatingAwayPopupEnabled = !0),
                      this.___internals._navigatingAwayPopupEnabled
                    );
                  },
                  set: function (e) {
                    this.___internals._navigatingAwayPopupEnabled = e;
                  },
                }
              ))
            : ((o.API.DefaultUI.liveExpertPanelEnabled = !0),
              (o.API.DefaultUI.escalationPopupEnabled = !0),
              (o.API.DefaultUI.sessionEndedPopupEnabled = !0),
              (o.API.DefaultUI.navigatingAwayPopupEnabled = !0)),
          (u = !0),
          (l.Events.SessionStarting = new e("SessionStarting", function () {
            var e = { SID: "" };
            n(window.Cobrowse.Events.SessionStarting, e);
          })),
          "Ok"
        );
      }
      return "No";
    },
    L = setInterval(a, _);
  return l;
}
this.Cobrowse = new cobrowse();
/*
page: http://www.2degreesmobile.co.nz/
url: https://public.cobrowse.oraclecloud.com/rely/global_launcher_acb.js
*/
