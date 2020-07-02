if (typeof tC == "undefined") {
  if (
    typeof document.domain == "undefined" ||
    typeof document.referrer == "undefined"
  ) {
    document = window.document;
  }
  (function (m, k) {
    var j,
      r,
      y = m.document,
      a = m.location,
      e = m.navigator,
      x = m.tC,
      v = m.$,
      H = Array.prototype.push,
      b = Array.prototype.slice,
      u = Array.prototype.indexOf,
      g = Object.prototype.toString,
      i = Object.prototype.hasOwnProperty,
      o = String.prototype.trim,
      c = function (J, K) {
        return new c.fn.init(J, K, j);
      },
      B = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
      q = /\S/,
      t = /\s+/,
      d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
      l = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      D = /^[\],:{}\s]*$/,
      z = /(?:^|:|,)(?:\s*\[)+/g,
      G = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      E = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
      I = /^-ms-/,
      p = /-([\da-z])/gi,
      F = function (J, K) {
        return (K + "").toUpperCase();
      },
      f = {};
    c.fn = c.prototype = {
      constructor: c,
      init: function (J, M, P) {
        var L, N, K, O;
        if (!J) {
          return this;
        }
        if (J.nodeType) {
          this.context = this[0] = J;
          this.length = 1;
          return this;
        }
        if (typeof J === "string") {
          if (
            J.charAt(0) === "<" &&
            J.charAt(J.length - 1) === ">" &&
            J.length >= 3
          ) {
            L = [null, J, null];
          } else {
            L = w.exec(J);
          }
          if (L && (L[1] || !M)) {
            if (L[1]) {
              M = M instanceof c ? M[0] : M;
              O = M && M.nodeType ? M.ownerDocument || M : y;
              J = c.parseHTML(L[1], O, true);
              if (l.test(L[1]) && c.isPlainObject(M)) {
                this.attr.call(J, M, true);
              }
              return c.merge(this, J);
            } else {
              N = y.getElementById(L[2]);
              if (N && N.parentNode) {
                if (N.id !== L[2]) {
                  return P.find(J);
                }
                this.length = 1;
                this[0] = N;
              }
              this.context = y;
              this.selector = J;
              return this;
            }
          } else {
            if (!M || M.tC) {
              return (M || P).find(J);
            } else {
              return this.constructor(M).find(J);
            }
          }
        } else {
          if (c.isFunction(J)) {
            return P.ready(J);
          }
        }
        if (J.selector !== k) {
          this.selector = J.selector;
          this.context = J.context;
        }
        return c.makeArray(J, this);
      },
      each: function (K, J) {
        return c.each(this, K, J);
      },
      ready: function (J) {
        c.ready.promise(J);
        return this;
      },
    };
    c.fn.init.prototype = c.fn;
    c.extend = c.fn.extend = function () {
      var S,
        L,
        J,
        K,
        P,
        Q,
        O = arguments[0] || {},
        N = 1,
        M = arguments.length,
        R = false;
      if (typeof O === "boolean") {
        R = O;
        O = arguments[1] || {};
        N = 2;
      }
      if (typeof O !== "object" && !c.isFunction(O)) {
        O = {};
      }
      if (M === N) {
        O = this;
        --N;
      }
      for (; N < M; N++) {
        if ((S = arguments[N]) != null) {
          for (L in S) {
            J = O[L];
            K = S[L];
            if (O === K) {
              continue;
            }
            if (R && K && (c.isPlainObject(K) || (P = c.isArray(K)))) {
              if (P) {
                P = false;
                Q = J && c.isArray(J) ? J : [];
              } else {
                Q = J && c.isPlainObject(J) ? J : {};
              }
              O[L] = c.extend(R, Q, K);
            } else {
              if (K !== k) {
                O[L] = K;
              }
            }
          }
        }
      }
      return O;
    };
    c.extend({
      ssl:
        "https:" == y.location.protocol
          ? "https://manager."
          : "http://redirect1995.",
      randOrd: function () {
        return Math.round(Math.random()) - 0.5;
      },
      nodeNames:
        "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      rnocache: /<(?:script|object|embed|option|style)/i,
      rnoshimcache: new RegExp("<(?:" + c.nodeNames + ")[\\s/>]", "i"),
      rchecked: /checked\s*(?:[^=]|=\s*.checked.)/i,
      containersLaunched: {},
    });
    c.extend({
      inArray: function (N, K, M) {
        var J,
          L = Array.prototype.indexOf;
        if (K) {
          if (L) {
            return L.call(K, N, M);
          }
          J = K.length;
          M = M ? (M < 0 ? Math.max(0, J + M) : M) : 0;
          for (; M < J; M++) {
            if (M in K && K[M] === N) {
              return M;
            }
          }
        }
        return -1;
      },
      isFunction: function (J) {
        return c.type(J) === "function";
      },
      isArray:
        Array.isArray ||
        function (J) {
          return c.type(J) === "array";
        },
      isWindow: function (J) {
        return J != null && J == J.window;
      },
      isNumeric: function (J) {
        return !isNaN(parseFloat(J)) && isFinite(J);
      },
      type: function (J) {
        return J == null ? String(J) : f[g.call(J)] || "object";
      },
      each: function (O, P, L) {
        var K,
          M = 0,
          N = O.length,
          J = N === k || c.isFunction(O);
        if (L) {
          if (J) {
            for (K in O) {
              if (P.apply(O[K], L) === false) {
                break;
              }
            }
          } else {
            for (; M < N; ) {
              if (P.apply(O[M++], L) === false) {
                break;
              }
            }
          }
        } else {
          if (J) {
            for (K in O) {
              if (P.call(O[K], K, O[K]) === false) {
                break;
              }
            }
          } else {
            for (; M < N; ) {
              if (P.call(O[M], M, O[M++]) === false) {
                break;
              }
            }
          }
        }
        return O;
      },
      log: function (J, K) {
        try {
          if (c.getCookie("tCdebugLib") && console) {
            console[K ? K : "log"](J);
          }
        } catch (L) {}
      },
    });
    c.each(
      "Boolean Number String Function Array Date RegExp Object".split(" "),
      function (K, J) {
        f["[object " + J + "]"] = J.toLowerCase();
      }
    );
    j = c(y);
    var h = {};
    function C(K) {
      var J = (h[K] = {});
      c.each(K.split(t), function (M, L) {
        J[L] = true;
      });
      return J;
    }
    c.buildFragment = function (M, N, K) {
      var L,
        J,
        O,
        P = M[0];
      N = N || y;
      N = (!N.nodeType && N[0]) || N;
      N = N.ownerDocument || N;
      if (
        M.length === 1 &&
        typeof P === "string" &&
        P.length < 512 &&
        N === y &&
        P.charAt(0) === "<" &&
        !c.rnocache.test(P) &&
        (c.support.checkClone || !c.rchecked.test(P)) &&
        (c.support.html5Clone || !c.rnoshimcache.test(P))
      ) {
        J = true;
        L = jQuery.fragments[P];
        O = L !== k;
      }
      if (!L) {
        L = N.createDocumentFragment();
        c.clean(M, N, L, K);
        if (J) {
          c.fragments[P] = O && L;
        }
      }
      return { fragment: L, cacheable: J };
    };
    var s = a.hostname,
      n = s.split("."),
      A =
        "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$";
    if (n.length < 2 || s.match(A)) {
      c.maindomain = s;
    } else {
      c.maindomain = n[n.length - 2] + "." + n[n.length - 1];
    }
    m.tC = c;
  })(window);
}
tC.extend({
  internalvars: typeof tC.internalvars != "undefined" ? tC.internalvars : {},
  internalFunctions:
    typeof tC.internalFunctions != "undefined" ? tC.internalFunctions : {},
  privacyVersion: "",
  containerVersion: "94.03",
  id_container: "3",
  id_site: "1995",
  generatorVersion: "1.0.0",
  dedup_done: typeof tC.dedup_done != "undefined" ? tC.dedup_done : false,
});
tC.extend({
  launchTag: function (e, c, d, a, b) {
    tC.array_launched_tags.push(c);
    tC.array_launched_tags_keys.push(e);
    tC.containersLaunched[a][b].t.push({ id: e, label: c, idTpl: d });
    window.postMessage(
      'TC.EX:{"id":"' +
        e +
        '","idc":"' +
        b +
        '","idt":"' +
        d +
        '","ids":"' +
        a +
        '","lb":"' +
        c.replace(/"/g, '\\"') +
        '"}',
      "*"
    );
  },
});
if (tC.containersLaunched === undefined) {
  tC.containersLaunched = {};
}
if (tC.containersLaunched[1995] === undefined) {
  tC.containersLaunched[1995] = {};
}
tC.containersLaunched[1995][3] = { v: "94.03", t: [] };
tC.extend({
  domReady: false,
  isDOMReady: function () {
    if (document.readyState == "complete" || document.readyState == "loaded") {
      return true;
    }
    if (document.readyState != "interactive") {
      return false;
    }
    if (!document.documentElement.doScroll) {
      return true;
    }
    try {
      document.documentElement.doScroll("left");
      return true;
    } catch (a) {
      return false;
    }
  },
  waitingOnDomReadyCallBacks: tC.waitingOnDomReadyCallBacks || [],
  excuteOnDomReadyCallBacks: function () {
    for (var a = 0; a < tC.waitingOnDomReadyCallBacks.length; a++) {
      tC.waitingOnDomReadyCallBacks[a]();
    }
    tC.waitingOnDomReadyCallBacks = [];
  },
  onDomReady: function (b) {
    if (this.domReady) {
      b();
      return;
    }
    tC.waitingOnDomReadyCallBacks.push(b);
    var a = false;
    if (document.addEventListener) {
      a = true;
      document.addEventListener(
        "DOMContentLoaded",
        function () {
          document.removeEventListener(
            "DOMContentLoaded",
            arguments.callee,
            false
          );
          tC.excuteOnDomReadyCallBacks();
        },
        false
      );
    } else {
      if (document.attachEvent) {
        a = true;
        document.attachEvent("onreadystatechange", function () {
          if (document.readyState === "complete") {
            document.detachEvent("onreadystatechange", arguments.callee);
            tC.excuteOnDomReadyCallBacks();
          }
        });
        if (document.documentElement.doScroll && window == window.top) {
          (function () {
            if (tC.domReady) {
              return;
            }
            try {
              document.documentElement.doScroll("left");
            } catch (c) {
              setTimeout(arguments.callee, 0);
              return;
            }
            tC.excuteOnDomReadyCallBacks();
          })();
        }
      }
    }
    if (!a) {
      window.onload = tC.excuteOnDomReadyCallBacks;
    }
  },
});
if (tC.isDOMReady()) {
  tC.domReady = true;
} else {
  tC.onDomReady(function () {
    tC.domReady = true;
  });
}
tC.extend({
  isCurrentVersion: function () {
    var a = tC.getCookie("tc_mode_test"),
      b = "testModeIncludeReplaceThisByTrue";
    return a != "1" || (a == "1" && b == "true");
  },
});
tC.extend({
  pixelTrack: {
    add: function (a, b) {
      a = a || 0;
      b = b || "img";
      tC.onDomReady(function () {
        if (b == "iframe") {
          var c = document.createElement(b);
          c.src = a;
          c.width = 1;
          c.height = 1;
          c.style.display = "none";
          document.body.appendChild(c);
        } else {
          var c = new Image();
          c.src = a;
        }
      });
    },
  },
});
tC.extend({
  tc_hdoc: false,
  domain: function () {
    this.tc_hdoc = document;
    try {
      try {
        this.tc_hdoc = top.document;
      } catch (d) {
        this.tc_hdoc = document;
      }
      var a =
          typeof this.tc_hdoc.domain != "undefined"
            ? this.tc_hdoc.domain.toLowerCase().split(".")
            : false,
        g =
          "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$";
      if (a.length < 2 || this.tc_hdoc.domain.match(g)) {
        return "";
      } else {
        var f = a[a.length - 3],
          c = a[a.length - 2],
          b = a[a.length - 1];
        if (c == "co" || c == "com") {
          return "." + f + "." + c + "." + b;
        } else {
          return "." + c + "." + b;
        }
      }
    } catch (d) {
      tC.log(["tC.domain error : ", d], "warn");
    }
  },
});
tC.domain();
tC.extend({
  removeCookie: function (a) {
    this.setCookie(a, "", -1);
  },
  setCookie: function (c, e, a, h, d, g) {
    if (!d) {
      d = tC.domain();
    }
    var b = new Date();
    b.setTime(b.getTime());
    if (a) {
      a = a * 1000 * 60 * 60 * 24;
    }
    var f = new Date(b.getTime() + a);
    document.cookie =
      c +
      "=" +
      escape(e) +
      (a ? ";expires=" + f.toGMTString() : "") +
      (h ? ";path=" + h : ";path=/") +
      (d ? ";domain=" + d : "") +
      (g ? ";secure" : "");
  },
  getCookie: function (a) {
    return (result = new RegExp(
      "(?:^|; )" + encodeURIComponent(a) + "=([^;]*)"
    ).exec(document.cookie))
      ? unescape(result[1])
      : "";
  },
});
tC.extend({
  storage: {
    has: function () {
      try {
        if ("localStorage" in window && window.localStorage !== null) {
          window.localStorage.setItem("TC_CHECK", "1");
          window.localStorage.removeItem("TC_CHECK");
          return true;
        }
        return false;
      } catch (a) {
        return false;
      }
    },
    get: function (a) {
      return this.has() ? window.localStorage.getItem(a) : false;
    },
    set: function (b, a) {
      return this.has() ? window.localStorage.setItem(b, a) || true : false;
    },
    remove: function (a) {
      return this.has() ? window.localStorage.removeItem(a) || true : false;
    },
  },
});
tC.extend({
  hitCounter: function () {
    if (Math.floor(Math.random() * parseInt(510)) == 0) {
      tC.pixelTrack.add(
        "//manager.tagcommander.com/utils/hit.php?id=3&site=1995&version=94.03&frequency=510&position=" +
          tC.container_position +
          "&rand=" +
          Math.random()
      );
    }
  },
});
tC.container_position =
  typeof tc_container_position !== "undefined"
    ? tc_container_position
    : typeof tC.container_position !== "undefined"
    ? tC.container_position
    : 0;
tC.container_position++;
if (typeof tc_container_position !== "undefined") {
  tc_container_position++;
}
tC.hitCounter();
tC.extend({
  script: {
    add: function (d, f, c) {
      var a =
          document.getElementsByTagName("body")[0] ||
          document.getElementsByTagName("script")[0].parentNode,
        b = document.createElement("script");
      b.type = "text/javascript";
      b.async = true;
      b.src = d;
      b.charset = "utf-8";
      if (a) {
        if (f) {
          if (b.addEventListener) {
            b.addEventListener(
              "load",
              function () {
                f();
              },
              false
            );
          } else {
            b.onreadystatechange = function () {
              if (b.readyState in { loaded: 1, complete: 1 }) {
                b.onreadystatechange = null;
                f();
              }
            };
          }
        }
        if (c && typeof c == "number") {
          setTimeout(function () {
            if (a && b.parentNode) {
              a.removeChild(b);
            }
          }, c);
        }
        a.insertBefore(b, a.firstChild);
      } else {
        tC.log(
          "tC.script error : the element <script> or <body> is not found ! the file " +
            d +
            " is not implemented !",
          "warn"
        );
      }
    },
  },
});
tC.extend({
  _R: {
    cR: function (a) {
      tC.storage.set("tC_Sync", a);
      tC.pixelTrack.add("//engage.commander1.com/reach?tc_s=1995");
    },
    rR: function () {
      if (tC.storage.has()) {
        var a = new Date().getTime();
        var b = tC.storage.get("tC_Sync") || 0;
        b = parseInt(b);
        if (b == 0 || a - b > 604800000) {
          this.cR(a);
        }
      }
    },
  },
});
tC.onDomReady(function () {
  tC._R.rR();
});
tC.extend({
  crypt: function (d) {
    var e = "",
      a;
    for (var b = 0; b < d.length; b++) {
      var f = d.charCodeAt(b);
      if (f >= 32 && f <= 126) {
        a = f + 26;
        if (a > 126) {
          a = (a % 126) + 32 - 1;
        }
        e += String.fromCharCode(a);
      } else {
        e += d.charAt(b);
      }
    }
    return e;
  },
  uncrypt: function (c) {
    var d = "",
      a;
    for (var b = 0; b < c.length; b++) {
      if (c.charCodeAt(b) >= 32 && c.charCodeAt(b) <= 126) {
        if (c.charCodeAt(b) >= 32 + 26 && c.charCodeAt(b) <= 126) {
          a = c.charCodeAt(b) - 26;
        } else {
          a = c.charCodeAt(b) - 26 + (126 - 32) + 1;
        }
        d += String.fromCharCode(a);
      } else {
        d += c.charAt(b);
      }
    }
    return d;
  },
});
tC.extend({
  match: function (a, d, b) {
    try {
      return a.match(new RegExp(d, b));
    } catch (c) {
      tC.log(
        "the tC.match error ! message : " + c.message,
        "data : " + a,
        "p : " + d,
        "flag : " + b,
        "warn"
      );
    }
  },
});
tC.extend({
  getParamURL: function (p, b) {
    if (typeof p === "undefined") {
      return "";
    }
    p = p.toLowerCase();
    var n = new Array();
    if (!b) {
      var o = "";
      try {
        if (typeof top != "undefined" && typeof top.document != "undefined") {
          o = top.document;
        }
      } catch (h) {}
      if (o === "") {
        o = document;
      }
      b = typeof o.location != "undefined" ? o.location.href : "";
    }
    b = b.replace(/%23/g, "#");
    var m = 0;
    var d = b.indexOf("?");
    var c = b.indexOf("#");
    if (d != -1) {
      m = d;
    } else {
      if (c != -1) {
        m = c;
      }
    }
    var a = "";
    if (m != 0) {
      a = b
        .substring(m + 1, b.length)
        .split("#")
        .join("&");
    }
    a = a.replace(/%3d/g, "=");
    var f = a.split("&");
    for (var g = 0; g < f.length; g++) {
      var l = f[g].split("="),
        j = l.shift().toLowerCase(),
        k = l.join("=");
      n[j] = k;
    }
    return typeof n[p] != "undefined" ? n[p] : "";
  },
});
tC.extend({
  addClass: function (f) {
    var h, d, b, e, g, j, a;
    if (tC.isFunction(f)) {
      return this.each(function (c) {
        jQuery(this).addClass(f.call(this, c, this.className));
      });
    }
    if (f && typeof f === "string") {
      h = f.split(core_rspace);
      for (d = 0, b = this.length; d < b; d++) {
        e = this[d];
        if (e.nodeType === 1) {
          if (!e.className && h.length === 1) {
            e.className = f;
          } else {
            g = " " + e.className + " ";
            for (j = 0, a = h.length; j < a; j++) {
              if (g.indexOf(" " + h[j] + " ") < 0) {
                g += h[j] + " ";
              }
            }
            e.className = jQuery.trim(g);
          }
        }
      }
    }
    return this;
  },
  removeClass: function (h) {
    var e, f, g, j, b, d, a;
    if (tC.isFunction(h)) {
      return this.each(function (c) {
        jQuery(this).removeClass(h.call(this, c, this.className));
      });
    }
    if ((h && typeof h === "string") || h === undefined) {
      e = (h || "").split(core_rspace);
      for (d = 0, a = this.length; d < a; d++) {
        g = this[d];
        if (g.nodeType === 1 && g.className) {
          f = (" " + g.className + " ").replace(rclass, " ");
          for (j = 0, b = e.length; j < b; j++) {
            while (f.indexOf(" " + e[j] + " ") >= 0) {
              f = f.replace(" " + e[j] + " ", " ");
            }
          }
          g.className = h ? jQuery.trim(f) : "";
        }
      }
    }
    return this;
  },
  toggleClass: function (d, b) {
    var c = typeof d,
      a = typeof b === "boolean";
    if (tC.isFunction(d)) {
      return this.each(function (e) {
        tC(this).toggleClass(d.call(this, e, this.className, b), b);
      });
    }
    return this.each(function () {
      if (c === "string") {
        var g,
          f = 0,
          e = jQuery(this),
          h = b,
          j = d.split(core_rspace);
        while ((g = j[f++])) {
          h = a ? h : !e.hasClass(g);
          e[h ? "addClass" : "removeClass"](g);
        }
      } else {
        if (c === "undefined" || c === "boolean") {
          if (this.className) {
            jQuery._data(this, "__className__", this.className);
          }
          this.className =
            this.className || d === false
              ? ""
              : jQuery._data(this, "__className__") || "";
        }
      }
    });
  },
  hasClass: function (a) {
    var d = " " + a + " ",
      c = 0,
      b = this.length;
    for (; c < b; c++) {
      if (
        this[c].nodeType === 1 &&
        (" " + this[c].className + " ").replace(rclass, " ").indexOf(d) >= 0
      ) {
        return true;
      }
    }
    return false;
  },
});
if (tC.isCurrentVersion()) {
  if (typeof tC.dedup_done == "undefined" || tC.dedup_done === false) {
    tC.extend({
      dedup: {
        crypted: true,
        LeA: false,
        LeAD: false,
        LeC: false,
        LeCD: false,
        LeV: false,
        LeVD: false,
        FeA: false,
        FeAD: false,
        FeC: false,
        FeCD: false,
        FeV: false,
        FeVD: false,
        AeA: [],
        AeC: [],
        AeV: [],
        tc_hdoc: document,
        brands: null,
        d_tags: null,
        tc_scompshop: null,
        tc_scomnet: null,
        tc_ssearchv: null,
        tc_ssearche: null,
        cj_max: null,
        enable_dedup: null,
        ch_A: [],
        ch_C: [],
        ch_V: [],
        ch_0: null,
        detected_channel: "",
        detected_source: "",
        tc_scookcj_name: "tc_cj_v2",
        tc_scookcj_path: "/",
        tc_scookcj_days: 365,
        tc_dm: tC.domain(),
        tc_scooksda_name: "tc_sdauid",
        tc_scooksda_path: "/",
        setup: function (b, a) {
          this[b] = a;
          return this;
        },
        init: function () {
          if (!this.enable_dedup) {
            return;
          }
          var o = this,
            h = "",
            t = "",
            k = "",
            F = 0;
          o.cj = o.getCj();
          for (x in o.ch_0) {
            var j = o.ch_0[x];
            if (j.t == "c" || j.t == "a") {
              o.ch_C.push(j);
            }
            if (j.t == "v" || j.t == "a") {
              o.ch_V.push(j);
            }
            if (j.t != "0" && typeof j.l != "undefined") {
              o.ch_A.push(j);
            }
          }
          try {
            o.tc_hdoc = top.document;
          } catch (A) {}
          if (tC.getCookie("TCID") == "") {
            tC.setCookie("TCID", o.rand(), 365, "/", "." + o.tc_dm);
          }
          if (tC.getCookie("TCSESSION") == "") {
            tC.setCookie("TCSESSION", o.rand(), 0, "/", "." + o.tc_dm);
          }
          var y = tC.getParamURL;
          if (typeof h.l != "undefined") {
            h = h.l;
          }
          if (typeof h !== "undefined" && h != null && h != "") {
            F = 1;
          }
          if (typeof t !== "undefined" && t != null && t != "") {
            F = 1;
          }
          if (!F) {
            var E = o.meta_origin(o.tc_hdoc.referrer);
            if (E) {
              h = E.split("@@@")[0];
              t = E.split("@@@")[1];
            }
          }
          if (tC.dedup.redirect != "1") {
            if (h) {
              var m = h + "@@@" + t + "@@@" + new Date().getTime() + "@@@C",
                u = o.cj;
              if (u.length > 0) {
                var a = u[u.length - 1],
                  r = a.split("@@@"),
                  w = typeof r[0] != "undefined" ? r[0] : "",
                  B = typeof r[1] != "undefined" ? r[1] : "",
                  C =
                    typeof r[3] != "undefined"
                      ? r[3].replace("CLICK", "C")
                      : "";
                if (w == h && B == t && C == "C") {
                  o.cj.pop();
                }
              }
              o.setCj(m);
              if (
                "aramis.commander1.com" != "" &&
                "aramis.commander1.com".indexOf("commander1.com") !== -1
              ) {
                tC.pixelTrack.add(
                  ("http:" == document.location.protocol ? "http:" : "https:") +
                    "//aramis.commander1.com/dc3/?chn=" +
                    h +
                    "&src=" +
                    t +
                    "&type=C&limit=" +
                    tC.dedup.cj_max +
                    "&rand=" +
                    Math.random(),
                  "img"
                );
              }
              tC.dedup.detected_channel = h;
              tC.dedup.detected_source = t;
            }
          } else {
            tC.setCookie("TCREDIRECT", "0", 0, "/", tC.domain());
          }
          var d = o.cj;
          var q = "";
          for (var x = d.length - 1; x >= 0; x--) {
            var p = d[x].split("@@@");
            if (p.length != 4) {
            } else {
              var n = p[0],
                D = p[1],
                v = o.age(p[2]),
                v = v == "" ? false : v,
                l = p[3].replace("VIEW", "V").replace("CLICK", "C"),
                f = o.getChannel({ l: n, t: "A" }),
                b = o.getChannel({ l: n, t: "C" }),
                z = o.getChannel({ l: n, t: "V" });
              if ((b || z) && v !== false) {
                if (
                  b != false &&
                  l == "C" &&
                  parseFloat(v) <= parseFloat(b.a)
                ) {
                  if (!o.LeC) {
                    o.LeC = n;
                    o.LeCD = D;
                  }
                  o.FeC = n;
                  o.FeCD = D;
                  o.AeC.push({ c: n, d: D });
                  if (!o.LeA || q == "V") {
                    o.LeA = n;
                    o.LeAD = D;
                    q = "C";
                  }
                  o.FeA = n;
                  o.FeAD = D;
                  o.AeA.push({ c: n, d: D });
                }
                if (
                  z != false &&
                  l == "V" &&
                  parseFloat(v) <= parseFloat(z.b)
                ) {
                  if (!o.LeV) {
                    o.LeV = n;
                    o.LeVD = D;
                  }
                  o.FeV = n;
                  o.FeVD = D;
                  o.AeV.push({ c: n, d: D });
                  if (!o.LeA) {
                    o.LeA = n;
                    o.LeAD = D;
                    q = "V";
                  }
                  o.FeA = n;
                  o.FeAD = D;
                  o.AeA.push({ c: n, d: D });
                }
              }
            }
          }
        },
        getChannel: function (f) {
          var c = f.t,
            b = tC.dedup,
            e;
          if (c == "C" || c == "click") {
            e = b.ch_C;
          } else {
            if (c == "V" || c == "view") {
              e = b.ch_V;
            } else {
              if (c == "A" || c == "all") {
                e = b.ch_A;
              } else {
                e = b.ch_0;
              }
            }
          }
          if (typeof f.l != "undefined") {
            f.l = f.l
              .replace("DIRECT_ACCESS", "Direct Access")
              .replace("EXTERNAL_LINK", "External links");
            if (f.l == "COM") {
              f.l = "Community websites";
            }
            if (f.l == "CSS") {
              f.l = "Comparison shopping services";
            }
            if (f.l == "BRAND") {
              f.l = "Brand";
            }
          }
          for (var a in e) {
            if (
              (typeof f.i != "undefined" &&
                parseInt(f.i) == parseInt(e[a].i)) ||
              (typeof f.l != "undefined" &&
                typeof e[a].l != "undefined" &&
                f.l.toLowerCase() == e[a].l.toLowerCase())
            ) {
              return e[a];
            }
          }
          return false;
        },
        rand: function () {
          var a = new Date();
          return (
            "" +
            a.getYear() +
            (a.getMonth() + 1) +
            a.getDay() +
            a.getHours() +
            a.getMinutes() +
            a.getSeconds() +
            parseInt(Math.random() * 12345678942)
          );
        },
        getCj: function () {
          var a = this.crypted
            ? tC.uncrypt(tC.getCookie(this.tc_scookcj_name))
            : tC.getCookie(this.tc_scookcj_name);
          return a == "" ? [] : a.split("|||");
        },
        setCj: function (b) {
          var c = this.cj;
          if (tC.isArray(b)) {
            for (var a in b) {
              c.push(b[a]);
            }
          } else {
            c.push(b);
          }
          while (c.length > this.cj_max) {
            c.shift();
          }
          this.cj = c;
          tC.setCookie(
            this.tc_scookcj_name,
            this.crypted ? tC.crypt(c.join("|||")) : c.join("|||"),
            this.tc_scookcj_days,
            this.tc_scookcj_path,
            this.tc_dm
          );
        },
        removeCj: function () {
          tC.setCookie(
            this.tc_scookcj_name,
            "",
            0,
            this.tc_scookcj_path,
            this.tc_dm
          );
        },
        match: function (b, c, a) {
          if (b && b != "ignored" && a != "") {
            switch (b) {
              case "equals":
                if (a == c) {
                  return true;
                }
                break;
              case "different":
                if (a != c) {
                  return true;
                }
                break;
              case "contains":
                if (tC.match(a, c)) {
                  return true;
                }
                break;
              case "notcontains":
                if (!tC.match(a, c)) {
                  return true;
                }
                break;
              default:
                return true;
            }
          } else {
            return true;
          }
          return false;
        },
        contains_channel: function (c) {
          for (var a in c.e) {
            var b = c.e[a];
            if (typeof b == "object") {
              if (
                typeof b.c != "undefined" &&
                typeof c.c != "undefined" &&
                b.c.toLowerCase() == c.c.toLowerCase() &&
                this.match(c.m, c.s, b.d)
              ) {
                return true;
              }
            }
          }
          return false;
        },
        ValidRules: function (id_tag) {
          var rules =
              typeof this.d_tags[id_tag] != "undefined"
                ? this.d_tags[id_tag]
                : false,
            valid_rules = true,
            self = this;
          if (!rules) {
            return true;
          }
          state_rules_string = "";
          var tab_length = rules.length;
          for (var i = 0; i < tab_length; i++) {
            var rule = rules[i];
            if (typeof rule == "object") {
              var res = self.test(rule);
              if (i == 0) {
                state_rules_string += res;
              } else {
                state_rules_string += " " + rule.x + " " + res;
              }
            }
          }
          return eval(
            state_rules_string.replace(/and/g, "&&").replace(/or/g, "||")
          );
        },
        test: function (k) {
          var p = this,
            h = (channel_found_in_cj = []),
            m = k.t.toLowerCase(),
            e = k.w,
            n = k.m,
            a = k.s,
            l = k.f,
            o = typeof k.d != "undefined" ? k.d : false,
            c = k.c;
          if (m == "all") {
            if (e == "any") {
              h = p.AeA;
            } else {
              if (e == "last") {
                h = p.LeA ? [{ c: p.LeA, d: p.LeAD }] : [];
              } else {
                if (e == "first") {
                  h = p.FeA ? [{ c: p.FeA, d: p.FeAD }] : [];
                }
              }
            }
          } else {
            if (m == "click") {
              if (e == "any") {
                h = p.AeC;
              } else {
                if (e == "last") {
                  h = p.LeC ? [{ c: p.LeC, d: p.LeCD }] : [];
                } else {
                  if (e == "first") {
                    h = p.FeC ? [{ c: p.FeC, d: p.FeCD }] : [];
                  }
                }
              }
            } else {
              if (m == "view") {
                if (e == "any") {
                  h = p.AeV;
                } else {
                  if (e == "last") {
                    h = p.LeV ? [{ c: p.LeV, d: p.LeVD }] : [];
                  } else {
                    if (e == "first") {
                      h = p.FeV ? [{ c: p.FeV, d: p.FeVD }] : [];
                    }
                  }
                }
              }
            }
          }
          for (var f in c) {
            if (typeof c[f] != "function") {
              var j = c[f],
                b = p.getChannel({ i: j, t: m }),
                g = b.l;
              if (tC.dedup.contains_channel({ c: g, e: h, m: n, s: a })) {
                channel_found_in_cj.push(j);
              }
            }
          }
          return (
            (l == "1" && channel_found_in_cj.length != 0) ||
            (l == "0" && channel_found_in_cj.length == 0)
          );
        },
        age: function (a) {
          var b = new Date().getTime() + 100;
          return ((b - a) / 3600 / 24 / 1000).toFixed(2);
        },
        meta_origin: function (c) {
          if (c == "undefined" || !c || c == "") {
            return "DIRECT_ACCESS@@@";
          }
          var c = c.toLowerCase(),
            d = this.tc_hdoc.domain.toLowerCase(),
            h = (ref_d_s = cur_d_s = ""),
            m = this;
          if (c != "") {
            var j = c.split("/"),
              h = j[2];
            my_d_a = h.split(".");
            ref_d_s = my_d_a[my_d_a.length - 2];
          }
          if (ref_d_s == "co" || ref_d_s == "com" || ref_d_s == "org") {
            ref_d_s = my_d_a[my_d_a.length - 3];
          }
          if (d != "") {
            var b = d.split(".");
            cur_d_s = b[b.length - 2];
            if (cur_d_s == "co" || cur_d_s == "com" || cur_d_s == "org") {
              cur_d_s = b[b.length - 3];
            }
          }
          if (ref_d_s == cur_d_s) {
            return false;
          }
          for (var f = 0; f < m.tc_ssearche.length; f++) {
            if (ref_d_s == m.tc_ssearche[f]) {
              var e = tC.getParamURL(m.tc_ssearchv[f], c),
                e = unescape(e.toLowerCase());
              for (type in m.brands) {
                var l = m.brands[type];
                for (kb in l) {
                  var a = l[kb];
                  if (typeof a == "string") {
                    var a = a != "" ? a.toLowerCase() : false,
                      g = type == "Regex" ? new RegExp(a, "g") : false;
                    if (
                      a &&
                      ((type == "Exact word" && e === a) ||
                        (type == "Contain" && e.indexOf(a) != -1) ||
                        (type == "Regex" && g.test(e)))
                    ) {
                      return "BRAND@@@" + m.tc_ssearche[f];
                    }
                  }
                }
              }
              return "SEO@@@" + m.tc_ssearche[f];
            }
          }
          for (var f = 0; f < m.tc_scomnet.length; f++) {
            if (ref_d_s == m.tc_scomnet[f]) {
              return "COM@@@" + m.tc_scomnet[f];
            }
          }
          for (var f = 0; f < m.tc_scompshop.length; f++) {
            if (ref_d_s == m.tc_scompshop[f]) {
              return "CSS@@@" + m.tc_scompshop[f];
            }
          }
          if (ref_d_s != cur_d_s) {
            return "EXTERNAL_LINK@@@" + h;
          }
          return false;
        },
      },
    });
    tC.dedup.redirect =
      typeof tc_redirect != "undefined"
        ? tc_redirect
        : typeof tC.dedup.redirect != "undefined"
        ? tC.dedup.redirect
        : tC.getCookie("TCREDIRECT");
  }
  tC.dedup
    .setup("d_tags", {
      "111": [
        {
          t: "click",
          w: "last",
          c: ["45"],
          m: "contains",
          s: "adlead",
          f: "1",
          x: "and",
          d: { id: "111" },
        },
      ],
      "201": [
        {
          t: "click",
          w: "last",
          c: ["45"],
          m: "contains",
          s: "adlead_ri_lp_rdv",
          f: "1",
          x: "and",
          d: { id: "201" },
        },
      ],
      "187": [
        {
          t: "click",
          w: "last",
          c: ["21"],
          m: "contains",
          s: "facebookads",
          f: "1",
          x: "and",
          d: { id: "187" },
        },
      ],
      "205": [
        {
          t: "click",
          w: "last",
          c: ["21"],
          m: "equals",
          s: "facebookads",
          f: "1",
          x: "and",
          d: { id: "205" },
        },
      ],
    })
    .setup("ch_0", [
      { i: "-5", l: "Brand", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "-4", l: "SEO", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "3", l: "Affiliation", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "5", l: "Display", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "7", l: "ShopBot", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "9", l: "SEM", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "11", l: "SEMBrand", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "13", l: "E-mail", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "15", l: "Partners", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "17", l: "Retargeting", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "19", l: "AdExchange", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "21", l: "SocialAds", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "23", l: "di", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "25", l: "af", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "27", l: "aff", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "29", l: "co", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "31", l: "pa", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "33", l: "ps", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "35", l: "re", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "37", l: "sm", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "39", l: "pr", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "41", l: "wc", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "43", l: "wp", t: "c", a: "30.00", b: "0.00", g: [] },
      { i: "45", l: "em", t: "c", a: "30.00", b: "0.00", g: [] },
    ]);
  if (typeof tC.dedup_done == "undefined" || tC.dedup_done === false) {
    tC.dedup
      .setup("brands", [])
      .setup("tc_scompshop", ["shopping", "kelkoo"])
      .setup("tc_scomnet", [
        "facebook",
        "linkedin",
        "viadeo",
        "trombi",
        "myspace",
        "orkut",
        "habbo",
        "xing",
        "yammer",
        "twitter",
      ])
      .setup("tc_ssearchv", [
        "q",
        "p",
        "q",
        "query",
        "encquery",
        "query",
        "q",
        "q",
        "query",
        "query",
        "qt",
        "terms",
        "query",
        "q",
        "q",
        "rdata",
        "qs",
        "q",
        "wd",
        "qs",
        "text",
        "q",
        "q",
        "query",
        "query",
        "q",
        "q",
        "szukaj",
        "qt",
        "q",
        "q",
        "q",
        "k",
        "q",
        "searchExpr",
        "q",
        "q",
        "query",
        "query",
        "q",
        "q",
        "search_for",
        "q",
        "q",
        "search_word",
        "query",
        "q",
        "words",
        "qt",
        "q",
      ])
      .setup("tc_ssearche", [
        "google",
        "yahoo",
        "msn",
        "aol",
        "aol",
        "lycos",
        "ask",
        "altavista",
        "netscape",
        "cnn",
        "looksmart",
        "about",
        "mamma",
        "alltheweb",
        "gigablast",
        "voila",
        "virgilio",
        "live",
        "baidu",
        "alice",
        "yandex",
        "najdi",
        "aol",
        "club-internet",
        "mama",
        "seznam",
        "search",
        "wp",
        "onet",
        "netsprint",
        "google.interia",
        "szukacz",
        "yam",
        "pchome",
        "kvasir",
        "sesam",
        "ozu",
        "terra",
        "nostrum",
        "mynet",
        "ekolay",
        "search.ilse",
        "bing",
        "daum",
        "eniro",
        "naver",
        "kvasir",
        "rambler",
        "onetcenter",
        "szukacs",
      ])
      .setup("cj_max", 10)
      .setup("enable_dedup", tC.isCurrentVersion())
      .init();
    tC.dedup_done = true;
  }
}
tC1995_3 = tC; /* RETRO COMPATIBILITY FUNCTIONS */
tc_crypt = tC.crypt;
if (typeof tc_vars == "undefined") var tc_vars = [];
(function () {
  var l = "page_cat1|page_cat2|page_cat3|page_name|page_error|email_MD5|canal_acquistion|telephone|email_SHA256|user_id|user_gender|user_category|user_smb|user_logged|user_age|user_postalcode|Date_1ere_Visite|events|user_status|gclid|env_work|env_channel|env_language|env_country|env_dnt|intcmp|env_template|type_vente_deviscoche|product_discount_percent|opportunity_id_deviscoche|opportunity_id_mere_deviscoche|order_commande_id|order_webcallback_id|order_reservation_id|order_alerte_id|order_rdv_id|type_vente|order_score|order_quotation_id|order_evaluation_id|opportunity_id|order_amount_ati_without_sf|order_amount_ati_with_sf|order_discount_ati|order_amount_tf_without_sf|order_amount_tf_with_sf|order_discount_tf|order_newcustomer|order_tax|order_payment_methods|order_status|order_promo_code|order_currency|order_email|order_email_optin|order_product_id|order_product_name|order_product_category|order_product_unitprice_ati|order_product_discount_ati|order_product_unitprice_tf|order_product_discount_tf|order_product_trademark|order_product_url_page|order_product_url_picture|order_product_breadcrumb_id|order_product_breadcrumb_label|order_product_NVN|es_id_devis|opportunity_id_mere|order_payment_amount|client_with_order|meeting_purpose|product_id|product_name|product_category|product_unitprice_ati|product_discount_ati|product_unitprice_tf|product_discount_tf|product_currency|product_trademark|product_url_page|product_url_picture|product_breadcrumb_id|product_marques|product_modeles|product_finitions|product_types_marques_modeles|product_breadcrumb_label|product_NVN|es_id|product_model|search_first|search_keywords|list_product|list_products|search_page_number|search_results_number|search_filters|search_marque|search_modele|search_finition|search_categorie|search_carburant|search_boite_de_vitesse|search_carrosserie|search_disponibilite|search_budget|search_typedevente|search_equipements_et_options|search_kilometrage|RefAramisouNVO_listemoteur_01-13|RefAramisouNVO_listemoteur_14-25|search_mensualite|search_couleur|search_typedecredit|search_annee|search_apport|search_duree|search_filtres|search_kmannuel|search_puissance|search_query|search_tri|search_trademark|search_model|ab_tasty_2|ab_tasty_3|channels|partners|keywords|referring_domains|stacked_tracking_codes|stacked_channels|stacked_keywords|domaines_conversions|QRI_intentionnistes|URL_Before_lead|landing_pages_aramis|QRI_souhait_vendre_voiture|QRI_petite_annonce_internet|QRI_PA_combien_temps|QRI_quel_prix|Version|autofilling|credit_apport|credit_duree|credit_kmparan|credit_offreaffichee|credit_offreselectionnee|reprise_delai|ab_tasty|interetLPfinancement|car_engine|car_finish|car_mileage|car_price|car_trademark|car_model|car_body|car_doors|car_fuel|car_gearbox|car_date|aocabilite".split(
    "|"
  );
  for (var k in l) {
    if (!tc_vars.hasOwnProperty(l[k])) {
      tc_vars[l[k]] = "";
    }
  }
})();
(function () {
  var tc_local_value_N = tC.getCookie("tc_ntesting_2080");
  var tc_n_testing = "aaa,bbb,bbb,bbb,bbb";
  var tc_array_n_testing = tc_n_testing.split(",");
  if (tc_local_value_N == "") {
    var tc_rand_N = parseInt(Math.random() * tc_array_n_testing.length);
    for (var i = 0; i < tc_array_n_testing.length; i++) {
      if (tc_rand_N == i) {
        tC.setCookie("tc_ntesting_2080", tc_array_n_testing[i], 30, "/");
      }
    }
  }
})();
tC.array_launched_tags = [];
tC.array_launched_tags_keys = [];
tC.id_site = "1995";
if (tC.getCookie("tc_mode_test") == 1) {
  (function () {
    var tc_testmodescriptload = document.createElement("script");
    tc_testmodescriptload.type = "text/javascript";
    tc_testmodescriptload.src =
      "//manager.tagcommander.com/utils/test_mode_include.php?id=3&site=1995&type=load&rand=" +
      Math.random() +
      "&version=";
    (
      document.getElementsByTagName("body")[0] ||
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("script")[0].parentNode
    ).appendChild(tc_testmodescriptload);
  })();
} else {
  var tc_array_url_vars = (function () {
    var qs = window.location.search;
    var params = [],
      tokens,
      re = /[?&]?([^=]+)=([^&]*)/g;
    while ((tokens = re.exec(qs))) {
      params[tokens[1]] = tokens[2];
    }
    return params;
  })();
  var tc_fulldomain = window.location.hostname;
  var tc_maindomain = (function () {
    var tc_maindomain = "";
    var tmp1 = window.location.hostname.split(".");
    if (tmp1[tmp1.length - 2].length <= 3) {
      tc_maindomain =
        tmp1[tmp1.length - 3] +
        "." +
        tmp1[tmp1.length - 2] +
        "." +
        tmp1[tmp1.length - 1];
    } else {
      tc_maindomain = tmp1[tmp1.length - 2] + "." + tmp1[tmp1.length - 1];
    }
    return tc_maindomain;
  })();
  var tc_pathname = window.location.pathname;
  var tc_random_tmp = new String(Math.random());
  var tc_random = tc_random_tmp.substring(2, 11);
  var tc_referrer = document.referrer;
  var tc_timestamp = Math.round(new Date().getTime() / 1000.0);
  var tc_title = document.title;
  var tc_url = document.location.href;
  var tc_url_1 = (function () {
    var tc_url_1_tmp = document.location.href.split("?");
    var tc_url_1_tmp2 = tc_url_1_tmp[0].split("/");
    return tc_url_1_tmp2[3];
  })();
  tc_url_3 = (function () {
    var tc_url_3_tmp = document.location.href.split("?");
    var tc_url_3_tmp2 = tc_url_3_tmp[0].split("/");
    return tc_url_3_tmp2[5];
  })();
  var tc_url_no_query = (function () {
    var temp_tc_url_no_query = document.location.href.split("?");
    return temp_tc_url_no_query[0];
  })();
  var tc_url_query_string = (function () {
    var temp_tc_url_query_string = document.location.href.split("?");
    temp_tc_url_query_string.shift();
    return temp_tc_url_query_string.join("?");
  })();
  tC.internalvars.omn_events = [];
  if (typeof tc_vars["events"] === "undefined") {
    tc_vars["events"] = "";
  }
  if (
    tc_vars["events"]
      .toString()
      .toLowerCase()
      .indexOf("event1".toLowerCase()) != -1
  ) {
    tC.internalvars.omn_events.push("event1:" + tc_vars["user_id"]);
  }
  if (tc_vars["page_name"] == "aa:quote:funding") {
    tC.internalvars.omn_events.push("event2");
  }
  if (
    (tc_vars["page_name"] == "aa:quote:confirm:login" ||
      tc_vars["page_name"] == "aa:quote:confirm:register") &&
    (tc_vars["credit_offreselectionnee"] == "loan_access" ||
      tc_vars["credit_offreselectionnee"] == "loan_zen" ||
      tc_vars["credit_offreselectionnee"] == "leasing_serenis")
  ) {
    tC.internalvars.omn_events.push("event2");
  }
  if (
    document.referrer
      .toString()
      .toLowerCase()
      .indexOf("aramisauto.com/reprise/vos-coordonnees".toLowerCase()) != -1 &&
    document.location
      .toString()
      .toLowerCase()
      .indexOf(
        "aramisauto.com/reprise/estimation-de-votre-voiture/confirmation".toLowerCase()
      ) != -1
  ) {
    tC.internalvars.omn_events.push("event4");
  }
  if (
    document.referrer
      .toString()
      .toLowerCase()
      .indexOf("aramisauto.com/reprise/votre-projet".toLowerCase()) != -1 &&
    document.location
      .toString()
      .toLowerCase()
      .indexOf(
        "aramisauto.com/reprise/estimation-de-votre-voiture/confirmation".toLowerCase()
      ) != -1
  ) {
    tC.internalvars.omn_events.push("event4");
  }
  if (
    document.location
      .toString()
      .toLowerCase()
      .indexOf("aramisauto.com/commande/confirmation".toLowerCase()) != -1 &&
    tc_vars["page_name"] == "aa:booking:confirm"
  ) {
    tC.internalvars.omn_events.push("event6");
  }
  if (
    tc_vars["events"]
      .toString()
      .toLowerCase()
      .indexOf("event8".toLowerCase()) != -1
  ) {
    tC.internalvars.omn_events.push("event8");
  }
  if (tc_vars["env_template"] == "offres") {
    tC.internalvars.omn_events.push("event9");
  }
  if (tc_vars["env_template"] == "recherche") {
    tC.internalvars.omn_events.push("event10");
  }
  if (
    tc_vars["env_template"] == "recherche" &&
    tc_vars["search_results_number"] == "0"
  ) {
    tC.internalvars.omn_events.push("event11");
  }
  if (tc_vars["page_name"] == "aa:webcallback:confirm") {
    tC.internalvars.omn_events.push("event12");
  }
  if (
    tc_vars["QRI_intentionnistes"] == "oui" &&
    document.location
      .toString()
      .toLowerCase()
      .indexOf(
        "aramisauto.com/reprise/estimation-de-votre-voiture/confirmation".toLowerCase()
      ) != -1
  ) {
    tC.internalvars.omn_events.push("event16");
  }
  if (
    document.referrer
      .toString()
      .toLowerCase()
      .indexOf(
        "aramisauto.com/contact/prise-rdv/vos-coordonnees".toLowerCase()
      ) != -1 &&
    document.location
      .toString()
      .toLowerCase()
      .indexOf("aramisauto.com/contact/prise-rdv/confirmation".toLowerCase()) !=
      -1 &&
    (tc_vars["meeting_purpose"] ==
      "Projet d'achat avec offre de reprise pour ma voiture" ||
      tc_vars["meeting_purpose"] == "Offre de reprise pour ma voiture")
  ) {
    tC.internalvars.omn_events.push("event17");
  }
  if (
    document.referrer
      .toString()
      .toLowerCase()
      .indexOf(
        "aramisauto.com/reprise/estimation-de-votre-voiture/confirmation".toLowerCase()
      ) != -1 &&
    tc_vars["page_name"] == "aa:aspageri:estimation:rdv:confirm"
  ) {
    tC.internalvars.omn_events.push("event17");
  }
  if (
    document.referrer
      .toString()
      .toLowerCase()
      .indexOf("aramisauto.com/clients/registration".toLowerCase()) != -1 &&
    (tc_url == "http://www.aramisauto.com/clients/" ||
      tc_url == "http://aramisauto.com/clients/")
  ) {
    tC.internalvars.omn_events.push("event19");
  }
  if (
    document.referrer
      .toString()
      .toLowerCase()
      .indexOf("aramisauto.com/c/vente".toLowerCase()) != -1 &&
    tc_vars["page_name"] == "aa:search"
  ) {
    tC.internalvars.omn_events.push("event19");
  }
  if (
    document.referrer
      .toString()
      .toLowerCase()
      .indexOf(
        "aramisauto.com/informations/services/newsletter".toLowerCase()
      ) != -1 &&
    document.location
      .toString()
      .toLowerCase()
      .indexOf(
        "aramisauto.com/informations/services/newsletter?aramis_newsletter_subscribe".toLowerCase()
      ) != -1
  ) {
    tC.internalvars.omn_events.push("event22");
  }
  if (
    document.referrer
      .toString()
      .toLowerCase()
      .indexOf("aramisauto.com/reprise/vos-coordonnees".toLowerCase()) != -1 &&
    tc_vars["user_logged"] == 1
  ) {
    tC.internalvars.omn_events.push("event4");
  }
  if (
    document.referrer
      .toString()
      .toLowerCase()
      .indexOf("aramisauto.com/voitures/".toLowerCase()) != -1 &&
    document.location
      .toString()
      .toLowerCase()
      .indexOf("aramisauto.com/commande/selection/".toLowerCase()) != -1
  ) {
    tC.internalvars.omn_events.push("event32");
  }
  if (
    tc_vars["page_name"] == "aa:booking:confirm:error" ||
    tc_vars["page_name"] == "aa:order:confirm:cb:error" ||
    tc_vars["page_name"] == "aa:order:confirm:transfer:error"
  ) {
    tC.internalvars.omn_events.push("event33");
  }
  if (
    document.referrer
      .toString()
      .toLowerCase()
      .indexOf("aramisauto.com/commande/selection/".toLowerCase()) != -1 &&
    document.location
      .toString()
      .toLowerCase()
      .indexOf("aramisauto.com/commande/identification".toLowerCase()) != -1
  ) {
    tC.internalvars.omn_events.push("event32");
  }
  if (
    document.referrer
      .toString()
      .toLowerCase()
      .indexOf(
        "aramisauto.com/contact/prise-rdv/vos-coordonnees".toLowerCase()
      ) != -1 &&
    document.location
      .toString()
      .toLowerCase()
      .indexOf("aramisauto.com/contact/prise-rdv/confirmation".toLowerCase()) !=
      -1
  ) {
    tC.internalvars.omn_events.push("event35");
  }
  if (
    document.referrer
      .toString()
      .toLowerCase()
      .indexOf(
        "aramisauto.com/reprise/estimation-de-votre-voiture/confirmation".toLowerCase()
      ) != -1 &&
    tc_vars["page_name"] == "aa:aspageri:estimation:rdv:confirm"
  ) {
    tC.internalvars.omn_events.push("event35");
  }
  tC.internalvars.omn_events = tC.internalvars.omn_events.join(",");
  tC.log(tC.internalvars.omn_events);
  tC.internalvars.E_DevisLP = 0;
  if (
    document.referrer
      .toString()
      .toLowerCase()
      .indexOf("aramisauto.com/c/vente".toLowerCase()) != -1 &&
    document.location
      .toString()
      .toLowerCase()
      .indexOf("aramisauto.com/achat/recherche".toLowerCase()) != -1
  ) {
    tC.internalvars.E_DevisLP = 1;
  }
  tC.internalvars.E_EstimationsurAA = 0;
  if (
    document.location
      .toString()
      .toLowerCase()
      .indexOf(
        "aramisauto.com/clients/reprise-illico/estimation-de-votre-voiture/confirmation".toLowerCase()
      ) != -1
  ) {
    tC.internalvars.E_EstimationsurAA = 1;
  }
  tC.internalvars.dedup_report_id = tc_vars["order_quotation_id"];
  var str = tc_vars["events"];
  var n = str.indexOf("event8");
  if (n !== -1) {
    tC.internalvars.dedup_report_id = tc_vars["opportunity_id"];
  }
  if (tc_vars["order_evaluation_id"] !== "") {
    tC.internalvars.dedup_report_id = tc_vars["order_evaluation_id"];
  }
  if (tc_vars["page_name"] == "aa:aspageri:estimation:rdv:confirm") {
    tC.internalvars.dedup_report_id = tc_vars["opportunity_id_mere"];
  }
  tC.internalvars.launched_tags = tC.array_launched_tags.toString();
  tC.internalvars.dedup_canal_source =
    tC.dedup.LeA.toString() + "@" + tC.dedup.LeAD.toString();
  tC.internalvars.ua = navigator.userAgent.toLowerCase();
  if (
    /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
      tC.internalvars.ua
    )
  ) {
    tC.internalvars.ua = "tablette";
  } else {
    if (
      /(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(
        tC.internalvars.ua
      )
    ) {
      tC.internalvars.ua = "mobile";
    } else {
      tC.internalvars.ua = "desktop";
    }
  }
  tC.internalvars.tc_ntesting_2080 = tC.getCookie("tc_ntesting_2080");
  var tc_url_2 = (function () {
    var tc_url_2_tmp = document.location.href.split("?");
    var tc_url_2_tmp2 = tc_url_2_tmp[0].split("/");
    return tc_url_2_tmp2[4];
  })();
  var tc_ssl = "https:" == document.location.protocol ? "yes" : "no";
  tC.internalvars.tc_referrer = encodeURIComponent(document.referrer);
  tC.internalvars.tc_url = document.location.href;
  tC.internalvars.nouveaucpteviavente = "";
  if (tc_vars["user_id"] !== "" || tc_random !== "" || tc_random !== "") {
    tC.internalvars.nouveaucpteviavente =
      tc_vars["user_id"] + "|" + tc_random + "|" + tc_random;
  }
  tC.internalvars.nouveaucpte = "";
  if (tc_vars["user_id"] !== "" || tc_random !== "") {
    tC.internalvars.nouveaucpte = tc_vars["user_id"] + "|" + tc_random;
  }
  tC.internalvars.oppvn = "";
  if (tc_vars["opportunity_id"] !== "" || tc_random !== "") {
    tC.internalvars.oppvn = tc_vars["opportunity_id"] + "|" + tc_random;
  }
  tC.internalvars.nouveaucpteviarepris = "";
  if (tc_vars["user_id"] !== "" || tc_random !== "" || tc_random !== "") {
    tC.internalvars.nouveaucpteviarepris =
      tc_vars["user_id"] + "|" + tc_random + "|" + tc_random;
  }
  tC.internalvars.oppri = "";
  if (tc_vars["opportunity_id"] !== "" || tc_random !== "") {
    tC.internalvars.oppri = tc_vars["opportunity_id"] + "|" + tc_random;
  }
  tC.internalvars.oppra = "";
  if (
    tc_vars["opportunity_id"] !== "" ||
    tc_random !== "" ||
    tc_vars["QRI_intentionnistes"] !== ""
  ) {
    tC.internalvars.oppra =
      tc_vars["opportunity_id"] +
      "|" +
      tc_random +
      "|" +
      tc_vars["QRI_intentionnistes"];
  }
  tC.internalvars.oppvo = "";
  if (tc_vars["opportunity_id"] !== "" || tc_random !== "") {
    tC.internalvars.oppvo = tc_vars["opportunity_id"] + "|" + tc_random;
  }
  tC.internalvars.oppalerte = "";
  if (tc_vars["opportunity_id"] !== "" || tc_vars["order_alerte_id"] !== "") {
    tC.internalvars.oppalerte =
      tc_vars["opportunity_id"] + "|" + tc_vars["order_alerte_id"];
  }
  tC.internalvars.rdvglobal = "";
  if (tc_vars["order_rdv_id"] !== "" || tc_random !== "") {
    tC.internalvars.rdvglobal = tc_vars["order_rdv_id"] + "|" + tc_random;
  }
  tC.internalvars.oppvidevoenarrivage = "";
  if (tc_vars["opportunity_id"] !== "" || tc_random !== "") {
    tC.internalvars.oppvidevoenarrivage =
      tc_vars["opportunity_id"] + "|" + tc_random;
  }
  tC.internalvars.oppvente_deviscoche = "";
  if (tc_vars["opportunity_id_deviscoche"] !== "" || tc_random !== "") {
    tC.internalvars.oppvente_deviscoche =
      tc_vars["opportunity_id_deviscoche"] + "|" + tc_random;
  }
  tC.internalvars.connexionmoncompteok = "";
  if (tc_vars["user_id"] !== "" || tc_timestamp !== "") {
    tC.internalvars.connexionmoncompteok =
      tc_vars["user_id"] + "|" + tc_timestamp;
  }
  tC.internalvars.aocabilite = {};
  tC.internalvars.aocabilite.datevoiture = new Date(
    tc_vars.car_date.split("/")[2] +
      "-" +
      tc_vars.car_date.split("/")[1] +
      "-" +
      tc_vars.car_date.split("/")[0]
  );
  tC.internalvars.aocabilite.dateactuelle = new Date();
  tC.internalvars.totalmois =
    (tC.internalvars.aocabilite.dateactuelle.getFullYear() -
      tC.internalvars.aocabilite.datevoiture.getFullYear()) *
      12 +
    (tC.internalvars.aocabilite.dateactuelle.getMonth() -
      tC.internalvars.aocabilite.datevoiture.getMonth());
  if (Number(tc_vars.car_mileage) <= 150000 && tC.internalvars.totalmois < 96) {
    tC.internalvars.aocabilite = "1";
  } else {
    tC.internalvars.aocabilite = "0";
  }
  var tc_omniture_user_logged = "";
  switch (tc_vars["user_logged"].toString().toLowerCase()) {
    case "yes":
      tc_omniture_user_logged = "1";
      break;
    case "no":
      tc_omniture_user_logged = "0";
      break;
    default:
      tc_omniture_user_logged = "";
  }
  var tc_device_criteo = "";
  switch (tc_vars["env_channel"].toString().toLowerCase()) {
    case "web":
      tc_device_criteo = "d";
      break;
    case "mobile":
      tc_device_criteo = "m";
      break;
    default:
      tc_device_criteo = "";
  }
  var tc_typevente_zanox = "";
  switch (tc_vars["type_vente"].toString().toLowerCase()) {
    case "vn":
      tc_typevente_zanox = "Vneuf";
      break;
    case "vo":
      tc_typevente_zanox = "Voccasion";
      break;
    case "ri":
      tc_typevente_zanox = "illicoaramis";
      break;
    default:
      tc_typevente_zanox = "";
  }
  var tc_civilite = "";
  switch (tc_vars["user_gender"].toString().toLowerCase()) {
    case "m":
      tc_civilite = "H";
      break;
    case "m":
      tc_civilite = "H";
      break;
    case "m.":
      tc_civilite = "H";
      break;
    case "mme":
      tc_civilite = "F";
      break;
    case "mlle":
      tc_civilite = "F";
      break;
    default:
      tc_civilite = "";
  }
  var tc_channel = "";
  switch (tc_vars["env_channel"].toString().toLowerCase()) {
    case "mobileri":
      tc_channel = "mobile";
      break;
    case "mobile":
      tc_channel = "mobile";
      break;
    case "web":
      tc_channel = "web";
      break;
    default:
      tc_channel = "";
  }
  tC.internalvars.nextperf_ntesting = "";
  switch (tC.internalvars.tc_ntesting_2080) {
    case "aaa":
      tC.internalvars.nextperf_ntesting = "0";
      break;
    case "bbb":
      tC.internalvars.nextperf_ntesting = "1";
      break;
    default:
      tC.internalvars.nextperf_ntesting = "";
      break;
  }
  tC.internalvars.user_status2 = "";
  switch (tc_vars["user_status"]) {
    case "0":
    case 0:
      tC.internalvars.user_status2 = "prospect";
      break;
    case "1":
    case 1:
      tC.internalvars.user_status2 = "client";
      break;
    default:
      tC.internalvars.user_status2 = "";
      break;
  }
  switch (tC.getCookie("tc_ntesting_2080")) {
    case "aaa":
      tC.internalvars.nextperf_ntesting = "0";
      break;
    case "bbb":
      tC.internalvars.nextperf_ntesting = "1";
      break;
    case "%20aaa":
      tC.internalvars.nextperf_ntesting = "0";
      break;
    case "%20bbb":
      tC.internalvars.nextperf_ntesting = "1";
      break;
    case " aaa":
      tC.internalvars.nextperf_ntesting = "0";
      break;
    case " bbb":
      tC.internalvars.nextperf_ntesting = "1";
      break;
    default:
      tC.internalvars.nextperf_ntesting = "";
      break;
  }
  (function () {
    var tc_local_value_N = tC.getCookie("abtest_retargeting_nextperf");
    var tc_n_testing = "A,A,B,B,B,B,B,B,B,B";
    var tc_array_n_testing = tc_n_testing.split(",");
    if (tc_local_value_N == "") {
      var tc_rand_N = parseInt(Math.random() * tc_array_n_testing.length);
      for (var i = 0; i < tc_array_n_testing.length; i++) {
        if (tc_rand_N == i) {
          tC.setCookie(
            "abtest_retargeting_nextperf",
            tc_array_n_testing[i],
            30,
            "/"
          );
        }
      }
    }
  })();
  (function () {
    var pages_viewed = 0;
    if (tC.getCookie("tc_page_counter") === "") {
      pages_viewed = 1;
      tC.setCookie("tc_page_counter", 1, 0, "/");
    } else {
      pages_viewed = parseInt(tC.getCookie("tc_page_counter"), 10);
      pages_viewed++;
      tC.setCookie("tc_page_counter", pages_viewed, 0, "/");
    }
  })();
  tC.inclusion_s_code_1 =
    "/* SiteCatalyst code version: H.24.3.\n" +
    "Copyright 1996-2012 Adobe, Inc. All Rights Reserved\n" +
    "More info available at http://www.omniture.com */\n" +
    "/************************ ADDITIONAL FEATURES ************************\n" +
    "     Plugins\n" +
    "*/\n" +
    ' var s_account="aramisautoprod"\n' +
    '//alert("from s_code.js, s_account:"+s_account);\n' +
    "var s=s_gi(s_account)\n" +
    "/************************** CONFIG SECTION **************************/\n" +
    "/* You may add or alter any code config here. */\n" +
    's.charSet="ISO8859-1"\n' +
    "/* Conversion Config */\n" +
    's.currencyCode="EUR"\n' +
    "/* Link Tracking Config */\n" +
    "s.trackDownloadLinks=true\n" +
    "s.trackExternalLinks=true\n" +
    "s.trackInlineStats=true\n" +
    's.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"\n' +
    's.linkInternalFilters="javascript:,aramisauto.com,aramis-occasions.com,repriseillico.com,reprise-illico.com,lebonchoixauto.com"\n' +
    "s.linkLeaveQueryString=false\n" +
    's.linkTrackVars="None"\n' +
    's.linkTrackEvents="None"\n' +
    "/* Plugin Config */\n" +
    "s.usePlugins=true\n" +
    "\n" +
    's._extraSearchEngines="voila.fr|rdata,kw|Voila>rechercher.aliceadsl.fr|qs|Aliceadsl.fr>toile.com|query,q|Toile du Quebec"\n' +
    's._channelDomain="Social Media|facebook.com,twitter.com,t.co,myspace.com,plus.google.com,plus.url.google.com,youtube.com,dailymotion.com,flickr.com,digg.com,del.icio.us,blogger.com,over-blog.com,skyrock.com,typepad.fr,wordpress.com,viadeo.com,linkedin.com"\n' +
    's._channelParameter="RSS|rss"\n' +
    's._channelPattern="Emailing|EM>Affiliates|AF>Comparateur|CO>Partners|PA>Paid Search|PS>Display|DI>Retargeting|RE>Social Media|SM>Partenaires online|PR>Newsletter Prospect|WP>Newsletter Client|WC"\n' +
    "\n" +
    "function s_doPlugins(s) {\n" +
    " /* Add calls to plugins here */\n" +
    " \n" +
    " /* Channel Manager */\n" +
    "\n" +
    " s.channelManager('cmpid');\n" +
    "\n" +
    " /* separating brands from Organic Search */\n" +
    "        if (s._channel == 'Natural Search') {\n" +
    "            var marque = new Array('arami','arrami');\n" +
    "            var i;\n" +
    "            for (i = 0; i < marque.length; i++) {\n" +
    '                if (s._keywords.indexOf(marque[i], 0) > -1) { s._channel = "Organic Brand"; }\n' +
    "            }\n" +
    "        }\n" +
    "\n" +
    " /* separating brands from Paid Search */\n" +
    "        if (s._channel == 'Paid Search') {\n" +
    "            var marque = new Array('arami','arrami');\n" +
    "            var i;\n" +
    "            for (i = 0; i < marque.length; i++) {\n" +
    '                if (s._keywords.indexOf(marque[i], 0) > -1) { s._channel = "Paid Brand"; }\n' +
    "            }\n" +
    "        }\n" +
    "        if (s._channel == 'Natural Search') {\n" +
    "            s._campaign = 'SEO:' + s._partner + ':' + s._keywords;\n" +
    "        }\n" +
    "        if (s._channel == 'Organic Brand') {\n" +
    "            s._campaign = 'SEOBrand:' + s._partner + ':' + s._keywords;\n" +
    "        }\n" +
    "        if (s._channel == 'Paid Brand') {\n" +
    "            s._campaign = 'SEMBrand:' + s._partner + ':' + s._keywords;\n" +
    "        }\n" +
    "\n" +
    "        if (s._channel == 'Other Natural Referrers' || s._channel == 'Affiliates' || s._channel == 'Display' || s._channel == 'Partners' || s._channel == 'Social Media' || s._channel == 'Comparateur' || s._channel == 'Retargeting')\n" +
    '              s._partner = s._channel + ":" + s._referringDomain;\n' +
    "        if (s._channel == 'Emailing')\n" +
    "            s._partner = s._channel;\n" +
    "\n" +
    "        if (s._channel == 'Other Natural Referrers') {\n" +
    "              s._campaign = 'ref:' + s._referringDomain;\n" +
    '                if (s._referringDomain.indexOf("mail",0)>-1) {\n' +
    "                s._partner = 'webmail';\n" +
    "                s._campaign = 'ref:webmail';\n" +
    "            }\n" +
    '                if ((s._referringDomain.indexOf("search",0)>-1)||(s._referringDomain.indexOf("recherche",0)>-1)) {\n' +
    "              s._channel = 'Natural Search'\n" +
    "                s._partner = 'Moteur inconnu';\n" +
    "                s._campaign = 'SEO:' + s._referringDomain;\n" +
    "            }            \n" +
    "        }\n" +
    "\n" +
    "       /* changing the channel names */\n" +
    "       if (s._channel == 'Paid Search') {s._channel=\"SEM\";}\n" +
    "       if (s._channel == 'Natural Search') {s._channel=\"SEO\";}\n" +
    "\n" +
    "        /*Stacking tracking codes*/\n" +
    "        if (s._campaign == 'n/a') {\n" +
    "            s.stackedTrackingCodes = s.crossVisitParticipation('[' + s._channel + ']', 's_stc', '90', '5', '>', 'event2');\n" +
    "        }\n" +
    "        else { s.stackedTrackingCodes = s.crossVisitParticipation(s._campaign, 's_stc', '90', '5', '>', 'event2'); }\n" +
    "\n" +
    "        /*Stacking Channels*/\n" +
    "        s.stackedChannels = s.crossVisitParticipation(s._channel, 's_schan', '90', '5', '>', 'event2');\n" +
    "\n" +
    "        /*Stacking Keywords*/\n" +
    "        if (s._keywords) {\n" +
    "            if (s._keywords == 'n/a') { s.stackedKeywords = s.crossVisitParticipation('[' + s._channel + ']', 's_skw', '90', '5', '>', 'purchase'); }\n" +
    "            else { s.stackedKeywords = s.crossVisitParticipation(s._keywords, 's_skw', '90', '5', '>', 'event2'); }\n" +
    "        }\n" +
    "\n" +
    " /* variables set up */\n" +
    "        s.campaign = s._campaign;\n" +
    "        s.eVar21 = s._channel;\n" +
    "        s.eVar22 = s._partner;\n" +
    "        s.eVar23 = s._keywords;\n" +
    "        s.eVar24 = s._referringDomain;\n" +
    "        s.eVar25 = s.stackedTrackingCodes\n" +
    "        s.eVar26 = s.stackedChannels\n" +
    "        s.eVar27 = s.stackedKeywords\n" +
    "\n" +
    " /* Internal Campaigns */ \n" +
    " if(!s.eVar3) {\n" +
    "  s.eVar3=s.getQueryParam('intcmp');\n" +
    " }\n" +
    ' s.eVar3=s.getValOnce(s.eVar3,"s_evar3",0)\n' +
    "\n" +
    "    /* Copy search area to eVar */\n" +
    "    if(s.prop6){\n" +
    "        s.eVar6=s.prop6\n" +
    "\n" +
    "        /* Set de-duped onsite search event */\n" +
    "        var t_search=s.getValOnce(s.eVar6,'ev6',0)\n" +
    "        if(t_search)\n" +
    "            s.events=s.apl(s.events,'event10',',',0)\n" +
    "    }\n" +
    "\n" +
    " /* clickPast */\n" +
    " s.clickPast(s.eVar21,'event14','event15');\n" +
    " \n" +
    " /* Duplicate dynamically props and eVars */\n" +
    "\n" +
    ' if (s.prop1) s.eVar28="D=c1";\n' +
    ' if (s.prop2) s.eVar2="D=c2";\n' +
    ' if (s.prop3) s.eVar1="D=c3";\n' +
    ' if (s.prop5) s.eVar5="D=c5";\n' +
    ' if (s.prop6) s.eVar6="D=c6";\n' +
    ' if (s.prop7) s.eVar8="D=c7";\n' +
    ' if (s.prop8) s.eVar7="D=c8";\n' +
    ' if (s.prop9) s.eVar9="D=c9";\n' +
    ' if (s.prop10) s.eVar10="D=c10";\n' +
    ' if (s.prop11) s.eVar11="D=c11";\n' +
    ' if (s.prop12) s.eVar12="D=c12";\n' +
    ' if (s.prop13) s.eVar13="D=c13";\n' +
    ' if (s.prop17) s.eVar17="D=c17";\n' +
    ' if (s.prop18) s.eVar18="D=c18";\n' +
    ' if (s.prop19) s.eVar19="D=c19";\n' +
    ' if (s.prop35) s.eVar35="D=c35";\n' +
    ' if ((s.prop17)&&(s.prop18)) s.prop20=s.eVar20=\'D=c3+":"+c17+":"+c18\';\n' +
    " \n" +
    "\n" +
    "}\n" +
    "s.doPlugins=s_doPlugins\n" +
    "/************************** PLUGINS SECTION *************************/\n" +
    "/* You may insert any plugins you wish to use here.                 */\n" +
    "\n" +
    "/*\n" +
    "* Plugin: getQueryParam 2.4 Custom FR\n" +
    "*/\n" +
    's.getQueryParam = new Function("p", "d", "u", "h", ""\n' +
    "+ \"var s=this,v='',i,j,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.loca\"\n" +
    "+ \"tion);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0\"\n" +
    "+ \"?p.length:i;t=s.p_gpv(p.substring(0,i),u+'',h);if(t){t=t.indexOf('#\"\n" +
    "+ \"')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substrin\"\n" +
    '+ "g(i==p.length?i:i+1)}return v");\n' +
    's.p_gpv = new Function("k", "u", "h", ""\n' +
    "+ \"var s=this,v='',q;j=h==1?'#':'?';i=u.indexOf(j);if(k&&i>-1){q=u.sub\"\n" +
    "+ \"string(i+1);v=s.pt(q,'&','p_gvf',k)}return v\");\n" +
    's.p_gvf = new Function("t", "k", ""\n' +
    "+ \"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T\"\n" +
    '+ "rue\':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase()){try{v=de"\n' +
    "+ \"codeURI(v);}catch(err){v=unescape(v);} v=s.rep(v,'+',' ');return v;}}return''\");\n" +
    "/*\n" +
    " * Plugin: getValOnce_v1.0\n" +
    " */\n" +
    's.getValOnce=new Function("v","c","e",""\n' +
    "+\"var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c\"\n" +
    '+");if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return"\n' +
    "+\" v==k?'':v\");\n" +
    "/*\n" +
    " * Utility Function: split v1.5 - split a string (JS 1.0 compatible)\n" +
    " */\n" +
    's.split=new Function("l","d",""\n' +
    '+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"\n' +
    '+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");\n' +
    "/*\n" +
    " * Plugin Utility: apl v1.1\n" +
    " */\n" +
    's.apl=new Function("L","v","d","u",""\n' +
    "+\"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a.\"\n" +
    '+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"\n' +
    '+"e()));}}if(!m)L=L?L+d+v:v;return L");\n' +
    "/*                                                                  \n" +
    "* Plugin: clickPast - version 1.0\n" +
    "*/\n" +
    's.clickPast=new Function("scp","ct_ev","cp_ev","cpc",""\n' +
    '+"var s=this,scp,ct_ev,cp_ev,cpc,ev,tct;if(s.p_fo(ct_ev)==1){if(!cpc)"\n' +
    "+\"{cpc='s_cpc';}ev=s.events?s.events+',':'';if(scp){s.events=ev+ct_ev\"\n" +
    '+";s.c_w(cpc,1,0);}else{if(s.c_r(cpc)>=1){s.events=ev+cp_ev;s.c_w(cpc"\n' +
    '+",0,0);}}}");\n' +
    's.p_fo=new Function("n",""\n' +
    '+"var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]="\n' +
    '+"new Object;return 1;}else {return 0;}");\n' +
    "/*\n" +
    " * channelManager v2.55 - Tracking External Traffic\n" +
    " */\n" +
    's.channelManager=new Function("a","b","c","d","e","f",""\n' +
    '+"var s=this,A,B,g,l,m,p,q,P,h,k,u,S,i,O,T,j,r,t,D,E,F,G,H,N,U,v=0,X,"\n' +
    '+"Y,W,n=new Date;n.setTime(n.getTime()+1800000);if(e){v=1;if(s.c_r(e)"\n' +
    '+")v=0;if(!s.c_w(e,1,n))s.c_w(e,1,0);if(!s.c_r(e))v=0;}g=s.referrer?s"\n' +
    '+".referrer:document.referrer;g=g.toLowerCase();if(!g)h=1;i=g.indexOf"\n' +
    "+\"('?')>-1?g.indexOf('?'):g.length;j=g.substring(0,i);k=s.linkInterna\"\n" +
    "+\"lFilters.toLowerCase();k=s.split(k,',');for(m=0;m<k.length;m++){B=j\"\n" +
    "+\".indexOf(k[m])==-1?'':g;if(B)O=B;}if(!O&&!h){p=g;U=g.indexOf('//');\"\n" +
    "+\"q=U>-1?U+2:0;Y=g.indexOf('/',q);r=Y>-1?Y:i;u=t=g.substring(q,r).toL\"\n" +
    "+\"owerCase();P='Other Natural Referrers';S=s.seList+'>'+s._extraSearc\"\n" +
    "+\"hEngines;if(d==1){j=s.repl(j,'oogle','%');j=s.repl(j,'ahoo','^');g=\"\n" +
    "+\"s.repl(g,'as_q','*');}A=s.split(S,'>');for(i=0;i<A.length;i++){D=A[\"\n" +
    "+\"i];D=s.split(D,'|');E=s.split(D[0],',');for(G=0;G<E.length;G++){H=j\"\n" +
    '+".indexOf(E[G]);if(H>-1){if(D[2])N=u=D[2];else N=t;if(d==1){N=s.repl"\n' +
    "+\"(N,'#',' - ');g=s.repl(g,'*','as_q');N=s.repl(N,'^','ahoo');N=s.rep\"\n" +
    "+\"l(N,'%','oogle');}i=s.split(D[1],',');for(k=0;k<i.length;k++){l=s.g\"\n" +
    "+\"etQueryParam(i[k],'',g).toLowerCase();if(l)break;}}}}}if(!O||f!='1'\"\n" +
    "+\"){O=s.getQueryParam(a,b);if(O){u=O;if(N)P='Paid Search';else P='Unk\"\n" +
    "+\"nown Paid Channel';}if(!O&&N){u=N;P='Natural Search';}}if(h==1&&!O&\"\n" +
    "+\"&v==1)u=P=t=p='Typed/Bookmarked';g=s._channelDomain;if(g){k=s.split\"\n" +
    "+\"(g,'>');for(m=0;m<k.length;m++){q=s.split(k[m],'|');r=s.split(q[1],\"\n" +
    "+\"',');S=r.length;for(T=0;T<S;T++){Y=r[T].toLowerCase();i=j.indexOf(Y\"\n" +
    "+\");if(i>-1)P=q[0];}}}g=s._channelParameter;if(g){k=s.split(g,'>');fo\"\n" +
    "+\"r(m=0;m<k.length;m++){q=s.split(k[m],'|');r=s.split(q[1],',');S=r.l\"\n" +
    '+"ength;for(T=0;T<S;T++){U=s.getQueryParam(r[T]);if(U)P=q[0];}}}g=s._"\n' +
    "+\"channelPattern;if(g){k=s.split(g,'>');for(m=0;m<k.length;m++){q=s.s\"\n" +
    "+\"plit(k[m],'|');r=s.split(q[1],',');S=r.length;for(T=0;T<S;T++){Y=r[\"\n" +
    '+"T].toLowerCase();i=O.toLowerCase();H=i.indexOf(Y);if(H==0)P=q[0];}}"\n' +
    "+\"}X=P+l+t;c=c?c:'c_m';if(c!='0')X=s.getValOnce(X,c,0);if(X){s._refer\"\n" +
    "+\"rer=p?p:'n/a';s._referringDomain=t?t:'n/a';s._partner=N?N:'n/a';s._\"\n" +
    "+\"campaignID=O?O:'n/a';s._campaign=u?u:'n/a';s._keywords=l?l:N?'Keywo\"\n" +
    "+\"rd Unavailable':'n/a';s._channel=P?P:'n/a';}\");\n" +
    "/* Top 130 - Grouped */\n" +
    's.seList = "altavista.co,altavista.de|q,r|AltaVista>.aol.,suche.aolsvc"\n' +
    '+ ".de|q,query|AOL>ask.jp,ask.co|q,ask|Ask>www.baidu.com|wd|Baidu>daum"\n' +
    '+ ".net,search.daum.net|q|Daum>google.,googlesyndication.com|q,as_q|Go"\n' +
    '+ "ogle>icqit.com|q|icq>bing.com|q|Microsoft Bing>myway.com|searchfor|"\n' +
    '+ "MyWay.com>naver.com,search.naver.com|query|Naver>netscape.com|query"\n' +
    '+ ",search|Netscape Search>reference.com|q|Reference.com>seznam|w|Sezn"\n' +
    '+ "am.cz>abcsok.no|q|Startsiden>tiscali.it,www.tiscali.co.uk|key,query"\n' +
    '+ "|Tiscali>virgilio.it|qs|Virgilio>yahoo.com,yahoo.co.jp|p,va|Yahoo!>"\n' +
    '+ "yandex|text|Yandex.ru>search.cnn.com|query|CNN Web Search>search.ea"\n' +
    '+ "rthlink.net|q|Earthlink Search>search.comcast.net|q|Comcast Search>"\n' +
    '+ "search.rr.com|qs|RoadRunner Search>optimum.net|q|Optimum Search";\n' +
    "/*\n" +
    " * Plugin Utility: Replace v1.0\n" +
    " */\n" +
    's.repl=new Function("x","o","n",""\n' +
    '+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."\n' +
    '+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");\n' +
    "/*\n" +
    "* Plug-in: crossVisitParticipation v1.7 - stacks values from\n" +
    "* specified variable in cookie and returns value\n" +
    "*/\n" +
    "\n" +
    's.crossVisitParticipation = new Function("v", "cn", "ex", "ct", "dl", "ev", "dv", ""\n' +
    "+ \"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var\"\n" +
    "+ \" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l\"\n" +
    '+ "ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"\n' +
    "+ \"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape(\"\n" +
    '+ "v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"\n' +
    "+ \";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=ar\"\n" +
    "+ \"ry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\\\"'\\\",'');arry\"\n" +
    "+ \"[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+\"\n" +
    '+ "5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len"\n' +
    '+ "gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date("\n' +
    '+ ").getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new"\n' +
    '+ " Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td."\n' +
    '+ "getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0"\n' +
    "+ \"]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',\"\n" +
    "+ \"front:'[',back:']',wrap:\\\"'\\\"});s.c_w(cn,data,e);var r=s.join(h,{deli\"\n" +
    "+ \"m:dl});if(ce)s.c_w(cn,'');return r;\");\n" +
    "/*\n" +
    " * s.join: 1.0 - s.join(v,p)\n" +
    " *\n" +
    " *  v - Array (may also be array of array)\n" +
    " *  p - formatting parameters (front, back, delim, wrap)\n" +
    " *\n" +
    " */\n" +
    "\n" +
    's.join = new Function("v","p",""\n' +
    "+\"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back\"\n" +
    "+\":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0\"\n" +
    "+\";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el\"\n" +
    '+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");\n' +
    "\n" +
    "/* WARNING: Changing any of the below variables will cause drastic\n" +
    "changes to how your visitor data is collected.  Changes should only be\n" +
    "made when instructed to do so by your account manager.*/\n" +
    's.visitorNamespace="aramisauto"\n' +
    's_trackingServer="metrics.aramisauto.com"\n' +
    "s.trackingServer=s_trackingServer\n" +
    "\n" +
    "/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/\n" +
    'var s_code=\'\',s_objectID;function s_gi(un,pg,ss){var c="s.version=\'H.24.3\';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function(\'var e;try{console.log(\\"\'+s.rep(s.rep(m,\\"\\\\n\\",\\"\\\\\\\\n\\"),\\""\n' +
    '+"\\\\\\"\\",\\"\\\\\\\\\\\\\\"\\")+\'\\");}catch(e){}\');tcf()};s.cls=function(x,c){var i,y=\'\';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){retur"\n' +
    "+\"n x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p\"\n" +
    "+\"<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toU\"\n" +
    "+\"pperCase():'';if(x){x=''+x;if(s.em==3)x=encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h\"\n" +
    "+\".substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=escape(''+x);x=s.rep(x,'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('\"\n" +
    "+\"%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x)\"\n" +
    "+\"{var s=this;if(x){x=s.rep(''+x,'+',' ');return s.em==3?decodeURIComponent(x):unescape(x)}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substri\"\n" +
    "+\"ng(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a\"\n" +
    "+\"=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var\"\n" +
    "+\" s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\\\"'+s.oun+'\\\");s.sa(\\\"'+s.un+'\\\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=unde\"\n" +
    "+\"fined){if(typeof(v)!='number')c+='s.'+k+'=\\\"'+s_fe(v)+'\\\";';else c+='s.'+k+'='+v+';'}}c+=\\\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\\\";return c};s.c_d='';\"\n" +
    '+"s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?pa"\n' +
    "+\"rseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.a\"\n" +
    "+\"pe(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd\"\n" +
    "+\"(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie\"\n" +
    "+\"=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s.\"\n" +
    '+"_in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if("\n' +
    "+\"x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return \"\n" +
    "+\"r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfs\"\n" +
    "+\"oe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\\\"onerror\\\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=thi\"\n" +
    '+"s,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet"\n' +
    "+\"('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=fun\"\n" +
    "+\"ction(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Obje\"\n" +
    "+\"ct,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p\"\n" +
    "+\"=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl\"\n" +
    '+"(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout(\'if(window"\n' +
    "+\".s_c_il)window.s_c_il['+s._in+'].mrq(\\\"'+un+'\\\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.\"\n" +
    "+\"s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\\\"'+un+'\\\");s.nrs--;if(!s.nrs)s.m_m(\\\"rr\\\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;if\"\n" +
    "+\"(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\\\"\\\\n\\\\t\\\"+s.epa(dl[dln]);s.logDebug(d)}im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s.wd.na\"\n" +
    "+\"me&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\\\"'+rs+'\\\" width=1 height=1 border=0 alt=\\\"\\\">'};s.gg\"\n" +
    "+\"=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s\"\n" +
    "+\"=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCas\"\n" +
    "+\"e();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\\\"/\\\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l\"\n" +
    "+\"=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.su\"\n" +
    "+\"bstring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f\"\n" +
    "+\"){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\\\"contextData\\\")k=\\\"c\\\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)\"\n" +
    "+\"&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)\"\n" +
    "+\"sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(s\"\n" +
    "+\"v)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=\"\n" +
    "+\"='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(\"\n" +
    "+\"0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv\"\n" +
    "+\"+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].tra\"\n" +
    "+\"ckEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.sub\"\n" +
    "+\"string(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';\"\n" +
    "+\"else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigra\"\n" +
    "+\"tionServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUp\"\n" +
    "+\"perCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='varia\"\n" +
    "+\"bleProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDep\"\n" +
    "+\"th')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connec\"\n" +
    "+\"tionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('\"\n" +
    "+\"c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else \"\n" +
    "+\"if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=\"\n" +
    "+\"='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=funct\"\n" +
    "+\"ion(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?\"\n" +
    "+\"t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=li\"\n" +
    "+\"f?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef'\"\n" +
    "+\",h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\\\"onclick\\\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true\"\n" +
    "+\"');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\\\"s\\\",\\\"var e;try{if(s.eo&&(s.eo.tagName||\"\n" +
    "+\"s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\\\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if\"\n" +
    "+\"(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.subs\"\n" +
    "+\"tring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toU\"\n" +
    "+\"pperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c\"\n" +
    "+\",n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\\\"\\\\r\\\",''),\"\n" +
    "+\"\\\"\\\\n\\\",''),\\\"\\\\t\\\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.s\"\n" +
    "+\"rc;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf('\"\n" +
    "+\",'+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&'\"\n" +
    "+\",'rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=functi\"\n" +
    "+\"on(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x i\"\n" +
    "+\"n s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q\"\n" +
    "+\"||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\\\"onload\\\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.leng\"\n" +
    '+"th;i++){o=s.d.links[i];oc=o.onclick?\\"\\"+o.onclick:\\"\\";if((oc.indexOf(\\"s_gs(\\")<0||oc.indexOf(\\".s_oc(\\")>=0)&&oc.indexOf(\\".tl(\\")<0)s.eh(o,\\"onclick\\",0,s.lc);}return r\');s.wds=function(){var s"\n' +
    "+\"=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'o\"\n" +
    "+\"nload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=\"\n" +
    "+\"100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,\"\n" +
    "+\"x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccoun\"\n" +
    "+\"tMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0\"\n" +
    "+\"?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substrin\"\n" +
    "+\"g(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in\"\n" +
    "+\"++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r\"\n" +
    "+\"._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\\\"m_\\\"+n;var s=s_c_il['+s._\"\n" +
    '+"in+\'],c=s[g+\\"_c\\"],m,x,f=0;if(!c)c=s.wd[\\"s_\\"+g+\\"_c\\"];if(c&&s_d)s[g]=new Function(\\"s\\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\\\\'s_\\\\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\\"m_\\"+n)){m."\n' +
    '+"_i=f=1;if((\\"\\"+x).indexOf(\\"function\\")>=0)x(s);else s.m_m(\\"x\\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f\');s.m_m=function(t,n,d,e){t=\'_\'+t;var s=this,i,x,m,f=\'_\'+t,r=0,u;if(s.m_"\n' +
    "+\"l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if\"\n" +
    "+\"(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.lengt\"\n" +
    "+\"h;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+\"\n" +
    "+\"1);n=n.substring(0,i)}else g=\\\"m_\\\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;\"\n" +
    "+\"b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\\\"'+i+'\\\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\\\"'+n+'\\\",\\\"'+g+'\\\"'+(e?',\\\"'+e+'\\\"':'')+')}';f2=b+'o.c++;if(!s.m\"\n" +
    "+\"axDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\\\"script\\\"\"\n" +
    "+\");if(o){o.type=\\\"text/javascript\\\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}r\"\n" +
    "+\"eturn o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};\"\n" +
    '+"s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo[\'!\'+k]){if(!r&&(k==\\"contextData\\"||k==\\"retrieveLightData\\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k]"\n' +
    "+\"[x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)f\"\n" +
    '+"or(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\\"d\\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.d"\n' +
    '+"lt,s.maxDelay)}else s.dll=0\');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250"\n' +
    "+\";s.dlt()};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.ge\"\n" +
    "+\"tYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='\"\n" +
    "+\"',code='',vb=new Object;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&Str\"\n" +
    "+\"ing.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Funct\"\n" +
    "+\"ion('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'\"\n" +
    "+\"Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.doc\"\n" +
    '+"umentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function(\'s\',\'tl\',\'var e,hp=0;try{s.b.addBehavior(\\"#default#homePage\\");hp=s.b.isHomePage(tl)?\\"Y\\":\\"N\\"}cat"\n' +
    "+\"ch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\\\"#default#clientCaps\\\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl\"\n" +
    "+\".length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight\"\n" +
    "+\"=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pag\"\n" +
    "+\"eURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,o\"\n" +
    "+\"c;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.ind\"\n" +
    "+\"exOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.\"\n" +
    "+\"linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.\"\n" +
    "+\"sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}\"\n" +
    "+\"else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s\"\n" +
    "+\".retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}else s.dl(vo);if(vo)s.voa(vb,1);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd\"\n" +
    "+\".s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.l\"\n" +
    "+\"ightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&\"\n" +
    "+\"&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[\"\n" +
    "+\"x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if\"\n" +
    "+\"(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLow\"\n" +
    "+\"erCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netsca\"\n" +
    "+\"pe6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netsc\"\n" +
    "+\"ape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s\"\n" +
    '+".ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i==\'%"\n' +
    "+\"C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,v\"\n" +
    '+"isitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,"\n' +
    "+\"retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.\"\n" +
    "+\"vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.\"\n" +
    "+\"vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaE\"\n" +
    "+\"nabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCo\"\n" +
    '+"okieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlin"\n' +
    "+\"eStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=\"\n" +
    '+"pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){s_gi(\\"_\\",1,1).co(o)};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=functio"\n' +
    '+"n(un){s_gi(un,1).t()}}",\n' +
    "w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';\n" +
    'w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"\n' +
    '+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");\n' +
    'w.s_jn=new Function("a","d","var x=\'\',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");\n' +
    'w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");\n' +
    "w.s_d=new Function(\"x\",\"var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d\"\n" +
    "+\"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(\"\n" +
    "+\"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x\");\n" +
    'w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,\'\\\\\\\\\',\'\\\\\\\\\\\\\\\\\'),\'\\"\',\'\\\\\\\\\\"\'),\\"\\\\n\\",\\"\\\\\\\\n\\")");\n' +
    "w.s_fa=new Function(\"f\",\"var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\\\",\\\"';else if((\\\"\\\\n\\\\r\\\\t \\\").indexOf(c)<0)a+=c;s++}return a?'\\\"'+a+'\\\"':\"\n" +
    '+"a");\n' +
    "w.s_ft=new Function(\"c\",\"c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i\"\n" +
    "+\"f(h==q&&!x)q='';if(h=='\\\\\\\\')x=x?0:1;else x=0}else{if(h=='\\\"'||h==\\\"'\\\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\\\"'+s_fe(c.substring(o+1,e))+'\\\")\"\n" +
    "+\"'+c.substring(e+1);s=c.indexOf('=function(')}return c;\");\n" +
    'c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf(\'Opera\')>=0||u.indexOf(\'Opera\')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c=\'s_c\';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}\n' +
    "function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()";
  tC.inclusion_fbds_1 =
    "/*1421201436,,JIT Construction: v1561259,en_US*/\n" +
    "\n" +
    "/**\n" +
    " * Copyright Facebook Inc.\n" +
    " *\n" +
    " * Licensed under the Apache License, Version 2.0\n" +
    " * http://www.apache.org/licenses/LICENSE-2.0\n" +
    " */\n" +
    "try {(function(a,b,c,d){var e=a._fbq||(a._fbq=[]);if(e.push!==Array.prototype.push)return;var f=/^\\d+$/,g='https://www.facebook.com/tr/',h={},i=[],j=c.href,k=b.referrer;function l(u){var v=[];for(var w=0,x=u.length;w<x;w++)v.push(u[w][0]+'='+encodeURIComponent(u[w][1]));return v.join('&');}function m(u,v){var w=function(){if(u.detachEvent){u.detachEvent('onload',w);}else u.onload=null;v();};if(u.attachEvent){u.attachEvent('onload',w);}else u.onload=w;}function n(u,v){var w='fb'+Math.random().toString().replace('.',''),x=b.createElement('form');x.method='post';x.action=u;x.target=w;x.acceptCharset='utf-8';x.style.display='none';var y=!!(a.attachEvent&&!a.addEventListener),z=y?'<iframe name=\"'+w+'\">':'iframe',aa=b.createElement(z);aa.src='javascript:false';aa.id=w;aa.name=w;x.appendChild(aa);m(aa,function(){for(var ba=0,ca=v.length;ba<ca;ba++){var da=b.createElement('input');da.name=v[ba][0];da.value=v[ba][1];x.appendChild(da);}m(aa,function(){x.parentNode.removeChild(x);});x.submit();});b.body.appendChild(x);}h.addPixelId=function(u){i.push(u);};h.track=function(u,v){var w=typeof u;if(w!=='string'&&w!=='number')return false;if(f.test(u)){o(null,u,v);return true;}for(var x=0,y=i.length;x<y;x++)o(i[x],u,v);return i.length>0;};function o(u,v,w){var x=[];x.push(['id',u]);x.push(['ev',v]);x.push(['dl',j]);x.push(['rl',k]);x.push(['ts',new Date().valueOf()]);if(w&&typeof w==='object')for(var y in w)if(w.hasOwnProperty(y)){var z=w[y],aa=(z===null)?'null':typeof z;if(aa in {number:1,string:1,boolean:1}){x.push(['cd['+encodeURIComponent(y)+']',z]);}else if(aa==='object'){z=(typeof JSON==='undefined')?String(z):JSON.stringify(z);x.push(['cd['+encodeURIComponent(y)+']',z]);}}var ba=l(x);if(1024>(g+'?'+ba).length){var ca=new Image();ca.src=g+'?'+ba;}else n(g,x);}var p=function(u){if(Object.prototype.toString.call(u)!=='[object Array]')return false;var v=u.shift();if(!v)return false;var w=h[v];if(typeof w!=='function')return false;if(a._fbds){var x=a._fbds.pixelId;if(f.test(x)){i.push(x);delete a._fbds.pixelId;}}return w.apply(h,u);};for(var q=0,r=e.length;q<r;++q)p(e[q]);e.push=p;if(e.disablePushState===true)return;if(!d.pushState||!d.replaceState)return;var s=function(){k=j;j=c.href;e.push(['track','PixelInitialized']);},t=function(u,v,w){var x=u[v];u[v]=function(){var y=x.apply(this,arguments);w.apply(this,arguments);return y;};};t(d,'pushState',s);t(d,'replaceState',s);a.addEventListener('popstate',s,false);})(window,document,location,history);} catch (e) {new Image().src=\"https:\\/\\/www.facebook.com\\/\" + 'common/scribe_endpoint.php?c=jssdk_error&m='+encodeURIComponent('{\"error\":\"LOAD\", \"extra\": {\"name\":\"'+e.name+'\",\"line\":\"'+(e.lineNumber||e.line)+'\",\"script\":\"'+(e.fileName||e.sourceURL||e.script)+'\",\"stack\":\"'+(e.stackTrace||e.stack)+'\",\"revision\":\"1561259\",\"message\":\"'+e.message+'\"}}');}";
  tC.inclusion_fbds_2 =
    "/*1439981375,,JIT Construction: v1891909,en_US*/\n" +
    "\n" +
    "/**\n" +
    " * Copyright Facebook Inc.\n" +
    " *\n" +
    " * Licensed under the Apache License, Version 2.0\n" +
    " * http://www.apache.org/licenses/LICENSE-2.0\n" +
    " */\n" +
    "try {(function(a,b,c,d){var e=a._fbq||(a._fbq=[]);if(e.push!==Array.prototype.push)return;var f=/^\\d+$/,g='https://www.facebook.com/tr/',h={},i=[],j=c.href,k=b.referrer,l=a.top!==a;function m(v){var w=[];for(var x=0,y=v.length;x<y;x++)w.push(v[x][0]+'='+encodeURIComponent(v[x][1]));return w.join('&');}function n(v,w){var x=function(){if(v.detachEvent){v.detachEvent('onload',x);}else v.onload=null;w();};if(v.attachEvent){v.attachEvent('onload',x);}else v.onload=x;}function o(v,w){var x='fb'+Math.random().toString().replace('.',''),y=b.createElement('form');y.method='post';y.action=v;y.target=x;y.acceptCharset='utf-8';y.style.display='none';var z=!!(a.attachEvent&&!a.addEventListener),aa=z?'<iframe name=\"'+x+'\">':'iframe',ba=b.createElement(aa);ba.src='javascript:false';ba.id=x;ba.name=x;y.appendChild(ba);n(ba,function(){for(var ca=0,da=w.length;ca<da;ca++){var ea=b.createElement('input');ea.name=w[ca][0];ea.value=w[ca][1];y.appendChild(ea);}n(ba,function(){y.parentNode.removeChild(y);});y.submit();});b.body.appendChild(y);}h.addPixelId=function(v){i.push(v);};h.track=function(v,w){var x=typeof v;if(x!=='string'&&x!=='number')return false;if(f.test(v)){p(null,v,w);return true;}for(var y=0,z=i.length;y<z;y++)p(i[y],v,w);return i.length>0;};function p(v,w,x){var y=[];y.push(['id',v]);y.push(['ev',w]);y.push(['dl',j]);y.push(['rl',k]);y.push(['if',l]);y.push(['ts',new Date().valueOf()]);if(x&&typeof x==='object')for(var z in x)if(x.hasOwnProperty(z)){var aa=x[z],ba=aa===null?'null':typeof aa;if(ba in {number:1,string:1,boolean:1}){y.push(['cd['+encodeURIComponent(z)+']',aa]);}else if(ba==='object'){aa=typeof JSON==='undefined'?String(aa):JSON.stringify(aa);y.push(['cd['+encodeURIComponent(z)+']',aa]);}}var ca=m(y);if(2048>(g+'?'+ca).length){var da=new Image();da.src=g+'?'+ca;}else o(g,y);}var q=function(v){if(Object.prototype.toString.call(v)!=='[object Array]')return false;var w=v.shift();if(!w)return false;var x=h[w];if(typeof x!=='function')return false;if(a._fbds){var y=a._fbds.pixelId;if(f.test(y)){i.push(y);delete a._fbds.pixelId;}}return x.apply(h,v);};for(var r=0,s=e.length;r<s;++r)q(e[r]);e.push=q;if(e.disablePushState===true)return;if(!d.pushState||!d.replaceState)return;var t=function(){k=j;j=c.href;e.push(['track','PixelInitialized']);},u=function(v,w,x){var y=v[w];v[w]=function(){var z=y.apply(this,arguments);x.apply(this,arguments);return z;};};u(d,'pushState',t);u(d,'replaceState',t);a.addEventListener('popstate',t,false);})(window,document,location,history);} catch (e) {new Image().src=\"https:\\/\\/www.facebook.com\\/\" + 'common/scribe_endpoint.php?c=jssdk_error&m='+encodeURIComponent('{\"error\":\"LOAD\", \"extra\": {\"name\":\"'+e.name+'\",\"line\":\"'+(e.lineNumber||e.line)+'\",\"script\":\"'+(e.fileName||e.sourceURL||e.script)+'\",\"stack\":\"'+(e.stackTrace||e.stack)+'\",\"revision\":\"1891909\",\"message\":\"'+e.message+'\"}}');}";
  tC.inclusion_conversion_2 =
    '(function(){var g=this,h=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";\n' +
    'else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var m=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\\s\\xa0]+|[\\s\\xa0]+$/g,"")},n=function(a,b){return a<b?-1:a>b?1:0};var p=function(a){p[" "](a);return a};p[" "]=function(){};var q=function(a){var b=arguments.length;if(1==b&&"array"==h(arguments[0]))return q.apply(null,arguments[0]);for(var d={},c=0;c<b;c++)d[arguments[c]]=!0;return d};q("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));var v;a:{var w=g.navigator;if(w){var x=w.userAgent;if(x){v=x;break a}}v=""};var aa=-1!=v.indexOf("Opera")||-1!=v.indexOf("OPR"),y=-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE"),ba=-1!=v.indexOf("Edge"),z=-1!=v.indexOf("Gecko")&&!(-1!=v.toLowerCase().indexOf("webkit")&&-1==v.indexOf("Edge"))&&!(-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE"))&&-1==v.indexOf("Edge"),ca=-1!=v.toLowerCase().indexOf("webkit")&&-1==v.indexOf("Edge"),da=function(){var a=v;if(z)return/rv\\:([^\\);]+)(\\)|;)/.exec(a);if(ba)return/Edge\\/([\\d\\.]+)/.exec(a);if(y)return/\\b(?:MSIE|rv)[: ]([^\\);]+)(\\)|;)/.exec(a);\n' +
    'if(ca)return/WebKit\\/(\\S+)/.exec(a)},A=function(){var a=g.document;return a?a.documentMode:void 0},C=function(){if(aa&&g.opera){var a=g.opera.version;return"function"==h(a)?a():a}var a="",b=da();b&&(a=b?b[1]:"");return y&&(b=A(),b>parseFloat(a))?String(b):a}(),D={},E=function(a){if(!D[a]){for(var b=0,d=m(String(C)).split("."),c=m(String(a)).split("."),e=Math.max(d.length,c.length),f=0;0==b&&f<e;f++){var k=d[f]||"",l=c[f]||"",r=RegExp("(\\\\d*)(\\\\D*)","g"),B=RegExp("(\\\\d*)(\\\\D*)","g");do{var t=r.exec(k)||\n' +
    '["","",""],u=B.exec(l)||["","",""];if(0==t[0].length&&0==u[0].length)break;b=n(0==t[1].length?0:parseInt(t[1],10),0==u[1].length?0:parseInt(u[1],10))||n(0==t[2].length,0==u[2].length)||n(t[2],u[2])}while(0==b)}D[a]=0<=b}},F=g.document,ea=F&&y?A()||("CSS1Compat"==F.compatMode?parseInt(C,10):5):void 0;var G;if(!(G=!z&&!y)){var H;if(H=y)H=9<=ea;G=H}G||z&&E("1.9.1");y&&E("9");var fa=function(a,b){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(void 0,a[d],d,a)};var ga=window;var ha=function(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent&&a.attachEvent("on"+b,d)};var I=function(a){return{visible:1,hidden:2,prerender:3,preview:4}[a.webkitVisibilityState||a.mozVisibilityState||a.visibilityState||""]||0},ia=function(a){var b;a.mozVisibilityState?b="mozvisibilitychange":a.webkitVisibilityState?b="webkitvisibilitychange":a.visibilityState&&(b="visibilitychange");return b},J=function(a,b){if(3==I(b))return!1;a();return!0},ja=function(a,b){if(!J(a,b)){var d=!1,c=ia(b),e=function(){if(!d&&J(a,b)){d=!0;var f=e;b.removeEventListener?b.removeEventListener(c,f,!1):b.detachEvent&&\n' +
    'b.detachEvent("on"+c,f)}};c&&ha(b,c,e)}};var K=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a};var ka=K("0.06"),la=K("0.2");var ma=/^true$/.test("false")?!0:!1;var na=function(a){this.b=[];this.a={};for(var b=0,d=arguments.length;b<d;++b)this.a[arguments[b]]=""},M=function(a,b,d){var c=L;if(d?c.a.hasOwnProperty(d)&&""==c.a[d]:1){var e;a:{try{var f=window.top.location.hash;if(f){var k=f.match(/\\bdeid=([\\d,]+)/);e=k&&k[1]||"";break a}}catch(l){}e=""}if(e=(e=e.match(new RegExp("\\\\b("+a.join("|")+")\\\\b")))&&e[0]||null)a=e;else a:{if(!(1E-4>Math.random())&&(e=Math.random(),e<b)){try{var r=new Uint16Array(1);window.crypto.getRandomValues(r);e=r[0]/65536}catch(B){e=\n' +
    'Math.random()}a=a[Math.floor(e*a.length)];break a}a=null}a&&""!=a&&(d?c.a.hasOwnProperty(d)&&(c.a[d]=a):c.b.push(a))}},N=function(a){var b=L;return b.a.hasOwnProperty(a)?b.a[a]:""},oa=function(){var a=L,b=a.b.concat([]);fa(a.a,function(a){""!=a&&b.push(a)});return b};var L,O="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_remarketing_only google_remarketing_for_search google_conversion_items google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_is_call google_conversion_page_url google_conversion_referrer_url".split(" "),\n' +
    'P=["google_conversion_first_time","google_conversion_snippets"];function Q(a){return null!=a?escape(a.toString()):""}function R(a){return null!=a?a.toString().substring(0,512):""}function S(a,b){var d=Q(b);if(""!=d){var c=Q(a);if(""!=c)return"&".concat(c,"=",d)}return""}function T(a){var b=typeof a;return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\\\\,").replace(/;/g,"\\\\;").replace(/=/g,"\\\\=")}\n' +
    'function pa(a){var b;if((a=a.google_custom_params)&&"object"==typeof a&&"function"!=typeof a.join){var d=[];for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];if(c&&"function"==typeof c.join){for(var e=[],f=0;f<c.length;++f){var k=T(c[f]);null!=k&&e.push(k)}c=0==e.length?null:e.join(",")}else c=T(c);(e=T(b))&&null!=c&&d.push(e+"="+c)}b=d.join(";")}else b="";return""==b?"":"&".concat("data=",encodeURIComponent(b))}\n' +
    'function U(a){return"number"!=typeof a&&"string"!=typeof a?"":Q(a.toString())}function qa(a){if(!a)return"";a=a.google_conversion_items;if(!a)return"";for(var b=[],d=0,c=a.length;d<c;d++){var e=a[d],f=[];e&&(f.push(U(e.value)),f.push(U(e.quantity)),f.push(U(e.item_id)),f.push(U(e.adwords_grouping)),f.push(U(e.sku)),b.push("("+f.join("*")+")"))}return 0<b.length?"&item="+b.join(""):""}\n' +
    'function ra(a,b,d){var c=[];if(a){var e=a.screen;e&&(c.push(S("u_h",e.height)),c.push(S("u_w",e.width)),c.push(S("u_ah",e.availHeight)),c.push(S("u_aw",e.availWidth)),c.push(S("u_cd",e.colorDepth)));a.history&&c.push(S("u_his",a.history.length))}d&&"function"==typeof d.getTimezoneOffset&&c.push(S("u_tz",-d.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&c.push(S("u_java",b.javaEnabled())),b.plugins&&c.push(S("u_nplug",b.plugins.length)),b.mimeTypes&&c.push(S("u_nmime",b.mimeTypes.length)));\n' +
    'return c.join("")}function V(a,b,d,c){var e="";if(b){var f;if(a.top==a)f=0;else{var k=a.location.ancestorOrigins;if(k)f=k[k.length-1]==a.location.origin?1:2;else{k=a.top;try{var l;if(l=!!k&&null!=k.location.href)c:{try{p(k.foo);l=!0;break c}catch(r){}l=!1}f=l}catch(B){f=!1}f=f?1:2}}l="";l=d?d:1==f?a.top.location.href:a.location.href;e+=S("frm",f);e+=S("url",R(l));e+=S("ref",R(c||b.referrer))}return e}\n' +
    'function W(a){return"42631044"==(L?N(2):"")||a&&a.location&&a.location.protocol&&"https:"==a.location.protocol.toString().toLowerCase()?"https:":"http:"}function X(a){return a.google_remarketing_only?"googleads.g.doubleclick.net":a.google_conversion_domain||"www.googleadservices.com"}\n' +
    'function sa(a,b,d,c){var e="/?";"landing"==c.google_conversion_type&&(e="/extclk?");var e=W(a)+"//"+X(c)+"/pagead/"+[c.google_remarketing_only?"viewthroughconversion/":"conversion/",Q(c.google_conversion_id),e,"random=",Q(c.google_conversion_time)].join(""),f;a:{f=c.google_conversion_language;if(null!=f){f=f.toString();if(2==f.length){f=S("hl",f);break a}if(5==f.length){f=S("hl",f.substring(0,2))+S("gl",f.substring(3,5));break a}}f=""}a=[S("cv",c.google_conversion_js_version),S("fst",c.google_conversion_first_time),\n' +
    'S("num",c.google_conversion_snippets),S("fmt",c.google_conversion_format),S("value",c.google_conversion_value),S("currency_code",c.google_conversion_currency),S("label",c.google_conversion_label),S("oid",c.google_conversion_order_id),S("bg",c.google_conversion_color),f,S("guid","ON"),S("disvt",c.google_disable_viewthrough),S("is_call",c.google_is_call),S("eid",oa().join()),qa(c),ra(a,b,c.google_conversion_date),pa(c),V(a,d,c.google_conversion_page_url,c.google_conversion_referrer_url),c.google_remarketing_for_search&&\n' +
    '!c.google_conversion_domain?"&srr=n":""].join("");return e+a}function ta(a){return{ar:1,bg:1,cs:1,da:1,de:1,el:1,en_AU:1,en_US:1,en_GB:1,es:1,et:1,fi:1,fr:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,iw:1,ja:1,ko:1,lt:1,nl:1,no:1,pl:1,pt_BR:1,pt_PT:1,ro:1,ru:1,sk:1,sl:1,sr:1,sv:1,th:1,tl:1,tr:1,vi:1,zh_CN:1,zh_TW:1}[a]?a+".html":"en_US.html"}var ua=/Android ([01]\\.|2\\.[01])/i;\n' +
    'function Y(a,b,d,c){3!=c.google_conversion_format||c.google_remarketing_only||c.google_conversion_domain||L&&M("317150500 317150501 317150502 317150503 317150504 317150505".split(" "),ka,1);var e=L?N(1):"";b=sa(a,b,d,c);d=function(a,b,c){return\'<img height="\'+c+\'" width="\'+b+\'" border="0" alt="" src="\'+a+\'" />\'};return 0==c.google_conversion_format&&null==c.google_conversion_domain?\'<a href="\'+(W(a)+"//services.google.com/sitestats/"+ta(c.google_conversion_language)+"?cid="+Q(c.google_conversion_id))+\n' +
    '\'" target="_blank">\'+d(b,135,27)+"</a>":1<c.google_conversion_snippets||3==c.google_conversion_format?"317150501"==e||"317150502"==e||"317150503"==e||"317150504"==e||"317150505"==e?d(b,1,1)+(\'<script src="\'+b.replace(/(&|\\?)fmt=3(&|$)/,"$1fmt=4&adtest=on$2")+\'">\\x3c/script>\'):d(b,1,1):\'<iframe name="google_conversion_frame" title="Google conversion frame" width="\'+(2==c.google_conversion_format?200:300)+\'" height="\'+(2==c.google_conversion_format?26:13)+\'" src="\'+b+\'" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no">\'+\n' +
    'd(b.replace(/\\?random=/,"?frame=0&random="),1,1)+"</iframe>"}function va(){return new Image}function wa(a,b){var d=va;"function"===typeof a.opt_image_generator&&(d=a.opt_image_generator);d=d();b+=S("async","1");d.src=b;d.onload=function(){}}\n' +
    'function Z(a,b,d){var c;c=W(a)+"//www.google.com/ads/user-lists/"+[Q(d.google_conversion_id),"/?random=",Math.floor(1E9*Math.random())].join("");c+=[S("label",d.google_conversion_label),S("fmt","3"),V(a,b,d.google_conversion_page_url,d.google_conversion_referrer_url)].join("");wa(d,c)}\n' +
    'function xa(a){if("landing"==a.google_conversion_type||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough)return!1;a.google_conversion_date=new Date;a.google_conversion_time=a.google_conversion_date.getTime();a.google_conversion_snippets="number"==typeof a.google_conversion_snippets&&0<a.google_conversion_snippets?a.google_conversion_snippets+1:1;"number"!=typeof a.google_conversion_first_time&&(a.google_conversion_first_time=a.google_conversion_time);a.google_conversion_js_version=\n' +
    '"7";0!=a.google_conversion_format&&1!=a.google_conversion_format&&2!=a.google_conversion_format&&3!=a.google_conversion_format&&(a.google_conversion_format=1);L=new na(1,2);"https:"==W(ga)||ma||ua.test(navigator.userAgent)||L&&M(["42631043","42631044"],la,2);return!0}function ya(a){for(var b=0;b<O.length;b++)a[O[b]]=null}function za(a){for(var b={},d=0;d<O.length;d++)b[O[d]]=a[O[d]];for(d=0;d<P.length;d++)b[P[d]]=a[P[d]];return b}\n' +
    'function Aa(a){var b=document.getElementsByTagName("head")[0];b||(b=document.createElement("head"),document.getElementsByTagName("html")[0].insertBefore(b,document.getElementsByTagName("body")[0]));var d=document.createElement("script");d.src=W(window)+"//"+X(a)+"/pagead/conversion_debug_overlay.js";b.appendChild(d)};(function(a,b,d){if(a)if(null!=/[\\?&;]google_debug/.exec(document.URL))Aa(a);else{try{if(xa(a))if(3==I(d)){var c=za(a),e="google_conversion_"+Math.floor(1E9*Math.random());d.write(\'<span id="\'+e+\'"></span>\');ja(function(){try{var f=d.getElementById(e);f&&(f.innerHTML=Y(a,b,d,c),c.google_remarketing_for_search&&!c.google_conversion_domain&&Z(a,d,c))}catch(l){}},d)}else d.write(Y(a,b,d,a)),a.google_remarketing_for_search&&!a.google_conversion_domain&&Z(a,d,a)}catch(f){}ya(a)}})(window,navigator,document);}).call(this);';
  tC.inclusion_fbds_3 =
    "/*1449535901,,JIT Construction: v2078345,en_US*/\n" +
    "\n" +
    "/**\n" +
    " * Copyright Facebook Inc.\n" +
    " *\n" +
    " * Licensed under the Apache License, Version 2.0\n" +
    " * http://www.apache.org/licenses/LICENSE-2.0\n" +
    " */\n" +
    "try {(function(a,b,c,d){var e=a._fbq||(a._fbq=[]);if(e.push!==Array.prototype.push)return;var f=/^\\d+$/,g='https://www.facebook.com/tr/',h={},i=[],j=c.href,k=b.referrer,l=a.top!==a;function m(v){var w=[];for(var x=0,y=v.length;x<y;x++)w.push(v[x][0]+'='+encodeURIComponent(v[x][1]));return w.join('&');}function n(v,w){var x=function(){if(v.detachEvent){v.detachEvent('onload',x);}else v.onload=null;w();};if(v.attachEvent){v.attachEvent('onload',x);}else v.onload=x;}function o(v,w){var x='fb'+Math.random().toString().replace('.',''),y=b.createElement('form');y.method='post';y.action=v;y.target=x;y.acceptCharset='utf-8';y.style.display='none';var z=!!(a.attachEvent&&!a.addEventListener),aa=z?'<iframe name=\"'+x+'\">':'iframe',ba=b.createElement(aa);ba.src='javascript:false';ba.id=x;ba.name=x;y.appendChild(ba);n(ba,function(){for(var ca=0,da=w.length;ca<da;ca++){var ea=b.createElement('input');ea.name=w[ca][0];ea.value=w[ca][1];y.appendChild(ea);}n(ba,function(){y.parentNode.removeChild(y);});y.submit();});b.body.appendChild(y);}h.addPixelId=function(v){i.push(v);};h.track=function(v,w){var x=typeof v;if(x!=='string'&&x!=='number')return false;if(f.test(v)){p(null,v,w);return true;}for(var y=0,z=i.length;y<z;y++)p(i[y],v,w);return i.length>0;};function p(v,w,x){var y=[];y.push(['id',v]);y.push(['ev',w]);y.push(['dl',j]);y.push(['rl',k]);y.push(['if',l]);y.push(['ts',new Date().valueOf()]);if(x&&typeof x==='object')for(var z in x)if(x.hasOwnProperty(z)){var aa=x[z],ba=aa===null?'null':typeof aa;if(ba in {number:1,string:1,boolean:1}){y.push(['cd['+encodeURIComponent(z)+']',aa]);}else if(ba==='object'){aa=typeof JSON==='undefined'?String(aa):JSON.stringify(aa);y.push(['cd['+encodeURIComponent(z)+']',aa]);}}var ca=m(y);if(2048>(g+'?'+ca).length){var da=new Image();da.src=g+'?'+ca;}else o(g,y);}var q=function(v){if(Object.prototype.toString.call(v)!=='[object Array]')return false;var w=v.shift();if(!w)return false;var x=h[w];if(typeof x!=='function')return false;if(a._fbds){var y=a._fbds.pixelId;if(f.test(y)){i.push(y);delete a._fbds.pixelId;}}return x.apply(h,v);};for(var r=0,s=e.length;r<s;++r)q(e[r]);e.push=q;if(e.disablePushState===true)return;if(!d.pushState||!d.replaceState)return;var t=function(){k=j;j=c.href;e.push(['track','PixelInitialized']);},u=function(v,w,x){var y=v[w];v[w]=function(){var z=y.apply(this,arguments);x.apply(this,arguments);return z;};};u(d,'pushState',t);u(d,'replaceState',t);a.addEventListener('popstate',t,false);})(window,document,location,history);} catch (e) {new Image().src=\"https:\\/\\/www.facebook.com\\/\" + 'common/scribe_endpoint.php?c=jssdk_error&m='+encodeURIComponent('{\"error\":\"LOAD\", \"extra\": {\"name\":\"'+e.name+'\",\"line\":\"'+(e.lineNumber||e.line)+'\",\"script\":\"'+(e.fileName||e.sourceURL||e.script)+'\",\"stack\":\"'+(e.stackTrace||e.stack)+'\",\"revision\":\"2078345\",\"message\":\"'+e.message+'\"}}');}";
}
tC.inclusion_s_code_2 = "//UNDEFINED";
if (tC.getCookie("tc_mode_test") == 1) {
  (function () {
    var tc_testmodescriptexec = document.createElement("script");
    tc_testmodescriptexec.type = "text/javascript";
    tc_testmodescriptexec.src =
      "//manager.tagcommander.com/utils/test_mode_include.php?id=3&site=1995&type=exec&rand=" +
      Math.random() +
      "&version=94.03";
    (
      document.getElementsByTagName("body")[0] ||
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("script")[0].parentNode
    ).appendChild(tc_testmodescriptexec);
  })();
  (function () {
    setTimeout(function () {
      if (typeof top.tc_count !== "undefined") {
        top.tc_count++;
      } else {
        top.tc_count = 1;
      }
      var tc_newscript = document.createElement("script");
      tc_newscript.type = "text/javascript";
      tc_newscript.src =
        "//manager.tagcommander.com/utils/livetest/bookmarklet.php?r=" +
        Math.random() +
        "&nb=" +
        top.tc_count +
        "&container=1995!3&version=94.03";
      (
        document.getElementsByTagName("body")[0] ||
        document.getElementsByTagName("head")[0] ||
        document.getElementsByTagName("script")[0].parentNode
      ).appendChild(tc_newscript);
    }, 1000);
  })();
} else {
  if (tC.dedup.ValidRules("9")) {
    if (tC.getCookie("cookie_pub_optout") == "0") {
      tC.launchTag("9", "AMS V3 - Click + Site Tracking", "1099", "1995", "3");
      if (typeof tC.ams !== "object") {
        tC.ams = [];
      }
      tC.onDomReady(function () {
        tC.ams.page_name = tc_vars["page_name"];
        tC.ams.page_type = tc_vars["env_template"];
        tC.ams.channel = tC.getParamURL("utm_medium");
        tC.ams.source = tC.getParamURL("utm_source");
        tC.ams.campaign = tC.getParamURL("utm_content");
        tC.ams.medium = tC.getParamURL("");
        tC.ams.dns = "aramis.commander1.com";
        tC.ams.sbrand = [];
        tC.ams.sbrand[0] = "aramis";
        tC.ams.sbrand[1] = "";
        tC.ams.sbrand[2] = "";
        tC.ams.sbrand[3] = "";
        tC.ams.id_site = "1995";
        tC.ams.scriptElt1 = document.createElement("script");
        tC.ams.additional_params =
          "&pid=" +
          tc_vars["product_id"] +
          "&dclient=" +
          tc_maindomain +
          "&nvo=" +
          tc_vars["RefAramisouNVO_listemoteur_01-13"] +
          "&nvo_14=" +
          tc_vars["RefAramisouNVO_listemoteur_14-25"] +
          "&sresult=" +
          tc_vars["search_results_number"] +
          "&tcookie=" +
          tC.getCookie("TCID") +
          "&lead_id=" +
          tc_vars["user_id"];
        if (
          typeof tc_vars["list_product"] == "object" &&
          typeof JSON != "undefined"
        ) {
          tC.ams.additional_params +=
            "&plist=" +
            encodeURIComponent(JSON.stringify(tc_vars["list_product"]));
        }
        tC.ams.scriptElt1.id = "tc_script__1";
        tC.ams.scriptElt1.src = "//cdn.tagcommander.com/ams/ams_back.js";
        tC.ams.scriptElt1.async = true;
        tC.ams.scriptElt1.defer = "defer";
        (
          document.getElementsByTagName("head")[0] ||
          document.getElementsByTagName("body")[0] ||
          document.getElementsByTagName("script")[0].parentNode
        ).insertBefore(tC.ams.scriptElt1, null);
      });
    }
  }
  if (tC.dedup.ValidRules("573")) {
    if (tc_vars["page_name"] == "aa:RDV:confirmation") {
      if (tC.getCookie("cookie_stat_optout") == "0") {
        tC.launchTag(
          "573",
          "TagCommander OpportunitÃ© contre mesure",
          "1867",
          "1995",
          "3"
        );
        if (typeof tC.ams !== "object") {
          tC.ams = [];
        }
        if (typeof tC.ams.channel == "undefined") {
          tC.ams.channel = "";
        }
        if (typeof tC.ams.source == "undefined") {
          tC.ams.source = "";
        }
        tC.opportunite_name = "";
        tC.idorder_Aa = "";
        tC.sendAMS = [];
        if (
          tc_vars["events"]
            .toString()
            .toLowerCase()
            .indexOf("event8".toLowerCase()) != -1
        ) {
          if (
            tc_vars["page_name"]
              .toString()
              .toLowerCase()
              .indexOf("alerte:confirm".toLowerCase()) == -1
          ) {
            if (tc_vars["env_work"] == "prod") {
              if (
                tc_vars["type_vente"] == "vn" ||
                tc_vars["type_vente"] == "no"
              ) {
                tC.sendAMS.push("AMS V3 - Conv Opp VN");
                tC.idorder_Aa = tC.internalvars.oppvn;
              }
            }
          }
        }
        if (
          tc_vars["events"]
            .toString()
            .toLowerCase()
            .indexOf("event8".toLowerCase()) != -1
        ) {
          if (tc_vars["type_vente"] == "vo") {
            if (tc_vars["env_work"] == "prod") {
              tC.sendAMS.push("AMS V3 - Conv Opp VO");
              tC.idorder_Aa = tC.internalvars.oppvo;
            }
          }
        }
        if (
          tc_vars["events"]
            .toString()
            .toLowerCase()
            .indexOf("event8".toLowerCase()) != -1
        ) {
          if (tc_vars["env_work"] == "prod") {
            if (tc_vars["type_vente"] == "ri") {
              tC.sendAMS.push("AMS V3 - Conv Opp RI");
              tC.idorder_Aa = tC.internalvars.oppri;
            }
          }
        }
        if (
          tc_vars["events"]
            .toString()
            .toLowerCase()
            .indexOf("event8".toLowerCase()) != -1
        ) {
          if (
            tc_vars["page_name"]
              .toString()
              .toLowerCase()
              .indexOf("alerte:confirm".toLowerCase()) != -1
          ) {
            if (tc_vars["env_work"] == "prod") {
              tC.sendAMS.push("AMS V3 - Conv Opp_alerte");
              tC.idorder_Aa = tC.internalvars.oppalerte;
            }
          }
        }
        if (tc_vars["order_evaluation_id"] != "") {
          if (tc_vars["env_work"] == "prod") {
            tC.sendAMS.push("AMS V3 - Conv estimation");
            tC.idorder_Aa = tc_vars["order_evaluation_id"];
          }
        }
        if (tc_vars["page_name"] == "aa:aspageri:estimation:rdv:confirm") {
          if (tc_vars["env_work"] == "prod") {
            tC.sendAMS.push("AMS V3 - Conv rdv post estimation");
            tC.idorder_Aa = tc_random;
          }
        }
        if (
          tc_vars["page_name"] == "aa:RDV:confirmation" &&
          tc_vars["meeting_purpose"] == "Projet d'achat"
        ) {
          if (tc_vars["env_work"] == "prod") {
            tC.sendAMS.push("AMS V3 - Conv rdv seul vente");
            tC.idorder_Aa = tc_random;
          }
        }
        if (
          tc_vars["page_name"] == "aa:RDV:confirmation" &&
          tc_vars["meeting_purpose"] == "Offre de reprise pour ma voiture"
        ) {
          if (tc_vars["env_work"] == "prod") {
            tC.sendAMS.push("AMS V3 - Conv rdv seul reprise");
            tC.idorder_Aa = tc_random;
          }
        }
        if (
          tc_vars["page_name"] == "aa:RDV:confirmation" &&
          tc_vars["meeting_purpose"] ==
            "Projet d'achat avec offre de reprise pour ma voiture"
        ) {
          if (tc_vars["env_work"] == "prod") {
            tC.sendAMS.push("AMS V3 - Conv rdv seul mixte");
            tC.idorder_Aa = tc_random;
          }
        }
        if (
          tc_vars["page_name"] == "aa:RDV:confirmation" ||
          tc_vars["page_name"] == "aa:aspageri:estimation:rdv:confirm"
        ) {
          if (tc_vars["env_work"] == "prod") {
            tC.sendAMS.push("AMS V3 - Conv rdv global");
            tC.idorder_Aa = tc_random;
          }
        }
        if (tc_vars["page_name"] == "aa:webcallback:confirm") {
          if (tc_vars["env_work"] == "prod") {
            tC.sendAMS.push("AMS V3 - Conv webcallback");
            tC.idorder_Aa = tc_random;
          }
        }
        if (tc_vars["page_name"] == "aa:booking:confirm") {
          if (tc_vars["env_work"] == "prod") {
            tC.sendAMS.push("AMS V3 - Conv reservation");
            tC.idorder_Aa = tc_random;
          }
        }
        if (tc_vars["page_name"] == "aa:order:confirm") {
          if (tc_vars["env_work"] == "prod") {
            tC.sendAMS.push("AMS V3 - Conv commande");
            tC.idorder_Aa = tc_random;
          }
        }
        if (
          document.location
            .toString()
            .toLowerCase()
            .indexOf("aramisauto.com".toLowerCase()) != -1
        ) {
          if (tc_vars["env_work"] == "prod") {
            if (
              tc_vars["events"]
                .toString()
                .toLowerCase()
                .indexOf("event1".toLowerCase()) != -1
            ) {
              tC.sendAMS.push("AMS V3 - Conv nouveau compte");
              tC.idorder_Aa = tC.internalvars.nouveaucpte;
            }
          }
        }
        if (
          tc_vars["page_name"] == "aa:quote:funding" ||
          tC.internalvars.E_DevisLP == "1"
        ) {
          if (tc_vars["env_work"] == "prod") {
            tC.sendAMS.push("AMS V3 - Conv devis");
            tC.idorder_Aa = tc_vars["order_quotation_id"];
          }
        }
        if (
          document.location
            .toString()
            .toLowerCase()
            .indexOf("aramisauto.com".toLowerCase()) != -1
        ) {
          if (tc_vars["env_work"] == "prod") {
            if (
              tc_vars["events"]
                .toString()
                .toLowerCase()
                .indexOf("event1".toLowerCase()) != -1
            ) {
              if (tc_vars["type_vente"] != "ri") {
                tC.sendAMS.push("AMS V3 - Conv nouveau compte via vente");
                tC.idorder_Aa = tC.internalvars.nouveaucpteviavente;
              }
            }
          }
        }
        if (
          document.location
            .toString()
            .toLowerCase()
            .indexOf("aramisauto.com".toLowerCase()) != -1
        ) {
          if (tc_vars["env_work"] == "prod") {
            if (
              tc_vars["events"]
                .toString()
                .toLowerCase()
                .indexOf("event1".toLowerCase()) != -1
            ) {
              if (tc_vars["type_vente"] == "ri") {
                tC.sendAMS.push("AMS V3 - Conv nouveau compte via reprise");
                tC.idorder_Aa = tC.internalvars.nouveaucpteviarepris;
              }
            }
          }
        }
        if (
          tc_vars["page_name"]
            .toString()
            .toLowerCase()
            .indexOf("alerte:confirm".toLowerCase()) != -1
        ) {
          if (tc_vars["env_work"] == "prod") {
            tC.sendAMS.push("AMS V3 - Conv alerte");
            tC.idorder_Aa = tc_random;
          }
        }
        if (
          tc_vars["events"]
            .toString()
            .toLowerCase()
            .indexOf("event8".toLowerCase()) != -1
        ) {
          if (tc_vars["env_work"] == "prod") {
            if (tc_vars["QRI_intentionnistes"] == "oui") {
              tC.sendAMS.push("AMS V3 - Conv opp RA");
              tC.idorder_Aa = tC.internalvars.oppra;
            }
          }
        }
        for (var i = 0; i < tC.sendAMS.length; i++) {
          var opportunite_name = encodeURIComponent(tC.sendAMS[i]);
          tC.imageElt1 = document.createElement("img");
          tC.imageElt1.id = "tc_img_573_1";
          tC.imageElt1.src =
            "//contremesure.commander1.com/v3/?tcs=2587&opp_name=" +
            opportunite_name +
            "&opp_id=" +
            tc_vars["opportunity_id"] +
            "&oq_id=" +
            tc_vars["order_quotation_id"] +
            "&oe_id=" +
            tc_vars["order_evaluation_id"] +
            "&ua=" +
            tC.internalvars.ua +
            "&p=" +
            tc_vars["page_name"] +
            "&user_id=" +
            tc_vars["user_id"] +
            "&dev=" +
            tc_vars["env_channel"] +
            "&chn=" +
            tC.ams.channel +
            "&src=" +
            tC.ams.source +
            "&ref=" +
            tC.internalvars.tc_referrer +
            "&idorderams=" +
            tC.idorder_Aa +
            "&url2=" +
            encodeURI(tc_url) +
            "&rdm=" +
            tc_random;
          tC.imageElt1.border = "0";
          tC.imageElt1.width = "1";
          tC.imageElt1.height = "1";
          document.body.appendChild(tC.imageElt1);
        }
      }
    }
  }
  if (tC.dedup.ValidRules("35")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("aramisauto.com".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tC.getCookie("cookie_stat_optout") == "0") {
          if (tc_vars["env_work"] == "prod") {
            tC.launchTag("35", "AMS V3 - Get dedup cookie", "900", "1995", "3");
            tC.onDomReady(function () {
              var scriptElt1 = document.createElement("script");
              scriptElt1.id = "tc_script__1";
              scriptElt1.type = "text/javascript";
              scriptElt1.src = "//aramis.commander1.com/dg3/";
              if (typeof tC.dedup.cj_max != "undefined") {
                scriptElt1.src += "?limit=" + tC.dedup.cj_max;
              }
              scriptElt1.async = true;
              scriptElt1.defer = "defer";
              (
                document.getElementsByTagName("head")[0] ||
                document.getElementsByTagName("body")[0] ||
                document.getElementsByTagName("script")[0].parentNode
              ).insertBefore(scriptElt1, null);
            });
          }
        }
      }
    }
  }
  if (tC.dedup.ValidRules("209")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (
        tc_vars["page_name"]
          .toString()
          .toLowerCase()
          .indexOf("alerte:confirm".toLowerCase()) == -1
      ) {
        if (tC.getCookie("cookie_pub_optout") == "0") {
          if (tc_vars["env_work"] == "prod") {
            if (tc_vars["type_vente"] == "vn") {
              tC.launchTag("209", "AMS V3 - Conv Opp VN", "1097", "1995", "3");
              if (typeof tC.ams !== "object") {
                tC.ams = [];
              }
              tC.ams.idorder = tC.internalvars.oppvn;
              tC.ams.amount = "3";
              tC.ams.currency = "EUR";
              tC.ams.tc_rand = Math.random();
              tC.ams.additional_params =
                "&opp_id=" +
                tc_vars["opportunity_id"] +
                "&ref=" +
                tC.internalvars.tc_referrer +
                "mcon=" +
                "OPP_vente_online" +
                "&url2=" +
                encodeURI(tc_url) +
                "&order_type=" +
                "Opp_VN" +
                "&lead_id=" +
                tc_vars["user_id"] +
                "&user_type=" +
                tc_vars["user_status"] +
                "&tcookie=" +
                tC.getCookie("TCID");
              tC.pixelTrack.add(
                "//aramis.commander1.com/o3/?tcs=1995&idorder=" +
                  tC.ams.idorder +
                  "&amount=" +
                  tC.ams.amount +
                  "&currency=" +
                  tC.ams.currency +
                  tC.ams.additional_params +
                  "&rand=" +
                  tC.ams.tc_rand
              );
            }
          }
        }
      }
    }
  }
  if (tC.dedup.ValidRules("213")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["type_vente"] == "vo") {
          if (tc_vars["env_work"] == "prod") {
            tC.launchTag("213", "AMS V3 - Conv Opp VO", "1097", "1995", "3");
            if (typeof tC.ams !== "object") {
              tC.ams = [];
            }
            tC.ams.idorder = tC.internalvars.oppvo;
            tC.ams.amount = "4";
            tC.ams.currency = "EUR";
            tC.ams.additional_params =
              "&order_type=" +
              "Opp_VO" +
              "&user_type=" +
              tc_vars["user_status"] +
              "&mcon=" +
              "OPP_vente_online" +
              "&ref=" +
              tC.internalvars.tc_referrer +
              "&url2=" +
              encodeURI(tc_url) +
              "&lead_id=" +
              tc_vars["user_id"] +
              "&tcookie=" +
              tC.getCookie("TCID") +
              "&opp_id=" +
              tc_vars["opportunity_id"];
            tC.ams.tc_rand = Math.random();
            tC.pixelTrack.add(
              "//aramis.commander1.com/o3/?tcs=1995&idorder=" +
                tC.ams.idorder +
                "&amount=" +
                tC.ams.amount +
                "&currency=" +
                tC.ams.currency +
                tC.ams.additional_params +
                "&rand=" +
                tC.ams.tc_rand
            );
          }
        }
      }
    }
  }
  if (tC.dedup.ValidRules("211")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["env_work"] == "prod") {
          if (tc_vars["type_vente"] == "ri") {
            tC.launchTag("211", "AMS V3 - Conv Opp RI", "1097", "1995", "3");
            if (typeof tC.ams !== "object") {
              tC.ams = [];
            }
            tC.ams.idorder = tC.internalvars.oppri;
            tC.ams.amount = "2";
            tC.ams.currency = "EUR";
            tC.ams.additional_params =
              "&order_type=" +
              "Opp_RI" +
              "&device=" +
              tC.internalvars.ua +
              "&lead_id=" +
              tc_vars["user_id"] +
              "&user_type=" +
              tc_vars["user_status"] +
              "&mcon=" +
              "OPP_reprise_online" +
              "&tcookie=" +
              tC.getCookie("TCID") +
              "&opp_id=" +
              tc_vars["opportunity_id"] +
              "&ref=" +
              tC.internalvars.tc_referrer +
              "&url2=" +
              encodeURI(tc_url);
            tC.ams.tc_rand = Math.random();
            tC.pixelTrack.add(
              "//aramis.commander1.com/o3/?tcs=1995&idorder=" +
                tC.ams.idorder +
                "&amount=" +
                tC.ams.amount +
                "&currency=" +
                tC.ams.currency +
                tC.ams.additional_params +
                "&rand=" +
                tC.ams.tc_rand
            );
          }
        }
      }
    }
  }
  if (tC.dedup.ValidRules("361")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["env_work"] == "prod") {
          if (tc_vars["QRI_intentionnistes"] == "oui") {
            tC.launchTag("361", "AMS V3 - Conv opp RA", "1097", "1995", "3");
            if (typeof tC.ams !== "object") {
              tC.ams = [];
            }
            tC.ams.idorder = tC.internalvars.oppra;
            tC.ams.amount = "2";
            tC.ams.currency = "EUR";
            tC.ams.additional_params =
              "&order_type=" +
              "Opp_RA" +
              "&device=" +
              tC.internalvars.ua +
              "&lead_id=" +
              tc_vars["user_id"] +
              "&user_type=" +
              tc_vars["user_status"] +
              "&mcon=" +
              "OPP_reprise_online" +
              "&tcookie=" +
              tC.getCookie("TCID") +
              "&opp_id=" +
              tc_vars["opportunity_id"] +
              "&ref=" +
              tC.internalvars.tc_referrer +
              "&url2=" +
              encodeURI(tc_url);
            tC.ams.tc_rand = Math.random();
            tC.pixelTrack.add(
              "//aramis.commander1.com/o3/?tcs=1995&idorder=" +
                tC.ams.idorder +
                "&amount=" +
                tC.ams.amount +
                "&currency=" +
                tC.ams.currency +
                tC.ams.additional_params +
                "&rand=" +
                tC.ams.tc_rand
            );
          }
        }
      }
    }
  }
  if (tC.dedup.ValidRules("11")) {
    if (
      tc_vars["page_name"] == "aa:quote:funding" ||
      tc_vars["interetLPfinancement"] == "0" ||
      tc_vars["interetLPfinancement"] == "1"
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["env_work"] == "prod") {
          tC.launchTag("11", "AMS V3 - Conv devis", "1097", "1995", "3");
          if (typeof tC.ams !== "object") {
            tC.ams = [];
          }
          tC.ams.idorder = tc_vars["order_quotation_id"];
          tC.ams.amount = "2";
          tC.ams.currency = "EUR";
          tC.ams.additional_params =
            "&order_type=" +
            "devis" +
            "&leas_id=" +
            tc_vars["user_id"] +
            "&user_type=" +
            tc_vars["user_status"] +
            "&opp_id=" +
            tc_vars["opportunity_id"] +
            "&ref=" +
            tC.internalvars.tc_referrer +
            "&url2=" +
            encodeURI(tc_url) +
            "&lead_id=" +
            tc_vars["user_id"] +
            "&tcookie=" +
            tC.getCookie("TCID");
          tC.ams.tc_px = new Image();
          tC.ams.tc_px.id = "tc_img__1";
          tC.ams.tc_px.border = "0";
          tC.ams.tc_px.width = "1";
          tC.ams.tc_px.height = "1";
          tC.ams.tc_rand = Math.random();
          tC.pixelTrack.add(
            "//aramis.commander1.com/o3/?tcs=1995&idorder=" +
              tC.ams.idorder +
              "&amount=" +
              tC.ams.amount +
              "&currency=" +
              tC.ams.currency +
              tC.ams.additional_params +
              "&rand=" +
              tC.ams.tc_rand
          );
        }
      }
    }
  }
  if (tC.dedup.ValidRules("13")) {
    if (tc_vars["order_evaluation_id"] != "") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["env_work"] == "prod") {
          tC.launchTag("13", "AMS V3 - Conv estimation", "1097", "1995", "3");
          if (typeof tC.ams !== "object") {
            tC.ams = [];
          }
          tC.ams.idorder = tc_vars["order_evaluation_id"];
          tC.ams.amount = "1";
          tC.ams.currency = "EUR";
          tC.ams.additional_params =
            "&order_type=" +
            "estimation" +
            "&lead_id=" +
            tc_vars["user_id"] +
            "&user_type=" +
            tc_vars["user_status"] +
            "&opp_id=" +
            tc_vars["opportunity_id"] +
            "&ref=" +
            tC.internalvars.tc_referrer +
            "&url2=" +
            encodeURI(tc_url);
          tC.ams.tc_px = new Image();
          tC.ams.tc_px.id = "tc_img__1";
          tC.ams.tc_px.border = "0";
          tC.ams.tc_px.width = "1";
          tC.ams.tc_px.height = "1";
          tC.ams.tc_rand = Math.random();
          tC.pixelTrack.add(
            "//aramis.commander1.com/o3/?tcs=1995&idorder=" +
              tC.ams.idorder +
              "&amount=" +
              tC.ams.amount +
              "&currency=" +
              tC.ams.currency +
              tC.ams.additional_params +
              "&rand=" +
              tC.ams.tc_rand +
              "&lead_id=" +
              tc_vars["user_id"] +
              "&tcookie=" +
              tC.getCookie("TCID")
          );
        }
      }
    }
  }
  if (tC.dedup.ValidRules("311")) {
    if (
      tc_vars["page_name"] == "aa:quote:confirm:rdv:confirm" ||
      tc_vars["page_name"] == "aa:RDV:confirmation" ||
      tc_vars["page_name"] == "aa:aspageri:estimation:rdv:confirm"
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["env_work"] == "prod") {
          tC.launchTag("311", "AMS V3 - Conv rdv global", "1097", "1995", "3");
          if (typeof tC.ams !== "object") {
            tC.ams = [];
          }
          tC.ams.idorder = tC.internalvars.rdvglobal;
          tC.ams.amount = "6";
          tC.ams.currency = tc_vars["order_currency"];
          tC.ams.additional_params =
            "&order_type=" +
            "rdv_global" +
            "&leas_id=" +
            tc_vars["user_id"] +
            "&user_type=" +
            tc_vars["user_status"] +
            "&mcon=" +
            "RDV_online" +
            "&tcookie=" +
            tC.getCookie("TCID") +
            "&opp_id=" +
            tc_vars["opportunity_id"] +
            "&ref=" +
            tC.internalvars.tc_referrer +
            "&url2=" +
            encodeURI(tc_url) +
            "&lead_id=" +
            tc_vars["user_id"];
          tC.ams.tc_px = new Image();
          tC.ams.tc_px.id = "tc_img__1";
          tC.ams.tc_px.border = "0";
          tC.ams.tc_px.width = "1";
          tC.ams.tc_px.height = "1";
          tC.ams.tc_rand = Math.random();
          tC.pixelTrack.add(
            "//aramis.commander1.com/o3/?tcs=1995&idorder=" +
              tC.ams.idorder +
              "&amount=" +
              tC.ams.amount +
              "&currency=" +
              tC.ams.currency +
              tC.ams.additional_params +
              "&rand=" +
              tC.ams.tc_rand
          );
        }
      }
    }
  }
  if (tC.dedup.ValidRules("221")) {
    if (tc_vars["page_name"] == "aa:webcallback:confirm") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["env_work"] == "prod") {
          tC.launchTag("221", "AMS V3 - Conv webcallback", "1097", "1995", "3");
          if (typeof tC.ams !== "object") {
            tC.ams = [];
          }
          tC.ams.idorder = tc_random;
          tC.ams.amount = "6";
          tC.ams.currency = tc_vars["order_currency"];
          tC.ams.additional_params =
            "&order_type=" +
            "webcallback" +
            "&leas_id=" +
            tc_vars["user_id"] +
            "&user_type=" +
            tc_vars["user_status"] +
            "&ref=" +
            tC.internalvars.tc_referrer +
            "&url2=" +
            encodeURI(tc_url) +
            "&lead_id=" +
            tc_vars["user_id"] +
            "&tcookie=" +
            tC.getCookie("TCID") +
            "&opp_id=" +
            tc_vars["opportunity_id"];
          tC.ams.tc_px = new Image();
          tC.ams.tc_px.id = "tc_img__1";
          tC.ams.tc_px.border = "0";
          tC.ams.tc_px.width = "1";
          tC.ams.tc_px.height = "1";
          tC.ams.tc_rand = Math.random();
          tC.pixelTrack.add(
            "//aramis.commander1.com/o3/?tcs=1995&idorder=" +
              tC.ams.idorder +
              "&amount=" +
              tC.ams.amount +
              "&currency=" +
              tC.ams.currency +
              tC.ams.additional_params +
              "&rand=" +
              tC.ams.tc_rand
          );
        }
      }
    }
  }
  if (tC.dedup.ValidRules("223")) {
    if (tc_vars["page_name"] == "booking:confirm") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["env_work"] == "prod") {
          tC.launchTag("223", "AMS V3 - Conv reservation", "1097", "1995", "3");
          if (typeof tC.ams !== "object") {
            tC.ams = [];
          }
          tC.ams.idorder = tc_vars["order_reservation_id"];
          tC.ams.amount = "15";
          tC.ams.currency = tc_vars["order_currency"];
          tC.ams.additional_params =
            "&order_type=" +
            "reservation_online" +
            "&leas_id=" +
            tc_vars["user_id"] +
            "&user_type=" +
            tc_vars["user_status"] +
            "&ref=" +
            tC.internalvars.tc_referrer +
            "&url2=" +
            encodeURI(tc_url) +
            "&lead_id=" +
            tc_vars["user_id"] +
            "&tcookie=" +
            tC.getCookie("TCID") +
            "&opp_id=" +
            tc_vars["opportunity_id"];
          tC.ams.tc_px = new Image();
          tC.ams.tc_px.id = "tc_img__1";
          tC.ams.tc_px.border = "0";
          tC.ams.tc_px.width = "1";
          tC.ams.tc_px.height = "1";
          tC.ams.tc_rand = Math.random();
          tC.pixelTrack.add(
            "//aramis.commander1.com/o3/?tcs=1995&idorder=" +
              tC.ams.idorder +
              "&amount=" +
              tC.ams.amount +
              "&currency=" +
              tC.ams.currency +
              tC.ams.additional_params +
              "&rand=" +
              tC.ams.tc_rand
          );
        }
      }
    }
  }
  if (tC.dedup.ValidRules("225")) {
    if (
      tc_vars["page_name"]
        .toString()
        .toLowerCase()
        .indexOf("order:confirm".toLowerCase()) != -1 ||
      tc_vars["page_name"]
        .toString()
        .toLowerCase()
        .indexOf("cash:cb:confirm".toLowerCase()) != -1 ||
      tc_vars["page_name"]
        .toString()
        .toLowerCase()
        .indexOf("cash:transfer:confirm".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("225", "AMS V3 - Conv commande", "1097", "1995", "3");
        if (typeof tC.ams !== "object") {
          tC.ams = [];
        }
        tC.ams.idorder = tc_vars["order_commande_id"];
        tC.ams.amount = "25";
        tC.ams.currency = tc_vars["order_currency"];
        tC.ams.additional_params =
          "&order_type=" +
          "commande_online" +
          "&leas_id=" +
          tc_vars["user_id"] +
          "&user_type=" +
          tc_vars["user_status"] +
          "&opp_id=" +
          tc_vars["opportunity_id"] +
          "&ref=" +
          tC.internalvars.tc_referrer +
          "&url2=" +
          encodeURI(tc_url) +
          "&lead_id=" +
          tc_vars["user_id"] +
          "&tcookie=" +
          tC.getCookie("TCID");
        tC.ams.tc_px = new Image();
        tC.ams.tc_px.id = "tc_img__1";
        tC.ams.tc_px.border = "0";
        tC.ams.tc_px.width = "1";
        tC.ams.tc_px.height = "1";
        tC.ams.tc_rand = Math.random();
        tC.pixelTrack.add(
          "//aramis.commander1.com/o3/?tcs=1995&idorder=" +
            tC.ams.idorder +
            "&amount=" +
            tC.ams.amount +
            "&currency=" +
            tC.ams.currency +
            tC.ams.additional_params +
            "&rand=" +
            tC.ams.tc_rand
        );
      }
    }
  }
  if (tC.dedup.ValidRules("355")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("aramisauto.com".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["env_work"] == "prod") {
          if (
            tc_vars["events"]
              .toString()
              .toLowerCase()
              .indexOf("event1".toLowerCase()) != -1
          ) {
            tC.launchTag(
              "355",
              "AMS V3 - Conv nouveau compte",
              "1097",
              "1995",
              "3"
            );
            if (typeof tC.ams !== "object") {
              tC.ams = [];
            }
            tC.ams.idorder = tC.internalvars.nouveaucpte;
            tC.ams.amount = "5";
            tC.ams.currency = "EUR";
            tC.ams.tc_rand = Math.random();
            tC.ams.additional_params =
              "&opp_id=" +
              tc_vars["opportunity_id"] +
              "&mcon=" +
              "Nouveau_compte_online" +
              "&ref=" +
              tC.internalvars.tc_referrer +
              "&url2=" +
              encodeURI(tc_url) +
              "&order_type=" +
              "Nouveau_compte" +
              "&lead_id=" +
              tc_vars["user_id"] +
              "&user_type=" +
              tc_vars["user_status"] +
              "&tcookie=" +
              tC.getCookie("TCID");
            tC.pixelTrack.add(
              "//aramis.commander1.com/o3/?tcs=1995&idorder=" +
                tC.ams.idorder +
                "&amount=" +
                tC.ams.amount +
                "&currency=" +
                tC.ams.currency +
                tC.ams.additional_params +
                "&rand=" +
                tC.ams.tc_rand
            );
          }
        }
      }
    }
  }
  if (tC.dedup.ValidRules("561")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("aramisauto.com".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["env_work"] == "prod") {
          if (
            tc_vars["events"]
              .toString()
              .toLowerCase()
              .indexOf("event1".toLowerCase()) != -1
          ) {
            if (tc_vars["type_vente"] != "ri") {
              tC.launchTag(
                "561",
                "AMS V3 - Conv nouveau compte via vente",
                "1097",
                "1995",
                "3"
              );
              if (typeof tC.ams !== "object") {
                tC.ams = [];
              }
              tC.ams.idorder = tC.internalvars.nouveaucpteviavente;
              tC.ams.amount = "5";
              tC.ams.currency = "EUR";
              tC.ams.tc_rand = Math.random();
              tC.ams.additional_params =
                "&opp_id=" +
                tc_vars["opportunity_id"] +
                "&ref=" +
                tC.internalvars.tc_referrer +
                "&url2=" +
                encodeURI(tc_url) +
                "&order_type=" +
                "Nouveau_compte_viavente" +
                "&lead_id=" +
                tc_vars["user_id"] +
                "&user_type=" +
                tc_vars["user_status"] +
                "&tcookie=" +
                tC.getCookie("TCID");
              tC.pixelTrack.add(
                "//aramis.commander1.com/o3/?tcs=1995&idorder=" +
                  tC.ams.idorder +
                  "&amount=" +
                  tC.ams.amount +
                  "&currency=" +
                  tC.ams.currency +
                  tC.ams.additional_params +
                  "&rand=" +
                  tC.ams.tc_rand
              );
            }
          }
        }
      }
    }
  }
  if (tC.dedup.ValidRules("559")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("aramisauto.com".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["env_work"] == "prod") {
          if (
            tc_vars["events"]
              .toString()
              .toLowerCase()
              .indexOf("event1".toLowerCase()) != -1
          ) {
            if (tc_vars["type_vente"] == "ri") {
              tC.launchTag(
                "559",
                "AMS V3 - Conv nouveau compte via reprise",
                "1097",
                "1995",
                "3"
              );
              if (typeof tC.ams !== "object") {
                tC.ams = [];
              }
              tC.ams.idorder = tC.internalvars.nouveaucpteviarepris;
              tC.ams.amount = "5";
              tC.ams.currency = "EUR";
              tC.ams.tc_rand = Math.random();
              tC.ams.additional_params =
                "&opp_id=" +
                tc_vars["opportunity_id"] +
                "&ref=" +
                tC.internalvars.tc_referrer +
                "&url2=" +
                encodeURI(tc_url) +
                "&order_type=" +
                "Nouveau_compte_viareprise" +
                "&lead_id=" +
                tc_vars["user_id"] +
                "&user_type=" +
                tc_vars["user_status"] +
                "&tcookie=" +
                tC.getCookie("TCID");
              tC.pixelTrack.add(
                "//aramis.commander1.com/o3/?tcs=1995&idorder=" +
                  tC.ams.idorder +
                  "&amount=" +
                  tC.ams.amount +
                  "&currency=" +
                  tC.ams.currency +
                  tC.ams.additional_params +
                  "&rand=" +
                  tC.ams.tc_rand
              );
            }
          }
        }
      }
    }
  }
  if (tC.dedup.ValidRules("359")) {
    if (tC.getCookie("cookie_pub_optout") == "0") {
      if (tc_vars["env_work"] == "prod") {
        if (
          tc_vars["page_name"]
            .toString()
            .toLowerCase()
            .indexOf("search:alerte:confirm".toLowerCase()) != -1
        ) {
          tC.launchTag(
            "359",
            "AMS V3 - Conv alerte moteur",
            "1097",
            "1995",
            "3"
          );
          if (typeof tC.ams !== "object") {
            tC.ams = [];
          }
          tC.ams.idorder = tc_vars["order_alerte_id"];
          tC.ams.amount = "1";
          tC.ams.currency = "EUR";
          tC.ams.tc_rand = Math.random();
          tC.ams.additional_params =
            "&opp_id=" +
            tc_vars["opportunity_id"] +
            "&ref=" +
            tC.internalvars.tc_referrer +
            "&url2=" +
            encodeURI(tc_url) +
            "&order_type=" +
            "alert" +
            "&lead_id=" +
            tc_vars["user_id"] +
            "&user_type=" +
            tc_vars["user_status"] +
            "&tcookie=" +
            tC.getCookie("TCID");
          tC.pixelTrack.add(
            "//aramis.commander1.com/o3/?tcs=1995&idorder=" +
              tC.ams.idorder +
              "&amount=" +
              tC.ams.amount +
              "&currency=" +
              tC.ams.currency +
              tC.ams.additional_params +
              "&rand=" +
              tC.ams.tc_rand
          );
        }
      }
    }
  }
  if (tC.dedup.ValidRules("633")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf(
          "aramisauto.com/commande/paiement/selection-carte-credit".toLowerCase()
        ) != -1
    ) {
      tC.launchTag(
        "633",
        "TagCommander - RÃ©conciliation server side",
        "239",
        "1995",
        "3"
      );
      tC.script.add(
        "//" +
          "aramis" +
          ".commander1.com/getcookie.php?c=" +
          "TCID" +
          "&v=" +
          "TCID_3rd",
        function () {
          if (
            typeof tC.crossdomain !== "undefined" &&
            typeof eval("tC.crossdomain." + "TCID_3rd") !== "undefined"
          ) {
            tC.setCookie("TCID_3rd", tC.crossdomain["TCID_3rd"]);
            var tc_ut_cs = 1995;
            var tc_key = tc_vars["user_id"];
            var tc_data = new Object();
            tc_data["TCID"] = tC.getCookie("TCID_3rd");
            var tc_url_data_save =
              "//redirect1995.tagcommander.com/datasave/?tcs=" + tc_ut_cs;
            var tc_url_data_save = tc_url_data_save + "&key=" + tc_key;
            var tc_data_concat = "";
            var cpt = 0;
            for (var data_key in tc_data) {
              if (cpt > 0) {
                tc_data_concat = tc_data_concat + "||";
              }
              tc_data_concat =
                tc_data_concat + data_key + "::" + tc_data[data_key];
              cpt++;
            }
            tc_data_concat = encodeURIComponent(tc_crypt(tc_data_concat));
            tc_url_data_save = tc_url_data_save + "&data=" + tc_data_concat;
            var tc_image = document.createElement("img");
            tc_image.id = "tc_img__1";
            tc_image.width = "1";
            tc_image.height = "1";
            tc_image.border = "0";
            tc_image.src = tc_url_data_save;
            document.body.appendChild(tc_image);
          }
        }
      );
    }
  }
  if (tC.dedup.ValidRules("595")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["env_work"] == "prod") {
          if (tc_vars["page_name"] == "aa:product:alerte:confirm") {
            tC.launchTag(
              "595",
              "AMS V3 - Conv Opp vide (VO en arrivage)",
              "26",
              "1995",
              "3"
            );
            if (typeof tC.ams !== "object") {
              tC.ams = [];
            }
            tC.ams.idorder = tC.internalvars.oppvidevoenarrivage;
            tC.ams.amount = "4";
            tC.ams.currency = "EUR";
            tC.ams.additional_params =
              "&order_type=" +
              "Opp_vide (VO en arrivage)" +
              "&user_type=" +
              tc_vars["user_status"] +
              "&mcon=" +
              "OPP_vente_online" +
              "&ref=" +
              tC.internalvars.tc_referrer +
              "&url2=" +
              encodeURI(tc_url);
            tC.ams.tc_rand = Math.random();
            tC.pixelTrack.add(
              "//aramis.commander1.com/o3/?tcs=1995&idorder=" +
                tC.ams.idorder +
                "&amount=" +
                tC.ams.amount +
                "&currency=" +
                tC.ams.currency +
                tC.ams.additional_params +
                "&rand=" +
                tC.ams.tc_rand +
                "&lead_id=" +
                tc_vars["user_id"] +
                "&tcookie=" +
                tC.getCookie("TCID") +
                "&opp_id=" +
                tc_vars["opportunity_id"]
            );
          }
        }
      }
    }
  }
  if (tC.dedup.ValidRules("31")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("aramisauto.com".toLowerCase()) != -1
    ) {
      if (
        tc_vars["events"]
          .toString()
          .toLowerCase()
          .indexOf("event8".toLowerCase()) == -1
      ) {
        if (tC.getCookie("cookie_stat_optout") == "0") {
          tC.launchTag(
            "31",
            "Google Analytics - pas event8",
            "37",
            "1995",
            "3"
          );
          (function (i, s, o, g, r, a, m) {
            i["GoogleAnalyticsObject"] = r;
            (i[r] =
              i[r] ||
              function () {
                (i[r].q = i[r].q || []).push(arguments);
              }),
              (i[r].l = 1 * new Date());
            (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
          })(
            window,
            document,
            "script",
            "https://www.google-analytics.com/analytics.js",
            "ga"
          );
          ga("create", "UA-445406-11", "auto", { cookieExpires: 34187400 });
          ga("send", "pageview");
        }
      }
    }
  }
  if (tC.dedup.ValidRules("645")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_stat_optout") == "0") {
        tC.launchTag("645", "Google Analytics - event8", "57", "1995", "3");
        (function (i, s, o, g, r, a, m) {
          i["GoogleAnalyticsObject"] = r;
          (i[r] =
            i[r] ||
            function () {
              (i[r].q = i[r].q || []).push(arguments);
            }),
            (i[r].l = 1 * new Date());
          (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
          a.async = 1;
          a.src = g;
          m.parentNode.insertBefore(a, m);
        })(
          window,
          document,
          "script",
          "https://www.google-analytics.com/analytics.js",
          "ga"
        );
        ga("create", "UA-445406-11", "auto", { cookieExpires: 34187400 });
        ga("send", {
          hitType: "event",
          eventCategory: "Opp",
          eventAction: tc_vars["type_vente"],
          eventLabel: tc_vars["opportunity_id"],
        });
      }
    }
  }
  if (tC.dedup.ValidRules("7")) {
    tC.launchTag("7", "Omniture SiteCatalyst v H.23", "138", "1995", "3");
    tC.log("test fanta ZANOX");
    eval(tC.inclusion_s_code_1);
    s.pageName = tc_vars["page_name"];
    s.server = "";
    s.channel = tc_vars["env_template"];
    s.pageType = "";
    s.prop1 = tc_vars["domaines_conversions"];
    s.prop2 = tc_vars["user_id"];
    s.prop3 = tc_vars["type_vente"];
    s.prop4 = tc_vars["client_with_order"];
    s.prop5 = tc_vars["search_trademark"];
    s.prop6 = tc_vars["search_model"];
    s.prop7 = tc_vars["search_categorie"];
    s.prop8 = tc_vars["search_finition"];
    s.prop9 = tc_vars["search_carburant"];
    s.prop10 = tc_vars["search_boite_de_vitesse"];
    s.prop11 = tc_vars["search_carrosserie"];
    s.prop12 = tc_vars["search_disponibilite"];
    s.prop13 = tc_vars["search_budget"];
    s.prop14 = tc_vars["RefAramisouNVO_listemoteur_01-13"];
    s.prop15 = tc_vars["RefAramisouNVO_listemoteur_14-25"];
    s.prop16 = tc_vars["search_page_number"];
    s.prop17 = tc_vars["product_trademark"];
    s.prop18 = tc_vars["product_model"];
    s.prop19 = tc_vars["product_finitions"];
    s.prop20 = tc_vars["product_types_marques_modeles"];
    s.prop21 = tc_vars["search_results_number"];
    s.prop22 = tc_vars["search_mensualite"];
    s.prop23 = tc_vars["search_typedecredit"];
    s.prop24 = tc_vars["search_apport"];
    s.prop25 = tc_vars["search_duree"];
    s.prop26 = tc_vars["search_kmannuel"];
    s.prop27 = tc_vars["search_annee"];
    s.prop28 = tc_vars["search_puissance"];
    s.prop29 = tc_vars["search_keywords"];
    s.prop30 = tc_vars["search_filters"];
    s.prop31 = tc_vars["search_tri"];
    s.prop32 = tc_vars["product_id"];
    s.prop33 = tc_vars["product_trademark"];
    s.prop34 = tc_vars["product_model"];
    s.prop35 = tc_vars["search_typedevente"];
    s.prop36 = tc_vars["search_first"];
    s.prop37 = tc_vars["search_equipements_et_options"];
    s.prop38 = tc_vars["search_couleur"];
    s.prop39 = tc_vars["search_kilometrage"];
    s.prop45 = "";
    s.campaign = tc_vars["intcmp"];
    s.state = "";
    s.zip = "";
    s.events = tC.internalvars.omn_events;
    s.products = tc_vars["order_product_id"];
    s.purchaseID = tc_vars["order_quotation_id"];
    s.eVar1 = tc_vars["type_vente"];
    s.eVar2 = tc_vars["user_id"];
    s.eVar3 = tc_vars["intcmp"];
    s.eVar4 = tc_vars["product_id"];
    s.eVar5 = tc_vars["search_trademark"];
    s.eVar6 = tc_vars["search_model"];
    s.eVar7 = tc_vars["search_finition"];
    s.eVar8 = tc_vars["search_categorie"];
    s.eVar9 = tc_vars["search_carburant"];
    s.eVar10 = tc_vars["search_boite_de_vitesse"];
    s.eVar11 = tc_vars["search_carrosserie"];
    s.eVar12 = tc_vars["search_disponibilite"];
    s.eVar13 = tc_vars["search_budget"];
    s.eVar14 = tc_vars["order_quotation_id"];
    s.eVar15 = tc_vars["es_id_devis"];
    s.eVar16 = tc_vars["opportunity_id"];
    s.eVar17 = tc_vars["product_marques"];
    s.eVar18 = tc_vars["product_modeles"];
    s.eVar19 = tc_vars["product_finitions"];
    s.eVar20 = tc_vars["product_types_marques_modeles"];
    s.eVar21 = tc_vars["channels"];
    s.eVar22 = tc_vars["partners"];
    s.eVar23 = tc_vars["keywords"];
    s.eVar24 = tc_vars["referring_domains"];
    s.eVar25 = tc_vars["stacked_tracking_codes"];
    s.eVar26 = tc_vars["stacked_channels"];
    s.eVar27 = tc_vars["stacked_keywords"];
    s.eVar28 = tc_vars["domaines_conversions"];
    s.eVar29 = tc_vars["QRI_intentionnistes"];
    s.eVar30 = tc_vars["user_postalcode"];
    s.eVar31 = tc_civilite;
    s.eVar32 = tc_vars["URL_Before_lead"];
    s.eVar34 = tc_vars["product_NVN"];
    s.eVar35 = tc_vars["search_typedevente"];
    s.eVar36 = tc_vars["landing_pages_aramis"];
    s.eVar37 = tc_vars["search_equipements_et_options"];
    s.eVar37 = tc_vars["search_couleur"];
    s.eVar39 = tc_vars["search_kilometrage"];
    s.eVar40 = tc_vars["QRI_souhait_vendre_voiture"];
    s.eVar41 = tc_vars["QRI_petite_annonce_internet"];
    s.eVar42 = tc_vars["QRI_PA_combien_temps"];
    s.eVar43 = tc_vars["QRI_quel_prix"];
    s.eVar44 = tc_vars["opportunity_id_mere"];
    s.eVar45 = tc_vars["Version"];
    s.eVar46 = tc_vars["order_evaluation_id"];
    s.eVar48 = tc_vars["RefAramisouNVO_listemoteur_01-13"];
    s.eVar47 = tc_vars["QRI_intentionnistes"];
    s.eVar49 = tc_vars["RefAramisouNVO_listemoteur_14-25"];
    s.eVar50 = tc_vars["search_mensualite"];
    s.eVar51 = tc_vars["search_results_number"];
    s.eVar52 = tc_vars["search_page_number"];
    s.eVar53 = tc_channel;
    s.eVar54 = tc_vars["user_logged"];
    s.eVar55 = tc_vars["autofilling"];
    s.eVar56 = tc_vars["client_with_order"];
    s.eVar57 = tc_vars["reprise_delai"];
    s.eVar58 = tc_vars["order_payment_methods"];
    s.eVar59 = tc_vars["order_payment_amount"];
    s.eVar60 = tc_vars["credit_offreaffichee"];
    s.eVar61 = tc_vars["credit_offreselectionnee"];
    s.eVar62 = tc_vars["credit_apport"];
    s.eVar63 = tc_vars["credit_duree"];
    s.eVar64 = tc_vars["credit_kmparan"];
    s.eVar65 = tc_vars["ab_tasty"];
    s.eVar66 = tc_vars["ab_tasty_2"];
    s.eVar67 = tc_vars["ab_tasty_3"];
    s.cookieLifetime = "31536000";
    var s_code = s.t();
    if (s_code) document.write(s_code);
  }
  if (tC.dedup.ValidRules("111")) {
    if (tc_vars["order_evaluation_id"] != "") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (
          tc_vars["events"]
            .toString()
            .toLowerCase()
            .indexOf("event1".toLowerCase()) != -1
        ) {
          tC.launchTag("111", "Adlead - Reprise", "26", "1995", "3");
          tC.imageElt1 = document.createElement("img");
          tC.imageElt1.id = "tc_img_261_1";
          tC.imageElt1.src =
            "https://adtrack.adleadevent.com/adtckrg.php?idc=10117&idctr=1&email=" +
            tc_vars["order_email"];
          tC.imageElt1.border = "0";
          tC.imageElt1.width = "1";
          tC.imageElt1.height = "1";
          document.body.appendChild(tC.imageElt1);
        }
      }
    }
  }
  if (tC.dedup.ValidRules("19")) {
    if (tc_vars["env_template"] == "offres") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("19", "AdLead - Produit", "26", "1995", "3");
        tC.scriptElt1 = document.createElement("script");
        tC.scriptElt1.id = "tc_script_7_1";
        tC.scriptElt1.type = "text/javascript";
        tC.scriptElt1.src =
          "https://adtrack.adleadevent.com/mailNotification.php?st=49cfdd98-9cc0-4e41-a672-25b6ef7a3e4c&productId=" +
          tc_vars["es_id"];
        tC.scriptElt1.async = true;
        tC.scriptElt1.defer = "defer";
        (
          document.getElementsByTagName("head")[0] ||
          document.getElementsByTagName("body")[0] ||
          document.getElementsByTagName("script")[0].parentNode
        ).insertBefore(tC.scriptElt1, null);
      }
    }
  }
  if (tC.dedup.ValidRules("21")) {
    if (tc_vars["env_template"] == "recherche") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("21", "AdLead - Recherche", "26", "1995", "3");
        tC.scriptElt1 = document.createElement("script");
        tC.scriptElt1.id = "tc_script_5_1";
        tC.scriptElt1.type = "text/javascript";
        tC.scriptElt1.src =
          "https://adtrack.adleadevent.com/mailNotification.php?st=49cfdd98-9cc0-4e41-a672-25b6ef7a3e4c&filters=marque:" +
          tc_vars["search_marque"] +
          ",modele:" +
          tc_vars["search_modele"] +
          ",finition:" +
          tc_vars["search_finition"] +
          ",categorie:" +
          tc_vars["search_categorie"] +
          ",carrosserie:" +
          'tc_vars["search_Carrosserie"]' +
          ",boite:" +
          tc_vars["search_boite_de_vitesse"] +
          ",energie:" +
          tc_vars["search_carburant"];
        tC.scriptElt1.async = true;
        tC.scriptElt1.defer = "defer";
        (
          document.getElementsByTagName("head")[0] ||
          document.getElementsByTagName("body")[0] ||
          document.getElementsByTagName("script")[0].parentNode
        ).insertBefore(tC.scriptElt1, null);
      }
    }
  }
  if (tC.dedup.ValidRules("201")) {
    if (
      tc_vars["page_name"] == "aa:RDV:confirmation" ||
      tc_vars["page_name"] == "aa:aspageri:estimation:rdv:confirm"
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("201", "Adlead - Rdv", "26", "1995", "3");
        tC.imageElt1 = document.createElement("img");
        tC.imageElt1.id = "tc_img_375_1";
        tC.imageElt1.src =
          "https://adtrack.adleadevent.com/adtckrg.php?idc=10593&idctr=1&email={" +
          tc_vars["order_email"] +
          "}";
        tC.imageElt1.border = "0";
        tC.imageElt1.width = "1";
        tC.imageElt1.height = "1";
        document.body.appendChild(tC.imageElt1);
      }
    }
  }
  if (tC.dedup.ValidRules("165")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["type_vente"] == "vn") {
          tC.launchTag("165", "Floodlight - Opp VN", "1061", "1995", "3");
          var axel = Math.random() + "";
          var a = axel * 10000000000000;
          tC.iframeElt1 = document.createElement("iframe");
          tC.iframeElt1.id = "tc_iframe_165_1";
          tC.iframeElt1.src =
            "https://4395879.fls.doubleclick.net/activityi;src=4395879;type=Actio0;cat=Oppor0;u1=#id";
          tC.iframeElt1.width = "1";
          tC.iframeElt1.height = "1";
          tC.iframeElt1.frameBorder = "0";
          tC.iframeElt1.style.display = "none";
          document.body.appendChild(tC.iframeElt1);
        }
      }
    }
  }
  if (tC.dedup.ValidRules("167")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["type_vente"] == "vo") {
          tC.launchTag("167", "Floodlight - Opp VO", "1061", "1995", "3");
          var axel = Math.random() + "";
          var a = axel * 10000000000000;
          tC.iframeElt1 = document.createElement("iframe");
          tC.iframeElt1.id = "tc_iframe_167_1";
          tC.iframeElt1.src =
            "https://4395879.fls.doubleclick.net/activityi;src=4395879;type=Actio0;cat=Oppor00;u1=#id";
          tC.iframeElt1.width = "1";
          tC.iframeElt1.height = "1";
          tC.iframeElt1.frameBorder = "0";
          tC.iframeElt1.style.display = "none";
          document.body.appendChild(tC.iframeElt1);
        }
      }
    }
  }
  if (tC.dedup.ValidRules("169")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["type_vente"] == "ri") {
          tC.launchTag("169", "Floodlight - Opp RI", "1061", "1995", "3");
          var axel = Math.random() + "";
          var a = axel * 10000000000000;
          tC.iframeElt1 = document.createElement("iframe");
          tC.iframeElt1.id = "tc_iframe_169_1";
          tC.iframeElt1.src =
            "https://4395879.fls.doubleclick.net/activityi;src=4395879;type=Actio0;cat=Oppor000;u1=#id";
          tC.iframeElt1.width = "1";
          tC.iframeElt1.height = "1";
          tC.iframeElt1.frameBorder = "0";
          tC.iframeElt1.style.display = "none";
          document.body.appendChild(tC.iframeElt1);
        }
      }
    }
  }
  if (tC.dedup.ValidRules("57")) {
    if (
      tC.internalvars.E_DevisLP == "1" ||
      tc_vars["page_name"] == "aa:quote:funding"
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["type_vente"] == "vn") {
          tC.launchTag("57", "Floodlight - conversion VN", "1061", "1995", "3");
          var axel = Math.random() + "";
          var a = axel * 10000000000000;
          document.write(
            '<iframe src="https://4395879.fls.doubleclick.net/activityi;src=4395879;type=Actio0;cat=Conve00;u1=tc_vars["user_id"];u2=tc_vars["type_vente"];ord=tc_vars["order_quotation_id"]' +
              a +
              '?" width="1" height="1" frameborder="0" style="display:none"></iframe>'
          );
        }
      }
    }
  }
  if (tC.dedup.ValidRules("75")) {
    if (
      tc_vars["page_name"] == "aa:quote:funding" ||
      tC.internalvars.E_DevisLP == "1"
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["type_vente"] == "vo") {
          tC.launchTag("75", "Floodlight - conversion VO", "1061", "1995", "3");
          var axel = Math.random() + "";
          var a = axel * 10000000000000;
          tC.iframeElt1 = document.createElement("iframe");
          tC.iframeElt1.id = "tc_iframe_75_1";
          tC.iframeElt1.src =
            "https://4395879.fls.doubleclick.net/activityi;src=4395879;type=Actio0;cat=Conve000;u1=#id";
          tC.iframeElt1.width = "1";
          tC.iframeElt1.height = "1";
          tC.iframeElt1.frameBorder = "0";
          tC.iframeElt1.style.display = "none";
          document.body.appendChild(tC.iframeElt1);
        }
      }
    }
  }
  if (tC.dedup.ValidRules("59")) {
    if (
      tc_vars["order_evaluation_id"] != "" ||
      tc_vars["page_name"] == "aa:RDV:confirmation"
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("59", "Floodlight - conversion RI", "1061", "1995", "3");
        var axel = Math.random() + "";
        var a = axel * 10000000000000;
        tC.iframeElt1 = document.createElement("iframe");
        tC.iframeElt1.id = "tc_iframe_59_1";
        tC.iframeElt1.src =
          "https://4395879.fls.doubleclick.net/activityi;src=4395879;type=Actio0;cat=Conve001;u1=#id";
        tC.iframeElt1.width = "1";
        tC.iframeElt1.height = "1";
        tC.iframeElt1.frameBorder = "0";
        tC.iframeElt1.style.display = "none";
        document.body.appendChild(tC.iframeElt1);
      }
    }
  }
  if (tC.dedup.ValidRules("295")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "295",
          "Adwords - Opp compte VN (NEW)",
          "1027",
          "1995",
          "3"
        );
        var tc_img_adwords = document.createElement("img");
        tc_img_adwords.id = "tc_img__1";
        tc_img_adwords.type = "text/javascript";
        tc_img_adwords.src =
          "//www.googleadservices.com/pagead/conversion/" +
          "1062296504" +
          "/?value=" +
          "1.00" +
          "&label=" +
          "DVeyCPaW6QEQuLfF-gM" +
          "&cachebuster=" +
          Math.floor(Math.random() * 1000000);
        (
          document.getElementsByTagName("head")[0] ||
          document.getElementsByTagName("body")[0] ||
          document.getElementsByTagName("script")[0].parentNode
        ).insertBefore(tc_img_adwords, null);
      }
    }
  }
  if (tC.dedup.ValidRules("299")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "299",
          "Adwords - Opp compte VO (NEW)",
          "1027",
          "1995",
          "3"
        );
        var tc_img_adwords = document.createElement("img");
        tc_img_adwords.id = "tc_img__1";
        tc_img_adwords.type = "text/javascript";
        tc_img_adwords.src =
          "//www.googleadservices.com/pagead/conversion/" +
          "1005618711" +
          "/?value=" +
          "1.00" +
          "&label=" +
          "qC7eCPn8tgUQl4zC3wM" +
          "&cachebuster=" +
          Math.floor(Math.random() * 1000000);
        (
          document.getElementsByTagName("head")[0] ||
          document.getElementsByTagName("body")[0] ||
          document.getElementsByTagName("script")[0].parentNode
        ).insertBefore(tc_img_adwords, null);
      }
    }
  }
  if (tC.dedup.ValidRules("297")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "297",
          "Adwords - Opp compte RI (NEW)",
          "1027",
          "1995",
          "3"
        );
        var tc_img_adwords = document.createElement("img");
        tc_img_adwords.id = "tc_img__1";
        tc_img_adwords.type = "text/javascript";
        tc_img_adwords.src =
          "//www.googleadservices.com/pagead/conversion/" +
          "1028391255" +
          "/?value=" +
          "1.00" +
          "&label=" +
          "lUTCCPW53gMQ14Kw6gM" +
          "&cachebuster=" +
          Math.floor(Math.random() * 1000000);
        (
          document.getElementsByTagName("head")[0] ||
          document.getElementsByTagName("body")[0] ||
          document.getElementsByTagName("script")[0].parentNode
        ).insertBefore(tc_img_adwords, null);
      }
    }
  }
  if (tC.dedup.ValidRules("207")) {
    if (
      tc_vars["page_name"] == "aa:quote:funding" ||
      tC.internalvars.E_DevisLP == "1" ||
      tc_vars["page_name"] == "aa:RDV:confirmation" ||
      tc_vars["page_name"] == "aa:aspageri:estimation:rdv:confirm"
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("207", "Zanox - VNVO", "26", "1995", "3");
        tC.scriptElt1 = document.createElement("script");
        tC.scriptElt1.id = "tc_script_89_1";
        tC.scriptElt1.TYPE = "text/javascript";
        tC.scriptElt1.src =
          "https://ad.zanox.com/ppl/?2954C92966054&mode=[[1]]&CID=[[" +
          tc_typevente_zanox +
          "]]&OrderID=[[" +
          tc_vars["order_email"] +
          "]]&CustomerID=[[1]]&ReviewNote=[[" +
          tc_vars["env_channel"] +
          "]]";
        tC.scriptElt1.async = true;
        tC.scriptElt1.defer = "defer";
        (
          document.getElementsByTagName("head")[0] ||
          document.getElementsByTagName("body")[0] ||
          document.getElementsByTagName("script")[0].parentNode
        ).insertBefore(tC.scriptElt1, null);
      }
    }
  }
  if (tC.dedup.ValidRules("77")) {
    if (tc_vars["order_evaluation_id"] != "") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("77", "Zanox - RI", "26", "1995", "3");
        tC.scriptElt1 = document.createElement("script");
        tC.scriptElt1.id = "tc_script_89_1";
        tC.scriptElt1.TYPE = "text/javascript";
        tC.scriptElt1.src =
          "https://ad.zanox.com/ppl/?2954C92966054&mode=[[1]]&CID=[[" +
          tc_typevente_zanox +
          "]]&OrderID=[[" +
          tc_vars["order_email"] +
          "]]&ReviewNote=[[" +
          tc_vars["env_channel"] +
          "]]";
        tC.scriptElt1.async = true;
        tC.scriptElt1.defer = "defer";
        (
          document.getElementsByTagName("head")[0] ||
          document.getElementsByTagName("body")[0] ||
          document.getElementsByTagName("script")[0].parentNode
        ).insertBefore(tC.scriptElt1, null);
      }
    }
  }
  if (tC.dedup.ValidRules("187")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("187", "Facebook iprospects Opp RI", "26", "1995", "3");
        (function () {
          var _fbq = window._fbq || (window._fbq = []);
          if (!_fbq.loaded) {
            eval(tC.inclusion_fbds_1);
            _fbq.loaded = true;
          }
        })();
        window._fbq = window._fbq || [];
        window._fbq.push([
          "track",
          "6024943905780",
          { value: "0.00", currency: "EUR" },
        ]);
      }
    }
  }
  if (tC.dedup.ValidRules("205")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("aramisauto.com/c/reprise/rachat-voiture".toLowerCase()) !=
        -1 ||
      document.location
        .toString()
        .toLowerCase()
        .indexOf(
          "aramisauto.com%2Fc%2Freprise%2Frachat-voiture".toLowerCase()
        ) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("205", "Facebook pixel arrivee RI", "26", "1995", "3");
        (function () {
          var _fbq = window._fbq || (window._fbq = []);
          if (!_fbq.loaded) {
            eval(tC.inclusion_fbds_2);
            _fbq.loaded = true;
          }
        })();
        window._fbq = window._fbq || [];
        window._fbq.push([
          "track",
          "6031124937980",
          { value: "0.00", currency: "EUR" },
        ]);
      }
    }
  }
  if (tC.dedup.ValidRules("189")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("aramisauto.com".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["env_work"] == "prod") {
          tC.launchTag(
            "189",
            "Facebook iprospects Remarketing",
            "26",
            "1995",
            "3"
          );
          (function () {
            var _fbq = window._fbq || (window._fbq = []);
            if (!_fbq.loaded) {
              eval(tC.inclusion_fbds_1);
              _fbq.loaded = true;
            }
            _fbq.push(["addPixelId", "701231213328264"]);
          })();
          window._fbq = window._fbq || [];
          window._fbq.push(["track", "PixelInitialized", {}]);
        }
      }
    }
  }
  if (tC.dedup.ValidRules("217")) {
    if (
      tc_vars["order_evaluation_id"] != "" ||
      tc_vars["page_name"] == "aa:RDV:confirmation" ||
      tc_vars["page_name"] == "aa:aspageri:estimation:rdv:confirm"
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tC.getCookie("cookie_stat_optout") == "0") {
          tC.launchTag(
            "217",
            "Tag Commander - DMS - v2.1",
            "1585",
            "1995",
            "3"
          );
          tC.internalvars.launched_tags = tC.array_launched_tags.toString();
          if (typeof tCdata2 == "undefined") {
            tCdata2 = [];
          }
          tCdata2.push(["cs", "1995"]);
          tCdata2.push(["id_call", Math.round(Math.random() * 12345678942)]);
          tCdata2.push([
            "data",
            {
              type: "FREE",
              key1: tc_timestamp,
              key2: tc_vars["page_name"],
              key3: tc_vars["events"],
              key4: tc_vars["env_template"],
              key5: tc_url,
              key6: tc_vars["order_email"],
              key7: tc_vars["opportunity_id"],
              key8: tc_vars["order_evaluation_id"],
              key9: tc_vars["opportunity_id_mere"],
              key10: tc_vars["order_quotation_id"],
              key11: tC.internalvars.dedup_report_id,
              key12: tC.internalvars.dedup_canal_source,
              key13: tC.internalvars.launched_tags,
              key14: "",
              key15: "",
              key16: "",
              key17: "",
              key18: "",
              key19: "",
              key20: "",
            },
          ]);
          tCdata2.push(["sendhit"]);
          (function () {
            var tc_dms = document.createElement("script");
            tc_dms.type = "text/javascript";
            tc_dms.async = true;
            tc_dms.src = "//cdn.tagcommander.com/dms/dms_v2.js";
            document.body.appendChild(tc_dms);
          })();
        }
      }
    }
  }
  if (tC.dedup.ValidRules("239")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("aramisauto.com".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("239", "Adw RLSA - cpte VN all", "1027", "1995", "3");
        var google_conversion_id = 1062296504;
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        eval(tC.inclusion_conversion_2);
      }
    }
  }
  if (tC.dedup.ValidRules("241")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("aramisauto.com".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("241", "Adw RLSA - cpte VO all", "1027", "1995", "3");
        var google_conversion_id = 1005618711;
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        eval(tC.inclusion_conversion_2);
      }
    }
  }
  if (tC.dedup.ValidRules("243")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("aramisauto.com".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("243", "Adw RLSA - cpte RI all", "1027", "1995", "3");
        var google_conversion_id = 1028391255;
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        eval(tC.inclusion_conversion_2);
      }
    }
  }
  if (tC.dedup.ValidRules("245")) {
    if (tc_vars["env_template"] == "HomePageAA") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("245", "Adw RLSA - cpte VN homepage", "1027", "1995", "3");
        var google_conversion_id = 1062296504;
        var google_conversion_label = "IOLbCL2G_l4QuLfF-gM";
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        eval(tC.inclusion_conversion_2);
      }
    }
  }
  if (tC.dedup.ValidRules("247")) {
    if (tc_vars["env_template"] == "recherche") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "247",
          "Adw RLSA - cpte VN recherche",
          "1027",
          "1995",
          "3"
        );
        var google_conversion_id = 1062296504;
        var google_conversion_label = "IR7RCNbY914QuLfF-gM";
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        eval(tC.inclusion_conversion_2);
      }
    }
  }
  if (tC.dedup.ValidRules("249")) {
    if (tc_vars["env_template"] == "offres") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("249", "Adw RLSA - cpte VN produit", "1027", "1995", "3");
        var google_conversion_id = 1062296504;
        var google_conversion_label = "zOaqCIGJ_l4QuLfF-gM";
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        eval(tC.inclusion_conversion_2);
      }
    }
  }
  if (tC.dedup.ValidRules("251")) {
    if (tc_vars["env_template"] == "offres") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["type_vente"] == "vn") {
          tC.launchTag(
            "251",
            "Adw RLSA - cpte VN produit VN",
            "1027",
            "1995",
            "3"
          );
          var google_conversion_id = 1062296504;
          var google_conversion_label = "X-mSCNOK_l4QuLfF-gM";
          var google_custom_params = window.google_tag_params;
          var google_remarketing_only = true;
          eval(tC.inclusion_conversion_2);
        }
      }
    }
  }
  if (tC.dedup.ValidRules("253")) {
    if (tc_vars["env_template"] == "offres") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["type_vente"] == "vo") {
          tC.launchTag(
            "253",
            "Adw RLSA - cpte VN produit VO",
            "1027",
            "1995",
            "3"
          );
          var google_conversion_id = 1062296504;
          var google_conversion_label = "qg2tCNvi8l4QuLfF-gM";
          var google_custom_params = window.google_tag_params;
          var google_remarketing_only = true;
          eval(tC.inclusion_conversion_2);
        }
      }
    }
  }
  if (tC.dedup.ValidRules("255")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("255", "Adw RLSA - cpte VN opp VN", "1027", "1995", "3");
        var google_conversion_id = 1062296504;
        var google_conversion_label = "H89oCJCE-F4QuLfF-gM";
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        eval(tC.inclusion_conversion_2);
      }
    }
  }
  if (tC.dedup.ValidRules("257")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["type_vente"] == "vo") {
          tC.launchTag("257", "Adw RLSA - cpte VN opp VO", "1027", "1995", "3");
          var google_conversion_id = 1062296504;
          var google_conversion_label = "648JCN-N814QuLfF-gM";
          var google_custom_params = window.google_tag_params;
          var google_remarketing_only = true;
          eval(tC.inclusion_conversion_2);
        }
      }
    }
  }
  if (tC.dedup.ValidRules("259")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["type_vente"] == "ri") {
          tC.launchTag("259", "Adw RLSA - cpte VN opp RI", "1027", "1995", "3");
          var google_conversion_id = 1062296504;
          var google_conversion_label = "-2RXCPe3_l4QuLfF-gM";
          var google_custom_params = window.google_tag_params;
          var google_remarketing_only = true;
          eval(tC.inclusion_conversion_2);
        }
      }
    }
  }
  if (tC.dedup.ValidRules("261")) {
    if (tc_vars["page_name"] == "aa:quote:funding") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "261",
          "Adw RLSA - cpte VN devis fiche",
          "1027",
          "1995",
          "3"
        );
        var google_conversion_id = 1062296504;
        var google_conversion_label = "wkBPCMiJ-F4QuLfF-gM";
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        eval(tC.inclusion_conversion_2);
      }
    }
  }
  if (tC.dedup.ValidRules("263")) {
    if (tC.internalvars.E_DevisLP == "1") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("263", "Adw RLSA - cpte VN devis LP", "1027", "1995", "3");
        var google_conversion_id = 1062296504;
        var google_conversion_label = "j4guCN3N_l4QuLfF-gM";
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        eval(tC.inclusion_conversion_2);
      }
    }
  }
  if (tC.dedup.ValidRules("265")) {
    if (tc_vars["order_evaluation_id"] != "") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "265",
          "Adw RLSA - cpte VN estimation",
          "1027",
          "1995",
          "3"
        );
        var google_conversion_id = 1062296504;
        var google_conversion_label = "Bdj8CN2g814QuLfF-gM";
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        eval(tC.inclusion_conversion_2);
      }
    }
  }
  if (tC.dedup.ValidRules("267")) {
    if (tc_vars["page_name"] == "aa:RDV:confirmation") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("267", "Adw RLSA - cpte VN rdv seul", "1027", "1995", "3");
        var google_conversion_id = 1062296504;
        var google_conversion_label = "CyBqCNHN_l4QuLfF-gM";
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        eval(tC.inclusion_conversion_2);
      }
    }
  }
  if (tC.dedup.ValidRules("269")) {
    if (tc_vars["page_name"] == "aa:aspageri:estimation:rdv:confirm") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "269",
          "Adw RLSA - cpte VN rdv postestimation",
          "1027",
          "1995",
          "3"
        );
        var google_conversion_id = 1062296504;
        var google_conversion_label = "9b9TCPye814QuLfF-gM";
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        eval(tC.inclusion_conversion_2);
      }
    }
  }
  if (tC.dedup.ValidRules("271")) {
    if (
      tc_vars["page_name"] == "aa:RDV:confirmation" &&
      tc_vars["meeting_purpose"] == "Projet d'achat"
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "271",
          "Adw RLSA - cpte VN rdv vente seul",
          "1027",
          "1995",
          "3"
        );
        var google_conversion_id = 1062296504;
        var google_conversion_label = "do1ACJyh814QuLfF-gM";
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        eval(tC.inclusion_conversion_2);
      }
    }
  }
  if (tC.dedup.ValidRules("273")) {
    if (
      tc_vars["page_name"] == "aa:RDV:confirmation" &&
      tc_vars["meeting_purpose"] == "Offre de reprise pour ma voiture"
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "273",
          "Adw RLSA - cpte VN reprise seul",
          "1027",
          "1995",
          "3"
        );
        var google_conversion_id = 1062296504;
        var google_conversion_label = "ORAsCKic-F4QuLfF-gM";
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        eval(tC.inclusion_conversion_2);
      }
    }
  }
  if (tC.dedup.ValidRules("275")) {
    if (
      tc_vars["page_name"] == "aa:RDV:confirmation" &&
      tc_vars["meeting_purpose"] ==
        "Projet d'achat avec offre de reprise pour ma voiture"
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "275",
          "Adw RLSA - cpte VN rdv mixte seul",
          "1027",
          "1995",
          "3"
        );
        var google_conversion_id = 1062296504;
        var google_conversion_label = "tdzkCPei814QuLfF-gM";
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        eval(tC.inclusion_conversion_2);
      }
    }
  }
  if (tC.dedup.ValidRules("277")) {
    if (tc_vars["page_name"] == "aa:webcallback:confirm") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "277",
          "Adw RLSA - cpte VN webcallback",
          "1027",
          "1995",
          "3"
        );
        var google_conversion_id = 1062296504;
        var google_conversion_label = "S-R6CIab-F4QuLfF-gM";
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        eval(tC.inclusion_conversion_2);
      }
    }
  }
  if (tC.dedup.ValidRules("279")) {
    if (tc_vars["page_name"] == "booking:confirm") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "279",
          "Adw RLSA - cpte VN reservation",
          "1027",
          "1995",
          "3"
        );
        var google_conversion_id = 1062296504;
        var google_conversion_label = "DHmnCIDQ_l4QuLfF-gM";
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        eval(tC.inclusion_conversion_2);
      }
    }
  }
  if (tC.dedup.ValidRules("281")) {
    if (
      tc_vars["page_name"]
        .toString()
        .toLowerCase()
        .indexOf("order:confirm".toLowerCase()) != -1 ||
      tc_vars["page_name"]
        .toString()
        .toLowerCase()
        .indexOf("cash:cb:confirm".toLowerCase()) != -1 ||
      tc_vars["page_name"]
        .toString()
        .toLowerCase()
        .indexOf("cash:transfer:confirm".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("281", "Adw RLSA - cpte VN commande", "1027", "1995", "3");
        var google_conversion_id = 1062296504;
        var google_conversion_label = "U4GeCIaj814QuLfF-gM";
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        eval(tC.inclusion_conversion_2);
      }
    }
  }
  if (tC.dedup.ValidRules("309")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("aramisauto.com".toLowerCase()) != -1
    ) {
      tC.launchTag("309", "Realytics - Page", "1278", "1995", "3");
      window.RY = (function (e) {
        var t = [
          "identify",
          "track",
          "trackLink",
          "trackForm",
          "transaction",
          "page",
        ];
        var n = "realytics";
        var r = function (e) {
          return !!(e && (typeof e == "function" || typeof e == "object"));
        };
        var i = function (e, t) {
          return function () {
            var n = Array.prototype.slice.call(arguments);
            if (!e[t]) e[t] = [];
            e[t].push(n ? n : []);
            if (!e["_q"]) e["_q"] = [];
            e["_q"].push(t);
          };
        };
        var s = function (r) {
          for (var s = 0; s < t.length; s++) {
            var o = t[s];
            if (r) e[r][o] = i(e._q[r], o);
            else e[o] = e[n][o] = i(e._q[n], o);
          }
        };
        var o = function (t, r, i) {
          var o = t ? t : n;
          if (!e[o]) e[o] = {};
          if (!e._q[o]) e._q[o] = {};
          if (r) e._q[o]["init"] = [[r, i ? i : null]];
          s(t);
        };
        if (!e._v) {
          if (!e._q) {
            e._q = {};
            o(null, null, null);
          }
          e.init = function (e, n) {
            var i = n ? (r(n) ? (n["name"] ? n["name"] : null) : n) : null;
            if (i && t)
              for (var s = 0; s < t.length; s++)
                if (i == t[s] || i == "init") return;
            o(i, e, r(n) ? n : null);
            var u = function (e) {
              var t = document.createElement("script");
              t.type = "text/javascript";
              t.async = true;
              t.src =
                ("https:" == document.location.protocol
                  ? "https://"
                  : "http://") + e;
              var n = document.getElementsByTagName("script")[0];
              n.parentNode.insertBefore(t, n);
            };
            u("i.realytics.io/tc.js?cb=" + new Date().getTime());
            u("dcniko1cv0rz.cloudfront.net/realytics-1.2.3.min.gz.js");
          };
        }
        return e;
      })(window.RY || {});
      if (typeof RY.init != "undefined") {
        RY.init("ry-4ro1qr23", { syncTc: true, syncUser: true });
        RY.identify("", {
          firstname: "",
          lastname: "",
          gender: "",
          email: "",
          created: "",
          birthdate: "",
        });
        RY.page();
        if ("") {
          RY.track("", { transaction: { amount: "", orderId: "" } });
        }
      }
    }
  }
  if (tC.dedup.ValidRules("307")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      tC.launchTag("307", "Realytics - Event", "1280", "1995", "3");
      if (typeof RY != "undefined" && typeof RY.init != "undefined") {
        RY.identify("", {
          firstname: "",
          lastname: "",
          gender: tc_vars["user_gender"],
          email: tc_vars["order_email"],
          created: tc_vars["user_status"],
          birthdate: "",
        });
        if (tc_vars["type_vente"]) {
          RY.track(tc_vars["type_vente"], {
            transaction: {
              amount: tc_vars["order_amount_tf_without_sf"],
              orderId: tc_vars["opportunity_id"],
            },
          });
        }
      }
    }
  }
  if (tC.dedup.ValidRules("363")) {
    if (tc_vars["env_template"] == "recherche") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["env_work"] == "prod") {
          if (tC.getCookie("tc_page_counter") != "1") {
            if (tC.getCookie("abtest_retargeting_nextperf") == "B") {
              tC.launchTag("363", "NextPerf - Category", "1449", "1995", "3");
              var listProducts = "";
              for (var i = 0; i < tc_vars["list_product"].length; i++) {
                var product = tc_vars["list_product"][i];
                if (i == 0) {
                  listProducts += product["list_product_id"];
                } else {
                  listProducts += "," + product["list_product_id"];
                }
              }
              (function () {
                var tc = document.createElement("script");
                tc.type = "text/javascript";
                tc.src =
                  "//nxtck.com/act.php?tag=" +
                  "40894" +
                  "&cid=" +
                  listProducts +
                  "&b1=" +
                  tC.internalvars.nextperf_ntesting;
                (
                  document.getElementsByTagName("body")[0] ||
                  document.getElementsByTagName("script")[0].parentNode
                ).insertBefore(tc, null);
              })();
            }
          }
        }
      }
    }
  }
  if (tC.dedup.ValidRules("367")) {
    if (tc_vars["env_template"] == "offres") {
      if (tC.getCookie("tc_page_counter") != "1") {
        if (tC.getCookie("abtest_retargeting_nextperf") == "B") {
          if (tC.getCookie("cookie_pub_optout") == "0") {
            if (tc_vars["env_work"] == "prod") {
              tC.launchTag("367", "NextPerf - Product tag", "133", "1995", "3");
              (function () {
                var tc = document.createElement("script");
                tc.type = "text/javascript";
                tc.src =
                  "//nxtck.com/act.php?tag=" +
                  "27938" +
                  "&pid=" +
                  tc_vars["product_id"] +
                  "&b1=" +
                  tC.internalvars.nextperf_ntesting;
                (
                  document.getElementsByTagName("body")[0] ||
                  document.getElementsByTagName("script")[0].parentNode
                ).insertBefore(tc, null);
              })();
            }
          }
        }
      }
    }
  }
  if (tC.dedup.ValidRules("369")) {
    if (
      tc_vars["page_name"] == "aa:quote:funding" ||
      tC.internalvars.E_DevisLP == "1" ||
      tc_vars["page_name"] == "aa:RDV:confirmation" ||
      (tc_vars["page_name"] == "aa:RDV:confirmation" &&
        tc_vars["meeting_purpose"] == "Projet d'achat") ||
      (tc_vars["page_name"] == "aa:RDV:confirmation" &&
        tc_vars["meeting_purpose"] ==
          "Projet d'achat avec offre de reprise pour ma voiture") ||
      tc_vars["page_name"] == "aa:webcallback:confirm" ||
      tc_vars["page_name"] == "booking:confirm" ||
      tc_vars["page_name"]
        .toString()
        .toLowerCase()
        .indexOf("order:confirm".toLowerCase()) != -1 ||
      tc_vars["page_name"]
        .toString()
        .toLowerCase()
        .indexOf("cash:cb:confirm".toLowerCase()) != -1 ||
      tc_vars["page_name"]
        .toString()
        .toLowerCase()
        .indexOf("cash:transfer:confirm".toLowerCase()) != -1
    ) {
      if (tC.getCookie("tc_page_counter") != "1") {
        if (tC.getCookie("abtest_retargeting_nextperf") == "B") {
          if (tC.getCookie("cookie_pub_optout") == "0") {
            if (tc_vars["env_work"] == "prod") {
              tC.launchTag(
                "369",
                "NextPerf - Transaction Tag",
                "585",
                "1995",
                "3"
              );
              (function () {
                var tc = document.createElement("script");
                tc.type = "text/javascript";
                tc.src =
                  "//nxtck.com/act.php?tag=" +
                  "27940" +
                  "&pid=" +
                  tc_vars["product_id"] +
                  "&id=" +
                  tc_vars["opportunity_id_mere"] +
                  "&mt=" +
                  tc_vars["order_amount_ati_without_sf"] +
                  "&b1=" +
                  tC.internalvars.nextperf_ntesting;
                (
                  document.getElementsByTagName("body")[0] ||
                  document.getElementsByTagName("script")[0].parentNode
                ).insertBefore(tc, null);
              })();
            }
          }
        }
      }
    }
  }
  if (tC.dedup.ValidRules("629")) {
    if (
      tc_vars["page_name"] == "aa:quote:clientInfomations" ||
      tc_vars["page_name"] == "aa:quote:clientInformations"
    ) {
      if (tC.getCookie("abtest_retargeting_nextperf") == "B") {
        if (tC.getCookie("cookie_pub_optout") == "0") {
          if (tc_vars["env_work"] == "prod") {
            tC.launchTag("629", "NextPerf - Basket tag", "244", "1995", "3");
            var scriptElt1 = document.createElement("script");
            scriptElt1.id = "tc_script__1";
            scriptElt1.src =
              "//nxtck.com/act.php?tag=" +
              "27939" +
              "&pid=" +
              tc_vars["product_id"];
            (
              document.getElementsByTagName("body")[0] ||
              document.getElementsByTagName("script")[0].parentNode
            ).insertBefore(scriptElt1, null);
          }
        }
      }
    }
  }
  if (tC.dedup.ValidRules("619")) {
    if (
      tc_vars["page_name"] == "booking:confirm" ||
      tc_vars["page_name"]
        .toString()
        .toLowerCase()
        .indexOf("order:confirm".toLowerCase()) != -1 ||
      tc_vars["page_name"]
        .toString()
        .toLowerCase()
        .indexOf("cash:cb:confirm".toLowerCase()) != -1 ||
      tc_vars["page_name"]
        .toString()
        .toLowerCase()
        .indexOf("cash:transfer:confirm".toLowerCase()) != -1 ||
      tc_vars["page_name"] == "aa:account"
    ) {
      if (tC.getCookie("abtest_retargeting_nextperf") == "B") {
        if (tC.getCookie("cookie_pub_optout") == "0") {
          tC.launchTag("619", "NextPerf - exclusion", "26", "1995", "3");
          tC.scriptElt1 = document.createElement("script");
          tC.scriptElt1.id = "tc_script_619_1";
          tC.scriptElt1.type = "text/javascript";
          tC.scriptElt1.src = "//nxtck.com/act.php?tag=43518";
          (
            document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0] ||
            document.getElementsByTagName("script")[0].parentNode
          ).insertBefore(tC.scriptElt1, null);
        }
      }
    }
  }
  if (tC.dedup.ValidRules("615")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("aramisauto.com".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["env_work"] == "prod") {
          tC.launchTag(
            "615",
            "leboncoin - PIXEL DE RETARGETING",
            "26",
            "1995",
            "3"
          );
          tC.imageElt1 = document.createElement("img");
          tC.imageElt1.id = "tc_img_615_1";
          tC.imageElt1.src = "https://secure.adnxs.com/seg?add=5415045&t=2";
          tC.imageElt1.width = "1";
          tC.imageElt1.height = "1";
          document.body.appendChild(tC.imageElt1);
        }
      }
    }
  }
  if (tC.dedup.ValidRules("613")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["env_work"] == "prod") {
          tC.launchTag(
            "613",
            "leboncoin - PIXEL DE CONVERSION",
            "26",
            "1995",
            "3"
          );
          tC.imageElt1 = document.createElement("img");
          tC.imageElt1.id = "tc_img_613_1";
          tC.imageElt1.src = "https://secure.adnxs.com/px?id=727427&t=2";
          tC.imageElt1.width = "1";
          tC.imageElt1.height = "1";
          document.body.appendChild(tC.imageElt1);
        }
      }
    }
  }
  if (tC.dedup.ValidRules("373")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("373", "Facebook - transaction tag", "1759", "1995", "3");
        (function () {
          var _fbq = window._fbq || (window._fbq = []);
          if (!_fbq.loaded) {
            eval(tC.inclusion_fbds_3);
            _fbq.loaded = true;
          }
        })();
        window._fbq = window._fbq || [];
        window._fbq.push([
          "track",
          "6024943864980",
          { value: "0.00", currency: "EUR" },
        ]);
      }
    }
  }
  if (tC.dedup.ValidRules("555")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("staging.platforms.aramisauto.com".toLowerCase()) == -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tC.getCookie("x-test-running") != "true") {
          tC.launchTag("555", "VideoDesk prod", "551", "1995", "3");
          page_name = tc_vars["page_name"];
          var _videodesk = _videodesk || {};
          _videodesk["departments"] = ["e85deb52fc7d5866e744f8551fabcfbe"];
          _videodesk["firstname"] = "";
          _videodesk["lastname"] = "";
          _videodesk["company"] = "";
          _videodesk["email"] = "";
          _videodesk["phone"] = "";
          _videodesk["customer_lang"] = "";
          _videodesk["customer_id"] = "";
          _videodesk["customer_url"] = "";
          _videodesk["cart_id"] = "";
          _videodesk["cart_url"] = "";
          _videodesk["uid"] = "a5bdcbd5cc2646f9b93ac6742a258a12";
          _videodesk["lang"] = "fr";
          _videodesk["custom_fields"] = {};
          _videodesk["display"] = "off";
          if (page_name === "aa:product") {
            _videodesk["departments"] = ["bd9fdf10c31f0d017aba698286b22804"];
            _videodesk["display"] = "on";
          } else if (page_name === "aa:search:empty") {
            _videodesk["display"] = "on";
          } else if (page_name === "aa:search:similar") {
            _videodesk["display"] = "on";
          } else if (page_name === "aa:erreur_404") {
            _videodesk["display"] = "on";
          } else if (
            page_name === "aa:aspageri:estimation:erreur:double_valuation"
          ) {
            _videodesk["display"] = "on";
          } else if (
            page_name === "aa:aspageri:estimation:erreur:vehicle_not_merged"
          ) {
            _videodesk["departments"] = ["bd9fdf10c31f0d017aba698286b22804"];
            _videodesk["display"] = "on";
          } else if (page_name === "aa:aspageri:estimation:erreur:") {
            _videodesk["departments"] = ["bd9fdf10c31f0d017aba698286b22804"];
            _videodesk["display"] = "on";
          } else if (
            page_name === "aa:aspageri:estimation:erreur:unknown_error"
          ) {
            _videodesk["departments"] = ["bd9fdf10c31f0d017aba698286b22804"];
            _videodesk["display"] = "on";
          } else if (page_name === "aa:booking:confirm:error") {
            _videodesk["departments"] = ["bd9fdf10c31f0d017aba698286b22804"];
            _videodesk["display"] = "on";
          } else if (page_name === "aa:order:confirm:transfer:error") {
            _videodesk["departments"] = ["bd9fdf10c31f0d017aba698286b22804"];
            _videodesk["display"] = "on";
          } else if (page_name === "aa:order:confirm:cb:error") {
            _videodesk["departments"] = ["bd9fdf10c31f0d017aba698286b22804"];
            _videodesk["display"] = "on";
          } else if (
            page_name ===
            "aa:RDV:error:SALESFORCE_SAVEEVENT_METHOD_RETURN_EMPTY_RESPONSE"
          ) {
            _videodesk["departments"] = ["bd9fdf10c31f0d017aba698286b22804"];
            _videodesk["display"] = "on";
          }
          (function () {
            var videodesk = document.createElement("script");
            videodesk.type = "text/javascript";
            videodesk.async = true;
            videodesk.src =
              ("https:" == document.location.protocol
                ? "https://"
                : "http://") + "module-videodesk.com/js/videodesk.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(videodesk, s);
          })();
        }
      }
    }
  }
  if (tC.dedup.ValidRules("571")) {
    tC.launchTag("571", "Aramis tracker - Big data", "26", "1995", "3");
    var arTcVars = tc_vars;
    var oTcVars = {};
    for (var k in arTcVars) {
      if (arTcVars.hasOwnProperty(k) && arTcVars[k]) {
        oTcVars[k] = arTcVars[k];
      }
    }
    var myTags = encodeURIComponent(JSON.stringify(oTcVars));
    tC.pixelTrack.add(
      "//tracker.aramisauto.com/web/tags/site?vars=" +
        myTags +
        "&url=" +
        tc_url +
        "&referrer=" +
        tc_referrer +
        "&device=" +
        tC.internalvars.ua
    );
  }
  if (tC.dedup.ValidRules("575")) {
    if (
      (document.location
        .toString()
        .toLowerCase()
        .indexOf("aramisauto.com/c/vente".toLowerCase()) == -1 &&
        document.location
          .toString()
          .toLowerCase()
          .indexOf("aramisauto.com/c/reprise".toLowerCase()) == -1) ||
      tC.getCookie("x-test-running") != "true" ||
      !tC.match(new String(tC.getCookie("x-test-running")), "", "")
    ) {
      if (tC.getCookie("cookie_stat_optout") == "0") {
        tC.launchTag("575", "MyFeelback", "1867", "1995", "3");
        var _Mfb_ud = {
          search_filters: tc_vars["search_filters"],
          search_trademark: tc_vars["search_trademark"],
          search_annee: tc_vars["search_annee"],
          search_boite_de_vitesse: tc_vars["search_boite_de_vitesse"],
          search_budget: tc_vars["search_budget"],
          search_carburant: tc_vars["search_carburant"],
          search_categorie: tc_vars["search_categorie"],
          search_disponibilite: tc_vars["search_disponibilite"],
          search_equipements_et_options:
            tc_vars["search_equipements_et_options"],
          search_keywords: tc_vars["search_keywords"],
          search_kilometrage: tc_vars["search_kilometrage"],
          search_mensualite: tc_vars["search_mensualite"],
          search_model: tc_vars["search_mensualite"],
          search_puissance: tc_vars["search_puissance"],
          search_results_number: tc_vars["search_results_number"],
          search_typedecredit: tc_vars["search_typedecredit"],
          search_typedevente: tc_vars["search_typedevente"],
          intcmp: tc_vars["intcmp"],
          page_name: tc_vars["page_name"],
          page_cat1: tc_vars["type_vente"],
          page_cat2: tc_vars["page_cat2"],
          page_cat3: tc_vars["page_cat3"],
          order_product_nvn: tc_vars["order_product_NVN"],
          product_unitprice_tf: tc_vars["product_unitprice_tf"],
          events: tc_vars["events"],
          car_date: tc_vars["car_date"],
          car_trademark: tc_vars["car_trademark"],
          car_model: tc_vars["car_model"],
          car_body: tc_vars["car_body"],
          car_doors: tc_vars["car_doors"],
          car_fuel: tc_vars["car_fuel"],
          car_gearbox: tc_vars["car_gearbox"],
          car_engine: tc_vars["car_engine"],
          car_finish: tc_vars["car_finish"],
          car_mileage: tc_vars["car_mileage"],
          car_price: tc_vars["car_price"],
          qri_intentionnistes: tc_vars["QRI_intentionnistes"],
        };
        (function () {
          var mfb = document.createElement("script");
          mfb.type = "text/javascript";
          mfb.async = true;
          mfb.id = "MFBActor";
          mfb.src =
            "https://d3nsr0nz7cj6vi.cloudfront.net/actor/30adfc0487a704849bde2b5384ca63e1-135/action/259200";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(mfb, s);
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("599")) {
    if (
      tc_vars["opportunity_id_deviscoche"]
        .toString()
        .toLowerCase()
        .indexOf("0".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["env_work"] == "prod") {
          if (
            tc_vars["page_name"] == "aa:aspageri:clientInformations:register"
          ) {
            if (tc_vars["type_vente_deviscoche"] == "vn") {
              tC.launchTag(
                "599",
                "AMS V3 - Conv Opp VN via reprise",
                "26",
                "1995",
                "3"
              );
              if (typeof tC.ams !== "object") {
                tC.ams = [];
              }
              tC.ams.idorder = tC.internalvars.oppvente_deviscoche;
              tC.ams.amount = "3";
              tC.ams.currency = "EUR";
              tC.ams.tc_rand = Math.random();
              tC.ams.additional_params =
                "&opp_id=" +
                tc_vars["opportunity_id_deviscoche"] +
                "&ref=" +
                tC.internalvars.tc_referrer +
                "mcon=" +
                "OPP_vente_online" +
                "&url2=" +
                encodeURI(tc_url) +
                "&order_type=" +
                "Opp_VN_deviscoche" +
                "&lead_id=" +
                tc_vars["user_id"] +
                "&user_type=" +
                tc_vars["user_status"] +
                "&tcookie=" +
                tC.getCookie("TCID");
              tC.pixelTrack.add(
                "//aramis.commander1.com/o3/?tcs=1995&idorder=" +
                  tC.ams.idorder +
                  "&amount=" +
                  tC.ams.amount +
                  "&currency=" +
                  tC.ams.currency +
                  tC.ams.additional_params +
                  "&rand=" +
                  tC.ams.tc_rand
              );
            }
          }
        }
      }
    }
  }
  if (tC.dedup.ValidRules("601")) {
    if (
      tc_vars["opportunity_id_deviscoche"]
        .toString()
        .toLowerCase()
        .indexOf("0".toLowerCase()) != -1
    ) {
      if (tc_vars["page_name"] == "aa:aspageri:clientInformations:register") {
        if (tC.getCookie("cookie_pub_optout") == "0") {
          if (tc_vars["env_work"] == "prod") {
            if (tc_vars["type_vente_deviscoche"] == "vo") {
              tC.launchTag(
                "601",
                "AMS V3 - Conv Opp VO via reprise",
                "26",
                "1995",
                "3"
              );
              if (typeof tC.ams !== "object") {
                tC.ams = [];
              }
              tC.ams.idorder = tC.internalvars.oppvente_deviscoche;
              tC.ams.amount = "3";
              tC.ams.currency = "EUR";
              tC.ams.tc_rand = Math.random();
              tC.ams.additional_params =
                "&opp_id=" +
                tc_vars["opportunity_id_deviscoche"] +
                "&ref=" +
                tC.internalvars.tc_referrer +
                "mcon=" +
                "OPP_vente_online" +
                "&url2=" +
                encodeURI(tc_url) +
                "&order_type=" +
                "Opp_VO_deviscoche" +
                "&lead_id=" +
                tc_vars["user_id"] +
                "&user_type=" +
                tc_vars["user_status"] +
                "&tcookie=" +
                tC.getCookie("TCID");
              tC.pixelTrack.add(
                "//aramis.commander1.com/o3/?tcs=1995&idorder=" +
                  tC.ams.idorder +
                  "&amount=" +
                  tC.ams.amount +
                  "&currency=" +
                  tC.ams.currency +
                  tC.ams.additional_params +
                  "&rand=" +
                  tC.ams.tc_rand
              );
            }
          }
        }
      }
    }
  }
  if (tC.dedup.ValidRules("605")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("605", "Bing - Compte VN", "141", "1995", "3");
        (function (w, d, t, r, u) {
          var f, n, i;
          (w[u] = w[u] || []),
            (f = function () {
              var o = { ti: "5175464" };
              (o.q = w[u]), (w[u] = new UET(o)), w[u].push("pageLoad");
            }),
            (n = d.createElement(t)),
            (n.src = r),
            (n.async = 1),
            (n.onload = n.onreadystatechange = function () {
              var s = this.readyState;
              (s && s !== "loaded" && s !== "complete") ||
                (f(), (n.onload = n.onreadystatechange = null));
            }),
            (i = d.getElementsByTagName(t)[0]),
            i.parentNode.insertBefore(n, i);
        })(window, document, "script", "//bat.bing.com/bat.js", "uetq");
        window.uetq = window.uetq || [];
        window.uetq.push({
          ec: tc_vars["events"],
          ea: tc_vars["type_vente"],
          ev: "1",
        });
      }
    }
  }
  if (tC.dedup.ValidRules("609")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("staging.platforms.aramisauto.com".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("609", "VideoDesk staging", "551", "1995", "3");
        page_name = tc_vars["page_name"];
        var _videodesk = _videodesk || {};
        _videodesk["departments"] = ["0fa34f36d635d1b56a8a0a6b844b7b8f"];
        _videodesk["firstname"] = "";
        _videodesk["lastname"] = "";
        _videodesk["company"] = "";
        _videodesk["email"] = "";
        _videodesk["phone"] = "";
        _videodesk["customer_lang"] = "";
        _videodesk["customer_id"] = "";
        _videodesk["customer_url"] = "";
        _videodesk["cart_id"] = "";
        _videodesk["cart_url"] = "";
        _videodesk["uid"] = "587d443f210e12a461f2f89f51ca410e";
        _videodesk["lang"] = "fr";
        _videodesk["custom_fields"] = {};
        _videodesk["display"] = "off";
        if (page_name === "aa:product") {
          _videodesk["departments"] = ["03c8c14c218748dd9f718e00b3dca8d6"];
          _videodesk["display"] = "on";
        } else if (page_name === "aa:search:empty") {
          _videodesk["display"] = "on";
        } else if (page_name === "aa:search:similar") {
          _videodesk["display"] = "on";
        } else if (page_name === "aa:erreur_404") {
          _videodesk["display"] = "on";
        } else if (
          page_name === "aa:aspageri:estimation:erreur:double_valuation"
        ) {
          _videodesk["display"] = "on";
        } else if (
          page_name === "aa:aspageri:estimation:erreur:vehicle_not_merged"
        ) {
          _videodesk["departments"] = ["03c8c14c218748dd9f718e00b3dca8d6"];
          _videodesk["display"] = "on";
        } else if (page_name === "aa:aspageri:estimation:erreur:") {
          _videodesk["departments"] = ["03c8c14c218748dd9f718e00b3dca8d6"];
          _videodesk["display"] = "on";
        } else if (
          page_name === "aa:aspageri:estimation:erreur:unknown_error"
        ) {
          _videodesk["departments"] = ["03c8c14c218748dd9f718e00b3dca8d6"];
          _videodesk["display"] = "on";
        } else if (page_name === "aa:booking:confirm:error") {
          _videodesk["departments"] = ["03c8c14c218748dd9f718e00b3dca8d6"];
          _videodesk["display"] = "on";
        } else if (page_name === "aa:order:confirm:transfer:error") {
          _videodesk["departments"] = ["03c8c14c218748dd9f718e00b3dca8d6"];
          _videodesk["display"] = "on";
        } else if (page_name === "aa:order:confirm:cb:error") {
          _videodesk["departments"] = ["03c8c14c218748dd9f718e00b3dca8d6"];
          _videodesk["display"] = "on";
        } else if (
          page_name ===
          "aa:RDV:error:SALESFORCE_SAVEEVENT_METHOD_RETURN_EMPTY_RESPONSE"
        ) {
          _videodesk["departments"] = ["03c8c14c218748dd9f718e00b3dca8d6"];
          _videodesk["display"] = "on";
        } else if (
          page_name === "aa:RDV:error:OPPORTUNITY_COULD_NOT_BE_CREATED"
        ) {
          _videodesk["departments"] = ["03c8c14c218748dd9f718e00b3dca8d6"];
          _videodesk["display"] = "on";
        }
        (function () {
          var videodesk = document.createElement("script");
          videodesk.type = "text/javascript";
          videodesk.async = true;
          videodesk.src =
            ("https:" == document.location.protocol ? "https://" : "http://") +
            "module-videodesk.com/js/videodesk.js";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(videodesk, s);
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("621")) {
    if (
      tc_vars["page_name"] == "aa:quote:funding" ||
      tC.internalvars.E_DevisLP == "1"
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("621", "Adlead - conversion", "26", "1995", "3");
      }
    }
  }
  if (tC.dedup.ValidRules("634")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .match(
          new RegExp(
            "aramisauto.com/reprise/estimation".replace(
              new RegExp("\\*", "g"),
              ".*"
            ),
            "gi"
          )
        ) ||
      document.location
        .toString()
        .toLowerCase()
        .match(
          new RegExp(
            "aramisauto.com/reprise/votre-projet".replace(
              new RegExp("\\*", "g"),
              ".*"
            ),
            "gi"
          )
        ) ||
      document.location
        .toString()
        .toLowerCase()
        .match(
          new RegExp(
            "aramisauto.com/reprise/vos-coordonnees".replace(
              new RegExp("\\*", "g"),
              ".*"
            ),
            "gi"
          )
        )
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("634", "SaleCyle", "1361", "1995", "3");
        try {
          var __scP =
            document.location.protocol == "https:" ? "https://" : "http://";
          var __scS = document.createElement("script");
          __scS.type = "text/javascript";
          __scS.id = "tc_script__1";
          __scS.async = true;
          __scS.src =
            __scP + "d16fk4ms6rqz1v.cloudfront.net/capture/aramisauto.js";
          document.getElementsByTagName("head")[0].appendChild(__scS);
        } catch (e) {}
      }
    }
  }
  if (tC.dedup.ValidRules("638")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf(
          "informations/voiture-occasion-reconditionnee/".toLowerCase()
        ) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("638", "Ligatus VOR", "71", "1995", "3");
        new Image().src =
          "https://ext.ligatus.com/conversion/?c=118099&a=28243";
        new Image().src =
          "https://ext.ligatus.com/conversion/?c=118097&a=28241";
        new Image().src =
          "https://ext.ligatus.com/conversion/?c=118101&a=28245";
        new Image().src =
          "https://ext.ligatus.com/conversion/?c=118105&a=28247";
        new Image().src =
          "https://ext.ligatus.com/conversion/?c=118119&a=28263";
        new Image().src =
          "https://ext.ligatus.com/conversion/?c=118153&a=28291";
        new Image().src =
          "https://ext.ligatus.com/conversion/?c=118149&a=28287";
        new Image().src =
          "https://ext.ligatus.com/conversion/?c=118151&a=28289";
      }
    }
  }
  if (tC.dedup.ValidRules("644")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event38".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["env_work"] == "prod") {
          tC.launchTag(
            "644",
            "AMS V3 - Connexion mon compte reussie",
            "1097",
            "1995",
            "3"
          );
          if (typeof tC.ams !== "object") {
            tC.ams = [];
          }
          tC.ams.idorder = tC.internalvars.connexionmoncompteok;
          tC.ams.amount = "1";
          tC.ams.currency = "EUR";
          tC.ams.tc_rand = Math.random();
          tC.ams.additional_params =
            "&opp_id=" +
            "&ref=" +
            tC.internalvars.tc_referrer +
            "&url2=" +
            encodeURI(tc_url) +
            "&order_type=" +
            "connexion mon compte reussie" +
            "&lead_id=" +
            tc_vars["user_id"] +
            "&user_type=" +
            "&tcookie=" +
            tC.getCookie("TCID");
          tC.pixelTrack.add(
            "//aramis.commander1.com/o3/?tcs=1995&idorder=" +
              tC.ams.idorder +
              "&amount=" +
              tC.ams.amount +
              "&currency=" +
              tC.ams.currency +
              tC.ams.additional_params +
              "&rand=" +
              tC.ams.tc_rand
          );
        }
      }
    }
  }
  if (tC.dedup.ValidRules("646")) {
    if (tc_vars["env_template"] == "order_identification") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("646", "Target2sell - Basket", "950", "1995", "3");
        var _t2sparams = _t2sparams || {};
        _t2sparams.cID = "SOXWNGUT7FODT6";
        _t2sparams.pID = "1600";
        _t2sparams.eN = "view";
        _t2sparams.iID = tc_vars["es_id"];
        _t2sparams.bS = tc_vars["order_amount_tf_without_sf"];
        _t2sparams.qTE = "1";
        _t2sparams.uEM = tc_vars["email_MD5"];
        _t2sparams.uID = tc_vars["user_id"];
        _t2sparams.hasRankOption = true;
        (function () {
          var t2sScript = document.createElement("script");
          t2sScript.type = "text/javascript";
          t2sScript.async = true;
          t2sScript.src =
            "https:" == document.location.protocol
              ? "https://static.target2sell.com/t2s.min.js"
              : "http://s3.target2sell.com/t2s.min.js";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(t2sScript, s);
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("647")) {
    if (tc_vars["env_template"] == "recherche") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["search_keywords"] == "") {
          tC.launchTag("647", "Target2sell - Category", "948", "1995", "3");
          var _t2sparams = _t2sparams || {};
          _t2sparams.cID = "SOXWNGUT7FODT6";
          _t2sparams.pID = "1400";
          _t2sparams.eN = "view";
          if (tc_vars["search_categorie"] == "Citadine")
            _t2sparams.aID = "Urbaine";
          else if (tc_vars["search_categorie"] == "Sport")
            _t2sparams.aID = "Cabriolet et sport";
          else _t2sparams.aID = tc_vars["search_categorie"];
          _t2sparams.uEM = tc_vars["email_MD5"];
          _t2sparams.uID = tc_vars["user_id"];
          _t2sparams.hasRankOption = true;
          (function () {
            var t2sScript = document.createElement("script");
            t2sScript.type = "text/javascript";
            t2sScript.async = true;
            t2sScript.src =
              "https:" == document.location.protocol
                ? "https://static.target2sell.com/t2s.min.js"
                : "http://s3.target2sell.com/t2s.min.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(t2sScript, s);
          })();
        }
      }
    }
  }
  if (tC.dedup.ValidRules("648")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("648", "Target2sell - Conversion", "954", "1995", "3");
        var _t2sparams = _t2sparams || {};
        _t2sparams.cID = "SOXWNGUT7FODT6";
        _t2sparams.pID = "2400";
        _t2sparams.eN = "view";
        _t2sparams.iID = tc_vars["es_id"];
        _t2sparams.bS = tc_vars["order_amount_tf_without_sf"];
        _t2sparams.qTE = "1";
        _t2sparams.oID = tc_vars["opportunity_id"];
        _t2sparams.uEM = tc_vars["email_MD5"];
        _t2sparams.uID = tc_vars["user_id"];
        _t2sparams.hasRankOption = true;
        (function () {
          var t2sScript = document.createElement("script");
          t2sScript.type = "text/javascript";
          t2sScript.async = true;
          t2sScript.src =
            "https:" == document.location.protocol
              ? "https://static.target2sell.com/t2s.min.js"
              : "http://s3.target2sell.com/t2s.min.js";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(t2sScript, s);
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("649")) {
    if (tc_vars["env_template"] == "HomePageAA") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("649", "Target2sell - Home", "944", "1995", "3");
        var _t2sparams = _t2sparams || {};
        _t2sparams.cID = "SOXWNGUT7FODT6";
        _t2sparams.pID = "1000";
        _t2sparams.eN = "view";
        _t2sparams.uEM = tc_vars["email_MD5"];
        _t2sparams.uID = tc_vars["user_id"];
        _t2sparams.hasRankOption = true;
        (function () {
          var t2sScript = document.createElement("script");
          t2sScript.type = "text/javascript";
          t2sScript.async = true;
          t2sScript.src =
            "https:" == document.location.protocol
              ? "https://static.target2sell.com/t2s.min.js"
              : "http://s3.target2sell.com/t2s.min.js";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(t2sScript, s);
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("650")) {
    if (tc_vars["env_template"] == "offres") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("650", "Target2sell - product", "946", "1995", "3");
        var _t2sparams = _t2sparams || {};
        _t2sparams.cID = "SOXWNGUT7FODT6";
        _t2sparams.pID = "1200";
        _t2sparams.eN = "view";
        _t2sparams.iID = tc_vars["es_id"];
        _t2sparams.uEM = tc_vars["email_MD5"];
        _t2sparams.uID = tc_vars["user_id"];
        _t2sparams.hasRankOption = true;
        (function () {
          var t2sScript = document.createElement("script");
          t2sScript.type = "text/javascript";
          t2sScript.async = true;
          t2sScript.src =
            "https:" == document.location.protocol
              ? "https://static.target2sell.com/t2s.min.js"
              : "http://s3.target2sell.com/t2s.min.js";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(t2sScript, s);
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("651")) {
    if (tc_vars["env_template"] == "recherche") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        if (tc_vars["search_keywords"] != "") {
          tC.launchTag(
            "651",
            "Target2sell - Search result",
            "952",
            "1995",
            "3"
          );
          var _t2sparams = _t2sparams || {};
          _t2sparams.cID = "SOXWNGUT7FODT6";
          _t2sparams.pID = "2000";
          _t2sparams.eN = "view";
          _t2sparams.q = tc_vars["search_keywords"];
          _t2sparams.uEM = tc_vars["email_MD5"];
          _t2sparams.uID = tc_vars["user_id"];
          _t2sparams.hasRankOption = true;
          (function () {
            var t2sScript = document.createElement("script");
            t2sScript.type = "text/javascript";
            t2sScript.async = true;
            t2sScript.src =
              "https:" == document.location.protocol
                ? "https://static.target2sell.com/t2s.min.js"
                : "http://s3.target2sell.com/t2s.min.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(t2sScript, s);
          })();
        }
      }
    }
  }
  if (tC.dedup.ValidRules("689")) {
    if (tc_vars["env_template"] == "offres") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "689",
          "NU - 14_voiture_phone_number",
          "1867",
          "1995",
          "3"
        );
        (function () {
          var tagName = "voiture_phone_number";
          try {
            var formKey =
              '#offer form.special-in.aa-form[action="/phone/callback"]';
            var $form = document.querySelector(formKey);
            if (!$form) {
              return;
            }
            var submitHandler = function (e) {
              e.preventDefault();
              $form.removeEventListener("submit", submitHandler);
              var phone = document.querySelector(
                formKey + ' input[name="phone"]'
              ).value;
              setTimeout(function () {
                $form.submit();
              }, 500);
              if (!!phone) {
                nextuser.identify({
                  subscriber_variables: { phone_number: JSON.stringify(phone) },
                });
                nextuser.track(tagName);
              }
              return false;
            };
            $form.addEventListener("submit", submitHandler);
          } catch (ex) {}
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("690")) {
    if (tc_vars["env_template"] == "offres") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("690", "NU - 15_voiture_email", "1867", "1995", "3");
        (function () {
          var tagName = "voiture_email";
          try {
            var formKey =
              'form[action="/commande/identification/verification-email"]';
            var $form = document.querySelector(formKey);
            if (!$form) {
              return;
            }
            var submitHandler = function (e) {
              e.preventDefault();
              $form.removeEventListener("submit", submitHandler);
              var email = document.querySelector(
                formKey + ' input[name="email"]'
              ).value;
              setTimeout(function () {
                $form.submit();
              }, 500);
              if (!!email) {
                nextuser.identify({ email: email });
                nextuser.track(tagName);
              }
              return false;
            };
            $form.addEventListener("submit", submitHandler);
          } catch (ex) {}
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("691")) {
    if (tc_vars["env_template"] == "offres") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("691", "NU - 16_voiture_contact", "1867", "1995", "3");
        (function () {
          var tagName = "voiture_contact";
          try {
            var formKey = 'form[name="aramis_contact"]';
            var $form = document.querySelector(formKey);
            if (!$form) {
              return;
            }
            var submitHandler = function (e) {
              var email = document.getElementById("aramis_contact_email").value;
              var gender = document.querySelector(
                'input[name="aramis_contact[gender]"]:checked'
              ).value;
              var lastName = document.getElementById("aramis_contact_lastname")
                .value;
              var phoneNumber = document.getElementById("aramis_contact_phone")
                .value;
              var postalCode = document.getElementById("aramis_contact_zipCode")
                .value;
              nextuser.identify({
                email: email,
                lastname: lastName,
                zipcode: postalCode,
                gender: gender,
                subscriber_variables: {
                  phone_number: JSON.stringify(phoneNumber),
                },
              });
              nextuser.track(tagName);
            };
            $form.addEventListener("submit", submitHandler);
          } catch (ex) {}
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("692")) {
    if (tC.getCookie("cookie_pub_optout") == "0") {
      tC.launchTag("692", "NU - 17_header_contact_expert", "1867", "1995", "3");
      (function () {
        try {
          var formKey = '#header-nav form[action="/phone/callback"]';
          var $form = document.querySelector(formKey);
          if (!$form) {
            return;
          }
          $form.addEventListener("submit", function () {
            var phoneNumber = document.querySelector(
              formKey + ' input[name="phone"]'
            ).value;
            nextuser.identify({
              subscriber_variables: { phone_number: phoneNumber },
            });
          });
        } catch (ex) {}
      })();
    }
  }
  if (tC.dedup.ValidRules("693")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("/reprise".toLowerCase()) != -1 ||
      document.location
        .toString()
        .toLowerCase()
        .indexOf("www.aramisauto.com/reprise".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("693", "NU - 18_reprise_phone", "1867", "1995", "3");
        (function () {
          try {
            var formKey = '#takeover form[action="/phone/callback"]';
            var $form = document.querySelector(formKey);
            if (!$form) {
              return;
            }
            $form.addEventListener("submit", function () {
              var phoneNumber = document.querySelector(
                formKey + ' input[name="phone"]'
              ).value;
              nextuser.identify({
                subscriber_variables: { phone_number: phoneNumber },
              });
            });
          } catch (ex) {}
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("694")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("www.aramisauto.com/achat".toLowerCase()) != -1 ||
      document.location
        .toString()
        .toLowerCase()
        .indexOf("/achat".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("694", "NU - 19_achat_alert", "1867", "1995", "3");
        (function () {
          try {
            var submitHandler = function (e) {
              var email = document.getElementById(
                "aramis_alert_search_form_email"
              ).value;
              var lastname = document.getElementById(
                "aramis_alert_search_form_lastname"
              ).value;
              var phone = document.getElementById(
                "aramis_alert_search_form_phone"
              ).value;
              var zipcode = document.getElementById(
                "aramis_alert_search_form_zipCode"
              ).value;
              var gender = document.querySelector(
                'input[name="aramis_alert_search_form[gender]"]:checked'
              ).value;
              nextuser.identify({
                email: email,
                lastname: lastname,
                zipcode: zipcode,
                gender: gender,
                subscriber_variables: { phone_number: JSON.stringify(phone) },
              });
            };
            var formName = '[name="aramis_alert_search_form"]';
            var $form = document.querySelector(formName);
            if (!$form) {
              return;
            }
            $form.addEventListener("submit", submitHandler);
          } catch (ex) {}
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("695")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("/reprise".toLowerCase()) != -1 ||
      document.location
        .toString()
        .toLowerCase()
        .indexOf("www.aramisauto.com/reprise".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("695", "NU - 20_download_app", "1867", "1995", "3");
        (function () {
          try {
            var $form = document.querySelector(".aa-form.send-sms");
            if (!$form) {
              return;
            }
            $form.addEventListener("submit", function () {
              var phoneNumber = document.querySelector(
                '.aa-form.send-sms input[name="phone"]'
              ).value;
              nextuser.identify({
                subscriber_variables: {
                  phone_number: JSON.stringify(phoneNumber),
                },
              });
            });
          } catch (ex) {}
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("696")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("/reprise/estimation".toLowerCase()) != -1 ||
      document.location
        .toString()
        .toLowerCase()
        .indexOf("www.aramisauto.com/reprise/estimation".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("696", "NU - 21_reprise_estimation", "1867", "1995", "3");
        (function () {
          try {
            var formId = "takeover-vehicle-identification";
            var $form = document.getElementById(formId);
            if (!$form) {
              return;
            }
            var submitHandler = function (e) {
              var yearOfFirstUse = document.getElementById(
                "takeover_vehicle_identification_releaseYear"
              ).value;
              var monthOfFirstUser = document.getElementById(
                "takeover_vehicle_identification_releaseMonth"
              ).value;
              var brand = document.getElementById(
                "takeover_vehicle_identification_brand"
              ).value;
              var model = document.getElementById(
                "takeover_vehicle_identification_model"
              ).value;
              var bodywork = document.getElementById(
                "takeover_vehicle_identification_bodywork"
              ).value;
              var fuel = document.getElementById(
                "takeover_vehicle_identification_fuel"
              ).value;
              var transmission = document.getElementById(
                "takeover_vehicle_identification_transmission"
              ).value;
              var engine = document.getElementById(
                "takeover_vehicle_identification_engine"
              ).value;
              var packages = document.getElementById(
                "takeover_vehicle_identification_package"
              ).value;
              var mileage = document.getElementById(
                "takeover_vehicle_identification_mileage"
              ).value;
              nextuser.track("takeover_vehicle_identifications_submission");
              nextuser.identify({
                subscriber_variables: {
                  year_of_first_use: yearOfFirstUse,
                  month_of_first_use: monthOfFirstUser,
                  brand: brand,
                  model: model,
                  bodywork: bodywork,
                  fuel: fuel,
                  transmission: transmission,
                  engine: engine,
                  package: packages,
                  mileage: mileage,
                },
              });
            };
            $form.addEventListener("submit", submitHandler);
          } catch (ex) {}
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("697")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("/reprise/votre-projet".toLowerCase()) != -1 ||
      document.location
        .toString()
        .toLowerCase()
        .indexOf("www.aramisauto.com/reprise/votre-projet".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "697",
          "NU - 23_reprise_votre_projet",
          "1867",
          "1995",
          "3"
        );
        (function () {
          try {
            var formId = "takeover-project";
            var $form = document.getElementById(formId);
            if (!$form) {
              return;
            }
            var submitHandler = function (e) {
              var checkedValue = document.querySelector(
                'input[name="takeover_project[buy_project_choices]"]:checked'
              ).value;
              if (checkedValue !== "3") {
                return;
              }
              var buyProjectMake = document.getElementById(
                "takeover_project_buy_project_make"
              ).value;
              var buyProjectModel = document.getElementById(
                "takeover_project_buy_project_model"
              ).value;
              nextuser.identify({
                subscriber_variables: {
                  buyProjectModel: buyProjectModel,
                  buyProjectMake: buyProjectMake,
                },
              });
            };
            $form.addEventListener("submit", submitHandler);
          } catch (ex) {}
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("698")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("/reprise/vos-coordonnees".toLowerCase()) != -1 ||
      document.location
        .toString()
        .toLowerCase()
        .indexOf("www.aramisauto.com/reprise/vos-coordonnees".toLowerCase()) !=
        -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "698",
          "NU - 24_reprise_vos_cordonnees",
          "1867",
          "1995",
          "3"
        );
        (function () {
          try {
            var formId = "takeover-contact";
            var $form = document.getElementById(formId);
            if (!$form) {
              return;
            }
            var submitHandler = function () {
              var lastname = document.getElementById("aramis_contact_lastname")
                .value;
              var email = document.getElementById("aramis_contact_email").value;
              var phone = document.getElementById("aramis_contact_phone").value;
              var zipcode = document.getElementById("aramis_contact_zipCode")
                .value;
              nextuser.identify({
                email: email,
                lastname: lastname,
                zipcode: zipcode,
                subscriber_variables: { phone_number: JSON.stringify(phone) },
              });
            };
            $form.addEventListener("submit", submitHandler);
          } catch (ex) {}
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("688")) {
    if (tC.getCookie("cookie_pub_optout") == "0") {
      tC.launchTag(
        "688",
        "NU - 13_finances_solution_data",
        "1867",
        "1995",
        "3"
      );
      (function () {
        var tagName = "finances_solution_data";
        try {
          var $formBtn = document.querySelector(
            "#financement-search-form .btn-container button"
          );
          if (!$formBtn) {
            return;
          }
          $formBtn.addEventListener("click", function () {
            try {
              var loaChecked = document.getElementById(
                "search-form-funding-leasing"
              ).checked;
              var creditChecked = document.getElementById(
                "search-form-funding-loan"
              ).checked;
              var mesaureMin = document.getElementById(
                "search-form-funding-monthly-payment-from"
              ).value;
              var mesaureMax = document.getElementById(
                "search-form-funding-monthly-payment-to"
              ).value;
              var financesData = {
                finance_loa: loaChecked,
                finance_credit: creditChecked,
                finance_credit_messaure_min: mesaureMin,
                finance_credit_messaure_max: mesaureMax,
              };
              nextuser.identify({ subscriber_variables: financesData });
              nextuser.track(tagName, financesData);
            } catch (ex) {}
          });
        } catch (ex) {}
      })();
    }
  }
  if (tC.dedup.ValidRules("687")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("www.aramisauto.com/achat".toLowerCase()) != -1 ||
      document.location
        .toString()
        .toLowerCase()
        .indexOf("/achat".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("687", "NU - 12_achat_search", "1867", "1995", "3");
        (function () {
          var tagName = "achat_search";
          try {
            var trackData = function () {
              var MAX_PARAMS = 10;
              var term = document.getElementById("search-engine-input").value;
              var buttonList = document.querySelectorAll(
                ".facette-list button[data-key]"
              );
              var checkboxList = document.querySelectorAll(
                "#vehicle-type input[type=checkbox]"
              );
              var filterObject = {};
              if (!!term) {
                filterObject.search_term = [term];
              }
              for (var i = 0; i < buttonList.length && i < MAX_PARAMS; i++) {
                var elem = buttonList[i];
                var category = elem.getAttribute("data-key");
                var value = elem.getAttribute("data-value");
                if (filterObject[category] === undefined) {
                  filterObject[category] = [];
                }
                filterObject[category].push(value);
              }
              for (var j = 0; j < checkboxList.length; j++) {
                var temp = [];
                var elem2 = checkboxList[j];
                var value2 = elem2.getAttribute("data-value");
                if (elem2.checked) {
                  temp.push(value2);
                }
                if (temp.length > 0) {
                  filterObject["types"] = temp;
                }
              }
              for (var property in filterObject) {
                if (
                  filterObject.hasOwnProperty(property) &&
                  filterObject[property].length > 0
                ) {
                  var arr = filterObject[property];
                  arr.unshift(property);
                  nextuser.track.apply(null, arr);
                  filterObject[property].shift();
                  filterObject[property] = filterObject[property].join(",");
                } else {
                  delete filterObject[property];
                }
              }
              nextuser.track(tagName);
              nextuser.identify({ subscriber_variables: filterObject });
            };
            var button = document.getElementById("search-engine-btn");
            var input = document.getElementById("search-engine-input");
            button.addEventListener("click", function () {
              trackData();
            });
            input.addEventListener("keydown", function (e) {
              if (!e) {
                e = window.event;
              }
              if (e.keyCode === 13 || e.which === 13) {
                trackData();
              }
            });
          } catch (ex) {
            try {
              nextuser.track(tagName + "_error", ex);
            } catch (e) {}
          }
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("676")) {
    if (tC.getCookie("cookie_pub_optout") == "0") {
      tC.launchTag("676", "NU - 01_init", "1867", "1995", "3");
      (function (wid, uid, s) {
        var d = document,
          o = window.nextuser || [],
          v = "1.3",
          methods = [
            "subscriber",
            "subscription",
            "purchase",
            "pageview",
            "hashToActions",
            "unregister",
            "get",
            "alias",
            "track",
            "init",
            "identify",
            "website_variable",
            "subscriber_variable",
            "user_variable",
            "trackDefer",
          ],
          i,
          l,
          el = d.createElement("script"),
          elp = d.getElementsByTagName("script")[0],
          map = function (f) {
            o[f] = function () {
              var a = Array.prototype.slice.call(arguments);
              a.unshift(f);
              o.push(a);
              return this;
            };
          };
        if (!o.get) {
          for (i = 0, l = methods.length; i < l; i += 1) {
            map(methods[i]);
          }
        }
        if (!!wid) {
          o.init(wid);
        }
        if (!!uid) {
          o.identify(uid);
        }
        el.type = "text/javascript";
        el.async = true;
        el.src = s + "/nu.js?" + (wid ? "tid=" + wid : "") + "&v=" + v;
        elp.parentNode.insertBefore(el, elp);
        window.nextuser = o;
        return o;
      })("aramisauto", null, "//track.nextuser.com");
    }
  }
  if (tC.dedup.ValidRules("677")) {
    if (tC.getCookie("cookie_pub_optout") == "0") {
      tC.launchTag("677", "NU - 02_login_popup", "1867", "1995", "3");
      (function () {
        var tagName = "login_popup";
        try {
          var elem = document.querySelector(
            '.account-login-sub .aa-form[name="account-login-form"]'
          );
          if (!elem) {
            return;
          }
          elem.addEventListener("submit", function () {
            var validity1 =
              document.querySelectorAll("#account-email.elem-success").length >
              0;
            var validity2 =
              document.querySelectorAll("#account-password.elem-success")
                .length > 0;
            var email = document.querySelector("#account-email-form").value;
            if (validity1 && validity2 && !!email && nu.R_MAIL.test(email)) {
              nextuser.identify(email);
              nextuser.track(tagName);
            }
          });
        } catch (ex) {
          try {
            nextuser.track(tagName + "_error", ex);
          } catch (e) {}
        }
      })();
    }
  }
  if (tC.dedup.ValidRules("678")) {
    if (tC.getCookie("cookie_pub_optout") == "0") {
      tC.launchTag("678", "NU - 03_forget_password", "1867", "1995", "3");
      (function () {
        var tagName = "forget_password";
        try {
          var elem = document.querySelector("#password-forget-dialog button");
          if (!elem) {
            return;
          }
          elem.addEventListener("click", function () {
            var validity =
              document.querySelectorAll("#password-forget-dialog .elem-success")
                .length > 0;
            var email = document.querySelector(
              "#password-forget-dialog .elem-success input"
            ).value;
            if (validity && !!email && nu.R_MAIL.test(email)) {
              nextuser.identify(email);
              nextuser.track(tagName);
            }
          });
        } catch (ex) {
          try {
            nextuser.track(tagName + "_error", ex);
          } catch (e) {}
        }
      })();
    }
  }
  if (tC.dedup.ValidRules("679")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("/clients/login".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("679", "NU - 04_clients_login", "1867", "1995", "3");
        (function () {
          var tagName = "clients_login";
          try {
            var elem = document.querySelector(
              '#login-container form[name="check-account-email-form"]'
            );
            if (!elem) {
              return;
            }
            elem.addEventListener("submit", function () {
              var validity =
                document.querySelectorAll("#account-email.elem-success ")
                  .length > 0;
              var email = document.querySelectorAll(
                "#account-email input[id='account-email-form'"
              )[1].value;
              if (!!email && validity && nu.R_MAIL.test(email)) {
                nextuser.identify(email);
                nextuser.track(tagName);
              }
            });
          } catch (ex) {
            try {
              nextuser.track(tagName + "_error", ex);
            } catch (e) {}
          }
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("680")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("/clients/registration".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("680", "NU - 05_client_registration", "1867", "1995", "3");
        (function () {
          var tagName = "client_registration";
          try {
            var elem = document.querySelector(
              '#part-one .aa-form[name="fos_user_registration_form"'
            );
            if (!elem) {
              return;
            }
            elem.addEventListener("submit", function () {
              var success =
                document.querySelectorAll("#create-registration .elem-success")
                  .length >= 8;
              var email = document.getElementById(
                "fos_user_registration_form_email"
              ).value;
              var male = document.getElementById(
                "fos_user_registration_form_gender_0"
              ).checked;
              var name = document.getElementById(
                "fos_user_registration_form_firstname"
              ).value;
              var lastName = document.getElementById(
                "fos_user_registration_form_lastname"
              ).value;
              var phoneNumber = document.getElementById(
                "fos_user_registration_form_phone"
              ).value;
              var postalCode = document.getElementById(
                "fos_user_registration_form_zipCode"
              ).value;
              var newsletter = document.getElementById(
                "fos_user_registration_form_newsletter_all_aramis"
              ).checked;
              if (success && nu.R_MAIL.test(email)) {
                nextuser.identify({
                  email: email,
                  firstname: name,
                  lastname: lastName,
                  gender: male ? "m" : "f",
                  zipcode: postalCode,
                  subscriber_variables: {
                    phone_number: phoneNumber,
                    newsletter: newsletter,
                  },
                });
                nextuser.track(tagName);
              }
            });
          } catch (ex) {
            try {
              nextuser.track(tagName + "_error", ex);
            } catch (e) {}
          }
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("681")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("/contact/prise-rdv/vos-coordonnees".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "681",
          "NU - 06_contact_registration",
          "1867",
          "1995",
          "3"
        );
        (function () {
          var tagName = "contact_registration";
          try {
            var elem = document.querySelector("#appointment .aa-form");
            if (!elem) {
              return;
            }
            elem.addEventListener("submit", function () {
              var male = document.getElementById("aramis_contact_gender_0")
                .checked;
              var name = document.getElementById("aramis_contact_lastname")
                .value;
              var email = document.getElementById("aramis_contact_email").value;
              var number = document.getElementById("aramis_contact_phone")
                .value;
              var postalCode = document.getElementById("aramis_contact_zipCode")
                .value;
              if (!!email && nu.R_MAIL.test(email)) {
                nextuser.identify({
                  email: email,
                  gender: male ? "m" : "f",
                  lastname: name,
                  zipcode: postalCode,
                  subscriber_variables: { phone_number: number },
                });
                nextuser.track(tagName);
              }
            });
          } catch (ex) {
            try {
              nextuser.track(tagName + "_error", ex);
            } catch (e) {}
          }
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("682")) {
    if (document.location.toString() == "www.aramisauto.com") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("682", "NU - 07_purchase_search", "1867", "1995", "3");
        (function () {
          var tagName = "purchase_search";
          var trackData = function () {
            var searchValue = document.getElementById("search-engine-input")
              .value;
            var maxPrice = document.getElementById("max-price").value;
            var kilometer = document.querySelector(
              "#km-section .km-maximal select"
            ).value;
            var searchValues = {
              search_value: searchValue,
              seach_kilometer: kilometer,
              search_max_price: maxPrice,
            };
            nextuser.identify({ subscriber_variables: searchValues });
            nextuser.track(tagName, searchValue, kilometer, maxPrice);
          };
          try {
            var button = document.querySelector(
              "#top-search .form-container.achat-form.active .search-engine-btn"
            );
            var input = document.getElementById("search-engine-input");
            if (!button || !input) {
              return;
            }
            button.addEventListener("click", function () {
              trackData();
            });
            input.addEventListener("keydown", function (e) {
              if (!e) {
                e = window.event;
              }
              if (e.keyCode === 13 || e.which === 13) {
                trackData();
              }
            });
          } catch (ex) {
            try {
              nextuser.track(tagName + "_error", ex);
            } catch (e) {}
          }
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("683")) {
    if (document.location.toString() == "www.aramisauto.com") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("683", "NU - 08_reprise_search", "1867", "1995", "3");
        (function () {
          var tagName = "reprise_search";
          try {
            var button = document.querySelector(
              "#takeover-vehicle-identification .search-engine-btn"
            );
            if (!button) {
              return;
            }
            button.addEventListener("click", function () {
              var relaseYear = document.getElementById(
                "takeover_vehicle_identification_releaseYear"
              ).value;
              var relaseMonth = document.getElementById(
                "takeover_vehicle_identification_releaseMonth"
              ).value;
              var carBrand = document.getElementById(
                "takeover_vehicle_identification_brand"
              ).value;
              var carModel = document.getElementById(
                "takeover_vehicle_identification_model"
              ).value;
              var searchValues = {
                release_date: relaseMonth + "/" + relaseYear,
                car_brand: carBrand,
                car_model: carModel,
              };
              nextuser.track(
                tagName,
                searchValues.release_date,
                searchValues.car_brand,
                searchValues.car_model
              );
              nextuser.identify({ subscriber_variables: searchValues });
            });
          } catch (ex) {
            try {
              nextuser.track(tagName + "_error", ex);
            } catch (e) {}
          }
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("684")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("/contact/prise-rdv".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("684", "NU - 09_appointment_place", "1867", "1995", "3");
        (function () {
          var tagName = "appointment_place";
          try {
            var button = document.querySelector("#appointment .button-simple");
            var input = document.getElementById("place_input");
            if (!button || !input) {
              return;
            }
            button.addEventListener("click", function () {
              var searchPlace = input.value;
              if (!!searchPlace) {
                nextuser.identify({
                  subscriber_variables: { search_place: searchPlace },
                });
                nextuser.track(tagName, searchPlace);
              }
            });
            input.addEventListener("keydown", function (e) {
              if (!e) {
                e = window.event;
              }
              if (e.keyCode === 13 || e.which === 13) {
                var searchPlace = input.value;
                if (!!searchPlace) {
                  nextuser.identify({
                    subscriber_variables: { search_place: searchPlace },
                  });
                  nextuser.track(tagName, searchPlace);
                }
              }
            });
          } catch (ex) {
            try {
              nextuser.track(tagName + "_error", ex);
            } catch (e) {}
          }
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("685")) {
    if (document.location.toString() == "www.aramisauto.com") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("685", "NU - 10_phone_number", "1867", "1995", "3");
        (function () {
          var tagName = "phone_number";
          try {
            var form = document.querySelector(
              '#page .container-contact form[name="webcallback-form"'
            );
            if (!form) {
              return;
            }
            form.addEventListener("submit", function () {
              var phoneNumber = document.querySelector(
                "#page .container-contact .number-container.elem-success input"
              ).value;
              if (!!phoneNumber) {
                nextuser.identify({
                  subscriber_variables: { phone_number: phoneNumber },
                });
                nextuser.track(tagName);
              }
            });
          } catch (ex) {
            try {
              nextuser.track(tagName + "_error", ex);
            } catch (e) {}
          }
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("686")) {
    if (document.location.toString() == "www.aramisauto.com") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("686", "NU - 11_newsletter_login", "1867", "1995", "3");
        (function () {
          var tagName = "newsletter_subscription";
          try {
            var form = document.getElementById("suscribe-myself");
            if (!form) {
              return;
            }
            form.addEventListener("submit", function () {
              var email = document.querySelector(
                "#suscribe-myself" + " #email-form.elem-success input"
              ).value;
              if (!!email && nu.R_MAIL.test(email)) {
                nextuser.identify(email);
                nextuser.track(tagName);
              }
            });
          } catch (ex) {
            try {
              nextuser.track(tagname + "_error", ex);
            } catch (e) {}
          }
        })();
      }
    }
  }
  if (tC.dedup.ValidRules("706")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("/contact/prise-rdv".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "706",
          "Ad4Screen- Visite - GÃ©nÃ©rique",
          "26",
          "1995",
          "3"
        );
        tC.iframeElt1 = document.createElement("iframe");
        tC.iframeElt1.id = "tc_iframe_706_1";
        tC.iframeElt1.src = "https://ad4screen.go2cloud.org/aff_l?offer_id=474";
        tC.iframeElt1.scrolling = "no";
        tC.iframeElt1.frameBorder = "0";
        tC.iframeElt1.width = "1";
        tC.iframeElt1.height = "1";
        document.body.appendChild(tC.iframeElt1);
      }
    }
  }
  if (tC.dedup.ValidRules("707")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("/contact/prise-rdv/vos-coordonnees".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "707",
          "Ad4Screen- Visite - CoordonnÃ©es",
          "26",
          "1995",
          "3"
        );
        tC.iframeElt1 = document.createElement("iframe");
        tC.iframeElt1.id = "tc_iframe_707_1";
        tC.iframeElt1.src =
          "https://ad4screen.go2cloud.org/aff_goal?a=l&goal_id=340";
        tC.iframeElt1.scrolling = "no";
        tC.iframeElt1.frameBorder = "0";
        tC.iframeElt1.width = "1";
        tC.iframeElt1.height = "1";
        document.body.appendChild(tC.iframeElt1);
      }
    }
  }
  if (tC.dedup.ValidRules("708")) {
    if (tc_vars["page_name"] == "aa:RDV:confirmation") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "708",
          "Ad4Screen- Visite - Confirmation",
          "26",
          "1995",
          "3"
        );
        tC.iframeElt1 = document.createElement("iframe");
        tC.iframeElt1.id = "tc_iframe_708_1";
        tC.iframeElt1.src =
          "https://ad4screen.go2cloud.org/aff_goal?a=l&goal_id=342";
        tC.iframeElt1.scrolling = "no";
        tC.iframeElt1.frameBorder = "0";
        tC.iframeElt1.width = "1";
        tC.iframeElt1.height = "1";
        document.body.appendChild(tC.iframeElt1);
      }
    }
  }
  if (tC.dedup.ValidRules("710")) {
    if (
      document.location
        .toString()
        .toLowerCase()
        .indexOf("aramisauto.com".toLowerCase()) != -1
    ) {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("710", "Ad4Screen- Facebook", "26", "1995", "3");
        !(function (f, b, e, v, n, t, s) {
          if (f.fbq) return;
          n = f.fbq = function () {
            n.callMethod
              ? n.callMethod.apply(n, arguments)
              : n.queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = !0;
          n.version = "2.0";
          n.queue = [];
          t = b.createElement(e);
          t.async = !0;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        })(
          window,
          document,
          "script",
          "https://connect.facebook.net/en_US/fbevents.js"
        );
        fbq("init", "1828825024008166");
        fbq("track", "PageView");
      }
    }
  }
  if (tC.dedup.ValidRules("711")) {
    if (tc_vars["env_template"] == "offres") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "711",
          "RETARGETING DEVIS ABANDON NOTIFY",
          "26",
          "1995",
          "3"
        );
        var scriptEltG = document.createElement("script");
        scriptEltG.type = "text/javascript";
        scriptEltG.src =
          "https://adtrack.adleadevent.com/mailNotification.php?st=49cfdd98-9cc0-4e41-a672-25b6ef7a3e4c&t=devis&productID=tc_vars[";
        document.body.appendChild(scriptEltG);
      }
    }
  }
  if (tC.dedup.ValidRules("712")) {
    if (tc_vars["page_name"] == "aa:quote:funding") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("712", "Retargeting Devis Conf Notify", "26", "1995", "3");
        new Image().src =
          "https://adtrack.adleadevent.com/adtcker.php?st=49cfdd98-9cc0-4e41-a672-25b6ef7a3e4c&c=1";
      }
    }
  }
  if (tC.dedup.ValidRules("713")) {
    if (tc_vars["env_template"] == "offres") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag(
          "713",
          "RETARGETING FICHE OFFRE NOTIFY",
          "26",
          "1995",
          "3"
        );
        var scriptEltG = document.createElement("script");
        scriptEltG.type = "text/javascript";
        scriptEltG.src =
          "https://adtrack.adleadevent.com/mailNotification.php?st=49cfdd98-9cc0-4e41-a672-25b6ef7a3e4c&t=relanceProduit&productId=tc_vars[";
        document.body.appendChild(scriptEltG);
      }
    }
  }
  if (tC.dedup.ValidRules("714")) {
    if (tc_vars["env_template"] == "recherche") {
      if (tC.getCookie("cookie_pub_optout") == "0") {
        tC.launchTag("714", "RETARGETING MOTEUR NOTIFY", "26", "1995", "3");
        var scriptEltG = document.createElement("script");
        scriptEltG.type = "text/javascript";
        scriptEltG.src =
          "https://adtrack.adleadevent.com/mailNotification.php?st=49cfdd98-9cc0-4e41-a672-25b6ef7a3e4c&filters=marque:tc_vars[";
        document.body.appendChild(scriptEltG);
      }
    }
  }
  if (tC.dedup.ValidRules("215")) {
    if (
      tc_vars["events"]
        .toString()
        .toLowerCase()
        .indexOf("event8".toLowerCase()) != -1 ||
      tc_vars["order_evaluation_id"] != "" ||
      tc_vars["page_name"] == "aa:RDV:confirmation" ||
      tc_vars["page_name"] == "aa:aspageri:estimation:rdv:confirm"
    ) {
      if (tC.getCookie("cookie_stat_optout") == "0") {
        tC.launchTag(
          "215",
          "TagCommander - Reporting Deduplication v1.2",
          "237",
          "1995",
          "3"
        );
        if (typeof tC.temp == "undefined") {
          tC.temp = {};
        }
        tC.temp.ids = "1995";
        tC.temp.ido = tC.internalvars.dedup_report_id;
        tC.temp.ao = "";
        tC.temp.da = new Date().getTime();
        tC.temp.cn = "tc_cj_v2";
        tC.temp.tccj =
          tC.getCookie(tC.temp.cn) !== ""
            ? escape(tC.uncrypt(tC.getCookie(tC.temp.cn)))
            : "";
        tC.temp.p = "";
        tC.temp.c = tC.array_launched_tags_keys;
        tC.temp.d = tC.dedup;
        tC.temp.e =
          "&lasteventall=" +
          (typeof tC.temp.d.LeA !== "undefined" && tC.temp.d.LeA != false
            ? tC.temp.d.LeA
            : "") +
          "&lasteventalldetail=" +
          (typeof tC.temp.d.LeAD !== "undefined" && tC.temp.d.LeAD != false
            ? tC.temp.d.LeAD
            : "") +
          "&lasteventclick=" +
          (typeof tC.temp.d.LeC !== "undefined" && tC.temp.d.LeC != false
            ? tC.temp.d.LeC
            : "") +
          "&lasteventclickdetail=" +
          (typeof tC.temp.d.LeCD !== "undefined" && tC.temp.d.LeCD != false
            ? tC.temp.d.LeCD
            : "") +
          "&lasteventview=" +
          (typeof tC.temp.d.LeV !== "undefined" && tC.temp.d.LeV != false
            ? tC.temp.d.LeV
            : "") +
          "&lasteventviewdetail=" +
          (typeof tC.temp.d.LeVD !== "undefined" && tC.temp.d.LeVD != false
            ? tC.temp.d.LeVD
            : "");
        if (tC.getCookie("TCID") !== null)
          tC.temp.p += "&TCID=" + tC.getCookie("TCID");
        if (tC.getCookie("TCSESSION") !== null)
          tC.temp.p += "&TCSESSION=" + tC.getCookie("TCSESSION");
        tC.temp.p += "&ordertime=" + tC.temp.da;
        tC.temp.p += "&tagsCode=" + tC.temp.c;
        tC.pixelTrack.add(
          "//manager.tagcommander.com/dedup/report/?tcs=" +
            tC.temp.ids +
            "&orderid=" +
            tC.temp.ido +
            "&amountorder=" +
            tC.temp.ao +
            "&tccj=" +
            tC.temp.tccj +
            tC.temp.e +
            tC.temp.p
        );
      }
    }
  }
}
function tc_events_3(tc_elt, tc_id_event, tc_array_events) {
  tc_array_events["id"] = tc_id_event;
  (function () {
    var l = "id|omn_events".split("|");
    for (var k in l) {
      if (!tc_array_events.hasOwnProperty(l[k])) {
        tc_array_events[l[k]] = "";
      }
    }
  })();
  if (tc_array_events["id"] == "1") {
    tC.launchTag("e1", "omn_events", "-1", "1995", "3");
    tC.log("test fanta ZANOX");
    eval(tC.inclusion_s_code_2);
    s.events = tc_vars["events"];
    var s_code = s.t();
    if (s_code) document.write(s_code);
  }
}
/*
page: http://www.aramisauto.com/
url: https://public.aramisauto.com/tc_AramisAutoV2_3.js?d=20161220
*/
