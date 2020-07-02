"object" !== typeof JSON && (JSON = {});
(function () {
  function B(g) {
    return 10 > g ? "0" + g : g;
  }
  function L(g) {
    M.lastIndex = 0;
    return M.test(g)
      ? '"' +
          g.replace(M, function (g) {
            var m = X[g];
            return "string" === typeof m
              ? m
              : "\\u" + ("0000" + g.charCodeAt(0).toString(16)).slice(-4);
          }) +
          '"'
      : '"' + g + '"';
  }
  function F(g, A) {
    var m,
      p,
      x,
      G,
      u = r,
      s,
      h = A[g];
    h &&
      "object" === typeof h &&
      "function" === typeof h.toJSON &&
      (h = h.toJSON(g));
    "function" === typeof y && (h = y.call(A, g, h));
    switch (typeof h) {
      case "string":
        return L(h);
      case "number":
        return isFinite(h) ? String(h) : "null";
      case "boolean":
      case "null":
        return String(h);
      case "object":
        if (!h) return "null";
        r += C;
        s = [];
        if ("[object Array]" === Object.prototype.toString.apply(h)) {
          G = h.length;
          for (m = 0; m < G; m += 1) s[m] = F(m, h) || "null";
          x =
            0 === s.length
              ? "[]"
              : r
              ? "[\n" + r + s.join(",\n" + r) + "\n" + u + "]"
              : "[" + s.join(",") + "]";
          r = u;
          return x;
        }
        if (y && "object" === typeof y)
          for (G = y.length, m = 0; m < G; m += 1)
            "string" === typeof y[m] &&
              ((p = y[m]),
              (x = F(p, h)) && s.push(L(p) + (r ? ": " : ":") + x));
        else
          for (p in h)
            Object.prototype.hasOwnProperty.call(h, p) &&
              (x = F(p, h)) &&
              s.push(L(p) + (r ? ": " : ":") + x);
        x =
          0 === s.length
            ? "{}"
            : r
            ? "{\n" + r + s.join(",\n" + r) + "\n" + u + "}"
            : "{" + s.join(",") + "}";
        r = u;
        return x;
    }
  }
  "function" !== typeof Date.prototype.toJSON &&
    ((Date.prototype.toJSON = function (g) {
      return isFinite(this.valueOf())
        ? this.getUTCFullYear() +
            "-" +
            B(this.getUTCMonth() + 1) +
            "-" +
            B(this.getUTCDate()) +
            "T" +
            B(this.getUTCHours()) +
            ":" +
            B(this.getUTCMinutes()) +
            ":" +
            B(this.getUTCSeconds()) +
            "Z"
        : null;
    }),
    (String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (
      g
    ) {
      return this.valueOf();
    }));
  var N = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    M = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    r,
    C,
    X = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\",
    },
    y;
  "function" !== typeof JSON.stringify &&
    (JSON.stringify = function (g, A, m) {
      var p;
      C = r = "";
      if ("number" === typeof m) for (p = 0; p < m; p += 1) C += " ";
      else "string" === typeof m && (C = m);
      if (
        (y = A) &&
        "function" !== typeof A &&
        ("object" !== typeof A || "number" !== typeof A.length)
      )
        throw Error("JSON.stringify");
      return F("", { "": g });
    });
  "function" !== typeof JSON.parse &&
    (JSON.parse = function (g, r) {
      function m(g, p) {
        var u,
          s,
          h = g[p];
        if (h && "object" === typeof h)
          for (u in h)
            Object.prototype.hasOwnProperty.call(h, u) &&
              ((s = m(h, u)), void 0 !== s ? (h[u] = s) : delete h[u]);
        return r.call(g, p, h);
      }
      var p;
      g = String(g);
      N.lastIndex = 0;
      N.test(g) &&
        (g = g.replace(N, function (g) {
          return "\\u" + ("0000" + g.charCodeAt(0).toString(16)).slice(-4);
        }));
      if (
        /^[\],:{}\s]*$/.test(
          g
            .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
            .replace(
              /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
              "]"
            )
            .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
        )
      )
        return (
          (p = eval("(" + g + ")")),
          "function" === typeof r ? m({ "": p }, "") : p
        );
      throw new SyntaxError("JSON.parse");
    });
})();
try {
  (function () {
    var B, L, F, N, M, r, C, X, y, g, A, m, p, x, G, u, s, h;
    function w(a, b) {
      try {
        var c = Array.prototype.slice.call(arguments);
        if (H) {
          var d = new Date();
          a.apply(null, c.slice(2));
          H.apply(null, [b, new Date().getTime() - d.getTime()]);
        } else a.apply(null, c.slice(2));
      } catch (e) {
        k(e);
      }
    }
    function Y(a) {
      S -= 1;
      Z();
      n.methods & I && a && (J(z), (t = K(T)));
    }
    function Z() {
      return 0 == S ? (z && z.apply(null, []), !0) : !1;
    }
    function O(a, b) {
      var c = !1;
      setTimeout(function () {
        c || ((c = !0), Y(!1));
      }, fa);
      try {
        S += 1;
        var d = Array.prototype.slice.call(arguments),
          e = H
            ? [
                function () {
                  var a = new Date();
                  return function (d) {
                    H.apply(null, [b, new Date().getTime() - a.getTime()]);
                    c || ((c = !0), Y(d));
                  };
                },
                f,
              ]
            : [
                function () {
                  return function (b) {
                    c || ((c = !0), Y(b));
                  };
                },
                f,
              ];
        e.push(d.slice(2));
        a.apply(null, e);
      } catch (l) {
        k(l);
      }
    }
    function ga(a) {
      try {
        for (var b = "", c = [89, 231, 225, 55], d = 0; d < a.length; d++)
          b += String.fromCharCode(a.charCodeAt(d) ^ c[d % c.length]);
        return b;
      } catch (e) {
        return k(e), "";
      }
    }
    function J(a) {
      try {
        var b = null;
        try {
          b = document.createElement(
            '\x3ciframe name\x3d"' + encodeURIComponent(D) + "-" + P + '"/\x3e'
          );
        } catch (c) {
          (b = document.createElement("iframe")),
            (b.name = encodeURIComponent(D + "-" + P)),
            k(c);
        }
        b.id = encodeURIComponent(D) + "-" + P;
        b.width = "0";
        b.height = "0";
        b.style.display = "none";
        b.border = "0";
        document.body.appendChild(b);
        var d = b.contentDocument || b.contentWindow.document;
        d.open();
        d.write("\x3chtml\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e");
        d.close();
        var e = [];
        e.push("t\x3d" + encodeURIComponent(D));
        e.push("x\x3d" + encodeURIComponent(P));
        for (var l in U) e.push(l + "\x3d" + encodeURIComponent(U[l]));
        var f = d.createElement("form");
        f.enctype = "multipart/form-data";
        f.method = "POST";
        f.action = V + "/s2?" + e.join("\x26");
        f.target = b.id;
        P += 1;
        var q = d.createElement("input");
        q.name = "_f";
        q.type = "hidden";
        q.value = $.encode(ga(JSON.stringify(t)));
        f.appendChild(q);
        d.body.appendChild(f);
        d = function () {
          a();
        };
        b.attachEvent
          ? b.attachEvent("onload", d)
          : b.addEventListener
          ? b.addEventListener("load", d, !1)
          : (b.onload = d);
        f.submit();
      } catch (Q) {
        a(Q), k(Q);
      }
    }
    function K(a) {
      var b;
      if (null == a || "object" != typeof a) return a;
      if (a instanceof Date) return (b = new Date()), b.setTime(a.getTime()), b;
      if (a instanceof Array) {
        b = [];
        for (var c = 0, d = a.length; c < d; c++) b[c] = K(a[c]);
        return b;
      }
      if (a instanceof Object) {
        b = {};
        for (c in a) a.hasOwnProperty(c) && (b[c] = K(a[c]));
        return b;
      }
      throw Error("Unable to copy obj! Its type isn't supported.");
    }
    function aa(a, b) {
      try {
        String.prototype.trim ||
          (String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, "");
          });
        for (var c = b.split(","), d = 0; d < c.length; d++)
          for (
            var e = c[d].trim(), l = a, v = e.split("."), q = 0;
            q < v.length;
            q++
          )
            if (0 != q) {
              var Q = l[v[q]];
              if (Q) q == v.length - 1 ? f(e, Q.toString()) : (l = Q);
              else break;
            }
      } catch (g) {
        k(g);
      }
    }
    function ma() {
      var a = document.createElement("canvas");
      if (a) {
        var b = null;
        try {
          b =
            a.getContext("webgl") ||
            a.getContext("experimental-webgl") ||
            a.getContext("moz-webgl") ||
            a.getContext("webkit-3d");
        } catch (c) {
          k("failed to get webgl context: " + c);
          return;
        }
        if (b) {
          f("webgl-supported", !0);
          f("webgl-extensions", b.getSupportedExtensions());
          try {
            var d =
              b.getExtension("EXT_texture_filter_anisotropic") ||
              b.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
              b.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            d
              ? f(
                  "webgl-max-aa",
                  b.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                )
              : f("webgl-max-aa", null);
          } catch (e) {
            k(e);
          }
          try {
            f("webgl-version", b.getParameter(b.VERSION)),
              f(
                "webgl-glsl-version",
                b.getParameter(b.SHADING_LANGUAGE_VERSION)
              ),
              f("webgl-vendor", b.getParameter(b.VENDOR)),
              f("webgl-renderer", b.getParameter(b.RENDERER));
          } catch (l) {
            k(l);
          }
          try {
            b.getExtension("WEBGL_debug_renderer_info"),
              f("webgl-vendor-real", b.getParameter(37445)),
              f("webgl-renderer-real", b.getParameter(37446));
          } catch (v) {
            k(v);
          }
        } else f("webgl-supported", !1);
      } else k("canvas not available for webgl");
    }
    function na(a) {
      var b = a(),
        c = { iceServers: [{ url: "stun:stun.l.google.com:19302" }] },
        d,
        e =
          window.RTCPeerConnection ||
          window.mozRTCPeerConnection ||
          window.webkitRTCPeerConnection;
      if (e) {
        var l = function (b) {},
          v = [];
        (function () {
          d = new e(c);
          d.onicecandidate = function (a) {
            a.candidate && v.push(a.candidate);
            if ("complete" == d.iceGatheringState) {
              a = {};
              for (var c = 0; c < v.length; c++)
                try {
                  var e = v[c].candidate.split(" ");
                  8 <= e.length && (e[4] in a || (a[e[4]] = { type: e[7] }));
                } catch (l) {}
              f("webrtc-addrs", a);
              f("webrtc-sdp", d.localDescription.sdp);
              b(!0);
            }
          };
          d.createDataChannel("", { reliable: !1 });
          d.createOffer(function (a) {
            d.setLocalDescription(a, function (a) {}, l);
          }, l);
        })();
      } else k("webrtc not supported");
    }
    function oa(a) {
      var b = document.createElement("canvas");
      if (!b) return null;
      b.width = 999;
      if (!b.getContext) return null;
      b = b.getContext("2d");
      if (!b) return null;
      b.font = "100pt Arial";
      b.textBaseline = "top";
      return b.measureText(a).width;
    }
    function pa() {
      for (var a = [100], b = 0; b < a.length; b++) {
        var c =
            "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789",
          d = a[b],
          e = document.createElement("canvas");
        if (e && (oa(c), e.getContext)) {
          var l = e.getContext("2d");
          l &&
            ((e.width = 999),
            (l.font = d + "pt Arial"),
            (l.textBaseline = "top"),
            l.fillText(c, 2, 2),
            e.toDataURL(),
            (c = R.algo.SHA1.create()),
            c.update(e.toDataURL().toString()),
            f("canvas-print-" + d + "-999", c.finalize().toString(R.enc.Hex)));
        }
      }
    }
    function qa(a) {
      if (null == document.cookie) return null;
      var b = document.cookie.split(";");
      String.prototype.trim ||
        (String.prototype.trim = function () {
          return this.replace(/^\s+|\s+$/g, "");
        });
      for (var c = 0; c < b.length; c++) {
        var d = b[c].split("\x3d");
        if (2 <= d.length && d[0].trim() == a) return decodeURIComponent(d[1]);
      }
      return null;
    }
    function ra() {
      var a = qa("_cc");
      null == a && (f("fresh-cookie", "true"), (a = encodeURIComponent(D)));
      var b = new Date();
      b.setTime(b.getTime() + 31536e6);
      document.cookie = "_cc\x3d" + a + ";expires\x3d" + b + ";path\x3d/";
      f("cookie-_cc", a);
    }
    function sa() {
      var a = null;
      try {
        a = new ActiveXObject("AcroPDF.PDF");
      } catch (b) {
        k(b);
      }
      if (!a)
        try {
          a = new ActiveXObject("PDF.PdfCtrl");
        } catch (c) {
          k(c);
          return;
        }
      a &&
        ((isInstalled = !0),
        (version = a.GetVersions()),
        f("msie-plugin-pdf", version));
    }
    function ta() {
      var a = null;
      if (window.ActiveXObject) {
        a = null;
        try {
          a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
        } catch (b) {
          k(b);
          return;
        }
        a && ((a = a.GetVariable("$version")), f("msie-plugin-flash", a));
      }
    }
    function ua() {
      if (window.ActiveXObject) {
        var a = null;
        try {
          a = new ActiveXObject("WMPlayer.OCX");
        } catch (b) {
          k(b);
          return;
        }
        a && f("msie-plugin-wmplayer", a.versionInfo);
      }
    }
    function va() {
      var a = null;
      if (window.ActiveXObject) {
        for (
          var a = [
              "rmocx.RealPlayer G2 Control",
              "rmocx.RealPlayer G2 Control.1",
              "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
              "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
              "RealPlayer",
            ],
            b = null,
            c = 0;
          c < a.length;
          c++
        ) {
          try {
            b = new ActiveXObject(a[c]);
          } catch (d) {
            k(d);
            continue;
          }
          if (b) break;
        }
        b && ((a = b.GetVersionInfo()), f("msie-plugin-realplayer", a));
      }
    }
    function wa() {
      var a = null;
      if (window.ActiveXObject) {
        a = null;
        try {
          a = new ActiveXObject("SWCtl.SWCtl");
        } catch (b) {
          k(b);
          return;
        }
        a &&
          ((a = a.ShockwaveVersion("").split("r")),
          f("msie-plugin-shockwave", a));
      }
    }
    function xa() {
      window.ActiveXObject &&
        new ActiveXObject("AgControl.AgControl") &&
        f("msie-plugin-silverlight", !0);
    }
    function ya() {
      navigator.javaEnabled() && f("msie-plugin-java", "true");
    }
    function za() {
      if (window.ActiveXObject)
        for (
          var a = ["DevalVRXCtrl.DevalVRXCtrl", "DevalVRXCtrl.DevalVRXCtrl.1"],
            b = 0;
          b < a.length;
          b++
        )
          new ActiveXObject(a[b]) && f("msie-plugin-devalvr-" + a[b], !0);
    }
    function Aa() {
      window.ActiveXObject &&
        (new ActiveXObject("SharePoint.OpenDocuments.5") ||
          new ActiveXObject("SharePoint.OpenDocuments")) &&
        f("msie-plugin-sharepoint", !0);
    }
    function Ba() {
      var a = [sa, ua, ta, va, wa, ya, xa, za, Aa];
      if (
        window.ActiveXObject ||
        "Microsoft Internet Explorer" == navigator.appName ||
        ("Netscape" == navigator.appName &&
          null !=
            /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent))
      )
        for (var b = 0; b < a.length; b++)
          try {
            a[b].apply(null, []);
          } catch (c) {
            k(c);
          }
    }
    function Ca(a) {
      var b = a();
      a = document.createElement("script");
      a.type = "text/javascript";
      a.async = !0;
      a.src = V + "/et.js";
      var c = document.getElementsByTagName("script")[0];
      c.parentNode.insertBefore(a, c);
      window._cc.et = function (a) {
        f("_et", a);
        b(!0);
      };
    }
    function Da(a) {
      var b = a();
      try {
        var c =
          "undefined" == typeof navigator.plugins ||
          0 == navigator.plugins.length
            ? !!new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            : navigator.plugins["Shockwave Flash"];
        f("flash-installed", null == c ? "false" : "true");
      } catch (d) {
        k(d);
      }
      if (
        0 == (n.methods & Ea) &&
        0 == (n.methods & Fa) &&
        0 == (n.methods & Ga)
      )
        b(!1);
      else {
        a = document;
        c = [];
        c.push("t\x3d" + encodeURIComponent(D));
        c.push("cm\x3d" + encodeURIComponent(n.methods));
        for (var e in U) c.push(e + "\x3d" + encodeURIComponent(U[e]));
        e = !1;
        navigator.userAgent &&
          -1 != navigator.userAgent.indexOf("MSIE ") &&
          (e = !0);
        var l = a.createElement("div");
        l.innerHTML =
          "\x3cobject type\x3d'application/x-shockwave-flash' id\x3d'cc_swf' " +
          (e ? "" : "data\x3d'" + V + "/s.swf?" + c.join("\x26") + "' ") +
          (e ? "classid\x3d'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'" : "") +
          "\x3e\x3cparam name\x3d'allowScriptAccess' value\x3d'always'\x3e" +
          (e
            ? "\x3cparam name\x3d'movie' value\x3d'" +
              V +
              "/s.swf?" +
              c.join("\x26") +
              "'/\x3e"
            : "") +
          "\x3c/object\x3e";
        e = l.firstChild;
        e.setAttribute(
          "style",
          "position: absolute; top: -9999px; left: -9999px;"
        );
        e.setAttribute("width", "1");
        e.setAttribute("height", "1");
        l = a.createElement("param");
        l.setAttribute("FlashVars", c.join("\x26"));
        e.appendChild(l);
        window._fli = function (a) {
          try {
            f("flash-ip", a), b(!0);
          } catch (c) {
            b(!1);
          }
        };
        window._sft = function (a) {
          try {
            f("flash-tag", a), f("flash-enabled", "true"), b(!0);
          } catch (c) {
            b(!1);
          }
        };
        window._gfl = function (a) {
          try {
            for (var c = 0; c < a.length; c++) f("flash-font-" + a[c], "true");
            b(!0);
          } catch (d) {
            b(!1);
          }
        };
        a.body.appendChild(e);
      }
    }
    function ha(a, b) {
      if (a) {
        var c = a.getItem(ba);
        c || a.setItem(ba, D);
        (c = a.getItem(ba)) && f(b, c);
      }
    }
    function Ha() {
      ha(localStorage, "dom-local-tag");
    }
    function Ia() {
      ha(sessionStorage, "dom-session-tag");
    }
    function Ja(a) {
      var b = a();
      navigator.geolocation
        ? navigator.geolocation.getCurrentPosition(
            function (a) {
              f("geolocation-timestamp", a.timestamp);
              f("geolocation-accuracy", a.coords.accuracy);
              f("geolocation-altitude", a.coords.altitude);
              f("geolocation-altitude-accuracy", a.coords.altitudeAccuracy);
              f("geolocation-heading", a.coords.heading);
              f("geolocation-latitude", a.coords.latitude);
              f("geolocation-longitude", a.coords.longitude);
              f("geolocation-speed", a.coords.speed);
              b(!0);
            },
            function (a) {
              b(!1);
            },
            { timeout: 1e3 }
          )
        : b(!1);
    }
    function Ka() {
      var a = new Date(),
        b = a.getTimezoneOffset();
      f("time-unix-epoch-ms", a.getTime());
      f("time-local", a.toLocaleString());
      f("time-string", a.toString());
      f("time-tz-offset-minutes", b);
      var c = new Date(a.getFullYear(), 0, 1),
        d = new Date(a.getFullYear(), 6, 1),
        e = c.getTimezoneOffset() != d.getTimezoneOffset();
      f("time-tz-has-dst", e ? "true" : "false");
      var l = !1;
      e && a.getTimezoneOffset() == d.getTimezoneOffset() && (l = !0);
      f("time-tz-dst-active", l ? "true" : "false");
      a = b;
      l && ((c = d.getTimezoneOffset() - c.getTimezoneOffset()), (a = b - c));
      f("time-tz-std-offset", a);
      b = new Date(2014, 2, 6);
      b.setHours(7);
      b.setMinutes(58);
      b.setSeconds(39);
      f("time-tz-fixed-locale-string", b.toLocaleString());
    }
    function La(a) {
      var b = null;
      try {
        var c = document.createElement(
          '\x3cobject id\x3d"dialogHelperId" classid\x3d"clsid:3050f819-98b5-11cf-bb82-00aa00bdce0b" width\x3d"0" height\x3d"0"\x3e\x3c/object\x3e'
        );
        document.body.appendChild(c);
        setTimeout(function () {
          b = a();
          var d = document.getElementById("dialogHelperId");
          if (d && d.fonts) {
            for (var l = 1; l <= d.fonts.count; l++)
              f("ie-font-" + d.fonts(l), "true");
            b(!0);
          } else b(!1);
          document.body.removeChild(c);
        }, 500);
      } catch (d) {
        null == b && (b = a()), b(!1), k(d);
      }
    }
    function Ma() {
      try {
        for (var a = new Na().detect(ia), b = 0; b < a.length; b++)
          try {
            f("font-" + ia[b], a[b]);
          } catch (c) {
            k(c);
          }
      } catch (d) {
        k(d);
      }
    }
    function Oa() {
      if (navigator.plugins) {
        for (var a = {}, b = {}, c = 0; c < navigator.plugins.length; c++) {
          var d = navigator.plugins[c];
          d.filename &&
            d.name &&
            f("plugin-" + d.name + "-filename", d.filename);
          d.description &&
            d.name &&
            f("plugin-" + d.name + "-desc", d.description);
          for (var e = 0; e < d.length; e++)
            if ((d[e].type && (b[d[e].type] = !0), d[e].suffixes)) {
              var l = d[e].suffixes.split(",");
              if (l && 0 < l.length)
                for (var v = 0; v < l.length; v++) a[l[v]] = !0;
            }
        }
        f("plugin-suffixes", ja(a).join(","));
        f("plugin-mimes", ja(b).join(","));
      }
    }
    function ja(a) {
      var b = [],
        c;
      for (c in a) b.push(c);
      return b.sort();
    }
    function f(a, b, c, d) {
      ca && ca.apply(null, [a, b]);
      t[a] = b;
    }
    function ka(a) {
      try {
        var b = Pa[a[0]];
        b && b.apply(null, a.slice(1));
      } catch (c) {
        k(c);
      }
    }
    function k(a) {
      try {
        "js-errors" in t || (t["js-errors"] = []),
          t["js-errors"].push(a.toString());
      } catch (b) {}
    }
    function Qa(a) {
      var b = E.createOscillator(),
        c = E.createAnalyser(),
        d = E.createGain(),
        e = E.createScriptProcessor(4096, 1, 1),
        f = a;
      d.gain.value = 0;
      b.type = "triangle";
      b.connect(c);
      c.connect(e);
      e.connect(d);
      d.connect(E.destination);
      e.onaudioprocess = function (a) {
        a = new Float32Array(c.frequencyBinCount);
        c.getFloatFrequencyData(a);
        for (var e = R.algo.SHA1.create(), g = 0; g < a.length; g++)
          e.update(a[g].toString());
        b.stop(0);
        d.disconnect();
        f && (f(e.finalize().toString(R.enc.Hex), null), (f = null));
      };
      b.start(0);
    }
    var Ea = 8,
      Fa = 1024,
      Ga = 8192,
      I = 2097152,
      ba = "_cc_ck",
      Pa = {
        run: function (a) {
          V = a;
          W =
            "ZGUyZGY4ZDgtNTY4Zi00OWM5LWE0ZDgtODZmYjZiZDZlM2FmOjE0ODQ2NjQ5NDE3Mjk";
          D = 24 < W.length ? W.substring(0, 24) : W;
          f("_t", W);
          n.methods & 1048576 && f("cdfr", !0);
          n.methods & I && f("cidfr", !0);
          var b = z;
          z = function () {
            n.methods & 32768
              ? b && b()
              : n.methods & I ||
                J(function (a) {
                  b && b();
                });
          };
          var c = H;
          H = function (a, b) {
            try {
              f("timing-" + a, b);
            } catch (d) {
              k(d);
            }
            c && c.apply(null, [a, b]);
          };
          T = K(t);
          for (a = 0; a < da.length; a++) O(da[a], h);
          O(Da, r);
          n.methods & 524288 && O(Ca, B);
          n.methods & 131072 && O(na, F);
          n.methods & 4 && O(Ja, s);
          n.methods & 4096 && w(ra, C);
          n.methods & 2 && w(Ka, u);
          n.methods & 1 && w(Ha, g);
          n.methods & 512 && w(Ia, y);
          n.methods & I && (J(z), (t = K(T)));
          var d = function () {
            n.methods & 16 && w(Oa, G);
            n.methods & 2048 && w(Ba, X);
            n.methods & 65536 && w(pa, N);
            n.methods & 256 && (O(La, M), w(Ma, A));
            n.methods & 262144 && w(ma, L);
            n.methods & I ? (J(z), (t = K(T))) : Z();
          };
          a = function () {
            n.methods & 32 &&
              w(
                aa,
                x,
                navigator,
                "navigator.userAgent,navigator.buildid,navigator.product,navigator.oscpu,navigator.appVersion,navigator.cookieEnabled,navigator.platform,navigator.msManipulationViewsEnabled,navigator.appName,navigator.cpuClass,navigator.appMinorVersion,navigator.appCodeName,navigator.vendor,navigator.systemLanguage,navigator.msPointerEnabled,navigator.productSub,navigator.buildID,navigator.language,navigator.userLanguage,navigator.browserLanguage"
              );
            n.methods & 64 &&
              w(
                aa,
                p,
                window,
                "window.clientInformation.language,window.screen.height,window.screen.width,window.doNotTrack,window.history.length,window.devicePixelRatio,window.screen.pixeldepth"
              );
            n.methods & 128 && w(aa, m, document, "document.width");
            n.methods & I ? (J(z), (t = K(T)), setTimeout(d, 50)) : d();
          };
          n.methods & I ? setTimeout(a, 50) : a();
        },
        cf: function (a) {
          n.methods = a;
        },
        sr: function (a) {
          ca = a;
        },
        srt: function (a) {
          H = a;
        },
        sf: function (a) {
          z = a;
        },
        st: function (a) {
          fa = a;
        },
        cac: function (a) {
          da.push(a);
        },
        ci: function (a) {
          U = a;
          for (var b in a) t[b] = a[b];
        },
        cag: function (a) {
          la.start(function (b, c) {
            b && (t["audio-id"] = b);
            var d = !1,
              e = z;
            z = function () {
              d ||
                J(function (b) {
                  e();
                  a();
                });
              d = !0;
            };
            Z();
          });
        },
        csd: J,
        cfp: function (a) {
          a($.encode(ga(JSON.stringify(t))));
        },
        crdi: function (a) {
          t.crdi = !0;
          var b = function (b) {
            try {
              var d = JSON.parse(b.data);
              d && (d.dp || d.drg) && a(d);
            } catch (e) {}
          };
          window.attachEvent
            ? window.attachEvent("onmessage", b)
            : window.addEventListener && window.addEventListener("message", b);
        },
      },
      n = { methods: 999419 },
      ca = null,
      H = null,
      z = null,
      fa = 2e3,
      t = {},
      da = [],
      U = {},
      W = "",
      D = "",
      V = "",
      ia = "Times New Roman CYR;Arial CYR;Courier New CYR;\u5b8b\u4f53;Arial Cyr;Times New Roman Cyr;Courier New Cyr;\u534e\u6587\u7ec6\u9ed1;\u5137\u9ed1 Pro;WP CyrillicB;WP CyrillicA;\uad81\uc11c\uccb4;\u7d30\u660e\u9ad4;\u5c0f\u585a\u660e\u671d Pr6N B;\u5b8b\u4f53-PUA;\u65b9\u6b63\u6d41\u884c\u4f53\u7e41\u4f53;\u6c49\u4eea\u5a03\u5a03\u7bc6\u7b80;\ub3cb\uc6c0;GaramondNo4CyrTCYLig;HelveticaInseratCyr Upright;HelveticaCyr Upright;TL Help Cyrillic;\uac00\ub294\uc548\uc0c1\uc218\uccb4;TLCyrillic2;AGRevueCyr-Roman;AGOptimaCyr;HelveticaInseratCyrillicUpright;HelveticaCyrillicUpright;HelveticaCyrillic;CyrillicRibbon;CyrillicHover;\u6587\u9f0e\uff30\uff2f\uff30\uff0d\uff14;\u65b9\u6b63\u4e2d\u5029\u7b80\u4f53;\u521b\u827a\u7b80\u4e2d\u5706;Zrnic Cyr;Zipper1 Cyr;Xorx_windy Cyr;Xorx_Toothy Cyr;\uc18c\uc57c\uc1949;\u0426\u0432\u0435\u0442\u043d\u044b\u0435 \u044d\u043c\u043e\u0434\u0437\u0438 Apple;Chinese Generic1;Korean Generic1;Bullets 5(Korean);UkrainianFuturisExtra;VNI-Viettay;UkrainianCompact;UkrainianBrushScript;TiffanyUkraine;Baltica_Russian-ITV;Vietnamese font;Unicorn Ukrainian;UkrainianTimesET;UkrainianCourier;Tiff-HeavyUkraine;\u4875\u6e67\u4c61\u6e20\u4172\u7464\u6573\u6967\u6e20\u3230\u3032\u202d\u2041\u6c6c\u2072\u6967\u6874\u7320\u7265\u7365\u7276\u6564\u2e54\u6875\u2070\u6861\u7020\u564e\u5468\u7566\u6170\u3032\u2020\u4e6f\u726d\u616c\u312e\u3020\u436f\u6465\u2056\u4e49\u2066\u6f72\u2057\u696e\u646f\u7773\u5468\u7566\u6170\u3032\u4e6f\u726d\u616cHungLan Artdesign - http://www.vietcomic.comVNI-Thufap2  Normalv2.0 Code VNI for WindowsVNI-Thufap2 Normal\u0002;Vietnam;Bwviet;Soviet;Soviet Expanded;Soviet Bold;Russian;UVN Han Viet;UkrainianAcademy;Symbol;Verdana;Webdings;Arial;Georgia;Courier New;Trebuchet MS;Times New Roman;Impact;Comic Sans MS;Wingdings;Tahoma;Microsoft Sans Serif;Arial Black;Plantagenet Cherokee;Arial Narrow;Wingdings 2;Wingdings 3;Arial Unicode MS;Papyrus;Calibri;Cambria;Consolas;Candara;Franklin Gothic Medium;Corbel;Constantia;Marlett;Lucida Console;Lucida Sans Unicode;MS Mincho;Arial Rounded MT Bold;Palatino Linotype;Batang;MS Gothic;PMingLiU;SimSun;MS PGothic;MS PMincho;Gulim;Cambria Math;Garamond;Bookman Old Style;Book Antiqua;Century Gothic;Monotype Corsiva;Courier;Meiryo;Century;MT Extra;MS Reference Sans Serif;MS Reference Specialty;Mistral;Bookshelf Symbol 7;Lucida Bright;Cooper Black;Modern No. 20;Bernard MT Condensed;Bell MT;Baskerville Old Face;Bauhaus 93;Britannic Bold;Wide Latin;Playbill;Harrington;Onyx;Footlight MT Light;Stencil;Colonna MT;Matura MT Script Capitals;Copperplate Gothic Bold;Copperplate Gothic Light;Edwardian Script ITC;Rockwell;Curlz MT;Engravers MT;Rockwell Extra Bold;Haettenschweiler;MingLiU;Mongolian Baiti;Microsoft Yi Baiti;Microsoft Himalaya;SimHei;SimSun-ExtB;PMingLiU-ExtB;MingLiU-ExtB;MingLiU_HKSCS-ExtB;MingLiU_HKSCS;Gabriola;Goudy Old Style;Calisto MT;Imprint MT Shadow;Gill Sans Ultra Bold;Century Schoolbook;Gloucester MT Extra Condensed;Perpetua;Franklin Gothic Book;Brush Script MT;Microsoft Tai Le;Gill Sans MT;Tw Cen MT;Lucida Handwriting;Lucida Sans;Segoe UI;Lucida Fax;MV Boli;Sylfaen;Estrangelo Edessa;Mangal;Gautami;Tunga;Shruti;Raavi;Latha;Lucida Calligraphy;Lucida Sans Typewriter;Kartika;Vrinda;Perpetua Titling MT;Cordia New;Angsana New;IrisUPC;CordiaUPC;FreesiaUPC;Miriam;Traditional Arabic;Miriam Fixed;JasmineUPC;KodchiangUPC;LilyUPC;Levenim MT;EucrosiaUPC;DilleniaUPC;Rod;Narkisim;FrankRuehl;David;Andalus;Browallia New;AngsanaUPC;BrowalliaUPC;MS UI Gothic;Aharoni;Simplified Arabic Fixed;Simplified Arabic;GulimChe;Dotum;DotumChe;GungsuhChe;Gungsuh;BatangChe;Meiryo UI;NSimSun;Segoe Script;Segoe Print;DaunPenh;Kalinga;Iskoola Pota;Euphemia;DokChampa;Nyala;MoolBoran;Leelawadee;Gisha;Microsoft Uighur;Arabic Typesetting;Malgun Gothic;Microsoft JhengHei;DFKai-SB;Microsoft YaHei;FangSong;KaiTi;Helvetica;Segoe UI Light;Segoe UI Semibold;Andale Mono;Palatino;Geneva;Monaco;Lucida Grande;Gill Sans;Helvetica Neue;Baskerville;Hoefler Text;Thonburi;Herculanum;Apple Chancery;Didot;Zapf Dingbats;Apple Symbols;Copperplate;American Typewriter;Zapfino;Cochin;Chalkboard;Sathu;Osaka;BiauKai;Segoe UI Symbol;Aparajita;Krungthep;Ebrima;Silom;Kokila;Shonar Bangla;Sakkal Majalla;Microsoft PhagsPa;Microsoft New Tai Lue;Khmer UI;Vijaya;Utsaah;Charcoal CY;Ayuthaya;InaiMathi;Euphemia UCAS;Vani;Lao UI;GB18030 Bitmap;KufiStandardGK;Geeza Pro;Chalkduster;Tempus Sans ITC;Kristen ITC;Apple Braille;Juice ITC;STHeiti;LiHei Pro;DecoType Naskh;New Peninim MT;Nadeem;Mshtakan;Gujarati MT;Devanagari MT;Arial Hebrew;Corsiva Hebrew;Baghdad;STFangsong".split(
        ";"
      ),
      R =
        R ||
        (function (a, b) {
          var c = {},
            d = (c.lib = {}),
            e = function () {},
            f = (d.Base = {
              extend: function (a) {
                e.prototype = this;
                var b = new e();
                a && b.mixIn(a);
                b.hasOwnProperty("init") ||
                  (b.init = function () {
                    b.$super.init.apply(this, arguments);
                  });
                b.init.prototype = b;
                b.$super = this;
                return b;
              },
              create: function () {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a;
              },
              init: function () {},
              mixIn: function (a) {
                for (var b in a) a.hasOwnProperty(b) && (this[b] = a[b]);
                a.hasOwnProperty("toString") && (this.toString = a.toString);
              },
              clone: function () {
                return this.init.prototype.extend(this);
              },
            }),
            g = (d.WordArray = f.extend({
              init: function (a, c) {
                a = this.words = a || [];
                this.sigBytes = c != b ? c : 4 * a.length;
              },
              toString: function (a) {
                return (a || h).stringify(this);
              },
              concat: function (a) {
                var b = this.words,
                  c = a.words,
                  d = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (d % 4)
                  for (var e = 0; e < a; e++)
                    b[(d + e) >>> 2] |=
                      ((c[e >>> 2] >>> (24 - 8 * (e % 4))) & 255) <<
                      (24 - 8 * ((d + e) % 4));
                else if (65535 < c.length)
                  for (e = 0; e < a; e += 4) b[(d + e) >>> 2] = c[e >>> 2];
                else b.push.apply(b, c);
                this.sigBytes += a;
                return this;
              },
              clamp: function () {
                var b = this.words,
                  c = this.sigBytes;
                b[c >>> 2] &= 4294967295 << (32 - 8 * (c % 4));
                b.length = a.ceil(c / 4);
              },
              clone: function () {
                var a = f.clone.call(this);
                a.words = this.words.slice(0);
                return a;
              },
              random: function (b) {
                for (var c = [], d = 0; d < b; d += 4)
                  c.push((4294967296 * a.random()) | 0);
                return new g.init(c, b);
              },
            })),
            q = (c.enc = {}),
            h = (q.Hex = {
              stringify: function (a) {
                var b = a.words;
                a = a.sigBytes;
                for (var c = [], d = 0; d < a; d++) {
                  var e = (b[d >>> 2] >>> (24 - 8 * (d % 4))) & 255;
                  c.push((e >>> 4).toString(16));
                  c.push((e & 15).toString(16));
                }
                return c.join("");
              },
              parse: function (a) {
                for (var b = a.length, c = [], d = 0; d < b; d += 2)
                  c[d >>> 3] |=
                    parseInt(a.substr(d, 2), 16) << (24 - 4 * (d % 8));
                return new g.init(c, b / 2);
              },
            }),
            n = (q.Latin1 = {
              stringify: function (a) {
                var b = a.words;
                a = a.sigBytes;
                for (var c = [], d = 0; d < a; d++)
                  c.push(
                    String.fromCharCode(
                      (b[d >>> 2] >>> (24 - 8 * (d % 4))) & 255
                    )
                  );
                return c.join("");
              },
              parse: function (a) {
                for (var b = a.length, c = [], d = 0; d < b; d++)
                  c[d >>> 2] |= (a.charCodeAt(d) & 255) << (24 - 8 * (d % 4));
                return new g.init(c, b);
              },
            }),
            m = (q.Utf8 = {
              stringify: function (a) {
                try {
                  return decodeURIComponent(escape(n.stringify(a)));
                } catch (b) {
                  throw Error("Malformed UTF-8 data");
                }
              },
              parse: function (a) {
                return n.parse(unescape(encodeURIComponent(a)));
              },
            }),
            k = (d.BufferedBlockAlgorithm = f.extend({
              reset: function () {
                this._data = new g.init();
                this._nDataBytes = 0;
              },
              _append: function (a) {
                "string" == typeof a && (a = m.parse(a));
                this._data.concat(a);
                this._nDataBytes += a.sigBytes;
              },
              _process: function (b) {
                var c = this._data,
                  d = c.words,
                  e = c.sigBytes,
                  f = this.blockSize,
                  l = e / (4 * f),
                  l = b ? a.ceil(l) : a.max((l | 0) - this._minBufferSize, 0);
                b = l * f;
                e = a.min(4 * b, e);
                if (b) {
                  for (var q = 0; q < b; q += f) this._doProcessBlock(d, q);
                  q = d.splice(0, b);
                  c.sigBytes -= e;
                }
                return new g.init(q, e);
              },
              clone: function () {
                var a = f.clone.call(this);
                a._data = this._data.clone();
                return a;
              },
              _minBufferSize: 0,
            }));
          d.Hasher = k.extend({
            cfg: f.extend(),
            init: function (a) {
              this.cfg = this.cfg.extend(a);
              this.reset();
            },
            reset: function () {
              k.reset.call(this);
              this._doReset();
            },
            update: function (a) {
              this._append(a);
              this._process();
              return this;
            },
            finalize: function (a) {
              a && this._append(a);
              return this._doFinalize();
            },
            blockSize: 16,
            _createHelper: function (a) {
              return function (b, c) {
                return new a.init(c).finalize(b);
              };
            },
            _createHmacHelper: function (a) {
              return function (b, c) {
                return new p.HMAC.init(a, c).finalize(b);
              };
            },
          });
          var p = (c.algo = {});
          return c;
        })(Math);
    (function () {
      var a = R,
        b = a.lib,
        c = b.WordArray,
        d = b.Hasher,
        e = [],
        b = (a.algo.SHA1 = d.extend({
          _doReset: function () {
            this._hash = new c.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520,
            ]);
          },
          _doProcessBlock: function (a, b) {
            for (
              var c = this._hash.words,
                d = c[0],
                f = c[1],
                g = c[2],
                h = c[3],
                n = c[4],
                k = 0;
              80 > k;
              k++
            ) {
              if (16 > k) e[k] = a[b + k] | 0;
              else {
                var m = e[k - 3] ^ e[k - 8] ^ e[k - 14] ^ e[k - 16];
                e[k] = (m << 1) | (m >>> 31);
              }
              m = ((d << 5) | (d >>> 27)) + n + e[k];
              m =
                20 > k
                  ? m + (((f & g) | (~f & h)) + 1518500249)
                  : 40 > k
                  ? m + ((f ^ g ^ h) + 1859775393)
                  : 60 > k
                  ? m + (((f & g) | (f & h) | (g & h)) - 1894007588)
                  : m + ((f ^ g ^ h) - 899497514);
              n = h;
              h = g;
              g = (f << 30) | (f >>> 2);
              f = d;
              d = m;
            }
            c[0] = (c[0] + d) | 0;
            c[1] = (c[1] + f) | 0;
            c[2] = (c[2] + g) | 0;
            c[3] = (c[3] + h) | 0;
            c[4] = (c[4] + n) | 0;
          },
          _doFinalize: function () {
            var a = this._data,
              b = a.words,
              c = 8 * this._nDataBytes,
              d = 8 * a.sigBytes;
            b[d >>> 5] |= 128 << (24 - (d % 32));
            b[(((d + 64) >>> 9) << 4) + 14] = Math.floor(c / 4294967296);
            b[(((d + 64) >>> 9) << 4) + 15] = c;
            a.sigBytes = 4 * b.length;
            this._process();
            return this._hash;
          },
          clone: function () {
            var a = d.clone.call(this);
            a._hash = this._hash.clone();
            return a;
          },
        }));
      a.SHA1 = d._createHelper(b);
      a.HmacSHA1 = d._createHmacHelper(b);
    })();
    var $ = {
        _keyStr:
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d",
        encode: function (a) {
          var b = "",
            c,
            d,
            e,
            f,
            g,
            k,
            h = 0;
          for (a = $._utf8_encode(a); h < a.length; )
            (c = a.charCodeAt(h++)),
              (d = a.charCodeAt(h++)),
              (e = a.charCodeAt(h++)),
              (f = c >> 2),
              (c = ((c & 3) << 4) | (d >> 4)),
              (g = ((d & 15) << 2) | (e >> 6)),
              (k = e & 63),
              isNaN(d) ? (g = k = 64) : isNaN(e) && (k = 64),
              (b =
                b +
                this._keyStr.charAt(f) +
                this._keyStr.charAt(c) +
                this._keyStr.charAt(g) +
                this._keyStr.charAt(k));
          return b;
        },
        _utf8_encode: function (a) {
          for (var b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d
              ? (b += String.fromCharCode(d))
              : (127 < d && 2048 > d
                  ? (b += String.fromCharCode((d >> 6) | 192))
                  : ((b += String.fromCharCode((d >> 12) | 224)),
                    (b += String.fromCharCode(((d >> 6) & 63) | 128))),
                (b += String.fromCharCode((d & 63) | 128)));
          }
          return b;
        },
      },
      Na = function () {
        var a = ["monospace", "sans-serif", "serif"],
          b = document.getElementsByTagName("body")[0],
          c = document.createElement("div");
        c.setAttribute(
          "style",
          "visibility: hidden;position: absolute; top: 0px; left: -999px;"
        );
        b.appendChild(c);
        b = document.createElement("span");
        b.style.fontSize = "72px";
        b.innerHTML = "mmmmmmmmmmlli";
        var d = {},
          e = {},
          f;
        for (f in a)
          (b.style.fontFamily = a[f]),
            c.appendChild(b),
            (d[a[f]] = b.offsetWidth),
            (e[a[f]] = b.offsetHeight),
            c.removeChild(b);
        this.detect = function (b) {
          var f = document.createElement("div");
          f.setAttribute(
            "style",
            "visibility: hidden;position: absolute; top: 0px; left: -999px;"
          );
          for (var g = [], k = [], h = 0; h < b.length; h++) {
            var l = [];
            k.push(!1);
            for (var m in a) {
              var n = document.createElement("div"),
                p = document.createElement("span");
              p.style.fontSize = "72px";
              p.innerHTML = "mmmmmmmmmmlli";
              p.style.fontFamily = b[h] + "," + a[m];
              n.appendChild(p);
              f.appendChild(n);
              l.push(p);
            }
            g.push(l);
          }
          c.appendChild(f);
          for (h = 0; h < b.length; h++)
            for (m in ((l = g[h]), a))
              (p = l[m]),
                (n = p.offsetWidth != d[a[m]] || p.offsetHeight != e[a[m]]),
                (k[h] = k[h] || n);
          c.removeChild(f);
          return k;
        };
      },
      S = 0,
      P = 1;
    h = "cust";
    s = "loc";
    u = "ti";
    G = "np";
    x = "no";
    p = "wo";
    m = "do";
    A = "kf";
    g = "ls";
    y = "ss";
    X = "iepl";
    C = "sc";
    r = "fc";
    M = "gief";
    N = "cp";
    F = "wr";
    L = "wgl";
    B = "et";
    var T = {};
    if (window._cc) {
      window._cc.loaded = !0;
      for (var ea = 0; ea < _cc.length; ea++) ka(_cc[ea]);
    } else (window._cc = []), (window._cc.loaded = !0);
    _cc.push = function (a) {
      ka(a);
    };
    var la = {},
      E = null;
    la.start = function (a) {
      try {
        if (null == E)
          if ("webkitAudioContext" in window) E = new webkitAudioContext();
          else if ("AudioContext" in window) E = new AudioContext();
          else throw "No audio context available";
        Qa(a);
      } catch (b) {
        a(null, b), k(b);
      }
    };
  })();
} catch (e$$45) {}
/*
page: http://www.mbnanetaccess.com/
url: https://secure.bankofamerica.com/login/sign-in/entry/inAuthCollector.go?_=1484664942520
*/
