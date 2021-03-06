/* Version 0.96 */
/*
    Copyright 2008-2012
        Matthias Ehmann,
        Michael Gerhaeuser,
        Carsten Miller,
        Bianca Valentin,
        Alfred Wassermann,
        Peter Wilfahrt

    This file is part of JSXGraph.

    JSXGraph is free software dual licensed under the GNU LGPL or MIT License.
    
    You can redistribute it and/or modify it under the terms of the
    
      * GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version
      OR
      * MIT License: https://github.com/jsxgraph/jsxgraph/blob/master/LICENSE.MIT

    JSXGraph is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License and
    the MIT License along with JSXGraph. If not, see <http://www.gnu.org/licenses/>
    and <http://opensource.org/licenses/MIT/>.
*/
var JXG = {};
(function () {
  var e, t;
  (JXG.countDrawings = 0),
    (JXG.countTime = 0),
    (JXG.require = function (e) {}),
    (JXG.rendererFiles = {}),
    (JXG.rendererFiles.svg = "SVGRenderer"),
    (JXG.rendererFiles.vml = "VMLRenderer"),
    (JXG.rendererFiles.canvas = "CanvasRenderer"),
    (JXG.baseFiles = null),
    (JXG.requirePath = "");
  if (typeof document != "undefined")
    for (e = 0; e < document.getElementsByTagName("script").length; e++)
      (t = document.getElementsByTagName("script")[e]),
        t.src &&
          t.src.match(/loadjsxgraphInOneFile\.js(\?.*)?$/) &&
          (JXG.requirePath = t.src.replace(
            /loadjsxgraphInOneFile\.js(\?.*)?$/,
            ""
          ));
  (JXG.serverBase = JXG.requirePath + "server/"),
    typeof module != "undefined" && (module.exports = JXG);
})(),
  (JXG.extend = function (e, t, n, r) {
    var i, s;
    (n = n || !1), (r = r || !1);
    for (i in t)
      if (!n || (n && t.hasOwnProperty(i)))
        r ? (s = i.toLowerCase()) : (s = i), (e[s] = t[i]);
  }),
  (JXG.shortcut = function (e, t) {
    return function () {
      return e[t].apply(this, arguments);
    };
  }),
  JXG.extend(JXG, {
    touchProperty: "touches",
    version: "0.96.01",
    supportsVML: function () {
      return typeof document != "undefined" && !!document.namespaces;
    },
    supportsSVG: function () {
      return (
        typeof document != "undefined" &&
        document.implementation.hasFeature(
          "http://www.w3.org/TR/SVG11/feature#BasicStructure",
          "1.1"
        )
      );
    },
    supportsCanvas: function () {
      return (
        typeof document != "undefined" &&
        !!document.createElement("canvas").getContext
      );
    },
    isNode: function () {
      return (
        typeof document == "undefined" &&
        typeof window == "undefined" &&
        typeof module != "undefined" &&
        module.exports
      );
    },
    isTouchDevice: function () {
      return "ontouchstart" in document.documentElement;
    },
    isAndroid: function () {
      return (
        JXG.exists(navigator) &&
        navigator.userAgent.toLowerCase().search("android") > -1
      );
    },
    isWebkitAndroid: function () {
      return (
        this.isAndroid() && navigator.userAgent.search(" AppleWebKit/") > -1
      );
    },
    isApple: function () {
      return (
        JXG.exists(navigator) &&
        (navigator.userAgent.search(/iPad/) != -1 ||
          navigator.userAgent.search(/iPhone/) != -1)
      );
    },
    isWebkitApple: function () {
      return (
        this.isApple() && navigator.userAgent.search(/Mobile *.*Safari/) > -1
      );
    },
    isMetroApp: function () {
      return (
        typeof window != "undefined" &&
        window.clientInformation &&
        window.clientInformation.appName &&
        window.clientInformation.appName.indexOf("MSAppHost") > -1
      );
    },
    clearVisPropOld: function (e) {
      e.visPropOld = {
        strokecolor: "",
        strokeopacity: "",
        strokewidth: "",
        fillcolor: "",
        fillopacity: "",
        shadow: !1,
        firstarrow: !1,
        lastarrow: !1,
        cssclass: "",
        fontsize: -1,
      };
    },
    ieVersion: (function () {
      var e;
      if (typeof document == "undefined") return e;
      var t = 3,
        n = document.createElement("div"),
        r = n.getElementsByTagName("i");
      while (
        ((n.innerHTML = "/*[if gt IE " + ++t + "]><i><" + "/i><![endif]*/"),
        r[0])
      );
      return t > 4 ? t : e;
    })(),
    getReference: function (e, t) {
      return (
        typeof t == "string" &&
          (JXG.exists(e.objects[t])
            ? (t = e.objects[t])
            : JXG.exists(e.elementsByName[t])
            ? (t = e.elementsByName[t])
            : JXG.exists(e.groups[t]) && (t = e.groups[t])),
        t
      );
    },
    getRef: JXG.shortcut(JXG, "getReference"),
    isId: function (e, t) {
      return typeof t == "string" && !!e.objects[t];
    },
    isName: function (e, t) {
      return typeof t == "string" && !!e.elementsByName[t];
    },
    isGroup: function (e, t) {
      return typeof t == "string" && !!e.groups[t];
    },
    isString: function (e) {
      return typeof e == "string";
    },
    isNumber: function (e) {
      return typeof e == "number";
    },
    isFunction: function (e) {
      return typeof e == "function";
    },
    isArray: function (e) {
      var t;
      return (
        Array.isArray
          ? (t = Array.isArray(e))
          : (t =
              e !== null &&
              typeof e == "object" &&
              "splice" in e &&
              "join" in e),
        t
      );
    },
    isPoint: function (e) {
      return typeof e == "object"
        ? e.elementClass == JXG.OBJECT_CLASS_POINT
        : !1;
    },
    exists: (function (e) {
      return function (t) {
        return t !== e && t !== null;
      };
    })(),
    def: function (e, t) {
      return JXG.exists(e) ? e : t;
    },
    str2Bool: function (e) {
      return JXG.exists(e)
        ? typeof e == "boolean"
          ? e
          : JXG.isString(e)
          ? e.toLowerCase() == "true"
          : !1
        : !0;
    },
    _board: function (e, t) {
      return JXG.JSXGraph.initBoard(e, t);
    },
    createEvalFunction: function (e, t, n) {
      var r = [],
        i,
        s;
      for (i = 0; i < n; i++)
        typeof t[i] == "string" &&
          ((s = JXG.GeonextParser.geonext2JS(t[i], e)),
          (s = s.replace(/this\.board\./g, "board.")),
          (r[i] = new Function("", "return " + s + ";")));
      return function (e) {
        var n = t[e];
        return typeof n == "string"
          ? r[e]()
          : typeof n == "function"
          ? n()
          : typeof n == "number"
          ? n
          : 0;
      };
    },
    createFunction: function (e, t, n, r) {
      var i = null;
      return (
        (!JXG.exists(r) || r) && JXG.isString(e)
          ? (i = t.jc.snippet(e, !0, n, !0))
          : JXG.isFunction(e)
          ? (i = e)
          : JXG.isNumber(e)
          ? (i = function () {
              return e;
            })
          : JXG.isString(e) &&
            (i = function () {
              return e;
            }),
        i !== null && (i.origin = e),
        i
      );
    },
    checkParents: function (e, t, n) {
      var r,
        i,
        s,
        o,
        u = [],
        a = t.slice(0),
        f = function (e, t) {
          var n = (typeof e).toLowerCase();
          if (n === "number")
            return (
              t &&
              ((t.type && t.type === e) ||
                (t.elementClass && t.elementClass === e))
            );
          switch (e.toLowerCase()) {
            case "string":
            case "object":
            case "function":
            case "number":
              return (typeof t).toLowerCase() === e.toLowerCase();
            case "array":
              return JXG.isArray(t);
          }
          return !1;
        };
      for (r = 0; r < n.length; r++) {
        for (i = 0; i < n[r].length && t.length >= n[r].length; i++) {
          s = 0;
          while (s < a.length && !f(n[r][i], a[s])) s++;
          s < a.length && u.push(a.splice(o - s - 1, 1)[0]);
        }
        if (!a.length) return u;
        (a = t.slice(0)), (u = []);
      }
    },
    readOption: function (e, t, n) {
      var r = e.elements[n];
      return JXG.exists(e[t][n]) && (r = e[t][n]), r;
    },
    checkAttributes: function (e, t) {
      var n;
      JXG.exists(e) || (e = {});
      for (n in t) JXG.exists(e[n]) || (e[n] = t[n]);
      return e;
    },
    copyAttributes: function (e, t) {
      var n,
        r,
        i,
        s,
        o,
        u = {
          circle: 1,
          curve: 1,
          image: 1,
          line: 1,
          point: 1,
          polygon: 1,
          text: 1,
          ticks: 1,
          integral: 1,
        };
      (i = arguments.length),
        i < 3 || u[arguments[2]]
          ? (n = this.deepCopy(t.elements, null, !0))
          : (n = {}),
        i < 4 &&
          this.exists(arguments[2]) &&
          this.exists(t.layer[arguments[2]]) &&
          (n.layer = t.layer[arguments[2]]),
        (s = t),
        (o = !0);
      for (r = 2; r < i; r++) {
        if (!JXG.exists(s[arguments[r]])) {
          o = !1;
          break;
        }
        s = s[arguments[r]];
      }
      o && (n = this.deepCopy(n, s, !0)), (s = e), (o = !0);
      for (r = 3; r < i; r++) {
        if (!JXG.exists(s[arguments[r]])) {
          o = !1;
          break;
        }
        s = s[arguments[r]];
      }
      o && this.extend(n, s, null, !0), (s = t), (o = !0);
      for (r = 2; r < i; r++) {
        if (!JXG.exists(s[arguments[r]])) {
          o = !1;
          break;
        }
        s = s[arguments[r]];
      }
      return (
        o && (n.label = JXG.deepCopy(s.label, n.label)),
        (n.label = JXG.deepCopy(t.label, n.label)),
        n
      );
    },
    getDimensions: function (e) {
      var t, n, r, i, s, o, u, a;
      if (typeof document == "undefined" || e == null)
        return { width: 500, height: 500 };
      t = document.getElementById(e);
      if (!JXG.exists(t))
        throw new Error(
          "\nJSXGraph: HTML container element '" + e + "' not found."
        );
      return (
        (n = t.style.display),
        n != "none" && n != null
          ? { width: t.offsetWidth, height: t.offsetHeight }
          : ((r = t.style),
            (i = r.visibility),
            (s = r.position),
            (o = r.display),
            (r.visibility = "hidden"),
            (r.position = "absolute"),
            (r.display = "block"),
            (u = t.clientWidth),
            (a = t.clientHeight),
            (r.display = o),
            (r.position = s),
            (r.visibility = i),
            { width: u, height: a })
      );
    },
    addEvent: function (e, t, n, r) {
      var i = function () {
        return n.apply(r, arguments);
      };
      (i.origin = n),
        (r["x_internal" + t] = r["x_internal" + t] || []),
        r["x_internal" + t].push(i),
        JXG.exists(e) && JXG.exists(e.addEventListener)
          ? e.addEventListener(t, i, !1)
          : e.attachEvent("on" + t, i);
    },
    removeEvent: function (e, t, n, r) {
      var i;
      if (!JXG.exists(r)) {
        JXG.debug("no such owner"), alert("see console and recheck why!!!");
        return;
      }
      if (!JXG.exists(r["x_internal" + t])) {
        JXG.debug("no such type: " + t);
        return;
      }
      if (!JXG.isArray(r["x_internal" + t])) {
        JXG.debug("owner[x_internal + " + t + "] is not an array");
        return;
      }
      i = JXG.indexOf(r["x_internal" + t], n, "origin");
      if (i === -1) {
        JXG.debug("no such event function in internal list: " + n);
        return;
      }
      try {
        JXG.exists(e.addEventListener)
          ? e.removeEventListener(t, r["x_internal" + t][i], !1)
          : e.detachEvent("on" + t, r["x_internal" + t][i]);
      } catch (s) {
        JXG.debug("event not registered in browser: (" + t + " -- " + n + ")");
      }
      r["x_internal" + t].splice(i, 1);
    },
    removeAllEvents: function (e, t, n) {
      var r, i;
      if (n["x_internal" + t]) {
        i = n["x_internal" + t].length;
        for (r = i - 1; r >= 0; r--)
          JXG.removeEvent(e, t, n["x_internal" + t][r].origin, n);
        n["x_internal" + t].length > 0 &&
          JXG.debug("removeAllEvents: Not all events could be removed.");
      }
    },
    bind: function (e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    },
    removeElementFromArray: function (e, t) {
      var n;
      for (n = 0; n < e.length; n++) if (e[n] === t) return e.splice(n, 1), e;
      return e;
    },
    getPosition: function (e, t) {
      var n,
        r,
        i = 0,
        s = 0,
        o;
      e || (e = window.event), (o = e[JXG.touchProperty]);
      if (JXG.exists(t))
        if (t == -1) {
          r = o.length;
          for (n = 0; n < r; n++)
            if (o[n]) {
              e = o[n];
              break;
            }
        } else e = o[t];
      if (e.pageX || e.pageY) (i = e.pageX), (s = e.pageY);
      else if (e.clientX || e.clientY)
        (i =
          e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft),
          (s =
            e.clientY +
            document.body.scrollTop +
            document.documentElement.scrollTop);
      return [i, s];
    },
    getOffset: function (e) {
      var t = e,
        n = e,
        r = t.offsetLeft - t.scrollLeft,
        i = t.offsetTop - t.scrollTop,
        s;
      (s = this.getCSSTransform([r, i], t)), (r = s[0]), (i = s[1]);
      while ((t = t.offsetParent)) {
        (r += t.offsetLeft),
          (i += t.offsetTop),
          t.offsetParent &&
            ((r += t.clientLeft - t.scrollLeft),
            (i += t.clientTop - t.scrollTop)),
          (s = this.getCSSTransform([r, i], t)),
          (r = s[0]),
          (i = s[1]),
          (n = n.parentNode);
        while (n != t)
          (r += n.clientLeft - n.scrollLeft),
            (i += n.clientTop - n.scrollTop),
            (s = this.getCSSTransform([r, i], n)),
            (r = s[0]),
            (i = s[1]),
            (n = n.parentNode);
      }
      return [r, i];
    },
    getStyle: function (e, t) {
      var n;
      return (
        window.getComputedStyle
          ? (n = document.defaultView
              .getComputedStyle(e, null)
              .getPropertyValue(t))
          : e.currentStyle && JXG.ieVersion >= 9
          ? (n = e.currentStyle[t])
          : e.style &&
            ((t = t.replace(/-([a-z]|[0-9])/gi, function (e, t) {
              return (t + "").toUpperCase();
            })),
            (n = e.style[t])),
        n
      );
    },
    getCSSTransform: function (e, t) {
      var n = [
          "transform",
          "webkitTransform",
          "MozTransform",
          "msTransform",
          "oTransform",
        ],
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l,
        c;
      a = n.length;
      for (r = 0, s = ""; r < a; r++)
        if (JXG.exists(t.style[n[r]])) {
          s = t.style[n[r]];
          break;
        }
      if (s != "") {
        u = s.indexOf("(");
        if (u > 0) {
          (a = s.length),
            (arrstr = s.substring(u + 1, a - 1)),
            (l = arrstr.split(","));
          for (i = 0, f = l.length; i < f; i++) l[i] = parseFloat(l[i]);
          0 == s.indexOf("matrix")
            ? ((c = [
                [l[0], l[1]],
                [l[2], l[3]],
              ]),
              (e[0] += l[4]),
              (e[1] += l[5]))
            : 0 == s.indexOf("translateX")
            ? (e[0] += l[0])
            : 0 == s.indexOf("translateY")
            ? (e[1] += l[0])
            : 0 == s.indexOf("translate")
            ? ((e[0] += l[0]), (e[1] += l[1]))
            : 0 == s.indexOf("scaleX")
            ? ((c = [
                [l[0], 0],
                [0, 1],
              ]),
              (e = JXG.Math.matVecMult(c, e)))
            : 0 == s.indexOf("scaleY")
            ? ((c = [
                [1, 0],
                [0, l[0]],
              ]),
              (e = JXG.Math.matVecMult(c, e)))
            : 0 == s.indexOf("scale") &&
              ((c = [
                [l[0], 0],
                [0, l[1]],
              ]),
              (e = JXG.Math.matVecMult(c, e)));
        }
      }
      return e;
    },
    getCSSTransformMatrix: function (e) {
      var t = [
          "transform",
          "webkitTransform",
          "MozTransform",
          "msTransform",
          "oTransform",
        ],
        n,
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l;
      (l = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
        (u = t.length);
      for (n = 0, i = ""; n < u; n++)
        if (JXG.exists(e.style[t[n]])) {
          i = e.style[t[n]];
          break;
        }
      if (i != "") {
        o = i.indexOf("(");
        if (o > 0) {
          (u = i.length),
            (arrstr = i.substring(o + 1, u - 1)),
            (f = arrstr.split(","));
          for (r = 0, a = f.length; r < a; r++) f[r] = parseFloat(f[r]);
          0 == i.indexOf("matrix")
            ? (l = [
                [1, 0, 0],
                [f[4], f[0], f[1]],
                [f[5], f[2], f[3]],
              ])
            : 0 == i.indexOf("translateX")
            ? (l[1][0] = f[0])
            : 0 == i.indexOf("translateY")
            ? (l[2][0] = f[0])
            : 0 == i.indexOf("translate")
            ? ((l[1][0] = f[0]), (l[2][0] = f[1]))
            : 0 == i.indexOf("scaleX")
            ? (l[1][1] = f[0])
            : 0 == i.indexOf("scaleY")
            ? (l[2][2] = f[0])
            : 0 == i.indexOf("scale") && ((l[1][1] = f[0]), (l[2][2] = f[1]));
        }
      }
      return l;
    },
    keys: function (e, t) {
      var n = [],
        r;
      for (r in e) t ? e.hasOwnProperty(r) && n.push(r) : n.push(r);
      return n;
    },
    indexOf: function (e, t, n) {
      var r,
        i = JXG.exists(n);
      if (Array.indexOf && !i) return e.indexOf(t);
      for (r = 0; r < e.length; r++)
        if ((i && e[r][n] === t) || (!i && e[r] === t)) return r;
      return -1;
    },
    escapeHTML: function (e) {
      return e
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    },
    unescapeHTML: function (e) {
      return e
        .replace(/<\/?[^>]+>/gi, "")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");
    },
    clone: function (e) {
      var t = {};
      return (t.prototype = e), t;
    },
    cloneAndCopy: function (e, t) {
      var n = function () {},
        r;
      n.prototype = e;
      for (r in t) n[r] = t[r];
      return n;
    },
    deepCopy: function (e, t, n) {
      var r, i, s, o, u;
      n = n || !1;
      if (typeof e != "object" || e == null) return e;
      if (this.isArray(e)) {
        r = [];
        for (i = 0; i < e.length; i++)
          (s = e[i]),
            typeof s == "object" ? (r[i] = this.deepCopy(s)) : (r[i] = s);
      } else {
        r = {};
        for (i in e)
          (u = n ? i.toLowerCase() : i),
            (s = e[i]),
            typeof s == "object" ? (r[u] = this.deepCopy(s)) : (r[u] = s);
        for (i in t)
          (u = n ? i.toLowerCase() : i),
            (s = t[i]),
            typeof s == "object"
              ? JXG.isArray(s) || !JXG.exists(r[u])
                ? (r[u] = this.deepCopy(s))
                : (r[u] = this.deepCopy(r[u], s, n))
              : (r[u] = s);
      }
      return r;
    },
    toJSON: function (e, t) {
      var n, r;
      t = JXG.def(t, !1);
      if (window.JSON && window.JSON.stringify && !t)
        try {
          return (n = JSON.stringify(e)), n;
        } catch (i) {}
      switch (typeof e) {
        case "object":
          if (e) {
            var s = [];
            if (e instanceof Array) {
              for (var o = 0; o < e.length; o++) s.push(JXG.toJSON(e[o], t));
              return "[" + s.join(",") + "]";
            }
            for (var u in e) {
              try {
                r = JXG.toJSON(e[u], t);
              } catch (i) {
                r = "";
              }
              t ? s.push(u + ":" + r) : s.push('"' + u + '":' + r);
            }
            return "{" + s.join(",") + "} ";
          }
          return "null";
        case "string":
          return "'" + e.replace(/(["'])/g, "\\$1") + "'";
        case "number":
        case "boolean":
          return new String(e);
      }
    },
    capitalize: function (e) {
      return e.charAt(0).toUpperCase() + e.substring(1).toLowerCase();
    },
    timedChunk: function (e, t, n, r) {
      var i = e.concat();
      setTimeout(function () {
        var s = +new Date();
        do t.call(n, i.shift());
        while (i.length > 0 && +new Date() - s < 300);
        i.length > 0 ? setTimeout(arguments.callee, 1) : r(e);
      }, 1);
    },
    trimNumber: function (e) {
      (e = e.replace(/^0+/, "")), (e = e.replace(/0+$/, ""));
      if (e[e.length - 1] == "." || e[e.length - 1] == ",") e = e.slice(0, -1);
      if (e[0] == "." || e[0] == ",") e = "0" + e;
      return e;
    },
    trim: function (e) {
      return (e = e.replace(/^\s+/, "")), (e = e.replace(/\s+$/, "")), e;
    },
    evaluate: function (e) {
      return JXG.isFunction(e) ? e() : e;
    },
    eliminateDuplicates: function (e) {
      var t,
        n = e.length,
        r = [],
        i = {};
      for (t = 0; t < n; t++) i[e[t]] = 0;
      for (t in i) i.hasOwnProperty(t) && r.push(t);
      return r;
    },
    cmpArrays: function (e, t) {
      var n;
      if (e === t) return !0;
      if (e.length !== t.length) return !1;
      for (n = 0; n < e.length; n++)
        if (typeof e[n] != typeof t[n] || e[n] !== t[n]) return !1;
      return !0;
    },
    trunc: function (e, t) {
      return (t = JXG.def(t, 0)), t == 0 ? (e = ~~e) : (e = e.toFixed(t)), e;
    },
    autoDigits: function (e) {
      var t = Math.abs(e);
      return (
        t > 0.1
          ? (t = e.toFixed(2))
          : t >= 0.01
          ? (t = e.toFixed(4))
          : t >= 1e-4
          ? (t = e.toFixed(6))
          : (t = e),
        t
      );
    },
    debug: function (e) {
      var t;
      for (t = 0; t < arguments.length; t++)
        (e = arguments[t]),
          window.console && console.log
            ? console.log(e)
            : document.getElementById("debug") &&
              (document.getElementById("debug").innerHTML += e + "<br/>");
    },
    debugWST: function (e) {
      var t;
      JXG.debug(e),
        window.console &&
          console.log &&
          ((t = new Error()),
          t &&
            t.stack &&
            (console.log("stacktrace"),
            console.log(t.stack.split("\n").slice(1).join("\n"))));
    },
    uniqueArray: function (e) {
      var t,
        n,
        r,
        i = [];
      if (e.length === 0) return [];
      r = JXG.isArray(e[0]);
      for (t = 0; t < e.length; t++)
        for (n = t + 1; n < e.length; n++)
          r && JXG.cmpArrays(e[t], e[n])
            ? (e[t] = [])
            : !r && e[t] === e[n] && (e[t] = "");
      n = 0;
      for (t = 0; t < e.length; t++)
        !r && e[t] !== ""
          ? ((i[n] = e[t]), n++)
          : r && e[t].length !== 0 && ((i[n] = e[t].slice(0)), n++);
      return i;
    },
    isInArray: function (e, t) {
      var n;
      for (n = 0; n < e.length; n++) if (e[n] == t) return !0;
      return !1;
    },
    isArray2: function (e) {
      return typeof e == "object" && e instanceof Array;
    },
    isObject: function (e) {
      return (
        typeof e == "object" && e instanceof Object && !(e instanceof Array)
      );
    },
    isInObject: function (e, t) {
      for (var n in e) if (e.hasOwnProperty(n) && e[n] == t) return !0;
      return !1;
    },
    collectionContains: function (e, t) {
      return JXG.isArray2(e)
        ? JXG.isInArray(e, t)
        : JXG.isObject(e)
        ? JXG.isInObject(e, t)
        : e == t;
    },
  }),
  typeof window != "undefined" &&
    typeof document != "undefined" &&
    JXG.addEvent(
      window,
      "load",
      function () {
        var e = document.getElementsByTagName("script"),
          t,
          n,
          r,
          i,
          s,
          o,
          u,
          a,
          f,
          l,
          c;
        for (n = 0; n < e.length; n++) {
          t = e[n].getAttribute("type", !1);
          if (!JXG.exists(t)) continue;
          if (
            t.toLowerCase() === "text/jessiescript" ||
            t.toLowerCase() === "jessiescript" ||
            t.toLowerCase() === "text/jessiecode" ||
            t.toLowerCase() === "jessiecode"
          ) {
            (o = e[n].getAttribute("width", !1) || "500px"),
              (u = e[n].getAttribute("height", !1) || "500px"),
              (a = e[n].getAttribute("boundingbox", !1) || "-5, 5, 5, -5"),
              (a = a.split(","));
            if (a.length !== 4) a = [-5, 5, 5, -5];
            else for (r = 0; r < a.length; r++) a[r] = parseFloat(a[r]);
            (f = JXG.str2Bool(e[n].getAttribute("axis", !1) || "false")),
              (l = JXG.str2Bool(e[n].getAttribute("grid", !1) || "false")),
              (i = document.createElement("div")),
              i.setAttribute("id", "jessiescript_autgen_jxg_" + n),
              i.setAttribute(
                "style",
                "width:" + o + "; height:" + u + "; float:left"
              ),
              i.setAttribute("class", "jxgbox");
            try {
              document.body.insertBefore(i, e[n]);
            } catch (h) {
              typeof jQuery != "undefined" && jQuery(i).insertBefore(e[n]);
            }
            if (document.getElementById("jessiescript_autgen_jxg_" + n)) {
              (s = JXG.JSXGraph.initBoard("jessiescript_autgen_jxg_" + n, {
                boundingbox: a,
                keepaspectratio: !0,
                grid: l,
                axis: f,
              })),
                (c = e[n].innerHTML),
                (c = c.replace(/<!\[CDATA\[/g, "").replace(/\]\]>/g, "")),
                (e[n].innerHTML = c);
              if (t.toLowerCase().indexOf("script") > -1) s.construct(c);
              else
                try {
                  s.jc.parse(c);
                } catch (h) {
                  JXG.debug(h);
                }
            } else
              JXG.debug(
                "JSXGraph: Apparently the div injection failed. Can't create a board, sorry."
              );
          }
        }
      },
      window
    ),
  (JXG.EventEmitter = {
    eventHandlers: {},
    triggerEventHandlers: function (e) {
      var t,
        n,
        r = Array.prototype.slice.call(arguments, 1),
        i,
        s,
        o,
        u;
      JXG.isArray(e) || (e = [e]), (o = e.length);
      for (i = 0; i < o; i++) {
        s = e[i];
        if (JXG.isArray(this.eventHandlers[s])) {
          u = this.eventHandlers[s].length;
          for (t = 0; t < u; t++)
            (n = this.eventHandlers[s][t]), n.handler.apply(n.context, r);
        }
      }
      return this;
    },
    on: function (e, t, n) {
      return (
        JXG.isArray(this.eventHandlers[e]) || (this.eventHandlers[e] = []),
        (n = JXG.def(n, this)),
        this.eventHandlers[e].push({ handler: t, context: n }),
        this
      );
    },
    off: function (e, t) {
      var n;
      return !e || !JXG.isArray(this.eventHandlers[e])
        ? this
        : (t
            ? ((n = JXG.indexOf(this.eventHandlers[e], t, "handler")),
              n > -1 && this.eventHandlers[e].splice(n, 1))
            : (this.eventHandlers[e].length = 0),
          this);
    },
    eventify: function (e) {
      (e.eventHandlers = {}),
        (e.on = this.on),
        (e.off = this.off),
        (e.triggerEventHandlers = this.triggerEventHandlers);
    },
  }),
  (JXG.Math = (function (e, t, n) {
    var r = function (e) {
      var t, r;
      return e.memo
        ? e.memo
        : ((t = {}),
          (r = Array.prototype.join),
          (e.memo = function () {
            var i = r.call(arguments);
            return t[i] !== n ? t[i] : (t[i] = e.apply(this, arguments));
          }));
    };
    return {
      eps: 1e-6,
      mod: function (e, n) {
        return e - t.floor(e / n) * n;
      },
      vector: function (e, n) {
        var r, i;
        (n = n || 0), (r = new Array(t.ceil(e)));
        for (i = 0; i < e; i++) r[i] = n;
        return r;
      },
      matrix: function (e, n, r) {
        var i, s, o;
        (r = r || 0), (n = n || e), (i = new Array(t.ceil(e)));
        for (s = 0; s < e; s++) {
          i[s] = new Array(t.ceil(n));
          for (o = 0; o < n; o++) i[s][o] = r;
        }
        return i;
      },
      identity: function (e, r) {
        var i, s;
        r === n && typeof r != "number" && (r = e), (i = this.matrix(e, r));
        for (s = 0; s < t.min(e, r); s++) i[s][s] = 1;
        return i;
      },
      frustum: function (t, n, r, i, s, o) {
        var u = e.Math.matrix(4, 4);
        return (
          (u[0][0] = (s * 2) / (n - t)),
          (u[0][1] = 0),
          (u[0][2] = (n + t) / (n - t)),
          (u[0][3] = 0),
          (u[1][0] = 0),
          (u[1][1] = (s * 2) / (i - r)),
          (u[1][2] = (i + r) / (i - r)),
          (u[1][3] = 0),
          (u[2][0] = 0),
          (u[2][1] = 0),
          (u[2][2] = -(o + s) / (o - s)),
          (u[2][3] = -(o * s * 2) / (o - s)),
          (u[3][0] = 0),
          (u[3][1] = 0),
          (u[3][2] = -1),
          (u[3][3] = 0),
          u
        );
      },
      projection: function (e, n, r, i) {
        var s = r * t.tan(e / 2),
          o = s * n;
        return this.frustum(-o, o, -s, s, r, i);
      },
      matVecMult: function (e, t) {
        var n = e.length,
          r = t.length,
          i = [],
          s,
          o,
          u;
        if (r === 3)
          for (s = 0; s < n; s++)
            i[s] = e[s][0] * t[0] + e[s][1] * t[1] + e[s][2] * t[2];
        else
          for (s = 0; s < n; s++) {
            o = 0;
            for (u = 0; u < r; u++) o += e[s][u] * t[u];
            i[s] = o;
          }
        return i;
      },
      matMatMult: function (e, t) {
        var n = e.length,
          r = n > 0 ? t[0].length : 0,
          i = t.length,
          s = this.matrix(n, r),
          o,
          u,
          a,
          f;
        for (o = 0; o < n; o++)
          for (u = 0; u < r; u++) {
            a = 0;
            for (f = 0; f < i; f++) a += e[o][f] * t[f][u];
            s[o][u] = a;
          }
        return s;
      },
      transpose: function (e) {
        var t, n, r, i, s;
        (i = e.length),
          (s = e.length > 0 ? e[0].length : 0),
          (t = this.matrix(s, i));
        for (n = 0; n < s; n++) for (r = 0; r < i; r++) t[n][r] = e[r][n];
        return t;
      },
      inverse: function (n) {
        var r,
          i,
          s,
          o,
          u,
          a,
          f,
          l = n.length,
          c = [],
          h = [],
          p = [];
        for (r = 0; r < l; r++) {
          c[r] = [];
          for (i = 0; i < l; i++) c[r][i] = n[r][i];
          h[r] = r;
        }
        for (i = 0; i < l; i++) {
          (u = t.abs(c[i][i])), (a = i);
          for (r = i + 1; r < l; r++)
            t.abs(c[r][i]) > u && ((u = t.abs(c[r][i])), (a = r));
          if (u <= e.Math.eps) return !1;
          if (a > i) {
            for (s = 0; s < l; s++)
              (f = c[i][s]), (c[i][s] = c[a][s]), (c[a][s] = f);
            (f = h[i]), (h[i] = h[a]), (h[a] = f);
          }
          o = 1 / c[i][i];
          for (r = 0; r < l; r++) c[r][i] *= o;
          c[i][i] = o;
          for (s = 0; s < l; s++)
            if (s != i) {
              for (r = 0; r < l; r++) r != i && (c[r][s] -= c[r][i] * c[i][s]);
              c[i][s] = -o * c[i][s];
            }
        }
        for (r = 0; r < l; r++) {
          for (s = 0; s < l; s++) p[h[s]] = c[r][s];
          for (s = 0; s < l; s++) c[r][s] = p[s];
        }
        return c;
      },
      innerProduct: function (e, t, r) {
        var i,
          s = 0;
        if (r === n || typeof r != "number") r = e.length;
        for (i = 0; i < r; i++) s += e[i] * t[i];
        return s;
      },
      crossProduct: function (e, t) {
        return [
          e[1] * t[2] - e[2] * t[1],
          e[2] * t[0] - e[0] * t[2],
          e[0] * t[1] - e[1] * t[0],
        ];
      },
      factorial: r(function (e) {
        return e < 0
          ? NaN
          : ((e = t.floor(e)),
            e === 0 || e === 1 ? 1 : e * arguments.callee(e - 1));
      }),
      binomial: r(function (e, n) {
        var r, i;
        if (n > e || n < 0) return NaN;
        (n = t.round(n)), (e = t.round(e));
        if (n === 0 || n === e) return 1;
        r = 1;
        for (i = 0; i < n; i++) (r *= e - i), (r /= i + 1);
        return r;
      }),
      cosh: function (e) {
        return (t.exp(e) + t.exp(-e)) * 0.5;
      },
      sinh: function (e) {
        return (t.exp(e) - t.exp(-e)) * 0.5;
      },
      pow: function (e, n) {
        return e === 0
          ? n === 0
            ? 1
            : 0
          : t.floor(n) === n
          ? t.pow(e, n)
          : e > 0
          ? t.exp(n * t.log(t.abs(e)))
          : NaN;
      },
      squampow: function (e, n) {
        var r;
        if (t.floor(n) === n) {
          (r = 1), n < 0 && ((e = 1 / e), (n *= -1));
          while (n != 0) n & 1 && (r *= e), (n >>= 1), (e *= e);
          return r;
        }
        return this.pow(e, n);
      },
      normalize: function (e) {
        var n = 2 * e[3],
          r = e[4] / n,
          i,
          s;
        return (
          (e[5] = r),
          (e[6] = -e[1] / n),
          (e[7] = -e[2] / n),
          r === Infinity || isNaN(r)
            ? ((i = t.sqrt(e[1] * e[1] + e[2] * e[2])),
              (e[0] /= i),
              (e[1] /= i),
              (e[2] /= i),
              (e[3] = 0),
              (e[4] = 1))
            : t.abs(r) >= 1
            ? ((e[0] = (e[6] * e[6] + e[7] * e[7] - r * r) / (2 * r)),
              (e[1] = -e[6] / r),
              (e[2] = -e[7] / r),
              (e[3] = 1 / (2 * r)),
              (e[4] = 1))
            : ((s = r <= 0 ? -1 : 1),
              (e[0] = s * (e[6] * e[6] + e[7] * e[7] - r * r) * 0.5),
              (e[1] = -s * e[6]),
              (e[2] = -s * e[7]),
              (e[3] = s / 2),
              (e[4] = s * r)),
          e
        );
      },
      toGL: function (e) {
        var t, n, r;
        typeof Float32Array != "undefined"
          ? (t = new Float32Array(16))
          : (t = new Array(16));
        if (e.length !== 4 && e[0].length !== 4) return t;
        for (n = 0; n < 4; n++) for (r = 0; r < 4; r++) t[n + 4 * r] = e[n][r];
        return t;
      },
    };
  })(JXG, Math)),
  (JXG.Math.Numerics = (function (e, t) {
    var n = {
      rk4: {
        s: 4,
        A: [
          [0, 0, 0, 0],
          [0.5, 0, 0, 0],
          [0, 0.5, 0, 0],
          [0, 0, 1, 0],
        ],
        b: [1 / 6, 1 / 3, 1 / 3, 1 / 6],
        c: [0, 0.5, 0.5, 1],
      },
      heun: {
        s: 2,
        A: [
          [0, 0],
          [1, 0],
        ],
        b: [0.5, 0.5],
        c: [0, 1],
      },
      euler: { s: 1, A: [[0]], b: [1], c: [0] },
    };
    return {
      Gauss: function (n, r) {
        var i = e.Math.eps,
          s = n.length > 0 ? n[0].length : 0,
          o,
          u,
          a,
          f,
          l,
          c = function (e, t) {
            var n = this[e];
            (this[e] = this[t]), (this[t] = n);
          };
        if (s !== r.length || s !== n.length)
          throw new Error(
            "JXG.Math.Numerics.Gauss: Dimensions don't match. A must be a square matrix and b must be of the same length as A."
          );
        (o = new Array(s)), (u = r.slice(0, s));
        for (a = 0; a < s; a++) o[a] = n[a].slice(0, s);
        for (f = 0; f < s; f++) {
          for (a = s - 1; a > f; a--)
            if (t.abs(o[a][f]) > i)
              if (t.abs(o[f][f]) < i) c.apply(o, [a, f]), c.apply(u, [a, f]);
              else {
                (o[a][f] /= o[f][f]), (u[a] -= o[a][f] * u[f]);
                for (l = f + 1; l < s; l++) o[a][l] -= o[a][f] * o[f][l];
              }
          if (t.abs(o[f][f]) < i)
            throw new Error(
              "JXG.Math.Numerics.Gauss(): The given matrix seems to be singular."
            );
        }
        return this.backwardSolve(o, u, !0), u;
      },
      backwardSolve: function (e, t, n) {
        var r, i, s, o, u;
        n ? (r = t) : (r = t.slice(0, t.length)),
          (i = e.length),
          (s = e.length > 0 ? e[0].length : 0);
        for (o = i - 1; o >= 0; o--) {
          for (u = s - 1; u > o; u--) r[o] -= e[o][u] * r[u];
          r[o] /= e[o][o];
        }
        return r;
      },
      gaussBareiss: function (n) {
        var r,
          i,
          s,
          o,
          u,
          a,
          f,
          l,
          c,
          h = e.Math.eps;
        f = n.length;
        if (f <= 0) return 0;
        n[0].length < f && (f = n[0].length), (l = new Array(f));
        for (o = 0; o < f; o++) l[o] = n[o].slice(0, f);
        (i = 1), (s = 1);
        for (r = 0; r < f - 1; r++) {
          a = l[r][r];
          if (t.abs(a) < h) {
            for (o = 0; o < f; o++) if (t.abs(l[o][r]) >= h) break;
            if (o == f) return 0;
            for (u = r; u < f; u++)
              (c = l[o][u]), (l[o][u] = l[r][u]), (l[r][u] = c);
            (s = -s), (a = l[r][r]);
          }
          for (o = r + 1; o < f; o++)
            for (u = r + 1; u < f; u++)
              (c = a * l[o][u] - l[o][r] * l[r][u]), (l[o][u] = c / i);
          i = a;
        }
        return s * l[f - 1][f - 1];
      },
      det: function (e) {
        var t = e.length;
        return t == 2 && e[0].length == 2
          ? e[0][0] * e[1][1] - e[1][0] * e[0][1]
          : this.gaussBareiss(e);
      },
      Jacobi: function (n) {
        var r,
          i,
          s,
          o,
          u,
          a,
          f,
          l = e.Math.eps,
          c = 0,
          h,
          p,
          d = n.length,
          v = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          m = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          g = 0;
        for (r = 0; r < d; r++) {
          for (i = 0; i < d; i++)
            (v[r][i] = 0), (m[r][i] = n[r][i]), (c += t.abs(m[r][i]));
          v[r][r] = 1;
        }
        if (d == 1) return [m, v];
        if (c <= 0) return [m, v];
        c /= d * d;
        do {
          (h = 0), (p = 0);
          for (i = 1; i < d; i++)
            for (r = 0; r < i; r++) {
              (o = t.abs(m[r][i])), o > p && (p = o), (h += o);
              if (o >= l) {
                (o = t.atan2(2 * m[r][i], m[r][r] - m[i][i]) * 0.5),
                  (u = t.sin(o)),
                  (a = t.cos(o));
                for (s = 0; s < d; s++)
                  (f = m[s][r]),
                    (m[s][r] = a * f + u * m[s][i]),
                    (m[s][i] = -u * f + a * m[s][i]),
                    (f = v[s][r]),
                    (v[s][r] = a * f + u * v[s][i]),
                    (v[s][i] = -u * f + a * v[s][i]);
                (m[r][r] = a * m[r][r] + u * m[i][r]),
                  (m[i][i] = -u * m[r][i] + a * m[i][i]),
                  (m[r][i] = 0);
                for (s = 0; s < d; s++)
                  (m[r][s] = m[s][r]), (m[i][s] = m[s][i]);
              }
            }
          g++;
        } while (t.abs(h) / c > l && g < 2e3);
        return [m, v];
      },
      NewtonCotes: function (e, t, n) {
        var r = 0,
          i =
            n && typeof n.number_of_nodes == "number" ? n.number_of_nodes : 28,
          s = { trapez: !0, simpson: !0, milne: !0 },
          o =
            n &&
            n.integration_type &&
            s.hasOwnProperty(n.integration_type) &&
            s[n.integration_type]
              ? n.integration_type
              : "milne",
          u = (e[1] - e[0]) / i,
          a,
          f,
          l;
        switch (o) {
          case "trapez":
            (r = (t(e[0]) + t(e[1])) * 0.5), (a = e[0]);
            for (f = 0; f < i - 1; f++) (a += u), (r += t(a));
            r *= u;
            break;
          case "simpson":
            if (i % 2 > 0)
              throw new Error(
                "JSXGraph:  INT_SIMPSON requires config.number_of_nodes dividable by 2."
              );
            (l = i / 2), (r = t(e[0]) + t(e[1])), (a = e[0]);
            for (f = 0; f < l - 1; f++) (a += 2 * u), (r += 2 * t(a));
            a = e[0] - u;
            for (f = 0; f < l; f++) (a += 2 * u), (r += 4 * t(a));
            r *= u / 3;
            break;
          default:
            if (i % 4 > 0)
              throw new Error(
                "JSXGraph: Error in INT_MILNE: config.number_of_nodes must be a multiple of 4"
              );
            (l = i * 0.25), (r = 7 * (t(e[0]) + t(e[1]))), (a = e[0]);
            for (f = 0; f < l - 1; f++) (a += 4 * u), (r += 14 * t(a));
            a = e[0] - 3 * u;
            for (f = 0; f < l; f++)
              (a += 4 * u), (r += 32 * (t(a) + t(a + 2 * u)));
            a = e[0] - 2 * u;
            for (f = 0; f < l; f++) (a += 4 * u), (r += 12 * t(a));
            r *= (2 * u) / 45;
        }
        return r;
      },
      I: function (e, t) {
        return this.NewtonCotes(e, t, {
          number_of_nodes: 16,
          integration_type: "milne",
        });
      },
      Newton: function (n, r, i) {
        var s = 0,
          o = e.Math.eps,
          u = n.apply(i, [r]),
          a = 1,
          f;
        e.isArray(r) && (r = r[0]);
        while (s < 50 && t.abs(u) > o)
          (f = this.D(n, i)(r)),
            (a += 2),
            t.abs(f) > o ? (r -= u / f) : (r += t.random() * 0.2 - 1),
            (u = n.apply(i, [r])),
            a++,
            s++;
        return r;
      },
      root: function (e, t, n) {
        return this.fzero(e, t, n);
      },
      Neville: function (t) {
        var n = [],
          r = function (r) {
            return function (i, s) {
              var o,
                u,
                a,
                f = e.Math.binomial,
                l = t.length,
                c = l - 1,
                h = 0,
                d = 0;
              if (!s) {
                a = 1;
                for (o = 0; o < l; o++) (n[o] = f(c, o) * a), (a *= -1);
              }
              u = i;
              for (o = 0; o < l; o++) {
                if (u === 0) return t[o][r]();
                (a = n[o] / u), u--, (h += t[o][r]() * a), (d += a);
              }
              return h / d;
            };
          },
          i = r("X"),
          s = r("Y");
        return [
          i,
          s,
          0,
          function () {
            return t.length - 1;
          },
        ];
      },
      splineDef: function (e, n) {
        var r = t.min(e.length, n.length),
          i,
          s,
          o,
          u = [],
          a = [],
          f = [],
          l = [],
          c = [],
          h = [];
        if (r === 2) return [0, 0];
        for (s = 0; s < r; s++) (i = { X: e[s], Y: n[s] }), f.push(i);
        f.sort(function (e, t) {
          return e.X - t.X;
        });
        for (s = 0; s < r; s++) (e[s] = f[s].X), (n[s] = f[s].Y);
        for (s = 0; s < r - 1; s++) l.push(e[s + 1] - e[s]);
        for (s = 0; s < r - 2; s++)
          c.push(
            (6 * (n[s + 2] - n[s + 1])) / l[s + 1] -
              (6 * (n[s + 1] - n[s])) / l[s]
          );
        u.push(2 * (l[0] + l[1])), a.push(c[0]);
        for (s = 0; s < r - 3; s++)
          (o = l[s + 1] / u[s]),
            u.push(2 * (l[s + 1] + l[s + 2]) - o * l[s + 1]),
            a.push(c[s + 1] - o * a[s]);
        h[r - 3] = a[r - 3] / u[r - 3];
        for (s = r - 4; s >= 0; s--) h[s] = (a[s] - l[s + 1] * h[s + 1]) / u[s];
        for (s = r - 3; s >= 0; s--) h[s + 1] = h[s];
        return (h[0] = 0), (h[r - 1] = 0), h;
      },
      splineEval: function (n, r, i, s) {
        var o = t.min(r.length, i.length),
          u = 1,
          a = !1,
          f = [],
          l,
          c,
          h,
          p,
          d,
          v,
          m;
        e.isArray(n) ? ((u = n.length), (a = !0)) : (n = [n]);
        for (l = 0; l < u; l++) {
          if (n[l] < r[0] || r[l] > r[o - 1]) return NaN;
          for (c = 1; c < o; c++) if (n[l] <= r[c]) break;
          c--,
            (h = i[c]),
            (p =
              (i[c + 1] - i[c]) / (r[c + 1] - r[c]) -
              ((r[c + 1] - r[c]) / 6) * (s[c + 1] + 2 * s[c])),
            (d = s[c] / 2),
            (v = (s[c + 1] - s[c]) / (6 * (r[c + 1] - r[c]))),
            (m = n[l] - r[c]),
            f.push(h + (p + (d + v * m) * m) * m);
        }
        return a ? f : f[0];
      },
      generatePolynomialTerm: function (e, t, n, r) {
        var i = [],
          s;
        for (s = t; s >= 0; s--)
          (i = i.concat(["(", e[s].toPrecision(r), ")"])),
            s > 1
              ? (i = i.concat(["*", n, "<sup>", s, "<", "/sup> + "]))
              : s === 1 && (i = i.concat(["*", n, " + "]));
        return i.join("");
      },
      lagrangePolynomial: function (e) {
        var t = [],
          n = function (n, r) {
            var i,
              s,
              o,
              u,
              a,
              f = 0,
              l = 0,
              c,
              h;
            o = e.length;
            if (!r) {
              for (i = 0; i < o; i++) {
                (t[i] = 1), (u = e[i].X());
                for (s = 0; s < o; s++) s != i && (t[i] *= u - e[s].X());
                t[i] = 1 / t[i];
              }
              c = [];
              for (h = 0; h < o; h++) c.push([1]);
            }
            for (i = 0; i < o; i++) {
              u = e[i].X();
              if (n === u) return e[i].Y();
              (a = t[i] / (n - u)), (l += a), (f += a * e[i].Y());
            }
            return f / l;
          };
        return (
          (n.getTerm = function () {
            return "";
          }),
          n
        );
      },
      CatmullRomSpline: function (e) {
        var n = [],
          r,
          i = {},
          s = {},
          o = function (o) {
            return function (u, a) {
              var f = e.length,
                l,
                c;
              if (f < 2) return NaN;
              if (!a) {
                (i[o] = function () {
                  return 2 * e[0][o]() - e[1][o]();
                }),
                  (s[o] = function () {
                    return 2 * e[f - 1][o]() - e[f - 2][o]();
                  }),
                  (r = [i].concat(e, [s])),
                  (n[o] = []);
                for (l = 0; l < f - 1; l++)
                  n[o][l] = [
                    2 * r[l + 1][o](),
                    -r[l][o]() + r[l + 2][o](),
                    2 * r[l][o]() -
                      5 * r[l + 1][o]() +
                      4 * r[l + 2][o]() -
                      r[l + 3][o](),
                    -r[l][o]() +
                      3 * r[l + 1][o]() -
                      3 * r[l + 2][o]() +
                      r[l + 3][o](),
                  ];
              }
              return (
                (f += 2),
                isNaN(u)
                  ? NaN
                  : u < 0
                  ? r[1][o]()
                  : u >= f - 3
                  ? r[f - 2][o]()
                  : ((l = t.floor(u)),
                    l == u
                      ? r[l][o]()
                      : ((u -= l),
                        (c = n[o][l]),
                        0.5 * (((c[3] * u + c[2]) * u + c[1]) * u + c[0])))
              );
            };
          };
        return [
          o("X"),
          o("Y"),
          0,
          function () {
            return e.length - 1;
          },
        ];
      },
      regressionPolynomial: function (n, r, i) {
        var s,
          o,
          u,
          a,
          f,
          l,
          c = "";
        if (e.isPoint(n) && typeof n.Value == "function")
          o = function () {
            return n.Value();
          };
        else if (e.isFunction(n)) o = n;
        else {
          if (!e.isNumber(n))
            throw new Error(
              "JSXGraph: Can't create regressionPolynomial from degree of type'" +
                typeof n +
                "'."
            );
          o = function () {
            return n;
          };
        }
        if (arguments.length == 3 && e.isArray(r) && e.isArray(i)) f = 0;
        else {
          if (
            !(
              arguments.length == 2 &&
              e.isArray(r) &&
              r.length > 0 &&
              e.isPoint(r[0])
            )
          )
            throw new Error(
              "JSXGraph: Can't create regressionPolynomial. Wrong parameters."
            );
          f = 1;
        }
        return (
          (l = function (n, l) {
            var h,
              p,
              d,
              v,
              m,
              g,
              y,
              b,
              w,
              E = r.length;
            w = t.floor(o());
            if (!l) {
              if (f === 1) {
                (u = []), (a = []);
                for (h = 0; h < E; h++) (u[h] = r[h].X()), (a[h] = r[h].Y());
              }
              if (f === 0) {
                (u = []), (a = []);
                for (h = 0; h < E; h++)
                  e.isFunction(r[h]) ? u.push(r[h]()) : u.push(r[h]),
                    e.isFunction(i[h]) ? a.push(i[h]()) : a.push(i[h]);
              }
              d = [];
              for (p = 0; p < E; p++) d.push([1]);
              for (h = 1; h <= w; h++)
                for (p = 0; p < E; p++) d[p][h] = d[p][h - 1] * u[p];
              (m = a),
                (v = e.Math.transpose(d)),
                (g = e.Math.matMatMult(v, d)),
                (y = e.Math.matVecMult(v, m)),
                (s = e.Math.Numerics.Gauss(g, y)),
                (c = e.Math.Numerics.generatePolynomialTerm(s, w, "x", 3));
            }
            b = s[w];
            for (h = w - 1; h >= 0; h--) b = b * n + s[h];
            return b;
          }),
          (l.getTerm = function () {
            return c;
          }),
          l
        );
      },
      bezier: function (e) {
        var n,
          r = function (r) {
            return function (i, s) {
              var o = t.floor(i) * 3,
                u = i % 1,
                a = 1 - u;
              return (
                s || (n = t.floor(e.length / 3)),
                i < 0
                  ? e[0][r]()
                  : i >= n
                  ? e[e.length - 1][r]()
                  : isNaN(i)
                  ? NaN
                  : a * a * (a * e[o][r]() + 3 * u * e[o + 1][r]()) +
                    (3 * a * e[o + 2][r]() + u * e[o + 3][r]()) * u * u
              );
            };
          };
        return [
          r("X"),
          r("Y"),
          0,
          function () {
            return t.floor(e.length / 3);
          },
        ];
      },
      bspline: function (e, n) {
        var r,
          i = [],
          s = function (e, t) {
            var n,
              r = [];
            for (n = 0; n < e + t + 1; n++)
              n < t
                ? (r[n] = 0)
                : n <= e
                ? (r[n] = n - t + 1)
                : (r[n] = e - t + 2);
            return r;
          },
          o = function (e, t, n, r, i) {
            var s,
              o,
              u,
              a,
              f,
              l = [];
            t[i] <= e && e < t[i + 1] ? (l[i] = 1) : (l[i] = 0);
            for (s = 2; s <= r; s++)
              for (o = i - s + 1; o <= i; o++)
                o <= i - s + 1 || o < 0 ? (u = 0) : (u = l[o]),
                  o >= i ? (a = 0) : (a = l[o + 1]),
                  (f = t[o + s - 1] - t[o]),
                  f == 0 ? (l[o] = 0) : (l[o] = ((e - t[o]) / f) * u),
                  (f = t[o + s] - t[o + 1]),
                  f != 0 && (l[o] += ((t[o + s] - e) / f) * a);
            return l;
          },
          u = function (u) {
            return function (a, f) {
              var l = e.length,
                c,
                h,
                p,
                d = l - 1,
                v = n;
              if (d <= 0) return NaN;
              d + 2 <= v && (v = d + 1);
              if (a <= 0) return e[0][u]();
              if (a >= d - v + 2) return e[d][u]();
              (r = s(d, v)),
                (p = t.floor(a) + v - 1),
                (i = o(a, r, d, v, p)),
                (c = 0);
              for (h = p - v + 1; h <= p; h++)
                h < l && h >= 0 && (c += e[h][u]() * i[h]);
              return c;
            };
          };
        return [
          u("X"),
          u("Y"),
          0,
          function () {
            return e.length - 1;
          },
        ];
      },
      D: function (t, n) {
        var r = 1e-5,
          i = 1 / (r * 2);
        return arguments.length == 1 ||
          (arguments.length > 1 && !e.exists(arguments[1]))
          ? function (e, n) {
              return (t(e + r, n) - t(e - r, n)) * i;
            }
          : function (e, s) {
              return (t.apply(n, [e + r, s]) - t.apply(n, [e - r, s])) * i;
            };
      },
      riemann: function (e, n, r, i, s) {
        var o = [],
          u = [],
          a,
          f = 0,
          l,
          c = i,
          h,
          p,
          d,
          v,
          m = 0;
        (n = t.round(n)), (o[f] = c), (u[f] = 0);
        if (n > 0) {
          (l = (s - i) / n), (v = l * 0.01);
          for (a = 0; a < n; a++) {
            if (r === "right") h = e(c + l);
            else if (r === "middle") h = e(c + l * 0.5);
            else if (r === "left" || r === "trapezodial") h = e(c);
            else if (r === "lower") {
              h = e(c);
              for (p = c + v; p <= c + l; p += v) (d = e(p)), d < h && (h = d);
            } else if (r === "upper") {
              h = e(c);
              for (p = c + v; p <= c + l; p += v) (d = e(p)), d > h && (h = d);
            } else h = e(c + l * t.random());
            f++,
              (o[f] = c),
              (u[f] = h),
              f++,
              (c += l),
              r === "trapezodial" && (h = e(c)),
              (o[f] = c),
              (u[f] = h),
              f++,
              (o[f] = c),
              (u[f] = 0),
              (m += h * l);
          }
        }
        return [o, u, m];
      },
      riemannsum: function (e, n, r, i, s) {
        var o = 0,
          u,
          a,
          f = i,
          l,
          c,
          h,
          p;
        n = t.floor(n);
        if (n > 0) {
          (a = (s - i) / n), (p = a * 0.01);
          for (u = 0; u < n; u++) {
            if (r === "right") l = e(f + a);
            else if (r === "middle") l = e(f + a * 0.5);
            else if (r === "trapezodial") l = 0.5 * (e(f + a) + e(f));
            else if (r === "left") l = e(f);
            else if (r === "lower") {
              l = e(f);
              for (c = f + p; c <= f + a; c += p) (h = e(c)), h < l && (l = h);
            } else if (r === "upper") {
              l = e(f);
              for (c = f + p; c <= f + a; c += p) (h = e(c)), h > l && (l = h);
            } else l = e(f + a * t.random());
            (o += a * l), (f += a);
          }
        }
        return o;
      },
      rungeKutta: function (t, r, i, s, o) {
        var u = [],
          a = [],
          f = (i[1] - i[0]) / s,
          l = i[0],
          c,
          h,
          p,
          d,
          v,
          m = r.length,
          g,
          y = [],
          b = 0;
        e.isString(t) && (t = n[t] || n.euler), (g = t.s);
        for (c = 0; c < m; c++) u[c] = r[c];
        for (h = 0; h < s; h++) {
          y[b] = [];
          for (c = 0; c < m; c++) y[b][c] = u[c];
          b++, (d = []);
          for (p = 0; p < g; p++) {
            for (c = 0; c < m; c++) a[c] = 0;
            for (v = 0; v < p; v++)
              for (c = 0; c < m; c++) a[c] += t.A[p][v] * f * d[v][c];
            for (c = 0; c < m; c++) a[c] += u[c];
            d.push(o(l + t.c[p] * f, a));
          }
          for (c = 0; c < m; c++) a[c] = 0;
          for (v = 0; v < g; v++)
            for (c = 0; c < m; c++) a[c] += t.b[v] * d[v][c];
          for (c = 0; c < m; c++) u[c] = u[c] + f * a[c];
          l += f;
        }
        return y;
      },
      maxIterationsRoot: 80,
      maxIterationsMinimize: 500,
      fzero: function (n, r, i) {
        var s = e.Math.eps,
          o = this.maxIterationsRoot,
          u = 0,
          a = 0,
          f = s,
          l,
          c,
          h,
          p,
          d,
          v,
          m,
          g,
          y,
          b,
          w,
          E,
          S,
          x,
          T,
          N,
          C,
          k,
          L,
          A;
        if (e.isArray(r)) {
          if (r.length < 2)
            throw new Error(
              "JXG.Math.Numerics.fzero: length of array x0 has to be at least two."
            );
          (l = r[0]),
            (p = n.apply(i, [l])),
            a++,
            (c = r[1]),
            (d = n.apply(i, [c])),
            a++;
        } else {
          (l = r),
            (p = n.apply(i, [l])),
            a++,
            l == 0 ? (m = 1) : (m = l),
            (g = [
              0.9 * m,
              1.1 * m,
              m - 1,
              m + 1,
              0.5 * m,
              1.5 * m,
              -m,
              2 * m,
              -10 * m,
              10 * m,
            ]),
            (b = g.length);
          for (y = 0; y < b; y++) {
            (c = g[y]), (d = n.apply(i, [c])), a++;
            if (p * d <= 0) break;
          }
          c < l && ((w = l), (l = c), (c = w), (E = p), (p = d), (d = E));
        }
        if (p * d > 0)
          return e.isArray(r)
            ? this.fminbr(n, [l, c], i)
            : this.Newton(n, l, i);
        (h = l), (v = p);
        while (u < o) {
          (S = c - l),
            t.abs(v) < t.abs(d) &&
              ((l = c), (c = h), (h = l), (p = d), (d = v), (v = p)),
            (x = 2 * f * t.abs(c) + s * 0.5),
            (C = (h - c) * 0.5);
          if (t.abs(C) <= x && t.abs(d) <= f) return c;
          t.abs(S) >= x &&
            t.abs(p) > t.abs(d) &&
            ((L = h - c),
            l == h
              ? ((k = d / p), (T = L * k), (N = 1 - k))
              : ((N = p / v),
                (k = d / v),
                (A = d / p),
                (T = A * (L * N * (N - k) - (c - l) * (k - 1))),
                (N = (N - 1) * (k - 1) * (A - 1))),
            T > 0 ? (N = -N) : (T = -T),
            T < 0.75 * L * N - t.abs(x * N) * 0.5 &&
              T < t.abs(S * N * 0.5) &&
              (C = T / N)),
            t.abs(C) < x && (C > 0 ? (C = x) : (C = -x)),
            (l = c),
            (p = d),
            (c += C),
            (d = n.apply(i, [c])),
            a++;
          if ((d > 0 && v > 0) || (d < 0 && v < 0)) (h = l), (v = p);
          u++;
        }
        return c;
      },
      fminbr: function (n, r, i) {
        var s,
          o,
          u,
          a,
          f,
          l,
          c,
          h,
          p = (3 - t.sqrt(5)) * 0.5,
          d = e.Math.eps,
          v = t.sqrt(e.Math.eps),
          m = this.maxIterationsMinimize,
          g = 0,
          y,
          b,
          w,
          E,
          S,
          x,
          T,
          N,
          C = 0;
        if (!e.isArray(r) || r.length < 2)
          throw new Error(
            "JXG.Math.Numerics.fminbr: length of array x0 has to be at least two."
          );
        (s = r[0]),
          (o = r[1]),
          (a = s + p * (o - s)),
          (c = n.apply(i, [a])),
          C++,
          (u = a),
          (f = a),
          (l = c),
          (h = c);
        while (g < m) {
          (y = o - s), (b = (s + o) * 0.5), (w = v * t.abs(u) + d / 3);
          if (t.abs(u - b) + y * 0.5 <= 2 * w) return u;
          (E = p * (u < b ? o - u : s - u)),
            t.abs(u - f) >= w &&
              ((T = (u - f) * (l - c)),
              (x = (u - a) * (l - h)),
              (S = (u - a) * x - (u - f) * T),
              (x = 2 * (x - T)),
              x > 0 ? (S = -S) : (x = -x),
              t.abs(S) < t.abs(E * x) &&
                S > x * (s - u + 2 * w) &&
                S < x * (o - u - 2 * w) &&
                (E = S / x)),
            t.abs(E) < w && (E > 0 ? (E = w) : (E = -w)),
            (T = u + E),
            (N = n.apply(i, [T])),
            C++;
          if (N <= l)
            T < u ? (o = u) : (s = u),
              (a = f),
              (f = u),
              (u = T),
              (c = h),
              (h = l),
              (l = N);
          else {
            T < u ? (s = T) : (o = T);
            if (N <= h || f == u) (a = f), (f = T), (c = h), (h = N);
            else if (N <= c || a == u || a == f) (a = T), (c = N);
          }
          g++;
        }
        return u;
      },
      reuleauxPolygon: function (n, r) {
        var i = t.PI * 2,
          s = i / r,
          o = (r - 1) / 2,
          u,
          a = 0,
          f = function (f, l) {
            return function (c, h) {
              h ||
                ((a = n[0].Dist(n[o])),
                (u = e.Math.Geometry.rad(
                  [n[0].X() + 1, n[0].Y()],
                  n[0],
                  n[o % r]
                )));
              var p = ((c % i) + i) % i,
                v = t.floor(p / s) % r;
              return isNaN(v)
                ? v
                : ((p = p * 0.5 + v * s * 0.5 + u), n[v][f]() + a * t[l](p));
            };
          };
        return [f("X", "cos"), f("Y", "sin"), 0, t.PI * 2];
      },
      RamerDouglasPeuker: function (n, r) {
        var i = [],
          s,
          o,
          u,
          a = function (e, t, n, r, i) {
            var s = f(e, t, n);
            s[0] > r
              ? (a(e, t, s[1], r, i), a(e, s[1], n, r, i))
              : i.push(e[n]);
          },
          f = function (n, r, i) {
            var s = 0,
              o = r,
              u,
              a,
              f,
              l,
              c,
              h,
              p,
              d,
              v,
              m,
              g;
            if (i - r < 2) return [-1, 0];
            (f = n[r].scrCoords), (l = n[i].scrCoords);
            if (isNaN(f[1] + f[2] + l[1] + l[2])) return [NaN, i];
            for (a = r + 1; a < i; a++)
              (c = n[a].scrCoords),
                (h = c[1] - f[1]),
                (p = c[2] - f[2]),
                (d = l[1] - f[1]),
                (v = l[2] - f[2]),
                (m = d * d + v * v),
                m >= e.Math.eps
                  ? ((g = (h * d + p * v) / m),
                    g < 0 ? (g = 0) : g > 1 && (g = 1),
                    (h -= g * d),
                    (p -= g * v),
                    (u = h * h + p * p))
                  : ((g = 0), (u = h * h + p * p)),
                u > s && ((s = u), (o = a));
            return [t.sqrt(s), o];
          };
        (u = n.length), (s = 0);
        while (s < u && isNaN(n[s].scrCoords[1] + n[s].scrCoords[2])) s++;
        o = u - 1;
        while (o > s && isNaN(n[o].scrCoords[1] + n[o].scrCoords[2])) o--;
        return s > o || s == u || ((i[0] = n[s]), a(n, s, o, r, i)), i;
      },
    };
  })(JXG, Math)),
  (JXG.Math.Statistics = {
    sum: function (e) {
      var t,
        n = e.length,
        r = 0;
      for (t = 0; t < n; t++) r += e[t];
      return r;
    },
    prod: function (e) {
      var t,
        n = e.length,
        r = 1;
      for (t = 0; t < n; t++) r *= e[t];
      return r;
    },
    mean: function (e) {
      return e.length > 0 ? this.sum(e) / e.length : 0;
    },
    median: function (e) {
      var t, n;
      return e.length > 0
        ? ((t = e.slice(0)),
          t.sort(function (e, t) {
            return e - t;
          }),
          (n = t.length),
          n % 2 == 1
            ? t[parseInt(n * 0.5)]
            : (t[n * 0.5 - 1] + t[n * 0.5]) * 0.5)
        : 0;
    },
    variance: function (e) {
      var t,
        n,
        r,
        i = e.length;
      if (i > 1) {
        (t = this.mean(e)), (n = 0);
        for (r = 0; r < i; r++) n += (e[r] - t) * (e[r] - t);
        return n / (e.length - 1);
      }
      return 0;
    },
    sd: function (e) {
      return Math.sqrt(this.variance(e));
    },
    weightedMean: function (e, t) {
      if (e.length != t.length)
        throw new Error(
          "JSXGraph error (Math.Statistics.weightedMean): Array dimension mismatch."
        );
      return e.length > 0 ? this.mean(this.multiply(e, t)) : 0;
    },
    max: function (e) {
      return Math.max.apply(this, e);
    },
    min: function (e) {
      return Math.min.apply(this, e);
    },
    range: function (e) {
      return [this.min(e), this.max(e)];
    },
    abs: function (e) {
      var t, n, r;
      if (JXG.isArray(e)) {
        (n = e.length), (r = []);
        for (t = 0; t < n; t++) r[t] = Math.abs(e[t]);
      } else r = Math.abs(e);
      return r;
    },
    add: function (e, t) {
      var n,
        r,
        i = [];
      if (JXG.isArray(e) && JXG.isNumber(t)) {
        r = e.length;
        for (n = 0; n < r; n++) i[n] = e[n] + t;
      } else if (JXG.isNumber(e) && JXG.isArray(t)) {
        r = t.length;
        for (n = 0; n < r; n++) i[n] = e + t[n];
      } else if (JXG.isArray(e) && JXG.isArray(t)) {
        r = Math.min(e.length, t.length);
        for (n = 0; n < r; n++) i[n] = e[n] + t[n];
      } else i = e + t;
      return i;
    },
    div: function (e, t) {
      var n,
        r,
        i = [];
      if (JXG.isArray(e) && JXG.isNumber(t)) {
        r = e.length;
        for (n = 0; n < r; n++) i[n] = e[n] / t;
      } else if (JXG.isNumber(e) && JXG.isArray(t)) {
        r = t.length;
        for (n = 0; n < r; n++) i[n] = e / t[n];
      } else if (JXG.isArray(e) && JXG.isArray(t)) {
        r = Math.min(e.length, t.length);
        for (n = 0; n < r; n++) i[n] = e[n] / t[n];
      } else i = e / t;
      return i;
    },
    divide: JXG.shortcut(JXG.Math.Statistics, "div"),
    mod: function (e, t, n) {
      var r,
        i,
        s = [],
        o = function (e, t) {
          return e % t;
        };
      (n = JXG.def(n, !1)), n && (o = JXG.Math.mod);
      if (JXG.isArray(e) && JXG.isNumber(t)) {
        i = e.length;
        for (r = 0; r < i; r++) s[r] = o(e[r], t);
      } else if (JXG.isNumber(e) && JXG.isArray(t)) {
        i = t.length;
        for (r = 0; r < i; r++) s[r] = o(e, t[r]);
      } else if (JXG.isArray(e) && JXG.isArray(t)) {
        i = Math.min(e.length, t.length);
        for (r = 0; r < i; r++) s[r] = o(e[r], t[r]);
      } else s = o(e, t);
      return s;
    },
    multiply: function (e, t) {
      var n,
        r,
        i = [];
      if (JXG.isArray(e) && JXG.isNumber(t)) {
        r = e.length;
        for (n = 0; n < r; n++) i[n] = e[n] * t;
      } else if (JXG.isNumber(e) && JXG.isArray(t)) {
        r = t.length;
        for (n = 0; n < r; n++) i[n] = e * t[n];
      } else if (JXG.isArray(e) && JXG.isArray(t)) {
        r = Math.min(e.length, t.length);
        for (n = 0; n < r; n++) i[n] = e[n] * t[n];
      } else i = e * t;
      return i;
    },
    subtract: function (e, t) {
      var n,
        r,
        i = [];
      if (JXG.isArray(e) && JXG.isNumber(t)) {
        r = e.length;
        for (n = 0; n < r; n++) i[n] = e[n] - t;
      } else if (JXG.isNumber(e) && JXG.isArray(t)) {
        r = t.length;
        for (n = 0; n < r; n++) i[n] = e - t[n];
      } else if (JXG.isArray(e) && JXG.isArray(t)) {
        r = Math.min(e.length, t.length);
        for (n = 0; n < r; n++) i[n] = e[n] - t[n];
      } else i = e - t;
      return i;
    },
  }),
  (JXG.Math.Symbolic = (function (e, t) {
    return {
      generateSymbolicCoordinatesPartial: function (t, n, r, i) {
        var s = function (e) {
            var t;
            return (
              i === "underscore"
                ? (t = "" + r + "_{" + e + "}")
                : i == "brace"
                ? (t = "" + r + "[" + e + "]")
                : (t = "" + r + "" + e),
              t
            );
          },
          o = n.ancestors,
          u = 0,
          a,
          f,
          l;
        (t.listOfFreePoints = []), (t.listOfDependantPoints = []);
        for (f in o) {
          a = 0;
          if (e.isPoint(o[f])) {
            for (l in o[f].ancestors) a++;
            a === 0
              ? ((o[f].symbolic.x = o[f].coords.usrCoords[1]),
                (o[f].symbolic.y = o[f].coords.usrCoords[2]),
                t.listOfFreePoints.push(o[f]))
              : (u++,
                (o[f].symbolic.x = s(u)),
                u++,
                (o[f].symbolic.y = s(u)),
                t.listOfDependantPoints.push(o[f]));
          }
        }
        return e.isPoint(n) && ((n.symbolic.x = "x"), (n.symbolic.y = "y")), u;
      },
      clearSymbolicCoordinates: function (t) {
        var n = function (t) {
          var n,
            r = (t && t.length) || 0;
          for (n = 0; n < r; n++)
            e.isPoint(t[n]) && ((t[n].symbolic.x = ""), (t[n].symbolic.y = ""));
        };
        n(t.listOfFreePoints),
          n(t.listOfDependantPoints),
          delete t.listOfFreePoints,
          delete t.listOfDependantPoints;
      },
      generatePolynomials: function (t, n, r) {
        var i = n.ancestors,
          s,
          o = [],
          u = [],
          a,
          f,
          l;
        r && this.generateSymbolicCoordinatesPartial(t, n, "u", "brace"),
          (i[n.id] = n);
        for (a in i) {
          (s = 0), (o = []);
          if (e.isPoint(i[a])) {
            for (f in i[a].ancestors) s++;
            if (s > 0) {
              o = i[a].generatePolynomial();
              for (l = 0; l < o.length; l++) u.push(o[l]);
            }
          }
        }
        return r && this.clearSymbolicCoordinates(t), u;
      },
      geometricLocusByGroebnerBase: function (n, r) {
        var i = this.generateSymbolicCoordinatesPartial(n, r, "u", "brace"),
          s,
          o,
          u,
          a = {},
          f = new e.Coords(e.COORDS_BY_USR, [0, 0], n),
          l = new e.Coords(e.COORDS_BY_USR, [n.canvasWidth, n.canvasHeight], n),
          c,
          h,
          p,
          d = 1,
          v = 0,
          m = 0,
          g = 0,
          y,
          b,
          w,
          E,
          S,
          x,
          T,
          N = function (e, t) {
            var n;
            for (n = 0; n < t.length; n++) if (t[n].id === e) return !0;
            return !1;
          },
          C = n.options.locus;
        e.Server.modules.geoloci === t && e.Server.loadModule("geoloci");
        if (e.Server.modules.geoloci === t)
          throw new Error(
            "JSXGraph: Unable to load JXG.Server module 'geoloci.py'."
          );
        (E = f.usrCoords[1]),
          (S = l.usrCoords[1]),
          (x = l.usrCoords[2]),
          (T = f.usrCoords[2]);
        if (C.translateToOrigin && n.listOfFreePoints.length > 0) {
          C.toOrigin !== t &&
          C.toOrigin != null &&
          N(C.toOrigin.id, n.listOfFreePoints)
            ? (c = C.toOrigin)
            : (c = n.listOfFreePoints[0]),
            (v = c.symbolic.x),
            (m = c.symbolic.y);
          for (p = 0; p < n.listOfFreePoints.length; p++)
            (n.listOfFreePoints[p].symbolic.x -= v),
              (n.listOfFreePoints[p].symbolic.y -= m);
          (E -= v), (S -= v), (x -= m), (T -= m);
          if (C.translateTo10 && n.listOfFreePoints.length > 1) {
            C.to10 !== t &&
            C.to10 != null &&
            C.to10.id != C.toOrigin.id &&
            N(C.to10.id, n.listOfFreePoints)
              ? (h = C.to10)
              : n.listOfFreePoints[0].id == c.id
              ? (h = n.listOfFreePoints[1])
              : (h = n.listOfFreePoints[0]),
              (g = e.Math.Geometry.rad(
                [1, 0],
                [0, 0],
                [h.symbolic.x, h.symbolic.y]
              )),
              (y = Math.cos(-g)),
              (b = Math.sin(-g));
            for (p = 0; p < n.listOfFreePoints.length; p++)
              (w = n.listOfFreePoints[p].symbolic.x),
                (n.listOfFreePoints[p].symbolic.x =
                  y * n.listOfFreePoints[p].symbolic.x -
                  b * n.listOfFreePoints[p].symbolic.y),
                (n.listOfFreePoints[p].symbolic.y =
                  b * w + y * n.listOfFreePoints[p].symbolic.y);
            (h.symbolic.y = 0),
              (w = E),
              (E = y * E - b * x),
              (x = b * w + y * x),
              (w = S),
              (S = y * S - b * T),
              (T = b * w + y * T);
            if (C.stretch && Math.abs(h.symbolic.x) > e.Math.eps) {
              d = h.symbolic.x;
              for (p = 0; p < n.listOfFreePoints.length; p++)
                (n.listOfFreePoints[p].symbolic.x /= d),
                  (n.listOfFreePoints[p].symbolic.y /= d);
              for (p in n.objects)
                n.objects[p].elementClass == e.OBJECT_CLASS_CIRCLE &&
                  n.objects[p].method == "pointRadius" &&
                  ((a[p] = n.objects[p].radius), (n.objects[p].radius /= d));
              (E /= d), (S /= d), (x /= d), (T /= d), (h.symbolic.x = 1);
            }
          }
          for (p = 0; p < n.listOfFreePoints.length; p++)
            (w = n.listOfFreePoints[p].symbolic.x),
              Math.abs(w) < e.Math.eps &&
                (n.listOfFreePoints[p].symbolic.x = 0),
              Math.abs(w - Math.round(w)) < e.Math.eps &&
                (n.listOfFreePoints[p].symbolic.x = Math.round(w)),
              (w = n.listOfFreePoints[p].symbolic.y),
              Math.abs(w) < e.Math.eps &&
                (n.listOfFreePoints[p].symbolic.y = 0),
              Math.abs(w - Math.round(w)) < e.Math.eps &&
                (n.listOfFreePoints[p].symbolic.y = Math.round(w));
        }
        (s = this.generatePolynomials(n, r)),
          (o = s.join(",")),
          (this.cbp = function (e) {
            u = e;
          }),
          (this.cb = e.bind(this.cbp, this)),
          e.Server.modules.geoloci.lociCoCoA(
            E,
            S,
            x,
            T,
            i,
            o,
            d,
            g,
            v,
            m,
            this.cb,
            !0
          ),
          this.clearSymbolicCoordinates(n);
        for (p in a) n.objects[p].radius = a[p];
        return u;
      },
    };
  })(JXG)),
  (JXG.Math.Geometry = {}),
  JXG.extend(JXG.Math.Geometry, {
    angle: function (e, t, n) {
      var r = [],
        i = [],
        s = [],
        o,
        u,
        a,
        f;
      return (
        e.coords == null
          ? ((r[0] = e[0]), (r[1] = e[1]))
          : ((r[0] = e.coords.usrCoords[1]), (r[1] = e.coords.usrCoords[2])),
        t.coords == null
          ? ((i[0] = t[0]), (i[1] = t[1]))
          : ((i[0] = t.coords.usrCoords[1]), (i[1] = t.coords.usrCoords[2])),
        n.coords == null
          ? ((s[0] = n[0]), (s[1] = n[1]))
          : ((s[0] = n.coords.usrCoords[1]), (s[1] = n.coords.usrCoords[2])),
        (o = r[0] - i[0]),
        (u = r[1] - i[1]),
        (a = s[0] - i[0]),
        (f = s[1] - i[1]),
        Math.atan2(o * f - u * a, o * a + u * f)
      );
    },
    trueAngle: function (e, t, n) {
      return this.rad(e, t, n) * 57.29577951308232;
    },
    rad: function (e, t, n) {
      var r, i, s, o, u, a, f;
      return (
        e.coords == null
          ? ((r = e[0]), (i = e[1]))
          : ((r = e.coords.usrCoords[1]), (i = e.coords.usrCoords[2])),
        t.coords == null
          ? ((s = t[0]), (o = t[1]))
          : ((s = t.coords.usrCoords[1]), (o = t.coords.usrCoords[2])),
        n.coords == null
          ? ((u = n[0]), (a = n[1]))
          : ((u = n.coords.usrCoords[1]), (a = n.coords.usrCoords[2])),
        (f = Math.atan2(a - o, u - s) - Math.atan2(i - o, r - s)),
        f < 0 && (f += 6.283185307179586),
        f
      );
    },
    angleBisector: function (e, t, n, r) {
      var i = e.coords.usrCoords,
        s = t.coords.usrCoords,
        o = n.coords.usrCoords,
        u = i[1] - s[1],
        a = i[2] - s[2],
        f = Math.sqrt(u * u + a * a),
        l,
        c,
        h;
      return (
        JXG.exists(r) || (r = e.board),
        (u /= f),
        (a /= f),
        (l = Math.acos(u)),
        a < 0 && (l *= -1),
        l < 0 && (l += 2 * Math.PI),
        (u = o[1] - s[1]),
        (a = o[2] - s[2]),
        (f = Math.sqrt(u * u + a * a)),
        (u /= f),
        (a /= f),
        (c = Math.acos(u)),
        a < 0 && (c *= -1),
        c < 0 && (c += 2 * Math.PI),
        (h = (l + c) * 0.5),
        l > c && (h += Math.PI),
        (u = Math.cos(h) + s[1]),
        (a = Math.sin(h) + s[2]),
        new JXG.Coords(JXG.COORDS_BY_USER, [u, a], r)
      );
    },
    reflection: function (e, t, n) {
      var r = t.coords.usrCoords,
        i = e.point1.coords.usrCoords,
        s = e.point2.coords.usrCoords,
        o,
        u,
        a,
        f,
        l,
        c,
        h;
      return (
        JXG.exists(n) || (n = t.board),
        (l = s[1] - i[1]),
        (c = s[2] - i[2]),
        (o = r[1] - i[1]),
        (u = r[2] - i[2]),
        (h = (l * u - c * o) / (l * l + c * c)),
        (a = r[1] + 2 * h * c),
        (f = r[2] - 2 * h * l),
        new JXG.Coords(JXG.COORDS_BY_USER, [a, f], n)
      );
    },
    rotation: function (e, t, n, r) {
      var i = t.coords.usrCoords,
        s = e.coords.usrCoords,
        o,
        u,
        a,
        f,
        l,
        c;
      return (
        JXG.exists(r) || (r = t.board),
        (o = i[1] - s[1]),
        (u = i[2] - s[2]),
        (a = Math.cos(n)),
        (f = Math.sin(n)),
        (l = o * a - u * f + s[1]),
        (c = o * f + u * a + s[2]),
        new JXG.Coords(JXG.COORDS_BY_USER, [l, c], r)
      );
    },
    perpendicular: function (e, t, n) {
      var r = e.point1.coords.usrCoords,
        i = e.point2.coords.usrCoords,
        s = t.coords.usrCoords,
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        p;
      return (
        JXG.exists(n) || (n = t.board),
        t == e.point1
          ? ((o = r[1] + i[2] - r[2]), (u = r[2] - i[1] + r[1]), (a = !0))
          : t == e.point2
          ? ((o = i[1] + r[2] - i[2]), (u = i[2] - r[1] + i[1]), (a = !1))
          : (Math.abs(r[1] - i[1]) > JXG.Math.eps &&
              Math.abs(
                s[2] - ((r[2] - i[2]) * (s[1] - r[1])) / (r[1] - i[1]) - r[2]
              ) < JXG.Math.eps) ||
            (Math.abs(r[1] - i[1]) <= JXG.Math.eps &&
              Math.abs(r[1] - s[1]) < JXG.Math.eps)
          ? ((o = s[1] + i[2] - s[2]),
            (u = s[2] - i[1] + s[1]),
            (a = !0),
            Math.abs(o - s[1]) < JXG.Math.eps &&
              Math.abs(u - s[2]) < JXG.Math.eps &&
              ((o = s[1] + r[2] - s[2]), (u = s[2] - r[1] + s[1]), (a = !1)))
          : ((f = r[2] - i[2]),
            (l = r[1] - i[1]),
            (c = i[1] * f - i[2] * l),
            (h = s[1] * l + s[2] * f),
            (p = f * f + l * l),
            Math.abs(p) < JXG.Math.eps && (p = JXG.Math.eps),
            (o = (c * f + h * l) / p),
            (u = (h * f - c * l) / p),
            (a = !0)),
        [new JXG.Coords(JXG.COORDS_BY_USER, [o, u], n), a]
      );
    },
    circumcenterMidpoint: JXG.shortcut(JXG.Math.Geometry, "circumcenter"),
    circumcenter: function (e, t, n, r) {
      var i = e.coords.usrCoords,
        s = t.coords.usrCoords,
        o = n.coords.usrCoords,
        u,
        a,
        f,
        l;
      return (
        JXG.exists(r) || (r = e.board),
        (u = [s[0] - i[0], -s[2] + i[2], s[1] - i[1]]),
        (a = [(i[0] + s[0]) * 0.5, (i[1] + s[1]) * 0.5, (i[2] + s[2]) * 0.5]),
        (f = JXG.Math.crossProduct(u, a)),
        (u = [o[0] - s[0], -o[2] + s[2], o[1] - s[1]]),
        (a = [(s[0] + o[0]) * 0.5, (s[1] + o[1]) * 0.5, (s[2] + o[2]) * 0.5]),
        (l = JXG.Math.crossProduct(u, a)),
        new JXG.Coords(JXG.COORDS_BY_USER, JXG.Math.crossProduct(f, l), r)
      );
    },
    distance: function (e, t) {
      var n = 0,
        r,
        i;
      if (e.length != t.length) return NaN;
      i = e.length;
      for (r = 0; r < i; r++) n += (e[r] - t[r]) * (e[r] - t[r]);
      return Math.sqrt(n);
    },
    affineDistance: function (e, t) {
      var n;
      return e.length != t.length
        ? NaN
        : ((n = this.distance(e, t)),
          n > JXG.Math.eps &&
          (Math.abs(e[0]) < JXG.Math.eps || Math.abs(t[0]) < JXG.Math.eps)
            ? Infinity
            : n);
    },
    calcStraight: function (e, t, n, r) {
      var i, s, o, u, a, f, l, c, h, p, d, v;
      r == null && (r = 10),
        (a = e.visProp.straightfirst),
        (f = e.visProp.straightlast),
        Math.abs(t.scrCoords[0]) < JXG.Math.eps && (a = !0),
        Math.abs(n.scrCoords[0]) < JXG.Math.eps && (f = !0);
      if (!a && !f) return;
      (l = []),
        (l[0] =
          e.stdform[0] -
          (e.stdform[1] * e.board.origin.scrCoords[1]) / e.board.unitX +
          (e.stdform[2] * e.board.origin.scrCoords[2]) / e.board.unitY),
        (l[1] = e.stdform[1] / e.board.unitX),
        (l[2] = e.stdform[2] / -e.board.unitY);
      if (isNaN(l[0] + l[1] + l[2])) return;
      (c = []),
        (c[0] = JXG.Math.crossProduct(l, [r, 0, 1])),
        (c[1] = JXG.Math.crossProduct(l, [r, 1, 0])),
        (c[2] = JXG.Math.crossProduct(l, [-r - e.board.canvasHeight, 0, 1])),
        (c[3] = JXG.Math.crossProduct(l, [-r - e.board.canvasWidth, 1, 0]));
      for (h = 0; h < 4; h++)
        if (Math.abs(c[h][0]) > JXG.Math.eps) {
          for (p = 2; p > 0; p--) c[h][p] /= c[h][0];
          c[h][0] = 1;
        }
      (i = !1),
        (s = !1),
        !a &&
          Math.abs(t.usrCoords[0]) >= JXG.Math.eps &&
          t.scrCoords[1] >= 0 &&
          t.scrCoords[1] <= e.board.canvasWidth &&
          t.scrCoords[2] >= 0 &&
          t.scrCoords[2] <= e.board.canvasHeight &&
          (i = !0),
        !f &&
          Math.abs(n.usrCoords[0]) >= JXG.Math.eps &&
          n.scrCoords[1] >= 0 &&
          n.scrCoords[1] <= e.board.canvasWidth &&
          n.scrCoords[2] >= 0 &&
          n.scrCoords[2] <= e.board.canvasHeight &&
          (s = !0),
        Math.abs(c[1][0]) < JXG.Math.eps
          ? ((o = c[0]), (u = c[2]))
          : Math.abs(c[0][0]) < JXG.Math.eps
          ? ((o = c[1]), (u = c[3]))
          : c[1][2] < 0
          ? ((o = c[0]),
            c[3][2] > e.board.canvasHeight ? (u = c[2]) : (u = c[3]))
          : c[1][2] > e.board.canvasHeight
          ? ((o = c[2]), c[3][2] < 0 ? (u = c[0]) : (u = c[3]))
          : ((o = c[1]),
            c[3][2] < 0
              ? (u = c[0])
              : c[3][2] > e.board.canvasHeight
              ? (u = c[2])
              : (u = c[3])),
        (o = new JXG.Coords(JXG.COORDS_BY_SCREEN, o.slice(1), e.board)),
        (u = new JXG.Coords(JXG.COORDS_BY_SCREEN, u.slice(1), e.board));
      if (!i && !s) {
        if (
          !a &&
          f &&
          !this.isSameDirection(t, n, o) &&
          !this.isSameDirection(t, n, u)
        )
          return;
        if (
          a &&
          !f &&
          !this.isSameDirection(n, t, o) &&
          !this.isSameDirection(n, t, u)
        )
          return;
      }
      i
        ? s || (this.isSameDir(t, n, o, u) ? (v = u) : (v = o))
        : s
        ? this.isSameDir(t, n, o, u)
          ? (d = o)
          : (d = u)
        : this.isSameDir(t, n, o, u)
        ? ((d = o), (v = u))
        : ((v = o), (d = u)),
        d && t.setCoordinates(JXG.COORDS_BY_USER, d.usrCoords.slice(1)),
        v && n.setCoordinates(JXG.COORDS_BY_USER, v.usrCoords.slice(1));
    },
    isSameDir: function (e, t, n, r) {
      var i = t.usrCoords[1] - e.usrCoords[1],
        s = t.usrCoords[2] - e.usrCoords[2],
        o = r.usrCoords[1] - n.usrCoords[1],
        u = r.usrCoords[2] - n.usrCoords[2];
      return (
        Math.abs(t.usrCoords[0]) < JXG.Math.eps &&
          ((i = t.usrCoords[1]), (s = t.usrCoords[2])),
        Math.abs(e.usrCoords[0]) < JXG.Math.eps &&
          ((i = -e.usrCoords[1]), (s = -e.usrCoords[2])),
        i * o + s * u >= 0
      );
    },
    isSameDirection: function (e, t, n) {
      var r,
        i,
        s,
        o,
        u = !1;
      (r = t.usrCoords[1] - e.usrCoords[1]),
        (i = t.usrCoords[2] - e.usrCoords[2]),
        (s = n.usrCoords[1] - e.usrCoords[1]),
        (o = n.usrCoords[2] - e.usrCoords[2]),
        Math.abs(r) < JXG.Math.eps && (r = 0),
        Math.abs(i) < JXG.Math.eps && (i = 0),
        Math.abs(s) < JXG.Math.eps && (s = 0),
        Math.abs(o) < JXG.Math.eps && (o = 0);
      if (r >= 0 && s >= 0) {
        if ((i >= 0 && o >= 0) || (i <= 0 && o <= 0)) u = !0;
      } else
        r <= 0 &&
          s <= 0 &&
          ((i >= 0 && o >= 0) || (i <= 0 && o <= 0)) &&
          (u = !0);
      return u;
    },
    intersectLineLine: function (e, t, n) {
      var r = e.point1.coords.usrCoords,
        i = e.point2.coords.usrCoords,
        s = t.point1.coords.usrCoords,
        o = t.point2.coords.usrCoords,
        u,
        a,
        f,
        l,
        c;
      return (
        JXG.exists(n) || (n = e.board),
        (u = r[1] * i[2] - r[2] * i[1]),
        (a = s[1] * o[2] - s[2] * o[1]),
        (f = (i[2] - r[2]) * (s[1] - o[1]) - (r[1] - i[1]) * (o[2] - s[2])),
        Math.abs(f) < JXG.Math.eps && (f = JXG.Math.eps),
        (l = (u * (s[1] - o[1]) - a * (r[1] - i[1])) / f),
        (c = (a * (i[2] - r[2]) - u * (o[2] - s[2])) / f),
        new JXG.Coords(JXG.COORDS_BY_USER, [l, c], n)
      );
    },
    intersectCircleLine: function (e, t, n) {
      var r = t.point1.coords.usrCoords,
        i = t.point2.coords.usrCoords,
        s = e.center.coords.usrCoords,
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g,
        y,
        b,
        w,
        E,
        S,
        x,
        T;
      return (
        JXG.exists(n) || (n = t.board),
        (o = t.point1.Dist(t.point2)),
        o > 0
          ? ((u = e.center.Dist(t.point1)),
            (a = e.center.Dist(t.point2)),
            (f = (u * u + o * o - a * a) / (2 * o)),
            (l = u * u - f * f),
            (l = l < 0 ? 0 : l),
            (c = Math.sqrt(l)),
            (h = e.Radius()),
            (p = Math.sqrt(h * h - c * c)),
            (d = i[1] - r[1]),
            (v = i[2] - r[2]),
            (m = s[1] + (c / o) * v),
            (g = s[2] - (c / o) * d),
            (u = i[1] * v - i[2] * d),
            (a = m * d + g * v),
            (y = v * v + d * d),
            Math.abs(y) < JXG.Math.eps && (y = JXG.Math.eps),
            (b = (u * v + a * d) / y),
            (w = (a * v - u * d) / y),
            (E = p / o),
            (S = new JXG.Coords(JXG.COORDS_BY_USER, [b + E * d, w + E * v], n)),
            (x = new JXG.Coords(JXG.COORDS_BY_USER, [b - E * d, w - E * v], n)),
            (T = e.center.coords.distance(JXG.COORDS_BY_USER, S)),
            h < T - 1 || isNaN(T) ? [0] : [2, S, x])
          : [0]
      );
    },
    intersectCircleCircle: function (e, t, n) {
      var r = {},
        i = e.Radius(),
        s = t.Radius(),
        o = e.center.coords.usrCoords,
        u = t.center.coords.usrCoords,
        a,
        f,
        l,
        c,
        h,
        p,
        d;
      return (
        JXG.exists(n) || (n = e.board),
        (a = i + s),
        (f = Math.abs(i - s)),
        (l = e.center.coords.distance(JXG.COORDS_BY_USER, t.center.coords)),
        l > a
          ? [0]
          : l < f
          ? [0]
          : l == 0
          ? [0]
          : ((r[0] = 1),
            (c = u[1] - o[1]),
            (h = u[2] - o[2]),
            (p = (l * l - s * s + i * i) / (2 * l)),
            (d = Math.sqrt(i * i - p * p)),
            (r[1] = new JXG.Coords(
              JXG.COORDS_BY_USER,
              [
                o[1] + (p / l) * c + (d / l) * h,
                o[2] + (p / l) * h - (d / l) * c,
              ],
              n
            )),
            (r[2] = new JXG.Coords(
              JXG.COORDS_BY_USER,
              [
                o[1] + (p / l) * c - (d / l) * h,
                o[2] + (p / l) * h + (d / l) * c,
              ],
              n
            )),
            r)
      );
    },
    meet: function (e, t, n, r) {
      var i = JXG.Math.eps;
      return Math.abs(e[3]) < i && Math.abs(t[3]) < i
        ? this.meetLineLine(e, t, n, r)
        : Math.abs(e[3]) >= i && Math.abs(t[3]) < i
        ? this.meetLineCircle(t, e, n, r)
        : Math.abs(e[3]) < i && Math.abs(t[3]) >= i
        ? this.meetLineCircle(e, t, n, r)
        : this.meetCircleCircle(e, t, n, r);
    },
    meetLineLine: function (e, t, n, r) {
      var i = JXG.Math.crossProduct(e, t);
      return (
        Math.abs(i[0]) > JXG.Math.eps &&
          ((i[1] /= i[0]), (i[2] /= i[0]), (i[0] = 1)),
        new JXG.Coords(JXG.COORDS_BY_USER, i, r)
      );
    },
    meetLineCircle: function (e, t, n, r) {
      var i, s, o, u, a, f, l, c, h, p;
      return t[4] < JXG.Math.eps
        ? Math.abs(JXG.Math.innerProduct([1, t[6], t[7]], e, 3)) < JXG.Math.eps
          ? new JXG.Coords(JXG.COORDS_BY_USER, t.slice(6, 8), r)
          : new JXG.Coords(JXG.COORDS_BY_USER, [NaN, NaN], r)
        : ((o = t[0]),
          (s = t.slice(1, 3)),
          (i = t[3]),
          (u = e[0]),
          (a = e.slice(1, 3)),
          (f = i),
          (l = s[0] * a[1] - s[1] * a[0]),
          (c = i * u * u - (s[0] * a[0] + s[1] * a[1]) * u + o),
          (h = l * l - 4 * f * c),
          h >= 0
            ? ((h = Math.sqrt(h)),
              (p = [(-l + h) / (2 * f), (-l - h) / (2 * f)]),
              n == 0
                ? new JXG.Coords(
                    JXG.COORDS_BY_USER,
                    [-p[0] * -a[1] - u * a[0], -p[0] * a[0] - u * a[1]],
                    r
                  )
                : new JXG.Coords(
                    JXG.COORDS_BY_USER,
                    [-p[1] * -a[1] - u * a[0], -p[1] * a[0] - u * a[1]],
                    r
                  ))
            : new JXG.Coords(JXG.COORDS_BY_USER, [0, 0, 0], r));
    },
    meetCircleCircle: function (e, t, n, r) {
      var i;
      return e[4] < JXG.Math.eps
        ? Math.abs(this.distance(e.slice(6, 2), t.slice(6, 8)) - t[4]) <
          JXG.Math.eps
          ? new JXG.Coords(JXG.COORDS_BY_USER, e.slice(6, 8), r)
          : new JXG.Coords(JXG.COORDS_BY_USER, [0, 0, 0], r)
        : t[4] < JXG.Math.eps
        ? Math.abs(this.distance(t.slice(6, 2), e.slice(6, 8)) - e[4]) <
          JXG.Math.eps
          ? new JXG.Coords(JXG.COORDS_BY_USER, t.slice(6, 8), r)
          : new JXG.Coords(JXG.COORDS_BY_USER, [0, 0, 0], r)
        : ((i = [
            t[3] * e[0] - e[3] * t[0],
            t[3] * e[1] - e[3] * t[1],
            t[3] * e[2] - e[3] * t[2],
            0,
            1,
            Infinity,
            Infinity,
            Infinity,
          ]),
          (i = JXG.Math.normalize(i)),
          this.meetLineCircle(i, e, n, r));
    },
    meetCurveCurve: function (e, t, n, r, i) {
      var s = 0,
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g,
        y,
        b;
      JXG.exists(i) || (i = e.board),
        arguments.callee.t1memo
          ? ((o = arguments.callee.t1memo), (u = arguments.callee.t2memo))
          : ((o = n), (u = r)),
        (c1X = function (t) {
          return e.X.apply(e, [t]);
        }),
        (c1Y = function (t) {
          return e.Y.apply(e, [t]);
        }),
        (c2X = function (e) {
          return t.X.apply(t, [e]);
        }),
        (c2Y = function (e) {
          return t.Y.apply(t, [e]);
        }),
        (p = e.X(o) - t.X(u)),
        (d = e.Y(o) - t.Y(u)),
        (v = p * p + d * d),
        (m = i.D(e.X, e)),
        (g = i.D(t.X, t)),
        (y = i.D(e.Y, e)),
        (b = i.D(t.Y, t));
      while (v > JXG.Math.eps && s < 10)
        (a = m(o)),
          (f = -g(u)),
          (l = y(o)),
          (c = -b(u)),
          (h = a * c - f * l),
          (o -= (c * p - f * d) / h),
          (u -= (a * d - l * p) / h),
          (p = e.X(o) - t.X(u)),
          (d = e.Y(o) - t.Y(u)),
          (v = p * p + d * d),
          s++;
      return (
        (arguments.callee.t1memo = o),
        (arguments.callee.t2memo = u),
        Math.abs(o) < Math.abs(u)
          ? new JXG.Coords(JXG.COORDS_BY_USER, [e.X(o), e.Y(o)], i)
          : new JXG.Coords(JXG.COORDS_BY_USER, [t.X(u), t.Y(u)], i)
      );
    },
    meetCurveLine: function (e, t, n, r, i) {
      var s = [0, NaN, NaN],
        o,
        u,
        a;
      JXG.exists(r) || (r = e.board);
      for (o = 0; o <= 1; o++)
        if (arguments[o].elementClass == JXG.OBJECT_CLASS_CURVE)
          u = arguments[o];
        else {
          if (arguments[o].elementClass != JXG.OBJECT_CLASS_LINE)
            throw new Error(
              "JSXGraph: Can't call meetCurveLine with parent class " +
                arguments[o].elementClass +
                "."
            );
          a = arguments[o];
        }
      return (
        u.visProp.curvetype === "plot"
          ? (s = this.meetCurveLineDiscrete(u, a, n, r, i))
          : (s = this.meetCurveLineContinuous(u, a, n, r)),
        s
      );
    },
    meetCurveLineContinuous: function (e, t, n, r) {
      var i, s, o, e, t, u, a, f, l, c, h, p, d, v;
      (u = function (n) {
        return t.stdform[0] + t.stdform[1] * e.X(n) + t.stdform[2] * e.Y(n);
      }),
        arguments.callee.t1memo
          ? ((h = arguments.callee.t1memo), (i = JXG.Math.Numerics.root(u, h)))
          : ((h = e.minX()),
            (p = e.maxX()),
            (i = JXG.Math.Numerics.root(u, [h, p]))),
        (arguments.callee.t1memo = i),
        (d = e.X(i)),
        (v = e.Y(i));
      if (n == 1) {
        arguments.callee.t2memo &&
          ((h = arguments.callee.t2memo), (s = JXG.Math.Numerics.root(u, h)));
        if (
          !(
            Math.abs(s - i) > 0.1 &&
            Math.abs(d - e.X(s)) > 0.1 &&
            Math.abs(v - e.Y(s)) > 0.1
          )
        ) {
          (l = 20), (c = (e.maxX() - e.minX()) / l), (f = e.minX());
          for (o = 0; o < l; o++) {
            s = JXG.Math.Numerics.root(u, [f, f + c]);
            if (
              Math.abs(s - i) > 0.1 &&
              Math.abs(d - e.X(s)) > 0.1 &&
              Math.abs(v - e.Y(s)) > 0.1
            )
              break;
            f += c;
          }
        }
        (i = s), (arguments.callee.t2memo = i);
      }
      return (
        Math.abs(u(i)) > JXG.Math.eps ? (a = NaN) : (a = 1),
        new JXG.Coords(JXG.COORDS_BY_USER, [a, e.X(i), e.Y(i)], r)
      );
    },
    meetCurveLineDiscrete: function (e, t, n, r, i) {
      var s,
        o,
        u,
        a,
        f,
        l,
        c = 0,
        h,
        p,
        d = !1;
      (s = e.numberPoints),
        i != null &&
          ((p = i.point),
          JXG.exists(p) && !p.visProp.alwaysintersect && (d = !0)),
        (f = new JXG.Coords(JXG.COORDS_BY_USER, [0, NaN, NaN], r)),
        (a = [1, e.X(0), e.Y(0)]);
      for (o = 1; o < s; o++) {
        (u = a.slice(0)), (a = [1, e.X(o), e.Y(o)]), (l = this.distance(u, a));
        if (l < JXG.Math.eps) continue;
        h = this.meetSegmentSegment(
          u,
          a,
          t.point1.coords.usrCoords,
          t.point2.coords.usrCoords,
          r
        );
        if (0 <= h[1] && h[1] <= 1) {
          if (c == n) {
            if (
              d &&
              ((t.visProp.straightfirst == 0 && h[2] < 0) ||
                (t.visProp.straightlast == 0 && h[2] > 1))
            )
              break;
            f = new JXG.Coords(JXG.COORDS_BY_USER, h[0], r);
            break;
          }
          c++;
        }
      }
      return f;
    },
    meetSegmentSegment: function (e, t, n, r, i) {
      var s = JXG.Math.crossProduct(e, t),
        o = JXG.Math.crossProduct(n, r),
        u = JXG.Math.crossProduct(s, o),
        a = u[0],
        f,
        l,
        c;
      return Math.abs(a) < Math.eps
        ? [u, Number.Infinity, Number.Infinity]
        : ((c = [n[1] - e[1], n[2] - e[2]]),
          (f = (c[0] * (r[2] - n[2]) - c[1] * (r[1] - n[1])) / a),
          (l = (c[0] * (t[2] - e[2]) - c[1] * (t[1] - e[1])) / a),
          [u, f, l]);
    },
    projectPointToCircle: function (e, t, n) {
      var r,
        i,
        s = t.center.coords.usrCoords,
        o,
        u,
        a;
      return (
        JXG.exists(n) || (n = e.board),
        JXG.isPoint(e)
          ? ((r = e.coords.distance(JXG.COORDS_BY_USER, t.center.coords)),
            (i = e.coords.usrCoords))
          : ((r = e.distance(JXG.COORDS_BY_USER, t.center.coords)),
            (i = e.usrCoords)),
        Math.abs(r) < JXG.Math.eps && (r = JXG.Math.eps),
        (a = t.Radius() / r),
        (o = s[1] + a * (i[1] - s[1])),
        (u = s[2] + a * (i[2] - s[2])),
        new JXG.Coords(JXG.COORDS_BY_USER, [o, u], n)
      );
    },
    projectPointToLine: function (e, t, n) {
      var r = [0, t.stdform[1], t.stdform[2]];
      return (
        JXG.exists(n) || (n = e.board),
        (r = JXG.Math.crossProduct(r, e.coords.usrCoords)),
        this.meetLineLine(r, t.stdform, 0, n)
      );
    },
    projectCoordsToSegment: function (e, t, n) {
      var r = [n[1] - t[1], n[2] - t[2]],
        i = [e[1] - t[1], e[2] - t[2]],
        s,
        o,
        u;
      return Math.abs(r[0]) < JXG.Math.eps && Math.abs(r[1]) < JXG.Math.eps
        ? t
        : ((s = JXG.Math.innerProduct(i, r)),
          (o = JXG.Math.innerProduct(r, r)),
          (s /= o),
          [[1, s * r[0] + t[1], s * r[1] + t[2]], s]);
    },
    projectPointToCurve: function (e, t, n) {
      JXG.exists(n) || (n = e.board);
      var r = e.X(),
        i = e.Y(),
        s = e.position || 0,
        o = this.projectCoordsToCurve(r, i, s, t, n);
      return (e.position = o[1]), o[0];
    },
    projectCoordsToCurve: function (e, t, n, r, i) {
      var s,
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g,
        y,
        b,
        w,
        E,
        S,
        x = Number.POSITIVE_INFINITY,
        T,
        n,
        N,
        C,
        k,
        L,
        A;
      JXG.exists(i) || (i = r.board);
      if (
        r.visProp.curvetype == "parameter" ||
        r.visProp.curvetype == "polar"
      ) {
        (T = function (n) {
          var i = e - r.X(n),
            s = t - r.Y(n);
          return i * i + s * s;
        }),
          (k = T(n)),
          (A = 20),
          (L = (r.maxX() - r.minX()) / A),
          (N = r.minX());
        for (o = 0; o < A; o++)
          (C = T(N)), C < k && ((n = N), (k = C)), (N += L);
        (n = JXG.Math.Numerics.root(JXG.Math.Numerics.D(T), n)),
          n < r.minX() && (n = r.maxX() + n - r.minX()),
          n > r.maxX() && (n = r.minX() + n - r.maxX()),
          (s = new JXG.Coords(JXG.COORDS_BY_USER, [r.X(n), r.Y(n)], i));
      } else if (r.visProp.curvetype == "plot") {
        (n = 0),
          (c = x),
          r.numberPoints == 0
            ? (s = [0, 1, 1])
            : (s = [r.Z(0), r.X(0), r.Y(0)]);
        if (r.numberPoints > 1) {
          y = [r.Z(0), r.X(0), r.Y(0)];
          for (o = 0; o < r.numberPoints - 1; o++)
            (b = [r.Z(o + 1), r.X(o + 1), r.Y(o + 1)]),
              (v = [1, e, t]),
              (S = this.projectCoordsToSegment(v, y, b)),
              (p = S[1]),
              (m = S[0]),
              0 <= p && p <= 1
                ? ((h = this.distance(m, v)), (g = o + p))
                : p < 0
                ? ((m = y), (h = this.distance(y, v)), (g = o))
                : p > 1 &&
                  o + 1 == r.numberPoints - 1 &&
                  ((m = b),
                  (h = this.distance(m, v)),
                  (g = r.numberPoints - 1)),
              h < c && ((c = h), (n = g), (s = m)),
              (y = b);
        }
        s = new JXG.Coords(JXG.COORDS_BY_USER, s, i);
      } else
        (n = e),
          (e = n),
          (t = r.Y(n)),
          (s = new JXG.Coords(JXG.COORDS_BY_USER, [e, t], i));
      return [r.updateTransform(s), n];
    },
    projectPointToTurtle: function (e, t, n) {
      var r,
        i,
        s,
        o,
        u,
        a = 0,
        f = 0,
        l = Number.POSITIVE_INFINITY,
        c,
        h,
        p,
        d = t.objects.length;
      JXG.exists(n) || (n = e.board);
      for (u = 0; u < d; u++)
        (h = t.objects[u]),
          h.elementClass == JXG.OBJECT_CLASS_CURVE &&
            ((r = this.projectPointToCurve(e, h)),
            (c = this.distance(r.usrCoords, e.coords.usrCoords)),
            c < l &&
              ((s = r.usrCoords[1]),
              (o = r.usrCoords[2]),
              (i = e.position),
              (l = c),
              (p = h),
              (f = a)),
            (a += h.numberPoints));
      return (
        (r = new JXG.Coords(JXG.COORDS_BY_USER, [s, o], n)),
        (e.position = i + f),
        p.updateTransform(r)
      );
    },
    projectPointToPoint: function (e, t, n) {
      return t.coords;
    },
    distPointLine: function (e, t) {
      var n = t[1],
        r = t[2],
        i = t[0],
        s;
      return Math.abs(n) + Math.abs(r) < JXG.Math.eps
        ? Number.POSITIVE_INFINITY
        : ((s = n * e[1] + r * e[2] + i * 1),
          (n *= n),
          (r *= r),
          Math.abs(s) / Math.sqrt(n + r));
    },
  }),
  (JXG.Math.Poly = {}),
  (JXG.Math.Poly.Ring = function (e) {
    this.vars = e;
  }),
  JXG.extend(JXG.Math.Poly.Ring.prototype, {}),
  (JXG.Math.Poly.Monomial = function (e, t, n) {
    var r;
    if (!JXG.exists(e))
      throw new Error(
        "JSXGraph error: In JXG.Math.Poly.monomial missing parameter 'ring'."
      );
    JXG.isArray(n) || (n = []), (n = n.slice(0, e.vars.length));
    for (r = n.length; r < e.vars.length; r++) n.push(0);
    (this.ring = e),
      (this.coefficient = t || 0),
      (this.exponents = JXG.deepCopy(n));
  }),
  JXG.extend(JXG.Math.Poly.Monomial.prototype, {
    copy: function () {
      return new JXG.Math.Poly.Monomial(
        this.ring,
        this.coefficient,
        this.exponents
      );
    },
    print: function () {
      var e = [],
        t;
      for (t = 0; t < this.ring.vars.length; t++)
        e.push(this.ring.vars[t] + "^" + this.exponents[t]);
      return this.coefficient + "*" + e.join("*");
    },
  }),
  (JXG.Math.Poly.Polynomial = function (e, t) {
    var n = function () {},
      r;
    if (!JXG.exists(e))
      throw new Error(
        "JSXGraph error: In JXG.Math.Poly.polynomial missing parameter 'ring'."
      );
    JXG.exists(t) && typeof t == "string" ? (r = n(t)) : (r = []),
      (this.ring = e),
      (this.monomials = r);
  }),
  JXG.extend(JXG.Math.Poly.Polynomial.prototype, {
    findSignature: function (e) {
      var t;
      for (t = 0; t < this.monomials.length; t++)
        if (JXG.cmpArrays(this.monomials[t].exponents, e)) return t;
      return -1;
    },
    addSubMonomial: function (e, t) {
      var n;
      (n = this.findSignature(e.exponents)),
        n > -1
          ? (this.monomials[n].coefficient += t * e.coefficient)
          : ((e.coefficient *= t), this.monomials.push(e));
    },
    add: function (e) {
      var t;
      if (!JXG.exists(e) || e.ring !== this.ring)
        throw new Error(
          "JSXGraph error: In JXG.Math.Poly.polynomial.add either summand is undefined or rings don't match."
        );
      if (JXG.isArray(e.exponents)) this.addSubMonomial(e, 1);
      else
        for (t = 0; t < e.monomials.length; t++)
          this.addSubMonomial(e.monomials[t], 1);
    },
    sub: function (e) {
      var t;
      if (!JXG.exists(e) || e.ring !== this.ring)
        throw new Error(
          "JSXGraph error: In JXG.Math.Poly.polynomial.sub either summand is undefined or rings don't match."
        );
      if (JXG.isArray(e.exponents)) this.addSubMonomial(e, -1);
      else
        for (t = 0; t < e.monomials.length; t++)
          this.addSubMonomial(e.monomials[t], -1);
    },
    copy: function () {
      var e, t;
      t = new JXG.Math.Poly.Polynomial(this.ring);
      for (e = 0; e < this.monomials.length; e++)
        t.monomials.push(this.monomials[e].copy());
      return t;
    },
    print: function () {
      var e = [],
        t;
      for (t = 0; t < this.monomials.length; t++)
        e.push("(" + this.monomials[t].print() + ")");
      return e.join("+");
    },
  }),
  (JXG.Complex = function (e, t) {
    (this.isComplex = !0),
      typeof e == "undefined" && (e = 0),
      typeof t == "undefined" && (t = 0),
      e.isComplex && ((t = e.imaginary), (e = e.real)),
      (this.real = e),
      (this.imaginary = t),
      (this.absval = 0),
      (this.angle = 0);
  }),
  JXG.extend(JXG.Complex.prototype, {
    toString: function () {
      return "" + this.real + " + " + this.imaginary + "i";
    },
    add: function (e) {
      typeof e == "number"
        ? (this.real += e)
        : ((this.real += e.real), (this.imaginary += e.imaginary));
    },
    sub: function (e) {
      typeof e == "number"
        ? (this.real -= e)
        : ((this.real -= e.real), (this.imaginary -= e.imaginary));
    },
    mult: function (e) {
      var t, n;
      typeof e == "number"
        ? ((this.real *= e), (this.imaginary *= e))
        : ((t = this.real),
          (n = this.imaginary),
          (this.real = t * e.real - n * e.imaginary),
          (this.imaginary = t * e.imaginary + n * e.real));
    },
    div: function (e) {
      var t, n, r;
      if (typeof e == "number") {
        if (Math.abs(e) < Math.eps) {
          (this.real = Infinity), (this.imaginary = Infinity);
          return;
        }
        (this.real /= e), (this.imaginary /= e);
      } else {
        if (Math.abs(e.real) < Math.eps && Math.abs(e.imaginary) < Math.eps) {
          (this.real = Infinity), (this.imaginary = Infinity);
          return;
        }
        (t = e.real * e.real + e.imaginary * e.imaginary),
          (r = this.real),
          (n = this.imaginary),
          (this.real = (r * e.real + n * e.imaginary) / t),
          (this.imaginary = (n * e.real - r * e.imaginary) / t);
      }
    },
    conj: function () {
      this.imaginary *= -1;
    },
  }),
  (JXG.C = {}),
  (JXG.C.add = function (e, t) {
    var n = new JXG.Complex(e);
    return n.add(t), n;
  }),
  (JXG.C.sub = function (e, t) {
    var n = new JXG.Complex(e);
    return n.sub(t), n;
  }),
  (JXG.C.mult = function (e, t) {
    var n = new JXG.Complex(e);
    return n.mult(t), n;
  }),
  (JXG.C.div = function (e, t) {
    var n = new JXG.Complex(e);
    return n.div(t), n;
  }),
  (JXG.C.conj = function (e) {
    var t = new JXG.Complex(e);
    return t.conj(), t;
  }),
  (JXG.C.abs = function (e) {
    var t = new JXG.Complex(e);
    return t.conj(), t.mult(e), Math.sqrt(t.real);
  }),
  (JXG.AbstractRenderer = function () {
    (this.vOffsetText = 0),
      (this.enhancedRendering = !0),
      (this.container = null),
      (this.type = "");
  }),
  JXG.extend(JXG.AbstractRenderer.prototype, {
    _updateVisual: function (e, t, n) {
      var r;
      if (n || this.enhancedRendering)
        (t = t || {}),
          e.visProp.draft
            ? this.setDraft(e)
            : (t.stroke ||
                (this.setObjectStrokeWidth(e, e.visProp.strokewidth),
                this.setObjectStrokeColor(
                  e,
                  e.visProp.strokecolor,
                  e.visProp.strokeopacity
                )),
              t.fill ||
                this.setObjectFillColor(
                  e,
                  e.visProp.fillcolor,
                  e.visProp.fillopacity
                ),
              t.dash || this.setDashStyle(e, e.visProp),
              t.shadow || this.setShadow(e),
              t.gradient || this.setShadow(e));
    },
    drawPoint: function (e) {
      var t,
        n = JXG.Point.prototype.normalizeFace.call(this, e.visProp.face);
      n === "o" ? (t = "ellipse") : n === "[]" ? (t = "rect") : (t = "path"),
        this.appendChildPrim(this.createPrim(t, e.id), e.visProp.layer),
        this.appendNodesToElement(e, t),
        this._updateVisual(e, { dash: !0, shadow: !0 }, !0),
        this.updatePoint(e);
    },
    updatePoint: function (e) {
      var t = e.visProp.size,
        n = JXG.Point.prototype.normalizeFace.call(this, e.visProp.face);
      isNaN(e.coords.scrCoords[2] + e.coords.scrCoords[1]) ||
        (this._updateVisual(e, { dash: !1, shadow: !1 }),
        (t *=
          !e.board || !e.board.options.point.zoom
            ? 1
            : Math.sqrt(e.board.zoomX * e.board.zoomY)),
        n === "o"
          ? this.updateEllipsePrim(
              e.rendNode,
              e.coords.scrCoords[1],
              e.coords.scrCoords[2],
              t + 1,
              t + 1
            )
          : n === "[]"
          ? this.updateRectPrim(
              e.rendNode,
              e.coords.scrCoords[1] - t,
              e.coords.scrCoords[2] - t,
              t * 2,
              t * 2
            )
          : this.updatePathPrim(
              e.rendNode,
              this.updatePathStringPoint(e, t, n),
              e.board
            ),
        this.setShadow(e));
    },
    changePointStyle: function (e) {
      var t = this.getElementById(e.id);
      JXG.exists(t) && this.remove(t),
        this.drawPoint(e),
        JXG.clearVisPropOld(e),
        e.visProp.visible || this.hide(e),
        e.visProp.draft && this.setDraft(e);
    },
    drawLine: function (e) {
      this.appendChildPrim(this.createPrim("line", e.id), e.visProp.layer),
        this.appendNodesToElement(e, "lines"),
        this.updateLine(e);
    },
    updateLine: function (e) {
      var t = new JXG.Coords(
          JXG.COORDS_BY_USER,
          e.point1.coords.usrCoords,
          e.board
        ),
        n = new JXG.Coords(
          JXG.COORDS_BY_USER,
          e.point2.coords.usrCoords,
          e.board
        ),
        r = null;
      if (e.visProp.firstarrow || e.visProp.lastarrow) r = 0;
      JXG.Math.Geometry.calcStraight(e, t, n, r),
        this.updateLinePrim(
          e.rendNode,
          t.scrCoords[1],
          t.scrCoords[2],
          n.scrCoords[1],
          n.scrCoords[2],
          e.board
        ),
        this.makeArrows(e),
        this._updateVisual(e, { fill: !0 });
    },
    drawTicks: function (e) {
      var t = this.createPrim("path", e.id);
      this.appendChildPrim(t, e.visProp.layer),
        this.appendNodesToElement(e, "path");
    },
    updateTicks: function (e, t, n, r, i) {},
    drawCurve: function (e) {
      this.appendChildPrim(this.createPrim("path", e.id), e.visProp.layer),
        this.appendNodesToElement(e, "path"),
        this._updateVisual(e, { shadow: !0 }, !0),
        this.updateCurve(e);
    },
    updateCurve: function (e) {
      this._updateVisual(e),
        e.visProp.handdrawing
          ? this.updatePathPrim(
              e.rendNode,
              this.updatePathStringBezierPrim(e),
              e.board
            )
          : this.updatePathPrim(
              e.rendNode,
              this.updatePathStringPrim(e),
              e.board
            ),
        e.numberPoints > 1 && this.makeArrows(e);
    },
    drawEllipse: function (e) {
      this.appendChildPrim(this.createPrim("ellipse", e.id), e.visProp.layer),
        this.appendNodesToElement(e, "ellipse"),
        this.updateEllipse(e);
    },
    updateEllipse: function (e) {
      this._updateVisual(e);
      var t = e.Radius();
      t > 0 &&
        Math.abs(e.center.coords.usrCoords[0]) > JXG.Math.eps &&
        !isNaN(
          t + e.center.coords.scrCoords[1] + e.center.coords.scrCoords[2]
        ) &&
        t * e.board.unitX < 2e6 &&
        this.updateEllipsePrim(
          e.rendNode,
          e.center.coords.scrCoords[1],
          e.center.coords.scrCoords[2],
          t * e.board.unitX,
          t * e.board.unitY
        );
    },
    drawPolygon: function (e) {
      this.appendChildPrim(this.createPrim("polygon", e.id), e.visProp.layer),
        this.appendNodesToElement(e, "polygon"),
        this.updatePolygon(e);
    },
    updatePolygon: function (e) {
      this._updateVisual(e, { stroke: !0, dash: !0 }),
        this.updatePolygonPrim(e.rendNode, e);
    },
    displayCopyright: function (e, t) {},
    drawInternalText: function (e) {},
    updateInternalText: function (e) {},
    drawText: function (e) {
      var t, n;
      e.visProp.display === "html"
        ? ((t = this.container.ownerDocument.createElement("div")),
          (t.style.position = "absolute"),
          (t.className = e.visProp.cssclass),
          this.container.style.zIndex == ""
            ? (n = 0)
            : (n = parseInt(this.container.style.zIndex)),
          (t.style.zIndex = n + e.board.options.layer.text),
          this.container.appendChild(t),
          t.setAttribute("id", this.container.id + "_" + e.id))
        : (t = this.drawInternalText(e)),
        (e.rendNode = t),
        (e.htmlStr = ""),
        this.updateText(e);
    },
    updateText: function (e) {
      var t = e.plaintext;
      e.visProp.visible &&
        (this.updateTextStyle(e, !1),
        e.visProp.display === "html"
          ? (isNaN(e.coords.scrCoords[1] + e.coords.scrCoords[2]) ||
              (e.visProp.anchorx === "right"
                ? (e.rendNode.style.right =
                    parseInt(e.board.canvasWidth - e.coords.scrCoords[1]) +
                    "px")
                : e.visProp.anchorx === "middle"
                ? (e.rendNode.style.left =
                    parseInt(e.coords.scrCoords[1] - 0.5 * e.size[0]) + "px")
                : (e.rendNode.style.left =
                    parseInt(e.coords.scrCoords[1]) + "px"),
              e.visProp.anchory === "top"
                ? (e.rendNode.style.top =
                    parseInt(e.coords.scrCoords[2] + this.vOffsetText) + "px")
                : e.visProp.anchory === "middle"
                ? (e.rendNode.style.top =
                    parseInt(
                      e.coords.scrCoords[2] - 0.5 * e.size[1] + this.vOffsetText
                    ) + "px")
                : (e.rendNode.style.top =
                    parseInt(
                      e.coords.scrCoords[2] - e.size[1] + this.vOffsetText
                    ) + "px")),
            e.htmlStr !== t &&
              ((e.rendNode.innerHTML = t),
              (e.htmlStr = t),
              e.visProp.usemathjax
                ? MathJax.Hub.Queue(["Typeset", MathJax.Hub, e.rendNode])
                : e.visProp.useasciimathml && AMprocessNode(e.rendNode, !1)),
            this.transformImage(e, e.transformations))
          : this.updateInternalText(e));
    },
    updateTextStyle: function (e, t) {
      var n,
        r,
        i,
        s,
        o = e.visProp;
      t
        ? ((i = o.highlightstrokecolor),
          (r = o.highlightstrokeopacity),
          (s = o.highlightcssclass))
        : ((i = o.strokecolor), (r = o.strokeopacity), (s = o.cssclass));
      if (e.visProp.display === "html" || this.type != "canvas") {
        n = JXG.evaluate(e.visProp.fontsize);
        if (e.visPropOld.fontsize != n) {
          try {
            e.rendNode.style.fontSize = n + "px";
          } catch (u) {
            e.rendNode.style.fontSize = n;
          }
          e.visPropOld.fontsize = n;
        }
        e.visPropOld.cssclass != s &&
          ((e.rendNode.className = s), (e.visPropOld.cssclass = s));
      }
      return (
        e.visProp.display === "html"
          ? this.setObjectStrokeColor(e, i, r)
          : this.updateInternalTextStyle(e, i, r),
        this
      );
    },
    updateInternalTextStyle: function (e, t, n) {
      this.setObjectStrokeColor(e, t, n);
    },
    drawImage: function (e) {},
    updateImage: function (e) {
      this.updateRectPrim(
        e.rendNode,
        e.coords.scrCoords[1],
        e.coords.scrCoords[2] - e.size[1],
        e.size[0],
        e.size[1]
      ),
        this.updateImageURL(e),
        this.transformImage(e, e.transformations),
        this._updateVisual(e, { stroke: !0, dash: !0 }, !0);
    },
    joinTransforms: function (e, t) {
      var n = [
          [1, 0, 0],
          [0, 1, 0],
          [0, 0, 1],
        ],
        r = e.board.origin.scrCoords[1],
        i = e.board.origin.scrCoords[2],
        s = e.board.unitX,
        o = e.board.unitY,
        u = [
          [1, 0, 0],
          [-r, 1, 0],
          [-i, 0, 1],
        ],
        a = [
          [1, 0, 0],
          [0, 1 / s, 0],
          [0, 0, -1 / o],
        ],
        f = [
          [1, 0, 0],
          [0, s, 0],
          [0, 0, -o],
        ],
        l = [
          [1, 0, 0],
          [r, 1, 0],
          [i, 0, 1],
        ],
        c,
        h = t.length;
      for (c = 0; c < h; c++)
        (n = JXG.Math.matMatMult(u, n)),
          (n = JXG.Math.matMatMult(a, n)),
          (n = JXG.Math.matMatMult(t[c].matrix, n)),
          (n = JXG.Math.matMatMult(f, n)),
          (n = JXG.Math.matMatMult(l, n));
      return n;
    },
    transformImage: function (e, t) {},
    updateImageURL: function (e) {},
    updateImageStyle: function (e, t) {
      var n = t ? el.visProp.highlightcssclass : el.visProp.cssclass;
      e.rendNode.className = n;
    },
    appendChildPrim: function (e, t) {},
    appendNodesToElement: function (e, t) {},
    createPrim: function (e, t) {
      return null;
    },
    remove: function (e) {},
    makeArrows: function (e) {},
    updateEllipsePrim: function (e, t, n, r, i) {},
    updateLinePrim: function (e, t, n, r, i, s) {},
    updatePathPrim: function (e, t, n) {},
    updatePathStringPoint: function (e, t, n) {},
    updatePathStringPrim: function (e) {},
    updatePathStringBezierPrim: function (e) {},
    updatePolygonPrim: function (e, t) {},
    updateRectPrim: function (e, t, n, r, i) {},
    setPropertyPrim: function (e, t, n) {},
    show: function (e) {},
    hide: function (e) {},
    setBuffering: function (e, t) {},
    setDashStyle: function (e) {},
    setDraft: function (e) {
      if (!e.visProp.draft) return;
      var t = e.board.options.elements.draft.color,
        n = e.board.options.elements.draft.opacity;
      e.type === JXG.OBJECT_TYPE_POLYGON
        ? this.setObjectFillColor(e, t, n)
        : (e.elementClass === JXG.OBJECT_CLASS_POINT
            ? this.setObjectFillColor(e, t, n)
            : this.setObjectFillColor(e, "none", 0),
          this.setObjectStrokeColor(e, t, n),
          this.setObjectStrokeWidth(
            e,
            e.board.options.elements.draft.strokeWidth
          ));
    },
    removeDraft: function (e) {
      e.type === JXG.OBJECT_TYPE_POLYGON
        ? this.setObjectFillColor(e, e.visProp.fillcolor, e.visProp.fillopacity)
        : (e.type === JXG.OBJECT_CLASS_POINT &&
            this.setObjectFillColor(
              e,
              e.visProp.fillcolor,
              e.visProp.fillopacity
            ),
          this.setObjectStrokeColor(
            e,
            e.visProp.strokecolor,
            e.visProp.strokeopacity
          ),
          this.setObjectStrokeWidth(e, e.visProp.strokewidth));
    },
    setGradient: function (e) {},
    updateGradient: function (e) {},
    setObjectFillColor: function (e, t, n) {},
    setObjectStrokeColor: function (e, t, n) {},
    setObjectStrokeWidth: function (e, t) {},
    setShadow: function (e) {},
    highlight: function (e) {
      var t,
        n = e.visProp;
      if (!n.draft) {
        if (e.type === JXG.OBJECT_TYPE_POLYGON) {
          this.setObjectFillColor(
            e,
            n.highlightfillcolor,
            n.highlightfillopacity
          );
          for (t = 0; t < e.borders.length; t++)
            this.setObjectStrokeColor(
              e.borders[t],
              e.borders[t].visProp.highlightstrokecolor,
              e.borders[t].visProp.highlightstrokeopacity
            );
        } else
          e.type === JXG.OBJECT_TYPE_TEXT
            ? this.updateTextStyle(e, !0)
            : e.type === JXG.OBJECT_TYPE_IMAGE
            ? this.updateImageStyle(e, !0)
            : (this.setObjectStrokeColor(
                e,
                n.highlightstrokecolor,
                n.highlightstrokeopacity
              ),
              this.setObjectFillColor(
                e,
                n.highlightfillcolor,
                n.highlightfillopacity
              ));
        n.highlightstrokewidth &&
          this.setObjectStrokeWidth(
            e,
            Math.max(n.highlightstrokewidth, n.strokewidth)
          );
      }
      return this;
    },
    noHighlight: function (e) {
      var t,
        n = e.visProp;
      if (!e.visProp.draft) {
        if (e.type === JXG.OBJECT_TYPE_POLYGON) {
          this.setObjectFillColor(e, n.fillcolor, n.fillopacity);
          for (t = 0; t < e.borders.length; t++)
            this.setObjectStrokeColor(
              e.borders[t],
              e.borders[t].visProp.strokecolor,
              e.borders[t].visProp.strokeopacity
            );
        } else
          e.type === JXG.OBJECT_TYPE_TEXT
            ? this.updateTextStyle(e, !1)
            : e.type === JXG.OBJECT_TYPE_IMAGE
            ? this.updateImageStyle(e, !1)
            : (this.setObjectStrokeColor(e, n.strokecolor, n.strokeopacity),
              this.setObjectFillColor(e, n.fillcolor, n.fillopacity));
        this.setObjectStrokeWidth(e, n.strokewidth);
      }
      return this;
    },
    suspendRedraw: function () {},
    unsuspendRedraw: function () {},
    drawZoomBar: function (e) {
      var t,
        n,
        r = function (r, i) {
          var s;
          (s = t.createElement("span")),
            n.appendChild(s),
            s.appendChild(document.createTextNode(r)),
            JXG.addEvent(s, "click", i, e);
        };
      (t = e.containerObj.ownerDocument),
        (n = t.createElement("div")),
        n.setAttribute("id", e.containerObj.id + "_navigationbar"),
        (n.style.color = e.options.navbar.strokeColor),
        (n.style.backgroundColor = e.options.navbar.fillColor),
        (n.style.padding = e.options.navbar.padding),
        (n.style.position = e.options.navbar.position),
        (n.style.fontSize = e.options.navbar.fontSize),
        (n.style.cursor = e.options.navbar.cursor),
        (n.style.zIndex = e.options.navbar.zIndex),
        e.containerObj.appendChild(n),
        (n.style.right = e.options.navbar.right),
        (n.style.bottom = e.options.navbar.bottom),
        r("\u00a0\u2013\u00a0", e.zoomOut),
        r("\u00a0o\u00a0", e.zoom100),
        r("\u00a0+\u00a0", e.zoomIn),
        r("\u00a0\u2190\u00a0", e.clickLeftArrow),
        r("\u00a0\u2193\u00a0", e.clickUpArrow),
        r("\u00a0\u2191\u00a0", e.clickDownArrow),
        r("\u00a0\u2192\u00a0", e.clickRightArrow);
    },
    getElementById: function (e) {
      return document.getElementById(this.container.id + "_" + e);
    },
    resize: function (e, t) {},
  }),
  (JXG.NoRenderer = function () {
    (this.enhancedRendering = !1), (this.type = "no");
  }),
  JXG.extend(JXG.NoRenderer.prototype, {
    drawPoint: function (e) {},
    updatePoint: function (e) {},
    changePointStyle: function (e) {},
    drawLine: function (e) {},
    updateLine: function (e) {},
    drawTicks: function (e) {},
    updateTicks: function (e, t, n, r, i) {},
    drawCurve: function (e) {},
    updateCurve: function (e) {},
    drawEllipse: function (e) {},
    updateEllipse: function (e) {},
    drawPolygon: function (e) {},
    updatePolygon: function (e) {},
    displayCopyright: function (e, t) {},
    drawInternalText: function (e) {},
    updateInternalText: function (e) {},
    drawText: function (e) {},
    updateText: function (e) {},
    updateTextStyle: function (e, t) {},
    updateInternalTextStyle: function (e, t, n) {},
    drawImage: function (e) {},
    updateImage: function (e) {},
    transformImage: function (e, t) {},
    updateImageURL: function (e) {},
    appendChildPrim: function (e, t) {},
    appendNodesToElement: function (e, t) {},
    createPrim: function (e, t) {
      return null;
    },
    remove: function (e) {},
    makeArrows: function (e) {},
    updateEllipsePrim: function (e, t, n, r, i) {},
    updateLinePrim: function (e, t, n, r, i, s) {},
    updatePathPrim: function (e, t, n) {},
    updatePathStringPoint: function (e, t, n) {},
    updatePathStringPrim: function (e) {},
    updatePathStringBezierPrim: function (e) {},
    updatePolygonPrim: function (e, t) {},
    updateRectPrim: function (e, t, n, r, i) {},
    setPropertyPrim: function (e, t, n) {},
    show: function (e) {},
    hide: function (e) {},
    setBuffering: function (e, t) {},
    setDashStyle: function (e) {},
    setDraft: function (e) {},
    removeDraft: function (e) {},
    setGradient: function (e) {},
    updateGradient: function (e) {},
    setObjectFillColor: function (e, t, n) {},
    setObjectStrokeColor: function (e, t, n) {},
    setObjectStrokeWidth: function (e, t) {},
    setShadow: function (e) {},
    highlight: function (e) {},
    noHighlight: function (e) {},
    suspendRedraw: function () {},
    unsuspendRedraw: function () {},
    drawZoomBar: function (e) {},
    getElementById: function (e) {
      return null;
    },
    resize: function (e, t) {},
  }),
  (JXG.FileReader = {
    parseFileContent: function (e, t, n, r) {
      var i = !1;
      JXG.exists(r) || (r = !0);
      try {
        (i = new XMLHttpRequest()),
          n.toLowerCase() == "raw"
            ? i.overrideMimeType("text/plain; charset=iso-8859-1")
            : i.overrideMimeType("text/xml; charset=iso-8859-1");
      } catch (s) {
        try {
          i = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (s) {
          try {
            i = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (s) {
            i = !1;
          }
        }
      }
      if (!i) {
        alert("AJAX not activated!");
        return;
      }
      i.open("GET", e, r),
        n.toLowerCase() === "raw"
          ? (this.cbp = function () {
              var e = i;
              e.readyState == 4 && t(e.responseText);
            })
          : (this.cbp = function () {
              var e = i;
              if (e.readyState == 4) {
                var r = "";
                typeof e.responseStream == "undefined" ||
                (e.responseText.slice(0, 2) != "PK" &&
                  JXG.Util.asciiCharCodeAt(e.responseText.slice(0, 1), 0) != 31)
                  ? (r = e.responseText)
                  : (r = JXG.Util.Base64.decode(BinFileReader(e))),
                  this.parseString(r, t, n, !1);
              }
            }),
        (this.cb = JXG.bind(this.cbp, this)),
        (i.onreadystatechange = this.cb);
      try {
        i.send(null);
      } catch (s) {
        throw new Error(
          "JSXGraph: A problem occurred while trying to read '" + e + "'."
        );
      }
    },
    cleanWhitespace: function (e) {
      var t = e.firstChild;
      while (t != null)
        t.nodeType == 3 && !/\S/.test(t.nodeValue)
          ? e.removeChild(t)
          : t.nodeType == 1 && this.cleanWhitespace(t),
          (t = t.nextSibling);
    },
    stringToXMLTree: function (e) {
      typeof DOMParser == "undefined" &&
        ((DOMParser = function () {}),
        (DOMParser.prototype.parseFromString = function (e, t) {
          if (typeof ActiveXObject != "undefined") {
            var n = new ActiveXObject("MSXML.DomDocument");
            return n.loadXML(e), n;
          }
        }));
      var t = new DOMParser(),
        n = t.parseFromString(e, "text/xml");
      return this.cleanWhitespace(n), n;
    },
    parseString: function (e, t, n, r) {
      var i, s, o;
      n = n.toLowerCase();
      switch (n) {
        case "cdy":
        case "cinderella":
          r && (e = JXG.Util.Base64.decode(e)),
            (e = JXG.CinderellaReader.readCinderella(e, t)),
            (t.xmlString = e);
          break;
        case "tracenpoche":
          t.xmlString = JXG.TracenpocheReader.readTracenpoche(e, t);
          break;
        case "graph":
          e = JXG.GraphReader.readGraph(e, t, !1);
          break;
        case "digraph":
          e = JXG.GraphReader.readGraph(e, t, !0);
          break;
        case "geonext":
          (e = JXG.GeonextReader.prepareString(e)), (o = !0);
          break;
        case "geogebra":
          (r = e.slice(0, 2) !== "PK"),
            (e = JXG.GeogebraReader.prepareString(e, r)),
            (o = !0);
          break;
        case "intergeo":
          r && (e = JXG.Util.Base64.decode(e)),
            (e = JXG.IntergeoReader.prepareString(e)),
            (o = !0);
          break;
        case "sketch":
          e = JXG.SketchReader.readSketch(e, t);
      }
      o &&
        ((t.xmlString = e),
        (i = this.stringToXMLTree(e)),
        this.readElements(i, t, n));
    },
    readElements: function (e, t, n) {
      n.toLowerCase() == "geonext"
        ? (t.suspendUpdate(),
          e.getElementsByTagName("GEONEXT").length != 0 &&
            JXG.GeonextReader.readGeonext(e, t),
          t.unsuspendUpdate())
        : e.getElementsByTagName("geogebra").length != 0
        ? JXG.GeogebraReader.readGeogebra(e, t)
        : n.toLowerCase() == "intergeo" &&
          JXG.IntergeoReader.readIntergeo(e, t);
    },
  }),
  !JXG.isMetroApp() &&
    typeof navigator != "undefined" &&
    /msie/i.test(navigator.userAgent) &&
    !/opera/i.test(navigator.userAgent && document && document.write) &&
    document.write(
      '<script type="text/vbscript">\nFunction Base64Encode(inData)\n  Const Base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"\n  Dim cOut, sOut, I\n  For I = 1 To LenB(inData) Step 3\n    Dim nGroup, pOut, sGroup\n    nGroup = &H10000 * AscB(MidB(inData, I, 1)) + _\n      &H100 * MyASC(MidB(inData, I + 1, 1)) + MyASC(MidB(inData, I + 2, 1))\n    nGroup = Oct(nGroup)\n    nGroup = String(8 - Len(nGroup), "0") & nGroup\n    pOut = Mid(Base64, CLng("&o" & Mid(nGroup, 1, 2)) + 1, 1) + _\n      Mid(Base64, CLng("&o" & Mid(nGroup, 3, 2)) + 1, 1) + _\n      Mid(Base64, CLng("&o" & Mid(nGroup, 5, 2)) + 1, 1) + _\n      Mid(Base64, CLng("&o" & Mid(nGroup, 7, 2)) + 1, 1)\n    sOut = sOut + pOut\n  Next\n  Select Case LenB(inData) Mod 3\n    Case 1: \'8 bit final\n      sOut = Left(sOut, Len(sOut) - 2) + "=="\n    Case 2: \'16 bit final\n      sOut = Left(sOut, Len(sOut) - 1) + "="\n  End Select\n  Base64Encode = sOut\nEnd Function\n\nFunction MyASC(OneChar)\n  If OneChar = "" Then MyASC = 0 Else MyASC = AscB(OneChar)\nEnd Function\n\nFunction BinFileReader(xhr)\n    Dim byteString\n    Dim b64String\n    Dim i\n    byteString = xhr.responseBody\n    ReDim byteArray(LenB(byteString))\n    For i = 1 To LenB(byteString)\n        byteArray(i-1) = AscB(MidB(byteString, i, 1))\n    Next\n    b64String = Base64Encode(byteString)\n    BinFileReader = b64String\nEnd Function\n</script>\n'
    ),
  (JXG.GeonextParser = {}),
  (JXG.GeonextParser.replacePow = function (e) {
    var t, n, r, i, s, o, u, a, f, l, c;
    (e = e.replace(/(\s*)\^(\s*)/g, "^")), (f = e.indexOf("^"));
    while (f >= 0) {
      (a = e.slice(0, f)), (l = e.slice(f + 1));
      if (a.charAt(a.length - 1) == ")") {
        (t = 1), (n = a.length - 2);
        while (n >= 0 && t > 0)
          (r = a.charAt(n)), r == ")" ? t++ : r == "(" && t--, n--;
        if (t != 0) throw new Error("JSXGraph: Missing '(' in expression");
        (i = ""), (o = a.substring(0, n + 1)), (u = n);
        while (u >= 0 && o.substr(u, 1).match(/([\w\.]+)/))
          (i = RegExp.$1 + i), u--;
        (i += a.substring(n + 1, a.length)),
          (i = i.replace(/([\(\)\+\*\%\^\-\/\]\[])/g, "\\$1"));
      } else i = "[\\w\\.]+";
      if (l.match(/^([\w\.]*\()/)) {
        (t = 1), (n = RegExp.$1.length);
        while (n < l.length && t > 0)
          (r = l.charAt(n)), r == ")" ? t-- : r == "(" && t++, n++;
        if (t != 0) throw new Error("JSXGraph: Missing ')' in expression");
        (s = l.substring(0, n)),
          (s = s.replace(/([\(\)\+\*\%\^\-\/\[\]])/g, "\\$1"));
      } else s = "[\\w\\.]+";
      (c = new RegExp("(" + i + ")\\^(" + s + ")")),
        (e = e.replace(c, "JXG.Math.pow($1,$2)")),
        (f = e.indexOf("^"));
    }
    return e;
  }),
  (JXG.GeonextParser.replaceIf = function (e) {
    var t = "",
      n,
      r,
      i = null,
      s = null,
      o = null,
      u,
      a,
      f,
      l,
      c,
      h,
      p;
    u = e.indexOf("If(");
    if (u < 0) return e;
    e = e.replace(/""/g, "0");
    while (u >= 0) {
      (n = e.slice(0, u)),
        (r = e.slice(u + 3)),
        (f = 1),
        (a = 0),
        (l = -1),
        (c = -1);
      while (a < r.length && f > 0)
        (h = r.charAt(a)),
          h == ")"
            ? f--
            : h == "("
            ? f++
            : h == "," && f == 1 && (l < 0 ? (l = a) : (c = a)),
          a++;
      (p = r.slice(0, a - 1)), (r = r.slice(a));
      if (l < 0) return "";
      if (c < 0) return "";
      (i = p.slice(0, l)),
        (s = p.slice(l + 1, c)),
        (o = p.slice(c + 1)),
        (i = this.replaceIf(i)),
        (s = this.replaceIf(s)),
        (o = this.replaceIf(o)),
        (t += n + "((" + i + ")?" + "(" + s + "):(" + o + "))"),
        (e = r),
        (i = null),
        (s = null),
        (u = e.indexOf("If("));
    }
    return (t += r), t;
  }),
  (JXG.GeonextParser.replaceSub = function (e) {
    if (!e.indexOf) return e;
    var t = e.indexOf("_{"),
      n;
    while (t >= 0)
      (e = e.substr(0, t) + e.substr(t).replace(/_\{/, "<sub>")),
        (n = e.substr(t).indexOf("}")),
        n >= 0 && (e = e.substr(0, n) + e.substr(n).replace(/\}/, "</sub>")),
        (t = e.indexOf("_{"));
    t = e.indexOf("_");
    while (t >= 0)
      (e = e.substr(0, t) + e.substr(t).replace(/_(.?)/, "<sub>$1</sub>")),
        (t = e.indexOf("_"));
    return e;
  }),
  (JXG.GeonextParser.replaceSup = function (e) {
    if (!e.indexOf) return e;
    var t = e.indexOf("^{"),
      n;
    while (t >= 0)
      (e = e.substr(0, t) + e.substr(t).replace(/\^\{/, "<sup>")),
        (n = e.substr(t).indexOf("}")),
        n >= 0 && (e = e.substr(0, n) + e.substr(n).replace(/\}/, "</sup>")),
        (t = e.indexOf("^{"));
    t = e.indexOf("^");
    while (t >= 0)
      (e = e.substr(0, t) + e.substr(t).replace(/\^(.?)/, "<sup>$1</sup>")),
        (t = e.indexOf("^"));
    return e;
  }),
  (JXG.GeonextParser.replaceNameById = function (e, t) {
    var n = 0,
      r,
      i,
      s,
      o,
      u = ["X", "Y", "L", "V"];
    for (o = 0; o < u.length; o++) {
      n = e.indexOf(u[o] + "(");
      while (n >= 0)
        n >= 0 &&
          ((r = e.indexOf(")", n + 2)),
          r >= 0 &&
            ((i = e.slice(n + 2, r)),
            (i = i.replace(/\\(['"])?/g, "$1")),
            (s = t.elementsByName[i]),
            (e = e.slice(0, n + 2) + s.id + e.slice(r)))),
          (r = e.indexOf(")", n + 2)),
          (n = e.indexOf(u[o] + "(", r));
    }
    n = e.indexOf("Dist(");
    while (n >= 0)
      n >= 0 &&
        ((r = e.indexOf(",", n + 5)),
        r >= 0 &&
          ((i = e.slice(n + 5, r)),
          (i = i.replace(/\\(['"])?/g, "$1")),
          (s = t.elementsByName[i]),
          (e = e.slice(0, n + 5) + s.id + e.slice(r)))),
        (r = e.indexOf(",", n + 5)),
        (n = e.indexOf(",", r)),
        (r = e.indexOf(")", n + 1)),
        r >= 0 &&
          ((i = e.slice(n + 1, r)),
          (i = i.replace(/\\(['"])?/g, "$1")),
          (s = t.elementsByName[i]),
          (e = e.slice(0, n + 1) + s.id + e.slice(r))),
        (r = e.indexOf(")", n + 1)),
        (n = e.indexOf("Dist(", r));
    u = ["Deg", "Rad"];
    for (o = 0; o < u.length; o++) {
      n = e.indexOf(u[o] + "(");
      while (n >= 0)
        n >= 0 &&
          ((r = e.indexOf(",", n + 4)),
          r >= 0 &&
            ((i = e.slice(n + 4, r)),
            (i = i.replace(/\\(['"])?/g, "$1")),
            (s = t.elementsByName[i]),
            (e = e.slice(0, n + 4) + s.id + e.slice(r)))),
          (r = e.indexOf(",", n + 4)),
          (n = e.indexOf(",", r)),
          (r = e.indexOf(",", n + 1)),
          r >= 0 &&
            ((i = e.slice(n + 1, r)),
            (i = i.replace(/\\(['"])?/g, "$1")),
            (s = t.elementsByName[i]),
            (e = e.slice(0, n + 1) + s.id + e.slice(r))),
          (r = e.indexOf(",", n + 1)),
          (n = e.indexOf(",", r)),
          (r = e.indexOf(")", n + 1)),
          r >= 0 &&
            ((i = e.slice(n + 1, r)),
            (i = i.replace(/\\(['"])?/g, "$1")),
            (s = t.elementsByName[i]),
            (e = e.slice(0, n + 1) + s.id + e.slice(r))),
          (r = e.indexOf(")", n + 1)),
          (n = e.indexOf(u[o] + "(", r));
    }
    return e;
  }),
  (JXG.GeonextParser.replaceIdByObj = function (e) {
    var t = /(X|Y|L)\(([\w_]+)\)/g;
    return (
      (e = e.replace(t, 'this.board.objects["$2"].$1()')),
      (t = /(V)\(([\w_]+)\)/g),
      (e = e.replace(t, 'this.board.objects["$2"].Value()')),
      (t = /(Dist)\(([\w_]+),([\w_]+)\)/g),
      (e = e.replace(
        t,
        'this.board.objects["$2"].Dist(this.board.objects["$3"])'
      )),
      (t = /(Deg)\(([\w_]+),([ \w\[\w_]+),([\w_]+)\)/g),
      (e = e.replace(
        t,
        'JXG.Math.Geometry.trueAngle(this.board.objects["$2"],this.board.objects["$3"],this.board.objects["$4"])'
      )),
      (t = /Rad\(([\w_]+),([\w_]+),([\w_]+)\)/g),
      (e = e.replace(
        t,
        'JXG.Math.Geometry.rad(this.board.objects["$1"],this.board.objects["$2"],this.board.objects["$3"])'
      )),
      (t = /N\((.+)\)/g),
      (e = e.replace(t, "($1)")),
      e
    );
  }),
  (JXG.GeonextParser.geonext2JS = function (e, t) {
    var n,
      r,
      i,
      s = [
        "Abs",
        "ACos",
        "ASin",
        "ATan",
        "Ceil",
        "Cos",
        "Exp",
        "Factorial",
        "Floor",
        "Log",
        "Max",
        "Min",
        "Random",
        "Round",
        "Sin",
        "Sqrt",
        "Tan",
        "Trunc",
      ],
      o = [
        "Math.abs",
        "Math.acos",
        "Math.asin",
        "Math.atan",
        "Math.ceil",
        "Math.cos",
        "Math.exp",
        "JXG.Math.factorial",
        "Math.floor",
        "Math.log",
        "Math.max",
        "Math.min",
        "Math.random",
        "this.board.round",
        "Math.sin",
        "Math.sqrt",
        "Math.tan",
        "Math.ceil",
      ];
    (e = e.replace(/&lt;/g, "<")),
      (e = e.replace(/&gt;/g, ">")),
      (e = e.replace(/&amp;/g, "&")),
      (r = e),
      (r = this.replaceNameById(r, t)),
      (r = this.replaceIf(r)),
      (r = this.replacePow(r)),
      (r = this.replaceIdByObj(r));
    for (i = 0; i < s.length; i++)
      (n = new RegExp(["(\\W|^)(", s[i], ")"].join(""), "ig")),
        (r = r.replace(n, ["$1", o[i]].join("")));
    return (
      (r = r.replace(/True/g, "true")),
      (r = r.replace(/False/g, "false")),
      (r = r.replace(/fasle/g, "false")),
      (r = r.replace(/Pi/g, "Math.PI")),
      r
    );
  }),
  (JXG.GeonextParser.findDependencies = function (e, t, n) {
    typeof n == "undefined" && (n = e.board);
    var r = n.elementsByName,
      i,
      s,
      o;
    for (i in r)
      i != e.name &&
        (r[i].type == JXG.OBJECT_TYPE_TEXT
          ? r[i].visProp.islabel ||
            ((o = i.replace(/\[/g, "\\[")),
            (o = o.replace(/\]/g, "\\]")),
            (s = new RegExp(
              "\\(([\\w\\[\\]'_ ]+,)*(" + o + ")(,[\\w\\[\\]'_ ]+)*\\)",
              "g"
            )),
            t.search(s) >= 0 && r[i].addChild(e))
          : ((o = i.replace(/\[/g, "\\[")),
            (o = o.replace(/\]/g, "\\]")),
            (s = new RegExp(
              "\\(([\\w\\[\\]'_ ]+,)*(" + o + ")(,[\\w\\[\\]'_ ]+)*\\)",
              "g"
            )),
            t.search(s) >= 0 && r[i].addChild(e)));
  }),
  (JXG.GeonextParser.gxt2jc = function (e, t) {
    var n,
      r = ["Sqrt"],
      i = ["sqrt"];
    return (
      (e = e.replace(/&lt;/g, "<")),
      (e = e.replace(/&gt;/g, ">")),
      (e = e.replace(/&amp;/g, "&")),
      (n = e),
      (n = this.replaceNameById2(n, t)),
      (n = n.replace(/True/g, "true")),
      (n = n.replace(/False/g, "false")),
      (n = n.replace(/fasle/g, "false")),
      n
    );
  }),
  (JXG.GeonextParser.replaceNameById2 = function (e, t) {
    var n = 0,
      r,
      i,
      s,
      o,
      u = ["X", "Y", "L", "V"];
    for (o = 0; o < u.length; o++) {
      n = e.indexOf(u[o] + "(");
      while (n >= 0)
        n >= 0 &&
          ((r = e.indexOf(")", n + 2)),
          r >= 0 &&
            ((i = e.slice(n + 2, r)),
            (i = i.replace(/\\(['"])?/g, "$1")),
            (s = t.elementsByName[i]),
            (e = e.slice(0, n + 2) + "$('" + s.id + "')" + e.slice(r)))),
          (r = e.indexOf(")", n + 2)),
          (n = e.indexOf(u[o] + "(", r));
    }
    n = e.indexOf("Dist(");
    while (n >= 0)
      n >= 0 &&
        ((r = e.indexOf(",", n + 5)),
        r >= 0 &&
          ((i = e.slice(n + 5, r)),
          (i = i.replace(/\\(['"])?/g, "$1")),
          (s = t.elementsByName[i]),
          (e = e.slice(0, n + 5) + "$('" + s.id + "')" + e.slice(r)))),
        (r = e.indexOf(",", n + 5)),
        (n = e.indexOf(",", r)),
        (r = e.indexOf(")", n + 1)),
        r >= 0 &&
          ((i = e.slice(n + 1, r)),
          (i = i.replace(/\\(['"])?/g, "$1")),
          (s = t.elementsByName[i]),
          (e = e.slice(0, n + 1) + "$('" + s.id + "')" + e.slice(r))),
        (r = e.indexOf(")", n + 1)),
        (n = e.indexOf("Dist(", r));
    u = ["Deg", "Rad"];
    for (o = 0; o < u.length; o++) {
      n = e.indexOf(u[o] + "(");
      while (n >= 0)
        n >= 0 &&
          ((r = e.indexOf(",", n + 4)),
          r >= 0 &&
            ((i = e.slice(n + 4, r)),
            (i = i.replace(/\\(['"])?/g, "$1")),
            (s = t.elementsByName[i]),
            (e = e.slice(0, n + 4) + "$('" + s.id + "')" + e.slice(r)))),
          (r = e.indexOf(",", n + 4)),
          (n = e.indexOf(",", r)),
          (r = e.indexOf(",", n + 1)),
          r >= 0 &&
            ((i = e.slice(n + 1, r)),
            (i = i.replace(/\\(['"])?/g, "$1")),
            (s = t.elementsByName[i]),
            (e = e.slice(0, n + 1) + "$('" + s.id + "')" + e.slice(r))),
          (r = e.indexOf(",", n + 1)),
          (n = e.indexOf(",", r)),
          (r = e.indexOf(")", n + 1)),
          r >= 0 &&
            ((i = e.slice(n + 1, r)),
            (i = i.replace(/\\(['"])?/g, "$1")),
            (s = t.elementsByName[i]),
            (e = e.slice(0, n + 1) + "$('" + s.id + "')" + e.slice(r))),
          (r = e.indexOf(")", n + 1)),
          (n = e.indexOf(u[o] + "(", r));
    }
    return e;
  }),
  (JXG.Board = function (e, t, n, r, i, s, o, u, a, f, l) {
    (this.BOARD_MODE_NONE = 0),
      (this.BOARD_MODE_DRAG = 1),
      (this.BOARD_MODE_MOVE_ORIGIN = 2),
      (this.BOARD_QUALITY_LOW = 1),
      (this.BOARD_QUALITY_HIGH = 2),
      (this.BOARD_MODE_ZOOM = 17),
      (this.BOARD_MODE_CONSTRUCT = 16),
      (this.CONSTRUCTION_TYPE_POINT = 1129599060),
      (this.CONSTRUCTION_TYPE_CIRCLE = 1129595724),
      (this.CONSTRUCTION_TYPE_LINE = 1129598030),
      (this.CONSTRUCTION_TYPE_GLIDER = 1129596740),
      (this.CONSTRUCTION_TYPE_MIDPOINT = 1129598288),
      (this.CONSTRUCTION_TYPE_PERPENDICULAR = 1129599044),
      (this.CONSTRUCTION_TYPE_PARALLEL = 1129599052),
      (this.CONSTRUCTION_TYPE_INTERSECTION = 1129597267),
      (this.container = e),
      (this.containerObj =
        typeof document != "undefined"
          ? document.getElementById(this.container)
          : null);
    if (typeof document != "undefined" && this.containerObj == null)
      throw new Error(
        "\nJSXGraph: HTML container element '" + e + "' not found."
      );
    (this.renderer = t),
      (this.grids = []),
      (this.options = JXG.deepCopy(JXG.Options)),
      (this.dimension = 2),
      (this.jc = new JXG.JessieCode()),
      this.jc.use(this),
      (this.origin = {}),
      (this.origin.usrCoords = [1, 0, 0]),
      (this.origin.scrCoords = [1, r[0], r[1]]),
      (this.zoomX = i),
      (this.zoomY = s),
      (this.unitX = o * this.zoomX),
      (this.unitY = u * this.zoomY),
      (this.canvasWidth = a),
      (this.canvasHeight = f),
      JXG.exists(n) &&
      n !== "" &&
      typeof document != "undefined" &&
      !JXG.exists(document.getElementById(n))
        ? (this.id = n)
        : (this.id = this.generateId()),
      JXG.EventEmitter.eventify(this),
      (this.hooks = []),
      (this.dependentBoards = []),
      (this.inUpdate = !1),
      (this.objects = {}),
      (this.objectsList = []),
      (this.groups = {}),
      (this.animationObjects = {}),
      (this.highlightedObjects = {}),
      (this.numObjects = 0),
      (this.elementsByName = {}),
      (this.mode = this.BOARD_MODE_NONE),
      (this.updateQuality = this.BOARD_QUALITY_HIGH),
      (this.isSuspendedRedraw = !1),
      this.calculateSnapSizes(),
      (this.drag_dx = 0),
      (this.drag_dy = 0),
      (this.mouse = null),
      (this.touches = []),
      (this.xmlString = ""),
      (this.cPos = []),
      (this.touchMoveLast = 0),
      (this.downObjects = []),
      (this.showCopyright = !1);
    if ((l != null && l) || (l == null && this.options.showCopyright))
      (this.showCopyright = !0),
        this.renderer.displayCopyright(
          JXG.JSXGraph.licenseText,
          parseInt(this.options.text.fontSize)
        );
    (this.needsFullUpdate = !1),
      (this.reducedUpdate = !1),
      (this.currentCBDef = "none"),
      (this.geonextCompatibilityMode = !1),
      this.options.text.useASCIIMathML && translateASCIIMath
        ? init()
        : (this.options.text.useASCIIMathML = !1),
      (this.hasMouseHandlers = !1),
      (this.hasTouchHandlers = !1),
      (this.hasMouseUp = !1),
      (this.hasTouchEnd = !1),
      this.addEventHandlers(),
      (this.methodMap = {
        update: "update",
        on: "on",
        off: "off",
        setView: "setBoundingBox",
        setBoundingBox: "setBoundingBox",
        migratePoint: "migratePoint",
        colorblind: "emulateColorblindness",
      });
  }),
  JXG.extend(JXG.Board.prototype, {
    generateName: function (e) {
      if (e.type == JXG.OBJECT_TYPE_TICKS) return "";
      var t,
        n = 2,
        r = "",
        i = "",
        s = [],
        o = "",
        u,
        a;
      e.elementClass == JXG.OBJECT_CLASS_POINT
        ? (t = [
            "",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
          ])
        : e.type == JXG.OBJECT_TYPE_ANGLE
        ? (t = [
            "",
            "&alpha;",
            "&beta;",
            "&gamma;",
            "&delta;",
            "&epsilon;",
            "&zeta;",
            "&eta;",
            "&theta;",
            "&iota;",
            "&kappa;",
            "&lambda;",
            "&mu;",
            "&nu;",
            "&xi;",
            "&omicron;",
            "&pi;",
            "&rho;",
            "&sigma;",
            "&tau;",
            "&upsilon;",
            "&phi;",
            "&chi;",
            "&psi;",
            "&omega;",
          ])
        : (t = [
            "",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
          ]),
        e.elementClass !== JXG.OBJECT_CLASS_POINT &&
          e.elementClass != JXG.OBJECT_CLASS_LINE &&
          e.type != JXG.OBJECT_TYPE_ANGLE &&
          (e.type === JXG.OBJECT_TYPE_POLYGON
            ? (r = "P_{")
            : e.elementClass === JXG.OBJECT_CLASS_CIRCLE
            ? (r = "k_{")
            : e.type === JXG.OBJECT_TYPE_TEXT
            ? (r = "t_{")
            : (r = "s_{"),
          (i = "}"));
      for (u = 0; u < n; u++) s[u] = 0;
      while (s[n - 1] < t.length) {
        for (s[0] = 1; s[0] < t.length; s[0]++) {
          o = r;
          for (u = n; u > 0; u--) o += t[s[u - 1]];
          if (this.elementsByName[o + i] == null) return o + i;
        }
        s[0] = t.length;
        for (u = 1; u < n; u++)
          s[u - 1] == t.length && ((s[u - 1] = 1), s[u]++);
      }
      return "";
    },
    generateId: function () {
      var e = 1;
      while (JXG.JSXGraph.boards["jxgBoard" + e] != null)
        e = Math.round(Math.random() * 65535);
      return "jxgBoard" + e;
    },
    setId: function (e, t) {
      var n = this.numObjects++,
        r = e.id;
      if (r == "" || !JXG.exists(r)) r = this.id + t + n;
      return (
        (e.id = r),
        (this.objects[r] = e),
        (e._pos = this.objectsList.length),
        (this.objectsList[this.objectsList.length] = e),
        r
      );
    },
    finalizeAdding: function (e) {
      e.visProp.visible || this.renderer.hide(e);
    },
    finalizeLabel: function (e) {
      e.hasLabel &&
        !e.label.content.visProp.islabel &&
        !e.label.content.visProp.visible &&
        this.renderer.hide(e.label.content);
    },
    getCoordsTopLeftCorner: function () {
      var e = this.containerObj,
        t = JXG.getOffset(e),
        n = document.documentElement.ownerDocument,
        r = function (t) {
          var n = parseInt(JXG.getStyle(e, t));
          return isNaN(n) ? 0 : n;
        };
      return this.cPos.length > 0 &&
        (this.mode === JXG.BOARD_MODE_DRAG ||
          this.mode === JXG.BOARD_MODE_MOVE_ORIGIN)
        ? this.cPos
        : (!e.currentStyle &&
            n.defaultView &&
            ((e = document.documentElement),
            (t[0] += r("margin-left")),
            (t[1] += r("margin-top")),
            (t[0] += r("border-left-width")),
            (t[1] += r("border-top-width")),
            (t[0] += r("padding-left")),
            (t[1] += r("padding-top")),
            (e = this.containerObj)),
          (t[0] += r("border-left-width")),
          (t[1] += r("border-top-width")),
          this.renderer.type !== "vml" &&
            ((t[0] += r("padding-left")), (t[1] += r("padding-top"))),
          (this.cPos = t),
          t);
    },
    getMousePosition: function (e, t) {
      var n = this.getCoordsTopLeftCorner(),
        r,
        i;
      return (r = JXG.getPosition(e, t)), [r[0] - n[0], r[1] - n[1]];
    },
    initMoveOrigin: function (e, t) {
      (this.drag_dx = e - this.origin.scrCoords[1]),
        (this.drag_dy = t - this.origin.scrCoords[2]),
        (this.mode = this.BOARD_MODE_MOVE_ORIGIN);
    },
    initMoveObject: function (e, t, n, r) {
      var i,
        s,
        o = [],
        u,
        a = this.objectsList.length,
        f = { visProp: { layer: -1e4 } };
      for (s = 0; s < a; s++) {
        (i = this.objectsList[s]),
          (u = i.hasPoint && i.hasPoint(e, t)),
          i.visProp.visible &&
            u &&
            (i.triggerEventHandlers([r + "down", "down"], n),
            this.downObjects.push(i));
        if (
          ((this.geonextCompatibilityMode &&
            (i.elementClass == JXG.OBJECT_CLASS_POINT ||
              i.type == JXG.OBJECT_TYPE_TEXT)) ||
            !this.geonextCompatibilityMode) &&
          i.isDraggable &&
          i.visProp.visible &&
          !i.visProp.fixed &&
          !i.visProp.frozen &&
          u &&
          i.visProp.layer >= f.visProp.layer
        ) {
          if (JXG.exists(f.label) && i == f.label.content) continue;
          (f = i), (o[0] = f);
        }
      }
      return (
        o.length > 0 && (this.mode = this.BOARD_MODE_DRAG),
        this.options.takeFirst && (o.length = 1),
        o
      );
    },
    moveObject: function (e, t, n, r, i) {
      var s = new JXG.Coords(
          JXG.COORDS_BY_SCREEN,
          this.getScrCoordsOfMouse(e, t),
          this
        ),
        o = n.obj,
        u;
      o.type != JXG.OBJECT_TYPE_GLIDER
        ? (isNaN(n.targets[0].Xprev + n.targets[0].Yprev) ||
            o.setPositionDirectly(JXG.COORDS_BY_SCREEN, s.scrCoords.slice(1), [
              n.targets[0].Xprev,
              n.targets[0].Yprev,
            ]),
          (n.targets[0].Xprev = s.scrCoords[1]),
          (n.targets[0].Yprev = s.scrCoords[2]),
          this.update(o))
        : o.type == JXG.OBJECT_TYPE_GLIDER &&
          ((u = o.coords),
          o.setPositionDirectly(JXG.COORDS_BY_USER, s.usrCoords.slice(1)),
          o.slideObject.elementClass == JXG.OBJECT_CLASS_CIRCLE
            ? (o.coords = JXG.Math.Geometry.projectPointToCircle(
                o,
                o.slideObject,
                this
              ))
            : o.slideObject.elementClass == JXG.OBJECT_CLASS_LINE &&
              (o.coords = JXG.Math.Geometry.projectPointToLine(
                o,
                o.slideObject,
                this
              )),
          o.group.length != 0
            ? ((o.group[o.group.length - 1].dX =
                o.coords.scrCoords[1] - u.scrCoords[1]),
              (o.group[o.group.length - 1].dY =
                o.coords.scrCoords[2] - u.scrCoords[2]),
              o.group[o.group.length - 1].update(this))
            : this.update(o)),
        o.triggerEventHandlers([i + "drag", "drag"], r),
        this.updateInfobox(o),
        this.update(),
        o.highlight(!0);
    },
    twoFingerMove: function (e, t, n, r) {
      var i, s, o;
      if (!JXG.exists(n) || !JXG.exists(n.obj)) return;
      (o = n.obj),
        (i = new JXG.Coords(
          JXG.COORDS_BY_SCREEN,
          this.getScrCoordsOfMouse(e[0], e[1]),
          this
        )),
        (s = new JXG.Coords(
          JXG.COORDS_BY_SCREEN,
          this.getScrCoordsOfMouse(t[0], t[1]),
          this
        )),
        o.elementClass === JXG.OBJECT_CLASS_LINE ||
        o.type === JXG.OBJECT_TYPE_POLYGON
          ? this.twoFingerTouchObject(i, s, n, o)
          : o.elementClass === JXG.OBJECT_CLASS_CIRCLE &&
            this.twoFingerTouchCircle(i, s, n, o),
        o.triggerEventHandlers(["touchdrag", "drag"], r),
        (n.targets[0].Xprev = i.scrCoords[1]),
        (n.targets[0].Yprev = i.scrCoords[2]),
        (n.targets[1].Xprev = s.scrCoords[1]),
        (n.targets[1].Yprev = s.scrCoords[2]);
    },
    twoFingerTouchObject: function (e, t, n, r) {
      var i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b;
      if (
        JXG.exists(n.targets[0]) &&
        JXG.exists(n.targets[1]) &&
        !isNaN(
          n.targets[0].Xprev +
            n.targets[0].Yprev +
            n.targets[1].Xprev +
            n.targets[1].Yprev
        )
      ) {
        (i = e.usrCoords),
          (s = t.usrCoords),
          (o = new JXG.Coords(
            JXG.COORDS_BY_SCREEN,
            [n.targets[0].Xprev, n.targets[0].Yprev],
            this
          ).usrCoords),
          (u = new JXG.Coords(
            JXG.COORDS_BY_SCREEN,
            [n.targets[1].Xprev, n.targets[1].Yprev],
            this
          ).usrCoords),
          (f = [1, (o[1] + u[1]) * 0.5, (o[2] + u[2]) * 0.5]),
          (a = [1, (i[1] + s[1]) * 0.5, (i[2] + s[2]) * 0.5]),
          (c = JXG.Math.crossProduct(o, u)),
          (l = JXG.Math.crossProduct(i, s)),
          (p = JXG.Math.crossProduct(c, l));
        if (Math.abs(p[0]) < JXG.Math.eps) return;
        (p[1] /= p[0]),
          (p[2] /= p[0]),
          (d = JXG.Math.Geometry.rad(f.slice(1), p.slice(1), a.slice(1))),
          (v = this.create("transform", [d, p[1], p[2]], { type: "rotate" })),
          v.update(),
          (f = JXG.Math.matVecMult(v.matrix, f)),
          (f[1] /= f[0]),
          (f[2] /= f[0]),
          (m = this.create("transform", [a[1] - f[1], a[2] - f[2]], {
            type: "translate",
          })),
          m.update(),
          v.melt(m),
          r.visProp.scalable &&
            ((h =
              JXG.Math.Geometry.distance(i, s) /
              JXG.Math.Geometry.distance(o, u)),
            (g = this.create("transform", [-a[1], -a[2]], {
              type: "translate",
            })),
            (y = this.create("transform", [h, h], { type: "scale" })),
            (b = this.create("transform", [a[1], a[2]], { type: "translate" })),
            v.melt(g).melt(y).melt(b)),
          r.elementClass === JXG.OBJECT_CLASS_LINE
            ? v.applyOnce([r.point1, r.point2])
            : r.type === JXG.OBJECT_TYPE_POLYGON &&
              v.applyOnce(r.vertices.slice(0, -1)),
          this.update(),
          r.highlight(!0);
      }
    },
    twoFingerTouchCircle: function (e, t, n, r) {
      var i, s, o, u, a, f, l, c, h, p, d;
      if (r.method === "pointCircle" || r.method === "pointLine") return;
      JXG.exists(n.targets[0]) &&
        JXG.exists(n.targets[1]) &&
        !isNaN(
          n.targets[0].Xprev +
            n.targets[0].Yprev +
            n.targets[1].Xprev +
            n.targets[1].Yprev
        ) &&
        ((i = e.usrCoords),
        (s = t.usrCoords),
        (o = new JXG.Coords(
          JXG.COORDS_BY_SCREEN,
          [n.targets[0].Xprev, n.targets[0].Yprev],
          this
        ).usrCoords),
        (u = new JXG.Coords(
          JXG.COORDS_BY_SCREEN,
          [n.targets[1].Xprev, n.targets[1].Yprev],
          this
        ).usrCoords),
        (l = this.create("transform", [i[1] - o[1], i[2] - o[2]], {
          type: "translate",
        })),
        (f = JXG.Math.Geometry.rad(u.slice(1), i.slice(1), s.slice(1))),
        (c = this.create("transform", [-i[1], -i[2]], { type: "translate" })),
        (h = this.create("transform", [f], { type: "rotate" })),
        l.melt(c).melt(h),
        r.visProp.scalable &&
          ((a =
            JXG.Math.Geometry.distance(i, s) /
            JXG.Math.Geometry.distance(o, u)),
          (p = this.create("transform", [a, a], { type: "scale" })),
          l.melt(p)),
        (d = this.create("transform", [i[1], i[2]], { type: "translate" })),
        l.melt(d),
        l.applyOnce([r.center]),
        r.method === "twoPoints"
          ? l.applyOnce([r.point2])
          : r.method === "pointRadius" &&
            JXG.isNumber(r.updateRadius.origin) &&
            r.setRadius(r.radius * a),
        this.update(r.center),
        r.highlight(!0));
    },
    highlightElements: function (e, t, n, r) {
      var i,
        s,
        o,
        u = this.objectsList.length;
      for (i = 0; i < u; i++)
        (s = this.objectsList[i]),
          (o = s.id),
          s.visProp.highlight &&
            JXG.exists(s.hasPoint) &&
            s.visProp.visible &&
            s.hasPoint(e, t) &&
            (this.updateInfobox(s),
            JXG.exists(this.highlightedObjects[o]) ||
              ((this.highlightedObjects[o] = s),
              s.highlight(),
              this.triggerEventHandlers(["mousehit", "hit"], n, s, r)),
            s.mouseover
              ? s.triggerEventHandlers(["mousemove", "move"], n)
              : (s.triggerEventHandlers(["mouseover", "over"], n),
                (s.mouseover = !0)));
      for (i = 0; i < u; i++)
        (s = this.objectsList[i]),
          (o = s.id),
          s.mouseover &&
            (this.highlightedObjects[o] ||
              (s.triggerEventHandlers(["mouseout", "out"], n),
              (s.mouseover = !1)));
    },
    saveStartPos: function (e, t) {
      var n = [],
        r,
        i;
      if (e.elementClass == JXG.OBJECT_CLASS_LINE)
        n.push(e.point1.coords.usrCoords), n.push(e.point2.coords.usrCoords);
      else if (e.elementClass == JXG.OBJECT_CLASS_CIRCLE)
        n.push(e.center.coords.usrCoords);
      else if (e.type == JXG.OBJECT_TYPE_GLIDER)
        n.push([e.position, e.position, e.position]);
      else if (e.type == JXG.OBJECT_TYPE_POLYGON) {
        i = e.vertices.length - 1;
        for (r = 0; r < i; r++) n.push(e.vertices[r].coords.usrCoords);
      } else if (e.elementClass == JXG.OBJECT_CLASS_POINT)
        n.push(e.coords.usrCoords);
      else
        try {
          n.push(e.coords.usrCoords);
        } catch (s) {
          JXG.debug(
            "JSXGraph+ saveStartPos: obj.coords.usrCoords not available: " + s
          );
        }
      i = n.length;
      for (r = 0; r < i; r++)
        t.Zstart.push(n[r][0]), t.Xstart.push(n[r][1]), t.Ystart.push(n[r][2]);
    },
    mouseOriginMoveStart: function (e) {
      var t =
        this.options.pan.enabled && (!this.options.pan.needShift || e.shiftKey);
      if (t) {
        var n = this.getMousePosition(e);
        this.initMoveOrigin(n[0], n[1]);
      }
      return t;
    },
    mouseOriginMove: function (e) {
      var t = this.mode === this.BOARD_MODE_MOVE_ORIGIN;
      if (t) {
        var n = this.getMousePosition(e);
        this.moveOrigin(n[0], n[1], !0);
      }
      return t;
    },
    touchOriginMoveStart: function (e) {
      var t = e[JXG.touchProperty],
        n =
          t.length == 2 &&
          JXG.Math.Geometry.distance(
            [t[0].screenX, t[0].screenY],
            [t[1].screenX, t[1].screenY]
          ) < 80,
        r = this.options.pan.enabled && (!this.options.pan.needTwoFingers || n);
      if (r) {
        var i = this.getMousePosition(e, 0);
        this.initMoveOrigin(i[0], i[1]);
      }
      return r;
    },
    touchOriginMove: function (e) {
      var t = this.mode === this.BOARD_MODE_MOVE_ORIGIN;
      if (t) {
        var n = this.getMousePosition(e, 0);
        this.moveOrigin(n[0], n[1], !0);
      }
      return t;
    },
    originMoveEnd: function () {
      this.mode = this.BOARD_MODE_NONE;
    },
    addEventHandlers: function () {
      this.addMouseEventHandlers(), this.addTouchEventHandlers();
    },
    addMouseEventHandlers: function () {
      !this.hasMouseHandlers &&
        typeof document != "undefined" &&
        (JXG.addEvent(
          this.containerObj,
          "mousedown",
          this.mouseDownListener,
          this
        ),
        JXG.addEvent(
          this.containerObj,
          "mousemove",
          this.mouseMoveListener,
          this
        ),
        JXG.addEvent(
          this.containerObj,
          "mousewheel",
          this.mouseWheelListener,
          this
        ),
        JXG.addEvent(
          this.containerObj,
          "DOMMouseScroll",
          this.mouseWheelListener,
          this
        ),
        (this.hasMouseHandlers = !0),
        (this.containerObj.oncontextmenu = function (e) {
          return JXG.exists(e) && e.preventDefault(), !1;
        }));
    },
    addTouchEventHandlers: function () {
      !this.hasTouchHandlers &&
        typeof document != "undefined" &&
        (JXG.addEvent(
          this.containerObj,
          "touchstart",
          this.touchStartListener,
          this
        ),
        JXG.addEvent(
          this.containerObj,
          "touchmove",
          this.touchMoveListener,
          this
        ),
        JXG.addEvent(
          this.containerObj,
          "gesturestart",
          this.gestureStartListener,
          this
        ),
        JXG.addEvent(
          this.containerObj,
          "gesturechange",
          this.gestureChangeListener,
          this
        ),
        (this.hasTouchHandlers = !0));
    },
    removeMouseEventHandlers: function () {
      this.hasMouseHandlers &&
        typeof document != "undefined" &&
        (JXG.removeEvent(
          this.containerObj,
          "mousedown",
          this.mouseDownListener,
          this
        ),
        JXG.removeEvent(
          this.containerObj,
          "mousemove",
          this.mouseMoveListener,
          this
        ),
        this.hasMouseUp &&
          (JXG.removeEvent(document, "mouseup", this.mouseUpListener, this),
          (this.hasMouseUp = !1)),
        JXG.removeEvent(
          this.containerObj,
          "mousewheel",
          this.mouseWheelListener,
          this
        ),
        JXG.removeEvent(
          this.containerObj,
          "DOMMouseScroll",
          this.mouseWheelListener,
          this
        ),
        (this.hasMouseHandlers = !1));
    },
    removeTouchEventHandlers: function () {
      this.hasTouchHandlers &&
        typeof document != "undefined" &&
        (JXG.removeEvent(
          this.containerObj,
          "touchstart",
          this.touchStartListener,
          this
        ),
        JXG.removeEvent(
          this.containerObj,
          "touchmove",
          this.touchMoveListener,
          this
        ),
        this.hasTouchEnd &&
          (JXG.removeEvent(document, "touchend", this.touchEndListener, this),
          (this.hasTouchEnd = !1)),
        JXG.removeEvent(
          this.containerObj,
          "gesturestart",
          this.gestureStartListener,
          this
        ),
        JXG.removeEvent(
          this.containerObj,
          "gesturechange",
          this.gestureChangeListener,
          this
        ),
        (this.hasTouchHandlers = !1));
    },
    removeEventHandlers: function () {
      this.removeMouseEventHandlers(), this.removeTouchEventHandlers();
    },
    clickLeftArrow: function () {
      return (
        this.moveOrigin(
          this.origin.scrCoords[1] + this.canvasWidth * 0.1,
          this.origin.scrCoords[2]
        ),
        this
      );
    },
    clickRightArrow: function () {
      return (
        this.moveOrigin(
          this.origin.scrCoords[1] - this.canvasWidth * 0.1,
          this.origin.scrCoords[2]
        ),
        this
      );
    },
    clickUpArrow: function () {
      return (
        this.moveOrigin(
          this.origin.scrCoords[1],
          this.origin.scrCoords[2] - this.canvasHeight * 0.1
        ),
        this
      );
    },
    clickDownArrow: function () {
      return (
        this.moveOrigin(
          this.origin.scrCoords[1],
          this.origin.scrCoords[2] + this.canvasHeight * 0.1
        ),
        this
      );
    },
    gestureChangeListener: function (e) {
      var t,
        n = this.options.zoom.factorX,
        r = this.options.zoom.factorY;
      return this.options.zoom.wheel
        ? (e.preventDefault(),
          this.mode === this.BOARD_MODE_NONE &&
            ((t = new JXG.Coords(
              JXG.COORDS_BY_SCREEN,
              this.getMousePosition(e),
              this
            )),
            (this.options.zoom.factorX = e.scale / this.prevScale),
            (this.options.zoom.factorY = e.scale / this.prevScale),
            this.zoomIn(t.usrCoords[1], t.usrCoords[2]),
            (this.prevScale = e.scale),
            (this.options.zoom.factorX = n),
            (this.options.zoom.factorY = r)),
          !1)
        : !0;
    },
    gestureStartListener: function (e) {
      return this.options.zoom.wheel
        ? (e.preventDefault(), (this.prevScale = 1), !1)
        : !0;
    },
    touchStartListener: function (e, t) {
      var n,
        r,
        i,
        s,
        o,
        u = this.options.precision.touch,
        a,
        f,
        l,
        c = e[JXG.touchProperty];
      this.hasTouchEnd ||
        (JXG.addEvent(document, "touchend", this.touchEndListener, this),
        (this.hasTouchEnd = !0)),
        this.hasMouseHandlers && this.removeMouseEventHandlers(),
        document.selection && typeof document.selection.empty == "function"
          ? document.selection.empty()
          : window.getSelection && window.getSelection().removeAllRanges(),
        (this.options.precision.hasPoint = this.options.precision.touch);
      for (n = 0; n < c.length; n++) c[n].jxg_isused = !1;
      for (n = 0; n < this.touches.length; n++)
        for (s = 0; s < this.touches[n].targets.length; s++) {
          (this.touches[n].targets[s].num = -1),
            (u = this.options.precision.touch);
          do {
            for (o = 0; o < c.length; o++)
              if (
                Math.abs(
                  Math.pow(c[o].screenX - this.touches[n].targets[s].X, 2) +
                    Math.pow(c[o].screenY - this.touches[n].targets[s].Y, 2)
                ) <
                u * u
              ) {
                (this.touches[n].targets[s].num = o),
                  (this.touches[n].targets[s].X = c[o].screenX),
                  (this.touches[n].targets[s].Y = c[o].screenY),
                  (c[o].jxg_isused = !0);
                break;
              }
            u *= 2;
          } while (
            this.touches[n].targets[s].num == -1 &&
            u < this.options.precision.touchMax
          );
          this.touches[n].targets[s].num === -1 &&
            (JXG.debug(
              "i couldn't find a targettouches for target no " +
                s +
                " on " +
                this.touches[n].obj.name +
                " (" +
                this.touches[n].obj.id +
                "). Removed the target."
            ),
            JXG.debug(
              "eps = " + u + ", touchMax = " + JXG.Options.precision.touchMax
            ),
            this.touches[n].targets.splice(n, 1));
        }
      for (n = 0; n < c.length; n++)
        if (t || !c[n].jxg_isused) {
          (r = this.getMousePosition(e, n)),
            t
              ? ((i = [t]), (this.mode = this.BOARD_MODE_DRAG))
              : (i = this.initMoveObject(r[0], r[1], e, "touch"));
          if (i.length != 0) {
            a = i[i.length - 1];
            if (
              JXG.isPoint(a) ||
              a.type === JXG.OBJECT_TYPE_TEXT ||
              a.type === JXG.OBJECT_TYPE_TICKS
            )
              (l = [
                {
                  num: n,
                  X: c[n].screenX,
                  Y: c[n].screenY,
                  Xprev: NaN,
                  Yprev: NaN,
                  Xstart: [],
                  Ystart: [],
                  Zstart: [],
                },
              ]),
                this.saveStartPos(a, l[0]),
                this.touches.push({ obj: a, targets: l }),
                (this.highlightedObjects[a.id] = a),
                a.highlight(!0);
            else if (
              a.elementClass === JXG.OBJECT_CLASS_LINE ||
              a.elementClass === JXG.OBJECT_CLASS_CIRCLE ||
              a.type === JXG.OBJECT_TYPE_POLYGON
            ) {
              f = !1;
              for (s = 0; s < this.touches.length; s++)
                if (a.id === this.touches[s].obj.id) {
                  f = !0;
                  if (this.touches[s].targets.length === 1) {
                    var h = {
                      num: n,
                      X: c[n].screenX,
                      Y: c[n].screenY,
                      Xprev: NaN,
                      Yprev: NaN,
                      Xstart: [],
                      Ystart: [],
                      Zstart: [],
                    };
                    this.saveStartPos(a, h), this.touches[s].targets.push(h);
                  }
                  c[n].jxg_isused = !0;
                }
              f ||
                ((l = [
                  {
                    num: n,
                    X: c[n].screenX,
                    Y: c[n].screenY,
                    Xprev: NaN,
                    Yprev: NaN,
                    Xstart: [],
                    Ystart: [],
                    Zstart: [],
                  },
                ]),
                this.saveStartPos(a, l[0]),
                this.touches.push({ obj: a, targets: l }),
                (this.highlightedObjects[a.id] = a),
                a.highlight(!0));
            }
          }
          c[n].jxg_isused = !0;
        }
      this.touches.length > 0 && (e.preventDefault(), e.stopPropagation());
      if (this.mode === this.BOARD_MODE_NONE && this.touchOriginMoveStart(e))
        return this.triggerEventHandlers(["touchstart", "down"], e), !1;
      if (JXG.isWebkitAndroid()) {
        var p = new Date();
        this.touchMoveLast = p.getTime() - 200;
      }
      return (
        (this.options.precision.hasPoint = this.options.precision.mouse),
        this.triggerEventHandlers(["touchstart", "down"], e),
        this.touches.length > 0
      );
    },
    touchMoveListener: function (e) {
      var t,
        n = 0,
        r,
        i = e[JXG.touchProperty];
      this.mode !== this.BOARD_MODE_NONE &&
        (e.preventDefault(), e.stopPropagation());
      if (JXG.isWebkitAndroid()) {
        var s = new Date();
        s = s.getTime();
        if (s - this.touchMoveLast < 80)
          return (
            (this.updateQuality = this.BOARD_QUALITY_HIGH),
            this.triggerEventHandlers(["touchmove", "move"], e, this.mode),
            !1
          );
        this.touchMoveLast = s;
      }
      this.mode != this.BOARD_MODE_DRAG && this.renderer.hide(this.infobox),
        (this.options.precision.hasPoint = this.options.precision.touch);
      if (!this.touchOriginMove(e) && this.mode == this.BOARD_MODE_DRAG)
        for (t = 0; t < this.touches.length; t++)
          this.touches[t].targets.length === 1
            ? i[this.touches[t].targets[0].num] &&
              ((this.touches[t].targets[0].X =
                i[this.touches[t].targets[0].num].screenX),
              (this.touches[t].targets[0].Y =
                i[this.touches[t].targets[0].num].screenY),
              (r = this.getMousePosition(e, this.touches[t].targets[0].num)),
              this.moveObject(r[0], r[1], this.touches[t], e, "touch"))
            : this.touches[t].targets.length === 2 &&
              this.touches[t].targets[0].num > -1 &&
              this.touches[t].targets[1].num > -1 &&
              i[this.touches[t].targets[0].num] &&
              i[this.touches[t].targets[1].num] &&
              ((this.touches[t].targets[0].X =
                i[this.touches[t].targets[0].num].screenX),
              (this.touches[t].targets[0].Y =
                i[this.touches[t].targets[0].num].screenY),
              (this.touches[t].targets[1].X =
                i[this.touches[t].targets[1].num].screenX),
              (this.touches[t].targets[1].Y =
                i[this.touches[t].targets[1].num].screenY),
              this.twoFingerMove(
                this.getMousePosition(e, this.touches[t].targets[0].num),
                this.getMousePosition(e, this.touches[t].targets[1].num),
                this.touches[t],
                e
              ));
      return (
        this.mode != this.BOARD_MODE_DRAG && this.renderer.hide(this.infobox),
        (this.options.precision.hasPoint = this.options.precision.mouse),
        this.triggerEventHandlers(["touchmove", "move"], e, this.mode),
        this.mode === this.BOARD_MODE_NONE
      );
    },
    touchEndListener: function (e) {
      var t,
        n,
        r,
        i = this.options.precision.touch,
        s = [],
        o,
        u,
        a = e[JXG.touchProperty];
      this.triggerEventHandlers(["touchend", "up"], e),
        this.renderer.hide(this.infobox);
      if (a.length > 0) {
        for (t = 0; t < this.touches.length; t++) s[t] = this.touches[t];
        this.touches.length = 0;
        for (t = 0; t < a.length; t++) a[t].jxg_isused = !1;
        for (t = 0; t < s.length; t++) {
          (o = !1), (u = 0);
          for (n = 0; n < s[t].targets.length; n++) {
            s[t].targets[n].found = !1;
            for (r = 0; r < a.length; r++)
              if (
                Math.abs(
                  Math.pow(a[r].screenX - s[t].targets[n].X, 2) +
                    Math.pow(a[r].screenY - s[t].targets[n].Y, 2)
                ) <
                i * i
              ) {
                (s[t].targets[n].found = !0),
                  (s[t].targets[n].num = r),
                  (s[t].targets[n].X = a[r].screenX),
                  (s[t].targets[n].Y = a[r].screenY),
                  u++;
                break;
              }
          }
          JXG.isPoint(s[t].obj)
            ? (o = s[t].targets[0] && s[t].targets[0].found)
            : s[t].obj.elementClass === JXG.OBJECT_CLASS_LINE
            ? (o =
                (s[t].targets[0] && s[t].targets[0].found) ||
                (s[t].targets[1] && s[t].targets[1].found))
            : s[t].obj.elementClass === JXG.OBJECT_CLASS_CIRCLE &&
              (o = u === 1 || u === 3);
          if (o) {
            this.touches.push({ obj: s[t].obj, targets: [] });
            for (n = 0; n < s[t].targets.length; n++)
              s[t].targets[n].found &&
                this.touches[this.touches.length - 1].targets.push({
                  num: s[t].targets[n].num,
                  X: s[t].targets[n].screenX,
                  Y: s[t].targets[n].screenY,
                  Xprev: NaN,
                  Yprev: NaN,
                  Xstart: s[t].targets[n].Xstart,
                  Ystart: s[t].targets[n].Ystart,
                  Zstart: s[t].targets[n].Zstart,
                });
          } else
            delete this.highlightedObjects[s[t].obj.id], s[t].obj.noHighlight();
        }
      } else this.touches.length = 0;
      for (t = 0; t < this.downObjects.length; t++) {
        o = !1;
        for (n = 0; n < this.touches.length; n++)
          this.touches[n].obj.id == this.downObjects[t].id && (o = !0);
        o ||
          (this.downObjects[t].triggerEventHandlers(["touchup", "up"], e),
          this.downObjects[t].snapToGrid(),
          this.downObjects.splice(t, 1));
      }
      if (!a || a.length === 0)
        JXG.removeEvent(document, "touchend", this.touchEndListener, this),
          (this.hasTouchEnd = !1),
          this.dehighlightAll(),
          (this.updateQuality = this.BOARD_QUALITY_HIGH),
          this.originMoveEnd(),
          this.update();
      return !0;
    },
    mouseDownListener: function (e, t) {
      var n, r, i, s, o;
      return (
        document.selection && typeof document.selection.empty == "function"
          ? document.selection.empty()
          : window.getSelection && window.getSelection().removeAllRanges(),
        this.hasMouseUp ||
          (JXG.addEvent(document, "mouseup", this.mouseUpListener, this),
          (this.hasMouseUp = !0)),
        (n = this.getMousePosition(e)),
        t
          ? ((r = [t]), (this.mode = this.BOARD_MODE_DRAG))
          : (r = this.initMoveObject(n[0], n[1], e, "mouse")),
        r.length == 0
          ? ((this.mode = this.BOARD_MODE_NONE), (s = !0))
          : ((this.mouse = {
              obj: null,
              targets: [{ X: n[0], Y: n[1], Xprev: NaN, Yprev: NaN }],
            }),
            (this.mouse.obj = r[r.length - 1]),
            this.dehighlightAll(),
            (this.highlightedObjects[this.mouse.obj.id] = this.mouse.obj),
            this.mouse.obj.highlight(!0),
            (this.mouse.targets[0].Xstart = []),
            (this.mouse.targets[0].Ystart = []),
            (this.mouse.targets[0].Zstart = []),
            this.saveStartPos(this.mouse.obj, this.mouse.targets[0]),
            e && e.preventDefault
              ? e.preventDefault()
              : window.event && (window.event.returnValue = !1)),
        this.mode === this.BOARD_MODE_NONE &&
          (s = this.mouseOriginMoveStart(e)),
        t || this.triggerEventHandlers(["mousedown", "down"], e),
        s
      );
    },
    mouseUpListener: function (e) {
      var t;
      this.triggerEventHandlers(["mouseup", "up"], e),
        (this.updateQuality = this.BOARD_QUALITY_HIGH),
        this.mouse && this.mouse.obj && this.mouse.obj.snapToGrid(),
        this.originMoveEnd(),
        this.dehighlightAll(),
        this.update();
      for (t = 0; t < this.downObjects.length; t++)
        this.downObjects[t].triggerEventHandlers(["mouseup", "up"], e);
      (this.downObjects.length = 0),
        this.hasMouseUp &&
          (JXG.removeEvent(document, "mouseup", this.mouseUpListener, this),
          (this.hasMouseUp = !1)),
        (this.mouse = null);
    },
    mouseMoveListener: function (e) {
      var t;
      (t = this.getMousePosition(e)),
        (this.updateQuality = this.BOARD_QUALITY_LOW),
        this.mode != this.BOARD_MODE_DRAG &&
          (this.dehighlightAll(), this.renderer.hide(this.infobox)),
        this.mouseOriginMove(e) ||
          (this.mode == this.BOARD_MODE_DRAG
            ? this.moveObject(t[0], t[1], this.mouse, e, "mouse")
            : this.highlightElements(t[0], t[1], e, -1)),
        (this.updateQuality = this.BOARD_QUALITY_HIGH),
        this.triggerEventHandlers(["mousemove", "move"], e, this.mode);
    },
    mouseWheelListener: function (e) {
      if (
        !this.options.zoom.wheel ||
        (this.options.zoom.needShift && !e.shiftKey)
      )
        return !0;
      e = e || window.event;
      var t = e.detail ? e.detail * -1 : e.wheelDelta / 40,
        n = new JXG.Coords(
          JXG.COORDS_BY_SCREEN,
          this.getMousePosition(e),
          this
        );
      return (
        t > 0
          ? this.zoomIn(n.usrCoords[1], n.usrCoords[2])
          : this.zoomOut(n.usrCoords[1], n.usrCoords[2]),
        e.preventDefault(),
        !1
      );
    },
    updateInfobox: function (e) {
      var t, n, r, i;
      return e.visProp.showinfobox
        ? (e.elementClass == JXG.OBJECT_CLASS_POINT &&
            ((r = e.coords.usrCoords[1]),
            (i = e.coords.usrCoords[2]),
            this.infobox.setCoords(
              r + this.infobox.distanceX / this.unitX,
              i + this.infobox.distanceY / this.unitY
            ),
            typeof e.infoboxText != "string"
              ? (e.visProp.infoboxdigits === "auto"
                  ? ((t = JXG.autoDigits(r)), (n = JXG.autoDigits(i)))
                  : JXG.isNumber(e.visProp.infoboxdigits)
                  ? ((t = r.toFixed(e.visProp.infoboxdigits)),
                    (n = i.toFixed(e.visProp.infoboxdigits)))
                  : ((t = r), (n = i)),
                this.highlightInfobox(t, n, e))
              : this.highlightCustomInfobox(e.infoboxText, e),
            this.renderer.show(this.infobox)),
          this)
        : this;
    },
    highlightCustomInfobox: function (e) {
      return this.infobox.setText(e), this;
    },
    highlightInfobox: function (e, t, n) {
      return this.highlightCustomInfobox("(" + e + ", " + t + ")"), this;
    },
    dehighlightAll: function () {
      var e,
        t,
        n = !1;
      for (e in this.highlightedObjects)
        (t = this.highlightedObjects[e]),
          this.hasMouseHandlers && t.noHighlight(),
          (n = !0);
      return (
        (this.highlightedObjects = {}),
        this.options.renderer == "canvas" &&
          n &&
          (this.prepareUpdate(),
          this.renderer.suspendRedraw(this),
          this.updateRenderer(),
          this.renderer.unsuspendRedraw()),
        this
      );
    },
    getScrCoordsOfMouse: function (e, t) {
      return [e, t];
    },
    getUsrCoordsOfMouse: function (e) {
      var t = this.getCoordsTopLeftCorner(),
        n = JXG.getPosition(e),
        r = n[0] - t[0],
        i = n[1] - t[1],
        s = new JXG.Coords(JXG.COORDS_BY_SCREEN, [r, i], this);
      return s.usrCoords.slice(1);
    },
    getAllUnderMouse: function (e) {
      var t = this.getAllObjectsUnderMouse(e);
      return t.push(this.getUsrCoordsOfMouse(e)), t;
    },
    getAllObjectsUnderMouse: function (e) {
      var t = this.getCoordsTopLeftCorner(),
        n = JXG.getPosition(e),
        r = n[0] - t[0],
        i = n[1] - t[1],
        s = [],
        o,
        u,
        a = this.objectsList.length;
      for (o = 0; o < a; o++)
        (u = this.objectsList[o]),
          u.visProp.visible &&
            u.hasPoint &&
            u.hasPoint(r, i) &&
            (s[s.length] = u);
      return s;
    },
    moveOrigin: function (e, t, n) {
      var r,
        i,
        s = this.objectsList.length;
      JXG.exists(e) &&
        JXG.exists(t) &&
        ((this.origin.scrCoords[1] = e),
        (this.origin.scrCoords[2] = t),
        n &&
          ((this.origin.scrCoords[1] -= this.drag_dx),
          (this.origin.scrCoords[2] -= this.drag_dy)));
      for (i = 0; i < s; i++)
        (r = this.objectsList[i]),
          !r.visProp.frozen &&
            (r.elementClass == JXG.OBJECT_CLASS_POINT ||
              r.elementClass == JXG.OBJECT_CLASS_CURVE ||
              r.type == JXG.OBJECT_TYPE_AXIS ||
              r.type == JXG.OBJECT_TYPE_TEXT) &&
            r.elementClass != JXG.OBJECT_CLASS_CURVE &&
            r.type != JXG.OBJECT_TYPE_AXIS &&
            r.coords.usr2screen();
      return this.clearTraces(), this.fullUpdate(), this;
    },
    addConditions: function (e) {
      var t = "var el, x, y, c, rgbo;\n",
        n = e.indexOf("<data>"),
        r = e.indexOf("</data>"),
        i,
        s,
        o,
        u,
        a,
        f;
      if (n < 0) return;
      while (n >= 0) {
        (i = e.slice(n + 6, r)),
          (s = i.indexOf("=")),
          (o = i.slice(0, s)),
          (u = i.slice(s + 1)),
          (s = o.indexOf(".")),
          (a = o.slice(0, s)),
          (f = this.elementsByName[JXG.unescapeHTML(a)]);
        var l = o
          .slice(s + 1)
          .replace(/\s+/g, "")
          .toLowerCase();
        (u = JXG.GeonextParser.geonext2JS(u, this)),
          (u = u.replace(/this\.board\./g, "this.")),
          JXG.exists(this.elementsByName[a]) ||
            JXG.debug("debug conditions: |" + a + "| undefined"),
          (t += 'el = this.objects["' + f.id + '"];\n');
        switch (l) {
          case "x":
            (t += "var y=el.coords.usrCoords[2];\n"),
              (t +=
                "el.setPositionDirectly(JXG.COORDS_BY_USER,[" + u + ",y]);\n"),
              (t += "el.prepareUpdate().update();\n");
            break;
          case "y":
            (t += "var x=el.coords.usrCoords[1];\n"),
              (t +=
                "el.coords=new JXG.Coords(JXG.COORDS_BY_USER,[x," +
                u +
                "],this);\n"),
              (t +=
                "el.setPositionDirectly(JXG.COORDS_BY_USER,[x," + u + "]);\n"),
              (t += "el.prepareUpdate().update();\n");
            break;
          case "visible":
            (t += "var c=" + u + ";\n"),
              (t += "el.visProp.visible = c;\n"),
              (t += "if (c) {el.showElement();} else {el.hideElement();}\n");
            break;
          case "position":
            (t += "el.position = " + u + ";\n"),
              (t += "el.prepareUpdate().update(true);\n");
            break;
          case "stroke":
            (t += "rgbo = JXG.rgba2rgbo(" + u + ");\n"),
              (t += "el.visProp.strokecolor = rgbo[0];\n"),
              (t += "el.visProp.strokeopacity = rgbo[1];\n");
            break;
          case "style":
            t += "el.setStyle(" + u + ");\n";
            break;
          case "strokewidth":
            t += "el.strokeWidth = " + u + ";\n";
            break;
          case "fill":
            (t += "var rgbo = JXG.rgba2rgbo(" + u + ");\n"),
              (t += "el.visProp.fillcolor = rgbo[0];\n"),
              (t += "el.visProp.fillopacity = rgbo[1];\n");
            break;
          case "label":
            break;
          default:
            JXG.debug(
              "property '" + l + "' in conditions not yet implemented:" + u
            );
        }
        (e = e.slice(r + 7)),
          (n = e.indexOf("<data>")),
          (r = e.indexOf("</data>"));
      }
      (t += "this.prepareUpdate().updateElements();\n"),
        (t += "return true;\n"),
        (t = t.replace(/&lt;/g, "<")),
        (t = t.replace(/&gt;/g, ">")),
        (t = t.replace(/&amp;/g, "&")),
        (this.updateConditions = new Function(t)),
        this.updateConditions();
    },
    updateConditions: function () {
      return !1;
    },
    calculateSnapSizes: function () {
      var e = new JXG.Coords(JXG.COORDS_BY_USER, [0, 0], this),
        t = new JXG.Coords(
          JXG.COORDS_BY_USER,
          [this.options.grid.gridX, this.options.grid.gridY],
          this
        ),
        n = e.scrCoords[1] - t.scrCoords[1],
        r = e.scrCoords[2] - t.scrCoords[2];
      this.options.grid.snapSizeX = this.options.grid.gridX;
      while (Math.abs(n) > 25) (this.options.grid.snapSizeX *= 2), (n /= 2);
      this.options.grid.snapSizeY = this.options.grid.gridY;
      while (Math.abs(r) > 25) (this.options.grid.snapSizeY *= 2), (r /= 2);
      return this;
    },
    applyZoom: function () {
      var e,
        t,
        n = this.objectsList.length;
      for (t = 0; t < n; t++)
        (e = this.objectsList[t]),
          !e.visProp.frozen &&
            (e.elementClass == JXG.OBJECT_CLASS_POINT ||
              e.elementClass == JXG.OBJECT_CLASS_CURVE ||
              e.type == JXG.OBJECT_TYPE_AXIS ||
              e.type == JXG.OBJECT_TYPE_TEXT) &&
            e.elementClass != JXG.OBJECT_CLASS_CURVE &&
            e.type != JXG.OBJECT_TYPE_AXIS &&
            e.coords.usr2screen();
      return (
        this.calculateSnapSizes(), this.clearTraces(), this.fullUpdate(), this
      );
    },
    zoomIn: function (e, t) {
      var n = this.getBoundingBox(),
        r = this.options.zoom.factorX,
        i = this.options.zoom.factorY,
        s = (n[2] - n[0]) * (1 - 1 / r),
        o = (n[1] - n[3]) * (1 - 1 / i),
        u = 0.5,
        a = 0.5;
      return (
        typeof e == "number" &&
          typeof t == "number" &&
          ((u = (e - n[0]) / (n[2] - n[0])), (a = (n[1] - t) / (n[1] - n[3]))),
        this.setBoundingBox(
          [n[0] + s * u, n[1] - o * a, n[2] - s * (1 - u), n[3] + o * (1 - a)],
          !1
        ),
        (this.zoomX *= r),
        (this.zoomY *= i),
        this.applyZoom(),
        this
      );
    },
    zoomOut: function (e, t) {
      var n = this.getBoundingBox(),
        r = this.options.zoom.factorX,
        i = this.options.zoom.factorY,
        s = (n[2] - n[0]) * (1 - r),
        o = (n[1] - n[3]) * (1 - i),
        u = 0.5,
        a = 0.5;
      return this.zoomX < JXG.Options.zoom.eps ||
        this.zoomY < JXG.Options.zoom.eps
        ? this
        : (typeof e == "number" &&
            typeof t == "number" &&
            ((u = (e - n[0]) / (n[2] - n[0])),
            (a = (n[1] - t) / (n[1] - n[3]))),
          this.setBoundingBox(
            [
              n[0] + s * u,
              n[1] - o * a,
              n[2] - s * (1 - u),
              n[3] + o * (1 - a),
            ],
            !1
          ),
          (this.zoomX /= r),
          (this.zoomY /= i),
          this.applyZoom(),
          this);
    },
    zoom100: function () {
      var e = this.getBoundingBox(),
        t = (e[2] - e[0]) * (1 - this.zoomX) * 0.5,
        n = (e[1] - e[3]) * (1 - this.zoomY) * 0.5;
      return (
        this.setBoundingBox([e[0] + t, e[1] - n, e[2] - t, e[3] + n], !1),
        (this.zoomX = 1),
        (this.zoomY = 1),
        this.applyZoom(),
        this
      );
    },
    zoomAllPoints: function () {
      var e = 0,
        t = 0,
        n = 0,
        r = 0,
        i,
        s,
        o,
        u,
        a = this.objectsList.length,
        f;
      for (i = 0; i < a; i++)
        (f = this.objectsList[i]),
          JXG.isPoint(f) &&
            f.visProp.visible &&
            (f.coords.usrCoords[1] < e
              ? (e = f.coords.usrCoords[1])
              : f.coords.usrCoords[1] > t && (t = f.coords.usrCoords[1]),
            f.coords.usrCoords[2] > r
              ? (r = f.coords.usrCoords[2])
              : f.coords.usrCoords[2] < n && (n = f.coords.usrCoords[2]));
      return (
        (s = 50),
        (o = s / this.unitX),
        (u = s / this.unitY),
        (this.zoomX = 1),
        (this.zoomY = 1),
        this.setBoundingBox([e - o, r + u, t + o, n - u], !0),
        this.applyZoom(),
        this
      );
    },
    zoomElements: function (e) {
      var t,
        n,
        r,
        i,
        s = [0, 0, 0, 0],
        o = [1, -1, -1, 1];
      if (!JXG.isArray(e) || e.length === 0) return this;
      for (t = 0; t < e.length; t++) {
        (r = JXG.getRef(this, e[t])), (i = r.bounds());
        if (JXG.isArray(i))
          if (JXG.isArray(s))
            for (n = 0; n < 4; n++) o[n] * i[n] < o[n] * s[n] && (s[n] = i[n]);
          else s = i;
      }
      if (JXG.isArray(s)) {
        for (n = 0; n < 4; n++) s[n] -= o[n];
        (this.zoomX = 1), (this.zoomY = 1), this.setBoundingBox(s, !0);
      }
      return this;
    },
    setZoom: function (e, t) {
      var n = this.options.zoom.factorX,
        r = this.options.zoom.factorY;
      return (
        (this.options.zoom.factorX = e / this.zoomX),
        (this.options.zoom.factorY = t / this.zoomY),
        this.zoomIn(),
        (this.options.zoom.factorX = n),
        (this.options.zoom.factorY = r),
        this
      );
    },
    removeObject: function (e) {
      var t, n;
      if (JXG.isArray(e)) {
        for (n = 0; n < e.length; n++) this.removeObject(e[n]);
        return this;
      }
      e = JXG.getReference(this, e);
      if (!JXG.exists(e)) return this;
      try {
        for (t in e.childElements)
          e.childElements[t].board.removeObject(e.childElements[t]);
        for (t in this.objects)
          JXG.exists(this.objects[t].childElements) &&
            (delete this.objects[t].childElements[e.id],
            delete this.objects[t].descendants[e.id]);
        if (e._pos > -1) {
          this.objectsList.splice(e._pos, 1);
          for (t = e._pos; t < this.objectsList.length; t++)
            this.objectsList[t]._pos--;
        } else JXG.debug("object " + e.id + " not found in list.");
        delete this.objects[e.id],
          delete this.elementsByName[e.name],
          e.visProp && e.visProp.trace && e.clearTrace(),
          JXG.exists(e.remove) && e.remove();
      } catch (r) {
        JXG.debug(e.id + ": Could not be removed: " + r);
      }
      return this.update(), this;
    },
    removeAncestors: function (e) {
      for (var t in e.ancestors) this.removeAncestors(e.ancestors[t]);
      return this.removeObject(e), this;
    },
    initGeonextBoard: function () {
      var e, t, n, r, i;
      return (
        (e = this.create("point", [0, 0], {
          id: this.id + "g00e0",
          name: "Ursprung",
          withLabel: !1,
          visible: !1,
          fixed: !0,
        })),
        (t = this.create("point", [1, 0], {
          id: this.id + "gX0e0",
          name: "Punkt_1_0",
          withLabel: !1,
          visible: !1,
          fixed: !0,
        })),
        (n = this.create("point", [0, 1], {
          id: this.id + "gY0e0",
          name: "Punkt_0_1",
          withLabel: !1,
          visible: !1,
          fixed: !0,
        })),
        (r = this.create("line", [e, t], {
          id: this.id + "gXLe0",
          name: "X-Achse",
          withLabel: !1,
          visible: !1,
        })),
        (i = this.create("line", [e, n], {
          id: this.id + "gYLe0",
          name: "Y-Achse",
          withLabel: !1,
          visible: !1,
        })),
        this
      );
    },
    initInfobox: function () {
      var e = JXG.copyAttributes({}, this.options, "infobox");
      return (
        (e.id = this.id + "_infobox"),
        (this.infobox = this.create("text", [0, 0, "0,0"], e)),
        (this.infobox.distanceX = -20),
        (this.infobox.distanceY = 25),
        (this.infobox.needsUpdateSize = !1),
        (this.infobox.dump = !1),
        this.renderer.hide(this.infobox),
        this
      );
    },
    resizeContainer: function (e, t) {
      return (
        (this.canvasWidth = parseFloat(e)),
        (this.canvasHeight = parseFloat(t)),
        (this.containerObj.style.width = this.canvasWidth + "px"),
        (this.containerObj.style.height = this.canvasHeight + "px"),
        this.renderer.resize(this.canvasWidth, this.canvasHeight),
        this
      );
    },
    showDependencies: function () {
      var e, t, n, r, i;
      t = "<p>\n";
      for (e in this.objects) {
        i = 0;
        for (n in this.objects[e].childElements) i++;
        i >= 0 && (t += "<b>" + this.objects[e].id + ":<" + "/b> ");
        for (n in this.objects[e].childElements)
          t +=
            this.objects[e].childElements[n].id +
            "(" +
            this.objects[e].childElements[n].name +
            ")" +
            ", ";
        t += "<p>\n";
      }
      return (
        (t += "</p>\n"),
        (r = window.open()),
        r.document.open(),
        r.document.write(t),
        r.document.close(),
        this
      );
    },
    showXML: function () {
      var e = window.open("");
      return (
        e.document.open(),
        e.document.write(
          "<pre>" + JXG.escapeHTML(this.xmlString) + "<" + "/pre>"
        ),
        e.document.close(),
        this
      );
    },
    prepareUpdate: function () {
      var e,
        t,
        n = this.objectsList.length;
      for (e = 0; e < n; e++)
        (t = this.objectsList[e]),
          (t.needsUpdate = t.needsRegularUpdate || this.needsFullUpdate);
      return this;
    },
    updateElements: function (e) {
      var t, n;
      e = JXG.getRef(this, e);
      for (t = 0; t < this.objectsList.length; t++)
        (n = this.objectsList[t]), n.update(!JXG.exists(e) || n.id !== e.id);
      return this;
    },
    updateRenderer: function (e) {
      var t,
        n,
        r = this.objectsList.length;
      if (this.options.renderer == "canvas") this.updateRendererCanvas(e);
      else
        for (t = 0; t < r; t++) (n = this.objectsList[t]), n.updateRenderer();
      return this;
    },
    updateRendererCanvas: function (e) {
      var t,
        n,
        r,
        i = this.objectsList.length,
        s = this.options.layer,
        o = this.options.layer.numlayers,
        u = Number.NEGATIVE_INFINITY,
        a,
        f;
      for (r = 0; r < o; r++) {
        a = Number.POSITIVE_INFINITY;
        for (f in s) s[f] > u && s[f] < a && (a = s[f]);
        u = a;
        for (t = 0; t < i; t++)
          (n = this.objectsList[t]),
            n.visProp.layer === a && n.prepareUpdate().updateRenderer();
      }
      return this;
    },
    addHook: function (e, t, n) {
      return (
        (t = JXG.def(t, "update")),
        (n = JXG.def(n, this)),
        this.hooks.push([t, e]),
        this.on(t, e, n),
        this.hooks.length - 1
      );
    },
    addEvent: JXG.shortcut(JXG.Board.prototype, "on"),
    removeHook: function (e) {
      return (
        this.hooks[e] &&
          (this.off(this.hooks[e][0], this.hooks[e][1]),
          (this.hooks[e] = null)),
        this
      );
    },
    removeEvent: JXG.shortcut(JXG.Board.prototype, "off"),
    updateHooks: function (e) {
      return (
        (arguments[0] = JXG.def(arguments[0], "update")),
        this.triggerEventHandlers.apply(this, arguments),
        this
      );
    },
    addChild: function (e) {
      return this.dependentBoards.push(e), this.update(), this;
    },
    removeChild: function (e) {
      var t;
      for (t = this.dependentBoards.length - 1; t >= 0; t--)
        this.dependentBoards[t] == e && this.dependentBoards.splice(t, 1);
      return this;
    },
    update: function (e) {
      var t, n, r, i;
      if (this.inUpdate || this.isSuspendedUpdate) return this;
      (this.inUpdate = !0),
        this.prepareUpdate(e).updateElements(e).updateConditions(),
        this.renderer.suspendRedraw(this),
        this.updateRenderer(e),
        this.renderer.unsuspendRedraw(),
        this.triggerEventHandlers("update"),
        (n = this.dependentBoards.length);
      for (t = 0; t < n; t++)
        (r = this.dependentBoards[t].id),
          (i = JXG.JSXGraph.boards[r]),
          i != this &&
            ((i.updateQuality = this.updateQuality),
            i.prepareUpdate().updateElements().updateConditions(),
            i.renderer.suspendRedraw(),
            i.updateRenderer(),
            i.renderer.unsuspendRedraw(),
            i.triggerEventHandlers("update"));
      return (this.inUpdate = !1), this;
    },
    fullUpdate: function () {
      return (
        (this.needsFullUpdate = !0),
        this.update(),
        (this.needsFullUpdate = !1),
        this
      );
    },
    addGrid: function () {
      return this.create("grid", []), this;
    },
    removeGrids: function () {
      var e;
      for (e = 0; e < this.grids.length; e++) this.removeObject(this.grids[e]);
      return (this.grids.length = 0), this.update(), this;
    },
    create: function (e, t, n) {
      var r, i;
      (e = e.toLowerCase()),
        JXG.exists(t) || (t = []),
        JXG.exists(n) || (n = {});
      for (i = 0; i < t.length; i++)
        if (e != "text" || i != 2) t[i] = JXG.getReference(this, t[i]);
      if (JXG.JSXGraph.elements[e] == null)
        throw new Error(
          "JSXGraph: JXG.createElement: Unknown element type given: " + e
        );
      return (
        typeof JXG.JSXGraph.elements[e] == "function"
          ? (r = JXG.JSXGraph.elements[e](this, t, n))
          : (r = JXG.JSXGraph.elements[e].creator(this, t, n)),
        JXG.exists(r)
          ? (r.prepareUpdate &&
              r.update &&
              r.updateRenderer &&
              r.prepareUpdate().update().updateRenderer(),
            r)
          : (JXG.debug("JSXGraph: JXG.createElement: failure creating " + e), r)
      );
    },
    createElement: JXG.shortcut(JXG.Board.prototype, "create"),
    clearTraces: function () {
      var e;
      for (e = 0; e < this.objectsList.length; e++)
        this.objectsList[e].clearTrace();
      return (this.numTraces = 0), this;
    },
    suspendUpdate: function () {
      return (this.isSuspendedUpdate = !0), this;
    },
    unsuspendUpdate: function () {
      return (this.isSuspendedUpdate = !1), this.update(), this;
    },
    setBoundingBox: function (e, t) {
      if (!JXG.isArray(e)) return this;
      var n,
        r,
        i = JXG.getDimensions(this.container);
      return (
        (this.plainBB = e),
        (this.canvasWidth = parseInt(i.width)),
        (this.canvasHeight = parseInt(i.height)),
        (r = this.canvasWidth),
        (n = this.canvasHeight),
        t
          ? ((this.unitX = r / (e[2] - e[0])),
            (this.unitY = n / (e[1] - e[3])),
            Math.abs(this.unitX) < Math.abs(this.unitY)
              ? (this.unitY =
                  (Math.abs(this.unitX) * this.unitY) / Math.abs(this.unitY))
              : (this.unitX =
                  (Math.abs(this.unitY) * this.unitX) / Math.abs(this.unitX)))
          : ((this.unitX = r / (e[2] - e[0])),
            (this.unitY = n / (e[1] - e[3]))),
        this.moveOrigin(-this.unitX * e[0], this.unitY * e[1]),
        this
      );
    },
    getBoundingBox: function () {
      var e = new JXG.Coords(JXG.COORDS_BY_SCREEN, [0, 0], this),
        t = new JXG.Coords(
          JXG.COORDS_BY_SCREEN,
          [this.canvasWidth, this.canvasHeight],
          this
        );
      return [e.usrCoords[1], e.usrCoords[2], t.usrCoords[1], t.usrCoords[2]];
    },
    addAnimation: function (e) {
      var t = this;
      return (
        (this.animationObjects[e.id] = e),
        this.animationIntervalCode ||
          (this.animationIntervalCode = setInterval(function () {
            JXG.JSXGraph.boards[t.id].animate();
          }, e.board.options.animationDelay)),
        this
      );
    },
    stopAllAnimation: function () {
      var e;
      for (e in this.animationObjects) {
        if (this.animationObjects[e] === null) continue;
        (this.animationObjects[e] = null), delete this.animationObjects[e];
      }
      return (
        clearInterval(this.animationIntervalCode),
        delete this.animationIntervalCode,
        this
      );
    },
    animate: function () {
      var e = 0,
        t,
        n,
        r,
        i,
        s,
        o,
        u = null,
        a;
      for (t in this.animationObjects) {
        if (this.animationObjects[t] === null) continue;
        e++,
          (n = this.animationObjects[t]),
          n.animationPath &&
            (JXG.isFunction(n.animationPath)
              ? (r = n.animationPath(new Date().getTime() - n.animationStart))
              : (r = n.animationPath.pop()),
            !JXG.exists(r) || (!JXG.isArray(r) && isNaN(r))
              ? delete n.animationPath
              : (n.setPositionDirectly(JXG.COORDS_BY_USER, r),
                n.prepareUpdate().update().updateRenderer(),
                (u = n)));
        if (n.animationData) {
          o = 0;
          for (i in n.animationData)
            (s = n.animationData[i].pop()),
              JXG.exists(s)
                ? (o++, n.setProperty(i + ":" + s))
                : delete n.animationData[s];
          o == 0 && delete n.animationData;
        }
        !JXG.exists(n.animationData) &&
          !JXG.exists(n.animationPath) &&
          ((this.animationObjects[t] = null),
          delete this.animationObjects[t],
          JXG.exists(n.animationCallback) &&
            ((a = n.animationCallback), (n.animationCallback = null), a()));
      }
      return (
        e == 0
          ? (clearInterval(this.animationIntervalCode),
            delete this.animationIntervalCode)
          : this.update(u),
        this
      );
    },
    migratePoint: function (e, t) {
      var n, r, i, s, o;
      (e = JXG.getRef(this, e)), (t = JXG.getRef(this, t));
      for (r in e.childElements) {
        (n = e.childElements[r]), (s = !1);
        for (i in n) n[i] === e && ((n[i] = t), (s = !0));
        s && delete e.childElements[r];
        for (o = 0; o < n.parents.length; o++)
          n.parents[o] === e.id && (n.parents[o] = t.id);
        t.addChild(n);
      }
      return this.removeObject(e), this.update(), this;
    },
    emulateColorblindness: function (e) {
      var t,
        n,
        r = this;
      JXG.exists(e) || (e = "none");
      if (this.currentCBDef == e) return this;
      for (t in r.objects)
        (n = r.objects[t]),
          e != "none"
            ? (this.currentCBDef == "none" &&
                (n.visPropOriginal = {
                  strokecolor: n.visProp.strokecolor,
                  fillcolor: n.visProp.fillcolor,
                  highlightstrokecolor: n.visProp.highlightstrokecolor,
                  highlightfillcolor: n.visProp.highlightfillcolor,
                }),
              n.setProperty({
                strokecolor: JXG.rgb2cb(n.visPropOriginal.strokecolor, e),
                fillcolor: JXG.rgb2cb(n.visPropOriginal.fillcolor, e),
                highlightstrokecolor: JXG.rgb2cb(
                  n.visPropOriginal.highlightstrokecolor,
                  e
                ),
                highlightfillcolor: JXG.rgb2cb(
                  n.visPropOriginal.highlightfillcolor,
                  e
                ),
              }))
            : JXG.exists(n.visPropOriginal) &&
              JXG.extend(n.visProp, n.visPropOriginal);
      return (this.currentCBDef = e), this.update(), this;
    },
    updateCSSTransforms: function () {
      var e = this.containerObj,
        t = e,
        n = e;
      this.cssTransMat = JXG.getCSSTransformMatrix(t);
      while ((t = t.offsetParent)) {
        (this.cssTransMat = JXG.Math.matMatMult(
          JXG.getCSSTransformMatrix(t),
          this.cssTransMat
        )),
          (n = n.parentNode);
        while (n != t)
          (this.cssTransMat = JXG.Math.matMatMult(
            JXG.getCSSTransformMatrix(t),
            this.cssTransMat
          )),
            (n = n.parentNode);
      }
      return (this.cssTransMat = JXG.Math.inverse(this.cssTransMat)), this;
    },
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e, t) {},
    __evt__: function (e, t) {},
    __evt__: function (e, t) {},
    __evt__: function (e, t, n) {},
    __evt__: function (e, t, n) {},
    __evt__: function () {},
    __evt__: function () {},
    getPartialConstruction: function (e) {
      var t, n;
      for (n = 1; n < arguments.length; n++) t.push(arguments[n]);
    },
    createRoulette: function (e, t, n, r, i, s, o) {
      var u = this,
        a = function () {
          var a = 0,
            f = 0,
            l = 0,
            c = n,
            h = JXG.Math.Numerics.root(
              function (n) {
                var r = e.X(c),
                  i = e.Y(c),
                  s = t.X(n),
                  o = t.Y(n);
                return (r - s) * (r - s) + (i - o) * (i - o);
              },
              [0, Math.PI * 2]
            ),
            p = 0,
            d = 0,
            v,
            m = u.create(
              "transform",
              [
                function () {
                  return a;
                },
              ],
              { type: "rotate" }
            ),
            g = u.create(
              "transform",
              [
                function () {
                  return a;
                },
                function () {
                  return e.X(c);
                },
                function () {
                  return e.Y(c);
                },
              ],
              { type: "rotate" }
            ),
            y = u.create(
              "transform",
              [
                function () {
                  return f;
                },
                function () {
                  return l;
                },
              ],
              { type: "translate" }
            ),
            b = function (e, t, n) {
              var r = JXG.Math.Numerics.D(e.X)(t),
                i = JXG.Math.Numerics.D(e.Y)(t),
                s = JXG.Math.Numerics.D(e.X)(n),
                o = JXG.Math.Numerics.D(e.Y)(n),
                u = JXG.Math.Numerics.D(e.X)((t + n) * 0.5),
                a = JXG.Math.Numerics.D(e.Y)((t + n) * 0.5),
                f = Math.sqrt(r * r + i * i),
                l = Math.sqrt(s * s + o * o),
                c = Math.sqrt(u * u + a * a);
              return ((f + 4 * c + l) * (n - t)) / 6;
            },
            w = function (e) {
              return v - b(t, h, e);
            },
            E = Math.PI / 18,
            S = E * 9,
            x = null;
          return (
            (this.rolling = function () {
              (p = c + i * r),
                (v = b(e, c, p)),
                (d = JXG.Math.Numerics.root(w, h));
              var n = new JXG.Complex(e.X(p), e.Y(p)),
                s = new JXG.Complex(t.X(d), t.Y(d)),
                x = new JXG.Complex(
                  JXG.Math.Numerics.D(e.X)(p),
                  JXG.Math.Numerics.D(e.Y)(p)
                ),
                T = new JXG.Complex(
                  JXG.Math.Numerics.D(t.X)(d),
                  JXG.Math.Numerics.D(t.Y)(d)
                ),
                N = JXG.C.div(x, T);
              (a = Math.atan2(N.imaginary, N.real)),
                N.div(JXG.C.abs(N)),
                N.mult(s),
                (f = n.real - N.real),
                (l = n.imaginary - N.imaginary),
                a < -E && a > -S
                  ? ((a = -E), g.applyOnce(o))
                  : a > E && a < S
                  ? ((a = E), g.applyOnce(o))
                  : (m.applyOnce(o), y.applyOnce(o), (c = p), (h = d)),
                u.update();
            }),
            (this.start = function () {
              return s > 0 && (x = setInterval(this.rolling, s)), this;
            }),
            (this.stop = function () {
              return clearInterval(x), this;
            }),
            this
          );
        };
      return new a();
    },
  }),
  (JXG.Options = {
    showCopyright: !0,
    showNavigation: !0,
    takeSizeFromFile: !1,
    renderer: "svg",
    takeFirst: !1,
    animationDelay: 35,
    zoom: { factorX: 1.25, factorY: 1.25, wheel: !1, needShift: !1, eps: 0.1 },
    pan: { needShift: !0, needTwoFingers: !0, enabled: !0 },
    jc: { enabled: !0, compile: !0 },
    navbar: {
      strokeColor: "#aaaaaa",
      fillColor: "#f5f5f5",
      padding: "2px",
      position: "absolute",
      fontSize: "10px",
      cursor: "pointer",
      zIndex: "100",
      right: "5px",
      bottom: "5px",
    },
    elements: {
      strokeColor: "#0000ff",
      highlightStrokeColor: "#C3D9FF",
      fillColor: "red",
      highlightFillColor: "none",
      strokeOpacity: 1,
      highlightStrokeOpacity: 1,
      fillOpacity: 1,
      highlightFillOpacity: 1,
      strokeWidth: 2,
      highlightStrokeWidth: 2,
      fixed: !1,
      frozen: !1,
      withLabel: !1,
      visible: !0,
      priv: !1,
      layer: 0,
      dash: 0,
      shadow: !1,
      trace: !1,
      traceAttributes: {},
      highlight: !0,
      needsRegularUpdate: !0,
      snapToGrid: !1,
      scalable: !0,
      draft: {
        draft: !1,
        strokeColor: "#565656",
        fillColor: "#565656",
        strokeOpacity: 0.8,
        fillOpacity: 0.8,
        strokeWidth: 1,
      },
    },
    ticks: {
      drawLabels: !1,
      label: {},
      drawZero: !1,
      insertTicks: !1,
      minTicksDistance: 50,
      minorHeight: 4,
      majorHeight: 10,
      minorTicks: 4,
      scale: 1,
      scaleSymbol: "",
      labels: [],
      ticksDistance: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
      strokeColor: "black",
      highlightStrokeColor: "#888888",
    },
    precision: {
      touch: 30,
      touchMax: 100,
      mouse: 4,
      epsilon: 1e-4,
      hasPoint: 4,
    },
    layer: {
      numlayers: 20,
      text: 9,
      point: 9,
      glider: 9,
      arc: 8,
      line: 7,
      circle: 6,
      curve: 5,
      turtle: 5,
      polygon: 3,
      sector: 3,
      angle: 3,
      integral: 3,
      axis: 2,
      grid: 1,
      image: 0,
      trace: 0,
    },
    angle: {
      withLabel: !0,
      radius: 0.5,
      type: "sector",
      orthoType: "square",
      orthoSensitivity: 1,
      fillColor: "#FF7F00",
      highlightFillColor: "#FF7F00",
      strokeColor: "#FF7F00",
      fillOpacity: 0.3,
      highlightFillOpacity: 0.3,
      radiuspoint: { withLabel: !1, visible: !1, name: "" },
      pointsquare: { withLabel: !1, visible: !1, name: "" },
      dot: {
        visible: !1,
        strokeColor: "none",
        fillColor: "black",
        size: 2,
        face: "o",
        withLabel: !1,
        name: "",
      },
      label: { position: "top", offset: [0, 0], strokeColor: "#0000FF" },
    },
    arc: {
      label: {},
      firstArrow: !1,
      lastArrow: !1,
      fillColor: "none",
      highlightFillColor: "none",
      strokeColor: "#0000ff",
      highlightStrokeColor: "#C3D9FF",
      useDirection: !1,
    },
    inequality: {
      fillColor: "red",
      fillOpacity: 0.2,
      strokeColor: "none",
      inverse: !1,
    },
    axis: {
      needsRegularUpdate: !1,
      strokeWidth: 1,
      strokeColor: "#666666",
      highlightStrokeWidth: 1,
      highlightStrokeColor: "#888888",
      withTicks: !0,
      straightFirst: !0,
      straightLast: !0,
      lastArrow: !0,
      withLabel: !1,
      scalable: !1,
      ticks: {
        label: { offset: [4, -9] },
        needsRegularUpdate: !1,
        strokeWidth: 1,
        strokeColor: "#666666",
        highlightStrokeColor: "#888888",
        drawLabels: !0,
        drawZero: !1,
        insertTicks: !0,
        minTicksDistance: 10,
        minorHeight: 4,
        majorHeight: -1,
        minorTicks: 4,
        ticksDistance: 1,
        strokeOpacity: 0.25,
      },
      point1: { needsRegularUpdate: !1 },
      point2: { needsRegularUpdate: !1 },
      label: { position: "lft", offset: [10, -20] },
    },
    bisector: {
      strokeColor: "#000000",
      point: { visible: !1, fixed: !1, withLabel: !1, name: "" },
    },
    bisectorlines: {
      line1: { strokeColor: "black" },
      line2: { strokeColor: "black" },
    },
    chart: {
      chartStyle: "line",
      colors: [
        "#B02B2C",
        "#3F4C6B",
        "#C79810",
        "#D15600",
        "#FFFF88",
        "#C3D9FF",
        "#4096EE",
        "#008C00",
      ],
      highlightcolors: null,
      fillcolor: null,
      highlightonsector: !1,
      highlightbysize: !1,
    },
    circle: {
      hasInnerPoints: !1,
      fillColor: "none",
      highlightFillColor: "none",
      strokeColor: "#0000ff",
      highlightStrokeColor: "#C3D9FF",
      center: { visible: !1, withLabel: !1, fixed: !1, name: "" },
      label: { position: "urt" },
    },
    circumcircle: {
      fillColor: "none",
      highlightFillColor: "none",
      strokeColor: "#0000ff",
      highlightStrokeColor: "#C3D9FF",
      center: { visible: !1, fixed: !1, withLabel: !1, name: "" },
    },
    circumcirclearc: {
      fillColor: "none",
      highlightFillColor: "none",
      strokeColor: "#0000ff",
      highlightStrokeColor: "#C3D9FF",
      center: { visible: !1, withLabel: !1, fixed: !1, name: "" },
    },
    circumcirclesector: {
      useDirection: !0,
      fillColor: "#00FF00",
      highlightFillColor: "#00FF00",
      fillOpacity: 0.3,
      highlightFillOpacity: 0.3,
      strokeColor: "#0000ff",
      highlightStrokeColor: "#C3D9FF",
      point: { visible: !1, fixed: !1, withLabel: !1, name: "" },
    },
    conic: {
      fillColor: "none",
      highlightFillColor: "none",
      strokeColor: "#0000ff",
      highlightStrokeColor: "#C3D9FF",
      foci: { fixed: !1, visible: !1, withLabel: !1, name: "" },
    },
    curve: {
      strokeWidth: 1,
      strokeColor: "#0000ff",
      fillColor: "none",
      fixed: !0,
      handDrawing: !1,
      curveType: null,
      RDPsmoothing: !1,
      numberPointsHigh: 1600,
      numberPointsLow: 400,
      doAdvancedPlot: !0,
      label: { position: "lft" },
    },
    glider: { label: {} },
    grid: {
      needsRegularUpdate: !1,
      hasGrid: !1,
      gridX: 1,
      gridY: 1,
      strokeColor: "#C0C0C0",
      strokeOpacity: "0.5",
      strokeWidth: 1,
      dash: 0,
      snapToGrid: !1,
      snapSizeX: 10,
      snapSizeY: 10,
    },
    image: {
      imageString: null,
      fillOpacity: 1,
      cssClass: "JXGimage",
      highlightCssClass: "JXGimageHighlight",
      rotate: 0,
    },
    incircle: {
      fillColor: "none",
      highlightFillColor: "none",
      strokeColor: "#0000ff",
      highlightStrokeColor: "#C3D9FF",
      center: { visible: !1, fixed: !1, withLabel: !1, name: "" },
    },
    infobox: {
      fontSize: 12,
      isLabel: !1,
      strokeColor: "#bbbbbb",
      display: "html",
      anchorX: "left",
      anchorY: "middle",
      cssClass: "JXGinfobox",
      rotate: 0,
      visible: !0,
    },
    integral: {
      withLabel: !0,
      strokeWidth: 0,
      strokeOpacity: 0,
      fillOpacity: 0.8,
      curveLeft: { visible: !0, layer: 9 },
      baseLeft: { visible: !1, fixed: !1, withLabel: !1, name: "" },
      curveRight: { visible: !0, layer: 9 },
      baseRight: { visible: !1, fixed: !1, withLabel: !1, name: "" },
      label: { fontSize: 20 },
    },
    intersection: { alwaysIntersect: !0 },
    label: {
      strokeColor: "#552222",
      highlightStrokeOpacity: 1,
      highlightStrokeColor: "#C3D9FF",
      fixed: !0,
      position: "urt",
      offset: [10, 10],
    },
    legend: {
      style: "vertical",
      labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
      colors: [
        "#B02B2C",
        "#3F4C6B",
        "#C79810",
        "#D15600",
        "#FFFF88",
        "#C3D9FF",
        "#4096EE",
        "#008C00",
      ],
    },
    line: {
      firstArrow: !1,
      lastArrow: !1,
      straightFirst: !0,
      straightLast: !0,
      fillColor: "none",
      highlightFillColor: "none",
      strokeColor: "#0000ff",
      highlightStrokeColor: "#888888",
      withTicks: !1,
      point1: { visible: !1, withLabel: !1, fixed: !1, name: "" },
      point2: { visible: !1, withLabel: !1, fixed: !1, name: "" },
      ticks: {
        drawLabels: !0,
        label: { offset: [4, -9] },
        drawZero: !1,
        insertTicks: !1,
        minTicksDistance: 50,
        maxTicksDistance: 300,
        minorHeight: 4,
        majorHeight: -1,
        minorTicks: 4,
        defaultDistance: 1,
        strokeOpacity: 0.3,
      },
      label: { position: "llft" },
    },
    locus: {
      translateToOrigin: !1,
      translateTo10: !1,
      stretch: !1,
      toOrigin: null,
      to10: null,
    },
    normal: {
      strokeColor: "#000000",
      point: { visible: !1, fixed: !1, withLabel: !1, name: "" },
    },
    orthogonalprojection: {},
    parallel: {
      strokeColor: "#000000",
      point: { visible: !1, fixed: !1, withLabel: !1, name: "" },
    },
    perpendicular: {
      strokeColor: "#000000",
      straightFirst: !0,
      straightLast: !0,
    },
    perpendicularsegment: {
      strokeColor: "#000000",
      straightFirst: !1,
      straightLast: !1,
      point: { visible: !1, fixed: !0, withLabel: !1, name: "" },
    },
    point: {
      withLabel: !0,
      label: {},
      style: 5,
      face: "o",
      size: 3,
      fillColor: "#ff0000",
      highlightFillColor: "#EEEEEE",
      strokeWidth: 2,
      strokeColor: "#ff0000",
      highlightStrokeColor: "#C3D9FF",
      zoom: !1,
      showInfobox: !0,
      infoboxDigits: "auto",
      draft: !1,
      attractors: [],
      attractorDistance: 0,
      snatchDistance: 0,
      snapToGrid: !1,
      snapSizeX: 1,
      snapSizeY: 1,
      snapToPoints: !1,
    },
    polygon: {
      hasInnerPoints: !1,
      fillColor: "#00FF00",
      highlightFillColor: "#00FF00",
      fillOpacity: 0.3,
      highlightFillOpacity: 0.3,
      withLines: !0,
      borders: {
        withLabel: !1,
        strokeWidth: 1,
        highlightStrokeWidth: 1,
        layer: 5,
      },
      vertices: {
        withLabel: !0,
        strokeColor: "#ff0000",
        fillColor: "#ff0000",
        fixed: !0,
      },
      label: { offset: [0, 0] },
    },
    prescribedangle: { anglepoint: { size: 2, visible: !1, withLabel: !1 } },
    riemannsum: { withLabel: !1, fillOpacity: 0.3, fillColor: "#ffff00" },
    sector: {
      fillColor: "#00FF00",
      highlightFillColor: "#00FF00",
      fillOpacity: 0.3,
      highlightFillOpacity: 0.3,
      label: { offset: [0, 0] },
    },
    segment: { label: { position: "top" } },
    semicircle: {
      midpoint: { visible: !1, withLabel: !1, fixed: !1, name: "" },
    },
    slider: {
      snapWidth: -1,
      precision: 2,
      firstArrow: !1,
      lastArrow: !1,
      withTicks: !0,
      withLabel: !0,
      layer: 9,
      showInfobox: !1,
      name: "",
      visible: !0,
      strokeColor: "#000000",
      highlightStrokeColor: "#888888",
      fillColor: "#ffffff",
      highlightFillColor: "none",
      size: 6,
      point1: {
        needsRegularUpdate: !1,
        showInfobox: !1,
        withLabel: !1,
        visible: !1,
        fixed: !0,
        name: "",
      },
      point2: {
        needsRegularUpdate: !1,
        showInfobox: !1,
        withLabel: !1,
        visible: !1,
        fixed: !0,
        name: "",
      },
      baseline: {
        needsRegularUpdate: !1,
        name: "",
        strokeWidth: 1,
        strokeColor: "#000000",
        highlightStrokeColor: "#888888",
      },
      ticks: {
        needsRegularUpdate: !1,
        drawLabels: !1,
        drawZero: !0,
        insertTicks: !0,
        minorHeight: 4,
        majorHeight: 10,
        minorTicks: 0,
        defaultDistance: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
        strokeColor: "#000000",
      },
      highline: {
        strokeWidth: 3,
        name: "",
        strokeColor: "#000000",
        highlightStrokeColor: "#888888",
      },
      label: { strokeColor: "#000000" },
    },
    text: {
      fontSize: 12,
      digits: 2,
      isLabel: !1,
      strokeColor: "#552222",
      useASCIIMathML: !1,
      useMathJax: !1,
      display: "html",
      anchorX: "left",
      anchorY: "middle",
      cssClass: "JXGtext",
      highlightCssClass: "JXGtext",
      withLabel: !1,
      rotate: 0,
      visible: !0,
    },
    tracecurve: {
      strokeColor: "#000000",
      fillColor: "none",
      numberPoints: 100,
    },
    turtle: {
      strokeWidth: 1,
      fillColor: "none",
      strokeColor: "#000000",
      arrow: { strokeWidth: 2, withLabel: !1, strokeColor: "#ff0000" },
    },
    shortcuts: {
      color: ["strokeColor", "fillColor"],
      opacity: ["strokeOpacity", "fillOpacity"],
      highlightColor: ["highlightStrokeColor", "highlightFillColor"],
      highlightOpacity: ["highlightStrokeOpacity", "highlightFillOpacity"],
      strokeWidth: ["strokeWidth", "highlightStrokeWidth"],
    },
  }),
  (JXG.Validator = (function () {
    var e = function (e) {
        return /^[0-9]+px$/.test(e);
      },
      t = function (e) {
        return e in { html: 0, internal: 0 };
      },
      n = function (e) {
        return JXG.isString(e);
      },
      r = function (e) {
        return JXG.exists(JXG.Point.prototype.normalizeFace.call(this, e));
      },
      i = function (e) {
        return Math.abs(e - Math.round(e)) < JXG.Math.eps;
      },
      s = function (e) {
        return i(e) && e > 0;
      },
      o = function (e) {
        return e.length >= 2 && i(e[0]) && i(e[1]);
      },
      u = function (e) {
        return e in { vml: 0, svg: 0, canvas: 0 };
      },
      a = function (e) {
        return e > 0;
      },
      f = function (e) {
        return !(e < 0);
      },
      l,
      c = {},
      h = {
        attractorDistance: f,
        color: n,
        defaultDistance: JXG.isNumber,
        display: t,
        doAdvancedPlot: !1,
        draft: !1,
        drawLabels: !1,
        drawZero: !1,
        face: r,
        factor: JXG.isNumber,
        fillColor: n,
        fillOpacity: JXG.isNumber,
        firstArrow: !1,
        fontSize: i,
        dash: i,
        gridX: JXG.isNumber,
        gridY: JXG.isNumber,
        hasGrid: !1,
        highlightFillColor: n,
        highlightFillOpacity: JXG.isNumber,
        highlightStrokeColor: n,
        highlightStrokeOpacity: JXG.isNumber,
        insertTicks: !1,
        lastArrow: !1,
        majorHeight: i,
        maxTicksDistance: s,
        minorHeight: i,
        minorTicks: s,
        minTicksDistance: s,
        numberPointsHigh: s,
        numberPointsLow: s,
        opacity: JXG.isNumber,
        radius: JXG.isNumber,
        RDPsmoothing: !1,
        renderer: u,
        right: e,
        showCopyright: !1,
        showInfobox: !1,
        showNavigation: !1,
        size: i,
        snapSizeX: a,
        snapSizeY: a,
        snapWidth: JXG.isNumber,
        snapToGrid: !1,
        snatchDistance: f,
        straightFirst: !1,
        straightLast: !1,
        stretch: !1,
        strokeColor: n,
        strokeOpacity: JXG.isNumber,
        strokeWidth: i,
        takeFirst: !1,
        takeSizeFromFile: !1,
        to10: !1,
        toOrigin: !1,
        translateTo10: !1,
        translateToOrigin: !1,
        useASCIIMathML: !1,
        useDirection: !1,
        useMathJax: !1,
        withLabel: !1,
        withTicks: !1,
        zoom: !1,
      };
    for (l in h) c[l.toLowerCase()] = h[l];
    return c;
  })()),
  (JXG.useStandardOptions = function (e) {
    var t = JXG.Options,
      n = e.hasGrid,
      r,
      i,
      s,
      o;
    (e.options.grid.hasGrid = t.grid.hasGrid),
      (e.options.grid.gridX = t.grid.gridX),
      (e.options.grid.gridY = t.grid.gridY),
      (e.options.grid.gridColor = t.grid.gridColor),
      (e.options.grid.gridOpacity = t.grid.gridOpacity),
      (e.options.grid.gridDash = t.grid.gridDash),
      (e.options.grid.snapToGrid = t.grid.snapToGrid),
      (e.options.grid.snapSizeX = t.grid.SnapSizeX),
      (e.options.grid.snapSizeY = t.grid.SnapSizeY),
      (e.takeSizeFromFile = t.takeSizeFromFile),
      (o = function (e, t) {
        (e.visProp.fillcolor = t.fillColor),
          (e.visProp.highlightfillcolor = t.highlightFillColor),
          (e.visProp.strokecolor = t.strokeColor),
          (e.visProp.highlightstrokecolor = t.highlightStrokeColor);
      });
    for (r in e.objects) {
      s = e.objects[r];
      if (s.elementClass == JXG.OBJECT_CLASS_POINT) o(s, t.point);
      else if (s.elementClass == JXG.OBJECT_CLASS_LINE) {
        o(s, t.line);
        for (i in s.ticks)
          (i.majorTicks = t.line.ticks.majorTicks),
            (i.minTicksDistance = t.line.ticks.minTicksDistance),
            (i.visProp.minorheight = t.line.ticks.minorHeight),
            (i.visProp.majorheight = t.line.ticks.majorHeight);
      } else
        s.elementClass == JXG.OBJECT_CLASS_CIRCLE
          ? o(s, t.circle)
          : s.type == JXG.OBJECT_TYPE_ANGLE
          ? o(s, t.angle)
          : s.type == JXG.OBJECT_TYPE_ARC
          ? o(s, t.arc)
          : s.type == JXG.OBJECT_TYPE_POLYGON
          ? o(s, t.polygon)
          : s.type == JXG.OBJECT_TYPE_CONIC
          ? o(s, t.conic)
          : s.type == JXG.OBJECT_TYPE_CURVE
          ? o(s, t.curve)
          : s.type == JXG.OBJECT_TYPE_SECTOR &&
            ((s.arc.visProp.fillcolor = t.sector.fillColor),
            (s.arc.visProp.highlightfillcolor = t.sector.highlightFillColor),
            (s.arc.visProp.fillopacity = t.sector.fillOpacity),
            (s.arc.visProp.highlightfillopacity =
              t.sector.highlightFillOpacity));
    }
    e.fullUpdate(),
      n && !e.hasGrid
        ? e.removeGrids(e)
        : !n && e.hasGrid && e.create("grid", []);
  }),
  (JXG.useBlackWhiteOptions = function (e) {
    var t = JXG.Options;
    (t.point.fillColor = JXG.rgb2bw(t.point.fillColor)),
      (t.point.highlightFillColor = JXG.rgb2bw(t.point.highlightFillColor)),
      (t.point.strokeColor = JXG.rgb2bw(t.point.strokeColor)),
      (t.point.highlightStrokeColor = JXG.rgb2bw(t.point.highlightStrokeColor)),
      (t.line.fillColor = JXG.rgb2bw(t.line.fillColor)),
      (t.line.highlightFillColor = JXG.rgb2bw(t.line.highlightFillColor)),
      (t.line.strokeColor = JXG.rgb2bw(t.line.strokeColor)),
      (t.line.highlightStrokeColor = JXG.rgb2bw(t.line.highlightStrokeColor)),
      (t.circle.fillColor = JXG.rgb2bw(t.circle.fillColor)),
      (t.circle.highlightFillColor = JXG.rgb2bw(t.circle.highlightFillColor)),
      (t.circle.strokeColor = JXG.rgb2bw(t.circle.strokeColor)),
      (t.circle.highlightStrokeColor = JXG.rgb2bw(
        t.circle.highlightStrokeColor
      )),
      (t.arc.fillColor = JXG.rgb2bw(t.arc.fillColor)),
      (t.arc.highlightFillColor = JXG.rgb2bw(t.arc.highlightFillColor)),
      (t.arc.strokeColor = JXG.rgb2bw(t.arc.strokeColor)),
      (t.arc.highlightStrokeColor = JXG.rgb2bw(t.arc.highlightStrokeColor)),
      (t.polygon.fillColor = JXG.rgb2bw(t.polygon.fillColor)),
      (t.polygon.highlightFillColor = JXG.rgb2bw(t.polygon.highlightFillColor)),
      (t.sector.fillColor = JXG.rgb2bw(t.sector.fillColor)),
      (t.sector.highlightFillColor = JXG.rgb2bw(t.sector.highlightFillColor)),
      (t.curve.strokeColor = JXG.rgb2bw(t.curve.strokeColor)),
      (t.grid.gridColor = JXG.rgb2bw(t.grid.gridColor)),
      JXG.useStandardOptions(e);
  }),
  (JXG.JSXGraph = {
    licenseText: "JSXGraph v0.96 Copyright (C) see http://jsxgraph.org",
    boards: {},
    elements: {},
    rendererType: (function () {
      var e = function (e) {
        var t, n;
        if (JXG.rendererFiles[e]) {
          t = JXG.rendererFiles[e].split(",");
          for (n = 0; n < t.length; n++)
            (function (e) {
              JXG.require(JXG.requirePath + e + ".js");
            })(t[n]);
          delete JXG.rendererFiles[e];
        }
      };
      JXG.Options.renderer = "no";
      if (JXG.supportsVML()) {
        JXG.Options.renderer = "vml";
        function t() {
          document.body.scrollLeft, document.body.scrollTop;
        }
        (document.onmousemove = t), e("vml");
      }
      return (
        JXG.supportsCanvas() &&
          ((JXG.Options.renderer = "canvas"), e("canvas")),
        JXG.supportsSVG() && ((JXG.Options.renderer = "svg"), e("svg")),
        JXG.isNode() && ((JXG.Options.renderer = "canvas"), e("canvas")),
        JXG.Options.renderer
      );
    })(),
    initBoard: function (e, t) {
      var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w;
      return (
        (f = JXG.getDimensions(e)),
        typeof document != "undefined" && e !== null
          ? (w = document.getElementById(e))
          : (w = e),
        typeof t == "undefined" && (t = {}),
        typeof t["boundingbox"] != "undefined"
          ? ((l = t.boundingbox),
            (u = parseInt(f.width)),
            (a = parseInt(f.height)),
            t.keepaspectratio
              ? ((s = u / (l[2] - l[0])),
                (o = a / (-l[3] + l[1])),
                Math.abs(s) < Math.abs(o)
                  ? (o = (Math.abs(s) * o) / Math.abs(o))
                  : (s = (Math.abs(o) * s) / Math.abs(s)))
              : ((s = u / (l[2] - l[0])), (o = a / (-l[3] + l[1]))),
            (r = -s * l[0]),
            (i = o * l[1]))
          : ((r = typeof t["originX"] == "undefined" ? 150 : t.originX),
            (i = typeof t["originY"] == "undefined" ? 150 : t.originY),
            (s = typeof t["unitX"] == "undefined" ? 50 : t.unitX),
            (o = typeof t["unitY"] == "undefined" ? 50 : t.unitY)),
        (c = typeof t["zoomfactor"] == "undefined" ? 1 : t.zoom),
        (h = c * (typeof t["zoomX"] == "undefined" ? 1 : t.zoomX)),
        (p = c * (typeof t["zoomY"] == "undefined" ? 1 : t.zoomY)),
        (d =
          typeof t["showCopyright"] == "undefined"
            ? JXG.Options.showCopyright
            : t.showCopyright),
        (g = typeof t["zoom"] == "undefined" ? JXG.Options.zoom.wheel : t.zoom),
        (y = typeof t["pan"] == "undefined" ? JXG.Options.pan : t.pan),
        JXG.Options.renderer == "svg"
          ? (n = new JXG.SVGRenderer(w))
          : JXG.Options.renderer == "vml"
          ? (n = new JXG.VMLRenderer(w))
          : JXG.Options.renderer == "silverlight"
          ? (n = new JXG.SilverlightRenderer(w, f.width, f.height))
          : JXG.Options.renderer == "canvas"
          ? (n = new JXG.CanvasRenderer(w))
          : (n = new JXG.NoRenderer()),
        (m = new JXG.Board(e, n, "", [r, i], h, p, s, o, f.width, f.height, d)),
        (this.boards[m.id] = m),
        (m.keepaspectratio = t.keepaspectratio),
        (m.options.zoom.wheel = g),
        (m.options.pan = y),
        m.suspendUpdate(),
        m.initInfobox(),
        t.axis &&
          ((b =
            typeof t.axis == "object" ? t.axis : { ticks: { drawZero: !0 } }),
          (m.defaultAxes = {}),
          (m.defaultAxes.x = m.create(
            "axis",
            [
              [0, 0],
              [1, 0],
            ],
            b
          )),
          (m.defaultAxes.y = m.create(
            "axis",
            [
              [0, 0],
              [0, 1],
            ],
            b
          ))),
        t.grid && m.create("grid", [], typeof t.grid == "object" ? t.grid : {}),
        typeof t["shownavigation"] != "undefined" &&
          (t.showNavigation = t.shownavigation),
        (v =
          typeof t["showNavigation"] == "undefined"
            ? m.options.showNavigation
            : t.showNavigation),
        v && m.renderer.drawZoomBar(m),
        m.unsuspendUpdate(),
        m
      );
    },
    loadBoardFromFile: function (e, t, n) {
      var r, i, s;
      return (
        JXG.Options.renderer == "svg"
          ? (r = new JXG.SVGRenderer(document.getElementById(e)))
          : JXG.Options.renderer == "vml"
          ? (r = new JXG.VMLRenderer(document.getElementById(e)))
          : JXG.Options.renderer == "silverlight"
          ? (r = new JXG.SilverlightRenderer(
              document.getElementById(e),
              s.width,
              s.height
            ))
          : (r = new JXG.CanvasRenderer(document.getElementById(e))),
        (s = JXG.getDimensions(e)),
        (i = new JXG.Board(
          e,
          r,
          "",
          [150, 150],
          1,
          1,
          50,
          50,
          s.width,
          s.height
        )),
        i.initInfobox(),
        JXG.FileReader.parseFileContent(t, i, n),
        i.options.showNavigation && i.renderer.drawZoomBar(i),
        (this.boards[i.id] = i),
        i
      );
    },
    loadBoardFromString: function (e, t, n) {
      var r, i, s;
      return (
        JXG.Options.renderer == "svg"
          ? (r = new JXG.SVGRenderer(document.getElementById(e)))
          : JXG.Options.renderer == "vml"
          ? (r = new JXG.VMLRenderer(document.getElementById(e)))
          : JXG.Options.renderer == "silverlight"
          ? (r = new JXG.SilverlightRenderer(
              document.getElementById(e),
              i.width,
              i.height
            ))
          : (r = new JXG.CanvasRenderer(document.getElementById(e))),
        (i = JXG.getDimensions(e)),
        (s = new JXG.Board(
          e,
          r,
          "",
          [150, 150],
          1,
          1,
          50,
          50,
          i.width,
          i.height
        )),
        s.initInfobox(),
        JXG.FileReader.parseString(t, s, n, !0),
        s.options.showNavigation && s.renderer.drawZoomBar(s),
        (this.boards[s.id] = s),
        s
      );
    },
    freeBoard: function (e) {
      var t, n;
      typeof e == "string" && (e = this.boards[e]),
        e.removeEventHandlers(),
        e.suspendUpdate();
      for (t in e.objects) e.objects[t].remove();
      while (e.containerObj.firstChild)
        e.containerObj.removeChild(e.containerObj.firstChild);
      for (t in e.objects) delete e.objects[t];
      delete e.renderer,
        delete e.algebra,
        e.jc.creator.clearCache(),
        delete e.jc,
        delete this.boards[e.id];
    },
    registerElement: function (e, t) {
      (e = e.toLowerCase()), (this.elements[e] = t);
      if (JXG.Board.prototype["_" + e])
        throw new Error(
          "JSXGraph: Can't create wrapper method in JXG.Board because member '_" +
            e +
            "' already exists'"
        );
      JXG.Board.prototype["_" + e] = function (t, n) {
        return this.create(e, t, n);
      };
    },
    unregisterElement: function (e) {
      delete this.elements[e.toLowerCase()],
        delete JXG.Board.prototype["_" + e.toLowerCase()];
    },
  }),
  JXG.extend(JXG, {
    OBJECT_TYPE_ARC: 1,
    OBJECT_TYPE_ARROW: 2,
    OBJECT_TYPE_AXIS: 3,
    OBJECT_TYPE_AXISPOINT: 4,
    OBJECT_TYPE_TICKS: 5,
    OBJECT_TYPE_CIRCLE: 6,
    OBJECT_TYPE_CONIC: 7,
    OBJECT_TYPE_CURVE: 8,
    OBJECT_TYPE_GLIDER: 9,
    OBJECT_TYPE_IMAGE: 10,
    OBJECT_TYPE_LINE: 11,
    OBJECT_TYPE_POINT: 12,
    OBJECT_TYPE_SLIDER: 13,
    OBJECT_TYPE_CAS: 14,
    OBJECT_TYPE_GXTCAS: 15,
    OBJECT_TYPE_POLYGON: 16,
    OBJECT_TYPE_SECTOR: 17,
    OBJECT_TYPE_TEXT: 18,
    OBJECT_TYPE_ANGLE: 19,
    OBJECT_TYPE_INTERSECTION: 20,
    OBJECT_TYPE_TURTLE: 21,
    OBJECT_TYPE_VECTOR: 22,
    OBJECT_TYPE_OPROJECT: 23,
    OBJECT_TYPE_GRID: 24,
    OBJECT_CLASS_POINT: 1,
    OBJECT_CLASS_LINE: 2,
    OBJECT_CLASS_CIRCLE: 3,
    OBJECT_CLASS_CURVE: 4,
    OBJECT_CLASS_AREA: 5,
    OBJECT_CLASS_OTHER: 6,
  }),
  (JXG.GeometryElement = function (e, t, n, r) {
    var i, s;
    (this.needsUpdate = !0),
      (this.isDraggable = !1),
      (this.isReal = !0),
      (this.childElements = {}),
      (this.hasLabel = !1),
      (this.highlighted = !1),
      (this.notExistingParents = {}),
      (this.traces = {}),
      (this.numTraces = 0),
      (this.transformations = []),
      (this.baseElement = null),
      (this.descendants = {}),
      (this.ancestors = {}),
      (this.symbolic = {}),
      (this.elType = ""),
      (this.dump = !0),
      (this.subs = {}),
      (this._pos = -1),
      (this.stdform = [1, 0, 0, 0, 1, 1, 0, 0]),
      (this.methodMap = {
        setLabel: "setLabelText",
        getName: "getName",
        addTransform: "addTransform",
        setProperty: "setProperty",
        setAttribute: "setAttribute",
      }),
      (this.quadraticform = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
      (this.visProp = {}),
      JXG.EventEmitter.eventify(this),
      (this.mouseover = !1);
    if (arguments.length > 0) {
      (this.board = e),
        (this.type = n),
        (this.elementClass = r || JXG.OBJECT_CLASS_OTHER),
        (this.id = t.id),
        (i = t.name),
        JXG.exists(i) || (i = this.board.generateName(this)),
        (this.board.elementsByName[i] = this),
        (this.name = i),
        (this.needsRegularUpdate = t.needsregularupdate),
        JXG.clearVisPropOld(this),
        (t = this.resolveShortcuts(t));
      for (s in t) this._set(s, t[s]);
      (this.visProp.draft = t.draft && t.draft.draft),
        (this.visProp.gradientangle = "270"),
        (this.visProp.gradientsecondopacity = this.visProp.fillopacity),
        (this.visProp.gradientpositionx = 0.5),
        (this.visProp.gradientpositiony = 0.5);
    }
  }),
  JXG.extend(JXG.GeometryElement.prototype, {
    addChild: function (e) {
      var t, n;
      (this.childElements[e.id] = e),
        this.addDescendants(e),
        (e.ancestors[this.id] = this);
      for (t in this.descendants) {
        this.descendants[t].ancestors[this.id] = this;
        for (n in this.ancestors)
          this.descendants[t].ancestors[this.ancestors[n].id] = this.ancestors[
            n
          ];
      }
      for (t in this.ancestors)
        for (n in this.descendants)
          this.ancestors[t].descendants[
            this.descendants[n].id
          ] = this.descendants[n];
      return this;
    },
    addDescendants: function (e) {
      var t;
      this.descendants[e.id] = e;
      for (t in e.childElements) this.addDescendants(e.childElements[t]);
      return this;
    },
    countChildren: function () {
      var e,
        t = 0,
        n;
      n = this.childElements;
      for (e in n) n.hasOwnProperty(e) && e.indexOf("Label") < 0 && t++;
      return t;
    },
    getName: function () {
      return this.name;
    },
    addTransform: function () {},
    draggable: function () {
      return (
        this.isDraggable &&
        !this.visProp.fixed &&
        !this.visProp.frozen &&
        this.type != JXG.OBJECT_TYPE_GLIDER
      );
    },
    generatePolynomial: function () {
      return [];
    },
    animate: function (e, t, n) {
      n = n || {};
      var r,
        i,
        s = this.board.options.animationDelay,
        o = Math.ceil(t / (s * 1)),
        u,
        a = this,
        f = !1;
      this.animationData = {};
      var l = function (e, t, n) {
          var r, i, s, f, l;
          (r = JXG.rgb2hsv(e)),
            (i = JXG.rgb2hsv(t)),
            (s = (i[0] - r[0]) / (1 * o)),
            (f = (i[1] - r[1]) / (1 * o)),
            (l = (i[2] - r[2]) / (1 * o)),
            (a.animationData[n] = new Array(o));
          for (u = 0; u < o; u++)
            a.animationData[n][o - u - 1] = JXG.hsv2rgb(
              r[0] + (u + 1) * s,
              r[1] + (u + 1) * f,
              r[2] + (u + 1) * l
            );
        },
        c = function (e, t, n, r) {
          var i;
          (e = parseFloat(e)), (t = parseFloat(t));
          if (isNaN(e) || isNaN(t)) return;
          var s = (t - e) / (1 * o);
          a.animationData[n] = new Array(o);
          for (u = 0; u < o; u++)
            (i = e + (u + 1) * s),
              (a.animationData[n][o - u - 1] = r ? Math.floor(i) : i);
        };
      for (r in e) {
        i = r.toLowerCase();
        switch (i) {
          case "strokecolor":
          case "fillcolor":
            l(this.visProp[i], e[r], i);
            break;
          case "size":
            if (this.elementClass !== JXG.OBJECT_CLASS_POINT) break;
            f = !0;
          case "strokeopacity":
          case "strokewidth":
          case "fillopacity":
            c(this.visProp[i], e[r], i, f);
        }
      }
      return (
        (this.animationCallback = n.callback),
        this.board.addAnimation(this),
        this
      );
    },
    update: function () {
      return this.visProp.trace && this.cloneToBackground(!0), this;
    },
    updateRenderer: function () {
      return this;
    },
    hideElement: function () {
      return (
        (this.visProp.visible = !1),
        this.board.renderer.hide(this),
        this.label != null &&
          this.hasLabel &&
          ((this.label.hiddenByParent = !0),
          this.label.content.visProp.visible &&
            this.board.renderer.hide(this.label.content)),
        this
      );
    },
    showElement: function () {
      return (
        (this.visProp.visible = !0),
        this.board.renderer.show(this),
        this.label != null &&
          this.hasLabel &&
          this.label.hiddenByParent &&
          ((this.label.hiddenByParent = !1),
          this.label.content.visProp.visible &&
            this.board.renderer.show(this.label.content)),
        this
      );
    },
    _set: function (e, t) {
      (e = e.toLocaleLowerCase()),
        this.visProp.hasOwnProperty(e) &&
        e.indexOf("color") >= 0 &&
        JXG.isString(t) &&
        t.length == 9 &&
        t.charAt(0) === "#"
          ? ((t = JXG.rgba2rgbo(t)),
            (this.visProp[e] = t[0]),
            (this.visProp[e.replace("color", "opacity")] = t[1]))
          : (this.visProp[e] = t);
    },
    resolveShortcuts: function (e) {
      var t, n;
      for (t in JXG.Options.shortcuts)
        if (JXG.exists(e[t]))
          for (n = 0; n < JXG.Options.shortcuts[t].length; n++)
            JXG.exists(e[JXG.Options.shortcuts[t][n]]) ||
              (e[JXG.Options.shortcuts[t][n]] = e[t]);
      return e;
    },
    setLabelText: function (e) {
      return (
        (e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;")),
        this.label !== null && this.label.content.setText(e),
        this
      );
    },
    setAttribute: JXG.shortcut(JXG.GeometryElement.prototype, "setProperty"),
    setProperty: function () {
      var e,
        t,
        n,
        r,
        i,
        s,
        o = {},
        u;
      for (e = 0; e < arguments.length; e++)
        (r = arguments[e]),
          JXG.isString(r)
            ? ((s = r.split(":")), (o[JXG.trim(s[0])] = JXG.trim(s[1])))
            : JXG.isArray(r)
            ? (o[r[0]] = r[1])
            : JXG.extend(o, r);
      o = this.resolveShortcuts(o);
      for (e in o) {
        (t = e.replace(/\s+/g, "").toLowerCase()),
          (n = o[e]),
          (u = this.visProp[t]);
        switch (t) {
          case "name":
            delete this.board.elementsByName[this.name],
              (this.name = n),
              (this.board.elementsByName[this.name] = this);
            break;
          case "needsregularupdate":
            (this.needsRegularUpdate = n != "false" && n != 0),
              this.board.renderer.setBuffering(
                this,
                this.needsRegularUpdate ? "auto" : "static"
              );
            break;
          case "labelcolor":
            (n = JXG.rgba2rgbo(n)),
              (i = n[1]),
              (n = n[0]),
              i == 0 &&
                this.label != null &&
                this.hasLabel &&
                this.label.content.hideElement(),
              this.label != null &&
                this.hasLabel &&
                ((this.label.color = n),
                this.board.renderer.setObjectStrokeColor(
                  this.label.content,
                  n,
                  i
                )),
              this.type == JXG.OBJECT_TYPE_TEXT &&
                ((this.visProp.strokecolor = n),
                (this.visProp.strokeopacity = i),
                this.board.renderer.setObjectStrokeColor(
                  this,
                  this.visProp.strokecolor,
                  this.visProp.strokeopacity
                ));
            break;
          case "infoboxtext":
            typeof n == "string"
              ? (this.infoboxText = n)
              : (this.infoboxText = !1);
            break;
          case "visible":
            if (n == "false" || n == 0)
              (this.visProp.visible = !1), this.hideElement();
            else if (n == "true" || n == 1)
              (this.visProp.visible = !0), this.showElement();
            break;
          case "face":
            this.elementClass == JXG.OBJECT_CLASS_POINT &&
              ((this.visProp.face = n),
              this.board.renderer.changePointStyle(this));
            break;
          case "trace":
            n == "false" || n == 0
              ? (this.clearTrace(), (this.visProp.trace = !1))
              : (this.visProp.trace = !0);
            break;
          case "gradient":
            (this.visProp.gradient = n), this.board.renderer.setGradient(this);
            break;
          case "gradientsecondcolor":
            (n = JXG.rgba2rgbo(n)),
              (this.visProp.gradientsecondcolor = n[0]),
              (this.visProp.gradientsecondopacity = n[1]),
              this.board.renderer.updateGradient(this);
            break;
          case "gradientsecondopacity":
            (this.visProp.gradientsecondopacity = n),
              this.board.renderer.updateGradient(this);
            break;
          case "withlabel":
            (this.visProp.withlabel = n),
              n
                ? this.label && this.label.content
                  ? this.visProp.visible && this.label.content.showElement()
                  : (this.createLabel(),
                    this.visProp.visible || this.label.content.hideElement())
                : this.label &&
                  this.label.content &&
                  this.hasLabel &&
                  this.label.content.hideElement(),
              (this.hasLabel = n);
            break;
          case "rotate":
            ((this.type === JXG.OBJECT_TYPE_TEXT &&
              this.visProp.display == "internal") ||
              this.type === JXG.OBJECT_TYPE_IMAGE) &&
              this.addRotation(n);
            break;
          case "ticksdistance":
            this.type === JXG.OBJECT_TYPE_TICKS &&
              typeof n == "number" &&
              (this.ticksFunction = (function (e) {
                return function (t) {
                  return e;
                };
              })(n));
            break;
          default:
            JXG.exists(this.visProp[t]) &&
              (!JXG.Validator[t] ||
                (JXG.Validator[t] && JXG.Validator[t](n)) ||
                (JXG.Validator[t] &&
                  JXG.isFunction(n) &&
                  JXG.Validator[t](n()))) &&
              ((n = n.toLowerCase && n.toLowerCase() === "false" ? !1 : n),
              this._set(t, n));
        }
        this.triggerEventHandlers("attribute:" + t, u);
      }
      return (
        this.triggerEventHandlers("attribute", o),
        this.visProp.needsregularupdate
          ? this.board.update(this)
          : this.board.fullUpdate(),
        this
      );
    },
    getAttribute: JXG.shortcut(JXG.GeometryElement.prototype, "getProperty"),
    getProperty: function (e) {
      var t;
      e = e.toLowerCase();
      switch (e) {
        case "needsregularupdate":
          t = this.needsRegularUpdate;
          break;
        case "labelcolor":
          t = this.label.color;
          break;
        case "infoboxtext":
          t = this.infoboxText;
          break;
        case "withlabel":
          t = this.hasLabel;
          break;
        default:
          t = this.visProp[e];
      }
      return t;
    },
    setDash: function (e) {
      return this.setProperty({ dash: e }), this;
    },
    prepareUpdate: function () {
      return (this.needsUpdate = !0), this;
    },
    remove: function () {
      return (
        this.board.renderer.remove(this.board.renderer.getElementById(this.id)),
        this.hasLabel &&
          this.board.renderer.remove(
            this.board.renderer.getElementById(this.label.content.id)
          ),
        this
      );
    },
    getTextAnchor: function () {
      return new JXG.Coords(JXG.COORDS_BY_USER, [0, 0], this.board);
    },
    getLabelAnchor: function () {
      return new JXG.Coords(JXG.COORDS_BY_USER, [0, 0], this.board);
    },
    setStraight: function (e, t) {
      return this;
    },
    setArrow: function (e, t) {
      return (
        (this.visProp.firstarrow = e),
        (this.visProp.lastarrow = t),
        this.prepareUpdate().update(),
        this
      );
    },
    createGradient: function () {
      (this.visProp.gradient === "linear" ||
        this.visProp.gradient === "radial") &&
        this.board.renderer.setGradient(this);
    },
    createLabel: function () {
      var e = {};
      return (
        (e = JXG.deepCopy(this.visProp.label, null)),
        (e.id = this.id + "Label"),
        (e.isLabel = !0),
        (e.visible = this.visProp.visible),
        (e.anchor = this),
        (e.priv = this.visProp.priv),
        (this.nameHTML = JXG.GeonextParser.replaceSup(
          JXG.GeonextParser.replaceSub(this.name)
        )),
        (this.label = {}),
        this.visProp.withlabel &&
          ((this.label.relativeCoords = [0, 0]),
          (this.label.content = JXG.createText(
            this.board,
            [
              this.label.relativeCoords[0],
              -this.label.relativeCoords[1],
              this.name,
            ],
            e
          )),
          (this.label.content.needsUpdate = !0),
          this.label.content.update(),
          (this.label.content.dump = !1),
          (this.label.color = this.label.content.visProp.strokecolor),
          this.visProp.visible ||
            ((this.label.hiddenByParent = !0),
            (this.label.content.visProp.visible = !1)),
          (this.hasLabel = !0)),
        this
      );
    },
    highlight: function (e) {
      e = JXG.def(e, !1);
      if (!this.highlighted || e)
        (this.highlighted = !0), this.board.renderer.highlight(this);
      return this;
    },
    noHighlight: function () {
      return (
        this.highlighted &&
          ((this.highlighted = !1), this.board.renderer.noHighlight(this)),
        this
      );
    },
    clearTrace: function () {
      var e;
      for (e in this.traces) this.board.renderer.remove(this.traces[e]);
      return (this.numTraces = 0), this;
    },
    cloneToBackground: function () {
      return this;
    },
    bounds: function () {},
    normalize: function () {
      return (this.stdform = JXG.Math.normalize(this.stdform)), this;
    },
    toJSON: function () {
      var e = '{"name":' + this.name;
      e += ', "id":' + this.id;
      var t = [];
      for (var n in this.visProp)
        this.visProp[n] != null && t.push('"' + n + '":' + this.visProp[n]);
      return (e += ', "visProp":{' + t.toString() + "}"), (e += "}"), e;
    },
    addRotation: function (e) {
      var t,
        n,
        r,
        i,
        s,
        o = this;
      if (
        ((this.type === JXG.OBJECT_TYPE_TEXT &&
          this.visProp.display === "internal") ||
          this.type === JXG.OBJECT_TYPE_IMAGE) &&
        e != 0
      ) {
        var t,
          n,
          r,
          i,
          s,
          o = this;
        (t = this.board.create(
          "transform",
          [
            function () {
              return -o.X();
            },
            function () {
              return -o.Y();
            },
          ],
          { type: "translate" }
        )),
          (n = this.board.create(
            "transform",
            [
              function () {
                return o.X();
              },
              function () {
                return o.Y();
              },
            ],
            { type: "translate" }
          )),
          (r = this.board.create(
            "transform",
            [
              function () {
                return o.board.unitX / o.board.unitY;
              },
              function () {
                return 1;
              },
            ],
            { type: "scale" }
          )),
          (i = this.board.create(
            "transform",
            [
              function () {
                return o.board.unitY / o.board.unitX;
              },
              function () {
                return 1;
              },
            ],
            { type: "scale" }
          )),
          (s = this.board.create("transform", [(e * Math.PI) / 180], {
            type: "rotate",
          })),
          t.bindTo(this),
          r.bindTo(this),
          s.bindTo(this),
          i.bindTo(this),
          n.bindTo(this);
      }
      return this;
    },
    highlightStrokeColor: function (e) {
      return this.setProperty({ highlightStrokeColor: e }), this;
    },
    strokeColor: function (e) {
      return this.setProperty({ strokeColor: e }), this;
    },
    strokeWidth: function (e) {
      return this.setProperty({ strokeWidth: e }), this;
    },
    fillColor: function (e) {
      return this.setProperty({ fillColor: e }), this;
    },
    highlightFillColor: function (e) {
      return this.setProperty({ highlightFillColor: e }), this;
    },
    labelColor: function (e) {
      return this.setProperty({ labelColor: e }), this;
    },
    dash: function (e) {
      return this.setProperty({ dash: e }), this;
    },
    visible: function (e) {
      return this.setProperty({ visible: e }), this;
    },
    shadow: function (e) {
      return this.setProperty({ shadow: e }), this;
    },
    getType: function () {
      return this.elType;
    },
    getParents: function () {
      return this.parents;
    },
    snapToGrid: function () {
      return this;
    },
    getAttributes: function () {
      var e = JXG.deepCopy(this.visProp),
        t = [
          "attractors",
          "attractordistance",
          "snatchdistance",
          "traceattributes",
          "frozen",
          "shadow",
          "gradientangle",
          "gradientsecondopacity",
          "gradientpositionx",
          "gradientpositiony",
          "needsregularupdate",
          "zoom",
          "layer",
          "offset",
        ],
        n;
      (e.id = this.id), (e.name = this.name);
      for (n = 0; n < t.length; n++) delete e[t[n]];
      return e;
    },
    hasPoint: function (e, t) {
      return !1;
    },
    addEvent: JXG.shortcut(JXG.GeometryElement.prototype, "on"),
    removeEvent: JXG.shortcut(JXG.GeometryElement.prototype, "off"),
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function (e) {},
    __evt__: function () {},
  }),
  (JXG.COORDS_BY_USER = 1),
  (JXG.COORDS_BY_SCREEN = 2),
  (JXG.Coords = function (e, t, n) {
    (this.board = n),
      (this.usrCoords = []),
      (this.scrCoords = []),
      JXG.EventEmitter.eventify(this),
      this.setCoordinates(e, t);
  }),
  JXG.extend(JXG.Coords.prototype, {
    normalizeUsrCoords: function () {
      var e = JXG.Math.eps;
      Math.abs(this.usrCoords[0]) > e &&
        ((this.usrCoords[1] /= this.usrCoords[0]),
        (this.usrCoords[2] /= this.usrCoords[0]),
        (this.usrCoords[0] = 1));
    },
    usr2screen: function (e) {
      var t = Math.round,
        n = this.board,
        r = this.usrCoords,
        i = n.origin.scrCoords;
      e === null || e
        ? ((this.scrCoords[0] = t(r[0])),
          (this.scrCoords[1] = t(r[0] * i[1] + r[1] * n.unitX)),
          (this.scrCoords[2] = t(r[0] * i[2] - r[2] * n.unitY)))
        : ((this.scrCoords[0] = r[0]),
          (this.scrCoords[1] = r[0] * i[1] + r[1] * n.unitX),
          (this.scrCoords[2] = r[0] * i[2] - r[2] * n.unitY));
    },
    screen2usr: function () {
      var e = this.board.origin.scrCoords,
        t = this.scrCoords,
        n = this.board;
      (this.usrCoords[0] = 1),
        (this.usrCoords[1] = (t[1] - e[1]) / n.unitX),
        (this.usrCoords[2] = (e[2] - t[2]) / n.unitY);
    },
    distance: function (e, t) {
      var n = 0,
        r,
        i = this.usrCoords,
        s = this.scrCoords,
        o;
      if (e === JXG.COORDS_BY_USER) {
        (r = t.usrCoords), (o = i[0] - r[0]), (n = o * o);
        if (n > JXG.Math.eps) return Number.POSITIVE_INFINITY;
        (o = i[1] - r[1]), (n += o * o), (o = i[2] - r[2]), (n += o * o);
      } else
        (r = t.scrCoords),
          (o = s[1] - r[1]),
          (n += o * o),
          (o = s[2] - r[2]),
          (n += o * o);
      return Math.sqrt(n);
    },
    setCoordinates: function (e, t, n) {
      var r = this.usrCoords,
        i = this.scrCoords,
        s = this.usrCoords.slice(0),
        o = this.scrCoords.slice(0);
      return (
        e === JXG.COORDS_BY_USER
          ? (t.length === 2
              ? ((r[0] = 1), (r[1] = t[0]), (r[2] = t[1]))
              : ((r[0] = t[0]),
                (r[1] = t[1]),
                (r[2] = t[2]),
                this.normalizeUsrCoords()),
            this.usr2screen(n))
          : ((i[1] = t[0]), (i[2] = t[1]), this.screen2usr()),
        this.triggerEventHandlers("update", s, o),
        this
      );
    },
    __evt__: function (e, t) {},
    __evt__: function () {},
  }),
  (JXG.Point = function (e, t, n) {
    this.constructor(e, n, JXG.OBJECT_TYPE_POINT, JXG.OBJECT_CLASS_POINT),
      t == null && (t = [0, 0]),
      (this.coords = new JXG.Coords(JXG.COORDS_BY_USER, t, this.board)),
      (this.initialCoords = new JXG.Coords(JXG.COORDS_BY_USER, t, this.board)),
      (this.position = null),
      (this.onPolygon = !1),
      (this.slideObject = null),
      (this.Xjc = null),
      (this.Yjc = null),
      (this.methodMap = JXG.deepCopy(this.methodMap, {
        move: "moveTo",
        glide: "makeGlider",
        X: "X",
        Y: "Y",
        free: "free",
        setPosition: "setGliderPosition",
      })),
      (this.group = []),
      (this.elType = "point"),
      (this.id = this.board.setId(this, "P")),
      this.board.renderer.drawPoint(this),
      this.board.finalizeAdding(this),
      this.createLabel();
  }),
  (JXG.Point.prototype = new JXG.GeometryElement()),
  JXG.extend(JXG.Point.prototype, {
    hasPoint: function (e, t) {
      var n = this.coords.scrCoords,
        r;
      return (
        (r =
          parseFloat(this.visProp.size) +
          parseFloat(this.visProp.strokewidth) * 0.5),
        r < this.board.options.precision.hasPoint &&
          (r = this.board.options.precision.hasPoint),
        Math.abs(n[1] - e) < r + 2 && Math.abs(n[2] - t) < r + 2
      );
    },
    updateConstraint: function () {
      return this;
    },
    update: function (e) {
      return this.needsUpdate
        ? (typeof e == "undefined" && (e = !1),
          this.type == JXG.OBJECT_TYPE_GLIDER &&
            (e ? this.updateGliderFromParent() : this.updateGlider()),
          (this.type == JXG.OBJECT_TYPE_CAS ||
            this.type == JXG.OBJECT_TYPE_AXISPOINT) &&
            this.updateConstraint(),
          this.updateTransform(),
          this.visProp.trace && this.cloneToBackground(!0),
          this)
        : this;
    },
    updateGlider: function () {
      var e,
        t,
        n,
        r,
        i,
        s,
        o,
        u,
        a,
        f = this.slideObject,
        l,
        c,
        h,
        p,
        d,
        v;
      if (f.elementClass == JXG.OBJECT_CLASS_CIRCLE)
        (this.coords = JXG.Math.Geometry.projectPointToCircle(
          this,
          f,
          this.board
        )),
          (this.position = JXG.Math.Geometry.rad(
            [f.center.X() + 1, f.center.Y()],
            f.center,
            this
          ));
      else if (f.elementClass == JXG.OBJECT_CLASS_LINE) {
        if (this.onPolygon) {
          (t = f.point1.coords.usrCoords),
            (n = f.point2.coords.usrCoords),
            (e = 1),
            (r = n[e] - t[e]),
            Math.abs(r) < JXG.Math.eps && ((e = 2), (r = n[e] - t[e])),
            (o = JXG.Math.Geometry.projectPointToLine(this, f, this.board)),
            (u = (o.usrCoords[e] - t[e]) / r),
            (s = f.parentPolygon);
          if (u < 0) {
            for (e = 0; e < s.borders.length; e++)
              if (f == s.borders[e]) {
                f = s.borders[(e - 1 + s.borders.length) % s.borders.length];
                break;
              }
          } else if (u > 1)
            for (e = 0; e < s.borders.length; e++)
              if (f == s.borders[e]) {
                f = s.borders[(e + 1 + s.borders.length) % s.borders.length];
                break;
              }
        }
        (t = f.point1.coords),
          (n = f.point2.coords),
          (r = t.distance(JXG.COORDS_BY_USER, n)),
          (t = t.usrCoords.slice(0)),
          (n = n.usrCoords.slice(0)),
          r < JXG.Math.eps
            ? (this.coords.setCoordinates(JXG.COORDS_BY_USER, t),
              (this.position = 0))
            : ((this.coords = JXG.Math.Geometry.projectPointToLine(
                this,
                f,
                this.board
              )),
              Math.abs(n[0]) < JXG.Math.eps
                ? ((e = 1),
                  (r = n[e]),
                  Math.abs(r) < JXG.Math.eps && ((e = 2), (r = n[e])),
                  (r = (this.coords.usrCoords[e] - t[e]) / r),
                  (a = r >= 0 ? 1 : -1),
                  (r = Math.abs(r)),
                  (this.position = (a * r) / (r + 1)))
                : Math.abs(t[0]) < JXG.Math.eps
                ? ((e = 1),
                  (r = t[e]),
                  Math.abs(r) < JXG.Math.eps && ((e = 2), (r = t[e])),
                  (r = (this.coords.usrCoords[e] - n[e]) / r),
                  r < 0
                    ? (this.position = (1 - 2 * r) / (1 - r))
                    : (this.position = 1 / (r + 1)))
                : ((e = 1),
                  (r = n[e] - t[e]),
                  Math.abs(r) < JXG.Math.eps && ((e = 2), (r = n[e] - t[e])),
                  (this.position = (this.coords.usrCoords[e] - t[e]) / r))),
          this.visProp.snapwidth > 0 &&
            Math.abs(this._smax - this._smin) >= JXG.Math.eps &&
            (this.position < 0 && (this.position = 0),
            this.position > 1 && (this.position = 1),
            (i = this.position * (this._smax - this._smin) + this._smin),
            (i =
              Math.round(i / this.visProp.snapwidth) * this.visProp.snapwidth),
            (this.position = (i - this._smin) / (this._smax - this._smin)),
            this.update(!0)),
          (t = f.point1.coords.usrCoords),
          !f.visProp.straightfirst &&
            Math.abs(t[0]) > JXG.Math.eps &&
            this.position < 0 &&
            (this.coords.setCoordinates(JXG.COORDS_BY_USER, t),
            (this.position = 0)),
          (n = f.point2.coords.usrCoords),
          !f.visProp.straightlast &&
            Math.abs(n[0]) > JXG.Math.eps &&
            this.position > 1 &&
            (this.coords.setCoordinates(JXG.COORDS_BY_USER, n),
            (this.position = 1));
      } else if (f.type == JXG.OBJECT_TYPE_TURTLE)
        this.updateConstraint(),
          (this.coords = JXG.Math.Geometry.projectPointToTurtle(
            this,
            f,
            this.board
          ));
      else if (f.elementClass == JXG.OBJECT_CLASS_CURVE)
        if (f.type == JXG.OBJECT_TYPE_ARC || f.type == JXG.OBJECT_TYPE_SECTOR) {
          (this.coords = JXG.Math.Geometry.projectPointToCircle(
            this,
            f,
            this.board
          )),
            (h = JXG.Math.Geometry.rad(f.radiuspoint, f.center, this)),
            (l = 0),
            (c = JXG.Math.Geometry.rad(f.radiuspoint, f.center, f.anglepoint)),
            (this.position = h);
          if (
            (f.visProp.type == "minor" && c > Math.PI) ||
            (f.visProp.type == "major" && c < Math.PI)
          )
            (l = c), (c = 2 * Math.PI);
          if (h < l || h > c) {
            this.position = c;
            if ((h < l && h > l * 0.5) || (h > c && h > c * 0.5 + Math.PI))
              this.position = l;
            this.updateGliderFromParent();
          }
        } else
          this.updateConstraint(),
            f.transformations.length > 0
              ? (f.updateTransformMatrix(),
                (v = JXG.Math.inverse(f.transformMat)),
                (d = JXG.Math.matVecMult(v, this.coords.usrCoords)),
                (p = new JXG.Coords(JXG.COORDS_BY_USER, d, this.board)
                  .usrCoords),
                (d = JXG.Math.Geometry.projectCoordsToCurve(
                  p[1],
                  p[2],
                  this.position || 0,
                  f,
                  this.board
                )),
                (this.position = d[1]),
                (this.coords = d[0]))
              : (this.coords = JXG.Math.Geometry.projectPointToCurve(
                  this,
                  f,
                  this.board
                ));
      else
        f.elementClass == JXG.OBJECT_CLASS_POINT &&
          (this.coords = JXG.Math.Geometry.projectPointToPoint(
            this,
            f,
            this.board
          ));
    },
    updateGliderFromParent: function () {
      var e,
        t,
        n,
        r,
        i,
        s = this.slideObject,
        o;
      s.elementClass == JXG.OBJECT_CLASS_CIRCLE
        ? ((n = s.Radius()),
          this.coords.setCoordinates(JXG.COORDS_BY_USER, [
            s.center.X() + n * Math.cos(this.position),
            s.center.Y() + n * Math.sin(this.position),
          ]))
        : s.elementClass == JXG.OBJECT_CLASS_LINE
        ? ((e = s.point1.coords.usrCoords),
          (t = s.point2.coords.usrCoords),
          Math.abs(t[0]) < JXG.Math.eps
            ? ((r = Math.min(Math.abs(this.position), 1 - JXG.Math.eps)),
              (r /= 1 - r),
              this.position < 0 && (r *= -1),
              this.coords.setCoordinates(JXG.COORDS_BY_USER, [
                e[0] + r * t[0],
                e[1] + r * t[1],
                e[2] + r * t[2],
              ]))
            : Math.abs(e[0]) < JXG.Math.eps
            ? ((r = Math.max(this.position, JXG.Math.eps)),
              (r = Math.min(r, 2 - JXG.Math.eps)),
              r > 1 ? (r = (r - 1) / (r - 2)) : (r = (1 - r) / r),
              this.coords.setCoordinates(JXG.COORDS_BY_USER, [
                t[0] + r * e[0],
                t[1] + r * e[1],
                t[2] + r * e[2],
              ]))
            : ((r = this.position),
              this.coords.setCoordinates(JXG.COORDS_BY_USER, [
                e[0] + r * (t[0] - e[0]),
                e[1] + r * (t[1] - e[1]),
                e[2] + r * (t[2] - e[2]),
              ])))
        : s.type == JXG.OBJECT_TYPE_TURTLE
        ? (this.coords.setCoordinates(JXG.COORDS_BY_USER, [
            s.Z(this.position),
            s.X(this.position),
            s.Y(this.position),
          ]),
          this.updateConstraint(),
          (this.coords = JXG.Math.Geometry.projectPointToTurtle(
            this,
            s,
            this.board
          )))
        : s.elementClass == JXG.OBJECT_CLASS_CURVE
        ? (this.coords.setCoordinates(JXG.COORDS_BY_USER, [
            s.Z(this.position),
            s.X(this.position),
            s.Y(this.position),
          ]),
          s.type == JXG.OBJECT_TYPE_ARC || s.type == JXG.OBJECT_TYPE_SECTOR
            ? ((o = JXG.Math.Geometry.rad(
                [s.center.X() + 1, s.center.Y()],
                s.center,
                s.radiuspoint
              )),
              (n = s.Radius()),
              this.coords.setCoordinates(JXG.COORDS_BY_USER, [
                s.center.X() + n * Math.cos(this.position + o),
                s.center.Y() + n * Math.sin(this.position + o),
              ]))
            : (this.updateConstraint(),
              (this.coords = JXG.Math.Geometry.projectPointToCurve(
                this,
                s,
                this.board
              ))))
        : s.elementClass == JXG.OBJECT_CLASS_POINT &&
          (this.coords = JXG.Math.Geometry.projectPointToPoint(
            this,
            s,
            this.board
          ));
    },
    updateRenderer: function () {
      if (!this.needsUpdate) return this;
      if (this.visProp.visible && this.visProp.size > 0) {
        var e = this.isReal;
        (this.isReal = !isNaN(
          this.coords.usrCoords[1] + this.coords.usrCoords[2]
        )),
          (this.isReal =
            Math.abs(this.coords.usrCoords[0]) > JXG.Math.eps
              ? this.isReal
              : !1),
          this.isReal
            ? (e != this.isReal &&
                (this.board.renderer.show(this),
                this.hasLabel &&
                  this.label.content.visProp.visible &&
                  this.board.renderer.show(this.label.content)),
              this.board.renderer.updatePoint(this))
            : e != this.isReal &&
              (this.board.renderer.hide(this),
              this.hasLabel &&
                this.label.content.visProp.visible &&
                this.board.renderer.hide(this.label.content));
      }
      return (
        this.hasLabel &&
          this.visProp.visible &&
          this.label.content &&
          this.label.content.visProp.visible &&
          this.isReal &&
          (this.label.content.update(),
          this.board.renderer.updateText(this.label.content)),
        (this.needsUpdate = !1),
        this
      );
    },
    X: function () {
      return this.coords.usrCoords[1];
    },
    Y: function () {
      return this.coords.usrCoords[2];
    },
    Z: function () {
      return this.coords.usrCoords[0];
    },
    XEval: function () {
      return this.coords.usrCoords[1];
    },
    YEval: function () {
      return this.coords.usrCoords[2];
    },
    ZEval: function () {
      return this.coords.usrCoords[0];
    },
    bounds: function () {
      return this.coords.usrCoords
        .slice(1)
        .concat(this.coords.usrCoords.slice(1));
    },
    Dist: function (e) {
      var t,
        n = e.coords.usrCoords,
        r = this.coords.usrCoords,
        i;
      return (
        (i = r[0] - n[0]),
        (t = i * i),
        (i = r[1] - n[1]),
        (t += i * i),
        (i = r[2] - n[2]),
        (t += i * i),
        Math.sqrt(t)
      );
    },
    snapToGrid: function () {
      return this.handleSnapToGrid();
    },
    handleSnapToGrid: function () {
      var e,
        t,
        n = this.visProp.snapsizex,
        r = this.visProp.snapsizey;
      return (
        this.visProp.snaptogrid &&
          ((e = this.coords.usrCoords[1]),
          (t = this.coords.usrCoords[2]),
          n <= 0 &&
            this.board.defaultAxes &&
            this.board.defaultAxes.x.defaultTicks &&
            (n =
              this.board.defaultAxes.x.defaultTicks.ticksDelta *
              (this.board.defaultAxes.x.defaultTicks.visProp.minorticks + 1)),
          r <= 0 &&
            this.board.defaultAxes &&
            this.board.defaultAxes.y.defaultTicks &&
            (r =
              this.board.defaultAxes.y.defaultTicks.ticksDelta *
              (this.board.defaultAxes.y.defaultTicks.visProp.minorticks + 1)),
          n > 0 &&
            r > 0 &&
            this.coords.setCoordinates(JXG.COORDS_BY_USER, [
              Math.round(e / n) * n,
              Math.round(t / r) * r,
            ])),
        this
      );
    },
    handleSnapToPoints: function () {
      var e,
        t,
        n,
        r = 0,
        i = Infinity,
        s = null;
      if (this.visProp.snaptopoints) {
        for (e in this.board.objects)
          (t = this.board.objects[e]),
            t.elementClass == JXG.OBJECT_CLASS_POINT &&
              t !== this &&
              t.visProp.visible &&
              ((n = JXG.Math.Geometry.projectPointToPoint(this, t, this.board)),
              (r = n.distance(JXG.COORDS_BY_USER, this.coords)),
              r < this.visProp.attractordistance &&
                r < i &&
                ((i = r), (s = n)));
        s != null &&
          this.coords.setCoordinates(JXG.COORDS_BY_USER, s.usrCoords);
      }
      return this;
    },
    handleAttractors: function () {
      var e = this.visProp.attractors.length,
        t,
        n,
        r,
        i = 0;
      if (this.visProp.attractordistance == 0) return;
      for (t = 0; t < e; t++) {
        n = JXG.getRef(this.board, this.visProp.attractors[t]);
        if (!JXG.exists(n) || n === this) continue;
        n.elementClass == JXG.OBJECT_CLASS_POINT
          ? (r = JXG.Math.Geometry.projectPointToPoint(this, n, this.board))
          : n.elementClass == JXG.OBJECT_CLASS_LINE
          ? (r = JXG.Math.Geometry.projectPointToLine(this, n, this.board))
          : n.elementClass == JXG.OBJECT_CLASS_CIRCLE
          ? (r = JXG.Math.Geometry.projectPointToCircle(this, n, this.board))
          : n.elementClass == JXG.OBJECT_CLASS_CURVE
          ? (r = JXG.Math.Geometry.projectPointToCurve(this, n, this.board))
          : n.type == JXG.OBJECT_TYPE_TURTLE &&
            (r = JXG.Math.Geometry.projectPointToTurtle(this, n, this.board)),
          (i = r.distance(JXG.COORDS_BY_USER, this.coords));
        if (i < this.visProp.attractordistance) {
          (found = !0),
            (this.type != JXG.OBJECT_TYPE_GLIDER || this.slideObject != n) &&
              this.makeGlider(n);
          break;
        }
        n == this.slideObject &&
          i >= this.visProp.snatchdistance &&
          (this.type = JXG.OBJECT_TYPE_POINT);
      }
      return this;
    },
    setPositionDirectly: function (e, t) {
      var n,
        r,
        i,
        s,
        o,
        u,
        a = this.coords,
        f;
      this.coords.setCoordinates(e, t),
        this.handleSnapToGrid(),
        this.handleSnapToPoints(),
        this.handleAttractors();
      if (!(this.group.length > 0)) {
        for (n = this.transformations.length - 1; n >= 0; n--)
          e === JXG.COORDS_BY_SCREEN
            ? (f = new JXG.Coords(e, t, this.board).usrCoords)
            : (t.length === 2 && (t = [1].concat(t)), (f = t)),
            this.initialCoords.setCoordinates(
              JXG.COORDS_BY_USER,
              JXG.Math.matVecMult(
                JXG.Math.inverse(this.transformations[n].matrix),
                f
              )
            );
        this.update();
      }
      return this;
    },
    setPositionByTransform: function (e, t) {
      var n;
      return (
        (t = new JXG.Coords(e, t, this.board)),
        (n = this.board.create("transform", t.usrCoords.slice(1), {
          type: "translate",
        })),
        this.transformations.length > 0 &&
        this.transformations[this.transformations.length - 1].isNumericMatrix
          ? this.transformations[this.transformations.length - 1].melt(n)
          : this.addTransform(this, n),
        this.update(),
        this
      );
    },
    setPosition: function (e, t) {
      return this.setPositionDirectly(e, t);
    },
    setGliderPosition: function (e) {
      if ((this.type = JXG.OBJECT_TYPE_GLIDER))
        (this.position = e), this.board.update();
      return this;
    },
    makeGlider: function (e) {
      return (
        (this.slideObject = JXG.getRef(this.board, e)),
        (this.type = JXG.OBJECT_TYPE_GLIDER),
        (this.elType = "glider"),
        (this.visProp.snapwidth = -1),
        this.slideObject.addChild(this),
        (this.isDraggable = !0),
        (this.generatePolynomial = function () {
          return this.slideObject.generatePolynomial(this);
        }),
        this.updateGlider(),
        this
      );
    },
    free: function () {
      var e, t;
      if (this.type !== JXG.OBJECT_TYPE_GLIDER) {
        if (!!this.isDraggable) return;
        (this.isDraggable = !0),
          (this.type = JXG.OBJECT_TYPE_POINT),
          (this.XEval = function () {
            return this.coords.usrCoords[1];
          }),
          (this.YEval = function () {
            return this.coords.usrCoords[2];
          }),
          (this.ZEval = function () {
            return this.coords.usrCoords[0];
          }),
          (this.Xjc = null),
          (this.Yjc = null);
      }
      for (e in this.ancestors) {
        this.ancestors[e].descendants[this.id] &&
          delete this.ancestors[e].descendants[this.id],
          this.ancestors[e].childElements[this.id] &&
            delete this.ancestors[e].childElements[this.id];
        for (t in this.descendants)
          this.ancestors[e].descendants[t] &&
            delete this.ancestors[e].descendants[t],
            this.ancestors[e].childElements[t] &&
              delete this.ancestors[e].childElements[t];
      }
      (this.ancestors = []),
        (this.slideObject = null),
        (this.elType = "point"),
        (this.type = JXG.OBJECT_TYPE_POINT);
    },
    addConstraint: function (e) {
      this.type = JXG.OBJECT_TYPE_CAS;
      var t = [],
        n,
        r,
        i,
        s,
        o = ["X", "Y"];
      this.isDraggable = !1;
      for (r = 0; r < e.length; r++)
        (i = e[r]),
          typeof i == "string"
            ? ((t[r] = this.board.jc.snippet(i, !0, null, !0)),
              e.length === 2 && (this[o[r] + "jc"] = e[r]))
            : typeof i == "function"
            ? (t[r] = i)
            : typeof i == "number"
            ? (t[r] = (function (e) {
                return function () {
                  return e;
                };
              })(i))
            : typeof i == "object" &&
              typeof i.Value == "function" &&
              (t[r] = (function (e) {
                return function () {
                  return e.Value();
                };
              })(i)),
          (t[r].origin = i);
      return (
        e.length == 1
          ? (this.updateConstraint = function () {
              var e = t[0]();
              JXG.isArray(e)
                ? this.coords.setCoordinates(JXG.COORDS_BY_USER, e)
                : (this.coords = e);
            })
          : e.length == 2
          ? ((this.XEval = t[0]),
            (this.YEval = t[1]),
            (n =
              "this.coords.setCoordinates(" +
              JXG.COORDS_BY_USER +
              ",[this.XEval(),this.YEval()]);"),
            (this.updateConstraint = new Function("", n)))
          : ((this.ZEval = t[0]),
            (this.XEval = t[1]),
            (this.YEval = t[2]),
            (n =
              "this.coords.setCoordinates(" +
              JXG.COORDS_BY_USER +
              ",[this.ZEval(),this.XEval(),this.YEval()]);"),
            (this.updateConstraint = new Function("", n))),
        this.board.isSuspendedUpdate ||
          this.prepareUpdate().update().updateRenderer(),
        this
      );
    },
    updateTransform: function () {
      if (this.transformations.length == 0 || this.baseElement == null)
        return this;
      var e, t;
      this === this.baseElement
        ? (e = this.transformations[0].apply(this.baseElement, "self"))
        : (e = this.transformations[0].apply(this.baseElement)),
        this.coords.setCoordinates(JXG.COORDS_BY_USER, e);
      for (t = 1; t < this.transformations.length; t++)
        this.coords.setCoordinates(
          JXG.COORDS_BY_USER,
          this.transformations[t].apply(this)
        );
      return this;
    },
    addTransform: function (e, t) {
      var n,
        r = JXG.isArray(t) ? t : [t],
        i = r.length;
      this.transformations.length === 0 && (this.baseElement = e);
      for (n = 0; n < i; n++) this.transformations.push(r[n]);
      return this;
    },
    startAnimation: function (e, t) {
      return (
        this.type == JXG.OBJECT_TYPE_GLIDER &&
          typeof this.intervalCode == "undefined" &&
          ((this.intervalCode = window.setInterval(
            "JXG.JSXGraph.boards['" +
              this.board.id +
              "'].objects['" +
              this.id +
              "']._anim(" +
              e +
              ", " +
              t +
              ")",
            250
          )),
          typeof this.intervalCount == "undefined" && (this.intervalCount = 0)),
        this
      );
    },
    stopAnimation: function () {
      return (
        typeof this.intervalCode != "undefined" &&
          (window.clearInterval(this.intervalCode), delete this.intervalCode),
        this
      );
    },
    moveAlong: function (e, t, n) {
      n = n || {};
      var r = [],
        i = this.board.options.animationDelay,
        s = function (t, n) {
          return function () {
            return e[t][n];
          };
        },
        o = [],
        u,
        a,
        f = t / i;
      if (JXG.isArray(e)) {
        for (u = 0; u < e.length; u++)
          JXG.isPoint(e[u])
            ? (o[u] = e[u])
            : (o[u] = {
                elementClass: JXG.OBJECT_CLASS_POINT,
                X: s(u, 0),
                Y: s(u, 1),
              });
        t = t || 0;
        if (t === 0)
          return (
            this.setPosition(JXG.COORDS_BY_USER, [
              o[o.length - 1].X(),
              o[o.length - 1].Y(),
            ]),
            this.board.update(this)
          );
        a = JXG.Math.Numerics.Neville(o);
        for (u = 0; u < f; u++)
          (r[u] = []),
            (r[u][0] = a[0](((f - u) / f) * a[3]())),
            (r[u][1] = a[1](((f - u) / f) * a[3]()));
        this.animationPath = r;
      } else
        JXG.isFunction(e) &&
          ((this.animationPath = e),
          (this.animationStart = new Date().getTime()));
      return (
        (this.animationCallback = n.callback),
        this.board.addAnimation(this),
        this
      );
    },
    moveTo: function (e, t, n) {
      e = new JXG.Coords(JXG.COORDS_BY_USER, e, this.board);
      if (
        typeof t == "undefined" ||
        t == 0 ||
        Math.abs(e.usrCoords[0] - this.coords.usrCoords[0]) > JXG.Math.eps
      )
        return (
          this.setPosition(JXG.COORDS_BY_USER, e.usrCoords),
          this.board.update(this)
        );
      n = n || {};
      var r = this.board.options.animationDelay,
        i = Math.ceil(t / (r * 1)),
        s = new Array(i + 1),
        o = this.coords.usrCoords[1],
        u = this.coords.usrCoords[2],
        a = e.usrCoords[1] - o,
        f = e.usrCoords[2] - u,
        l,
        c = function (e) {
          return n.effect && n.effect == "<>"
            ? Math.pow(Math.sin(((e / (i * 1)) * Math.PI) / 2), 2)
            : e / i;
        };
      if (Math.abs(a) < JXG.Math.eps && Math.abs(f) < JXG.Math.eps) return this;
      for (l = i; l >= 0; l--)
        s[i - l] = [e.usrCoords[0], o + a * c(l), u + f * c(l)];
      return (
        (this.animationPath = s),
        (this.animationCallback = n.callback),
        this.board.addAnimation(this),
        this
      );
    },
    visit: function (e, t, n) {
      typeof n == "number"
        ? (n = { repeat: n })
        : ((n = n || {}), typeof n.repeat == "undefined" && (n.repeat = 1));
      var r = this.board.options.animationDelay,
        i = Math.ceil(t / (r * n.repeat)),
        s = new Array(n.repeat * (i + 1)),
        o = this.coords.usrCoords[1],
        u = this.coords.usrCoords[2],
        a = e[0] - o,
        f = e[1] - u,
        l,
        c,
        h = function (e) {
          var t = e < i / 2 ? (2 * e) / i : (2 * (i - e)) / i;
          return n.effect && n.effect == "<>"
            ? Math.pow(Math.sin((t * Math.PI) / 2), 2)
            : t;
        };
      for (c = 0; c < n.repeat; c++)
        for (l = i; l >= 0; l--)
          s[c * (i + 1) + i - l] = [e[0], o + a * h(l), u + f * h(l)];
      return (
        (this.animationPath = s),
        (this.animationCallback = n.callback),
        this.board.addAnimation(this),
        this
      );
    },
    _anim: function (e, t) {
      var n,
        r,
        i,
        s,
        o,
        u,
        a = 1,
        f,
        l;
      return (
        this.intervalCount++,
        this.intervalCount > t && (this.intervalCount = 0),
        this.slideObject.elementClass == JXG.OBJECT_CLASS_LINE
          ? ((n = this.slideObject.point1.coords.distance(
              JXG.COORDS_BY_SCREEN,
              this.slideObject.point2.coords
            )),
            (r = this.slideObject.getSlope()),
            r != "INF"
              ? ((o = Math.atan(r)),
                (i = Math.round((this.intervalCount / t) * n * Math.cos(o))),
                (s = Math.round((this.intervalCount / t) * n * Math.sin(o))))
              : ((i = 0), (s = Math.round((this.intervalCount / t) * n))),
            e < 0
              ? ((u = this.slideObject.point2),
                this.slideObject.point2.coords.scrCoords[1] -
                  this.slideObject.point1.coords.scrCoords[1] >
                0
                  ? (a = -1)
                  : this.slideObject.point2.coords.scrCoords[1] -
                      this.slideObject.point1.coords.scrCoords[1] ==
                      0 &&
                    this.slideObject.point2.coords.scrCoords[2] -
                      this.slideObject.point1.coords.scrCoords[2] >
                      0 &&
                    (a = -1))
              : ((u = this.slideObject.point1),
                this.slideObject.point1.coords.scrCoords[1] -
                  this.slideObject.point2.coords.scrCoords[1] >
                0
                  ? (a = -1)
                  : this.slideObject.point1.coords.scrCoords[1] -
                      this.slideObject.point2.coords.scrCoords[1] ==
                      0 &&
                    this.slideObject.point1.coords.scrCoords[2] -
                      this.slideObject.point2.coords.scrCoords[2] >
                      0 &&
                    (a = -1)),
            this.coords.setCoordinates(JXG.COORDS_BY_SCREEN, [
              u.coords.scrCoords[1] + a * i,
              u.coords.scrCoords[2] + a * s,
            ]))
          : this.slideObject.elementClass == JXG.OBJECT_CLASS_CURVE
          ? (e > 0
              ? (f = Math.round(
                  (this.intervalCount / t) * this.board.canvasWidth
                ))
              : (f = Math.round(
                  ((t - this.intervalCount) / t) * this.board.canvasWidth
                )),
            this.coords.setCoordinates(JXG.COORDS_BY_SCREEN, [f, 0]),
            (this.coords = JXG.Math.Geometry.projectPointToCurve(
              this,
              this.slideObject,
              this.board
            )))
          : this.slideObject.elementClass == JXG.OBJECT_CLASS_CIRCLE &&
            (e < 0
              ? (o = (this.intervalCount / t) * 2 * Math.PI)
              : (o = ((t - this.intervalCount) / t) * 2 * Math.PI),
            (l = this.slideObject.Radius()),
            this.coords.setCoordinates(JXG.COORDS_BY_USER, [
              this.slideObject.center.coords.usrCoords[1] + l * Math.cos(o),
              this.slideObject.center.coords.usrCoords[2] + l * Math.sin(o),
            ])),
        this.board.update(this),
        this
      );
    },
    setStyle: function (e) {
      var t = [
          "cross",
          "cross",
          "cross",
          "circle",
          "circle",
          "circle",
          "circle",
          "square",
          "square",
          "square",
          "plus",
          "plus",
          "plus",
        ],
        n = [2, 3, 4, 1, 2, 3, 4, 2, 3, 4, 2, 3, 4];
      return (
        (this.visProp.face = t[e]),
        (this.visProp.size = n[e]),
        this.board.renderer.changePointStyle(this),
        this
      );
    },
    normalizeFace: function (e) {
      var t = {
        cross: "x",
        x: "x",
        circle: "o",
        o: "o",
        square: "[]",
        "[]": "[]",
        plus: "+",
        "+": "+",
        diamond: "<>",
        "<>": "<>",
        triangleup: "^",
        a: "^",
        "^": "^",
        triangledown: "v",
        v: "v",
        triangleleft: "<",
        "<": "<",
        triangleright: ">",
        ">": ">",
      };
      return t[e];
    },
    remove: function () {
      this.hasLabel &&
        this.board.renderer.remove(
          this.board.renderer.getElementById(this.label.content.id)
        ),
        this.board.renderer.remove(this.board.renderer.getElementById(this.id));
    },
    getTextAnchor: function () {
      return this.coords;
    },
    getLabelAnchor: function () {
      return this.coords;
    },
    face: function (e) {
      this.setProperty({ face: e });
    },
    size: function (e) {
      this.setProperty({ size: e });
    },
    cloneToBackground: function () {
      var e = {};
      return (
        (e.id = this.id + "T" + this.numTraces),
        this.numTraces++,
        (e.coords = this.coords),
        (e.visProp = JXG.deepCopy(
          this.visProp,
          this.visProp.traceattributes,
          !0
        )),
        (e.visProp.layer = this.board.options.layer.trace),
        (e.elementClass = JXG.OBJECT_CLASS_POINT),
        (e.board = this.board),
        JXG.clearVisPropOld(e),
        this.board.renderer.drawPoint(e),
        (this.traces[e.id] = e.rendNode),
        this
      );
    },
    getParents: function () {
      var e = [this.Z(), this.X(), this.Y()];
      return (
        this.parents && (e = this.parents),
        this.type == JXG.OBJECT_TYPE_GLIDER &&
          (e = [this.X(), this.Y(), this.slideObject.id]),
        e
      );
    },
  }),
  (JXG.createPoint = function (e, t, n) {
    var r,
      i = !1,
      s,
      o;
    o = JXG.copyAttributes(n, e.options, "point");
    for (s = 0; s < t.length; s++)
      if (typeof t[s] == "function" || typeof t[s] == "string") i = !0;
    if (!i)
      if (JXG.isNumber(t[0]) && JXG.isNumber(t[1]))
        (r = new JXG.Point(e, t, o)),
          JXG.exists(o.slideobject)
            ? r.makeGlider(o.slideobject)
            : (r.baseElement = r),
          (r.isDraggable = !0);
      else {
        if (typeof t[0] != "object" || typeof t[1] != "object")
          throw new Error(
            "JSXGraph: Can't create point with parent types '" +
              typeof t[0] +
              "' and '" +
              typeof t[1] +
              "'." +
              "\nPossible parent types: [x,y], [z,x,y], [point,transformation]"
          );
        (r = new JXG.Point(e, [0, 0], o)),
          r.addTransform(t[0], t[1]),
          (r.isDraggable = !1),
          (r.parents = [t[0].id]);
      }
    else (r = new JXG.Point(e, [NaN, NaN], o)), r.addConstraint(t);
    return r;
  }),
  (JXG.createGlider = function (e, t, n) {
    var r,
      i = JXG.copyAttributes(n, e.options, "glider");
    return (
      t.length === 1
        ? (r = e.create("point", [0, 0], i))
        : (r = e.create("point", t.slice(0, 2), i)),
      r.makeGlider(t[t.length - 1]),
      r
    );
  }),
  (JXG.createIntersectionPoint = function (e, t, n) {
    var r,
      i = JXG.copyAttributes(n, e.options, "intersection"),
      s;
    t.push(0, 0),
      (r = e.create("point", [0, 0, 0], i)),
      (s = new e.intersection(t[0], t[1], t[2], t[3], { point: r })),
      r.addConstraint([s]);
    try {
      t[0].addChild(r), t[1].addChild(r);
    } catch (o) {
      throw new Error(
        "JSXGraph: Can't create 'intersection' with parent types '" +
          typeof t[0] +
          "' and '" +
          typeof t[1] +
          "'."
      );
    }
    return (
      (r.elType = "intersection"),
      (r.parents = [t[0].id, t[1].id, t[2]]),
      t[3] != null && r.parents.push(t[3]),
      (r.generatePolynomial = function () {
        var e = t[0].generatePolynomial(r),
          n = t[1].generatePolynomial(r);
        return e.length == 0 || n.length == 0 ? [] : [e[0], n[0]];
      }),
      r
    );
  }),
  (JXG.createOtherIntersectionPoint = function (e, t, n) {
    var r;
    if (
      t.length != 3 ||
      !JXG.isPoint(t[2]) ||
      (t[0].elementClass != JXG.OBJECT_CLASS_LINE &&
        t[0].elementClass != JXG.OBJECT_CLASS_CIRCLE) ||
      (t[1].elementClass != JXG.OBJECT_CLASS_LINE &&
        t[1].elementClass != JXG.OBJECT_CLASS_CIRCLE)
    )
      throw new Error(
        "JSXGraph: Can't create 'other intersection point' with parent types '" +
          typeof t[0] +
          "',  '" +
          typeof t[1] +
          "'and  '" +
          typeof t[2] +
          "'." +
          "\nPossible parent types: [circle|line,circle|line,point]"
      );
    return (
      (r = e.create("point", [e.otherIntersection(t[0], t[1], t[2])], n)),
      (r.elType = "otherintersection"),
      (r.parents = [t[0].id, t[1].id, t[2]]),
      t[0].addChild(r),
      t[1].addChild(r),
      (r.generatePolynomial = function () {
        var e = t[0].generatePolynomial(r),
          n = t[1].generatePolynomial(r);
        return e.length == 0 || n.length == 0 ? [] : [e[0], n[0]];
      }),
      r
    );
  }),
  JXG.JSXGraph.registerElement("point", JXG.createPoint),
  JXG.JSXGraph.registerElement("glider", JXG.createGlider),
  JXG.JSXGraph.registerElement("intersection", JXG.createIntersectionPoint),
  JXG.JSXGraph.registerElement(
    "otherintersection",
    JXG.createOtherIntersectionPoint
  ),
  (JXG.Line = function (e, t, n, r) {
    this.constructor(e, r, JXG.OBJECT_TYPE_LINE, JXG.OBJECT_CLASS_LINE),
      (this.point1 = JXG.getReference(this.board, t)),
      (this.point2 = JXG.getReference(this.board, n)),
      (this.ticks = []),
      (this.defaultTicks = null),
      (this.parentPolygon = null),
      (this.id = this.board.setId(this, "L")),
      this.board.renderer.drawLine(this),
      this.board.finalizeAdding(this),
      (this.elType = "line"),
      this.point1.addChild(this),
      this.point2.addChild(this),
      this.updateStdform(),
      this.createLabel();
  }),
  (JXG.Line.prototype = new JXG.GeometryElement()),
  JXG.extend(JXG.Line.prototype, {
    hasPoint: function (e, t) {
      var n = [],
        r,
        i = [1, e, t],
        s,
        o,
        u,
        a,
        f,
        l;
      return (
        (n[0] =
          this.stdform[0] -
          (this.stdform[1] * this.board.origin.scrCoords[1]) /
            this.board.unitX +
          (this.stdform[2] * this.board.origin.scrCoords[2]) /
            this.board.unitY),
        (n[1] = this.stdform[1] / this.board.unitX),
        (n[2] = this.stdform[2] / -this.board.unitY),
        (r = JXG.Math.Geometry.distPointLine(i, n)),
        isNaN(r) || r > this.board.options.precision.hasPoint
          ? !1
          : this.visProp.straightfirst && this.visProp.straightlast
          ? !0
          : ((o = this.point1.coords),
            (u = this.point2.coords),
            (s = [0, n[1], n[2]]),
            (s = JXG.Math.crossProduct(s, i)),
            (s = JXG.Math.crossProduct(s, n)),
            (s[1] /= s[0]),
            (s[2] /= s[0]),
            (s[0] = 1),
            (s = new JXG.Coords(JXG.COORDS_BY_SCREEN, s.slice(1), this.board)
              .usrCoords),
            (a = o.distance(JXG.COORDS_BY_USER, u)),
            (o = o.usrCoords.slice(0)),
            (u = u.usrCoords.slice(0)),
            a < JXG.Math.eps
              ? (f = 0)
              : (a == Number.POSITIVE_INFINITY &&
                  ((a = 1 / JXG.Math.eps),
                  Math.abs(u[0]) < JXG.Math.eps
                    ? ((a /= JXG.Math.Geometry.distance([0, 0, 0], u)),
                      (u = [1, o[1] + u[1] * a, o[2] + u[2] * a]))
                    : ((a /= JXG.Math.Geometry.distance([0, 0, 0], o)),
                      (o = [1, u[1] + o[1] * a, u[2] + o[2] * a]))),
                (l = 1),
                (a = u[l] - o[l]),
                Math.abs(a) < JXG.Math.eps && ((l = 2), (a = u[l] - o[l])),
                (f = (s[l] - o[l]) / a)),
            !this.visProp.straightfirst && f < 0
              ? !1
              : !this.visProp.straightlast && f > 1
              ? !1
              : !0)
      );
    },
    update: function () {
      var e;
      return this.needsUpdate
        ? (this.constrained &&
            (typeof this.funps != "undefined"
              ? ((e = this.funps()),
                e &&
                  e.length &&
                  e.length === 2 &&
                  ((this.point1 = e[0]), (this.point2 = e[1])))
              : (typeof this.funp1 == "function" &&
                  ((e = this.funp1()),
                  JXG.isPoint(e)
                    ? (this.point1 = e)
                    : e &&
                      e.length &&
                      e.length === 2 &&
                      this.point1.setPositionDirectly(JXG.COORDS_BY_USER, e)),
                typeof this.funp2 == "function" &&
                  ((e = this.funp2()),
                  JXG.isPoint(e)
                    ? (this.point2 = e)
                    : e &&
                      e.length &&
                      e.length === 2 &&
                      this.point2.setPositionDirectly(JXG.COORDS_BY_USER, e)))),
          this.updateSegmentFixedLength(),
          this.updateStdform(),
          this.visProp.trace && this.cloneToBackground(!0),
          this)
        : this;
    },
    updateSegmentFixedLength: function () {
      var e, t, n, r, i, s, o, u;
      if (!this.hasFixedLength) return this;
      (e = this.point1.Dist(this.point2)),
        (t = this.fixedLength()),
        (n = this.fixedLengthOldCoords[0].distance(
          JXG.COORDS_BY_USER,
          this.point1.coords
        )),
        (r = this.fixedLengthOldCoords[1].distance(
          JXG.COORDS_BY_USER,
          this.point2.coords
        ));
      if (n > JXG.Math.eps || r > JXG.Math.eps || e != t) {
        (i =
          this.point1.isDraggable &&
          this.point1.type != JXG.OBJECT_TYPE_GLIDER &&
          !this.point1.visProp.fixed),
          (s =
            this.point2.isDraggable &&
            this.point2.type != JXG.OBJECT_TYPE_GLIDER &&
            !this.point2.visProp.fixed);
        if (e > JXG.Math.eps) {
          if ((n > r && s) || (n <= r && s && !i))
            this.point2.setPositionDirectly(JXG.COORDS_BY_USER, [
              this.point1.X() + ((this.point2.X() - this.point1.X()) * t) / e,
              this.point1.Y() + ((this.point2.Y() - this.point1.Y()) * t) / e,
            ]),
              this.point2.prepareUpdate().updateRenderer();
          else if ((n <= r && i) || (n > r && i && !s))
            this.point1.setPositionDirectly(JXG.COORDS_BY_USER, [
              this.point2.X() + ((this.point1.X() - this.point2.X()) * t) / e,
              this.point2.Y() + ((this.point1.Y() - this.point2.Y()) * t) / e,
            ]),
              this.point1.prepareUpdate().updateRenderer();
        } else
          (o = Math.random() - 0.5),
            (u = Math.random() - 0.5),
            (e = Math.sqrt(o * o + u * u)),
            s
              ? (this.point2.setPositionDirectly(JXG.COORDS_BY_USER, [
                  this.point1.X() + (o * t) / e,
                  this.point1.Y() + (u * t) / e,
                ]),
                this.point2.prepareUpdate().updateRenderer())
              : i &&
                (this.point1.setPositionDirectly(JXG.COORDS_BY_USER, [
                  this.point2.X() + (o * t) / e,
                  this.point2.Y() + (u * t) / e,
                ]),
                this.point1.prepareUpdate().updateRenderer());
        this.fixedLengthOldCoords[0].setCoordinates(
          JXG.COORDS_BY_USER,
          this.point1.coords.usrCoords
        ),
          this.fixedLengthOldCoords[1].setCoordinates(
            JXG.COORDS_BY_USER,
            this.point2.coords.usrCoords
          );
      }
      return this;
    },
    updateStdform: function () {
      var e = JXG.Math.crossProduct(
        this.point1.coords.usrCoords,
        this.point2.coords.usrCoords
      );
      (this.stdform[0] = e[0]),
        (this.stdform[1] = e[1]),
        (this.stdform[2] = e[2]),
        (this.stdform[3] = 0),
        this.normalize();
    },
    updateRenderer: function () {
      var e;
      return (
        this.needsUpdate &&
          this.visProp.visible &&
          ((e = this.isReal),
          (this.isReal =
            !isNaN(
              this.point1.coords.usrCoords[1] +
                this.point1.coords.usrCoords[2] +
                this.point2.coords.usrCoords[1] +
                this.point2.coords.usrCoords[2]
            ) &&
            JXG.Math.innerProduct(this.stdform, this.stdform, 3) >=
              JXG.Math.eps * JXG.Math.eps),
          this.isReal
            ? (e != this.isReal &&
                (this.board.renderer.show(this),
                this.hasLabel &&
                  this.label.content.visProp.visible &&
                  this.board.renderer.show(this.label.content)),
              this.board.renderer.updateLine(this))
            : e != this.isReal &&
              (this.board.renderer.hide(this),
              this.hasLabel &&
                this.label.content.visProp.visible &&
                this.board.renderer.hide(this.label.content)),
          (this.needsUpdate = !1)),
        this.hasLabel &&
          this.label.content.visProp.visible &&
          this.isReal &&
          (this.label.content.update(),
          this.board.renderer.updateText(this.label.content)),
        this
      );
    },
    generatePolynomial: function (e) {
      var t = this.point1.symbolic.x,
        n = this.point1.symbolic.y,
        r = this.point2.symbolic.x,
        i = this.point2.symbolic.y,
        s = e.symbolic.x,
        o = e.symbolic.y;
      return [
        [
          "(",
          n,
          ")*(",
          s,
          ")-(",
          n,
          ")*(",
          r,
          ")+(",
          o,
          ")*(",
          r,
          ")-(",
          t,
          ")*(",
          o,
          ")+(",
          t,
          ")*(",
          i,
          ")-(",
          s,
          ")*(",
          i,
          ")",
        ].join(""),
      ];
    },
    getRise: function () {
      return Math.abs(this.stdform[2]) >= JXG.Math.eps
        ? -this.stdform[0] / this.stdform[2]
        : Infinity;
    },
    getSlope: function () {
      return Math.abs(this.stdform[2]) >= JXG.Math.eps
        ? -this.stdform[1] / this.stdform[2]
        : Infinity;
    },
    getAngle: function () {
      return Math.atan2(
        this.point2.Y() - this.point1.Y(),
        this.point2.X() - this.point1.X()
      );
    },
    setStraight: function (e, t) {
      return (
        (this.visProp.straightfirst = e),
        (this.visProp.straightlast = t),
        this.board.renderer.updateLine(this),
        this
      );
    },
    getTextAnchor: function () {
      return new JXG.Coords(
        JXG.COORDS_BY_USER,
        [
          0.5 * (this.point2.X() + this.point1.X()),
          0.5 * (this.point2.Y() + this.point1.Y()),
        ],
        this.board
      );
    },
    setLabelRelativeCoords: function (e) {
      JXG.exists(this.label.content) &&
        (this.label.content.relativeCoords = new JXG.Coords(
          JXG.COORDS_BY_SCREEN,
          [e[0], -e[1]],
          this.board
        ));
    },
    getLabelAnchor: function () {
      var e,
        t,
        n = 0,
        r = 0,
        i = 0,
        s = new JXG.Coords(
          JXG.COORDS_BY_USER,
          this.point1.coords.usrCoords,
          this.board
        ),
        o = new JXG.Coords(
          JXG.COORDS_BY_USER,
          this.point2.coords.usrCoords,
          this.board
        );
      (this.visProp.straightfirst || this.visProp.straightlast) &&
        JXG.Math.Geometry.calcStraight(this, s, o, 0),
        (s = s.scrCoords),
        (o = o.scrCoords);
      if (!JXG.exists(this.label.content))
        return new JXG.Coords(JXG.COORDS_BY_SCREEN, [NaN, NaN], this.board);
      switch (this.label.content.visProp.position) {
        case "lft":
        case "llft":
        case "ulft":
          s[1] <= o[1] ? ((e = s[1]), (t = s[2])) : ((e = o[1]), (t = o[2]));
          break;
        case "rt":
        case "lrt":
        case "urt":
          s[1] > o[1] ? ((e = s[1]), (t = s[2])) : ((e = o[1]), (t = o[2]));
          break;
        default:
          (e = 0.5 * (s[1] + o[1])), (t = 0.5 * (s[2] + o[2]));
      }
      if (this.visProp.straightfirst || this.visProp.straightlast)
        JXG.exists(this.label.content) &&
          ((r = parseFloat(this.label.content.visProp.offset[0])),
          (i = parseFloat(this.label.content.visProp.offset[1])),
          (n = this.label.content.visProp.fontsize)),
          Math.abs(e) < JXG.Math.eps
            ? (e = r)
            : this.board.canvasWidth + JXG.Math.eps > e &&
              e > this.board.canvasWidth - n - JXG.Math.eps
            ? (e = this.board.canvasWidth - r - n)
            : (e += r),
          JXG.Math.eps + n > t && t > -JXG.Math.eps
            ? (t = i + n)
            : this.board.canvasHeight + JXG.Math.eps > t &&
              t > this.board.canvasHeight - n - JXG.Math.eps
            ? (t = this.board.canvasHeight - i)
            : (t += i);
      return new JXG.Coords(JXG.COORDS_BY_SCREEN, [e, t], this.board);
    },
    cloneToBackground: function () {
      var e = {},
        t,
        n,
        r;
      return (
        (e.id = this.id + "T" + this.numTraces),
        (e.elementClass = JXG.OBJECT_CLASS_LINE),
        this.numTraces++,
        (e.point1 = this.point1),
        (e.point2 = this.point2),
        (e.stdform = this.stdform),
        (e.board = this.board),
        (e.visProp = JXG.deepCopy(
          this.visProp,
          this.visProp.traceattributes,
          !0
        )),
        (e.visProp.layer = this.board.options.layer.trace),
        JXG.clearVisPropOld(e),
        (n = this.getSlope()),
        (t = this.getRise()),
        (e.getSlope = function () {
          return n;
        }),
        (e.getRise = function () {
          return t;
        }),
        (r = this.board.renderer.enhancedRendering),
        (this.board.renderer.enhancedRendering = !0),
        this.board.renderer.drawLine(e),
        (this.board.renderer.enhancedRendering = r),
        (this.traces[e.id] = e.rendNode),
        delete e,
        this
      );
    },
    addTransform: function (e) {
      var t,
        n = JXG.isArray(e) ? e : [e],
        r = n.length;
      for (t = 0; t < r; t++)
        this.point1.transformations.push(n[t]),
          this.point2.transformations.push(n[t]);
      return this;
    },
    setPosition: function (e, t) {
      var n;
      return (
        (t = new JXG.Coords(e, t, this.board)),
        (n = this.board.create("transform", t.usrCoords.slice(1), {
          type: "translate",
        })),
        this.point1.transformations.length > 0 &&
        this.point1.transformations[this.point1.transformations.length - 1]
          .isNumericMatrix
          ? this.point1.transformations[
              this.point1.transformations.length - 1
            ].melt(n)
          : this.point1.addTransform(this.point1, n),
        this.point2.transformations.length > 0 &&
        this.point2.transformations[this.point2.transformations.length - 1]
          .isNumericMatrix
          ? this.point2.transformations[
              this.point2.transformations.length - 1
            ].melt(n)
          : this.point2.addTransform(this.point2, n),
        this
      );
    },
    setPositionDirectly: function (e, t, n) {
      var r,
        i,
        s = new JXG.Coords(e, t, this.board),
        o = new JXG.Coords(e, n, this.board);
      return !this.point1.draggable() || !this.point2.draggable()
        ? this
        : ((r = JXG.Math.Statistics.subtract(s.usrCoords, o.usrCoords)),
          (i = this.board.create("transform", r.slice(1), {
            type: "translate",
          })),
          i.applyOnce([this.point1, this.point2]),
          this);
    },
    snapToGrid: function () {
      return (
        this.visProp.snaptogrid &&
          (this.point1.snapToGrid(), this.point2.snapToGrid()),
        this
      );
    },
    X: function (e) {
      var t = this.stdform[2],
        n;
      return (
        (n =
          Math.abs(this.point1.coords.usrCoords[0]) > JXG.Math.eps
            ? this.point1.coords.usrCoords[1]
            : this.point2.coords.usrCoords[1]),
        (e = (e - 0.5) * 2),
        e < 0 ? ((e *= -1), (1 - e) * n + e * t) : (1 - e) * n - e * t
      );
    },
    Y: function (e) {
      var t = this.stdform[1],
        n;
      return (
        (n =
          Math.abs(this.point1.coords.usrCoords[0]) > JXG.Math.eps
            ? this.point1.coords.usrCoords[2]
            : this.point2.coords.usrCoords[2]),
        (e = (e - 0.5) * 2),
        e < 0 ? ((e *= -1), (1 - e) * n - e * t) : (1 - e) * n + e * t
      );
    },
    Z: function (e) {
      var t =
        Math.abs(this.point1.coords.usrCoords[0]) > JXG.Math.eps
          ? this.point1.coords.usrCoords[0]
          : this.point2.coords.usrCoords[0];
      return (e = (e - 0.5) * 2), e < 0 && (e *= -1), (1 - e) * t;
    },
    L: function () {
      return this.point1.Dist(this.point2);
    },
    minX: function () {
      return 0;
    },
    maxX: function () {
      return 1;
    },
    bounds: function () {
      var e = this.point1.coords.usrCoords,
        t = this.point2.coords.usrCoords;
      return [
        Math.min(e[1], t[1]),
        Math.max(e[2], t[2]),
        Math.max(e[1], t[1]),
        Math.min(e[2], t[2]),
      ];
    },
    addTicks: function (e) {
      if (e.id == "" || typeof e.id == "undefined")
        e.id = this.id + "_ticks_" + (this.ticks.length + 1);
      return this.board.renderer.drawTicks(e), this.ticks.push(e), e.id;
    },
    remove: function () {
      this.removeAllTicks(), JXG.GeometryElement.prototype.remove.call(this);
    },
    removeAllTicks: function () {
      var e, t;
      for (t = this.ticks.length; t > 0; t--)
        this.removeTicks(this.ticks[t - 1]);
      (this.ticks = new Array()), this.board.update();
    },
    removeTicks: function (e) {
      var t, n;
      this.defaultTicks != null &&
        this.defaultTicks == e &&
        (this.defaultTicks = null);
      for (t = this.ticks.length; t > 0; t--)
        if (this.ticks[t - 1] == e) {
          this.board.removeObject(this.ticks[t - 1]);
          if (this.ticks[t - 1].ticks)
            for (n = 0; n < this.ticks[t - 1].ticks.length; n++)
              this.ticks[t - 1].labels[n] != null &&
                this.board.removeObject(this.ticks[t - 1].labels[n]);
          delete this.ticks[t - 1];
          break;
        }
    },
    hideElement: function () {
      var e;
      JXG.GeometryElement.prototype.hideElement.call(this);
      for (e = 0; e < this.ticks.length; e++) this.ticks[e].hideElement();
    },
    showElement: function () {
      var e;
      JXG.GeometryElement.prototype.showElement.call(this);
      for (e = 0; e < this.ticks.length; e++) this.ticks[e].showElement();
    },
  }),
  (JXG.createLine = function (e, t, n) {
    var r,
      i,
      s,
      o,
      u,
      a = [],
      f = !1,
      l;
    if (t.length == 2) {
      if (JXG.isArray(t[0]) && t[0].length > 1)
        (u = JXG.copyAttributes(n, e.options, "line", "point1")),
          (i = e.create("point", t[0], u));
      else if (
        JXG.isString(t[0]) ||
        t[0].elementClass == JXG.OBJECT_CLASS_POINT
      )
        i = JXG.getReference(e, t[0]);
      else if (
        typeof t[0] == "function" &&
        t[0]().elementClass == JXG.OBJECT_CLASS_POINT
      )
        (i = t[0]()), (f = !0);
      else {
        if (typeof t[0] != "function" || !t[0]().length || t[0]().length !== 2)
          throw new Error(
            "JSXGraph: Can't create line with parent types '" +
              typeof t[0] +
              "' and '" +
              typeof t[1] +
              "'." +
              "\nPossible parent types: [point,point], [[x1,y1],[x2,y2]], [a,b,c]"
          );
        (u = JXG.copyAttributes(n, e.options, "line", "point1")),
          (i = JXG.createPoint(e, t[0](), u)),
          (f = !0);
      }
      if (JXG.isArray(t[1]) && t[1].length > 1)
        (u = JXG.copyAttributes(n, e.options, "line", "point2")),
          (s = e.create("point", t[1], u));
      else if (
        JXG.isString(t[1]) ||
        t[1].elementClass == JXG.OBJECT_CLASS_POINT
      )
        s = JXG.getReference(e, t[1]);
      else if (
        typeof t[1] == "function" &&
        t[1]().elementClass == JXG.OBJECT_CLASS_POINT
      )
        (s = t[1]()), (f = !0);
      else {
        if (typeof t[1] != "function" || !t[1]().length || t[1]().length !== 2)
          throw new Error(
            "JSXGraph: Can't create line with parent types '" +
              typeof t[0] +
              "' and '" +
              typeof t[1] +
              "'." +
              "\nPossible parent types: [point,point], [[x1,y1],[x2,y2]], [a,b,c]"
          );
        (u = JXG.copyAttributes(n, e.options, "line", "point2")),
          (s = JXG.createPoint(e, t[1](), u)),
          (f = !0);
      }
      (u = JXG.copyAttributes(n, e.options, "line")),
        (r = new JXG.Line(e, i, s, u)),
        f
          ? ((r.constrained = !0), (r.funp1 = t[0]), (r.funp2 = t[1]))
          : (r.isDraggable = !0),
        r.constrained || (r.parents = [i.id, s.id]);
    } else if (t.length == 3) {
      l = !0;
      for (o = 0; o < 3; o++)
        if (typeof t[o] == "number")
          a[o] = (function (e) {
            return function () {
              return e;
            };
          })(t[o]);
        else {
          if (typeof t[o] != "function")
            throw new Error(
              "JSXGraph: Can't create line with parent types '" +
                typeof t[0] +
                "' and '" +
                typeof t[1] +
                "' and '" +
                typeof t[2] +
                "'." +
                "\nPossible parent types: [point,point], [[x1,y1],[x2,y2]], [a,b,c]"
            );
          (a[o] = t[o]), (l = !1);
        }
      (u = JXG.copyAttributes(n, e.options, "line", "point1")),
        l
          ? (i = e.create(
              "point",
              [
                a[2]() * a[2]() + a[1]() * a[1](),
                a[2]() - a[1]() * a[0]() + a[2](),
                -a[1]() - a[2]() * a[0]() - a[1](),
              ],
              u
            ))
          : (i = e.create(
              "point",
              [
                function () {
                  return (0 + a[2]() * a[2]() + a[1]() * a[1]()) * 0.5;
                },
                function () {
                  return (a[2]() - a[1]() * a[0]() + a[2]()) * 0.5;
                },
                function () {
                  return (-a[1]() - a[2]() * a[0]() - a[1]()) * 0.5;
                },
              ],
              u
            )),
        (u = JXG.copyAttributes(n, e.options, "line", "point2")),
        l
          ? (s = e.create(
              "point",
              [
                a[2]() * a[2]() + a[1]() * a[1](),
                -a[1]() * a[0]() + a[2](),
                -a[2]() * a[0]() - a[1](),
              ],
              u
            ))
          : (s = e.create(
              "point",
              [
                function () {
                  return a[2]() * a[2]() + a[1]() * a[1]();
                },
                function () {
                  return -a[1]() * a[0]() + a[2]();
                },
                function () {
                  return -a[2]() * a[0]() - a[1]();
                },
              ],
              u
            )),
        i.prepareUpdate().update(),
        s.prepareUpdate().update(),
        (u = JXG.copyAttributes(n, e.options, "line")),
        (r = new JXG.Line(e, i, s, u)),
        (r.isDraggable = l),
        l && (r.parents = [a[0](), a[1](), a[2]()]);
    } else if (
      t.length == 1 &&
      typeof t[0] == "function" &&
      t[0]().length == 2 &&
      t[0]()[0].elementClass == JXG.OBJECT_CLASS_POINT &&
      t[0]()[1].elementClass == JXG.OBJECT_CLASS_POINT
    ) {
      var c = t[0]();
      (u = JXG.copyAttributes(n, e.options, "line")),
        (r = new JXG.Line(e, c[0], c[1], u)),
        (r.constrained = !0),
        (r.funps = t[0]);
    } else {
      if (
        t.length != 1 ||
        typeof t[0] != "function" ||
        t[0]().length != 3 ||
        typeof t[0]()[0] != "number" ||
        typeof t[0]()[1] != "number" ||
        typeof t[0]()[2] != "number"
      )
        throw new Error(
          "JSXGraph: Can't create line with parent types '" +
            typeof t[0] +
            "' and '" +
            typeof t[1] +
            "'." +
            "\nPossible parent types: [point,point], [[x1,y1],[x2,y2]], [a,b,c]"
        );
      (c = t[0]),
        (u = JXG.copyAttributes(n, e.options, "line", "point1")),
        (i = e.create(
          "point",
          [
            function () {
              var e = c();
              return [
                (0 + e[2] * e[2] + e[1] * e[1]) * 0.5,
                (e[2] - e[1] * e[0] + e[2]) * 0.5,
                (-e[1] - e[2] * e[0] - e[1]) * 0.5,
              ];
            },
          ],
          u
        )),
        (u = JXG.copyAttributes(n, e.options, "line", "point2")),
        (s = e.create(
          "point",
          [
            function () {
              var e = c();
              return [
                e[2] * e[2] + e[1] * e[1],
                -e[1] * e[0] + e[2],
                -e[2] * e[0] - e[1],
              ];
            },
          ],
          u
        )),
        (u = JXG.copyAttributes(n, e.options, "line")),
        (r = new JXG.Line(e, i, s, u)),
        (r.constrained = !0),
        (r.funps = t[0]);
    }
    return r;
  }),
  JXG.JSXGraph.registerElement("line", JXG.createLine),
  (JXG.createSegment = function (e, t, n) {
    var r, i, s;
    (n.straightFirst = !1),
      (n.straightLast = !1),
      (s = JXG.copyAttributes(n, e.options, "segment")),
      (r = e.create("line", t.slice(0, 2), s));
    if (t.length == 3) {
      r.hasFixedLength = !0;
      if (JXG.isNumber(t[2]))
        r.fixedLength = function () {
          return t[2];
        };
      else {
        if (!JXG.isFunction(t[2]))
          throw new Error(
            "JSXGraph: Can't create segment with third parent type '" +
              typeof t[2] +
              "'." +
              "\nPossible third parent types: number or function"
          );
        r.fixedLength = t[2];
      }
      (r.fixedLengthOldCoords = []),
        (r.fixedLengthOldCoords[0] = new JXG.Coords(
          JXG.COORDS_BY_USER,
          r.point1.coords.usrCoords.slice(1, 3),
          e
        )),
        (r.fixedLengthOldCoords[1] = new JXG.Coords(
          JXG.COORDS_BY_USER,
          r.point2.coords.usrCoords.slice(1, 3),
          e
        ));
    }
    return (r.elType = "segment"), r;
  }),
  JXG.JSXGraph.registerElement("segment", JXG.createSegment),
  (JXG.createArrow = function (e, t, n) {
    var r;
    return (
      (n.firstArrow = !1),
      (n.lastArrow = !0),
      (r = e.create("line", t, n).setStraight(!1, !1)),
      (r.type = JXG.OBJECT_TYPE_VECTOR),
      (r.elType = "arrow"),
      r
    );
  }),
  JXG.JSXGraph.registerElement("arrow", JXG.createArrow),
  (JXG.createAxis = function (e, t, n) {
    var r, i, s;
    if (
      (!JXG.isArray(t[0]) && !JXG.isPoint(t[0])) ||
      (!JXG.isArray(t[1]) && !JXG.isPoint(t[1]))
    )
      throw new Error(
        "JSXGraph: Can't create axis with parent types '" +
          typeof t[0] +
          "' and '" +
          typeof t[1] +
          "'." +
          "\nPossible parent types: [point,point], [[x1,y1],[x2,y2]]"
      );
    (r = JXG.copyAttributes(n, e.options, "axis")),
      (i = e.create("line", t, r)),
      (i.type = JXG.OBJECT_TYPE_AXIS),
      (i.isDraggable = !1),
      (i.point1.isDraggable = !1),
      (i.point2.isDraggable = !1);
    for (var o in i.ancestors) i.ancestors[o].type = JXG.OBJECT_TYPE_AXISPOINT;
    return (
      (r = JXG.copyAttributes(n, e.options, "axis", "ticks")),
      JXG.exists(r.ticksdistance)
        ? (s = r.ticksdistance)
        : JXG.isArray(r.ticks)
        ? (s = r.ticks)
        : (s = 1),
      (i.defaultTicks = e.create("ticks", [i, s], r)),
      (i.defaultTicks.dump = !1),
      (i.elType = "axis"),
      (i.subs = { ticks: i.defaultTicks }),
      i
    );
  }),
  JXG.JSXGraph.registerElement("axis", JXG.createAxis),
  (JXG.createTangent = function (e, t, n) {
    var r, i, s, o, u, a, f, l;
    if (t.length == 1) (r = t[0]), (i = r.slideObject);
    else {
      if (t.length != 2)
        throw new Error(
          "JSXGraph: Can't create tangent with parent types '" +
            typeof t[0] +
            "' and '" +
            typeof t[1] +
            "'." +
            "\nPossible parent types: [glider], [point,line|curve|circle|conic]"
        );
      if (JXG.isPoint(t[0])) (r = t[0]), (i = t[1]);
      else {
        if (!JXG.isPoint(t[1]))
          throw new Error(
            "JSXGraph: Can't create tangent with parent types '" +
              typeof t[0] +
              "' and '" +
              typeof t[1] +
              "'." +
              "\nPossible parent types: [glider], [point,line|curve|circle|conic]"
          );
        (i = t[0]), (r = t[1]);
      }
    }
    if (i.elementClass == JXG.OBJECT_CLASS_LINE)
      l = e.create("line", [i.point1, i.point2], n);
    else if (
      i.elementClass == JXG.OBJECT_CLASS_CURVE &&
      i.type != JXG.OBJECT_TYPE_CONIC
    )
      i.visProp.curvetype != "plot"
        ? ((s = i.X),
          (o = i.Y),
          (l = e.create(
            "line",
            [
              function () {
                return -r.X() * e.D(o)(r.position) + r.Y() * e.D(s)(r.position);
              },
              function () {
                return e.D(o)(r.position);
              },
              function () {
                return -e.D(s)(r.position);
              },
            ],
            n
          )),
          r.addChild(l),
          (l.glider = r))
        : ((l = e.create(
            "line",
            [
              function () {
                return (
                  (u = Math.floor(r.position)),
                  u == i.numberPoints - 1 && u--,
                  u < 0 ? 1 : i.Y(u) * i.X(u + 1) - i.X(u) * i.Y(u + 1)
                );
              },
              function () {
                return (
                  (u = Math.floor(r.position)),
                  u == i.numberPoints - 1 && u--,
                  u < 0 ? 0 : i.Y(u + 1) - i.Y(u)
                );
              },
              function () {
                return (
                  (u = Math.floor(r.position)),
                  u == i.numberPoints - 1 && u--,
                  u < 0 ? 0 : i.X(u) - i.X(u + 1)
                );
              },
            ],
            n
          )),
          r.addChild(l),
          (l.glider = r));
    else if (i.type == JXG.OBJECT_TYPE_TURTLE)
      (l = e.create(
        "line",
        [
          function () {
            u = Math.floor(r.position);
            for (a = 0; a < i.objects.length; a++) {
              f = i.objects[a];
              if (f.type == JXG.OBJECT_TYPE_CURVE) {
                if (u < f.numberPoints) break;
                u -= f.numberPoints;
              }
            }
            return (
              u == f.numberPoints - 1 && u--,
              u < 0 ? 1 : f.Y(u) * f.X(u + 1) - f.X(u) * f.Y(u + 1)
            );
          },
          function () {
            u = Math.floor(r.position);
            for (a = 0; a < i.objects.length; a++) {
              f = i.objects[a];
              if (f.type == JXG.OBJECT_TYPE_CURVE) {
                if (u < f.numberPoints) break;
                (u -= f.numberPoints), moveTo(funps);
              }
            }
            return (
              u == f.numberPoints - 1 && u--, u < 0 ? 0 : f.Y(u + 1) - f.Y(u)
            );
          },
          function () {
            u = Math.floor(r.position);
            for (a = 0; a < i.objects.length; a++) {
              f = i.objects[a];
              if (f.type == JXG.OBJECT_TYPE_CURVE) {
                if (u < f.numberPoints) break;
                u -= f.numberPoints;
              }
            }
            return (
              u == f.numberPoints - 1 && u--, u < 0 ? 0 : f.X(u) - f.X(u + 1)
            );
          },
        ],
        n
      )),
        r.addChild(l),
        (l.glider = r);
    else if (
      i.elementClass == JXG.OBJECT_CLASS_CIRCLE ||
      i.type == JXG.OBJECT_TYPE_CONIC
    )
      (l = e.create(
        "line",
        [
          function () {
            return JXG.Math.matVecMult(i.quadraticform, r.coords.usrCoords)[0];
          },
          function () {
            return JXG.Math.matVecMult(i.quadraticform, r.coords.usrCoords)[1];
          },
          function () {
            return JXG.Math.matVecMult(i.quadraticform, r.coords.usrCoords)[2];
          },
        ],
        n
      )),
        r.addChild(l),
        (l.glider = r);
    if (!JXG.exists(l))
      throw new Error(
        "JSXGraph: Couldn't create tangent with the given parents."
      );
    (l.elType = "tangent"), (l.parents = []);
    for (u = 0; u < t.length; u++) l.parents.push(t[u].id);
    return l;
  }),
  JXG.JSXGraph.registerElement("tangent", JXG.createTangent),
  JXG.JSXGraph.registerElement("polar", JXG.createTangent),
  (JXG.Group = function (e, t, n) {
    var r, i, s, o, u;
    (this.board = e),
      (this.objects = {}),
      (r = this.board.numObjects),
      this.board.numObjects++,
      t == "" || !JXG.exists(t)
        ? (this.id = this.board.id + "Group" + r)
        : (this.id = t),
      (this.board.groups[this.id] = this),
      (this.type = JXG.OBJECT_TYPE_POINT),
      (this.elementClass = JXG.OBJECT_CLASS_POINT),
      n == "" || !JXG.exists(n)
        ? (this.name = "group_" + this.board.generateName(this))
        : (this.name = n),
      delete this.type,
      arguments.length == 4 && JXG.isArray(arguments[3])
        ? (i = arguments[3])
        : (i = Array.prototype.slice.call(arguments, 3));
    for (s = 0; s < i.length; s++)
      (o = JXG.getReference(this.board, i[s])),
        !o.visProp.fixed &&
          (o.type == JXG.OBJECT_TYPE_POINT ||
            o.type == JXG.OBJECT_TYPE_GLIDER) &&
          (o.group.length != 0
            ? this.addGroup(o.group[o.group.length - 1])
            : this.addPoint(o));
    (this.suspendUpdate = !1), (this.dX = 0), (this.dY = 0);
  }),
  JXG.extend(JXG.Group.prototype, {
    ungroup: function () {
      var e;
      for (e in this.objects)
        JXG.isArray(this.objects[e].point.group) &&
          this.objects[e].point.group[this.objects[e].point.group.length - 1] ==
            this &&
          this.objects[e].point.group.pop(),
          this.removePoint(this.objects[e].point);
    },
    suspendUpdate: function () {
      this.suspendUpdate = !0;
    },
    unsuspendUpdate: function () {
      this.suspendUpdate = !1;
    },
    update: function (e, t, n, r) {
      var i = null,
        s;
      if (!this.suspendUpdate) {
        this.suspendUpdate = !0;
        for (s in this.objects)
          JXG.exists(this.board.objects[s])
            ? ((i = this.objects[s].point),
              i.id != e.id &&
                i.coords.setCoordinates(JXG.COORDS_BY_USER, [
                  i.coords.usrCoords[1] + t,
                  i.coords.usrCoords[2] + n,
                ]),
              this.objects[s].point.prepareUpdate().update(!1).updateRenderer())
            : delete this.objects[s];
        this.suspendUpdate = !1;
      }
      return this;
    },
    addPoint: function (e) {
      (this.objects[e.id] = {
        point: e,
        handler: function (t, n) {
          this.update(
            e,
            e.coords.usrCoords[1] - t[1],
            e.coords.usrCoords[2] - t[2],
            e.coords.usrCoords[0] - t[0]
          );
        },
      }),
        e.coords.on("update", this.objects[e.id].handler, this);
    },
    addPoints: function (e) {
      var t;
      for (t = 0; t < e.length; t++) this.addPoint(e[t]);
    },
    addGroup: function (e) {
      var t;
      for (t in e.objects) this.addPoint(e.objects[t].point);
    },
    removePoint: function (e) {
      var t;
      this.objects[e.id].point.coords.off("update", this.objects[e.id].handler),
        delete this.objects[e.id];
    },
    setProperty: function () {
      var e;
      for (e in this.objects)
        this.objects[e].point.setProperty.apply(
          this.objects[e].point,
          arguments
        );
    },
  }),
  (JXG.createGroup = function (e, t, n) {
    var r,
      i = new JXG.Group(e, n.id, n.name, t);
    (i.elType = "group"), (i.parents = []);
    for (r = 0; r < t.length; r++) i.parents.push(t[r].id);
    return i;
  }),
  JXG.JSXGraph.registerElement("group", JXG.createGroup),
  (JXG.Circle = function (e, t, n, r, i) {
    this.constructor(e, i, JXG.OBJECT_TYPE_CIRCLE, JXG.OBJECT_CLASS_CIRCLE),
      (this.method = t),
      (this.midpoint = JXG.getReference(this.board, n)),
      (this.center = JXG.getReference(this.board, n)),
      (this.point2 = null),
      (this.radius = 0),
      (this.line = null),
      (this.circle = null),
      t == "twoPoints"
        ? ((this.point2 = JXG.getReference(e, r)),
          (this.radius = this.Radius()))
        : t == "pointRadius"
        ? ((this.gxtterm = r),
          (this.updateRadius = JXG.createFunction(r, this.board, null, !0)),
          this.updateRadius())
        : t == "pointLine"
        ? ((this.line = JXG.getReference(e, r)),
          (this.radius = this.line.point1.coords.distance(
            JXG.COORDS_BY_USER,
            this.line.point2.coords
          )))
        : t == "pointCircle" &&
          ((this.circle = JXG.getReference(e, r)),
          (this.radius = this.circle.Radius())),
      (this.id = this.board.setId(this, "C")),
      this.board.renderer.drawEllipse(this),
      this.board.finalizeAdding(this),
      this.createGradient(),
      (this.elType = "circle"),
      this.createLabel(),
      this.center.addChild(this),
      t == "pointRadius"
        ? this.notifyParents(r)
        : t == "pointLine"
        ? this.line.addChild(this)
        : t == "pointCircle"
        ? this.circle.addChild(this)
        : t == "twoPoints" && this.point2.addChild(this),
      (this.methodMap = JXG.deepCopy(this.methodMap, {
        setRadius: "setRadius",
        getRadius: "getRadius",
        radius: "Radius",
      }));
  }),
  (JXG.Circle.prototype = new JXG.GeometryElement()),
  JXG.extend(JXG.Circle.prototype, {
    hasPoint: function (e, t) {
      var n = this.board.options.precision.hasPoint / this.board.unitX,
        r = this.center.coords.usrCoords,
        i = new JXG.Coords(JXG.COORDS_BY_SCREEN, [e, t], this.board),
        s = this.Radius(),
        o = Math.sqrt(
          (r[1] - i.usrCoords[1]) * (r[1] - i.usrCoords[1]) +
            (r[2] - i.usrCoords[2]) * (r[2] - i.usrCoords[2])
        );
      return this.visProp.hasinnerpoints ? o < s + n : Math.abs(o - s) < n;
    },
    generatePolynomial: function (e) {
      var t = this.center.symbolic.x,
        n = this.center.symbolic.y,
        r = e.symbolic.x,
        i = e.symbolic.y,
        s = this.generateRadiusSquared();
      if (s == "") return [];
      var o =
        "((" +
        r +
        ")-(" +
        t +
        "))^2 + ((" +
        i +
        ")-(" +
        n +
        "))^2 - (" +
        s +
        ")";
      return [o];
    },
    generateRadiusSquared: function () {
      var e = "",
        t,
        n,
        r,
        i,
        s,
        o;
      return (
        this.method == "twoPoints"
          ? ((t = this.center.symbolic.x),
            (n = this.center.symbolic.y),
            (r = this.point2.symbolic.x),
            (i = this.point2.symbolic.y),
            (e = "((" + r + ")-(" + t + "))^2 + ((" + i + ")-(" + n + "))^2"))
          : this.method == "pointRadius"
          ? typeof this.radius == "number" &&
            (e = "" + this.radius * this.radius)
          : this.method == "pointLine"
          ? ((r = this.line.point1.symbolic.x),
            (i = this.line.point1.symbolic.y),
            (s = this.line.point2.symbolic.x),
            (o = this.line.point2.symbolic.y),
            (e = "((" + r + ")-(" + s + "))^2 + ((" + i + ")-(" + o + "))^2"))
          : this.method == "pointCircle" && (e = this.circle.Radius()),
        e
      );
    },
    update: function () {
      return (
        this.needsUpdate &&
          (this.visProp.trace && this.cloneToBackground(!0),
          this.method == "pointLine"
            ? (this.radius = this.line.point1.coords.distance(
                JXG.COORDS_BY_USER,
                this.line.point2.coords
              ))
            : this.method == "pointCircle"
            ? (this.radius = this.circle.Radius())
            : this.method == "pointRadius" &&
              (this.radius = this.updateRadius()),
          this.updateStdform(),
          this.updateQuadraticform()),
        this
      );
    },
    updateQuadraticform: function () {
      var e = this.center,
        t = e.X(),
        n = e.Y(),
        r = this.Radius();
      this.quadraticform = [
        [t * t + n * n - r * r, -t, -n],
        [-t, 1, 0],
        [-n, 0, 1],
      ];
    },
    updateStdform: function () {
      (this.stdform[3] = 0.5),
        (this.stdform[4] = this.Radius()),
        (this.stdform[1] = -this.center.coords.usrCoords[1]),
        (this.stdform[2] = -this.center.coords.usrCoords[2]),
        this.normalize();
    },
    updateRenderer: function () {
      if (this.needsUpdate && this.visProp.visible) {
        var e = this.isReal;
        (this.isReal =
          !isNaN(
            this.center.coords.usrCoords[1] +
              this.center.coords.usrCoords[2] +
              this.Radius()
          ) && this.center.isReal),
          this.isReal
            ? (e != this.isReal &&
                (this.board.renderer.show(this),
                this.hasLabel &&
                  this.label.content.visProp.visible &&
                  this.board.renderer.show(this.label.content)),
              this.board.renderer.updateEllipse(this))
            : e != this.isReal &&
              (this.board.renderer.hide(this),
              this.hasLabel &&
                this.label.content.visProp.visible &&
                this.board.renderer.hide(this.label.content)),
          (this.needsUpdate = !1);
      }
      this.hasLabel &&
        this.label.content.visProp.visible &&
        this.isReal &&
        (this.label.content.update(),
        this.board.renderer.updateText(this.label.content));
    },
    notifyParents: function (e) {
      typeof e == "string" &&
        JXG.GeonextParser.findDependencies(this, e + "", this.board);
    },
    setRadius: function (e) {
      return (
        (this.updateRadius = JXG.createFunction(e, this.board, null, !0)),
        this.board.update(),
        this
      );
    },
    Radius: function (e) {
      if (JXG.exists(e)) return this.setRadius(e), this.Radius();
      if (this.method == "twoPoints")
        return JXG.Math.Geometry.distance(this.point2.coords.usrCoords, [
          0,
          0,
          0,
        ]) == 0 ||
          JXG.Math.Geometry.distance(this.center.coords.usrCoords, [0, 0, 0]) ==
            0
          ? NaN
          : this.center.Dist(this.point2);
      if (this.method == "pointLine" || this.method == "pointCircle")
        return this.radius;
      if (this.method == "pointRadius") return this.updateRadius();
    },
    getRadius: function () {
      return this.Radius();
    },
    getTextAnchor: function () {
      return this.center.coords;
    },
    getLabelAnchor: function () {
      var e = this.Radius(),
        t = this.center.coords.usrCoords,
        n,
        r;
      switch (this.visProp.label.position) {
        case "lft":
          (n = t[1] - e), (r = t[2]);
          break;
        case "llft":
          (n = t[1] - Math.sqrt(0.5) * e), (r = t[2] - Math.sqrt(0.5) * e);
          break;
        case "rt":
          (n = t[1] + e), (r = t[2]);
          break;
        case "lrt":
          (n = t[1] + Math.sqrt(0.5) * e), (r = t[2] - Math.sqrt(0.5) * e);
          break;
        case "urt":
          (n = t[1] + Math.sqrt(0.5) * e), (r = t[2] + Math.sqrt(0.5) * e);
          break;
        case "top":
          (n = t[1]), (r = t[2] + e);
          break;
        case "bot":
          (n = t[1]), (r = t[2] - e);
          break;
        case "ulft":
        default:
          (n = t[1] - Math.sqrt(0.5) * e), (r = t[2] + Math.sqrt(0.5) * e);
      }
      return new JXG.Coords(JXG.COORDS_BY_USER, [n, r], this.board);
    },
    cloneToBackground: function () {
      var e = {},
        t,
        n;
      return (
        (e.id = this.id + "T" + this.numTraces),
        (e.elementClass = JXG.OBJECT_CLASS_CIRCLE),
        this.numTraces++,
        (e.center = {}),
        (e.center.coords = this.center.coords),
        (t = this.Radius()),
        (e.Radius = function () {
          return t;
        }),
        (e.getRadius = function () {
          return t;
        }),
        (e.board = this.board),
        (e.visProp = JXG.deepCopy(
          this.visProp,
          this.visProp.traceattributes,
          !0
        )),
        (e.visProp.layer = this.board.options.layer.trace),
        JXG.clearVisPropOld(e),
        (n = this.board.renderer.enhancedRendering),
        (this.board.renderer.enhancedRendering = !0),
        this.board.renderer.drawEllipse(e),
        (this.board.renderer.enhancedRendering = n),
        (this.traces[e.id] = e.rendNode),
        this
      );
    },
    addTransform: function (e) {
      var t,
        n = JXG.isArray(e) ? e : [e],
        r = n.length;
      for (t = 0; t < r; t++)
        this.center.transformations.push(n[t]),
          this.method === "twoPoints" && this.point2.transformations.push(n[t]);
      return this;
    },
    snapToGrid: function () {
      return (
        this.visProp.snaptogrid &&
          (this.center.snapToGrid(),
          this.method === "twoPoints" && this.point2.snapToGrid()),
        this
      );
    },
    setPosition: function (e, t) {
      var n;
      return (
        (t = new JXG.Coords(e, t, this.board)),
        (n = this.board.create("transform", t.usrCoords.slice(1), {
          type: "translate",
        })),
        this.addTransform(n),
        this
      );
    },
    setPositionDirectly: function (e, t, n) {
      (t = new JXG.Coords(e, t, this.board)),
        (n = new JXG.Coords(e, n, this.board));
      var r = JXG.Math.Statistics.subtract(t.usrCoords, n.usrCoords),
        i = this.parents.length,
        s,
        o;
      for (s = 0; s < i; s++)
        if (!JXG.getRef(this.board, this.parents[s]).draggable()) return this;
      for (s = 0; s < i; s++)
        (o = JXG.getRef(this.board, this.parents[s])),
          o.coords.setCoordinates(
            JXG.COORDS_BY_USER,
            JXG.Math.Statistics.add(o.coords.usrCoords, r)
          );
      return this.update(), this;
    },
    X: function (e) {
      return (
        this.Radius() * Math.cos(e * 2 * Math.PI) +
        this.center.coords.usrCoords[1]
      );
    },
    Y: function (e) {
      return (
        this.Radius() * Math.sin(e * 2 * Math.PI) +
        this.center.coords.usrCoords[2]
      );
    },
    Z: function (e) {
      return 1;
    },
    minX: function () {
      return 0;
    },
    maxX: function () {
      return 1;
    },
    Area: function () {
      var e = this.Radius();
      return e * e * Math.PI;
    },
    bounds: function () {
      var e = this.center.coords.usrCoords,
        t = this.Radius();
      return [e[1] - t, e[2] + t, e[1] + t, e[2] - t];
    },
  }),
  (JXG.createCircle = function (e, t, n) {
    var r,
      i,
      s,
      o,
      u = !0;
    i = [];
    for (s = 0; s < t.length; s++)
      JXG.isPoint(t[s])
        ? (i[s] = t[s])
        : JXG.isArray(t[s]) && t[s].length > 1
        ? ((o = JXG.copyAttributes(n, e.options, "circle", "center")),
          (i[s] = e.create("point", t[s], o)))
        : (i[s] = t[s]);
    o = JXG.copyAttributes(n, e.options, "circle");
    if (t.length == 2 && JXG.isPoint(i[0]) && JXG.isPoint(i[1]))
      r = new JXG.Circle(e, "twoPoints", i[0], i[1], o);
    else if (
      (JXG.isNumber(i[0]) || JXG.isFunction(i[0]) || JXG.isString(i[0])) &&
      JXG.isPoint(i[1])
    )
      r = new JXG.Circle(e, "pointRadius", i[1], i[0], o);
    else if (
      (JXG.isNumber(i[1]) || JXG.isFunction(i[1]) || JXG.isString(i[1])) &&
      JXG.isPoint(i[0])
    )
      r = new JXG.Circle(e, "pointRadius", i[0], i[1], o);
    else if (i[0].elementClass == JXG.OBJECT_CLASS_CIRCLE && JXG.isPoint(i[1]))
      r = new JXG.Circle(e, "pointCircle", i[1], i[0], o);
    else if (i[1].elementClass == JXG.OBJECT_CLASS_CIRCLE && JXG.isPoint(i[0]))
      r = new JXG.Circle(e, "pointCircle", i[0], i[1], o);
    else if (i[0].elementClass == JXG.OBJECT_CLASS_LINE && JXG.isPoint(i[1]))
      r = new JXG.Circle(e, "pointLine", i[1], i[0], o);
    else if (i[1].elementClass == JXG.OBJECT_CLASS_LINE && JXG.isPoint(i[0]))
      r = new JXG.Circle(e, "pointLine", i[0], i[1], o);
    else {
      if (
        !(
          t.length == 3 &&
          JXG.isPoint(i[0]) &&
          JXG.isPoint(i[1]) &&
          JXG.isPoint(i[2])
        )
      )
        throw new Error(
          "JSXGraph: Can't create circle with parent types '" +
            typeof t[0] +
            "' and '" +
            typeof t[1] +
            "'." +
            "\nPossible parent types: [point,point], [point,number], [point,function], [point,circle], [point,point,point]"
        );
      r = JXG.createCircumcircle(e, i, n);
    }
    (r.isDraggable = u), (r.parents = []);
    for (s = 0; s < t.length; s++) t[s].id && r.parents.push(t[s].id);
    return (r.elType = "circle"), r;
  }),
  JXG.JSXGraph.registerElement("circle", JXG.createCircle),
  (JXG.createEllipse = function (e, t, n) {
    var r = [],
      i,
      s,
      o,
      u,
      a = JXG.copyAttributes(n, e.options, "conic", "foci"),
      f = JXG.copyAttributes(n, e.options, "conic");
    for (o = 0; o < 2; o++)
      if (t[o].length > 1) r[o] = e.create("point", t[o], a);
      else if (JXG.isPoint(t[o])) r[o] = JXG.getReference(e, t[o]);
      else if (
        typeof t[o] == "function" &&
        t[o]().elementClass === JXG.OBJECT_CLASS_POINT
      )
        r[o] = t[o]();
      else {
        if (!JXG.isString(t[o]))
          throw new Error(
            "JSXGraph: Can't create Ellipse with parent types '" +
              typeof t[0] +
              "' and '" +
              typeof t[1] +
              "'." +
              "\nPossible parent types: [point,point,point], [point,point,number|function]"
          );
        r[o] = JXG.getReference(e, t[o]);
      }
    if (JXG.isNumber(t[2])) s = JXG.createFunction(t[2], e);
    else if (typeof t[2] == "function" && JXG.isNumber(t[2]())) s = t[2];
    else {
      if (JXG.isPoint(t[2])) i = JXG.getReference(e, t[2]);
      else if (t[2].length > 1) i = e.create("point", t[2], a);
      else if (
        typeof t[2] == "function" &&
        t[2]().elementClass == JXG.OBJECT_CLASS_POINT
      )
        i = t[2]();
      else {
        if (!JXG.isString(t[2]))
          throw new Error(
            "JSXGraph: Can't create Ellipse with parent types '" +
              typeof t[0] +
              "' and '" +
              typeof t[1] +
              "' and '" +
              typeof t[2] +
              "'." +
              "\nPossible parent types: [point,point,point], [point,point,number|function]"
          );
        i = JXG.getReference(e, t[2]);
      }
      s = function () {
        return i.Dist(r[0]) + i.Dist(r[1]);
      };
    }
    typeof t[4] == "undefined" && (t[4] = 1.0001 * Math.PI),
      typeof t[3] == "undefined" && (t[3] = -1.0001 * Math.PI);
    var l = e.create(
        "point",
        [
          function () {
            return (r[0].X() + r[1].X()) * 0.5;
          },
          function () {
            return (r[0].Y() + r[1].Y()) * 0.5;
          },
        ],
        a
      ),
      c = function () {
        var e = r[0].X(),
          t = r[0].Y(),
          n = r[1].X(),
          i = r[1].Y(),
          s,
          o,
          u,
          a = n - e > 0 ? 1 : -1;
        Math.abs(n - e) > 1e-7
          ? (s = Math.atan2(i - t, n - e) + (a < 0 ? Math.PI : 0))
          : (s = (i - t > 0 ? 0.5 : -0.5) * Math.PI),
          (o = Math.cos(s)),
          (u = Math.sin(s));
        var f = [
          [1, 0, 0],
          [l.X(), o, -u],
          [l.Y(), u, o],
        ];
        return f;
      },
      h = e.create(
        "curve",
        [
          function (e) {
            return 0;
          },
          function (e) {
            return 0;
          },
          t[3],
          t[4],
        ],
        f
      ),
      p = function (e, t) {
        var n = s() * 0.5,
          i = n * n,
          o = r[1].Dist(r[0]) * 0.5,
          a = i - o * o,
          f = Math.sqrt(a),
          p = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
          ],
          d,
          v;
        return (
          t ||
            ((u = c()),
            (d = l.X()),
            (v = l.Y()),
            (p[0][0] = u[0][0]),
            (p[0][1] = 0),
            (p[0][2] = 0),
            (p[1][0] = d * (1 - u[1][1]) + v * u[1][2]),
            (p[1][1] = u[1][1]),
            (p[1][2] = u[2][1]),
            (p[2][0] = v * (1 - u[1][1]) - d * u[1][2]),
            (p[2][1] = u[1][2]),
            (p[2][2] = u[2][2]),
            (h.quadraticform = JXG.Math.matMatMult(
              JXG.Math.transpose(p),
              JXG.Math.matMatMult(
                [
                  [-1 + (d * d) / (n * n) + (v * v) / a, -d / i, -d / a],
                  [-d / i, 1 / i, 0],
                  [-v / a, 0, 1 / a],
                ],
                p
              )
            ))),
          JXG.Math.matVecMult(u, [1, n * Math.cos(e), f * Math.sin(e)])
        );
      };
    (h.X = function (e, t) {
      return p(e, t)[1];
    }),
      (h.Y = function (e, t) {
        return p(e, t)[2];
      }),
      (h.midpoint = l),
      (h.type = JXG.OBJECT_TYPE_CONIC),
      l.addChild(h);
    for (o = 0; o < 2; o++) JXG.isPoint(r[o]) && r[o].addChild(h);
    JXG.isPoint(i) && i.addChild(h), (h.parents = []);
    for (o = 0; o < t.length; o++) t[o].id && h.parents.push(t[o].id);
    return h;
  }),
  (JXG.createHyperbola = function (e, t, n) {
    var r = [],
      i,
      s,
      o,
      u,
      a = JXG.copyAttributes(n, e.options, "conic", "foci"),
      f = JXG.copyAttributes(n, e.options, "conic");
    for (o = 0; o < 2; o++)
      if (t[o].length > 1) r[o] = e.create("point", t[o], attr_focu);
      else if (JXG.isPoint(t[o])) r[o] = JXG.getReference(e, t[o]);
      else if (
        typeof t[o] == "function" &&
        t[o]().elementClass == JXG.OBJECT_CLASS_POINT
      )
        r[o] = t[o]();
      else {
        if (!JXG.isString(t[o]))
          throw new Error(
            "JSXGraph: Can't create Hyperbola with parent types '" +
              typeof t[0] +
              "' and '" +
              typeof t[1] +
              "'." +
              "\nPossible parent types: [point,point,point], [point,point,number|function]"
          );
        r[o] = JXG.getReference(e, t[o]);
      }
    if (JXG.isNumber(t[2])) s = JXG.createFunction(t[2], e);
    else if (typeof t[2] == "function" && JXG.isNumber(t[2]())) s = t[2];
    else {
      if (JXG.isPoint(t[2])) i = JXG.getReference(e, t[2]);
      else if (t[2].length > 1) i = e.create("point", t[2], a);
      else if (
        typeof t[2] == "function" &&
        t[2]().elementClass == JXG.OBJECT_CLASS_POINT
      )
        i = t[2]();
      else {
        if (!JXG.isString(t[2]))
          throw new Error(
            "JSXGraph: Can't create Hyperbola with parent types '" +
              typeof t[0] +
              "' and '" +
              typeof t[1] +
              "' and '" +
              typeof t[2] +
              "'." +
              "\nPossible parent types: [point,point,point], [point,point,number|function]"
          );
        i = JXG.getReference(e, t[2]);
      }
      s = function () {
        return i.Dist(r[0]) - i.Dist(r[1]);
      };
    }
    typeof t[4] == "undefined" && (t[4] = 1.0001 * Math.PI),
      typeof t[3] == "undefined" && (t[3] = -1.0001 * Math.PI);
    var l = e.create(
        "point",
        [
          function () {
            return (r[0].X() + r[1].X()) * 0.5;
          },
          function () {
            return (r[0].Y() + r[1].Y()) * 0.5;
          },
        ],
        a
      ),
      c = function () {
        var e = r[0].X(),
          t = r[0].Y(),
          n = r[1].X(),
          i = r[1].Y(),
          s,
          o = n - e > 0 ? 1 : -1;
        Math.abs(n - e) > 1e-7
          ? (s = Math.atan2(i - t, n - e) + (o < 0 ? Math.PI : 0))
          : (s = (i - t > 0 ? 0.5 : -0.5) * Math.PI);
        var u = [
          [1, 0, 0],
          [l.X(), Math.cos(s), -Math.sin(s)],
          [l.Y(), Math.sin(s), Math.cos(s)],
        ];
        return u;
      },
      h = e.create(
        "curve",
        [
          function (e) {
            return 0;
          },
          function (e) {
            return 0;
          },
          t[3],
          t[4],
        ],
        f
      ),
      p = function (e, t) {
        var n = s() * 0.5,
          i = n * n,
          o = r[1].Dist(r[0]) * 0.5,
          a = Math.sqrt(-n * n + o * o),
          f = a * a,
          p = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
          ],
          d,
          v;
        return (
          t ||
            ((u = c()),
            (d = l.X()),
            (v = l.Y()),
            (p[0][0] = u[0][0]),
            (p[0][1] = 0),
            (p[0][2] = 0),
            (p[1][0] = d * (1 - u[1][1]) + v * u[1][2]),
            (p[1][1] = u[1][1]),
            (p[1][2] = u[2][1]),
            (p[2][0] = v * (1 - u[1][1]) - d * u[1][2]),
            (p[2][1] = u[1][2]),
            (p[2][2] = u[2][2]),
            (h.quadraticform = JXG.Math.matMatMult(
              JXG.Math.transpose(p),
              JXG.Math.matMatMult(
                [
                  [-1 + (d * d) / i + (v * v) / f, -d / i, v / f],
                  [-d / i, 1 / i, 0],
                  [v / f, 0, -1 / f],
                ],
                p
              )
            ))),
          JXG.Math.matVecMult(u, [1, n / Math.cos(e), a * Math.tan(e)])
        );
      };
    (h.X = function (e, t) {
      return p(e, t)[1];
    }),
      (h.Y = function (e, t) {
        return p(e, t)[2];
      }),
      (h.midpoint = l),
      (h.type = JXG.OBJECT_TYPE_CONIC),
      l.addChild(h);
    for (o = 0; o < 2; o++) JXG.isPoint(r[o]) && r[o].addChild(h);
    JXG.isPoint(i) && i.addChild(h), (h.parents = []);
    for (o = 0; o < t.length; o++) t[o].id && h.parents.push(t[o].id);
    return h;
  }),
  (JXG.createParabola = function (e, t, n) {
    var r = t[0],
      s = t[1],
      o,
      u = JXG.copyAttributes(n, e.options, "conic", "foci"),
      a = JXG.copyAttributes(n, e.options, "conic");
    if (t[0].length > 1) r = e.create("point", t[0], u);
    else if (JXG.isPoint(t[0])) r = JXG.getReference(e, t[0]);
    else if (
      typeof t[0] == "function" &&
      t[0]().elementClass == JXG.OBJECT_CLASS_POINT
    )
      r = t[0]();
    else {
      if (!JXG.isString(t[0]))
        throw new Error(
          "JSXGraph: Can't create Parabola with parent types '" +
            typeof t[0] +
            "' and '" +
            typeof t[1] +
            "'." +
            "\nPossible parent types: [point,line]"
        );
      r = JXG.getReference(e, t[0]);
    }
    typeof t[3] == "undefined" && (t[3] = 10),
      typeof t[2] == "undefined" && (t[2] = -10);
    var f = e.create(
        "point",
        [
          function () {
            var t = [0, s.stdform[1], s.stdform[2]];
            return (
              (t = JXG.Math.crossProduct(t, r.coords.usrCoords)),
              JXG.Math.Geometry.meetLineLine(t, s.stdform, 0, e).usrCoords
            );
          },
        ],
        u
      ),
      l = function () {
        var e = Math.atan(s.getSlope()),
          t = (f.X() + r.X()) * 0.5,
          n = (f.Y() + r.Y()) * 0.5;
        e +=
          r.Y() - f.Y() < 0 || (r.Y() == f.Y() && r.X() > f.X()) ? Math.PI : 0;
        var i = [
          [1, 0, 0],
          [t * (1 - Math.cos(e)) + n * Math.sin(e), Math.cos(e), -Math.sin(e)],
          [n * (1 - Math.cos(e)) - t * Math.sin(e), Math.sin(e), Math.cos(e)],
        ];
        return i;
      },
      c = e.create(
        "curve",
        [
          function (e) {
            return 0;
          },
          function (e) {
            return 0;
          },
          t[2],
          t[3],
        ],
        a
      ),
      h = function (e, t) {
        var n = f.Dist(r) * 0.5,
          i = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
          ],
          s = (f.X() + r.X()) * 0.5,
          u = (f.Y() + r.Y()) * 0.5;
        return (
          t ||
            ((o = l()),
            (i[0][0] = o[0][0]),
            (i[0][1] = 0),
            (i[0][2] = 0),
            (i[1][0] = s * (1 - o[1][1]) + u * o[1][2]),
            (i[1][1] = o[1][1]),
            (i[1][2] = o[2][1]),
            (i[2][0] = u * (1 - o[1][1]) - s * o[1][2]),
            (i[2][1] = o[1][2]),
            (i[2][2] = o[2][2]),
            (c.quadraticform = JXG.Math.matMatMult(
              JXG.Math.transpose(i),
              JXG.Math.matMatMult(
                [
                  [-u * 4 * n - s * s, s, 2 * n],
                  [s, -1, 0],
                  [2 * n, 0, 0],
                ],
                i
              )
            ))),
          JXG.Math.matVecMult(o, [1, e + s, (e * e) / (n * 4) + u])
        );
      };
    (c.X = function (e, t) {
      return h(e, t)[1];
    }),
      (c.Y = function (e, t) {
        return h(e, t)[2];
      }),
      (c.type = JXG.OBJECT_TYPE_CONIC),
      f.addChild(c),
      JXG.isPoint(F[1]) && F[1].addChild(c),
      s.addChild(c),
      (c.parents = []);
    for (i = 0; i < t.length; i++) t[i].id && c.parents.push(t[i].id);
    return c;
  }),
  (JXG.createConic = function (e, t, n) {
    var r = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
      i,
      s,
      o,
      u,
      a = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
      f,
      l,
      c = [],
      h,
      p,
      d,
      v = [],
      m = JXG.copyAttributes(n, e.options, "conic", "foci"),
      g = JXG.copyAttributes(n, e.options, "conic");
    if (t.length == 5) d = !0;
    else {
      if (t.length != 6)
        throw new Error(
          "JSXGraph: Can't create generic Conic with " +
            parent.length +
            " parameters."
        );
      d = !1;
    }
    if (d)
      for (h = 0; h < 5; h++)
        if (t[h].length > 1) c[h] = e.create("point", t[h], m);
        else if (JXG.isPoint(t[h])) c[h] = JXG.getReference(e, t[h]);
        else if (
          typeof t[h] == "function" &&
          t[h]().elementClass == JXG.OBJECT_CLASS_POINT
        )
          c[h] = t[h]();
        else {
          if (!JXG.isString(t[h]))
            throw new Error(
              "JSXGraph: Can't create Conic section with parent types '" +
                typeof t[h] +
                "'." +
                "\nPossible parent types: [point,point,point,point,point], [a00,a11,a22,a01,a02,a12]"
            );
          c[h] = JXG.getReference(e, t[h]);
        }
    else
      (p = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]),
        (p[0][0] = JXG.isFunction(t[2])
          ? function () {
              return t[2]();
            }
          : function () {
              return t[2];
            }),
        (p[0][1] = JXG.isFunction(t[4])
          ? function () {
              return t[4]();
            }
          : function () {
              return t[4];
            }),
        (p[0][2] = JXG.isFunction(t[5])
          ? function () {
              return t[5]();
            }
          : function () {
              return t[5];
            }),
        (p[1][1] = JXG.isFunction(t[0])
          ? function () {
              return t[0]();
            }
          : function () {
              return t[0];
            }),
        (p[1][2] = JXG.isFunction(t[3])
          ? function () {
              return t[3]();
            }
          : function () {
              return t[3];
            }),
        (p[2][2] = JXG.isFunction(t[1])
          ? function () {
              return t[1]();
            }
          : function () {
              return t[1];
            });
    var y = function (e) {
        var t, n;
        for (t = 0; t < 3; t++) for (n = t; n < 3; n++) e[t][n] += e[n][t];
        for (t = 0; t < 3; t++) for (n = 0; n < t; n++) e[t][n] = e[n][t];
        return e;
      },
      b = function (e, t) {
        var n,
          r,
          i = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ];
        for (n = 0; n < 3; n++) for (r = 0; r < 3; r++) i[n][r] = e[n] * t[r];
        return y(i);
      },
      w = function (e, t, n) {
        var r,
          i,
          s,
          o = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          u,
          a;
        (s = JXG.Math.matVecMult(t, n)),
          (r = JXG.Math.innerProduct(n, s)),
          (s = JXG.Math.matVecMult(e, n)),
          (i = JXG.Math.innerProduct(n, s));
        for (u = 0; u < 3; u++)
          for (a = 0; a < 3; a++) o[u][a] = r * e[u][a] - i * t[u][a];
        return o;
      },
      E = e.create(
        "curve",
        [
          function (e) {
            return 0;
          },
          function (e) {
            return 0;
          },
          0,
          2 * Math.PI,
        ],
        g
      ),
      S = function (e, t) {
        var n, h, m, g;
        if (!t) {
          if (d) {
            for (n = 0; n < 5; n++) v[n] = c[n].coords.usrCoords;
            (f = b(
              JXG.Math.crossProduct(v[0], v[1]),
              JXG.Math.crossProduct(v[2], v[3])
            )),
              (l = b(
                JXG.Math.crossProduct(v[0], v[2]),
                JXG.Math.crossProduct(v[1], v[3])
              )),
              (a = w(f, l, v[4]));
          } else
            for (n = 0; n < 3; n++)
              for (h = n; h < 3; h++)
                (a[n][h] = p[n][h]()), h > n && (a[h][n] = a[n][h]);
          (E.quadraticform = a),
            (i = JXG.Math.Numerics.Jacobi(a)),
            i[0][0][0] < 0 &&
              ((i[0][0][0] *= -1), (i[0][1][1] *= -1), (i[0][2][2] *= -1));
          for (n = 0; n < 3; n++) {
            m = 0;
            for (h = 0; h < 3; h++) m += i[1][h][n] * i[1][h][n];
            m = Math.sqrt(m);
            for (h = 0; h < 3; h++);
          }
          (r = i[1]),
            (u = Math.sqrt(Math.abs(i[0][0][0]))),
            (s = Math.sqrt(Math.abs(i[0][1][1]))),
            (o = Math.sqrt(Math.abs(i[0][2][2])));
        }
        return (
          i[0][1][1] <= 0 && i[0][2][2] <= 0
            ? (g = JXG.Math.matVecMult(r, [
                1 / u,
                Math.cos(e) / s,
                Math.sin(e) / o,
              ]))
            : i[0][1][1] <= 0 && i[0][2][2] > 0
            ? (g = JXG.Math.matVecMult(r, [
                Math.cos(e) / u,
                1 / s,
                Math.sin(e) / o,
              ]))
            : i[0][2][2] < 0 &&
              (g = JXG.Math.matVecMult(r, [
                Math.sin(e) / u,
                Math.cos(e) / s,
                1 / o,
              ])),
          (g[1] /= g[0]),
          (g[2] /= g[0]),
          (g[0] = 1),
          g
        );
      };
    (E.X = function (e, t) {
      return S(e, t)[1];
    }),
      (E.Y = function (e, t) {
        return S(e, t)[2];
      }),
      (E.midpoint = e.create(
        "point",
        [
          function () {
            var e = E.quadraticform;
            return [
              e[1][1] * e[2][2] - e[1][2] * e[1][2],
              e[1][2] * e[0][2] - e[2][2] * e[0][1],
              e[0][1] * e[1][2] - e[1][1] * e[0][2],
            ];
          },
        ],
        m
      )),
      (E.type = JXG.OBJECT_TYPE_CONIC);
    if (d) {
      for (h = 0; h < 5; h++) JXG.isPoint(c[h]) && c[h].addChild(E);
      E.parents = [];
      for (h = 0; h < t.length; h++) t[h].id && E.parents.push(t[h].id);
    }
    return E.addChild(E.midpoint), E;
  }),
  JXG.JSXGraph.registerElement("ellipse", JXG.createEllipse),
  JXG.JSXGraph.registerElement("hyperbola", JXG.createHyperbola),
  JXG.JSXGraph.registerElement("parabola", JXG.createParabola),
  JXG.JSXGraph.registerElement("conic", JXG.createConic),
  (JXG.Polygon = function (e, t, n) {
    this.constructor(e, n, JXG.OBJECT_TYPE_POLYGON, JXG.OBJECT_CLASS_AREA);
    var r,
      i,
      s,
      o = JXG.copyAttributes(n, e.options, "polygon", "borders");
    (this.withLines = n.withlines), (this.attr_line = o), (this.vertices = []);
    for (r = 0; r < t.length; r++)
      (i = JXG.getRef(this.board, t[r])), (this.vertices[r] = i);
    this.vertices[this.vertices.length - 1] != this.vertices[0] &&
      this.vertices.push(this.vertices[0]),
      (this.borders = []);
    if (this.withLines)
      for (r = 0; r < this.vertices.length - 1; r++)
        (o.id = o.ids && o.ids[r]),
          (o.strokecolor =
            (JXG.isArray(o.colors) && o.colors[r % o.colors.length]) ||
            o.strokecolor),
          o.strokecolor === !1 && (o.strokecolor = "none"),
          (s = JXG.createSegment(
            e,
            [this.vertices[r], this.vertices[r + 1]],
            o
          )),
          (s.dump = !1),
          (this.borders[r] = s),
          (s.parentPolygon = this);
    for (r = 0; r < this.vertices.length - 1; r++)
      (i = JXG.getReference(this.board, this.vertices[r])), i.addChild(this);
    (this.id = this.board.setId(this, "Py")),
      this.board.renderer.drawPolygon(this),
      this.board.finalizeAdding(this),
      (this.elType = "polygon"),
      this.createLabel(),
      (this.methodMap.borders = "borders"),
      (this.methodMap.vertices = "vertices");
  }),
  (JXG.Polygon.prototype = new JXG.GeometryElement()),
  JXG.extend(JXG.Polygon.prototype, {
    hasPoint: function (e, t) {
      var n,
        r,
        i,
        s = !1;
      if (this.visProp.hasinnerpoints) {
        i = this.vertices.length;
        for (n = 0, r = i - 2; n < i - 1; r = n++)
          this.vertices[n].coords.scrCoords[2] > t !=
            this.vertices[r].coords.scrCoords[2] > t &&
            e <
              ((this.vertices[r].coords.scrCoords[1] -
                this.vertices[n].coords.scrCoords[1]) *
                (t - this.vertices[n].coords.scrCoords[2])) /
                (this.vertices[r].coords.scrCoords[2] -
                  this.vertices[n].coords.scrCoords[2]) +
                this.vertices[n].coords.scrCoords[1] &&
            (s = !s);
      } else {
        i = this.borders.length;
        for (n = 0; n < i; n++)
          if (this.borders[n].hasPoint(e, t)) {
            s = !0;
            break;
          }
      }
      return s;
    },
    updateRenderer: function () {
      this.needsUpdate &&
        (this.board.renderer.updatePolygon(this), (this.needsUpdate = !1)),
        this.hasLabel &&
          this.label.content.visProp.visible &&
          (this.label.content.update(),
          this.board.renderer.updateText(this.label.content));
    },
    getTextAnchor: function () {
      var e = this.vertices[0].X(),
        t = this.vertices[0].Y(),
        n = e,
        r = t,
        i;
      for (i = 0; i < this.vertices.length; i++)
        this.vertices[i].X() < e && (e = this.vertices[i].X()),
          this.vertices[i].X() > n && (n = this.vertices[i].X()),
          this.vertices[i].Y() > t && (t = this.vertices[i].Y()),
          this.vertices[i].Y() < r && (r = this.vertices[i].Y());
      return new JXG.Coords(
        JXG.COORDS_BY_USER,
        [(e + n) * 0.5, (t + r) * 0.5],
        this.board
      );
    },
    getLabelAnchor: JXG.shortcut(JXG.Polygon.prototype, "getTextAnchor"),
    cloneToBackground: function () {
      var e = {},
        t;
      return (
        (e.id = this.id + "T" + this.numTraces),
        this.numTraces++,
        (e.vertices = this.vertices),
        (e.visProp = JXG.deepCopy(
          this.visProp,
          this.visProp.traceattributes,
          !0
        )),
        (e.visProp.layer = this.board.options.layer.trace),
        (e.board = this.board),
        JXG.clearVisPropOld(e),
        (t = this.board.renderer.enhancedRendering),
        (this.board.renderer.enhancedRendering = !0),
        this.board.renderer.drawPolygon(e),
        (this.board.renderer.enhancedRendering = t),
        (this.traces[e.id] = e.rendNode),
        this
      );
    },
    hideElement: function () {
      var e;
      (this.visProp.visible = !1), this.board.renderer.hide(this);
      for (e = 0; e < this.borders.length; e++) this.borders[e].hideElement();
      this.hasLabel &&
        JXG.exists(this.label) &&
        ((this.label.hiddenByParent = !0),
        this.label.content.visProp.visible &&
          this.board.renderer.hide(this.label.content));
    },
    showElement: function () {
      var e;
      (this.visProp.visible = !0), this.board.renderer.show(this);
      for (e = 0; e < this.borders.length; e++) this.borders[e].showElement();
      this.hasLabel &&
        JXG.exists(this.label) &&
        this.label.content.visProp.visible &&
        this.board.renderer.show(this.label.content);
    },
    Area: function () {
      var e = 0,
        t;
      for (t = 0; t < this.vertices.length - 1; t++)
        e +=
          this.vertices[t].X() * this.vertices[t + 1].Y() -
          this.vertices[t + 1].X() * this.vertices[t].Y();
      return (e /= 2), Math.abs(e);
    },
    remove: function () {
      var e;
      for (e = 0; e < this.borders.length; e++)
        this.board.removeObject(this.borders[e]);
      JXG.GeometryElement.prototype.remove.call(this);
    },
    findPoint: function (e) {
      var t;
      if (!JXG.isPoint(e)) return -1;
      for (t = 0; t < this.vertices.length; t++)
        if (this.vertices[t].id === e.id) return t;
      return -1;
    },
    addPoints: function () {
      var e = Array.prototype.slice.call(arguments);
      return this.insertPoints.apply(
        this,
        [this.vertices.length - 2].concat(e)
      );
    },
    insertPoints: function () {
      var e,
        t,
        n = [],
        r;
      if (arguments.length === 0) return this;
      e = arguments[0];
      if (e < 0 || e > this.vertices.length - 2) return this;
      for (t = 1; t < arguments.length; t++)
        JXG.isPoint(arguments[t]) && n.push(arguments[t]);
      (r = this.vertices.slice(0, e + 1).concat(n)),
        (this.vertices = r.concat(this.vertices.slice(e + 1)));
      if (this.withLines) {
        (r = this.borders.slice(0, e)),
          this.board.removeObject(this.borders[e]);
        for (t = 0; t < n.length; t++)
          r.push(
            JXG.createSegment(
              this.board,
              [this.vertices[e + t], this.vertices[e + t + 1]],
              this.attr_line
            )
          );
        r.push(
          JXG.createSegment(
            this.board,
            [this.vertices[e + n.length], this.vertices[e + n.length + 1]],
            this.attr_line
          )
        ),
          (this.borders = r.concat(this.borders.slice(e)));
      }
      return this.board.update(), this;
    },
    removePoints: function () {
      var e,
        t,
        n,
        r = [],
        i = [],
        s = [],
        o = [];
      this.vertices = this.vertices.slice(0, this.vertices.length - 1);
      for (e = 0; e < arguments.length; e++)
        JXG.isPoint(arguments[e]) && (n = this.findPoint(arguments[e])),
          JXG.isNumber(n) &&
            n > -1 &&
            n < this.vertices.length &&
            JXG.indexOf(s, n) === -1 &&
            s.push(n);
      (s = s.sort()),
        (r = this.vertices.slice()),
        (i = this.borders.slice()),
        this.withLines && o.push([s[s.length - 1]]);
      for (e = s.length - 1; e > -1; e--)
        (r[s[e]] = -1),
          this.withLines &&
            s[e] - 1 > s[e - 1] &&
            ((o[o.length - 1][1] = s[e]), o.push([s[e - 1]]));
      this.withLines && (o[o.length - 1][1] = s[0]), (this.vertices = []);
      for (e = 0; e < r.length; e++)
        JXG.isPoint(r[e]) && this.vertices.push(r[e]);
      this.vertices[this.vertices.length - 1].id !== this.vertices[0].id &&
        this.vertices.push(this.vertices[0]);
      if (this.withLines) {
        for (e = 0; e < o.length; e++) {
          for (t = o[e][1] - 1; t < o[e][0] + 1; t++)
            t < 0
              ? ((t = 0),
                this.board.removeObject(this.borders[i.length - 1]),
                (i[i.length - 1] = -1))
              : t > i.length - 1 && (t = i.length - 1),
              this.board.removeObject(this.borders[t]),
              (i[t] = -1);
          o[e][1] !== 0 &&
            o[e][0] !== r.length - 1 &&
            (i[o[e][0] - 1] = JXG.createSegment(
              this.board,
              [
                r[Math.max(o[e][1] - 1, 0)],
                r[Math.min(o[e][0] + 1, this.vertices.length - 1)],
              ],
              this.attr_line
            ));
        }
        this.borders = [];
        for (e = 0; e < i.length; e++) i[e] !== -1 && this.borders.push(i[e]);
        (o[0][1] === 5 || o[o.length - 1][1] === 0) &&
          this.borders.push(
            JXG.createSegment(
              this.board,
              [this.vertices[0], this.vertices[this.vertices.length - 2]],
              this.attr_line
            )
          );
      }
      return this.board.update(), this;
    },
    getParents: function () {
      var e = [],
        t;
      for (t = 0; t < this.vertices.length; t++) e.push(this.vertices[t].id);
      return e;
    },
    getAttributes: function () {
      var e = JXG.GeometryElement.prototype.getAttributes.call(this),
        t;
      if (this.withLines) {
        (e.lines = e.lines || {}), (e.lines.ids = []), (e.lines.colors = []);
        for (t = 0; t < this.borders.length; t++)
          e.lines.ids.push(this.borders[t].id),
            e.lines.colors.push(this.borders[t].visProp.strokecolor);
      }
      return e;
    },
    setPositionDirectly: function (e, t, n) {
      var r,
        i,
        s,
        o,
        u = new JXG.Coords(e, t, this.board),
        a = new JXG.Coords(e, n, this.board);
      o = this.vertices.length - 1;
      for (s = 0; s < o; s++) if (!this.vertices[s].draggable()) return this;
      return (
        (r = JXG.Math.Statistics.subtract(u.usrCoords, a.usrCoords)),
        (i = this.board.create("transform", r.slice(1), { type: "translate" })),
        i.applyOnce(this.vertices.slice(0, -1)),
        this
      );
    },
  }),
  (JXG.createPolygon = function (e, t, n) {
    var r,
      i,
      s = JXG.copyAttributes(n, e.options, "polygon");
    for (i = 0; i < t.length; i++) {
      t[i] = JXG.getReference(e, t[i]);
      if (!JXG.isPoint(t[i]))
        throw new Error(
          "JSXGraph: Can't create polygon with parent types other than 'point'."
        );
    }
    return (r = new JXG.Polygon(e, t, s)), (r.isDraggable = !0), r;
  }),
  (JXG.createRegularPolygon = function (e, t, n) {
    var r,
      i,
      s,
      o = [],
      u,
      a,
      f,
      l,
      c;
    if (JXG.isNumber(t[t.length - 1]) && t.length != 3)
      throw new Error(
        "JSXGraph: A regular polygon needs two points and a number as input."
      );
    (f = t.length), (s = t[f - 1]);
    if ((!JXG.isNumber(s) && !JXG.isPoint(JXG.getReference(e, s))) || s < 3)
      throw new Error(
        "JSXGraph: The third parameter has to be number greater than 2 or a point."
      );
    JXG.isPoint(JXG.getReference(e, s)) ? ((s = f), (l = !0)) : (f--, (l = !1));
    for (i = 0; i < f; i++) {
      t[i] = JXG.getReference(e, t[i]);
      if (!JXG.isPoint(t[i]))
        throw new Error(
          "JSXGraph: Can't create regular polygon if the first two parameters aren't points."
        );
    }
    (o[0] = t[0]),
      (o[1] = t[1]),
      (c = JXG.copyAttributes(n, e.options, "polygon", "vertices"));
    for (i = 2; i < s; i++)
      (u = e.create("transform", [Math.PI * (2 - (s - 2) / s), o[i - 1]], {
        type: "rotate",
      })),
        l
          ? ((o[i] = t[i]), o[i].addTransform(t[i - 2], u))
          : (JXG.isArray(c.ids) &&
              c.ids.length >= s - 2 &&
              (c.id = c.ids[i - 2]),
            (o[i] = e.create("point", [o[i - 2], u], c)),
            (o[i].type = JXG.OBJECT_TYPE_CAS),
            (o[i].isDraggable = !0),
            (o[i].visProp.fixed = !1));
    return (
      (c = JXG.copyAttributes(n, e.options, "polygon")),
      (r = e.create("polygon", o, c)),
      (r.elType = "regularpolygon"),
      r
    );
  }),
  JXG.JSXGraph.registerElement("polygon", JXG.createPolygon),
  JXG.JSXGraph.registerElement("regularpolygon", JXG.createRegularPolygon),
  (JXG.Curve = function (e, t, n) {
    this.constructor(e, n, JXG.OBJECT_TYPE_CURVE, JXG.OBJECT_CLASS_CURVE),
      (this.points = []),
      (this.numberPoints = this.visProp.numberpointshigh),
      (this.bezierDegree = 1),
      (this.dataX = null),
      (this.dataY = null),
      t[0] != null ? (this.varname = t[0]) : (this.varname = "x"),
      (this.xterm = t[1]),
      (this.yterm = t[2]),
      this.generateTerm(this.varname, this.xterm, this.yterm, t[3], t[4]),
      this.updateCurve(),
      (this.id = this.board.setId(this, "G")),
      this.board.renderer.drawCurve(this),
      this.board.finalizeAdding(this),
      this.createGradient(),
      (this.elType = "curve"),
      this.createLabel(),
      typeof this.xterm == "string" && this.notifyParents(this.xterm),
      typeof this.yterm == "string" && this.notifyParents(this.yterm);
  }),
  (JXG.Curve.prototype = new JXG.GeometryElement()),
  JXG.extend(JXG.Curve.prototype, {
    minX: function () {
      if (this.visProp.curvetype == "polar") return 0;
      var e = new JXG.Coords(JXG.COORDS_BY_SCREEN, [0, 0], this.board);
      return e.usrCoords[1];
    },
    maxX: function () {
      var e;
      return this.visProp.curvetype == "polar"
        ? 2 * Math.PI
        : ((e = new JXG.Coords(
            JXG.COORDS_BY_SCREEN,
            [this.board.canvasWidth, 0],
            this.board
          )),
          e.usrCoords[1]);
    },
    Z: function (e) {
      return 1;
    },
    hasPoint: function (e, t, n) {
      var r,
        i = Infinity,
        s,
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g = this.visProp.numberpointslow,
        y = (this.maxX() - this.minX()) / g,
        b = this.board.options.precision.hasPoint / this.board.unitX,
        w,
        E,
        S = !0,
        x,
        T;
      (b *= b),
        (w = new JXG.Coords(JXG.COORDS_BY_SCREEN, [e, t], this.board)),
        (e = w.usrCoords[1]),
        (t = w.usrCoords[2]),
        this.transformations.length > 0 &&
          (this.updateTransformMatrix(),
          (x = JXG.Math.inverse(this.transformMat)),
          (T = JXG.Math.matVecMult(x, [1, e, t])),
          (e = T[1]),
          (t = T[2]));
      if (
        this.visProp.curvetype == "parameter" ||
        this.visProp.curvetype == "polar" ||
        this.visProp.curvetype == "functiongraph"
      )
        for (s = 0, r = this.minX(); s < g; s++) {
          (o = this.X(r, S)),
            (u = this.Y(r, S)),
            (i = (e - o) * (e - o) + (t - u) * (t - u));
          if (i < b) return !0;
          r += y;
        }
      else if (this.visProp.curvetype == "plot") {
        if (!JXG.exists(n) || n < 0) n = 0;
        E = this.numberPoints;
        for (s = n; s < E - 1; s++) {
          (a = this.X(s)),
            (f = this.Y(s)),
            (l = e - a),
            (c = t - f),
            (h = this.X(s + 1) - a),
            (p = this.Y(s + 1) - f),
            (v = h * h + p * p),
            (i = l * l + c * c),
            v >= JXG.Math.eps
              ? ((d = l * h + c * p), (m = d / v), (i -= m * d))
              : (m = 0);
          if (m >= 0 && m <= 1 && i < b) return !0;
        }
        return !1;
      }
      return i < b;
    },
    allocatePoints: function () {
      var e, t;
      t = this.numberPoints;
      if (this.points.length < this.numberPoints)
        for (e = this.points.length; e < t; e++)
          this.points[e] = new JXG.Coords(
            JXG.COORDS_BY_USER,
            [0, 0],
            this.board
          );
    },
    update: function () {
      return (
        this.needsUpdate &&
          (this.visProp.trace && this.cloneToBackground(!0),
          this.updateCurve()),
        this
      );
    },
    updateRenderer: function () {
      return (
        this.needsUpdate &&
          this.visProp.visible &&
          (this.board.renderer.updateCurve(this),
          (this.needsUpdate = !1),
          this.hasLabel &&
            this.label.content.visProp.visible &&
            (this.label.content.update(),
            this.board.renderer.updateText(this.label.content))),
        this
      );
    },
    updateDataArray: function () {},
    updateCurve: function () {
      var e,
        t,
        n,
        r,
        i,
        s,
        o = !1;
      this.updateTransformMatrix(),
        this.updateDataArray(),
        (t = this.minX()),
        (n = this.maxX());
      if (this.dataX != null) {
        (this.numberPoints = this.dataX.length),
          (e = this.numberPoints),
          this.allocatePoints();
        for (s = 0; s < e; s++)
          (r = s),
            this.dataY != null
              ? ((i = s),
                this.points[s].setCoordinates(
                  JXG.COORDS_BY_USER,
                  [this.dataX[s], this.dataY[s]],
                  !1
                ))
              : ((i = this.X(r)),
                this.points[s].setCoordinates(
                  JXG.COORDS_BY_USER,
                  [this.dataX[s], this.Y(i, o)],
                  !1
                )),
            this.updateTransform(this.points[s]),
            (o = !0);
      } else {
        this.visProp.doadvancedplot
          ? this.updateParametricCurve(t, n, e)
          : (this.board.updateQuality == this.board.BOARD_QUALITY_HIGH
              ? (this.numberPoints = this.visProp.numberpointshigh)
              : (this.numberPoints = this.visProp.numberpointslow),
            this.allocatePoints(),
            this.updateParametricCurveNaive(t, n, this.numberPoints)),
          (e = this.numberPoints);
        for (s = 0; s < e; s++) this.updateTransform(this.points[s]);
      }
      return this;
    },
    updateTransformMatrix: function () {
      var e,
        t,
        n,
        r = this.transformations.length;
      this.transformMat = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ];
      for (n = 0; n < r; n++)
        (e = this.transformations[n]),
          e.update(),
          (this.transformMat = JXG.Math.matMatMult(
            e.matrix,
            this.transformMat
          ));
      return this;
    },
    updateParametricCurveNaive: function (e, t, n) {
      var r,
        i,
        s = !1,
        o = (t - e) / n;
      for (r = 0; r < n; r++)
        (i = e + r * o),
          this.points[r].setCoordinates(
            JXG.COORDS_BY_USER,
            [this.X(i, s), this.Y(i, s)],
            !1
          ),
          (s = !0);
      return this;
    },
    updateParametricCurve: function (e, t) {
      var n,
        r,
        i,
        s = !1,
        o = new JXG.Coords(JXG.COORDS_BY_USER, [0, 0], this.board),
        u,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m = [],
        g = [],
        y = [],
        b = [],
        w = !1,
        E = 0,
        S,
        x = function (e, t, n) {
          var r = n[1] - e[1],
            i = n[2] - e[2],
            s = t[0] - e[1],
            o = t[1] - e[2],
            u = s * s + o * o,
            a,
            f;
          return (
            u >= JXG.Math.eps &&
              ((a = (r * s + i * o) / u),
              a > 0 &&
                (a <= 1 ? ((r -= a * s), (i -= a * o)) : ((r -= s), (i -= o)))),
            (f = r * r + i * i),
            Math.sqrt(f)
          );
        };
      this.board.updateQuality == this.board.BOARD_QUALITY_LOW
        ? ((p = 15), (d = 10), (v = 10))
        : ((p = 21), (d = 0.7), (v = 0.7)),
        (b[0] = t - e);
      for (n = 1; n < p; n++) b[n] = b[n - 1] * 0.5;
      (n = 1),
        (m[0] = 1),
        (g[0] = 0),
        (r = e),
        o.setCoordinates(JXG.COORDS_BY_USER, [this.X(r, s), this.Y(r, s)], !1),
        (s = !0),
        (f = o.scrCoords[1]),
        (l = o.scrCoords[2]),
        (i = r),
        (r = t),
        o.setCoordinates(JXG.COORDS_BY_USER, [this.X(r, s), this.Y(r, s)], !1),
        (u = o.scrCoords[1]),
        (a = o.scrCoords[2]),
        (y[0] = [u, a]),
        (c = 1),
        (h = 0),
        (this.points = []),
        (this.points[E++] = new JXG.Coords(
          JXG.COORDS_BY_SCREEN,
          [f, l],
          this.board
        ));
      do {
        w =
          this.isDistOK(u - f, a - l, d, v) ||
          this.isSegmentOutside(f, l, u, a);
        while (
          h < p &&
          (!w || h < 6) &&
          (h <= 7 || this.isSegmentDefined(f, l, u, a))
        )
          (m[c] = n),
            (g[c] = h),
            (y[c] = [u, a]),
            c++,
            (n = 2 * n - 1),
            h++,
            (r = e + n * b[h]),
            o.setCoordinates(
              JXG.COORDS_BY_USER,
              [this.X(r, s), this.Y(r, s)],
              !1
            ),
            (u = o.scrCoords[1]),
            (a = o.scrCoords[2]),
            (w =
              this.isDistOK(u - f, a - l, d, v) ||
              this.isSegmentOutside(f, l, u, a));
        E > 1 &&
          ((S = x(
            this.points[E - 2].scrCoords,
            [u, a],
            this.points[E - 1].scrCoords
          )),
          S < 0.015 && E--),
          (this.points[E] = new JXG.Coords(
            JXG.COORDS_BY_SCREEN,
            [u, a],
            this.board
          )),
          E++,
          (f = u),
          (l = a),
          (i = r),
          c--,
          (u = y[c][0]),
          (a = y[c][1]),
          (h = g[c] + 1),
          (n = m[c] * 2);
      } while (c > 0 && E < 5e5);
      return (this.numberPoints = this.points.length), this;
    },
    isSegmentOutside: function (e, t, n, r) {
      return (
        (t < 0 && r < 0) ||
        (t > this.board.canvasHeight && r > this.board.canvasHeight) ||
        (e < 0 && n < 0) ||
        (e > this.board.canvasWidth && n > this.board.canvasWidth)
      );
    },
    isDistOK: function (e, t, n, r) {
      return Math.abs(e) < n && Math.abs(t) < r && !isNaN(e + t);
    },
    isSegmentDefined: function (e, t, n, r) {
      return !isNaN(e + t) || !isNaN(n + r);
    },
    updateTransform: function (e) {
      var t,
        n = this.transformations.length;
      return (
        n > 0 &&
          ((t = JXG.Math.matVecMult(this.transformMat, e.usrCoords)),
          e.setCoordinates(JXG.COORDS_BY_USER, [t[1], t[2]])),
        e
      );
    },
    addTransform: function (e) {
      var t,
        n = JXG.isArray(e) ? e : [e],
        r = n.length;
      for (t = 0; t < r; t++) this.transformations.push(n[t]);
      return this;
    },
    setPosition: function (e, t) {
      var n,
        r,
        i = 0,
        s;
      JXG.exists(this.parents) && (i = this.parents.length);
      for (s = 0; s < i; s++) {
        r = JXG.getRef(this.board, this.parents[s]);
        if (!r.draggable()) return this;
      }
      (t = new JXG.Coords(e, t, this.board)),
        (n = this.board.create("transform", t.usrCoords.slice(1), {
          type: "translate",
        }));
      if (i > 0)
        for (s = 0; s < i; s++)
          (r = JXG.getRef(this.board, this.parents[s])), n.applyOnce(r);
      else
        this.transformations.length > 0 &&
        this.transformations[this.transformations.length - 1].isNumericMatrix
          ? this.transformations[this.transformations.length - 1].melt(n)
          : this.addTransform(n);
      return this;
    },
    setPositionDirectly: function (e, t, n) {
      var r = new JXG.Coords(e, t, this.board),
        i = new JXG.Coords(e, n, this.board),
        s = JXG.Math.Statistics.subtract(r.usrCoords, i.usrCoords);
      return this.setPosition(JXG.COORDS_BY_USER, s), this;
    },
    interpolationFunctionFromArray: function (e) {
      var t = "data" + e;
      return function (e, n) {
        var r,
          i,
          s,
          o = this[t],
          u = o.length,
          a,
          f,
          l,
          c = [],
          h;
        if (isNaN(e)) return NaN;
        if (e < 0) return JXG.isFunction(o[0]) ? o[0]() : o[0];
        if (this.bezierDegree == 3) {
          u /= 3;
          if (e >= u)
            return JXG.isFunction(o[o.length - 1])
              ? o[o.length - 1]()
              : o[o.length - 1];
          (r = Math.floor(e) * 3), (f = e % 1), (l = 1 - f);
          for (h = 0; h < 4; h++)
            JXG.isFunction(o[r + h]) ? (c[h] = o[r + h]()) : (c[h] = o[r + h]);
          return (
            l * l * (l * c[0] + 3 * f * c[1]) +
            (3 * l * c[2] + f * c[3]) * f * f
          );
        }
        e > u - 2 ? (r = u - 2) : (r = parseInt(Math.floor(e)));
        if (r == e) return JXG.isFunction(o[r]) ? o[r]() : o[r];
        for (h = 0; h < 2; h++)
          JXG.isFunction(o[r + h]) ? (c[h] = o[r + h]()) : (c[h] = o[r + h]);
        return c[0] + (c[1] - c[0]) * (e - r);
      };
    },
    generateTerm: function (e, t, n, r, i) {
      var s, o;
      if (JXG.isArray(t))
        (this.dataX = t),
          (this.numberPoints = this.dataX.length),
          (this.X = this.interpolationFunctionFromArray("X")),
          (this.visProp.curvetype = "plot"),
          (this.isDraggable = !0);
      else {
        this.X = JXG.createFunction(t, this.board, e);
        if (JXG.isString(t)) this.visProp.curvetype = "functiongraph";
        else if (JXG.isFunction(t) || JXG.isNumber(t))
          this.visProp.curvetype = "parameter";
        this.isDraggable = !0;
      }
      JXG.isArray(n)
        ? ((this.dataY = n),
          (this.Y = this.interpolationFunctionFromArray("Y")))
        : (this.Y = JXG.createFunction(n, this.board, e)),
        JXG.isFunction(t) &&
          JXG.isArray(n) &&
          ((s = JXG.createFunction(n[0], this.board, "")),
          (o = JXG.createFunction(n[1], this.board, "")),
          (this.X = function (e) {
            return t(e) * Math.cos(e) + s();
          }),
          (this.Y = function (e) {
            return t(e) * Math.sin(e) + o();
          }),
          (this.visProp.curvetype = "polar")),
        r != null && (this.minX = JXG.createFunction(r, this.board, "")),
        i != null && (this.maxX = JXG.createFunction(i, this.board, ""));
    },
    notifyParents: function (e) {
      JXG.GeonextParser.findDependencies(this, e, this.board);
    },
    getLabelAnchor: function () {
      var e,
        t,
        n,
        r = 0.05 * this.board.canvasWidth,
        i = 0.05 * this.board.canvasHeight,
        s = 0.95 * this.board.canvasWidth,
        o = 0.95 * this.board.canvasHeight;
      switch (this.visProp.label.position) {
        case "ulft":
          (t = r), (n = i);
          break;
        case "llft":
          (t = r), (n = o);
          break;
        case "rt":
          (t = s), (n = 0.5 * o);
          break;
        case "lrt":
          (t = s), (n = o);
          break;
        case "urt":
          (t = s), (n = i);
          break;
        case "top":
          (t = 0.5 * s), (n = i);
          break;
        case "bot":
          (t = 0.5 * s), (n = o);
          break;
        case "lft":
        default:
          (t = r), (n = 0.5 * o);
      }
      return (
        (e = new JXG.Coords(JXG.COORDS_BY_SCREEN, [t, n], this.board)),
        JXG.Math.Geometry.projectCoordsToCurve(
          e.usrCoords[1],
          e.usrCoords[2],
          0,
          this,
          this.board
        )[0]
      );
    },
    cloneToBackground: function () {
      var e = {},
        t;
      return (
        (e.id = this.id + "T" + this.numTraces),
        (e.elementClass = JXG.OBJECT_CLASS_CURVE),
        this.numTraces++,
        (e.points = this.points.slice(0)),
        (e.numberPoints = this.numberPoints),
        (e.board = this.board),
        (e.visProp = JXG.deepCopy(
          this.visProp,
          this.visProp.traceattributes,
          !0
        )),
        (e.visProp.layer = this.board.options.layer.trace),
        (e.visProp.curvetype = this.visProp.curvetype),
        JXG.clearVisPropOld(e),
        (t = this.board.renderer.enhancedRendering),
        (this.board.renderer.enhancedRendering = !0),
        this.board.renderer.drawCurve(e),
        (this.board.renderer.enhancedRendering = t),
        (this.traces[e.id] = e.rendNode),
        this
      );
    },
    bounds: function () {
      var e = Infinity,
        t = -Infinity,
        n = Infinity,
        r = -Infinity,
        i = this.points.length,
        s;
      for (s = 0; s < i; s++)
        e > this.points[s].usrCoords[1] && (e = this.points[s].usrCoords[1]),
          t < this.points[s].usrCoords[1] && (t = this.points[s].usrCoords[1]),
          n > this.points[s].usrCoords[2] && (n = this.points[s].usrCoords[2]),
          r < this.points[s].usrCoords[2] && (r = this.points[s].usrCoords[2]);
      return [e, r, t, n];
    },
  }),
  (JXG.createCurve = function (e, t, n) {
    var r = JXG.copyAttributes(n, e.options, "curve");
    return new JXG.Curve(e, ["x"].concat(t), r);
  }),
  JXG.JSXGraph.registerElement("curve", JXG.createCurve),
  (JXG.createFunctiongraph = function (e, t, n) {
    var r,
      i = ["x", "x"].concat(t);
    return (
      (r = JXG.copyAttributes(n, e.options, "curve")),
      (r.curvetype = "functiongraph"),
      new JXG.Curve(e, i, r)
    );
  }),
  JXG.JSXGraph.registerElement("functiongraph", JXG.createFunctiongraph),
  JXG.JSXGraph.registerElement("plot", JXG.createFunctiongraph),
  (JXG.createSpline = function (e, t, n) {
    var r;
    return (
      (r = function () {
        var e,
          n = [],
          r = [],
          i = function (i, s) {
            var o, u;
            if (!s) {
              (n = []), (r = []);
              if (
                t.length == 2 &&
                JXG.isArray(t[0]) &&
                JXG.isArray(t[1]) &&
                t[0].length == t[1].length
              )
                for (o = 0; o < t[0].length; o++)
                  typeof t[0][o] == "function"
                    ? n.push(t[0][o]())
                    : n.push(t[0][o]),
                    typeof t[1][o] == "function"
                      ? r.push(t[1][o]())
                      : r.push(t[1][o]);
              else
                for (o = 0; o < t.length; o++)
                  if (JXG.isPoint(t[o])) n.push(t[o].X()), r.push(t[o].Y());
                  else if (JXG.isArray(t[o]) && t[o].length == 2)
                    for (o = 0; o < t.length; o++)
                      typeof t[o][0] == "function"
                        ? n.push(t[o][0]())
                        : n.push(t[o][0]),
                        typeof t[o][1] == "function"
                          ? r.push(t[o][1]())
                          : r.push(t[o][1]);
              e = JXG.Math.Numerics.splineDef(n, r);
            }
            return JXG.Math.Numerics.splineEval(i, n, r, e);
          };
        return i;
      }),
      e.create("curve", ["x", r()], n)
    );
  }),
  JXG.JSXGraph.registerElement("spline", JXG.createSpline),
  (JXG.createRiemannsum = function (e, t, n) {
    var r, i, s, o, u, a;
    (a = JXG.copyAttributes(n, e.options, "riemannsum")),
      (a.curvetype = "plot"),
      (s = t[0]),
      (r = JXG.createFunction(t[1], e, ""));
    if (r == null)
      throw new Error(
        "JSXGraph: JXG.createRiemannsum: argument '2' n has to be number or function.\nPossible parent types: [function,n:number|function,type,start:number|function,end:number|function]"
      );
    i = JXG.createFunction(t[2], e, "", !1);
    if (i == null)
      throw new Error(
        "JSXGraph: JXG.createRiemannsum: argument 3 'type' has to be string or function.\nPossible parent types: [function,n:number|function,type,start:number|function,end:number|function]"
      );
    return (
      (o = [[0], [0]].concat(t.slice(3))),
      (u = e.create("curve", o, a)),
      (u.sum = 0),
      (u.Value = function () {
        return this.sum;
      }),
      (u.updateDataArray = function () {
        var e = JXG.Math.Numerics.riemann(
          s,
          r(),
          i(),
          this.minX(),
          this.maxX()
        );
        (this.dataX = e[0]), (this.dataY = e[1]), (this.sum = e[2]);
      }),
      u
    );
  }),
  JXG.JSXGraph.registerElement("riemannsum", JXG.createRiemannsum),
  (JXG.createTracecurve = function (e, t, n) {
    var r, i, s, o;
    if (t.length != 2)
      throw new Error(
        "JSXGraph: Can't create trace curve with given parent'\nPossible parent types: [glider, point]"
      );
    (i = JXG.getRef(this.board, t[0])), (s = JXG.getRef(this.board, t[1]));
    if (i.type != JXG.OBJECT_TYPE_GLIDER || !JXG.isPoint(s))
      throw new Error(
        "JSXGraph: Can't create trace curve with parent types '" +
          typeof t[0] +
          "' and '" +
          typeof t[1] +
          "'." +
          "\nPossible parent types: [glider, point]"
      );
    return (
      (o = JXG.copyAttributes(n, e.options, "tracecurve")),
      (o.curvetype = "plot"),
      (r = e.create("curve", [[0], [0]], o)),
      (r.updateDataArray = function () {
        var e,
          t,
          n,
          r,
          u,
          a,
          f,
          l,
          c = o.numberpoints,
          h,
          p = i.position,
          d = i.slideObject,
          v = d.minX(),
          m = d.maxX(),
          g;
        (t = (m - v) / c),
          (this.dataX = []),
          (this.dataY = []),
          d.elementClass != JXG.OBJECT_CLASS_CURVE && c++;
        for (e = 0; e < c; e++) {
          (n = v + e * t),
            (a = d.X(n) / d.Z(n)),
            (f = d.Y(n) / d.Z(n)),
            i.setPositionDirectly(JXG.COORDS_BY_USER, [a, f]),
            (h = !1);
          for (r in this.board.objects) {
            (u = this.board.objects[r]), u == i && (h = !0);
            if (!h) continue;
            if (!u.needsRegularUpdate) continue;
            (g = u.visProp.trace),
              (u.visProp.trace = !1),
              (u.needsUpdate = !0),
              u.update(!0),
              (u.visProp.trace = g);
            if (u == s) break;
          }
          (this.dataX[e] = s.X()), (this.dataY[e] = s.Y());
        }
        (i.position = p), (h = !1);
        for (r in this.board.objects) {
          (u = this.board.objects[r]), u == i && (h = !0);
          if (!h) continue;
          if (!u.needsRegularUpdate) continue;
          (g = u.visProp.trace),
            (u.visProp.trace = !1),
            (u.needsUpdate = !0),
            u.update(!0),
            (u.visProp.trace = g);
          if (u == s) break;
        }
      }),
      r
    );
  }),
  JXG.JSXGraph.registerElement("tracecurve", JXG.createTracecurve),
  (JXG.createArc = function (e, t, n) {
    var r, i, s;
    if (
      !(t = JXG.checkParents("arc", t, [
        [
          JXG.OBJECT_CLASS_POINT,
          JXG.OBJECT_CLASS_POINT,
          JXG.OBJECT_CLASS_POINT,
        ],
        [
          JXG.OBJECT_CLASS_POINT,
          JXG.OBJECT_CLASS_POINT,
          JXG.OBJECT_CLASS_POINT,
          JXG.OBJECT_CLASS_POINT,
        ],
      ]))
    )
      throw new Error(
        "JSXGraph: Can't create Arc with parent types '" +
          typeof t[0] +
          "' and '" +
          typeof t[1] +
          "' and '" +
          typeof t[2] +
          "'." +
          "\nPossible parent types: [point,point,point]"
      );
    (i = JXG.copyAttributes(n, e.options, "arc")),
      (r = e.create("curve", [[0], [0]], i)),
      (r.elType = "arc"),
      (r.parents = []);
    for (s = 0; s < t.length; s++) t[s].id && r.parents.push(t[s].id);
    return (
      (r.type = JXG.OBJECT_TYPE_ARC),
      (r.center = JXG.getReference(e, t[0])),
      (r.radiuspoint = JXG.getReference(e, t[1])),
      (r.point2 = r.radiuspoint),
      (r.anglepoint = JXG.getReference(e, t[2])),
      (r.point3 = r.anglepoint),
      r.center.addChild(r),
      r.radiuspoint.addChild(r),
      r.anglepoint.addChild(r),
      (r.useDirection = i.usedirection),
      (r.updateDataArray = function () {
        var e = this.radiuspoint,
          n = this.center,
          r = this.anglepoint,
          i,
          s,
          o,
          u,
          a,
          f,
          l = n.X(),
          c = n.Y(),
          h = n.Z(),
          p,
          d,
          v,
          m,
          g,
          y,
          b,
          w,
          E,
          S,
          x,
          T,
          N,
          C,
          k,
          L,
          A = 1,
          O = Math.PI * 0.5;
        a = JXG.Math.Geometry.rad(e, n, r);
        if (
          (this.visProp.type == "minor" && a > Math.PI) ||
          (this.visProp.type == "major" && a < Math.PI)
        )
          (a = 2 * Math.PI - a), (A = -1);
        this.useDirection &&
          ((v = t[1].coords.usrCoords),
          (m = t[3].coords.usrCoords),
          (g = t[2].coords.usrCoords),
          (d = (v[1] - g[1]) * (v[2] - m[2]) - (v[2] - g[2]) * (v[1] - m[1])),
          d < 0
            ? ((this.radiuspoint = t[1]), (this.anglepoint = t[2]))
            : ((this.radiuspoint = t[2]), (this.anglepoint = t[1]))),
          (y = [e.Z(), e.X(), e.Y()]),
          (E = y.slice(0)),
          (L = n.Dist(e)),
          (l /= h),
          (c /= h),
          (this.dataX = [y[1] / y[0]]),
          (this.dataY = [y[2] / y[0]]);
        while (a > JXG.Math.eps)
          a >= O ? ((i = O), (a -= O)) : ((i = a), (a = 0)),
            (s = Math.cos(A * i)),
            (o = Math.sin(A * i)),
            (u = [
              [1, 0, 0],
              [l * (1 - s) + c * o, s, -o],
              [c * (1 - s) - l * o, o, s],
            ]),
            (p = JXG.Math.matVecMult(u, y)),
            (E = [p[0] / p[0], p[1] / p[0], p[2] / p[0]]),
            (x = y[1] - l),
            (T = y[2] - c),
            (N = E[1] - l),
            (C = E[2] - c),
            (k = Math.sqrt((x + N) * (x + N) + (T + C) * (T + C))),
            Math.abs(C - T) > JXG.Math.eps
              ? (S = ((((x + N) * (L / k - 0.5)) / (C - T)) * 8) / 3)
              : (S = ((((T + C) * (L / k - 0.5)) / (x - N)) * 8) / 3),
            (b = [1, y[1] - S * T, y[2] + S * x]),
            (w = [1, E[1] + S * C, E[2] - S * N]),
            (this.dataX = this.dataX.concat([b[1], w[1], E[1]])),
            (this.dataY = this.dataY.concat([b[2], w[2], E[2]])),
            (y = E.slice(0));
        (this.bezierDegree = 3),
          this.updateStdform(),
          this.updateQuadraticform();
      }),
      (r.Radius = function () {
        return this.radiuspoint.Dist(this.center);
      }),
      (r.getRadius = function () {
        return this.Radius();
      }),
      (r.hasPoint = function (e, t) {
        var n = this.board.options.precision.hasPoint / this.board.unitX,
          r = this.Radius(),
          i,
          s,
          o,
          u,
          a,
          f,
          l,
          c;
        (s = new JXG.Coords(JXG.COORDS_BY_SCREEN, [e, t], this.board)),
          this.transformations.length > 0 &&
            (this.updateTransformMatrix(),
            (l = JXG.Math.inverse(this.transformMat)),
            (c = JXG.Math.matVecMult(l, s.usrCoords)),
            (s = new JXG.Coords(JXG.COORDS_BY_USER, c, this.board))),
          (i = this.center.coords.distance(JXG.COORDS_BY_USER, s)),
          (o = Math.abs(i - r) < n);
        if (o) {
          (u = JXG.Math.Geometry.rad(
            this.radiuspoint,
            this.center,
            s.usrCoords.slice(1)
          )),
            (a = 0),
            (f = JXG.Math.Geometry.rad(
              this.radiuspoint,
              this.center,
              this.anglepoint
            ));
          if (
            (this.visProp.type == "minor" && f > Math.PI) ||
            (this.visProp.type == "major" && f < Math.PI)
          )
            (a = f), (f = 2 * Math.PI);
          if (u < a || u > f) o = !1;
        }
        return o;
      }),
      (r.hasPointSector = function (e, t) {
        var n = new JXG.Coords(JXG.COORDS_BY_SCREEN, [e, t], this.board),
          r = this.Radius(),
          i = this.center.coords.distance(JXG.COORDS_BY_USER, n),
          s = i < r,
          o,
          u,
          a;
        if (s) {
          (o = JXG.Math.Geometry.rad(
            this.radiuspoint,
            this.center,
            n.usrCoords.slice(1)
          )),
            (u = 0),
            (a = JXG.Math.Geometry.rad(
              this.radiuspoint,
              this.center,
              this.anglepoint
            ));
          if (
            (this.visProp.type == "minor" && a > Math.PI) ||
            (this.visProp.type == "major" && a < Math.PI)
          )
            (u = a), (a = 2 * Math.PI);
          if (o < u || o > a) s = !1;
        }
        return s;
      }),
      (r.getTextAnchor = function () {
        return this.center.coords;
      }),
      (r.getLabelAnchor = function () {
        var e,
          t = 10 / this.board.unitX,
          n = 10 / this.board.unitY,
          r = this.point2.coords.usrCoords,
          i = this.center.coords.usrCoords,
          s = r[1] - i[1],
          o = r[2] - i[2],
          u,
          a,
          f,
          l;
        this.label.content != null &&
          (this.label.content.relativeCoords = new JXG.Coords(
            JXG.COORDS_BY_SCREEN,
            [0, 0],
            this.board
          )),
          (e = JXG.Math.Geometry.rad(
            this.radiuspoint,
            this.center,
            this.anglepoint
          ));
        if (
          (this.visProp.type == "minor" && e > Math.PI) ||
          (this.visProp.type == "major" && e < Math.PI)
        )
          e = -(2 * Math.PI - e);
        return (
          (u = new JXG.Coords(
            JXG.COORDS_BY_USER,
            [
              i[1] + Math.cos(e * 0.5) * s - Math.sin(e * 0.5) * o,
              i[2] + Math.sin(e * 0.5) * s + Math.cos(e * 0.5) * o,
            ],
            this.board
          )),
          (a = u.usrCoords[1] - i[1]),
          (f = u.usrCoords[2] - i[2]),
          (l = Math.sqrt(a * a + f * f)),
          (a = (a * (l + t)) / l),
          (f = (f * (l + n)) / l),
          new JXG.Coords(JXG.COORDS_BY_USER, [i[1] + a, i[2] + f], this.board)
        );
      }),
      (r.updateQuadraticform = function () {
        var e = this.center,
          t = e.X(),
          n = e.Y(),
          r = this.Radius();
        this.quadraticform = [
          [t * t + n * n - r * r, -t, -n],
          [-t, 1, 0],
          [-n, 0, 1],
        ];
      }),
      (r.updateStdform = function () {
        (this.stdform[3] = 0.5),
          (this.stdform[4] = this.Radius()),
          (this.stdform[1] = -this.center.coords.usrCoords[1]),
          (this.stdform[2] = -this.center.coords.usrCoords[2]),
          this.normalize();
      }),
      r.prepareUpdate().update(),
      r
    );
  }),
  JXG.JSXGraph.registerElement("arc", JXG.createArc),
  (JXG.createSemicircle = function (e, t, n) {
    var r, i, s;
    if (!JXG.isPoint(t[0]) || !JXG.isPoint(t[1]))
      throw new Error(
        "JSXGraph: Can't create Semicircle with parent types '" +
          typeof t[0] +
          "' and '" +
          typeof t[1] +
          "'." +
          "\nPossible parent types: [point,point]"
      );
    return (
      (s = JXG.copyAttributes(n, e.options, "semicircle", "midpoint")),
      (i = e.create("midpoint", [t[0], t[1]], s)),
      (i.dump = !1),
      (s = JXG.copyAttributes(n, e.options, "semicircle")),
      (r = e.create("arc", [i, t[1], t[0]], s)),
      (r.elType = "semicircle"),
      (r.parents = [t[0].id, t[1].id]),
      (r.subs = { midpoint: i }),
      (r.midpoint = r.center = i),
      r
    );
  }),
  JXG.JSXGraph.registerElement("semicircle", JXG.createSemicircle),
  (JXG.createCircumcircleArc = function (e, t, n) {
    var r, i, s;
    if (!(JXG.isPoint(t[0]) && JXG.isPoint(t[1]) && JXG.isPoint(t[2])))
      throw new Error(
        "JSXGraph: create Circumcircle Arc with parent types '" +
          typeof t[0] +
          "' and '" +
          typeof t[1] +
          "' and '" +
          typeof t[2] +
          "'." +
          "\nPossible parent types: [point,point,point]"
      );
    return (
      (s = JXG.copyAttributes(n, e.options, "circumcirclearc", "center")),
      (i = e.create("circumcenter", [t[0], t[1], t[2]], s)),
      (i.dump = !1),
      (s = JXG.copyAttributes(n, e.options, "circumcirclearc")),
      (s.usedirection = !0),
      (r = e.create("arc", [i, t[0], t[2], t[1]], s)),
      (r.elType = "circumcirclearc"),
      (r.parents = [t[0].id, t[1].id, t[2].id]),
      (r.subs = { center: i }),
      (r.center = i),
      r
    );
  }),
  JXG.JSXGraph.registerElement("circumcirclearc", JXG.createCircumcircleArc),
  (JXG.createMinorArc = function (e, t, n) {
    return (n.type = "minor"), JXG.createArc(e, t, n);
  }),
  JXG.JSXGraph.registerElement("minorarc", JXG.createMinorArc),
  (JXG.createMajorArc = function (e, t, n) {
    return (n.type = "major"), JXG.createArc(e, t, n);
  }),
  JXG.JSXGraph.registerElement("majorarc", JXG.createMajorArc),
  (JXG.createSector = function (e, t, n) {
    var r, i;
    if (!(JXG.isPoint(t[0]) && JXG.isPoint(t[1]) && JXG.isPoint(t[2])))
      throw new Error(
        "JSXGraph: Can't create Sector with parent types '" +
          typeof t[0] +
          "' and '" +
          typeof t[1] +
          "' and '" +
          typeof t[2] +
          "'."
      );
    return (
      (i = JXG.copyAttributes(n, e.options, "sector")),
      (r = e.create("curve", [[0], [0]], i)),
      (r.type = JXG.OBJECT_TYPE_SECTOR),
      (r.elType = "sector"),
      (r.parents = [t[0].id, t[1].id, t[2].id]),
      (r.point1 = JXG.getReference(e, t[0])),
      (r.center = r.point1),
      (r.point2 = JXG.getReference(e, t[1])),
      (r.radiuspoint = r.point2),
      (r.point3 = JXG.getReference(e, t[2])),
      (r.anglepoint = r.point3),
      r.point1.addChild(r),
      r.point2.addChild(r),
      r.point3.addChild(r),
      (r.useDirection = n.usedirection),
      (r.updateDataArray = function () {
        var e = this.point2,
          n = this.point1,
          r = this.point3,
          i,
          s,
          o,
          u,
          a = JXG.Math.Geometry.rad(e, n, r),
          f,
          l = n.X(),
          c = n.Y(),
          h = n.Z(),
          p,
          d,
          v,
          m,
          g,
          y,
          b,
          w,
          E,
          S,
          x,
          T,
          N,
          C,
          k,
          L,
          A = Math.PI * 0.5;
        this.useDirection &&
          ((v = t[1].coords.usrCoords),
          (m = t[3].coords.usrCoords),
          (g = t[2].coords.usrCoords),
          (d = (v[1] - g[1]) * (v[2] - m[2]) - (v[2] - g[2]) * (v[1] - m[1])),
          d < 0
            ? ((this.point2 = t[1]), (this.point3 = t[2]))
            : ((this.point2 = t[2]), (this.point3 = t[1]))),
          (L = n.Dist(e)),
          (y = [e.Z(), e.X(), e.Y()]),
          (y[1] /= y[0]),
          (y[2] /= y[0]),
          (y[0] /= y[0]),
          (E = y.slice(0)),
          (l /= h),
          (c /= h),
          (this.dataX = [
            l,
            l + 0.333 * (y[1] - l),
            l + 0.666 * (y[1] - l),
            y[1],
          ]),
          (this.dataY = [
            c,
            c + 0.333 * (y[2] - c),
            c + 0.666 * (y[2] - c),
            y[2],
          ]);
        while (a > JXG.Math.eps)
          a >= A ? ((i = A), (a -= A)) : ((i = a), (a = 0)),
            (s = Math.cos(i)),
            (o = Math.sin(i)),
            (u = [
              [1, 0, 0],
              [l * (1 - s) + c * o, s, -o],
              [c * (1 - s) - l * o, o, s],
            ]),
            (p = JXG.Math.matVecMult(u, y)),
            (E = [p[0] / p[0], p[1] / p[0], p[2] / p[0]]),
            (x = y[1] - l),
            (T = y[2] - c),
            (N = E[1] - l),
            (C = E[2] - c),
            (k = Math.sqrt((x + N) * (x + N) + (T + C) * (T + C))),
            Math.abs(C - T) > JXG.Math.eps
              ? (S = ((((x + N) * (L / k - 0.5)) / (C - T)) * 8) / 3)
              : (S = ((((T + C) * (L / k - 0.5)) / (x - N)) * 8) / 3),
            (b = [1, y[1] - S * T, y[2] + S * x]),
            (w = [1, E[1] + S * C, E[2] - S * N]),
            (this.dataX = this.dataX.concat([b[1], w[1], E[1]])),
            (this.dataY = this.dataY.concat([b[2], w[2], E[2]])),
            (y = E.slice(0));
        (this.dataX = this.dataX.concat([
          E[1] + 0.333 * (l - E[1]),
          E[1] + 0.666 * (l - E[1]),
          l,
        ])),
          (this.dataY = this.dataY.concat([
            E[2] + 0.333 * (c - E[2]),
            E[2] + 0.666 * (c - E[2]),
            c,
          ])),
          (this.bezierDegree = 3);
      }),
      (r.Radius = function () {
        return this.point2.Dist(this.point1);
      }),
      (r.getRadius = function () {
        return this.Radius();
      }),
      (r.hasPoint = function (e, t) {
        var n = this.board.options.precision.hasPoint / this.board.unitX,
          r = new JXG.Coords(JXG.COORDS_BY_SCREEN, [e, t], this.board),
          i = this.Radius(),
          s = this.center.coords.distance(JXG.COORDS_BY_USER, r),
          o = Math.abs(s - i) < n,
          u,
          a,
          f;
        if (o) {
          (u = JXG.Math.Geometry.rad(
            this.point2,
            this.center,
            r.usrCoords.slice(1)
          )),
            (a = 0),
            (f = JXG.Math.Geometry.rad(this.point2, this.center, this.point3));
          if (u < a || u > f) o = !1;
        }
        return o;
      }),
      (r.hasPointSector = function (e, t) {
        var n = new JXG.Coords(JXG.COORDS_BY_SCREEN, [e, t], this.board),
          r = this.Radius(),
          i = this.point1.coords.distance(JXG.COORDS_BY_USER, n),
          s = i < r,
          o;
        return (
          s &&
            ((o = JXG.Math.Geometry.rad(
              this.point2,
              this.point1,
              n.usrCoords.slice(1)
            )),
            o > JXG.Math.Geometry.rad(this.point2, this.point1, this.point3) &&
              (s = !1)),
          s
        );
      }),
      (r.getTextAnchor = function () {
        return this.point1.coords;
      }),
      (r.getLabelAnchor = function () {
        var e = JXG.Math.Geometry.rad(this.point2, this.point1, this.point3),
          t = 13 / this.board.unitX,
          n = 13 / this.board.unitY,
          r = this.point2.coords.usrCoords,
          i = this.point1.coords.usrCoords,
          s = r[1] - i[1],
          o = r[2] - i[2],
          u,
          a,
          f,
          l;
        return (
          this.label.content != null &&
            (this.label.content.relativeCoords = new JXG.Coords(
              JXG.COORDS_BY_SCREEN,
              [0, 0],
              this.board
            )),
          (u = new JXG.Coords(
            JXG.COORDS_BY_USER,
            [
              i[1] + Math.cos(e * 0.5) * s - Math.sin(e * 0.5) * o,
              i[2] + Math.sin(e * 0.5) * s + Math.cos(e * 0.5) * o,
            ],
            this.board
          )),
          (a = u.usrCoords[1] - i[1]),
          (f = u.usrCoords[2] - i[2]),
          (l = Math.sqrt(a * a + f * f)),
          (a = (a * (l + t)) / l),
          (f = (f * (l + n)) / l),
          new JXG.Coords(JXG.COORDS_BY_USER, [i[1] + a, i[2] + f], this.board)
        );
      }),
      r.prepareUpdate().update(),
      r
    );
  }),
  JXG.JSXGraph.registerElement("sector", JXG.createSector),
  (JXG.createCircumcircleSector = function (e, t, n) {
    var r, i, s;
    if (!(JXG.isPoint(t[0]) && JXG.isPoint(t[1]) && JXG.isPoint(t[2])))
      throw new Error(
        "JSXGraph: Can't create circumcircle sector with parent types '" +
          typeof t[0] +
          "' and '" +
          typeof t[1] +
          "' and '" +
          typeof t[2] +
          "'."
      );
    return (
      (s = JXG.copyAttributes(n, e.options, "circumcirclesector", "center")),
      (i = e.create("circumcenter", [t[0], t[1], t[2]], s)),
      (i.dump = !1),
      (s = JXG.copyAttributes(n, e.options, "circumcirclesector")),
      (r = e.create("sector", [i, t[0], t[2], t[1]], s)),
      (r.elType = "circumcirclesector"),
      (r.parents = [t[0].id, t[1].id, t[2].id]),
      (r.center = i),
      (r.subs = { center: i }),
      r
    );
  }),
  JXG.JSXGraph.registerElement(
    "circumcirclesector",
    JXG.createCircumcircleSector
  ),
  (JXG.createAngle = function (e, t, n) {
    var r, i, s, o, u, a, f, l;
    if (!(JXG.isPoint(t[0]) && JXG.isPoint(t[1]) && JXG.isPoint(t[2])))
      throw new Error(
        "JSXGraph: Can't create angle with parent types '" +
          typeof t[0] +
          "' and '" +
          typeof t[1] +
          "' and '" +
          typeof t[2] +
          "'."
      );
    (u = JXG.copyAttributes(n, e.options, "angle")), (o = u.name);
    if (typeof o == "undefined" || o == "")
      (o = e.generateName({ type: JXG.OBJECT_TYPE_ANGLE })), (u.name = o);
    (a = JXG.copyAttributes(n, e.options, "angle", "radiuspoint")),
      (i = e.create("point", [0, 1, 0], a)),
      (i.dump = !1),
      (a = JXG.copyAttributes(n, e.options, "angle", "pointsquare")),
      (s = e.create("point", [0, 1, 1], a)),
      (s.dump = !1),
      (r = e.create("sector", [t[1], i, t[2]], u)),
      (r.elType = "angle"),
      (r.parents = [t[0].id, t[1].id, t[2].id]),
      (r.subs = { point: i, pointsquare: s }),
      (r.updateDataArraySquare = function () {
        var e = t[1],
          n,
          r,
          o,
          u;
        (n = JXG.Math.crossProduct(s.coords.usrCoords, e.coords.usrCoords)),
          (r = [-i.X() * n[1] - i.Y() * n[2], i.Z() * n[1], i.Z() * n[2]]),
          (n = JXG.Math.crossProduct(i.coords.usrCoords, e.coords.usrCoords)),
          (o = [-s.X() * n[1] - s.Y() * n[2], s.Z() * n[1], s.Z() * n[2]]),
          (u = JXG.Math.crossProduct(r, o)),
          (u[1] /= u[0]),
          (u[2] /= u[0]),
          (this.dataX = [e.X(), i.X(), u[1], s.X(), e.X()]),
          (this.dataY = [e.Y(), i.Y(), u[2], s.Y(), e.Y()]),
          (this.bezierDegree = 1);
      }),
      (r.updateDataArrayNone = function () {
        (this.dataX = [NaN]), (this.dataY = [NaN]), (this.bezierDegree = 1);
      }),
      (r.updateDataArraySector = r.updateDataArray),
      (r.updateDataArray = function () {
        var e = this.visProp.type,
          n = JXG.Math.Geometry.trueAngle(t[0], t[1], t[2]);
        Math.abs(n - 90) < this.visProp.orthosensitivity &&
          (e = this.visProp.orthotype),
          e == "none"
            ? this.updateDataArrayNone()
            : e === "square"
            ? this.updateDataArraySquare()
            : e === "sector"
            ? this.updateDataArraySector()
            : e === "sectordot" &&
              (this.updateDataArraySector(),
              this.dot.visProp.visible === !1 &&
                this.dot.setProperty({ visible: !0 })),
          e !== "sectordot" &&
            this.dot.visProp.visible === !0 &&
            this.dot.setProperty({ visible: !1 });
      }),
      i.addConstraint([
        function () {
          var e = t[0],
            n = t[1],
            i = JXG.evaluate(r.visProp.radius),
            s = n.Dist(e);
          return [
            n.X() + ((e.X() - n.X()) * i) / s,
            n.Y() + ((e.Y() - n.Y()) * i) / s,
          ];
        },
      ]),
      s.addConstraint([
        function () {
          var e = t[2],
            n = t[1],
            i = JXG.evaluate(r.visProp.radius),
            s = n.Dist(e);
          return [
            n.X() + ((e.X() - n.X()) * i) / s,
            n.Y() + ((e.Y() - n.Y()) * i) / s,
          ];
        },
      ]),
      (r.radiuspoint = i),
      (r.point = i),
      (r.pointsquare = s),
      (l = JXG.copyAttributes(n, e.options, "angle", "dot")),
      (r.dot = e.create(
        "point",
        [
          function () {
            if (JXG.exists(r.dot) && r.dot.visProp.visible === !1)
              return [0, 0];
            var e = i.coords.usrCoords,
              n = JXG.Math.Geometry.rad(t[0], t[1], t[2]) * 0.5,
              s = t[1].X(),
              o = t[1].Y(),
              u = [
                [1, 0, 0],
                [
                  s - 0.5 * s * Math.cos(n) + 0.5 * o * Math.sin(n),
                  Math.cos(n) * 0.5,
                  -Math.sin(n) * 0.5,
                ],
                [
                  o - 0.5 * s * Math.sin(n) - 0.5 * o * Math.cos(n),
                  Math.sin(n) * 0.5,
                  Math.cos(n) * 0.5,
                ],
              ];
            return JXG.Math.matVecMult(u, e);
          },
        ],
        l
      )),
      (r.dot.dump = !1),
      (r.subs.dot = r.dot);
    for (f = 0; f < 3; f++)
      JXG.getRef(e, t[f]).addChild(i), JXG.getRef(e, t[f]).addChild(r.dot);
    return (
      (r.type = JXG.OBJECT_TYPE_ANGLE),
      JXG.getRef(e, t[0]).addChild(r),
      (r.rot = e.create(
        "transform",
        [
          function () {
            return 0.5 * JXG.Math.Geometry.rad(r.point2, r.point1, r.point3);
          },
          r.point1,
        ],
        { type: "rotate" }
      )),
      (r.getLabelAnchor = function () {
        var e = 12,
          t = 12,
          n = this.point1.coords.usrCoords,
          r,
          i,
          s,
          o;
        return (
          this.label.content != null &&
            (this.label.content.relativeCoords = new JXG.Coords(
              JXG.COORDS_BY_SCREEN,
              [0, 0],
              this.board
            )),
          JXG.exists(this.visProp.label.fontSize) &&
            ((e = this.visProp.label.fontSize),
            (t = this.visProp.label.fontSize)),
          (e /= this.board.unitX),
          (t /= this.board.unitY),
          this.rot.update(),
          (o = JXG.Math.matVecMult(
            this.rot.matrix,
            this.point2.coords.usrCoords
          )),
          (r = o[1] - n[1]),
          (i = o[2] - n[2]),
          (s = Math.sqrt(r * r + i * i)),
          (r = (r * (s + e)) / s),
          (i = (i * (s + t)) / s),
          new JXG.Coords(JXG.COORDS_BY_USER, [n[1] + r, n[2] + i], this.board)
        );
      }),
      (r.Value = function () {
        return JXG.Math.Geometry.rad(this.point2, this.point1, this.point3);
      }),
      (r.methodMap = JXG.deepCopy(r.methodMap, { Value: "Value" })),
      (r.setAngle = function (e) {
        var t, n, r;
        return (
          (t = this.anglepoint),
          (n = this.radiuspoint),
          t.draggable() &&
            ((r = this.board.create("transform", [e, this.center], {
              type: "rotate",
            })),
            t.addTransform(n, r),
            (t.isDraggable = !1),
            (t.parents = [n])),
          this
        );
      }),
      (r.free = function () {
        var e = this.anglepoint;
        return (
          e.transformations.length > 0 &&
            (e.transformations.pop(), (e.isDraggable = !0), (e.parents = [])),
          this
        );
      }),
      r
    );
  }),
  JXG.JSXGraph.registerElement("angle", JXG.createAngle),
  (JXG.Composition = function (e) {
    var t = [
        "setProperty",
        "prepareUpdate",
        "updateRenderer",
        "update",
        "highlight",
        "noHighlight",
      ],
      n = function (e) {
        return function () {
          var t;
          for (t in r.elements)
            JXG.exists(r.elements[t][e]) &&
              r.elements[t][e].apply(r.elements[t], arguments);
          return r;
        };
      },
      r = this,
      i;
    for (i = 0; i < t.length; i++) this[t[i]] = n(t[i]);
    this.elements = {};
    for (i in e) e.hasOwnProperty(i) && this.add(i, e[i]);
    (this.dump = !0), (this.subs = {});
  }),
  JXG.extend(JXG.Composition.prototype, {
    add: function (e, t) {
      return !JXG.exists(this[e]) && JXG.exists(t)
        ? (JXG.exists(t.id)
            ? (this.elements[t.id] = t)
            : (this.elements[e] = t),
          (this[e] = t),
          !0)
        : !1;
    },
    remove: function (e) {
      var t = !1,
        n;
      for (n in this.elements)
        if (this.elements[n].id === this[e].id) {
          t = !0;
          break;
        }
      return t && (delete this.elements[this[e].id], delete this[e]), t;
    },
    getParents: function () {
      return this.parents;
    },
    getType: function () {
      return this.elType;
    },
    getAttributes: function () {
      var e = {},
        t;
      for (t in this.subs) e[t] = this.subs[t].visProp;
      return this.attr;
    },
  }),
  (JXG.createOrthogonalProjection = function (e, t, n) {
    var r, i, s, o;
    if (JXG.isPoint(t[0]) && t[1].elementClass == JXG.OBJECT_CLASS_LINE)
      (i = t[0]), (r = t[1]);
    else {
      if (!JXG.isPoint(t[1]) || t[0].elementClass != JXG.OBJECT_CLASS_LINE)
        throw new Error(
          "JSXGraph: Can't create perpendicular point with parent types '" +
            typeof t[0] +
            "' and '" +
            typeof t[1] +
            "'." +
            "\nPossible parent types: [point,line]"
        );
      (i = t[1]), (r = t[0]);
    }
    return (
      (attr = JXG.copyAttributes(n, e.options, "orthogonalprojection")),
      (s = e.create(
        "point",
        [
          function () {
            return JXG.Math.Geometry.projectPointToLine(i, r, e);
          },
        ],
        n
      )),
      i.addChild(s),
      r.addChild(s),
      (s.elType = "orthogonalprojection"),
      (s.parents = [i.id, s.id]),
      s.update(),
      (s.generatePolynomial = function () {
        var e = r.point1.symbolic.x,
          t = r.point1.symbolic.y,
          n = r.point2.symbolic.x,
          o = r.point2.symbolic.y,
          u = i.symbolic.x,
          a = i.symbolic.y,
          f = s.symbolic.x,
          c = s.symbolic.y,
          h =
            "(" +
            t +
            ")*(" +
            f +
            ")-(" +
            t +
            ")*(" +
            n +
            ")+(" +
            c +
            ")*(" +
            n +
            ")-(" +
            e +
            ")*(" +
            c +
            ")+(" +
            e +
            ")*(" +
            o +
            ")-(" +
            f +
            ")*(" +
            o +
            ")",
          d =
            "(" +
            a +
            ")*(" +
            t +
            ")-(" +
            a +
            ")*(" +
            o +
            ")-(" +
            c +
            ")*(" +
            t +
            ")+(" +
            c +
            ")*(" +
            o +
            ")+(" +
            u +
            ")*(" +
            e +
            ")-(" +
            u +
            ")*(" +
            n +
            ")-(" +
            f +
            ")*(" +
            e +
            ")+(" +
            f +
            ")*(" +
            n +
            ")";
        return [h, d];
      }),
      s
    );
  }),
  (JXG.createPerpendicular = function (e, t, n) {
    var r, i, s, o;
    (t[0] = JXG.getReference(e, t[0])), (t[1] = JXG.getReference(e, t[1]));
    if (JXG.isPoint(t[0]) && t[1].elementClass == JXG.OBJECT_CLASS_LINE)
      (i = t[1]), (r = t[0]);
    else {
      if (!JXG.isPoint(t[1]) || t[0].elementClass != JXG.OBJECT_CLASS_LINE)
        throw new Error(
          "JSXGraph: Can't create perpendicular with parent types '" +
            typeof t[0] +
            "' and '" +
            typeof t[1] +
            "'." +
            "\nPossible parent types: [line,point]"
        );
      (i = t[0]), (r = t[1]);
    }
    return (
      (o = JXG.copyAttributes(n, e.options, "perpendicular")),
      (s = JXG.createLine(
        e,
        [
          function () {
            return i.stdform[2] * r.X() - i.stdform[1] * r.Y();
          },
          function () {
            return -i.stdform[2] * r.Z();
          },
          function () {
            return i.stdform[1] * r.Z();
          },
        ],
        o
      )),
      (s.elType = "perpendicular"),
      (s.parents = [i.id, r.id]),
      s
    );
  }),
  (JXG.createPerpendicularPoint = function (e, t, n) {
    var r, i, s;
    if (JXG.isPoint(t[0]) && t[1].elementClass == JXG.OBJECT_CLASS_LINE)
      (i = t[0]), (r = t[1]);
    else {
      if (!JXG.isPoint(t[1]) || t[0].elementClass != JXG.OBJECT_CLASS_LINE)
        throw new Error(
          "JSXGraph: Can't create perpendicular point with parent types '" +
            typeof t[0] +
            "' and '" +
            typeof t[1] +
            "'." +
            "\nPossible parent types: [point,line]"
        );
      (i = t[1]), (r = t[0]);
    }
    return (
      (s = e.create(
        "point",
        [
          function () {
            return JXG.Math.Geometry.perpendicular(r, i, e)[0];
          },
        ],
        n
      )),
      i.addChild(s),
      r.addChild(s),
      (s.elType = "perpendicularpoint"),
      (s.parents = [i.id, r.id]),
      s.update(),
      (s.generatePolynomial = function () {
        var e = r.point1.symbolic.x,
          t = r.point1.symbolic.y,
          n = r.point2.symbolic.x,
          o = r.point2.symbolic.y,
          u = i.symbolic.x,
          a = i.symbolic.y,
          f = s.symbolic.x,
          c = s.symbolic.y,
          h =
            "(" +
            t +
            ")*(" +
            f +
            ")-(" +
            t +
            ")*(" +
            n +
            ")+(" +
            c +
            ")*(" +
            n +
            ")-(" +
            e +
            ")*(" +
            c +
            ")+(" +
            e +
            ")*(" +
            o +
            ")-(" +
            f +
            ")*(" +
            o +
            ")",
          d =
            "(" +
            a +
            ")*(" +
            t +
            ")-(" +
            a +
            ")*(" +
            o +
            ")-(" +
            c +
            ")*(" +
            t +
            ")+(" +
            c +
            ")*(" +
            o +
            ")+(" +
            u +
            ")*(" +
            e +
            ")-(" +
            u +
            ")*(" +
            n +
            ")-(" +
            f +
            ")*(" +
            e +
            ")+(" +
            f +
            ")*(" +
            n +
            ")";
        return [h, d];
      }),
      s
    );
  }),
  (JXG.createPerpendicularSegment = function (e, t, n) {
    var r, i, s, o, u;
    (t[0] = JXG.getReference(e, t[0])), (t[1] = JXG.getReference(e, t[1]));
    if (JXG.isPoint(t[0]) && t[1].elementClass == JXG.OBJECT_CLASS_LINE)
      (i = t[1]), (r = t[0]);
    else {
      if (!JXG.isPoint(t[1]) || t[0].elementClass != JXG.OBJECT_CLASS_LINE)
        throw new Error(
          "JSXGraph: Can't create perpendicular with parent types '" +
            typeof t[0] +
            "' and '" +
            typeof t[1] +
            "'." +
            "\nPossible parent types: [line,point]"
        );
      (i = t[0]), (r = t[1]);
    }
    return (
      (u = JXG.copyAttributes(n, e.options, "perpendicularsegment", "point")),
      (o = JXG.createPerpendicularPoint(e, [i, r], u)),
      (o.dump = !1),
      JXG.exists(n.layer) || (n.layer = e.options.layer.line),
      (u = JXG.copyAttributes(n, e.options, "perpendicularsegment")),
      (s = JXG.createLine(
        e,
        [
          function () {
            return JXG.Math.Geometry.perpendicular(i, r, e)[1]
              ? [o, r]
              : [r, o];
          },
        ],
        u
      )),
      (s.point = o),
      (s.elType = "perpendicularsegment"),
      (s.parents = [r.id, i.id]),
      (s.subs = { point: o }),
      s
    );
  }),
  (JXG.createMidpoint = function (e, t, n) {
    var r, i, s;
    if (t.length == 2 && JXG.isPoint(t[0]) && JXG.isPoint(t[1]))
      (r = t[0]), (i = t[1]);
    else {
      if (t.length != 1 || t[0].elementClass != JXG.OBJECT_CLASS_LINE)
        throw new Error(
          "JSXGraph: Can't create midpoint.\nPossible parent types: [point,point], [line]"
        );
      (r = t[0].point1), (i = t[0].point2);
    }
    return (
      (s = e.create(
        "point",
        [
          function () {
            var e = r.coords.usrCoords[1] + i.coords.usrCoords[1];
            return isNaN(e) ||
              Math.abs(r.coords.usrCoords[0]) < JXG.Math.eps ||
              Math.abs(i.coords.usrCoords[0]) < JXG.Math.eps
              ? NaN
              : e * 0.5;
          },
          function () {
            var e = r.coords.usrCoords[2] + i.coords.usrCoords[2];
            return isNaN(e) ||
              Math.abs(r.coords.usrCoords[0]) < JXG.Math.eps ||
              Math.abs(i.coords.usrCoords[0]) < JXG.Math.eps
              ? NaN
              : e * 0.5;
          },
        ],
        n
      )),
      r.addChild(s),
      i.addChild(s),
      (s.elType = "midpoint"),
      (s.parents = [r.id, i.id]),
      s.prepareUpdate().update(),
      (s.generatePolynomial = function () {
        var e = r.symbolic.x,
          t = r.symbolic.y,
          n = i.symbolic.x,
          o = i.symbolic.y,
          u = s.symbolic.x,
          f = s.symbolic.y,
          l =
            "(" +
            t +
            ")*(" +
            u +
            ")-(" +
            t +
            ")*(" +
            n +
            ")+(" +
            f +
            ")*(" +
            n +
            ")-(" +
            e +
            ")*(" +
            f +
            ")+(" +
            e +
            ")*(" +
            o +
            ")-(" +
            u +
            ")*(" +
            o +
            ")",
          c =
            "(" +
            e +
            ")^2 - 2*(" +
            e +
            ")*(" +
            u +
            ")+(" +
            t +
            ")^2-2*(" +
            t +
            ")*(" +
            f +
            ")-(" +
            n +
            ")^2+2*(" +
            n +
            ")*(" +
            u +
            ")-(" +
            o +
            ")^2+2*(" +
            o +
            ")*(" +
            f +
            ")";
        return [l, c];
      }),
      s
    );
  }),
  (JXG.createParallelPoint = function (e, t, n) {
    var r, i, s, o;
    if (
      t.length == 3 &&
      t[0].elementClass == JXG.OBJECT_CLASS_POINT &&
      t[1].elementClass == JXG.OBJECT_CLASS_POINT &&
      t[2].elementClass == JXG.OBJECT_CLASS_POINT
    )
      (r = t[0]), (i = t[1]), (s = t[2]);
    else if (
      t[0].elementClass == JXG.OBJECT_CLASS_POINT &&
      t[1].elementClass == JXG.OBJECT_CLASS_LINE
    )
      (s = t[0]), (r = t[1].point1), (i = t[1].point2);
    else {
      if (
        t[1].elementClass != JXG.OBJECT_CLASS_POINT ||
        t[0].elementClass != JXG.OBJECT_CLASS_LINE
      )
        throw new Error(
          "JSXGraph: Can't create parallel point with parent types '" +
            typeof t[0] +
            "', '" +
            typeof t[1] +
            "' and '" +
            typeof t[2] +
            "'." +
            "\nPossible parent types: [line,point], [point,point,point]"
        );
      (s = t[1]), (r = t[0].point1), (i = t[0].point2);
    }
    return (
      (o = e.create(
        "point",
        [
          function () {
            return (
              s.coords.usrCoords[1] +
              i.coords.usrCoords[1] -
              r.coords.usrCoords[1]
            );
          },
          function () {
            return (
              s.coords.usrCoords[2] +
              i.coords.usrCoords[2] -
              r.coords.usrCoords[2]
            );
          },
        ],
        n
      )),
      r.addChild(o),
      i.addChild(o),
      s.addChild(o),
      (o.elType = "parallelpoint"),
      (o.parents = [r.id, i.id, s.id]),
      o.prepareUpdate().update(),
      (o.generatePolynomial = function () {
        var e = r.symbolic.x,
          t = r.symbolic.y,
          n = i.symbolic.x,
          u = i.symbolic.y,
          f = s.symbolic.x,
          l = s.symbolic.y,
          h = o.symbolic.x,
          d = o.symbolic.y,
          v =
            "(" +
            u +
            ")*(" +
            h +
            ")-(" +
            u +
            ")*(" +
            f +
            ")-(" +
            t +
            ")*(" +
            h +
            ")+(" +
            t +
            ")*(" +
            f +
            ")-(" +
            d +
            ")*(" +
            n +
            ")+(" +
            d +
            ")*(" +
            e +
            ")+(" +
            l +
            ")*(" +
            n +
            ")-(" +
            l +
            ")*(" +
            e +
            ")",
          m =
            "(" +
            d +
            ")*(" +
            e +
            ")-(" +
            d +
            ")*(" +
            f +
            ")-(" +
            u +
            ")*(" +
            e +
            ")+(" +
            u +
            ")*(" +
            f +
            ")-(" +
            h +
            ")*(" +
            t +
            ")+(" +
            h +
            ")*(" +
            l +
            ")+(" +
            n +
            ")*(" +
            t +
            ")-(" +
            n +
            ")*(" +
            l +
            ")";
        return [v, m];
      }),
      o
    );
  }),
  (JXG.createParallel = function (e, t, n) {
    var r, i, s, o, u;
    return (
      (r = null),
      t.length == 3
        ? ((r = t[2]),
          (o = function () {
            return JXG.Math.crossProduct(
              t[0].coords.usrCoords,
              t[1].coords.usrCoords
            );
          }))
        : t[0].elementClass == JXG.OBJECT_CLASS_POINT
        ? ((r = t[0]),
          (o = function () {
            return t[1].stdform;
          }))
        : t[1].elementClass == JXG.OBJECT_CLASS_POINT &&
          ((r = t[1]),
          (o = function () {
            return t[0].stdform;
          })),
      JXG.exists(n.layer) || (n.layer = e.options.layer.line),
      (u = JXG.copyAttributes(n, e.options, "parallel", "point")),
      (i = e.create(
        "point",
        [
          function () {
            return JXG.Math.crossProduct([1, 0, 0], o());
          },
        ],
        u
      )),
      (i.isDraggable = !0),
      (u = JXG.copyAttributes(n, e.options, "parallel")),
      (s = e.create("line", [r, i], u)),
      (s.elType = "parallel"),
      (s.parents = [t[0].id, t[1].id]),
      t.length === 3 && s.parents.push(t[2].id),
      (s.point = i),
      s
    );
  }),
  (JXG.createArrowParallel = function (e, t, n) {
    var r;
    try {
      return (
        (n.firstArrow = !1),
        (n.lastArrow = !0),
        (r = JXG.createParallel(e, t, n).setStraight(!1, !1)),
        (r.elType = "arrowparallel"),
        r
      );
    } catch (i) {
      throw new Error(
        "JSXGraph: Can't create arrowparallel with parent types '" +
          typeof t[0] +
          "' and '" +
          typeof t[1] +
          "'." +
          "\nPossible parent types: [line,point], [point,point,point]"
      );
    }
  }),
  (JXG.createNormal = function (e, t, n) {
    var r, i, s, o, u, a, f;
    if (t.length == 1) (r = t[0]), (i = r.slideObject);
    else {
      if (t.length != 2)
        throw new Error(
          "JSXGraph: Can't create normal with parent types '" +
            typeof t[0] +
            "' and '" +
            typeof t[1] +
            "'." +
            "\nPossible parent types: [point,line], [point,circle], [glider]"
        );
      if (JXG.isPoint(t[0])) (r = t[0]), (i = t[1]);
      else {
        if (!JXG.isPoint(t[1]))
          throw new Error(
            "JSXGraph: Can't create normal with parent types '" +
              typeof t[0] +
              "' and '" +
              typeof t[1] +
              "'." +
              "\nPossible parent types: [point,line], [point,circle], [glider]"
          );
        (i = t[0]), (r = t[1]);
      }
    }
    u = JXG.copyAttributes(n, e.options, "normal");
    if (i.elementClass == JXG.OBJECT_CLASS_LINE)
      (f = JXG.copyAttributes(n, e.options, "normal", "point")),
        (a = e.create(
          "point",
          [
            function () {
              var e = JXG.Math.crossProduct([1, 0, 0], i.stdform);
              return [e[0], -e[2], e[1]];
            },
          ],
          f
        )),
        (a.isDraggable = !0),
        (s = e.create("line", [r, a], u)),
        (s.point = a);
    else if (i.elementClass == JXG.OBJECT_CLASS_CIRCLE)
      s = e.create("line", [i.midpoint, r], u);
    else if (i.elementClass == JXG.OBJECT_CLASS_CURVE)
      if (i.visProp.curvetype != "plot") {
        var l = i.X,
          c = i.Y;
        s = e.create(
          "line",
          [
            function () {
              return -r.X() * e.D(l)(r.position) - r.Y() * e.D(c)(r.position);
            },
            function () {
              return e.D(l)(r.position);
            },
            function () {
              return e.D(c)(r.position);
            },
          ],
          u
        );
      } else
        s = e.create(
          "line",
          [
            function () {
              var e = Math.floor(r.position),
                t = r.position - e;
              return (
                e == i.numberPoints - 1 && (e--, (t = 1)),
                e < 0
                  ? 1
                  : (i.Y(e) + t * (i.Y(e + 1) - i.Y(e))) *
                      (i.Y(e) - i.Y(e + 1)) -
                    (i.X(e) + t * (i.X(e + 1) - i.X(e))) * (i.X(e + 1) - i.X(e))
              );
            },
            function () {
              var e = Math.floor(r.position);
              return (
                e == i.numberPoints - 1 && e--, e < 0 ? 0 : i.X(e + 1) - i.X(e)
              );
            },
            function () {
              var e = Math.floor(r.position);
              return (
                e == i.numberPoints - 1 && e--, e < 0 ? 0 : i.Y(e + 1) - i.Y(e)
              );
            },
          ],
          u
        );
    else {
      if (i.type != JXG.OBJECT_TYPE_TURTLE)
        throw new Error(
          "JSXGraph: Can't create normal with parent types '" +
            typeof t[0] +
            "' and '" +
            typeof t[1] +
            "'." +
            "\nPossible parent types: [point,line], [point,circle], [glider]"
        );
      s = e.create(
        "line",
        [
          function () {
            var e = Math.floor(r.position),
              t = r.position - e,
              n,
              s;
            for (s = 0; s < i.objects.length; s++) {
              n = i.objects[s];
              if (n.type == JXG.OBJECT_TYPE_CURVE) {
                if (e < n.numberPoints) break;
                e -= n.numberPoints;
              }
            }
            return (
              e == n.numberPoints - 1 && (e--, (t = 1)),
              e < 0
                ? 1
                : (n.Y(e) + t * (n.Y(e + 1) - n.Y(e))) * (n.Y(e) - n.Y(e + 1)) -
                  (n.X(e) + t * (n.X(e + 1) - n.X(e))) * (n.X(e + 1) - n.X(e))
            );
          },
          function () {
            var e = Math.floor(r.position),
              t,
              n;
            for (n = 0; n < i.objects.length; n++) {
              t = i.objects[n];
              if (t.type == JXG.OBJECT_TYPE_CURVE) {
                if (e < t.numberPoints) break;
                e -= t.numberPoints;
              }
            }
            return (
              e == t.numberPoints - 1 && e--, e < 0 ? 0 : t.X(e + 1) - t.X(e)
            );
          },
          function () {
            var e = Math.floor(r.position),
              t,
              n;
            for (n = 0; n < i.objects.length; n++) {
              t = i.objects[n];
              if (t.type == JXG.OBJECT_TYPE_CURVE) {
                if (e < t.numberPoints) break;
                e -= t.numberPoints;
              }
            }
            return (
              e == t.numberPoints - 1 && e--, e < 0 ? 0 : t.Y(e + 1) - t.Y(e)
            );
          },
        ],
        u
      );
    }
    s.parents = [];
    for (o = 0; o < t.length; o++) s.parents.push(t[o].id);
    return (s.elType = "normal"), s;
  }),
  (JXG.createBisector = function (e, t, n) {
    var r, i, s, o;
    if (
      t[0].elementClass == JXG.OBJECT_CLASS_POINT &&
      t[1].elementClass == JXG.OBJECT_CLASS_POINT &&
      t[2].elementClass == JXG.OBJECT_CLASS_POINT
    ) {
      (o = JXG.copyAttributes(n, e.options, "bisector", "point")),
        (r = e.create(
          "point",
          [
            function () {
              return JXG.Math.Geometry.angleBisector(t[0], t[1], t[2], e);
            },
          ],
          o
        )),
        (r.dump = !1);
      for (s = 0; s < 3; s++) t[s].addChild(r);
      return (
        JXG.exists(n.layer) || (n.layer = e.options.layer.line),
        (o = JXG.copyAttributes(n, e.options, "bisector")),
        (i = JXG.createLine(e, [t[1], r], o)),
        (i.point = r),
        (i.elType = "bisector"),
        (i.parents = [t[0].id, t[1].id, t[2].id]),
        (i.subs = { point: r }),
        i
      );
    }
    throw new Error(
      "JSXGraph: Can't create angle bisector with parent types '" +
        typeof t[0] +
        "' and '" +
        typeof t[1] +
        "'." +
        "\nPossible parent types: [point,point,point]"
    );
  }),
  (JXG.createAngularBisectorsOfTwoLines = function (e, t, n) {
    var r = JXG.getReference(e, t[0]),
      i = JXG.getReference(e, t[1]),
      s,
      o,
      u,
      a;
    if (
      r.elementClass != JXG.OBJECT_CLASS_LINE ||
      i.elementClass != JXG.OBJECT_CLASS_LINE
    )
      throw new Error(
        "JSXGraph: Can't create angle bisectors of two lines with parent types '" +
          typeof t[0] +
          "' and '" +
          typeof t[1] +
          "'." +
          "\nPossible parent types: [line,line]"
      );
    return (
      JXG.exists(n.layer) || (n.layer = e.options.layer.line),
      (u = JXG.copyAttributes(n, e.options, "bisectorlines", "line1")),
      (s = e.create(
        "line",
        [
          function () {
            var e = Math.sqrt(
                r.stdform[1] * r.stdform[1] + r.stdform[2] * r.stdform[2]
              ),
              t = Math.sqrt(
                i.stdform[1] * i.stdform[1] + i.stdform[2] * i.stdform[2]
              );
            return r.stdform[0] / e - i.stdform[0] / t;
          },
          function () {
            var e = Math.sqrt(
                r.stdform[1] * r.stdform[1] + r.stdform[2] * r.stdform[2]
              ),
              t = Math.sqrt(
                i.stdform[1] * i.stdform[1] + i.stdform[2] * i.stdform[2]
              );
            return r.stdform[1] / e - i.stdform[1] / t;
          },
          function () {
            var e = Math.sqrt(
                r.stdform[1] * r.stdform[1] + r.stdform[2] * r.stdform[2]
              ),
              t = Math.sqrt(
                i.stdform[1] * i.stdform[1] + i.stdform[2] * i.stdform[2]
              );
            return r.stdform[2] / e - i.stdform[2] / t;
          },
        ],
        u
      )),
      JXG.exists(n.layer) || (n.layer = e.options.layer.line),
      (u = JXG.copyAttributes(n, e.options, "bisectorlines", "line2")),
      (o = e.create(
        "line",
        [
          function () {
            var e = Math.sqrt(
                r.stdform[1] * r.stdform[1] + r.stdform[2] * r.stdform[2]
              ),
              t = Math.sqrt(
                i.stdform[1] * i.stdform[1] + i.stdform[2] * i.stdform[2]
              );
            return r.stdform[0] / e + i.stdform[0] / t;
          },
          function () {
            var e = Math.sqrt(
                r.stdform[1] * r.stdform[1] + r.stdform[2] * r.stdform[2]
              ),
              t = Math.sqrt(
                i.stdform[1] * i.stdform[1] + i.stdform[2] * i.stdform[2]
              );
            return r.stdform[1] / e + i.stdform[1] / t;
          },
          function () {
            var e = Math.sqrt(
                r.stdform[1] * r.stdform[1] + r.stdform[2] * r.stdform[2]
              ),
              t = Math.sqrt(
                i.stdform[1] * i.stdform[1] + i.stdform[2] * i.stdform[2]
              );
            return r.stdform[2] / e + i.stdform[2] / t;
          },
        ],
        u
      )),
      (a = new JXG.Composition({ line1: s, line2: o })),
      (s.dump = !1),
      (o.dump = !1),
      (a.elType = "bisectorlines"),
      (a.parents = [r.id, i.id]),
      (a.subs = { line1: s, line2: o }),
      a
    );
  }),
  (JXG.createCircumcircleMidpoint = function (e, t, n) {
    var r, i;
    if (
      t[0].elementClass == JXG.OBJECT_CLASS_POINT &&
      t[1].elementClass == JXG.OBJECT_CLASS_POINT &&
      t[2].elementClass == JXG.OBJECT_CLASS_POINT
    ) {
      r = JXG.createPoint(
        e,
        [
          function () {
            return JXG.Math.Geometry.circumcenterMidpoint(t[0], t[1], t[2], e);
          },
        ],
        n
      );
      for (i = 0; i < 3; i++) t[i].addChild(r);
      return (
        (r.elType = "circumcenter"),
        (r.parents = [t[0].id, t[1].id, t[2].id]),
        (r.generatePolynomial = function () {
          var e = a.symbolic.x,
            t = a.symbolic.y,
            n = b.symbolic.x,
            i = b.symbolic.y,
            s = c.symbolic.x,
            o = c.symbolic.y,
            u = r.symbolic.x,
            f = r.symbolic.y,
            l = [
              "((",
              u,
              ")-(",
              e,
              "))^2+((",
              f,
              ")-(",
              t,
              "))^2-((",
              u,
              ")-(",
              n,
              "))^2-((",
              f,
              ")-(",
              i,
              "))^2",
            ].join(""),
            h = [
              "((",
              u,
              ")-(",
              e,
              "))^2+((",
              f,
              ")-(",
              t,
              "))^2-((",
              u,
              ")-(",
              s,
              "))^2-((",
              f,
              ")-(",
              o,
              "))^2",
            ].join("");
          return [l, h];
        }),
        r
      );
    }
    throw new Error(
      "JSXGraph: Can't create circumcircle midpoint with parent types '" +
        typeof t[0] +
        "', '" +
        typeof t[1] +
        "' and '" +
        typeof t[2] +
        "'." +
        "\nPossible parent types: [point,point,point]"
    );
  }),
  (JXG.createIncenter = function (e, t, n) {
    var r, i, s, o, u;
    if (
      !(
        t.length >= 3 &&
        JXG.isPoint(t[0]) &&
        JXG.isPoint(t[1]) &&
        JXG.isPoint(t[2])
      )
    )
      throw new Error(
        "JSXGraph: Can't create incenter with parent types '" +
          typeof t[0] +
          "', '" +
          typeof t[1] +
          "' and '" +
          typeof t[2] +
          "'." +
          "\nPossible parent types: [point,point,point]"
      );
    return (
      (s = t[0]),
      (o = t[1]),
      (u = t[2]),
      (r = e.create(
        "point",
        [
          function () {
            var t, n, r;
            return (
              (t = Math.sqrt(
                (o.X() - u.X()) * (o.X() - u.X()) +
                  (o.Y() - u.Y()) * (o.Y() - u.Y())
              )),
              (n = Math.sqrt(
                (s.X() - u.X()) * (s.X() - u.X()) +
                  (s.Y() - u.Y()) * (s.Y() - u.Y())
              )),
              (r = Math.sqrt(
                (o.X() - s.X()) * (o.X() - s.X()) +
                  (o.Y() - s.Y()) * (o.Y() - s.Y())
              )),
              new JXG.Coords(
                JXG.COORDS_BY_USER,
                [
                  (t * s.X() + n * o.X() + r * u.X()) / (t + n + r),
                  (t * s.Y() + n * o.Y() + r * u.Y()) / (t + n + r),
                ],
                e
              )
            );
          },
        ],
        n
      )),
      (r.elType = "incenter"),
      (r.parents = [t[0].id, t[1].id, t[2].id]),
      r
    );
  }),
  (JXG.createCircumcircle = function (e, t, n) {
    var r, i, s;
    try {
      (s = JXG.copyAttributes(n, e.options, "circumcircle", "center")),
        (r = JXG.createCircumcircleMidpoint(e, t, s)),
        (r.dump = !1),
        JXG.exists(n.layer) || (n.layer = e.options.layer.circle),
        (s = JXG.copyAttributes(n, e.options, "circumcircle")),
        (i = JXG.createCircle(e, [r, t[0]], s)),
        (i.elType = "circumcircle"),
        (i.parents = [t[0].id, t[1].id, t[2].id]),
        (i.subs = { center: r });
    } catch (o) {
      throw new Error(
        "JSXGraph: Can't create circumcircle with parent types '" +
          typeof t[0] +
          "', '" +
          typeof t[1] +
          "' and '" +
          typeof t[2] +
          "'." +
          "\nPossible parent types: [point,point,point]"
      );
    }
    return i;
  }),
  (JXG.createIncircle = function (e, t, n) {
    var r, i, s, o;
    try {
      (s = JXG.copyAttributes(n, e.options, "incircle", "center")),
        (r = JXG.createIncenter(e, t, s)),
        (r.dump = !1),
        JXG.exists(n.layer) || (n.layer = e.options.layer.circle),
        (s = JXG.copyAttributes(n, e.options, "incircle")),
        (i = JXG.createCircle(
          e,
          [
            r,
            function () {
              var e = Math.sqrt(
                  (t[1].X() - t[2].X()) * (t[1].X() - t[2].X()) +
                    (t[1].Y() - t[2].Y()) * (t[1].Y() - t[2].Y())
                ),
                n = Math.sqrt(
                  (t[0].X() - t[2].X()) * (t[0].X() - t[2].X()) +
                    (t[0].Y() - t[2].Y()) * (t[0].Y() - t[2].Y())
                ),
                r = Math.sqrt(
                  (t[1].X() - t[0].X()) * (t[1].X() - t[0].X()) +
                    (t[1].Y() - t[0].Y()) * (t[1].Y() - t[0].Y())
                ),
                i = (e + n + r) / 2;
              return Math.sqrt(((i - e) * (i - n) * (i - r)) / i);
            },
          ],
          s
        )),
        (i.elType = "incircle"),
        (i.parents = [t[0].id, t[1].id, t[2].id]),
        (i.center = r),
        (i.subs = { center: r });
    } catch (u) {
      throw new Error(
        "JSXGraph: Can't create circumcircle with parent types '" +
          typeof t[0] +
          "', '" +
          typeof t[1] +
          "' and '" +
          typeof t[2] +
          "'." +
          "\nPossible parent types: [point,point,point]"
      );
    }
    return i;
  }),
  (JXG.createReflection = function (e, t, n) {
    var r, i, s, o;
    if (
      t[0].elementClass == JXG.OBJECT_CLASS_POINT &&
      t[1].elementClass == JXG.OBJECT_CLASS_LINE
    )
      (i = t[0]), (r = t[1]);
    else {
      if (
        t[1].elementClass != JXG.OBJECT_CLASS_POINT ||
        t[0].elementClass != JXG.OBJECT_CLASS_LINE
      )
        throw new Error(
          "JSXGraph: Can't create reflection point with parent types '" +
            typeof t[0] +
            "' and '" +
            typeof t[1] +
            "'." +
            "\nPossible parent types: [line,point]"
        );
      (i = t[1]), (r = t[0]);
    }
    return (
      (o = JXG.createTransform(e, [r], { type: "reflect" })),
      (s = JXG.createPoint(e, [i, o], n)),
      i.addChild(s),
      r.addChild(s),
      (s.elType = "reflection"),
      (s.parents = [t[0].id, t[1].id]),
      s.prepareUpdate().update(),
      (s.generatePolynomial = function () {
        var e = r.point1.symbolic.x,
          t = r.point1.symbolic.y,
          n = r.point2.symbolic.x,
          o = r.point2.symbolic.y,
          u = i.symbolic.x,
          a = i.symbolic.y,
          f = s.symbolic.x,
          c = s.symbolic.y,
          h = [
            "((",
            c,
            ")-(",
            a,
            "))*((",
            t,
            ")-(",
            o,
            "))+((",
            e,
            ")-(",
            n,
            "))*((",
            f,
            ")-(",
            u,
            "))",
          ].join(""),
          d = [
            "((",
            f,
            ")-(",
            e,
            "))^2+((",
            c,
            ")-(",
            t,
            "))^2-((",
            u,
            ")-(",
            e,
            "))^2-((",
            a,
            ")-(",
            t,
            "))^2",
          ].join("");
        return [h, d];
      }),
      s
    );
  }),
  (JXG.createMirrorPoint = function (e, t, n) {
    var r, i;
    if (!JXG.isPoint(t[0]) || !JXG.isPoint(t[1]))
      throw new Error(
        "JSXGraph: Can't create mirror point with parent types '" +
          typeof t[0] +
          "' and '" +
          typeof t[1] +
          "'." +
          "\nPossible parent types: [point,point]"
      );
    r = JXG.createPoint(
      e,
      [
        function () {
          return JXG.Math.Geometry.rotation(t[0], t[1], Math.PI, e);
        },
      ],
      n
    );
    for (i = 0; i < 2; i++) t[i].addChild(r);
    return (
      (r.elType = "mirrorpoint"),
      (r.parents = [t[0].id, t[1].id]),
      r.prepareUpdate().update(),
      r
    );
  }),
  (JXG.createIntegral = function (e, t, n) {
    var r,
      i,
      s,
      o = 0,
      u = 0,
      a,
      f,
      l,
      c,
      h = 1,
      p,
      d,
      v,
      m,
      g,
      y,
      b;
    if (JXG.isArray(t[0]) && t[1].elementClass == JXG.OBJECT_CLASS_CURVE)
      (r = t[0]), (i = t[1]);
    else {
      if (!JXG.isArray(t[1]) || t[0].elementClass != JXG.OBJECT_CLASS_CURVE)
        throw new Error(
          "JSXGraph: Can't create integral with parent types '" +
            typeof t[0] +
            "' and '" +
            typeof t[1] +
            "'." +
            "\nPossible parent types: [[number|function,number|function],curve]"
        );
      (r = t[1]), (i = t[0]);
    }
    return (
      (o = r[0]),
      (u = r[1]),
      JXG.isFunction(o)
        ? ((a = o),
          (f = function () {
            return i.Y(a());
          }),
          (o = a()))
        : ((a = o), (f = i.Y(o))),
      JXG.isFunction(o)
        ? ((l = u),
          (c = function () {
            return i.Y(l());
          }),
          (u = l()))
        : ((l = u), (c = i.Y(u))),
      u < o && (h = -1),
      (s = JXG.copyAttributes(n, e.options, "integral", "curveLeft")),
      (p = e.create("glider", [a, f, i], s)),
      JXG.isFunction(a) && p.hideElement(),
      (s = JXG.copyAttributes(n, e.options, "integral", "baseLeft")),
      (d = e.create(
        "point",
        [
          function () {
            return p.X();
          },
          0,
        ],
        s
      )),
      (s = JXG.copyAttributes(n, e.options, "integral", "curveRight")),
      (v = e.create("glider", [l, c, i], s)),
      JXG.isFunction(l) && v.hideElement(),
      (s = JXG.copyAttributes(n, e.options, "integral", "baseRight")),
      (m = e.create(
        "point",
        [
          function () {
            return v.X();
          },
          0,
        ],
        s
      )),
      (s = JXG.copyAttributes(n, e.options, "integral")),
      s.withLabel !== !1 &&
        ((s = JXG.copyAttributes(n, e.options, "integral", "label")),
        (y = e.create(
          "text",
          [
            function () {
              return v.X() + 0.2;
            },
            function () {
              return v.Y() - 0.8;
            },
            function () {
              var e = JXG.Math.Numerics.I([d.X(), m.X()], i.Y);
              return "&int; = " + e.toFixed(4);
            },
          ],
          s
        )),
        (y.dump = !1),
        p.addChild(y),
        v.addChild(y)),
      (s = JXG.copyAttributes(n, e.options, "integral")),
      (b = e.create("curve", [[0], [0]], s)),
      (p.dump = !1),
      (d.dump = !1),
      (v.dump = !1),
      (m.dump = !1),
      (b.elType = "integral"),
      (b.parents = [i.id, r]),
      (b.subs = { curveLeft: p, baseLeft: d, curveRight: v, baseRight: m }),
      s.withLabel && (b.subs.label = y),
      (b.updateDataArray = function () {
        var e, t, n, r, s;
        d.X() < m.X() ? ((r = d.X()), (s = m.X())) : ((r = m.X()), (s = d.X())),
          (e = [r, r]),
          (t = [0, i.Y(r)]);
        for (n = 0; n < i.numberPoints; n++)
          r <= i.points[n].usrCoords[1] &&
            i.points[n].usrCoords[1] <= s &&
            (e.push(i.points[n].usrCoords[1]),
            t.push(i.points[n].usrCoords[2]));
        e.push(s),
          t.push(i.Y(s)),
          e.push(s),
          t.push(0),
          e.push(r),
          t.push(0),
          (this.dataX = e),
          (this.dataY = t);
      }),
      p.addChild(b),
      v.addChild(b),
      (b.baseLeft = d),
      (b.baseRight = m),
      (b.curveLeft = p),
      (b.curveRight = v),
      (b.label = { content: y }),
      b
    );
  }),
  (JXG.createLocus = function (e, t, n) {
    var r, i;
    if (
      !JXG.isArray(t) ||
      t.length != 1 ||
      t[0].elementClass != JXG.OBJECT_CLASS_POINT
    )
      throw new Error(
        "JSXGraph: Can't create locus with parent of type other than point.\nPossible parent types: [point]"
      );
    return (
      (i = t[0]),
      (r = e.create("curve", [[null], [null]], n)),
      (r.dontCallServer = !1),
      (r.elType = "locus"),
      (r.parents = [i.id]),
      (r.updateDataArray = function () {
        if (r.board.mode > 0) return;
        var t = JXG.Math.Symbolic.generatePolynomials(e, i, !0).join("|");
        if (t === r.spe) return;
        r.spe = t;
        var n = function (e, t, n, i) {
            (r.dataX = e),
              (r.dataY = t),
              (r.eq = n),
              (r.ctime = i),
              (r.generatePolynomial = (function (e) {
                return function (t) {
                  var n = "(" + t.symbolic.x + ")",
                    r = "(" + t.symbolic.y + ")",
                    i = [],
                    s;
                  for (s = 0; s < e.length; s++)
                    i[s] = e[s]
                      .replace(/\*\*/g, "^")
                      .replace(/x/g, n)
                      .replace(/y/g, r);
                  return i;
                };
              })(n));
          },
          s = JXG.Math.Symbolic.geometricLocusByGroebnerBase(e, i, n);
        n(s.datax, s.datay, s.polynomial, s.exectime);
      }),
      r
    );
  }),
  (JXG.createGrid = function (e, t, n) {
    var r, i;
    return (
      (i = JXG.copyAttributes(n, e.options, "grid")),
      (r = e.create("curve", [[null], [null]], i)),
      (r.elType = "grid"),
      (r.parents = []),
      (r.type = JXG.OBJECT_TYPE_GRID),
      (r.updateDataArray = function () {
        var t = this.visProp.gridx,
          n = this.visProp.gridy,
          i = new JXG.Coords(JXG.COORDS_BY_SCREEN, [0, 0], e),
          s = new JXG.Coords(
            JXG.COORDS_BY_SCREEN,
            [e.canvasWidth, e.canvasHeight],
            e
          ),
          o;
        (e.options.grid.hasGrid = !0),
          i.setCoordinates(JXG.COORDS_BY_USER, [
            Math.floor(i.usrCoords[1] / t) * t,
            Math.ceil(i.usrCoords[2] / n) * n,
          ]),
          s.setCoordinates(JXG.COORDS_BY_USER, [
            Math.ceil(s.usrCoords[1] / t) * t,
            Math.floor(s.usrCoords[2] / n) * n,
          ]),
          (r.dataX = []),
          (r.dataY = []);
        for (o = i.usrCoords[2]; o > s.usrCoords[2] - n; o -= n)
          r.dataX.push(i.usrCoords[1], s.usrCoords[1], NaN),
            r.dataY.push(o, o, NaN);
        for (o = i.usrCoords[1]; o < s.usrCoords[1] + t; o += t)
          r.dataX.push(o, o, NaN),
            r.dataY.push(i.usrCoords[2], s.usrCoords[2], NaN);
      }),
      (r.hasPoint = function () {
        return !1;
      }),
      e.grids.push(r),
      r
    );
  }),
  (JXG.createInequality = function (e, t, n) {
    var r, i, s;
    s = JXG.copyAttributes(n, e.options, "inequality");
    if (t[0].elementClass === JXG.OBJECT_CLASS_LINE)
      (i = e.create("curve", [[], []], s)),
        (i.hasPoint = function () {
          return !1;
        }),
        (i.updateDataArray = function () {
          var n = e.getBoundingBox(),
            r = s.inverse ? -1 : 1,
            i = 1.5,
            o = i * Math.max(n[2] - n[0], n[1] - n[3]),
            u,
            a = {
              coords: {
                usrCoords: [1, (n[0] + n[2]) / 2, s.inverse ? n[1] : n[3]],
              },
            },
            f = t[0].stdform.slice(1),
            l = f,
            c,
            h;
          f[1] > 0 && ((f = JXG.Math.Statistics.multiply(f, -1)), (l = f)),
            (u =
              i *
              Math.max(
                JXG.Math.Geometry.perpendicular(t[0], a, e)[0].distance(
                  JXG.COORDS_BY_USER,
                  a.coords
                ),
                o
              )),
            (u *= r),
            (a = {
              coords: { usrCoords: [1, (n[0] + n[2]) / 2, (n[1] + n[3]) / 2] },
            }),
            (a = JXG.Math.Geometry.perpendicular(t[0], a, e)[0].usrCoords),
            (c = [1, a[1] + f[1] * o, a[2] - f[0] * o]),
            (h = [1, a[1] - l[1] * o, a[2] + l[0] * o]),
            (this.dataX = [c[1], c[1] + f[0] * u, h[1] + l[0] * u, h[1], c[1]]),
            (this.dataY = [c[2], c[2] + f[1] * u, h[2] + l[1] * u, h[2], c[2]]);
        });
    else {
      r = JXG.createFunction(t[0]);
      if (!JXG.exists(r))
        throw new Error(
          "JSXGraph: Can't create area with the given parents.\nPossible parent types: [line], [function]"
        );
    }
    return i;
  }),
  JXG.JSXGraph.registerElement("arrowparallel", JXG.createArrowParallel),
  JXG.JSXGraph.registerElement("bisector", JXG.createBisector),
  JXG.JSXGraph.registerElement(
    "bisectorlines",
    JXG.createAngularBisectorsOfTwoLines
  ),
  JXG.JSXGraph.registerElement("circumcircle", JXG.createCircumcircle),
  JXG.JSXGraph.registerElement(
    "circumcirclemidpoint",
    JXG.createCircumcircleMidpoint
  ),
  JXG.JSXGraph.registerElement("circumcenter", JXG.createCircumcircleMidpoint),
  JXG.JSXGraph.registerElement("incenter", JXG.createIncenter),
  JXG.JSXGraph.registerElement("incircle", JXG.createIncircle),
  JXG.JSXGraph.registerElement("integral", JXG.createIntegral),
  JXG.JSXGraph.registerElement("midpoint", JXG.createMidpoint),
  JXG.JSXGraph.registerElement("mirrorpoint", JXG.createMirrorPoint),
  JXG.JSXGraph.registerElement("normal", JXG.createNormal),
  JXG.JSXGraph.registerElement(
    "orthogonalprojection",
    JXG.createOrthogonalProjection
  ),
  JXG.JSXGraph.registerElement("parallel", JXG.createParallel),
  JXG.JSXGraph.registerElement("parallelpoint", JXG.createParallelPoint),
  JXG.JSXGraph.registerElement("perpendicular", JXG.createPerpendicular),
  JXG.JSXGraph.registerElement(
    "perpendicularpoint",
    JXG.createPerpendicularPoint
  ),
  JXG.JSXGraph.registerElement(
    "perpendicularsegment",
    JXG.createPerpendicularSegment
  ),
  JXG.JSXGraph.registerElement("reflection", JXG.createReflection),
  JXG.JSXGraph.registerElement("locus", JXG.createLocus),
  JXG.JSXGraph.registerElement("grid", JXG.createGrid),
  JXG.JSXGraph.registerElement("inequality", JXG.createInequality),
  (JXG.Text = function (e, t, n, r) {
    this.constructor(e, r, JXG.OBJECT_TYPE_TEXT, JXG.OBJECT_CLASS_OTHER);
    var i;
    (this.content = ""),
      (this.plaintext = ""),
      (this.isDraggable = !1),
      (this.needsSizeUpdate = !1);
    if ((this.element = JXG.getRef(this.board, r.anchor))) {
      var s;
      this.visProp.islabel
        ? (this.relativeCoords = new JXG.Coords(
            JXG.COORDS_BY_SCREEN,
            [parseFloat(n[0]), parseFloat(n[1])],
            this.board
          ))
        : (this.relativeCoords = new JXG.Coords(
            JXG.COORDS_BY_USER,
            [parseFloat(n[0]), parseFloat(n[1])],
            this.board
          )),
        this.element.addChild(this),
        (this.X = function () {
          var e, t, n;
          return this.visProp.islabel
            ? ((e = parseFloat(this.visProp.offset[0])),
              (n = this.element.getLabelAnchor()),
              (t = new JXG.Coords(
                JXG.COORDS_BY_SCREEN,
                [e + this.relativeCoords.scrCoords[1] + n.scrCoords[1], 0],
                this.board
              )),
              t.usrCoords[1])
            : ((n = this.element.getTextAnchor()),
              this.relativeCoords.usrCoords[1] + n.usrCoords[1]);
        }),
        (this.Y = function () {
          var e, t, n;
          return this.visProp.islabel
            ? ((e = -parseFloat(this.visProp.offset[1])),
              (n = this.element.getLabelAnchor()),
              (t = new JXG.Coords(
                JXG.COORDS_BY_SCREEN,
                [0, e + this.relativeCoords.scrCoords[2] + n.scrCoords[2]],
                this.board
              )),
              t.usrCoords[2])
            : ((n = this.element.getTextAnchor()),
              this.relativeCoords.usrCoords[2] + n.usrCoords[2]);
        }),
        (this.coords = new JXG.Coords(
          JXG.COORDS_BY_SCREEN,
          [0, 0],
          this.board
        )),
        (this.isDraggable = !0);
    } else
      JXG.isNumber(n[0]) && JXG.isNumber(n[1]) && (this.isDraggable = !0),
        (this.X = JXG.createFunction(n[0], this.board, null, !0)),
        (this.Y = JXG.createFunction(n[1], this.board, null, !0)),
        (this.coords = new JXG.Coords(
          JXG.COORDS_BY_USER,
          [this.X(), this.Y()],
          this.board
        ));
    return (
      (this.Z = JXG.createFunction(1, this.board, "")),
      (this.size = [1, 1]),
      (this.id = this.board.setId(this, "T")),
      this.board.renderer.drawText(this),
      this.setText(t),
      this.updateSize(),
      this.visProp.visible || this.board.renderer.hide(this),
      typeof this.content == "string" && this.notifyParents(this.content),
      (this.elType = "text"),
      (this.methodMap = JXG.deepCopy(this.methodMap, {
        setText: "setTextJessieCode",
        free: "free",
        move: "setCoords",
      })),
      this
    );
  }),
  (JXG.Text.prototype = new JXG.GeometryElement()),
  JXG.extend(JXG.Text.prototype, {
    hasPoint: function (e, t) {
      var n,
        r,
        i,
        s,
        o = this.board.options.precision.hasPoint;
      return (
        this.visProp.anchorx === "right"
          ? (n = this.coords.scrCoords[1] - this.size[0])
          : this.visProp.anchorx === "middle"
          ? (n = this.coords.scrCoords[1] - 0.5 * this.size[0])
          : (n = this.coords.scrCoords[1]),
        (r = n + this.size[0]),
        this.visProp.anchory === "top"
          ? (s = this.coords.scrCoords[2] + this.size[1])
          : this.visProp.anchorx === "middle"
          ? (s = this.coords.scrCoords[2] + 0.5 * this.size[1])
          : (s = this.coords.scrCoords[2]),
        (i = s - this.size[1]),
        t >= i - o &&
          t <= s + o &&
          ((e >= n - o && e <= n + 2 * o) || (e >= r - 2 * o && e <= r + o))
      );
    },
    _setText: function (e) {
      return (
        (this.needsSizeUpdate = !1),
        typeof e == "function"
          ? ((this.updateText = function () {
              this.plaintext = e();
            }),
            (this.needsSizeUpdate = !0))
          : (JXG.isNumber(e)
              ? (this.content = e.toFixed(this.visProp.digits))
              : this.visProp.useasciimathml
              ? ((this.content = "'`" + e + "`'"), (this.needsSizeUpdate = !0))
              : (this.content = this.generateTerm(e)),
            (this.updateText = new Function(
              "this.plaintext = " + this.content + "; "
            ))),
        this.updateText(),
        this.prepareUpdate().update().updateRenderer(),
        this
      );
    },
    setTextJessieCode: function (e) {
      var t;
      return (
        (this.visProp.castext = e),
        typeof e == "function"
          ? (t = function () {
              return e().replace(/</g, "&lt;").replace(/>/g, "&gt;");
            })
          : JXG.isNumber(e)
          ? (t = e)
          : (t = e.replace(/</g, "&lt;").replace(/>/g, "&gt;")),
        this._setText(t)
      );
    },
    setText: function (e) {
      this._setText(e);
    },
    updateSize: function () {
      var e;
      if (typeof document == "undefined") return this;
      if (
        this.visProp.display == "html" &&
        this.board.renderer.type !== "vml" &&
        this.board.renderer.type !== "no"
      )
        this.size = [this.rendNode.offsetWidth, this.rendNode.offsetHeight];
      else if (
        this.visProp.display === "internal" &&
        this.board.renderer.type === "svg"
      )
        try {
          (e = this.rendNode.getBBox()), (this.size = [e.width, e.height]);
        } catch (t) {}
      else if (
        this.board.renderer.type === "vml" ||
        (this.visProp.display === "internal" &&
          this.board.renderer.type === "canvas")
      )
        this.size = [
          parseFloat(this.visProp.fontsize) * this.plaintext.length * 0.45,
          parseFloat(this.visProp.fontsize) * 0.9,
        ];
      return this;
    },
    getSize: function () {
      return this.size;
    },
    setCoords: function (e, t) {
      return (
        JXG.isArray(e) && e.length > 1 && ((t = e[1]), (e = e[0])),
        (this.X = function () {
          return e;
        }),
        (this.Y = function () {
          return t;
        }),
        this.coords.setCoordinates(JXG.COORDS_BY_USER, [e, t]),
        this.prepareUpdate().update().updateRenderer(),
        this
      );
    },
    free: function () {
      (this.X = JXG.createFunction(this.X(), this.board, "")),
        (this.Y = JXG.createFunction(this.Y(), this.board, "")),
        (this.isDraggable = !0);
    },
    update: function () {
      var e, t, n;
      return (
        this.needsUpdate &&
          (this.updateCoords(),
          this.updateText(),
          this.needsSizeUpdate && this.updateSize(),
          this.updateTransform()),
        this
      );
    },
    updateCoords: function () {
      this.coords.setCoordinates(JXG.COORDS_BY_USER, [this.X(), this.Y()]);
    },
    updateRenderer: function () {
      return (
        this.needsUpdate &&
          (this.board.renderer.updateText(this), (this.needsUpdate = !1)),
        this
      );
    },
    updateTransform: function () {
      var e;
      if (this.transformations.length == 0) return;
      for (e = 0; e < this.transformations.length; e++)
        this.transformations[e].update();
      return this;
    },
    generateTerm: function (e) {
      var t,
        n = '""',
        r;
      (e = e || ""),
        (e = e.replace(/\r/g, "")),
        (e = e.replace(/\n/g, "")),
        (e = e.replace(/\"/g, '\\"')),
        (e = e.replace(/\'/g, "\\'")),
        (e = e.replace(/&amp;arc;/g, "&ang;")),
        (e = e.replace(/<arc\s*\/>/g, "&ang;")),
        (e = e.replace(/<sqrt\s*\/>/g, "&radic;"));
      var i;
      i = e.indexOf("<value>");
      var s = e.indexOf("</value>");
      if (i >= 0) {
        this.needsSizeUpdate = !0;
        while (i >= 0)
          (n +=
            ' + "' +
            JXG.GeonextParser.replaceSub(
              JXG.GeonextParser.replaceSup(e.slice(0, i))
            ) +
            '"'),
            (r = e.slice(i + 7, s)),
            (t = JXG.GeonextParser.geonext2JS(r, this.board)),
            (t = t.replace(/\\"/g, '"')),
            (t = t.replace(/\\'/g, "'")),
            t.indexOf("toFixed") < 0
              ? JXG.isNumber(
                  JXG.bind(new Function("return " + t + ";"), this)()
                )
                ? (n += "+(" + t + ").toFixed(" + this.visProp.digits + ")")
                : (n += "+(" + t + ")")
              : (n += "+(" + t + ")"),
            (e = e.slice(s + 8)),
            (i = e.indexOf("<value>")),
            (s = e.indexOf("</value>"));
      }
      return (
        (n +=
          ' + "' +
          JXG.GeonextParser.replaceSub(JXG.GeonextParser.replaceSup(e)) +
          '"'),
        (n = n.replace(/<overline>/g, "<span style=text-decoration:overline>")),
        (n = n.replace(/<\/overline>/g, "</span>")),
        (n = n.replace(/<arrow>/g, "<span style=text-decoration:overline>")),
        (n = n.replace(/<\/arrow>/g, "</span>")),
        (n = n.replace(/&amp;/g, "&")),
        n
      );
    },
    notifyParents: function (e) {
      var t = null;
      do {
        var n = /<value>([\w\s\*\/\^\-\+\(\)\[\],<>=!]+)<\/value>/;
        (t = n.exec(e)),
          t != null &&
            (JXG.GeonextParser.findDependencies(this, t[1], this.board),
            (e = e.substr(t.index)),
            (e = e.replace(n, "")));
      } while (t != null);
      return this;
    },
    bounds: function () {
      var e = this.coords.usrCoords;
      return this.visProp.islabel
        ? [0, 0, 0, 0]
        : [e[1], e[2] + this.size[1], e[1] + this.size[0], e[2]];
    },
    setPositionDirectly: function (e, t, n) {
      var r = new JXG.Coords(e, t, this.board),
        i = new JXG.Coords(e, n, this.board),
        s,
        o;
      return (
        this.relativeCoords
          ? this.visProp.islabel
            ? ((s = JXG.Math.Statistics.subtract(r.scrCoords, i.scrCoords)),
              (this.relativeCoords.scrCoords[1] += s[1]),
              (this.relativeCoords.scrCoords[2] += s[2]))
            : ((s = JXG.Math.Statistics.subtract(r.usrCoords, i.usrCoords)),
              (this.relativeCoords.usrCoords[1] += s[1]),
              (this.relativeCoords.usrCoords[2] += s[2]))
          : ((s = JXG.Math.Statistics.subtract(r.usrCoords, i.usrCoords)),
            (o = [this.Z(), this.X(), this.Y()]),
            (this.X = JXG.createFunction(o[1] + s[1], this.board, "")),
            (this.Y = JXG.createFunction(o[2] + s[2], this.board, ""))),
        this
      );
    },
  }),
  (JXG.createText = function (e, t, n) {
    var r,
      i = JXG.copyAttributes(n, e.options, "text");
    return (
      (i.anchor = i.parent || i.anchor),
      (r = new JXG.Text(e, t[t.length - 1], t, i)),
      typeof t[t.length - 1] != "function" && (r.parents = t),
      JXG.evaluate(i.rotate) != 0 &&
        i.display == "internal" &&
        r.addRotation(JXG.evaluate(i.rotate)),
      r
    );
  }),
  JXG.JSXGraph.registerElement("text", JXG.createText),
  (JXG.Image = function (e, t, n, r, i) {
    this.constructor(e, i, JXG.OBJECT_TYPE_IMAGE, JXG.OBJECT_CLASS_OTHER),
      (this.initialCoords = new JXG.Coords(JXG.COORDS_BY_USER, n, this.board)),
      !JXG.isFunction(n[0]) && !JXG.isFunction(n[1]) && (this.isDraggable = !0),
      (this.X = JXG.createFunction(n[0], this.board, "")),
      (this.Y = JXG.createFunction(n[1], this.board, "")),
      (this.Z = JXG.createFunction(1, this.board, "")),
      (this.W = JXG.createFunction(r[0], this.board, "")),
      (this.H = JXG.createFunction(r[1], this.board, "")),
      (this.coords = new JXG.Coords(
        JXG.COORDS_BY_USER,
        [this.X(), this.Y()],
        this.board
      )),
      (this.usrSize = [this.W(), this.H()]),
      (this.size = [
        Math.abs(this.usrSize[0] * e.unitX),
        Math.abs(this.usrSize[1] * e.unitY),
      ]),
      (this.url = t),
      (this.elType = "image"),
      (this.span = [
        [this.Z(), this.X(), this.Y()],
        [this.Z(), this.W(), 0],
        [this.Z(), 0, this.H()],
      ]),
      (this.parent = JXG.getRef(i.anchor)),
      (this.id = this.board.setId(this, "Im")),
      this.board.renderer.drawImage(this),
      this.visProp.visible || this.board.renderer.hide(this);
  }),
  (JXG.Image.prototype = new JXG.GeometryElement()),
  JXG.extend(JXG.Image.prototype, {
    hasPoint: function (e, t) {
      var n = this.transformations.length,
        r,
        i,
        s,
        o,
        u,
        a,
        f;
      if (n == 0)
        return (
          (r = e - this.coords.scrCoords[1]),
          (i = this.coords.scrCoords[2] - t),
          (s = this.board.options.precision.hasPoint),
          r >= -s && r - this.size[0] <= s && i >= -s && i - this.size[1] <= s
            ? !0
            : !1
        );
      (o = new JXG.Coords(JXG.COORDS_BY_SCREEN, [e, t], this.board)),
        (o = o.usrCoords),
        (u = [
          o[0] - this.span[0][0],
          o[1] - this.span[0][1],
          o[2] - this.span[0][2],
        ]),
        (f = JXG.Math.innerProduct),
        (a = f(u, this.span[1]));
      if (0 <= a && a <= f(this.span[1], this.span[1])) {
        a = f(u, this.span[2]);
        if (0 <= a && a <= f(this.span[2], this.span[2])) return !0;
      }
      return !1;
    },
    update: function () {
      return (
        this.needsUpdate &&
          (this.updateCoords(),
          (this.usrSize = [this.W(), this.H()]),
          (this.size = [
            Math.abs(this.usrSize[0] * this.board.unitX),
            Math.abs(this.usrSize[1] * this.board.unitY),
          ]),
          this.updateTransform(),
          this.updateSpan()),
        this
      );
    },
    updateRenderer: function () {
      return (
        this.needsUpdate &&
          (this.board.renderer.updateImage(this), (this.needsUpdate = !1)),
        this
      );
    },
    updateTransform: function () {
      var e,
        t = this.transformations.length;
      if (t > 0) for (e = 0; e < t; e++) this.transformations[e].update();
      return this;
    },
    updateCoords: function () {
      this.coords.setCoordinates(JXG.COORDS_BY_USER, [this.X(), this.Y()]);
    },
    updateSize: function () {
      this.coords.setCoordinates(JXG.COORDS_BY_USER, [this.W(), this.H()]);
    },
    updateSpan: function () {
      var e,
        t,
        n = this.transformations.length,
        r = [];
      if (n == 0)
        this.span = [
          [this.Z(), this.X(), this.Y()],
          [this.Z(), this.W(), 0],
          [this.Z(), 0, this.H()],
        ];
      else {
        (r[0] = [this.Z(), this.X(), this.Y()]),
          (r[1] = [this.Z(), this.X() + this.W(), this.Y()]),
          (r[2] = [this.Z(), this.X(), this.Y() + this.H()]);
        for (e = 0; e < n; e++)
          for (t = 0; t < 3; t++)
            r[t] = JXG.Math.matVecMult(this.transformations[e].matrix, r[t]);
        for (t = 0; t < 3; t++)
          (r[t][1] /= r[t][0]), (r[t][2] /= r[t][0]), (r[t][0] /= r[t][0]);
        for (t = 1; t < 3; t++)
          (r[t][0] -= r[0][0]), (r[t][1] -= r[0][1]), (r[t][2] -= r[0][2]);
        this.span = r;
      }
      return this;
    },
    addTransform: function (e) {
      if (JXG.isArray(e))
        for (var t = 0; t < e.length; t++) this.transformations.push(e[t]);
      else this.transformations.push(e);
    },
    setPositionDirectly: function (e, t, n) {
      var r = new JXG.Coords(e, t, this.board),
        i = new JXG.Coords(e, n, this.board),
        s,
        o = [this.Z(), this.X(), this.Y()];
      return (
        (s = JXG.Math.Statistics.subtract(r.usrCoords, i.usrCoords)),
        (this.X = JXG.createFunction(o[1] + s[1], this.board, "")),
        (this.Y = JXG.createFunction(o[2] + s[2], this.board, "")),
        this
      );
    },
  }),
  (JXG.createImage = function (e, t, n) {
    var r, i, s;
    return (
      (i = JXG.copyAttributes(n, e.options, "image")),
      (s = new JXG.Image(e, t[0], t[1], t[2], i)),
      JXG.evaluate(i.rotate) != 0 && s.addRotation(JXG.evaluate(i.rotate)),
      s
    );
  }),
  JXG.JSXGraph.registerElement("image", JXG.createImage),
  (JXG.createSlider = function (e, t, n) {
    var r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T;
    return (
      (r = t[0]),
      (i = t[1]),
      (s = t[2][0]),
      (o = t[2][1]),
      (u = t[2][2]),
      (a = u - s),
      (x = JXG.copyAttributes(n, e.options, "slider")),
      (E = x.withticks),
      (w = x.withlabel),
      (S = x.snapwidth),
      (T = x.precision),
      (x = JXG.copyAttributes(n, e.options, "slider", "point1")),
      (f = e.create("point", r, x)),
      (x = JXG.copyAttributes(n, e.options, "slider", "point2")),
      (l = e.create("point", i, x)),
      e.create("group", [f, l]),
      (x = JXG.copyAttributes(n, e.options, "slider", "baseline")),
      (c = e.create("segment", [f, l], x)),
      c.updateStdform(),
      E &&
        ((x = JXG.copyAttributes(n, e.options, "slider", "ticks")),
        (h = 2),
        (p = e.create("ticks", [c, l.Dist(f) / h], x))),
      (d = r[0] + ((i[0] - r[0]) * (o - s)) / (u - s)),
      (v = r[1] + ((i[1] - r[1]) * (o - s)) / (u - s)),
      (x = JXG.copyAttributes(n, e.options, "slider")),
      (x.withLabel = !1),
      (m = e.create("glider", [d, v, c], x)),
      m.setProperty({ snapwidth: S }),
      (x = JXG.copyAttributes(n, e.options, "slider", "highline")),
      (g = e.create("segment", [f, m], x)),
      (m.Value = function () {
        return m.visProp.snapwidth === -1
          ? this.position * a + s
          : Math.round((this.position * a + s) / this.visProp.snapwidth) *
              this.visProp.snapwidth;
      }),
      (m.methodMap = JXG.deepCopy(m.methodMap, { Value: "Value" })),
      (m._smax = u),
      (m._smin = s),
      w &&
        (n.name && n["name"] != "" ? (y = n.name + " = ") : (y = ""),
        (x = JXG.copyAttributes(n, e.options, "slider", "label")),
        (b = e.create(
          "text",
          [
            function () {
              return (l.X() - f.X()) * 0.05 + l.X();
            },
            function () {
              return (l.Y() - f.Y()) * 0.05 + l.Y();
            },
            function () {
              return y + m.Value().toFixed(T);
            },
          ],
          x
        )),
        (m.label.content = b)),
      (m.point1 = f),
      (m.point2 = l),
      (m.baseline = c),
      (m.highline = g),
      E && (m.ticks = p),
      (m.remove = function () {
        w && e.removeObject(b),
          e.removeObject(g),
          E && c.removeTicks(p),
          e.removeObject(c),
          e.removeObject(l),
          e.removeObject(f),
          JXG.Point.prototype.remove.call(m);
      }),
      (f.dump = !1),
      (l.dump = !1),
      (c.dump = !1),
      (g.dump = !1),
      (m.elType = "slider"),
      (m.parents = t),
      (m.subs = { point1: f, point2: l, baseLine: c, highLine: g }),
      E && ((p.dump = !1), (m.subs.ticks = p)),
      m
    );
  }),
  JXG.JSXGraph.registerElement("slider", JXG.createSlider),
  (JXG.Chart = function (e, t, n) {
    this.constructor(e, n);
    var r, i, s, o, u, a;
    if (!JXG.isArray(t) || t.length === 0)
      throw new Error("JSXGraph: Can't create a chart without data");
    this.elements = [];
    if (JXG.isNumber(t[0])) {
      (i = t), (r = []);
      for (s = 0; s < i.length; s++) r[s] = s + 1;
    } else if (t.length === 1 && JXG.isArray(t[0])) {
      (i = t[0]), (r = []), (a = JXG.evaluate(i).length);
      for (s = 0; s < a; s++) r[s] = s + 1;
    } else
      t.length === 2 &&
        ((a = Math.min(t[0].length, t[1].length)),
        (r = t[0].slice(0, a)),
        (i = t[1].slice(0, a)));
    if (JXG.isArray(i) && i.length === 0)
      throw new Error("JSXGraph: Can't create charts without data.");
    u = n.chartstyle.replace(/ /g, "").split(",");
    for (s = 0; s < u.length; s++) {
      switch (u[s]) {
        case "bar":
          o = this.drawBar(e, r, i, n);
          break;
        case "line":
          o = this.drawLine(e, r, i, n);
          break;
        case "fit":
          o = this.drawFit(e, r, i, n);
          break;
        case "spline":
          o = this.drawSpline(e, r, i, n);
          break;
        case "pie":
          o = this.drawPie(e, i, n);
          break;
        case "point":
          o = this.drawPoints(e, r, i, n);
          break;
        case "radar":
          o = this.drawRadar(e, t, n);
      }
      this.elements.push(o);
    }
    return (this.id = this.board.setId(this, "Chart")), this.elements;
  }),
  (JXG.Chart.prototype = new JXG.GeometryElement()),
  JXG.extend(JXG.Chart.prototype, {
    drawLine: function (e, t, n, r) {
      return (
        (r.fillcolor = "none"),
        (r.highlightfillcolor = "none"),
        e.create("curve", [t, n], r)
      );
    },
    drawSpline: function (e, t, n, r) {
      return (
        (r.fillColor = "none"),
        (r.highlightfillcolor = "none"),
        e.create("spline", [t, n], r)
      );
    },
    drawFit: function (e, t, n, r) {
      var i = r.degree;
      return (
        (i =
          !JXG.exists(i) || parseInt(i) == NaN || parseInt(i) < 1
            ? 1
            : parseInt(i)),
        (r.fillcolor = "none"),
        (r.highlightfillcolor = "none"),
        e.create(
          "functiongraph",
          [JXG.Math.Numerics.regressionPolynomial(i, t, n)],
          r
        )
      );
    },
    drawBar: function (e, t, n, r) {
      var i,
        s = [],
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m = [],
        g = { fixed: !0, withLabel: !1, visible: !1, name: "" };
      JXG.exists(r.fillopacity) || (r.fillopacity = 0.6);
      if (r && r.width) l = r.width;
      else {
        if (t.length <= 1) l = 1;
        else {
          l = t[1] - t[0];
          for (i = 1; i < t.length - 1; i++)
            l = t[i + 1] - t[i] < l ? t[i + 1] - t[i] : l;
        }
        l *= 0.8;
      }
      (u = r.fillcolor), (a = parseFloat(e.options.text.fontSize));
      for (i = 0; i < t.length; i++)
        isNaN(JXG.evaluate(t[i])) || isNaN(n[i]),
          JXG.isFunction(t[i])
            ? ((c = function () {
                return t[i]() - l * 0.5;
              }),
              (h = function () {
                return t[i]();
              }),
              (p = function () {
                return t[i]() + l * 0.5;
              }))
            : ((c = t[i] - l * 0.5), (h = t[i]), (p = t[i] + l * 0.5)),
          (d = n[i]),
          r.dir == "horizontal"
            ? ((m[0] = e.create("point", [0, c], g)),
              (m[1] = e.create("point", [d, c], g)),
              (m[2] = e.create("point", [d, p], g)),
              (m[3] = e.create("point", [0, p], g)),
              JXG.exists(r.labels) &&
                JXG.exists(r.labels[i]) &&
                ((o = r.labels[i].toString().length),
                (o = (2 * o * a) / e.unitX),
                d >= 0 ? (d += (a * 0.5) / e.unitX) : (d -= (a * o) / e.unitX),
                (h -= (a * 0.2) / e.unitY),
                (f = e.create("text", [d, h, r.labels[i]], r))))
            : ((m[0] = e.create("point", [c, 0], g)),
              (m[1] = e.create("point", [c, d], g)),
              (m[2] = e.create("point", [p, d], g)),
              (m[3] = e.create("point", [p, 0], g)),
              JXG.exists(r.labels) &&
                JXG.exists(r.labels[i]) &&
                ((o = r.labels[i].toString().length),
                (o = (0.6 * o * a) / e.unitX),
                d >= 0 ? (d += (a * 0.5) / e.unitY) : (d -= (a * 1) / e.unitY),
                (f = e.create("text", [h - o * 0.5, d, r.labels[i]], r)))),
          (r.withlines = !1),
          JXG.exists(r.colors) &&
            JXG.isArray(r.colors) &&
            ((v = r.colors), (r.fillcolor = v[i % v.length])),
          (s[i] = e.create("polygon", m, r)),
          JXG.exists(r.labels) && JXG.exists(r.labels[i]) && (s[i].text = f);
      return s;
    },
    drawPoints: function (e, t, n, r) {
      var i,
        s = [],
        o = r.infoboxarray;
      (r.fixed = !0), (r.name = "");
      for (i = 0; i < t.length; i++)
        (r.infoboxtext = o ? o[i % o.length] : !1),
          (s[i] = e.create("point", [t[i], n[i]], r));
      return s;
    },
    drawPie: function (e, t, n) {
      var r,
        i = [],
        s = [],
        o = JXG.Math.Statistics.sum(t),
        u = n.colors,
        a = n.highlightcolors,
        f = n.labels,
        l = n.radius || 4,
        c = l,
        h = n.center || [0, 0],
        p = h[0],
        d = h[1],
        v,
        m = { fixed: !0, withLabel: !1, visible: !1, name: "" };
      if (!JXG.isArray(f)) {
        f = [];
        for (r = 0; r < t.length; r++) f[r] = "";
      }
      JXG.isFunction(l) ||
        (c = function () {
          return l;
        }),
        (n.highlightonsector = n.highlightonsector || !1),
        (n.straightfirst = !1),
        (n.straightlast = !1),
        (v = e.create("point", [p, d], m)),
        (i[0] = e.create(
          "point",
          [
            function () {
              return c() + p;
            },
            function () {
              return d;
            },
          ],
          m
        ));
      for (r = 0; r < t.length; r++)
        (i[r + 1] = e.create(
          "point",
          [
            (function (e) {
              return function () {
                var n,
                  r = 0,
                  i,
                  s;
                for (i = 0; i <= e; i++) r += parseFloat(JXG.evaluate(t[i]));
                n = r;
                for (i = e + 1; i < t.length; i++)
                  n += parseFloat(JXG.evaluate(t[i]));
                return (
                  (s = n != 0 ? (2 * Math.PI * r) / n : 0),
                  c() * Math.cos(s) + p
                );
              };
            })(r),
            (function (e) {
              return function () {
                var n,
                  r = 0,
                  i,
                  s;
                for (i = 0; i <= e; i++) r += parseFloat(JXG.evaluate(t[i]));
                n = r;
                for (i = e + 1; i < t.length; i++)
                  n += parseFloat(JXG.evaluate(t[i]));
                return (
                  (s = n != 0 ? (2 * Math.PI * r) / n : 0),
                  c() * Math.sin(s) + d
                );
              };
            })(r),
          ],
          m
        )),
          (n.name = f[r]),
          (n.withlabel = n.name != ""),
          (n.fillcolor = u && u[r % u.length]),
          (n.labelcolor = u && u[r % u.length]),
          (n.highlightfillcolor = a && a[r % a.length]),
          (s[r] = e.create("sector", [v, i[r], i[r + 1]], n)),
          n.highlightonsector && (s[r].hasPoint = s[r].hasPointSector),
          n.highlightbysize &&
            ((s[r].highlight = function () {
              if (!this.highlighted) {
                (this.highlighted = !0), this.board.renderer.highlight(this);
                var e =
                    -this.point1.coords.usrCoords[1] +
                    this.point2.coords.usrCoords[1],
                  t =
                    -this.point1.coords.usrCoords[2] +
                    this.point2.coords.usrCoords[2];
                this.label.content != null &&
                  ((this.label.content.rendNode.style.fontSize =
                    2 * this.label.content.visProp.fontsize + "px"),
                  this.label.content.prepareUpdate().update().updateRenderer()),
                  (this.point2.coords = new JXG.Coords(
                    JXG.COORDS_BY_USER,
                    [
                      this.point1.coords.usrCoords[1] + e * 1.1,
                      this.point1.coords.usrCoords[2] + t * 1.1,
                    ],
                    this.board
                  )),
                  this.prepareUpdate().update().updateRenderer();
              }
            }),
            (s[r].noHighlight = function () {
              if (this.highlighted) {
                (this.highlighted = !1), this.board.renderer.noHighlight(this);
                var e =
                    -this.point1.coords.usrCoords[1] +
                    this.point2.coords.usrCoords[1],
                  t =
                    -this.point1.coords.usrCoords[2] +
                    this.point2.coords.usrCoords[2];
                this.label.content != null &&
                  ((this.label.content.rendNode.style.fontSize =
                    this.label.content.visProp.fontsize * 2 + "px"),
                  this.label.content.prepareUpdate().update().updateRenderer()),
                  (this.point2.coords = new JXG.Coords(
                    JXG.COORDS_BY_USER,
                    [
                      this.point1.coords.usrCoords[1] + e / 1.1,
                      this.point1.coords.usrCoords[2] + t / 1.1,
                    ],
                    this.board
                  )),
                  this.prepareUpdate().update().updateRenderer();
              }
            }));
      return { sectors: s, points: i, midpoint: v };
    },
    drawRadar: function (e, t, n) {
      var r,
        i,
        s,
        o,
        u,
        a,
        f = t.length,
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g,
        y,
        b,
        w,
        E,
        S,
        x,
        T,
        N,
        C,
        k,
        L,
        A,
        O,
        M,
        _,
        D,
        P,
        H,
        B,
        j,
        F,
        I,
        q,
        R,
        U,
        z,
        W;
      if (f <= 0) {
        JXG.debug("No data");
        return;
      }
      s = n.paramarray;
      if (!JXG.exists(s)) {
        JXG.debug("Need paramArray attribute");
        return;
      }
      o = s.length;
      if (o <= 1) {
        JXG.debug("Need more than 1 param");
        return;
      }
      for (r = 0; r < f; r++)
        if (o != t[r].length) {
          JXG.debug(
            "Use data length equal to number of params (" +
              t[r].length +
              " != " +
              o +
              ")"
          );
          return;
        }
      (u = new Array(o)), (a = new Array(o));
      for (i = 0; i < o; i++) (u[i] = t[0][i]), (a[i] = u[i]);
      for (r = 1; r < f; r++)
        for (i = 0; i < o; i++)
          t[r][i] > u[i] && (u[i] = t[r][i]),
            t[r][i] < a[i] && (a[i] = t[r][i]);
      (l = new Array(f)), (c = new Array(f));
      for (r = 0; r < f; r++) (l[r] = ""), (c[r] = []);
      (h = new Array(o)),
        (p = new Array(o)),
        (d = n.startshiftratio || 0),
        (v = n.endshiftratio || 0);
      for (r = 0; r < o; r++)
        (h[r] = (u[r] - a[r]) * d), (p[r] = (u[r] - a[r]) * v);
      (m = n.startshiftarray || h),
        (g = n.endshiftarray || p),
        (y = n.startarray || a);
      if (JXG.exists(n.start)) for (r = 0; r < o; r++) y[r] = n.start;
      b = n.endarray || u;
      if (JXG.exists(n.end)) for (r = 0; r < o; r++) b[r] = n.end;
      if (m.length != o) {
        JXG.debug("Start shifts length is not equal to number of parameters");
        return;
      }
      if (g.length != o) {
        JXG.debug("End shifts length is not equal to number of parameters");
        return;
      }
      if (y.length != o) {
        JXG.debug("Starts length is not equal to number of parameters");
        return;
      }
      if (b.length != o) {
        JXG.debug("Ends length is not equal to number of parameters");
        return;
      }
      (w = n.labelarray || l),
        (E = n.colors),
        (S = n.highlightcolors),
        (x = n.radius || 10),
        (T = {}),
        JXG.exists(n.highlightonsector) || (n.highlightonsector = !1),
        (T.name = n.name),
        (T.id = n.id),
        (T.strokewidth = n.strokewidth || 1),
        (T.polystrokewidth = n.polystrokewidth || 2 * T.strokewidth),
        (T.strokecolor = n.strokecolor || "black"),
        (T.straightfirst = !1),
        (T.straightlast = !1),
        (T.fillcolor = n.fillColor || "#FFFF88"),
        (T.fillopacity = n.fillOpacity || 0.4),
        (T.highlightfillcolor = n.highlightFillColor || "#FF7400"),
        (T.highlightstrokecolor = n.highlightStrokeColor || "black"),
        (T.gradient = n.gradient || "none"),
        (N = n.center || [0, 0]),
        (C = N[0]),
        (k = N[1]),
        (L = e.create("point", [C, k], {
          name: "",
          fixed: !0,
          withlabel: !1,
          visible: !1,
        })),
        (A = Math.PI / 2 - Math.PI / o);
      if (n.startangle || n.startangle === 0) A = n.startangle;
      (O = A), (M = []), (_ = []);
      var X = function () {
          var e,
            t,
            n,
            r,
            i = this.visProp.label.offset.slice(0);
          return (
            (e = this.point1.X()),
            (t = this.point2.X()),
            (n = this.point1.Y()),
            (r = this.point2.Y()),
            t < e && (i[0] = -i[0]),
            r < n && (i[1] = -i[1]),
            this.setLabelRelativeCoords(i),
            new JXG.Coords(
              JXG.COORDS_BY_USER,
              [this.point2.X(), this.point2.Y()],
              this.board
            )
          );
        },
        V = function (t, n) {
          var r, i, s;
          return (
            (r = e.create("transform", [-(y[n] - m[n]), 0], {
              type: "translate",
            })),
            (i = e.create("transform", [x / (b[n] + g[n] - (y[n] - m[n])), 1], {
              type: "scale",
            })),
            r.melt(i),
            (s = e.create("transform", [t], { type: "rotate" })),
            r.melt(s),
            r
          );
        };
      for (r = 0; r < o; r++) {
        (O += (2 * Math.PI) / o),
          (P = x * Math.cos(O) + C),
          (H = x * Math.sin(O) + k),
          (M[r] = e.create("point", [P, H], {
            name: "",
            fixed: !0,
            withlabel: !1,
            visible: !1,
          })),
          (_[r] = e.create("line", [L, M[r]], {
            name: s[r],
            strokeColor: T.strokecolor,
            strokeWidth: T.strokewidth,
            strokeOpacity: 1,
            straightFirst: !1,
            straightLast: !1,
            withLabel: !0,
            highlightStrokeColor: T.highlightstrokecolor,
          })),
          (_[r].getLabelAnchor = X),
          (D = V(O, r));
        for (i = 0; i < t.length; i++) {
          var $ = t[i][r];
          (c[i][r] = e.create("point", [$, 0], {
            name: "",
            fixed: !0,
            withlabel: !1,
            visible: !1,
          })),
            c[i][r].addTransform(c[i][r], D);
        }
      }
      B = new Array(f);
      for (r = 0; r < f; r++) {
        (T.labelcolor = E && E[r % E.length]),
          (T.strokecolor = E && E[r % E.length]),
          (T.fillcolor = E && E[r % E.length]),
          (B[r] = e.create("polygon", c[r], {
            withLines: !0,
            withLabel: !1,
            fillColor: T.fillcolor,
            fillOpacity: T.fillopacity,
            highlightFillColor: T.highlightfillcolor,
          }));
        for (i = 0; i < o; i++)
          B[r].borders[i].setProperty("strokecolor:" + E[r % E.length]),
            B[r].borders[i].setProperty("strokewidth:" + T.polystrokewidth);
      }
      j = n.legendposition || "none";
      switch (j) {
        case "right":
          var J = n.legendleftoffset || 2,
            K = n.legendtopoffset || 1;
          this.legend = e.create("legend", [C + x + J, k + x - K], {
            labels: w,
            colors: E,
          });
          break;
        case "none":
          break;
        default:
          JXG.debug("Unknown legend position");
      }
      F = [];
      if (n["showcircles"] != 0) {
        I = [];
        for (r = 0; r < 6; r++) I[r] = 20 * r;
        (I[0] = "0"), (q = n.circlelabelarray || I), (R = q.length);
        if (R < 2) {
          alert("Too less circles");
          return;
        }
        (U = []),
          (z = A + Math.PI / o),
          (D = V(z, 0)),
          (T.fillcolor = "none"),
          (T.highlightfillcolor = "none"),
          (T.strokecolor = n.strokecolor || "black"),
          (T.strokewidth = n.circlestrokewidth || 0.5),
          (T.layer = 0),
          (W = (b[0] - y[0]) / (R - 1));
        for (r = 0; r < R; r++)
          (U[r] = e.create("point", [y[0] + r * W, 0], {
            name: q[r],
            size: 0,
            fixed: !0,
            withLabel: !0,
            visible: !0,
          })),
            U[r].addTransform(U[r], D),
            (F[r] = e.create("circle", [L, U[r]], T));
      }
      return (
        (this.rendNode = B[0].rendNode),
        { circles: F, lines: _, points: c, midpoint: L, polygons: B }
      );
    },
    updateRenderer: function () {
      return this;
    },
    update: function () {
      return this.needsUpdate && this.updateDataArray(), this;
    },
    updateDataArray: function () {},
  }),
  (JXG.createChart = function (e, t, n) {
    if (t.length == 1 && typeof t[0] == "string") {
      var r = document.getElementById(t[0]),
        i,
        s,
        o,
        u,
        a,
        f = [],
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g,
        y,
        b,
        w;
      if (JXG.exists(r)) {
        (w = JXG.copyAttributes(n, e.options, "chart")),
          (r = new JXG.DataSource().loadFromTable(
            t[0],
            w.withheaders,
            w.withheaders
          )),
          (i = r.data),
          (a = r.columnHeaders),
          (s = r.rowHeaders),
          (p = w.width),
          (d = w.name),
          (v = w.strokecolor),
          (m = w.fillcolor),
          (g = w.highlightstrokecolor),
          (y = w.highlightfillcolor),
          e.suspendUpdate(),
          (b = i.length),
          (h = []);
        if (w.rows && JXG.isArray(w.rows)) {
          for (o = 0; o < b; o++)
            for (u = 0; u < w.rows.length; u++)
              if (w.rows[u] == o || (w.withheaders && w.rows[u] == s[o])) {
                h.push(i[o]);
                break;
              }
        } else h = i;
        b = h.length;
        for (o = 0; o < b; o++) {
          c = [];
          if (w.chartstyle && w.chartstyle.indexOf("bar") != -1) {
            p ? (l = p) : (l = 0.8),
              c.push(1 - l / 2 + ((o + 0.5) * l) / (1 * b));
            for (u = 1; u < h[o].length; u++) c.push(c[u - 1] + 1);
            w.width = l / (1 * b);
          }
          d && d.length == b
            ? (w.name = d[o])
            : w.withheaders && (w.name = a[o]),
            v && v.length == b
              ? (w.strokecolor = v[o])
              : (w.strokecolor = JXG.hsv2rgb(
                  ((o + 1) / (1 * b)) * 360,
                  0.9,
                  0.6
                )),
            m && m.length == b
              ? (w.fillcolor = m[o])
              : (w.fillcolor = JXG.hsv2rgb(((o + 1) / (1 * b)) * 360, 0.9, 1)),
            g && g.length == b
              ? (w.highlightstrokecolor = g[o])
              : (w.highlightstrokecolor = JXG.hsv2rgb(
                  ((o + 1) / (1 * b)) * 360,
                  0.9,
                  1
                )),
            y && y.length == b
              ? (w.highlightfillcolor = y[o])
              : (w.highlightfillcolor = JXG.hsv2rgb(
                  ((o + 1) / (1 * b)) * 360,
                  0.9,
                  0.6
                )),
            w.chartstyle && w.chartstyle.indexOf("bar") != -1
              ? f.push(new JXG.Chart(e, [c, h[o]], w))
              : f.push(new JXG.Chart(e, [h[o]], w));
        }
        e.unsuspendUpdate();
      }
      return f;
    }
    return (
      (w = JXG.copyAttributes(n, e.options, "chart")), new JXG.Chart(e, t, w)
    );
  }),
  JXG.JSXGraph.registerElement("chart", JXG.createChart),
  (JXG.Legend = function (e, t, n) {
    var r;
    this.constructor(),
      (r = JXG.copyAttributes(n, e.options, "legend")),
      (this.board = e),
      (this.coords = new JXG.Coords(JXG.COORDS_BY_USER, t, this.board)),
      (this.myAtts = {}),
      (this.label_array = r.labelarray || r.labels),
      (this.color_array = r.colorarray || r.colors),
      (this.lines = []),
      (this.myAtts.strokewidth = r.strokewidth || 5),
      (this.myAtts.straightfirst = !1),
      (this.myAtts.straightlast = !1),
      (this.myAtts.withlabel = !0),
      (this.myAtts.fixed = !0),
      (this.style = r.legendstyle || r.style);
    switch (this.style) {
      case "vertical":
        this.drawVerticalLegend(e, r);
        break;
      default:
        throw new Error("JSXGraph: Unknown legend style: " + this.style);
    }
  }),
  (JXG.Legend.prototype = new JXG.GeometryElement()),
  (JXG.Legend.prototype.drawVerticalLegend = function (e, t) {
    var n = t.linelength || 1,
      r = (t.rowheight || 20) / this.board.unitY,
      i;
    for (i = 0; i < this.label_array.length; i++)
      (this.myAtts.strokecolor = this.color_array[i]),
        (this.myAtts.highlightstrokecolor = this.color_array[i]),
        (this.myAtts.name = this.label_array[i]),
        (this.myAtts.label = {
          offset: [10, 0],
          strokeColor: this.color_array[i],
          strokeWidth: this.myAtts.strokewidth,
        }),
        (this.lines[i] = e.create(
          "line",
          [
            [this.coords.usrCoords[1], this.coords.usrCoords[2] - i * r],
            [this.coords.usrCoords[1] + n, this.coords.usrCoords[2] - i * r],
          ],
          this.myAtts
        )),
        (this.lines[i].getLabelAnchor = function () {
          return (
            this.setLabelRelativeCoords(this.visProp.label.offset),
            new JXG.Coords(
              JXG.COORDS_BY_USER,
              [this.point2.X(), this.point2.Y()],
              this.board
            )
          );
        });
  }),
  (JXG.createLegend = function (e, t, n) {
    var r = [0, 0];
    return JXG.exists(t) && t.length == 2 && (r = t), new JXG.Legend(e, r, n);
  }),
  JXG.JSXGraph.registerElement("legend", JXG.createLegend),
  (JXG.Transformation = function (e, t, n) {
    (this.elementClass = JXG.OBJECT_CLASS_OTHER),
      (this.matrix = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
      (this.board = e),
      (this.isNumericMatrix = !1),
      this.setMatrix(e, t, n);
  }),
  (JXG.Transformation.prototype = {}),
  JXG.extend(JXG.Transformation.prototype, {
    update: function () {
      return this;
    },
    setMatrix: function (e, t, n) {
      var r;
      this.isNumericMatrix = !0;
      for (r = 0; r < n.length; r++)
        if (typeof n[r] != "number") {
          this.isNumericMatrix = !1;
          break;
        }
      t == "translate"
        ? ((this.evalParam = JXG.createEvalFunction(e, n, 2)),
          (this.update = function () {
            (this.matrix[1][0] = this.evalParam(0)),
              (this.matrix[2][0] = this.evalParam(1));
          }))
        : t == "scale"
        ? ((this.evalParam = JXG.createEvalFunction(e, n, 2)),
          (this.update = function () {
            (this.matrix[1][1] = this.evalParam(0)),
              (this.matrix[2][2] = this.evalParam(1));
          }))
        : t == "reflect"
        ? (n.length < 4 && (n[0] = JXG.getReference(e, n[0])),
          n.length == 2 && (n[1] = JXG.getReference(e, n[1])),
          n.length == 4 && (this.evalParam = JXG.createEvalFunction(e, n, 4)),
          (this.update = function () {
            var e, t, r, i, s, o, u, a;
            n.length == 1
              ? (u = n[0].stdform)
              : n.length == 2
              ? (u = JXG.Math.crossProduct(
                  n[1].coords.usrCoords,
                  n[0].coords.usrCoords
                ))
              : n.length == 4 &&
                (u = JXG.Math.crossProduct(
                  [1, this.evalParam(2), this.evalParam(3)],
                  [1, this.evalParam(0), this.evalParam(1)]
                )),
              (e = u[1]),
              (t = u[2]),
              (r = u[0]),
              (a = [-r * e, -r * t, e * e + t * t]),
              (o = a[2]),
              (i = a[0] / a[2]),
              (s = a[1] / a[2]),
              (e = -u[2]),
              (t = u[1]),
              (this.matrix[1][1] = (e * e - t * t) / o),
              (this.matrix[1][2] = (2 * e * t) / o),
              (this.matrix[2][1] = this.matrix[1][2]),
              (this.matrix[2][2] = -this.matrix[1][1]),
              (this.matrix[1][0] =
                i * (1 - this.matrix[1][1]) - s * this.matrix[1][2]),
              (this.matrix[2][0] =
                s * (1 - this.matrix[2][2]) - i * this.matrix[2][1]);
          }))
        : t == "rotate"
        ? (n.length == 3
            ? (this.evalParam = JXG.createEvalFunction(e, n, 3))
            : n.length <= 2 &&
              ((this.evalParam = JXG.createEvalFunction(e, n, 1)),
              n.length == 2 && (n[1] = JXG.getReference(e, n[1]))),
          (this.update = function () {
            var e = this.evalParam(0),
              t,
              r,
              i = Math.cos(e),
              s = Math.sin(e);
            (this.matrix[1][1] = i),
              (this.matrix[1][2] = -s),
              (this.matrix[2][1] = s),
              (this.matrix[2][2] = i),
              n.length > 1 &&
                (n.length == 3
                  ? ((t = this.evalParam(1)), (r = this.evalParam(2)))
                  : ((t = n[1].X()), (r = n[1].Y())),
                (this.matrix[1][0] = t * (1 - i) + r * s),
                (this.matrix[2][0] = r * (1 - i) - t * s));
          }))
        : t == "shear"
        ? ((this.evalParam = JXG.createEvalFunction(e, n, 1)),
          (this.update = function () {
            var e = this.evalParam(0);
            this.matrix[1][1] = Math.tan(e);
          }))
        : t == "generic" &&
          ((this.evalParam = JXG.createEvalFunction(e, n, 9)),
          (this.update = function () {
            (this.matrix[0][0] = this.evalParam(0)),
              (this.matrix[0][1] = this.evalParam(1)),
              (this.matrix[0][2] = this.evalParam(2)),
              (this.matrix[1][0] = this.evalParam(3)),
              (this.matrix[1][1] = this.evalParam(4)),
              (this.matrix[1][2] = this.evalParam(5)),
              (this.matrix[2][0] = this.evalParam(6)),
              (this.matrix[2][1] = this.evalParam(7)),
              (this.matrix[2][2] = this.evalParam(8));
          }));
    },
    apply: function (e) {
      return (
        this.update(),
        arguments[1] != null
          ? JXG.Math.matVecMult(this.matrix, e.initialCoords.usrCoords)
          : JXG.Math.matVecMult(this.matrix, e.coords.usrCoords)
      );
    },
    applyOnce: function (e) {
      var t, n, r;
      JXG.isArray(e) || (e = [e]), (n = e.length);
      for (r = 0; r < n; r++)
        this.update(),
          (t = JXG.Math.matVecMult(this.matrix, e[r].coords.usrCoords)),
          e[r].coords.setCoordinates(JXG.COORDS_BY_USER, t);
    },
    bindTo: function (e) {
      var t, n;
      if (JXG.isArray(e)) {
        n = e.length;
        for (t = 0; t < n; t++) e[t].transformations.push(this);
      } else e.transformations.push(this);
    },
    setProperty: function (e) {},
    melt: function (e) {
      var t = [],
        n,
        r,
        i,
        s,
        o,
        u;
      (r = e.matrix.length), (i = this.matrix[0].length);
      for (n = 0; n < r; n++) t[n] = [];
      this.update(), e.update();
      for (n = 0; n < r; n++)
        for (u = 0; u < i; u++) {
          o = 0;
          for (s = 0; s < r; s++) o += e.matrix[n][s] * this.matrix[s][u];
          t[n][u] = o;
        }
      return (
        (this.update = function () {
          var e = this.matrix.length,
            r = this.matrix[0].length;
          for (n = 0; n < e; n++)
            for (u = 0; u < r; u++) this.matrix[n][u] = t[n][u];
        }),
        this
      );
    },
  }),
  (JXG.createTransform = function (e, t, n) {
    return new JXG.Transformation(e, n.type, t);
  }),
  JXG.JSXGraph.registerElement("transform", JXG.createTransform),
  (JXG.Turtle = function (e, t, n) {
    this.constructor(e, n, JXG.OBJECT_TYPE_TURTLE, JXG.OBJECT_CLASS_OTHER);
    var r, i, s;
    return (
      (this.turtleIsHidden = !1),
      (this.board = e),
      (this.visProp.curveType = "plot"),
      (this._attributes = JXG.copyAttributes(
        this.visProp,
        e.options,
        "turtle"
      )),
      delete this._attributes.id,
      (r = 0),
      (i = 0),
      (s = 90),
      t.length != 0 &&
        (t.length == 3
          ? ((r = t[0]), (i = t[1]), (s = t[2]))
          : t.length == 2
          ? JXG.isArray(t[0])
            ? ((r = t[0][0]), (i = t[0][1]), (s = t[1]))
            : ((r = t[0]), (i = t[1]))
          : ((r = t[0][0]), (i = t[0][1]))),
      this.init(r, i, s),
      this
    );
  }),
  (JXG.Turtle.prototype = new JXG.GeometryElement()),
  JXG.extend(JXG.Turtle.prototype, {
    init: function (e, t, n) {
      (this.arrowLen =
        20 /
        Math.sqrt(
          this.board.unitX * this.board.unitX +
            this.board.unitY * this.board.unitY
        )),
        (this.pos = [e, t]),
        (this.isPenDown = !0),
        (this.dir = 90),
        (this.stack = []),
        (this.objects = []),
        (this.curve = this.board.create(
          "curve",
          [[this.pos[0]], [this.pos[1]]],
          this._attributes
        )),
        this.objects.push(this.curve),
        (this.turtle = this.board.create("point", this.pos, {
          fixed: !0,
          name: " ",
          visible: !1,
          withLabel: !1,
        })),
        this.objects.push(this.turtle),
        (this.turtle2 = this.board.create(
          "point",
          [this.pos[0], this.pos[1] + this.arrowLen],
          { fixed: !0, name: " ", visible: !1, withLabel: !1 }
        )),
        this.objects.push(this.turtle2),
        (this.visProp.arrow.lastArrow = !0),
        (this.visProp.arrow.straightFirst = !1),
        (this.visProp.arrow.straightLast = !1),
        (this.arrow = this.board.create(
          "line",
          [this.turtle, this.turtle2],
          this.visProp.arrow
        )),
        this.objects.push(this.arrow),
        this.right(90 - n),
        this.board.update();
    },
    forward: function (e) {
      if (e === 0) return this;
      var t = e * Math.cos((this.dir * Math.PI) / 180),
        n = e * Math.sin((this.dir * Math.PI) / 180);
      if (!this.turtleIsHidden) {
        var r = this.board.create("transform", [t, n], { type: "translate" });
        r.applyOnce(this.turtle), r.applyOnce(this.turtle2);
      }
      return (
        this.isPenDown &&
          this.curve.dataX.length >= 8192 &&
          ((this.curve = this.board.create(
            "curve",
            [[this.pos[0]], [this.pos[1]]],
            this._attributes
          )),
          this.objects.push(this.curve)),
        (this.pos[0] += t),
        (this.pos[1] += n),
        this.isPenDown &&
          (this.curve.dataX.push(this.pos[0]),
          this.curve.dataY.push(this.pos[1])),
        this.board.update(),
        this
      );
    },
    back: function (e) {
      return this.forward(-e);
    },
    right: function (e) {
      (this.dir -= e), (this.dir %= 360);
      if (!this.turtleIsHidden) {
        var t = this.board.create(
          "transform",
          [(-e * Math.PI) / 180, this.turtle],
          { type: "rotate" }
        );
        t.applyOnce(this.turtle2);
      }
      return this.board.update(), this;
    },
    left: function (e) {
      return this.right(-e);
    },
    penUp: function () {
      return (this.isPenDown = !1), this;
    },
    penDown: function () {
      return (
        (this.isPenDown = !0),
        (this.curve = this.board.create(
          "curve",
          [[this.pos[0]], [this.pos[1]]],
          this._attributes
        )),
        this.objects.push(this.curve),
        this
      );
    },
    clean: function () {
      for (var e = 0; e < this.objects.length; e++) {
        var t = this.objects[e];
        t.type == JXG.OBJECT_TYPE_CURVE &&
          (this.board.removeObject(t), this.objects.splice(e, 1));
      }
      return (
        (this.curve = this.board.create(
          "curve",
          [[this.pos[0]], [this.pos[1]]],
          this._attributes
        )),
        this.objects.push(this.curve),
        this.board.update(),
        this
      );
    },
    clearScreen: function () {
      var e,
        t,
        n = this.objects.length;
      for (e = 0; e < n; e++) (t = this.objects[e]), this.board.removeObject(t);
      return this.init(0, 0, 90), this;
    },
    setPos: function (e, t) {
      JXG.isArray(e) ? (this.pos = e) : (this.pos = [e, t]);
      if (!this.turtleIsHidden) {
        this.turtle.setPositionDirectly(JXG.COORDS_BY_USER, [e, t]),
          this.turtle2.setPositionDirectly(JXG.COORDS_BY_USER, [
            e,
            t + this.arrowLen,
          ]);
        var n = this.board.create(
          "transform",
          [(-(this.dir - 90) * Math.PI) / 180, this.turtle],
          { type: "rotate" }
        );
        n.applyOnce(this.turtle2);
      }
      return (
        (this.curve = this.board.create(
          "curve",
          [[this.pos[0]], [this.pos[1]]],
          this._attributes
        )),
        this.objects.push(this.curve),
        this.board.update(),
        this
      );
    },
    setPenSize: function (e) {
      return (
        (this.curve = this.board.create(
          "curve",
          [[this.pos[0]], [this.pos[1]]],
          this.copyAttr("strokeWidth", e)
        )),
        this.objects.push(this.curve),
        this
      );
    },
    setPenColor: function (e) {
      return (
        (this.curve = this.board.create(
          "curve",
          [[this.pos[0]], [this.pos[1]]],
          this.copyAttr("strokeColor", e)
        )),
        this.objects.push(this.curve),
        this
      );
    },
    setHighlightPenColor: function (e) {
      return (
        (this.curve = this.board.create(
          "curve",
          [[this.pos[0]], [this.pos[1]]],
          this.copyAttr("highlightStrokeColor", e)
        )),
        this.objects.push(this.curve),
        this
      );
    },
    setProperty: function (e) {
      var t,
        n,
        r = this.objects.length,
        i;
      for (t = 0; t < r; t++)
        (n = this.objects[t]),
          n.type == JXG.OBJECT_TYPE_CURVE && n.setProperty(e);
      return (
        (i = this.visProp.id),
        (this.visProp = JXG.deepCopy(this.curve.visProp)),
        (this.visProp.id = i),
        (this._attributes = JXG.deepCopy(this.visProp)),
        delete this._attributes.id,
        this
      );
    },
    copyAttr: function (e, t) {
      return (this._attributes[e.toLowerCase()] = t), this._attributes;
    },
    showTurtle: function () {
      return (
        (this.turtleIsHidden = !1),
        this.arrow.setProperty({ visible: !0 }),
        (this.visProp.arrow.visible = !1),
        this.setPos(this.pos[0], this.pos[1]),
        this.board.update(),
        this
      );
    },
    hideTurtle: function () {
      return (
        (this.turtleIsHidden = !0),
        this.arrow.setProperty({ visible: !1 }),
        (this.visProp.arrow.visible = !1),
        this.board.update(),
        this
      );
    },
    home: function () {
      return (this.pos = [0, 0]), this.setPos(this.pos[0], this.pos[1]), this;
    },
    pushTurtle: function () {
      return this.stack.push([this.pos[0], this.pos[1], this.dir]), this;
    },
    popTurtle: function () {
      var e = this.stack.pop();
      return (
        (this.pos[0] = e[0]),
        (this.pos[1] = e[1]),
        (this.dir = e[2]),
        this.setPos(this.pos[0], this.pos[1]),
        this
      );
    },
    lookTo: function (e) {
      if (JXG.isArray(e)) {
        var t = this.pos[0],
          n = this.pos[1],
          r = e[0],
          i = e[1],
          s;
        (s = Math.atan2(i - n, r - t)),
          this.right(this.dir - (s * 180) / Math.PI);
      } else JXG.isNumber(e) && this.right(this.dir - e);
      return this;
    },
    moveTo: function (e) {
      if (JXG.isArray(e)) {
        var t = e[0] - this.pos[0],
          n = e[1] - this.pos[1];
        if (!this.turtleIsHidden) {
          var r = this.board.create("transform", [t, n], { type: "translate" });
          r.applyOnce(this.turtle), r.applyOnce(this.turtle2);
        }
        this.isPenDown &&
          this.curve.dataX.length >= 8192 &&
          ((this.curve = this.board.create(
            "curve",
            [[this.pos[0]], [this.pos[1]]],
            this._attributes
          )),
          this.objects.push(this.curve)),
          (this.pos[0] = e[0]),
          (this.pos[1] = e[1]),
          this.isPenDown &&
            (this.curve.dataX.push(this.pos[0]),
            this.curve.dataY.push(this.pos[1])),
          this.board.update();
      }
      return this;
    },
    fd: function (e) {
      return this.forward(e);
    },
    bk: function (e) {
      return this.back(e);
    },
    lt: function (e) {
      return this.left(e);
    },
    rt: function (e) {
      return this.right(e);
    },
    pu: function () {
      return this.penUp();
    },
    pd: function () {
      return this.penDown();
    },
    ht: function () {
      return this.hideTurtle();
    },
    st: function () {
      return this.showTurtle();
    },
    cs: function () {
      return this.clearScreen();
    },
    push: function () {
      return this.pushTurtle();
    },
    pop: function () {
      return this.popTurtle();
    },
    evalAt: function (e, t) {
      var n,
        r,
        i,
        s,
        o = this.objects.length;
      for (n = 0, r = 0; n < o; n++) {
        i = this.objects[n];
        if (i.elementClass == JXG.OBJECT_CLASS_CURVE) {
          if (r <= e && e < r + i.numberPoints) return (s = e - r), i[t](s);
          r += i.numberPoints;
        }
      }
      return this[t]();
    },
    X: function (e) {
      return typeof e == "undefined" ? this.pos[0] : this.evalAt(e, "X");
    },
    Y: function (e) {
      return typeof e == "undefined" ? this.pos[1] : this.evalAt(e, "Y");
    },
    Z: function (e) {
      return 1;
    },
    minX: function () {
      return 0;
    },
    maxX: function () {
      var e = 0,
        t,
        n = this.objects.length,
        r;
      for (t = 0; t < n; t++)
        (r = this.objects[t]),
          r.elementClass == JXG.OBJECT_CLASS_CURVE &&
            (e += this.objects[t].numberPoints);
      return e;
    },
    hasPoint: function (e, t) {
      var n, r;
      for (n = 0; n < this.objects.length; n++) {
        r = this.objects[n];
        if (r.type == JXG.OBJECT_TYPE_CURVE && r.hasPoint(e, t)) return !0;
      }
      return !1;
    },
  }),
  (JXG.createTurtle = function (e, t, n) {
    var r;
    return (
      (t = t || []),
      (r = JXG.copyAttributes(n, e.options, "turtle")),
      new JXG.Turtle(e, t, r)
    );
  }),
  JXG.JSXGraph.registerElement("turtle", JXG.createTurtle),
  (JXG.rgbParser = function () {
    var e,
      t = !1,
      n,
      r,
      i,
      s;
    if (arguments.length === 0) return [];
    arguments.length >= 3 &&
      ((arguments[0] = [arguments[0], arguments[1], arguments[2]]),
      (arguments.length = 1)),
      (e = arguments[0]);
    if (JXG.isArray(e)) {
      for (n = 0; n < 3; n++) t |= /\./.test(arguments[0][n].toString());
      for (n = 0; n < 3; n++)
        t &= (arguments[0][n] >= 0) & (arguments[0][n] <= 1);
      return t
        ? [
            Math.ceil(arguments[0][0] * 255),
            Math.ceil(arguments[0][1] * 255),
            Math.ceil(arguments[0][2] * 255),
          ]
        : ((arguments[0].length = 3), arguments[0]);
    }
    typeof arguments[0] == "string" && (e = arguments[0]),
      e.charAt(0) == "#" && (e = e.substr(1, 6)),
      (e = e.replace(/ /g, "").toLowerCase());
    var o = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "00ffff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000000",
      blanchedalmond: "ffebcd",
      blue: "0000ff",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "00ffff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dodgerblue: "1e90ff",
      feldspar: "d19275",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "ff00ff",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgrey: "d3d3d3",
      lightgreen: "90ee90",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslateblue: "8470ff",
      lightslategray: "778899",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "00ff00",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "ff00ff",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370d8",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "d87093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      red: "ff0000",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      violetred: "d02090",
      wheat: "f5deb3",
      white: "ffffff",
      whitesmoke: "f5f5f5",
      yellow: "ffff00",
      yellowgreen: "9acd32",
    };
    e = o[e] || e;
    var u = [
      {
        re: /^\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([\d\.]{1,3})\s*\)\s*$/,
        example: ["rgba(123, 234, 45, 0.5)", "rgba(255,234,245,1.0)"],
        process: function (e) {
          return [parseInt(e[1]), parseInt(e[2]), parseInt(e[3])];
        },
      },
      {
        re: /^\s*rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)\s*$/,
        example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
        process: function (e) {
          return [parseInt(e[1]), parseInt(e[2]), parseInt(e[3])];
        },
      },
      {
        re: /^(\w{2})(\w{2})(\w{2})$/,
        example: ["#00ff00", "336699"],
        process: function (e) {
          return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)];
        },
      },
      {
        re: /^(\w{1})(\w{1})(\w{1})$/,
        example: ["#fb0", "f0f"],
        process: function (e) {
          return [
            parseInt(e[1] + e[1], 16),
            parseInt(e[2] + e[2], 16),
            parseInt(e[3] + e[3], 16),
          ];
        },
      },
    ];
    for (n = 0; n < u.length; n++) {
      var a = u[n].re,
        f = u[n].process,
        l = a.exec(e),
        c;
      l && ((c = f(l)), (r = c[0]), (i = c[1]), (s = c[2]));
    }
    return isNaN(r) || isNaN(i) || isNaN(s)
      ? []
      : ((r = r < 0 || isNaN(r) ? 0 : r > 255 ? 255 : r),
        (i = i < 0 || isNaN(i) ? 0 : i > 255 ? 255 : i),
        (s = s < 0 || isNaN(s) ? 0 : s > 255 ? 255 : s),
        [r, i, s]);
  }),
  (JXG.rgb2css = function () {
    var e, t, n;
    return (
      (e = JXG.rgbParser.apply(JXG.rgbParser, arguments)),
      (t = e[1]),
      (n = e[2]),
      (e = e[0]),
      "rgb(" + e + ", " + t + ", " + n + ")"
    );
  }),
  (JXG.rgb2hex = function () {
    var e, t, n;
    return (
      (e = JXG.rgbParser.apply(JXG.rgbParser, arguments)),
      (t = e[1]),
      (n = e[2]),
      (e = e[0]),
      (e = e.toString(16)),
      (t = t.toString(16)),
      (n = n.toString(16)),
      e.length == 1 && (e = "0" + e),
      t.length == 1 && (t = "0" + t),
      n.length == 1 && (n = "0" + n),
      "#" + e + t + n
    );
  }),
  (JXG.hex2rgb = function (e) {
    var t, n, r;
    return (
      e.charAt(0) == "#" && (e = e.slice(1)),
      (t = parseInt(e.substr(0, 2), 16)),
      (n = parseInt(e.substr(2, 2), 16)),
      (r = parseInt(e.substr(4, 2), 16)),
      "rgb(" + t + ", " + n + ", " + r + ")"
    );
  }),
  (JXG.hsv2rgb = function (e, t, n) {
    var r, i, s, o, u, a, f, l, c;
    e = ((e % 360) + 360) % 360;
    if (t == 0) {
      if (!(isNaN(e) || e < JXG.Math.eps)) return "#ffffff";
      (r = n), (i = n), (s = n);
    } else {
      e >= 360 ? (a = 0) : (a = e),
        (a /= 60),
        (u = Math.floor(a)),
        (o = a - u),
        (f = n * (1 - t)),
        (l = n * (1 - t * o)),
        (c = n * (1 - t * (1 - o)));
      switch (u) {
        case 0:
          (r = n), (i = c), (s = f);
          break;
        case 1:
          (r = l), (i = n), (s = f);
          break;
        case 2:
          (r = f), (i = n), (s = c);
          break;
        case 3:
          (r = f), (i = l), (s = n);
          break;
        case 4:
          (r = c), (i = f), (s = n);
          break;
        case 5:
          (r = n), (i = f), (s = l);
      }
    }
    return (
      (r = Math.round(r * 255).toString(16)),
      (r = r.length == 2 ? r : r.length == 1 ? "0" + r : "00"),
      (i = Math.round(i * 255).toString(16)),
      (i = i.length == 2 ? i : i.length == 1 ? "0" + i : "00"),
      (s = Math.round(s * 255).toString(16)),
      (s = s.length == 2 ? s : s.length == 1 ? "0" + s : "00"),
      ["#", r, i, s].join("")
    );
  }),
  (JXG.rgb2hsv = function () {
    var e, t, n, r, i, s, o, u, a, f, l, c, h, p;
    return (
      (e = JXG.rgbParser.apply(JXG.rgbParser, arguments)),
      (t = e[1]),
      (n = e[2]),
      (e = e[0]),
      (p = JXG.Math.Statistics),
      (r = e / 255),
      (i = t / 255),
      (s = n / 255),
      (c = p.max([e, t, n])),
      (h = p.min([e, t, n])),
      (o = c / 255),
      (u = h / 255),
      (l = o),
      (f = 0),
      l > 0 && (f = (l - u) / (l * 1)),
      (a = 1 / (o - u)),
      f > 0 &&
        (c == e
          ? (a = (i - s) * a)
          : c == t
          ? (a = 2 + (s - r) * a)
          : (a = 4 + (r - i) * a)),
      (a *= 60),
      a < 0 && (a += 360),
      c == h && (a = 0),
      [a, f, l]
    );
  }),
  (JXG.rgb2LMS = function () {
    var e,
      t,
      n,
      r,
      i,
      s,
      o,
      u = [
        [0.05059983, 0.08585369, 0.0095242],
        [0.01893033, 0.08925308, 0.01370054],
        [0.00292202, 0.00975732, 0.07145979],
      ];
    return (
      (e = JXG.rgbParser.apply(JXG.rgbParser, arguments)),
      (t = e[1]),
      (n = e[2]),
      (e = e[0]),
      (e = Math.pow(e, 0.476190476)),
      (t = Math.pow(t, 0.476190476)),
      (n = Math.pow(n, 0.476190476)),
      (r = e * u[0][0] + t * u[0][1] + n * u[0][2]),
      (i = e * u[1][0] + t * u[1][1] + n * u[1][2]),
      (s = e * u[2][0] + t * u[2][1] + n * u[2][2]),
      (o = [r, i, s]),
      (o.l = r),
      (o.m = i),
      (o.s = s),
      o
    );
  }),
  (JXG.LMS2rgb = function (e, t, n) {
    var r,
      i,
      s,
      o,
      u = [
        [30.830854, -29.832659, 1.610474],
        [-6.481468, 17.715578, -2.532642],
        [-0.37569, -1.199062, 14.273846],
      ];
    (r = e * u[0][0] + t * u[0][1] + n * u[0][2]),
      (i = e * u[1][0] + t * u[1][1] + n * u[1][2]),
      (s = e * u[2][0] + t * u[2][1] + n * u[2][2]);
    var a = function (e) {
      var t = 127,
        n = 64;
      while (n > 0) {
        if (Math.pow(t, 0.476190476) > e) t -= n;
        else {
          if (Math.pow(t + 1, 0.476190476) > e) return t;
          t += n;
        }
        n /= 2;
      }
      return t == 254 && 13.994955247 < e ? 255 : t;
    };
    return (
      (r = a(r)),
      (i = a(i)),
      (s = a(s)),
      (o = [r, i, s]),
      (o.r = r),
      (o.g = i),
      (o.b = s),
      o
    );
  }),
  (JXG.rgba2rgbo = function (e) {
    var t;
    return (
      e.length == 9 && e.charAt(0) == "#"
        ? ((t = parseInt(e.substr(7, 2).toUpperCase(), 16) / 255),
          (e = e.substr(0, 7)))
        : (t = 1),
      [e, t]
    );
  }),
  (JXG.rgbo2rgba = function (e, t) {
    var n;
    return e == "none"
      ? e
      : ((n = Math.round(t * 255).toString(16)),
        n.length == 1 && (n = "0" + n),
        e + n);
  }),
  (JXG.rgb2bw = function (e) {
    if (e == "none") return e;
    var t,
      n = "0123456789ABCDEF",
      r,
      i;
    return (
      (i = JXG.rgbParser(e)),
      (t = 0.3 * i[0] + 0.59 * i[1] + 0.11 * i[2]),
      (r = n.charAt((t >> 4) & 15) + n.charAt(t & 15)),
      (e = "#" + r + "" + r + "" + r),
      e
    );
  }),
  (JXG.rgb2cb = function (e, t) {
    if (e == "none") return e;
    var n, r, i, s, o, u, a, f, l, c, h, p, d;
    (o = JXG.rgb2LMS(e)),
      (r = o.l),
      (i = o.m),
      (s = o.s),
      (t = t.toLowerCase());
    switch (t) {
      case "protanopia":
        (a = -0.06150039994295001),
          (f = 0.08277001656812001),
          (l = -0.013200141220000003),
          (c = 0.05858939668799999),
          (h = -0.07934519995360001),
          (p = 0.013289415272000003),
          (d = 0.6903216543277437),
          (u = s / i),
          u < d ? (r = -(f * i + l * s) / a) : (r = -(h * i + p * s) / c);
        break;
      case "tritanopia":
        (a = -0.00058973116217),
          (f = 0.007690316482),
          (l = -0.01011703519052),
          (c = 0.025495080838999994),
          (h = -0.0422740347),
          (p = 0.017005316784),
          (d = 0.8349489908460004),
          (u = i / r),
          u < d ? (s = -(a * r + f * i) / l) : (s = -(c * r + h * i) / p);
        break;
      default:
        (a = -0.06150039994295001),
          (f = 0.08277001656812001),
          (l = -0.013200141220000003),
          (c = 0.05858939668799999),
          (h = -0.07934519995360001),
          (p = 0.013289415272000003),
          (d = 0.5763833686400911),
          (u = s / r),
          u < d ? (i = -(a * r + l * s) / f) : (i = -(c * r + p * s) / h);
    }
    n = JXG.LMS2rgb(r, i, s);
    var v = "0123456789ABCDEF";
    return (
      (u = v.charAt((n.r >> 4) & 15) + v.charAt(n.r & 15)),
      (e = "#" + u),
      (u = v.charAt((n.g >> 4) & 15) + v.charAt(n.g & 15)),
      (e += u),
      (u = v.charAt((n.b >> 4) & 15) + v.charAt(n.b & 15)),
      (e += u),
      e
    );
  }),
  JXG.extend(JXG.Board.prototype, {
    intersection: function (e, t, n, r, i) {
      var s;
      return (
        (e = JXG.getReference(this, e)),
        (t = JXG.getReference(this, t)),
        i != null && (s = i.point),
        e.elementClass != JXG.OBJECT_CLASS_CURVE ||
        t.elementClass != JXG.OBJECT_CLASS_CURVE ||
        (e.type == JXG.OBJECT_TYPE_ARC && t.type == JXG.OBJECT_TYPE_ARC)
          ? (e.type == JXG.OBJECT_TYPE_ARC &&
              t.elementClass == JXG.OBJECT_CLASS_LINE) ||
            (t.type == JXG.OBJECT_TYPE_ARC &&
              e.elementClass == JXG.OBJECT_CLASS_LINE)
            ? function () {
                return JXG.Math.Geometry.meet(e.stdform, t.stdform, n, e.board);
              }
            : (e.elementClass == JXG.OBJECT_CLASS_CURVE &&
                t.elementClass == JXG.OBJECT_CLASS_LINE) ||
              (t.elementClass == JXG.OBJECT_CLASS_CURVE &&
                e.elementClass == JXG.OBJECT_CLASS_LINE)
            ? function () {
                return JXG.Math.Geometry.meetCurveLine(e, t, n, e.board, i);
              }
            : e.elementClass == JXG.OBJECT_CLASS_LINE &&
              t.elementClass == JXG.OBJECT_CLASS_LINE
            ? function () {
                var r,
                  i,
                  o = e.visProp.straightfirst;
                return (
                  (first2 = t.visProp.straightfirst),
                  (last1 = e.visProp.straightlast),
                  (last2 = t.visProp.straightlast),
                  JXG.exists(s) &&
                  !s.visProp.alwaysintersect &&
                  (o == 0 || last1 == 0 || first2 == 0 || last2 == 0)
                    ? ((r = JXG.Math.Geometry.meetSegmentSegment(
                        e.point1.coords.usrCoords,
                        e.point2.coords.usrCoords,
                        t.point1.coords.usrCoords,
                        t.point2.coords.usrCoords,
                        e.board
                      )),
                      (!o && r[1] < 0) ||
                      (!last1 && r[1] > 1) ||
                      (!first2 && r[2] < 0) ||
                      (!last2 && r[2] > 1)
                        ? (i = [0, NaN, NaN])
                        : (i = r[0]),
                      new JXG.Coords(JXG.COORDS_BY_USER, i, e.board))
                    : JXG.Math.Geometry.meet(e.stdform, t.stdform, n, e.board)
                );
              }
            : function () {
                return JXG.Math.Geometry.meet(e.stdform, t.stdform, n, e.board);
              }
          : function () {
              return JXG.Math.Geometry.meetCurveCurve(e, t, n, r, e.board);
            }
      );
    },
    intersectionFunc: function (e, t, n, r) {
      return this.intersection(e, t, n, r);
    },
    otherIntersection: function (e, t, n) {
      return (
        (e = JXG.getReference(this, e)),
        (t = JXG.getReference(this, t)),
        function () {
          var r = JXG.Math.Geometry.meet(e.stdform, t.stdform, 0, e.board);
          return Math.abs(n.X() - r.usrCoords[1]) > JXG.Math.eps ||
            Math.abs(n.Y() - r.usrCoords[2]) > JXG.Math.eps ||
            Math.abs(n.Z() - r.usrCoords[0]) > JXG.Math.eps
            ? r
            : JXG.Math.Geometry.meet(e.stdform, t.stdform, 1, e.board);
        }
      );
    },
  }),
  JXG.extend(JXG.Board.prototype, {
    angle: function (e, t, n) {
      return JXG.Math.Geometry.angle(e, t, n);
    },
    rad: function (e, t, n) {
      return JXG.Math.Geometry.rad(e, t, n);
    },
    distance: function (e, t) {
      return JXG.Math.Geometry.distance(e, t);
    },
    pow: function (e, t) {
      return JXG.Math.pow(e, t);
    },
    round: function (e, t) {
      return e.toFixed(t);
    },
    cosh: function (e) {
      return JXG.Math.cosh(e);
    },
    sinh: function (e) {
      return JXG.Math.sinh(e);
    },
    sgn: function (e) {
      return e == 0 ? 0 : e / Math.abs(e);
    },
    D: function (e, t) {
      return JXG.Math.Numerics.D(e, t);
    },
    I: function (e, t) {
      return JXG.Math.Numerics.I(e, t);
    },
    root: function (e, t, n) {
      return JXG.Math.Numerics.root(e, t, n);
    },
    lagrangePolynomial: function (e) {
      return JXG.Math.Numerics.lagrangePolynomial(e);
    },
    neville: function (e) {
      return JXG.Math.Numerics.Neville(e);
    },
    riemannsum: function (e, t, n, r, i) {
      return JXG.Math.Numerics.riemannsum(e, t, n, r, i);
    },
    abs: Math.abs,
    acos: Math.acos,
    asin: Math.asin,
    atan: Math.atan,
    ceil: Math.ceil,
    cos: Math.cos,
    exp: Math.exp,
    floor: Math.floor,
    log: Math.log,
    max: Math.max,
    min: Math.min,
    random: Math.random,
    sin: Math.sin,
    sqrt: Math.sqrt,
    tan: Math.tan,
    trunc: Math.ceil,
    factorial: function (e) {
      return JXG.Math.factorial(e);
    },
    binomial: function (e, t) {
      return JXG.Math.binomial(e, t);
    },
    getElement: function (e) {
      return JXG.getReference(this, e);
    },
    intersectionOptions: [
      "point",
      [
        [JXG.OBJECT_CLASS_LINE, JXG.OBJECT_CLASS_LINE],
        [JXG.OBJECT_CLASS_LINE, JXG.OBJECT_CLASS_CIRCLE],
        [JXG.OBJECT_CLASS_CIRCLE, JXG.OBJECT_CLASS_CIRCLE],
      ],
    ],
    pointFunc: function () {
      return [null];
    },
    pointOptions: ["point", [[JXG.OBJECT_CLASS_POINT]]],
    lineFunc: function () {
      return arguments;
    },
    lineOptions: ["line", [[JXG.OBJECT_CLASS_POINT, JXG.OBJECT_CLASS_POINT]]],
    linesegmentFunc: function () {
      return arguments;
    },
    linesegmentOptions: [
      "line",
      [[JXG.OBJECT_CLASS_POINT, JXG.OBJECT_CLASS_POINT]],
    ],
    linesegmentAtts: { straightFirst: !1, straightLast: !1 },
    arrowFunc: function () {
      return arguments;
    },
    arrowOptions: ["arrow", [[JXG.OBJECT_CLASS_POINT, JXG.OBJECT_CLASS_POINT]]],
    circleFunc: function () {
      return arguments;
    },
    circleOptions: [
      "circle",
      [
        [JXG.OBJECT_CLASS_POINT, JXG.OBJECT_CLASS_POINT],
        [JXG.OBJECT_CLASS_POINT, JXG.OBJECT_CLASS_LINE],
        [JXG.OBJECT_CLASS_POINT, JXG.OBJECT_CLASS_CIRCLE],
      ],
    ],
    arrowparallelOptions: [
      "arrowparallel",
      [[JXG.OBJECT_CLASS_POINT, JXG.OBJECT_CLASS_LINE]],
    ],
    arrowparallelFunc: function () {
      return arguments;
    },
    bisectorOptions: [
      "bisector",
      [
        [
          JXG.OBJECT_CLASS_POINT,
          JXG.OBJECT_CLASS_POINT,
          JXG.OBJECT_CLASS_POINT,
        ],
      ],
    ],
    bisectorFunc: function () {
      return arguments;
    },
    circumcircleOptions: [
      "circumcircle",
      [
        [
          JXG.OBJECT_CLASS_POINT,
          JXG.OBJECT_CLASS_POINT,
          JXG.OBJECT_CLASS_POINT,
        ],
      ],
    ],
    circumcircleFunc: function () {
      return arguments;
    },
    circumcirclemidpointOptions: [
      "circumcirclemidpoint",
      [
        [
          JXG.OBJECT_CLASS_POINT,
          JXG.OBJECT_CLASS_POINT,
          JXG.OBJECT_CLASS_POINT,
        ],
      ],
    ],
    circumcirclemidpointFunc: function () {
      return arguments;
    },
    integralOptions: ["integral", [[]]],
    integralFunc: function () {
      return arguments;
    },
    midpointOptions: [
      "midpoint",
      [
        [JXG.OBJECT_CLASS_POINT, JXG.OBJECT_CLASS_POINT],
        [JXG.OBJECT_CLASS_LINE],
      ],
    ],
    midpointFunc: function () {
      return arguments;
    },
    mirrorpointOptions: [
      "mirrorpoint",
      [[JXG.OBJECT_CLASS_POINT, JXG.OBJECT_CLASS_POINT]],
    ],
    mirrorpointFunc: function () {
      return arguments;
    },
    normalOptions: [
      "normal",
      [[JXG.OBJECT_CLASS_POINT, JXG.OBJECT_CLASS_LINE]],
    ],
    normalFunc: function () {
      return arguments;
    },
    parallelOptions: [
      "parallel",
      [[JXG.OBJECT_CLASS_POINT, JXG.OBJECT_CLASS_LINE]],
    ],
    parallelFunc: function () {
      return arguments;
    },
    parallelpointOptions: [
      "parallelpoint",
      [
        [
          JXG.OBJECT_CLASS_POINT,
          JXG.OBJECT_CLASS_POINT,
          JXG.OBJECT_CLASS_POINT,
        ],
      ],
    ],
    parallelpointFunc: function () {
      return arguments;
    },
    perpendicularOptions: [
      "perpendicular",
      [[JXG.OBJECT_CLASS_POINT, JXG.OBJECT_CLASS_LINE]],
    ],
    perpendicularFunc: function () {
      return arguments;
    },
    perpendicularpointOptions: [
      "perpendicularpoint",
      [[JXG.OBJECT_CLASS_POINT, JXG.OBJECT_CLASS_LINE]],
    ],
    perpendicularpointFunc: function () {
      return arguments;
    },
    reflectionOptions: [
      "reflection",
      [[JXG.OBJECT_CLASS_POINT, JXG.OBJECT_CLASS_LINE]],
    ],
    reflectionFunc: function () {
      return arguments;
    },
  }),
  (JXG.Point.prototype.setPositionX = function (e, t) {
    var n =
      e == JXG.COORDS_BY_USER
        ? this.coords.usrCoords[2]
        : this.coords.scrCoords[2];
    this.setPosition(e, [t, n]);
  }),
  (JXG.Point.prototype.setPositionY = function (e, t) {
    var n =
      e == JXG.COORDS_BY_USER
        ? this.coords.usrCoords[1]
        : this.coords.scrCoords[1];
    this.setPosition(e, [n, t]);
  }),
  (JXG.Ticks = function (e, t, n) {
    this.constructor(e.board, n, JXG.OBJECT_TYPE_TICKS, JXG.OBJECT_CLASS_OTHER),
      (this.line = e),
      (this.board = this.line.board),
      (this.ticksFunction = null),
      (this.fixedTicks = null),
      (this.equidistant = !1);
    if (JXG.isFunction(t))
      throw (
        ((this.ticksFunction = t),
        new Error("Function arguments are no longer supported."))
      );
    JXG.isArray(t)
      ? (this.fixedTicks = t)
      : (Math.abs(t) < JXG.Math.eps && (t = n.defaultdistance),
        (this.ticksFunction = function (e) {
          return t;
        }),
        (this.equidistant = !0)),
      (this.minTicksDistance = n.minticksdistance),
      (this.maxTicksDistance = n.maxticksdistance),
      (this.labels = []),
      (this.id = this.line.addTicks(this)),
      this.board.setId(this, "Ti");
  }),
  (JXG.Ticks.prototype = new JXG.GeometryElement()),
  JXG.extend(JXG.Ticks.prototype, {
    hasPoint: function (e, t) {
      var n,
        r,
        i = this.ticks.length,
        s = this.board.options.precision.hasPoint;
      if (!this.line.visProp.scalable) return !1;
      if (
        this.line.stdform[1] != 0 &&
        this.line.stdform[2] != 0 &&
        this.line.type != JXG.OBJECT_TYPE_AXIS
      )
        return !1;
      for (n = 0; n < i; n++) {
        r = this.ticks[n];
        if (!r[2]) continue;
        if (
          this.line.stdform[1] == 0 &&
          Math.abs(r[0][0] - this.line.point1.coords.scrCoords[1]) <
            JXG.Math.eps
        )
          continue;
        if (
          this.line.stdform[2] == 0 &&
          Math.abs(r[1][0] - this.line.point1.coords.scrCoords[2]) <
            JXG.Math.eps
        )
          continue;
        if (
          Math.abs(r[0][0] - r[0][1]) >= 1 ||
          Math.abs(r[1][0] - r[1][1]) >= 1
        )
          if (this.line.stdform[1] == 0) {
            if (
              Math.abs(t - (r[1][0] + r[1][1]) * 0.5) < 2 * s &&
              r[0][0] - s < e &&
              e < r[0][1] + s
            )
              return !0;
          } else if (
            this.line.stdform[2] == 0 &&
            Math.abs(e - (r[0][0] + r[0][1]) * 0.5) < 2 * s &&
            r[1][0] - s < t &&
            t < r[1][1] + s
          )
            return !0;
      }
      return !1;
    },
    setPositionDirectly: function (e, t, n) {
      var r,
        i,
        s,
        o = new JXG.Coords(e, t, this.board),
        u = new JXG.Coords(e, n, this.board),
        a = this.board.getBoundingBox();
      return this.line.visProp.scalable
        ? (Math.abs(this.line.stdform[1]) < JXG.Math.eps &&
          Math.abs(o.usrCoords[1] * u.usrCoords[1]) > JXG.Math.eps
            ? ((r = u.usrCoords[1] / o.usrCoords[1]),
              (a[0] *= r),
              (a[2] *= r),
              this.board.setBoundingBox(a, !1))
            : Math.abs(this.line.stdform[2]) < JXG.Math.eps &&
              Math.abs(o.usrCoords[2] * u.usrCoords[2]) > JXG.Math.eps &&
              ((i = u.usrCoords[2] / o.usrCoords[2]),
              (a[3] *= i),
              (a[1] *= i),
              this.board.setBoundingBox(a, !1)),
          this)
        : this;
    },
    calculateTicksCoordinates: function () {
      var e = this.line.point1,
        t = this.line.point2,
        n = e.Dist(t),
        r = (t.coords.usrCoords[1] - e.coords.usrCoords[1]) / n,
        i = (t.coords.usrCoords[2] - e.coords.usrCoords[2]) / n,
        s = e.coords.distance(
          JXG.COORDS_BY_SCREEN,
          new JXG.Coords(
            JXG.COORDS_BY_USER,
            [e.coords.usrCoords[1] + r, e.coords.usrCoords[2] + i],
            this.board
          )
        ),
        o = this.equidistant ? this.ticksFunction(1) : 1,
        u,
        a,
        f = 5,
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g,
        y = 0,
        b = 0,
        w,
        E = 2,
        S = -1,
        x,
        T,
        N,
        C,
        k = JXG.Math.eps,
        L,
        A,
        O,
        M = this.visProp.majorheight * 0.5,
        _ = this.visProp.minorheight * 0.5,
        D,
        P,
        H,
        B,
        j,
        F;
      if (this.board.canvasWidth === 0 || this.board.canvasHeight === 0) return;
      this.visProp.minorheight < 0
        ? (this.minStyle = "infinite")
        : (this.minStyle = "finite"),
        this.visProp.majorheight < 0
          ? (this.majStyle = "infinite")
          : (this.majStyle = "finite"),
        this.line.visProp.straightfirst
          ? (A = Number.NEGATIVE_INFINITY)
          : (A = 0 + k),
        this.line.visProp.straightlast
          ? (O = Number.POSITIVE_INFINITY)
          : (O = n - k),
        (D = this.line.stdform[1]),
        (P = this.line.stdform[2]),
        (H = D),
        (B = P),
        (j = D),
        (F = P),
        (T = Math.sqrt(
          D * D * this.board.unitX * this.board.unitX +
            P * P * this.board.unitY * this.board.unitY
        )),
        (D *= (M / T) * this.board.unitX),
        (P *= (M / T) * this.board.unitY),
        (H *= (_ / T) * this.board.unitX),
        (B *= (_ / T) * this.board.unitY),
        this.removeTickLabels();
      if (Math.abs(j) < JXG.Math.eps && Math.abs(F) < JXG.Math.eps) return;
      (this.ticks = []), (this.labels = []);
      if (!this.equidistant) {
        for (p = 0; p < this.fixedTicks.length; p++)
          (y = e.coords.usrCoords[1] + this.fixedTicks[p] * r),
            (b = e.coords.usrCoords[2] + this.fixedTicks[p] * i),
            (l = new JXG.Coords(JXG.COORDS_BY_USER, [y, b], this.board)),
            (w = this._tickEndings(l, j, F, D, P, H, B, !0)),
            w.length == 2 &&
              this.fixedTicks[p] >= A &&
              this.fixedTicks[p] < O &&
              this.ticks.push(w),
            this.labels.push(
              this._makeLabel(
                this.visProp.labels[p] || this.fixedTicks[p],
                l,
                this.board,
                this.visProp.drawlabels,
                this.id,
                p
              )
            );
        return;
      }
      (u = o),
        (o *= this.visProp.scale),
        this.visProp.insertticks &&
          this.minTicksDistance > JXG.Math.eps &&
          ((a = this._adjustTickDistance(o, s, f, e.coords, r, i)),
          (o *= a),
          (u *= a)),
        this.visProp.insertticks ||
          ((o /= this.visProp.minorticks + 1),
          (u /= this.visProp.minorticks + 1)),
        (this.ticksDelta = o),
        (this.symbTicksDelta = u),
        (N = this.board.getBoundingBox()),
        (y = (N[0] + N[2]) * 0.5),
        (b = (N[1] + N[3]) * 0.5),
        (C = [
          y * this.line.stdform[2] - b * this.line.stdform[1],
          -this.line.stdform[2],
          this.line.stdform[1],
        ]),
        (x = JXG.Math.crossProduct(this.line.stdform, C)),
        (x[1] /= x[0]),
        (x[2] /= x[0]),
        (x[0] = 1),
        (l = new JXG.Coords(JXG.COORDS_BY_USER, x.slice(1), this.board)),
        (T = e.coords.distance(JXG.COORDS_BY_USER, l));
      if (
        (t.X() - e.X()) * (x[1] - e.X()) < 0 ||
        (t.Y() - e.Y()) * (x[2] - e.Y()) < 0
      )
        T *= -1;
      (v = Math.round(T / o) * o),
        Math.abs(v) > JXG.Math.eps && (S = Math.abs(v) / v),
        (x[1] = e.coords.usrCoords[1] + r * v),
        (x[2] = e.coords.usrCoords[2] + i * v),
        (c = v),
        (v = 0),
        (m = 0),
        (h = c / this.visProp.scale),
        (y = x[1]),
        (b = x[2]),
        (p = 0),
        (d = 0);
      do {
        (l = new JXG.Coords(JXG.COORDS_BY_USER, [y, b], this.board)),
          (l.major =
            Math.round((S * v + c) / o) % (this.visProp.minorticks + 1) === 0),
          (w = this._tickEndings(l, j, F, D, P, H, B, l.major));
        if (w.length === 3) {
          (L = S * m + h),
            (Math.abs(L) >= k || this.visProp.drawzero) &&
              L > A &&
              L < O &&
              (this.ticks.push(w),
              l.major
                ? this.labels.push(
                    this._makeLabel(
                      L,
                      l,
                      this.board,
                      this.visProp.drawlabels,
                      this.id,
                      p
                    )
                  )
                : this.labels.push(null),
              p++),
            E == 2 && (S *= -1);
          if (d % 2 === 0 || E === 1) (v += o), (m += u);
        } else (S *= -1), E--;
        d++, (y = x[1] + S * r * v), (b = x[2] + S * i * v);
      } while (E > 0);
      (this.needsUpdate = !0), this.updateRenderer();
    },
    _adjustTickDistance: function (e, t, n, r, i, s) {
      var o,
        u,
        a = 1;
      while (t > 4 * this.minTicksDistance)
        (a /= 10),
          (o = r.usrCoords[1] + i * e * a),
          (u = r.usrCoords[2] + s * e * a),
          (t = r.distance(
            JXG.COORDS_BY_SCREEN,
            new JXG.Coords(JXG.COORDS_BY_USER, [o, u], this.board)
          ));
      while (t < this.minTicksDistance)
        (a *= n),
          (n = n == 5 ? 2 : 5),
          (o = r.usrCoords[1] + i * e * a),
          (u = r.usrCoords[2] + s * e * a),
          (t = r.distance(
            JXG.COORDS_BY_SCREEN,
            new JXG.Coords(JXG.COORDS_BY_USER, [o, u], this.board)
          ));
      return a;
    },
    _tickEndings: function (e, t, n, r, i, s, o, u) {
      var a,
        f,
        l = this.board.canvasWidth,
        c = this.board.canvasHeight,
        h = [-1e3 * l, -1e3 * c],
        p = [-1e3 * l, -1e3 * c],
        d,
        v,
        m,
        g,
        y = 0,
        b = !1;
      return (
        (f = e.scrCoords),
        u
          ? ((d = r), (v = i), (g = this.majStyle))
          : ((d = s), (v = o), (g = this.minStyle)),
        Math.abs(t) < JXG.Math.eps
          ? ((h[0] = f[1]), (h[1] = f[1]), (p[0] = 0), (p[1] = c))
          : Math.abs(n) < JXG.Math.eps
          ? ((h[0] = 0), (h[1] = l), (p[0] = f[2]), (p[1] = f[2]))
          : ((y = 0),
            (m = JXG.Math.crossProduct(
              [0, 0, 1],
              [-v * f[1] - d * f[2], v, d]
            )),
            (m[1] /= m[0]),
            m[1] >= 0 && m[1] <= l && ((h[y] = m[1]), (p[y] = 0), y++),
            (m = JXG.Math.crossProduct(
              [0, 1, 0],
              [-v * f[1] - d * f[2], v, d]
            )),
            (m[2] /= m[0]),
            m[2] >= 0 && m[2] <= c && ((h[y] = 0), (p[y] = m[2]), y++),
            y < 2 &&
              ((m = JXG.Math.crossProduct(
                [c * c, 0, -c],
                [-v * f[1] - d * f[2], v, d]
              )),
              (m[1] /= m[0]),
              m[1] >= 0 && m[1] <= l && ((h[y] = m[1]), (p[y] = c), y++)),
            y < 2 &&
              ((m = JXG.Math.crossProduct(
                [l * l, -l, 0],
                [-v * f[1] - d * f[2], v, d]
              )),
              (m[2] /= m[0]),
              m[2] >= 0 && m[2] <= c && ((h[y] = l), (p[y] = m[2])))),
        (h[0] >= 0 && h[0] <= l && p[0] >= 0 && p[0] <= c) ||
        (h[1] >= 0 && h[1] <= l && p[1] >= 0 && p[1] <= c)
          ? (b = !0)
          : (b = !1),
        g == "finite" &&
          ((h[0] = f[1] + d),
          (p[0] = f[2] - v),
          (h[1] = f[1] - d),
          (p[1] = f[2] + v)),
        b ? [h, p, u] : []
      );
    },
    _makeLabel: function (e, t, n, r, i, s) {
      var o,
        u,
        a,
        f = typeof e == "number";
      return r
        ? ((o = e.toString()),
          Math.abs(e) < JXG.Math.eps && (o = "0"),
          f &&
            (o.length > 5 || o.indexOf("e") != -1) &&
            (o = e.toPrecision(3).toString()),
          f &&
            o.indexOf(".") > -1 &&
            ((o = o.replace(/0+$/, "")), (o = o.replace(/\.$/, ""))),
          this.visProp.scalesymbol.length > 0 && o === "1"
            ? (o = this.visProp.scalesymbol)
            : this.visProp.scalesymbol.length > 0 && o === "0"
            ? (o = "0")
            : (o += this.visProp.scalesymbol),
          (a = {
            id: i + s + "Label",
            isLabel: !0,
            layer: n.options.layer.line,
            highlightStrokeColor: n.options.text.strokeColor,
            highlightStrokeWidth: n.options.text.strokeWidth,
            highlightStrokeOpacity: n.options.text.strokeOpacity,
            visible: this.visProp.visible,
            priv: this.visProp.priv,
          }),
          (a = JXG.deepCopy(a, this.visProp.label)),
          (u = JXG.createText(n, [t.usrCoords[1], t.usrCoords[2], o], a)),
          (u.isDraggable = !1),
          (u.dump = !1),
          (u.distanceX = this.visProp.label.offset[0]),
          (u.distanceY = this.visProp.label.offset[1]),
          u.setCoords(
            t.usrCoords[1] + u.distanceX / n.unitX,
            t.usrCoords[2] + u.distanceY / n.unitY
          ),
          (u.visProp.visible = r),
          u)
        : null;
    },
    removeTickLabels: function () {
      var e;
      if (
        this.labels != null &&
        (this.board.needsFullUpdate || this.needsRegularUpdate) &&
        (this.board.options.renderer != "canvas" ||
          this.board.options.text.display != "internal")
      )
        for (e = 0; e < this.labels.length; e++)
          this.labels[e] != null && this.board.removeObject(this.labels[e]);
    },
    update: function () {
      return this.needsUpdate && this.calculateTicksCoordinates(), this;
    },
    updateRenderer: function () {
      return (
        this.needsUpdate &&
          (this.ticks &&
            this.board.renderer.updateTicks(
              this,
              this.dxMaj,
              this.dyMaj,
              this.dxMin,
              this.dyMin,
              this.minStyle,
              this.majStyle
            ),
          (this.needsUpdate = !1)),
        this
      );
    },
    hideElement: function () {
      var e;
      (this.visProp.visible = !1), this.board.renderer.hide(this);
      for (e = 0; e < this.labels.length; e++)
        JXG.exists(this.labels[e]) && this.labels[e].hideElement();
      return this;
    },
    showElement: function () {
      var e;
      (this.visProp.visible = !0), this.board.renderer.show(this);
      for (e = 0; e < this.labels.length; e++)
        JXG.exists(this.labels[e]) && this.labels[e].showElement();
      return this;
    },
  }),
  (JXG.createTicks = function (e, t, n) {
    var r,
      i,
      s = JXG.copyAttributes(n, e.options, "ticks");
    t.length < 2 ? (i = n.ticksDistance) : (i = t[1]);
    if (
      t[0].elementClass != JXG.OBJECT_CLASS_LINE ||
      !(JXG.isFunction(t[1]) || JXG.isArray(t[1]) || JXG.isNumber(t[1]))
    )
      throw new Error(
        "JSXGraph: Can't create Ticks with parent types '" +
          typeof t[0] +
          "' and '" +
          typeof t[1] +
          "'."
      );
    return (r = new JXG.Ticks(t[0], i, s)), (r.isDraggable = !0), r;
  }),
  JXG.JSXGraph.registerElement("ticks", JXG.createTicks),
  (JXG.Util = {}),
  (JXG.Util.Unzip = function (e) {
    function k() {
      return (x += 8), w < b.length ? b[w++] : -1;
    }
    function L() {
      S = 1;
    }
    function A() {
      var e;
      return (
        x++,
        (e = S & 1),
        (S >>= 1),
        S == 0 && ((S = k()), (e = S & 1), (S = (S >> 1) | 128)),
        e
      );
    }
    function O(e) {
      var t = 0,
        n = e;
      while (n--) t = (t << 1) | A();
      return e && (t = p[t] >> (8 - e)), t;
    }
    function M() {
      f = 0;
    }
    function _(e) {
      h++, (a[f++] = e), t.push(String.fromCharCode(e)), f == 32768 && (f = 0);
    }
    function D() {
      (this.b0 = 0), (this.b1 = 0), (this.jump = null), (this.jumppos = -1);
    }
    function V() {
      for (;;) {
        if (z[U] >= X) return -1;
        if (W[z[U]] == U) return z[U]++;
        z[U]++;
      }
    }
    function $() {
      var e = F[j],
        t;
      r && document.write("<br>len:" + U + " treepos:" + j);
      if (U == 17) return -1;
      j++, U++, (t = V()), r && document.write("<br>IsPat " + t);
      if (t >= 0) (e.b0 = t), r && document.write("<br>b0 " + e.b0);
      else {
        (e.b0 = 32768), r && document.write("<br>b0 " + e.b0);
        if ($()) return -1;
      }
      t = V();
      if (t >= 0)
        (e.b1 = t), r && document.write("<br>b1 " + e.b1), (e.jump = null);
      else {
        (e.b1 = 32768),
          r && document.write("<br>b1 " + e.b1),
          (e.jump = F[j]),
          (e.jumppos = j);
        if ($()) return -1;
      }
      return U--, 0;
    }
    function J(e, t, n, i) {
      var s;
      r &&
        document.write(
          "currentTree " + e + " numval " + t + " lengths " + n + " show " + i
        ),
        (F = e),
        (j = 0),
        (W = n),
        (X = t);
      for (s = 0; s < 17; s++) z[s] = 0;
      U = 0;
      if ($()) return r && alert("invalid huffman tree\n"), -1;
      if (r) {
        document.write("<br>Tree: " + F.length);
        for (var o = 0; o < 32; o++)
          document.write("Places[" + o + "].b0=" + F[o].b0 + "<br>"),
            document.write("Places[" + o + "].b1=" + F[o].b1 + "<br>");
      }
      return 0;
    }
    function K(e) {
      var t,
        n,
        i = 0,
        s = e[i],
        o;
      for (;;) {
        (o = A()), r && document.write("b=" + o);
        if (o) {
          if (!(s.b1 & 32768)) return r && document.write("ret1"), s.b1;
          (s = s.jump), (t = e.length);
          for (n = 0; n < t; n++)
            if (e[n] === s) {
              i = n;
              break;
            }
        } else {
          if (!(s.b0 & 32768)) return r && document.write("ret2"), s.b0;
          i++, (s = e[i]);
        }
      }
      return r && document.write("ret3"), -1;
    }
    function Q() {
      var e, t, n, i, s;
      do {
        (e = A()), (n = O(2));
        switch (n) {
          case 0:
            r && alert("Stored\n");
            break;
          case 1:
            r && alert("Fixed Huffman codes\n");
            break;
          case 2:
            r && alert("Dynamic Huffman codes\n");
            break;
          case 3:
            r && alert("Reserved block type!!\n");
            break;
          default:
            r && alert("Unexpected value %d!\n", n);
        }
        if (n == 0) {
          var o, u;
          L(),
            (o = k()),
            (o |= k() << 8),
            (u = k()),
            (u |= k() << 8),
            (o ^ ~u) & 65535 && document.write("BlockLen checksum mismatch\n");
          while (o--) (t = k()), _(t);
        } else if (n == 1) {
          var l;
          for (;;) {
            (l = p[O(7)] >> 1),
              l > 23
                ? ((l = (l << 1) | A()),
                  l > 199
                    ? ((l -= 128), (l = (l << 1) | A()))
                    : ((l -= 48), l > 143 && (l += 136)))
                : (l += 256);
            if (l < 256) _(l);
            else {
              if (l == 256) break;
              var s, c;
              (l -= 257),
                (s = O(v[l]) + d[l]),
                (l = p[O(5)] >> 3),
                g[l] > 8
                  ? ((c = O(8)), (c |= O(g[l] - 8) << 8))
                  : (c = O(g[l])),
                (c += m[l]);
              for (l = 0; l < s; l++) {
                var t = a[(f - c) & 32767];
                _(t);
              }
            }
          }
        } else if (n == 2) {
          var l,
            h,
            b,
            w,
            E,
            S = new Array(320);
          (b = 257 + O(5)), (w = 1 + O(5)), (E = 4 + O(4));
          for (l = 0; l < 19; l++) S[l] = 0;
          for (l = 0; l < E; l++) S[y[l]] = O(3);
          s = B.length;
          for (i = 0; i < s; i++) B[i] = new D();
          if (J(B, 19, S, 0)) return M(), 1;
          if (r) {
            document.write("<br>distanceTree");
            for (var T = 0; T < B.length; T++)
              document.write(
                "<br>" +
                  B[T].b0 +
                  " " +
                  B[T].b1 +
                  " " +
                  B[T].jump +
                  " " +
                  B[T].jumppos
              );
          }
          (h = b + w), (i = 0);
          var N = -1;
          r && document.write("<br>n=" + h + " bits: " + x + "<br>");
          while (i < h) {
            N++,
              (l = K(B)),
              r &&
                document.write(
                  "<br>" +
                    N +
                    " i:" +
                    i +
                    " decode: " +
                    l +
                    "    bits " +
                    x +
                    "<br>"
                );
            if (l < 16) S[i++] = l;
            else if (l == 16) {
              var C;
              l = 3 + O(2);
              if (i + l > h) return M(), 1;
              C = i ? S[i - 1] : 0;
              while (l--) S[i++] = C;
            } else {
              l == 17 ? (l = 3 + O(3)) : (l = 11 + O(7));
              if (i + l > h) return M(), 1;
              while (l--) S[i++] = 0;
            }
          }
          s = H.length;
          for (i = 0; i < s; i++) H[i] = new D();
          if (J(H, b, S, 0)) return M(), 1;
          s = H.length;
          for (i = 0; i < s; i++) B[i] = new D();
          var P = new Array();
          for (i = b; i < S.length; i++) P[i - b] = S[i];
          if (J(B, w, P, 0)) return M(), 1;
          r && document.write("<br>literalTree");
          for (;;) {
            l = K(H);
            if (l >= 256) {
              var s, c;
              l -= 256;
              if (l == 0) break;
              l--,
                (s = O(v[l]) + d[l]),
                (l = K(B)),
                g[l] > 8
                  ? ((c = O(8)), (c |= O(g[l] - 8) << 8))
                  : (c = O(g[l])),
                (c += m[l]);
              while (s--) {
                var t = a[(f - c) & 32767];
                _(t);
              }
            } else _(l);
          }
        }
      } while (!e);
      return M(), L(), 0;
    }
    function G() {
      r && alert("NEXTFILE"), (t = []);
      var e = [];
      (l = !1),
        (e[0] = k()),
        (e[1] = k()),
        r && alert("type: " + e[0] + " " + e[1]),
        e[0] == parseInt("78", 16) &&
          e[1] == parseInt("da", 16) &&
          (r && alert("GEONExT-GZIP"),
          Q(),
          r && alert(t.join("")),
          (o[s] = new Array(2)),
          (o[s][0] = t.join("")),
          (o[s][1] = "geonext.gxt"),
          s++),
        e[0] == parseInt("1f", 16) &&
          e[1] == parseInt("8b", 16) &&
          (r && alert("GZIP"),
          Y(),
          r && alert(t.join("")),
          (o[s] = new Array(2)),
          (o[s][0] = t.join("")),
          (o[s][1] = "file"),
          s++);
      if (e[0] == parseInt("50", 16) && e[1] == parseInt("4b", 16)) {
        (l = !0), (e[2] = k()), (e[3] = k());
        if (e[2] == parseInt("3", 16) && e[3] == parseInt("4", 16)) {
          (e[0] = k()),
            (e[1] = k()),
            r &&
              alert(
                "ZIP-Version: " + e[1] + " " + e[0] / 10 + "." + (e[0] % 10)
              ),
            (i = k()),
            (i |= k() << 8),
            r && alert("gpflags: " + i);
          var n = k();
          (n |= k() << 8), r && alert("method: " + n), k(), k(), k(), k();
          var u = k();
          (u |= k() << 8), (u |= k() << 16), (u |= k() << 24);
          var a = k();
          (a |= k() << 8), (a |= k() << 16), (a |= k() << 24);
          var f = k();
          (f |= k() << 8),
            (f |= k() << 16),
            (f |= k() << 24),
            r &&
              alert(
                "local CRC: " +
                  u +
                  "\nlocal Size: " +
                  f +
                  "\nlocal CompSize: " +
                  a
              );
          var p = k();
          p |= k() << 8;
          var d = k();
          (d |= k() << 8), r && alert("filelen " + p), (m = 0), (N = []);
          while (p--) {
            var v = k();
            (v == "/") | (v == ":")
              ? (m = 0)
              : m < T - 1 && (N[m++] = String.fromCharCode(v));
          }
          r && alert("nameBuf: " + N), C || (C = N);
          var m = 0;
          while (m < d) (v = k()), m++;
          (c = 4294967295),
            (h = 0),
            (f = 0) && r && alert("skipdir"),
            n == 8 &&
              (Q(),
              r && alert(t.join("")),
              (o[s] = new Array(2)),
              (o[s][0] = t.join("")),
              (o[s][1] = N.join("")),
              s++),
            Y();
        }
      }
    }
    function Y() {
      var e,
        t = [],
        n,
        s,
        o,
        u,
        a;
      i & 8 &&
        ((t[0] = k()),
        (t[1] = k()),
        (t[2] = k()),
        (t[3] = k()),
        t[0] == parseInt("50", 16) &&
        t[1] == parseInt("4b", 16) &&
        t[2] == parseInt("07", 16) &&
        t[3] == parseInt("08", 16)
          ? ((e = k()), (e |= k() << 8), (e |= k() << 16), (e |= k() << 24))
          : (e = t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24)),
        (n = k()),
        (n |= k() << 8),
        (n |= k() << 16),
        (n |= k() << 24),
        (s = k()),
        (s |= k() << 8),
        (s |= k() << 16),
        (s |= k() << 24),
        r && alert("CRC:")),
        l && G(),
        (t[0] = k());
      if (t[0] != 8) return r && alert("Unknown compression method!"), 0;
      (i = k()),
        r && i & ~parseInt("1f", 16) && alert("Unknown flags set!"),
        k(),
        k(),
        k(),
        k(),
        k(),
        (o = k());
      if (i & 4) {
        (t[0] = k()),
          (t[2] = k()),
          (U = t[0] + 256 * t[1]),
          r && alert("Extra field size: " + U);
        for (u = 0; u < U; u++) k();
      }
      if (i & 8) {
        (u = 0), (N = []);
        while ((a = k())) {
          if (a == "7" || a == ":") u = 0;
          u < T - 1 && (N[u++] = a);
        }
        r && alert("original file name: " + N);
      }
      if (i & 16) while ((a = k()));
      i & 2 && (k(), k()),
        Q(),
        (e = k()),
        (e |= k() << 8),
        (e |= k() << 16),
        (e |= k() << 24),
        (s = k()),
        (s |= k() << 8),
        (s |= k() << 16),
        (s |= k() << 24),
        l && G();
    }
    var t = [],
      n = "",
      r = !1,
      i,
      s = 0,
      o = [],
      u,
      a = new Array(32768),
      f = 0,
      l = !1,
      c,
      h,
      p = [
        0,
        128,
        64,
        192,
        32,
        160,
        96,
        224,
        16,
        144,
        80,
        208,
        48,
        176,
        112,
        240,
        8,
        136,
        72,
        200,
        40,
        168,
        104,
        232,
        24,
        152,
        88,
        216,
        56,
        184,
        120,
        248,
        4,
        132,
        68,
        196,
        36,
        164,
        100,
        228,
        20,
        148,
        84,
        212,
        52,
        180,
        116,
        244,
        12,
        140,
        76,
        204,
        44,
        172,
        108,
        236,
        28,
        156,
        92,
        220,
        60,
        188,
        124,
        252,
        2,
        130,
        66,
        194,
        34,
        162,
        98,
        226,
        18,
        146,
        82,
        210,
        50,
        178,
        114,
        242,
        10,
        138,
        74,
        202,
        42,
        170,
        106,
        234,
        26,
        154,
        90,
        218,
        58,
        186,
        122,
        250,
        6,
        134,
        70,
        198,
        38,
        166,
        102,
        230,
        22,
        150,
        86,
        214,
        54,
        182,
        118,
        246,
        14,
        142,
        78,
        206,
        46,
        174,
        110,
        238,
        30,
        158,
        94,
        222,
        62,
        190,
        126,
        254,
        1,
        129,
        65,
        193,
        33,
        161,
        97,
        225,
        17,
        145,
        81,
        209,
        49,
        177,
        113,
        241,
        9,
        137,
        73,
        201,
        41,
        169,
        105,
        233,
        25,
        153,
        89,
        217,
        57,
        185,
        121,
        249,
        5,
        133,
        69,
        197,
        37,
        165,
        101,
        229,
        21,
        149,
        85,
        213,
        53,
        181,
        117,
        245,
        13,
        141,
        77,
        205,
        45,
        173,
        109,
        237,
        29,
        157,
        93,
        221,
        61,
        189,
        125,
        253,
        3,
        131,
        67,
        195,
        35,
        163,
        99,
        227,
        19,
        147,
        83,
        211,
        51,
        179,
        115,
        243,
        11,
        139,
        75,
        203,
        43,
        171,
        107,
        235,
        27,
        155,
        91,
        219,
        59,
        187,
        123,
        251,
        7,
        135,
        71,
        199,
        39,
        167,
        103,
        231,
        23,
        151,
        87,
        215,
        55,
        183,
        119,
        247,
        15,
        143,
        79,
        207,
        47,
        175,
        111,
        239,
        31,
        159,
        95,
        223,
        63,
        191,
        127,
        255,
      ],
      d = [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        13,
        15,
        17,
        19,
        23,
        27,
        31,
        35,
        43,
        51,
        59,
        67,
        83,
        99,
        115,
        131,
        163,
        195,
        227,
        258,
        0,
        0,
      ],
      v = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3,
        4,
        4,
        4,
        4,
        5,
        5,
        5,
        5,
        0,
        99,
        99,
      ],
      m = [
        1,
        2,
        3,
        4,
        5,
        7,
        9,
        13,
        17,
        25,
        33,
        49,
        65,
        97,
        129,
        193,
        257,
        385,
        513,
        769,
        1025,
        1537,
        2049,
        3073,
        4097,
        6145,
        8193,
        12289,
        16385,
        24577,
      ],
      g = [
        0,
        0,
        0,
        0,
        1,
        1,
        2,
        2,
        3,
        3,
        4,
        4,
        5,
        5,
        6,
        6,
        7,
        7,
        8,
        8,
        9,
        9,
        10,
        10,
        11,
        11,
        12,
        12,
        13,
        13,
      ],
      y = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      b = e,
      w = 0,
      E = 0,
      S = 1,
      x = 0,
      T = 256,
      N = [],
      C,
      P = 288,
      H = new Array(P),
      B = new Array(32),
      j = 0,
      F = null,
      I = null,
      q = new Array(64),
      R = new Array(64),
      U = 0,
      z = new Array(17);
    z[0] = 0;
    var W, X;
    (JXG.Util.Unzip.prototype.unzipFile = function (e) {
      var t;
      this.unzip();
      for (t = 0; t < o.length; t++) if (o[t][1] == e) return o[t][0];
    }),
      (JXG.Util.Unzip.prototype.unzip = function () {
        return r && alert(b), G(), o;
      });
  }),
  (JXG.Util.Base64 = {
    _keyStr:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (e) {
      var t = [],
        n,
        r,
        i,
        s,
        o,
        u,
        a,
        f = 0;
      e = JXG.Util.Base64._utf8_encode(e);
      while (f < e.length)
        (n = e.charCodeAt(f++)),
          (r = e.charCodeAt(f++)),
          (i = e.charCodeAt(f++)),
          (s = n >> 2),
          (o = ((n & 3) << 4) | (r >> 4)),
          (u = ((r & 15) << 2) | (i >> 6)),
          (a = i & 63),
          isNaN(r) ? (u = a = 64) : isNaN(i) && (a = 64),
          t.push(
            [
              this._keyStr.charAt(s),
              this._keyStr.charAt(o),
              this._keyStr.charAt(u),
              this._keyStr.charAt(a),
            ].join("")
          );
      return t.join("");
    },
    decode: function (e, t) {
      var n = [],
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l = 0;
      e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (l < e.length)
        (o = this._keyStr.indexOf(e.charAt(l++))),
          (u = this._keyStr.indexOf(e.charAt(l++))),
          (a = this._keyStr.indexOf(e.charAt(l++))),
          (f = this._keyStr.indexOf(e.charAt(l++))),
          (r = (o << 2) | (u >> 4)),
          (i = ((u & 15) << 4) | (a >> 2)),
          (s = ((a & 3) << 6) | f),
          n.push(String.fromCharCode(r)),
          a != 64 && n.push(String.fromCharCode(i)),
          f != 64 && n.push(String.fromCharCode(s));
      return (n = n.join("")), t && (n = JXG.Util.Base64._utf8_decode(n)), n;
    },
    _utf8_encode: function (e) {
      e = e.replace(/\r\n/g, "\n");
      var t = "";
      for (var n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        r < 128
          ? (t += String.fromCharCode(r))
          : r > 127 && r < 2048
          ? ((t += String.fromCharCode((r >> 6) | 192)),
            (t += String.fromCharCode((r & 63) | 128)))
          : ((t += String.fromCharCode((r >> 12) | 224)),
            (t += String.fromCharCode(((r >> 6) & 63) | 128)),
            (t += String.fromCharCode((r & 63) | 128)));
      }
      return t;
    },
    _utf8_decode: function (e) {
      var t = [],
        n = 0,
        r = 0,
        i = 0,
        s = 0;
      while (n < e.length)
        (r = e.charCodeAt(n)),
          r < 128
            ? (t.push(String.fromCharCode(r)), n++)
            : r > 191 && r < 224
            ? ((i = e.charCodeAt(n + 1)),
              t.push(String.fromCharCode(((r & 31) << 6) | (i & 63))),
              (n += 2))
            : ((i = e.charCodeAt(n + 1)),
              (s = e.charCodeAt(n + 2)),
              t.push(
                String.fromCharCode(
                  ((r & 15) << 12) | ((i & 63) << 6) | (s & 63)
                )
              ),
              (n += 3));
      return t.join("");
    },
    _destrip: function (e, t) {
      var n = [],
        r,
        i,
        s = [];
      t == null && (t = 76), e.replace(/ /g, ""), (r = e.length / t);
      for (i = 0; i < r; i++) n[i] = e.substr(i * t, t);
      r != e.length / t && (n[n.length] = e.substr(r * t, e.length - r * t));
      for (i = 0; i < n.length; i++) s.push(n[i]);
      return s.join("\n");
    },
    decodeAsArray: function (e) {
      var t = this.decode(e),
        n = [],
        r;
      for (r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
      return n;
    },
    decodeGEONExT: function (e) {
      return decodeAsArray(destrip(e), !1);
    },
  }),
  (JXG.Util.asciiCharCodeAt = function (e, t) {
    var n = e.charCodeAt(t);
    if (n > 255)
      switch (n) {
        case 8364:
          n = 128;
          break;
        case 8218:
          n = 130;
          break;
        case 402:
          n = 131;
          break;
        case 8222:
          n = 132;
          break;
        case 8230:
          n = 133;
          break;
        case 8224:
          n = 134;
          break;
        case 8225:
          n = 135;
          break;
        case 710:
          n = 136;
          break;
        case 8240:
          n = 137;
          break;
        case 352:
          n = 138;
          break;
        case 8249:
          n = 139;
          break;
        case 338:
          n = 140;
          break;
        case 381:
          n = 142;
          break;
        case 8216:
          n = 145;
          break;
        case 8217:
          n = 146;
          break;
        case 8220:
          n = 147;
          break;
        case 8221:
          n = 148;
          break;
        case 8226:
          n = 149;
          break;
        case 8211:
          n = 150;
          break;
        case 8212:
          n = 151;
          break;
        case 732:
          n = 152;
          break;
        case 8482:
          n = 153;
          break;
        case 353:
          n = 154;
          break;
        case 8250:
          n = 155;
          break;
        case 339:
          n = 156;
          break;
        case 382:
          n = 158;
          break;
        case 376:
          n = 159;
          break;
        default:
      }
    return n;
  }),
  (JXG.Util.utf8Decode = function (e) {
    var t = [],
      n = 0,
      r = 0,
      i = 0,
      s = 0,
      o;
    if (!JXG.exists(e)) return "";
    while (n < e.length)
      (r = e.charCodeAt(n)),
        r < 128
          ? (t.push(String.fromCharCode(r)), n++)
          : r > 191 && r < 224
          ? ((s = e.charCodeAt(n + 1)),
            t.push(String.fromCharCode(((r & 31) << 6) | (s & 63))),
            (n += 2))
          : ((s = e.charCodeAt(n + 1)),
            (o = e.charCodeAt(n + 2)),
            t.push(
              String.fromCharCode(((r & 15) << 12) | ((s & 63) << 6) | (o & 63))
            ),
            (n += 3));
    return t.join("");
  }),
  (JXG.Util.genUUID = function () {
    var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
        ""
      ),
      t = new Array(36),
      n = 0,
      r;
    for (var i = 0; i < 36; i++)
      i == 8 || i == 13 || i == 18 || i == 23
        ? (t[i] = "-")
        : i == 14
        ? (t[i] = "4")
        : (n <= 2 && (n = (33554432 + Math.random() * 16777216) | 0),
          (r = n & 15),
          (n >>= 4),
          (t[i] = e[i == 19 ? (r & 3) | 8 : r]));
    return t.join("");
  }),
  (JXG.PsTricks = {
    convert: function (e) {
      var t = new JXG.Coords(JXG.COORDS_BY_SCREEN, [0, 0], e),
        n = new JXG.Coords(
          JXG.COORDS_BY_SCREEN,
          [e.canvasWidth, e.canvasHeight],
          e
        ),
        r,
        i,
        s = [];
      s.push(
        "\\begin{pspicture*}(" +
          t.usrCoords[1] +
          "," +
          n.usrCoords[2] +
          ")(" +
          n.usrCoords[1] +
          "," +
          t.usrCoords[2] +
          ")\n"
      );
      for (r in e.objects) {
        i = e.objects[r];
        if (i.visProp.visible)
          switch (i.elementClass) {
            case JXG.OBJECT_CLASS_CIRCLE:
              s.push(this.addCircle(i));
              break;
            case JXG.OBJECT_CLASS_LINE:
              s.push(this.addLine(i));
              break;
            case JXG.OBJECT_CLASS_POINT:
              s.push(this.addPoint(i));
              break;
            default:
              switch (i.type) {
                case JXG.OBJECT_TYPE_ARC:
                  s.push(this.addArc(i));
                  break;
                case JXG.OBJECT_TYPE_SECTOR:
                  s.push(this.addArc(i)), s.push(this.addSector(i));
                  break;
                case JXG.OBJECT_TYPE_POLYGON:
                  s.push(this.addPolygon(i));
                  break;
                case JXG.OBJECT_TYPE_ANGLE:
                  s.push(this.addAngle(i));
              }
          }
      }
      return s.push("\\end{pspicture*}"), s.join("\n");
    },
    setArrows: function (e) {
      var t = "";
      return (
        e.visProp.firstarrow && e.visProp.lastarrow
          ? (t = "{<->}")
          : e.visProp.firstarrow
          ? (t = "{<-}")
          : e.visProp.lastarrow && (t = "{->}"),
        t
      );
    },
    drawWedge: function (e, t, n, r, i, s) {
      var o = "";
      return (
        e != "none" &&
          t > 0 &&
          ((o +=
            "\\pswedge[linestyle=none, fillstyle=solid, fillcolor=" +
            this.parseColor(e) +
            ", opacity=" +
            t.toFixed(5) +
            "]"),
          (o += "(" + n.join(",") + "){" + r + "}{" + i + "}{" + s + "}\n")),
        o
      );
    },
    addPoint: function (e) {
      var t =
          "\\psdot[linecolor=" +
          this.parseColor(e.visProp.strokecolor) +
          ",dotstyle=",
        n = e.normalizeFace(e.visProp.face) || "o",
        r = e.visProp.size > 4 ? 4 : e.visProp.size,
        i = [0, 0, "2pt 2", "5pt 2", "5pt 3"];
      return (
        n == "x"
          ? (t += "x, dotsize=" + i[r])
          : n == "o"
          ? ((t += "*, dotsize="),
            r == 1
              ? (t += "2pt 2")
              : r == 2
              ? (t += "4pt 2")
              : r == 3
              ? (t += "6pt 2")
              : r == 4 && (t += "6pt 3"))
          : n == "[]"
          ? (t += "square*, dotsize=" + i[r])
          : n == "+" && (t += "+, dotsize=" + i[r]),
        (t += "](" + e.coords.usrCoords.slice(1).join(",") + ")\n"),
        (t +=
          "\\rput(" +
          (e.coords.usrCoords[1] + 15 / e.board.unitY) +
          "," +
          (e.coords.usrCoords[2] + 15 / e.board.unitY) +
          "){\\small $" +
          e.name +
          "$}\n"),
        t
      );
    },
    addLine: function (e) {
      var t = new JXG.Coords(
          JXG.COORDS_BY_USER,
          e.point1.coords.usrCoords,
          e.board
        ),
        n = new JXG.Coords(
          JXG.COORDS_BY_USER,
          e.point2.coords.usrCoords,
          e.board
        ),
        r =
          "\\psline[linecolor=" +
          this.parseColor(e.visProp.strokecolor) +
          ", linewidth=" +
          e.visProp.strokewidth +
          "px]";
      return (
        (e.visProp.straightfirst || e.visProp.straightlast) &&
          JXG.Math.Geometry.calcStraight(e, t, n),
        (r += this.setArrows(e)),
        (r +=
          "(" +
          t.usrCoords.slice(1).join(",") +
          ")(" +
          n.usrCoords.slice(2).join(",") +
          ")\n"),
        r
      );
    },
    addCircle: function (e) {
      var t = e.Radius(),
        n =
          "\\pscircle[linecolor=" +
          this.parseColor(e.visProp.strokecolor) +
          ", linewidth=" +
          e.visProp.strokewidth +
          "px";
      return (
        e.visProp.fillcolor != "none" &&
          e.visProp.fillopacity != 0 &&
          (n +=
            ", fillstyle=solid, fillcolor=" +
            this.parseColor(e.visProp.fillcolor) +
            ", opacity=" +
            e.visProp.fillopacity.toFixed(5)),
        (n +=
          "](" +
          e.center.coords.usrCoords.slice(1).join("1") +
          "){" +
          t +
          "}\n"),
        n
      );
    },
    addPolygon: function (e) {
      var t =
          "\\pspolygon[linestyle=none, fillstyle=solid, fillcolor=" +
          this.parseColor(e.visProp.fillcolor) +
          ", opacity=" +
          e.visProp.fillopacity.toFixed(5) +
          "]",
        n;
      for (n = 0; n < e.vertices.length; n++)
        t += "(" + e.vertices[n].coords.usrCoords.slice(1).join(",") + ")";
      return (t += "\n"), t;
    },
    addArc: function (e) {
      var t = e.Radius(),
        n = {
          coords: new JXG.Coords(
            JXG.COORDS_BY_USER,
            [e.board.canvasWidth / e.board.unitY, e.center.coords.usrCoords[2]],
            e.board
          ),
        },
        r = JXG.Math.Geometry.trueAngle(n, e.center, e.point2).toFixed(4),
        i = JXG.Math.Geometry.trueAngle(n, e.center, e.point3).toFixed(4),
        s =
          "\\psarc[linecolor=" +
          this.parseColor(e.visProp.strokecolor) +
          ", linewidth=" +
          e.visProp.strokewidth +
          "px]";
      return (
        (s += this.setArrows(e)),
        (s +=
          "(" +
          e.center.coords.usrCoords.slice(1).join(",") +
          "){" +
          t +
          "}{" +
          r +
          "}{" +
          i +
          "}\n"),
        s
      );
    },
    addSector: function (e) {
      var t = e.Radius(),
        n = {
          coords: new JXG.Coords(
            JXG.COORDS_BY_USER,
            [e.board.canvasWidth / e.board.unitY, e.point1.coords.usrCoords[2]],
            e.board
          ),
        },
        r = JXG.Math.Geometry.trueAngle(n, e.point1, e.point2).toFixed(4),
        i = JXG.Math.Geometry.trueAngle(n, e.point1, e.point3).toFixed(4);
      return this.drawWedge(
        e.visProp.fillcolor,
        e.visProp.fillopacity,
        e.point1.coords.usrCoords.slice(1),
        t,
        r,
        i
      );
    },
    addAngle: function (e) {
      var t = e.radius,
        n = {
          coords: new JXG.Coords(
            JXG.COORDS_BY_USER,
            [e.board.canvasWidth / e.board.unitY, e.point2.coords.usrCoords[2]],
            e.board
          ),
        },
        r = JXG.Math.Geometry.trueAngle(n, e.point2, e.point1).toFixed(4),
        i = JXG.Math.Geometry.trueAngle(n, e.point2, e.point3).toFixed(4),
        s;
      return (
        (s = this.drawWedge(
          e.visProp.fillcolor,
          e.visProp.fillopacity,
          e.point2.coords.usrCoords.slice(1),
          t,
          r,
          i
        )),
        (s +=
          "\\psarc[linecolor=" +
          this.parseColor(e.visProp.strokecolor) +
          ", linewidth=" +
          e.visProp.strokewidth +
          "px]"),
        (s +=
          "(" +
          e.point2.coords.usrCoords.slice(1).join(",") +
          "){" +
          t +
          "}{" +
          r +
          "}{" +
          i +
          "}\n"),
        s
      );
    },
    parseColor: function (e) {
      var t = JXG.rgbParser(e);
      return (
        "{[rgb]{" + t[0] / 255 + "," + t[1] / 255 + "," + t[2] / 255 + "}}"
      );
    },
  }),
  (JXG.Server = function () {}),
  (JXG.Server.modules = function () {}),
  (JXG.Server.runningCalls = {}),
  (JXG.Server.handleError = function (e) {
    alert("error occured, server says: " + e.message);
  }),
  (JXG.Server.callServer = function (e, t, n, r) {
    var i, s, o, u, a, f, l;
    (r = r || !1), (u = "");
    for (l in n) u += "&" + escape(l) + "=" + escape(n[l]);
    f = JXG.toJSON(n);
    do a = e + Math.floor(Math.random() * 4096);
    while (typeof this.runningCalls[a] != "undefined");
    (this.runningCalls[a] = { action: e }),
      typeof n.module != "undefined" &&
        (this.runningCalls[a].module = n.module),
      (i = JXG.serverBase + "JXGServer.py"),
      (s =
        "action=" +
        escape(e) +
        "&id=" +
        a +
        "&dataJSON=" +
        escape(JXG.Util.Base64.encode(f))),
      (this.cbp = function (e) {
        var n, r, i, s, o, u, a, f;
        (n = new JXG.Util.Unzip(JXG.Util.Base64.decodeAsArray(e)).unzip()),
          JXG.isArray(n) && n.length > 0 && (n = n[0][0]);
        if (typeof n != "string") return;
        r =
          window.JSON && window.JSON.parse
            ? window.JSON.parse(n)
            : new Function("return " + n)();
        if (r.type == "error") this.handleError(r);
        else if (r.type == "response") {
          u = r.id;
          for (a = 0; a < r.fields.length; a++)
            (i = r.fields[a]),
              (s =
                i.namespace +
                (typeof new Function("return " + i.namespace)() == "object"
                  ? "."
                  : ".prototype.") +
                i.name +
                " = " +
                i.value),
              new Function(s)();
          for (a = 0; a < r.handler.length; a++) {
            (i = r.handler[a]), (o = []);
            for (f = 0; f < i.parameters.length; f++)
              o[f] = '"' + i.parameters[f] + '": ' + i.parameters[f];
            (s =
              "if(typeof JXG.Server.modules." +
              this.runningCalls[u].module +
              ' == "undefined")' +
              "JXG.Server.modules." +
              this.runningCalls[u].module +
              " = {};"),
              (s +=
                "JXG.Server.modules." +
                this.runningCalls[u].module +
                "." +
                i.name +
                "_cb = " +
                i.callback +
                ";"),
              (s +=
                "JXG.Server.modules." +
                this.runningCalls[u].module +
                "." +
                i.name +
                " = function (" +
                i.parameters.join(",") +
                ", __JXGSERVER_CB__, __JXGSERVER_SYNC) {" +
                'if(typeof __JXGSERVER_CB__ == "undefined") __JXGSERVER_CB__ = JXG.Server.modules.' +
                this.runningCalls[u].module +
                "." +
                i.name +
                "_cb;" +
                "var __JXGSERVER_PAR__ = {" +
                o.join(",") +
                ', "module": "' +
                this.runningCalls[u].module +
                '", "handler": "' +
                i.name +
                '" };' +
                'JXG.Server.callServer("exec", __JXGSERVER_CB__, __JXGSERVER_PAR__, __JXGSERVER_SYNC);' +
                "};"),
              new Function(s)();
          }
          delete this.runningCalls[u], t(r.data);
        }
      }),
      (this.cb = JXG.bind(this.cbp, this)),
      window.XMLHttpRequest
        ? ((o = new XMLHttpRequest()),
          o.overrideMimeType("text/plain; charset=iso-8859-1"))
        : (o = new ActiveXObject("Microsoft.XMLHTTP"));
    if (!o) return !1;
    o.open("POST", i, !r),
      o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      r ||
        (o.onreadystatechange = (function (e) {
          return function () {
            switch (o.readyState) {
              case 4:
                o.status == 200 && e(o.responseText);
                break;
              default:
                return !1;
            }
          };
        })(this.cb)),
      o.send(s),
      r && this.cb(o.responseText);
  }),
  (JXG.Server.loadModule_cb = function (e) {
    var t;
    for (t = 0; t < e.length; t++) alert(e[t].name + ": " + e[t].value);
  }),
  (JXG.Server.loadModule = function (e) {
    return JXG.Server.callServer(
      "load",
      JXG.Server.loadModule_cb,
      { module: e },
      !0
    );
  }),
  (JXG.Server.load = JXG.Server.loadModule),
  (JXG.DataSource = function () {
    return (
      (this.data = []), (this.columnHeaders = []), (this.rowHeaders = []), this
    );
  }),
  JXG.extend(JXG.DataSource.prototype, {
    loadFromArray: function (e, t, n) {
      var r, i, s;
      typeof t == "undefined" && (t = !1),
        typeof n == "undefined" && (n = !1),
        JXG.isArray(t) && ((this.columnHeaders = t), (t = !1)),
        JXG.isArray(n) && ((this.rowHeaders = n), (n = !1)),
        (this.data = []),
        t && (this.columnHeaders = []),
        n && (this.rowHeaders = []);
      if (typeof e != "undefined") {
        this.data = new Array(e.length);
        for (r = 0; r < e.length; r++) {
          this.data[r] = new Array(e[r].length);
          for (i = 0; i < e[r].length; i++)
            (s = e[r][i]),
              "" + parseFloat(s) == s
                ? (this.data[r][i] = parseFloat(s))
                : s != "-"
                ? (this.data[r][i] = s)
                : (this.data[r][i] = NaN);
        }
        t &&
          ((this.columnHeaders = this.data[0].slice(1)),
          (this.data = this.data.slice(1)));
        if (n) {
          this.rowHeaders = new Array();
          for (r = 0; r < this.data.length; r++)
            this.rowHeaders.push(this.data[r][0]),
              (this.data[r] = this.data[r].slice(1));
        }
      }
      return this;
    },
    loadFromTable: function (e, t, n) {
      var r, i, s, o, u, a;
      typeof t == "undefined" && (t = !1),
        typeof n == "undefined" && (n = !1),
        JXG.isArray(t) && ((this.columnHeaders = t), (t = !1)),
        JXG.isArray(n) && ((this.rowHeaders = n), (n = !1)),
        (this.data = []),
        t && (this.columnHeaders = []),
        n && (this.rowHeaders = []),
        (e = document.getElementById(e));
      if (typeof e != "undefined") {
        (r = e.getElementsByTagName("tr")), (this.data = new Array(r.length));
        for (i = 0; i < r.length; i++) {
          (o = r[i].getElementsByTagName("td")),
            (this.data[i] = new Array(o.length));
          for (s = 0; s < o.length; s++)
            (u = o[s].innerHTML),
              "" + parseFloat(u) == u
                ? (this.data[i][s] = parseFloat(u))
                : u != "-"
                ? (this.data[i][s] = u)
                : (this.data[i][s] = NaN);
        }
        t &&
          ((this.columnHeaders = this.data[0].slice(1)),
          (this.data = this.data.slice(1)));
        if (n) {
          this.rowHeaders = new Array();
          for (i = 0; i < this.data.length; i++)
            this.rowHeaders.push(this.data[i][0]),
              (this.data[i] = this.data[i].slice(1));
        }
      }
      return this;
    },
    addColumn: function (e, t, n) {},
    addRow: function (e, t, n) {},
    getColumn: function (e) {
      var t = new Array(this.data.length),
        n;
      if (typeof e == "string")
        for (n = 0; n < this.columnHeaders.length; n++)
          if (e == this.columnHeaders[n]) {
            e = n;
            break;
          }
      for (n = 0; n < this.data.length; n++)
        this.data[n].length > e && (t[n] = parseFloat(this.data[n][e]));
      return t;
    },
    getRow: function (e) {
      var t, n;
      if (typeof e == "string")
        for (n = 0; n < this.rowHeaders.length; n++)
          if (e == this.rowHeaders[n]) {
            e = n;
            break;
          }
      t = new Array(this.data[e].length);
      for (n = 0; n < this.data[e].length; n++) t[n] = this.data[e][n];
      return t;
    },
  }),
  (JXG.JessieCode = function (e, t) {
    var n;
    (this.sstack = [{}]),
      (this.scope = 0),
      (this.pstack = [[]]),
      (this.dpstack = [[]]),
      (this.pscope = 0),
      (this.propstack = [{}]),
      (this.propscope = 0),
      (this.propobj = 0),
      (this.lhs = []),
      (this.isLHS = !1),
      (this.warnLog = "jcwarn"),
      (this.builtIn = this.defineBuiltIn()),
      (this.board = null),
      (this.lineToElement = {}),
      (this.countLines = !0),
      (this.parCurLine = 1),
      (this.parCurColumn = 0),
      (this.line = 1),
      (this.col = 1),
      (this.code = ""),
      typeof e == "string" && this.parse(e);
  }),
  JXG.extend(JXG.JessieCode.prototype, {
    node: function (e, t, n) {
      return { type: e, value: t, children: n };
    },
    createNode: function (e, t, n) {
      var r = this.node(e, t, []),
        i;
      for (i = 2; i < arguments.length; i++) r.children.push(arguments[i]);
      return (r.line = this.parCurLine), (r.col = this.parCurColumn), r;
    },
    getElementById: function (e) {
      return this.board.objects[e];
    },
    creator: (function () {
      var e = {},
        t;
      return (
        (t = function (t) {
          var n;
          return typeof e[this.board.id + t] == "function"
            ? e[this.board.id + t]
            : ((n = (function (e) {
                return function (n, r) {
                  var i;
                  return (
                    JXG.exists(r)
                      ? (i = r)
                      : (i = {
                          name: e.lhs[e.scope] !== 0 ? e.lhs[e.scope] : "",
                        }),
                    e.board.create(t, n, i)
                  );
                };
              })(this)),
              (n.creator = !0),
              (e[this.board.id + t] = n),
              n);
        }),
        (t.clearCache = function () {
          e = {};
        }),
        t
      );
    })(),
    letvar: function (e, t) {
      this.builtIn[e] && this._warn('"' + e + '" is a predefined value.'),
        (this.sstack[this.scope][e] = t);
    },
    isLocalVariable: function (e) {
      var t;
      for (t = this.scope; t > -1; t--)
        if (JXG.exists(this.sstack[t][e])) return t;
      return -1;
    },
    isCreator: function (e) {
      return !!JXG.JSXGraph.elements[e];
    },
    isMathMethod: function (e) {
      return e !== "E" && !!Math[e];
    },
    isBuiltIn: function (e) {
      return !!this.builtIn[e];
    },
    getvar: function (e, t) {
      var n, r;
      (t = JXG.def(t, !1)), (n = this.isLocalVariable(e));
      if (n > -1) return this.sstack[n][e];
      if (this.isCreator(e)) return this.creator(e);
      if (this.isMathMethod(e)) return Math[e];
      if (this.isBuiltIn(e)) return this.builtIn[e];
      if (!t) {
        n = JXG.getRef(this.board, e);
        if (n !== e) return n;
      }
      return r;
    },
    getvarJS: function (e, t, n) {
      var r;
      (t = JXG.def(t, !1)), (n = JXG.def(n, !1));
      if (JXG.indexOf(this.pstack[this.pscope], e) > -1) return e;
      r = this.isLocalVariable(e);
      if (r > -1 && !n) return "$jc$.sstack[" + r + "]['" + e + "']";
      if (this.isCreator(e))
        return (
          "(function () { var a = Array.prototype.slice.call(arguments, 0), props = " +
          (n ? "a.pop()" : "{}") +
          "; return $jc$.board.create.apply($jc$.board, ['" +
          e +
          "'].concat([a, props])); })"
        );
      n &&
        this._error(
          "Syntax error (attribute values are allowed with element creators only)"
        );
      if (this.isMathMethod(e)) return "Math." + e;
      if (this.isBuiltIn(e)) return this.builtIn[e].src || this.builtIn[e];
      if (!t) {
        if (JXG.isId(this.board, e)) return "$jc$.board.objects['" + e + "']";
        if (JXG.isName(this.board, e))
          return "$jc$.board.elementsByName['" + e + "']";
        if (JXG.isGroup(this.board, e)) return "$jc$.board.groups['" + e + "']";
      }
      return "";
    },
    mergeAttributes: function () {
      var e,
        t = {};
      for (e = 0; e < arguments.length; e++)
        t = JXG.deepCopy(t, arguments[e], !0);
      return t;
    },
    setProp: function (e, t, n) {
      var r = {},
        i,
        s;
      e.elementClass !== JXG.OBJECT_CLASS_POINT || (t !== "X" && t !== "Y")
        ? e.type !== JXG.OBJECT_TYPE_TEXT || (t !== "X" && t !== "Y")
          ? e.type && e.elementClass && e.visProp
            ? ((r[t] = n), e.setProperty(r))
            : (e[t] = n)
          : (typeof n == "number"
              ? (e[t] = function () {
                  return n;
                })
              : typeof n == "function"
              ? ((e.isDraggable = !1), (e[t] = n))
              : typeof n == "string" &&
                ((e.isDraggable = !1),
                (e[t] = JXG.createFunction(n, this.board, null, !0)),
                (e[t + "jc"] = n)),
            (e[t].origin = n),
            this.board.update())
        : ((t = t.toLowerCase()),
          e.isDraggable && typeof n == "number"
            ? ((i = t === "x" ? n : e.X()),
              (s = t === "y" ? n : e.Y()),
              e.setPosition(JXG.COORDS_BY_USER, [i, s]))
            : !e.isDraggable || (typeof n != "function" && typeof n != "string")
            ? e.isDraggable ||
              ((i = t === "x" ? n : e.XEval.origin),
              (s = t === "y" ? n : e.YEval.origin),
              e.addConstraint([i, s]))
            : ((i = t === "x" ? n : e.coords.usrCoords[1]),
              (s = t === "y" ? n : e.coords.usrCoords[2]),
              e.addConstraint([i, s])),
          this.board.update());
    },
    utf8_encode: function (e) {
      var t = [],
        n,
        r;
      for (n = 0; n < e.length; n++)
        (r = e.charCodeAt(n)),
          r < 128
            ? t.push(String.fromCharCode(r))
            : t.push("&#x" + r.toString(16) + ";");
      return t.join("");
    },
    parse: function (e, t, n) {
      var r = 0,
        i = [],
        s = [],
        o = this,
        u,
        a = [
          "Abs",
          "ACos",
          "ASin",
          "ATan",
          "Ceil",
          "Cos",
          "Exp",
          "Factorial",
          "Floor",
          "Log",
          "Max",
          "Min",
          "Random",
          "Round",
          "Sin",
          "Sqrt",
          "Tan",
          "Trunc",
          "If",
          "Deg",
          "Rad",
          "Dist",
        ],
        f,
        l = JXG.Text.prototype.setText,
        c = e.replace(/\r\n/g, "\n").split("\n"),
        h,
        p,
        d = [];
      n || (this.code += e + "\n"),
        (JXG.Text.prototype.setText = JXG.Text.prototype.setTextJessieCode);
      try {
        JXG.exists(t) || (t = !1);
        for (h = 0; h < c.length; h++)
          if (JXG.trim(c[h])[0] !== "/" || JXG.trim(c[h])[1] !== "/") {
            if (t)
              for (p = 0; p < a.length; p++)
                (f = new RegExp(a[p] + "\\(", "g")),
                  (c[h] = c[h].replace(f, a[p].toLowerCase() + "("));
            d.push(c[h]);
          } else d.push("");
        (e = d.join("\n")), (e = this.utf8_encode(e));
        if ((r = this._parse(e, i, s)) > 0)
          for (h = 0; h < r; h++)
            (this.line = i[h].line),
              this._error(
                "Parse error in line " +
                  i[h].line +
                  " near >" +
                  e.substr(i[h].offset, 30) +
                  '<, expecting "' +
                  s[h].join() +
                  '"'
              );
      } catch (v) {
        throw ((JXG.Text.prototype.setText = l), v);
      }
      JXG.Text.prototype.setText = l;
    },
    snippet: function (e, t, n, r) {
      var i, s, o, u;
      return (
        (i = "jxg__tmp__intern_" + JXG.Util.genUUID().replace(/\-/g, "")),
        JXG.exists(t) || (t = !0),
        JXG.exists(n) || (n = ""),
        JXG.exists(r) || (r = !1),
        (o = this.sstack[0][i]),
        (this.countLines = !1),
        (s =
          i +
          " = " +
          (t ? " function (" + n + ") { return " : "") +
          e +
          (t ? "; }" : "") +
          ";"),
        this.parse(s, r, !0),
        (u = this.sstack[0][i]),
        JXG.exists(o) ? (this.sstack[0][i] = o) : delete this.sstack[0][i],
        (this.countLines = !0),
        u
      );
    },
    replaceIDs: function (e) {
      var t, n;
      e.replaced &&
        ((n = this.board.objects[e.children[1].children[0].value]),
        JXG.exists(n) &&
          JXG.exists(n) &&
          n.name !== "" &&
          ((e.type = "node_var"),
          (e.value = n.name),
          (e.children.length = 0),
          delete e.replaced));
      if (e.children)
        for (t = e.children.length; t > 0; t--)
          JXG.exists(e.children[t - 1]) &&
            (e.children[t - 1] = this.replaceIDs(e.children[t - 1]));
      return e;
    },
    replaceNames: function (e) {
      var t, n;
      (n = e.value),
        e.type == "node_op" && n == "op_lhs" && e.children.length === 1
          ? (this.isLHS = !0)
          : e.type == "node_var" &&
            (this.isLHS
              ? this.letvar(n, !0)
              : !JXG.exists(this.getvar(n, !0)) &&
                JXG.exists(this.board.elementsByName[n]) &&
                (e = this.createReplacementNode(e)));
      if (e.children)
        for (t = e.children.length; t > 0; t--)
          JXG.exists(e.children[t - 1]) &&
            (e.children[t - 1] = this.replaceNames(e.children[t - 1]));
      return (
        e.type == "node_op" &&
          e.value == "op_lhs" &&
          e.children.length === 1 &&
          (this.isLHS = !1),
        e
      );
    },
    createReplacementNode: function (e) {
      var t = e.value,
        n = this.board.elementsByName[t];
      return (
        (e = this.createNode(
          "node_op",
          "op_execfun",
          this.createNode("node_var", "$"),
          this.createNode(
            "node_op",
            "op_param",
            this.createNode("node_str", n.id)
          )
        )),
        (e.replaced = !0),
        e
      );
    },
    collectDependencies: function (e, t) {
      var n, r, i;
      (r = e.value),
        e.type == "node_var" &&
          ((i = this.getvar(r)),
          i && i.visProp && i.type && i.elementClass && i.id && (t[i.id] = i)),
        e.type == "node_op" &&
          e.value == "op_execfun" &&
          e.children.length > 1 &&
          e.children[0].value == "$" &&
          e.children[1].children.length > 0 &&
          ((i = e.children[1].children[0].value),
          (t[i] = this.board.objects[i]));
      if (e.children)
        for (n = e.children.length; n > 0; n--)
          JXG.exists(e.children[n - 1]) &&
            this.collectDependencies(e.children[n - 1], t);
    },
    resolveProperty: function (e, t, n) {
      return (
        (n = JXG.def(n, !1)),
        e &&
          e.methodMap &&
          (t === "label"
            ? ((e = e.label), (t = "content"))
            : JXG.exists(e.subs) && JXG.exists(e.subs[t])
            ? (e = e.subs)
            : JXG.exists(e.methodMap[t])
            ? (t = e.methodMap[t])
            : ((e = e.visProp), (t = t.toLowerCase()))),
        JXG.exists(e) || this._error(e + " is not an object"),
        JXG.exists(e[t]) || this._error("unknown property " + t),
        n && typeof e[t] == "function"
          ? function () {
              return e[t].apply(e, arguments);
            }
          : e[t]
      );
    },
    execute: function (node) {
      var ret,
        v,
        i,
        e,
        parents = [];
      ret = 0;
      if (!node) return ret;
      (this.line = node.line), (this.col = node.col);
      switch (node.type) {
        case "node_op":
          switch (node.value) {
            case "op_none":
              node.children[0] && this.execute(node.children[0]),
                node.children[1] && (ret = this.execute(node.children[1]));
              break;
            case "op_assign":
              (v = this.execute(node.children[0])),
                (this.lhs[this.scope] = v[1]),
                v[0].type &&
                  v[0].elementClass &&
                  v[0].methodMap &&
                  v[1] === "label" &&
                  this._error("Left-hand side of assignment is read-only."),
                v[0] !== this.sstack[this.scope] ||
                (JXG.isArray(v[0]) && typeof v[1] == "number")
                  ? this.setProp(v[0], v[1], this.execute(node.children[1]))
                  : this.letvar(v[1], this.execute(node.children[1])),
                (this.lhs[this.scope] = 0);
              break;
            case "op_noassign":
              ret = this.execute(node.children[0]);
              break;
            case "op_if":
              this.execute(node.children[0]) &&
                (ret = this.execute(node.children[1]));
              break;
            case "op_if_else":
              this.execute(node.children[0])
                ? (ret = this.execute(node.children[1]))
                : (ret = this.execute(node.children[2]));
              break;
            case "op_while":
              while (this.execute(node.children[0]))
                this.execute(node.children[1]);
              break;
            case "op_do":
              do this.execute(node.children[0]);
              while (this.execute(node.children[1]));
              break;
            case "op_for":
              for (
                this.execute(node.children[0]);
                this.execute(node.children[1]);
                this.execute(node.children[2])
              )
                this.execute(node.children[3]);
              break;
            case "op_param":
              node.children[1] && this.execute(node.children[1]),
                (ret = node.children[0]),
                this.pstack[this.pscope].push(ret),
                this.dpstack[this.pscope] &&
                  this.dpstack[this.pscope].push({
                    line: node.children[0].line,
                    col: node.children[0].col,
                  });
              break;
            case "op_paramdef":
              node.children[1] && this.execute(node.children[1]),
                (ret = node.children[0]),
                this.pstack[this.pscope].push(ret);
              break;
            case "op_proplst":
              node.children[0] && this.execute(node.children[0]),
                node.children[1] && this.execute(node.children[1]);
              break;
            case "op_proplst_val":
              this.propstack.push({}),
                this.propscope++,
                this.execute(node.children[0]),
                (ret = this.propstack[this.propscope]),
                this.propstack.pop(),
                this.propscope--;
              break;
            case "op_prop":
              this.propstack[this.propscope][node.children[0]] = this.execute(
                node.children[1]
              );
              break;
            case "op_array":
              var l;
              this.pstack.push([]),
                this.pscope++,
                this.execute(node.children[0]),
                (ret = []),
                (l = this.pstack[this.pscope].length);
              for (i = 0; i < l; i++)
                ret.push(this.execute(this.pstack[this.pscope][i]));
              this.pstack.pop(), this.pscope--;
              break;
            case "op_extvalue":
              var undef;
              (ret = this.execute(node.children[0])),
                (i = this.execute(node.children[1])),
                typeof i == "number" &&
                Math.abs(Math.round(i) - i) < JXG.Math.eps
                  ? (ret = ret[i])
                  : (ret = undef);
              break;
            case "op_return":
              if (this.scope !== 0) return this.execute(node.children[0]);
              this._error("Unexpected return.");
              break;
            case "op_function":
              this.pstack.push([]),
                this.pscope++,
                this.execute(node.children[0]);
              if (this.board.options.jc.compile) {
                this.sstack.push({}), this.scope++, (this.isLHS = !1);
                for (i = 0; i < this.pstack[this.pscope].length; i++)
                  this.sstack[this.scope][
                    this.pstack[this.pscope][i]
                  ] = this.pstack[this.pscope][i];
                this.replaceNames(node.children[1]),
                  (ret = (function ($jc$) {
                    var p = $jc$.pstack[$jc$.pscope].join(", "),
                      str =
                        "var f = function (" +
                        p +
                        ") {\n$jc$.sstack.push([]);\n$jc$.scope++;\nvar r = (function () {\n" +
                        $jc$.compile(node.children[1], !0) +
                        "})();\n$jc$.sstack.pop();\n$jc$.scope--;\nreturn r;\n}; f;";
                    try {
                      return eval(str);
                    } catch (e) {
                      throw e;
                    }
                  })(this)),
                  this.sstack.pop(),
                  this.scope--;
              } else
                ret = (function (e, t) {
                  return function () {
                    var n;
                    t.sstack.push({}), t.scope++;
                    for (n = 0; n < e.length; n++)
                      t.sstack[t.scope][e[n]] = arguments[n];
                    return (
                      (n = t.execute(node.children[1])),
                      t.sstack.pop(),
                      t.scope--,
                      n
                    );
                  };
                })(this.pstack[this.pscope], this);
              (ret.node = node),
                (ret.toJS = ret.toString),
                (ret.toString = (function (e) {
                  return function () {
                    return e.compile(e.replaceIDs(JXG.deepCopy(node)));
                  };
                })(this)),
                (ret.deps = {}),
                this.collectDependencies(node.children[1], ret.deps),
                this.pstack.pop(),
                this.pscope--;
              break;
            case "op_execfun":
              var fun, attr, sc;
              this.pstack.push([]),
                this.dpstack.push([]),
                this.pscope++,
                this.execute(node.children[1]);
              if (typeof node.children[2] != "undefined")
                if (node.children[3]) {
                  this.pstack.push([]),
                    this.dpstack.push([]),
                    this.pscope++,
                    this.execute(node.children[2]),
                    (attr = {});
                  for (i = 0; i < this.pstack[this.pscope].length; i++)
                    attr = JXG.deepCopy(
                      attr,
                      this.execute(this.pstack[this.pscope][i]),
                      !0
                    );
                  this.pscope--, this.pstack.pop(), this.dpstack.pop();
                } else attr = this.execute(node.children[2]);
              (fun = this.execute(node.children[0])),
                fun && fun.sc ? (sc = fun.sc) : (sc = this),
                !fun.creator &&
                  typeof node.children[2] != "undefined" &&
                  this._error(
                    "Unexpected value. Only element creators are allowed to have a value after the function call."
                  );
              for (i = 0; i < this.pstack[this.pscope].length; i++)
                parents[i] = this.execute(this.pstack[this.pscope][i]);
              if (typeof fun == "function" && !fun.creator)
                ret = fun.apply(sc, parents);
              else if (typeof fun != "function" || !fun.creator)
                this._error("Function '" + fun + "' is undefined.");
              else {
                e = this.line;
                try {
                  (ret = fun(parents, attr)),
                    (ret.jcLineStart = e),
                    (ret.jcLineEnd = node.line);
                  for (i = e; i <= node.line; i++) this.lineToElement[i] = ret;
                  ret.debugParents = this.dpstack[this.pscope];
                } catch (ex) {
                  this._error(ex.toString(), e);
                }
              }
              this.pstack.pop(), this.dpstack.pop(), this.pscope--;
              break;
            case "op_property":
              (e = this.execute(node.children[0])),
                (v = node.children[1]),
                (ret = this.resolveProperty(e, v, !1)),
                JXG.exists(ret) && (ret.sc = e);
              break;
            case "op_lhs":
              (v = node.children[0]),
                v.children && v.type && v.value && (v = this.execute(v)),
                node.children.length === 1
                  ? (e = this.sstack[this.scope])
                  : ((e = this.execute(node.children[1])),
                    e.type &&
                      e.elementClass &&
                      v.toLowerCase &&
                      v.toLowerCase() !== "x" &&
                      v.toLowerCase() !== "y" &&
                      (v = v.toLowerCase())),
                (ret = [e, v]);
              break;
            case "op_use":
              var found = !1;
              for (var b in JXG.JSXGraph.boards)
                JXG.JSXGraph.boards[b].container ===
                  node.children[0].toString() &&
                  (this.use(JXG.JSXGraph.boards[b]), (found = !0));
              found ||
                this._error(
                  "Board '" + node.children[0].toString() + "' not found!"
                );
              break;
            case "op_delete":
              (v = this.getvar(node.children[0])),
                typeof v == "object" &&
                  JXG.exists(v.type) &&
                  JXG.exists(v.elementClass) &&
                  this.board.removeObject(v);
              break;
            case "op_equ":
              ret =
                this.execute(node.children[0]) ==
                this.execute(node.children[1]);
              break;
            case "op_neq":
              ret =
                this.execute(node.children[0]) !=
                this.execute(node.children[1]);
              break;
            case "op_approx":
              ret =
                Math.abs(
                  this.execute(node.children[0]) -
                    this.execute(node.children[1])
                ) < JXG.Math.eps;
              break;
            case "op_grt":
              ret =
                this.execute(node.children[0]) > this.execute(node.children[1]);
              break;
            case "op_lot":
              ret =
                this.execute(node.children[0]) < this.execute(node.children[1]);
              break;
            case "op_gre":
              ret =
                this.execute(node.children[0]) >=
                this.execute(node.children[1]);
              break;
            case "op_loe":
              ret =
                this.execute(node.children[0]) <=
                this.execute(node.children[1]);
              break;
            case "op_or":
              ret =
                this.execute(node.children[0]) ||
                this.execute(node.children[1]);
              break;
            case "op_and":
              ret =
                this.execute(node.children[0]) &&
                this.execute(node.children[1]);
              break;
            case "op_not":
              ret = !this.execute(node.children[0]);
              break;
            case "op_add":
              ret = JXG.Math.Statistics.add(
                this.execute(node.children[0]),
                this.execute(node.children[1])
              );
              break;
            case "op_sub":
              ret = JXG.Math.Statistics.subtract(
                this.execute(node.children[0]),
                this.execute(node.children[1])
              );
              break;
            case "op_div":
              ret = JXG.Math.Statistics.div(
                this.execute(node.children[0]),
                this.execute(node.children[1])
              );
              break;
            case "op_mod":
              ret = JXG.Math.Statistics.mod(
                this.execute(node.children[0]),
                this.execute(node.children[1]),
                !0
              );
              break;
            case "op_mul":
              ret = this.mul(
                this.execute(node.children[0]),
                this.execute(node.children[1])
              );
              break;
            case "op_exp":
              ret = Math.pow(
                this.execute(node.children[0]),
                this.execute(node.children[1])
              );
              break;
            case "op_neg":
              ret = this.execute(node.children[0]) * -1;
          }
          break;
        case "node_var":
          ret = this.getvar(node.value);
          break;
        case "node_const":
          ret = Number(node.value);
          break;
        case "node_const_bool":
          ret = node.value.toLowerCase() !== "false";
          break;
        case "node_str":
          ret = node.value;
      }
      return ret;
    },
    compile: function (e, t) {
      var n, r, i, s;
      (n = ""), JXG.exists(t) || (t = !1);
      if (!e) return n;
      switch (e.type) {
        case "node_op":
          switch (e.value) {
            case "op_none":
              e.children[0] && (n = this.compile(e.children[0], t)),
                e.children[1] && (n += this.compile(e.children[1], t));
              break;
            case "op_assign":
              (i = this.compile(e.children[0], t)),
                t
                  ? JXG.isArray(i)
                    ? (n =
                        "$jc$.setProp(" +
                        i[0] +
                        ", '" +
                        i[1] +
                        "', " +
                        this.compile(e.children[1], t) +
                        ");\n")
                    : (this.isLocalVariable(i) !== this.scope &&
                        (this.sstack[this.scope][i] = !0),
                      (n =
                        "$jc$.sstack[" +
                        this.scope +
                        "]['" +
                        i +
                        "'] = " +
                        this.compile(e.children[1], t) +
                        ";\n"))
                  : (n = i + " = " + this.compile(e.children[1], t) + ";\n");
              break;
            case "op_noassign":
              n = this.compile(e.children[0], t) + ";\n";
              break;
            case "op_if":
              n =
                " if (" +
                this.compile(e.children[0], t) +
                ") " +
                this.compile(e.children[1], t);
              break;
            case "op_if_else":
              (n =
                " if (" +
                this.compile(e.children[0], t) +
                ")" +
                this.compile(e.children[1], t)),
                (n += " else " + this.compile(e.children[2], t));
              break;
            case "op_while":
              n =
                " while (" +
                this.compile(e.children[0], t) +
                ") {\n" +
                this.compile(e.children[1], t) +
                "}\n";
              break;
            case "op_do":
              n =
                " do {\n" +
                this.compile(e.children[0], t) +
                "} while (" +
                this.compile(e.children[1], t) +
                ");\n";
              break;
            case "op_for":
              n =
                " for (" +
                this.compile(e.children[0], t) +
                "; " +
                this.compile(e.children[1], t) +
                "; " +
                this.compile(e.children[2], t) +
                ") {\n" +
                this.compile(e.children[3], t) +
                "\n}\n";
              break;
            case "op_param":
              e.children[1] && (n = this.compile(e.children[1], t) + ", "),
                (n += this.compile(e.children[0], t));
              break;
            case "op_paramdef":
              e.children[1] && (n = this.compile(e.children[1], t) + ", "),
                (n += e.children[0]);
              break;
            case "op_proplst":
              e.children[0] && (n = this.compile(e.children[0], t) + ", "),
                (n += this.compile(e.children[1], t));
              break;
            case "op_prop":
              n = e.children[0] + ": " + this.compile(e.children[1], t);
              break;
            case "op_proplst_val":
              n = this.compile(e.children[0], t);
              break;
            case "op_array":
              n = "[" + this.compile(e.children[0], t) + "]";
              break;
            case "op_extvalue":
              n =
                this.compile(e.children[0], t) +
                "[" +
                this.compile(e.children[1], t) +
                "]";
              break;
            case "op_return":
              n = " return " + this.compile(e.children[0], t) + ";\n";
              break;
            case "op_function":
              n =
                " function (" +
                this.compile(e.children[0], t) +
                ") {\n" +
                this.compile(e.children[1], t) +
                "}";
              break;
            case "op_execfun":
              e.children[2] &&
                ((i = this.compile(e.children[2], t)),
                t && (i = "$jc$.mergeAttributes(" + i + ")")),
                (e.children[0].withProps = !!e.children[2]),
                (n =
                  this.compile(e.children[0], t) +
                  "(" +
                  this.compile(e.children[1], t) +
                  (e.children[2] && t ? ", " + i : "") +
                  ")" +
                  (e.children[2] && !t ? i : "")),
                t &&
                  e.children[0].value === "$" &&
                  (n =
                    "$jc$.board.objects[" +
                    this.compile(e.children[1], t) +
                    "]");
              break;
            case "op_property":
              t && e.children[1] !== "X" && e.children[1] !== "Y"
                ? (n =
                    "$jc$.resolveProperty(" +
                    this.compile(e.children[0], t) +
                    ", '" +
                    e.children[1] +
                    "', true)")
                : (n = this.compile(e.children[0], t) + "." + e.children[1]);
              break;
            case "op_lhs":
              e.children.length === 1
                ? (n = e.children[0])
                : e.children[2] === "dot"
                ? t
                  ? (n = [this.compile(e.children[1], t), e.children[0]])
                  : (n = this.compile(e.children[1], t) + "." + e.children[0])
                : e.children[2] === "bracket" &&
                  (t
                    ? (n = [
                        this.compile(e.children[1], t),
                        this.compile(e.children[0], t),
                      ])
                    : (n =
                        this.compile(e.children[1], t) +
                        "[" +
                        this.compile(e.children[0], t) +
                        "]"));
              break;
            case "op_use":
              t
                ? (n = "$jc$.use(JXG.JSXGraph.boards['" + e.children[0] + "'])")
                : (n = "use " + e.children[0] + ";");
              break;
            case "op_delete":
              n = "delete " + e.children[0];
              break;
            case "op_equ":
              n =
                "(" +
                this.compile(e.children[0], t) +
                " == " +
                this.compile(e.children[1], t) +
                ")";
              break;
            case "op_neq":
              n =
                "(" +
                this.compile(e.children[0], t) +
                " != " +
                this.compile(e.children[1], t) +
                ")";
              break;
            case "op_approx":
              n =
                "(" +
                this.compile(e.children[0], t) +
                " ~= " +
                this.compile(e.children[1], t) +
                ")";
              break;
            case "op_grt":
              n =
                "(" +
                this.compile(e.children[0], t) +
                " > " +
                this.compile(e.children[1], t) +
                ")";
              break;
            case "op_lot":
              n =
                "(" +
                this.compile(e.children[0], t) +
                " < " +
                this.compile(e.children[1], t) +
                ")";
              break;
            case "op_gre":
              n =
                "(" +
                this.compile(e.children[0], t) +
                " >= " +
                this.compile(e.children[1], t) +
                ")";
              break;
            case "op_loe":
              n =
                "(" +
                this.compile(e.children[0], t) +
                " <= " +
                this.compile(e.children[1], t) +
                ")";
              break;
            case "op_or":
              n =
                "(" +
                this.compile(e.children[0], t) +
                " || " +
                this.compile(e.children[1], t) +
                ")";
              break;
            case "op_and":
              n =
                "(" +
                this.compile(e.children[0], t) +
                " && " +
                this.compile(e.children[1], t) +
                ")";
              break;
            case "op_not":
              n = "!(" + this.compile(e.children[0], t) + ")";
              break;
            case "op_add":
              t
                ? (n =
                    "JXG.Math.Statistics.add(" +
                    this.compile(e.children[0], t) +
                    ", " +
                    this.compile(e.children[1], t) +
                    ")")
                : (n =
                    "(" +
                    this.compile(e.children[0], t) +
                    " + " +
                    this.compile(e.children[1], t) +
                    ")");
              break;
            case "op_sub":
              t
                ? (n =
                    "JXG.Math.Statistics.subtract(" +
                    this.compile(e.children[0], t) +
                    ", " +
                    this.compile(e.children[1], t) +
                    ")")
                : (n =
                    "(" +
                    this.compile(e.children[0], t) +
                    " - " +
                    this.compile(e.children[1], t) +
                    ")");
              break;
            case "op_div":
              t
                ? (n =
                    "JXG.Math.Statistics.div(" +
                    this.compile(e.children[0], t) +
                    ", " +
                    this.compile(e.children[1], t) +
                    ")")
                : (n =
                    "(" +
                    this.compile(e.children[0], t) +
                    " / " +
                    this.compile(e.children[1], t) +
                    ")");
              break;
            case "op_mod":
              t
                ? (n =
                    "JXG.Math.mod(" +
                    this.compile(e.children[0], t) +
                    ", " +
                    this.compile(e.children[1], t) +
                    ", true)")
                : (n =
                    "(" +
                    this.compile(e.children[0], t) +
                    " % " +
                    this.compile(e.children[1], t) +
                    ")");
              break;
            case "op_mul":
              t
                ? (n =
                    "$jc$.mul(" +
                    this.compile(e.children[0], t) +
                    ", " +
                    this.compile(e.children[1], t) +
                    ")")
                : (n =
                    "(" +
                    this.compile(e.children[0], t) +
                    " * " +
                    this.compile(e.children[1], t) +
                    ")");
              break;
            case "op_exp":
              t
                ? (n =
                    "Math.pow(" +
                    this.compile(e.children[0], t) +
                    ", " +
                    this.compile(e.children[1], t) +
                    ")")
                : (n =
                    "(" +
                    this.compile(e.children[0], t) +
                    "^" +
                    this.compile(e.children[1], t) +
                    ")");
              break;
            case "op_neg":
              n = "(-" + this.compile(e.children[0], t) + ")";
          }
          break;
        case "node_var":
          t ? (n = this.getvarJS(e.value, !1, e.withProps)) : (n = e.value);
          break;
        case "node_const":
          n = e.value;
          break;
        case "node_const_bool":
          n = e.value;
          break;
        case "node_str":
          n = "'" + e.value.replace(/'/g, "\\'") + "'";
      }
      return e.needsBrackets && (n = "{\n" + n + "}\n"), n;
    },
    X: function (e) {
      return e.X();
    },
    Y: function (e) {
      return e.Y();
    },
    V: function (e) {
      return e.Value();
    },
    L: function (e) {
      return e.L();
    },
    dist: function (e, t) {
      return (
        (!JXG.exists(e) || !JXG.exists(e.Dist)) &&
          this._error("Error: Can't calculate distance."),
        e.Dist(t)
      );
    },
    mul: function (e, t) {
      return JXG.isArray(e) * JXG.isArray(t)
        ? JXG.Math.innerProduct(e, t, Math.min(e.length, t.length))
        : JXG.Math.Statistics.multiply(e, t);
    },
    use: function (e) {
      (this.board = e),
        (this.builtIn.$board = e),
        (this.builtIn.$board.src = "$jc$.board");
    },
    findSymbol: function (e, t) {
      var n, r;
      (t = JXG.def(t, -1)), t === -1 && (t = this.scope);
      for (n = t; n >= 0; n--)
        for (r in this.sstack[n]) if (this.sstack[n][r] === e) return [r, n];
      return [];
    },
    defineBuiltIn: function () {
      var e = this,
        t = {
          PI: Math.PI,
          EULER: Math.E,
          X: e.X,
          Y: e.Y,
          V: e.V,
          L: e.L,
          dist: e.dist,
          rad: JXG.Math.Geometry.rad,
          deg: JXG.Math.Geometry.trueAngle,
          factorial: JXG.Math.factorial,
          trunc: JXG.trunc,
          $: e.getElementById,
          $board: e.board,
        };
      return (
        (t.rad.sc = JXG.Math.Geometry),
        (t.deg.sc = JXG.Math.Geometry),
        (t.factorial.sc = JXG.Math),
        (t.PI.src = "Math.PI"),
        (t.EULER.src = "Math.E"),
        (t.X.src = "$jc$.X"),
        (t.Y.src = "$jc$.Y"),
        (t.V.src = "$jc$.V"),
        (t.L.src = "$jc$.L"),
        (t.dist.src = "$jc$.dist"),
        (t.rad.src = "JXG.Math.Geometry.rad"),
        (t.deg.src = "JXG.Math.Geometry.trueAngle"),
        (t.factorial.src = "JXG.Math.factorial"),
        (t.trunc.src = "JXG.trunc"),
        (t.$.src = "(function (n) { return JXG.getRef($jc$.board, n); })"),
        t.$board && (t.$board.src = "$jc$.board"),
        t
      );
    },
    _debug: function (e) {
      typeof console != "undefined"
        ? console.log(e)
        : document &&
          document.getElementById("debug") !== null &&
          (document.getElementById("debug").innerHTML += e + "<br />");
    },
    _error: function (e) {
      var t = new Error("Error(" + this.line + "): " + e);
      throw ((t.line = this.line), t);
    },
    _warn: function (e) {
      typeof console != "undefined"
        ? console.log("Warning(" + this.line + "): " + e)
        : document &&
          document.getElementById(this.warnLog) !== null &&
          (document.getElementById(this.warnLog).innerHTML +=
            "Warning(" + this.line + "): " + e + "<br />");
    },
    _log: function (e) {
      typeof window == "undefined" &&
      typeof self != "undefined" &&
      self.postMessage
        ? self.postMessage({ type: "log", msg: "Log: " + e.toString() })
        : console.log("Log: ", arguments);
    },
  }),
  JXG.extend(JXG.JessieCode.prototype, {
    _lex: function (e) {
      var t,
        n = -1,
        r = 0,
        i = 0,
        s,
        o;
      for (;;) {
        (t = 0), (n = -1), (r = 0), (i = 0), (s = e.offset + 1 + (r - i));
        do {
          s--, (t = 0), (n = -2), (i = s);
          if (e.src.length <= i) return 68;
          do {
            o = e.src.charCodeAt(s);
            switch (t) {
              case 0:
                (o >= 9 && o <= 10) || o == 13 || o == 32
                  ? (t = 1)
                  : o == 33
                  ? (t = 2)
                  : o == 35
                  ? (t = 3)
                  : o == 36 ||
                    (o >= 65 && o <= 67) ||
                    (o >= 71 && o <= 72) ||
                    (o >= 74 && o <= 77) ||
                    (o >= 79 && o <= 81) ||
                    o == 83 ||
                    o == 86 ||
                    (o >= 88 && o <= 90) ||
                    o == 95 ||
                    (o >= 97 && o <= 99) ||
                    (o >= 103 && o <= 104) ||
                    (o >= 106 && o <= 113) ||
                    o == 115 ||
                    o == 118 ||
                    (o >= 120 && o <= 122)
                  ? (t = 4)
                  : o == 37
                  ? (t = 5)
                  : o == 40
                  ? (t = 6)
                  : o == 41
                  ? (t = 7)
                  : o == 42
                  ? (t = 8)
                  : o == 43
                  ? (t = 9)
                  : o == 44
                  ? (t = 10)
                  : o == 45
                  ? (t = 11)
                  : o == 46
                  ? (t = 12)
                  : o == 47
                  ? (t = 13)
                  : o >= 48 && o <= 57
                  ? (t = 14)
                  : o == 58
                  ? (t = 15)
                  : o == 59
                  ? (t = 16)
                  : o == 60
                  ? (t = 17)
                  : o == 61
                  ? (t = 18)
                  : o == 62
                  ? (t = 19)
                  : o == 91
                  ? (t = 20)
                  : o == 93
                  ? (t = 21)
                  : o == 94
                  ? (t = 22)
                  : o == 123
                  ? (t = 23)
                  : o == 124
                  ? (t = 24)
                  : o == 125
                  ? (t = 25)
                  : o == 38
                  ? (t = 49)
                  : o == 68 || o == 100
                  ? (t = 50)
                  : o == 39
                  ? (t = 52)
                  : o == 73 || o == 105
                  ? (t = 53)
                  : o == 126
                  ? (t = 54)
                  : o == 70 || o == 102
                  ? (t = 66)
                  : o == 78
                  ? (t = 67)
                  : o == 85 || o == 117
                  ? (t = 68)
                  : o == 69 || o == 101
                  ? (t = 76)
                  : o == 84 || o == 116
                  ? (t = 77)
                  : o == 87 || o == 119
                  ? (t = 83)
                  : o == 82 || o == 114
                  ? (t = 87)
                  : (t = -1);
                break;
              case 1:
                (t = -1), (n = 2), (r = s);
                break;
              case 2:
                o == 61 ? (t = 26) : (t = -1), (n = 31), (r = s);
                break;
              case 3:
                (t = -1), (n = 41), (r = s);
                break;
              case 4:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 122)
                  ? (t = 4)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 5:
                (t = -1), (n = 35), (r = s);
                break;
              case 6:
                (t = -1), (n = 38), (r = s);
                break;
              case 7:
                (t = -1), (n = 39), (r = s);
                break;
              case 8:
                (t = -1), (n = 36), (r = s);
                break;
              case 9:
                (t = -1), (n = 32), (r = s);
                break;
              case 10:
                (t = -1), (n = 40), (r = s);
                break;
              case 11:
                (t = -1), (n = 33), (r = s);
                break;
              case 12:
                o >= 48 && o <= 57 ? (t = 29) : (t = -1), (n = 44), (r = s);
                break;
              case 13:
                (t = -1), (n = 34), (r = s);
                break;
              case 14:
                o >= 48 && o <= 57 ? (t = 14) : o == 46 ? (t = 29) : (t = -1),
                  (n = 48),
                  (r = s);
                break;
              case 15:
                (t = -1), (n = 42), (r = s);
                break;
              case 16:
                (t = -1), (n = 20), (r = s);
                break;
              case 17:
                o == 60 ? (t = 30) : o == 61 ? (t = 31) : (t = -1),
                  (n = 28),
                  (r = s);
                break;
              case 18:
                o == 61 ? (t = 32) : (t = -1), (n = 21), (r = s);
                break;
              case 19:
                o == 61 ? (t = 33) : o == 62 ? (t = 34) : (t = -1),
                  (n = 27),
                  (r = s);
                break;
              case 20:
                (t = -1), (n = 16), (r = s);
                break;
              case 21:
                (t = -1), (n = 17), (r = s);
                break;
              case 22:
                (t = -1), (n = 37), (r = s);
                break;
              case 23:
                (t = -1), (n = 18), (r = s);
                break;
              case 24:
                o == 124 ? (t = 37) : (t = -1), (n = 43), (r = s);
                break;
              case 25:
                (t = -1), (n = 19), (r = s);
                break;
              case 26:
                (t = -1), (n = 23), (r = s);
                break;
              case 27:
                (t = -1), (n = 30), (r = s);
                break;
              case 28:
                (t = -1), (n = 47), (r = s);
                break;
              case 29:
                o >= 48 && o <= 57 ? (t = 29) : (t = -1), (n = 49), (r = s);
                break;
              case 30:
                (t = -1), (n = 14), (r = s);
                break;
              case 31:
                (t = -1), (n = 25), (r = s);
                break;
              case 32:
                (t = -1), (n = 22), (r = s);
                break;
              case 33:
                (t = -1), (n = 26), (r = s);
                break;
              case 34:
                (t = -1), (n = 15), (r = s);
                break;
              case 35:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 122)
                  ? (t = 4)
                  : (t = -1),
                  (n = 6),
                  (r = s);
                break;
              case 36:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 122)
                  ? (t = 4)
                  : (t = -1),
                  (n = 3),
                  (r = s);
                break;
              case 37:
                (t = -1), (n = 29), (r = s);
                break;
              case 38:
                (t = -1), (n = 24), (r = s);
                break;
              case 39:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 122)
                  ? (t = 4)
                  : (t = -1),
                  (n = 7),
                  (r = s);
                break;
              case 40:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 122)
                  ? (t = 4)
                  : (t = -1),
                  (n = 45),
                  (r = s);
                break;
              case 41:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 122)
                  ? (t = 4)
                  : (t = -1),
                  (n = 9),
                  (r = s);
                break;
              case 42:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 122)
                  ? (t = 4)
                  : (t = -1),
                  (n = 4),
                  (r = s);
                break;
              case 43:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 122)
                  ? (t = 4)
                  : (t = -1),
                  (n = 12),
                  (r = s);
                break;
              case 44:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 122)
                  ? (t = 4)
                  : (t = -1),
                  (n = 13),
                  (r = s);
                break;
              case 45:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 122)
                  ? (t = 4)
                  : (t = -1),
                  (n = 5),
                  (r = s);
                break;
              case 46:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 122)
                  ? (t = 4)
                  : (t = -1),
                  (n = 11),
                  (r = s);
                break;
              case 47:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 122)
                  ? (t = 4)
                  : (t = -1),
                  (n = 10),
                  (r = s);
                break;
              case 48:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 122)
                  ? (t = 4)
                  : (t = -1),
                  (n = 8),
                  (r = s);
                break;
              case 49:
                o == 38 ? (t = 27) : (t = -1);
                break;
              case 50:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 68) ||
                (o >= 70 && o <= 78) ||
                (o >= 80 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 100) ||
                (o >= 102 && o <= 110) ||
                (o >= 112 && o <= 122)
                  ? (t = 4)
                  : o == 79 || o == 111
                  ? (t = 35)
                  : o == 69 || o == 101
                  ? (t = 84)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 51:
                o == 39
                  ? (t = 28)
                  : (o >= 0 && o <= 38) ||
                    (o >= 40 && o <= 91) ||
                    (o >= 93 && o <= 254)
                  ? (t = 52)
                  : o == 92
                  ? (t = 56)
                  : (t = -1),
                  (n = 47),
                  (r = s);
                break;
              case 52:
                o == 39
                  ? (t = 28)
                  : (o >= 0 && o <= 38) ||
                    (o >= 40 && o <= 91) ||
                    (o >= 93 && o <= 254)
                  ? (t = 52)
                  : o == 92
                  ? (t = 56)
                  : (t = -1);
                break;
              case 53:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 69) ||
                (o >= 71 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 101) ||
                (o >= 103 && o <= 122)
                  ? (t = 4)
                  : o == 70 || o == 102
                  ? (t = 36)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 54:
                o == 61 ? (t = 38) : (t = -1);
                break;
              case 55:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 81) ||
                (o >= 83 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 113) ||
                (o >= 115 && o <= 122)
                  ? (t = 4)
                  : o == 82 || o == 114
                  ? (t = 39)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 56:
                o == 39
                  ? (t = 51)
                  : (o >= 0 && o <= 38) ||
                    (o >= 40 && o <= 91) ||
                    (o >= 93 && o <= 254)
                  ? (t = 52)
                  : o == 92
                  ? (t = 56)
                  : (t = -1);
                break;
              case 57:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 77) ||
                (o >= 79 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 122)
                  ? (t = 4)
                  : o == 78
                  ? (t = 40)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 58:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 68) ||
                (o >= 70 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 100) ||
                (o >= 102 && o <= 122)
                  ? (t = 4)
                  : o == 69 || o == 101
                  ? (t = 41)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 59:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 68) ||
                (o >= 70 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 100) ||
                (o >= 102 && o <= 122)
                  ? (t = 4)
                  : o == 69 || o == 101
                  ? (t = 42)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 60:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 68) ||
                (o >= 70 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 100) ||
                (o >= 102 && o <= 122)
                  ? (t = 4)
                  : o == 69 || o == 101
                  ? (t = 43)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 61:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 68) ||
                (o >= 70 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 100) ||
                (o >= 102 && o <= 122)
                  ? (t = 4)
                  : o == 69 || o == 101
                  ? (t = 44)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 62:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 68) ||
                (o >= 70 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 100) ||
                (o >= 102 && o <= 122)
                  ? (t = 4)
                  : o == 69 || o == 101
                  ? (t = 45)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 63:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 68) ||
                (o >= 70 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 100) ||
                (o >= 102 && o <= 122)
                  ? (t = 4)
                  : o == 69 || o == 101
                  ? (t = 46)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 64:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 77) ||
                (o >= 79 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 109) ||
                (o >= 111 && o <= 122)
                  ? (t = 4)
                  : o == 78 || o == 110
                  ? (t = 47)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 65:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 77) ||
                (o >= 79 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 109) ||
                (o >= 111 && o <= 122)
                  ? (t = 4)
                  : o == 78 || o == 110
                  ? (t = 48)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 66:
                (o >= 48 && o <= 57) ||
                (o >= 66 && o <= 78) ||
                (o >= 80 && o <= 84) ||
                (o >= 86 && o <= 90) ||
                o == 95 ||
                (o >= 98 && o <= 110) ||
                (o >= 112 && o <= 116) ||
                (o >= 118 && o <= 122)
                  ? (t = 4)
                  : o == 79 || o == 111
                  ? (t = 55)
                  : o == 65 || o == 97
                  ? (t = 78)
                  : o == 85 || o == 117
                  ? (t = 89)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 67:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 90) ||
                o == 95 ||
                (o >= 98 && o <= 122)
                  ? (t = 4)
                  : o == 97
                  ? (t = 57)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 68:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 82) ||
                (o >= 84 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 114) ||
                (o >= 116 && o <= 122)
                  ? (t = 4)
                  : o == 83 || o == 115
                  ? (t = 58)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 69:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 82) ||
                (o >= 84 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 114) ||
                (o >= 116 && o <= 122)
                  ? (t = 4)
                  : o == 83 || o == 115
                  ? (t = 59)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 70:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 84) ||
                (o >= 86 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 116) ||
                (o >= 118 && o <= 122)
                  ? (t = 4)
                  : o == 85 || o == 117
                  ? (t = 60)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 71:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 82) ||
                (o >= 84 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 114) ||
                (o >= 116 && o <= 122)
                  ? (t = 4)
                  : o == 83 || o == 115
                  ? (t = 61)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 72:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 75) ||
                (o >= 77 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 107) ||
                (o >= 109 && o <= 122)
                  ? (t = 4)
                  : o == 76 || o == 108
                  ? (t = 62)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 73:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 83) ||
                (o >= 85 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 115) ||
                (o >= 117 && o <= 122)
                  ? (t = 4)
                  : o == 84 || o == 116
                  ? (t = 63)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 74:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 81) ||
                (o >= 83 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 113) ||
                (o >= 115 && o <= 122)
                  ? (t = 4)
                  : o == 82 || o == 114
                  ? (t = 64)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 75:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 78) ||
                (o >= 80 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 110) ||
                (o >= 112 && o <= 122)
                  ? (t = 4)
                  : o == 79 || o == 111
                  ? (t = 65)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 76:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 75) ||
                (o >= 77 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 107) ||
                (o >= 109 && o <= 122)
                  ? (t = 4)
                  : o == 76 || o == 108
                  ? (t = 69)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 77:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 81) ||
                (o >= 83 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 113) ||
                (o >= 115 && o <= 122)
                  ? (t = 4)
                  : o == 82 || o == 114
                  ? (t = 70)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 78:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 75) ||
                (o >= 77 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 107) ||
                (o >= 109 && o <= 122)
                  ? (t = 4)
                  : o == 76 || o == 108
                  ? (t = 71)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 79:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 72) ||
                (o >= 74 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 104) ||
                (o >= 106 && o <= 122)
                  ? (t = 4)
                  : o == 73 || o == 105
                  ? (t = 72)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 80:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 68) ||
                (o >= 70 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 100) ||
                (o >= 102 && o <= 122)
                  ? (t = 4)
                  : o == 69 || o == 101
                  ? (t = 73)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 81:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 84) ||
                (o >= 86 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 116) ||
                (o >= 118 && o <= 122)
                  ? (t = 4)
                  : o == 85 || o == 117
                  ? (t = 74)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 82:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 72) ||
                (o >= 74 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 104) ||
                (o >= 106 && o <= 122)
                  ? (t = 4)
                  : o == 73 || o == 105
                  ? (t = 75)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 83:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 71) ||
                (o >= 73 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 103) ||
                (o >= 105 && o <= 122)
                  ? (t = 4)
                  : o == 72 || o == 104
                  ? (t = 79)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 84:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 75) ||
                (o >= 77 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 107) ||
                (o >= 109 && o <= 122)
                  ? (t = 4)
                  : o == 76 || o == 108
                  ? (t = 80)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 85:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 83) ||
                (o >= 85 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 115) ||
                (o >= 117 && o <= 122)
                  ? (t = 4)
                  : o == 84 || o == 116
                  ? (t = 81)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 86:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 83) ||
                (o >= 85 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 115) ||
                (o >= 117 && o <= 122)
                  ? (t = 4)
                  : o == 84 || o == 116
                  ? (t = 82)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 87:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 68) ||
                (o >= 70 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 100) ||
                (o >= 102 && o <= 122)
                  ? (t = 4)
                  : o == 69 || o == 101
                  ? (t = 85)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 88:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 66) ||
                (o >= 68 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 98) ||
                (o >= 100 && o <= 122)
                  ? (t = 4)
                  : o == 67 || o == 99
                  ? (t = 86)
                  : (t = -1),
                  (n = 46),
                  (r = s);
                break;
              case 89:
                (o >= 48 && o <= 57) ||
                (o >= 65 && o <= 77) ||
                (o >= 79 && o <= 90) ||
                o == 95 ||
                (o >= 97 && o <= 109) ||
                (o >= 111 && o <= 122)
                  ? (t = 4)
                  : o == 78 || o == 110
                  ? (t = 88)
                  : (t = -1),
                  (n = 46),
                  (r = s);
            }
            t > -1 &&
              (o == 10 &&
                (e.line++,
                (e.column = 0),
                this.countLines && (this.parCurLine = e.line)),
              e.column++,
              this.countLines && (this.parCurColumn = e.column)),
              s++;
          } while (t > -1);
        } while (n == 2);
        n > -1
          ? ((e.att = e.src.substr(i, r - i)),
            (e.offset = r),
            n == 47 &&
              ((e.att = e.att.substr(1, e.att.length - 2)),
              (e.att = e.att.replace(/\\\'/g, "'"))))
          : ((e.att = new String()), (n = -1));
        break;
      }
      return n;
    },
    _parse: function (e, t, n) {
      var r = [],
        i = [],
        s = 0,
        o,
        u,
        a,
        f = {
          la: 0,
          act: 0,
          offset: 0,
          src: e,
          att: "",
          line: 1,
          column: 1,
          error_step: 0,
        },
        l = new Array(
          new Array(0, 1),
          new Array(50, 2),
          new Array(50, 0),
          new Array(52, 2),
          new Array(52, 0),
          new Array(53, 3),
          new Array(53, 1),
          new Array(53, 0),
          new Array(55, 3),
          new Array(55, 1),
          new Array(55, 0),
          new Array(56, 3),
          new Array(57, 3),
          new Array(57, 1),
          new Array(57, 0),
          new Array(58, 3),
          new Array(58, 1),
          new Array(61, 3),
          new Array(51, 3),
          new Array(51, 5),
          new Array(51, 3),
          new Array(51, 5),
          new Array(51, 9),
          new Array(51, 3),
          new Array(51, 2),
          new Array(51, 2),
          new Array(51, 2),
          new Array(51, 2),
          new Array(51, 3),
          new Array(51, 1),
          new Array(60, 3),
          new Array(60, 4),
          new Array(60, 1),
          new Array(54, 3),
          new Array(54, 3),
          new Array(54, 3),
          new Array(54, 3),
          new Array(54, 3),
          new Array(54, 3),
          new Array(54, 3),
          new Array(54, 1),
          new Array(63, 3),
          new Array(63, 3),
          new Array(63, 2),
          new Array(63, 1),
          new Array(62, 3),
          new Array(62, 3),
          new Array(62, 1),
          new Array(64, 3),
          new Array(64, 3),
          new Array(64, 3),
          new Array(64, 1),
          new Array(66, 3),
          new Array(66, 1),
          new Array(65, 2),
          new Array(65, 2),
          new Array(65, 1),
          new Array(59, 4),
          new Array(59, 7),
          new Array(59, 4),
          new Array(59, 5),
          new Array(59, 3),
          new Array(59, 1),
          new Array(67, 1),
          new Array(67, 1),
          new Array(67, 1),
          new Array(67, 3),
          new Array(67, 1),
          new Array(67, 7),
          new Array(67, 3),
          new Array(67, 3),
          new Array(67, 1),
          new Array(67, 1),
          new Array(67, 1)
        ),
        c = new Array(
          new Array(),
          new Array(
            3,
            3,
            5,
            4,
            6,
            5,
            7,
            6,
            9,
            7,
            11,
            8,
            10,
            9,
            18,
            12,
            20,
            13,
            46,
            17,
            31,
            18,
            48,
            22,
            49,
            23,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31,
            33,
            33,
            32,
            34
          ),
          new Array(),
          new Array(
            31,
            18,
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            31,
            18,
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            3,
            3,
            5,
            4,
            6,
            5,
            7,
            6,
            9,
            7,
            11,
            8,
            10,
            9,
            18,
            12,
            20,
            13,
            46,
            17,
            31,
            18,
            48,
            22,
            49,
            23,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31,
            33,
            33,
            32,
            34
          ),
          new Array(38, 41),
          new Array(46, 42),
          new Array(46, 43),
          new Array(
            3,
            3,
            5,
            4,
            6,
            5,
            7,
            6,
            9,
            7,
            11,
            8,
            10,
            9,
            18,
            12,
            20,
            13,
            46,
            17,
            31,
            18,
            48,
            22,
            49,
            23,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31,
            33,
            33,
            32,
            34
          ),
          new Array(20, 45),
          new Array(
            24,
            46,
            23,
            47,
            26,
            48,
            25,
            49,
            27,
            50,
            28,
            51,
            22,
            52,
            20,
            53
          ),
          new Array(),
          new Array(),
          new Array(21, 55),
          new Array(30, 56, 29, 57),
          new Array(44, 58, 38, 59, 16, 60, 37, 61),
          new Array(21, -32),
          new Array(
            31,
            18,
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(32, 63, 33, 64),
          new Array(),
          new Array(35, 65, 34, 66, 36, 67),
          new Array(),
          new Array(),
          new Array(
            31,
            18,
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(),
          new Array(38, 69),
          new Array(46, 72),
          new Array(
            31,
            18,
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(),
          new Array(
            24,
            46,
            23,
            47,
            26,
            48,
            25,
            49,
            27,
            50,
            28,
            51,
            22,
            52,
            3,
            3,
            5,
            4,
            6,
            5,
            7,
            6,
            9,
            7,
            11,
            8,
            10,
            9,
            18,
            12,
            20,
            13,
            46,
            17,
            31,
            18,
            48,
            22,
            49,
            23,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31,
            33,
            33,
            32,
            34
          ),
          new Array(44, 78, 38, 59, 16, 79, 37, 61),
          new Array(),
          new Array(
            24,
            46,
            23,
            47,
            26,
            48,
            25,
            49,
            27,
            50,
            28,
            51,
            22,
            52,
            3,
            3,
            5,
            4,
            6,
            5,
            7,
            6,
            9,
            7,
            11,
            8,
            10,
            9,
            18,
            12,
            20,
            13,
            46,
            17,
            31,
            18,
            48,
            22,
            49,
            23,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31,
            33,
            33,
            32,
            34
          ),
          new Array(5, 81),
          new Array(
            46,
            17,
            48,
            22,
            49,
            23,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(20, 84),
          new Array(),
          new Array(),
          new Array(),
          new Array(
            31,
            18,
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            31,
            18,
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            31,
            18,
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            31,
            18,
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            31,
            18,
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            31,
            18,
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            31,
            18,
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(),
          new Array(
            19,
            92,
            3,
            3,
            5,
            4,
            6,
            5,
            7,
            6,
            9,
            7,
            11,
            8,
            10,
            9,
            18,
            12,
            20,
            13,
            46,
            17,
            31,
            18,
            48,
            22,
            49,
            23,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31,
            33,
            33,
            32,
            34
          ),
          new Array(
            31,
            18,
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(46, 97),
          new Array(
            31,
            18,
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(30, 56, 29, 57),
          new Array(
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            39,
            106,
            24,
            46,
            23,
            47,
            26,
            48,
            25,
            49,
            27,
            50,
            28,
            51,
            22,
            52
          ),
          new Array(46, 108),
          new Array(15, 109, 40, 110),
          new Array(),
          new Array(42, 111),
          new Array(17, 112, 40, 113),
          new Array(24, 46, 23, 47, 26, 48, 25, 49, 27, 50, 28, 51, 22, 52),
          new Array(),
          new Array(),
          new Array(4, 114),
          new Array(46, 115),
          new Array(
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(),
          new Array(
            31,
            18,
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(20, 118),
          new Array(44, 58, 38, 59, 16, 60),
          new Array(),
          new Array(30, 56, 29, 57),
          new Array(30, 56, 29, 57),
          new Array(30, 56, 29, 57),
          new Array(30, 56, 29, 57),
          new Array(30, 56, 29, 57),
          new Array(30, 56, 29, 57),
          new Array(30, 56, 29, 57),
          new Array(),
          new Array(),
          new Array(24, 46, 23, 47, 26, 48, 25, 49, 27, 50, 28, 51, 22, 52),
          new Array(32, 63, 33, 64),
          new Array(32, 63, 33, 64),
          new Array(21, -30),
          new Array(39, 119, 40, 113),
          new Array(17, 120, 32, 63, 33, 64),
          new Array(),
          new Array(35, 65, 34, 66, 36, 67),
          new Array(35, 65, 34, 66, 36, 67),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(39, 121, 40, 122),
          new Array(),
          new Array(),
          new Array(46, 72),
          new Array(
            31,
            18,
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(),
          new Array(
            31,
            18,
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            3,
            3,
            5,
            4,
            6,
            5,
            7,
            6,
            9,
            7,
            11,
            8,
            10,
            9,
            18,
            12,
            20,
            13,
            46,
            17,
            31,
            18,
            48,
            22,
            49,
            23,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31,
            33,
            33,
            32,
            34
          ),
          new Array(),
          new Array(17, 127, 32, 63, 33, 64),
          new Array(
            24,
            46,
            23,
            47,
            26,
            48,
            25,
            49,
            27,
            50,
            28,
            51,
            22,
            52,
            20,
            128
          ),
          new Array(
            31,
            18,
            33,
            33,
            32,
            34,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            16,
            131,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(21, -31),
          new Array(18, 133),
          new Array(46, 134),
          new Array(),
          new Array(24, 46, 23, 47, 26, 48, 25, 49, 27, 50, 28, 51, 22, 52),
          new Array(24, 46, 23, 47, 26, 48, 25, 49, 27, 50, 28, 51, 22, 52),
          new Array(),
          new Array(),
          new Array(),
          new Array(
            24,
            46,
            23,
            47,
            26,
            48,
            25,
            49,
            27,
            50,
            28,
            51,
            22,
            52,
            20,
            135
          ),
          new Array(40, 136),
          new Array(
            33,
            33,
            32,
            34,
            31,
            18,
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(44, 78, 38, 59, 16, 79),
          new Array(),
          new Array(),
          new Array(
            46,
            17,
            48,
            22,
            49,
            23,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(
            48,
            22,
            49,
            23,
            46,
            38,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31
          ),
          new Array(17, 141, 32, 63, 33, 64),
          new Array(
            19,
            142,
            3,
            3,
            5,
            4,
            6,
            5,
            7,
            6,
            9,
            7,
            11,
            8,
            10,
            9,
            18,
            12,
            20,
            13,
            46,
            17,
            31,
            18,
            48,
            22,
            49,
            23,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31,
            33,
            33,
            32,
            34
          ),
          new Array(39, 143),
          new Array(44, 78, 38, 59, 16, 79),
          new Array(),
          new Array(),
          new Array(
            3,
            3,
            5,
            4,
            6,
            5,
            7,
            6,
            9,
            7,
            11,
            8,
            10,
            9,
            18,
            12,
            20,
            13,
            46,
            17,
            31,
            18,
            48,
            22,
            49,
            23,
            38,
            24,
            47,
            25,
            8,
            26,
            14,
            27,
            16,
            28,
            12,
            29,
            13,
            30,
            45,
            31,
            33,
            33,
            32,
            34
          ),
          new Array()
        ),
        h = new Array(
          new Array(50, 1),
          new Array(
            51,
            2,
            61,
            10,
            54,
            11,
            60,
            14,
            63,
            15,
            59,
            16,
            62,
            19,
            67,
            20,
            64,
            21,
            65,
            32,
            66,
            35
          ),
          new Array(),
          new Array(
            54,
            36,
            63,
            15,
            62,
            19,
            64,
            21,
            65,
            32,
            66,
            35,
            59,
            37,
            67,
            20
          ),
          new Array(
            54,
            39,
            63,
            15,
            62,
            19,
            64,
            21,
            65,
            32,
            66,
            35,
            59,
            37,
            67,
            20
          ),
          new Array(
            51,
            40,
            61,
            10,
            54,
            11,
            60,
            14,
            63,
            15,
            59,
            16,
            62,
            19,
            67,
            20,
            64,
            21,
            65,
            32,
            66,
            35
          ),
          new Array(),
          new Array(),
          new Array(),
          new Array(
            51,
            44,
            61,
            10,
            54,
            11,
            60,
            14,
            63,
            15,
            59,
            16,
            62,
            19,
            67,
            20,
            64,
            21,
            65,
            32,
            66,
            35
          ),
          new Array(),
          new Array(),
          new Array(52, 54),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(63, 62, 62, 19, 64, 21, 65, 32, 66, 35, 59, 37, 67, 20),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(
            54,
            68,
            63,
            15,
            62,
            19,
            64,
            21,
            65,
            32,
            66,
            35,
            59,
            37,
            67,
            20
          ),
          new Array(),
          new Array(),
          new Array(55, 70, 56, 71),
          new Array(
            53,
            73,
            54,
            74,
            63,
            15,
            62,
            19,
            64,
            21,
            65,
            32,
            66,
            35,
            59,
            37,
            67,
            20
          ),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(66, 75, 59, 37, 67, 20),
          new Array(66, 76, 59, 37, 67, 20),
          new Array(),
          new Array(
            51,
            77,
            61,
            10,
            54,
            11,
            60,
            14,
            63,
            15,
            59,
            16,
            62,
            19,
            67,
            20,
            64,
            21,
            65,
            32,
            66,
            35
          ),
          new Array(),
          new Array(),
          new Array(
            51,
            80,
            61,
            10,
            54,
            11,
            60,
            14,
            63,
            15,
            59,
            16,
            62,
            19,
            67,
            20,
            64,
            21,
            65,
            32,
            66,
            35
          ),
          new Array(),
          new Array(61, 82, 60, 14, 59, 83, 67, 20),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(63, 85, 62, 19, 64, 21, 65, 32, 66, 35, 59, 37, 67, 20),
          new Array(63, 86, 62, 19, 64, 21, 65, 32, 66, 35, 59, 37, 67, 20),
          new Array(63, 87, 62, 19, 64, 21, 65, 32, 66, 35, 59, 37, 67, 20),
          new Array(63, 88, 62, 19, 64, 21, 65, 32, 66, 35, 59, 37, 67, 20),
          new Array(63, 89, 62, 19, 64, 21, 65, 32, 66, 35, 59, 37, 67, 20),
          new Array(63, 90, 62, 19, 64, 21, 65, 32, 66, 35, 59, 37, 67, 20),
          new Array(63, 91, 62, 19, 64, 21, 65, 32, 66, 35, 59, 37, 67, 20),
          new Array(),
          new Array(
            51,
            93,
            61,
            10,
            54,
            11,
            60,
            14,
            63,
            15,
            59,
            16,
            62,
            19,
            67,
            20,
            64,
            21,
            65,
            32,
            66,
            35
          ),
          new Array(
            54,
            94,
            63,
            15,
            62,
            19,
            64,
            21,
            65,
            32,
            66,
            35,
            59,
            37,
            67,
            20
          ),
          new Array(62, 95, 64, 21, 65, 32, 66, 35, 59, 37, 67, 20),
          new Array(62, 96, 64, 21, 65, 32, 66, 35, 59, 37, 67, 20),
          new Array(),
          new Array(
            53,
            98,
            54,
            74,
            63,
            15,
            62,
            19,
            64,
            21,
            65,
            32,
            66,
            35,
            59,
            37,
            67,
            20
          ),
          new Array(62, 99, 64, 21, 65, 32, 66, 35, 59, 37, 67, 20),
          new Array(66, 100, 59, 37, 67, 20),
          new Array(),
          new Array(64, 101, 65, 32, 66, 35, 59, 37, 67, 20),
          new Array(64, 102, 65, 32, 66, 35, 59, 37, 67, 20),
          new Array(65, 103, 66, 35, 59, 37, 67, 20),
          new Array(65, 104, 66, 35, 59, 37, 67, 20),
          new Array(65, 105, 66, 35, 59, 37, 67, 20),
          new Array(),
          new Array(57, 107),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(62, 116, 64, 21, 65, 32, 66, 35, 59, 37, 67, 20),
          new Array(),
          new Array(
            54,
            117,
            63,
            15,
            62,
            19,
            64,
            21,
            65,
            32,
            66,
            35,
            59,
            37,
            67,
            20
          ),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(56, 123),
          new Array(
            54,
            124,
            63,
            15,
            62,
            19,
            64,
            21,
            65,
            32,
            66,
            35,
            59,
            37,
            67,
            20
          ),
          new Array(),
          new Array(
            54,
            125,
            63,
            15,
            62,
            19,
            64,
            21,
            65,
            32,
            66,
            35,
            59,
            37,
            67,
            20
          ),
          new Array(
            51,
            126,
            61,
            10,
            54,
            11,
            60,
            14,
            63,
            15,
            59,
            16,
            62,
            19,
            67,
            20,
            64,
            21,
            65,
            32,
            66,
            35
          ),
          new Array(),
          new Array(),
          new Array(),
          new Array(
            54,
            129,
            63,
            15,
            62,
            19,
            64,
            21,
            65,
            32,
            66,
            35,
            59,
            37,
            67,
            20
          ),
          new Array(58, 130, 59, 132, 67, 20),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(
            53,
            73,
            62,
            137,
            64,
            21,
            54,
            74,
            65,
            32,
            63,
            15,
            66,
            35,
            59,
            37,
            67,
            20
          ),
          new Array(),
          new Array(52, 138),
          new Array(),
          new Array(61, 139, 60, 14, 59, 83, 67, 20),
          new Array(59, 140, 67, 20),
          new Array(),
          new Array(
            51,
            93,
            61,
            10,
            54,
            11,
            60,
            14,
            63,
            15,
            59,
            16,
            62,
            19,
            67,
            20,
            64,
            21,
            65,
            32,
            66,
            35
          ),
          new Array(),
          new Array(),
          new Array(),
          new Array(),
          new Array(
            51,
            144,
            61,
            10,
            54,
            11,
            60,
            14,
            63,
            15,
            59,
            16,
            62,
            19,
            67,
            20,
            64,
            21,
            65,
            32,
            66,
            35
          ),
          new Array()
        ),
        p = new Array(
          2,
          0,
          1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4,
          29,
          -1,
          40,
          53,
          65,
          -1,
          44,
          62,
          47,
          63,
          64,
          -1,
          67,
          -1,
          10,
          7,
          71,
          72,
          73,
          51,
          -1,
          -1,
          56,
          -1,
          53,
          65,
          -1,
          -1,
          -1,
          -1,
          24,
          25,
          26,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          27,
          -1,
          -1,
          -1,
          -1,
          -1,
          7,
          -1,
          -1,
          43,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          14,
          -1,
          9,
          -1,
          -1,
          6,
          54,
          55,
          18,
          -1,
          -1,
          20,
          -1,
          -1,
          -1,
          23,
          39,
          38,
          37,
          36,
          35,
          34,
          33,
          28,
          3,
          17,
          42,
          41,
          61,
          -1,
          -1,
          52,
          46,
          45,
          50,
          49,
          48,
          66,
          -1,
          13,
          69,
          -1,
          -1,
          70,
          -1,
          -1,
          61,
          -1,
          -1,
          -1,
          59,
          57,
          -1,
          -1,
          8,
          11,
          5,
          19,
          57,
          21,
          -1,
          60,
          7,
          16,
          4,
          12,
          -1,
          -1,
          44,
          -1,
          -1,
          15,
          58,
          68,
          -1,
          22
        ),
        d = new Array(
          "Program'",
          "ERROR_RESYNC",
          "WHITESPACE",
          "IF",
          "ELSE",
          "WHILE",
          "DO",
          "FOR",
          "FUNCTION",
          "USE",
          "RETURN",
          "DELETE",
          "TRUE",
          "FALSE",
          "<<",
          ">>",
          "[",
          "]",
          "{",
          "}",
          ";",
          "=",
          "==",
          "!=",
          "~=",
          "<=",
          ">=",
          ">",
          "<",
          "||",
          "&&",
          "!",
          "+",
          "-",
          "/",
          "%",
          "*",
          "^",
          "(",
          ")",
          ",",
          "#",
          ":",
          "|",
          ".",
          "NaN",
          "Identifier",
          "String",
          "Integer",
          "Float",
          "Program",
          "Stmt",
          "Stmt_List",
          "Param_List",
          "Expression",
          "Prop_List",
          "Prop",
          "Param_Def_List",
          "Attr_List",
          "ExtValue",
          "Lhs",
          "Assign",
          "AddSubExp",
          "LogExp",
          "MulDivExp",
          "NegExp",
          "ExpExp",
          "Value",
          "$"
        );
      t || (t = []), n || (n = []), r.push(0), i.push(0), (f.la = this._lex(f));
      for (;;) {
        f.act = 146;
        for (a = 0; a < c[r[r.length - 1]].length; a += 2)
          if (c[r[r.length - 1]][a] == f.la) {
            f.act = c[r[r.length - 1]][a + 1];
            break;
          }
        f.act == 146 &&
          ((f.act = p[r[r.length - 1]]) < 0 ? (f.act = 146) : (f.act *= -1));
        if (f.act == 146) {
          if (f.error_step == 0) {
            s++,
              t.push({ offset: f.offset - f.att.length, line: f.line }),
              n.push([]);
            for (a = 0; a < c[r[r.length - 1]].length; a += 2)
              n[n.length - 1].push(d[c[r[r.length - 1]][a]]);
          }
          while (r.length > 1 && f.act == 146) {
            r.pop(), i.pop();
            for (a = 0; a < c[r[r.length - 1]].length; a += 2)
              if (c[r[r.length - 1]][a] == 1) {
                (f.act = c[r[r.length - 1]][a + 1]), r.push(f.act), i.push("");
                break;
              }
          }
          if (r.length > 1 && f.act != 146) {
            while (f.la != 68) {
              f.act = 146;
              for (a = 0; a < c[r[r.length - 1]].length; a += 2)
                if (c[r[r.length - 1]][a] == f.la) {
                  f.act = c[r[r.length - 1]][a + 1];
                  break;
                }
              if (f.act != 146) break;
              while ((f.la = this._lex(f)) < 0) f.offset++;
            }
            while (f.la != 68 && f.act == 146);
          }
          if (f.act == 146 || f.la == 68) break;
          f.error_step = 3;
        }
        if (f.act > 0)
          r.push(f.act),
            i.push(f.att),
            (f.la = this._lex(f)),
            f.error_step > 0 && f.error_step--;
        else {
          (o = f.act * -1), (u = void 0);
          switch (o) {
            case 0:
              u = i[i.length - 1];
              break;
            case 1:
              this.execute(i[i.length - 1]);
              break;
            case 2:
              u = i[i.length - 0];
              break;
            case 3:
              u = this.createNode(
                "node_op",
                "op_none",
                i[i.length - 2],
                i[i.length - 1]
              );
              break;
            case 4:
              u = i[i.length - 0];
              break;
            case 5:
              u = this.createNode(
                "node_op",
                "op_param",
                i[i.length - 1],
                i[i.length - 3]
              );
              break;
            case 6:
              u = this.createNode("node_op", "op_param", i[i.length - 1]);
              break;
            case 7:
              u = i[i.length - 0];
              break;
            case 8:
              u = this.createNode(
                "node_op",
                "op_proplst",
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 9:
              u = i[i.length - 1];
              break;
            case 10:
              u = i[i.length - 0];
              break;
            case 11:
              u = this.createNode(
                "node_op",
                "op_prop",
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 12:
              u = this.createNode(
                "node_op",
                "op_paramdef",
                i[i.length - 1],
                i[i.length - 3]
              );
              break;
            case 13:
              u = this.createNode("node_op", "op_paramdef", i[i.length - 1]);
              break;
            case 14:
              u = i[i.length - 0];
              break;
            case 15:
              u = this.createNode(
                "node_op",
                "op_param",
                i[i.length - 1],
                i[i.length - 3]
              );
              break;
            case 16:
              u = this.createNode("node_op", "op_param", i[i.length - 1]);
              break;
            case 17:
              u = this.createNode(
                "node_op",
                "op_assign",
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 18:
              u = this.createNode(
                "node_op",
                "op_if",
                i[i.length - 2],
                i[i.length - 1]
              );
              break;
            case 19:
              u = this.createNode(
                "node_op",
                "op_if_else",
                i[i.length - 4],
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 20:
              u = this.createNode(
                "node_op",
                "op_while",
                i[i.length - 2],
                i[i.length - 1]
              );
              break;
            case 21:
              u = this.createNode(
                "node_op",
                "op_do",
                i[i.length - 4],
                i[i.length - 2]
              );
              break;
            case 22:
              u = this.createNode(
                "node_op",
                "op_for",
                i[i.length - 7],
                i[i.length - 5],
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 23:
              u = this.createNode("node_op", "op_use", i[i.length - 2]);
              break;
            case 24:
              u = this.createNode("node_op", "op_delete", i[i.length - 1]);
              break;
            case 25:
              u = this.createNode("node_op", "op_return", i[i.length - 1]);
              break;
            case 26:
              u = i[i.length - 2];
              break;
            case 27:
              u = this.createNode("node_op", "op_noassign", i[i.length - 2]);
              break;
            case 28:
              (u = i[i.length - 2]), (u.needsBrackets = !0);
              break;
            case 29:
              u = this.createNode("node_op", "op_none");
              break;
            case 30:
              u = this.createNode(
                "node_op",
                "op_lhs",
                i[i.length - 1],
                i[i.length - 3],
                "dot"
              );
              break;
            case 31:
              u = this.createNode(
                "node_op",
                "op_lhs",
                i[i.length - 2],
                i[i.length - 4],
                "bracket"
              );
              break;
            case 32:
              u = this.createNode("node_op", "op_lhs", i[i.length - 1]);
              break;
            case 33:
              u = this.createNode(
                "node_op",
                "op_equ",
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 34:
              u = this.createNode(
                "node_op",
                "op_lot",
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 35:
              u = this.createNode(
                "node_op",
                "op_grt",
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 36:
              u = this.createNode(
                "node_op",
                "op_loe",
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 37:
              u = this.createNode(
                "node_op",
                "op_gre",
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 38:
              u = this.createNode(
                "node_op",
                "op_neq",
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 39:
              u = this.createNode(
                "node_op",
                "op_approx",
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 40:
              u = i[i.length - 1];
              break;
            case 41:
              u = this.createNode(
                "node_op",
                "op_or",
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 42:
              u = this.createNode(
                "node_op",
                "op_and",
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 43:
              u = this.createNode("node_op", "op_not", i[i.length - 1]);
              break;
            case 44:
              u = i[i.length - 1];
              break;
            case 45:
              u = this.createNode(
                "node_op",
                "op_sub",
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 46:
              u = this.createNode(
                "node_op",
                "op_add",
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 47:
              u = i[i.length - 1];
              break;
            case 48:
              u = this.createNode(
                "node_op",
                "op_mul",
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 49:
              u = this.createNode(
                "node_op",
                "op_div",
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 50:
              u = this.createNode(
                "node_op",
                "op_mod",
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 51:
              u = i[i.length - 1];
              break;
            case 52:
              u = this.createNode(
                "node_op",
                "op_exp",
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 53:
              u = i[i.length - 1];
              break;
            case 54:
              u = this.createNode("node_op", "op_neg", i[i.length - 1]);
              break;
            case 55:
              u = i[i.length - 1];
              break;
            case 56:
              u = i[i.length - 1];
              break;
            case 57:
              u = this.createNode(
                "node_op",
                "op_extvalue",
                i[i.length - 4],
                i[i.length - 2]
              );
              break;
            case 58:
              u = this.createNode(
                "node_op",
                "op_extvalue",
                this.createNode(
                  "node_op",
                  "op_execfun",
                  i[i.length - 7],
                  i[i.length - 5]
                ),
                i[i.length - 2]
              );
              break;
            case 59:
              u = this.createNode(
                "node_op",
                "op_execfun",
                i[i.length - 4],
                i[i.length - 2]
              );
              break;
            case 60:
              u = this.createNode(
                "node_op",
                "op_execfun",
                i[i.length - 5],
                i[i.length - 3],
                i[i.length - 1],
                !0
              );
              break;
            case 61:
              u = this.createNode(
                "node_op",
                "op_property",
                i[i.length - 3],
                i[i.length - 1]
              );
              break;
            case 62:
              u = i[i.length - 1];
              break;
            case 63:
              u = this.createNode("node_const", i[i.length - 1]);
              break;
            case 64:
              u = this.createNode("node_const", i[i.length - 1]);
              break;
            case 65:
              u = this.createNode("node_var", i[i.length - 1]);
              break;
            case 66:
              u = i[i.length - 2];
              break;
            case 67:
              u = this.createNode("node_str", i[i.length - 1]);
              break;
            case 68:
              u = this.createNode(
                "node_op",
                "op_function",
                i[i.length - 5],
                i[i.length - 2]
              );
              break;
            case 69:
              u = this.createNode("node_op", "op_proplst_val", i[i.length - 2]);
              break;
            case 70:
              u = this.createNode("node_op", "op_array", i[i.length - 2]);
              break;
            case 71:
              u = this.createNode("node_const_bool", i[i.length - 1]);
              break;
            case 72:
              u = this.createNode("node_const_bool", i[i.length - 1]);
              break;
            case 73:
              u = NaN;
          }
          for (a = 0; a < l[o][1]; a++) r.pop(), i.pop();
          f.act = 146;
          for (a = 0; a < h[r[r.length - 1]].length; a += 2)
            if (h[r[r.length - 1]][a] == l[o][0]) {
              f.act = h[r[r.length - 1]][a + 1];
              break;
            }
          if (o == 0) break;
          r.push(f.act), i.push(u);
        }
      }
      return s;
    },
  }),
  (JXG.Dump = {
    addMarkers: function (e, t, n) {
      var r, i, s;
      JXG.isArray(t) || (t = [t]),
        JXG.isArray(n) || (n = [n]),
        (i = Math.min(t.length, n.length)),
        (t.length = i),
        (n.length = i);
      for (r in e.objects) for (s = 0; s < i; s++) e.objects[r][t[s]] = n[s];
    },
    deleteMarkers: function (e, t) {
      var n, r, i;
      JXG.isArray(t) || (t = [t]), (r = t.length), (t.length = r);
      for (n in e.objects) for (i = 0; i < r; i++) delete e.objects[n][t[i]];
    },
    str: function (e) {
      return (
        typeof e == "string" &&
          e.substr(0, 7) !== "function" &&
          (e = "'" + e + "'"),
        e
      );
    },
    minimizeObject: function (e) {
      var t,
        n,
        r = JXG.deepCopy(e),
        i = [],
        s;
      for (s = 1; s < arguments.length; s++) i.push(arguments[s]);
      for (s = 0; s < i.length; s++)
        for (t in i[s])
          (n = t.toLowerCase()),
            typeof i[s][t] != "object" && i[s][t] == r[n] && delete r[n];
      return r;
    },
    prepareAttributes: function (e, t) {
      var n, r;
      n = this.minimizeObject(
        t.getAttributes(),
        e.options[t.elType],
        e.options.elements
      );
      for (r in t.subs)
        (n[r] = this.minimizeObject(
          t.subs[r].getAttributes(),
          e.options[t.elType][r],
          e.options[t.subs[r].elType],
          e.options.elements
        )),
          (n[r].id = t.subs[r].id),
          (n[r].name = t.subs[r].name);
      return (n.id = t.id), (n.name = t.name), n;
    },
    dump: function (e) {
      var t,
        n,
        r,
        i,
        s = [],
        o = e.objectsList.length;
      this.addMarkers(e, "dumped", !1);
      for (t = 0; t < o; t++) {
        (n = e.objectsList[t]), (r = {});
        if (!n.dumped && n.dump) {
          (r.type = n.getType()),
            (r.parents = n.getParents()),
            r.type === "point" &&
              r.parents[0] == 1 &&
              (r.parents = r.parents.slice(1));
          for (i = 0; i < r.parents.length; i++)
            typeof r.parents[i] == "string" &&
              (r.parents[i] = "'" + r.parents[i] + "'");
          (r.attributes = this.prepareAttributes(e, n)), s.push(r);
        }
      }
      return this.deleteMarkers(e, "dumped"), s;
    },
    toJSAN: function (e) {
      var t, n;
      switch (typeof e) {
        case "object":
          if (e) {
            var r = [];
            if (e instanceof Array) {
              for (n = 0; n < e.length; n++) r.push(this.toJSAN(e[n]));
              return "[" + r.join(",") + "]";
            }
            for (var i in e) r.push(i + ": " + this.toJSAN(e[i]));
            return "<<" + r.join(", ") + ">> ";
          }
          return "null";
        case "string":
          return "'" + e.replace(/(["'])/g, "\\$1") + "'";
        case "number":
        case "boolean":
          return new String(e);
        case "null":
          return "null";
      }
    },
    toJessie: function (e) {
      var t = this.dump(e),
        n = [],
        r;
      for (r = 0; r < t.length; r++)
        t[r].attributes.name.length > 0 && n.push("// " + t[r].attributes.name),
          n.push(
            "s" +
              r +
              " = " +
              t[r].type +
              "(" +
              t[r].parents.join(", ") +
              ") " +
              this.toJSAN(t[r].attributes).replace(/\n/, "\\n") +
              ";"
          ),
          n.push("");
      return n.join("\n");
    },
    toJavaScript: function (e) {
      var t = this.dump(e),
        n = [],
        r;
      for (r = 0; r < t.length; r++)
        n.push(
          'board.create("' +
            t[r].type +
            '", [' +
            t[r].parents.join(", ") +
            "], " +
            JXG.toJSON(t[r].attributes) +
            ");"
        );
      return n.join("\n");
    },
  }),
  (JXG.SVGRenderer = function (e) {
    var t;
    (this.type = "svg"),
      (this.svgRoot = null),
      (this.svgNamespace = "http://www.w3.org/2000/svg"),
      (this.xlinkNamespace = "http://www.w3.org/1999/xlink"),
      (this.container = e),
      (this.container.style.MozUserSelect = "none"),
      (this.container.style.overflow = "hidden"),
      this.container.style.position === "" &&
        (this.container.style.position = "relative"),
      (this.svgRoot = this.container.ownerDocument.createElementNS(
        this.svgNamespace,
        "svg"
      )),
      (this.svgRoot.style.overflow = "hidden"),
      (this.svgRoot.style.width = JXG.getStyle(this.container, "width")),
      (this.svgRoot.style.height = JXG.getStyle(this.container, "height")),
      this.container.appendChild(this.svgRoot),
      (this.defs = this.container.ownerDocument.createElementNS(
        this.svgNamespace,
        "defs"
      )),
      this.svgRoot.appendChild(this.defs),
      (this.filter = this.container.ownerDocument.createElementNS(
        this.svgNamespace,
        "filter"
      )),
      this.filter.setAttributeNS(null, "id", this.container.id + "_" + "f1"),
      this.filter.setAttributeNS(null, "width", "300%"),
      this.filter.setAttributeNS(null, "height", "300%"),
      this.filter.setAttributeNS(null, "filterUnits", "userSpaceOnUse"),
      (this.feOffset = this.container.ownerDocument.createElementNS(
        this.svgNamespace,
        "feOffset"
      )),
      this.feOffset.setAttributeNS(null, "result", "offOut"),
      this.feOffset.setAttributeNS(null, "in", "SourceAlpha"),
      this.feOffset.setAttributeNS(null, "dx", "5"),
      this.feOffset.setAttributeNS(null, "dy", "5"),
      this.filter.appendChild(this.feOffset),
      (this.feGaussianBlur = this.container.ownerDocument.createElementNS(
        this.svgNamespace,
        "feGaussianBlur"
      )),
      this.feGaussianBlur.setAttributeNS(null, "result", "blurOut"),
      this.feGaussianBlur.setAttributeNS(null, "in", "offOut"),
      this.feGaussianBlur.setAttributeNS(null, "stdDeviation", "3"),
      this.filter.appendChild(this.feGaussianBlur),
      (this.feBlend = this.container.ownerDocument.createElementNS(
        this.svgNamespace,
        "feBlend"
      )),
      this.feBlend.setAttributeNS(null, "in", "SourceGraphic"),
      this.feBlend.setAttributeNS(null, "in2", "blurOut"),
      this.feBlend.setAttributeNS(null, "mode", "normal"),
      this.filter.appendChild(this.feBlend),
      this.defs.appendChild(this.filter),
      (this.layer = []);
    for (t = 0; t < JXG.Options.layer.numlayers; t++)
      (this.layer[t] = this.container.ownerDocument.createElementNS(
        this.svgNamespace,
        "g"
      )),
        this.svgRoot.appendChild(this.layer[t]);
    this.dashArray = [
      "2, 2",
      "5, 5",
      "10, 10",
      "20, 20",
      "20, 10, 10, 10",
      "20, 5, 10, 5",
    ];
  }),
  (JXG.SVGRenderer.prototype = new JXG.AbstractRenderer()),
  JXG.extend(JXG.SVGRenderer.prototype, {
    _createArrowHead: function (e, t) {
      var n = e.id + "Triangle",
        r,
        i;
      return (
        JXG.exists(t) && (n += t),
        (r = this.createPrim("marker", n)),
        r.setAttributeNS(null, "viewBox", "0 0 10 6"),
        r.setAttributeNS(null, "refY", "3"),
        r.setAttributeNS(null, "markerUnits", "userSpaceOnUse"),
        r.setAttributeNS(null, "markerHeight", "12"),
        r.setAttributeNS(null, "markerWidth", "10"),
        r.setAttributeNS(null, "orient", "auto"),
        r.setAttributeNS(null, "stroke", JXG.evaluate(e.visProp.strokecolor)),
        r.setAttributeNS(
          null,
          "stroke-opacity",
          JXG.evaluate(e.visProp.strokeopacity)
        ),
        r.setAttributeNS(null, "fill", JXG.evaluate(e.visProp.strokecolor)),
        r.setAttributeNS(
          null,
          "fill-opacity",
          JXG.evaluate(e.visProp.strokeopacity)
        ),
        (i = this.container.ownerDocument.createElementNS(
          this.svgNamespace,
          "path"
        )),
        t === "End"
          ? (r.setAttributeNS(null, "refX", "0"),
            i.setAttributeNS(null, "d", "M 0 3 L 10 6 L 10 0 z"))
          : (r.setAttributeNS(null, "refX", "10"),
            i.setAttributeNS(null, "d", "M 0 0 L 10 3 L 0 6 z")),
        r.appendChild(i),
        r
      );
    },
    _setArrowAtts: function (e, t, n, r) {
      e &&
        (e.setAttributeNS(null, "stroke", t),
        e.setAttributeNS(null, "stroke-opacity", n),
        e.setAttributeNS(null, "fill", t),
        e.setAttributeNS(null, "fill-opacity", n),
        e.setAttributeNS(null, "stroke-width", r));
    },
    updateTicks: function (e, t, n, r, i, s, o) {
      var u = "",
        a,
        f,
        l,
        c,
        h,
        p = e.ticks.length;
      for (a = 0; a < p; a++)
        (f = e.ticks[a]),
          (c = f[0]),
          (h = f[1]),
          typeof c[0] != "undefined" &&
            typeof c[1] != "undefined" &&
            (u += "M " + c[0] + " " + h[0] + " L " + c[1] + " " + h[1] + " ");
      for (a = 0; a < p; a++)
        (f = e.ticks[a].scrCoords),
          e.ticks[a].major &&
            (e.board.needsFullUpdate || e.needsRegularUpdate) &&
            e.labels[a] &&
            e.labels[a].visProp.visible &&
            this.updateText(e.labels[a]);
      (l = this.getElementById(e.id)),
        JXG.exists(l) ||
          ((l = this.createPrim("path", e.id)),
          this.appendChildPrim(l, e.visProp.layer),
          this.appendNodesToElement(e, "path")),
        l.setAttributeNS(null, "stroke", e.visProp.strokecolor),
        l.setAttributeNS(null, "stroke-opacity", e.visProp.strokeopacity),
        l.setAttributeNS(null, "stroke-width", e.visProp.strokewidth),
        this.updatePathPrim(l, u, e.board);
    },
    displayCopyright: function (e, t) {
      var n = this.createPrim("text", "licenseText"),
        r;
      n.setAttributeNS(null, "x", "20px"),
        n.setAttributeNS(null, "y", 2 + t + "px"),
        n.setAttributeNS(
          null,
          "style",
          "font-family:Arial,Helvetica,sans-serif; font-size:" +
            t +
            "px; fill:#356AA0;  opacity:0.3;"
        ),
        (r = document.createTextNode(e)),
        n.appendChild(r),
        this.appendChildPrim(n, 0);
    },
    drawInternalText: function (e) {
      var t = this.createPrim("text", e.id);
      return (
        t.setAttributeNS(null, "class", e.visProp.cssclass),
        (e.rendNodeText = document.createTextNode("")),
        t.appendChild(e.rendNodeText),
        this.appendChildPrim(t, e.visProp.layer),
        t
      );
    },
    updateInternalText: function (e) {
      var t = e.plaintext;
      isNaN(e.coords.scrCoords[1] + e.coords.scrCoords[2]) ||
        (e.rendNode.setAttributeNS(null, "x", e.coords.scrCoords[1] + "px"),
        e.rendNode.setAttributeNS(
          null,
          "y",
          e.coords.scrCoords[2] + this.vOffsetText * 0.5 + "px"
        ),
        e.visProp.anchorx === "right"
          ? e.rendNode.setAttributeNS(null, "text-anchor", "end")
          : e.visProp.anchorx === "middle" &&
            e.rendNode.setAttributeNS(null, "text-anchor", "middle"),
        e.visProp.anchory === "top"
          ? e.rendNode.setAttributeNS(
              null,
              "dominant-baseline",
              "text-before-edge"
            )
          : e.visProp.anchory === "middle" &&
            e.rendNode.setAttributeNS(null, "dominant-baseline", "middle")),
        e.htmlStr !== t && ((e.rendNodeText.data = t), (e.htmlStr = t)),
        this.transformImage(e, e.transformations);
    },
    updateInternalTextStyle: function (e, t, n) {
      this.setObjectFillColor(e, t, n);
    },
    drawImage: function (e) {
      var t = this.createPrim("image", e.id);
      t.setAttributeNS(null, "preserveAspectRatio", "none"),
        this.appendChildPrim(t, e.visProp.layer),
        (e.rendNode = t),
        this.updateImage(e);
    },
    transformImage: function (e, t) {
      var n = e.rendNode,
        r,
        i = "",
        s,
        o = t.length;
      o > 0 &&
        ((r = this.joinTransforms(e, t)),
        (s = [r[1][1], r[2][1], r[1][2], r[2][2], r[1][0], r[2][0]].join(",")),
        (i += " matrix(" + s + ") "),
        n.setAttributeNS(null, "transform", i));
    },
    updateImageURL: function (e) {
      var t = JXG.evaluate(e.url);
      e.rendNode.setAttributeNS(this.xlinkNamespace, "xlink:href", t);
    },
    updateImageStyle: function (e, t) {
      var n = t ? e.visProp.highlightcssclass : e.visProp.cssclass;
      e.rendNode.setAttributeNS(null, "class", n);
    },
    appendChildPrim: function (e, t) {
      JXG.exists(t)
        ? t >= JXG.Options.layer.numlayers &&
          (t = JXG.Options.layer.numlayers - 1)
        : (t = 0),
        this.layer[t].appendChild(e);
    },
    appendNodesToElement: function (e) {
      e.rendNode = this.getElementById(e.id);
    },
    createPrim: function (e, t) {
      var n = this.container.ownerDocument.createElementNS(
        this.svgNamespace,
        e
      );
      return (
        n.setAttributeNS(null, "id", this.container.id + "_" + t),
        (n.style.position = "absolute"),
        e === "path" &&
          (n.setAttributeNS(null, "stroke-linecap", "butt"),
          n.setAttributeNS(null, "stroke-linejoin", "round")),
        n
      );
    },
    remove: function (e) {
      JXG.exists(e) && JXG.exists(e.parentNode) && e.parentNode.removeChild(e);
    },
    makeArrows: function (e) {
      var t;
      if (
        e.visPropOld.firstarrow === e.visProp.firstarrow &&
        e.visPropOld.lastarrow === e.visProp.lastarrow
      )
        return;
      e.visProp.firstarrow
        ? ((t = e.rendNodeTriangleStart),
          JXG.exists(t)
            ? this.defs.appendChild(t)
            : ((t = this._createArrowHead(e, "End")),
              this.defs.appendChild(t),
              (e.rendNodeTriangleStart = t),
              e.rendNode.setAttributeNS(
                null,
                "marker-start",
                "url(#" + this.container.id + "_" + e.id + "TriangleEnd)"
              )))
        : ((t = e.rendNodeTriangleStart), JXG.exists(t) && this.remove(t)),
        e.visProp.lastarrow
          ? ((t = e.rendNodeTriangleEnd),
            JXG.exists(t)
              ? this.defs.appendChild(t)
              : ((t = this._createArrowHead(e, "Start")),
                this.defs.appendChild(t),
                (e.rendNodeTriangleEnd = t),
                e.rendNode.setAttributeNS(
                  null,
                  "marker-end",
                  "url(#" + this.container.id + "_" + e.id + "TriangleStart)"
                )))
          : ((t = e.rendNodeTriangleEnd), JXG.exists(t) && this.remove(t)),
        (e.visPropOld.firstarrow = e.visProp.firstarrow),
        (e.visPropOld.lastarrow = e.visProp.lastarrow);
    },
    updateEllipsePrim: function (e, t, n, r, i) {
      e.setAttributeNS(null, "cx", t),
        e.setAttributeNS(null, "cy", n),
        e.setAttributeNS(null, "rx", Math.abs(r)),
        e.setAttributeNS(null, "ry", Math.abs(i));
    },
    updateLinePrim: function (e, t, n, r, i) {
      isNaN(t + n + r + i) ||
        (e.setAttributeNS(null, "x1", t),
        e.setAttributeNS(null, "y1", n),
        e.setAttributeNS(null, "x2", r),
        e.setAttributeNS(null, "y2", i));
    },
    updatePathPrim: function (e, t) {
      t == "" && (t = "M 0 0"), e.setAttributeNS(null, "d", t);
    },
    updatePathStringPoint: function (e, t, n) {
      var r = "",
        i = e.coords.scrCoords,
        s = t * Math.sqrt(3) * 0.5,
        o = t * 0.5;
      return (
        n === "x"
          ? (r =
              " M " +
              (i[1] - t) +
              " " +
              (i[2] - t) +
              " L " +
              (i[1] + t) +
              " " +
              (i[2] + t) +
              " M " +
              (i[1] + t) +
              " " +
              (i[2] - t) +
              " L " +
              (i[1] - t) +
              " " +
              (i[2] + t))
          : n === "+"
          ? (r =
              " M " +
              (i[1] - t) +
              " " +
              i[2] +
              " L " +
              (i[1] + t) +
              " " +
              i[2] +
              " M " +
              i[1] +
              " " +
              (i[2] - t) +
              " L " +
              i[1] +
              " " +
              (i[2] + t))
          : n === "<>"
          ? (r =
              " M " +
              (i[1] - t) +
              " " +
              i[2] +
              " L " +
              i[1] +
              " " +
              (i[2] + t) +
              " L " +
              (i[1] + t) +
              " " +
              i[2] +
              " L " +
              i[1] +
              " " +
              (i[2] - t) +
              " Z ")
          : n === "^"
          ? (r =
              " M " +
              i[1] +
              " " +
              (i[2] - t) +
              " L " +
              (i[1] - s) +
              " " +
              (i[2] + o) +
              " L " +
              (i[1] + s) +
              " " +
              (i[2] + o) +
              " Z ")
          : n === "v"
          ? (r =
              " M " +
              i[1] +
              " " +
              (i[2] + t) +
              " L " +
              (i[1] - s) +
              " " +
              (i[2] - o) +
              " L " +
              (i[1] + s) +
              " " +
              (i[2] - o) +
              " Z ")
          : n === ">"
          ? (r =
              " M " +
              (i[1] + t) +
              " " +
              i[2] +
              " L " +
              (i[1] - o) +
              " " +
              (i[2] - s) +
              " L " +
              (i[1] - o) +
              " " +
              (i[2] + s) +
              " Z ")
          : n === "<" &&
            (r =
              " M " +
              (i[1] - t) +
              " " +
              i[2] +
              " L " +
              (i[1] + o) +
              " " +
              (i[2] - s) +
              " L " +
              (i[1] + o) +
              " " +
              (i[2] + s) +
              " Z "),
        r
      );
    },
    updatePathStringPrim: function (e) {
      var t = " M ",
        n = " L ",
        r = " C ",
        i = t,
        s = 5e3,
        o = "",
        u,
        a,
        f = e.visProp.curvetype !== "plot",
        l;
      if (e.numberPoints <= 0) return "";
      l = Math.min(e.points.length, e.numberPoints);
      if (e.bezierDegree == 1) {
        f &&
          e.board.options.curve.RDPsmoothing &&
          (e.points = JXG.Math.Numerics.RamerDouglasPeuker(e.points, 0.5));
        for (u = 0; u < l; u++)
          (a = e.points[u].scrCoords),
            isNaN(a[1]) || isNaN(a[2])
              ? (i = t)
              : (a[1] > s ? (a[1] = s) : a[1] < -s && (a[1] = -s),
                a[2] > s ? (a[2] = s) : a[2] < -s && (a[2] = -s),
                (o += i + a[1] + " " + a[2]),
                (i = n));
      } else if (e.bezierDegree == 3) {
        u = 0;
        while (u < l)
          (a = e.points[u].scrCoords),
            isNaN(a[1]) || isNaN(a[2])
              ? (i = t)
              : ((o += i + a[1] + " " + a[2]),
                i == r &&
                  (u++,
                  (a = e.points[u].scrCoords),
                  (o += " " + a[1] + " " + a[2]),
                  u++,
                  (a = e.points[u].scrCoords),
                  (o += " " + a[1] + " " + a[2])),
                (i = r)),
            u++;
      }
      return o;
    },
    updatePathStringBezierPrim: function (e) {
      var t = " M ",
        n = " C ",
        r = t,
        i = 5e3,
        s = "",
        o,
        u,
        a,
        f,
        l,
        c = e.visProp.strokewidth,
        h = e.visProp.curvetype !== "plot",
        p;
      if (e.numberPoints <= 0) return "";
      h &&
        e.board.options.curve.RDPsmoothing &&
        (e.points = JXG.Math.Numerics.RamerDouglasPeuker(e.points, 0.5)),
        (p = Math.min(e.points.length, e.numberPoints));
      for (u = 1; u < 3; u++) {
        r = t;
        for (o = 0; o < p; o++)
          (a = e.points[o].scrCoords),
            isNaN(a[1]) || isNaN(a[2])
              ? (r = t)
              : (a[1] > i ? (a[1] = i) : a[1] < -i && (a[1] = -i),
                a[2] > i ? (a[2] = i) : a[2] < -i && (a[2] = -i),
                r == t
                  ? (s += [
                      r,
                      a[1] + 0 * c * (2 * u * Math.random() - u),
                      " ",
                      a[2] + 0 * c * (2 * u * Math.random() - u),
                    ].join(""))
                  : (s += [
                      r,
                      f + (a[1] - f) * 0.333 + c * (2 * u * Math.random() - u),
                      " ",
                      l + (a[2] - l) * 0.333 + c * (2 * u * Math.random() - u),
                      " ",
                      f +
                        2 * (a[1] - f) * 0.333 +
                        c * (2 * u * Math.random() - u),
                      " ",
                      l +
                        2 * (a[2] - l) * 0.333 +
                        c * (2 * u * Math.random() - u),
                      " ",
                      a[1],
                      " ",
                      a[2],
                    ].join("")),
                (r = n),
                (f = a[1]),
                (l = a[2]));
      }
      return s;
    },
    updatePolygonPrim: function (e, t) {
      var n = "",
        r,
        i,
        s = t.vertices.length;
      e.setAttributeNS(null, "stroke", "none");
      for (i = 0; i < s - 1; i++) {
        if (!t.vertices[i].isReal) {
          e.setAttributeNS(null, "points", "");
          return;
        }
        (r = t.vertices[i].coords.scrCoords),
          (n = n + r[1] + "," + r[2]),
          i < s - 2 && (n += " ");
      }
      n.indexOf("NaN") == -1 && e.setAttributeNS(null, "points", n);
    },
    updateRectPrim: function (e, t, n, r, i) {
      e.setAttributeNS(null, "x", t),
        e.setAttributeNS(null, "y", n),
        e.setAttributeNS(null, "width", r),
        e.setAttributeNS(null, "height", i);
    },
    setPropertyPrim: function (e, t, n) {
      if (t === "stroked") return;
      e.setAttributeNS(null, t, n);
    },
    show: function (e) {
      var t;
      e &&
        e.rendNode &&
        ((t = e.rendNode),
        t.setAttributeNS(null, "display", "inline"),
        (t.style.visibility = "inherit"));
    },
    hide: function (e) {
      var t;
      e &&
        e.rendNode &&
        ((t = e.rendNode),
        t.setAttributeNS(null, "display", "none"),
        (t.style.visibility = "hidden"));
    },
    setBuffering: function (e, t) {
      e.rendNode.setAttribute("buffered-rendering", t);
    },
    setDashStyle: function (e) {
      var t = e.visProp.dash,
        n = e.rendNode;
      e.visProp.dash > 0
        ? n.setAttributeNS(null, "stroke-dasharray", this.dashArray[t - 1])
        : n.hasAttributeNS(null, "stroke-dasharray") &&
          n.removeAttributeNS(null, "stroke-dasharray");
    },
    setGradient: function (e) {
      var t = e.rendNode,
        n,
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l;
      (r = JXG.evaluate(e.visProp.fillopacity)),
        (r = r > 0 ? r : 0),
        (n = JXG.evaluate(e.visProp.fillcolor)),
        e.visProp.gradient === "linear"
          ? ((i = this.createPrim("linearGradient", e.id + "_gradient")),
            (u = "0%"),
            (a = "100%"),
            (f = "0%"),
            (l = "0%"),
            i.setAttributeNS(null, "x1", u),
            i.setAttributeNS(null, "x2", a),
            i.setAttributeNS(null, "y1", f),
            i.setAttributeNS(null, "y2", l),
            (s = this.createPrim("stop", e.id + "_gradient1")),
            s.setAttributeNS(null, "offset", "0%"),
            s.setAttributeNS(
              null,
              "style",
              "stop-color:" + n + ";stop-opacity:" + r
            ),
            (o = this.createPrim("stop", e.id + "_gradient2")),
            o.setAttributeNS(null, "offset", "100%"),
            o.setAttributeNS(
              null,
              "style",
              "stop-color:" +
                e.visProp.gradientsecondcolor +
                ";stop-opacity:" +
                e.visProp.gradientsecondopacity
            ),
            i.appendChild(s),
            i.appendChild(o),
            this.defs.appendChild(i),
            t.setAttributeNS(
              null,
              "style",
              "fill:url(#" + this.container.id + "_" + e.id + "_gradient)"
            ),
            (e.gradNode1 = s),
            (e.gradNode2 = o))
          : e.visProp.gradient === "radial"
          ? ((i = this.createPrim("radialGradient", e.id + "_gradient")),
            i.setAttributeNS(null, "cx", "50%"),
            i.setAttributeNS(null, "cy", "50%"),
            i.setAttributeNS(null, "r", "50%"),
            i.setAttributeNS(
              null,
              "fx",
              e.visProp.gradientpositionx * 100 + "%"
            ),
            i.setAttributeNS(
              null,
              "fy",
              e.visProp.gradientpositiony * 100 + "%"
            ),
            (s = this.createPrim("stop", e.id + "_gradient1")),
            s.setAttributeNS(null, "offset", "0%"),
            s.setAttributeNS(
              null,
              "style",
              "stop-color:" +
                e.visProp.gradientsecondcolor +
                ";stop-opacity:" +
                e.visProp.gradientsecondopacity
            ),
            (o = this.createPrim("stop", e.id + "_gradient2")),
            o.setAttributeNS(null, "offset", "100%"),
            o.setAttributeNS(
              null,
              "style",
              "stop-color:" + n + ";stop-opacity:" + r
            ),
            i.appendChild(s),
            i.appendChild(o),
            this.defs.appendChild(i),
            t.setAttributeNS(
              null,
              "style",
              "fill:url(#" + this.container.id + "_" + e.id + "_gradient)"
            ),
            (e.gradNode1 = s),
            (e.gradNode2 = o))
          : t.removeAttributeNS(null, "style");
    },
    updateGradient: function (e) {
      var t = e.gradNode1,
        n = e.gradNode2,
        r,
        i;
      if (!JXG.exists(t) || !JXG.exists(n)) return;
      (i = JXG.evaluate(e.visProp.fillopacity)),
        (i = i > 0 ? i : 0),
        (r = JXG.evaluate(e.visProp.fillcolor)),
        e.visProp.gradient === "linear"
          ? (t.setAttributeNS(
              null,
              "style",
              "stop-color:" + r + ";stop-opacity:" + i
            ),
            n.setAttributeNS(
              null,
              "style",
              "stop-color:" +
                e.visProp.gradientsecondcolor +
                ";stop-opacity:" +
                e.visProp.gradientsecondopacity
            ))
          : e.visProp.gradient === "radial" &&
            (t.setAttributeNS(
              null,
              "style",
              "stop-color:" +
                e.visProp.gradientsecondcolor +
                ";stop-opacity:" +
                e.visProp.gradientsecondopacity
            ),
            n.setAttributeNS(
              null,
              "style",
              "stop-color:" + r + ";stop-opacity:" + i
            ));
    },
    setObjectFillColor: function (e, t, n) {
      var r,
        i = JXG.evaluate(t),
        s,
        o,
        u = JXG.evaluate(n),
        a;
      u = u > 0 ? u : 0;
      if (e.visPropOld.fillcolor === i && e.visPropOld.fillopacity === u)
        return;
      JXG.exists(i) &&
        i !== !1 &&
        (i.length != 9
          ? ((s = i), (a = u))
          : ((o = JXG.rgba2rgbo(i)), (s = o[0]), (a = u * o[1])),
        (r = e.rendNode),
        s != "none" ? r.setAttributeNS(null, "fill", s) : (a = 0),
        e.type === JXG.OBJECT_TYPE_IMAGE
          ? r.setAttributeNS(null, "opacity", a)
          : r.setAttributeNS(null, "fill-opacity", a),
        JXG.exists(e.visProp.gradient) && this.updateGradient(e)),
        (e.visPropOld.fillcolor = i),
        (e.visPropOld.fillopacity = u);
    },
    setObjectStrokeColor: function (e, t, n) {
      var r = JXG.evaluate(t),
        i,
        s,
        o = JXG.evaluate(n),
        u,
        a;
      o = o > 0 ? o : 0;
      if (e.visPropOld.strokecolor === r && e.visPropOld.strokeopacity === o)
        return;
      if (JXG.exists(r) && r !== !1) {
        r.length != 9
          ? ((i = r), (u = o))
          : ((s = JXG.rgba2rgbo(r)), (i = s[0]), (u = o * s[1])),
          (a = e.rendNode),
          e.type === JXG.OBJECT_TYPE_TEXT
            ? e.visProp.display === "html"
              ? ((a.style.color = i), (a.style.opacity = u))
              : (a.setAttributeNS(null, "style", "fill:" + i),
                a.setAttributeNS(null, "style", "fill-opacity:" + u))
            : (a.setAttributeNS(null, "stroke", i),
              a.setAttributeNS(null, "stroke-opacity", u));
        if (e.type === JXG.OBJECT_TYPE_ARROW)
          this._setArrowAtts(e.rendNodeTriangle, i, u, e.visProp.strokewidth);
        else if (
          e.elementClass === JXG.OBJECT_CLASS_CURVE ||
          e.elementClass === JXG.OBJECT_CLASS_LINE
        )
          e.visProp.firstarrow &&
            this._setArrowAtts(
              e.rendNodeTriangleStart,
              i,
              u,
              e.visProp.strokewidth
            ),
            e.visProp.lastarrow &&
              this._setArrowAtts(
                e.rendNodeTriangleEnd,
                i,
                u,
                e.visProp.strokewidth
              );
      }
      (e.visPropOld.strokecolor = r), (e.visPropOld.strokeopacity = o);
    },
    setObjectStrokeWidth: function (e, t) {
      var n = JXG.evaluate(t),
        r;
      if (e.visPropOld.strokewidth === n) return;
      (r = e.rendNode), this.setPropertyPrim(r, "stroked", "true");
      if (JXG.exists(n)) {
        this.setPropertyPrim(r, "stroke-width", n + "px");
        if (e.type === JXG.OBJECT_TYPE_ARROW)
          this._setArrowAtts(
            e.rendNodeTriangle,
            e.visProp.strokecolor,
            e.visProp.strokeopacity,
            n
          );
        else if (
          e.elementClass === JXG.OBJECT_CLASS_CURVE ||
          e.elementClass === JXG.OBJECT_CLASS_LINE
        )
          e.visProp.firstarrow &&
            this._setArrowAtts(
              e.rendNodeTriangleStart,
              e.visProp.strokecolor,
              e.visProp.strokeopacity,
              n
            ),
            e.visProp.lastarrow &&
              this._setArrowAtts(
                e.rendNodeTriangleEnd,
                e.visProp.strokecolor,
                e.visProp.strokeopacity,
                n
              );
      }
      e.visPropOld.strokewidth = n;
    },
    setShadow: function (e) {
      if (e.visPropOld.shadow === e.visProp.shadow) return;
      JXG.exists(e.rendNode) &&
        (e.visProp.shadow
          ? e.rendNode.setAttributeNS(
              null,
              "filter",
              "url(#" + this.container.id + "_" + "f1)"
            )
          : e.rendNode.removeAttributeNS(null, "filter")),
        (e.visPropOld.shadow = e.visProp.shadow);
    },
    suspendRedraw: function () {},
    unsuspendRedraw: function () {},
    resize: function (e, t) {
      (this.svgRoot.style.width = parseFloat(e) + "px"),
        (this.svgRoot.style.height = parseFloat(t) + "px");
    },
  }),
  (JXG.VMLRenderer = function (e) {
    (this.type = "vml"),
      (this.container = e),
      (this.container.style.overflow = "hidden"),
      (this.container.onselectstart = function () {
        return !1;
      }),
      (this.resolution = 10),
      JXG.exists(JXG.vmlStylesheet) ||
        (e.ownerDocument.namespaces.add(
          "jxgvml",
          "urn:schemas-microsoft-com:vml"
        ),
        (JXG.vmlStylesheet = this.container.ownerDocument.createStyleSheet()),
        JXG.vmlStylesheet.addRule(".jxgvml", "behavior:url(#default#VML)"));
    try {
      !e.ownerDocument.namespaces.jxgvml &&
        e.ownerDocument.namespaces.add(
          "jxgvml",
          "urn:schemas-microsoft-com:vml"
        ),
        (this.createNode = function (t) {
          return e.ownerDocument.createElement(
            "<jxgvml:" + t + ' class="jxgvml">'
          );
        });
    } catch (t) {
      this.createNode = function (t) {
        return e.ownerDocument.createElement(
          "<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="jxgvml">'
        );
      };
    }
    this.dashArray = [
      "Solid",
      "1 1",
      "ShortDash",
      "Dash",
      "LongDash",
      "ShortDashDot",
      "LongDashDot",
    ];
  }),
  (JXG.VMLRenderer.prototype = new JXG.AbstractRenderer()),
  JXG.extend(JXG.VMLRenderer.prototype, {
    _setAttr: function (e, t, n, r) {
      try {
        document.documentMode === 8 ? (e[t] = n) : e.setAttribute(t, n, r);
      } catch (i) {
        JXG.debug("_setAttr: " + t + " " + n + "<br>\n");
      }
    },
    updateTicks: function (e, t, n, r, i) {
      var s = [],
        o,
        u,
        a,
        f,
        l = this.resolution;
      u = e.ticks.length;
      for (o = 0; o < u; o++)
        (a = e.ticks[o]),
          (x = a[0]),
          (y = a[1]),
          typeof x[0] != "undefined" &&
            typeof x[1] != "undefined" &&
            s.push(
              " m " +
                Math.round(l * x[0]) +
                ", " +
                Math.round(l * y[0]) +
                " l " +
                Math.round(l * x[1]) +
                ", " +
                Math.round(l * y[1]) +
                " "
            );
      for (o = 0; o < u; o++)
        (a = e.ticks[o].scrCoords),
          e.ticks[o].major &&
            (e.board.needsFullUpdate || e.needsRegularUpdate) &&
            e.labels[o] &&
            e.labels[o].visProp.visible &&
            this.updateText(e.labels[o]);
      JXG.exists(e) ||
        ((f = this.createPrim("path", e.id)),
        this.appendChildPrim(f, e.visProp.layer),
        this.appendNodesToElement(e, "path")),
        this._setAttr(e.rendNode, "stroked", "true"),
        this._setAttr(e.rendNode, "strokecolor", e.visProp.strokecolor, 1),
        this._setAttr(e.rendNode, "strokeweight", e.visProp.strokewidth),
        this._setAttr(
          e.rendNodeStroke,
          "opacity",
          e.visProp.strokeopacity * 100 + "%"
        ),
        this.updatePathPrim(e.rendNode, s, e.board);
    },
    displayCopyright: function (e, t) {
      var n, r;
      (n = this.createNode("textbox")),
        (n.style.position = "absolute"),
        this._setAttr(n, "id", this.container.id + "_" + "licenseText"),
        (n.style.left = 20),
        (n.style.top = 2),
        (n.style.fontSize = t),
        (n.style.color = "#356AA0"),
        (n.style.fontFamily = "Arial,Helvetica,sans-serif"),
        this._setAttr(n, "opacity", "30%"),
        (n.style.filter = "alpha(opacity = 30)"),
        (r = document.createTextNode(e)),
        n.appendChild(r),
        this.appendChildPrim(n, 0);
    },
    drawInternalText: function (e) {
      var t;
      return (
        (t = this.createNode("textbox")),
        (t.style.position = "absolute"),
        (e.rendNodeText = document.createTextNode("")),
        t.appendChild(e.rendNodeText),
        this.appendChildPrim(t, 9),
        t
      );
    },
    updateInternalText: function (e) {
      var t = e.plaintext;
      isNaN(e.coords.scrCoords[1] + e.coords.scrCoords[2]) ||
        (e.visProp.anchorx === "right"
          ? (e.rendNode.style.right =
              parseInt(e.board.canvasWidth - e.coords.scrCoords[1]) + "px")
          : e.visProp.anchorx === "middle"
          ? (e.rendNode.style.left =
              parseInt(e.coords.scrCoords[1] - 0.5 * e.size[0]) + "px")
          : (e.rendNode.style.left = parseInt(e.coords.scrCoords[1]) + "px"),
        (e.rendNode.style.top =
          parseInt(
            e.coords.scrCoords[2] - e.visProp.fontsize + this.vOffsetText
          ) + "px"),
        e.visProp.anchory === "top"
          ? (e.rendNode.style.top =
              parseInt(e.coords.scrCoords[2] + this.vOffsetText) + "px")
          : e.visProp.anchory === "middle"
          ? (e.rendNode.style.top =
              parseInt(
                e.coords.scrCoords[2] - 0.5 * e.size[1] + this.vOffsetText
              ) + "px")
          : (e.rendNode.style.top =
              parseInt(e.coords.scrCoords[2] - e.size[1] + this.vOffsetText) +
              "px")),
        e.htmlStr !== t && ((e.rendNodeText.data = t), (e.htmlStr = t)),
        this.transformImage(e, e.transformations);
    },
    drawImage: function (e) {
      var t;
      (t = this.container.ownerDocument.createElement("img")),
        (t.style.position = "absolute"),
        this._setAttr(t, "id", this.container.id + "_" + e.id),
        this.container.appendChild(t),
        this.appendChildPrim(t, e.visProp.layer),
        (t.style.filter =
          "progid:DXImageTransform.Microsoft.Matrix(M11='1.0', sizingMethod='auto expand')"),
        (e.rendNode = t),
        this.updateImage(e);
    },
    transformImage: function (e, t) {
      var n = e.rendNode,
        r,
        i = [],
        s,
        o = t.length,
        u,
        a,
        f,
        l,
        c,
        h;
      e.type === JXG.OBJECT_TYPE_TEXT && e.updateSize();
      if (o > 0) {
        (h = e.rendNode.style.filter.toString()),
          h.match(/DXImageTransform/) ||
            (n.style.filter =
              "progid:DXImageTransform.Microsoft.Matrix(M11='1.0', sizingMethod='auto expand') " +
              h),
          (r = this.joinTransforms(e, t)),
          (i[0] = JXG.Math.matVecMult(r, e.coords.scrCoords)),
          (i[0][1] /= i[0][0]),
          (i[0][2] /= i[0][0]),
          (i[1] = JXG.Math.matVecMult(r, [
            1,
            e.coords.scrCoords[1] + e.size[0],
            e.coords.scrCoords[2],
          ])),
          (i[1][1] /= i[1][0]),
          (i[1][2] /= i[1][0]),
          (i[2] = JXG.Math.matVecMult(r, [
            1,
            e.coords.scrCoords[1] + e.size[0],
            e.coords.scrCoords[2] - e.size[1],
          ])),
          (i[2][1] /= i[2][0]),
          (i[2][2] /= i[2][0]),
          (i[3] = JXG.Math.matVecMult(r, [
            1,
            e.coords.scrCoords[1],
            e.coords.scrCoords[2] - e.size[1],
          ])),
          (i[3][1] /= i[3][0]),
          (i[3][2] /= i[3][0]),
          (u = i[0][1]),
          (f = i[0][1]),
          (a = i[0][2]),
          (l = i[0][2]);
        for (c = 1; c < 4; c++)
          (u = Math.max(u, i[c][1])),
            (f = Math.min(f, i[c][1])),
            (a = Math.max(a, i[c][2])),
            (l = Math.min(l, i[c][2]));
        (n.style.left = parseInt(f) + "px"),
          (n.style.top = parseInt(l) + "px"),
          (n.filters.item(0).M11 = r[1][1]),
          (n.filters.item(0).M12 = r[1][2]),
          (n.filters.item(0).M21 = r[2][1]),
          (n.filters.item(0).M22 = r[2][2]);
      }
    },
    updateImageURL: function (e) {
      var t = JXG.evaluate(e.url);
      this._setAttr(e.rendNode, "src", t);
    },
    appendChildPrim: function (e, t) {
      JXG.exists(t) || (t = 0),
        (e.style.zIndex = t),
        this.container.appendChild(e);
    },
    appendNodesToElement: function (e, t) {
      if (t === "shape" || t === "path" || t === "polygon")
        e.rendNodePath = this.getElementById(e.id + "_path");
      (e.rendNodeFill = this.getElementById(e.id + "_fill")),
        (e.rendNodeStroke = this.getElementById(e.id + "_stroke")),
        (e.rendNodeShadow = this.getElementById(e.id + "_shadow")),
        (e.rendNode = this.getElementById(e.id));
    },
    createPrim: function (e, t) {
      var n,
        r = this.createNode("fill"),
        i = this.createNode("stroke"),
        s = this.createNode("shadow"),
        o;
      return (
        this._setAttr(r, "id", this.container.id + "_" + t + "_fill"),
        this._setAttr(i, "id", this.container.id + "_" + t + "_stroke"),
        this._setAttr(s, "id", this.container.id + "_" + t + "_shadow"),
        e === "circle" || e === "ellipse"
          ? ((n = this.createNode("oval")),
            n.appendChild(r),
            n.appendChild(i),
            n.appendChild(s))
          : e === "polygon" || e === "path" || e === "shape" || e === "line"
          ? ((n = this.createNode("shape")),
            n.appendChild(r),
            n.appendChild(i),
            n.appendChild(s),
            (o = this.createNode("path")),
            this._setAttr(o, "id", this.container.id + "_" + t + "_path"),
            n.appendChild(o))
          : ((n = this.createNode(e)),
            n.appendChild(r),
            n.appendChild(i),
            n.appendChild(s)),
        (n.style.position = "absolute"),
        (n.style.left = "0px"),
        (n.style.top = "0px"),
        this._setAttr(n, "id", this.container.id + "_" + t),
        n
      );
    },
    remove: function (e) {
      JXG.exists(e) && e.removeNode(!0);
    },
    makeArrows: function (e) {
      var t;
      if (
        e.visPropOld.firstarrow === e.visProp.firstarrow &&
        e.visPropOld.lastarrow === e.visProp.lastarrow
      )
        return;
      e.visProp.firstarrow
        ? ((t = e.rendNodeStroke),
          this._setAttr(t, "startarrow", "block"),
          this._setAttr(t, "startarrowlength", "long"))
        : ((t = e.rendNodeStroke),
          JXG.exists(t) && this._setAttr(t, "startarrow", "none")),
        e.visProp.lastarrow
          ? ((t = e.rendNodeStroke),
            this._setAttr(t, "id", this.container.id + "_" + e.id + "stroke"),
            this._setAttr(t, "endarrow", "block"),
            this._setAttr(t, "endarrowlength", "long"))
          : ((t = e.rendNodeStroke),
            JXG.exists(t) && this._setAttr(t, "endarrow", "none")),
        (e.visPropOld.firstarrow = e.visProp.firstarrow),
        (e.visPropOld.lastarrow = e.visProp.lastarrow);
    },
    updateEllipsePrim: function (e, t, n, r, i) {
      (e.style.left = parseInt(t - r) + "px"),
        (e.style.top = parseInt(n - i) + "px"),
        (e.style.width = parseInt(Math.abs(r) * 2) + "px"),
        (e.style.height = parseInt(Math.abs(i) * 2) + "px");
    },
    updateLinePrim: function (e, t, n, r, i, s) {
      var o,
        u = this.resolution;
      isNaN(t + n + r + i) ||
        ((o = [
          "m ",
          parseInt(u * t),
          ", ",
          parseInt(u * n),
          " l ",
          parseInt(u * r),
          ", ",
          parseInt(u * i),
        ]),
        this.updatePathPrim(e, o, s));
    },
    updatePathPrim: function (e, t, n) {
      var r = n.canvasWidth,
        i = n.canvasHeight;
      t.length <= 0 && (t = ["m 0,0"]),
        (e.style.width = r),
        (e.style.height = i),
        this._setAttr(
          e,
          "coordsize",
          [parseInt(this.resolution * r), parseInt(this.resolution * i)].join(
            ","
          )
        ),
        this._setAttr(e, "path", t.join(""));
    },
    updatePathStringPoint: function (e, t, n) {
      var r = [],
        i = Math.round,
        s = e.coords.scrCoords,
        o = t * Math.sqrt(3) * 0.5,
        u = t * 0.5,
        a = this.resolution;
      return (
        n === "x"
          ? r.push(
              [
                " m ",
                i(a * (s[1] - t)),
                ", ",
                i(a * (s[2] - t)),
                " l ",
                i(a * (s[1] + t)),
                ", ",
                i(a * (s[2] + t)),
                " m ",
                i(a * (s[1] + t)),
                ", ",
                i(a * (s[2] - t)),
                " l ",
                i(a * (s[1] - t)),
                ", ",
                i(a * (s[2] + t)),
              ].join("")
            )
          : n === "+"
          ? r.push(
              [
                " m ",
                i(a * (s[1] - t)),
                ", ",
                i(a * s[2]),
                " l ",
                i(a * (s[1] + t)),
                ", ",
                i(a * s[2]),
                " m ",
                i(a * s[1]),
                ", ",
                i(a * (s[2] - t)),
                " l ",
                i(a * s[1]),
                ", ",
                i(a * (s[2] + t)),
              ].join("")
            )
          : n === "<>"
          ? r.push(
              [
                " m ",
                i(a * (s[1] - t)),
                ", ",
                i(a * s[2]),
                " l ",
                i(a * s[1]),
                ", ",
                i(a * (s[2] + t)),
                " l ",
                i(a * (s[1] + t)),
                ", ",
                i(a * s[2]),
                " l ",
                i(a * s[1]),
                ", ",
                i(a * (s[2] - t)),
                " x e ",
              ].join("")
            )
          : n === "^"
          ? r.push(
              [
                " m ",
                i(a * s[1]),
                ", ",
                i(a * (s[2] - t)),
                " l ",
                i(a * (s[1] - o)),
                ", ",
                i(a * (s[2] + u)),
                " l ",
                i(a * (s[1] + o)),
                ", ",
                i(a * (s[2] + u)),
                " x e ",
              ].join("")
            )
          : n === "v"
          ? r.push(
              [
                " m ",
                i(a * s[1]),
                ", ",
                i(a * (s[2] + t)),
                " l ",
                i(a * (s[1] - o)),
                ", ",
                i(a * (s[2] - u)),
                " l ",
                i(a * (s[1] + o)),
                ", ",
                i(a * (s[2] - u)),
                " x e ",
              ].join("")
            )
          : n === ">"
          ? r.push(
              [
                " m ",
                i(a * (s[1] + t)),
                ", ",
                i(a * s[2]),
                " l ",
                i(a * (s[1] - u)),
                ", ",
                i(a * (s[2] - o)),
                " l ",
                i(a * (s[1] - u)),
                ", ",
                i(a * (s[2] + o)),
                " l ",
                i(a * (s[1] + t)),
                ", ",
                i(a * s[2]),
              ].join("")
            )
          : n === "<" &&
            r.push(
              [
                " m ",
                i(a * (s[1] - t)),
                ", ",
                i(a * s[2]),
                " l ",
                i(a * (s[1] + u)),
                ", ",
                i(a * (s[2] - o)),
                " l ",
                i(a * (s[1] + u)),
                ", ",
                i(a * (s[2] + o)),
                " x e ",
              ].join("")
            ),
        r
      );
    },
    updatePathStringPrim: function (e) {
      var t = [],
        n,
        r,
        i = this.resolution,
        s = Math.round,
        o = " m ",
        u = " l ",
        a = " c ",
        f = o,
        l = e.visProp.curvetype !== "plot",
        c = Math.min(e.numberPoints, 8192);
      if (e.numberPoints <= 0) return "";
      c = Math.min(c, e.points.length);
      if (e.bezierDegree == 1) {
        l &&
          e.board.options.curve.RDPsmoothing &&
          (e.points = JXG.Math.Numerics.RamerDouglasPeuker(e.points, 1));
        for (n = 0; n < c; n++)
          (r = e.points[n].scrCoords),
            isNaN(r[1]) || isNaN(r[2])
              ? (f = o)
              : (r[1] > 2e4 ? (r[1] = 2e4) : r[1] < -2e4 && (r[1] = -2e4),
                r[2] > 2e4 ? (r[2] = 2e4) : r[2] < -2e4 && (r[2] = -2e4),
                t.push([f, s(i * r[1]), ", ", s(i * r[2])].join("")),
                (f = u));
      } else if (e.bezierDegree == 3) {
        n = 0;
        while (n < c)
          (r = e.points[n].scrCoords),
            isNaN(r[1]) || isNaN(r[2])
              ? (f = o)
              : (t.push([f, s(i * r[1]), ", ", s(i * r[2])].join("")),
                f == a &&
                  (n++,
                  (r = e.points[n].scrCoords),
                  t.push([" ", s(i * r[1]), ", ", s(i * r[2])].join("")),
                  n++,
                  (r = e.points[n].scrCoords),
                  t.push([" ", s(i * r[1]), ", ", s(i * r[2])].join(""))),
                (f = a)),
            n++;
      }
      return t.push(" e"), t;
    },
    updatePathStringBezierPrim: function (e) {
      var t = [],
        n,
        r,
        i,
        s,
        o,
        u = e.visProp.strokewidth,
        a = this.resolution,
        f = Math.round,
        l = " m ",
        c = " c ",
        h = l,
        p = e.visProp.curvetype !== "plot",
        d = Math.min(e.numberPoints, 8192);
      if (e.numberPoints <= 0) return "";
      p &&
        e.board.options.curve.RDPsmoothing &&
        (e.points = JXG.Math.Numerics.RamerDouglasPeuker(e.points, 1)),
        (d = Math.min(d, e.points.length));
      for (r = 1; r < 3; r++) {
        h = l;
        for (n = 0; n < d; n++)
          (i = e.points[n].scrCoords),
            isNaN(i[1]) || isNaN(i[2])
              ? (h = l)
              : (i[1] > 2e4 ? (i[1] = 2e4) : i[1] < -2e4 && (i[1] = -2e4),
                i[2] > 2e4 ? (i[2] = 2e4) : i[2] < -2e4 && (i[2] = -2e4),
                h == l
                  ? t.push(
                      [
                        h,
                        f(a * (i[1] + 0 * u * (2 * r * Math.random() - r))),
                        " ",
                        f(a * (i[2] + 0 * u * (2 * r * Math.random() - r))),
                      ].join("")
                    )
                  : t.push(
                      [
                        h,
                        f(
                          a *
                            (s +
                              (i[1] - s) * 0.333 +
                              u * (2 * r * Math.random() - r))
                        ),
                        " ",
                        f(
                          a *
                            (o +
                              (i[2] - o) * 0.333 +
                              u * (2 * r * Math.random() - r))
                        ),
                        " ",
                        f(
                          a *
                            (s +
                              2 * (i[1] - s) * 0.333 +
                              u * (2 * r * Math.random() - r))
                        ),
                        " ",
                        f(
                          a *
                            (o +
                              2 * (i[2] - o) * 0.333 +
                              u * (2 * r * Math.random() - r))
                        ),
                        " ",
                        f(a * i[1]),
                        " ",
                        f(a * i[2]),
                      ].join("")
                    ),
                (h = c),
                (s = i[1]),
                (o = i[2]));
      }
      return t.push(" e"), t;
    },
    updatePolygonPrim: function (e, t) {
      var n,
        r = t.vertices.length,
        i = this.resolution,
        s,
        o = [];
      this._setAttr(e, "stroked", "false"),
        (s = t.vertices[0].coords.scrCoords);
      if (isNaN(s[1] + s[2])) return;
      o.push(
        ["m ", parseInt(i * s[1]), ",", parseInt(i * s[2]), " l "].join("")
      );
      for (n = 1; n < r - 1; n++) {
        if (!t.vertices[n].isReal) {
          this.updatePathPrim(e, "", t.board);
          return;
        }
        s = t.vertices[n].coords.scrCoords;
        if (isNaN(s[1] + s[2])) return;
        o.push(parseInt(i * s[1]) + "," + parseInt(i * s[2])),
          n < r - 2 && o.push(", ");
      }
      o.push(" x e"), this.updatePathPrim(e, o, t.board);
    },
    updateRectPrim: function (e, t, n, r, i) {
      (e.style.left = parseInt(t) + "px"),
        (e.style.top = parseInt(n) + "px"),
        r >= 0 && (e.style.width = r + "px"),
        i >= 0 && (e.style.height = i + "px");
    },
    setPropertyPrim: function (e, t, n) {
      var r = "",
        i;
      switch (t) {
        case "stroke":
          r = "strokecolor";
          break;
        case "stroke-width":
          r = "strokeweight";
          break;
        case "stroke-dasharray":
          r = "dashstyle";
      }
      r !== "" && ((i = JXG.evaluate(n)), this._setAttr(e, r, i));
    },
    show: function (e) {
      e && e.rendNode && (e.rendNode.style.visibility = "inherit");
    },
    hide: function (e) {
      e && e.rendNode && (e.rendNode.style.visibility = "hidden");
    },
    setDashStyle: function (e, t) {
      var n;
      t.dash >= 0 &&
        ((n = e.rendNodeStroke),
        this._setAttr(n, "dashstyle", this.dashArray[t.dash]));
    },
    setGradient: function (e) {
      var t = e.rendNodeFill;
      e.visProp.gradient === "linear"
        ? (this._setAttr(t, "type", "gradient"),
          this._setAttr(t, "color2", e.visProp.gradientsecondcolor),
          this._setAttr(t, "opacity2", e.visProp.gradientsecondopacity),
          this._setAttr(t, "angle", e.visProp.gradientangle))
        : e.visProp.gradient === "radial"
        ? (this._setAttr(t, "type", "gradientradial"),
          this._setAttr(t, "color2", e.visProp.gradientsecondcolor),
          this._setAttr(t, "opacity2", e.visProp.gradientsecondopacity),
          this._setAttr(
            t,
            "focusposition",
            e.visProp.gradientpositionx * 100 +
              "%," +
              e.visProp.gradientpositiony * 100 +
              "%"
          ),
          this._setAttr(t, "focussize", "0,0"))
        : this._setAttr(t, "type", "solid");
    },
    setObjectFillColor: function (e, t, n) {
      var r = JXG.evaluate(t),
        i,
        s,
        o = JXG.evaluate(n),
        u,
        a = e.rendNode,
        f;
      o = o > 0 ? o : 0;
      if (e.visPropOld.fillcolor === r && e.visPropOld.fillopacity === o)
        return;
      JXG.exists(r) &&
        r !== !1 &&
        (r.length != 9
          ? ((i = r), (u = o))
          : ((s = JXG.rgba2rgbo(r)), (i = s[0]), (u = o * s[1])),
        i === "none" || i === !1
          ? this._setAttr(e.rendNode, "filled", "false")
          : (this._setAttr(e.rendNode, "filled", "true"),
            this._setAttr(e.rendNode, "fillcolor", i),
            JXG.exists(u) &&
              e.rendNodeFill &&
              this._setAttr(e.rendNodeFill, "opacity", u * 100 + "%")),
        e.type === JXG.OBJECT_TYPE_IMAGE &&
          ((f = e.rendNode.style.filter.toString()),
          f.match(/alpha/)
            ? (e.rendNode.style.filter = f.replace(
                /alpha\(opacity *= *[0-9\.]+\)/,
                "alpha(opacity = " + u * 100 + ")"
              ))
            : (e.rendNode.style.filter +=
                " alpha(opacity = " + u * 100 + ")"))),
        (e.visPropOld.fillcolor = r),
        (e.visPropOld.fillopacity = o);
    },
    setObjectStrokeColor: function (e, t, n) {
      var r = JXG.evaluate(t),
        i,
        s,
        o = JXG.evaluate(n),
        u,
        a = e.rendNode,
        f;
      o = o > 0 ? o : 0;
      if (e.visPropOld.strokecolor === r && e.visPropOld.strokeopacity === o)
        return;
      JXG.exists(r) &&
        r !== !1 &&
        (r.length != 9
          ? ((i = r), (u = o))
          : ((s = JXG.rgba2rgbo(r)), (i = s[0]), (u = o * s[1])),
        e.type === JXG.OBJECT_TYPE_TEXT
          ? ((u = Math.round(u * 100)),
            (a.style.filter = " alpha(opacity = " + u + ")"),
            (a.style.color = i))
          : (i !== !1 &&
              (this._setAttr(a, "stroked", "true"),
              this._setAttr(a, "strokecolor", i)),
            (f = e.rendNodeStroke),
            JXG.exists(u) &&
              e.type !== JXG.OBJECT_TYPE_IMAGE &&
              this._setAttr(f, "opacity", u * 100 + "%"))),
        (e.visPropOld.strokecolor = r),
        (e.visPropOld.strokeopacity = o);
    },
    setObjectStrokeWidth: function (e, t) {
      var n = JXG.evaluate(t),
        r;
      if (e.visPropOld.strokewidth === n) return;
      (r = e.rendNode),
        this.setPropertyPrim(r, "stroked", "true"),
        JXG.exists(n) && this.setPropertyPrim(r, "stroke-width", n),
        (e.visPropOld.strokewidth = n);
    },
    setShadow: function (e) {
      var t = e.rendNodeShadow;
      if (!t || e.visPropOld.shadow === e.visProp.shadow) return;
      e.visProp.shadow
        ? (this._setAttr(t, "On", "True"),
          this._setAttr(t, "Offset", "3pt,3pt"),
          this._setAttr(t, "Opacity", "60%"),
          this._setAttr(t, "Color", "#aaaaaa"))
        : this._setAttr(t, "On", "False"),
        (e.visPropOld.shadow = e.visProp.shadow);
    },
    suspendRedraw: function () {
      this.container.style.display = "none";
    },
    unsuspendRedraw: function () {
      this.container.style.display = "";
    },
  }),
  (JXG.CanvasRenderer = function (e) {
    var t;
    (this.type = "canvas"),
      (this.canvasRoot = null),
      (this.suspendHandle = null),
      (this.canvasId = JXG.Util.genUUID()),
      (this.canvasNamespace = null),
      typeof document != "undefined"
        ? ((this.container = e),
          (this.container.style.MozUserSelect = "none"),
          (this.container.style.overflow = "hidden"),
          this.container.style.position === "" &&
            (this.container.style.position = "relative"),
          (this.container.innerHTML = [
            '<canvas id="',
            this.canvasId,
            '" width="',
            JXG.getStyle(this.container, "width"),
            '" height="',
            JXG.getStyle(this.container, "height"),
            '"><',
            "/canvas>",
          ].join("")),
          (this.canvasRoot = document.getElementById(this.canvasId)),
          (this.context = this.canvasRoot.getContext("2d")))
        : JXG.isNode() &&
          ((this.canvasId = require("canvas")),
          (this.canvasRoot = new this.canvasId(500, 500)),
          (this.context = this.canvasRoot.getContext("2d"))),
      (this.dashArray = [
        [2, 2],
        [5, 5],
        [10, 10],
        [20, 20],
        [20, 10, 10, 10],
        [20, 5, 10, 5],
      ]);
  }),
  (JXG.CanvasRenderer.prototype = new JXG.AbstractRenderer()),
  JXG.extend(JXG.CanvasRenderer.prototype, {
    _drawFilledPolygon: function (e) {
      var t,
        n = e.length,
        r = this.context;
      if (n > 0) {
        r.beginPath(), r.moveTo(e[0][0], e[0][1]);
        for (t = 0; t < n; t++) t > 0 && r.lineTo(e[t][0], e[t][1]);
        r.lineTo(e[0][0], e[0][1]), r.fill();
      }
    },
    _fill: function (e) {
      var t = this.context;
      t.save(), this._setColor(e, "fill") && t.fill(), t.restore();
    },
    _rotatePoint: function (e, t, n) {
      return [
        t * Math.cos(e) - n * Math.sin(e),
        t * Math.sin(e) + n * Math.cos(e),
      ];
    },
    _rotateShape: function (e, t) {
      var n,
        r = [],
        i = e.length;
      if (i <= 0) return e;
      for (n = 0; n < i; n++) r.push(this._rotatePoint(t, e[n][0], e[n][1]));
      return r;
    },
    _setColor: function (e, t, n) {
      var r = !0,
        i = !1,
        s = e.visProp,
        o,
        u,
        a,
        f,
        l,
        c;
      (t = t || "stroke"), (n = n || t);
      if (!JXG.exists(e.board) || !JXG.exists(e.board.highlightedObjects))
        i = !0;
      return (
        !i && JXG.exists(e.board.highlightedObjects[e.id])
          ? (o = "highlight")
          : (o = ""),
        (u = JXG.evaluate(s[o + t + "color"])),
        u !== "none" && u !== !1
          ? ((l = JXG.evaluate(s[o + t + "opacity"])),
            (l = l > 0 ? l : 0),
            u.length != 9
              ? ((f = u), (c = l))
              : ((a = JXG.rgba2rgbo(u)), (f = a[0]), (c = l * a[1])),
            (this.context.globalAlpha = c),
            (this.context[n + "Style"] = f))
          : (r = !1),
        t === "stroke" && (this.context.lineWidth = parseFloat(s.strokewidth)),
        r
      );
    },
    _stroke: function (e) {
      var t = this.context;
      t.save(),
        e.visProp.dash > 0
          ? t.setLineDash && t.setLineDash(this.dashArray[e.visProp.dash])
          : (this.context.lineDashArray = []),
        this._setColor(e, "stroke") && t.stroke(),
        t.restore();
    },
    _translateShape: function (e, t, n) {
      var r,
        i = [],
        s = e.length;
      if (s <= 0) return e;
      for (r = 0; r < s; r++) i.push([e[r][0] + t, e[r][1] + n]);
      return i;
    },
    drawPoint: function (e) {
      var t = e.visProp.face,
        n = e.visProp.size,
        r = e.coords.scrCoords,
        i = n * Math.sqrt(3) * 0.5,
        s = n * 0.5,
        o = parseFloat(e.visProp.strokewidth) / 2,
        u = this.context;
      switch (t) {
        case "cross":
        case "x":
          u.beginPath(),
            u.moveTo(r[1] - n, r[2] - n),
            u.lineTo(r[1] + n, r[2] + n),
            u.moveTo(r[1] + n, r[2] - n),
            u.lineTo(r[1] - n, r[2] + n),
            u.closePath(),
            this._stroke(e);
          break;
        case "circle":
        case "o":
          u.beginPath(),
            u.arc(r[1], r[2], n + 1 + o, 0, 2 * Math.PI, !1),
            u.closePath(),
            this._fill(e),
            this._stroke(e);
          break;
        case "square":
        case "[]":
          if (n <= 0) break;
          u.save(),
            this._setColor(e, "stroke", "fill") &&
              u.fillRect(
                r[1] - n - o,
                r[2] - n - o,
                n * 2 + 3 * o,
                n * 2 + 3 * o
              ),
            u.restore(),
            u.save(),
            this._setColor(e, "fill"),
            u.fillRect(r[1] - n + o, r[2] - n + o, n * 2 - o, n * 2 - o),
            u.restore();
          break;
        case "plus":
        case "+":
          u.beginPath(),
            u.moveTo(r[1] - n, r[2]),
            u.lineTo(r[1] + n, r[2]),
            u.moveTo(r[1], r[2] - n),
            u.lineTo(r[1], r[2] + n),
            u.closePath(),
            this._stroke(e);
          break;
        case "diamond":
        case "<>":
          u.beginPath(),
            u.moveTo(r[1] - n, r[2]),
            u.lineTo(r[1], r[2] + n),
            u.lineTo(r[1] + n, r[2]),
            u.lineTo(r[1], r[2] - n),
            u.closePath(),
            this._fill(e),
            this._stroke(e);
          break;
        case "triangleup":
        case "a":
        case "^":
          u.beginPath(),
            u.moveTo(r[1], r[2] - n),
            u.lineTo(r[1] - i, r[2] + s),
            u.lineTo(r[1] + i, r[2] + s),
            u.closePath(),
            this._fill(e),
            this._stroke(e);
          break;
        case "triangledown":
        case "v":
          u.beginPath(),
            u.moveTo(r[1], r[2] + n),
            u.lineTo(r[1] - i, r[2] - s),
            u.lineTo(r[1] + i, r[2] - s),
            u.closePath(),
            this._fill(e),
            this._stroke(e);
          break;
        case "triangleleft":
        case "<":
          u.beginPath(),
            u.moveTo(r[1] - n, r[2]),
            u.lineTo(r[1] + s, r[2] - i),
            u.lineTo(r[1] + s, r[2] + i),
            u.closePath(),
            this.fill(e),
            this._stroke(e);
          break;
        case "triangleright":
        case ">":
          u.beginPath(),
            u.moveTo(r[1] + n, r[2]),
            u.lineTo(r[1] - s, r[2] - i),
            u.lineTo(r[1] - s, r[2] + i),
            u.closePath(),
            this._fill(e),
            this._stroke(e);
      }
    },
    updatePoint: function (e) {
      this.drawPoint(e);
    },
    drawLine: function (e) {
      var t = new JXG.Coords(
          JXG.COORDS_BY_USER,
          e.point1.coords.usrCoords,
          e.board
        ),
        n = new JXG.Coords(
          JXG.COORDS_BY_USER,
          e.point2.coords.usrCoords,
          e.board
        );
      JXG.Math.Geometry.calcStraight(e, t, n),
        this.context.beginPath(),
        this.context.moveTo(t.scrCoords[1], t.scrCoords[2]),
        this.context.lineTo(n.scrCoords[1], n.scrCoords[2]),
        this._stroke(e),
        this.makeArrows(e, t, n);
    },
    updateLine: function (e) {
      this.drawLine(e);
    },
    drawTicks: function () {},
    updateTicks: function (e, t, n, r, i) {
      var s,
        o,
        u = e.ticks.length,
        a = this.context;
      a.beginPath();
      for (s = 0; s < u; s++)
        (o = e.ticks[s]),
          (x = o[0]),
          (y = o[1]),
          a.moveTo(x[0], y[0]),
          a.lineTo(x[1], y[1]);
      for (s = 0; s < u; s++)
        (o = e.ticks[s].scrCoords),
          e.ticks[s].major &&
            (e.board.needsFullUpdate || e.needsRegularUpdate) &&
            e.labels[s] &&
            e.labels[s].visProp.visible &&
            this.updateText(e.labels[s]);
      this._stroke(e);
    },
    drawCurve: function (e) {
      e.visProp.handdrawing
        ? this.updatePathStringBezierPrim(e)
        : this.updatePathStringPrim(e);
    },
    updateCurve: function (e) {
      this.drawCurve(e);
    },
    drawEllipse: function (e) {
      var t = e.center.coords.scrCoords[1],
        n = e.center.coords.scrCoords[2],
        r = e.board.unitX,
        i = e.board.unitY,
        s = 2 * e.Radius(),
        o = 2 * e.Radius(),
        u = s * r,
        a = o * i,
        f = t - u / 2,
        l = n - a / 2,
        c = (u / 2) * 0.5522848,
        h = (a / 2) * 0.5522848,
        p = f + u,
        d = l + a,
        v = f + u / 2,
        m = l + a / 2,
        g = this.context;
      s > 0 &&
        o > 0 &&
        !isNaN(t + n) &&
        (g.beginPath(),
        g.moveTo(f, m),
        g.bezierCurveTo(f, m - h, v - c, l, v, l),
        g.bezierCurveTo(v + c, l, p, m - h, p, m),
        g.bezierCurveTo(p, m + h, v + c, d, v, d),
        g.bezierCurveTo(v - c, d, f, m + h, f, m),
        g.closePath(),
        this._fill(e),
        this._stroke(e));
    },
    updateEllipse: function (e) {
      return this.drawEllipse(e);
    },
    displayCopyright: function (e, t) {
      var n = this.context;
      n.save(),
        (n.font = t + "px Arial"),
        (n.fillStyle = "#aaa"),
        (n.lineWidth = 0.5),
        n.fillText(e, 10, 2 + t),
        n.restore();
    },
    drawInternalText: function (e) {
      var t,
        n = this.context;
      return (
        n.save(),
        this._setColor(e, "stroke", "fill") &&
          !isNaN(e.coords.scrCoords[1] + e.coords.scrCoords[2]) &&
          (e.visProp.fontsize &&
            (typeof e.visProp.fontsize == "function"
              ? ((t = e.visProp.fontsize()),
                (n.font = (t > 0 ? t : 0) + "px Arial"))
              : (n.font = e.visProp.fontsize + "px Arial")),
          this.transformImage(e, e.transformations),
          e.visProp.anchorx === "right"
            ? (n.textAlign = "right")
            : e.visProp.anchorx === "middle" && (n.textAlign = "center"),
          e.visProp.anchory === "top"
            ? (n.textBaseline = "top")
            : e.visProp.anchory === "middle" && (n.textBaseline = "middle"),
          n.fillText(
            e.plaintext,
            e.coords.scrCoords[1],
            e.coords.scrCoords[2]
          )),
        n.restore(),
        null
      );
    },
    updateInternalText: function (e) {
      this.drawInternalText(e);
    },
    setObjectStrokeColor: function (e, t, n) {
      var r = JXG.evaluate(t),
        i,
        s,
        o = JXG.evaluate(n),
        u,
        a;
      o = o > 0 ? o : 0;
      if (e.visPropOld.strokecolor === r && e.visPropOld.strokeopacity === o)
        return;
      JXG.exists(r) &&
        r !== !1 &&
        (r.length != 9
          ? ((i = r), (u = o))
          : ((s = JXG.rgba2rgbo(r)), (i = s[0]), (u = o * s[1])),
        (a = e.rendNode),
        e.type === JXG.OBJECT_TYPE_TEXT &&
          e.visProp.display === "html" &&
          ((a.style.color = i), (a.style.opacity = u))),
        (e.visPropOld.strokecolor = r),
        (e.visPropOld.strokeopacity = o);
    },
    drawImage: function (e) {
      (e.rendNode = new Image()), (e._src = ""), this.updateImage(e);
    },
    updateImage: function (e) {
      var t = this.context,
        n = JXG.evaluate(e.visProp.fillopacity),
        r = JXG.bind(function () {
          e.imgIsLoaded = !0;
          if (e.size[0] <= 0 || e.size[1] <= 0) return;
          t.save(),
            (t.globalAlpha = n),
            this.transformImage(e, e.transformations),
            t.drawImage(
              e.rendNode,
              e.coords.scrCoords[1],
              e.coords.scrCoords[2] - e.size[1],
              e.size[0],
              e.size[1]
            ),
            t.restore();
        }, this);
      this.updateImageURL(e) ? (e.rendNode.onload = r) : e.imgIsLoaded && r();
    },
    transformImage: function (e, t) {
      var n,
        r = t.length,
        i = this.context;
      r > 0 &&
        ((n = this.joinTransforms(e, t)),
        Math.abs(JXG.Math.Numerics.det(n)) >= JXG.Math.eps &&
          i.transform(n[1][1], n[2][1], n[1][2], n[2][2], n[1][0], n[2][0]));
    },
    updateImageURL: function (e) {
      var t;
      return (
        (t = JXG.evaluate(e.url)),
        e._src !== t
          ? ((e.imgIsLoaded = !1), (e.rendNode.src = t), (e._src = t), !0)
          : !1
      );
    },
    remove: function (e) {
      JXG.exists(e) && JXG.exists(e.parentNode) && e.parentNode.removeChild(e);
    },
    makeArrows: function (e, t, n) {
      var r = Math.min(e.visProp.strokewidth / 2, 3),
        i = [
          [2, 0],
          [-10, -4 * r],
          [-10, 4 * r],
          [2, 0],
        ],
        s = [
          [-2, 0],
          [10, -4 * r],
          [10, 4 * r],
        ],
        o,
        u,
        a,
        f,
        l,
        c = this.context;
      if (
        e.visProp.strokecolor !== "none" &&
        (e.visProp.lastarrow || e.visProp.firstarrow)
      ) {
        if (e.elementClass !== JXG.OBJECT_CLASS_LINE) return;
        (o = t.scrCoords[1]),
          (u = t.scrCoords[2]),
          (a = n.scrCoords[1]),
          (f = n.scrCoords[2]),
          c.save(),
          this._setColor(e, "stroke", "fill") &&
            ((l = Math.atan2(f - u, a - o)),
            e.visProp.lastarrow &&
              this._drawFilledPolygon(
                this._translateShape(this._rotateShape(i, l), a, f)
              ),
            e.visProp.firstarrow &&
              this._drawFilledPolygon(
                this._translateShape(this._rotateShape(s, l), o, u)
              )),
          c.restore();
      }
    },
    updatePathStringPrim: function (e) {
      var t = "M",
        n = "L",
        r = "C",
        i = t,
        s = 5e3,
        o,
        u,
        a,
        f,
        l = e.visProp.curvetype !== "plot",
        c,
        h = this.context;
      if (e.numberPoints <= 0) return;
      (c = Math.min(e.points.length, e.numberPoints)), h.beginPath();
      if (e.bezierDegree == 1) {
        l &&
          e.board.options.curve.RDPsmoothing &&
          (e.points = JXG.Math.Numerics.RamerDouglasPeuker(e.points, 0.5));
        for (o = 0; o < c; o++)
          (u = e.points[o].scrCoords),
            isNaN(u[1]) || isNaN(u[2])
              ? (i = t)
              : (u[1] > s ? (u[1] = s) : u[1] < -s && (u[1] = -s),
                u[2] > s ? (u[2] = s) : u[2] < -s && (u[2] = -s),
                i === t ? h.moveTo(u[1], u[2]) : h.lineTo(u[1], u[2]),
                (i = n));
      } else if (e.bezierDegree == 3) {
        o = 0;
        while (o < c)
          (u = e.points[o].scrCoords),
            isNaN(u[1]) || isNaN(u[2])
              ? (i = t)
              : (i === t
                  ? h.moveTo(u[1], u[2])
                  : (o++,
                    (a = e.points[o].scrCoords),
                    o++,
                    (f = e.points[o].scrCoords),
                    h.bezierCurveTo(u[1], u[2], a[1], a[2], f[1], f[2])),
                (i = r)),
            o++;
      }
      this._fill(e), this._stroke(e);
    },
    updatePathStringBezierPrim: function (e) {
      var t = "M",
        n = "C",
        r = t,
        i = 5e3,
        s,
        o,
        u,
        a,
        f,
        l = e.visProp.strokewidth,
        c = e.visProp.curvetype !== "plot",
        h,
        p = this.context;
      if (e.numberPoints <= 0) return;
      c &&
        e.board.options.curve.RDPsmoothing &&
        (e.points = JXG.Math.Numerics.RamerDouglasPeuker(e.points, 0.5)),
        (h = Math.min(e.points.length, e.numberPoints)),
        p.beginPath();
      for (o = 1; o < 3; o++) {
        r = t;
        for (s = 0; s < h; s++)
          (u = e.points[s].scrCoords),
            isNaN(u[1]) || isNaN(u[2])
              ? (r = t)
              : (u[1] > i ? (u[1] = i) : u[1] < -i && (u[1] = -i),
                u[2] > i ? (u[2] = i) : u[2] < -i && (u[2] = -i),
                r == t
                  ? p.moveTo(
                      u[1] + 0 * l * (2 * o * Math.random() - o),
                      u[2] + 0 * l * (2 * o * Math.random() - o)
                    )
                  : p.bezierCurveTo(
                      a + (u[1] - a) * 0.333 + l * (2 * o * Math.random() - o),
                      f + (u[2] - f) * 0.333 + l * (2 * o * Math.random() - o),
                      a +
                        2 * (u[1] - a) * 0.333 +
                        l * (2 * o * Math.random() - o),
                      f +
                        2 * (u[2] - f) * 0.333 +
                        l * (2 * o * Math.random() - o),
                      u[1],
                      u[2]
                    ),
                (r = n),
                (a = u[1]),
                (f = u[2]));
      }
      this._fill(e), this._stroke(e);
    },
    updatePolygonPrim: function (e, t) {
      var n,
        r,
        i = t.vertices.length,
        s = this.context,
        o = !0;
      if (i <= 0) return;
      s.beginPath(), (r = 0);
      while (!t.vertices[r].isReal && r < i - 1) r++, (o = !1);
      (n = t.vertices[r].coords.scrCoords), s.moveTo(n[1], n[2]);
      for (r = r; r < i - 1; r++)
        t.vertices[r].isReal || (o = !1),
          (n = t.vertices[r].coords.scrCoords),
          s.lineTo(n[1], n[2]);
      s.closePath(), o && this._fill(t);
    },
    show: function (e) {
      JXG.exists(e.rendNode) && (e.rendNode.style.visibility = "inherit");
    },
    hide: function (e) {
      JXG.exists(e.rendNode) && (e.rendNode.style.visibility = "hidden");
    },
    setGradient: function (e) {
      var t, n;
      (n = JXG.evaluate(e.visProp.fillopacity)),
        (n = n > 0 ? n : 0),
        (t = JXG.evaluate(e.visProp.fillcolor));
    },
    setShadow: function (e) {
      if (e.visPropOld.shadow === e.visProp.shadow) return;
      e.visPropOld.shadow = e.visProp.shadow;
    },
    highlight: function (e) {
      return (
        e.type === JXG.OBJECT_TYPE_TEXT && e.visProp.display === "html"
          ? this.updateTextStyle(e, !0)
          : (e.board.prepareUpdate(),
            e.board.renderer.suspendRedraw(e.board),
            e.board.updateRenderer(),
            e.board.renderer.unsuspendRedraw()),
        this
      );
    },
    noHighlight: function (e) {
      return (
        e.type === JXG.OBJECT_TYPE_TEXT && e.visProp.display === "html"
          ? this.updateTextStyle(e, !1)
          : (e.board.prepareUpdate(),
            e.board.renderer.suspendRedraw(e.board),
            e.board.updateRenderer(),
            e.board.renderer.unsuspendRedraw()),
        this
      );
    },
    suspendRedraw: function (e) {
      this.context.save(),
        this.context.clearRect(
          0,
          0,
          this.canvasRoot.width,
          this.canvasRoot.height
        ),
        e &&
          e.showCopyright &&
          this.displayCopyright(JXG.JSXGraph.licenseText, 12);
    },
    unsuspendRedraw: function () {
      this.context.restore();
    },
    resize: function (e, t) {
      this.container
        ? ((this.canvasRoot.style.width = parseFloat(e) + "px"),
          (this.canvasRoot.style.height = parseFloat(t) + "px"),
          this.canvasRoot.setAttribute("width", parseFloat(e) + "px"),
          this.canvasRoot.setAttribute("height", parseFloat(t) + "px"))
        : ((this.canvasRoot.width = parseFloat(e)),
          (this.canvasRoot.height = parseFloat(t)));
    },
  });

/*
page: http://www.matematikvideo.se/
url: https://matematikvideo.se/wordpress/wp-content/plugins/wp-education/js/jsxgraphcore.js?ver=4.7.1
*/
