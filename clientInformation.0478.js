if (
  ((window.Modernizr = (function (t, e, i) {
    function n(t) {
      y.cssText = t;
    }
    function s(t, e) {
      return n(C.join(t + ";") + (e || ""));
    }
    function o(t, e) {
      return typeof t === e;
    }
    function r(t, e) {
      return !!~("" + t).indexOf(e);
    }
    function a(t, e) {
      for (var n in t) if (y[t[n]] !== i) return "pfx" == e ? t[n] : !0;
      return !1;
    }
    function l(t, e, n) {
      for (var s in t) {
        var r = e[t[s]];
        if (r !== i)
          return n === !1 ? t[s] : o(r, "function") ? r.bind(n || e) : r;
      }
      return !1;
    }
    function c(t, e, i) {
      var n = t.charAt(0).toUpperCase() + t.substr(1),
        s = (t + " " + T.join(n + " ") + n).split(" ");
      return o(e, "string") || o(e, "undefined")
        ? a(s, e)
        : ((s = (t + " " + S.join(n + " ") + n).split(" ")), l(s, e, i));
    }
    function u() {
      (f.input = (function (i) {
        for (var n = 0, s = i.length; s > n; n++) M[i[n]] = !!(i[n] in _);
        return (
          M.list &&
            (M.list = !(
              !e.createElement("datalist") || !t.HTMLDataListElement
            )),
          M
        );
      })(
        "autocomplete autofocus list placeholder max min multiple pattern required step".split(
          " "
        )
      )),
        (f.inputtypes = (function (t) {
          for (var n, s, o, r = 0, a = t.length; a > r; r++)
            _.setAttribute("type", (s = t[r])),
              (n = "text" !== _.type),
              n &&
                ((_.value = w),
                (_.style.cssText = "position:absolute;visibility:hidden;"),
                /^range$/.test(s) && _.style.WebkitAppearance !== i
                  ? (g.appendChild(_),
                    (o = e.defaultView),
                    (n =
                      o.getComputedStyle &&
                      "textfield" !==
                        o.getComputedStyle(_, null).WebkitAppearance &&
                      0 !== _.offsetHeight),
                    g.removeChild(_))
                  : /^(search|tel)$/.test(s) ||
                    (/^(url|email)$/.test(s)
                      ? (n = _.checkValidity && _.checkValidity() === !1)
                      : /^color$/.test(s)
                      ? (g.appendChild(_),
                        g.offsetWidth,
                        (n = _.value != w),
                        g.removeChild(_))
                      : (n = _.value != w))),
              (E[t[r]] = !!n);
          return E;
        })(
          "search tel url email datetime date month week time datetime-local number range color".split(
            " "
          )
        ));
    }
    var h,
      d,
      p = "2.5.3",
      f = {},
      m = !0,
      g = e.documentElement,
      v = "modernizr",
      b = e.createElement(v),
      y = b.style,
      _ = e.createElement("input"),
      w = ":)",
      x = {}.toString,
      C = " -webkit- -moz- -o- -ms- ".split(" "),
      k = "Webkit Moz O ms",
      T = k.split(" "),
      S = k.toLowerCase().split(" "),
      D = { svg: "http://www.w3.org/2000/svg" },
      I = {},
      E = {},
      M = {},
      N = [],
      P = N.slice,
      A = function (t, i, n, s) {
        var o,
          r,
          a,
          l = e.createElement("div"),
          c = e.body,
          u = c ? c : e.createElement("body");
        if (parseInt(n, 10))
          for (; n--; )
            (a = e.createElement("div")),
              (a.id = s ? s[n] : v + (n + 1)),
              l.appendChild(a);
        return (
          (o = ["&#173;", "<style>", t, "</style>"].join("")),
          (l.id = v),
          (u.innerHTML += o),
          u.appendChild(l),
          c || ((u.style.background = ""), g.appendChild(u)),
          (r = i(l, t)),
          c ? l.parentNode.removeChild(l) : u.parentNode.removeChild(u),
          !!r
        );
      },
      j = function (e) {
        var i = t.matchMedia || t.msMatchMedia;
        if (i) return i(e).matches;
        var n;
        return (
          A(
            "@media " + e + " { #" + v + " { position: absolute; } }",
            function (e) {
              n =
                "absolute" ==
                (t.getComputedStyle
                  ? getComputedStyle(e, null)
                  : e.currentStyle
                ).position;
            }
          ),
          n
        );
      },
      O = (function () {
        function t(t, s) {
          (s = s || e.createElement(n[t] || "div")), (t = "on" + t);
          var r = t in s;
          return (
            r ||
              (s.setAttribute || (s = e.createElement("div")),
              s.setAttribute &&
                s.removeAttribute &&
                (s.setAttribute(t, ""),
                (r = o(s[t], "function")),
                o(s[t], "undefined") || (s[t] = i),
                s.removeAttribute(t))),
            (s = null),
            r
          );
        }
        var n = {
          select: "input",
          change: "input",
          submit: "form",
          reset: "form",
          error: "img",
          load: "img",
          abort: "img",
        };
        return t;
      })(),
      H = {}.hasOwnProperty;
    (d =
      o(H, "undefined") || o(H.call, "undefined")
        ? function (t, e) {
            return e in t && o(t.constructor.prototype[e], "undefined");
          }
        : function (t, e) {
            return H.call(t, e);
          }),
      Function.prototype.bind ||
        (Function.prototype.bind = function (t) {
          var e = this;
          if ("function" != typeof e) throw new TypeError();
          var i = P.call(arguments, 1),
            n = function () {
              if (this instanceof n) {
                var s = function () {};
                s.prototype = e.prototype;
                var o = new s(),
                  r = e.apply(o, i.concat(P.call(arguments)));
                return Object(r) === r ? r : o;
              }
              return e.apply(t, i.concat(P.call(arguments)));
            };
          return n;
        });
    (function (i, n) {
      var s = i.join(""),
        o = n.length;
      A(
        s,
        function (i, n) {
          for (
            var s = e.styleSheets[e.styleSheets.length - 1],
              r = s
                ? s.cssRules && s.cssRules[0]
                  ? s.cssRules[0].cssText
                  : s.cssText || ""
                : "",
              a = i.childNodes,
              l = {};
            o--;

          )
            l[a[o].id] = a[o];
          (f.touch =
            "ontouchstart" in t ||
            (t.DocumentTouch && e instanceof DocumentTouch) ||
            9 === (l.touch && l.touch.offsetTop)),
            (f.csstransforms3d =
              9 === (l.csstransforms3d && l.csstransforms3d.offsetLeft) &&
              3 === l.csstransforms3d.offsetHeight),
            (f.generatedcontent =
              (l.generatedcontent && l.generatedcontent.offsetHeight) >= 1),
            (f.fontface = /src/i.test(r) && 0 === r.indexOf(n.split(" ")[0]));
        },
        o,
        n
      );
    })(
      [
        '@font-face {font-family:"font";src:url("https://")}',
        [
          "@media (",
          C.join("touch-enabled),("),
          v,
          ")",
          "{#touch{top:9px;position:absolute}}",
        ].join(""),
        [
          "@media (",
          C.join("transform-3d),("),
          v,
          ")",
          "{#csstransforms3d{left:9px;position:absolute;height:3px;}}",
        ].join(""),
        ['#generatedcontent:after{content:"', w, '";visibility:hidden}'].join(
          ""
        ),
      ],
      ["fontface", "touch", "csstransforms3d", "generatedcontent"]
    );
    (I.flexbox = function () {
      return c("flexOrder");
    }),
      (I["flexbox-legacy"] = function () {
        return c("boxDirection");
      }),
      (I.canvas = function () {
        var t = e.createElement("canvas");
        return !(!t.getContext || !t.getContext("2d"));
      }),
      (I.canvastext = function () {
        return !(
          !f.canvas ||
          !o(e.createElement("canvas").getContext("2d").fillText, "function")
        );
      }),
      (I.webgl = function () {
        try {
          var n,
            s = e.createElement("canvas");
          (n = !(
            !t.WebGLRenderingContext ||
            (!s.getContext("experimental-webgl") && !s.getContext("webgl"))
          )),
            (s = i);
        } catch (o) {
          n = !1;
        }
        return n;
      }),
      (I.touch = function () {
        return f.touch;
      }),
      (I.geolocation = function () {
        return !!navigator.geolocation;
      }),
      (I.postmessage = function () {
        return !!t.postMessage;
      }),
      (I.websqldatabase = function () {
        return !!t.openDatabase;
      }),
      (I.indexedDB = function () {
        return !!c("indexedDB", t);
      }),
      (I.hashchange = function () {
        return (
          O("hashchange", t) && (e.documentMode === i || e.documentMode > 7)
        );
      }),
      (I.history = function () {
        return !(!t.history || !history.pushState);
      }),
      (I.draganddrop = function () {
        var t = e.createElement("div");
        return "draggable" in t || ("ondragstart" in t && "ondrop" in t);
      }),
      (I.websockets = function () {
        for (var e = -1, i = T.length; ++e < i; )
          if (t[T[e] + "WebSocket"]) return !0;
        return "WebSocket" in t;
      }),
      (I.rgba = function () {
        return (
          n("background-color:rgba(150,255,150,.5)"),
          r(y.backgroundColor, "rgba")
        );
      }),
      (I.hsla = function () {
        return (
          n("background-color:hsla(120,40%,100%,.5)"),
          r(y.backgroundColor, "rgba") || r(y.backgroundColor, "hsla")
        );
      }),
      (I.multiplebgs = function () {
        return (
          n("background:url(https://),url(https://),red url(https://)"),
          /(url\s*\(.*?){3}/.test(y.background)
        );
      }),
      (I.backgroundsize = function () {
        return c("backgroundSize");
      }),
      (I.borderimage = function () {
        return c("borderImage");
      }),
      (I.borderradius = function () {
        return c("borderRadius");
      }),
      (I.boxshadow = function () {
        return c("boxShadow");
      }),
      (I.textshadow = function () {
        return "" === e.createElement("div").style.textShadow;
      }),
      (I.opacity = function () {
        return s("opacity:.55"), /^0.55$/.test(y.opacity);
      }),
      (I.cssanimations = function () {
        return c("animationName");
      }),
      (I.csscolumns = function () {
        return c("columnCount");
      }),
      (I.cssgradients = function () {
        var t = "background-image:",
          e = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
          i = "linear-gradient(left top,#9f9, white);";
        return (
          n(
            (t + "-webkit- ".split(" ").join(e + t) + C.join(i + t)).slice(
              0,
              -t.length
            )
          ),
          r(y.backgroundImage, "gradient")
        );
      }),
      (I.cssreflections = function () {
        return c("boxReflect");
      }),
      (I.csstransforms = function () {
        return !!c("transform");
      }),
      (I.csstransforms3d = function () {
        var t = !!c("perspective");
        return (
          t && "webkitPerspective" in g.style && (t = f.csstransforms3d), t
        );
      }),
      (I.csstransitions = function () {
        return c("transition");
      }),
      (I.fontface = function () {
        return f.fontface;
      }),
      (I.generatedcontent = function () {
        return f.generatedcontent;
      }),
      (I.video = function () {
        var t = e.createElement("video"),
          i = !1;
        try {
          (i = !!t.canPlayType) &&
            ((i = new Boolean(i)),
            (i.ogg = t
              .canPlayType('video/ogg; codecs="theora"')
              .replace(/^no$/, "")),
            (i.h264 = t
              .canPlayType('video/mp4; codecs="avc1.42E01E"')
              .replace(/^no$/, "")),
            (i.webm = t
              .canPlayType('video/webm; codecs="vp8, vorbis"')
              .replace(/^no$/, "")));
        } catch (n) {}
        return i;
      }),
      (I.audio = function () {
        var t = e.createElement("audio"),
          i = !1;
        try {
          (i = !!t.canPlayType) &&
            ((i = new Boolean(i)),
            (i.ogg = t
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, "")),
            (i.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, "")),
            (i.wav = t
              .canPlayType('audio/wav; codecs="1"')
              .replace(/^no$/, "")),
            (i.m4a = (
              t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")
            ).replace(/^no$/, "")));
        } catch (n) {}
        return i;
      }),
      (I.localstorage = function () {
        try {
          return localStorage.setItem(v, v), localStorage.removeItem(v), !0;
        } catch (t) {
          return !1;
        }
      }),
      (I.sessionstorage = function () {
        try {
          return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0;
        } catch (t) {
          return !1;
        }
      }),
      (I.webworkers = function () {
        return !!t.Worker;
      }),
      (I.applicationcache = function () {
        return !!t.applicationCache;
      }),
      (I.svg = function () {
        return (
          !!e.createElementNS && !!e.createElementNS(D.svg, "svg").createSVGRect
        );
      }),
      (I.inlinesvg = function () {
        var t = e.createElement("div");
        return (
          (t.innerHTML = "<svg/>"),
          (t.firstChild && t.firstChild.namespaceURI) == D.svg
        );
      }),
      (I.smil = function () {
        return (
          !!e.createElementNS &&
          /SVGAnimate/.test(x.call(e.createElementNS(D.svg, "animate")))
        );
      }),
      (I.svgclippaths = function () {
        return (
          !!e.createElementNS &&
          /SVGClipPath/.test(x.call(e.createElementNS(D.svg, "clipPath")))
        );
      });
    for (var $ in I)
      d(I, $) &&
        ((h = $.toLowerCase()),
        (f[h] = I[$]()),
        N.push((f[h] ? "" : "no-") + h));
    return (
      f.input || u(),
      (f.addTest = function (t, e) {
        if ("object" == typeof t)
          for (var n in t) d(t, n) && f.addTest(n, t[n]);
        else {
          if (((t = t.toLowerCase()), f[t] !== i)) return f;
          (e = "function" == typeof e ? e() : e),
            (g.className += " " + (e ? "" : "no-") + t),
            (f[t] = e);
        }
        return f;
      }),
      n(""),
      (b = _ = null),
      (function (t, e) {
        function i(t, e) {
          var i = t.createElement("p"),
            n = t.getElementsByTagName("head")[0] || t.documentElement;
          return (
            (i.innerHTML = "x<style>" + e + "</style>"),
            n.insertBefore(i.lastChild, n.firstChild)
          );
        }
        function n() {
          var t = u.elements;
          return "string" == typeof t ? t.split(" ") : t;
        }
        function s(t) {
          var e = {},
            i = t.createElement,
            s = t.createDocumentFragment,
            o = s();
          (t.createElement = function (t) {
            var n = (e[t] || (e[t] = i(t))).cloneNode();
            return u.shivMethods && n.canHaveChildren && !c.test(t)
              ? o.appendChild(n)
              : n;
          }),
            (t.createDocumentFragment = Function(
              "h,f",
              "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                n()
                  .join()
                  .replace(/\w+/g, function (t) {
                    return (e[t] = i(t)), o.createElement(t), 'c("' + t + '")';
                  }) +
                ");return n}"
            )(u, o));
        }
        function o(t) {
          var e;
          return t.documentShived
            ? t
            : (u.shivCSS &&
                !r &&
                (e = !!i(
                  t,
                  "article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}"
                )),
              a || (e = !s(t)),
              e && (t.documentShived = e),
              t);
        }
        var r,
          a,
          l = t.html5 || {},
          c = /^<|^(?:button|form|map|select|textarea)$/i;
        !(function () {
          var t = e.createElement("a");
          (t.innerHTML = "<xyz></xyz>"),
            (r = "hidden" in t),
            (a =
              1 == t.childNodes.length ||
              (function () {
                try {
                  e.createElement("a");
                } catch (t) {
                  return !0;
                }
                var i = e.createDocumentFragment();
                return (
                  "undefined" == typeof i.cloneNode ||
                  "undefined" == typeof i.createDocumentFragment ||
                  "undefined" == typeof i.createElement
                );
              })());
        })();
        var u = {
          elements:
            l.elements ||
            "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
          shivCSS: !(l.shivCSS === !1),
          shivMethods: !(l.shivMethods === !1),
          type: "default",
          shivDocument: o,
        };
        (t.html5 = u), o(e);
      })(this, e),
      (f._version = p),
      (f._prefixes = C),
      (f._domPrefixes = S),
      (f._cssomPrefixes = T),
      (f.mq = j),
      (f.hasEvent = O),
      (f.testProp = function (t) {
        return a([t]);
      }),
      (f.testAllProps = c),
      (f.testStyles = A),
      (f.prefixed = function (t, e, i) {
        return e ? c(t, e, i) : c(t, "pfx");
      }),
      (g.className =
        g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
        (m ? " js " + N.join(" ") : "")),
      f
    );
  })(this, this.document)),
  (function (t, e) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = t.document
          ? e(t, !0)
          : function (t) {
              if (!t.document)
                throw new Error("jQuery requires a window with a document");
              return e(t);
            })
      : e(t);
  })("undefined" != typeof window ? window : this, function (t, e) {
    function i(t) {
      var e = "length" in t && t.length,
        i = st.type(t);
      return "function" === i || st.isWindow(t)
        ? !1
        : 1 === t.nodeType && e
        ? !0
        : "array" === i ||
          0 === e ||
          ("number" == typeof e && e > 0 && e - 1 in t);
    }
    function n(t, e, i) {
      if (st.isFunction(e))
        return st.grep(t, function (t, n) {
          return !!e.call(t, n, t) !== i;
        });
      if (e.nodeType)
        return st.grep(t, function (t) {
          return (t === e) !== i;
        });
      if ("string" == typeof e) {
        if (dt.test(e)) return st.filter(e, t, i);
        e = st.filter(e, t);
      }
      return st.grep(t, function (t) {
        return st.inArray(t, e) >= 0 !== i;
      });
    }
    function s(t, e) {
      do t = t[e];
      while (t && 1 !== t.nodeType);
      return t;
    }
    function o(t) {
      var e = (_t[t] = {});
      return (
        st.each(t.match(yt) || [], function (t, i) {
          e[i] = !0;
        }),
        e
      );
    }
    function r() {
      ft.addEventListener
        ? (ft.removeEventListener("DOMContentLoaded", a, !1),
          t.removeEventListener("load", a, !1))
        : (ft.detachEvent("onreadystatechange", a), t.detachEvent("onload", a));
    }
    function a() {
      (ft.addEventListener ||
        "load" === event.type ||
        "complete" === ft.readyState) &&
        (r(), st.ready());
    }
    function l(t, e, i) {
      if (void 0 === i && 1 === t.nodeType) {
        var n = "data-" + e.replace(Tt, "-$1").toLowerCase();
        if (((i = t.getAttribute(n)), "string" == typeof i)) {
          try {
            i =
              "true" === i
                ? !0
                : "false" === i
                ? !1
                : "null" === i
                ? null
                : +i + "" === i
                ? +i
                : kt.test(i)
                ? st.parseJSON(i)
                : i;
          } catch (s) {}
          st.data(t, e, i);
        } else i = void 0;
      }
      return i;
    }
    function c(t) {
      var e;
      for (e in t)
        if (("data" !== e || !st.isEmptyObject(t[e])) && "toJSON" !== e)
          return !1;
      return !0;
    }
    function u(t, e, i, n) {
      if (st.acceptData(t)) {
        var s,
          o,
          r = st.expando,
          a = t.nodeType,
          l = a ? st.cache : t,
          c = a ? t[r] : t[r] && r;
        if (
          (c && l[c] && (n || l[c].data)) ||
          void 0 !== i ||
          "string" != typeof e
        )
          return (
            c || (c = a ? (t[r] = V.pop() || st.guid++) : r),
            l[c] || (l[c] = a ? {} : { toJSON: st.noop }),
            ("object" == typeof e || "function" == typeof e) &&
              (n
                ? (l[c] = st.extend(l[c], e))
                : (l[c].data = st.extend(l[c].data, e))),
            (o = l[c]),
            n || (o.data || (o.data = {}), (o = o.data)),
            void 0 !== i && (o[st.camelCase(e)] = i),
            "string" == typeof e
              ? ((s = o[e]), null == s && (s = o[st.camelCase(e)]))
              : (s = o),
            s
          );
      }
    }
    function h(t, e, i) {
      if (st.acceptData(t)) {
        var n,
          s,
          o = t.nodeType,
          r = o ? st.cache : t,
          a = o ? t[st.expando] : st.expando;
        if (r[a]) {
          if (e && (n = i ? r[a] : r[a].data)) {
            st.isArray(e)
              ? (e = e.concat(st.map(e, st.camelCase)))
              : e in n
              ? (e = [e])
              : ((e = st.camelCase(e)), (e = e in n ? [e] : e.split(" "))),
              (s = e.length);
            for (; s--; ) delete n[e[s]];
            if (i ? !c(n) : !st.isEmptyObject(n)) return;
          }
          (i || (delete r[a].data, c(r[a]))) &&
            (o
              ? st.cleanData([t], !0)
              : it.deleteExpando || r != r.window
              ? delete r[a]
              : (r[a] = null));
        }
      }
    }
    function d() {
      return !0;
    }
    function p() {
      return !1;
    }
    function f() {
      try {
        return ft.activeElement;
      } catch (t) {}
    }
    function m(t) {
      var e = Ht.split("|"),
        i = t.createDocumentFragment();
      if (i.createElement) for (; e.length; ) i.createElement(e.pop());
      return i;
    }
    function g(t, e) {
      var i,
        n,
        s = 0,
        o =
          typeof t.getElementsByTagName !== Ct
            ? t.getElementsByTagName(e || "*")
            : typeof t.querySelectorAll !== Ct
            ? t.querySelectorAll(e || "*")
            : void 0;
      if (!o)
        for (o = [], i = t.childNodes || t; null != (n = i[s]); s++)
          !e || st.nodeName(n, e) ? o.push(n) : st.merge(o, g(n, e));
      return void 0 === e || (e && st.nodeName(t, e)) ? st.merge([t], o) : o;
    }
    function v(t) {
      Mt.test(t.type) && (t.defaultChecked = t.checked);
    }
    function b(t, e) {
      return st.nodeName(t, "table") &&
        st.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr")
        ? t.getElementsByTagName("tbody")[0] ||
            t.appendChild(t.ownerDocument.createElement("tbody"))
        : t;
    }
    function y(t) {
      return (t.type = (null !== st.find.attr(t, "type")) + "/" + t.type), t;
    }
    function _(t) {
      var e = Yt.exec(t.type);
      return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
    }
    function w(t, e) {
      for (var i, n = 0; null != (i = t[n]); n++)
        st._data(i, "globalEval", !e || st._data(e[n], "globalEval"));
    }
    function x(t, e) {
      if (1 === e.nodeType && st.hasData(t)) {
        var i,
          n,
          s,
          o = st._data(t),
          r = st._data(e, o),
          a = o.events;
        if (a) {
          delete r.handle, (r.events = {});
          for (i in a)
            for (n = 0, s = a[i].length; s > n; n++)
              st.event.add(e, i, a[i][n]);
        }
        r.data && (r.data = st.extend({}, r.data));
      }
    }
    function C(t, e) {
      var i, n, s;
      if (1 === e.nodeType) {
        if (
          ((i = e.nodeName.toLowerCase()), !it.noCloneEvent && e[st.expando])
        ) {
          s = st._data(e);
          for (n in s.events) st.removeEvent(e, n, s.handle);
          e.removeAttribute(st.expando);
        }
        "script" === i && e.text !== t.text
          ? ((y(e).text = t.text), _(e))
          : "object" === i
          ? (e.parentNode && (e.outerHTML = t.outerHTML),
            it.html5Clone &&
              t.innerHTML &&
              !st.trim(e.innerHTML) &&
              (e.innerHTML = t.innerHTML))
          : "input" === i && Mt.test(t.type)
          ? ((e.defaultChecked = e.checked = t.checked),
            e.value !== t.value && (e.value = t.value))
          : "option" === i
          ? (e.defaultSelected = e.selected = t.defaultSelected)
          : ("input" === i || "textarea" === i) &&
            (e.defaultValue = t.defaultValue);
      }
    }
    function k(e, i) {
      var n,
        s = st(i.createElement(e)).appendTo(i.body),
        o =
          t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0]))
            ? n.display
            : st.css(s[0], "display");
      return s.detach(), o;
    }
    function T(t) {
      var e = ft,
        i = Zt[t];
      return (
        i ||
          ((i = k(t, e)),
          ("none" !== i && i) ||
            ((Jt = (
              Jt || st("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(e.documentElement)),
            (e = (Jt[0].contentWindow || Jt[0].contentDocument).document),
            e.write(),
            e.close(),
            (i = k(t, e)),
            Jt.detach()),
          (Zt[t] = i)),
        i
      );
    }
    function S(t, e) {
      return {
        get: function () {
          var i = t();
          if (null != i)
            return i
              ? void delete this.get
              : (this.get = e).apply(this, arguments);
        },
      };
    }
    function D(t, e) {
      if (e in t) return e;
      for (
        var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = de.length;
        s--;

      )
        if (((e = de[s] + i), e in t)) return e;
      return n;
    }
    function I(t, e) {
      for (var i, n, s, o = [], r = 0, a = t.length; a > r; r++)
        (n = t[r]),
          n.style &&
            ((o[r] = st._data(n, "olddisplay")),
            (i = n.style.display),
            e
              ? (o[r] || "none" !== i || (n.style.display = ""),
                "" === n.style.display &&
                  It(n) &&
                  (o[r] = st._data(n, "olddisplay", T(n.nodeName))))
              : ((s = It(n)),
                ((i && "none" !== i) || !s) &&
                  st._data(n, "olddisplay", s ? i : st.css(n, "display"))));
      for (r = 0; a > r; r++)
        (n = t[r]),
          n.style &&
            ((e && "none" !== n.style.display && "" !== n.style.display) ||
              (n.style.display = e ? o[r] || "" : "none"));
      return t;
    }
    function E(t, e, i) {
      var n = le.exec(e);
      return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e;
    }
    function M(t, e, i, n, s) {
      for (
        var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
          r = 0;
        4 > o;
        o += 2
      )
        "margin" === i && (r += st.css(t, i + Dt[o], !0, s)),
          n
            ? ("content" === i && (r -= st.css(t, "padding" + Dt[o], !0, s)),
              "margin" !== i &&
                (r -= st.css(t, "border" + Dt[o] + "Width", !0, s)))
            : ((r += st.css(t, "padding" + Dt[o], !0, s)),
              "padding" !== i &&
                (r += st.css(t, "border" + Dt[o] + "Width", !0, s)));
      return r;
    }
    function N(t, e, i) {
      var n = !0,
        s = "width" === e ? t.offsetWidth : t.offsetHeight,
        o = te(t),
        r = it.boxSizing && "border-box" === st.css(t, "boxSizing", !1, o);
      if (0 >= s || null == s) {
        if (
          ((s = ee(t, e, o)),
          (0 > s || null == s) && (s = t.style[e]),
          ne.test(s))
        )
          return s;
        (n = r && (it.boxSizingReliable() || s === t.style[e])),
          (s = parseFloat(s) || 0);
      }
      return s + M(t, e, i || (r ? "border" : "content"), n, o) + "px";
    }
    function P(t, e, i, n, s) {
      return new P.prototype.init(t, e, i, n, s);
    }
    function A() {
      return (
        setTimeout(function () {
          pe = void 0;
        }),
        (pe = st.now())
      );
    }
    function j(t, e) {
      var i,
        n = { height: t },
        s = 0;
      for (e = e ? 1 : 0; 4 > s; s += 2 - e)
        (i = Dt[s]), (n["margin" + i] = n["padding" + i] = t);
      return e && (n.opacity = n.width = t), n;
    }
    function O(t, e, i) {
      for (
        var n, s = (ye[e] || []).concat(ye["*"]), o = 0, r = s.length;
        r > o;
        o++
      )
        if ((n = s[o].call(i, e, t))) return n;
    }
    function H(t, e, i) {
      var n,
        s,
        o,
        r,
        a,
        l,
        c,
        u,
        h = this,
        d = {},
        p = t.style,
        f = t.nodeType && It(t),
        m = st._data(t, "fxshow");
      i.queue ||
        ((a = st._queueHooks(t, "fx")),
        null == a.unqueued &&
          ((a.unqueued = 0),
          (l = a.empty.fire),
          (a.empty.fire = function () {
            a.unqueued || l();
          })),
        a.unqueued++,
        h.always(function () {
          h.always(function () {
            a.unqueued--, st.queue(t, "fx").length || a.empty.fire();
          });
        })),
        1 === t.nodeType &&
          ("height" in e || "width" in e) &&
          ((i.overflow = [p.overflow, p.overflowX, p.overflowY]),
          (c = st.css(t, "display")),
          (u = "none" === c ? st._data(t, "olddisplay") || T(t.nodeName) : c),
          "inline" === u &&
            "none" === st.css(t, "float") &&
            (it.inlineBlockNeedsLayout && "inline" !== T(t.nodeName)
              ? (p.zoom = 1)
              : (p.display = "inline-block"))),
        i.overflow &&
          ((p.overflow = "hidden"),
          it.shrinkWrapBlocks() ||
            h.always(function () {
              (p.overflow = i.overflow[0]),
                (p.overflowX = i.overflow[1]),
                (p.overflowY = i.overflow[2]);
            }));
      for (n in e)
        if (((s = e[n]), me.exec(s))) {
          if (
            (delete e[n],
            (o = o || "toggle" === s),
            s === (f ? "hide" : "show"))
          ) {
            if ("show" !== s || !m || void 0 === m[n]) continue;
            f = !0;
          }
          d[n] = (m && m[n]) || st.style(t, n);
        } else c = void 0;
      if (st.isEmptyObject(d))
        "inline" === ("none" === c ? T(t.nodeName) : c) && (p.display = c);
      else {
        m ? "hidden" in m && (f = m.hidden) : (m = st._data(t, "fxshow", {})),
          o && (m.hidden = !f),
          f
            ? st(t).show()
            : h.done(function () {
                st(t).hide();
              }),
          h.done(function () {
            var e;
            st._removeData(t, "fxshow");
            for (e in d) st.style(t, e, d[e]);
          });
        for (n in d)
          (r = O(f ? m[n] : 0, n, h)),
            n in m ||
              ((m[n] = r.start),
              f &&
                ((r.end = r.start),
                (r.start = "width" === n || "height" === n ? 1 : 0)));
      }
    }
    function $(t, e) {
      var i, n, s, o, r;
      for (i in t)
        if (
          ((n = st.camelCase(i)),
          (s = e[n]),
          (o = t[i]),
          st.isArray(o) && ((s = o[1]), (o = t[i] = o[0])),
          i !== n && ((t[n] = o), delete t[i]),
          (r = st.cssHooks[n]),
          r && "expand" in r)
        ) {
          (o = r.expand(o)), delete t[n];
          for (i in o) i in t || ((t[i] = o[i]), (e[i] = s));
        } else e[n] = s;
    }
    function z(t, e, i) {
      var n,
        s,
        o = 0,
        r = be.length,
        a = st.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (s) return !1;
          for (
            var e = pe || A(),
              i = Math.max(0, c.startTime + c.duration - e),
              n = i / c.duration || 0,
              o = 1 - n,
              r = 0,
              l = c.tweens.length;
            l > r;
            r++
          )
            c.tweens[r].run(o);
          return (
            a.notifyWith(t, [c, o, i]),
            1 > o && l ? i : (a.resolveWith(t, [c]), !1)
          );
        },
        c = a.promise({
          elem: t,
          props: st.extend({}, e),
          opts: st.extend(!0, { specialEasing: {} }, i),
          originalProperties: e,
          originalOptions: i,
          startTime: pe || A(),
          duration: i.duration,
          tweens: [],
          createTween: function (e, i) {
            var n = st.Tween(
              t,
              c.opts,
              e,
              i,
              c.opts.specialEasing[e] || c.opts.easing
            );
            return c.tweens.push(n), n;
          },
          stop: function (e) {
            var i = 0,
              n = e ? c.tweens.length : 0;
            if (s) return this;
            for (s = !0; n > i; i++) c.tweens[i].run(1);
            return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this;
          },
        }),
        u = c.props;
      for ($(u, c.opts.specialEasing); r > o; o++)
        if ((n = be[o].call(c, t, u, c.opts))) return n;
      return (
        st.map(u, O, c),
        st.isFunction(c.opts.start) && c.opts.start.call(t, c),
        st.fx.timer(st.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always)
      );
    }
    function F(t) {
      return function (e, i) {
        "string" != typeof e && ((i = e), (e = "*"));
        var n,
          s = 0,
          o = e.toLowerCase().match(yt) || [];
        if (st.isFunction(i))
          for (; (n = o[s++]); )
            "+" === n.charAt(0)
              ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i))
              : (t[n] = t[n] || []).push(i);
      };
    }
    function W(t, e, i, n) {
      function s(a) {
        var l;
        return (
          (o[a] = !0),
          st.each(t[a] || [], function (t, a) {
            var c = a(e, i, n);
            return "string" != typeof c || r || o[c]
              ? r
                ? !(l = c)
                : void 0
              : (e.dataTypes.unshift(c), s(c), !1);
          }),
          l
        );
      }
      var o = {},
        r = t === qe;
      return s(e.dataTypes[0]) || (!o["*"] && s("*"));
    }
    function L(t, e) {
      var i,
        n,
        s = st.ajaxSettings.flatOptions || {};
      for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
      return i && st.extend(!0, t, i), t;
    }
    function R(t, e, i) {
      for (var n, s, o, r, a = t.contents, l = t.dataTypes; "*" === l[0]; )
        l.shift(),
          void 0 === s &&
            (s = t.mimeType || e.getResponseHeader("Content-Type"));
      if (s)
        for (r in a)
          if (a[r] && a[r].test(s)) {
            l.unshift(r);
            break;
          }
      if (l[0] in i) o = l[0];
      else {
        for (r in i) {
          if (!l[0] || t.converters[r + " " + l[0]]) {
            o = r;
            break;
          }
          n || (n = r);
        }
        o = o || n;
      }
      return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0;
    }
    function q(t, e, i, n) {
      var s,
        o,
        r,
        a,
        l,
        c = {},
        u = t.dataTypes.slice();
      if (u[1]) for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
      for (o = u.shift(); o; )
        if (
          (t.responseFields[o] && (i[t.responseFields[o]] = e),
          !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
          (l = o),
          (o = u.shift()))
        )
          if ("*" === o) o = l;
          else if ("*" !== l && l !== o) {
            if (((r = c[l + " " + o] || c["* " + o]), !r))
              for (s in c)
                if (
                  ((a = s.split(" ")),
                  a[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]]))
                ) {
                  r === !0
                    ? (r = c[s])
                    : c[s] !== !0 && ((o = a[0]), u.unshift(a[1]));
                  break;
                }
            if (r !== !0)
              if (r && t["throws"]) e = r(e);
              else
                try {
                  e = r(e);
                } catch (h) {
                  return {
                    state: "parsererror",
                    error: r ? h : "No conversion from " + l + " to " + o,
                  };
                }
          }
      return { state: "success", data: e };
    }
    function B(t, e, i, n) {
      var s;
      if (st.isArray(e))
        st.each(e, function (e, s) {
          i || Ye.test(t)
            ? n(t, s)
            : B(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n);
        });
      else if (i || "object" !== st.type(e)) n(t, e);
      else for (s in e) B(t + "[" + s + "]", e[s], i, n);
    }
    function Q() {
      try {
        return new t.XMLHttpRequest();
      } catch (e) {}
    }
    function U() {
      try {
        return new t.ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
    function Y(t) {
      return st.isWindow(t)
        ? t
        : 9 === t.nodeType
        ? t.defaultView || t.parentWindow
        : !1;
    }
    var V = [],
      K = V.slice,
      X = V.concat,
      G = V.push,
      J = V.indexOf,
      Z = {},
      tt = Z.toString,
      et = Z.hasOwnProperty,
      it = {},
      nt = "1.11.3",
      st = function (t, e) {
        return new st.fn.init(t, e);
      },
      ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      rt = /^-ms-/,
      at = /-([\da-z])/gi,
      lt = function (t, e) {
        return e.toUpperCase();
      };
    (st.fn = st.prototype = {
      jquery: nt,
      constructor: st,
      selector: "",
      length: 0,
      toArray: function () {
        return K.call(this);
      },
      get: function (t) {
        return null != t
          ? 0 > t
            ? this[t + this.length]
            : this[t]
          : K.call(this);
      },
      pushStack: function (t) {
        var e = st.merge(this.constructor(), t);
        return (e.prevObject = this), (e.context = this.context), e;
      },
      each: function (t, e) {
        return st.each(this, t, e);
      },
      map: function (t) {
        return this.pushStack(
          st.map(this, function (e, i) {
            return t.call(e, i, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(K.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (t) {
        var e = this.length,
          i = +t + (0 > t ? e : 0);
        return this.pushStack(i >= 0 && e > i ? [this[i]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: G,
      sort: V.sort,
      splice: V.splice,
    }),
      (st.extend = st.fn.extend = function () {
        var t,
          e,
          i,
          n,
          s,
          o,
          r = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof r && ((c = r), (r = arguments[a] || {}), a++),
            "object" == typeof r || st.isFunction(r) || (r = {}),
            a === l && ((r = this), a--);
          l > a;
          a++
        )
          if (null != (s = arguments[a]))
            for (n in s)
              (t = r[n]),
                (i = s[n]),
                r !== i &&
                  (c && i && (st.isPlainObject(i) || (e = st.isArray(i)))
                    ? (e
                        ? ((e = !1), (o = t && st.isArray(t) ? t : []))
                        : (o = t && st.isPlainObject(t) ? t : {}),
                      (r[n] = st.extend(c, o, i)))
                    : void 0 !== i && (r[n] = i));
        return r;
      }),
      st.extend({
        expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
          throw new Error(t);
        },
        noop: function () {},
        isFunction: function (t) {
          return "function" === st.type(t);
        },
        isArray:
          Array.isArray ||
          function (t) {
            return "array" === st.type(t);
          },
        isWindow: function (t) {
          return null != t && t == t.window;
        },
        isNumeric: function (t) {
          return !st.isArray(t) && t - parseFloat(t) + 1 >= 0;
        },
        isEmptyObject: function (t) {
          var e;
          for (e in t) return !1;
          return !0;
        },
        isPlainObject: function (t) {
          var e;
          if (!t || "object" !== st.type(t) || t.nodeType || st.isWindow(t))
            return !1;
          try {
            if (
              t.constructor &&
              !et.call(t, "constructor") &&
              !et.call(t.constructor.prototype, "isPrototypeOf")
            )
              return !1;
          } catch (i) {
            return !1;
          }
          if (it.ownLast) for (e in t) return et.call(t, e);
          for (e in t);
          return void 0 === e || et.call(t, e);
        },
        type: function (t) {
          return null == t
            ? t + ""
            : "object" == typeof t || "function" == typeof t
            ? Z[tt.call(t)] || "object"
            : typeof t;
        },
        globalEval: function (e) {
          e &&
            st.trim(e) &&
            (
              t.execScript ||
              function (e) {
                t.eval.call(t, e);
              }
            )(e);
        },
        camelCase: function (t) {
          return t.replace(rt, "ms-").replace(at, lt);
        },
        nodeName: function (t, e) {
          return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function (t, e, n) {
          var s,
            o = 0,
            r = t.length,
            a = i(t);
          if (n) {
            if (a) for (; r > o && ((s = e.apply(t[o], n)), s !== !1); o++);
            else for (o in t) if (((s = e.apply(t[o], n)), s === !1)) break;
          } else if (a)
            for (; r > o && ((s = e.call(t[o], o, t[o])), s !== !1); o++);
          else for (o in t) if (((s = e.call(t[o], o, t[o])), s === !1)) break;
          return t;
        },
        trim: function (t) {
          return null == t ? "" : (t + "").replace(ot, "");
        },
        makeArray: function (t, e) {
          var n = e || [];
          return (
            null != t &&
              (i(Object(t))
                ? st.merge(n, "string" == typeof t ? [t] : t)
                : G.call(n, t)),
            n
          );
        },
        inArray: function (t, e, i) {
          var n;
          if (e) {
            if (J) return J.call(e, t, i);
            for (
              n = e.length, i = i ? (0 > i ? Math.max(0, n + i) : i) : 0;
              n > i;
              i++
            )
              if (i in e && e[i] === t) return i;
          }
          return -1;
        },
        merge: function (t, e) {
          for (var i = +e.length, n = 0, s = t.length; i > n; ) t[s++] = e[n++];
          if (i !== i) for (; void 0 !== e[n]; ) t[s++] = e[n++];
          return (t.length = s), t;
        },
        grep: function (t, e, i) {
          for (var n, s = [], o = 0, r = t.length, a = !i; r > o; o++)
            (n = !e(t[o], o)), n !== a && s.push(t[o]);
          return s;
        },
        map: function (t, e, n) {
          var s,
            o = 0,
            r = t.length,
            a = i(t),
            l = [];
          if (a) for (; r > o; o++) (s = e(t[o], o, n)), null != s && l.push(s);
          else for (o in t) (s = e(t[o], o, n)), null != s && l.push(s);
          return X.apply([], l);
        },
        guid: 1,
        proxy: function (t, e) {
          var i, n, s;
          return (
            "string" == typeof e && ((s = t[e]), (e = t), (t = s)),
            st.isFunction(t)
              ? ((i = K.call(arguments, 2)),
                (n = function () {
                  return t.apply(e || this, i.concat(K.call(arguments)));
                }),
                (n.guid = t.guid = t.guid || st.guid++),
                n)
              : void 0
          );
        },
        now: function () {
          return +new Date();
        },
        support: it,
      }),
      st.each(
        "Boolean Number String Function Array Date RegExp Object Error".split(
          " "
        ),
        function (t, e) {
          Z["[object " + e + "]"] = e.toLowerCase();
        }
      );
    var ct = (function (t) {
      function e(t, e, i, n) {
        var s, o, r, a, l, c, h, p, f, m;
        if (
          ((e ? e.ownerDocument || e : W) !== P && N(e),
          (e = e || P),
          (i = i || []),
          (a = e.nodeType),
          "string" != typeof t || !t || (1 !== a && 9 !== a && 11 !== a))
        )
          return i;
        if (!n && j) {
          if (11 !== a && (s = bt.exec(t)))
            if ((r = s[1])) {
              if (9 === a) {
                if (((o = e.getElementById(r)), !o || !o.parentNode)) return i;
                if (o.id === r) return i.push(o), i;
              } else if (
                e.ownerDocument &&
                (o = e.ownerDocument.getElementById(r)) &&
                z(e, o) &&
                o.id === r
              )
                return i.push(o), i;
            } else {
              if (s[2]) return J.apply(i, e.getElementsByTagName(t)), i;
              if ((r = s[3]) && w.getElementsByClassName)
                return J.apply(i, e.getElementsByClassName(r)), i;
            }
          if (w.qsa && (!O || !O.test(t))) {
            if (
              ((p = h = F),
              (f = e),
              (m = 1 !== a && t),
              1 === a && "object" !== e.nodeName.toLowerCase())
            ) {
              for (
                c = T(t),
                  (h = e.getAttribute("id"))
                    ? (p = h.replace(_t, "\\$&"))
                    : e.setAttribute("id", p),
                  p = "[id='" + p + "'] ",
                  l = c.length;
                l--;

              )
                c[l] = p + d(c[l]);
              (f = (yt.test(t) && u(e.parentNode)) || e), (m = c.join(","));
            }
            if (m)
              try {
                return J.apply(i, f.querySelectorAll(m)), i;
              } catch (g) {
              } finally {
                h || e.removeAttribute("id");
              }
          }
        }
        return D(t.replace(lt, "$1"), e, i, n);
      }
      function i() {
        function t(i, n) {
          return (
            e.push(i + " ") > x.cacheLength && delete t[e.shift()],
            (t[i + " "] = n)
          );
        }
        var e = [];
        return t;
      }
      function n(t) {
        return (t[F] = !0), t;
      }
      function s(t) {
        var e = P.createElement("div");
        try {
          return !!t(e);
        } catch (i) {
          return !1;
        } finally {
          e.parentNode && e.parentNode.removeChild(e), (e = null);
        }
      }
      function o(t, e) {
        for (var i = t.split("|"), n = t.length; n--; ) x.attrHandle[i[n]] = e;
      }
      function r(t, e) {
        var i = e && t,
          n =
            i &&
            1 === t.nodeType &&
            1 === e.nodeType &&
            (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
        if (n) return n;
        if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
        return t ? 1 : -1;
      }
      function a(t) {
        return function (e) {
          var i = e.nodeName.toLowerCase();
          return "input" === i && e.type === t;
        };
      }
      function l(t) {
        return function (e) {
          var i = e.nodeName.toLowerCase();
          return ("input" === i || "button" === i) && e.type === t;
        };
      }
      function c(t) {
        return n(function (e) {
          return (
            (e = +e),
            n(function (i, n) {
              for (var s, o = t([], i.length, e), r = o.length; r--; )
                i[(s = o[r])] && (i[s] = !(n[s] = i[s]));
            })
          );
        });
      }
      function u(t) {
        return t && "undefined" != typeof t.getElementsByTagName && t;
      }
      function h() {}
      function d(t) {
        for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
        return n;
      }
      function p(t, e, i) {
        var n = e.dir,
          s = i && "parentNode" === n,
          o = R++;
        return e.first
          ? function (e, i, o) {
              for (; (e = e[n]); ) if (1 === e.nodeType || s) return t(e, i, o);
            }
          : function (e, i, r) {
              var a,
                l,
                c = [L, o];
              if (r) {
                for (; (e = e[n]); )
                  if ((1 === e.nodeType || s) && t(e, i, r)) return !0;
              } else
                for (; (e = e[n]); )
                  if (1 === e.nodeType || s) {
                    if (
                      ((l = e[F] || (e[F] = {})),
                      (a = l[n]) && a[0] === L && a[1] === o)
                    )
                      return (c[2] = a[2]);
                    if (((l[n] = c), (c[2] = t(e, i, r)))) return !0;
                  }
            };
      }
      function f(t) {
        return t.length > 1
          ? function (e, i, n) {
              for (var s = t.length; s--; ) if (!t[s](e, i, n)) return !1;
              return !0;
            }
          : t[0];
      }
      function m(t, i, n) {
        for (var s = 0, o = i.length; o > s; s++) e(t, i[s], n);
        return n;
      }
      function g(t, e, i, n, s) {
        for (var o, r = [], a = 0, l = t.length, c = null != e; l > a; a++)
          (o = t[a]) && (!i || i(o, n, s)) && (r.push(o), c && e.push(a));
        return r;
      }
      function v(t, e, i, s, o, r) {
        return (
          s && !s[F] && (s = v(s)),
          o && !o[F] && (o = v(o, r)),
          n(function (n, r, a, l) {
            var c,
              u,
              h,
              d = [],
              p = [],
              f = r.length,
              v = n || m(e || "*", a.nodeType ? [a] : a, []),
              b = !t || (!n && e) ? v : g(v, d, t, a, l),
              y = i ? (o || (n ? t : f || s) ? [] : r) : b;
            if ((i && i(b, y, a, l), s))
              for (c = g(y, p), s(c, [], a, l), u = c.length; u--; )
                (h = c[u]) && (y[p[u]] = !(b[p[u]] = h));
            if (n) {
              if (o || t) {
                if (o) {
                  for (c = [], u = y.length; u--; )
                    (h = y[u]) && c.push((b[u] = h));
                  o(null, (y = []), c, l);
                }
                for (u = y.length; u--; )
                  (h = y[u]) &&
                    (c = o ? tt(n, h) : d[u]) > -1 &&
                    (n[c] = !(r[c] = h));
              }
            } else (y = g(y === r ? y.splice(f, y.length) : y)), o ? o(null, r, y, l) : J.apply(r, y);
          })
        );
      }
      function b(t) {
        for (
          var e,
            i,
            n,
            s = t.length,
            o = x.relative[t[0].type],
            r = o || x.relative[" "],
            a = o ? 1 : 0,
            l = p(
              function (t) {
                return t === e;
              },
              r,
              !0
            ),
            c = p(
              function (t) {
                return tt(e, t) > -1;
              },
              r,
              !0
            ),
            u = [
              function (t, i, n) {
                var s =
                  (!o && (n || i !== I)) ||
                  ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                return (e = null), s;
              },
            ];
          s > a;
          a++
        )
          if ((i = x.relative[t[a].type])) u = [p(f(u), i)];
          else {
            if (((i = x.filter[t[a].type].apply(null, t[a].matches)), i[F])) {
              for (n = ++a; s > n && !x.relative[t[n].type]; n++);
              return v(
                a > 1 && f(u),
                a > 1 &&
                  d(
                    t
                      .slice(0, a - 1)
                      .concat({ value: " " === t[a - 2].type ? "*" : "" })
                  ).replace(lt, "$1"),
                i,
                n > a && b(t.slice(a, n)),
                s > n && b((t = t.slice(n))),
                s > n && d(t)
              );
            }
            u.push(i);
          }
        return f(u);
      }
      function y(t, i) {
        var s = i.length > 0,
          o = t.length > 0,
          r = function (n, r, a, l, c) {
            var u,
              h,
              d,
              p = 0,
              f = "0",
              m = n && [],
              v = [],
              b = I,
              y = n || (o && x.find.TAG("*", c)),
              _ = (L += null == b ? 1 : Math.random() || 0.1),
              w = y.length;
            for (c && (I = r !== P && r); f !== w && null != (u = y[f]); f++) {
              if (o && u) {
                for (h = 0; (d = t[h++]); )
                  if (d(u, r, a)) {
                    l.push(u);
                    break;
                  }
                c && (L = _);
              }
              s && ((u = !d && u) && p--, n && m.push(u));
            }
            if (((p += f), s && f !== p)) {
              for (h = 0; (d = i[h++]); ) d(m, v, r, a);
              if (n) {
                if (p > 0) for (; f--; ) m[f] || v[f] || (v[f] = X.call(l));
                v = g(v);
              }
              J.apply(l, v),
                c && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l);
            }
            return c && ((L = _), (I = b)), m;
          };
        return s ? n(r) : r;
      }
      var _,
        w,
        x,
        C,
        k,
        T,
        S,
        D,
        I,
        E,
        M,
        N,
        P,
        A,
        j,
        O,
        H,
        $,
        z,
        F = "sizzle" + 1 * new Date(),
        W = t.document,
        L = 0,
        R = 0,
        q = i(),
        B = i(),
        Q = i(),
        U = function (t, e) {
          return t === e && (M = !0), 0;
        },
        Y = 1 << 31,
        V = {}.hasOwnProperty,
        K = [],
        X = K.pop,
        G = K.push,
        J = K.push,
        Z = K.slice,
        tt = function (t, e) {
          for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
          return -1;
        },
        et =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        it = "[\\x20\\t\\r\\n\\f]",
        nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        st = nt.replace("w", "w#"),
        ot =
          "\\[" +
          it +
          "*(" +
          nt +
          ")(?:" +
          it +
          "*([*^$|!~]?=)" +
          it +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          st +
          "))|)" +
          it +
          "*\\]",
        rt =
          ":(" +
          nt +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          ot +
          ")*)|.*)\\)|)",
        at = new RegExp(it + "+", "g"),
        lt = new RegExp(
          "^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$",
          "g"
        ),
        ct = new RegExp("^" + it + "*," + it + "*"),
        ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
        ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
        dt = new RegExp(rt),
        pt = new RegExp("^" + st + "$"),
        ft = {
          ID: new RegExp("^#(" + nt + ")"),
          CLASS: new RegExp("^\\.(" + nt + ")"),
          TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + ot),
          PSEUDO: new RegExp("^" + rt),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              it +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              it +
              "*(?:([+-]|)" +
              it +
              "*(\\d+)|))" +
              it +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + et + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              it +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              it +
              "*((?:-\\d)?\\d*)" +
              it +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        mt = /^(?:input|select|textarea|button)$/i,
        gt = /^h\d$/i,
        vt = /^[^{]+\{\s*\[native \w/,
        bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        yt = /[+~]/,
        _t = /'|\\/g,
        wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
        xt = function (t, e, i) {
          var n = "0x" + e - 65536;
          return n !== n || i
            ? e
            : 0 > n
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
        },
        Ct = function () {
          N();
        };
      try {
        J.apply((K = Z.call(W.childNodes)), W.childNodes),
          K[W.childNodes.length].nodeType;
      } catch (kt) {
        J = {
          apply: K.length
            ? function (t, e) {
                G.apply(t, Z.call(e));
              }
            : function (t, e) {
                for (var i = t.length, n = 0; (t[i++] = e[n++]); );
                t.length = i - 1;
              },
        };
      }
      (w = e.support = {}),
        (k = e.isXML = function (t) {
          var e = t && (t.ownerDocument || t).documentElement;
          return e ? "HTML" !== e.nodeName : !1;
        }),
        (N = e.setDocument = function (t) {
          var e,
            i,
            n = t ? t.ownerDocument || t : W;
          return n !== P && 9 === n.nodeType && n.documentElement
            ? ((P = n),
              (A = n.documentElement),
              (i = n.defaultView),
              i &&
                i !== i.top &&
                (i.addEventListener
                  ? i.addEventListener("unload", Ct, !1)
                  : i.attachEvent && i.attachEvent("onunload", Ct)),
              (j = !k(n)),
              (w.attributes = s(function (t) {
                return (t.className = "i"), !t.getAttribute("className");
              })),
              (w.getElementsByTagName = s(function (t) {
                return (
                  t.appendChild(n.createComment("")),
                  !t.getElementsByTagName("*").length
                );
              })),
              (w.getElementsByClassName = vt.test(n.getElementsByClassName)),
              (w.getById = s(function (t) {
                return (
                  (A.appendChild(t).id = F),
                  !n.getElementsByName || !n.getElementsByName(F).length
                );
              })),
              w.getById
                ? ((x.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && j) {
                      var i = e.getElementById(t);
                      return i && i.parentNode ? [i] : [];
                    }
                  }),
                  (x.filter.ID = function (t) {
                    var e = t.replace(wt, xt);
                    return function (t) {
                      return t.getAttribute("id") === e;
                    };
                  }))
                : (delete x.find.ID,
                  (x.filter.ID = function (t) {
                    var e = t.replace(wt, xt);
                    return function (t) {
                      var i =
                        "undefined" != typeof t.getAttributeNode &&
                        t.getAttributeNode("id");
                      return i && i.value === e;
                    };
                  })),
              (x.find.TAG = w.getElementsByTagName
                ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName
                      ? e.getElementsByTagName(t)
                      : w.qsa
                      ? e.querySelectorAll(t)
                      : void 0;
                  }
                : function (t, e) {
                    var i,
                      n = [],
                      s = 0,
                      o = e.getElementsByTagName(t);
                    if ("*" === t) {
                      for (; (i = o[s++]); ) 1 === i.nodeType && n.push(i);
                      return n;
                    }
                    return o;
                  }),
              (x.find.CLASS =
                w.getElementsByClassName &&
                function (t, e) {
                  return j ? e.getElementsByClassName(t) : void 0;
                }),
              (H = []),
              (O = []),
              (w.qsa = vt.test(n.querySelectorAll)) &&
                (s(function (t) {
                  (A.appendChild(t).innerHTML =
                    "<a id='" +
                    F +
                    "'></a><select id='" +
                    F +
                    "-\f]' msallowcapture=''><option selected=''></option></select>"),
                    t.querySelectorAll("[msallowcapture^='']").length &&
                      O.push("[*^$]=" + it + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length ||
                      O.push("\\[" + it + "*(?:value|" + et + ")"),
                    t.querySelectorAll("[id~=" + F + "-]").length ||
                      O.push("~="),
                    t.querySelectorAll(":checked").length || O.push(":checked"),
                    t.querySelectorAll("a#" + F + "+*").length ||
                      O.push(".#.+[+~]");
                }),
                s(function (t) {
                  var e = n.createElement("input");
                  e.setAttribute("type", "hidden"),
                    t.appendChild(e).setAttribute("name", "D"),
                    t.querySelectorAll("[name=d]").length &&
                      O.push("name" + it + "*[*^$|!~]?="),
                    t.querySelectorAll(":enabled").length ||
                      O.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    O.push(",.*:");
                })),
              (w.matchesSelector = vt.test(
                ($ =
                  A.matches ||
                  A.webkitMatchesSelector ||
                  A.mozMatchesSelector ||
                  A.oMatchesSelector ||
                  A.msMatchesSelector)
              )) &&
                s(function (t) {
                  (w.disconnectedMatch = $.call(t, "div")),
                    $.call(t, "[s!='']:x"),
                    H.push("!=", rt);
                }),
              (O = O.length && new RegExp(O.join("|"))),
              (H = H.length && new RegExp(H.join("|"))),
              (e = vt.test(A.compareDocumentPosition)),
              (z =
                e || vt.test(A.contains)
                  ? function (t, e) {
                      var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                      return (
                        t === n ||
                        !(
                          !n ||
                          1 !== n.nodeType ||
                          !(i.contains
                            ? i.contains(n)
                            : t.compareDocumentPosition &&
                              16 & t.compareDocumentPosition(n))
                        )
                      );
                    }
                  : function (t, e) {
                      if (e)
                        for (; (e = e.parentNode); ) if (e === t) return !0;
                      return !1;
                    }),
              (U = e
                ? function (t, e) {
                    if (t === e) return (M = !0), 0;
                    var i =
                      !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i
                      ? i
                      : ((i =
                          (t.ownerDocument || t) === (e.ownerDocument || e)
                            ? t.compareDocumentPosition(e)
                            : 1),
                        1 & i ||
                        (!w.sortDetached && e.compareDocumentPosition(t) === i)
                          ? t === n || (t.ownerDocument === W && z(W, t))
                            ? -1
                            : e === n || (e.ownerDocument === W && z(W, e))
                            ? 1
                            : E
                            ? tt(E, t) - tt(E, e)
                            : 0
                          : 4 & i
                          ? -1
                          : 1);
                  }
                : function (t, e) {
                    if (t === e) return (M = !0), 0;
                    var i,
                      s = 0,
                      o = t.parentNode,
                      a = e.parentNode,
                      l = [t],
                      c = [e];
                    if (!o || !a)
                      return t === n
                        ? -1
                        : e === n
                        ? 1
                        : o
                        ? -1
                        : a
                        ? 1
                        : E
                        ? tt(E, t) - tt(E, e)
                        : 0;
                    if (o === a) return r(t, e);
                    for (i = t; (i = i.parentNode); ) l.unshift(i);
                    for (i = e; (i = i.parentNode); ) c.unshift(i);
                    for (; l[s] === c[s]; ) s++;
                    return s
                      ? r(l[s], c[s])
                      : l[s] === W
                      ? -1
                      : c[s] === W
                      ? 1
                      : 0;
                  }),
              n)
            : P;
        }),
        (e.matches = function (t, i) {
          return e(t, null, null, i);
        }),
        (e.matchesSelector = function (t, i) {
          if (
            ((t.ownerDocument || t) !== P && N(t),
            (i = i.replace(ht, "='$1']")),
            w.matchesSelector && j && (!H || !H.test(i)) && (!O || !O.test(i)))
          )
            try {
              var n = $.call(t, i);
              if (
                n ||
                w.disconnectedMatch ||
                (t.document && 11 !== t.document.nodeType)
              )
                return n;
            } catch (s) {}
          return e(i, P, null, [t]).length > 0;
        }),
        (e.contains = function (t, e) {
          return (t.ownerDocument || t) !== P && N(t), z(t, e);
        }),
        (e.attr = function (t, e) {
          (t.ownerDocument || t) !== P && N(t);
          var i = x.attrHandle[e.toLowerCase()],
            n =
              i && V.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !j) : void 0;
          return void 0 !== n
            ? n
            : w.attributes || !j
            ? t.getAttribute(e)
            : (n = t.getAttributeNode(e)) && n.specified
            ? n.value
            : null;
        }),
        (e.error = function (t) {
          throw new Error("Syntax error, unrecognized expression: " + t);
        }),
        (e.uniqueSort = function (t) {
          var e,
            i = [],
            n = 0,
            s = 0;
          if (
            ((M = !w.detectDuplicates),
            (E = !w.sortStable && t.slice(0)),
            t.sort(U),
            M)
          ) {
            for (; (e = t[s++]); ) e === t[s] && (n = i.push(s));
            for (; n--; ) t.splice(i[n], 1);
          }
          return (E = null), t;
        }),
        (C = e.getText = function (t) {
          var e,
            i = "",
            n = 0,
            s = t.nodeType;
          if (s) {
            if (1 === s || 9 === s || 11 === s) {
              if ("string" == typeof t.textContent) return t.textContent;
              for (t = t.firstChild; t; t = t.nextSibling) i += C(t);
            } else if (3 === s || 4 === s) return t.nodeValue;
          } else for (; (e = t[n++]); ) i += C(e);
          return i;
        }),
        (x = e.selectors = {
          cacheLength: 50,
          createPseudo: n,
          match: ft,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (t) {
              return (
                (t[1] = t[1].replace(wt, xt)),
                (t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt)),
                "~=" === t[2] && (t[3] = " " + t[3] + " "),
                t.slice(0, 4)
              );
            },
            CHILD: function (t) {
              return (
                (t[1] = t[1].toLowerCase()),
                "nth" === t[1].slice(0, 3)
                  ? (t[3] || e.error(t[0]),
                    (t[4] = +(t[4]
                      ? t[5] + (t[6] || 1)
                      : 2 * ("even" === t[3] || "odd" === t[3]))),
                    (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                  : t[3] && e.error(t[0]),
                t
              );
            },
            PSEUDO: function (t) {
              var e,
                i = !t[6] && t[2];
              return ft.CHILD.test(t[0])
                ? null
                : (t[3]
                    ? (t[2] = t[4] || t[5] || "")
                    : i &&
                      dt.test(i) &&
                      (e = T(i, !0)) &&
                      (e = i.indexOf(")", i.length - e) - i.length) &&
                      ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
                  t.slice(0, 3));
            },
          },
          filter: {
            TAG: function (t) {
              var e = t.replace(wt, xt).toLowerCase();
              return "*" === t
                ? function () {
                    return !0;
                  }
                : function (t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e;
                  };
            },
            CLASS: function (t) {
              var e = q[t + " "];
              return (
                e ||
                ((e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) &&
                  q(t, function (t) {
                    return e.test(
                      ("string" == typeof t.className && t.className) ||
                        ("undefined" != typeof t.getAttribute &&
                          t.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (t, i, n) {
              return function (s) {
                var o = e.attr(s, t);
                return null == o
                  ? "!=" === i
                  : i
                  ? ((o += ""),
                    "=" === i
                      ? o === n
                      : "!=" === i
                      ? o !== n
                      : "^=" === i
                      ? n && 0 === o.indexOf(n)
                      : "*=" === i
                      ? n && o.indexOf(n) > -1
                      : "$=" === i
                      ? n && o.slice(-n.length) === n
                      : "~=" === i
                      ? (" " + o.replace(at, " ") + " ").indexOf(n) > -1
                      : "|=" === i
                      ? o === n || o.slice(0, n.length + 1) === n + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (t, e, i, n, s) {
              var o = "nth" !== t.slice(0, 3),
                r = "last" !== t.slice(-4),
                a = "of-type" === e;
              return 1 === n && 0 === s
                ? function (t) {
                    return !!t.parentNode;
                  }
                : function (e, i, l) {
                    var c,
                      u,
                      h,
                      d,
                      p,
                      f,
                      m = o !== r ? "nextSibling" : "previousSibling",
                      g = e.parentNode,
                      v = a && e.nodeName.toLowerCase(),
                      b = !l && !a;
                    if (g) {
                      if (o) {
                        for (; m; ) {
                          for (h = e; (h = h[m]); )
                            if (
                              a
                                ? h.nodeName.toLowerCase() === v
                                : 1 === h.nodeType
                            )
                              return !1;
                          f = m = "only" === t && !f && "nextSibling";
                        }
                        return !0;
                      }
                      if (((f = [r ? g.firstChild : g.lastChild]), r && b)) {
                        for (
                          u = g[F] || (g[F] = {}),
                            c = u[t] || [],
                            p = c[0] === L && c[1],
                            d = c[0] === L && c[2],
                            h = p && g.childNodes[p];
                          (h = (++p && h && h[m]) || (d = p = 0) || f.pop());

                        )
                          if (1 === h.nodeType && ++d && h === e) {
                            u[t] = [L, p, d];
                            break;
                          }
                      } else if (
                        b &&
                        (c = (e[F] || (e[F] = {}))[t]) &&
                        c[0] === L
                      )
                        d = c[1];
                      else
                        for (
                          ;
                          (h = (++p && h && h[m]) || (d = p = 0) || f.pop()) &&
                          ((a
                            ? h.nodeName.toLowerCase() !== v
                            : 1 !== h.nodeType) ||
                            !++d ||
                            (b && ((h[F] || (h[F] = {}))[t] = [L, d]),
                            h !== e));

                        );
                      return (d -= s), d === n || (d % n === 0 && d / n >= 0);
                    }
                  };
            },
            PSEUDO: function (t, i) {
              var s,
                o =
                  x.pseudos[t] ||
                  x.setFilters[t.toLowerCase()] ||
                  e.error("unsupported pseudo: " + t);
              return o[F]
                ? o(i)
                : o.length > 1
                ? ((s = [t, t, "", i]),
                  x.setFilters.hasOwnProperty(t.toLowerCase())
                    ? n(function (t, e) {
                        for (var n, s = o(t, i), r = s.length; r--; )
                          (n = tt(t, s[r])), (t[n] = !(e[n] = s[r]));
                      })
                    : function (t) {
                        return o(t, 0, s);
                      })
                : o;
            },
          },
          pseudos: {
            not: n(function (t) {
              var e = [],
                i = [],
                s = S(t.replace(lt, "$1"));
              return s[F]
                ? n(function (t, e, i, n) {
                    for (var o, r = s(t, null, n, []), a = t.length; a--; )
                      (o = r[a]) && (t[a] = !(e[a] = o));
                  })
                : function (t, n, o) {
                    return (
                      (e[0] = t), s(e, null, o, i), (e[0] = null), !i.pop()
                    );
                  };
            }),
            has: n(function (t) {
              return function (i) {
                return e(t, i).length > 0;
              };
            }),
            contains: n(function (t) {
              return (
                (t = t.replace(wt, xt)),
                function (e) {
                  return (e.textContent || e.innerText || C(e)).indexOf(t) > -1;
                }
              );
            }),
            lang: n(function (t) {
              return (
                pt.test(t || "") || e.error("unsupported lang: " + t),
                (t = t.replace(wt, xt).toLowerCase()),
                function (e) {
                  var i;
                  do
                    if (
                      (i = j
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (i = i.toLowerCase()),
                        i === t || 0 === i.indexOf(t + "-")
                      );
                  while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var i = t.location && t.location.hash;
              return i && i.slice(1) === e.id;
            },
            root: function (t) {
              return t === A;
            },
            focus: function (t) {
              return (
                t === P.activeElement &&
                (!P.hasFocus || P.hasFocus()) &&
                !!(t.type || t.href || ~t.tabIndex)
              );
            },
            enabled: function (t) {
              return t.disabled === !1;
            },
            disabled: function (t) {
              return t.disabled === !0;
            },
            checked: function (t) {
              var e = t.nodeName.toLowerCase();
              return (
                ("input" === e && !!t.checked) ||
                ("option" === e && !!t.selected)
              );
            },
            selected: function (t) {
              return (
                t.parentNode && t.parentNode.selectedIndex, t.selected === !0
              );
            },
            empty: function (t) {
              for (t = t.firstChild; t; t = t.nextSibling)
                if (t.nodeType < 6) return !1;
              return !0;
            },
            parent: function (t) {
              return !x.pseudos.empty(t);
            },
            header: function (t) {
              return gt.test(t.nodeName);
            },
            input: function (t) {
              return mt.test(t.nodeName);
            },
            button: function (t) {
              var e = t.nodeName.toLowerCase();
              return ("input" === e && "button" === t.type) || "button" === e;
            },
            text: function (t) {
              var e;
              return (
                "input" === t.nodeName.toLowerCase() &&
                "text" === t.type &&
                (null == (e = t.getAttribute("type")) ||
                  "text" === e.toLowerCase())
              );
            },
            first: c(function () {
              return [0];
            }),
            last: c(function (t, e) {
              return [e - 1];
            }),
            eq: c(function (t, e, i) {
              return [0 > i ? i + e : i];
            }),
            even: c(function (t, e) {
              for (var i = 0; e > i; i += 2) t.push(i);
              return t;
            }),
            odd: c(function (t, e) {
              for (var i = 1; e > i; i += 2) t.push(i);
              return t;
            }),
            lt: c(function (t, e, i) {
              for (var n = 0 > i ? i + e : i; --n >= 0; ) t.push(n);
              return t;
            }),
            gt: c(function (t, e, i) {
              for (var n = 0 > i ? i + e : i; ++n < e; ) t.push(n);
              return t;
            }),
          },
        }),
        (x.pseudos.nth = x.pseudos.eq);
      for (_ in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        x.pseudos[_] = a(_);
      for (_ in { submit: !0, reset: !0 }) x.pseudos[_] = l(_);
      return (
        (h.prototype = x.filters = x.pseudos),
        (x.setFilters = new h()),
        (T = e.tokenize = function (t, i) {
          var n,
            s,
            o,
            r,
            a,
            l,
            c,
            u = B[t + " "];
          if (u) return i ? 0 : u.slice(0);
          for (a = t, l = [], c = x.preFilter; a; ) {
            (!n || (s = ct.exec(a))) &&
              (s && (a = a.slice(s[0].length) || a), l.push((o = []))),
              (n = !1),
              (s = ut.exec(a)) &&
                ((n = s.shift()),
                o.push({ value: n, type: s[0].replace(lt, " ") }),
                (a = a.slice(n.length)));
            for (r in x.filter)
              !(s = ft[r].exec(a)) ||
                (c[r] && !(s = c[r](s))) ||
                ((n = s.shift()),
                o.push({ value: n, type: r, matches: s }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return i ? a.length : a ? e.error(t) : B(t, l).slice(0);
        }),
        (S = e.compile = function (t, e) {
          var i,
            n = [],
            s = [],
            o = Q[t + " "];
          if (!o) {
            for (e || (e = T(t)), i = e.length; i--; )
              (o = b(e[i])), o[F] ? n.push(o) : s.push(o);
            (o = Q(t, y(s, n))), (o.selector = t);
          }
          return o;
        }),
        (D = e.select = function (t, e, i, n) {
          var s,
            o,
            r,
            a,
            l,
            c = "function" == typeof t && t,
            h = !n && T((t = c.selector || t));
          if (((i = i || []), 1 === h.length)) {
            if (
              ((o = h[0] = h[0].slice(0)),
              o.length > 2 &&
                "ID" === (r = o[0]).type &&
                w.getById &&
                9 === e.nodeType &&
                j &&
                x.relative[o[1].type])
            ) {
              if (
                ((e = (x.find.ID(r.matches[0].replace(wt, xt), e) || [])[0]),
                !e)
              )
                return i;
              c && (e = e.parentNode), (t = t.slice(o.shift().value.length));
            }
            for (
              s = ft.needsContext.test(t) ? 0 : o.length;
              s-- && ((r = o[s]), !x.relative[(a = r.type)]);

            )
              if (
                (l = x.find[a]) &&
                (n = l(
                  r.matches[0].replace(wt, xt),
                  (yt.test(o[0].type) && u(e.parentNode)) || e
                ))
              ) {
                if ((o.splice(s, 1), (t = n.length && d(o)), !t))
                  return J.apply(i, n), i;
                break;
              }
          }
          return (
            (c || S(t, h))(n, e, !j, i, (yt.test(t) && u(e.parentNode)) || e), i
          );
        }),
        (w.sortStable = F.split("").sort(U).join("") === F),
        (w.detectDuplicates = !!M),
        N(),
        (w.sortDetached = s(function (t) {
          return 1 & t.compareDocumentPosition(P.createElement("div"));
        })),
        s(function (t) {
          return (
            (t.innerHTML = "<a href='#'></a>"),
            "#" === t.firstChild.getAttribute("href")
          );
        }) ||
          o("type|href|height|width", function (t, e, i) {
            return i
              ? void 0
              : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
          }),
        (w.attributes &&
          s(function (t) {
            return (
              (t.innerHTML = "<input/>"),
              t.firstChild.setAttribute("value", ""),
              "" === t.firstChild.getAttribute("value")
            );
          })) ||
          o("value", function (t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase()
              ? void 0
              : t.defaultValue;
          }),
        s(function (t) {
          return null == t.getAttribute("disabled");
        }) ||
          o(et, function (t, e, i) {
            var n;
            return i
              ? void 0
              : t[e] === !0
              ? e.toLowerCase()
              : (n = t.getAttributeNode(e)) && n.specified
              ? n.value
              : null;
          }),
        e
      );
    })(t);
    (st.find = ct),
      (st.expr = ct.selectors),
      (st.expr[":"] = st.expr.pseudos),
      (st.unique = ct.uniqueSort),
      (st.text = ct.getText),
      (st.isXMLDoc = ct.isXML),
      (st.contains = ct.contains);
    var ut = st.expr.match.needsContext,
      ht = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      dt = /^.[^:#\[\.,]*$/;
    (st.filter = function (t, e, i) {
      var n = e[0];
      return (
        i && (t = ":not(" + t + ")"),
        1 === e.length && 1 === n.nodeType
          ? st.find.matchesSelector(n, t)
            ? [n]
            : []
          : st.find.matches(
              t,
              st.grep(e, function (t) {
                return 1 === t.nodeType;
              })
            )
      );
    }),
      st.fn.extend({
        find: function (t) {
          var e,
            i = [],
            n = this,
            s = n.length;
          if ("string" != typeof t)
            return this.pushStack(
              st(t).filter(function () {
                for (e = 0; s > e; e++) if (st.contains(n[e], this)) return !0;
              })
            );
          for (e = 0; s > e; e++) st.find(t, n[e], i);
          return (
            (i = this.pushStack(s > 1 ? st.unique(i) : i)),
            (i.selector = this.selector ? this.selector + " " + t : t),
            i
          );
        },
        filter: function (t) {
          return this.pushStack(n(this, t || [], !1));
        },
        not: function (t) {
          return this.pushStack(n(this, t || [], !0));
        },
        is: function (t) {
          return !!n(
            this,
            "string" == typeof t && ut.test(t) ? st(t) : t || [],
            !1
          ).length;
        },
      });
    var pt,
      ft = t.document,
      mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      gt = (st.fn.init = function (t, e) {
        var i, n;
        if (!t) return this;
        if ("string" == typeof t) {
          if (
            ((i =
              "<" === t.charAt(0) &&
              ">" === t.charAt(t.length - 1) &&
              t.length >= 3
                ? [null, t, null]
                : mt.exec(t)),
            !i || (!i[1] && e))
          )
            return !e || e.jquery
              ? (e || pt).find(t)
              : this.constructor(e).find(t);
          if (i[1]) {
            if (
              ((e = e instanceof st ? e[0] : e),
              st.merge(
                this,
                st.parseHTML(
                  i[1],
                  e && e.nodeType ? e.ownerDocument || e : ft,
                  !0
                )
              ),
              ht.test(i[1]) && st.isPlainObject(e))
            )
              for (i in e)
                st.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
            return this;
          }
          if (((n = ft.getElementById(i[2])), n && n.parentNode)) {
            if (n.id !== i[2]) return pt.find(t);
            (this.length = 1), (this[0] = n);
          }
          return (this.context = ft), (this.selector = t), this;
        }
        return t.nodeType
          ? ((this.context = this[0] = t), (this.length = 1), this)
          : st.isFunction(t)
          ? "undefined" != typeof pt.ready
            ? pt.ready(t)
            : t(st)
          : (void 0 !== t.selector &&
              ((this.selector = t.selector), (this.context = t.context)),
            st.makeArray(t, this));
      });
    (gt.prototype = st.fn), (pt = st(ft));
    var vt = /^(?:parents|prev(?:Until|All))/,
      bt = { children: !0, contents: !0, next: !0, prev: !0 };
    st.extend({
      dir: function (t, e, i) {
        for (
          var n = [], s = t[e];
          s &&
          9 !== s.nodeType &&
          (void 0 === i || 1 !== s.nodeType || !st(s).is(i));

        )
          1 === s.nodeType && n.push(s), (s = s[e]);
        return n;
      },
      sibling: function (t, e) {
        for (var i = []; t; t = t.nextSibling)
          1 === t.nodeType && t !== e && i.push(t);
        return i;
      },
    }),
      st.fn.extend({
        has: function (t) {
          var e,
            i = st(t, this),
            n = i.length;
          return this.filter(function () {
            for (e = 0; n > e; e++) if (st.contains(this, i[e])) return !0;
          });
        },
        closest: function (t, e) {
          for (
            var i,
              n = 0,
              s = this.length,
              o = [],
              r =
                ut.test(t) || "string" != typeof t
                  ? st(t, e || this.context)
                  : 0;
            s > n;
            n++
          )
            for (i = this[n]; i && i !== e; i = i.parentNode)
              if (
                i.nodeType < 11 &&
                (r
                  ? r.index(i) > -1
                  : 1 === i.nodeType && st.find.matchesSelector(i, t))
              ) {
                o.push(i);
                break;
              }
          return this.pushStack(o.length > 1 ? st.unique(o) : o);
        },
        index: function (t) {
          return t
            ? "string" == typeof t
              ? st.inArray(this[0], st(t))
              : st.inArray(t.jquery ? t[0] : t, this)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (t, e) {
          return this.pushStack(st.unique(st.merge(this.get(), st(t, e))));
        },
        addBack: function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        },
      }),
      st.each(
        {
          parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
          },
          parents: function (t) {
            return st.dir(t, "parentNode");
          },
          parentsUntil: function (t, e, i) {
            return st.dir(t, "parentNode", i);
          },
          next: function (t) {
            return s(t, "nextSibling");
          },
          prev: function (t) {
            return s(t, "previousSibling");
          },
          nextAll: function (t) {
            return st.dir(t, "nextSibling");
          },
          prevAll: function (t) {
            return st.dir(t, "previousSibling");
          },
          nextUntil: function (t, e, i) {
            return st.dir(t, "nextSibling", i);
          },
          prevUntil: function (t, e, i) {
            return st.dir(t, "previousSibling", i);
          },
          siblings: function (t) {
            return st.sibling((t.parentNode || {}).firstChild, t);
          },
          children: function (t) {
            return st.sibling(t.firstChild);
          },
          contents: function (t) {
            return st.nodeName(t, "iframe")
              ? t.contentDocument || t.contentWindow.document
              : st.merge([], t.childNodes);
          },
        },
        function (t, e) {
          st.fn[t] = function (i, n) {
            var s = st.map(this, e, i);
            return (
              "Until" !== t.slice(-5) && (n = i),
              n && "string" == typeof n && (s = st.filter(n, s)),
              this.length > 1 &&
                (bt[t] || (s = st.unique(s)), vt.test(t) && (s = s.reverse())),
              this.pushStack(s)
            );
          };
        }
      );
    var yt = /\S+/g,
      _t = {};
    (st.Callbacks = function (t) {
      t = "string" == typeof t ? _t[t] || o(t) : st.extend({}, t);
      var e,
        i,
        n,
        s,
        r,
        a,
        l = [],
        c = !t.once && [],
        u = function (o) {
          for (
            i = t.memory && o, n = !0, r = a || 0, a = 0, s = l.length, e = !0;
            l && s > r;
            r++
          )
            if (l[r].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
              i = !1;
              break;
            }
          (e = !1),
            l && (c ? c.length && u(c.shift()) : i ? (l = []) : h.disable());
        },
        h = {
          add: function () {
            if (l) {
              var n = l.length;
              !(function o(e) {
                st.each(e, function (e, i) {
                  var n = st.type(i);
                  "function" === n
                    ? (t.unique && h.has(i)) || l.push(i)
                    : i && i.length && "string" !== n && o(i);
                });
              })(arguments),
                e ? (s = l.length) : i && ((a = n), u(i));
            }
            return this;
          },
          remove: function () {
            return (
              l &&
                st.each(arguments, function (t, i) {
                  for (var n; (n = st.inArray(i, l, n)) > -1; )
                    l.splice(n, 1), e && (s >= n && s--, r >= n && r--);
                }),
              this
            );
          },
          has: function (t) {
            return t ? st.inArray(t, l) > -1 : !(!l || !l.length);
          },
          empty: function () {
            return (l = []), (s = 0), this;
          },
          disable: function () {
            return (l = c = i = void 0), this;
          },
          disabled: function () {
            return !l;
          },
          lock: function () {
            return (c = void 0), i || h.disable(), this;
          },
          locked: function () {
            return !c;
          },
          fireWith: function (t, i) {
            return (
              !l ||
                (n && !c) ||
                ((i = i || []),
                (i = [t, i.slice ? i.slice() : i]),
                e ? c.push(i) : u(i)),
              this
            );
          },
          fire: function () {
            return h.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!n;
          },
        };
      return h;
    }),
      st.extend({
        Deferred: function (t) {
          var e = [
              ["resolve", "done", st.Callbacks("once memory"), "resolved"],
              ["reject", "fail", st.Callbacks("once memory"), "rejected"],
              ["notify", "progress", st.Callbacks("memory")],
            ],
            i = "pending",
            n = {
              state: function () {
                return i;
              },
              always: function () {
                return s.done(arguments).fail(arguments), this;
              },
              then: function () {
                var t = arguments;
                return st
                  .Deferred(function (i) {
                    st.each(e, function (e, o) {
                      var r = st.isFunction(t[e]) && t[e];
                      s[o[1]](function () {
                        var t = r && r.apply(this, arguments);
                        t && st.isFunction(t.promise)
                          ? t
                              .promise()
                              .done(i.resolve)
                              .fail(i.reject)
                              .progress(i.notify)
                          : i[o[0] + "With"](
                              this === n ? i.promise() : this,
                              r ? [t] : arguments
                            );
                      });
                    }),
                      (t = null);
                  })
                  .promise();
              },
              promise: function (t) {
                return null != t ? st.extend(t, n) : n;
              },
            },
            s = {};
          return (
            (n.pipe = n.then),
            st.each(e, function (t, o) {
              var r = o[2],
                a = o[3];
              (n[o[1]] = r.add),
                a &&
                  r.add(
                    function () {
                      i = a;
                    },
                    e[1 ^ t][2].disable,
                    e[2][2].lock
                  ),
                (s[o[0]] = function () {
                  return (
                    s[o[0] + "With"](this === s ? n : this, arguments), this
                  );
                }),
                (s[o[0] + "With"] = r.fireWith);
            }),
            n.promise(s),
            t && t.call(s, s),
            s
          );
        },
        when: function (t) {
          var e,
            i,
            n,
            s = 0,
            o = K.call(arguments),
            r = o.length,
            a = 1 !== r || (t && st.isFunction(t.promise)) ? r : 0,
            l = 1 === a ? t : st.Deferred(),
            c = function (t, i, n) {
              return function (s) {
                (i[t] = this),
                  (n[t] = arguments.length > 1 ? K.call(arguments) : s),
                  n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n);
              };
            };
          if (r > 1)
            for (
              e = new Array(r), i = new Array(r), n = new Array(r);
              r > s;
              s++
            )
              o[s] && st.isFunction(o[s].promise)
                ? o[s]
                    .promise()
                    .done(c(s, n, o))
                    .fail(l.reject)
                    .progress(c(s, i, e))
                : --a;
          return a || l.resolveWith(n, o), l.promise();
        },
      });
    var wt;
    (st.fn.ready = function (t) {
      return st.ready.promise().done(t), this;
    }),
      st.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
          t ? st.readyWait++ : st.ready(!0);
        },
        ready: function (t) {
          if (t === !0 ? !--st.readyWait : !st.isReady) {
            if (!ft.body) return setTimeout(st.ready);
            (st.isReady = !0),
              (t !== !0 && --st.readyWait > 0) ||
                (wt.resolveWith(ft, [st]),
                st.fn.triggerHandler &&
                  (st(ft).triggerHandler("ready"), st(ft).off("ready")));
          }
        },
      }),
      (st.ready.promise = function (e) {
        if (!wt)
          if (((wt = st.Deferred()), "complete" === ft.readyState))
            setTimeout(st.ready);
          else if (ft.addEventListener)
            ft.addEventListener("DOMContentLoaded", a, !1),
              t.addEventListener("load", a, !1);
          else {
            ft.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var i = !1;
            try {
              i = null == t.frameElement && ft.documentElement;
            } catch (n) {}
            i &&
              i.doScroll &&
              !(function s() {
                if (!st.isReady) {
                  try {
                    i.doScroll("left");
                  } catch (t) {
                    return setTimeout(s, 50);
                  }
                  r(), st.ready();
                }
              })();
          }
        return wt.promise(e);
      });
    var xt,
      Ct = "undefined";
    for (xt in st(it)) break;
    (it.ownLast = "0" !== xt),
      (it.inlineBlockNeedsLayout = !1),
      st(function () {
        var t, e, i, n;
        (i = ft.getElementsByTagName("body")[0]),
          i &&
            i.style &&
            ((e = ft.createElement("div")),
            (n = ft.createElement("div")),
            (n.style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            i.appendChild(n).appendChild(e),
            typeof e.style.zoom !== Ct &&
              ((e.style.cssText =
                "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
              (it.inlineBlockNeedsLayout = t = 3 === e.offsetWidth),
              t && (i.style.zoom = 1)),
            i.removeChild(n));
      }),
      (function () {
        var t = ft.createElement("div");
        if (null == it.deleteExpando) {
          it.deleteExpando = !0;
          try {
            delete t.test;
          } catch (e) {
            it.deleteExpando = !1;
          }
        }
        t = null;
      })(),
      (st.acceptData = function (t) {
        var e = st.noData[(t.nodeName + " ").toLowerCase()],
          i = +t.nodeType || 1;
        return 1 !== i && 9 !== i
          ? !1
          : !e || (e !== !0 && t.getAttribute("classid") === e);
      });
    var kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Tt = /([A-Z])/g;
    st.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      },
      hasData: function (t) {
        return (
          (t = t.nodeType ? st.cache[t[st.expando]] : t[st.expando]),
          !!t && !c(t)
        );
      },
      data: function (t, e, i) {
        return u(t, e, i);
      },
      removeData: function (t, e) {
        return h(t, e);
      },
      _data: function (t, e, i) {
        return u(t, e, i, !0);
      },
      _removeData: function (t, e) {
        return h(t, e, !0);
      },
    }),
      st.fn.extend({
        data: function (t, e) {
          var i,
            n,
            s,
            o = this[0],
            r = o && o.attributes;
          if (void 0 === t) {
            if (
              this.length &&
              ((s = st.data(o)),
              1 === o.nodeType && !st._data(o, "parsedAttrs"))
            ) {
              for (i = r.length; i--; )
                r[i] &&
                  ((n = r[i].name),
                  0 === n.indexOf("data-") &&
                    ((n = st.camelCase(n.slice(5))), l(o, n, s[n])));
              st._data(o, "parsedAttrs", !0);
            }
            return s;
          }
          return "object" == typeof t
            ? this.each(function () {
                st.data(this, t);
              })
            : arguments.length > 1
            ? this.each(function () {
                st.data(this, t, e);
              })
            : o
            ? l(o, t, st.data(o, t))
            : void 0;
        },
        removeData: function (t) {
          return this.each(function () {
            st.removeData(this, t);
          });
        },
      }),
      st.extend({
        queue: function (t, e, i) {
          var n;
          return t
            ? ((e = (e || "fx") + "queue"),
              (n = st._data(t, e)),
              i &&
                (!n || st.isArray(i)
                  ? (n = st._data(t, e, st.makeArray(i)))
                  : n.push(i)),
              n || [])
            : void 0;
        },
        dequeue: function (t, e) {
          e = e || "fx";
          var i = st.queue(t, e),
            n = i.length,
            s = i.shift(),
            o = st._queueHooks(t, e),
            r = function () {
              st.dequeue(t, e);
            };
          "inprogress" === s && ((s = i.shift()), n--),
            s &&
              ("fx" === e && i.unshift("inprogress"),
              delete o.stop,
              s.call(t, r, o)),
            !n && o && o.empty.fire();
        },
        _queueHooks: function (t, e) {
          var i = e + "queueHooks";
          return (
            st._data(t, i) ||
            st._data(t, i, {
              empty: st.Callbacks("once memory").add(function () {
                st._removeData(t, e + "queue"), st._removeData(t, i);
              }),
            })
          );
        },
      }),
      st.fn.extend({
        queue: function (t, e) {
          var i = 2;
          return (
            "string" != typeof t && ((e = t), (t = "fx"), i--),
            arguments.length < i
              ? st.queue(this[0], t)
              : void 0 === e
              ? this
              : this.each(function () {
                  var i = st.queue(this, t, e);
                  st._queueHooks(this, t),
                    "fx" === t && "inprogress" !== i[0] && st.dequeue(this, t);
                })
          );
        },
        dequeue: function (t) {
          return this.each(function () {
            st.dequeue(this, t);
          });
        },
        clearQueue: function (t) {
          return this.queue(t || "fx", []);
        },
        promise: function (t, e) {
          var i,
            n = 1,
            s = st.Deferred(),
            o = this,
            r = this.length,
            a = function () {
              --n || s.resolveWith(o, [o]);
            };
          for (
            "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
            r--;

          )
            (i = st._data(o[r], t + "queueHooks")),
              i && i.empty && (n++, i.empty.add(a));
          return a(), s.promise(e);
        },
      });
    var St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Dt = ["Top", "Right", "Bottom", "Left"],
      It = function (t, e) {
        return (
          (t = e || t),
          "none" === st.css(t, "display") || !st.contains(t.ownerDocument, t)
        );
      },
      Et = (st.access = function (t, e, i, n, s, o, r) {
        var a = 0,
          l = t.length,
          c = null == i;
        if ("object" === st.type(i)) {
          s = !0;
          for (a in i) st.access(t, e, a, i[a], !0, o, r);
        } else if (
          void 0 !== n &&
          ((s = !0),
          st.isFunction(n) || (r = !0),
          c &&
            (r
              ? (e.call(t, n), (e = null))
              : ((c = e),
                (e = function (t, e, i) {
                  return c.call(st(t), i);
                }))),
          e)
        )
          for (; l > a; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
        return s ? t : c ? e.call(t) : l ? e(t[0], i) : o;
      }),
      Mt = /^(?:checkbox|radio)$/i;
    !(function () {
      var t = ft.createElement("input"),
        e = ft.createElement("div"),
        i = ft.createDocumentFragment();
      if (
        ((e.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (it.leadingWhitespace = 3 === e.firstChild.nodeType),
        (it.tbody = !e.getElementsByTagName("tbody").length),
        (it.htmlSerialize = !!e.getElementsByTagName("link").length),
        (it.html5Clone =
          "<:nav></:nav>" !== ft.createElement("nav").cloneNode(!0).outerHTML),
        (t.type = "checkbox"),
        (t.checked = !0),
        i.appendChild(t),
        (it.appendChecked = t.checked),
        (e.innerHTML = "<textarea>x</textarea>"),
        (it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
        i.appendChild(e),
        (e.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
        (it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (it.noCloneEvent = !0),
        e.attachEvent &&
          (e.attachEvent("onclick", function () {
            it.noCloneEvent = !1;
          }),
          e.cloneNode(!0).click()),
        null == it.deleteExpando)
      ) {
        it.deleteExpando = !0;
        try {
          delete e.test;
        } catch (n) {
          it.deleteExpando = !1;
        }
      }
    })(),
      (function () {
        var e,
          i,
          n = ft.createElement("div");
        for (e in { submit: !0, change: !0, focusin: !0 })
          (i = "on" + e),
            (it[e + "Bubbles"] = i in t) ||
              (n.setAttribute(i, "t"),
              (it[e + "Bubbles"] = n.attributes[i].expando === !1));
        n = null;
      })();
    var Nt = /^(?:input|select|textarea)$/i,
      Pt = /^key/,
      At = /^(?:mouse|pointer|contextmenu)|click/,
      jt = /^(?:focusinfocus|focusoutblur)$/,
      Ot = /^([^.]*)(?:\.(.+)|)$/;
    (st.event = {
      global: {},
      add: function (t, e, i, n, s) {
        var o,
          r,
          a,
          l,
          c,
          u,
          h,
          d,
          p,
          f,
          m,
          g = st._data(t);
        if (g) {
          for (
            i.handler && ((l = i), (i = l.handler), (s = l.selector)),
              i.guid || (i.guid = st.guid++),
              (r = g.events) || (r = g.events = {}),
              (u = g.handle) ||
                ((u = g.handle = function (t) {
                  return typeof st === Ct ||
                    (t && st.event.triggered === t.type)
                    ? void 0
                    : st.event.dispatch.apply(u.elem, arguments);
                }),
                (u.elem = t)),
              e = (e || "").match(yt) || [""],
              a = e.length;
            a--;

          )
            (o = Ot.exec(e[a]) || []),
              (p = m = o[1]),
              (f = (o[2] || "").split(".").sort()),
              p &&
                ((c = st.event.special[p] || {}),
                (p = (s ? c.delegateType : c.bindType) || p),
                (c = st.event.special[p] || {}),
                (h = st.extend(
                  {
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && st.expr.match.needsContext.test(s),
                    namespace: f.join("."),
                  },
                  l
                )),
                (d = r[p]) ||
                  ((d = r[p] = []),
                  (d.delegateCount = 0),
                  (c.setup && c.setup.call(t, n, f, u) !== !1) ||
                    (t.addEventListener
                      ? t.addEventListener(p, u, !1)
                      : t.attachEvent && t.attachEvent("on" + p, u))),
                c.add &&
                  (c.add.call(t, h),
                  h.handler.guid || (h.handler.guid = i.guid)),
                s ? d.splice(d.delegateCount++, 0, h) : d.push(h),
                (st.event.global[p] = !0));
          t = null;
        }
      },
      remove: function (t, e, i, n, s) {
        var o,
          r,
          a,
          l,
          c,
          u,
          h,
          d,
          p,
          f,
          m,
          g = st.hasData(t) && st._data(t);
        if (g && (u = g.events)) {
          for (e = (e || "").match(yt) || [""], c = e.length; c--; )
            if (
              ((a = Ot.exec(e[c]) || []),
              (p = m = a[1]),
              (f = (a[2] || "").split(".").sort()),
              p)
            ) {
              for (
                h = st.event.special[p] || {},
                  p = (n ? h.delegateType : h.bindType) || p,
                  d = u[p] || [],
                  a =
                    a[2] &&
                    new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  l = o = d.length;
                o--;

              )
                (r = d[o]),
                  (!s && m !== r.origType) ||
                    (i && i.guid !== r.guid) ||
                    (a && !a.test(r.namespace)) ||
                    (n && n !== r.selector && ("**" !== n || !r.selector)) ||
                    (d.splice(o, 1),
                    r.selector && d.delegateCount--,
                    h.remove && h.remove.call(t, r));
              l &&
                !d.length &&
                ((h.teardown && h.teardown.call(t, f, g.handle) !== !1) ||
                  st.removeEvent(t, p, g.handle),
                delete u[p]);
            } else for (p in u) st.event.remove(t, p + e[c], i, n, !0);
          st.isEmptyObject(u) && (delete g.handle, st._removeData(t, "events"));
        }
      },
      trigger: function (e, i, n, s) {
        var o,
          r,
          a,
          l,
          c,
          u,
          h,
          d = [n || ft],
          p = et.call(e, "type") ? e.type : e,
          f = et.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((a = u = n = n || ft),
          3 !== n.nodeType &&
            8 !== n.nodeType &&
            !jt.test(p + st.event.triggered) &&
            (p.indexOf(".") >= 0 &&
              ((f = p.split(".")), (p = f.shift()), f.sort()),
            (r = p.indexOf(":") < 0 && "on" + p),
            (e = e[st.expando]
              ? e
              : new st.Event(p, "object" == typeof e && e)),
            (e.isTrigger = s ? 2 : 3),
            (e.namespace = f.join(".")),
            (e.namespace_re = e.namespace
              ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (i = null == i ? [e] : st.makeArray(i, [e])),
            (c = st.event.special[p] || {}),
            s || !c.trigger || c.trigger.apply(n, i) !== !1))
        ) {
          if (!s && !c.noBubble && !st.isWindow(n)) {
            for (
              l = c.delegateType || p, jt.test(l + p) || (a = a.parentNode);
              a;
              a = a.parentNode
            )
              d.push(a), (u = a);
            u === (n.ownerDocument || ft) &&
              d.push(u.defaultView || u.parentWindow || t);
          }
          for (h = 0; (a = d[h++]) && !e.isPropagationStopped(); )
            (e.type = h > 1 ? l : c.bindType || p),
              (o =
                (st._data(a, "events") || {})[e.type] && st._data(a, "handle")),
              o && o.apply(a, i),
              (o = r && a[r]),
              o &&
                o.apply &&
                st.acceptData(a) &&
                ((e.result = o.apply(a, i)),
                e.result === !1 && e.preventDefault());
          if (
            ((e.type = p),
            !s &&
              !e.isDefaultPrevented() &&
              (!c._default || c._default.apply(d.pop(), i) === !1) &&
              st.acceptData(n) &&
              r &&
              n[p] &&
              !st.isWindow(n))
          ) {
            (u = n[r]), u && (n[r] = null), (st.event.triggered = p);
            try {
              n[p]();
            } catch (m) {}
            (st.event.triggered = void 0), u && (n[r] = u);
          }
          return e.result;
        }
      },
      dispatch: function (t) {
        t = st.event.fix(t);
        var e,
          i,
          n,
          s,
          o,
          r = [],
          a = K.call(arguments),
          l = (st._data(this, "events") || {})[t.type] || [],
          c = st.event.special[t.type] || {};
        if (
          ((a[0] = t),
          (t.delegateTarget = this),
          !c.preDispatch || c.preDispatch.call(this, t) !== !1)
        ) {
          for (
            r = st.event.handlers.call(this, t, l), e = 0;
            (s = r[e++]) && !t.isPropagationStopped();

          )
            for (
              t.currentTarget = s.elem, o = 0;
              (n = s.handlers[o++]) && !t.isImmediatePropagationStopped();

            )
              (!t.namespace_re || t.namespace_re.test(n.namespace)) &&
                ((t.handleObj = n),
                (t.data = n.data),
                (i = (
                  (st.event.special[n.origType] || {}).handle || n.handler
                ).apply(s.elem, a)),
                void 0 !== i &&
                  (t.result = i) === !1 &&
                  (t.preventDefault(), t.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, t), t.result;
        }
      },
      handlers: function (t, e) {
        var i,
          n,
          s,
          o,
          r = [],
          a = e.delegateCount,
          l = t.target;
        if (a && l.nodeType && (!t.button || "click" !== t.type))
          for (; l != this; l = l.parentNode || this)
            if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
              for (s = [], o = 0; a > o; o++)
                (n = e[o]),
                  (i = n.selector + " "),
                  void 0 === s[i] &&
                    (s[i] = n.needsContext
                      ? st(i, this).index(l) >= 0
                      : st.find(i, this, null, [l]).length),
                  s[i] && s.push(n);
              s.length && r.push({ elem: l, handlers: s });
            }
        return a < e.length && r.push({ elem: this, handlers: e.slice(a) }), r;
      },
      fix: function (t) {
        if (t[st.expando]) return t;
        var e,
          i,
          n,
          s = t.type,
          o = t,
          r = this.fixHooks[s];
        for (
          r ||
            (this.fixHooks[s] = r = At.test(s)
              ? this.mouseHooks
              : Pt.test(s)
              ? this.keyHooks
              : {}),
            n = r.props ? this.props.concat(r.props) : this.props,
            t = new st.Event(o),
            e = n.length;
          e--;

        )
          (i = n[e]), (t[i] = o[i]);
        return (
          t.target || (t.target = o.srcElement || ft),
          3 === t.target.nodeType && (t.target = t.target.parentNode),
          (t.metaKey = !!t.metaKey),
          r.filter ? r.filter(t, o) : t
        );
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (t, e) {
          return (
            null == t.which &&
              (t.which = null != e.charCode ? e.charCode : e.keyCode),
            t
          );
        },
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
        filter: function (t, e) {
          var i,
            n,
            s,
            o = e.button,
            r = e.fromElement;
          return (
            null == t.pageX &&
              null != e.clientX &&
              ((n = t.target.ownerDocument || ft),
              (s = n.documentElement),
              (i = n.body),
              (t.pageX =
                e.clientX +
                ((s && s.scrollLeft) || (i && i.scrollLeft) || 0) -
                ((s && s.clientLeft) || (i && i.clientLeft) || 0)),
              (t.pageY =
                e.clientY +
                ((s && s.scrollTop) || (i && i.scrollTop) || 0) -
                ((s && s.clientTop) || (i && i.clientTop) || 0))),
            !t.relatedTarget &&
              r &&
              (t.relatedTarget = r === t.target ? e.toElement : r),
            t.which ||
              void 0 === o ||
              (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
            t
          );
        },
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            if (this !== f() && this.focus)
              try {
                return this.focus(), !1;
              } catch (t) {}
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
            return st.nodeName(this, "input") &&
              "checkbox" === this.type &&
              this.click
              ? (this.click(), !1)
              : void 0;
          },
          _default: function (t) {
            return st.nodeName(t.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (t) {
            void 0 !== t.result &&
              t.originalEvent &&
              (t.originalEvent.returnValue = t.result);
          },
        },
      },
      simulate: function (t, e, i, n) {
        var s = st.extend(new st.Event(), i, {
          type: t,
          isSimulated: !0,
          originalEvent: {},
        });
        n ? st.event.trigger(s, null, e) : st.event.dispatch.call(e, s),
          s.isDefaultPrevented() && i.preventDefault();
      },
    }),
      (st.removeEvent = ft.removeEventListener
        ? function (t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i, !1);
          }
        : function (t, e, i) {
            var n = "on" + e;
            t.detachEvent &&
              (typeof t[n] === Ct && (t[n] = null), t.detachEvent(n, i));
          }),
      (st.Event = function (t, e) {
        return this instanceof st.Event
          ? (t && t.type
              ? ((this.originalEvent = t),
                (this.type = t.type),
                (this.isDefaultPrevented =
                  t.defaultPrevented ||
                  (void 0 === t.defaultPrevented && t.returnValue === !1)
                    ? d
                    : p))
              : (this.type = t),
            e && st.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || st.now()),
            void (this[st.expando] = !0))
          : new st.Event(t, e);
      }),
      (st.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
          var t = this.originalEvent;
          (this.isDefaultPrevented = d),
            t && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
        },
        stopPropagation: function () {
          var t = this.originalEvent;
          (this.isPropagationStopped = d),
            t &&
              (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0));
        },
        stopImmediatePropagation: function () {
          var t = this.originalEvent;
          (this.isImmediatePropagationStopped = d),
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      st.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (t, e) {
          st.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
              var i,
                n = this,
                s = t.relatedTarget,
                o = t.handleObj;
              return (
                (!s || (s !== n && !st.contains(n, s))) &&
                  ((t.type = o.origType),
                  (i = o.handler.apply(this, arguments)),
                  (t.type = e)),
                i
              );
            },
          };
        }
      ),
      it.submitBubbles ||
        (st.event.special.submit = {
          setup: function () {
            return st.nodeName(this, "form")
              ? !1
              : void st.event.add(
                  this,
                  "click._submit keypress._submit",
                  function (t) {
                    var e = t.target,
                      i =
                        st.nodeName(e, "input") || st.nodeName(e, "button")
                          ? e.form
                          : void 0;
                    i &&
                      !st._data(i, "submitBubbles") &&
                      (st.event.add(i, "submit._submit", function (t) {
                        t._submit_bubble = !0;
                      }),
                      st._data(i, "submitBubbles", !0));
                  }
                );
          },
          postDispatch: function (t) {
            t._submit_bubble &&
              (delete t._submit_bubble,
              this.parentNode &&
                !t.isTrigger &&
                st.event.simulate("submit", this.parentNode, t, !0));
          },
          teardown: function () {
            return st.nodeName(this, "form")
              ? !1
              : void st.event.remove(this, "._submit");
          },
        }),
      it.changeBubbles ||
        (st.event.special.change = {
          setup: function () {
            return Nt.test(this.nodeName)
              ? (("checkbox" === this.type || "radio" === this.type) &&
                  (st.event.add(this, "propertychange._change", function (t) {
                    "checked" === t.originalEvent.propertyName &&
                      (this._just_changed = !0);
                  }),
                  st.event.add(this, "click._change", function (t) {
                    this._just_changed &&
                      !t.isTrigger &&
                      (this._just_changed = !1),
                      st.event.simulate("change", this, t, !0);
                  })),
                !1)
              : void st.event.add(this, "beforeactivate._change", function (t) {
                  var e = t.target;
                  Nt.test(e.nodeName) &&
                    !st._data(e, "changeBubbles") &&
                    (st.event.add(e, "change._change", function (t) {
                      !this.parentNode ||
                        t.isSimulated ||
                        t.isTrigger ||
                        st.event.simulate("change", this.parentNode, t, !0);
                    }),
                    st._data(e, "changeBubbles", !0));
                });
          },
          handle: function (t) {
            var e = t.target;
            return this !== e ||
              t.isSimulated ||
              t.isTrigger ||
              ("radio" !== e.type && "checkbox" !== e.type)
              ? t.handleObj.handler.apply(this, arguments)
              : void 0;
          },
          teardown: function () {
            return st.event.remove(this, "._change"), !Nt.test(this.nodeName);
          },
        }),
      it.focusinBubbles ||
        st.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
          var i = function (t) {
            st.event.simulate(e, t.target, st.event.fix(t), !0);
          };
          st.event.special[e] = {
            setup: function () {
              var n = this.ownerDocument || this,
                s = st._data(n, e);
              s || n.addEventListener(t, i, !0), st._data(n, e, (s || 0) + 1);
            },
            teardown: function () {
              var n = this.ownerDocument || this,
                s = st._data(n, e) - 1;
              s
                ? st._data(n, e, s)
                : (n.removeEventListener(t, i, !0), st._removeData(n, e));
            },
          };
        }),
      st.fn.extend({
        on: function (t, e, i, n, s) {
          var o, r;
          if ("object" == typeof t) {
            "string" != typeof e && ((i = i || e), (e = void 0));
            for (o in t) this.on(o, e, i, t[o], s);
            return this;
          }
          if (
            (null == i && null == n
              ? ((n = e), (i = e = void 0))
              : null == n &&
                ("string" == typeof e
                  ? ((n = i), (i = void 0))
                  : ((n = i), (i = e), (e = void 0))),
            n === !1)
          )
            n = p;
          else if (!n) return this;
          return (
            1 === s &&
              ((r = n),
              (n = function (t) {
                return st().off(t), r.apply(this, arguments);
              }),
              (n.guid = r.guid || (r.guid = st.guid++))),
            this.each(function () {
              st.event.add(this, t, n, i, e);
            })
          );
        },
        one: function (t, e, i, n) {
          return this.on(t, e, i, n, 1);
        },
        off: function (t, e, i) {
          var n, s;
          if (t && t.preventDefault && t.handleObj)
            return (
              (n = t.handleObj),
              st(t.delegateTarget).off(
                n.namespace ? n.origType + "." + n.namespace : n.origType,
                n.selector,
                n.handler
              ),
              this
            );
          if ("object" == typeof t) {
            for (s in t) this.off(s, e, t[s]);
            return this;
          }
          return (
            (e === !1 || "function" == typeof e) && ((i = e), (e = void 0)),
            i === !1 && (i = p),
            this.each(function () {
              st.event.remove(this, t, i, e);
            })
          );
        },
        trigger: function (t, e) {
          return this.each(function () {
            st.event.trigger(t, e, this);
          });
        },
        triggerHandler: function (t, e) {
          var i = this[0];
          return i ? st.event.trigger(t, e, i, !0) : void 0;
        },
      });
    var Ht =
        "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      $t = / jQuery\d+="(?:null|\d+)"/g,
      zt = new RegExp("<(?:" + Ht + ")[\\s/>]", "i"),
      Ft = /^\s+/,
      Wt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Lt = /<([\w:]+)/,
      Rt = /<tbody/i,
      qt = /<|&#?\w+;/,
      Bt = /<(?:script|style|link)/i,
      Qt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ut = /^$|\/(?:java|ecma)script/i,
      Yt = /^true\/(.*)/,
      Vt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Kt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: it.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
      },
      Xt = m(ft),
      Gt = Xt.appendChild(ft.createElement("div"));
    (Kt.optgroup = Kt.option),
      (Kt.tbody = Kt.tfoot = Kt.colgroup = Kt.caption = Kt.thead),
      (Kt.th = Kt.td),
      st.extend({
        clone: function (t, e, i) {
          var n,
            s,
            o,
            r,
            a,
            l = st.contains(t.ownerDocument, t);
          if (
            (it.html5Clone || st.isXMLDoc(t) || !zt.test("<" + t.nodeName + ">")
              ? (o = t.cloneNode(!0))
              : ((Gt.innerHTML = t.outerHTML),
                Gt.removeChild((o = Gt.firstChild))),
            !(
              (it.noCloneEvent && it.noCloneChecked) ||
              (1 !== t.nodeType && 11 !== t.nodeType) ||
              st.isXMLDoc(t)
            ))
          )
            for (n = g(o), a = g(t), r = 0; null != (s = a[r]); ++r)
              n[r] && C(s, n[r]);
          if (e)
            if (i)
              for (a = a || g(t), n = n || g(o), r = 0; null != (s = a[r]); r++)
                x(s, n[r]);
            else x(t, o);
          return (
            (n = g(o, "script")),
            n.length > 0 && w(n, !l && g(t, "script")),
            (n = a = s = null),
            o
          );
        },
        buildFragment: function (t, e, i, n) {
          for (
            var s, o, r, a, l, c, u, h = t.length, d = m(e), p = [], f = 0;
            h > f;
            f++
          )
            if (((o = t[f]), o || 0 === o))
              if ("object" === st.type(o)) st.merge(p, o.nodeType ? [o] : o);
              else if (qt.test(o)) {
                for (
                  a = a || d.appendChild(e.createElement("div")),
                    l = (Lt.exec(o) || ["", ""])[1].toLowerCase(),
                    u = Kt[l] || Kt._default,
                    a.innerHTML = u[1] + o.replace(Wt, "<$1></$2>") + u[2],
                    s = u[0];
                  s--;

                )
                  a = a.lastChild;
                if (
                  (!it.leadingWhitespace &&
                    Ft.test(o) &&
                    p.push(e.createTextNode(Ft.exec(o)[0])),
                  !it.tbody)
                )
                  for (
                    o =
                      "table" !== l || Rt.test(o)
                        ? "<table>" !== u[1] || Rt.test(o)
                          ? 0
                          : a
                        : a.firstChild,
                      s = o && o.childNodes.length;
                    s--;

                  )
                    st.nodeName((c = o.childNodes[s]), "tbody") &&
                      !c.childNodes.length &&
                      o.removeChild(c);
                for (
                  st.merge(p, a.childNodes), a.textContent = "";
                  a.firstChild;

                )
                  a.removeChild(a.firstChild);
                a = d.lastChild;
              } else p.push(e.createTextNode(o));
          for (
            a && d.removeChild(a),
              it.appendChecked || st.grep(g(p, "input"), v),
              f = 0;
            (o = p[f++]);

          )
            if (
              (!n || -1 === st.inArray(o, n)) &&
              ((r = st.contains(o.ownerDocument, o)),
              (a = g(d.appendChild(o), "script")),
              r && w(a),
              i)
            )
              for (s = 0; (o = a[s++]); ) Ut.test(o.type || "") && i.push(o);
          return (a = null), d;
        },
        cleanData: function (t, e) {
          for (
            var i,
              n,
              s,
              o,
              r = 0,
              a = st.expando,
              l = st.cache,
              c = it.deleteExpando,
              u = st.event.special;
            null != (i = t[r]);
            r++
          )
            if ((e || st.acceptData(i)) && ((s = i[a]), (o = s && l[s]))) {
              if (o.events)
                for (n in o.events)
                  u[n] ? st.event.remove(i, n) : st.removeEvent(i, n, o.handle);
              l[s] &&
                (delete l[s],
                c
                  ? delete i[a]
                  : typeof i.removeAttribute !== Ct
                  ? i.removeAttribute(a)
                  : (i[a] = null),
                V.push(s));
            }
        },
      }),
      st.fn.extend({
        text: function (t) {
          return Et(
            this,
            function (t) {
              return void 0 === t
                ? st.text(this)
                : this.empty().append(
                    ((this[0] && this[0].ownerDocument) || ft).createTextNode(t)
                  );
            },
            null,
            t,
            arguments.length
          );
        },
        append: function () {
          return this.domManip(arguments, function (t) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var e = b(this, t);
              e.appendChild(t);
            }
          });
        },
        prepend: function () {
          return this.domManip(arguments, function (t) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var e = b(this, t);
              e.insertBefore(t, e.firstChild);
            }
          });
        },
        before: function () {
          return this.domManip(arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this);
          });
        },
        after: function () {
          return this.domManip(arguments, function (t) {
            this.parentNode &&
              this.parentNode.insertBefore(t, this.nextSibling);
          });
        },
        remove: function (t, e) {
          for (
            var i, n = t ? st.filter(t, this) : this, s = 0;
            null != (i = n[s]);
            s++
          )
            e || 1 !== i.nodeType || st.cleanData(g(i)),
              i.parentNode &&
                (e && st.contains(i.ownerDocument, i) && w(g(i, "script")),
                i.parentNode.removeChild(i));
          return this;
        },
        empty: function () {
          for (var t, e = 0; null != (t = this[e]); e++) {
            for (1 === t.nodeType && st.cleanData(g(t, !1)); t.firstChild; )
              t.removeChild(t.firstChild);
            t.options && st.nodeName(t, "select") && (t.options.length = 0);
          }
          return this;
        },
        clone: function (t, e) {
          return (
            (t = null == t ? !1 : t),
            (e = null == e ? t : e),
            this.map(function () {
              return st.clone(this, t, e);
            })
          );
        },
        html: function (t) {
          return Et(
            this,
            function (t) {
              var e = this[0] || {},
                i = 0,
                n = this.length;
              if (void 0 === t)
                return 1 === e.nodeType ? e.innerHTML.replace($t, "") : void 0;
              if (
                "string" == typeof t &&
                !Bt.test(t) &&
                (it.htmlSerialize || !zt.test(t)) &&
                (it.leadingWhitespace || !Ft.test(t)) &&
                !Kt[(Lt.exec(t) || ["", ""])[1].toLowerCase()]
              ) {
                t = t.replace(Wt, "<$1></$2>");
                try {
                  for (; n > i; i++)
                    (e = this[i] || {}),
                      1 === e.nodeType &&
                        (st.cleanData(g(e, !1)), (e.innerHTML = t));
                  e = 0;
                } catch (s) {}
              }
              e && this.empty().append(t);
            },
            null,
            t,
            arguments.length
          );
        },
        replaceWith: function () {
          var t = arguments[0];
          return (
            this.domManip(arguments, function (e) {
              (t = this.parentNode),
                st.cleanData(g(this)),
                t && t.replaceChild(e, this);
            }),
            t && (t.length || t.nodeType) ? this : this.remove()
          );
        },
        detach: function (t) {
          return this.remove(t, !0);
        },
        domManip: function (t, e) {
          t = X.apply([], t);
          var i,
            n,
            s,
            o,
            r,
            a,
            l = 0,
            c = this.length,
            u = this,
            h = c - 1,
            d = t[0],
            p = st.isFunction(d);
          if (
            p ||
            (c > 1 && "string" == typeof d && !it.checkClone && Qt.test(d))
          )
            return this.each(function (i) {
              var n = u.eq(i);
              p && (t[0] = d.call(this, i, n.html())), n.domManip(t, e);
            });
          if (
            c &&
            ((a = st.buildFragment(t, this[0].ownerDocument, !1, this)),
            (i = a.firstChild),
            1 === a.childNodes.length && (a = i),
            i)
          ) {
            for (o = st.map(g(a, "script"), y), s = o.length; c > l; l++)
              (n = a),
                l !== h &&
                  ((n = st.clone(n, !0, !0)), s && st.merge(o, g(n, "script"))),
                e.call(this[l], n, l);
            if (s)
              for (
                r = o[o.length - 1].ownerDocument, st.map(o, _), l = 0;
                s > l;
                l++
              )
                (n = o[l]),
                  Ut.test(n.type || "") &&
                    !st._data(n, "globalEval") &&
                    st.contains(r, n) &&
                    (n.src
                      ? st._evalUrl && st._evalUrl(n.src)
                      : st.globalEval(
                          (
                            n.text ||
                            n.textContent ||
                            n.innerHTML ||
                            ""
                          ).replace(Vt, "")
                        ));
            a = i = null;
          }
          return this;
        },
      }),
      st.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (t, e) {
          st.fn[t] = function (t) {
            for (var i, n = 0, s = [], o = st(t), r = o.length - 1; r >= n; n++)
              (i = n === r ? this : this.clone(!0)),
                st(o[n])[e](i),
                G.apply(s, i.get());
            return this.pushStack(s);
          };
        }
      );
    var Jt,
      Zt = {};
    !(function () {
      var t;
      it.shrinkWrapBlocks = function () {
        if (null != t) return t;
        t = !1;
        var e, i, n;
        return (
          (i = ft.getElementsByTagName("body")[0]),
          i && i.style
            ? ((e = ft.createElement("div")),
              (n = ft.createElement("div")),
              (n.style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              i.appendChild(n).appendChild(e),
              typeof e.style.zoom !== Ct &&
                ((e.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                (e.appendChild(ft.createElement("div")).style.width = "5px"),
                (t = 3 !== e.offsetWidth)),
              i.removeChild(n),
              t)
            : void 0
        );
      };
    })();
    var te,
      ee,
      ie = /^margin/,
      ne = new RegExp("^(" + St + ")(?!px)[a-z%]+$", "i"),
      se = /^(top|right|bottom|left)$/;
    t.getComputedStyle
      ? ((te = function (e) {
          return e.ownerDocument.defaultView.opener
            ? e.ownerDocument.defaultView.getComputedStyle(e, null)
            : t.getComputedStyle(e, null);
        }),
        (ee = function (t, e, i) {
          var n,
            s,
            o,
            r,
            a = t.style;
          return (
            (i = i || te(t)),
            (r = i ? i.getPropertyValue(e) || i[e] : void 0),
            i &&
              ("" !== r ||
                st.contains(t.ownerDocument, t) ||
                (r = st.style(t, e)),
              ne.test(r) &&
                ie.test(e) &&
                ((n = a.width),
                (s = a.minWidth),
                (o = a.maxWidth),
                (a.minWidth = a.maxWidth = a.width = r),
                (r = i.width),
                (a.width = n),
                (a.minWidth = s),
                (a.maxWidth = o))),
            void 0 === r ? r : r + ""
          );
        }))
      : ft.documentElement.currentStyle &&
        ((te = function (t) {
          return t.currentStyle;
        }),
        (ee = function (t, e, i) {
          var n,
            s,
            o,
            r,
            a = t.style;
          return (
            (i = i || te(t)),
            (r = i ? i[e] : void 0),
            null == r && a && a[e] && (r = a[e]),
            ne.test(r) &&
              !se.test(e) &&
              ((n = a.left),
              (s = t.runtimeStyle),
              (o = s && s.left),
              o && (s.left = t.currentStyle.left),
              (a.left = "fontSize" === e ? "1em" : r),
              (r = a.pixelLeft + "px"),
              (a.left = n),
              o && (s.left = o)),
            void 0 === r ? r : r + "" || "auto"
          );
        })),
      (function () {
        function e() {
          var e, i, n, s;
          (i = ft.getElementsByTagName("body")[0]),
            i &&
              i.style &&
              ((e = ft.createElement("div")),
              (n = ft.createElement("div")),
              (n.style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              i.appendChild(n).appendChild(e),
              (e.style.cssText =
                "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
              (o = r = !1),
              (l = !0),
              t.getComputedStyle &&
                ((o = "1%" !== (t.getComputedStyle(e, null) || {}).top),
                (r =
                  "4px" ===
                  (t.getComputedStyle(e, null) || { width: "4px" }).width),
                (s = e.appendChild(ft.createElement("div"))),
                (s.style.cssText = e.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                (s.style.marginRight = s.style.width = "0"),
                (e.style.width = "1px"),
                (l = !parseFloat(
                  (t.getComputedStyle(s, null) || {}).marginRight
                )),
                e.removeChild(s)),
              (e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
              (s = e.getElementsByTagName("td")),
              (s[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
              (a = 0 === s[0].offsetHeight),
              a &&
                ((s[0].style.display = ""),
                (s[1].style.display = "none"),
                (a = 0 === s[0].offsetHeight)),
              i.removeChild(n));
        }
        var i, n, s, o, r, a, l;
        (i = ft.createElement("div")),
          (i.innerHTML =
            "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
          (s = i.getElementsByTagName("a")[0]),
          (n = s && s.style),
          n &&
            ((n.cssText = "float:left;opacity:.5"),
            (it.opacity = "0.5" === n.opacity),
            (it.cssFloat = !!n.cssFloat),
            (i.style.backgroundClip = "content-box"),
            (i.cloneNode(!0).style.backgroundClip = ""),
            (it.clearCloneStyle = "content-box" === i.style.backgroundClip),
            (it.boxSizing =
              "" === n.boxSizing ||
              "" === n.MozBoxSizing ||
              "" === n.WebkitBoxSizing),
            st.extend(it, {
              reliableHiddenOffsets: function () {
                return null == a && e(), a;
              },
              boxSizingReliable: function () {
                return null == r && e(), r;
              },
              pixelPosition: function () {
                return null == o && e(), o;
              },
              reliableMarginRight: function () {
                return null == l && e(), l;
              },
            }));
      })(),
      (st.swap = function (t, e, i, n) {
        var s,
          o,
          r = {};
        for (o in e) (r[o] = t.style[o]), (t.style[o] = e[o]);
        s = i.apply(t, n || []);
        for (o in e) t.style[o] = r[o];
        return s;
      });
    var oe = /alpha\([^)]*\)/i,
      re = /opacity\s*=\s*([^)]*)/,
      ae = /^(none|table(?!-c[ea]).+)/,
      le = new RegExp("^(" + St + ")(.*)$", "i"),
      ce = new RegExp("^([+-])=(" + St + ")", "i"),
      ue = { position: "absolute", visibility: "hidden", display: "block" },
      he = { letterSpacing: "0", fontWeight: "400" },
      de = ["Webkit", "O", "Moz", "ms"];
    st.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var i = ee(t, "opacity");
              return "" === i ? "1" : i;
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
      cssProps: { float: it.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (t, e, i, n) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var s,
            o,
            r,
            a = st.camelCase(e),
            l = t.style;
          if (
            ((e = st.cssProps[a] || (st.cssProps[a] = D(l, a))),
            (r = st.cssHooks[e] || st.cssHooks[a]),
            void 0 === i)
          )
            return r && "get" in r && void 0 !== (s = r.get(t, !1, n))
              ? s
              : l[e];
          if (
            ((o = typeof i),
            "string" === o &&
              (s = ce.exec(i)) &&
              ((i = (s[1] + 1) * s[2] + parseFloat(st.css(t, e))),
              (o = "number")),
            null != i &&
              i === i &&
              ("number" !== o || st.cssNumber[a] || (i += "px"),
              it.clearCloneStyle ||
                "" !== i ||
                0 !== e.indexOf("background") ||
                (l[e] = "inherit"),
              !(r && "set" in r && void 0 === (i = r.set(t, i, n)))))
          )
            try {
              l[e] = i;
            } catch (c) {}
        }
      },
      css: function (t, e, i, n) {
        var s,
          o,
          r,
          a = st.camelCase(e);
        return (
          (e = st.cssProps[a] || (st.cssProps[a] = D(t.style, a))),
          (r = st.cssHooks[e] || st.cssHooks[a]),
          r && "get" in r && (o = r.get(t, !0, i)),
          void 0 === o && (o = ee(t, e, n)),
          "normal" === o && e in he && (o = he[e]),
          "" === i || i
            ? ((s = parseFloat(o)), i === !0 || st.isNumeric(s) ? s || 0 : o)
            : o
        );
      },
    }),
      st.each(["height", "width"], function (t, e) {
        st.cssHooks[e] = {
          get: function (t, i, n) {
            return i
              ? ae.test(st.css(t, "display")) && 0 === t.offsetWidth
                ? st.swap(t, ue, function () {
                    return N(t, e, n);
                  })
                : N(t, e, n)
              : void 0;
          },
          set: function (t, i, n) {
            var s = n && te(t);
            return E(
              t,
              i,
              n
                ? M(
                    t,
                    e,
                    n,
                    it.boxSizing &&
                      "border-box" === st.css(t, "boxSizing", !1, s),
                    s
                  )
                : 0
            );
          },
        };
      }),
      it.opacity ||
        (st.cssHooks.opacity = {
          get: function (t, e) {
            return re.test(
              (e && t.currentStyle ? t.currentStyle.filter : t.style.filter) ||
                ""
            )
              ? 0.01 * parseFloat(RegExp.$1) + ""
              : e
              ? "1"
              : "";
          },
          set: function (t, e) {
            var i = t.style,
              n = t.currentStyle,
              s = st.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
              o = (n && n.filter) || i.filter || "";
            (i.zoom = 1),
              ((e >= 1 || "" === e) &&
                "" === st.trim(o.replace(oe, "")) &&
                i.removeAttribute &&
                (i.removeAttribute("filter"), "" === e || (n && !n.filter))) ||
                (i.filter = oe.test(o) ? o.replace(oe, s) : o + " " + s);
          },
        }),
      (st.cssHooks.marginRight = S(it.reliableMarginRight, function (t, e) {
        return e
          ? st.swap(t, { display: "inline-block" }, ee, [t, "marginRight"])
          : void 0;
      })),
      st.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
        (st.cssHooks[t + e] = {
          expand: function (i) {
            for (
              var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i];
              4 > n;
              n++
            )
              s[t + Dt[n] + e] = o[n] || o[n - 2] || o[0];
            return s;
          },
        }),
          ie.test(t) || (st.cssHooks[t + e].set = E);
      }),
      st.fn.extend({
        css: function (t, e) {
          return Et(
            this,
            function (t, e, i) {
              var n,
                s,
                o = {},
                r = 0;
              if (st.isArray(e)) {
                for (n = te(t), s = e.length; s > r; r++)
                  o[e[r]] = st.css(t, e[r], !1, n);
                return o;
              }
              return void 0 !== i ? st.style(t, e, i) : st.css(t, e);
            },
            t,
            e,
            arguments.length > 1
          );
        },
        show: function () {
          return I(this, !0);
        },
        hide: function () {
          return I(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                It(this) ? st(this).show() : st(this).hide();
              });
        },
      }),
      (st.Tween = P),
      (P.prototype = {
        constructor: P,
        init: function (t, e, i, n, s, o) {
          (this.elem = t),
            (this.prop = i),
            (this.easing = s || "swing"),
            (this.options = e),
            (this.start = this.now = this.cur()),
            (this.end = n),
            (this.unit = o || (st.cssNumber[i] ? "" : "px"));
        },
        cur: function () {
          var t = P.propHooks[this.prop];
          return t && t.get ? t.get(this) : P.propHooks._default.get(this);
        },
        run: function (t) {
          var e,
            i = P.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = e = st.easing[this.easing](
                  t,
                  this.options.duration * t,
                  0,
                  1,
                  this.options.duration
                ))
              : (this.pos = e = t),
            (this.now = (this.end - this.start) * e + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : P.propHooks._default.set(this),
            this
          );
        },
      }),
      (P.prototype.init.prototype = P.prototype),
      (P.propHooks = {
        _default: {
          get: function (t) {
            var e;
            return null == t.elem[t.prop] ||
              (t.elem.style && null != t.elem.style[t.prop])
              ? ((e = st.css(t.elem, t.prop, "")), e && "auto" !== e ? e : 0)
              : t.elem[t.prop];
          },
          set: function (t) {
            st.fx.step[t.prop]
              ? st.fx.step[t.prop](t)
              : t.elem.style &&
                (null != t.elem.style[st.cssProps[t.prop]] ||
                  st.cssHooks[t.prop])
              ? st.style(t.elem, t.prop, t.now + t.unit)
              : (t.elem[t.prop] = t.now);
          },
        },
      }),
      (P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function (t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        },
      }),
      (st.easing = {
        linear: function (t) {
          return t;
        },
        swing: function (t) {
          return 0.5 - Math.cos(t * Math.PI) / 2;
        },
      }),
      (st.fx = P.prototype.init),
      (st.fx.step = {});
    var pe,
      fe,
      me = /^(?:toggle|show|hide)$/,
      ge = new RegExp("^(?:([+-])=|)(" + St + ")([a-z%]*)$", "i"),
      ve = /queueHooks$/,
      be = [H],
      ye = {
        "*": [
          function (t, e) {
            var i = this.createTween(t, e),
              n = i.cur(),
              s = ge.exec(e),
              o = (s && s[3]) || (st.cssNumber[t] ? "" : "px"),
              r =
                (st.cssNumber[t] || ("px" !== o && +n)) &&
                ge.exec(st.css(i.elem, t)),
              a = 1,
              l = 20;
            if (r && r[3] !== o) {
              (o = o || r[3]), (s = s || []), (r = +n || 1);
              do (a = a || ".5"), (r /= a), st.style(i.elem, t, r + o);
              while (a !== (a = i.cur() / n) && 1 !== a && --l);
            }
            return (
              s &&
                ((r = i.start = +r || +n || 0),
                (i.unit = o),
                (i.end = s[1] ? r + (s[1] + 1) * s[2] : +s[2])),
              i
            );
          },
        ],
      };
    (st.Animation = st.extend(z, {
      tweener: function (t, e) {
        st.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.split(" "));
        for (var i, n = 0, s = t.length; s > n; n++)
          (i = t[n]), (ye[i] = ye[i] || []), ye[i].unshift(e);
      },
      prefilter: function (t, e) {
        e ? be.unshift(t) : be.push(t);
      },
    })),
      (st.speed = function (t, e, i) {
        var n =
          t && "object" == typeof t
            ? st.extend({}, t)
            : {
                complete: i || (!i && e) || (st.isFunction(t) && t),
                duration: t,
                easing: (i && e) || (e && !st.isFunction(e) && e),
              };
        return (
          (n.duration = st.fx.off
            ? 0
            : "number" == typeof n.duration
            ? n.duration
            : n.duration in st.fx.speeds
            ? st.fx.speeds[n.duration]
            : st.fx.speeds._default),
          (null == n.queue || n.queue === !0) && (n.queue = "fx"),
          (n.old = n.complete),
          (n.complete = function () {
            st.isFunction(n.old) && n.old.call(this),
              n.queue && st.dequeue(this, n.queue);
          }),
          n
        );
      }),
      st.fn.extend({
        fadeTo: function (t, e, i, n) {
          return this.filter(It)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: e }, t, i, n);
        },
        animate: function (t, e, i, n) {
          var s = st.isEmptyObject(t),
            o = st.speed(e, i, n),
            r = function () {
              var e = z(this, st.extend({}, t), o);
              (s || st._data(this, "finish")) && e.stop(!0);
            };
          return (
            (r.finish = r),
            s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
          );
        },
        stop: function (t, e, i) {
          var n = function (t) {
            var e = t.stop;
            delete t.stop, e(i);
          };
          return (
            "string" != typeof t && ((i = e), (e = t), (t = void 0)),
            e && t !== !1 && this.queue(t || "fx", []),
            this.each(function () {
              var e = !0,
                s = null != t && t + "queueHooks",
                o = st.timers,
                r = st._data(this);
              if (s) r[s] && r[s].stop && n(r[s]);
              else for (s in r) r[s] && r[s].stop && ve.test(s) && n(r[s]);
              for (s = o.length; s--; )
                o[s].elem !== this ||
                  (null != t && o[s].queue !== t) ||
                  (o[s].anim.stop(i), (e = !1), o.splice(s, 1));
              (e || !i) && st.dequeue(this, t);
            })
          );
        },
        finish: function (t) {
          return (
            t !== !1 && (t = t || "fx"),
            this.each(function () {
              var e,
                i = st._data(this),
                n = i[t + "queue"],
                s = i[t + "queueHooks"],
                o = st.timers,
                r = n ? n.length : 0;
              for (
                i.finish = !0,
                  st.queue(this, t, []),
                  s && s.stop && s.stop.call(this, !0),
                  e = o.length;
                e--;

              )
                o[e].elem === this &&
                  o[e].queue === t &&
                  (o[e].anim.stop(!0), o.splice(e, 1));
              for (e = 0; r > e; e++)
                n[e] && n[e].finish && n[e].finish.call(this);
              delete i.finish;
            })
          );
        },
      }),
      st.each(["toggle", "show", "hide"], function (t, e) {
        var i = st.fn[e];
        st.fn[e] = function (t, n, s) {
          return null == t || "boolean" == typeof t
            ? i.apply(this, arguments)
            : this.animate(j(e, !0), t, n, s);
        };
      }),
      st.each(
        {
          slideDown: j("show"),
          slideUp: j("hide"),
          slideToggle: j("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (t, e) {
          st.fn[t] = function (t, i, n) {
            return this.animate(e, t, i, n);
          };
        }
      ),
      (st.timers = []),
      (st.fx.tick = function () {
        var t,
          e = st.timers,
          i = 0;
        for (pe = st.now(); i < e.length; i++)
          (t = e[i]), t() || e[i] !== t || e.splice(i--, 1);
        e.length || st.fx.stop(), (pe = void 0);
      }),
      (st.fx.timer = function (t) {
        st.timers.push(t), t() ? st.fx.start() : st.timers.pop();
      }),
      (st.fx.interval = 13),
      (st.fx.start = function () {
        fe || (fe = setInterval(st.fx.tick, st.fx.interval));
      }),
      (st.fx.stop = function () {
        clearInterval(fe), (fe = null);
      }),
      (st.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (st.fn.delay = function (t, e) {
        return (
          (t = st.fx ? st.fx.speeds[t] || t : t),
          (e = e || "fx"),
          this.queue(e, function (e, i) {
            var n = setTimeout(e, t);
            i.stop = function () {
              clearTimeout(n);
            };
          })
        );
      }),
      (function () {
        var t, e, i, n, s;
        (e = ft.createElement("div")),
          e.setAttribute("className", "t"),
          (e.innerHTML =
            "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
          (n = e.getElementsByTagName("a")[0]),
          (i = ft.createElement("select")),
          (s = i.appendChild(ft.createElement("option"))),
          (t = e.getElementsByTagName("input")[0]),
          (n.style.cssText = "top:1px"),
          (it.getSetAttribute = "t" !== e.className),
          (it.style = /top/.test(n.getAttribute("style"))),
          (it.hrefNormalized = "/a" === n.getAttribute("href")),
          (it.checkOn = !!t.value),
          (it.optSelected = s.selected),
          (it.enctype = !!ft.createElement("form").enctype),
          (i.disabled = !0),
          (it.optDisabled = !s.disabled),
          (t = ft.createElement("input")),
          t.setAttribute("value", ""),
          (it.input = "" === t.getAttribute("value")),
          (t.value = "t"),
          t.setAttribute("type", "radio"),
          (it.radioValue = "t" === t.value);
      })();
    var _e = /\r/g;
    st.fn.extend({
      val: function (t) {
        var e,
          i,
          n,
          s = this[0];
        {
          if (arguments.length)
            return (
              (n = st.isFunction(t)),
              this.each(function (i) {
                var s;
                1 === this.nodeType &&
                  ((s = n ? t.call(this, i, st(this).val()) : t),
                  null == s
                    ? (s = "")
                    : "number" == typeof s
                    ? (s += "")
                    : st.isArray(s) &&
                      (s = st.map(s, function (t) {
                        return null == t ? "" : t + "";
                      })),
                  (e =
                    st.valHooks[this.type] ||
                    st.valHooks[this.nodeName.toLowerCase()]),
                  (e && "set" in e && void 0 !== e.set(this, s, "value")) ||
                    (this.value = s));
              })
            );
          if (s)
            return (
              (e =
                st.valHooks[s.type] || st.valHooks[s.nodeName.toLowerCase()]),
              e && "get" in e && void 0 !== (i = e.get(s, "value"))
                ? i
                : ((i = s.value),
                  "string" == typeof i ? i.replace(_e, "") : null == i ? "" : i)
            );
        }
      },
    }),
      st.extend({
        valHooks: {
          option: {
            get: function (t) {
              var e = st.find.attr(t, "value");
              return null != e ? e : st.trim(st.text(t));
            },
          },
          select: {
            get: function (t) {
              for (
                var e,
                  i,
                  n = t.options,
                  s = t.selectedIndex,
                  o = "select-one" === t.type || 0 > s,
                  r = o ? null : [],
                  a = o ? s + 1 : n.length,
                  l = 0 > s ? a : o ? s : 0;
                a > l;
                l++
              )
                if (
                  ((i = n[l]),
                  (i.selected || l === s) &&
                    (it.optDisabled
                      ? !i.disabled
                      : null === i.getAttribute("disabled")) &&
                    (!i.parentNode.disabled ||
                      !st.nodeName(i.parentNode, "optgroup")))
                ) {
                  if (((e = st(i).val()), o)) return e;
                  r.push(e);
                }
              return r;
            },
            set: function (t, e) {
              for (
                var i, n, s = t.options, o = st.makeArray(e), r = s.length;
                r--;

              )
                if (((n = s[r]), st.inArray(st.valHooks.option.get(n), o) >= 0))
                  try {
                    n.selected = i = !0;
                  } catch (a) {
                    n.scrollHeight;
                  }
                else n.selected = !1;
              return i || (t.selectedIndex = -1), s;
            },
          },
        },
      }),
      st.each(["radio", "checkbox"], function () {
        (st.valHooks[this] = {
          set: function (t, e) {
            return st.isArray(e)
              ? (t.checked = st.inArray(st(t).val(), e) >= 0)
              : void 0;
          },
        }),
          it.checkOn ||
            (st.valHooks[this].get = function (t) {
              return null === t.getAttribute("value") ? "on" : t.value;
            });
      });
    var we,
      xe,
      Ce = st.expr.attrHandle,
      ke = /^(?:checked|selected)$/i,
      Te = it.getSetAttribute,
      Se = it.input;
    st.fn.extend({
      attr: function (t, e) {
        return Et(this, st.attr, t, e, arguments.length > 1);
      },
      removeAttr: function (t) {
        return this.each(function () {
          st.removeAttr(this, t);
        });
      },
    }),
      st.extend({
        attr: function (t, e, i) {
          var n,
            s,
            o = t.nodeType;
          if (t && 3 !== o && 8 !== o && 2 !== o)
            return typeof t.getAttribute === Ct
              ? st.prop(t, e, i)
              : ((1 === o && st.isXMLDoc(t)) ||
                  ((e = e.toLowerCase()),
                  (n =
                    st.attrHooks[e] || (st.expr.match.bool.test(e) ? xe : we))),
                void 0 === i
                  ? n && "get" in n && null !== (s = n.get(t, e))
                    ? s
                    : ((s = st.find.attr(t, e)), null == s ? void 0 : s)
                  : null !== i
                  ? n && "set" in n && void 0 !== (s = n.set(t, i, e))
                    ? s
                    : (t.setAttribute(e, i + ""), i)
                  : void st.removeAttr(t, e));
        },
        removeAttr: function (t, e) {
          var i,
            n,
            s = 0,
            o = e && e.match(yt);
          if (o && 1 === t.nodeType)
            for (; (i = o[s++]); )
              (n = st.propFix[i] || i),
                st.expr.match.bool.test(i)
                  ? (Se && Te) || !ke.test(i)
                    ? (t[n] = !1)
                    : (t[st.camelCase("default-" + i)] = t[n] = !1)
                  : st.attr(t, i, ""),
                t.removeAttribute(Te ? i : n);
        },
        attrHooks: {
          type: {
            set: function (t, e) {
              if (!it.radioValue && "radio" === e && st.nodeName(t, "input")) {
                var i = t.value;
                return t.setAttribute("type", e), i && (t.value = i), e;
              }
            },
          },
        },
      }),
      (xe = {
        set: function (t, e, i) {
          return (
            e === !1
              ? st.removeAttr(t, i)
              : (Se && Te) || !ke.test(i)
              ? t.setAttribute((!Te && st.propFix[i]) || i, i)
              : (t[st.camelCase("default-" + i)] = t[i] = !0),
            i
          );
        },
      }),
      st.each(st.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = Ce[e] || st.find.attr;
        Ce[e] =
          (Se && Te) || !ke.test(e)
            ? function (t, e, n) {
                var s, o;
                return (
                  n ||
                    ((o = Ce[e]),
                    (Ce[e] = s),
                    (s = null != i(t, e, n) ? e.toLowerCase() : null),
                    (Ce[e] = o)),
                  s
                );
              }
            : function (t, e, i) {
                return i
                  ? void 0
                  : t[st.camelCase("default-" + e)]
                  ? e.toLowerCase()
                  : null;
              };
      }),
      (Se && Te) ||
        (st.attrHooks.value = {
          set: function (t, e, i) {
            return st.nodeName(t, "input")
              ? void (t.defaultValue = e)
              : we && we.set(t, e, i);
          },
        }),
      Te ||
        ((we = {
          set: function (t, e, i) {
            var n = t.getAttributeNode(i);
            return (
              n || t.setAttributeNode((n = t.ownerDocument.createAttribute(i))),
              (n.value = e += ""),
              "value" === i || e === t.getAttribute(i) ? e : void 0
            );
          },
        }),
        (Ce.id = Ce.name = Ce.coords = function (t, e, i) {
          var n;
          return i
            ? void 0
            : (n = t.getAttributeNode(e)) && "" !== n.value
            ? n.value
            : null;
        }),
        (st.valHooks.button = {
          get: function (t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value : void 0;
          },
          set: we.set,
        }),
        (st.attrHooks.contenteditable = {
          set: function (t, e, i) {
            we.set(t, "" === e ? !1 : e, i);
          },
        }),
        st.each(["width", "height"], function (t, e) {
          st.attrHooks[e] = {
            set: function (t, i) {
              return "" === i ? (t.setAttribute(e, "auto"), i) : void 0;
            },
          };
        })),
      it.style ||
        (st.attrHooks.style = {
          get: function (t) {
            return t.style.cssText || void 0;
          },
          set: function (t, e) {
            return (t.style.cssText = e + "");
          },
        });
    var De = /^(?:input|select|textarea|button|object)$/i,
      Ie = /^(?:a|area)$/i;
    st.fn.extend({
      prop: function (t, e) {
        return Et(this, st.prop, t, e, arguments.length > 1);
      },
      removeProp: function (t) {
        return (
          (t = st.propFix[t] || t),
          this.each(function () {
            try {
              (this[t] = void 0), delete this[t];
            } catch (e) {}
          })
        );
      },
    }),
      st.extend({
        propFix: { for: "htmlFor", class: "className" },
        prop: function (t, e, i) {
          var n,
            s,
            o,
            r = t.nodeType;
          if (t && 3 !== r && 8 !== r && 2 !== r)
            return (
              (o = 1 !== r || !st.isXMLDoc(t)),
              o && ((e = st.propFix[e] || e), (s = st.propHooks[e])),
              void 0 !== i
                ? s && "set" in s && void 0 !== (n = s.set(t, i, e))
                  ? n
                  : (t[e] = i)
                : s && "get" in s && null !== (n = s.get(t, e))
                ? n
                : t[e]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (t) {
              var e = st.find.attr(t, "tabindex");
              return e
                ? parseInt(e, 10)
                : De.test(t.nodeName) || (Ie.test(t.nodeName) && t.href)
                ? 0
                : -1;
            },
          },
        },
      }),
      it.hrefNormalized ||
        st.each(["href", "src"], function (t, e) {
          st.propHooks[e] = {
            get: function (t) {
              return t.getAttribute(e, 4);
            },
          };
        }),
      it.optSelected ||
        (st.propHooks.selected = {
          get: function (t) {
            var e = t.parentNode;
            return (
              e &&
                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
              null
            );
          },
        }),
      st.each(
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
          st.propFix[this.toLowerCase()] = this;
        }
      ),
      it.enctype || (st.propFix.enctype = "encoding");
    var Ee = /[\t\r\n\f]/g;
    st.fn.extend({
      addClass: function (t) {
        var e,
          i,
          n,
          s,
          o,
          r,
          a = 0,
          l = this.length,
          c = "string" == typeof t && t;
        if (st.isFunction(t))
          return this.each(function (e) {
            st(this).addClass(t.call(this, e, this.className));
          });
        if (c)
          for (e = (t || "").match(yt) || []; l > a; a++)
            if (
              ((i = this[a]),
              (n =
                1 === i.nodeType &&
                (i.className
                  ? (" " + i.className + " ").replace(Ee, " ")
                  : " ")))
            ) {
              for (o = 0; (s = e[o++]); )
                n.indexOf(" " + s + " ") < 0 && (n += s + " ");
              (r = st.trim(n)), i.className !== r && (i.className = r);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          i,
          n,
          s,
          o,
          r,
          a = 0,
          l = this.length,
          c = 0 === arguments.length || ("string" == typeof t && t);
        if (st.isFunction(t))
          return this.each(function (e) {
            st(this).removeClass(t.call(this, e, this.className));
          });
        if (c)
          for (e = (t || "").match(yt) || []; l > a; a++)
            if (
              ((i = this[a]),
              (n =
                1 === i.nodeType &&
                (i.className
                  ? (" " + i.className + " ").replace(Ee, " ")
                  : "")))
            ) {
              for (o = 0; (s = e[o++]); )
                for (; n.indexOf(" " + s + " ") >= 0; )
                  n = n.replace(" " + s + " ", " ");
              (r = t ? st.trim(n) : ""), i.className !== r && (i.className = r);
            }
        return this;
      },
      toggleClass: function (t, e) {
        var i = typeof t;
        return "boolean" == typeof e && "string" === i
          ? e
            ? this.addClass(t)
            : this.removeClass(t)
          : st.isFunction(t)
          ? this.each(function (i) {
              st(this).toggleClass(t.call(this, i, this.className, e), e);
            })
          : this.each(function () {
              if ("string" === i)
                for (
                  var e, n = 0, s = st(this), o = t.match(yt) || [];
                  (e = o[n++]);

                )
                  s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
              else
                (i === Ct || "boolean" === i) &&
                  (this.className &&
                    st._data(this, "__className__", this.className),
                  (this.className =
                    this.className || t === !1
                      ? ""
                      : st._data(this, "__className__") || ""));
            });
      },
      hasClass: function (t) {
        for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
          if (
            1 === this[i].nodeType &&
            (" " + this[i].className + " ").replace(Ee, " ").indexOf(e) >= 0
          )
            return !0;
        return !1;
      },
    }),
      st.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (t, e) {
          st.fn[e] = function (t, i) {
            return arguments.length > 0
              ? this.on(e, null, t, i)
              : this.trigger(e);
          };
        }
      ),
      st.fn.extend({
        hover: function (t, e) {
          return this.mouseenter(t).mouseleave(e || t);
        },
        bind: function (t, e, i) {
          return this.on(t, null, e, i);
        },
        unbind: function (t, e) {
          return this.off(t, null, e);
        },
        delegate: function (t, e, i, n) {
          return this.on(e, t, i, n);
        },
        undelegate: function (t, e, i) {
          return 1 === arguments.length
            ? this.off(t, "**")
            : this.off(e, t || "**", i);
        },
      });
    var Me = st.now(),
      Ne = /\?/,
      Pe = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    (st.parseJSON = function (e) {
      if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
      var i,
        n = null,
        s = st.trim(e + "");
      return s &&
        !st.trim(
          s.replace(Pe, function (t, e, s, o) {
            return (
              i && e && (n = 0),
              0 === n ? t : ((i = s || e), (n += !o - !s), "")
            );
          })
        )
        ? Function("return " + s)()
        : st.error("Invalid JSON: " + e);
    }),
      (st.parseXML = function (e) {
        var i, n;
        if (!e || "string" != typeof e) return null;
        try {
          t.DOMParser
            ? ((n = new DOMParser()), (i = n.parseFromString(e, "text/xml")))
            : ((i = new ActiveXObject("Microsoft.XMLDOM")),
              (i.async = "false"),
              i.loadXML(e));
        } catch (s) {
          i = void 0;
        }
        return (
          (i &&
            i.documentElement &&
            !i.getElementsByTagName("parsererror").length) ||
            st.error("Invalid XML: " + e),
          i
        );
      });
    var Ae,
      je,
      Oe = /#.*$/,
      He = /([?&])_=[^&]*/,
      $e = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      ze = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Fe = /^(?:GET|HEAD)$/,
      We = /^\/\//,
      Le = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Re = {},
      qe = {},
      Be = "*/".concat("*");
    try {
      je = location.href;
    } catch (Qe) {
      (je = ft.createElement("a")), (je.href = ""), (je = je.href);
    }
    (Ae = Le.exec(je.toLowerCase()) || []),
      st.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: je,
          type: "GET",
          isLocal: ze.test(Ae[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Be,
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
            "text json": st.parseJSON,
            "text xml": st.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (t, e) {
          return e ? L(L(t, st.ajaxSettings), e) : L(st.ajaxSettings, t);
        },
        ajaxPrefilter: F(Re),
        ajaxTransport: F(qe),
        ajax: function (t, e) {
          function i(t, e, i, n) {
            var s,
              u,
              v,
              b,
              _,
              x = e;
            2 !== y &&
              ((y = 2),
              a && clearTimeout(a),
              (c = void 0),
              (r = n || ""),
              (w.readyState = t > 0 ? 4 : 0),
              (s = (t >= 200 && 300 > t) || 304 === t),
              i && (b = R(h, w, i)),
              (b = q(h, b, w, s)),
              s
                ? (h.ifModified &&
                    ((_ = w.getResponseHeader("Last-Modified")),
                    _ && (st.lastModified[o] = _),
                    (_ = w.getResponseHeader("etag")),
                    _ && (st.etag[o] = _)),
                  204 === t || "HEAD" === h.type
                    ? (x = "nocontent")
                    : 304 === t
                    ? (x = "notmodified")
                    : ((x = b.state), (u = b.data), (v = b.error), (s = !v)))
                : ((v = x), (t || !x) && ((x = "error"), 0 > t && (t = 0))),
              (w.status = t),
              (w.statusText = (e || x) + ""),
              s ? f.resolveWith(d, [u, x, w]) : f.rejectWith(d, [w, x, v]),
              w.statusCode(g),
              (g = void 0),
              l &&
                p.trigger(s ? "ajaxSuccess" : "ajaxError", [w, h, s ? u : v]),
              m.fireWith(d, [w, x]),
              l &&
                (p.trigger("ajaxComplete", [w, h]),
                --st.active || st.event.trigger("ajaxStop")));
          }
          "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
          var n,
            s,
            o,
            r,
            a,
            l,
            c,
            u,
            h = st.ajaxSetup({}, e),
            d = h.context || h,
            p = h.context && (d.nodeType || d.jquery) ? st(d) : st.event,
            f = st.Deferred(),
            m = st.Callbacks("once memory"),
            g = h.statusCode || {},
            v = {},
            b = {},
            y = 0,
            _ = "canceled",
            w = {
              readyState: 0,
              getResponseHeader: function (t) {
                var e;
                if (2 === y) {
                  if (!u)
                    for (u = {}; (e = $e.exec(r)); )
                      u[e[1].toLowerCase()] = e[2];
                  e = u[t.toLowerCase()];
                }
                return null == e ? null : e;
              },
              getAllResponseHeaders: function () {
                return 2 === y ? r : null;
              },
              setRequestHeader: function (t, e) {
                var i = t.toLowerCase();
                return y || ((t = b[i] = b[i] || t), (v[t] = e)), this;
              },
              overrideMimeType: function (t) {
                return y || (h.mimeType = t), this;
              },
              statusCode: function (t) {
                var e;
                if (t)
                  if (2 > y) for (e in t) g[e] = [g[e], t[e]];
                  else w.always(t[w.status]);
                return this;
              },
              abort: function (t) {
                var e = t || _;
                return c && c.abort(e), i(0, e), this;
              },
            };
          if (
            ((f.promise(w).complete = m.add),
            (w.success = w.done),
            (w.error = w.fail),
            (h.url = ((t || h.url || je) + "")
              .replace(Oe, "")
              .replace(We, Ae[1] + "//")),
            (h.type = e.method || e.type || h.method || h.type),
            (h.dataTypes = st
              .trim(h.dataType || "*")
              .toLowerCase()
              .match(yt) || [""]),
            null == h.crossDomain &&
              ((n = Le.exec(h.url.toLowerCase())),
              (h.crossDomain = !(
                !n ||
                (n[1] === Ae[1] &&
                  n[2] === Ae[2] &&
                  (n[3] || ("http:" === n[1] ? "80" : "443")) ===
                    (Ae[3] || ("http:" === Ae[1] ? "80" : "443")))
              ))),
            h.data &&
              h.processData &&
              "string" != typeof h.data &&
              (h.data = st.param(h.data, h.traditional)),
            W(Re, h, e, w),
            2 === y)
          )
            return w;
          (l = st.event && h.global),
            l && 0 === st.active++ && st.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !Fe.test(h.type)),
            (o = h.url),
            h.hasContent ||
              (h.data &&
                ((o = h.url += (Ne.test(o) ? "&" : "?") + h.data),
                delete h.data),
              h.cache === !1 &&
                (h.url = He.test(o)
                  ? o.replace(He, "$1_=" + Me++)
                  : o + (Ne.test(o) ? "&" : "?") + "_=" + Me++)),
            h.ifModified &&
              (st.lastModified[o] &&
                w.setRequestHeader("If-Modified-Since", st.lastModified[o]),
              st.etag[o] && w.setRequestHeader("If-None-Match", st.etag[o])),
            ((h.data && h.hasContent && h.contentType !== !1) ||
              e.contentType) &&
              w.setRequestHeader("Content-Type", h.contentType),
            w.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    ("*" !== h.dataTypes[0] ? ", " + Be + "; q=0.01" : "")
                : h.accepts["*"]
            );
          for (s in h.headers) w.setRequestHeader(s, h.headers[s]);
          if (h.beforeSend && (h.beforeSend.call(d, w, h) === !1 || 2 === y))
            return w.abort();
          _ = "abort";
          for (s in { success: 1, error: 1, complete: 1 }) w[s](h[s]);
          if ((c = W(qe, h, e, w))) {
            (w.readyState = 1),
              l && p.trigger("ajaxSend", [w, h]),
              h.async &&
                h.timeout > 0 &&
                (a = setTimeout(function () {
                  w.abort("timeout");
                }, h.timeout));
            try {
              (y = 1), c.send(v, i);
            } catch (x) {
              if (!(2 > y)) throw x;
              i(-1, x);
            }
          } else i(-1, "No Transport");
          return w;
        },
        getJSON: function (t, e, i) {
          return st.get(t, e, i, "json");
        },
        getScript: function (t, e) {
          return st.get(t, void 0, e, "script");
        },
      }),
      st.each(["get", "post"], function (t, e) {
        st[e] = function (t, i, n, s) {
          return (
            st.isFunction(i) && ((s = s || n), (n = i), (i = void 0)),
            st.ajax({ url: t, type: e, dataType: s, data: i, success: n })
          );
        };
      }),
      (st._evalUrl = function (t) {
        return st.ajax({
          url: t,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      st.fn.extend({
        wrapAll: function (t) {
          if (st.isFunction(t))
            return this.each(function (e) {
              st(this).wrapAll(t.call(this, e));
            });
          if (this[0]) {
            var e = st(t, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && e.insertBefore(this[0]),
              e
                .map(function () {
                  for (
                    var t = this;
                    t.firstChild && 1 === t.firstChild.nodeType;

                  )
                    t = t.firstChild;
                  return t;
                })
                .append(this);
          }
          return this;
        },
        wrapInner: function (t) {
          return st.isFunction(t)
            ? this.each(function (e) {
                st(this).wrapInner(t.call(this, e));
              })
            : this.each(function () {
                var e = st(this),
                  i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t);
              });
        },
        wrap: function (t) {
          var e = st.isFunction(t);
          return this.each(function (i) {
            st(this).wrapAll(e ? t.call(this, i) : t);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              st.nodeName(this, "body") ||
                st(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (st.expr.filters.hidden = function (t) {
        return (
          (t.offsetWidth <= 0 && t.offsetHeight <= 0) ||
          (!it.reliableHiddenOffsets() &&
            "none" === ((t.style && t.style.display) || st.css(t, "display")))
        );
      }),
      (st.expr.filters.visible = function (t) {
        return !st.expr.filters.hidden(t);
      });
    var Ue = /%20/g,
      Ye = /\[\]$/,
      Ve = /\r?\n/g,
      Ke = /^(?:submit|button|image|reset|file)$/i,
      Xe = /^(?:input|select|textarea|keygen)/i;
    (st.param = function (t, e) {
      var i,
        n = [],
        s = function (t, e) {
          (e = st.isFunction(e) ? e() : null == e ? "" : e),
            (n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
        };
      if (
        (void 0 === e && (e = st.ajaxSettings && st.ajaxSettings.traditional),
        st.isArray(t) || (t.jquery && !st.isPlainObject(t)))
      )
        st.each(t, function () {
          s(this.name, this.value);
        });
      else for (i in t) B(i, t[i], e, s);
      return n.join("&").replace(Ue, "+");
    }),
      st.fn.extend({
        serialize: function () {
          return st.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var t = st.prop(this, "elements");
            return t ? st.makeArray(t) : this;
          })
            .filter(function () {
              var t = this.type;
              return (
                this.name &&
                !st(this).is(":disabled") &&
                Xe.test(this.nodeName) &&
                !Ke.test(t) &&
                (this.checked || !Mt.test(t))
              );
            })
            .map(function (t, e) {
              var i = st(this).val();
              return null == i
                ? null
                : st.isArray(i)
                ? st.map(i, function (t) {
                    return { name: e.name, value: t.replace(Ve, "\r\n") };
                  })
                : { name: e.name, value: i.replace(Ve, "\r\n") };
            })
            .get();
        },
      }),
      (st.ajaxSettings.xhr =
        void 0 !== t.ActiveXObject
          ? function () {
              return (
                (!this.isLocal &&
                  /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  Q()) ||
                U()
              );
            }
          : Q);
    var Ge = 0,
      Je = {},
      Ze = st.ajaxSettings.xhr();
    t.attachEvent &&
      t.attachEvent("onunload", function () {
        for (var t in Je) Je[t](void 0, !0);
      }),
      (it.cors = !!Ze && "withCredentials" in Ze),
      (Ze = it.ajax = !!Ze),
      Ze &&
        st.ajaxTransport(function (t) {
          if (!t.crossDomain || it.cors) {
            var e;
            return {
              send: function (i, n) {
                var s,
                  o = t.xhr(),
                  r = ++Ge;
                if (
                  (o.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (s in t.xhrFields) o[s] = t.xhrFields[s];
                t.mimeType &&
                  o.overrideMimeType &&
                  o.overrideMimeType(t.mimeType),
                  t.crossDomain ||
                    i["X-Requested-With"] ||
                    (i["X-Requested-With"] = "XMLHttpRequest");
                for (s in i)
                  void 0 !== i[s] && o.setRequestHeader(s, i[s] + "");
                o.send((t.hasContent && t.data) || null),
                  (e = function (i, s) {
                    var a, l, c;
                    if (e && (s || 4 === o.readyState))
                      if (
                        (delete Je[r],
                        (e = void 0),
                        (o.onreadystatechange = st.noop),
                        s)
                      )
                        4 !== o.readyState && o.abort();
                      else {
                        (c = {}),
                          (a = o.status),
                          "string" == typeof o.responseText &&
                            (c.text = o.responseText);
                        try {
                          l = o.statusText;
                        } catch (u) {
                          l = "";
                        }
                        a || !t.isLocal || t.crossDomain
                          ? 1223 === a && (a = 204)
                          : (a = c.text ? 200 : 404);
                      }
                    c && n(a, l, c, o.getAllResponseHeaders());
                  }),
                  t.async
                    ? 4 === o.readyState
                      ? setTimeout(e)
                      : (o.onreadystatechange = Je[r] = e)
                    : e();
              },
              abort: function () {
                e && e(void 0, !0);
              },
            };
          }
        }),
      st.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
          "text script": function (t) {
            return st.globalEval(t), t;
          },
        },
      }),
      st.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1),
          t.crossDomain && ((t.type = "GET"), (t.global = !1));
      }),
      st.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
          var e,
            i = ft.head || st("head")[0] || ft.documentElement;
          return {
            send: function (n, s) {
              (e = ft.createElement("script")),
                (e.async = !0),
                t.scriptCharset && (e.charset = t.scriptCharset),
                (e.src = t.url),
                (e.onload = e.onreadystatechange = function (t, i) {
                  (i ||
                    !e.readyState ||
                    /loaded|complete/.test(e.readyState)) &&
                    ((e.onload = e.onreadystatechange = null),
                    e.parentNode && e.parentNode.removeChild(e),
                    (e = null),
                    i || s(200, "success"));
                }),
                i.insertBefore(e, i.firstChild);
            },
            abort: function () {
              e && e.onload(void 0, !0);
            },
          };
        }
      });
    var ti = [],
      ei = /(=)\?(?=&|$)|\?\?/;
    st.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var t = ti.pop() || st.expando + "_" + Me++;
        return (this[t] = !0), t;
      },
    }),
      st.ajaxPrefilter("json jsonp", function (e, i, n) {
        var s,
          o,
          r,
          a =
            e.jsonp !== !1 &&
            (ei.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                !(e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
                ei.test(e.data) &&
                "data");
        return a || "jsonp" === e.dataTypes[0]
          ? ((s = e.jsonpCallback = st.isFunction(e.jsonpCallback)
              ? e.jsonpCallback()
              : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(ei, "$1" + s))
              : e.jsonp !== !1 &&
                (e.url += (Ne.test(e.url) ? "&" : "?") + e.jsonp + "=" + s),
            (e.converters["script json"] = function () {
              return r || st.error(s + " was not called"), r[0];
            }),
            (e.dataTypes[0] = "json"),
            (o = t[s]),
            (t[s] = function () {
              r = arguments;
            }),
            n.always(function () {
              (t[s] = o),
                e[s] && ((e.jsonpCallback = i.jsonpCallback), ti.push(s)),
                r && st.isFunction(o) && o(r[0]),
                (r = o = void 0);
            }),
            "script")
          : void 0;
      }),
      (st.parseHTML = function (t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && ((i = e), (e = !1)), (e = e || ft);
        var n = ht.exec(t),
          s = !i && [];
        return n
          ? [e.createElement(n[1])]
          : ((n = st.buildFragment([t], e, s)),
            s && s.length && st(s).remove(),
            st.merge([], n.childNodes));
      });
    var ii = st.fn.load;
    (st.fn.load = function (t, e, i) {
      if ("string" != typeof t && ii) return ii.apply(this, arguments);
      var n,
        s,
        o,
        r = this,
        a = t.indexOf(" ");
      return (
        a >= 0 && ((n = st.trim(t.slice(a, t.length))), (t = t.slice(0, a))),
        st.isFunction(e)
          ? ((i = e), (e = void 0))
          : e && "object" == typeof e && (o = "POST"),
        r.length > 0 &&
          st
            .ajax({ url: t, type: o, dataType: "html", data: e })
            .done(function (t) {
              (s = arguments),
                r.html(n ? st("<div>").append(st.parseHTML(t)).find(n) : t);
            })
            .complete(
              i &&
                function (t, e) {
                  r.each(i, s || [t.responseText, e, t]);
                }
            ),
        this
      );
    }),
      st.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (t, e) {
          st.fn[e] = function (t) {
            return this.on(e, t);
          };
        }
      ),
      (st.expr.filters.animated = function (t) {
        return st.grep(st.timers, function (e) {
          return t === e.elem;
        }).length;
      });
    var ni = t.document.documentElement;
    (st.offset = {
      setOffset: function (t, e, i) {
        var n,
          s,
          o,
          r,
          a,
          l,
          c,
          u = st.css(t, "position"),
          h = st(t),
          d = {};
        "static" === u && (t.style.position = "relative"),
          (a = h.offset()),
          (o = st.css(t, "top")),
          (l = st.css(t, "left")),
          (c =
            ("absolute" === u || "fixed" === u) &&
            st.inArray("auto", [o, l]) > -1),
          c
            ? ((n = h.position()), (r = n.top), (s = n.left))
            : ((r = parseFloat(o) || 0), (s = parseFloat(l) || 0)),
          st.isFunction(e) && (e = e.call(t, i, a)),
          null != e.top && (d.top = e.top - a.top + r),
          null != e.left && (d.left = e.left - a.left + s),
          "using" in e ? e.using.call(t, d) : h.css(d);
      },
    }),
      st.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return void 0 === t
              ? this
              : this.each(function (e) {
                  st.offset.setOffset(this, t, e);
                });
          var e,
            i,
            n = { top: 0, left: 0 },
            s = this[0],
            o = s && s.ownerDocument;
          if (o)
            return (
              (e = o.documentElement),
              st.contains(e, s)
                ? (typeof s.getBoundingClientRect !== Ct &&
                    (n = s.getBoundingClientRect()),
                  (i = Y(o)),
                  {
                    top:
                      n.top +
                      (i.pageYOffset || e.scrollTop) -
                      (e.clientTop || 0),
                    left:
                      n.left +
                      (i.pageXOffset || e.scrollLeft) -
                      (e.clientLeft || 0),
                  })
                : n
            );
        },
        position: function () {
          if (this[0]) {
            var t,
              e,
              i = { top: 0, left: 0 },
              n = this[0];
            return (
              "fixed" === st.css(n, "position")
                ? (e = n.getBoundingClientRect())
                : ((t = this.offsetParent()),
                  (e = this.offset()),
                  st.nodeName(t[0], "html") || (i = t.offset()),
                  (i.top += st.css(t[0], "borderTopWidth", !0)),
                  (i.left += st.css(t[0], "borderLeftWidth", !0))),
              {
                top: e.top - i.top - st.css(n, "marginTop", !0),
                left: e.left - i.left - st.css(n, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var t = this.offsetParent || ni;
              t &&
              !st.nodeName(t, "html") &&
              "static" === st.css(t, "position");

            )
              t = t.offsetParent;
            return t || ni;
          });
        },
      }),
      st.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (t, e) {
          var i = /Y/.test(e);
          st.fn[t] = function (n) {
            return Et(
              this,
              function (t, n, s) {
                var o = Y(t);
                return void 0 === s
                  ? o
                    ? e in o
                      ? o[e]
                      : o.document.documentElement[n]
                    : t[n]
                  : void (o
                      ? o.scrollTo(
                          i ? st(o).scrollLeft() : s,
                          i ? s : st(o).scrollTop()
                        )
                      : (t[n] = s));
              },
              t,
              n,
              arguments.length,
              null
            );
          };
        }
      ),
      st.each(["top", "left"], function (t, e) {
        st.cssHooks[e] = S(it.pixelPosition, function (t, i) {
          return i
            ? ((i = ee(t, e)), ne.test(i) ? st(t).position()[e] + "px" : i)
            : void 0;
        });
      }),
      st.each({ Height: "height", Width: "width" }, function (t, e) {
        st.each(
          { padding: "inner" + t, content: e, "": "outer" + t },
          function (i, n) {
            st.fn[n] = function (n, s) {
              var o = arguments.length && (i || "boolean" != typeof n),
                r = i || (n === !0 || s === !0 ? "margin" : "border");
              return Et(
                this,
                function (e, i, n) {
                  var s;
                  return st.isWindow(e)
                    ? e.document.documentElement["client" + t]
                    : 9 === e.nodeType
                    ? ((s = e.documentElement),
                      Math.max(
                        e.body["scroll" + t],
                        s["scroll" + t],
                        e.body["offset" + t],
                        s["offset" + t],
                        s["client" + t]
                      ))
                    : void 0 === n
                    ? st.css(e, i, r)
                    : st.style(e, i, n, r);
                },
                e,
                o ? n : void 0,
                o,
                null
              );
            };
          }
        );
      }),
      (st.fn.size = function () {
        return this.length;
      }),
      (st.fn.andSelf = st.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return st;
        });
    var si = t.jQuery,
      oi = t.$;
    return (
      (st.noConflict = function (e) {
        return (
          t.$ === st && (t.$ = oi), e && t.jQuery === st && (t.jQuery = si), st
        );
      }),
      typeof e === Ct && (t.jQuery = t.$ = st),
      st
    );
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(jQuery);
  })(function (t) {
    function e(e, n) {
      var s,
        o,
        r,
        a = e.nodeName.toLowerCase();
      return "area" === a
        ? ((s = e.parentNode),
          (o = s.name),
          e.href && o && "map" === s.nodeName.toLowerCase()
            ? ((r = t("img[usemap='#" + o + "']")[0]), !!r && i(r))
            : !1)
        : (/^(input|select|textarea|button|object)$/.test(a)
            ? !e.disabled
            : "a" === a
            ? e.href || n
            : n) && i(e);
    }
    function i(e) {
      return (
        t.expr.filters.visible(e) &&
        !t(e)
          .parents()
          .addBack()
          .filter(function () {
            return "hidden" === t.css(this, "visibility");
          }).length
      );
    }
    (t.ui = t.ui || {}),
      t.extend(t.ui, {
        version: "1.11.4",
        keyCode: {
          BACKSPACE: 8,
          COMMA: 188,
          DELETE: 46,
          DOWN: 40,
          END: 35,
          ENTER: 13,
          ESCAPE: 27,
          HOME: 36,
          LEFT: 37,
          PAGE_DOWN: 34,
          PAGE_UP: 33,
          PERIOD: 190,
          RIGHT: 39,
          SPACE: 32,
          TAB: 9,
          UP: 38,
        },
      }),
      t.fn.extend({
        scrollParent: function (e) {
          var i = this.css("position"),
            n = "absolute" === i,
            s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            o = this.parents()
              .filter(function () {
                var e = t(this);
                return n && "static" === e.css("position")
                  ? !1
                  : s.test(
                      e.css("overflow") +
                        e.css("overflow-y") +
                        e.css("overflow-x")
                    );
              })
              .eq(0);
          return "fixed" !== i && o.length
            ? o
            : t(this[0].ownerDocument || document);
        },
        uniqueId: (function () {
          var t = 0;
          return function () {
            return this.each(function () {
              this.id || (this.id = "ui-id-" + ++t);
            });
          };
        })(),
        removeUniqueId: function () {
          return this.each(function () {
            /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
          });
        },
      }),
      t.extend(t.expr[":"], {
        data: t.expr.createPseudo
          ? t.expr.createPseudo(function (e) {
              return function (i) {
                return !!t.data(i, e);
              };
            })
          : function (e, i, n) {
              return !!t.data(e, n[3]);
            },
        focusable: function (i) {
          return e(i, !isNaN(t.attr(i, "tabindex")));
        },
        tabbable: function (i) {
          var n = t.attr(i, "tabindex"),
            s = isNaN(n);
          return (s || n >= 0) && e(i, !s);
        },
      }),
      t("<a>").outerWidth(1).jquery ||
        t.each(["Width", "Height"], function (e, i) {
          function n(e, i, n, o) {
            return (
              t.each(s, function () {
                (i -= parseFloat(t.css(e, "padding" + this)) || 0),
                  n &&
                    (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                  o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
              }),
              i
            );
          }
          var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            o = i.toLowerCase(),
            r = {
              innerWidth: t.fn.innerWidth,
              innerHeight: t.fn.innerHeight,
              outerWidth: t.fn.outerWidth,
              outerHeight: t.fn.outerHeight,
            };
          (t.fn["inner" + i] = function (e) {
            return void 0 === e
              ? r["inner" + i].call(this)
              : this.each(function () {
                  t(this).css(o, n(this, e) + "px");
                });
          }),
            (t.fn["outer" + i] = function (e, s) {
              return "number" != typeof e
                ? r["outer" + i].call(this, e)
                : this.each(function () {
                    t(this).css(o, n(this, e, !0, s) + "px");
                  });
            });
        }),
      t.fn.addBack ||
        (t.fn.addBack = function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        }),
      t("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
        (t.fn.removeData = (function (e) {
          return function (i) {
            return arguments.length
              ? e.call(this, t.camelCase(i))
              : e.call(this);
          };
        })(t.fn.removeData)),
      (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
      t.fn.extend({
        focus: (function (e) {
          return function (i, n) {
            return "number" == typeof i
              ? this.each(function () {
                  var e = this;
                  setTimeout(function () {
                    t(e).focus(), n && n.call(e);
                  }, i);
                })
              : e.apply(this, arguments);
          };
        })(t.fn.focus),
        disableSelection: (function () {
          var t =
            "onselectstart" in document.createElement("div")
              ? "selectstart"
              : "mousedown";
          return function () {
            return this.bind(t + ".ui-disableSelection", function (t) {
              t.preventDefault();
            });
          };
        })(),
        enableSelection: function () {
          return this.unbind(".ui-disableSelection");
        },
        zIndex: function (e) {
          if (void 0 !== e) return this.css("zIndex", e);
          if (this.length)
            for (var i, n, s = t(this[0]); s.length && s[0] !== document; ) {
              if (
                ((i = s.css("position")),
                ("absolute" === i || "relative" === i || "fixed" === i) &&
                  ((n = parseInt(s.css("zIndex"), 10)), !isNaN(n) && 0 !== n))
              )
                return n;
              s = s.parent();
            }
          return 0;
        },
      }),
      (t.ui.plugin = {
        add: function (e, i, n) {
          var s,
            o = t.ui[e].prototype;
          for (s in n)
            (o.plugins[s] = o.plugins[s] || []), o.plugins[s].push([i, n[s]]);
        },
        call: function (t, e, i, n) {
          var s,
            o = t.plugins[e];
          if (
            o &&
            (n ||
              (t.element[0].parentNode &&
                11 !== t.element[0].parentNode.nodeType))
          )
            for (s = 0; s < o.length; s++)
              t.options[o[s][0]] && o[s][1].apply(t.element, i);
        },
      });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(jQuery);
  })(function (t) {
    var e = 0,
      i = Array.prototype.slice;
    return (
      (t.cleanData = (function (e) {
        return function (i) {
          var n, s, o;
          for (o = 0; null != (s = i[o]); o++)
            try {
              (n = t._data(s, "events")),
                n && n.remove && t(s).triggerHandler("remove");
            } catch (r) {}
          e(i);
        };
      })(t.cleanData)),
      (t.widget = function (e, i, n) {
        var s,
          o,
          r,
          a,
          l = {},
          c = e.split(".")[0];
        return (
          (e = e.split(".")[1]),
          (s = c + "-" + e),
          n || ((n = i), (i = t.Widget)),
          (t.expr[":"][s.toLowerCase()] = function (e) {
            return !!t.data(e, s);
          }),
          (t[c] = t[c] || {}),
          (o = t[c][e]),
          (r = t[c][e] = function (t, e) {
            return this._createWidget
              ? void (arguments.length && this._createWidget(t, e))
              : new r(t, e);
          }),
          t.extend(r, o, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: [],
          }),
          (a = new i()),
          (a.options = t.widget.extend({}, a.options)),
          t.each(n, function (e, n) {
            return t.isFunction(n)
              ? void (l[e] = (function () {
                  var t = function () {
                      return i.prototype[e].apply(this, arguments);
                    },
                    s = function (t) {
                      return i.prototype[e].apply(this, t);
                    };
                  return function () {
                    var e,
                      i = this._super,
                      o = this._superApply;
                    return (
                      (this._super = t),
                      (this._superApply = s),
                      (e = n.apply(this, arguments)),
                      (this._super = i),
                      (this._superApply = o),
                      e
                    );
                  };
                })())
              : void (l[e] = n);
          }),
          (r.prototype = t.widget.extend(
            a,
            { widgetEventPrefix: o ? a.widgetEventPrefix || e : e },
            l,
            { constructor: r, namespace: c, widgetName: e, widgetFullName: s }
          )),
          o
            ? (t.each(o._childConstructors, function (e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, r, i._proto);
              }),
              delete o._childConstructors)
            : i._childConstructors.push(r),
          t.widget.bridge(e, r),
          r
        );
      }),
      (t.widget.extend = function (e) {
        for (
          var n, s, o = i.call(arguments, 1), r = 0, a = o.length;
          a > r;
          r++
        )
          for (n in o[r])
            (s = o[r][n]),
              o[r].hasOwnProperty(n) &&
                void 0 !== s &&
                (t.isPlainObject(s)
                  ? (e[n] = t.isPlainObject(e[n])
                      ? t.widget.extend({}, e[n], s)
                      : t.widget.extend({}, s))
                  : (e[n] = s));
        return e;
      }),
      (t.widget.bridge = function (e, n) {
        var s = n.prototype.widgetFullName || e;
        t.fn[e] = function (o) {
          var r = "string" == typeof o,
            a = i.call(arguments, 1),
            l = this;
          return (
            r
              ? this.each(function () {
                  var i,
                    n = t.data(this, s);
                  return "instance" === o
                    ? ((l = n), !1)
                    : n
                    ? t.isFunction(n[o]) && "_" !== o.charAt(0)
                      ? ((i = n[o].apply(n, a)),
                        i !== n && void 0 !== i
                          ? ((l = i && i.jquery ? l.pushStack(i.get()) : i), !1)
                          : void 0)
                      : t.error(
                          "no such method '" +
                            o +
                            "' for " +
                            e +
                            " widget instance"
                        )
                    : t.error(
                        "cannot call methods on " +
                          e +
                          " prior to initialization; attempted to call method '" +
                          o +
                          "'"
                      );
                })
              : (a.length && (o = t.widget.extend.apply(null, [o].concat(a))),
                this.each(function () {
                  var e = t.data(this, s);
                  e
                    ? (e.option(o || {}), e._init && e._init())
                    : t.data(this, s, new n(o, this));
                })),
            l
          );
        };
      }),
      (t.Widget = function () {}),
      (t.Widget._childConstructors = []),
      (t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { disabled: !1, create: null },
        _createWidget: function (i, n) {
          (n = t(n || this.defaultElement || this)[0]),
            (this.element = t(n)),
            (this.uuid = e++),
            (this.eventNamespace = "." + this.widgetName + this.uuid),
            (this.bindings = t()),
            (this.hoverable = t()),
            (this.focusable = t()),
            n !== this &&
              (t.data(n, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (t) {
                  t.target === n && this.destroy();
                },
              }),
              (this.document = t(n.style ? n.ownerDocument : n.document || n)),
              (this.window = t(
                this.document[0].defaultView || this.document[0].parentWindow
              ))),
            (this.options = t.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              i
            )),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init();
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
          this._destroy(),
            this.element
              .unbind(this.eventNamespace)
              .removeData(this.widgetFullName)
              .removeData(t.camelCase(this.widgetFullName)),
            this.widget()
              .unbind(this.eventNamespace)
              .removeAttr("aria-disabled")
              .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: t.noop,
        widget: function () {
          return this.element;
        },
        option: function (e, i) {
          var n,
            s,
            o,
            r = e;
          if (0 === arguments.length) return t.widget.extend({}, this.options);
          if ("string" == typeof e)
            if (((r = {}), (n = e.split(".")), (e = n.shift()), n.length)) {
              for (
                s = r[e] = t.widget.extend({}, this.options[e]), o = 0;
                o < n.length - 1;
                o++
              )
                (s[n[o]] = s[n[o]] || {}), (s = s[n[o]]);
              if (((e = n.pop()), 1 === arguments.length))
                return void 0 === s[e] ? null : s[e];
              s[e] = i;
            } else {
              if (1 === arguments.length)
                return void 0 === this.options[e] ? null : this.options[e];
              r[e] = i;
            }
          return this._setOptions(r), this;
        },
        _setOptions: function (t) {
          var e;
          for (e in t) this._setOption(e, t[e]);
          return this;
        },
        _setOption: function (t, e) {
          return (
            (this.options[t] = e),
            "disabled" === t &&
              (this.widget().toggleClass(
                this.widgetFullName + "-disabled",
                !!e
              ),
              e &&
                (this.hoverable.removeClass("ui-state-hover"),
                this.focusable.removeClass("ui-state-focus"))),
            this
          );
        },
        enable: function () {
          return this._setOptions({ disabled: !1 });
        },
        disable: function () {
          return this._setOptions({ disabled: !0 });
        },
        _on: function (e, i, n) {
          var s,
            o = this;
          "boolean" != typeof e && ((n = i), (i = e), (e = !1)),
            n
              ? ((i = s = t(i)), (this.bindings = this.bindings.add(i)))
              : ((n = i), (i = this.element), (s = this.widget())),
            t.each(n, function (n, r) {
              function a() {
                return e ||
                  (o.options.disabled !== !0 &&
                    !t(this).hasClass("ui-state-disabled"))
                  ? ("string" == typeof r ? o[r] : r).apply(o, arguments)
                  : void 0;
              }
              "string" != typeof r &&
                (a.guid = r.guid = r.guid || a.guid || t.guid++);
              var l = n.match(/^([\w:-]*)\s*(.*)$/),
                c = l[1] + o.eventNamespace,
                u = l[2];
              u ? s.delegate(u, c, a) : i.bind(c, a);
            });
        },
        _off: function (e, i) {
          (i =
            (i || "").split(" ").join(this.eventNamespace + " ") +
            this.eventNamespace),
            e.unbind(i).undelegate(i),
            (this.bindings = t(this.bindings.not(e).get())),
            (this.focusable = t(this.focusable.not(e).get())),
            (this.hoverable = t(this.hoverable.not(e).get()));
        },
        _delay: function (t, e) {
          function i() {
            return ("string" == typeof t ? n[t] : t).apply(n, arguments);
          }
          var n = this;
          return setTimeout(i, e || 0);
        },
        _hoverable: function (e) {
          (this.hoverable = this.hoverable.add(e)),
            this._on(e, {
              mouseenter: function (e) {
                t(e.currentTarget).addClass("ui-state-hover");
              },
              mouseleave: function (e) {
                t(e.currentTarget).removeClass("ui-state-hover");
              },
            });
        },
        _focusable: function (e) {
          (this.focusable = this.focusable.add(e)),
            this._on(e, {
              focusin: function (e) {
                t(e.currentTarget).addClass("ui-state-focus");
              },
              focusout: function (e) {
                t(e.currentTarget).removeClass("ui-state-focus");
              },
            });
        },
        _trigger: function (e, i, n) {
          var s,
            o,
            r = this.options[e];
          if (
            ((n = n || {}),
            (i = t.Event(i)),
            (i.type = (e === this.widgetEventPrefix
              ? e
              : this.widgetEventPrefix + e
            ).toLowerCase()),
            (i.target = this.element[0]),
            (o = i.originalEvent))
          )
            for (s in o) s in i || (i[s] = o[s]);
          return (
            this.element.trigger(i, n),
            !(
              (t.isFunction(r) &&
                r.apply(this.element[0], [i].concat(n)) === !1) ||
              i.isDefaultPrevented()
            )
          );
        },
      }),
      t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
        t.Widget.prototype["_" + e] = function (n, s, o) {
          "string" == typeof s && (s = { effect: s });
          var r,
            a = s ? (s === !0 || "number" == typeof s ? i : s.effect || i) : e;
          (s = s || {}),
            "number" == typeof s && (s = { duration: s }),
            (r = !t.isEmptyObject(s)),
            (s.complete = o),
            s.delay && n.delay(s.delay),
            r && t.effects && t.effects.effect[a]
              ? n[e](s)
              : a !== e && n[a]
              ? n[a](s.duration, s.easing, o)
              : n.queue(function (i) {
                  t(this)[e](), o && o.call(n[0]), i();
                });
        };
      }),
      t.widget
    );
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./core", "./widget"], t)
      : t(jQuery);
  })(function (t) {
    return t.widget("ui.accordion", {
      version: "1.11.4",
      options: {
        active: 0,
        animate: {},
        collapsible: !1,
        event: "click",
        header: "> li > :first-child,> :not(li):even",
        heightStyle: "auto",
        icons: {
          activeHeader: "ui-icon-triangle-1-s",
          header: "ui-icon-triangle-1-e",
        },
        activate: null,
        beforeActivate: null,
      },
      hideProps: {
        borderTopWidth: "hide",
        borderBottomWidth: "hide",
        paddingTop: "hide",
        paddingBottom: "hide",
        height: "hide",
      },
      showProps: {
        borderTopWidth: "show",
        borderBottomWidth: "show",
        paddingTop: "show",
        paddingBottom: "show",
        height: "show",
      },
      _create: function () {
        var e = this.options;
        (this.prevShow = this.prevHide = t()),
          this.element
            .addClass("ui-accordion ui-widget ui-helper-reset")
            .attr("role", "tablist"),
          e.collapsible ||
            (e.active !== !1 && null != e.active) ||
            (e.active = 0),
          this._processPanels(),
          e.active < 0 && (e.active += this.headers.length),
          this._refresh();
      },
      _getCreateEventData: function () {
        return {
          header: this.active,
          panel: this.active.length ? this.active.next() : t(),
        };
      },
      _createIcons: function () {
        var e = this.options.icons;
        e &&
          (t("<span>")
            .addClass("ui-accordion-header-icon ui-icon " + e.header)
            .prependTo(this.headers),
          this.active
            .children(".ui-accordion-header-icon")
            .removeClass(e.header)
            .addClass(e.activeHeader),
          this.headers.addClass("ui-accordion-icons"));
      },
      _destroyIcons: function () {
        this.headers
          .removeClass("ui-accordion-icons")
          .children(".ui-accordion-header-icon")
          .remove();
      },
      _destroy: function () {
        var t;
        this.element
          .removeClass("ui-accordion ui-widget ui-helper-reset")
          .removeAttr("role"),
          this.headers
            .removeClass(
              "ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top"
            )
            .removeAttr("role")
            .removeAttr("aria-expanded")
            .removeAttr("aria-selected")
            .removeAttr("aria-controls")
            .removeAttr("tabIndex")
            .removeUniqueId(),
          this._destroyIcons(),
          (t = this.headers
            .next()
            .removeClass(
              "ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled"
            )
            .css("display", "")
            .removeAttr("role")
            .removeAttr("aria-hidden")
            .removeAttr("aria-labelledby")
            .removeUniqueId()),
          "content" !== this.options.heightStyle && t.css("height", "");
      },
      _setOption: function (t, e) {
        return "active" === t
          ? void this._activate(e)
          : ("event" === t &&
              (this.options.event &&
                this._off(this.headers, this.options.event),
              this._setupEvents(e)),
            this._super(t, e),
            "collapsible" !== t ||
              e ||
              this.options.active !== !1 ||
              this._activate(0),
            "icons" === t && (this._destroyIcons(), e && this._createIcons()),
            void (
              "disabled" === t &&
              (this.element
                .toggleClass("ui-state-disabled", !!e)
                .attr("aria-disabled", e),
              this.headers
                .add(this.headers.next())
                .toggleClass("ui-state-disabled", !!e))
            ));
      },
      _keydown: function (e) {
        if (!e.altKey && !e.ctrlKey) {
          var i = t.ui.keyCode,
            n = this.headers.length,
            s = this.headers.index(e.target),
            o = !1;
          switch (e.keyCode) {
            case i.RIGHT:
            case i.DOWN:
              o = this.headers[(s + 1) % n];
              break;
            case i.LEFT:
            case i.UP:
              o = this.headers[(s - 1 + n) % n];
              break;
            case i.SPACE:
            case i.ENTER:
              this._eventHandler(e);
              break;
            case i.HOME:
              o = this.headers[0];
              break;
            case i.END:
              o = this.headers[n - 1];
          }
          o &&
            (t(e.target).attr("tabIndex", -1),
            t(o).attr("tabIndex", 0),
            o.focus(),
            e.preventDefault());
        }
      },
      _panelKeyDown: function (e) {
        e.keyCode === t.ui.keyCode.UP &&
          e.ctrlKey &&
          t(e.currentTarget).prev().focus();
      },
      refresh: function () {
        var e = this.options;
        this._processPanels(),
          (e.active === !1 && e.collapsible === !0) || !this.headers.length
            ? ((e.active = !1), (this.active = t()))
            : e.active === !1
            ? this._activate(0)
            : this.active.length && !t.contains(this.element[0], this.active[0])
            ? this.headers.length ===
              this.headers.find(".ui-state-disabled").length
              ? ((e.active = !1), (this.active = t()))
              : this._activate(Math.max(0, e.active - 1))
            : (e.active = this.headers.index(this.active)),
          this._destroyIcons(),
          this._refresh();
      },
      _processPanels: function () {
        var t = this.headers,
          e = this.panels;
        (this.headers = this.element
          .find(this.options.header)
          .addClass("ui-accordion-header ui-state-default ui-corner-all")),
          (this.panels = this.headers
            .next()
            .addClass(
              "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
            )
            .filter(":not(.ui-accordion-content-active)")
            .hide()),
          e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
      },
      _refresh: function () {
        var e,
          i = this.options,
          n = i.heightStyle,
          s = this.element.parent();
        (this.active = this._findActive(i.active)
          .addClass("ui-accordion-header-active ui-state-active ui-corner-top")
          .removeClass("ui-corner-all")),
          this.active.next().addClass("ui-accordion-content-active").show(),
          this.headers
            .attr("role", "tab")
            .each(function () {
              var e = t(this),
                i = e.uniqueId().attr("id"),
                n = e.next(),
                s = n.uniqueId().attr("id");
              e.attr("aria-controls", s), n.attr("aria-labelledby", i);
            })
            .next()
            .attr("role", "tabpanel"),
          this.headers
            .not(this.active)
            .attr({
              "aria-selected": "false",
              "aria-expanded": "false",
              tabIndex: -1,
            })
            .next()
            .attr({ "aria-hidden": "true" })
            .hide(),
          this.active.length
            ? this.active
                .attr({
                  "aria-selected": "true",
                  "aria-expanded": "true",
                  tabIndex: 0,
                })
                .next()
                .attr({ "aria-hidden": "false" })
            : this.headers.eq(0).attr("tabIndex", 0),
          this._createIcons(),
          this._setupEvents(i.event),
          "fill" === n
            ? ((e = s.height()),
              this.element.siblings(":visible").each(function () {
                var i = t(this),
                  n = i.css("position");
                "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0));
              }),
              this.headers.each(function () {
                e -= t(this).outerHeight(!0);
              }),
              this.headers
                .next()
                .each(function () {
                  t(this).height(
                    Math.max(0, e - t(this).innerHeight() + t(this).height())
                  );
                })
                .css("overflow", "auto"))
            : "auto" === n &&
              ((e = 0),
              this.headers
                .next()
                .each(function () {
                  e = Math.max(e, t(this).css("height", "").height());
                })
                .height(e));
      },
      _activate: function (e) {
        var i = this._findActive(e)[0];
        i !== this.active[0] &&
          ((i = i || this.active[0]),
          this._eventHandler({
            target: i,
            currentTarget: i,
            preventDefault: t.noop,
          }));
      },
      _findActive: function (e) {
        return "number" == typeof e ? this.headers.eq(e) : t();
      },
      _setupEvents: function (e) {
        var i = { keydown: "_keydown" };
        e &&
          t.each(e.split(" "), function (t, e) {
            i[e] = "_eventHandler";
          }),
          this._off(this.headers.add(this.headers.next())),
          this._on(this.headers, i),
          this._on(this.headers.next(), { keydown: "_panelKeyDown" }),
          this._hoverable(this.headers),
          this._focusable(this.headers);
      },
      _eventHandler: function (e) {
        var i = this.options,
          n = this.active,
          s = t(e.currentTarget),
          o = s[0] === n[0],
          r = o && i.collapsible,
          a = r ? t() : s.next(),
          l = n.next(),
          c = {
            oldHeader: n,
            oldPanel: l,
            newHeader: r ? t() : s,
            newPanel: a,
          };
        e.preventDefault(),
          (o && !i.collapsible) ||
            this._trigger("beforeActivate", e, c) === !1 ||
            ((i.active = r ? !1 : this.headers.index(s)),
            (this.active = o ? t() : s),
            this._toggle(c),
            n.removeClass("ui-accordion-header-active ui-state-active"),
            i.icons &&
              n
                .children(".ui-accordion-header-icon")
                .removeClass(i.icons.activeHeader)
                .addClass(i.icons.header),
            o ||
              (s
                .removeClass("ui-corner-all")
                .addClass(
                  "ui-accordion-header-active ui-state-active ui-corner-top"
                ),
              i.icons &&
                s
                  .children(".ui-accordion-header-icon")
                  .removeClass(i.icons.header)
                  .addClass(i.icons.activeHeader),
              s.next().addClass("ui-accordion-content-active")));
      },
      _toggle: function (e) {
        var i = e.newPanel,
          n = this.prevShow.length ? this.prevShow : e.oldPanel;
        this.prevShow.add(this.prevHide).stop(!0, !0),
          (this.prevShow = i),
          (this.prevHide = n),
          this.options.animate
            ? this._animate(i, n, e)
            : (n.hide(), i.show(), this._toggleComplete(e)),
          n.attr({ "aria-hidden": "true" }),
          n.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }),
          i.length && n.length
            ? n.prev().attr({ tabIndex: -1, "aria-expanded": "false" })
            : i.length &&
              this.headers
                .filter(function () {
                  return 0 === parseInt(t(this).attr("tabIndex"), 10);
                })
                .attr("tabIndex", -1),
          i
            .attr("aria-hidden", "false")
            .prev()
            .attr({
              "aria-selected": "true",
              "aria-expanded": "true",
              tabIndex: 0,
            });
      },
      _animate: function (t, e, i) {
        var n,
          s,
          o,
          r = this,
          a = 0,
          l = t.css("box-sizing"),
          c = t.length && (!e.length || t.index() < e.index()),
          u = this.options.animate || {},
          h = (c && u.down) || u,
          d = function () {
            r._toggleComplete(i);
          };
        return (
          "number" == typeof h && (o = h),
          "string" == typeof h && (s = h),
          (s = s || h.easing || u.easing),
          (o = o || h.duration || u.duration),
          e.length
            ? t.length
              ? ((n = t.show().outerHeight()),
                e.animate(this.hideProps, {
                  duration: o,
                  easing: s,
                  step: function (t, e) {
                    e.now = Math.round(t);
                  },
                }),
                void t.hide().animate(this.showProps, {
                  duration: o,
                  easing: s,
                  complete: d,
                  step: function (t, i) {
                    (i.now = Math.round(t)),
                      "height" !== i.prop
                        ? "content-box" === l && (a += i.now)
                        : "content" !== r.options.heightStyle &&
                          ((i.now = Math.round(n - e.outerHeight() - a)),
                          (a = 0));
                  },
                }))
              : e.animate(this.hideProps, o, s, d)
            : t.animate(this.showProps, o, s, d)
        );
      },
      _toggleComplete: function (t) {
        var e = t.oldPanel;
        e
          .removeClass("ui-accordion-content-active")
          .prev()
          .removeClass("ui-corner-top")
          .addClass("ui-corner-all"),
          e.length && (e.parent()[0].className = e.parent()[0].className),
          this._trigger("activate", null, t);
      },
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(jQuery);
  })(function (t) {
    return (
      (function () {
        function e(t, e, i) {
          return [
            parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1),
            parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1),
          ];
        }
        function i(e, i) {
          return parseInt(t.css(e, i), 10) || 0;
        }
        function n(e) {
          var i = e[0];
          return 9 === i.nodeType
            ? {
                width: e.width(),
                height: e.height(),
                offset: { top: 0, left: 0 },
              }
            : t.isWindow(i)
            ? {
                width: e.width(),
                height: e.height(),
                offset: { top: e.scrollTop(), left: e.scrollLeft() },
              }
            : i.preventDefault
            ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } }
            : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset(),
              };
        }
        t.ui = t.ui || {};
        var s,
          o,
          r = Math.max,
          a = Math.abs,
          l = Math.round,
          c = /left|center|right/,
          u = /top|center|bottom/,
          h = /[\+\-]\d+(\.[\d]+)?%?/,
          d = /^\w+/,
          p = /%$/,
          f = t.fn.position;
        (t.position = {
          scrollbarWidth: function () {
            if (void 0 !== s) return s;
            var e,
              i,
              n = t(
                "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
              ),
              o = n.children()[0];
            return (
              t("body").append(n),
              (e = o.offsetWidth),
              n.css("overflow", "scroll"),
              (i = o.offsetWidth),
              e === i && (i = n[0].clientWidth),
              n.remove(),
              (s = e - i)
            );
          },
          getScrollInfo: function (e) {
            var i =
                e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
              n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
              s =
                "scroll" === i ||
                ("auto" === i && e.width < e.element[0].scrollWidth),
              o =
                "scroll" === n ||
                ("auto" === n && e.height < e.element[0].scrollHeight);
            return {
              width: o ? t.position.scrollbarWidth() : 0,
              height: s ? t.position.scrollbarWidth() : 0,
            };
          },
          getWithinInfo: function (e) {
            var i = t(e || window),
              n = t.isWindow(i[0]),
              s = !!i[0] && 9 === i[0].nodeType;
            return {
              element: i,
              isWindow: n,
              isDocument: s,
              offset: i.offset() || { left: 0, top: 0 },
              scrollLeft: i.scrollLeft(),
              scrollTop: i.scrollTop(),
              width: n || s ? i.width() : i.outerWidth(),
              height: n || s ? i.height() : i.outerHeight(),
            };
          },
        }),
          (t.fn.position = function (s) {
            if (!s || !s.of) return f.apply(this, arguments);
            s = t.extend({}, s);
            var p,
              m,
              g,
              v,
              b,
              y,
              _ = t(s.of),
              w = t.position.getWithinInfo(s.within),
              x = t.position.getScrollInfo(w),
              C = (s.collision || "flip").split(" "),
              k = {};
            return (
              (y = n(_)),
              _[0].preventDefault && (s.at = "left top"),
              (m = y.width),
              (g = y.height),
              (v = y.offset),
              (b = t.extend({}, v)),
              t.each(["my", "at"], function () {
                var t,
                  e,
                  i = (s[this] || "").split(" ");
                1 === i.length &&
                  (i = c.test(i[0])
                    ? i.concat(["center"])
                    : u.test(i[0])
                    ? ["center"].concat(i)
                    : ["center", "center"]),
                  (i[0] = c.test(i[0]) ? i[0] : "center"),
                  (i[1] = u.test(i[1]) ? i[1] : "center"),
                  (t = h.exec(i[0])),
                  (e = h.exec(i[1])),
                  (k[this] = [t ? t[0] : 0, e ? e[0] : 0]),
                  (s[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]);
              }),
              1 === C.length && (C[1] = C[0]),
              "right" === s.at[0]
                ? (b.left += m)
                : "center" === s.at[0] && (b.left += m / 2),
              "bottom" === s.at[1]
                ? (b.top += g)
                : "center" === s.at[1] && (b.top += g / 2),
              (p = e(k.at, m, g)),
              (b.left += p[0]),
              (b.top += p[1]),
              this.each(function () {
                var n,
                  c,
                  u = t(this),
                  h = u.outerWidth(),
                  d = u.outerHeight(),
                  f = i(this, "marginLeft"),
                  y = i(this, "marginTop"),
                  T = h + f + i(this, "marginRight") + x.width,
                  S = d + y + i(this, "marginBottom") + x.height,
                  D = t.extend({}, b),
                  I = e(k.my, u.outerWidth(), u.outerHeight());
                "right" === s.my[0]
                  ? (D.left -= h)
                  : "center" === s.my[0] && (D.left -= h / 2),
                  "bottom" === s.my[1]
                    ? (D.top -= d)
                    : "center" === s.my[1] && (D.top -= d / 2),
                  (D.left += I[0]),
                  (D.top += I[1]),
                  o || ((D.left = l(D.left)), (D.top = l(D.top))),
                  (n = { marginLeft: f, marginTop: y }),
                  t.each(["left", "top"], function (e, i) {
                    t.ui.position[C[e]] &&
                      t.ui.position[C[e]][i](D, {
                        targetWidth: m,
                        targetHeight: g,
                        elemWidth: h,
                        elemHeight: d,
                        collisionPosition: n,
                        collisionWidth: T,
                        collisionHeight: S,
                        offset: [p[0] + I[0], p[1] + I[1]],
                        my: s.my,
                        at: s.at,
                        within: w,
                        elem: u,
                      });
                  }),
                  s.using &&
                    (c = function (t) {
                      var e = v.left - D.left,
                        i = e + m - h,
                        n = v.top - D.top,
                        o = n + g - d,
                        l = {
                          target: {
                            element: _,
                            left: v.left,
                            top: v.top,
                            width: m,
                            height: g,
                          },
                          element: {
                            element: u,
                            left: D.left,
                            top: D.top,
                            width: h,
                            height: d,
                          },
                          horizontal:
                            0 > i ? "left" : e > 0 ? "right" : "center",
                          vertical: 0 > o ? "top" : n > 0 ? "bottom" : "middle",
                        };
                      h > m && a(e + i) < m && (l.horizontal = "center"),
                        d > g && a(n + o) < g && (l.vertical = "middle"),
                        r(a(e), a(i)) > r(a(n), a(o))
                          ? (l.important = "horizontal")
                          : (l.important = "vertical"),
                        s.using.call(this, t, l);
                    }),
                  u.offset(t.extend(D, { using: c }));
              })
            );
          }),
          (t.ui.position = {
            fit: {
              left: function (t, e) {
                var i,
                  n = e.within,
                  s = n.isWindow ? n.scrollLeft : n.offset.left,
                  o = n.width,
                  a = t.left - e.collisionPosition.marginLeft,
                  l = s - a,
                  c = a + e.collisionWidth - o - s;
                e.collisionWidth > o
                  ? l > 0 && 0 >= c
                    ? ((i = t.left + l + e.collisionWidth - o - s),
                      (t.left += l - i))
                    : c > 0 && 0 >= l
                    ? (t.left = s)
                    : l > c
                    ? (t.left = s + o - e.collisionWidth)
                    : (t.left = s)
                  : l > 0
                  ? (t.left += l)
                  : c > 0
                  ? (t.left -= c)
                  : (t.left = r(t.left - a, t.left));
              },
              top: function (t, e) {
                var i,
                  n = e.within,
                  s = n.isWindow ? n.scrollTop : n.offset.top,
                  o = e.within.height,
                  a = t.top - e.collisionPosition.marginTop,
                  l = s - a,
                  c = a + e.collisionHeight - o - s;
                e.collisionHeight > o
                  ? l > 0 && 0 >= c
                    ? ((i = t.top + l + e.collisionHeight - o - s),
                      (t.top += l - i))
                    : c > 0 && 0 >= l
                    ? (t.top = s)
                    : l > c
                    ? (t.top = s + o - e.collisionHeight)
                    : (t.top = s)
                  : l > 0
                  ? (t.top += l)
                  : c > 0
                  ? (t.top -= c)
                  : (t.top = r(t.top - a, t.top));
              },
            },
            flip: {
              left: function (t, e) {
                var i,
                  n,
                  s = e.within,
                  o = s.offset.left + s.scrollLeft,
                  r = s.width,
                  l = s.isWindow ? s.scrollLeft : s.offset.left,
                  c = t.left - e.collisionPosition.marginLeft,
                  u = c - l,
                  h = c + e.collisionWidth - r - l,
                  d =
                    "left" === e.my[0]
                      ? -e.elemWidth
                      : "right" === e.my[0]
                      ? e.elemWidth
                      : 0,
                  p =
                    "left" === e.at[0]
                      ? e.targetWidth
                      : "right" === e.at[0]
                      ? -e.targetWidth
                      : 0,
                  f = -2 * e.offset[0];
                0 > u
                  ? ((i = t.left + d + p + f + e.collisionWidth - r - o),
                    (0 > i || i < a(u)) && (t.left += d + p + f))
                  : h > 0 &&
                    ((n =
                      t.left - e.collisionPosition.marginLeft + d + p + f - l),
                    (n > 0 || a(n) < h) && (t.left += d + p + f));
              },
              top: function (t, e) {
                var i,
                  n,
                  s = e.within,
                  o = s.offset.top + s.scrollTop,
                  r = s.height,
                  l = s.isWindow ? s.scrollTop : s.offset.top,
                  c = t.top - e.collisionPosition.marginTop,
                  u = c - l,
                  h = c + e.collisionHeight - r - l,
                  d = "top" === e.my[1],
                  p = d
                    ? -e.elemHeight
                    : "bottom" === e.my[1]
                    ? e.elemHeight
                    : 0,
                  f =
                    "top" === e.at[1]
                      ? e.targetHeight
                      : "bottom" === e.at[1]
                      ? -e.targetHeight
                      : 0,
                  m = -2 * e.offset[1];
                0 > u
                  ? ((n = t.top + p + f + m + e.collisionHeight - r - o),
                    (0 > n || n < a(u)) && (t.top += p + f + m))
                  : h > 0 &&
                    ((i =
                      t.top - e.collisionPosition.marginTop + p + f + m - l),
                    (i > 0 || a(i) < h) && (t.top += p + f + m));
              },
            },
            flipfit: {
              left: function () {
                t.ui.position.flip.left.apply(this, arguments),
                  t.ui.position.fit.left.apply(this, arguments);
              },
              top: function () {
                t.ui.position.flip.top.apply(this, arguments),
                  t.ui.position.fit.top.apply(this, arguments);
              },
            },
          }),
          (function () {
            var e,
              i,
              n,
              s,
              r,
              a = document.getElementsByTagName("body")[0],
              l = document.createElement("div");
            (e = document.createElement(a ? "div" : "body")),
              (n = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none",
              }),
              a &&
                t.extend(n, {
                  position: "absolute",
                  left: "-1000px",
                  top: "-1000px",
                });
            for (r in n) e.style[r] = n[r];
            e.appendChild(l),
              (i = a || document.documentElement),
              i.insertBefore(e, i.firstChild),
              (l.style.cssText = "position: absolute; left: 10.7432222px;"),
              (s = t(l).offset().left),
              (o = s > 10 && 11 > s),
              (e.innerHTML = ""),
              i.removeChild(e);
          })();
      })(),
      t.ui.position
    );
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./core", "./widget", "./position"], t)
      : t(jQuery);
  })(function (t) {
    return t.widget("ui.menu", {
      version: "1.11.4",
      defaultElement: "<ul>",
      delay: 300,
      options: {
        icons: { submenu: "ui-icon-carat-1-e" },
        items: "> *",
        menus: "ul",
        position: { my: "left-1 top", at: "right top" },
        role: "menu",
        blur: null,
        focus: null,
        select: null,
      },
      _create: function () {
        (this.activeMenu = this.element),
          (this.mouseHandled = !1),
          this.element
            .uniqueId()
            .addClass("ui-menu ui-widget ui-widget-content")
            .toggleClass(
              "ui-menu-icons",
              !!this.element.find(".ui-icon").length
            )
            .attr({ role: this.options.role, tabIndex: 0 }),
          this.options.disabled &&
            this.element
              .addClass("ui-state-disabled")
              .attr("aria-disabled", "true"),
          this._on({
            "mousedown .ui-menu-item": function (t) {
              t.preventDefault();
            },
            "click .ui-menu-item": function (e) {
              var i = t(e.target);
              !this.mouseHandled &&
                i.not(".ui-state-disabled").length &&
                (this.select(e),
                e.isPropagationStopped() || (this.mouseHandled = !0),
                i.has(".ui-menu").length
                  ? this.expand(e)
                  : !this.element.is(":focus") &&
                    t(this.document[0].activeElement).closest(".ui-menu")
                      .length &&
                    (this.element.trigger("focus", [!0]),
                    this.active &&
                      1 === this.active.parents(".ui-menu").length &&
                      clearTimeout(this.timer)));
            },
            "mouseenter .ui-menu-item": function (e) {
              if (!this.previousFilter) {
                var i = t(e.currentTarget);
                i.siblings(".ui-state-active").removeClass("ui-state-active"),
                  this.focus(e, i);
              }
            },
            mouseleave: "collapseAll",
            "mouseleave .ui-menu": "collapseAll",
            focus: function (t, e) {
              var i =
                this.active || this.element.find(this.options.items).eq(0);
              e || this.focus(t, i);
            },
            blur: function (e) {
              this._delay(function () {
                t.contains(this.element[0], this.document[0].activeElement) ||
                  this.collapseAll(e);
              });
            },
            keydown: "_keydown",
          }),
          this.refresh(),
          this._on(this.document, {
            click: function (t) {
              this._closeOnDocumentClick(t) && this.collapseAll(t),
                (this.mouseHandled = !1);
            },
          });
      },
      _destroy: function () {
        this.element
          .removeAttr("aria-activedescendant")
          .find(".ui-menu")
          .addBack()
          .removeClass(
            "ui-menu ui-widget ui-widget-content ui-menu-icons ui-front"
          )
          .removeAttr("role")
          .removeAttr("tabIndex")
          .removeAttr("aria-labelledby")
          .removeAttr("aria-expanded")
          .removeAttr("aria-hidden")
          .removeAttr("aria-disabled")
          .removeUniqueId()
          .show(),
          this.element
            .find(".ui-menu-item")
            .removeClass("ui-menu-item")
            .removeAttr("role")
            .removeAttr("aria-disabled")
            .removeUniqueId()
            .removeClass("ui-state-hover")
            .removeAttr("tabIndex")
            .removeAttr("role")
            .removeAttr("aria-haspopup")
            .children()
            .each(function () {
              var e = t(this);
              e.data("ui-menu-submenu-carat") && e.remove();
            }),
          this.element
            .find(".ui-menu-divider")
            .removeClass("ui-menu-divider ui-widget-content");
      },
      _keydown: function (e) {
        var i,
          n,
          s,
          o,
          r = !0;
        switch (e.keyCode) {
          case t.ui.keyCode.PAGE_UP:
            this.previousPage(e);
            break;
          case t.ui.keyCode.PAGE_DOWN:
            this.nextPage(e);
            break;
          case t.ui.keyCode.HOME:
            this._move("first", "first", e);
            break;
          case t.ui.keyCode.END:
            this._move("last", "last", e);
            break;
          case t.ui.keyCode.UP:
            this.previous(e);
            break;
          case t.ui.keyCode.DOWN:
            this.next(e);
            break;
          case t.ui.keyCode.LEFT:
            this.collapse(e);
            break;
          case t.ui.keyCode.RIGHT:
            this.active &&
              !this.active.is(".ui-state-disabled") &&
              this.expand(e);
            break;
          case t.ui.keyCode.ENTER:
          case t.ui.keyCode.SPACE:
            this._activate(e);
            break;
          case t.ui.keyCode.ESCAPE:
            this.collapse(e);
            break;
          default:
            (r = !1),
              (n = this.previousFilter || ""),
              (s = String.fromCharCode(e.keyCode)),
              (o = !1),
              clearTimeout(this.filterTimer),
              s === n ? (o = !0) : (s = n + s),
              (i = this._filterMenuItems(s)),
              (i =
                o && -1 !== i.index(this.active.next())
                  ? this.active.nextAll(".ui-menu-item")
                  : i),
              i.length ||
                ((s = String.fromCharCode(e.keyCode)),
                (i = this._filterMenuItems(s))),
              i.length
                ? (this.focus(e, i),
                  (this.previousFilter = s),
                  (this.filterTimer = this._delay(function () {
                    delete this.previousFilter;
                  }, 1e3)))
                : delete this.previousFilter;
        }
        r && e.preventDefault();
      },
      _activate: function (t) {
        this.active.is(".ui-state-disabled") ||
          (this.active.is("[aria-haspopup='true']")
            ? this.expand(t)
            : this.select(t));
      },
      refresh: function () {
        var e,
          i,
          n = this,
          s = this.options.icons.submenu,
          o = this.element.find(this.options.menus);
        this.element.toggleClass(
          "ui-menu-icons",
          !!this.element.find(".ui-icon").length
        ),
          o
            .filter(":not(.ui-menu)")
            .addClass("ui-menu ui-widget ui-widget-content ui-front")
            .hide()
            .attr({
              role: this.options.role,
              "aria-hidden": "true",
              "aria-expanded": "false",
            })
            .each(function () {
              var e = t(this),
                i = e.parent(),
                n = t("<span>")
                  .addClass("ui-menu-icon ui-icon " + s)
                  .data("ui-menu-submenu-carat", !0);
              i.attr("aria-haspopup", "true").prepend(n),
                e.attr("aria-labelledby", i.attr("id"));
            }),
          (e = o.add(this.element)),
          (i = e.find(this.options.items)),
          i.not(".ui-menu-item").each(function () {
            var e = t(this);
            n._isDivider(e) && e.addClass("ui-widget-content ui-menu-divider");
          }),
          i
            .not(".ui-menu-item, .ui-menu-divider")
            .addClass("ui-menu-item")
            .uniqueId()
            .attr({ tabIndex: -1, role: this._itemRole() }),
          i.filter(".ui-state-disabled").attr("aria-disabled", "true"),
          this.active &&
            !t.contains(this.element[0], this.active[0]) &&
            this.blur();
      },
      _itemRole: function () {
        return { menu: "menuitem", listbox: "option" }[this.options.role];
      },
      _setOption: function (t, e) {
        "icons" === t &&
          this.element
            .find(".ui-menu-icon")
            .removeClass(this.options.icons.submenu)
            .addClass(e.submenu),
          "disabled" === t &&
            this.element
              .toggleClass("ui-state-disabled", !!e)
              .attr("aria-disabled", e),
          this._super(t, e);
      },
      focus: function (t, e) {
        var i, n;
        this.blur(t, t && "focus" === t.type),
          this._scrollIntoView(e),
          (this.active = e.first()),
          (n = this.active
            .addClass("ui-state-focus")
            .removeClass("ui-state-active")),
          this.options.role &&
            this.element.attr("aria-activedescendant", n.attr("id")),
          this.active
            .parent()
            .closest(".ui-menu-item")
            .addClass("ui-state-active"),
          t && "keydown" === t.type
            ? this._close()
            : (this.timer = this._delay(function () {
                this._close();
              }, this.delay)),
          (i = e.children(".ui-menu")),
          i.length && t && /^mouse/.test(t.type) && this._startOpening(i),
          (this.activeMenu = e.parent()),
          this._trigger("focus", t, { item: e });
      },
      _scrollIntoView: function (e) {
        var i, n, s, o, r, a;
        this._hasScroll() &&
          ((i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0),
          (n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0),
          (s = e.offset().top - this.activeMenu.offset().top - i - n),
          (o = this.activeMenu.scrollTop()),
          (r = this.activeMenu.height()),
          (a = e.outerHeight()),
          0 > s
            ? this.activeMenu.scrollTop(o + s)
            : s + a > r && this.activeMenu.scrollTop(o + s - r + a));
      },
      blur: function (t, e) {
        e || clearTimeout(this.timer),
          this.active &&
            (this.active.removeClass("ui-state-focus"),
            (this.active = null),
            this._trigger("blur", t, { item: this.active }));
      },
      _startOpening: function (t) {
        clearTimeout(this.timer),
          "true" === t.attr("aria-hidden") &&
            (this.timer = this._delay(function () {
              this._close(), this._open(t);
            }, this.delay));
      },
      _open: function (e) {
        var i = t.extend({ of: this.active }, this.options.position);
        clearTimeout(this.timer),
          this.element
            .find(".ui-menu")
            .not(e.parents(".ui-menu"))
            .hide()
            .attr("aria-hidden", "true"),
          e
            .show()
            .removeAttr("aria-hidden")
            .attr("aria-expanded", "true")
            .position(i);
      },
      collapseAll: function (e, i) {
        clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            var n = i
              ? this.element
              : t(e && e.target).closest(this.element.find(".ui-menu"));
            n.length || (n = this.element),
              this._close(n),
              this.blur(e),
              (this.activeMenu = n);
          }, this.delay));
      },
      _close: function (t) {
        t || (t = this.active ? this.active.parent() : this.element),
          t
            .find(".ui-menu")
            .hide()
            .attr("aria-hidden", "true")
            .attr("aria-expanded", "false")
            .end()
            .find(".ui-state-active")
            .not(".ui-state-focus")
            .removeClass("ui-state-active");
      },
      _closeOnDocumentClick: function (e) {
        return !t(e.target).closest(".ui-menu").length;
      },
      _isDivider: function (t) {
        return !/[^\-\u2014\u2013\s]/.test(t.text());
      },
      collapse: function (t) {
        var e =
          this.active &&
          this.active.parent().closest(".ui-menu-item", this.element);
        e && e.length && (this._close(), this.focus(t, e));
      },
      expand: function (t) {
        var e =
          this.active &&
          this.active.children(".ui-menu ").find(this.options.items).first();
        e &&
          e.length &&
          (this._open(e.parent()),
          this._delay(function () {
            this.focus(t, e);
          }));
      },
      next: function (t) {
        this._move("next", "first", t);
      },
      previous: function (t) {
        this._move("prev", "last", t);
      },
      isFirstItem: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length;
      },
      isLastItem: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length;
      },
      _move: function (t, e, i) {
        var n;
        this.active &&
          (n =
            "first" === t || "last" === t
              ? this.active["first" === t ? "prevAll" : "nextAll"](
                  ".ui-menu-item"
                ).eq(-1)
              : this.active[t + "All"](".ui-menu-item").eq(0)),
          (n && n.length && this.active) ||
            (n = this.activeMenu.find(this.options.items)[e]()),
          this.focus(i, n);
      },
      nextPage: function (e) {
        var i, n, s;
        return this.active
          ? void (
              this.isLastItem() ||
              (this._hasScroll()
                ? ((n = this.active.offset().top),
                  (s = this.element.height()),
                  this.active.nextAll(".ui-menu-item").each(function () {
                    return (i = t(this)), i.offset().top - n - s < 0;
                  }),
                  this.focus(e, i))
                : this.focus(
                    e,
                    this.activeMenu
                      .find(this.options.items)
                      [this.active ? "last" : "first"]()
                  ))
            )
          : void this.next(e);
      },
      previousPage: function (e) {
        var i, n, s;
        return this.active
          ? void (
              this.isFirstItem() ||
              (this._hasScroll()
                ? ((n = this.active.offset().top),
                  (s = this.element.height()),
                  this.active.prevAll(".ui-menu-item").each(function () {
                    return (i = t(this)), i.offset().top - n + s > 0;
                  }),
                  this.focus(e, i))
                : this.focus(
                    e,
                    this.activeMenu.find(this.options.items).first()
                  ))
            )
          : void this.next(e);
      },
      _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop("scrollHeight");
      },
      select: function (e) {
        this.active = this.active || t(e.target).closest(".ui-menu-item");
        var i = { item: this.active };
        this.active.has(".ui-menu").length || this.collapseAll(e, !0),
          this._trigger("select", e, i);
      },
      _filterMenuItems: function (e) {
        var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
          n = new RegExp("^" + i, "i");
        return this.activeMenu
          .find(this.options.items)
          .filter(".ui-menu-item")
          .filter(function () {
            return n.test(t.trim(t(this).text()));
          });
      },
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./core", "./widget", "./position", "./menu"], t)
      : t(jQuery);
  })(function (t) {
    return (
      t.widget("ui.autocomplete", {
        version: "1.11.4",
        defaultElement: "<input>",
        options: {
          appendTo: null,
          autoFocus: !1,
          delay: 300,
          minLength: 1,
          position: { my: "left top", at: "left bottom", collision: "none" },
          source: null,
          change: null,
          close: null,
          focus: null,
          open: null,
          response: null,
          search: null,
          select: null,
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
          var e,
            i,
            n,
            s = this.element[0].nodeName.toLowerCase(),
            o = "textarea" === s,
            r = "input" === s;
          (this.isMultiLine = o
            ? !0
            : r
            ? !1
            : this.element.prop("isContentEditable")),
            (this.valueMethod = this.element[o || r ? "val" : "text"]),
            (this.isNewMenu = !0),
            this.element
              .addClass("ui-autocomplete-input")
              .attr("autocomplete", "off"),
            this._on(this.element, {
              keydown: function (s) {
                if (this.element.prop("readOnly"))
                  return (e = !0), (n = !0), void (i = !0);
                (e = !1), (n = !1), (i = !1);
                var o = t.ui.keyCode;
                switch (s.keyCode) {
                  case o.PAGE_UP:
                    (e = !0), this._move("previousPage", s);
                    break;
                  case o.PAGE_DOWN:
                    (e = !0), this._move("nextPage", s);
                    break;
                  case o.UP:
                    (e = !0), this._keyEvent("previous", s);
                    break;
                  case o.DOWN:
                    (e = !0), this._keyEvent("next", s);
                    break;
                  case o.ENTER:
                    this.menu.active &&
                      ((e = !0), s.preventDefault(), this.menu.select(s));
                    break;
                  case o.TAB:
                    this.menu.active && this.menu.select(s);
                    break;
                  case o.ESCAPE:
                    this.menu.element.is(":visible") &&
                      (this.isMultiLine || this._value(this.term),
                      this.close(s),
                      s.preventDefault());
                    break;
                  default:
                    (i = !0), this._searchTimeout(s);
                }
              },
              keypress: function (n) {
                if (e)
                  return (
                    (e = !1),
                    void (
                      (!this.isMultiLine || this.menu.element.is(":visible")) &&
                      n.preventDefault()
                    )
                  );
                if (!i) {
                  var s = t.ui.keyCode;
                  switch (n.keyCode) {
                    case s.PAGE_UP:
                      this._move("previousPage", n);
                      break;
                    case s.PAGE_DOWN:
                      this._move("nextPage", n);
                      break;
                    case s.UP:
                      this._keyEvent("previous", n);
                      break;
                    case s.DOWN:
                      this._keyEvent("next", n);
                  }
                }
              },
              input: function (t) {
                return n
                  ? ((n = !1), void t.preventDefault())
                  : void this._searchTimeout(t);
              },
              focus: function () {
                (this.selectedItem = null), (this.previous = this._value());
              },
              blur: function (t) {
                return this.cancelBlur
                  ? void delete this.cancelBlur
                  : (clearTimeout(this.searching),
                    this.close(t),
                    void this._change(t));
              },
            }),
            this._initSource(),
            (this.menu = t("<ul>")
              .addClass("ui-autocomplete ui-front")
              .appendTo(this._appendTo())
              .menu({ role: null })
              .hide()
              .menu("instance")),
            this._on(this.menu.element, {
              mousedown: function (e) {
                e.preventDefault(),
                  (this.cancelBlur = !0),
                  this._delay(function () {
                    delete this.cancelBlur;
                  });
                var i = this.menu.element[0];
                t(e.target).closest(".ui-menu-item").length ||
                  this._delay(function () {
                    var e = this;
                    this.document.one("mousedown", function (n) {
                      n.target === e.element[0] ||
                        n.target === i ||
                        t.contains(i, n.target) ||
                        e.close();
                    });
                  });
              },
              menufocus: function (e, i) {
                var n, s;
                return this.isNewMenu &&
                  ((this.isNewMenu = !1),
                  e.originalEvent && /^mouse/.test(e.originalEvent.type))
                  ? (this.menu.blur(),
                    void this.document.one("mousemove", function () {
                      t(e.target).trigger(e.originalEvent);
                    }))
                  : ((s = i.item.data("ui-autocomplete-item")),
                    !1 !== this._trigger("focus", e, { item: s }) &&
                      e.originalEvent &&
                      /^key/.test(e.originalEvent.type) &&
                      this._value(s.value),
                    (n = i.item.attr("aria-label") || s.value),
                    void (
                      n &&
                      t.trim(n).length &&
                      (this.liveRegion.children().hide(),
                      t("<div>").text(n).appendTo(this.liveRegion))
                    ));
              },
              menuselect: function (t, e) {
                var i = e.item.data("ui-autocomplete-item"),
                  n = this.previous;
                this.element[0] !== this.document[0].activeElement &&
                  (this.element.focus(),
                  (this.previous = n),
                  this._delay(function () {
                    (this.previous = n), (this.selectedItem = i);
                  })),
                  !1 !== this._trigger("select", t, { item: i }) &&
                    this._value(i.value),
                  (this.term = this._value()),
                  this.close(t),
                  (this.selectedItem = i);
              },
            }),
            (this.liveRegion = t("<span>", {
              role: "status",
              "aria-live": "assertive",
              "aria-relevant": "additions",
            })
              .addClass("ui-helper-hidden-accessible")
              .appendTo(this.document[0].body)),
            this._on(this.window, {
              beforeunload: function () {
                this.element.removeAttr("autocomplete");
              },
            });
        },
        _destroy: function () {
          clearTimeout(this.searching),
            this.element
              .removeClass("ui-autocomplete-input")
              .removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove();
        },
        _setOption: function (t, e) {
          this._super(t, e),
            "source" === t && this._initSource(),
            "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
            "disabled" === t && e && this.xhr && this.xhr.abort();
        },
        _appendTo: function () {
          var e = this.options.appendTo;
          return (
            e &&
              (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            (e && e[0]) || (e = this.element.closest(".ui-front")),
            e.length || (e = this.document[0].body),
            e
          );
        },
        _initSource: function () {
          var e,
            i,
            n = this;
          t.isArray(this.options.source)
            ? ((e = this.options.source),
              (this.source = function (i, n) {
                n(t.ui.autocomplete.filter(e, i.term));
              }))
            : "string" == typeof this.options.source
            ? ((i = this.options.source),
              (this.source = function (e, s) {
                n.xhr && n.xhr.abort(),
                  (n.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function (t) {
                      s(t);
                    },
                    error: function () {
                      s([]);
                    },
                  }));
              }))
            : (this.source = this.options.source);
        },
        _searchTimeout: function (t) {
          clearTimeout(this.searching),
            (this.searching = this._delay(function () {
              var e = this.term === this._value(),
                i = this.menu.element.is(":visible"),
                n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
              (!e || (e && !i && !n)) &&
                ((this.selectedItem = null), this.search(null, t));
            }, this.options.delay));
        },
        search: function (t, e) {
          return (
            (t = null != t ? t : this._value()),
            (this.term = this._value()),
            t.length < this.options.minLength
              ? this.close(e)
              : this._trigger("search", e) !== !1
              ? this._search(t)
              : void 0
          );
        },
        _search: function (t) {
          this.pending++,
            this.element.addClass("ui-autocomplete-loading"),
            (this.cancelSearch = !1),
            this.source({ term: t }, this._response());
        },
        _response: function () {
          var e = ++this.requestIndex;
          return t.proxy(function (t) {
            e === this.requestIndex && this.__response(t),
              this.pending--,
              this.pending ||
                this.element.removeClass("ui-autocomplete-loading");
          }, this);
        },
        __response: function (t) {
          t && (t = this._normalize(t)),
            this._trigger("response", null, { content: t }),
            !this.options.disabled && t && t.length && !this.cancelSearch
              ? (this._suggest(t), this._trigger("open"))
              : this._close();
        },
        close: function (t) {
          (this.cancelSearch = !0), this._close(t);
        },
        _close: function (t) {
          this.menu.element.is(":visible") &&
            (this.menu.element.hide(),
            this.menu.blur(),
            (this.isNewMenu = !0),
            this._trigger("close", t));
        },
        _change: function (t) {
          this.previous !== this._value() &&
            this._trigger("change", t, { item: this.selectedItem });
        },
        _normalize: function (e) {
          return e.length && e[0].label && e[0].value
            ? e
            : t.map(e, function (e) {
                return "string" == typeof e
                  ? { label: e, value: e }
                  : t.extend({}, e, {
                      label: e.label || e.value,
                      value: e.value || e.label,
                    });
              });
        },
        _suggest: function (e) {
          var i = this.menu.element.empty();
          this._renderMenu(i, e),
            (this.isNewMenu = !0),
            this.menu.refresh(),
            i.show(),
            this._resizeMenu(),
            i.position(t.extend({ of: this.element }, this.options.position)),
            this.options.autoFocus && this.menu.next();
        },
        _resizeMenu: function () {
          var t = this.menu.element;
          t.outerWidth(
            Math.max(t.width("").outerWidth() + 1, this.element.outerWidth())
          );
        },
        _renderMenu: function (e, i) {
          var n = this;
          t.each(i, function (t, i) {
            n._renderItemData(e, i);
          });
        },
        _renderItemData: function (t, e) {
          return this._renderItem(t, e).data("ui-autocomplete-item", e);
        },
        _renderItem: function (e, i) {
          return t("<li>").text(i.label).appendTo(e);
        },
        _move: function (t, e) {
          return this.menu.element.is(":visible")
            ? (this.menu.isFirstItem() && /^previous/.test(t)) ||
              (this.menu.isLastItem() && /^next/.test(t))
              ? (this.isMultiLine || this._value(this.term),
                void this.menu.blur())
              : void this.menu[t](e)
            : void this.search(null, e);
        },
        widget: function () {
          return this.menu.element;
        },
        _value: function () {
          return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function (t, e) {
          (!this.isMultiLine || this.menu.element.is(":visible")) &&
            (this._move(t, e), e.preventDefault());
        },
      }),
      t.extend(t.ui.autocomplete, {
        escapeRegex: function (t) {
          return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function (e, i) {
          var n = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
          return t.grep(e, function (t) {
            return n.test(t.label || t.value || t);
          });
        },
      }),
      t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
          messages: {
            noResults: "No search results.",
            results: function (t) {
              return (
                t +
                (t > 1 ? " results are" : " result is") +
                " available, use up and down arrow keys to navigate."
              );
            },
          },
        },
        __response: function (e) {
          var i;
          this._superApply(arguments),
            this.options.disabled ||
              this.cancelSearch ||
              ((i =
                e && e.length
                  ? this.options.messages.results(e.length)
                  : this.options.messages.noResults),
              this.liveRegion.children().hide(),
              t("<div>").text(i).appendTo(this.liveRegion));
        },
      }),
      t.ui.autocomplete
    );
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./core", "./widget"], t)
      : t(jQuery);
  })(function (t) {
    var e,
      i = "ui-button ui-widget ui-state-default ui-corner-all",
      n =
        "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
      s = function () {
        var e = t(this);
        setTimeout(function () {
          e.find(":ui-button").button("refresh");
        }, 1);
      },
      o = function (e) {
        var i = e.name,
          n = e.form,
          s = t([]);
        return (
          i &&
            ((i = i.replace(/'/g, "\\'")),
            (s = n
              ? t(n).find("[name='" + i + "'][type=radio]")
              : t("[name='" + i + "'][type=radio]", e.ownerDocument).filter(
                  function () {
                    return !this.form;
                  }
                ))),
          s
        );
      };
    return (
      t.widget("ui.button", {
        version: "1.11.4",
        defaultElement: "<button>",
        options: {
          disabled: null,
          text: !0,
          label: null,
          icons: { primary: null, secondary: null },
        },
        _create: function () {
          this.element
            .closest("form")
            .unbind("reset" + this.eventNamespace)
            .bind("reset" + this.eventNamespace, s),
            "boolean" != typeof this.options.disabled
              ? (this.options.disabled = !!this.element.prop("disabled"))
              : this.element.prop("disabled", this.options.disabled),
            this._determineButtonType(),
            (this.hasTitle = !!this.buttonElement.attr("title"));
          var n = this,
            r = this.options,
            a = "checkbox" === this.type || "radio" === this.type,
            l = a ? "" : "ui-state-active";
          null === r.label &&
            (r.label =
              "input" === this.type
                ? this.buttonElement.val()
                : this.buttonElement.html()),
            this._hoverable(this.buttonElement),
            this.buttonElement
              .addClass(i)
              .attr("role", "button")
              .bind("mouseenter" + this.eventNamespace, function () {
                r.disabled ||
                  (this === e && t(this).addClass("ui-state-active"));
              })
              .bind("mouseleave" + this.eventNamespace, function () {
                r.disabled || t(this).removeClass(l);
              })
              .bind("click" + this.eventNamespace, function (t) {
                r.disabled &&
                  (t.preventDefault(), t.stopImmediatePropagation());
              }),
            this._on({
              focus: function () {
                this.buttonElement.addClass("ui-state-focus");
              },
              blur: function () {
                this.buttonElement.removeClass("ui-state-focus");
              },
            }),
            a &&
              this.element.bind("change" + this.eventNamespace, function () {
                n.refresh();
              }),
            "checkbox" === this.type
              ? this.buttonElement.bind(
                  "click" + this.eventNamespace,
                  function () {
                    return r.disabled ? !1 : void 0;
                  }
                )
              : "radio" === this.type
              ? this.buttonElement.bind(
                  "click" + this.eventNamespace,
                  function () {
                    if (r.disabled) return !1;
                    t(this).addClass("ui-state-active"),
                      n.buttonElement.attr("aria-pressed", "true");
                    var e = n.element[0];
                    o(e)
                      .not(e)
                      .map(function () {
                        return t(this).button("widget")[0];
                      })
                      .removeClass("ui-state-active")
                      .attr("aria-pressed", "false");
                  }
                )
              : (this.buttonElement
                  .bind("mousedown" + this.eventNamespace, function () {
                    return r.disabled
                      ? !1
                      : (t(this).addClass("ui-state-active"),
                        (e = this),
                        void n.document.one("mouseup", function () {
                          e = null;
                        }));
                  })
                  .bind("mouseup" + this.eventNamespace, function () {
                    return r.disabled
                      ? !1
                      : void t(this).removeClass("ui-state-active");
                  })
                  .bind("keydown" + this.eventNamespace, function (e) {
                    return r.disabled
                      ? !1
                      : void (
                          (e.keyCode === t.ui.keyCode.SPACE ||
                            e.keyCode === t.ui.keyCode.ENTER) &&
                          t(this).addClass("ui-state-active")
                        );
                  })
                  .bind(
                    "keyup" +
                      this.eventNamespace +
                      " blur" +
                      this.eventNamespace,
                    function () {
                      t(this).removeClass("ui-state-active");
                    }
                  ),
                this.buttonElement.is("a") &&
                  this.buttonElement.keyup(function (e) {
                    e.keyCode === t.ui.keyCode.SPACE && t(this).click();
                  })),
            this._setOption("disabled", r.disabled),
            this._resetButton();
        },
        _determineButtonType: function () {
          var t, e, i;
          this.element.is("[type=checkbox]")
            ? (this.type = "checkbox")
            : this.element.is("[type=radio]")
            ? (this.type = "radio")
            : this.element.is("input")
            ? (this.type = "input")
            : (this.type = "button"),
            "checkbox" === this.type || "radio" === this.type
              ? ((t = this.element.parents().last()),
                (e = "label[for='" + this.element.attr("id") + "']"),
                (this.buttonElement = t.find(e)),
                this.buttonElement.length ||
                  ((t = t.length ? t.siblings() : this.element.siblings()),
                  (this.buttonElement = t.filter(e)),
                  this.buttonElement.length ||
                    (this.buttonElement = t.find(e))),
                this.element.addClass("ui-helper-hidden-accessible"),
                (i = this.element.is(":checked")),
                i && this.buttonElement.addClass("ui-state-active"),
                this.buttonElement.prop("aria-pressed", i))
              : (this.buttonElement = this.element);
        },
        widget: function () {
          return this.buttonElement;
        },
        _destroy: function () {
          this.element.removeClass("ui-helper-hidden-accessible"),
            this.buttonElement
              .removeClass(i + " ui-state-active " + n)
              .removeAttr("role")
              .removeAttr("aria-pressed")
              .html(this.buttonElement.find(".ui-button-text").html()),
            this.hasTitle || this.buttonElement.removeAttr("title");
        },
        _setOption: function (t, e) {
          return (
            this._super(t, e),
            "disabled" === t
              ? (this.widget().toggleClass("ui-state-disabled", !!e),
                this.element.prop("disabled", !!e),
                void (
                  e &&
                  ("checkbox" === this.type || "radio" === this.type
                    ? this.buttonElement.removeClass("ui-state-focus")
                    : this.buttonElement.removeClass(
                        "ui-state-focus ui-state-active"
                      ))
                ))
              : void this._resetButton()
          );
        },
        refresh: function () {
          var e = this.element.is("input, button")
            ? this.element.is(":disabled")
            : this.element.hasClass("ui-button-disabled");
          e !== this.options.disabled && this._setOption("disabled", e),
            "radio" === this.type
              ? o(this.element[0]).each(function () {
                  t(this).is(":checked")
                    ? t(this)
                        .button("widget")
                        .addClass("ui-state-active")
                        .attr("aria-pressed", "true")
                    : t(this)
                        .button("widget")
                        .removeClass("ui-state-active")
                        .attr("aria-pressed", "false");
                })
              : "checkbox" === this.type &&
                (this.element.is(":checked")
                  ? this.buttonElement
                      .addClass("ui-state-active")
                      .attr("aria-pressed", "true")
                  : this.buttonElement
                      .removeClass("ui-state-active")
                      .attr("aria-pressed", "false"));
        },
        _resetButton: function () {
          if ("input" === this.type)
            return void (
              this.options.label && this.element.val(this.options.label)
            );
          var e = this.buttonElement.removeClass(n),
            i = t("<span></span>", this.document[0])
              .addClass("ui-button-text")
              .html(this.options.label)
              .appendTo(e.empty())
              .text(),
            s = this.options.icons,
            o = s.primary && s.secondary,
            r = [];
          s.primary || s.secondary
            ? (this.options.text &&
                r.push(
                  "ui-button-text-icon" +
                    (o ? "s" : s.primary ? "-primary" : "-secondary")
                ),
              s.primary &&
                e.prepend(
                  "<span class='ui-button-icon-primary ui-icon " +
                    s.primary +
                    "'></span>"
                ),
              s.secondary &&
                e.append(
                  "<span class='ui-button-icon-secondary ui-icon " +
                    s.secondary +
                    "'></span>"
                ),
              this.options.text ||
                (r.push(o ? "ui-button-icons-only" : "ui-button-icon-only"),
                this.hasTitle || e.attr("title", t.trim(i))))
            : r.push("ui-button-text-only"),
            e.addClass(r.join(" "));
        },
      }),
      t.widget("ui.buttonset", {
        version: "1.11.4",
        options: {
          items:
            "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)",
        },
        _create: function () {
          this.element.addClass("ui-buttonset");
        },
        _init: function () {
          this.refresh();
        },
        _setOption: function (t, e) {
          "disabled" === t && this.buttons.button("option", t, e),
            this._super(t, e);
        },
        refresh: function () {
          var e = "rtl" === this.element.css("direction"),
            i = this.element.find(this.options.items),
            n = i.filter(":ui-button");
          i.not(":ui-button").button(),
            n.button("refresh"),
            (this.buttons = i
              .map(function () {
                return t(this).button("widget")[0];
              })
              .removeClass("ui-corner-all ui-corner-left ui-corner-right")
              .filter(":first")
              .addClass(e ? "ui-corner-right" : "ui-corner-left")
              .end()
              .filter(":last")
              .addClass(e ? "ui-corner-left" : "ui-corner-right")
              .end()
              .end());
        },
        _destroy: function () {
          this.element.removeClass("ui-buttonset"),
            this.buttons
              .map(function () {
                return t(this).button("widget")[0];
              })
              .removeClass("ui-corner-left ui-corner-right")
              .end()
              .button("destroy");
        },
      }),
      t.ui.button
    );
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./core"], t)
      : t(jQuery);
  })(function (t) {
    function e(t) {
      for (var e, i; t.length && t[0] !== document; ) {
        if (
          ((e = t.css("position")),
          ("absolute" === e || "relative" === e || "fixed" === e) &&
            ((i = parseInt(t.css("zIndex"), 10)), !isNaN(i) && 0 !== i))
        )
          return i;
        t = t.parent();
      }
      return 0;
    }
    function i() {
      (this._curInst = null),
        (this._keyEvent = !1),
        (this._disabledInputs = []),
        (this._datepickerShowing = !1),
        (this._inDialog = !1),
        (this._mainDivId = "ui-datepicker-div"),
        (this._inlineClass = "ui-datepicker-inline"),
        (this._appendClass = "ui-datepicker-append"),
        (this._triggerClass = "ui-datepicker-trigger"),
        (this._dialogClass = "ui-datepicker-dialog"),
        (this._disableClass = "ui-datepicker-disabled"),
        (this._unselectableClass = "ui-datepicker-unselectable"),
        (this._currentClass = "ui-datepicker-current-day"),
        (this._dayOverClass = "ui-datepicker-days-cell-over"),
        (this.regional = []),
        (this.regional[""] = {
          closeText: "Done",
          prevText: "Prev",
          nextText: "Next",
          currentText: "Today",
          monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthNamesShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          dayNames: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          weekHeader: "Wk",
          dateFormat: "mm/dd/yy",
          firstDay: 0,
          isRTL: !1,
          showMonthAfterYear: !1,
          yearSuffix: "",
        }),
        (this._defaults = {
          showOn: "focus",
          showAnim: "fadeIn",
          showOptions: {},
          defaultDate: null,
          appendText: "",
          buttonText: "...",
          buttonImage: "",
          buttonImageOnly: !1,
          hideIfNoPrevNext: !1,
          navigationAsDateFormat: !1,
          gotoCurrent: !1,
          changeMonth: !1,
          changeYear: !1,
          yearRange: "c-10:c+10",
          showOtherMonths: !1,
          selectOtherMonths: !1,
          showWeek: !1,
          calculateWeek: this.iso8601Week,
          shortYearCutoff: "+10",
          minDate: null,
          maxDate: null,
          duration: "fast",
          beforeShowDay: null,
          beforeShow: null,
          onSelect: null,
          onChangeMonthYear: null,
          onClose: null,
          numberOfMonths: 1,
          showCurrentAtPos: 0,
          stepMonths: 1,
          stepBigMonths: 12,
          altField: "",
          altFormat: "",
          constrainInput: !0,
          showButtonPanel: !1,
          autoSize: !1,
          disabled: !1,
        }),
        t.extend(this._defaults, this.regional[""]),
        (this.regional.en = t.extend(!0, {}, this.regional[""])),
        (this.regional["en-US"] = t.extend(!0, {}, this.regional.en)),
        (this.dpDiv = n(
          t(
            "<div id='" +
              this._mainDivId +
              "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
          )
        ));
    }
    function n(e) {
      var i =
        "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return e
        .delegate(i, "mouseout", function () {
          t(this).removeClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") &&
              t(this).removeClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") &&
              t(this).removeClass("ui-datepicker-next-hover");
        })
        .delegate(i, "mouseover", s);
    }
    function s() {
      t.datepicker._isDisabledDatepicker(
        r.inline ? r.dpDiv.parent()[0] : r.input[0]
      ) ||
        (t(this)
          .parents(".ui-datepicker-calendar")
          .find("a")
          .removeClass("ui-state-hover"),
        t(this).addClass("ui-state-hover"),
        -1 !== this.className.indexOf("ui-datepicker-prev") &&
          t(this).addClass("ui-datepicker-prev-hover"),
        -1 !== this.className.indexOf("ui-datepicker-next") &&
          t(this).addClass("ui-datepicker-next-hover"));
    }
    function o(e, i) {
      t.extend(e, i);
      for (var n in i) null == i[n] && (e[n] = i[n]);
      return e;
    }
    t.extend(t.ui, { datepicker: { version: "1.11.4" } });
    var r;
    return (
      t.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
          return this.dpDiv;
        },
        setDefaults: function (t) {
          return o(this._defaults, t || {}), this;
        },
        _attachDatepicker: function (e, i) {
          var n, s, o;
          (n = e.nodeName.toLowerCase()),
            (s = "div" === n || "span" === n),
            e.id || ((this.uuid += 1), (e.id = "dp" + this.uuid)),
            (o = this._newInst(t(e), s)),
            (o.settings = t.extend({}, i || {})),
            "input" === n
              ? this._connectDatepicker(e, o)
              : s && this._inlineDatepicker(e, o);
        },
        _newInst: function (e, i) {
          var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
          return {
            id: s,
            input: e,
            selectedDay: 0,
            selectedMonth: 0,
            selectedYear: 0,
            drawMonth: 0,
            drawYear: 0,
            inline: i,
            dpDiv: i
              ? n(
                  t(
                    "<div class='" +
                      this._inlineClass +
                      " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                  )
                )
              : this.dpDiv,
          };
        },
        _connectDatepicker: function (e, i) {
          var n = t(e);
          (i.append = t([])),
            (i.trigger = t([])),
            n.hasClass(this.markerClassName) ||
              (this._attachments(n, i),
              n
                .addClass(this.markerClassName)
                .keydown(this._doKeyDown)
                .keypress(this._doKeyPress)
                .keyup(this._doKeyUp),
              this._autoSize(i),
              t.data(e, "datepicker", i),
              i.settings.disabled && this._disableDatepicker(e));
        },
        _attachments: function (e, i) {
          var n,
            s,
            o,
            r = this._get(i, "appendText"),
            a = this._get(i, "isRTL");
          i.append && i.append.remove(),
            r &&
              ((i.append = t(
                "<span class='" + this._appendClass + "'>" + r + "</span>"
              )),
              e[a ? "before" : "after"](i.append)),
            e.unbind("focus", this._showDatepicker),
            i.trigger && i.trigger.remove(),
            (n = this._get(i, "showOn")),
            ("focus" === n || "both" === n) && e.focus(this._showDatepicker),
            ("button" === n || "both" === n) &&
              ((s = this._get(i, "buttonText")),
              (o = this._get(i, "buttonImage")),
              (i.trigger = t(
                this._get(i, "buttonImageOnly")
                  ? t("<img/>")
                      .addClass(this._triggerClass)
                      .attr({ src: o, alt: s, title: s })
                  : t("<button type='button'></button>")
                      .addClass(this._triggerClass)
                      .html(
                        o ? t("<img/>").attr({ src: o, alt: s, title: s }) : s
                      )
              )),
              e[a ? "before" : "after"](i.trigger),
              i.trigger.click(function () {
                return (
                  t.datepicker._datepickerShowing &&
                  t.datepicker._lastInput === e[0]
                    ? t.datepicker._hideDatepicker()
                    : t.datepicker._datepickerShowing &&
                      t.datepicker._lastInput !== e[0]
                    ? (t.datepicker._hideDatepicker(),
                      t.datepicker._showDatepicker(e[0]))
                    : t.datepicker._showDatepicker(e[0]),
                  !1
                );
              }));
        },
        _autoSize: function (t) {
          if (this._get(t, "autoSize") && !t.inline) {
            var e,
              i,
              n,
              s,
              o = new Date(2009, 11, 20),
              r = this._get(t, "dateFormat");
            r.match(/[DM]/) &&
              ((e = function (t) {
                for (i = 0, n = 0, s = 0; s < t.length; s++)
                  t[s].length > i && ((i = t[s].length), (n = s));
                return n;
              }),
              o.setMonth(
                e(
                  this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort")
                )
              ),
              o.setDate(
                e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                  20 -
                  o.getDay()
              )),
              t.input.attr("size", this._formatDate(t, o).length);
          }
        },
        _inlineDatepicker: function (e, i) {
          var n = t(e);
          n.hasClass(this.markerClassName) ||
            (n.addClass(this.markerClassName).append(i.dpDiv),
            t.data(e, "datepicker", i),
            this._setDate(i, this._getDefaultDate(i), !0),
            this._updateDatepicker(i),
            this._updateAlternate(i),
            i.settings.disabled && this._disableDatepicker(e),
            i.dpDiv.css("display", "block"));
        },
        _dialogDatepicker: function (e, i, n, s, r) {
          var a,
            l,
            c,
            u,
            h,
            d = this._dialogInst;
          return (
            d ||
              ((this.uuid += 1),
              (a = "dp" + this.uuid),
              (this._dialogInput = t(
                "<input type='text' id='" +
                  a +
                  "' style='position: absolute; top: -100px; width: 0px;'/>"
              )),
              this._dialogInput.keydown(this._doKeyDown),
              t("body").append(this._dialogInput),
              (d = this._dialogInst = this._newInst(this._dialogInput, !1)),
              (d.settings = {}),
              t.data(this._dialogInput[0], "datepicker", d)),
            o(d.settings, s || {}),
            (i = i && i.constructor === Date ? this._formatDate(d, i) : i),
            this._dialogInput.val(i),
            (this._pos = r ? (r.length ? r : [r.pageX, r.pageY]) : null),
            this._pos ||
              ((l = document.documentElement.clientWidth),
              (c = document.documentElement.clientHeight),
              (u =
                document.documentElement.scrollLeft ||
                document.body.scrollLeft),
              (h =
                document.documentElement.scrollTop || document.body.scrollTop),
              (this._pos = [l / 2 - 100 + u, c / 2 - 150 + h])),
            this._dialogInput
              .css("left", this._pos[0] + 20 + "px")
              .css("top", this._pos[1] + "px"),
            (d.settings.onSelect = n),
            (this._inDialog = !0),
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            t.blockUI && t.blockUI(this.dpDiv),
            t.data(this._dialogInput[0], "datepicker", d),
            this
          );
        },
        _destroyDatepicker: function (e) {
          var i,
            n = t(e),
            s = t.data(e, "datepicker");
          n.hasClass(this.markerClassName) &&
            ((i = e.nodeName.toLowerCase()),
            t.removeData(e, "datepicker"),
            "input" === i
              ? (s.append.remove(),
                s.trigger.remove(),
                n
                  .removeClass(this.markerClassName)
                  .unbind("focus", this._showDatepicker)
                  .unbind("keydown", this._doKeyDown)
                  .unbind("keypress", this._doKeyPress)
                  .unbind("keyup", this._doKeyUp))
              : ("div" === i || "span" === i) &&
                n.removeClass(this.markerClassName).empty(),
            r === s && (r = null));
        },
        _enableDatepicker: function (e) {
          var i,
            n,
            s = t(e),
            o = t.data(e, "datepicker");
          s.hasClass(this.markerClassName) &&
            ((i = e.nodeName.toLowerCase()),
            "input" === i
              ? ((e.disabled = !1),
                o.trigger
                  .filter("button")
                  .each(function () {
                    this.disabled = !1;
                  })
                  .end()
                  .filter("img")
                  .css({ opacity: "1.0", cursor: "" }))
              : ("div" === i || "span" === i) &&
                ((n = s.children("." + this._inlineClass)),
                n.children().removeClass("ui-state-disabled"),
                n
                  .find("select.ui-datepicker-month, select.ui-datepicker-year")
                  .prop("disabled", !1)),
            (this._disabledInputs = t.map(this._disabledInputs, function (t) {
              return t === e ? null : t;
            })));
        },
        _disableDatepicker: function (e) {
          var i,
            n,
            s = t(e),
            o = t.data(e, "datepicker");
          s.hasClass(this.markerClassName) &&
            ((i = e.nodeName.toLowerCase()),
            "input" === i
              ? ((e.disabled = !0),
                o.trigger
                  .filter("button")
                  .each(function () {
                    this.disabled = !0;
                  })
                  .end()
                  .filter("img")
                  .css({ opacity: "0.5", cursor: "default" }))
              : ("div" === i || "span" === i) &&
                ((n = s.children("." + this._inlineClass)),
                n.children().addClass("ui-state-disabled"),
                n
                  .find("select.ui-datepicker-month, select.ui-datepicker-year")
                  .prop("disabled", !0)),
            (this._disabledInputs = t.map(this._disabledInputs, function (t) {
              return t === e ? null : t;
            })),
            (this._disabledInputs[this._disabledInputs.length] = e));
        },
        _isDisabledDatepicker: function (t) {
          if (!t) return !1;
          for (var e = 0; e < this._disabledInputs.length; e++)
            if (this._disabledInputs[e] === t) return !0;
          return !1;
        },
        _getInst: function (e) {
          try {
            return t.data(e, "datepicker");
          } catch (i) {
            throw "Missing instance data for this datepicker";
          }
        },
        _optionDatepicker: function (e, i, n) {
          var s,
            r,
            a,
            l,
            c = this._getInst(e);
          return 2 === arguments.length && "string" == typeof i
            ? "defaults" === i
              ? t.extend({}, t.datepicker._defaults)
              : c
              ? "all" === i
                ? t.extend({}, c.settings)
                : this._get(c, i)
              : null
            : ((s = i || {}),
              "string" == typeof i && ((s = {}), (s[i] = n)),
              void (
                c &&
                (this._curInst === c && this._hideDatepicker(),
                (r = this._getDateDatepicker(e, !0)),
                (a = this._getMinMaxDate(c, "min")),
                (l = this._getMinMaxDate(c, "max")),
                o(c.settings, s),
                null !== a &&
                  void 0 !== s.dateFormat &&
                  void 0 === s.minDate &&
                  (c.settings.minDate = this._formatDate(c, a)),
                null !== l &&
                  void 0 !== s.dateFormat &&
                  void 0 === s.maxDate &&
                  (c.settings.maxDate = this._formatDate(c, l)),
                "disabled" in s &&
                  (s.disabled
                    ? this._disableDatepicker(e)
                    : this._enableDatepicker(e)),
                this._attachments(t(e), c),
                this._autoSize(c),
                this._setDate(c, r),
                this._updateAlternate(c),
                this._updateDatepicker(c))
              ));
        },
        _changeDatepicker: function (t, e, i) {
          this._optionDatepicker(t, e, i);
        },
        _refreshDatepicker: function (t) {
          var e = this._getInst(t);
          e && this._updateDatepicker(e);
        },
        _setDateDatepicker: function (t, e) {
          var i = this._getInst(t);
          i &&
            (this._setDate(i, e),
            this._updateDatepicker(i),
            this._updateAlternate(i));
        },
        _getDateDatepicker: function (t, e) {
          var i = this._getInst(t);
          return (
            i && !i.inline && this._setDateFromField(i, e),
            i ? this._getDate(i) : null
          );
        },
        _doKeyDown: function (e) {
          var i,
            n,
            s,
            o = t.datepicker._getInst(e.target),
            r = !0,
            a = o.dpDiv.is(".ui-datepicker-rtl");
          if (((o._keyEvent = !0), t.datepicker._datepickerShowing))
            switch (e.keyCode) {
              case 9:
                t.datepicker._hideDatepicker(), (r = !1);
                break;
              case 13:
                return (
                  (s = t(
                    "td." +
                      t.datepicker._dayOverClass +
                      ":not(." +
                      t.datepicker._currentClass +
                      ")",
                    o.dpDiv
                  )),
                  s[0] &&
                    t.datepicker._selectDay(
                      e.target,
                      o.selectedMonth,
                      o.selectedYear,
                      s[0]
                    ),
                  (i = t.datepicker._get(o, "onSelect")),
                  i
                    ? ((n = t.datepicker._formatDate(o)),
                      i.apply(o.input ? o.input[0] : null, [n, o]))
                    : t.datepicker._hideDatepicker(),
                  !1
                );
              case 27:
                t.datepicker._hideDatepicker();
                break;
              case 33:
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey
                    ? -t.datepicker._get(o, "stepBigMonths")
                    : -t.datepicker._get(o, "stepMonths"),
                  "M"
                );
                break;
              case 34:
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey
                    ? +t.datepicker._get(o, "stepBigMonths")
                    : +t.datepicker._get(o, "stepMonths"),
                  "M"
                );
                break;
              case 35:
                (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
                  (r = e.ctrlKey || e.metaKey);
                break;
              case 36:
                (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
                  (r = e.ctrlKey || e.metaKey);
                break;
              case 37:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"),
                  (r = e.ctrlKey || e.metaKey),
                  e.originalEvent.altKey &&
                    t.datepicker._adjustDate(
                      e.target,
                      e.ctrlKey
                        ? -t.datepicker._get(o, "stepBigMonths")
                        : -t.datepicker._get(o, "stepMonths"),
                      "M"
                    );
                break;
              case 38:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, -7, "D"),
                  (r = e.ctrlKey || e.metaKey);
                break;
              case 39:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"),
                  (r = e.ctrlKey || e.metaKey),
                  e.originalEvent.altKey &&
                    t.datepicker._adjustDate(
                      e.target,
                      e.ctrlKey
                        ? +t.datepicker._get(o, "stepBigMonths")
                        : +t.datepicker._get(o, "stepMonths"),
                      "M"
                    );
                break;
              case 40:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, 7, "D"),
                  (r = e.ctrlKey || e.metaKey);
                break;
              default:
                r = !1;
            }
          else
            36 === e.keyCode && e.ctrlKey
              ? t.datepicker._showDatepicker(this)
              : (r = !1);
          r && (e.preventDefault(), e.stopPropagation());
        },
        _doKeyPress: function (e) {
          var i,
            n,
            s = t.datepicker._getInst(e.target);
          return t.datepicker._get(s, "constrainInput")
            ? ((i = t.datepicker._possibleChars(
                t.datepicker._get(s, "dateFormat")
              )),
              (n = String.fromCharCode(
                null == e.charCode ? e.keyCode : e.charCode
              )),
              e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1)
            : void 0;
        },
        _doKeyUp: function (e) {
          var i,
            n = t.datepicker._getInst(e.target);
          if (n.input.val() !== n.lastVal)
            try {
              (i = t.datepicker.parseDate(
                t.datepicker._get(n, "dateFormat"),
                n.input ? n.input.val() : null,
                t.datepicker._getFormatConfig(n)
              )),
                i &&
                  (t.datepicker._setDateFromField(n),
                  t.datepicker._updateAlternate(n),
                  t.datepicker._updateDatepicker(n));
            } catch (s) {}
          return !0;
        },
        _showDatepicker: function (i) {
          if (
            ((i = i.target || i),
            "input" !== i.nodeName.toLowerCase() &&
              (i = t("input", i.parentNode)[0]),
            !t.datepicker._isDisabledDatepicker(i) &&
              t.datepicker._lastInput !== i)
          ) {
            var n, s, r, a, l, c, u;
            (n = t.datepicker._getInst(i)),
              t.datepicker._curInst &&
                t.datepicker._curInst !== n &&
                (t.datepicker._curInst.dpDiv.stop(!0, !0),
                n &&
                  t.datepicker._datepickerShowing &&
                  t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
              (s = t.datepicker._get(n, "beforeShow")),
              (r = s ? s.apply(i, [i, n]) : {}),
              r !== !1 &&
                (o(n.settings, r),
                (n.lastVal = null),
                (t.datepicker._lastInput = i),
                t.datepicker._setDateFromField(n),
                t.datepicker._inDialog && (i.value = ""),
                t.datepicker._pos ||
                  ((t.datepicker._pos = t.datepicker._findPos(i)),
                  (t.datepicker._pos[1] += i.offsetHeight)),
                (a = !1),
                t(i)
                  .parents()
                  .each(function () {
                    return (a |= "fixed" === t(this).css("position")), !a;
                  }),
                (l = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }),
                (t.datepicker._pos = null),
                n.dpDiv.empty(),
                n.dpDiv.css({
                  position: "absolute",
                  display: "block",
                  top: "-1000px",
                }),
                t.datepicker._updateDatepicker(n),
                (l = t.datepicker._checkOffset(n, l, a)),
                n.dpDiv.css({
                  position:
                    t.datepicker._inDialog && t.blockUI
                      ? "static"
                      : a
                      ? "fixed"
                      : "absolute",
                  display: "none",
                  left: l.left + "px",
                  top: l.top + "px",
                }),
                n.inline ||
                  ((c = t.datepicker._get(n, "showAnim")),
                  (u = t.datepicker._get(n, "duration")),
                  n.dpDiv.css("z-index", e(t(i)) + 1),
                  (t.datepicker._datepickerShowing = !0),
                  t.effects && t.effects.effect[c]
                    ? n.dpDiv.show(c, t.datepicker._get(n, "showOptions"), u)
                    : n.dpDiv[c || "show"](c ? u : null),
                  t.datepicker._shouldFocusInput(n) && n.input.focus(),
                  (t.datepicker._curInst = n)));
          }
        },
        _updateDatepicker: function (e) {
          (this.maxRows = 4),
            (r = e),
            e.dpDiv.empty().append(this._generateHTML(e)),
            this._attachHandlers(e);
          var i,
            n = this._getNumberOfMonths(e),
            o = n[1],
            a = 17,
            l = e.dpDiv.find("." + this._dayOverClass + " a");
          l.length > 0 && s.apply(l.get(0)),
            e.dpDiv
              .removeClass(
                "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
              )
              .width(""),
            o > 1 &&
              e.dpDiv
                .addClass("ui-datepicker-multi-" + o)
                .css("width", a * o + "em"),
            e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"](
              "ui-datepicker-multi"
            ),
            e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"](
              "ui-datepicker-rtl"
            ),
            e === t.datepicker._curInst &&
              t.datepicker._datepickerShowing &&
              t.datepicker._shouldFocusInput(e) &&
              e.input.focus(),
            e.yearshtml &&
              ((i = e.yearshtml),
              setTimeout(function () {
                i === e.yearshtml &&
                  e.yearshtml &&
                  e.dpDiv
                    .find("select.ui-datepicker-year:first")
                    .replaceWith(e.yearshtml),
                  (i = e.yearshtml = null);
              }, 0));
        },
        _shouldFocusInput: function (t) {
          return (
            t.input &&
            t.input.is(":visible") &&
            !t.input.is(":disabled") &&
            !t.input.is(":focus")
          );
        },
        _checkOffset: function (e, i, n) {
          var s = e.dpDiv.outerWidth(),
            o = e.dpDiv.outerHeight(),
            r = e.input ? e.input.outerWidth() : 0,
            a = e.input ? e.input.outerHeight() : 0,
            l =
              document.documentElement.clientWidth +
              (n ? 0 : t(document).scrollLeft()),
            c =
              document.documentElement.clientHeight +
              (n ? 0 : t(document).scrollTop());
          return (
            (i.left -= this._get(e, "isRTL") ? s - r : 0),
            (i.left -=
              n && i.left === e.input.offset().left
                ? t(document).scrollLeft()
                : 0),
            (i.top -=
              n && i.top === e.input.offset().top + a
                ? t(document).scrollTop()
                : 0),
            (i.left -= Math.min(
              i.left,
              i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0
            )),
            (i.top -= Math.min(
              i.top,
              i.top + o > c && c > o ? Math.abs(o + a) : 0
            )),
            i
          );
        },
        _findPos: function (e) {
          for (
            var i, n = this._getInst(e), s = this._get(n, "isRTL");
            e &&
            ("hidden" === e.type ||
              1 !== e.nodeType ||
              t.expr.filters.hidden(e));

          )
            e = e[s ? "previousSibling" : "nextSibling"];
          return (i = t(e).offset()), [i.left, i.top];
        },
        _hideDatepicker: function (e) {
          var i,
            n,
            s,
            o,
            r = this._curInst;
          !r ||
            (e && r !== t.data(e, "datepicker")) ||
            (this._datepickerShowing &&
              ((i = this._get(r, "showAnim")),
              (n = this._get(r, "duration")),
              (s = function () {
                t.datepicker._tidyDialog(r);
              }),
              t.effects && (t.effects.effect[i] || t.effects[i])
                ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), n, s)
                : r.dpDiv[
                    "slideDown" === i
                      ? "slideUp"
                      : "fadeIn" === i
                      ? "fadeOut"
                      : "hide"
                  ](i ? n : null, s),
              i || s(),
              (this._datepickerShowing = !1),
              (o = this._get(r, "onClose")),
              o &&
                o.apply(r.input ? r.input[0] : null, [
                  r.input ? r.input.val() : "",
                  r,
                ]),
              (this._lastInput = null),
              this._inDialog &&
                (this._dialogInput.css({
                  position: "absolute",
                  left: "0",
                  top: "-100px",
                }),
                t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))),
              (this._inDialog = !1)));
        },
        _tidyDialog: function (t) {
          t.dpDiv
            .removeClass(this._dialogClass)
            .unbind(".ui-datepicker-calendar");
        },
        _checkExternalClick: function (e) {
          if (t.datepicker._curInst) {
            var i = t(e.target),
              n = t.datepicker._getInst(i[0]);
            ((i[0].id !== t.datepicker._mainDivId &&
              0 === i.parents("#" + t.datepicker._mainDivId).length &&
              !i.hasClass(t.datepicker.markerClassName) &&
              !i.closest("." + t.datepicker._triggerClass).length &&
              t.datepicker._datepickerShowing &&
              (!t.datepicker._inDialog || !t.blockUI)) ||
              (i.hasClass(t.datepicker.markerClassName) &&
                t.datepicker._curInst !== n)) &&
              t.datepicker._hideDatepicker();
          }
        },
        _adjustDate: function (e, i, n) {
          var s = t(e),
            o = this._getInst(s[0]);
          this._isDisabledDatepicker(s[0]) ||
            (this._adjustInstDate(
              o,
              i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0),
              n
            ),
            this._updateDatepicker(o));
        },
        _gotoToday: function (e) {
          var i,
            n = t(e),
            s = this._getInst(n[0]);
          this._get(s, "gotoCurrent") && s.currentDay
            ? ((s.selectedDay = s.currentDay),
              (s.drawMonth = s.selectedMonth = s.currentMonth),
              (s.drawYear = s.selectedYear = s.currentYear))
            : ((i = new Date()),
              (s.selectedDay = i.getDate()),
              (s.drawMonth = s.selectedMonth = i.getMonth()),
              (s.drawYear = s.selectedYear = i.getFullYear())),
            this._notifyChange(s),
            this._adjustDate(n);
        },
        _selectMonthYear: function (e, i, n) {
          var s = t(e),
            o = this._getInst(s[0]);
          (o["selected" + ("M" === n ? "Month" : "Year")] = o[
            "draw" + ("M" === n ? "Month" : "Year")
          ] = parseInt(i.options[i.selectedIndex].value, 10)),
            this._notifyChange(o),
            this._adjustDate(s);
        },
        _selectDay: function (e, i, n, s) {
          var o,
            r = t(e);
          t(s).hasClass(this._unselectableClass) ||
            this._isDisabledDatepicker(r[0]) ||
            ((o = this._getInst(r[0])),
            (o.selectedDay = o.currentDay = t("a", s).html()),
            (o.selectedMonth = o.currentMonth = i),
            (o.selectedYear = o.currentYear = n),
            this._selectDate(
              e,
              this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)
            ));
        },
        _clearDate: function (e) {
          var i = t(e);
          this._selectDate(i, "");
        },
        _selectDate: function (e, i) {
          var n,
            s = t(e),
            o = this._getInst(s[0]);
          (i = null != i ? i : this._formatDate(o)),
            o.input && o.input.val(i),
            this._updateAlternate(o),
            (n = this._get(o, "onSelect")),
            n
              ? n.apply(o.input ? o.input[0] : null, [i, o])
              : o.input && o.input.trigger("change"),
            o.inline
              ? this._updateDatepicker(o)
              : (this._hideDatepicker(),
                (this._lastInput = o.input[0]),
                "object" != typeof o.input[0] && o.input.focus(),
                (this._lastInput = null));
        },
        _updateAlternate: function (e) {
          var i,
            n,
            s,
            o = this._get(e, "altField");
          o &&
            ((i = this._get(e, "altFormat") || this._get(e, "dateFormat")),
            (n = this._getDate(e)),
            (s = this.formatDate(i, n, this._getFormatConfig(e))),
            t(o).each(function () {
              t(this).val(s);
            }));
        },
        noWeekends: function (t) {
          var e = t.getDay();
          return [e > 0 && 6 > e, ""];
        },
        iso8601Week: function (t) {
          var e,
            i = new Date(t.getTime());
          return (
            i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
            (e = i.getTime()),
            i.setMonth(0),
            i.setDate(1),
            Math.floor(Math.round((e - i) / 864e5) / 7) + 1
          );
        },
        parseDate: function (e, i, n) {
          if (null == e || null == i) throw "Invalid arguments";
          if (((i = "object" == typeof i ? i.toString() : i + ""), "" === i))
            return null;
          var s,
            o,
            r,
            a,
            l = 0,
            c =
              (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
            u =
              "string" != typeof c
                ? c
                : (new Date().getFullYear() % 100) + parseInt(c, 10),
            h = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
            d = (n ? n.dayNames : null) || this._defaults.dayNames,
            p =
              (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
            f = (n ? n.monthNames : null) || this._defaults.monthNames,
            m = -1,
            g = -1,
            v = -1,
            b = -1,
            y = !1,
            _ = function (t) {
              var i = s + 1 < e.length && e.charAt(s + 1) === t;
              return i && s++, i;
            },
            w = function (t) {
              var e = _(t),
                n =
                  "@" === t
                    ? 14
                    : "!" === t
                    ? 20
                    : "y" === t && e
                    ? 4
                    : "o" === t
                    ? 3
                    : 2,
                s = "y" === t ? n : 1,
                o = new RegExp("^\\d{" + s + "," + n + "}"),
                r = i.substring(l).match(o);
              if (!r) throw "Missing number at position " + l;
              return (l += r[0].length), parseInt(r[0], 10);
            },
            x = function (e, n, s) {
              var o = -1,
                r = t
                  .map(_(e) ? s : n, function (t, e) {
                    return [[e, t]];
                  })
                  .sort(function (t, e) {
                    return -(t[1].length - e[1].length);
                  });
              if (
                (t.each(r, function (t, e) {
                  var n = e[1];
                  return i.substr(l, n.length).toLowerCase() === n.toLowerCase()
                    ? ((o = e[0]), (l += n.length), !1)
                    : void 0;
                }),
                -1 !== o)
              )
                return o + 1;
              throw "Unknown name at position " + l;
            },
            C = function () {
              if (i.charAt(l) !== e.charAt(s))
                throw "Unexpected literal at position " + l;
              l++;
            };
          for (s = 0; s < e.length; s++)
            if (y) "'" !== e.charAt(s) || _("'") ? C() : (y = !1);
            else
              switch (e.charAt(s)) {
                case "d":
                  v = w("d");
                  break;
                case "D":
                  x("D", h, d);
                  break;
                case "o":
                  b = w("o");
                  break;
                case "m":
                  g = w("m");
                  break;
                case "M":
                  g = x("M", p, f);
                  break;
                case "y":
                  m = w("y");
                  break;
                case "@":
                  (a = new Date(w("@"))),
                    (m = a.getFullYear()),
                    (g = a.getMonth() + 1),
                    (v = a.getDate());
                  break;
                case "!":
                  (a = new Date((w("!") - this._ticksTo1970) / 1e4)),
                    (m = a.getFullYear()),
                    (g = a.getMonth() + 1),
                    (v = a.getDate());
                  break;
                case "'":
                  _("'") ? C() : (y = !0);
                  break;
                default:
                  C();
              }
          if (l < i.length && ((r = i.substr(l)), !/^\s+/.test(r)))
            throw "Extra/unparsed characters found in date: " + r;
          if (
            (-1 === m
              ? (m = new Date().getFullYear())
              : 100 > m &&
                (m +=
                  new Date().getFullYear() -
                  (new Date().getFullYear() % 100) +
                  (u >= m ? 0 : -100)),
            b > -1)
          )
            for (g = 1, v = b; ; ) {
              if (((o = this._getDaysInMonth(m, g - 1)), o >= v)) break;
              g++, (v -= o);
            }
          if (
            ((a = this._daylightSavingAdjust(new Date(m, g - 1, v))),
            a.getFullYear() !== m ||
              a.getMonth() + 1 !== g ||
              a.getDate() !== v)
          )
            throw "Invalid date";
          return a;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970:
          24 *
          (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
          60 *
          60 *
          1e7,
        formatDate: function (t, e, i) {
          if (!e) return "";
          var n,
            s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
            o = (i ? i.dayNames : null) || this._defaults.dayNames,
            r =
              (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
            a = (i ? i.monthNames : null) || this._defaults.monthNames,
            l = function (e) {
              var i = n + 1 < t.length && t.charAt(n + 1) === e;
              return i && n++, i;
            },
            c = function (t, e, i) {
              var n = "" + e;
              if (l(t)) for (; n.length < i; ) n = "0" + n;
              return n;
            },
            u = function (t, e, i, n) {
              return l(t) ? n[e] : i[e];
            },
            h = "",
            d = !1;
          if (e)
            for (n = 0; n < t.length; n++)
              if (d)
                "'" !== t.charAt(n) || l("'") ? (h += t.charAt(n)) : (d = !1);
              else
                switch (t.charAt(n)) {
                  case "d":
                    h += c("d", e.getDate(), 2);
                    break;
                  case "D":
                    h += u("D", e.getDay(), s, o);
                    break;
                  case "o":
                    h += c(
                      "o",
                      Math.round(
                        (new Date(
                          e.getFullYear(),
                          e.getMonth(),
                          e.getDate()
                        ).getTime() -
                          new Date(e.getFullYear(), 0, 0).getTime()) /
                          864e5
                      ),
                      3
                    );
                    break;
                  case "m":
                    h += c("m", e.getMonth() + 1, 2);
                    break;
                  case "M":
                    h += u("M", e.getMonth(), r, a);
                    break;
                  case "y":
                    h += l("y")
                      ? e.getFullYear()
                      : (e.getYear() % 100 < 10 ? "0" : "") +
                        (e.getYear() % 100);
                    break;
                  case "@":
                    h += e.getTime();
                    break;
                  case "!":
                    h += 1e4 * e.getTime() + this._ticksTo1970;
                    break;
                  case "'":
                    l("'") ? (h += "'") : (d = !0);
                    break;
                  default:
                    h += t.charAt(n);
                }
          return h;
        },
        _possibleChars: function (t) {
          var e,
            i = "",
            n = !1,
            s = function (i) {
              var n = e + 1 < t.length && t.charAt(e + 1) === i;
              return n && e++, n;
            };
          for (e = 0; e < t.length; e++)
            if (n)
              "'" !== t.charAt(e) || s("'") ? (i += t.charAt(e)) : (n = !1);
            else
              switch (t.charAt(e)) {
                case "d":
                case "m":
                case "y":
                case "@":
                  i += "0123456789";
                  break;
                case "D":
                case "M":
                  return null;
                case "'":
                  s("'") ? (i += "'") : (n = !0);
                  break;
                default:
                  i += t.charAt(e);
              }
          return i;
        },
        _get: function (t, e) {
          return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
        },
        _setDateFromField: function (t, e) {
          if (t.input.val() !== t.lastVal) {
            var i = this._get(t, "dateFormat"),
              n = (t.lastVal = t.input ? t.input.val() : null),
              s = this._getDefaultDate(t),
              o = s,
              r = this._getFormatConfig(t);
            try {
              o = this.parseDate(i, n, r) || s;
            } catch (a) {
              n = e ? "" : n;
            }
            (t.selectedDay = o.getDate()),
              (t.drawMonth = t.selectedMonth = o.getMonth()),
              (t.drawYear = t.selectedYear = o.getFullYear()),
              (t.currentDay = n ? o.getDate() : 0),
              (t.currentMonth = n ? o.getMonth() : 0),
              (t.currentYear = n ? o.getFullYear() : 0),
              this._adjustInstDate(t);
          }
        },
        _getDefaultDate: function (t) {
          return this._restrictMinMax(
            t,
            this._determineDate(t, this._get(t, "defaultDate"), new Date())
          );
        },
        _determineDate: function (e, i, n) {
          var s = function (t) {
              var e = new Date();
              return e.setDate(e.getDate() + t), e;
            },
            o = function (i) {
              try {
                return t.datepicker.parseDate(
                  t.datepicker._get(e, "dateFormat"),
                  i,
                  t.datepicker._getFormatConfig(e)
                );
              } catch (n) {}
              for (
                var s =
                    (i.toLowerCase().match(/^c/)
                      ? t.datepicker._getDate(e)
                      : null) || new Date(),
                  o = s.getFullYear(),
                  r = s.getMonth(),
                  a = s.getDate(),
                  l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                  c = l.exec(i);
                c;

              ) {
                switch (c[2] || "d") {
                  case "d":
                  case "D":
                    a += parseInt(c[1], 10);
                    break;
                  case "w":
                  case "W":
                    a += 7 * parseInt(c[1], 10);
                    break;
                  case "m":
                  case "M":
                    (r += parseInt(c[1], 10)),
                      (a = Math.min(a, t.datepicker._getDaysInMonth(o, r)));
                    break;
                  case "y":
                  case "Y":
                    (o += parseInt(c[1], 10)),
                      (a = Math.min(a, t.datepicker._getDaysInMonth(o, r)));
                }
                c = l.exec(i);
              }
              return new Date(o, r, a);
            },
            r =
              null == i || "" === i
                ? n
                : "string" == typeof i
                ? o(i)
                : "number" == typeof i
                ? isNaN(i)
                  ? n
                  : s(i)
                : new Date(i.getTime());
          return (
            (r = r && "Invalid Date" === r.toString() ? n : r),
            r &&
              (r.setHours(0),
              r.setMinutes(0),
              r.setSeconds(0),
              r.setMilliseconds(0)),
            this._daylightSavingAdjust(r)
          );
        },
        _daylightSavingAdjust: function (t) {
          return t
            ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t)
            : null;
        },
        _setDate: function (t, e, i) {
          var n = !e,
            s = t.selectedMonth,
            o = t.selectedYear,
            r = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
          (t.selectedDay = t.currentDay = r.getDate()),
            (t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth()),
            (t.drawYear = t.selectedYear = t.currentYear = r.getFullYear()),
            (s === t.selectedMonth && o === t.selectedYear) ||
              i ||
              this._notifyChange(t),
            this._adjustInstDate(t),
            t.input && t.input.val(n ? "" : this._formatDate(t));
        },
        _getDate: function (t) {
          var e =
            !t.currentYear || (t.input && "" === t.input.val())
              ? null
              : this._daylightSavingAdjust(
                  new Date(t.currentYear, t.currentMonth, t.currentDay)
                );
          return e;
        },
        _attachHandlers: function (e) {
          var i = this._get(e, "stepMonths"),
            n = "#" + e.id.replace(/\\\\/g, "\\");
          e.dpDiv.find("[data-handler]").map(function () {
            var e = {
              prev: function () {
                t.datepicker._adjustDate(n, -i, "M");
              },
              next: function () {
                t.datepicker._adjustDate(n, +i, "M");
              },
              hide: function () {
                t.datepicker._hideDatepicker();
              },
              today: function () {
                t.datepicker._gotoToday(n);
              },
              selectDay: function () {
                return (
                  t.datepicker._selectDay(
                    n,
                    +this.getAttribute("data-month"),
                    +this.getAttribute("data-year"),
                    this
                  ),
                  !1
                );
              },
              selectMonth: function () {
                return t.datepicker._selectMonthYear(n, this, "M"), !1;
              },
              selectYear: function () {
                return t.datepicker._selectMonthYear(n, this, "Y"), !1;
              },
            };
            t(this).bind(
              this.getAttribute("data-event"),
              e[this.getAttribute("data-handler")]
            );
          });
        },
        _generateHTML: function (t) {
          var e,
            i,
            n,
            s,
            o,
            r,
            a,
            l,
            c,
            u,
            h,
            d,
            p,
            f,
            m,
            g,
            v,
            b,
            y,
            _,
            w,
            x,
            C,
            k,
            T,
            S,
            D,
            I,
            E,
            M,
            N,
            P,
            A,
            j,
            O,
            H,
            $,
            z,
            F,
            W = new Date(),
            L = this._daylightSavingAdjust(
              new Date(W.getFullYear(), W.getMonth(), W.getDate())
            ),
            R = this._get(t, "isRTL"),
            q = this._get(t, "showButtonPanel"),
            B = this._get(t, "hideIfNoPrevNext"),
            Q = this._get(t, "navigationAsDateFormat"),
            U = this._getNumberOfMonths(t),
            Y = this._get(t, "showCurrentAtPos"),
            V = this._get(t, "stepMonths"),
            K = 1 !== U[0] || 1 !== U[1],
            X = this._daylightSavingAdjust(
              t.currentDay
                ? new Date(t.currentYear, t.currentMonth, t.currentDay)
                : new Date(9999, 9, 9)
            ),
            G = this._getMinMaxDate(t, "min"),
            J = this._getMinMaxDate(t, "max"),
            Z = t.drawMonth - Y,
            tt = t.drawYear;
          if ((0 > Z && ((Z += 12), tt--), J))
            for (
              e = this._daylightSavingAdjust(
                new Date(
                  J.getFullYear(),
                  J.getMonth() - U[0] * U[1] + 1,
                  J.getDate()
                )
              ),
                e = G && G > e ? G : e;
              this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;

            )
              Z--, 0 > Z && ((Z = 11), tt--);
          for (
            t.drawMonth = Z,
              t.drawYear = tt,
              i = this._get(t, "prevText"),
              i = Q
                ? this.formatDate(
                    i,
                    this._daylightSavingAdjust(new Date(tt, Z - V, 1)),
                    this._getFormatConfig(t)
                  )
                : i,
              n = this._canAdjustMonth(t, -1, tt, Z)
                ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                  i +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (R ? "e" : "w") +
                  "'>" +
                  i +
                  "</span></a>"
                : B
                ? ""
                : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                  i +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (R ? "e" : "w") +
                  "'>" +
                  i +
                  "</span></a>",
              s = this._get(t, "nextText"),
              s = Q
                ? this.formatDate(
                    s,
                    this._daylightSavingAdjust(new Date(tt, Z + V, 1)),
                    this._getFormatConfig(t)
                  )
                : s,
              o = this._canAdjustMonth(t, 1, tt, Z)
                ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                  s +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (R ? "w" : "e") +
                  "'>" +
                  s +
                  "</span></a>"
                : B
                ? ""
                : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                  s +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (R ? "w" : "e") +
                  "'>" +
                  s +
                  "</span></a>",
              r = this._get(t, "currentText"),
              a = this._get(t, "gotoCurrent") && t.currentDay ? X : L,
              r = Q ? this.formatDate(r, a, this._getFormatConfig(t)) : r,
              l = t.inline
                ? ""
                : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                  this._get(t, "closeText") +
                  "</button>",
              c = q
                ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                  (R ? l : "") +
                  (this._isInRange(t, a)
                    ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                      r +
                      "</button>"
                    : "") +
                  (R ? "" : l) +
                  "</div>"
                : "",
              u = parseInt(this._get(t, "firstDay"), 10),
              u = isNaN(u) ? 0 : u,
              h = this._get(t, "showWeek"),
              d = this._get(t, "dayNames"),
              p = this._get(t, "dayNamesMin"),
              f = this._get(t, "monthNames"),
              m = this._get(t, "monthNamesShort"),
              g = this._get(t, "beforeShowDay"),
              v = this._get(t, "showOtherMonths"),
              b = this._get(t, "selectOtherMonths"),
              y = this._getDefaultDate(t),
              _ = "",
              x = 0;
            x < U[0];
            x++
          ) {
            for (C = "", this.maxRows = 4, k = 0; k < U[1]; k++) {
              if (
                ((T = this._daylightSavingAdjust(
                  new Date(tt, Z, t.selectedDay)
                )),
                (S = " ui-corner-all"),
                (D = ""),
                K)
              ) {
                if (((D += "<div class='ui-datepicker-group"), U[1] > 1))
                  switch (k) {
                    case 0:
                      (D += " ui-datepicker-group-first"),
                        (S = " ui-corner-" + (R ? "right" : "left"));
                      break;
                    case U[1] - 1:
                      (D += " ui-datepicker-group-last"),
                        (S = " ui-corner-" + (R ? "left" : "right"));
                      break;
                    default:
                      (D += " ui-datepicker-group-middle"), (S = "");
                  }
                D += "'>";
              }
              for (
                D +=
                  "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                  S +
                  "'>" +
                  (/all|left/.test(S) && 0 === x ? (R ? o : n) : "") +
                  (/all|right/.test(S) && 0 === x ? (R ? n : o) : "") +
                  this._generateMonthYearHeader(
                    t,
                    Z,
                    tt,
                    G,
                    J,
                    x > 0 || k > 0,
                    f,
                    m
                  ) +
                  "</div><table class='ui-datepicker-calendar'><thead><tr>",
                  I = h
                    ? "<th class='ui-datepicker-week-col'>" +
                      this._get(t, "weekHeader") +
                      "</th>"
                    : "",
                  w = 0;
                7 > w;
                w++
              )
                (E = (w + u) % 7),
                  (I +=
                    "<th scope='col'" +
                    ((w + u + 6) % 7 >= 5
                      ? " class='ui-datepicker-week-end'"
                      : "") +
                    "><span title='" +
                    d[E] +
                    "'>" +
                    p[E] +
                    "</span></th>");
              for (
                D += I + "</tr></thead><tbody>",
                  M = this._getDaysInMonth(tt, Z),
                  tt === t.selectedYear &&
                    Z === t.selectedMonth &&
                    (t.selectedDay = Math.min(t.selectedDay, M)),
                  N = (this._getFirstDayOfMonth(tt, Z) - u + 7) % 7,
                  P = Math.ceil((N + M) / 7),
                  A = K && this.maxRows > P ? this.maxRows : P,
                  this.maxRows = A,
                  j = this._daylightSavingAdjust(new Date(tt, Z, 1 - N)),
                  O = 0;
                A > O;
                O++
              ) {
                for (
                  D += "<tr>",
                    H = h
                      ? "<td class='ui-datepicker-week-col'>" +
                        this._get(t, "calculateWeek")(j) +
                        "</td>"
                      : "",
                    w = 0;
                  7 > w;
                  w++
                )
                  ($ = g
                    ? g.apply(t.input ? t.input[0] : null, [j])
                    : [!0, ""]),
                    (z = j.getMonth() !== Z),
                    (F = (z && !b) || !$[0] || (G && G > j) || (J && j > J)),
                    (H +=
                      "<td class='" +
                      ((w + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                      (z ? " ui-datepicker-other-month" : "") +
                      ((j.getTime() === T.getTime() &&
                        Z === t.selectedMonth &&
                        t._keyEvent) ||
                      (y.getTime() === j.getTime() &&
                        y.getTime() === T.getTime())
                        ? " " + this._dayOverClass
                        : "") +
                      (F
                        ? " " + this._unselectableClass + " ui-state-disabled"
                        : "") +
                      (z && !v
                        ? ""
                        : " " +
                          $[1] +
                          (j.getTime() === X.getTime()
                            ? " " + this._currentClass
                            : "") +
                          (j.getTime() === L.getTime()
                            ? " ui-datepicker-today"
                            : "")) +
                      "'" +
                      ((z && !v) || !$[2]
                        ? ""
                        : " title='" + $[2].replace(/'/g, "&#39;") + "'") +
                      (F
                        ? ""
                        : " data-handler='selectDay' data-event='click' data-month='" +
                          j.getMonth() +
                          "' data-year='" +
                          j.getFullYear() +
                          "'") +
                      ">" +
                      (z && !v
                        ? "&#xa0;"
                        : F
                        ? "<span class='ui-state-default'>" +
                          j.getDate() +
                          "</span>"
                        : "<a class='ui-state-default" +
                          (j.getTime() === L.getTime()
                            ? " ui-state-highlight"
                            : "") +
                          (j.getTime() === X.getTime()
                            ? " ui-state-active"
                            : "") +
                          (z ? " ui-priority-secondary" : "") +
                          "' href='#'>" +
                          j.getDate() +
                          "</a>") +
                      "</td>"),
                    j.setDate(j.getDate() + 1),
                    (j = this._daylightSavingAdjust(j));
                D += H + "</tr>";
              }
              Z++,
                Z > 11 && ((Z = 0), tt++),
                (D +=
                  "</tbody></table>" +
                  (K
                    ? "</div>" +
                      (U[0] > 0 && k === U[1] - 1
                        ? "<div class='ui-datepicker-row-break'></div>"
                        : "")
                    : "")),
                (C += D);
            }
            _ += C;
          }
          return (_ += c), (t._keyEvent = !1), _;
        },
        _generateMonthYearHeader: function (t, e, i, n, s, o, r, a) {
          var l,
            c,
            u,
            h,
            d,
            p,
            f,
            m,
            g = this._get(t, "changeMonth"),
            v = this._get(t, "changeYear"),
            b = this._get(t, "showMonthAfterYear"),
            y = "<div class='ui-datepicker-title'>",
            _ = "";
          if (o || !g)
            _ += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
          else {
            for (
              l = n && n.getFullYear() === i,
                c = s && s.getFullYear() === i,
                _ +=
                  "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                u = 0;
              12 > u;
              u++
            )
              (!l || u >= n.getMonth()) &&
                (!c || u <= s.getMonth()) &&
                (_ +=
                  "<option value='" +
                  u +
                  "'" +
                  (u === e ? " selected='selected'" : "") +
                  ">" +
                  a[u] +
                  "</option>");
            _ += "</select>";
          }
          if ((b || (y += _ + (!o && g && v ? "" : "&#xa0;")), !t.yearshtml))
            if (((t.yearshtml = ""), o || !v))
              y += "<span class='ui-datepicker-year'>" + i + "</span>";
            else {
              for (
                h = this._get(t, "yearRange").split(":"),
                  d = new Date().getFullYear(),
                  p = function (t) {
                    var e = t.match(/c[+\-].*/)
                      ? i + parseInt(t.substring(1), 10)
                      : t.match(/[+\-].*/)
                      ? d + parseInt(t, 10)
                      : parseInt(t, 10);
                    return isNaN(e) ? d : e;
                  },
                  f = p(h[0]),
                  m = Math.max(f, p(h[1] || "")),
                  f = n ? Math.max(f, n.getFullYear()) : f,
                  m = s ? Math.min(m, s.getFullYear()) : m,
                  t.yearshtml +=
                    "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                m >= f;
                f++
              )
                t.yearshtml +=
                  "<option value='" +
                  f +
                  "'" +
                  (f === i ? " selected='selected'" : "") +
                  ">" +
                  f +
                  "</option>";
              (t.yearshtml += "</select>"),
                (y += t.yearshtml),
                (t.yearshtml = null);
            }
          return (
            (y += this._get(t, "yearSuffix")),
            b && (y += (!o && g && v ? "" : "&#xa0;") + _),
            (y += "</div>")
          );
        },
        _adjustInstDate: function (t, e, i) {
          var n = t.drawYear + ("Y" === i ? e : 0),
            s = t.drawMonth + ("M" === i ? e : 0),
            o =
              Math.min(t.selectedDay, this._getDaysInMonth(n, s)) +
              ("D" === i ? e : 0),
            r = this._restrictMinMax(
              t,
              this._daylightSavingAdjust(new Date(n, s, o))
            );
          (t.selectedDay = r.getDate()),
            (t.drawMonth = t.selectedMonth = r.getMonth()),
            (t.drawYear = t.selectedYear = r.getFullYear()),
            ("M" === i || "Y" === i) && this._notifyChange(t);
        },
        _restrictMinMax: function (t, e) {
          var i = this._getMinMaxDate(t, "min"),
            n = this._getMinMaxDate(t, "max"),
            s = i && i > e ? i : e;
          return n && s > n ? n : s;
        },
        _notifyChange: function (t) {
          var e = this._get(t, "onChangeMonthYear");
          e &&
            e.apply(t.input ? t.input[0] : null, [
              t.selectedYear,
              t.selectedMonth + 1,
              t,
            ]);
        },
        _getNumberOfMonths: function (t) {
          var e = this._get(t, "numberOfMonths");
          return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
        },
        _getMinMaxDate: function (t, e) {
          return this._determineDate(t, this._get(t, e + "Date"), null);
        },
        _getDaysInMonth: function (t, e) {
          return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
        },
        _getFirstDayOfMonth: function (t, e) {
          return new Date(t, e, 1).getDay();
        },
        _canAdjustMonth: function (t, e, i, n) {
          var s = this._getNumberOfMonths(t),
            o = this._daylightSavingAdjust(
              new Date(i, n + (0 > e ? e : s[0] * s[1]), 1)
            );
          return (
            0 > e &&
              o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
            this._isInRange(t, o)
          );
        },
        _isInRange: function (t, e) {
          var i,
            n,
            s = this._getMinMaxDate(t, "min"),
            o = this._getMinMaxDate(t, "max"),
            r = null,
            a = null,
            l = this._get(t, "yearRange");
          return (
            l &&
              ((i = l.split(":")),
              (n = new Date().getFullYear()),
              (r = parseInt(i[0], 10)),
              (a = parseInt(i[1], 10)),
              i[0].match(/[+\-].*/) && (r += n),
              i[1].match(/[+\-].*/) && (a += n)),
            (!s || e.getTime() >= s.getTime()) &&
              (!o || e.getTime() <= o.getTime()) &&
              (!r || e.getFullYear() >= r) &&
              (!a || e.getFullYear() <= a)
          );
        },
        _getFormatConfig: function (t) {
          var e = this._get(t, "shortYearCutoff");
          return (
            (e =
              "string" != typeof e
                ? e
                : (new Date().getFullYear() % 100) + parseInt(e, 10)),
            {
              shortYearCutoff: e,
              dayNamesShort: this._get(t, "dayNamesShort"),
              dayNames: this._get(t, "dayNames"),
              monthNamesShort: this._get(t, "monthNamesShort"),
              monthNames: this._get(t, "monthNames"),
            }
          );
        },
        _formatDate: function (t, e, i, n) {
          e ||
            ((t.currentDay = t.selectedDay),
            (t.currentMonth = t.selectedMonth),
            (t.currentYear = t.selectedYear));
          var s = e
            ? "object" == typeof e
              ? e
              : this._daylightSavingAdjust(new Date(n, i, e))
            : this._daylightSavingAdjust(
                new Date(t.currentYear, t.currentMonth, t.currentDay)
              );
          return this.formatDate(
            this._get(t, "dateFormat"),
            s,
            this._getFormatConfig(t)
          );
        },
      }),
      (t.fn.datepicker = function (e) {
        if (!this.length) return this;
        t.datepicker.initialized ||
          (t(document).mousedown(t.datepicker._checkExternalClick),
          (t.datepicker.initialized = !0)),
          0 === t("#" + t.datepicker._mainDivId).length &&
            t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e ||
          ("isDisabled" !== e && "getDate" !== e && "widget" !== e)
          ? "option" === e &&
            2 === arguments.length &&
            "string" == typeof arguments[1]
            ? t.datepicker["_" + e + "Datepicker"].apply(
                t.datepicker,
                [this[0]].concat(i)
              )
            : this.each(function () {
                "string" == typeof e
                  ? t.datepicker["_" + e + "Datepicker"].apply(
                      t.datepicker,
                      [this].concat(i)
                    )
                  : t.datepicker._attachDatepicker(this, e);
              })
          : t.datepicker["_" + e + "Datepicker"].apply(
              t.datepicker,
              [this[0]].concat(i)
            );
      }),
      (t.datepicker = new i()),
      (t.datepicker.initialized = !1),
      (t.datepicker.uuid = new Date().getTime()),
      (t.datepicker.version = "1.11.4"),
      t.datepicker
    );
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./widget"], t)
      : t(jQuery);
  })(function (t) {
    var e = !1;
    return (
      t(document).mouseup(function () {
        e = !1;
      }),
      t.widget("ui.mouse", {
        version: "1.11.4",
        options: {
          cancel: "input,textarea,button,select,option",
          distance: 1,
          delay: 0,
        },
        _mouseInit: function () {
          var e = this;
          this.element
            .bind("mousedown." + this.widgetName, function (t) {
              return e._mouseDown(t);
            })
            .bind("click." + this.widgetName, function (i) {
              return !0 ===
                t.data(i.target, e.widgetName + ".preventClickEvent")
                ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                  i.stopImmediatePropagation(),
                  !1)
                : void 0;
            }),
            (this.started = !1);
        },
        _mouseDestroy: function () {
          this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate &&
              this.document
                .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function (i) {
          if (!e) {
            (this._mouseMoved = !1),
              this._mouseStarted && this._mouseUp(i),
              (this._mouseDownEvent = i);
            var n = this,
              s = 1 === i.which,
              o =
                "string" == typeof this.options.cancel && i.target.nodeName
                  ? t(i.target).closest(this.options.cancel).length
                  : !1;
            return s && !o && this._mouseCapture(i)
              ? ((this.mouseDelayMet = !this.options.delay),
                this.mouseDelayMet ||
                  (this._mouseDelayTimer = setTimeout(function () {
                    n.mouseDelayMet = !0;
                  }, this.options.delay)),
                this._mouseDistanceMet(i) &&
                this._mouseDelayMet(i) &&
                ((this._mouseStarted = this._mouseStart(i) !== !1),
                !this._mouseStarted)
                  ? (i.preventDefault(), !0)
                  : (!0 ===
                      t.data(
                        i.target,
                        this.widgetName + ".preventClickEvent"
                      ) &&
                      t.removeData(
                        i.target,
                        this.widgetName + ".preventClickEvent"
                      ),
                    (this._mouseMoveDelegate = function (t) {
                      return n._mouseMove(t);
                    }),
                    (this._mouseUpDelegate = function (t) {
                      return n._mouseUp(t);
                    }),
                    this.document
                      .bind(
                        "mousemove." + this.widgetName,
                        this._mouseMoveDelegate
                      )
                      .bind(
                        "mouseup." + this.widgetName,
                        this._mouseUpDelegate
                      ),
                    i.preventDefault(),
                    (e = !0),
                    !0))
              : !0;
          }
        },
        _mouseMove: function (e) {
          if (this._mouseMoved) {
            if (
              t.ui.ie &&
              (!document.documentMode || document.documentMode < 9) &&
              !e.button
            )
              return this._mouseUp(e);
            if (!e.which) return this._mouseUp(e);
          }
          return (
            (e.which || e.button) && (this._mouseMoved = !0),
            this._mouseStarted
              ? (this._mouseDrag(e), e.preventDefault())
              : (this._mouseDistanceMet(e) &&
                  this._mouseDelayMet(e) &&
                  ((this._mouseStarted =
                    this._mouseStart(this._mouseDownEvent, e) !== !1),
                  this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
                !this._mouseStarted)
          );
        },
        _mouseUp: function (i) {
          return (
            this.document
              .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted &&
              ((this._mouseStarted = !1),
              i.target === this._mouseDownEvent.target &&
                t.data(i.target, this.widgetName + ".preventClickEvent", !0),
              this._mouseStop(i)),
            (e = !1),
            !1
          );
        },
        _mouseDistanceMet: function (t) {
          return (
            Math.max(
              Math.abs(this._mouseDownEvent.pageX - t.pageX),
              Math.abs(this._mouseDownEvent.pageY - t.pageY)
            ) >= this.options.distance
          );
        },
        _mouseDelayMet: function () {
          return this.mouseDelayMet;
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
          return !0;
        },
      })
    );
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./core", "./mouse", "./widget"], t)
      : t(jQuery);
  })(function (t) {
    return (
      t.widget("ui.draggable", t.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "drag",
        options: {
          addClasses: !0,
          appendTo: "parent",
          axis: !1,
          connectToSortable: !1,
          containment: !1,
          cursor: "auto",
          cursorAt: !1,
          grid: !1,
          handle: !1,
          helper: "original",
          iframeFix: !1,
          opacity: !1,
          refreshPositions: !1,
          revert: !1,
          revertDuration: 500,
          scope: "default",
          scroll: !0,
          scrollSensitivity: 20,
          scrollSpeed: 20,
          snap: !1,
          snapMode: "both",
          snapTolerance: 20,
          stack: !1,
          zIndex: !1,
          drag: null,
          start: null,
          stop: null,
        },
        _create: function () {
          "original" === this.options.helper && this._setPositionRelative(),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled &&
              this.element.addClass("ui-draggable-disabled"),
            this._setHandleClassName(),
            this._mouseInit();
        },
        _setOption: function (t, e) {
          this._super(t, e),
            "handle" === t &&
              (this._removeHandleClassName(), this._setHandleClassName());
        },
        _destroy: function () {
          return (this.helper || this.element).is(".ui-draggable-dragging")
            ? void (this.destroyOnClear = !0)
            : (this.element.removeClass(
                "ui-draggable ui-draggable-dragging ui-draggable-disabled"
              ),
              this._removeHandleClassName(),
              void this._mouseDestroy());
        },
        _mouseCapture: function (e) {
          var i = this.options;
          return (
            this._blurActiveElement(e),
            this.helper ||
            i.disabled ||
            t(e.target).closest(".ui-resizable-handle").length > 0
              ? !1
              : ((this.handle = this._getHandle(e)),
                this.handle
                  ? (this._blockFrames(
                      i.iframeFix === !0 ? "iframe" : i.iframeFix
                    ),
                    !0)
                  : !1)
          );
        },
        _blockFrames: function (e) {
          this.iframeBlocks = this.document.find(e).map(function () {
            var e = t(this);
            return t("<div>")
              .css("position", "absolute")
              .appendTo(e.parent())
              .outerWidth(e.outerWidth())
              .outerHeight(e.outerHeight())
              .offset(e.offset())[0];
          });
        },
        _unblockFrames: function () {
          this.iframeBlocks &&
            (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _blurActiveElement: function (e) {
          var i = this.document[0];
          if (this.handleElement.is(e.target))
            try {
              i.activeElement &&
                "body" !== i.activeElement.nodeName.toLowerCase() &&
                t(i.activeElement).blur();
            } catch (n) {}
        },
        _mouseStart: function (e) {
          var i = this.options;
          return (
            (this.helper = this._createHelper(e)),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            t.ui.ddmanager && (t.ui.ddmanager.current = this),
            this._cacheMargins(),
            (this.cssPosition = this.helper.css("position")),
            (this.scrollParent = this.helper.scrollParent(!0)),
            (this.offsetParent = this.helper.offsetParent()),
            (this.hasFixedAncestor =
              this.helper.parents().filter(function () {
                return "fixed" === t(this).css("position");
              }).length > 0),
            (this.positionAbs = this.element.offset()),
            this._refreshOffsets(e),
            (this.originalPosition = this.position = this._generatePosition(
              e,
              !1
            )),
            (this.originalPageX = e.pageX),
            (this.originalPageY = e.pageY),
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            this._setContainment(),
            this._trigger("start", e) === !1
              ? (this._clear(), !1)
              : (this._cacheHelperProportions(),
                t.ui.ddmanager &&
                  !i.dropBehaviour &&
                  t.ui.ddmanager.prepareOffsets(this, e),
                this._normalizeRightBottom(),
                this._mouseDrag(e, !0),
                t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
                !0)
          );
        },
        _refreshOffsets: function (t) {
          (this.offset = {
            top: this.positionAbs.top - this.margins.top,
            left: this.positionAbs.left - this.margins.left,
            scroll: !1,
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset(),
          }),
            (this.offset.click = {
              left: t.pageX - this.offset.left,
              top: t.pageY - this.offset.top,
            });
        },
        _mouseDrag: function (e, i) {
          if (
            (this.hasFixedAncestor &&
              (this.offset.parent = this._getParentOffset()),
            (this.position = this._generatePosition(e, !0)),
            (this.positionAbs = this._convertPositionTo("absolute")),
            !i)
          ) {
            var n = this._uiHash();
            if (this._trigger("drag", e, n) === !1)
              return this._mouseUp({}), !1;
            this.position = n.position;
          }
          return (
            (this.helper[0].style.left = this.position.left + "px"),
            (this.helper[0].style.top = this.position.top + "px"),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            !1
          );
        },
        _mouseStop: function (e) {
          var i = this,
            n = !1;
          return (
            t.ui.ddmanager &&
              !this.options.dropBehaviour &&
              (n = t.ui.ddmanager.drop(this, e)),
            this.dropped && ((n = this.dropped), (this.dropped = !1)),
            ("invalid" === this.options.revert && !n) ||
            ("valid" === this.options.revert && n) ||
            this.options.revert === !0 ||
            (t.isFunction(this.options.revert) &&
              this.options.revert.call(this.element, n))
              ? t(this.helper).animate(
                  this.originalPosition,
                  parseInt(this.options.revertDuration, 10),
                  function () {
                    i._trigger("stop", e) !== !1 && i._clear();
                  }
                )
              : this._trigger("stop", e) !== !1 && this._clear(),
            !1
          );
        },
        _mouseUp: function (e) {
          return (
            this._unblockFrames(),
            t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
            this.handleElement.is(e.target) && this.element.focus(),
            t.ui.mouse.prototype._mouseUp.call(this, e)
          );
        },
        cancel: function () {
          return (
            this.helper.is(".ui-draggable-dragging")
              ? this._mouseUp({})
              : this._clear(),
            this
          );
        },
        _getHandle: function (e) {
          return this.options.handle
            ? !!t(e.target).closest(this.element.find(this.options.handle))
                .length
            : !0;
        },
        _setHandleClassName: function () {
          (this.handleElement = this.options.handle
            ? this.element.find(this.options.handle)
            : this.element),
            this.handleElement.addClass("ui-draggable-handle");
        },
        _removeHandleClassName: function () {
          this.handleElement.removeClass("ui-draggable-handle");
        },
        _createHelper: function (e) {
          var i = this.options,
            n = t.isFunction(i.helper),
            s = n
              ? t(i.helper.apply(this.element[0], [e]))
              : "clone" === i.helper
              ? this.element.clone().removeAttr("id")
              : this.element;
          return (
            s.parents("body").length ||
              s.appendTo(
                "parent" === i.appendTo
                  ? this.element[0].parentNode
                  : i.appendTo
              ),
            n && s[0] === this.element[0] && this._setPositionRelative(),
            s[0] === this.element[0] ||
              /(fixed|absolute)/.test(s.css("position")) ||
              s.css("position", "absolute"),
            s
          );
        },
        _setPositionRelative: function () {
          /^(?:r|a|f)/.test(this.element.css("position")) ||
            (this.element[0].style.position = "relative");
        },
        _adjustOffsetFromHelper: function (e) {
          "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
            "left" in e &&
              (this.offset.click.left = e.left + this.margins.left),
            "right" in e &&
              (this.offset.click.left =
                this.helperProportions.width - e.right + this.margins.left),
            "top" in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom" in e &&
              (this.offset.click.top =
                this.helperProportions.height - e.bottom + this.margins.top);
        },
        _isRootNode: function (t) {
          return /(html|body)/i.test(t.tagName) || t === this.document[0];
        },
        _getParentOffset: function () {
          var e = this.offsetParent.offset(),
            i = this.document[0];
          return (
            "absolute" === this.cssPosition &&
              this.scrollParent[0] !== i &&
              t.contains(this.scrollParent[0], this.offsetParent[0]) &&
              ((e.left += this.scrollParent.scrollLeft()),
              (e.top += this.scrollParent.scrollTop())),
            this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }),
            {
              top:
                e.top +
                (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
              left:
                e.left +
                (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
            }
          );
        },
        _getRelativeOffset: function () {
          if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
          var t = this.element.position(),
            e = this._isRootNode(this.scrollParent[0]);
          return {
            top:
              t.top -
              (parseInt(this.helper.css("top"), 10) || 0) +
              (e ? 0 : this.scrollParent.scrollTop()),
            left:
              t.left -
              (parseInt(this.helper.css("left"), 10) || 0) +
              (e ? 0 : this.scrollParent.scrollLeft()),
          };
        },
        _cacheMargins: function () {
          this.margins = {
            left: parseInt(this.element.css("marginLeft"), 10) || 0,
            top: parseInt(this.element.css("marginTop"), 10) || 0,
            right: parseInt(this.element.css("marginRight"), 10) || 0,
            bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
          };
        },
        _cacheHelperProportions: function () {
          this.helperProportions = {
            width: this.helper.outerWidth(),
            height: this.helper.outerHeight(),
          };
        },
        _setContainment: function () {
          var e,
            i,
            n,
            s = this.options,
            o = this.document[0];
          return (
            (this.relativeContainer = null),
            s.containment
              ? "window" === s.containment
                ? void (this.containment = [
                    t(window).scrollLeft() -
                      this.offset.relative.left -
                      this.offset.parent.left,
                    t(window).scrollTop() -
                      this.offset.relative.top -
                      this.offset.parent.top,
                    t(window).scrollLeft() +
                      t(window).width() -
                      this.helperProportions.width -
                      this.margins.left,
                    t(window).scrollTop() +
                      (t(window).height() || o.body.parentNode.scrollHeight) -
                      this.helperProportions.height -
                      this.margins.top,
                  ])
                : "document" === s.containment
                ? void (this.containment = [
                    0,
                    0,
                    t(o).width() -
                      this.helperProportions.width -
                      this.margins.left,
                    (t(o).height() || o.body.parentNode.scrollHeight) -
                      this.helperProportions.height -
                      this.margins.top,
                  ])
                : s.containment.constructor === Array
                ? void (this.containment = s.containment)
                : ("parent" === s.containment &&
                    (s.containment = this.helper[0].parentNode),
                  (i = t(s.containment)),
                  (n = i[0]),
                  void (
                    n &&
                    ((e = /(scroll|auto)/.test(i.css("overflow"))),
                    (this.containment = [
                      (parseInt(i.css("borderLeftWidth"), 10) || 0) +
                        (parseInt(i.css("paddingLeft"), 10) || 0),
                      (parseInt(i.css("borderTopWidth"), 10) || 0) +
                        (parseInt(i.css("paddingTop"), 10) || 0),
                      (e
                        ? Math.max(n.scrollWidth, n.offsetWidth)
                        : n.offsetWidth) -
                        (parseInt(i.css("borderRightWidth"), 10) || 0) -
                        (parseInt(i.css("paddingRight"), 10) || 0) -
                        this.helperProportions.width -
                        this.margins.left -
                        this.margins.right,
                      (e
                        ? Math.max(n.scrollHeight, n.offsetHeight)
                        : n.offsetHeight) -
                        (parseInt(i.css("borderBottomWidth"), 10) || 0) -
                        (parseInt(i.css("paddingBottom"), 10) || 0) -
                        this.helperProportions.height -
                        this.margins.top -
                        this.margins.bottom,
                    ]),
                    (this.relativeContainer = i))
                  ))
              : void (this.containment = null)
          );
        },
        _convertPositionTo: function (t, e) {
          e || (e = this.position);
          var i = "absolute" === t ? 1 : -1,
            n = this._isRootNode(this.scrollParent[0]);
          return {
            top:
              e.top +
              this.offset.relative.top * i +
              this.offset.parent.top * i -
              ("fixed" === this.cssPosition
                ? -this.offset.scroll.top
                : n
                ? 0
                : this.offset.scroll.top) *
                i,
            left:
              e.left +
              this.offset.relative.left * i +
              this.offset.parent.left * i -
              ("fixed" === this.cssPosition
                ? -this.offset.scroll.left
                : n
                ? 0
                : this.offset.scroll.left) *
                i,
          };
        },
        _generatePosition: function (t, e) {
          var i,
            n,
            s,
            o,
            r = this.options,
            a = this._isRootNode(this.scrollParent[0]),
            l = t.pageX,
            c = t.pageY;
          return (
            (a && this.offset.scroll) ||
              (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft(),
              }),
            e &&
              (this.containment &&
                (this.relativeContainer
                  ? ((n = this.relativeContainer.offset()),
                    (i = [
                      this.containment[0] + n.left,
                      this.containment[1] + n.top,
                      this.containment[2] + n.left,
                      this.containment[3] + n.top,
                    ]))
                  : (i = this.containment),
                t.pageX - this.offset.click.left < i[0] &&
                  (l = i[0] + this.offset.click.left),
                t.pageY - this.offset.click.top < i[1] &&
                  (c = i[1] + this.offset.click.top),
                t.pageX - this.offset.click.left > i[2] &&
                  (l = i[2] + this.offset.click.left),
                t.pageY - this.offset.click.top > i[3] &&
                  (c = i[3] + this.offset.click.top)),
              r.grid &&
                ((s = r.grid[1]
                  ? this.originalPageY +
                    Math.round((c - this.originalPageY) / r.grid[1]) * r.grid[1]
                  : this.originalPageY),
                (c = i
                  ? s - this.offset.click.top >= i[1] ||
                    s - this.offset.click.top > i[3]
                    ? s
                    : s - this.offset.click.top >= i[1]
                    ? s - r.grid[1]
                    : s + r.grid[1]
                  : s),
                (o = r.grid[0]
                  ? this.originalPageX +
                    Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0]
                  : this.originalPageX),
                (l = i
                  ? o - this.offset.click.left >= i[0] ||
                    o - this.offset.click.left > i[2]
                    ? o
                    : o - this.offset.click.left >= i[0]
                    ? o - r.grid[0]
                    : o + r.grid[0]
                  : o)),
              "y" === r.axis && (l = this.originalPageX),
              "x" === r.axis && (c = this.originalPageY)),
            {
              top:
                c -
                this.offset.click.top -
                this.offset.relative.top -
                this.offset.parent.top +
                ("fixed" === this.cssPosition
                  ? -this.offset.scroll.top
                  : a
                  ? 0
                  : this.offset.scroll.top),
              left:
                l -
                this.offset.click.left -
                this.offset.relative.left -
                this.offset.parent.left +
                ("fixed" === this.cssPosition
                  ? -this.offset.scroll.left
                  : a
                  ? 0
                  : this.offset.scroll.left),
            }
          );
        },
        _clear: function () {
          this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] === this.element[0] ||
              this.cancelHelperRemoval ||
              this.helper.remove(),
            (this.helper = null),
            (this.cancelHelperRemoval = !1),
            this.destroyOnClear && this.destroy();
        },
        _normalizeRightBottom: function () {
          "y" !== this.options.axis &&
            "auto" !== this.helper.css("right") &&
            (this.helper.width(this.helper.width()),
            this.helper.css("right", "auto")),
            "x" !== this.options.axis &&
              "auto" !== this.helper.css("bottom") &&
              (this.helper.height(this.helper.height()),
              this.helper.css("bottom", "auto"));
        },
        _trigger: function (e, i, n) {
          return (
            (n = n || this._uiHash()),
            t.ui.plugin.call(this, e, [i, n, this], !0),
            /^(drag|start|stop)/.test(e) &&
              ((this.positionAbs = this._convertPositionTo("absolute")),
              (n.offset = this.positionAbs)),
            t.Widget.prototype._trigger.call(this, e, i, n)
          );
        },
        plugins: {},
        _uiHash: function () {
          return {
            helper: this.helper,
            position: this.position,
            originalPosition: this.originalPosition,
            offset: this.positionAbs,
          };
        },
      }),
      t.ui.plugin.add("draggable", "connectToSortable", {
        start: function (e, i, n) {
          var s = t.extend({}, i, { item: n.element });
          (n.sortables = []),
            t(n.options.connectToSortable).each(function () {
              var i = t(this).sortable("instance");
              i &&
                !i.options.disabled &&
                (n.sortables.push(i),
                i.refreshPositions(),
                i._trigger("activate", e, s));
            });
        },
        stop: function (e, i, n) {
          var s = t.extend({}, i, { item: n.element });
          (n.cancelHelperRemoval = !1),
            t.each(n.sortables, function () {
              var t = this;
              t.isOver
                ? ((t.isOver = 0),
                  (n.cancelHelperRemoval = !0),
                  (t.cancelHelperRemoval = !1),
                  (t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left"),
                  }),
                  t._mouseStop(e),
                  (t.options.helper = t.options._helper))
                : ((t.cancelHelperRemoval = !0),
                  t._trigger("deactivate", e, s));
            });
        },
        drag: function (e, i, n) {
          t.each(n.sortables, function () {
            var s = !1,
              o = this;
            (o.positionAbs = n.positionAbs),
              (o.helperProportions = n.helperProportions),
              (o.offset.click = n.offset.click),
              o._intersectsWith(o.containerCache) &&
                ((s = !0),
                t.each(n.sortables, function () {
                  return (
                    (this.positionAbs = n.positionAbs),
                    (this.helperProportions = n.helperProportions),
                    (this.offset.click = n.offset.click),
                    this !== o &&
                      this._intersectsWith(this.containerCache) &&
                      t.contains(o.element[0], this.element[0]) &&
                      (s = !1),
                    s
                  );
                })),
              s
                ? (o.isOver ||
                    ((o.isOver = 1),
                    (n._parent = i.helper.parent()),
                    (o.currentItem = i.helper
                      .appendTo(o.element)
                      .data("ui-sortable-item", !0)),
                    (o.options._helper = o.options.helper),
                    (o.options.helper = function () {
                      return i.helper[0];
                    }),
                    (e.target = o.currentItem[0]),
                    o._mouseCapture(e, !0),
                    o._mouseStart(e, !0, !0),
                    (o.offset.click.top = n.offset.click.top),
                    (o.offset.click.left = n.offset.click.left),
                    (o.offset.parent.left -=
                      n.offset.parent.left - o.offset.parent.left),
                    (o.offset.parent.top -=
                      n.offset.parent.top - o.offset.parent.top),
                    n._trigger("toSortable", e),
                    (n.dropped = o.element),
                    t.each(n.sortables, function () {
                      this.refreshPositions();
                    }),
                    (n.currentItem = n.element),
                    (o.fromOutside = n)),
                  o.currentItem && (o._mouseDrag(e), (i.position = o.position)))
                : o.isOver &&
                  ((o.isOver = 0),
                  (o.cancelHelperRemoval = !0),
                  (o.options._revert = o.options.revert),
                  (o.options.revert = !1),
                  o._trigger("out", e, o._uiHash(o)),
                  o._mouseStop(e, !0),
                  (o.options.revert = o.options._revert),
                  (o.options.helper = o.options._helper),
                  o.placeholder && o.placeholder.remove(),
                  i.helper.appendTo(n._parent),
                  n._refreshOffsets(e),
                  (i.position = n._generatePosition(e, !0)),
                  n._trigger("fromSortable", e),
                  (n.dropped = !1),
                  t.each(n.sortables, function () {
                    this.refreshPositions();
                  }));
          });
        },
      }),
      t.ui.plugin.add("draggable", "cursor", {
        start: function (e, i, n) {
          var s = t("body"),
            o = n.options;
          s.css("cursor") && (o._cursor = s.css("cursor")),
            s.css("cursor", o.cursor);
        },
        stop: function (e, i, n) {
          var s = n.options;
          s._cursor && t("body").css("cursor", s._cursor);
        },
      }),
      t.ui.plugin.add("draggable", "opacity", {
        start: function (e, i, n) {
          var s = t(i.helper),
            o = n.options;
          s.css("opacity") && (o._opacity = s.css("opacity")),
            s.css("opacity", o.opacity);
        },
        stop: function (e, i, n) {
          var s = n.options;
          s._opacity && t(i.helper).css("opacity", s._opacity);
        },
      }),
      t.ui.plugin.add("draggable", "scroll", {
        start: function (t, e, i) {
          i.scrollParentNotHidden ||
            (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
            i.scrollParentNotHidden[0] !== i.document[0] &&
              "HTML" !== i.scrollParentNotHidden[0].tagName &&
              (i.overflowOffset = i.scrollParentNotHidden.offset());
        },
        drag: function (e, i, n) {
          var s = n.options,
            o = !1,
            r = n.scrollParentNotHidden[0],
            a = n.document[0];
          r !== a && "HTML" !== r.tagName
            ? ((s.axis && "x" === s.axis) ||
                (n.overflowOffset.top + r.offsetHeight - e.pageY <
                s.scrollSensitivity
                  ? (r.scrollTop = o = r.scrollTop + s.scrollSpeed)
                  : e.pageY - n.overflowOffset.top < s.scrollSensitivity &&
                    (r.scrollTop = o = r.scrollTop - s.scrollSpeed)),
              (s.axis && "y" === s.axis) ||
                (n.overflowOffset.left + r.offsetWidth - e.pageX <
                s.scrollSensitivity
                  ? (r.scrollLeft = o = r.scrollLeft + s.scrollSpeed)
                  : e.pageX - n.overflowOffset.left < s.scrollSensitivity &&
                    (r.scrollLeft = o = r.scrollLeft - s.scrollSpeed)))
            : ((s.axis && "x" === s.axis) ||
                (e.pageY - t(a).scrollTop() < s.scrollSensitivity
                  ? (o = t(a).scrollTop(t(a).scrollTop() - s.scrollSpeed))
                  : t(window).height() - (e.pageY - t(a).scrollTop()) <
                      s.scrollSensitivity &&
                    (o = t(a).scrollTop(t(a).scrollTop() + s.scrollSpeed))),
              (s.axis && "y" === s.axis) ||
                (e.pageX - t(a).scrollLeft() < s.scrollSensitivity
                  ? (o = t(a).scrollLeft(t(a).scrollLeft() - s.scrollSpeed))
                  : t(window).width() - (e.pageX - t(a).scrollLeft()) <
                      s.scrollSensitivity &&
                    (o = t(a).scrollLeft(t(a).scrollLeft() + s.scrollSpeed)))),
            o !== !1 &&
              t.ui.ddmanager &&
              !s.dropBehaviour &&
              t.ui.ddmanager.prepareOffsets(n, e);
        },
      }),
      t.ui.plugin.add("draggable", "snap", {
        start: function (e, i, n) {
          var s = n.options;
          (n.snapElements = []),
            t(
              s.snap.constructor !== String
                ? s.snap.items || ":data(ui-draggable)"
                : s.snap
            ).each(function () {
              var e = t(this),
                i = e.offset();
              this !== n.element[0] &&
                n.snapElements.push({
                  item: this,
                  width: e.outerWidth(),
                  height: e.outerHeight(),
                  top: i.top,
                  left: i.left,
                });
            });
        },
        drag: function (e, i, n) {
          var s,
            o,
            r,
            a,
            l,
            c,
            u,
            h,
            d,
            p,
            f = n.options,
            m = f.snapTolerance,
            g = i.offset.left,
            v = g + n.helperProportions.width,
            b = i.offset.top,
            y = b + n.helperProportions.height;
          for (d = n.snapElements.length - 1; d >= 0; d--)
            (l = n.snapElements[d].left - n.margins.left),
              (c = l + n.snapElements[d].width),
              (u = n.snapElements[d].top - n.margins.top),
              (h = u + n.snapElements[d].height),
              l - m > v ||
              g > c + m ||
              u - m > y ||
              b > h + m ||
              !t.contains(
                n.snapElements[d].item.ownerDocument,
                n.snapElements[d].item
              )
                ? (n.snapElements[d].snapping &&
                    n.options.snap.release &&
                    n.options.snap.release.call(
                      n.element,
                      e,
                      t.extend(n._uiHash(), {
                        snapItem: n.snapElements[d].item,
                      })
                    ),
                  (n.snapElements[d].snapping = !1))
                : ("inner" !== f.snapMode &&
                    ((s = Math.abs(u - y) <= m),
                    (o = Math.abs(h - b) <= m),
                    (r = Math.abs(l - v) <= m),
                    (a = Math.abs(c - g) <= m),
                    s &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: u - n.helperProportions.height,
                        left: 0,
                      }).top),
                    o &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: h,
                        left: 0,
                      }).top),
                    r &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: l - n.helperProportions.width,
                      }).left),
                    a &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: c,
                      }).left)),
                  (p = s || o || r || a),
                  "outer" !== f.snapMode &&
                    ((s = Math.abs(u - b) <= m),
                    (o = Math.abs(h - y) <= m),
                    (r = Math.abs(l - g) <= m),
                    (a = Math.abs(c - v) <= m),
                    s &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: u,
                        left: 0,
                      }).top),
                    o &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: h - n.helperProportions.height,
                        left: 0,
                      }).top),
                    r &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: l,
                      }).left),
                    a &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: c - n.helperProportions.width,
                      }).left)),
                  !n.snapElements[d].snapping &&
                    (s || o || r || a || p) &&
                    n.options.snap.snap &&
                    n.options.snap.snap.call(
                      n.element,
                      e,
                      t.extend(n._uiHash(), {
                        snapItem: n.snapElements[d].item,
                      })
                    ),
                  (n.snapElements[d].snapping = s || o || r || a || p));
        },
      }),
      t.ui.plugin.add("draggable", "stack", {
        start: function (e, i, n) {
          var s,
            o = n.options,
            r = t.makeArray(t(o.stack)).sort(function (e, i) {
              return (
                (parseInt(t(e).css("zIndex"), 10) || 0) -
                (parseInt(t(i).css("zIndex"), 10) || 0)
              );
            });
          r.length &&
            ((s = parseInt(t(r[0]).css("zIndex"), 10) || 0),
            t(r).each(function (e) {
              t(this).css("zIndex", s + e);
            }),
            this.css("zIndex", s + r.length));
        },
      }),
      t.ui.plugin.add("draggable", "zIndex", {
        start: function (e, i, n) {
          var s = t(i.helper),
            o = n.options;
          s.css("zIndex") && (o._zIndex = s.css("zIndex")),
            s.css("zIndex", o.zIndex);
        },
        stop: function (e, i, n) {
          var s = n.options;
          s._zIndex && t(i.helper).css("zIndex", s._zIndex);
        },
      }),
      t.ui.draggable
    );
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./core", "./mouse", "./widget"], t)
      : t(jQuery);
  })(function (t) {
    return (
      t.widget("ui.resizable", t.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "resize",
        options: {
          alsoResize: !1,
          animate: !1,
          animateDuration: "slow",
          animateEasing: "swing",
          aspectRatio: !1,
          autoHide: !1,
          containment: !1,
          ghost: !1,
          grid: !1,
          handles: "e,s,se",
          helper: !1,
          maxHeight: null,
          maxWidth: null,
          minHeight: 10,
          minWidth: 10,
          zIndex: 90,
          resize: null,
          start: null,
          stop: null,
        },
        _num: function (t) {
          return parseInt(t, 10) || 0;
        },
        _isNumber: function (t) {
          return !isNaN(parseInt(t, 10));
        },
        _hasScroll: function (e, i) {
          if ("hidden" === t(e).css("overflow")) return !1;
          var n = i && "left" === i ? "scrollLeft" : "scrollTop",
            s = !1;
          return e[n] > 0 ? !0 : ((e[n] = 1), (s = e[n] > 0), (e[n] = 0), s);
        },
        _create: function () {
          var e,
            i,
            n,
            s,
            o,
            r = this,
            a = this.options;
          if (
            (this.element.addClass("ui-resizable"),
            t.extend(this, {
              _aspectRatio: !!a.aspectRatio,
              aspectRatio: a.aspectRatio,
              originalElement: this.element,
              _proportionallyResizeElements: [],
              _helper:
                a.helper || a.ghost || a.animate
                  ? a.helper || "ui-resizable-helper"
                  : null,
            }),
            this.element[0].nodeName.match(
              /^(canvas|textarea|input|select|button|img)$/i
            ) &&
              (this.element.wrap(
                t(
                  "<div class='ui-wrapper' style='overflow: hidden;'></div>"
                ).css({
                  position: this.element.css("position"),
                  width: this.element.outerWidth(),
                  height: this.element.outerHeight(),
                  top: this.element.css("top"),
                  left: this.element.css("left"),
                })
              ),
              (this.element = this.element
                .parent()
                .data("ui-resizable", this.element.resizable("instance"))),
              (this.elementIsWrapper = !0),
              this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
              }),
              this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
              }),
              (this.originalResizeStyle = this.originalElement.css("resize")),
              this.originalElement.css("resize", "none"),
              this._proportionallyResizeElements.push(
                this.originalElement.css({
                  position: "static",
                  zoom: 1,
                  display: "block",
                })
              ),
              this.originalElement.css({
                margin: this.originalElement.css("margin"),
              }),
              this._proportionallyResize()),
            (this.handles =
              a.handles ||
              (t(".ui-resizable-handle", this.element).length
                ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw",
                  }
                : "e,s,se")),
            (this._handles = t()),
            this.handles.constructor === String)
          )
            for (
              "all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                e = this.handles.split(","),
                this.handles = {},
                i = 0;
              i < e.length;
              i++
            )
              (n = t.trim(e[i])),
                (o = "ui-resizable-" + n),
                (s = t("<div class='ui-resizable-handle " + o + "'></div>")),
                s.css({ zIndex: a.zIndex }),
                "se" === n &&
                  s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
                (this.handles[n] = ".ui-resizable-" + n),
                this.element.append(s);
          (this._renderAxis = function (e) {
            var i, n, s, o;
            e = e || this.element;
            for (i in this.handles)
              this.handles[i].constructor === String
                ? (this.handles[i] = this.element
                    .children(this.handles[i])
                    .first()
                    .show())
                : (this.handles[i].jquery || this.handles[i].nodeType) &&
                  ((this.handles[i] = t(this.handles[i])),
                  this._on(this.handles[i], { mousedown: r._mouseDown })),
                this.elementIsWrapper &&
                  this.originalElement[0].nodeName.match(
                    /^(textarea|input|select|button)$/i
                  ) &&
                  ((n = t(this.handles[i], this.element)),
                  (o = /sw|ne|nw|se|n|s/.test(i)
                    ? n.outerHeight()
                    : n.outerWidth()),
                  (s = [
                    "padding",
                    /ne|nw|n/.test(i)
                      ? "Top"
                      : /se|sw|s/.test(i)
                      ? "Bottom"
                      : /^e$/.test(i)
                      ? "Right"
                      : "Left",
                  ].join("")),
                  e.css(s, o),
                  this._proportionallyResize()),
                (this._handles = this._handles.add(this.handles[i]));
          }),
            this._renderAxis(this.element),
            (this._handles = this._handles.add(
              this.element.find(".ui-resizable-handle")
            )),
            this._handles.disableSelection(),
            this._handles.mouseover(function () {
              r.resizing ||
                (this.className &&
                  (s = this.className.match(
                    /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i
                  )),
                (r.axis = s && s[1] ? s[1] : "se"));
            }),
            a.autoHide &&
              (this._handles.hide(),
              t(this.element)
                .addClass("ui-resizable-autohide")
                .mouseenter(function () {
                  a.disabled ||
                    (t(this).removeClass("ui-resizable-autohide"),
                    r._handles.show());
                })
                .mouseleave(function () {
                  a.disabled ||
                    r.resizing ||
                    (t(this).addClass("ui-resizable-autohide"),
                    r._handles.hide());
                })),
            this._mouseInit();
        },
        _destroy: function () {
          this._mouseDestroy();
          var e,
            i = function (e) {
              t(e)
                .removeClass(
                  "ui-resizable ui-resizable-disabled ui-resizable-resizing"
                )
                .removeData("resizable")
                .removeData("ui-resizable")
                .unbind(".resizable")
                .find(".ui-resizable-handle")
                .remove();
            };
          return (
            this.elementIsWrapper &&
              (i(this.element),
              (e = this.element),
              this.originalElement
                .css({
                  position: e.css("position"),
                  width: e.outerWidth(),
                  height: e.outerHeight(),
                  top: e.css("top"),
                  left: e.css("left"),
                })
                .insertAfter(e),
              e.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
          );
        },
        _mouseCapture: function (e) {
          var i,
            n,
            s = !1;
          for (i in this.handles)
            (n = t(this.handles[i])[0]),
              (n === e.target || t.contains(n, e.target)) && (s = !0);
          return !this.options.disabled && s;
        },
        _mouseStart: function (e) {
          var i,
            n,
            s,
            o = this.options,
            r = this.element;
          return (
            (this.resizing = !0),
            this._renderProxy(),
            (i = this._num(this.helper.css("left"))),
            (n = this._num(this.helper.css("top"))),
            o.containment &&
              ((i += t(o.containment).scrollLeft() || 0),
              (n += t(o.containment).scrollTop() || 0)),
            (this.offset = this.helper.offset()),
            (this.position = { left: i, top: n }),
            (this.size = this._helper
              ? { width: this.helper.width(), height: this.helper.height() }
              : { width: r.width(), height: r.height() }),
            (this.originalSize = this._helper
              ? { width: r.outerWidth(), height: r.outerHeight() }
              : { width: r.width(), height: r.height() }),
            (this.sizeDiff = {
              width: r.outerWidth() - r.width(),
              height: r.outerHeight() - r.height(),
            }),
            (this.originalPosition = { left: i, top: n }),
            (this.originalMousePosition = { left: e.pageX, top: e.pageY }),
            (this.aspectRatio =
              "number" == typeof o.aspectRatio
                ? o.aspectRatio
                : this.originalSize.width / this.originalSize.height || 1),
            (s = t(".ui-resizable-" + this.axis).css("cursor")),
            t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s),
            r.addClass("ui-resizable-resizing"),
            this._propagate("start", e),
            !0
          );
        },
        _mouseDrag: function (e) {
          var i,
            n,
            s = this.originalMousePosition,
            o = this.axis,
            r = e.pageX - s.left || 0,
            a = e.pageY - s.top || 0,
            l = this._change[o];
          return (
            this._updatePrevProperties(),
            l
              ? ((i = l.apply(this, [e, r, a])),
                this._updateVirtualBoundaries(e.shiftKey),
                (this._aspectRatio || e.shiftKey) &&
                  (i = this._updateRatio(i, e)),
                (i = this._respectSize(i, e)),
                this._updateCache(i),
                this._propagate("resize", e),
                (n = this._applyChanges()),
                !this._helper &&
                  this._proportionallyResizeElements.length &&
                  this._proportionallyResize(),
                t.isEmptyObject(n) ||
                  (this._updatePrevProperties(),
                  this._trigger("resize", e, this.ui()),
                  this._applyChanges()),
                !1)
              : !1
          );
        },
        _mouseStop: function (e) {
          this.resizing = !1;
          var i,
            n,
            s,
            o,
            r,
            a,
            l,
            c = this.options,
            u = this;
          return (
            this._helper &&
              ((i = this._proportionallyResizeElements),
              (n = i.length && /textarea/i.test(i[0].nodeName)),
              (s = n && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height),
              (o = n ? 0 : u.sizeDiff.width),
              (r = {
                width: u.helper.width() - o,
                height: u.helper.height() - s,
              }),
              (a =
                parseInt(u.element.css("left"), 10) +
                  (u.position.left - u.originalPosition.left) || null),
              (l =
                parseInt(u.element.css("top"), 10) +
                  (u.position.top - u.originalPosition.top) || null),
              c.animate || this.element.css(t.extend(r, { top: l, left: a })),
              u.helper.height(u.size.height),
              u.helper.width(u.size.width),
              this._helper && !c.animate && this._proportionallyResize()),
            t("body").css("cursor", "auto"),
            this.element.removeClass("ui-resizable-resizing"),
            this._propagate("stop", e),
            this._helper && this.helper.remove(),
            !1
          );
        },
        _updatePrevProperties: function () {
          (this.prevPosition = {
            top: this.position.top,
            left: this.position.left,
          }),
            (this.prevSize = {
              width: this.size.width,
              height: this.size.height,
            });
        },
        _applyChanges: function () {
          var t = {};
          return (
            this.position.top !== this.prevPosition.top &&
              (t.top = this.position.top + "px"),
            this.position.left !== this.prevPosition.left &&
              (t.left = this.position.left + "px"),
            this.size.width !== this.prevSize.width &&
              (t.width = this.size.width + "px"),
            this.size.height !== this.prevSize.height &&
              (t.height = this.size.height + "px"),
            this.helper.css(t),
            t
          );
        },
        _updateVirtualBoundaries: function (t) {
          var e,
            i,
            n,
            s,
            o,
            r = this.options;
          (o = {
            minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
            maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0,
            minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
            maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0,
          }),
            (this._aspectRatio || t) &&
              ((e = o.minHeight * this.aspectRatio),
              (n = o.minWidth / this.aspectRatio),
              (i = o.maxHeight * this.aspectRatio),
              (s = o.maxWidth / this.aspectRatio),
              e > o.minWidth && (o.minWidth = e),
              n > o.minHeight && (o.minHeight = n),
              i < o.maxWidth && (o.maxWidth = i),
              s < o.maxHeight && (o.maxHeight = s)),
            (this._vBoundaries = o);
        },
        _updateCache: function (t) {
          (this.offset = this.helper.offset()),
            this._isNumber(t.left) && (this.position.left = t.left),
            this._isNumber(t.top) && (this.position.top = t.top),
            this._isNumber(t.height) && (this.size.height = t.height),
            this._isNumber(t.width) && (this.size.width = t.width);
        },
        _updateRatio: function (t) {
          var e = this.position,
            i = this.size,
            n = this.axis;
          return (
            this._isNumber(t.height)
              ? (t.width = t.height * this.aspectRatio)
              : this._isNumber(t.width) &&
                (t.height = t.width / this.aspectRatio),
            "sw" === n &&
              ((t.left = e.left + (i.width - t.width)), (t.top = null)),
            "nw" === n &&
              ((t.top = e.top + (i.height - t.height)),
              (t.left = e.left + (i.width - t.width))),
            t
          );
        },
        _respectSize: function (t) {
          var e = this._vBoundaries,
            i = this.axis,
            n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
            s =
              this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
            o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
            r =
              this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
            a = this.originalPosition.left + this.originalSize.width,
            l = this.position.top + this.size.height,
            c = /sw|nw|w/.test(i),
            u = /nw|ne|n/.test(i);
          return (
            o && (t.width = e.minWidth),
            r && (t.height = e.minHeight),
            n && (t.width = e.maxWidth),
            s && (t.height = e.maxHeight),
            o && c && (t.left = a - e.minWidth),
            n && c && (t.left = a - e.maxWidth),
            r && u && (t.top = l - e.minHeight),
            s && u && (t.top = l - e.maxHeight),
            t.width || t.height || t.left || !t.top
              ? t.width || t.height || t.top || !t.left || (t.left = null)
              : (t.top = null),
            t
          );
        },
        _getPaddingPlusBorderDimensions: function (t) {
          for (
            var e = 0,
              i = [],
              n = [
                t.css("borderTopWidth"),
                t.css("borderRightWidth"),
                t.css("borderBottomWidth"),
                t.css("borderLeftWidth"),
              ],
              s = [
                t.css("paddingTop"),
                t.css("paddingRight"),
                t.css("paddingBottom"),
                t.css("paddingLeft"),
              ];
            4 > e;
            e++
          )
            (i[e] = parseInt(n[e], 10) || 0), (i[e] += parseInt(s[e], 10) || 0);
          return { height: i[0] + i[2], width: i[1] + i[3] };
        },
        _proportionallyResize: function () {
          if (this._proportionallyResizeElements.length)
            for (
              var t, e = 0, i = this.helper || this.element;
              e < this._proportionallyResizeElements.length;
              e++
            )
              (t = this._proportionallyResizeElements[e]),
                this.outerDimensions ||
                  (this.outerDimensions = this._getPaddingPlusBorderDimensions(
                    t
                  )),
                t.css({
                  height: i.height() - this.outerDimensions.height || 0,
                  width: i.width() - this.outerDimensions.width || 0,
                });
        },
        _renderProxy: function () {
          var e = this.element,
            i = this.options;
          (this.elementOffset = e.offset()),
            this._helper
              ? ((this.helper =
                  this.helper || t("<div style='overflow:hidden;'></div>")),
                this.helper
                  .addClass(this._helper)
                  .css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++i.zIndex,
                  }),
                this.helper.appendTo("body").disableSelection())
              : (this.helper = this.element);
        },
        _change: {
          e: function (t, e) {
            return { width: this.originalSize.width + e };
          },
          w: function (t, e) {
            var i = this.originalSize,
              n = this.originalPosition;
            return { left: n.left + e, width: i.width - e };
          },
          n: function (t, e, i) {
            var n = this.originalSize,
              s = this.originalPosition;
            return { top: s.top + i, height: n.height - i };
          },
          s: function (t, e, i) {
            return { height: this.originalSize.height + i };
          },
          se: function (e, i, n) {
            return t.extend(
              this._change.s.apply(this, arguments),
              this._change.e.apply(this, [e, i, n])
            );
          },
          sw: function (e, i, n) {
            return t.extend(
              this._change.s.apply(this, arguments),
              this._change.w.apply(this, [e, i, n])
            );
          },
          ne: function (e, i, n) {
            return t.extend(
              this._change.n.apply(this, arguments),
              this._change.e.apply(this, [e, i, n])
            );
          },
          nw: function (e, i, n) {
            return t.extend(
              this._change.n.apply(this, arguments),
              this._change.w.apply(this, [e, i, n])
            );
          },
        },
        _propagate: function (e, i) {
          t.ui.plugin.call(this, e, [i, this.ui()]),
            "resize" !== e && this._trigger(e, i, this.ui());
        },
        plugins: {},
        ui: function () {
          return {
            originalElement: this.originalElement,
            element: this.element,
            helper: this.helper,
            position: this.position,
            size: this.size,
            originalSize: this.originalSize,
            originalPosition: this.originalPosition,
          };
        },
      }),
      t.ui.plugin.add("resizable", "animate", {
        stop: function (e) {
          var i = t(this).resizable("instance"),
            n = i.options,
            s = i._proportionallyResizeElements,
            o = s.length && /textarea/i.test(s[0].nodeName),
            r = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
            a = o ? 0 : i.sizeDiff.width,
            l = { width: i.size.width - a, height: i.size.height - r },
            c =
              parseInt(i.element.css("left"), 10) +
                (i.position.left - i.originalPosition.left) || null,
            u =
              parseInt(i.element.css("top"), 10) +
                (i.position.top - i.originalPosition.top) || null;
          i.element.animate(t.extend(l, u && c ? { top: u, left: c } : {}), {
            duration: n.animateDuration,
            easing: n.animateEasing,
            step: function () {
              var n = {
                width: parseInt(i.element.css("width"), 10),
                height: parseInt(i.element.css("height"), 10),
                top: parseInt(i.element.css("top"), 10),
                left: parseInt(i.element.css("left"), 10),
              };
              s &&
                s.length &&
                t(s[0]).css({ width: n.width, height: n.height }),
                i._updateCache(n),
                i._propagate("resize", e);
            },
          });
        },
      }),
      t.ui.plugin.add("resizable", "containment", {
        start: function () {
          var e,
            i,
            n,
            s,
            o,
            r,
            a,
            l = t(this).resizable("instance"),
            c = l.options,
            u = l.element,
            h = c.containment,
            d =
              h instanceof t
                ? h.get(0)
                : /parent/.test(h)
                ? u.parent().get(0)
                : h;
          d &&
            ((l.containerElement = t(d)),
            /document/.test(h) || h === document
              ? ((l.containerOffset = { left: 0, top: 0 }),
                (l.containerPosition = { left: 0, top: 0 }),
                (l.parentData = {
                  element: t(document),
                  left: 0,
                  top: 0,
                  width: t(document).width(),
                  height:
                    t(document).height() ||
                    document.body.parentNode.scrollHeight,
                }))
              : ((e = t(d)),
                (i = []),
                t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
                  i[t] = l._num(e.css("padding" + n));
                }),
                (l.containerOffset = e.offset()),
                (l.containerPosition = e.position()),
                (l.containerSize = {
                  height: e.innerHeight() - i[3],
                  width: e.innerWidth() - i[1],
                }),
                (n = l.containerOffset),
                (s = l.containerSize.height),
                (o = l.containerSize.width),
                (r = l._hasScroll(d, "left") ? d.scrollWidth : o),
                (a = l._hasScroll(d) ? d.scrollHeight : s),
                (l.parentData = {
                  element: d,
                  left: n.left,
                  top: n.top,
                  width: r,
                  height: a,
                })));
        },
        resize: function (e) {
          var i,
            n,
            s,
            o,
            r = t(this).resizable("instance"),
            a = r.options,
            l = r.containerOffset,
            c = r.position,
            u = r._aspectRatio || e.shiftKey,
            h = { top: 0, left: 0 },
            d = r.containerElement,
            p = !0;
          d[0] !== document && /static/.test(d.css("position")) && (h = l),
            c.left < (r._helper ? l.left : 0) &&
              ((r.size.width =
                r.size.width +
                (r._helper
                  ? r.position.left - l.left
                  : r.position.left - h.left)),
              u && ((r.size.height = r.size.width / r.aspectRatio), (p = !1)),
              (r.position.left = a.helper ? l.left : 0)),
            c.top < (r._helper ? l.top : 0) &&
              ((r.size.height =
                r.size.height +
                (r._helper ? r.position.top - l.top : r.position.top)),
              u && ((r.size.width = r.size.height * r.aspectRatio), (p = !1)),
              (r.position.top = r._helper ? l.top : 0)),
            (s = r.containerElement.get(0) === r.element.parent().get(0)),
            (o = /relative|absolute/.test(r.containerElement.css("position"))),
            s && o
              ? ((r.offset.left = r.parentData.left + r.position.left),
                (r.offset.top = r.parentData.top + r.position.top))
              : ((r.offset.left = r.element.offset().left),
                (r.offset.top = r.element.offset().top)),
            (i = Math.abs(
              r.sizeDiff.width +
                (r._helper ? r.offset.left - h.left : r.offset.left - l.left)
            )),
            (n = Math.abs(
              r.sizeDiff.height +
                (r._helper ? r.offset.top - h.top : r.offset.top - l.top)
            )),
            i + r.size.width >= r.parentData.width &&
              ((r.size.width = r.parentData.width - i),
              u && ((r.size.height = r.size.width / r.aspectRatio), (p = !1))),
            n + r.size.height >= r.parentData.height &&
              ((r.size.height = r.parentData.height - n),
              u && ((r.size.width = r.size.height * r.aspectRatio), (p = !1))),
            p ||
              ((r.position.left = r.prevPosition.left),
              (r.position.top = r.prevPosition.top),
              (r.size.width = r.prevSize.width),
              (r.size.height = r.prevSize.height));
        },
        stop: function () {
          var e = t(this).resizable("instance"),
            i = e.options,
            n = e.containerOffset,
            s = e.containerPosition,
            o = e.containerElement,
            r = t(e.helper),
            a = r.offset(),
            l = r.outerWidth() - e.sizeDiff.width,
            c = r.outerHeight() - e.sizeDiff.height;
          e._helper &&
            !i.animate &&
            /relative/.test(o.css("position")) &&
            t(this).css({
              left: a.left - s.left - n.left,
              width: l,
              height: c,
            }),
            e._helper &&
              !i.animate &&
              /static/.test(o.css("position")) &&
              t(this).css({
                left: a.left - s.left - n.left,
                width: l,
                height: c,
              });
        },
      }),
      t.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
          var e = t(this).resizable("instance"),
            i = e.options;
          t(i.alsoResize).each(function () {
            var e = t(this);
            e.data("ui-resizable-alsoresize", {
              width: parseInt(e.width(), 10),
              height: parseInt(e.height(), 10),
              left: parseInt(e.css("left"), 10),
              top: parseInt(e.css("top"), 10),
            });
          });
        },
        resize: function (e, i) {
          var n = t(this).resizable("instance"),
            s = n.options,
            o = n.originalSize,
            r = n.originalPosition,
            a = {
              height: n.size.height - o.height || 0,
              width: n.size.width - o.width || 0,
              top: n.position.top - r.top || 0,
              left: n.position.left - r.left || 0,
            };
          t(s.alsoResize).each(function () {
            var e = t(this),
              n = t(this).data("ui-resizable-alsoresize"),
              s = {},
              o = e.parents(i.originalElement[0]).length
                ? ["width", "height"]
                : ["width", "height", "top", "left"];
            t.each(o, function (t, e) {
              var i = (n[e] || 0) + (a[e] || 0);
              i && i >= 0 && (s[e] = i || null);
            }),
              e.css(s);
          });
        },
        stop: function () {
          t(this).removeData("resizable-alsoresize");
        },
      }),
      t.ui.plugin.add("resizable", "ghost", {
        start: function () {
          var e = t(this).resizable("instance"),
            i = e.options,
            n = e.size;
          (e.ghost = e.originalElement.clone()),
            e.ghost
              .css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: n.height,
                width: n.width,
                margin: 0,
                left: 0,
                top: 0,
              })
              .addClass("ui-resizable-ghost")
              .addClass("string" == typeof i.ghost ? i.ghost : ""),
            e.ghost.appendTo(e.helper);
        },
        resize: function () {
          var e = t(this).resizable("instance");
          e.ghost &&
            e.ghost.css({
              position: "relative",
              height: e.size.height,
              width: e.size.width,
            });
        },
        stop: function () {
          var e = t(this).resizable("instance");
          e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
        },
      }),
      t.ui.plugin.add("resizable", "grid", {
        resize: function () {
          var e,
            i = t(this).resizable("instance"),
            n = i.options,
            s = i.size,
            o = i.originalSize,
            r = i.originalPosition,
            a = i.axis,
            l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
            c = l[0] || 1,
            u = l[1] || 1,
            h = Math.round((s.width - o.width) / c) * c,
            d = Math.round((s.height - o.height) / u) * u,
            p = o.width + h,
            f = o.height + d,
            m = n.maxWidth && n.maxWidth < p,
            g = n.maxHeight && n.maxHeight < f,
            v = n.minWidth && n.minWidth > p,
            b = n.minHeight && n.minHeight > f;
          (n.grid = l),
            v && (p += c),
            b && (f += u),
            m && (p -= c),
            g && (f -= u),
            /^(se|s|e)$/.test(a)
              ? ((i.size.width = p), (i.size.height = f))
              : /^(ne)$/.test(a)
              ? ((i.size.width = p),
                (i.size.height = f),
                (i.position.top = r.top - d))
              : /^(sw)$/.test(a)
              ? ((i.size.width = p),
                (i.size.height = f),
                (i.position.left = r.left - h))
              : ((0 >= f - u || 0 >= p - c) &&
                  (e = i._getPaddingPlusBorderDimensions(this)),
                f - u > 0
                  ? ((i.size.height = f), (i.position.top = r.top - d))
                  : ((f = u - e.height),
                    (i.size.height = f),
                    (i.position.top = r.top + o.height - f)),
                p - c > 0
                  ? ((i.size.width = p), (i.position.left = r.left - h))
                  : ((p = c - e.width),
                    (i.size.width = p),
                    (i.position.left = r.left + o.width - p)));
        },
      }),
      t.ui.resizable
    );
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define([
          "jquery",
          "./core",
          "./widget",
          "./button",
          "./draggable",
          "./mouse",
          "./position",
          "./resizable",
        ], t)
      : t(jQuery);
  })(function (t) {
    return t.widget("ui.dialog", {
      version: "1.11.4",
      options: {
        appendTo: "body",
        autoOpen: !0,
        buttons: [],
        closeOnEscape: !0,
        closeText: "Close",
        dialogClass: "",
        draggable: !0,
        hide: null,
        height: "auto",
        maxHeight: null,
        maxWidth: null,
        minHeight: 150,
        minWidth: 150,
        modal: !1,
        position: {
          my: "center",
          at: "center",
          of: window,
          collision: "fit",
          using: function (e) {
            var i = t(this).css(e).offset().top;
            0 > i && t(this).css("top", e.top - i);
          },
        },
        resizable: !0,
        show: null,
        title: null,
        width: 300,
        beforeClose: null,
        close: null,
        drag: null,
        dragStart: null,
        dragStop: null,
        focus: null,
        open: null,
        resize: null,
        resizeStart: null,
        resizeStop: null,
      },
      sizeRelatedOptions: {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0,
      },
      resizableRelatedOptions: {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
      },
      _create: function () {
        (this.originalCss = {
          display: this.element[0].style.display,
          width: this.element[0].style.width,
          minHeight: this.element[0].style.minHeight,
          maxHeight: this.element[0].style.maxHeight,
          height: this.element[0].style.height,
        }),
          (this.originalPosition = {
            parent: this.element.parent(),
            index: this.element.parent().children().index(this.element),
          }),
          (this.originalTitle = this.element.attr("title")),
          (this.options.title = this.options.title || this.originalTitle),
          this._createWrapper(),
          this.element
            .show()
            .removeAttr("title")
            .addClass("ui-dialog-content ui-widget-content")
            .appendTo(this.uiDialog),
          this._createTitlebar(),
          this._createButtonPane(),
          this.options.draggable && t.fn.draggable && this._makeDraggable(),
          this.options.resizable && t.fn.resizable && this._makeResizable(),
          (this._isOpen = !1),
          this._trackFocus();
      },
      _init: function () {
        this.options.autoOpen && this.open();
      },
      _appendTo: function () {
        var e = this.options.appendTo;
        return e && (e.jquery || e.nodeType)
          ? t(e)
          : this.document.find(e || "body").eq(0);
      },
      _destroy: function () {
        var t,
          e = this.originalPosition;
        this._untrackInstance(),
          this._destroyOverlay(),
          this.element
            .removeUniqueId()
            .removeClass("ui-dialog-content ui-widget-content")
            .css(this.originalCss)
            .detach(),
          this.uiDialog.stop(!0, !0).remove(),
          this.originalTitle && this.element.attr("title", this.originalTitle),
          (t = e.parent.children().eq(e.index)),
          t.length && t[0] !== this.element[0]
            ? t.before(this.element)
            : e.parent.append(this.element);
      },
      widget: function () {
        return this.uiDialog;
      },
      disable: t.noop,
      enable: t.noop,
      close: function (e) {
        var i,
          n = this;
        if (this._isOpen && this._trigger("beforeClose", e) !== !1) {
          if (
            ((this._isOpen = !1),
            (this._focusedElement = null),
            this._destroyOverlay(),
            this._untrackInstance(),
            !this.opener.filter(":focusable").focus().length)
          )
            try {
              (i = this.document[0].activeElement),
                i && "body" !== i.nodeName.toLowerCase() && t(i).blur();
            } catch (s) {}
          this._hide(this.uiDialog, this.options.hide, function () {
            n._trigger("close", e);
          });
        }
      },
      isOpen: function () {
        return this._isOpen;
      },
      moveToTop: function () {
        this._moveToTop();
      },
      _moveToTop: function (e, i) {
        var n = !1,
          s = this.uiDialog
            .siblings(".ui-front:visible")
            .map(function () {
              return +t(this).css("z-index");
            })
            .get(),
          o = Math.max.apply(null, s);
        return (
          o >= +this.uiDialog.css("z-index") &&
            (this.uiDialog.css("z-index", o + 1), (n = !0)),
          n && !i && this._trigger("focus", e),
          n
        );
      },
      open: function () {
        var e = this;
        return this._isOpen
          ? void (this._moveToTop() && this._focusTabbable())
          : ((this._isOpen = !0),
            (this.opener = t(this.document[0].activeElement)),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this.overlay &&
              this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
            this._show(this.uiDialog, this.options.show, function () {
              e._focusTabbable(), e._trigger("focus");
            }),
            this._makeFocusTarget(),
            void this._trigger("open"));
      },
      _focusTabbable: function () {
        var t = this._focusedElement;
        t || (t = this.element.find("[autofocus]")),
          t.length || (t = this.element.find(":tabbable")),
          t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
          t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
          t.length || (t = this.uiDialog),
          t.eq(0).focus();
      },
      _keepFocus: function (e) {
        function i() {
          var e = this.document[0].activeElement,
            i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
          i || this._focusTabbable();
        }
        e.preventDefault(), i.call(this), this._delay(i);
      },
      _createWrapper: function () {
        (this.uiDialog = t("<div>")
          .addClass(
            "ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " +
              this.options.dialogClass
          )
          .hide()
          .attr({ tabIndex: -1, role: "dialog" })
          .appendTo(this._appendTo())),
          this._on(this.uiDialog, {
            keydown: function (e) {
              if (
                this.options.closeOnEscape &&
                !e.isDefaultPrevented() &&
                e.keyCode &&
                e.keyCode === t.ui.keyCode.ESCAPE
              )
                return e.preventDefault(), void this.close(e);
              if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                var i = this.uiDialog.find(":tabbable"),
                  n = i.filter(":first"),
                  s = i.filter(":last");
                (e.target !== s[0] && e.target !== this.uiDialog[0]) ||
                e.shiftKey
                  ? (e.target !== n[0] && e.target !== this.uiDialog[0]) ||
                    !e.shiftKey ||
                    (this._delay(function () {
                      s.focus();
                    }),
                    e.preventDefault())
                  : (this._delay(function () {
                      n.focus();
                    }),
                    e.preventDefault());
              }
            },
            mousedown: function (t) {
              this._moveToTop(t) && this._focusTabbable();
            },
          }),
          this.element.find("[aria-describedby]").length ||
            this.uiDialog.attr({
              "aria-describedby": this.element.uniqueId().attr("id"),
            });
      },
      _createTitlebar: function () {
        var e;
        (this.uiDialogTitlebar = t("<div>")
          .addClass(
            "ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"
          )
          .prependTo(this.uiDialog)),
          this._on(this.uiDialogTitlebar, {
            mousedown: function (e) {
              t(e.target).closest(".ui-dialog-titlebar-close") ||
                this.uiDialog.focus();
            },
          }),
          (this.uiDialogTitlebarClose = t("<button type='button'></button>")
            .button({
              label: this.options.closeText,
              icons: { primary: "ui-icon-closethick" },
              text: !1,
            })
            .addClass("ui-dialog-titlebar-close")
            .appendTo(this.uiDialogTitlebar)),
          this._on(this.uiDialogTitlebarClose, {
            click: function (t) {
              t.preventDefault(), this.close(t);
            },
          }),
          (e = t("<span>")
            .uniqueId()
            .addClass("ui-dialog-title")
            .prependTo(this.uiDialogTitlebar)),
          this._title(e),
          this.uiDialog.attr({ "aria-labelledby": e.attr("id") });
      },
      _title: function (t) {
        this.options.title || t.html("&#160;"), t.text(this.options.title);
      },
      _createButtonPane: function () {
        (this.uiDialogButtonPane = t("<div>").addClass(
          "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"
        )),
          (this.uiButtonSet = t("<div>")
            .addClass("ui-dialog-buttonset")
            .appendTo(this.uiDialogButtonPane)),
          this._createButtons();
      },
      _createButtons: function () {
        var e = this,
          i = this.options.buttons;
        return (
          this.uiDialogButtonPane.remove(),
          this.uiButtonSet.empty(),
          t.isEmptyObject(i) || (t.isArray(i) && !i.length)
            ? void this.uiDialog.removeClass("ui-dialog-buttons")
            : (t.each(i, function (i, n) {
                var s, o;
                (n = t.isFunction(n) ? { click: n, text: i } : n),
                  (n = t.extend({ type: "button" }, n)),
                  (s = n.click),
                  (n.click = function () {
                    s.apply(e.element[0], arguments);
                  }),
                  (o = { icons: n.icons, text: n.showText }),
                  delete n.icons,
                  delete n.showText,
                  t("<button></button>", n).button(o).appendTo(e.uiButtonSet);
              }),
              this.uiDialog.addClass("ui-dialog-buttons"),
              void this.uiDialogButtonPane.appendTo(this.uiDialog))
        );
      },
      _makeDraggable: function () {
        function e(t) {
          return { position: t.position, offset: t.offset };
        }
        var i = this,
          n = this.options;
        this.uiDialog.draggable({
          cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
          handle: ".ui-dialog-titlebar",
          containment: "document",
          start: function (n, s) {
            t(this).addClass("ui-dialog-dragging"),
              i._blockFrames(),
              i._trigger("dragStart", n, e(s));
          },
          drag: function (t, n) {
            i._trigger("drag", t, e(n));
          },
          stop: function (s, o) {
            var r = o.offset.left - i.document.scrollLeft(),
              a = o.offset.top - i.document.scrollTop();
            (n.position = {
              my: "left top",
              at:
                "left" +
                (r >= 0 ? "+" : "") +
                r +
                " top" +
                (a >= 0 ? "+" : "") +
                a,
              of: i.window,
            }),
              t(this).removeClass("ui-dialog-dragging"),
              i._unblockFrames(),
              i._trigger("dragStop", s, e(o));
          },
        });
      },
      _makeResizable: function () {
        function e(t) {
          return {
            originalPosition: t.originalPosition,
            originalSize: t.originalSize,
            position: t.position,
            size: t.size,
          };
        }
        var i = this,
          n = this.options,
          s = n.resizable,
          o = this.uiDialog.css("position"),
          r = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
        this.uiDialog
          .resizable({
            cancel: ".ui-dialog-content",
            containment: "document",
            alsoResize: this.element,
            maxWidth: n.maxWidth,
            maxHeight: n.maxHeight,
            minWidth: n.minWidth,
            minHeight: this._minHeight(),
            handles: r,
            start: function (n, s) {
              t(this).addClass("ui-dialog-resizing"),
                i._blockFrames(),
                i._trigger("resizeStart", n, e(s));
            },
            resize: function (t, n) {
              i._trigger("resize", t, e(n));
            },
            stop: function (s, o) {
              var r = i.uiDialog.offset(),
                a = r.left - i.document.scrollLeft(),
                l = r.top - i.document.scrollTop();
              (n.height = i.uiDialog.height()),
                (n.width = i.uiDialog.width()),
                (n.position = {
                  my: "left top",
                  at:
                    "left" +
                    (a >= 0 ? "+" : "") +
                    a +
                    " top" +
                    (l >= 0 ? "+" : "") +
                    l,
                  of: i.window,
                }),
                t(this).removeClass("ui-dialog-resizing"),
                i._unblockFrames(),
                i._trigger("resizeStop", s, e(o));
            },
          })
          .css("position", o);
      },
      _trackFocus: function () {
        this._on(this.widget(), {
          focusin: function (e) {
            this._makeFocusTarget(), (this._focusedElement = t(e.target));
          },
        });
      },
      _makeFocusTarget: function () {
        this._untrackInstance(), this._trackingInstances().unshift(this);
      },
      _untrackInstance: function () {
        var e = this._trackingInstances(),
          i = t.inArray(this, e);
        -1 !== i && e.splice(i, 1);
      },
      _trackingInstances: function () {
        var t = this.document.data("ui-dialog-instances");
        return t || ((t = []), this.document.data("ui-dialog-instances", t)), t;
      },
      _minHeight: function () {
        var t = this.options;
        return "auto" === t.height
          ? t.minHeight
          : Math.min(t.minHeight, t.height);
      },
      _position: function () {
        var t = this.uiDialog.is(":visible");
        t || this.uiDialog.show(),
          this.uiDialog.position(this.options.position),
          t || this.uiDialog.hide();
      },
      _setOptions: function (e) {
        var i = this,
          n = !1,
          s = {};
        t.each(e, function (t, e) {
          i._setOption(t, e),
            t in i.sizeRelatedOptions && (n = !0),
            t in i.resizableRelatedOptions && (s[t] = e);
        }),
          n && (this._size(), this._position()),
          this.uiDialog.is(":data(ui-resizable)") &&
            this.uiDialog.resizable("option", s);
      },
      _setOption: function (t, e) {
        var i,
          n,
          s = this.uiDialog;
        "dialogClass" === t &&
          s.removeClass(this.options.dialogClass).addClass(e),
          "disabled" !== t &&
            (this._super(t, e),
            "appendTo" === t && this.uiDialog.appendTo(this._appendTo()),
            "buttons" === t && this._createButtons(),
            "closeText" === t &&
              this.uiDialogTitlebarClose.button({ label: "" + e }),
            "draggable" === t &&
              ((i = s.is(":data(ui-draggable)")),
              i && !e && s.draggable("destroy"),
              !i && e && this._makeDraggable()),
            "position" === t && this._position(),
            "resizable" === t &&
              ((n = s.is(":data(ui-resizable)")),
              n && !e && s.resizable("destroy"),
              n && "string" == typeof e && s.resizable("option", "handles", e),
              n || e === !1 || this._makeResizable()),
            "title" === t &&
              this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
      },
      _size: function () {
        var t,
          e,
          i,
          n = this.options;
        this.element
          .show()
          .css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }),
          n.minWidth > n.width && (n.width = n.minWidth),
          (t = this.uiDialog
            .css({ height: "auto", width: n.width })
            .outerHeight()),
          (e = Math.max(0, n.minHeight - t)),
          (i =
            "number" == typeof n.maxHeight
              ? Math.max(0, n.maxHeight - t)
              : "none"),
          "auto" === n.height
            ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" })
            : this.element.height(Math.max(0, n.height - t)),
          this.uiDialog.is(":data(ui-resizable)") &&
            this.uiDialog.resizable("option", "minHeight", this._minHeight());
      },
      _blockFrames: function () {
        this.iframeBlocks = this.document.find("iframe").map(function () {
          var e = t(this);
          return t("<div>")
            .css({
              position: "absolute",
              width: e.outerWidth(),
              height: e.outerHeight(),
            })
            .appendTo(e.parent())
            .offset(e.offset())[0];
        });
      },
      _unblockFrames: function () {
        this.iframeBlocks &&
          (this.iframeBlocks.remove(), delete this.iframeBlocks);
      },
      _allowInteraction: function (e) {
        return t(e.target).closest(".ui-dialog").length
          ? !0
          : !!t(e.target).closest(".ui-datepicker").length;
      },
      _createOverlay: function () {
        if (this.options.modal) {
          var e = !0;
          this._delay(function () {
            e = !1;
          }),
            this.document.data("ui-dialog-overlays") ||
              this._on(this.document, {
                focusin: function (t) {
                  e ||
                    this._allowInteraction(t) ||
                    (t.preventDefault(),
                    this._trackingInstances()[0]._focusTabbable());
                },
              }),
            (this.overlay = t("<div>")
              .addClass("ui-widget-overlay ui-front")
              .appendTo(this._appendTo())),
            this._on(this.overlay, { mousedown: "_keepFocus" }),
            this.document.data(
              "ui-dialog-overlays",
              (this.document.data("ui-dialog-overlays") || 0) + 1
            );
        }
      },
      _destroyOverlay: function () {
        if (this.options.modal && this.overlay) {
          var t = this.document.data("ui-dialog-overlays") - 1;
          t
            ? this.document.data("ui-dialog-overlays", t)
            : this.document.unbind("focusin").removeData("ui-dialog-overlays"),
            this.overlay.remove(),
            (this.overlay = null);
        }
      },
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./core", "./widget", "./mouse", "./draggable"], t)
      : t(jQuery);
  })(function (t) {
    return (
      t.widget("ui.droppable", {
        version: "1.11.4",
        widgetEventPrefix: "drop",
        options: {
          accept: "*",
          activeClass: !1,
          addClasses: !0,
          greedy: !1,
          hoverClass: !1,
          scope: "default",
          tolerance: "intersect",
          activate: null,
          deactivate: null,
          drop: null,
          out: null,
          over: null,
        },
        _create: function () {
          var e,
            i = this.options,
            n = i.accept;
          (this.isover = !1),
            (this.isout = !0),
            (this.accept = t.isFunction(n)
              ? n
              : function (t) {
                  return t.is(n);
                }),
            (this.proportions = function () {
              return arguments.length
                ? void (e = arguments[0])
                : e
                ? e
                : (e = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight,
                  });
            }),
            this._addToManager(i.scope),
            i.addClasses && this.element.addClass("ui-droppable");
        },
        _addToManager: function (e) {
          (t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || []),
            t.ui.ddmanager.droppables[e].push(this);
        },
        _splice: function (t) {
          for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1);
        },
        _destroy: function () {
          var e = t.ui.ddmanager.droppables[this.options.scope];
          this._splice(e),
            this.element.removeClass("ui-droppable ui-droppable-disabled");
        },
        _setOption: function (e, i) {
          if ("accept" === e)
            this.accept = t.isFunction(i)
              ? i
              : function (t) {
                  return t.is(i);
                };
          else if ("scope" === e) {
            var n = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(n), this._addToManager(i);
          }
          this._super(e, i);
        },
        _activate: function (e) {
          var i = t.ui.ddmanager.current;
          this.options.activeClass &&
            this.element.addClass(this.options.activeClass),
            i && this._trigger("activate", e, this.ui(i));
        },
        _deactivate: function (e) {
          var i = t.ui.ddmanager.current;
          this.options.activeClass &&
            this.element.removeClass(this.options.activeClass),
            i && this._trigger("deactivate", e, this.ui(i));
        },
        _over: function (e) {
          var i = t.ui.ddmanager.current;
          i &&
            (i.currentItem || i.element)[0] !== this.element[0] &&
            this.accept.call(this.element[0], i.currentItem || i.element) &&
            (this.options.hoverClass &&
              this.element.addClass(this.options.hoverClass),
            this._trigger("over", e, this.ui(i)));
        },
        _out: function (e) {
          var i = t.ui.ddmanager.current;
          i &&
            (i.currentItem || i.element)[0] !== this.element[0] &&
            this.accept.call(this.element[0], i.currentItem || i.element) &&
            (this.options.hoverClass &&
              this.element.removeClass(this.options.hoverClass),
            this._trigger("out", e, this.ui(i)));
        },
        _drop: function (e, i) {
          var n = i || t.ui.ddmanager.current,
            s = !1;
          return n && (n.currentItem || n.element)[0] !== this.element[0]
            ? (this.element
                .find(":data(ui-droppable)")
                .not(".ui-draggable-dragging")
                .each(function () {
                  var i = t(this).droppable("instance");
                  return i.options.greedy &&
                    !i.options.disabled &&
                    i.options.scope === n.options.scope &&
                    i.accept.call(i.element[0], n.currentItem || n.element) &&
                    t.ui.intersect(
                      n,
                      t.extend(i, { offset: i.element.offset() }),
                      i.options.tolerance,
                      e
                    )
                    ? ((s = !0), !1)
                    : void 0;
                }),
              s
                ? !1
                : this.accept.call(this.element[0], n.currentItem || n.element)
                ? (this.options.activeClass &&
                    this.element.removeClass(this.options.activeClass),
                  this.options.hoverClass &&
                    this.element.removeClass(this.options.hoverClass),
                  this._trigger("drop", e, this.ui(n)),
                  this.element)
                : !1)
            : !1;
        },
        ui: function (t) {
          return {
            draggable: t.currentItem || t.element,
            helper: t.helper,
            position: t.position,
            offset: t.positionAbs,
          };
        },
      }),
      (t.ui.intersect = (function () {
        function t(t, e, i) {
          return t >= e && e + i > t;
        }
        return function (e, i, n, s) {
          if (!i.offset) return !1;
          var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
            r = (e.positionAbs || e.position.absolute).top + e.margins.top,
            a = o + e.helperProportions.width,
            l = r + e.helperProportions.height,
            c = i.offset.left,
            u = i.offset.top,
            h = c + i.proportions().width,
            d = u + i.proportions().height;
          switch (n) {
            case "fit":
              return o >= c && h >= a && r >= u && d >= l;
            case "intersect":
              return (
                c < o + e.helperProportions.width / 2 &&
                a - e.helperProportions.width / 2 < h &&
                u < r + e.helperProportions.height / 2 &&
                l - e.helperProportions.height / 2 < d
              );
            case "pointer":
              return (
                t(s.pageY, u, i.proportions().height) &&
                t(s.pageX, c, i.proportions().width)
              );
            case "touch":
              return (
                ((r >= u && d >= r) ||
                  (l >= u && d >= l) ||
                  (u > r && l > d)) &&
                ((o >= c && h >= o) || (a >= c && h >= a) || (c > o && a > h))
              );
            default:
              return !1;
          }
        };
      })()),
      (t.ui.ddmanager = {
        current: null,
        droppables: { default: [] },
        prepareOffsets: function (e, i) {
          var n,
            s,
            o = t.ui.ddmanager.droppables[e.options.scope] || [],
            r = i ? i.type : null,
            a = (e.currentItem || e.element)
              .find(":data(ui-droppable)")
              .addBack();
          t: for (n = 0; n < o.length; n++)
            if (
              !(
                o[n].options.disabled ||
                (e &&
                  !o[n].accept.call(
                    o[n].element[0],
                    e.currentItem || e.element
                  ))
              )
            ) {
              for (s = 0; s < a.length; s++)
                if (a[s] === o[n].element[0]) {
                  o[n].proportions().height = 0;
                  continue t;
                }
              (o[n].visible = "none" !== o[n].element.css("display")),
                o[n].visible &&
                  ("mousedown" === r && o[n]._activate.call(o[n], i),
                  (o[n].offset = o[n].element.offset()),
                  o[n].proportions({
                    width: o[n].element[0].offsetWidth,
                    height: o[n].element[0].offsetHeight,
                  }));
            }
        },
        drop: function (e, i) {
          var n = !1;
          return (
            t.each(
              (t.ui.ddmanager.droppables[e.options.scope] || []).slice(),
              function () {
                this.options &&
                  (!this.options.disabled &&
                    this.visible &&
                    t.ui.intersect(e, this, this.options.tolerance, i) &&
                    (n = this._drop.call(this, i) || n),
                  !this.options.disabled &&
                    this.visible &&
                    this.accept.call(
                      this.element[0],
                      e.currentItem || e.element
                    ) &&
                    ((this.isout = !0),
                    (this.isover = !1),
                    this._deactivate.call(this, i)));
              }
            ),
            n
          );
        },
        dragStart: function (e, i) {
          e.element.parentsUntil("body").bind("scroll.droppable", function () {
            e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
          });
        },
        drag: function (e, i) {
          e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
            t.each(
              t.ui.ddmanager.droppables[e.options.scope] || [],
              function () {
                if (
                  !this.options.disabled &&
                  !this.greedyChild &&
                  this.visible
                ) {
                  var n,
                    s,
                    o,
                    r = t.ui.intersect(e, this, this.options.tolerance, i),
                    a =
                      !r && this.isover
                        ? "isout"
                        : r && !this.isover
                        ? "isover"
                        : null;
                  a &&
                    (this.options.greedy &&
                      ((s = this.options.scope),
                      (o = this.element
                        .parents(":data(ui-droppable)")
                        .filter(function () {
                          return (
                            t(this).droppable("instance").options.scope === s
                          );
                        })),
                      o.length &&
                        ((n = t(o[0]).droppable("instance")),
                        (n.greedyChild = "isover" === a))),
                    n &&
                      "isover" === a &&
                      ((n.isover = !1), (n.isout = !0), n._out.call(n, i)),
                    (this[a] = !0),
                    (this["isout" === a ? "isover" : "isout"] = !1),
                    this["isover" === a ? "_over" : "_out"].call(this, i),
                    n &&
                      "isout" === a &&
                      ((n.isout = !1), (n.isover = !0), n._over.call(n, i)));
                }
              }
            );
        },
        dragStop: function (e, i) {
          e.element.parentsUntil("body").unbind("scroll.droppable"),
            e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
        },
      }),
      t.ui.droppable
    );
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(jQuery);
  })(function (t) {
    var e = "ui-effects-",
      i = t;
    return (
      (t.effects = { effect: {} }),
      (function (t, e) {
        function i(t, e, i) {
          var n = h[e.type] || {};
          return null == t
            ? i || !e.def
              ? null
              : e.def
            : ((t = n.floor ? ~~t : parseFloat(t)),
              isNaN(t)
                ? e.def
                : n.mod
                ? (t + n.mod) % n.mod
                : 0 > t
                ? 0
                : n.max < t
                ? n.max
                : t);
        }
        function n(e) {
          var i = c(),
            n = (i._rgba = []);
          return (
            (e = e.toLowerCase()),
            f(l, function (t, s) {
              var o,
                r = s.re.exec(e),
                a = r && s.parse(r),
                l = s.space || "rgba";
              return a
                ? ((o = i[l](a)),
                  (i[u[l].cache] = o[u[l].cache]),
                  (n = i._rgba = o._rgba),
                  !1)
                : void 0;
            }),
            n.length
              ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), i)
              : o[e]
          );
        }
        function s(t, e, i) {
          return (
            (i = (i + 1) % 1),
            1 > 6 * i
              ? t + (e - t) * i * 6
              : 1 > 2 * i
              ? e
              : 2 > 3 * i
              ? t + (e - t) * (2 / 3 - i) * 6
              : t
          );
        }
        var o,
          r =
            "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
          a = /^([\-+])=\s*(\d+\.?\d*)/,
          l = [
            {
              re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (t) {
                return [t[1], t[2], t[3], t[4]];
              },
            },
            {
              re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
              },
            },
            {
              re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
              parse: function (t) {
                return [
                  parseInt(t[1], 16),
                  parseInt(t[2], 16),
                  parseInt(t[3], 16),
                ];
              },
            },
            {
              re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
              parse: function (t) {
                return [
                  parseInt(t[1] + t[1], 16),
                  parseInt(t[2] + t[2], 16),
                  parseInt(t[3] + t[3], 16),
                ];
              },
            },
            {
              re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              space: "hsla",
              parse: function (t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]];
              },
            },
          ],
          c = (t.Color = function (e, i, n, s) {
            return new t.Color.fn.parse(e, i, n, s);
          }),
          u = {
            rgba: {
              props: {
                red: { idx: 0, type: "byte" },
                green: { idx: 1, type: "byte" },
                blue: { idx: 2, type: "byte" },
              },
            },
            hsla: {
              props: {
                hue: { idx: 0, type: "degrees" },
                saturation: { idx: 1, type: "percent" },
                lightness: { idx: 2, type: "percent" },
              },
            },
          },
          h = {
            byte: { floor: !0, max: 255 },
            percent: { max: 1 },
            degrees: { mod: 360, floor: !0 },
          },
          d = (c.support = {}),
          p = t("<p>")[0],
          f = t.each;
        (p.style.cssText = "background-color:rgba(1,1,1,.5)"),
          (d.rgba = p.style.backgroundColor.indexOf("rgba") > -1),
          f(u, function (t, e) {
            (e.cache = "_" + t),
              (e.props.alpha = { idx: 3, type: "percent", def: 1 });
          }),
          (c.fn = t.extend(c.prototype, {
            parse: function (s, r, a, l) {
              if (s === e) return (this._rgba = [null, null, null, null]), this;
              (s.jquery || s.nodeType) && ((s = t(s).css(r)), (r = e));
              var h = this,
                d = t.type(s),
                p = (this._rgba = []);
              return (
                r !== e && ((s = [s, r, a, l]), (d = "array")),
                "string" === d
                  ? this.parse(n(s) || o._default)
                  : "array" === d
                  ? (f(u.rgba.props, function (t, e) {
                      p[e.idx] = i(s[e.idx], e);
                    }),
                    this)
                  : "object" === d
                  ? (s instanceof c
                      ? f(u, function (t, e) {
                          s[e.cache] && (h[e.cache] = s[e.cache].slice());
                        })
                      : f(u, function (e, n) {
                          var o = n.cache;
                          f(n.props, function (t, e) {
                            if (!h[o] && n.to) {
                              if ("alpha" === t || null == s[t]) return;
                              h[o] = n.to(h._rgba);
                            }
                            h[o][e.idx] = i(s[t], e, !0);
                          }),
                            h[o] &&
                              t.inArray(null, h[o].slice(0, 3)) < 0 &&
                              ((h[o][3] = 1),
                              n.from && (h._rgba = n.from(h[o])));
                        }),
                    this)
                  : void 0
              );
            },
            is: function (t) {
              var e = c(t),
                i = !0,
                n = this;
              return (
                f(u, function (t, s) {
                  var o,
                    r = e[s.cache];
                  return (
                    r &&
                      ((o = n[s.cache] || (s.to && s.to(n._rgba)) || []),
                      f(s.props, function (t, e) {
                        return null != r[e.idx]
                          ? (i = r[e.idx] === o[e.idx])
                          : void 0;
                      })),
                    i
                  );
                }),
                i
              );
            },
            _space: function () {
              var t = [],
                e = this;
              return (
                f(u, function (i, n) {
                  e[n.cache] && t.push(i);
                }),
                t.pop()
              );
            },
            transition: function (t, e) {
              var n = c(t),
                s = n._space(),
                o = u[s],
                r = 0 === this.alpha() ? c("transparent") : this,
                a = r[o.cache] || o.to(r._rgba),
                l = a.slice();
              return (
                (n = n[o.cache]),
                f(o.props, function (t, s) {
                  var o = s.idx,
                    r = a[o],
                    c = n[o],
                    u = h[s.type] || {};
                  null !== c &&
                    (null === r
                      ? (l[o] = c)
                      : (u.mod &&
                          (c - r > u.mod / 2
                            ? (r += u.mod)
                            : r - c > u.mod / 2 && (r -= u.mod)),
                        (l[o] = i((c - r) * e + r, s))));
                }),
                this[s](l)
              );
            },
            blend: function (e) {
              if (1 === this._rgba[3]) return this;
              var i = this._rgba.slice(),
                n = i.pop(),
                s = c(e)._rgba;
              return c(
                t.map(i, function (t, e) {
                  return (1 - n) * s[e] + n * t;
                })
              );
            },
            toRgbaString: function () {
              var e = "rgba(",
                i = t.map(this._rgba, function (t, e) {
                  return null == t ? (e > 2 ? 1 : 0) : t;
                });
              return 1 === i[3] && (i.pop(), (e = "rgb(")), e + i.join() + ")";
            },
            toHslaString: function () {
              var e = "hsla(",
                i = t.map(this.hsla(), function (t, e) {
                  return (
                    null == t && (t = e > 2 ? 1 : 0),
                    e && 3 > e && (t = Math.round(100 * t) + "%"),
                    t
                  );
                });
              return 1 === i[3] && (i.pop(), (e = "hsl(")), e + i.join() + ")";
            },
            toHexString: function (e) {
              var i = this._rgba.slice(),
                n = i.pop();
              return (
                e && i.push(~~(255 * n)),
                "#" +
                  t
                    .map(i, function (t) {
                      return (
                        (t = (t || 0).toString(16)),
                        1 === t.length ? "0" + t : t
                      );
                    })
                    .join("")
              );
            },
            toString: function () {
              return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            },
          })),
          (c.fn.parse.prototype = c.fn),
          (u.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])
              return [null, null, null, t[3]];
            var e,
              i,
              n = t[0] / 255,
              s = t[1] / 255,
              o = t[2] / 255,
              r = t[3],
              a = Math.max(n, s, o),
              l = Math.min(n, s, o),
              c = a - l,
              u = a + l,
              h = 0.5 * u;
            return (
              (e =
                l === a
                  ? 0
                  : n === a
                  ? (60 * (s - o)) / c + 360
                  : s === a
                  ? (60 * (o - n)) / c + 120
                  : (60 * (n - s)) / c + 240),
              (i = 0 === c ? 0 : 0.5 >= h ? c / u : c / (2 - u)),
              [Math.round(e) % 360, i, h, null == r ? 1 : r]
            );
          }),
          (u.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])
              return [null, null, null, t[3]];
            var e = t[0] / 360,
              i = t[1],
              n = t[2],
              o = t[3],
              r = 0.5 >= n ? n * (1 + i) : n + i - n * i,
              a = 2 * n - r;
            return [
              Math.round(255 * s(a, r, e + 1 / 3)),
              Math.round(255 * s(a, r, e)),
              Math.round(255 * s(a, r, e - 1 / 3)),
              o,
            ];
          }),
          f(u, function (n, s) {
            var o = s.props,
              r = s.cache,
              l = s.to,
              u = s.from;
            (c.fn[n] = function (n) {
              if ((l && !this[r] && (this[r] = l(this._rgba)), n === e))
                return this[r].slice();
              var s,
                a = t.type(n),
                h = "array" === a || "object" === a ? n : arguments,
                d = this[r].slice();
              return (
                f(o, function (t, e) {
                  var n = h["object" === a ? t : e.idx];
                  null == n && (n = d[e.idx]), (d[e.idx] = i(n, e));
                }),
                u ? ((s = c(u(d))), (s[r] = d), s) : c(d)
              );
            }),
              f(o, function (e, i) {
                c.fn[e] ||
                  (c.fn[e] = function (s) {
                    var o,
                      r = t.type(s),
                      l = "alpha" === e ? (this._hsla ? "hsla" : "rgba") : n,
                      c = this[l](),
                      u = c[i.idx];
                    return "undefined" === r
                      ? u
                      : ("function" === r &&
                          ((s = s.call(this, u)), (r = t.type(s))),
                        null == s && i.empty
                          ? this
                          : ("string" === r &&
                              ((o = a.exec(s)),
                              o &&
                                (s =
                                  u +
                                  parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))),
                            (c[i.idx] = s),
                            this[l](c)));
                  });
              });
          }),
          (c.hook = function (e) {
            var i = e.split(" ");
            f(i, function (e, i) {
              (t.cssHooks[i] = {
                set: function (e, s) {
                  var o,
                    r,
                    a = "";
                  if (
                    "transparent" !== s &&
                    ("string" !== t.type(s) || (o = n(s)))
                  ) {
                    if (((s = c(o || s)), !d.rgba && 1 !== s._rgba[3])) {
                      for (
                        r = "backgroundColor" === i ? e.parentNode : e;
                        ("" === a || "transparent" === a) && r && r.style;

                      )
                        try {
                          (a = t.css(r, "backgroundColor")), (r = r.parentNode);
                        } catch (l) {}
                      s = s.blend(a && "transparent" !== a ? a : "_default");
                    }
                    s = s.toRgbaString();
                  }
                  try {
                    e.style[i] = s;
                  } catch (l) {}
                },
              }),
                (t.fx.step[i] = function (e) {
                  e.colorInit ||
                    ((e.start = c(e.elem, i)),
                    (e.end = c(e.end)),
                    (e.colorInit = !0)),
                    t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
                });
            });
          }),
          c.hook(r),
          (t.cssHooks.borderColor = {
            expand: function (t) {
              var e = {};
              return (
                f(["Top", "Right", "Bottom", "Left"], function (i, n) {
                  e["border" + n + "Color"] = t;
                }),
                e
              );
            },
          }),
          (o = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff",
          });
      })(i),
      (function () {
        function e(e) {
          var i,
            n,
            s = e.ownerDocument.defaultView
              ? e.ownerDocument.defaultView.getComputedStyle(e, null)
              : e.currentStyle,
            o = {};
          if (s && s.length && s[0] && s[s[0]])
            for (n = s.length; n--; )
              (i = s[n]), "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]);
          else for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
          return o;
        }
        function n(e, i) {
          var n,
            s,
            r = {};
          for (n in i)
            (s = i[n]),
              e[n] !== s &&
                (o[n] ||
                  ((t.fx.step[n] || !isNaN(parseFloat(s))) && (r[n] = s)));
          return r;
        }
        var s = ["add", "remove", "toggle"],
          o = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1,
          };
        t.each(
          [
            "borderLeftStyle",
            "borderRightStyle",
            "borderBottomStyle",
            "borderTopStyle",
          ],
          function (e, n) {
            t.fx.step[n] = function (t) {
              (("none" !== t.end && !t.setAttr) ||
                (1 === t.pos && !t.setAttr)) &&
                (i.style(t.elem, n, t.end), (t.setAttr = !0));
            };
          }
        ),
          t.fn.addBack ||
            (t.fn.addBack = function (t) {
              return this.add(
                null == t ? this.prevObject : this.prevObject.filter(t)
              );
            }),
          (t.effects.animateClass = function (i, o, r, a) {
            var l = t.speed(o, r, a);
            return this.queue(function () {
              var o,
                r = t(this),
                a = r.attr("class") || "",
                c = l.children ? r.find("*").addBack() : r;
              (c = c.map(function () {
                var i = t(this);
                return { el: i, start: e(this) };
              })),
                (o = function () {
                  t.each(s, function (t, e) {
                    i[e] && r[e + "Class"](i[e]);
                  });
                }),
                o(),
                (c = c.map(function () {
                  return (
                    (this.end = e(this.el[0])),
                    (this.diff = n(this.start, this.end)),
                    this
                  );
                })),
                r.attr("class", a),
                (c = c.map(function () {
                  var e = this,
                    i = t.Deferred(),
                    n = t.extend({}, l, {
                      queue: !1,
                      complete: function () {
                        i.resolve(e);
                      },
                    });
                  return this.el.animate(this.diff, n), i.promise();
                })),
                t.when.apply(t, c.get()).done(function () {
                  o(),
                    t.each(arguments, function () {
                      var e = this.el;
                      t.each(this.diff, function (t) {
                        e.css(t, "");
                      });
                    }),
                    l.complete.call(r[0]);
                });
            });
          }),
          t.fn.extend({
            addClass: (function (e) {
              return function (i, n, s, o) {
                return n
                  ? t.effects.animateClass.call(this, { add: i }, n, s, o)
                  : e.apply(this, arguments);
              };
            })(t.fn.addClass),
            removeClass: (function (e) {
              return function (i, n, s, o) {
                return arguments.length > 1
                  ? t.effects.animateClass.call(this, { remove: i }, n, s, o)
                  : e.apply(this, arguments);
              };
            })(t.fn.removeClass),
            toggleClass: (function (e) {
              return function (i, n, s, o, r) {
                return "boolean" == typeof n || void 0 === n
                  ? s
                    ? t.effects.animateClass.call(
                        this,
                        n ? { add: i } : { remove: i },
                        s,
                        o,
                        r
                      )
                    : e.apply(this, arguments)
                  : t.effects.animateClass.call(this, { toggle: i }, n, s, o);
              };
            })(t.fn.toggleClass),
            switchClass: function (e, i, n, s, o) {
              return t.effects.animateClass.call(
                this,
                { add: i, remove: e },
                n,
                s,
                o
              );
            },
          });
      })(),
      (function () {
        function i(e, i, n, s) {
          return (
            t.isPlainObject(e) && ((i = e), (e = e.effect)),
            (e = { effect: e }),
            null == i && (i = {}),
            t.isFunction(i) && ((s = i), (n = null), (i = {})),
            ("number" == typeof i || t.fx.speeds[i]) &&
              ((s = n), (n = i), (i = {})),
            t.isFunction(n) && ((s = n), (n = null)),
            i && t.extend(e, i),
            (n = n || i.duration),
            (e.duration = t.fx.off
              ? 0
              : "number" == typeof n
              ? n
              : n in t.fx.speeds
              ? t.fx.speeds[n]
              : t.fx.speeds._default),
            (e.complete = s || i.complete),
            e
          );
        }
        function n(e) {
          return !e || "number" == typeof e || t.fx.speeds[e]
            ? !0
            : "string" != typeof e || t.effects.effect[e]
            ? t.isFunction(e)
              ? !0
              : "object" != typeof e || e.effect
              ? !1
              : !0
            : !0;
        }
        t.extend(t.effects, {
          version: "1.11.4",
          save: function (t, i) {
            for (var n = 0; n < i.length; n++)
              null !== i[n] && t.data(e + i[n], t[0].style[i[n]]);
          },
          restore: function (t, i) {
            var n, s;
            for (s = 0; s < i.length; s++)
              null !== i[s] &&
                ((n = t.data(e + i[s])),
                void 0 === n && (n = ""),
                t.css(i[s], n));
          },
          setMode: function (t, e) {
            return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
          },
          getBaseline: function (t, e) {
            var i, n;
            switch (t[0]) {
              case "top":
                i = 0;
                break;
              case "middle":
                i = 0.5;
                break;
              case "bottom":
                i = 1;
                break;
              default:
                i = t[0] / e.height;
            }
            switch (t[1]) {
              case "left":
                n = 0;
                break;
              case "center":
                n = 0.5;
                break;
              case "right":
                n = 1;
                break;
              default:
                n = t[1] / e.width;
            }
            return { x: n, y: i };
          },
          createWrapper: function (e) {
            if (e.parent().is(".ui-effects-wrapper")) return e.parent();
            var i = {
                width: e.outerWidth(!0),
                height: e.outerHeight(!0),
                float: e.css("float"),
              },
              n = t("<div></div>")
                .addClass("ui-effects-wrapper")
                .css({
                  fontSize: "100%",
                  background: "transparent",
                  border: "none",
                  margin: 0,
                  padding: 0,
                }),
              s = { width: e.width(), height: e.height() },
              o = document.activeElement;
            try {
              o.id;
            } catch (r) {
              o = document.body;
            }
            return (
              e.wrap(n),
              (e[0] === o || t.contains(e[0], o)) && t(o).focus(),
              (n = e.parent()),
              "static" === e.css("position")
                ? (n.css({ position: "relative" }),
                  e.css({ position: "relative" }))
                : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index"),
                  }),
                  t.each(["top", "left", "bottom", "right"], function (t, n) {
                    (i[n] = e.css(n)),
                      isNaN(parseInt(i[n], 10)) && (i[n] = "auto");
                  }),
                  e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto",
                  })),
              e.css(s),
              n.css(i).show()
            );
          },
          removeWrapper: function (e) {
            var i = document.activeElement;
            return (
              e.parent().is(".ui-effects-wrapper") &&
                (e.parent().replaceWith(e),
                (e[0] === i || t.contains(e[0], i)) && t(i).focus()),
              e
            );
          },
          setTransition: function (e, i, n, s) {
            return (
              (s = s || {}),
              t.each(i, function (t, i) {
                var o = e.cssUnit(i);
                o[0] > 0 && (s[i] = o[0] * n + o[1]);
              }),
              s
            );
          },
        }),
          t.fn.extend({
            effect: function () {
              function e(e) {
                function i() {
                  t.isFunction(o) && o.call(s[0]), t.isFunction(e) && e();
                }
                var s = t(this),
                  o = n.complete,
                  a = n.mode;
                (s.is(":hidden") ? "hide" === a : "show" === a)
                  ? (s[a](), i())
                  : r.call(s[0], n, i);
              }
              var n = i.apply(this, arguments),
                s = n.mode,
                o = n.queue,
                r = t.effects.effect[n.effect];
              return t.fx.off || !r
                ? s
                  ? this[s](n.duration, n.complete)
                  : this.each(function () {
                      n.complete && n.complete.call(this);
                    })
                : o === !1
                ? this.each(e)
                : this.queue(o || "fx", e);
            },
            show: (function (t) {
              return function (e) {
                if (n(e)) return t.apply(this, arguments);
                var s = i.apply(this, arguments);
                return (s.mode = "show"), this.effect.call(this, s);
              };
            })(t.fn.show),
            hide: (function (t) {
              return function (e) {
                if (n(e)) return t.apply(this, arguments);
                var s = i.apply(this, arguments);
                return (s.mode = "hide"), this.effect.call(this, s);
              };
            })(t.fn.hide),
            toggle: (function (t) {
              return function (e) {
                if (n(e) || "boolean" == typeof e)
                  return t.apply(this, arguments);
                var s = i.apply(this, arguments);
                return (s.mode = "toggle"), this.effect.call(this, s);
              };
            })(t.fn.toggle),
            cssUnit: function (e) {
              var i = this.css(e),
                n = [];
              return (
                t.each(["em", "px", "%", "pt"], function (t, e) {
                  i.indexOf(e) > 0 && (n = [parseFloat(i), e]);
                }),
                n
              );
            },
          });
      })(),
      (function () {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
          e[i] = function (e) {
            return Math.pow(e, t + 2);
          };
        }),
          t.extend(e, {
            Sine: function (t) {
              return 1 - Math.cos((t * Math.PI) / 2);
            },
            Circ: function (t) {
              return 1 - Math.sqrt(1 - t * t);
            },
            Elastic: function (t) {
              return 0 === t || 1 === t
                ? t
                : -Math.pow(2, 8 * (t - 1)) *
                    Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
            },
            Back: function (t) {
              return t * t * (3 * t - 2);
            },
            Bounce: function (t) {
              for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11; );
              return (
                1 / Math.pow(4, 3 - i) -
                7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
              );
            },
          }),
          t.each(e, function (e, i) {
            (t.easing["easeIn" + e] = i),
              (t.easing["easeOut" + e] = function (t) {
                return 1 - i(1 - t);
              }),
              (t.easing["easeInOut" + e] = function (t) {
                return 0.5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
              });
          });
      })(),
      t.effects
    );
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./effect"], t)
      : t(jQuery);
  })(function (t) {
    return (t.effects.effect.blind = function (e, i) {
      var n,
        s,
        o,
        r = t(this),
        a = /up|down|vertical/,
        l = /up|left|vertical|horizontal/,
        c = ["position", "top", "bottom", "left", "right", "height", "width"],
        u = t.effects.setMode(r, e.mode || "hide"),
        h = e.direction || "up",
        d = a.test(h),
        p = d ? "height" : "width",
        f = d ? "top" : "left",
        m = l.test(h),
        g = {},
        v = "show" === u;
      r.parent().is(".ui-effects-wrapper")
        ? t.effects.save(r.parent(), c)
        : t.effects.save(r, c),
        r.show(),
        (n = t.effects.createWrapper(r).css({ overflow: "hidden" })),
        (s = n[p]()),
        (o = parseFloat(n.css(f)) || 0),
        (g[p] = v ? s : 0),
        m ||
          (r
            .css(d ? "bottom" : "right", 0)
            .css(d ? "top" : "left", "auto")
            .css({ position: "absolute" }),
          (g[f] = v ? o : s + o)),
        v && (n.css(p, 0), m || n.css(f, o + s)),
        n.animate(g, {
          duration: e.duration,
          easing: e.easing,
          queue: !1,
          complete: function () {
            "hide" === u && r.hide(),
              t.effects.restore(r, c),
              t.effects.removeWrapper(r),
              i();
          },
        });
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./effect"], t)
      : t(jQuery);
  })(function (t) {
    return (t.effects.effect.bounce = function (e, i) {
      var n,
        s,
        o,
        r = t(this),
        a = ["position", "top", "bottom", "left", "right", "height", "width"],
        l = t.effects.setMode(r, e.mode || "effect"),
        c = "hide" === l,
        u = "show" === l,
        h = e.direction || "up",
        d = e.distance,
        p = e.times || 5,
        f = 2 * p + (u || c ? 1 : 0),
        m = e.duration / f,
        g = e.easing,
        v = "up" === h || "down" === h ? "top" : "left",
        b = "up" === h || "left" === h,
        y = r.queue(),
        _ = y.length;
      for (
        (u || c) && a.push("opacity"),
          t.effects.save(r, a),
          r.show(),
          t.effects.createWrapper(r),
          d || (d = r["top" === v ? "outerHeight" : "outerWidth"]() / 3),
          u &&
            ((o = { opacity: 1 }),
            (o[v] = 0),
            r
              .css("opacity", 0)
              .css(v, b ? 2 * -d : 2 * d)
              .animate(o, m, g)),
          c && (d /= Math.pow(2, p - 1)),
          o = {},
          o[v] = 0,
          n = 0;
        p > n;
        n++
      )
        (s = {}),
          (s[v] = (b ? "-=" : "+=") + d),
          r.animate(s, m, g).animate(o, m, g),
          (d = c ? 2 * d : d / 2);
      c &&
        ((s = { opacity: 0 }),
        (s[v] = (b ? "-=" : "+=") + d),
        r.animate(s, m, g)),
        r.queue(function () {
          c && r.hide(),
            t.effects.restore(r, a),
            t.effects.removeWrapper(r),
            i();
        }),
        _ > 1 && y.splice.apply(y, [1, 0].concat(y.splice(_, f + 1))),
        r.dequeue();
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./effect"], t)
      : t(jQuery);
  })(function (t) {
    return (t.effects.effect.clip = function (e, i) {
      var n,
        s,
        o,
        r = t(this),
        a = ["position", "top", "bottom", "left", "right", "height", "width"],
        l = t.effects.setMode(r, e.mode || "hide"),
        c = "show" === l,
        u = e.direction || "vertical",
        h = "vertical" === u,
        d = h ? "height" : "width",
        p = h ? "top" : "left",
        f = {};
      t.effects.save(r, a),
        r.show(),
        (n = t.effects.createWrapper(r).css({ overflow: "hidden" })),
        (s = "IMG" === r[0].tagName ? n : r),
        (o = s[d]()),
        c && (s.css(d, 0), s.css(p, o / 2)),
        (f[d] = c ? o : 0),
        (f[p] = c ? 0 : o / 2),
        s.animate(f, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: function () {
            c || r.hide(),
              t.effects.restore(r, a),
              t.effects.removeWrapper(r),
              i();
          },
        });
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./effect"], t)
      : t(jQuery);
  })(function (t) {
    return (t.effects.effect.drop = function (e, i) {
      var n,
        s = t(this),
        o = [
          "position",
          "top",
          "bottom",
          "left",
          "right",
          "opacity",
          "height",
          "width",
        ],
        r = t.effects.setMode(s, e.mode || "hide"),
        a = "show" === r,
        l = e.direction || "left",
        c = "up" === l || "down" === l ? "top" : "left",
        u = "up" === l || "left" === l ? "pos" : "neg",
        h = { opacity: a ? 1 : 0 };
      t.effects.save(s, o),
        s.show(),
        t.effects.createWrapper(s),
        (n =
          e.distance || s["top" === c ? "outerHeight" : "outerWidth"](!0) / 2),
        a && s.css("opacity", 0).css(c, "pos" === u ? -n : n),
        (h[c] =
          (a ? ("pos" === u ? "+=" : "-=") : "pos" === u ? "-=" : "+=") + n),
        s.animate(h, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: function () {
            "hide" === r && s.hide(),
              t.effects.restore(s, o),
              t.effects.removeWrapper(s),
              i();
          },
        });
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./effect"], t)
      : t(jQuery);
  })(function (t) {
    return (t.effects.effect.explode = function (e, i) {
      function n() {
        y.push(this), y.length === h * d && s();
      }
      function s() {
        p.css({ visibility: "visible" }), t(y).remove(), m || p.hide(), i();
      }
      var o,
        r,
        a,
        l,
        c,
        u,
        h = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
        d = h,
        p = t(this),
        f = t.effects.setMode(p, e.mode || "hide"),
        m = "show" === f,
        g = p.show().css("visibility", "hidden").offset(),
        v = Math.ceil(p.outerWidth() / d),
        b = Math.ceil(p.outerHeight() / h),
        y = [];
      for (o = 0; h > o; o++)
        for (l = g.top + o * b, u = o - (h - 1) / 2, r = 0; d > r; r++)
          (a = g.left + r * v),
            (c = r - (d - 1) / 2),
            p
              .clone()
              .appendTo("body")
              .wrap("<div></div>")
              .css({
                position: "absolute",
                visibility: "visible",
                left: -r * v,
                top: -o * b,
              })
              .parent()
              .addClass("ui-effects-explode")
              .css({
                position: "absolute",
                overflow: "hidden",
                width: v,
                height: b,
                left: a + (m ? c * v : 0),
                top: l + (m ? u * b : 0),
                opacity: m ? 0 : 1,
              })
              .animate(
                {
                  left: a + (m ? 0 : c * v),
                  top: l + (m ? 0 : u * b),
                  opacity: m ? 1 : 0,
                },
                e.duration || 500,
                e.easing,
                n
              );
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./effect"], t)
      : t(jQuery);
  })(function (t) {
    return (t.effects.effect.fade = function (e, i) {
      var n = t(this),
        s = t.effects.setMode(n, e.mode || "toggle");
      n.animate(
        { opacity: s },
        { queue: !1, duration: e.duration, easing: e.easing, complete: i }
      );
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./effect"], t)
      : t(jQuery);
  })(function (t) {
    return (t.effects.effect.fold = function (e, i) {
      var n,
        s,
        o = t(this),
        r = ["position", "top", "bottom", "left", "right", "height", "width"],
        a = t.effects.setMode(o, e.mode || "hide"),
        l = "show" === a,
        c = "hide" === a,
        u = e.size || 15,
        h = /([0-9]+)%/.exec(u),
        d = !!e.horizFirst,
        p = l !== d,
        f = p ? ["width", "height"] : ["height", "width"],
        m = e.duration / 2,
        g = {},
        v = {};
      t.effects.save(o, r),
        o.show(),
        (n = t.effects.createWrapper(o).css({ overflow: "hidden" })),
        (s = p ? [n.width(), n.height()] : [n.height(), n.width()]),
        h && (u = (parseInt(h[1], 10) / 100) * s[c ? 0 : 1]),
        l && n.css(d ? { height: 0, width: u } : { height: u, width: 0 }),
        (g[f[0]] = l ? s[0] : u),
        (v[f[1]] = l ? s[1] : 0),
        n.animate(g, m, e.easing).animate(v, m, e.easing, function () {
          c && o.hide(),
            t.effects.restore(o, r),
            t.effects.removeWrapper(o),
            i();
        });
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./effect"], t)
      : t(jQuery);
  })(function (t) {
    return (t.effects.effect.highlight = function (e, i) {
      var n = t(this),
        s = ["backgroundImage", "backgroundColor", "opacity"],
        o = t.effects.setMode(n, e.mode || "show"),
        r = { backgroundColor: n.css("backgroundColor") };
      "hide" === o && (r.opacity = 0),
        t.effects.save(n, s),
        n
          .show()
          .css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99",
          })
          .animate(r, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
              "hide" === o && n.hide(), t.effects.restore(n, s), i();
            },
          });
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./effect"], t)
      : t(jQuery);
  })(function (t) {
    return (t.effects.effect.size = function (e, i) {
      var n,
        s,
        o,
        r = t(this),
        a = [
          "position",
          "top",
          "bottom",
          "left",
          "right",
          "width",
          "height",
          "overflow",
          "opacity",
        ],
        l = [
          "position",
          "top",
          "bottom",
          "left",
          "right",
          "overflow",
          "opacity",
        ],
        c = ["width", "height", "overflow"],
        u = ["fontSize"],
        h = [
          "borderTopWidth",
          "borderBottomWidth",
          "paddingTop",
          "paddingBottom",
        ],
        d = [
          "borderLeftWidth",
          "borderRightWidth",
          "paddingLeft",
          "paddingRight",
        ],
        p = t.effects.setMode(r, e.mode || "effect"),
        f = e.restore || "effect" !== p,
        m = e.scale || "both",
        g = e.origin || ["middle", "center"],
        v = r.css("position"),
        b = f ? a : l,
        y = { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
      "show" === p && r.show(),
        (n = {
          height: r.height(),
          width: r.width(),
          outerHeight: r.outerHeight(),
          outerWidth: r.outerWidth(),
        }),
        "toggle" === e.mode && "show" === p
          ? ((r.from = e.to || y), (r.to = e.from || n))
          : ((r.from = e.from || ("show" === p ? y : n)),
            (r.to = e.to || ("hide" === p ? y : n))),
        (o = {
          from: { y: r.from.height / n.height, x: r.from.width / n.width },
          to: { y: r.to.height / n.height, x: r.to.width / n.width },
        }),
        ("box" === m || "both" === m) &&
          (o.from.y !== o.to.y &&
            ((b = b.concat(h)),
            (r.from = t.effects.setTransition(r, h, o.from.y, r.from)),
            (r.to = t.effects.setTransition(r, h, o.to.y, r.to))),
          o.from.x !== o.to.x &&
            ((b = b.concat(d)),
            (r.from = t.effects.setTransition(r, d, o.from.x, r.from)),
            (r.to = t.effects.setTransition(r, d, o.to.x, r.to)))),
        ("content" === m || "both" === m) &&
          o.from.y !== o.to.y &&
          ((b = b.concat(u).concat(c)),
          (r.from = t.effects.setTransition(r, u, o.from.y, r.from)),
          (r.to = t.effects.setTransition(r, u, o.to.y, r.to))),
        t.effects.save(r, b),
        r.show(),
        t.effects.createWrapper(r),
        r.css("overflow", "hidden").css(r.from),
        g &&
          ((s = t.effects.getBaseline(g, n)),
          (r.from.top = (n.outerHeight - r.outerHeight()) * s.y),
          (r.from.left = (n.outerWidth - r.outerWidth()) * s.x),
          (r.to.top = (n.outerHeight - r.to.outerHeight) * s.y),
          (r.to.left = (n.outerWidth - r.to.outerWidth) * s.x)),
        r.css(r.from),
        ("content" === m || "both" === m) &&
          ((h = h.concat(["marginTop", "marginBottom"]).concat(u)),
          (d = d.concat(["marginLeft", "marginRight"])),
          (c = a.concat(h).concat(d)),
          r.find("*[width]").each(function () {
            var i = t(this),
              n = {
                height: i.height(),
                width: i.width(),
                outerHeight: i.outerHeight(),
                outerWidth: i.outerWidth(),
              };
            f && t.effects.save(i, c),
              (i.from = {
                height: n.height * o.from.y,
                width: n.width * o.from.x,
                outerHeight: n.outerHeight * o.from.y,
                outerWidth: n.outerWidth * o.from.x,
              }),
              (i.to = {
                height: n.height * o.to.y,
                width: n.width * o.to.x,
                outerHeight: n.height * o.to.y,
                outerWidth: n.width * o.to.x,
              }),
              o.from.y !== o.to.y &&
                ((i.from = t.effects.setTransition(i, h, o.from.y, i.from)),
                (i.to = t.effects.setTransition(i, h, o.to.y, i.to))),
              o.from.x !== o.to.x &&
                ((i.from = t.effects.setTransition(i, d, o.from.x, i.from)),
                (i.to = t.effects.setTransition(i, d, o.to.x, i.to))),
              i.css(i.from),
              i.animate(i.to, e.duration, e.easing, function () {
                f && t.effects.restore(i, c);
              });
          })),
        r.animate(r.to, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: function () {
            0 === r.to.opacity && r.css("opacity", r.from.opacity),
              "hide" === p && r.hide(),
              t.effects.restore(r, b),
              f ||
                ("static" === v
                  ? r.css({
                      position: "relative",
                      top: r.to.top,
                      left: r.to.left,
                    })
                  : t.each(["top", "left"], function (t, e) {
                      r.css(e, function (e, i) {
                        var n = parseInt(i, 10),
                          s = t ? r.to.left : r.to.top;
                        return "auto" === i ? s + "px" : n + s + "px";
                      });
                    })),
              t.effects.removeWrapper(r),
              i();
          },
        });
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./effect", "./effect-size"], t)
      : t(jQuery);
  })(function (t) {
    return (t.effects.effect.scale = function (e, i) {
      var n = t(this),
        s = t.extend(!0, {}, e),
        o = t.effects.setMode(n, e.mode || "effect"),
        r =
          parseInt(e.percent, 10) ||
          (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100),
        a = e.direction || "both",
        l = e.origin,
        c = {
          height: n.height(),
          width: n.width(),
          outerHeight: n.outerHeight(),
          outerWidth: n.outerWidth(),
        },
        u = {
          y: "horizontal" !== a ? r / 100 : 1,
          x: "vertical" !== a ? r / 100 : 1,
        };
      (s.effect = "size"),
        (s.queue = !1),
        (s.complete = i),
        "effect" !== o &&
          ((s.origin = l || ["middle", "center"]), (s.restore = !0)),
        (s.from =
          e.from ||
          ("show" === o
            ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }
            : c)),
        (s.to = {
          height: c.height * u.y,
          width: c.width * u.x,
          outerHeight: c.outerHeight * u.y,
          outerWidth: c.outerWidth * u.x,
        }),
        s.fade &&
          ("show" === o && ((s.from.opacity = 0), (s.to.opacity = 1)),
          "hide" === o && ((s.from.opacity = 1), (s.to.opacity = 0))),
        n.effect(s);
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./effect", "./effect-scale"], t)
      : t(jQuery);
  })(function (t) {
    return (t.effects.effect.puff = function (e, i) {
      var n = t(this),
        s = t.effects.setMode(n, e.mode || "hide"),
        o = "hide" === s,
        r = parseInt(e.percent, 10) || 150,
        a = r / 100,
        l = {
          height: n.height(),
          width: n.width(),
          outerHeight: n.outerHeight(),
          outerWidth: n.outerWidth(),
        };
      t.extend(e, {
        effect: "scale",
        queue: !1,
        fade: !0,
        mode: s,
        complete: i,
        percent: o ? r : 100,
        from: o
          ? l
          : {
              height: l.height * a,
              width: l.width * a,
              outerHeight: l.outerHeight * a,
              outerWidth: l.outerWidth * a,
            },
      }),
        n.effect(e);
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./effect"], t)
      : t(jQuery);
  })(function (t) {
    return (t.effects.effect.pulsate = function (e, i) {
      var n,
        s = t(this),
        o = t.effects.setMode(s, e.mode || "show"),
        r = "show" === o,
        a = "hide" === o,
        l = r || "hide" === o,
        c = 2 * (e.times || 5) + (l ? 1 : 0),
        u = e.duration / c,
        h = 0,
        d = s.queue(),
        p = d.length;
      for (
        (r || !s.is(":visible")) && (s.css("opacity", 0).show(), (h = 1)),
          n = 1;
        c > n;
        n++
      )
        s.animate({ opacity: h }, u, e.easing), (h = 1 - h);
      s.animate({ opacity: h }, u, e.easing),
        s.queue(function () {
          a && s.hide(), i();
        }),
        p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, c + 1))),
        s.dequeue();
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./effect"], t)
      : t(jQuery);
  })(function (t) {
    return (t.effects.effect.shake = function (e, i) {
      var n,
        s = t(this),
        o = ["position", "top", "bottom", "left", "right", "height", "width"],
        r = t.effects.setMode(s, e.mode || "effect"),
        a = e.direction || "left",
        l = e.distance || 20,
        c = e.times || 3,
        u = 2 * c + 1,
        h = Math.round(e.duration / u),
        d = "up" === a || "down" === a ? "top" : "left",
        p = "up" === a || "left" === a,
        f = {},
        m = {},
        g = {},
        v = s.queue(),
        b = v.length;
      for (
        t.effects.save(s, o),
          s.show(),
          t.effects.createWrapper(s),
          f[d] = (p ? "-=" : "+=") + l,
          m[d] = (p ? "+=" : "-=") + 2 * l,
          g[d] = (p ? "-=" : "+=") + 2 * l,
          s.animate(f, h, e.easing),
          n = 1;
        c > n;
        n++
      )
        s.animate(m, h, e.easing).animate(g, h, e.easing);
      s
        .animate(m, h, e.easing)
        .animate(f, h / 2, e.easing)
        .queue(function () {
          "hide" === r && s.hide(),
            t.effects.restore(s, o),
            t.effects.removeWrapper(s),
            i();
        }),
        b > 1 && v.splice.apply(v, [1, 0].concat(v.splice(b, u + 1))),
        s.dequeue();
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./effect"], t)
      : t(jQuery);
  })(function (t) {
    return (t.effects.effect.slide = function (e, i) {
      var n,
        s = t(this),
        o = ["position", "top", "bottom", "left", "right", "width", "height"],
        r = t.effects.setMode(s, e.mode || "show"),
        a = "show" === r,
        l = e.direction || "left",
        c = "up" === l || "down" === l ? "top" : "left",
        u = "up" === l || "left" === l,
        h = {};
      t.effects.save(s, o),
        s.show(),
        (n = e.distance || s["top" === c ? "outerHeight" : "outerWidth"](!0)),
        t.effects.createWrapper(s).css({ overflow: "hidden" }),
        a && s.css(c, u ? (isNaN(n) ? "-" + n : -n) : n),
        (h[c] = (a ? (u ? "+=" : "-=") : u ? "-=" : "+=") + n),
        s.animate(h, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: function () {
            "hide" === r && s.hide(),
              t.effects.restore(s, o),
              t.effects.removeWrapper(s),
              i();
          },
        });
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./effect"], t)
      : t(jQuery);
  })(function (t) {
    return (t.effects.effect.transfer = function (e, i) {
      var n = t(this),
        s = t(e.to),
        o = "fixed" === s.css("position"),
        r = t("body"),
        a = o ? r.scrollTop() : 0,
        l = o ? r.scrollLeft() : 0,
        c = s.offset(),
        u = {
          top: c.top - a,
          left: c.left - l,
          height: s.innerHeight(),
          width: s.innerWidth(),
        },
        h = n.offset(),
        d = t("<div class='ui-effects-transfer'></div>")
          .appendTo(document.body)
          .addClass(e.className)
          .css({
            top: h.top - a,
            left: h.left - l,
            height: n.innerHeight(),
            width: n.innerWidth(),
            position: o ? "fixed" : "absolute",
          })
          .animate(u, e.duration, e.easing, function () {
            d.remove(), i();
          });
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./core", "./widget"], t)
      : t(jQuery);
  })(function (t) {
    return t.widget("ui.progressbar", {
      version: "1.11.4",
      options: { max: 100, value: 0, change: null, complete: null },
      min: 0,
      _create: function () {
        (this.oldValue = this.options.value = this._constrainedValue()),
          this.element
            .addClass(
              "ui-progressbar ui-widget ui-widget-content ui-corner-all"
            )
            .attr({ role: "progressbar", "aria-valuemin": this.min }),
          (this.valueDiv = t(
            "<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>"
          ).appendTo(this.element)),
          this._refreshValue();
      },
      _destroy: function () {
        this.element
          .removeClass(
            "ui-progressbar ui-widget ui-widget-content ui-corner-all"
          )
          .removeAttr("role")
          .removeAttr("aria-valuemin")
          .removeAttr("aria-valuemax")
          .removeAttr("aria-valuenow"),
          this.valueDiv.remove();
      },
      value: function (t) {
        return void 0 === t
          ? this.options.value
          : ((this.options.value = this._constrainedValue(t)),
            void this._refreshValue());
      },
      _constrainedValue: function (t) {
        return (
          void 0 === t && (t = this.options.value),
          (this.indeterminate = t === !1),
          "number" != typeof t && (t = 0),
          this.indeterminate
            ? !1
            : Math.min(this.options.max, Math.max(this.min, t))
        );
      },
      _setOptions: function (t) {
        var e = t.value;
        delete t.value,
          this._super(t),
          (this.options.value = this._constrainedValue(e)),
          this._refreshValue();
      },
      _setOption: function (t, e) {
        "max" === t && (e = Math.max(this.min, e)),
          "disabled" === t &&
            this.element
              .toggleClass("ui-state-disabled", !!e)
              .attr("aria-disabled", e),
          this._super(t, e);
      },
      _percentage: function () {
        return this.indeterminate
          ? 100
          : (100 * (this.options.value - this.min)) /
              (this.options.max - this.min);
      },
      _refreshValue: function () {
        var e = this.options.value,
          i = this._percentage();
        this.valueDiv
          .toggle(this.indeterminate || e > this.min)
          .toggleClass("ui-corner-right", e === this.options.max)
          .width(i.toFixed(0) + "%"),
          this.element.toggleClass(
            "ui-progressbar-indeterminate",
            this.indeterminate
          ),
          this.indeterminate
            ? (this.element.removeAttr("aria-valuenow"),
              this.overlayDiv ||
                (this.overlayDiv = t(
                  "<div class='ui-progressbar-overlay'></div>"
                ).appendTo(this.valueDiv)))
            : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e,
              }),
              this.overlayDiv &&
                (this.overlayDiv.remove(), (this.overlayDiv = null))),
          this.oldValue !== e && ((this.oldValue = e), this._trigger("change")),
          e === this.options.max && this._trigger("complete");
      },
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./core", "./mouse", "./widget"], t)
      : t(jQuery);
  })(function (t) {
    return t.widget("ui.selectable", t.ui.mouse, {
      version: "1.11.4",
      options: {
        appendTo: "body",
        autoRefresh: !0,
        distance: 0,
        filter: "*",
        tolerance: "touch",
        selected: null,
        selecting: null,
        start: null,
        stop: null,
        unselected: null,
        unselecting: null,
      },
      _create: function () {
        var e,
          i = this;
        this.element.addClass("ui-selectable"),
          (this.dragged = !1),
          (this.refresh = function () {
            (e = t(i.options.filter, i.element[0])),
              e.addClass("ui-selectee"),
              e.each(function () {
                var e = t(this),
                  i = e.offset();
                t.data(this, "selectable-item", {
                  element: this,
                  $element: e,
                  left: i.left,
                  top: i.top,
                  right: i.left + e.outerWidth(),
                  bottom: i.top + e.outerHeight(),
                  startselected: !1,
                  selected: e.hasClass("ui-selected"),
                  selecting: e.hasClass("ui-selecting"),
                  unselecting: e.hasClass("ui-unselecting"),
                });
              });
          }),
          this.refresh(),
          (this.selectees = e.addClass("ui-selectee")),
          this._mouseInit(),
          (this.helper = t("<div class='ui-selectable-helper'></div>"));
      },
      _destroy: function () {
        this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
          this.element.removeClass("ui-selectable ui-selectable-disabled"),
          this._mouseDestroy();
      },
      _mouseStart: function (e) {
        var i = this,
          n = this.options;
        (this.opos = [e.pageX, e.pageY]),
          this.options.disabled ||
            ((this.selectees = t(n.filter, this.element[0])),
            this._trigger("start", e),
            t(n.appendTo).append(this.helper),
            this.helper.css({
              left: e.pageX,
              top: e.pageY,
              width: 0,
              height: 0,
            }),
            n.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each(function () {
              var n = t.data(this, "selectable-item");
              (n.startselected = !0),
                e.metaKey ||
                  e.ctrlKey ||
                  (n.$element.removeClass("ui-selected"),
                  (n.selected = !1),
                  n.$element.addClass("ui-unselecting"),
                  (n.unselecting = !0),
                  i._trigger("unselecting", e, { unselecting: n.element }));
            }),
            t(e.target)
              .parents()
              .addBack()
              .each(function () {
                var n,
                  s = t.data(this, "selectable-item");
                return s
                  ? ((n =
                      (!e.metaKey && !e.ctrlKey) ||
                      !s.$element.hasClass("ui-selected")),
                    s.$element
                      .removeClass(n ? "ui-unselecting" : "ui-selected")
                      .addClass(n ? "ui-selecting" : "ui-unselecting"),
                    (s.unselecting = !n),
                    (s.selecting = n),
                    (s.selected = n),
                    n
                      ? i._trigger("selecting", e, { selecting: s.element })
                      : i._trigger("unselecting", e, {
                          unselecting: s.element,
                        }),
                    !1)
                  : void 0;
              }));
      },
      _mouseDrag: function (e) {
        if (((this.dragged = !0), !this.options.disabled)) {
          var i,
            n = this,
            s = this.options,
            o = this.opos[0],
            r = this.opos[1],
            a = e.pageX,
            l = e.pageY;
          return (
            o > a && ((i = a), (a = o), (o = i)),
            r > l && ((i = l), (l = r), (r = i)),
            this.helper.css({ left: o, top: r, width: a - o, height: l - r }),
            this.selectees.each(function () {
              var i = t.data(this, "selectable-item"),
                c = !1;
              i &&
                i.element !== n.element[0] &&
                ("touch" === s.tolerance
                  ? (c = !(
                      i.left > a ||
                      i.right < o ||
                      i.top > l ||
                      i.bottom < r
                    ))
                  : "fit" === s.tolerance &&
                    (c =
                      i.left > o && i.right < a && i.top > r && i.bottom < l),
                c
                  ? (i.selected &&
                      (i.$element.removeClass("ui-selected"),
                      (i.selected = !1)),
                    i.unselecting &&
                      (i.$element.removeClass("ui-unselecting"),
                      (i.unselecting = !1)),
                    i.selecting ||
                      (i.$element.addClass("ui-selecting"),
                      (i.selecting = !0),
                      n._trigger("selecting", e, { selecting: i.element })))
                  : (i.selecting &&
                      ((e.metaKey || e.ctrlKey) && i.startselected
                        ? (i.$element.removeClass("ui-selecting"),
                          (i.selecting = !1),
                          i.$element.addClass("ui-selected"),
                          (i.selected = !0))
                        : (i.$element.removeClass("ui-selecting"),
                          (i.selecting = !1),
                          i.startselected &&
                            (i.$element.addClass("ui-unselecting"),
                            (i.unselecting = !0)),
                          n._trigger("unselecting", e, {
                            unselecting: i.element,
                          }))),
                    i.selected &&
                      (e.metaKey ||
                        e.ctrlKey ||
                        i.startselected ||
                        (i.$element.removeClass("ui-selected"),
                        (i.selected = !1),
                        i.$element.addClass("ui-unselecting"),
                        (i.unselecting = !0),
                        n._trigger("unselecting", e, {
                          unselecting: i.element,
                        })))));
            }),
            !1
          );
        }
      },
      _mouseStop: function (e) {
        var i = this;
        return (
          (this.dragged = !1),
          t(".ui-unselecting", this.element[0]).each(function () {
            var n = t.data(this, "selectable-item");
            n.$element.removeClass("ui-unselecting"),
              (n.unselecting = !1),
              (n.startselected = !1),
              i._trigger("unselected", e, { unselected: n.element });
          }),
          t(".ui-selecting", this.element[0]).each(function () {
            var n = t.data(this, "selectable-item");
            n.$element.removeClass("ui-selecting").addClass("ui-selected"),
              (n.selecting = !1),
              (n.selected = !0),
              (n.startselected = !0),
              i._trigger("selected", e, { selected: n.element });
          }),
          this._trigger("stop", e),
          this.helper.remove(),
          !1
        );
      },
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./core", "./widget", "./position", "./menu"], t)
      : t(jQuery);
  })(function (t) {
    return t.widget("ui.selectmenu", {
      version: "1.11.4",
      defaultElement: "<select>",
      options: {
        appendTo: null,
        disabled: null,
        icons: { button: "ui-icon-triangle-1-s" },
        position: { my: "left top", at: "left bottom", collision: "none" },
        width: null,
        change: null,
        close: null,
        focus: null,
        open: null,
        select: null,
      },
      _create: function () {
        var t = this.element.uniqueId().attr("id");
        (this.ids = { element: t, button: t + "-button", menu: t + "-menu" }),
          this._drawButton(),
          this._drawMenu(),
          this.options.disabled && this.disable();
      },
      _drawButton: function () {
        var e = this;
        (this.label = t("label[for='" + this.ids.element + "']").attr(
          "for",
          this.ids.button
        )),
          this._on(this.label, {
            click: function (t) {
              this.button.focus(), t.preventDefault();
            },
          }),
          this.element.hide(),
          (this.button = t("<span>", {
            class:
              "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
            tabindex: this.options.disabled ? -1 : 0,
            id: this.ids.button,
            role: "combobox",
            "aria-expanded": "false",
            "aria-autocomplete": "list",
            "aria-owns": this.ids.menu,
            "aria-haspopup": "true",
          }).insertAfter(this.element)),
          t("<span>", {
            class: "ui-icon " + this.options.icons.button,
          }).prependTo(this.button),
          (this.buttonText = t("<span>", {
            class: "ui-selectmenu-text",
          }).appendTo(this.button)),
          this._setText(
            this.buttonText,
            this.element.find("option:selected").text()
          ),
          this._resizeButton(),
          this._on(this.button, this._buttonEvents),
          this.button.one("focusin", function () {
            e.menuItems || e._refreshMenu();
          }),
          this._hoverable(this.button),
          this._focusable(this.button);
      },
      _drawMenu: function () {
        var e = this;
        (this.menu = t("<ul>", {
          "aria-hidden": "true",
          "aria-labelledby": this.ids.button,
          id: this.ids.menu,
        })),
          (this.menuWrap = t("<div>", { class: "ui-selectmenu-menu ui-front" })
            .append(this.menu)
            .appendTo(this._appendTo())),
          (this.menuInstance = this.menu
            .menu({
              role: "listbox",
              select: function (t, i) {
                t.preventDefault(),
                  e._setSelection(),
                  e._select(i.item.data("ui-selectmenu-item"), t);
              },
              focus: function (t, i) {
                var n = i.item.data("ui-selectmenu-item");
                null != e.focusIndex &&
                  n.index !== e.focusIndex &&
                  (e._trigger("focus", t, { item: n }),
                  e.isOpen || e._select(n, t)),
                  (e.focusIndex = n.index),
                  e.button.attr(
                    "aria-activedescendant",
                    e.menuItems.eq(n.index).attr("id")
                  );
              },
            })
            .menu("instance")),
          this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),
          this.menuInstance._off(this.menu, "mouseleave"),
          (this.menuInstance._closeOnDocumentClick = function () {
            return !1;
          }),
          (this.menuInstance._isDivider = function () {
            return !1;
          });
      },
      refresh: function () {
        this._refreshMenu(),
          this._setText(this.buttonText, this._getSelectedItem().text()),
          this.options.width || this._resizeButton();
      },
      _refreshMenu: function () {
        this.menu.empty();
        var t,
          e = this.element.find("option");
        e.length &&
          (this._parseOptions(e),
          this._renderMenu(this.menu, this.items),
          this.menuInstance.refresh(),
          (this.menuItems = this.menu
            .find("li")
            .not(".ui-selectmenu-optgroup")),
          (t = this._getSelectedItem()),
          this.menuInstance.focus(null, t),
          this._setAria(t.data("ui-selectmenu-item")),
          this._setOption("disabled", this.element.prop("disabled")));
      },
      open: function (t) {
        this.options.disabled ||
          (this.menuItems
            ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),
              this.menuInstance.focus(null, this._getSelectedItem()))
            : this._refreshMenu(),
          (this.isOpen = !0),
          this._toggleAttr(),
          this._resizeMenu(),
          this._position(),
          this._on(this.document, this._documentClick),
          this._trigger("open", t));
      },
      _position: function () {
        this.menuWrap.position(
          t.extend({ of: this.button }, this.options.position)
        );
      },
      close: function (t) {
        this.isOpen &&
          ((this.isOpen = !1),
          this._toggleAttr(),
          (this.range = null),
          this._off(this.document),
          this._trigger("close", t));
      },
      widget: function () {
        return this.button;
      },
      menuWidget: function () {
        return this.menu;
      },
      _renderMenu: function (e, i) {
        var n = this,
          s = "";
        t.each(i, function (i, o) {
          o.optgroup !== s &&
            (t("<li>", {
              class:
                "ui-selectmenu-optgroup ui-menu-divider" +
                (o.element.parent("optgroup").prop("disabled")
                  ? " ui-state-disabled"
                  : ""),
              text: o.optgroup,
            }).appendTo(e),
            (s = o.optgroup)),
            n._renderItemData(e, o);
        });
      },
      _renderItemData: function (t, e) {
        return this._renderItem(t, e).data("ui-selectmenu-item", e);
      },
      _renderItem: function (e, i) {
        var n = t("<li>");
        return (
          i.disabled && n.addClass("ui-state-disabled"),
          this._setText(n, i.label),
          n.appendTo(e)
        );
      },
      _setText: function (t, e) {
        e ? t.text(e) : t.html("&#160;");
      },
      _move: function (t, e) {
        var i,
          n,
          s = ".ui-menu-item";
        this.isOpen
          ? (i = this.menuItems.eq(this.focusIndex))
          : ((i = this.menuItems.eq(this.element[0].selectedIndex)),
            (s += ":not(.ui-state-disabled)")),
          (n =
            "first" === t || "last" === t
              ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1)
              : i[t + "All"](s).eq(0)),
          n.length && this.menuInstance.focus(e, n);
      },
      _getSelectedItem: function () {
        return this.menuItems.eq(this.element[0].selectedIndex);
      },
      _toggle: function (t) {
        this[this.isOpen ? "close" : "open"](t);
      },
      _setSelection: function () {
        var t;
        this.range &&
          (window.getSelection
            ? ((t = window.getSelection()),
              t.removeAllRanges(),
              t.addRange(this.range))
            : this.range.select(),
          this.button.focus());
      },
      _documentClick: {
        mousedown: function (e) {
          this.isOpen &&
            (t(e.target).closest(".ui-selectmenu-menu, #" + this.ids.button)
              .length ||
              this.close(e));
        },
      },
      _buttonEvents: {
        mousedown: function () {
          var t;
          window.getSelection
            ? ((t = window.getSelection()),
              t.rangeCount && (this.range = t.getRangeAt(0)))
            : (this.range = document.selection.createRange());
        },
        click: function (t) {
          this._setSelection(), this._toggle(t);
        },
        keydown: function (e) {
          var i = !0;
          switch (e.keyCode) {
            case t.ui.keyCode.TAB:
            case t.ui.keyCode.ESCAPE:
              this.close(e), (i = !1);
              break;
            case t.ui.keyCode.ENTER:
              this.isOpen && this._selectFocusedItem(e);
              break;
            case t.ui.keyCode.UP:
              e.altKey ? this._toggle(e) : this._move("prev", e);
              break;
            case t.ui.keyCode.DOWN:
              e.altKey ? this._toggle(e) : this._move("next", e);
              break;
            case t.ui.keyCode.SPACE:
              this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
              break;
            case t.ui.keyCode.LEFT:
              this._move("prev", e);
              break;
            case t.ui.keyCode.RIGHT:
              this._move("next", e);
              break;
            case t.ui.keyCode.HOME:
            case t.ui.keyCode.PAGE_UP:
              this._move("first", e);
              break;
            case t.ui.keyCode.END:
            case t.ui.keyCode.PAGE_DOWN:
              this._move("last", e);
              break;
            default:
              this.menu.trigger(e), (i = !1);
          }
          i && e.preventDefault();
        },
      },
      _selectFocusedItem: function (t) {
        var e = this.menuItems.eq(this.focusIndex);
        e.hasClass("ui-state-disabled") ||
          this._select(e.data("ui-selectmenu-item"), t);
      },
      _select: function (t, e) {
        var i = this.element[0].selectedIndex;
        (this.element[0].selectedIndex = t.index),
          this._setText(this.buttonText, t.label),
          this._setAria(t),
          this._trigger("select", e, { item: t }),
          t.index !== i && this._trigger("change", e, { item: t }),
          this.close(e);
      },
      _setAria: function (t) {
        var e = this.menuItems.eq(t.index).attr("id");
        this.button.attr({ "aria-labelledby": e, "aria-activedescendant": e }),
          this.menu.attr("aria-activedescendant", e);
      },
      _setOption: function (t, e) {
        "icons" === t &&
          this.button
            .find("span.ui-icon")
            .removeClass(this.options.icons.button)
            .addClass(e.button),
          this._super(t, e),
          "appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
          "disabled" === t &&
            (this.menuInstance.option("disabled", e),
            this.button
              .toggleClass("ui-state-disabled", e)
              .attr("aria-disabled", e),
            this.element.prop("disabled", e),
            e
              ? (this.button.attr("tabindex", -1), this.close())
              : this.button.attr("tabindex", 0)),
          "width" === t && this._resizeButton();
      },
      _appendTo: function () {
        var e = this.options.appendTo;
        return (
          e &&
            (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
          (e && e[0]) || (e = this.element.closest(".ui-front")),
          e.length || (e = this.document[0].body),
          e
        );
      },
      _toggleAttr: function () {
        this.button
          .toggleClass("ui-corner-top", this.isOpen)
          .toggleClass("ui-corner-all", !this.isOpen)
          .attr("aria-expanded", this.isOpen),
          this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen),
          this.menu.attr("aria-hidden", !this.isOpen);
      },
      _resizeButton: function () {
        var t = this.options.width;
        t || ((t = this.element.show().outerWidth()), this.element.hide()),
          this.button.outerWidth(t);
      },
      _resizeMenu: function () {
        this.menu.outerWidth(
          Math.max(
            this.button.outerWidth(),
            this.menu.width("").outerWidth() + 1
          )
        );
      },
      _getCreateOptions: function () {
        return { disabled: this.element.prop("disabled") };
      },
      _parseOptions: function (e) {
        var i = [];
        e.each(function (e, n) {
          var s = t(n),
            o = s.parent("optgroup");
          i.push({
            element: s,
            index: e,
            value: s.val(),
            label: s.text(),
            optgroup: o.attr("label") || "",
            disabled: o.prop("disabled") || s.prop("disabled"),
          });
        }),
          (this.items = i);
      },
      _destroy: function () {
        this.menuWrap.remove(),
          this.button.remove(),
          this.element.show(),
          this.element.removeUniqueId(),
          this.label.attr("for", this.ids.element);
      },
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./core", "./mouse", "./widget"], t)
      : t(jQuery);
  })(function (t) {
    return t.widget("ui.slider", t.ui.mouse, {
      version: "1.11.4",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null,
      },
      numPages: 5,
      _create: function () {
        (this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this._calculateNewMax(),
          this.element.addClass(
            "ui-slider ui-slider-" +
              this.orientation +
              " ui-widget ui-widget-content ui-corner-all"
          ),
          this._refresh(),
          this._setOption("disabled", this.options.disabled),
          (this._animateOff = !1);
      },
      _refresh: function () {
        this._createRange(),
          this._createHandles(),
          this._setupEvents(),
          this._refreshValue();
      },
      _createHandles: function () {
        var e,
          i,
          n = this.options,
          s = this.element
            .find(".ui-slider-handle")
            .addClass("ui-state-default ui-corner-all"),
          o =
            "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
          r = [];
        for (
          i = (n.values && n.values.length) || 1,
            s.length > i && (s.slice(i).remove(), (s = s.slice(0, i))),
            e = s.length;
          i > e;
          e++
        )
          r.push(o);
        (this.handles = s.add(t(r.join("")).appendTo(this.element))),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function (e) {
            t(this).data("ui-slider-handle-index", e);
          });
      },
      _createRange: function () {
        var e = this.options,
          i = "";
        e.range
          ? (e.range === !0 &&
              (e.values
                ? e.values.length && 2 !== e.values.length
                  ? (e.values = [e.values[0], e.values[0]])
                  : t.isArray(e.values) && (e.values = e.values.slice(0))
                : (e.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? this.range
                  .removeClass("ui-slider-range-min ui-slider-range-max")
                  .css({ left: "", bottom: "" })
              : ((this.range = t("<div></div>").appendTo(this.element)),
                (i = "ui-slider-range ui-widget-header ui-corner-all")),
            this.range.addClass(
              i +
                ("min" === e.range || "max" === e.range
                  ? " ui-slider-range-" + e.range
                  : "")
            ))
          : (this.range && this.range.remove(), (this.range = null));
      },
      _setupEvents: function () {
        this._off(this.handles),
          this._on(this.handles, this._handleEvents),
          this._hoverable(this.handles),
          this._focusable(this.handles);
      },
      _destroy: function () {
        this.handles.remove(),
          this.range && this.range.remove(),
          this.element.removeClass(
            "ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"
          ),
          this._mouseDestroy();
      },
      _mouseCapture: function (e) {
        var i,
          n,
          s,
          o,
          r,
          a,
          l,
          c,
          u = this,
          h = this.options;
        return h.disabled
          ? !1
          : ((this.elementSize = {
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
            }),
            (this.elementOffset = this.element.offset()),
            (i = { x: e.pageX, y: e.pageY }),
            (n = this._normValueFromMouse(i)),
            (s = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function (e) {
              var i = Math.abs(n - u.values(e));
              (s > i ||
                (s === i &&
                  (e === u._lastChangedValue || u.values(e) === h.min))) &&
                ((s = i), (o = t(this)), (r = e));
            }),
            (a = this._start(e, r)),
            a === !1
              ? !1
              : ((this._mouseSliding = !0),
                (this._handleIndex = r),
                o.addClass("ui-state-active").focus(),
                (l = o.offset()),
                (c = !t(e.target).parents().addBack().is(".ui-slider-handle")),
                (this._clickOffset = c
                  ? { left: 0, top: 0 }
                  : {
                      left: e.pageX - l.left - o.width() / 2,
                      top:
                        e.pageY -
                        l.top -
                        o.height() / 2 -
                        (parseInt(o.css("borderTopWidth"), 10) || 0) -
                        (parseInt(o.css("borderBottomWidth"), 10) || 0) +
                        (parseInt(o.css("marginTop"), 10) || 0),
                    }),
                this.handles.hasClass("ui-state-hover") || this._slide(e, r, n),
                (this._animateOff = !0),
                !0));
      },
      _mouseStart: function () {
        return !0;
      },
      _mouseDrag: function (t) {
        var e = { x: t.pageX, y: t.pageY },
          i = this._normValueFromMouse(e);
        return this._slide(t, this._handleIndex, i), !1;
      },
      _mouseStop: function (t) {
        return (
          this.handles.removeClass("ui-state-active"),
          (this._mouseSliding = !1),
          this._stop(t, this._handleIndex),
          this._change(t, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1),
          !1
        );
      },
      _detectOrientation: function () {
        this.orientation =
          "vertical" === this.options.orientation ? "vertical" : "horizontal";
      },
      _normValueFromMouse: function (t) {
        var e, i, n, s, o;
        return (
          "horizontal" === this.orientation
            ? ((e = this.elementSize.width),
              (i =
                t.x -
                this.elementOffset.left -
                (this._clickOffset ? this._clickOffset.left : 0)))
            : ((e = this.elementSize.height),
              (i =
                t.y -
                this.elementOffset.top -
                (this._clickOffset ? this._clickOffset.top : 0))),
          (n = i / e),
          n > 1 && (n = 1),
          0 > n && (n = 0),
          "vertical" === this.orientation && (n = 1 - n),
          (s = this._valueMax() - this._valueMin()),
          (o = this._valueMin() + n * s),
          this._trimAlignValue(o)
        );
      },
      _start: function (t, e) {
        var i = { handle: this.handles[e], value: this.value() };
        return (
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(e)), (i.values = this.values())),
          this._trigger("start", t, i)
        );
      },
      _slide: function (t, e, i) {
        var n, s, o;
        this.options.values && this.options.values.length
          ? ((n = this.values(e ? 0 : 1)),
            2 === this.options.values.length &&
              this.options.range === !0 &&
              ((0 === e && i > n) || (1 === e && n > i)) &&
              (i = n),
            i !== this.values(e) &&
              ((s = this.values()),
              (s[e] = i),
              (o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: s,
              })),
              (n = this.values(e ? 0 : 1)),
              o !== !1 && this.values(e, i)))
          : i !== this.value() &&
            ((o = this._trigger("slide", t, {
              handle: this.handles[e],
              value: i,
            })),
            o !== !1 && this.value(i));
      },
      _stop: function (t, e) {
        var i = { handle: this.handles[e], value: this.value() };
        this.options.values &&
          this.options.values.length &&
          ((i.value = this.values(e)), (i.values = this.values())),
          this._trigger("stop", t, i);
      },
      _change: function (t, e) {
        if (!this._keySliding && !this._mouseSliding) {
          var i = { handle: this.handles[e], value: this.value() };
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(e)), (i.values = this.values())),
            (this._lastChangedValue = e),
            this._trigger("change", t, i);
        }
      },
      value: function (t) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(t)),
            this._refreshValue(),
            void this._change(null, 0))
          : this._value();
      },
      values: function (e, i) {
        var n, s, o;
        if (arguments.length > 1)
          return (
            (this.options.values[e] = this._trimAlignValue(i)),
            this._refreshValue(),
            void this._change(null, e)
          );
        if (!arguments.length) return this._values();
        if (!t.isArray(arguments[0]))
          return this.options.values && this.options.values.length
            ? this._values(e)
            : this.value();
        for (
          n = this.options.values, s = arguments[0], o = 0;
          o < n.length;
          o += 1
        )
          (n[o] = this._trimAlignValue(s[o])), this._change(null, o);
        this._refreshValue();
      },
      _setOption: function (e, i) {
        var n,
          s = 0;
        switch (
          ("range" === e &&
            this.options.range === !0 &&
            ("min" === i
              ? ((this.options.value = this._values(0)),
                (this.options.values = null))
              : "max" === i &&
                ((this.options.value = this._values(
                  this.options.values.length - 1
                )),
                (this.options.values = null))),
          t.isArray(this.options.values) && (s = this.options.values.length),
          "disabled" === e &&
            this.element.toggleClass("ui-state-disabled", !!i),
          this._super(e, i),
          e)
        ) {
          case "orientation":
            this._detectOrientation(),
              this.element
                .removeClass("ui-slider-horizontal ui-slider-vertical")
                .addClass("ui-slider-" + this.orientation),
              this._refreshValue(),
              this.handles.css("horizontal" === i ? "bottom" : "left", "");
            break;
          case "value":
            (this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1);
            break;
          case "values":
            for (
              this._animateOff = !0, this._refreshValue(), n = 0;
              s > n;
              n += 1
            )
              this._change(null, n);
            this._animateOff = !1;
            break;
          case "step":
          case "min":
          case "max":
            (this._animateOff = !0),
              this._calculateNewMax(),
              this._refreshValue(),
              (this._animateOff = !1);
            break;
          case "range":
            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
        }
      },
      _value: function () {
        var t = this.options.value;
        return (t = this._trimAlignValue(t));
      },
      _values: function (t) {
        var e, i, n;
        if (arguments.length)
          return (e = this.options.values[t]), (e = this._trimAlignValue(e));
        if (this.options.values && this.options.values.length) {
          for (i = this.options.values.slice(), n = 0; n < i.length; n += 1)
            i[n] = this._trimAlignValue(i[n]);
          return i;
        }
        return [];
      },
      _trimAlignValue: function (t) {
        if (t <= this._valueMin()) return this._valueMin();
        if (t >= this._valueMax()) return this._valueMax();
        var e = this.options.step > 0 ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          n = t - i;
        return (
          2 * Math.abs(i) >= e && (n += i > 0 ? e : -e),
          parseFloat(n.toFixed(5))
        );
      },
      _calculateNewMax: function () {
        var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step,
          n = Math.floor(+(t - e).toFixed(this._precision()) / i) * i;
        (t = n + e), (this.max = parseFloat(t.toFixed(this._precision())));
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return (
          null !== this.options.min &&
            (t = Math.max(t, this._precisionOf(this.options.min))),
          t
        );
      },
      _precisionOf: function (t) {
        var e = t.toString(),
          i = e.indexOf(".");
        return -1 === i ? 0 : e.length - i - 1;
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.max;
      },
      _refreshValue: function () {
        var e,
          i,
          n,
          s,
          o,
          r = this.options.range,
          a = this.options,
          l = this,
          c = this._animateOff ? !1 : a.animate,
          u = {};
        this.options.values && this.options.values.length
          ? this.handles.each(function (n) {
              (i =
                ((l.values(n) - l._valueMin()) /
                  (l._valueMax() - l._valueMin())) *
                100),
                (u["horizontal" === l.orientation ? "left" : "bottom"] =
                  i + "%"),
                t(this).stop(1, 1)[c ? "animate" : "css"](u, a.animate),
                l.options.range === !0 &&
                  ("horizontal" === l.orientation
                    ? (0 === n &&
                        l.range
                          .stop(1, 1)
                          [c ? "animate" : "css"]({ left: i + "%" }, a.animate),
                      1 === n &&
                        l.range[c ? "animate" : "css"](
                          { width: i - e + "%" },
                          { queue: !1, duration: a.animate }
                        ))
                    : (0 === n &&
                        l.range
                          .stop(1, 1)
                          [c ? "animate" : "css"](
                            { bottom: i + "%" },
                            a.animate
                          ),
                      1 === n &&
                        l.range[c ? "animate" : "css"](
                          { height: i - e + "%" },
                          { queue: !1, duration: a.animate }
                        ))),
                (e = i);
            })
          : ((n = this.value()),
            (s = this._valueMin()),
            (o = this._valueMax()),
            (i = o !== s ? ((n - s) / (o - s)) * 100 : 0),
            (u["horizontal" === this.orientation ? "left" : "bottom"] =
              i + "%"),
            this.handle.stop(1, 1)[c ? "animate" : "css"](u, a.animate),
            "min" === r &&
              "horizontal" === this.orientation &&
              this.range
                .stop(1, 1)
                [c ? "animate" : "css"]({ width: i + "%" }, a.animate),
            "max" === r &&
              "horizontal" === this.orientation &&
              this.range[c ? "animate" : "css"](
                { width: 100 - i + "%" },
                { queue: !1, duration: a.animate }
              ),
            "min" === r &&
              "vertical" === this.orientation &&
              this.range
                .stop(1, 1)
                [c ? "animate" : "css"]({ height: i + "%" }, a.animate),
            "max" === r &&
              "vertical" === this.orientation &&
              this.range[c ? "animate" : "css"](
                { height: 100 - i + "%" },
                { queue: !1, duration: a.animate }
              ));
      },
      _handleEvents: {
        keydown: function (e) {
          var i,
            n,
            s,
            o,
            r = t(e.target).data("ui-slider-handle-index");
          switch (e.keyCode) {
            case t.ui.keyCode.HOME:
            case t.ui.keyCode.END:
            case t.ui.keyCode.PAGE_UP:
            case t.ui.keyCode.PAGE_DOWN:
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (
                (e.preventDefault(),
                !this._keySliding &&
                  ((this._keySliding = !0),
                  t(e.target).addClass("ui-state-active"),
                  (i = this._start(e, r)),
                  i === !1))
              )
                return;
          }
          switch (
            ((o = this.options.step),
            (n = s =
              this.options.values && this.options.values.length
                ? this.values(r)
                : this.value()),
            e.keyCode)
          ) {
            case t.ui.keyCode.HOME:
              s = this._valueMin();
              break;
            case t.ui.keyCode.END:
              s = this._valueMax();
              break;
            case t.ui.keyCode.PAGE_UP:
              s = this._trimAlignValue(
                n + (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case t.ui.keyCode.PAGE_DOWN:
              s = this._trimAlignValue(
                n - (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
              if (n === this._valueMax()) return;
              s = this._trimAlignValue(n + o);
              break;
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (n === this._valueMin()) return;
              s = this._trimAlignValue(n - o);
          }
          this._slide(e, r, s);
        },
        keyup: function (e) {
          var i = t(e.target).data("ui-slider-handle-index");
          this._keySliding &&
            ((this._keySliding = !1),
            this._stop(e, i),
            this._change(e, i),
            t(e.target).removeClass("ui-state-active"));
        },
      },
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./core", "./mouse", "./widget"], t)
      : t(jQuery);
  })(function (t) {
    return t.widget("ui.sortable", t.ui.mouse, {
      version: "1.11.4",
      widgetEventPrefix: "sort",
      ready: !1,
      options: {
        appendTo: "parent",
        axis: !1,
        connectWith: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        dropOnEmpty: !0,
        forcePlaceholderSize: !1,
        forceHelperSize: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        items: "> *",
        opacity: !1,
        placeholder: !1,
        revert: !1,
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        scope: "default",
        tolerance: "intersect",
        zIndex: 1e3,
        activate: null,
        beforeStop: null,
        change: null,
        deactivate: null,
        out: null,
        over: null,
        receive: null,
        remove: null,
        sort: null,
        start: null,
        stop: null,
        update: null,
      },
      _isOverAxis: function (t, e, i) {
        return t >= e && e + i > t;
      },
      _isFloating: function (t) {
        return (
          /left|right/.test(t.css("float")) ||
          /inline|table-cell/.test(t.css("display"))
        );
      },
      _create: function () {
        (this.containerCache = {}),
          this.element.addClass("ui-sortable"),
          this.refresh(),
          (this.offset = this.element.offset()),
          this._mouseInit(),
          this._setHandleClassName(),
          (this.ready = !0);
      },
      _setOption: function (t, e) {
        this._super(t, e), "handle" === t && this._setHandleClassName();
      },
      _setHandleClassName: function () {
        this.element
          .find(".ui-sortable-handle")
          .removeClass("ui-sortable-handle"),
          t.each(this.items, function () {
            (this.instance.options.handle
              ? this.item.find(this.instance.options.handle)
              : this.item
            ).addClass("ui-sortable-handle");
          });
      },
      _destroy: function () {
        this.element
          .removeClass("ui-sortable ui-sortable-disabled")
          .find(".ui-sortable-handle")
          .removeClass("ui-sortable-handle"),
          this._mouseDestroy();
        for (var t = this.items.length - 1; t >= 0; t--)
          this.items[t].item.removeData(this.widgetName + "-item");
        return this;
      },
      _mouseCapture: function (e, i) {
        var n = null,
          s = !1,
          o = this;
        return this.reverting
          ? !1
          : this.options.disabled || "static" === this.options.type
          ? !1
          : (this._refreshItems(e),
            t(e.target)
              .parents()
              .each(function () {
                return t.data(this, o.widgetName + "-item") === o
                  ? ((n = t(this)), !1)
                  : void 0;
              }),
            t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)),
            n &&
            (!this.options.handle ||
              i ||
              (t(this.options.handle, n)
                .find("*")
                .addBack()
                .each(function () {
                  this === e.target && (s = !0);
                }),
              s))
              ? ((this.currentItem = n), this._removeCurrentsFromItems(), !0)
              : !1);
      },
      _mouseStart: function (e, i, n) {
        var s,
          o,
          r = this.options;
        if (
          ((this.currentContainer = this),
          this.refreshPositions(),
          (this.helper = this._createHelper(e)),
          this._cacheHelperProportions(),
          this._cacheMargins(),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offset = this.currentItem.offset()),
          (this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left,
          }),
          t.extend(this.offset, {
            click: {
              left: e.pageX - this.offset.left,
              top: e.pageY - this.offset.top,
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset(),
          }),
          this.helper.css("position", "absolute"),
          (this.cssPosition = this.helper.css("position")),
          (this.originalPosition = this._generatePosition(e)),
          (this.originalPageX = e.pageX),
          (this.originalPageY = e.pageY),
          r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt),
          (this.domPosition = {
            prev: this.currentItem.prev()[0],
            parent: this.currentItem.parent()[0],
          }),
          this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
          this._createPlaceholder(),
          r.containment && this._setContainment(),
          r.cursor &&
            "auto" !== r.cursor &&
            ((o = this.document.find("body")),
            (this.storedCursor = o.css("cursor")),
            o.css("cursor", r.cursor),
            (this.storedStylesheet = t(
              "<style>*{ cursor: " + r.cursor + " !important; }</style>"
            ).appendTo(o))),
          r.opacity &&
            (this.helper.css("opacity") &&
              (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", r.opacity)),
          r.zIndex &&
            (this.helper.css("zIndex") &&
              (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", r.zIndex)),
          this.scrollParent[0] !== this.document[0] &&
            "HTML" !== this.scrollParent[0].tagName &&
            (this.overflowOffset = this.scrollParent.offset()),
          this._trigger("start", e, this._uiHash()),
          this._preserveHelperProportions || this._cacheHelperProportions(),
          !n)
        )
          for (s = this.containers.length - 1; s >= 0; s--)
            this.containers[s]._trigger("activate", e, this._uiHash(this));
        return (
          t.ui.ddmanager && (t.ui.ddmanager.current = this),
          t.ui.ddmanager &&
            !r.dropBehaviour &&
            t.ui.ddmanager.prepareOffsets(this, e),
          (this.dragging = !0),
          this.helper.addClass("ui-sortable-helper"),
          this._mouseDrag(e),
          !0
        );
      },
      _mouseDrag: function (e) {
        var i,
          n,
          s,
          o,
          r = this.options,
          a = !1;
        for (
          this.position = this._generatePosition(e),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll &&
              (this.scrollParent[0] !== this.document[0] &&
              "HTML" !== this.scrollParent[0].tagName
                ? (this.overflowOffset.top +
                    this.scrollParent[0].offsetHeight -
                    e.pageY <
                  r.scrollSensitivity
                    ? (this.scrollParent[0].scrollTop = a =
                        this.scrollParent[0].scrollTop + r.scrollSpeed)
                    : e.pageY - this.overflowOffset.top < r.scrollSensitivity &&
                      (this.scrollParent[0].scrollTop = a =
                        this.scrollParent[0].scrollTop - r.scrollSpeed),
                  this.overflowOffset.left +
                    this.scrollParent[0].offsetWidth -
                    e.pageX <
                  r.scrollSensitivity
                    ? (this.scrollParent[0].scrollLeft = a =
                        this.scrollParent[0].scrollLeft + r.scrollSpeed)
                    : e.pageX - this.overflowOffset.left <
                        r.scrollSensitivity &&
                      (this.scrollParent[0].scrollLeft = a =
                        this.scrollParent[0].scrollLeft - r.scrollSpeed))
                : (e.pageY - this.document.scrollTop() < r.scrollSensitivity
                    ? (a = this.document.scrollTop(
                        this.document.scrollTop() - r.scrollSpeed
                      ))
                    : this.window.height() -
                        (e.pageY - this.document.scrollTop()) <
                        r.scrollSensitivity &&
                      (a = this.document.scrollTop(
                        this.document.scrollTop() + r.scrollSpeed
                      )),
                  e.pageX - this.document.scrollLeft() < r.scrollSensitivity
                    ? (a = this.document.scrollLeft(
                        this.document.scrollLeft() - r.scrollSpeed
                      ))
                    : this.window.width() -
                        (e.pageX - this.document.scrollLeft()) <
                        r.scrollSensitivity &&
                      (a = this.document.scrollLeft(
                        this.document.scrollLeft() + r.scrollSpeed
                      ))),
              a !== !1 &&
                t.ui.ddmanager &&
                !r.dropBehaviour &&
                t.ui.ddmanager.prepareOffsets(this, e)),
            this.positionAbs = this._convertPositionTo("absolute"),
            (this.options.axis && "y" === this.options.axis) ||
              (this.helper[0].style.left = this.position.left + "px"),
            (this.options.axis && "x" === this.options.axis) ||
              (this.helper[0].style.top = this.position.top + "px"),
            i = this.items.length - 1;
          i >= 0;
          i--
        )
          if (
            ((n = this.items[i]),
            (s = n.item[0]),
            (o = this._intersectsWithPointer(n)),
            o &&
              n.instance === this.currentContainer &&
              s !== this.currentItem[0] &&
              this.placeholder[1 === o ? "next" : "prev"]()[0] !== s &&
              !t.contains(this.placeholder[0], s) &&
              ("semi-dynamic" === this.options.type
                ? !t.contains(this.element[0], s)
                : !0))
          ) {
            if (
              ((this.direction = 1 === o ? "down" : "up"),
              "pointer" !== this.options.tolerance &&
                !this._intersectsWithSides(n))
            )
              break;
            this._rearrange(e, n), this._trigger("change", e, this._uiHash());
            break;
          }
        return (
          this._contactContainers(e),
          t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
          this._trigger("sort", e, this._uiHash()),
          (this.lastPositionAbs = this.positionAbs),
          !1
        );
      },
      _mouseStop: function (e, i) {
        if (e) {
          if (
            (t.ui.ddmanager &&
              !this.options.dropBehaviour &&
              t.ui.ddmanager.drop(this, e),
            this.options.revert)
          ) {
            var n = this,
              s = this.placeholder.offset(),
              o = this.options.axis,
              r = {};
            (o && "x" !== o) ||
              (r.left =
                s.left -
                this.offset.parent.left -
                this.margins.left +
                (this.offsetParent[0] === this.document[0].body
                  ? 0
                  : this.offsetParent[0].scrollLeft)),
              (o && "y" !== o) ||
                (r.top =
                  s.top -
                  this.offset.parent.top -
                  this.margins.top +
                  (this.offsetParent[0] === this.document[0].body
                    ? 0
                    : this.offsetParent[0].scrollTop)),
              (this.reverting = !0),
              t(this.helper).animate(
                r,
                parseInt(this.options.revert, 10) || 500,
                function () {
                  n._clear(e);
                }
              );
          } else this._clear(e, i);
          return !1;
        }
      },
      cancel: function () {
        if (this.dragging) {
          this._mouseUp({ target: null }),
            "original" === this.options.helper
              ? this.currentItem
                  .css(this._storedCSS)
                  .removeClass("ui-sortable-helper")
              : this.currentItem.show();
          for (var e = this.containers.length - 1; e >= 0; e--)
            this.containers[e]._trigger("deactivate", null, this._uiHash(this)),
              this.containers[e].containerCache.over &&
                (this.containers[e]._trigger("out", null, this._uiHash(this)),
                (this.containers[e].containerCache.over = 0));
        }
        return (
          this.placeholder &&
            (this.placeholder[0].parentNode &&
              this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" !== this.options.helper &&
              this.helper &&
              this.helper[0].parentNode &&
              this.helper.remove(),
            t.extend(this, {
              helper: null,
              dragging: !1,
              reverting: !1,
              _noFinalSort: null,
            }),
            this.domPosition.prev
              ? t(this.domPosition.prev).after(this.currentItem)
              : t(this.domPosition.parent).prepend(this.currentItem)),
          this
        );
      },
      serialize: function (e) {
        var i = this._getItemsAsjQuery(e && e.connected),
          n = [];
        return (
          (e = e || {}),
          t(i).each(function () {
            var i = (t(e.item || this).attr(e.attribute || "id") || "").match(
              e.expression || /(.+)[\-=_](.+)/
            );
            i &&
              n.push(
                (e.key || i[1] + "[]") +
                  "=" +
                  (e.key && e.expression ? i[1] : i[2])
              );
          }),
          !n.length && e.key && n.push(e.key + "="),
          n.join("&")
        );
      },
      toArray: function (e) {
        var i = this._getItemsAsjQuery(e && e.connected),
          n = [];
        return (
          (e = e || {}),
          i.each(function () {
            n.push(t(e.item || this).attr(e.attribute || "id") || "");
          }),
          n
        );
      },
      _intersectsWith: function (t) {
        var e = this.positionAbs.left,
          i = e + this.helperProportions.width,
          n = this.positionAbs.top,
          s = n + this.helperProportions.height,
          o = t.left,
          r = o + t.width,
          a = t.top,
          l = a + t.height,
          c = this.offset.click.top,
          u = this.offset.click.left,
          h = "x" === this.options.axis || (n + c > a && l > n + c),
          d = "y" === this.options.axis || (e + u > o && r > e + u),
          p = h && d;
        return "pointer" === this.options.tolerance ||
          this.options.forcePointerForContainers ||
          ("pointer" !== this.options.tolerance &&
            this.helperProportions[this.floating ? "width" : "height"] >
              t[this.floating ? "width" : "height"])
          ? p
          : o < e + this.helperProportions.width / 2 &&
              i - this.helperProportions.width / 2 < r &&
              a < n + this.helperProportions.height / 2 &&
              s - this.helperProportions.height / 2 < l;
      },
      _intersectsWithPointer: function (t) {
        var e =
            "x" === this.options.axis ||
            this._isOverAxis(
              this.positionAbs.top + this.offset.click.top,
              t.top,
              t.height
            ),
          i =
            "y" === this.options.axis ||
            this._isOverAxis(
              this.positionAbs.left + this.offset.click.left,
              t.left,
              t.width
            ),
          n = e && i,
          s = this._getDragVerticalDirection(),
          o = this._getDragHorizontalDirection();
        return n
          ? this.floating
            ? (o && "right" === o) || "down" === s
              ? 2
              : 1
            : s && ("down" === s ? 2 : 1)
          : !1;
      },
      _intersectsWithSides: function (t) {
        var e = this._isOverAxis(
            this.positionAbs.top + this.offset.click.top,
            t.top + t.height / 2,
            t.height
          ),
          i = this._isOverAxis(
            this.positionAbs.left + this.offset.click.left,
            t.left + t.width / 2,
            t.width
          ),
          n = this._getDragVerticalDirection(),
          s = this._getDragHorizontalDirection();
        return this.floating && s
          ? ("right" === s && i) || ("left" === s && !i)
          : n && (("down" === n && e) || ("up" === n && !e));
      },
      _getDragVerticalDirection: function () {
        var t = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 !== t && (t > 0 ? "down" : "up");
      },
      _getDragHorizontalDirection: function () {
        var t = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 !== t && (t > 0 ? "right" : "left");
      },
      refresh: function (t) {
        return (
          this._refreshItems(t),
          this._setHandleClassName(),
          this.refreshPositions(),
          this
        );
      },
      _connectWith: function () {
        var t = this.options;
        return t.connectWith.constructor === String
          ? [t.connectWith]
          : t.connectWith;
      },
      _getItemsAsjQuery: function (e) {
        function i() {
          a.push(this);
        }
        var n,
          s,
          o,
          r,
          a = [],
          l = [],
          c = this._connectWith();
        if (c && e)
          for (n = c.length - 1; n >= 0; n--)
            for (o = t(c[n], this.document[0]), s = o.length - 1; s >= 0; s--)
              (r = t.data(o[s], this.widgetFullName)),
                r &&
                  r !== this &&
                  !r.options.disabled &&
                  l.push([
                    t.isFunction(r.options.items)
                      ? r.options.items.call(r.element)
                      : t(r.options.items, r.element)
                          .not(".ui-sortable-helper")
                          .not(".ui-sortable-placeholder"),
                    r,
                  ]);
        for (
          l.push([
            t.isFunction(this.options.items)
              ? this.options.items.call(this.element, null, {
                  options: this.options,
                  item: this.currentItem,
                })
              : t(this.options.items, this.element)
                  .not(".ui-sortable-helper")
                  .not(".ui-sortable-placeholder"),
            this,
          ]),
            n = l.length - 1;
          n >= 0;
          n--
        )
          l[n][0].each(i);
        return t(a);
      },
      _removeCurrentsFromItems: function () {
        var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
        this.items = t.grep(this.items, function (t) {
          for (var i = 0; i < e.length; i++) if (e[i] === t.item[0]) return !1;
          return !0;
        });
      },
      _refreshItems: function (e) {
        (this.items = []), (this.containers = [this]);
        var i,
          n,
          s,
          o,
          r,
          a,
          l,
          c,
          u = this.items,
          h = [
            [
              t.isFunction(this.options.items)
                ? this.options.items.call(this.element[0], e, {
                    item: this.currentItem,
                  })
                : t(this.options.items, this.element),
              this,
            ],
          ],
          d = this._connectWith();
        if (d && this.ready)
          for (i = d.length - 1; i >= 0; i--)
            for (s = t(d[i], this.document[0]), n = s.length - 1; n >= 0; n--)
              (o = t.data(s[n], this.widgetFullName)),
                o &&
                  o !== this &&
                  !o.options.disabled &&
                  (h.push([
                    t.isFunction(o.options.items)
                      ? o.options.items.call(o.element[0], e, {
                          item: this.currentItem,
                        })
                      : t(o.options.items, o.element),
                    o,
                  ]),
                  this.containers.push(o));
        for (i = h.length - 1; i >= 0; i--)
          for (r = h[i][1], a = h[i][0], n = 0, c = a.length; c > n; n++)
            (l = t(a[n])),
              l.data(this.widgetName + "-item", r),
              u.push({
                item: l,
                instance: r,
                width: 0,
                height: 0,
                left: 0,
                top: 0,
              });
      },
      refreshPositions: function (e) {
        (this.floating = this.items.length
          ? "x" === this.options.axis || this._isFloating(this.items[0].item)
          : !1),
          this.offsetParent &&
            this.helper &&
            (this.offset.parent = this._getParentOffset());
        var i, n, s, o;
        for (i = this.items.length - 1; i >= 0; i--)
          (n = this.items[i]),
            (n.instance !== this.currentContainer &&
              this.currentContainer &&
              n.item[0] !== this.currentItem[0]) ||
              ((s = this.options.toleranceElement
                ? t(this.options.toleranceElement, n.item)
                : n.item),
              e || ((n.width = s.outerWidth()), (n.height = s.outerHeight())),
              (o = s.offset()),
              (n.left = o.left),
              (n.top = o.top));
        if (this.options.custom && this.options.custom.refreshContainers)
          this.options.custom.refreshContainers.call(this);
        else
          for (i = this.containers.length - 1; i >= 0; i--)
            (o = this.containers[i].element.offset()),
              (this.containers[i].containerCache.left = o.left),
              (this.containers[i].containerCache.top = o.top),
              (this.containers[i].containerCache.width = this.containers[
                i
              ].element.outerWidth()),
              (this.containers[i].containerCache.height = this.containers[
                i
              ].element.outerHeight());
        return this;
      },
      _createPlaceholder: function (e) {
        e = e || this;
        var i,
          n = e.options;
        (n.placeholder && n.placeholder.constructor !== String) ||
          ((i = n.placeholder),
          (n.placeholder = {
            element: function () {
              var n = e.currentItem[0].nodeName.toLowerCase(),
                s = t("<" + n + ">", e.document[0])
                  .addClass(
                    i || e.currentItem[0].className + " ui-sortable-placeholder"
                  )
                  .removeClass("ui-sortable-helper");
              return (
                "tbody" === n
                  ? e._createTrPlaceholder(
                      e.currentItem.find("tr").eq(0),
                      t("<tr>", e.document[0]).appendTo(s)
                    )
                  : "tr" === n
                  ? e._createTrPlaceholder(e.currentItem, s)
                  : "img" === n && s.attr("src", e.currentItem.attr("src")),
                i || s.css("visibility", "hidden"),
                s
              );
            },
            update: function (t, s) {
              (!i || n.forcePlaceholderSize) &&
                (s.height() ||
                  s.height(
                    e.currentItem.innerHeight() -
                      parseInt(e.currentItem.css("paddingTop") || 0, 10) -
                      parseInt(e.currentItem.css("paddingBottom") || 0, 10)
                  ),
                s.width() ||
                  s.width(
                    e.currentItem.innerWidth() -
                      parseInt(e.currentItem.css("paddingLeft") || 0, 10) -
                      parseInt(e.currentItem.css("paddingRight") || 0, 10)
                  ));
            },
          })),
          (e.placeholder = t(
            n.placeholder.element.call(e.element, e.currentItem)
          )),
          e.currentItem.after(e.placeholder),
          n.placeholder.update(e, e.placeholder);
      },
      _createTrPlaceholder: function (e, i) {
        var n = this;
        e.children().each(function () {
          t("<td>&#160;</td>", n.document[0])
            .attr("colspan", t(this).attr("colspan") || 1)
            .appendTo(i);
        });
      },
      _contactContainers: function (e) {
        var i,
          n,
          s,
          o,
          r,
          a,
          l,
          c,
          u,
          h,
          d = null,
          p = null;
        for (i = this.containers.length - 1; i >= 0; i--)
          if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
            if (this._intersectsWith(this.containers[i].containerCache)) {
              if (d && t.contains(this.containers[i].element[0], d.element[0]))
                continue;
              (d = this.containers[i]), (p = i);
            } else
              this.containers[i].containerCache.over &&
                (this.containers[i]._trigger("out", e, this._uiHash(this)),
                (this.containers[i].containerCache.over = 0));
        if (d)
          if (1 === this.containers.length)
            this.containers[p].containerCache.over ||
              (this.containers[p]._trigger("over", e, this._uiHash(this)),
              (this.containers[p].containerCache.over = 1));
          else {
            for (
              s = 1e4,
                o = null,
                u = d.floating || this._isFloating(this.currentItem),
                r = u ? "left" : "top",
                a = u ? "width" : "height",
                h = u ? "clientX" : "clientY",
                n = this.items.length - 1;
              n >= 0;
              n--
            )
              t.contains(
                this.containers[p].element[0],
                this.items[n].item[0]
              ) &&
                this.items[n].item[0] !== this.currentItem[0] &&
                ((l = this.items[n].item.offset()[r]),
                (c = !1),
                e[h] - l > this.items[n][a] / 2 && (c = !0),
                Math.abs(e[h] - l) < s &&
                  ((s = Math.abs(e[h] - l)),
                  (o = this.items[n]),
                  (this.direction = c ? "up" : "down")));
            if (!o && !this.options.dropOnEmpty) return;
            if (this.currentContainer === this.containers[p])
              return void (
                this.currentContainer.containerCache.over ||
                (this.containers[p]._trigger("over", e, this._uiHash()),
                (this.currentContainer.containerCache.over = 1))
              );
            o
              ? this._rearrange(e, o, null, !0)
              : this._rearrange(e, null, this.containers[p].element, !0),
              this._trigger("change", e, this._uiHash()),
              this.containers[p]._trigger("change", e, this._uiHash(this)),
              (this.currentContainer = this.containers[p]),
              this.options.placeholder.update(
                this.currentContainer,
                this.placeholder
              ),
              this.containers[p]._trigger("over", e, this._uiHash(this)),
              (this.containers[p].containerCache.over = 1);
          }
      },
      _createHelper: function (e) {
        var i = this.options,
          n = t.isFunction(i.helper)
            ? t(i.helper.apply(this.element[0], [e, this.currentItem]))
            : "clone" === i.helper
            ? this.currentItem.clone()
            : this.currentItem;
        return (
          n.parents("body").length ||
            t(
              "parent" !== i.appendTo
                ? i.appendTo
                : this.currentItem[0].parentNode
            )[0].appendChild(n[0]),
          n[0] === this.currentItem[0] &&
            (this._storedCSS = {
              width: this.currentItem[0].style.width,
              height: this.currentItem[0].style.height,
              position: this.currentItem.css("position"),
              top: this.currentItem.css("top"),
              left: this.currentItem.css("left"),
            }),
          (!n[0].style.width || i.forceHelperSize) &&
            n.width(this.currentItem.width()),
          (!n[0].style.height || i.forceHelperSize) &&
            n.height(this.currentItem.height()),
          n
        );
      },
      _adjustOffsetFromHelper: function (e) {
        "string" == typeof e && (e = e.split(" ")),
          t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
          "left" in e && (this.offset.click.left = e.left + this.margins.left),
          "right" in e &&
            (this.offset.click.left =
              this.helperProportions.width - e.right + this.margins.left),
          "top" in e && (this.offset.click.top = e.top + this.margins.top),
          "bottom" in e &&
            (this.offset.click.top =
              this.helperProportions.height - e.bottom + this.margins.top);
      },
      _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var e = this.offsetParent.offset();
        return (
          "absolute" === this.cssPosition &&
            this.scrollParent[0] !== this.document[0] &&
            t.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((e.left += this.scrollParent.scrollLeft()),
            (e.top += this.scrollParent.scrollTop())),
          (this.offsetParent[0] === this.document[0].body ||
            (this.offsetParent[0].tagName &&
              "html" === this.offsetParent[0].tagName.toLowerCase() &&
              t.ui.ie)) &&
            (e = { top: 0, left: 0 }),
          {
            top:
              e.top +
              (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left:
              e.left +
              (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ("relative" === this.cssPosition) {
          var t = this.currentItem.position();
          return {
            top:
              t.top -
              (parseInt(this.helper.css("top"), 10) || 0) +
              this.scrollParent.scrollTop(),
            left:
              t.left -
              (parseInt(this.helper.css("left"), 10) || 0) +
              this.scrollParent.scrollLeft(),
          };
        }
        return { top: 0, left: 0 };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
          top: parseInt(this.currentItem.css("marginTop"), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight(),
        };
      },
      _setContainment: function () {
        var e,
          i,
          n,
          s = this.options;
        "parent" === s.containment &&
          (s.containment = this.helper[0].parentNode),
          ("document" === s.containment || "window" === s.containment) &&
            (this.containment = [
              0 - this.offset.relative.left - this.offset.parent.left,
              0 - this.offset.relative.top - this.offset.parent.top,
              "document" === s.containment
                ? this.document.width()
                : this.window.width() -
                  this.helperProportions.width -
                  this.margins.left,
              ("document" === s.containment
                ? this.document.width()
                : this.window.height() ||
                  this.document[0].body.parentNode.scrollHeight) -
                this.helperProportions.height -
                this.margins.top,
            ]),
          /^(document|window|parent)$/.test(s.containment) ||
            ((e = t(s.containment)[0]),
            (i = t(s.containment).offset()),
            (n = "hidden" !== t(e).css("overflow")),
            (this.containment = [
              i.left +
                (parseInt(t(e).css("borderLeftWidth"), 10) || 0) +
                (parseInt(t(e).css("paddingLeft"), 10) || 0) -
                this.margins.left,
              i.top +
                (parseInt(t(e).css("borderTopWidth"), 10) || 0) +
                (parseInt(t(e).css("paddingTop"), 10) || 0) -
                this.margins.top,
              i.left +
                (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) -
                (parseInt(t(e).css("borderLeftWidth"), 10) || 0) -
                (parseInt(t(e).css("paddingRight"), 10) || 0) -
                this.helperProportions.width -
                this.margins.left,
              i.top +
                (n
                  ? Math.max(e.scrollHeight, e.offsetHeight)
                  : e.offsetHeight) -
                (parseInt(t(e).css("borderTopWidth"), 10) || 0) -
                (parseInt(t(e).css("paddingBottom"), 10) || 0) -
                this.helperProportions.height -
                this.margins.top,
            ]));
      },
      _convertPositionTo: function (e, i) {
        i || (i = this.position);
        var n = "absolute" === e ? 1 : -1,
          s =
            "absolute" !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] &&
              t.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          o = /(html|body)/i.test(s[0].tagName);
        return {
          top:
            i.top +
            this.offset.relative.top * n +
            this.offset.parent.top * n -
            ("fixed" === this.cssPosition
              ? -this.scrollParent.scrollTop()
              : o
              ? 0
              : s.scrollTop()) *
              n,
          left:
            i.left +
            this.offset.relative.left * n +
            this.offset.parent.left * n -
            ("fixed" === this.cssPosition
              ? -this.scrollParent.scrollLeft()
              : o
              ? 0
              : s.scrollLeft()) *
              n,
        };
      },
      _generatePosition: function (e) {
        var i,
          n,
          s = this.options,
          o = e.pageX,
          r = e.pageY,
          a =
            "absolute" !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] &&
              t.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          l = /(html|body)/i.test(a[0].tagName);
        return (
          "relative" !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] &&
              this.scrollParent[0] !== this.offsetParent[0]) ||
            (this.offset.relative = this._getRelativeOffset()),
          this.originalPosition &&
            (this.containment &&
              (e.pageX - this.offset.click.left < this.containment[0] &&
                (o = this.containment[0] + this.offset.click.left),
              e.pageY - this.offset.click.top < this.containment[1] &&
                (r = this.containment[1] + this.offset.click.top),
              e.pageX - this.offset.click.left > this.containment[2] &&
                (o = this.containment[2] + this.offset.click.left),
              e.pageY - this.offset.click.top > this.containment[3] &&
                (r = this.containment[3] + this.offset.click.top)),
            s.grid &&
              ((i =
                this.originalPageY +
                Math.round((r - this.originalPageY) / s.grid[1]) * s.grid[1]),
              (r = this.containment
                ? i - this.offset.click.top >= this.containment[1] &&
                  i - this.offset.click.top <= this.containment[3]
                  ? i
                  : i - this.offset.click.top >= this.containment[1]
                  ? i - s.grid[1]
                  : i + s.grid[1]
                : i),
              (n =
                this.originalPageX +
                Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0]),
              (o = this.containment
                ? n - this.offset.click.left >= this.containment[0] &&
                  n - this.offset.click.left <= this.containment[2]
                  ? n
                  : n - this.offset.click.left >= this.containment[0]
                  ? n - s.grid[0]
                  : n + s.grid[0]
                : n))),
          {
            top:
              r -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : l
                ? 0
                : a.scrollTop()),
            left:
              o -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : l
                ? 0
                : a.scrollLeft()),
          }
        );
      },
      _rearrange: function (t, e, i, n) {
        i
          ? i[0].appendChild(this.placeholder[0])
          : e.item[0].parentNode.insertBefore(
              this.placeholder[0],
              "down" === this.direction ? e.item[0] : e.item[0].nextSibling
            ),
          (this.counter = this.counter ? ++this.counter : 1);
        var s = this.counter;
        this._delay(function () {
          s === this.counter && this.refreshPositions(!n);
        });
      },
      _clear: function (t, e) {
        function i(t, e, i) {
          return function (n) {
            i._trigger(t, n, e._uiHash(e));
          };
        }
        this.reverting = !1;
        var n,
          s = [];
        if (
          (!this._noFinalSort &&
            this.currentItem.parent().length &&
            this.placeholder.before(this.currentItem),
          (this._noFinalSort = null),
          this.helper[0] === this.currentItem[0])
        ) {
          for (n in this._storedCSS)
            ("auto" === this._storedCSS[n] ||
              "static" === this._storedCSS[n]) &&
              (this._storedCSS[n] = "");
          this.currentItem
            .css(this._storedCSS)
            .removeClass("ui-sortable-helper");
        } else this.currentItem.show();
        for (
          this.fromOutside &&
            !e &&
            s.push(function (t) {
              this._trigger("receive", t, this._uiHash(this.fromOutside));
            }),
            (!this.fromOutside &&
              this.domPosition.prev ===
                this.currentItem.prev().not(".ui-sortable-helper")[0] &&
              this.domPosition.parent === this.currentItem.parent()[0]) ||
              e ||
              s.push(function (t) {
                this._trigger("update", t, this._uiHash());
              }),
            this !== this.currentContainer &&
              (e ||
                (s.push(function (t) {
                  this._trigger("remove", t, this._uiHash());
                }),
                s.push(
                  function (t) {
                    return function (e) {
                      t._trigger("receive", e, this._uiHash(this));
                    };
                  }.call(this, this.currentContainer)
                ),
                s.push(
                  function (t) {
                    return function (e) {
                      t._trigger("update", e, this._uiHash(this));
                    };
                  }.call(this, this.currentContainer)
                ))),
            n = this.containers.length - 1;
          n >= 0;
          n--
        )
          e || s.push(i("deactivate", this, this.containers[n])),
            this.containers[n].containerCache.over &&
              (s.push(i("out", this, this.containers[n])),
              (this.containers[n].containerCache.over = 0));
        if (
          (this.storedCursor &&
            (this.document.find("body").css("cursor", this.storedCursor),
            this.storedStylesheet.remove()),
          this._storedOpacity &&
            this.helper.css("opacity", this._storedOpacity),
          this._storedZIndex &&
            this.helper.css(
              "zIndex",
              "auto" === this._storedZIndex ? "" : this._storedZIndex
            ),
          (this.dragging = !1),
          e || this._trigger("beforeStop", t, this._uiHash()),
          this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          this.cancelHelperRemoval ||
            (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
            (this.helper = null)),
          !e)
        ) {
          for (n = 0; n < s.length; n++) s[n].call(this, t);
          this._trigger("stop", t, this._uiHash());
        }
        return (this.fromOutside = !1), !this.cancelHelperRemoval;
      },
      _trigger: function () {
        t.Widget.prototype._trigger.apply(this, arguments) === !1 &&
          this.cancel();
      },
      _uiHash: function (e) {
        var i = e || this;
        return {
          helper: i.helper,
          placeholder: i.placeholder || t([]),
          position: i.position,
          originalPosition: i.originalPosition,
          offset: i.positionAbs,
          item: i.currentItem,
          sender: e ? e.element : null,
        };
      },
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./core", "./widget", "./button"], t)
      : t(jQuery);
  })(function (t) {
    function e(t) {
      return function () {
        var e = this.element.val();
        t.apply(this, arguments),
          this._refresh(),
          e !== this.element.val() && this._trigger("change");
      };
    }
    return t.widget("ui.spinner", {
      version: "1.11.4",
      defaultElement: "<input>",
      widgetEventPrefix: "spin",
      options: {
        culture: null,
        icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" },
        incremental: !0,
        max: null,
        min: null,
        numberFormat: null,
        page: 10,
        step: 1,
        change: null,
        spin: null,
        start: null,
        stop: null,
      },
      _create: function () {
        this._setOption("max", this.options.max),
          this._setOption("min", this.options.min),
          this._setOption("step", this.options.step),
          "" !== this.value() && this._value(this.element.val(), !0),
          this._draw(),
          this._on(this._events),
          this._refresh(),
          this._on(this.window, {
            beforeunload: function () {
              this.element.removeAttr("autocomplete");
            },
          });
      },
      _getCreateOptions: function () {
        var e = {},
          i = this.element;
        return (
          t.each(["min", "max", "step"], function (t, n) {
            var s = i.attr(n);
            void 0 !== s && s.length && (e[n] = s);
          }),
          e
        );
      },
      _events: {
        keydown: function (t) {
          this._start(t) && this._keydown(t) && t.preventDefault();
        },
        keyup: "_stop",
        focus: function () {
          this.previous = this.element.val();
        },
        blur: function (t) {
          return this.cancelBlur
            ? void delete this.cancelBlur
            : (this._stop(),
              this._refresh(),
              void (
                this.previous !== this.element.val() &&
                this._trigger("change", t)
              ));
        },
        mousewheel: function (t, e) {
          if (e) {
            if (!this.spinning && !this._start(t)) return !1;
            this._spin((e > 0 ? 1 : -1) * this.options.step, t),
              clearTimeout(this.mousewheelTimer),
              (this.mousewheelTimer = this._delay(function () {
                this.spinning && this._stop(t);
              }, 100)),
              t.preventDefault();
          }
        },
        "mousedown .ui-spinner-button": function (e) {
          function i() {
            var t = this.element[0] === this.document[0].activeElement;
            t ||
              (this.element.focus(),
              (this.previous = n),
              this._delay(function () {
                this.previous = n;
              }));
          }
          var n;
          (n =
            this.element[0] === this.document[0].activeElement
              ? this.previous
              : this.element.val()),
            e.preventDefault(),
            i.call(this),
            (this.cancelBlur = !0),
            this._delay(function () {
              delete this.cancelBlur, i.call(this);
            }),
            this._start(e) !== !1 &&
              this._repeat(
                null,
                t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
                e
              );
        },
        "mouseup .ui-spinner-button": "_stop",
        "mouseenter .ui-spinner-button": function (e) {
          return t(e.currentTarget).hasClass("ui-state-active")
            ? this._start(e) === !1
              ? !1
              : void this._repeat(
                  null,
                  t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
                  e
                )
            : void 0;
        },
        "mouseleave .ui-spinner-button": "_stop",
      },
      _draw: function () {
        var t = (this.uiSpinner = this.element
          .addClass("ui-spinner-input")
          .attr("autocomplete", "off")
          .wrap(this._uiSpinnerHtml())
          .parent()
          .append(this._buttonHtml()));
        this.element.attr("role", "spinbutton"),
          (this.buttons = t
            .find(".ui-spinner-button")
            .attr("tabIndex", -1)
            .button()
            .removeClass("ui-corner-all")),
          this.buttons.height() > Math.ceil(0.5 * t.height()) &&
            t.height() > 0 &&
            t.height(t.height()),
          this.options.disabled && this.disable();
      },
      _keydown: function (e) {
        var i = this.options,
          n = t.ui.keyCode;
        switch (e.keyCode) {
          case n.UP:
            return this._repeat(null, 1, e), !0;
          case n.DOWN:
            return this._repeat(null, -1, e), !0;
          case n.PAGE_UP:
            return this._repeat(null, i.page, e), !0;
          case n.PAGE_DOWN:
            return this._repeat(null, -i.page, e), !0;
        }
        return !1;
      },
      _uiSpinnerHtml: function () {
        return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
      },
      _buttonHtml: function () {
        return (
          "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " +
          this.options.icons.up +
          "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " +
          this.options.icons.down +
          "'>&#9660;</span></a>"
        );
      },
      _start: function (t) {
        return this.spinning || this._trigger("start", t) !== !1
          ? (this.counter || (this.counter = 1), (this.spinning = !0), !0)
          : !1;
      },
      _repeat: function (t, e, i) {
        (t = t || 500),
          clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            this._repeat(40, e, i);
          }, t)),
          this._spin(e * this.options.step, i);
      },
      _spin: function (t, e) {
        var i = this.value() || 0;
        this.counter || (this.counter = 1),
          (i = this._adjustValue(i + t * this._increment(this.counter))),
          (this.spinning && this._trigger("spin", e, { value: i }) === !1) ||
            (this._value(i), this.counter++);
      },
      _increment: function (e) {
        var i = this.options.incremental;
        return i
          ? t.isFunction(i)
            ? i(e)
            : Math.floor((e * e * e) / 5e4 - (e * e) / 500 + (17 * e) / 200 + 1)
          : 1;
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return (
          null !== this.options.min &&
            (t = Math.max(t, this._precisionOf(this.options.min))),
          t
        );
      },
      _precisionOf: function (t) {
        var e = t.toString(),
          i = e.indexOf(".");
        return -1 === i ? 0 : e.length - i - 1;
      },
      _adjustValue: function (t) {
        var e,
          i,
          n = this.options;
        return (
          (e = null !== n.min ? n.min : 0),
          (i = t - e),
          (i = Math.round(i / n.step) * n.step),
          (t = e + i),
          (t = parseFloat(t.toFixed(this._precision()))),
          null !== n.max && t > n.max
            ? n.max
            : null !== n.min && t < n.min
            ? n.min
            : t
        );
      },
      _stop: function (t) {
        this.spinning &&
          (clearTimeout(this.timer),
          clearTimeout(this.mousewheelTimer),
          (this.counter = 0),
          (this.spinning = !1),
          this._trigger("stop", t));
      },
      _setOption: function (t, e) {
        if ("culture" === t || "numberFormat" === t) {
          var i = this._parse(this.element.val());
          return (this.options[t] = e), void this.element.val(this._format(i));
        }
        ("max" === t || "min" === t || "step" === t) &&
          "string" == typeof e &&
          (e = this._parse(e)),
          "icons" === t &&
            (this.buttons
              .first()
              .find(".ui-icon")
              .removeClass(this.options.icons.up)
              .addClass(e.up),
            this.buttons
              .last()
              .find(".ui-icon")
              .removeClass(this.options.icons.down)
              .addClass(e.down)),
          this._super(t, e),
          "disabled" === t &&
            (this.widget().toggleClass("ui-state-disabled", !!e),
            this.element.prop("disabled", !!e),
            this.buttons.button(e ? "disable" : "enable"));
      },
      _setOptions: e(function (t) {
        this._super(t);
      }),
      _parse: function (t) {
        return (
          "string" == typeof t &&
            "" !== t &&
            (t =
              window.Globalize && this.options.numberFormat
                ? Globalize.parseFloat(t, 10, this.options.culture)
                : +t),
          "" === t || isNaN(t) ? null : t
        );
      },
      _format: function (t) {
        return "" === t
          ? ""
          : window.Globalize && this.options.numberFormat
          ? Globalize.format(t, this.options.numberFormat, this.options.culture)
          : t;
      },
      _refresh: function () {
        this.element.attr({
          "aria-valuemin": this.options.min,
          "aria-valuemax": this.options.max,
          "aria-valuenow": this._parse(this.element.val()),
        });
      },
      isValid: function () {
        var t = this.value();
        return null === t ? !1 : t === this._adjustValue(t);
      },
      _value: function (t, e) {
        var i;
        "" !== t &&
          ((i = this._parse(t)),
          null !== i &&
            (e || (i = this._adjustValue(i)), (t = this._format(i)))),
          this.element.val(t),
          this._refresh();
      },
      _destroy: function () {
        this.element
          .removeClass("ui-spinner-input")
          .prop("disabled", !1)
          .removeAttr("autocomplete")
          .removeAttr("role")
          .removeAttr("aria-valuemin")
          .removeAttr("aria-valuemax")
          .removeAttr("aria-valuenow"),
          this.uiSpinner.replaceWith(this.element);
      },
      stepUp: e(function (t) {
        this._stepUp(t);
      }),
      _stepUp: function (t) {
        this._start() &&
          (this._spin((t || 1) * this.options.step), this._stop());
      },
      stepDown: e(function (t) {
        this._stepDown(t);
      }),
      _stepDown: function (t) {
        this._start() &&
          (this._spin((t || 1) * -this.options.step), this._stop());
      },
      pageUp: e(function (t) {
        this._stepUp((t || 1) * this.options.page);
      }),
      pageDown: e(function (t) {
        this._stepDown((t || 1) * this.options.page);
      }),
      value: function (t) {
        return arguments.length
          ? void e(this._value).call(this, t)
          : this._parse(this.element.val());
      },
      widget: function () {
        return this.uiSpinner;
      },
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./core", "./widget"], t)
      : t(jQuery);
  })(function (t) {
    return t.widget("ui.tabs", {
      version: "1.11.4",
      delay: 300,
      options: {
        active: null,
        collapsible: !1,
        event: "click",
        heightStyle: "content",
        hide: null,
        show: null,
        activate: null,
        beforeActivate: null,
        beforeLoad: null,
        load: null,
      },
      _isLocal: (function () {
        var t = /#.*$/;
        return function (e) {
          var i, n;
          (e = e.cloneNode(!1)),
            (i = e.href.replace(t, "")),
            (n = location.href.replace(t, ""));
          try {
            i = decodeURIComponent(i);
          } catch (s) {}
          try {
            n = decodeURIComponent(n);
          } catch (s) {}
          return e.hash.length > 1 && i === n;
        };
      })(),
      _create: function () {
        var e = this,
          i = this.options;
        (this.running = !1),
          this.element
            .addClass("ui-tabs ui-widget ui-widget-content ui-corner-all")
            .toggleClass("ui-tabs-collapsible", i.collapsible),
          this._processTabs(),
          (i.active = this._initialActive()),
          t.isArray(i.disabled) &&
            (i.disabled = t
              .unique(
                i.disabled.concat(
                  t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                    return e.tabs.index(t);
                  })
                )
              )
              .sort()),
          this.options.active !== !1 && this.anchors.length
            ? (this.active = this._findActive(i.active))
            : (this.active = t()),
          this._refresh(),
          this.active.length && this.load(i.active);
      },
      _initialActive: function () {
        var e = this.options.active,
          i = this.options.collapsible,
          n = location.hash.substring(1);
        return (
          null === e &&
            (n &&
              this.tabs.each(function (i, s) {
                return t(s).attr("aria-controls") === n
                  ? ((e = i), !1)
                  : void 0;
              }),
            null === e &&
              (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
            (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)),
          e !== !1 &&
            ((e = this.tabs.index(this.tabs.eq(e))),
            -1 === e && (e = i ? !1 : 0)),
          !i && e === !1 && this.anchors.length && (e = 0),
          e
        );
      },
      _getCreateEventData: function () {
        return {
          tab: this.active,
          panel: this.active.length ? this._getPanelForTab(this.active) : t(),
        };
      },
      _tabKeydown: function (e) {
        var i = t(this.document[0].activeElement).closest("li"),
          n = this.tabs.index(i),
          s = !0;
        if (!this._handlePageNav(e)) {
          switch (e.keyCode) {
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
              n++;
              break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.LEFT:
              (s = !1), n--;
              break;
            case t.ui.keyCode.END:
              n = this.anchors.length - 1;
              break;
            case t.ui.keyCode.HOME:
              n = 0;
              break;
            case t.ui.keyCode.SPACE:
              return (
                e.preventDefault(),
                clearTimeout(this.activating),
                void this._activate(n)
              );
            case t.ui.keyCode.ENTER:
              return (
                e.preventDefault(),
                clearTimeout(this.activating),
                void this._activate(n === this.options.active ? !1 : n)
              );
            default:
              return;
          }
          e.preventDefault(),
            clearTimeout(this.activating),
            (n = this._focusNextTab(n, s)),
            e.ctrlKey ||
              e.metaKey ||
              (i.attr("aria-selected", "false"),
              this.tabs.eq(n).attr("aria-selected", "true"),
              (this.activating = this._delay(function () {
                this.option("active", n);
              }, this.delay)));
        }
      },
      _panelKeydown: function (e) {
        this._handlePageNav(e) ||
          (e.ctrlKey &&
            e.keyCode === t.ui.keyCode.UP &&
            (e.preventDefault(), this.active.focus()));
      },
      _handlePageNav: function (e) {
        return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP
          ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
            !0)
          : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN
          ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
            !0)
          : void 0;
      },
      _findNextTab: function (e, i) {
        function n() {
          return e > s && (e = 0), 0 > e && (e = s), e;
        }
        for (
          var s = this.tabs.length - 1;
          -1 !== t.inArray(n(), this.options.disabled);

        )
          e = i ? e + 1 : e - 1;
        return e;
      },
      _focusNextTab: function (t, e) {
        return (t = this._findNextTab(t, e)), this.tabs.eq(t).focus(), t;
      },
      _setOption: function (t, e) {
        return "active" === t
          ? void this._activate(e)
          : "disabled" === t
          ? void this._setupDisabled(e)
          : (this._super(t, e),
            "collapsible" === t &&
              (this.element.toggleClass("ui-tabs-collapsible", e),
              e || this.options.active !== !1 || this._activate(0)),
            "event" === t && this._setupEvents(e),
            void ("heightStyle" === t && this._setupHeightStyle(e)));
      },
      _sanitizeSelector: function (t) {
        return t
          ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&")
          : "";
      },
      refresh: function () {
        var e = this.options,
          i = this.tablist.children(":has(a[href])");
        (e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
          return i.index(t);
        })),
          this._processTabs(),
          e.active !== !1 && this.anchors.length
            ? this.active.length && !t.contains(this.tablist[0], this.active[0])
              ? this.tabs.length === e.disabled.length
                ? ((e.active = !1), (this.active = t()))
                : this._activate(
                    this._findNextTab(Math.max(0, e.active - 1), !1)
                  )
              : (e.active = this.tabs.index(this.active))
            : ((e.active = !1), (this.active = t())),
          this._refresh();
      },
      _refresh: function () {
        this._setupDisabled(this.options.disabled),
          this._setupEvents(this.options.event),
          this._setupHeightStyle(this.options.heightStyle),
          this.tabs
            .not(this.active)
            .attr({
              "aria-selected": "false",
              "aria-expanded": "false",
              tabIndex: -1,
            }),
          this.panels
            .not(this._getPanelForTab(this.active))
            .hide()
            .attr({ "aria-hidden": "true" }),
          this.active.length
            ? (this.active
                .addClass("ui-tabs-active ui-state-active")
                .attr({
                  "aria-selected": "true",
                  "aria-expanded": "true",
                  tabIndex: 0,
                }),
              this._getPanelForTab(this.active)
                .show()
                .attr({ "aria-hidden": "false" }))
            : this.tabs.eq(0).attr("tabIndex", 0);
      },
      _processTabs: function () {
        var e = this,
          i = this.tabs,
          n = this.anchors,
          s = this.panels;
        (this.tablist = this._getList()
          .addClass(
            "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
          )
          .attr("role", "tablist")
          .delegate("> li", "mousedown" + this.eventNamespace, function (e) {
            t(this).is(".ui-state-disabled") && e.preventDefault();
          })
          .delegate(
            ".ui-tabs-anchor",
            "focus" + this.eventNamespace,
            function () {
              t(this).closest("li").is(".ui-state-disabled") && this.blur();
            }
          )),
          (this.tabs = this.tablist
            .find("> li:has(a[href])")
            .addClass("ui-state-default ui-corner-top")
            .attr({ role: "tab", tabIndex: -1 })),
          (this.anchors = this.tabs
            .map(function () {
              return t("a", this)[0];
            })
            .addClass("ui-tabs-anchor")
            .attr({ role: "presentation", tabIndex: -1 })),
          (this.panels = t()),
          this.anchors.each(function (i, n) {
            var s,
              o,
              r,
              a = t(n).uniqueId().attr("id"),
              l = t(n).closest("li"),
              c = l.attr("aria-controls");
            e._isLocal(n)
              ? ((s = n.hash),
                (r = s.substring(1)),
                (o = e.element.find(e._sanitizeSelector(s))))
              : ((r = l.attr("aria-controls") || t({}).uniqueId()[0].id),
                (s = "#" + r),
                (o = e.element.find(s)),
                o.length ||
                  ((o = e._createPanel(r)),
                  o.insertAfter(e.panels[i - 1] || e.tablist)),
                o.attr("aria-live", "polite")),
              o.length && (e.panels = e.panels.add(o)),
              c && l.data("ui-tabs-aria-controls", c),
              l.attr({ "aria-controls": r, "aria-labelledby": a }),
              o.attr("aria-labelledby", a);
          }),
          this.panels
            .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
            .attr("role", "tabpanel"),
          i &&
            (this._off(i.not(this.tabs)),
            this._off(n.not(this.anchors)),
            this._off(s.not(this.panels)));
      },
      _getList: function () {
        return this.tablist || this.element.find("ol,ul").eq(0);
      },
      _createPanel: function (e) {
        return t("<div>")
          .attr("id", e)
          .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
          .data("ui-tabs-destroy", !0);
      },
      _setupDisabled: function (e) {
        t.isArray(e) &&
          (e.length ? e.length === this.anchors.length && (e = !0) : (e = !1));
        for (var i, n = 0; (i = this.tabs[n]); n++)
          e === !0 || -1 !== t.inArray(n, e)
            ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true")
            : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
        this.options.disabled = e;
      },
      _setupEvents: function (e) {
        var i = {};
        e &&
          t.each(e.split(" "), function (t, e) {
            i[e] = "_eventHandler";
          }),
          this._off(this.anchors.add(this.tabs).add(this.panels)),
          this._on(!0, this.anchors, {
            click: function (t) {
              t.preventDefault();
            },
          }),
          this._on(this.anchors, i),
          this._on(this.tabs, { keydown: "_tabKeydown" }),
          this._on(this.panels, { keydown: "_panelKeydown" }),
          this._focusable(this.tabs),
          this._hoverable(this.tabs);
      },
      _setupHeightStyle: function (e) {
        var i,
          n = this.element.parent();
        "fill" === e
          ? ((i = n.height()),
            (i -= this.element.outerHeight() - this.element.height()),
            this.element.siblings(":visible").each(function () {
              var e = t(this),
                n = e.css("position");
              "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0));
            }),
            this.element
              .children()
              .not(this.panels)
              .each(function () {
                i -= t(this).outerHeight(!0);
              }),
            this.panels
              .each(function () {
                t(this).height(
                  Math.max(0, i - t(this).innerHeight() + t(this).height())
                );
              })
              .css("overflow", "auto"))
          : "auto" === e &&
            ((i = 0),
            this.panels
              .each(function () {
                i = Math.max(i, t(this).height("").height());
              })
              .height(i));
      },
      _eventHandler: function (e) {
        var i = this.options,
          n = this.active,
          s = t(e.currentTarget),
          o = s.closest("li"),
          r = o[0] === n[0],
          a = r && i.collapsible,
          l = a ? t() : this._getPanelForTab(o),
          c = n.length ? this._getPanelForTab(n) : t(),
          u = { oldTab: n, oldPanel: c, newTab: a ? t() : o, newPanel: l };
        e.preventDefault(),
          o.hasClass("ui-state-disabled") ||
            o.hasClass("ui-tabs-loading") ||
            this.running ||
            (r && !i.collapsible) ||
            this._trigger("beforeActivate", e, u) === !1 ||
            ((i.active = a ? !1 : this.tabs.index(o)),
            (this.active = r ? t() : o),
            this.xhr && this.xhr.abort(),
            c.length ||
              l.length ||
              t.error("jQuery UI Tabs: Mismatching fragment identifier."),
            l.length && this.load(this.tabs.index(o), e),
            this._toggle(e, u));
      },
      _toggle: function (e, i) {
        function n() {
          (o.running = !1), o._trigger("activate", e, i);
        }
        function s() {
          i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
            r.length && o.options.show
              ? o._show(r, o.options.show, n)
              : (r.show(), n());
        }
        var o = this,
          r = i.newPanel,
          a = i.oldPanel;
        (this.running = !0),
          a.length && this.options.hide
            ? this._hide(a, this.options.hide, function () {
                i.oldTab
                  .closest("li")
                  .removeClass("ui-tabs-active ui-state-active"),
                  s();
              })
            : (i.oldTab
                .closest("li")
                .removeClass("ui-tabs-active ui-state-active"),
              a.hide(),
              s()),
          a.attr("aria-hidden", "true"),
          i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }),
          r.length && a.length
            ? i.oldTab.attr("tabIndex", -1)
            : r.length &&
              this.tabs
                .filter(function () {
                  return 0 === t(this).attr("tabIndex");
                })
                .attr("tabIndex", -1),
          r.attr("aria-hidden", "false"),
          i.newTab.attr({
            "aria-selected": "true",
            "aria-expanded": "true",
            tabIndex: 0,
          });
      },
      _activate: function (e) {
        var i,
          n = this._findActive(e);
        n[0] !== this.active[0] &&
          (n.length || (n = this.active),
          (i = n.find(".ui-tabs-anchor")[0]),
          this._eventHandler({
            target: i,
            currentTarget: i,
            preventDefault: t.noop,
          }));
      },
      _findActive: function (e) {
        return e === !1 ? t() : this.tabs.eq(e);
      },
      _getIndex: function (t) {
        return (
          "string" == typeof t &&
            (t = this.anchors.index(
              this.anchors.filter("[href$='" + t + "']")
            )),
          t
        );
      },
      _destroy: function () {
        this.xhr && this.xhr.abort(),
          this.element.removeClass(
            "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"
          ),
          this.tablist
            .removeClass(
              "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
            )
            .removeAttr("role"),
          this.anchors
            .removeClass("ui-tabs-anchor")
            .removeAttr("role")
            .removeAttr("tabIndex")
            .removeUniqueId(),
          this.tablist.unbind(this.eventNamespace),
          this.tabs.add(this.panels).each(function () {
            t.data(this, "ui-tabs-destroy")
              ? t(this).remove()
              : t(this)
                  .removeClass(
                    "ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel"
                  )
                  .removeAttr("tabIndex")
                  .removeAttr("aria-live")
                  .removeAttr("aria-busy")
                  .removeAttr("aria-selected")
                  .removeAttr("aria-labelledby")
                  .removeAttr("aria-hidden")
                  .removeAttr("aria-expanded")
                  .removeAttr("role");
          }),
          this.tabs.each(function () {
            var e = t(this),
              i = e.data("ui-tabs-aria-controls");
            i
              ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls")
              : e.removeAttr("aria-controls");
          }),
          this.panels.show(),
          "content" !== this.options.heightStyle &&
            this.panels.css("height", "");
      },
      enable: function (e) {
        var i = this.options.disabled;
        i !== !1 &&
          (void 0 === e
            ? (i = !1)
            : ((e = this._getIndex(e)),
              (i = t.isArray(i)
                ? t.map(i, function (t) {
                    return t !== e ? t : null;
                  })
                : t.map(this.tabs, function (t, i) {
                    return i !== e ? i : null;
                  }))),
          this._setupDisabled(i));
      },
      disable: function (e) {
        var i = this.options.disabled;
        if (i !== !0) {
          if (void 0 === e) i = !0;
          else {
            if (((e = this._getIndex(e)), -1 !== t.inArray(e, i))) return;
            i = t.isArray(i) ? t.merge([e], i).sort() : [e];
          }
          this._setupDisabled(i);
        }
      },
      load: function (e, i) {
        e = this._getIndex(e);
        var n = this,
          s = this.tabs.eq(e),
          o = s.find(".ui-tabs-anchor"),
          r = this._getPanelForTab(s),
          a = { tab: s, panel: r },
          l = function (t, e) {
            "abort" === e && n.panels.stop(!1, !0),
              s.removeClass("ui-tabs-loading"),
              r.removeAttr("aria-busy"),
              t === n.xhr && delete n.xhr;
          };
        this._isLocal(o[0]) ||
          ((this.xhr = t.ajax(this._ajaxSettings(o, i, a))),
          this.xhr &&
            "canceled" !== this.xhr.statusText &&
            (s.addClass("ui-tabs-loading"),
            r.attr("aria-busy", "true"),
            this.xhr
              .done(function (t, e, s) {
                setTimeout(function () {
                  r.html(t), n._trigger("load", i, a), l(s, e);
                }, 1);
              })
              .fail(function (t, e) {
                setTimeout(function () {
                  l(t, e);
                }, 1);
              })));
      },
      _ajaxSettings: function (e, i, n) {
        var s = this;
        return {
          url: e.attr("href"),
          beforeSend: function (e, o) {
            return s._trigger(
              "beforeLoad",
              i,
              t.extend({ jqXHR: e, ajaxSettings: o }, n)
            );
          },
        };
      },
      _getPanelForTab: function (e) {
        var i = t(e).attr("aria-controls");
        return this.element.find(this._sanitizeSelector("#" + i));
      },
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./core", "./widget", "./position"], t)
      : t(jQuery);
  })(function (t) {
    return t.widget("ui.tooltip", {
      version: "1.11.4",
      options: {
        content: function () {
          var e = t(this).attr("title") || "";
          return t("<a>").text(e).html();
        },
        hide: !0,
        items: "[title]:not([disabled])",
        position: {
          my: "left top+15",
          at: "left bottom",
          collision: "flipfit flip",
        },
        show: !0,
        tooltipClass: null,
        track: !1,
        close: null,
        open: null,
      },
      _addDescribedBy: function (e, i) {
        var n = (e.attr("aria-describedby") || "").split(/\s+/);
        n.push(i),
          e
            .data("ui-tooltip-id", i)
            .attr("aria-describedby", t.trim(n.join(" ")));
      },
      _removeDescribedBy: function (e) {
        var i = e.data("ui-tooltip-id"),
          n = (e.attr("aria-describedby") || "").split(/\s+/),
          s = t.inArray(i, n);
        -1 !== s && n.splice(s, 1),
          e.removeData("ui-tooltip-id"),
          (n = t.trim(n.join(" "))),
          n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby");
      },
      _create: function () {
        this._on({ mouseover: "open", focusin: "open" }),
          (this.tooltips = {}),
          (this.parents = {}),
          this.options.disabled && this._disable(),
          (this.liveRegion = t("<div>")
            .attr({
              role: "log",
              "aria-live": "assertive",
              "aria-relevant": "additions",
            })
            .addClass("ui-helper-hidden-accessible")
            .appendTo(this.document[0].body));
      },
      _setOption: function (e, i) {
        var n = this;
        return "disabled" === e
          ? (this[i ? "_disable" : "_enable"](), void (this.options[e] = i))
          : (this._super(e, i),
            void (
              "content" === e &&
              t.each(this.tooltips, function (t, e) {
                n._updateContent(e.element);
              })
            ));
      },
      _disable: function () {
        var e = this;
        t.each(this.tooltips, function (i, n) {
          var s = t.Event("blur");
          (s.target = s.currentTarget = n.element[0]), e.close(s, !0);
        }),
          this.element
            .find(this.options.items)
            .addBack()
            .each(function () {
              var e = t(this);
              e.is("[title]") &&
                e.data("ui-tooltip-title", e.attr("title")).removeAttr("title");
            });
      },
      _enable: function () {
        this.element
          .find(this.options.items)
          .addBack()
          .each(function () {
            var e = t(this);
            e.data("ui-tooltip-title") &&
              e.attr("title", e.data("ui-tooltip-title"));
          });
      },
      open: function (e) {
        var i = this,
          n = t(e ? e.target : this.element).closest(this.options.items);
        n.length &&
          !n.data("ui-tooltip-id") &&
          (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")),
          n.data("ui-tooltip-open", !0),
          e &&
            "mouseover" === e.type &&
            n.parents().each(function () {
              var e,
                n = t(this);
              n.data("ui-tooltip-open") &&
                ((e = t.Event("blur")),
                (e.target = e.currentTarget = this),
                i.close(e, !0)),
                n.attr("title") &&
                  (n.uniqueId(),
                  (i.parents[this.id] = {
                    element: this,
                    title: n.attr("title"),
                  }),
                  n.attr("title", ""));
            }),
          this._registerCloseHandlers(e, n),
          this._updateContent(n, e));
      },
      _updateContent: function (t, e) {
        var i,
          n = this.options.content,
          s = this,
          o = e ? e.type : null;
        return "string" == typeof n
          ? this._open(e, t, n)
          : ((i = n.call(t[0], function (i) {
              s._delay(function () {
                t.data("ui-tooltip-open") &&
                  (e && (e.type = o), this._open(e, t, i));
              });
            })),
            void (i && this._open(e, t, i)));
      },
      _open: function (e, i, n) {
        function s(t) {
          (c.of = t), r.is(":hidden") || r.position(c);
        }
        var o,
          r,
          a,
          l,
          c = t.extend({}, this.options.position);
        if (n) {
          if ((o = this._find(i)))
            return void o.tooltip.find(".ui-tooltip-content").html(n);
          i.is("[title]") &&
            (e && "mouseover" === e.type
              ? i.attr("title", "")
              : i.removeAttr("title")),
            (o = this._tooltip(i)),
            (r = o.tooltip),
            this._addDescribedBy(i, r.attr("id")),
            r.find(".ui-tooltip-content").html(n),
            this.liveRegion.children().hide(),
            n.clone
              ? ((l = n.clone()),
                l.removeAttr("id").find("[id]").removeAttr("id"))
              : (l = n),
            t("<div>").html(l).appendTo(this.liveRegion),
            this.options.track && e && /^mouse/.test(e.type)
              ? (this._on(this.document, { mousemove: s }), s(e))
              : r.position(t.extend({ of: i }, this.options.position)),
            r.hide(),
            this._show(r, this.options.show),
            this.options.show &&
              this.options.show.delay &&
              (a = this.delayedShow = setInterval(function () {
                r.is(":visible") && (s(c.of), clearInterval(a));
              }, t.fx.interval)),
            this._trigger("open", e, { tooltip: r });
        }
      },
      _registerCloseHandlers: function (e, i) {
        var n = {
          keyup: function (e) {
            if (e.keyCode === t.ui.keyCode.ESCAPE) {
              var n = t.Event(e);
              (n.currentTarget = i[0]), this.close(n, !0);
            }
          },
        };
        i[0] !== this.element[0] &&
          (n.remove = function () {
            this._removeTooltip(this._find(i).tooltip);
          }),
          (e && "mouseover" !== e.type) || (n.mouseleave = "close"),
          (e && "focusin" !== e.type) || (n.focusout = "close"),
          this._on(!0, i, n);
      },
      close: function (e) {
        var i,
          n = this,
          s = t(e ? e.currentTarget : this.element),
          o = this._find(s);
        return o
          ? ((i = o.tooltip),
            void (
              o.closing ||
              (clearInterval(this.delayedShow),
              s.data("ui-tooltip-title") &&
                !s.attr("title") &&
                s.attr("title", s.data("ui-tooltip-title")),
              this._removeDescribedBy(s),
              (o.hiding = !0),
              i.stop(!0),
              this._hide(i, this.options.hide, function () {
                n._removeTooltip(t(this));
              }),
              s.removeData("ui-tooltip-open"),
              this._off(s, "mouseleave focusout keyup"),
              s[0] !== this.element[0] && this._off(s, "remove"),
              this._off(this.document, "mousemove"),
              e &&
                "mouseleave" === e.type &&
                t.each(this.parents, function (e, i) {
                  t(i.element).attr("title", i.title), delete n.parents[e];
                }),
              (o.closing = !0),
              this._trigger("close", e, { tooltip: i }),
              o.hiding || (o.closing = !1))
            ))
          : void s.removeData("ui-tooltip-open");
      },
      _tooltip: function (e) {
        var i = t("<div>")
            .attr("role", "tooltip")
            .addClass(
              "ui-tooltip ui-widget ui-corner-all ui-widget-content " +
                (this.options.tooltipClass || "")
            ),
          n = i.uniqueId().attr("id");
        return (
          t("<div>").addClass("ui-tooltip-content").appendTo(i),
          i.appendTo(this.document[0].body),
          (this.tooltips[n] = { element: e, tooltip: i })
        );
      },
      _find: function (t) {
        var e = t.data("ui-tooltip-id");
        return e ? this.tooltips[e] : null;
      },
      _removeTooltip: function (t) {
        t.remove(), delete this.tooltips[t.attr("id")];
      },
      _destroy: function () {
        var e = this;
        t.each(this.tooltips, function (i, n) {
          var s = t.Event("blur"),
            o = n.element;
          (s.target = s.currentTarget = o[0]),
            e.close(s, !0),
            t("#" + i).remove(),
            o.data("ui-tooltip-title") &&
              (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")),
              o.removeData("ui-tooltip-title"));
        }),
          this.liveRegion.remove();
      },
    });
  }),
  (function (t, e) {
    "use strict";
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var i,
      n = t(document);
    (t.rails = i = {
      linkClickSelector:
        "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
      buttonClickSelector:
        "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
      inputChangeSelector:
        "select[data-remote], input[data-remote], textarea[data-remote]",
      formSubmitSelector: "form",
      formInputClickSelector:
        "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
      disableSelector:
        "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
      enableSelector:
        "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
      requiredInputSelector:
        "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
      fileInputSelector: "input[type=file]:not([disabled])",
      linkDisableSelector: "a[data-disable-with], a[data-disable]",
      buttonDisableSelector:
        "button[data-remote][data-disable-with], button[data-remote][data-disable]",
      csrfToken: function () {
        return t("meta[name=csrf-token]").attr("content");
      },
      csrfParam: function () {
        return t("meta[name=csrf-param]").attr("content");
      },
      CSRFProtection: function (t) {
        var e = i.csrfToken();
        e && t.setRequestHeader("X-CSRF-Token", e);
      },
      refreshCSRFTokens: function () {
        t('form input[name="' + i.csrfParam() + '"]').val(i.csrfToken());
      },
      fire: function (e, i, n) {
        var s = t.Event(i);
        return e.trigger(s, n), s.result !== !1;
      },
      confirm: function (t) {
        return confirm(t);
      },
      ajax: function (e) {
        return t.ajax(e);
      },
      href: function (t) {
        return t[0].href;
      },
      isRemote: function (t) {
        return t.data("remote") !== e && t.data("remote") !== !1;
      },
      handleRemote: function (n) {
        var s, o, r, a, l, c;
        if (i.fire(n, "ajax:before")) {
          if (
            ((a = n.data("with-credentials") || null),
            (l = n.data("type") || (t.ajaxSettings && t.ajaxSettings.dataType)),
            n.is("form"))
          ) {
            (s = n.attr("method")),
              (o = n.attr("action")),
              (r = n.serializeArray());
            var u = n.data("ujs:submit-button");
            u && (r.push(u), n.data("ujs:submit-button", null));
          } else
            n.is(i.inputChangeSelector)
              ? ((s = n.data("method")),
                (o = n.data("url")),
                (r = n.serialize()),
                n.data("params") && (r = r + "&" + n.data("params")))
              : n.is(i.buttonClickSelector)
              ? ((s = n.data("method") || "get"),
                (o = n.data("url")),
                (r = n.serialize()),
                n.data("params") && (r = r + "&" + n.data("params")))
              : ((s = n.data("method")),
                (o = i.href(n)),
                (r = n.data("params") || null));
          return (
            (c = {
              type: s || "GET",
              data: r,
              dataType: l,
              beforeSend: function (t, s) {
                return (
                  s.dataType === e &&
                    t.setRequestHeader(
                      "accept",
                      "*/*;q=0.5, " + s.accepts.script
                    ),
                  i.fire(n, "ajax:beforeSend", [t, s])
                    ? void n.trigger("ajax:send", t)
                    : !1
                );
              },
              success: function (t, e, i) {
                n.trigger("ajax:success", [t, e, i]);
              },
              complete: function (t, e) {
                n.trigger("ajax:complete", [t, e]);
              },
              error: function (t, e, i) {
                n.trigger("ajax:error", [t, e, i]);
              },
              crossDomain: i.isCrossDomain(o),
            }),
            a && (c.xhrFields = { withCredentials: a }),
            o && (c.url = o),
            i.ajax(c)
          );
        }
        return !1;
      },
      isCrossDomain: function (t) {
        var e = document.createElement("a");
        e.href = location.href;
        var i = document.createElement("a");
        try {
          return (
            (i.href = t),
            (i.href = i.href),
            !(
              ((!i.protocol || ":" === i.protocol) && !i.host) ||
              e.protocol + "//" + e.host == i.protocol + "//" + i.host
            )
          );
        } catch (n) {
          return !0;
        }
      },
      handleMethod: function (n) {
        var s = i.href(n),
          o = n.data("method"),
          r = n.attr("target"),
          a = i.csrfToken(),
          l = i.csrfParam(),
          c = t('<form method="post" action="' + s + '"></form>'),
          u = '<input name="_method" value="' + o + '" type="hidden" />';
        l === e ||
          a === e ||
          i.isCrossDomain(s) ||
          (u += '<input name="' + l + '" value="' + a + '" type="hidden" />'),
          r && c.attr("target", r),
          c.hide().append(u).appendTo("body"),
          c.submit();
      },
      formElements: function (e, i) {
        return e.is("form") ? t(e[0].elements).filter(i) : e.find(i);
      },
      disableFormElements: function (e) {
        i.formElements(e, i.disableSelector).each(function () {
          i.disableFormElement(t(this));
        });
      },
      disableFormElement: function (t) {
        var i, n;
        (i = t.is("button") ? "html" : "val"),
          (n = t.data("disable-with")),
          t.data("ujs:enable-with", t[i]()),
          n !== e && t[i](n),
          t.prop("disabled", !0);
      },
      enableFormElements: function (e) {
        i.formElements(e, i.enableSelector).each(function () {
          i.enableFormElement(t(this));
        });
      },
      enableFormElement: function (t) {
        var e = t.is("button") ? "html" : "val";
        "undefined" != typeof t.data("ujs:enable-with") &&
          t[e](t.data("ujs:enable-with")),
          t.prop("disabled", !1);
      },
      allowAction: function (t) {
        var e,
          n = t.data("confirm"),
          s = !1;
        if (!n) return !0;
        if (i.fire(t, "confirm")) {
          try {
            s = i.confirm(n);
          } catch (o) {
            (console.error || console.log).call(console, o.stack || o);
          }
          e = i.fire(t, "confirm:complete", [s]);
        }
        return s && e;
      },
      blankInputs: function (e, i, n) {
        var s,
          o,
          r = t(),
          a = i || "input,textarea",
          l = e.find(a);
        return (
          l.each(function () {
            if (
              ((s = t(this)),
              (o = s.is("input[type=checkbox],input[type=radio]")
                ? s.is(":checked")
                : !!s.val()),
              o === n)
            ) {
              if (
                s.is("input[type=radio]") &&
                l.filter(
                  'input[type=radio]:checked[name="' + s.attr("name") + '"]'
                ).length
              )
                return !0;
              r = r.add(s);
            }
          }),
          r.length ? r : !1
        );
      },
      nonBlankInputs: function (t, e) {
        return i.blankInputs(t, e, !0);
      },
      stopEverything: function (e) {
        return (
          t(e.target).trigger("ujs:everythingStopped"),
          e.stopImmediatePropagation(),
          !1
        );
      },
      disableElement: function (t) {
        var n = t.data("disable-with");
        t.data("ujs:enable-with", t.html()),
          n !== e && t.html(n),
          t.bind("click.railsDisable", function (t) {
            return i.stopEverything(t);
          });
      },
      enableElement: function (t) {
        t.data("ujs:enable-with") !== e &&
          (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")),
          t.unbind("click.railsDisable");
      },
    }),
      i.fire(n, "rails:attachBindings") &&
        (t.ajaxPrefilter(function (t, e, n) {
          t.crossDomain || i.CSRFProtection(n);
        }),
        t(window).on("pageshow.rails", function () {
          t(t.rails.enableSelector).each(function () {
            var e = t(this);
            e.data("ujs:enable-with") && t.rails.enableFormElement(e);
          }),
            t(t.rails.linkDisableSelector).each(function () {
              var e = t(this);
              e.data("ujs:enable-with") && t.rails.enableElement(e);
            });
        }),
        n.delegate(i.linkDisableSelector, "ajax:complete", function () {
          i.enableElement(t(this));
        }),
        n.delegate(i.buttonDisableSelector, "ajax:complete", function () {
          i.enableFormElement(t(this));
        }),
        n.delegate(i.linkClickSelector, "click.rails", function (e) {
          var n = t(this),
            s = n.data("method"),
            o = n.data("params"),
            r = e.metaKey || e.ctrlKey;
          if (!i.allowAction(n)) return i.stopEverything(e);
          if (
            (!r && n.is(i.linkDisableSelector) && i.disableElement(n),
            i.isRemote(n))
          ) {
            if (r && (!s || "GET" === s) && !o) return !0;
            var a = i.handleRemote(n);
            return (
              a === !1
                ? i.enableElement(n)
                : a.fail(function () {
                    i.enableElement(n);
                  }),
              !1
            );
          }
          return s ? (i.handleMethod(n), !1) : void 0;
        }),
        n.delegate(i.buttonClickSelector, "click.rails", function (e) {
          var n = t(this);
          if (!i.allowAction(n) || !i.isRemote(n)) return i.stopEverything(e);
          n.is(i.buttonDisableSelector) && i.disableFormElement(n);
          var s = i.handleRemote(n);
          return (
            s === !1
              ? i.enableFormElement(n)
              : s.fail(function () {
                  i.enableFormElement(n);
                }),
            !1
          );
        }),
        n.delegate(i.inputChangeSelector, "change.rails", function (e) {
          var n = t(this);
          return i.allowAction(n) && i.isRemote(n)
            ? (i.handleRemote(n), !1)
            : i.stopEverything(e);
        }),
        n.delegate(i.formSubmitSelector, "submit.rails", function (n) {
          var s,
            o,
            r = t(this),
            a = i.isRemote(r);
          if (!i.allowAction(r)) return i.stopEverything(n);
          if (
            r.attr("novalidate") === e &&
            ((s = i.blankInputs(r, i.requiredInputSelector, !1)),
            s && i.fire(r, "ajax:aborted:required", [s]))
          )
            return i.stopEverything(n);
          if (a) {
            if ((o = i.nonBlankInputs(r, i.fileInputSelector))) {
              setTimeout(function () {
                i.disableFormElements(r);
              }, 13);
              var l = i.fire(r, "ajax:aborted:file", [o]);
              return (
                l ||
                  setTimeout(function () {
                    i.enableFormElements(r);
                  }, 13),
                l
              );
            }
            return i.handleRemote(r), !1;
          }
          setTimeout(function () {
            i.disableFormElements(r);
          }, 13);
        }),
        n.delegate(i.formInputClickSelector, "click.rails", function (e) {
          var n = t(this);
          if (!i.allowAction(n)) return i.stopEverything(e);
          var s = n.attr("name"),
            o = s ? { name: s, value: n.val() } : null;
          n.closest("form").data("ujs:submit-button", o);
        }),
        n.delegate(i.formSubmitSelector, "ajax:send.rails", function (e) {
          this === e.target && i.disableFormElements(t(this));
        }),
        n.delegate(i.formSubmitSelector, "ajax:complete.rails", function (e) {
          this === e.target && i.enableFormElements(t(this));
        }),
        t(function () {
          i.refreshCSRFTokens();
        }));
  })(jQuery),
  "undefined" == typeof jQuery)
)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (t) {
  "use strict";
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (
    (e[0] < 2 && e[1] < 9) ||
    (1 == e[0] && 9 == e[1] && e[2] < 1) ||
    e[0] > 2
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3"
    );
})(jQuery),
  +(function (t) {
    "use strict";
    function e() {
      var t = document.createElement("bootstrap"),
        e = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var i in e) if (void 0 !== t.style[i]) return { end: e[i] };
      return !1;
    }
    (t.fn.emulateTransitionEnd = function (e) {
      var i = !1,
        n = this;
      t(this).one("bsTransitionEnd", function () {
        i = !0;
      });
      var s = function () {
        i || t(n).trigger(t.support.transition.end);
      };
      return setTimeout(s, e), this;
    }),
      t(function () {
        (t.support.transition = e()),
          t.support.transition &&
            (t.event.special.bsTransitionEnd = {
              bindType: t.support.transition.end,
              delegateType: t.support.transition.end,
              handle: function (e) {
                return t(e.target).is(this)
                  ? e.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          s = i.data("bs.alert");
        s || i.data("bs.alert", (s = new n(this))),
          "string" == typeof e && s[e].call(i);
      });
    }
    var i = '[data-dismiss="alert"]',
      n = function (e) {
        t(e).on("click", i, this.close);
      };
    (n.VERSION = "3.3.6"),
      (n.TRANSITION_DURATION = 150),
      (n.prototype.close = function (e) {
        function i() {
          r.detach().trigger("closed.bs.alert").remove();
        }
        var s = t(this),
          o = s.attr("data-target");
        o || ((o = s.attr("href")), (o = o && o.replace(/.*(?=#[^\s]*$)/, "")));
        var r = t(o);
        e && e.preventDefault(),
          r.length || (r = s.closest(".alert")),
          r.trigger((e = t.Event("close.bs.alert"))),
          e.isDefaultPrevented() ||
            (r.removeClass("in"),
            t.support.transition && r.hasClass("fade")
              ? r
                  .one("bsTransitionEnd", i)
                  .emulateTransitionEnd(n.TRANSITION_DURATION)
              : i());
      });
    var s = t.fn.alert;
    (t.fn.alert = e),
      (t.fn.alert.Constructor = n),
      (t.fn.alert.noConflict = function () {
        return (t.fn.alert = s), this;
      }),
      t(document).on("click.bs.alert.data-api", i, n.prototype.close);
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var n = t(this),
          s = n.data("bs.button"),
          o = "object" == typeof e && e;
        s || n.data("bs.button", (s = new i(this, o))),
          "toggle" == e ? s.toggle() : e && s.setState(e);
      });
    }
    var i = function (e, n) {
      (this.$element = t(e)),
        (this.options = t.extend({}, i.DEFAULTS, n)),
        (this.isLoading = !1);
    };
    (i.VERSION = "3.3.6"),
      (i.DEFAULTS = { loadingText: "loading..." }),
      (i.prototype.setState = function (e) {
        var i = "disabled",
          n = this.$element,
          s = n.is("input") ? "val" : "html",
          o = n.data();
        (e += "Text"),
          null == o.resetText && n.data("resetText", n[s]()),
          setTimeout(
            t.proxy(function () {
              n[s](null == o[e] ? this.options[e] : o[e]),
                "loadingText" == e
                  ? ((this.isLoading = !0), n.addClass(i).attr(i, i))
                  : this.isLoading &&
                    ((this.isLoading = !1), n.removeClass(i).removeAttr(i));
            }, this),
            0
          );
      }),
      (i.prototype.toggle = function () {
        var t = !0,
          e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
          var i = this.$element.find("input");
          "radio" == i.prop("type")
            ? (i.prop("checked") && (t = !1),
              e.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == i.prop("type") &&
              (i.prop("checked") !== this.$element.hasClass("active") &&
                (t = !1),
              this.$element.toggleClass("active")),
            i.prop("checked", this.$element.hasClass("active")),
            t && i.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var n = t.fn.button;
    (t.fn.button = e),
      (t.fn.button.Constructor = i),
      (t.fn.button.noConflict = function () {
        return (t.fn.button = n), this;
      }),
      t(document)
        .on("click.bs.button.data-api", '[data-toggle^="button"]', function (
          i
        ) {
          var n = t(i.target);
          n.hasClass("btn") || (n = n.closest(".btn")),
            e.call(n, "toggle"),
            t(i.target).is('input[type="radio"]') ||
              t(i.target).is('input[type="checkbox"]') ||
              i.preventDefault();
        })
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (e) {
            t(e.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(e.type));
          }
        );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var n = t(this),
          s = n.data("bs.carousel"),
          o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
          r = "string" == typeof e ? e : o.slide;
        s || n.data("bs.carousel", (s = new i(this, o))),
          "number" == typeof e
            ? s.to(e)
            : r
            ? s[r]()
            : o.interval && s.pause().cycle();
      });
    }
    var i = function (e, i) {
      (this.$element = t(e)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = i),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", t.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
    };
    (i.VERSION = "3.3.6"),
      (i.TRANSITION_DURATION = 600),
      (i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
          switch (t.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          t.preventDefault();
        }
      }),
      (i.prototype.cycle = function (e) {
        return (
          e || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              t.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (i.prototype.getItemIndex = function (t) {
        return (
          (this.$items = t.parent().children(".item")),
          this.$items.index(t || this.$active)
        );
      }),
      (i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e),
          n =
            ("prev" == t && 0 === i) ||
            ("next" == t && i == this.$items.length - 1);
        if (n && !this.options.wrap) return e;
        var s = "prev" == t ? -1 : 1,
          o = (i + s) % this.$items.length;
        return this.$items.eq(o);
      }),
      (i.prototype.to = function (t) {
        var e = this,
          i = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return t > this.$items.length - 1 || 0 > t
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              e.to(t);
            })
          : i == t
          ? this.pause().cycle()
          : this.slide(t > i ? "next" : "prev", this.$items.eq(t));
      }),
      (i.prototype.pause = function (e) {
        return (
          e || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            t.support.transition &&
            (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (i.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (i.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (i.prototype.slide = function (e, n) {
        var s = this.$element.find(".item.active"),
          o = n || this.getItemForDirection(e, s),
          r = this.interval,
          a = "next" == e ? "left" : "right",
          l = this;
        if (o.hasClass("active")) return (this.sliding = !1);
        var c = o[0],
          u = t.Event("slide.bs.carousel", { relatedTarget: c, direction: a });
        if ((this.$element.trigger(u), !u.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), r && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var h = t(this.$indicators.children()[this.getItemIndex(o)]);
            h && h.addClass("active");
          }
          var d = t.Event("slid.bs.carousel", {
            relatedTarget: c,
            direction: a,
          });
          return (
            t.support.transition && this.$element.hasClass("slide")
              ? (o.addClass(e),
                o[0].offsetWidth,
                s.addClass(a),
                o.addClass(a),
                s
                  .one("bsTransitionEnd", function () {
                    o.removeClass([e, a].join(" ")).addClass("active"),
                      s.removeClass(["active", a].join(" ")),
                      (l.sliding = !1),
                      setTimeout(function () {
                        l.$element.trigger(d);
                      }, 0);
                  })
                  .emulateTransitionEnd(i.TRANSITION_DURATION))
              : (s.removeClass("active"),
                o.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(d)),
            r && this.cycle(),
            this
          );
        }
      });
    var n = t.fn.carousel;
    (t.fn.carousel = e),
      (t.fn.carousel.Constructor = i),
      (t.fn.carousel.noConflict = function () {
        return (t.fn.carousel = n), this;
      });
    var s = function (i) {
      var n,
        s = t(this),
        o = t(
          s.attr("data-target") ||
            ((n = s.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (o.hasClass("carousel")) {
        var r = t.extend({}, o.data(), s.data()),
          a = s.attr("data-slide-to");
        a && (r.interval = !1),
          e.call(o, r),
          a && o.data("bs.carousel").to(a),
          i.preventDefault();
      }
    };
    t(document)
      .on("click.bs.carousel.data-api", "[data-slide]", s)
      .on("click.bs.carousel.data-api", "[data-slide-to]", s),
      t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
          var i = t(this);
          e.call(i, i.data());
        });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      var i,
        n =
          e.attr("data-target") ||
          ((i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
      return t(n);
    }
    function i(e) {
      return this.each(function () {
        var i = t(this),
          s = i.data("bs.collapse"),
          o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
        !s && o.toggle && /show|hide/.test(e) && (o.toggle = !1),
          s || i.data("bs.collapse", (s = new n(this, o))),
          "string" == typeof e && s[e]();
      });
    }
    var n = function (e, i) {
      (this.$element = t(e)),
        (this.options = t.extend({}, n.DEFAULTS, i)),
        (this.$trigger = t(
          '[data-toggle="collapse"][href="#' +
            e.id +
            '"],[data-toggle="collapse"][data-target="#' +
            e.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (n.VERSION = "3.3.6"),
      (n.TRANSITION_DURATION = 350),
      (n.DEFAULTS = { toggle: !0 }),
      (n.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height";
      }),
      (n.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var e,
            s =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              s &&
              s.length &&
              ((e = s.data("bs.collapse")), e && e.transitioning)
            )
          ) {
            var o = t.Event("show.bs.collapse");
            if ((this.$element.trigger(o), !o.isDefaultPrevented())) {
              s &&
                s.length &&
                (i.call(s, "hide"), e || s.data("bs.collapse", null));
              var r = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [r](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var a = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [r](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!t.support.transition) return a.call(this);
              var l = t.camelCase(["scroll", r].join("-"));
              this.$element
                .one("bsTransitionEnd", t.proxy(a, this))
                .emulateTransitionEnd(n.TRANSITION_DURATION)
                [r](this.$element[0][l]);
            }
          }
        }
      }),
      (n.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var e = t.Event("hide.bs.collapse");
          if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
            var i = this.dimension();
            this.$element[i](this.$element[i]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var s = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return t.support.transition
              ? void this.$element[i](0)
                  .one("bsTransitionEnd", t.proxy(s, this))
                  .emulateTransitionEnd(n.TRANSITION_DURATION)
              : s.call(this);
          }
        }
      }),
      (n.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (n.prototype.getParent = function () {
        return t(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            t.proxy(function (i, n) {
              var s = t(n);
              this.addAriaAndCollapsedClass(e(s), s);
            }, this)
          )
          .end();
      }),
      (n.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i),
          e.toggleClass("collapsed", !i).attr("aria-expanded", i);
      });
    var s = t.fn.collapse;
    (t.fn.collapse = i),
      (t.fn.collapse.Constructor = n),
      (t.fn.collapse.noConflict = function () {
        return (t.fn.collapse = s), this;
      }),
      t(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (n) {
          var s = t(this);
          s.attr("data-target") || n.preventDefault();
          var o = e(s),
            r = o.data("bs.collapse"),
            a = r ? "toggle" : s.data();
          i.call(o, a);
        }
      );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      var i = e.attr("data-target");
      i ||
        ((i = e.attr("href")),
        (i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")));
      var n = i && t(i);
      return n && n.length ? n : e.parent();
    }
    function i(i) {
      (i && 3 === i.which) ||
        (t(s).remove(),
        t(o).each(function () {
          var n = t(this),
            s = e(n),
            o = { relatedTarget: this };
          s.hasClass("open") &&
            ((i &&
              "click" == i.type &&
              /input|textarea/i.test(i.target.tagName) &&
              t.contains(s[0], i.target)) ||
              (s.trigger((i = t.Event("hide.bs.dropdown", o))),
              i.isDefaultPrevented() ||
                (n.attr("aria-expanded", "false"),
                s
                  .removeClass("open")
                  .trigger(t.Event("hidden.bs.dropdown", o)))));
        }));
    }
    function n(e) {
      return this.each(function () {
        var i = t(this),
          n = i.data("bs.dropdown");
        n || i.data("bs.dropdown", (n = new r(this))),
          "string" == typeof e && n[e].call(i);
      });
    }
    var s = ".dropdown-backdrop",
      o = '[data-toggle="dropdown"]',
      r = function (e) {
        t(e).on("click.bs.dropdown", this.toggle);
      };
    (r.VERSION = "3.3.6"),
      (r.prototype.toggle = function (n) {
        var s = t(this);
        if (!s.is(".disabled, :disabled")) {
          var o = e(s),
            r = o.hasClass("open");
          if ((i(), !r)) {
            "ontouchstart" in document.documentElement &&
              !o.closest(".navbar-nav").length &&
              t(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(t(this))
                .on("click", i);
            var a = { relatedTarget: this };
            if (
              (o.trigger((n = t.Event("show.bs.dropdown", a))),
              n.isDefaultPrevented())
            )
              return;
            s.trigger("focus").attr("aria-expanded", "true"),
              o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a));
          }
          return !1;
        }
      }),
      (r.prototype.keydown = function (i) {
        if (
          /(38|40|27|32)/.test(i.which) &&
          !/input|textarea/i.test(i.target.tagName)
        ) {
          var n = t(this);
          if (
            (i.preventDefault(),
            i.stopPropagation(),
            !n.is(".disabled, :disabled"))
          ) {
            var s = e(n),
              r = s.hasClass("open");
            if ((!r && 27 != i.which) || (r && 27 == i.which))
              return (
                27 == i.which && s.find(o).trigger("focus"), n.trigger("click")
              );
            var a = " li:not(.disabled):visible a",
              l = s.find(".dropdown-menu" + a);
            if (l.length) {
              var c = l.index(i.target);
              38 == i.which && c > 0 && c--,
                40 == i.which && c < l.length - 1 && c++,
                ~c || (c = 0),
                l.eq(c).trigger("focus");
            }
          }
        }
      });
    var a = t.fn.dropdown;
    (t.fn.dropdown = n),
      (t.fn.dropdown.Constructor = r),
      (t.fn.dropdown.noConflict = function () {
        return (t.fn.dropdown = a), this;
      }),
      t(document)
        .on("click.bs.dropdown.data-api", i)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
          t.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", o, r.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", o, r.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          r.prototype.keydown
        );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e, n) {
      return this.each(function () {
        var s = t(this),
          o = s.data("bs.modal"),
          r = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
        o || s.data("bs.modal", (o = new i(this, r))),
          "string" == typeof e ? o[e](n) : r.show && o.show(n);
      });
    }
    var i = function (e, i) {
      (this.options = i),
        (this.$body = t(document.body)),
        (this.$element = t(e)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            t.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (i.VERSION = "3.3.6"),
      (i.TRANSITION_DURATION = 300),
      (i.BACKDROP_TRANSITION_DURATION = 150),
      (i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t);
      }),
      (i.prototype.show = function (e) {
        var n = this,
          s = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(s),
          this.isShown ||
            s.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              t.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              n.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var s = t.support.transition && n.$element.hasClass("fade");
              n.$element.parent().length || n.$element.appendTo(n.$body),
                n.$element.show().scrollTop(0),
                n.adjustDialog(),
                s && n.$element[0].offsetWidth,
                n.$element.addClass("in"),
                n.enforceFocus();
              var o = t.Event("shown.bs.modal", { relatedTarget: e });
              s
                ? n.$dialog
                    .one("bsTransitionEnd", function () {
                      n.$element.trigger("focus").trigger(o);
                    })
                    .emulateTransitionEnd(i.TRANSITION_DURATION)
                : n.$element.trigger("focus").trigger(o);
            }));
      }),
      (i.prototype.hide = function (e) {
        e && e.preventDefault(),
          (e = t.Event("hide.bs.modal")),
          this.$element.trigger(e),
          this.isShown &&
            !e.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            t(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            t.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", t.proxy(this.hideModal, this))
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (i.prototype.enforceFocus = function () {
        t(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            t.proxy(function (t) {
              this.$element[0] === t.target ||
                this.$element.has(t.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (i.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              t.proxy(function (t) {
                27 == t.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (i.prototype.resize = function () {
        this.isShown
          ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this))
          : t(window).off("resize.bs.modal");
      }),
      (i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(),
          this.backdrop(function () {
            t.$body.removeClass("modal-open"),
              t.resetAdjustments(),
              t.resetScrollbar(),
              t.$element.trigger("hidden.bs.modal");
          });
      }),
      (i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (i.prototype.backdrop = function (e) {
        var n = this,
          s = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var o = t.support.transition && s;
          if (
            ((this.$backdrop = t(document.createElement("div"))
              .addClass("modal-backdrop " + s)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              t.proxy(function (t) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      t.target === t.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            o && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
          )
            return;
          o
            ? this.$backdrop
                .one("bsTransitionEnd", e)
                .emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION)
            : e();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var r = function () {
            n.removeBackdrop(), e && e();
          };
          t.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", r)
                .emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION)
            : r();
        } else e && e();
      }),
      (i.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (i.prototype.adjustDialog = function () {
        var t =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "",
        });
      }),
      (i.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
          var e = document.documentElement.getBoundingClientRect();
          t = e.right - Math.abs(e.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < t),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", t + this.scrollbarWidth);
      }),
      (i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        (t.className = "modal-scrollbar-measure"), this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e;
      });
    var n = t.fn.modal;
    (t.fn.modal = e),
      (t.fn.modal.Constructor = i),
      (t.fn.modal.noConflict = function () {
        return (t.fn.modal = n), this;
      }),
      t(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (i) {
          var n = t(this),
            s = n.attr("href"),
            o = t(
              n.attr("data-target") || (s && s.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            r = o.data("bs.modal")
              ? "toggle"
              : t.extend({ remote: !/#/.test(s) && s }, o.data(), n.data());
          n.is("a") && i.preventDefault(),
            o.one("show.bs.modal", function (t) {
              t.isDefaultPrevented() ||
                o.one("hidden.bs.modal", function () {
                  n.is(":visible") && n.trigger("focus");
                });
            }),
            e.call(o, r, this);
        }
      );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var n = t(this),
          s = n.data("bs.tooltip"),
          o = "object" == typeof e && e;
        (s || !/destroy|hide/.test(e)) &&
          (s || n.data("bs.tooltip", (s = new i(this, o))),
          "string" == typeof e && s[e]());
      });
    }
    var i = function (t, e) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", t, e);
    };
    (i.VERSION = "3.3.6"),
      (i.TRANSITION_DURATION = 150),
      (i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (i.prototype.init = function (e, i, n) {
        if (
          ((this.enabled = !0),
          (this.type = e),
          (this.$element = t(i)),
          (this.options = this.getOptions(n)),
          (this.$viewport =
            this.options.viewport &&
            t(
              t.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var s = this.options.trigger.split(" "), o = s.length; o--; ) {
          var r = s[o];
          if ("click" == r)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              t.proxy(this.toggle, this)
            );
          else if ("manual" != r) {
            var a = "hover" == r ? "mouseenter" : "focusin",
              l = "hover" == r ? "mouseleave" : "focusout";
            this.$element.on(
              a + "." + this.type,
              this.options.selector,
              t.proxy(this.enter, this)
            ),
              this.$element.on(
                l + "." + this.type,
                this.options.selector,
                t.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = t.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (i.prototype.getDefaults = function () {
        return i.DEFAULTS;
      }),
      (i.prototype.getOptions = function (e) {
        return (
          (e = t.extend({}, this.getDefaults(), this.$element.data(), e)),
          e.delay &&
            "number" == typeof e.delay &&
            (e.delay = { show: e.delay, hide: e.delay }),
          e
        );
      }),
      (i.prototype.getDelegateOptions = function () {
        var e = {},
          i = this.getDefaults();
        return (
          this._options &&
            t.each(this._options, function (t, n) {
              i[t] != n && (e[t] = n);
            }),
          e
        );
      }),
      (i.prototype.enter = function (e) {
        var i =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        return (
          i ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, i)),
          e instanceof t.Event &&
            (i.inState["focusin" == e.type ? "focus" : "hover"] = !0),
          i.tip().hasClass("in") || "in" == i.hoverState
            ? void (i.hoverState = "in")
            : (clearTimeout(i.timeout),
              (i.hoverState = "in"),
              i.options.delay && i.options.delay.show
                ? void (i.timeout = setTimeout(function () {
                    "in" == i.hoverState && i.show();
                  }, i.options.delay.show))
                : i.show())
        );
      }),
      (i.prototype.isInStateTrue = function () {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1;
      }),
      (i.prototype.leave = function (e) {
        var i =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        return (
          i ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, i)),
          e instanceof t.Event &&
            (i.inState["focusout" == e.type ? "focus" : "hover"] = !1),
          i.isInStateTrue()
            ? void 0
            : (clearTimeout(i.timeout),
              (i.hoverState = "out"),
              i.options.delay && i.options.delay.hide
                ? void (i.timeout = setTimeout(function () {
                    "out" == i.hoverState && i.hide();
                  }, i.options.delay.hide))
                : i.hide())
        );
      }),
      (i.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(e);
          var n = t.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (e.isDefaultPrevented() || !n) return;
          var s = this,
            o = this.tip(),
            r = this.getUID(this.type);
          this.setContent(),
            o.attr("id", r),
            this.$element.attr("aria-describedby", r),
            this.options.animation && o.addClass("fade");
          var a =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, o[0], this.$element[0])
                : this.options.placement,
            l = /\s?auto?\s?/i,
            c = l.test(a);
          c && (a = a.replace(l, "") || "top"),
            o
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(a)
              .data("bs." + this.type, this),
            this.options.container
              ? o.appendTo(this.options.container)
              : o.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var u = this.getPosition(),
            h = o[0].offsetWidth,
            d = o[0].offsetHeight;
          if (c) {
            var p = a,
              f = this.getPosition(this.$viewport);
            (a =
              "bottom" == a && u.bottom + d > f.bottom
                ? "top"
                : "top" == a && u.top - d < f.top
                ? "bottom"
                : "right" == a && u.right + h > f.width
                ? "left"
                : "left" == a && u.left - h < f.left
                ? "right"
                : a),
              o.removeClass(p).addClass(a);
          }
          var m = this.getCalculatedOffset(a, u, h, d);
          this.applyPlacement(m, a);
          var g = function () {
            var t = s.hoverState;
            s.$element.trigger("shown.bs." + s.type),
              (s.hoverState = null),
              "out" == t && s.leave(s);
          };
          t.support.transition && this.$tip.hasClass("fade")
            ? o
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(i.TRANSITION_DURATION)
            : g();
        }
      }),
      (i.prototype.applyPlacement = function (e, i) {
        var n = this.tip(),
          s = n[0].offsetWidth,
          o = n[0].offsetHeight,
          r = parseInt(n.css("margin-top"), 10),
          a = parseInt(n.css("margin-left"), 10);
        isNaN(r) && (r = 0),
          isNaN(a) && (a = 0),
          (e.top += r),
          (e.left += a),
          t.offset.setOffset(
            n[0],
            t.extend(
              {
                using: function (t) {
                  n.css({ top: Math.round(t.top), left: Math.round(t.left) });
                },
              },
              e
            ),
            0
          ),
          n.addClass("in");
        var l = n[0].offsetWidth,
          c = n[0].offsetHeight;
        "top" == i && c != o && (e.top = e.top + o - c);
        var u = this.getViewportAdjustedDelta(i, e, l, c);
        u.left ? (e.left += u.left) : (e.top += u.top);
        var h = /top|bottom/.test(i),
          d = h ? 2 * u.left - s + l : 2 * u.top - o + c,
          p = h ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(d, n[0][p], h);
      }),
      (i.prototype.replaceArrow = function (t, e, i) {
        this.arrow()
          .css(i ? "left" : "top", 50 * (1 - t / e) + "%")
          .css(i ? "top" : "left", "");
      }),
      (i.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
          t.removeClass("fade in top bottom left right");
      }),
      (i.prototype.hide = function (e) {
        function n() {
          "in" != s.hoverState && o.detach(),
            s.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + s.type),
            e && e();
        }
        var s = this,
          o = t(this.$tip),
          r = t.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(r),
          r.isDefaultPrevented()
            ? void 0
            : (o.removeClass("in"),
              t.support.transition && o.hasClass("fade")
                ? o
                    .one("bsTransitionEnd", n)
                    .emulateTransitionEnd(i.TRANSITION_DURATION)
                : n(),
              (this.hoverState = null),
              this)
        );
      }),
      (i.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) &&
          t
            .attr("data-original-title", t.attr("title") || "")
            .attr("title", "");
      }),
      (i.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (i.prototype.getPosition = function (e) {
        e = e || this.$element;
        var i = e[0],
          n = "BODY" == i.tagName,
          s = i.getBoundingClientRect();
        null == s.width &&
          (s = t.extend({}, s, {
            width: s.right - s.left,
            height: s.bottom - s.top,
          }));
        var o = n ? { top: 0, left: 0 } : e.offset(),
          r = {
            scroll: n
              ? document.documentElement.scrollTop || document.body.scrollTop
              : e.scrollTop(),
          },
          a = n
            ? { width: t(window).width(), height: t(window).height() }
            : null;
        return t.extend({}, s, r, a, o);
      }),
      (i.prototype.getCalculatedOffset = function (t, e, i, n) {
        return "bottom" == t
          ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 }
          : "top" == t
          ? { top: e.top - n, left: e.left + e.width / 2 - i / 2 }
          : "left" == t
          ? { top: e.top + e.height / 2 - n / 2, left: e.left - i }
          : { top: e.top + e.height / 2 - n / 2, left: e.left + e.width };
      }),
      (i.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
        var s = { top: 0, left: 0 };
        if (!this.$viewport) return s;
        var o = (this.options.viewport && this.options.viewport.padding) || 0,
          r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
          var a = e.top - o - r.scroll,
            l = e.top + o - r.scroll + n;
          a < r.top
            ? (s.top = r.top - a)
            : l > r.top + r.height && (s.top = r.top + r.height - l);
        } else {
          var c = e.left - o,
            u = e.left + o + i;
          c < r.left
            ? (s.left = r.left - c)
            : u > r.right && (s.left = r.left + r.width - u);
        }
        return s;
      }),
      (i.prototype.getTitle = function () {
        var t,
          e = this.$element,
          i = this.options;
        return (t =
          e.attr("data-original-title") ||
          ("function" == typeof i.title ? i.title.call(e[0]) : i.title));
      }),
      (i.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random());
        while (document.getElementById(t));
        return t;
      }),
      (i.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = t(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (i.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (i.prototype.enable = function () {
        this.enabled = !0;
      }),
      (i.prototype.disable = function () {
        this.enabled = !1;
      }),
      (i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (i.prototype.toggle = function (e) {
        var i = this;
        e &&
          ((i = t(e.currentTarget).data("bs." + this.type)),
          i ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, i))),
          e
            ? ((i.inState.click = !i.inState.click),
              i.isInStateTrue() ? i.enter(i) : i.leave(i))
            : i.tip().hasClass("in")
            ? i.leave(i)
            : i.enter(i);
      }),
      (i.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type),
              t.$tip && t.$tip.detach(),
              (t.$tip = null),
              (t.$arrow = null),
              (t.$viewport = null);
          });
      });
    var n = t.fn.tooltip;
    (t.fn.tooltip = e),
      (t.fn.tooltip.Constructor = i),
      (t.fn.tooltip.noConflict = function () {
        return (t.fn.tooltip = n), this;
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var n = t(this),
          s = n.data("bs.popover"),
          o = "object" == typeof e && e;
        (s || !/destroy|hide/.test(e)) &&
          (s || n.data("bs.popover", (s = new i(this, o))),
          "string" == typeof e && s[e]());
      });
    }
    var i = function (t, e) {
      this.init("popover", t, e);
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (i.VERSION = "3.3.6"),
      (i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
      (i.prototype.constructor = i),
      (i.prototype.getDefaults = function () {
        return i.DEFAULTS;
      }),
      (i.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle(),
          i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
          t
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof i
                  ? "html"
                  : "append"
                : "text"
            ](i),
          t.removeClass("fade top bottom left right in"),
          t.find(".popover-title").html() || t.find(".popover-title").hide();
      }),
      (i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (i.prototype.getContent = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-content") ||
          ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        );
      }),
      (i.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var n = t.fn.popover;
    (t.fn.popover = e),
      (t.fn.popover.Constructor = i),
      (t.fn.popover.noConflict = function () {
        return (t.fn.popover = n), this;
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(i, n) {
      (this.$body = t(document.body)),
        (this.$scrollElement = t(t(i).is(document.body) ? window : i)),
        (this.options = t.extend({}, e.DEFAULTS, n)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          t.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function i(i) {
      return this.each(function () {
        var n = t(this),
          s = n.data("bs.scrollspy"),
          o = "object" == typeof i && i;
        s || n.data("bs.scrollspy", (s = new e(this, o))),
          "string" == typeof i && s[i]();
      });
    }
    (e.VERSION = "3.3.6"),
      (e.DEFAULTS = { offset: 10 }),
      (e.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (e.prototype.refresh = function () {
        var e = this,
          i = "offset",
          n = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          t.isWindow(this.$scrollElement[0]) ||
            ((i = "position"), (n = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var e = t(this),
                s = e.data("target") || e.attr("href"),
                o = /^#./.test(s) && t(s);
              return (
                (o && o.length && o.is(":visible") && [[o[i]().top + n, s]]) ||
                null
              );
            })
            .sort(function (t, e) {
              return t[0] - e[0];
            })
            .each(function () {
              e.offsets.push(this[0]), e.targets.push(this[1]);
            });
      }),
      (e.prototype.process = function () {
        var t,
          e = this.$scrollElement.scrollTop() + this.options.offset,
          i = this.getScrollHeight(),
          n = this.options.offset + i - this.$scrollElement.height(),
          s = this.offsets,
          o = this.targets,
          r = this.activeTarget;
        if ((this.scrollHeight != i && this.refresh(), e >= n))
          return r != (t = o[o.length - 1]) && this.activate(t);
        if (r && e < s[0]) return (this.activeTarget = null), this.clear();
        for (t = s.length; t--; )
          r != o[t] &&
            e >= s[t] &&
            (void 0 === s[t + 1] || e < s[t + 1]) &&
            this.activate(o[t]);
      }),
      (e.prototype.activate = function (e) {
        (this.activeTarget = e), this.clear();
        var i =
            this.selector +
            '[data-target="' +
            e +
            '"],' +
            this.selector +
            '[href="' +
            e +
            '"]',
          n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length &&
          (n = n.closest("li.dropdown").addClass("active")),
          n.trigger("activate.bs.scrollspy");
      }),
      (e.prototype.clear = function () {
        t(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var n = t.fn.scrollspy;
    (t.fn.scrollspy = i),
      (t.fn.scrollspy.Constructor = e),
      (t.fn.scrollspy.noConflict = function () {
        return (t.fn.scrollspy = n), this;
      }),
      t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
          var e = t(this);
          i.call(e, e.data());
        });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var n = t(this),
          s = n.data("bs.tab");
        s || n.data("bs.tab", (s = new i(this))),
          "string" == typeof e && s[e]();
      });
    }
    var i = function (e) {
      this.element = t(e);
    };
    (i.VERSION = "3.3.6"),
      (i.TRANSITION_DURATION = 150),
      (i.prototype.show = function () {
        var e = this.element,
          i = e.closest("ul:not(.dropdown-menu)"),
          n = e.data("target");
        if (
          (n ||
            ((n = e.attr("href")), (n = n && n.replace(/.*(?=#[^\s]*$)/, ""))),
          !e.parent("li").hasClass("active"))
        ) {
          var s = i.find(".active:last a"),
            o = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
            r = t.Event("show.bs.tab", { relatedTarget: s[0] });
          if (
            (s.trigger(o),
            e.trigger(r),
            !r.isDefaultPrevented() && !o.isDefaultPrevented())
          ) {
            var a = t(n);
            this.activate(e.closest("li"), i),
              this.activate(a, a.parent(), function () {
                s.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }),
                  e.trigger({ type: "shown.bs.tab", relatedTarget: s[0] });
              });
          }
        }
      }),
      (i.prototype.activate = function (e, n, s) {
        function o() {
          r
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            e
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu").length &&
              e
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            s && s();
        }
        var r = n.find("> .active"),
          a =
            s &&
            t.support.transition &&
            ((r.length && r.hasClass("fade")) || !!n.find("> .fade").length);
        r.length && a
          ? r
              .one("bsTransitionEnd", o)
              .emulateTransitionEnd(i.TRANSITION_DURATION)
          : o(),
          r.removeClass("in");
      });
    var n = t.fn.tab;
    (t.fn.tab = e),
      (t.fn.tab.Constructor = i),
      (t.fn.tab.noConflict = function () {
        return (t.fn.tab = n), this;
      });
    var s = function (i) {
      i.preventDefault(), e.call(t(this), "show");
    };
    t(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', s)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', s);
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var n = t(this),
          s = n.data("bs.affix"),
          o = "object" == typeof e && e;
        s || n.data("bs.affix", (s = new i(this, o))),
          "string" == typeof e && s[e]();
      });
    }
    var i = function (e, n) {
      (this.options = t.extend({}, i.DEFAULTS, n)),
        (this.$target = t(this.options.target)
          .on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            t.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = t(e)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (i.VERSION = "3.3.6"),
      (i.RESET = "affix affix-top affix-bottom"),
      (i.DEFAULTS = { offset: 0, target: window }),
      (i.prototype.getState = function (t, e, i, n) {
        var s = this.$target.scrollTop(),
          o = this.$element.offset(),
          r = this.$target.height();
        if (null != i && "top" == this.affixed) return i > s ? "top" : !1;
        if ("bottom" == this.affixed)
          return null != i
            ? s + this.unpin <= o.top
              ? !1
              : "bottom"
            : t - n >= s + r
            ? !1
            : "bottom";
        var a = null == this.affixed,
          l = a ? s : o.top,
          c = a ? r : e;
        return null != i && i >= s
          ? "top"
          : null != n && l + c >= t - n
          ? "bottom"
          : !1;
      }),
      (i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
          e = this.$element.offset();
        return (this.pinnedOffset = e.top - t);
      }),
      (i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1);
      }),
      (i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var e = this.$element.height(),
            n = this.options.offset,
            s = n.top,
            o = n.bottom,
            r = Math.max(t(document).height(), t(document.body).height());
          "object" != typeof n && (o = s = n),
            "function" == typeof s && (s = n.top(this.$element)),
            "function" == typeof o && (o = n.bottom(this.$element));
          var a = this.getState(r, e, s, o);
          if (this.affixed != a) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (a ? "-" + a : ""),
              c = t.Event(l + ".bs.affix");
            if ((this.$element.trigger(c), c.isDefaultPrevented())) return;
            (this.affixed = a),
              (this.unpin = "bottom" == a ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(i.RESET)
                .addClass(l)
                .trigger(l.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == a && this.$element.offset({ top: r - e - o });
        }
      });
    var n = t.fn.affix;
    (t.fn.affix = e),
      (t.fn.affix.Constructor = i),
      (t.fn.affix.noConflict = function () {
        return (t.fn.affix = n), this;
      }),
      t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
          var i = t(this),
            n = i.data();
          (n.offset = n.offset || {}),
            null != n.offsetBottom && (n.offset.bottom = n.offsetBottom),
            null != n.offsetTop && (n.offset.top = n.offsetTop),
            e.call(i, n);
        });
      });
  })(jQuery),
  (function () {
    var t = !1;
    (window.JQClass = function () {}),
      (JQClass.classes = {}),
      (JQClass.extend = function e(i) {
        function n() {
          !t && this._init && this._init.apply(this, arguments);
        }
        var s = this.prototype;
        t = !0;
        var o = new this();
        t = !1;
        for (var r in i)
          o[r] =
            "function" == typeof i[r] && "function" == typeof s[r]
              ? (function (t, e) {
                  return function () {
                    var i = this._super;
                    this._super = function (e) {
                      return s[t].apply(this, e);
                    };
                    var n = e.apply(this, arguments);
                    return (this._super = i), n;
                  };
                })(r, i[r])
              : i[r];
        return (
          (n.prototype = o), (n.prototype.constructor = n), (n.extend = e), n
        );
      });
  })(),
  (function ($) {
    function camelCase(t) {
      return t.replace(/-([a-z])/g, function (t, e) {
        return e.toUpperCase();
      });
    }
    (JQClass.classes.JQPlugin = JQClass.extend({
      name: "plugin",
      defaultOptions: {},
      regionalOptions: {},
      _getters: [],
      _getMarker: function () {
        return "is-" + this.name;
      },
      _init: function () {
        $.extend(
          this.defaultOptions,
          (this.regionalOptions && this.regionalOptions[""]) || {}
        );
        var t = camelCase(this.name);
        ($[t] = this),
          ($.fn[t] = function (e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return $[t]._isNotChained(e, i)
              ? $[t][e].apply($[t], [this[0]].concat(i))
              : this.each(function () {
                  if ("string" == typeof e) {
                    if ("_" === e[0] || !$[t][e]) throw "Unknown method: " + e;
                    $[t][e].apply($[t], [this].concat(i));
                  } else $[t]._attach(this, e);
                });
          });
      },
      setDefaults: function (t) {
        $.extend(this.defaultOptions, t || {});
      },
      _isNotChained: function (t, e) {
        return "option" === t &&
          (0 === e.length || (1 === e.length && "string" == typeof e[0]))
          ? !0
          : $.inArray(t, this._getters) > -1;
      },
      _attach: function (t, e) {
        if (((t = $(t)), !t.hasClass(this._getMarker()))) {
          t.addClass(this._getMarker()),
            (e = $.extend(
              {},
              this.defaultOptions,
              this._getMetadata(t),
              e || {}
            ));
          var i = $.extend(
            { name: this.name, elem: t, options: e },
            this._instSettings(t, e)
          );
          t.data(this.name, i), this._postAttach(t, i), this.option(t, e);
        }
      },
      _instSettings: function (t, e) {
        return {};
      },
      _postAttach: function (t, e) {},
      _getMetadata: function (elem) {
        try {
          var data = elem.data(this.name.toLowerCase()) || "";
          (data = data.replace(/'/g, '"')),
            (data = data.replace(/([a-zA-Z0-9]+):/g, function (t, e, i) {
              var n = data.substring(0, i).match(/"/g);
              return n && n.length % 2 !== 0 ? e + ":" : '"' + e + '":';
            })),
            (data = $.parseJSON("{" + data + "}"));
          for (var name in data) {
            var value = data[name];
            "string" == typeof value &&
              value.match(/^new Date\((.*)\)$/) &&
              (data[name] = eval(value));
          }
          return data;
        } catch (e) {
          return {};
        }
      },
      _getInst: function (t) {
        return $(t).data(this.name) || {};
      },
      option: function (t, e, i) {
        t = $(t);
        var n = t.data(this.name);
        if (!e || ("string" == typeof e && null == i)) {
          var s = (n || {}).options;
          return s && e ? s[e] : s;
        }
        if (t.hasClass(this._getMarker())) {
          var s = e || {};
          "string" == typeof e && ((s = {}), (s[e] = i)),
            this._optionsChanged(t, n, s),
            $.extend(n.options, s);
        }
      },
      _optionsChanged: function (t, e, i) {},
      destroy: function (t) {
        (t = $(t)),
          t.hasClass(this._getMarker()) &&
            (this._preDestroy(t, this._getInst(t)),
            t.removeData(this.name).removeClass(this._getMarker()));
      },
      _preDestroy: function (t, e) {},
    })),
      ($.JQPlugin = {
        createPlugin: function (t, e) {
          "object" == typeof t && ((e = t), (t = "JQPlugin")),
            (t = camelCase(t));
          var i = camelCase(e.name);
          (JQClass.classes[i] = JQClass.classes[t].extend(e)),
            new JQClass.classes[i]();
        },
      });
  })(jQuery),
  (function (t) {
    var e = "countdown",
      i = 0,
      n = 1,
      s = 2,
      o = 3,
      r = 4,
      a = 5,
      l = 6;
    t.JQPlugin.createPlugin({
      name: e,
      defaultOptions: {
        until: null,
        since: null,
        timezone: null,
        serverSync: null,
        format: "dHMS",
        layout: "",
        compact: !1,
        padZeroes: !1,
        significant: 0,
        description: "",
        expiryUrl: "",
        expiryText: "",
        alwaysExpire: !1,
        onExpiry: null,
        onTick: null,
        tickInterval: 1,
      },
      regionalOptions: {
        "": {
          labels: [
            "Years",
            "Months",
            "Weeks",
            "Days",
            "Hours",
            "Minutes",
            "Seconds",
          ],
          labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
          compactLabels: ["y", "m", "w", "d"],
          whichLabels: null,
          digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
          timeSeparator: ":",
          isRTL: !1,
        },
      },
      _getters: ["getTimes"],
      _rtlClass: e + "-rtl",
      _sectionClass: e + "-section",
      _amountClass: e + "-amount",
      _periodClass: e + "-period",
      _rowClass: e + "-row",
      _holdingClass: e + "-holding",
      _showClass: e + "-show",
      _descrClass: e + "-descr",
      _timerElems: [],
      _init: function () {
        function e(t) {
          var a =
            1e12 > t
              ? s
                ? performance.now() + performance.timing.navigationStart
                : n()
              : t || n();
          a - r >= 1e3 && (i._updateElems(), (r = a)), o(e);
        }
        var i = this;
        this._super(), (this._serverSyncs = []);
        var n =
            "function" == typeof Date.now
              ? Date.now
              : function () {
                  return new Date().getTime();
                },
          s = window.performance && "function" == typeof window.performance.now,
          o =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            null,
          r = 0;
        !o || t.noRequestAnimationFrame
          ? ((t.noRequestAnimationFrame = null),
            setInterval(function () {
              i._updateElems();
            }, 980))
          : ((r =
              window.animationStartTime ||
              window.webkitAnimationStartTime ||
              window.mozAnimationStartTime ||
              window.oAnimationStartTime ||
              window.msAnimationStartTime ||
              n()),
            o(e));
      },
      UTCDate: function (t, e, i, n, s, o, r, a) {
        "object" == typeof e &&
          e.constructor == Date &&
          ((a = e.getMilliseconds()),
          (r = e.getSeconds()),
          (o = e.getMinutes()),
          (s = e.getHours()),
          (n = e.getDate()),
          (i = e.getMonth()),
          (e = e.getFullYear()));
        var l = new Date();
        return (
          l.setUTCFullYear(e),
          l.setUTCDate(1),
          l.setUTCMonth(i || 0),
          l.setUTCDate(n || 1),
          l.setUTCHours(s || 0),
          l.setUTCMinutes((o || 0) - (Math.abs(t) < 30 ? 60 * t : t)),
          l.setUTCSeconds(r || 0),
          l.setUTCMilliseconds(a || 0),
          l
        );
      },
      periodsToSeconds: function (t) {
        return (
          31557600 * t[0] +
          2629800 * t[1] +
          604800 * t[2] +
          86400 * t[3] +
          3600 * t[4] +
          60 * t[5] +
          t[6]
        );
      },
      _instSettings: function (t, e) {
        return { _periods: [0, 0, 0, 0, 0, 0, 0] };
      },
      _addElem: function (t) {
        this._hasElem(t) || this._timerElems.push(t);
      },
      _hasElem: function (e) {
        return t.inArray(e, this._timerElems) > -1;
      },
      _removeElem: function (e) {
        this._timerElems = t.map(this._timerElems, function (t) {
          return t == e ? null : t;
        });
      },
      _updateElems: function () {
        for (var t = this._timerElems.length - 1; t >= 0; t--)
          this._updateCountdown(this._timerElems[t]);
      },
      _optionsChanged: function (e, i, n) {
        n.layout &&
          (n.layout = n.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")),
          this._resetExtraLabels(i.options, n);
        var s = i.options.timezone != n.timezone;
        t.extend(i.options, n),
          this._adjustSettings(e, i, null != n.until || null != n.since || s);
        var o = new Date();
        ((i._since && i._since < o) || (i._until && i._until > o)) &&
          this._addElem(e[0]),
          this._updateCountdown(e, i);
      },
      _updateCountdown: function (e, i) {
        if (((e = e.jquery ? e : t(e)), (i = i || e.data(this.name)))) {
          if (
            (e
              .html(this._generateHTML(i))
              .toggleClass(this._rtlClass, i.options.isRTL),
            t.isFunction(i.options.onTick))
          ) {
            var n =
              "lap" != i._hold
                ? i._periods
                : this._calculatePeriods(
                    i,
                    i._show,
                    i.options.significant,
                    new Date()
                  );
            (1 == i.options.tickInterval ||
              this.periodsToSeconds(n) % i.options.tickInterval == 0) &&
              i.options.onTick.apply(e[0], [n]);
          }
          var s =
            "pause" != i._hold &&
            (i._since
              ? i._now.getTime() < i._since.getTime()
              : i._now.getTime() >= i._until.getTime());
          if (s && !i._expiring) {
            if (
              ((i._expiring = !0),
              this._hasElem(e[0]) || i.options.alwaysExpire)
            ) {
              if (
                (this._removeElem(e[0]),
                t.isFunction(i.options.onExpiry) &&
                  i.options.onExpiry.apply(e[0], []),
                i.options.expiryText)
              ) {
                var o = i.options.layout;
                (i.options.layout = i.options.expiryText),
                  this._updateCountdown(e[0], i),
                  (i.options.layout = o);
              }
              i.options.expiryUrl && (window.location = i.options.expiryUrl);
            }
            i._expiring = !1;
          } else "pause" == i._hold && this._removeElem(e[0]);
        }
      },
      _resetExtraLabels: function (t, e) {
        var i = !1;
        for (var n in e)
          if ("whichLabels" != n && n.match(/[Ll]abels/)) {
            i = !0;
            break;
          }
        if (i)
          for (var n in t)
            n.match(/[Ll]abels[02-9]|compactLabels1/) && (t[n] = null);
      },
      _adjustSettings: function (e, i, n) {
        for (var s, o = 0, r = null, a = 0; a < this._serverSyncs.length; a++)
          if (this._serverSyncs[a][0] == i.options.serverSync) {
            r = this._serverSyncs[a][1];
            break;
          }
        if (null != r) (o = i.options.serverSync ? r : 0), (s = new Date());
        else {
          var l = t.isFunction(i.options.serverSync)
            ? i.options.serverSync.apply(e[0], [])
            : null;
          (s = new Date()),
            (o = l ? s.getTime() - l.getTime() : 0),
            this._serverSyncs.push([i.options.serverSync, o]);
        }
        var c = i.options.timezone;
        (c = null == c ? -s.getTimezoneOffset() : c),
          (n || (!n && null == i._until && null == i._since)) &&
            ((i._since = i.options.since),
            null != i._since &&
              ((i._since = this.UTCDate(
                c,
                this._determineTime(i._since, null)
              )),
              i._since &&
                o &&
                i._since.setMilliseconds(i._since.getMilliseconds() + o)),
            (i._until = this.UTCDate(
              c,
              this._determineTime(i.options.until, s)
            )),
            o && i._until.setMilliseconds(i._until.getMilliseconds() + o)),
          (i._show = this._determineShow(i));
      },
      _preDestroy: function (t, e) {
        this._removeElem(t[0]), t.empty();
      },
      pause: function (t) {
        this._hold(t, "pause");
      },
      lap: function (t) {
        this._hold(t, "lap");
      },
      resume: function (t) {
        this._hold(t, null);
      },
      toggle: function (e) {
        var i = t.data(e, this.name) || {};
        this[i._hold ? "resume" : "pause"](e);
      },
      toggleLap: function (e) {
        var i = t.data(e, this.name) || {};
        this[i._hold ? "resume" : "lap"](e);
      },
      _hold: function (e, i) {
        var n = t.data(e, this.name);
        if (n) {
          if ("pause" == n._hold && !i) {
            n._periods = n._savePeriods;
            var s = n._since ? "-" : "+";
            (n[n._since ? "_since" : "_until"] = this._determineTime(
              s +
                n._periods[0] +
                "y" +
                s +
                n._periods[1] +
                "o" +
                s +
                n._periods[2] +
                "w" +
                s +
                n._periods[3] +
                "d" +
                s +
                n._periods[4] +
                "h" +
                s +
                n._periods[5] +
                "m" +
                s +
                n._periods[6] +
                "s"
            )),
              this._addElem(e);
          }
          (n._hold = i),
            (n._savePeriods = "pause" == i ? n._periods : null),
            t.data(e, this.name, n),
            this._updateCountdown(e, n);
        }
      },
      getTimes: function (e) {
        var i = t.data(e, this.name);
        return i
          ? "pause" == i._hold
            ? i._savePeriods
            : i._hold
            ? this._calculatePeriods(
                i,
                i._show,
                i.options.significant,
                new Date()
              )
            : i._periods
          : null;
      },
      _determineTime: function (t, e) {
        var i = this,
          n = function (t) {
            var e = new Date();
            return e.setTime(e.getTime() + 1e3 * t), e;
          },
          s = function (t) {
            t = t.toLowerCase();
            for (
              var e = new Date(),
                n = e.getFullYear(),
                s = e.getMonth(),
                o = e.getDate(),
                r = e.getHours(),
                a = e.getMinutes(),
                l = e.getSeconds(),
                c = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g,
                u = c.exec(t);
              u;

            ) {
              switch (u[2] || "s") {
                case "s":
                  l += parseInt(u[1], 10);
                  break;
                case "m":
                  a += parseInt(u[1], 10);
                  break;
                case "h":
                  r += parseInt(u[1], 10);
                  break;
                case "d":
                  o += parseInt(u[1], 10);
                  break;
                case "w":
                  o += 7 * parseInt(u[1], 10);
                  break;
                case "o":
                  (s += parseInt(u[1], 10)),
                    (o = Math.min(o, i._getDaysInMonth(n, s)));
                  break;
                case "y":
                  (n += parseInt(u[1], 10)),
                    (o = Math.min(o, i._getDaysInMonth(n, s)));
              }
              u = c.exec(t);
            }
            return new Date(n, s, o, r, a, l, 0);
          },
          o =
            null == t
              ? e
              : "string" == typeof t
              ? s(t)
              : "number" == typeof t
              ? n(t)
              : t;
        return o && o.setMilliseconds(0), o;
      },
      _getDaysInMonth: function (t, e) {
        return 32 - new Date(t, e, 32).getDate();
      },
      _normalLabels: function (t) {
        return t;
      },
      _generateHTML: function (e) {
        var c = this;
        e._periods = e._hold
          ? e._periods
          : this._calculatePeriods(
              e,
              e._show,
              e.options.significant,
              new Date()
            );
        for (
          var u = !1,
            h = 0,
            d = e.options.significant,
            p = t.extend({}, e._show),
            f = i;
          l >= f;
          f++
        )
          (u |= "?" == e._show[f] && e._periods[f] > 0),
            (p[f] = "?" != e._show[f] || u ? e._show[f] : null),
            (h += p[f] ? 1 : 0),
            (d -= e._periods[f] > 0 ? 1 : 0);
        for (var m = [!1, !1, !1, !1, !1, !1, !1], f = l; f >= i; f--)
          e._show[f] && (e._periods[f] ? (m[f] = !0) : ((m[f] = d > 0), d--));
        var g = e.options.compact ? e.options.compactLabels : e.options.labels,
          v = e.options.whichLabels || this._normalLabels,
          b = function (t) {
            var i = e.options["compactLabels" + v(e._periods[t])];
            return p[t]
              ? c._translateDigits(e, e._periods[t]) + (i ? i[t] : g[t]) + " "
              : "";
          },
          y = e.options.padZeroes ? 2 : 1,
          _ = function (t) {
            var i = e.options["labels" + v(e._periods[t])];
            return (!e.options.significant && p[t]) ||
              (e.options.significant && m[t])
              ? '<span class="' +
                  c._sectionClass +
                  '"><span class="' +
                  c._amountClass +
                  '">' +
                  c._minDigits(e, e._periods[t], y) +
                  '</span><span class="' +
                  c._periodClass +
                  '">' +
                  (i ? i[t] : g[t]) +
                  "</span></span>"
              : "";
          };
        return e.options.layout
          ? this._buildLayout(
              e,
              p,
              e.options.layout,
              e.options.compact,
              e.options.significant,
              m
            )
          : (e.options.compact
              ? '<span class="' +
                this._rowClass +
                " " +
                this._amountClass +
                (e._hold ? " " + this._holdingClass : "") +
                '">' +
                b(i) +
                b(n) +
                b(s) +
                b(o) +
                (p[r] ? this._minDigits(e, e._periods[r], 2) : "") +
                (p[a]
                  ? (p[r] ? e.options.timeSeparator : "") +
                    this._minDigits(e, e._periods[a], 2)
                  : "") +
                (p[l]
                  ? (p[r] || p[a] ? e.options.timeSeparator : "") +
                    this._minDigits(e, e._periods[l], 2)
                  : "")
              : '<span class="' +
                this._rowClass +
                " " +
                this._showClass +
                (e.options.significant || h) +
                (e._hold ? " " + this._holdingClass : "") +
                '">' +
                _(i) +
                _(n) +
                _(s) +
                _(o) +
                _(r) +
                _(a) +
                _(l)) +
              "</span>" +
              (e.options.description
                ? '<span class="' +
                  this._rowClass +
                  " " +
                  this._descrClass +
                  '">' +
                  e.options.description +
                  "</span>"
                : "");
      },
      _buildLayout: function (e, c, u, h, d, p) {
        for (
          var f = e.options[h ? "compactLabels" : "labels"],
            m = e.options.whichLabels || this._normalLabels,
            g = function (t) {
              return (e.options[
                (h ? "compactLabels" : "labels") + m(e._periods[t])
              ] || f)[t];
            },
            v = function (t, i) {
              return e.options.digits[Math.floor(t / i) % 10];
            },
            b = {
              desc: e.options.description,
              sep: e.options.timeSeparator,
              yl: g(i),
              yn: this._minDigits(e, e._periods[i], 1),
              ynn: this._minDigits(e, e._periods[i], 2),
              ynnn: this._minDigits(e, e._periods[i], 3),
              y1: v(e._periods[i], 1),
              y10: v(e._periods[i], 10),
              y100: v(e._periods[i], 100),
              y1000: v(e._periods[i], 1e3),
              ol: g(n),
              on: this._minDigits(e, e._periods[n], 1),
              onn: this._minDigits(e, e._periods[n], 2),
              onnn: this._minDigits(e, e._periods[n], 3),
              o1: v(e._periods[n], 1),
              o10: v(e._periods[n], 10),
              o100: v(e._periods[n], 100),
              o1000: v(e._periods[n], 1e3),
              wl: g(s),
              wn: this._minDigits(e, e._periods[s], 1),
              wnn: this._minDigits(e, e._periods[s], 2),
              wnnn: this._minDigits(e, e._periods[s], 3),
              w1: v(e._periods[s], 1),
              w10: v(e._periods[s], 10),
              w100: v(e._periods[s], 100),
              w1000: v(e._periods[s], 1e3),
              dl: g(o),
              dn: this._minDigits(e, e._periods[o], 1),
              dnn: this._minDigits(e, e._periods[o], 2),
              dnnn: this._minDigits(e, e._periods[o], 3),
              d1: v(e._periods[o], 1),
              d10: v(e._periods[o], 10),
              d100: v(e._periods[o], 100),
              d1000: v(e._periods[o], 1e3),
              hl: g(r),
              hn: this._minDigits(e, e._periods[r], 1),
              hnn: this._minDigits(e, e._periods[r], 2),
              hnnn: this._minDigits(e, e._periods[r], 3),
              h1: v(e._periods[r], 1),
              h10: v(e._periods[r], 10),
              h100: v(e._periods[r], 100),
              h1000: v(e._periods[r], 1e3),
              ml: g(a),
              mn: this._minDigits(e, e._periods[a], 1),
              mnn: this._minDigits(e, e._periods[a], 2),
              mnnn: this._minDigits(e, e._periods[a], 3),
              m1: v(e._periods[a], 1),
              m10: v(e._periods[a], 10),
              m100: v(e._periods[a], 100),
              m1000: v(e._periods[a], 1e3),
              sl: g(l),
              sn: this._minDigits(e, e._periods[l], 1),
              snn: this._minDigits(e, e._periods[l], 2),
              snnn: this._minDigits(e, e._periods[l], 3),
              s1: v(e._periods[l], 1),
              s10: v(e._periods[l], 10),
              s100: v(e._periods[l], 100),
              s1000: v(e._periods[l], 1e3),
            },
            y = u,
            _ = i;
          l >= _;
          _++
        ) {
          var w = "yowdhms".charAt(_),
            x = new RegExp("\\{" + w + "<\\}([\\s\\S]*)\\{" + w + ">\\}", "g");
          y = y.replace(x, (!d && c[_]) || (d && p[_]) ? "$1" : "");
        }
        return (
          t.each(b, function (t, e) {
            var i = new RegExp("\\{" + t + "\\}", "g");
            y = y.replace(i, e);
          }),
          y
        );
      },
      _minDigits: function (t, e, i) {
        return (
          (e = "" + e),
          e.length >= i
            ? this._translateDigits(t, e)
            : ((e = "0000000000" + e),
              this._translateDigits(t, e.substr(e.length - i)))
        );
      },
      _translateDigits: function (t, e) {
        return ("" + e).replace(/[0-9]/g, function (e) {
          return t.options.digits[e];
        });
      },
      _determineShow: function (t) {
        var e = t.options.format,
          c = [];
        return (
          (c[i] = e.match("y") ? "?" : e.match("Y") ? "!" : null),
          (c[n] = e.match("o") ? "?" : e.match("O") ? "!" : null),
          (c[s] = e.match("w") ? "?" : e.match("W") ? "!" : null),
          (c[o] = e.match("d") ? "?" : e.match("D") ? "!" : null),
          (c[r] = e.match("h") ? "?" : e.match("H") ? "!" : null),
          (c[a] = e.match("m") ? "?" : e.match("M") ? "!" : null),
          (c[l] = e.match("s") ? "?" : e.match("S") ? "!" : null),
          c
        );
      },
      _calculatePeriods: function (t, e, c, u) {
        (t._now = u), t._now.setMilliseconds(0);
        var h = new Date(t._now.getTime());
        t._since
          ? u.getTime() < t._since.getTime()
            ? (t._now = u = h)
            : (u = t._since)
          : (h.setTime(t._until.getTime()),
            u.getTime() > t._until.getTime() && (t._now = u = h));
        var d = [0, 0, 0, 0, 0, 0, 0];
        if (e[i] || e[n]) {
          var p = this._getDaysInMonth(u.getFullYear(), u.getMonth()),
            f = this._getDaysInMonth(h.getFullYear(), h.getMonth()),
            m =
              h.getDate() == u.getDate() ||
              (h.getDate() >= Math.min(p, f) && u.getDate() >= Math.min(p, f)),
            g = function (t) {
              return 60 * (60 * t.getHours() + t.getMinutes()) + t.getSeconds();
            },
            v = Math.max(
              0,
              12 * (h.getFullYear() - u.getFullYear()) +
                h.getMonth() -
                u.getMonth() +
                ((h.getDate() < u.getDate() && !m) || (m && g(h) < g(u))
                  ? -1
                  : 0)
            );
          (d[i] = e[i] ? Math.floor(v / 12) : 0),
            (d[n] = e[n] ? v - 12 * d[i] : 0),
            (u = new Date(u.getTime()));
          var b = u.getDate() == p,
            y = this._getDaysInMonth(
              u.getFullYear() + d[i],
              u.getMonth() + d[n]
            );
          u.getDate() > y && u.setDate(y),
            u.setFullYear(u.getFullYear() + d[i]),
            u.setMonth(u.getMonth() + d[n]),
            b && u.setDate(y);
        }
        var _ = Math.floor((h.getTime() - u.getTime()) / 1e3),
          w = function (t, i) {
            (d[t] = e[t] ? Math.floor(_ / i) : 0), (_ -= d[t] * i);
          };
        if (
          (w(s, 604800),
          w(o, 86400),
          w(r, 3600),
          w(a, 60),
          w(l, 1),
          _ > 0 && !t._since)
        )
          for (
            var x = [1, 12, 4.3482, 7, 24, 60, 60], C = l, k = 1, T = l;
            T >= i;
            T--
          )
            e[T] &&
              (d[C] >= k && ((d[C] = 0), (_ = 1)),
              _ > 0 && (d[T]++, (_ = 0), (C = T), (k = 1))),
              (k *= x[T]);
        if (c) for (var T = i; l >= T; T++) c && d[T] ? c-- : c || (d[T] = 0);
        return d;
      },
    });
  })(jQuery),
  (function (t) {
    (t.countdown.regionalOptions.de = {
      labels: [
        "Jahre",
        "Monate",
        "Wochen",
        "Tage",
        "Stunden",
        "Minuten",
        "Sekunden",
      ],
      labels1: ["Jahr", "Monat", "Woche", "Tag", "Stunde", "Minute", "Sekunde"],
      compactLabels: ["J", "M", "W", "T"],
      whichLabels: null,
      digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      timeSeparator: ":",
      isRTL: !1,
    }),
      t.countdown.setDefaults(t.countdown.regionalOptions.de);
  })(jQuery),
  (function (t, e, i) {
    "use strict";
    function n(i) {
      o[i] ||
        ((o[i] = !0),
        t.migrateWarnings.push(i),
        e.console &&
          console.warn &&
          !t.migrateMute &&
          console.warn("JQMIGRATE: " + i));
    }
    function s(e, i, s, o) {
      if (Object.defineProperty)
        try {
          return void Object.defineProperty(e, i, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return n(o), s;
            },
            set: function (t) {
              n(o), (s = t);
            },
          });
        } catch (r) {}
      (t._definePropertyBroken = !0), (e[i] = s);
    }
    var o = {};
    (t.migrateWarnings = []),
      (t.migrateReset = function () {
        (o = {}), (t.migrateWarnings.length = 0);
      }),
      "BackCompat" === document.compatMode &&
        n("jQuery is not compatible with Quirks Mode");
    var r = {},
      a = t.attr,
      l =
        (t.attrHooks.value && t.attrHooks.value.get) ||
        function () {
          return null;
        },
      c =
        (t.attrHooks.value && t.attrHooks.value.set) ||
        function () {
          return i;
        },
      u = /^(?:input|button)$/i,
      h = /^[238]$/,
      d = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      p = /^(?:checked|selected)$/i;
    s(t, "attrFn", r, "jQuery.attrFn is deprecated"),
      (t.attr = function (e, s, o, r) {
        var l = s.toLowerCase(),
          c = e && e.nodeType;
        return r &&
          (n("jQuery.fn.attr( props, pass ) is deprecated"),
          e && !h.test(c) && t.isFunction(t.fn[s]))
          ? t(e)[s](o)
          : ("type" === s &&
              o !== i &&
              u.test(e.nodeName) &&
              n("Can't change the 'type' of an input or button in IE 6/7/8"),
            !t.attrHooks[l] &&
              d.test(l) &&
              ((t.attrHooks[l] = {
                get: function (e, n) {
                  var s,
                    o = t.prop(e, n);
                  return o === !0 ||
                    ("boolean" != typeof o &&
                      (s = e.getAttributeNode(n)) &&
                      s.nodeValue !== !1)
                    ? n.toLowerCase()
                    : i;
                },
                set: function (e, i, n) {
                  var s;
                  return (
                    i === !1
                      ? t.removeAttr(e, n)
                      : ((s = t.propFix[n] || n),
                        s in e && (e[s] = !0),
                        e.setAttribute(n, n.toLowerCase())),
                    n
                  );
                },
              }),
              p.test(l) &&
                n(
                  "jQuery.fn.attr(" +
                    l +
                    ") may use property instead of attribute"
                )),
            a.call(t, e, s, o));
      }),
      (t.attrHooks.value = {
        get: function (t, e) {
          var i = (t.nodeName || "").toLowerCase();
          return "button" === i
            ? l.apply(this, arguments)
            : ("input" !== i &&
                "option" !== i &&
                n("property-based jQuery.fn.attr('value') is deprecated"),
              e in t ? t.value : null);
        },
        set: function (t, e) {
          var i = (t.nodeName || "").toLowerCase();
          return "button" === i
            ? c.apply(this, arguments)
            : ("input" !== i &&
                "option" !== i &&
                n("property-based jQuery.fn.attr('value', val) is deprecated"),
              void (t.value = e));
        },
      });
    var f,
      m,
      g = t.fn.init,
      v = /^(?:.*(<[\w\W]+>)[^>]*|#([\w\-]*))$/;
    (t.fn.init = function (e, i, s) {
      var o;
      return e &&
        "string" == typeof e &&
        !t.isPlainObject(i) &&
        (o = v.exec(e)) &&
        o[1] &&
        ("<" !== e.charAt(0) &&
          n("$(html) HTML strings must start with '<' character"),
        i && i.context && (i = i.context),
        t.parseHTML)
        ? g.call(this, t.parseHTML(t.trim(e), i, !0), i, s)
        : g.apply(this, arguments);
    }),
      (t.fn.init.prototype = t.fn),
      (t.uaMatch = function (t) {
        t = t.toLowerCase();
        var e =
          /(chrome)[ \/]([\w.]+)/.exec(t) ||
          /(webkit)[ \/]([\w.]+)/.exec(t) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) ||
          /(msie) ([\w.]+)/.exec(t) ||
          (t.indexOf("compatible") < 0 &&
            /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)) ||
          [];
        return { browser: e[1] || "", version: e[2] || "0" };
      }),
      (f = t.uaMatch(navigator.userAgent)),
      (m = {}),
      f.browser && ((m[f.browser] = !0), (m.version = f.version)),
      m.chrome ? (m.webkit = !0) : m.webkit && (m.safari = !0),
      (t.browser = m),
      s(t, "browser", m, "jQuery.browser is deprecated"),
      (t.sub = function () {
        function e(t, i) {
          return new e.fn.init(t, i);
        }
        t.extend(!0, e, this),
          (e.superclass = this),
          (e.fn = e.prototype = this()),
          (e.fn.constructor = e),
          (e.sub = this.sub),
          (e.fn.init = function (n, s) {
            return (
              s && s instanceof t && !(s instanceof e) && (s = e(s)),
              t.fn.init.call(this, n, s, i)
            );
          }),
          (e.fn.init.prototype = e.fn);
        var i = e(document);
        return n("jQuery.sub() is deprecated"), e;
      });
    var b = t.fn.data;
    t.fn.data = function (e) {
      var s,
        o,
        r = this[0];
      return !r ||
        "events" !== e ||
        1 !== arguments.length ||
        ((s = t.data(r, e)),
        (o = t._data(r, e)),
        (s !== i && s !== o) || o === i)
        ? b.apply(this, arguments)
        : (n("Use of jQuery.fn.data('events') is deprecated"), o);
    };
    var y = /\/(java|ecma)script/i,
      _ = t.fn.andSelf || t.fn.addBack,
      w = t.buildFragment;
    (t.fn.andSelf = function () {
      return (
        n("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
        _.apply(this, arguments)
      );
    }),
      t.clean ||
        (t.clean = function (e, i, s, o) {
          (i = i || document),
            (i = (!i.nodeType && i[0]) || i),
            (i = i.ownerDocument || i),
            n("jQuery.clean() is deprecated");
          var r,
            a,
            l,
            c,
            u = [];
          if ((t.merge(u, t.buildFragment(e, i).childNodes), s))
            for (
              l = function (t) {
                return !t.type || y.test(t.type)
                  ? o
                    ? o.push(t.parentNode ? t.parentNode.removeChild(t) : t)
                    : s.appendChild(t)
                  : void 0;
              },
                r = 0;
              null != (a = u[r]);
              r++
            )
              (t.nodeName(a, "script") && l(a)) ||
                (s.appendChild(a),
                "undefined" != typeof a.getElementsByTagName &&
                  ((c = t.grep(
                    t.merge([], a.getElementsByTagName("script")),
                    l
                  )),
                  u.splice.apply(u, [r + 1, 0].concat(c)),
                  (r += c.length)));
          return u;
        }),
      (t.buildFragment = function (e, i, o, r) {
        var a,
          l = "jQuery.buildFragment() is deprecated";
        (i = i || document),
          (i = (!i.nodeType && i[0]) || i),
          (i = i.ownerDocument || i);
        try {
          a = w.call(t, e, i, o, r);
        } catch (c) {
          (a = w.call(t, e, i.nodeType ? [i] : i[0], o, r)), n(l);
        }
        return (
          a.fragment || (s(a, "fragment", a, l), s(a, "cacheable", !1, l)), a
        );
      });
    var x = t.event.add,
      C = t.event.remove,
      k = t.event.trigger,
      T = t.fn.toggle,
      S = t.fn.live,
      D = t.fn.die,
      I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
      E = new RegExp("\\b(?:" + I + ")\\b"),
      M = /(?:^|\s)hover(\.\S+|)\b/,
      N = function (e) {
        return "string" != typeof e || t.event.special.hover
          ? e
          : (M.test(e) &&
              n(
                "'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"
              ),
            e && e.replace(M, "mouseenter$1 mouseleave$1"));
      };
    t.event.props &&
      "attrChange" !== t.event.props[0] &&
      t.event.props.unshift(
        "attrChange",
        "attrName",
        "relatedNode",
        "srcElement"
      ),
      s(
        t.event,
        "handle",
        t.event.dispatch,
        "jQuery.event.handle is undocumented and deprecated"
      ),
      (t.event.add = function (t, e, i, s, o) {
        t !== document &&
          E.test(e) &&
          n("AJAX events should be attached to document: " + e),
          x.call(this, t, N(e || ""), i, s, o);
      }),
      (t.event.remove = function (t, e, i, n, s) {
        C.call(this, t, N(e) || "", i, n, s);
      }),
      (t.fn.error = function () {
        var t = Array.prototype.slice.call(arguments, 0);
        return (
          n("jQuery.fn.error() is deprecated"),
          t.splice(0, 0, "error"),
          arguments.length
            ? this.bind.apply(this, t)
            : (this.triggerHandler.apply(this, t), this)
        );
      }),
      (t.fn.toggle = function (e, i) {
        if (!t.isFunction(e) || !t.isFunction(i))
          return T.apply(this, arguments);
        n("jQuery.fn.toggle(handler, handler...) is deprecated");
        var s = arguments,
          o = e.guid || t.guid++,
          r = 0,
          a = function (i) {
            var n = (t._data(this, "lastToggle" + e.guid) || 0) % r;
            return (
              t._data(this, "lastToggle" + e.guid, n + 1),
              i.preventDefault(),
              s[n].apply(this, arguments) || !1
            );
          };
        for (a.guid = o; r < s.length; ) s[r++].guid = o;
        return this.click(a);
      }),
      (t.fn.live = function (e, i, s) {
        return (
          n("jQuery.fn.live() is deprecated"),
          S
            ? S.apply(this, arguments)
            : (t(this.context).on(e, this.selector, i, s), this)
        );
      }),
      (t.fn.die = function (e, i) {
        return (
          n("jQuery.fn.die() is deprecated"),
          D
            ? D.apply(this, arguments)
            : (t(this.context).off(e, this.selector || "**", i), this)
        );
      }),
      (t.event.trigger = function (t, e, i, s) {
        return (
          !i & !E.test(t) && n("Global events are undocumented and deprecated"),
          k.call(this, t, e, i || document, s)
        );
      }),
      t.each(I.split("|"), function (e, i) {
        t.event.special[i] = {
          setup: function () {
            var e = this;
            return (
              e !== document &&
                (t.event.add(document, i + "." + t.guid, function () {
                  t.event.trigger(i, null, e, !0);
                }),
                t._data(this, i, t.guid++)),
              !1
            );
          },
          teardown: function () {
            return (
              this !== document &&
                t.event.remove(document, i + "." + t._data(this, i)),
              !1
            );
          },
        };
      });
  })(jQuery, window),
  (function (t) {
    function e(e, n, s) {
      var o = this;
      return this.on("click.pjax", e, function (e) {
        var r = t.extend({}, d(n, s));
        r.container || (r.container = t(this).attr("data-pjax") || o), i(e, r);
      });
    }
    function i(e, i, n) {
      n = d(i, n);
      var o = e.currentTarget;
      if ("A" !== o.tagName.toUpperCase())
        throw "$.fn.pjax or $.pjax.click requires an anchor element";
      if (
        !(
          e.which > 1 ||
          e.metaKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.altKey ||
          location.protocol !== o.protocol ||
          location.host !== o.host ||
          (o.hash &&
            o.href.replace(o.hash, "") ===
              location.href.replace(location.hash, "")) ||
          o.href === location.href + "#"
        )
      ) {
        var r = {
          url: o.href,
          container: t(o).attr("data-pjax"),
          target: o,
          fragment: null,
        };
        s(t.extend({}, r, n)), e.preventDefault();
      }
    }
    function n(e, i, n) {
      n = d(i, n);
      var o = e.currentTarget;
      if ("FORM" !== o.tagName.toUpperCase())
        throw "$.pjax.submit requires a form element";
      var r = {
        type: o.method,
        url: o.action,
        data: t(o).serializeArray(),
        container: t(o).attr("data-pjax"),
        target: o,
        fragment: null,
      };
      s(t.extend({}, r, n)), e.preventDefault();
    }
    function s(e) {
      function i(e, i) {
        var s = t.Event(e, { relatedTarget: n });
        return a.trigger(s, i), !s.isDefaultPrevented();
      }
      (e = t.extend(!0, {}, t.ajaxSettings, s.defaults, e)),
        t.isFunction(e.url) && (e.url = e.url());
      var n = e.target,
        o = h(e.url).hash,
        a = (e.context = p(e.container));
      e.data || (e.data = {}), (e.data._pjax = a.selector);
      var l;
      (e.beforeSend = function (t, n) {
        return (
          "GET" !== n.type && (n.timeout = 0),
          t.setRequestHeader("X-PJAX", "true"),
          t.setRequestHeader("X-PJAX-Container", a.selector),
          i("pjax:beforeSend", [t, n])
            ? (n.timeout > 0 &&
                ((l = setTimeout(function () {
                  i("pjax:timeout", [t, e]) && t.abort("timeout");
                }, n.timeout)),
                (n.timeout = 0)),
              void (e.requestUrl = h(n.url).href))
            : !1
        );
      }),
        (e.complete = function (t, n) {
          l && clearTimeout(l),
            i("pjax:complete", [t, n, e]),
            i("pjax:end", [t, e]);
        }),
        (e.error = function (t, n, s) {
          var o = g("", t, e),
            a = i("pjax:error", [t, n, s, e]);
          "GET" == e.type && "abort" !== n && a && r(o.url);
        }),
        (e.success = function (n, l, u) {
          var d = g(n, u, e);
          if (!d.contents) return void r(d.url);
          if (
            ((s.state = {
              id: e.id || c(),
              url: d.url,
              title: d.title,
              container: a.selector,
              fragment: e.fragment,
              timeout: e.timeout,
            }),
            (e.push || e.replace) &&
              window.history.replaceState(s.state, d.title, d.url),
            d.title && (document.title = d.title),
            a.html(d.contents),
            "number" == typeof e.scrollTo && t(window).scrollTop(e.scrollTo),
            (e.replace || e.push) &&
              window._gaq &&
              _gaq.push(["_trackPageview"]),
            "" !== o)
          ) {
            var p = h(d.url);
            (p.hash = o),
              (s.state.url = p.href),
              window.history.replaceState(s.state, d.title, p.href);
            var f = t(p.hash);
            f.length && t(window).scrollTop(f.offset().top);
          }
          i("pjax:success", [n, l, u, e]);
        }),
        s.state ||
          ((s.state = {
            id: c(),
            url: window.location.href,
            title: document.title,
            container: a.selector,
            fragment: e.fragment,
            timeout: e.timeout,
          }),
          window.history.replaceState(s.state, document.title));
      var d = s.xhr;
      d && d.readyState < 4 && ((d.onreadystatechange = t.noop), d.abort()),
        (s.options = e);
      var d = (s.xhr = t.ajax(e));
      return (
        d.readyState > 0 &&
          (e.push &&
            !e.replace &&
            (v(s.state.id, a.clone().contents()),
            window.history.pushState(null, "", u(e.requestUrl))),
          i("pjax:start", [d, e]),
          i("pjax:send", [d, e])),
        s.xhr
      );
    }
    function o(e, i) {
      var n = {
        url: window.location.href,
        push: !1,
        replace: !0,
        scrollTo: !1,
      };
      return s(t.extend(n, d(e, i)));
    }
    function r(t) {
      window.history.replaceState(null, "", "#"), window.location.replace(t);
    }
    function a(e) {
      var i = e.state;
      if (i && i.container) {
        var n = t(i.container);
        if (n.length) {
          var o = w[i.id];
          if (!s.state) return void (s.state = i);
          var a = s.state.id < i.id ? "forward" : "back";
          b(a, s.state.id, n.clone().contents());
          var l = t.Event("pjax:popstate", { state: i, direction: a });
          n.trigger(l);
          var c = {
            id: i.id,
            url: i.url,
            container: n,
            push: !1,
            fragment: i.fragment,
            timeout: i.timeout,
            scrollTo: !1,
          };
          o
            ? (n.trigger("pjax:start", [null, c]),
              i.title && (document.title = i.title),
              n.html(o),
              (s.state = i),
              n.trigger("pjax:end", [null, c]))
            : s(c),
            n[0].offsetHeight;
        } else r(location.href);
      }
    }
    function l(e) {
      var i = t.isFunction(e.url) ? e.url() : e.url,
        n = e.type ? e.type.toUpperCase() : "GET",
        s = t("<form>", {
          method: "GET" === n ? "GET" : "POST",
          action: i,
          style: "display:none",
        });
      "GET" !== n &&
        "POST" !== n &&
        s.append(
          t("<input>", {
            type: "hidden",
            name: "_method",
            value: n.toLowerCase(),
          })
        );
      var o = e.data;
      if ("string" == typeof o)
        t.each(o.split("&"), function (e, i) {
          var n = i.split("=");
          s.append(t("<input>", { type: "hidden", name: n[0], value: n[1] }));
        });
      else if ("object" == typeof o)
        for (key in o)
          s.append(t("<input>", { type: "hidden", name: key, value: o[key] }));
      t(document.body).append(s), s.submit();
    }
    function c() {
      return new Date().getTime();
    }
    function u(t) {
      return t
        .replace(/\?_pjax=[^&]+&?/, "?")
        .replace(/_pjax=[^&]+&?/, "")
        .replace(/[\?&]$/, "");
    }
    function h(t) {
      var e = document.createElement("a");
      return (e.href = t), e;
    }
    function d(e, i) {
      return (
        e && i
          ? (i.container = e)
          : (i = t.isPlainObject(e) ? e : { container: e }),
        i.container && (i.container = p(i.container)),
        i
      );
    }
    function p(e) {
      if (((e = t(e)), e.length)) {
        if ("" !== e.selector && e.context === document) return e;
        if (e.attr("id")) return t("#" + e.attr("id"));
        throw "cant get selector for pjax container!";
      }
      throw "no pjax container for " + e.selector;
    }
    function f(t, e) {
      return t.filter(e).add(t.find(e));
    }
    function m(e) {
      return t.parseHTML(e, document, !0);
    }
    function g(e, i, n) {
      var s = {};
      if (
        ((s.url = u(i.getResponseHeader("X-PJAX-URL") || n.requestUrl)),
        /<html/i.test(e))
      )
        var o = t(m(e.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0])),
          r = t(m(e.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));
      else var o = (r = t(m(e)));
      if (0 === r.length) return s;
      if (((s.title = f(o, "title").last().text()), n.fragment)) {
        if ("body" === n.fragment) var a = r;
        else var a = f(r, n.fragment).first();
        a.length &&
          ((s.contents = a.contents()),
          s.title || (s.title = a.attr("title") || a.data("title")));
      } else /<html/i.test(e) || (s.contents = r);
      return (
        s.contents &&
          ((s.contents = s.contents.not("title")),
          s.contents.find("title").remove()),
        s.title && (s.title = t.trim(s.title)),
        s
      );
    }
    function v(t, e) {
      for (w[t] = e, C.push(t); x.length; ) delete w[x.shift()];
      for (; C.length > s.defaults.maxCacheLength; ) delete w[C.shift()];
    }
    function b(t, e, i) {
      var n, s;
      (w[e] = i),
        "forward" === t ? ((n = C), (s = x)) : ((n = x), (s = C)),
        n.push(e),
        (e = s.pop()) && delete w[e];
    }
    function y() {
      (t.fn.pjax = e),
        (t.pjax = s),
        (t.pjax.enable = t.noop),
        (t.pjax.disable = _),
        (t.pjax.click = i),
        (t.pjax.submit = n),
        (t.pjax.reload = o),
        (t.pjax.defaults = {
          timeout: 650,
          push: !0,
          replace: !1,
          type: "GET",
          dataType: "html",
          scrollTo: 0,
          maxCacheLength: 20,
        }),
        t(window).bind("popstate.pjax", a);
    }
    function _() {
      (t.fn.pjax = function () {
        return this;
      }),
        (t.pjax = l),
        (t.pjax.enable = y),
        (t.pjax.disable = t.noop),
        (t.pjax.click = t.noop),
        (t.pjax.submit = t.noop),
        (t.pjax.reload = function () {
          window.location.reload();
        }),
        t(window).unbind("popstate.pjax", a);
    }
    var w = {},
      x = [],
      C = [];
    t.inArray("state", t.event.props) < 0 && t.event.props.push("state"),
      (t.support.pjax =
        window.history &&
        window.history.pushState &&
        window.history.replaceState &&
        !navigator.userAgent.match(
          /((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/
        )),
      t.support.pjax ? y() : _();
  })(jQuery),
  function () {
    $(document).ready(function () {
      +window.location.href.indexOf("blog") > -1 &&
        $("#nav_blog").addClass("active");
    });
  }.call(this),
  function () {
    $(function () {
      return ($.submit_form = function (t, e) {
        var i, n;
        return (
          (i = t.serializeArray()),
          i.unshift({ name: "_pjax", value: !0 }),
          (i = $.param(i)),
          (n = t.attr("action") + "?" + i),
          $.support.pjax
            ? $.pjax({
                container: e,
                fragment: e,
                scrollTo: !1,
                url: n,
                timeout: 3e3,
              })
            : (window.location = n),
          !1
        );
      });
    }),
      $(document)
        .on("pjax:start", function () {
          return $(".loading_spinner").show();
        })
        .on("pjax:end", function () {
          return $(".loading_spinner").hide();
        }),
      $(document).pjax(
        ".charities_wrapper .pagination a",
        ".charities_wrapper",
        { fragment: ".charities_wrapper", scrollTo: !1, timeout: 3e3 }
      ),
      $(document).on("click", ".charity_search .submit", function () {
        return $.submit_form($("form.charity_search"), ".charities_wrapper");
      }),
      $(document).on(
        "change",
        ".charity_search #sort, .charity_search #order_by, .charity_search #charity_tag_id",
        function () {
          return $.submit_form($("form.charity_search"), ".charities_wrapper");
        }
      ),
      $(function () {
        return 0 !== $("a.bookmark").length
          ? ($(document).on("click", "a.bookmark", function (t) {
              var e, i, n;
              return (
                t.preventDefault(),
                (n = this.href),
                (i = this.title),
                (e =
                  "Diese Funktionalit\xe4t ist f\xfcr deinen Browser nicht verf\xfcgbar. Bitte f\xfcge das Lesezeichen f\xfcr den boost-Link manuell hinzu."),
                navigator.userAgent.toLowerCase().indexOf("chrome") > -1
                  ? alert(e)
                  : window.sidebar
                  ? window.sidebar.addPanel(i, n, "")
                  : window.external || document.all
                  ? window.external.AddFavorite(n, i)
                  : window.opera
                  ? ($("a.bookmark").attr("href", n),
                    $("a.bookmark").attr("title", i),
                    $("a.bookmark").attr("rel", "sidebar"))
                  : alert(e)
              );
            }),
            $(".bookmark_tooltip").tooltip({
              placement: "left",
              title: "F\xfcge den boost-Link zu deinen Lesezeichen hinzu",
            }))
          : void 0;
      });
  }.call(this),
  $(document).ready(function () {
    if ($("#extension_install_btn").length > 0) {
      var t = function () {
          var t = navigator.userAgent
            .match(
              /chrome|firefox|safari|opera|msie|trident|iPad|iPhone|iPod/i
            )[0]
            .toLowerCase();
          return (
            "trident" == t && (t = "msie"),
            ("iPad" == t || "iPhone" == t || "iPod" == t) && (t = "iOS"),
            t
          );
        },
        e = function () {
          return window.location.href.indexOf("boost") >= 0
            ? "boost"
            : window.location.href.indexOf("bonusspende") >= 0
            ? "dra"
            : "";
        },
        i = function () {
          var i = t(),
            n = $("#extension_install_btn"),
            s = {
              boost: {
                chrome:
                  "https://chrome.google.com/webstore/detail/nbifpjmldocepoilnjgbkaaighinkhpp",
                firefox:
                  "https://addons.mozilla.org/en-US/firefox/addon/boost-project/",
                safari:
                  "https://www.boost-project.com/extension/boost_bar/boost_bar.safariextz",
              },
              dra: {
                chrome:
                  "https://chrome.google.com/webstore/detail/jekojmadmgecodgmbhmpeoafmgepjfga",
                firefox:
                  "https://addons.mozilla.org/de/firefox/addon/bonus-melder/",
                safari:
                  "https://www.bonusspende.de/extension/bonus_melder/bonus_melder.safariextz",
              },
            },
            o = e();
          n.addClass("ua_" + i),
            "chrome" == i || "firefox" == i || "safari" == i
              ? (n.find("a").attr("href", s[o][i]),
                n.find("a").click(function () {
                  _gaq.push(["_trackEvent", "user", "extension", i]),
                    "safari" == i && n.find("a").attr("target", "_self");
                }))
              : (n.addClass("disabled").click(function () {
                  return !1;
                }),
                $(".extension_supported").hide(),
                $(".extension_unsupported").show());
        };
      i();
    }
  }),
  function () {
    $(function () {
      return $("#feedback_client_info").length > 0
        ? $(document).ready(function () {
            var t;
            return (
              (t = $.objToString(window.clientInformation)),
              $("#feedback_client_info").val(t)
            );
          })
        : void 0;
    });
  }.call(this),
  function () {
    var t,
      e,
      i,
      n =
        [].indexOf ||
        function (t) {
          for (var e = 0, i = this.length; i > e; e++)
            if (e in this && this[e] === t) return e;
          return -1;
        };
    (t = jQuery),
      (t.fn.validate = function () {
        return this.filter("form[data-validate]").each(function () {
          var e, i, n, s, o, r, a, l;
          (s = t(this)),
            (r = window.ClientSideValidations.forms[s.attr("id")]),
            (e = function (t, e) {
              return ClientSideValidations.formBuilders[r.type].add(t, r, e);
            }),
            (o = function (t) {
              return ClientSideValidations.formBuilders[r.type].remove(t, r);
            }),
            s.submit(function () {
              return s.isValid(r.validators);
            }),
            (a = {
              "ajax:beforeSend": function (t) {
                return t.target === this ? s.isValid(r.validators) : void 0;
              },
              "form:validate:after": function (t) {
                return ClientSideValidations.callbacks.form.after(s, t);
              },
              "form:validate:before": function (t) {
                return ClientSideValidations.callbacks.form.before(s, t);
              },
              "form:validate:fail": function (t) {
                return ClientSideValidations.callbacks.form.fail(s, t);
              },
              "form:validate:pass": function (t) {
                return ClientSideValidations.callbacks.form.pass(s, t);
              },
            });
          for (n in a) (i = a[n]), s.bind(n, i);
          l = {
            focusout: function () {
              return t(this).isValid(r.validators);
            },
            change: function () {
              return t(this).data("changed", !0);
            },
            "element:validate:after": function (e) {
              return ClientSideValidations.callbacks.element.after(t(this), e);
            },
            "element:validate:before": function (e) {
              return ClientSideValidations.callbacks.element.before(t(this), e);
            },
            "element:validate:fail": function (i, n) {
              var s;
              return (
                (s = t(this)),
                ClientSideValidations.callbacks.element.fail(
                  s,
                  n,
                  function () {
                    return e(s, n);
                  },
                  i
                )
              );
            },
            "element:validate:pass": function (e) {
              var i;
              return (
                (i = t(this)),
                ClientSideValidations.callbacks.element.pass(
                  i,
                  function () {
                    return o(i);
                  },
                  e
                )
              );
            },
          };
          for (n in l)
            (i = l[n]),
              s
                .find('[data-validate="true"]:input:enabled:not(:radio)')
                .live(n, i);
          return (
            s
              .find('[data-validate="true"]:checkbox')
              .live("click", function () {
                return t(this).isValid(r.validators);
              }),
            s.find("[id*=_confirmation]").each(function () {
              var e, o, a, l;
              if (
                ((e = t(this)),
                (o = s.find(
                  "#" +
                    this.id.match(/(.+)_confirmation/)[1] +
                    "[data-validate='true']:input"
                )),
                o[0])
              ) {
                (a = {
                  focusout: function () {
                    return o.data("changed", !0).isValid(r.validators);
                  },
                  keyup: function () {
                    return o.data("changed", !0).isValid(r.validators);
                  },
                }),
                  (l = []);
                for (n in a)
                  (i = a[n]), l.push(t("#" + e.attr("id")).live(n, i));
                return l;
              }
            })
          );
        });
      }),
      (t.fn.isValid = function (n) {
        var s;
        return (s = t(this[0])), s.is("form") ? i(s, n) : e(s, n[this[0].name]);
      }),
      (i = function (e, i) {
        var n;
        return (
          e.trigger("form:validate:before"),
          (n = !0),
          e.find('[data-validate="true"]:input:enabled').each(function () {
            return t(this).isValid(i) ? (n = !1) : void 0;
          }),
          n ? e.trigger("form:validate:pass") : e.trigger("form:validate:fail"),
          e.trigger("form:validate:after"),
          n
        );
      }),
      (e = function (t, e) {
        var i, n, s, o, r, a;
        if ((t.trigger("element:validate:before"), t.data("changed") !== !1)) {
          (r = !0),
            t.data("changed", !1),
            (i = ClientSideValidations.validators.local);
          for (s in i)
            if (((n = i[s]), e[s] && (o = n.call(i, t, e[s])))) {
              t.trigger("element:validate:fail", o).data("valid", !1), (r = !1);
              break;
            }
          if (r) {
            i = ClientSideValidations.validators.remote;
            for (s in i)
              if (((n = i[s]), e[s] && (o = n.call(i, t, e[s])))) {
                t.trigger("element:validate:fail", o).data("valid", !1),
                  (r = !1);
                break;
              }
          }
          r && (t.data("valid", null), t.trigger("element:validate:pass"));
        }
        return (
          t.trigger("element:validate:after"),
          null != (a = t.data("valid") === !1) ? a : { false: !0 }
        );
      }),
      t(function () {
        return t("form[data-validate]").validate();
      }),
      (window.ClientSideValidations = {
        forms: {},
        validators: {
          all: function () {
            return jQuery.extend(
              {},
              ClientSideValidations.validators.local,
              ClientSideValidations.validators.remote
            );
          },
          local: {
            presence: function (t, e) {
              return /^\s*$/.test(t.val() || "") ? e.message : void 0;
            },
            acceptance: function (t, e) {
              var i;
              switch (t.attr("type")) {
                case "checkbox":
                  if (!t.attr("checked")) return e.message;
                  break;
                case "text":
                  if (
                    t.val() !==
                    ((null != (i = e.accept) ? i.toString() : void 0) || "1")
                  )
                    return e.message;
              }
            },
            format: function (t, e) {
              var i;
              if ((i = this.presence(t, e))) {
                if (e.allow_blank === !0) return;
                return i;
              }
              return e["with"] && !e["with"].test(t.val())
                ? e.message
                : e.without && e.without.test(t.val())
                ? e.message
                : void 0;
            },
            numericality: function (t, e) {
              var i, n, s, o;
              if (!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d*)?$/.test(t.val()))
                return e.messages.numericality;
              if (e.only_integer && !/^[+-]?\d+$/.test(t.val()))
                return e.messages.only_integer;
              i = {
                greater_than: ">",
                greater_than_or_equal_to: ">=",
                equal_to: "==",
                less_than: "<",
                less_than_or_equal_to: "<=",
              };
              for (n in i)
                if (
                  ((o = i[n]),
                  null != e[n] &&
                    ((s = new Function(
                      "return " + t.val() + " " + o + " " + e[n]
                    )),
                    !s()))
                )
                  return e.messages[n];
              return !e.odd || parseInt(t.val(), 10) % 2
                ? e.even && parseInt(t.val(), 10) % 2
                  ? e.messages.even
                  : void 0
                : e.messages.odd;
            },
            length: function (t, e) {
              var i, n, s, o, r, a, l, c;
              if (
                ((c = e.js_tokenizer || "split('')"),
                (l = new Function(
                  "element",
                  "return (element.val()." + c + " || '').length"
                )(t)),
                (i = { is: "==", minimum: ">=", maximum: "<=" }),
                (n = {}),
                (n.message = e.is
                  ? e.messages.is
                  : e.minimum
                  ? e.messages.minimum
                  : void 0),
                (r = this.presence(t, n)))
              ) {
                if (e.allow_blank === !0) return;
                return r;
              }
              for (s in i)
                if (
                  ((a = i[s]),
                  e[s] &&
                    ((o = new Function("return " + l + " " + a + " " + e[s])),
                    !o()))
                )
                  return e.messages[s];
            },
            exclusion: function (t, e) {
              var i, s, o, r, a;
              if ((s = this.presence(t, e))) {
                if (e.allow_blank === !0) return;
                return s;
              }
              return e["in"] &&
                ((a = t.val()),
                n.call(
                  (function () {
                    var t, i, n, s;
                    for (n = e["in"], s = [], t = 0, i = n.length; i > t; t++)
                      (o = n[t]), s.push(o.toString());
                    return s;
                  })(),
                  a
                ) >= 0)
                ? e.message
                : e.range &&
                  ((i = e.range[0]),
                  (r = e.range[1]),
                  t.val() >= i && t.val() <= r)
                ? e.message
                : void 0;
            },
            inclusion: function (t, e) {
              var i, s, o, r, a;
              if ((s = this.presence(t, e))) {
                if (e.allow_blank === !0) return;
                return s;
              }
              if (e["in"]) {
                if (
                  ((a = t.val()),
                  n.call(
                    (function () {
                      var t, i, n, s;
                      for (n = e["in"], s = [], t = 0, i = n.length; i > t; t++)
                        (o = n[t]), s.push(o.toString());
                      return s;
                    })(),
                    a
                  ) >= 0)
                )
                  return;
                return e.message;
              }
              if (e.range) {
                if (
                  ((i = e.range[0]),
                  (r = e.range[1]),
                  t.val() >= i && t.val() <= r)
                )
                  return;
                return e.message;
              }
            },
            confirmation: function (t, e) {
              return t.val() !==
                jQuery("#" + t.attr("id") + "_confirmation").val()
                ? e.message
                : void 0;
            },
          },
          remote: {
            uniqueness: function (t, e) {
              var i, n, s, o, r, a, l, c;
              if ((s = ClientSideValidations.validators.local.presence(t, e))) {
                if (e.allow_blank === !0) return;
                return s;
              }
              if (
                ((i = {}),
                (i.case_sensitive = !!e.case_sensitive),
                e.id && (i.id = e.id),
                e.scope)
              ) {
                (i.scope = {}), (c = e.scope);
                for (n in c)
                  (r = c[n]),
                    (l = t.attr("name").replace(/\[\w+\]$/, "[" + n + "]")),
                    (a = jQuery("[name='" + l + "']")),
                    a[0] && a.val() !== r
                      ? ((i.scope[n] = a.val()),
                        a
                          .unbind("change." + t.id)
                          .bind("change." + t.id, function () {
                            return t.trigger("change"), t.trigger("focusout");
                          }))
                      : (i.scope[n] = r);
              }
              return (
                /_attributes\]/.test(t.attr("name"))
                  ? ((o = t
                      .attr("name")
                      .match(/\[\w+_attributes\]/g)
                      .pop()
                      .match(/\[(\w+)_attributes\]/)
                      .pop()),
                    (o += /(\[\w+\])$/.exec(t.attr("name"))[1]))
                  : (o = t.attr("name")),
                e["class"] && (o = e["class"] + "[" + o.split("[")[1]),
                (i[o] = t.val()),
                200 ===
                jQuery.ajax({
                  url: "/validators/uniqueness",
                  data: i,
                  async: !1,
                }).status
                  ? e.message
                  : void 0
              );
            },
          },
        },
        formBuilders: {
          "ActionView::Helpers::FormBuilder": {
            add: function (t, e, i) {
              var n, s, o;
              return (
                t.data("valid") !== !1 &&
                  null ==
                    jQuery("label.message[for='" + t.attr("id") + "']")[0] &&
                  ((n = jQuery(e.input_tag)),
                  (o = jQuery(e.label_tag)),
                  (s = jQuery(
                    "label[for='" + t.attr("id") + "']:not(.message)"
                  )),
                  t.attr("autofocus") && t.attr("autofocus", !1),
                  t.before(n),
                  n.find("span#input_tag").replaceWith(t),
                  n.find("label.message").attr("for", t.attr("id")),
                  o.find("label.message").attr("for", t.attr("id")),
                  s.replaceWith(o),
                  o.find("label#label_tag").replaceWith(s)),
                jQuery("label.message[for='" + t.attr("id") + "']").text(i)
              );
            },
            remove: function (t, e) {
              var i, n, s, o;
              return (
                (i = jQuery(e.input_tag).attr("class")),
                (n = t.closest("." + i)),
                (s = jQuery("label[for='" + t.attr("id") + "']:not(.message)")),
                (o = s.closest("." + i)),
                n[0]
                  ? (n.find("#" + t.attr("id")).detach(),
                    n.replaceWith(t),
                    s.detach(),
                    o.replaceWith(s))
                  : void 0
              );
            },
          },
        },
        callbacks: {
          element: {
            after: function (t, e) {},
            before: function (t, e) {},
            fail: function (t, e, i, n) {
              return i();
            },
            pass: function (t, e, i) {
              return e();
            },
          },
          form: {
            after: function (t, e) {},
            before: function (t, e) {},
            fail: function (t, e) {},
            pass: function (t, e) {},
          },
        },
      });
  }.call(this),
  function () {
    $(function () {
      return $("#redirect_now").length > 0
        ? setTimeout(function () {
            return (window.location = $("#redirect_now").data("href"));
          }, 2e3)
        : void 0;
    });
  }.call(this),
  function () {
    $(document).pjax(".shops_wrapper .pagination a", ".shops_wrapper", {
      fragment: ".shops_wrapper",
      scrollTo: !1,
      timeout: 3e3,
    }),
      $(document).on("click", ".shop_search .submit", function () {
        return $.submit_form($("form.shop_search"), ".shops_wrapper");
      }),
      $(document).on(
        "change",
        ".shop_search #sort, .shop_search #order_by, .shop_search #cid, .shop_search #shop_tag_id",
        function () {
          return $.submit_form($("form.shop_search"), ".shops_wrapper");
        }
      );
  }.call(this),
  function () {
    $(function () {
      var t, e, i, n, s;
      return (
        $("#shops-index").length &&
          $(".modal_container").length &&
          ((s = $(".modal_wrapper")),
          s.addClass("modal_hide"),
          $(".signed_in").length > 0 ||
            ((n = $(".modal_overlay")),
            (e = $(".modal_container")),
            (t = e.find(".close")),
            (i = $(".modal_content")),
            $(document).on("click", ".shop_item", function () {
              var t, e;
              return (
                (t = "/de/users/sign_in"),
                (e = '<center><img src="/assets/icons/loading.gif"></center>'),
                i.html(e).load(t, function (t, e, i) {
                  return s.removeClass("modal_hide");
                })
              );
            }),
            $(".modal_overlay, .modal_container .close").click(function (t) {
              return s.addClass("modal_hide"), !1;
            }))),
        $("#charities-show").length || $("#teams-show").length
          ? ((s = $(".modal_wrapper")),
            s.addClass("modal_hide"),
            (n = $(".modal_overlay")),
            (e = $(".modal_container")),
            (t = e.find(".close")),
            $(".showSharingModal").on("click", function () {
              return s.removeClass("modal_hide"), !1;
            }),
            $("#team_joined").length && $(".showSharingModal").trigger("click"),
            $("#join_team").length && s.removeClass("modal_hide"),
            $(".modal_overlay, .modal_container .close").click(function (t) {
              return s.addClass("modal_hide"), !1;
            }))
          : void 0
      );
    });
  }.call(this),
  function () {
    (window.boost = {
      documentReady: function () {
        return (
          boost.bxSlider.init(), boost.more.init(), boost.placeholder.init()
        );
      },
      bxSlider: {
        init: function () {
          var t;
          return (
            $("#page_slider").length > 0 &&
              ($("#page_slider").children().length > 1 &&
                $("#page_slider").bxSlider({
                  wrapperClass: "page_slider",
                  speed: 1500,
                  controls: !1,
                  autoHover: !0,
                  pager: !0,
                  pagerActiveClass: "active",
                  pause: 1e4,
                  auto: !0,
                }),
              (t = $("#page_slider .slider-pager").length),
              $(".bx-pager").addClass("bx-pager" + t)),
            $(".slideshow").bxSlider({
              mode: "fade",
              auto: !0,
              pause: 5e3,
              speed: 1500,
              autoHover: !0,
              pager: !1,
              controls: !1,
            })
          );
        },
      },
      more: {
        classNameOn: "moreOn",
        classNameOff: "moreOff",
        init: function () {
          var t, e;
          return (
            $("#more nav a, #more .tab").addClass(boost.more.classNameOff),
            (t = $("#more nav a").length - 1),
            (e = Math.floor(Math.round(Math.random() * t))),
            this.addClassOn($("#more li a").eq(e)),
            this.addClassOn($("#more .tab").eq(e)),
            $("#more nav a").click(this.click)
          );
        },
        click: function (t) {
          return (
            t.preventDefault(),
            boost.more.reset(),
            boost.more.addClassOn(this),
            boost.more.addClassOn($(this).attr("href"))
          );
        },
        addClassOn: function (t) {
          return $(t)
            .removeClass(boost.more.classNameOff)
            .addClass(boost.more.classNameOn);
        },
        reset: function () {
          return $("#more ." + boost.more.classNameOn)
            .removeClass(boost.more.classNameOn)
            .addClass(boost.more.classNameOff);
        },
      },
      placeholder: {
        init: function () {
          return $("input, textarea").placeholder();
        },
      },
    }),
      $(document).ready(boost.documentReady);
  }.call(this);
var infoTooltips = function () {
    var t = $(".hasTooltips");
    if (!t.length) return !1;
    t.on("click", ".info_icon", function () {
      $(this).next(".tooltip_content").toggle();
    });
  },
  accordion = {
    init: function () {
      var t = $(".accordion");
      return t.length
        ? ($(".accordion dd").hide(),
          void $(".accordion dt").click(function () {
            $(this)
              .next("dd")
              .slideToggle("slow")
              .siblings("dd:visible")
              .slideUp("slow"),
              $(this).toggleClass("current"),
              $(this).siblings("dt").removeClass("current");
          }))
        : !1;
    },
  },
  makeTextSelectable = function () {
    window.getSelection &&
      $(".selectable").each(function (t, e) {
        $(e).click(function () {
          var t = document.createRange();
          t.selectNode(this), window.getSelection().addRange(t);
        });
      });
  },
  bgRotator = {
    init: function (t) {
      if (!t.length) return !1;
      var e = [
          {
            url: "placekitten.com",
            attribution: "http://placekitten.com/attribution.html",
          },
          { url: "placedog.com", attribution: "http://placedog.com" },
          {
            url: "placeape.com",
            attribution: "http://placeape.com/attribution",
          },
        ],
        i = bgRotator.random(0, e.length - 1);
      $(t).css({ "background-image": "url(http://" + e[i].url + "/400/300)" }),
        $(t)
          .next(".attribution")
          .find("a")
          .text(e[i].url)
          .attr("href", e[i].attribution);
    },
    random: function (t, e) {
      return Math.floor(Math.random() * (e - t + 1) + t);
    },
  },
  closeMessage = function () {
    (msg = $(".alert")),
      msg.length &&
        (1 == localStorage.getItem("aboutmsg_hidden") &&
          $("#about_msg").addClass("hidden"),
        msg.on("click", ".close", function (t) {
          var e = $(this).parent();
          "about_msg" == e.attr("id") &&
            localStorage.setItem("aboutmsg_hidden", 1),
            e.fadeOut(),
            t.preventDefault();
        }));
  },
  preventEmptyFileInputs = function () {
    var t = $("input:file");
    t.each(function () {
      var t = $(this),
        e = t.parents("form"),
        i = e.find("input:submit");
      "" === t.val() && (i.attr("disabled", !0), i.addClass("disabled")),
        t.on("change", function () {
          $(this).val() &&
            (i.removeAttr("disabled"), i.removeClass("disabled"));
        });
    });
  },
  charityCoverCropping = {
    init: function () {
      var t = 940,
        e = 200;
      $("#cropbox").Jcrop({
        onChange: charityCoverCropping.update_crop,
        onSelect: charityCoverCropping.update_crop,
        setSelect: [0, 0, t, e],
        aspectRatio: t / e,
        allowResize: !1,
        allowSelect: !1,
      });
    },
    update_crop: function (t) {
      $("#crop_x").val(t.x),
        $("#crop_y").val(t.y),
        $("#crop_w").val(t.w),
        $("#crop_h").val(t.h);
    },
  },
  smoothScroll = function () {
    $(".smooth_scroll").on("click", function () {
      return (
        $("html, body").animate(
          { scrollTop: $($(this).attr("href")).offset().top + "px" },
          { duration: 500, easing: "swing" }
        ),
        !1
      );
    });
  },
  cssAnimationHelper = function (t, e) {
    var i = $(t);
    return i.length
      ? (i.addClass(e),
        void i[0].addEventListener("webkitAnimationEnd", function () {
          $(this).removeClass(e);
        }))
      : !1;
  };
$(document).ready(function () {
  infoTooltips(),
    accordion.init(),
    makeTextSelectable(),
    bgRotator.init(".errorpage .pic"),
    closeMessage(),
    preventEmptyFileInputs(),
    charityCoverCropping.init(),
    smoothScroll(),
    cssAnimationHelper(".badge", "rotateIn");
});
var selectConvert = {
  init: function (t) {
    if (!$(".search_form").length) return !1;
    var e,
      i = $(t);
    i.each(function (t, i) {
      var n = $(this),
        s = n.find("option"),
        o = s[0].text,
        r = "";
      (r += '<div class="dropdown_convert">'),
        (r += '<h5 class="toggle"><span class="caret"></span>' + o + "</h5>"),
        (r += '<ul class="options">'),
        s.each(function () {
          this.selected && (e = selectConvert.emphasizeStr(this.text)),
            (r += "<li>" + selectConvert.emphasizeStr(this.text) + "</li>");
        }),
        (r += "</ul>"),
        (r += "</div>"),
        n.after(r),
        n.hide(),
        e &&
          location.search &&
          n.next(".dropdown_convert").find(".toggle").html(e),
        selectConvert.select(n);
    });
  },
  select: function (t) {
    var e = t,
      i = e.next(".dropdown_convert"),
      n = i.find(".toggle"),
      s = n.next(".options"),
      o = s.find("li");
    n.click(function (t) {
      s.toggle(), $(".dropdown_convert .options").not(s).hide();
    }),
      o.click(function () {
        n.html(this.innerHTML),
          (t[0].selectedIndex = $(this).index()),
          t.trigger("change"),
          s.hide();
      }),
      $(document).click(function (t) {
        0 === $(t.target).closest(".dropdown_convert").length &&
          $(".dropdown_convert .options").hide();
      });
  },
  emphasizeStr: function (t) {
    return -1 != t.indexOf("boost") && (t = "<em>" + t + "</em>"), t;
  },
};
$(document).ready(function () {
  selectConvert.init(".convertible");
}),
  function () {
    $(function () {
      return $("#new_fb_post").length > 0
        ? $("<input>")
            .attr({ type: "hidden", name: "js_enabled", value: "1" })
            .appendTo("#new_fb_post")
        : void 0;
    });
  }.call(this);
var donationShareBtn = function () {
  $(".shareBtn").click(function () {
    FB.ui(
      {
        method: "feed",
        display: "popup",
        link: "https://www.bonusspende.de",
        picture: "https://www.bonusspende.de/assets/dra/fb/bonus_love.jpg",
        description:
          "Ich habe \xfcber BONUS eingekauft und dadurch eine Spende f\xfcr die Kinder in Deutschland bewirkt.",
        caption: "www.bonusspende.de",
        name: "BONUS - Meine Spende beim Online-Shopping.",
      },
      function (t) {}
    );
  });
};
$(document).ready(function () {
  donationShareBtn();
});
var scriptLoader = function (t, e) {
  var i,
    n = document,
    s = "script",
    o = n.getElementsByTagName(s)[0];
  n.getElementById(t) ||
    ((i = n.createElement(s)),
    (i.id = t),
    (i.async = !0),
    (i.src = e),
    o.parentNode.insertBefore(i, o));
};
$(document).ready(function () {
  scriptLoader("twitter-wjs", "https://platform.twitter.com/widgets.js"),
    (window.___gcfg = { lang: "de" }),
    scriptLoader("g-plusone-js", "https://apis.google.com/js/plusone.js"),
    (window.fbAsyncInit = function () {
      FB.init({
        appId: $("fbappid").data("id"),
        status: !0,
        cookie: !0,
        oauth: !0,
        xfbml: !0,
        version: "v2.3",
      });
    }),
    scriptLoader("facebook-jssdk", "https://connect.facebook.net/de_DE/sdk.js");
}),
  function () {
    $(function () {
      var t;
      return $(".keyvisual_tellafriend").length > 0
        ? ((t = function (t) {
            return (
              (window.optimizely = window.optimizely || []),
              window.optimizely.push(["trackEvent", t])
            );
          }),
          $(document).on("click", ".share_fb", function () {
            return (
              t("competitionFbShare"),
              window.open(
                this.href,
                "facebook-share-dialog",
                "width=626,height=436"
              ),
              !1
            );
          }),
          $(document).on("click", ".share_twitter", function () {
            return t("competitionTwitterShare");
          }),
          $(document).on("click", ".share_gplus", function () {
            return (
              t("competitionGplusShare"),
              window.open(
                this.href,
                "gplus-share-dialog",
                "width=626,height=436"
              ),
              !1
            );
          }),
          $(document).on("click", "#sharing_question_1", function () {
            return t("competitionEmailClick");
          }),
          $(document).on("click", "#sharing_question_2", function () {
            return t("competitionSocialMediaClick");
          }),
          $(document).on("click", "#sharing_question_3", function () {
            return t("competitionInvitationLinkClick");
          }),
          $(document).on("click", "#mailto a", function () {
            return t("competitionMailtoClick");
          }),
          $(document).on("click", ".input_invitation_link", function () {
            return t("competitionLinkInputClick"), this.select();
          }))
        : void 0;
    });
  }.call(this),
  (function (t) {
    (t.Jcrop = function (e, i) {
      function n(t) {
        return Math.round(t) + "px";
      }
      function s(t) {
        return O.baseClass + "-" + t;
      }
      function o() {
        return t.fx.step.hasOwnProperty("backgroundColor");
      }
      function r(e) {
        var i = t(e).offset();
        return [i.left, i.top];
      }
      function a(t) {
        return [t.pageX - j[0], t.pageY - j[1]];
      }
      function l(e) {
        "object" != typeof e && (e = {}),
          (O = t.extend(O, e)),
          t.each(["onChange", "onSelect", "onRelease", "onDblClick"], function (
            t,
            e
          ) {
            "function" != typeof O[e] && (O[e] = function () {});
          });
      }
      function c(t, e, i) {
        if (
          ((j = r(q)),
          ft.setCursor("move" === t ? t : t + "-resize"),
          "move" === t)
        )
          return ft.activateHandlers(h(e), g, i);
        var n = ht.getFixed(),
          s = d(t),
          o = ht.getCorner(d(s));
        ht.setPressed(ht.getCorner(s)),
          ht.setCurrent(o),
          ft.activateHandlers(u(t, n), g, i);
      }
      function u(t, e) {
        return function (i) {
          if (O.aspectRatio)
            switch (t) {
              case "e":
                i[1] = e.y + 1;
                break;
              case "w":
                i[1] = e.y + 1;
                break;
              case "n":
                i[0] = e.x + 1;
                break;
              case "s":
                i[0] = e.x + 1;
            }
          else
            switch (t) {
              case "e":
                i[1] = e.y2;
                break;
              case "w":
                i[1] = e.y2;
                break;
              case "n":
                i[0] = e.x2;
                break;
              case "s":
                i[0] = e.x2;
            }
          ht.setCurrent(i), pt.update();
        };
      }
      function h(t) {
        var e = t;
        return (
          mt.watchKeys(),
          function (t) {
            ht.moveOffset([t[0] - e[0], t[1] - e[1]]), (e = t), pt.update();
          }
        );
      }
      function d(t) {
        switch (t) {
          case "n":
            return "sw";
          case "s":
            return "nw";
          case "e":
            return "nw";
          case "w":
            return "ne";
          case "ne":
            return "sw";
          case "nw":
            return "se";
          case "se":
            return "nw";
          case "sw":
            return "ne";
        }
      }
      function p(t) {
        return function (e) {
          return O.disabled
            ? !1
            : "move" !== t || O.allowMove
            ? ((j = r(q)),
              (nt = !0),
              c(t, a(e)),
              e.stopPropagation(),
              e.preventDefault(),
              !1)
            : !1;
        };
      }
      function f(t, e, i) {
        var n = t.width(),
          s = t.height();
        n > e && e > 0 && ((n = e), (s = (e / t.width()) * t.height())),
          s > i && i > 0 && ((s = i), (n = (i / t.height()) * t.width())),
          (et = t.width() / n),
          (it = t.height() / s),
          t.width(n).height(s);
      }
      function m(t) {
        return {
          x: t.x * et,
          y: t.y * it,
          x2: t.x2 * et,
          y2: t.y2 * it,
          w: t.w * et,
          h: t.h * it,
        };
      }
      function g(t) {
        var e = ht.getFixed();
        e.w > O.minSelect[0] && e.h > O.minSelect[1]
          ? (pt.enableHandles(), pt.done())
          : pt.release(),
          ft.setCursor(O.allowSelect ? "crosshair" : "default");
      }
      function v(t) {
        if (O.disabled) return !1;
        if (!O.allowSelect) return !1;
        (nt = !0), (j = r(q)), pt.disableHandles(), ft.setCursor("crosshair");
        var e = a(t);
        return (
          ht.setPressed(e),
          pt.update(),
          ft.activateHandlers(b, g, "touch" === t.type.substring(0, 5)),
          mt.watchKeys(),
          t.stopPropagation(),
          t.preventDefault(),
          !1
        );
      }
      function b(t) {
        ht.setCurrent(t), pt.update();
      }
      function y() {
        var e = t("<div></div>").addClass(s("tracker"));
        return $ && e.css({ opacity: 0, backgroundColor: "white" }), e;
      }
      function _(t) {
        U.removeClass().addClass(s("holder")).addClass(t);
      }
      function w(t, e) {
        function i() {
          window.setTimeout(b, h);
        }
        var n = t[0] / et,
          s = t[1] / it,
          o = t[2] / et,
          r = t[3] / it;
        if (!st) {
          var a = ht.flipCoords(n, s, o, r),
            l = ht.getFixed(),
            c = [l.x, l.y, l.x2, l.y2],
            u = c,
            h = O.animationDelay,
            d = a[0] - c[0],
            p = a[1] - c[1],
            f = a[2] - c[2],
            m = a[3] - c[3],
            g = 0,
            v = O.swingSpeed;
          (n = u[0]), (s = u[1]), (o = u[2]), (r = u[3]), pt.animMode(!0);
          var b = (function () {
            return function () {
              (g += (100 - g) / v),
                (u[0] = Math.round(n + (g / 100) * d)),
                (u[1] = Math.round(s + (g / 100) * p)),
                (u[2] = Math.round(o + (g / 100) * f)),
                (u[3] = Math.round(r + (g / 100) * m)),
                g >= 99.8 && (g = 100),
                100 > g
                  ? (C(u), i())
                  : (pt.done(),
                    pt.animMode(!1),
                    "function" == typeof e && e.call(gt));
            };
          })();
          i();
        }
      }
      function x(t) {
        C([t[0] / et, t[1] / it, t[2] / et, t[3] / it]),
          O.onSelect.call(gt, m(ht.getFixed())),
          pt.enableHandles();
      }
      function C(t) {
        ht.setPressed([t[0], t[1]]), ht.setCurrent([t[2], t[3]]), pt.update();
      }
      function k() {
        return m(ht.getFixed());
      }
      function T() {
        return ht.getFixed();
      }
      function S(t) {
        l(t), A();
      }
      function D() {
        (O.disabled = !0),
          pt.disableHandles(),
          pt.setCursor("default"),
          ft.setCursor("default");
      }
      function I() {
        (O.disabled = !1), A();
      }
      function E() {
        pt.done(), ft.activateHandlers(null, null);
      }
      function M() {
        U.remove(),
          W.show(),
          W.css("visibility", "visible"),
          t(e).removeData("Jcrop");
      }
      function N(t, e) {
        pt.release(), D();
        var i = new Image();
        (i.onload = function () {
          var n = i.width,
            s = i.height,
            o = O.boxWidth,
            r = O.boxHeight;
          q.width(n).height(s),
            q.attr("src", t),
            Y.attr("src", t),
            f(q, o, r),
            (B = q.width()),
            (Q = q.height()),
            Y.width(B).height(Q),
            at.width(B + 2 * rt).height(Q + 2 * rt),
            U.width(B).height(Q),
            dt.resize(B, Q),
            I(),
            "function" == typeof e && e.call(gt);
        }),
          (i.src = t);
      }
      function P(t, e, i) {
        var n = e || O.bgColor;
        O.bgFade && o() && O.fadeTime && !i
          ? t.animate(
              { backgroundColor: n },
              { queue: !1, duration: O.fadeTime }
            )
          : t.css("backgroundColor", n);
      }
      function A(t) {
        O.allowResize
          ? t
            ? pt.enableOnly()
            : pt.enableHandles()
          : pt.disableHandles(),
          ft.setCursor(O.allowSelect ? "crosshair" : "default"),
          pt.setCursor(O.allowMove ? "move" : "default"),
          O.hasOwnProperty("trueSize") &&
            ((et = O.trueSize[0] / B), (it = O.trueSize[1] / Q)),
          O.hasOwnProperty("setSelect") &&
            (x(O.setSelect), pt.done(), delete O.setSelect),
          dt.refresh(),
          O.bgColor != lt &&
            (P(
              O.shade ? dt.getShades() : U,
              O.shade ? O.shadeColor || O.bgColor : O.bgColor
            ),
            (lt = O.bgColor)),
          ct != O.bgOpacity &&
            ((ct = O.bgOpacity), O.shade ? dt.refresh() : pt.setBgOpacity(ct)),
          (G = O.maxSize[0] || 0),
          (J = O.maxSize[1] || 0),
          (Z = O.minSize[0] || 0),
          (tt = O.minSize[1] || 0),
          O.hasOwnProperty("outerImage") &&
            (q.attr("src", O.outerImage), delete O.outerImage),
          pt.refresh();
      }
      var j,
        O = t.extend({}, t.Jcrop.defaults),
        H = navigator.userAgent.toLowerCase(),
        $ = /msie/.test(H),
        z = /msie [1-6]\./.test(H);
      "object" != typeof e && (e = t(e)[0]),
        "object" != typeof i && (i = {}),
        l(i);
      var F = {
          border: "none",
          visibility: "visible",
          margin: 0,
          padding: 0,
          position: "absolute",
          top: 0,
          left: 0,
        },
        W = t(e),
        L = !0;
      if ("IMG" == e.tagName) {
        if (0 != W[0].width && 0 != W[0].height)
          W.width(W[0].width), W.height(W[0].height);
        else {
          var R = new Image();
          (R.src = W[0].src), W.width(R.width), W.height(R.height);
        }
        var q = W.clone().removeAttr("id").css(F).show();
        q.width(W.width()), q.height(W.height()), W.after(q).hide();
      } else
        (q = W.css(F).show()), (L = !1), null === O.shade && (O.shade = !0);
      f(q, O.boxWidth, O.boxHeight);
      var B = q.width(),
        Q = q.height(),
        U = t("<div />")
          .width(B)
          .height(Q)
          .addClass(s("holder"))
          .css({ position: "relative", backgroundColor: O.bgColor })
          .insertAfter(W)
          .append(q);
      O.addClass && U.addClass(O.addClass);
      var Y = t("<div />"),
        V = t("<div />")
          .width("100%")
          .height("100%")
          .css({ zIndex: 310, position: "absolute", overflow: "hidden" }),
        K = t("<div />").width("100%").height("100%").css("zIndex", 320),
        X = t("<div />")
          .css({ position: "absolute", zIndex: 600 })
          .dblclick(function () {
            var t = ht.getFixed();
            O.onDblClick.call(gt, t);
          })
          .insertBefore(q)
          .append(V, K);
      L &&
        ((Y = t("<img />")
          .attr("src", q.attr("src"))
          .css(F)
          .width(B)
          .height(Q)),
        V.append(Y)),
        z && X.css({ overflowY: "hidden" });
      var G,
        J,
        Z,
        tt,
        et,
        it,
        nt,
        st,
        ot,
        rt = O.boundary,
        at = y()
          .width(B + 2 * rt)
          .height(Q + 2 * rt)
          .css({ position: "absolute", top: n(-rt), left: n(-rt), zIndex: 290 })
          .mousedown(v),
        lt = O.bgColor,
        ct = O.bgOpacity;
      j = r(q);
      var ut = (function () {
          function t() {
            var t,
              e = {},
              i = ["touchstart", "touchmove", "touchend"],
              n = document.createElement("div");
            try {
              for (t = 0; t < i.length; t++) {
                var s = i[t];
                s = "on" + s;
                var o = s in n;
                o ||
                  (n.setAttribute(s, "return;"),
                  (o = "function" == typeof n[s])),
                  (e[i[t]] = o);
              }
              return e.touchstart && e.touchend && e.touchmove;
            } catch (r) {
              return !1;
            }
          }
          function e() {
            return O.touchSupport === !0 || O.touchSupport === !1
              ? O.touchSupport
              : t();
          }
          return {
            createDragger: function (t) {
              return function (e) {
                return O.disabled
                  ? !1
                  : "move" !== t || O.allowMove
                  ? ((j = r(q)),
                    (nt = !0),
                    c(t, a(ut.cfilter(e)), !0),
                    e.stopPropagation(),
                    e.preventDefault(),
                    !1)
                  : !1;
              };
            },
            newSelection: function (t) {
              return v(ut.cfilter(t));
            },
            cfilter: function (t) {
              return (
                (t.pageX = t.originalEvent.changedTouches[0].pageX),
                (t.pageY = t.originalEvent.changedTouches[0].pageY),
                t
              );
            },
            isSupported: t,
            support: e(),
          };
        })(),
        ht = (function () {
          function t(t) {
            (t = r(t)), (f = d = t[0]), (m = p = t[1]);
          }
          function e(t) {
            (t = r(t)), (u = t[0] - f), (h = t[1] - m), (f = t[0]), (m = t[1]);
          }
          function i() {
            return [u, h];
          }
          function n(t) {
            var e = t[0],
              i = t[1];
            0 > d + e && (e -= e + d),
              0 > p + i && (i -= i + p),
              m + i > Q && (i += Q - (m + i)),
              f + e > B && (e += B - (f + e)),
              (d += e),
              (f += e),
              (p += i),
              (m += i);
          }
          function s(t) {
            var e = o();
            switch (t) {
              case "ne":
                return [e.x2, e.y];
              case "nw":
                return [e.x, e.y];
              case "se":
                return [e.x2, e.y2];
              case "sw":
                return [e.x, e.y2];
            }
          }
          function o() {
            if (!O.aspectRatio) return l();
            var t,
              e,
              i,
              n,
              s = O.aspectRatio,
              o = O.minSize[0] / et,
              r = O.maxSize[0] / et,
              u = O.maxSize[1] / it,
              h = f - d,
              g = m - p,
              v = Math.abs(h),
              b = Math.abs(g),
              y = v / b;
            return (
              0 === r && (r = 10 * B),
              0 === u && (u = 10 * Q),
              s > y
                ? ((e = m),
                  (i = b * s),
                  (t = 0 > h ? d - i : i + d),
                  0 > t
                    ? ((t = 0),
                      (n = Math.abs((t - d) / s)),
                      (e = 0 > g ? p - n : n + p))
                    : t > B &&
                      ((t = B),
                      (n = Math.abs((t - d) / s)),
                      (e = 0 > g ? p - n : n + p)))
                : ((t = f),
                  (n = v / s),
                  (e = 0 > g ? p - n : p + n),
                  0 > e
                    ? ((e = 0),
                      (i = Math.abs((e - p) * s)),
                      (t = 0 > h ? d - i : i + d))
                    : e > Q &&
                      ((e = Q),
                      (i = Math.abs(e - p) * s),
                      (t = 0 > h ? d - i : i + d))),
              t > d
                ? (o > t - d ? (t = d + o) : t - d > r && (t = d + r),
                  (e = e > p ? p + (t - d) / s : p - (t - d) / s))
                : d > t &&
                  (o > d - t ? (t = d - o) : d - t > r && (t = d - r),
                  (e = e > p ? p + (d - t) / s : p - (d - t) / s)),
              0 > t ? ((d -= t), (t = 0)) : t > B && ((d -= t - B), (t = B)),
              0 > e ? ((p -= e), (e = 0)) : e > Q && ((p -= e - Q), (e = Q)),
              c(a(d, p, t, e))
            );
          }
          function r(t) {
            return (
              t[0] < 0 && (t[0] = 0),
              t[1] < 0 && (t[1] = 0),
              t[0] > B && (t[0] = B),
              t[1] > Q && (t[1] = Q),
              [Math.round(t[0]), Math.round(t[1])]
            );
          }
          function a(t, e, i, n) {
            var s = t,
              o = i,
              r = e,
              a = n;
            return (
              t > i && ((s = i), (o = t)),
              e > n && ((r = n), (a = e)),
              [s, r, o, a]
            );
          }
          function l() {
            var t,
              e = f - d,
              i = m - p;
            return (
              G && Math.abs(e) > G && (f = e > 0 ? d + G : d - G),
              J && Math.abs(i) > J && (m = i > 0 ? p + J : p - J),
              tt / it &&
                Math.abs(i) < tt / it &&
                (m = i > 0 ? p + tt / it : p - tt / it),
              Z / et &&
                Math.abs(e) < Z / et &&
                (f = e > 0 ? d + Z / et : d - Z / et),
              0 > d && ((f -= d), (d -= d)),
              0 > p && ((m -= p), (p -= p)),
              0 > f && ((d -= f), (f -= f)),
              0 > m && ((p -= m), (m -= m)),
              f > B && ((t = f - B), (d -= t), (f -= t)),
              m > Q && ((t = m - Q), (p -= t), (m -= t)),
              d > B && ((t = d - Q), (m -= t), (p -= t)),
              p > Q && ((t = p - Q), (m -= t), (p -= t)),
              c(a(d, p, f, m))
            );
          }
          function c(t) {
            return {
              x: t[0],
              y: t[1],
              x2: t[2],
              y2: t[3],
              w: t[2] - t[0],
              h: t[3] - t[1],
            };
          }
          var u,
            h,
            d = 0,
            p = 0,
            f = 0,
            m = 0;
          return {
            flipCoords: a,
            setPressed: t,
            setCurrent: e,
            getOffset: i,
            moveOffset: n,
            getCorner: s,
            getFixed: o,
          };
        })(),
        dt = (function () {
          function e(t, e) {
            f.left.css({ height: n(e) }), f.right.css({ height: n(e) });
          }
          function i() {
            return s(ht.getFixed());
          }
          function s(t) {
            f.top.css({ left: n(t.x), width: n(t.w), height: n(t.y) }),
              f.bottom.css({
                top: n(t.y2),
                left: n(t.x),
                width: n(t.w),
                height: n(Q - t.y2),
              }),
              f.right.css({ left: n(t.x2), width: n(B - t.x2) }),
              f.left.css({ width: n(t.x) });
          }
          function o() {
            return t("<div />")
              .css({
                position: "absolute",
                backgroundColor: O.shadeColor || O.bgColor,
              })
              .appendTo(p);
          }
          function r() {
            d ||
              ((d = !0),
              p.insertBefore(q),
              i(),
              pt.setBgOpacity(1, 0, 1),
              Y.hide(),
              a(O.shadeColor || O.bgColor, 1),
              pt.isAwake() ? c(O.bgOpacity, 1) : c(1, 1));
          }
          function a(t, e) {
            P(h(), t, e);
          }
          function l() {
            d &&
              (p.remove(),
              Y.show(),
              (d = !1),
              pt.isAwake()
                ? pt.setBgOpacity(O.bgOpacity, 1, 1)
                : (pt.setBgOpacity(1, 1, 1), pt.disableHandles()),
              P(U, 0, 1));
          }
          function c(t, e) {
            d &&
              (O.bgFade && !e
                ? p.animate(
                    { opacity: 1 - t },
                    { queue: !1, duration: O.fadeTime }
                  )
                : p.css({ opacity: 1 - t }));
          }
          function u() {
            O.shade ? r() : l(), pt.isAwake() && c(O.bgOpacity);
          }
          function h() {
            return p.children();
          }
          var d = !1,
            p = t("<div />").css({
              position: "absolute",
              zIndex: 240,
              opacity: 0,
            }),
            f = {
              top: o(),
              left: o().height(Q),
              right: o().height(Q),
              bottom: o(),
            };
          return {
            update: i,
            updateRaw: s,
            getShades: h,
            setBgColor: a,
            enable: r,
            disable: l,
            resize: e,
            refresh: u,
            opacity: c,
          };
        })(),
        pt = (function () {
          function e(e) {
            var i = t("<div />")
              .css({ position: "absolute", opacity: O.borderOpacity })
              .addClass(s(e));
            return V.append(i), i;
          }
          function i(e, i) {
            var n = t("<div />")
              .mousedown(p(e))
              .css({ cursor: e + "-resize", position: "absolute", zIndex: i })
              .addClass("ord-" + e);
            return (
              ut.support && n.bind("touchstart.jcrop", ut.createDragger(e)),
              K.append(n),
              n
            );
          }
          function o(t) {
            var e = O.handleSize,
              n = i(t, D++)
                .css({ opacity: O.handleOpacity })
                .addClass(s("handle"));
            return e && n.width(e).height(e), n;
          }
          function r(t) {
            return i(t, D++).addClass("jcrop-dragbar");
          }
          function a(t) {
            var e;
            for (e = 0; e < t.length; e++) M[t[e]] = r(t[e]);
          }
          function l(t) {
            var i, n;
            for (n = 0; n < t.length; n++) {
              switch (t[n]) {
                case "n":
                  i = "hline";
                  break;
                case "s":
                  i = "hline bottom";
                  break;
                case "e":
                  i = "vline right";
                  break;
                case "w":
                  i = "vline";
              }
              I[t[n]] = e(i);
            }
          }
          function c(t) {
            var e;
            for (e = 0; e < t.length; e++) E[t[e]] = o(t[e]);
          }
          function u(t, e) {
            O.shade || Y.css({ top: n(-e), left: n(-t) }),
              X.css({ top: n(e), left: n(t) });
          }
          function h(t, e) {
            X.width(Math.round(t)).height(Math.round(e));
          }
          function d() {
            var t = ht.getFixed();
            ht.setPressed([t.x, t.y]), ht.setCurrent([t.x2, t.y2]), f();
          }
          function f(t) {
            return S ? g(t) : void 0;
          }
          function g(t) {
            var e = ht.getFixed();
            h(e.w, e.h),
              u(e.x, e.y),
              O.shade && dt.updateRaw(e),
              S || b(),
              t ? O.onSelect.call(gt, m(e)) : O.onChange.call(gt, m(e));
          }
          function v(t, e, i) {
            (S || e) &&
              (O.bgFade && !i
                ? q.animate({ opacity: t }, { queue: !1, duration: O.fadeTime })
                : q.css("opacity", t));
          }
          function b() {
            X.show(), O.shade ? dt.opacity(ct) : v(ct, !0), (S = !0);
          }
          function _() {
            C(),
              X.hide(),
              O.shade ? dt.opacity(1) : v(1),
              (S = !1),
              O.onRelease.call(gt);
          }
          function w() {
            N && K.show();
          }
          function x() {
            return (N = !0), O.allowResize ? (K.show(), !0) : void 0;
          }
          function C() {
            (N = !1), K.hide();
          }
          function k(t) {
            t ? ((st = !0), C()) : ((st = !1), x());
          }
          function T() {
            k(!1), d();
          }
          var S,
            D = 370,
            I = {},
            E = {},
            M = {},
            N = !1;
          O.dragEdges && t.isArray(O.createDragbars) && a(O.createDragbars),
            t.isArray(O.createHandles) && c(O.createHandles),
            O.drawBorders && t.isArray(O.createBorders) && l(O.createBorders),
            t(document).bind("touchstart.jcrop-ios", function (e) {
              t(e.currentTarget).hasClass("jcrop-tracker") &&
                e.stopPropagation();
            });
          var P = y()
            .mousedown(p("move"))
            .css({ cursor: "move", position: "absolute", zIndex: 360 });
          return (
            ut.support && P.bind("touchstart.jcrop", ut.createDragger("move")),
            V.append(P),
            C(),
            {
              updateVisible: f,
              update: g,
              release: _,
              refresh: d,
              isAwake: function () {
                return S;
              },
              setCursor: function (t) {
                P.css("cursor", t);
              },
              enableHandles: x,
              enableOnly: function () {
                N = !0;
              },
              showHandles: w,
              disableHandles: C,
              animMode: k,
              setBgOpacity: v,
              done: T,
            }
          );
        })(),
        ft = (function () {
          function e(e) {
            at.css({ zIndex: 450 }),
              e
                ? t(document)
                    .bind("touchmove.jcrop", r)
                    .bind("touchend.jcrop", l)
                : d &&
                  t(document)
                    .bind("mousemove.jcrop", n)
                    .bind("mouseup.jcrop", s);
          }
          function i() {
            at.css({ zIndex: 290 }), t(document).unbind(".jcrop");
          }
          function n(t) {
            return u(a(t)), !1;
          }
          function s(t) {
            return (
              t.preventDefault(),
              t.stopPropagation(),
              nt &&
                ((nt = !1),
                h(a(t)),
                pt.isAwake() && O.onSelect.call(gt, m(ht.getFixed())),
                i(),
                (u = function () {}),
                (h = function () {})),
              !1
            );
          }
          function o(t, i, n) {
            return (nt = !0), (u = t), (h = i), e(n), !1;
          }
          function r(t) {
            return u(a(ut.cfilter(t))), !1;
          }
          function l(t) {
            return s(ut.cfilter(t));
          }
          function c(t) {
            at.css("cursor", t);
          }
          var u = function () {},
            h = function () {},
            d = O.trackDocument;
          return (
            d || at.mousemove(n).mouseup(s).mouseout(s),
            q.before(at),
            { activateHandlers: o, setCursor: c }
          );
        })(),
        mt = (function () {
          function e() {
            O.keySupport && (o.show(), o.focus());
          }
          function i(t) {
            o.hide();
          }
          function n(t, e, i) {
            O.allowMove && (ht.moveOffset([e, i]), pt.updateVisible(!0)),
              t.preventDefault(),
              t.stopPropagation();
          }
          function s(t) {
            if (t.ctrlKey || t.metaKey) return !0;
            ot = t.shiftKey ? !0 : !1;
            var e = ot ? 10 : 1;
            switch (t.keyCode) {
              case 37:
                n(t, -e, 0);
                break;
              case 39:
                n(t, e, 0);
                break;
              case 38:
                n(t, 0, -e);
                break;
              case 40:
                n(t, 0, e);
                break;
              case 27:
                O.allowSelect && pt.release();
                break;
              case 9:
                return !0;
            }
            return !1;
          }
          var o = t('<input type="radio" />')
              .css({ position: "fixed", left: "-120px", width: "12px" })
              .addClass("jcrop-keymgr"),
            r = t("<div />")
              .css({ position: "absolute", overflow: "hidden" })
              .append(o);
          return (
            O.keySupport &&
              (o.keydown(s).blur(i),
              z || !O.fixedSupport
                ? (o.css({ position: "absolute", left: "-20px" }),
                  r.append(o).insertBefore(q))
                : o.insertBefore(q)),
            { watchKeys: e }
          );
        })();
      ut.support && at.bind("touchstart.jcrop", ut.newSelection),
        K.hide(),
        A(!0);
      var gt = {
        setImage: N,
        animateTo: w,
        setSelect: x,
        setOptions: S,
        tellSelect: k,
        tellScaled: T,
        setClass: _,
        disable: D,
        enable: I,
        cancel: E,
        release: pt.release,
        destroy: M,
        focus: mt.watchKeys,
        getBounds: function () {
          return [B * et, Q * it];
        },
        getWidgetSize: function () {
          return [B, Q];
        },
        getScaleFactor: function () {
          return [et, it];
        },
        getOptions: function () {
          return O;
        },
        ui: { holder: U, selection: X },
      };
      return (
        $ &&
          U.bind("selectstart", function () {
            return !1;
          }),
        W.data("Jcrop", gt),
        gt
      );
    }),
      (t.fn.Jcrop = function (e, i) {
        var n;
        return (
          this.each(function () {
            if (t(this).data("Jcrop")) {
              if ("api" === e) return t(this).data("Jcrop");
              t(this).data("Jcrop").setOptions(e);
            } else
              "IMG" == this.tagName
                ? t.Jcrop.Loader(this, function () {
                    t(this).css({ display: "block", visibility: "hidden" }),
                      (n = t.Jcrop(this, e)),
                      t.isFunction(i) && i.call(n);
                  })
                : (t(this).css({ display: "block", visibility: "hidden" }),
                  (n = t.Jcrop(this, e)),
                  t.isFunction(i) && i.call(n));
          }),
          this
        );
      }),
      (t.Jcrop.Loader = function (e, i, n) {
        function s() {
          r.complete
            ? (o.unbind(".jcloader"), t.isFunction(i) && i.call(r))
            : window.setTimeout(s, 50);
        }
        var o = t(e),
          r = o[0];
        o.bind("load.jcloader", s).bind("error.jcloader", function (e) {
          o.unbind(".jcloader"), t.isFunction(n) && n.call(r);
        }),
          r.complete && t.isFunction(i) && (o.unbind(".jcloader"), i.call(r));
      }),
      (t.Jcrop.defaults = {
        allowSelect: !0,
        allowMove: !0,
        allowResize: !0,
        trackDocument: !0,
        baseClass: "jcrop",
        addClass: null,
        bgColor: "black",
        bgOpacity: 0.6,
        bgFade: !1,
        borderOpacity: 0.4,
        handleOpacity: 0.5,
        handleSize: null,
        aspectRatio: 0,
        keySupport: !0,
        createHandles: ["n", "s", "e", "w", "nw", "ne", "se", "sw"],
        createDragbars: ["n", "s", "e", "w"],
        createBorders: ["n", "s", "e", "w"],
        drawBorders: !0,
        dragEdges: !0,
        fixedSupport: !0,
        touchSupport: null,
        shade: null,
        boxWidth: 0,
        boxHeight: 0,
        boundary: 2,
        fadeTime: 400,
        animationDelay: 20,
        swingSpeed: 3,
        minSelect: [0, 0],
        maxSize: [0, 0],
        minSize: [0, 0],
        onChange: function () {},
        onSelect: function () {},
        onDblClick: function () {},
        onRelease: function () {},
      });
  })(jQuery),
  (function (t) {
    (t.fn.bxSlider = function (e) {
      function i(e, i, n, s) {
        var o = [],
          r = n,
          a = !1;
        for ("backward" == s && ((e = t.makeArray(e)), e.reverse()); r > 0; )
          t.each(e, function (e, n) {
            return r > 0
              ? void (a
                  ? (o.push(t(this).clone()), r--)
                  : e == i && ((a = !0), o.push(t(this).clone()), r--))
              : !1;
          });
        return o;
      }
      function n() {
        var t = D.outerHeight() * e.displaySlideQty;
        return t;
      }
      function s() {
        var t = D.outerWidth() * e.displaySlideQty;
        return t;
      }
      function o(e, i) {
        if ("left" == i) var n = t(".slider-pager", S).eq(e).position().left;
        else if ("top" == i) var n = t(".slider-pager", S).eq(e).position().top;
        return n;
      }
      function r() {
        !e.infiniteLoop &&
          e.hideControlOnEnd &&
          (R == X ? t(".bx-prev", S).hide() : t(".bx-prev", S).show(),
          R == G ? t(".bx-next", S).hide() : t(".bx-next", S).show());
      }
      function a(i, n, s, o) {
        (j = t('<a href="" class="bx-start"></a>')),
          (H = "text" == i ? n : '<img src="' + n + '" />'),
          ($ = "text" == s ? o : '<img src="' + o + '" />'),
          e.autoControlsSelector
            ? t(e.autoControlsSelector).append(j)
            : (S.append('<div class="bx-auto"></div>'),
              t(".bx-auto", S).html(j)),
          j.click(function () {
            return (
              e.ticker
                ? t(this).hasClass("stop")
                  ? x.stopTicker()
                  : t(this).hasClass("start") && x.startTicker()
                : t(this).hasClass("stop")
                ? x.stopShow(!0)
                : t(this).hasClass("start") && x.startShow(!0),
              !1
            );
          });
      }
      function l() {
        var i = t("img", T.eq(R)).attr("title");
        "" != i
          ? e.captionsSelector
            ? t(e.captionsSelector).html(i)
            : t(".bx-captions", S).html(i)
          : e.captionsSelector
          ? t(e.captionsSelector).html("\xa0")
          : t(".bx-captions", S).html("\xa0");
      }
      function c(i) {
        var n = T.length;
        e.moveSlideQty > 1 &&
          (n =
            T.length % e.moveSlideQty != 0
              ? Math.ceil(T.length / e.moveSlideQty)
              : T.length / e.moveSlideQty);
        var s = "";
        if (e.buildPager)
          for (var o = 0; n > o; o++)
            s += e.buildPager(o, T.eq(o * e.moveSlideQty));
        else if ("full" == i)
          for (var o = 1; n >= o; o++)
            s += '<a href="" class="pager-link pager-' + o + '">' + o + "</a>";
        else
          "short" == i &&
            (s =
              '<span class="bx-pager-current">' +
              (e.startingSlide + 1) +
              "</span> " +
              e.pagerShortSeparator +
              ' <span class="bx-pager-total">' +
              T.length +
              "</span>");
        if (e.pagerSelector)
          t(e.pagerSelector).append(s), (P = t(e.pagerSelector));
        else {
          var r = t('<div class="bx-pager"></div>');
          r.append(s),
            "top" == e.pagerLocation
              ? S.prepend(r)
              : "bottom" == e.pagerLocation && S.append(r),
            (P = t(".bx-pager", S));
        }
        P.children().click(function () {
          if ("full" == e.pagerType) {
            var t = P.children().index(this);
            e.moveSlideQty > 1 && (t *= e.moveSlideQty), x.goToSlide(t);
          }
          return !1;
        });
      }
      function u(i, n, s, o) {
        var r = t('<a href="" class="bx-next"></a>'),
          a = t('<a href="" class="bx-prev"></a>');
        "text" == i ? r.html(n) : r.html('<img src="' + n + '" />'),
          "text" == s ? a.html(o) : a.html('<img src="' + o + '" />'),
          e.prevSelector ? t(e.prevSelector).append(a) : S.append(a),
          e.nextSelector ? t(e.nextSelector).append(r) : S.append(r),
          r.click(function () {
            return x.goToNextSlide(), !1;
          }),
          a.click(function () {
            return x.goToPreviousSlide(), !1;
          });
      }
      function h(i) {
        "full" == e.pagerType && e.pager
          ? (t("a", P).removeClass(e.pagerActiveClass),
            t("a", P).eq(i).addClass(e.pagerActiveClass))
          : "short" == e.pagerType &&
            e.pager &&
            t(".bx-pager-current", P).html(R + 1);
      }
      function d() {
        T.not(":eq(" + R + ")")
          .fadeTo(e.speed, 0)
          .css("zIndex", 98),
          T.eq(R)
            .css("zIndex", 99)
            .fadeTo(e.speed, 1, function () {
              (K = !1),
                jQuery.browser.msie &&
                  T.eq(R).get(0).style.removeAttribute("filter"),
                e.onAfterSlide(R, T.length, T.eq(R));
            });
      }
      function p() {
        C.hover(
          function () {
            z && x.stopTicker(!1);
          },
          function () {
            z && x.startTicker(!1);
          }
        );
      }
      function f() {
        S.find(".bx-window").hover(
          function () {
            z && x.stopShow(!1);
          },
          function () {
            z && x.startShow(!1);
          }
        );
      }
      function m() {
        "" != e.startImage
          ? ((startContent = e.startImage), (startType = "image"))
          : ((startContent = e.startText), (startType = "text")),
          "" != e.stopImage
            ? ((stopContent = e.stopImage), (stopType = "image"))
            : ((stopContent = e.stopText), (stopType = "text")),
          a(startType, startContent, stopType, stopContent);
      }
      function g(t, i, n) {
        "horizontal" == e.mode
          ? "next" == e.tickerDirection
            ? C.animate({ left: "-=" + i + "px" }, n, "linear", function () {
                C.css("left", t), g(t, Q, e.tickerSpeed);
              })
            : "prev" == e.tickerDirection &&
              C.animate({ left: "+=" + i + "px" }, n, "linear", function () {
                C.css("left", t), g(t, Q, e.tickerSpeed);
              })
          : "vertical" == e.mode &&
            ("next" == e.tickerDirection
              ? C.animate({ top: "-=" + i + "px" }, n, "linear", function () {
                  C.css("top", t), g(t, U, e.tickerSpeed);
                })
              : "prev" == e.tickerDirection &&
                C.animate({ top: "+=" + i + "px" }, n, "linear", function () {
                  C.css("top", t), g(t, U, e.tickerSpeed);
                }));
      }
      function v() {
        e.auto
          ? e.infiniteLoop
            ? "next" == e.autoDirection
              ? (A = setInterval(function () {
                  x.goToNextSlide(!1);
                }, e.pause))
              : "prev" == e.autoDirection &&
                (A = setInterval(function () {
                  x.goToPreviousSlide(!1);
                }, e.pause))
            : "next" == e.autoDirection
            ? (A = setInterval(function () {
                (R += e.moveSlideQty),
                  R > G && (R %= T.length),
                  x.goToSlide(R, !1);
              }, e.pause))
            : "prev" == e.autoDirection &&
              (A = setInterval(function () {
                (R -= e.moveSlideQty),
                  0 > R &&
                    ((negativeOffset = R % T.length),
                    (R = 0 == negativeOffset ? 0 : T.length + negativeOffset)),
                  x.goToSlide(R, !1);
              }, e.pause))
          : e.ticker &&
            ((e.tickerSpeed *= 10),
            t(".slider-pager", S).each(function (e) {
              (Q += t(this).width()), (U += t(this).height());
            }),
            "prev" == e.tickerDirection && "horizontal" == e.mode
              ? C.css("left", "-" + (Q + q) + "px")
              : "prev" == e.tickerDirection &&
                "vertical" == e.mode &&
                C.css("top", "-" + (U + B) + "px"),
            "horizontal" == e.mode
              ? ((Y = parseInt(C.css("left"))), g(Y, Q, e.tickerSpeed))
              : "vertical" == e.mode &&
                ((V = parseInt(C.css("top"))), g(V, U, e.tickerSpeed)),
            e.tickerHover && p());
      }
      function b() {
        "" != e.nextImage
          ? ((nextContent = e.nextImage), (nextType = "image"))
          : ((nextContent = e.nextText), (nextType = "text")),
          "" != e.prevImage
            ? ((prevContent = e.prevImage), (prevType = "image"))
            : ((prevContent = e.prevText), (prevType = "text")),
          u(nextType, nextContent, prevType, prevContent);
      }
      function y() {
        if ("horizontal" == e.mode || "vertical" == e.mode) {
          var n = i(T, 0, e.moveSlideQty, "backward");
          t.each(n, function (e) {
            C.prepend(t(this));
          });
          var s = T.length + e.moveSlideQty - 1,
            o = T.length - e.displaySlideQty,
            r = s - o,
            a = i(T, 0, r, "forward");
          e.infiniteLoop &&
            t.each(a, function (e) {
              C.append(t(this));
            });
        }
      }
      function _() {
        y(e.startingSlide),
          "horizontal" == e.mode
            ? (C.wrap(
                '<div class="' +
                  e.wrapperClass +
                  '" style="width:' +
                  M +
                  'px; position:relative;"></div>'
              )
                .wrap(
                  '<div class="bx-window" style="position:relative; overflow:hidden; width:' +
                    M +
                    'px;"></div>'
                )
                .css({
                  width: "999999px",
                  position: "relative",
                  left: "-" + q + "px",
                }),
              C.children().css({ width: I, float: "left", listStyle: "none" }),
              (S = C.parent().parent()),
              T.addClass("slider-pager"))
            : "vertical" == e.mode
            ? (C.wrap(
                '<div class="' +
                  e.wrapperClass +
                  '" style="width:' +
                  W +
                  'px; position:relative;"></div>'
              )
                .wrap(
                  '<div class="bx-window" style="width:' +
                    W +
                    "px; height:" +
                    N +
                    'px; position:relative; overflow:hidden;"></div>'
                )
                .css({
                  height: "999999px",
                  position: "relative",
                  top: "-" + B + "px",
                }),
              C.children().css({ listStyle: "none", height: L }),
              (S = C.parent().parent()),
              T.addClass("slider-pager"))
            : "fade" == e.mode &&
              (C.wrap(
                '<div class="' +
                  e.wrapperClass +
                  '" style="width:' +
                  W +
                  'px; position:relative;"></div>'
              ).wrap(
                '<div class="bx-window" style="height:' +
                  L +
                  "px; width:" +
                  W +
                  'px; position:relative; overflow:hidden;"></div>'
              ),
              C.children().css({
                listStyle: "none",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 98,
              }),
              (S = C.parent().parent()),
              T.not(":eq(" + R + ")").fadeTo(0, 0),
              T.eq(R).css("zIndex", 99)),
          e.captions &&
            null == e.captionsSelector &&
            S.append('<div class="bx-captions"></div>');
      }
      var w = {
          mode: "horizontal",
          infiniteLoop: !0,
          hideControlOnEnd: !1,
          controls: !0,
          speed: 500,
          easing: "swing",
          pager: !1,
          pagerSelector: null,
          pagerType: "full",
          pagerLocation: "bottom",
          pagerShortSeparator: "/",
          pagerActiveClass: "pager-active",
          nextText: "next",
          nextImage: "",
          nextSelector: null,
          prevText: "prev",
          prevImage: "",
          prevSelector: null,
          captions: !1,
          captionsSelector: null,
          auto: !1,
          autoDirection: "next",
          autoControls: !1,
          autoControlsSelector: null,
          autoStart: !0,
          autoHover: !1,
          autoDelay: 0,
          pause: 3e3,
          startText: "start",
          startImage: "",
          stopText: "stop",
          stopImage: "",
          ticker: !1,
          tickerSpeed: 5e3,
          tickerDirection: "next",
          tickerHover: !1,
          wrapperClass: "bx-wrapper",
          startingSlide: 0,
          displaySlideQty: 1,
          moveSlideQty: 1,
          randomStart: !1,
          onBeforeSlide: function () {},
          onAfterSlide: function () {},
          onLastSlide: function () {},
          onFirstSlide: function () {},
          onNextSlide: function () {},
          onPrevSlide: function () {},
          buildPager: null,
        },
        e = t.extend(w, e),
        x = this,
        C = "",
        k = "",
        T = "",
        S = "",
        D = "",
        I = "",
        E = "",
        M = "",
        N = "",
        P = "",
        A = "",
        j = "",
        O = "",
        H = "",
        $ = "",
        z = !0,
        F = !1,
        W = 0,
        L = 0,
        R = 0,
        q = 0,
        B = 0,
        Q = 0,
        U = 0,
        Y = 0,
        V = 0,
        K = !1,
        X = 0,
        G = T.length - 1;
      return (
        (this.goToSlide = function (t, i) {
          if (!K) {
            if (
              ((K = !0),
              (R = t),
              e.onBeforeSlide(R, T.length, T.eq(R)),
              "undefined" == typeof i)
            )
              var i = !0;
            i && e.auto && x.stopShow(!0),
              (slide = t),
              slide == X && e.onFirstSlide(R, T.length, T.eq(R)),
              slide == G && e.onLastSlide(R, T.length, T.eq(R)),
              "horizontal" == e.mode
                ? C.animate(
                    { left: "-" + o(slide, "left") + "px" },
                    e.speed,
                    e.easing,
                    function () {
                      (K = !1), e.onAfterSlide(R, T.length, T.eq(R));
                    }
                  )
                : "vertical" == e.mode
                ? C.animate(
                    { top: "-" + o(slide, "top") + "px" },
                    e.speed,
                    e.easing,
                    function () {
                      (K = !1), e.onAfterSlide(R, T.length, T.eq(R));
                    }
                  )
                : "fade" == e.mode && d(),
              r(),
              e.moveSlideQty > 1 && (t = Math.floor(t / e.moveSlideQty)),
              h(t),
              l();
          }
        }),
        (this.goToNextSlide = function (t) {
          if ("undefined" == typeof t) var t = !0;
          if ((t && e.auto && x.stopShow(!0), e.infiniteLoop)) {
            if (!K) {
              K = !0;
              var i = !1;
              if (
                ((R += e.moveSlideQty),
                R > G && ((R %= T.length), (i = !0)),
                e.onNextSlide(R, T.length, T.eq(R)),
                e.onBeforeSlide(R, T.length, T.eq(R)),
                "horizontal" == e.mode)
              ) {
                var n = e.moveSlideQty * E;
                C.animate(
                  { left: "-=" + n + "px" },
                  e.speed,
                  e.easing,
                  function () {
                    (K = !1),
                      i && C.css("left", "-" + o(R, "left") + "px"),
                      e.onAfterSlide(R, T.length, T.eq(R));
                  }
                );
              } else if ("vertical" == e.mode) {
                var s = e.moveSlideQty * L;
                C.animate(
                  { top: "-=" + s + "px" },
                  e.speed,
                  e.easing,
                  function () {
                    (K = !1),
                      i && C.css("top", "-" + o(R, "top") + "px"),
                      e.onAfterSlide(R, T.length, T.eq(R));
                  }
                );
              } else "fade" == e.mode && d();
              h(e.moveSlideQty > 1 ? Math.ceil(R / e.moveSlideQty) : R), l();
            }
          } else if (!K) {
            var i = !1;
            (R += e.moveSlideQty),
              G >= R
                ? (r(), e.onNextSlide(R, T.length, T.eq(R)), x.goToSlide(R))
                : (R -= e.moveSlideQty);
          }
        }),
        (this.goToPreviousSlide = function (i) {
          if ("undefined" == typeof i) var i = !0;
          if ((i && e.auto && x.stopShow(!0), e.infiniteLoop)) {
            if (!K) {
              K = !0;
              var n = !1;
              if (
                ((R -= e.moveSlideQty),
                0 > R &&
                  ((negativeOffset = R % T.length),
                  (R = 0 == negativeOffset ? 0 : T.length + negativeOffset),
                  (n = !0)),
                e.onPrevSlide(R, T.length, T.eq(R)),
                e.onBeforeSlide(R, T.length, T.eq(R)),
                "horizontal" == e.mode)
              ) {
                var s = e.moveSlideQty * E;
                C.animate(
                  { left: "+=" + s + "px" },
                  e.speed,
                  e.easing,
                  function () {
                    (K = !1),
                      n && C.css("left", "-" + o(R, "left") + "px"),
                      e.onAfterSlide(R, T.length, T.eq(R));
                  }
                );
              } else if ("vertical" == e.mode) {
                var a = e.moveSlideQty * L;
                C.animate(
                  { top: "+=" + a + "px" },
                  e.speed,
                  e.easing,
                  function () {
                    (K = !1),
                      n && C.css("top", "-" + o(R, "top") + "px"),
                      e.onAfterSlide(R, T.length, T.eq(R));
                  }
                );
              } else "fade" == e.mode && d();
              h(e.moveSlideQty > 1 ? Math.ceil(R / e.moveSlideQty) : R), l();
            }
          } else if (!K) {
            var n = !1;
            (R -= e.moveSlideQty),
              0 > R && ((R = 0), e.hideControlOnEnd && t(".bx-prev", S).hide()),
              r(),
              e.onPrevSlide(R, T.length, T.eq(R)),
              x.goToSlide(R);
          }
        }),
        (this.goToFirstSlide = function (t) {
          if ("undefined" == typeof t) var t = !0;
          x.goToSlide(X, t);
        }),
        (this.goToLastSlide = function () {
          if ("undefined" == typeof t) var t = !0;
          x.goToSlide(G, t);
        }),
        (this.getCurrentSlide = function () {
          return R;
        }),
        (this.getSlideCount = function () {
          return T.length;
        }),
        (this.stopShow = function (t) {
          if ((clearInterval(A), "undefined" == typeof t)) var t = !0;
          t &&
            e.autoControls &&
            (j.html(H).removeClass("stop").addClass("start"), (z = !1));
        }),
        (this.startShow = function (t) {
          if ("undefined" == typeof t) var t = !0;
          v(),
            t &&
              e.autoControls &&
              (j.html($).removeClass("start").addClass("stop"), (z = !0));
        }),
        (this.stopTicker = function (t) {
          if ((C.stop(), "undefined" == typeof t)) var t = !0;
          t &&
            e.ticker &&
            (j.html(H).removeClass("stop").addClass("start"), (z = !1));
        }),
        (this.startTicker = function (t) {
          if ("horizontal" == e.mode) {
            if ("next" == e.tickerDirection)
              var i = parseInt(C.css("left")),
                n = Q + i + T.eq(0).width();
            else if ("prev" == e.tickerDirection)
              var i = -parseInt(C.css("left")),
                n = i - T.eq(0).width();
            var s = (n * e.tickerSpeed) / Q;
            g(Y, n, s);
          } else if ("vertical" == e.mode) {
            if ("next" == e.tickerDirection)
              var o = parseInt(C.css("top")),
                n = U + o + T.eq(0).height();
            else if ("prev" == e.tickerDirection)
              var o = -parseInt(C.css("top")),
                n = o - T.eq(0).height();
            var s = (n * e.tickerSpeed) / U;
            if ((g(V, n, s), "undefined" == typeof t)) var t = !0;
            t &&
              e.ticker &&
              (j.html($).removeClass("start").addClass("stop"), (z = !0));
          }
        }),
        (this.initShow = function () {
          if (
            ((C = t(this)),
            (k = C.clone()),
            (T = C.children()),
            (S = ""),
            (D = C.children(":first")),
            (I = D.width()),
            (W = 0),
            (E = D.outerWidth()),
            (L = 0),
            (M = s()),
            (N = n()),
            (K = !1),
            (P = ""),
            (R = 0),
            (q = 0),
            (B = 0),
            (A = ""),
            (j = ""),
            (O = ""),
            (H = ""),
            ($ = ""),
            (z = !0),
            (F = !1),
            (Q = 0),
            (U = 0),
            (Y = 0),
            (V = 0),
            (X = 0),
            (G = T.length - 1),
            T.each(function (e) {
              t(this).outerHeight() > L && (L = t(this).outerHeight()),
                t(this).outerWidth() > W && (W = t(this).outerWidth());
            }),
            e.randomStart)
          ) {
            var i = Math.floor(Math.random() * T.length);
            (R = i),
              (q = E * (e.moveSlideQty + i)),
              (B = L * (e.moveSlideQty + i));
          } else
            (R = e.startingSlide),
              (q = E * (e.moveSlideQty + e.startingSlide)),
              (B = L * (e.moveSlideQty + e.startingSlide));
          _(),
            e.pager &&
              !e.ticker &&
              ("full" == e.pagerType
                ? c("full")
                : "short" == e.pagerType && c("short")),
            e.controls && !e.ticker && b(),
            (e.auto || e.ticker) &&
              (e.autoControls && m(),
              e.autoStart
                ? setTimeout(function () {
                    x.startShow(!0);
                  }, e.autoDelay)
                : x.stopShow(!0),
              e.autoHover && !e.ticker && f()),
            h(e.moveSlideQty > 1 ? Math.ceil(R / e.moveSlideQty) : R),
            r(),
            e.captions && l(),
            e.onAfterSlide(R, T.length, T.eq(R));
        }),
        (this.destroyShow = function () {
          clearInterval(A),
            t(".bx-next, .bx-prev, .bx-pager, .bx-auto", S).remove(),
            C.unwrap().unwrap().removeAttr("style"),
            C.children().removeAttr("style").not(".slider-pager").remove(),
            T.removeClass("slider-pager");
        }),
        (this.reloadShow = function () {
          x.destroyShow(), x.initShow();
        }),
        this.each(function () {
          t(this).children().length > 0 && x.initShow();
        }),
        this
      );
    }),
      (jQuery.fx.prototype.cur = function () {
        if (
          null != this.elem[this.prop] &&
          (!this.elem.style || null == this.elem.style[this.prop])
        )
          return this.elem[this.prop];
        var t = parseFloat(jQuery.css(this.elem, this.prop));
        return t;
      });
  })(jQuery),
  (jQuery.easing.jswing = jQuery.easing.swing),
  jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (t, e, i, n, s) {
      return jQuery.easing[jQuery.easing.def](t, e, i, n, s);
    },
    easeInQuad: function (t, e, i, n, s) {
      return n * (e /= s) * e + i;
    },
    easeOutQuad: function (t, e, i, n, s) {
      return -n * (e /= s) * (e - 2) + i;
    },
    easeInOutQuad: function (t, e, i, n, s) {
      return (e /= s / 2) < 1
        ? (n / 2) * e * e + i
        : (-n / 2) * (--e * (e - 2) - 1) + i;
    },
    easeInCubic: function (t, e, i, n, s) {
      return n * (e /= s) * e * e + i;
    },
    easeOutCubic: function (t, e, i, n, s) {
      return n * ((e = e / s - 1) * e * e + 1) + i;
    },
    easeInOutCubic: function (t, e, i, n, s) {
      return (e /= s / 2) < 1
        ? (n / 2) * e * e * e + i
        : (n / 2) * ((e -= 2) * e * e + 2) + i;
    },
    easeInQuart: function (t, e, i, n, s) {
      return n * (e /= s) * e * e * e + i;
    },
    easeOutQuart: function (t, e, i, n, s) {
      return -n * ((e = e / s - 1) * e * e * e - 1) + i;
    },
    easeInOutQuart: function (t, e, i, n, s) {
      return (e /= s / 2) < 1
        ? (n / 2) * e * e * e * e + i
        : (-n / 2) * ((e -= 2) * e * e * e - 2) + i;
    },
    easeInQuint: function (t, e, i, n, s) {
      return n * (e /= s) * e * e * e * e + i;
    },
    easeOutQuint: function (t, e, i, n, s) {
      return n * ((e = e / s - 1) * e * e * e * e + 1) + i;
    },
    easeInOutQuint: function (t, e, i, n, s) {
      return (e /= s / 2) < 1
        ? (n / 2) * e * e * e * e * e + i
        : (n / 2) * ((e -= 2) * e * e * e * e + 2) + i;
    },
    easeInSine: function (t, e, i, n, s) {
      return -n * Math.cos((e / s) * (Math.PI / 2)) + n + i;
    },
    easeOutSine: function (t, e, i, n, s) {
      return n * Math.sin((e / s) * (Math.PI / 2)) + i;
    },
    easeInOutSine: function (t, e, i, n, s) {
      return (-n / 2) * (Math.cos((Math.PI * e) / s) - 1) + i;
    },
    easeInExpo: function (t, e, i, n, s) {
      return 0 == e ? i : n * Math.pow(2, 10 * (e / s - 1)) + i;
    },
    easeOutExpo: function (t, e, i, n, s) {
      return e == s ? i + n : n * (-Math.pow(2, (-10 * e) / s) + 1) + i;
    },
    easeInOutExpo: function (t, e, i, n, s) {
      return 0 == e
        ? i
        : e == s
        ? i + n
        : (e /= s / 2) < 1
        ? (n / 2) * Math.pow(2, 10 * (e - 1)) + i
        : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + i;
    },
    easeInCirc: function (t, e, i, n, s) {
      return -n * (Math.sqrt(1 - (e /= s) * e) - 1) + i;
    },
    easeOutCirc: function (t, e, i, n, s) {
      return n * Math.sqrt(1 - (e = e / s - 1) * e) + i;
    },
    easeInOutCirc: function (t, e, i, n, s) {
      return (e /= s / 2) < 1
        ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + i
        : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + i;
    },
    easeInElastic: function (t, e, i, n, s) {
      var o = 1.70158,
        r = 0,
        a = n;
      if (0 == e) return i;
      if (1 == (e /= s)) return i + n;
      if ((r || (r = 0.3 * s), a < Math.abs(n))) {
        a = n;
        var o = r / 4;
      } else var o = (r / (2 * Math.PI)) * Math.asin(n / a);
      return (
        -(
          a *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e * s - o) * (2 * Math.PI)) / r)
        ) + i
      );
    },
    easeOutElastic: function (t, e, i, n, s) {
      var o = 1.70158,
        r = 0,
        a = n;
      if (0 == e) return i;
      if (1 == (e /= s)) return i + n;
      if ((r || (r = 0.3 * s), a < Math.abs(n))) {
        a = n;
        var o = r / 4;
      } else var o = (r / (2 * Math.PI)) * Math.asin(n / a);
      return (
        a * Math.pow(2, -10 * e) * Math.sin(((e * s - o) * (2 * Math.PI)) / r) +
        n +
        i
      );
    },
    easeInOutElastic: function (t, e, i, n, s) {
      var o = 1.70158,
        r = 0,
        a = n;
      if (0 == e) return i;
      if (2 == (e /= s / 2)) return i + n;
      if ((r || (r = s * (0.3 * 1.5)), a < Math.abs(n))) {
        a = n;
        var o = r / 4;
      } else var o = (r / (2 * Math.PI)) * Math.asin(n / a);
      return 1 > e
        ? -0.5 *
            (a *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e * s - o) * (2 * Math.PI)) / r)) +
            i
        : a *
            Math.pow(2, -10 * (e -= 1)) *
            Math.sin(((e * s - o) * (2 * Math.PI)) / r) *
            0.5 +
            n +
            i;
    },
    easeInBack: function (t, e, i, n, s, o) {
      return (
        void 0 == o && (o = 1.70158), n * (e /= s) * e * ((o + 1) * e - o) + i
      );
    },
    easeOutBack: function (t, e, i, n, s, o) {
      return (
        void 0 == o && (o = 1.70158),
        n * ((e = e / s - 1) * e * ((o + 1) * e + o) + 1) + i
      );
    },
    easeInOutBack: function (t, e, i, n, s, o) {
      return (
        void 0 == o && (o = 1.70158),
        (e /= s / 2) < 1
          ? (n / 2) * (e * e * (((o *= 1.525) + 1) * e - o)) + i
          : (n / 2) * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + i
      );
    },
    easeInBounce: function (t, e, i, n, s) {
      return n - jQuery.easing.easeOutBounce(t, s - e, 0, n, s) + i;
    },
    easeOutBounce: function (t, e, i, n, s) {
      return (e /= s) < 1 / 2.75
        ? n * (7.5625 * e * e) + i
        : 2 / 2.75 > e
        ? n * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + i
        : 2.5 / 2.75 > e
        ? n * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + i
        : n * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + i;
    },
    easeInOutBounce: function (t, e, i, n, s) {
      return s / 2 > e
        ? 0.5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, s) + i
        : 0.5 * jQuery.easing.easeOutBounce(t, 2 * e - s, 0, n, s) +
            0.5 * n +
            i;
    },
  }),
  function () {
    (jQuery.hasPlaceholderSupport = function () {
      var t;
      return (t = document.createElement("input")), "placeholder" in t;
    }),
      (jQuery.fn.setText = function () {
        return this.each(function () {
          var t, e;
          return (
            (t = $(this)),
            (e = t.attr("placeholder")),
            "" === t.val() && t.val(e),
            t
              .focus(function () {
                return t.val() === e ? t.val("") : void 0;
              })
              .blur(function () {
                return "" === t.val() ? t.val(e) : void 0;
              })
          );
        });
      }),
      (jQuery.fn.placeholder = function (t) {
        return $.hasPlaceholderSupport
          ? void 0
          : this.each(function () {
              var e, i, n;
              for (
                null == t && (t = $("input,textarea", this)),
                  n = t.length,
                  e = 0;
                n >= e;

              )
                (i = t[e]), $(i).setText(), e++;
              return $(this).submit(function () {
                var s, o;
                for (e = 0, o = []; n >= e; )
                  (i = t[e]),
                    (s = $(i).attr("placeholder")),
                    $(i).val() === s && $(i).val(""),
                    o.push(e++);
                return o;
              });
            });
      });
  }.call(this),
  (function (t, e, i) {
    function n(t) {
      var e = {},
        n = /^jQuery\d+$/;
      return (
        i.each(t.attributes, function (t, i) {
          i.specified && !n.test(i.name) && (e[i.name] = i.value);
        }),
        e
      );
    }
    function s(t, n) {
      var s = this,
        o = i(s);
      if (s.value == o.attr("placeholder") && o.hasClass("placeholder"))
        if (o.data("placeholder-password")) {
          if (
            ((o = o
              .hide()
              .next()
              .show()
              .attr("id", o.removeAttr("id").data("placeholder-id"))),
            t === !0)
          )
            return (o[0].value = n);
          o.focus();
        } else
          (s.value = ""),
            o.removeClass("placeholder"),
            s == e.activeElement && s.select();
    }
    function o() {
      var t,
        e = this,
        o = i(e),
        r = this.id;
      if ("" == e.value) {
        if ("password" == e.type) {
          if (!o.data("placeholder-textinput")) {
            try {
              t = o.clone().attr({ type: "text" });
            } catch (a) {
              t = i("<input>").attr(i.extend(n(this), { type: "text" }));
            }
            t
              .removeAttr("name")
              .data({ "placeholder-password": !0, "placeholder-id": r })
              .bind("focus.placeholder", s),
              o
                .data({ "placeholder-textinput": t, "placeholder-id": r })
                .before(t);
          }
          o = o.removeAttr("id").hide().prev().attr("id", r).show();
        }
        o.addClass("placeholder"), (o[0].value = o.attr("placeholder"));
      } else o.removeClass("placeholder");
    }
    var r,
      a,
      l = "placeholder" in e.createElement("input"),
      c = "placeholder" in e.createElement("textarea"),
      u = i.fn,
      h = i.valHooks;
    l && c
      ? ((a = u.placeholder = function () {
          return this;
        }),
        (a.input = a.textarea = !0))
      : ((a = u.placeholder = function () {
          var t = this;
          return (
            t
              .filter((l ? "textarea" : ":input") + "[placeholder]")
              .not(".placeholder")
              .bind({ "focus.placeholder": s, "blur.placeholder": o })
              .data("placeholder-enabled", !0)
              .trigger("blur.placeholder"),
            t
          );
        }),
        (a.input = l),
        (a.textarea = c),
        (r = {
          get: function (t) {
            var e = i(t);
            return e.data("placeholder-enabled") && e.hasClass("placeholder")
              ? ""
              : t.value;
          },
          set: function (t, n) {
            var r = i(t);
            return r.data("placeholder-enabled")
              ? ("" == n
                  ? ((t.value = n), t != e.activeElement && o.call(t))
                  : r.hasClass("placeholder")
                  ? s.call(t, !0, n) || (t.value = n)
                  : (t.value = n),
                r)
              : (t.value = n);
          },
        }),
        l || (h.input = r),
        c || (h.textarea = r),
        i(function () {
          i(e).delegate("form", "submit.placeholder", function () {
            var t = i(".placeholder", this).each(s);
            setTimeout(function () {
              t.each(o);
            }, 10);
          });
        }),
        i(t).bind("beforeunload.placeholder", function () {
          i(".placeholder").each(function () {
            this.value = "";
          });
        }));
  })(this, document, jQuery);
/*
page: http://www.boost-project.com/
url: https://www.boost-project.com/assets/application-4e248701521a905ee6e75ac6f4e3c804.js
*/
