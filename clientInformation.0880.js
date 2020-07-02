KISSY.add("tbc/tracker/1.1.3/mods/onload", function (a) {
  var b = function (a) {
    a &&
      (/complete/.test(document.readyState) && document.body
        ? setTimeout(a, 0)
        : document.addEventListener
        ? window.addEventListener("load", a, !1)
        : window.attachEvent("onload", a));
  };
  return b;
}),
  KISSY.add("tbc/tracker/1.1.3/mods/parseStack", function (a) {
    function b(a, b, c, d) {
      (this.funcName = a), (this.file = b), (this.line = c), (this.col = d);
    }
    b.prototype.toString = function () {
      return [this.funcName, this.file, this.line, this.col].join("|");
    };
    var c = /\S+\:\d+/,
      d = /\s+at /,
      e = {
        parse: function (a) {
          return a
            ? "undefined" != typeof a.stacktrace ||
              "undefined" != typeof a["opera#sourceloc"]
              ? this.parseOpera(a)
              : a.stack && a.stack.match(d)
              ? this.parseV8OrIE(a)
              : a.stack && a.stack.match(c)
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
        parseV8OrIE: function (a) {
          return a.stack
            .split("\n")
            .slice(1)
            .map(function (a) {
              var c = a.replace(/^\s+/, "").split(/\s+/).slice(1),
                d = this.extractLocation(c.pop()),
                e = c[0] && "Anonymous" !== c[0] ? c[0] : void 0;
              return new b(e, void 0, d[0], d[1], d[2]);
            }, this);
        },
        parseFFOrSafari: function (a) {
          return a.stack
            .split("\n")
            .filter(function (a) {
              return !!a.match(c);
            }, this)
            .map(function (a) {
              var c = a.split("@"),
                d = this.extractLocation(c.pop()),
                e = c.shift() || void 0;
              return new b(e, void 0, d[0], d[1], d[2]);
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
        parseOpera9: function (a) {
          for (
            var c = /Line (\d+).*script (?:in )?(\S+)/i,
              d = a.message.split("\n"),
              e = [],
              f = 2,
              g = d.length;
            g > f;
            f += 2
          ) {
            var h = c.exec(d[f]);
            h && e.push(new b(void 0, void 0, h[2], h[1]));
          }
          return e;
        },
        parseOpera10: function (a) {
          for (
            var c = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
              d = a.stacktrace.split("\n"),
              e = [],
              f = 0,
              g = d.length;
            g > f;
            f += 2
          ) {
            var h = c.exec(d[f]);
            h && e.push(new b(h[3] || void 0, void 0, h[2], h[1]));
          }
          return e;
        },
        parseOpera11: function (a) {
          return a.stack
            .split("\n")
            .filter(function (a) {
              return !!a.match(c) && !a.match(/^Error created at/);
            }, this)
            .map(function (a) {
              var c,
                d = a.split("@"),
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
              return new b(g, h, e[0], e[1], e[2]);
            }, this);
        },
      };
    return function (a) {
      var b = e.parse(a);
      return b;
    };
  }),
  KISSY.add(
    "tbc/tracker/1.1.3/mods/handleError",
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
  KISSY.add("tbc/tracker/1.1.3/mods/getSPM", function (a) {
    for (
      var b = document.getElementsByTagName("meta"), c = [], d = 0;
      d < b.length;
      d++
    ) {
      var e = b[d];
      e &&
        e.name &&
        ("data-spm" == e.name || "spm-id" == e.name) &&
        c.push(e.content);
    }
    return (
      document.body &&
        document.body.getAttribute("data-spm") &&
        c.push(document.body.getAttribute("data-spm")),
      (c = c.length ? c.join(".") : null),
      c && -1 == c.indexOf(".") && (c += ".0"),
      c
    );
  }),
  KISSY.add("tbc/tracker/1.1.3/mods/getURL", function (a) {
    return "";
  }),
  KISSY.add("tbc/tracker/1.1.3/mods/getScreen", function (a) {
    return screen.width + "x" + screen.height;
  }),
  KISSY.add("tbc/tracker/1.1.3/mods/getUA", function (a) {
    var b = (function () {
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
    return navigator.userAgent + b;
  }),
  KISSY.add(
    "tbc/tracker/1.1.3/mods/parseException",
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
  KISSY.add("tbc/tracker/1.1.3/mods/makeRand", function (a) {
    var b = function () {
      return +new Date() + ".r" + Math.floor(1e3 * Math.random());
    };
    return b;
  }),
  KISSY.add(
    "tbc/tracker/1.1.3/mods/sendImage",
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
  KISSY.add("tbc/tracker/1.1.3/mods/logServer", function (a) {
    return "//gm.mmstat.com/jstracker.3?";
  }),
  KISSY.add(
    "tbc/tracker/1.1.3/mods/push",
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
            "undefined" != typeof console &&
              console.warn &&
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
  KISSY.add("tbc/tracker/1.1.3/mods/getNick", function (a) {
    try {
      return encodeURIComponent(TB.Global.util.getNick());
    } catch (b) {
      return null;
    }
  }),
  KISSY.add("tbc/tracker/1.1.3/mods/getKISSYVersion", function (a) {
    try {
      return KISSY.version;
    } catch (b) {
      return null;
    }
  }),
  KISSY.add(
    "tbc/tracker/1.1.3/mods/jstracker",
    function (a, b, c, d, e, f, g, h) {
      function i(f) {
        var i = {
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
          ki: "",
        };
        (this.version = "1.1.3"),
          (i = {
            v: this.version,
            spm: b,
            url: c,
            ua: e,
            screen: d,
            sampling: 100,
            nick: g,
            ki: h,
          }),
          (this._debug = -1 != location.href.indexOf("jt_debug")),
          (this._pushed_num = 0),
          (this._config = a.merge(i, f));
      }
      return (i.prototype.push = f), i;
    },
    {
      requires: [
        "./getSPM",
        "./getURL",
        "./getScreen",
        "./getUA",
        "./push",
        "./getNick",
        "./getKISSYVersion",
      ],
    }
  ),
  KISSY.add("tbc/tracker/1.1.3/mods/getPerf", function (a) {
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
          (a.type = window.performance.navigation.type),
          (a.sampling = 100);
      }
      return (a.msg = "__PV"), a;
    };
  }),
  KISSY.add(
    "tbc/tracker/1.1.3/mods/pageTrack",
    function (a, b, c, d, e) {
      return function () {
        try {
          if (!window) return;
          if (window.JSTracker2 && window.JSTracker2.version) return;
          var f = [];
          a.isArray(window.JSTracker2) && (f = window.JSTracker2);
          var g;
          window.g_config &&
            window.g_config.jstracker2 &&
            (g = window.g_config.jstracker2),
            (window.JSTracker2 = new d(g));
          for (var h = 0; h < f.length; h++) window.JSTracker2.push(f[h]);
          window.performance &&
            b(function () {
              try {
                var b = e();
                window.JSTracker2.push(b);
              } catch (c) {
                a.log("JSTracker2 err", c);
              }
            });
          var i = window.onerror;
          window.onerror = function () {
            try {
              i && i.apply(window, arguments);
              var b = c.apply(window, arguments);
              window.JSTracker2.push(b);
            } catch (d) {
              a.log("JSTracker2 err", d);
            }
          };
        } catch (j) {
          a.log("JStracker Index Err:" + j);
        }
      };
    },
    { requires: ["./onload", "./handleError", "./jstracker", "./getPerf"] }
  ),
  KISSY.add(
    "tbc/tracker/1.1.3/index",
    function (a, b, c) {
      return (c.pageTrack = b), c;
    },
    { requires: ["./mods/pageTrack", "./mods/jstracker"] }
  );
/*
page: http://www.taobao.com/
url: https://g.alicdn.com/tbc/??tracker/1.1.3/index-min.js
*/
