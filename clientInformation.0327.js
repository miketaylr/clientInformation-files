define("kg/global-util/1.0.5/index", [], function (require, exports, module) {
  var kgGlobalUtil105Index;
  (kgGlobalUtil105Index = (function (exports) {
    function getCookie(e) {
      var n = document.cookie.match("(?:^|;)\\s*" + e + "=([^;]*)");
      return n && n[1] ? decodeURIComponent(n[1]) : "";
    }
    var S = KISSY;
    window.TB || (window.TB = {}), window.TB.Global || (window.TB.Global = {});
    var onLine = -1 === location.hostname.indexOf("daily.taobao.net"),
      cdnHost =
        location.protocol +
        "//" +
        (onLine ? "g.alicdn.com" : "g-assets.daily.taobao.net");
    return (
      S.config({
        packages: [
          {
            name: "tbc",
            combine: !0,
            path: cdnHost + "/tbc/",
            ignorePackageNameInUri: !0,
          },
          {
            name: "gallery",
            combine: !0,
            path: "//assets.alicdn.com/s/kissy/gallery/",
            ignorePackageNameInUri: !0,
          },
        ],
      }),
      (exports = TB.Global = {
        version: "3.0",
        isLogin: function () {
          var e = getCookie("_nk_") || getCookie("tracknick"),
            n = getCookie("_l_g_"),
            t = getCookie("lgc");
          return !!((n && e) || t);
        },
        getNick: function () {
          var e = getCookie("_nk_"),
            n = getCookie("lgc"),
            t = e || n;
          return t && (t = this.fromUnicode(t).replace(/[<>%&;\\'"]/g, "")), t;
        },
        getAvatar: function () {
          var e =
              "//gtms03.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_80x80.jpg",
            n = this.getNick();
          return n
            ? "//wwc.alicdn.com/avatar/getAvatar.do?userNick=" +
                n +
                "&_input_charset=UTF-8&width=80&height=80&type=sns"
            : e;
        },
        fromUnicode: function (e) {
          return e.replace(/\\u([a-f\d]{4})/gi, function (e, n) {
            return String.fromCharCode(parseInt(n, 16));
          });
        },
        getTag: function () {
          return parseInt(S.unparam(getCookie("uc1")).tag, 10);
        },
        getHost: function () {
          return this.isDaily() ? ".daily.taobao.net" : ".taobao.com";
        },
        getCdnHost: function () {
          return cdnHost;
        },
        isDaily: function () {
          return !onLine;
        },
        isMobile: function () {
          var e = navigator.userAgent;
          return (
            !!e.match(/AppleWebKit.*Mobile.*/) ||
            "ontouchstart" in document.documentElement
          );
        },
        getCharset: function () {
          return /utf\-*8/i.test(document.charset || document.characterSet)
            ? "utf8"
            : "gbk";
        },
        isHttps: function () {
          return "https:" === location.protocol;
        },
        getComponentVersion: function (name) {
          var search = location.search.replace("?", "");
          if (search && -1 !== search.indexOf("fn-")) {
            search = search.split("&");
            for (var obj = {}, i = 0, len = search.length; len > i; i++)
              /^fn\-/.test(search[i]) &&
                (obj[search[i].replace(/=.+$/, "")] = search[i].replace(
                  /^[^=]+=/,
                  ""
                ));
            var sname = "fn-" + name;
            if (obj[sname] && /^\d+\.\d+\.\d+$/.test(obj[sname]))
              return obj[sname];
          }
          var container = document.getElementById("J_SiteNav");
          if (container) {
            var config = container.getAttribute("data-component-config");
            if (config)
              return (
                (config =
                  window.JSON && JSON.parse
                    ? JSON.parse(config)
                    : eval("(" + config + ")")),
                config[name] || ""
              );
          }
          return "";
        },
        use: function (e, n) {
          if (/kg\//.test(e)) {
            var t = e.split("/"),
              o = this.getComponentVersion(t[1]);
            if (o)
              return (
                (t[1] += "/" + o),
                t[2] || t.push("index"),
                S.use(t.join("/"), n)
              );
          }
        },
      })
    );
  })()),
    (module.exports = kgGlobalUtil105Index);
});
!(function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var i = (n[r] = { exports: {}, id: r, loaded: !1 });
    return e[r].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
  }
  var n = {};
  return (t.m = e), (t.c = n), (t.p = "/build/"), t(0);
})([
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(4);
    r(), (e.exports = i);
  },
  function (e, t, n) {
    var r = n(2),
      i = n(4),
      o = n(15);
    e.exports = function () {
      try {
        if (!window) return;
        if (window.JSTracker2 && window.JSTracker2.version) return;
        var e = [];
        window.JSTracker2 &&
          window.JSTracker2.length > 0 &&
          (e = window.JSTracker2);
        var t;
        window.g_config &&
          window.g_config.jstracker2 &&
          (t = window.g_config.jstracker2),
          (window.JSTracker2 = new i(t));
        for (var n = 0; n < e.length; n++) window.JSTracker2.push(e[n]);
        o.call(JSTracker2);
        var a = window.onerror;
        window.onerror = function () {
          try {
            a && a.apply(window, arguments);
            var e = r.apply(window, arguments);
            window.JSTracker2.push(e);
          } catch (t) {}
        };
      } catch (s) {}
    };
  },
  function (e, t, n) {
    var r = n(3);
    e.exports = function () {
      var e = {
        msg: arguments[0],
        file: arguments[1],
        line: arguments[2],
        col: arguments[3],
        stack: r(arguments[4]).toString(),
      };
      return e;
    };
  },
  function (e, t) {
    function n(e, t, n, r) {
      (this.funcName = e), (this.file = t), (this.line = n), (this.col = r);
    }
    n.prototype.toString = function () {
      return [this.funcName, this.file, this.line, this.col].join("|");
    };
    var r = /\S+\:\d+/,
      i = /\s+at /,
      o = {
        parse: function (e) {
          return e
            ? "undefined" != typeof e.stacktrace ||
              "undefined" != typeof e["opera#sourceloc"]
              ? this.parseOpera(e)
              : e.stack && e.stack.match(i)
              ? this.parseV8OrIE(e)
              : e.stack && e.stack.match(r)
              ? this.parseFFOrSafari(e)
              : ""
            : "";
        },
        extractLocation: function (e) {
          if (-1 === e.indexOf(":")) return [e];
          var t = e.replace(/[\(\)\s]/g, "").split(":"),
            n = t.pop(),
            r = t[t.length - 1];
          if (!isNaN(parseFloat(r)) && isFinite(r)) {
            var i = t.pop();
            return [t.join(":"), i, n];
          }
          return [t.join(":"), n, void 0];
        },
        parseV8OrIE: function (e) {
          return e.stack
            .split("\n")
            .slice(1)
            .map(function (e) {
              var t = e.replace(/^\s+/, "").split(/\s+/).slice(1),
                r = this.extractLocation(t.pop()),
                i = t[0] && "Anonymous" !== t[0] ? t[0] : void 0;
              return new n(i, void 0, r[0], r[1], r[2]);
            }, this);
        },
        parseFFOrSafari: function (e) {
          return e.stack
            .split("\n")
            .filter(function (e) {
              return !!e.match(r);
            }, this)
            .map(function (e) {
              var t = e.split("@"),
                r = this.extractLocation(t.pop()),
                i = t.shift() || void 0;
              return new n(i, void 0, r[0], r[1], r[2]);
            }, this);
        },
        parseOpera: function (e) {
          return !e.stacktrace ||
            (e.message.indexOf("\n") > -1 &&
              e.message.split("\n").length > e.stacktrace.split("\n").length)
            ? this.parseOpera9(e)
            : e.stack
            ? this.parseOpera11(e)
            : this.parseOpera10(e);
        },
        parseOpera9: function (e) {
          for (
            var t = /Line (\d+).*script (?:in )?(\S+)/i,
              r = e.message.split("\n"),
              i = [],
              o = 2,
              a = r.length;
            a > o;
            o += 2
          ) {
            var s = t.exec(r[o]);
            s && i.push(new n(void 0, void 0, s[2], s[1]));
          }
          return i;
        },
        parseOpera10: function (e) {
          for (
            var t = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
              r = e.stacktrace.split("\n"),
              i = [],
              o = 0,
              a = r.length;
            a > o;
            o += 2
          ) {
            var s = t.exec(r[o]);
            s && i.push(new n(s[3] || void 0, void 0, s[2], s[1]));
          }
          return i;
        },
        parseOpera11: function (e) {
          return e.stack
            .split("\n")
            .filter(function (e) {
              return !!e.match(r) && !e.match(/^Error created at/);
            }, this)
            .map(function (e) {
              var t,
                r = e.split("@"),
                i = this.extractLocation(r.pop()),
                o = r.shift() || "",
                a =
                  o
                    .replace(/<anonymous function(: (\w+))?>/, "$2")
                    .replace(/\([^\)]*\)/g, "") || void 0;
              o.match(/\(([^\)]*)\)/) &&
                (t = o.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
              var s =
                void 0 === t || "[arguments not available]" === t
                  ? void 0
                  : t.split(",");
              return new n(a, s, i[0], i[1], i[2]);
            }, this);
        },
      };
    e.exports = function (e) {
      var t = o.parse(e);
      return t;
    };
  },
  function (e, t, n) {
    function r(e) {
      var t = {
        msg: "",
        file: "",
        line: "",
        col: "",
        stack: "",
        url: "",
        ua: "",
        screen: "",
        nick: "",
        dns: "",
        con: "",
        req: "",
        res: "",
        dcl: "",
        onload: "",
        type: "",
        ki: "",
      };
      (this.version = "o4.0.1"),
        (t = {
          v: this.version,
          ua: o,
          screen: a,
          sampling: 100,
          nick: s,
          ki: c,
        }),
        (this._debug = -1 != location.href.indexOf("jt_debug")),
        (this._pushed_num = 0),
        (this._config = u.merge(t, e));
    }
    var i = n(5),
      o = n(11),
      a = n(12),
      s = n(13),
      c = n(14),
      u = n(10);
    (r.prototype.push = i), (e.exports = r);
  },
  function (e, t, n) {
    var r = n(6),
      i = n(7),
      o = n(9),
      a = n(8),
      s = n(10);
    e.exports = function (e) {
      try {
        if (!e) return;
        (e && e.constructor === Object) || (e = r(e)),
          (e = s.merge(e, this._config));
        var t = a;
        e.t = t();
        for (var n in e)
          ("" === e[n] || null === e[n] || void 0 === e[n]) && delete e[n];
        var c = s.stringify(e),
          u = e.sampling;
        if (
          (1 > u &&
            ((u = 9999999),
            "undefined" != typeof console &&
              console.warn &&
              console.warn(
                "JSTracker2 sampling is invalid, please set a integer above 1!"
              )),
          "__PV" !== e.msg && !this._debug && Math.random() * u > 1)
        );
        else if (this._pushed_num < 10) {
          this._pushed_num++,
            this._debug && window.console && window.console.log(e);
          var d = o.call(this);
          i(d + c);
        }
      } catch (l) {}
    };
  },
  function (e, t, n) {
    var r = n(3);
    e.exports = function (e) {
      var t = {
        msg: e.message,
        file: "",
        line: "",
        col: "",
        stack: r(e).toString(),
      };
      return t;
    };
  },
  function (e, t, n) {
    var r = n(8);
    e.exports = function (e) {
      var t = window,
        n = "jsFeImage_" + r(),
        i = (t[n] = new Image());
      (i.onload = i.onerror = function () {
        t[n] = null;
      }),
        (i.src = e);
    };
  },
  function (e, t) {
    var n = function () {
      return +new Date() + ".r" + Math.floor(1e3 * Math.random());
    };
    e.exports = n;
  },
  function (e, t) {
    e.exports = function () {
      var e = "//gm.mmstat.com";
      return (
        this._config.server && (e = this._config.server), e + "/jstracker.3?"
      );
    };
  },
  function (e, t) {
    e.exports = {
      merge: function (e, t) {
        var n = {};
        for (var r in e) n[r] = e[r];
        for (var r in t) n[r] = t[r];
        return n;
      },
      stringify: function (e) {
        var t = [];
        for (var n in e) t.push(n + "=" + encodeURIComponent(e[n]));
        return t.join("&");
      },
      now: function () {
        return window.performance && window.performance.now
          ? window.performance.now()
          : Date && "function" == typeof Date.now
          ? Date.now()
          : new Date();
      },
    };
  },
  function (e, t) {
    var n = (function () {
      try {
        if (/UBrowser/i.test(navigator.userAgent)) return "";
        if ("undefined" != typeof window.scrollMaxX) return "";
        var e = "track" in document.createElement("track"),
          t =
            window.chrome && window.chrome.webstore
              ? Object.keys(window.chrome.webstore).length
              : 0;
        return window.clientInformation &&
          window.clientInformation.languages &&
          window.clientInformation.languages.length > 2
          ? ""
          : e
          ? t > 1
            ? " QIHU 360 EE"
            : " QIHU 360 SE"
          : "";
      } catch (n) {
        return "";
      }
    })();
    e.exports = navigator.userAgent + n;
  },
  function (e, t) {
    e.exports = screen.width + "x" + screen.height;
  },
  function (e, t) {
    var n = null;
    try {
      var r =
        /_nk_=([^;]+)/.exec(document.cookie) ||
        /_w_tb_nick=([^;]+)/.exec(document.cookie) ||
        /lgc=([^;]+)/.exec(document.cookie);
      r && (n = decodeURIComponent(r[1]));
    } catch (i) {}
    e.exports = n;
  },
  function (e, t) {
    function n() {
      try {
        return KISSY.version;
      } catch (e) {
        return null;
      }
    }
    e.exports = n();
  },
  function (e, t, n) {
    var r = n(16),
      i = n(18),
      o = n(19);
    e.exports = function () {
      var e = this;
      if (this._debug || !(100 * Math.random() > 1)) {
        if (
          ((this._cpu = new i()),
          new o(),
          window.WindVane &&
            window.WindVane.call &&
            navigator.userAgent.indexOf("iPhone") > -1 &&
            window.WindVane.call(
              "WVDevelopTool",
              "getLocPerformanceData",
              {},
              function (t) {
                try {
                  e._windVanePerfData = {
                    w_dns: t.dns,
                    w_c: t.c,
                    w_scs: t.scs,
                    w_rps: t.rps,
                    w_rpe: t.rpe,
                    w_dl: t.dl,
                    w_dc: t.dc,
                    w_lee: t.lee,
                  };
                } catch (n) {}
              }
            ),
          window.performance && window.performance.memory)
        )
          try {
            var t = parseInt(window.performance.memory.usedJSHeapSize),
              n = parseInt(window.performance.memory.totalJSHeapSize);
            t &&
              ((this._jsHeapSizeData = { jsHeapUsed: t }),
              n && (this._jsHeapSizeData.jsHeapUsedRate = (t / n).toFixed(4)));
          } catch (a) {}
        setTimeout(function () {
          try {
            var t = r.call(e);
            window.JSTracker2.push(t);
          } catch (n) {}
        }, 2e4);
      }
    };
  },
  function (e, t, n) {
    var r = n(17),
      i = n(10);
    e.exports = function () {
      var e = {},
        t = window;
      if (t.performance) {
        var n = t.performance.timing;
        (e.dns = n.domainLookupEnd - n.domainLookupStart),
          (e.con = n.connectEnd - n.connectStart),
          (e.req = n.responseStart - n.requestStart),
          (e.res = n.responseEnd - n.responseStart),
          (e.dcl = n.domContentLoadedEventEnd - n.domLoading),
          (e.onload = n.loadEventStart - n.domLoading),
          (e.type = window.performance.navigation.type),
          (e.sampling = 100);
      }
      e.msg = "__PV";
      var o = r.call(this);
      return (e.stack = i.stringify(o)), e;
    };
  },
  function (e, t, n) {
    var r = n(10);
    e.exports = function () {
      var e =
          window.performance ||
          window.webkitPerformance ||
          window.msPerformance ||
          window.mozPerformance,
        t = {};
      if (e) {
        var n = e.timing;
        if (n) {
          if (void 0 === t.firstPaint) {
            var i = -1;
            window.chrome && window.chrome.loadTimes
              ? ((i = 1e3 * window.chrome.loadTimes().firstPaintTime),
                (i -= 1e3 * window.chrome.loadTimes().startLoadTime))
              : "number" == typeof window.performance.timing.msFirstPaint &&
                ((i = window.performance.timing.msFirstPaint),
                (t.firstPaint = i - window.performance.timing.navigationStart)),
              (t.firstPaint = Math.floor(i));
          }
          (t.load = n.loadEventEnd - n.fetchStart),
            (t.domReady = n.domComplete - n.domInteractive),
            (t.readyStart = n.fetchStart - n.navigationStart),
            (t.redirect = n.redirectEnd - n.redirectStart),
            (t.appcache = n.domainLookupStart - n.fetchStart),
            (t.unloadEvent = n.unloadEventEnd - n.unloadEventStart),
            (t.lookupDomain = n.domainLookupEnd - n.domainLookupStart),
            (t.connect = n.connectEnd - n.connectStart),
            (t.request = n.responseEnd - n.requestStart),
            (t.initDomTree = n.domInteractive - n.responseEnd),
            (t.loadEvent = n.loadEventEnd - n.loadEventStart);
        }
      }
      if (
        (this._windVanePerfData && (t = r.merge(t, this._windVanePerfData)),
        this._jsHeapSizeData && (t = r.merge(t, this._jsHeapSizeData)),
        this._cpu)
      ) {
        this._cpu.pause(),
          (t.busy = Math.floor(this._cpu.getTotalSize(0, 15e3)));
        for (
          var o = this._cpu.data.dataArray, a = -1, s = 0, c = 0;
          c < o.length &&
          (o[c] <= 0.1 ? a++ : ((s = c + 1), (a = 0)), !(a >= 5));
          c++
        );
        (t.avail = Math.floor(
          this._cpu.data.timeArray[s] - this._cpu.data.timeArray[0]
        )),
          (t.busyPer = Math.floor(
            (this._cpu.getOverPerAmount(1, 0, 15e3) /
              this._cpu.getOverPerAmount(0, 0, 15e3)) *
              100
          )),
          this._debug && window.console && window.console.log(t);
      }
      return t;
    };
  },
  function (e, t) {
    !(function (e) {
      function t() {
        (this.conf = { log: !1, consoleUI: !1, delay: 100, stat: !0, ui: !1 }),
          this.log("start"),
          this.run(),
          (this._lastTime = this.now()),
          (this.data = {
            timeArray: [],
            per_line: [],
            time_line: [],
            size_line: [],
            averageTime: this.conf.delay,
            totalSize: 0,
            dataArray: [],
            timeArray: [],
          }),
          this.log("end");
      }
      (t.prototype.run = function () {
        var e,
          t = this;
        t.conf.ui,
          window.addEventListener &&
            window.addEventListener(
              "touchmove",
              function () {
                t.resumeFlag = !0;
              },
              !1
            ),
          (this._timerID = setTimeout(function () {
            if (!t.isPause) {
              (t.currentTime = t.now()),
                (e =
                  (t.currentTime - t._lastTime - t.conf.delay - 0) /
                  t.conf.delay),
                0 > e && (e = 0),
                e > 1 && (e = 1),
                (t._lastTime = t.currentTime);
              var n = t.getStepPer(t.now(), e),
                r = Math.floor(n / 0.5) + 1;
              if (((r = r > 200 ? 200 : r), t.resumeFlag)) t.resumeFlag = !1;
              else for (var i = 0; r > i; i++) t.logPercent(e);
              t._timerID = setTimeout(arguments.callee, t.conf.delay);
            }
          }, t.conf.delay));
      }),
        (t.prototype.now = function () {
          return window.performance && window.performance.now
            ? window.performance.now()
            : Date && "function" == typeof Date.now
            ? Date.now()
            : new Date();
        }),
        (t.prototype.log = function (t) {
          this.conf.log &&
            e.console &&
            e.console.log &&
            e.console.log("### CPU Log:" + t);
        }),
        (t.prototype.getStepPer = function (e, t) {
          var n = this.data;
          n.time_line.push(e);
          var r;
          n.per_line.push(t);
          var i = n.time_line.length;
          (r =
            1 == n.time_line.length ? n.averageTime : e - n.time_line[i - 2]),
            r < n.averageTime && (r = n.averageTime);
          var o = (r - n.averageTime) / n.averageTime;
          return (
            i >= 2
              ? ((n.totalSize +=
                  ((n.per_line[i - 1] + n.per_line[i - 2]) *
                    (n.time_line[i - 1] - n.time_line[i - 2])) /
                  2),
                n.size_line.push(n.totalSize))
              : n.size_line.push(0),
            n.per_line.length > 2 && (n.per_line.shift(), n.time_line.shift()),
            o
          );
        }),
        (t.prototype.drawUIByConsole = function (e) {
          for (var t = Math.round(10 * e), n = "\u2586", r = t; r--; )
            n += "\u2586";
          (n += Math.round(100 * e)), this.log(n);
        }),
        (t.prototype.pause = function () {
          clearTimeout(this._timerID),
            (this.isPause = !0),
            this.log("###########################PAUSE!!!!!!!!!");
        }),
        (t.prototype.resume = function () {
          (null == this.isPause || this.isPause) &&
            ((this._lastTime = this.now() + 1e4),
            (this.isPause = !1),
            (this.resumeFlag = !0),
            this.log("###########################RESUME!!!!!!!!!"),
            this.run());
        }),
        (t.prototype.logPercent = function (e) {
          this.conf.stat && this.logStat(e),
            this.conf.ui,
            this.conf.consoleUI && this.drawUIByConsole(e);
        }),
        (t.prototype.logStat = function (e) {
          var t = this.data;
          t.dataArray.push(e), t.timeArray.push(this.now());
        }),
        (t.prototype.getCurrentCPU = function () {
          for (
            var e = this.data,
              t = e.dataArray,
              n = 0,
              r = t.length,
              i = 0,
              o = r - 1;
            o >= 0 && ((i += t[o]), n++, !(n >= 3));
            o--
          );
          return 0 == n ? 0 : i / n;
        }),
        (t.prototype.getTimeIndex = function (e, t) {
          for (var n = this.data.timeArray, r = 0; r < n.length; r++)
            if (t) {
              if (n[r] - n[0] > e) return r - 1;
            } else if (n[r] - n[0] >= e) return r;
          return n.length;
        }),
        (t.prototype.getOverPerAmount = function (e, t, n) {
          for (
            var r = this.data,
              i = this.getTimeIndex(t),
              o = this.getTimeIndex(n, 1),
              a = r.dataArray,
              s = 0,
              c = i;
            o > c;
            c++
          )
            "undefined" != typeof a[c] && a[c] >= e && s++;
          return s;
        }),
        (t.prototype.getTotalSize = function (e, t) {
          var n = this.data,
            r = this.getTimeIndex(e),
            i = this.getTimeIndex(t, !0),
            o = n.size_line[i];
          o || (o = n.size_line[n.size_line.length - 1]);
          var a = o - n.size_line[r];
          return a;
        }),
        (e.cpu = t);
    })(window),
      (e.exports = cpu);
  },
  function (e, t, n) {
    function r() {
      try {
        this.init();
      } catch (e) {}
    }
    var i = n(10);
    (r.prototype.init = function () {
      var e = this,
        t =
          navigator.battery || navigator.mozBattery || navigator.webkitBattery;
      return t
        ? ((this.battery = t), this.setConfig(), void this.bindEvent())
        : void (
            navigator.getBattery &&
            navigator.getBattery().then(function (t) {
              (e.battery = t), e.setConfig(), e.bindEvent();
            })
          );
    }),
      (r.prototype.setConfig = function () {
        (this.level = 100 * this.battery.level), (this.lastTime = i.now());
      }),
      (r.prototype.bindEvent = function () {
        function e() {
          (t = 100 * o.battery.level),
            (n = i.now()),
            (r = (((o.level - t) / (n - o.lastTime)) * 1e3).toFixed(6)),
            r &&
              r != 1 / 0 &&
              r > 0 &&
              window.JSTracker2.push({
                sampling: 1,
                msg: "__Battery",
                line: r,
              }),
            o.battery.removeEventListener("levelchange", e, !1);
        }
        var t,
          n,
          r,
          o = this;
        this.battery &&
          this.level &&
          this.battery.addEventListener &&
          this.battery.removeEventListener &&
          this.battery.addEventListener("levelchange", e, !1);
      }),
      (e.exports = r);
  },
]);
define("kg/tb-nav/2.1.1/index", [
  "util",
  "event-custom",
  "io",
  "node",
  "cookie",
  "dom",
  "event",
], function (t, e, i) {
  var a,
    n,
    o,
    r,
    s,
    c,
    u,
    l,
    d,
    v,
    m,
    p,
    g,
    f = t("util"),
    h = t("event-custom"),
    w = t("io"),
    b = t("node"),
    _ = t("cookie"),
    C = t("dom"),
    M = t("event");
  (a = (function (t) {
    var e = TB.Global;
    return (e.versionName = "3.1.0"), (t = e);
  })()),
    (n = (function (t) {
      function e() {}
      var i = f,
        a = h;
      return (
        i.augment(e, a.Target, {
          show: function (t) {
            this.fire("show", { targetName: t });
          },
          hide: function (t) {
            this.fire("hide", { target: t });
          },
          subscribe: function (t, e, i) {
            this.on(e, function (e) {
              t === e.targetName && i && i(e);
            });
          },
        }),
        (t = new e())
      );
    })()),
    (o = (function (t) {
      var e = w,
        i = b,
        o = i.all,
        r = _,
        s = a,
        c = n,
        u = "//tce.alicdn.com/api/data.htm?ids=175785";
      return (t = {
        status: 0,
        init: function () {
          var t = this;
          c.subscribe("sitemap", "show", function () {
            t.status || ((t.status = 1), t.fetchData.call(t));
          });
        },
        fetchData: function () {
          new e({
            url: u,
            dataType: "jsonp",
            cache: !0,
            success: this.render,
            jsonpCallback: "tce_175785",
          });
        },
        render: function (t) {
          if (t && t[175785] && t[175785].value && t[175785].value.map) {
            var e,
              i = t[175785].value.map,
              a = o("#J_SiteNavSitemap");
            e = s.isMobile()
              ? a.width() + a.offset().left
              : o("#J_SiteNavBd").width();
            for (
              var n =
                  '<div class="site-nav-menu-bd"><div id="J_SiteMapBd" class="site-nav-menu-panel"' +
                  (e ? ' style="width:' + (e - 2) + 'px"' : "") +
                  ">",
                c = 0,
                u = i.length;
              c < u;
              c++
            ) {
              var l = i[c];
              (n +=
                '<div class="site-nav-sitemap-mod" data-spm="' +
                l.spm +
                '"><div class="site-nav-sitemap-mod-wrap">'),
                (n +=
                  '<div class="site-nav-sitemap-mod-hd"><h4 style="color:' +
                  l.titleColor +
                  '">' +
                  l.title +
                  "</h4></div>"),
                (n += '<div class="site-nav-sitemap-mod-bd"><ul>');
              for (var d = 0, v = l.list.length; d < v; d++) {
                var m = l.list[d];
                (n += '<li style="width:' + Math.floor(99 / l.column) + '%">'),
                  (n +=
                    '<a href="' +
                    m.link +
                    '" ' +
                    (m.cookie
                      ? ' data-cookie="' +
                        m.cookie +
                        '" class="J_SetCookieInSiteMap"'
                      : "") +
                    (m.goldlog ? " " + m.goldlog : "") +
                    ">" +
                    m.name),
                  "true" === m.hot && (n += '<i class="hot"></i>'),
                  "true" === m["new"] && (n += '<i class="new"></i>'),
                  (n += "</a></li>");
              }
              (n += "</ul></div>"), (n += "</div></div>");
            }
            (n += "</div></div>"),
              o(n).appendTo("#J_SiteNavSitemap"),
              o(".J_SetCookieInSiteMap", "#J_SiteNavSitemap").on(
                "click",
                function (t) {
                  var e = o(t.target).attr("data-cookie");
                  e && r.set("thw", e, 30, ".taobao.com");
                }
              );
          }
        },
      });
    })()),
    (r = (function (t) {
      var e = n,
        i = a,
        o = w,
        r = KISSY,
        s = i.getComponentVersion("message") || "3.4.6",
        c = i.getComponentVersion("umpp") || "1.5.4",
        u = i.getCdnHost() + "/tbc/",
        l = i.isLogin()
          ? "??umpp/" + c + "/index-min.js,tmsg/" + s + "/index-min.js"
          : "umpp/" + c + "/index-min.js",
        d = [];
      return (t = {
        status: 0,
        init: function () {
          var t = this;
          e.subscribe("tmsg", "show", function () {
            t.status || ((t.status = 1), t.render());
          }),
            i.isLogin()
              ? o.getScript(u + l, function () {
                  r.use("tbc/umpp/" + c + "/", function () {
                    r.use("tbc/tmsg/" + s + "/", function () {
                      t.render();
                    });
                  });
                })
              : r.use("tbc/umpp/" + c + "/");
        },
        render: function () {
          window.TMsg
            ? window.TMsg.base.renderHover()
            : d.push(window.TMsg.base.renderHover);
        },
        destroy: function () {
          this.status = 0;
        },
      });
    })()),
    (s = (function (t) {
      function e(t) {
        return t ? l.unparam(t) : {};
      }
      function i() {
        this.status = 0;
      }
      var o = KISSY,
        r = C,
        s = M,
        c = w,
        u = _,
        l = f,
        d = n,
        v = a,
        m =
          window.g_config && window.g_config.appId
            ? parseInt(window.g_config.appId)
            : void 0,
        p = "mini-cart",
        g = "menu-empty",
        h = v.getHost(),
        b = v.getComponentVersion("cart") || "0.0.3";
      return (
        (i.prototype.init = function () {
          var t = this;
          return (
            !this.status &&
            ((t.$cart = r.get("#J_MiniCart")),
            (TB.Global.setCartNum = function (e) {
              t.setCartNum(e);
            }),
            this.$cart &&
              (r.addClass(this.$cart, g),
              s.on(
                r.get(".site-nav-menu-hd a", this.$cart),
                "click",
                function () {
                  r.removeClass(t.$cart, "menu-hover"),
                    window.MiniCart && (window.MiniCart._clicked = !1);
                  var e = new Image();
                  e.src = "//gm.mmstat.com/tbcart.1.56&t=" + +new Date();
                }
              ),
              this.update()),
            (this.cartNum = 0),
            window.MiniCart && window.MiniCart.reset && window.MiniCart.reset(),
            void d.subscribe("cart", "show", function () {
              t.renderMenu.call(t);
            }))
          );
        }),
        (i.prototype.update = function () {
          function t(e) {
            if ((e = e || 0)) {
              var a = { keys: "TCART_234_" + e + "_q", t: l.now() };
              c.jsonp(g, a, function (e) {
                if (e) {
                  var n = r >= 0 ? r : d ? 1 : 0;
                  i.setCartNum(e[a.keys]),
                    u.get(
                      "mt",
                      "ci=" + e[a.keys] + "_" + n + (s ? "&" + s : ""),
                      7,
                      h
                    );
                } else d && t();
              });
            } else
              c.getScript(
                p +
                  "callback=TB.Global.setCartNum&t=" +
                  +new Date() +
                  (m ? "&appid=" + m : "")
              );
          }
          var i = this,
            a = e(u.get("mt")),
            n = a && a.ci ? a.ci.split("_") : [void 0, void 0],
            o = parseInt(n[0], 10),
            r = parseInt(n[1], 10),
            s = a ? a.cp : void 0,
            d = v.isLogin(),
            p = "//cart" + h + "/top_cart_quantity.htm?",
            g =
              "//count." +
              (v.isDaily()
                ? "daily.taobao.net"
                : v.isHttps()
                ? "taobao.com"
                : "tbcdn.cn") +
              "/counter6";
          if (((i._OFF = n < 0), d))
            a ? (1 == r ? i.setCartNum(o) : t()) : t(u.get("unb"));
          else {
            var f = u.get("t");
            f ? (o >= 0 ? i.setCartNum(o) : t(f)) : i.setCartNum(0);
          }
        }),
        (i.prototype.setCartNum = function (t) {
          var e = this;
          if (l.isNumber(t) && !e._OFF && e.$cart) {
            var i = e.$cart.getElementsByTagName("a")[0],
              a = 19 !== m,
              n = r.get("strong", i);
            t < 0 &&
              ((e._OFF = t === -1),
              r.removeClass(e.$cart, p),
              window.MiniCart && e.off()),
              e._OFF
                ? r.addClass(e.$cart, "J_SiteNavDisableMenu")
                : (n.innerHTML = t),
              r.addClass(e.$cart, p),
              e._OFF !== !0 || v.isMobile() || (a = !1),
              r[(a ? "remove" : "add") + "Class"](e.$cart, g),
              r.addClass(e.$cart, "menu"),
              (i.id = "mc-menu-hd"),
              window.MiniCart &&
                ((window.MiniCart.cartNum = t),
                (window.MiniCart.isExpired = !0));
          }
        }),
        (i.prototype.off = function () {
          var t = r.query(".menu-bd-panel", "#J_MiniCart");
          return t && t[0]
            ? ((t[0].innerHTML = window.MiniCart._parseMsg(" ")),
              r.addClass(t[0], "mini-cart-closed"),
              !0)
            : (r.addClass(self.$cart, g), !1);
        }),
        (i.prototype.renderMenu = function () {
          var t = this;
          return (
            19 !== m &&
            (t._OFF !== !0 || v.isMobile()
              ? (window.MiniCart
                  ? window.MiniCart.render()
                  : o.ready(function () {
                      c.getScript(
                        v.getCdnHost() + "/tb/mini-cart/" + b + "/index-min.js",
                        function () {
                          o.use("tb/mini-cart", function () {
                            var e = r.get("#J_MiniCartNum"),
                              i = e ? e.innerHTML : -1;
                            return i === -1 || t._OFF === !0
                              ? t.off()
                              : void window.MiniCart.init(i, !0);
                          });
                        }
                      );
                    }),
                !0)
              : (r.addClass(t.$cart, g), !1))
          );
        }),
        (i.prototype.destroy = function () {
          this.status = 0;
        }),
        (t = new i())
      );
    })()),
    (c = (function (t) {
      var e = KISSY,
        i = a;
      return (t = {
        init: function () {
          var t = window.g_config,
            a = t ? t.appId : "",
            n = location.search,
            o = !1,
            r = -1 !== n.indexOf("tstart") || -1 === n.indexOf("tdog");
          if ((t && t.webww === !1 && (o = !0), (a && a != -1) || r)) {
            if (o) return;
            var s = i.getCdnHost() + "/aliww/web.ww/scripts/webww.js";
            window.Light || e.getScript(s);
          }
        },
      });
    })()),
    (u = (function (t) {
      function e() {
        var t = "//tce.alicdn.com/api/data.htm?ids=79618";
        new r({
          dataType: "jsonp",
          url: t,
          cache: !0,
          jsonpCallback: "tce_79618",
          success: function (t) {
            if (t && t[79618]) {
              var e = t[79618].value.data[0];
              "true" === e.status && e.img1 && e.href && a(e);
            }
          },
        });
      }
      function i(t) {
        var e = !1;
        if (t) {
          for (
            var i = location.host, a = t.split(","), n = 0, o = a.length;
            n < o;
            n++
          )
            if (new RegExp(a[n].replace(/\./g, "\\.")).test(i)) {
              e = !0;
              break;
            }
        } else e = !0;
        return e;
      }
      function a(t) {
        var e = o.get("#J_SiteNavWeekend");
        if (!i(t.list)) return !1;
        var a = t.img1,
          n = t.img2 || a,
          r = t.href;
        if (
          ((e.innerHTML = [
            '<div class="menu-hd">',
            '<a href="' + r + '"  data-spm="d3">',
            '<img id="J_WeekendImg" src="' + a + '"/>',
            "</a>",
            "</div>",
          ].join("")),
          o.css(e, "display", "block"),
          a !== n)
        ) {
          var c = o.get("#J_WeekendImg");
          s.subscribe("weekend", "show", function () {
            c.setAttribute("src", n);
          }),
            s.subscribe("weekend", "hide", function () {
              c.setAttribute("src", a);
            });
        }
      }
      var o = C,
        r = w,
        s = n,
        c = f;
      return (t = {
        init: function () {
          var t = o.get("#J_SiteNavBd");
          if (!t) return !1;
          var i = parseFloat(o.css(t, "width"));
          return !(i < 1190) && void c.ready(e);
        },
      });
    })()),
    (l = (function (t) {
      var e = _,
        i = a,
        n = f;
      return (t = {
        init: function () {
          var t,
            a = n.unparam(e.get("mt")),
            o = encodeURIComponent(location.href);
          if (a.np)
            t =
              "//law" +
              i.getHost() +
              "/rulefaces/summon.htm?t=" +
              n.now() +
              "&url=" +
              o;
          else {
            var r = n.unparam(e.get("uc1"));
            if (!r || !r.cbu) return !1;
            t =
              "//reg" +
              i.getHost() +
              "/member/changeNick2B.jhtml?t=" +
              n.now() +
              "&url=" +
              o;
          }
          var s = document.createElement("div");
          s.className = "site-nav-cbu-cover";
          var c = document.createElement("iframe");
          (c.src = t),
            (c.className = "site-nav-cbu-iframe"),
            (c.allowTransparency = "true"),
            document.body.appendChild(s),
            document.body.appendChild(c),
            (document.documentElement.style.overflow = "hidden");
        },
      });
    })()),
    (d = (function (t) {
      var e = M;
      return (t = {
        init: function () {
          function t(a) {
            9 == a.keyCode && i++,
              10 === i &&
                (e.detach(window, "keydown", t),
                window.JSTracker &&
                  JSTracker.send({
                    url: "http://wai.taobao.com",
                    category: location.host + location.pathname,
                    sampling: 1,
                  }));
          }
          var i = 0;
          e.on(window, "keydown", t);
        },
      });
    })()),
    (v = (function (t) {
      var e = b,
        i = e.all,
        o = a,
        r = n;
      return (t = {
        init: function () {
          this.bindEvent(), this.renderMobileSiteNav(), this.renderPadBar();
        },
        bindEvent: function () {
          o.isMobile()
            ? i("body").on("click", function (t) {
                var e = t.target;
                if (
                  i(e).hasClass("J_MultiMenu") ||
                  i(e).parent(".J_MultiMenu")
                ) {
                  var a = i(e).parent(".site-nav-multi-menu") || i(e);
                  if (
                    i(e).parent(".site-nav-menu-hd") &&
                    !a.hasClass("site-nav-menu-hover")
                  ) {
                    if ((t.preventDefault(), a.hasClass("site-nav-menu-hover")))
                      return (
                        a.removeClass("site-nav-menu-hover"),
                        r.hide(a.attr("data-name"))
                      );
                    i(".site-nav-menu-hover", "#J_SiteNav").removeClass(
                      "site-nav-menu-hover"
                    ),
                      a.addClass("site-nav-menu-hover"),
                      r.show(a.attr("data-name"));
                  }
                } else i(".site-nav-menu-hover", "#J_SiteNav").removeClass("site-nav-menu-hover");
              })
            : i(".J_MultiMenu", "#J_SiteNav").on(
                "mouseenter mouseleave",
                function (t) {
                  i(this).hasClass("J_SiteNavDisableMenu") ||
                    ("mouseenter" === t.type
                      ? (i(this).addClass("site-nav-menu-hover"),
                        r.show(this.getAttribute("data-name")))
                      : "mouseleave" === t.type &&
                        (i(this).removeClass("site-nav-menu-hover"),
                        r.hide(this.getAttribute("data-name"))));
                }
              );
        },
        renderMobileSiteNav: function () {
          o.isMobile() && i("#J_SiteNav").addClass("site-nav-at-mobile");
        },
        renderPadBar: function () {
          var t = navigator.userAgent,
            e = /iPad|taobao_apad|Android.+Tablet|GT-N5100|GT-N5110|GT-N5110|GT-N8000|GT-N8010|GT-P3100|GT-P5110|GT-P5210|Lenovo A3000|LG-V500|MediaPad|MI PAD|Nexus 7|P98 3G|Ramosi9|SM-P600|SM-P601|SM-T110|SM-T210|SM-T211|SM-T310|SM-T311|SM-T320|SM-T321|SM-T520|SM-T700|SM-T705|SM-T800|SM-T805|V703|V719|V819|V919|V975|Venue 7|X98 3G/i;
          if (e.test(t)) {
            var i = window.g_config || {},
              a = location.search;
            if (6 !== i.appId && !/[\?&]ttid=/.test(a)) {
              var n = document.getElementById("J_SiteNav"),
                o = document.body.offsetWidth,
                r = n.offsetWidth;
              r < o && (n.style.width = o + "px");
              var s = !/[&\?]pad_preview=1/.test(location.search),
                c = document.createElement("iframe");
              c.setAttribute("width", "100%"),
                c.setAttribute("height", "160px"),
                c.setAttribute(
                  "src",
                  location.protocol +
                    "//" +
                    (s ? "www" : "cdnprepub.tms") +
                    ".taobao.com/market/app/site-nav-banner.php?redirect_url=" +
                    encodeURIComponent(location.href.replace(/#.*$/g, ""))
                ),
                c.setAttribute("frameborder", "0"),
                c.setAttribute("scrolling", "no");
              var u = document.createElement("span");
              u.appendChild(document.createTextNode("\xd7"));
              var l = document.createElement("div");
              (l.className = "tb-global-pad-notice"),
                l.appendChild(u),
                l.appendChild(c),
                (u.onclick = function () {
                  if (((l.style.display = "none"), window.goldlog))
                    try {
                      window.goldlog.record(
                        "/ipadapp.141226.1",
                        "",
                        "url=" +
                          encodeURIComponent(location.host + location.pathname),
                        "H46926338"
                      );
                    } catch (t) {}
                });
              var d = document.getElementById("J_SiteNav");
              d && d.insertBefore(l, document.getElementById("J_SiteNavBd"));
            }
          }
        },
      });
    })()),
    (m = (function (t) {
      function e() {
        u('<div id="J_SiteFooter" style="min-height: 150px"></div>').appendTo(
          "body"
        );
      }
      function i() {
        return !!window.g_config && 6 == window.g_config.appId;
      }
      function n() {
        var t = l.docHeight(),
          e = l.scrollTop(),
          i = l.viewportHeight();
        return e + i + 300 >= t;
      }
      function o() {
        var t,
          e = function i() {
            t && (clearTimeout(t), (t = null)),
              (t = setTimeout(function () {
                (t = null),
                  n()
                    ? (d.detach(window, "scroll resize", i), r())
                    : (t = setTimeout(i, 200));
              }, 200));
          };
        d.on(window, "scroll resize", e);
      }
      function r() {
        s.use("kg/tb-footer", function (t, e) {
          new e({
            needLogo: i(),
            delay: !1,
            root: l.get("#J_SiteFooter"),
          }).render();
        });
      }
      var s = a,
        c = b,
        u = c.all,
        l = C,
        d = M;
      return (t = {
        init: function () {
          e(), n() ? r() : o();
        },
      });
    })()),
    (p = (function (t) {
      function e() {
        var t = s.getTag(),
          e = s.getNick(),
          i =
            '<a href="' +
            b +
            '" target="_top" class="site-nav-login-info-nick">' +
            e +
            "</a>",
          a =
            '<a href="//vip.taobao.com" target="_top" class="site-nav-vip-icon site-nav-vip-icon-' +
            t +
            '"></a>';
        (t === -1 || isNaN(t)) && (a = "");
        var n = i + a;
        s.isMobile() &&
          (n =
            '<img src="' +
            s.getAvatar() +
            '" width="30" height="30" alt="' +
            e +
            '\u7684\u5934\u50cf">');
        var o = c.get(".J_SiteNavTemplateSign", "#J_SiteNav").value;
        c.html(
          "#J_SiteNavLogin",
          d.substitute(o, {
            loginUrl: p,
            logoutUrl: g,
            regUrl: h,
            spaceUrl: b,
            nick: e,
            userInfo: n,
          })
        );
      }
      function i(t) {
        var e = s.getTag(),
          i = s.getNick(),
          a = "\u67e5\u770b\u6211\u7684\u4f1a\u5458\u7279\u6743",
          n = "";
        0 === e || e === -1
          ? ((a = "\u65b0\u624b\u8d2d\u7269\u5165\u95e8\u6559\u5b66"),
            (n =
              '<p><a href="//vip.taobao.com/newuser/newGift.htm" target="_top">\u5feb\u53bb\u9886\u65b0\u4eba\u793c\u91d1!</a></p>'))
          : 7 === e && (a = "\u7acb\u523b\u6fc0\u6d3b\u6211\u7684\u8eab\u4efd");
        var o = "";
        t.data &&
          (t.data.userLevel || 0 === t.data.userLevel) &&
          (o =
            '<a href="//vip.taobao.com/growth_info.htm" target="_top" class="site-nav-vip-icon site-nav-vip-icon-' +
            t.data.userLevel +
            '"></a>'),
          t.data &&
            t.data.apass &&
            (o +=
              '<a href="//apass.taobao.com/" target="_top" class="site-nav-apass-icon"></a>');
        var r = "";
        if (
          !(
            1 === t.code &&
            t.status &&
            t.data &&
            t.data.isLogin &&
            t.data.privileges
          )
        )
          return (r = "site-nav-hidden"), !1;
        var l = t.data.privileges,
          v = l.length,
          m = Math.ceil(v / 4) - 1,
          p = 0,
          f = "";
        d.each(l, function (t) {
          (t.privilegeName = t.privilegeName.replace("\u9636\u68af", "")),
            (f += d.substitute(
              '<a href="{privilegeUrl}" target="_top" title="{privilegeName}"><img src="{privilegeImage}" title="{privilegeName}">{privilegeName}</a>',
              t
            ));
        }),
          v > 4 && (r += "site-nav-medal-arrow-show"),
          (a = ""),
          t.data &&
            t.data.privilegeSize > 0 &&
            (a =
              "\u6211\u53ef\u5c0a\u4eab<b>" +
              t.data.privilegeSize +
              "</b>\u9879\u7279\u6743");
        var w = "",
          _ = l[0];
        if (_ && -999 != _.occurDays) {
          var C;
          (C =
            _.occurDays > 0
              ? '<p class="site-nav-user-privilege-ing"><a href="' +
                _.privilegeUrl +
                '" target="_top">\u6211\u5f53\u524d\u53ef\u4ee5\u4eab\u53d7<b>' +
                _.occurDays +
                "</b>\u5929<b>" +
                _.privilegeName +
                "</b>\uff01</a></p>"
              : _.occurDays < 0
              ? '<p class="site-nav-user-privilege-coming"><a href="' +
                _.privilegeUrl +
                '" target="_top">\u8ddd\u79bb<b>' +
                _.privilegeName +
                "</b>\u5f00\u59cb\u8fd8\u5269<b>" +
                Math.abs(_.occurDays) +
                "</b>\u5929\uff01</a></p>"
              : '<p class="site-nav-user-privilege-ing"><a href="' +
                _.privilegeUrl +
                '" target="_top">\u6211\u8fd8\u53ef\u4eab\u53d7\u6700\u540e\u4e00\u5929<b>' +
                _.privilegeName +
                "</b>\u3002</a></p>"),
            (w = C);
        }
        var M = c.get(".J_SiteNavTemplateUser", "#J_SiteNav").value;
        c.html(
          "#J_SiteNavLoginPanel",
          d.substitute(M, {
            medalCls: r,
            privilegeTip: w,
            newMemberTip: n,
            powerTit: a,
            userMedals: f,
            levelInfo: o,
            logoutUrl: g,
            regUrl: h,
            spaceUrl: b,
            avatarUrl: s.getAvatar(),
            host: s.getHost(),
            nick: i,
          })
        );
        var N = c.get("#J_UserMedalCont"),
          S = c.get("#J_ArrowL"),
          T = c.get("#J_ArrowR"),
          y = function () {
            N.style.left = p * -220 + "px";
          };
        u.on(S, "click", function (t) {
          t.preventDefault(), t.stopPropagation(), p > 0 && ((p -= 1), y());
        }),
          u.on(T, "click", function (t) {
            t.preventDefault(), t.stopPropagation(), p < m && ((p += 1), y());
          });
      }
      function o() {
        var t = s.getHost(),
          e = "//vip" + t + "/ajax/getUserPrivilegeCard.do";
        new l({
          url: e,
          dataType: "jsonp",
          data: { _input_charset: "utf-8", from: "diaoding" },
          scriptCharset: "gbk",
          success: i,
        });
      }
      var r = n,
        s = a,
        c = C,
        u = M,
        l = w,
        d = f,
        v = "https://login" + s.getHost(),
        m = "//login" + s.getHost(),
        p = v + "/member/login.jhtml?f=top",
        g = m + "/member/logout.jhtml?f=top&out=true",
        h =
          "//reg" +
          s.getHost() +
          "/member/new_register.jhtml?from=tbtop&ex_info=&ex_sign=",
        b =
          "//i" +
          s.getHost() +
          "/my_taobao.htm?ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739",
        _ = location.href;
      /^http.*(\/member\/login\.jhtml)$/i.test(_) && (_ = "");
      var N = _;
      return (
        (p +=
          (~p.indexOf("?") ? "&" : "?") +
          "redirectURL=" +
          encodeURIComponent(N)),
        (g +=
          (~g.indexOf("?") ? "&" : "?") +
          "redirectURL=" +
          encodeURIComponent(N)),
        (t = {
          status: 0,
          init: function () {
            this.render();
          },
          render: function () {
            var t = this;
            e(),
              s.isLogin()
                ? (c.replaceClass(
                    "#J_SiteNav",
                    "site-nav-status-logout",
                    "site-nav-status-login"
                  ),
                  c.addClass(
                    "#J_SiteNavLogin",
                    "site-nav-multi-menu J_MultiMenu"
                  ),
                  r.subscribe("login", "show", function () {
                    t.status || ((t.status = 1), o());
                  }))
                : (c.replaceClass(
                    "#J_SiteNav",
                    "site-nav-status-login",
                    "site-nav-status-logout"
                  ),
                  c.removeClass(
                    "#J_SiteNavLogin",
                    "site-nav-multi-menu J_MultiMenu"
                  ));
          },
          destroy: function () {
            this.status = 0;
          },
        })
      );
    })()),
    (g = (function (t) {
      function e() {
        g.init(),
          S.init(),
          w.init(),
          _.init(),
          C.init(),
          N.init(),
          M.init(),
          f.init(),
          T.init(),
          i();
      }
      function i() {
        var t = J(document);
        t.delegate("mouseenter", ".J_Tmsg_Basic", function e(i) {
          h.init(), t.undelegate("mouseenter", ".J_Tmsg_Basic", e);
        });
      }
      var n = a,
        g = p,
        f = o,
        h = r,
        w = s,
        _ = c,
        C = u,
        M = l,
        N = d,
        S = v,
        T = m,
        y = b,
        J = y.all;
      return e(), (t = n);
    })()),
    (i.exports = g);
});
/*
page: http://www.jiyoujia.com/
url: https://g.alicdn.com/??kg/global-util/1.0.5/index-min.js,tb/tracker/4.0.1/p/index/index.js,kg/tb-nav/2.1.1/index-min.js
*/
