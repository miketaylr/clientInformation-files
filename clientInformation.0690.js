"object" !== typeof JSON && (JSON = {});
(function () {
  function B(k) {
    return 10 > k ? "0" + k : k;
  }
  function I(k) {
    J.lastIndex = 0;
    return J.test(k)
      ? '"' +
          k.replace(J, function (k) {
            var l = O[k];
            return "string" === typeof l
              ? l
              : "\\u" + ("0000" + k.charCodeAt(0).toString(16)).slice(-4);
          }) +
          '"'
      : '"' + k + '"';
  }
  function E(k, x) {
    var l,
      p,
      v,
      F,
      u = r,
      t,
      g = x[k];
    g &&
      "object" === typeof g &&
      "function" === typeof g.toJSON &&
      (g = g.toJSON(k));
    "function" === typeof w && (g = w.call(x, k, g));
    switch (typeof g) {
      case "string":
        return I(g);
      case "number":
        return isFinite(g) ? String(g) : "null";
      case "boolean":
      case "null":
        return String(g);
      case "object":
        if (!g) return "null";
        r += C;
        t = [];
        if ("[object Array]" === Object.prototype.toString.apply(g)) {
          F = g.length;
          for (l = 0; l < F; l += 1) t[l] = E(l, g) || "null";
          v =
            0 === t.length
              ? "[]"
              : r
              ? "[\n" + r + t.join(",\n" + r) + "\n" + u + "]"
              : "[" + t.join(",") + "]";
          r = u;
          return v;
        }
        if (w && "object" === typeof w)
          for (F = w.length, l = 0; l < F; l += 1)
            "string" === typeof w[l] &&
              ((p = w[l]),
              (v = E(p, g)) && t.push(I(p) + (r ? ": " : ":") + v));
        else
          for (p in g)
            Object.prototype.hasOwnProperty.call(g, p) &&
              (v = E(p, g)) &&
              t.push(I(p) + (r ? ": " : ":") + v);
        v =
          0 === t.length
            ? "{}"
            : r
            ? "{\n" + r + t.join(",\n" + r) + "\n" + u + "}"
            : "{" + t.join(",") + "}";
        r = u;
        return v;
    }
  }
  "function" !== typeof Date.prototype.toJSON &&
    ((Date.prototype.toJSON = function (k) {
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
      k
    ) {
      return this.valueOf();
    }));
  var K = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    J = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    r,
    C,
    O = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\",
    },
    w;
  "function" !== typeof JSON.stringify &&
    (JSON.stringify = function (k, x, l) {
      var p;
      C = r = "";
      if ("number" === typeof l) for (p = 0; p < l; p += 1) C += " ";
      else "string" === typeof l && (C = l);
      if (
        (w = x) &&
        "function" !== typeof x &&
        ("object" !== typeof x || "number" !== typeof x.length)
      )
        throw Error("JSON.stringify");
      return E("", { "": k });
    });
  "function" !== typeof JSON.parse &&
    (JSON.parse = function (k, r) {
      function l(k, p) {
        var u,
          t,
          g = k[p];
        if (g && "object" === typeof g)
          for (u in g)
            Object.prototype.hasOwnProperty.call(g, u) &&
              ((t = l(g, u)), void 0 !== t ? (g[u] = t) : delete g[u]);
        return r.call(k, p, g);
      }
      var p;
      k = String(k);
      K.lastIndex = 0;
      K.test(k) &&
        (k = k.replace(K, function (k) {
          return "\\u" + ("0000" + k.charCodeAt(0).toString(16)).slice(-4);
        }));
      if (
        /^[\],:{}\s]*$/.test(
          k
            .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
            .replace(
              /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
              "]"
            )
            .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
        )
      )
        return (
          (p = eval("(" + k + ")")),
          "function" === typeof r ? l({ "": p }, "") : p
        );
      throw new SyntaxError("JSON.parse");
    });
})();
try {
  (function () {
    var B, I, E, K, J, r, C, O, w, k, x, l, p, v, F, u, t;
    function g(a, b) {
      try {
        var d = Array.prototype.slice.call(arguments);
        if (G) {
          var c = new Date();
          a.apply(null, d.slice(2));
          G.apply(null, [b, new Date().getTime() - c.getTime()]);
        } else a.apply(null, d.slice(2));
      } catch (e) {
        n(e);
      }
    }
    function M() {
      return 0 == y ? (H && H.apply(null, []), !0) : !1;
    }
    function N(a, b) {
      var d = !1;
      setTimeout(function () {
        d || ((d = !0), (y -= 1), M());
      }, aa);
      try {
        y += 1;
        var c = Array.prototype.slice.call(arguments),
          e = G
            ? [
                function () {
                  var a = new Date();
                  return function () {
                    G.apply(null, [b, new Date().getTime() - a.getTime()]);
                    d || ((d = !0), (y -= 1), M());
                  };
                },
                f,
              ]
            : [
                function () {
                  return function () {
                    d || ((d = !0), (y -= 1), M());
                  };
                },
                f,
              ];
        e.push(c.slice(2));
        a.apply(null, e);
      } catch (h) {
        n(h);
      }
    }
    function ba(a) {
      try {
        for (var b = "", d = [89, 231, 225, 55], c = 0; c < a.length; c++)
          b += String.fromCharCode(a.charCodeAt(c) ^ d[c % d.length]);
        return b;
      } catch (e) {
        return n(e), "";
      }
    }
    function P(a) {
      try {
        var b = null;
        try {
          b = document.createElement(
            '\x3ciframe name\x3d"' + encodeURIComponent(z) + '"/\x3e'
          );
        } catch (d) {
          (b = document.createElement("iframe")),
            (b.name = encodeURIComponent(z)),
            n(d);
        }
        b.id = encodeURIComponent(z);
        b.width = "0";
        b.height = "0";
        b.style.display = "none";
        b.border = "0";
        var c = document.createElement("form");
        c.enctype = "multipart/form-data";
        c.method = "POST";
        c.action = Q + "/s2?_t\x3d" + encodeURIComponent(z);
        c.target = b.id;
        var e = document.createElement("input");
        e.name = "_f";
        e.type = "hidden";
        e.value = R.encode(ba(JSON.stringify(A)));
        c.appendChild(e);
        document.body.appendChild(c);
        document.body.appendChild(b);
        e = function () {
          a();
        };
        b.attachEvent
          ? b.attachEvent("onload", e)
          : b.addEventListener
          ? b.addEventListener("load", e, !1)
          : (b.onload = e);
        c.submit();
      } catch (h) {
        a(h), n(h);
      }
    }
    function S(a, b) {
      try {
        String.prototype.trim ||
          (String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, "");
          });
        for (var d = b.split(","), c = 0; c < d.length; c++)
          for (
            var e = d[c].trim(), h = a, q = e.split("."), s = 0;
            s < q.length;
            s++
          )
            if (0 != s) {
              var g = h[q[s]];
              if (g) s == q.length - 1 ? f(e, g.toString()) : (h = g);
              else break;
            }
      } catch (k) {
        n(k);
      }
    }
    function ha() {
      var a = document.createElement("canvas");
      if (a) {
        var b = null;
        try {
          b =
            a.getContext("webgl") ||
            a.getContext("experimental-webgl") ||
            a.getContext("moz-webgl") ||
            a.getContext("webkit-3d");
        } catch (d) {
          n("failed to get webgl context: " + d);
          return;
        }
        if (b) {
          f("webgl-supported", !0);
          f("webgl-extensions", b.getSupportedExtensions());
          try {
            var c =
              b.getExtension("EXT_texture_filter_anisotropic") ||
              b.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
              b.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            c
              ? f(
                  "webgl-max-aa",
                  b.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                )
              : f("webgl-max-aa", null);
          } catch (e) {
            n(e);
          }
          try {
            f("webgl-version", b.getParameter(b.VERSION)),
              f(
                "webgl-glsl-version",
                b.getParameter(b.SHADING_LANGUAGE_VERSION)
              ),
              f("webgl-vendor", b.getParameter(b.VENDOR)),
              f("webgl-renderer", b.getParameter(b.RENDERER));
          } catch (h) {
            n(h);
          }
          try {
            b.getExtension("WEBGL_debug_renderer_info"),
              f("webgl-vendor-real", b.getParameter(37445)),
              f("webgl-renderer-real", b.getParameter(37446));
          } catch (q) {
            n(q);
          }
        } else f("webgl-supported", !1);
      } else n("canvas not available for webgl");
    }
    function ia(a) {
      var b = a(),
        d = { iceServers: [{ url: "stun:stun.l.google.com:19302" }] },
        c,
        e =
          window.RTCPeerConnection ||
          window.mozRTCPeerConnection ||
          window.webkitRTCPeerConnection;
      if (e) {
        var h = function (b) {},
          q = [];
        (function () {
          c = new e(d);
          c.onicecandidate = function (a) {
            a.candidate && q.push(a.candidate);
            if ("complete" == c.iceGatheringState) {
              a = {};
              for (var d = 0; d < q.length; d++)
                try {
                  var e = q[d].candidate.split(" ");
                  8 <= e.length && (e[4] in a || (a[e[4]] = { type: e[7] }));
                } catch (h) {}
              f("webrtc-addrs", a);
              f("webrtc-sdp", c.localDescription.sdp);
              b();
            }
          };
          window.mozRTCPeerConnection &&
            c.createDataChannel("", { reliable: !1 });
          c.createOffer(function (b) {
            c.setLocalDescription(b, function (b) {}, h);
          }, h);
        })();
      } else n("webrtc not supported");
    }
    function ja(a) {
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
    function ka() {
      for (
        var a = [2, 8, 20, 60, 100, 150, 200, 400], b = 0;
        b < a.length;
        b++
      ) {
        var d =
            "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789",
          c = a[b],
          e = document.createElement("canvas");
        if (e && (ja(d), e.getContext)) {
          var h = e.getContext("2d");
          h &&
            ((e.width = 999),
            (h.font = c + "pt Arial"),
            (h.textBaseline = "top"),
            h.fillText(d, 2, 2),
            e.toDataURL(),
            (d = L.algo.SHA1.create()),
            d.update(e.toDataURL().toString()),
            f("canvas-print-" + c + "-999", d.finalize().toString(L.enc.Hex)));
        }
      }
    }
    function la(a) {
      if (null == document.cookie) return null;
      var b = document.cookie.split(";");
      String.prototype.trim ||
        (String.prototype.trim = function () {
          return this.replace(/^\s+|\s+$/g, "");
        });
      for (var d = 0; d < b.length; d++) {
        var c = b[d].split("\x3d");
        if (2 <= c.length && c[0].trim() == a) return decodeURIComponent(c[1]);
      }
      return null;
    }
    function ma() {
      var a = la("_cc");
      null == a && (f("fresh-cookie", "true"), (a = encodeURIComponent(z)));
      var b = new Date();
      b.setTime(b.getTime() + 31536e6);
      document.cookie = "_cc\x3d" + a + ";expires\x3d" + b + ";path\x3d/";
      f("cookie-_cc", a);
    }
    function na() {
      var a = null;
      try {
        a = new ActiveXObject("AcroPDF.PDF");
      } catch (b) {
        n(b);
      }
      if (!a)
        try {
          a = new ActiveXObject("PDF.PdfCtrl");
        } catch (d) {
          n(d);
          return;
        }
      a &&
        ((isInstalled = !0),
        (version = a.GetVersions()),
        f("msie-plugin-pdf", version));
    }
    function oa() {
      var a = null;
      if (window.ActiveXObject) {
        a = null;
        try {
          a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
        } catch (b) {
          n(b);
          return;
        }
        a && ((a = a.GetVariable("$version")), f("msie-plugin-flash", a));
      }
    }
    function pa() {
      if (window.ActiveXObject) {
        var a = null;
        try {
          a = new ActiveXObject("WMPlayer.OCX");
        } catch (b) {
          n(b);
          return;
        }
        a && f("msie-plugin-wmplayer", a.versionInfo);
      }
    }
    function qa() {
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
            d = 0;
          d < a.length;
          d++
        ) {
          try {
            b = new ActiveXObject(a[d]);
          } catch (c) {
            n(c);
            continue;
          }
          if (b) break;
        }
        b && ((a = b.GetVersionInfo()), f("msie-plugin-realplayer", a));
      }
    }
    function ra() {
      var a = null;
      if (window.ActiveXObject) {
        a = null;
        try {
          a = new ActiveXObject("SWCtl.SWCtl");
        } catch (b) {
          n(b);
          return;
        }
        a &&
          ((a = a.ShockwaveVersion("").split("r")),
          f("msie-plugin-shockwave", a));
      }
    }
    function sa() {
      window.ActiveXObject &&
        new ActiveXObject("AgControl.AgControl") &&
        f("msie-plugin-silverlight", !0);
    }
    function ta() {
      navigator.javaEnabled() && f("msie-plugin-java", "true");
    }
    function ua() {
      if (window.ActiveXObject)
        for (
          var a = ["DevalVRXCtrl.DevalVRXCtrl", "DevalVRXCtrl.DevalVRXCtrl.1"],
            b = 0;
          b < a.length;
          b++
        )
          new ActiveXObject(a[b]) && f("msie-plugin-devalvr-" + a[b], !0);
    }
    function va() {
      window.ActiveXObject &&
        (new ActiveXObject("SharePoint.OpenDocuments.5") ||
          new ActiveXObject("SharePoint.OpenDocuments")) &&
        f("msie-plugin-sharepoint", !0);
    }
    function wa() {
      var a = [na, pa, oa, qa, ra, ta, sa, ua, va];
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
          } catch (d) {
            n(d);
          }
    }
    function xa(a) {
      var b = a();
      try {
        var d =
          "undefined" == typeof navigator.plugins ||
          0 == navigator.plugins.length
            ? !!new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            : navigator.plugins["Shockwave Flash"];
        f("flash-installed", null == d ? "false" : "true");
      } catch (c) {
        n(c);
      }
      if (0 == (m.methods & T) && 0 == (m.methods & U) && 0 == (m.methods & V))
        b();
      else {
        a = document.createElement("div");
        a.setAttribute(
          "style",
          "visibility: hidden;position: absolute; top: 0px; left: -999px;"
        );
        d = document.createElement("object");
        d.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
        d.setAttribute("width", "1");
        d.setAttribute("height", "1");
        var e = [];
        e.push("t\x3d" + encodeURIComponent(z));
        e.push("cm\x3d" + encodeURIComponent(m.methods));
        for (var h in W) e.push(h + "\x3d" + encodeURIComponent(W[h]));
        h = document.createElement("param");
        h.setAttribute("FlashVars", e.join("\x26"));
        d.appendChild(h);
        h = document.createElement("embed");
        h.setAttribute("src", Q + "/s.swf?" + e.join("\x26"));
        h.setAttribute("allowScriptAccess", "always");
        h.setAttribute("type", "application/x-shockwave-flash");
        d.appendChild(h);
        var q = 0;
        (m.methods & T) == T && (q += 1);
        (m.methods & U) == U && (q += 1);
        (m.methods & V) == V && (q += 1);
        var s = function () {
          q -= 1;
          0 == q && b();
        };
        window._fli = function (b) {
          try {
            f("flash-ip", b);
          } catch (a) {}
          s();
        };
        window._sft = function (b) {
          try {
            f("flash-tag", b), f("flash-enabled", "true");
          } catch (a) {}
          s();
        };
        window._gfl = function (b) {
          try {
            for (var a = 0; a < b.length; a++) f("flash-font-" + b[a], "true");
          } catch (d) {}
          s();
        };
        a.appendChild(d);
        document.body.appendChild(a);
      }
    }
    function ca(a, b) {
      if (a) {
        var d = a.getItem(X);
        d || a.setItem(X, z);
        (d = a.getItem(X)) && f(b, d);
      }
    }
    function ya() {
      ca(localStorage, "dom-local-tag");
    }
    function za() {
      ca(sessionStorage, "dom-session-tag");
    }
    function Aa(a) {
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
              b();
            },
            function (a) {
              b();
            },
            { timeout: 1e3 }
          )
        : b();
    }
    function Ba() {
      var a = new Date(),
        b = a.getTimezoneOffset();
      f("time-unix-epoch-ms", a.getTime());
      f("time-local", a.toLocaleString());
      f("time-string", a.toString());
      f("time-tz-offset-minutes", b);
      var d = new Date(a.getFullYear(), 0, 1),
        c = new Date(a.getFullYear(), 6, 1),
        e = d.getTimezoneOffset() != c.getTimezoneOffset();
      f("time-tz-has-dst", e ? "true" : "false");
      var h = !1;
      e && a.getTimezoneOffset() == c.getTimezoneOffset() && (h = !0);
      f("time-tz-dst-active", h ? "true" : "false");
      a = b;
      h && ((d = c.getTimezoneOffset() - d.getTimezoneOffset()), (a = b - d));
      f("time-tz-std-offset", a);
      b = new Date(2014, 2, 6);
      b.setHours(7);
      b.setMinutes(58);
      b.setSeconds(39);
      f("time-tz-fixed-locale-string", b.toLocaleString());
    }
    function Ca(a) {
      var b = null;
      try {
        var d = document.createElement(
          '\x3cobject id\x3d"dialogHelperId" classid\x3d"clsid:3050f819-98b5-11cf-bb82-00aa00bdce0b" width\x3d"0" height\x3d"0"\x3e\x3c/object\x3e'
        );
        document.body.appendChild(d);
        setTimeout(function () {
          b = a();
          var c = document.getElementById("dialogHelperId");
          if (c && c.fonts)
            for (var h = 1; h <= c.fonts.count; h++)
              f("ie-font-" + c.fonts(h), "true");
          b();
          document.body.removeChild(d);
        }, 500);
      } catch (c) {
        null == b && (b = a()), b(), n(c);
      }
    }
    function Da() {
      try {
        for (var a = new Ea().detect(da), b = 0; b < a.length; b++)
          try {
            f("font-" + da[b], a[b]);
          } catch (d) {
            n(d);
          }
      } catch (c) {
        n(c);
      }
    }
    function Fa() {
      if (navigator.plugins) {
        for (var a = {}, b = {}, d = 0; d < navigator.plugins.length; d++) {
          var c = navigator.plugins[d];
          c.filename &&
            c.name &&
            f("plugin-" + c.name + "-filename", c.filename);
          c.description &&
            c.name &&
            f("plugin-" + c.name + "-desc", c.description);
          try {
            c.name = ~/^VLC Web.*$/;
          } catch (e) {
            n(e);
          }
          for (var h = 0; h < c.length; h++)
            if ((c[h].type && (b[c[h].type] = !0), c[h].suffixes)) {
              var q = c[h].suffixes.split(",");
              if (q && 0 < q.length)
                for (var s = 0; s < q.length; s++) a[q[s]] = !0;
            }
        }
        f("plugin-suffixes", ea(a).join(","));
        f("plugin-mimes", ea(b).join(","));
      }
    }
    function ea(a) {
      var b = [],
        d;
      for (d in a) b.push(d);
      return b.sort();
    }
    function f(a, b, d, c) {
      Y && Y.apply(null, [a, b]);
      A[a] = b;
    }
    function fa(a) {
      try {
        var b = Ga[a[0]];
        b && b.apply(null, a.slice(1));
      } catch (d) {
        n(d);
      }
    }
    function n(a) {
      try {
        "js-errors" in A || (A["js-errors"] = []),
          A["js-errors"].push(a.toString());
      } catch (b) {}
    }
    function Ha(a) {
      var b = D.createOscillator(),
        d = D.createAnalyser(),
        c = D.createGain(),
        e = D.createScriptProcessor(4096, 1, 1),
        h = a;
      c.gain.value = 0;
      b.type = "triangle";
      b.connect(d);
      d.connect(e);
      e.connect(c);
      c.connect(D.destination);
      e.onaudioprocess = function (a) {
        a = new Float32Array(d.frequencyBinCount);
        d.getFloatFrequencyData(a);
        for (var e = L.algo.SHA1.create(), f = 0; f < a.length; f++)
          e.update(a[f].toString());
        b.stop(0);
        c.disconnect();
        h && (h(e.finalize().toString(L.enc.Hex), null), (h = null));
      };
      b.start(0);
    }
    var T = 8,
      U = 1024,
      V = 8192,
      X = "_cc_ck",
      Ga = {
        run: function (a) {
          function mid() {
            for (
              var r = "",
                a =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                t = 0;
              64 > t;
              t++
            )
              r += a.charAt(Math.floor(Math.random() * a.length));
            return r;
          }
          Q = a;
          z = mid();
          f("_t", z);
          var b = H;
          H = function () {
            m.methods & 32768
              ? b && b()
              : P(function (a) {
                  b && b();
                });
          };
          var d = G;
          G = function (a, b) {
            try {
              f("timing-" + a, b);
            } catch (h) {
              n(h);
            }
            d && d.apply(null, [a, b]);
          };
          for (a = 0; a < Z.length; a++) N(Z[a], t);
          N(xa, J);
          m.methods & 4 && N(Aa, u);
          m.methods & 256 && (N(Ca, K), g(Da, k));
          m.methods & 131072 && N(ia, I);
          m.methods & 4096 && g(ma, r);
          m.methods & 2 && g(Ba, F);
          m.methods & 16 && g(Fa, v);
          m.methods & 32 &&
            g(
              S,
              p,
              navigator,
              "navigator.userAgent,navigator.buildid,navigator.product,navigator.oscpu,navigator.appVersion,navigator.cookieEnabled,navigator.platform,navigator.msManipulationViewsEnabled,navigator.appName,navigator.cpuClass,navigator.appMinorVersion,navigator.appCodeName,navigator.vendor,navigator.systemLanguage,navigator.msPointerEnabled,navigator.productSub,navigator.buildID,navigator.language,navigator.userLanguage,navigator.browserLanguage"
            );
          m.methods & 64 &&
            g(
              S,
              l,
              window,
              "window.clientInformation.language,window.screen.height,window.screen.width,window.doNotTrack,window.devicePixelRatio,window.history.length,window.screen.pixeldepth"
            );
          m.methods & 128 &&
            g(S, x, document, "document.width,document.plugins.length");
          m.methods & 1 && g(ya, w);
          m.methods & 512 && g(za, O);
          m.methods & 2048 && g(wa, C);
          m.methods & 65536 && g(ka, E);
          m.methods & 262144 && g(ha, B);
          M();
        },
        cf: function (a) {
          m.methods = a;
        },
        sr: function (a) {
          Y = a;
        },
        srt: function (a) {
          G = a;
        },
        sf: function (a) {
          H = a;
        },
        st: function (a) {
          aa = a;
        },
        cac: function (a) {
          Z.push(a);
        },
        ci: function (a) {
          W = a;
          for (var b in a) A[b] = a[b];
        },
        cag: function (a) {
          ga.start(function (b, d) {
            b && (A["audio-id"] = b);
            var c = !1,
              e = H;
            H = function () {
              c ||
                P(function (b) {
                  e();
                  a();
                });
              c = !0;
            };
            M();
          });
        },
        csd: P,
        cfp: function (a) {
          a(R.encode(ba(JSON.stringify(A))));
        },
        crdi: function (a) {
          A.crdi = !0;
          var b = function (b) {
            try {
              var c = JSON.parse(b.data);
              c && (c.dp || c.drg) && a(c);
            } catch (e) {}
          };
          window.attachEvent
            ? window.attachEvent("onmessage", b)
            : window.addEventListener && window.addEventListener("message", b);
        },
      },
      m = { methods: 475131 },
      Y = null,
      G = null,
      H = null,
      aa = 2e3,
      A = {},
      Z = [],
      W = {},
      z = "",
      Q = "",
      da = "Times New Roman CYR;Arial CYR;Courier New CYR;\u5b8b\u4f53;Arial Cyr;Times New Roman Cyr;Courier New Cyr;\u534e\u6587\u7ec6\u9ed1;\u5137\u9ed1 Pro;WP CyrillicB;WP CyrillicA;\uad81\uc11c\uccb4;\u7d30\u660e\u9ad4;\u5c0f\u585a\u660e\u671d Pr6N B;\u5b8b\u4f53-PUA;\u65b9\u6b63\u6d41\u884c\u4f53\u7e41\u4f53;\u6c49\u4eea\u5a03\u5a03\u7bc6\u7b80;\ub3cb\uc6c0;GaramondNo4CyrTCYLig;HelveticaInseratCyr Upright;HelveticaCyr Upright;TL Help Cyrillic;\uac00\ub294\uc548\uc0c1\uc218\uccb4;TLCyrillic2;AGRevueCyr-Roman;AGOptimaCyr;HelveticaInseratCyrillicUpright;HelveticaCyrillicUpright;HelveticaCyrillic;CyrillicRibbon;CyrillicHover;\u6587\u9f0e\uff30\uff2f\uff30\uff0d\uff14;\u65b9\u6b63\u4e2d\u5029\u7b80\u4f53;\u521b\u827a\u7b80\u4e2d\u5706;Zrnic Cyr;Zipper1 Cyr;Xorx_windy Cyr;Xorx_Toothy Cyr;\uc18c\uc57c\uc1949;\u0426\u0432\u0435\u0442\u043d\u044b\u0435 \u044d\u043c\u043e\u0434\u0437\u0438 Apple;Chinese Generic1;Korean Generic1;Bullets 5(Korean);UkrainianFuturisExtra;VNI-Viettay;UkrainianCompact;UkrainianBrushScript;TiffanyUkraine;Baltica_Russian-ITV;Vietnamese font;Unicorn Ukrainian;UkrainianTimesET;UkrainianCourier;Tiff-HeavyUkraine;\u4875\u6e67\u4c61\u6e20\u4172\u7464\u6573\u6967\u6e20\u3230\u3032\u202d\u2041\u6c6c\u2072\u6967\u6874\u7320\u7265\u7365\u7276\u6564\u2e54\u6875\u2070\u6861\u7020\u564e\u5468\u7566\u6170\u3032\u2020\u4e6f\u726d\u616c\u312e\u3020\u436f\u6465\u2056\u4e49\u2066\u6f72\u2057\u696e\u646f\u7773\u5468\u7566\u6170\u3032\u4e6f\u726d\u616cHungLan Artdesign - http://www.vietcomic.comVNI-Thufap2  Normalv2.0 Code VNI for WindowsVNI-Thufap2 Normal\u0002;Vietnam;Bwviet;Soviet;Soviet Expanded;Soviet Bold;Russian;UVN Han Viet;UkrainianAcademy;Symbol;Verdana;Webdings;Arial;Georgia;Courier New;Trebuchet MS;Times New Roman;Impact;Comic Sans MS;Wingdings;Tahoma;Microsoft Sans Serif;Arial Black;Plantagenet Cherokee;Arial Narrow;Wingdings 2;Wingdings 3;Arial Unicode MS;Papyrus;Calibri;Cambria;Consolas;Candara;Franklin Gothic Medium;Corbel;Constantia;Marlett;Lucida Console;Lucida Sans Unicode;MS Mincho;Arial Rounded MT Bold;Palatino Linotype;Batang;MS Gothic;PMingLiU;SimSun;MS PGothic;MS PMincho;Gulim;Cambria Math;Garamond;Bookman Old Style;Book Antiqua;Century Gothic;Monotype Corsiva;Courier;Meiryo;Century;MT Extra;MS Reference Sans Serif;MS Reference Specialty;Mistral;Bookshelf Symbol 7;Lucida Bright;Cooper Black;Modern No. 20;Bernard MT Condensed;Bell MT;Baskerville Old Face;Bauhaus 93;Britannic Bold;Wide Latin;Playbill;Harrington;Onyx;Footlight MT Light;Stencil;Colonna MT;Matura MT Script Capitals;Copperplate Gothic Bold;Copperplate Gothic Light;Edwardian Script ITC;Rockwell;Curlz MT;Engravers MT;Rockwell Extra Bold;Haettenschweiler;MingLiU;Mongolian Baiti;Microsoft Yi Baiti;Microsoft Himalaya;SimHei;SimSun-ExtB;PMingLiU-ExtB;MingLiU-ExtB;MingLiU_HKSCS-ExtB;MingLiU_HKSCS;Gabriola;Goudy Old Style;Calisto MT;Imprint MT Shadow;Gill Sans Ultra Bold;Century Schoolbook;Gloucester MT Extra Condensed;Perpetua;Franklin Gothic Book;Brush Script MT;Microsoft Tai Le;Gill Sans MT;Tw Cen MT;Lucida Handwriting;Lucida Sans;Segoe UI;Lucida Fax;MV Boli;Sylfaen;Estrangelo Edessa;Mangal;Gautami;Tunga;Shruti;Raavi;Latha;Lucida Calligraphy;Lucida Sans Typewriter;Kartika;Vrinda;Perpetua Titling MT;Cordia New;Angsana New;IrisUPC;CordiaUPC;FreesiaUPC;Miriam;Traditional Arabic;Miriam Fixed;JasmineUPC;KodchiangUPC;LilyUPC;Levenim MT;EucrosiaUPC;DilleniaUPC;Rod;Narkisim;FrankRuehl;David;Andalus;Browallia New;AngsanaUPC;BrowalliaUPC;MS UI Gothic;Aharoni;Simplified Arabic Fixed;Simplified Arabic;GulimChe;Dotum;DotumChe;GungsuhChe;Gungsuh;BatangChe;Meiryo UI;NSimSun;Segoe Script;Segoe Print;DaunPenh;Kalinga;Iskoola Pota;Euphemia;DokChampa;Nyala;MoolBoran;Leelawadee;Gisha;Microsoft Uighur;Arabic Typesetting;Malgun Gothic;Microsoft JhengHei;DFKai-SB;Microsoft YaHei;FangSong;KaiTi;Helvetica;Segoe UI Light;Segoe UI Semibold;Andale Mono;Palatino;Geneva;Monaco;Lucida Grande;Gill Sans;Helvetica Neue;Baskerville;Hoefler Text;Thonburi;Herculanum;Apple Chancery;Didot;Zapf Dingbats;Apple Symbols;Copperplate;American Typewriter;Zapfino;Cochin;Chalkboard;Sathu;Osaka;BiauKai;Segoe UI Symbol;Aparajita;Krungthep;Ebrima;Silom;Kokila;Shonar Bangla;Sakkal Majalla;Microsoft PhagsPa;Microsoft New Tai Lue;Khmer UI;Vijaya;Utsaah;Charcoal CY;Ayuthaya;InaiMathi;Euphemia UCAS;Vani;Lao UI;GB18030 Bitmap;KufiStandardGK;Geeza Pro;Chalkduster;Tempus Sans ITC;Kristen ITC;Apple Braille;Juice ITC;STHeiti;LiHei Pro;DecoType Naskh;New Peninim MT;Nadeem;Mshtakan;Gujarati MT;Devanagari MT;Arial Hebrew;Corsiva Hebrew;Baghdad;STFangsong".split(
        ";"
      ),
      L =
        L ||
        (function (a, b) {
          var d = {},
            c = (d.lib = {}),
            e = function () {},
            h = (c.Base = {
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
            f = (c.WordArray = h.extend({
              init: function (a, c) {
                a = this.words = a || [];
                this.sigBytes = c != b ? c : 4 * a.length;
              },
              toString: function (a) {
                return (a || k).stringify(this);
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
                var a = h.clone.call(this);
                a.words = this.words.slice(0);
                return a;
              },
              random: function (b) {
                for (var c = [], d = 0; d < b; d += 4)
                  c.push((4294967296 * a.random()) | 0);
                return new f.init(c, b);
              },
            })),
            g = (d.enc = {}),
            k = (g.Hex = {
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
                return new f.init(c, b / 2);
              },
            }),
            n = (g.Latin1 = {
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
                for (var b = a.length, d = [], c = 0; c < b; c++)
                  d[c >>> 2] |= (a.charCodeAt(c) & 255) << (24 - 8 * (c % 4));
                return new f.init(d, b);
              },
            }),
            l = (g.Utf8 = {
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
            m = (c.BufferedBlockAlgorithm = h.extend({
              reset: function () {
                this._data = new f.init();
                this._nDataBytes = 0;
              },
              _append: function (a) {
                "string" == typeof a && (a = l.parse(a));
                this._data.concat(a);
                this._nDataBytes += a.sigBytes;
              },
              _process: function (b) {
                var c = this._data,
                  d = c.words,
                  e = c.sigBytes,
                  h = this.blockSize,
                  g = e / (4 * h),
                  g = b ? a.ceil(g) : a.max((g | 0) - this._minBufferSize, 0);
                b = g * h;
                e = a.min(4 * b, e);
                if (b) {
                  for (var s = 0; s < b; s += h) this._doProcessBlock(d, s);
                  s = d.splice(0, b);
                  c.sigBytes -= e;
                }
                return new f.init(s, e);
              },
              clone: function () {
                var a = h.clone.call(this);
                a._data = this._data.clone();
                return a;
              },
              _minBufferSize: 0,
            }));
          c.Hasher = m.extend({
            cfg: h.extend(),
            init: function (a) {
              this.cfg = this.cfg.extend(a);
              this.reset();
            },
            reset: function () {
              m.reset.call(this);
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
          var p = (d.algo = {});
          return d;
        })(Math);
    (function () {
      var a = L,
        b = a.lib,
        d = b.WordArray,
        c = b.Hasher,
        e = [],
        b = (a.algo.SHA1 = c.extend({
          _doReset: function () {
            this._hash = new d.init([
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
                k = c[3],
                n = c[4],
                l = 0;
              80 > l;
              l++
            ) {
              if (16 > l) e[l] = a[b + l] | 0;
              else {
                var m = e[l - 3] ^ e[l - 8] ^ e[l - 14] ^ e[l - 16];
                e[l] = (m << 1) | (m >>> 31);
              }
              m = ((d << 5) | (d >>> 27)) + n + e[l];
              m =
                20 > l
                  ? m + (((f & g) | (~f & k)) + 1518500249)
                  : 40 > l
                  ? m + ((f ^ g ^ k) + 1859775393)
                  : 60 > l
                  ? m + (((f & g) | (f & k) | (g & k)) - 1894007588)
                  : m + ((f ^ g ^ k) - 899497514);
              n = k;
              k = g;
              g = (f << 30) | (f >>> 2);
              f = d;
              d = m;
            }
            c[0] = (c[0] + d) | 0;
            c[1] = (c[1] + f) | 0;
            c[2] = (c[2] + g) | 0;
            c[3] = (c[3] + k) | 0;
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
            var a = c.clone.call(this);
            a._hash = this._hash.clone();
            return a;
          },
        }));
      a.SHA1 = c._createHelper(b);
      a.HmacSHA1 = c._createHmacHelper(b);
    })();
    var R = {
        _keyStr:
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d",
        encode: function (a) {
          var b = "",
            d,
            c,
            e,
            f,
            g,
            k,
            l = 0;
          for (a = R._utf8_encode(a); l < a.length; )
            (d = a.charCodeAt(l++)),
              (c = a.charCodeAt(l++)),
              (e = a.charCodeAt(l++)),
              (f = d >> 2),
              (d = ((d & 3) << 4) | (c >> 4)),
              (g = ((c & 15) << 2) | (e >> 6)),
              (k = e & 63),
              isNaN(c) ? (g = k = 64) : isNaN(e) && (k = 64),
              (b =
                b +
                this._keyStr.charAt(f) +
                this._keyStr.charAt(d) +
                this._keyStr.charAt(g) +
                this._keyStr.charAt(k));
          return b;
        },
        _utf8_encode: function (a) {
          for (var b = "", d = 0; d < a.length; d++) {
            var c = a.charCodeAt(d);
            128 > c
              ? (b += String.fromCharCode(c))
              : (127 < c && 2048 > c
                  ? (b += String.fromCharCode((c >> 6) | 192))
                  : ((b += String.fromCharCode((c >> 12) | 224)),
                    (b += String.fromCharCode(((c >> 6) & 63) | 128))),
                (b += String.fromCharCode((c & 63) | 128)));
          }
          return b;
        },
      },
      Ea = function () {
        var a = ["monospace", "sans-serif", "serif"],
          b = document.getElementsByTagName("body")[0],
          d = document.createElement("div");
        d.setAttribute(
          "style",
          "visibility: hidden;position: absolute; top: 0px; left: -999px;"
        );
        b.appendChild(d);
        b = document.createElement("span");
        b.style.fontSize = "72px";
        b.innerHTML = "mmmmmmmmmmlli";
        var c = {},
          e = {},
          f;
        for (f in a)
          (b.style.fontFamily = a[f]),
            d.appendChild(b),
            (c[a[f]] = b.offsetWidth),
            (e[a[f]] = b.offsetHeight),
            d.removeChild(b);
        this.detect = function (b) {
          var f = document.createElement("div");
          f.setAttribute(
            "style",
            "visibility: hidden;position: absolute; top: 0px; left: -999px;"
          );
          for (var g = [], h = [], k = 0; k < b.length; k++) {
            var l = [];
            h.push(!1);
            for (var m in a) {
              var n = document.createElement("div"),
                p = document.createElement("span");
              p.style.fontSize = "72px";
              p.innerHTML = "mmmmmmmmmmlli";
              p.style.fontFamily = b[k] + "," + a[m];
              n.appendChild(p);
              f.appendChild(n);
              l.push(p);
            }
            g.push(l);
          }
          d.appendChild(f);
          for (k = 0; k < b.length; k++)
            for (m in ((l = g[k]), a))
              (p = l[m]),
                (n = p.offsetWidth != c[a[m]] || p.offsetHeight != e[a[m]]),
                (h[k] = h[k] || n);
          d.removeChild(f);
          return h;
        };
      },
      y = 0;
    t = "cust";
    u = "loc";
    F = "ti";
    v = "np";
    p = "no";
    l = "wo";
    x = "do";
    k = "kf";
    w = "ls";
    O = "ss";
    C = "iepl";
    r = "sc";
    J = "fc";
    K = "gief";
    E = "cp";
    I = "wr";
    B = "wgl";
    if (window._cc) for (var $ = 0; $ < _cc.length; $++) fa(_cc[$]);
    else window._cc = [];
    _cc.push = function (a) {
      fa(a);
    };
    var ga = {},
      D = null;
    ga.start = function (a) {
      try {
        if (null == D)
          if ("webkitAudioContext" in window) D = new webkitAudioContext();
          else if ("AudioContext" in window) D = new AudioContext();
          else throw "No audio context available";
        Ha(a);
      } catch (b) {
        a(null, b), n(b);
      }
    };
  })();
} catch (e$$45) {}

/*
page: http://www.merrilledge.com/
url: https://olui2.fs.ml.com/publish/ClientLoginUI/HTML/cc.js?_=1484548879525
*/
