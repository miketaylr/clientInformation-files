!(function () {
  var _mods_util_js = (function () {
      return {
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
      };
    })(),
    _mods_makeRand_js = (function () {
      var e = function () {
        return +new Date() + ".r" + Math.floor(1e3 * Math.random());
      };
      return e;
    })(),
    _mods_parseStack_js = (function () {
      function e(e, t, n, r) {
        (this.funcName = e), (this.file = t), (this.line = n), (this.col = r);
      }
      e.prototype.toString = function () {
        return [this.funcName, this.file, this.line, this.col].join("|");
      };
      var t = /\S+\:\d+/,
        n = /\s+at /,
        r = {
          parse: function (e) {
            return e
              ? "undefined" != typeof e.stacktrace ||
                "undefined" != typeof e["opera#sourceloc"]
                ? this.parseOpera(e)
                : e.stack && e.stack.match(n)
                ? this.parseV8OrIE(e)
                : e.stack && e.stack.match(t)
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
              var o = t.pop();
              return [t.join(":"), o, n];
            }
            return [t.join(":"), n, void 0];
          },
          parseV8OrIE: function (t) {
            return t.stack
              .split("\n")
              .slice(1)
              .map(function (t) {
                var n = t.replace(/^\s+/, "").split(/\s+/).slice(1),
                  r = this.extractLocation(n.pop()),
                  o = n[0] && "Anonymous" !== n[0] ? n[0] : void 0;
                return new e(o, void 0, r[0], r[1], r[2]);
              }, this);
          },
          parseFFOrSafari: function (n) {
            return n.stack
              .split("\n")
              .filter(function (e) {
                return !!e.match(t);
              }, this)
              .map(function (t) {
                var n = t.split("@"),
                  r = this.extractLocation(n.pop()),
                  o = n.shift() || void 0;
                return new e(o, void 0, r[0], r[1], r[2]);
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
          parseOpera9: function (t) {
            for (
              var n = /Line (\d+).*script (?:in )?(\S+)/i,
                r = t.message.split("\n"),
                o = [],
                i = 2,
                a = r.length;
              a > i;
              i += 2
            ) {
              var s = n.exec(r[i]);
              s && o.push(new e(void 0, void 0, s[2], s[1]));
            }
            return o;
          },
          parseOpera10: function (t) {
            for (
              var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                r = t.stacktrace.split("\n"),
                o = [],
                i = 0,
                a = r.length;
              a > i;
              i += 2
            ) {
              var s = n.exec(r[i]);
              s && o.push(new e(s[3] || void 0, void 0, s[2], s[1]));
            }
            return o;
          },
          parseOpera11: function (n) {
            return n.stack
              .split("\n")
              .filter(function (e) {
                return !!e.match(t) && !e.match(/^Error created at/);
              }, this)
              .map(function (t) {
                var n,
                  r = t.split("@"),
                  o = this.extractLocation(r.pop()),
                  i = r.shift() || "",
                  a =
                    i
                      .replace(/<anonymous function(: (\w+))?>/, "$2")
                      .replace(/\([^\)]*\)/g, "") || void 0;
                i.match(/\(([^\)]*)\)/) &&
                  (n = i.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                var s =
                  void 0 === n || "[arguments not available]" === n
                    ? void 0
                    : n.split(",");
                return new e(a, s, o[0], o[1], o[2]);
              }, this);
          },
        };
      return function (e) {
        var t = r.parse(e);
        return t;
      };
    })(),
    _mods_timing_js = (function () {
      var e = _mods_util_js;
      return function () {
        var t =
            window.performance ||
            window.webkitPerformance ||
            window.msPerformance ||
            window.mozPerformance,
          n = {};
        if (t) {
          var r = t.timing;
          if (r) {
            if (void 0 === n.firstPaint) {
              var o = -1;
              window.chrome && window.chrome.loadTimes
                ? ((o = 1e3 * window.chrome.loadTimes().firstPaintTime),
                  (o -= 1e3 * window.chrome.loadTimes().startLoadTime))
                : "number" == typeof window.performance.timing.msFirstPaint &&
                  ((o = window.performance.timing.msFirstPaint),
                  (n.firstPaint =
                    o - window.performance.timing.navigationStart)),
                (n.firstPaint = Math.floor(o));
            }
            (n.load = r.loadEventEnd - r.fetchStart),
              (n.domReady = r.domComplete - r.domInteractive),
              (n.readyStart = r.fetchStart - r.navigationStart),
              (n.redirect = r.redirectEnd - r.redirectStart),
              (n.appcache = r.domainLookupStart - r.fetchStart),
              (n.unloadEvent = r.unloadEventEnd - r.unloadEventStart),
              (n.lookupDomain = r.domainLookupEnd - r.domainLookupStart),
              (n.connect = r.connectEnd - r.connectStart),
              (n.request = r.responseEnd - r.requestStart),
              (n.initDomTree = r.domInteractive - r.responseEnd),
              (n.loadEvent = r.loadEventEnd - r.loadEventStart);
          }
        }
        if (
          (this._windVanePerfData && (n = e.merge(n, this._windVanePerfData)),
          this._cpu)
        ) {
          this._cpu.pause(),
            (n.busy = Math.floor(this._cpu.getTotalSize(0, 15e3)));
          for (
            var i = this._cpu.data.dataArray, a = -1, s = 0, c = 0;
            c < i.length &&
            (i[c] <= 0.1 ? a++ : ((s = c + 1), (a = 0)), !(a >= 5));
            c++
          );
          (n.avail = Math.floor(
            this._cpu.data.timeArray[s] - this._cpu.data.timeArray[0]
          )),
            (n.busyPer = Math.floor(
              (this._cpu.getOverPerAmount(1, 0, 15e3) /
                this._cpu.getOverPerAmount(0, 0, 15e3)) *
                100
            )),
            this._debug && window.console && window.console.log(n);
        }
        return n;
      };
    })(),
    _mods_logServer_js = (function () {
      return "//gm.mmstat.com/jstracker.3?";
    })(),
    _mods_sendImage_js = (function () {
      var e = _mods_makeRand_js;
      return function (t) {
        var n = window,
          r = "jsFeImage_" + e(),
          o = (n[r] = new Image());
        (o.onload = o.onerror = function () {
          n[r] = null;
        }),
          (o.src = t);
      };
    })(),
    _mods_parseException_js = (function () {
      var e = _mods_parseStack_js;
      return function (t) {
        var n = {
          msg: t.message,
          file: "",
          line: "",
          col: "",
          stack: e(t).toString(),
        };
        return n;
      };
    })(),
    _mods_cpu_js = (function () {
      return (
        !(function (e) {
          function t() {
            (this.conf = {
              log: !1,
              consoleUI: !1,
              delay: 100,
              stat: !0,
              ui: !1,
            }),
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
                  if (((r = r > 200 ? 200 : r), t.resumeFlag))
                    t.resumeFlag = !1;
                  else for (var o = 0; r > o; o++) t.logPercent(e);
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
              var o = n.time_line.length;
              (r =
                1 == n.time_line.length
                  ? n.averageTime
                  : e - n.time_line[o - 2]),
                r < n.averageTime && (r = n.averageTime);
              var i = (r - n.averageTime) / n.averageTime;
              return (
                o >= 2
                  ? ((n.totalSize +=
                      ((n.per_line[o - 1] + n.per_line[o - 2]) *
                        (n.time_line[o - 1] - n.time_line[o - 2])) /
                      2),
                    n.size_line.push(n.totalSize))
                  : n.size_line.push(0),
                n.per_line.length > 2 &&
                  (n.per_line.shift(), n.time_line.shift()),
                i
              );
            }),
            (t.prototype.drawUIByConsole = function (e) {
              for (var t = Math.round(10 * e), n = "â", r = t; r--; ) n += "â";
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
                  o = 0,
                  i = r - 1;
                i >= 0 && ((o += t[i]), n++, !(n >= 3));
                i--
              );
              return 0 == n ? 0 : o / n;
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
                  o = this.getTimeIndex(t),
                  i = this.getTimeIndex(n, 1),
                  a = r.dataArray,
                  s = 0,
                  c = o;
                i > c;
                c++
              )
                "undefined" != typeof a[c] && a[c] >= e && s++;
              return s;
            }),
            (t.prototype.getTotalSize = function (e, t) {
              var n = this.data,
                r = this.getTimeIndex(e),
                o = this.getTimeIndex(t, !0),
                i = n.size_line[o];
              i || (i = n.size_line[n.size_line.length - 1]);
              var a = i - n.size_line[r];
              return a;
            }),
            (e.cpu = t);
        })(window),
        cpu
      );
    })(),
    _mods_getPerf_js = (function () {
      var e = _mods_timing_js,
        t = _mods_util_js;
      return function () {
        var n = {},
          r = window;
        if (r.performance) {
          var o = r.performance.timing;
          (n.dns = o.domainLookupEnd - o.domainLookupStart),
            (n.con = o.connectEnd - o.connectStart),
            (n.req = o.responseStart - o.requestStart),
            (n.res = o.responseEnd - o.responseStart),
            (n.dcl = o.domContentLoadedEventEnd - o.domLoading),
            (n.onload = o.loadEventStart - o.domLoading),
            (n.type = window.performance.navigation.type),
            (n.sampling = 100);
        }
        n.msg = "__PV";
        var i = e.call(this);
        return (n.stack = t.stringify(i)), n;
      };
    })(),
    _mods_getKISSYVersion_js = (function () {
      function e() {
        try {
          return KISSY.version;
        } catch (e) {
          return null;
        }
      }
      return e();
    })(),
    _mods_getNick_js = (function () {
      var e = null;
      try {
        var t =
          /_nk_=([^;]+)/.exec(document.cookie) ||
          /_w_tb_nick=([^;]+)/.exec(document.cookie) ||
          /lgc=([^;]+)/.exec(document.cookie);
        t && (e = decodeURIComponent(t[1]));
      } catch (n) {}
      return e;
    })(),
    _mods_getScreen_js = (function () {
      return screen.width + "x" + screen.height;
    })(),
    _mods_getUA_js = (function () {
      var e = (function () {
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
      return navigator.userAgent + e;
    })(),
    _mods_push_js = (function () {
      var e = _mods_parseException_js,
        t = _mods_sendImage_js,
        n = _mods_logServer_js,
        r = _mods_makeRand_js,
        o = _mods_util_js;
      return function (i) {
        try {
          if (!i) return;
          (i && i.constructor === Object) || (i = e(i)),
            (i = o.merge(i, this._config));
          var a = r;
          i.t = a();
          for (var s in i)
            ("" === i[s] || null === i[s] || void 0 === i[s]) && delete i[s];
          var c = o.stringify(i),
            u = i.sampling;
          1 > u &&
            ((u = 9999999),
            "undefined" != typeof console &&
              console.warn &&
              console.warn(
                "JSTracker2 sampling is invalid, please set a integer above 1!"
              )),
            ("__PV" !== i.msg && !this._debug && Math.random() * u > 1) ||
              (this._pushed_num < 10 &&
                (this._pushed_num++,
                this._debug && window.console && window.console.log(i),
                t(n + c)));
        } catch (d) {}
      };
    })(),
    _mods_sendPerf_js = (function () {
      var e = _mods_getPerf_js,
        t = _mods_cpu_js;
      return function () {
        var n = this;
        (!this._debug && 100 * Math.random() > 1) ||
          ((this._cpu = new t()),
          window.WindVane &&
            window.WindVane.call &&
            navigator.userAgent.indexOf("iPhone") > -1 &&
            window.WindVane.call(
              "WVDevelopTool",
              "getLocPerformanceData",
              {},
              function (e) {
                try {
                  n._windVanePerfData = {
                    w_dns: e.dns,
                    w_c: e.c,
                    w_scs: e.scs,
                    w_rps: e.rps,
                    w_rpe: e.rpe,
                    w_dl: e.dl,
                    w_dc: e.dc,
                    w_lee: e.lee,
                  };
                } catch (e) {}
              }
            ),
          setTimeout(function () {
            try {
              var t = e.call(n);
              window.JSTracker2.push(t);
            } catch (r) {}
          }, 2e4));
      };
    })(),
    _mods_jstracker_js = (function () {
      function e(e) {
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
        (this.version = "o3.0.7"),
          (t = {
            v: this.version,
            ua: n,
            screen: r,
            sampling: 100,
            nick: o,
            ki: i,
          }),
          (this._debug = -1 != location.href.indexOf("jt_debug")),
          (this._pushed_num = 0),
          (this._config = a.merge(t, e));
      }
      var t = _mods_push_js,
        n = _mods_getUA_js,
        r = _mods_getScreen_js,
        o = _mods_getNick_js,
        i = _mods_getKISSYVersion_js,
        a = _mods_util_js;
      return (e.prototype.push = t), e;
    })(),
    _mods_handleError_js = (function () {
      var e = _mods_parseStack_js;
      return function () {
        var t = {
          msg: arguments[0],
          file: arguments[1],
          line: arguments[2],
          col: arguments[3],
          stack: e(arguments[4]).toString(),
        };
        return t;
      };
    })(),
    _mods_pageTrack_js = (function () {
      var e = _mods_handleError_js,
        t = _mods_jstracker_js,
        n = _mods_sendPerf_js;
      return function () {
        try {
          if (!window) return;
          if (window.JSTracker2 && window.JSTracker2.version) return;
          var r = [];
          window.JSTracker2 &&
            window.JSTracker2.length > 0 &&
            (r = window.JSTracker2);
          var o;
          window.g_config &&
            window.g_config.jstracker2 &&
            (o = window.g_config.jstracker2),
            (window.JSTracker2 = new t(o));
          for (var i = 0; i < r.length; i++) window.JSTracker2.push(r[i]);
          n.call(JSTracker2);
          var a = window.onerror;
          window.onerror = function () {
            try {
              a && a.apply(window, arguments);
              var t = e.apply(window, arguments);
              window.JSTracker2.push(t);
            } catch (n) {}
          };
        } catch (s) {}
      };
    })(),
    Tracker = (function () {
      "use strict";
      var e = _mods_pageTrack_js,
        t = _mods_jstracker_js;
      return e(), t;
    })();
})();
/*
page: http://www.wangfujing.com/
url: https://g.alicdn.com/tb/tracker/3.0.7/index.js
*/
