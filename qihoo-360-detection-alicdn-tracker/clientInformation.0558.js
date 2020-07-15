KISSY.add("tbc/tracker/1.0.2/mods/getSPM", function () {
  for (
    var a = document.getElementsByTagName("meta"), b = [], c = 0;
    c < a.length;
    c++
  ) {
    var d = a[c];
    d &&
      d.name &&
      ("data-spm" == d.name || "spm-id" == d.name) &&
      b.push(d.content);
  }
  return (
    document.body &&
      document.body.getAttribute("data-spm") &&
      b.push(document.body.getAttribute("data-spm")),
    (b = b.length ? b.join(".") : null),
    b && -1 == b.indexOf(".") && (b += ".0"),
    b
  );
}),
  KISSY.add("tbc/tracker/1.0.2/mods/getURL", function () {
    return "";
  }),
  KISSY.add("tbc/tracker/1.0.2/mods/getScreen", function () {
    return screen.width + "x" + screen.height;
  }),
  KISSY.add("tbc/tracker/1.0.2/mods/getUA", function () {
    var a = (function () {
      try {
        if ("undefined" != typeof window.scrollMaxX) return "";
        var a = "track" in document.createElement("track"),
          b =
            window.chrome && window.chrome.webstore
              ? Object.keys(window.chrome.webstore).length
              : 0;
        return window.clientInformation &&
          window.clientInformation.languages &&
          window.clientInformation.languages.length > 2
          ? ""
          : a
          ? b > 1
            ? " QIHU 360 EE"
            : " QIHU 360 SE"
          : "";
      } catch (c) {
        return "";
      }
    })();
    return navigator.userAgent + a;
  }),
  KISSY.add("tbc/tracker/1.0.2/mods/parseStack", function () {
    function a(a, b, c, d) {
      (this.funcName = a), (this.file = b), (this.line = c), (this.col = d);
    }
    a.prototype.toString = function () {
      return [this.funcName, this.file, this.line, this.col].join("|");
    };
    var b = /\S+\:\d+/,
      c = /\s+at /,
      d = {
        parse: function (a) {
          return a
            ? "undefined" != typeof a.stacktrace ||
              "undefined" != typeof a["opera#sourceloc"]
              ? this.parseOpera(a)
              : a.stack && a.stack.match(c)
              ? this.parseV8OrIE(a)
              : a.stack && a.stack.match(b)
              ? this.parseFFOrSafari(a)
              : ""
            : "";
        },
        extractLocation: function (a) {
          if (-1 === a.indexOf(":")) return [a];
          var b = a.replace(/[\(\)\s]/g, "").split(":"),
            c = b.pop(),
            d = b[b.length - 1];
          if (!isNaN(parseFloat(d)) && isFinite(d)) {
            var e = b.pop();
            return [b.join(":"), e, c];
          }
          return [b.join(":"), c, void 0];
        },
        parseV8OrIE: function (b) {
          return b.stack
            .split("\n")
            .slice(1)
            .map(function (b) {
              var c = b.replace(/^\s+/, "").split(/\s+/).slice(1),
                d = this.extractLocation(c.pop()),
                e = c[0] && "Anonymous" !== c[0] ? c[0] : void 0;
              return new a(e, void 0, d[0], d[1], d[2]);
            }, this);
        },
        parseFFOrSafari: function (c) {
          return c.stack
            .split("\n")
            .filter(function (a) {
              return !!a.match(b);
            }, this)
            .map(function (b) {
              var c = b.split("@"),
                d = this.extractLocation(c.pop()),
                e = c.shift() || void 0;
              return new a(e, void 0, d[0], d[1], d[2]);
            }, this);
        },
        parseOpera: function (a) {
          return !a.stacktrace ||
            (a.message.indexOf("\n") > -1 &&
              a.message.split("\n").length > a.stacktrace.split("\n").length)
            ? this.parseOpera9(a)
            : a.stack
            ? this.parseOpera11(a)
            : this.parseOpera10(a);
        },
        parseOpera9: function (b) {
          for (
            var c = /Line (\d+).*script (?:in )?(\S+)/i,
              d = b.message.split("\n"),
              e = [],
              f = 2,
              g = d.length;
            g > f;
            f += 2
          ) {
            var h = c.exec(d[f]);
            h && e.push(new a(void 0, void 0, h[2], h[1]));
          }
          return e;
        },
        parseOpera10: function (b) {
          for (
            var c = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
              d = b.stacktrace.split("\n"),
              e = [],
              f = 0,
              g = d.length;
            g > f;
            f += 2
          ) {
            var h = c.exec(d[f]);
            h && e.push(new a(h[3] || void 0, void 0, h[2], h[1]));
          }
          return e;
        },
        parseOpera11: function (c) {
          return c.stack
            .split("\n")
            .filter(function (a) {
              return !!a.match(b) && !a.match(/^Error created at/);
            }, this)
            .map(function (b) {
              var c,
                d = b.split("@"),
                e = this.extractLocation(d.pop()),
                f = d.shift() || "",
                g =
                  f
                    .replace(/<anonymous function(: (\w+))?>/, "$2")
                    .replace(/\([^\)]*\)/g, "") || void 0;
              f.match(/\(([^\)]*)\)/) &&
                (c = f.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
              var h =
                void 0 === c || "[arguments not available]" === c
                  ? void 0
                  : c.split(",");
              return new a(g, h, e[0], e[1], e[2]);
            }, this);
        },
      };
    return function (a) {
      var b = d.parse(a);
      return b;
    };
  }),
  KISSY.add(
    "tbc/tracker/1.0.2/mods/parseException",
    function (a, b) {
      return function (a) {
        var c = {
          msg: a.message,
          file: "",
          line: "",
          col: "",
          stack: b(a).toString(),
        };
        return c;
      };
    },
    { requires: ["./parseStack"] }
  ),
  KISSY.add("tbc/tracker/1.0.2/mods/makeRand", function () {
    var a = function () {
      return +new Date() + ".r" + Math.floor(1e3 * Math.random());
    };
    return a;
  }),
  KISSY.add(
    "tbc/tracker/1.0.2/mods/sendImage",
    function (a, b) {
      var c = b;
      return function (a) {
        var b = window,
          d = "jsFeImage_" + c(),
          e = (b[d] = new Image());
        (e.onload = e.onerror = function () {
          b[d] = null;
        }),
          (e.src = a);
      };
    },
    { requires: ["./makeRand"] }
  ),
  KISSY.add("tbc/tracker/1.0.2/mods/logServer", function () {
    return "https:" == location.protocol
      ? "https://log.mmstat.com/jstracker1?"
      : "http://gm.mmstat.com/jstracker1?";
  }),
  KISSY.add(
    "tbc/tracker/1.0.2/mods/push",
    function (a, b, c, d, e) {
      return function (f) {
        try {
          if (!f) return;
          !a.isPlainObject(f) && f.stack && (f = b(f)),
            (f = a.merge(f, this._config)),
            a.log("Jstracker:", f);
          var g = e;
          f.t = g();
          for (var h in f)
            ("" === f[h] || null === f[h] || void 0 === f[h]) && delete f[h];
          var i = a.param(f),
            j = f.sampling;
          1 > j &&
            ((j = 9999999),
            console &&
              console.warn(
                "JSTracker2 sampling is invalid, please set a integer above 1!"
              )),
            !this._debug && Math.random() * j > 1
              ? a.log("JSTracker sampling reach " + i)
              : this._pushed_num < 10 && (this._pushed_num++, c(d + i));
        } catch (k) {
          a.log("JStracker Err:" + k);
        }
      };
    },
    {
      requires: [
        "./parseException",
        "./sendImage",
        "./logServer",
        "./makeRand",
      ],
    }
  ),
  KISSY.add(
    "tbc/tracker/1.0.2/jstracker",
    function (a, b, c, d, e, f) {
      function g(f) {
        var g = {
          msg: "",
          file: "",
          line: "",
          col: "",
          stack: "",
          spm: "",
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
        };
        (this.version = "1.0.2"),
          (g = {
            v: this.version,
            spm: b,
            url: c,
            ua: e,
            screen: d,
            sampling: 100,
          }),
          (this._debug = -1 != location.href.indexOf("jt_debug")),
          (this._pushed_num = 0),
          (this._config = a.merge(g, f));
      }
      return (g.prototype.push = f), g;
    },
    {
      requires: [
        "./mods/getSPM",
        "./mods/getURL",
        "./mods/getScreen",
        "./mods/getUA",
        "./mods/push",
      ],
    }
  ),
  KISSY.add("tbc/tracker/1.0.2/mods/getPerf", function () {
    return function () {
      var a = {},
        b = window;
      if (b.performance) {
        var c = b.performance.timing;
        (a.dns = c.domainLookupEnd - c.domainLookupStart),
          (a.con = c.connectEnd - c.connectStart),
          (a.req = c.responseStart - c.requestStart),
          (a.res = c.responseEnd - c.responseStart),
          (a.dcl = c.domContentLoadedEventEnd - c.domLoading),
          (a.onload = c.loadEventStart - c.domLoading),
          (a.type = window.performance.navigation.type);
      }
      return (a.msg = "__PV"), a;
    };
  }),
  KISSY.add(
    "tbc/tracker/1.0.2/mods/handleError",
    function (a, b) {
      return function () {
        var c = {
          msg: arguments[0],
          file: arguments[1],
          line: arguments[2],
          col: arguments[3],
          stack: b(arguments[4]).toString(),
        };
        return a.log(arguments), c;
      };
    },
    { requires: ["./parseStack"] }
  ),
  KISSY.add(
    "tbc/tracker/1.0.2/index",
    function (a, b, c, d) {
      try {
        if (!window) return;
        if (window.JSTracker2 && window.JSTracker2.version) return;
        var e = [];
        a.isArray(window.JSTracker2) && (e = window.JSTracker2);
        var f;
        window.g_config &&
          window.g_config.jstracker2 &&
          (f = window.g_config.jstracker2),
          (window.JSTracker2 = new b(f));
        for (var g = 0; g < e.length; g++) window.JSTracker2.push(e[g]);
        if (!window.JSTracker) {
          window.JSTracker = {};
          for (
            var h = ["config", "log", "info", "debug", "warn"], i = 0;
            i < h.length;
            i++
          )
            window.JSTracker[h[i]] = function () {
              window.console &&
                console.warn(
                  "JStracker: The method is declared, Please use push instead!"
                );
            };
          (window.JSTracker.error = function (a) {
            window.JSTracker2.push({ msg: a }),
              window.console &&
                console.warn(
                  "JStracker: errorThe method is declared, Please use push instead!"
                );
          }),
            (window.JSTracker.send = function (a) {
              window.JSTracker2.push(a),
                window.console &&
                  console.warn(
                    "JStracker: sendThe method is declared, Please use push instead!"
                  );
            });
        }
        if (window.performance) {
          var j = window.onload;
          window.onload = function () {
            try {
              if (
                (j && j.apply(window, arguments),
                100 * Math.random() < 1 || window.JSTracker2._debug)
              ) {
                var b = c();
                window.JSTracker2.push(b);
              }
            } catch (d) {
              a.log("JSTracker2 err", d);
            }
          };
        }
        var k = window.onerror;
        window.onerror = function () {
          try {
            k && k.apply(window, arguments);
            var b = d.apply(window, arguments);
            window.JSTracker2.push(b);
          } catch (c) {
            a.log("JSTracker2 err", c);
          }
        };
      } catch (l) {
        a.log("JStracker Index Err:" + l);
      }
    },
    { requires: ["./jstracker", "./mods/getPerf", "./mods/handleError"] }
  );
/*
page: http://www.hao4321.com/
url: http://g.alicdn.com/tbc/??tracker/1.0.2/index-min.js?t=20130621173819
*/
