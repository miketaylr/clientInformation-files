(function () {
  var t = {},
    B = {};
  (function (f) {
    f.utils = {};
    (function () {
      function h() {
        return f.helpers.Promise.race([
          f.helpers.Promise.timeout(1e3).then(function () {
            throw Error(
              "Failed to receive sessionID from the server, using locally generated one"
            );
          }),
          f.http
            .jsonp(k + "/oxwdsq", "jsonp_oxwdsq")
            .then(function (a) {
              if (!a || "object" !== typeof a || !a.id)
                throw Error(
                  "Session received from server is not an object or doesn't contain an 'id' property!"
                );
              p || (c.id = a.id);
              a.e && (c.expires = +a.e || c.expires);
              a.t && (c.period = +a.t || c.period);
              return c;
            })
            .then(a),
        ]).fail(m);
      }
      function e() {
        var a = f.helpers.cookies.get("oxxfgh");
        return !a ||
          ((a = a.split("#")),
          !a[0] || isNaN(+a[1]) || isNaN(+a[2]) || isNaN(+a[3]))
          ? null
          : ((c.id = a[0]),
            (c.loginCount = +a[1]),
            (c.expires = +a[2]),
            (c.period = +a[3]),
            c);
      }
      function a() {
        var a = c.id + "#" + c.loginCount + "#" + c.expires + "#" + c.period,
          d = new Date();
        d.setTime(d.getTime() + c.expires);
        f.helpers.cookies.set("oxxfgh", a, { expires: d, domain: g });
        return c;
      }
      function m() {
        if (c.id) return c;
        var g = f.utils.uuid.generate();
        c.id = "L!" + g;
        a();
        return c;
      }
      var c = { id: null, period: 5e3, expires: 6e5, loginCount: 0 },
        n = null,
        k = null,
        g = (function (a) {
          if ("null" !== a) return a;
          a = window.location.hostname.split(".").slice(-2).join(".");
          return ~a.indexOf(".") ? a : "";
        })(""),
        p = !1;
      f.utils.session = {
        init: function (a) {
          k = a;
          return (n = new f.helpers.Promise.resolve()
            .then(e)
            .then(function (d) {
              return null === d ? h() : d;
            }));
        },
        get: function () {
          return n
            ? n
            : new f.helpers.Promise.reject(
                "session.init must be called before requesting the cookie!"
              );
        },
        getSync: function () {
          return c;
        },
        increaseLoginCount: function () {
          c.loginCount++;
          a();
          return c;
        },
        fallback: function () {
          p = !0;
          return m();
        },
      };
    })();
    (function () {
      f.utils.utf8 = {
        encode: function (h, e) {
          e || (h = f.helpers.strHelper.escapeStr(h));
          return window.decodeURI(window.encodeURIComponent(h));
        },
      };
    })();
    (function () {
      function h(e) {
        var a = 0;
        return "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(
          /[x]/g,
          function () {
            return e[a++].toString(16);
          }
        );
      }
      f.utils.uuid = {
        generate: function () {
          var e = Array(32),
            a = window.crypto || window.msCrypto;
          if (a && a.getRandomValues && "function" == typeof a.getRandomValues)
            for (
              e = new Uint32Array(32), a.getRandomValues(e), a = 0;
              32 > a;
              a++
            )
              e[a] %= 16;
          else for (a = 0; 32 > a; a++) e[a] = Math.floor(16 * Math.random());
          return h(e);
        },
      };
    })();
    (function () {
      function h(a) {
        var h = function (d) {
            return d;
          },
          c = window.JSON,
          n = !1,
          k;
        try {
          delete window.JSON;
        } catch (d) {
          try {
            var g = document.createElement("div");
            g.innerHTML =
              "\x3cspan\x3e\x3c!--[if lte IE 8]\x3e\x3cspan\x3e8\x3c/span\x3e\x3c![endif]--\x3e\x3c!--[if gte IE 9]\x3e\x3cspan\x3e9\x3c/span\x3e\x3c![endif]--\x3e\x3c/span\x3e";
            n = "8" == g.innerText;
          } catch (b) {}
        }
        if (!window.JSON && f.utils.restorer) {
          window.JSON = c;
          try {
            k = f.utils.restorer.getNative("JSON");
          } catch (d) {}
          if (k && k.JSON)
            try {
              var p = k.JSON,
                l = window.JSON,
                h =
                  p && p[a]
                    ? !p[a] ||
                      (l &&
                        l[a] &&
                        (!l[a] ||
                          ("" + p[a] === "" + l[a] &&
                            p[a].toString + "" == "" + l[a].toString)))
                      ? function (d) {
                          return l[a].call(l, d);
                        }
                      : function (d) {
                          return p[a].call(p, d);
                        }
                    : e[a];
            } catch (d) {}
          else h = e[a];
        } else {
          try {
            window.JSON = window.JSON || c;
          } catch (d) {}
          h = function (d) {
            return ((!n && window.JSON[a]) || e[a]).call(l, d);
          };
        }
        return h;
      }
      var e = {};
      (function (a) {
        function e(b) {
          return 10 > b ? "0" + b : b;
        }
        function c(b) {
          return "function" === typeof b.toJSON
            ? b.toJSON()
            : b instanceof Date
            ? isFinite(this.valueOf())
              ? this.getUTCFullYear() +
                "-" +
                e(this.getUTCMonth() + 1) +
                "-" +
                e(this.getUTCDate()) +
                "T" +
                e(this.getUTCHours()) +
                ":" +
                e(this.getUTCMinutes()) +
                ":" +
                e(this.getUTCSeconds()) +
                "Z"
              : null
            : b.valueOf();
        }
        function h(d) {
          b.lastIndex = 0;
          return b.test(d)
            ? '"' +
                d.replace(b, function (b) {
                  var d = C[b];
                  return "string" === typeof d
                    ? d
                    : "\\u" + ("0000" + b.charCodeAt(0).toString(16)).slice(-4);
                }) +
                '"'
            : '"' + d + '"';
        }
        function f(b, d) {
          var a,
            g,
            e,
            q,
            n = w,
            l,
            k = d[b];
          k &&
            "object" === typeof k &&
            "function" === typeof k.toJSON &&
            (k instanceof Date ||
              k instanceof Boolean ||
              k instanceof Number ||
              k instanceof String) &&
            (k = c(k));
          "function" === typeof A && (k = A.call(d, b, k));
          switch (typeof k) {
            case "string":
              return h(k);
            case "number":
              return isFinite(k) ? String(k) : "null";
            case "boolean":
            case "null":
              return String(k);
            case "object":
              if (!k) return "null";
              w += v;
              l = [];
              if ("[object Array]" === Object.prototype.toString.apply(k)) {
                q = k.length;
                for (a = 0; a < q; a += 1) l[a] = f(a, k) || "null";
                e =
                  0 === l.length
                    ? "[]"
                    : w
                    ? "[\n" + w + l.join(",\n" + w) + "\n" + n + "]"
                    : "[" + l.join(",") + "]";
                w = n;
                return e;
              }
              if (A && "object" === typeof A)
                for (q = A.length, a = 0; a < q; a += 1)
                  "string" === typeof A[a] &&
                    ((g = A[a]),
                    (e = f(g, k)) && l.push(h(g) + (w ? ": " : ":") + e));
              else
                for (g in k)
                  Object.prototype.hasOwnProperty.call(k, g) &&
                    (e = f(g, k)) &&
                    l.push(h(g) + (w ? ": " : ":") + e);
              e =
                0 === l.length
                  ? "{}"
                  : w
                  ? "{\n" + w + l.join(",\n" + w) + "\n" + n + "}"
                  : "{" + l.join(",") + "}";
              w = n;
              return e;
          }
        }
        var g = /^[\],:{}\s]*$/,
          p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
          l = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          d = /(?:^|:|,)(?:\s*\[)+/g,
          b = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          q = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          w,
          v,
          C,
          A;
        "function" !== typeof a.stringify &&
          ((C = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\",
          }),
          (a.stringify = function (b, d, a) {
            var c;
            v = w = "";
            if ("number" === typeof a) for (c = 0; c < a; c += 1) v += " ";
            else "string" === typeof a && (v = a);
            if (
              (A = d) &&
              "function" !== typeof d &&
              ("object" !== typeof d || "number" !== typeof d.length)
            )
              throw Error("JSON.stringify");
            return f("", { "": b });
          }));
        "function" !== typeof a.parse &&
          (a.parse = function (b, a) {
            function c(b, d) {
              var g,
                e,
                q = b[d];
              if (q && "object" === typeof q)
                for (g in q)
                  Object.prototype.hasOwnProperty.call(q, g) &&
                    ((e = c(q, g)), void 0 !== e ? (q[g] = e) : delete q[g]);
              return a.call(b, d, q);
            }
            var e;
            b = String(b);
            q.lastIndex = 0;
            q.test(b) &&
              (b = b.replace(q, function (b) {
                return (
                  "\\u" + ("0000" + b.charCodeAt(0).toString(16)).slice(-4)
                );
              }));
            if (g.test(b.replace(p, "@").replace(l, "]").replace(d, "")))
              return (
                (e = eval("(" + b + ")")),
                "function" === typeof a ? c({ "": e }, "") : e
              );
            throw new SyntaxError("JSON.parse");
          });
      })(e);
      f.utils.JSON = {
        encode: function (a) {
          return h("stringify")(a);
        },
        decode: function (a) {
          return h("parse")(a);
        },
      };
    })();
    f.utils.delegate = function (h, e, a) {
      if (!h) throw "Base object is required";
      if (!e || "function" != typeof e) throw "Function is required";
      var f = Array.prototype.slice.call(arguments, 2);
      return function () {
        var a = f.concat(Array.prototype.slice.call(arguments));
        a.push(this);
        return e.apply(h, a);
      };
    };
    f.utils.getGlobalCallback = function (h, e, a, f) {
      var c = Array.prototype.slice.call(arguments, 3);
      if (window[a]) {
        for (var n = 0; window[a + "_" + n]; ) n++;
        a = a + "_" + n;
      }
      window[a] = function () {
        try {
          delete window[a];
        } catch (g) {
          window[a] = void 0;
        }
        var f = c.concat(Array.prototype.slice.call(arguments));
        f.push(this);
        return e.apply(h, f);
      };
      return a;
    };
    (function () {
      function h() {
        e ||
          (e = f.helpers.testFrame.getFrame(
            document.getElementsByTagName("body")
          ));
      }
      var e = null,
        a = window,
        m = null;
      f.utils.restorer = {
        getNative: function () {
          var a = null;
          h();
          for (var f = 0, k = arguments.length; f < k; f++) {
            var g = arguments[f],
              m;
            m = g;
            var l = m.split("."),
              d = null;
            if (l.length)
              try {
                if (e.ishiddenwin) d = e.win.getObj(m);
                else
                  for (
                    var d = e.win[l[0]] || null, b = 1, q = l.length;
                    b < q && d;
                    b++
                  )
                    if (d[l[b]]) d = d[l[b]];
                    else throw "Can not find " + m;
              } catch (w) {}
            if ((m = d)) (a = a || {}), (a[g] = m);
          }
          return a;
        },
        getUrlFns: function () {
          h();
          m =
            m ||
            this.getNative(
              "unescape",
              "encodeURIComponent",
              "escape",
              "decodeURIComponent"
            );
          if (
            "%25" != a.escape("%") ||
            "%" != a.unescape("%25") ||
            (m && m.unescape && a.unescape.toString() != m.unescape.toString())
          ) {
            var c = a.unescape,
              e = a.encodeURIComponent;
            try {
              delete a.unescape, delete a.encodeURIComponent;
            } catch (k) {
              (a.unescape = null), (a.encodeURIComponent = null);
            }
            (a.unescape && a.encodeURIComponent) ||
              ((a.unescape = c), (a.encodeURIComponent = e), (a = m || a));
          }
          return a;
        },
      };
    })();
    f.utils.Storage = function (h) {
      var e = {},
        a = null,
        m = null;
      h = h || "KFP_UA";
      if ("localStorage" in window)
        try {
          a = window.localStorage[h];
        } catch (c) {}
      if ("sessionStorage" in window)
        try {
          m = window.sessionStorage[h];
        } catch (c) {}
      e = a
        ? f.helpers.objectHelper.copyProperties(e, f.utils.JSON.decode(a))
        : e;
      e = m
        ? f.helpers.objectHelper.copyProperties(e, f.utils.JSON.decode(m))
        : e;
      return {
        setData: function (a, n) {
          "undefined" == typeof n ? delete e[a] : (e[a] = n);
          var c = f.utils.JSON.encode(e);
          try {
            "localStorage" in window && (window.localStorage[h] = c),
              "sessionStorage" in window && (window.sessionStorage[h] = c);
          } catch (g) {}
        },
        getData: function (a) {
          return e ? e[a] : null;
        },
      };
    };
    f.utils.hash = function (f) {
      if (Array.prototype.reduce)
        return f.split("").reduce(function (a, e) {
          a = (a << 5) - a + e.charCodeAt(0);
          return a & a;
        }, 0);
      var e = 0,
        a,
        h;
      if (0 === f.length) return e;
      for (a = 0; a < f.length; a++)
        (h = f.charCodeAt(a)), (e = (e << 5) - e + h), (e &= e);
      return e;
    };
  })(B);
  (function (f) {
    f.helpers = {};
    (function () {
      function h(c) {
        return a[c];
      }
      function e(a, e, g) {
        return c("*", e.length) + g;
      }
      var a = {
          "\b": "\\b",
          "\f": "\\f",
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t",
        },
        m = /(\d+)(\d{2})/g,
        c;
      c =
        "function" === typeof "".repeat && "-----" === "-".repeat(5)
          ? function (a, c) {
              return a.repeat(c);
            }
          : function (a, c) {
              return Array(c + 1).join(a);
            };
      f.helpers.strHelper = {
        escapeStr: function (a) {
          return a
            .replace(/[\b\f\n\r\t]/g, h)
            .replace(/[\u0000-\u0007\u000b\u000d-\u001f\u2028\u2029]/g, "");
        },
        hex2binbuf: function (a) {
          var c = [];
          a.replace(/[^\da-f]/gi, "").replace(/([\da-f]{2})/gi, function (a) {
            return c.push(+("0x" + ("00" + a).slice(-2))), "";
          });
          return c;
        },
        maskNumbers: function (a) {
          return a.replace(m, e);
        },
        snakeToCamel: function (a) {
          return a.toLowerCase().replace(/(\_\w)/g, function (a) {
            return a[1].toUpperCase();
          });
        },
        camelToSnake: function () {
          return this.replace(/([A-Z])/g, function (a) {
            return "_" + a.toLowerCase();
          });
        },
      };
    })();
    (function () {
      function h(a) {
        a.open();
        a.write(
          "\x3c!doctype html\x3e\x3chtml\x3e\x3chead\x3e\x3c/head\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e"
        );
        a.close();
      }
      function e() {
        var a = document.createElement("iframe"),
          c;
        f.helpers.dom.append(a, document.documentElement);
        a.style.position = "absolute";
        a.style.left = "-100em";
        a.style.top = "-100em";
        a.style.width = "10px";
        a.style.height = "10px";
        document.documentElement.domain = document.domain;
        (c = a.contentDocument || a.contentWindow.document) &&
          c != window &&
          c != document &&
          h(c);
        return {
          doc: c,
          win: a.contentWindow || c.defaultView || a.self,
          body: c.body,
        };
      }
      var a = null;
      f.helpers.testFrame = {
        makeIframe: e,
        getFrame: function (f) {
          if (!a) {
            var c;
            "ActiveXObject" in window &&
              ((c = new window.ActiveXObject("htmlfile")),
              h(c),
              (a = {
                win: c.parentWindow,
                body: c.body,
                doc: c,
                ishiddenwin: !0,
              }));
            document.documentElement && !c && (a = e());
          }
          a &&
            a.ishiddenwin &&
            a.win.execScript &&
            !a.win.getObj &&
            a.win.execScript(
              "window['getObj'] \x3d function (str){ var o\x3dnull; try{ o\x3deval(str); }catch(e){} return o; }"
            );
          a &&
            a.ishiddenwin &&
            a.win.eval &&
            !a.win.getObj &&
            a.win.eval(
              "window['getObj'] \x3d function (str){ var o\x3dnull; try{ o\x3deval(str); }catch(e){} return o; }"
            );
          return a;
        },
      };
    })();
    (function () {
      function h(a) {
        return a;
      }
      function e(a, c, e) {
        try {
          for (var f in c) {
            var g = c[f],
              h = e && e[typeof g];
            h ? (a[f] = h(g)) : e || (a[f] = g);
          }
        } catch (l) {}
        return a;
      }
      var a = {
        string: function (a) {
          return f.utils.utf8.encode(a);
        },
        number: h,
        boolean: h,
      };
      f.helpers.objectHelper = {
        hasOwnProp: function (a, c) {
          return c in a && !(c in a.constructor.prototype);
        },
        extend: function () {
          return e.apply(
            this,
            Array.prototype.slice.call(arguments, 0).concat(null)
          );
        },
        copyProperties: function () {
          return e.apply(
            this,
            Array.prototype.slice.call(arguments, 0).concat(a)
          );
        },
      };
    })();
    (function () {
      function h() {}
      function e(a, b) {
        return function () {
          a.apply(b, arguments);
        };
      }
      function a(a) {
        if ("object" !== typeof this)
          throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof a) throw new TypeError("not a function");
        this._state = 0;
        this._handled = !1;
        this._value = void 0;
        this._deferreds = [];
        p(a, this);
      }
      function m(d, b) {
        for (; 3 === d._state; ) d = d._value;
        0 === d._state
          ? d._deferreds.push(b)
          : ((d._handled = !0),
            a._immediateFn(function () {
              var a = 1 === d._state ? b.onFulfilled : b.onRejected;
              if (null === a) (1 === d._state ? c : n)(b.promise, d._value);
              else {
                var g;
                try {
                  g = a(d._value);
                } catch (v) {
                  n(b.promise, v);
                  return;
                }
                c(b.promise, g);
              }
            }));
      }
      function c(d, b) {
        try {
          if (b === d)
            throw new TypeError("A promise cannot be resolved with itself.");
          if (b && ("object" === typeof b || "function" === typeof b)) {
            var c = b.then;
            if (b instanceof a) {
              d._state = 3;
              d._value = b;
              k(d);
              return;
            }
            if ("function" === typeof c) {
              p(e(c, b), d);
              return;
            }
          }
          d._state = 1;
          d._value = b;
          k(d);
        } catch (w) {
          n(d, w);
        }
      }
      function n(a, b) {
        a._state = 2;
        a._value = b;
        k(a);
      }
      function k(d) {
        2 === d._state &&
          0 === d._deferreds.length &&
          a._immediateFn(function () {
            d._handled || a._unhandledRejectionFn(d._value);
          });
        for (var b = 0, c = d._deferreds.length; b < c; b++)
          m(d, d._deferreds[b]);
        d._deferreds = null;
      }
      function g(a, b, c) {
        this.onFulfilled = "function" === typeof a ? a : null;
        this.onRejected = "function" === typeof b ? b : null;
        this.promise = c;
      }
      function p(a, b) {
        var d = !1;
        try {
          a(
            function (a) {
              d || ((d = !0), c(b, a));
            },
            function (a) {
              d || ((d = !0), n(b, a));
            }
          );
        } catch (w) {
          d || ((d = !0), n(b, w));
        }
      }
      var l = setTimeout;
      a.prototype["catch"] = a.prototype.fail = function (a) {
        return this.then(null, a);
      };
      a.prototype.then = a.prototype.done = function (a, b) {
        var d = new this.constructor(h);
        m(this, new g(a, b, d));
        return d;
      };
      a.all = function (d, b) {
        var c = Array.prototype.slice.call(d);
        return new a(function (d, g) {
          function e(h, l) {
            try {
              !l ||
              ("object" !== typeof l && "function" !== typeof l) ||
              "function" !== typeof l.then
                ? ((c[h] = l), 0 === --f && d(c))
                : l.then.call(
                    l,
                    function (a) {
                      e(h, a);
                    },
                    function (d) {
                      return b
                        ? (a._unhandledRejectionFn(d), e(h, void 0))
                        : g(d);
                    }
                  );
            } catch (x) {
              g(x);
            }
          }
          if (0 === c.length) return d([]);
          for (var f = c.length, h = 0; h < c.length; h++) e(h, c[h]);
        });
      };
      a.resolve = function (d) {
        return d && "object" === typeof d && d.constructor === a
          ? d
          : new a(function (a) {
              a(d);
            });
      };
      a.reject = function (d) {
        return new a(function (a, c) {
          c(d);
        });
      };
      a.race = function (d) {
        return new a(function (a, c) {
          for (var b = 0, g = d.length; b < g; b++) d[b].then(a, c);
        });
      };
      a.timeout = function (d) {
        return new a(function (a) {
          l(a, d);
        });
      };
      a._immediateFn =
        ("function" === typeof setImmediate &&
          function (a) {
            setImmediate(a);
          }) ||
        function (a) {
          l(a, 0);
        };
      a._unhandledRejectionFn = function (a) {};
      a._setImmediateFn = function (d) {
        a._immediateFn = d;
      };
      a._setUnhandledRejectionFn = function (d) {
        a._unhandledRejectionFn = d;
      };
      f.helpers.Promise = a;
    })();
    f.helpers.cookies = {
      set: function (f, e, a) {
        a = a || {};
        a.path = a.path || "/";
        a.domain = a.domain || "";
        a.secure = !!a.secure;
        a.expires =
          a.expires && a.expires instanceof Date ? a.expires.toUTCString() : "";
        f = encodeURIComponent(String(f));
        f = f.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        f = f.replace(/[\(\)]/g, escape);
        f = [f + "\x3d" + e, "expires\x3d" + a.expires, "path\x3d" + a.path];
        a.domain && f.push("domain\x3d" + a.domain);
        a.secure && f.push("secure");
        return (document.cookie = f.join("; "));
      },
      get: function (f) {
        var e = document.cookie ? document.cookie.split("; ") : [],
          a = /(%[0-9A-Z]{2})+/g,
          h,
          c = {};
        for (h = 0; h < e.length; h++) {
          var n = e[h].split("\x3d"),
            k = n[0].replace(a, decodeURIComponent),
            n = n.slice(1).join("\x3d");
          '"' === n.charAt(0) && (n = n.slice(1, -1));
          try {
            if (((n = n.replace(a, decodeURIComponent)), (c[k] = n), f === k))
              return n;
          } catch (g) {}
        }
        return f ? null : c;
      },
      del: function (f, e) {
        var a = { expires: new Date() };
        e && e.path && (a.path = e.path);
        e && e.domain && (a.domain = e.domain);
        return this.set(f, "", a);
      },
    };
    (function () {
      function h(a) {
        var b,
          d = [],
          c,
          g,
          e,
          f;
        if ("querySelectorAll" in document) return document.querySelectorAll(a);
        a = a.split(",");
        e = a.length;
        for (c = 0; c < e; c++)
          for (
            b = document.getElementsByTagName(a[c].replace(A, "")),
              f = b.length,
              g = 0;
            g < f;
            g++
          )
            d.push(b[g]);
        return d;
      }
      function e(d) {
        var c = window.document;
        if ("complete" === c.readyState || b)
          C && window.clearTimeout(C),
            "removeEventListener" in c
              ? (c.removeEventListener("onreadystatechange", e, !1),
                c.removeEventListener("DOMContentLoaded", e, !1),
                window.removeEventListener("load", e, !1))
              : "detachEvent" in c &&
                (c.detachEvent("onreadystatechange", e),
                c.detachEvent("DOMContentLoaded", e),
                window.detachEvent("onload", e)),
            !l &&
              q &&
              ((d = d || window.event), a.call(this, q, d), (q = null));
      }
      function a(b, d) {
        document.body
          ? ("function" === typeof b && b(d), (l = !0))
          : window.setTimeout(f.utils.delegate(this, a, b, d), 50);
      }
      function m() {
        C && window.clearTimeout(C);
        if (
          "loading" !== document.readyState &&
          !l &&
          !b &&
          document &&
          document.body
        ) {
          var a;
          try {
            (a = document.createElement("span")),
              document.body.appendChild(a),
              document.body.removeChild(a),
              (b = !0),
              e(null);
          } catch (E) {}
        }
        b || (C = window.setTimeout(m, 100));
      }
      function c(d) {
        l || b || "complete" === document.readyState
          ? a.call(this, d)
          : ((q = q
              ? (function (a, b) {
                  return function (d) {
                    a(d);
                    b(d);
                  };
                })(q, d)
              : d),
            w ||
              ((d = window.document),
              "addEventListener" in d
                ? (d.addEventListener("onreadystatechange", e, !1),
                  d.addEventListener("DOMContentLoaded", e, !1),
                  window.addEventListener("load", e, !1))
                : "attachEvent" in d &&
                  (d.attachEvent("onreadystatechange", e),
                  d.attachEvent("DOMContentLoaded", e),
                  window.attachEvent("onload", e)),
              (w = !0)),
            m());
      }
      function n() {
        for (var a = []; r.length; ) {
          var b = r.shift(),
            d = h(b.selector);
          d.length && this.bind(d, b.eventName, b.fn);
          a.push(b);
        }
        r = a;
        !x &&
          document.body &&
          ((x = !0),
          this.bindonchange(
            document.body,
            f.utils.delegate(this, n),
            "bindLives"
          ));
      }
      function k(a, b, d) {
        d &&
          d.target &&
          (z[b] && window.clearTimeout(z[b]),
          (z[b] = window.setTimeout(function () {
            z[b] = null;
            a(d);
          }, 100)));
      }
      function g(a, b, d, c) {
        d &&
          (z[b] && window.clearTimeout(z[b]),
          (z[b] = window.setTimeout(function () {
            window.clearTimeout(z[b]);
            z[b] = null;
            a(d);
          }, 100)));
      }
      function p() {
        if (v) {
          for (var a = [], b = 0, d = v.length; b < d; b++)
            v[b].elt.parentElement
              ? (v[b].elt.outerHTML !== v[b].cache &&
                  ((v[b].cache = v[b].elt.outerHTML), v[b].fn()),
                a.push(v[b]))
              : (v[b].fn(), (v[b].elt = null), (v[b] = null));
          v = 0 < a.length ? a : null;
        }
      }
      var l = !1,
        d = 0,
        b = !1,
        q = null,
        w = !1,
        v = null,
        C = null,
        A = /^\s+|\s+$/g,
        u =
          (!(!window.ActiveXObject && "ActiveXObject" in window) &&
            window.MutationObserver) ||
          window.WebKitMutationObserver ||
          window.MozMutationObserver,
        r = [],
        y = !1,
        x = !1,
        z = {};
      f.helpers.dom = {
        bindonchange: function (a, b) {
          var c = "domchange" + d++;
          u
            ? new u(f.utils.delegate(this, g, b, c)).observe(a, {
                childList: !0,
                subtree: !0,
              })
            : "addEventListener" in a
            ? ((c = f.utils.delegate(this, k, b, c)),
              a.addEventListener("DOMNodeInserted", c, !1),
              a.addEventListener("DOMNodeRemoved", c, !1),
              a.addEventListener("DOMNodeInsertedIntoDocument", c, !1),
              a.addEventListener("DOMNodeRemovedFromDocument", c, !1))
            : "undefined" !== typeof document.onpropertychange &&
              (v ||
                ((v = []),
                window.setInterval(f.utils.delegate(this, p, c), 300)),
              v.push({ elt: a, fn: b, cache: a.outerHTML }));
        },
        bind: function (a, b, d, g) {
          if ("string" === typeof a) {
            var e = h(a);
            0 < e.length && !g
              ? this.bind(e, b, d)
              : "function" === typeof d &&
                (r.push({ selector: a, eventName: b, fn: d }),
                y || ((y = !0), c.call(this, f.utils.delegate(this, n))));
          } else if (a.nodeType || a === window || a === window.document)
            if ("ready" === b.toLocaleLowerCase() && a === window.document)
              c.call(this, d);
            else {
              if ("function" === typeof a[b]) {
                var l = d,
                  q = a[b];
                a[b] = null;
                d = function (a) {
                  l(a);
                  return q(a);
                };
              }
              try {
                this.unbind(a, b, d);
              } catch (D) {}
              "addEventListener" in a
                ? ("onmousewheel" === b.toLocaleLowerCase() &&
                    "DOMMouseScroll" in a &&
                    (b = "onDOMMouseScroll"),
                  a.addEventListener(b.slice(2).toLocaleLowerCase(), d, !1))
                : "attachEvent" in a && a.attachEvent(b, d);
            }
          else if (a instanceof Array || a.length)
            for (g = 0, e = a.length; g < e; g++) this.bind(a[g], b, d);
        },
        unbind: function (a, b, d) {
          "removeEventListener" in a
            ? ("onmousewheel" === b.toLocaleLowerCase() &&
                "DOMMouseScroll" in a &&
                (b = "onDOMMouseScroll"),
              a.removeEventListener(b.slice(2).toLocaleLowerCase(), d, !1))
            : "detachEvent" in a && a.detachEvent(b, d);
        },
        append: function (a, b) {
          a && b && b.appendChild(a);
        },
        remove: function (a) {
          a && a.parentNode && a.parentNode.removeChild(a);
        },
      };
    })();
  })(B);
  (function (f, h) {
    function e() {
      var a = window.XMLHttpRequest,
        b = h;
      try {
        if (!(b() instanceof b)) {
          try {
            delete window.XMLHttpRequest;
          } catch (q) {
            window.XMLHttpRequest = b = null;
          }
          h = window.XMLHttpRequest
            ? (b = window.XMLHttpRequest)
            : (b =
                (
                  f.utils.restorer &&
                  f.utils.restorer.getNative("XMLHttpRequest")
                ).XMLHttpRequest || a);
          window.XMLHttpRequest = a;
        }
      } catch (q) {}
      return b;
    }
    function a(a, b) {
      if (!k) {
        a && window.XDomainRequest
          ? (k = g)
          : window.XMLHttpRequest && document.querySelector && (k = e());
        if (!k && "undefined" != typeof window.ActiveXObject && !a)
          try {
            new ActiveXObject("Msxml2.XMLHTTP"),
              (k = function () {
                return new ActiveXObject("Msxml2.XMLHTTP");
              });
          } catch (q) {
            try {
              new ActiveXObject("Microsoft.XMLHTTP"),
                (k = function () {
                  return new ActiveXObject("Microsoft.XMLHTTP");
                });
            } catch (w) {
              void 0;
            }
          }
        k || (k = g);
      }
      b && k == g && (k = null);
      return k ? new k() : null;
    }
    function m(a) {
      return new f.helpers.Promise(function (b, d) {
        "onreadystatechange" in a &&
          (a.onreadystatechange = function () {
            if (4 == a.readyState) {
              if (200 == a.status) return b(a);
              d(a);
            }
          });
        "onload" in a &&
          (a.onload = function () {
            return b(a);
          });
        "onerror" in a &&
          (a.onerror = function () {
            return d(a);
          });
        "ontimeout" in a &&
          (a.ontimeout = function () {
            return d(a);
          });
      });
    }
    function c(a) {
      var b = a.responseText || "";
      return l.responseType == p.JSON
        ? f.helpers.Promise.resolve()
            .then(function () {
              return f.utils.JSON.decode(b);
            })
            .fail(function () {
              return n({
                responseText: b,
                status: 500,
                statusText:
                  "Response type stated as JSON, but JSON parsing has failed",
              });
            })
        : b;
    }
    function n(a) {
      throw Error(
        "Request error! Response:" +
          a.responseText +
          " Status:" +
          a.status +
          " Error:" +
          a.statusText
      );
    }
    var k = null,
      g = function () {
        this.initPromise = this._init();
      },
      p = { JSON: "json", Text: "text", HTML: "html" },
      l = {
        url: "",
        ssid: "",
        async: !0,
        timeout: 2e4,
        method: "post",
        requestType: "application/json",
        responseType: p.JSON,
        charset: "utf-8",
        useCreds: !0,
        doubeencode: !0,
      };
    g.prototype = {
      form: null,
      ifr: null,
      initPromise: null,
      _loadDone: !1,
      _quirksInterval: null,
      status: 0,
      responseText: "",
      statusText: "",
      method: "POST",
      url: "",
      open: function (a, b) {
        this.method = a ? a.toUpperCase() : "POST";
        this.url = b || window.location.href;
      },
      onload: null,
      onerror: null,
      initContainer: function () {
        var a;
        return f.helpers.Promise.race([
          f.helpers.Promise.timeout(l.timeout).then(function () {
            throw Error("Fallback request timeout");
          }),
          new f.helpers.Promise(function (b) {
            a = window.setInterval(function () {
              g.container ? b(g.container) : document.body && b(document);
            });
          }),
        ]).then(
          function (b) {
            window.clearTimeout(a);
            return b;
          },
          function (b) {
            window.clearTimeout(a);
            throw b;
          }
        );
      },
      _init: function () {
        return this.initContainer().then(
          f.utils.delegate(this, function (a) {
            var b,
              d = "kl_ajax_ifr" + new Date().getTime();
            try {
              b = a.createElement('\x3ciframe name\x3d"' + d + '"\x3e');
            } catch (w) {
              (b = a.createElement("iframe")), (b.name = d);
            }
            b.name = d;
            a.body.appendChild(b);
            b.id = d;
            b.frameBorder = 0;
            b.border = 0;
            b.style.position = "absolute";
            b.style.left = "-10px";
            b.style.top = "-10px";
            b.style.width = "10px";
            b.style.height = "10px";
            this.ifr = b;
            this.form = a.createElement("form");
            this.form.enctype = "application/x-www-form-urlencoded";
            this.form.target = d;
            b = a.createElement("input");
            b.type = "hidden";
            b.name = "data";
            b.id = "datafor" + d;
            f.helpers.dom.append(b, this.form);
            f.helpers.dom.append(this.form, a.body);
          })
        );
      },
      _handleLoaded: function () {
        if (!this._loadDone) {
          this._loadDone = !0;
          this.status = 200;
          this.responseText = "";
          this.statusText = "Ok";
          if ("function" == typeof this.onload) this.onload();
          return this.destroy();
        }
      },
      _handleError: function () {
        if (!this._loadDone) {
          this._loadDone = !0;
          this.status = 500;
          this.responseText = "";
          this.statusText = "Error";
          if ("function" == typeof this.onerror) this.onerror();
          return this.destroy();
        }
      },
      _quirkstest: function (a) {
        !this._loadDone &&
          this.ifr.document &&
          "complete" == this.ifr.document.readyState &&
          this.ifr.onload &&
          (window.clearInterval(this._quirksInterval), a());
      },
      send: function (a) {
        return this.initPromise.then(
          f.utils.delegate(this, function () {
            var b = this.form.getElementsByTagName("input");
            if (0 < b.length) {
              this.loadHandler1 = f.utils.delegate(this, this._handleLoaded);
              this.errHandler1 = f.utils.delegate(this, this._handleError);
              var d = f.utils.delegate(
                this,
                this._quirkstest,
                this.loadHandler1,
                this.errHandler1
              );
              this._loadDone = !1;
              return f.helpers.Promise.resolve().then(
                f.utils.delegate(this, function () {
                  b[0].value = a;
                  f.helpers.dom.bind(this.ifr, "onload", this.loadHandler1);
                  f.helpers.dom.bind(this.ifr, "onerror", this.errHandler1);
                  this.ifr.onload = this.loadHandler1;
                  this.ifr.onerror = this.errHandler1;
                  this._quirksInterval = window.setInterval(d, 100);
                  this.form.method = this.method;
                  this.form.action = this.url;
                  this.form.submit();
                  b = null;
                })
              );
            }
            throw Error("Data input not found on the form to send!");
          })
        );
      },
      destroy: function () {
        window.clearInterval(this._quirksInterval);
        return f.helpers.Promise.resolve().then(
          f.utils.delegate(this, function () {
            if (this.form) {
              if (this.ifr) {
                this.ifr.onload = null;
                this.ifr.onerror = null;
                this.ifr.parentNode.removeChild(this.ifr);
                try {
                  f.helpers.dom.unbind(this.ifr, "onload", this.loadHandler1);
                } catch (d) {}
                try {
                  f.helpers.dom.unbind(this.ifr, "onerror", this.errHandler1);
                } catch (d) {}
                this.ifr = null;
              }
              this.form.parentNode.removeChild(this.form);
              this.form = null;
            }
          })
        );
      },
    };
    f.http = {
      setAsync: function (a) {
        l.async = !!a;
        return this;
      },
      init: function (a) {
        if (a) for (var b in a) a.hasOwnProperty(b) && (l[b] = a[b]);
        return this;
      },
      send: function (d) {
        return f.helpers.Promise.resolve().then(function () {
          d = d || {};
          var b = d.url || l.url || "",
            g;
          g = b;
          var e = document.createElement("a"),
            f = document.createElement("a");
          e.href = ("" + window.location.href).toLowerCase();
          f.href = g;
          g = f.protocol != e.protocol || f.host != e.host;
          e = a(g, !!d.noFallback);
          if (!e) throw Error("Can't get transport for making a request");
          var f = d.data,
            h = ("async" in d ? d : l).async,
            k = d.method || l.method,
            p = !(!0 === d.useCreds || !1 === d.useCreds
              ? !d.useCreds
              : !l.useCreds),
            r = d.timeout || l.timeout,
            y = "charset" in d ? d.charset : l.charset,
            y =
              (d.requestType || l.requestType) + (y ? "; charset\x3d" + y : ""),
            x;
          "overrideMimeType" in e && e.overrideMimeType(y);
          "get" == k.toLowerCase() &&
            ((b = b + (-1 === b.indexOf("?") ? "?" : "\x26") + f), (f = null));
          x = m(e).then(c, n);
          e.open(k, b, h);
          "timeout" in e && h && (e.timeout = r);
          "setRequestHeader" in e && e.setRequestHeader("Content-Type", y);
          if (p)
            try {
              e.withCredentials = !0;
            } catch (z) {
              void 0;
            }
          try {
            g && (e.crossDomain = !0);
          } catch (z) {
            void 0;
          }
          e.send(f || "");
          return x;
        });
      },
      jsonp: function (a, b) {
        return a && "string" === typeof a
          ? new f.helpers.Promise(function (d, c) {
              b = b || "jsonp_callback";
              window.kfp = window.kfp || {};
              window.kfp[b] = function (a) {
                d(a);
              };
              var g = document.getElementsByTagName("head")[0] || document.body,
                e = document.createElement("script");
              e.type = "text/javascript";
              e.src = a;
              m(e)
                .fail(c)
                .then(function () {
                  g.removeChild(e);
                });
              g.appendChild(e);
            })
          : f.helpers.Promise.reject(
              Error("No URL provided or url is not a string. Received URL:" + a)
            );
      },
    };
  })(B || {}, window.XMLHttpRequest);
  (function (f) {
    function h(a) {
      var b, d, c;
      if (null === a || "object" !== typeof a) return a;
      if (a instanceof Date) return (b = new Date()), b.setTime(a.getTime()), b;
      if (a instanceof Array) {
        b = [];
        c = a.length;
        for (d = 0; d < c; d++) b[d] = h(a[d]);
        return b;
      }
      if (a instanceof Object) {
        b = {};
        for (d in a)
          a.hasOwnProperty(d) &&
            "time" !== d &&
            "historyLength" !== d &&
            (b[d] = h(a[d]));
        return b;
      }
    }
    function e(d) {
      b && window.clearTimeout(b);
      b = window.setTimeout(
        f.utils.delegate(this, a, d),
        f.utils.session.getSync().period
      );
    }
    function a(a) {
      b && window.clearTimeout(b);
      b = null;
      var c = !(!a || !a.sendSync);
      return m(a && a.force)
        .then(function (a) {
          l = f.utils.hash(f.utils.JSON.encode(h(a)));
          if (l === d) throw Error("Same data detected");
          return a;
        })
        .then(function (a) {
          return f.http.send({ data: f.utils.JSON.encode(a), async: !c });
        })
        .then(
          function () {
            d = l;
          },
          function () {}
        )
        .then(function () {
          e.call({ sendSync: !1 });
        });
    }
    function m(a) {
      var b = new Date(),
        d = {
          time: [b.getTime(), b.getTimezoneOffset() || 0],
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            f.helpers.strHelper.maskNumbers(
              window.location.pathname +
                window.location.search +
                window.location.hash
            ),
        },
        c,
        g,
        b = [];
      document.referrer
        ? ((c = /\w\/(.+)$/.exec(document.referrer)),
          (d.ref =
            c && c[1]
              ? document.referrer.replace(
                  c[1],
                  f.helpers.strHelper.maskNumbers(c[1])
                )
              : document.referrer))
        : (d.ref = "");
      g = p.length;
      for (c = 0; c < g; c++)
        b.push(
          (function (b) {
            var c = k[b];
            return c &&
              c.hasOwnProperty("getData") &&
              "function" === typeof c.getData
              ? f.helpers.Promise.resolve()
                  .then(function () {
                    return c.getData(a);
                  })
                  .then(function (a) {
                    if (null !== a && void 0 !== a) return (d[b] = a);
                  })
              : null;
          })(p[c])
        );
      return f.helpers.Promise.all(b, !0).then(function () {
        return d;
      });
    }
    function c() {
      return f.helpers.Promise.all(g, !0);
    }
    function n() {
      window.kfp = window.kfp || {};
      window.kfp.get_oxxfgh = function () {
        return f.utils.session.getSync().id;
      };
      window.kfp.get_oxxfgh_async = function () {
        return f.utils.session.get().then(function (a) {
          return a.id;
        });
      };
      window.kfp.generate_uuid = function () {
        return f.utils.uuid.generate();
      };
      window.kfp.cookies = f.helpers.cookies;
    }
    var k = {},
      g = [],
      p = [],
      l,
      d,
      b = null;
    t.registerHandler = function (b, d) {
      var c = new f.helpers.Promise(function (a, b) {
        if ("function" === typeof d)
          return a(d.call(null, f.utils, f.helpers, f.http));
        b(Error("Handler requires a creator function as 3rd argument"));
      })
        .then(function (b) {
          return b.hasOwnProperty("start") && "function" === typeof b.start
            ? f.helpers.Promise.resolve()
                .then(function () {
                  return b.start({
                    sendTrigger: function (b) {
                      b || (b = {});
                      b.force = !0;
                      return a(b);
                    },
                    getServerUrl: function () {
                      return "https://ru.fp.kaspersky-labs.com:443";
                    },
                  });
                })
                .then(function () {
                  return b;
                })
            : b;
        })
        .then(function (a) {
          k[b] || (p.push(b), (k[b] = a));
        })
        .fail(function (a) {
          var d,
            c = p.length;
          for (d = 0; d < c; d++)
            if (p[d] === b) {
              p.splice(d, 1);
              break;
            }
          delete k[b];
          throw a;
        });
      g.push(c);
      return c;
    };
    t.init = function () {
      f.http.init({
        url: "https://ru.fp.kaspersky-labs.com:443/track",
        responseType: "text",
        async: !0,
      });
      n();
      return f.utils.session
        .init("https://ru.fp.kaspersky-labs.com:443")
        .then(c, function () {
          void 0;
        })
        .then(a);
    };
  })(B || {});
  t.registerHandler("cha", function () {
    return {
      getData: function () {
        return "s-37-release-49-g91a0b24";
      },
    };
  });
  t.registerHandler("geugae", function (f) {
    return {
      getData: function () {
        return f.session.get().then(function (f) {
          return f.id;
        });
      },
    };
  });
  t.registerHandler("browser", function (f, h) {
    function e(a, d, b) {
      for (var c = 0, g = b.length; c < g; c++) d[b[c]] && (a[b[c]] = d[b[c]]);
      return a;
    }
    function a(a, d) {
      var b = [];
      if (a.length)
        for (var c = 0, g = a.length; c < g; c++) a[c] && b.push(d(a[c]));
      return b;
    }
    function m(c) {
      var d = {};
      e(d, c, ["description", "filename", "name", "version"]);
      d.mime_type = a(c, function (a) {
        return e({}, a, ["type", "suffixes", "description"]);
      });
      return d;
    }
    function c() {
      var c = new Date().getTime(),
        d =
          window.location.protocol +
          "//" +
          window.location.host +
          h.strHelper.maskNumbers(
            window.location.pathname +
              window.location.search +
              window.location.hash
          ),
        b = f.utf8.encode(h.strHelper.maskNumbers(window.name)),
        e = f.utf8.encode(document.domain),
        p = document.characterSet || document.charset || "",
        v = document.defaultCharset,
        C = window.history.length,
        A = navigator.javaEnabled(),
        u,
        r = window.navigator || window.clientInformation,
        y,
        x = {
          hasMsManipulationViewsEnabled: "msManipulationViewsEnabled" in r,
          hasMsPointerEnabled: "msPointerEnabled" in r,
          methods: {},
        },
        z = r.plugins;
      try {
        x.langs = r.languages && [].concat(r.languages);
      } catch (D) {}
      u = 0;
      for (y = n.length; u < y; u++) x[n[u]] = r[n[u]];
      u = 0;
      for (y = k.length; u < y; u++) x.methods[k[u]] = !!r[k[u]];
      if (r.mimeTypes)
        for (x.mimeTypes = [], u = 0, y = r.mimeTypes.length; u < y; u++)
          x.mimeTypes.push({
            type: r.mimeTypes[u].type,
            description: r.mimeTypes[u].description,
            suffixes: r.mimeTypes[u].suffixes,
          });
      if (z)
        try {
          x.plugins = a(z, m);
        } catch (D) {}
      if (x.hasMsManipulationViewsEnabled || x.hasMsPointerEnabled) {
        try {
          x.hasMediaDevices = "undefined" != typeof r.mediaDevices;
        } catch (D) {}
        try {
          x.isPluginsInstanceOfPluginArray =
            window.PluginArray && r.plugins instanceof window.PluginArray;
        } catch (D) {}
        try {
          x.isPluginsInstanceOfMSPluginsCollection =
            window.MSPluginsCollection &&
            r.plugins instanceof window.MSPluginsCollection;
        } catch (D) {}
      }
      u = { hasActiveXObject: "ActiveXObject" in window };
      var r = g() || { enabled: !1 },
        t;
      a: {
        var E;
        y = "";
        var z = [],
          B,
          G = "lte IE 6;IE 6;IE 7;IE 8;IE 9;IE 10;IE 11;gt IE 11;IEMobile".split(
            ";"
          );
        try {
          E = document.createElement("div");
          E.kljs_elt = !0;
          for (var H = G.length; H--; )
            y +=
              "\x3c!--[if " +
              G[H] +
              "]\x3e\x3cspan\x3e" +
              G[H] +
              "\x3c/span\x3e\x3c![endif]--\x3e";
          E.innerHTML = y;
          B = E.getElementsByTagName("span");
          for (var I = B.length; I--; ) z.push((B[I] || B.item(I)).innerHTML);
          E.innerHTML = "";
          if (0 < z.length) {
            t = { enabled: !0, tests: z };
            break a;
          }
        } catch (D) {
          void 0;
        }
        t = { enabled: !1 };
      }
      c = {
        time: c,
        url: d,
        name: b,
        domain: e,
        charset: p,
        defenc: v,
        historyLength: C,
        java: A,
        navigator: x,
        window: u,
        jsCC: r,
        htmlCC: t,
        colors: [
          document.bgColor,
          document.fgColor,
          document.linkColor,
          document.alinkColor,
          document.vlinkColor,
        ],
      };
      try {
        var F;
        document.createElementNS &&
          (F = document.createElementNS("http://www.w3.org/2000/svg", "svg"))
            .createSVGRect &&
          ((c.svgppmx = F.pixelUnitToMillimeterX),
          (c.svgppmy = F.pixelUnitToMillimeterY),
          (c.svgscrppmx = F.screenPixelToMillimeterX),
          (c.svgscrppmy = F.screenPixelToMillimeterY));
      } catch (D) {}
      return c;
    }
    var n = "appCodeName appMinorVersion appName appVersion browserLanguage buildID cookieEnabled cpuClass doNotTrack msDoNotTrack hardwareConcurrency language maxTouchPoints msManipulationViewsEnabled msMaxTouchPoints msPointerEnabled onLine oscpu platform pluginFilenames pointerEnabled product productSub systemLanguage userAgent userLanguage vendor vendorSub webdriver".split(
        " "
      ),
      k = "serviceWorker securitypolicy standalone supBrowserID mozNotification webkitNotification sendBeacon getUserMedia webkitGetUserMedia mozGetUserMedia registerContentHandler registerProtocolHandler requestMediaKeySystemAccess taintEnabled vibrate getVRDevices mozIsLocallyAvailable confirmSiteSpecificTrackingException confirmWebWideTrackingException getGamepads msLaunchUri msSaveBlob msSaveOrOpenBlob getBattery geolocation connection mozConnection webkitConnection".split(
        " "
      ),
      g = new Function(
        "/*@cc_on return {enabled: true, jscript_version: @_jscript_version, win32: @_win32 };@*/"
      ),
      p = { sendTrigger: function () {} };
    return {
      start: function (a) {
        p = h.objectHelper.extend(p, a);
        c();
      },
      getData: function () {
        return c();
      },
    };
  });
  t.registerHandler("mds", function (f) {
    var h = new f.Storage("klaf_ie_user_storage");
    return {
      getData: function () {
        return { did: h.getData("uid") };
      },
    };
  });
  t.registerHandler("login", function (f, h) {
    var e = null,
      a = null,
      m = null,
      c = null,
      n = null,
      k = null,
      g = !1,
      p,
      l,
      d = new h.Promise(function (a, c) {
        p = a;
        l = c;
      });
    window.kfp = window.kfp || {};
    window.kfp.login_start = function (a, c) {
      var b = new Date().getTime();
      n = a;
      return h.Promise.race([
        h.Promise.timeout(500).then(f.session.fallback),
        d.then(f.session.get),
      ]).then(function (a) {
        var d = a.id + "_" + a.loginCount;
        m = d;
        if ("login" == c)
          return (
            (a = 1e3 + b - new Date().getTime()),
            f.session.increaseLoginCount(),
            (g = !0),
            h.Promise.race([h.Promise.timeout(a), k({ sendSync: !1 })]).then(
              function () {
                return d;
              }
            )
          );
        if ("prelogin" == c) return d;
        throw Error("unknown login phase");
      });
    };
    window.kfp.login = function (b, h, l, p, t) {
      a = l;
      e = p;
      n = b;
      c = t;
      m = h;
      return d.then(f.session.get).then(function () {
        g = !0;
        return k({ sendSync: !1 });
      });
    };
    return {
      start: function (a) {
        k = a.sendTrigger;
        return p();
      },
      abort: function (a) {
        return l(a.abortReason);
      },
      getData: function () {
        var b = g;
        g = !1;
        return b
          ? {
              userId: a,
              userName: e,
              obsSessionId: m,
              clientId: n,
              loginResult: c,
            }
          : null;
      },
    };
  });
  t.registerHandler("mouse", function () {
    function f(a) {
      return a.timeStamp
        ? Math.round(a.timeStamp + n[a.type].offset)
        : new Date().getTime();
    }
    function h(a) {
      var e = a.button;
      return a.which || void 0 === e
        ? a.which
        : e & 1
        ? 1
        : e & 2
        ? 3
        : e & 4
        ? 2
        : 0 === e &&
          "click" === a.type &&
          c.click.data.length &&
          ((a = c.click.data[c.click.data.length - 1]), "up" === a.type)
        ? a.id
        : 0;
    }
    function e(a, c) {
      return "function" === typeof document.addEventListener
        ? document.addEventListener(a, c)
        : document.attachEvent
        ? document.attachEvent("on" + a, c)
        : !1;
    }
    function a(a, c) {
      return "function" === typeof document.removeEventListener
        ? document.removeEventListener(a, c)
        : "function" === typeof document.detachEvent
        ? document.detachEvent("on" + a, c)
        : !1;
    }
    function m(a) {
      a = {
        type: a.type,
        screenX: a.screenX,
        screenY: a.screenY,
        timeStamp: a.timeStamp,
        relatedTarget: a.relatedTarget,
        fromElement: a.fromElement,
        toElement: a.toElement,
        button: a.button,
        which: a.which,
      };
      0 > a.screenX && (a.screenX = 0);
      0 > a.screenY && (a.screenY = 0);
      0 > a.timeStamp && (a.timeStamp = new Date().getTime());
      if (void 0 === n[a.type] || 100 > n[a.type].tries) {
        var e = new Date().getTime() - a.timeStamp;
        -100 < e && 100 > e && (e = 0);
        n[a.type] || (n[a.type] = { offset: e, tries: 1, total: e });
        n[a.type].total += e;
        n[a.type].tries++;
        n[a.type].offset = n[a.type].total / n[a.type].tries;
      }
      switch (a.type) {
        case "mousedown":
        case "mouseup":
        case "click":
          c.click.data.length >= c.click.threshold
            ? (c.click.overflow = !0)
            : c.click.data.push({
                type: c.click.types[a.type],
                x: Math.round(a.screenX),
                y: Math.round(a.screenY),
                tgen: f(a),
                tin: new Date().getTime(),
                id: h(a),
              });
          break;
        case "mousemove":
          if (
            a.screenX !== c.move.prevEvent.x ||
            a.screenY !== c.move.prevEvent.y
          )
            (c.move.prevEvent.x = a.screenX),
              (c.move.prevEvent.y = a.screenY),
              c.move.rawData.length >= c.move.threshold
                ? (c.move.overflow = !0)
                : c.move.rawData.push({ x: a.screenX, y: a.screenY, t: f(a) });
          break;
        case "mouseover":
        case "mouseout":
          a: {
            if (!a.relatedTarget) {
              void 0 === a.relatedTarget &&
                ("mouseover" == a.type && (a.relatedTarget = a.fromElement),
                "mouseout" == a.type && (a.relatedTarget = a.toElement));
              if (null !== a.relatedTarget) {
                a = void 0;
                break a;
              }
              if (c.enterleave.data.length >= c.enterleave.threshold) {
                c.enterleave.overflow = !0;
                a = void 0;
                break a;
              }
              c.enterleave.data.push({
                type: c.enterleave.types[a.type],
                x: Math.round(a.screenX),
                y: Math.round(a.screenY),
                tgen: f(a),
                tin: new Date().getTime(),
              });
            }
            a = void 0;
          }
          return a;
      }
    }
    var c = {
        click: {
          data: [],
          threshold: 100,
          overflow: !1,
          types: { mousedown: "down", mouseup: "up", click: "click" },
        },
        move: {
          prevEvent: { x: 0, y: 0 },
          rawData: [],
          data: [],
          threshold: 1e3,
          overflow: !1,
        },
        enterleave: {
          data: [],
          threshold: 100,
          overflow: !1,
          types: { mouseover: "enter", mouseout: "leave" },
        },
      },
      n = {},
      k = Math.floor(46.5);
    return {
      start: function () {
        e("mouseup", m);
        e("mousedown", m);
        e("click", m);
        e("mousemove", m);
        e("mouseover", m);
        e("mouseout", m);
      },
      abort: function () {
        a("mouseup", m);
        a("mousedown", m);
        a("click", m);
        a("mousemove", m);
      },
      getData: function (a) {
        var e, f, d;
        a = { data: c.click.data };
        var b,
          g,
          h,
          n,
          m = "",
          t = "",
          u = "",
          r;
        g = c.move.rawData.length;
        for (b = 0; b < g; b++) {
          h = c.move.rawData[b];
          n &&
            ((e = Math.round(h.x - n.x + k)),
            (f = Math.round(h.y - n.y + k)),
            (d = h.t - n.t));
          if (
            !(
              n &&
              " !#$%\x26'()*+,-./0123456789:;\x3c\x3d\x3e?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt(
                e
              ) &&
              " !#$%\x26'()*+,-./0123456789:;\x3c\x3d\x3e?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt(
                f
              ) &&
              " !#$%\x26'()*+,-./0123456789:;\x3c\x3d\x3e?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt(
                d
              )
            )
          )
            c.move.data.push(h),
              1 < c.move.data.length &&
                (r = m + t + u) &&
                (c.move.data[c.move.data.length - 2].d = r),
              (u = t = m = "");
          else if (e || f)
            (m += " !#$%\x26'()*+,-./0123456789:;\x3c\x3d\x3e?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt(
              e
            )),
              (t += " !#$%\x26'()*+,-./0123456789:;\x3c\x3d\x3e?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt(
                f
              )),
              (u += " !#$%\x26'()*+,-./0123456789:;\x3c\x3d\x3e?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt(
                d
              ));
          n = h;
        }
        if ((r = m + t + u)) c.move.data[c.move.data.length - 1].d = r;
        c.move.rawData = [];
        e = {
          click: a,
          move: { data: c.move.data },
          enterleave: { data: c.enterleave.data },
        };
        c.click.overflow && (e.click.overflow = !0);
        c.move.overflow && (e.move.overflow = !0);
        c.click.data = [];
        c.click.overflow = !1;
        c.move.data = [];
        c.move.rawData = [];
        c.move.overflow = !1;
        c.enterleave.data = [];
        c.enterleave.overflow = !1;
        return e;
      },
    };
  });
  t.registerHandler("clientcaps", function () {
    var f;
    return {
      start: function () {
        var h, e, a, m, c;
        h = document.getElementsByTagName("body")[0];
        e = document.createElement("div");
        e.innerHTML =
          '\x3cdiv style\x3d"behavior:url(#default#clientCaps)" ID\x3d"oClientCaps" \x3e\x3c/div\x3e';
        h.appendChild(e);
        h = document.getElementById("oClientCaps");
        if (
          "undefined" !== typeof h.addBehavior &&
          ((f = {
            availHeight: h.availHeight,
            availWidth: h.availWidth,
            bufferDepth: h.bufferDepth,
            colorDepth: h.colorDepth,
            connectionType: h.connectionType,
            cookieEnabled: h.cookieEnabled,
            cpuClass: h.cpuClass,
            height: h.height,
            javaEnabled: h.javaEnabled,
            platform: h.platform,
            systemLanguage: h.systemLanguage,
            userLanguage: h.userLanguage,
            width: h.width,
            capabilities: [],
          }),
          "undefined" !== typeof h.getComponentVersion)
        )
          for (
            e = "{7790769C-0471-11D2-AF11-00C04FA35D02} {89820200-ECBD-11CF-8B85-00AA005B4340} {283807B5-2C60-11D0-A31D-00AA00B92C03} {4F216970-C90C-11D1-B5C7-0000F8051515} {44BBA848-CC51-11CF-AAFA-00AA00B6015C} {9381D8F2-0288-11D0-9501-00AA00B911A5} {36F8EC70-C29A-11D1-B5C7-0000F8051515} {5A8D6EE0-3E18-11D0-821E-444553540000} {89820200-ECBD-11CF-8B85-00AA005B4383} {08B0E5C0-4FCB-11CF-AAA5-00401C608555} {45EA75A0-A269-11D1-B5BF-0000F8051515} {DE5AED00-A4BF-11D1-9948-00C04F98BBC9} {22D6F312-B0F6-11D0-94AB-0080C74C7E95} {44BBA842-CC51-11CF-AAFA-00AA00B6015B} {3AF36230-A269-11D1-B5BF-0000F8051515} {44BBA840-CC51-11CF-AAFA-00AA00B6015C} {CC2A9BA0-3BDD-11D0-821E-444553540000} {08B0E5C0-4FCB-11CF-AAA5-00401C608500} {60B49E34-C7CC-11D0-8953-00A0C90347FF} {03F998B2-0E00-11D3-A498-00104B6EB52E} {0FDE1F56-0D59-4FD7-9624-E3DF6B419D0E} {10072CEC-8CC1-11D1-986E-00A0C955B42F} {1B00725B-C455-4DE6-BFB6-AD540AD427CD} {4278C270-A269-11D1-B5BF-0000F8051515} {44BBA855-CC51-11CF-AAFA-00AA00B6015C} {4F645220-306D-11D2-995D-00C04F98BBC9} {5FD399C0-A70A-11D1-9948-00C04F98BBC9} {630B1DA0-B465-11D1-9948-00C04F98BBC9} {6FAB99D0-BAB8-11D1-994A-00C04F98BBC9} {C9E9A340-D1F1-11D0-821E-444553540600} {D27CDB6E-AE6D-11CF-96B8-444553540000} {E92B03AB-B707-11D2-9CBD-0000F87A369E} {47F67D00-9E55-11D1-BAEF-00C04FC2D130} {76C19B38-F0C8-11CF-87CC-0020AFEECF20} {76C19B34-F0C8-11CF-87CC-0020AFEECF20} {76C19B33-F0C8-11CF-87CC-0020AFEECF20} {76C19B36-F0C8-11CF-87CC-0020AFEECF20} {76C19B30-F0C8-11CF-87CC-0020AFEECF20} {76C19B31-F0C8-11CF-87CC-0020AFEECF20} {76C19B50-F0C8-11CF-87CC-0020AFEECF20} {2A202491-F00D-11CF-87CC-0020AFEECF20} {5945C046-LE7D-LLDL-BC44-00C04FD912BE} {76C19B32-F0C8-11CF-87CC-0020AFEECF20} {76C19B35-F0C8-11CF-87CC-0020AFEECF20} {3BF42070-B3B1-11D1-B5C5-0000F8051515} {76C19B37-F0C8-11CF-87CC-0020AFEECF20} {73FA19D0-2D75-11D2-995D-00C04F98BBC9} {0fde1f56-0d59-4fd7-9624-e3df6b419d0f} {BEF6E001-A874-101A-8BBA-00AA00300CAB} {18b6f603-bdc4-4eee-9598-d2a4d1375605} {5945c046-1e7d-11d1-bc44-00c04fd912be} {44BBA855-CC51-11CF-AAFA-00AA00B6015D} {44BBA855-CC51-11CF-AAFA-00AA00B6015F} {9a2e4ab0-9a7e-11d2-9da1-00c04f98bbc9} {C9E9A340-D1F1-11D0-821E-444553540300} {F94C2DA4-708E-11d3-AFB2-00C04F6814C4}".split(
              " "
            ),
              c = e.length,
              m = 0;
            m < c;
            m++
          )
            (a = h.getComponentVersion(e[m], "ComponentID")) &&
              f.capabilities.push({ id: e[m], version: a });
      },
      getData: function () {
        return f;
      },
    };
  });
  t.registerHandler("fonts", function (f, h) {
    var e = "Abadi MT Condensed Light;Abadi MT Condensed;Adobe Arabic;Adobe Fan Heiti Std;Adobe Kaiti Std;Agency FB;Alba;Andy;Arabic Typesetting;Baby Kruffy;Beesknees ITC;Bitstream Vera Sans;Bodoni MT;Book Antiqua;Bookman Old Style;Bradley Hand ITC;Broadway;Cambria;Cataneo BT;Champignon;Courier;DFKai-SB;DejaVu Sans;DejaVu Serif;Desdemona;Devanagari Sangam MN;Engravers MT;Estrangelo Edessa;Eurostile;FIRSTHOME;Forte;FreeSans;GENUINE;Gabriola;Garamond;Geneva;Georgia;Gill Sans;Haettenschweiler;Harrington;Helvetica;Helvetica Neue;Hoefler Text;Impact;John Handy LET;Jokerman;Kabel Ult BT;KaiTi;Kartika;Kino MT;Kristen ITC;Latha;Lucida Grande;Lucida Handwriting;Lucida Sans Typewriter;Lucida Sans;MS Gothic;MS Mincho;MS Reference Serif;MV Boli;Maiandra GD;Malgun Gothic;Mangal;Matisse ITC;Meiryo UI;Microsoft JhengHei;Microsoft YaHei;MingLiU;MisterEarl BT;Mistral;Monotype Corsiva;News Gothic MT;Niagara Solid;Optima;PMingLiU;Papyrus;ParkAvenue BT;Perpetua;Pristina;Rockwell;Ruach LET;STKaiti;Scruff LET;Segoe Print;Showcard Gothic;Shruti;SimHei;SimSun;Smudger LET;Snap ITC;Square721 BT;Staccato222 BT;Stencil;Sylfaen;Thonburi;Tunga;Tw Cen MT;Univers;Verdana Ref;Viner Hand ITC;Bangla Sangam MN;Consolas;Corbel;Kannada MN;Arial;Baskerville Old Face;STSong;Tahoma;Times New Roman;Trebuchet MS;Ubuntu;Malayalam MN;Chalkduster;Adobe Fangsong Std;Aparajita;Baskerville;Bitstream Vera Sans Mono;CAMPBELL;Calibri;Capitals;Franklin Gothic Book;Geneva CY;Gentium;Goudy Old Style;High Tower Text;Jokerman LET;Microsoft Himalaya;Synchro LET;Comic Sans MS;Roboto;BlinkMacSystemFont".split(
        ";"
      ),
      a = [],
      m = !1;
    return {
      getData: function () {
        if (!m) {
          var c,
            f,
            k,
            g,
            p,
            l = ["monospace", "sans-serif", "serif"],
            d = l.length,
            b,
            q = [];
          b = document.createElement("span");
          b.style.fontSize = "72px";
          b.style.position = "absolute";
          b.style.top = "-1000px";
          b.style.left = "-1000px";
          b.innerHTML = "mmmmmmmmmmlli";
          h.dom.append(b, document.body);
          p = l.length;
          for (c = 0; c < p; c++)
            (b.style.fontFamily = l[c]),
              (q[c] = {
                width: b.offsetWidth || b.clientWidth || b.scrollWidth,
                height: b.offsetHeight || b.clientHeight || b.scrollHeight,
              });
          p = e.length;
          for (c = 0; c < p; c++)
            for (f = 0; f < d; f++)
              if (
                ((b.style.fontFamily = e[c] + "," + l[f]),
                (k = b.offsetWidth || b.clientWidth || b.scrollWidth),
                (g = b.offsetHeight || b.clientHeight || b.scrollHeight),
                k !== q[f].width || g !== q[f].height)
              ) {
                a.push(e[c]);
                break;
              }
          h.dom.remove(b);
          m = !0;
        }
        return a;
      },
    };
  });
  t.registerHandler("screen", function () {
    return {
      getData: function () {
        var f,
          h,
          e = {
            width: null,
            height: null,
            availHeight: null,
            availWidth: null,
            colorDepth: null,
            pixelDepth: null,
            deviceXDPI: null,
            deviceYDPI: null,
            logicalXDPI: null,
            logicalYDPI: null,
            systemXDPI: null,
            systemYDPI: null,
            fontSmoothingEnabled: null,
          };
        f = window.screen;
        for (h in f) e.hasOwnProperty(h) && void 0 !== f[h] && (e[h] = f[h]);
        return e;
      },
    };
  });
  t.registerHandler("canvas", function (f, h) {
    var e = { enabled: !1 },
      a = "toBlob msToBlob captureStream mozOpaque mozGetAsFile mozFetchAsStream transferControlToOffscreen probablySupportsContext setContext transferControlToProxy".split(
        " "
      ),
      m = !1;
    return {
      getData: function () {
        var c;
        if (!m) {
          var f, k, g;
          m = !0;
          c = document.createElement("canvas");
          if (c.getContext && (f = c.getContext("2d"))) {
            e.enabled = !0;
            h.dom.append(c, document.documentElement);
            c.style.position = "absolute";
            c.style.right = "-1000px";
            c.style.top = "-1000px";
            c.style.border = "1px solid #000";
            c.width = 240;
            c.height = 20;
            f.font = "14px 'Arial'";
            f.textBaseline = "alphabetic";
            f.fillStyle = "#f60";
            f.fillRect(120, 0, 56, 20);
            k = f.createLinearGradient(0, 0, 100, 0);
            k.addColorStop(0, "green");
            k.addColorStop(1, "white");
            f.fillStyle = k;
            f.fillRect(0, 0, 100, 20);
            f.fillStyle = "#069";
            f.fillText("Kaspersky,ru!com \x3ccanvas\x3e 1.0.8.4", 2, 15);
            f.fillStyle = "rgba(102, 204, 0, 0.7)";
            f.fillText("Kaspersky,ru!com \x3ccanvas\x3e 1.0.8.4", 4, 17);
            g = 20;
            for (k = 0; k < g; k++)
              (f.fillStyle = "rgba(" + (255 - k) + ", 0, 0, 1)"),
                f.fillRect(230, k, 10, 1);
            c.toDataURL && (e.image = c.toDataURL("image/png", 1));
            e.props = [];
            g = a.length;
            for (k = 0; k < g; k++) void 0 !== c[a[k]] && e.props.push(a[k]);
          }
        }
        c = e;
        return c;
      },
    };
  });
  t.registerHandler("webgl", function (f, h) {
    function e(a) {
      var c = g.getShaderPrecisionFormat(a, g.HIGH_FLOAT),
        b = g.getShaderPrecisionFormat(a, g.MEDIUM_FLOAT);
      a = g.getShaderPrecisionFormat(a, g.LOW_FLOAT);
      return {
        high: {
          precision: c.precision,
          rangeMax: c.rangeMax,
          rangeMin: c.rangeMin,
        },
        medium: {
          precision: b.precision,
          rangeMax: b.rangeMax,
          rangeMin: b.rangeMin,
        },
        low: {
          precision: a.precision,
          rangeMax: a.rangeMax,
          rangeMin: a.rangeMin,
        },
      };
    }
    function a(a) {
      return 0 !== a && 0 === (a & (a - 1));
    }
    function m(f) {
      var d, b;
      k = document.createElement("canvas");
      h.dom.append(k, document.documentElement);
      k.style.position = "absolute";
      k.style.left = "-1000px";
      k.style.top = "-1000px";
      k.style.width = "1px";
      k.style.height = "1px";
      if ("undefined" !== typeof window[n[f].contextName]) {
        c[f].enabled = !0;
        for (b = 0; b < n[f].names.length; b++)
          if ((g = k.getContext(n[f].names[b], { stencil: !0 }))) {
            c[f].contextName = n[f].names[b];
            break;
          }
        if (g) {
          b = g.getContextAttributes();
          c[f].contextAttrs = {};
          for (d in b) b.hasOwnProperty(d) && (c[f].contextAttrs[d] = b[d]);
          (b = g.getExtension("WEBGL_debug_renderer_info"))
            ? ((d = g.getParameter(b.UNMASKED_RENDERER_WEBGL)),
              (b = g.getParameter(b.UNMASKED_VENDOR_WEBGL)))
            : (b = d = void 0);
          c[f].unmaskedVendor = b || "";
          c[f].unmaskedRenderer = d || "";
          d = c[f];
          b = g.getParameter(g.ALIASED_LINE_WIDTH_RANGE);
          b =
            ("Win32" !== navigator.platform &&
              "Win64" !== navigator.platform) ||
            "Internet Explorer" === g.getParameter(g.RENDERER) ||
            1 !== b[0] ||
            1 !== b[1]
              ? null
              : a(g.getParameter(g.MAX_VERTEX_UNIFORM_VECTORS)) &&
                a(g.getParameter(g.MAX_FRAGMENT_UNIFORM_VECTORS))
              ? "D3D11"
              : "D3D9";
          d.angle = b;
          d = c[f];
          b = (b = g.getExtension("WEBGL_draw_buffers"))
            ? g.getParameter(b.MAX_DRAW_BUFFERS_WEBGL)
            : 1;
          d.maxColorBuffers = b;
          c[f].vertexShaderPrecision = e(g.VERTEX_SHADER);
          c[f].fragmentShaderPrecision = e(g.FRAGMENT_SHADER);
          d = c[f];
          b = g.getShaderPrecisionFormat(g.FRAGMENT_SHADER, g.HIGH_FLOAT);
          var l = g.getShaderPrecisionFormat(g.FRAGMENT_SHADER, g.HIGH_INT);
          d.fragmentShaderFloatIntPrecision = {
            HIGH_FLOAT: {
              precision: b.precision,
              rangeMax: b.rangeMax,
              rangeMin: b.rangeMin,
            },
            HIGH_INT: {
              precision: l.precision,
              rangeMax: l.rangeMax,
              rangeMin: l.rangeMin,
            },
          };
          c[f].extensions = g.getSupportedExtensions();
          d = c[f];
          b =
            g.getExtension("EXT_texture_filter_anisotropic") ||
            g.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
            g.getExtension("MOZ_EXT_texture_filter_anisotropic");
          d.anisotropy = {
            MAX_TEXTURE_MAX_ANISOTROPY_EXT: b.MAX_TEXTURE_MAX_ANISOTROPY_EXT,
            TEXTURE_MAX_ANISOTROPY_EXT: b.TEXTURE_MAX_ANISOTROPY_EXT,
          };
          b = n[f].attributes.length;
          var m;
          for (d = 0; d < b; d++)
            if (((m = n[f].attributes[d]), /(_RANGE|_DIMS)/.test(m))) {
              var l = c[f],
                p = h.strHelper.snakeToCamel(m);
              m = g.getParameter(g[m]);
              l[p] = [m[0], m[1]];
            } else c[f][h.strHelper.snakeToCamel(m)] = g.getParameter(g[m]);
          h.dom.remove(k, document.documentElement);
          g = k = null;
        }
      }
    }
    var c = { v1: { enabled: !1 }, v2: { enabled: !1 } },
      n = {
        v1: {
          attributes: "VERSION SHADING_LANGUAGE_VERSION VENDOR RENDERER RED_BITS GREEN_BITS BLUE_BITS ALPHA_BITS DEPTH_BITS STENCIL_BITS MAX_RENDERBUFFER_SIZE MAX_COMBINED_TEXTURE_IMAGE_UNITS MAX_CUBE_MAP_TEXTURE_SIZE MAX_FRAGMENT_UNIFORM_VECTORS MAX_TEXTURE_IMAGE_UNITS MAX_TEXTURE_SIZE MAX_VARYING_VECTORS MAX_VERTEX_ATTRIBS MAX_VERTEX_TEXTURE_IMAGE_UNITS MAX_VERTEX_UNIFORM_VECTORS ALIASED_LINE_WIDTH_RANGE ALIASED_POINT_SIZE_RANGE MAX_VIEWPORT_DIMS".split(
            " "
          ),
          names: ["webgl", "experimental-webgl"],
          contextName: "WebGLRenderingContext",
        },
        v2: {
          attributes: "MAX_VERTEX_UNIFORM_COMPONENTS MAX_VERTEX_UNIFORM_BLOCKS MAX_VERTEX_OUTPUT_COMPONENTS MAX_VARYING_COMPONENTS MAX_FRAGMENT_UNIFORM_COMPONENTS MAX_FRAGMENT_UNIFORM_BLOCKS MAX_FRAGMENT_INPUT_COMPONENTS MIN_PROGRAM_TEXEL_OFFSET MAX_PROGRAM_TEXEL_OFFSET MAX_DRAW_BUFFERS MAX_COLOR_ATTACHMENTS MAX_SAMPLES MAX_3D_TEXTURE_SIZE MAX_ARRAY_TEXTURE_LAYERS MAX_TEXTURE_LOD_BIAS MAX_UNIFORM_BUFFER_BINDINGS MAX_UNIFORM_BLOCK_SIZE UNIFORM_BUFFER_OFFSET_ALIGNMENT MAX_COMBINED_UNIFORM_BLOCKS MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS MAX_ELEMENT_INDEX MAX_SERVER_WAIT_TIMEOUT".split(
            " "
          ),
          names: ["webgl2", "experimental-webgl2"],
          contextName: "WebGL2RenderingContext",
        },
      },
      k,
      g,
      p = !1;
    return {
      getData: function () {
        p || (m("v1"), m("v2"), (p = !0));
        return c;
      },
    };
  });
  t.registerHandler("did", function (f, h) {
    var e = { cookie: null, storage: null },
      a = function (a) {
        h.cookies.set("KFP_DID", a, { expires: new Date(2099, 12, 31) });
        if ("localStorage" in window)
          try {
            window.localStorage.KFP_DID = a;
          } catch (c) {}
      };
    return {
      getData: function () {
        e.cookie = h.cookies.get("KFP_DID");
        e.storage =
          "localStorage" in window ? window.localStorage.KFP_DID : e.cookie;
        e.cookie || e.storage
          ? e.cookie
            ? e.storage || a(e.cookie)
            : a(e.storage)
          : a(f.uuid.generate());
        return e.cookie === e.storage ? { cookie: e.cookie } : e;
      },
    };
  });
  t.registerHandler("nav", function (f, h) {
    function e(a) {
      (a = a || window.event) &&
        (a = a.srcElement || a.target || a.targetElement) &&
        "a" === (a.tagName || "").toLowerCase() &&
        a.href &&
        ((l = a.href), c(), g());
    }
    function a(a) {
      if ((a = a || window.event)) {
        var b = a.srcElement || a.target || a.targetElement,
          c = a.which || a.keyCode;
        if (b && (13 === c || 32 === c || 0 === c))
          switch ((b.tagName || "").toLowerCase()) {
            case "a":
              e(a);
          }
      }
    }
    function m(a) {
      (a = a || window.event) &&
        (a = a.srcElement || a.target || a.targetElement) &&
        "form" === (a.tagName || "").toLowerCase() &&
        a.action &&
        ((l = a.action), c(), g());
    }
    function c() {
      p = window.location.href;
    }
    function n() {
      c();
      g();
    }
    function k() {
      d && window.clearTimeout(d);
      window.location.href !== p && (c(), g());
      d = window.setTimeout(f.delegate(this, k), 200);
    }
    var g = function () {},
      p = "",
      l = "",
      d = null;
    return {
      start: function (b) {
        g = b.sendTrigger;
        h.dom.bind("a", "onmousedown", e, !0);
        h.dom.bind("a", "onkeydown", a, !0);
        h.dom.bind("form", "onsubmit", m, !0);
        c();
        "onhashchange" in window && h.dom.bind(window, "hashchange", n);
        "onpopstate" in window || "PopStateEvent" in window
          ? h.dom.bind(window, "popstate", n)
          : k.call(this);
      },
      getData: function () {
        var a = /\w\/(.+)$/.exec(l),
          a =
            a && a[1]
              ? l.replace(a[1], B.helpers.strHelper.maskNumbers(a[1]))
              : l;
        l = "";
        return { nextUrl: a };
      },
    };
  });
  t.init();
})();
/*
page: http://www.touchbank.com/
url: https://ru.fp.kaspersky-labs.com/das.js
*/
