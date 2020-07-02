// 2015-10-26T21:07:15.093Z , 21dcf39ec5b79bdd_1445893635093
// Copyright Branding Brand 2015 | www.brandingbrand.com
!(function (e, t) {
  "use strict";
  function n(t, n, r) {
    f(t);
    for (var i = 0; i < n.length; i++) {
      var o = n[i];
      if (o && o.op) {
        var a = w[o.op];
        if (a)
          try {
            a.call(e, o.args || {});
          } catch (s) {}
      }
    }
    (e.BBX_CAMPAIGN = r.join(",")), v();
  }
  function r() {
    var e = { screenWidth: "sw", screenHeight: "sh", screenPixelRatio: "sd" },
      t = i() + "/c/" + b,
      n = [];
    n.push("ku=" + l());
    for (var r in e)
      e.hasOwnProperty(r) && C.hasOwnProperty(r) && n.push(e[r] + "=" + C[r]);
    t += "?" + n.join("&");
    var o = s(t);
    o.onerror = function () {
      v();
    };
  }
  function i() {
    var n = "https:" == t.location.protocol ? "https" : "http",
      r = -1 != e.location.href.indexOf(".uat.") ? "uat" : "prod";
    return n + "://keystone-api." + r + ".bbhosted.com";
  }
  function o() {
    return t.getElementsByTagName("head")[0];
  }
  function a(e) {
    var n = t.createElement("script");
    return (n.src = e), (n.type = "text/javascript"), n;
  }
  function s(e) {
    var t = o(),
      n = a(e);
    return (n.async = 1), t.appendChild(n), n;
  }
  function u(e) {
    var n = t.createElement("link");
    return (
      (n.href = e),
      n.setAttribute("type", "text/css"),
      (n.rel = "stylesheet"),
      n
    );
  }
  function c(e) {
    var t = o(),
      n = u(e);
    return t.appendChild(n), n;
  }
  function l() {
    return p("ks.u");
  }
  function f(e) {
    h("ks.u", e, 31536e3, "/");
  }
  function d() {
    (C.href = t.location.href), (C.referrer = t.referrer);
    var n = navigator.userAgent;
    (C.isMobile = !1),
      (C.isTablet = !1),
      (C.isAndroid = !1),
      (C.isiOS = !1),
      (C.isWindowsMobile = !1),
      (C.touchEnabled = !1),
      n.match(/Android/i)
        ? (C.isAndroid = !0)
        : n.match(/iPad|iPhone|iPod/i)
        ? (C.isiOS = !0)
        : n.match(/IEMobile/i) && (C.isWindowsMobile = !0),
      n.match(/Mobi/) && (C.isMobile = !0),
      n.match(/iPad|^(?!.*Mobile).*Android/) && (C.isTablet = !0),
      (C.touchEnabled = !!("ontouchstart" in e)),
      (C.screenWidth = e.outerWidth),
      (C.screenHeight = e.outerHeight),
      (C.screenPixelRatio = e.devicePixelRatio),
      (C.supportHTML5Video = !!t.createElement("video").canPlayType),
      (C.supportCanvas = !!t.createElement("canvas").getContext);
  }
  function p(e) {
    for (var n = e + "=", r = t.cookie.split(";"), i = 0; i < r.length; i++) {
      for (var o = r[i]; " " == o.charAt(0); ) o = o.substring(1);
      if (0 == o.indexOf(n)) return o.substring(n.length, o.length);
    }
    return "";
  }
  function h(e, n, r, i, o) {
    t.cookie =
      encodeURIComponent(e) +
      "=" +
      encodeURIComponent(n) +
      "; " +
      (o && o.length ? "domain=" + o + "; " : "") +
      (i && i.length ? "path=" + i + "; " : "") +
      (r
        ? "expires=" + new Date(new Date().getTime() + r).toGMTString() + "; "
        : "");
  }
  function g(t, n) {
    var r = 0,
      i = setInterval(function () {
        if (r++ > 100)
          return clearInterval(i), n("Unable to find tracker " + t);
        var o = e.ga && e.ga.getByName && e.ga.getByName(t);
        return "undefined" != typeof o
          ? (clearInterval(i), n(null, o))
          : void 0;
      }, 100);
  }
  function m() {
    var t,
      n = e;
    (n.BBX_OBJECT_NAME = t = "bbx"),
      (n.BBX_COOKIE_NAME = "ks.u"),
      (n.BBX_PROPERTY_ID = b),
      (n[t] =
        n[t] ||
        function () {
          (n[t].queue = n[t].queue || []).push(arguments);
        });
  }
  function v() {
    !(function n(e, t, r) {
      function i(a, s) {
        if (!t[a]) {
          if (!e[a]) {
            var u = "function" == typeof require && require;
            if (!s && u) return u(a, !0);
            if (o) return o(a, !0);
            throw new Error("Cannot find module '" + a + "'");
          }
          var c = (t[a] = { exports: {} });
          e[a][0].call(
            c.exports,
            function (t) {
              var n = e[a][1][t];
              return i(n ? n : t);
            },
            c,
            c.exports,
            n,
            e,
            t,
            r
          );
        }
        return t[a].exports;
      }
      for (
        var o = "function" == typeof require && require, a = 0;
        a < r.length;
        a++
      )
        i(r[a]);
      return i;
    })(
      {
        1: [
          function (t, n, r) {
            function i() {
              try {
                o.apply(this, arguments);
              } catch (e) {
                console.warn("bbx error: ", e);
              }
            }
            function o(e, t) {
              if ("string" != typeof e)
                return void console.warn(
                  "You must define an event name when calling the bbx script."
                );
              if (((e = e.toLowerCase()), !d[e]))
                return void console.warn('[bbx] "%s" is not a valid event.', e);
              var n = l.get(u),
                r = new d[e](n, t);
              r.send(c, function (e) {
                !n && e && e.uuid && l.set(u, e.uuid);
              });
            }
            function a() {
              var t = e.BBX_OBJECT_NAME || s;
              (i.queue = (e[t] && e[t].queue) || []), (e[t] = i), f(i, i.queue);
            }
            var s = "bbx",
              u = e.BBX_COOKIE_NAME || "bbx_uuid",
              c = e.BBX_BASE_URL || "https://ax.brandingbrand.com",
              l = (e.BBX_CLIENT_NAME || void 0, t("./utils/cookie")),
              f =
                (t("./utils/ajax"),
                t("./utils/find-email"),
                t("./utils/process-queue")),
              d = t("./events");
            (r = n.exports = i), (r.registerGlobal = a), (r.BASE_URL = c);
          },
          {
            "./events": 8,
            "./utils/ajax": 14,
            "./utils/cookie": 16,
            "./utils/find-email": 17,
            "./utils/process-queue": 19,
          },
        ],
        2: [
          function (t, n, r) {
            function i() {
              (this.method = "POST"),
                (this.endpoint = "/event"),
                (this.sharedParams = {
                  campaign: e.BBX_CAMPAIGN,
                  clientName: e.BBX_CLIENT_NAME,
                  customVars: e.BBX_CUSTOM_VARS,
                  data: {},
                  email: s(),
                  host: e.location.host,
                  language: navigator.language,
                  platform: navigator.platform,
                  propertyId: e.BBX_PROPERTY_ID,
                });
            }
            var o = t("extend"),
              a = t("../utils/ajax"),
              s = t("../utils/find-email");
            (i.prototype.getJSON = function () {
              return this.json;
            }),
              (i.prototype.send = function (e, t) {
                var n = e + this.endpoint,
                  r = this.getJSON();
                return a(this.method, n, r, t);
              }),
              (i.create = function (e) {
                var t = function (t, n) {
                  (this.uuid = t),
                    (this.data = n),
                    (this.sharedParams.uuid = this.uuid),
                    this.data &&
                      "object" != typeof this.data &&
                      ((this.value = this.data), (this.data = {})),
                    "function" == typeof e && e.call(this, t, n),
                    (this.sharedParams.event = this.name),
                    (this.json = o(
                      !0,
                      {},
                      this.sharedParams,
                      { data: this.defaultData },
                      { data: this.data }
                    ));
                };
                return (
                  (t.prototype = new i()), (t.prototype.constructor = t), t
                );
              }),
              (n.exports = i);
          },
          { "../utils/ajax": 14, "../utils/find-email": 17, extend: 21 },
        ],
        3: [
          function (e, t, n) {
            var r = e("./base"),
              i = r.create(function (e, t) {
                (this.name = "birthday"), (this.defaultData = {});
              });
            (i.prototype.getJSON = function () {
              return (
                this.value &&
                  this.value instanceof Date &&
                  ((this.json.data.month = this.value.getMonth() + 1),
                  (this.json.data.day = this.value.getDate()),
                  (this.json.data.year = this.value.getFullYear())),
                this.json
              );
            }),
              (t.exports = i);
          },
          { "./base": 2 },
        ],
        4: [
          function (t, n, r) {
            var i = t("resolve-url"),
              o = t("./base"),
              a = o.create(function (t, n) {
                (this.name = "cartItem"),
                  (this.defaultData = { url: e.location.href });
              });
            (a.prototype.getJSON = function () {
              return (this.json.data.url = i(this.json.data.url)), this.json;
            }),
              (n.exports = a);
          },
          { "./base": 2, "resolve-url": 22 },
        ],
        5: [
          function (e, t, n) {
            var r = e("./base"),
              i = r.create(function (e, t) {
                (this.name = "email"), (this.defaultData = {});
              });
            (i.prototype.getJSON = function () {
              return (
                this.value && (this.json.data.email = this.value),
                this.json.data.email &&
                  ((this.json.email = this.json.data.email),
                  delete this.json.data.email),
                this.json
              );
            }),
              (t.exports = i);
          },
          { "./base": 2 },
        ],
        6: [
          function (e, t, n) {
            var r = e("./base"),
              i = r.create(function (e, t) {
                (this.name = "generic"), (this.defaultData = {});
              });
            t.exports = i;
          },
          { "./base": 2 },
        ],
        7: [
          function (e, t, n) {
            var r = e("./base"),
              i = r.create(function (e, t) {
                this.name = "geolocation";
              });
            t.exports = i;
          },
          { "./base": 2 },
        ],
        8: [
          function (e, t, n) {
            t.exports = {
              birthday: e("./birthday"),
              cartitem: e("./cart-item"),
              email: e("./email"),
              geolocation: e("./geolocation"),
              pageview: e("./pageview"),
              track: e("./generic"),
              transaction: e("./transaction"),
              search: e("./search"),
              promochange: e("./promo"),
            };
          },
          {
            "./birthday": 3,
            "./cart-item": 4,
            "./email": 5,
            "./generic": 6,
            "./geolocation": 7,
            "./pageview": 9,
            "./promo": 10,
            "./search": 11,
            "./transaction": 12,
          },
        ],
        9: [
          function (n, r, i) {
            var o = n("resolve-url"),
              a = n("../utils/capabilities"),
              s = n("../utils/navigation-timing"),
              u = n("./base"),
              c = u.create(function (n, r) {
                var i = e.navigator || e.clientInformation,
                  o = i.doNotTrack || e.doNotTrack || i.msDoNotTrack,
                  u = !1;
                "unspecified" === o
                  ? (u = void 0)
                  : o && "0" !== o && "no" !== o && (u = !0),
                  (this.name = "pageview"),
                  (this.defaultData = {
                    url: e.location.href,
                    referer: t.referer || t.referrer,
                    title: t.title,
                    vendor: i.vendor,
                    screenWidth: screen.width,
                    screenHeight: screen.height,
                    viewportWidth: t.documentElement.clientWidth,
                    viewportHeight: t.documentElement.clientHeight,
                    doNotTrackEnabled: u,
                    devicePixelRatio: e.devicePixelRatio || void 0,
                    capabilities: {
                      pushNotifications: a.pushNotifications,
                      cookies: a.cookiesEnabled,
                    },
                    navigationTiming: {
                      networkLatency: s.networkLatency,
                      navigationType: s.navigationType,
                      previousRedirects: s.previousRedirects,
                    },
                  });
              });
            (c.prototype.getJSON = function () {
              return (
                this.value && (this.json.data.url = this.value),
                (this.json.data.url = o(this.json.data.url)),
                this.json
              );
            }),
              (r.exports = c);
          },
          {
            "../utils/capabilities": 15,
            "../utils/navigation-timing": 18,
            "./base": 2,
            "resolve-url": 22,
          },
        ],
        10: [
          function (e, t, n) {
            var r = e("./base"),
              i = e("resolve-url"),
              o = r.create(function (e, t) {
                (this.name = "promoChange"), (this.defaultData = {});
              });
            (o.prototype.getJSON = function () {
              return (this.json.data.url = i(this.json.data.url)), this.json;
            }),
              (t.exports = o);
          },
          { "./base": 2, "resolve-url": 22 },
        ],
        11: [
          function (t, n, r) {
            var i = t("resolve-url"),
              o = t("./base"),
              a = o.create(function (t, n) {
                (this.name = "search"),
                  (this.defaultData = { url: e.location.href });
              });
            (a.prototype.getJSON = function () {
              return (this.json.data.url = i(this.json.data.url)), this.json;
            }),
              (n.exports = a);
          },
          { "./base": 2, "resolve-url": 22 },
        ],
        12: [
          function (e, t, n) {
            var r = e("extend"),
              i = e("./base"),
              o = i.create(function (e, t) {
                (this.name = "transaction"), (this.defaultData = {});
              });
            (o.prototype.getJSON = function () {
              return (
                "object" == typeof this.json.data.receipt &&
                  ((this.json.data = r(
                    !0,
                    this.json.data,
                    this.json.data.receipt
                  )),
                  delete this.json.data.receipt),
                this.json.data.email &&
                  ((this.json.email = this.json.data.email),
                  delete this.json.data.email),
                this.json
              );
            }),
              (t.exports = o);
          },
          { "./base": 2, extend: 21 },
        ],
        13: [
          function (e, t, n) {
            var r = e("./bbx");
            r.registerGlobal();
          },
          { "./bbx": 1 },
        ],
        14: [
          function (e, t, n) {
            t.exports = function (e, t, n, r) {
              r = "function" == typeof r ? r : function () {};
              var i = new XMLHttpRequest();
              i.open(e, t, !0);
              var o;
              if (n)
                try {
                  (o = JSON.stringify(n)),
                    i.setRequestHeader("Content-Type", "application/json");
                } catch (a) {
                  var s =
                    "[bbx] Request data " +
                    (n.event ? 'for "' + n.event + '" event ' : "") +
                    "could not be stringified. This may be caused by circular referencesin an object.";
                  console.error(s);
                }
              return (
                i.setRequestHeader("Accept", "application/json"),
                (i.onreadystatechange = function () {
                  if (4 === i.readyState) {
                    var e = i.getResponseHeader("Content-Type");
                    if (e && e.indexOf("application/json") > -1)
                      try {
                        i.responseJSON = JSON.parse(i.responseText);
                      } catch (t) {
                        console.error(
                          '[bbx] Event responded with "Content-Type: %s", but the response could not be parsed.',
                          e
                        );
                      }
                    r(i.responseJSON || i.responseText, i);
                  }
                }),
                i.send(o),
                i
              );
            };
          },
          {},
        ],
        15: [
          function (t, n, r) {
            n.exports = {
              cookiesEnabled: (function () {
                return navigator.cookieEnabled || !1;
              })(),
              pushNotifications: (function () {
                var t =
                  e.Notification ||
                  navigator.webkitNotifications ||
                  navigator.mozNotification;
                return "undefined" !== t;
              })(),
            };
          },
          {},
        ],
        16: [
          function (e, n, r) {
            n.exports = {
              get: function (e) {
                var n = "(?:^|; )" + encodeURIComponent(e) + "=([^;]*)",
                  r = new RegExp(n).exec(t.cookie);
                return r && r[1];
              },
              set: function (e, n, r) {
                var i = encodeURIComponent(e) + "=" + encodeURIComponent(n);
                return (i += "; max-age=" + (r || 31536e3)), (t.cookie = i);
              },
            };
          },
          {},
        ],
        17: [
          function (e, t, n) {
            var r = e("./storage"),
              i = ["userEmail", "user-email", "accountEmail", "email"];
            t.exports = function () {
              var e = r.search(i);
              if (!e && r.get("checkout")) {
                var t = r.get("checkout");
                e = t && t.email;
              }
              return e;
            };
          },
          { "./storage": 20 },
        ],
        18: [
          function (t, n, r) {
            n.exports = {
              networkLatency: (function () {
                if ("performance" in e && "timing" in e.performance) {
                  var t = e.performance.timing;
                  return t.responseEnd - t.fetchStart;
                }
                return void 0;
              })(),
              previousRedirects: (function () {
                return "performance" in e &&
                  "navigation" in e.performance &&
                  "redirectCount" in e.performance.navigation
                  ? 0 === e.performance.navigation.redirectCount
                    ? 0
                    : e.performance.navigation.redirectCount
                  : void 0;
              })(),
              navigationType: (function () {
                return "performance" in e &&
                  "navigation" in e.performance &&
                  "type" in e.performance.navigation
                  ? 0 === e.performance.navigation.type
                    ? 0
                    : e.performance.navigation.type
                  : void 0;
              })(),
            };
          },
          {},
        ],
        19: [
          function (t, n, r) {
            n.exports = function (t, n) {
              if (n instanceof Array && n.length) {
                for (var r = 0; r < n.length; r++) n[r] && t.apply(e, n[r]);
                n.length = 0;
              }
            };
          },
          {},
        ],
        20: [
          function (t, n, r) {
            var i = !0;
            try {
              var o = "BBX_STORAGE_SUPPORT_TEST";
              e.localStorage.setItem(o, "bbx"), e.localStorage.removeItem(o);
            } catch (a) {
              i = !1;
            }
            n.exports = {
              isSupported: i,
              get: function (t) {
                var n;
                if (
                  (n = this.isSupported
                    ? e.sessionStorage[t] || e.localStorage[t]
                    : null)
                )
                  try {
                    n = JSON.parse(n);
                  } catch (r) {
                    n = "undefined" === n ? void 0 : n;
                  }
                return n;
              },
              search: function (e) {
                for (var t, n = e.length, r = 0; n > r; r++)
                  t || (t = this.get(e[r]));
                return t;
              },
              set: function (t, n, r) {
                return this.isSupported
                  ? r
                    ? (e.sessionStorage[t] = n)
                    : (e.localStorage[t] = n)
                  : null;
              },
            };
          },
          {},
        ],
        21: [
          function (e, t, n) {
            var r,
              i = Object.prototype.hasOwnProperty,
              o = Object.prototype.toString,
              a = function (e) {
                if (
                  !e ||
                  "[object Object]" !== o.call(e) ||
                  e.nodeType ||
                  e.setInterval
                )
                  return !1;
                var t = i.call(e, "constructor"),
                  n =
                    e.constructor &&
                    e.constructor.prototype &&
                    i.call(e.constructor.prototype, "isPrototypeOf");
                if (e.constructor && !t && !n) return !1;
                var a;
                for (a in e);
                return a === r || i.call(e, a);
              };
            t.exports = function s() {
              var e,
                t,
                n,
                i,
                o,
                u,
                c = arguments[0],
                l = 1,
                f = arguments.length,
                d = !1;
              for (
                "boolean" == typeof c
                  ? ((d = c), (c = arguments[1] || {}), (l = 2))
                  : (("object" != typeof c && "function" != typeof c) ||
                      c == r) &&
                    (c = {});
                f > l;
                ++l
              )
                if (null != (e = arguments[l]))
                  for (t in e)
                    (n = c[t]),
                      (i = e[t]),
                      c !== i &&
                        (d && i && (a(i) || (o = Array.isArray(i)))
                          ? (o
                              ? ((o = !1), (u = n && Array.isArray(n) ? n : []))
                              : (u = n && a(n) ? n : {}),
                            (c[t] = s(d, u, i)))
                          : i !== r && (c[t] = i));
              return c;
            };
          },
          {},
        ],
        22: [
          function (e, n, r) {
            void (function (e, t) {
              "function" == typeof define && define.amd
                ? define(t)
                : "object" == typeof r
                ? (n.exports = t())
                : (e.resolveUrl = t());
            })(this, function () {
              function e() {
                var e = arguments.length;
                if (0 === e)
                  throw new Error(
                    "resolveUrl requires at least one argument; got none."
                  );
                var n = t.createElement("base");
                if (((n.href = arguments[0]), 1 === e)) return n.href;
                var r = t.getElementsByTagName("head")[0];
                r.insertBefore(n, r.firstChild);
                for (var i, o = t.createElement("a"), a = 1; e > a; a++)
                  (o.href = arguments[a]), (i = o.href), (n.href = i);
                return r.removeChild(n), i;
              }
              return e;
            });
          },
          {},
        ],
      },
      {},
      [13]
    );
  }
  !(function (e, t) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof e ? e : this, function (e, t) {
    function n(e) {
      var t = "length" in e && e.length,
        n = z.type(e);
      return "function" === n || z.isWindow(e)
        ? !1
        : 1 === e.nodeType && t
        ? !0
        : "array" === n ||
          0 === t ||
          ("number" == typeof t && t > 0 && t - 1 in e);
    }
    function r(e, t, n) {
      if (z.isFunction(t))
        return z.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        });
      if (t.nodeType)
        return z.grep(e, function (e) {
          return (e === t) !== n;
        });
      if ("string" == typeof t) {
        if (ee.test(t)) return z.filter(t, e, n);
        t = z.filter(t, e);
      }
      return z.grep(e, function (e) {
        return _.call(t, e) >= 0 !== n;
      });
    }
    function i(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
    }
    function o(e) {
      var t = (se[e] = {});
      return (
        z.each(e.match(ae) || [], function (e, n) {
          t[n] = !0;
        }),
        t
      );
    }
    function a() {
      X.removeEventListener("DOMContentLoaded", a, !1),
        e.removeEventListener("load", a, !1),
        z.ready();
    }
    function s() {
      Object.defineProperty((this.cache = {}), 0, {
        get: function () {
          return {};
        },
      }),
        (this.expando = z.expando + s.uid++);
    }
    function u(e, t, n) {
      var r;
      if (void 0 === n && 1 === e.nodeType)
        if (
          ((r = "data-" + t.replace(pe, "-$1").toLowerCase()),
          (n = e.getAttribute(r)),
          "string" == typeof n)
        ) {
          try {
            n =
              "true" === n
                ? !0
                : "false" === n
                ? !1
                : "null" === n
                ? null
                : +n + "" === n
                ? +n
                : de.test(n)
                ? z.parseJSON(n)
                : n;
          } catch (i) {}
          fe.set(e, t, n);
        } else n = void 0;
      return n;
    }
    function c() {
      return !0;
    }
    function l() {
      return !1;
    }
    function f() {
      try {
        return X.activeElement;
      } catch (e) {}
    }
    function d(e, t) {
      return z.nodeName(e, "table") &&
        z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
        ? e.getElementsByTagName("tbody")[0] ||
            e.appendChild(e.ownerDocument.createElement("tbody"))
        : e;
    }
    function p(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function h(e) {
      var t = Ae.exec(e.type);
      return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function g(e, t) {
      for (var n = 0, r = e.length; r > n; n++)
        le.set(e[n], "globalEval", !t || le.get(t[n], "globalEval"));
    }
    function m(e, t) {
      var n, r, i, o, a, s, u, c;
      if (1 === t.nodeType) {
        if (
          le.hasData(e) &&
          ((o = le.access(e)), (a = le.set(t, o)), (c = o.events))
        ) {
          delete a.handle, (a.events = {});
          for (i in c)
            for (n = 0, r = c[i].length; r > n; n++) z.event.add(t, i, c[i][n]);
        }
        fe.hasData(e) &&
          ((s = fe.access(e)), (u = z.extend({}, s)), fe.set(t, u));
      }
    }
    function v(e, t) {
      var n = e.getElementsByTagName
        ? e.getElementsByTagName(t || "*")
        : e.querySelectorAll
        ? e.querySelectorAll(t || "*")
        : [];
      return void 0 === t || (t && z.nodeName(e, t)) ? z.merge([e], n) : n;
    }
    function y(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && ve.test(e.type)
        ? (t.checked = e.checked)
        : ("input" === n || "textarea" === n) &&
          (t.defaultValue = e.defaultValue);
    }
    function b(t, n) {
      var r,
        i = z(n.createElement(t)).appendTo(n.body),
        o =
          e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0]))
            ? r.display
            : z.css(i[0], "display");
      return i.detach(), o;
    }
    function x(e) {
      var t = X,
        n = Pe[e];
      return (
        n ||
          ((n = b(e, t)),
          ("none" !== n && n) ||
            ((Oe = (
              Oe || z("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(t.documentElement)),
            (t = Oe[0].contentDocument),
            t.write(),
            t.close(),
            (n = b(e, t)),
            Oe.detach()),
          (Pe[e] = n)),
        n
      );
    }
    function w(e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.style;
      return (
        (n = n || Fe(e)),
        n && (a = n.getPropertyValue(t) || n[t]),
        n &&
          ("" !== a || z.contains(e.ownerDocument, e) || (a = z.style(e, t)),
          Be.test(a) &&
            qe.test(t) &&
            ((r = s.width),
            (i = s.minWidth),
            (o = s.maxWidth),
            (s.minWidth = s.maxWidth = s.width = a),
            (a = n.width),
            (s.width = r),
            (s.minWidth = i),
            (s.maxWidth = o))),
        void 0 !== a ? a + "" : a
      );
    }
    function C(e, t) {
      return {
        get: function () {
          return e()
            ? void delete this.get
            : (this.get = t).apply(this, arguments);
        },
      };
    }
    function T(e, t) {
      if (t in e) return t;
      for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = We.length; i--; )
        if (((t = We[i] + n), t in e)) return t;
      return r;
    }
    function k(e, t, n) {
      var r = He.exec(t);
      return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function N(e, t, n, r, i) {
      for (
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
          a = 0;
        4 > o;
        o += 2
      )
        "margin" === n && (a += z.css(e, n + ge[o], !0, i)),
          r
            ? ("content" === n && (a -= z.css(e, "padding" + ge[o], !0, i)),
              "margin" !== n &&
                (a -= z.css(e, "border" + ge[o] + "Width", !0, i)))
            : ((a += z.css(e, "padding" + ge[o], !0, i)),
              "padding" !== n &&
                (a += z.css(e, "border" + ge[o] + "Width", !0, i)));
      return a;
    }
    function S(e, t, n) {
      var r = !0,
        i = "width" === t ? e.offsetWidth : e.offsetHeight,
        o = Fe(e),
        a = "border-box" === z.css(e, "boxSizing", !1, o);
      if (0 >= i || null == i) {
        if (
          ((i = w(e, t, o)),
          (0 > i || null == i) && (i = e.style[t]),
          Be.test(i))
        )
          return i;
        (r = a && ($.boxSizingReliable() || i === e.style[t])),
          (i = parseFloat(i) || 0);
      }
      return i + N(e, t, n || (a ? "border" : "content"), r, o) + "px";
    }
    function E(e, t) {
      for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)
        (r = e[a]),
          r.style &&
            ((o[a] = le.get(r, "olddisplay")),
            (n = r.style.display),
            t
              ? (o[a] || "none" !== n || (r.style.display = ""),
                "" === r.style.display &&
                  me(r) &&
                  (o[a] = le.access(r, "olddisplay", x(r.nodeName))))
              : ((i = me(r)),
                ("none" === n && i) ||
                  le.set(r, "olddisplay", i ? n : z.css(r, "display"))));
      for (a = 0; s > a; a++)
        (r = e[a]),
          r.style &&
            ((t && "none" !== r.style.display && "" !== r.style.display) ||
              (r.style.display = t ? o[a] || "" : "none"));
      return e;
    }
    function j(e) {
      return function (t, n) {
        "string" != typeof t && ((n = t), (t = "*"));
        var r,
          i = 0,
          o = t.toLowerCase().match(ae) || [];
        if (z.isFunction(n))
          for (; (r = o[i++]); )
            "+" === r[0]
              ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
              : (e[r] = e[r] || []).push(n);
      };
    }
    function A(e, t, n, r) {
      function i(s) {
        var u;
        return (
          (o[s] = !0),
          z.each(e[s] || [], function (e, s) {
            var c = s(t, n, r);
            return "string" != typeof c || a || o[c]
              ? a
                ? !(u = c)
                : void 0
              : (t.dataTypes.unshift(c), i(c), !1);
          }),
          u
        );
      }
      var o = {},
        a = e === ot;
      return i(t.dataTypes[0]) || (!o["*"] && i("*"));
    }
    function D(e, t) {
      var n,
        r,
        i = z.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && z.extend(!0, e, r), e;
    }
    function L(e, t, n) {
      for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
        u.shift(),
          void 0 === r &&
            (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r)
        for (i in s)
          if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break;
          }
      if (u[0] in n) o = u[0];
      else {
        for (i in n) {
          if (!u[0] || e.converters[i + " " + u[0]]) {
            o = i;
            break;
          }
          a || (a = i);
        }
        o = o || a;
      }
      return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0;
    }
    function O(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        c = {},
        l = e.dataTypes.slice();
      if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
      for (o = l.shift(); o; )
        if (
          (e.responseFields[o] && (n[e.responseFields[o]] = t),
          !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          (u = o),
          (o = l.shift()))
        )
          if ("*" === o) o = u;
          else if ("*" !== u && u !== o) {
            if (((a = c[u + " " + o] || c["* " + o]), !a))
              for (i in c)
                if (
                  ((s = i.split(" ")),
                  s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]]))
                ) {
                  a === !0
                    ? (a = c[i])
                    : c[i] !== !0 && ((o = s[0]), l.unshift(s[1]));
                  break;
                }
            if (a !== !0)
              if (a && e["throws"]) t = a(t);
              else
                try {
                  t = a(t);
                } catch (f) {
                  return {
                    state: "parsererror",
                    error: a ? f : "No conversion from " + u + " to " + o,
                  };
                }
          }
      return { state: "success", data: t };
    }
    function P(e, t, n, r) {
      var i;
      if (z.isArray(t))
        z.each(t, function (t, i) {
          n || lt.test(e)
            ? r(e, i)
            : P(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
        });
      else if (n || "object" !== z.type(t)) r(e, t);
      else for (i in t) P(e + "[" + i + "]", t[i], n, r);
    }
    function q(e) {
      return z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    var B = [],
      F = B.slice,
      R = B.concat,
      H = B.push,
      _ = B.indexOf,
      I = {},
      M = I.toString,
      W = I.hasOwnProperty,
      $ = {},
      X = e.document,
      U =
        "2.1.4 -exports/amd,-effects,-effects/Tween,-effects/animatedSelector",
      z = function (e, t) {
        return new z.fn.init(e, t);
      },
      J = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      V = /^-ms-/,
      G = /-([\da-z])/gi,
      Y = function (e, t) {
        return t.toUpperCase();
      };
    (z.fn = z.prototype = {
      jquery: U,
      constructor: z,
      selector: "",
      length: 0,
      toArray: function () {
        return F.call(this);
      },
      get: function (e) {
        return null != e
          ? 0 > e
            ? this[e + this.length]
            : this[e]
          : F.call(this);
      },
      pushStack: function (e) {
        var t = z.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e, t) {
        return z.each(this, e, t);
      },
      map: function (e) {
        return this.pushStack(
          z.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(F.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: H,
      sort: B.sort,
      splice: B.splice,
    }),
      (z.extend = z.fn.extend = function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          c = !1;
        for (
          "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || z.isFunction(a) || (a = {}),
            s === u && ((a = this), s--);
          u > s;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (n = a[t]),
                (r = e[t]),
                a !== r &&
                  (c && r && (z.isPlainObject(r) || (i = z.isArray(r)))
                    ? (i
                        ? ((i = !1), (o = n && z.isArray(n) ? n : []))
                        : (o = n && z.isPlainObject(n) ? n : {}),
                      (a[t] = z.extend(c, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
      z.extend({
        expando: "jQuery" + (U + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isFunction: function (e) {
          return "function" === z.type(e);
        },
        isArray: Array.isArray,
        isWindow: function (e) {
          return null != e && e === e.window;
        },
        isNumeric: function (e) {
          return !z.isArray(e) && e - parseFloat(e) + 1 >= 0;
        },
        isPlainObject: function (e) {
          return "object" !== z.type(e) || e.nodeType || z.isWindow(e)
            ? !1
            : e.constructor && !W.call(e.constructor.prototype, "isPrototypeOf")
            ? !1
            : !0;
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        type: function (e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? I[M.call(e)] || "object"
            : typeof e;
        },
        globalEval: function (e) {
          var t,
            n = eval;
          (e = z.trim(e)),
            e &&
              (1 === e.indexOf("use strict")
                ? ((t = X.createElement("script")),
                  (t.text = e),
                  X.head.appendChild(t).parentNode.removeChild(t))
                : n(e));
        },
        camelCase: function (e) {
          return e.replace(V, "ms-").replace(G, Y);
        },
        nodeName: function (e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function (e, t, r) {
          var i,
            o = 0,
            a = e.length,
            s = n(e);
          if (r) {
            if (s) for (; a > o && ((i = t.apply(e[o], r)), i !== !1); o++);
            else for (o in e) if (((i = t.apply(e[o], r)), i === !1)) break;
          } else if (s)
            for (; a > o && ((i = t.call(e[o], o, e[o])), i !== !1); o++);
          else for (o in e) if (((i = t.call(e[o], o, e[o])), i === !1)) break;
          return e;
        },
        trim: function (e) {
          return null == e ? "" : (e + "").replace(J, "");
        },
        makeArray: function (e, t) {
          var r = t || [];
          return (
            null != e &&
              (n(Object(e))
                ? z.merge(r, "string" == typeof e ? [e] : e)
                : H.call(r, e)),
            r
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : _.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, r = 0, i = e.length; n > r; r++)
            e[i++] = t[r];
          return (e.length = i), e;
        },
        grep: function (e, t, n) {
          for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++)
            (r = !t(e[o], o)), r !== s && i.push(e[o]);
          return i;
        },
        map: function (e, t, r) {
          var i,
            o = 0,
            a = e.length,
            s = n(e),
            u = [];
          if (s) for (; a > o; o++) (i = t(e[o], o, r)), null != i && u.push(i);
          else for (o in e) (i = t(e[o], o, r)), null != i && u.push(i);
          return R.apply([], u);
        },
        guid: 1,
        proxy: function (e, t) {
          var n, r, i;
          return (
            "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
            z.isFunction(e)
              ? ((r = F.call(arguments, 2)),
                (i = function () {
                  return e.apply(t || this, r.concat(F.call(arguments)));
                }),
                (i.guid = e.guid = e.guid || z.guid++),
                i)
              : void 0
          );
        },
        now: Date.now,
        support: $,
      }),
      z.each(
        "Boolean Number String Function Array Date RegExp Object Error".split(
          " "
        ),
        function (e, t) {
          I["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var Q = (function (e) {
      function t(e, t, n, r) {
        var i, o, a, s, u, c, f, p, h, g;
        if (
          ((t ? t.ownerDocument || t : I) !== O && L(t),
          (t = t || O),
          (n = n || []),
          (s = t.nodeType),
          "string" != typeof e || !e || (1 !== s && 9 !== s && 11 !== s))
        )
          return n;
        if (!r && q) {
          if (11 !== s && (i = ye.exec(e)))
            if ((a = i[1])) {
              if (9 === s) {
                if (((o = t.getElementById(a)), !o || !o.parentNode)) return n;
                if (o.id === a) return n.push(o), n;
              } else if (
                t.ownerDocument &&
                (o = t.ownerDocument.getElementById(a)) &&
                H(t, o) &&
                o.id === a
              )
                return n.push(o), n;
            } else {
              if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
              if ((a = i[3]) && w.getElementsByClassName)
                return K.apply(n, t.getElementsByClassName(a)), n;
            }
          if (w.qsa && (!B || !B.test(e))) {
            if (
              ((p = f = _),
              (h = t),
              (g = 1 !== s && e),
              1 === s && "object" !== t.nodeName.toLowerCase())
            ) {
              for (
                c = N(e),
                  (f = t.getAttribute("id"))
                    ? (p = f.replace(xe, "\\$&"))
                    : t.setAttribute("id", p),
                  p = "[id='" + p + "'] ",
                  u = c.length;
                u--;

              )
                c[u] = p + d(c[u]);
              (h = (be.test(e) && l(t.parentNode)) || t), (g = c.join(","));
            }
            if (g)
              try {
                return K.apply(n, h.querySelectorAll(g)), n;
              } catch (m) {
              } finally {
                f || t.removeAttribute("id");
              }
          }
        }
        return E(e.replace(ue, "$1"), t, n, r);
      }
      function n() {
        function e(n, r) {
          return (
            t.push(n + " ") > C.cacheLength && delete e[t.shift()],
            (e[n + " "] = r)
          );
        }
        var t = [];
        return e;
      }
      function r(e) {
        return (e[_] = !0), e;
      }
      function i(e) {
        var t = O.createElement("div");
        try {
          return !!e(t);
        } catch (n) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function o(e, t) {
        for (var n = e.split("|"), r = e.length; r--; ) C.attrHandle[n[r]] = t;
      }
      function a(e, t) {
        var n = t && e,
          r =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            (~t.sourceIndex || J) - (~e.sourceIndex || J);
        if (r) return r;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function s(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return "input" === n && t.type === e;
        };
      }
      function u(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }
      function c(e) {
        return r(function (t) {
          return (
            (t = +t),
            r(function (n, r) {
              for (var i, o = e([], n.length, t), a = o.length; a--; )
                n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
            })
          );
        });
      }
      function l(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e;
      }
      function f() {}
      function d(e) {
        for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
        return r;
      }
      function p(e, t, n) {
        var r = t.dir,
          i = n && "parentNode" === r,
          o = W++;
        return t.first
          ? function (t, n, o) {
              for (; (t = t[r]); ) if (1 === t.nodeType || i) return e(t, n, o);
            }
          : function (t, n, a) {
              var s,
                u,
                c = [M, o];
              if (a) {
                for (; (t = t[r]); )
                  if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
              } else
                for (; (t = t[r]); )
                  if (1 === t.nodeType || i) {
                    if (
                      ((u = t[_] || (t[_] = {})),
                      (s = u[r]) && s[0] === M && s[1] === o)
                    )
                      return (c[2] = s[2]);
                    if (((u[r] = c), (c[2] = e(t, n, a)))) return !0;
                  }
            };
      }
      function h(e) {
        return e.length > 1
          ? function (t, n, r) {
              for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
              return !0;
            }
          : e[0];
      }
      function g(e, n, r) {
        for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
        return r;
      }
      function m(e, t, n, r, i) {
        for (var o, a = [], s = 0, u = e.length, c = null != t; u > s; s++)
          (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), c && t.push(s));
        return a;
      }
      function v(e, t, n, i, o, a) {
        return (
          i && !i[_] && (i = v(i)),
          o && !o[_] && (o = v(o, a)),
          r(function (r, a, s, u) {
            var c,
              l,
              f,
              d = [],
              p = [],
              h = a.length,
              v = r || g(t || "*", s.nodeType ? [s] : s, []),
              y = !e || (!r && t) ? v : m(v, d, e, s, u),
              b = n ? (o || (r ? e : h || i) ? [] : a) : y;
            if ((n && n(y, b, s, u), i))
              for (c = m(b, p), i(c, [], s, u), l = c.length; l--; )
                (f = c[l]) && (b[p[l]] = !(y[p[l]] = f));
            if (r) {
              if (o || e) {
                if (o) {
                  for (c = [], l = b.length; l--; )
                    (f = b[l]) && c.push((y[l] = f));
                  o(null, (b = []), c, u);
                }
                for (l = b.length; l--; )
                  (f = b[l]) &&
                    (c = o ? ee(r, f) : d[l]) > -1 &&
                    (r[c] = !(a[c] = f));
              }
            } else (b = m(b === a ? b.splice(h, b.length) : b)), o ? o(null, a, b, u) : K.apply(a, b);
          })
        );
      }
      function y(e) {
        for (
          var t,
            n,
            r,
            i = e.length,
            o = C.relative[e[0].type],
            a = o || C.relative[" "],
            s = o ? 1 : 0,
            u = p(
              function (e) {
                return e === t;
              },
              a,
              !0
            ),
            c = p(
              function (e) {
                return ee(t, e) > -1;
              },
              a,
              !0
            ),
            l = [
              function (e, n, r) {
                var i =
                  (!o && (r || n !== j)) ||
                  ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
                return (t = null), i;
              },
            ];
          i > s;
          s++
        )
          if ((n = C.relative[e[s].type])) l = [p(h(l), n)];
          else {
            if (((n = C.filter[e[s].type].apply(null, e[s].matches)), n[_])) {
              for (r = ++s; i > r && !C.relative[e[r].type]; r++);
              return v(
                s > 1 && h(l),
                s > 1 &&
                  d(
                    e
                      .slice(0, s - 1)
                      .concat({ value: " " === e[s - 2].type ? "*" : "" })
                  ).replace(ue, "$1"),
                n,
                r > s && y(e.slice(s, r)),
                i > r && y((e = e.slice(r))),
                i > r && d(e)
              );
            }
            l.push(n);
          }
        return h(l);
      }
      function b(e, n) {
        var i = n.length > 0,
          o = e.length > 0,
          a = function (r, a, s, u, c) {
            var l,
              f,
              d,
              p = 0,
              h = "0",
              g = r && [],
              v = [],
              y = j,
              b = r || (o && C.find.TAG("*", c)),
              x = (M += null == y ? 1 : Math.random() || 0.1),
              w = b.length;
            for (c && (j = a !== O && a); h !== w && null != (l = b[h]); h++) {
              if (o && l) {
                for (f = 0; (d = e[f++]); )
                  if (d(l, a, s)) {
                    u.push(l);
                    break;
                  }
                c && (M = x);
              }
              i && ((l = !d && l) && p--, r && g.push(l));
            }
            if (((p += h), i && h !== p)) {
              for (f = 0; (d = n[f++]); ) d(g, v, a, s);
              if (r) {
                if (p > 0) for (; h--; ) g[h] || v[h] || (v[h] = Y.call(u));
                v = m(v);
              }
              K.apply(u, v),
                c && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u);
            }
            return c && ((M = x), (j = y)), g;
          };
        return i ? r(a) : a;
      }
      var x,
        w,
        C,
        T,
        k,
        N,
        S,
        E,
        j,
        A,
        D,
        L,
        O,
        P,
        q,
        B,
        F,
        R,
        H,
        _ = "sizzle" + 1 * new Date(),
        I = e.document,
        M = 0,
        W = 0,
        $ = n(),
        X = n(),
        U = n(),
        z = function (e, t) {
          return e === t && (D = !0), 0;
        },
        J = 1 << 31,
        V = {}.hasOwnProperty,
        G = [],
        Y = G.pop,
        Q = G.push,
        K = G.push,
        Z = G.slice,
        ee = function (e, t) {
          for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
          return -1;
        },
        te =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ne = "[\\x20\\t\\r\\n\\f]",
        re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ie = re.replace("w", "w#"),
        oe =
          "\\[" +
          ne +
          "*(" +
          re +
          ")(?:" +
          ne +
          "*([*^$|!~]?=)" +
          ne +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          ie +
          "))|)" +
          ne +
          "*\\]",
        ae =
          ":(" +
          re +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          oe +
          ")*)|.*)\\)|)",
        se = new RegExp(ne + "+", "g"),
        ue = new RegExp(
          "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
          "g"
        ),
        ce = new RegExp("^" + ne + "*," + ne + "*"),
        le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
        fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
        de = new RegExp(ae),
        pe = new RegExp("^" + ie + "$"),
        he = {
          ID: new RegExp("^#(" + re + ")"),
          CLASS: new RegExp("^\\.(" + re + ")"),
          TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + oe),
          PSEUDO: new RegExp("^" + ae),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              ne +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              ne +
              "*(?:([+-]|)" +
              ne +
              "*(\\d+)|))" +
              ne +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + te + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              ne +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              ne +
              "*((?:-\\d)?\\d*)" +
              ne +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        ge = /^(?:input|select|textarea|button)$/i,
        me = /^h\d$/i,
        ve = /^[^{]+\{\s*\[native \w/,
        ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        be = /[+~]/,
        xe = /'|\\/g,
        we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
        Ce = function (e, t, n) {
          var r = "0x" + t - 65536;
          return r !== r || n
            ? t
            : 0 > r
            ? String.fromCharCode(r + 65536)
            : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
        },
        Te = function () {
          L();
        };
      try {
        K.apply((G = Z.call(I.childNodes)), I.childNodes),
          G[I.childNodes.length].nodeType;
      } catch (ke) {
        K = {
          apply: G.length
            ? function (e, t) {
                Q.apply(e, Z.call(t));
              }
            : function (e, t) {
                for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                e.length = n - 1;
              },
        };
      }
      (w = t.support = {}),
        (k = t.isXML = function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return t ? "HTML" !== t.nodeName : !1;
        }),
        (L = t.setDocument = function (e) {
          var t,
            n,
            r = e ? e.ownerDocument || e : I;
          return r !== O && 9 === r.nodeType && r.documentElement
            ? ((O = r),
              (P = r.documentElement),
              (n = r.defaultView),
              n &&
                n !== n.top &&
                (n.addEventListener
                  ? n.addEventListener("unload", Te, !1)
                  : n.attachEvent && n.attachEvent("onunload", Te)),
              (q = !k(r)),
              (w.attributes = i(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (w.getElementsByTagName = i(function (e) {
                return (
                  e.appendChild(r.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (w.getElementsByClassName = ve.test(r.getElementsByClassName)),
              (w.getById = i(function (e) {
                return (
                  (P.appendChild(e).id = _),
                  !r.getElementsByName || !r.getElementsByName(_).length
                );
              })),
              w.getById
                ? ((C.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && q) {
                      var n = t.getElementById(e);
                      return n && n.parentNode ? [n] : [];
                    }
                  }),
                  (C.filter.ID = function (e) {
                    var t = e.replace(we, Ce);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }))
                : (delete C.find.ID,
                  (C.filter.ID = function (e) {
                    var t = e.replace(we, Ce);
                    return function (e) {
                      var n =
                        "undefined" != typeof e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  })),
              (C.find.TAG = w.getElementsByTagName
                ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : w.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (C.find.CLASS =
                w.getElementsByClassName &&
                function (e, t) {
                  return q ? t.getElementsByClassName(e) : void 0;
                }),
              (F = []),
              (B = []),
              (w.qsa = ve.test(r.querySelectorAll)) &&
                (i(function (e) {
                  (P.appendChild(e).innerHTML =
                    "<a id='" +
                    _ +
                    "'></a><select id='" +
                    _ +
                    "-\f]' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      B.push("[*^$]=" + ne + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      B.push("\\[" + ne + "*(?:value|" + te + ")"),
                    e.querySelectorAll("[id~=" + _ + "-]").length ||
                      B.push("~="),
                    e.querySelectorAll(":checked").length || B.push(":checked"),
                    e.querySelectorAll("a#" + _ + "+*").length ||
                      B.push(".#.+[+~]");
                }),
                i(function (e) {
                  var t = r.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      B.push("name" + ne + "*[*^$|!~]?="),
                    e.querySelectorAll(":enabled").length ||
                      B.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    B.push(",.*:");
                })),
              (w.matchesSelector = ve.test(
                (R =
                  P.matches ||
                  P.webkitMatchesSelector ||
                  P.mozMatchesSelector ||
                  P.oMatchesSelector ||
                  P.msMatchesSelector)
              )) &&
                i(function (e) {
                  (w.disconnectedMatch = R.call(e, "div")),
                    R.call(e, "[s!='']:x"),
                    F.push("!=", ae);
                }),
              (B = B.length && new RegExp(B.join("|"))),
              (F = F.length && new RegExp(F.join("|"))),
              (t = ve.test(P.compareDocumentPosition)),
              (H =
                t || ve.test(P.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (z = t
                ? function (e, t) {
                    if (e === t) return (D = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n
                      ? n
                      : ((n =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1),
                        1 & n ||
                        (!w.sortDetached && t.compareDocumentPosition(e) === n)
                          ? e === r || (e.ownerDocument === I && H(I, e))
                            ? -1
                            : t === r || (t.ownerDocument === I && H(I, t))
                            ? 1
                            : A
                            ? ee(A, e) - ee(A, t)
                            : 0
                          : 4 & n
                          ? -1
                          : 1);
                  }
                : function (e, t) {
                    if (e === t) return (D = !0), 0;
                    var n,
                      i = 0,
                      o = e.parentNode,
                      s = t.parentNode,
                      u = [e],
                      c = [t];
                    if (!o || !s)
                      return e === r
                        ? -1
                        : t === r
                        ? 1
                        : o
                        ? -1
                        : s
                        ? 1
                        : A
                        ? ee(A, e) - ee(A, t)
                        : 0;
                    if (o === s) return a(e, t);
                    for (n = e; (n = n.parentNode); ) u.unshift(n);
                    for (n = t; (n = n.parentNode); ) c.unshift(n);
                    for (; u[i] === c[i]; ) i++;
                    return i
                      ? a(u[i], c[i])
                      : u[i] === I
                      ? -1
                      : c[i] === I
                      ? 1
                      : 0;
                  }),
              r)
            : O;
        }),
        (t.matches = function (e, n) {
          return t(e, null, null, n);
        }),
        (t.matchesSelector = function (e, n) {
          if (
            ((e.ownerDocument || e) !== O && L(e),
            (n = n.replace(fe, "='$1']")),
            !(!w.matchesSelector || !q || (F && F.test(n)) || (B && B.test(n))))
          )
            try {
              var r = R.call(e, n);
              if (
                r ||
                w.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return r;
            } catch (i) {}
          return t(n, O, null, [e]).length > 0;
        }),
        (t.contains = function (e, t) {
          return (e.ownerDocument || e) !== O && L(e), H(e, t);
        }),
        (t.attr = function (e, t) {
          (e.ownerDocument || e) !== O && L(e);
          var n = C.attrHandle[t.toLowerCase()],
            r =
              n && V.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
          return void 0 !== r
            ? r
            : w.attributes || !q
            ? e.getAttribute(t)
            : (r = e.getAttributeNode(t)) && r.specified
            ? r.value
            : null;
        }),
        (t.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (t.uniqueSort = function (e) {
          var t,
            n = [],
            r = 0,
            i = 0;
          if (
            ((D = !w.detectDuplicates),
            (A = !w.sortStable && e.slice(0)),
            e.sort(z),
            D)
          ) {
            for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
            for (; r--; ) e.splice(n[r], 1);
          }
          return (A = null), e;
        }),
        (T = t.getText = function (e) {
          var t,
            n = "",
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else for (; (t = e[r++]); ) n += T(t);
          return n;
        }),
        (C = t.selectors = {
          cacheLength: 50,
          createPseudo: r,
          match: he,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(we, Ce)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(we, Ce)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || t.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && t.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return he.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      de.test(n) &&
                      (t = N(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(we, Ce).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = $[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
                  $(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        ("undefined" != typeof e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, n, r) {
              return function (i) {
                var o = t.attr(i, e);
                return null == o
                  ? "!=" === n
                  : n
                  ? ((o += ""),
                    "=" === n
                      ? o === r
                      : "!=" === n
                      ? o !== r
                      : "^=" === n
                      ? r && 0 === o.indexOf(r)
                      : "*=" === n
                      ? r && o.indexOf(r) > -1
                      : "$=" === n
                      ? r && o.slice(-r.length) === r
                      : "~=" === n
                      ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1
                      : "|=" === n
                      ? o === r || o.slice(0, r.length + 1) === r + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                s = "of-type" === t;
              return 1 === r && 0 === i
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, u) {
                    var c,
                      l,
                      f,
                      d,
                      p,
                      h,
                      g = o !== a ? "nextSibling" : "previousSibling",
                      m = t.parentNode,
                      v = s && t.nodeName.toLowerCase(),
                      y = !u && !s;
                    if (m) {
                      if (o) {
                        for (; g; ) {
                          for (f = t; (f = f[g]); )
                            if (
                              s
                                ? f.nodeName.toLowerCase() === v
                                : 1 === f.nodeType
                            )
                              return !1;
                          h = g = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [a ? m.firstChild : m.lastChild]), a && y)) {
                        for (
                          l = m[_] || (m[_] = {}),
                            c = l[e] || [],
                            p = c[0] === M && c[1],
                            d = c[0] === M && c[2],
                            f = p && m.childNodes[p];
                          (f = (++p && f && f[g]) || (d = p = 0) || h.pop());

                        )
                          if (1 === f.nodeType && ++d && f === t) {
                            l[e] = [M, p, d];
                            break;
                          }
                      } else if (
                        y &&
                        (c = (t[_] || (t[_] = {}))[e]) &&
                        c[0] === M
                      )
                        d = c[1];
                      else
                        for (
                          ;
                          (f = (++p && f && f[g]) || (d = p = 0) || h.pop()) &&
                          ((s
                            ? f.nodeName.toLowerCase() !== v
                            : 1 !== f.nodeType) ||
                            !++d ||
                            (y && ((f[_] || (f[_] = {}))[e] = [M, d]),
                            f !== t));

                        );
                      return (d -= i), d === r || (d % r === 0 && d / r >= 0);
                    }
                  };
            },
            PSEUDO: function (e, n) {
              var i,
                o =
                  C.pseudos[e] ||
                  C.setFilters[e.toLowerCase()] ||
                  t.error("unsupported pseudo: " + e);
              return o[_]
                ? o(n)
                : o.length > 1
                ? ((i = [e, e, "", n]),
                  C.setFilters.hasOwnProperty(e.toLowerCase())
                    ? r(function (e, t) {
                        for (var r, i = o(e, n), a = i.length; a--; )
                          (r = ee(e, i[a])), (e[r] = !(t[r] = i[a]));
                      })
                    : function (e) {
                        return o(e, 0, i);
                      })
                : o;
            },
          },
          pseudos: {
            not: r(function (e) {
              var t = [],
                n = [],
                i = S(e.replace(ue, "$1"));
              return i[_]
                ? r(function (e, t, n, r) {
                    for (var o, a = i(e, null, r, []), s = e.length; s--; )
                      (o = a[s]) && (e[s] = !(t[s] = o));
                  })
                : function (e, r, o) {
                    return (
                      (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: r(function (e) {
              return function (n) {
                return t(e, n).length > 0;
              };
            }),
            contains: r(function (e) {
              return (
                (e = e.replace(we, Ce)),
                function (t) {
                  return (t.textContent || t.innerText || T(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: r(function (e) {
              return (
                pe.test(e || "") || t.error("unsupported lang: " + e),
                (e = e.replace(we, Ce).toLowerCase()),
                function (t) {
                  var n;
                  do
                    if (
                      (n = q
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()),
                        n === e || 0 === n.indexOf(e + "-")
                      );
                  while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === P;
            },
            focus: function (e) {
              return (
                e === O.activeElement &&
                (!O.hasFocus || O.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: function (e) {
              return e.disabled === !1;
            },
            disabled: function (e) {
              return e.disabled === !0;
            },
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, e.selected === !0
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !C.pseudos.empty(e);
            },
            header: function (e) {
              return me.test(e.nodeName);
            },
            input: function (e) {
              return ge.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: c(function () {
              return [0];
            }),
            last: c(function (e, t) {
              return [t - 1];
            }),
            eq: c(function (e, t, n) {
              return [0 > n ? n + t : n];
            }),
            even: c(function (e, t) {
              for (var n = 0; t > n; n += 2) e.push(n);
              return e;
            }),
            odd: c(function (e, t) {
              for (var n = 1; t > n; n += 2) e.push(n);
              return e;
            }),
            lt: c(function (e, t, n) {
              for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: c(function (e, t, n) {
              for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }),
        (C.pseudos.nth = C.pseudos.eq);
      for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        C.pseudos[x] = s(x);
      for (x in { submit: !0, reset: !0 }) C.pseudos[x] = u(x);
      return (
        (f.prototype = C.filters = C.pseudos),
        (C.setFilters = new f()),
        (N = t.tokenize = function (e, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            c,
            l = X[e + " "];
          if (l) return n ? 0 : l.slice(0);
          for (s = e, u = [], c = C.preFilter; s; ) {
            (!r || (i = ce.exec(s))) &&
              (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
              (r = !1),
              (i = le.exec(s)) &&
                ((r = i.shift()),
                o.push({ value: r, type: i[0].replace(ue, " ") }),
                (s = s.slice(r.length)));
            for (a in C.filter)
              !(i = he[a].exec(s)) ||
                (c[a] && !(i = c[a](i))) ||
                ((r = i.shift()),
                o.push({ value: r, type: a, matches: i }),
                (s = s.slice(r.length)));
            if (!r) break;
          }
          return n ? s.length : s ? t.error(e) : X(e, u).slice(0);
        }),
        (S = t.compile = function (e, t) {
          var n,
            r = [],
            i = [],
            o = U[e + " "];
          if (!o) {
            for (t || (t = N(e)), n = t.length; n--; )
              (o = y(t[n])), o[_] ? r.push(o) : i.push(o);
            (o = U(e, b(i, r))), (o.selector = e);
          }
          return o;
        }),
        (E = t.select = function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            c = "function" == typeof e && e,
            f = !r && N((e = c.selector || e));
          if (((n = n || []), 1 === f.length)) {
            if (
              ((o = f[0] = f[0].slice(0)),
              o.length > 2 &&
                "ID" === (a = o[0]).type &&
                w.getById &&
                9 === t.nodeType &&
                q &&
                C.relative[o[1].type])
            ) {
              if (
                ((t = (C.find.ID(a.matches[0].replace(we, Ce), t) || [])[0]),
                !t)
              )
                return n;
              c && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (
              i = he.needsContext.test(e) ? 0 : o.length;
              i-- && ((a = o[i]), !C.relative[(s = a.type)]);

            )
              if (
                (u = C.find[s]) &&
                (r = u(
                  a.matches[0].replace(we, Ce),
                  (be.test(o[0].type) && l(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), (e = r.length && d(o)), !e))
                  return K.apply(n, r), n;
                break;
              }
          }
          return (
            (c || S(e, f))(r, t, !q, n, (be.test(e) && l(t.parentNode)) || t), n
          );
        }),
        (w.sortStable = _.split("").sort(z).join("") === _),
        (w.detectDuplicates = !!D),
        L(),
        (w.sortDetached = i(function (e) {
          return 1 & e.compareDocumentPosition(O.createElement("div"));
        })),
        i(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          o("type|href|height|width", function (e, t, n) {
            return n
              ? void 0
              : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (w.attributes &&
          i(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          o("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase()
              ? void 0
              : e.defaultValue;
          }),
        i(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          o(te, function (e, t, n) {
            var r;
            return n
              ? void 0
              : e[t] === !0
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
          }),
        t
      );
    })(e);
    (z.find = Q),
      (z.expr = Q.selectors),
      (z.expr[":"] = z.expr.pseudos),
      (z.unique = Q.uniqueSort),
      (z.text = Q.getText),
      (z.isXMLDoc = Q.isXML),
      (z.contains = Q.contains);
    var K = z.expr.match.needsContext,
      Z = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      ee = /^.[^:#\[\.,]*$/;
    (z.filter = function (e, t, n) {
      var r = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType
          ? z.find.matchesSelector(r, e)
            ? [r]
            : []
          : z.find.matches(
              e,
              z.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      z.fn.extend({
        find: function (e) {
          var t,
            n = this.length,
            r = [],
            i = this;
          if ("string" != typeof e)
            return this.pushStack(
              z(e).filter(function () {
                for (t = 0; n > t; t++) if (z.contains(i[t], this)) return !0;
              })
            );
          for (t = 0; n > t; t++) z.find(e, i[t], r);
          return (
            (r = this.pushStack(n > 1 ? z.unique(r) : r)),
            (r.selector = this.selector ? this.selector + " " + e : e),
            r
          );
        },
        filter: function (e) {
          return this.pushStack(r(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(r(this, e || [], !0));
        },
        is: function (e) {
          return !!r(
            this,
            "string" == typeof e && K.test(e) ? z(e) : e || [],
            !1
          ).length;
        },
      });
    var te,
      ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      re = (z.fn.init = function (e, t) {
        var n, r;
        if (!e) return this;
        if ("string" == typeof e) {
          if (
            ((n =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : ne.exec(e)),
            !n || (!n[1] && t))
          )
            return !t || t.jquery
              ? (t || te).find(e)
              : this.constructor(t).find(e);
          if (n[1]) {
            if (
              ((t = t instanceof z ? t[0] : t),
              z.merge(
                this,
                z.parseHTML(
                  n[1],
                  t && t.nodeType ? t.ownerDocument || t : X,
                  !0
                )
              ),
              Z.test(n[1]) && z.isPlainObject(t))
            )
              for (n in t)
                z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this;
          }
          return (
            (r = X.getElementById(n[2])),
            r && r.parentNode && ((this.length = 1), (this[0] = r)),
            (this.context = X),
            (this.selector = e),
            this
          );
        }
        return e.nodeType
          ? ((this.context = this[0] = e), (this.length = 1), this)
          : z.isFunction(e)
          ? "undefined" != typeof te.ready
            ? te.ready(e)
            : e(z)
          : (void 0 !== e.selector &&
              ((this.selector = e.selector), (this.context = e.context)),
            z.makeArray(e, this));
      });
    (re.prototype = z.fn), (te = z(X));
    var ie = /^(?:parents|prev(?:Until|All))/,
      oe = { children: !0, contents: !0, next: !0, prev: !0 };
    z.extend({
      dir: function (e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (i && z(e).is(n)) break;
            r.push(e);
          }
        return r;
      },
      sibling: function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
    }),
      z.fn.extend({
        has: function (e) {
          var t = z(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; n > e; e++) if (z.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          for (
            var n,
              r = 0,
              i = this.length,
              o = [],
              a =
                K.test(e) || "string" != typeof e ? z(e, t || this.context) : 0;
            i > r;
            r++
          )
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (a
                  ? a.index(n) > -1
                  : 1 === n.nodeType && z.find.matchesSelector(n, e))
              ) {
                o.push(n);
                break;
              }
          return this.pushStack(o.length > 1 ? z.unique(o) : o);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? _.call(z(e), this[0])
              : _.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(z.unique(z.merge(this.get(), z(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
      z.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return z.dir(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return z.dir(e, "parentNode", n);
          },
          next: function (e) {
            return i(e, "nextSibling");
          },
          prev: function (e) {
            return i(e, "previousSibling");
          },
          nextAll: function (e) {
            return z.dir(e, "nextSibling");
          },
          prevAll: function (e) {
            return z.dir(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return z.dir(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return z.dir(e, "previousSibling", n);
          },
          siblings: function (e) {
            return z.sibling((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return z.sibling(e.firstChild);
          },
          contents: function (e) {
            return e.contentDocument || z.merge([], e.childNodes);
          },
        },
        function (e, t) {
          z.fn[e] = function (n, r) {
            var i = z.map(this, t, n);
            return (
              "Until" !== e.slice(-5) && (r = n),
              r && "string" == typeof r && (i = z.filter(r, i)),
              this.length > 1 &&
                (oe[e] || z.unique(i), ie.test(e) && i.reverse()),
              this.pushStack(i)
            );
          };
        }
      );
    var ae = /\S+/g,
      se = {};
    (z.Callbacks = function (e) {
      e = "string" == typeof e ? se[e] || o(e) : z.extend({}, e);
      var t,
        n,
        r,
        i,
        a,
        s,
        u = [],
        c = !e.once && [],
        l = function (o) {
          for (
            t = e.memory && o, n = !0, s = i || 0, i = 0, a = u.length, r = !0;
            u && a > s;
            s++
          )
            if (u[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
              t = !1;
              break;
            }
          (r = !1),
            u && (c ? c.length && l(c.shift()) : t ? (u = []) : f.disable());
        },
        f = {
          add: function () {
            if (u) {
              var n = u.length;
              !(function o(t) {
                z.each(t, function (t, n) {
                  var r = z.type(n);
                  "function" === r
                    ? (e.unique && f.has(n)) || u.push(n)
                    : n && n.length && "string" !== r && o(n);
                });
              })(arguments),
                r ? (a = u.length) : t && ((i = n), l(t));
            }
            return this;
          },
          remove: function () {
            return (
              u &&
                z.each(arguments, function (e, t) {
                  for (var n; (n = z.inArray(t, u, n)) > -1; )
                    u.splice(n, 1), r && (a >= n && a--, s >= n && s--);
                }),
              this
            );
          },
          has: function (e) {
            return e ? z.inArray(e, u) > -1 : !(!u || !u.length);
          },
          empty: function () {
            return (u = []), (a = 0), this;
          },
          disable: function () {
            return (u = c = t = void 0), this;
          },
          disabled: function () {
            return !u;
          },
          lock: function () {
            return (c = void 0), t || f.disable(), this;
          },
          locked: function () {
            return !c;
          },
          fireWith: function (e, t) {
            return (
              !u ||
                (n && !c) ||
                ((t = t || []),
                (t = [e, t.slice ? t.slice() : t]),
                r ? c.push(t) : l(t)),
              this
            );
          },
          fire: function () {
            return f.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!n;
          },
        };
      return f;
    }),
      z.extend({
        Deferred: function (e) {
          var t = [
              ["resolve", "done", z.Callbacks("once memory"), "resolved"],
              ["reject", "fail", z.Callbacks("once memory"), "rejected"],
              ["notify", "progress", z.Callbacks("memory")],
            ],
            n = "pending",
            r = {
              state: function () {
                return n;
              },
              always: function () {
                return i.done(arguments).fail(arguments), this;
              },
              then: function () {
                var e = arguments;
                return z
                  .Deferred(function (n) {
                    z.each(t, function (t, o) {
                      var a = z.isFunction(e[t]) && e[t];
                      i[o[1]](function () {
                        var e = a && a.apply(this, arguments);
                        e && z.isFunction(e.promise)
                          ? e
                              .promise()
                              .done(n.resolve)
                              .fail(n.reject)
                              .progress(n.notify)
                          : n[o[0] + "With"](
                              this === r ? n.promise() : this,
                              a ? [e] : arguments
                            );
                      });
                    }),
                      (e = null);
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? z.extend(e, r) : r;
              },
            },
            i = {};
          return (
            (r.pipe = r.then),
            z.each(t, function (e, o) {
              var a = o[2],
                s = o[3];
              (r[o[1]] = a.add),
                s &&
                  a.add(
                    function () {
                      n = s;
                    },
                    t[1 ^ e][2].disable,
                    t[2][2].lock
                  ),
                (i[o[0]] = function () {
                  return (
                    i[o[0] + "With"](this === i ? r : this, arguments), this
                  );
                }),
                (i[o[0] + "With"] = a.fireWith);
            }),
            r.promise(i),
            e && e.call(i, i),
            i
          );
        },
        when: function (e) {
          var t,
            n,
            r,
            i = 0,
            o = F.call(arguments),
            a = o.length,
            s = 1 !== a || (e && z.isFunction(e.promise)) ? a : 0,
            u = 1 === s ? e : z.Deferred(),
            c = function (e, n, r) {
              return function (i) {
                (n[e] = this),
                  (r[e] = arguments.length > 1 ? F.call(arguments) : i),
                  r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
              };
            };
          if (a > 1)
            for (
              t = new Array(a), n = new Array(a), r = new Array(a);
              a > i;
              i++
            )
              o[i] && z.isFunction(o[i].promise)
                ? o[i]
                    .promise()
                    .done(c(i, r, o))
                    .fail(u.reject)
                    .progress(c(i, n, t))
                : --s;
          return s || u.resolveWith(r, o), u.promise();
        },
      });
    var ue;
    (z.fn.ready = function (e) {
      return z.ready.promise().done(e), this;
    }),
      z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
          e ? z.readyWait++ : z.ready(!0);
        },
        ready: function (e) {
          (e === !0 ? --z.readyWait : z.isReady) ||
            ((z.isReady = !0),
            (e !== !0 && --z.readyWait > 0) ||
              (ue.resolveWith(X, [z]),
              z.fn.triggerHandler &&
                (z(X).triggerHandler("ready"), z(X).off("ready"))));
        },
      }),
      (z.ready.promise = function (t) {
        return (
          ue ||
            ((ue = z.Deferred()),
            "complete" === X.readyState
              ? setTimeout(z.ready)
              : (X.addEventListener("DOMContentLoaded", a, !1),
                e.addEventListener("load", a, !1))),
          ue.promise(t)
        );
      }),
      z.ready.promise();
    var ce = (z.access = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        c = null == n;
      if ("object" === z.type(n)) {
        i = !0;
        for (s in n) z.access(e, t, s, n[s], !0, o, a);
      } else if (
        void 0 !== r &&
        ((i = !0),
        z.isFunction(r) || (a = !0),
        c &&
          (a
            ? (t.call(e, r), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(z(e), n);
              }))),
        t)
      )
        for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : c ? t.call(e) : u ? t(e[0], n) : o;
    });
    (z.acceptData = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }),
      (s.uid = 1),
      (s.accepts = z.acceptData),
      (s.prototype = {
        key: function (e) {
          if (!s.accepts(e)) return 0;
          var t = {},
            n = e[this.expando];
          if (!n) {
            n = s.uid++;
            try {
              (t[this.expando] = { value: n }), Object.defineProperties(e, t);
            } catch (r) {
              (t[this.expando] = n), z.extend(e, t);
            }
          }
          return this.cache[n] || (this.cache[n] = {}), n;
        },
        set: function (e, t, n) {
          var r,
            i = this.key(e),
            o = this.cache[i];
          if ("string" == typeof t) o[t] = n;
          else if (z.isEmptyObject(o)) z.extend(this.cache[i], t);
          else for (r in t) o[r] = t[r];
          return o;
        },
        get: function (e, t) {
          var n = this.cache[this.key(e)];
          return void 0 === t ? n : n[t];
        },
        access: function (e, t, n) {
          var r;
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? ((r = this.get(e, t)),
              void 0 !== r ? r : this.get(e, z.camelCase(t)))
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            r,
            i,
            o = this.key(e),
            a = this.cache[o];
          if (void 0 === t) this.cache[o] = {};
          else {
            z.isArray(t)
              ? (r = t.concat(t.map(z.camelCase)))
              : ((i = z.camelCase(t)),
                t in a
                  ? (r = [t, i])
                  : ((r = i), (r = r in a ? [r] : r.match(ae) || []))),
              (n = r.length);
            for (; n--; ) delete a[r[n]];
          }
        },
        hasData: function (e) {
          return !z.isEmptyObject(this.cache[e[this.expando]] || {});
        },
        discard: function (e) {
          e[this.expando] && delete this.cache[e[this.expando]];
        },
      });
    var le = new s(),
      fe = new s(),
      de = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      pe = /([A-Z])/g;
    z.extend({
      hasData: function (e) {
        return fe.hasData(e) || le.hasData(e);
      },
      data: function (e, t, n) {
        return fe.access(e, t, n);
      },
      removeData: function (e, t) {
        fe.remove(e, t);
      },
      _data: function (e, t, n) {
        return le.access(e, t, n);
      },
      _removeData: function (e, t) {
        le.remove(e, t);
      },
    }),
      z.fn.extend({
        data: function (e, t) {
          var n,
            r,
            i,
            o = this[0],
            a = o && o.attributes;
          if (void 0 === e) {
            if (
              this.length &&
              ((i = fe.get(o)), 1 === o.nodeType && !le.get(o, "hasDataAttrs"))
            ) {
              for (n = a.length; n--; )
                a[n] &&
                  ((r = a[n].name),
                  0 === r.indexOf("data-") &&
                    ((r = z.camelCase(r.slice(5))), u(o, r, i[r])));
              le.set(o, "hasDataAttrs", !0);
            }
            return i;
          }
          return "object" == typeof e
            ? this.each(function () {
                fe.set(this, e);
              })
            : ce(
                this,
                function (t) {
                  var n,
                    r = z.camelCase(e);
                  if (o && void 0 === t) {
                    if (((n = fe.get(o, e)), void 0 !== n)) return n;
                    if (((n = fe.get(o, r)), void 0 !== n)) return n;
                    if (((n = u(o, r, void 0)), void 0 !== n)) return n;
                  } else
                    this.each(function () {
                      var n = fe.get(this, r);
                      fe.set(this, r, t),
                        -1 !== e.indexOf("-") &&
                          void 0 !== n &&
                          fe.set(this, e, t);
                    });
                },
                null,
                t,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (e) {
          return this.each(function () {
            fe.remove(this, e);
          });
        },
      }),
      z.extend({
        queue: function (e, t, n) {
          var r;
          return e
            ? ((t = (t || "fx") + "queue"),
              (r = le.get(e, t)),
              n &&
                (!r || z.isArray(n)
                  ? (r = le.access(e, t, z.makeArray(n)))
                  : r.push(n)),
              r || [])
            : void 0;
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = z.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = z._queueHooks(e, t),
            a = function () {
              z.dequeue(e, t);
            };
          "inprogress" === i && ((i = n.shift()), r--),
            i &&
              ("fx" === t && n.unshift("inprogress"),
              delete o.stop,
              i.call(e, a, o)),
            !r && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            le.get(e, n) ||
            le.access(e, n, {
              empty: z.Callbacks("once memory").add(function () {
                le.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      z.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return (
            "string" != typeof e && ((t = e), (e = "fx"), n--),
            arguments.length < n
              ? z.queue(this[0], e)
              : void 0 === t
              ? this
              : this.each(function () {
                  var n = z.queue(this, e, t);
                  z._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && z.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            z.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            r = 1,
            i = z.Deferred(),
            o = this,
            a = this.length,
            s = function () {
              --r || i.resolveWith(o, [o]);
            };
          for (
            "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
            a--;

          )
            (n = le.get(o[a], e + "queueHooks")),
              n && n.empty && (r++, n.empty.add(s));
          return s(), i.promise(t);
        },
      });
    var he = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ge = ["Top", "Right", "Bottom", "Left"],
      me = function (e, t) {
        return (
          (e = t || e),
          "none" === z.css(e, "display") || !z.contains(e.ownerDocument, e)
        );
      },
      ve = /^(?:checkbox|radio)$/i;
    !(function () {
      var e = X.createDocumentFragment(),
        t = e.appendChild(X.createElement("div")),
        n = X.createElement("input");
      n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        ($.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (t.innerHTML = "<textarea>x</textarea>"),
        ($.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
    })();
    var ye = "undefined";
    $.focusinBubbles = "onfocusin" in e;
    var be = /^key/,
      xe = /^(?:mouse|pointer|contextmenu)|click/,
      we = /^(?:focusinfocus|focusoutblur)$/,
      Ce = /^([^.]*)(?:\.(.+)|)$/;
    (z.event = {
      global: {},
      add: function (e, t, n, r, i) {
        var o,
          a,
          s,
          u,
          c,
          l,
          f,
          d,
          p,
          h,
          g,
          m = le.get(e);
        if (m)
          for (
            n.handler && ((o = n), (n = o.handler), (i = o.selector)),
              n.guid || (n.guid = z.guid++),
              (u = m.events) || (u = m.events = {}),
              (a = m.handle) ||
                (a = m.handle = function (t) {
                  return typeof z !== ye && z.event.triggered !== t.type
                    ? z.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
              t = (t || "").match(ae) || [""],
              c = t.length;
            c--;

          )
            (s = Ce.exec(t[c]) || []),
              (p = g = s[1]),
              (h = (s[2] || "").split(".").sort()),
              p &&
                ((f = z.event.special[p] || {}),
                (p = (i ? f.delegateType : f.bindType) || p),
                (f = z.event.special[p] || {}),
                (l = z.extend(
                  {
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && z.expr.match.needsContext.test(i),
                    namespace: h.join("."),
                  },
                  o
                )),
                (d = u[p]) ||
                  ((d = u[p] = []),
                  (d.delegateCount = 0),
                  (f.setup && f.setup.call(e, r, h, a) !== !1) ||
                    (e.addEventListener && e.addEventListener(p, a, !1))),
                f.add &&
                  (f.add.call(e, l),
                  l.handler.guid || (l.handler.guid = n.guid)),
                i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                (z.event.global[p] = !0));
      },
      remove: function (e, t, n, r, i) {
        var o,
          a,
          s,
          u,
          c,
          l,
          f,
          d,
          p,
          h,
          g,
          m = le.hasData(e) && le.get(e);
        if (m && (u = m.events)) {
          for (t = (t || "").match(ae) || [""], c = t.length; c--; )
            if (
              ((s = Ce.exec(t[c]) || []),
              (p = g = s[1]),
              (h = (s[2] || "").split(".").sort()),
              p)
            ) {
              for (
                f = z.event.special[p] || {},
                  p = (r ? f.delegateType : f.bindType) || p,
                  d = u[p] || [],
                  s =
                    s[2] &&
                    new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  a = o = d.length;
                o--;

              )
                (l = d[o]),
                  (!i && g !== l.origType) ||
                    (n && n.guid !== l.guid) ||
                    (s && !s.test(l.namespace)) ||
                    (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                    (d.splice(o, 1),
                    l.selector && d.delegateCount--,
                    f.remove && f.remove.call(e, l));
              a &&
                !d.length &&
                ((f.teardown && f.teardown.call(e, h, m.handle) !== !1) ||
                  z.removeEvent(e, p, m.handle),
                delete u[p]);
            } else for (p in u) z.event.remove(e, p + t[c], n, r, !0);
          z.isEmptyObject(u) && (delete m.handle, le.remove(e, "events"));
        }
      },
      trigger: function (t, n, r, i) {
        var o,
          a,
          s,
          u,
          c,
          l,
          f,
          d = [r || X],
          p = W.call(t, "type") ? t.type : t,
          h = W.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((a = s = r = r || X),
          3 !== r.nodeType &&
            8 !== r.nodeType &&
            !we.test(p + z.event.triggered) &&
            (p.indexOf(".") >= 0 &&
              ((h = p.split(".")), (p = h.shift()), h.sort()),
            (c = p.indexOf(":") < 0 && "on" + p),
            (t = t[z.expando] ? t : new z.Event(p, "object" == typeof t && t)),
            (t.isTrigger = i ? 2 : 3),
            (t.namespace = h.join(".")),
            (t.namespace_re = t.namespace
              ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = void 0),
            t.target || (t.target = r),
            (n = null == n ? [t] : z.makeArray(n, [t])),
            (f = z.event.special[p] || {}),
            i || !f.trigger || f.trigger.apply(r, n) !== !1))
        ) {
          if (!i && !f.noBubble && !z.isWindow(r)) {
            for (
              u = f.delegateType || p, we.test(u + p) || (a = a.parentNode);
              a;
              a = a.parentNode
            )
              d.push(a), (s = a);
            s === (r.ownerDocument || X) &&
              d.push(s.defaultView || s.parentWindow || e);
          }
          for (o = 0; (a = d[o++]) && !t.isPropagationStopped(); )
            (t.type = o > 1 ? u : f.bindType || p),
              (l = (le.get(a, "events") || {})[t.type] && le.get(a, "handle")),
              l && l.apply(a, n),
              (l = c && a[c]),
              l &&
                l.apply &&
                z.acceptData(a) &&
                ((t.result = l.apply(a, n)),
                t.result === !1 && t.preventDefault());
          return (
            (t.type = p),
            i ||
              t.isDefaultPrevented() ||
              (f._default && f._default.apply(d.pop(), n) !== !1) ||
              !z.acceptData(r) ||
              (c &&
                z.isFunction(r[p]) &&
                !z.isWindow(r) &&
                ((s = r[c]),
                s && (r[c] = null),
                (z.event.triggered = p),
                r[p](),
                (z.event.triggered = void 0),
                s && (r[c] = s))),
            t.result
          );
        }
      },
      dispatch: function (e) {
        e = z.event.fix(e);
        var t,
          n,
          r,
          i,
          o,
          a = [],
          s = F.call(arguments),
          u = (le.get(this, "events") || {})[e.type] || [],
          c = z.event.special[e.type] || {};
        if (
          ((s[0] = e),
          (e.delegateTarget = this),
          !c.preDispatch || c.preDispatch.call(this, e) !== !1)
        ) {
          for (
            a = z.event.handlers.call(this, e, u), t = 0;
            (i = a[t++]) && !e.isPropagationStopped();

          )
            for (
              e.currentTarget = i.elem, n = 0;
              (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();

            )
              (!e.namespace_re || e.namespace_re.test(o.namespace)) &&
                ((e.handleObj = o),
                (e.data = o.data),
                (r = (
                  (z.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)),
                void 0 !== r &&
                  (e.result = r) === !1 &&
                  (e.preventDefault(), e.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, e), e.result;
        }
      },
      handlers: function (e, t) {
        var n,
          r,
          i,
          o,
          a = [],
          s = t.delegateCount,
          u = e.target;
        if (s && u.nodeType && (!e.button || "click" !== e.type))
          for (; u !== this; u = u.parentNode || this)
            if (u.disabled !== !0 || "click" !== e.type) {
              for (r = [], n = 0; s > n; n++)
                (o = t[n]),
                  (i = o.selector + " "),
                  void 0 === r[i] &&
                    (r[i] = o.needsContext
                      ? z(i, this).index(u) >= 0
                      : z.find(i, this, null, [u]).length),
                  r[i] && r.push(o);
              r.length && a.push({ elem: u, handlers: r });
            }
        return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (e, t) {
          return (
            null == e.which &&
              (e.which = null != t.charCode ? t.charCode : t.keyCode),
            e
          );
        },
      },
      mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
        filter: function (e, t) {
          var n,
            r,
            i,
            o = t.button;
          return (
            null == e.pageX &&
              null != t.clientX &&
              ((n = e.target.ownerDocument || X),
              (r = n.documentElement),
              (i = n.body),
              (e.pageX =
                t.clientX +
                ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) -
                ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
              (e.pageY =
                t.clientY +
                ((r && r.scrollTop) || (i && i.scrollTop) || 0) -
                ((r && r.clientTop) || (i && i.clientTop) || 0))),
            e.which ||
              void 0 === o ||
              (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
            e
          );
        },
      },
      fix: function (e) {
        if (e[z.expando]) return e;
        var t,
          n,
          r,
          i = e.type,
          o = e,
          a = this.fixHooks[i];
        for (
          a ||
            (this.fixHooks[i] = a = xe.test(i)
              ? this.mouseHooks
              : be.test(i)
              ? this.keyHooks
              : {}),
            r = a.props ? this.props.concat(a.props) : this.props,
            e = new z.Event(o),
            t = r.length;
          t--;

        )
          (n = r[t]), (e[n] = o[n]);
        return (
          e.target || (e.target = X),
          3 === e.target.nodeType && (e.target = e.target.parentNode),
          a.filter ? a.filter(e, o) : e
        );
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            return this !== f() && this.focus ? (this.focus(), !1) : void 0;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === f() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return "checkbox" === this.type &&
              this.click &&
              z.nodeName(this, "input")
              ? (this.click(), !1)
              : void 0;
          },
          _default: function (e) {
            return z.nodeName(e.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
      simulate: function (e, t, n, r) {
        var i = z.extend(new z.Event(), n, {
          type: e,
          isSimulated: !0,
          originalEvent: {},
        });
        r ? z.event.trigger(i, null, t) : z.event.dispatch.call(t, i),
          i.isDefaultPrevented() && n.preventDefault();
      },
    }),
      (z.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
      }),
      (z.Event = function (e, t) {
        return this instanceof z.Event
          ? (e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && e.returnValue === !1)
                    ? c
                    : l))
              : (this.type = e),
            t && z.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || z.now()),
            void (this[z.expando] = !0))
          : new z.Event(e, t);
      }),
      (z.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = c),
            e && e.preventDefault && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = c),
            e && e.stopPropagation && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = c),
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      z.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, t) {
          z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              var n,
                r = this,
                i = e.relatedTarget,
                o = e.handleObj;
              return (
                (!i || (i !== r && !z.contains(r, i))) &&
                  ((e.type = o.origType),
                  (n = o.handler.apply(this, arguments)),
                  (e.type = t)),
                n
              );
            },
          };
        }
      ),
      $.focusinBubbles ||
        z.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          var n = function (e) {
            z.event.simulate(t, e.target, z.event.fix(e), !0);
          };
          z.event.special[t] = {
            setup: function () {
              var r = this.ownerDocument || this,
                i = le.access(r, t);
              i || r.addEventListener(e, n, !0), le.access(r, t, (i || 0) + 1);
            },
            teardown: function () {
              var r = this.ownerDocument || this,
                i = le.access(r, t) - 1;
              i
                ? le.access(r, t, i)
                : (r.removeEventListener(e, n, !0), le.remove(r, t));
            },
          };
        }),
      z.fn.extend({
        on: function (e, t, n, r, i) {
          var o, a;
          if ("object" == typeof e) {
            "string" != typeof t && ((n = n || t), (t = void 0));
            for (a in e) this.on(a, t, n, e[a], i);
            return this;
          }
          if (
            (null == n && null == r
              ? ((r = t), (n = t = void 0))
              : null == r &&
                ("string" == typeof t
                  ? ((r = n), (n = void 0))
                  : ((r = n), (n = t), (t = void 0))),
            r === !1)
          )
            r = l;
          else if (!r) return this;
          return (
            1 === i &&
              ((o = r),
              (r = function (e) {
                return z().off(e), o.apply(this, arguments);
              }),
              (r.guid = o.guid || (o.guid = z.guid++))),
            this.each(function () {
              z.event.add(this, e, r, n, t);
            })
          );
        },
        one: function (e, t, n, r) {
          return this.on(e, t, n, r, 1);
        },
        off: function (e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj)
            return (
              (r = e.handleObj),
              z(e.delegateTarget).off(
                r.namespace ? r.origType + "." + r.namespace : r.origType,
                r.selector,
                r.handler
              ),
              this
            );
          if ("object" == typeof e) {
            for (i in e) this.off(i, t, e[i]);
            return this;
          }
          return (
            (t === !1 || "function" == typeof t) && ((n = t), (t = void 0)),
            n === !1 && (n = l),
            this.each(function () {
              z.event.remove(this, e, n, t);
            })
          );
        },
        trigger: function (e, t) {
          return this.each(function () {
            z.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          return n ? z.event.trigger(e, t, n, !0) : void 0;
        },
      });
    var Te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      ke = /<([\w:]+)/,
      Ne = /<|&#?\w+;/,
      Se = /<(?:script|style|link)/i,
      Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
      je = /^$|\/(?:java|ecma)script/i,
      Ae = /^true\/(.*)/,
      De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Le = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    (Le.optgroup = Le.option),
      (Le.tbody = Le.tfoot = Le.colgroup = Le.caption = Le.thead),
      (Le.th = Le.td),
      z.extend({
        clone: function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.cloneNode(!0),
            u = z.contains(e.ownerDocument, e);
          if (
            !(
              $.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              z.isXMLDoc(e)
            )
          )
            for (a = v(s), o = v(e), r = 0, i = o.length; i > r; r++)
              y(o[r], a[r]);
          if (t)
            if (n)
              for (
                o = o || v(e), a = a || v(s), r = 0, i = o.length;
                i > r;
                r++
              )
                m(o[r], a[r]);
            else m(e, s);
          return (
            (a = v(s, "script")), a.length > 0 && g(a, !u && v(e, "script")), s
          );
        },
        buildFragment: function (e, t, n, r) {
          for (
            var i,
              o,
              a,
              s,
              u,
              c,
              l = t.createDocumentFragment(),
              f = [],
              d = 0,
              p = e.length;
            p > d;
            d++
          )
            if (((i = e[d]), i || 0 === i))
              if ("object" === z.type(i)) z.merge(f, i.nodeType ? [i] : i);
              else if (Ne.test(i)) {
                for (
                  o = o || l.appendChild(t.createElement("div")),
                    a = (ke.exec(i) || ["", ""])[1].toLowerCase(),
                    s = Le[a] || Le._default,
                    o.innerHTML = s[1] + i.replace(Te, "<$1></$2>") + s[2],
                    c = s[0];
                  c--;

                )
                  o = o.lastChild;
                z.merge(f, o.childNodes),
                  (o = l.firstChild),
                  (o.textContent = "");
              } else f.push(t.createTextNode(i));
          for (l.textContent = "", d = 0; (i = f[d++]); )
            if (
              (!r || -1 === z.inArray(i, r)) &&
              ((u = z.contains(i.ownerDocument, i)),
              (o = v(l.appendChild(i), "script")),
              u && g(o),
              n)
            )
              for (c = 0; (i = o[c++]); ) je.test(i.type || "") && n.push(i);
          return l;
        },
        cleanData: function (e) {
          for (
            var t, n, r, i, o = z.event.special, a = 0;
            void 0 !== (n = e[a]);
            a++
          ) {
            if (
              z.acceptData(n) &&
              ((i = n[le.expando]), i && (t = le.cache[i]))
            ) {
              if (t.events)
                for (r in t.events)
                  o[r] ? z.event.remove(n, r) : z.removeEvent(n, r, t.handle);
              le.cache[i] && delete le.cache[i];
            }
            delete fe.cache[n[fe.expando]];
          }
        },
      }),
      z.fn.extend({
        text: function (e) {
          return ce(
            this,
            function (e) {
              return void 0 === e
                ? z.text(this)
                : this.empty().each(function () {
                    (1 === this.nodeType ||
                      11 === this.nodeType ||
                      9 === this.nodeType) &&
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return this.domManip(arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = d(this, e);
              t.appendChild(e);
            }
          });
        },
        prepend: function () {
          return this.domManip(arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = d(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return this.domManip(arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        remove: function (e, t) {
          for (
            var n, r = e ? z.filter(e, this) : this, i = 0;
            null != (n = r[i]);
            i++
          )
            t || 1 !== n.nodeType || z.cleanData(v(n)),
              n.parentNode &&
                (t && z.contains(n.ownerDocument, n) && g(v(n, "script")),
                n.parentNode.removeChild(n));
          return this;
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (z.cleanData(v(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null == e ? !1 : e),
            (t = null == t ? e : t),
            this.map(function () {
              return z.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return ce(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                r = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !Se.test(e) &&
                !Le[(ke.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = e.replace(Te, "<$1></$2>");
                try {
                  for (; r > n; n++)
                    (t = this[n] || {}),
                      1 === t.nodeType &&
                        (z.cleanData(v(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (i) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var e = arguments[0];
          return (
            this.domManip(arguments, function (t) {
              (e = this.parentNode),
                z.cleanData(v(this)),
                e && e.replaceChild(t, this);
            }),
            e && (e.length || e.nodeType) ? this : this.remove()
          );
        },
        detach: function (e) {
          return this.remove(e, !0);
        },
        domManip: function (e, t) {
          e = R.apply([], e);
          var n,
            r,
            i,
            o,
            a,
            s,
            u = 0,
            c = this.length,
            l = this,
            f = c - 1,
            d = e[0],
            g = z.isFunction(d);
          if (
            g ||
            (c > 1 && "string" == typeof d && !$.checkClone && Ee.test(d))
          )
            return this.each(function (n) {
              var r = l.eq(n);
              g && (e[0] = d.call(this, n, r.html())), r.domManip(e, t);
            });
          if (
            c &&
            ((n = z.buildFragment(e, this[0].ownerDocument, !1, this)),
            (r = n.firstChild),
            1 === n.childNodes.length && (n = r),
            r)
          ) {
            for (i = z.map(v(n, "script"), p), o = i.length; c > u; u++)
              (a = n),
                u !== f &&
                  ((a = z.clone(a, !0, !0)), o && z.merge(i, v(a, "script"))),
                t.call(this[u], a, u);
            if (o)
              for (
                s = i[i.length - 1].ownerDocument, z.map(i, h), u = 0;
                o > u;
                u++
              )
                (a = i[u]),
                  je.test(a.type || "") &&
                    !le.access(a, "globalEval") &&
                    z.contains(s, a) &&
                    (a.src
                      ? z._evalUrl && z._evalUrl(a.src)
                      : z.globalEval(a.textContent.replace(De, "")));
          }
          return this;
        },
      }),
      z.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, t) {
          z.fn[e] = function (e) {
            for (var n, r = [], i = z(e), o = i.length - 1, a = 0; o >= a; a++)
              (n = a === o ? this : this.clone(!0)),
                z(i[a])[t](n),
                H.apply(r, n.get());
            return this.pushStack(r);
          };
        }
      );
    var Oe,
      Pe = {},
      qe = /^margin/,
      Be = new RegExp("^(" + he + ")(?!px)[a-z%]+$", "i"),
      Fe = function (t) {
        return t.ownerDocument.defaultView.opener
          ? t.ownerDocument.defaultView.getComputedStyle(t, null)
          : e.getComputedStyle(t, null);
      };
    !(function () {
      function t() {
        (a.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
          (a.innerHTML = ""),
          i.appendChild(o);
        var t = e.getComputedStyle(a, null);
        (n = "1%" !== t.top), (r = "4px" === t.width), i.removeChild(o);
      }
      var n,
        r,
        i = X.documentElement,
        o = X.createElement("div"),
        a = X.createElement("div");
      a.style &&
        ((a.style.backgroundClip = "content-box"),
        (a.cloneNode(!0).style.backgroundClip = ""),
        ($.clearCloneStyle = "content-box" === a.style.backgroundClip),
        (o.style.cssText =
          "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
        o.appendChild(a),
        e.getComputedStyle &&
          z.extend($, {
            pixelPosition: function () {
              return t(), n;
            },
            boxSizingReliable: function () {
              return null == r && t(), r;
            },
            reliableMarginRight: function () {
              var t,
                n = a.appendChild(X.createElement("div"));
              return (
                (n.style.cssText = a.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                (n.style.marginRight = n.style.width = "0"),
                (a.style.width = "1px"),
                i.appendChild(o),
                (t = !parseFloat(e.getComputedStyle(n, null).marginRight)),
                i.removeChild(o),
                a.removeChild(n),
                t
              );
            },
          }));
    })(),
      (z.swap = function (e, t, n, r) {
        var i,
          o,
          a = {};
        for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i;
      });
    var Re = /^(none|table(?!-c[ea]).+)/,
      He = new RegExp("^(" + he + ")(.*)$", "i"),
      _e = new RegExp("^([+-])=(" + he + ")", "i"),
      Ie = { position: "absolute", visibility: "hidden", display: "block" },
      Me = { letterSpacing: "0", fontWeight: "400" },
      We = ["Webkit", "O", "Moz", "ms"];
    z.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = w(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: "cssFloat" },
      style: function (e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i,
            o,
            a,
            s = z.camelCase(t),
            u = e.style;
          return (
            (t = z.cssProps[s] || (z.cssProps[s] = T(u, s))),
            (a = z.cssHooks[t] || z.cssHooks[s]),
            void 0 === n
              ? a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                ? i
                : u[t]
              : ((o = typeof n),
                "string" === o &&
                  (i = _e.exec(n)) &&
                  ((n = (i[1] + 1) * i[2] + parseFloat(z.css(e, t))),
                  (o = "number")),
                void (
                  null != n &&
                  n === n &&
                  ("number" !== o || z.cssNumber[s] || (n += "px"),
                  $.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (u[t] = "inherit"),
                  (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                    (u[t] = n))
                ))
          );
        }
      },
      css: function (e, t, n, r) {
        var i,
          o,
          a,
          s = z.camelCase(t);
        return (
          (t = z.cssProps[s] || (z.cssProps[s] = T(e.style, s))),
          (a = z.cssHooks[t] || z.cssHooks[s]),
          a && "get" in a && (i = a.get(e, !0, n)),
          void 0 === i && (i = w(e, t, r)),
          "normal" === i && t in Me && (i = Me[t]),
          "" === n || n
            ? ((o = parseFloat(i)), n === !0 || z.isNumeric(o) ? o || 0 : i)
            : i
        );
      },
    }),
      z.each(["height", "width"], function (e, t) {
        z.cssHooks[t] = {
          get: function (e, n, r) {
            return n
              ? Re.test(z.css(e, "display")) && 0 === e.offsetWidth
                ? z.swap(e, Ie, function () {
                    return S(e, t, r);
                  })
                : S(e, t, r)
              : void 0;
          },
          set: function (e, n, r) {
            var i = r && Fe(e);
            return k(
              e,
              n,
              r
                ? N(e, t, r, "border-box" === z.css(e, "boxSizing", !1, i), i)
                : 0
            );
          },
        };
      }),
      (z.cssHooks.marginRight = C($.reliableMarginRight, function (e, t) {
        return t
          ? z.swap(e, { display: "inline-block" }, w, [e, "marginRight"])
          : void 0;
      })),
      z.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        (z.cssHooks[e + t] = {
          expand: function (n) {
            for (
              var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
              4 > r;
              r++
            )
              i[e + ge[r] + t] = o[r] || o[r - 2] || o[0];
            return i;
          },
        }),
          qe.test(e) || (z.cssHooks[e + t].set = k);
      }),
      z.fn.extend({
        css: function (e, t) {
          return ce(
            this,
            function (e, t, n) {
              var r,
                i,
                o = {},
                a = 0;
              if (z.isArray(t)) {
                for (r = Fe(e), i = t.length; i > a; a++)
                  o[t[a]] = z.css(e, t[a], !1, r);
                return o;
              }
              return void 0 !== n ? z.style(e, t, n) : z.css(e, t);
            },
            e,
            t,
            arguments.length > 1
          );
        },
        show: function () {
          return E(this, !0);
        },
        hide: function () {
          return E(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                me(this) ? z(this).show() : z(this).hide();
              });
        },
      }),
      (z.fn.delay = function (e, t) {
        return (
          (e = z.fx ? z.fx.speeds[e] || e : e),
          (t = t || "fx"),
          this.queue(t, function (t, n) {
            var r = setTimeout(t, e);
            n.stop = function () {
              clearTimeout(r);
            };
          })
        );
      }),
      (function () {
        var e = X.createElement("input"),
          t = X.createElement("select"),
          n = t.appendChild(X.createElement("option"));
        (e.type = "checkbox"),
          ($.checkOn = "" !== e.value),
          ($.optSelected = n.selected),
          (t.disabled = !0),
          ($.optDisabled = !n.disabled),
          (e = X.createElement("input")),
          (e.value = "t"),
          (e.type = "radio"),
          ($.radioValue = "t" === e.value);
      })();
    var $e,
      Xe,
      Ue = z.expr.attrHandle;
    z.fn.extend({
      attr: function (e, t) {
        return ce(this, z.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          z.removeAttr(this, e);
        });
      },
    }),
      z.extend({
        attr: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          return e && 3 !== o && 8 !== o && 2 !== o
            ? typeof e.getAttribute === ye
              ? z.prop(e, t, n)
              : ((1 === o && z.isXMLDoc(e)) ||
                  ((t = t.toLowerCase()),
                  (r =
                    z.attrHooks[t] || (z.expr.match.bool.test(t) ? Xe : $e))),
                void 0 === n
                  ? r && "get" in r && null !== (i = r.get(e, t))
                    ? i
                    : ((i = z.find.attr(e, t)), null == i ? void 0 : i)
                  : null !== n
                  ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e.setAttribute(t, n + ""), n)
                  : void z.removeAttr(e, t))
            : void 0;
        },
        removeAttr: function (e, t) {
          var n,
            r,
            i = 0,
            o = t && t.match(ae);
          if (o && 1 === e.nodeType)
            for (; (n = o[i++]); )
              (r = z.propFix[n] || n),
                z.expr.match.bool.test(n) && (e[r] = !1),
                e.removeAttribute(n);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!$.radioValue && "radio" === t && z.nodeName(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
      }),
      (Xe = {
        set: function (e, t, n) {
          return t === !1 ? z.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      z.each(z.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Ue[t] || z.find.attr;
        Ue[t] = function (e, t, r) {
          var i, o;
          return (
            r ||
              ((o = Ue[t]),
              (Ue[t] = i),
              (i = null != n(e, t, r) ? t.toLowerCase() : null),
              (Ue[t] = o)),
            i
          );
        };
      });
    var ze = /^(?:input|select|textarea|button)$/i;
    z.fn.extend({
      prop: function (e, t) {
        return ce(this, z.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[z.propFix[e] || e];
        });
      },
    }),
      z.extend({
        propFix: { for: "htmlFor", class: "className" },
        prop: function (e, t, n) {
          var r,
            i,
            o,
            a = e.nodeType;
          return e && 3 !== a && 8 !== a && 2 !== a
            ? ((o = 1 !== a || !z.isXMLDoc(e)),
              o && ((t = z.propFix[t] || t), (i = z.propHooks[t])),
              void 0 !== n
                ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e[t] = n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : e[t])
            : void 0;
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              return e.hasAttribute("tabindex") || ze.test(e.nodeName) || e.href
                ? e.tabIndex
                : -1;
            },
          },
        },
      }),
      $.optSelected ||
        (z.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
        }),
      z.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          z.propFix[this.toLowerCase()] = this;
        }
      );
    var Je = /[\t\r\n\f]/g;
    z.fn.extend({
      addClass: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s = "string" == typeof e && e,
          u = 0,
          c = this.length;
        if (z.isFunction(e))
          return this.each(function (t) {
            z(this).addClass(e.call(this, t, this.className));
          });
        if (s)
          for (t = (e || "").match(ae) || []; c > u; u++)
            if (
              ((n = this[u]),
              (r =
                1 === n.nodeType &&
                (n.className
                  ? (" " + n.className + " ").replace(Je, " ")
                  : " ")))
            ) {
              for (o = 0; (i = t[o++]); )
                r.indexOf(" " + i + " ") < 0 && (r += i + " ");
              (a = z.trim(r)), n.className !== a && (n.className = a);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s = 0 === arguments.length || ("string" == typeof e && e),
          u = 0,
          c = this.length;
        if (z.isFunction(e))
          return this.each(function (t) {
            z(this).removeClass(e.call(this, t, this.className));
          });
        if (s)
          for (t = (e || "").match(ae) || []; c > u; u++)
            if (
              ((n = this[u]),
              (r =
                1 === n.nodeType &&
                (n.className
                  ? (" " + n.className + " ").replace(Je, " ")
                  : "")))
            ) {
              for (o = 0; (i = t[o++]); )
                for (; r.indexOf(" " + i + " ") >= 0; )
                  r = r.replace(" " + i + " ", " ");
              (a = e ? z.trim(r) : ""), n.className !== a && (n.className = a);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : z.isFunction(e)
          ? this.each(function (n) {
              z(this).toggleClass(e.call(this, n, this.className, t), t);
            })
          : this.each(function () {
              if ("string" === n)
                for (
                  var t, r = 0, i = z(this), o = e.match(ae) || [];
                  (t = o[r++]);

                )
                  i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
              else
                (n === ye || "boolean" === n) &&
                  (this.className &&
                    le.set(this, "__className__", this.className),
                  (this.className =
                    this.className || e === !1
                      ? ""
                      : le.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
          if (
            1 === this[n].nodeType &&
            (" " + this[n].className + " ").replace(Je, " ").indexOf(t) >= 0
          )
            return !0;
        return !1;
      },
    });
    var Ve = /\r/g;
    z.fn.extend({
      val: function (e) {
        var t,
          n,
          r,
          i = this[0];
        return arguments.length
          ? ((r = z.isFunction(e)),
            this.each(function (n) {
              var i;
              1 === this.nodeType &&
                ((i = r ? e.call(this, n, z(this).val()) : e),
                null == i
                  ? (i = "")
                  : "number" == typeof i
                  ? (i += "")
                  : z.isArray(i) &&
                    (i = z.map(i, function (e) {
                      return null == e ? "" : e + "";
                    })),
                (t =
                  z.valHooks[this.type] ||
                  z.valHooks[this.nodeName.toLowerCase()]),
                (t && "set" in t && void 0 !== t.set(this, i, "value")) ||
                  (this.value = i));
            }))
          : i
          ? ((t = z.valHooks[i.type] || z.valHooks[i.nodeName.toLowerCase()]),
            t && "get" in t && void 0 !== (n = t.get(i, "value"))
              ? n
              : ((n = i.value),
                "string" == typeof n ? n.replace(Ve, "") : null == n ? "" : n))
          : void 0;
      },
    }),
      z.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = z.find.attr(e, "value");
              return null != t ? t : z.trim(z.text(e));
            },
          },
          select: {
            get: function (e) {
              for (
                var t,
                  n,
                  r = e.options,
                  i = e.selectedIndex,
                  o = "select-one" === e.type || 0 > i,
                  a = o ? null : [],
                  s = o ? i + 1 : r.length,
                  u = 0 > i ? s : o ? i : 0;
                s > u;
                u++
              )
                if (
                  ((n = r[u]),
                  !(
                    (!n.selected && u !== i) ||
                    ($.optDisabled
                      ? n.disabled
                      : null !== n.getAttribute("disabled")) ||
                    (n.parentNode.disabled &&
                      z.nodeName(n.parentNode, "optgroup"))
                  ))
                ) {
                  if (((t = z(n).val()), o)) return t;
                  a.push(t);
                }
              return a;
            },
            set: function (e, t) {
              for (
                var n, r, i = e.options, o = z.makeArray(t), a = i.length;
                a--;

              )
                (r = i[a]),
                  (r.selected = z.inArray(r.value, o) >= 0) && (n = !0);
              return n || (e.selectedIndex = -1), o;
            },
          },
        },
      }),
      z.each(["radio", "checkbox"], function () {
        (z.valHooks[this] = {
          set: function (e, t) {
            return z.isArray(t)
              ? (e.checked = z.inArray(z(e).val(), t) >= 0)
              : void 0;
          },
        }),
          $.checkOn ||
            (z.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      }),
      z.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (e, t) {
          z.fn[t] = function (e, n) {
            return arguments.length > 0
              ? this.on(t, null, e, n)
              : this.trigger(t);
          };
        }
      ),
      z.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
      });
    var Ge = z.now(),
      Ye = /\?/;
    (z.parseJSON = function (e) {
      return JSON.parse(e + "");
    }),
      (z.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
          (n = new DOMParser()), (t = n.parseFromString(e, "text/xml"));
        } catch (r) {
          t = void 0;
        }
        return (
          (!t || t.getElementsByTagName("parsererror").length) &&
            z.error("Invalid XML: " + e),
          t
        );
      });
    var Qe = /#.*$/,
      Ke = /([?&])_=[^&]*/,
      Ze = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      et = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      tt = /^(?:GET|HEAD)$/,
      nt = /^\/\//,
      rt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      it = {},
      ot = {},
      at = "*/".concat("*"),
      st = e.location.href,
      ut = rt.exec(st.toLowerCase()) || [];
    z.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: st,
        type: "GET",
        isLocal: et.test(ut[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": at,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": z.parseJSON,
          "text xml": z.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? D(D(e, z.ajaxSettings), t) : D(z.ajaxSettings, e);
      },
      ajaxPrefilter: j(it),
      ajaxTransport: j(ot),
      ajax: function (e, t) {
        function n(e, t, n, a) {
          var u,
            l,
            v,
            y,
            x,
            C = t;
          2 !== b &&
            ((b = 2),
            s && clearTimeout(s),
            (r = void 0),
            (o = a || ""),
            (w.readyState = e > 0 ? 4 : 0),
            (u = (e >= 200 && 300 > e) || 304 === e),
            n && (y = L(f, w, n)),
            (y = O(f, y, w, u)),
            u
              ? (f.ifModified &&
                  ((x = w.getResponseHeader("Last-Modified")),
                  x && (z.lastModified[i] = x),
                  (x = w.getResponseHeader("etag")),
                  x && (z.etag[i] = x)),
                204 === e || "HEAD" === f.type
                  ? (C = "nocontent")
                  : 304 === e
                  ? (C = "notmodified")
                  : ((C = y.state), (l = y.data), (v = y.error), (u = !v)))
              : ((v = C), (e || !C) && ((C = "error"), 0 > e && (e = 0))),
            (w.status = e),
            (w.statusText = (t || C) + ""),
            u ? h.resolveWith(d, [l, C, w]) : h.rejectWith(d, [w, C, v]),
            w.statusCode(m),
            (m = void 0),
            c && p.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? l : v]),
            g.fireWith(d, [w, C]),
            c &&
              (p.trigger("ajaxComplete", [w, f]),
              --z.active || z.event.trigger("ajaxStop")));
        }
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var r,
          i,
          o,
          a,
          s,
          u,
          c,
          l,
          f = z.ajaxSetup({}, t),
          d = f.context || f,
          p = f.context && (d.nodeType || d.jquery) ? z(d) : z.event,
          h = z.Deferred(),
          g = z.Callbacks("once memory"),
          m = f.statusCode || {},
          v = {},
          y = {},
          b = 0,
          x = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (2 === b) {
                if (!a)
                  for (a = {}; (t = Ze.exec(o)); ) a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return 2 === b ? o : null;
            },
            setRequestHeader: function (e, t) {
              var n = e.toLowerCase();
              return b || ((e = y[n] = y[n] || e), (v[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return b || (f.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (2 > b) for (t in e) m[t] = [m[t], e[t]];
                else w.always(e[w.status]);
              return this;
            },
            abort: function (e) {
              var t = e || x;
              return r && r.abort(t), n(0, t), this;
            },
          };
        if (
          ((h.promise(w).complete = g.add),
          (w.success = w.done),
          (w.error = w.fail),
          (f.url = ((e || f.url || st) + "")
            .replace(Qe, "")
            .replace(nt, ut[1] + "//")),
          (f.type = t.method || t.type || f.method || f.type),
          (f.dataTypes = z
            .trim(f.dataType || "*")
            .toLowerCase()
            .match(ae) || [""]),
          null == f.crossDomain &&
            ((u = rt.exec(f.url.toLowerCase())),
            (f.crossDomain = !(
              !u ||
              (u[1] === ut[1] &&
                u[2] === ut[2] &&
                (u[3] || ("http:" === u[1] ? "80" : "443")) ===
                  (ut[3] || ("http:" === ut[1] ? "80" : "443")))
            ))),
          f.data &&
            f.processData &&
            "string" != typeof f.data &&
            (f.data = z.param(f.data, f.traditional)),
          A(it, f, t, w),
          2 === b)
        )
          return w;
        (c = z.event && f.global),
          c && 0 === z.active++ && z.event.trigger("ajaxStart"),
          (f.type = f.type.toUpperCase()),
          (f.hasContent = !tt.test(f.type)),
          (i = f.url),
          f.hasContent ||
            (f.data &&
              ((i = f.url += (Ye.test(i) ? "&" : "?") + f.data), delete f.data),
            f.cache === !1 &&
              (f.url = Ke.test(i)
                ? i.replace(Ke, "$1_=" + Ge++)
                : i + (Ye.test(i) ? "&" : "?") + "_=" + Ge++)),
          f.ifModified &&
            (z.lastModified[i] &&
              w.setRequestHeader("If-Modified-Since", z.lastModified[i]),
            z.etag[i] && w.setRequestHeader("If-None-Match", z.etag[i])),
          ((f.data && f.hasContent && f.contentType !== !1) || t.contentType) &&
            w.setRequestHeader("Content-Type", f.contentType),
          w.setRequestHeader(
            "Accept",
            f.dataTypes[0] && f.accepts[f.dataTypes[0]]
              ? f.accepts[f.dataTypes[0]] +
                  ("*" !== f.dataTypes[0] ? ", " + at + "; q=0.01" : "")
              : f.accepts["*"]
          );
        for (l in f.headers) w.setRequestHeader(l, f.headers[l]);
        if (f.beforeSend && (f.beforeSend.call(d, w, f) === !1 || 2 === b))
          return w.abort();
        x = "abort";
        for (l in { success: 1, error: 1, complete: 1 }) w[l](f[l]);
        if ((r = A(ot, f, t, w))) {
          (w.readyState = 1),
            c && p.trigger("ajaxSend", [w, f]),
            f.async &&
              f.timeout > 0 &&
              (s = setTimeout(function () {
                w.abort("timeout");
              }, f.timeout));
          try {
            (b = 1), r.send(v, n);
          } catch (C) {
            if (!(2 > b)) throw C;
            n(-1, C);
          }
        } else n(-1, "No Transport");
        return w;
      },
      getJSON: function (e, t, n) {
        return z.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return z.get(e, void 0, t, "script");
      },
    }),
      z.each(["get", "post"], function (e, t) {
        z[t] = function (e, n, r, i) {
          return (
            z.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
            z.ajax({ url: e, type: t, dataType: i, data: n, success: r })
          );
        };
      }),
      (z._evalUrl = function (e) {
        return z.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      z.fn.extend({
        wrapAll: function (e) {
          var t;
          return z.isFunction(e)
            ? this.each(function (t) {
                z(this).wrapAll(e.call(this, t));
              })
            : (this[0] &&
                ((t = z(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this);
        },
        wrapInner: function (e) {
          return z.isFunction(e)
            ? this.each(function (t) {
                z(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                var t = z(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
        },
        wrap: function (e) {
          var t = z.isFunction(e);
          return this.each(function (n) {
            z(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              z.nodeName(this, "body") || z(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (z.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0;
      }),
      (z.expr.filters.visible = function (e) {
        return !z.expr.filters.hidden(e);
      });
    var ct = /%20/g,
      lt = /\[\]$/,
      ft = /\r?\n/g,
      dt = /^(?:submit|button|image|reset|file)$/i,
      pt = /^(?:input|select|textarea|keygen)/i;
    (z.param = function (e, t) {
      var n,
        r = [],
        i = function (e, t) {
          (t = z.isFunction(t) ? t() : null == t ? "" : t),
            (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
        };
      if (
        (void 0 === t && (t = z.ajaxSettings && z.ajaxSettings.traditional),
        z.isArray(e) || (e.jquery && !z.isPlainObject(e)))
      )
        z.each(e, function () {
          i(this.name, this.value);
        });
      else for (n in e) P(n, e[n], t, i);
      return r.join("&").replace(ct, "+");
    }),
      z.fn.extend({
        serialize: function () {
          return z.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = z.prop(this, "elements");
            return e ? z.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !z(this).is(":disabled") &&
                pt.test(this.nodeName) &&
                !dt.test(e) &&
                (this.checked || !ve.test(e))
              );
            })
            .map(function (e, t) {
              var n = z(this).val();
              return null == n
                ? null
                : z.isArray(n)
                ? z.map(n, function (e) {
                    return { name: t.name, value: e.replace(ft, "\r\n") };
                  })
                : { name: t.name, value: n.replace(ft, "\r\n") };
            })
            .get();
        },
      }),
      (z.ajaxSettings.xhr = function () {
        try {
          return new XMLHttpRequest();
        } catch (e) {}
      });
    var ht = 0,
      gt = {},
      mt = { 0: 200, 1223: 204 },
      vt = z.ajaxSettings.xhr();
    e.attachEvent &&
      e.attachEvent("onunload", function () {
        for (var e in gt) gt[e]();
      }),
      ($.cors = !!vt && "withCredentials" in vt),
      ($.ajax = vt = !!vt),
      z.ajaxTransport(function (e) {
        var t;
        return $.cors || (vt && !e.crossDomain)
          ? {
              send: function (n, r) {
                var i,
                  o = e.xhr(),
                  a = ++ht;
                if (
                  (o.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (i in e.xhrFields) o[i] = e.xhrFields[i];
                e.mimeType &&
                  o.overrideMimeType &&
                  o.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    n["X-Requested-With"] ||
                    (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) o.setRequestHeader(i, n[i]);
                (t = function (e) {
                  return function () {
                    t &&
                      (delete gt[a],
                      (t = o.onload = o.onerror = null),
                      "abort" === e
                        ? o.abort()
                        : "error" === e
                        ? r(o.status, o.statusText)
                        : r(
                            mt[o.status] || o.status,
                            o.statusText,
                            "string" == typeof o.responseText
                              ? { text: o.responseText }
                              : void 0,
                            o.getAllResponseHeaders()
                          ));
                  };
                }),
                  (o.onload = t()),
                  (o.onerror = t("error")),
                  (t = gt[a] = t("abort"));
                try {
                  o.send((e.hasContent && e.data) || null);
                } catch (s) {
                  if (t) throw s;
                }
              },
              abort: function () {
                t && t();
              },
            }
          : void 0;
      }),
      z.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
          "text script": function (e) {
            return z.globalEval(e), e;
          },
        },
      }),
      z.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      z.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
          var t, n;
          return {
            send: function (r, i) {
              (t = z("<script>")
                .prop({ async: !0, charset: e.scriptCharset, src: e.url })
                .on(
                  "load error",
                  (n = function (e) {
                    t.remove(),
                      (n = null),
                      e && i("error" === e.type ? 404 : 200, e.type);
                  })
                )),
                X.head.appendChild(t[0]);
            },
            abort: function () {
              n && n();
            },
          };
        }
      });
    var yt = [],
      bt = /(=)\?(?=&|$)|\?\?/;
    z.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = yt.pop() || z.expando + "_" + Ge++;
        return (this[e] = !0), e;
      },
    }),
      z.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i,
          o,
          a,
          s =
            t.jsonp !== !1 &&
            (bt.test(t.url)
              ? "url"
              : "string" == typeof t.data &&
                !(t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
                bt.test(t.data) &&
                "data");
        return s || "jsonp" === t.dataTypes[0]
          ? ((i = t.jsonpCallback = z.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
            s
              ? (t[s] = t[s].replace(bt, "$1" + i))
              : t.jsonp !== !1 &&
                (t.url += (Ye.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            (t.converters["script json"] = function () {
              return a || z.error(i + " was not called"), a[0];
            }),
            (t.dataTypes[0] = "json"),
            (o = e[i]),
            (e[i] = function () {
              a = arguments;
            }),
            r.always(function () {
              (e[i] = o),
                t[i] && ((t.jsonpCallback = n.jsonpCallback), yt.push(i)),
                a && z.isFunction(o) && o(a[0]),
                (a = o = void 0);
            }),
            "script")
          : void 0;
      }),
      (z.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && ((n = t), (t = !1)), (t = t || X);
        var r = Z.exec(e),
          i = !n && [];
        return r
          ? [t.createElement(r[1])]
          : ((r = z.buildFragment([e], t, i)),
            i && i.length && z(i).remove(),
            z.merge([], r.childNodes));
      });
    var xt = z.fn.load;
    (z.fn.load = function (e, t, n) {
      if ("string" != typeof e && xt) return xt.apply(this, arguments);
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        s >= 0 && ((r = z.trim(e.slice(s))), (e = e.slice(0, s))),
        z.isFunction(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        a.length > 0 &&
          z
            .ajax({ url: e, type: i, dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? z("<div>").append(z.parseHTML(e)).find(r) : e);
            })
            .complete(
              n &&
                function (e, t) {
                  a.each(n, o || [e.responseText, t, e]);
                }
            ),
        this
      );
    }),
      z.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          z.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      );
    var wt = e.document.documentElement;
    (z.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          c,
          l = z.css(e, "position"),
          f = z(e),
          d = {};
        "static" === l && (e.style.position = "relative"),
          (s = f.offset()),
          (o = z.css(e, "top")),
          (u = z.css(e, "left")),
          (c =
            ("absolute" === l || "fixed" === l) &&
            (o + u).indexOf("auto") > -1),
          c
            ? ((r = f.position()), (a = r.top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          z.isFunction(t) && (t = t.call(e, n, s)),
          null != t.top && (d.top = t.top - s.top + a),
          null != t.left && (d.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, d) : f.css(d);
      },
    }),
      z.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return void 0 === e
              ? this
              : this.each(function (t) {
                  z.offset.setOffset(this, e, t);
                });
          var t,
            n,
            r = this[0],
            i = { top: 0, left: 0 },
            o = r && r.ownerDocument;
          return o
            ? ((t = o.documentElement),
              z.contains(t, r)
                ? (typeof r.getBoundingClientRect !== ye &&
                    (i = r.getBoundingClientRect()),
                  (n = q(o)),
                  {
                    top: i.top + n.pageYOffset - t.clientTop,
                    left: i.left + n.pageXOffset - t.clientLeft,
                  })
                : i)
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n = this[0],
              r = { top: 0, left: 0 };
            return (
              "fixed" === z.css(n, "position")
                ? (t = n.getBoundingClientRect())
                : ((e = this.offsetParent()),
                  (t = this.offset()),
                  z.nodeName(e[0], "html") || (r = e.offset()),
                  (r.top += z.css(e[0], "borderTopWidth", !0)),
                  (r.left += z.css(e[0], "borderLeftWidth", !0))),
              {
                top: t.top - r.top - z.css(n, "marginTop", !0),
                left: t.left - r.left - z.css(n, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent || wt;
              e && !z.nodeName(e, "html") && "static" === z.css(e, "position");

            )
              e = e.offsetParent;
            return e || wt;
          });
        },
      }),
      z.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (
        t,
        n
      ) {
        var r = "pageYOffset" === n;
        z.fn[t] = function (i) {
          return ce(
            this,
            function (t, i, o) {
              var a = q(t);
              return void 0 === o
                ? a
                  ? a[n]
                  : t[i]
                : void (a
                    ? a.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset)
                    : (t[i] = o));
            },
            t,
            i,
            arguments.length,
            null
          );
        };
      }),
      z.each(["top", "left"], function (e, t) {
        z.cssHooks[t] = C($.pixelPosition, function (e, n) {
          return n
            ? ((n = w(e, t)), Be.test(n) ? z(e).position()[t] + "px" : n)
            : void 0;
        });
      }),
      z.each({ Height: "height", Width: "width" }, function (e, t) {
        z.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (
          n,
          r
        ) {
          z.fn[r] = function (r, i) {
            var o = arguments.length && (n || "boolean" != typeof r),
              a = n || (r === !0 || i === !0 ? "margin" : "border");
            return ce(
              this,
              function (t, n, r) {
                var i;
                return z.isWindow(t)
                  ? t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((i = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      i["scroll" + e],
                      t.body["offset" + e],
                      i["offset" + e],
                      i["client" + e]
                    ))
                  : void 0 === r
                  ? z.css(t, n, a)
                  : z.style(t, n, r, a);
              },
              t,
              o ? r : void 0,
              o,
              null
            );
          };
        });
      }),
      (z.fn.size = function () {
        return this.length;
      }),
      (z.fn.andSelf = z.fn.addBack);
    var Ct = e.jQuery,
      Tt = e.$;
    return (
      (z.noConflict = function (t) {
        return (
          e.$ === z && (e.$ = Tt), t && e.jQuery === z && (e.jQuery = Ct), z
        );
      }),
      typeof t === ye && (e.jQuery = e.$ = z),
      z
    );
  });
  var y = jQuery.noConflict(!0),
    b = "21dcf39ec5b79bdd";
  if (b) {
    var x = e.keystone || (e.keystone = {}),
      w = {},
      C = {};
    !(function () {
      m(), d(), r();
    })(),
      (x.runCampaigns = n),
      (w.juicyDefault = function (n) {
        console.log("Keystone: Executing Juicy Default Modifications"),
          c(
            "https://k.brandingbrand.com/21dcf39ec5b79bdd/a/aab0ab7ab6eda577/css/keystone.css?1445893633142"
          ),
          (e.__insp = e.__insp || []),
          __insp.push(["wid", "260385781"]),
          (function () {
            function n() {
              for (
                var n = t.querySelectorAll("input,textarea"), r = 0;
                r < n.length;
                r++
              )
                n[r].classList.add("inspectletIgnore");
              for (
                n = t.querySelectorAll("select,option"), r = 0;
                r < n.length;
                r++
              )
                n[r].classList.add("inspectlet-sensitive");
              var i = t.createElement("script");
              (i.type = "text/javascript"),
                (i.async = !0),
                (i.id = "inspsync"),
                (i.src =
                  ("https:" == t.location.protocol ? "https" : "http") +
                  "://cdn.inspectlet.com/inspectlet.js");
              var o = t.getElementsByTagName("script")[0];
              o.parentNode.insertBefore(i, o),
                __insp.push([
                  "tagSession",
                  {
                    bb_vid: l(),
                    browser:
                      navigator.userAgent.indexOf("Chrome") > -1
                        ? "Chrome"
                        : navigator.userAgent.indexOf("Safari") > -1
                        ? "Safari"
                        : navigator.userAgent,
                    os: navigator.platform,
                    screen:
                      "" +
                      e.screen.width +
                      "x" +
                      e.screen.height +
                      "x" +
                      e.devicePixelRatio,
                  },
                ]);
            }
            e.attachEvent
              ? e.attachEvent("onload", n)
              : e.addEventListener("load", n, !1);
          })(),
          g("o2", function (e, t) {
            e ||
              (t.set("dimension7", l()),
              t.send("event", "BB", "load", "juicyDefault"),
              y(function () {
                y(".add-button").click(function () {
                  t.send("event", "BB", "click", "Add to Cart");
                }),
                  y(".paypal-button").click(function () {
                    t.send(
                      "event",
                      "BB",
                      "click",
                      "Checkout with Paypal Checkout"
                    );
                  }),
                  y('.fixed-footer a[href="/store-locator"]').click(
                    function () {
                      t.send("event", "BB", "click", "Store Locator");
                    }
                  );
              }));
          }),
          y(t).ready(function () {
            function n() {
              if (
                !t.querySelector('textarea[name="Feedback[feedback]"]').value
                  .length
              )
                return void alert("Please provide feedback.");
              var e = new XMLHttpRequest();
              e.open(
                "POST",
                t.location.protocol +
                  "//cms.brandingbrand.com/site_feedback/feedbacks/add",
                !0
              ),
                (e.onload = function () {
                  t.getElementById("feedbackContainer").innerHTML =
                    '<h3>Thank you for your feedback.<br><a href="#" class="bb-close">Close Window</a></h3>';
                }),
                (t.querySelector('input[name="Feedback[vid]"]').value = l()),
                (t.querySelector('input[name="Feedback[referrer]"]').value =
                  t.referrer),
                e.send(new FormData(t.getElementById("feedback")));
            }
            (e.submitFeedback = n),
              y(".footer.nav").before(
                '<div class="bb-feedback"><a class="btn btn-primary">SITE FEEDBACK</a></div>'
              ),
              y("body")
                .append(
                  '<div id="feedbackShade"></div><div id="feedbackContainer"><div class="bb-close"><a href="#">&otimes;</a></div><div class="title">SITE FEEDBACK</div><p>For feedback about the mobile site, please complete the survey below.</p><p>For customer service, please visit our <a href="http://www.juicycouture.com/contact-us">contact us</a> page or call <a href="tel:18888248826">1.888.824.8826</a>.<p>How can we improve your experience?</p><form id="feedback" onsubmit="submitFeedback(); return false;"><input type="hidden" name="Feedback[property_id]" value="101" /><input type="hidden" name="Feedback[vid]" value="" /><input type="hidden" name="Feedback[referrer]" value="" /><textarea id="area" name="Feedback[feedback]" rows="5"></textarea><div class="text-right"><input class="btn btn-primary" type="submit" value="Submit Feedback" /></div></form></div>'
                )
                .on(
                  "click",
                  ".bb-close, #feedbackShade, .bb-feedback",
                  function (e) {
                    e.preventDefault(),
                      y("#feedbackShade, #feedbackContainer").toggle();
                  }
                );
          }),
          y(t).ready(function () {
            bbx && bbx("pageview");
            var n = e.__onestop_pageData,
              r = {};
            if (
              (y('input[value="Add to Bag"]').on("click", function () {
                var t = y('select[name="quantity"]').val(),
                  r = {
                    color: y(".colors-label-current").data("hint"),
                    size: y(".sizes-input-current").text(),
                  };
                try {
                  bbx &&
                    bbx("cartItem", {
                      type: "add",
                      href: e.location.href,
                      id: n.id,
                      title: n.title,
                      quantityDelta: t,
                      currency: utag_data["cp.borderFree_currencyCode"],
                      price: n.product.MinCost,
                      options: r,
                    });
                } catch (i) {}
              }),
              y(t).on(
                "click",
                'input[value="Update"], .remove, .edit-link.remove',
                function () {
                  var e,
                    t,
                    n = "update";
                  if (y(this).closest("form").length > 0) {
                    var i = y(this).closest("form"),
                      o = i.find("a").first().attr("href");
                    (e = i.find(".pdp-title").text()),
                      (t = i.find('select[name="quantity"]').val());
                    var a = {
                      color: i.find(".colors-label-current").data("hint"),
                      size: i.find(".sizes-input-current").text(),
                    };
                  } else
                    (n = "remove"),
                      (t = 0),
                      (e = y(this).closest(".details").find("h5 > a").text());
                  try {
                    var s = utag_data._cprodname;
                    for (var u in s)
                      s[u] === e &&
                        (r = {
                          id: utag_data._csku[u],
                          quantity: parseInt(utag_data._cquan[u]),
                          price: parseFloat(utag_data._cprice[u]),
                        });
                  } catch (c) {}
                  try {
                    bbx &&
                      bbx("cartItem", {
                        type: n,
                        title: e,
                        href: o || null,
                        price: r.price,
                        id: r.id,
                        quantityDelta: t - r.quantity,
                        updatedQuantity: parseInt(t),
                        currency: utag_data["cp.borderFree_currencyCode"],
                        options: a,
                      });
                  } catch (c) {}
                }
              ),
              y(t).on(
                "submit",
                ".forget-password, .login-container form, .registration-container form",
                function () {
                  var e = y(this).find('input[name="email"]').val();
                  try {
                    bbx("email", e);
                  } catch (t) {}
                }
              ),
              y(t).on("submit", 'form[name="searchform"]', function () {
                var e = y(this).find(".form-search").val();
                try {
                  bbx("search", { query: e });
                } catch (t) {}
              }),
              y(t).on("submit", ".promo-code form", function () {
                var e = y(this).find("input").val();
                try {
                  bbx("promoChange", { type: "add", promos: [{ id: e }] });
                } catch (t) {}
              }),
              -1 !== e.location.pathname.indexOf("/Checkout/Thanks"))
            ) {
              var i,
                o,
                a,
                s,
                u = n && n.order && n.order.Info,
                c =
                  n &&
                  n.order &&
                  n.order.Info &&
                  n.order.Info.OrderInfoDetailsList,
                l = u.BillingAddressInfo,
                f = u.ShippingAddressInfo,
                d =
                  u.CreditCardInfo.CreditCardTypeName +
                  ": " +
                  u.CreditCardInfo.CreditCardLast4,
                p = l.FirstName + " " + l.LastName,
                h = [];
              (a = l.AddressLine2
                ? l.AddressLine1 + ", " + l.AddressLine2
                : l.AddressLine1),
                (s = l.AddressLine2
                  ? f.AddressLine1 + ", " + f.AddressLine2
                  : f.AddressLine1);
              for (
                var g = {
                    streetName: a,
                    locality: l.City,
                    region: l.State,
                    postalCode: l.PostalCode,
                    countryCode: l.IsoCode,
                  },
                  m = {
                    streetName: s,
                    locality: f.City,
                    region: f.State,
                    postalCode: f.PostalCode,
                    countryCode: f.IsoCode,
                  },
                  v = 0;
                v < c.length;
                v++
              ) {
                var b = parseInt(c[v].Quantity, 10),
                  x = parseFloat(c[v].UnitCost),
                  w = x * b;
                (n = {
                  id: c[v].ProductId + "",
                  title: c[v].ModelName,
                  price: { per_item: x, for_all: w, currency: "USD" },
                  quantity: b,
                  href: c[v].ProductUrl,
                }),
                  h.push(n);
              }
              (i =
                g.streetName +
                ", " +
                g.locality +
                ", " +
                g.region +
                ", " +
                g.postalCode +
                ", " +
                g.countryCode),
                (o =
                  m.streetName +
                  ", " +
                  m.locality +
                  ", " +
                  m.region +
                  ", " +
                  m.postalCode +
                  ", " +
                  m.countryCode);
              try {
                bbx &&
                  bbx("transaction", {
                    order_number: u.OrderNumber,
                    name: p,
                    phone_number: l.PhoneNumber,
                    email: u.BillingAddressInfo.Email,
                    payment_method: d,
                    shipping_method: u.ShipType.ShipName,
                    summary: {
                      subtotal: parseFloat(u.Orders.SubTotal),
                      total: parseFloat(u.Orders.GrandTotal),
                      tax: parseFloat(u.Orders.TotalTax),
                      shipping: parseFloat(u.Orders.TotalShipping),
                      currency: "USD",
                    },
                    address: i,
                    _address: g,
                    buckets: [
                      {
                        shippping: {
                          _address: m,
                          address: o,
                          method: u.ShipType.ShipName,
                        },
                        products: h,
                      },
                    ],
                    products: h,
                  });
              } catch (C) {}
            }
          });
      }),
      w.juicyDefault();
  }
})(window, document);
/*
page: http://www.juicycouture.com/
url: http://k.brandingbrand.com/21dcf39ec5b79bdd/keystone.js
*/
