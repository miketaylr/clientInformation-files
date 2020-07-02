// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 810
(function (w, g) {
  w[g] = w[g] || {};
  w[g].e = function (s) {
    return eval(s);
  };
})(window, "google_tag_manager");
(function () {
  var __c;
  (function () {
    (function (a) {
      __c = a;
      __c.a = "c";
      __c.b = ["google"];
      __c.isVendorTemplate = !0;
    })(function (a) {
      return a["78"];
    });
  })();

  var cb = this; /*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var db = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    eb = function (a) {
      if (null == a) return String(a);
      var b = db.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    fb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Na = function (a) {
      if (!a || "object" != eb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !fb(a, "constructor") &&
          !fb(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || fb(a, b);
    },
    gb = function (a, b) {
      var c = b || ("array" == eb(a) ? [] : {}),
        d;
      for (d in a)
        if (fb(a, d)) {
          var e = a[d];
          "array" == eb(e)
            ? ("array" != eb(c[d]) && (c[d] = []), (c[d] = gb(e, c[d])))
            : Na(e)
            ? (Na(c[d]) || (c[d] = {}), (c[d] = gb(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var Ra = null,
    hb = Math.random(),
    ib = null,
    Ga = null,
    Za = !1,
    jb = {},
    kb = {},
    $a = {};
  var lb,
    mb,
    nb,
    ob,
    pb,
    qb,
    rb,
    sb,
    ub,
    vb,
    wb,
    xb,
    S,
    yb,
    zb,
    Ab,
    Bb,
    Cb,
    Db,
    Eb,
    Fb,
    Gb,
    Hb,
    Ib,
    Jb,
    Kb,
    Mb,
    Nb,
    Ob,
    Pb,
    Qb,
    Rb,
    Tb,
    Ub,
    Vb,
    Wb,
    Xb,
    Yb,
    Zb,
    $b,
    ac,
    bc,
    cc,
    dc,
    ec,
    fc,
    gc,
    hc,
    ic,
    jc,
    kc,
    lc,
    mc,
    nc,
    oc,
    pc,
    qc,
    rc,
    sc,
    tc,
    uc,
    vc,
    wc,
    xc,
    yc,
    zc,
    Ac,
    Bc,
    Cc,
    Dc,
    Ec,
    Fc,
    Gc,
    Hc,
    Ic,
    Jc,
    Kc,
    Lc,
    Mc,
    Nc,
    Oc,
    Pc,
    Qc,
    Rc,
    Sc,
    Tc,
    Uc,
    Vc,
    Wc,
    Xc,
    Yc,
    Zc,
    $c,
    ad,
    bd,
    cd,
    dd,
    U,
    ed,
    fd,
    gd,
    hd,
    id,
    jd,
    kd,
    ld,
    md,
    nd,
    qd,
    rd,
    sd,
    td,
    wd,
    xd,
    yd,
    zd,
    Ad,
    Bd,
    Cd,
    Dd,
    Ed,
    Fd,
    Gd,
    Hd,
    Id,
    Jd,
    Kd,
    Ld,
    Md,
    Nd,
    Od,
    Pd,
    Qd,
    Rd,
    Sd,
    Td,
    Ud,
    Vd,
    Wd,
    Xd,
    Yd,
    Zd,
    $d,
    ae,
    be,
    ce,
    de,
    ee,
    fe,
    ge,
    he,
    ie,
    je,
    ke,
    le,
    me,
    ne,
    oe,
    pe,
    qe,
    re,
    se,
    te,
    ue,
    ve,
    we,
    xe,
    ye,
    ze,
    Ae,
    Be,
    Ce,
    De,
    Ee,
    Fe,
    Ge,
    He,
    Ie,
    Je,
    Ke,
    Le,
    Me,
    Ne,
    Oe,
    Pe,
    Qe,
    Re,
    Se,
    Te,
    Ue,
    Ve,
    We,
    Xe,
    Ye,
    Ze,
    $e,
    af,
    bf,
    cf,
    df,
    ef,
    ff,
    gf,
    hf,
    jf,
    kf,
    lf,
    mf,
    nf;
  (function () {
    var a = function (a) {
      return {
        toString: function () {
          return a;
        },
      };
    };
    lb = a("");
    mb = a("0");
    nb = "";
    ob = a("1");
    pb = a("2");
    qb = a("");
    rb = a("3");
    sb = a("4");
    ub = a("5");
    vb = a("8");
    wb = a("");
    xb = a("9");
    S = a("10");
    yb = a("11");
    zb = a("");
    Ab = a("");
    Bb = a("");
    Cb = a("");
    Db = a("");
    Eb = a("");
    Fb = a("");
    Gb = a("");
    Hb = a("");
    Ib = a("");
    Jb = a("");
    Kb = a("");
    Mb = a("");
    Nb = a("");
    Ob = a("");
    Pb = a("");
    Qb = a("12");
    Rb = a("");
    Tb = a("13");
    Ub = a("");
    Vb = a("14");
    Wb = a("");
    Xb = a("15");
    Yb = a("16");
    Zb = a("");
    $b = a("");
    ac = a("");
    bc = a("");
    cc = a("17");
    dc = a("");
    ec = a("");
    fc = a("");
    gc = a("");
    hc = a("");
    ic = a("");
    jc = a("");
    kc = a("");
    lc = a("18");
    mc = a("");
    nc = a("19");
    oc = a("");
    pc = a("20");
    qc = a("");
    rc = a("");
    sc = a("21");
    tc = a("");
    uc = a("");
    vc = a("22");
    wc = a("");
    xc = a("23");
    yc = a("24");
    zc = a("25");
    Ac = a("");
    Bc = a("26");
    Cc = a("");
    Dc = a("27");
    Ec = a("");
    Fc = a("");
    Gc = a("");
    Hc = a("");
    Ic = a("");
    Jc = a("");
    Kc = a("28");
    Lc = a("");
    Mc = a("");
    Nc = a("29");
    Oc = a("30");
    Pc = a("31");
    Qc = a("32");
    Rc = a("");
    Sc = a("");
    Tc = a("");
    Uc = a("");
    Vc = a("33");
    Wc = a("34");
    Xc = a("");
    Yc = a("35");
    Zc = a("36");
    $c = a("81");
    ad = a("82");
    bd = a("");
    cd = a("");
    dd = a("37");
    U = a("38");
    ed = a("39");
    fd = a("40");
    gd = a("41");
    hd = a("42");
    id = a("43");
    jd = a("");
    kd = a("44");
    ld = a("45");
    md = a("");
    nd = a("");
    qd = a("46");
    rd = a("");
    sd = a("47");
    td = a("");
    wd = a("");
    xd = a("48");
    yd = a("");
    zd = a("");
    Ad = a("");
    Bd = a("");
    Cd = a("");
    Dd = a("49");
    Ed = a("50");
    Fd = a("51");
    Gd = a("52");
    Hd = a("");
    Id = a("53");
    Jd = a("");
    Kd = a("");
    Ld = a("");
    Md = a("");
    Nd = a("54");
    Od = a("");
    Pd = a("56");
    Qd = a("");
    Rd = a("57");
    Sd = a("");
    Td = a("");
    Ud = a("58");
    Vd = a("");
    Wd = a("");
    Xd = a("");
    Yd = a("");
    Zd = a("");
    $d = a("");
    ae = a("");
    be = a("");
    ce = a("");
    de = a("");
    ee = a("");
    fe = a("");
    ge = a("59");
    he = a("60");
    ie = a("");
    je = a("");
    ke = a("");
    le = a("61");
    me = a("");
    ne = a("");
    oe = a("62");
    pe = a("");
    qe = a("");
    re = a("");
    se = a("");
    te = a("");
    ue = a("");
    ve = a("");
    we = a("");
    xe = a("");
    ye = a("");
    ze = a("");
    Ae = a("64");
    Be = a("");
    Ce = a("");
    De = a("");
    Ee = a("");
    Fe = a("");
    Ge = a("");
    He = a("");
    Ie = a("");
    Je = a("");
    Ke = a("65");
    Le = a("66");
    Me = a("");
    Ne = a("67");
    Oe = a("68");
    Pe = a("");
    Qe = a("");
    Re = a("69");
    Se = a("");
    Te = a("70");
    Ue = a("");
    Ve = a("");
    We = a("");
    Xe = "";
    Ye = a("");
    Ze = a("71");
    $e = a("72");
    af = a("");
    bf = a("");
    cf = a("73");
    df = a("");
    ef = a("74");
    ff = a("75");
    gf = a("");
    hf = a("");
    jf = a("76");
    kf = a("");
    lf = a("");
    mf = a("79");
    nf = a("80");
  })();
  var of = function () {},
    O = function (a) {
      return "function" == typeof a;
    },
    xa = function (a) {
      return "[object Array]" == Object.prototype.toString.call(Object(a));
    },
    pf = function (a) {
      return "number" == eb(a) && !isNaN(a);
    },
    qf = function (a) {
      return /^[0-9]+$/.test(a);
    },
    rf = function (a, b) {
      if (Array.prototype.indexOf) {
        var c = a.indexOf(b);
        return "number" == typeof c ? c : -1;
      }
      for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
      return -1;
    },
    Fa = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    K = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Ha = function (a) {
      return "false" == String(a).toLowerCase() ? !1 : !!a;
    },
    sf = function (a) {
      var b = [];
      if (xa(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    H = function () {
      return new Date();
    },
    Ja = function (a, b) {
      if (!pf(a) || !pf(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    tf = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  tf.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  tf.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  tf.prototype.contains = function (a) {
    return void 0 !== this.get(a);
  };
  var Af = function (a, b, c) {
      try {
        if (!a[Cd]) return a[Yc](a, b || of, c || of);
        c && c();
      } catch (d) {}
      return !1;
    },
    Bf = function (a, b) {
      function c(b, c) {
        a.contains(b) || a.set(b, []);
        a.get(b).push(c);
      }
      for (var d = Fa(b).split("&"), e = 0; e < d.length; e++)
        if (d[e]) {
          var f = d[e].indexOf("=");
          0 > f ? c(d[e], "1") : c(d[e].substring(0, f), d[e].substring(f + 1));
        }
    },
    Cf = function (a) {
      var b = a ? a.length : 0;
      return 0 < b ? a[b - 1] : "";
    },
    Df = function (a) {
      return function () {
        return a("GTM-TPPTSM");
      };
    },
    Ef = function (a) {
      for (var b = 0; b < a.length; b++) a[b]();
    },
    Ff = H().getTime(),
    Ma = function () {
      return "gtm" + Ff++;
    },
    Oa = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Gf = function (a) {
      return null !== a && void 0 !== a && void 0 !== a.length;
    },
    If = function (a, b) {
      0 == b ? (a.Wa = !0) : (a.complete = !0);
      var c = a.g;
      a.s && (a.s.Ha[c] = b);
      jb[c] && (jb[c].state = b);
    },
    Jf = function (a, b) {
      a.sort(function (a, d) {
        return b(a, d) ? -1 : b(d, a) ? 1 : 0;
      });
    };
  var w = window,
    J = document,
    Lf = navigator,
    Q = function (a, b) {
      var c = w[a];
      w[a] = void 0 === c ? b : c;
      return w[a];
    },
    I = function (a, b, c, d) {
      return (d || "http:" != w.location.protocol ? a : b) + c;
    },
    Mf = function (a) {
      var b = J.getElementsByTagName("script")[0] || J.body || J.head;
      b.parentNode.insertBefore(a, b);
    },
    Qa = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    r = function (a, b, c) {
      var d = J.createElement("script");
      d.type = "text/javascript";
      d.async = !0;
      d.src = a;
      Qa(d, b);
      c && (d.onerror = c);
      Mf(d);
      return d;
    },
    ga = function (a, b) {
      var c = J.createElement("iframe");
      c.height = "0";
      c.width = "0";
      c.style.display = "none";
      c.style.visibility = "hidden";
      Mf(c);
      Qa(c, b);
      void 0 !== a && (c.src = a);
      return c;
    },
    G = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
    },
    L = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    x = function (a) {
      w.setTimeout(a, 0);
    },
    Ta = !1,
    Ua = [],
    Nf = function (a) {
      if (!Ta) {
        var b = J.createEventObject,
          c = "complete" == J.readyState,
          d = "interactive" == J.readyState;
        if (!a || "readystatechange" != a.type || c || (!b && d)) {
          Ta = !0;
          for (var e = 0; e < Ua.length; e++) Ua[e]();
        }
        Ua.push = function () {
          for (var a = 0; a < arguments.length; a++) x(arguments[a]);
          return 0;
        };
      }
    },
    Of = 0,
    Pf = function () {
      if (!Ta && 140 > Of) {
        Of++;
        try {
          J.documentElement.doScroll("left"), Nf();
        } catch (a) {
          w.setTimeout(Pf, 50);
        }
      }
    },
    ya = function (a) {
      var b = J.getElementById(a);
      if (b && sa(b, "id") != a)
        for (var c = 1; c < document.all[a].length; c++)
          if (sa(document.all[a][c], "id") == a) return document.all[a][c];
      return b;
    },
    sa = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    va = function (a) {
      return a.target || a.srcElement || {};
    },
    Ea = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Xa = function (a) {
      var b = J.createElement("div");
      b.innerHTML = "A<div>" + a + "</div>";
      for (var b = b.lastChild, c = []; b.firstChild; )
        c.push(b.removeChild(b.firstChild));
      return c;
    },
    wa = function (a, b) {
      for (var c = {}, d = 0; d < b.length; d++) c[b[d]] = !0;
      for (
        var e = a, d = 0;
        e && !c[String(e.tagName).toLowerCase()] && 100 > d;
        d++
      )
        e = e.parentElement;
      e && !c[String(e.tagName).toLowerCase()] && (e = null);
      return e;
    },
    Qf = !1,
    Rf = [],
    Sf = function () {
      if (!Qf) {
        Qf = !0;
        for (var a = 0; a < Rf.length; a++) Rf[a]();
      }
    },
    Tf = function (a) {
      a = a || w;
      var b = a.location.href,
        c = b.indexOf("#");
      return 0 > c ? "" : b.substring(c + 1);
    },
    Va = function (a) {
      window.console && window.console.log && window.console.log(a);
    };
  var aa = function (a, b, c, d, e) {
      var f,
        g = (
          a.protocol.replace(":", "") || w.location.protocol.replace(":", "")
        ).toLowerCase();
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "protocol":
          f = g;
          break;
        case "host":
          f = (a.hostname || w.location.hostname).split(":")[0].toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case "port":
          f = String(
            1 * (a.hostname ? a.port : w.location.port) ||
              ("http" == g ? 80 : "https" == g ? 443 : "")
          );
          break;
        case "path":
          f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var k = f.split("/");
          0 <= rf(d || [], k[k.length - 1]) && (k[k.length - 1] = "");
          f = k.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          if (e)
            a: {
              for (var m = f.split("&"), l = 0; l < m.length; l++) {
                var p = m[l].split("=");
                if (decodeURIComponent(p[0]).replace(/\+/g, " ") == e) {
                  f = decodeURIComponent(p.slice(1).join("=")).replace(
                    /\+/g,
                    " "
                  );
                  break a;
                }
              }
              f = void 0;
            }
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Uf = function (a) {
      var b = "";
      a && a.href && (b = a.hash ? a.href.replace(a.hash, "") : a.href);
      return b;
    },
    ba = function (a) {
      var b = J.createElement("a");
      a && (b.href = a);
      return b;
    };
  var ia = function (a, b) {
    var c = function () {};
    c.prototype = a.prototype;
    var d = new c();
    a.apply(d, Array.prototype.slice.call(arguments, 1));
    return d;
  };
  var fa = function (a) {
      var b = ["veinteractive.com", "ve-interactive.cn"];
      if (!a) return !1;
      var c = aa(ba(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    Ba = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Vf = new tf(),
    Wf = {},
    Yf = {
      set: function (a, b) {
        gb(Xf(a, b), Wf);
      },
      get: function (a) {
        return P(a, 2);
      },
      reset: function () {
        Vf = new tf();
        Wf = {};
      },
    },
    P = function (a, b) {
      if (2 == b) {
        for (var c = Wf, d = a.split("."), e = 0; e < d.length; e++) {
          if (void 0 === c[d[e]]) return;
          c = c[d[e]];
        }
        return c;
      }
      return Vf.get(a);
    },
    Xf = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    };
  var Zf = Math.random(),
    $f = "0.100000" > Zf;
  var ag = function (a, b) {
      $f &&
        G(
          "//www.googletagmanager.com/a?id=GTM-TPPTSM&cv=810&v=t&n=" +
            a +
            (void 0 !== b ? "&s=" + encodeURIComponent(b) : "") +
            "&l=" +
            (H().getTime() - K(ib)) +
            "&sr=0.100000&ps=" +
            Zf +
            "&cb=" +
            Ja()
        );
    },
    bg = of;
  var cg = of,
    dg = [],
    eg = !1,
    ca = function (a) {
      return w["dataLayer"].push(a);
    },
    fg = function (a) {
      var b = !1;
      return function () {
        !b && O(a) && x(Df(a));
        b = !0;
      };
    },
    lg = function () {
      for (var a = !1; !eg && 0 < dg.length; ) {
        eg = !0;
        var b = dg.shift();
        if (O(b))
          try {
            b.call(Yf);
          } catch (za) {}
        else if (xa(b))
          a: {
            var c = b;
            if ("string" == eb(c[0])) {
              for (
                var d = c[0].split("."),
                  e = d.pop(),
                  f = c.slice(1),
                  g = Wf,
                  h = 0;
                h < d.length;
                h++
              ) {
                if (void 0 === g[d[h]]) break a;
                g = g[d[h]];
              }
              try {
                g[e].apply(g, f);
              } catch (za) {}
            }
          }
        else {
          var k = void 0,
            m = void 0,
            l = b;
          for (m in l)
            if (l.hasOwnProperty(m)) {
              var p = m,
                q = l[m];
              Vf.set(p, q);
              gb(Xf(p, q), Wf);
            }
          var v = !1,
            y = l.event;
          if (y) {
            k = Ff++;
            Ga = y;
            if (!l["gtm.uniqueEventId"]) {
              var t = k;
              Vf.set("gtm.uniqueEventId", t);
              gb(Xf("gtm.uniqueEventId", t), Wf);
            }
            var z = fg(l.eventCallback),
              E = l.eventTimeout;
            E && w.setTimeout(z, Number(E));
            v = cg(k, y, z, l.eventReporter);
          }
          ib || ((ib = l["gtm.start"]) && bg());
          var D = l,
            C = k,
            A = y,
            M = Wf;
          if (!v) {
            var F = k,
              N = y;
          }
          Ga = null;
          a = v || a;
        }
        var T = b,
          R = Wf;
        kg();
        eg = !1;
      }
      return !a;
    },
    mg = function () {
      var a = lg();
      try {
        var b = w["dataLayer"].hide;
        if (b && void 0 !== b["GTM-TPPTSM"] && b.end) {
          b["GTM-TPPTSM"] = !1;
          var c = !0,
            d;
          for (d in b)
            if (!0 === b[d]) {
              c = !1;
              break;
            }
          c && (b.end(), (b.end = null));
        }
      } catch (e) {}
      return a;
    };
  var ua = function (a, b, c) {
      L(a, b, c, void 0);
    },
    ea = function (a, b, c) {
      r(a, b, c);
    },
    ab = function (a, b) {
      w[a] = b;
    },
    n = function (a, b, c) {
      var d = w;
      b && (void 0 === d[a] || (c && !d[a])) && (d[a] = b);
      return d[a];
    },
    u = function (a, b, c) {
      return ("https:" == w.location.protocol ? a : b) + c;
    };
  var ng = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    og = {
      customPixels: ["nonGooglePixels"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    pg = {
      customPixels: ["customScripts", "html"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    qg = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    rg = function () {
      var a = P("gtm.whitelist");
      var b = a && qg(sf(a), og),
        c = P("gtm.blacklist") || P("tagTypeBlacklist") || [];
      ng.test(w.location && w.location.hostname) &&
        ((c = sf(c)), c.push("nonGooglePixels", "nonGoogleScripts"));
      var d = c && qg(sf(c), pg),
        e = {};
      return function (f) {
        var g = f && f[Yc];
        if (!g) return !0;
        if (void 0 !== e[g.a]) return e[g.a];
        var h = !0;
        if (a)
          a: {
            if (0 > rf(b, g.a))
              if (g.b && 0 < g.b.length)
                for (var k = 0; k < g.b.length; k++) {
                  if (0 > rf(b, g.b[k])) {
                    h = !1;
                    break a;
                  }
                }
              else {
                h = !1;
                break a;
              }
            h = !0;
          }
        var m = !1;
        if (c) {
          var l;
          if (!(l = 0 <= rf(d, g.a)))
            a: {
              for (var p = g.b || [], q = new tf(), v = 0; v < d.length; v++)
                q.set(d[v], !0);
              for (v = 0; v < p.length; v++)
                if (q.get(p[v])) {
                  l = !0;
                  break a;
                }
              l = !1;
            }
          m = l;
        }
        return (e[g.a] = !h || m);
      };
    };
  var _jsm = function (a) {
    if (void 0 !== a[ld])
      try {
        var b = w.google_tag_manager;
        return b && b.e && b.e(a[ld]);
      } catch (c) {}
  };
  _jsm.a = "jsm";
  _jsm.b = ["customScripts"];
  var _c = function (a) {
    return a[jf];
  };
  _c.a = "c";
  _c.b = ["google"];
  var Da = function (a) {
      var b = J;
      return sg ? b.querySelectorAll(a) : null;
    },
    tg = !1;
  if (J.querySelectorAll)
    try {
      var ug = J.querySelectorAll(":root");
      ug && 1 == ug.length && ug[0] == J.documentElement && (tg = !0);
    } catch (a) {}
  var sg = tg;
  var _eam = function (a) {
    var b = a[yb],
      c = P("gtm.element");
    return sa(c, b) || a[vc] || "";
  };
  _eam.a = "eam";
  _eam.b = ["google"];
  var vg = void 0,
    wg = "",
    xg = 0,
    yg = void 0,
    _et = function (a) {
      var b,
        c = P("gtm.element"),
        d = P("event"),
        e = Number(H());
      vg === c && wg === d && xg > e - 250
        ? (b = yg)
        : ((yg = b = c ? Ea(c) : ""), (vg = c), (wg = d));
      xg = e;
      return b ? b : a[vc];
    };
  _et.a = "et";
  _et.b = ["google"];
  var _eu = function (a) {
    var b = String(P("gtm.elementUrl") || a[vc] || ""),
      c = ba(b);
    return b;
  };
  _eu.a = "eu";
  _eu.b = ["google"];
  var _e = function () {
    return Ga;
  };
  _e.a = "e";
  _e.b = ["google"];
  var zg = /(^|\.)doubleclick\.net$/i,
    Ag = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Ia = function (a) {
      for (
        var b = String(J.cookie).split(";"), c = [], d = 0;
        d < b.length;
        d++
      ) {
        var e = b[d].split("="),
          f = Fa(e[0]);
        if (f && f == a) {
          var g = Fa(e.slice(1).join("="));
          g && (g = decodeURIComponent(g));
          c.push(g);
        }
      }
      return c;
    },
    Bg = function (a, b, c, d, e) {
      if (zg.test(J.location.hostname) || ("/" == c && Ag.test(d))) return !1;
      var f = a + "=" + b + "; ";
      c && (f += "path=" + c + "; ");
      e && (f += "expires=" + e.toGMTString() + "; ");
      d && (f += "domain=" + d + ";");
      var g = J.cookie;
      J.cookie = f;
      return g != J.cookie || 0 <= rf(Ia(a), b);
    },
    Cg = function (a) {
      if ("none" == a) return 0;
      0 == a.indexOf(".") && (a = a.substr(1));
      return a.split(".").length;
    },
    Dg = function (a) {
      var b = a;
      b
        ? (1 < b.length &&
            b.lastIndexOf("/") == b.length - 1 &&
            (b = b.substr(0, b.length - 1)),
          0 != b.indexOf("/") && (b = "/" + b),
          (a = b))
        : (a = "/");
      return "/" == a ? 1 : a.split("/").length;
    },
    Eg = function () {
      var a = aa(w.location, "host", !0).split(".");
      if (4 == a.length && /^[0-9]*$/.exec(a[3])) return ["none"];
      for (var b = [], c = a.length - 2; 0 <= c; c--)
        b.push(a.slice(c).join("."));
      b.push("none");
      return b;
    };
  var Fg = function (a, b) {
    this.f = a;
    this.j = b;
  };
  Fg.prototype.toString = function () {
    var a = "" + this.f;
    1 < this.j && (a = a + "-" + this.j);
    return a;
  };
  var Gg = function (a, b) {
    this.Fa = a;
    this.ka = b;
  };
  Gg.prototype.toString = function () {
    return "" + this.ka + "." + this.Fa;
  };
  var Jg = function (a, b) {
      var c = new Hg(null, a, b);
      Ig(c);
      return c;
    },
    Hg = function (a, b, c) {
      this.Oa = Math.floor(H().getTime() / 864e5);
      this.ja = b || "auto";
      this.aa = c || "/";
      var d = Cg(this.ja),
        e = Dg(this.aa);
      this.F = a || new Fg(d, e);
      this.h = [];
      this.C = new tf();
    },
    Lg = function (a, b, c) {
      b &&
        ("" == c.Fa
          ? Kg(a, b)
          : (a.C.contains(b) || a.h.push(b), a.C.set(b, c)));
    },
    Mg = function (a, b) {
      for (var c = 0; c < b.length; c++) Lg(a, b[c][0], b[c][1]);
    },
    Kg = function (a, b) {
      var c = rf(a.h, b);
      0 <= c && a.h.splice(c, 1);
      a.C.set(b, void 0);
    },
    Ng = function (a) {
      for (var b = [], c = 0; c < a.h.length; c++) {
        var d = a.h[c];
        b.push([d, a.C.get(d)]);
      }
      return b;
    },
    Og = function (a) {
      for (var b = 0, c = 0; c < a.h.length; c++)
        b = Math.max(b, a.C.get(a.h[c]).ka);
      return 864e5 * b;
    };
  Hg.prototype.toString = function () {
    if (0 == this.h.length) return "";
    for (var a = [], b = 0; b < this.h.length; b++) {
      var c = this.h[b];
      a.push("" + c + "." + this.C.get(c).toString());
    }
    return "GAX1." + this.F.toString() + "." + a.join("!");
  };
  var Pg = function (a, b) {
      for (
        var c = new Date(), d = Dg(a.aa), e = [], f = 0;
        f < a.h.length;
        f++
      ) {
        var g = a.h[f];
        a.C.get(g).ka < a.Oa && e.push(g);
      }
      for (f = 0; f < e.length; f++) Kg(a, e[f]);
      if (a.h.length > (b || 10)) return !1;
      c.setTime(Og(a));
      if ("auto" != a.ja) return Bg("_gaexp", a.toString(), a.aa, a.ja, c);
      for (var h = Eg(), k = 0; k < h.length; k++)
        if (
          "none" != h[k] &&
          ((a.F = new Fg(Cg(h[k]), d)),
          Bg("_gaexp", a.toString(), a.aa, h[k], c))
        )
          return !0;
      return !1;
    },
    Ig = function (a) {
      for (
        var b = a.F.f, c = a.F.j, d = Ia("_gaexp"), e = [], f = 0;
        f < d.length;
        f++
      ) {
        var g = Qg(a, d[f]);
        g && e.push(g);
      }
      Jf(e, function (a, d) {
        var e = a.F,
          f = d.F;
        return e.f == f.f && e.j == f.j
          ? !1
          : e.f == b && e.j == c
          ? !0
          : f.f == b && f.j == c
          ? !1
          : e.f == b
          ? f.f != b || e.j < f.j
          : f.f == b
          ? !1
          : e.j == c
          ? f.f != b && (f.j != c || e.f < f.f)
          : f.j == c
          ? !1
          : e.f < f.f || (e.f == f.f && e.j < f.j);
      });
      a.F = 0 < e.length ? e[0].F : new Fg(b, c);
      for (f = e.length - 1; 0 <= f; f--) Mg(a, Ng(e[f]));
    },
    Qg = function (a, b) {
      var c = b.match(/GAX1\.([^.]+).(.*)/);
      if (c) {
        var d;
        a: {
          var e = (c[1] || "").split("-");
          if (!(0 == e.length || 2 < e.length)) {
            var f = Fa(e[0]);
            if (0 != f.length) {
              var g = 2 == e.length ? Fa(e[1]) : "1";
              if (qf(f) && qf(g)) {
                d = new Fg(K(f), K(g));
                break a;
              }
            }
          }
          d = void 0;
        }
        if (d) {
          for (
            var h = new Hg(d, a.ja, a.aa), k = (c[2] || "").split("!"), m = 0;
            m < k.length;
            m++
          ) {
            var l = k[m].split(".");
            if (3 == l.length) {
              if (!qf(l[1])) return;
              Lg(h, l[0], new Gg(l[2], K(l[1])));
            }
          }
          return h;
        }
      }
    };
  var _hid = function () {
    return La;
  };
  _hid.a = "hid";
  _hid.b = ["google"];
  var _j = function (a) {
    for (var b = String(a[Id]).split("."), c = w, d = 0; d < b.length; d++)
      c = c && c[b[d]];
    return c;
  };
  _j.a = "j";
  _j.b = ["google"];
  var _v = function (a) {
    var b = P(a[Id].replace(/\\\./g, "."), a[nc]);
    return void 0 !== b ? b : a[vc];
  };
  _v.a = "v";
  _v.b = ["google"];
  var _r = function (a) {
    return Ja(a[Gd], a[Ed]);
  };
  _r.a = "r";
  _r.b = ["google"];
  var _f = function (a) {
    var b = String(P("gtm.referrer") || J.referrer);
    if (!b) return b;
    var c = ba(b);
    return b;
  };
  _f.a = "f";
  _f.b = ["google"];
  var _smm = function (a) {
    var b = a[hd],
      c = a[Dd] || {};
    return c.hasOwnProperty(b) ? c[b] : a[vc];
  };
  _smm.a = "smm";
  _smm.b = ["google"];
  var _t = function () {
    return H().getTime();
  };
  _t.a = "t";
  _t.b = ["google"];
  var Ca = function (a) {
      var b = w.location,
        c;
      (c = a[kc] ? a[kc] : P("gtm.url")) && (b = ba(String(c)));
      var d = b.href,
        e = d.indexOf("#"),
        f = 0 > e ? d : d.substr(0, e);
      a[Xb] && (f = aa(b, a[Xb], a[ue], a[uc], a[he]));
      return f;
    },
    _u = Ca;
  _u.a = "u";
  _u.b = ["google"];
  var _cn = function (a) {
    return 0 <= String(a[xb]).indexOf(String(a[S]));
  };
  _cn.a = "cn";
  _cn.b = ["google"];
  var _eq = function (a) {
    return String(a[xb]) == String(a[S]);
  };
  _eq.a = "eq";
  _eq.b = ["google"];
  var _gt = function (a) {
    return Number(a[xb]) > Number(a[S]);
  };
  _gt.a = "gt";
  _gt.b = ["google"];
  var _re = function (a) {
    return new RegExp(a[S], a[ed] ? "i" : void 0).test(a[xb]);
  };
  _re.a = "re";
  _re.b = ["google"];
  var _sw = function (a) {
    return 0 == String(a[xb]).indexOf(String(a[S]));
  };
  _sw.a = "sw";
  _sw.b = ["google"];
  var La = new String("undefined"),
    ch = function (a) {
      this.resolve = function (b) {
        for (var c = [], d = 0; d < a.length; d++)
          c.push(a[d] === La ? b : a[d]);
        return c.join("");
      };
    };
  ch.prototype.toString = function () {
    return this.resolve("undefined");
  };
  ch.prototype.valueOf = ch.prototype.toString;
  var dh = {},
    eh = function (a, b) {
      var c = Ff++;
      dh[c] = [a, b];
      return c;
    },
    fh = function (a) {
      var b = a ? 0 : 1;
      return function (a) {
        var c = dh[a];
        if (c && O(c[b])) c[b]();
        dh[a] = void 0;
      };
    };
  var gh = String.prototype.trim
      ? function (a) {
          return a.trim();
        }
      : function (a) {
          return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
        },
    hh = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  var ih;
  a: {
    var jh = cb.navigator;
    if (jh) {
      var kh = jh.userAgent;
      if (kh) {
        ih = kh;
        break a;
      }
    }
    ih = "";
  }
  var W = function (a) {
    return -1 != ih.indexOf(a);
  };
  var lh = function () {
      W("iPod");
    },
    mh = function () {
      return W("iPhone") && !W("iPod") && !W("iPad");
    };
  var nh = function (a) {
    nh[" "](a);
    return a;
  };
  nh[" "] = function () {};
  var ph = function (a, b) {
    var c = oh;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
  };
  var qh = W("Opera"),
    rh = W("Trident") || W("MSIE"),
    sh = W("Edge"),
    th;
  if ((th = W("Gecko")))
    th = !(-1 != ih.toLowerCase().indexOf("webkit") && !W("Edge"));
  var uh = th && !(W("Trident") || W("MSIE")) && !W("Edge"),
    vh = -1 != ih.toLowerCase().indexOf("webkit") && !W("Edge");
  vh && W("Mobile");
  W("Macintosh");
  W("Windows");
  W("Linux") || W("CrOS");
  var wh = cb.navigator || null;
  wh && (wh.appVersion || "").indexOf("X11");
  W("Android");
  mh();
  W("iPad");
  lh();
  mh() || W("iPad") || lh();
  var xh = function () {
      var a = cb.document;
      return a ? a.documentMode : void 0;
    },
    yh;
  a: {
    var zh = "",
      Ah = (function () {
        var a = ih;
        if (uh) return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (sh) return /Edge\/([\d\.]+)/.exec(a);
        if (rh) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (vh) return /WebKit\/(\S+)/.exec(a);
        if (qh) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    Ah && (zh = Ah ? Ah[1] : "");
    if (rh) {
      var Bh = xh();
      if (null != Bh && Bh > parseFloat(zh)) {
        yh = String(Bh);
        break a;
      }
    }
    yh = zh;
  }
  var Ch = yh,
    oh = {},
    Dh = function (a) {
      return ph(a, function () {
        for (
          var b = 0,
            c = gh(String(Ch)).split("."),
            d = gh(String(a)).split("."),
            e = Math.max(c.length, d.length),
            f = 0;
          0 == b && f < e;
          f++
        ) {
          var g = c[f] || "",
            h = d[f] || "";
          do {
            var k = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""],
              m = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
            if (0 == k[0].length && 0 == m[0].length) break;
            b =
              hh(
                0 == k[1].length ? 0 : parseInt(k[1], 10),
                0 == m[1].length ? 0 : parseInt(m[1], 10)
              ) ||
              hh(0 == k[2].length, 0 == m[2].length) ||
              hh(k[2], m[2]);
            g = k[3];
            h = m[3];
          } while (0 == b);
        }
        return 0 <= b;
      });
    },
    Eh;
  var Fh = cb.document;
  Eh =
    Fh && rh
      ? xh() || ("CSS1Compat" == Fh.compatMode ? parseInt(Ch, 10) : 5)
      : void 0;
  var Gh;
  if (!(Gh = !uh && !rh)) {
    var Hh;
    if ((Hh = rh)) Hh = 9 <= Number(Eh);
    Gh = Hh;
  }
  Gh || (uh && Dh("1.9.1"));
  rh && Dh("9");
  var Wa = function (a, b) {
      var c = "";
      rh &&
        !Ih(a) &&
        (c =
          '<script>document.domain="' + document.domain + '";\x3c/script>' + c);
      var d =
        "<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>" +
        c +
        "</head><body>" +
        b +
        "</body></html>";
      if (Jh) a.srcdoc = d;
      else if (Kh) {
        var e = a.contentWindow.document;
        e.open("text/html", "replace");
        e.write(d);
        e.close();
      } else Lh(a, d);
    },
    Jh = vh && "srcdoc" in document.createElement("iframe"),
    Kh = uh || vh || (rh && Dh(11)),
    Lh = function (a, b) {
      rh && Dh(7) && !Dh(10) && 6 > Mh() && Nh(b) && (b = Oh(b));
      var c = function () {
        a.contentWindow.goog_content = b;
        a.contentWindow.location.replace("javascript:window.goog_content");
      };
      rh && !Ih(a) ? Ph(a, c) : c();
    },
    Mh = function () {
      var a = navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
      return a ? parseFloat(a[1]) : 0;
    },
    Ih = function (a) {
      try {
        var b;
        var c = a.contentWindow;
        try {
          var d;
          if ((d = !!c && null != c.location.href))
            b: {
              try {
                nh(c.foo);
                d = !0;
                break b;
              } catch (e) {}
              d = !1;
            }
          b = d;
        } catch (e) {
          b = !1;
        }
        return b;
      } catch (e) {
        return !1;
      }
    },
    Qh = 0,
    Ph = function (a, b) {
      var c = "goog_rendering_callback" + Qh++;
      cb[c] = b;
      a.src =
        "javascript:'<script>(function() {document.domain = \"" +
        document.domain +
        '";var continuation = window.parent.' +
        c +
        ";window.parent." +
        c +
        " = null;continuation();})()\x3c/script>'";
    },
    Nh = function (a) {
      for (var b = 0; b < a.length; ++b) if (127 < a.charCodeAt(b)) return !0;
      return !1;
    },
    Oh = function (a) {
      for (
        var b = unescape(encodeURIComponent(a)),
          c = Math.floor(b.length / 2),
          d = [],
          e = 0;
        e < c;
        ++e
      )
        d[e] = String.fromCharCode(
          256 * b.charCodeAt(2 * e + 1) + b.charCodeAt(2 * e)
        );
      1 == b.length % 2 && (d[c] = b.charAt(b.length - 1));
      return d.join("");
    }; /*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

  var Sh = function (a, b, c, d) {
    return function () {
      try {
        if (0 < b.length) {
          var e = b.shift(),
            f = Sh(a, b, c, d);
          if (
            "SCRIPT" == String(e.nodeName).toUpperCase() &&
            "text/gtmscript" == e.type
          ) {
            var g = J.createElement("script");
            g.async = !1;
            g.type = "text/javascript";
            g.id = e.id;
            g.text = e.text || e.textContent || e.innerHTML || "";
            e.charset && (g.charset = e.charset);
            var h = e.getAttribute("data-gtmsrc");
            h && ((g.src = h), Qa(g, f));
            a.insertBefore(g, null);
            h || f();
          } else if (
            e.innerHTML &&
            0 <= e.innerHTML.toLowerCase().indexOf("<script")
          ) {
            for (var k = []; e.firstChild; )
              k.push(e.removeChild(e.firstChild));
            a.insertBefore(e, null);
            Sh(e, k, f, d)();
          } else a.insertBefore(e, null), f();
        } else c();
      } catch (m) {
        x(d);
      }
    };
  };
  var Uh = function (a, b, c) {
      if (J.body) {
        var d = a[dd];
        d instanceof ch && ((d = d.resolve(eh(b, c))), (b = of));
        if (a[df])
          try {
            Wa(
              ga(),
              "<script>var google_tag_manager=parent.google_tag_manager;\x3c/script>" +
                d
            ),
              x(b);
          } catch (e) {
            x(c);
          }
        else a[ff] ? Th(d, b, c) : Sh(J.body, Xa(d), b, c)();
      } else
        w.setTimeout(function () {
          Uh(a, b, c);
        }, 200);
    },
    _html = Uh;
  _html.a = "html";
  _html.b = ["customScripts"];
  var fi = function (a, b, c, d) {
      var e = b + ": " + c + (d ? " !important" : ""),
        f = document;
      if (f.createStyleSheet) {
        var g = ci(f),
          h = g.rules.length;
        g.addRule(a, e);
        return function () {
          g.removeRule ? g.removeRule(h) : g.deleteRule(h);
          g.addRule("x", "-", h);
        };
      }
      var k = di(a + "{" + e + "}", f);
      ei(k, f);
      var m = k.parentNode;
      return function () {
        m.removeChild(k);
      };
    },
    gi = null,
    ci = function (a) {
      if (gi) return gi;
      for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
        var c = a.styleSheets[b],
          d = c.ownerNode;
        if (d && d.parentNode && "HEAD" == d.parentNode.tagName)
          return (gi = c);
      }
      0 == a.styleSheets.length && a.createStyleSheet();
      return (gi = a.styleSheets[0]);
    },
    di = function (a, b) {
      var c = (b || document).createElement("style");
      void 0 !== c.cssText ? (c.cssText = a) : (c.innerHTML = a);
      return c;
    },
    ei = function (a, b) {
      var c = b || document,
        d = c.getElementsByTagName("head")[0];
      d ||
        ((d = c.createElement("head")),
        c.body.parentNode.insertBefore(d, c.body));
      d.appendChild(a);
    };
  var ni = {},
    oi = void 0,
    pi = function (a) {
      var b = ni[a];
      b ||
        ((b = { id: a, v: [], W: 0, Ia: null, za: void 0, Da: !1 }),
        (ni[a] = b));
      oi = b;
    },
    ri = function (a, b, c, d) {
      var e = oi;
      if (!sg || !e) return !1;
      var f = {
        id: e.id + ":" + e.v.length,
        eb: b,
        U: [],
        Za: c,
        G: a,
        ua: 0,
        sa: d || null,
        Na: 0,
        V: !1,
      };
      e.v.push(f);
      null === a ? ((f.V = !0), b(null)) : qi(e);
      return !0;
    },
    si = function (a) {
      var b = fi(a, "visibility", "hidden", !0);
      return function () {
        O(b) && b.apply();
        b = null;
      };
    },
    ti = function (a, b, c, d) {
      var e = b;
      if (!Ta) {
        var f = si(a.A);
        Ua.push(f);
        e = function (a, c) {
          var d = b(a, c);
          f();
          return d;
        };
      }
      return ri(a, e, c, d);
    },
    qi = function (a) {
      if (!a.Da) {
        for (var b = a.W; b < a.v.length; b++) {
          var c = a.v[b],
            d = b == a.W;
          if (!c.V && !ui(d, c)) break;
          c.V && d && a.W++;
        }
        a.v.length > a.W
          ? (a.Ia ||
              (a.Ia = w.setTimeout(function () {
                a.Ia = null;
                qi(a);
              }, 80)),
            Ta ||
              a.za ||
              ((a.za = function () {
                x(function () {
                  qi(a);
                });
              }),
              L(J, "DOMContentLoaded", a.za)))
          : vi(a);
      }
    },
    vi = function (a) {
      for (var b = 0; b < a.v.length; b++) {
        var c = a.v[b];
        if (c.G)
          for (var d = Da(c.G.A) || [], e = 0; e < d.length; e++) {
            var f = d[e];
            (f.gtmProgressiveApplied && f.gtmProgressiveApplied[c.id]) ||
              (wi(f, c.id), c.U.push(xi(f, c.id)));
          }
      }
    },
    ui = function (a, b) {
      var c = [];
      if (b.G) {
        var d = yi(b.G, b.id),
          e = null;
        b.sa && (e = yi(b.sa, b.id + "-t"));
        for (var f = 0; f < d.length; f++) {
          var g = d[f],
            h;
          if (
            null != e &&
            ((h = e.length > f ? e[f] : null),
            !h && !Ta && (null === b.sa.o || b.Na + c.length < b.sa.o))
          )
            break;
          c.push({ element: g, Hb: h });
        }
      }
      if (!Ta && b.Za && (!a || null == b.G.o || b.G.o != b.ua + c.length))
        return !1;
      for (var k = 0; k < c.length; k++) {
        var m = c[k].element,
          l = c[k].Hb,
          p;
        b.ua++;
        wi(m, b.id);
        l && (b.Na++, (p = b.id + "-t"), wi(l, p));
        var q = b.eb(m, l);
        O(q) && b.U.push(q);
        b.U.push(xi(m, b.id));
        l && p && b.U.push(xi(l, p));
      }
      if ((b.G.o && b.G.o == b.ua) || Ta) b.V = !0;
      return !0;
    },
    wi = function (a, b) {
      a.gtmProgressiveApplied || (a.gtmProgressiveApplied = {});
      a.gtmProgressiveApplied[b] = !0;
    },
    xi = function (a, b) {
      return function () {
        a.gtmProgressiveApplied && delete a.gtmProgressiveApplied[b];
      };
    },
    yi = function (a, b) {
      for (var c = Da(a.A) || [], d = [], e = 0; e < c.length; e++) {
        var f = c[e];
        if (!f.gtmProgressiveApplied || !f.gtmProgressiveApplied[b]) {
          if (a.D && !zi(f)) break;
          d.push(f);
        }
      }
      return d;
    },
    zi = function (a) {
      if (Ta) return !0;
      for (; a; ) {
        if (a.nextSibling) return !0;
        a = a.parentNode;
      }
      return !1;
    };
  var ja,
    Ai,
    Bi,
    ra = /(Firefox\D28\D)/g.test(Lf.userAgent),
    Di = function (a, b) {
      return function (c) {
        c = c || w.event;
        var d = va(c),
          e = !1;
        if (3 !== c.which || "LINK_CLICK" != a) {
          "LINK_CLICK" == a &&
            ((d = wa(d, ["a", "area"])),
            (e =
              !d ||
              !d.href ||
              Ci(d.href) ||
              2 === c.which ||
              (null == c.which && 4 == c.button) ||
              c.ctrlKey ||
              c.shiftKey ||
              c.altKey ||
              !0 === c.metaKey));
          var f = "FORM_SUBMIT" == a ? ja : Bi;
          if (c.defaultPrevented || !1 === c.returnValue || (c.X && c.X())) {
            if (d) {
              var g = { simulateDefault: !1 },
                h = ka(f, ["wnc", "nwnc"]);
              h && la(a, d, g, f.wt, h);
            }
          } else {
            if (d) {
              var g = {},
                k,
                m = ka(f, ["wnc", "nwnc", "nwc", "wc"]);
              (k = la(a, d, g, f.wt, m)) ||
                (na(g.eventReport, f) ? (b = !0) : (e = !0));
              e = e || k || ("LINK_CLICK" == a && ra);
              g.simulateDefault = !k && b && !e;
              g.simulateDefault &&
                ((e = ta(d, g) || e),
                !e && c.preventDefault && c.preventDefault());
              c.returnValue = k || !b || e;
              return c.returnValue;
            }
            return !0;
          }
        }
      };
    },
    la = function (a, b, c, d, e) {
      var f = d || 2e3,
        g = {
          "gtm.element": b,
          "gtm.elementClasses": b.className,
          "gtm.elementId": b["for"] || sa(b, "id") || "",
          "gtm.elementTarget": b.formTarget || b.target || "",
        };
      switch (a) {
        case "LINK_CLICK":
          g["gtm.triggers"] = e || "";
          g.event = "gtm.linkClick";
          g["gtm.elementUrl"] = b.href;
          g.eventTimeout = f;
          g.eventCallback = Ei(b, c);
          g.eventReporter = function (a) {
            c.eventReport = a;
          };
          break;
        case "FORM_SUBMIT":
          g["gtm.triggers"] = e || "";
          g.event = "gtm.formSubmit";
          g["gtm.elementUrl"] = Fi(b);
          g.eventTimeout = f;
          g.eventCallback = Gi(b, c);
          g.eventReporter = function (a) {
            c.eventReport = a;
          };
          break;
        case "CLICK":
          g.event = "gtm.click";
          g["gtm.elementUrl"] =
            (b.attributes && b.attributes.formaction ? b.formAction : "") ||
            b.action ||
            b.href ||
            b.src ||
            b.code ||
            b.codebase ||
            "";
          break;
        default:
          return !0;
      }
      return ca(g);
    },
    Fi = function (a) {
      var b = a.action;
      b && b.tagName && (b = a.cloneNode(!1).action);
      return b;
    },
    qa = function (a) {
      var b = a.target;
      if (!b)
        switch (String(a.tagName).toLowerCase()) {
          case "a":
          case "area":
          case "form":
            b = "_self";
        }
      return b;
    },
    ta = function (a, b) {
      var c = !1,
        d = /(iPad|iPhone|iPod)/g.test(Lf.userAgent),
        e = qa(a).toLowerCase();
      switch (e) {
        case "":
        case "_self":
        case "_parent":
        case "_top":
          var f;
          f = (e || "_self").substring(1);
          b.targetWindow = (w.frames && w.frames[f]) || w[f];
          break;
        case "_blank":
          d
            ? ((b.simulateDefault = !1), (c = !0))
            : ((b.targetWindowName = "gtm_autoEvent_" + H().getTime()),
              (b.targetWindow = w.open("", b.targetWindowName)));
          break;
        default:
          d && !w.frames[e]
            ? ((b.simulateDefault = !1), (c = !0))
            : (w.frames[e] || (b.targetWindowName = e),
              (b.targetWindow = w.frames[e] || w.open("", e)));
      }
      return c;
    },
    Ei = function (a, b, c) {
      return function () {
        b.simulateDefault &&
          (b.targetWindow
            ? (b.targetWindow.location.href = a.href)
            : ((c = c || H().getTime()),
              500 > H().getTime() - c && w.setTimeout(Ei(a, b, c), 25)));
      };
    },
    Gi = function (a, b, c) {
      return function () {
        if (b.simulateDefault)
          if (b.targetWindow) {
            var d;
            b.targetWindowName &&
              ((d = a.target), (a.target = b.targetWindowName));
            J.gtmSubmitFormNow = !0;
            pa(a).call(a);
            b.targetWindowName && (a.target = d);
          } else
            (c = c || H().getTime()),
              500 > H().getTime() - c && w.setTimeout(Gi(a, b, c), 25);
      };
    },
    ka = function (a, b) {
      for (var c = [], d = 0; d < b.length; d++) {
        var e = a[b[d]],
          f;
        for (f in e) e.hasOwnProperty(f) && e[f] && c.push(f);
      }
      return c.join(",");
    },
    Hi = function (a, b, c, d, e) {
      var f = e;
      if (!f || "0" == f) {
        if (a.l) return;
        a.l = !0;
        f = "0";
      }
      var g = a.wt;
      b && (!g || g > d) && (a.wt = d);
      a[b ? (c ? "wc" : "wnc") : c ? "nwc" : "nwnc"][f] = !0;
    },
    na = function (a, b) {
      if (b.wnc["0"] || b.wc["0"]) return !0;
      for (var c = 0; c < Ii.length; c++)
        if (a.passingRules[c]) {
          var d = Ji[c],
            e = (d && d[0] && d[0][0]) || (d[1] && d[1][0]);
          if (e && "0" != e && (b.wc[e] || b.wnc[e]))
            for (var f = Ii[c][1], g = 0; g < f.length; g++)
              if (a.resolvedTags[f[g]]) return !0;
        }
      return !1;
    },
    Aa = function (a, b, c, d, e) {
      var f,
        g,
        h = !1;
      switch (a) {
        case "CLICK":
          if (J.gtmHasClickListenerTag) return;
          J.gtmHasClickListenerTag = !0;
          f = "click";
          g = function (a) {
            var b = va(a);
            b && la("CLICK", b, {}, d);
          };
          h = !0;
          break;
        case "LINK_CLICK":
          b && !Ai && (Ai = Uf(J.location));
          Hi(Bi, b || !1, c || !1, d, e);
          if (J.gtmHasLinkClickListenerTag) return;
          J.gtmHasLinkClickListenerTag = !0;
          f = "click";
          g = Di(a, b || !1);
          break;
        case "FORM_SUBMIT":
          Hi(ja, b || !1, c || !1, d, e);
          if (J.gtmHasFormSubmitListenerTag) return;
          J.gtmHasFormSubmitListenerTag = !0;
          f = "submit";
          g = Di(a, b || !1);
          break;
        default:
          return;
      }
      L(J, f, g, h);
    },
    Ci = function (a) {
      if (!Ai) return !0;
      var b = a.indexOf("#");
      if (0 > b) return !1;
      if (0 == b) return !0;
      var c = ba(a);
      return Ai == Uf(c);
    },
    pa = function (a) {
      try {
        if (a.constructor && a.constructor.prototype)
          return a.constructor.prototype.submit;
      } catch (b) {}
      if (a.gtmReplacedFormSubmit) return a.gtmReplacedFormSubmit;
      J.gtmFormElementSubmitter ||
        (J.gtmFormElementSubmitter = J.createElement("form"));
      return J.gtmFormElementSubmitter.submit.call
        ? J.gtmFormElementSubmitter.submit
        : a.submit;
    };
  var _cl = function (a, b) {
    Aa("CLICK");
    x(b);
  };
  _cl.a = "cl";
  _cl.b = ["google"];
  var Mi = function (a, b, c) {
    var d = encodeURIComponent,
      e =
        (a[ef]
          ? "//ad.doubleclick.net/activity"
          : "//" + d(a[pb]) + ".fls.doubleclick.net/activityi") +
        ";src=" +
        d(a[pb]) +
        ";type=" +
        d(a[Zc]) +
        ";cat=" +
        d(a[ob]);
    a[hf] && (e += ";u=" + d(a[hf]));
    a[We] && (e += ";tran=" + d(a[We]));
    var f = a[lc] || {},
      g;
    for (g in f) f.hasOwnProperty(g) && (e += ";" + d(g) + "=" + d(f[g]));
    e += ";ord=" + d(a[Ud]);
    Od in a && (e += ";num=" + d(a[Od]));
    if (a[Jc]) {
      var h = a[zb] || [];
      if (0 < h.length) {
        r(
          "//www.gstatic.com/attribution/collection/attributiontools.js",
          function () {
            Mi.Ea(a, e, h, b, c);
          },
          c
        );
        return;
      }
    }
    Mi.Z(a, e, b, c);
  };
  Mi.Ea = function (a, b, c, d, e) {
    for (var f = {}, g = 0; g < c.length; g++) {
      var h = c[g];
      h.hasOwnProperty("key") &&
        h.hasOwnProperty("value") &&
        (f[h.key] = h.value);
    }
    var k = [];
    k.push(f);
    b += w.google_attr.build(k);
    Mi.Z(a, b, d, e);
  };
  Mi.Z = function (a, b, c, d) {
    var e = Ca({});
    !a[ef] &&
      e &&
      (";" != !b.charAt(b.length - 1) && (b += ";"),
      (b += "~oref=" + encodeURIComponent(e)));
    (a[ef] ? G : ga)(b + "?", c, d);
  };
  var _flc = Mi;
  _flc.a = "flc";
  _flc.b = [];
  var Ni = function (a, b, c) {
    var d = encodeURIComponent,
      e =
        (a[ef]
          ? "//ad.doubleclick.net/activity"
          : "//" + d(a[pb]) + ".fls.doubleclick.net/activityi") +
        ";src=" +
        d(a[pb]) +
        ";type=" +
        d(a[Zc]) +
        ";cat=" +
        d(a[ob]);
    a[hf] && (e += ";u=" + d(a[hf]));
    a[We] && (e += ";tran=" + d(a[We]));
    var f = a[lc] || {},
      g;
    for (g in f) f.hasOwnProperty(g) && (e += ";" + d(g) + "=" + d(f[g]));
    e += ";qty=" + d(a[ge]) + ";cost=" + d(a[le]) + ";ord=" + d(a[Rd]);
    if (a[Jc]) {
      var q = a[zb] || [];
      if (0 < q.length) {
        r(
          "//www.gstatic.com/attribution/collection/attributiontools.js",
          function () {
            Ni.Ea(a, e, q, b, c);
          },
          c
        );
        return;
      }
    }
    Ni.Z(a, e, b, c);
  };
  Ni.Ea = function (a, b, c, d, e) {
    for (var f = {}, g = 0; g < c.length; g++) {
      var h = c[g];
      h.hasOwnProperty("key") &&
        h.hasOwnProperty("value") &&
        (f[h.key] = h.value);
    }
    var k = [];
    k.push(f);
    b += w.google_attr.build(k);
    Ni.Z(a, b, d, e);
  };
  Ni.Z = function (a, b, c, d) {
    var e = Ca({});
    !a[ef] &&
      e &&
      (";" != !b.charAt(b.length - 1) && (b += ";"),
      (b += "~oref=" + encodeURIComponent(e)));
    (a[ef] ? G : ga)(b + "?", c, d);
  };
  var _fls = Ni;
  _fls.a = "fls";
  _fls.b = [];
  var Pi = function (a, b) {
      return function () {
        Oi(a);
        var c = ja,
          d = ka(c, ["wnc", "nwnc", "nwc", "wc"]);
        if (la("FORM_SUBMIT", a, b, c.wt, d) || !na(b.eventReport, c))
          (b.simulateDefault = !1),
            (J.gtmSubmitFormNow = !0),
            pa(a).call(a),
            (J.gtmSubmitFormNow = !1);
        else {
          b.simulateDefault = !0;
          var e = qa(a).toLowerCase();
          switch (e) {
            case "_blank":
              (b.targetWindowName = "gtm_autoEvent_" + H().getTime()),
                (b.targetWindow = w.open("", b.targetWindowName));
            case "":
              b.targetWindow = w.frames.self;
              break;
            case "_parent":
            case "_self":
            case "_top":
              b.targetWindow = w.frames[e.substring(1)];
              break;
            default:
              w.frames[e] || (b.targetWindowName = e),
                (b.targetWindow = w.frames[e] || w.open("", e));
          }
        }
      };
    },
    Qi = function (a) {
      return a.action && a.action.tagName
        ? a.attributes.action.value
        : a.action;
    },
    Ri = function (a, b) {
      a.action && a.action.tagName
        ? (a.attributes.action.value = b)
        : (a.action = b);
    },
    Si = function (a) {
      var b = function (b) {
        b = b || w.event;
        if (a) {
          var c = a(b);
          !1 === c && (b.returnValue = !1);
          return c;
        }
        return !0;
      };
      b.gtmOnsubmitWrapper = !0;
      return b;
    },
    Ti = function (a) {
      (J.gtmForceFormWrappers || ra) &&
        a &&
        a.onsubmit &&
        !a.onsubmit.gtmOnsubmitWrapper &&
        (a.onsubmit = Si(a.onsubmit));
    },
    Ui = function () {
      return function () {
        var a = "undefined" == typeof HTMLFormElement;
        if (J.gtmSubmitFormNow) {
          J.gtmSubmitFormNow = !1;
          var b = this.gtmCachedSubmitElement;
          if (b)
            try {
              for (
                var c = b.id, d = b.name, e = 0;
                e < this.elements.length;
                e++
              )
                "submit" == this.elements[e].type &&
                  (this.elements[e].id || this.elements[e].name) &&
                  (c &&
                    c == this.elements[e].id &&
                    ((this.elements[e].gtmOldId = this.elements[e].id),
                    (this.elements[e].id = "gtm_sub_" + this.elements[e].id)),
                  d &&
                    d == this.elements[e].name &&
                    ((this.elements[e].gtmOldName = this.elements[e].name),
                    (this.elements[e].name =
                      "gtm_sub_" + this.elements[e].name)));
              var f = J.createElement("input");
              f.type = "hidden";
              f.value = sa(b, "value");
              c && (f.id = c);
              d && (f.name = d);
              this.gtmTempHiddenSubmit = f;
              this.appendChild(f);
            } catch (l) {}
          a
            ? this.gtmOldFormSubmit.call
              ? this.gtmOldFormSubmit.call(this)
              : this.gtmOldFormSubmit()
            : HTMLFormElement.prototype.gtmOldFormSubmit.call(this);
          if (this.gtmCachedSubmitElement) {
            try {
              this.gtmTempHiddenSubmit &&
                (this.removeChild(this.gtmTempHiddenSubmit),
                (this.gtmTempHiddenSubmit = void 0));
              for (var g = 0; g < this.elements.length; g++)
                this.elements[g].gtmOldId &&
                  ((this.elements[g].id = this.elements[g].gtmOldId),
                  (this.elements[g].gtmOldId = void 0)),
                  this.elements[g].gtmOldName &&
                    ((this.elements[g].name = this.elements[g].gtmOldName),
                    (this.elements[g].gtmOldName = void 0));
            } catch (l) {}
            this.gtmCachedSubmitElement = void 0;
          }
        } else {
          Oi(this);
          this.gtmCachedSubmitElement = void 0;
          var h = {},
            k = ja,
            m =
              la("FORM_SUBMIT", this, h, k.wt, "") || !na(h.eventReport, k)
                ? !0
                : ta(this, h);
          h.simulateDefault = !m;
          m &&
            ((J.gtmSubmitFormNow = !1),
            a
              ? this.gtmOldFormSubmit.call
                ? this.gtmOldFormSubmit.call(this)
                : this.gtmOldFormSubmit()
              : HTMLFormElement.prototype.gtmOldFormSubmit.call(this));
        }
      };
    },
    Vi = function () {
      J.gtmHasSubmitInputListener ||
        ((J.gtmHasSubmitInputListener = !0),
        L(
          J,
          "click",
          function (a) {
            var b,
              c = va(a);
            if (
              (c = wa(c, ["button", "input"]) || c) &&
              ("submit" == c.type || "image" == c.type)
            ) {
              var d = c.name && sa(c, "value");
              if ((b = wa(c, ["form"])))
                d && (b.gtmCachedSubmitElement = c), Ti(b);
              else if (c.form)
                if (
                  c.form.tagName &&
                  "form" == String(c.form.tagName).toLowerCase()
                )
                  d && (c.form.gtmCachedSubmitElement = c), Ti(c.form);
                else
                  for (
                    var e = xa(c.form) ? c.form : [c.form], f = 0;
                    f < e.length;
                    f++
                  )
                    if ((b = ya(e[f])))
                      d && (b.gtmCachedSubmitElement = c), Ti(b);
            }
            return !0;
          },
          !1
        ));
    },
    Oi = function (a) {
      var b = a || J.gtmFormActionSwapped;
      if (b) {
        J.gtmFormActionSwapped = void 0;
        if (b.gtmJSFormActionSet) {
          var c = "",
            d = Qi(b);
          d &&
            0 == d.indexOf("javascript:document.gtmFormActionFunction();//") &&
            (c = d.substring(46));
          Ri(b, c || b.gtmOldAction);
          b.gtmJSFormActionSet = void 0;
        }
        b.gtmOldTarget && (b.target = b.gtmOldTarget);
        b.gtmOldAction = void 0;
        b.gtmOldTarget = void 0;
      }
    },
    _fsl = function (a, b) {
      var c = a[mf],
        d = a[Tb],
        e = K(a[nf]);
      0 >= e && (e = 2e3);
      var f = Oa(a, Ze, ""),
        g = Ui(),
        h = "undefined" == typeof HTMLFormElement;
      h ||
        HTMLFormElement.prototype.gtmOldFormSubmit ||
        ((HTMLFormElement.prototype.gtmOldFormSubmit =
          HTMLFormElement.prototype.submit),
        (HTMLFormElement.prototype.submit = g));
      (!c && J.addEventListener) || Vi();
      J.addEventListener || (J.gtmHasFormSubmitListenerTag = !0);
      Aa("FORM_SUBMIT", c, d, e, String(f));
      if (!J.addEventListener) {
        if (!J.gtmActionTargetCleanup) {
          J.gtmActionTargetCleanup = !0;
          var k = function () {
            Oi();
          };
          L(J, "click", k, !1);
          L(J, "keydown", k, !1);
        }
        var m = function (a) {
          a = a || window.event;
          var b = va(a),
            c = {},
            d = ja;
          if (a.defaultPrevented || !1 === a.returnValue || (a.X && a.X())) {
            var e = ka(d, ["wnc", "nwnc"]);
            e && ((c.simulateDefault = !1), la("FORM_SUBMIT", b, c, d.wt, e));
          } else
            b !== J.gtmFormActionSwapped &&
              ((J.gtmFormActionSwapped = b),
              (J.gtmFormActionFunction = Pi(b, c)),
              (b.gtmOldAction = Qi(b)),
              (b.gtmOldTarget = b.target),
              Ri(
                b,
                "javascript:document.gtmFormActionFunction();//" +
                  b.gtmOldAction
              ),
              (b.target = ""),
              (b.gtmJSFormActionSet = !0));
        };
        J.gtmForceFormWrappers = !0;
        for (var l = J.getElementsByTagName("form"), p = 0; p < l.length; p++)
          if (
            !l[p].gtmFormSubmitListenerAttached &&
            ((l[p].gtmFormSubmitListenerAttached = !0),
            L(l[p], "submit", m, !1),
            h && !l[p].gtmOldFormSubmit)
          ) {
            l[p].gtmOldFormSubmit = pa(l[p]);
            try {
              l[p].submit = g;
            } catch (q) {}
            l[p].gtmReplacedFormSubmit = g;
          }
      }
      x(b);
    };
  _fsl.a = "fsl";
  _fsl.b = [];
  var Wi = !1,
    Xi = !1,
    _ga = function (a, b, c) {
      function d(a) {
        var b = [].slice.call(arguments, 0);
        b[0] = y + b[0];
        q.push(b);
      }
      function e(b, c) {
        void 0 !== a[c] && d(b, a[c]);
      }
      function f(b, c) {
        void 0 !== a[c] && d(b, Number(a[c]));
      }
      function g(a, b) {
        if (b)
          for (var c = 0; c < b.length; c++) {
            var e = [a];
            xa(b[c]) ? e.push.apply(e, b[c]) : e.push(b[c]);
            "_setCustomVar" != e[0]
              ? d.apply(this, e)
              : void 0 !== e[3] &&
                d.call(this, e[0], K(e[1]), e[2], e[3], k(K, e[4]));
          }
      }
      function h(b, c) {
        void 0 !== a[c] && d("_set", b, a[c]);
      }
      function k(a, b) {
        return void 0 === b ? b : a(b);
      }
      function m(b, c) {
        void 0 !== a[c] && (t += "&" + b + "=" + a[c]);
      }
      function l(a, b) {
        t += "&" + a + "=" + b;
      }
      function p(a, b) {
        return a.charAt(0) == b ? a.substring(1) : a;
      }
      var q = Q("_gaq", []),
        v = !1,
        y = "";
      void 0 == a[Ve] ? (y = Ma() + ".") : "" !== a[Ve] && (y = a[Ve] + ".");
      e("_setAccount", mb);
      d("_set", "gtmid", "GTM-TPPTSM");
      e("_setAllowLinker", ub);
      e("_setAllowAnchor", rb);
      e("_setAllowHash", sb);
      g("_addIgnoredRef", a[gd]);
      g("_addIgnoredOrganic", a[fd]);
      var t = "";
      if ("" !== t) {
        var z = new tf(),
          E = p(w.location.search, "?"),
          D = p(w.location.hash, "#");
        E && Bf(z, E);
        D && a[rb] && Bf(z, D);
        z.contains("gclid") && l("gclid", Cf(z.get("gclid")));
        z.contains("gclsrc") && l("gclsrc", Cf(z.get("gclsrc")));
        z.contains("dclid") && l("dclid", Cf(z.get("dclid")));
        d("_set", "campaignParams", t);
      }
      h("anonymizeIp", vb);
      a[xd] &&
        d(
          "_require",
          "inpage_linkid",
          "//www.google-analytics.com/plugins/ga/inpage_linkid.js"
        );
      g("_setPageGroup", a[Yb]);
      e("_setCampaignTrack", Qb);
      e("_setClientInfo", Vb);
      e("_setDetectFlash", xc);
      e("_setDetectTitle", yc);
      void 0 !== a[Wc] && a[Wc] && (q.push(["_gat._forceSSL"]), (v = !!a[Wc]));
      d("_set", "hitCallback", function () {
        if (O(a[bd])) a[bd]();
        b();
      });
      if (a[Re]) {
        d(
          "_trackEvent",
          String(a[Oc]),
          String(a[Nc]),
          k(String, a[Pc]),
          k(K, a[Qc]),
          !!a[Nd]
        );
      } else if (a[Ue]) {
      } else if (a[td]) {
      } else if (a[wd]) {
      } else if (a[Se]) {
      } else if (a[Te]) {
      } else if (a[tc]) {
      } else if (a[rc]) {
      } else d("_trackPageview");
      g("_cookiePathCopy", a[cc]);
      var T = function () {
        w._gat || c();
      };
      if (a[Bc])
        Xi ||
          ((Xi = !0),
          r(I("https", "http", "://stats.g.doubleclick.net/dc.js", v), T, c));
      else if (!Wi) {
        var R = a[pc]
          ? ".google-analytics.com/u/ga_debug.js"
          : ".google-analytics.com/ga.js";
        Wi = !0;
        r(I("https://ssl", "http://www", R, v), T, c);
      }
    };
  _ga.a = "ga";
  _ga.b = ["google"];
  var Pa = function (a, b) {
    var c = b || cb,
      d = c.onerror,
      e = !1;
    vh && !Dh("535.3") && (e = !e);
    c.onerror = function (b, c, h, k, m) {
      d && d(b, c, h, k, m);
      a({ message: b, fileName: c, Sa: h, Xb: k, error: m });
      return e;
    };
  };
  var cj = function (a) {
      var b = function (b) {
        b = b || w.event;
        var c = a.call(this, b);
        b.returnValue = !1 !== c && (b.returnValue || void 0 === b.returnValue);
        return c;
      };
      b.gtmOnclickWrapper = !0;
      return b;
    },
    _lcl = function (a, b) {
      var c = Oa(a, mf, !0),
        d = Oa(a, Tb, !0),
        e = K(a[nf]);
      0 >= e && (e = 2e3);
      var f = Oa(a, Ze, "");
      Aa("LINK_CLICK", !!c, !!d, e, String(f));
      if (
        !J.gtmLinkClickListener &&
        ((J.gtmLinkClickListener = !0), !J.addEventListener)
      ) {
        var g = function (a) {
          a = a || w.event;
          for (var b = va(a); b; )
            b.onclick &&
              !b.onclick.gtmOnclickWrapper &&
              (b.onclick = cj(b.onclick)),
              (b = b.parentElement);
        };
        L(J, "mousedown", g, !1);
        L(
          J,
          "keydown",
          function (a) {
            a = a || w.event;
            13 == a.keyCode && g(a);
          },
          !1
        );
      }
      x(b);
    };
  _lcl.a = "lcl";
  _lcl.b = [];
  var Y = [],
    dj = {
      "\x00": "&#0;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "<": "&lt;",
      ">": "&gt;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\x0B": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      "-": "&#45;",
      "/": "&#47;",
      "=": "&#61;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;",
    },
    ej = function (a) {
      return dj[a];
    },
    fj = /[\x00\x22\x26\x27\x3c\x3e]/g;
  var kj = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
    uj = {
      "\x00": "\\x00",
      "\b": "\\x08",
      "\t": "\\t",
      "\n": "\\n",
      "\x0B": "\\x0b",
      "\f": "\\f",
      "\r": "\\r",
      '"': "\\x22",
      "&": "\\x26",
      "'": "\\x27",
      "/": "\\/",
      "<": "\\x3c",
      "=": "\\x3d",
      ">": "\\x3e",
      "\\": "\\\\",
      "\u0085": "\\x85",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029",
      $: "\\x24",
      "(": "\\x28",
      ")": "\\x29",
      "*": "\\x2a",
      "+": "\\x2b",
      ",": "\\x2c",
      "-": "\\x2d",
      ".": "\\x2e",
      ":": "\\x3a",
      "?": "\\x3f",
      "[": "\\x5b",
      "]": "\\x5d",
      "^": "\\x5e",
      "{": "\\x7b",
      "|": "\\x7c",
      "}": "\\x7d",
    },
    vj = function (a) {
      return uj[a];
    };
  Y[7] = function (a) {
    return String(a).replace(kj, vj);
  };
  Y[8] = function (a) {
    if (null == a) return " null ";
    switch (typeof a) {
      case "boolean":
      case "number":
        return " " + a + " ";
      default:
        return "'" + String(String(a)).replace(kj, vj) + "'";
    }
  };
  var Dj = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    Ej = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\x0B": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD",
    },
    Fj = function (a) {
      return Ej[a];
    };
  Y[16] = function (a) {
    return a;
  };
  var Hj = 1221,
    Ij = [],
    Jj = [],
    Kj = [],
    Lj = new tf(),
    Mj = [],
    Z = [],
    Ii = [],
    Ji = [],
    Nj = function () {
      this.L = [];
    };
  Nj.prototype.set = function (a, b) {
    this.L.push([a, b]);
    return this;
  };
  Nj.prototype.resolve = function (a, b) {
    for (var c = {}, d = 0; d < this.L.length; d++) {
      var e = Oj(this.L[d][0], a, b),
        f = Oj(this.L[d][1], a, b);
      c[e] = f;
    }
    return c;
  };
  var Pj = function (a) {
    this.index = a;
  };
  Pj.prototype.resolve = function (a, b) {
    var c = Kj[this.index];
    if (c && !b(c)) {
      var d = c[id];
      if (a) {
        if (a.get(d)) return;
        a.set(d, !0);
      }
      c = Oj(c, a, b);
      a && a.set(d, !1);
      return Af(c);
    }
  };
  var _M = function (a) {
      return new Pj(a);
    },
    Qj = function (a) {
      this.resolve = function (b, c) {
        for (var d = [], e = !1, f = 0; f < a.length; f++) {
          var g = Oj(Ij[a[f]], b, c);
          g === La && (e = !0);
          d.push(g);
        }
        return e ? new ch(d) : d.join("");
      };
    },
    _T = function (a) {
      return new Qj(arguments);
    },
    Rj = function (a) {
      function b(b) {
        for (var c = 1; c < a.length; c++) if (a[c] == b) return !0;
        return !1;
      }
      this.resolve = function (c, d) {
        var e = Oj(a[0], c, d);
        if (a[0] instanceof Pj && b(8) && b(16)) {
          if (e === La) return e;
          var f = Ma();
          Lj.set(f, e);
          return 'google_tag_manager["GTM-TPPTSM"].macro(\'' + f + "')";
        }
        for (var e = String(e), g = 1; g < a.length; g++) e = Y[a[g]](e);
        return e;
      };
    },
    _E = function (a, b) {
      return new Rj(arguments);
    },
    Sj = function (a, b) {
      this.w = a;
      this.ra = b;
    },
    _R = function (a, b) {
      return new Sj(a, b);
    },
    Oj = function (a, b, c) {
      var d = a;
      if (
        a instanceof Pj ||
        a instanceof Nj ||
        a instanceof Qj ||
        a instanceof Rj
      )
        return a.resolve(b, c);
      if (!(a instanceof Sj))
        if (xa(a))
          for (var d = [], e = 0; e < a.length; e++) d[e] = Oj(a[e], b, c);
        else if (a && "object" == typeof a) {
          var d = {},
            f;
          for (f in a) a.hasOwnProperty(f) && (d[f] = Oj(a[f], b, c));
        }
      return d;
    },
    Tj = function (a, b) {
      var c = b[a],
        d = c;
      if (
        c instanceof Pj ||
        c instanceof Rj ||
        c instanceof Qj ||
        c instanceof Sj
      )
        d = c;
      else if (xa(c))
        for (var d = [], e = 0; e < c.length; e++) d[e] = Tj(c[e], b);
      else if ("object" == typeof c) {
        var d = new Nj(),
          f;
        for (f in c) c.hasOwnProperty(f) && d.set(b[f], Tj(c[f], b));
      }
      return d;
    },
    Vj = function (a, b) {
      for (var c = b ? b.split(",") : [], d = 0; d < c.length; d++) {
        var e = (c[d] = c[d].split(":"));
        0 == a && (e[1] = Ij[e[1]]);
        if (1 == a)
          for (var f = Uj(e[0]), e = (c[d] = {}), g = 0; g < f.length; g++) {
            var h = Jj[f[g]];
            e[h[0]] = h[1];
          }
        if (2 == a) for (g = 0; 4 > g; g++) e[g] = Uj(e[g]);
        3 == a && (c[d] = Ij[e[0]]);
        if (4 == a)
          for (g = 0; 2 > g; g++)
            if (e[g]) {
              e[g] = e[g].split(".");
              for (var k = 0; k < e[g].length; k++) e[g][k] = Ij[e[g][k]];
            } else e[g] = [];
        5 == a && (c[d] = e[0]);
      }
      return c;
    },
    Uj = function (a) {
      var b = [];
      if (!a) return b;
      for (var c = 0, d = 0; d < a.length && c < Hj; c += 6, d++) {
        var e = (a && a.charCodeAt(d)) || 65;
        if (65 != e) {
          var f;
          f =
            65 < e && 90 >= e
              ? e - 65
              : 97 <= e && 122 >= e
              ? e - 97 + 26
              : 95 == e
              ? 63
              : 48 <= e
              ? e - 48 + 52
              : 62;
          1 & f && b.push(c);
          2 & f && b.push(c + 1);
          4 & f && b.push(c + 2);
          8 & f && b.push(c + 3);
          16 & f && b.push(c + 4);
          32 & f && b.push(c + 5);
        }
      }
      return b;
    },
    Wj = function (a, b, c) {
      a.push.apply(a, Vj(b, c));
    };
  var hg = function () {},
    ek = function (a) {},
    kg = function () {},
    fk = function (a) {},
    gk = function (a, b) {},
    hk = function (a, b) {},
    ig = function (a) {};
  var ik, jk;
  var tk = function (a) {
      return function () {};
    },
    uk = function (a) {
      return function () {};
    };
  var vk = function (a) {
      var b = this;
      this.g = a;
      this.complete = this.Wa = !1;
      this.qa = [];
      this.la = [];
      this.S = function () {
        if (b.s && b.s.event) {
          var c = b.s.event,
            d = b.g;
        }
        b.complete || Ef(b.qa);
        If(b, 1);
        if (kb[a]) for (var e = 0; e < kb[a].length; e++) kb[a].shift().S();
      };
      this.R = function () {
        if (b.s && b.s.event) {
          var c = b.s.event,
            d = b.g;
        }
        b.complete || Ef(b.la);
        If(b, 2);
        if (kb[a]) for (var e = 0; e < kb[a].length; e++) kb[a].shift().R();
      };
      this.B = of;
    },
    wk = function (a, b) {
      a.qa.push(b);
    },
    xk = function (a, b) {
      a.la.push(b);
    },
    yk = function (a) {
      this.M = [];
      this.Ga = [];
      this.Pa = {};
      this.ya = [];
      this.Y = 0;
      this.Va = {};
      this.Xa = {};
      this.Ha = {};
      this.event = a;
    };
  yk.prototype.addListener = function (a) {
    this.ya.push(a);
  };
  var zk = function (a, b, c, d, e, f) {
      if (!c.complete) {
        a.M[b] = c;
        void 0 == d && (d = []);
        void 0 == e && (e = []);
        void 0 == f && (f = []);
        d = xa(d) ? d.slice() : ["or", d];
        e = xa(e) ? e.slice() : [e];
        f = xa(f) ? f.slice() : [f];
        a.Pa[b] = d;
        a.Va[b] = 0 < e.length;
        a.Xa[b] = 0 < f.length;
        a.Y++;
        var g = function () {
          0 < a.Y && a.Y--;
          0 < a.Y || Ef(a.ya);
        };
        wk(c, g);
        xk(c, g);
      }
    },
    Ak = function (a, b, c) {
      a.M[b] &&
        (wk(a.M[b], function () {
          c(b, !0);
        }),
        xk(a.M[b], function () {
          c(b, !1);
        }));
    },
    Bk = function (a, b) {
      var c = !1;
      return function (d, e) {
        var f;
        a: {
          for (var g = 0; g < a.length; g++)
            if ((a[g] instanceof Sj && a[g].w === d) || a[g] === d) {
              f = g;
              break a;
            }
          f = -1;
        }
        c ||
          0 > f ||
          ("or" == a[0]
            ? e
              ? ((c = !0), b())
              : (a.splice(f, 1), 1 == a.length && (c = !0))
            : e
            ? (a.splice(f, 1), 1 == a.length && ((c = !0), b()))
            : (c = !0));
      };
    },
    Fk = function (a, b) {
      var c = [],
        d = !1,
        e = function (b) {
          var f,
            g,
            h = Z[b];
          if (a.event.c(h)) {
          } else g = Ck(h, b, a);
          if ((f = g)) {
            var k = Dk(b, !0);
            0 < k.length && e(k[0].w);
            c.push(f);
            var l = Dk(b, !1);
            0 < l.length && e(l[0].w);
          } else d = !0;
        };
      e(b);
      if (!d) {
        for (var f = 0; f < c.length; f++) {
          var g = c[f],
            h = Dk(g.g, !0);
          if (0 < h.length) {
            var k = c[f - 1],
              m = Ek(g);
            wk(k, m);
            0 == h[0].ra && xk(k, m);
          }
          var l = Dk(g.g, !1);
          0 < l.length &&
            ((m = Ek(c[f + 1])), wk(g, m), 0 == l[0].ra && xk(g, m));
        }
        a.Ga.push(c);
      }
    },
    Dk = function (a, b) {
      var c = b ? re : Ie,
        d = Z[a],
        e = void 0 === d[c] ? [] : d[c];
      return xa(e) ? e : [e];
    },
    Ek = function (a) {
      return function () {
        a.B();
      };
    },
    Hk = function (a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c],
          e = [],
          f = function (a) {
            var b = Dk(a, !0);
            0 < b.length && f(b[0].w);
            e.push(a);
            var c = Dk(a, !1);
            0 < c.length && f(c[0].w);
          };
        f(d.g);
        b[d.g] = e;
      }
      Gk(a, b);
      return b;
    },
    Gk = function (a, b) {
      for (var c = 0; c < a.length; c++) {
        var d = a[c].g,
          e;
        for (e in b)
          if (b.hasOwnProperty(e) && e != d && -1 < rf(b[e], d)) {
            delete b[d];
            break;
          }
      }
    };
  var Jk = function (a, b) {
      return function () {
        a[$c] = b.S;
        a[ad] = b.R;
        var c = b.g,
          d = b.s && b.s.Ha[c],
          e = jb[c] && jb[c].state,
          f = d ? void 0 !== d : b.Wa || b.Yb,
          g = jb[c] && jb[c].firingOption,
          h = g && 2 == g,
          k = g && 1 == g;
        if ((!f && void 0 === e) || (!f && !h) || (!h && !k)) {
          If(b, 0);
          var m = b.s ? b.s.event : void 0;
          a = Ik(a, m ? m.c : rg());
          if (m) {
            var l = a;
            gk(m, c);
          }
          Af(a, b.S, b.R);
        } else
          (h && 0 == e) || (k && 0 == d)
            ? kb[c].push(b)
            : (h && 1 == e) || (k && 1 == d)
            ? b.S()
            : b.R();
      };
    },
    Ik = function (a, b) {
      a = Oj(a, new tf(), b);
      return a;
    },
    Ck = function (a, b, c) {
      var d = new vk(b);
      d.s = c;
      wk(d, tk(a));
      xk(d, uk(a));
      d.B = Jk(a, d);
      return d;
    };
  var Mk = !1,
    Nk = !1;
  var _sp = function (a, b, c) {
    r(
      "//www.googleadservices.com/pagead/conversion_async.js",
      function () {
        var d = w.google_trackConversion;
        O(d)
          ? d({
              google_conversion_id: a[U],
              google_conversion_label: a[qd],
              google_custom_params: a[lc] || {},
              google_remarketing_only: !0,
              onload_callback: b,
            }) || c()
          : c();
      },
      c
    );
  };
  _sp.a = "sp";
  _sp.b = ["google"];
  var Ok = function (a) {
      return function () {
        if (a.J && a.K >= a.J) a.I && w.clearInterval(a.I);
        else {
          a.K++;
          var b = H().getTime();
          ca({
            event: a.wa,
            "gtm.timerId": a.I,
            "gtm.timerEventNumber": a.K,
            "gtm.timerInterval": a.interval,
            "gtm.timerLimit": a.J,
            "gtm.timerStartTime": a.ca,
            "gtm.timerCurrentTime": b,
            "gtm.timerElapsedTime": b - a.ca,
            "gtm.triggers": a.Ka,
          });
        }
      };
    },
    _tl = function (a, b) {
      x(b);
      if (!isNaN(a[kd])) {
        var c = Oa(a, Ze, "0"),
          d = {
            wa: a[Id],
            K: 0,
            interval: Number(a[kd]),
            J: isNaN(a[sd]) ? 0 : Number(a[sd]),
            Ka: String(c),
            ca: H().getTime(),
          };
        d.I = w.setInterval(Ok(d), 0 > Number(a[kd]) ? 0 : Number(a[kd]));
      }
    };
  _tl.a = "tl";
  _tl.b = ["google"];
  var Pk = !1,
    _ua = function (a, b, c) {
      function d(a) {
        var b = [].slice.call(arguments, 0);
        b[0] = p + b[0];
        w[m()].apply(window, b);
      }
      function e(b, c) {
        void 0 !== a[c] && d("set", b, a[c]);
      }
      function f(a, b) {
        return void 0 === b ? b : a(b);
      }
      function g(a, b) {
        if (b) for (var c in b) b.hasOwnProperty(c) && d("set", a + c, b[c]);
      }
      function h() {
        var b = function (a, b, c) {
            if (!Na(b)) return !1;
            for (var e = Oa(Object(b), c, []), f = 0; e && f < e.length; f++)
              d(a, e[f]);
            return !!e && 0 < e.length;
          },
          c;
        a[Dc] ? (c = P("ecommerce")) : a[Cc] && (c = a[Cc].ecommerce);
        if (!Na(c)) return;
        c = Object(c);
        var e = Oa(a[Vc], "currencyCode", c.currencyCode);
        void 0 !== e && d("set", "&cu", e);
        b("ec:addImpression", c, "impressions");
        if (
          b(
            "ec:addPromo",
            c[c.promoClick ? "promoClick" : "promoView"],
            "promotions"
          ) &&
          c.promoClick
        ) {
          d("ec:setAction", "promo_click", c.promoClick.actionField);
          return;
        }
        for (
          var f = "detail checkout checkout_option click add remove purchase refund".split(
              " "
            ),
            g = 0;
          g < f.length;
          g++
        ) {
          var h = c[f[g]];
          if (h) {
            b("ec:addProduct", h, "products");
            d("ec:setAction", f[g], h.actionField);
            break;
          }
        }
      }
      function k(a, b, c) {
        var d = 0;
        if (void 0 !== a)
          for (var e in a)
            if (
              a.hasOwnProperty(e) &&
              ((c && y[e]) || (!c && void 0 === y[e]))
            ) {
              var f = t[e] ? Ha(a[e]) : a[e];
              "anonymizeIp" != e || f || (f = void 0);
              b[e] = f;
              d++;
            }
        return d;
      }
      Q("GoogleAnalyticsObject", a[Id] || "ga");
      var m = function () {
          return w.GoogleAnalyticsObject;
        },
        l = Q(m(), function () {
          var a = w[m()];
          a.q = a.q || [];
          a.q.push(arguments);
        });
      l.l = Number(H());
      var p = "",
        q = "";
      "string" != typeof a[Ve]
        ? ((q = Ma()), (p = q + "."))
        : "" !== a[Ve] && ((q = a[Ve]), (p = q + "."));
      var v = !1;
      var y = {
          name: !0,
          clientId: !0,
          sampleRate: !0,
          siteSpeedSampleRate: !0,
          alwaysSendReferrer: !0,
          allowAnchor: !0,
          allowLinker: !0,
          cookieName: !0,
          cookieDomain: !0,
          cookieExpires: !0,
          cookiePath: !0,
          legacyCookieDomain: !0,
          legacyHistoryImport: !0,
          storage: !0,
        },
        t = {
          allowAnchor: !0,
          allowLinker: !0,
          alwaysSendReferrer: !0,
          anonymizeIp: !0,
          exFatal: !0,
          forceSSL: !0,
          javaEnabled: !0,
          legacyHistoryImport: !0,
          nonInteraction: !0,
          useBeacon: !0,
        };
      var z = { name: q };
      k(a[Vc], z, !0);
      l("create", a[mb], z);
      d("set", "&gtm", "GTM-TPPTSM");
      e("nonInteraction", Nd);
      g("contentGroup", a[Yb]);
      g("dimension", a[zc]);
      g("metric", a[Fd]);
      var E = {};
      k(a[Vc], E, !1) && d("set", E);
      var D;
      a[xd] && d("require", "linkid", "linkid.js");
      d("set", "hitCallback", function () {
        if (O(a[bd])) a[bd]();
        else {
          var c = a[Vc],
            d = c && c.hitCallback;
          O(d) && d();
        }
        b();
      });
      if (a[Re]) {
        a[Kc] && (d("require", "ec", "ec.js"), h());
        var C = {
          hitType: "event",
          eventCategory: String(a[Oc]),
          eventAction: String(a[Nc]),
          eventLabel: f(String, a[Pc]),
          eventValue: f(K, a[Qc]),
        };
        k(D, C, !1);
        d("send", C);
      } else if (a[Se]) {
      } else if (a[Ue]) {
      } else if (a[Te]) {
        (C = {
          hitType: "timing",
          timingCategory: String(a[Ke]),
          timingVar: String(a[Oe]),
          timingValue: K(a[Ne]),
          timingLabel: f(String, a[Le]),
        }),
          k(D, C, !1),
          d("send", C);
      } else if (a[tc]) {
      } else if (a[rc]) {
      } else if (a[Qe]) {
      } else {
        a[Kc] && (d("require", "ec", "ec.js"), h());
        if (a[Bc] && !a[Mc]) {
          var R = "_dc_gtm_" + String(a[mb]).replace(/[^A-Za-z0-9-]/g, "");
          d("require", "displayfeatures", void 0, { cookieName: R });
        }
        D ? d("send", "pageview", D) : d("send", "pageview");
      }
      if (!Pk) {
        var ha = a[pc] ? "u/analytics_debug.js" : "analytics.js";
        a[jd] && !a[pc] && (ha = "internal/" + ha);
        Pk = !0;
        r(
          I("https:", "http:", "//www.google-analytics.com/" + ha, v),
          function () {
            w[m()].loaded || c();
          },
          c
        );
      }
    };
  _ua.a = "ua";
  _ua.b = ["google"];
  var Qk = function () {
      var a = [];
      return function (b, c) {
        if (void 0 === a[b]) {
          var d = Mj[b] && Oj(Mj[b], new tf(), c),
            e = d;
          if (d)
            if (d[wb] && xa(d[S]))
              for (var f = d[S], e = !1, g = 0; !e && g < f.length; g++)
                (d[S] = f[g]), (e = Af(d));
            else e = Af(d);
          a[b] = [e, d];
        }
        return a[b];
      };
    },
    dk = function (a, b) {
      for (var c = b[0], d = 0; d < c.length; d++)
        if (!a.P(c[d], a.c)[0]) return !1;
      for (var e = b[2], d = 0; d < e.length; d++)
        if (a.P(e[d], a.c)[0]) return !1;
      return !0;
    },
    Rk = !1,
    cg = function (a, b, c, d) {
      switch (b) {
        case "gtm.js":
          if (Rk) return !1;
          Rk = !0;
          break;
        case "gtm.sync":
          if (P("gtm.snippet") != hb) return !1;
      }
      P("tagTypeBlacklist");
      for (
        var e = {
            id: a,
            name: b,
            ha: c || of,
            fa: Uj(),
            pa: Uj(),
            P: Qk(),
            c: rg(),
          },
          f = [],
          g = 0;
        g < Ii.length;
        g++
      )
        if (dk(e, Ii[g])) {
          f[g] = !0;
          for (var h = e, k = Ii[g], m = k[1], l = 0; l < m.length; l++)
            h.fa[m[l]] = !0;
          for (var p = k[3], l = 0; l < p.length; l++) h.pa[p[l]] = !0;
        } else f[g] = !1;
      gk(e);
      var v = [];
      for (var y = 0; y < Hj; y++)
        if (e.fa[y] && !e.pa[y])
          if (e.c(Z[y])) {
          } else {
            v[y] = Z[y];
          }
      e.T = v;
      for (var t = new yk(e), z = 0; z < Hj; z++)
        if (e.fa[z] && !e.pa[z])
          if (e.c(Z[z])) {
          } else {
            var E = e.T[z],
              D = Ck(E, z, t);
            zk(t, z, D, E[wc], E[re], E[Ie]);
            if (E[lb]) break;
          }
      t.addListener(e.ha);
      for (var C = [], A = 0; A < t.M.length; A++) {
        var M = t.M[A];
        if (M) {
          var B = t.Pa[A],
            F = t.Va[A],
            N = t.Xa[A];
          if (0 != B.length || F || N) {
            if (0 < B.length)
              for (var T = Bk(B, M.B), R = 0; R < B.length; R++)
                B[R] instanceof Sj && B[R].w != A && Ak(t, B[R].w, T);
            (F || N) && Fk(t, A);
          } else C.push(A);
        }
      }
      for (A = 0; A < C.length; A++) t.M[C[A]].B();
      for (A = 0; A < t.Ga.length; A++) {
        for (
          var za = t.Ga[A], ha = void 0, V = za, ma = [], tb = 0;
          tb < V.length;
          tb++
        ) {
          var bb = V[tb],
            Sb = bb.g,
            Hf = jb[Sb],
            ud = Hf.firingOption;
          0 != ud &&
            ((1 == ud && void 0 !== bb.s.Ha[Sb]) ||
              (2 == ud && void 0 !== Hf.state)) &&
            ma.push(bb);
        }
        var vd = Hk(ma);
        for (ha in vd)
          if (vd.hasOwnProperty(ha)) {
            for (
              var uf = void 0,
                jj = void 0,
                od = vd[ha],
                el = od[0],
                lj = od[od.length - 1],
                mj,
                Ka = 0;
              Ka < V.length;
              Ka++
            ) {
              var pd = V[Ka];
              !uf && pd.g == el && 0 < Ka && (uf = V[Ka - 1]);
              pd.g == lj && Ka < V.length - 1 && (jj = V[Ka + 1]);
              if (-1 < rf(od, pd.g))
                if (((mj = V.splice(Ka, 1)[0]), pd.g == lj)) break;
                else Ka--;
            }
            if (mj) {
              var nj = Number(ha),
                oa = uf,
                vf = jj;
              if (oa) {
                var fl = oa.qa[0],
                  gl = oa.la[0],
                  oj = oa;
                oj.qa = [];
                oj.la = [];
                wk(oa, fl);
                xk(oa, gl);
              }
              if (oa && vf) {
                var wf = Ek(vf);
                wk(oa, wf);
                var xf = Dk(oa.g, !1);
                0 < xf.length && xf[0].w != nj && 0 == xf[0].ra && xk(oa, wf);
                var yf = Dk(vf.g, !0);
                0 < yf.length && yf[0].w != nj && 0 == yf[0].ra && xk(oa, wf);
              }
            }
          }
        0 < za.length && za[0].B();
      }
      0 < t.Y || Ef(t.ya);
      d && O(d) && d({ passingRules: f, resolvedTags: e.T });
      if ("gtm.js" == b || "gtm.sync" == b)
        a: {
        }
      for (var rj in e.T)
        if (e.T.hasOwnProperty(rj)) {
          var sj = e.T[rj],
            zf;
          if (!(zf = void 0 == sj[id])) {
            var tj = sj[id];
            zf = !("function" != typeof String.prototype.startsWith
              ? 0 === tj.indexOf("_implicit")
              : tj.startsWith("_implicit"));
          }
          if (zf) return !0;
        }
      return !1;
    };
  var Sk = {
    macro: function (a) {
      if (Lj.contains(a)) return Lj.get(a);
    },
  };
  Sk.dataLayer = Yf;
  Sk.onHtmlSuccess = fh(!0);
  Sk.onHtmlFailure = fh(!1);
  Sk.callback = function (a) {
    $a.hasOwnProperty(a) && O($a[a]) && $a[a]();
    delete $a[a];
  };
  Sk.jb = function () {
    var a = w.google_tag_manager;
    a || (a = w.google_tag_manager = {});
    a["GTM-TPPTSM"] || (a["GTM-TPPTSM"] = Sk);
    Ra = a;
  };
  (function () {
    var a = function (a) {
      var b = Q("google_tag_manager", {}),
        d = b[a];
      d ||
        ((d = b[a] = {}),
        (d.nwnc = {}),
        (d.nwc = {}),
        (d.wnc = {}),
        (d.wc = {}),
        (d.wt = null),
        (d.l = !1));
      return d;
    };
    Bi = a("linkClickMap");
    ja = a("formSubmitMap");
  })();
  Ij.push.apply(
    Ij,
    (function () {
      for (
        var a = [
            _jsm,
            "Referrer.len",
            "(function(){return ",
            _f,
            "Referrer",
            _E(_M(0), 8, 16),
            ".length})();",
            _T(2, 5, 6),
            "price",
            "(function(){var a\x3d/\\\x22LowestPrice\\\x22\\:([0-9]{1,9}\\.[0-9]{1,2})/,b\x3ddocument.head.innerHTML,a\x3da.exec(b);return null\x3d\x3da?\x220\x22:a[1]})();",
            _T(9),
            "hash",
            "(function(){var a\x3dwindow.location.hash;return a})();",
            _T(12),
            "hash tag Ceneo",
            "(function(){var b\x3dwindow.location.hash;if(b){var a\x3d/#tag\x3d([^\\/\\\x26]*)($|\\\x26)/;if(a\x3da.exec(b))return a[1];a\x3d/#share-([^\\/\\\x26]*)($|\\\x26)/;if(a\x3da.exec(b))return\x22share-\x22+a[1]}return\x22none\x22})();",
            _T(15),
            "dataPid",
            "(function(){var a\x3ddocument.getElementsByClassName(\x22js_category-list-item\x22)[0].getAttribute(\x22data-pid\x22);return a})();",
            _T(18),
            "utmcsr",
            "(function(){var a\x3d/utmcsr\\\x3d([0-9a-zA-Z\\.\\-]+)/,b\x3ddocument.cookie,a\x3da.exec(b);return null\x3d\x3da?\x22null\x22:a[1]})();",
            _T(21),
            "Local",
            "(function(){var a\x3dwindow.localStorage;return a})();",
            _T(24),
            "if ZestawCeneo",
            "(function(){var a\x3dlocation.hash,b\x3d/#tag\x3d(zestaw|listing)/,a\x3db.exec(a);0\x3ca[1].length\x26\x26(a[1]\x3d\x22/ZestawCeneo\x22);return a[1]})();",
            _T(27),
            "hash PID",
            "(function(){var a\x3dlocation.hash,b\x3d/(#|\x26)pid\x3d([a-zA-Z0-9_-]{1,})($|\\\x26|\\?)/,a\x3db.exec(a);if(!a||0\x3d\x3da[2].length)return\x22-\x22;if(0\x3ca[2].length)return a[2]})();",
            _T(30),
            "hashURL Link Zestawy Ceneo",
            "(function(){var a\x3d",
            _v,
            "element url",
            "gtm.elementUrl",
            _E(_M(10), 8, 16),
            ",b\x3d/ceneo.pl(.*)#tag\x3d(zestaw|listing)/,a\x3db.exec(a);return a[1]})();",
            _T(33, 37, 38),
            "carousel-slide",
            "(function(){var a\x3ddocument.getElementsByClassName(\x22carousel-slide active\x22).getAttribute(\x22title\x22);return a})();",
            _T(41),
            "protocol",
            "(function(){var a\x3ddocument.location.protocol;return a})();",
            _T(44),
            "Internal Search Query",
            "(function(){var a\x3d\x22qs\\x3d\x22+document.getElementsByName(\x22search-query\x22)[0].value;return 3\x3ca.length?a.toLowerCase():\x22\x22})();",
            _T(47),
            "Displayed TrustedReview Bar",
            "(function(){var a\x3ddocument.getElementsByClassName(\x22js_reviews-bar\x22);return a[0]?1:0})();",
            _T(50),
            "Capture Click in TrustedReview Bar",
            "element classes",
            "gtm.elementClasses",
            _E(_M(16), 8, 16),
            ".indexOf(\x22reviews-bar-open\x22),b\x3d",
            ".indexOf(\x22reviews-bar-close\x22);return 0\x3c\x3da?\x22survey - open\x22:0\x3c\x3db?\x22survey - close\x22:\x220\x22})();",
            _T(33, 55, 56, 55, 57),
            "Click in Menu-Link Clicked",
            "(function(){var a\x3d0,b,d\x3d\x22producer\x22;b\x3d",
            ".indexOf(\x22remove-filter\x22);var e\x3d",
            ".indexOf(\x22js_change-url\x22),c\x3d",
            ";0\x3c\x3db\x26\x26(a\x3dc.indexOf(\x22;\x22),0\x3ca\x26\x26(c\x3dc.substr(0,a)),a\x3d1);if(0\x3c\x3de||0\x3c\x3db)a\x3d1;0\x3c\x3de\x26\x260\x3ca\x26\x26(d\x3d\x22category\x22);b\x3d",
            _u,
            "Page URL",
            _E(_M(18), 8, 16),
            ".indexOf(c);\x22http://www.ceneo.pl/\x22\x3d\x3d",
            "\x26\x260\x3ca\x26\x26(b\x3d-1);return 0\x3ca\x26\x260\x3eb?d:\x220\x22})();",
            _T(60, 55, 61, 55, 62, 37, 63, 66, 67, 37, 68),
            "utmcmd",
            "(function(){var a\x3d/utmcmd\\\x3d([0-9a-zA-Z\\.\\-]+)/,b\x3ddocument.cookie,a\x3da.exec(b);return null\x3d\x3da?\x22null\x22:a[1]})();",
            _T(71),
            "getProdArticleLen",
            "(function(){var a\x3d-1,b\x3ddocument.getElementsByTagName(\x22article\x22);b[1]\x26\x26(a\x3db[1].textContent,a\x3da.replace(/\\s{2,}/g,\x22\x22).length,0\x3ca\x26\x26300\x3ea\x26\x26(a\x3da.toString().length),300\x3c\x3da\x26\x26500\x3ea\x26\x26(a\x3d4),500\x3c\x3da\x26\x26(a\x3d(a-a%500)/100));return a})();",
            _T(74),
            "checkbox checked",
            "element",
            "gtm.element",
            _E(_M(22), 8, 16),
            ".value;return a})();",
            _T(33, 79, 80),
            "boxRow",
            "(function(){if(\x22Home\x22\x3d\x3d",
            "dl.pageType",
            "pageType",
            "none",
            2,
            _E(_M(24), 8, 16),
            "){var a\x3d",
            ".parentNode.parentNode;if(\x22box-row\x22\x3d\x3da.className)var b\x3d",
            ".parentNode.className,c\x3d/\\-[0-9]/,b\x3dc.exec(b),a\x3da.getElementsByClassName(\x22section-title\x22)[0].innerHTML;else if(a\x3d",
            ".parentNode.parentNode.parentNode,\x22box-row\x22\x3d\x3da.className)b\x3d",
            ".parentNode.parentNode.className,c\x3d/\\-[0-9]/,b\x3dc.exec(b),a\x3da.parentNode.getElementsByClassName(\x22section-title\x22)[0].innerHTML;else return\x22none\x22;\nreturn a+b}return\x22none\x22})();",
            _T(83, 88, 89, 79, 90, 79, 91, 79, 92, 79, 93),
            "historyLength",
            "(function(){var a\x3dwindow.history.length;return a})();",
            _T(96),
            "browserWidth",
            "(function(){var a\x3dwindow.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return Number(a)})();",
            _T(99),
            "orderStatus",
            "dl.analyticsPagePath",
            "analyticsPagePath",
            _E(_M(28), 8, 16),
            ";return a.match(/\\/checkout/)?(a\x3ddocument.getElementsByTagName(\x22h2\x22)[0].textContent||document.getElementsByTagName(\x22h2\x22)[0].innerText,\x22Zam\\u00f3wienie zosta\\u0142o z\\u0142o\\u017cone.\x22\x3d\x3d\x3da?\x22completed\x22:\x22in progress\x22):\x22none\x22})();",
            _T(33, 104, 105),
            "orderId",
            "(function(){if(\x22/checkout\x22\x3d\x3d\x3d",
            "Page Path",
            "path",
            _E(_M(30), 8, 16),
            "){var a\x3ddocument.getElementsByTagName(\x22h2\x22)[0].textContent||document.getElementsByTagName(\x22h2\x22)[0].innerText;if(\x22Zam\\u00f3wienie zosta\\u0142o z\\u0142o\\u017cone.\x22\x3d\x3d\x3da)return a\x3ddocument.getElementsByClassName(\x22alert alert-message\x22)[0].getElementsByTagName(\x22strong\x22)[1].textContent||document.getElementsByClassName(\x22alert alert-message\x22)[0].getElementsByTagName(\x22strong\x22)[1].innerText}return\x22none\x22})();",
            _T(108, 111, 112),
            "time",
            "(function(){return(new Date).getTime()})();",
            _T(115),
            "shoppingTimer",
            "(function(){if(\x22gtm.timer\x22\x3d\x3d\x3d",
            _e,
            "event",
            _E(_M(33), 8, 16),
            "\x26\x268E3\x3d\x3d\x3d",
            "timerInterval",
            "gtm.timerInterval",
            _E(_M(34), 8, 16),
            "){var a\x3dlocation.hash,b\x3d\x22#tab\\x3dclick\x22;location.hash\x3db;return a}return\x22none\x22})();",
            _T(118, 121, 122, 125, 126),
            "month",
            "(function(){var a\x3dnew Date,b\x3da.getMonth()+1,a\x3da.getYear()+1900;10\x3eb\x26\x26(b\x3d\x220\x22+b);return b+\x22-\x22+a})();",
            _T(129),
            "CeneoPremium Variable",
            "(function(){if(\x22/lp/checkout\x22\x3d\x3d\x3d",
            "url path",
            _E(_M(37), 8, 16),
            "){var a\x3ddocument.querySelector(\x22#inner-editor\x22);return a}return\x22none\x22})();",
            _T(132, 134, 135),
            "Class to Event Action AllElements",
            "(function(){var a\x3d[\x22sb-localize-text\x22,\x22sb-localize-shop js_localize-nearest-shop\x22],b\x3da.indexOf(",
            ");return 0\x3c\x3db?\x22action:\x22+a[b]:-1})();",
            _T(138, 55, 139),
            "autoScroll",
            "(function(){if(\x22t\x22\x3d\x3d\x3d",
            "paramS",
            "query",
            "s",
            _E(_M(40), 8, 16),
            "){var a\x3ddocument.getElementsByTagName(\x22h1\x22)[0];a.scrollIntoView();return window.innerHeight}return\x22none\x22})();",
            _T(142, 146, 147),
            "userAcitivity",
            "(function(){var a\x3d$(\x22#user-activity\x22).children(\x22a\x22).attr(\x22data-shop\x22);return a?a:\x22false\x22})();",
            _T(150),
            "Class to Event Action JustLink",
            "(function(){var a\x3d[\x22manufacture-promo--product\x22],b\x3da.indexOf(",
            _T(153, 55, 139),
            "customURL",
            "(function(){if(location.search.match(/\\\x26d\\\x3d[cmt]/)){var a\x3dlocation.search,b\x3d/\\\x26d\\\x3d([cmt])/,c\x3d/\\\x26t\\\x3d([a-zA-Z0-9\\%]+)/,d\x3d/\\\x26p\\\x3d([a-z0-9\\-\\.\\_]+)/,e\x3d/\\\x26c\\\x3d([0-9]+)/,b\x3da.match(b),c\x3da.match(c),d\x3da.match(d),a\x3da.match(e);return b[1]+\x22|\x22+c[1].replace(\x22%3A%3A\x22,\x22:\x22)+\x22|\x22+d[1]+\x22|\x22+a[1]}return\x22none\x22})();",
            _T(156),
            "userActivities storage",
            "(function(){if(\x22user-activities\x22\x3d\x3d\x3d",
            "){var a;sessionStorage.setItem(\x22dataProduct\x22,",
            "dataProduct",
            "gtm.element.dataset.product",
            _E(_M(45), 8, 16),
            ");a\x3dsessionStorage.getItem(\x22dataProduct\x22);var b;sessionStorage.setItem(\x22dataShop\x22,",
            "dataShop",
            "gtm.element.dataset.shop",
            _E(_M(46), 8, 16),
            ")}else a\x3dsessionStorage.getItem(\x22dataProduct\x22);b\x3dsessionStorage.getItem(\x22dataShop\x22);return a+\x22|\x22+b})();",
            _T(159, 55, 160, 163, 164, 167, 168),
            "CeneoPremiumEmail",
            "(function(){var a\x3ddocument.getElementById(\x22ShipmentData_GuestData_Email\x22).value;return a.replace(\x22@\x22,\x22#\x22)})();",
            _T(171),
            "dataShop2",
            "Click Element",
            _E(_M(49), 8, 16),
            ".closest(\x22tr\x22);return(a\x3da.getAttribute(\x22data-shop\x22))?a:\x22none\x22})();",
            _T(33, 175, 176),
            "carouselTitle",
            "(function(){var a\x3d$(\x22.carousel-trigger.active\x22).attr(\x22title\x22);return a})();",
            _T(179),
            "carouselValue",
            "(function(){var a\x3d$(\x22.carousel-trigger.active\x22).attr(\x22value\x22)+1;return a})();",
            _T(182),
            "clickLinkPath",
            "(function(){if(\x22/lp/content/Hobby\x22\x3d\x3d\x3d",
            ".getAttribute(\x22href\x22);if(a){var b\x3d/www\\.ceneo\\.pl\\/([^?#]+)/;return a.match(b)[1]}}return\x22none\x22})();",
            _T(185, 134, 89, 175, 186),
            "clickLinkQuery",
            ".getAttribute(\x22href\x22);if(a){var b\x3d/testy(AB_[a-z]+)/;return a.match(b)[1]}}return\x22none\x22})();",
            _T(185, 134, 89, 175, 189),
            "clickLinkProduct",
            "(function(){if(\x22/lp/Hobby\x22\x3d\x3d\x3d",
            ".getAttribute(\x22href\x22);if(a){var b\x3d/([0-9]+)/;return a.match(b)[1]}}return\x22none\x22})();",
            _T(192, 134, 89, 175, 193),
            "AB_LinkNoMhHash",
            "(function(){if(",
            "Click URL",
            _E(_M(56), 8, 16),
            ",b\x3da.indexOf(\x22#mh\\x3d\x22);return 0\x3cb?a.substr(0,b-1):a}return\x22none\x22})();",
            _T(196, 198, 89, 198, 199),
            "myMedium",
            "(function(){if(\x22\x22\x3d\x3d\x3d",
            ")return\x22direct\x22;var b\x3d",
            ",a\x3d/:\\/\\/([a-z0-9_\\-\\.]*)($|\\/?)/i,a\x3da.exec(b),c\x3d",
            ".indexOf(\x22?se\\x3d\x22);return a\x26\x26a[1]?0\x3cc\x26\x260\x3ca[1].indexOf(\x22google\x22)?a[1]+\x22 - cpc\x22:a[1]:b})();",
            _T(202, 5, 203, 5, 204, 66, 205),
            "YouTube",
            "(function(){return $(\x22.product-video\x22)?!0:!1})();",
            _T(208),
            "promoProduct",
            "(function(){return 0\x3c",
            _eam,
            "element offer-parameter",
            "offer-parameter",
            _E(_M(60), 8, 16),
            ".indexOf(\x22nph_source\\x3drow\x22)?\x22Promo-wiersz\x22:0\x3c",
            ".indexOf(\x22nph_type\\x3dpromotion\x22)?\x22Promo-pozycjoner\x22:\x22none\x22})();",
            _T(211, 215, 216, 37, 217),
            "Click URI",
            ".pathname?",
            ".pathname+",
            ".search:\x22none\x22})();",
            _T(2, 175, 220, 175, 221, 175, 222),
            "uri full path",
            "(function(){return location.pathname+location.search})();",
            _T(225),
            "productRank",
            "(function(){if(\x22Product\x22\x3d\x3d",
            "){var a\x3d$(\x22.product-score\x22).clone().children().remove().end().text();return\x22\x22\x3d\x3da.trim()?\x220,00\x22:a.trim()}return\x22none\x22})();",
            _T(228, 88, 229),
            "aa_test",
            ".closest(\x22.product-offer.js_product-offer\x22).find(\x22img[class|\\x3d\x27js_lazy\x27]\x22).attr(\x22alt\x22)})();",
            _T(2, 175, 232),
            "addToBasket",
            "Click Classes",
            _E(_M(66), 8, 16),
            "){if(\x22btn btn-primary btn-m btn-cta add-to-basket-no-popup js_add-to-basket\x22\x3d\x3d",
            ")return\x22Dodaj - naglowek\x22;if(\x22btn btn-primary btn-small btn-cta add-to-basket-no-popup\x22\x3d\x3d",
            ")return\x22Dodaj - listing\x22;if(\x22btn btn-primary btn-s btn-cta add-to-basket-no-popup\x22\x3d\x3d",
            ")return\x22Category - box\x22;if(0\x3c",
            ".indexOf(\x22add-to-basket-no-popup\x22))return\x22Dodaj - inne miejsce\x22}return\x22none\x22})();",
            _T(196, 236, 237, 236, 238, 236, 239, 236, 240, 236, 241),
            "productReviews",
            "(function(){return\x22Product\x22\x3d\x3d",
            "?document.querySelector(\x27span[itemprop\\x3d\x22reviewCount\x22]\x27)?document.querySelector(\x27span[itemprop\\x3d\x22reviewCount\x22]\x27).textContent:\x220\x22:\x22none\x22})();",
            _T(244, 88, 245),
            "productTestUI",
            ";if(0\x3ca.length){if(-1\x3ca.indexOf(\x22js_gallery-anchor js_image-preview\x22))return\x22Gallery - open\x22;if(-1\x3ca.indexOf(\x22js_product-image-miniature\x22))return\x22Gallery - open - miniature\x22;if(-1\x3ca.indexOf(\x22gallery-control gallery-next\x22))return\x22Gallery - next\x22;if(-1\x3ca.indexOf(\x22gallery-control gallery-prev\x22))return\x22Gallery - prev\x22;if(-1\x3ca.indexOf(\x22js_picture-trigger\x22))return\x22Gallery - trigger buttons\x22;if(-1\x3ca.indexOf(\x22carousel-control carousel-next\x22))return\x22Gallery - carousel next\x22;\nif(-1\x3ca.indexOf(\x22carousel-control carousel-prev\x22))return\x22Gallery - carousel prev\x22;if(-1\x3ca.indexOf(\x22clipboard-add\x22))return\x22Clipboard - add\x22;if(-1\x3ca.indexOf(\x22js_btn-save-opinion\x22))return\x22Reviews - btn save review\x22;if(-1\x3ca.indexOf(\x22view-offer-details\x22))return\x22Offer - show more details\x22;if(-1\x3ca.indexOf(\x22account-problem-activator\x22))return\x22Offer - report issue\x22;if(-1\x3ca.indexOf(\x22js_installments-toggle\x22))return\x22Offer - toggle installments\x22;if(-1\x3ca.indexOf(\x22js_installments-toggle\x22))return\x22Offer - show installments\x22}if((a\x3d\n$(",
            ").closest(\x22div\x22))\x26\x26a[0]){a\x3da[0].className;if(-1\x3ca.indexOf(\x22price-trend\x22))return\x22Price History - show\x22;if(-1\x3ca.indexOf(\x22view-remaining-offers\x22))return\x22Show Remaining Offers\x22;if(-1\x3ca.indexOf(\x22product-review-form-area\x22))return\x22Reviews - show form\x22;if(-1\x3ca.indexOf(\x22product-features-more\x22))return\x22Reviews - more features\x22}}return\x22none\x22})();",
            _T(228, 88, 89, 236, 248, 175, 249),
            "server",
            "(function(){return document.getElementsByClassName(\x22machine\x22)[0].innerHTML.trim()})();",
            _T(252),
            "productsInBasket",
            "(function(){return $(\x22.notification-number.js_items-count\x22)?\x22\x22\x3d\x3d$(\x22.notification-number.js_items-count\x22).text()?0:parseInt($(\x22.notification-number.js_items-count\x22).text()):0})();",
            _T(255),
            "rc.productID1",
            "){var a\x3d$(\x22.box.js_recommend-prod-item\x22).attr(\x22data-productid\x22),b\x3d$(\x22.box.js_recommend-prod-item\x22).eq(0).find(\x22.box-prod-price\x22).find(\x22a\x22).attr(\x22href\x22).replace(\x22/\x22,\x22\x22);return\x22undefined\x22!\x3d\x3dtypeof a?a:b}return\x22none\x22})();",
            _T(228, 88, 258),
            "rc.productID2",
            "?$(\x22.box.js_recommend-prod-item\x22)[1].find(\x22.box-prod-price\x22).find(\x22a\x22).attr(\x22href\x22).replace(\x22/\x22,\x22\x22):\x22none\x22})();",
            _T(244, 88, 261),
            "rc.productID3",
            "?$(\x22.box.js_recommend-prod-item\x22)[2].find(\x22.box-prod-price\x22).find(\x22a\x22).attr(\x22href\x22).replace(\x22/\x22,\x22\x22):\x22none\x22})();",
            _T(244, 88, 264),
            "visibilityState",
            "(function(){return document.visibilityState})();",
            _T(267),
            "hashTag Link Zestawy Ceneo",
            ",b\x3d/#tag\x3d(zestaw|listing)/,a\x3db.exec(a);return a[1]})();",
            _T(33, 37, 270),
            "paymentMethod",
            "(function(){if(\x22Basket\x22\x3d\x3d\x3d",
            "){var a\x3d$(\x27ul[class\\x3d\x22payment-types type-selector\x22]\x27).find(\x22input\x22);for(i\x3d0;i\x3ca.length;i++)if(a[i].checked)return a\x3da[i].value}else return\x22none\x22})();",
            _T(273, 88, 274),
            "recommendedProducts",
            "(function(){if(\x22Product\x22\x3d\x3d\x3d",
            "){var a\x3d[];a.push(\x22gazetka_swiateczna\x22);$(\x22.js_rec-container\x22).find(\x22.box-prod-pix\x22).each(function(c,b){$(b).attr(\x22href\x22).match(/[0-9]{5,}/)\x26\x26a.push($(b).attr(\x22href\x22).match(/[0-9]{5,}/)[0])});return a}return\x22gazetka_swiateczna\x22})();",
            _T(277, 88, 278),
            "productsArray",
            "(function(){var a\x3d[];if(\x22Product\x22\x3d\x3d\x3d",
            ")a.push(",
            "dl.productId",
            "productId",
            _E(_M(79), 8, 16),
            "),a.push(",
            "+\x22b\x22);else if(\x22Category\x22\x3d\x3d\x3d",
            "||\x22MainSearch\x22\x3d\x3d\x3d",
            "dl.productID1",
            "productID1",
            _E(_M(80), 8, 16),
            "+\x22b\x22),a.push(",
            "dl.productID2",
            "productID2",
            _E(_M(81), 8, 16),
            "dl.productID3",
            "productID3",
            _E(_M(82), 8, 16),
            "+\x22b\x22);return a})();",
            _T(
              281,
              88,
              282,
              285,
              286,
              285,
              287,
              88,
              288,
              88,
              282,
              291,
              286,
              291,
              292,
              295,
              286,
              295,
              292,
              298,
              286,
              298,
              299
            ),
            "basketTotal",
            "(function(){return Math.round(100*parseFloat($(\x22.price.js_total-price\x22).attr(\x22data-total-price\x22)))/100})();",
            _T(302),
            "Click URI Znajdz w Google",
            ".search.replace(/%20/g,\x22 \x22):\x22none\x22})();",
            _T(2, 175, 220, 175, 221, 175, 305),
            "element text trim",
            _et,
            "element text",
            _E(_M(86), 8, 16),
            ")return ",
            ".trim()})();",
            _T(196, 310, 311, 310, 312),
            "a.parent",
            ".closest(\x27div[class^\\x3d\x22site-left-co\x22]\x27)[0].attr(\x22class\x22)})();",
            _T(2, 175, 315),
            "categoryProducts",
            "(function(){if(\x22Category\x22\x3d\x3d\x3d",
            "\x26\x260!\x3d\x3d",
            "dl.productsNo",
            "productsNo",
            _E(_M(89), 8, 16),
            "){if(0!\x3d\x3ddocument.getElementsByClassName(\x22cat-prod-row js_category-list-item js_man-track-event\x22).length){var b\x3d[],a\x3ddocument.getElementsByClassName(\x22cat-prod-row js_category-list-item js_man-track-event\x22);if(11\x3ca.length)for(i\x3d0;10\x3ei;i++){var c\x3da[i].getAttribute(\x22data-pid\x22);b.push(c)}else for(i\x3d0;i\x3ca.length;i++)c\x3da[i].getAttribute(\x22data-pid\x22),b.push(c)}else if(0!\x3d\x3ddocument.getElementsByClassName(\x22grid-item grid-item\x22).length?\n(b\x3d[],a\x3ddocument.getElementsByClassName(\x22grid-item grid-item\x22)):(b\x3d[],a\x3ddocument.getElementsByClassName(\x22category-item-box js_category-list-item js_man-track-event\x22)),11\x3ea.length)for(i\x3d0;i\x3ca.length;i++)c\x3da[i].getAttribute(\x22data-pid\x22),b.push(c);else for(i\x3d0;10\x3ei;i++)c\x3da[i].getAttribute(\x22data-pid\x22),b.push(c);return b}return\x22none\x22})();",
            _T(318, 88, 319, 322, 323),
            "clickPid",
            "(function(){return\x22gtm.linkClick\x22\x3d\x3d\x3d",
            "\x26\x26\x22js_conv go-to-shop\x22\x3d\x3d\x3d",
            "?",
            ".parentNode.getAttribute(\x22data-pid\x22):\x22none\x22})();",
            _T(326, 121, 327, 236, 328, 175, 329),
            "clickPrice",
            ".parentNode.getAttribute(\x22data-price\x22):\x22none\x22})();",
            _T(326, 121, 327, 236, 328, 175, 332),
            "articleTop",
            "(function(){return document.getElementsByTagName(\x22article\x22)[0]?document.getElementsByTagName(\x22article\x22)[0].offsetTop+2:\x22none\x22})();",
            _T(335),
            "articleLeft",
            "(function(){return document.getElementsByTagName(\x22article\x22)[0]?document.getElementsByTagName(\x22article\x22)[0].offsetLeft+2:\x22none\x22})();",
            _T(338),
            "homeArray",
            "(function(){var a\x3d[];a.push(\x22gazetka_swiateczna\x22);return a})();",
            _T(341),
            "hideNPH",
            "(function(){return\x22Category\x22\x3d\x3d\x3d",
            "?($(\x22#nph\x22)\x26\x26$(\x22#nph\x22).hide(),$(\x22.highlighted-offers.js_category-list-body\x22)\x26\x26$(\x22.highlighted-offers.js_category-list-body\x22).hide(),\x22hide\x22):\x22none\x22})();",
            _T(344, 88, 345),
            "shopName",
            "(function(){return 0\x3c$(\x22.reviews-survey\x22).length?$(\x22.displayed-shop-name\x22).text():\x22none\x22})();",
            _T(348),
            "shopRank",
            "(function(){if(0\x3c$(\x22.reviews-survey\x22).length)for(x\x3d0;x\x3c$(\x27input[data-ga-action\\x3d\x22ShopRating\x22]\x27).length;x++){if($(\x27input[data-ga-action\\x3d\x22ShopRating\x22]\x27)[x].checked)return $(\x27input[data-ga-action\\x3d\x22ShopRating\x22]\x27)[x].value}else return\x22none\x22})();",
            _T(351),
            "shopDeliveryRank",
            "(function(){if(0\x3c$(\x22.reviews-survey\x22).length)for(x\x3d0;x\x3c$(\x27input[data-ga-action\\x3d\x22DeliveryFormRating\x22]\x27).length;x++){if($(\x27input[data-ga-action\\x3d\x22DeliveryFormRating\x22]\x27)[x].checked)return $(\x27input[data-ga-action\\x3d\x22DeliveryFormRating\x22]\x27)[x].value}else return\x22none\x22})();",
            _T(354),
            "shopName2",
            "(function(){return 0\x3c$(\x22.thank-you\x22).length?$(\x22.thank-you\x22).find(\x22strong\x22)[0].innerText:\x22none\x22})();",
            _T(357),
            "productIds",
            "(function(){return 0\x3c$(\x22.thank-you\x22).length?$(\x22.js_products\x22).find(\x22.product\x22).attr(\x22data-id\x22):\x22none\x22})();",
            _T(360),
            "ecommerce.category",
            "\x26\x260\x3c",
            "){var a\x3d$(\x22.cat-prod-row\x22),b\x3d[];for(i\x3d0;i\x3ca.length-1;i++){var c\x3d$(\x22.cat-prod-row\x22).eq(i).find(\x22.product-score\x22).text().match(/[0-9\\,\\.]+/)?$(\x22.cat-prod-row\x22).eq(i).find(\x22.product-score\x22).text().match(/[0-9\\,\\.]+/)[0]:\x220,00\x22;b.push({id:$(\x22.cat-prod-row\x22).eq(i).attr(\x22data-pid\x22),price:$(\x22.cat-prod-row\x22).eq(i).find(\x22.price\x22).text().replace(\x22,\x22,\x22.\x22),variant:c,position:i+1,list:\x22/\x22+",
            "dl.branch",
            "cat1",
            _E(_M(102), 8, 16),
            "+\x22/\x22+",
            "dl.catMin",
            "catMin",
            _E(_M(103), 8, 16),
            "})}return a\x3d\n{ecommerce:{impressions:b}}}return\x22none\x22})();",
            _T(318, 88, 363, 322, 364, 367, 368, 371, 372),
            "front.Canonical",
            "(function(){var a\x3d$(\x22link[rel\\x3d\x27canonical\x27]\x22).attr(\x22href\x22);return a?a:\x22none\x22})();",
            _T(375),
            "genderValue",
            "(function(){var a\x3d{\x22-1\x22:0,40:0,41:1,42:0,43:2,46:0,47:2,48:0,49:0,53:1,54:1,55:1,58:1,59:0,60:2,61:2,62:2,63:2,64:1,66:2,67:2,68:2,70:2,71:2,72:2,73:2,74:1,75:2,76:2,77:2,79:2,80:2,81:2,82:2,85:2,86:2,87:2,89:2,90:2,94:2,288:-1,291:1,292:1,293:1,294:1,295:1,296:1,297:2,298:2,299:1,302:1,303:0,305:1,309:1,310:0,312:2,314:0,315:2,316:1,317:2,318:2,319:2,320:1,321:0,322:2,324:0,325:2,326:2,331:1,333:2,334:2,341:2,342:0,343:0,345:0,346:0,347:0,348:0,349:0,350:0,351:0,352:0,353:0,354:0,356:0,357:0,358:0,\n359:0,360:0,361:0,362:0,364:0,365:0,366:-1,367:0,368:0,369:0,370:0,371:0,372:-1,373:-2,374:1,375:-1,376:0,377:-2,378:0,379:-1,380:0,381:-1,382:-1,383:2,384:1,385:0,386:0,388:0,390:0,391:0,392:0,393:0,396:1,397:0,398:1,399:0,400:0,401:-1,403:-2,405:-1,406:-1,407:0,408:-1,409:0,410:0,411:-2,412:-1,413:0,414:-1,417:-1,418:-1,419:-2,420:-2,421:0,422:-1,424:-1,425:-1,426:-1,427:1,428:1,429:-1,430:-1,431:-1,432:-1,433:-1,434:-1,435:-1,436:-2,437:2,442:1,445:-1,446:2,447:0,449:1,451:1,452:2,453:1,454:-1,\n463:-2,464:-1,467:-2,468:0,469:1,470:2,471:0,472:0,473:1,475:1,476:1,477:0,479:1,480:1,504:0,505:0,508:2,511:1,522:0,525:1,526:1,527:2,528:0,530:-2,531:-2,532:-2,533:0,534:1,537:0,540:1,541:1,542:0,544:0,549:0,550:0,557:0,564:-2,565:2,566:-1,568:1,569:2,573:0,579:1,582:2,591:2,594:1,596:1,598:2,599:1,600:1,601:2,603:2,614:2,615:1,619:1,620:1,621:1,624:0,626:-1,628:-2,629:-2,630:-2,631:-2,632:-2,633:-2,634:-1,635:-1,636:0,638:2,639:1,641:2,643:1,644:2,645:0,647:0,648:1,649:0,650:0,652:0,653:0,656:0,\n661:0,665:-2,666:0,667:1,668:-2,669:1,670:0,671:-2,672:0,673:0,674:1,675:0,676:1,677:-1,678:0,679:0,680:0,685:-1,687:-1,688:1,690:0,691:0,693:0,694:0,695:0,697:2,698:0,700:2,702:0,703:0,704:0,705:-1,706:2,709:0,713:1,724:0,725:2,727:2,729:2,730:2,732:0,734:1,735:-2,736:-2,738:1,739:1,740:1,741:1,742:1,743:-1,744:0,745:-1,747:0,750:0,752:-2,753:0,754:0,755:1,756:1,758:1,759:1,760:1,761:1,762:1,765:1,768:1,769:2,772:1,773:2,774:1,775:2,776:2,777:1,778:2,779:0,781:2,782:0,783:0,784:0,785:0,786:0,788:-1,\n790:2,791:0,793:0,794:0,795:1,796:0,797:0,798:0,799:1,800:1,801:0,802:0,803:0,804:0,806:0,807:2,810:1,811:0,812:1,813:-2,814:-2,815:-2,816:1,817:-1,818:-2,819:0,820:-2,821:0,822:0,823:0,824:0,825:0,826:0,827:0,828:0,829:-1,831:0,832:0,833:0,834:0,835:0,838:0,839:0,841:0,842:1,843:0,844:-1,845:-2,846:-1,847:-1,848:-2,849:-1,850:0,851:1,852:0,853:2,854:0,855:0,856:0,857:0,858:1,859:2,861:2,862:2,863:2,864:1,865:1,866:2,868:2,869:2,876:1,877:0,878:-1,880:0,881:1,882:0,883:-1,884:0,885:1,886:1,887:-2,\n888:-2,889:-2,892:-2,893:-1,894:-2,895:-2,896:-2,900:-2,901:-2,905:0,906:-1,907:0,908:0,909:0,910:-1,911:1,912:0,913:2,914:2,915:1,916:0,917:-2,918:0,919:-1,920:1,921:2,922:2,923:0,924:0,925:0,926:0,927:0,929:-2,930:0,931:0,946:0,947:-2,948:-2,949:-2,950:-1,951:-2,953:-1,954:-2,955:-2,956:0,960:2,961:0,962:1,963:-2,964:-2,966:-2,969:-2,970:0,971:0,972:0,973:0,975:-1,977:0,978:0,979:-1,980:0,982:1,983:1,984:1,986:0,987:0,988:1,989:0,990:1,991:1,994:0,995:0,996:1,997:1,998:1,999:1,1E3:1,1001:0,1002:0,\n1004:0,1005:0,1006:0,1007:1,1008:0,1009:0,1010:2,1011:0,1012:0,1013:1,1014:0,1015:0,1016:0,1017:0,1018:1,1022:1,1023:1,1029:-1,1030:0,1031:0,1032:-1,1034:0,1039:0,1040:-1,1041:0,1042:0,1050:0,1054:-1,1055:-1,1056:-2,1057:1,1059:0,1060:1,1062:-2,1063:-2,1064:-1,1065:0,1066:-1,1067:-2,1068:-2,1069:-2,1070:-1,1071:-1,1072:0,1073:-1,1074:0,1075:0,1076:2,1077:-1,1078:-1,1079:-2,1080:-2,1082:-2,1083:-2,1084:-2,1087:-2,1088:-2,1090:-2,1091:-2,1093:-2,1096:-2,1097:-2,1098:0,1099:-2,1100:-2,1102:1,1103:2,\n1104:0,1105:0,1106:0,1107:1,1108:0,1109:0,1120:-1,1121:-2,1122:-2,1123:-2,1124:-2,1125:-2,1126:-2,1127:-2,1128:-2,1130:0,1131:-2,1132:-1,1133:-2,1134:0,1139:2,1140:1,1141:-1,1142:-1,1143:-2,1146:-2,1150:-1,1151:-1,1152:-2,1153:-1,1154:2,1155:2,1156:1,1157:1,1158:0,1159:-1,1160:-1,1163:0,1165:-1,1176:-1,1177:0,1178:-1,1182:0,1183:-2,1185:1,1186:-2,1187:-2,1188:-2,1191:-2,1192:1,1193:1,1194:2,1195:2,1196:0,1197:1,1198:1,1200:-1,1201:-1,1202:1,1203:1,1205:1,1206:2,1207:2,1208:2,1209:2,1210:2,1211:1,\n1213:-2,1214:-2,1215:-1,1216:-1,1217:-1,1219:-1,1220:-1,1221:-1,1222:-2,1225:0,1226:-2,1227:0,1228:0,1231:0,1233:-2,1234:2,1235:2,1236:1,1237:1,1238:0,1239:1,1240:0,1241:1,1243:2,1245:0,1246:-2,1247:-1,1248:0,1249:-2,1251:-1,1252:-2,1253:1,1254:-2,1255:-1,1257:1,1260:0,1261:2,1264:2,1267:1,1272:-1,1273:0,1274:-1,1275:0,1276:-1,1277:-1,1278:0,1279:0,1280:0,1281:0,1282:0,1283:0,1286:-1,1287:-2,1288:-2,1289:0,1290:1,1291:0,1295:-2,1302:0,1303:0,1304:1,1305:-2,1315:-2,1321:0,1330:-1,1331:0,1334:-1,1338:-2,\n1353:-2,1356:-2,1357:-2,1367:0,1372:-1,1373:1,1376:1,1377:-2,1378:-2,1381:-2,1382:-2,1383:-2,1387:-2,1389:-1,1390:0,1392:0,1393:0,1394:0,1395:0,1396:1,1397:-1,1398:-2,1399:-2,1400:0,1401:-2,1402:-1,1403:-2,1404:-1,1406:-1,1407:-1,1408:-1,1409:-1,1410:-1,1411:-1,1412:-1,1413:-2,1414:-1,1415:-2,1416:-2,1419:-1,1420:-1,1421:-1,1422:-1,1423:-1,1424:0,1425:0,1426:-1,1428:-2,1429:-1,1430:-1,1431:-1,1432:-1,1433:-1,1434:-1,1435:-1,1436:-1,1437:-2,1438:-1,1439:-2,1440:-1,1441:-1,1443:0,1444:2,1446:0,1447:0,\n1448:0,1449:0,1450:1,1451:1,1452:1,1453:0,1454:0,1455:2,1456:2,1457:2,1458:0,1459:-1,1462:0,1464:2,1465:0,1468:-1,1475:-2,1476:-2,1477:-2,1480:-2,1481:0,1482:0,1483:2,1485:0,1486:0,1487:0,1488:0,1489:1,1490:0,1491:0,1492:0,1493:1,1494:0,1495:0,1496:1,1497:1,1498:1,1499:0,1500:0,1501:0,1502:1,1503:1,1504:2,1505:2,1506:2,1507:1,1508:1,1509:2,1510:2,1511:1,1512:1,1513:0,1514:0,1515:0,1518:1,1520:1,1526:1,1527:2,1528:2,1529:2,1530:1,1531:1,1532:1,1533:1,1534:1,1535:1,1536:2,1537:1,1539:1,1540:1,1541:1,\n1542:1,1543:2,1544:2,1545:2,1546:1,1547:2,1548:1,1549:1,1550:1,1561:1,1562:1,1563:1,1564:1,1565:2,1568:2,1569:2,1570:2,1571:1,1576:0,1577:0,1578:0,1579:0,1580:-1,1581:-1,1582:0,1583:0,1584:1,1587:1,1588:2,1590:2,1591:1,1592:2,1593:1,1594:-1,1606:-1,1610:-1,1618:1,1619:1,1620:2,1621:1,1622:1,1626:0,1627:0,1628:0,1629:1,1630:0,1631:0,1632:0,1633:1,1634:0,1635:1,1636:1,1637:1,1639:1,1641:2,1642:2,1643:1,1644:0,1645:2,1646:2,1647:2,1648:2,1650:2,1651:2,1654:1,1656:1,1657:2,1670:1,1671:0,1672:2,1673:1,\n1674:2,1675:1,1676:0,1677:2,1678:2,1679:2,1680:1,1682:0,1683:-1,1686:0,1688:0,1689:0,1692:1,1695:0,1696:1,1698:0,1700:1,1701:2,1702:2,1703:0,1704:0,1705:0,1706:0,1707:1,1708:0,1709:1,1710:0,1711:1,1713:0,1714:0,1715:0,1716:0,1717:0,1720:-1,1721:0,1722:0,1723:0,1724:0,1725:1,1726:0,1727:1,1728:1,1729:0,1730:0,1731:1,1735:0,1736:1,1737:0,1741:0,1742:0,1743:1,1744:0,1745:0,1746:-1,1747:-1,1748:-1,1750:-1,1751:-1,1752:-1,1753:-1,1755:1,1756:0,1757:1,1758:0,1759:0,1760:0,1761:0,1763:0,1764:0,1765:0,1766:0,\n1767:-1,1768:-1,1769:0,1770:0,1771:-1,1772:-1,1773:-1,1774:0,1775:-1,1776:0,1777:0,1778:-2,1779:-1,1782:-1,1783:-1,1784:-1,1785:-1,1786:-2,1787:-1,1789:0,1790:-2,1791:2,1792:-2,1793:-1,1794:-2,1795:-1,1796:-1,1797:-2,1798:-2,1799:-1,1803:2,1804:-2,1805:-1,1806:-2,1807:-2,1808:-2,1809:-2,1820:2,1821:2,1822:2,1823:2,1824:2,1825:1,1826:1,1827:2,1828:2,1829:-1,1830:-1,1831:-1,1833:-2,1834:-1,1836:2,1837:2,1838:1,1839:1,1840:2,1841:1,1842:1,1843:1,1844:2,1845:2,1846:0,1847:2,1848:1,1849:-1,1850:1,1851:1,\n1852:2,1853:2,1854:1,1855:1,1856:1,1857:1,1858:1,1859:1,1861:1,1862:0,1863:1,1864:2,1867:0,1868:1,1870:-1,1871:-1,1872:0,1873:-1,1874:0,1875:0,1876:1,1877:0,1878:0,1879:0,1880:0,1881:0,1882:1,1884:-2,1885:0,1887:0,1888:0,1889:0,1890:0,1891:-2,1892:0,1894:1,1897:1,1914:-2,1915:-2,1916:0,1917:-1,1918:0,1922:2,1923:2,1924:2,1925:2,1930:0,1931:0,1932:0,1933:-2,1934:-2,1935:-2,1936:-2,1937:-2,1938:-2,1940:-2,1941:-2,1942:-2,1943:-2,1944:-2,1946:-2,1947:-2,1948:-2,1949:-2,1950:0,1951:0,1952:-1,1953:1,1954:1,\n1955:1,1957:0,1958:1,1960:-2,1961:-2,1962:-2,1963:-2,1964:-2,1967:-2,1968:-2,1969:-2,1970:-2,1971:-2,1972:-2,1973:-2,1974:-2,1975:-2,1976:-2,1977:-2,1981:-2,1982:-2,1983:-2,1984:-2,1985:-2,1986:-2,1987:-2,1988:-2,1989:-2,1990:-2,1991:-2,1992:-2,1993:-2,1994:-2,1995:-2,1996:-2,1997:-1,1998:-2,1999:-2,2E3:-2,2001:-2,2002:0,2003:-2,2004:-2,2005:1,2006:1,2007:-2,2009:1,2010:1,2011:1,2012:1,2013:1,2014:1,2015:0,2016:1,2018:1,2019:0,2020:1,2021:2,2022:1,2023:1,2024:1,2025:1,2026:1,2028:1,2029:1,2030:1,\n2031:1,2032:1,2033:1,2034:1,2035:2,2036:1,2038:2,2041:2,2042:1,2043:1,2044:1,2045:1,2046:1,2047:1,2048:2,2049:2,2050:1,2052:2,2053:0,2054:0,2055:0,2057:0,2058:0,2059:1,2060:-1,2061:0,2062:0,2063:-1,2064:0,2065:-2,2066:-1,2067:-2,2068:-2,2071:-1,2072:-1,2073:0,2074:-2,2075:-2,2076:0,2077:-1,2078:-2,2079:0,2080:-1,2081:-1,2082:0,2083:0,2084:-1,2085:-1,2086:0,2088:1,2089:1,2090:1,2091:1,2092:1,2093:0,2094:-2,2097:2,2098:1,2102:1,2103:1,2104:1,2105:2,2106:2,2107:1,2108:2,2110:2,2111:2,2112:1,2113:1,2114:1,\n2115:1,2116:2,2117:1,2118:1,2119:2,2120:1,2121:2,2122:2,2123:1,2124:1,2125:2,2126:2,2127:1,2128:1,2129:1,2130:2,2131:1,2132:2,2133:0,2134:2,2135:1,2136:1,2137:0,2138:1,2139:1,2140:1,2141:2,2142:2,2143:2,2144:2,2145:2,2146:1,2147:1,2148:1,2149:1,2150:2,2151:2,2152:2,2153:2,2154:1,2155:2,2157:1,2158:2,2159:2,2161:1,2162:1,2163:0,2164:1,2165:1,2166:1,2167:2,2168:-2,2169:-2,2170:-2,2171:-2,2172:-2,2173:-2,2174:-2,2175:-2,2176:-2,2178:-1,2180:-1,2181:-1,2182:-1,2183:-1,2185:-1,2186:1,2187:0,2188:1,2190:0,\n2191:-1,2192:-2,2194:2,2195:2,2196:-1,2197:-2,2198:-2,2199:-2,2200:-2,2204:-2,2205:-2,2206:-2,2207:-2,2209:-2,2210:-2,2212:-2,2213:-2,2214:-2,2215:-2,2216:-2,2217:-2,2218:-2,2219:-2,2220:-2,2222:1,2223:-2,2224:-2,2225:-2,2226:-2,2227:1,2228:-2,2229:1,2230:-1,2231:2,2232:2,2234:2,2235:1,2236:2,2237:1,2238:-1,2239:0,2240:0,2241:0,2242:0,2243:1,2244:1,2245:1,2246:1,2247:0,2248:1,2249:1,2250:0,2251:1,2252:0,2253:0,2254:0,2255:0,2256:0,2257:1,2258:-2,2259:-1,2260:-1,2261:-1,2263:0,2264:0,2265:0,2266:-1,\n2267:-1,2268:-1,2269:-1,2270:-1,2271:-1,2272:-1,2273:-1,2274:-2,2275:-1,2276:-1,2277:-2,2278:-2,2279:-2,2280:-2,2281:0,2282:2,2283:-2,2286:0,2287:0,2290:0,2291:0,2293:0,2294:0,2296:0,2297:0,2298:0,2299:0,2300:1,2302:1,2303:0,2304:0,2305:0,2306:0,2308:0,2309:0,2311:0,2312:0,2313:0,2314:0,2315:1,2319:0,2320:0,2321:0,2322:0,2323:-1,2327:0,2328:0,2332:-2,2333:0,2334:0,2337:1,2338:-1,2339:-1,2341:-1,2342:-1,2343:-1,2345:0,2346:0,2347:-1,2354:1,2359:1,2361:2,2362:2,2368:1,2369:2,2370:2,2371:2,2372:0,2373:2,\n2374:2,2375:1,2376:1,2377:0,2378:1,2379:1,2380:0,2381:2,2382:1,2383:1,2385:0,2386:0,2387:-2,2388:1,2389:2,2390:2,2391:2,2392:2,2393:2,2394:2,2395:1,2397:0,2398:0,2399:1,2400:1,2401:2,2402:2,2405:2,2407:0,2408:0,2409:0,2410:0,2411:2,2412:2,2413:2,2416:0,2417:2,2418:2,2423:1,2424:2,2425:-1,2437:-2,2438:0,2439:1,2440:0,2441:0,2442:0,2443:0,2444:0,2445:0,2446:0,2447:0,2448:0,2449:1,2450:1,2451:2,2452:1,2453:1,2454:2,2455:2,2456:2,2457:2,2458:2,2459:2,2460:1,2461:1,2462:2,2463:1,2464:2,2465:1,2466:1,2469:2,\n2470:2,2471:2,2472:1,2473:2,2474:1,2475:1,2476:1,2477:2,2478:1,2481:-1,2483:0,2484:0,2485:0,2489:2,2490:1,2492:2,2493:0,2494:-2,2495:-1,2496:-2,2500:2,2502:1,2503:2,2507:2,2508:0,2509:0,2510:-1,2511:0,2513:-2,2514:-2,2515:-2,2516:-1,2517:-1,2518:-1,2519:-1,2520:-1,2521:-1,2522:-1,2523:-1,2524:-1,2525:-2,2526:-1,2527:-1,2529:-2,2530:-2,2531:-2,2532:-1,2533:-1,2534:-2,2535:-2,2537:0,2538:0,2539:0,2540:0,2541:0,2542:1,2543:1,2544:0,2545:0,2547:0,2548:0,2549:0,2550:0,2552:0,2553:0,2554:1,2555:0,2556:1,\n2557:0,2558:0,2559:1,2560:1,2561:1,2562:0,2563:1,2564:0,2565:1,2566:1,2569:2,2570:0,2574:0,2575:-1,2578:-2,2579:-1,2581:-1,2582:-2,2583:-2,2584:0,2585:-2,2587:2,2588:0,2589:2,2591:2,2592:0,2593:-1,2594:-1,2596:-1,2597:0,2599:0,2600:0,2601:-2,2602:-1,2603:-1,2604:-1,2606:-1,2607:-2,2610:0,2611:0,2615:-2,2616:-2,2617:-1,2618:0,2619:-2,2620:1,2621:0,2623:0,2624:0,2625:0,2627:0,2628:0,2629:0,2632:0,2634:0,2635:2,2636:2,2637:2,2638:2,2639:2,2640:2,2641:2,2642:0,2643:1,2644:-1,2646:0,2647:-2,2648:0,2649:0,\n2650:0,2651:0,2652:-1,2653:-1,2654:0,2655:0,2657:0,2658:0,2659:0,2660:-1,2663:-1,2664:-1,2665:-1,2666:-1,2667:0,2668:-2,2669:-1,2670:-1,2671:-1,2672:-1,2673:-1,2674:-1,2675:0,2676:0,2677:0,2679:-2,2680:0,2681:0,2682:-1,2683:-1,2684:-2,2685:-1,2686:-1,2694:-2,2695:-1,2696:0,2697:-1,2701:-1,2702:0,2704:-1,2705:-2,2709:2,2710:0,2711:1,2713:1,2716:1,2717:0,2719:1,2722:2,2725:1,2726:1,2727:1,2728:2,2729:0,2730:2,2731:1,2732:2,2733:1,2734:2,2735:2,2738:2,2739:1,2741:1,2743:-1,2744:-1,2745:-1,2746:0,2747:-1,\n2748:-1,2749:-1,2750:-2,2751:0,2752:1,2753:1,2754:0,2755:-2,2756:-2,2757:-1,2758:2,2759:1,2760:0,2761:0,2762:1,2765:2,2766:2,2767:1,2768:2,2769:2,2770:2,2771:2,2772:2,2773:1,2774:1,2775:1,2777:2,2778:1,2781:-1,2782:1,2783:2,2784:2,2785:0,2786:1,2791:1,2795:1,2798:1,2799:0,2801:0,2802:0,2803:0,2804:1,2805:0,2807:0,2808:0,2811:0,2812:-1,2813:-1,2814:1,2815:2,2816:2,2817:1,2818:1,2819:2,2820:2,2822:1,2823:0,2830:1,2833:0,2834:2,2844:1,2847:1,2848:2,2849:1,2850:2,2851:1,2852:2,2853:2,2854:1,2855:0,2857:-1,\n2860:-1,2861:0,2862:0,2863:0,2865:0,2866:1,2867:-2,2868:-1,2869:-1,2870:-1,2871:-1,2872:-1,2873:0,2874:-1,2875:-1,2876:-1,2877:-1,2878:0,2879:-1,2884:-1,2885:-1,2886:-2,2888:0,2889:0,2891:0,2892:0,2893:0,2896:0,2899:0,2900:0,2901:0,2902:0,2903:1,2904:0,2905:0,2911:1,2912:1,2913:0,2915:-1,2916:0,2917:2,2918:0,2919:0,2920:0,2921:0,2922:0,2923:0,2924:0,2926:0,2927:0,2928:1,2929:-2,2930:0,2931:0,2932:0,2933:-2,2934:-2,2935:-2,2936:-1,2937:0,2938:-1,2939:2,2941:-2,2958:-2,2962:2,2964:0,2965:1,2969:0,2970:0,\n2971:0,2972:0,2974:0,2975:2,2979:2,2983:1,2984:1,2985:0,2986:1,2987:0,2988:1,2989:2,2990:1,2991:2,2992:1,2993:2,3E3:2,3001:2,3002:1,3003:1,3004:1,3005:2,3006:1,3007:1,3008:2,3009:2,3012:2,3013:1,3014:1,3015:2,3017:2,3018:1,3020:2,3021:1,3022:1,3023:0,3025:0,3026:-1,3027:-1,3028:0,3029:2,3031:2,3032:0,3033:1,3034:0,3039:2,3040:2,3042:0,3043:0,3045:0,3046:1,3047:0,3050:1,3051:0,3052:1,3054:0,3055:-2,3056:0,3057:-1,3058:-1,3059:-1,3060:-2,3061:-2,3062:-2,3063:-2,3064:-2,3065:-2,3066:-1,3067:-2,3068:0,\n3069:-1,3070:-1,3071:-1,3072:-2,3073:0,3074:0,3075:-1,3076:0,3078:-2,3079:-2,3080:-2,3081:-1,3082:2,3083:2,3084:0,3085:0,3086:1,3087:1,3088:1,3089:-1,3090:2,3091:-1,3092:1,3093:1,3094:0,3095:1,3097:2,3098:2,3099:0,3100:-2,3101:-2,3103:-2,3104:-2,3105:-2,3106:0,3108:0,3110:0,3111:1,3112:1,3113:0,3114:0,3115:0,3116:0,3117:0,3118:1,3119:-1,3120:0,3121:0,3123:1,3127:1,3128:2,3129:2,3130:2,3131:2,3132:1,3133:-2,3134:-2,3135:-1,3136:-2,3137:-1,3138:-1,3140:-2,3142:-2,3143:-2,3144:0,3146:0,3149:-1,3150:-1,\n3151:2,3152:-2,3153:0,3156:-2,3157:-1,3158:0,3159:-2,3160:0,3161:-1,3162:1,3163:1,3164:0,3165:0,3166:-2,3167:-1,3168:1,3170:-1,3171:-1,3172:0,3173:0,3174:0,3175:0,3176:0,3177:0,3178:0,3179:0,3180:0,3181:1,3182:0,3183:-1,3184:-1,3187:1,3188:1,3189:2,3190:1,3191:0,3192:0,3193:0,3194:-1,3195:1,3196:-1,3197:0,3198:0,3199:0,3200:0,3201:-2,3202:-2,3203:1,3204:2,3205:2,3206:0,3207:1,3208:0,3209:1,3210:0,3211:1,3212:0,3213:0,3215:1,3217:0,3219:2,3220:-1,3221:-2,3222:-1,3223:-1,3224:-2,3226:0,3257:-1,3258:0,\n3259:0,3260:0,3261:2,3262:2,3265:0,3266:0,3267:0,3268:1,3269:2,3270:2,3296:0,3297:0,3299:1,3300:-2,3301:-1,3302:0,3303:-1,3304:-2,3305:-2,3306:-1,3307:-2,3308:-1,3309:-2,3310:-2,3311:0,3313:1,3314:-2,3317:-1,3318:-2,3319:-1,3320:-1,3321:-1,3322:-1,3323:-1,3324:-1,3325:-2,3326:0,3327:0,3328:-1,3329:-1,3330:-1,3331:-1,3332:-1,3333:-1,3334:-2,3335:-1,3338:0,3339:2,3340:2,3341:2,3342:2,3343:2,3344:2,3345:1,3346:2,3347:2,3356:1,3357:2,3358:2,3359:1,3360:2,3361:1,3362:1,3364:0,3365:2,3366:2,3367:2,3368:2,\n3369:1,3373:-1,3374:-1,3375:-1,3376:-2,3377:-1,3378:0,3379:-2,3380:-1,3381:-1,3382:0,3383:-2,3384:-2,3385:-2,3386:0,3387:0,3388:1,3389:0,3390:1,3412:-1,3414:0,3420:1,3421:0,3422:0,3423:1,3424:0,3425:0,3426:0,3427:1,3428:0,3429:0,3430:0,3431:-1,3432:-1,3440:0,3441:0,3442:0,3443:0,3444:1,3445:-1,3446:-1,3447:-1,3448:0,3449:-1,3450:-1,3451:-1,3452:0,3453:0,3454:2,3466:0,3468:-1,3470:-2,3472:-1,3473:-1,3474:-1,3476:2,3479:0,3480:1,3482:1,3483:0,3484:2,3485:1,3486:0,3487:1,3488:0,3489:0,3492:-1,3493:0,\n3494:0,3495:0,3497:1,3498:2,3499:2,3500:2,3501:1,3502:2,3503:-2,3504:2,3505:2,3506:1,3507:1,3508:2,3509:1,3510:1,3512:-1,3513:-2,3514:1,3515:1,3517:0,3518:1,3519:0,3520:0,3521:-2,3522:-2,3523:2,3525:0,3528:0,3529:1,3530:0,3531:1,3532:-1,3535:0,3536:0,3539:-2,3540:-2,3541:-2,3542:-2,3543:-2,3544:-2,3545:-2,3546:-2,3547:-2,3548:-1,3549:-2,3550:-1,3551:-2,3552:-1,3553:0,3554:0,3555:0,3556:1,3558:1,3559:2,3560:-2,3564:-2,3565:-2,3566:-2,3567:-2,3568:-2,3569:-2,3572:-2,3573:-2,3574:-2,3575:-2,3576:-1,\n3577:-1,3578:-2,3579:-2,3580:-2,3581:-2,3582:-2,3583:-2,3584:-2,3585:-2,3586:-2,3587:0,3588:-2,3589:-2,3590:0,3591:0,3592:0,3593:0,3594:-1,3595:1,3596:0,3597:0,3598:0,3599:0,3600:0,3601:0,3603:2,3605:-2,3606:0,3608:0,3609:1,3610:0,3611:0,3612:1,3613:1,3614:1,3615:0,3616:2,3617:0,3618:0,3619:0,3620:-1,3621:-1,3622:-1,3623:0,3625:-2,3626:-1,3627:-2,3628:-2,3629:2,3630:2,3632:2,3634:2,3635:2,3636:2,3637:2,3638:1,3639:2,3640:2,3641:2,3642:2,3643:1,3644:2,3645:0,3646:0,3647:0,3648:0,3649:-1,3650:0,3651:-1,\n3653:-1,3660:0,3661:1,3662:1,3664:1,3665:-1,3666:1,3668:-2,3669:2,3672:2,3673:2,3674:2,3676:2,3678:-2,3679:-2,3680:-1,3681:-1,3682:-1,3689:-2,3691:-1,3693:-2,3704:-2,3732:-2,3734:-2,3736:-2,3751:-2,3762:-2,3768:0,3769:-2,3784:-2,3786:-2,3792:-2,3793:-2,3794:-2,3796:-2,3797:-2,3800:-2,3808:-2,3813:-2,3815:-2,3819:-1,3822:-2,3823:-2,3833:-2,3844:-2,3845:-2,3855:-2,3856:-2,3858:-2,3866:-2,3868:-2,3873:-2,3888:-2,3898:-2,3900:-2,3903:-1,3905:-2,3906:-2,3910:0,3912:-1,3913:0,3914:-1,3915:-2,3916:-1,3917:1,\n3924:0,3926:0,3927:-1,3928:-1,3930:-2,3936:2,3942:-2,3943:-1,3944:2,3946:-2,3947:-2,3950:0,3951:-1,3955:0,3956:2,3957:0,3958:1,3959:0,3960:2,3961:-2,3965:-2,3966:-2,3972:0,3978:2,3980:0,3981:0,3982:1,3983:1,3984:0,3985:1,3986:0,3988:0,3990:1,3993:0,3995:-1,3996:-2,3997:-1,3998:-1,3999:-1,4001:0,4005:0,4009:-2,4010:-2,4011:1,4012:0,4013:1,4016:2,4018:1,4019:-2,4020:2,4021:1,4022:0,4024:0,4027:2};return(a\x3da[",
            "dl.catId",
            "catId",
            _E(_M(106), 8, 16),
            "])?a:0})();",
            _T(378, 381, 382),
            "productMod",
            "(function(){var a\x3d[44634207,45324405,25638263,25638262,26366537,48309187,49393244,38602088,25638256,26829247,25638257,30375564,32970171,48003281,47593016,47592686,47464799,44071462,43573100,45333511,45274431,30328954,16697860,26801142,26911071,48071877,47802215,47859167,45307628];if(\x22Product\x22\x3d\x3d\x3d",
            ")for(x\x3d0;x\x3ca.length;x++)if(a[x]\x3d\x3d\x3d1*",
            ")return a[x]+\x22a\x22;return\x22none\x22})();",
            _T(385, 88, 386, 285, 387),
            "front.MetaRobots",
            "(function(){var a\x3d$(\x22meta[name\\x3d\x27robots\x27]\x22).attr(\x22content\x22);return a?a:\x22none\x22})();",
            _T(390),
            "front.NumberOfLinks",
            "(function(){var a\x3d$(\x22a\x22).length;return a?a:\x22none\x22})();",
            _T(393),
            "front.NumberOfNofollow",
            "(function(){var a\x3d$(\x22a[rel\\x3dnofollow]\x22).length;return a?a:\x22none\x22})();",
            _T(396),
            "front.H1.first",
            "(function(){var a\x3d$(\x22h1\x22).first().text().replace(/\\s+/g,\x22 \x22).trim();return a?a:\x22none\x22})();",
            _T(399),
            "criteo.list",
            "(function(){var b\x3d[];if(\x22Category\x22\x3d\x3d\x3d",
            "){var a\x3d$(\x22.site-left-content div[data-pid]\x22),c\x3d10;10\x3ea.length\x26\x26(c\x3da.length);for(x\x3d0;x\x3cc;x++)b.push(a.eq(x).attr(\x22data-pid\x22))}return b})();",
            _T(402, 88, 403),
            "inBasket",
            "(function(){if(\x22Filled\x22\x3d\x3d\x3d",
            "dl.basket",
            "basket",
            _E(_M(114), 8, 16),
            "){var a\x3d$.parseJSON(dataLayer[0].products.replace(/\\\x26quot\\;/g,\x27\x22\x27)),b\x3d[];for(x\x3d0;x\x3ca.length;x++)b.push(a[x].ProductId);return b}return\x22none\x22})();",
            _T(406, 409, 410),
            "CriteoinBasket",
            "){var a\x3d$.parseJSON(dataLayer[0].products.replace(/\\\x26quot\\;/g,\x27\x22\x27)),b\x3d[];for(x\x3d0;x\x3ca.length;x++)b.push({id:a[0].ProductId,price:a[0].Price,quantity:a[0].Count});return b}return\x22none\x22})();",
            _T(406, 409, 413),
            "lpHashScroll",
            "(function(){if(\x22Dedicated\x22\x3d\x3d\x3d",
            "\x26\x26location.hash.match(/\\#(.*)\\\x26/)){var a\x3dlocation.hash.match(/\\#([^\\\x26]*)\\\x26/)[1],a\x3deval(\x22$(\x27a[name\\x3d\x22+a+\x22]\x27)\x22)[0];a.scrollIntoView()}return\x22scroll\x22})();",
            _T(416, 88, 417),
            "rtbhouse.list",
            "){var a\x3d$(\x22.site-left-content div[data-pid]\x22),c\x3d10;10\x3ea.length\x26\x26(c\x3da.length);for(x\x3d0;x\x3cc;x++)b.push(a.eq(x).attr(\x22data-pid\x22))}return b.toString()})();",
            _T(402, 88, 420),
            _sw,
            _M(22),
            "http://www.ceneo.pl/Click/Offer/",
            _eq,
            "Page Hostname",
            "host",
            _M(119),
            "www.ceneo.pl",
            "_event",
            _M(120),
            "gtm.linkClick",
            _re,
            "_triggers",
            "gtm.triggers",
            "",
            _M(121),
            "(^$|((^|,)482415_104($|,)))",
            "482415_104",
            _sp,
            "967341492",
            "category",
            "branch",
            "pagetype",
            "product",
            "dl.productMinPrice",
            "minPrice",
            _M(122),
            _M(103),
            _M(102),
            _M(24),
            _M(79),
            { 8: 448, 442: 449, 443: 450, 444: 451, 445: 452 },
            43,
            true,
            "1069961830",
            "Branch",
            "Category",
            "Manufacturer",
            "Price",
            "Value",
            "dl.brand",
            "brand",
            _M(123),
            _M(2),
            "1",
            { 457: 450, 458: 449, 459: 464, 460: 465, 461: 466 },
            "Jh6ECKK1lFoQ5qSZ_gM",
            53,
            "Product",
            "gtm.js",
            "482415_3",
            "1004514767",
            "ecomm_pagetype",
            "ecomm_prodid",
            "ecomm_totalvalue",
            "manufacturer",
            "userid",
            "paramse",
            "numberofoffers",
            "category2",
            "inbasket",
            "ecomm_rec_prodid",
            "dl.userId",
            "userId",
            _M(124),
            "paramSe",
            "se",
            _M(125),
            "dl.offersNo",
            "offersNo",
            _M(126),
            _M(33),
            _M(36),
            "dl.cat2",
            "cat2",
            _M(127),
            _M(71),
            "[\x22",
            _M(72),
            "\x22,\x22",
            _M(73),
            "\x22.\x22",
            _M(74),
            "\x22]",
            _T(499, 500, 501, 502, 503, 504, 505),
            {
              474: 445,
              475: 452,
              476: 448,
              443: 450,
              442: 449,
              477: 464,
              478: 486,
              479: 489,
              480: 492,
              120: 493,
              128: 494,
              481: 497,
              482: 498,
              483: 506,
            },
            58,
            _M(37),
            "/My-Account/Orders/Realised",
            _M(86),
            "zapytaj sklep o to zamÃ³wienie",
            "(^$|((^|,)482415_114($|,)))",
            "482415_114",
            _ga,
            __c,
            "ua classic",
            "UA-265118-1",
            _M(128),
            "Ask_about",
            "Basket",
            _M(10),
            false,
            [],
            61,
            _M(9),
            "[a-zA-Z0-9]{1,}",
            "undefined",
            "482415_133",
            _ua,
            "UA-51159636-1",
            "PID",
            "3",
            { 533: 526 },
            "page",
            _M(28),
            { 535: 536 },
            "\x26tid",
            "\x26t",
            "\x26ec",
            "\x26ea",
            "\x26ni",
            "\x26cd3",
            {
              538: 531,
              539: 120,
              540: 532,
              541: 526,
              542: 455,
              543: 526,
              535: 536,
            },
            75,
            { 538: 518, 539: 120, 540: 532, 541: 526, 542: 455, 543: 526 },
            76,
            "#tag\x3d(listing|zestaw)",
            "(^$|((^|,)482415_134($|,)))",
            "482415_134",
            "Zestawy Ceneo",
            _M(76),
            _M(11),
            "4",
            { 554: 553 },
            "\x26el",
            "\x26cd4",
            {
              538: 531,
              539: 120,
              540: 551,
              541: 552,
              556: 553,
              542: 455,
              557: 553,
            },
            77,
            "(^(http|https):\\/\\/(www|m|image)\\.ceneo\\.pl|www\\.google\\.pl\\/search\\?q\x3d)",
            _cn,
            "://",
            "(www|m)\\.ceneo\\.pl",
            "(^$|((^|,)482415_135($|,)))",
            "482415_135",
            "ua universal",
            _M(129),
            "Outgoing links",
            "[",
            _M(87),
            "]",
            _T(569, 570, 571),
            {
              538: 567,
              539: 120,
              540: 568,
              541: 522,
              556: 572,
              542: 523,
              535: 536,
            },
            78,
            "Form URL",
            _M(130),
            "/search",
            _M(14),
            "qs\x3d",
            "gtm.formSubmit",
            "(^$|((^|,)482415_138($|,)))",
            "Internal Search",
            "482415_138",
            "/",
            _T(450, 584, 449),
            {
              538: 531,
              539: 120,
              540: 582,
              541: 578,
              556: 585,
              542: 523,
              535: 536,
            },
            82,
            _M(15),
            _M(0),
            "(www\\.ceneo\\.pl|ceneotest\\.pl)",
            "482415_142",
            "TrustedReview Bar",
            "Displayed review bar",
            "5",
            { 594: 593 },
            "\x26cd5",
            {
              538: 531,
              539: 120,
              540: 592,
              541: 593,
              556: 593,
              542: 455,
              596: 593,
            },
            83,
            _M(17),
            "survey",
            "gtm.click",
            "482415_143",
            "Click - ",
            _T(603, 599),
            { 538: 531, 539: 120, 540: 592, 541: 604, 556: 599, 542: 455 },
            85,
            _M(19),
            "producer",
            "482415_144",
            "(^$|((^|,)482415_145($|,)))",
            "482415_145",
            "Manufacturer - Navigation Bar",
            87,
            _M(30),
            "/My-Account/Dashboard",
            _M(66),
            "dotted-link",
            "(^$|((^|,)482415_148($|,)))",
            "482415_148",
            "Moje Konto",
            "Moje Ceneo",
            "Link: ",
            _T(622, 511),
            { 538: 531, 539: 120, 540: 620, 541: 621, 556: 623, 542: 455 },
            89,
            "(ceneo\\.pl|ceneotest\\.pl|pl-frontend\\.service)",
            "482415_149",
            "ua testy semseo",
            "UA-51159636-7",
            _M(131),
            "ProductContentRank LP",
            "PCR: ",
            _T(632, 449),
            "rank_lp: ",
            _M(21),
            _T(634, 635),
            "2",
            { 637: 636 },
            "\x26cd2",
            {
              538: 630,
              539: 120,
              540: 631,
              541: 633,
              556: 636,
              542: 455,
              639: 636,
              535: 536,
            },
            90,
            "#tab\x3dspec",
            "(^$|((^|,)482415_151($|,)))",
            "482415_151",
            "ProductContentRank tab onClick",
            "PCR tab: ",
            _T(646, 449),
            "rank: ",
            _T(648, 635),
            { 637: 635 },
            {
              538: 630,
              539: 120,
              540: 645,
              541: 647,
              556: 649,
              542: 455,
              639: 635,
              535: 536,
            },
            92,
            _M(16),
            "step-tab",
            "482415_152",
            "tab: ",
            "data toogle",
            "gtm.element.dataset.toggle",
            _M(132),
            _T(656, 659),
            "Variant - Show Hint",
            93,
            "order-",
            "482415_153",
            "ZamÃ³wienia kup na Ceneo",
            { 538: 531, 539: 120, 540: 620, 541: 621, 556: 665, 542: 455 },
            94,
            "carousel-trigger",
            "482415_154",
            "Karuzela - ",
            "Click Text",
            _M(133),
            _T(670, 672),
            { 538: 531, 539: 120, 540: 620, 541: 621, 556: 673, 542: 455 },
            95,
            "(\\/My-Account|\\/ssl-My-Wish-Lists)",
            _M(56),
            "^$",
            "(^$|((^|,)482415_155($|,)))",
            "482415_155",
            "Nawigacja",
            "Link - ",
            _T(682, 672),
            { 538: 531, 539: 120, 540: 620, 541: 681, 556: 683, 542: 455 },
            96,
            "Home",
            _M(25),
            "http://www.ceneo.pl/",
            "^[a-zA-Z].*",
            "(^$|((^|,)482415_156($|,)))",
            "482415_156",
            "BoxRow",
            { 538: 567, 539: 120, 540: 692, 541: 687, 556: 522, 542: 455 },
            97,
            "scrollLabel",
            "eventLabel",
            _M(134),
            "Baseline",
            "/lp/CeneoPremium",
            "ScrollDistance",
            "482415_169",
            "premium ua",
            "UA-51159636-6",
            _M(135),
            "scrollCategory",
            "eventCategory",
            _M(136),
            "scrollAction",
            "eventAction",
            _M(137),
            "scrollValue",
            "eventValue",
            _M(138),
            "\x26ev",
            {
              538: 704,
              539: 120,
              540: 707,
              541: 710,
              556: 697,
              714: 713,
              542: 455,
            },
            108,
            _M(49),
            "http://www.ceneo.pl/lp/checkout",
            "(^$|((^|,)482415_170($|,)))",
            "482415_170",
            "CeneoPremium",
            _smm,
            "CeneoPremiumValue",
            "/lp/CeneoPremium2",
            "79,00",
            "129,00",
            { 699: 725, 724: 726 },
            _M(139),
            { 538: 704, 539: 120, 540: 721, 541: 728, 556: 486, 542: 455 },
            109,
            "/lp/checkout",
            _M(38),
            "Form Text",
            _M(140),
            "KupujÄ i pÅacÄ",
            "(^$|((^|,)482415_171($|,)))",
            "482415_171",
            "payment",
            { 538: 567, 539: 120, 540: 721, 541: 738, 556: 732, 542: 455 },
            110,
            _M(39),
            "action:",
            "482415_173",
            "Special Classes",
            _T(569, 672, 571),
            { 538: 531, 539: 120, 540: 744, 541: 741, 556: 745, 542: 455 },
            112,
            _M(40),
            "t",
            _M(41),
            ".*",
            "482415_174",
            "scroll",
            {
              538: 567,
              539: 120,
              540: 141,
              541: 753,
              556: 750,
              714: 466,
              542: 455,
            },
            113,
            _M(43),
            "(^$|((^|,)482415_175($|,)))",
            "482415_175",
            { 538: 531, 539: 120, 540: 744, 541: 756, 556: 522, 542: 455 },
            114,
            "caÅa Polska",
            "/dostawcy/",
            "(wrocÅaw|warszawa|krakÃ³w|ÅÃ³dÅº|poznaÅ)",
            "482415_176",
            "action:form-body-geo-map",
            _T(569, 734, 571),
            { 538: 531, 539: 120, 540: 744, 541: 765, 556: 766, 542: 455 },
            115,
            _M(44),
            "482415_181",
            "Google Display Network",
            "|",
            _T(449, 772, 464, 772, 452),
            { 538: 567, 539: 120, 540: 771, 541: 769, 556: 773, 542: 455 },
            118,
            "^(\\/lp\\/CeneoPremium|\\/lp\\/CeneoPremiumLimited|\\/lp\\/checkout|\\/lp\\/purchase|\\/lp\\/CeneoPremiumStage3|\\/lp\\/content\\/checkout)",
            "482415_191",
            { 538: 704 },
            127,
            "/lp/content/checkout",
            _M(48),
            "#",
            "(^$|((^|,)482415_193($|,)))",
            "482415_193",
            { 538: 704, 539: 120, 540: 721, 541: 738, 556: 781, 542: 455 },
            135,
            "facebook.com",
            "482415_196",
            "Facebook Incoming Clicks",
            { 538: 531, 539: 120, 540: 789, 541: 589, 542: 455 },
            137,
            "(\\/lp\\/swieta|\\/lp\\/prezenty|\\/prezenty\\/kalendarz)",
            "(^$|((^|,)482415_204($|,)))",
            "482415_204",
            "LP Prezenty",
            _T(569, 677, 571),
            { 538: 518, 539: 120, 540: 795, 541: 745, 556: 796, 542: 455 },
            143,
            "^(http|https):\\/\\/www\\.ceneo\\.pl",
            "(ceneotest\\.pl|pl-frontend\\.service)",
            "482415_220",
            "My Medium",
            _M(58),
            { 466: 803 },
            { 466: 466 },
            "\x26cd1",
            "\x26cm1",
            {
              538: 630,
              539: 120,
              540: 802,
              541: 803,
              556: 614,
              542: 455,
              806: 803,
              807: 466,
              535: 536,
            },
            155,
            "/lp/content/tassimo_promocje",
            "(^$|((^|,)482415_222($|,)))",
            "482415_222",
            "Tassimo",
            "Click",
            { 538: 519, 539: 120, 540: 813, 541: 814, 556: 677, 542: 523 },
            158,
            "Click ID",
            "gtm.elementId",
            _M(141),
            "^seg_[0-9]{1,2}",
            "(^$|((^|,)482415_223($|,)))",
            "482415_223",
            "Segments CategoryListing",
            _T(449, 584, 819),
            " : ",
            _T(672, 825, 677),
            { 538: 567, 539: 120, 540: 823, 541: 824, 556: 826, 542: 523 },
            159,
            "1014023913",
            "numberOfOffers",
            "ecomm_event",
            {
              442: 449,
              443: 450,
              477: 464,
              476: 465,
              475: 452,
              830: 492,
              474: 451,
              831: 493,
              128: 494,
            },
            160,
            _M(59),
            "true",
            "url hostname",
            _M(142),
            "Gry",
            "gtm.dom",
            "482415_224",
            "present",
            {
              538: 567,
              539: 120,
              540: 207,
              541: 841,
              556: 452,
              542: 523,
              535: 536,
            },
            162,
            _M(61),
            "Promo",
            "ceneo.pl",
            "(^$|((^|,)482415_228($|,)))",
            "482415_228",
            _M(62),
            {
              538: 567,
              539: 120,
              540: 844,
              541: 449,
              556: 849,
              542: 523,
              535: 536,
            },
            164,
            "(ceneotest\\.pl|seo2\\.c-dev|ceneo\\.pl)",
            "#tab\x3d",
            "clickHashTab",
            _E(_M(63), 8, 16),
            "!\x3d",
            _E(_M(62), 8, 16),
            ")return\x22none\x22;var a\x3d",
            ",b\x3d/#tab\x3d([a-zA-Z0-9_-]{1,})($|\\\x26)/,a\x3db.exec(a);if(!a||0\x3d\x3da[1].length)return\x22none\x22;if(0\x3ca[1].length)return a[1]})();",
            _T(196, 855, 856, 857, 858, 198, 859),
            _M(143),
            "(^$|((^|,)482415_230($|,)))",
            "482415_230",
            _t,
            "_time",
            _T(536, 584, 861),
            { 535: 866 },
            { 538: 567, 535: 866 },
            167,
            { 538: 519, 535: 866 },
            168,
            "/Signin-correct",
            "dl.logged",
            "logged",
            _M(145),
            _gt,
            _M(1),
            "482415_231",
            "User Registration",
            _T(569, 875, 571),
            {
              538: 567,
              539: 120,
              540: 879,
              541: 880,
              556: 486,
              542: 455,
              535: 536,
            },
            169,
            "manufaturers_pagepath",
            "Producer",
            "MainSearch",
            "Shops",
            "My-Account",
            "Deliverers",
            _T(584, 450, 584, 449, 584, 451, 584),
            "/Search",
            {
              686: 584,
              470: 889,
              458: 889,
              884: 889,
              885: 890,
              886: 536,
              887: 536,
              888: 536,
            },
            _M(146),
            "userGender",
            "(function(){if(\x22gtm.js\x22\x3d\x3d\x3d",
            "\x26\x26\x22gtm.dom\x22!\x3d\x3d",
            "\x26\x26\x22gtm.load\x22!\x3d\x3d",
            "\x26\x26\x22gtm.click\x22!\x3d\x3d",
            ")if(localStorage.getItem(\x22var\x22)){var a\x3d1*localStorage.getItem(\x22var\x22),a\x3da+",
            _E(_M(107), 8, 16),
            ";10\x3ca\x26\x26(a\x3d10);-10\x3ea\x26\x26(a\x3d-10);localStorage.setItem(\x22var\x22,a)}else localStorage.setItem(\x22var\x22,",
            ");else localStorage.getItem(\x22var\x22)||localStorage.setItem(\x22var\x22,",
            ");return localStorage.getItem(\x22var\x22)})();",
            _T(
              894,
              121,
              895,
              121,
              896,
              121,
              897,
              121,
              898,
              899,
              900,
              899,
              901,
              899,
              902
            ),
            _M(147),
            "482415_232",
            "tab",
            ")if(",
            "){if(document.location.hash.match(/tab\x3d/))return document.location.hash.match(/tab\x3d([a-z]+)/)[1]}else{var a\x3d",
            ".match(/tab\x3d([a-z]+)/);if(!a||0\x3d\x3da[1].length)return\x22none\x22;if(0\x3ca[1].length)return a[1]}else return\x22none\x22})();",
            _T(277, 88, 907, 855, 856, 857, 908, 198, 909),
            _M(148),
            "cookie-close-button",
            "(^$|((^|,)482415_233($|,)))",
            "482415_233",
            _M(113),
            "482415_4",
            "manufacturers_ua",
            "UA-51159636-8",
            _M(149),
            "ceneo",
            { 466: 464, 637: 450, 533: 451, 554: 920, 594: 449 },
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "23",
            "24",
            "25",
            "27",
            "28",
            "dl.basketPrice",
            "basketPrice",
            _M(150),
            "dl.filters",
            "filters",
            _M(151),
            "dl.search",
            "search",
            _M(152),
            _M(106),
            _M(89),
            _M(64),
            _M(68),
            _M(70),
            _M(75),
            "dl.searchText",
            "searchText",
            _M(153),
            "tag",
            _M(154),
            {
              466: 464,
              637: 451,
              533: 452,
              554: 448,
              594: 945,
              922: 450,
              923: 449,
              924: 948,
              925: 951,
              926: 952,
              927: 953,
              928: 492,
              929: 875,
              930: 486,
              931: 954,
              932: 911,
              933: 955,
              934: 635,
              935: 956,
              936: 498,
              937: 957,
              938: 497,
              939: 509,
              940: 960,
              941: 904,
              942: 962,
            },
            { 535: 892, 485: 486 },
            "\x26cg1",
            "\x26cg2",
            "\x26cg3",
            "\x26cg4",
            "\x26cg5",
            "\x26cd6",
            "\x26cd7",
            "\x26cd8",
            "\x26cd9",
            "\x26cd10",
            "\x26cd11",
            "\x26cd12",
            "\x26cd13",
            "\x26cd14",
            "\x26cd15",
            "\x26cd16",
            "\x26cd17",
            "\x26cd18",
            "\x26cd19",
            "\x26cd20",
            "\x26cd21",
            "\x26cd23",
            "\x26cd24",
            "\x26cd25",
            "\x26cd27",
            "\x26cd28",
            {
              538: 919,
              965: 464,
              966: 450,
              967: 451,
              968: 920,
              969: 449,
              806: 464,
              639: 451,
              543: 452,
              557: 448,
              596: 945,
              970: 450,
              971: 449,
              972: 948,
              973: 951,
              974: 952,
              975: 953,
              976: 492,
              977: 875,
              978: 486,
              979: 954,
              980: 911,
              981: 955,
              982: 635,
              983: 956,
              984: 498,
              985: 957,
              986: 497,
              987: 509,
              988: 960,
              989: 904,
              990: 962,
              535: 892,
              485: 486,
            },
            171,
            _M(67),
            "482415_236",
            "Do koszyka",
            _T(449, 584, 451),
            {
              538: 519,
              539: 120,
              540: 995,
              541: 993,
              556: 996,
              542: 523,
              535: 536,
            },
            178,
            "482415_239",
            _M(155),
            "Label",
            "label",
            _M(156),
            "tagN",
            { 961: 961 },
            _M(157),
            {
              466: 464,
              637: 451,
              533: 452,
              554: 448,
              594: 945,
              922: 450,
              923: 449,
              924: 948,
              925: 951,
              926: 952,
              927: 953,
              928: 492,
              929: 875,
              930: 486,
              931: 954,
              932: 861,
              933: 955,
              935: 956,
              936: 498,
              938: 497,
              939: 509,
              942: 1006,
            },
            {
              538: 919,
              539: 120,
              540: 1000,
              541: 449,
              556: 1003,
              542: 523,
              965: 464,
              966: 450,
              967: 451,
              968: 920,
              969: 449,
              806: 464,
              639: 451,
              543: 452,
              557: 448,
              596: 945,
              970: 450,
              971: 449,
              972: 948,
              973: 951,
              974: 952,
              975: 953,
              976: 492,
              977: 875,
              978: 486,
              979: 954,
              980: 861,
              981: 955,
              983: 956,
              984: 498,
              986: 497,
              987: 509,
              990: 1006,
              535: 892,
              485: 486,
            },
            183,
            _M(69),
            "482415_241",
            "Product - Test UI Elements",
            {
              538: 519,
              539: 120,
              540: 1012,
              541: 1010,
              556: 449,
              542: 523,
              535: 536,
            },
            184,
            "482415_244",
            "Okapy",
            "482415_247",
            "Scroll",
            "s:",
            " | f:",
            _T(1019, 951, 1020, 948),
            {
              538: 519,
              539: 120,
              540: 1018,
              541: 1016,
              556: 951,
              714: 1021,
              542: 523,
              535: 536,
            },
            188,
            "(^$|((^|,)482415_256($|,)))",
            "482415_256",
            197,
            _flc,
            "5693930",
            "click",
            "click0",
            "u1",
            "u2",
            "u3",
            "u4",
            "u5",
            "u6",
            "u7",
            "u8",
            {
              1031: 450,
              1032: 449,
              1033: 464,
              1034: 451,
              1035: 452,
              1036: 448,
              1037: 492,
              1038: 497,
            },
            _r,
            "_high_max_random",
            100000000000,
            10000000000000,
            _M(158),
            201,
            "/sklepy/",
            "482415_262",
            "shopStatus",
            "dl.shopStatus",
            "status",
            _M(159),
            _T(569, 1051, 571),
            "[s",
            "dl.shopID",
            "shopID",
            _M(160),
            _T(1053, 1056, 571),
            { 928: 1051 },
            {
              538: 567,
              539: 120,
              540: 1048,
              541: 1052,
              556: 1057,
              542: 455,
              976: 1051,
            },
            204,
            _M(3),
            "#(tag\x3d|share-)",
            _M(4),
            "482415_263",
            "Hash Tag URL",
            "tag\x3d",
            _T(1066, 1063),
            { 929: 1063 },
            {
              538: 567,
              539: 120,
              540: 1065,
              541: 1067,
              556: 589,
              542: 523,
              977: 1063,
              535: 536,
            },
            205,
            { 594: 1063, 922: 1063 },
            {
              538: 519,
              539: 120,
              540: 1065,
              541: 1067,
              556: 589,
              542: 523,
              596: 1063,
              970: 1063,
              535: 536,
            },
            206,
            "Form Classes",
            _M(161),
            "js_form checkout",
            "/Basket",
            _M(77),
            "paymentType",
            "(function(){return\x22PlatnosciPlTransfer\x22\x3d\x3d\x3d",
            _E(_M(77), 8, 16),
            "?$(\x22.provider.provider--selected.js_paytype\x22).find(\x22img\x22).attr(\x22alt\x22):\x22none\x22})();",
            _T(1080, 1081, 1082),
            _M(162),
            "(^$|((^|,)482415_162($|,)))",
            "482415_162",
            "Basket Payment",
            { 538: 567, 539: 120, 540: 1087, 541: 1078, 556: 1084, 542: 523 },
            210,
            "482415_2",
            "971978235",
            "device",
            "isLogged",
            "home",
            "siteType",
            "m.ceneo.pl",
            "m",
            "d",
            { 1096: 1097, 429: 1098 },
            _M(163),
            "isUserLogged",
            "No",
            { 86: 1102 },
            "Yes",
            _M(164),
            { 474: 1094, 1092: 1100, 128: 494, 120: 493, 405: 498, 1093: 1105 },
            "2V3wCOTs5FkQ--u8zwM",
            212,
            "ecomm_pcat",
            "numberOfProducts",
            _M(83),
            {
              474: 442,
              475: 1111,
              1109: 449,
              1092: 1100,
              128: 494,
              120: 493,
              405: 498,
              1093: 1105,
              443: 450,
              442: 449,
              481: 497,
              1110: 953,
              477: 464,
            },
            213,
            "482415_264",
            "searchresults",
            {
              474: 1115,
              475: 1111,
              1109: 449,
              1092: 1100,
              128: 494,
              120: 493,
              405: 498,
              1093: 1105,
              1110: 953,
            },
            214,
            _M(78),
            "gtm.load",
            "482415_269",
            {
              474: 445,
              475: 1111,
              476: 448,
              1109: 449,
              483: 1118,
              1092: 1100,
              128: 494,
              120: 493,
              405: 498,
              1093: 1105,
              443: 450,
              442: 449,
              481: 497,
              830: 492,
              477: 464,
            },
            215,
            "trans",
            "482415_235",
            "purchase",
            {
              474: 1125,
              475: 1111,
              476: 448,
              1109: 449,
              483: 1118,
              1092: 1100,
              128: 494,
              120: 493,
              405: 498,
              1093: 1105,
              443: 450,
              442: 449,
              481: 497,
              830: 492,
              477: 464,
            },
            216,
            "482415_160",
            "basketId",
            "(function(){if(\x22completed\x22\x3d\x3d\x3d",
            _E(_M(29), 8, 16),
            "){var a;a\x3dsessionStorage.getItem(\x22basketId\x22);return a.split(\x22,\x22)}if(\x22none\x22\x3d\x3d\x3d",
            ")return\x22none\x22;a\x3ddocument.getElementsByClassName(\x22name\x22).length;var b\x3d[];for(i\x3d0;i\x3ca;i++){var c\x3d/href\x3d\x22\\/([0-9]+)/,d\x3ddocument.getElementsByClassName(\x22name\x22)[i].innerHTML,c\x3dd.match(c);b.push(c[1]);b.push(c[1]+\x22b\x22)}sessionStorage.getItem(\x22basketId\x22);sessionStorage.setItem(\x22basketId\x22,b.toString());return b})();",
            _T(1130, 1131, 1132, 1131, 1133),
            _M(165),
            _M(84),
            {
              474: 408,
              475: 1135,
              476: 1136,
              1109: 521,
              1092: 1100,
              128: 494,
              120: 493,
              405: 498,
              1093: 1105,
              272: 1078,
            },
            217,
            {
              474: 1125,
              475: 1135,
              476: 1136,
              1109: 521,
              1092: 1100,
              128: 494,
              120: 493,
              405: 498,
              1093: 1105,
              272: 1078,
            },
            220,
            "google.pl/search?q\x3d",
            "(^$|((^|,)482415_278($|,)))",
            "ZnajdzWGoogle",
            "482415_278",
            _M(85),
            {
              538: 567,
              539: 120,
              540: 1143,
              541: 449,
              556: 1145,
              542: 523,
              535: 536,
            },
            221,
            "482415_344",
            _M(97),
            "482415_351",
            "Reviews",
            { 466: 86, 637: 86, 533: 1151, 554: 920, 594: 86 },
            "26",
            _M(18),
            "Q",
            "q",
            _M(166),
            {
              637: 1151,
              929: 1105,
              930: 486,
              935: 956,
              937: 957,
              939: 1154,
              1153: 1157,
            },
            "/Reviews/Shops/Reviews",
            { 535: 1159, 485: 486 },
            "\x26cd26",
            {
              538: 919,
              965: 86,
              966: 86,
              967: 1151,
              968: 920,
              969: 86,
              639: 1151,
              977: 1105,
              978: 486,
              983: 956,
              985: 957,
              987: 1154,
              1161: 1157,
              535: 1159,
              485: 486,
            },
            235,
            "start",
            "0",
            "\x26utv",
            "\x26utc",
            "\x26utl",
            "\x26utt",
            "timing",
            {
              538: 919,
              539: 1170,
              1166: 1164,
              1167: 1151,
              1168: 1149,
              1169: 1165,
              965: 86,
              966: 86,
              967: 1151,
              968: 920,
              969: 86,
              639: 1151,
              977: 1105,
              978: 486,
              983: 956,
              985: 957,
              987: 1154,
              1161: 1157,
              535: 1159,
              485: 486,
            },
            236,
            "Form ID",
            _M(167),
            "form_body_opinion",
            "ssl-TrustedAccountPoll",
            "(^$|((^|,)482415_352($|,)))",
            "482415_352",
            "submit",
            "Shop: ",
            _M(98),
            " | Delivery: ",
            _M(99),
            _T(1180, 1181, 1182, 1183),
            {
              538: 919,
              539: 120,
              540: 1151,
              541: 1179,
              556: 1184,
              542: 523,
              965: 86,
              966: 86,
              967: 1151,
              968: 920,
              969: 86,
              639: 1151,
              977: 1105,
              978: 486,
              983: 956,
              985: 957,
              987: 1154,
              1161: 1157,
              535: 1159,
              485: 486,
            },
            237,
            _M(100),
            "482415_354",
            "/Reviews/Products/Reviews",
            { 535: 1189, 485: 486 },
            {
              538: 919,
              965: 86,
              966: 86,
              967: 1151,
              968: 920,
              969: 86,
              639: 1151,
              977: 1105,
              978: 486,
              983: 956,
              985: 957,
              987: 1154,
              1161: 1157,
              535: 1189,
              485: 486,
            },
            239,
            "product review start",
            {
              538: 919,
              539: 1170,
              1166: 1193,
              1167: 1151,
              1168: 1187,
              1169: 1165,
              965: 86,
              966: 86,
              967: 1151,
              968: 920,
              969: 86,
              639: 1151,
              977: 1105,
              978: 486,
              983: 956,
              985: 957,
              987: 1154,
              1161: 1157,
              535: 1189,
              485: 486,
            },
            240,
            "https://www.ceneo.pl/ssl-ConfirmationAndProductSurvey.aspx",
            "(^$|((^|,)482415_355($|,)))",
            "482415_355",
            "Products Reviews",
            "productId: ",
            _M(101),
            _T(1200, 1201),
            {
              538: 919,
              539: 120,
              540: 1199,
              541: 1179,
              556: 1202,
              542: 523,
              965: 86,
              966: 86,
              967: 1151,
              968: 920,
              969: 86,
              639: 1151,
              977: 1105,
              978: 486,
              983: 956,
              985: 957,
              987: 1154,
              1161: 1157,
              535: 1189,
              485: 486,
            },
            241,
            "product review submit",
            "time2",
            "(function(){return(new Date).getTime()-",
            _E(_M(32), 8, 16),
            "})();",
            _T(1207, 1208, 1209),
            _M(168),
            {
              538: 919,
              539: 1170,
              1166: 1205,
              1167: 1151,
              1168: 1187,
              1169: 1211,
              965: 86,
              966: 86,
              967: 1151,
              968: 920,
              969: 86,
              639: 1151,
              977: 1105,
              978: 486,
              983: 956,
              985: 957,
              987: 1154,
              1161: 1157,
              535: 1189,
              485: 486,
            },
            242,
            "shop review submit",
            {
              538: 919,
              539: 1170,
              1166: 1214,
              1167: 1151,
              1168: 1149,
              1169: 1211,
              965: 86,
              966: 86,
              967: 1151,
              968: 920,
              969: 86,
              639: 1151,
              977: 1105,
              978: 486,
              983: 956,
              985: 957,
              987: 1154,
              1161: 1157,
              535: 1159,
              485: 486,
            },
            243,
            "paste",
            "482415_361",
            {
              637: 1151,
              929: 1105,
              930: 486,
              935: 956,
              937: 957,
              939: 1154,
              1153: 1157,
              942: 1006,
            },
            {
              538: 919,
              539: 120,
              540: 1151,
              541: 1217,
              556: 1149,
              542: 523,
              965: 86,
              966: 86,
              967: 1151,
              968: 920,
              969: 86,
              639: 1151,
              977: 1105,
              978: 486,
              983: 956,
              985: 957,
              987: 1154,
              1161: 1157,
              990: 1006,
              535: 1159,
              485: 486,
            },
            245,
            "couponClick",
            "482415_363",
            "Coupon click",
            { 538: 567, 539: 120, 540: 1224, 541: 451, 556: 585, 542: 523 },
            247,
            "dl.paging",
            "paging",
            _M(169),
            _M(114),
            "dl.sorting",
            "sorting",
            _M(170),
            _M(105),
            ".htm",
            "(;030p|;018P|;017P|PriceRange-[2-5]{1}|;997tf|-0v)",
            "482415_373",
            "Canonical",
            "filters ",
            _T(1239, 948),
            { 923: 1234 },
            {
              538: 519,
              539: 120,
              540: 1238,
              541: 449,
              556: 1240,
              542: 455,
              971: 1234,
              535: 536,
            },
            251,
            "//www.ceneo.pl/Content/img/zo/voting-01.png",
            "482415_386",
            "Ranking e-Zakupow",
            "Oddaj glos / ",
            _T(1247, 1051),
            {
              538: 519,
              539: 120,
              540: 1246,
              541: 1248,
              556: 1056,
              542: 523,
              535: 536,
            },
            252,
            _M(108),
            "482415_401",
            { 474: 445, 475: 1251, 476: 448, 1109: 449 },
            255,
            "url",
            _M(171),
            "482415_1",
            "dl.inactive",
            "inactive",
            _M(172),
            _M(109),
            _M(110),
            _M(111),
            _M(112),
            {
              533: 1234,
              554: 1260,
              594: 1261,
              922: 1262,
              923: 1263,
              924: 1264,
              925: 1154,
              926: 952,
            },
            {
              538: 630,
              543: 1234,
              557: 1260,
              596: 1261,
              970: 1262,
              971: 1263,
              972: 1264,
              973: 1154,
              974: 952,
              535: 536,
            },
            256,
            "Dedicated",
            "482415_437",
            "/ee",
            _T(1270, 536),
            { 535: 1271 },
            { 538: 567, 535: 1271 },
            263,
            "482415_443",
            "Purchase",
            _T(584, 451, 584, 450, 584, 449),
            "clickedManufacturer",
            _M(173),
            {
              538: 919,
              539: 120,
              540: 1276,
              541: 1277,
              556: 1279,
              542: 523,
              965: 464,
              966: 450,
              967: 451,
              968: 920,
              969: 449,
              806: 464,
              639: 451,
              543: 452,
              557: 448,
              596: 945,
              970: 450,
              971: 449,
              972: 948,
              973: 951,
              974: 952,
              975: 953,
              976: 492,
              977: 875,
              978: 486,
              979: 954,
              980: 911,
              981: 955,
              982: 635,
              983: 956,
              984: 498,
              985: 957,
              986: 497,
              987: 509,
              988: 960,
              989: 904,
              990: 962,
              535: 892,
              485: 486,
            },
            266,
            "detail",
            "482415_444",
            269,
            "482415_445",
            "AddToBasket",
            {
              538: 919,
              539: 120,
              540: 1286,
              541: 1277,
              556: 464,
              542: 523,
              965: 464,
              966: 450,
              967: 451,
              968: 920,
              969: 449,
              806: 464,
              639: 451,
              543: 452,
              557: 448,
              596: 945,
              970: 450,
              971: 449,
              972: 948,
              973: 951,
              974: 952,
              975: 953,
              976: 492,
              977: 875,
              978: 486,
              979: 954,
              980: 911,
              981: 955,
              982: 635,
              983: 956,
              984: 498,
              985: 957,
              986: 497,
              987: 509,
              988: 960,
              989: 904,
              990: 962,
              535: 892,
              485: 486,
            },
            271,
            "productClick",
            "482415_452",
            "ProductClick",
            {
              538: 919,
              539: 120,
              540: 1291,
              541: 1277,
              556: 464,
              542: 523,
              965: 464,
              966: 450,
              967: 451,
              968: 920,
              969: 449,
              806: 464,
              639: 451,
              543: 452,
              557: 448,
              596: 945,
              970: 450,
              971: 449,
              972: 948,
              973: 951,
              974: 952,
              975: 953,
              976: 492,
              977: 875,
              978: 486,
              979: 954,
              980: 911,
              981: 955,
              982: 635,
              983: 956,
              984: 498,
              985: 957,
              986: 497,
              987: 509,
              988: 960,
              989: 904,
              990: 962,
              535: 892,
              485: 486,
            },
            273,
            "impressions",
            "482415_457",
            275,
            _fls,
            "tran",
            "trans0",
            "transactionId",
            _M(174),
            "dl.ecommerce.price",
            "transactionProducts.0.price",
            _M(175),
            "dl.ecommerce.name",
            "transactionProducts.0.name",
            _M(176),
            "dl.ecommerce.sku",
            "transactionProducts.0.sku",
            _M(177),
            {
              1031: 450,
              1032: 449,
              1033: 1307,
              1034: 451,
              1035: 1310,
              1036: 1304,
              1037: 492,
              1038: 497,
            },
            282,
            "categ0",
            { 1031: 450, 1032: 449, 1034: 451, 1037: 953, 1038: 497 },
            283,
            "482415_467",
            _lcl,
            "482415_9",
            "2000",
            284,
            "482415_468",
            285,
            "482415_469",
            _cl,
            286,
            "482415_470",
            287,
            "482415_471",
            "482415_123",
            288,
            "482415_472",
            289,
            "482415_473",
            290,
            "482415_474",
            291,
            "482415_475",
            _fsl,
            292,
            "482415_476",
            293,
            "482415_477",
            294,
            "482415_478",
            295,
            "482415_479",
            296,
            "482415_480",
            297,
            "482415_481",
            298,
            "482415_482",
            299,
            "482415_483",
            300,
            "482415_484",
            301,
            "482415_485",
            302,
            "482415_486",
            303,
            "482415_487",
            304,
            "482415_488",
            "482415_159",
            305,
            "482415_489",
            306,
            "482415_490",
            307,
            "482415_491",
            308,
            "482415_492",
            309,
            "482415_493",
            310,
            "482415_494",
            311,
            "482415_495",
            "482415_183",
            312,
            "482415_496",
            313,
            "482415_497",
            "482415_195",
            314,
            "482415_498",
            "482415_197",
            315,
            "482415_499",
            316,
            "482415_500",
            "482415_208",
            317,
            "482415_501",
            "482415_209",
            318,
            "482415_502",
            319,
            "482415_503",
            _tl,
            "482415_212",
            "gtm.timer",
            "7000",
            320,
            "482415_504",
            321,
            "482415_505",
            322,
            "482415_506",
            323,
            "482415_507",
            324,
            "482415_508",
            325,
            "482415_509",
            326,
            "482415_510",
            327,
            "482415_511",
            328,
            "482415_512",
            "482415_254",
            329,
            "482415_513",
            "482415_255",
            330,
            "482415_514",
            331,
            ";pla",
            "GbURRsztAQ",
            "482415_515",
            "482415_261",
            "5000",
            332,
            "482415_516",
            "482415_265",
            333,
            "482415_517",
            "482415_266",
            334,
            "482415_518",
            335,
            "482415_519",
            "482415_288",
            336,
            "482415_520",
            337,
            "482415_521",
            338,
            "482415_522",
            339,
            "482415_523",
            340,
            "482415_524",
            341,
            _html,
            "482415_122",
            "Handmade|Sklepy_zagraniczne",
            "482415_207",
            "\x3cscript type\x3d\x22text/gtmscript\x22 data-gtmsrc\x3d\x22//static.criteo.net/js/ld/ld.js\x22 async\x3d\x22true\x22\x3e\x3c/script\x3e\x3cscript type\x3d\x22text/gtmscript\x22\x3ewindow.criteo_q\x3dwindow.criteo_q||[];window.criteo_q.push({event:\x22setAccount\x22,account:11746},{event:\x22setHashedEmail\x22,email:\x22",
            _E(_M(124), 7),
            "\x22},{event:\x22setSiteType\x22,type:\x22d\x22},{event:\x22viewItem\x22,item:\x22",
            _E(_M(79), 7),
            "\x22,user_segment:\x22\x22},{event:\x22viewSearch\x22,source:\x22",
            "criteomedium",
            _M(20),
            "direct",
            "null",
            { 1468: 1468, 1469: 1468 },
            "indirect",
            _E(_M(178), 7),
            "\x22});\x3c/script\x3e",
            _T(1461, 1462, 1463, 1464, 1465, 1472, 1473),
            68,
            "\x3cscript type\x3d\x22text/gtmscript\x22 data-gtmsrc\x3d\x22//static.criteo.net/js/ld/ld.js\x22 async\x3d\x22true\x22\x3e\x3c/script\x3e\n \x3cscript type\x3d\x22text/gtmscript\x22\x3ewindow.criteo_q\x3dwindow.criteo_q||[];window.criteo_q.push({event:\x22setAccount\x22,account:11746},{event:\x22setHashedEmail\x22,email:\x22",
            "\x22},{event:\x22setSiteType\x22,type:\x22d\x22},{event:\x22viewBasket\x22,new_customer:0,deduplication:",
            "deduplication",
            _M(6),
            "criteo",
            { 1480: 466 },
            _E(_M(179), 8, 16),
            ",user_segment:\x22\x22,item:[{id:\x22",
            "\x22,price:",
            _E(_M(122), 8, 16),
            ",quantity:1}]},{event:\x22viewSearch\x22,source:\x22",
            _T(
              1476,
              1462,
              1477,
              1482,
              1483,
              1464,
              1484,
              1485,
              1486,
              1472,
              1473
            ),
            69,
            "criteo.userId",
            "\x27\x27",
            { 86: 1490 },
            _E(_M(180), 7),
            "\x22},{event:\x22setSiteType\x22,type:\x22d\x22},{event:\x22viewList\x22,item:",
            _E(_M(113), 8, 16),
            ",user_segment:\x22\x22},{event:\x22viewSearch\x22,source:\x22",
            _T(1461, 1492, 1493, 1494, 1495, 1472, 1473),
            71,
            "\x22},{event:\x22setSiteType\x22,type:\x22d\x22},{event:\x22viewHome\x22,user_segment:\x22\x22},{event:\x22viewSearch\x22,source:\x22",
            _T(1461, 1492, 1498, 1472, 1473),
            72,
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3e!function(b,e,f,g,a,c,d){b.fbq||(a\x3db.fbq\x3dfunction(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq\x3da),a.push\x3da,a.loaded\x3d!0,a.version\x3d\x222.0\x22,a.queue\x3d[],c\x3de.createElement(f),c.async\x3d!0,c.src\x3dg,d\x3de.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\x22script\x22,\x22//connect.facebook.net/en_US/fbevents.js\x22);fbq(\x22init\x22,\x22542018509266948\x22);fbq(\x22track\x22,\x22PageView\x22);\nfbq(\x22track\x22,\x22ViewContent\x22,{content_category:\x22",
            _E(_M(103), 7),
            "\x22,content_name:\x22",
            _E(_M(123), 7),
            "\x22,content_ids:[\x22",
            "\x22],content_type:\x22product\x22,value:\x22",
            _E(_M(122), 7),
            "\x22,currency:\x22PLN\x22});\x3c/script\x3e\n\n\x3cnoscript\x3e\x3cimg height\x3d\x221\x22 width\x3d\x221\x22 style\x3d\x22display:none\x22 src\x3d\x22https://www.facebook.com/tr?id\x3d542018509266948\x26amp;ev\x3dPageView\x26amp;noscript\x3d1\x22\x3e\x3c/noscript\x3e",
            _T(1501, 1502, 1503, 1504, 1505, 1464, 1506, 1507, 1508),
            73,
            "/UnknownError",
            "482415_172",
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3e(function(a,e,f,g,b,c,d){a.GoogleAnalyticsObject\x3db;a[b]\x3da[b]||function(){(a[b].q\x3da[b].q||[]).push(arguments)};a[b].l\x3d1*new Date;c\x3de.createElement(f);d\x3de.getElementsByTagName(f)[0];c.async\x3d1;c.src\x3dg;d.parentNode.insertBefore(c,d)})(window,document,\x22script\x22,\x22//www.google-analytics.com/analytics.js\x22,\x22ga\x22);var pserver\x3ddocument.getElementsByClassName(\x22machine\x22)[0].innerHTML,pserver\x3d\x22/\x22+pserver.trim()+window.location.pathname+window.location.search;ga(\x22create\x22,\x22UA-51159636-5\x22,\x22auto\x22,\x22errTracker\x22);\nga(\x22errTracker.send\x22,\x22pageview\x22,pserver);\x3c/script\x3e",
            111,
            "482415_168",
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3e(function(d,h,q,z){var u\x3d{minHeight:0,elements:[],percentage:!0,userTiming:!0,pixelDepth:!0,nonInteraction:!0},k\x3dd(h),f\x3d[],l,n,e;d.scrollDepth\x3dfunction(b){function r(a,c){e?e({event:\x22ScrollDistance\x22,eventCategory:\x22Scroll Depth\x22,eventAction:a,eventLabel:\x22Baseline\x22,eventValue:1,eventNonInteraction:!0}):(l\x26\x26ga(\x22send\x22,\x22event\x22,\x22Scroll Depth\x22,a,\x22Baseline\x22,1,{nonInteraction:!0}),n\x26\x26_gaq.push([\x22_trackEvent\x22,\x22Scroll Depth\x22,a,\x22Baseline\x22,1,!0]))}function t(a,c,d,p){e?(e({event:\x22ScrollDistance\x22,eventCategory:\x22Scroll Depth\x22,\neventAction:a,eventLabel:c,eventValue:1,eventNonInteraction:b.nonInteraction}),b.userTiming\x26\x263\x3carguments.length\x26\x26e({event:\x22ScrollTiming\x22,eventCategory:\x22Scroll Depth\x22,eventAction:a,eventLabel:c,eventTiming:p})):(l\x26\x26(ga(\x22send\x22,\x22event\x22,\x22Scroll Depth\x22,a,c,1,{nonInteraction:b.nonInteraction}),b.userTiming\x26\x263\x3carguments.length\x26\x26ga(\x22send\x22,\x22timing\x22,\x22Scroll Depth\x22,a,p,c)),n\x26\x26(_gaq.push([\x22_trackEvent\x22,\x22Scroll Depth\x22,a,c,1,b.nonInteraction]),b.userTiming\x26\x263\x3carguments.length\x26\x26_gaq.push([\x22_trackTiming\x22,\x22Scroll Depth\x22,\na,p,c,100])))}function v(a,c,b){d.each(a,function(a,g){-1\x3d\x3d\x3dd.inArray(a,f)\x26\x26c\x3e\x3dg\x26\x26(t(\x22Percentage\x22,a,c,b),f.push(a))})}function w(a,c,b){d.each(a,function(a,g){-1\x3d\x3d\x3dd.inArray(g,f)\x26\x26d(g).length\x26\x26c\x3e\x3dd(g).offset().top\x26\x26(t(\x22Elements\x22,g,c,b),f.push(g))})}function x(a,b){var d,e,g,f\x3dnull,m\x3d0,k\x3dfunction(){m\x3dnew Date;f\x3dnull;g\x3da.apply(d,e)};return function(){var h\x3dnew Date;m||(m\x3dh);var l\x3db-(h-m);d\x3dthis;e\x3darguments;0\x3e\x3dl?(clearTimeout(f),f\x3dnull,m\x3dh,g\x3da.apply(d,e)):f||(f\x3dsetTimeout(k,l));return g}}var y\x3d+new Date;\nb\x3dd.extend({},u,b);d(q).height()\x3cb.minHeight||(\x22function\x22\x3d\x3d\x3dtypeof ga\x26\x26(l\x3d!0),\x22undefined\x22!\x3d\x3dtypeof _gaq\x26\x26\x22function\x22\x3d\x3d\x3dtypeof _gaq.push\x26\x26(n\x3d!0),\x22function\x22\x3d\x3d\x3dtypeof b.eventHandler?e\x3db.eventHandler:\x22undefined\x22!\x3d\x3dtypeof dataLayer\x26\x26\x22function\x22\x3d\x3d\x3dtypeof dataLayer.push\x26\x26(e\x3ddataLayer.push),b.percentage?r(\x22Percentage\x22):b.elements\x26\x26r(\x22Elements\x22),k.on(\x22scroll.scrollDepth\x22,x(function(){var a\x3dd(q).height(),c\x3dh.innerHeight?h.innerHeight:k.height(),c\x3dk.scrollTop()+c,a\x3d{\x2225%\x22:parseInt(.25*a,10),\x2250%\x22:parseInt(.5*\na,10),\x2275%\x22:parseInt(.75*a,10),\x22100%\x22:a-5},e\x3d+new Date-y;f.length\x3e\x3d4+b.elements.length?k.off(\x22scroll.scrollDepth\x22):(b.elements\x26\x26w(b.elements,c,e),b.percentage\x26\x26v(a,c,e))},500)))}})(jQuery,window,document);jQuery.scrollDepth();\x3c/script\x3e",
            128,
            _M(42),
            "482415_186",
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3e$(\x22body\x22).on(\x22change\x22,\x22#showcase\x22,function(){dataLayer.push({event:\x22change-event\x22})});\x3c/script\x3e",
            130,
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3e$(\x22.product-offer.js_product-offer\x22).on(\x22click\x22,function(){window.dataLayer\x3dwindow.dataLayer||[];dataLayer.push({event:\x22trans\x22,transactionId:\x22",
            _E(_M(144), 7),
            "\x22,transactionAffiliation:$(this).closest(\x22.product-offer.js_product-offer\x22).find(\x22img[class|\\x3d\x27js_lazy\x27]\x22).attr(\x22alt\x22),transactionTotal:1,transactionTax:0,transactionShipping:0,transactionProducts:[{sku:\x22",
            "\x22,name:\x22",
            "\x22,category:\x22",
            "\x22,price:$(this).closest(\x22.product-offer.js_product-offer\x22).attr(\x22data-offer-price\x22),\nquantity:1}]})});\x3c/script\x3e",
            _T(1522, 1523, 1524, 1464, 1525, 1504, 1526, 1502, 1527),
            175,
            "visibility",
            "482415_237",
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3e\x3c/script\x3e",
            180,
            "(Category|Oferty)",
            "482415_347",
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3e$(\x22.box\x22).on(\x22click\x22,function(){window.dataLayer\x3dwindow.dataLayer||[];dataLayer.push({event:\x22boxRow\x22,category:\x22Wiersz produktowy\x22,action:$(this).find(\x22a\x22).attr(\x22title\x22),label:$(this).find(\x22a\x22).attr(\x22data-pid\x22)})});$(\x22.cat-prod-row.js_category-list-item.js_man-track-event[data-ppvs]\x22).on(\x22click\x22,function(){window.dataLayer\x3dwindow.dataLayer||[];dataLayer.push({event:\x22boxRow\x22,category:\x22Pozycjoner\x22,action:$(this).find(\x22a\x22).attr(\x22title\x22),label:$(this).find(\x22span[data-pid]\x22).attr(\x22data-pid\x22)})});\x3c/script\x3e",
            182,
            "disabled",
            "482415_246",
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3erequire([\x22domReady!\x22,\x22Shared/utils/utils\x22,\x22jquery\x22],function(c,b,a){a(document).on(\x22scroll\x22,b.debounce(function(){0\x3c\x3da(window).scrollTop()-a(\x22.ado-common.ado-row\x22).offset().top\x26\x26(dataLayer.push({event:\x22scroll\x22}),a(document).off(\x22scroll\x22))},500))});\x3c/script\x3e",
            187,
            "(^$|((^|,)482415_261($|,)))",
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3elocation.hash\x3d\x22#tab\\x3dclick\x22;\x3c/script\x3e",
            202,
            "transactionProducts.sku",
            "(^$|((^|,)482415_265($|,)))",
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3e!function(b,e,f,g,a,c,d){b.fbq||(a\x3db.fbq\x3dfunction(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq\x3da),a.push\x3da,a.loaded\x3d!0,a.version\x3d\x222.0\x22,a.queue\x3d[],c\x3de.createElement(f),c.async\x3d!0,c.src\x3dg,d\x3de.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\x22script\x22,\x22//connect.facebook.net/en_US/fbevents.js\x22);fbq(\x22init\x22,\x22542018509266948\x22);fbq(\x22track\x22,\x22PageView\x22);\nfbq(\x22track\x22,\x22Purchase\x22,{content_category:\x22",
            "\x22],content_type:\x22product\x22,content_name:\x22",
            "\x22,value:\x22",
            _T(1547, 1502, 1505, 1464, 1548, 1504, 1549, 1507, 1508),
            222,
            _M(90),
            "482415_286",
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3e!function(b,e,f,g,a,c,d){b.fbq||(a\x3db.fbq\x3dfunction(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq\x3da),a.push\x3da,a.loaded\x3d!0,a.version\x3d\x222.0\x22,a.queue\x3d[],c\x3de.createElement(f),c.async\x3d!0,c.src\x3dg,d\x3de.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\x22script\x22,\x22//connect.facebook.net/en_US/fbevents.js\x22);fbq(\x22init\x22,\x22542018509266948\x22);fbq(\x22track\x22,\x22PageView\x22);\nfbq(\x22track\x22,\x22ViewCategory\x22,{content_category:\x22",
            "\x22,content_ids:",
            _E(_M(90), 8, 16),
            ",content_type:\x22product\x22});\x3c/script\x3e\n\n\x3cnoscript\x3e\x3cimg height\x3d\x221\x22 width\x3d\x221\x22 style\x3d\x22display:none\x22 src\x3d\x22https://www.facebook.com/tr?id\x3d542018509266948\x26amp;ev\x3dPageView\x26amp;noscript\x3d1\x22\x3e\x3c/noscript\x3e",
            _T(1554, 1502, 1555, 1556, 1557),
            223,
            "803b078fc6f1b1eb6dc420217a65925e",
            _M(96),
            "482415_320",
            "h",
            "482415_327",
            "/lp/",
            _M(117),
            "482415_426",
            231,
            "int.ceneotest.pl",
            "482415_202",
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3eif(0\x3c$(\x22.js_coupon-badge\x22).length)$(\x22.js_coupon-badge\x22).on(\x22click\x22,function(){window.dataLayer\x3dwindow.dataLayer||[];window.dataLayer.push({event:\x22couponClick\x22})});\x3c/script\x3e",
            244,
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3e$(\x22.text\x22).on(\x22paste\x22,function(){window.dataLayer\x3dwindow.dataLayer||[];window.dataLayer.push({event:\x22paste\x22})});\x3c/script\x3e",
            246,
            "482415_398",
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3e!function(b,e,f,g,a,c,d){b.fbq||(a\x3db.fbq\x3dfunction(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq\x3da),a.push\x3da,a.loaded\x3d!0,a.version\x3d\x222.0\x22,a.queue\x3d[],c\x3de.createElement(f),c.async\x3d!0,c.src\x3dg,d\x3de.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\x22script\x22,\x22//connect.facebook.net/en_US/fbevents.js\x22);fbq(\x22init\x22,\x22542018509266948\x22);fbq(\x22track\x22,\x22PageView\x22);\x3c/script\x3e\n\n\x3cnoscript\x3e\x3cimg height\x3d\x221\x22 width\x3d\x221\x22 style\x3d\x22display:none\x22 src\x3d\x22https://www.facebook.com/tr?id\x3d542018509266948\x26amp;ev\x3dPageView\x26amp;noscript\x3d1\x22\x3e\x3c/noscript\x3e",
            254,
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3e$(\x22.grid-item[data-shopurl]\x22).on(\x22click\x22,function(){var a;a\x3d\x22grid-row\x22\x3d\x3d\x3d$(this)[0].parentNode.className?\x22listing\x22:\x22other\x22;dataLayer.push({event:\x22trans\x22,transactionId:\x22",
            "\x22,transactionAffiliation:$(this)[0].dataset.shopurl,transactionTotal:1,transactionTax:0,transactionShipping:0,transactionProducts:[{sku:$(this)[0].dataset.pid,name:$(this)[0].dataset.brand,category:\x22",
            "\x22,price:$(this)[0].dataset.price,quantity:1}],placement:a})});\x3c/script\x3e",
            _T(1578, 1523, 1579, 1502, 1580),
            257,
            "\x22},{event:\x22setSiteType\x22,type:\x22d\x22},{event:\x22viewItem\x22,item:",
            _T(1461, 1492, 1583, 291, 1495, 1472, 1473),
            258,
            ",user_segment:\x22\x22,item:",
            _E(_M(116), 8, 16),
            "},{event:\x22viewSearch\x22,source:\x22",
            _T(1476, 1462, 1477, 1482, 1586, 1587, 1588, 1472, 1473),
            259,
            "\x22},{event:\x22setSiteType\x22,type:\x22d\x22},{event:\x22trackTransaction\x22,id:",
            _E(_M(174), 8, 16),
            ",new_customer:0,deduplication:",
            _T(
              1476,
              1462,
              1591,
              1592,
              1593,
              1482,
              1586,
              1587,
              1588,
              1472,
              1473
            ),
            260,
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3e$(\x22div[data-shopurl]\x22).on(\x22click\x22,function(){window.dataLayer\x3dwindow.dataLayer||[];window.dataLayer.push({ecommerce:{purchase:{actionField:{id:$(this)[0].dataset.gaproductid,affiliation:$(this)[0].dataset.shopurl,revenue:1,tax:0,shipping:0},products:[{name:$(this)[0].dataset.gaproductname,id:$(this)[0].dataset.productid,price:1,brand:$(this)[0].dataset.brand,category:$(this)[0].dataset.gacategoryname,quantity:1}]}},event:\x22purchase\x22})});\x3c/script\x3e",
            262,
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3e$(\x27tr[data-id] a[href^\\x3d\x22/Click/Offer/\x22]\x27).on(\x22click\x22,function(){var a\x3d$(this).closest(\x22tr\x22)[0],b\x3d\x22\x22;for(x\x3d1;10\x3ex;x++){var c\x3d\x22cat\x22+x;window.dataLayer[0][c]\x26\x26(b\x3db+\x22/\x22+window.dataLayer[0][c])}window.dataLayer\x3dwindow.dataLayer||[];dataLayer.push({event:\x22purchase\x22,ecommerce:{currencyCode:\x22PLN\x22,purchase:{actionField:{list:",
            ",id:a.dataset.id,affiliation:a.dataset.shopurl,revenue:1,tax:0,shipping:0,coupon:\x22\x22},products:[{name:a.dataset.brand,id:a.dataset.productid,price:a.dataset.price,\nbrand:a.dataset.brand,category:b,variant:a.dataset.city,quantity:1,coupon:\x22\x22}]}}})});\x3c/script\x3e",
            _T(1598, 88, 1599),
            265,
            "482415_455",
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3e$(\x22div[data-shopurl]\x22).on(\x22click\x22,function(){var a\x3d\x22\x22;for(x\x3d1;10\x3ex;x++){var b\x3d\x22cat\x22+x;window.dataLayer[0][b]\x26\x26(a\x3da+\x22/\x22+window.dataLayer[0][b])}window.dataLayer\x3dwindow.dataLayer||[];dataLayer.push({event:\x22purchase\x22,clickedManufacturer:$(this)[0].dataset.brand,ecommerce:{currencyCode:\x22PLN\x22,purchase:{actionField:{list:",
            ",id:$(this)[0].dataset.id,affiliation:$(this)[0].dataset.shopurl,revenue:1,tax:0,shipping:0,coupon:\x22\x22},products:[{name:$(this)[0].dataset.brand,id:$(this)[0].dataset.productid,\nprice:$(this)[0].dataset.price,brand:$(this)[0].dataset.brand,category:a,variant:$(this)[0].dataset.city,quantity:1,coupon:\x22\x22}]}}})});\x3c/script\x3e",
            _T(1603, 88, 1604),
            267,
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3evar category\x3d\x22\x22;for(x\x3d1;10\x3ex;x++){var catn\x3d\x22cat\x22+x;window.dataLayer[0][catn]\x26\x26(category\x3dcategory+\x22/\x22+window.dataLayer[0][catn])}window.dataLayer\x3dwindow.dataLayer||[];dataLayer.push({event:\x22detail\x22,ecommerce:{currencyCode:\x22PLN\x22,detail:{actionField:{list:",
            "},products:[{id:",
            ",name:",
            _E(_M(123), 8, 16),
            ",price:",
            ",brand:",
            ",category:category,position:0}]}}});\x3c/script\x3e",
            _T(1607, 88, 1608, 285, 1609, 1610, 1611, 1485, 1612, 1610, 1613),
            268,
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3eif($(\x27[data-trackinfotype\\x3d\x22Basket\x22]\x27)[0])$(\x27[data-trackinfotype\\x3d\x22Basket\x22]\x27).on(\x22click\x22,function(){var a\x3d\x22\x22;for(x\x3d1;10\x3ex;x++){var b\x3d\x22cat\x22+x;window.dataLayer[0][b]\x26\x26(a\x3da+\x22/\x22+window.dataLayer[0][b])}window.dataLayer\x3dwindow.dataLayer||[];dataLayer.push({event:\x22addToBasket\x22,ecommerce:{currencyCode:\x22PLN\x22,add:{actionField:{list:",
            ",category:a,position:0,quantity:1}]}}})});\x3c/script\x3e",
            _T(1616, 88, 1608, 285, 1609, 1610, 1611, 1485, 1612, 1610, 1617),
            270,
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3e$(\x22.site-left-content div[data-pid]\x22).on(\x22click\x22,function(){var b\x3d\x22\x22;for(i\x3d1;10\x3ei;i++){var a\x3d\x22cat\x22+i;window.dataLayer[0][a]\x26\x26(b\x3db+\x22/\x22+window.dataLayer[0][a])}a\x3d$(\x22.site-left-content div[data-pid]\x22);for(i\x3d0;i\x3ca.length;i++)if($(this)[0].dataset.pid\x3d\x3d\x3da[i].dataset.pid)var c\x3di+1;window.dataLayer\x3dwindow.dataLayer||[];dataLayer.push({event:\x22productClick\x22,ecommerce:{currencyCode:\x22PLN\x22,click:{actionField:{list:",
            "},products:[{id:$(this)[0].dataset.pid,category:b,position:c}]}}})});\x3c/script\x3e",
            _T(1620, 88, 1621),
            272,
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3evar _category_impression\x3d[],_category_path\x3d\x22\x22;for(x\x3d1;10\x3ex;x++){var _category_n\x3d\x22cat\x22+x;window.dataLayer[0][_category_n]\x26\x26(_category_path\x3d_category_path+\x22/\x22+window.dataLayer[0][_category_n])}$(\x22.site-left-content div[data-pid]\x22).each(function(a){_category_impression.push({id:$(this)[0].dataset.pid,category:_category_path,position:a+1,list:",
            "});if(30\x3d\x3d\x3da)return!1});window.dataLayer\x3dwindow.dataLayer||[];dataLayer.push({event:\x22impressions\x22,ecommerce:{currencyCode:\x22PLN\x22,impressions:_category_impression}});\x3c/script\x3e",
            _T(1624, 88, 1625),
            274,
            "482415_2147479553",
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3evar pp_gemius_identifier\x3dnew String(\x22.AibIDB0yJvrPZ0SVUI5_Ke1fdpg.W7qmSVjYTxD4KL.V7\x22);function gemius_pending(a){window[a]\x3dwindow[a]||function(){var b\x3dwindow[a+\x22_pdata\x22]\x3dwindow[a+\x22_pdata\x22]||[];b[b.length]\x3darguments}}gemius_pending(\x22gemius_hit\x22);gemius_pending(\x22gemius_event\x22);gemius_pending(\x22pp_gemius_hit\x22);gemius_pending(\x22pp_gemius_event\x22);\n(function(a,b){try{var c\x3da.createElement(b),d\x3da.getElementsByTagName(b)[0],e\x3d\x22http\x22+(\x22https:\x22\x3d\x3dlocation.protocol?\x22s\x22:\x22\x22);c.setAttribute(\x22async\x22,\x22async\x22);c.setAttribute(\x22defer\x22,\x22defer\x22);c.src\x3de+\x22://gapl.hit.gemius.pl/xgemius.js\x22;d.parentNode.insertBefore(c,d)}catch(f){}})(document,\x22script\x22);\x3c/script\x3e",
            279,
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3evar pp_gemius_identifier\x3dnew String(\x22.KiVJD.0bW9LfdPlvR52RvTXHSdddK_NSD4TiFeZsIf.T7\x22);function gemius_pending(a){window[a]\x3dwindow[a]||function(){var b\x3dwindow[a+\x22_pdata\x22]\x3dwindow[a+\x22_pdata\x22]||[];b[b.length]\x3darguments}}gemius_pending(\x22gemius_hit\x22);gemius_pending(\x22gemius_event\x22);gemius_pending(\x22pp_gemius_hit\x22);gemius_pending(\x22pp_gemius_event\x22);\n(function(a,b){try{var c\x3da.createElement(b),d\x3da.getElementsByTagName(b)[0],e\x3d\x22http\x22+(\x22https:\x22\x3d\x3dlocation.protocol?\x22s\x22:\x22\x22);c.setAttribute(\x22async\x22,\x22async\x22);c.setAttribute(\x22defer\x22,\x22defer\x22);c.src\x3de+\x22://gapl.hit.gemius.pl/xgemius.js\x22;d.parentNode.insertBefore(c,d)}catch(f){}})(document,\x22script\x22);\x3c/script\x3e",
            280,
            "\x3cscript type\x3d\x22text/gtmscript\x22\x3evar pp_gemius_identifier\x3dnew String(\x22oqg7A.eLuGSmDZeuCkcWzvUJP_hd64dG6I2AN18r9Vf.k7\x22);function gemius_pending(a){window[a]\x3dwindow[a]||function(){var b\x3dwindow[a+\x22_pdata\x22]\x3dwindow[a+\x22_pdata\x22]||[];b[b.length]\x3darguments}}gemius_pending(\x22gemius_hit\x22);gemius_pending(\x22gemius_event\x22);gemius_pending(\x22pp_gemius_hit\x22);gemius_pending(\x22pp_gemius_event\x22);\n(function(a,b){try{var c\x3da.createElement(b),d\x3da.getElementsByTagName(b)[0],e\x3d\x22http\x22+(\x22https:\x22\x3d\x3dlocation.protocol?\x22s\x22:\x22\x22);c.setAttribute(\x22async\x22,\x22async\x22);c.setAttribute(\x22defer\x22,\x22defer\x22);c.src\x3de+\x22://gapl.hit.gemius.pl/xgemius.js\x22;d.parentNode.insertBefore(c,d)}catch(f){}})(document,\x22script\x22);\x3c/script\x3e\n\n",
            281,
            "element id",
            "element target",
            "gtm.elementTarget",
            "history new url fragment",
            "gtm.newUrlFragment",
            "history old url fragment",
            "gtm.oldUrlFragment",
            "history new state",
            "gtm.newHistoryState",
            "history old state",
            "gtm.oldHistoryState",
            "dl.cat3",
            "cat3",
            "dl.cat4",
            "cat4",
            "source",
            "utm_source",
            "noOffers",
            { 1165: 1165 },
            "deduplication1",
            "rtbhouse",
            "false",
            { 1655: 1656 },
            "dl.products",
            "products",
            "timerTest",
            _E(_M(35), 8, 16),
            ";return a})();",
            _T(33, 1661, 1662),
            "dataType",
            "gtm.element.dataset.type",
            "userActivities conv",
            "+\x22|\x22+",
            _E(_M(50), 8, 16),
            "\x3d\x3d\x3d",
            _E(_M(47), 8, 16),
            "?\x22true\x22:\x22none\x22})();",
            _T(2, 285, 1667, 1668, 1669, 1670, 1671),
            "Action",
            "action",
            "dl.productID1Price",
            "minPrice1",
            "dl.productID2Price",
            "minPrice2",
            "dl.productID3Price",
            "minPrice3",
            "dl.cat5",
            "cat5",
            "dl.cat6",
            "cat6",
            "dl.courierId",
            "courierId",
            "data ppvs",
            "gtm.element.dataset.ppvs",
            _j,
            "platform",
            "clientInformation.platform",
            "ua form",
            "UA-51159636-10",
            "googletag.getEventLog",
            "copyType",
            "copyValue",
            "id_adroll",
            "Sukienki",
            "Torebki_damskie",
            "e197821f",
            "2af7bf03",
            { 1698: 1700, 1699: 1701 },
            "basketId2",
            "(function(){if(\x22completed\x22!\x3d\x3d",
            "){if(\x22none\x22\x3d\x3d\x3d",
            ")return\x22none\x22;var c\x3ddocument.getElementsByClassName(\x22name\x22).length,b\x3d[];for(i\x3d0;i\x3cc;i++){var a\x3d/href\x3d\x22\\/([0-9]+)/,d\x3ddocument.getElementsByClassName(\x22name\x22)[i].innerHTML,a\x3dd.match(a);b.push(a[1])}return b}})();",
            _T(1704, 1131, 1705, 1131, 1706),
            "timeUnique",
            "gtm.time.uniqueEventId",
            "ecommerce.product",
            "){var a\x3d[],b\x3d[",
            ",",
            _E(_M(127), 8, 16),
            _E(_M(188), 8, 16),
            _E(_M(189), 8, 16),
            _E(_M(201), 8, 16),
            _E(_M(202), 8, 16),
            "],c\x3d\x22\x22;for(i\x3d0;i\x3cb.length;i++)\x22none\x22!\x3d\x3db[i]\x26\x26(c\x3dc+\x22/\x22+b[i]);a.push({id:",
            ",category:c,variant:",
            _E(_M(64), 8, 16),
            ",position:0});a\x3d{actionField:{list:\x22/\x22+",
            "},\nproducts:a};return a\x3d{ecommerce:{detail:a}}}return\x22none\x22})();",
            _T(
              277,
              88,
              1711,
              367,
              1712,
              1713,
              1712,
              1714,
              1712,
              1715,
              1712,
              1716,
              1712,
              1717,
              1718,
              285,
              1609,
              1610,
              1611,
              1485,
              1612,
              1610,
              1719,
              1720,
              1721,
              367,
              368,
              371,
              1722
            ),
            "dl.placement",
            "placement",
            "transactionProducts.price",
            "Event",
            "Click Target",
            "Form Element",
            "New History Fragment",
            _c,
            "Container ID",
            "GTM-TPPTSM",
            _hid,
            "HTML ID",
          ],
          b = [],
          c = 0;
        c < a.length;
        c++
      )
        b[c] = Tj(c, a);
      return b;
    })()
  );
  Wj(
    Jj,
    0,
    "35:0,43:1,35:3,43:4,45:7,43:8,45:10,43:11,45:13,43:14,45:16,43:17,45:19,43:20,45:22,43:23,45:25,43:26,45:28,43:29,45:31,43:32,35:34,43:35,53:36,45:39,43:40,45:42,43:43,45:45,43:46,45:48,43:49,45:51,43:52,43:53,53:54,45:58,43:59,35:64,43:65,45:69,43:70,45:72,43:73,45:75,43:76,43:77,53:78,45:81,43:82,43:84,53:85,22:86,19:87,45:94,43:95,45:97,43:98,45:100,43:101,43:102,53:103,45:106,43:107,43:109,15:110,45:113,43:114,45:116,43:117,35:119,43:120,43:123,53:124,45:127,43:128,45:130,43:131,43:133,45:136,43:137,45:140,43:141,43:143,15:144,60:145,45:148,43:149,45:151,43:152,45:154,43:155,45:157,43:158,43:161,53:162,43:165,53:166,45:169,43:170,45:172,43:173,43:174,45:177,43:178,45:180,43:181,45:183,43:184,45:187,43:188,45:190,43:191,45:194,43:195,43:197,45:200,43:201,45:206,43:207,45:209,43:210,35:212,43:213,11:214,45:218,43:219,45:223,43:224,45:226,43:227,45:230,43:231,45:233,43:234,43:235,45:242,43:243,45:246,43:247,45:250,43:251,45:253,43:254,45:256,43:257,45:259,43:260,45:262,43:263,45:265,43:266,45:268,43:269,45:271,43:272,45:275,43:276,45:279,43:280,43:283,53:284,43:289,53:290,43:293,53:294,43:296,53:297,45:300,43:301,45:303,43:304,45:306,43:307,35:308,43:309,45:313,43:314,45:316,43:317,43:320,53:321,45:324,43:325,45:330,43:331,45:333,43:334,45:336,43:337,45:339,43:340,45:342,43:343,45:346,43:347,45:349,43:350,45:352,43:353,45:355,43:356,45:358,43:359,45:361,43:362,43:365,53:366,43:369,53:370,45:373,43:374,45:376,43:377,43:379,53:380,45:383,43:384,45:388,43:389,45:391,43:392,45:394,43:395,45:397,43:398,45:400,43:401,45:404,43:405,43:407,53:408,45:411,43:412,45:414,43:415,45:418,43:419,45:421,35:422,9:423,10:424,35:425,43:426,15:427,9:428,10:429,43:430,9:431,10:432,35:433,43:434,53:435,22:436,9:437,10:438,35:440,38:441,43:446,53:447,18:453,64:454,55:455,38:456,43:462,53:463,18:467,46:468,64:469,9:451,10:470,10:471,38:473,43:484,53:485,43:487,60:488,43:490,53:491,43:495,53:496,18:507,64:508,9:509,10:510,9:511,10:512,10:513,35:515,35:516,43:517,77:466,78:518,0:519,69:455,29:520,30:521,31:522,48:523,16:524,12:455,14:455,23:455,24:455,62:455,20:523,34:523,64:525,9:526,10:527,10:528,39:455,35:530,0:531,28:523,27:523,7:455,30:532,29:526,54:455,25:534,33:537,6:544,26:455,64:545,0:518,6:546,64:547,9:522,10:548,10:549,30:551,29:552,31:553,25:555,6:558,64:559,10:560,35:561,10:562,10:563,10:564,72:455,43:566,78:531,0:567,30:568,29:522,31:572,54:523,6:573,26:523,64:574,43:575,9:576,10:577,9:578,10:579,10:580,10:581,30:582,29:578,31:585,6:586,64:587,9:588,10:466,9:589,10:590,30:592,29:593,31:593,25:595,6:597,64:598,9:599,10:600,10:601,29:604,31:599,6:605,64:606,9:607,10:608,10:442,10:610,29:607,30:612,5:523,3:523,4:455,41:524,40:524,8:523,17:524,64:613,9:614,10:615,9:616,10:617,10:618,30:620,29:621,31:623,6:624,64:625,10:626,43:628,78:629,0:630,30:631,29:633,31:636,25:638,6:640,64:641,10:642,10:643,30:645,29:647,31:649,25:650,6:651,64:652,9:653,10:654,43:657,53:658,29:660,30:661,64:662,10:663,31:665,6:666,64:667,10:668,43:671,31:673,6:674,64:675,10:676,9:677,10:678,10:679,29:681,31:683,6:684,64:685,10:686,9:687,10:86,10:688,10:689,10:690,30:692,29:687,6:693,64:694,43:695,53:696,9:697,10:698,10:699,10:700,43:702,78:703,0:704,43:705,53:706,30:707,43:708,53:709,29:710,31:697,43:711,53:712,32:713,6:715,64:716,9:717,10:718,10:719,30:721,35:722,43:723,42:614,49:727,29:728,31:486,6:729,64:730,10:731,9:732,43:733,9:734,10:735,10:736,29:738,31:732,6:739,64:740,9:741,10:742,30:744,29:741,31:745,6:746,64:747,10:458,9:748,10:749,9:750,10:751,30:141,29:753,31:750,32:466,6:754,64:755,9:756,10:757,29:756,6:759,64:760,10:761,10:762,10:763,29:765,31:766,6:767,64:768,9:769,30:771,29:769,31:773,6:774,64:775,10:776,73:523,21:523,6:778,64:779,10:780,9:781,10:782,10:783,31:781,6:785,64:786,10:787,30:789,29:589,6:790,64:791,10:792,10:793,30:795,29:745,31:796,6:797,64:798,10:799,10:800,30:802,29:803,31:614,25:804,51:805,6:808,64:809,10:810,10:811,30:813,29:814,31:677,6:815,64:816,43:817,53:818,9:819,10:820,10:821,30:823,29:824,31:826,6:827,64:828,38:829,18:832,64:833,9:834,10:835,43:836,9:837,9:450,10:838,10:839,30:207,29:841,31:452,6:842,64:843,9:844,10:845,10:846,10:847,30:844,29:449,31:849,6:850,64:851,10:852,10:853,43:854,45:860,9:861,10:862,35:864,43:865,33:867,6:868,64:869,6:870,64:871,9:536,10:872,43:873,53:874,9:875,35:876,9:877,56:455,30:879,29:880,6:881,64:882,43:883,42:451,49:891,9:892,43:893,45:903,9:904,43:906,45:910,9:911,10:912,10:913,9:915,43:917,78:918,0:919,16:921,43:943,53:944,43:946,53:947,43:949,53:950,43:958,53:959,43:961,60:961,25:963,33:964,6:991,64:992,9:993,30:995,29:993,31:996,6:997,64:998,10:82,43:458,53:442,30:1000,43:1001,53:1002,31:1003,43:1004,42:962,49:1005,25:1007,6:1008,64:1009,9:1010,30:1012,29:1010,31:449,6:1013,64:1014,9:449,10:1016,10:753,30:1018,29:1016,31:951,32:1021,6:1022,64:1023,10:1024,64:1026,35:1027,2:1028,36:1029,1:1030,18:1039,35:1040,43:1041,52:1042,50:1043,58:1044,74:523,64:1045,10:1046,30:1048,43:1049,53:1050,29:1052,43:1054,53:1055,31:1057,25:1058,6:1059,64:1060,9:1061,10:1062,9:1063,30:1065,29:1067,31:589,25:1068,6:1069,64:1070,25:1071,6:1072,64:1073,43:1074,9:1075,10:1076,10:1077,9:1078,43:1079,45:1083,9:1084,10:1085,30:1087,29:1078,31:1084,6:1088,64:1089,38:1091,43:1095,42:837,49:1099,43:1101,42:486,49:1103,22:1104,18:1106,46:1107,64:1108,18:1112,64:1113,10:885,18:1116,64:1117,9:1118,10:1119,18:1121,64:1122,10:1123,18:1126,64:1127,10:521,43:1129,45:1134,18:1137,64:1138,18:1139,64:1140,10:1141,10:1142,30:1143,31:1145,6:1146,64:1147,9:1149,16:1152,43:1155,60:1156,25:1158,33:1160,6:1162,64:1163,70:455,68:1164,65:1151,66:1149,67:1165,6:1171,64:1172,43:1173,9:1174,10:1175,10:1176,10:1177,30:1151,29:1179,31:1184,6:1185,64:1186,9:1187,33:1190,6:1191,64:1192,68:1193,66:1187,6:1194,64:1195,10:1196,10:1197,30:1199,31:1202,6:1203,64:1204,68:1205,43:1206,45:1210,67:1211,6:1212,64:1213,68:1214,6:1215,64:1216,10:1217,29:1217,31:1149,25:1219,6:1220,64:1221,10:1222,30:1224,29:451,6:1225,64:1226,43:1227,53:1228,9:1229,9:951,10:1165,9:1230,43:1231,53:1232,9:1233,9:1234,10:1235,10:1236,30:1238,31:1240,25:1241,6:1242,64:1243,10:886,10:1244,30:1246,29:1248,31:1056,6:1249,64:1250,9:1251,18:1253,64:1254,43:1255,9:1256,43:1258,53:1259,25:1265,6:1266,64:1267,10:1268,10:1125,28:455,27:455,33:1272,6:1273,64:1274,30:1276,29:1277,43:1278,53:1278,22:464,31:1279,6:1280,64:1281,10:1282,64:1284,10:234,30:1286,31:464,6:1287,64:1288,10:1289,30:1291,6:1292,64:1293,10:1294,64:1296,35:1297,36:1298,1:1299,43:1300,57:1301,43:1302,53:1303,61:1304,43:1305,53:1306,43:1308,53:1309,18:1311,59:466,64:1312,1:1313,18:1314,64:1315,35:1317,79:523,13:523,71:1318,80:1319,64:1320,71:439,64:1322,35:1324,64:1325,71:514,64:1327,71:1329,64:1330,64:1332,71:550,64:1334,71:565,64:1336,35:1338,71:583,64:1339,64:1341,64:1343,71:611,64:1345,71:619,64:1347,64:1349,71:644,64:1351,64:1353,64:1355,64:1357,71:680,64:1359,71:691,64:1361,64:1363,71:1365,64:1366,71:1086,64:1368,71:720,64:1370,71:737,64:1372,64:1374,71:758,64:1376,64:1378,71:1380,64:1381,71:784,64:1383,71:1385,64:1386,71:1388,64:1389,71:794,64:1391,71:1393,64:1394,71:1396,64:1397,64:1399,35:1401,71:1402,53:1403,44:1404,47:554,64:1405,71:812,64:1407,71:822,64:1409,71:848,64:1411,71:863,64:1413,71:914,64:1415,64:1417,64:1419,71:1015,64:1421,71:1423,64:1424,71:1426,64:1427,71:1025,64:1429,10:1430,9:489,10:1431,71:1433,44:1434,47:466,64:1435,71:1437,64:1438,71:1440,64:1441,71:1144,64:1443,71:1445,64:1446,64:1448,79:455,13:455,71:1148,64:1450,71:1178,64:1452,71:1198,64:1454,64:1456,35:1457,9:492,10:1459,43:1466,42:1467,49:1470,22:1471,37:1474,64:1475,43:1478,42:1479,49:1481,22:1165,37:1487,64:1488,43:1489,49:1491,22:486,37:1496,64:1497,37:1499,64:1500,37:1509,64:1510,10:1511,37:1513,64:1514,37:1516,64:1517,9:1518,37:1520,64:1521,37:1528,64:1529,10:1530,37:1532,64:1533,10:1534,37:1536,64:1537,10:1538,37:1540,64:1541,10:1403,10:1542,37:1543,64:1544,43:1545,10:1546,37:1550,64:1551,9:1552,37:1558,64:1559,9:486,10:1560,9:1561,10:1563,10:1565,9:1566,64:1568,10:1569,37:1571,64:1572,37:1573,64:1574,37:1576,64:1577,37:1581,64:1582,37:1584,64:1585,37:1589,64:1590,37:1594,64:1595,37:1596,64:1597,37:1600,64:1601,37:1605,64:1606,37:1614,64:1615,37:1618,64:1619,37:1622,64:1623,37:1626,64:1627,37:1629,64:1630,37:1631,64:1632,37:1633,64:1634,43:1635,43:1636,53:1637,43:1638,53:1639,43:1640,53:1641,43:1642,53:1643,43:1644,53:1645,43:1646,53:1647,43:1648,53:1649,43:1650,60:1651,43:1652,42:492,49:1653,22:466,43:1654,49:1657,22:835,43:1658,53:1659,43:1660,45:1663,43:1664,53:1665,43:1666,45:1672,43:1673,53:1674,43:1675,53:1676,43:1677,53:1678,43:1679,53:1680,43:1681,53:1682,43:1683,53:1684,43:1685,53:1686,43:1687,53:1688,35:1689,43:1690,53:1691,43:1692,78:1693,43:1694,53:1694,43:1695,53:1695,43:1696,53:1696,43:1697,42:449,49:1702,43:1703,45:1707,43:1708,53:1709,43:1710,45:1723,43:1724,53:1725,43:1726,43:1727,43:1728,43:1729,43:1730,35:1731,43:1732,76:1733,35:1734,43:1735"
  );
  Wj(
    Kj,
    1,
    "M,T,hB,BG,BY,BgB,BAG,BAY,BAgB,BAAG,AAAwB,BAAIC,BAAAM,BAAAw,BAAAAD,BAAAAM,AAAQAgB,BAAAAQC,AAAAAAY,BAAAAAk,BAAAAAAD,BAAAAAAM,AAAQAAAgB,BAAAAAAQC,AAAQAAAA4B,BAAAAAAAEC,BAAAAAAAAM,BAAAAAAAAw,AAAQAAAAABG,BAAAAAAAAAJ,AAAAAAIAAAgB,BAAAAAAAAAQC,BAAAAAAAAAAM,AAAAAAAAAAAgB,AAAQAAAAgBAAG,BAAAAAAAAAAQI,BAAAAAAAAAAAw,AAAAAAIAAAABAC,BAAAAAAAAAAAAF,BAAAAAAAAAAAAY,AAAAAAIAAAAAAAH,BAAAAAAAAAAAAgI,BAAAAAAAAAAAAAw,BAAAAAAAAAAAAAAD,BAAAAAAAAAAAAAAM,AAAQAAAAgBAAAAAgB,AAAQAAAAgBAAAAAAG,BAAAAAAAAAAAAAAQI,BAAAAAAAAAAAAAAAw,AAAQAAAABAAAAAAAAC,BAAAAAAAAAAAAAAAAF,BAAAAAAAAAAAAAAAAY,BAAAAAAAAAAAAAAAAgB,BAAAAAAAAAAAAAAAAAG,BAAAAAAAAAAAAAAAAAY,BAAAAAAAAAAAAAAAAAgB,AAAQBAAAAAAAAAAAAAAE,BAAAAAAAAAAAAAAAAAAK,BAAAAAAAAAAAAAAAAAAw,BAAAAAAAAAAAAAAAAAAAD,AAAAAAAAgAAAAAAAAAAA4,BAAAAAAAAAAAAAAAAAAAEB,BAAAAAAAAAAAAAAAAAAAAG,BAAAAAAAAAAAAAAAAAAAAY,BAAAAAAAAAAAAAAAAAAAAgB,BAAAAAAAAAAAAAAAAAAAAAG,AAAQAABAAAAAAAAAAAAAAAQ,BAAAAAAAAAAAAAAAAAAAAAo,BAAAAAAAAAAAAAAAAAAAAAAD,BAAAAAAAAAAAAAAAAAAAAAAM,BAAAAAAAAAAAAAAAAAAAAAAw,BAAAAAAAAAAAAAAAAAAAAAAAD,BAAAAAAAAAAAAAAAAAAAAAAAM,BAAAAAAAAAAAAAAAAAAAAAAAw,BAAAAAAAAAAAAAAAAAAAAAAAAD,BAAAAAAAAAAAAAAAAAAAAAAAAM,BAAAAAAAAAAAAAAAAAAAAAAAAw,BAAAAAAAAAAAAAAAAAAAAAAAAAD,BAAAAAAAAAAAAAAAAAAAAAAAAAM,AAAQAAAAgBAAAAAAAAAAAAAAAAgB,AAAQAAAAgBAAAAAAAAAAAAAAAAAG,AAAQAAAAgBAAAAAAAAAAAAAAAAAY,AAAQAAAAgBAAAAAAAAAAAAAAAAAgB,BAAAAAAAAAAAAAAAAAAAAAAAAAQAC,BAAAAAAAAAAAAAAAAAAAAAAAAAAAM,BAAAAAAAAAAAAAAAAAAAAAAAAAAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAG,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAG,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAY,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAgB,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEC,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAgB,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQC,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAY,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAk,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,AAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,AAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE,AAAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,AAAAAAIAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAM,AAAQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAD,AAAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAY,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY,AAAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG,AAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE,AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,AAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY,AAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAO,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgB,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,AAAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,AAAAAAIAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,AAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG,AAAQAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY,AAAAAAIAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgB,AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,AAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG,AAAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwB,AAAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAB,AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC,AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,AAAAAAIAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAwB,AAAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgB,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgB,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgB,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACD,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY,AAAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgB,BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG,AAAQAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY,AAAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB,AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAC,AAAQAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE,AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG"
  );
  Wj(
    Mj,
    1,
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAM,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAoB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAgB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAgAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhAAAAAAAAAABAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAAAAAAAAM,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAAAAAAAAAAAAAAAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAgB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAgC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAAAAAAAAEAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAIAAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAgB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAIAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAIAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAAAAAAAAAAAAACAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAAAAAAAAAAAAAIAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAgAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAACAAAAAAAAAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE"
  );
  Wj(
    Z,
    1,
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgZ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgg5,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAggAIAD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC__H,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB-_D,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiAB6Pd,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB-EB8D,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiAB6QAAAy_,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB-QBAAAEA-,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB-EBAAAAAAwP,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiAB-EBAACAAAQAe,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAACy-DAAFAAAAAAAAA4_B,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB-EAAAAQAAAAAAAAf,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6UAAAAQAAAAAAAAA8H,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6UAAAAQAAAAAAAAAEgf,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAACi-DAAEAAAQAAAAAg_AAAAA4,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB-EAAAAQAAAAAAAADAAAAO,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB-EAAAAQAAAAAAAADAAAAAH,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB-EAAAAQAAAAAAAABAAAAAAe,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAyAB6EAAAQQAAAAAAAAAAAAAAAAgH,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6EAAAAQAAAAAAAAAAAAAAAAAAgk5,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6EAAAAQAAAAAAAAAAAAAAAAAAgAAI8,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6EAAAQQAAAAAAAAAAAAAAAAAAAAAIAAP,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB-EBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6EAAAQQAAAAAAAAAAAAAAAAAAAAAAAAAAwP,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAyAB-EBAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB-EBAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAP,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6EAAAQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAgABaAAAAAQAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAgH,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6EAAAAQAAAAAAAAAAAAAAAAAAgAAIAABAAAAAAAO,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB-EAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgH,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6EEAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6UAAAAQAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAA_B,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAjAB6AAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4D,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6AAAAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA-,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6QAAAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwH,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiAB6QAAASUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA-,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAgABaAAAAQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBAAAAAAAAAAAAc,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAhABaAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBAAAAAAAAAAAAkB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiAB6UAAAQQAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAA8B,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAgABaABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBAAAAAAAAAAAAAAAAAwAwD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAjAB6QAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4D,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6ABAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAwAgAgEH,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAjAB6QAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwH,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjAB6QAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAA_,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAjAB6QAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwDAC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8hD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6EAAAQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI5B,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6QAAAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAjAB6QAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwxB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6ABAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwH,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIgD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAN,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAhB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAgB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6QAAAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAgH,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAgABaAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAQe,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAgABiAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAQm_,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6AAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAQGAgP,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAgABaAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAQCAAgD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAgABiAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAQiKAg8,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6AAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAQCAAhA8,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAgABiAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAQiCAgIA5,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAgABiAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAQmGAAAAIH,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6AAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAQEAgAAAAwH,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiAB6AAAAQUAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAjAB6UAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8B,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAjAB6QAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4D,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAAAAAAAAAAAAAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAgABaQAAAAQAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAgABCABAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8B,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiABiABAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMGH,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAgABCABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBAAAAAAAAAAAAAAAAAwAwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAQ,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiABiABAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMEAP,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAiABiABAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMEAiD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAgABCABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBAAAAAAAAAAAAAAAAAwAwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwlwB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw1,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFM,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgFAgD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAg,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAM,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgFAgAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAgB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgFAgAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgFAgAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAAgB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAAAgB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAAAAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAAAAAAD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAAAAAAM,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAAAAAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAAAAAAAD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAE,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAAAAAAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAAAAAAAAD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAAAAAAAAM,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAAAAAAAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBAAA4B,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAAAAAAAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAAAAAAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAAAAAAAAAAgB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFAAAAAAAAAAAAAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAI,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAwD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgFAgAAAAAAAAAAAAAAAM,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgFAgAAAAAAAAAAAAAAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACM,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAM,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAgB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAM,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAD,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAw,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAM,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAgB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAABAAAC,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAgB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAgB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAgB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAgB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAgB,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAG,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAgB"
  );
  Wj(
    Ii,
    2,
    "P:HAAAAgAAAAAAAAAAAAAAAAAAAI::,y:EAAAAgAgAAAAAAAAAAAAAAAARAB8Q::AAAAAAgAAAAAAAAAAAAAAAAAAAAAE,EH:I::,gI:w:AQ:,EgB:AB::,EAc:AC:AAC:,AAgH:AE::,gAAI:AI:AAAQ:,AAAgB:AQ::,AAAAD:Ag::,EAAAM:Ag::,EAAAwB:AAB::,w:AAC:AAAAAC:,UAAAAM:AAE:AAAAAC:,AAAABw:AAI::,AAAARAB:AAQ::,AAAARAC:AAg::,EAAAAA8:AAAB::,EAAAAAAd:AAAC:AAAAAAAC:,AAAAAAAAG:AAAE:AAAAAAAgB:,EAAAAAAAa:AAAI::,AAACAAAAgG:AAAQ:AAAAAAAAAB:,AAAABAAAAI:AAAg::,gAAAAAAAAwB:AAAAB::,EAAAAAAAAAG:AAAAC::,AAAABAAAAAw:AAAAE:AAAAAAAAAAI:,g:AAAAI:AAAAAAAAAAAB:,gAAAAAAAAAAC:AAAAQ::,AAACAAAAAAAc:AAAAg::,gAAAAAAAAAAg:AAAAAB::,EAAAAAAAAAAAD:AAAAAC::,g:AAAAAE:AAAAAAAAAAAAM:,EAAAAAAAAAAAw:AAAAAI::,EAAAAAAAAAAAAD:AAAAAQ::,AAAAAAAAAAAAA8:AAAAAAB::,EAAAAAAAAAAAAAH:AAAAAAC::,EAAAAAAAAAAAAAYB:AAAAAAM:AAAAAAAAAAAAAAg:,gAAAAAAAAAAAAAAK:AAAAAAQ:AAAAAAAAAAAAAAAE:,iAAAAAAAAAAAAAAg:AAAAAAg:AAAAAAAAAAAAAAAQ:,GAAAAAAAAAAAAAAAE:AAAAAAg:AAAAAAAAAAAAAAAQD:,AAAABAAAAAAAAAAAg:AAAAAAABAAAAAAAAAAAAAAAI:AAAAAAAAAAAAAAAAQ:,AAAAAAAAAAAAAAAAAB:AAAAAAACAAAAAAAAAAAAAAAAg::,AAAABAAAAAAAAAC:AAAAAAAE:AAAAAAAAAAAAAAAAAC:,AAAAAAAAAQAAAAAAAM:AAAAAAAI::,EAAAAAAAAAAAAACAAQ:AAAAAAAQ:AAAAAAAAAAAAAAAAAC:,gAAAAAAAAAAAAAAAAg:AAAAAAAAB::,gAAAAAAAAAAAAAAAAAB:AAAAAAAAG:AAAAAAAAAAAAAAAAAAC:,CAACAAAAAAAAAAAAAA8B:AAAAAAAAIQAAAAAAAAAAAAAAAAAB::,iAAAAAAB:AAAAAAAAQAAAAAAAAAAAAAAg::,iAAAAAAAAQAAAAAAI:AAAAAAAAgAAAAIAAAAAAAAAQAAZIL::AAAAAAgAAAAAAAAAAAAAAAAAAAAAE,gAAAAAAAAAAAAAAAAAAC:AAAAAAAAAB::,QAAAAAAAAAAAAAAAgAAI:AAAAAAAAAC:AAAAAAAAAAAAAAAAAAAE:,AAAAAAAAAAAAAAAAAAAQ:AAAAAAAAAEAAAE::,iAAAAAAAAAAAAAAAAAAg:AAAAAAAAAIAAAAAAAAAAAAAAAAg::,EAAAAAAAAAAAAAAAAAAAD:AAAAAAAAAg::,g:AAAAAAAAAADAAAAAAAAAAAAAAAC:AAAAAAAAAAAAAAAAAAAAE:,AAACAAAAAAAAAAAAAAAA4:AAAAAAAAAAEC::,g:AAAAAAAAAAY:AAAAAAAAAAAAAAAAAAAAAB:,AAACAAAAAAAAAAAAAAAAAG:AAAAAAAAAAgB::,AAAAAAAAAAAAAAAAAAAAAI:AAAAAAAAAAAE::,AAAAAAAAAAAAAAAAAAAAAQ:AAAAAAAAAAAI::,gAAAAAAAAAAAAAAAgAAAAgf:AAAAAAAAAAAQ:AAAAAAAAAAAAAAAAAAAAAAg:,AAAABAAAAAAAAAAAAAAAAAAD:AAAAAAAAAAAg::,g:AAAAAAAAAAAAB:AAAAAAAAAAAAAAAAAAAAAAAE:,gAAAAAAAAAAAAAAAAAAAAAAI:AAAAAAAAAAAAC::,AAAAAAAAAAAAAAAAAAAAAAAw:AAAAAAAAAAAAE::,AAAAAAAAAAAAAAAAAAAAAAAg:AAAAAAAAAAAAI::,AAAAAAAAAAAAAAAAAAAAAAAAB:AAAAAAAAAAAAQ::,AAAAAAAAAAAAAAAAAAAAAAAAC:AAAAAAAAAAAAg::,AAAAAAAAAAAAAAAAAAAAAAAAE:AAAAAAAAAAAAAB::,AAAAAAAAAAAAAAAAAAAAAAAAI:AAAAAAAAAAAAAC::,g:AAAAAAAAAAAAAw_____v_v_DAAAAE::,gAAAAAAB:AAAAAAAAAAAAAAAAAAAQ::,wAAAAAAAAAAAAAAAAAAAAAAAwB:AAAAAAAAAAAAAAAAAAAAAQ::,wAAAAAAAAAAAAI:AAAAAAAAAAAAAAAAAAAAAAAE:AAAAAAAAAAAAAAAAAAAAAAAAAG:,gAAAAAAAAAAAAAAAAAAAAAAAAQ:AAAAAAAAAAAAAAAAAAAAAAAAC::,AAAAAAAAAAAAAgAAAAAAAAAAAg:AAAAAAAAAAAAAAAAAAAAAAAAE::,gAAAAAAAAAAAAIAAAAAAAAAAAAB:AAAAAAAAAAAAAAAAAAAAAAAAI::,AAAAAAAAAAAAAAAAAAAAAAAAAAC:AAAAAAAAAAAAAAAAAAAAAAAAg::,gAAAAAAAAAAAAAAAgAAAAAAAAAE:AAAAAAAAAAAAAAAAAAAAAAAAAB::,gAAAAAAAAQAAAAAAAEAAAAAAAAI:AAAAAAAAAAAAAAAAAAAAAAAAAC::,QAAAAAAAAAAAAAAAAAAAAAAAwBw:AAAAAAAAAAAAAAAAAAAAAAAAAE::,g:AAAAAAAAAAAAAAAAAAAAAAAAAQ:AAAAAAAAAAAAAAAAAAAAAAAAAAAC:,gAAAAAAAAAAAAAAAAAAAAAAAAAAE:AAAAAAAAAAAAAAAAAAAAAAAAAg:AAAAAAAAAAAAAAAAAAAAAAAAAAAI:,gAAAAAAAAQAAAAAAAAAAAAAAAAAQ:AAAAAAAAAAAAAAAAAAAAAAAAAg:AAAAAAAAAAAAAAAAAAAAAAAAAAAI:,AAAAAAAAAAAAAAAAAAAIAAAAAAAgB:AAAAAAAAAAAAAAAAAAAAAAAAAg::,wAAAAAAAAAAAAAAAAAAAAAAAAAAAC:AAAAAAAAAAAAAAAAAAAAAAAAAAB::,gAAAAAAAAAAAAAAAAAAAAAAQ:AAAAAAAAAAAAAAAAAAAAAAAAAAEC::,iAAAAAAAAAAAAAAAAAAC:AAAAAAAAAAAAAAAAAAAAAAAAAAAID::,gAAAAAAAAAAAAAAAAAAAAAAAAI:::AAAAAAAAAAAAAAAAAAAAAAAUAAQ,GAAAAAAAAQAAAAAAAAAAAAAAAAAB:::AAAAAAAAAAAAAAAAAAAAAAAAAI"
  );
  Wj(
    Ji,
    4,
    "439.439.439.439.439:,472.472.472.472.472.472.472.472.472.472.472:472.472,514:,529.529:,550:,565:,583:,591:,602:,609:,611:,619:,627:,644:,655:,664:,669:,680:,691:,701:,720:,737:,743:,752:,758:,764:,770:,777:,784:,788:,794:,801:,812:,822:,840:,848:,863.863:,878:,905:,914:,994.994:,999.999:,1011:,1017:,1025:,1047:,1064.1064:,1086.1086.1086:,1090.1090:,916.916.916.916.916.916.916.916.916.916:916.916,1114:,1120:,1124.1124:,1128.1128:,1144:,1150.1150.1150:,1178.1178:,1188.1188:,1198.1198:,1218:,1223:,1237:,1245:,1252:,1257:,1269:,1275:,1283:,1285:,1290:,1295:,1316.1321.1323.1326.1328.1331.1333.1335.1337.1340.1342.1344.1346.1348.1350.1352.1354.1356.1358.1360.1362.1364.1367.1369.1371.1373.1375.1377.1379.1382.1384.1387.1390.1392.1395.1398.1406.1408.1410.1412.1414.1416.1418.1420.1422.1425.1428.1436.1439.1442.1444.1447.1449.1451.1453.1455.1628:,1400:,1432:,1458:,1512:,1515:,1519:,1531:,1535:,1539:,1433:,1553:,1562:,1564:,1567:,1570:,1575.1575:,1602.1602.1602:,:1460.1460.1460,:1437"
  );
  for (var Tk = 0; Tk < Z.length; Tk++) {
    var Uk = Z[Tk],
      Vk = 1;
    Uk[Pd] ? (Vk = 2) : Uk[$e] && (Vk = 0);
    jb[Tk] = { firingOption: Vk, state: void 0 };
    kb[Tk] = [];
  }
  Sk.jb();
  (function (a) {})("async");
  (function () {
    var a = Q("dataLayer", []),
      b = Q("google_tag_manager", {}),
      b = (b["dataLayer"] = b["dataLayer"] || {});
    Ua.push(function () {
      b.gtmDom || ((b.gtmDom = !0), a.push({ event: "gtm.dom" }));
    });
    Rf.push(function () {
      b.gtmLoad || ((b.gtmLoad = !0), a.push({ event: "gtm.load" }));
    });
    var c = a.push;
    a.push = function () {
      var b = [].slice.call(arguments, 0);
      c.apply(a, b);
      for (dg.push.apply(dg, b); 300 < this.length; ) this.shift();
      return lg();
    };
    dg.push.apply(dg, a.slice(0));
    x(mg);
  })();
  var cl = w;
  if (
    ("interactive" == J.readyState && !J.createEventObject) ||
    "complete" == J.readyState
  )
    Nf();
  else {
    L(J, "DOMContentLoaded", Nf);
    L(J, "readystatechange", Nf);
    if (J.createEventObject && J.documentElement.doScroll) {
      var dl = !0;
      try {
        dl = !cl.frameElement;
      } catch (a) {}
      dl && Pf();
    }
    L(cl, "load", Nf);
  }
  "complete" === J.readyState ? Sf() : L(w, "load", Sf);
  (function (a) {})("async");
  (function () {})();
  var _vs = "res_ts:1484318729255000,srv_cl:143751674,ds:live,cv:810";
})();

/*
page: http://www.ceneo.pl/
url: http://www.googletagmanager.com/gtm.js?id=GTM-TPPTSM
*/
