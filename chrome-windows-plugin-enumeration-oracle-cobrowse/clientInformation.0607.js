if (!window.LL_Deployment) var LL_Deployment = {};
LL_Deployment.scriptServerPath = "//www.livelook.com";
LL_Deployment.dataServerURL =
  "https://7b91f3b469e9cec0812d-4411771c4b94f83e4996870fc45fcf78.ssl.cf2.rackcdn.com/llscripts//webinterfaces/storage/";
if (navigator.userAgent && /MSIE/i.test(navigator.userAgent)) {
  LL_Deployment.dataServerURL =
    "https:" + LL_Deployment.scriptServerPath + "/webinterfaces/storage/";
}
LL_Deployment.version = "20160115";
LL_Deployment.v4CustomButtonID = "";

ll_siteCodeLite = "BBVAHUB:SC26073793:US:1";

LL_Deployment.language = "1033";
var LL_Storage_Manager = {
  dataServerID: "LL_DataServer",
  dataServerURL: window.LL_Deployment ? LL_Deployment.dataServerURL : null,
  localStorageSupported: !1,
  safariPrivateMode: !1,
  asyncSupported: !1,
  asyncTimeout: 5e3,
  defaultHandler: function () {},
  commandQueue: [],
  timers: {},
  handlers: {},
  iPadChrome: function () {
    for (
      var e = navigator.userAgent,
        a = ["Mozilla", "CriOS", "Safari", "Mobile"],
        r = !0,
        t = 0;
      t < a.length;
      t++
    )
      if (e.indexOf(a[t]) < 0) {
        r = !1;
        break;
      }
    return r;
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
          if (11 == a) return !0;
        }
        return !1;
      },
      r = navigator.userAgent;
    //N.B.: do no change order in which providers are added
    return (
      r &&
        (a() && !window.indexedDB
          ? (e = "ie11_comp")
          : a()
          ? (e = "ie11")
          : /MSIE/i.test(r)
          ? (e = "ie")
          : /Chrome/i.test(r) || LL_Storage_Manager.iPadChrome()
          ? (e = "chrome")
          : /Firefox/i.test(r)
          ? (e = "firefox")
          : /Safari/i.test(r) && /Windows/i.test(r)
          ? (e = "wsafari")
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
    (t &&
      0 !=
        LL_Storage_Manager.dataServerURL
          .toLowerCase()
          .indexOf(t.toLowerCase())) ||
      ("string" == typeof r &&
        setTimeout(function () {
          LL_Storage_Manager.handleCommand(a, r);
        }, 0));
  },
  checkIfExists: function (e, a) {
    try {
      var r = "exists(" + e + "," + escape(window.location.href) + ")";
      a.postMessage(r, "*");
    } catch (t) {}
  },
  init: function (e) {
    (LL_Storage_Manager.localStorageSupported = LL_Storage_Manager.isStorageSupported()),
      (LL_Storage_Manager.asyncSupported =
        LL_Storage_Manager.dataServerURL &&
        !LL_Storage_Manager.safariPrivateMode
          ? !!window.postMessage
          : !1),
      (LL_Storage_Manager.handlers.ready = LL_Storage_Manager.onAsyncReady),
      (LL_Storage_Manager.handlers.checkIfExists =
        LL_Storage_Manager.checkIfExists),
      window.addEventListener
        ? //Firefox, Safari, Opera, Chrome, IE9
          window.addEventListener(
            "message",
            LL_Storage_Manager.messageListener,
            !1
          )
        : window.attachEvent &&
          //IE8
          window.attachEvent("onmessage", LL_Storage_Manager.messageListener),
      e && LL_Storage_Manager.asyncSupported && LL_Storage_Manager.embedFrame();
  },
  embedFrame: function () {
    if (null == document.getElementById(LL_Storage_Manager.dataServerID)) {
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
        e.setAttribute("aria-hidden", "true"),
        e.setAttribute(
          "style",
          "display: block; border: 0 none; width: 1px; height: 1px;"
        ),
        window.attachEvent
          ? e.attachEvent("onload", LL_Storage_Manager.onAsyncReady)
          : window.addEventListener
          ? e.addEventListener("load", LL_Storage_Manager.onAsyncReady, !1)
          : (e.onload = LL_Storage_Manager.onAsyncReady),
        (LL_Storage_Manager.asyncLoadTime = LL_Storage_Manager.getCurrentTime()),
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
  getCurrentTime: function () {
    var e = new Date();
    return e.getTime();
  },
  onAsyncReady: function () {
    if (
      ((LL_Storage_Manager.asyncReady = !0),
      LL_Storage_Manager.commandQueue.length > 0)
    ) {
      for (var e = 0; e < LL_Storage_Manager.commandQueue.length; e++) {
        var a = LL_Storage_Manager.commandQueue[e];
        frames[LL_Storage_Manager.dataServerID].postMessage(a, "*");
      }
      LL_Storage_Manager.commandQueue = [];
    }
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
        if ((g.splice(g.length, 0, e), null != LL_Storage_Manager.handlers[n]))
          try {
            var i = LL_Storage_Manager.handlers[n];
            if (
              "ready" != n &&
              "checkIfExists" != n &&
              -1 == n.toLowerCase().indexOf("listener")
            )
              try {
                (LL_Storage_Manager.handlers[n] = null),
                  delete LL_Storage_Manager.handlers[n];
              } catch (s) {}
            i.apply(this, g);
          } catch (_) {}
        else if (LL_Storage_Manager.defaultHandler)
          try {
            g.splice(0, 0, n), LL_Storage_Manager.defaultHandler.apply(this, g);
          } catch (_) {}
    }
  },
  checkAsyncReady: function () {
    if (LL_Storage_Manager.asyncReady) return !0;
    if (
      (LL_Storage_Manager.embedFrame(),
      LL_Storage_Manager.getCurrentTime() - LL_Storage_Manager.asyncLoadTime >
        4e3)
    ) {
      var e = document.getElementById(LL_Storage_Manager.dataServerID);
      null != e && document.body.removeChild(e),
        LL_Storage_Manager.embedFrame();
    }
    return LL_Storage_Manager.asyncReady;
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
      var o = t ? "setItem" + e + a + LL_Storage_Manager.getCurrentTime() : "",
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
        0 == t && 0 == o.indexOf("{") && (o = o.substring(1)),
          t == r.length - 1 &&
            "}" == g.charAt(g.length - 1) &&
            (g = g.substring(0, g.length - 1)),
          0 == g.indexOf('"') &&
            '"' == g.charAt(g.length - 1) &&
            (g = g.substring(1, g.length - 1)),
          (a[o] = g);
      }
      return a;
    } catch (L) {}
    return {};
  },
  setItemsAsync: function (e, a, r, t) {
    if (LL_Storage_Manager.asyncSupported) {
      var n = r ? "setItems" + e + LL_Storage_Manager.getCurrentTime() : "",
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
      var n = "getItem" + e + a + LL_Storage_Manager.getCurrentTime(),
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
      var n = "getItems" + e + LL_Storage_Manager.getCurrentTime(),
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
      for (var g = {}, L = a.split(","), i = 0; i < L.length; i++)
        g[L[i]] = LL_Storage_Manager.getItem(e, L[i]);
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
      var n = r
          ? "removeItem" + e + a + LL_Storage_Manager.getCurrentTime()
          : "",
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
          0 == r.indexOf(e) &&
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
          0 == t.indexOf(e + "_") &&
            //delete this cookie
            (document.cookie = t + " = ;expires=Thu, 01 Jan 1970 00:00:01 GMT");
    }
  },
  clearAsync: function (e, a, r) {
    if (LL_Storage_Manager.asyncSupported) {
      var t = a ? "clear" + e + LL_Storage_Manager.getCurrentTime() : "",
        n = "clear(" + LL_Storage_Manager.prepareCommandArgs(e, t) + ")";
      LL_Storage_Manager.asyncSendCommand(n, t, a, r);
    } else LL_Storage_Manager.clear(e), a && a.call();
  },
  addSIDListener: function (e, a) {
    //preserved for compatibility reasons
    //must not be used
    //preserved for compatibility reasons
    //must not be used
    return window.LL_Cobrowse_Manager
      ? LL_Cobrowse_Manager.addEventListener(
          LL_Cobrowse_Manager.Events.ChatCobrowseInitiated,
          e,
          a
        )
      : !1;
  },
  removeSIDListener: function (e) {
    //preserved for compatibility reasons
    //must not be used
    //preserved for compatibility reasons
    //must not be used
    return window.LL_Cobrowse_Manager
      ? LL_Cobrowse_Manager.removeEventListener(
          LL_Cobrowse_Manager.Events.ChatCobrowseInitiated,
          e
        )
      : !1;
  },
  assertFrameLoaded: function () {
    !document.getElementById(LL_Storage_Manager.dataServerID) &&
      LL_Storage_Manager.asyncReady &&
      ((LL_Storage_Manager.asyncReady = !1), LL_Storage_Manager.init(!0));
  },
  Provider: function (e) {
    if (LL_Storage_Manager.asyncSupported) {
      var a = "getProvider" + LL_Storage_Manager.getCurrentTime(),
        r = "getProvider(" + a + ")";
      LL_Storage_Manager.asyncSendCommand(r, a, e);
    } else
      setTimeout(function () {
        e.apply(this, ["LL_Storage_Manager.asyncSupported is not"]);
      }, 111);
  },
};
LL_Storage_Manager.init(!0);
var LL_Cobrowse_Manager = {
  Events: {
    ChatCobrowseInitiated: {
      name: "ChatCobrowseInitiated",
      addEventCommand: "addChatSessionListener",
      removeEventCommand: "removeChatSessionListener",
      invalidateCommand: "invalidateChatSession",
      dispatchEventCommand: "newSession",
      dispatch: function (e, n) {
        return LL_Cobrowse_Manager.dispatchEvent(
          LL_Cobrowse_Manager.Events.ChatCobrowseInitiated,
          e,
          n
        );
      },
      listen: function (e, n) {
        return LL_Cobrowse_Manager.addEventListener(
          LL_Cobrowse_Manager.Events.ChatCobrowseInitiated,
          e,
          n
        );
      },
      invalidate: function (e, n) {
        return LL_Cobrowse_Manager.invalidateEvent(
          LL_Cobrowse_Manager.Events.ChatCobrowseInitiated,
          e,
          n
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
        var n = window.ll_siteCodeLite ? ll_siteCodeLite : "";
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
        var n = Math.floor(100001 * Math.random());
        return LL_Cobrowse_Manager.dispatchEvent(
          LL_Cobrowse_Manager.Events.ContextReady,
          e,
          n
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
  },
  Actions: {
    SessionStart: function () {
      return window.LL_ICB_Core && LL_ICB_Core.StartSession
        ? window.communicationHandler && communicationHandler.presentationToken
          ? !1
          : LL_ICB_Core.presentationToken
          ? !1
          : window.LL_BR_Core &&
            !LL_BR_Core.ICBSupported &&
            "none" == LL_BR_Core.ACBSupported
          ? !1
          : window.LL_CustomUI && LL_CustomUI.V4Panel
          ? (LL_CustomUI.V4Panel.expand(), !0)
          : !1
        : !1;
    },
    SessionDisconnect: function () {
      try {
        if (window.LL_ICB_Core)
          return window.communicationHandler &&
            communicationHandler.presentationToken
            ? (LL_ICB_Core.doDisconnect(!0), !0)
            : LL_ICB_Core.presentationToken
            ? (LL_ICB_Core.doDisconnect(!0, !0), !0)
            : !1;
      } catch (e) {
        return !1;
      }
    },
  },
  getState: function () {
    var e = { Active: !1, LastKnownMode: null };
    if (window.LL_ICB_Core)
      if (LL_ICB_Core.startRequestUrl) {
        //launcher mode
        var n = LL_ICB_Core.presentationToken,
          a =
            !!n &&
            (0 != LL_ICB_Core.EventGettingInterval ||
              LL_ICB_Core.engineStarted);
        (e.Active = a),
          a &&
            ("ICB" === LL_ICB_Core.CobrowseMode
              ? (e.LastKnownMode =
                  "undefined" != typeof LL_ICB_Core.LastKnownMode
                    ? LL_ICB_Core.LastKnownMode
                    : "ICB")
              : (e.LastKnownMode = "ACB"));
      } else if (window.communicationHandler && window.pageManipulation) {
        //engine mode
        var n = communicationHandler.presentationToken,
          a =
            !!n &&
            !pageManipulation.isSessionStoped &&
            0 != pageManipulation.EventGettingInterval;
        (e.Active = a),
          a &&
            (e.LastKnownMode =
              "undefined" != typeof LL_ICB_Core.LastKnownMode
                ? LL_ICB_Core.LastKnownMode
                : "ICB");
      }
    return e;
  },
  addEventListener: function (e, n, a) {
    if (!window.LL_Storage_Manager || !LL_Storage_Manager.asyncSupported)
      //throw "Async must be supported";
      return !1;
    var t = e.addEventCommand;
    if (!t) return !1;
    //don't add the event to the event handler collection if event with such handler already exists in the collection
    var o = !0,
      r = t + "_" + LL_Storage_Manager.getCurrentTime();
    for (var i in LL_Storage_Manager.handlers)
      LL_Storage_Manager.handlers.hasOwnProperty(i) &&
        LL_Storage_Manager.handlers["_" + i] === a &&
        //update handler
        ((r = i), (o = !1));
    var s = t + "(" + n + "," + r + ")";
    return (
      (LL_Storage_Manager.handlers[r] = function (e) {
        !(function (n, a) {
          try {
            var t = !1,
              o = {
                presentationToken: null,
                presentationCode: null,
                SID: null,
              };
            try {
              window.LL_ICB_Core &&
                ((o.presentationToken = LL_ICB_Core.presentationToken),
                (o.presentationCode = LL_ICB_Core.presentationCode),
                (o.SID = LL_ICB_Core.SID)),
                window.LL_Session &&
                  (o.presentationToken ||
                    (o.presentationToken = LL_Session.presentationToken),
                  o.presentationCode ||
                    (o.presentationCode = LL_Session.presentationCode),
                  o.SID || (o.SID = LL_Session.SID)),
                !o.presentationCode &&
                  window.LL_Storage_Manager &&
                  window.ll_siteCodeLite &&
                  ((t = !0),
                  LL_Storage_Manager.getItemsAsync(
                    ll_siteCodeLite,
                    "pc,SID,pc_token",
                    function (t) {
                      var o = {};
                      (o.presentationToken = t.pc_token),
                        (o.presentationCode = t.pc),
                        (o.SID = t.SID),
                        n &&
                          (n.apply(this, [e, o]),
                          (LL_Storage_Manager.handlers[a] = null),
                          delete LL_Storage_Manager.handlers[a],
                          (LL_Storage_Manager.handlers["_" + a] = null),
                          delete LL_Storage_Manager.handlers["_" + a]);
                    }
                  ));
            } catch (r) {}
            n &&
              !t &&
              (n.apply(this, [e, o]),
              (LL_Storage_Manager.handlers[a] = null),
              delete LL_Storage_Manager.handlers[a],
              (LL_Storage_Manager.handlers["_" + a] = null),
              delete LL_Storage_Manager.handlers["_" + a]);
          } catch (i) {}
        })(a, r);
      }),
      (LL_Storage_Manager.handlers["_" + r] = a),
      LL_Storage_Manager.asyncSendCommand(s),
      !0
    );
  },
  removeEventListener: function (e, n, a) {
    if (!window.LL_Storage_Manager || !LL_Storage_Manager.asyncSupported)
      //throw "Async must be supported";
      return !1;
    for (var t in LL_Storage_Manager.handlers)
      if (
        LL_Storage_Manager.handlers.hasOwnProperty(t) &&
        LL_Storage_Manager.handlers["_" + t] === a
      ) {
        var o = e.removeEventCommand;
        if (!o) return !1;
        var r = o + "(" + n + "," + t + ")";
        LL_Storage_Manager.asyncSendCommand(r);
      }
    return !0;
  },
  dispatchEvent: function (e, n, a) {
    if (!window.LL_Storage_Manager || !LL_Storage_Manager.asyncSupported)
      //throw "Async must be supported";
      return !1;
    var t = e.dispatchEventCommand;
    if (!t) return !1;
    var o = null,
      r = t + "(" + n + "," + a + ",)";
    if (
      (LL_Storage_Manager.asyncSendCommand(r, o),
      e.eventsToInvalidate && e.eventsToInvalidate.length > 0)
    )
      for (var i = 0; i < e.eventsToInvalidate.length; i++) {
        var s = e.eventsToInvalidate[i];
        s.invalidate(n, a);
      }
    return !0;
  },
  invalidateEvent: function (e, n, a) {
    if (!window.LL_Storage_Manager || !LL_Storage_Manager.asyncSupported)
      //throw "Async must be supported";
      return !1;
    var t = e.invalidateCommand;
    if (!t) return !1;
    var o = null,
      r = t + "(" + n + "," + a + ",)";
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
  );
var urlPattern = {
  protocol: "",
  query: "",
  domain: "",
  path: "",
  ref: "",
  params: [],
  setupPattern: function (t) {
    (urlPattern.protocol = ""),
      (urlPattern.query = ""),
      (urlPattern.domain = ""),
      (urlPattern.path = ""),
      (urlPattern.ref = ""),
      (urlPattern.params = []),
      "function" != typeof String.prototype.LL_startsWith &&
        (String.prototype.LL_startsWith = function (t) {
          return 0 == t.length ? !0 : 0 == this.indexOf(t);
        }),
      "function" != typeof String.prototype.LL_endsWith &&
        (String.prototype.LL_endsWith = function (t) {
          if (0 == t.length) return !0;
          if (this.length < t.length) return !1;
          var r = this.substr(this.length - t.length);
          //return (result == -1) ? false : (this.indexOf(str) == this.length - str.length);
          return r == t;
        }),
      (t = t.toLowerCase());
    var r = t.indexOf("://");
    (urlPattern.protocol = t.substring(0, r)),
      (t = /*"http" +*/ t.substring(r + 3));
    var n = t.indexOf("?"),
      e = t.indexOf("/"),
      u = t.indexOf("#");
    0 > n && 0 > e && 0 > u
      ? (urlPattern.domain = t)
      : 0 > n && 0 > u
      ? ((urlPattern.domain = t.substring(0, e)),
        (urlPattern.path = t.substring(e + 1)))
      : 0 > e && 0 > u
      ? ((urlPattern.domain = t.substring(0, n)),
        (urlPattern.query = t.substring(n + 1)))
      : 0 > n &&
        0 > e &&
        ((urlPattern.domain = t.substring(0, u)),
        (urlPattern.ref = t.substring(u + 1))),
      n > 0 && e > 0 && u > 0
        ? ((urlPattern.domain = t.substring(0, e)),
          (urlPattern.path = t.substring(e + 1, n)),
          (urlPattern.query = t.substring(n + 1, u)),
          (urlPattern.ref = t.substring(u + 1)))
        : n > 0 && u > 0
        ? ((urlPattern.domain = t.substring(0, n)),
          (urlPattern.query = t.substring(n + 1, u)),
          (urlPattern.ref = t.substring(u + 1)))
        : e > 0 && u > 0
        ? ((urlPattern.domain = t.substring(0, e)),
          (urlPattern.path = t.substring(e + 1, u)),
          (urlPattern.ref = t.substring(u + 1)))
        : n > 0 &&
          e > 0 &&
          ((urlPattern.domain = t.substring(0, e)),
          (urlPattern.path = t.substring(e + 1, n)),
          (urlPattern.query = t.substring(n + 1))),
      urlPattern.path.length > 0 &&
        urlPattern.path.LL_startsWith("/") &&
        (urlPattern.path = urlPattern.path.subStr(1)),
      // Get url params
      urlPattern.query.length > 0 &&
        (urlPattern.query.indexOf("&") >= 0
          ? (urlPattern.params = urlPattern.query.split("&"))
          : (urlPattern.params = new Array(urlPattern.query)));
  },
  match: function (t, r) {
    // Start match veryfication
    if (
      // Set up the pattern
      (urlPattern.setupPattern(t), !r)
    )
      return !1;
    r = r.toLowerCase();
    var n = r.indexOf("://");
    (-1 == n || n > 6) && (r = "http://" + r), (n = r.indexOf("://"));
    var e = r.substring(0, n);
    r = /*"http" + */ r.substring(n + 3);
    var u = r.indexOf("?"),
      s = r.indexOf("/"),
      a = r.indexOf("#"),
      i = "",
      l = "",
      g = "",
      h = "";
    if (
      (0 > u && 0 > s && 0 > a
        ? (i = r)
        : 0 > u && 0 > a
        ? ((i = r.substring(0, s)), (l = r.substring(s + 1)))
        : 0 > s && 0 > a
        ? ((i = r.substring(0, u)), (g = r.substring(u + 1)))
        : 0 > u && 0 > s && ((i = r.substring(0, a)), (h = r.substring(a + 1))),
      u > 0 && s > 0 && a > 0
        ? ((i = r.substring(0, s)),
          (l = r.substring(s + 1, u)),
          (g = r.substring(u + 1, a)),
          (h = r.substring(a + 1)))
        : u > 0 && a > 0
        ? ((i = r.substring(0, u)),
          (g = r.substring(u + 1, a)),
          (h = r.substring(a + 1)))
        : s > 0 && a > 0
        ? ((i = r.substring(0, s)),
          (l = r.substring(s + 1, a)),
          (h = r.substring(a + 1)))
        : u > 0 &&
          s > 0 &&
          ((i = r.substring(0, s)),
          (l = r.substring(s + 1, u)),
          (g = r.substring(u + 1))),
      urlPattern.query &&
        0 != urlPattern.query.length &&
        "*" != urlPattern.query &&
        "+" != urlPattern.query)
    ) {
      if (urlPattern.query) {
        var P;
        if (((P = g.indexOf("&") >= 0 ? g.split("&") : new Array(g)), !P))
          return !1;
        for (var o = "", d = {}, b = 0; b < P.length; b++) {
          var f = P[b].split("=");
          d[f[0]] = f[1];
        }
        for (var b = 0; b < urlPattern.params.length; b++) {
          o = urlPattern.params[b].split("=")[0];
          var p = urlPattern.params[b].split("=")[1];
          if (!urlPattern.arrayContainsKey(d, o)) return !1;
          if (!urlPattern.equalsWithWildcard(p, d[o])) return !1;
        }
      }
    } else if (!urlPattern.equalsWithWildcard(urlPattern.query, g)) return !1;
    l && l.LL_startsWith("/") && (l = l.substring(1)),
      // The domain must not contain the port
      i.indexOf(":") >= 0 && (i = i.split(":")[0]);
    var W =
      urlPattern.equalsWithWildcard(urlPattern.protocol, e) &&
      urlPattern.equalsHostWithWildcard(urlPattern.domain, i) &&
      urlPattern.equalsWithWildcard(urlPattern.path, l) &&
      urlPattern.equalsWithWildcard(urlPattern.ref, h);
    return W;
  },
  equalsHostWithWildcard: function (t, r) {
    var n = urlPattern.equalsWithWildcard(t, r);
    return (
      !n &&
        t.LL_startsWith("*.") &&
        (n = urlPattern.equalsWithWildcard(t, "." + r)),
      n
    );
  },
  equalsWithWildcard: function (t, r) {
    if (!((t && 0 != t.length) || (r && 0 != r.length))) return !0;
    if ((!r || 0 == r.length) && "*" == t) return !0;
    if (!r || 0 == r.length || !t || 0 == t.length) return !1;
    if (t.LL_startsWith("*")) return r.LL_endsWith(t.substring(1));
    if (t.LL_endsWith("*")) {
      var n = r.LL_startsWith(t.substring(0, t.length - 1));
      return n;
    }
    return t.LL_startsWith("+")
      ? r.LL_endsWith(t.substring(1)) && r.length > t.length - 1
      : t.LL_endsWith("+")
      ? r.LL_startsWith(t.substring(0, t.length - 1)) && r.length > t.length + 1
      : t == r;
  },
  arrayContainsKey: function (t, r) {
    //for(var i=0; i<urlParams.length; i++) {
    for (var n in t) if (n == r) return !0;
    return !1;
  },
};
LL_Deployment.allowICB = true;
LL_Deployment.allowACB = false;
LL_Deployment.restrictionGroup = "NONE";
LL_Deployment.mainServerPath =
  "7b91f3b469e9cec0812d-4411771c4b94f83e4996870fc45fcf78.ssl.cf2.rackcdn.com/llscripts/";
LL_Deployment.icbType = "SCRIPT";
LL_Deployment.Mac_ACB_OS_Versions = "10.9+";
LL_Deployment.stealthUrls = [];
LL_Deployment.acbUrls = [];
LL_Deployment.buttonVisibility = false;
LL_Deployment.buttonExpand = false;
LL_Deployment.StartSessionNetworkWaitTime = 60000;

LL_Deployment.hostEngineURL =
  "https://8f544770ae5b7cfb8345-6636004133269479b2733e2a336860f6.ssl.cf2.rackcdn.com/engine.js";

// llicb object was removed, all its properties and methods moved to LL_Deployment
LL_Deployment.coBrowseLiteUrl =
  "https://7b91f3b469e9cec0812d-4411771c4b94f83e4996870fc45fcf78.ssl.cf2.rackcdn.com/llscripts//webinterfaces/icb/client/js/ll_starticb.js?version=20160115";
LL_Deployment.failCounter = 0;
LL_Deployment.loadScript = function (url, callback) {
  try {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    if (callback) {
      script.onreadystatechange = callback;
      script.onload = callback;
    }
    head.appendChild(script);
  } catch (e) {
    if (LL_Deployment.failCounter++ < 2) {
      setTimeout(function () {
        LL_Deployment.loadScript(url);
      }, 3000);
    }
  }
};
LL_Deployment.setDefaultParameters = function () {
  ll_coBrowseLiteAgentUrl =
    "//www.livelook.com/welcome/icb/ll_icb.html?version=20160115";
  ll_buttonVisibility = LL_Deployment.buttonVisibility;
  LL_Deployment.checkPageSpecificRules(0);
  if (LL_Deployment.allowICB) LL_Deployment.checkPageSpecificRules(1);
};
LL_Deployment.checkPageSpecificRules = function (mode) {
  if (mode == 0) {
    try {
      //check stealth URLS
      for (var i = 0; i < LL_Deployment.stealthUrls.length; i++) {
        if (
          urlPattern.match(LL_Deployment.stealthUrls[i], self.location.href)
        ) {
          LL_Deployment.buttonVisibility = false;
          break;
        }
      }
    } catch (e) {}
  } else if (mode == 1) {
    //check forceACB URLS
    try {
      for (var i = 0; i < LL_Deployment.acbUrls.length; i++) {
        if (urlPattern.match(LL_Deployment.acbUrls[i], self.location.href)) {
          LL_Deployment.allowICB = false;
          break;
        }
      }
    } catch (e) {}
  }
};

var LL_Debug = {
  debugLevel: parseInt(
    window.LL_Deployment && LL_Deployment.debugLevel
      ? LL_Deployment.debugLevel
      : "0"
  ),
  filter: !1,
  set: function (e, n, L) {},
  setItems: function (e, n) {},
  filterEvent: function (e) {
    switch (e) {
      case "error":
        LL_Debug.debugLevel > 0 && (LL_Debug.filter = !0);
        break;
      case "log":
        LL_Debug.debugLevel > 1 && (LL_Debug.filter = !0);
        break;
      case "info":
        LL_Debug.debugLevel > 10 && (LL_Debug.filter = !0);
    }
  },
  event: function (e, n, L, t) {
    n &&
      (LL_Debug.filterEvent(e),
      LL_Debug.filter &&
        ("undefined" == typeof t && (t = "{}"),
        LL_Debug.sendCommand(n, e, L, t)),
      (LL_Debug.filter = !1));
  },
  error: function (e, n, L) {},
  log: function (e, n) {},
  info: function (e, n) {},
  newContext: function (e) {},
  sendCommand: function (e, n, L, t) {
    if (e && window.LL_Storage_Manager && LL_Storage_Manager.asyncSupported) {
      var o =
        "logData(" + LL_Storage_Manager.prepareCommandArgs(e, n, L, t) + ")";
      LL_Storage_Manager.asyncSendCommand(o);
    }
  },
};

try {
  LL_customFunctions = null;
} catch (ex) {}

LL_CustomUI = {
  activateText:
    "CoBrowse lets us view your screen and move a pointer to show you where to click. By clicking OK, you are granting BBVA Compass Customer Service permission to CoBrowse with you. You also agree that your screen may be recorded during the CoBrowse session for quality assurance purposes. You may end the session at any time by clicking the âDisconnectâ button.",
  activateWindowOK: "OK",
  partialSupportedText:
    "Your browser does not support CoBrowse. Your customer service representative will be happy to assist you over the phone",
  partialSupported_font_family: "Helvetica",
  partialSupported_font_size: "16",
  partialSupported_background_color: "e5e9e9",
  partialSupported_width: "280",
  partialSupported_height: "177",
  partialSupported_text_color: "094fa4",
  syncIsLostText:
    "The customer closed the session, or navigated to a page which does not support CoBrowse.Verify with the customer whether he/she wishes to continue the session.",
  syncIsLostText_font_family: "Helvetica",
  syncIsLostText_font_size: "16",
  syncIsLostText_background_color: "e5e9e9",
  syncIsLostText_width: "280",
  syncIsLostText_height: "177",
  syncIsLostText_color: "094fa4",
  takingOutsideText:
    "Clicking this link will take you outside of the CoBrowse session and your customer service representative will no longer be able to see your screen.",
  clickHereText: "",
  V4LLPanel_redirect_popup_font_family: "Helvetica",
  V4LLPanel_redirect_popup_width: "280",
  V4LLPanel_redirect_popup_height: "120",
  V4LLPanel_redirect_popup_background: "e5e9e9",
  V4LLPanel_redirect_popup_text_color: "094fa4",
  V4LLPanel_redirect_popup_text_font_size: "16",
  greeting:
    "<p><strong>Need Help?</strong></p><p>You're just a few steps away from enjoying a new experience that lets our experts browse the site with you to better assist and guide you.</p>",
  altGreeting: "&nbsp;",
  startButton: "Start",
  privacyHeader: "Your privacy is important to us",
  privacyText:
    'Co-browse is a secure service governed by our <a target="_blank" href="">Privacy Policy.</a>',
  leaveFeedback: "Please leave feedback",
  getInstantHelp: "Get Instant Help!",
  v3PleaseWait: "Please wait...",
  v3ToolTip: "",
  v3toProceedClickButton: "<center>To proceed click the button below.</center>",
  v3PassCodeGenerated: "Passcode generated.",
  v3SessionIsOver: "Session ended",
  v3ServersBusy:
    "<span style='text-size:12px;font-weight:bold'>All servers are busy.</span>",
  v3TryLater:
    "<span style='text-size:12px;font-weight:normal;text-align:left;'>Service is temporary unavailable. Please try again later. Thank you for your patience.</span>",
  v3SessionTimedOut: "Your session timed out.",
  v3CloseWindowNotice: "You can now close this window.",
  v3CodeInstructions:
    "After you provide the code to company Expert click the button below.",
  v3ReturnToWebsiteButton: "Return to Website",
  v3ProceedButton: "Activate session",
  v3InstantHelp: "Instant Help",
  v3AgentsOffline:
    "Agents are not available to assist at this time. Please call during the office hours listed below.",
  v3Unavailable:
    "We apologize for the inconvenience, but this service is unavailable at the moment.",
  v3ClientProgressBar_hint_0: "Establishing secure connection...",
  v3ClientProgressBar_hint_1: "Do not close this window.",
  v3ClientProgressBar_hint_2:
    "Do not close this window. It will minimize automatically.",
  v3ClientProgressBar_hint_3: "Expert connected",
  v3ClientProgressBar_hint_4:
    "Please minimize this window but do not close it.",
  v3SessionCouldNotBeStarted: "Session could not be started.",
  v3SessionCouldNotBeActivated: "Session could not be activated.",
  v3SessionEndedOldJava:
    "<span style='font-size:18px;line-height:24px;font-weight:normal;'>This session is unable to connect. Co-browsing requires an up-to-date Java environment. Please consider updating your Java to <a href='https://www.java.com/' target='_blank'>the most recent version</a> in order to co-browse.</span>",
  v3CallExpert: "",
  v3ProvidePassCode: "",
  v3GeneratingPassCode: "Generating passcode",
  v3ClickRun: "Click <b>Run</b> or <b>Yes</b> if prompted.",
  v3AgentConnecting:
    "<b>Agent is connecting... please do not close this window.</b>",
  v3EstablishingConnection:
    "<b>Establishing secure connection.</b><br /> Please do not close this window.",
  v3CertAccepted:
    "Agent will see your page momentarily... please do not close this window. <br /><br />This window will automatically minimize when the agent is connected.",
  v3MinimizeNow: "Minimize now",
  v3CertRejected_1:
    "Important!\\n\\nPlease accept the Java certificate.\\n\\nIt verifies the identity of the service provider, and gives others permission to view your screen.\\n\\nNo software will be installed onto your computer.",
  v3CertRejected_2:
    "Since you rejected Java Certificates, Visual Sharing is now disabled.\\n\\nTo enable it please close all browser windows and start over.",
  V3FirefoxPluginIcon_text_part1: "If you see a",
  V3FirefoxPluginIcon_text_part2:
    "&nbsp;icon, click it to activate the Java plugin",
  v3ChromeTip:
    'If you see <strong>"Run this time"</strong> or <strong>"Always run on this site"</strong> button above, click it.',
  V3Activating_text: "Activating...",
  v3Chrome37TooltipTextFirstPart:
    'If you see <strong>"Plug-in blocked"</strong> ',
  v3Chrome37TooltipTextSecondPart:
    'icon, click it, select <strong>"Always allow"</strong> and press <strong>"Done"</strong>',
  CDelay_text:
    'To activate advanced Co Browsing, please accept the <em>security certificate</em> by clicking <span>"Run"</span>.',
  CDelay_redisplay_certificate: "Redisplay security certificate",
  CDelay_terminate_1: "To terminate this session&nbsp;",
  CDelay_terminate_2: "click here",
  reactive_headerBranding: "Browse the website with an Expert",
  reactive_buttonLabel: "Initiate",
  reactive_pageTitle: "Get Instant Help!",
  ht_waitingAgent: "Waiting for agent to connect",
  ht_agentCanSeeScreen: "Agent can now see your screen",
  ht_endSessionMessage: "Are you sure you want to end this session?",
  activateText_font_family: "Helvetica",
  activateText_font_size: "17",
  activateText_color: "094fa4",
  activateACBButton_width: "155",
  activateACBButton_font_family: "Helvetica",
  activateACBButton_font_size: "20",
  activateACBButton_color: "FFFFFF",
  activateACBButton_text_hover: "ffffff",
  V4LLPanel_CollapsedNarrowNoAgent_width: "157",
  V4LLPanel_CollapsedNarrowNoAgent_height: "36",
  V4LLPanel_CollapsedNarrowNoAgent_right: "16",
  V4LLPanel_CollapsedNarrowNoAgent_bottom: "0",
  ADA_compliance: "true",
  V4LLPanel_CollapsedNumContNarrow_font_family: "Helvetica",
  V4LLPanel_CollapsedNumContNarrow_font_size: "17",
  V4LLPanel_CollapsedNumContNarrow_color: "ffffff",
  V4LLPanel_HintBlock_width: "157",
  V4LLPanel_HintBlock_height: "78",
  V4LLPanel_HintBlock_right: "16",
  V4LLPanel_HintBlock_FirstLineText: "Browse together",
  V4LLPanel_HintBlock_FirstLineText_font_family: "Trebuchet MS",
  V4LLPanel_HintBlock_FirstLineText_font_size: "14",
  V4LLPanel_HintBlock_FirstLineText_font_weight: "bold",
  V4LLPanel_HintBlock_FirstLineText_font_style: "normal",
  V4LLPanel_HintBlock_FirstLineText_color: "343434",
  V4LLPanel_HintBlock_SecondLineText: "with our experts online",
  V4LLPanel_HintBlock_SecondLineText_font_family: "Trebuchet MS",
  V4LLPanel_HintBlock_SecondLineText_font_size: "10",
  V4LLPanel_HintBlock_SecondLineText_font_weight: "normal",
  V4LLPanel_HintBlock_SecondLineText_font_style: "normal",
  V4LLPanel_HintBlock_SecondLineText_color: "343434",
  V4LLPanel_InnerTitle_font_family: "Helvetica",
  V4LLPanel_InnerTitle_font_size: "18",
  V4LLPanel_InnerTitle_color: "ffffff",
  V4LLPanel_width: "284",
  V4LLPanel_PanelClose_right: "6",
  V4LLPanel_TogglerText_font_family: "Tahoma",
  V4LLPanel_TogglerText_font_size: "14",
  V4LLPanel_TogglerText_color: "ffffff",
  V4LLPanel_passToBeginText_color: "094fa4",
  V4LLPanel_passToBeginText_font_size: "16",
  V4LLPanel_PhoneNumber_font_family: "Helvetica",
  V4LLPanel_PhoneNumber_digits_font_family: "Arial",
  V4LLPanel_phoneNum_font_size: "14",
  V4LLPanel_provideCodeMessage_color: "094fa4",
  V4LLPanel_provideCodeMessage_font_size: "13",
  V4LLPanel_provideCodeMessage_font_family: "Helvetica",
  V4LLPanel_NumberBox_background_color: "FFFFFF",
  V4LLPanel_NumberBox_color: "c8175e",
  V4LLPanel_NumberBox_font_size: "21",
  V4LLPanel_NumberBox_font_family: "Helvetica",
  V4LLPanel_TermsAndConditions_font_size: "11",
  V4LLPanel_TermsAndConditions_color: "094fa4",
  V4LLPanel_TermsAndConditions_font_family: "Helvetica",
  V4LLPanel_PoweredBy_color: "3f3f3f",
  V4LLPanel_PoweredBy_font_family: "Helvetica",
  V4LLPanel_PoweredBy_font_size: "9",
  V4LLPanel_notconnected_header_text: "CoBrowse",
  V4LLPanel_notconnected_provideNumber_text:
    "Please provide your CoBrowse ID number ",
  V4LLPanel_notconnected_callUsAt_text: "BBVA Compass CoBrowse",
  V4LLPanel_notconnected_phoneNumber: "",
  V4LLPanel_notconnected_poweredBy_text: "Powered by Oracle Co-Browsing",
  V4LLPanel_notconnected_termsAndConditions_text: "Privacy Policy",
  V4LLPanel_position: "bottom_right",
  V4LLPanel_position_offset: "16",
  V4LLPanel_header_height: "39",
  V4LLPanel_header_logo_right_gap: "7",
  V4LLPanel_header_text: "CoBrowse",
  V4LLPanel_header_text_color: "ffffff",
  V4LLPanel_header_text_font_family: "Helvetica",
  V4LLPanel_header_text_font_size: "18",
  V4LLPanel_header_text_font_weight: "normal",
  V4LLPanel_header_text_font_style: "normal",
  V4LLPanel_header_number_color: "ffffff",
  V4LLPanel_header_number_font_family: "Helvetica",
  V4LLPanel_header_number_font_size: "16",
  V4LLPanel_Connected_content_height: "74",
  V4LLPanel_Connected_content_text: "Connected",
  V4LLPanel_Connected_content_text_color: "094fa4",
  V4LLPanel_Connected_content_text_font_family: "Helvetica",
  V4LLPanel_Connected_content_text_font_size: "18",
  V4LLPanel_Connected_content_text_font_weight: "bold",
  V4LLPanel_Connected_content_text_font_style: "normal",
  V4LLPanel_Connected_disconnect_height: "57",
  V4LLPanel_Connected_disconnect_button_text: "Disconnect",
  V4LLPanel_Connected_disconnect_button_text_color: "ffffff",
  V4LLPanel_Connected_disconnect_button_text_hover_color: "ffffff",
  V4LLPanel_Connected_disconnect_button_text_font_family: "Helvetica",
  V4LLPanel_Connected_disconnect_button_text_font_size: "14",
  V4LLPanel_Connected_disconnect_button_text_font_weight: "normal",
  V4LLPanel_Connected_disconnect_button_text_font_style: "normal",
  V4LLPanel_Connected_footer_height: "32",
  V4LLPanel_Connected_footer_text: "Powered by Oracle CoBrowsing",
  V4LLPanel_Connected_footer_text_color: "3f3f3f",
  V4LLPanel_Connected_footer_text_font_family: "Helvetica",
  V4LLPanel_Connected_footer_text_font_size: "9",
  V4LLPanel_Connected_footer_text_font_weight: "normal",
  V4LLPanel_Connected_footer_text_font_style: "normal",
  V4LLPanel_Connected_collapsed_height: "33",
  V4LLPanel_notSupported_width: "285",
  V4LLPanel_notSupported_height: "47",
  V4LLPanel_notSupported_right: "16",
  V4LLPanel_notSupported_header_text: "CoBrowse",
  V4LLPanel_Title_notSupported_font_family: "Helvetica",
  V4LLPanel_Title_notSupported_font_size: "18",
  V4LLPanel_Title_notSupported_color: "ffffff",
  V4LLPanel_HintBlock_notSupported_width: "157",
  V4LLPanel_HintBlock_notSupported_height: "78",
  V4LLPanel_HintBlock_notSupported_right: "16",
  V4LLPanel_GenericToggler_notSupported_width: "157",
  V4LLPanel_notSupported_text:
    "Your browser does not support CoBrowse. Your customer service representative will be happy to assist you over the phone.",
  V4LLPanel_notSupportedEnvText_notSupported_font_family: "Helvetica",
  V4LLPanel_notSupportedEnvText_notSupported_font_size: "15",
  V4LLPanel_notSupportedEnvText_notSupported_color: "094fa4",
  V4LLPanel_notSupported_moreInfoText: "",
  V4LLPanel_moreInfoLink_notSupported_font_family: "Trebuchet MS",
  V4LLPanel_moreInfoLink_notSupported_font_size: "10",
  V4LLPanel_moreInfoLink_notSupported_color: "68769d",
  V4LLPanel_termsAndConditionsWindow_font_family: "Helvetica",
  V4LLPanel_termsAndConditionsWindow_color: "094fa4",
  V4LLPanel_termsAndConditionsWindow_font_size: "12",
  V4LLPanel_termsAndConditionsWindow_startSessionButton_color: "fefefe",
  V4LLPanel_termsAndConditionsWindow_startSessionButton_font_size: "12",
  V4LLPanel_termsAndConditionsWindow_startSessionButton_font_family: "Verdana",
  V4LLPanel_termsAndConditionsWindow_startSessionButton_text: "OK",
  V4LLPanel_TermsAndConditionsWindowHeadline_font_family: "Helvetica",
  V4LLPanel_TermsAndConditionsWindowHeadline_color: "ffffff",
  V4LLPanel_TermsAndConditionsWindowHeadline_font_size: "14",
  V4LLPanel_TermsAndConditionsWindowScrollBar_TrackBG_color: "094fa4",
  V4LLPanel_TermsAndConditionsWindowScrollBar_DragBG_color: "6f6f6f",
  V4LLPanel_TermsAndConditionsWindowHeadline: "",
  V4LLPanel_TermsAndConditionsWindowText:
    "CoBrowse lets us view your screen and move a pointer to show you where to click. By clicking OK, you are granting BBVA Compass Customer Service permission to CoBrowse with you. You also agree that your screen may be recorded during the CoBrowse session for quality assurance purposes. You may end the session at any time by clicking the âDisconnectâ button.",
  V4LLPanel_WaitingWindowBackgroundColor: "2f2f2f",
  V4LLPanel_WaitingWindowHeadlineText: "Co-Browse",
  V4LLPanel_WaitingWindowHeadlineTextFontFamily: "Tahoma",
  V4LLPanel_WaitingWindowHeadlineTextFontSize: "12",
  V4LLPanel_WaitingWindowHeadlineTextFontColor: "ffffff",
  V4LLPanel_WaitingWindowBodyTextFontFamily: "Trebuchet MS",
  V4LLPanel_WaitingWindowBodyTextFontColor: "e9e9e9",
  V4LLPanel_WaitingWindowBodyTextFontSize: "14",
  V4LLPanel_WaitingWindowBodyText: "Client is navigating to a new page",
  V4LLPanel_DisconnectConfirmWindow_background_color: "e5e9e9",
  V4LLPanel_DisconnectConfirmWindow_border_color: "aeaeae",
  V4LLPanel_DisconnectConfirmWindow_text_font_size: "15",
  V4LLPanel_DisconnectConfirmWindow_text_color: "094fa4",
  V4LLPanel_DisconnectConfirmWindow_text_font_weight: "normal",
  V4LLPanel_DisconnectConfirmWindow_text_font_style: "normal",
  V4LLPanel_DisconnectConfirmWindow_text_font_family: "Helvetica",
  V4LLPanel_DisconnectConfirmWindow_text:
    "Are you sure you want to terminate this session?",
  V4LLPanel_DisconnectConfirmWindow_text_no: "No",
  V4LLPanel_DisconnectConfirmWindow_text_yes: "Yes",
  V4LLPanel_CloseConfirmButton_text_color: "ffffff",
  V4LLPanel_CloseConfirmButton_hover_text_color: "ffffff",
  V4LLPanel_CloseConfirmButton_text_font_family: "Helvetica",
  V4LLPanel_CloseConfirmButton_text_font_size: "15",
  V4LLPanel_CloseConfirmButton_text_font_weight: "normal",
  V4LLPanel_CloseConfirmButton_text_font_style: "normal",
  V4LLPanel_CloseConfirmButton_text:
    "Are you sure you want to terminate this session?",
  V4LLPanel_CloseConfirmButton_text_no: "No",
  V4LLPanel_CloseConfirmButton_text_yes: "Yes",
  closeSessionEndWindowLink_text: "",
  ADA_V4LLPanel_PanelClose: "Collapse Browse with Specialist widget",
  ADA_V4LLPanel_CollapsedNumContNarrow: "Expand Browse with Specialist widget",
  ADA_V4LLPanel_PanelMinimize: "Collapse Browse with Specialist widget",
  ADA_V4LLPanel_PanelClose_disconnect:
    "Disconnect session for browse with specialist",
  ADA_V4LLPanel_CloseDeclineButton: "Decline session end",
  ADA_V4LLPanel_CloseConfirmButton: "Confirm session end",
  ADA_V4LLPanel_DisconnectConfirmWindow_infoEnd: "End of informational layer",
  ADA_V4LLPanel_DisconnectTrigger:
    "Disconnect session for browse with specialist",
  ADA_V4LLPanel_notconnected_poweredBy_modalEnd: "End of Modal Layer",
  ADA_V4LLPanel_CollapsedNumContNarrow_connected: "Expert connected",
  ADA_V4LLPanel_PanelClose_close: "Close",
  ADA_V4LLPanel_CloseDeclineButtonTC: "Decline session end",
  ADA_V4LLPanel_CloseConfirmButtonTC: "Confirm session end",
  ADA_V4LLPanel_modalEnd: "End of modal dialog",
  ADA_V4LLPanel_closeSessionEndWindowLink: "Close Session Ended dialog",
  LL_sessionEnded_popup_font_family: "Trebuchet MS",
  LL_sessionEnded_popup_font_size: "12",
  LL_sessionEnded_title_font_family: "Helvetica",
  LL_sessionEnded_title_font_size: "24",
  LL_sessionEnded_description_font_family: "Helvetica",
  LL_sessionEnded_description_font_size: "16",
  LL_sessionEnded_Close_Modal_Window_button_font_family: "Helvetica",
  LL_sessionEnded_Close_Modal_Window_button_font_size: "14",
  LL_sessionEnded_feedback_font_family: "Trebuchet MS",
  LL_sessionEnded_feedback_font_size: "14",
  LL_sessionEnded_window_title: "Session ended.",
  LL_sessionEnded_window_text: "You can now close this window",
  LL_sessionEnded_window_leave_feedback_text: "",
  TrueView_Button: "True View",
  TrueView_InfoTitle: "True View Mode",
  TrueView_InfoDes: "Adapt your view to actual client screen size",
  TrueView_State_on: "ON",
  TrueView_State_off: "OFF",
  v4_activated_text: "Activated",
  LL_sessionEnded_popup_background_color: "ffffff",
  LL_sessionEnded_title_font_color: "094fa4",
  LL_sessionEnded_description_font_color: "094fa4",
  LL_sessionEnded_Close_Modal_Window_button_width: "6",
  LL_CloseModal_Link_buttom_color: "094fa4",
  LL_Feedback_Button_color: "838383",
  partialSupported_PanelClose_background:
    "/framework/v4/resources/images/V4LLPanel/V4LLPanelClose.png",
  partialSupported_separator:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/partialSupported_separator.png",
  syncIsLostText_PanelClose_background:
    "/framework/v4/resources/images/V4LLPanel/V4LLPanelClose.png",
  syncIsLostText_separator:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/syncIsLostText_separator.png",
  V4LLPanel_redirect_popup_cancel_background:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_redirect_popup_cancel_background.png",
  V4LLPanel_redirect_popup_separator:
    "/framework/v4/resources/images/V4LLPanel/V4LLPanelSepLine.png",
  activateACBButton_image:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/activateACBButton_image.png",
  activateACBButton_image_hover:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/activateACBButton_image_hover.png",
  V4LLPanel_CollapsedNarrowNoAgent_background:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_CollapsedNarrowNoAgent_background.png",
  V4LLPanel_InnerLogo_background:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_InnerLogo_background.png",
  V4LLPanel_HintBlock_background:
    "/framework/v4/resources/images/V4LLPanel/V4LLPanelhoverTooltipBg.png",
  V4LLPanel_notConnected_background:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_notConnected_background.png",
  V4LLPanel_PanelClose_background:
    "/framework/v4/resources/images/V4LLPanel/V4LLPanelMinimizeBottom.png",
  LLpassToBeginText_background:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/LLpassToBeginText_background.jpg",
  V4LLPanel_PhoneNumber_background:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_PhoneNumber_background.png",
  V4LLPanel_background:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_background.png",
  V4LLPanel_separator:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_separator.jpg",
  V4LLPanel_header_logo:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_header_logo.png",
  V4LLPanel_header_close_image:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_header_close_image.png",
  V4LLPanel_Connected_disconnect_button:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_Connected_disconnect_button.png",
  V4LLPanel_Connected_disconnect_button_hover:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_Connected_disconnect_button_hover.png",
  V4LLPanel_Connected_collapsed_background:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_Connected_collapsed_background.jpg",
  V4LLPanel_notSupported_background:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_notSupported_background.png",
  V4LLPanel_notSupported_logo:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_notSupported_logo.png",
  V4LLPanel_PanelClose_notSupported_background:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_PanelClose_notSupported_background.png",
  V4LLPanel_HintBlock_notSupported_background:
    "/framework/v4/resources/images/V4LLPanel/V4LLPanelhoverTooltipBg.png",
  V4LLPanel_GenericToggler_notSupported_background:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_GenericToggler_notSupported_background.png",
  V4LLPanel_termsAndConditionsWindow_textShadow:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_termsAndConditionsWindow_textShadow.png",
  V4LLPanel_termsAndConditionsWindow_startSessionButton:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_termsAndConditionsWindow_startSessionButton.png",
  V4LLPanel_termsAndConditionsWindow_startSessionButtonHover:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_termsAndConditionsWindow_startSessionButtonHover.png",
  V4LLPanel_WaitingWindowSeparator:
    "/framework/v4/resources/images/V4LLPanel/V4LLPanelSepLine.png",
  V4LLPanel_WaitingWindowLogo:
    "/framework/v4/resources/images/V4LLPanel/V4LLPanelLogo.png",
  V4LLPanel_WaitingWindowClose:
    "/framework/v4/resources/images/V4LLPanel/waiting_popup_close_button.png",
  V4LLPanel_WaitingWindowPreloader:
    "/framework/v4/resources/images/V4LLPanel/wait.gif",
  V4LLPanel_PanelMinimizeButton_background:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_PanelMinimizeButton_background.png",
  V4LLPanel_PanelCloseButton_background:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_PanelCloseButton_background.png",
  V4LLPanel_CloseConfirmButton_background:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_CloseConfirmButton_background.png",
  V4LLPanel_CloseConfirmButton_background_hover:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/V4LLPanel_CloseConfirmButton_background_hover.png",
  LL_sessionEnded_popup_close_button:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/LL_sessionEnded_popup_close_button.png",
  LL_sessionEnded_popup_cancel_button:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/LL_sessionEnded_popup_cancel_button.png",
  LL_sessionEnded_popup_image:
    "/company/config/26073793/v4/res/bbvahubsc26073793us1//images/1033/LL_sessionEnded_popup_image.png",
  FAQURL: "",
  PrivacyURL: "",
  Slideshow: "flash/slideshow_combined_generic.swf",
  V4LLPanel_FAQURL:
    "http://www.bbvacompass.com/compass/policy/online-privacy-policy.jsp",
  V4LLPanel_PhoneNumberURL: "",
  V4LLPanel_MoreInfo: "",
};
LL_CustomUI.V4PanelState = "new";

LL_Deployment.checkPageSpecificRules(1);
Array.prototype.indexOf ||
  (Array.prototype.indexOf = function (e) {
    for (var r = 0; r < this.length; r++) if (this[r] === e) return r;
    return -1;
  });
var LL_BR_Core = new (function () {
    (this.browser = null),
      (this.ICBSupported = !1),
      (this.ACBSupported = "none"),
      (this.ICBAllowed = window.LL_Deployment ? LL_Deployment.allowICB : !1),
      (this.ACBAllowed = window.LL_Deployment ? LL_Deployment.allowACB : !1),
      (this.ll_posY = 0),
      (this.Init = function () {
        (LL_BR_Core.ICBSupported = LL_BR_Core.ICBAllowed
          ? LL_BR_Core.IsICBSupported()
          : !1),
          (LL_BR_Core.ACBSupported = LL_BR_Core.ACBAllowed
            ? LL_BR_Core.IsACBSupported()
            : "none");
      }),
      (this.isMobile = {
        Android: function () {
          return navigator.userAgent.match(/Android/i) ? !0 : !1;
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i) ? !0 : !1;
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? !0 : !1;
        },
        iOSVersion: function () {
          try {
            var e,
              r = navigator.userAgent.match(
                /(?:CPU iPhone OS|CPU OS)\s(?:(\d_\d|\d_\d_\d))? like Mac OS X/i
              ),
              a = 0;
            return r
              ? (r.length > 1 &&
                  ((e = r[1]),
                  e && (e = e.split("_")),
                  e.length > 0 && (a = e[0]),
                  e.length > 1 && (a += "." + e[1])),
                a)
              : a;
          } catch (o) {
            return 0;
          }
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
            var a = e.split("."),
              o = r.split("."),
              n = Math.min(a.length, o.length),
              t = 0;
            n > t;
            t++
          ) {
            var i = Number(o[t]),
              s = Number(a[t]);
            if (((isNaN(i) || isNaN(s)) && ((i = o[t]), (s = a[t])), i > s))
              return !0;
            if (s > i) return !1;
          }
          return !0;
        } catch (l) {
          return !0;
        }
      }),
      (this.IsICBSupported = function () {
        if (
          (LL_BR_Core.browser ||
            (LL_BR_Core.browser = LL_BR_Core.DetectBrowser()),
          LL_BR_Core.isMobile.iOS())
        ) {
          var e = new Number(LL_BR_Core.isMobile.iOSVersion());
          return e && !isNaN(e) && 6 > e && 0 != e ? !1 : !0;
        }
        if (
          -1 != LL_BR_Core.browser.OS.indexOf("Mac OS") &&
          LL_BR_Core.browser.OSVersion
        ) {
          var r = "10.6";
          return LL_BR_Core.hasRequiredVersion(r, LL_BR_Core.browser.OSVersion);
        }
        if (
          "Safari" == LL_BR_Core.browser.BrowserName &&
          LL_BR_Core.browser.BrowserVersion < 6
        )
          return !1;
        if (
          LL_BR_Core.browser.WebSocket &&
          LL_BR_Core.browser.PostMessage &&
          LL_BR_Core.browser.LocalStorage
        )
          return !0;
        if ("MSIE" == LL_BR_Core.browser.BrowserName)
          try {
            var a = Number(LL_BR_Core.browser.BrowserVersion);
            if (a >= 8) return !0;
          } catch (o) {}
        return !1;
      }),
      (this.IsLTBSupported = function (e) {
        var r =
          LL_Deployment && LL_Deployment.restrictionGroup
            ? LL_Deployment.restrictionGroup.toUpperCase()
            : "NONE";
        if (!r || "NONE" == r || "none" == e) return e;
        LL_BR_Core.browser || (LL_BR_Core.browser = LL_BR_Core.DetectBrowser());
        var a = window.LL_Deployment && LL_Deployment.acbMacMode,
          o = LL_BR_Core.browser,
          n = "none";
        return (
          ("GROUP1" == r || "GROUP2" == r || "GROUP3" == r) &&
            ("Windows" == o.OS
              ? ("Chrome" === o.BrowserName ||
                  "MSIE" === o.BrowserName ||
                  "Firefox" === o.BrowserName) &&
                (n = e)
              : "Mac OS X" == o.OS &&
                (o.OSVersion.indexOf("10.9") < 0 || a) &&
                ("Chrome" == o.BrowserName ||
                  ("Safari" == o.BrowserName && o.BrowserVersion >= "5.5")) &&
                (n = e),
            "none" == n &&
              "GROUP2" == r &&
              ("Windows" == o.OS || "Mac OS X" == o.OS) &&
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
          "Windows" != e.OS ||
          ("Vista" != e.OSVersion &&
            "7" != e.OSVersion &&
            "8" != e.OSVersion &&
            "8.1" != e.OSVersion &&
            "10" != e.OSVersion)
        ) {
          if (-1 != e.OS.indexOf("Mac OS") && e.OSVersion) {
            var a = "10.6";
            if (!LL_BR_Core.hasRequiredVersion(a, e.OSVersion))
              //disable Mac OS X 10.5
              return r;
          }
        } else
          ("MSIE" === e.BrowserName || "MS Edge" === e.BrowserName) &&
          window.LL_Deployment &&
          LL_Deployment.acbNetMode
            ? (r = ".net")
            : window.LL_Deployment && LL_Deployment.acbWinMode && (r = "win");
        if ("Safari" == e.BrowserName && "Windows" == e.OS)
          return LL_BR_Core.IsLTBSupported(r);
        if ("Opera" == e.BrowserName && "Windows" == e.OS) return "none";
        if (window.LL_Deployment && LL_Deployment.acbNetMode) {
          if ("MSIE" == e.BrowserName && e.NetVersion >= "2.0")
            return LL_BR_Core.IsLTBSupported(".net");
          //Chrome ClickOnce plugin
          if ("Chrome" == e.BrowserName && "Windows" == e.OS) {
            var o = 0;
            if (window.clientInformation && window.clientInformation.plugins)
              for (var n = 0; n < clientInformation.plugins.length; n++)
                "ClickOnce plugin for Chrome" ==
                  clientInformation.plugins[n].name && (o = 1);
            if (1 == o) return LL_BR_Core.IsLTBSupported(".net");
          }
          //Firefox .NET
          if ("Firefox" == e.BrowserName && e.NetVersion >= "2.0")
            return LL_BR_Core.IsLTBSupported(".net");
        }
        if (".net" == r)
          //bypass java detection
          return LL_BR_Core.IsLTBSupported(r);
        if (
          -1 != e.OS.indexOf("Mac OS") &&
          e.OSVersion &&
          window.LL_Deployment &&
          LL_Deployment.acbMacMode &&
          e.OSVersion
        ) {
          var t;
          t =
            LL_Deployment.Mac_ACB_OS_Versions &&
            LL_Deployment.Mac_ACB_OS_Versions.length > 0
              ? LL_Deployment.Mac_ACB_OS_Versions.split(",")
              : [];
          for (var i = !0, n = 0; n < t.length; n++)
            if (0 == t[n].indexOf("!")) {
              // exception, this version (!##.#) is not supported
              var s = t[n].replace(/^\D+/g, "");
              if (-1 != e.OSVersion.indexOf(s)) {
                i = !1;
                break;
              }
            }
          if (i)
            for (var n = 0; n < t.length; n++) {
              if (t[n].indexOf("+") > -1) {
                // OS is supported starting this version
                var s = t[n].replace("+", "");
                if (
                  LL_BR_Core.hasRequiredVersion(s, LL_BR_Core.browser.OSVersion)
                )
                  return LL_BR_Core.IsLTBSupported("mac");
                break;
              }
              if (-1 == t[n].indexOf("!") && -1 != e.OSVersion.indexOf(t[n]))
                return LL_BR_Core.IsLTBSupported("mac");
            }
        }
        if (1 == navigator.javaEnabled()) {
          var l = "",
            p = "1.5",
            d = deployJava.getJREs(),
            v = d.length;
          if (v) {
            // If FireFox version 36.0 or higher or Chrome version 39.0 - increase the min version of Java to force the launcher
            (("Firefox" == e.BrowserName &&
              parseFloat(e.BrowserVersion) >= 36) ||
              ("Chrome" == e.BrowserName &&
                parseFloat(e.BrowserVersion) >= 39)) &&
              (p = "1.7");
            for (var n = 0; v > n; n++) {
              var u = d[n],
                c = !p || (p && "" + u > "" + p);
              c && "" + u > "" + l && (l = u);
            }
          }
          if (l)
            return LL_BR_Core.IsLTBSupported(
              window.LL_Deployment && LL_Deployment.unsupportedJavaVersions
                ? LL_Deployment.unsupportedJavaVersions.indexOf(l) < 0
                  ? "java"
                  : r
                : "java"
            );
        }
        return LL_BR_Core.IsLTBSupported(r);
      }),
      (this.DetectBrowser = function () {
        var e = navigator.userAgent.toLowerCase(),
          r = {};
        //System version
        if (
          ((r.OS = ""),
          (r.OSVersion = ""),
          (r.BrowserName = ""),
          (r.BrowserVersion = ""),
          (r.NetVersion = ""),
          (r.WebSocket = !1),
          (r.PostMessage = !1),
          (r.LocalStorage = !1),
          //OS detection
          /windows/i.test(e)
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
        else if ("Mac OS X" == r.OS) {
          /mac os x[\/\s](\d+_\d+_\d+)/i.test(e) ||
          /mac os x[\/\s](\d+_\d+)/i.test(e)
            ? (r.OSVersion = ("" + RegExp.$1).replace(/_/g, "."))
            : /mac os x[\/\s](\d+\.\d+\.\d+)/i.test(e) ||
              /mac os x[\/\s](\d+\.\d+)/i.test(e)
            ? (r.OSVersion = RegExp.$1)
            : /cpu os[\/\s](\d+_\d+)/i.test(e)
            ? ((r.OS = "IOS"),
              (r.OSVersion = ("" + RegExp.$1).replace(/_/g, ".")))
            : /cpu iphone os[\/\s](\d+_\d+)/i.test(e) &&
              ((r.OS = "IOS"),
              (r.OSVersion = ("" + RegExp.$1).replace(/_/g, ".")));
          var a = r.OSVersion.split(".");
          a.length > 1 && (r.OSVersion = a[0] + "." + a[1]);
        }
        //Browser detection
        if (/firefox[\/\s](\d+\.\d+)/i.test(e))
          (r.BrowserName = "Firefox"), (r.BrowserVersion = "" + RegExp.$1);
        else if (/msie[\/\s](\d+\.\d+)/i.test(e)) {
          r.BrowserName = "MSIE";
          var o =
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
          r.BrowserVersion = o.toFixed(1);
        } else
          /trident\/7.0/i.test(e)
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
          var n = e.match(/\.net(\d+\.\d+)|\.net\sclr\s(\d+\.\d+)/g);
          if (n) {
            for (var t = 0; t < n.length; t++)
              n[t] = n[t].replace(/\.net\sclr\s/, "").replace(/\.net/, "");
            n.sort(), (r.NetVersion = n[n.length - 1]);
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
  })(),
  LL_Flash_Detector = {
    getControlVersion: function () {
      var e, r;
      // NOTE : new ActiveXObject(strFoo) throws an exception if strFoo isn't in the registry
      try {
        // version will be set for 7.X or greater players
        (r = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")),
          (e = r.GetVariable("$version"));
      } catch (a) {}
      if (!e)
        try {
          // version will be set for 6.X players only
          (r = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6")),
            // installed player is some revision of 6.0
            // GetVariable("$version") crashes for versions 6.0.22 through 6.0.29,
            // so we have to be careful.
            // default to the first public version
            (e = "WIN 6,0,21,0"),
            // throws if AllowScripAccess does not exist (introduced in 6.0r47)
            (r.AllowScriptAccess = "always"),
            // safe to call for 6.0r47 or greater
            (e = r.GetVariable("$version"));
        } catch (a) {}
      if (!e)
        try {
          // version will be set for 4.X or 5.X player
          (r = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3")),
            (e = r.GetVariable("$version"));
        } catch (a) {}
      if (!e)
        try {
          // version will be set for 3.X player
          (r = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3")),
            (e = "WIN 3,0,18,0");
        } catch (a) {}
      if (!e)
        try {
          // version will be set for 2.X player
          (r = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")),
            (e = "WIN 2,0,0,11");
        } catch (a) {
          e = -1;
        }
      return e;
    },
    getFlashVersion: function () {
      // NS/Opera version >= 3 check for Flash plugin in plugin array
      var e = -1,
        r = navigator.userAgent ? navigator.userAgent.toLowerCase() : "";
      if (null != navigator.plugins && navigator.plugins.length > 0) {
        if (
          navigator.plugins["Shockwave Flash 2.0"] ||
          navigator.plugins["Shockwave Flash"]
        ) {
          var a = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "",
            o = navigator.plugins["Shockwave Flash" + a].description,
            n = o.split(" "),
            t = n[2].split("."),
            i = t[0],
            s = t[1],
            l = n[3];
          "" == l && (l = n[4]),
            "d" == l[0]
              ? (l = l.substring(1))
              : "r" == l[0] &&
                ((l = l.substring(1)),
                l.indexOf("d") > 0 && (l = l.substring(0, l.indexOf("d"))));
          var e = i + "." + s + "." + l;
        }
      } else if (-1 != r.indexOf("webtv/2.6")) e = 4;
      else if (-1 != r.indexOf("webtv/2.5")) e = 3;
      else if (-1 != r.indexOf("webtv")) e = 2;
      else {
        var p =
            -1 != navigator.appVersion.indexOf("MSIE") ||
            -1 != navigator.userAgent.indexOf("Trident"),
          d = -1 != navigator.appVersion.toLowerCase().indexOf("win") ? !0 : !1,
          v = -1 != r.indexOf("opera") ? !0 : !1;
        p && d && !v && (e = LL_Flash_Detector.getControlVersion());
      }
      if (e && "-1" != e) {
        (e = ("" + e).replace("WIN", "")),
          (e = e.replace(/\,/g, ".")),
          (e = e.replace(/^\s+|\s+$/g, ""));
        var u = e.split(".");
        e = 1 == u.length ? u[0] + ".0" : u[0] + "." + u[1];
      } else e = null;
      return e;
    },
  },
  deployJava = {
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
          var r = deployJava.getPlugin(), a = r.jvms, o = 0;
          o < a.getLength();
          o++
        )
          e[o] = a.get(o).version;
      else {
        var n = deployJava.getBrowser();
        "MSIE" == n
          ? deployJava.testUsingActiveX("1.7.0")
            ? (e[0] = "1.7.0")
            : deployJava.testUsingActiveX("1.6.0")
            ? (e[0] = "1.6.0")
            : deployJava.testUsingActiveX("1.5.0")
            ? (e[0] = "1.5.0")
            : deployJava.testUsingActiveX("1.4.2")
            ? (e[0] = "1.4.2")
            : deployJava.testForMSVM() && (e[0] = "1.1")
          : "Netscape Family" == n &&
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
        for (var o = 0; o < e.length; ++o)
          alert("We claim to have detected Java SE " + e[o]);
      return e;
    },
    versionCheck: function (e) {
      var r = 0,
        a = "^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:_(\\d+))?)?)?(\\*|\\+)?$",
        o = e.match(a);
      if (null != o) {
        for (var n = !0, t = new Array(), i = 1; i < o.length; ++i)
          "string" == typeof o[i] && "" != o[i] && ((t[r] = o[i]), r++);
        "+" == t[t.length - 1]
          ? ((n = !1), t.length--)
          : "*" == t[t.length - 1] && t.length--;
        for (var s = deployJava.getJREs(), i = 0; i < s.length; ++i)
          if (deployJava.compareVersionToPattern(s[i], t, n)) return !0;
        return !1;
      }
      return alert("Invalid versionPattern passed to versionCheck: " + e), !1;
    },
    isWebStartInstalled: function (e) {
      var r = deployJava.getBrowser();
      if ("?" == r || "Safari" == deployJava.browserName2) return !0;
      ("undefined" == e || null == e) && (e = "1.4.2");
      var a = !1,
        o = "^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:_(\\d+))?)?)?$",
        n = e.match(o);
      return (
        null != n
          ? (a = deployJava.versionCheck(e + "+"))
          : (deployJava.debug &&
              alert(
                "Invalid minimumVersion argument to isWebStartInstalled(): " + e
              ),
            (a = deployJava.versionCheck("1.4.2+"))),
        a
      );
    },
    getJPIVersionUsingMimeType: function () {
      for (var e = 0; e < navigator.mimeTypes.length; ++e) {
        var r = navigator.mimeTypes[e].type,
          a = r.match(/^application\/x-java-applet;jpi-version=(.*)$/);
        if (null != a) {
          deployJava.firefoxJavaVersion = a[1];
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
      if (
        deployJava.isPluginInstalled() &&
        deployJava.versionCheck("1.6.0_10+")
      )
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
    compareVersionToPattern: function (e, r, a) {
      var o = "^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:_(\\d+))?)?)?$",
        n = e.match(o);
      if (null != n) {
        for (var t = 0, i = new Array(), s = 1; s < n.length; ++s)
          "string" == typeof n[s] && "" != n[s] && ((i[t] = n[s]), t++);
        var l = Math.min(i.length, r.length);
        if (a) {
          for (var s = 0; l > s; ++s) if (i[s] != r[s]) return !1;
          return !0;
        }
        for (var s = 0; l > s; ++s) {
          if (i[s] < r[s]) return !1;
          if (i[s] > r[s]) return !0;
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
      var r = "JavaWebStart.isInstalled." + e + ".0";
      if (!(ActiveXObject || "ActiveXObject" in window))
        return (
          deployJava.debug &&
            alert("Browser claims to be IE, but no ActiveXObject object?"),
          !1
        );
      try {
        return null != new ActiveXObject(r);
      } catch (a) {
        return !1;
      }
    },
    testForMSVM: function () {
      var e = "{08B0E5C0-4FCB-11CF-AAA5-00401C608500}";
      if ("undefined" != typeof oClientCaps) {
        var r = oClientCaps.getComponentVersion(e, "ComponentID");
        return "" == r || "5,0,5000,0" == r ? !1 : !0;
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
      for (var r = 0; r < navigator.mimeTypes.length; ++r) {
        var a = navigator.mimeTypes[r].type,
          o = a.match(
            /^application\/x-java-applet\x3Bversion=(1\.8|1\.7|1\.6|1\.5|1\.4\.2)$/
          );
        if (null != o && deployJava.compareVersions(o[1], e)) return !0;
      }
      return !1;
    },
    testUsingPluginsArray: function (e) {
      if (!navigator.plugins || !navigator.plugins.length) return !1;
      for (
        var r = navigator.platform.toLowerCase(), a = 0;
        a < navigator.plugins.length;
        ++a
      ) {
        var o = navigator.plugins[a].description;
        if (-1 != o.search(/^Java Switchable Plug-in (Cocoa)/)) {
          if (deployJava.compareVersions("1.5.0", e)) return !0;
        } else if (
          -1 != o.search(/^Java/) &&
          -1 != r.indexOf("win") &&
          (deployJava.compareVersions("1.5.0", e) ||
            deployJava.compareVersions("1.6.0", e))
        )
          return !0;
      }
      return deployJava.compareVersions("1.5.0", e) ? !0 : !1;
    },
    done: function (e, r) {},
    compareVersions: function (e, r) {
      for (var a = e.split("."), o = r.split("."), n = 0; n < a.length; ++n)
        a[n] = Number(a[n]);
      for (var n = 0; n < o.length; ++n) o[n] = Number(o[n]);
      return (
        2 == a.length && (a[2] = 0),
        a[0] > o[0]
          ? !0
          : a[0] < o[0]
          ? !1
          : a[1] > o[1]
          ? !0
          : a[1] < o[1]
          ? !1
          : a[2] > o[2]
          ? !0
          : a[2] < o[2]
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
        null != deployJava.returnPage &&
          (location.href = deployJava.returnPage)),
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
        var r = document.getElementById("deployJavaPlugin");
        null == r && deployJava.writeEmbedTag();
      }
    },
    writeEmbedTag: function () {},
    do_initialize: function () {
      if ((deployJava.writePluginTag(), null == deployJava.locale)) {
        var e = null;
        if (null == e)
          try {
            e = navigator.userLanguage;
          } catch (r) {}
        if (null == e)
          try {
            e = navigator.systemLanguage;
          } catch (r) {}
        if (null == e)
          try {
            e = navigator.language;
          } catch (r) {}
        null != e && (e.replace("-", "_"), (deployJava.locale = e));
      }
    },
  };
deployJava.do_initialize(), LL_BR_Core.Init();
window.LL_CustomUI &&
  !LL_CustomUI.commonFunctions &&
  ((LL_CustomUI.commonFunctions = {}),
  (LL_CustomUI.commonFunctions.stopEvent = function (e) {
    e &&
      (e.preventDefault && e.preventDefault(),
      e.stopPropagation && e.stopPropagation(),
      e.stopImmediatePropagation && e.stopImmediatePropagation(),
      (e.cancelBubble = !0),
      (e.returnValue = !1));
  }),
  (LL_CustomUI.commonFunctions.doFocus = function (e) {
    try {
      document.getElementById(e).focus();
    } catch (o) {}
  }),
  (LL_CustomUI.commonFunctions.globalMouseOverHandler = function (e) {
    if (e) {
      var o = e.target || event.srcElement,
        t = o ? o.id : "";
      "V4LLPanel_CloseDeclineButton" == t
        ? LL_CustomUI.V4Panel.toggleConfirmNoBtn(!0)
        : "V4LLPanel_CloseConfirmButton" == t &&
          LL_CustomUI.V4Panel.toggleConfirmYesBtn(!0);
    }
  }),
  (LL_CustomUI.commonFunctions.toggleADA_State = function (e, o) {
    if (e && o)
      for (var t = e.split(","), n = 0; n < t.length; n++) {
        var i = t[n].replace(/\s/g, "");
        if (i) {
          var s = document.getElementById(i);
          if (!s) continue;
          if ("disable" == o.toLowerCase())
            s.setAttribute("disabled", "disabled"),
              s.setAttribute("aria-hidden", "true");
          else if ("enable" == o.toLowerCase()) {
            s.setAttribute("disabled", "");
            try {
              s.removeAttribute("disabled");
            } catch (L) {}
            (s.disabled = !1), s.setAttribute("aria-hidden", "false");
          }
        }
      }
  }),
  (LL_CustomUI.commonFunctions.globalKeyHandler = function (e) {
    if (e) {
      var o = function (e) {
          if (e) {
            var o = e.parentNode;
            if (
              o &&
              "V4LLPanel_LogoToggler" == o.id &&
              ((o = o.parentNode),
              o &&
                "V4LLPanel_MovingToggler" == o.id &&
                ((o = o.parentNode), o && "V4LLPanel_InnerContainer" == o.id))
            )
              return (
                (o = o.parentNode), o && "V4LLTermsAndConditionsWindow" == o.id
              );
          }
          return !1;
        },
        t = e.target || event.srcElement;
      if (t) {
        var n = t ? t.id : "",
          i = window.event ? e.keyCode : e.which,
          s = !1;
        if (t && t.disabled) s = !0;
        else if (10 == i || 13 == i || 32 == i)
          if (
            "V4LLPanel_InnerTitle" == n ||
            "V4LLPanel_CollapsedNumContNarrow" == n ||
            "V4LLPanel_CollapsedNarrowNoAgent" == n
          )
            LL_CustomUI.V4Panel.isOpen || LL_CustomUI.V4Panel.expand(),
              (s = !0);
          else if ("V4LLPanel_TermsAndConditionsToggler" == n)
            LL_CustomUI.termsAndConditionsWindow.expand(), (s = !0);
          else if (
            "V4LLPanel_PanelMinimize" == n ||
            "V4LLPanel_PanelMinimizeTC" == n
          ) {
            s = !0;
            var L =
              LL_CustomUI.V4Panel.isDisconnectConfirmWindowOpen ||
              (LL_CustomUI.$("V4LLPanelDisconnectConfirmWindow") &&
                "block" ==
                  LL_CustomUI.$("V4LLPanelDisconnectConfirmWindow").style
                    .display) ||
              (LL_CustomUI.$("V4LLPanelDisconnectConfirmWindowTC") &&
                "block" ==
                  LL_CustomUI.$("V4LLPanelDisconnectConfirmWindowTC").style
                    .display);
            if (!L) {
              var d =
                LL_CustomUI.termsAndConditionsWindow &&
                LL_CustomUI.termsAndConditionsWindow
                  .isTermsAndConditionsEnabled &&
                o(e.target || event.srcElement);
              d
                ? LL_CustomUI.termsAndConditionsWindow.collapse()
                : LL_CustomUI.V4Panel.collapse();
            }
          } else if (
            "V4LLPanel_PanelClose" == n ||
            "V4LLPanel_PanelCloseTC" == n
          ) {
            s = !0;
            var L =
              LL_CustomUI.V4Panel.isDisconnectConfirmWindowOpen ||
              (LL_CustomUI.$("V4LLPanelDisconnectConfirmWindow") &&
                "block" ==
                  LL_CustomUI.$("V4LLPanelDisconnectConfirmWindow").style
                    .display) ||
              (LL_CustomUI.$("V4LLPanelDisconnectConfirmWindowTC") &&
                "block" ==
                  LL_CustomUI.$("V4LLPanelDisconnectConfirmWindowTC").style
                    .display);
            if (!L)
              if ("new" == LL_CustomUI.V4PanelState) {
                var d =
                  LL_CustomUI.termsAndConditionsWindow &&
                  LL_CustomUI.termsAndConditionsWindow
                    .isTermsAndConditionsEnabled &&
                  o(e.target || event.srcElement);
                d
                  ? LL_CustomUI.termsAndConditionsWindow.openDisconnectConfirmWindow()
                  : window.LL_BR_Core &&
                    !LL_BR_Core.ICBSupported &&
                    "none" == LL_BR_Core.ACBSupported
                  ? LL_CustomUI.V4Panel.collapse()
                  : LL_CustomUI.V4Panel.openDisconnectConfirmWindow();
              } else LL_CustomUI.V4Panel.collapse();
          } else
            "V4LLPanel_CloseDeclineButtonTC" == n
              ? ((s = !0),
                LL_CustomUI.termsAndConditionsWindow.declineSessionEnd())
              : "V4LLPanel_CloseConfirmButtonTC" == n
              ? ((s = !0),
                LL_CustomUI.termsAndConditionsWindow.confirmSessionEnd())
              : "V4LLPanel_CloseDeclineButton" == n
              ? ((s = !0), LL_CustomUI.V4Panel.declineSessionEnd())
              : "V4LLPanel_CloseConfirmButton" == n
              ? ((s = !0), LL_CustomUI.V4Panel.confirmSessionEnd())
              : "LL_sessionEnded_cancel" == n
              ? ((s = !0), LL_CustomUI.SessionEndedPopup.hide())
              : "V4LLPanel_DisconnectTrigger" == n
              ? ((s = !0), LL_CustomUI.V4Panel.doDisconnect())
              : "redirect_cancel" == n &&
                ((s = !0), LL_CustomUI.RedirectPopup.hide());
        else
          27 == i &&
            (LL_CustomUI.V4Panel.isDisconnectConfirmWindowOpen
              ? ((s = !0), LL_CustomUI.V4Panel.declineSessionEnd())
              : LL_CustomUI.termsAndConditionsWindow
                  .isDisconnectConfirmWindowOpen &&
                ((s = !0),
                LL_CustomUI.termsAndConditionsWindow.declineSessionEnd()));
        return s ? (LL_CustomUI.commonFunctions.stopEvent(e), !1) : void 0;
      }
    }
  }),
  (LL_CustomUI.commonFunctions.removeNodes = function (e) {
    if (e)
      for (var o = e.split(","), t = 0; t < o.length; t++) {
        var n = o[t].replace(/\s/g, "");
        if (n) {
          var i = document.getElementById(n);
          i && i.parentNode && i.parentNode.removeChild(i);
        }
      }
  }),
  (LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition = function (e, o, t) {
    var n = "",
      i = "bottom: 0;";
    switch (("true" == t && (i = "bottom: 30px;"), e)) {
      case "bottom_right":
        n = "" == o ? i + " right: 0;" : i + " right:" + o + "px;";
        break;
      case "top_left":
        n = "" == o ? "top: 0; left: 0;" : "top: 0; left:" + o + "px;";
        break;
      case "top_middle":
        n = "top: 0;";
        break;
      case "right_middle":
        n = "right: 0;";
        break;
      case "top_right":
        n = "" == o ? "top: 0; right: 0;" : "top: 0; right:" + o + "px;";
        break;
      case "bottom_left":
        n = "" == o ? i + " left: 0;" : i + " left:" + o + "px;";
        break;
      case "bottom_middle":
        n = i;
        break;
      case "left_middle":
        n = "left: 0;";
    }
    return n;
  }),
  (LL_CustomUI.commonFunctions.isQuirksMode = function () {
    return (
      LL_CustomUI.commonFunctions.isIELower10() &&
      "backcompat" == document.compatMode.toLowerCase()
    );
  }),
  (LL_CustomUI.commonFunctions.isIELower10 = function () {
    return (
      "microsoft internet explorer" == navigator.appName.toLowerCase() &&
      LL_CustomUI.commonFunctions.getInternetExplorerVersion() < 10
    );
  }),
  (LL_CustomUI.commonFunctions.isIE6 = function () {
    return (
      "microsoft internet explorer" == navigator.appName.toLowerCase() &&
      parseFloat(navigator.appVersion) < 7
    );
  }),
  (LL_CustomUI.commonFunctions.isAnyIE = function () {
    return LL_CustomUI.commonFunctions.getInternetExplorerVersion() > 0;
  }),
  (LL_CustomUI.commonFunctions.isSafari = function () {
    return /^((?!chrome).)*safari/i.test(navigator.userAgent);
  }),
  (LL_CustomUI.commonFunctions.isFireFox = function () {
    return /^((?!chrome).)*firefox/i.test(navigator.userAgent);
  }),
  (LL_CustomUI.commonFunctions.isBottomLocation = function () {
    var e = LL_CustomUI.V4LLPanel_position;
    return "bottom_right" == e || "bottom_left" == e || "bottom_middle";
  }),
  (LL_CustomUI.commonFunctions.isLeftLocation = function () {
    var e = LL_CustomUI.V4LLPanel_position;
    return "left_middle" == e;
  }),
  (LL_CustomUI.commonFunctions.isRightLocation = function () {
    var e = LL_CustomUI.V4LLPanel_position;
    return "right_middle" == e;
  }),
  (LL_CustomUI.$ = function (e) {
    return document.getElementById(e);
  }),
  (LL_CustomUI.commonFunctions.getElementSize = function (e) {
    var o = LL_CustomUI.$(e),
      t = o ? o.offsetHeight : 0,
      n = o ? o.offsetWidth : 0;
    return { elementHeight: t, elementWidth: n };
  }),
  (LL_CustomUI.commonFunctions.getDocHeight = function () {
    var e = document;
    return Math.max(
      Math.max(e.body.scrollHeight, e.documentElement.scrollHeight),
      Math.max(e.body.offsetHeight, e.documentElement.offsetHeight),
      Math.max(e.body.clientHeight, e.documentElement.clientHeight)
    );
  }),
  (LL_CustomUI.commonFunctions.GetScrollPosition = function () {
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
  (LL_CustomUI.commonFunctions.getInternetExplorerVersion = function () {
    var e = -1;
    if ("Microsoft Internet Explorer" == navigator.appName) {
      var o = navigator.userAgent,
        t = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
      null != t.exec(o) && (e = parseFloat(RegExp.$1));
    } else navigator.userAgent.indexOf("Trident/7.0") > -1 && (e = 11);
    return e;
  }),
  (LL_CustomUI.commonFunctions.getViewport = function () {
    var e, o;
    return (
      "undefined" != typeof window.innerWidth
        ? ((e = window.innerWidth), (o = window.innerHeight))
        : "undefined" != typeof document.documentElement &&
          "undefined" != typeof document.documentElement.clientWidth &&
          0 != document.documentElement.clientWidth
        ? ((e = document.documentElement.clientWidth),
          (o = document.documentElement.clientHeight))
        : ((e = document.getElementsByTagName("body")[0].clientWidth),
          (o = document.getElementsByTagName("body")[0].clientHeight)),
      [e, o]
    );
  }),
  (LL_CustomUI.commonFunctions.setPositionOnScroll = function (e, o, t) {
    var n = LL_CustomUI.$(e);
    if (n) {
      var i = LL_CustomUI.commonFunctions.getViewport(),
        s = i[1],
        L = LL_CustomUI.commonFunctions.getElementSize(e),
        d = L.elementHeight,
        l = LL_CustomUI.commonFunctions.GetScrollPosition();
      "right_middle" == t || "left_middle" == t
        ? (n.style.top = s / 2 - d / 2 + l - o + "px")
        : (n.style.top = s - d + l - o + "px");
    }
  }),
  (LL_CustomUI.commonFunctions.setElementInTheMiddle = function (e, o, t) {
    var n = LL_CustomUI.$(e),
      i = LL_CustomUI.commonFunctions.getElementSize(e),
      s = i.elementWidth,
      L = i.elementHeight,
      d = document.body.clientWidth,
      l = LL_CustomUI.commonFunctions.getViewport(),
      r = l[1];
    o.indexOf("top") >= 0 || o.indexOf("bottom") >= 0
      ? (n.style.left = (d - s) / 2 + "px")
      : "V4LLPanel" == e &&
        window.LL_CustomUI.V4PanelState &&
        "new" == window.LL_CustomUI.V4PanelState
      ? window.LL_BR_Core &&
        !LL_BR_Core.ICBSupported &&
        "none" == LL_BR_Core.ACBSupported
        ? (n.style.top =
            (r - LL_CustomUI.V4Panel.notSupportedEnvironmentWindowHeight) / 2 +
            "px")
        : (n.style.top =
            (r - LL_CustomUI.V4Panel.numberGenerationWindowHeight) / 2 + "px")
      : window.LL_CustomUI.V4PanelState &&
        "new" != window.LL_CustomUI.V4PanelState
      ? (n.style.top =
          (r - LL_CustomUI.V4Panel.agentConnectedWindowHeight) / 2 + "px")
      : "V4LLTermsAndConditionsWindow" == e
      ? (n.style.top =
          (r -
            LL_CustomUI.termsAndConditionsWindow
              .termsAndConditionsWindowHeight) /
            2 +
          "px")
      : (n.style.top = (r - L) / 2 + "px");
  }),
  (LL_CustomUI.commonFunctions.listen = function (e, o, t) {
    if ("string" != typeof o)
      o.addEventListener
        ? o.addEventListener(e, t, !1)
        : o.attachEvent
        ? (o.attachEvent("on" + e, t),
          o === window
            ? o.document &&
              (o.document.attachEvent("on" + e, t),
              o.document.body && o.document.body.attachEvent("on" + e, t))
            : o === window.document &&
              o.body &&
              o.body.attachEvent("on" + e, t))
        : (o[e] = t);
    else
      for (var n = o.split(","), i = 0; i < n.length; i++) {
        var s = document.getElementById(n[i].replace(/\s/g, ""));
        s && LL_CustomUI.commonFunctions.listen(e, s, t);
      }
  }),
  (LL_CustomUI.commonFunctions.removeListener = function (e, o, t) {
    if ("string" != typeof o)
      try {
        o.removeEventListener
          ? o.removeEventListener(e, t, !0)
          : o.detachEvent
          ? (o.detachEvent("on" + e, t),
            o === window
              ? o.document &&
                (o.document.detachEvent("on" + e, t),
                o.document.body && o.document.body.detachEvent("on" + e, t))
              : o === window.document &&
                o.body &&
                o.body.detachEvent("on" + e, t))
          : (o["on" + e] = null);
      } catch (n) {}
    else
      for (var i = o.split(","), s = 0; s < i.length; s++) {
        var L = document.getElementById(i[s].replace(/\s/g, ""));
        L && LL_CustomUI.commonFunctions.removeListener(e, L, t);
      }
  }),
  (LL_CustomUI.commonFunctions.Timeout = function (e, o) {
    var t = setTimeout(e, o);
    (this.cleared = !1),
      (this.clear = function () {
        (this.cleared = !0), clearTimeout(t);
      });
  }),
  (LL_CustomUI.commonFunctions.preloadImages = function () {
    var e = /\/framework\/v4\/resources\/images\/V4LLPanel\/|\/company\/.+\.(gif|jpg|jpeg|tiff|png)$/i;
    for (prop in LL_CustomUI)
      try {
        if ("string" == typeof LL_CustomUI[prop] && e.test(LL_CustomUI[prop])) {
          var o = new Image();
          o.src = LL_CustomUI.img(LL_CustomUI[prop]);
        }
      } catch (t) {}
  }),
  (LL_CustomUI.commonFunctions.createStyleForPrint = function () {
    if (!document.getElementById("LL_idForPrint")) {
      var e = document.createElement("style");
      (e.type = "text/css"), e.setAttribute("id", "LL_idForPrint");
      var o =
        "@media print {#LL_DataServer{display: none !important;}#V4LLPanel_Container{display: none !important;}}";
      try {
        e.styleSheet
          ? (e.styleSheet.cssText = o)
          : e.appendChild(document.createTextNode(o)),
          document.getElementsByTagName("head")[0].appendChild(e);
      } catch (t) {}
    }
  }),
  LL_CustomUI.commonFunctions.ADA ||
    ((LL_CustomUI.commonFunctions.ADA = {}),
    (LL_CustomUI.commonFunctions.ADA.ADA_Compliance =
      "true" == LL_CustomUI.ADA_compliance),
    (LL_CustomUI.commonFunctions.ADA.border_color = "Gray"),
    (LL_CustomUI.commonFunctions.ADA.elementIDs = [
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
    (LL_CustomUI.commonFunctions.ADA.BOAelementIDs = [
      "V4LLPanel_CloseDeclineButton",
      "V4LLPanel_CloseConfirmButton",
    ]),
    (LL_CustomUI.commonFunctions.ADA.CreateStyleForFocus = function () {
      if (
        LL_CustomUI.commonFunctions.ADA.ADA_Compliance &&
        !document.getElementById("LL_idForStyle") &&
        (LL_CustomUI.commonFunctions.isAnyIE() ||
          LL_CustomUI.commonFunctions.isFireFox())
      ) {
        LL_CustomUI.commonFunctions.isFireFox() &&
          (LL_CustomUI.commonFunctions.ADA.border_color = "#9ecaed");
        var e = document.createElement("style");
        (e.type = "text/css"), e.setAttribute("id", "LL_idForStyle");
        for (var o = "", t = 0; t < this.elementIDs.length; t++)
          o += LL_CustomUI.commonFunctions.isFireFox()
            ? "#" +
              this.elementIDs[t] +
              ":focus{outline: 1px solid " +
              this.border_color +
              "}\r\n "
            : "#" +
              this.elementIDs[t] +
              ":focus{border: 0.5px solid " +
              this.border_color +
              "}\r\n ";
        for (var t = 0; t < this.BOAelementIDs.length; t++)
          LL_CustomUI.commonFunctions.isFireFox() ||
            (o +=
              "#" +
              this.BOAelementIDs[t] +
              ":focus{border: .5px solid black}\r\n ");
        try {
          e.styleSheet
            ? (e.styleSheet.cssText = o)
            : e.appendChild(document.createTextNode(o)),
            document.getElementsByTagName("head")[0].appendChild(e);
        } catch (n) {}
      }
    }))),
  window.LL_CustomUI &&
    !LL_CustomUI.img &&
    (LL_CustomUI.img = function (e) {
      var o = e ? e.toLowerCase() : "";
      return o &&
        0 != o.indexOf("//") &&
        0 != o.indexOf("http:") &&
        0 != o.indexOf("https:")
        ? ((o = o.replace(/\/\//g, "/")),
          "https://" +
            LL_Deployment.mainServerPath +
            (0 == o.indexOf("/") ? "" : "/") +
            o)
        : o;
    }),
  window.LL_Frames || (LL_Frames = {}),
  (LL_Frames.frameUrl = ""),
  (LL_Frames.frameOverflow_body = ""),
  (LL_Frames.frameOverflow_html = ""),
  (LL_Frames.frameEmbed = function (e, o, t, n, i) {
    var s = document.getElementById(e),
      L = !1,
      d = !0,
      l = !1;
    if (
      (i &&
        ((L = i.isScrollable), (d = i.isTransparent), (l = i.isCancellable)),
      !s || "block" != s.style.display || LL_Frames.frameUrl != o)
    ) {
      var r = window.innerHeight,
        a = window.innerWidth;
      a ||
        (a =
          0 != document.documentElement.clientWidth
            ? document.documentElement.clientWidth
            : document.body.clientWidth),
        r ||
          (r =
            0 != document.documentElement.clientWidth
              ? document.documentElement.clientHeight
              : document.body.clientHeight);
      var m = r,
        u = a,
        p = t,
        _ = n,
        c = document.body,
        C = document.documentElement,
        I = Math.max(
          c.scrollHeight,
          c.offsetHeight,
          C.clientHeight,
          C.scrollHeight,
          C.offsetHeight
        ),
        g = !1;
      try {
        g = "WebSocket" in window && "localStorage" in window;
      } catch (f) {}
      var U = document.getElementById("LL_ExtDIV");
      U
        ? (U.style.display = "block")
        : ((U = document.createElement("div")),
          U.setAttribute("id", "LL_ExtDIV"),
          (U.style.position = "absolute"),
          (U.style.top = "0"),
          (U.style.background = "#111"),
          (U.style.filter =
            "progid:DXImageTransform.Microsoft.Alpha(opacity=40)"),
          (U.style.opacity = "0.4"),
          (U.style.left = "0"),
          (U.style.width = g ? "100%" : "" + a + "px"),
          (U.style.height = g ? "100%" : "" + I + "px"),
          (U.style.zIndex = "10000"),
          (U.style.overflow = "hidden"),
          document.body.appendChild(U));
      var y = l ? 40 : 0,
        h = l ? 40 : 0,
        b = LL_CustomUI.commonFunctions.getInternetExplorerVersion(),
        w = document.getElementById("LL_InnerDIV");
      if (
        (w
          ? ((w.style.left = "" + (u - p - y) / 2 + "px"),
            (w.style.top = "" + Math.max(5, (m - _ - h) / 2 - 50) + "px"),
            (w.style.width = p + y + "px"),
            (w.style.height = _ + h + "px"),
            (w.style.display = "block"))
          : ((w = document.createElement("div")),
            w.setAttribute("id", "LL_InnerDIV"),
            w.setAttribute("align", "center"),
            (-1 != b && 6 == b) || LL_CustomUI.commonFunctions.isQuirksMode()
              ? ((w.style.position = "absolute"), window.scrollTo(0, 0))
              : (w.style.position = "fixed"),
            (w.style.left = "" + (u - p - y) / 2 + "px"),
            (w.style.top = "" + Math.max(5, (m - _ - h) / 2 - 50) + "px"),
            (w.style.overflow = "hidden"),
            (w.style.width = p + y + "px"),
            (w.style.height = _ + h + "px"),
            (w.style.textAlign = "center"),
            (w.style.zIndex = "1000000001"),
            document.body.appendChild(w)),
        (LL_Frames.frameOverflow_body = document.body.style.overflow),
        (LL_Frames.frameOverflow_html = C.style.overflow),
        (document.body.style.overflow = "hidden"),
        (C.style.overflow = "hidden"),
        s)
      ) {
        if (LL_Frames.frameUrl == o) return void (s.style.display = "block");
        LL_CustomUI.commonFunctions.removeNodes(s.id), (s = "");
      }
      (s = document.createElement("iframe")),
        s.setAttribute("id", e),
        s.setAttribute("name", e),
        s.setAttribute("src", o),
        (s.width = "" + p + "px"),
        (s.height = "" + _ + "px"),
        (s.frameBorder = 0),
        L || s.setAttribute("scrolling", "no"),
        d && s.setAttribute("allowTransparency", "true"),
        s.setAttribute(
          "style",
          "display: none; border: 0 none; position: absolute; overflow: hidden; background-color:transparent; top:" +
            y / 2 +
            "px; left:" +
            h / 2 +
            "px;"
        );
      var x = function () {
        document.getElementById(e).style.display = "block";
      };
      if (
        (s.attachEvent
          ? s.attachEvent("onload", x)
          : s.addEventListener("load", x, !1),
        document.getElementById("LL_InnerDIV").appendChild(s),
        (LL_Frames.frameUrl = o),
        d || (document.getElementById(e).style.backgroundColor = "white"),
        L && (document.getElementById(e).style.overflow = "auto"),
        l)
      ) {
        var P = document.getElementById("cancelImg_" + e);
        P ||
          ((P = document.createElement("img")),
          P.setAttribute("id", "cancelImg_" + e),
          P.setAttribute("name", "cancelImg_" + e),
          P.setAttribute(
            "src",
            "https://" +
              LL_Deployment.mainServerPath +
              "/webinterfaces/icb/client/resources/img/llclosebtn.png"
          ),
          P.setAttribute(
            "style",
            "display:none;border:0 none;position: absolute;background-color:transparent;z-index:10008;right:5px;top:5px;width:30px;height:30px;cursor:pointer;"
          ),
          document.getElementById("LL_InnerDIV").appendChild(P),
          setTimeout(function () {
            document.getElementById("cancelImg_" + e).style.display = "block";
          }, 1e3)),
          (P.onclick = function () {
            LL_Frames.killFrame(e);
          });
      }
    }
  }),
  (LL_Frames.killFrame = function (e) {
    LL_CustomUI.commonFunctions.removeNodes("LL_ExtDIV");
    var o = document.getElementById("LL_InnerDIV");
    o && ((o.style.display = "none"), (o = ""));
    var t = document.getElementById(e);
    t && ((t.style.display = "none"), (t = "")),
      (document.body.style.overflow = LL_Frames.frameOverflow_body),
      (document.documentElement.style.overflow = LL_Frames.frameOverflow_html);
  }),
  window.LL_CustomUI &&
    !LL_CustomUI.RedirectPopup &&
    ((LL_CustomUI.tempHref = ""),
    (LL_CustomUI.RedirectPopup = {}),
    (LL_CustomUI.RedirectPopup.modalMask =
      '<div id="LL_modal_mask" style="position:fixed; top:0; left:0; width:100%; height:100%; text-align:center; z-index: 99990; opacity:0.4;filter: alpha(opacity=40);background: black;"></div>'),
    (LL_CustomUI.RedirectPopup.windowHTML =
      '<div id="LL_redirect_popup" role="dialog" style="font-family: ' +
      LL_CustomUI.V4LLPanel_redirect_popup_font_family +
      ";font-size:" +
      LL_CustomUI.V4LLPanel_redirect_popup_text_font_size +
      "px; border: 1px solid #B6B6B6;background: #" +
      LL_CustomUI.V4LLPanel_redirect_popup_background +
      ';width: 280px;position: fixed;top: 23%;height: 120px;z-index: 99999;margin-left: -223px;text-align: center;left: 50%;border-radius: 9px;padding: 16px;padding-top:25px;"><span style="display:block;width:14px;height:14px;position:absolute;right:12px;top:11px;background:url(' +
      LL_CustomUI.img(LL_CustomUI.V4LLPanel_redirect_popup_cancel_background) +
      ') no-repeat;cursor:pointer;" id="redirect_cancel" role="button" aria-label="' +
      LL_CustomUI.ADA_V4LLPanel_CloseNavigatingAway_modal +
      '" tabindex="0"></span><span id="LL_redirect_title" style="padding: 10px;text-align: left;color: #' +
      LL_CustomUI.V4LLPanel_redirect_popup_text_color +
      ";margin-left: 13px;float: left;position: relative;margin-top: 6px;background:url(" +
      LL_CustomUI.img(LL_CustomUI.V4LLPanel_separator) +
      ') repeat-x;"><span aria-hidden="true">' +
      LL_CustomUI.takingOutsideText +
      '</span><a id="redirect_accept" style="color: #' +
      LL_CustomUI.V4LLPanel_redirect_popup_text_color +
      "; font-weight: bold;font-size: " +
      LL_CustomUI.V4LLPanel_redirect_popup_text_font_size +
      'px;" href="#" tabindex="0" aria-label="' +
      LL_CustomUI.ADA_V4LLPanel_takingOutsideText +
      '">' +
      LL_CustomUI.clickHereText +
      '</a>.</span><span hidden="true" style="display:none;" aria-hidden="false">' +
      LL_CustomUI.ADA_V4LLPanel_notconnected_poweredBy_modalEnd +
      "</span></div>"),
    (LL_CustomUI.RedirectPopup.show = function (e) {
      if (((LL_CustomUI.tempHref = e), null != LL_CustomUI.$("LL_modal_mask")))
        LL_CustomUI.$("LL_modal_mask").style.display = "block";
      else {
        var o = document.createElement("div");
        (o.innerHTML = LL_CustomUI.RedirectPopup.modalMask),
          document.body.appendChild(o),
          setTimeout(function () {
            LL_CustomUI.RedirectPopup.create();
          }, 100);
      }
      if (null != LL_CustomUI.$("LL_redirect_popup"))
        LL_CustomUI.$("LL_redirect_popup").style.display = "block";
      else {
        var t = document.createElement("div");
        (t.innerHTML = LL_CustomUI.RedirectPopup.windowHTML),
          document.body.appendChild(t);
      }
      LL_CustomUI.commonFunctions.doFocus("LL_redirect_popup");
    }),
    (LL_CustomUI.RedirectPopup.create = function () {
      LL_CustomUI.commonFunctions.listen(
        "click",
        LL_CustomUI.$("LL_modal_mask"),
        function () {
          LL_CustomUI.RedirectPopup.hide();
        }
      ),
        LL_CustomUI.commonFunctions.listen(
          "click",
          LL_CustomUI.$("redirect_cancel"),
          function () {
            LL_CustomUI.RedirectPopup.hide();
          }
        ),
        LL_CustomUI.commonFunctions.listen(
          "click",
          LL_CustomUI.$("redirect_accept"),
          function (e) {
            return (
              e.preventDefault && e.preventDefault(),
              e.stopPropagation && e.stopPropagation(),
              e.stopImmediatePropagation && e.stopImmediatePropagation(),
              (e.cancelBubble = !0),
              (e.returnValue = !1),
              window.open(LL_CustomUI.tempHref, "_blank"),
              LL_CustomUI.RedirectPopup.hide(),
              !1
            );
          }
        );
    }),
    (LL_CustomUI.RedirectPopup.hide = function () {
      (LL_CustomUI.$("LL_modal_mask").style.display = "none"),
        (LL_CustomUI.$("LL_redirect_popup").style.display = "none");
    })),
  window.LL_CustomUI &&
    !LL_CustomUI.WaitingPopup &&
    ((LL_CustomUI.WaitingPopup = {}),
    (LL_CustomUI.WaitingPopup.windowHTML =
      '<div id="V4LLPanel_waitingPopup" style="display:none;oapcity:0;padding-bottom: 30px; top: 23%; left: 50%; margin-left: -155px; text-align: center; width: 310px;background-color: #' +
      LL_CustomUI.V4LLPanel_WaitingWindowBackgroundColor +
      ';border-radius: 5px;-moz-border-radius: 5px;-webkit-border-radius: 5px;box-shadow: 0 1px 16px #bebebe; border: 1px solid #aeaeae; padding: 3px; position: absolute;"><div style="margin-bottom: 40px; width: 303px; height: 38px; position: relative; left: 0; top: 0; margin-left: 4px; background: url(' +
      LL_CustomUI.img(LL_CustomUI.V4LLPanel_WaitingWindowSeparator) +
      ') repeat-x left bottom !important;" class="LLV4Separator"><div style="margin:5px 16px 0 3px; width: 23px; height: 24px; float: left; background:url(' +
      LL_CustomUI.img(LL_CustomUI.V4LLPanel_WaitingWindowLogo) +
      ') no-repeat !important;" class="LLV4Logo"><div id="V4LLPanel_close_waiting_popup" style="position: absolute; width:11px; height:10px; cursor:pointer; margin:2px 2px 0 0; right: 0; background:url(' +
      LL_CustomUI.img(LL_CustomUI.V4LLPanel_WaitingWindowClose) +
      ') no-repeat !important;"></div></div><span style="position:absolute; top: 8px; left: 34px; font-family:' +
      LL_CustomUI.V4LLPanel_WaitingWindowHeadlineTextFontFamily +
      " !important; font-size: " +
      LL_CustomUI.V4LLPanel_WaitingWindowHeadlineTextFontSize +
      "px; color: #" +
      LL_CustomUI.V4LLPanel_WaitingWindowHeadlineTextFontColor +
      ' !important;" class="V4LLTitleText">' +
      LL_CustomUI.V4LLPanel_WaitingWindowHeadlineText +
      '</span></div><span style="color: #' +
      LL_CustomUI.V4LLPanel_WaitingWindowBodyTextFontColor +
      "; font-size: " +
      LL_CustomUI.V4LLPanel_WaitingWindowBodyTextFontSize +
      "px; font-family: " +
      LL_CustomUI.V4LLPanel_WaitingWindowBodyTextFontFamily +
      ';">' +
      LL_CustomUI.V4LLPanel_WaitingWindowBodyText +
      '</span><img src="' +
      LL_CustomUI.img(LL_CustomUI.V4LLPanel_WaitingWindowPreloader) +
      '" alt="' +
      LL_CustomUI.V4LLPanel_WaitingWindowBodyText_alt +
      '" style="margin:35px 0 60px 0;" /><div style="clear:both;"></div></div>'),
    (LL_CustomUI.WaitingPopup.show = function () {
      if (null != LL_CustomUI.$("V4LLPanel_waitingPopup"))
        LL_CustomUI.WaitingPopup.openClose();
      else {
        var e = document.createElement("div");
        (e.innerHTML = LL_CustomUI.WaitingPopup.windowHTML),
          document.body.appendChild(e);
      }
      LL_CustomUI.commonFunctions.listen(
        "click",
        LL_CustomUI.$("V4LLPanel_close_waiting_popup"),
        function () {
          LL_CustomUI.WaitingPopup.hide();
        }
      );
    }),
    (LL_CustomUI.WaitingPopup.hide = function () {
      LL_CustomUI.$("V4LLPanel_waitingPopup") &&
        ((LL_CustomUI.$("V4LLPanel_waitingPopup").style.opacity = 0),
        setTimeout(function () {
          LL_CustomUI.$("V4LLPanel_waitingPopup").style.display = "none";
        }, 1500));
    }),
    (LL_CustomUI.WaitingPopup.openClose = function () {
      (LL_CustomUI.$("V4LLPanel_waitingPopup").style.display = "block"),
        setTimeout(function () {
          LL_CustomUI.$("V4LLPanel_waitingPopup").style.opacity = 0.9;
        }, 1030),
        setTimeout(function () {
          LL_CustomUI.WaitingPopup.hide();
        }, 3030);
    })),
  window.LL_CustomUI &&
    !LL_CustomUI.ErrorPopup &&
    ((LL_CustomUI.ErrorPopup = {}),
    (LL_CustomUI.ErrorPopup.modalMask =
      '<div id="LL_modal_mask" style="position:absolute; top:0; left:0; width:100%; height:100%; text-align:center; z-index: 900; opacity:0.4;filter: alpha(opacity=40);background: black;"></div>'),
    (LL_CustomUI.ErrorPopup.windowHTML =
      '<div id="LL_error_popup" style="font-family: Trebuchet MS;font-size:12px; border: 1px solid #B6B6B6;background: #603030;width: 280px;position: absolute;top: 23%;min-height: 120px;z-index: 1000;margin-left: -223px;text-align: center;left: 50%;border-radius: 9px;padding: 16px;padding-top:25px;"><span style="display:block;width:14px;height:14px;position:absolute;right:12px;top:11px;background:url(' +
      LL_CustomUI.img(
        "/webinterfaces/icb/client/resources/img/LLICBClose.png"
      ) +
      ') no-repeat;cursor:pointer;" id="LL_error_cancel"></span><div id="LL_error_message" style="width:240px; word-wrap: break-word; padding: 10px;text-align: left;color: #C8C5D1;margin-left: 13px;float: left;position: relative;margin-top: 6px;background:url(' +
      LL_CustomUI.img(
        "/webinterfaces/icb/client/resources/img/llICBSepLine.png"
      ) +
      ') repeat-x;"></div></div>'),
    (LL_CustomUI.ErrorPopup.isVisible = function () {
      var e = LL_jQuery;
      return (
        e("#LL_error_popup").length > 0 &&
        "none" != e("#LL_error_popup").css("display")
      );
    }),
    (LL_CustomUI.ErrorPopup.show = function (e) {
      var o = LL_jQuery;
      (LL_CustomUI.SyncLossPopup && LL_CustomUI.SyncLossPopup.isVisible()) ||
        (o("#LL_modal_mask").length > 0
          ? o("#LL_modal_mask").show()
          : o("body").append(LL_CustomUI.ErrorPopup.modalMask),
        o("#LL_error_popup").length > 0
          ? o("#LL_error_popup").show()
          : o("body").append(LL_CustomUI.ErrorPopup.windowHTML),
        o("#LL_error_message").html(e),
        o("#LL_modal_mask").live("click", function () {
          LL_CustomUI.ErrorPopup.hide();
        }),
        o("#LL_error_cancel").on("click", function () {
          LL_CustomUI.ErrorPopup.hide();
        }));
    }),
    (LL_CustomUI.ErrorPopup.hide = function () {
      var e = LL_jQuery;
      e("#LL_modal_mask").hide(), e("#LL_error_popup").hide();
    })),
  window.LL_CustomUI &&
    !LL_CustomUI.SyncLossPopup &&
    ((LL_CustomUI.SyncLossPopup = {}),
    (LL_CustomUI.SyncLossPopup.syncLossText = LL_CustomUI.syncIsLostText),
    (LL_CustomUI.SyncLossPopup.modalMask =
      '<div id="LL_modal_mask_nc" style="position:absolute; top:0; left:0; width:100%; height:100%; text-align:center; z-index: 900; opacity:0.4;filter: alpha(opacity=40);background: black;"></div>'),
    (LL_CustomUI.SyncLossPopup.windowHTML =
      '<div id="syncIsLost" style="font-family:Trebuchet MS;font-size:14px; border: 1px solid #B6B6B6;background: #2F2F2F;width: 280px;position: absolute;top: 23%;min-height:177px;z-index:10000;margin-left: -223px;text-align: center;left: 50%;border-radius: 9px;padding: 16px;padding-top:25px;"><span style="display:block;width:14px;height:14px;position:absolute;right:12px;top:11px;background:url(' +
      LL_CustomUI.img(
        "/webinterfaces/icb/client/resources/img/LLICBClose.png"
      ) +
      ') no-repeat;cursor:pointer;" id="LL_syncloss_cancel"></span><div id="syncIsLost_Text" style="width:240px; word-wrap: break-word; padding: 10px;text-align: left;color:#C8C5D1;margin-left: 13px;float: left;position: relative;margin-top: 6px;background:url(' +
      LL_CustomUI.img(
        "/webinterfaces/icb/client/resources/img/llICBSepLine.png"
      ) +
      ') repeat-x;"></div></div>'),
    (LL_CustomUI.SyncLossPopup.isVisible = function () {
      var e = LL_jQuery;
      return (
        e("#syncIsLost").length > 0 && "none" != e("#syncIsLost").css("display")
      );
    }),
    (LL_CustomUI.SyncLossPopup.show = function (e, o) {
      var t = LL_jQuery;
      LL_CustomUI.ErrorPopup &&
        LL_CustomUI.ErrorPopup.isVisible() &&
        LL_CustomUI.ErrorPopup.hide(),
        t("#LL_modal_mask_nc").length > 0
          ? t("#LL_modal_mask_nc").show()
          : t("body").append(LL_CustomUI.SyncLossPopup.modalMask),
        t("#syncIsLost").length > 0
          ? t("#syncIsLost").show()
          : t("body").append(LL_CustomUI.SyncLossPopup.windowHTML),
        t("#syncIsLost_Text").html(
          LL_CustomUI.SyncLossPopup.syncLossText +
            "<br /><br />Debug data: " +
            (e
              ? " (ERR_NO_SCRIPT, last known URL: " + o + ")"
              : " (ERR_NO_RESPONSE, URL: " + o + ")")
        ),
        t("#LL_syncloss_cancel").on("click", function () {
          LL_CustomUI.SyncLossPopup.hide();
        });
    }),
    (LL_CustomUI.SyncLossPopup.hide = function () {
      var e = LL_jQuery;
      e("#LL_modal_mask_nc").hide(), e("#syncIsLost").hide();
    })),
  window.LL_CustomUI &&
    !LL_CustomUI.SessionEndedPopup &&
    ((LL_CustomUI.SessionEndedPopup = {}),
    (LL_CustomUI.SessionEndedPopup.FEEDBACK_URL =
      window.LL_Deployment && LL_Deployment.feedbackUrl
        ? LL_Deployment.feedbackUrl
        : ""),
    (LL_CustomUI.SessionEndedPopup.show = function () {
      var e = LL_CustomUI.commonFunctions.getViewport(),
        o = e[0],
        t =
          '<div id="LL_sessionEnded_popup" role="dialog" aria-live="assertive" style="box-shadow: 0 1px 16px #bebebe; font-family: Trebuchet MS; font-size: 12px; border: 1px solid #B6B6B6; position: fixed; _position: absolute; top: 28%; left: 40%; height: 300px; width: 650px; z-index: 1000; margin-left: -223px; text-align: center; padding: 16px; padding-top: 25px; display: none; background-color: #' +
          LL_CustomUI.LL_sessionEnded_popup_background_color +
          ';"><div id="LL_sessionEndedPopupInnerWrapper" style="position: relative;float: left;width: 368px;height: 248px;text-align: left;margin: 69px 0 0 40px;"><span id="LL_sessionEnded_title" style="_line-height: 28px; margin-bottom: 18px; font-family: ' +
          LL_CustomUI.LL_sessionEnded_title_font_family +
          ";font-weight: normal;font-size: " +
          LL_CustomUI.LL_sessionEnded_title_font_size +
          "px;color: #" +
          LL_CustomUI.LL_sessionEnded_title_font_color +
          ';display:block;">' +
          LL_CustomUI.LL_sessionEnded_window_title +
          '</span><span id="LL_sessionEnded_description" style="font-family: ' +
          LL_CustomUI.LL_sessionEnded_description_font_family +
          ";  font-weight: normal;  font-size: " +
          LL_CustomUI.LL_sessionEnded_description_font_size +
          "px; color: #" +
          LL_CustomUI.LL_sessionEnded_description_font_color +
          '; display:block;margin-bottom:15px;">' +
          LL_CustomUI.v3CloseWindowNotice +
          '</span><div id="LL_sessionEnded_Close_Modal_Window" style="background: url(' +
          LL_CustomUI.img(LL_CustomUI.LL_sessionEnded_popup_close_button) +
          ") no-repeat; width: " +
          LL_CustomUI.LL_sessionEnded_Close_Modal_Window_button_width +
          "px; padding-top:8px;padding-bottom:12px; font-family: " +
          LL_CustomUI.LL_sessionEnded_Close_Modal_Window_button_font_family +
          "; font-weight: bold; font-size: " +
          LL_CustomUI.LL_sessionEnded_Close_Modal_Window_button_font_size +
          "px; color: #" +
          LL_CustomUI.LL_CloseModal_Link_buttom_color +
          '; text-align:center; margin-top:10px; text-align: center; display:none;"><a id="LL_CloseModal_Link" tabindex="0" aria-label="' +
          LL_CustomUI.ADA_V4LLPanel_closeSessionEndWindowLink +
          '" href="javascript:void(0);" style="color:#' +
          LL_CustomUI.LL_CloseModal_Link_buttom_color +
          ';text-decoration:none;"><span aria-hidden="true">' +
          LL_CustomUI.closeSessionEndWindowLink_text +
          '</span></a></div><div id="LL_sessionEnded_feedback" style="font-family: ' +
          LL_CustomUI.LL_sessionEnded_feedback_font_family +
          ";  font-weight: bold;  font-size: " +
          LL_CustomUI.LL_sessionEnded_feedback_font_size +
          "px; color: #" +
          LL_CustomUI.LL_Feedback_Button_color +
          '; margin-top:10px; text-align: left; display:none;"><a id="LL_Feedback_Button" tabindex="0" aria-label="' +
          LL_CustomUI.ADA_V4LLPanel_Feedback +
          '" href="javascript:void(0);" style="color:#' +
          LL_CustomUI.LL_Feedback_Button_color +
          ';"><span aria-hidden="true">' +
          LL_CustomUI.LL_sessionEnded_window_leave_feedback_text +
          '</span></a></div></div><img id="LL_sessionEnded_cancel" tabindex="0" alt="' +
          LL_CustomUI.ADA_V4LLPanel_closeSessionEndWindowLink +
          '" aria-label="' +
          LL_CustomUI.ADA_V4LLPanel_closeSessionEndWindowLink +
          '" role="button" style="display:block;  width:37px;  height:37px;  position:absolute;  right:-13px;  top:-16px; cursor:pointer;" src="' +
          LL_CustomUI.img(LL_CustomUI.LL_sessionEnded_popup_cancel_button) +
          '" /><span id="LL_sessionEnded_clock" style="display:block; width:200px; height:300px; position: absolute; padding: 0px; right:8%; top: 15%; background: url(' +
          LL_CustomUI.img(LL_CustomUI.LL_sessionEnded_popup_image) +
          ') no-repeat;" ></span></div>';
      if (!LL_CustomUI.$("LL_sessionEnded_popup")) {
        var n = document.createElement("DIV");
        (n.innerHTML = t), document.body.appendChild(n);
      }
      (LL_CustomUI.$("LL_sessionEnded_popup").style.display = "block"),
        LL_CustomUI.$("LL_sessionEnded_cancel") &&
          LL_CustomUI.commonFunctions.listen(
            "click",
            LL_CustomUI.$("LL_sessionEnded_cancel"),
            function () {
              LL_CustomUI.SessionEndedPopup.hide();
            }
          ),
        LL_CustomUI.SessionEndedPopup.detectMobileBrowser() || 700 > o
          ? ((LL_CustomUI.$("LL_sessionEndedPopupInnerWrapper").style.width =
              "232px"),
            (LL_CustomUI.$("LL_sessionEndedPopupInnerWrapper").style.height =
              "278px"),
            (LL_CustomUI.$("LL_sessionEndedPopupInnerWrapper").style.marginTop =
              "20px"),
            (LL_CustomUI.$(
              "LL_sessionEndedPopupInnerWrapper"
            ).style.marginLeft = "20px"),
            (LL_CustomUI.$("LL_sessionEnded_title").style.lineHeight = "33px"),
            (LL_CustomUI.$("LL_sessionEnded_Close_Modal_Window").style.display =
              "block"),
            (LL_CustomUI.$("LL_sessionEnded_popup").style.width = "250px"),
            (LL_CustomUI.$("LL_sessionEnded_popup").style.left = "57%"),
            (LL_CustomUI.$("LL_sessionEnded_popup").style.marginLeft =
              "-165px"),
            (LL_CustomUI.$("LL_sessionEnded_description").style.left = "0"),
            (LL_CustomUI.$("LL_sessionEnded_description").style.lineHeight =
              "25px"),
            (LL_CustomUI.$("LL_sessionEnded_Close_Modal_Window").style.left =
              "39%"),
            (LL_CustomUI.$("LL_sessionEnded_clock").style.display = "none"),
            (LL_CustomUI.$("LL_sessionEnded_feedback").style.top = "90%"),
            (LL_CustomUI.$("LL_sessionEnded_feedback").style.left = "25%"),
            LL_CustomUI.$("LL_sessionEnded_Close_Modal_Window") &&
              LL_CustomUI.commonFunctions.listen(
                "click",
                LL_CustomUI.$("LL_sessionEnded_Close_Modal_Window"),
                function () {
                  LL_CustomUI.SessionEndedPopup.hide();
                }
              ))
          : ((LL_CustomUI.$("LL_sessionEndedPopupInnerWrapper").style.width =
              "368px"),
            (LL_CustomUI.$("LL_sessionEndedPopupInnerWrapper").style.height =
              "248px"),
            (LL_CustomUI.$("LL_sessionEndedPopupInnerWrapper").style.marginTop =
              "69px"),
            (LL_CustomUI.$(
              "LL_sessionEndedPopupInnerWrapper"
            ).style.marginLeft = "40px"),
            (LL_CustomUI.$("LL_sessionEnded_title").style.lineHeight =
              "inherit"),
            (LL_CustomUI.$("LL_sessionEnded_description").style.left = "auto"),
            (LL_CustomUI.$("LL_sessionEnded_description").style.lineHeight =
              "inherit"),
            (LL_CustomUI.$("LL_sessionEnded_Close_Modal_Window").style.display =
              "none"),
            (LL_CustomUI.$("LL_sessionEnded_popup").style.width = "650px"),
            (LL_CustomUI.$("LL_sessionEnded_popup").style.left = "40%"),
            (LL_CustomUI.$("LL_sessionEnded_popup").style.marginLeft =
              "-223px"),
            (LL_CustomUI.$("LL_sessionEnded_clock").style.display = "block")),
        LL_CustomUI.SessionEndedPopup.FEEDBACK_URL
          ? ((LL_CustomUI.$("LL_sessionEnded_feedback").style.display =
              "block"),
            LL_CustomUI.$("LL_Feedback_Button") &&
              (LL_CustomUI.commonFunctions.listen(
                "click",
                LL_CustomUI.$("LL_Feedback_Button"),
                function () {
                  LL_CustomUI.SessionEndedPopup.openFeedback();
                }
              ),
              (LL_CustomUI.$("LL_Feedback_Button").style.display = "block")))
          : (LL_CustomUI.$("LL_sessionEnded_feedback").style.display = "none"),
        LL_CustomUI.commonFunctions.doFocus("LL_sessionEnded_popup");
    }),
    (LL_CustomUI.SessionEndedPopup.hide = function () {
      LL_CustomUI.$("LL_sessionEnded_popup") &&
        (LL_CustomUI.$("LL_sessionEnded_popup").style.display = "none");
    }),
    (LL_CustomUI.SessionEndedPopup.detectMobileBrowser = function () {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }),
    (LL_CustomUI.SessionEndedPopup.setFeedbackURL = function (e) {
      LL_CustomUI.SessionEndedPopup.FEEDBACK_URL = e;
    }),
    (LL_CustomUI.SessionEndedPopup.openFeedback = function () {
      LL_CustomUI.$("LL_Feedback_Button") &&
        (LL_CustomUI.$("LL_Feedback_Button").style.display = "none");
      var e = (screen.width - 650) / 2,
        o = screen.height < 800 ? 0 : (screen.height - 700) / 2 - 50,
        t = window.open(
          LL_CustomUI.SessionEndedPopup.FEEDBACK_URL,
          "LLFeedback",
          "toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,titlebar=0,status=0,width=650,height=700,top=" +
            o +
            ",left=" +
            e
        );
      try {
        (t.opener = window), t.focus();
      } catch (n) {}
    }));
if (
  ((LL_CustomUI.unsupportedService = function () {
    window.LL_BR_Core &&
      !LL_BR_Core.ICBSupported &&
      "none" == LL_BR_Core.ACBSupported &&
      "new" == LL_CustomUI.V4PanelState &&
      window.LL_CustomUI &&
      ((LL_CustomUI.V4Panel = {}),
      (LL_CustomUI.V4Panel.notSupportedEnvWindow = ""),
      (LL_CustomUI.V4Panel.initialHandle = ""),
      (LL_CustomUI.V4Panel.isOpen = !1),
      (LL_CustomUI.V4Panel.isPreviewMode = !1),
      (LL_CustomUI.V4Panel.notSupportedEnvironmentWindowHeight = 170),
      (LL_CustomUI.V4Panel.eventWritten = !1),
      (LL_CustomUI.V4Panel.moreInfoRow = ""),
      "" != LL_CustomUI.V4LLPanel_MoreInfo
        ? (LL_CustomUI.V4Panel.moreInfoRow =
            '<a id="V4LLPanel_moreInfoLink" style="position: absolute; bottom:10px; right:20px; font-family: ' +
            LL_CustomUI.V4LLPanel_notSupportedEnvText_notSupported_font_family +
            " !important; font-size: " +
            LL_CustomUI.V4LLPanel_moreInfoLink_notSupported_font_size +
            "px !important; color: #" +
            LL_CustomUI.V4LLPanel_moreInfoLink_notSupported_color +
            ' !important;" href="' +
            LL_CustomUI.V4LLPanel_MoreInfo +
            '" target="_blank">' +
            LL_CustomUI.V4LLPanel_notSupported_moreInfoText +
            "</a>")
        : (LL_CustomUI.V4Panel.moreInfoRow = ""),
      (LL_CustomUI.V4Panel.windowHTML =
        '<div id="V4LLPanel_HintBlock" style="' +
        LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
          LL_CustomUI.V4LLPanel_position,
          LL_CustomUI.V4LLPanel_position_offset,
          "true"
        ) +
        " background: url(" +
        LL_CustomUI.img(
          LL_CustomUI.V4LLPanel_HintBlock_notSupported_background
        ) +
        ") no-repeat !important; width: " +
        LL_CustomUI.V4LLPanel_HintBlock_notSupported_width +
        "px !important; height: " +
        LL_CustomUI.V4LLPanel_HintBlock_notSupported_height +
        'px !important; z-index:10000; position: fixed; _position:absolute; cursor:pointer; visibility:hidden;" onmouseout="LL_CustomUI.V4Panel.hint.hide();"><span id="V4LLPanel_Hint_FirstLine" style="display: block; text-align: center; font-size: ' +
        LL_CustomUI.V4LLPanel_HintBlock_FirstLineText_font_size +
        "px; font-family: " +
        LL_CustomUI.V4LLPanel_HintBlock_FirstLineText_font_family +
        "; color: #" +
        LL_CustomUI.V4LLPanel_HintBlock_FirstLineText_color +
        "; width: 157px; font-style: " +
        LL_CustomUI.V4LLPanel_HintBlock_FirstLineText_font_style +
        " ; font-weight: " +
        LL_CustomUI.V4LLPanel_HintBlock_FirstLineText_font_weight +
        '; margin-top: 13px;">' +
        LL_CustomUI.V4LLPanel_HintBlock_FirstLineText +
        '</span><span id="V4LLPanel_Hint_SecondLine" style="display: block; text-align: center; font-size: ' +
        LL_CustomUI.V4LLPanel_HintBlock_SecondLineText_font_size +
        "px; font-family: " +
        LL_CustomUI.V4LLPanel_HintBlock_SecondLineText_font_family +
        "; color: #" +
        LL_CustomUI.V4LLPanel_HintBlock_SecondLineText_color +
        "; font-weight: " +
        LL_CustomUI.V4LLPanel_HintBlock_SecondLineText_font_weight +
        " ; font-style: " +
        LL_CustomUI.V4LLPanel_HintBlock_SecondLineText_font_style +
        '; width: 157px;">' +
        LL_CustomUI.V4LLPanel_HintBlock_SecondLineText +
        "</span></div>"),
      LL_CustomUI.commonFunctions.isLeftLocation()
        ? LL_CustomUI.commonFunctions.isAnyIE()
          ? (LL_CustomUI.V4Panel.windowHTML +=
              '<div id="V4LLPanel_GenericToggler" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
              LL_CustomUI.img(
                LL_CustomUI.V4LLPanel_GenericToggler_notSupported_background
              ) +
              ") no-repeat !important; width: " +
              LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
              "px !important; height: " +
              LL_CustomUI.V4LLPanel_GenericToggler_notSupported_width +
              "px !important; " +
              LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                LL_CustomUI.V4LLPanel_position,
                LL_CustomUI.V4LLPanel_position_offset
              ) +
              '" onclick="LL_CustomUI.V4Panel.expand()" onmouseout="LL_CustomUI.V4Panel.hint.hide();" onmouseover="LL_CustomUI.V4Panel.hint.show();"><span id="V4LLPanel_InnerTitle" tabindex="0" role="button" aria-label="' +
              LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow +
              '" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg); -webkit-transform:rotate(-90deg); -moz-transform:rotate(-90deg); -o-transform: rotate(-90deg); position:absolute; white-space:nowrap; bottom: 40px; left: 9px; font-family: ' +
              LL_CustomUI.V4LLPanel_Title_notSupported_font_family +
              " !important; font-size: " +
              LL_CustomUI.V4LLPanel_Title_notSupported_font_size +
              "px !important; color: #" +
              LL_CustomUI.V4LLPanel_Title_notSupported_color +
              ' !important;" class="V4LLTitleText">' +
              LL_CustomUI.V4LLPanel_notSupported_header_text +
              '</span><div id="V4LLPanel_InnerLogo" style="margin: 124px 10px 0 4px; width: 23px; height: 24px; float: left; background: url(' +
              LL_CustomUI.img(LL_CustomUI.V4LLPanel_notSupported_logo) +
              ') no-repeat !important; _margin-left: 5px !important;"></div></div>')
          : LL_CustomUI.commonFunctions.isSafari()
          ? (LL_CustomUI.V4Panel.windowHTML +=
              '<div id="V4LLPanel_GenericToggler" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
              LL_CustomUI.img(
                LL_CustomUI.V4LLPanel_GenericToggler_notSupported_background
              ) +
              ") no-repeat !important; width: " +
              LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
              "px !important; height: " +
              LL_CustomUI.V4LLPanel_GenericToggler_notSupported_width +
              "px !important; " +
              LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                LL_CustomUI.V4LLPanel_position,
                LL_CustomUI.V4LLPanel_position_offset
              ) +
              '" onclick="LL_CustomUI.V4Panel.expand()" onmouseout="LL_CustomUI.V4Panel.hint.hide();" onmouseover="LL_CustomUI.V4Panel.hint.show();"><span id="V4LLPanel_InnerTitle" tabindex="0" role="button" aria-label="' +
              LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow +
              '" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg) translate(0, 100%); -webkit-transform:rotate(-90deg) translate(0, 100%); -moz-transform:rotate(-90deg) translate(0, 100%); -o-transform: rotate(-90deg) translate(0, 100%); position:absolute; white-space:nowrap; bottom: 40px; left: 8px; -moz-transform-origin: 0% 100%; -o-transform-origin: 0% 100%; -webkit-transform-origin: 0% 100%; transform-origin: left top 0; font-family: ' +
              LL_CustomUI.V4LLPanel_Title_notSupported_font_family +
              " !important; font-size: " +
              LL_CustomUI.V4LLPanel_Title_notSupported_font_size +
              "px !important; color: #" +
              LL_CustomUI.V4LLPanel_Title_notSupported_color +
              ' !important;" class="V4LLTitleText">' +
              LL_CustomUI.V4LLPanel_notSupported_header_text +
              '</span><div id="V4LLPanel_InnerLogo" style="margin: 124px 10px 0 4px; width: 23px; height: 24px; float: left; background: url(' +
              LL_CustomUI.img(LL_CustomUI.V4LLPanel_notSupported_logo) +
              ') no-repeat !important; _margin-left: 5px !important;"></div></div>')
          : (LL_CustomUI.V4Panel.windowHTML +=
              '<div id="V4LLPanel_GenericToggler" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
              LL_CustomUI.img(
                LL_CustomUI.V4LLPanel_GenericToggler_notSupported_background
              ) +
              ") no-repeat !important; width: " +
              LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
              "px !important; height: " +
              LL_CustomUI.V4LLPanel_GenericToggler_notSupported_width +
              "px !important; " +
              LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                LL_CustomUI.V4LLPanel_position,
                LL_CustomUI.V4LLPanel_position_offset
              ) +
              '" onclick="LL_CustomUI.V4Panel.expand()" onmouseout="LL_CustomUI.V4Panel.hint.hide();" onmouseover="LL_CustomUI.V4Panel.hint.show();"><span id="V4LLPanel_InnerTitle" tabindex="0" role="button" aria-label="' +
              LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow +
              '" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg) translate(0, 100%); -webkit-transform:rotate(-90deg) translate(0, 100%); -moz-transform:rotate(-90deg) translate(0, 100%); -o-transform: rotate(-90deg) translate(0, 100%); position:absolute; white-space:nowrap; bottom: 28px; left: 8px; -moz-transform-origin: 0% 100%; -o-transform-origin: 0% 100%; -webkit-transform-origin: 0% 100%; transform-origin: left top 0; font-family: ' +
              LL_CustomUI.V4LLPanel_Title_notSupported_font_family +
              " !important; font-size: " +
              LL_CustomUI.V4LLPanel_Title_notSupported_font_size +
              "px !important; color: #" +
              LL_CustomUI.V4LLPanel_Title_notSupported_color +
              ' !important;" class="V4LLTitleText">' +
              LL_CustomUI.V4LLPanel_notSupported_header_text +
              '</span><div id="V4LLPanel_InnerLogo" style="margin: 124px 10px 0 4px; width: 23px; height: 24px; float: left; background: url(' +
              LL_CustomUI.img(LL_CustomUI.V4LLPanel_notSupported_logo) +
              ') no-repeat !important; _margin-left: 5px !important;"></div></div>')
        : LL_CustomUI.commonFunctions.isRightLocation()
        ? LL_CustomUI.commonFunctions.isAnyIE()
          ? (LL_CustomUI.V4Panel.windowHTML +=
              '<div id="V4LLPanel_GenericToggler" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
              LL_CustomUI.img(
                LL_CustomUI.V4LLPanel_GenericToggler_notSupported_background
              ) +
              ") no-repeat !important; width: " +
              LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
              "px !important; height: " +
              LL_CustomUI.V4LLPanel_GenericToggler_notSupported_width +
              "px !important; " +
              LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                LL_CustomUI.V4LLPanel_position,
                LL_CustomUI.V4LLPanel_position_offset
              ) +
              '" onclick="LL_CustomUI.V4Panel.expand()" onmouseout="LL_CustomUI.V4Panel.hint.hide();" onmouseover="LL_CustomUI.V4Panel.hint.show();"><span id="V4LLPanel_InnerTitle" tabindex="0" role="button" aria-label="' +
              LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow +
              '" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg); -webkit-transform:rotate(-90deg); -moz-transform:rotate(-90deg); -o-transform: rotate(-90deg); position:absolute; white-space: nowrap; bottom: 45px; left: 14px; font-family: ' +
              LL_CustomUI.V4LLPanel_Title_notSupported_font_family +
              " !important; font-size: " +
              LL_CustomUI.V4LLPanel_Title_notSupported_font_size +
              "px !important; color: #" +
              LL_CustomUI.V4LLPanel_Title_notSupported_color +
              ' !important;" class="V4LLTitleText">' +
              LL_CustomUI.V4LLPanel_notSupported_header_text +
              '</span><div id="V4LLPanel_InnerLogo" style="margin: 124px 10px 0 9px; width: 23px; height: 24px; float: left; background: url(' +
              LL_CustomUI.img(LL_CustomUI.V4LLPanel_notSupported_logo) +
              ') no-repeat !important; _margin-left: 5px !important;"></div></div>')
          : LL_CustomUI.commonFunctions.isSafari()
          ? (LL_CustomUI.V4Panel.windowHTML +=
              '<div id="V4LLPanel_GenericToggler" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
              LL_CustomUI.img(
                LL_CustomUI.V4LLPanel_GenericToggler_notSupported_background
              ) +
              ") no-repeat !important; width: " +
              LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
              "px !important; height: " +
              LL_CustomUI.V4LLPanel_GenericToggler_notSupported_width +
              "px !important; " +
              LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                LL_CustomUI.V4LLPanel_position,
                LL_CustomUI.V4LLPanel_position_offset
              ) +
              '" onclick="LL_CustomUI.V4Panel.expand()" onmouseout="LL_CustomUI.V4Panel.hint.hide();" onmouseover="LL_CustomUI.V4Panel.hint.show();"><span id="V4LLPanel_InnerTitle" tabindex="0" role="button" aria-label="' +
              LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow +
              '" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg) translate(0, 100%); -webkit-transform:rotate(-90deg) translate(0, 100%); -moz-transform:rotate(-90deg) translate(0, 100%); -o-transform: rotate(-90deg) translate(0, 100%); position:absolute; white-space: nowrap; bottom: 40px; left: 8px; -moz-transform-origin: 0% 100%; -o-transform-origin: 0% 100%; -webkit-transform-origin: 0% 100%; transform-origin: left top 0; font-family: ' +
              LL_CustomUI.V4LLPanel_Title_notSupported_font_family +
              " !important; font-size: " +
              LL_CustomUI.V4LLPanel_Title_notSupported_font_size +
              "px !important; color: #" +
              LL_CustomUI.V4LLPanel_Title_notSupported_color +
              ' !important;" class="V4LLTitleText">' +
              LL_CustomUI.V4LLPanel_notSupported_header_text +
              '</span><div id="V4LLPanel_InnerLogo" style="margin: 124px 10px 0 9px; width: 23px; height: 24px; float: left; background: url(' +
              LL_CustomUI.img(LL_CustomUI.V4LLPanel_notSupported_logo) +
              ') no-repeat !important; _margin-left: 5px !important;"></div></div>')
          : (LL_CustomUI.V4Panel.windowHTML +=
              '<div id="V4LLPanel_GenericToggler" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
              LL_CustomUI.img(
                LL_CustomUI.V4LLPanel_GenericToggler_notSupported_background
              ) +
              ") no-repeat !important; width: " +
              LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
              "px !important; height: " +
              LL_CustomUI.V4LLPanel_GenericToggler_notSupported_width +
              "px !important; " +
              LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                LL_CustomUI.V4LLPanel_position,
                LL_CustomUI.V4LLPanel_position_offset
              ) +
              '" onclick="LL_CustomUI.V4Panel.expand()" onmouseout="LL_CustomUI.V4Panel.hint.hide();" onmouseover="LL_CustomUI.V4Panel.hint.show();"><span id="V4LLPanel_InnerTitle" tabindex="0" role="button" aria-label="' +
              LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow +
              '" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg); -webkit-transform:rotate(-90deg); -moz-transform:rotate(-90deg); -o-transform: rotate(-90deg); position:absolute; white-space: nowrap; bottom: 28px; left: 8px; transform-origin: left top 0; -moz-transform-origin: left top; -o-transform-origin: left top 0; -webkit-transform-origin: left top 0; font-family: ' +
              LL_CustomUI.V4LLPanel_Title_notSupported_font_family +
              " !important; font-size: " +
              LL_CustomUI.V4LLPanel_Title_notSupported_font_size +
              "px !important; color: #" +
              LL_CustomUI.V4LLPanel_Title_notSupported_color +
              ' !important;" class="V4LLTitleText">' +
              LL_CustomUI.V4LLPanel_notSupported_header_text +
              '</span><div id="V4LLPanel_InnerLogo" style="margin: 124px 10px 0 9px; width: 23px; height: 24px; float: left; background: url(' +
              LL_CustomUI.img(LL_CustomUI.V4LLPanel_notSupported_logo) +
              ') no-repeat !important; _margin-left: 5px !important;"></div></div>')
        : (LL_CustomUI.V4Panel.windowHTML +=
            '<div id="V4LLPanel_GenericToggler" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
            LL_CustomUI.img(
              LL_CustomUI.V4LLPanel_GenericToggler_notSupported_background
            ) +
            ") no-repeat !important; width: " +
            LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
            "px !important; height: " +
            LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
            "px !important; " +
            LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
              LL_CustomUI.V4LLPanel_position,
              LL_CustomUI.V4LLPanel_position_offset
            ) +
            '" onclick="LL_CustomUI.V4Panel.expand()" onmouseout="LL_CustomUI.V4Panel.hint.hide();" onmouseover="LL_CustomUI.V4Panel.hint.show();"><div id="V4LLPanel_InnerLogo" style="margin: 9px 10px 0 10px; width: 23px; height: 24px; float: left; background: url(' +
            LL_CustomUI.img(LL_CustomUI.V4LLPanel_notSupported_logo) +
            ') no-repeat !important; _margin-left: 5px !important;"></div><span id="V4LLPanel_InnerTitle" tabindex="0" role="button" aria-label="' +
            LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow +
            '" style="position:absolute; top: 11px; left: 42px; font-family: ' +
            LL_CustomUI.V4LLPanel_Title_notSupported_font_family +
            " !important; font-size: " +
            LL_CustomUI.V4LLPanel_Title_notSupported_font_size +
            "px !important; color: #" +
            LL_CustomUI.V4LLPanel_Title_notSupported_color +
            ' !important;" class="V4LLTitleText">' +
            LL_CustomUI.V4LLPanel_notSupported_header_text +
            "</span></div>"),
      (LL_CustomUI.V4Panel.windowHTML +=
        '<div id="V4LLPanel" style="' +
        LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
          LL_CustomUI.V4LLPanel_position,
          LL_CustomUI.V4LLPanel_position_offset
        ) +
        "background: url(" +
        LL_CustomUI.img(LL_CustomUI.V4LLPanel_notSupported_background) +
        ") no-repeat !important; position:fixed; _position: absolute; z-index: 1500002; height: 0; overflow: hidden; width: " +
        LL_CustomUI.V4LLPanel_width +
        'px !important;">'),
      (LL_CustomUI.V4Panel.windowHTML +=
        '<div id="V4LLPanel_InnerContainer" style="position: relative; padding: 42px 0 0 4px; zoom: 1; height: 130px; width: 277px !important;">'),
      (LL_CustomUI.V4Panel.windowHTML +=
        '<div style="width: 256px; height: 46px; cursor: pointer; position: absolute;  left: 0; top: 0; margin-left: 10px;background:url(' +
        LL_CustomUI.img(LL_CustomUI.LLpassToBeginText_background) +
        ') repeat-x left bottom !important;" id="V4LLPanel_MovingToggler" onclick="LL_CustomUI.V4Panel.collapse()"><div id="V4LLPanel_LogoToggler" style="background: url(' +
        LL_CustomUI.img(LL_CustomUI.V4LLPanel_notSupported_logo) +
        ') no-repeat !important; margin:13px 16px 0 3px;width: 23px;height: 24px;float: left;" class="LLV4Logo"><div id="V4LLPanel_PanelClose" tabindex="0.1" role="button" aria-label="' +
        LL_CustomUI.ADA_V4LLPanel_PanelClose +
        '" style="background:url(' +
        LL_CustomUI.img(
          LL_CustomUI.V4LLPanel_PanelClose_notSupported_background
        ) +
        ') no-repeat !important; position: absolute; width:17px; height:17px; cursor:pointer; margin:7px 0 0 0; right: 0;"></div></div><span id="V4LLPanel_TogglerText" style="position:absolute; top: 17px; left: 34px; font-family: ' +
        LL_CustomUI.V4LLPanel_Title_notSupported_font_family +
        " !important; font-size: " +
        LL_CustomUI.V4LLPanel_Title_notSupported_font_size +
        "px !important; color: #" +
        LL_CustomUI.V4LLPanel_Title_notSupported_color +
        ' !important;" class="V4LLTitleText">' +
        LL_CustomUI.V4LLPanel_notSupported_header_text +
        "</span></div>"),
      (LL_CustomUI.V4Panel.windowHTML +=
        '<p id="V4LLPanel_notSupportedEnvText" style="padding: 0 10px; margin: 14px 0; font-family: ' +
        LL_CustomUI.V4LLPanel_notSupportedEnvText_notSupported_font_family +
        " !important; font-size: " +
        LL_CustomUI.V4LLPanel_notSupportedEnvText_notSupported_font_size +
        "px !important; color: #" +
        LL_CustomUI.V4LLPanel_notSupportedEnvText_notSupported_color +
        ' !important;">' +
        LL_CustomUI.V4LLPanel_notSupported_text +
        "</p>"),
      (LL_CustomUI.V4Panel.windowHTML += LL_CustomUI.V4Panel.moreInfoRow),
      (LL_CustomUI.V4Panel.windowHTML += "</div>"),
      (LL_CustomUI.V4Panel.windowHTML += "</div>"),
      (LL_CustomUI.V4Panel.innerHTML = LL_CustomUI.V4Panel.windowHTML),
      (LL_CustomUI.V4Panel.start = function () {
        LL_CustomUI.V4Panel.notSupportedEnvWindow = LL_CustomUI.$("V4LLPanel");
      }),
      (LL_CustomUI.V4Panel.getInitialHandle = function () {
        LL_CustomUI.V4Panel.initialHandle = LL_CustomUI.$(
          "V4LLPanel_GenericToggler"
        );
      }),
      (LL_CustomUI.V4Panel.toggle = function (o) {
        if ("expand" == o)
          LL_CustomUI.V4Panel.start(),
            (LL_CustomUI.V4Panel.isOpen = !0),
            (LL_CustomUI.$("V4LLPanel_HintBlock").style.visibility = "hidden"),
            (LL_CustomUI.$("V4LLPanel_GenericToggler").style.visibility =
              "visible"),
            (LL_CustomUI.V4Panel.notSupportedEnvWindow.style.height =
              LL_CustomUI.V4Panel.notSupportedEnvironmentWindowHeight + "px"),
            !LL_CustomUI.V4Panel.eventWritten &&
              window.LL_Log &&
              ((LL_CustomUI.V4Panel.eventWritten = !0),
              LL_Log.event("NotSupported", "ui.js", navigator.userAgent));
        else if ("collapse" == o) {
          if (!LL_CustomUI.V4Panel.isOpen) return;
          LL_CustomUI.V4Panel.start(),
            (LL_CustomUI.V4Panel.isOpen = !1),
            (LL_CustomUI.$("V4LLPanel_GenericToggler").style.visibility =
              "visible"),
            LL_CustomUI.commonFunctions.isQuirksMode()
              ? (LL_CustomUI.V4Panel.notSupportedEnvWindow.style.height = "1px")
              : (LL_CustomUI.V4Panel.notSupportedEnvWindow.style.height =
                  "0px");
        }
      }),
      (LL_CustomUI.V4Panel.expand = function () {
        LL_CustomUI.V4Panel.toggle("expand");
      }),
      (LL_CustomUI.V4Panel.collapse = function () {
        LL_CustomUI.V4Panel.toggle("collapse");
      }),
      (LL_CustomUI.V4Panel.hide = function (o) {
        o || (o = 0),
          setTimeout(function () {
            try {
              (LL_CustomUI.$("V4LLPanel_HintBlock").style.display = "none"),
                (LL_CustomUI.$("V4LLPanel_GenericToggler").style.display =
                  "none"),
                (LL_CustomUI.$("V4LLPanel").style.display = "none");
            } catch (o) {}
          }, o);
      }),
      (LL_CustomUI.V4Panel.hint = {}),
      (LL_CustomUI.V4Panel.hint.show = function () {
        "hidden" != LL_CustomUI.$("V4LLPanel_HintBlock").style.visibility ||
          ("bottom_right" != LL_CustomUI.V4LLPanel_position &&
            "bottom_left" != LL_CustomUI.V4LLPanel_position &&
            "bottom_middle" != LL_CustomUI.V4LLPanel_position) ||
          (LL_CustomUI.$("V4LLPanel_HintBlock").style.visibility = "visible");
      }),
      (LL_CustomUI.V4Panel.hint.hide = function () {
        LL_CustomUI.$("V4LLPanel_HintBlock").style.visibility = "hidden";
      }),
      (LL_CustomUI.V4Panel.setPresentationCode = function () {}),
      (LL_CustomUI.V4Panel.enablePreviewMode = function () {
        LL_CustomUI.V4Panel.isPreviewMode = !0;
      }),
      (LL_CustomUI.V4Panel.appendElements = function () {
        if (!LL_CustomUI.$("V4LLPanel")) {
          var o = document.createElement("div");
          (o.innerHTML = LL_CustomUI.V4Panel.windowHTML),
            document.body.appendChild(o),
            LL_CustomUI.V4LLPanel_position.indexOf("middle") > 0 &&
              (LL_CustomUI.commonFunctions.setElementInTheMiddle(
                "V4LLPanel_HintBlock",
                LL_CustomUI.V4LLPanel_position
              ),
              LL_CustomUI.commonFunctions.setElementInTheMiddle(
                "V4LLPanel_GenericToggler",
                LL_CustomUI.V4LLPanel_position
              ),
              LL_CustomUI.commonFunctions.setElementInTheMiddle(
                "V4LLPanel",
                LL_CustomUI.V4LLPanel_position
              )),
            LL_CustomUI.commonFunctions.isQuirksMode() &&
              (LL_CustomUI.$("V4LLPanel").style.height = "1px"),
            LL_CustomUI.commonFunctions.isQuirksMode() &&
              LL_CustomUI.commonFunctions.listen("scroll", window, function () {
                var o = LL_CustomUI.commonFunctions.GetScrollPosition();
                null != LL_CustomUI.$("V4LLPanel_GenericToggler") &&
                  (LL_CustomUI.$("V4LLPanel_GenericToggler").style.bottom =
                    -o + "px"),
                  null != LL_CustomUI.$("V4LLPanel_HintBlock") &&
                    (LL_CustomUI.$("V4LLPanel_HintBlock").style.bottom =
                      -o + 30 + "px"),
                  null != LL_CustomUI.$("V4LLPanel") &&
                    (LL_CustomUI.$("V4LLPanel").style.bottom = -o + "px");
              }),
            ((LL_CustomUI.commonFunctions.isBottomLocation() &&
              LL_CustomUI.commonFunctions.getInternetExplorerVersion() <= 7 &&
              -1 != LL_CustomUI.commonFunctions.getInternetExplorerVersion()) ||
              LL_CustomUI.commonFunctions.isQuirksMode()) &&
              LL_CustomUI.commonFunctions.listen("scroll", window, function () {
                null != LL_CustomUI.$("V4LLPanel_GenericToggler") &&
                  LL_CustomUI.commonFunctions.setPositionOnScroll(
                    "V4LLPanel_GenericToggler",
                    0,
                    LL_CustomUI.V4LLPanel_position
                  ),
                  null != LL_CustomUI.$("V4LLPanel_HintBlock") &&
                    LL_CustomUI.commonFunctions.setPositionOnScroll(
                      "V4LLPanel_HintBlock",
                      30,
                      LL_CustomUI.V4LLPanel_position
                    ),
                  parseInt(LL_CustomUI.$("V4LLPanel").style.height) >= 1
                    ? LL_CustomUI.commonFunctions.setPositionOnScroll(
                        "V4LLPanel",
                        0,
                        LL_CustomUI.V4LLPanel_position
                      )
                    : LL_CustomUI.commonFunctions.setPositionOnScroll(
                        "V4LLPanel",
                        LL_CustomUI.V4Panel.notSupportedEnvironmentWindowHeight,
                        LL_CustomUI.V4LLPanel_position
                      );
              }),
            ((LL_CustomUI.commonFunctions.isBottomLocation() &&
              LL_CustomUI.commonFunctions.getInternetExplorerVersion() <= 7 &&
              -1 != LL_CustomUI.commonFunctions.getInternetExplorerVersion()) ||
              LL_CustomUI.commonFunctions.isQuirksMode()) &&
              LL_CustomUI.commonFunctions.listen("resize", window, function () {
                document.getElementById("V4LLPanel_GenericToggler") &&
                  document.getElementById("V4LLPanel_HintBlock") &&
                  (LL_CustomUI.commonFunctions.setPositionOnScroll(
                    "V4LLPanel_GenericToggler",
                    0,
                    LL_CustomUI.V4LLPanel_position
                  ),
                  LL_CustomUI.commonFunctions.setPositionOnScroll(
                    "V4LLPanel_HintBlock",
                    30,
                    LL_CustomUI.V4LLPanel_position
                  ),
                  parseInt(LL_CustomUI.$("V4LLPanel").style.height) >= 1
                    ? LL_CustomUI.commonFunctions.setPositionOnScroll(
                        "V4LLPanel",
                        0,
                        LL_CustomUI.V4LLPanel_position
                      )
                    : LL_CustomUI.commonFunctions.setPositionOnScroll(
                        "V4LLPanel",
                        LL_CustomUI.V4Panel.notSupportedEnvironmentWindowHeight,
                        LL_CustomUI.V4LLPanel_position
                      ));
              }),
            ((LL_CustomUI.commonFunctions.isBottomLocation() &&
              LL_CustomUI.commonFunctions.getInternetExplorerVersion() <= 7 &&
              -1 != LL_CustomUI.commonFunctions.getInternetExplorerVersion()) ||
              LL_CustomUI.commonFunctions.isQuirksMode()) &&
              (LL_CustomUI.commonFunctions.setPositionOnScroll(
                "V4LLPanel_GenericToggler",
                0,
                LL_CustomUI.V4LLPanel_position
              ),
              LL_CustomUI.commonFunctions.setPositionOnScroll(
                "V4LLPanel_HintBlock",
                30,
                LL_CustomUI.V4LLPanel_position
              ),
              parseInt(LL_CustomUI.$("V4LLPanel").style.height) >= 1
                ? LL_CustomUI.commonFunctions.setPositionOnScroll(
                    "V4LLPanel",
                    0,
                    LL_CustomUI.V4LLPanel_position
                  )
                : LL_CustomUI.commonFunctions.setPositionOnScroll(
                    "V4LLPanel",
                    LL_CustomUI.V4Panel.notSupportedEnvironmentWindowHeight,
                    LL_CustomUI.V4LLPanel_position
                  )),
            LL_CustomUI.commonFunctions.listen("click", window, function (o) {
              var t = o.target || o.srcElement;
              t.id.indexOf("LLPanel") < 0 &&
                1 == LL_CustomUI.V4Panel.isOpen &&
                ("undefined" != typeof LL_Deployment.v4CustomButtonID &&
                "" != LL_Deployment.v4CustomButtonID &&
                t.id.indexOf(LL_Deployment.v4CustomButtonID) < 0
                  ? LL_CustomUI.V4Panel.collapse()
                  : ("undefined" == typeof LL_Deployment.v4CustomButtonID ||
                      "" == LL_Deployment.v4CustomButtonID) &&
                    LL_CustomUI.V4Panel.collapse()),
                LL_CustomUI.V4LLPanel_position.indexOf("middle") > 0 &&
                  LL_CustomUI.commonFunctions.listen(
                    "resize",
                    window,
                    function (o) {
                      document.getElementById("V4LLPanel_GenericToggler") &&
                        document.getElementById("V4LLPanel_HintBlock") &&
                        (LL_CustomUI.commonFunctions.setElementInTheMiddle(
                          "V4LLPanel_HintBlock",
                          LL_CustomUI.V4LLPanel_position
                        ),
                        LL_CustomUI.commonFunctions.setElementInTheMiddle(
                          "V4LLPanel_GenericToggler",
                          LL_CustomUI.V4LLPanel_position
                        ),
                        LL_CustomUI.commonFunctions.setElementInTheMiddle(
                          "V4LLPanel",
                          LL_CustomUI.V4LLPanel_position
                        ));
                    }
                  );
            }),
            "undefined" != typeof LL_Deployment.v4CustomButtonID &&
              "" != LL_Deployment.v4CustomButtonID &&
              LL_Deployment.v4CustomButtonID &&
              "new" == window.LL_CustomUI.V4PanelState &&
              (LL_CustomUI.anyPositionV4PanelOpener.init(),
              (LL_CustomUI.$("V4LLPanel_GenericToggler").style.visibility =
                "hidden"),
              LL_CustomUI.termsAndConditionsWindow
                .isTermsAndConditionsEnabled &&
                (LL_CustomUI.$(
                  "V4LLPanel_TermsAndConditionsToggler"
                ).style.visibility = "hidden"));
        }
      }),
      (LL_CustomUI.V4Panel.init = LL_CustomUI.V4Panel.appendElements));
  }),
  LL_CustomUI.unsupportedService(),
  (LL_CustomUI.V4Panel_init = function () {
    LL_CustomUI.commonFunctions.removeListener(
      "keyup",
      window,
      LL_CustomUI.commonFunctions.globalKeyHandler
    ),
      LL_CustomUI.commonFunctions.listen(
        "keyup",
        window,
        LL_CustomUI.commonFunctions.globalKeyHandler
      ),
      LL_CustomUI.commonFunctions.ADA.CreateStyleForFocus(),
      LL_CustomUI.commonFunctions.createStyleForPrint(),
      window.LL_CustomUI &&
        !LL_CustomUI.V4Panel &&
        ("new" == LL_CustomUI.V4PanelState
          ? ((LL_CustomUI.V4Panel = {}),
            (LL_CustomUI.V4Panel.automaticClosingTimer = ""),
            (LL_CustomUI.V4Panel.windowHTML = ""),
            (LL_CustomUI.V4Panel.numberGenerationView = ""),
            (LL_CustomUI.V4Panel.numberGenerationWindow = ""),
            (LL_CustomUI.V4Panel.initialHandle = ""),
            (LL_CustomUI.V4Panel.initialHandleNumberGenerated = ""),
            (LL_CustomUI.V4Panel.faqURL = LL_CustomUI.V4LLPanel_FAQURL),
            (LL_CustomUI.V4Panel.isOpen = !1),
            (LL_CustomUI.V4Panel.numberAlreadyGenerated = !1),
            (LL_CustomUI.V4Panel.isPreviewMode = !1),
            (LL_CustomUI.V4Panel.isAgentConnected = !1),
            (LL_CustomUI.V4Panel.numberGenerationWindowHeight = 302),
            (LL_CustomUI.V4Panel.presentationCode = ""),
            (LL_CustomUI.V4Panel.isDisconnectConfirmWindowOpen = !1),
            (LL_CustomUI.V4Panel.termsAndConditionsRow = ""),
            (LL_CustomUI.V4Panel.mobile_timer = ""),
            (LL_CustomUI.V4Panel.orginalHeight = ""),
            (LL_CustomUI.commonFunctions.isLeftLocation() ||
              LL_CustomUI.commonFunctions.isRightLocation()) &&
              (LL_CustomUI.V4Panel.numberGenerationWindowHeight = 308),
            "" != LL_CustomUI.V4Panel.faqURL
              ? (LL_CustomUI.V4Panel.termsAndConditionsRow =
                  '<a href="javascript:void(0)" onclick="LL_CustomUI.V4Panel.openTermsAndConditions(); return false;" id="V4LLPanel_TermsAndConditions" style="font-weight:normal;margin-bottom:6px; margin-top:15px; font-size: ' +
                  LL_CustomUI.V4LLPanel_TermsAndConditions_font_size +
                  "px; color: #" +
                  LL_CustomUI.V4LLPanel_TermsAndConditions_color +
                  " !important; font-family: " +
                  LL_CustomUI.V4LLPanel_TermsAndConditions_font_family +
                  ' !important;">' +
                  LL_CustomUI.V4LLPanel_notconnected_termsAndConditions_text +
                  "</a>")
              : (LL_CustomUI.V4Panel.termsAndConditionsRow = ""),
            "undefined" !=
              typeof LL_CustomUI.V4LLPanel_notconnected_phoneNumber &&
              "" != LL_CustomUI.V4LLPanel_notconnected_phoneNumber &&
              LL_CustomUI.V4LLPanel_notconnected_phoneNumber.indexOf("[n]") >=
                0 &&
              (LL_CustomUI.V4LLPanel_notconnected_phoneNumber = LL_CustomUI.V4LLPanel_notconnected_phoneNumber.replace(
                "[n]",
                "<br />"
              )),
            "undefined" !=
              typeof LL_CustomUI.V4LLPanel_notconnected_provideNumber_text &&
              "" != LL_CustomUI.V4LLPanel_notconnected_provideNumber_text &&
              LL_CustomUI.V4LLPanel_notconnected_provideNumber_text.indexOf(
                "[n]"
              ) >= 0 &&
              (LL_CustomUI.V4LLPanel_notconnected_provideNumber_text = LL_CustomUI.V4LLPanel_notconnected_provideNumber_text.replace(
                "[n]",
                "<br />"
              )),
            "undefined" != typeof LL_CustomUI.V4LLPanel_PhoneNumberURL &&
              "" != LL_CustomUI.V4LLPanel_PhoneNumberURL &&
              (LL_CustomUI.V4LLPanel_notconnected_phoneNumber =
                "<a href=" +
                LL_CustomUI.V4LLPanel_PhoneNumberURL +
                ' target="_blank" style="color: #' +
                LL_CustomUI.V4LLPanel_passToBeginText_color +
                ' !important;">' +
                LL_CustomUI.V4LLPanel_notconnected_phoneNumber +
                "</a>"),
            LL_CustomUI.commonFunctions.isLeftLocation()
              ? LL_CustomUI.commonFunctions.isAnyIE()
                ? (LL_CustomUI.V4Panel.windowHTML +=
                    '<div style="z-index:1500001; position:fixed; _position: absolute !important; cursor:pointer; visibility:hidden; overflow: hidden; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_background
                    ) +
                    ") no-repeat !important; width: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
                    "px; height: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
                    "px; " +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    '" id="V4LLPanel_CollapsedNarrowNoAgent" onclick="LL_CustomUI.V4Panel.expand()"><span style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg); -webkit-transform:rotate(-90deg); -moz-transform:rotate(-90deg); -o-transform: rotate(-90deg); float:left; margin:46px 8px 12px 9px; font-family: ' +
                    LL_CustomUI.V4LLPanel_CollapsedNumContNarrow_font_family +
                    "; font-size: " +
                    LL_CustomUI.V4LLPanel_CollapsedNumContNarrow_font_size +
                    "px; color: #" +
                    LL_CustomUI.V4LLPanel_CollapsedNumContNarrow_color +
                    ';" id="V4LLPanel_CollapsedNumContNarrow" tabindex="0" role="button" aria-live="assertive" aria-label="' +
                    LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow +
                    '"></span><div id="V4LLPanel_InnerLogo" style="margin: 19px 10px 0 5px; width: 23px; height: 24px; float: left; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_InnerLogo_background
                    ) +
                    ') no-repeat !important; _margin-left: 5px !important;" class="LLV4Logo"></div></div>')
                : (LL_CustomUI.V4Panel.windowHTML +=
                    '<div style="z-index:1500001; position:fixed; _position: absolute !important; cursor:pointer; visibility:hidden; overflow: hidden; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_background
                    ) +
                    ") no-repeat !important; width: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
                    "px; height: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
                    "px; " +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    '" id="V4LLPanel_CollapsedNarrowNoAgent" onclick="LL_CustomUI.V4Panel.expand()"><span style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg); -webkit-transform:rotate(-90deg); -moz-transform:rotate(-90deg); -o-transform: rotate(-90deg); float:left; margin:59px 8px 0 -8px; font-family: ' +
                    LL_CustomUI.V4LLPanel_CollapsedNumContNarrow_font_family +
                    "; font-size: " +
                    LL_CustomUI.V4LLPanel_CollapsedNumContNarrow_font_size +
                    "px; color: #" +
                    LL_CustomUI.V4LLPanel_CollapsedNumContNarrow_color +
                    ';" id="V4LLPanel_CollapsedNumContNarrow" tabindex="0" role="button" aria-live="assertive" aria-label="' +
                    LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow +
                    '"></span><div id="V4LLPanel_InnerLogo" style="margin: 48px 10px 0 5px; width: 23px; height: 24px; float: left; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_InnerLogo_background
                    ) +
                    ') no-repeat !important; _margin-left: 5px !important;" class="LLV4Logo"></div></div>')
              : LL_CustomUI.commonFunctions.isRightLocation()
              ? LL_CustomUI.commonFunctions.isAnyIE()
                ? (LL_CustomUI.V4Panel.windowHTML +=
                    '<div style="z-index:1500001; position:fixed; _position: absolute !important; cursor:pointer; visibility:hidden; overflow: hidden; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_background
                    ) +
                    ") no-repeat !important; width: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
                    "px; height: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
                    "px; " +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    '" id="V4LLPanel_CollapsedNarrowNoAgent" onclick="LL_CustomUI.V4Panel.expand()"><span style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg); -webkit-transform:rotate(-90deg); -moz-transform:rotate(-90deg); -o-transform: rotate(-90deg); float:left; margin:47px 8px 0 11px; font-family: ' +
                    LL_CustomUI.V4LLPanel_CollapsedNumContNarrow_font_family +
                    "; font-size: " +
                    LL_CustomUI.V4LLPanel_CollapsedNumContNarrow_font_size +
                    "px; color: #" +
                    LL_CustomUI.V4LLPanel_CollapsedNumContNarrow_color +
                    ';" id="V4LLPanel_CollapsedNumContNarrow" tabindex="0" role="button" aria-live="assertive" aria-label="' +
                    LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow +
                    '"></span><div id="V4LLPanel_InnerLogo" style="margin: 19px 10px 0 9px; width: 23px; height: 24px; float: left; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_InnerLogo_background
                    ) +
                    ') no-repeat !important; _margin-left: 5px !important;" class="LLV4Logo"></div></div>')
                : (LL_CustomUI.V4Panel.windowHTML +=
                    '<div style="z-index:1500001; position:fixed; _position: absolute !important; cursor:pointer; visibility:hidden; overflow: hidden; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_background
                    ) +
                    ") no-repeat !important; width: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
                    "px; height: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
                    "px; " +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    '" id="V4LLPanel_CollapsedNarrowNoAgent" onclick="LL_CustomUI.V4Panel.expand()"><span style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg); -webkit-transform:rotate(-90deg); -moz-transform:rotate(-90deg); -o-transform: rotate(-90deg); float:left; margin:59px 8px 0 -3px; font-family: ' +
                    LL_CustomUI.V4LLPanel_CollapsedNumContNarrow_font_family +
                    "; font-size: " +
                    LL_CustomUI.V4LLPanel_CollapsedNumContNarrow_font_size +
                    "px; color: #" +
                    LL_CustomUI.V4LLPanel_CollapsedNumContNarrow_color +
                    ';" id="V4LLPanel_CollapsedNumContNarrow" tabindex="0" role="button" aria-live="assertive" aria-label="' +
                    LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow +
                    '"></span><div id="V4LLPanel_InnerLogo" style="margin: 48px 10px 0 9px; width: 23px; height: 24px; float: left; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_InnerLogo_background
                    ) +
                    ') no-repeat !important; _margin-left: 5px !important;" class="LLV4Logo"></div></div>')
              : (LL_CustomUI.V4Panel.windowHTML +=
                  '<div style="z-index:1500001; position:fixed; _position: absolute !important; cursor:pointer; visibility:hidden; overflow: hidden; background: url(' +
                  LL_CustomUI.img(
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_background
                  ) +
                  ") no-repeat !important; width: " +
                  LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
                  "px; height: " +
                  LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
                  "px; " +
                  LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                    LL_CustomUI.V4LLPanel_position,
                    LL_CustomUI.V4LLPanel_position_offset
                  ) +
                  '" id="V4LLPanel_CollapsedNarrowNoAgent" onclick="LL_CustomUI.V4Panel.expand()"><div id="V4LLPanel_InnerLogo" style="margin: 9px 10px 0 10px; width: 23px; height: 24px; float: left; background: url(' +
                  LL_CustomUI.img(LL_CustomUI.V4LLPanel_InnerLogo_background) +
                  ') no-repeat !important; _margin-left: 5px !important;" class="LLV4Logo"></div><span style="display:inline-block; width: 98px; text-align:center; float:left; margin:12px 0 0 0; font-family: ' +
                  LL_CustomUI.V4LLPanel_CollapsedNumContNarrow_font_family +
                  "; font-size: " +
                  LL_CustomUI.V4LLPanel_CollapsedNumContNarrow_font_size +
                  "px; color: #" +
                  LL_CustomUI.V4LLPanel_CollapsedNumContNarrow_color +
                  ';" id="V4LLPanel_CollapsedNumContNarrow" tabindex="0" role="button" aria-live="assertive" aria-label="' +
                  LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow +
                  '"></span></div>'),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<div id="V4LLPanel_HintBlock" style="' +
              LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                LL_CustomUI.V4LLPanel_position,
                LL_CustomUI.V4LLPanel_position_offset,
                "true"
              ) +
              " z-index:20000; position:fixed; _position: absolute !important; cursor:pointer; visibility:hidden; background: url(" +
              LL_CustomUI.img(LL_CustomUI.V4LLPanel_HintBlock_background) +
              ") no-repeat !important; width: " +
              LL_CustomUI.V4LLPanel_HintBlock_width +
              "px; height: " +
              LL_CustomUI.V4LLPanel_HintBlock_height +
              'px; onmouseout="LL_CustomUI.V4Panel.hint.hide();"><span id="V4LLPanel_Hint_FirstLine" style="display: block; text-align: center; font-size: ' +
              LL_CustomUI.V4LLPanel_HintBlock_FirstLineText_font_size +
              "px; font-family: " +
              LL_CustomUI.V4LLPanel_HintBlock_FirstLineText_font_family +
              "; color: #" +
              LL_CustomUI.V4LLPanel_HintBlock_FirstLineText_color +
              "; width: 157px; font-style: " +
              LL_CustomUI.V4LLPanel_HintBlock_FirstLineText_font_style +
              " ; font-weight: " +
              LL_CustomUI.V4LLPanel_HintBlock_FirstLineText_font_weight +
              '; margin-top: 13px;">' +
              LL_CustomUI.V4LLPanel_HintBlock_FirstLineText +
              '</span><span id="V4LLPanel_Hint_SecondLine" style="display: block; text-align: center; font-size: ' +
              LL_CustomUI.V4LLPanel_HintBlock_SecondLineText_font_size +
              "px; font-family: " +
              LL_CustomUI.V4LLPanel_HintBlock_SecondLineText_font_family +
              "; color: #" +
              LL_CustomUI.V4LLPanel_HintBlock_SecondLineText_color +
              "; font-weight: " +
              LL_CustomUI.V4LLPanel_HintBlock_SecondLineText_font_weight +
              " ; font-style: " +
              LL_CustomUI.V4LLPanel_HintBlock_SecondLineText_font_style +
              '; width: 157px;">' +
              LL_CustomUI.V4LLPanel_HintBlock_SecondLineText +
              "</span></div>"),
            LL_CustomUI.commonFunctions.isLeftLocation()
              ? LL_CustomUI.commonFunctions.isAnyIE()
                ? (LL_CustomUI.V4Panel.windowHTML +=
                    '<div id="V4LLPanel_GenericToggler" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_background
                    ) +
                    ") no-repeat !important; width: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
                    "px !important; height: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
                    "px !important; " +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    '" onclick="LL_CustomUI.V4Panel.expand()" onmouseout="LL_CustomUI.V4Panel.hint.hide();" onmouseover="LL_CustomUI.V4Panel.hint.show();"><span id="V4LLPanel_InnerTitle" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg); -webkit-transform:rotate(-90deg); -moz-transform:rotate(-90deg); -o-transform: rotate(-90deg); position:absolute; white-space:nowrap; bottom: 40px; left: 9px; font-family: ' +
                    LL_CustomUI.V4LLPanel_InnerTitle_font_family +
                    "; font-size: " +
                    LL_CustomUI.V4LLPanel_InnerTitle_font_size +
                    "px !important; color: #" +
                    LL_CustomUI.V4LLPanel_InnerTitle_color +
                    ';" class="V4LLTitleText" tabindex="0" role="button">' +
                    LL_CustomUI.V4LLPanel_notconnected_header_text +
                    '</span><div id="V4LLPanel_InnerLogo" style="margin: 124px 10px 0 4px; width: 23px; height: 24px; float: left; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_InnerLogo_background
                    ) +
                    ') no-repeat !important; _margin-left: 5px !important;"></div></div>')
                : LL_CustomUI.commonFunctions.isSafari()
                ? (LL_CustomUI.V4Panel.windowHTML +=
                    '<div id="V4LLPanel_GenericToggler" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_background
                    ) +
                    ") no-repeat !important; width: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
                    "px !important; height: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
                    "px !important; " +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    '" onclick="LL_CustomUI.V4Panel.expand()" onmouseout="LL_CustomUI.V4Panel.hint.hide();" onmouseover="LL_CustomUI.V4Panel.hint.show();"><span id="V4LLPanel_InnerTitle" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg) translate(0, 100%); -webkit-transform:rotate(-90deg) translate(0, 100%); -moz-transform:rotate(-90deg) translate(0, 100%); -o-transform: rotate(-90deg) translate(0, 100%); position:absolute; white-space:nowrap; bottom: 40px; left: 8px; -moz-transform-origin: 0% 100%; -o-transform-origin: 0% 100%; -webkit-transform-origin: 0% 100%; transform-origin: left top 0; font-family: ' +
                    LL_CustomUI.V4LLPanel_InnerTitle_font_family +
                    "; font-size: " +
                    LL_CustomUI.V4LLPanel_InnerTitle_font_size +
                    "px !important; color: #" +
                    LL_CustomUI.V4LLPanel_InnerTitle_color +
                    ';" class="V4LLTitleText" tabindex="0" role="button">' +
                    LL_CustomUI.V4LLPanel_notconnected_header_text +
                    '</span><div id="V4LLPanel_InnerLogo" style="margin: 124px 10px 0 4px; width: 23px; height: 24px; float: left; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_InnerLogo_background
                    ) +
                    ') no-repeat !important; _margin-left: 5px !important;"></div></div>')
                : (LL_CustomUI.V4Panel.windowHTML +=
                    '<div id="V4LLPanel_GenericToggler" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_background
                    ) +
                    ") no-repeat !important; width: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
                    "px !important; height: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
                    "px !important; " +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    '" onclick="LL_CustomUI.V4Panel.expand()" onmouseout="LL_CustomUI.V4Panel.hint.hide();" onmouseover="LL_CustomUI.V4Panel.hint.show();"><span id="V4LLPanel_InnerTitle" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg); -webkit-transform:rotate(-90deg); -moz-transform:rotate(-90deg); -o-transform: rotate(-90deg); position:absolute; white-space:nowrap; bottom: 28px; left: 8px; transform-origin: left top 0; -moz-transform-origin: left top 0; -o-transform-origin: left top 0; -webkit-transform-origin: left top 0; font-family: ' +
                    LL_CustomUI.V4LLPanel_InnerTitle_font_family +
                    "; font-size: " +
                    LL_CustomUI.V4LLPanel_InnerTitle_font_size +
                    "px !important; color: #" +
                    LL_CustomUI.V4LLPanel_InnerTitle_color +
                    ';" class="V4LLTitleText" tabindex="0" role="button">' +
                    LL_CustomUI.V4LLPanel_notconnected_header_text +
                    '</span><div id="V4LLPanel_InnerLogo" style="margin: 124px 10px 0 4px; width: 23px; height: 24px; float: left; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_InnerLogo_background
                    ) +
                    ') no-repeat !important; _margin-left: 5px !important;"></div></div>')
              : LL_CustomUI.commonFunctions.isRightLocation()
              ? LL_CustomUI.commonFunctions.isAnyIE()
                ? (LL_CustomUI.V4Panel.windowHTML +=
                    '<div id="V4LLPanel_GenericToggler" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_background
                    ) +
                    ") no-repeat !important; width: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
                    "px !important; height: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
                    "px !important; " +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    '" onclick="LL_CustomUI.V4Panel.expand()" onmouseout="LL_CustomUI.V4Panel.hint.hide();" onmouseover="LL_CustomUI.V4Panel.hint.show();"><span id="V4LLPanel_InnerTitle" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg); -webkit-transform:rotate(-90deg); -moz-transform:rotate(-90deg); -o-transform: rotate(-90deg); position:absolute; white-space: nowrap; bottom: 45px; left: 14px; font-family: ' +
                    LL_CustomUI.V4LLPanel_InnerTitle_font_family +
                    "; font-size: " +
                    LL_CustomUI.V4LLPanel_InnerTitle_font_size +
                    "px !important; color: #" +
                    LL_CustomUI.V4LLPanel_InnerTitle_color +
                    ';" class="V4LLTitleText" tabindex="0" role="button">' +
                    LL_CustomUI.V4LLPanel_notconnected_header_text +
                    '</span><div id="V4LLPanel_InnerLogo" style="margin: 124px 10px 0 9px; width: 23px; height: 24px; float: left; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_InnerLogo_background
                    ) +
                    ') no-repeat !important; _margin-left: 5px !important;"></div></div>')
                : LL_CustomUI.commonFunctions.isSafari()
                ? (LL_CustomUI.V4Panel.windowHTML +=
                    '<div id="V4LLPanel_GenericToggler" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_background
                    ) +
                    ") no-repeat !important; width: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
                    "px !important; height: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
                    "px !important; " +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    '" onclick="LL_CustomUI.V4Panel.expand()" onmouseout="LL_CustomUI.V4Panel.hint.hide();" onmouseover="LL_CustomUI.V4Panel.hint.show();"><span id="V4LLPanel_InnerTitle" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg) translate(0, 100%); -webkit-transform:rotate(-90deg) translate(0, 100%); -moz-transform:rotate(-90deg) translate(0, 100%); -o-transform: rotate(-90deg) translate(0, 100%); position:absolute; white-space: nowrap; -moz-transform-origin: 0% 100%; -o-transform-origin: 0% 100%; -webkit-transform-origin: 0% 100%; transform-origin: left top 0; bottom: 40px; left: 13px; font-family: ' +
                    LL_CustomUI.V4LLPanel_InnerTitle_font_family +
                    "; font-size: " +
                    LL_CustomUI.V4LLPanel_InnerTitle_font_size +
                    "px !important; color: #" +
                    LL_CustomUI.V4LLPanel_InnerTitle_color +
                    ';" class="V4LLTitleText" tabindex="0" role="button">' +
                    LL_CustomUI.V4LLPanel_notconnected_header_text +
                    '</span><div id="V4LLPanel_InnerLogo" style="margin: 124px 10px 0 9px; width: 23px; height: 24px; float: left; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_InnerLogo_background
                    ) +
                    ') no-repeat !important; _margin-left: 5px !important;"></div></div>')
                : (LL_CustomUI.V4Panel.windowHTML +=
                    '<div id="V4LLPanel_GenericToggler" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_background
                    ) +
                    ") no-repeat !important; width: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
                    "px !important; height: " +
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
                    "px !important; " +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    '" onclick="LL_CustomUI.V4Panel.expand()" onmouseout="LL_CustomUI.V4Panel.hint.hide();" onmouseover="LL_CustomUI.V4Panel.hint.show();"><span id="V4LLPanel_InnerTitle" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg); -webkit-transform:rotate(-90deg); -moz-transform:rotate(-90deg); -o-transform: rotate(-90deg); position:absolute; white-space: nowrap; transform-origin: left top 0; -moz-transform-origin: left top 0; -o-transform-origin: left top 0; -webkit-transform-origin: left top 0; bottom: 28px; left: 13px; font-family: ' +
                    LL_CustomUI.V4LLPanel_InnerTitle_font_family +
                    "; font-size: " +
                    LL_CustomUI.V4LLPanel_InnerTitle_font_size +
                    "px !important; color: #" +
                    LL_CustomUI.V4LLPanel_InnerTitle_color +
                    ';" class="V4LLTitleText" tabindex="0" role="button">' +
                    LL_CustomUI.V4LLPanel_notconnected_header_text +
                    '</span><div id="V4LLPanel_InnerLogo" style="margin: 124px 10px 0 9px; width: 23px; height: 24px; float: left; background: url(' +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_InnerLogo_background
                    ) +
                    ') no-repeat !important; _margin-left: 5px !important;"></div></div>')
              : (LL_CustomUI.V4Panel.windowHTML +=
                  '<div id="V4LLPanel_GenericToggler" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
                  LL_CustomUI.img(
                    LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_background
                  ) +
                  ") no-repeat !important; width: " +
                  LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
                  "px !important; height: " +
                  LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
                  "px !important; " +
                  LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                    LL_CustomUI.V4LLPanel_position,
                    LL_CustomUI.V4LLPanel_position_offset
                  ) +
                  '" onclick="LL_CustomUI.V4Panel.expand()" onmouseout="LL_CustomUI.V4Panel.hint.hide();" onmouseover="LL_CustomUI.V4Panel.hint.show();"><div id="V4LLPanel_InnerLogo" style="margin: 9px 10px 0 10px; width: 23px; height: 24px; float: left; background: url(' +
                  LL_CustomUI.img(LL_CustomUI.V4LLPanel_InnerLogo_background) +
                  ') no-repeat !important; _margin-left: 5px !important;"></div><span id="V4LLPanel_InnerTitle" style="position:absolute; top: 11px; left: 42px; font-family: ' +
                  LL_CustomUI.V4LLPanel_InnerTitle_font_family +
                  "; font-size: " +
                  LL_CustomUI.V4LLPanel_InnerTitle_font_size +
                  "px !important; color: #" +
                  LL_CustomUI.V4LLPanel_InnerTitle_color +
                  ';" class="V4LLTitleText" tabindex="0" role="button">' +
                  LL_CustomUI.V4LLPanel_notconnected_header_text +
                  "</span></div>"),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<div id="V4LLPanel" style="position: fixed; _position: absolute !important; z-index: 1500002; height: 0; overflow: hidden; width: ' +
              LL_CustomUI.V4LLPanel_width +
              "px; background: url(" +
              LL_CustomUI.img(LL_CustomUI.V4LLPanel_notConnected_background) +
              ") no-repeat !important; " +
              LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                LL_CustomUI.V4LLPanel_position,
                LL_CustomUI.V4LLPanel_position_offset
              ) +
              '">'),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<div id="V4LLPanel_InnerContainer" style="position: relative; padding: 42px 0 0 4px; zoom: 1; height: 130px; width: 277px !important;">'),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<div id="V4LLPanel_MovingToggler" style="width: 256px; height: 46px; position: absolute; left: 0; top: 0; margin-left: 10px; background: url(' +
              LL_CustomUI.img(LL_CustomUI.V4LLPanel_separator) +
              ') repeat-x left bottom !important;" class="LLV4Separator"><div id="V4LLPanel_LogoToggler" style="margin:13px 16px 0 3px; width: 23px; height: 24px; float: left; background:url(' +
              LL_CustomUI.img(LL_CustomUI.V4LLPanel_InnerLogo_background) +
              ') no-repeat !important;" class="LLV4Logo"><div id="V4LLPanel_PanelMinimize" tabindex="0" role="button" aria-label="' +
              LL_CustomUI.ADA_V4LLPanel_PanelMinimize +
              '" style="position: absolute; width:15px; height:10px; cursor:pointer; margin:7px 0 0 0; _margin: 3px 0 0 0; right: 26px; background:url(' +
              LL_CustomUI.img(
                LL_CustomUI.V4LLPanel_PanelMinimizeButton_background
              ) +
              ') no-repeat left bottom !important;" onclick="LL_CustomUI.V4Panel.collapse()"></div><div id="V4LLPanel_PanelClose" role="button" tabindex="0.1" aria-label="' +
              LL_CustomUI.ADA_V4LLPanel_PanelClose_disconnect +
              '" style="position: absolute; width:11px; height:10px; cursor:pointer; margin:7px 0 0 0; right: 0; background:url(' +
              LL_CustomUI.img(
                LL_CustomUI.V4LLPanel_PanelCloseButton_background
              ) +
              ') no-repeat !important;" onclick="LL_CustomUI.V4Panel.openDisconnectConfirmWindow()"></div></div><span id="V4LLPanel_TogglerText" style="position:absolute; top: 17px; left: 34px; font-family:' +
              LL_CustomUI.V4LLPanel_InnerTitle_font_family +
              " !important; font-size: " +
              LL_CustomUI.V4LLPanel_InnerTitle_font_size +
              "px; color: #" +
              LL_CustomUI.V4LLPanel_InnerTitle_color +
              ' !important;" class="V4LLTitleText">' +
              LL_CustomUI.V4LLPanel_notconnected_header_text +
              '</span><div id="V4LLPanelDisconnectConfirmWindow" aria-atomic="true" role="dialog" style="box-sizing:content-box; display:none; position:absolute; top:47px;left:2px;width:232px;_width:250px;background-color:#' +
              LL_CustomUI.V4LLPanel_DisconnectConfirmWindow_background_color +
              ";border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;border:1px solid #" +
              LL_CustomUI.V4LLPanel_DisconnectConfirmWindow_border_color +
              ';box-shadow: 0 1px 16px #000; z-index:11; text-align: center;padding:28px 10px;"><span style="font-size:' +
              LL_CustomUI.V4LLPanel_DisconnectConfirmWindow_text_font_size +
              "px; color:#" +
              LL_CustomUI.V4LLPanel_DisconnectConfirmWindow_text_color +
              "; font-weight:" +
              LL_CustomUI.V4LLPanel_DisconnectConfirmWindow_text_font_weight +
              "; font-style: " +
              LL_CustomUI.V4LLPanel_DisconnectConfirmWindow_text_font_style +
              "; font-family: " +
              LL_CustomUI.V4LLPanel_DisconnectConfirmWindow_text_font_family +
              ';">' +
              LL_CustomUI.V4LLPanel_DisconnectConfirmWindow_text +
              '</span><br /><a id="V4LLPanel_CloseDeclineButton" tabindex="0" role="button" aria-label="' +
              LL_CustomUI.ADA_V4LLPanel_CloseDeclineButton +
              '" onmouseout="LL_CustomUI.V4Panel.toggleConfirmNoBtn(false)" onclick="LL_CustomUI.V4Panel.declineSessionEnd(); return false;" style="height: 24px !important; background: url(' +
              LL_CustomUI.img(
                LL_CustomUI.V4LLPanel_CloseConfirmButton_background
              ) +
              ") no-repeat; color: #" +
              LL_CustomUI.V4LLPanel_CloseConfirmButton_text_color +
              "; font-family: " +
              LL_CustomUI.V4LLPanel_CloseConfirmButton_text_font_family +
              "; font-size: " +
              LL_CustomUI.V4LLPanel_CloseConfirmButton_text_font_size +
              "px; font-weight: " +
              LL_CustomUI.V4LLPanel_CloseConfirmButton_text_font_weight +
              " !important; font-style: " +
              LL_CustomUI.V4LLPanel_CloseConfirmButton_text_font_style +
              ' !important; width:103px; text-align:center; display:inline-block; text-decoration:none; padding-top:3px; padding-bottom:2px; margin-top:35px;margin-right:10px;" href="javascript:void(0)">' +
              LL_CustomUI.V4LLPanel_CloseConfirmButton_text_no +
              '</a><a id="V4LLPanel_CloseConfirmButton" tabindex="0" role="button" aria-label="' +
              LL_CustomUI.ADA_V4LLPanel_CloseConfirmButton +
              '" onmouseout="LL_CustomUI.V4Panel.toggleConfirmYesBtn(false)" onclick="LL_CustomUI.V4Panel.confirmSessionEnd(); return false;" style="height: 24px !important; background: url(' +
              LL_CustomUI.img(
                LL_CustomUI.V4LLPanel_CloseConfirmButton_background
              ) +
              ") no-repeat; color: #" +
              LL_CustomUI.V4LLPanel_CloseConfirmButton_text_color +
              "; font-family: " +
              LL_CustomUI.V4LLPanel_CloseConfirmButton_text_font_family +
              "; font-size: " +
              LL_CustomUI.V4LLPanel_CloseConfirmButton_text_font_size +
              "px; font-weight: " +
              LL_CustomUI.V4LLPanel_CloseConfirmButton_text_font_weight +
              " !important; font-style: " +
              LL_CustomUI.V4LLPanel_CloseConfirmButton_text_font_style +
              ' !important; width:103px; text-align:center; display:inline-block; text-decoration:none; padding-top:3px;padding-bottom:2px;margin-top:35px;" href="javascript:void(0)">' +
              LL_CustomUI.V4LLPanel_CloseConfirmButton_text_yes +
              '</a><p hidden="true" aria-hidden="false" style="display:none;">' +
              LL_CustomUI.ADA_V4LLPanel_DisconnectConfirmWindow_infoEnd +
              "</p></div></div>"),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<div aria-atomic="true" style="height:85px;margin-left:10px; width: 252px; _margin-left: 12px !important; overflow:hidden;background: url(' +
              LL_CustomUI.img(LL_CustomUI.LLpassToBeginText_background) +
              ') repeat-x left bottom !important;"><table role="presentation" border="0" cellpadding="0" cellspacing="0" style="background-color:transparent; margin-top:0;">'),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<tr style="background-color:transparent;">'),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<td style="height:85px;vertical-align:middle;padding:0; border:0; background-color: transparent !important;">'),
            LL_CustomUI.commonFunctions.isQuirksMode()
              ? ((LL_CustomUI.V4Panel.windowHTML +=
                  '<p id="V4LLPanel_passToBeginText" style="line-height: 18px;font-weight:normal;position:relative;float:left;-webkit-box-sizing: content-box; -moz-box-sizing: content-box; box-sizing: content-box; margin-bottom:7px; text-align: center; margin-top:5px; width:243px; margin-left:10px; padding-top:6px; overflow: hidden; color: #' +
                  LL_CustomUI.V4LLPanel_passToBeginText_color +
                  " !important; font-size: " +
                  LL_CustomUI.V4LLPanel_passToBeginText_font_size +
                  'px !important; _margin-top: 0 !important;" class="LLV4Separator">'),
                (LL_CustomUI.V4Panel.windowHTML +=
                  '<div id="V4LLPanel_PhoneNumber" role="dialog" style="position:relative;float:left;margin-left:20px; padding:6px 0 7px 48px; background:url(' +
                  LL_CustomUI.img(
                    LL_CustomUI.V4LLPanel_PhoneNumber_background
                  ) +
                  ") no-repeat 0 2px !important; font-family: " +
                  LL_CustomUI.V4LLPanel_PhoneNumber_font_family +
                  ';">'),
                (LL_CustomUI.V4Panel.windowHTML +=
                  '<span id="V4LLPanel_PhoneNumberText"  aria-hidden="true" style="position:relative;float:left;color: #' +
                  LL_CustomUI.V4LLPanel_passToBeginText_color +
                  ' !important;">'),
                (LL_CustomUI.V4Panel.windowHTML +=
                  LL_CustomUI.V4LLPanel_notconnected_callUsAt_text),
                (LL_CustomUI.V4Panel.windowHTML += "</span>"),
                (LL_CustomUI.V4Panel.windowHTML +=
                  '<span id="V4LLPanel_phoneNum"  aria-hidden="true" style="font-size: ' +
                  LL_CustomUI.V4LLPanel_phoneNum_font_size +
                  "px;color: #" +
                  LL_CustomUI.V4LLPanel_passToBeginText_color +
                  " !important; font-family: " +
                  LL_CustomUI.V4LLPanel_PhoneNumber_digits_font_family +
                  ' !important;">'),
                (LL_CustomUI.V4Panel.windowHTML +=
                  LL_CustomUI.V4LLPanel_notconnected_phoneNumber),
                (LL_CustomUI.V4Panel.windowHTML += "</span>"),
                (LL_CustomUI.V4Panel.windowHTML +=
                  '<span id="V4LLPanel_HiddenPhone" style="display:none;" aria-hidden="false">'),
                (LL_CustomUI.V4Panel.windowHTML +=
                  LL_CustomUI.V4LLPanel_notconnected_callUsAt_text +
                  " &nbsp; " +
                  LL_CustomUI.V4LLPanel_notconnected_phoneNumber),
                (LL_CustomUI.V4Panel.windowHTML += "</span>"),
                (LL_CustomUI.V4Panel.windowHTML += "</div>"),
                (LL_CustomUI.V4Panel.windowHTML += "</p>"))
              : ((LL_CustomUI.V4Panel.windowHTML +=
                  '<p id="V4LLPanel_passToBeginText" style="line-height: 18px;font-weight:normal;position:relative;float:left;-webkit-box-sizing: content-box; -moz-box-sizing: content-box; box-sizing: content-box; margin-bottom:7px; text-align: center; margin-top:5px; width:243px; margin-left:10px; padding-top:6px; overflow: hidden; color: #' +
                  LL_CustomUI.V4LLPanel_passToBeginText_color +
                  " !important; font-size: " +
                  LL_CustomUI.V4LLPanel_passToBeginText_font_size +
                  'px !important; _margin-top: 0 !important;" class="LLV4Separator">'),
                (LL_CustomUI.V4Panel.windowHTML +=
                  '<span id="V4LLPanel_PhoneNumber" role="dialog" style="position:relative;float:left;padding:6px 0 7px 48px; background:url(' +
                  LL_CustomUI.img(
                    LL_CustomUI.V4LLPanel_PhoneNumber_background
                  ) +
                  ") no-repeat 0 2px !important; font-family: " +
                  LL_CustomUI.V4LLPanel_PhoneNumber_font_family +
                  ";color: #" +
                  LL_CustomUI.V4LLPanel_passToBeginText_color +
                  ' !important;">'),
                (LL_CustomUI.V4Panel.windowHTML +=
                  '<span id="V4LLPanel_PhoneNumberText" aria-hidden="true" style="position:relative;float:left;color: #' +
                  LL_CustomUI.V4LLPanel_passToBeginText_color +
                  ' !important;">'),
                (LL_CustomUI.V4Panel.windowHTML +=
                  LL_CustomUI.V4LLPanel_notconnected_callUsAt_text),
                (LL_CustomUI.V4Panel.windowHTML += "</span>"),
                (LL_CustomUI.V4Panel.windowHTML +=
                  '<span id="V4LLPanel_phoneNum" aria-hidden="true" style="font-size: ' +
                  LL_CustomUI.V4LLPanel_phoneNum_font_size +
                  "px;color: #" +
                  LL_CustomUI.V4LLPanel_passToBeginText_color +
                  " !important; font-family: " +
                  LL_CustomUI.V4LLPanel_PhoneNumber_digits_font_family +
                  ' !important;">'),
                (LL_CustomUI.V4Panel.windowHTML +=
                  LL_CustomUI.V4LLPanel_notconnected_phoneNumber),
                (LL_CustomUI.V4Panel.windowHTML += "</span>"),
                (LL_CustomUI.V4Panel.windowHTML +=
                  '<span id="V4LLPanel_HiddenPhone" style="display:none;" aria-hidden="false">'),
                (LL_CustomUI.V4Panel.windowHTML +=
                  LL_CustomUI.V4LLPanel_notconnected_callUsAt_text +
                  " &nbsp; " +
                  LL_CustomUI.V4LLPanel_notconnected_phoneNumber),
                (LL_CustomUI.V4Panel.windowHTML += "</span>"),
                (LL_CustomUI.V4Panel.windowHTML += "</span>"),
                (LL_CustomUI.V4Panel.windowHTML += "</p>")),
            (LL_CustomUI.V4Panel.windowHTML += "</td>"),
            (LL_CustomUI.V4Panel.windowHTML += "</tr>"),
            (LL_CustomUI.V4Panel.windowHTML += "</table></div>"),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<div style="height:37px;overflow:hidden;"><table role="presentation" border="0" cellpadding="0" cellspacing="0" style="background-color: transparent; margin-top:0;">'),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<tr style="background-color:transparent;">'),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<td style="height: 37px;vertical-align: middle; padding: 0; border: 0; background-color: transparent !important;">'),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<p id="V4LLPanel_provideCodeMessage" style="line-height: 17px;font-weight:normal;width:277px; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; text-align:center; text-align:center; margin: 0; padding: 0 10px; color:#' +
              LL_CustomUI.V4LLPanel_provideCodeMessage_color +
              "; font-size: " +
              LL_CustomUI.V4LLPanel_provideCodeMessage_font_size +
              "px !important; font-family: " +
              LL_CustomUI.V4LLPanel_provideCodeMessage_font_family +
              ';">'),
            (LL_CustomUI.V4Panel.windowHTML +=
              LL_CustomUI.V4LLPanel_notconnected_provideNumber_text),
            (LL_CustomUI.V4Panel.windowHTML += "</p>"),
            (LL_CustomUI.V4Panel.windowHTML += "</td>"),
            (LL_CustomUI.V4Panel.windowHTML += "</tr>"),
            (LL_CustomUI.V4Panel.windowHTML += "</table></div>"),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<p id="V4LLPanel_NumberBox" aria-live="assertive" style="font-weight:normal;-webkit-box-sizing: content-box; -moz-box-sizing: content-box; box-sizing: content-box; text-align: center; padding: 13px 0 12px 0; margin: 5px 0; height:22px; line-height:23px; width:252px; margin-left:10px; background-color: #' +
              LL_CustomUI.V4LLPanel_NumberBox_background_color +
              " !important; color: #" +
              LL_CustomUI.V4LLPanel_NumberBox_color +
              " !important; font-size: " +
              LL_CustomUI.V4LLPanel_NumberBox_font_size +
              "px !important; font-family: " +
              LL_CustomUI.V4LLPanel_NumberBox_font_family +
              ';"><span style="margin-top:3px; background:url(' +
              LL_CustomUI.img(
                "/framework/v4/resources/images/V4LLPanel/V4LLPanelPreload.gif"
              ) +
              ') no-repeat; width:15px; height:15px; display:block; margin:0 auto; margin-top:1px;" id="V4LLPanel_Preload"></span></p>'),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<p id="V4LLPanel_DisconnectBtn" style="display:none;width:252px; margin-left:10px; margin-top:7px; padding-top:12px; background: url(' +
              LL_CustomUI.img(LL_CustomUI.V4LLPanel_separator) +
              ') repeat-x !important; _margin-top:19px !important;" class="LLV4Separator"><a id="V4LLPanel_DisconnectTrigger" role="button" tabindex="0.1" aria-label="' +
              LL_CustomUI.ADA_V4LLPanel_DisconnectTrigger +
              '" onmouseover="LL_CustomUI.V4Panel.toggleDisconnectBtn(true)" onmouseout="LL_CustomUI.V4Panel.toggleDisconnectBtn(false)" onclick="LL_CustomUI.V4Panel.doDisconnect(); return false;" style="height: 24px !important; background: url(' +
              LL_CustomUI.img(
                LL_CustomUI.V4LLPanel_Connected_disconnect_button
              ) +
              ") no-repeat; color: #" +
              LL_CustomUI.V4LLPanel_Connected_disconnect_button_text_color +
              "; font-family: " +
              LL_CustomUI.V4LLPanel_Connected_disconnect_button_text_font_family +
              "; font-size: " +
              LL_CustomUI.V4LLPanel_Connected_disconnect_button_text_font_size +
              "px; font-weight: " +
              LL_CustomUI.V4LLPanel_Connected_disconnect_button_text_font_weight +
              " !important; font-style: " +
              LL_CustomUI.V4LLPanel_Connected_disconnect_button_text_font_style +
              ' !important; margin-bottom:8px; margin-top:2px; width:142px; text-align:center; display:block; text-decoration:none; padding-top:5px; margin-left:58px;" href="javascript:void(0)">' +
              LL_CustomUI.V4LLPanel_Connected_disconnect_button_text +
              "</a></p>"),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<div id="V4LLPanel_termsAndConditionsText" style="height: 15px; width:252px; margin-left:10px; padding-top:18px; margin-top:10px; text-align:center; background: url(' +
              LL_CustomUI.img(LL_CustomUI.LLpassToBeginText_background) +
              ') repeat-x left top !important;" class="LLV4Separator">'),
            (LL_CustomUI.V4Panel.windowHTML +=
              LL_CustomUI.V4Panel.termsAndConditionsRow),
            (LL_CustomUI.V4Panel.windowHTML += "</div>"),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<p id="V4LLPanel_PoweredBy" style="font-weight:normal;width:252px; margin-left: 10px !important; text-align: center; padding: 4px 0; margin: 14px 0; padding-top:8px; height:15px; clear:both; background: url(' +
              LL_CustomUI.img(LL_CustomUI.LLpassToBeginText_background) +
              ") repeat-x left top !important; color: #" +
              LL_CustomUI.V4LLPanel_PoweredBy_color +
              " !important; font-family: " +
              LL_CustomUI.V4LLPanel_PoweredBy_font_family +
              " !important; font-size: " +
              LL_CustomUI.V4LLPanel_PoweredBy_font_size +
              'px !important; _margin-left: 12px !important;" class="LLV4Separator">' +
              LL_CustomUI.V4LLPanel_notconnected_poweredBy_text +
              '</p><span hidden="true" style="display:none;" aria-hidden="false">' +
              LL_CustomUI.ADA_V4LLPanel_notconnected_poweredBy_modalEnd +
              "</span>"),
            (LL_CustomUI.V4Panel.windowHTML += "</div>"),
            (LL_CustomUI.V4Panel.windowHTML += "</div>"),
            (LL_CustomUI.V4Panel.innerHTML = LL_CustomUI.V4Panel.windowHTML),
            (LL_CustomUI.V4Panel.displayError = function () {
              if (!LL_CustomUI.V4Panel.displayError_shown) {
                (LL_CustomUI.$("V4LLPanel_NumberBox").style.display = "none"),
                  (LL_CustomUI.$("V4LLPanel_provideCodeMessage").innerHTML =
                    LL_CustomUI.v3TryLater),
                  (LL_CustomUI.$("V4LLPanel_provideCodeMessage").style.width =
                    "250px"),
                  (LL_CustomUI.$("V4LLPanel_provideCodeMessage").style.margin =
                    "5px"),
                  (LL_CustomUI.$("V4LLPanel_provideCodeMessage").style.padding =
                    "5px");
                var o = LL_CustomUI.$("V4LLPanel_InnerTitle").cloneNode(!0);
                o.setAttribute("id", "V4LLPanel_InnerTitle_error"),
                  LL_CustomUI.$("V4LLPanel_CollapsedNarrowNoAgent").appendChild(
                    o
                  );
                var t = LL_CustomUI.$("V4LLPanel_provideCodeMessage"),
                  n = 1;
                try {
                  for (
                    ;
                    6 > n &&
                    ((t = t.parentNode),
                    t.style.height &&
                      (t.style.height = parseInt(t.style.height) + 23 + "px"),
                    n++,
                    "BODY" != t.nodeName);

                  );
                } catch (e) {}
                LL_CustomUI.V4Panel.displayError_shown = !0;
              }
            }),
            (LL_CustomUI.V4Panel.start = function () {
              LL_CustomUI.V4Panel.numberGenerationWindow = LL_CustomUI.$(
                "V4LLPanel"
              );
            }),
            (LL_CustomUI.V4Panel.getInitialHandle = function () {
              (LL_CustomUI.V4Panel.initialHandle = LL_CustomUI.$(
                "V4LLPanel_GenericToggler"
              )),
                (LL_CustomUI.V4Panel.initialHandleNumberGenerated = LL_CustomUI.$(
                  "V4LLPanel_CollapsedNarrowNoAgent"
                ));
            }),
            (LL_CustomUI.V4Panel.toggle = function (o) {
              if ("expand" == o) {
                if (
                  (LL_CustomUI.commonFunctions.toggleADA_State(
                    "V4LLPanel_PanelMinimize,V4LLPanel_PanelClose,V4LLPanel_TermsAndConditions,V4LLPanel_PoweredBy,V4LLPanel_HiddenPhone,V4LLPanel_provideCodeMessage",
                    "enable"
                  ),
                  (LL_CustomUI.V4Panel.isOpen = !0),
                  LL_CustomUI.V4Panel.start(),
                  (LL_CustomUI.V4Panel.numberGenerationWindow.style.height =
                    LL_CustomUI.V4Panel.numberGenerationWindowHeight + "px"),
                  LL_CustomUI.commonFunctions.isQuirksMode() &&
                    (parseInt(LL_CustomUI.$("V4LLPanel").style.height) >= 1
                      ? LL_CustomUI.commonFunctions.setPositionOnScroll(
                          "V4LLPanel",
                          0,
                          LL_CustomUI.V4LLPanel_position
                        )
                      : LL_CustomUI.commonFunctions.setPositionOnScroll(
                          "V4LLPanel",
                          LL_CustomUI.V4Panel.numberGenerationWindowHeight,
                          LL_CustomUI.V4LLPanel_position
                        )),
                  LL_CustomUI.commonFunctions.doFocus("V4LLPanel"),
                  LL_CustomUI.V4Panel.numberAlreadyGenerated)
                )
                  LL_CustomUI.commonFunctions.doFocus("V4LLPanel_NumberBox");
                else if (LL_CustomUI.V4Panel.isPreviewMode) {
                  var t = Math.floor(9e5 * Math.random()) + 1e5;
                  LL_CustomUI.V4Panel.setPresentationCode(t);
                } else LL_ICB_Core.init(), LL_ICB_Core.StartSession();
                (LL_CustomUI.$("V4LLPanel_HintBlock").style.visibility =
                  "hidden"),
                  (LL_CustomUI.$(
                    "V4LLPanel_CollapsedNarrowNoAgent"
                  ).style.visibility = "hidden"),
                  0 != LL_CustomUI.V4Panel.automaticClosingTimer &&
                    LL_CustomUI.V4Panel.automaticClosingTimer.clear(),
                  (LL_CustomUI.V4Panel.automaticClosingTimer = new LL_CustomUI.commonFunctions.Timeout(
                    function () {
                      LL_CustomUI.V4Panel.collapse();
                    },
                    9999
                  ));
              } else if ("collapse" == o) {
                if (
                  LL_CustomUI.V4Panel.isDisconnectConfirmWindowOpen ||
                  (LL_CustomUI.$("V4LLPanelDisconnectConfirmWindow") &&
                    "block" ==
                      LL_CustomUI.$("V4LLPanelDisconnectConfirmWindow").style
                        .display)
                )
                  return;
                if (
                  !LL_CustomUI.V4Panel.isOpen &&
                  !LL_CustomUI.V4Panel.presentationCode
                )
                  return;
                LL_CustomUI.commonFunctions.toggleADA_State(
                  "V4LLPanel_PanelMinimize,V4LLPanel_PanelClose,V4LLPanel_TermsAndConditions,V4LLPanel_PoweredBy,V4LLPanel_CloseConfirmButton,V4LLPanel_CloseDeclineButton,V4LLPanel_HiddenPhone,V4LLPanel_provideCodeMessage",
                  "disable"
                ),
                  (LL_CustomUI.V4Panel.isOpen = !1),
                  LL_CustomUI.V4Panel.start(),
                  LL_CustomUI.commonFunctions.isQuirksMode()
                    ? (LL_CustomUI.V4Panel.numberGenerationWindow.style.height =
                        "1px")
                    : (LL_CustomUI.V4Panel.numberGenerationWindow.style.height =
                        "0px"),
                  LL_CustomUI.termsAndConditionsWindow
                    .isTermsAndConditionsEnabled &&
                    LL_CustomUI.V4Panel.presentationCode &&
                    (LL_CustomUI.$(
                      "V4LLPanel_TermsAndConditionsToggler"
                    ).style.visibility = "hidden"),
                  (LL_CustomUI.$(
                    "V4LLPanel_CollapsedNarrowNoAgent"
                  ).style.visibility = "visible"),
                  LL_CustomUI.commonFunctions.doFocus(
                    "V4LLPanel_CollapsedNarrowNoAgent"
                  ),
                  (LL_CustomUI.$("V4LLPanel_GenericToggler").style.display =
                    "none"),
                  0 != LL_CustomUI.V4Panel.automaticClosingTimer &&
                    LL_CustomUI.V4Panel.automaticClosingTimer.clear();
              }
            }),
            (LL_CustomUI.V4Panel.expand = function () {
              LL_CustomUI.V4Panel.toggle("expand");
            }),
            (LL_CustomUI.V4Panel.collapse = function () {
              LL_CustomUI.V4Panel.toggle("collapse");
            }),
            (LL_CustomUI.V4Panel.hide = function (o) {
              o || (o = 0),
                setTimeout(function () {
                  try {
                    (LL_CustomUI.$(
                      "V4LLPanel_CollapsedNarrowNoAgent"
                    ).style.display = "none"),
                      (LL_CustomUI.$("V4LLPanel_HintBlock").style.display =
                        "none"),
                      (LL_CustomUI.$("V4LLPanel_GenericToggler").style.display =
                        "none"),
                      (LL_CustomUI.$("V4LLPanel").style.display = "none");
                  } catch (o) {}
                }, o);
            }),
            (LL_CustomUI.V4Panel.setPresentationCode = function (o) {
              LL_CustomUI.V4Panel.presentationCode = o;
              var t = LL_CustomUI.$("V4LLPanel_CollapsedNumContNarrow");
              window.LL_ICB_Core && LL_ICB_Core.SID
                ? ((t.innerHTML = LL_CustomUI.V3Activating_text),
                  (t.style.fontWeight = "bold"))
                : (t.innerHTML = o),
                window.LL_Storage_Manager &&
                  window.LL_ICB_Core &&
                  LL_ICB_Core.presentationToken &&
                  LL_Storage_Manager.setItemAsync(
                    LL_ICB_Core.presentationToken,
                    "presentationCode",
                    o
                  );
              6 == o.length &&
                (o = "" + o.substring(0, 3) + " " + o.substring(3, 6)),
                setTimeout(function () {
                  try {
                    LL_CustomUI.$("V4LLPanel_NumberBox") &&
                      (window.LL_ICB_Core && LL_ICB_Core.SID
                        ? (LL_CustomUI.$("V4LLPanel_NumberBox").innerHTML =
                            LL_CustomUI.V3Activating_text)
                        : (LL_CustomUI.$("V4LLPanel_NumberBox").innerHTML = o),
                      LL_CustomUI.commonFunctions.doFocus(
                        "V4LLPanel_NumberBox"
                      ));
                  } catch (t) {}
                }, 40),
                (LL_CustomUI.V4Panel.numberAlreadyGenerated = !0);
            }),
            (LL_CustomUI.V4Panel.setAgentConnected = function () {
              (LL_CustomUI.$("V4LLPanel_DisconnectBtn").style.display =
                "block"),
                (LL_CustomUI.V4Panel.isAgentConnected = !0);
            }),
            (LL_CustomUI.V4Panel.toggleDisconnectBtn = function (o) {
              var t =
                  "url('" +
                  LL_CustomUI.img(
                    o
                      ? LL_CustomUI.V4LLPanel_Connected_disconnect_button_hover
                      : LL_CustomUI.V4LLPanel_Connected_disconnect_button
                  ) +
                  "') no-repeat",
                n = o
                  ? LL_CustomUI.V4LLPanel_Connected_disconnect_button_text_hover_color
                  : LL_CustomUI.V4LLPanel_Connected_disconnect_button_text_color;
              (LL_CustomUI.$(
                "V4LLPanel_DisconnectTrigger"
              ).style.background = t),
                (LL_CustomUI.$("V4LLPanel_DisconnectTrigger").style.color =
                  "#" + n);
            }),
            (LL_CustomUI.V4Panel.doDisconnect = function (o) {
              if ((LL_CustomUI.V4Panel.hide(), window.LL_Debug)) {
                var t = window.communicationHandler
                  ? communicationHandler.presentationToken
                  : LL_ICB_Core.presentationToken;
                LL_Debug.set(t, "DisconnectReason", "UserAction");
              }
              LL_ICB_Core.doDisconnect(!0, o),
                window.LL_Storage_Manager &&
                  (LL_Storage_Manager.clear(LL_ICB_Core.siteCode),
                  LL_Storage_Manager.clear(LL_ICB_Core.siteCode),
                  LL_Storage_Manager.clear(LL_ICB_Core.presentationToken));
            }),
            (LL_CustomUI.V4Panel.openTermsAndConditions = function () {
              try {
                var o = window.open(
                  LL_CustomUI.V4Panel.faqURL,
                  "FAQ",
                  "toolbar=0,scrollbars=yes,location=0,statusbar=0,menubar=0,resizable=0,titlebar=0,status=0,width=615,height=613, left=" +
                    (screen.width - 610) / 2 +
                    ",top=" +
                    (screen.height - 613) / 2
                );
                o.focus();
              } catch (t) {}
            }),
            (LL_CustomUI.V4Panel.openDisconnectConfirmWindow = function () {
              LL_CustomUI.V4Panel.toggleConfirmYesBtn(!1),
                LL_CustomUI.V4Panel.toggleConfirmNoBtn(!1),
                (LL_CustomUI.$(
                  "V4LLPanelDisconnectConfirmWindow"
                ).style.display = "block"),
                (LL_CustomUI.V4Panel.isDisconnectConfirmWindowOpen = !0),
                0 != LL_CustomUI.V4Panel.automaticClosingTimer &&
                  LL_CustomUI.V4Panel.automaticClosingTimer.clear(),
                LL_CustomUI.commonFunctions.toggleADA_State(
                  "V4LLPanel_CloseDeclineButton,V4LLPanel_CloseConfirmButton",
                  "enable"
                ),
                LL_CustomUI.commonFunctions.toggleADA_State(
                  "V4LLPanel_PanelMinimize,V4LLPanel_PanelClose,V4LLPanel_TermsAndConditions",
                  "disable"
                ),
                LL_CustomUI.commonFunctions.doFocus(
                  "V4LLPanelDisconnectConfirmWindow"
                );
            }),
            (LL_CustomUI.V4Panel.confirmSessionEnd = function (o) {
              if ((LL_CustomUI.V4Panel.declineSessionEnd(), window.LL_Debug)) {
                var t = window.communicationHandler
                  ? communicationHandler.presentationToken
                  : LL_ICB_Core.presentationToken;
                LL_Debug.set(t, "DisconnectReason", "UserAction");
              }
              LL_ICB_Core.errorOccured && (LL_ICB_Core.errorOccured = !1),
                LL_ICB_Core.doDisconnect(!0, o),
                "undefined" != typeof LL_CustomUI.termsAndConditionsWindow &&
                  (LL_CustomUI.termsAndConditionsWindow.isScrollbarInitialized = !1);
            }),
            (LL_CustomUI.V4Panel.declineSessionEnd = function () {
              LL_CustomUI.commonFunctions.toggleADA_State(
                "V4LLPanel_PanelMinimize,V4LLPanel_PanelClose,V4LLPanel_TermsAndConditions",
                "enable"
              );
              try {
                (LL_CustomUI.V4Panel.isDisconnectConfirmWindowOpen = !1),
                  (LL_CustomUI.$(
                    "V4LLPanelDisconnectConfirmWindow"
                  ).style.display = "none");
              } catch (o) {}
              0 != LL_CustomUI.V4Panel.automaticClosingTimer &&
                LL_CustomUI.V4Panel.automaticClosingTimer.clear(),
                (LL_CustomUI.V4Panel.automaticClosingTimer = new LL_CustomUI.commonFunctions.Timeout(
                  function () {
                    try {
                      LL_CustomUI.V4Panel.collapse();
                    } catch (o) {}
                  },
                  9999
                )),
                LL_CustomUI.commonFunctions.toggleADA_State(
                  "V4LLPanel_CloseDeclineButton,V4LLPanel_CloseConfirmButton",
                  "disable"
                );
            }),
            (LL_CustomUI.V4Panel.toggleConfirmYesBtn = function (o) {
              var t =
                  "url('" +
                  LL_CustomUI.img(
                    o
                      ? LL_CustomUI.V4LLPanel_CloseConfirmButton_background_hover
                      : LL_CustomUI.V4LLPanel_CloseConfirmButton_background
                  ) +
                  "') no-repeat",
                n = o
                  ? LL_CustomUI.V4LLPanel_CloseConfirmButton_hover_text_color
                  : LL_CustomUI.V4LLPanel_CloseConfirmButton_text_color;
              LL_CustomUI.$("V4LLPanel_CloseConfirmButton") &&
                ((LL_CustomUI.$(
                  "V4LLPanel_CloseConfirmButton"
                ).style.background = t),
                (LL_CustomUI.$("V4LLPanel_CloseConfirmButton").style.color =
                  "#" + n));
            }),
            (LL_CustomUI.V4Panel.toggleConfirmNoBtn = function (o) {
              var t =
                  "url('" +
                  LL_CustomUI.img(
                    o
                      ? LL_CustomUI.V4LLPanel_CloseConfirmButton_background_hover
                      : LL_CustomUI.V4LLPanel_CloseConfirmButton_background
                  ) +
                  "') no-repeat",
                n = o
                  ? LL_CustomUI.V4LLPanel_CloseConfirmButton_hover_text_color
                  : LL_CustomUI.V4LLPanel_CloseConfirmButton_text_color;
              LL_CustomUI.$("V4LLPanel_CloseDeclineButton") &&
                ((LL_CustomUI.$(
                  "V4LLPanel_CloseDeclineButton"
                ).style.background = t),
                (LL_CustomUI.$("V4LLPanel_CloseDeclineButton").style.color =
                  "#" + n));
            }),
            (LL_CustomUI.V4Panel.loadScrollPlugin = function (o) {
              var t = function () {};
              window.LL_ICB_Core &&
              "function" == typeof LL_ICB_Core.createJsonRequest
                ? (t = LL_ICB_Core.createJsonRequest)
                : window.LL_Mini_Launcher &&
                  "function" == typeof LL_Mini_Launcher.createJsonRequest &&
                  (t = LL_Mini_Launcher.createJsonRequest),
                t(
                  "https://" +
                    LL_Deployment.mainServerPath +
                    "/webinterfaces/icb/client/js/include/jquery.jscrollpane.min.js",
                  "jscrollpane_url"
                );
            }),
            (LL_CustomUI.V4Panel.hint = {}),
            (LL_CustomUI.V4Panel.hint.show = function () {
              "hidden" !=
                LL_CustomUI.$("V4LLPanel_HintBlock").style.visibility ||
                ("bottom_right" != LL_CustomUI.V4LLPanel_position &&
                  "bottom_left" != LL_CustomUI.V4LLPanel_position &&
                  "bottom_middle" != LL_CustomUI.V4LLPanel_position) ||
                (LL_CustomUI.$("V4LLPanel_HintBlock").style.visibility =
                  "visible");
            }),
            (LL_CustomUI.V4Panel.hint.hide = function () {
              LL_CustomUI.$("V4LLPanel_HintBlock").style.visibility = "hidden";
            }),
            (LL_CustomUI.V4Panel.enablePreviewMode = function () {
              LL_CustomUI.V4Panel.isPreviewMode = !0;
            }),
            (LL_CustomUI.V4Panel.isAndroid = function () {
              try {
                var o = navigator.userAgent,
                  t =
                    o.indexOf("Mozilla/5.0") > -1 &&
                    o.indexOf("Android ") > -1 &&
                    o.indexOf("AppleWebKit") > -1;
                return t ? !0 : !1;
              } catch (n) {
                return !1;
              }
            }),
            (LL_CustomUI.V4Panel.adaptV4panel = function () {
              (LL_CustomUI.V4Panel.orginalHeight = window.innerHeight),
                (LL_CustomUI.V4Panel.mobile_timer = ""),
                LL_CustomUI.commonFunctions.listen("resize", window, function (
                  o
                ) {
                  (LL_CustomUI.V4Panel.orginalHeight = window.innerHeight),
                    LL_CustomUI.V4Panel.showAdaptedV4Panel();
                }),
                LL_CustomUI.commonFunctions.listen("scroll", window, function (
                  o
                ) {
                  LL_CustomUI.V4Panel.showAdaptedV4Panel();
                });
              var o = document.getElementsByTagName("body")[0];
              o.addEventListener(
                "gestureend",
                LL_CustomUI.V4Panel.showAdaptedV4Panel,
                !1
              ),
                setTimeout(function () {
                  LL_CustomUI.V4Panel.showAdaptedV4Panel();
                }, 100);
            }),
            (LL_CustomUI.V4Panel.showAdaptedV4Panel = function () {
              clearTimeout(LL_CustomUI.V4Panel.mobile_timer),
                (LL_CustomUI.V4Panel.mobile_timer = setTimeout(function () {
                  window.innerHeight / LL_CustomUI.V4Panel.orginalHeight < 0.7
                    ? ((document.getElementById(
                        "V4LLPanel_CollapsedNarrowNoAgent"
                      ).style.position = "fixed"),
                      (document.getElementById(
                        "V4LLPanel_CollapsedNarrowNoAgent"
                      ).style.top = ""),
                      (document.getElementById(
                        "V4LLPanel_CollapsedNarrowNoAgent"
                      ).style.left = ""))
                    : ((document.getElementById(
                        "V4LLPanel_CollapsedNarrowNoAgent"
                      ).style.position = "absolute"),
                      (document.getElementById(
                        "V4LLPanel_CollapsedNarrowNoAgent"
                      ).style.top =
                        window.innerHeight - 36 + window.scrollY + "px"),
                      (document.getElementById(
                        "V4LLPanel_CollapsedNarrowNoAgent"
                      ).style.left =
                        window.innerWidth - 175 + window.scrollX + "px"));
                }, 333));
            }),
            (LL_CustomUI.V4Panel.appendElements = function () {
              if (!LL_CustomUI.$("V4LLPanel")) {
                var o = document.createElement("div");
                (o.id = "V4LLPanel_Container"),
                  (o.innerHTML = LL_CustomUI.V4Panel.windowHTML),
                  document.body.appendChild(o);
                try {
                  LL_CustomUI.V4Panel.isAndroid() &&
                    "bottom_right" == LL_CustomUI.V4LLPanel_position &&
                    LL_CustomUI.V4Panel.adaptV4panel();
                } catch (t) {}
                LL_CustomUI.V4LLPanel_position.indexOf("middle") > 0 &&
                  (LL_CustomUI.commonFunctions.setElementInTheMiddle(
                    "V4LLPanel_CollapsedNarrowNoAgent",
                    LL_CustomUI.V4LLPanel_position
                  ),
                  LL_CustomUI.commonFunctions.setElementInTheMiddle(
                    "V4LLPanel_GenericToggler",
                    LL_CustomUI.V4LLPanel_position
                  ),
                  LL_CustomUI.commonFunctions.setElementInTheMiddle(
                    "V4LLPanel",
                    LL_CustomUI.V4LLPanel_position
                  ),
                  LL_CustomUI.commonFunctions.setElementInTheMiddle(
                    "V4LLPanel_HintBlock",
                    LL_CustomUI.V4LLPanel_position
                  )),
                  LL_CustomUI.V4LLPanel_position.indexOf("middle") > 0 &&
                    LL_CustomUI.commonFunctions.listen(
                      "resize",
                      window,
                      function (o) {
                        document.getElementById(
                          "V4LLPanel_CollapsedNarrowNoAgent"
                        ) &&
                          (LL_CustomUI.commonFunctions.setElementInTheMiddle(
                            "V4LLPanel_CollapsedNarrowNoAgent",
                            LL_CustomUI.V4LLPanel_position
                          ),
                          LL_CustomUI.commonFunctions.setElementInTheMiddle(
                            "V4LLPanel_GenericToggler",
                            LL_CustomUI.V4LLPanel_position
                          ),
                          LL_CustomUI.commonFunctions.setElementInTheMiddle(
                            "V4LLPanel",
                            LL_CustomUI.V4LLPanel_position
                          ),
                          LL_CustomUI.commonFunctions.setElementInTheMiddle(
                            "V4LLPanel_HintBlock",
                            LL_CustomUI.V4LLPanel_position
                          ));
                      }
                    ),
                  LL_CustomUI.commonFunctions.isQuirksMode() &&
                    LL_CustomUI.commonFunctions.listen(
                      "scroll",
                      window,
                      function () {
                        var o = LL_CustomUI.commonFunctions.GetScrollPosition();
                        null != LL_CustomUI.$("V4LLPanel_GenericToggler") &&
                          (LL_CustomUI.$(
                            "V4LLPanel_GenericToggler"
                          ).style.bottom = -o + "px"),
                          null !=
                            LL_CustomUI.$("V4LLPanel_CollapsedNarrowNoAgent") &&
                            (LL_CustomUI.$(
                              "V4LLPanel_CollapsedNarrowNoAgent"
                            ).style.bottom = -o + "px"),
                          null != LL_CustomUI.$("V4LLPanel_HintBlock") &&
                            (LL_CustomUI.$("V4LLPanel_HintBlock").style.bottom =
                              -o + 30 + "px"),
                          null != LL_CustomUI.$("V4LLPanel") &&
                            (LL_CustomUI.$("V4LLPanel").style.bottom =
                              -o + "px");
                      }
                    ),
                  ((LL_CustomUI.commonFunctions.isBottomLocation() &&
                    LL_CustomUI.commonFunctions.getInternetExplorerVersion() <=
                      7 &&
                    -1 !=
                      LL_CustomUI.commonFunctions.getInternetExplorerVersion()) ||
                    LL_CustomUI.commonFunctions.isQuirksMode()) &&
                    LL_CustomUI.commonFunctions.listen(
                      "scroll",
                      window,
                      function () {
                        null != LL_CustomUI.$("V4LLPanel_GenericToggler") &&
                          LL_CustomUI.commonFunctions.setPositionOnScroll(
                            "V4LLPanel_GenericToggler",
                            0,
                            LL_CustomUI.V4LLPanel_position
                          ),
                          null !=
                            LL_CustomUI.$("V4LLPanel_CollapsedNarrowNoAgent") &&
                            LL_CustomUI.commonFunctions.setPositionOnScroll(
                              "V4LLPanel_CollapsedNarrowNoAgent",
                              0,
                              LL_CustomUI.V4LLPanel_position
                            ),
                          null != LL_CustomUI.$("V4LLPanel_HintBlock") &&
                            LL_CustomUI.commonFunctions.setPositionOnScroll(
                              "V4LLPanel_HintBlock",
                              30,
                              LL_CustomUI.V4LLPanel_position
                            ),
                          parseInt(LL_CustomUI.$("V4LLPanel").style.height) >= 1
                            ? LL_CustomUI.commonFunctions.setPositionOnScroll(
                                "V4LLPanel",
                                0,
                                LL_CustomUI.V4LLPanel_position
                              )
                            : LL_CustomUI.commonFunctions.setPositionOnScroll(
                                "V4LLPanel",
                                LL_CustomUI.V4Panel
                                  .numberGenerationWindowHeight,
                                LL_CustomUI.V4LLPanel_position
                              );
                      }
                    ),
                  ((LL_CustomUI.commonFunctions.isBottomLocation() &&
                    LL_CustomUI.commonFunctions.getInternetExplorerVersion() <=
                      7 &&
                    -1 !=
                      LL_CustomUI.commonFunctions.getInternetExplorerVersion()) ||
                    LL_CustomUI.commonFunctions.isQuirksMode()) &&
                    LL_CustomUI.commonFunctions.listen(
                      "resize",
                      window,
                      function () {
                        document.getElementById(
                          "V4LLPanel_CollapsedNarrowNoAgent"
                        ) &&
                          (LL_CustomUI.commonFunctions.setPositionOnScroll(
                            "V4LLPanel_GenericToggler",
                            0,
                            LL_CustomUI.V4LLPanel_position
                          ),
                          LL_CustomUI.commonFunctions.setPositionOnScroll(
                            "V4LLPanel_CollapsedNarrowNoAgent",
                            0,
                            LL_CustomUI.V4LLPanel_position
                          ),
                          LL_CustomUI.commonFunctions.setPositionOnScroll(
                            "V4LLPanel_HintBlock",
                            30,
                            LL_CustomUI.V4LLPanel_position
                          ),
                          parseInt(LL_CustomUI.$("V4LLPanel").style.height) >= 1
                            ? LL_CustomUI.commonFunctions.setPositionOnScroll(
                                "V4LLPanel",
                                0,
                                LL_CustomUI.V4LLPanel_position
                              )
                            : LL_CustomUI.commonFunctions.setPositionOnScroll(
                                "V4LLPanel",
                                LL_CustomUI.V4Panel
                                  .numberGenerationWindowHeight,
                                LL_CustomUI.V4LLPanel_position
                              ));
                      }
                    ),
                  ((LL_CustomUI.commonFunctions.isBottomLocation() &&
                    LL_CustomUI.commonFunctions.getInternetExplorerVersion() <=
                      7 &&
                    -1 !=
                      LL_CustomUI.commonFunctions.getInternetExplorerVersion()) ||
                    LL_CustomUI.commonFunctions.isQuirksMode()) &&
                    (LL_CustomUI.commonFunctions.setPositionOnScroll(
                      "V4LLPanel_GenericToggler",
                      0,
                      LL_CustomUI.V4LLPanel_position
                    ),
                    LL_CustomUI.commonFunctions.setPositionOnScroll(
                      "V4LLPanel_CollapsedNarrowNoAgent",
                      0,
                      LL_CustomUI.V4LLPanel_position
                    ),
                    LL_CustomUI.commonFunctions.setPositionOnScroll(
                      "V4LLPanel_HintBlock",
                      30,
                      LL_CustomUI.V4LLPanel_position
                    ),
                    parseInt(LL_CustomUI.$("V4LLPanel").style.height) >= 1
                      ? LL_CustomUI.commonFunctions.setPositionOnScroll(
                          "V4LLPanel",
                          0,
                          LL_CustomUI.V4LLPanel_position
                        )
                      : LL_CustomUI.commonFunctions.setPositionOnScroll(
                          "V4LLPanel",
                          LL_CustomUI.V4Panel.numberGenerationWindowHeight,
                          LL_CustomUI.V4LLPanel_position
                        )),
                  LL_CustomUI.commonFunctions.isQuirksMode() &&
                    (LL_CustomUI.$("V4LLPanel").style.height = "1px"),
                  (LL_CustomUI.$("V4LLPanel").className += "makeVisible"),
                  LL_CustomUI.commonFunctions.listen("click", window, function (
                    o
                  ) {
                    var t = o.target || o.srcElement;
                    t.id.indexOf("LLPanel") < 0 &&
                      1 == LL_CustomUI.V4Panel.isOpen &&
                      LL_CustomUI.V4Panel.collapse();
                  }),
                  LL_CustomUI.V4Panel.isPreviewMode ||
                    (LL_CustomUI.commonFunctions.listen(
                      "mouseover",
                      LL_CustomUI.$("V4LLPanel"),
                      function (o) {
                        0 != LL_CustomUI.V4Panel.automaticClosingTimer &&
                          LL_CustomUI.V4Panel.automaticClosingTimer.clear();
                      }
                    ),
                    LL_CustomUI.commonFunctions.listen(
                      "mouseout",
                      LL_CustomUI.$("V4LLPanel"),
                      function (o) {
                        (window.LL_Deployment &&
                          LL_Deployment.v4CustomButtonID &&
                          !LL_CustomUI.V4Panel.presentationCode) ||
                          LL_CustomUI.V4Panel.isDisconnectConfirmWindowOpen ||
                          (0 != LL_CustomUI.V4Panel.automaticClosingTimer &&
                            LL_CustomUI.V4Panel.automaticClosingTimer.clear(),
                          (LL_CustomUI.V4Panel.automaticClosingTimer = new LL_CustomUI.commonFunctions.Timeout(
                            function () {
                              try {
                                LL_CustomUI.V4Panel.collapse();
                              } catch (o) {}
                            },
                            9999
                          )));
                      }
                    )),
                  LL_CustomUI.commonFunctions.toggleADA_State(
                    "V4LLPanel_PanelMinimize,V4LLPanel_PanelClose,V4LLPanel_TermsAndConditions,V4LLPanel_PoweredBy,V4LLPanel_CloseConfirmButton,V4LLPanel_CloseDeclineButton,V4LLPanel_HiddenPhone,V4LLPanel_provideCodeMessage",
                    "disable"
                  ),
                  "undefined" != typeof LL_Deployment.v4CustomButtonID &&
                    "" != LL_Deployment.v4CustomButtonID &&
                    LL_Deployment.v4CustomButtonID &&
                    "new" == window.LL_CustomUI.V4PanelState &&
                    (LL_CustomUI.anyPositionV4PanelOpener.init(),
                    (LL_CustomUI.$(
                      "V4LLPanel_GenericToggler"
                    ).style.visibility = "hidden"),
                    LL_CustomUI.termsAndConditionsWindow
                      .isTermsAndConditionsEnabled &&
                      ((LL_CustomUI.$(
                        "V4LLPanel_TermsAndConditionsToggler"
                      ).style.visibility = "hidden"),
                      "undefined" != typeof $ &&
                        LL_CustomUI.V4Panel.loadScrollPlugin($))),
                  !LL_CustomUI.termsAndConditionsWindow
                    .isTermsAndConditionsEnabled ||
                    ("undefined" != typeof LL_Deployment.v4CustomButtonID &&
                      "" != LL_Deployment.v4CustomButtonID) ||
                    ("undefined" != typeof $ &&
                      LL_CustomUI.V4Panel.loadScrollPlugin($),
                    LL_CustomUI.termsAndConditionsWindow.appendElements(),
                    (LL_CustomUI.$(
                      "V4LLPanel_GenericToggler"
                    ).style.visibility = "hidden"),
                    "undefined" != typeof LL_Deployment.v4CustomButtonID &&
                      "" != LL_Deployment.v4CustomButtonID &&
                      (LL_CustomUI.$(
                        "V4LLPanel_TermsAndConditionsToggler"
                      ).style.visibility = "hidden")),
                  LL_CustomUI.commonFunctions.removeListener(
                    "mouseover",
                    "V4LLPanel_CloseDeclineButton,V4LLPanel_CloseConfirmButton",
                    LL_CustomUI.commonFunctions.globalMouseOverHandler
                  ),
                  LL_CustomUI.commonFunctions.listen(
                    "mouseover",
                    "V4LLPanel_CloseDeclineButton,V4LLPanel_CloseConfirmButton",
                    LL_CustomUI.commonFunctions.globalMouseOverHandler
                  );
              }
            }),
            (LL_CustomUI.V4Panel.init = LL_CustomUI.V4Panel.appendElements))
          : ((LL_CustomUI.V4Panel = {}),
            (LL_CustomUI.V4Panel.windowHTML = ""),
            (LL_CustomUI.V4Panel.agentConntectedView = ""),
            (LL_CustomUI.V4Panel.numberGenerationWindow = ""),
            (LL_CustomUI.V4Panel.initialHandleNumberGenerated = ""),
            (LL_CustomUI.V4Panel.faqURL = LL_CustomUI.V4LLPanel_FAQURL),
            (LL_CustomUI.V4Panel.isAgentConnected = !1),
            (LL_CustomUI.V4Panel.closeWhenIdleTimeout = ""),
            (LL_CustomUI.V4Panel.automaticClosingTimer = ""),
            (LL_CustomUI.V4Panel.isOpen = !1),
            (LL_CustomUI.V4Panel.isPreviewMode = !1),
            (LL_CustomUI.V4Panel.agentConnectedWindowHeight = 214),
            (LL_CustomUI.V4Panel.numberGenerationWindowHeight = 302),
            (LL_CustomUI.V4Panel.presentationCode = ""),
            (LL_CustomUI.commonFunctions.isLeftLocation() ||
              LL_CustomUI.commonFunctions.isRightLocation()) &&
              (LL_CustomUI.V4Panel.numberGenerationWindowHeight = 308),
            (LL_CustomUI.V4Panel.mobile_timer = ""),
            (LL_CustomUI.V4Panel.orginalHeight = ""),
            LL_CustomUI.commonFunctions.isLeftLocation()
              ? LL_CustomUI.commonFunctions.isAnyIE()
                ? (LL_CustomUI.V4Panel.windowHTML +=
                    '<div id="V4LLPanel_CollapsedNarrow" style="width:36px; height:157px; visibility:hidden; z-index:1500001; position:fixed; _position:absolute !important; ' +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    " cursor:pointer; overflow: hidden; background: url(" +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_Connected_collapsed_background
                    ) +
                    ") no-repeat !important; " +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    '" onclick="LL_CustomUI.V4Panel.expand()"><span id="V4LLPanel_CollapsedNumContNarrow" aria-label="' +
                    LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow_connected +
                    '" role="button" aria-live="assertive" tabindex="0" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg); -webkit-transform:rotate(-90deg); -moz-transform:rotate(-90deg); -o-transform: rotate(-90deg); margin:46px 8px 12px 9px; float:left; font-family: ' +
                    LL_CustomUI.V4LLPanel_header_number_font_family +
                    "; font-size: " +
                    LL_CustomUI.V4LLPanel_header_number_font_size +
                    "px; color: #" +
                    LL_CustomUI.V4LLPanel_header_number_color +
                    "; " +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    '"></span><div id="V4LLPanel_InnerLogo" style="background: url(' +
                    LL_CustomUI.img(LL_CustomUI.V4LLPanel_header_logo) +
                    ') no-repeat !important; margin: 19px 10px 0 5px; width: 23px; height: 24px; float: left; _margin-left: 5px !important;" class="LLV4Logo"></div></div>')
                : (LL_CustomUI.V4Panel.windowHTML +=
                    '<div id="V4LLPanel_CollapsedNarrow" style="width:36px; height:157px; visibility:hidden; z-index:1500001; position:fixed; _position:absolute !important; ' +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    " cursor:pointer; overflow: hidden; background: url(" +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_Connected_collapsed_background
                    ) +
                    ") no-repeat !important; " +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    '" onclick="LL_CustomUI.V4Panel.expand()"><span id="V4LLPanel_CollapsedNumContNarrow" aria-label="' +
                    LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow_connected +
                    '" role="button" aria-live="assertive" tabindex="0" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg); -webkit-transform:rotate(-90deg); -moz-transform:rotate(-90deg); -o-transform: rotate(-90deg); float:left; margin:59px 8px 0 -8px; font-family: ' +
                    LL_CustomUI.V4LLPanel_header_number_font_family +
                    "; font-size: " +
                    LL_CustomUI.V4LLPanel_header_number_font_size +
                    "px; color: #" +
                    LL_CustomUI.V4LLPanel_header_number_color +
                    "; " +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    '"></span><div id="V4LLPanel_InnerLogo" style="background: url(' +
                    LL_CustomUI.img(LL_CustomUI.V4LLPanel_header_logo) +
                    ') no-repeat !important; margin: 48px 10px 0 5px; width: 23px; height: 24px; float: left; _margin-left: 5px !important;" class="LLV4Logo"></div></div>')
              : LL_CustomUI.commonFunctions.isRightLocation()
              ? LL_CustomUI.commonFunctions.isAnyIE()
                ? (LL_CustomUI.V4Panel.windowHTML +=
                    '<div id="V4LLPanel_CollapsedNarrow" style="width:36px; height:157px; visibility:hidden; z-index:1500001; position:fixed; _position:absolute !important; ' +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    " cursor:pointer; overflow: hidden; background: url(" +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_Connected_collapsed_background
                    ) +
                    ") no-repeat !important; " +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    '" onclick="LL_CustomUI.V4Panel.expand()"><span id="V4LLPanel_CollapsedNumContNarrow" aria-label="' +
                    LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow_connected +
                    '" role="button" aria-live="assertive" tabindex="0" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg); -webkit-transform:rotate(-90deg); -moz-transform:rotate(-90deg); -o-transform: rotate(-90deg); margin:46px 8px 12px 12px; float: left; font-family: ' +
                    LL_CustomUI.V4LLPanel_header_number_font_family +
                    "; font-size: " +
                    LL_CustomUI.V4LLPanel_header_number_font_size +
                    "px; color: #" +
                    LL_CustomUI.V4LLPanel_header_number_color +
                    "; " +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    '"></span><div id="V4LLPanel_InnerLogo" style="background: url(' +
                    LL_CustomUI.img(LL_CustomUI.V4LLPanel_header_logo) +
                    ') no-repeat !important; margin: 19px 10px 0 9px; width: 23px; height: 24px; float: left; _margin-left: 5px !important;" class="LLV4Logo"></div></div>')
                : (LL_CustomUI.V4Panel.windowHTML +=
                    '<div id="V4LLPanel_CollapsedNarrow" style="width:36px; height:157px; visibility:hidden; z-index:1500001; position:fixed; _position:absolute !important; ' +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    " cursor:pointer; overflow: hidden; background: url(" +
                    LL_CustomUI.img(
                      LL_CustomUI.V4LLPanel_Connected_collapsed_background
                    ) +
                    ") no-repeat !important; " +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    '" onclick="LL_CustomUI.V4Panel.expand()"><span id="V4LLPanel_CollapsedNumContNarrow" aria-label="' +
                    LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow_connected +
                    '" role="button" aria-live="assertive" tabindex="0" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg); -webkit-transform:rotate(-90deg); -moz-transform:rotate(-90deg); -o-transform: rotate(-90deg); float:left; margin:59px 8px 0 -3px; font-family: ' +
                    LL_CustomUI.V4LLPanel_header_number_font_family +
                    "; font-size: " +
                    LL_CustomUI.V4LLPanel_header_number_font_size +
                    "px; color: #" +
                    LL_CustomUI.V4LLPanel_header_number_color +
                    "; " +
                    LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                      LL_CustomUI.V4LLPanel_position,
                      LL_CustomUI.V4LLPanel_position_offset
                    ) +
                    '"></span><div id="V4LLPanel_InnerLogo" style="background: url(' +
                    LL_CustomUI.img(LL_CustomUI.V4LLPanel_header_logo) +
                    ') no-repeat !important; margin: 48px 10px 0 9px; width: 23px; height: 24px; float: left; _margin-left: 5px !important;" class="LLV4Logo"></div></div>')
              : (LL_CustomUI.V4Panel.windowHTML +=
                  '<div id="V4LLPanel_CollapsedNarrow" style="width:157px; height:36px; visibility:hidden; z-index:1500001; position:fixed; _position:absolute !important; ' +
                  LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                    LL_CustomUI.V4LLPanel_position,
                    LL_CustomUI.V4LLPanel_position_offset
                  ) +
                  " cursor:pointer; overflow: hidden; background: url(" +
                  LL_CustomUI.img(
                    LL_CustomUI.V4LLPanel_Connected_collapsed_background
                  ) +
                  ") no-repeat !important; " +
                  LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                    LL_CustomUI.V4LLPanel_position,
                    LL_CustomUI.V4LLPanel_position_offset
                  ) +
                  '" onclick="LL_CustomUI.V4Panel.expand()"><div id="V4LLPanel_InnerLogo" style="background: url(' +
                  LL_CustomUI.img(LL_CustomUI.V4LLPanel_header_logo) +
                  ') no-repeat !important; margin: 9px 10px 0 10px; width: 23px; height: 24px; float: left; _margin-left: 5px !important;" class="LLV4Logo"></div><span id="V4LLPanel_CollapsedNumContNarrow" aria-label="' +
                  LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow_connected +
                  '" role="button" aria-live="assertive" tabindex="0" style="font-family: ' +
                  LL_CustomUI.V4LLPanel_header_number_font_family +
                  "; font-size: " +
                  LL_CustomUI.V4LLPanel_header_number_font_size +
                  "px; float:left; margin:12px 0 0 0; display:inline-block; width: 98px; text-align:center; color: #" +
                  LL_CustomUI.V4LLPanel_header_number_color +
                  "; " +
                  LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                    LL_CustomUI.V4LLPanel_position,
                    LL_CustomUI.V4LLPanel_position_offset
                  ) +
                  '"></span></div>'),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<div id="V4LLPanel" style="width: 284px; position: fixed; _position:absolute !important; z-index: 1500002; height: 0; overflow: hidden; background: url(' +
              LL_CustomUI.img(LL_CustomUI.V4LLPanel_background) +
              ") no-repeat !important;" +
              LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
                LL_CustomUI.V4LLPanel_position,
                LL_CustomUI.V4LLPanel_position_offset
              ) +
              '">'),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<div id="V4LLPanel_InnerContainer" style="position: relative; padding: 42px 0 0 4px; zoom: 1; height: 130px; width: 277px !important;">'),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<div id="V4LLPanel_MovingToggler"  style="width: 256px; height: 46px; cursor: pointer; position: absolute; left: 0; top: 0; margin-left: 10px; background: url(' +
              LL_CustomUI.img(LL_CustomUI.V4LLPanel_separator) +
              ') repeat-x left bottom;" class="LLV4Separator" onclick="LL_CustomUI.V4Panel.collapse()"><div id="V4LLPanel_LogoToggler" style="background:url(' +
              LL_CustomUI.img(LL_CustomUI.V4LLPanel_header_logo) +
              ') no-repeat !important; margin:13px 16px 0 3px; width: 23px; height: 24px; float: left;" class="LLV4Logo"><div id="V4LLPanel_PanelClose" aria-label="' +
              LL_CustomUI.ADA_V4LLPanel_PanelClose +
              '" role="button" tabindex="0" style="position: absolute; width:17px; height:17px; cursor:pointer; margin:7px 0 0 0; right: 0; background:url(' +
              LL_CustomUI.img(LL_CustomUI.V4LLPanel_header_close_image) +
              ') no-repeat !important;"></div></div><span id="V4LLPanel_TogglerText" style="position:absolute; top: 17px; left: 34px; font-family: ' +
              LL_CustomUI.V4LLPanel_header_text_font_family +
              " !important; font-size: " +
              LL_CustomUI.V4LLPanel_header_text_font_size +
              "px !important; color: #" +
              LL_CustomUI.V4LLPanel_header_text_color +
              " !important; font-weight: " +
              LL_CustomUI.V4LLPanel_header_text_font_weight +
              " !important; font-style: " +
              LL_CustomUI.V4LLPanel_header_text_font_style +
              ' !important;" class="V4LLTitleText">' +
              LL_CustomUI.V4LLPanel_header_text +
              "</span>"),
            (LL_CustomUI.V4Panel.windowHTML += "</div>"),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<div id="V4LLPanel_ExpertConnectedText" style="text-align:center; width:276px; height: 79px; _height: 50px !important; _line-height: 25px; vertical-align: middle; display: table-cell !important; color: #' +
              LL_CustomUI.V4LLPanel_Connected_content_text_color +
              " !important; font-family: " +
              LL_CustomUI.V4LLPanel_Connected_content_text_font_family +
              " !important; font-size: " +
              LL_CustomUI.V4LLPanel_Connected_content_text_font_size +
              "px !important; font-weight: " +
              LL_CustomUI.V4LLPanel_Connected_content_text_font_weight +
              " !important; font-style: " +
              LL_CustomUI.V4LLPanel_Connected_content_text_font_style +
              ' !important; _padding-top:19px !important; ">' +
              LL_CustomUI.V4LLPanel_Connected_content_text +
              "</div>"),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<p id="V4LLPanel_DisconnectBtn" style="width:252px; margin-left:10px; margin-top:7px; padding-top:12px; background: url(' +
              LL_CustomUI.img(LL_CustomUI.V4LLPanel_separator) +
              ') repeat-x !important; _margin-top:10px !important;" class="LLV4Separator"><a id="V4LLPanel_DisconnectTrigger" tabindex="0.1" role="button" aria-label="' +
              LL_CustomUI.ADA_V4LLPanel_DisconnectTrigger +
              '" onmouseover="LL_CustomUI.V4Panel.toggleDisconnectBtn(true)" onmouseout="LL_CustomUI.V4Panel.toggleDisconnectBtn(false)" onclick="LL_CustomUI.V4Panel.doDisconnect(); return false;" style="height: 24px !important; background: url(' +
              LL_CustomUI.img(
                LL_CustomUI.V4LLPanel_Connected_disconnect_button
              ) +
              ") no-repeat; color: #" +
              LL_CustomUI.V4LLPanel_Connected_disconnect_button_text_color +
              "; font-family: " +
              LL_CustomUI.V4LLPanel_Connected_disconnect_button_text_font_family +
              "; font-size: " +
              LL_CustomUI.V4LLPanel_Connected_disconnect_button_text_font_size +
              "px; font-weight: " +
              LL_CustomUI.V4LLPanel_Connected_disconnect_button_text_font_weight +
              " !important; font-style: " +
              LL_CustomUI.V4LLPanel_Connected_disconnect_button_text_font_style +
              ' !important; margin-bottom:8px; margin-top:2px; width:142px; text-align:center; display:block; text-decoration:none; padding-top:5px; margin-left:58px;" href="javascript:void(0)">' +
              LL_CustomUI.V4LLPanel_Connected_disconnect_button_text +
              "</a></p>"),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<p id="V4LLPanel_PoweredBy" style="width:252px; margin-left: 10px !important; text-align: center; padding: 4px 0; margin: 14px 0; padding-top:8px; height:15px; clear:both; background: url(' +
              LL_CustomUI.img(LL_CustomUI.V4LLPanel_separator) +
              ") repeat-x left top !important; color: #" +
              LL_CustomUI.V4LLPanel_Connected_footer_text_color +
              " !important; font-family: " +
              LL_CustomUI.V4LLPanel_Connected_footer_text_font_family +
              "; font-size: " +
              LL_CustomUI.V4LLPanel_Connected_footer_text_font_size +
              "px !important; font-weight: " +
              LL_CustomUI.V4LLPanel_Connected_footer_text_font_weight +
              " !important; font-style: " +
              LL_CustomUI.V4LLPanel_Connected_footer_text_font_style +
              ' !important; _margin-left: 12px !important;" class="LLV4Separator">' +
              LL_CustomUI.V4LLPanel_Connected_footer_text +
              "</p>"),
            (LL_CustomUI.V4Panel.windowHTML += "</div>"),
            (LL_CustomUI.V4Panel.windowHTML +=
              '<div style="display:none">' +
              LL_CustomUI.ADA_V4LLPanel_modalEnd +
              "</div>"),
            (LL_CustomUI.V4Panel.windowHTML += "</div>"),
            (LL_CustomUI.V4Panel.innerHTML = LL_CustomUI.V4Panel.windowHTML),
            (LL_CustomUI.V4Panel.start = function () {
              LL_CustomUI.V4Panel.agentConntectedView = LL_CustomUI.$(
                "V4LLPanel"
              );
            }),
            (LL_CustomUI.V4Panel.getInitialHandle = function () {
              LL_CustomUI.V4Panel.agentConntectedView = LL_CustomUI.$(
                "V4LLPanel_CollapsedNarrow"
              );
            }),
            (LL_CustomUI.V4Panel.toggle = function (o) {
              "expand" == o
                ? (LL_CustomUI.V4Panel.start(),
                  (LL_CustomUI.V4Panel.isOpen = !0),
                  (LL_CustomUI.V4Panel.agentConntectedView.style.height =
                    LL_CustomUI.V4Panel.agentConnectedWindowHeight + "px"),
                  (LL_CustomUI.$("V4LLPanel_CollapsedNarrow").style.visibility =
                    "hidden"),
                  LL_CustomUI.commonFunctions.toggleADA_State(
                    "V4LLPanel_DisconnectTrigger,V4LLPanel_PanelClose",
                    "enable"
                  ),
                  LL_CustomUI.commonFunctions.doFocus("V4LLPanel"),
                  LL_CustomUI.commonFunctions.isQuirksMode() &&
                    window.scrollBy(0, 1))
                : "collapse" == o &&
                  (LL_CustomUI.V4Panel.start(),
                  LL_CustomUI.commonFunctions.isQuirksMode()
                    ? (LL_CustomUI.V4Panel.agentConntectedView.style.height =
                        "1px")
                    : (LL_CustomUI.V4Panel.agentConntectedView.style.height =
                        "0px"),
                  (LL_CustomUI.$("V4LLPanel_CollapsedNarrow").style.visibility =
                    "visible"),
                  LL_CustomUI.commonFunctions.toggleADA_State(
                    "V4LLPanel_DisconnectTrigger,V4LLPanel_PanelClose",
                    "disable"
                  ),
                  LL_CustomUI.commonFunctions.doFocus(
                    "V4LLPanel_CollapsedNarrow"
                  ),
                  (LL_CustomUI.V4Panel.isOpen = !1),
                  LL_CustomUI.V4Panel.isPreviewMode &&
                    ((LL_CustomUI.$(
                      "V4LLPanel_CollapsedNarrow"
                    ).style.visibility = "visible"),
                    LL_CustomUI.V4Panel.setPresentationCode("123456")),
                  LL_CustomUI.V4Panel.isPreviewMode ||
                    0 == LL_CustomUI.V4Panel.automaticClosingTimer ||
                    LL_CustomUI.V4Panel.automaticClosingTimer.clear());
            }),
            (LL_CustomUI.V4Panel.expand = function () {
              LL_CustomUI.V4Panel.toggle("expand");
              var o = LL_CustomUI.$("V4LLPanel_CollapsedNarrow").style.position;
              if ("absolute" == o) {
                var t = LL_CustomUI.commonFunctions.GetScrollPosition();
                0 == t ? window.scrollBy(0, 1) : window.scrollBy(0, -1);
              }
            }),
            (LL_CustomUI.V4Panel.collapse = function () {
              LL_CustomUI.V4Panel.toggle("collapse");
            }),
            (LL_CustomUI.V4Panel.hide = function (o) {
              o || (o = 0),
                setTimeout(function () {
                  try {
                    (LL_CustomUI.$("V4LLPanel_CollapsedNarrow").style.display =
                      "none"),
                      (LL_CustomUI.$("V4LLPanel").style.display = "none");
                  } catch (o) {}
                }, o);
            }),
            (LL_CustomUI.V4Panel.toggleDisconnectBtn = function (o) {
              var t =
                  "url('" +
                  LL_CustomUI.img(
                    o
                      ? LL_CustomUI.V4LLPanel_Connected_disconnect_button_hover
                      : LL_CustomUI.V4LLPanel_Connected_disconnect_button
                  ) +
                  "') no-repeat",
                n = o
                  ? LL_CustomUI.V4LLPanel_Connected_disconnect_button_text_hover_color
                  : LL_CustomUI.V4LLPanel_Connected_disconnect_button_text_color;

              (LL_CustomUI.$(
                "V4LLPanel_DisconnectTrigger"
              ).style.background = t),
                (LL_CustomUI.$("V4LLPanel_DisconnectTrigger").style.color =
                  "#" + n);
            }),
            (LL_CustomUI.V4Panel.doDisconnect = function (o) {
              LL_CustomUI.V4Panel.hide(),
                window.LL_Debug &&
                  window.communicationHandler &&
                  LL_Debug.set(
                    communicationHandler.presentationToken,
                    "DisconnectReason",
                    "UserAction"
                  ),
                LL_ICB_Core.doDisconnect(!0, o),
                LL_CustomUI.V4Panel.setSpinner(),
                LL_Storage_Manager &&
                  window.communicationHandler &&
                  (LL_Storage_Manager.clear(LL_ICB_Core.siteCode),
                  LL_Storage_Manager.clear(LL_ICB_Core.siteCode),
                  LL_Storage_Manager.clear(
                    communicationHandler.presentationToken
                  ));
            }),
            (LL_CustomUI.V4Panel.setPresentationCode = function (o) {
              LL_CustomUI.V4Panel.presentationCode = o;
              var t = LL_CustomUI.$("V4LLPanel_CollapsedNumContNarrow");
              window.LL_ICB_Core &&
                LL_ICB_Core.SID &&
                ((o = LL_CustomUI.v4_activated_text),
                t && (t.style.fontWeight = "bold")),
                t
                  ? t.innerHTML != o && (t.innerHTML = o)
                  : setTimeout(function () {
                      LL_CustomUI.V4Panel.setPresentationCode(o);
                    }, 1e3);
            }),
            (LL_CustomUI.V4Panel.setAgentConnected = function () {
              (LL_CustomUI.V4Panel.isAgentConnected = !0),
                (LL_CustomUI.V4Panel.isOpen = !0),
                "FRAME" == LL_Deployment.icbType
                  ? ((LL_CustomUI.$("V4LLPanel").style.height =
                      LL_CustomUI.V4Panel.agentConnectedWindowHeight + "px"),
                    (LL_CustomUI.$(
                      "V4LLPanel_ExpertConnectedText"
                    ).style.display = "table-cell"),
                    LL_CustomUI.V4Panel.isPreviewMode ||
                      (0 != LL_CustomUI.V4Panel.automaticClosingTimer &&
                        LL_CustomUI.V4Panel.automaticClosingTimer.clear(),
                      (LL_CustomUI.V4Panel.automaticClosingTimer = new LL_CustomUI.commonFunctions.Timeout(
                        function () {
                          LL_CustomUI.V4Panel.collapse();
                        },
                        3999
                      ))))
                  : ((LL_CustomUI.$(
                      "V4LLPanel_ExpertConnectedText"
                    ).style.display = "table-cell"),
                    LL_CustomUI.V4Panel.collapse());
            }),
            (LL_CustomUI.V4Panel.enablePreviewMode = function () {
              isPreviewMode = !0;
            }),
            (LL_CustomUI.V4Panel.setSpinner = function () {
              var o =
                  "<img src=" +
                  LL_CustomUI.img(
                    "/framework/v4/resources/images/V4LLPanel/V4LLPanelPreload.gif"
                  ) +
                  " style='margin-top:2px;' alt='Please wait...' />",
                t = LL_CustomUI.$("V4LLPanel_CollapsedNumContNarrow");
              t && (t.innerHTML = o);
            }),
            (LL_CustomUI.V4Panel.isAndroid = function () {
              try {
                var o = navigator.userAgent,
                  t =
                    o.indexOf("Mozilla/5.0") > -1 &&
                    o.indexOf("Android ") > -1 &&
                    o.indexOf("AppleWebKit") > -1;
                return t ? !0 : !1;
              } catch (n) {
                return !1;
              }
            }),
            (LL_CustomUI.V4Panel.adaptV4panel = function () {
              (LL_CustomUI.V4Panel.orginalHeight = window.innerHeight),
                (LL_CustomUI.V4Panel.mobile_timer = ""),
                LL_CustomUI.commonFunctions.listen("resize", window, function (
                  o
                ) {
                  (LL_CustomUI.V4Panel.orginalHeight = window.innerHeight),
                    LL_CustomUI.V4Panel.showAdaptedV4Panel();
                }),
                LL_CustomUI.commonFunctions.listen("scroll", window, function (
                  o
                ) {
                  LL_CustomUI.V4Panel.showAdaptedV4Panel();
                });
              var o = document.getElementsByTagName("body")[0];
              o.addEventListener(
                "gestureend",
                LL_CustomUI.V4Panel.showAdaptedV4Panel,
                !1
              ),
                setTimeout(function () {
                  LL_CustomUI.V4Panel.showAdaptedV4Panel();
                }, 100);
            }),
            (LL_CustomUI.V4Panel.showAdaptedV4Panel = function () {
              clearTimeout(LL_CustomUI.V4Panel.mobile_timer),
                (LL_CustomUI.V4Panel.mobile_timer = setTimeout(function () {
                  window.innerHeight / LL_CustomUI.V4Panel.orginalHeight < 0.7
                    ? ((document.getElementById(
                        "V4LLPanel_CollapsedNarrow"
                      ).style.position = "fixed"),
                      (document.getElementById(
                        "V4LLPanel_CollapsedNarrow"
                      ).style.top = ""),
                      (document.getElementById(
                        "V4LLPanel_CollapsedNarrow"
                      ).style.left = ""))
                    : ((document.getElementById(
                        "V4LLPanel_CollapsedNarrow"
                      ).style.position = "absolute"),
                      (document.getElementById(
                        "V4LLPanel_CollapsedNarrow"
                      ).style.top =
                        window.innerHeight - 36 + window.scrollY + "px"),
                      (document.getElementById(
                        "V4LLPanel_CollapsedNarrow"
                      ).style.left =
                        window.innerWidth - 175 + window.scrollX + "px"));
                }, 333));
            }),
            (LL_CustomUI.V4Panel.appendElements = function () {
              LL_CustomUI.commonFunctions.removeNodes(
                "V4LLPanel_HintBlock,V4LLPanel_GenericToggler,V4LLPanel,V4LLPanel_CollapsedNarrowNoAgent,V4LLPanel_CollapsedNarrow,V4LLPanel_Container"
              );
              var o = document.createElement("div");
              (o.id = "V4LLPanel_Container"),
                (o.innerHTML = LL_CustomUI.V4Panel.windowHTML),
                document.body.appendChild(o),
                LL_CustomUI.V4Panel.setAgentConnected();
              try {
                LL_CustomUI.V4Panel.isAndroid() &&
                  "bottom_right" == LL_CustomUI.V4LLPanel_position &&
                  LL_CustomUI.V4Panel.adaptV4panel();
              } catch (t) {}
              LL_CustomUI.V4LLPanel_position.indexOf("middle") > 0 &&
                (LL_CustomUI.commonFunctions.setElementInTheMiddle(
                  "V4LLPanel_CollapsedNarrow",
                  LL_CustomUI.V4LLPanel_position
                ),
                LL_CustomUI.commonFunctions.setElementInTheMiddle(
                  "V4LLPanel",
                  LL_CustomUI.V4LLPanel_position
                )),
                LL_CustomUI.V4LLPanel_position.indexOf("middle") > 0 &&
                  LL_CustomUI.commonFunctions.listen(
                    "resize",
                    window,
                    function (o) {
                      document.getElementById("V4LLPanel_CollapsedNarrow") &&
                        (LL_CustomUI.commonFunctions.setElementInTheMiddle(
                          "V4LLPanel_CollapsedNarrow",
                          LL_CustomUI.V4LLPanel_position
                        ),
                        LL_CustomUI.commonFunctions.setElementInTheMiddle(
                          "V4LLPanel",
                          LL_CustomUI.V4LLPanel_position
                        ));
                    }
                  ),
                LL_CustomUI.commonFunctions.isQuirksMode() &&
                  LL_CustomUI.commonFunctions.listen(
                    "scroll",
                    window,
                    function () {
                      var o = LL_CustomUI.$("V4LLPanel_CollapsedNarrow").style
                        .position;
                      if ("absolute" == o) {
                        var t = LL_CustomUI.commonFunctions.GetScrollPosition();
                        (LL_CustomUI.$(
                          "V4LLPanel_CollapsedNarrow"
                        ).style.bottom = -t + "px"),
                          (LL_CustomUI.$("V4LLPanel").style.bottom = -t + "px");
                      }
                    }
                  ),
                ((LL_CustomUI.commonFunctions.isBottomLocation() &&
                  LL_CustomUI.commonFunctions.getInternetExplorerVersion() <=
                    7 &&
                  -1 !=
                    LL_CustomUI.commonFunctions.getInternetExplorerVersion()) ||
                  LL_CustomUI.commonFunctions.isQuirksMode()) &&
                  (LL_CustomUI.commonFunctions.setPositionOnScroll(
                    "V4LLPanel_CollapsedNarrow",
                    0,
                    LL_CustomUI.V4LLPanel_position
                  ),
                  parseInt(LL_CustomUI.$("V4LLPanel").style.height) >= 1
                    ? LL_CustomUI.commonFunctions.setPositionOnScroll(
                        "V4LLPanel",
                        0,
                        LL_CustomUI.V4LLPanel_position
                      )
                    : LL_CustomUI.commonFunctions.setPositionOnScroll(
                        "V4LLPanel",
                        LL_CustomUI.V4Panel.agentConnectedWindowHeight,
                        LL_CustomUI.V4LLPanel_position
                      )),
                ((LL_CustomUI.commonFunctions.isBottomLocation() &&
                  LL_CustomUI.commonFunctions.getInternetExplorerVersion() <=
                    7 &&
                  -1 !=
                    LL_CustomUI.commonFunctions.getInternetExplorerVersion()) ||
                  LL_CustomUI.commonFunctions.isQuirksMode()) &&
                  LL_CustomUI.commonFunctions.listen(
                    "resize",
                    window,
                    function () {
                      document.getElementById("V4LLPanel_CollapsedNarrow") &&
                        (LL_CustomUI.commonFunctions.setPositionOnScroll(
                          "V4LLPanel_CollapsedNarrow",
                          0,
                          LL_CustomUI.V4LLPanel_position
                        ),
                        parseInt(LL_CustomUI.$("V4LLPanel").style.height) >= 1
                          ? LL_CustomUI.commonFunctions.setPositionOnScroll(
                              "V4LLPanel",
                              0,
                              LL_CustomUI.V4LLPanel_position
                            )
                          : LL_CustomUI.commonFunctions.setPositionOnScroll(
                              "V4LLPanel",
                              LL_CustomUI.V4Panel.agentConnectedWindowHeight,
                              LL_CustomUI.V4LLPanel_position
                            ));
                    }
                  ),
                ((LL_CustomUI.commonFunctions.isBottomLocation() &&
                  LL_CustomUI.commonFunctions.getInternetExplorerVersion() <=
                    7 &&
                  -1 !=
                    LL_CustomUI.commonFunctions.getInternetExplorerVersion()) ||
                  LL_CustomUI.commonFunctions.isQuirksMode()) &&
                  LL_CustomUI.commonFunctions.listen(
                    "scroll",
                    window,
                    function () {
                      LL_CustomUI.commonFunctions.setPositionOnScroll(
                        "V4LLPanel_CollapsedNarrow",
                        0,
                        LL_CustomUI.V4LLPanel_position
                      ),
                        parseInt(LL_CustomUI.$("V4LLPanel").style.height) >= 1
                          ? LL_CustomUI.commonFunctions.setPositionOnScroll(
                              "V4LLPanel",
                              0,
                              LL_CustomUI.V4LLPanel_position
                            )
                          : LL_CustomUI.commonFunctions.setPositionOnScroll(
                              "V4LLPanel",
                              LL_CustomUI.V4Panel.agentConnectedWindowHeight,
                              LL_CustomUI.V4LLPanel_position
                            );
                    }
                  ),
                LL_CustomUI.commonFunctions.listen("click", window, function (
                  o
                ) {
                  var t = o.target || o.srcElement;
                  t.id.indexOf("LLPanel") < 0 &&
                    LL_CustomUI.V4Panel.isOpen &&
                    LL_CustomUI.V4Panel.collapse();
                }),
                LL_CustomUI.V4Panel.isPreviewMode ||
                  (LL_CustomUI.commonFunctions.listen(
                    "mouseover",
                    LL_CustomUI.$("V4LLPanel"),
                    function (o) {
                      0 != LL_CustomUI.V4Panel.automaticClosingTimer &&
                        LL_CustomUI.V4Panel.automaticClosingTimer.clear();
                    }
                  ),
                  LL_CustomUI.commonFunctions.listen(
                    "mouseout",
                    LL_CustomUI.$("V4LLPanel"),
                    function (o) {
                      0 != LL_CustomUI.V4Panel.automaticClosingTimer &&
                        LL_CustomUI.V4Panel.automaticClosingTimer.clear(),
                        (LL_CustomUI.V4Panel.automaticClosingTimer = new LL_CustomUI.commonFunctions.Timeout(
                          function () {
                            try {
                              "new" !== LL_CustomUI.V4PanelState &&
                                LL_CustomUI.V4Panel.collapse();
                            } catch (o) {}
                          },
                          3999
                        ));
                    }
                  )),
                window.LL_Storage_Manager &&
                  window.LL_ICB_Core &&
                  LL_ICB_Core.presentationToken &&
                  LL_Storage_Manager.getItemAsync(
                    LL_ICB_Core.presentationToken,
                    "presentationCode",
                    function (o) {
                      o &&
                        "null" != o &&
                        "undefined" != o &&
                        LL_CustomUI.V4Panel.setPresentationCode(o);
                    }
                  );
            }),
            (LL_CustomUI.V4Panel.init = LL_CustomUI.V4Panel.appendElements)));
  }),
  LL_CustomUI.V4Panel_init(),
  window.LL_CustomUI &&
    !LL_CustomUI.anyPositionV4PanelOpener &&
    ((LL_CustomUI.anyPositionV4PanelOpener = {}),
    (LL_CustomUI.anyPositionV4PanelOpener.movingTimer = 0),
    (LL_CustomUI.anyPositionV4PanelOpener.blockWidth = 284),
    (LL_CustomUI.anyPositionV4PanelOpener.blockHeight =
      LL_CustomUI.V4Panel.numberGenerationWindowHeight),
    (LL_CustomUI.anyPositionV4PanelOpener.position =
      LL_CustomUI.V4LLPanel_position),
    (LL_CustomUI.anyPositionV4PanelOpener.offset =
      LL_CustomUI.V4LLPanel_position_offset),
    (LL_CustomUI.anyPositionV4PanelOpener.elementToMove = ""),
    (LL_CustomUI.anyPositionV4PanelOpener.movementSpeed = 1),
    (LL_CustomUI.anyPositionV4PanelOpener.viewportSize = ""),
    (LL_CustomUI.anyPositionV4PanelOpener.viewportWidth = ""),
    (LL_CustomUI.anyPositionV4PanelOpener.viewportHeight = ""),
    (LL_CustomUI.anyPositionV4PanelOpener.v4CustomButtonID =
      LL_Deployment.v4CustomButtonID),
    (LL_CustomUI.anyPositionV4PanelOpener.animationAlreadyPlayed = !1),
    (LL_CustomUI.anyPositionV4PanelOpener.initialized = !1),
    (LL_CustomUI.anyPositionV4PanelOpener.$ = function (o) {
      return document.getElementById(o);
    }),
    (LL_CustomUI.anyPositionV4PanelOpener.getOffset = function (o) {
      var t = o.getBoundingClientRect(),
        n = document.body,
        e = document.documentElement,
        L = window.pageYOffset || e.scrollTop || n.scrollTop,
        i = window.pageXOffset || e.scrollLeft || n.scrollLeft,
        s = e.clientTop || n.clientTop || 0,
        a = e.clientLeft || n.clientLeft || 0,
        l = t.top + L - s,
        r = t.left + i - a;
      return {
        top: Math.round(l) - LL_CustomUI.commonFunctions.GetScrollPosition(),
        left: Math.round(r),
      };
    }),
    (LL_CustomUI.anyPositionV4PanelOpener.animate = function (o) {
      var t = new Date(),
        n = setInterval(function () {
          var e = new Date() - t,
            L = e / o.duration;
          L > 1 && (L = 1);
          var i = o.delta(L);
          o.step(i), 1 == L && clearInterval(n);
        }, o.delay || 10);
    }),
    (LL_CustomUI.anyPositionV4PanelOpener.animateProperty = function (o) {
      var t = o.xDimension,
        n = o.yDimension,
        e = o.xDimension,
        L = o.yDimension,
        i = o.opacity,
        s = o.position,
        a = o.element,
        l = LL_CustomUI.anyPositionV4PanelOpener.getOffset(
          LL_CustomUI.$(LL_CustomUI.anyPositionV4PanelOpener.v4CustomButtonID)
        );
      LL_CustomUI.anyPositionV4PanelOpener.animate({
        delay: 10,
        duration: o.duration || 1e3,
        delta: o.delta,
        step: function (r) {
          switch (o.mode) {
            case "position":
              try {
                "top_right" == s
                  ? (a.style.right = l.left + n * r + "px")
                  : (a.style.left = l.left + n * r + "px"),
                  (a.style.top = l.top + t * r + "px"),
                  s.indexOf("bottom") >= 0 &&
                    parseInt(a.style.top) >= l.top + t * r &&
                    (a.style.top = "auto"),
                  s.indexOf("right") >= 0 &&
                    parseInt(a.style.left) >= l.left + n * r &&
                    (a.style.left = "auto"),
                  LL_BR_Core.ICBSupported ||
                    "none" != LL_BR_Core.ACBSupported ||
                    (LL_CustomUI.V4Panel.isOpen = !0);
              } catch (m) {}
              break;
            case "size":
              try {
                (a.style.width = e * r + "px"), (a.style.height = L * r + "px");
              } catch (m) {}
              break;
            case "opacity":
              try {
                a.style.opacity = i * r;
              } catch (m) {}
          }
        },
      });
    }),
    (LL_CustomUI.anyPositionV4PanelOpener.circ = function (o) {
      return 1 - Math.sin(Math.acos(o));
    }),
    (LL_CustomUI.anyPositionV4PanelOpener.getViewport = function () {
      var o, t;
      return (
        "undefined" != typeof window.innerWidth
          ? ((o = window.innerWidth), (t = window.innerHeight))
          : "undefined" != typeof document.documentElement &&
            "undefined" != typeof document.documentElement.clientWidth &&
            0 != document.documentElement.clientWidth
          ? ((o = document.documentElement.clientWidth),
            (t = document.documentElement.clientHeight))
          : ((o = document.getElementsByTagName("body")[0].clientWidth),
            (t = document.getElementsByTagName("body")[0].clientHeight)),
        [o, t]
      );
    }),
    (LL_CustomUI.anyPositionV4PanelOpener.openButtonForminLauncher = function () {
      if (!LL_CustomUI.anyPositionV4PanelOpener.initialized) {
        if (
          (!LL_CustomUI.termsAndConditionsWindow.isTermsAndConditionsEnabled ||
          ("" != LL_CustomUI.V4Panel.presentationCode &&
            "undefined" != typeof LL_CustomUI.V4Panel.presentationCode)
            ? (LL_CustomUI.anyPositionV4PanelOpener.elementToMove = LL_CustomUI.$(
                "V4LLPanel"
              ))
            : (LL_CustomUI.termsAndConditionsWindow.appendElements(),
              (LL_CustomUI.anyPositionV4PanelOpener.elementToMove = LL_CustomUI.$(
                "V4LLTermsAndConditionsWindow"
              ))),
          !LL_CustomUI.anyPositionV4PanelOpener.elementToMove)
        )
          return void setTimeout(
            LL_CustomUI.anyPositionV4PanelOpener.openButtonForminLauncher,
            55
          );
        var o = LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.left,
          t = LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.right,
          n = LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.top,
          e = LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.bottom;
        LL_CustomUI.$(LL_CustomUI.anyPositionV4PanelOpener.v4CustomButtonID) &&
          (LL_CustomUI.anyPositionV4PanelOpener.click(),
          (LL_CustomUI.$(
            LL_CustomUI.anyPositionV4PanelOpener.v4CustomButtonID
          ).LL_onclickHanlderExist = !0)),
          LL_CustomUI.commonFunctions.listen("resize", window, function () {
            "undefined" !=
              typeof LL_CustomUI.anyPositionV4PanelOpener.elementToMove &&
              "" != LL_CustomUI.anyPositionV4PanelOpener.elementToMove &&
              ("" != o
                ? (LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.left = o)
                : (LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.left =
                    "auto"),
              "" != t
                ? (LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.right = t)
                : (LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.right =
                    "auto"),
              "" != n
                ? (LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.top = n)
                : (LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.top =
                    "auto"),
              "" != e
                ? (LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.bottom = e)
                : (LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.bottom =
                    "auto"));
          }),
          LL_CustomUI.V4LLPanel_position.indexOf("middle") > 0 &&
            LL_CustomUI.commonFunctions.listen("resize", window, function (o) {
              LL_CustomUI.anyPositionV4PanelOpener.elementToMove &&
                LL_CustomUI.commonFunctions.setElementInTheMiddle(
                  LL_CustomUI.anyPositionV4PanelOpener.elementToMove.id,
                  LL_CustomUI.V4LLPanel_position
                );
            }),
          (LL_CustomUI.anyPositionV4PanelOpener.initialized = !0);
      }
    }),
    (LL_CustomUI.anyPositionV4PanelOpener.click = function () {
      var o = LL_BR_Core.ICBSupported || "none" != LL_BR_Core.ACBSupported;
      if (
        (!LL_CustomUI.$("V4LLPanel_CollapsedNarrowNoAgent") && o) ||
        (!LL_CustomUI.$("V4LLPanel_GenericToggler") && !o)
      )
        return void setTimeout(LL_CustomUI.anyPositionV4PanelOpener.click, 333);
      if (
        ("" != LL_ICB_Core.presentationCode &&
          (LL_CustomUI.anyPositionV4PanelOpener.elementToMove = LL_CustomUI.$(
            "V4LLPanel"
          )),
        LL_BR_Core.ICBSupported ||
          "none" != LL_BR_Core.ACBSupported ||
          ((LL_CustomUI.anyPositionV4PanelOpener.elementToMove = LL_CustomUI.$(
            "V4LLPanel"
          )),
          (LL_CustomUI.anyPositionV4PanelOpener.blockHeight =
            LL_CustomUI.V4Panel.notSupportedEnvironmentWindowHeight),
          (LL_CustomUI.V4Panel.numberGenerationWindowHeight =
            LL_CustomUI.V4Panel.notSupportedEnvironmentWindowHeight)),
        LL_CustomUI.anyPositionV4PanelOpener.animationAlreadyPlayed ||
          ("" != LL_CustomUI.V4Panel.presentationCode &&
            "undefined" != typeof LL_CustomUI.V4Panel.presentationCode))
      )
        "undefined" !=
          typeof LL_CustomUI.anyPositionV4PanelOpener.elementToMove &&
          "" != LL_CustomUI.anyPositionV4PanelOpener.elementToMove &&
          ("new" == LL_CustomUI.V4PanelState
            ? (LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.height =
                LL_CustomUI.V4Panel.numberGenerationWindowHeight + "px")
            : (LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.height =
                LL_CustomUI.V4Panel.agentConnectedWindowHeight + "px"),
          LL_CustomUI.termsAndConditionsWindow.isTermsAndConditionsEnabled &&
            !LL_CustomUI.termsAndConditionsWindow.isScrollbarInitialized &&
            (LL_CustomUI.termsAndConditionsWindow.initializeScrollBar(),
            LL_CustomUI.termsAndConditionsWindow.setScrollBarStyles()),
          LL_BR_Core.ICBSupported ||
            "none" != LL_BR_Core.ACBSupported ||
            ((LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.height =
              LL_CustomUI.V4Panel.notSupportedEnvironmentWindowHeight + "px"),
            (LL_CustomUI.V4Panel.isOpen = !0)));
      else {
        var t = LL_CustomUI.anyPositionV4PanelOpener.getOffset(
            LL_CustomUI.$(LL_CustomUI.anyPositionV4PanelOpener.v4CustomButtonID)
          ),
          n = LL_CustomUI.anyPositionV4PanelOpener.GenerateLLV4PanelPosition(
            LL_CustomUI.anyPositionV4PanelOpener.position,
            LL_CustomUI.anyPositionV4PanelOpener.offset
          ),
          e = {
            element: LL_CustomUI.anyPositionV4PanelOpener.elementToMove,
            delta: LL_CustomUI.anyPositionV4PanelOpener.circ,
            duration: 600,
            mode: "position",
            xDimension: parseInt(n[0]) - t.top,
            yDimension: parseInt(n[1]) - t.left,
            opacity: "",
            position: LL_CustomUI.V4LLPanel_position,
          };
        LL_CustomUI.anyPositionV4PanelOpener.animateProperty(e);
        var L = {
          element: LL_CustomUI.anyPositionV4PanelOpener.elementToMove,
          delta: LL_CustomUI.anyPositionV4PanelOpener.circ,
          duration: 600,
          mode: "size",
          xDimension: LL_CustomUI.anyPositionV4PanelOpener.blockWidth,
          yDimension: LL_CustomUI.anyPositionV4PanelOpener.blockHeight,
          opacity: "",
          position: "",
        };
        LL_CustomUI.anyPositionV4PanelOpener.animateProperty(L);
        var i = {
          element: LL_CustomUI.anyPositionV4PanelOpener.elementToMove,
          delta: LL_CustomUI.anyPositionV4PanelOpener.circ,
          duration: 600,
          mode: "opacity",
          xDimension: "",
          yDimension: "",
          opacity: 1,
          position: "",
        };
        LL_CustomUI.anyPositionV4PanelOpener.animateProperty(i),
          LL_CustomUI.termsAndConditionsWindow.isTermsAndConditionsEnabled ||
            setTimeout(function () {
              (LL_CustomUI.$(
                "V4LLPanel_CollapsedNarrowNoAgent"
              ).style.visibility = "hidden"),
                LL_CustomUI.V4Panel.expand();
            }, 10),
          (LL_CustomUI.anyPositionV4PanelOpener.animationAlreadyPlayed = !0),
          LL_CustomUI.termsAndConditionsWindow.isTermsAndConditionsEnabled &&
            setTimeout(function () {
              LL_CustomUI.termsAndConditionsWindow.initializeScrollBar(),
                LL_CustomUI.termsAndConditionsWindow.setScrollBarStyles();
            }, 100);
      }
    }),
    (LL_CustomUI.anyPositionV4PanelOpener.addHandlerCounter = 0),
    (LL_CustomUI.anyPositionV4PanelOpener.addClickHandler = function () {
      return LL_CustomUI.anyPositionV4PanelOpener.v4CustomButtonID &&
        !LL_CustomUI.$(LL_CustomUI.anyPositionV4PanelOpener.v4CustomButtonID) &&
        LL_CustomUI.anyPositionV4PanelOpener.addHandlerCounter < 31
        ? (LL_CustomUI.anyPositionV4PanelOpener.addHandlerCounter++,
          void setTimeout(
            LL_CustomUI.anyPositionV4PanelOpener.addClickHandler,
            1e3
          ))
        : void (
            LL_CustomUI.$(
              LL_CustomUI.anyPositionV4PanelOpener.v4CustomButtonID
            ) &&
            !LL_CustomUI.$(
              LL_CustomUI.anyPositionV4PanelOpener.v4CustomButtonID
            ).LL_onclickHanlderExist &&
            (LL_CustomUI.commonFunctions.listen(
              "click",
              LL_CustomUI.$(
                LL_CustomUI.anyPositionV4PanelOpener.v4CustomButtonID
              ),
              function (o) {
                LL_CustomUI.anyPositionV4PanelOpener.click();
              }
            ),
            (LL_CustomUI.$(
              LL_CustomUI.anyPositionV4PanelOpener.v4CustomButtonID
            ).LL_onclickHanlderExist = !0))
          );
    }),
    (LL_CustomUI.anyPositionV4PanelOpener.init = function () {
      !LL_CustomUI.termsAndConditionsWindow.isTermsAndConditionsEnabled ||
      ("" != LL_CustomUI.V4Panel.presentationCode &&
        "undefined" != typeof LL_CustomUI.V4Panel.presentationCode)
        ? (LL_CustomUI.anyPositionV4PanelOpener.elementToMove = LL_CustomUI.$(
            "V4LLPanel"
          ))
        : (LL_CustomUI.termsAndConditionsWindow.appendElements(),
          (LL_CustomUI.anyPositionV4PanelOpener.elementToMove = LL_CustomUI.$(
            "V4LLTermsAndConditionsWindow"
          )));
      var o = LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.left,
        t = LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.right,
        n = LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.top,
        e = LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.bottom;
      LL_CustomUI.anyPositionV4PanelOpener.addClickHandler(),
        LL_CustomUI.commonFunctions.listen("resize", window, function () {
          "undefined" !=
            typeof LL_CustomUI.anyPositionV4PanelOpener.elementToMove &&
            "" != LL_CustomUI.anyPositionV4PanelOpener.elementToMove &&
            ("" != o
              ? (LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.left = o)
              : (LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.left =
                  "auto"),
            "" != t
              ? (LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.right = t)
              : (LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.right =
                  "auto"),
            "" != n
              ? (LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.top = n)
              : (LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.top =
                  "auto"),
            "" != e
              ? (LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.bottom = e)
              : (LL_CustomUI.anyPositionV4PanelOpener.elementToMove.style.bottom =
                  "auto"));
        }),
        LL_CustomUI.V4LLPanel_position.indexOf("middle") > 0 &&
          LL_CustomUI.commonFunctions.listen("resize", window, function (o) {
            LL_CustomUI.anyPositionV4PanelOpener.elementToMove &&
              LL_CustomUI.commonFunctions.setElementInTheMiddle(
                LL_CustomUI.anyPositionV4PanelOpener.elementToMove.id,
                LL_CustomUI.V4LLPanel_position
              );
          });
    }),
    (LL_CustomUI.anyPositionV4PanelOpener.GenerateLLV4PanelPosition = function (
      o,
      t
    ) {
      var n = "",
        e = "";
      switch (
        ((LL_CustomUI.anyPositionV4PanelOpener.viewportSize = LL_CustomUI.anyPositionV4PanelOpener.getViewport()),
        (LL_CustomUI.anyPositionV4PanelOpener.viewportWidth =
          LL_CustomUI.anyPositionV4PanelOpener.viewportSize[0]),
        (LL_CustomUI.anyPositionV4PanelOpener.viewportHeight =
          LL_CustomUI.anyPositionV4PanelOpener.viewportSize[1]),
        o)
      ) {
        case "bottom_right":
          "" == t
            ? ((n =
                LL_CustomUI.anyPositionV4PanelOpener.viewportHeight -
                LL_CustomUI.anyPositionV4PanelOpener.blockHeight),
              (e =
                LL_CustomUI.anyPositionV4PanelOpener.viewportWidth -
                LL_CustomUI.anyPositionV4PanelOpener.blockWidth))
            : ((n =
                LL_CustomUI.anyPositionV4PanelOpener.viewportHeight -
                LL_CustomUI.anyPositionV4PanelOpener.blockHeight),
              (e =
                LL_CustomUI.anyPositionV4PanelOpener.viewportWidth -
                LL_CustomUI.anyPositionV4PanelOpener.blockWidth -
                t));
          break;
        case "top_left":
          "" == t ? ((n = 0), (e = 0)) : ((n = 0), (e = t));
          break;
        case "top_middle":
          (n = 0),
            (e =
              (LL_CustomUI.anyPositionV4PanelOpener.viewportWidth -
                LL_CustomUI.anyPositionV4PanelOpener.blockWidth) /
              2);
          break;
        case "right_middle":
          (n =
            (LL_CustomUI.anyPositionV4PanelOpener.viewportHeight -
              LL_CustomUI.anyPositionV4PanelOpener.blockHeight) /
            2),
            (e =
              LL_CustomUI.anyPositionV4PanelOpener.viewportWidth -
              LL_CustomUI.anyPositionV4PanelOpener.blockWidth);
          break;
        case "top_right":
          "" == t
            ? ((n = 0),
              (e =
                LL_CustomUI.anyPositionV4PanelOpener.viewportWidth -
                LL_CustomUI.anyPositionV4PanelOpener.blockWidth))
            : ((n = 0), (e = t));
          break;
        case "bottom_left":
          "" == t
            ? ((e = 0),
              (n =
                LL_CustomUI.anyPositionV4PanelOpener.viewportHeight -
                LL_CustomUI.anyPositionV4PanelOpener.blockHeight))
            : ((e = t),
              (n =
                LL_CustomUI.anyPositionV4PanelOpener.viewportHeight -
                LL_CustomUI.anyPositionV4PanelOpener.blockHeight));
          break;
        case "bottom_middle":
          (n =
            LL_CustomUI.anyPositionV4PanelOpener.viewportHeight -
            LL_CustomUI.anyPositionV4PanelOpener.blockHeight),
            (e =
              (LL_CustomUI.anyPositionV4PanelOpener.viewportWidth -
                LL_CustomUI.anyPositionV4PanelOpener.blockWidth) /
              2);
          break;
        case "left_middle":
          (n =
            (LL_CustomUI.anyPositionV4PanelOpener.viewportHeight -
              LL_CustomUI.anyPositionV4PanelOpener.blockHeight) /
            2),
            (e = 0);
      }
      return [n, e];
    })),
  window.LL_CustomUI &&
    !LL_CustomUI.termsAndConditionsWindow &&
    ((LL_CustomUI.termsAndConditionsWindow = {}),
    (LL_CustomUI.termsAndConditionsWindow.isTermsAndConditionsEnabled = !!LL_CustomUI.V4LLPanel_TermsAndConditionsWindowText),
    LL_CustomUI.termsAndConditionsWindow.isTermsAndConditionsEnabled))
) {
  (LL_CustomUI.termsAndConditionsWindow.termsAndConditionsWindowHeight = 302),
    (LL_CustomUI.termsAndConditionsWindow.isSessionStartButtonClicked = !1),
    (LL_CustomUI.termsAndConditionsWindow.termsAndConditionsWindowBlock = ""),
    (LL_CustomUI.termsAndConditionsWindow.isScrollbarInitialized = !1),
    (LL_CustomUI.termsAndConditionsWindow.isDisconnectConfirmWindowOpen = !1),
    (LL_CustomUI.termsAndConditionsWindow.initialized = !1),
    (LL_CustomUI.termsAndConditionsWindow.termsAndConditionsRow = ""),
    (LL_CustomUI.commonFunctions.isLeftLocation() ||
      LL_CustomUI.commonFunctions.isRightLocation()) &&
      (LL_CustomUI.termsAndConditionsWindow.termsAndConditionsWindowHeight = 308),
    "" != LL_CustomUI.V4Panel.faqURL
      ? (LL_CustomUI.termsAndConditionsWindow.termsAndConditionsRow =
          '<a href="javascript:void(0)" onclick="LL_CustomUI.V4Panel.openTermsAndConditions(); return false;" id="V4LLPanel_TermsAndConditions" style="font-weight:normal;margin-bottom:6px; margin-top:15px; font-size: ' +
          LL_CustomUI.V4LLPanel_TermsAndConditions_font_size +
          "px; color: #" +
          LL_CustomUI.V4LLPanel_TermsAndConditions_color +
          " !important; font-family: " +
          LL_CustomUI.V4LLPanel_TermsAndConditions_font_family +
          ' !important;">' +
          LL_CustomUI.V4LLPanel_notconnected_termsAndConditions_text +
          "</a>")
      : (LL_CustomUI.termsAndConditionsWindow.termsAndConditionsRow = "");
  var windowHTML = "";
  (windowHTML += LL_CustomUI.commonFunctions.isLeftLocation()
    ? LL_CustomUI.commonFunctions.isAnyIE()
      ? '<div id="V4LLPanel_TermsAndConditionsToggler" tabindex="0" role="button" aria-live="assertive" aria-label="' +
        LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow +
        '" onmouseover="LL_CustomUI.termsAndConditionsWindow.hint.show();" onmouseout="LL_CustomUI.termsAndConditionsWindow.hint.hide();" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
        LL_CustomUI.img(
          LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_background
        ) +
        ") no-repeat !important; width: " +
        LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
        "px !important; height: " +
        LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
        "px !important; " +
        LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
          LL_CustomUI.V4LLPanel_position,
          LL_CustomUI.V4LLPanel_position_offset
        ) +
        '"><span id="V4LLPanel_InnerTitle" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg); -webkit-transform:rotate(-90deg); -moz-transform:rotate(-90deg); -o-transform: rotate(-90deg); position:absolute; white-space:nowrap; bottom: 40px; left: 9px; font-family: ' +
        LL_CustomUI.V4LLPanel_InnerTitle_font_family +
        "; font-size: " +
        LL_CustomUI.V4LLPanel_InnerTitle_font_size +
        "px !important; color: #" +
        LL_CustomUI.V4LLPanel_InnerTitle_color +
        ';" class="V4LLTitleText">' +
        LL_CustomUI.V4LLPanel_notconnected_header_text +
        '</span><div id="V4LLPanel_InnerLogo" style="margin: 124px 10px 0 4px; width: 23px; height: 24px; float: left; background: url(' +
        LL_CustomUI.img(LL_CustomUI.V4LLPanel_InnerLogo_background) +
        ') no-repeat !important; _margin-left: 5px !important;"></div></div>'
      : LL_CustomUI.commonFunctions.isSafari()
      ? '<div id="V4LLPanel_TermsAndConditionsToggler" tabindex="0" role="button" aria-live="assertive" aria-label="' +
        LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow +
        '" onmouseover="LL_CustomUI.termsAndConditionsWindow.hint.show();" onmouseout="LL_CustomUI.termsAndConditionsWindow.hint.hide();" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
        LL_CustomUI.img(
          LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_background
        ) +
        ") no-repeat !important; width: " +
        LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
        "px !important; height: " +
        LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
        "px !important; " +
        LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
          LL_CustomUI.V4LLPanel_position,
          LL_CustomUI.V4LLPanel_position_offset
        ) +
        '"><span id="V4LLPanel_InnerTitle" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg) translate(0, 100%); -webkit-transform:rotate(-90deg) translate(0, 100%); -moz-transform:rotate(-90deg) translate(0, 100%); -o-transform: rotate(-90deg) translate(0, 100%); position:absolute; white-space:nowrap; bottom: 40px; left: 8px; -moz-transform-origin: 0% 100%; -o-transform-origin: 0% 100%; -webkit-transform-origin: 0% 100%; transform-origin: left top 0; font-family: ' +
        LL_CustomUI.V4LLPanel_InnerTitle_font_family +
        "; font-size: " +
        LL_CustomUI.V4LLPanel_InnerTitle_font_size +
        "px !important; color: #" +
        LL_CustomUI.V4LLPanel_InnerTitle_color +
        ';" class="V4LLTitleText">' +
        LL_CustomUI.V4LLPanel_notconnected_header_text +
        '</span><div id="V4LLPanel_InnerLogo" style="margin: 124px 10px 0 4px; width: 23px; height: 24px; float: left; background: url(' +
        LL_CustomUI.img(LL_CustomUI.V4LLPanel_InnerLogo_background) +
        ') no-repeat !important; _margin-left: 5px !important;"></div></div>'
      : '<div id="V4LLPanel_TermsAndConditionsToggler" tabindex="0" role="button" aria-live="assertive" aria-label="' +
        LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow +
        '" onmouseover="LL_CustomUI.termsAndConditionsWindow.hint.show();" onmouseout="LL_CustomUI.termsAndConditionsWindow.hint.hide();" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
        LL_CustomUI.img(
          LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_background
        ) +
        ") no-repeat !important; width: " +
        LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
        "px !important; height: " +
        LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
        "px !important; " +
        LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
          LL_CustomUI.V4LLPanel_position,
          LL_CustomUI.V4LLPanel_position_offset
        ) +
        '"><span id="V4LLPanel_InnerTitle" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg); -webkit-transform:rotate(-90deg); -moz-transform:rotate(-90deg); -o-transform: rotate(-90deg); position:absolute; white-space:nowrap; bottom: 28px; left: 8px; transform-origin: left top 0; -moz-transform-origin: left top 0; -o-transform-origin: left top 0; -webkit-transform-origin: left top 0; font-family: ' +
        LL_CustomUI.V4LLPanel_InnerTitle_font_family +
        "; font-size: " +
        LL_CustomUI.V4LLPanel_InnerTitle_font_size +
        "px !important; color: #" +
        LL_CustomUI.V4LLPanel_InnerTitle_color +
        ';" class="V4LLTitleText">' +
        LL_CustomUI.V4LLPanel_notconnected_header_text +
        '</span><div id="V4LLPanel_InnerLogo" style="margin: 124px 10px 0 4px; width: 23px; height: 24px; float: left; background: url(' +
        LL_CustomUI.img(LL_CustomUI.V4LLPanel_InnerLogo_background) +
        ') no-repeat !important; _margin-left: 5px !important;"></div></div>'
    : LL_CustomUI.commonFunctions.isRightLocation()
    ? LL_CustomUI.commonFunctions.isAnyIE()
      ? '<div id="V4LLPanel_TermsAndConditionsToggler" tabindex="0" role="button" aria-live="assertive" aria-label="' +
        LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow +
        '" onmouseover="LL_CustomUI.termsAndConditionsWindow.hint.show();" onmouseout="LL_CustomUI.termsAndConditionsWindow.hint.hide();" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
        LL_CustomUI.img(
          LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_background
        ) +
        ") no-repeat !important; width: " +
        LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
        "px !important; height: " +
        LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
        "px !important; " +
        LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
          LL_CustomUI.V4LLPanel_position,
          LL_CustomUI.V4LLPanel_position_offset
        ) +
        '"><span id="V4LLPanel_InnerTitle" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg); -webkit-transform:rotate(-90deg); -moz-transform:rotate(-90deg); -o-transform: rotate(-90deg); position:absolute; white-space: nowrap; bottom: 45px; left: 14px; font-family: ' +
        LL_CustomUI.V4LLPanel_InnerTitle_font_family +
        "; font-size: " +
        LL_CustomUI.V4LLPanel_InnerTitle_font_size +
        "px !important; color: #" +
        LL_CustomUI.V4LLPanel_InnerTitle_color +
        ';" class="V4LLTitleText">' +
        LL_CustomUI.V4LLPanel_notconnected_header_text +
        '</span><div id="V4LLPanel_InnerLogo" style="margin: 124px 10px 0 9px; width: 23px; height: 24px; float: left; background: url(' +
        LL_CustomUI.img(LL_CustomUI.V4LLPanel_InnerLogo_background) +
        ') no-repeat !important; _margin-left: 5px !important;"></div></div>'
      : LL_CustomUI.commonFunctions.isSafari()
      ? '<div id="V4LLPanel_TermsAndConditionsToggler" tabindex="0" role="button" aria-live="assertive" aria-label="' +
        LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow +
        '" onmouseover="LL_CustomUI.termsAndConditionsWindow.hint.show();" onmouseout="LL_CustomUI.termsAndConditionsWindow.hint.hide();" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
        LL_CustomUI.img(
          LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_background
        ) +
        ") no-repeat !important; width: " +
        LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
        "px !important; height: " +
        LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
        "px !important; " +
        LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
          LL_CustomUI.V4LLPanel_position,
          LL_CustomUI.V4LLPanel_position_offset
        ) +
        '"><span id="V4LLPanel_InnerTitle" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg) translate(0, 100%); -webkit-transform:rotate(-90deg) translate(0, 100%); -moz-transform:rotate(-90deg) translate(0, 100%); -o-transform: rotate(-90deg) translate(0, 100%); position:absolute; white-space: nowrap; -moz-transform-origin: 0% 100%; -o-transform-origin: 0% 100%; -webkit-transform-origin: 0% 100%; transform-origin: left top 0; bottom: 40px; left: 13px; font-family: ' +
        LL_CustomUI.V4LLPanel_InnerTitle_font_family +
        "; font-size: " +
        LL_CustomUI.V4LLPanel_InnerTitle_font_size +
        "px !important; color: #" +
        LL_CustomUI.V4LLPanel_InnerTitle_color +
        ';" class="V4LLTitleText">' +
        LL_CustomUI.V4LLPanel_notconnected_header_text +
        '</span><div id="V4LLPanel_InnerLogo" style="margin: 124px 10px 0 9px; width: 23px; height: 24px; float: left; background: url(' +
        LL_CustomUI.img(LL_CustomUI.V4LLPanel_InnerLogo_background) +
        ') no-repeat !important; _margin-left: 5px !important;"></div></div>'
      : '<div id="V4LLPanel_TermsAndConditionsToggler" tabindex="0" role="button" aria-live="assertive" aria-label="' +
        LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow +
        '" onmouseover="LL_CustomUI.termsAndConditionsWindow.hint.show();" onmouseout="LL_CustomUI.termsAndConditionsWindow.hint.hide();" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
        LL_CustomUI.img(
          LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_background
        ) +
        ") no-repeat !important; width: " +
        LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
        "px !important; height: " +
        LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
        "px !important; " +
        LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
          LL_CustomUI.V4LLPanel_position,
          LL_CustomUI.V4LLPanel_position_offset
        ) +
        '"><span id="V4LLPanel_InnerTitle" style="writing-mode:tb-rl; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); transform: rotate(180deg); -webkit-transform:rotate(-90deg); -moz-transform:rotate(-90deg); -o-transform: rotate(-90deg); position:absolute; white-space: nowrap; transform-origin: left top 0; -moz-transform-origin: left top 0; -o-transform-origin: left top 0; -webkit-transform-origin: left top 0; bottom: 28px; left: 13px; font-family: ' +
        LL_CustomUI.V4LLPanel_InnerTitle_font_family +
        "; font-size: " +
        LL_CustomUI.V4LLPanel_InnerTitle_font_size +
        "px !important; color: #" +
        LL_CustomUI.V4LLPanel_InnerTitle_color +
        ';" class="V4LLTitleText">' +
        LL_CustomUI.V4LLPanel_notconnected_header_text +
        '</span><div id="V4LLPanel_InnerLogo" style="margin: 124px 10px 0 9px; width: 23px; height: 24px; float: left; background: url(' +
        LL_CustomUI.img(LL_CustomUI.V4LLPanel_InnerLogo_background) +
        ') no-repeat !important; _margin-left: 5px !important;"></div></div>'
    : '<div id="V4LLPanel_TermsAndConditionsToggler" tabindex="0" role="button" aria-live="assertive" aria-label="' +
      LL_CustomUI.ADA_V4LLPanel_CollapsedNumContNarrow +
      '" onmouseover="LL_CustomUI.termsAndConditionsWindow.hint.show();" onmouseout="LL_CustomUI.termsAndConditionsWindow.hint.hide();" style="position:fixed; _position: absolute !important; z-index: 1500001; cursor:pointer; overflow: hidden; background: url(' +
      LL_CustomUI.img(LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_background) +
      ") no-repeat !important; width: " +
      LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_width +
      "px !important; height: " +
      LL_CustomUI.V4LLPanel_CollapsedNarrowNoAgent_height +
      "px !important; " +
      LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
        LL_CustomUI.V4LLPanel_position,
        LL_CustomUI.V4LLPanel_position_offset
      ) +
      '"><div id="V4LLPanel_InnerLogo" style="margin: 9px 10px 0 10px; width: 23px; height: 24px; float: left; background: url(' +
      LL_CustomUI.img(LL_CustomUI.V4LLPanel_InnerLogo_background) +
      ') no-repeat !important; _margin-left: 5px !important;"></div><span id="V4LLPanel_InnerTitle" style="position:absolute; top: 11px; left: 42px; font-family: ' +
      LL_CustomUI.V4LLPanel_InnerTitle_font_family +
      "; font-size: " +
      LL_CustomUI.V4LLPanel_InnerTitle_font_size +
      "px !important; color: #" +
      LL_CustomUI.V4LLPanel_InnerTitle_color +
      ';" class="V4LLTitleText">' +
      LL_CustomUI.V4LLPanel_notconnected_header_text +
      "</span></div>"),
    (windowHTML +=
      '<div id="V4LLPanel_HintBlock" style="' +
      LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
        LL_CustomUI.V4LLPanel_position,
        LL_CustomUI.V4LLPanel_position_offset,
        "true"
      ) +
      " z-index:1500002; position:fixed; _position: absolute !important; cursor:pointer; visibility:hidden; background: url(" +
      LL_CustomUI.img(LL_CustomUI.V4LLPanel_HintBlock_background) +
      ") no-repeat !important; width: " +
      LL_CustomUI.V4LLPanel_HintBlock_width +
      "px; height: " +
      LL_CustomUI.V4LLPanel_HintBlock_height +
      'px;"><span id="V4LLPanel_Hint_FirstLine" style="display: block; text-align: center; font-size: ' +
      LL_CustomUI.V4LLPanel_HintBlock_FirstLineText_font_size +
      "px; font-family: " +
      LL_CustomUI.V4LLPanel_HintBlock_FirstLineText_font_family +
      "; color: #" +
      LL_CustomUI.V4LLPanel_HintBlock_FirstLineText_color +
      "; width: 157px; font-style: " +
      LL_CustomUI.V4LLPanel_HintBlock_FirstLineText_font_style +
      " ; font-weight: " +
      LL_CustomUI.V4LLPanel_HintBlock_FirstLineText_font_weight +
      '; margin-top: 13px;">' +
      LL_CustomUI.V4LLPanel_HintBlock_FirstLineText +
      '</span><span id="V4LLPanel_Hint_SecondLine" style="display: block; text-align: center; font-size: ' +
      LL_CustomUI.V4LLPanel_HintBlock_SecondLineText_font_size +
      "px; font-family: " +
      LL_CustomUI.V4LLPanel_HintBlock_SecondLineText_font_family +
      "; color: #" +
      LL_CustomUI.V4LLPanel_HintBlock_SecondLineText_color +
      "; font-weight: " +
      LL_CustomUI.V4LLPanel_HintBlock_SecondLineText_font_weight +
      " ; font-style: " +
      LL_CustomUI.V4LLPanel_HintBlock_SecondLineText_font_style +
      '; width: 157px;">' +
      LL_CustomUI.V4LLPanel_HintBlock_SecondLineText +
      "</span></div>"),
    (windowHTML +=
      '<div id="V4LLTermsAndConditionsWindow" style="font-size:12px; position: fixed; _position: absolute !important; z-index: 1500002; height: 0; overflow: hidden; width: ' +
      LL_CustomUI.V4LLPanel_width +
      "px; background: url(" +
      LL_CustomUI.img(LL_CustomUI.V4LLPanel_notConnected_background) +
      ") no-repeat !important; " +
      LL_CustomUI.commonFunctions.GenerateLLV4PanelPosition(
        LL_CustomUI.V4LLPanel_position,
        LL_CustomUI.V4LLPanel_position_offset
      ) +
      '">'),
    (windowHTML +=
      '<div id="V4LLPanel_InnerContainer" style="text-align:center;position: relative; padding: 58px 0 0 4px; zoom: 1; height: 165px; width: 277px !important;">'),
    (windowHTML +=
      '<div id="V4LLPanel_MovingToggler" style="width: 256px; height: 49px; position: absolute; left: 0; top: 0; margin-left: 10px; background: url(' +
      LL_CustomUI.img(LL_CustomUI.LLpassToBeginText_background) +
      ') repeat-x left bottom !important;" class="LLV4Separator"><div id="V4LLPanel_LogoToggler" style="margin:13px 16px 0 3px; width: 23px; height: 24px; float: left; background:url(' +
      LL_CustomUI.img(LL_CustomUI.V4LLPanel_InnerLogo_background) +
      ') no-repeat !important;" class="LLV4Logo"><div id="V4LLPanel_PanelMinimizeTC" role="button" tabindex="0" aria-label="' +
      LL_CustomUI.ADA_V4LLPanel_PanelMinimize +
      '" style="position: absolute; width:15px; height:10px; cursor:pointer; margin:7px 0 0 0; _margin: 3px 0 0 0; right: 26px; background:url(' +
      LL_CustomUI.img(LL_CustomUI.V4LLPanel_PanelMinimizeButton_background) +
      ') no-repeat left bottom !important;" onclick="LL_CustomUI.termsAndConditionsWindow.collapse()"></div><div id="V4LLPanel_PanelCloseTC" role="button" tabindex="0.1" aria-label="' +
      LL_CustomUI.ADA_V4LLPanel_PanelClose_close +
      '" style="position: absolute; width:11px; height:10px; cursor:pointer; margin:7px 0 0 0; right: 0; background:url(' +
      LL_CustomUI.img(LL_CustomUI.V4LLPanel_PanelCloseButton_background) +
      ') no-repeat !important;" onclick="LL_CustomUI.termsAndConditionsWindow.openDisconnectConfirmWindow()"></div></div><span id="V4LLPanel_TogglerText" style="position:absolute; top: 17px; left: 34px; font-family:' +
      LL_CustomUI.V4LLPanel_InnerTitle_font_family +
      " !important; font-size: " +
      LL_CustomUI.V4LLPanel_InnerTitle_font_size +
      "px; color: #" +
      LL_CustomUI.V4LLPanel_InnerTitle_color +
      ' !important;" class="V4LLTitleText">' +
      LL_CustomUI.V4LLPanel_notconnected_header_text +
      '</span><div role="dialog" aria-atomic="true" id="V4LLPanelDisconnectConfirmWindowTC" style="box-sizing:content-box; display:none; position:absolute; top:47px;left:2px;width:232px;_width:250px;background-color:#' +
      LL_CustomUI.V4LLPanel_DisconnectConfirmWindow_background_color +
      ";border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;border:1px solid #" +
      LL_CustomUI.V4LLPanel_DisconnectConfirmWindow_border_color +
      ';box-shadow: 0 1px 16px #000; z-index:11; text-align: center;padding:28px 10px;"><span style="font-size:' +
      LL_CustomUI.V4LLPanel_DisconnectConfirmWindow_text_font_size +
      "px; color:#" +
      LL_CustomUI.V4LLPanel_DisconnectConfirmWindow_text_color +
      "; font-weight:" +
      LL_CustomUI.V4LLPanel_DisconnectConfirmWindow_text_font_weight +
      "; font-style: " +
      LL_CustomUI.V4LLPanel_DisconnectConfirmWindow_text_font_style +
      "; font-family: " +
      LL_CustomUI.V4LLPanel_DisconnectConfirmWindow_text_font_family +
      ';">' +
      LL_CustomUI.V4LLPanel_DisconnectConfirmWindow_text +
      '</span><br /><a id="V4LLPanel_CloseDeclineButtonTC" tabindex="0" role="button" aria-label="' +
      LL_CustomUI.ADA_V4LLPanel_CloseDeclineButtonTC +
      '" onmouseover="LL_CustomUI.termsAndConditionsWindow.toggleConfirmNoBtn(true)" onmouseout="LL_CustomUI.termsAndConditionsWindow.toggleConfirmNoBtn(false)" onclick="LL_CustomUI.termsAndConditionsWindow.declineSessionEnd(); return false;" style="height: 24px !important; background: url(' +
      LL_CustomUI.img(LL_CustomUI.V4LLPanel_CloseConfirmButton_background) +
      ") no-repeat; color: #" +
      LL_CustomUI.V4LLPanel_CloseConfirmButton_text_color +
      "; font-family: " +
      LL_CustomUI.V4LLPanel_CloseConfirmButton_text_font_family +
      "; font-size: " +
      LL_CustomUI.V4LLPanel_CloseConfirmButton_text_font_size +
      "px; font-weight: " +
      LL_CustomUI.V4LLPanel_CloseConfirmButton_text_font_weight +
      " !important; font-style: " +
      LL_CustomUI.V4LLPanel_CloseConfirmButton_text_font_style +
      ' !important; width:103px; text-align:center; display:inline-block; text-decoration:none; padding-top:3px; padding-bottom:2px; margin-top:35px;margin-right:10px;" href="javascript:void(0)">' +
      LL_CustomUI.V4LLPanel_CloseConfirmButton_text_no +
      '</a><a id="V4LLPanel_CloseConfirmButtonTC" tabindex="0" role="button" aria-label="' +
      LL_CustomUI.ADA_V4LLPanel_CloseConfirmButtonTC +
      '" onmouseover="LL_CustomUI.termsAndConditionsWindow.toggleConfirmYesBtn(true)" onmouseout="LL_CustomUI.termsAndConditionsWindow.toggleConfirmYesBtn(false)" onclick="LL_CustomUI.termsAndConditionsWindow.confirmSessionEnd()" style="height: 24px !important; background: url(' +
      LL_CustomUI.img(LL_CustomUI.V4LLPanel_CloseConfirmButton_background) +
      ") no-repeat; color: #" +
      LL_CustomUI.V4LLPanel_CloseConfirmButton_text_color +
      "; font-family: " +
      LL_CustomUI.V4LLPanel_CloseConfirmButton_text_font_family +
      "; font-size: " +
      LL_CustomUI.V4LLPanel_CloseConfirmButton_text_font_size +
      "px; font-weight: " +
      LL_CustomUI.V4LLPanel_CloseConfirmButton_text_font_weight +
      " !important; font-style: " +
      LL_CustomUI.V4LLPanel_CloseConfirmButton_text_font_style +
      ' !important; width:103px; text-align:center; display:inline-block; text-decoration:none; padding-top:3px;padding-bottom:2px;margin-top:35px;" href="javascript:void(0)">' +
      LL_CustomUI.V4LLPanel_CloseConfirmButton_text_yes +
      "</a></div></div>"),
    (windowHTML +=
      '<div class="v4-button-scroll-pane" style="word-wrap: break-word; font-family: ' +
      LL_CustomUI.V4LLPanel_termsAndConditionsWindow_font_family +
      ";height: 148px;text-align:left;margin-bottom:21px;margin-top:5px;width:260px;margin-left:10px;overflow-y:auto; overflow-x: hidden; color:#" +
      LL_CustomUI.V4LLPanel_termsAndConditionsWindow_color +
      " !important;font-size: " +
      LL_CustomUI.V4LLPanel_termsAndConditionsWindow_font_size +
      'px !important;">'),
    (windowHTML +=
      '<p style="width: 243px; margin-top:0px; margin-bottom:8px; font-family: ' +
      LL_CustomUI.V4LLPanel_TermsAndConditionsWindowHeadline_font_family +
      " !important; font-size: " +
      LL_CustomUI.V4LLPanel_TermsAndConditionsWindowHeadline_font_size +
      "px !important; color: #" +
      LL_CustomUI.V4LLPanel_TermsAndConditionsWindowHeadline_color +
      ' !important;">' +
      LL_CustomUI.V4LLPanel_TermsAndConditionsWindowHeadline +
      "</p>"),
    (windowHTML +=
      '<p style="width: 243px; margin-top:7px; margin-bottom:7px; line-height:14px; font-family: ' +
      LL_CustomUI.V4LLPanel_termsAndConditionsWindow_font_family +
      " !important; font-size: " +
      LL_CustomUI.V4LLPanel_termsAndConditionsWindow_font_size +
      "px !important; color: #" +
      LL_CustomUI.V4LLPanel_termsAndConditionsWindow_color +
      ' !important;">' +
      LL_CustomUI.V4LLPanel_TermsAndConditionsWindowText +
      "</p>"),
    (windowHTML += '<div style="height:15px;width:1px;clear:both"></div>'),
    (windowHTML += "</div>"),
    (windowHTML +=
      '<div style="z-index:10;left:5px;height:21px;position:absolute;top:198px;width:252px;background:url(' +
      LL_CustomUI.img(
        LL_CustomUI.V4LLPanel_termsAndConditionsWindow_textShadow
      ) +
      ') repeat-x left bottom !important"></div>'),
    (windowHTML +=
      '<div style="clear:both;"></div><span id="V4LLPanel_StartSessionNow" role="button" onmouseover="LL_CustomUI.termsAndConditionsWindow.toggleSessionConnectButton(true)" onmouseout="LL_CustomUI.termsAndConditionsWindow.toggleSessionConnectButton(false)" style="cursor: pointer; text-decoration:none;background: url(' +
      LL_CustomUI.img(
        LL_CustomUI.V4LLPanel_termsAndConditionsWindow_startSessionButton
      ) +
      ") repeat-x left bottom;border:0;padding-left:15px;padding-right:16px;padding-top:5px;padding-bottom:7px;font-size:" +
      LL_CustomUI.V4LLPanel_termsAndConditionsWindow_startSessionButton_font_size +
      "px; color:#" +
      LL_CustomUI.V4LLPanel_termsAndConditionsWindow_startSessionButton_color +
      "; font-family: " +
      LL_CustomUI.V4LLPanel_termsAndConditionsWindow_startSessionButton_font_family +
      '">' +
      LL_CustomUI.V4LLPanel_termsAndConditionsWindow_startSessionButton_text +
      "</span>"),
    (windowHTML +=
      '<div id="V4LLPanel_termsAndConditionsText" style="width:252px; margin-left:10px; padding-top:18px; margin-top:16px; text-align:center; background: url(' +
      LL_CustomUI.img(LL_CustomUI.LLpassToBeginText_background) +
      ') repeat-x left top !important;" class="LLV4Separator">'),
    (windowHTML += LL_CustomUI.termsAndConditionsWindow.termsAndConditionsRow),
    (windowHTML += "</div>"),
    (windowHTML += "</div>"),
    (windowHTML += "</div>"),
    (LL_CustomUI.termsAndConditionsWindow.windowHTML = windowHTML),
    (LL_CustomUI.termsAndConditionsWindow.appendElements = function () {
      if (!LL_CustomUI.termsAndConditionsWindow.initialized) {
        var o = document.createElement("div");
        (o.innerHTML = LL_CustomUI.termsAndConditionsWindow.windowHTML),
          document.body.appendChild(o),
          LL_CustomUI.commonFunctions.listen(
            "click",
            LL_CustomUI.$("V4LLPanel_StartSessionNow"),
            function (o) {
              LL_CustomUI.termsAndConditionsWindow.startSession();
            }
          ),
          LL_CustomUI.commonFunctions.listen(
            "click",
            LL_CustomUI.$("V4LLPanel_TermsAndConditionsToggler"),
            function (o) {
              LL_CustomUI.termsAndConditionsWindow.expand();
            }
          ),
          LL_CustomUI.V4LLPanel_position.indexOf("middle") > 0 &&
            (LL_CustomUI.commonFunctions.setElementInTheMiddle(
              "V4LLPanel_TermsAndConditionsToggler",
              LL_CustomUI.V4LLPanel_position
            ),
            LL_CustomUI.commonFunctions.setElementInTheMiddle(
              "V4LLTermsAndConditionsWindow",
              LL_CustomUI.V4LLPanel_position
            )),
          LL_CustomUI.V4LLPanel_position.indexOf("middle") > 0 &&
            LL_CustomUI.commonFunctions.listen("resize", window, function (o) {
              document.getElementById("V4LLPanel_TermsAndConditionsToggler") &&
                (LL_CustomUI.commonFunctions.setElementInTheMiddle(
                  "V4LLPanel_TermsAndConditionsToggler",
                  LL_CustomUI.V4LLPanel_position
                ),
                LL_CustomUI.commonFunctions.setElementInTheMiddle(
                  "V4LLTermsAndConditionsWindow",
                  LL_CustomUI.V4LLPanel_position
                ));
            }),
          LL_CustomUI.commonFunctions.isQuirksMode() &&
            LL_CustomUI.commonFunctions.listen("scroll", window, function () {
              var o = LL_CustomUI.$("V4LLPanel_TermsAndConditionsToggler").style
                .position;
              if ("absolute" == o) {
                var t = LL_CustomUI.commonFunctions.GetScrollPosition();
                (LL_CustomUI.$(
                  "V4LLPanel_TermsAndConditionsToggler"
                ).style.bottom = -t + "px"),
                  (LL_CustomUI.$("V4LLTermsAndConditionsWindow").style.bottom =
                    -t + "px");
              }
            }),
          ((LL_CustomUI.commonFunctions.isBottomLocation() &&
            LL_CustomUI.commonFunctions.getInternetExplorerVersion() <= 7 &&
            -1 != LL_CustomUI.commonFunctions.getInternetExplorerVersion()) ||
            LL_CustomUI.commonFunctions.isQuirksMode()) &&
            LL_CustomUI.commonFunctions.listen("scroll", window, function () {
              LL_CustomUI.commonFunctions.setPositionOnScroll(
                "V4LLPanel_TermsAndConditionsToggler",
                0,
                LL_CustomUI.V4LLPanel_position
              ),
                LL_CustomUI.commonFunctions.setPositionOnScroll(
                  "V4LLTermsAndConditionsWindow",
                  0,
                  LL_CustomUI.V4LLPanel_position
                ),
                parseInt(
                  LL_CustomUI.$("V4LLTermsAndConditionsWindow").style.height
                ) >= 1
                  ? LL_CustomUI.commonFunctions.setPositionOnScroll(
                      "V4LLTermsAndConditionsWindow",
                      0,
                      LL_CustomUI.V4LLPanel_position
                    )
                  : LL_CustomUI.commonFunctions.setPositionOnScroll(
                      "V4LLTermsAndConditionsWindow",
                      LL_CustomUI.V4Panel.numberGenerationWindowHeight,
                      LL_CustomUI.V4LLPanel_position
                    );
            }),
          ((LL_CustomUI.commonFunctions.isBottomLocation() &&
            LL_CustomUI.commonFunctions.getInternetExplorerVersion() <= 7 &&
            -1 != LL_CustomUI.commonFunctions.getInternetExplorerVersion()) ||
            LL_CustomUI.commonFunctions.isQuirksMode()) &&
            LL_CustomUI.commonFunctions.listen("resize", window, function () {
              document.getElementById("V4LLPanel_TermsAndConditionsToggler") &&
                (LL_CustomUI.commonFunctions.setPositionOnScroll(
                  "V4LLPanel_TermsAndConditionsToggler",
                  0,
                  LL_CustomUI.V4LLPanel_position
                ),
                LL_CustomUI.commonFunctions.setPositionOnScroll(
                  "V4LLTermsAndConditionsWindow",
                  0,
                  LL_CustomUI.V4LLPanel_position
                ),
                parseInt(
                  LL_CustomUI.$("V4LLTermsAndConditionsWindow").style.height
                ) >= 1
                  ? LL_CustomUI.commonFunctions.setPositionOnScroll(
                      "V4LLTermsAndConditionsWindow",
                      0,
                      LL_CustomUI.V4LLPanel_position
                    )
                  : LL_CustomUI.commonFunctions.setPositionOnScroll(
                      "V4LLTermsAndConditionsWindow",
                      LL_CustomUI.V4Panel.numberGenerationWindowHeight,
                      LL_CustomUI.V4LLPanel_position
                    ));
            }),
          ((LL_CustomUI.commonFunctions.isBottomLocation() &&
            LL_CustomUI.commonFunctions.getInternetExplorerVersion() <= 7 &&
            -1 != LL_CustomUI.commonFunctions.getInternetExplorerVersion()) ||
            LL_CustomUI.commonFunctions.isQuirksMode()) &&
            (LL_CustomUI.commonFunctions.setPositionOnScroll(
              "V4LLPanel_TermsAndConditionsToggler",
              0,
              LL_CustomUI.V4LLPanel_position
            ),
            LL_CustomUI.commonFunctions.setPositionOnScroll(
              "V4LLTermsAndConditionsWindow",
              0,
              LL_CustomUI.V4LLPanel_position
            ),
            parseInt(
              LL_CustomUI.$("V4LLTermsAndConditionsWindow").style.height
            ) >= 1
              ? LL_CustomUI.commonFunctions.setPositionOnScroll(
                  "V4LLTermsAndConditionsWindow",
                  0,
                  LL_CustomUI.V4LLPanel_position
                )
              : LL_CustomUI.commonFunctions.setPositionOnScroll(
                  "V4LLTermsAndConditionsWindow",
                  LL_CustomUI.V4Panel.numberGenerationWindowHeight,
                  LL_CustomUI.V4LLPanel_position
                )),
          LL_CustomUI.commonFunctions.isQuirksMode() &&
            (LL_CustomUI.$("V4LLTermsAndConditionsWindow").style.height =
              "1px"),
          (LL_CustomUI.termsAndConditionsWindow.initialized = !0);
      }
    }),
    (LL_CustomUI.termsAndConditionsWindow.openDisconnectConfirmWindow = function () {
      (LL_CustomUI.$("V4LLPanelDisconnectConfirmWindowTC").style.display =
        "block"),
        (LL_CustomUI.termsAndConditionsWindow.isDisconnectConfirmWindowOpen = !0),
        LL_CustomUI.commonFunctions.listen("keyup", window, function (o) {
          LL_CustomUI.termsAndConditionsWindow.isDisconnectConfirmWindowOpen &&
            (window.event
              ? (keynum = o.keyCode)
              : o.which && (keynum = o.which),
            13 == keynum &&
              LL_CustomUI.termsAndConditionsWindow.declineSessionEnd());
        }),
        LL_CustomUI.commonFunctions.toggleADA_State(
          "V4LLPanel_CloseDeclineButtonTC,V4LLPanel_CloseConfirmButtonTC",
          "enable"
        ),
        LL_CustomUI.commonFunctions.toggleADA_State(
          "V4LLPanel_PanelMinimizeTC,V4LLPanel_PanelCloseTC,V4LLPanel_TermsAndConditionsTC,V4LLPanel_StartSessionNow",
          "disable"
        ),
        LL_CustomUI.commonFunctions.doFocus(
          "V4LLPanelDisconnectConfirmWindowTC"
        );
    }),
    (LL_CustomUI.termsAndConditionsWindow.confirmSessionEnd = function (o) {
      LL_CustomUI.V4Panel.declineSessionEnd(),
        window.LL_Debug &&
          LL_Debug.set(
            LL_ICB_Core.presentationToken,
            "DisconnectReason",
            "UserAction"
          ),
        LL_ICB_Core.doDisconnect(!0, o),
        (LL_CustomUI.termsAndConditionsWindow.isScrollbarInitialized = !1);
    }),
    (LL_CustomUI.termsAndConditionsWindow.declineSessionEnd = function () {
      LL_CustomUI.commonFunctions.toggleADA_State(
        "V4LLPanel_PanelMinimizeTC,V4LLPanel_PanelCloseTC,V4LLPanel_TermsAndConditionsTC,V4LLPanel_StartSessionNow",
        "enable"
      );
      try {
        (LL_CustomUI.V4Panel.isDisconnectConfirmWindowOpen = !1),
          (LL_CustomUI.$("V4LLPanelDisconnectConfirmWindowTC").style.display =
            "none");
      } catch (o) {}
      LL_CustomUI.commonFunctions.toggleADA_State(
        "V4LLPanel_CloseDeclineButtonTC,V4LLPanel_CloseConfirmButtonTC",
        "disable"
      );
    }),
    (LL_CustomUI.termsAndConditionsWindow.toggleConfirmYesBtn = function (o) {
      var t =
          "url('" +
          LL_CustomUI.img(
            o
              ? LL_CustomUI.V4LLPanel_CloseConfirmButton_background_hover
              : LL_CustomUI.V4LLPanel_CloseConfirmButton_background
          ) +
          "') no-repeat",
        n = o
          ? LL_CustomUI.V4LLPanel_CloseConfirmButton_hover_text_color
          : LL_CustomUI.V4LLPanel_CloseConfirmButton_text_color;
      LL_CustomUI.$("V4LLPanel_CloseConfirmButtonTC") &&
        ((LL_CustomUI.$("V4LLPanel_CloseConfirmButtonTC").style.background = t),
        (LL_CustomUI.$("V4LLPanel_CloseConfirmButtonTC").style.color =
          "#" + n));
    }),
    (LL_CustomUI.termsAndConditionsWindow.toggleConfirmNoBtn = function (o) {
      var t =
          "url('" +
          LL_CustomUI.img(
            o
              ? LL_CustomUI.V4LLPanel_CloseConfirmButton_background_hover
              : LL_CustomUI.V4LLPanel_CloseConfirmButton_background
          ) +
          "') no-repeat",
        n = o
          ? LL_CustomUI.V4LLPanel_CloseConfirmButton_hover_text_color
          : LL_CustomUI.V4LLPanel_CloseConfirmButton_text_color;
      LL_CustomUI.$("V4LLPanel_CloseDeclineButtonTC") &&
        ((LL_CustomUI.$("V4LLPanel_CloseDeclineButtonTC").style.background = t),
        (LL_CustomUI.$("V4LLPanel_CloseDeclineButtonTC").style.color =
          "#" + n));
    }),
    (LL_CustomUI.termsAndConditionsWindow.jQueryInitializeScrollBar = function (
      o
    ) {
      try {
        o(".v4-button-scroll-pane").jScrollPane({
          mouseWheelSpeed: 20,
          contentWidth: "0px",
        }),
          (LL_CustomUI.termsAndConditionsWindow.isScrollbarInitialized = !0);
      } catch (t) {}
    }),
    (LL_CustomUI.termsAndConditionsWindow.initializeScrollBar = function () {
      "undefined" != typeof $ &&
        LL_CustomUI.termsAndConditionsWindow.jQueryInitializeScrollBar($);
    }),
    (LL_CustomUI.termsAndConditionsWindow.hint = {}),
    (LL_CustomUI.termsAndConditionsWindow.hint.show = function () {
      "hidden" != LL_CustomUI.$("V4LLPanel_HintBlock").style.visibility ||
        ("bottom_right" != LL_CustomUI.V4LLPanel_position &&
          "bottom_left" != LL_CustomUI.V4LLPanel_position &&
          "bottom_middle" != LL_CustomUI.V4LLPanel_position) ||
        (LL_CustomUI.$("V4LLPanel_HintBlock").style.visibility = "visible");
    }),
    (LL_CustomUI.termsAndConditionsWindow.hint.hide = function () {
      LL_CustomUI.$("V4LLPanel_HintBlock").style.visibility = "hidden";
    }),
    (LL_CustomUI.termsAndConditionsWindow.jQuerySetScrollBarStyles = function (
      o
    ) {
      o(".jspContainer") &&
        o(".jspContainer").css({ overflow: "hidden", position: "relative" }),
        o(".jspPane") && o(".jspPane").css({ position: "absolute" }),
        o(".v4-button-scroll-pane").css({ overflow: "auto" }),
        o(".jspVerticalBar") &&
          o(".jspVerticalBar").css({
            position: "absolute",
            top: "0",
            right: "0",
            width: "5px",
            bottom: "5px",
            "margin-bottom": "12px",
          }),
        o(".jspTrack") &&
          o(".jspTrack").css({
            background:
              "#" +
              LL_CustomUI.V4LLPanel_TermsAndConditionsWindowScrollBar_TrackBG_color,
            position: "relative",
            width: "5px",
            "border-radius": "5px",
            "-moz-border-radius": "5px",
            "-webkit-border-radius": "5px",
          }),
        o(".jspDrag") &&
          o(".jspDrag").css({
            background:
              "#" +
              LL_CustomUI.V4LLPanel_TermsAndConditionsWindowScrollBar_DragBG_color,
            position: "relative",
            top: "0",
            cursor: "pointer",
            left: "0",
            width: "5px",
            "border-radius": "5px",
            "-moz-border-radius": "5px",
            "-webkit-border-radius": "5px",
          });
    }),
    (LL_CustomUI.termsAndConditionsWindow.setScrollBarStyles = function () {
      "undefined" != typeof $ &&
        LL_CustomUI.termsAndConditionsWindow.jQuerySetScrollBarStyles($);
    }),
    (LL_CustomUI.termsAndConditionsWindow.start = function () {
      LL_CustomUI.termsAndConditionsWindow.termsAndConditionsWindowBlock = LL_CustomUI.$(
        "V4LLTermsAndConditionsWindow"
      );
    }),
    (LL_CustomUI.termsAndConditionsWindow.toggleSessionConnectButton = function (
      o
    ) {
      var t =
        "url('" +
        LL_CustomUI.img(
          o
            ? LL_CustomUI.V4LLPanel_termsAndConditionsWindow_startSessionButtonHover
            : LL_CustomUI.V4LLPanel_termsAndConditionsWindow_startSessionButton
        ) +
        "') repeat-x";
      LL_CustomUI.$("V4LLPanel_StartSessionNow").style.background = t;
    }),
    (LL_CustomUI.termsAndConditionsWindow.toggle = function (o) {
      "expand" == o
        ? (LL_CustomUI.commonFunctions.toggleADA_State(
            "V4LLPanel_PanelMinimizeTC,V4LLPanel_PanelCloseTC,V4LLPanel_TermsAndConditionsTC,V4LLPanel_StartSessionNow",
            "enable"
          ),
          LL_CustomUI.termsAndConditionsWindow.start(),
          (LL_CustomUI.termsAndConditionsWindow.termsAndConditionsWindowBlock.style.height =
            LL_CustomUI.termsAndConditionsWindow
              .termsAndConditionsWindowHeight + "px"),
          LL_CustomUI.commonFunctions.isQuirksMode() &&
            (parseInt(
              LL_CustomUI.$("V4LLTermsAndConditionsWindow").style.height
            ) >= 1
              ? LL_CustomUI.commonFunctions.setPositionOnScroll(
                  "V4LLTermsAndConditionsWindow",
                  0,
                  LL_CustomUI.V4LLPanel_position
                )
              : LL_CustomUI.commonFunctions.setPositionOnScroll(
                  "V4LLTermsAndConditionsWindow",
                  LL_CustomUI.termsAndConditionsWindow
                    .termsAndConditionsWindowHeight,
                  LL_CustomUI.V4LLPanel_position
                )))
        : "collapse" == o &&
          (LL_CustomUI.termsAndConditionsWindow.start(),
          LL_CustomUI.commonFunctions.toggleADA_State(
            "V4LLPanel_PanelMinimizeTC,V4LLPanel_PanelCloseTC,V4LLPanel_TermsAndConditionsTC,V4LLPanel_StartSessionNow",
            "disable"
          ),
          LL_CustomUI.commonFunctions.isQuirksMode()
            ? (LL_CustomUI.termsAndConditionsWindow.termsAndConditionsWindowBlock.style.height =
                "1px")
            : (LL_CustomUI.termsAndConditionsWindow.termsAndConditionsWindowBlock.style.height =
                "0px"),
          (LL_CustomUI.$("V4LLPanel_TermsAndConditionsToggler").style.display =
            "block"),
          (LL_CustomUI.$(
            "V4LLPanel_TermsAndConditionsToggler"
          ).style.visibility = "visible"));
    }),
    (LL_CustomUI.termsAndConditionsWindow.collapse = function () {
      LL_CustomUI.termsAndConditionsWindow.toggle("collapse");
    }),
    (LL_CustomUI.termsAndConditionsWindow.expand = function () {
      LL_CustomUI.termsAndConditionsWindow.toggle("expand"),
        LL_CustomUI.termsAndConditionsWindow.isScrollbarInitialized ||
          (LL_CustomUI.termsAndConditionsWindow.initializeScrollBar(),
          LL_CustomUI.termsAndConditionsWindow.setScrollBarStyles());
    }),
    (LL_CustomUI.termsAndConditionsWindow.startSession = function () {
      LL_CustomUI.termsAndConditionsWindow.start(),
        LL_CustomUI.commonFunctions.isQuirksMode()
          ? (LL_CustomUI.termsAndConditionsWindow.termsAndConditionsWindowBlock.style.height =
              "1px")
          : (LL_CustomUI.termsAndConditionsWindow.termsAndConditionsWindowBlock.style.height =
              "0px"),
        LL_CustomUI.V4Panel.expand(),
        (LL_CustomUI.termsAndConditionsWindow.isSessionStartButtonClicked = !0),
        (LL_CustomUI.anyPositionV4PanelOpener.elementToMove = LL_CustomUI.anyPositionV4PanelOpener.$(
          "V4LLPanel"
        )),
        (LL_CustomUI.$("V4LLPanel_TermsAndConditionsToggler").style.display =
          "none"),
        (LL_CustomUI.$("V4LLPanel_TermsAndConditionsToggler").style.visibility =
          "hidden");
    });
}
window.LL_CustomUI &&
  !LL_CustomUI.LLActivationPopup &&
  ((LL_CustomUI.LLActivationPopup = {}),
  (LL_CustomUI.LLActivationPopup.ACB_started = !1),
  (LL_CustomUI.LLActivationPopup.listen = function (o) {
    if (o) {
      var t = o.data;
      "activate_cancel" == t
        ? setTimeout(function () {
            LL_CustomUI.LLActivationPopup.closePopup();
          }, 333)
        : "activate_OK" == t
        ? setTimeout(function () {
            LL_CustomUI.LLActivationPopup.startCBSession();
          }, 333)
        : "escalate_OK" == t
        ? setTimeout(function () {
            LL_CustomUI.LLActivationPopup.startCBSession();
          }, 333)
        : "activate_NET" == t
        ? setTimeout(function () {
            LL_CustomUI.LLActivationPopup.netRunClickonce();
          }, 333)
        : "NET_cancel" == t &&
          setTimeout(function () {
            LL_CustomUI.LLActivationPopup.netCloseSession();
          }, 333);
    }
  }),
  (LL_CustomUI.LLActivationPopup.showPopup = function () {
    LL_CustomUI.LLActivationPopup.ACB_started ||
      (LL_Frames.frameEmbed(
        "LL_activate_frame",
        LL_ICB_Core.activateHtmlUrl +
          "&siteid=" +
          LL_ICB_Core.siteCode +
          "&pc_token=" +
          LL_ICB_Core.presentationToken +
          "&ll_user_agent=" +
          escape(navigator.userAgent),
        717,
        471
      ),
      window.LL_Debug &&
        LL_Debug.log(
          LL_ICB_Core.presentationToken,
          "V4_ActivatePromptDisplayed"
        ),
      window.addEventListener
        ? window.addEventListener(
            "message",
            LL_CustomUI.LLActivationPopup.listen,
            !1
          )
        : window.attachEvent &&
          window.attachEvent(
            "onmessage",
            LL_CustomUI.LLActivationPopup.listen
          ));
  }),
  (LL_CustomUI.LLActivationPopup.closePopup = function (o) {
    LL_Frames.killFrame("LL_activate_frame"),
      LL_Frames.killFrame("LL_clickonce_frame");
  }),
  (LL_CustomUI.LLActivationPopup.netDelayPromptTimer = 0),
  (LL_CustomUI.LLActivationPopup.startCBSession = function (o) {
    LL_CustomUI.LLActivationPopup.ACB_started ||
      ((LL_CustomUI.LLActivationPopup.ACB_started = !0),
      LL_CustomUI.LLActivationPopup.closePopup(o),
      window.LL_Cobrowse_Manager &&
        (LL_Cobrowse_Manager.removeEventListener(
          LL_Cobrowse_Manager.Events.EscalationAccepted,
          LL_ICB_Core.presentationToken,
          LL_ICB_Core.EscalationAccepted_listener
        ),
        LL_Cobrowse_Manager.dispatchEvent(
          LL_Cobrowse_Manager.Events.EscalationAccepted,
          LL_ICB_Core.presentationToken,
          LL_ICB_Core.presentationToken
        )),
      window.LL_Debug &&
        LL_Debug.log(LL_ICB_Core.presentationToken, "V4_ActivatePromptClicked"),
      ".net" == LL_BR_Core.ACBSupported &&
        (LL_CustomUI.LLActivationPopup.netDelayPromptTimer = setTimeout(
          function () {
            LL_Frames.killFrame("LL_activate_frame"),
              LL_Frames.frameEmbed(
                "LL_clickonce_frame",
                LL_ICB_Core.clickonceDelayUrl +
                  "&siteid=" +
                  LL_ICB_Core.siteCode +
                  "&pc_token=" +
                  LL_ICB_Core.presentationToken,
                894,
                724
              );
          },
          6e4
        )));
  }),
  (LL_CustomUI.LLActivationPopup.netRunClickonce = function () {
    LL_CustomUI.LLActivationPopup.closePopup();
  }),
  (LL_CustomUI.LLActivationPopup.netCloseSession = function () {
    LL_ICB_Core.doDisconnect(!0),
      window.LL_Debug &&
        LL_Debug.set(
          LL_ICB_Core.presentationToken,
          "DisconnectReason",
          "UserAction"
        );
  })),
  window.LL_CustomUI &&
    !LL_CustomUI.LLEscalationPopup &&
    ((LL_CustomUI.LLEscalationPopup = {}),
    (LL_CustomUI.LLEscalationPopup.ACB_started = !1),
    (LL_CustomUI.LLEscalationPopup.listen = function (o) {
      if (o) {
        var t = o.data;
        "escalate_cancel" == t
          ? setTimeout(function () {
              LL_CustomUI.LLEscalationPopup.closePopup();
            }, 333)
          : "escalate_OK" == t
          ? setTimeout(function () {
              LL_CustomUI.LLEscalationPopup.startCBSession();
            }, 333)
          : "escalate_ClickOnce" == t
          ? setTimeout(function () {
              LL_CustomUI.LLEscalationPopup.startClickOnceSession();
            }, 333)
          : "activate_NET" == t
          ? setTimeout(function () {
              LL_CustomUI.LLEscalationPopup.netRunClickonce();
            }, 333)
          : "NET_cancel" == t &&
            setTimeout(function () {
              LL_CustomUI.LLEscalationPopup.netCloseSession();
            }, 333);
      }
    }),
    (LL_CustomUI.LLEscalationPopup.showPopup = function () {
      LL_CustomUI.LLEscalationPopup.ACB_started ||
        (LL_Frames.frameEmbed(
          "LL_escalate_frame",
          escalateHtmlUrl +
            "&siteid=" +
            LL_ICB_Core.siteCode +
            "&pc_token=" +
            communicationHandler.presentationToken +
            "&ll_user_agent=" +
            escape(navigator.userAgent),
          717,
          471
        ),
        window.addEventListener
          ? window.addEventListener(
              "message",
              LL_CustomUI.LLEscalationPopup.listen,
              !1
            )
          : window.attachEvent(
              "onmessage",
              LL_CustomUI.LLEscalationPopup.listen
            ));
    }),
    (LL_CustomUI.LLEscalationPopup.closePopup = function (o) {
      LL_Frames.killFrame("LL_escalate_frame"),
        LL_Frames.killFrame("LL_clickonce_frame");
    }),
    (LL_CustomUI.LLEscalationPopup.startCBSession = function (o) {
      (LL_CustomUI.LLEscalationPopup.ACB_started = !0),
        LL_CustomUI.LLEscalationPopup.closePopup(o),
        window.LL_Cobrowse_Manager &&
          (LL_Cobrowse_Manager.removeEventListener(
            LL_Cobrowse_Manager.Events.EscalationAccepted,
            communicationHandler.presentationToken
          ),
          LL_Cobrowse_Manager.dispatchEvent(
            LL_Cobrowse_Manager.Events.EscalationAccepted,
            communicationHandler.presentationToken,
            communicationHandler.presentationToken
          ));
    }),
    (LL_CustomUI.LLEscalationPopup.netDelayPromptTimer = 0),
    (LL_CustomUI.LLEscalationPopup.startClickOnceSession = function (o) {
      LL_CustomUI.LLEscalationPopup.ACB_started ||
        ((LL_CustomUI.LLEscalationPopup.ACB_started = !0),
        LL_CustomUI.LLEscalationPopup.closePopup(o),
        (LL_CustomUI.LLEscalationPopup.netDelayPromptTimer = setTimeout(
          function () {
            LL_Frames.frameEmbed(
              "LL_clickonce_frame",
              clickonceDelayUrl +
                "&mode=escalate&siteid=" +
                LL_ICB_Core.siteCode +
                "&pc_token=" +
                communicationHandler.presentationToken,
              894,
              724
            );
          },
          6e4
        )));
    }),
    (LL_CustomUI.LLEscalationPopup.netCloseSession = function () {
      LL_ICB_Core.doDisconnect(!0);
    }),
    (LL_CustomUI.LLEscalationPopup.netRunClickonce = function (o) {
      LL_CustomUI.LLEscalationPopup.closePopup(o);
    })),
  window.LL_CustomUI &&
    !LL_CustomUI.SoundPlayer &&
    (LL_CustomUI.SoundPlayer = (function () {
      var o,
        t,
        n = function (n) {
          if ("undefined" != typeof t) return t.load(), void t.play();
          var e = navigator.appName,
            L = e.indexOf("Explorer") > 1,
            i = document.createElement("audio");
          i.canPlayType && i.canPlayType("audio/mpeg;").replace(/no/, "")
            ? ((t = new Audio(
                communicationHandler.mainServerUrl + "/sounds/" + n + ".mp3"
              )),
              t.load(),
              (t.loop = !1),
              t.play())
            : i.canPlayType &&
              i.canPlayType('audio/wav; codecs="1"').replace(/no/, "")
            ? ((t = new Audio(
                communicationHandler.mainServerUrl + "/sounds/" + n + ".wav"
              )),
              t.load(),
              (t.loop = !1),
              t.play())
            : L
            ? ("undefined" == typeof o || null == o
                ? ((o = document.createElement("bgsound")),
                  o.setAttribute(
                    "src",
                    communicationHandler.mainServerUrl + "/sounds/" + n + ".mp3"
                  ),
                  o.setAttribute("loop", "1"),
                  o.setAttribute("autostart", "autostart"))
                : (document.body.removeChild(o),
                  (o = null),
                  (o = document.createElement("bgsound")),
                  o.setAttribute(
                    "src",
                    communicationHandler.mainServerUrl + "/sounds/" + n + ".mp3"
                  ),
                  o.setAttribute("loop", "1"),
                  o.setAttribute("autostart", "autostart")),
              o.setAttribute("style", "width: 5px; height: 5px;"),
              document.body.appendChild(o))
            : ("undefined" == typeof o && null == o
                ? ((o = document.createElement("embed")),
                  o.setAttribute(
                    "src",
                    communicationHandler.mainServerUrl + "/sounds/" + n + ".mp3"
                  ),
                  o.setAttribute("hidden", !0),
                  o.setAttribute("autostart", !0))
                : (document.body.removeChild(o),
                  (o = null),
                  (o = document.createElement("embed")),
                  o.setAttribute(
                    "src",
                    communicationHandler.mainServerUrl + "/sounds/" + n + ".mp3"
                  ),
                  o.setAttribute("hidden", !0),
                  o.setAttribute("autostart", !0)),
              o.setAttribute("style", "width: 5px; height: 5px;"),
              document.body.appendChild(o));
        };
      return { playSound: n };
    })()),
  LL_CustomUI.commonFunctions.preloadImages();

LL_Deployment.setDefaultParameters();
LL_Deployment.loadScript(LL_Deployment.coBrowseLiteUrl);

/*
page: http://www.bbvacompass.com/
url: https://7b91f3b469e9cec0812d-4411771c4b94f83e4996870fc45fcf78.ssl.cf2.rackcdn.com/llscripts/launcher.js
*/
