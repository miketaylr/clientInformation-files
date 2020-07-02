var detect = {};
void function (m) {
  var h = {
      extend: function (e, g) {
        for (var a in g)
          -1 !== "browser cpu device engine os".indexOf(a) &&
            0 === g[a].length % 2 &&
            (e[a] = g[a].concat(e[a]));
        return e;
      },
      has: function (e, g) {
        return "string" === typeof e
          ? -1 !== g.toLowerCase().indexOf(e.toLowerCase())
          : !1;
      },
      lowerize: function (e) {
        return e.toLowerCase();
      },
      major: function (e) {
        return "string" === typeof e ? e.split(".")[0] : void 0;
      },
    },
    n = function () {
      for (
        var e, g = 0, a, b, c, d, s, f, B = arguments;
        g < B.length && !s;

      ) {
        var C = B[g],
          h = B[g + 1];
        if ("undefined" === typeof e)
          for (c in ((e = {}), h))
            (d = h[c]),
              "object" === typeof d ? (e[d[0]] = void 0) : (e[d] = void 0);
        for (a = b = 0; a < C.length && !s; )
          if ((s = C[a++].exec(this.getUA())))
            for (c = 0; c < h.length; c++)
              (f = s[++b]),
                (d = h[c]),
                "object" === typeof d && 0 < d.length
                  ? 2 == d.length
                    ? (e[d[0]] =
                        "function" == typeof d[1] ? d[1].call(this, f) : d[1])
                    : 3 == d.length
                    ? (e[d[0]] =
                        "function" !== typeof d[1] || (d[1].exec && d[1].test)
                          ? f
                            ? f.replace(d[1], d[2])
                            : void 0
                          : f
                          ? d[1].call(this, f, d[2])
                          : void 0)
                    : 4 == d.length &&
                      (e[d[0]] = f
                        ? d[3].call(this, f.replace(d[1], d[2]))
                        : void 0)
                  : (e[d] = f ? f : void 0);
        g += 2;
      }
      return e;
    },
    e = function (e, g) {
      for (var a in g)
        if ("object" === typeof g[a] && 0 < g[a].length)
          for (var b = 0; b < g[a].length; b++) {
            if (h.has(g[a][b], e)) return "?" === a ? void 0 : a;
          }
        else if (h.has(g[a], e)) return "?" === a ? void 0 : a;
      return e;
    },
    l = {
      ME: "4.90",
      "NT 3.11": "NT3.51",
      "NT 4.0": "NT4.0",
      2e3: "NT 5.0",
      XP: ["NT 5.1", "NT 5.2"],
      Vista: "NT 6.0",
      7: "NT 6.1",
      8: "NT 6.2",
      "8.1": "NT 6.3",
      10: ["NT 6.4", "NT 10.0"],
      RT: "ARM",
    },
    t = {
      browser: [
        [
          /(opera\smini)\/([\w\.-]+)/i,
          /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
          /(opera).+version\/([\w\.]+)/i,
          /(opera)[\/\s]+([\w\.]+)/i,
        ],
        ["name", "version"],
        [/\s(opr)\/([\w\.]+)/i],
        [["name", "Opera"], "version"],
        [
          /(kindle)\/([\w\.]+)/i,
          /(lunascape|netfront|Maxthon|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
          /(avant\s|iemobile|slim(?:jet)?|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
          /(msie)\s([\w\.]+)/i,
          /(rekonq)\/([\w\.]+)*/i,
          /(Chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi)\/([\w\.-]+)/i,
        ],
        ["name", "version"],
        [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
        [["name", "MSIE"], "version"],
        [/(edge)\/((\d+)?[\w\.]+)/i],
        ["name", "version"],
        [/(yabrowser)\/([\w\.]+)/i],
        [["name", "Yandex"], "version"],
        [/(comodo_dragon)\/([\w\.]+)/i],
        [["name", /_/g, " "], "version"],
        [
          /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
          /(uc\s?browser|m?qqbrowser)[\/\s]?([\w\.]+)/i,
        ],
        ["name", "version"],
        [/(dolfin)\/([\w\.]+)/i],
        [["name", "Dolphin"], "version"],
        [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
        [["name", "Chrome"], "version"],
        [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],
        ["version", ["name", "MIUI Browser"]],
        [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],
        ["version", ["name", "Android Browser"]],
        [/FBAV\/([\w\.]+);/i],
        ["version", ["name", "Facebook"]],
        [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
        ["version", ["name", "Mobile Safari"]],
        [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
        ["version", "name"],
        [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
        [
          "name",
          [
            "version",
            e,
            {
              "1.0": "/8",
              "1.2": "/1",
              "1.3": "/3",
              "2.0": "/412",
              "2.0.2": "/416",
              "2.0.3": "/417",
              "2.0.4": "/419",
              "?": "/",
            },
          ],
        ],
        [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
        ["name", "version"],
        [/(navigator|netscape)\/([\w\.-]+)/i],
        [["name", "Netscape"], "version"],
        [
          /(swiftfox)/i,
          /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
          /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|PaleMoon)\/([\w\.-]+)/i,
          /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
          /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i,
          /(links)\s\(([\w\.]+)/i,
          /(gobrowser)\/?([\w\.]+)*/i,
          /(ice\s?browser)\/v?([\w\._]+)/i,
          /(mosaic)[\/\s]([\w\.]+)/i,
        ],
        ["name", "version"],
      ],
      cpu: [
        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
        [["architecture", "amd64"]],
        [/(ia32(?=;))/i],
        [["architecture", h.lowerize]],
        [/((?:i[346]|x)86)[;\)]/i],
        [["architecture", "ia32"]],
        [/windows\s(ce|mobile);\sppc;/i],
        [["architecture", "arm"]],
        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
        [["architecture", /ower/, "", h.lowerize]],
        [/(sun4\w)[;\)]/i],
        [["architecture", "sparc"]],
        [
          /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
        ],
        [["architecture", h.lowerize]],
      ],
      device: [
        [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
        ["model", "vendor", ["type", "tablet"]],
        [/applecoremedia\/[\w\.]+ \((ipad)/],
        ["model", ["vendor", "Apple"], ["type", "tablet"]],
        [/(apple\s{0,1}tv)/i],
        [
          ["model", "Apple TV"],
          ["vendor", "Apple"],
        ],
        [
          /(archos)\s(gamepad2?)/i,
          /(hp).+(touchpad)/i,
          /(kindle)\/([\w\.]+)/i,
          /\s(nook)[\w\s]+build\/(\w+)/i,
          /(dell)\s(strea[kpr\s\d]*[\dko])/i,
        ],
        ["vendor", "model", ["type", "tablet"]],
        [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
        ["model", ["vendor", "Amazon"], ["type", "tablet"]],
        [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
        [
          ["model", e, { "Fire Phone": ["SD", "KF"] }],
          ["vendor", "Amazon"],
          ["type", "mobile"],
        ],
        [/\((ip[honed|\s\w*]+);.+(apple)/i],
        ["model", "vendor", ["type", "mobile"]],
        [/\((ip[honed|\s\w*]+);/i],
        ["model", ["vendor", "Apple"], ["type", "mobile"]],
        [
          /(blackberry)[\s-]?(\w+)/i,
          /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
          /(hp)\s([\w\s]+\w)/i,
          /(asus)-?(\w+)/i,
        ],
        ["vendor", "model", ["type", "mobile"]],
        [/\(bb10;\s(\w+)/i],
        ["model", ["vendor", "BlackBerry"], ["type", "mobile"]],
        [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],
        ["model", ["vendor", "Asus"], ["type", "tablet"]],
        [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
        [
          ["vendor", "Sony"],
          ["model", "Xperia Tablet"],
          ["type", "tablet"],
        ],
        [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
        [
          ["vendor", "Sony"],
          ["model", "Xperia Phone"],
          ["type", "mobile"],
        ],
        [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
        ["vendor", "model", ["type", "console"]],
        [/android.+;\s(shield)\sbuild/i],
        ["model", ["vendor", "Nvidia"], ["type", "console"]],
        [/(playstation\s[3portablevi]+)/i],
        ["model", ["vendor", "Sony"], ["type", "console"]],
        [/(sprint\s(\w+))/i],
        [
          ["vendor", e, { HTC: "APA", Sprint: "Sprint" }],
          ["model", e, { "Evo Shift 4G": "7373KT" }],
          ["type", "mobile"],
        ],
        [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
        ["vendor", "model", ["type", "tablet"]],
        [
          /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,
          /(zte)-(\w+)*/i,
          /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i,
        ],
        ["vendor", ["model", /_/g, " "], ["type", "mobile"]],
        [/(nexus\s9)/i],
        ["model", ["vendor", "HTC"], ["type", "tablet"]],
        [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
        ["model", ["vendor", "Microsoft"], ["type", "console"]],
        [/(kin\.[onetw]{3})/i],
        [
          ["model", /\./g, " "],
          ["vendor", "Microsoft"],
          ["type", "mobile"],
        ],
        [
          /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
          /mot[\s-]?(\w+)*/i,
          /(XT\d{3,4}) build\//i,
        ],
        ["model", ["vendor", "Motorola"], ["type", "mobile"]],
        [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
        ["model", ["vendor", "Motorola"], ["type", "tablet"]],
        [
          /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,
          /((SM-T\w+))/i,
        ],
        [["vendor", "Samsung"], "model", ["type", "tablet"]],
        [
          /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,
          /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
          /sec-((sgh\w+))/i,
        ],
        [["vendor", "Samsung"], "model", ["type", "mobile"]],
        [/(samsung);smarttv/i],
        ["vendor", "model", ["type", "smarttv"]],
        [/\(dtv[\);].+(aquos)/i],
        ["model", ["vendor", "Sharp"], ["type", "smarttv"]],
        [/sie-(\w+)*/i],
        ["model", ["vendor", "Siemens"], ["type", "mobile"]],
        [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
        [["vendor", "Nokia"], "model", ["type", "mobile"]],
        [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
        ["model", ["vendor", "Acer"], ["type", "tablet"]],
        [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
        [["vendor", "LG"], "model", ["type", "tablet"]],
        [/(lg) netcast\.tv/i],
        ["vendor", "model", ["type", "smarttv"]],
        [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
        ["model", ["vendor", "LG"], ["type", "mobile"]],
        [/android.+(ideatab[a-z0-9\-\s]+)/i],
        ["model", ["vendor", "Lenovo"], ["type", "tablet"]],
        [/linux;.+((jolla));/i],
        ["vendor", "model", ["type", "mobile"]],
        [/((pebble))app\/[\d\.]+\s/i],
        ["vendor", "model", ["type", "wearable"]],
        [/android.+;\s(glass)\s\d/i],
        ["model", ["vendor", "Google"], ["type", "wearable"]],
        [
          /android.+(\w+)\s+build\/hm\1/i,
          /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
          /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i,
        ],
        [
          ["model", /_/g, " "],
          ["vendor", "Xiaomi"],
          ["type", "mobile"],
        ],
        [/(mobile|tablet);.+rv\:.+gecko\//i],
        [["type", h.lowerize], "vendor", "model"],
      ],
      engine: [
        [/windows.+\sedge\/([\w\.]+)/i],
        ["version", ["name", "EdgeHTML"]],
        [
          /(presto)\/([\w\.]+)/i,
          /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,
          /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
          /(icab)[\/\s]([23]\.[\d\.]+)/i,
        ],
        ["name", "version"],
        [/rv\:([\w\.]+).*(gecko)/i],
        ["version", "name"],
      ],
      os: [
        [/microsoft\s(windows)\s(vista|xp)/i],
        ["name", "version"],
        [
          /(windows)\snt\s6\.2;\s(arm)/i,
          /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
        ],
        ["name", ["version", e, l]],
        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
        [
          ["name", "Windows"],
          ["version", e, l],
        ],
        [/\((bb)(10);/i],
        [["name", "BlackBerry"], "version"],
        [
          /(blackberry)\w*\/?([\w\.]+)*/i,
          /(tizen)[\/\s]([\w\.]+)/i,
          /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
          /linux;.+(sailfish);/i,
        ],
        ["name", "version"],
        [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
        [["name", "Symbian"], "version"],
        [/\((series40);/i],
        ["name"],
        [/mozilla.+\(mobile;.+gecko.+firefox/i],
        [["name", "Firefox OS"], "version"],
        [
          /(nintendo|playstation)\s([wids3portablevu]+)/i,
          /(mint)[\/\s\(]?(\w+)*/i,
          /(mageia|vectorlinux)[;\s]/i,
          /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,
          /(hurd|linux)\s?([\w\.]+)*/i,
          /(gnu)\s?([\w\.]+)*/i,
        ],
        ["name", "version"],
        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
        [["name", "Chromium OS"], "version"],
        [/(sunos)\s?([\w\.]+\d)*/i],
        [["name", "Solaris"], "version"],
        [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
        ["name", "version"],
        [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
        [
          ["name", "iOS"],
          ["version", /_/g, "."],
        ],
        [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
        [
          ["name", "Mac OS"],
          ["version", /_/g, "."],
        ],
        [
          /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,
          /(haiku)\s(\w+)/i,
          /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,
          /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
          /(unix)\s?([\w\.]+)*/i,
        ],
        ["name", "version"],
      ],
    },
    k = function (e, g) {
      if (!(this instanceof k)) return new k(e, g).getResult();
      var a =
          e ||
          (window && window.navigator && window.navigator.userAgent
            ? window.navigator.userAgent
            : ""),
        b = g ? h.extend(t, g) : t;
      this.getBrowser = function () {
        var a = n.apply(this, b.browser);
        a.major = h.major(a.version);
        return a;
      };
      this.getCPU = function () {
        return n.apply(this, b.cpu);
      };
      this.getDevice = function () {
        return n.apply(this, b.device);
      };
      this.getEngine = function () {
        return n.apply(this, b.engine);
      };
      this.getOS = function () {
        return n.apply(this, b.os);
      };
      this.getShell = function (a, b) {
        function e(a, b) {
          var c = f.external || {},
            d;
          for (d in c) if (a.test(b ? c[d] : d)) return !0;
          return !1;
        }
        var f = window,
          g = this.getUA(),
          h = !/^(?:undefined|null)$/i.test(f.ActiveXObject + ""),
          l = document.documentMode,
          k = !1,
          m = (function () {
            var e = /msie[\s\/]([\d\.]+)/i.exec(g),
              e = (e && parseInt(e[1])) || 0,
              f = 3;
            if (!b) {
              for (
                var s = document.createElement("p"),
                  h = s.getElementsByTagName("i");
                (s.innerHTML =
                  "\x3c!--[if gt IE " +
                  ++f +
                  "]\x3e\x3ci\x3e\x3c/i\x3e\x3c![endif]--\x3e"),
                  h[0];

              );
              f = 4 < f ? f : 0;
            }
            if (/Trident/i.test(a.engine.name))
              switch (parseInt(a.engine.version)) {
                case 4:
                  f = 8;
                  break;
                case 5:
                  f = 9;
                  break;
                case 6:
                  f = 10;
                  break;
                case 7:
                  f = 11;
              }
            f = Math.max(f, e);
            l ? f !== l && (k = !0) : f !== e && ((k = !0), (l = e));
            (f = 3 < f ? f + "" : "") && !/\./.test(f) && (f += ".0");
            return f;
          })(),
          h = h || !!m,
          n = /IEMobile/i.test(g),
          r = /(M?QQBrowser|Maxthon|TheWorld|360se|360ee|liebao|BIDUBrowser)[\s\/]+(?:(?:v|ver|version)\s?)?([\d\.]+)/i,
          w = /(SE\s+2\.X)\s+MetaSr\s+(\d+(?:\.\d+)+)/i,
          t = /(JuziBrowser|BIDUBrowser)/i,
          D = /version\/([\d\.]+)/i,
          u = /chrome\/v?([\d\.]+)/i.exec(g),
          v = !!u,
          x = v ? u[1] : 0;
        b || v || (v = f.clientInformation && f.clientInformation.permissions);
        var p = "",
          q = 0,
          u = (function () {
            var f = !1,
              h = r.exec(g);
            h && ((p = h[1]), (q = h[2]), (f = !0));
            if ((h = w.exec(g))) (p = "sogou"), (q = h[2]), (f = !0);
            t.test(g) &&
              ((p = t.exec(g)[1]), (f = !0), D.test(g) && (q = D.exec(g)[1]));
            v &&
              /chrome/i.test(a.browser.name) &&
              ("21.0.1180.89" === x && ((p = "360se"), (q = "6"), (f = !0)),
              "31.0.1650.63" === x && ((p = "360se"), (q = "7"), (f = !0)));
            !b &&
              v &&
              (e(/^sogou/i, 0) && ((p = "sogou"), (f = !0)),
              e(/^liebao/i, 0) && ((p = "liebao"), (f = !0)));
            return f;
          })();
        if (!b)
          try {
            f.external &&
              window.external.twGetRunPath &&
              -1 <
                window.external.twGetRunPath().toLowerCase().indexOf("360se") &&
              ((p = "360se"), (q = "4"), (u = !0));
          } catch (E) {}
        var y = (m + "").match(/\d+/),
          y = y ? y[0] : "0",
          z = (x + "").match(/\d+/),
          z = z ? z[0] : "0",
          A = (q + "").match(/\d+/),
          A = A ? A[0] : "0";
        n ||
          (h
            ? (a.browser = {
                name: "MSIE",
                version: m,
                major: y,
                isCompatMode: k,
                mode: l,
              })
            : v &&
              !/chrome/i.test(a.browser.name) &&
              ((u = !0),
              (p = a.browser.name),
              (q = a.browser.version),
              (a.browser = { name: "Chrome", version: x, major: z })));
        u &&
          (a.browser = {
            name: p,
            version: q,
            major: A,
            isShell: !0,
            core: a.browser,
          });
      };
      this.getLang = function () {
        return navigator.userLanguage || navigator.language || "";
      };
      this.getResult = function (a) {
        var b = {
          ua: this.getUA(),
          browser: this.getBrowser(),
          engine: this.getEngine(),
          os: this.getOS(),
          device: this.getDevice(),
          cpu: this.getCPU(),
          lang: this.getLang(),
        };
        this.getShell(b, a);
        /safari/i.test(b.browser.name) &&
          /iphone|ipad/i.test(b.device.model) &&
          /^|0$/i.test(b.browser.version) &&
          (b.browser.version = (parseInt(b.os.version) || 0) + "");
        return b;
      };
      this.getUA = function () {
        return a;
      };
      this.setUA = function (b) {
        a = b;
        return this;
      };
      this.setUA(a);
      return this;
    };
  k.VERSION = "0.7.8";
  k.BROWSER = { NAME: "name", MAJOR: "major", VERSION: "version" };
  k.CPU = { ARCHITECTURE: "architecture" };
  k.DEVICE = {
    MODEL: "model",
    VENDOR: "vendor",
    TYPE: "type",
    CONSOLE: "console",
    MOBILE: "mobile",
    SMARTTV: "smarttv",
    TABLET: "tablet",
    WEARABLE: "wearable",
    EMBEDDED: "embedded",
  };
  k.ENGINE = { NAME: "name", VERSION: "version" };
  k.OS = { NAME: "name", VERSION: "version" };
  var r = new k();
  m.parse = function (e, g) {
    r.setUA(e || navigator.userAgent);
    return r.getResult(g);
  };
  m.get = function () {
    return r.getUA();
  };
}.call(this, detect);
(function (m, h) {
  "undefined" !== typeof module && module.exports
    ? (module.exports = h())
    : "function" === typeof define && define.amd
    ? define(h)
    : (m.Probe = h.call(m));
})(this, function () {
  function m(a) {
    if (!(this instanceof m)) return new m();
    if (null !== n) return n;
    n = this;
    this.config = {
      netWorkTime: !0,
      serverTime: !0,
      browserTime: !0,
      debugIndexTime: 3e4,
      probability: 20,
      dataSize: 2e3,
      pageCollectDelay: 200,
      cookies: null,
      isUCP: !1,
      resourceCollect: null,
    };
    this._UCP = {};
    this._collector = [];
    this._collectIndex = 0;
    this._Identifiers =
      new Date().getTime() +
      ((1 + 65536 * Math.random()) | 0).toString(16).substring(1);
    this.setOptions(a);
    return this;
  }
  function h(a, b) {
    this.type =
      (e.PerformanceTiming && a instanceof PerformanceTiming) || !a.entryType
        ? 0
        : 1;
    this.timing = this.__fixedTimeLine(a);
    this.navigation = b;
  }
  var n = null,
    e = this,
    l = document,
    t = !!e.performance,
    k = 0,
    r = 0,
    w = 0;
  m.prototype = {
    constructor: this,
    start: function () {
      if (!t) this._forbid(0), (k = 1);
      else if (
        this.config &&
        !(100 * Math.random() > this.config.probability)
      ) {
        var a = this,
          b = 0,
          c = function () {
            1 !== b && (a._accounting(), (b = 1));
          },
          d = function () {
            setTimeout(function () {
              0 === k && (a._post(a._package(a.collectPage())), (k = 1));
              a._collectResource();
            }, a.config.pageCollectDelay);
          };
        "complete" === l.readyState ? d() : g(e, "load", d);
        g(e, "beforeunload", c);
        g(e, "unload", c);
        this.config.isUCP &&
          g(l, "click", function (b) {
            var c = b || e.event;
            b = l.documentElement.scrollLeft || l.body.scrollLeft;
            var d = l.documentElement.scrollTop || l.body.scrollTop;
            b = c.pageX || c.clientX + b;
            c = c.pageY || c.clientY + d;
            d = a._browserViewPortSize();
            a._UCP[d] || (a._UCP[d] = []);
            a._UCP[d].push(b + "*" + c);
          });
      }
    },
    _forbid: function (a) {
      if (1 !== r) {
        a = {};
        a.n = e.location.href;
        a.s = this._measureScreen();
        l.referrer && (a.r = l.referrer);
        var b = this._getCookies();
        0 < b.length && (a.x = b);
        this._post(this._package(a), "forbid");
        r = 1;
      }
    },
    _accounting: function () {
      0 === k && (this._post(this._package(this.collectPage())), (k = 1));
      0 === w && (this._scanResourcesOnUnload(), (w = 1));
      if (this.config.isUCP) {
        this._collectIndex = 0;
        var a = "$",
          b;
        for (b in this._UCP) a += b + ":" + this._UCP[b].join("|") + "$";
        this._subConcatSend(a, "behavior");
      }
      this._judgeORI(this.collectPage());
    },
    _scanResourcesOnUnload: function () {
      var a = this._targetResources(),
        b,
        c,
        d,
        e,
        f = !1;
      if (a && a !== this._collector) {
        b = 0;
        for (c = a.length; b < c; b++) {
          f = !1;
          d = 0;
          for (e = this._collector.length; d < e; d++)
            if (
              a[b].n === this._collector[d].n &&
              a[b].k === this._collector[d].k
            ) {
              f = !0;
              break;
            }
          f || this._collector.push(a[b]);
        }
        this._subConcatSend(
          this._package(this._collector.slice(this._collectIndex))
        );
      }
    },
    _targetResources: function () {
      var a = null,
        b = this.config.resourceCollect;
      return b
        ? (a =
            -1 !== "resource,script,img,link".indexOf(b)
              ? this.collectResourceByType(b)
              : this.collectResourceByName(b))
        : a;
    },
    _collectResource: function () {
      this.config.resourceCollect &&
        ((this._collector = this._targetResources()),
        this._subConcatSend(this._package(this._collector)));
    },
    _subConcatSend: function (a, b) {
      if (0 !== a.length) {
        var c = this.config.dataSize - this._Identifiers.length,
          d = b || "r";
        if (a.length > c)
          if (((c = a.substr(0, c).lastIndexOf(",")), -1 !== c))
            this._post(a.substr(0, c), d, !0),
              (this._collectIndex += a.substr(0, c).split(",").length),
              this._subConcatSend(a.substr(c + 1), b);
          else throw "too limit dataSize arguments.";
        a.length <= this.config.dataSize &&
          ((this._collectIndex += a.split(",").length), this._post(a, d, !0));
      }
    },
    _post: function (a, b, c) {
      if (a) {
        var d = new Image(),
          e = "http://mic.pro6e.com/probe/map.gif";
        !0 === c && (e = "http://mic.pro6e.com/probe/mine.gif");
        d.src =
          e +
          "?" +
          {
            default: "arg",
            forbid: "forbid",
            debug: "debug",
            behavior: "behavior",
            tmp: "tmp",
          }["r" !== b && b ? b : "default"] +
          "\x3dp" +
          this._Identifiers +
          ("forbid" === a ? "" : a);
        "complete" === d.readyState
          ? (d = null)
          : (d.onload = function () {
              d = null;
            });
      }
    },
    _package: function (a) {
      var b = "";
      if (!a) return b;
      if ("[object Array]" === Object.prototype.toString.call(a))
        for (var c = 0, d = a.length; c < d; c++)
          b += this._package(a[c]) + (c < d - 1 ? "," : "");
      else {
        b += "$";
        for (c in a)
          "n" === c || "r" === c
            ? (b +=
                c +
                encodeURIComponent(
                  a[c].match(/^https?:\/\/(.*?\/.*)\??.*$/)[1]
                ) +
                "$")
            : -1 !== a[c] && (b += c + a[c] + "$");
        b = b.substring(0, b.length - 1);
      }
      return b;
    },
    _judgeORI: function (a) {
      if (a) {
        var b = [],
          c;
        for (c in a)
          if (
            !isNaN(a[c]) &&
            (-1 > a[c] || a[c] > this.config.debugIndexTime)
          ) {
            a = new h(e.performance.timing, e.performance.navigation);
            this._post(a.getOriTime(), "debug");
            b = this.collectResourceByType("resource");
            this._subConcatSend(this._package(b), "debug");
            break;
          }
      }
    },
    setOptions: function (a) {
      a && (this.config = this._mergerObj([this.config, a]));
    },
    collectResourceByName: function (a) {
      if (e.performance && e.performance.getEntries) {
        var b = [],
          c = e.performance.getEntriesByType("resource"),
          d,
          g,
          f;
        if ("[object Array]" === Object.prototype.toString.call(a))
          for (f = 0; f < a.length; f++)
            for (d = 0, g = c.length; d < g; d++) {
              if (
                "undefined" !== typeof a[f] &&
                a[f] === c[d].name &&
                -1 ===
                  c[d].name.indexOf("http://mic.pro6e.com/probe/map.gif") &&
                -1 === c[d].name.indexOf("http://mic.pro6e.com/probe/mine.gif")
              ) {
                b.push(this.collectTime(c[d]));
                break;
              }
            }
        else
          for (d = 0, g = c.length; d < g; d++)
            if (
              "undefined" !== typeof a &&
              a === c[d].name &&
              -1 === c[d].name.indexOf("http://mic.pro6e.com/probe/map.gif") &&
              -1 === c[d].name.indexOf("http://mic.pro6e.com/probe/mine.gif")
            ) {
              b.push(this.collectTime(c[d]));
              break;
            }
        return b;
      }
    },
    collectResourceByType: function (a) {
      if (a && e.performance && e.performance.getEntries) {
        for (
          var b = [],
            c = e.performance.getEntriesByType("resource"),
            d = 0,
            g = c.length;
          d < g;
          d++
        )
          -1 === c[d].name.indexOf("http://mic.pro6e.com/probe/map.gif") &&
            -1 === c[d].name.indexOf("http://mic.pro6e.com/probe/mine.gif") &&
            ("resource" !== a &&
              a === c[d].initiatorType &&
              b.push(this.collectTime(c[d])),
            "resource" === a && b.push(this.collectTime(c[d])));
        return b;
      }
    },
    collectPage: function () {
      if (e.performance) {
        var a = this.collectTime(e.performance.timing),
          b = this._getCookies();
        0 < b.length && (a.x = b);
        l.referrer && (a.r = l.referrer);
        if (e.detect) {
          var b = detect.parse().browser,
            c = b.core;
          delete b.core;
          var d = [
              "name:bn",
              "version:nv",
              "isShell:sh",
              "mode:bm",
              "isCompatMode:bc",
            ],
            g = ["name:cn", "version:cv", "mode:cm", "isCompatMode:cc"],
            f,
            h,
            k;
          for (h = 0; h < d.length; h++)
            (f = d[h].split(":")),
              f[0] in b &&
                ((k = b[f[0]]),
                "boolean" === typeof k && (k = k ? "1" : "0"),
                (a[f[1]] = k));
          if (b.isShell && c)
            for (h = 0; h < g.length; h++)
              (f = g[h].split(":")),
                f[0] in b &&
                  ((k = b[f[0]]),
                  "boolean" === typeof k && (k = k ? "1" : "0"),
                  (a[f[1]] = k));
        }
        return a;
      }
    },
    collectTime: function (a) {
      if (a) {
        var b = {},
          b = this._measureTime(a);
        a.entryType || (b.s = this._measureScreen());
        return b;
      }
    },
    _getCookies: function () {
      var a = this.config.cookies,
        b = "";
      if (a && a.length)
        for (var c = 0; c < a.length; c++)
          b +=
            a[c] +
            "|" +
            ((RegExp("(?:^|;)\\s*" + a[c] + "\x3d([^;]*)").test(document.cookie)
              ? RegExp.$1
              : null) || "") +
            (c === a.length - 1 ? "" : ",");
      return b;
    },
    _mergerObj: function (a) {
      var b = {},
        c,
        d,
        e;
      d = 0;
      for (e = a.length; d < e; d++) for (c in a[d]) b[c] = a[d][c];
      return b;
    },
    _measureTime: function (a) {
      var b = new h(a, e.performance.navigation),
        c = {},
        d = this.config;
      d.netWorkTime &&
        ((c.a = b.navigationStart()),
        (c.b = b.domainLookupTime()),
        (c.c = b.connectTime()));
      d.serverTime &&
        ((c.d = b.requestReadyTime()),
        (c.e = b.responseTime()),
        (c.f = b.receivedTime()));
      d.browserTime &&
        (0 === b.type
          ? ((c.g = b.domParsingTime()),
            (c.h = b.resourcesLoadedTime()),
            (c.i = b.domContentLoadedTime()),
            (c.j = b.firstPaintTime()),
            (c.k = b.loadedTime()),
            (c.l = b.requestCount()),
            (c.m = b.isCache() ? 0 : 1),
            (c.o = e.performance.navigation
              ? e.performance.navigation.type
              : -1),
            (c.n = e.location.href))
          : ((c.k = b.loadedTime()),
            (c.m = b.isCache() ? 0 : 1),
            (c.n = a.name)));
      return c;
    },
    _measureScreen: function () {
      return (
        e.screen.width +
        "*" +
        e.screen.height +
        "|" +
        e.screen.availWidth +
        "*" +
        e.screen.availHeight
      );
    },
    _browserViewPortSize: function () {
      var a = Math.max(l.documentElement.clientWidth, e.innerWidth || 0),
        b = Math.max(l.documentElement.clientHeight, e.innerHeight || 0);
      return a + "*" + b;
    },
  };
  h.prototype = {
    constructor: this,
    navigationStart: function () {
      return 0 === this.type ? -1 : Math.round(this.timing.navigationStart);
    },
    domainLookupTime: function () {
      return this._validate(
        this.timing.domainLookupEnd - this.timing.domainLookupStart
      );
    },
    connectTime: function () {
      return this._validate(this.timing.connectEnd - this.timing.connectStart);
    },
    sslTime: function () {
      return this.timing.secureConnectionStart
        ? this._validate(
            this.timing.connectEnd - this.timing.secureConnectionStart
          )
        : -1;
    },
    requestReadyTime: function () {
      return this._validate(this.timing.requestStart - this.timing.connectEnd);
    },
    responseTime: function () {
      return 0 === this.timing.requestStart
        ? -1
        : this._validate(this.timing.responseStart - this.timing.requestStart);
    },
    receivedTime: function () {
      return this.timing.responseEnd === this.timing.navigationStart
        ? 0
        : 1e7 < this.timing.responseEnd - this.timing.responseStart
        ? -1
        : this._validate(this.timing.responseEnd - this.timing.responseStart);
    },
    domContentLoadedTime: function () {
      return this.timing.domContentLoadedEventStart
        ? this._validate(
            this.timing.domContentLoadedEventStart - this.timing.navigationStart
          )
        : -1;
    },
    domParsingTime: function () {
      return this.timing.domContentLoadedEventStart
        ? this._validate(this.timing.domInteractive - this.timing.domLoading)
        : -1;
    },
    resourcesLoadedTime: function () {
      var a = this.timing.domLoading;
      a > this.timing.requestStart && (a = this.timing.responseEnd);
      return this.timing.loadEventStart
        ? this._validate(this.timing.loadEventStart - a)
        : -1;
    },
    loadedTime: function () {
      return 0 === this.type
        ? this._validate(
            this.timing.loadEventStart - this.timing.navigationStart
          )
        : Math.round(this.timing.duration);
    },
    firstPaintTime: function () {
      var a = e.performance.timing.msFirstPaint;
      "undefined" !== typeof chrome &&
        chrome.loadTimes &&
        chrome.loadTimes() &&
        (a = 1e3 * chrome.loadTimes().firstPaintTime);
      return a ? this._validate(a - this.timing.navigationStart) : -1;
    },
    requestCount: function () {
      return e.performance.getEntries
        ? e.performance.getEntriesByType("resource").length
        : -1;
    },
    isCache: function () {
      if (0 === this.type) {
        if (this.navigation && 1 === this.navigation.type) return !1;
        if (
          0 === this.timing.requestStart ||
          this.timing.connectStart === this.timing.connectEnd
        )
          return !0;
      } else if (this.timing.fetchStart === this.timing.responseEnd) return !0;
      return !1;
    },
    _validate: function (a) {
      return 0 > a ? -1 : Math.round(a);
    },
    getOriTime: function () {
      return window.JSON
        ? JSON.stringify(this.timing)
        : "err : JSON object can't get!";
    },
    __fixedTimeLine: function (a) {
      var b = {};
      if (!a) return b;
      var c = "navigationStart redirectStart unloadEventStart unloadEventEnd redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart secureConnectionStart connectEnd requestStart responseStart responseEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(
          " "
        ),
        d;
      1 === this.type &&
        ((c = c.slice(0, 14)),
        c.splice(2, 2),
        (c = c.concat(["duration", "entryType", "initiatorType", "name"])));
      for (var e = 0; e < c.length; e++)
        (d = c[e]),
          (b[d] =
            1 === this.type && "navigationStart" === d ? a.startTime : a[d]);
      return b;
    },
  };
  var g = (function () {
    if (e.addEventListener)
      return function (a, b, c) {
        a.addEventListener(b, c, !1);
      };
    if (e.attachEvent)
      return function (a, b, c) {
        this.attachEvent("on" + b, function () {
          c.call(a);
        });
      };
  })();
  return m;
});
/*
page: http://www.leadong.com/
url: http://pylon.pro6e.com/gb/js/assets/probe/probe_3415_1.js?v=2
*/
