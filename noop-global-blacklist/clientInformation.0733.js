(function () {
  var domainGroups = {};
  var positions = {};
  try {
    positions["928444768"] = [
      "#bcfblike",
      "div.asset-tags",
      'div[id^="video-ad-asset-container"]',
    ];
    positions["-1458072320"] = positions["928444768"];
    positions["-1377717408"] = [
      "#t402-prompt-iframe",
      "div.asset-tags",
      "div.fb-like",
      "div:nth-of-type(3) > div.col-md-7 > div.row > div:nth-of-type(1)",
      'div[id^="video-ad-asset-container"]',
    ];
    positions["1417824736"] = positions["-1377717408"];
    positions["1266705312"] = positions["-1377717408"];
    positions["391953888"] = positions["-1377717408"];
    positions["553062368"] = positions["-1377717408"];
    positions["-415800448"] = positions["-1377717408"];
    positions["-673883648"] = positions["-1377717408"];
    positions["-1245344320"] = positions["-1377717408"];
    positions["1473061056"] = [
      ".bcSlideOutContent",
      "div#footer-col-three",
      'div#tncms-region-global-side-primary div[id^="tncms-block-116"]',
      "div.asset-tags",
      'div[id^="video-ad-asset-container"]',
    ];
    positions["312058624"] = positions["1473061056"];
    positions["-1346676544"] = positions["1473061056"];
    positions["-99118592"] = positions["1473061056"];
    positions["1368553504"] = positions["1473061056"];
    positions["565671712"] = positions["1473061056"];
    positions["-1331968064"] = [
      "div.asset-tags",
      'div[id^="video-ad-asset-container"]',
    ];
    positions["-1418089088"] = positions["-1331968064"];
    positions["-1201553216"] = positions["-1331968064"];
    positions["502230688"] = positions["-1331968064"];
    positions["1641027680"] = positions["-1331968064"];
    positions["1066711136"] = positions["-1331968064"];
    positions["327552448"] = positions["-1331968064"];
  } catch (err) {}
  (function (a) {
    window.blueConicPreListeners = [];
    (function () {
      var b = false,
        c = /xyz/.test(function () {
          xyz;
        })
          ? /\b_super\b/
          : /.*/;
      this.BCClass = function () {};
      BCClass.extend = function (h) {
        var g = this.prototype;
        b = true;
        var f = new this();
        b = false;
        for (var e in h) {
          f[e] =
            typeof h[e] == "function" &&
            typeof g[e] == "function" &&
            c.test(h[e])
              ? (function (i, j) {
                  return function () {
                    var l = this._super;
                    this._super = g[i];
                    var k = j.apply(this, arguments);
                    this._super = l;
                    return k;
                  };
                })(e, h[e])
              : h[e];
        }
        function d() {
          if (!b && this.init) {
            this.init.apply(this, arguments);
          }
        }
        d.prototype = f;
        d.constructor = d;
        d.extend = arguments.callee;
        return d;
      };
    })();
    // Base for all InteractionTypeImpl
    var InteractionType = BCClass.extend({
      init: function (pageTracker) {
        this.pageTracker = pageTracker;
      },
      getPreloadProperties: function () {
        return [];
      },
      getContent: function () {},
      onEvent: function () {},
      importLibraries: function (urls) {
        blueConic.fn.importLibraries.call(this, urls);
      },
    });

    //
    // listenerinteractiontype
    //
    (function () {
      var InteractionTypeImpl = InteractionType.extend({
        init: function (a, b) {
          this.blueConicClient = a;
          this.context = b;
          this.profile = a.profile.getProfile();
          this.referrer = document.referrer;
          this.currentUrl = window.location.href;
        },
        onPrepare: function () {
          var a = this.profile,
            b;
          if (
            (b =
              window.navigator.userLanguage ||
              navigator.systemLanguage ||
              window.navigator.language)
          ) {
            var d = -1 !== b.indexOf("-") ? b.indexOf("-") : b.indexOf("_");
            -1 !== d && (b = b.substring(0, d));
            b = b.toLowerCase();
          } else b = null;
          b && a.setValue("language", b);
          b = screen.width;
          var d = screen.height,
            c = b + "x" + d;
          a.setValue("currentresolution", c);
          a.setValue("currentscreenwidth", b);
          a.setValue("currentscreenheight", d);
          a.addValue("resolution", c);
          b = this.referrer;
          d = this.HELPER.decodeReferrer(b);
          c = [];
          if (d && 0 < d.length)
            for (var f = 0; f < d.length; f++)
              d[f] && (a.addValue("keywords", d[f]), c.push(d[f]));
          0 < c.length && a.setValues("currentkeywords", c);
          b = b.replace(/http[s]?:\/\/(.*?)(:|\?|\/|$).*/, "$1");
          b !== window.location.hostname &&
            "" !== b &&
            a.setValue("referrerhost", b);
          var g = this.currentUrl;
          b = this.HELPER.substringToHash(
            this.HELPER.decodeReferrerQS(g, "utm_source")
          );
          d = this.HELPER.substringToHash(
            this.HELPER.decodeReferrerQS(g, "utm_medium")
          );
          c = this.HELPER.substringToHash(
            this.HELPER.decodeReferrerQS(g, "utm_term")
          );
          f = this.HELPER.substringToHash(
            this.HELPER.decodeReferrerQS(g, "utm_content")
          );
          g = this.HELPER.substringToHash(
            this.HELPER.decodeReferrerQS(g, "utm_campaign")
          );
          if (b || d || c || f || g)
            a.setValue("current_utm_source", b),
              a.setValue("current_utm_medium", d),
              a.setValue("current_utm_term", c),
              a.setValue("current_utm_content", f),
              a.setValue("current_utm_campaign", g),
              b && a.addValue("utm_source", b),
              d && a.addValue("utm_medium", d),
              c && a.addValue("utm_term", c),
              f && a.addValue("utm_content", f),
              g && a.addValue("utm_campaign", g);
        },
        getPreloadProperties: function () {
          var a = [];
          a.push("clickcount");
          a.push("visits");
          a.push("visitclicks");
          a.push("lastvisitdate");
          a.push("visitedsites");
          a.push("entrypage");
          a.push("hostentrypage");
          a.push("hostaveragetime");
          a.push("lastreferreraverage");
          a.push("averageTime");
          a.push("resolution");
          return a;
        },
        onLoad: function () {
          var a = this.profile,
            b = this.referrer.replace(/http[s]?:\/\/(.*?)(:|\?|\/|$).*/, "$1"),
            d = window.location.hostname,
            c,
            f;
          if (b !== d) {
            "" !== b && a.addValue("referrerhosts", b);
            f = this.currentUrl;
            a.setValue("entrypage", f);
            var g = a.getValue("hostentrypage");
            if (g)
              try {
                g = eval(g);
              } catch (p) {
                g = {};
              }
            else g = {};
            g[d] = { entrypage: f };
            var h = "{";
            for (c in g)
              "}" === h.substring(h.length - 1) && (h += ","),
                (f = "" + c),
                (h += '"' + f + '" : {'),
                (h += '"entrypage" : "' + g[c].entrypage),
                (h += '"}');
            a.setValue("hostentrypage", h + "}");
          }
          var l = this.blueConicClient.getCurrentDate().getTime(),
            e = a.getValue("hostaveragetime");
          if (e)
            try {
              (e = e.replace(/'/g, '"')),
                (e = this.blueConicClient.json.parse(e));
            } catch (p) {
              e = {};
            }
          else e = {};
          "undefined" === typeof e[d] &&
            (e[d] = { startdate: l, enddate: l, averageTime: 0, visits: 0 });
          var q = a.getValue("lastreferreraverage"),
            h = (g = 0),
            k = "{";
          for (c in e) {
            f = "" + c;
            var m = new Date();
            m.setTime(e[c].enddate);
            m.setMinutes(m.getMinutes() + 15);
            if (l > m.getTime()) {
              m = e[c].enddate - e[c].startdate;
              if (0 < m) {
                var n = e[c].visits + 1;
                e[c].averageTime = Math.round(
                  (e[c].visits * e[c].averageTime + m) / n / 1e3
                );
                e[c].visits = n;
              }
              e[c].startdate = l;
              e[c].enddate = l;
            } else
              f === d
                ? (e[c].enddate = l)
                : f === b &&
                  q !== b &&
                  ((e[c].enddate = l), a.setValue("lastreferreraverage", b));
            "}" === k.substring(k.length - 1) && (k += ",");
            k += '"' + f + '" : {';
            k += '"startdate" : ' + e[c].startdate;
            k += ', "enddate" : ' + e[c].enddate;
            k += ', "averageTime" : ' + e[c].averageTime;
            k += ', "visits" : ' + e[c].visits;
            k += "}";
            0 !== e[c].averageTime && ((h += 1), (g += e[c].averageTime));
          }
          b = 0;
          0 < h && (b = Math.round(g / h));
          a.setValue("hostaveragetime", k + "}");
          a.setValue("averagetime", b);
          b = this._getNumberProperty("clickcount");
          d = a.getValues("visitedsites");
          c = blueConicClient.util.array
            ? blueConicClient.util.array.indexOfArray
            : indexOfArray;
          (null !== d &&
            0 !== d.length &&
            -1 !== c.call(this, d, document.domain)) ||
            a.addProperty("visitedsites", document.domain);
          a.setValue("clickcount", b + 1);
          b = a.getValue("lastvisitdate");
          "" === b && (b = 0);
          d = new Date(parseInt(b));
          d.setMinutes(d.getMinutes() + 30);
          b = this.blueConicClient.getCurrentDate();
          c = this._getNumberProperty("visits");
          b > d || 0 === c
            ? (a.setValue("visitclicks", 1),
              a.setValue("visits", c + 1),
              this.blueConicClient.getRequestInfo() ||
                a.addValue("resolution", screen.width + "x" + screen.height))
            : ((d = this._getNumberProperty("visitclicks")),
              a.setValue("visitclicks", d + 1));
          a.setValue("lastvisitdate", b.getTime());
          blueConicClient.profile.updateProfile();
        },
        HELPER: {
          search_engines: [
            ["google\\.", "q"],
            ["bing\\.", "q"],
            ["search\\.yahoo\\.", "p"],
            ["search\\.msn\\.", "q"],
            ["search\\.live\\.", "query"],
            ["search\\.aol\\.", "userQuery"],
            ["ask\\.com", "q"],
            ["altavista\\.", "q"],
            ["feedster\\.", "q"],
            ["search\\.lycos\\.", "q"],
            ["alltheweb\\.", "q"],
            ["technorati\\.com/search/([^\\?/]+)", 1],
            ["dogpile\\.com/info\\.dogpl/search/web/([^\\?/]+)", 1, !0],
          ],
          substringToHash: function (a) {
            if (a) {
              var b = a.indexOf("#");
              if (-1 !== b) return a.substring(0, b);
            }
            return a;
          },
          decodeReferrer: function (a) {
            for (
              var b = RegExp(""), d = 0;
              d < this.search_engines.length;
              d++
            ) {
              var c = this.search_engines[d];
              b.compile("^http(s?)://(www\\.)?" + c[0], "i");
              var f = a.match(b);
              if (f) {
                if (
                  (a = isNaN(c[1])
                    ? this.decodeReferrerQS(a, c[1])
                    : f[c[1] + 1])
                )
                  return (
                    (a = decodeURIComponent(a)),
                    2 < c.length && c[2] && (a = decodeURIComponent(a)),
                    (a = a.replace(/\'|"/g, "")),
                    (a = a.split(/[\s,\+\.]+/))
                  );
                break;
              }
            }
            return null;
          },
          decodeReferrerQS: function (a, b) {
            if (
              null === b ||
              "undefined" === typeof b ||
              "" === b ||
              null === a ||
              "undefined" === typeof a ||
              "" === a
            )
              return null;
            a = decodeURIComponent(a);
            var d = a.indexOf("?");
            if (0 <= d)
              for (
                var c = new String(a.substring(d + 1)), f = (a = d = 0);
                0 <= d && 0 <= (a = c.indexOf("=", d));

              ) {
                f++;
                var g;
                g = c.substring(d, a);
                d = c.indexOf("&", a) + 1;
                if (g === b)
                  return 0 >= d
                    ? c.substring(a + 1)
                    : c.substring(a + 1, d - 1);
                if (0 >= d) break;
                if (1e3 < f) break;
              }
            return null;
          },
        },
        _getNumberProperty: function (a) {
          a = this.profile.getValue(a);
          try {
            a = parseInt(a);
          } catch (b) {
            a = 0;
          }
          isNaN(a) && (a = 0);
          return a;
        },
      });
      // end of interaction type

      // Register listener 'listenerinteractiontype':
      window.blueConicPreListeners.push({
        id: "listenerinteractiontype",
        interactionType: InteractionTypeImpl,
      });
    })(); // end of interaction type + register interaction type

    /* Next pre listener */
  })();
  (function (
    window,
    bcVerbose,
    bcOverrulledReferer,
    bcHostname,
    domainGroups,
    positions,
    preListeners,
    undefined
  ) {
    var VERSION = "2.2.0";
    var BC_URL = "https://lee.blueconic.net";
    var PROTOCOL =
      "https:" == document.location.protocol ? "https://" : "http://";
    var bcHostnameA = document.createElement("a");
    bcHostnameA.href = BC_URL;
    if (
      bcHostnameA.href.substring(bcHostnameA.protocol.length).indexOf(":") ===
      -1
    ) {
      bcHostname = bcHostnameA.hostname;
    } else {
      bcHostname = bcHostnameA.host;
    }
    var BC_MGT = false;
    if (
      (window.name && window.name.indexOf("bc_") == 0) ||
      top.window != window ||
      (document.cookie && document.cookie.indexOf("BC_e=true") != -1)
    ) {
      if (!(window.top == window && !window.opener)) {
        PROTOCOL = BC_URL.indexOf("https://") > -1 ? "https://" : "http://";
        BC_MGT = true;
        try {
          if (top.location.host == document.location.host && !window.opener) {
            BC_MGT = false;
          }
        } catch (e) {
          BC_MGT = true;
        }
      }
    }
    if (bcHostname && bcHostname.indexOf("localhost") == 0) {
      PROTOCOL =
        bcHostname.indexOf(":") == -1 || bcHostname.indexOf(":9090") != -1
          ? "https://"
          : "http://";
    }
    var COOKIE_BCSESSION = "BCSessionID";
    var COOKIE_BCTEMPSESSION = "BCTempID";
    var COOKIE_BCZONEID = "BCZoneID";
    var TEMP_COOKIE_TTL = 600000;
    var COOKIE_REVISION = "BCRevision";
    if (window.blueConicClient && BC_URL.indexOf(bcHostname) != -1) {
      return;
    }
    var getBCServer = function () {
      if (BC_MGT) {
        return BC_URL;
      }
      var bcServer =
        typeof bcHostname != "undefined" ? PROTOCOL + bcHostname : null;
      if (
        !bcServer ||
        BC_URL.indexOf(bcHostname.split(":")[0].replace("http://", "")) == -1
      ) {
        bcServer = BC_URL;
      }
      if (!bcServer) {
        bcServer = (function () {
          var scriptElement,
            scriptSrc,
            tmpA,
            scriptElements = document.getElementsByTagName("script");
          for (var i = 0, l = scriptElements.length; i < l; i++) {
            scriptElement = scriptElements[i];
            scriptSrc = scriptElement.getAttribute("src");
            if (scriptSrc && scriptSrc.indexOf("/blueconic/blueconic") !== -1) {
              tmpA = document.createElement("a");
              tmpA.href = scriptSrc;
              return PROTOCOL + tmpA.host;
            }
          }
        })();
      }
      return bcServer;
    };
    var BC_SERVER = getBCServer();
    var PLUGIN_URL = "/plugin/plugin";
    var LIBRARY_URL = "/plugin/library";
    var TEMPLATES_URL = "/templates";
    var OVERRULLED_HOSTNAME =
      typeof bcOverrulledReferer != "undefined" && bcOverrulledReferer
        ? bcOverrulledReferer
        : null;
    var setDefaultLocale = function setDefaultLocale() {
      var browserlanguage =
        window.navigator.userLanguage ||
        navigator.systemLanguage ||
        window.navigator.language;
      if (!browserlanguage) {
        return null;
      }
      var seperatorIndex =
        browserlanguage.indexOf("-") !== -1
          ? browserlanguage.indexOf("-")
          : browserlanguage.indexOf("_");
      if (seperatorIndex != -1) {
        browserlanguage = browserlanguage.substring(0, seperatorIndex);
      }
      browserlanguage = browserlanguage.toLowerCase();
      return browserlanguage;
    };
    var LOCALE = setDefaultLocale.call(this);
    var START_TIME = new Date().getTime();
    var IS_VERBOSE = typeof bcVerbose != "undefined" && bcVerbose;
    var HAS_CONSOLE = typeof console != "undefined" && console && console.log;
    var IS_DOCUMENT_READY = false;
    var PREVENT_MULTIPLE_EXECUTION_PLUGIN_TYPES = ["LISTENER", "TOOLBAR"];
    var SET_CONTENT_MAX_RECURSION = 50;
    var SET_CONTENT_TIMEOUT = 100;
    var IS_ONEVENT = false;
    var PREVENT_UPDATEPROFILE = false;
    var IS_PRELOAD_PROPERTIES_READY = false;
    var IS_LIBRARY_IMPORT_READY = false;
    var IS_TEMPLATES_READY = false;
    var SIMULATOR_DATE = null;
    var IS_HTTPS = "https:" == document.location.protocol;
    var asyncHandleTO = null;
    var USER_AGENT = (function () {
      if (window.navigator && window.navigator.userAgent) {
        return navigator.userAgent.toLowerCase();
      } else {
        return "unknown";
      }
    })();
    var IS_CORS_SUPPORTED = (function () {
      if (typeof XMLHttpRequest != "undefined" && XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
          IS_VERBOSE &&
            HAS_CONSOLE &&
            console.log(
              "CORS is fully supported. Chrome/Firefox/Opera/Safari/IE10+"
            );
          return true;
        } else {
          if (typeof XDomainRequest != "undefined") {
            IS_VERBOSE &&
              HAS_CONSOLE &&
              console.log(
                "CORS is not fully supported in IE8/9, fallback to old GET mechanism."
              );
            return false;
          }
        }
      }
      IS_VERBOSE && HAS_CONSOLE && console.log("CORS is not supported.");
      return false;
    })();
    var IS_LOCAL_STORAGE_SUPPORTED = (function () {
      var mod = "modernizr";
      try {
        localStorage.setItem(mod, mod);
        localStorage.removeItem(mod);
        return true;
      } catch (e) {
        return false;
      }
    })();
    var HAS_JSON_SUPPORT = false;
    var IS_DOCUMENT_COOKIE_ALLOWED = (function () {
      try {
        document.cookie;
        return true;
      } catch (err) {
        return false;
      }
    })();
    var ONE_SECOND = 1000;
    var ONE_DAY = ONE_SECOND * 60 * 60 * 24;
    var MAX_RPC_REQUEST_LENGTH = (function () {
      if (USER_AGENT.indexOf("firefox") !== -1) {
        return 1024 * 7;
      } else {
        if (USER_AGENT.indexOf("chrome") !== -1) {
          return 1024 * 7;
        } else {
          return 1024 * 3;
        }
      }
    })();
    var JSON = null;
    var toString = Object.prototype.toString,
      hasOwn = Object.prototype.hasOwnProperty,
      push = Array.prototype.push,
      indexOf = Array.prototype.indexOf;
    var myChannelId = null;
    var myRemoteIp = null;
    var myInteractionNames = [];
    var mySegments = [];
    var myConnections = [];
    var myRequestInfo = null;
    var myProfile = null;
    var myPluginVersion = null;
    var myLibraryVersion = null;
    var myTemplateVersion = null;
    var myStaticUrls = [];
    var myInteractionTypeConstructors = {};
    var myInteractionTypeLibraries = {};
    var myCachedLibraries = {};
    var myLibraries = {};
    var myTemplates = {};
    var myPreHideCSSId = "bc_pre_" + new Date().getTime();
    var myPostHideCSSId = "bc_post_" + new Date().getTime();
    var myAsyncHideCSSId = "bc_async_" + new Date().getTime();
    var myDomainGroups = domainGroups;
    var myPositions = positions;
    var myPreListeners = preListeners ? preListeners : [];
    var myFixedModes = ["bc_simulator", "bc_dialogues", "bc_visualpicker"];
    var myGlobalVarBlacklist = [
      "window",
      "top",
      "location",
      "external",
      "chrome",
      "v8Locale",
      "document",
      "bcHostname",
      "bcVerbose",
      "blueConicClient",
      "BCClass",
      "CSSMediaRule",
      "SVGAnimatedPreserveAspectRatio",
      "Uint32Array",
      "webkitNotifications",
      "SVGNumber",
      "WebGLContextEvent",
      "TimeRanges",
      "SVGTransform",
      "HTMLHRElement",
      "webkitStorageInfo",
      "SVGFontFaceUriElement",
      "SVGFEFuncBElement",
      "status",
      "HTMLUListElement",
      "SVGCircleElement",
      "WebGLRenderbuffer",
      "SVGSetElement",
      "SVGFilterElement",
      "SVGPreserveAspectRatio",
      "EntityReference",
      "HTMLFrameSetElement",
      "SVGAnimateMotionElement",
      "CSSRule",
      "history",
      "SVGTextContentElement",
      "Float32Array",
      "HTMLTextAreaElement",
      "screenY",
      "Window",
      "WebKitPoint",
      "WebSocket",
      "SVGPathSegLinetoVerticalAbs",
      "HTMLTableRowElement",
      "HTMLSourceElement",
      "FileError",
      "XMLHttpRequest",
      "outerHeight",
      "SVGLength",
      "SVGPathSegCurvetoQuadraticSmoothRel",
      "SVGAnimatedLength",
      "HashChangeEvent",
      "SVGPathSegList",
      "SVGFEFloodElement",
      "SVGFEFuncAElement",
      "EventSource",
      "HTMLPreElement",
      "SVGException",
      "HTMLStyleElement",
      "HTMLHtmlElement",
      "SVGPathSegCurvetoQuadraticAbs",
      "SVGPathSegCurvetoCubicRel",
      "CSSValueList",
      "HTMLAnchorElement",
      "closed",
      "WebKitCSSKeyframesRule",
      "MouseEvent",
      "sessionStorage",
      "SVGFEMergeElement",
      "HTMLSelectElement",
      "MediaList",
      "parent",
      "webkitIDBTransaction",
      "SVGAnimatedEnumeration",
      "screenTop",
      "SVGGlyphElement",
      "SVGVKernElement",
      "DocumentFragment",
      "webkitIDBKeyRange",
      "OfflineAudioCompletionEvent",
      "SVGRadialGradientElement",
      "SVGPatternElement",
      "SVGFontFaceNameElement",
      "StyleSheetList",
      "HTMLMediaElement",
      "Rect",
      "WebKitTransitionEvent",
      "SVGAnimatedInteger",
      "DOMTokenList",
      "CanvasPattern",
      "SVGPathSegClosePath",
      "HTMLFrameElement",
      "AudioProcessingEvent",
      "SVGScriptElement",
      "SVGFEDropShadowElement",
      "webkitURL",
      "Int8Array",
      "defaultStatus",
      "SVGFECompositeElement",
      "HTMLTitleElement",
      "SVGMissingGlyphElement",
      "SVGEllipseElement",
      "SVGTSpanElement",
      "HTMLFormElement",
      "Comment",
      "NamedNodeMap",
      "SVGPathSegLinetoRel",
      "SVGForeignObjectElement",
      "HTMLDListElement",
      "navigator",
      "toolbar",
      "SVGLengthList",
      "WebKitCSSFilterValue",
      "WebGLUniformLocation",
      "DocumentType",
      "PluginArray",
      "Event",
      "WebKitCSSRegionRule",
      "HTMLDivElement",
      "HTMLQuoteElement",
      "SVGFEFuncGElement",
      "CSSStyleSheet",
      "ImageData",
      "SVGElementInstanceList",
      "XMLSerializer",
      "SVGStringList",
      "WebGLActiveInfo",
      "Notation",
      "SVGRenderingIntent",
      "self",
      "SVGAnimatedRect",
      "frames",
      "SVGDocument",
      "Entity",
      "SVGTRefElement",
      "HTMLBRElement",
      "defaultstatus",
      "HTMLLabelElement",
      "SVGCursorElement",
      "CustomEvent",
      "SVGFEColorMatrixElement",
      "MessageChannel",
      "SVGElementInstance",
      "webkitIDBObjectStore",
      "HTMLBaseFontElement",
      "HTMLAreaElement",
      "OverflowEvent",
      "WebGLTexture",
      "CSSFontFaceRule",
      "personalbar",
      "HTMLDirectoryElement",
      "frameElement",
      "ClientRect",
      "HTMLProgressElement",
      "SVGTextPositioningElement",
      "CSSStyleDeclaration",
      "MediaError",
      "SVGAnimatedNumber",
      "XMLHttpRequestProgressEvent",
      "SVGPathSegLinetoAbs",
      "XPathEvaluator",
      "SVGFEDiffuseLightingElement",
      "SVGGlyphRefElement",
      "WebGLRenderingContext",
      "webkitIDBDatabaseException",
      "screen",
      "HTMLScriptElement",
      "HTMLElement",
      "event",
      "SVGAltGlyphDefElement",
      "SVGPolygonElement",
      "KeyboardEvent",
      "SVGFontElement",
      "SVGFEImageElement",
      "SVGFEPointLightElement",
      "NodeFilter",
      "CSSCharsetRule",
      "SVGPathSegCurvetoCubicAbs",
      "Clipboard",
      "SVGColor",
      "Worker",
      "PageTransitionEvent",
      "ProgressEvent",
      "WebKitCSSMatrix",
      "offscreenBuffering",
      "UIEvent",
      "HTMLFieldSetElement",
      "HTMLObjectElement",
      "Selection",
      "CSSPrimitiveValue",
      "HTMLCollection",
      "HTMLAudioElement",
      "Uint8ClampedArray",
      "StorageEvent",
      "WebKitIntent",
      "Document",
      "SVGDescElement",
      "Plugin",
      "HTMLFontElement",
      "WebKitCSSTransformValue",
      "DOMStringList",
      "Uint16Array",
      "HTMLTableSectionElement",
      "DOMImplementation",
      "SVGFEMorphologyElement",
      "MimeTypeArray",
      "SVGPolylineElement",
      "MutationEvent",
      "SVGImageElement",
      "TouchEvent",
      "SVGAnimatedNumberList",
      "BeforeLoadEvent",
      "SVGFontFaceElement",
      "FileReader",
      "HTMLBaseElement",
      "HTMLInputElement",
      "HTMLLinkElement",
      "XPathException",
      "SVGFEDistantLightElement",
      "IceCandidate",
      "pageYOffset",
      "XMLHttpRequestException",
      "SVGPathSegLinetoHorizontalRel",
      "SVGFEOffsetElement",
      "SVGPathSegCurvetoQuadraticSmoothAbs",
      "HTMLLIElement",
      "XPathResult",
      "SVGAltGlyphItemElement",
      "SVGFEDisplacementMapElement",
      "SVGUnitTypes",
      "SVGPointList",
      "SVGFontFaceSrcElement",
      "webkitIDBCursor",
      "StyleSheet",
      "HTMLBodyElement",
      "SVGFEBlendElement",
      "Element",
      "XSLTProcessor",
      "ProcessingInstruction",
      "SharedWorker",
      "Range",
      "PopStateEvent",
      "Int16Array",
      "WebGLBuffer",
      "SVGPathElement",
      "NodeList",
      "MimeType",
      "HTMLModElement",
      "SVGPaint",
      "SVGAElement",
      "HTMLHeadingElement",
      "XMLHttpRequestUpload",
      "HTMLImageElement",
      "SVGPathSegCurvetoCubicSmoothAbs",
      "Blob",
      "HTMLMeterElement",
      "WebKitCSSKeyframeRule",
      "RangeException",
      "CSSRuleList",
      "MessagePort",
      "TextMetrics",
      "HTMLUnknownElement",
      "DOMException",
      "SVGPathSegCurvetoQuadraticRel",
      "Int32Array",
      "SVGAltGlyphElement",
      "DOMSettableTokenList",
      "DataView",
      "SVGHKernElement",
      "SVGRect",
      "SVGAnimateColorElement",
      "SVGAnimatedBoolean",
      "menubar",
      "SVGSVGElement",
      "DOMParser",
      "HTMLOutputElement",
      "WebGLFramebuffer",
      "pageXOffset",
      "HTMLMapElement",
      "WheelEvent",
      "SVGFEConvolveMatrixElement",
      "CanvasGradient",
      "ClientRectList",
      "HTMLAppletElement",
      "HTMLOListElement",
      "TextEvent",
      "SVGElement",
      "crypto",
      "scrollbars",
      "SVGRectElement",
      "SVGSymbolElement",
      "SVGFEFuncRElement",
      "SVGFETurbulenceElement",
      "locationbar",
      "SVGAnimatedString",
      "CanvasRenderingContext2D",
      "SVGPathSegLinetoVerticalRel",
      "SVGGElement",
      "webkitIndexedDB",
      "Image",
      "HTMLTableColElement",
      "length",
      "SVGUseElement",
      "MediaController",
      "webkitAudioPannerNode",
      "SVGFESpecularLightingElement",
      "SVGLineElement",
      "webkitIDBFactory",
      "CloseEvent",
      "SVGPathSegMovetoRel",
      "opener",
      "FileList",
      "CharacterData",
      "localStorage",
      "globalStorage",
      "webkitIDBDatabaseError",
      "HTMLSpanElement",
      "SVGAnimateElement",
      "performance",
      "outerWidth",
      "Node",
      "XMLDocument",
      "scrollX",
      "Uint8Array",
      "WebKitMutationObserver",
      "SVGFontFaceFormatElement",
      "SVGFEGaussianBlurElement",
      "styleMedia",
      "DeviceOrientationEvent",
      "screenLeft",
      "HTMLKeygenElement",
      "WebKitBlobBuilder",
      "name",
      "HTMLParagraphElement",
      "EventException",
      "CSSPageRule",
      "SVGMaskElement",
      "webkitIDBDatabase",
      "SVGStopElement",
      "SVGNumberList",
      "SQLException",
      "HTMLDocument",
      "SVGAnimatedLengthList",
      "WebKitAnimationEvent",
      "SVGAnimatedTransformList",
      "HTMLHeadElement",
      "Attr",
      "Text",
      "SVGMarkerElement",
      "SVGTransformList",
      "SVGViewElement",
      "innerHeight",
      "WebGLShader",
      "SVGMatrix",
      "Counter",
      "CompositionEvent",
      "devicePixelRatio",
      "HTMLIFrameElement",
      "ErrorEvent",
      "HTMLTableCaptionElement",
      "SVGPoint",
      "SVGMetadataElement",
      "SVGFETileElement",
      "SVGMPathElement",
      "clientInformation",
      "CSSValue",
      "CDATASection",
      "HTMLEmbedElement",
      "SVGTextElement",
      "HTMLVideoElement",
      "screenX",
      "webkitAudioContext",
      "FormData",
      "SVGPathSegArcAbs",
      "SVGPathSegArcRel",
      "applicationCache",
      "SVGZoomEvent",
      "SessionDescription",
      "WebGLProgram",
      "RGBColor",
      "webkitIDBIndex",
      "Audio",
      "HTMLMarqueeElement",
      "HTMLTableElement",
      "ArrayBuffer",
      "HTMLOptionElement",
      "SVGFEComponentTransferElement",
      "HTMLMenuElement",
      "scrollY",
      "SVGSwitchElement",
      "innerWidth",
      "HTMLLegendElement",
      "console",
      "SVGPathSeg",
      "SVGStyleElement",
      "SVGFEMergeNodeElement",
      "SVGFESpotLightElement",
      "HTMLOptGroupElement",
      "SpeechInputEvent",
      "SVGLinearGradientElement",
      "File",
      "Option",
      "HTMLAllCollection",
      "SVGPathSegMovetoAbs",
      "SVGGradientElement",
      "statusbar",
      "DOMStringMap",
      "SVGTitleElement",
      "webkitIDBRequest",
      "SVGPathSegCurvetoCubicSmoothRel",
      "CSSStyleRule",
      "Float64Array",
      "HTMLParamElement",
      "SVGDefsElement",
      "Storage",
      "SVGTextPathElement",
      "SVGAnimateTransformElement",
      "HTMLTableCellElement",
      "CSSImportRule",
      "SVGComponentTransferFunctionElement",
      "HTMLButtonElement",
      "HTMLCanvasElement",
      "SVGAnimatedAngle",
      "MediaStreamEvent",
      "MessageEvent",
      "SVGAngle",
      "SVGPathSegLinetoHorizontalAbs",
      "HTMLMetaElement",
      "SVGClipPathElement",
      "onplaying",
      "oncanplaythrough",
      "onblur",
      "onclick",
      "ondblclick",
      "onabort",
      "onsearch",
      "onwaiting",
      "oninput",
      "onwebkitanimationstart",
      "ondragover",
      "ontimeupdate",
      "onmouseover",
      "webkitPostMessage",
      "onmousewheel",
      "onkeypress",
      "postMessage",
      "oncontextmenu",
      "ononline",
      "onpopstate",
      "onunload",
      "onseeking",
      "onloadeddata",
      "blur",
      "onmouseup",
      "onhashchange",
      "ondragstart",
      "onstorage",
      "onloadedmetadata",
      "oninvalid",
      "ondurationchange",
      "onratechange",
      "onwebkitanimationiteration",
      "onplay",
      "ondeviceorientation",
      "onkeydown",
      "onerror",
      "onfocus",
      "onsuspend",
      "oncanplay",
      "onresize",
      "onselect",
      "onvolumechange",
      "onreset",
      "onpagehide",
      "onpause",
      "onoffline",
      "ondrag",
      "onemptied",
      "onloadstart",
      "onkeyup",
      "onsubmit",
      "ondragenter",
      "onmousedown",
      "onload",
      "focus",
      "onstalled",
      "onmousemove",
      "onbeforeunload",
      "onmouseout",
      "ondragend",
      "onwebkitanimationend",
      "onended",
      "onseeked",
      "close",
      "onprogress",
      "onwebkittransitionend",
      "onscroll",
      "onchange",
      "ondrop",
      "onpageshow",
      "onmessage",
      "ondragleave",
      "getSelection",
      "print",
      "stop",
      "open",
      "showModalDialog",
      "alert",
      "confirm",
      "prompt",
      "find",
      "scrollBy",
      "scrollTo",
      "scroll",
      "moveBy",
      "moveTo",
      "resizeBy",
      "resizeTo",
      "matchMedia",
      "setTimeout",
      "clearTimeout",
      "setInterval",
      "clearInterval",
      "webkitRequestAnimationFrame",
      "webkitCancelAnimationFrame",
      "webkitCancelRequestAnimationFrame",
      "atob",
      "btoa",
      "addEventListener",
      "removeEventListener",
      "captureEvents",
      "releaseEvents",
      "getComputedStyle",
      "getMatchedCSSRules",
      "webkitConvertPointFromPageToNode",
      "webkitConvertPointFromNodeToPage",
      "dispatchEvent",
      "openDatabase",
      "webkitRequestFileSystem",
      "webkitResolveLocalFileSystemURL",
      "TEMPORARY",
      "PERSISTENT",
      "onmouseenter",
      "onmouseleave",
      "scrollByLines",
      "scrollByPages",
      "sizeToContent",
      "content",
      "pkcs11",
      "controllers",
      "mozInnerScreenX",
      "mozInnerScreenY",
      "scrollMaxX",
      "scrollMaxY",
      "fullScreen",
      "back",
      "forward",
      "home",
      "updateCommands",
      "mozPaintCount",
      "mozRequestAnimationFrame",
      "mozCancelAnimationFrame",
      "mozCancelRequestAnimationFrame",
      "mozAnimationStartTime",
      "URL",
      "onafterprint",
      "onbeforeprint",
      "ondevicemotion",
      "setResizable",
      "routeEvent",
      "enableExternalCapture",
      "disableExternalCapture",
      "openDialog",
      "onmozfullscreenchange",
      "onmozfullscreenerror",
      "onshow",
      "oncopy",
      "oncut",
      "onpaste",
      "onbeforescriptexecute",
      "onafterscriptexecute",
      "mozIndexedDB",
    ];
    var myImplicitGlobalList = ["$"];
    var myInteractions;
    var BlueConic = function () {
      if (!BC_SERVER) {
        IS_VERBOSE &&
          UTIL.logInfo(
            "blueconic stopped running because the hostname is not defined"
          );
        return null;
      }
    };
    BlueConic.prototype.createEvent = function (
      eventType,
      interaction,
      caller,
      onSuccess
    ) {
      var isDynamicEvent =
        UTIL.indexOfArray(EVENT.dynamicTypes, eventType) > -1;
      var isFixedEvent = UTIL.indexOfArray(EVENT.types, eventType) > -1;
      var isAsyncPageViewEvent = interaction === true;
      if (isAsyncPageViewEvent) {
        PREVENT_UPDATEPROFILE = true;
      }
      if (!isFixedEvent && !isDynamicEvent) {
        return;
      }
      if (isFixedEvent && eventType != "PAGEVIEW" && !interaction) {
        UTIL.logWarning(
          "An interaction is required for event type [" + eventType + "]"
        );
        return;
      }
      if (eventType === "PAGEVIEW" && !isAsyncPageViewEvent) {
        PROFILE.getProfile();
      }
      if (eventType === "PAGEVIEW" && (!IS_ONEVENT || isAsyncPageViewEvent)) {
        if (myPreListeners && myPreListeners.length > 0) {
          PROFILE.updateProfile();
        }
        if (!isAsyncPageViewEvent) {
          RPC.handleRevisions();
        }
      }
      var ctx = {
        type: eventType,
        interaction: interaction,
        referrer: document.referrer,
        profile: UTIL.getCookie(COOKIE_BCSESSION),
      };
      EVENT.create(ctx, this, function (result) {
        if (isDynamicEvent) {
          handleInteractions(result, false);
        }
        UTIL.doCallback(caller, onSuccess, result);
        EVENT.publish(eventType, interaction);
      });
      RPC.submitBatch();
    };
    BlueConic.prototype.setEditableNode = function (node, options) {
      this.functions.setEditableNode(node, options);
    };
    BlueConic.prototype.getHostname = function () {
      return bcHostname;
    };
    BlueConic.prototype.getIPAddress = function () {
      return myRemoteIp;
    };
    BlueConic.prototype.getInteractions = function () {
      return myInteractionNames;
    };
    BlueConic.prototype.getSegments = function () {
      return mySegments;
    };
    BlueConic.prototype.getTemplate = function (templateId, onSuccess) {
      if (!templateId) {
        UTIL.logWarning("A templateID is required for loading a template");
        return;
      }
      if (!BlueConic.prototype._templateCallbacks) {
        BlueConic.prototype._templateCallbacks = {};
      }
      var id = new Date().getTime() + Math.random();
      if (BlueConic.prototype._templateCallbacks[id]) {
        id = new Date().getTime() + Math.random();
      }
      BlueConic.prototype._templateCallbacks[id] = {
        onSuccess: onSuccess,
        templateId: templateId,
      };
      var doCallbacks = function () {
        var callbackIds = UTIL.getPropertiesFromObject(
          BlueConic.prototype._templateCallbacks
        );
        for (var i = 0; i < callbackIds.length; i++) {
          var cb = BlueConic.prototype._templateCallbacks[callbackIds[i]];
          if (cb) {
            delete BlueConic.prototype._templateCallbacks[callbackIds[i]];
            var template = myTemplates[cb.templateId];
            if (!template) {
              UTIL.logWarning(
                "Template with ID [" + cb.templateId + "] is not found."
              );
              return;
            }
            UTIL.doCallback(this, cb.onSuccess, template);
          }
        }
      };
      if (
        BlueConic.prototype.isInEditMode() &&
        !BlueConic.prototype._isTemplateDownloading
      ) {
        IS_TEMPLATES_READY = false;
        myTemplateVersion = null;
        IS_VERBOSE && UTIL.logInfo("download templates again for edit mode");
      }
      if (!IS_TEMPLATES_READY && !BlueConic.prototype._isTemplateDownloading) {
        BlueConic.prototype._isTemplateDownloading = true;
        var templateUrlWithVersion = myTemplateVersion
          ? BC_SERVER + TEMPLATES_URL + "/" + myTemplateVersion
          : BC_SERVER + TEMPLATES_URL;
        UTIL.loadScript(templateUrlWithVersion, this, function () {
          delete BlueConic.prototype._isTemplateDownloading;
          IS_VERBOSE && UTIL.logInfo("finished template download");
          doCallbacks();
        });
      } else {
        if (!BlueConic.prototype._isTemplateDownloading) {
          doCallbacks();
        }
      }
    };
    BlueConic.prototype.getRequestInfo = function () {
      if (window.bcSimulatorRequestInfo) {
        var simulatorRequestInfo = window.bcSimulatorRequestInfo;
        if (simulatorRequestInfo === "desktop") {
          return {
            os: { name: "Windows", version: "7" },
            device: { type: "PC" },
            browser: { name: "Chrome", version: "34" },
            screen: { width: "1600", height: "1200" },
          };
        }
        if (simulatorRequestInfo === "applephone5portrait") {
          return {
            os: { name: "iOS", version: "7" },
            device: { type: "Mobile" },
            browser: { name: "Safari", version: "7" },
            screen: { width: "320", height: "568" },
          };
        }
        if (simulatorRequestInfo === "applephone5landscape") {
          return {
            os: { name: "iOS", version: "7" },
            device: { type: "Mobile" },
            browser: { name: "Safari", version: "7" },
            screen: { height: "320", width: "568" },
          };
        }
        if (simulatorRequestInfo === "applephone6portrait") {
          return {
            os: { name: "iOS", version: "8" },
            device: { type: "Mobile" },
            browser: { name: "Safari", version: "8" },
            screen: { width: "375", height: "667" },
          };
        }
        if (simulatorRequestInfo === "applephone6landscape") {
          return {
            os: { name: "iOS", version: "8" },
            device: { type: "Mobile" },
            browser: { name: "Safari", version: "8" },
            screen: { height: "667", width: "375" },
          };
        }
        if (simulatorRequestInfo === "applephone6plusportrait") {
          return {
            os: { name: "iOS", version: "8" },
            device: { type: "Mobile" },
            browser: { name: "Safari", version: "8" },
            screen: { width: "414", height: "736" },
          };
        }
        if (simulatorRequestInfo === "applephone6pluslandscape") {
          return {
            os: { name: "iOS", version: "8" },
            device: { type: "Mobile" },
            browser: { name: "Safari", version: "8" },
            screen: { height: "736", width: "414" },
          };
        }
        if (simulatorRequestInfo === "appletabletportrait") {
          return {
            os: { name: "iOS", version: "7" },
            device: { type: "Mobile" },
            browser: { name: "Safari", version: "7" },
            screen: { width: "768", height: "1024" },
          };
        }
        if (simulatorRequestInfo === "appletabletlandscape") {
          return {
            os: { name: "iOS", version: "7" },
            device: { type: "Mobile" },
            browser: { name: "Safari", version: "7" },
            screen: { height: "768", width: "1024" },
          };
        }
        if (simulatorRequestInfo === "androidphoneportrait") {
          return {
            os: { name: "Android", version: "4.2" },
            device: { type: "Mobile" },
            browser: { name: "Chrome ", version: "33" },
            screen: { width: "360", height: "640" },
          };
        }
        if (simulatorRequestInfo === "androidphonelandscape") {
          return {
            os: { name: "Android", version: "4.2" },
            device: { type: "Mobile" },
            browser: { name: "Chrome ", version: "33" },
            screen: { height: "360", width: "640" },
          };
        }
        if (simulatorRequestInfo === "androidtabletportrait") {
          return {
            os: { name: "Android", version: "4.2" },
            device: { type: "Mobile" },
            browser: { name: "Chrome ", version: "33" },
            screen: { width: "800", height: "1280" },
          };
        }
        if (simulatorRequestInfo === "androidtabletlandscape") {
          return {
            os: { name: "Android", version: "4.2" },
            device: { type: "Mobile" },
            browser: { name: "Chrome ", version: "33" },
            screen: { height: "800", width: "1280" },
          };
        }
      }
      return myRequestInfo;
    };
    BlueConic.prototype.getChannelId = function () {
      return myChannelId;
    };
    BlueConic.prototype.isInEditMode = function () {
      if (
        window.name &&
        window.name.substring(0, "bc_dialogues".length) === "bc_dialogues"
      ) {
        return true;
      }
      return false;
    };
    BlueConic.prototype.setHostname = function (hostname) {
      UTIL.logDeprecated(
        "blueConicClient.setHostName",
        "Check the scriplet documentation for alternative"
      );
      OVERRULLED_HOSTNAME = hostname;
    };
    BlueConic.prototype.getStaticUrlPrefix = function (interactionTypeId) {
      UTIL.logDeprecated(
        "blueConicClient.getStaticUrlPrefix",
        "Use getBaseURL instead"
      );
      return UTIL.getBaseURL(interactionTypeId);
    };
    BlueConic.prototype.getBaseURL = function (interactionTypeId) {
      return UTIL.getBaseURL(interactionTypeId);
    };
    BlueConic.prototype.getRestEndpoint = function (interactionTypeId) {
      var url = PROTOCOL + this.getHostname() + "/rest/custom/frontend/";
      var zoneID = UTIL.getZoneId();
      if (zoneID) {
        url += zoneID + "/";
      }
      if (interactionTypeId) {
        url += interactionTypeId;
      }
      return url;
    };
    BlueConic.prototype.isInSimulatorMode = function () {
      return window.name && window.name.indexOf("bc_simulator") > -1;
    };
    BlueConic.prototype.getCurrentDate = function () {
      if (BlueConic.prototype.isInSimulatorMode() && SIMULATOR_DATE) {
        return SIMULATOR_DATE;
      }
      return new Date();
    };
    BlueConic.prototype.getProfileProperties = function (caller, onSuccess) {
      var id = new Date().getTime() + ++RPC.requestId;
      RPC.addBatchRequest(RPC.GET_PROFILE_PROPERTIES, null, id, this, function (
        responseData
      ) {
        var items = {};
        if (responseData && responseData.result) {
          var itemData = responseData.result;
          if (itemData.properties) {
            items = itemData.properties;
            for (var item in items) {
              if (items[item].permissionLevel) {
                items[item].permissionLevel =
                  PERMISSION[items[item].permissionLevel];
              }
            }
          }
          UTIL.doCallback(caller, onSuccess, items);
        }
      });
      RPC.submitBatch();
    };
    BlueConic.prototype.handlePageView = function (options) {
      if (asyncHandleTO) {
        clearTimeout(asyncHandleTO);
      }
      asyncHandleTO = setTimeout(function () {
        IS_VERBOSE &&
          UTIL.logInfo(
            "handling asynchronous navigation for new url [" +
              document.location.href +
              "], creating new PAGEVIEW event to retrieve interactions for this url."
          );
        if (options) {
          if (options.hidePositions === true) {
            INTERNAL.hideAllPositions();
          }
        }
        var styleElement = document.getElementById(myAsyncHideCSSId);
        if (styleElement) {
          styleElement.parentNode.removeChild(styleElement);
        }
        blueConicAPI._pendingInteractions = [];
        INTERNAL.checkPreListeners();
        blueConicAPI.createEvent("PAGEVIEW", true, this, function (
          interactions
        ) {
          EVENT.publish(EVENT.ON_URL_CHANGE, { url: document.location.href });
          handleInteractions(interactions, false);
        });
      }, 10);
    };
    BlueConic.prototype.mail = {
      sendEmail: function (interactionId, onlyOnce, caller, callback) {
        if (!myInteractions) {
          return;
        }
        var interaction = null;
        for (var i = 0, l = myInteractions.length; i < l && !interaction; i++) {
          if (myInteractions[i].getInteractionId() === interactionId) {
            interaction = myInteractions[i];
          }
        }
        if (!interaction) {
          return;
        }
        locale = interaction._usedLocale;
        var id = new Date().getTime() + ++RPC.requestId;
        var params = {
          interactionId: [interactionId],
          onlyOnce: [onlyOnce],
          langId: [locale],
        };
        PROFILE.updateProfile();
        RPC.addBatchRequest(RPC.SEND_MAIL, params, id, this, function (
          responseData
        ) {
          if (responseData) {
            UTIL.doCallback(caller, callback, responseData);
          }
        });
        RPC.submitBatch();
      },
    };
    BlueConic.prototype.util = {
      loadScript: function (url, caller, onSuccess) {
        UTIL.loadScript(url, caller, onSuccess);
      },
      loadJSON: function (url, caller, onSuccess) {
        RPC.JSONP.get(url, null, function (responseData) {
          UTIL.doCallback(caller, onSuccess, responseData);
        });
      },
      loadCSS: function (url) {
        UTIL.loadCSS(url);
      },
      load: function (libname, libversion, liboptions, caller, onSuccess) {
        UTIL.logDeprecated(
          "blueConicClient.util.load (libname, libversion, liboptions, caller, onSuccess)",
          "blueConicClient.util.loadScript (url, caller, onSuccess)"
        );
        if (typeof onSuccess != "function") {
          UTIL.logError(
            'blueConicClient.util.load "onSuccess" is not a function'
          );
          return;
        }
        UTIL.loadScript(libname, caller, onSuccess);
      },
      loadLabels: function (caller, onSuccess) {
        UTIL.logDeprecated(
          "blueConicClient.util.loadLabels(caller, onSuccess)",
          "blueConicClient.getProfileProperties(caller, onSuccess)"
        );
        var id = new Date().getTime() + ++RPC.requestId;
        RPC.addBatchRequest(RPC.GET_PROPERTY_LABELS, null, id, this, function (
          responseData
        ) {
          var items = {};
          if (responseData && responseData.result) {
            var itemData = responseData.result;
            if (itemData.properties) {
              for (var propertyName in itemData.properties) {
                items[propertyName] = {};
                var labels = itemData.properties[propertyName];
                for (var label in labels) {
                  items[propertyName][label] = labels[label];
                }
              }
            }
            UTIL.doCallback(caller, onSuccess, items);
          }
        });
        RPC.submitBatch();
      },
      log: function (message) {
        UTIL.log(message);
      },
    };
    BlueConic.prototype.util.cookie = {
      setCookie: function (name, value, ttl) {
        return UTIL.setCookie(name, value, ttl);
      },
      getCookie: function (name) {
        return UTIL.getCookie(name);
      },
    };
    BlueConic.prototype.util.array = {
      ensureArray: function (obj) {
        return UTIL.ensureArray(obj);
      },
      isArray: function (obj) {
        return UTIL.isArray(obj);
      },
      diffArrays: function (source, target) {
        return UTIL.diffArrays(source, target);
      },
      removeItemFromArray: function (arr, item) {
        UTIL.removeItemFromArray(arr, item);
      },
      indexOfArray: function (items, obj) {
        return UTIL.indexOfArray(items, obj);
      },
      mergeArrays: function (source, dest) {
        UTIL.mergeArrays(source, dest);
      },
    };
    BlueConic.prototype.profile = {
      updateProfile: function (caller, onSuccess) {
        var scope = caller;
        var callBack = onSuccess;
        if (typeof caller == "function") {
          UTIL.logDeprecated(
            "blueConicClient.profile.updateProfile (onSuccess, caller)",
            "blueConicClient.profile.updateProfile (caller, onSuccess)"
          );
          callBack = caller;
          scope = onSuccess;
        }
        PROFILE.updateProfile(scope, callBack);
        RPC.submitBatch();
      },
      createProfile: function (caller, onSuccess) {
        PROFILE.createProfile(caller, onSuccess);
        RPC.submitBatch();
      },
      deleteProfile: function (caller, onSuccess) {
        var scope = caller;
        var callBack = onSuccess;
        if (typeof caller == "function") {
          UTIL.logDeprecated(
            "blueConicClient.profile.deleteProfile (onSuccess, caller)",
            "blueConicClient.profile.deleteProfile (caller, onSuccess)"
          );
          callBack = caller;
          scope = onSuccess;
        }
        PROFILE.deleteProfile(scope, callBack);
        RPC.submitBatch();
      },
      getProfile: function () {
        return myProfile;
      },
    };
    BlueConic.prototype.functions = {
      setLocaleFunction: function (fnLocale) {
        if (fnLocale && typeof fnLocale == "function") {
          LOCALE = fnLocale.call(null);
          IS_VERBOSE &&
            UTIL.logInfo(
              "runned locale function, the locale is now [" + LOCALE + "]"
            );
        } else {
          LOCALE = setDefaultLocale.call(this);
        }
      },
      setEditableNode: function (node, options) {
        if (
          blueConicAPI.fn.postMessage &&
          blueConicAPI.fn.getSelectorForElement
        ) {
          var selector = null;
          if (typeof node == "string") {
            selector = node;
          } else {
            if (node != null) {
              selector = blueConicAPI.fn.getSelectorForElement(node);
            }
          }
          var message = { selector: selector, options: options };
          blueConicAPI.fn.postMessage("editableNodeUpdate", message);
        }
      },
      sendMessage: function (message) {
        if (blueConicAPI.fn.postMessage) {
          blueConicAPI.fn.postMessage("onInteractionMessage", message);
        }
      },
    };
    BlueConic.prototype.json = {
      parse: function (json) {
        try {
          if (HAS_JSON_SUPPORT) {
            return window.JSON.parse(json);
          } else {
            return JSON.parse(json);
          }
        } catch (error) {
          UTIL.logError("Could not parse json [" + error.message + "]");
          return null;
        }
      },
      stringify: function (obj, replacer, space) {
        try {
          if (HAS_JSON_SUPPORT) {
            return window.JSON.stringify(obj, replacer, space);
          }
          return JSON.stringify(obj, replacer, space);
        } catch (error) {
          UTIL.logError("Could not stringify object [" + error.message + "]");
          return null;
        }
      },
    };
    BlueConic.prototype.fn = {
      createInteraction: function (itemData) {
        if (!itemData) {
          return;
        }
        var parameters = UTIL.getInteractionParameters(itemData);
        return new InteractionContext(itemData, parameters);
      },
      postMessage: function (event, message) {
        var targetIframe =
          window.opener && window.opener != window
            ? window.opener
            : window.parent;
        targetIframe.postMessage(
          {
            event: event,
            message: message,
            instanceName: blueConicAPI.instanceName,
          },
          "*"
        );
      },
      stringify: function (value, replacer, space) {
        return UTIL.stringifyObject(value, replacer, space);
      },
      addGlobalVarToBlacklist: function (variableName) {
        push.call(myGlobalVarBlacklist, variableName);
      },
      addImplicitGlobalList: function (variableName) {
        push.call(myImplicitGlobalList, variableName);
      },
      handlePreListeners: function (interactions) {
        if (!interactions) {
          return;
        }
        for (var i = 0, l = interactions.length; i < l; i++) {
          var interaction = interactions[i];
          var interactionTypeId = interaction.getInteractionTypeId();
          IS_VERBOSE &&
            UTIL.logInfo(
              "start handling pre listener [" + interactionTypeId + "]"
            );
          var interactionConstructor =
            myInteractionTypeConstructors[interactionTypeId];
          if (
            interactionConstructor &&
            typeof interactionConstructor === "function"
          ) {
            var preparedInteraction = interactionConstructor.call(
              this,
              blueConicAPI,
              interaction
            );
            if (
              preparedInteraction.onPrepare &&
              typeof preparedInteraction.onPrepare === "function"
            ) {
              if (IS_VERBOSE) {
                UTIL.logInfo(
                  "call method [onPrepare] for listener [" +
                    interactionTypeId +
                    "]"
                );
              }
              try {
                preparedInteraction.onPrepare();
              } catch (error) {
                UTIL.logError(
                  "an error occured in interactiontype: [" +
                    interactionTypeId +
                    "]<br>called method: [onPrepare]<br>error: " +
                    error.message
                );
                if (IS_VERBOSE && console.error) {
                  console.error(error);
                }
              }
            }
          }
        }
      },
      updateParams: function (id, locale, parameters) {
        var handledInteractions = blueConicAPI._handledInteractions;
        for (var i = 0, l = handledInteractions.length; i < l; i++) {
          var interactionConfig = handledInteractions[i];
          if (interactionConfig.id == id) {
            interactionConfig.context.setParameters(locale, parameters);
            var fnOnUpdate =
              typeof interactionConfig.interaction.onUpdate == "function"
                ? interactionConfig.interaction.onUpdate
                : null;
            if (fnOnUpdate) {
              fnOnUpdate.call(interactionConfig.interaction);
            }
          }
        }
      },
      handleInteractions: function (interactions, initialLoad) {
        IS_ONEVENT = false;
        IS_LIBRARY_IMPORT_READY = false;
        var shouldExecute = function (interactionId, pluginType) {
          for (
            var i = 0, l = blueConicAPI._handledInteractions.length;
            i < l;
            i++
          ) {
            var myInt = blueConicAPI._handledInteractions[i];
            var ignorePluginType =
              UTIL.indexOfArray(
                PREVENT_MULTIPLE_EXECUTION_PLUGIN_TYPES,
                pluginType
              ) > -1 && interactionId === myInt.id;
            var isEditModePlugin = false;
            if (!ignorePluginType) {
              isEditModePlugin =
                interactionId && interactionId.indexOf("editmode_") > -1;
            }
            if (ignorePluginType || isEditModePlugin) {
              return false;
            }
          }
          return true;
        };
        var preparedInteractions = [];
        for (var i = 0, l = interactions.length; i < l; i++) {
          var interaction = interactions[i];
          var interactionTypeId = interaction.getInteractionTypeId();
          var interactionHandle = interaction.getName()
            ? interaction.getName()
            : interaction.getInteractionId();
          if (
            !initialLoad &&
            blueConicAPI._handledInteractions &&
            !shouldExecute(
              interaction.getInteractionId(),
              interaction.getType()
            )
          ) {
            IS_VERBOSE &&
              UTIL.logInfo(
                "skipping interaction, already executed [" +
                  interactionHandle +
                  "], interaction type [" +
                  interactionTypeId +
                  "]"
              );
            continue;
          }
          IS_VERBOSE &&
            UTIL.logInfo(
              "start initializing interaction [" +
                interactionHandle +
                "], interaction type [" +
                interactionTypeId +
                "]"
            );
          var interactionConstructor =
            myInteractionTypeConstructors[interactionTypeId];
          if (
            interactionConstructor &&
            typeof interactionConstructor === "function"
          ) {
            var preparedInteraction = interactionConstructor.call(
              this,
              blueConicAPI,
              interaction
            );
            if (preparedInteraction) {
              preparedInteraction.ctx = interaction;
              if (
                preparedInteraction.getContent &&
                typeof preparedInteraction.getContent == "function" &&
                typeof preparedInteraction.ctx.getPosition == "function" &&
                preparedInteraction.ctx.getPosition()
              ) {
                var content = null;
                var position = null;
                try {
                  content = preparedInteraction.getContent();
                } catch (error) {
                  UTIL.logError(
                    "an error occured in interactiontype: [" +
                      preparedInteraction.ctx.getInteractionTypeId() +
                      "]<br>called method: [getContent]<br>error: " +
                      error.message
                  );
                  if (IS_VERBOSE && console.error) {
                    console.error(error);
                  }
                }
                position = preparedInteraction.ctx.getPosition();
                if (
                  BlueConic.prototype.isInSimulatorMode() &&
                  !content &&
                  position
                ) {
                  preparedInteraction.ctx.getDOMElement();
                }
                if (content && position) {
                  IS_VERBOSE &&
                    UTIL.logInfo(
                      "start set content mechanism for interaction [" +
                        interactionHandle +
                        "] with position [" +
                        position +
                        "]"
                    );
                  (function (content, position, preparedInteraction) {
                    var domElement = null;
                    var recusionCounter = 0;
                    function setContent() {
                      recusionCounter++;
                      domElement = preparedInteraction.ctx.getDOMElement();
                      if (!domElement) {
                        if (recusionCounter >= SET_CONTENT_MAX_RECURSION) {
                          IS_VERBOSE &&
                            UTIL.logInfo(
                              "failed to set content on position [" +
                                position +
                                "] max recursion reached"
                            );
                          return;
                        }
                        if (IS_ONEVENT) {
                          IS_VERBOSE &&
                            UTIL.logInfo(
                              "failed to set content on position [" +
                                position +
                                "] onEvent started"
                            );
                          return;
                        }
                        window.setTimeout(setContent, SET_CONTENT_TIMEOUT);
                        return;
                      }
                      if (preparedInteraction.ctx.isOnLoadExecuted()) {
                        IS_VERBOSE &&
                          UTIL.logInfo(
                            '"onLoad" already executed for interaction [' +
                              interactionHandle +
                              '], skipping "getContent"'
                          );
                        return;
                      }
                      preparedInteraction.ctx.setGetContentExecuted(true);
                      UTIL.setContent(domElement, content);
                      IS_VERBOSE &&
                        UTIL.logInfo(
                          "[+] set content on position [" +
                            position +
                            "] was successful, recursion [" +
                            recusionCounter +
                            "]"
                        );
                    }
                    setContent.call(this);
                  })(content, position, preparedInteraction);
                }
              }
              push.call(preparedInteractions, preparedInteraction);
            }
          } else {
            IS_VERBOSE &&
              UTIL.logInfo(
                "InteractionType with id [" + interactionTypeId + "] not found"
              );
          }
          IS_VERBOSE &&
            UTIL.logInfo(
              "finished initializing interaction [" +
                interactionHandle +
                "], interaction type [" +
                interactionTypeId +
                "]"
            );
        }
        var styleElement = document.getElementById(myPostHideCSSId);
        if (styleElement) {
          styleElement.parentNode.removeChild(styleElement);
        }
        var preloadProperties = [];
        for (var i = 0, l = preparedInteractions.length; i < l; i++) {
          var interaction = preparedInteractions[i];
          if (interaction.getPreloadProperties) {
            try {
              var preload = interaction.getPreloadProperties();
              UTIL.mergeArrays(preloadProperties, preload);
            } catch (error) {
              UTIL.logError(
                "an error occured in interactiontype: [" +
                  interaction.ctx.getInteractionTypeId() +
                  "]<br>called method: [getPreloadProperties]<br>error: " +
                  error.message
              );
              if (IS_VERBOSE && console.error) {
                console.error(error);
              }
            }
          }
        }
        if (myProfile && preloadProperties.length > 0) {
          IS_PRELOAD_PROPERTIES_READY = false;
          IS_VERBOSE &&
            UTIL.logInfo(
              "start preloading " +
                preloadProperties.length +
                " profile properties"
            );
          myProfile.loadValues(preloadProperties, this, function () {
            IS_PRELOAD_PROPERTIES_READY = true;
            handleOnEvent();
          });
        } else {
          IS_VERBOSE &&
            UTIL.logInfo(
              "skip preloading " +
                preloadProperties.length +
                " profile properties"
            );
          IS_PRELOAD_PROPERTIES_READY = true;
          handleOnEvent();
        }
        var injectLibraries = function () {
          for (var i = 0, l = preparedInteractions.length; i < l; i++) {
            var interactionTypeId = preparedInteractions[
              i
            ].ctx.getInteractionTypeId();
            var interactionHandle = preparedInteractions[i].ctx.getName()
              ? preparedInteractions[i].ctx.getName()
              : preparedInteractions[i].ctx.getInteractionId();
            IS_VERBOSE &&
              UTIL.logInfo(
                "start import libraries for interaction [" +
                  interactionHandle +
                  "]"
              );
            if (myInteractionTypeLibraries[interactionTypeId]) {
              preparedInteractions[i].importLibraries(
                myInteractionTypeLibraries[interactionTypeId]
              );
            }
            IS_VERBOSE &&
              UTIL.logInfo(
                "finished import libraries for interaction [" +
                  interactionHandle +
                  "]"
              );
          }
          IS_LIBRARY_IMPORT_READY = true;
          if (IS_DOCUMENT_READY) {
            handleOnEvent();
          } else {
            UTIL.bindDocumentReady(this, handleOnEvent);
          }
        };
        if (initialLoad) {
          IS_VERBOSE &&
            UTIL.logInfo(
              "start library download from url [" +
                LIBRARY_URL +
                "] with version [" +
                myLibraryVersion +
                "]"
            );
          var libraryUrlWithVersion = myLibraryVersion
            ? BC_SERVER + LIBRARY_URL + "/" + myLibraryVersion
            : BC_SERVER + LIBRARY_URL;
          if (BC_MGT) {
            libraryUrlWithVersion += "_e";
          }
          UTIL.loadScript(libraryUrlWithVersion, this, function () {
            IS_VERBOSE && UTIL.logInfo("finished library download");
            injectLibraries();
          });
        } else {
          injectLibraries();
        }
        function handleOnEvent() {
          var handledInteractions = [];
          if (
            !IS_PRELOAD_PROPERTIES_READY ||
            !IS_LIBRARY_IMPORT_READY ||
            !IS_DOCUMENT_READY ||
            IS_ONEVENT
          ) {
            IS_VERBOSE &&
              UTIL.logInfo(
                "cannot run onEvent preload [" +
                  IS_PRELOAD_PROPERTIES_READY +
                  "], library [" +
                  IS_LIBRARY_IMPORT_READY +
                  "] document ready [" +
                  IS_DOCUMENT_READY +
                  "] onEvent already runned [" +
                  IS_ONEVENT +
                  "]"
              );
            return;
          }
          IS_ONEVENT = true;
          PREVENT_UPDATEPROFILE = true;
          var executeInteractions = function (interactions, firstLoad) {
            var handled = [];
            for (var i = 0, l = interactions.length; i < l; i++) {
              var preparedInteraction = interactions[i];
              if (!preparedInteraction) {
                continue;
              }
              var fnOnload =
                typeof preparedInteraction.onLoad == "function"
                  ? preparedInteraction.onLoad
                  : preparedInteraction.onEvent;
              var interactionHandle = preparedInteraction.ctx.getName()
                ? preparedInteraction.ctx.getName()
                : preparedInteraction.ctx.getInteractionId();
              var ctx = preparedInteraction.ctx;
              if (
                !initialLoad &&
                blueConicAPI._handledInteractions &&
                !shouldExecute(ctx.getInteractionId(), ctx.getType())
              ) {
                continue;
              }
              if (
                (ctx.getPosition() && ctx.getDOMElement()) ||
                !ctx.getPosition() ||
                (ctx.getPosition() && ctx.isGetContentExecuted())
              ) {
                UTIL.removeItemFromArray(
                  blueConicAPI._pendingInteractions,
                  preparedInteraction
                );
                IS_VERBOSE &&
                  UTIL.logInfo(
                    "[+] start onEvent for interaction [" +
                      interactionHandle +
                      "]"
                  );
                try {
                  ctx.setOnLoadExecuted(true);
                  fnOnload.call(
                    preparedInteraction,
                    myProfile,
                    ctx.getParameters(),
                    ctx.getPosition(),
                    blueConicAPI,
                    ctx.getInteractionId(),
                    BC_SERVER
                  );
                } catch (error) {
                  UTIL.logError(
                    "an error occured in interactiontype: [" +
                      ctx.getInteractionTypeId() +
                      "]<br>called method: [onEvent]<br>error: " +
                      error.message
                  );
                  if (IS_VERBOSE && console.error) {
                    console.error(error);
                  }
                }
                var myInteraction = {
                  id: ctx.getInteractionId(),
                  name: ctx.getName(),
                  position: ctx.getPosition(),
                  type: ctx.getInteractionTypeId(),
                  isPositionFound: ctx.isPositionFound(),
                };
                if (firstLoad) {
                  handledInteractions.push(myInteraction);
                } else {
                  handled.push(myInteraction);
                }
                blueConicAPI._handledInteractions.push({
                  id: ctx.getInteractionId(),
                  interaction: preparedInteraction,
                  context: ctx,
                });
                IS_VERBOSE &&
                  UTIL.logInfo(
                    "finished onEvent for interaction [" +
                      interactionHandle +
                      "]"
                  );
              } else {
                if (firstLoad && ctx.getPosition()) {
                  blueConicAPI._pendingInteractions.push(preparedInteraction);
                }
              }
            }
            if (handled.length > 0 && !firstLoad) {
              EVENT.publish("onHandledInteractions", {
                handledInteractions: handled,
              });
            }
            return handled.length;
          };
          if (!blueConicAPI._pendingInteractions) {
            blueConicAPI._pendingInteractions = [];
          }
          if (!blueConicAPI._handledInteractions) {
            blueConicAPI._handledInteractions = [];
          }
          executeInteractions(preparedInteractions, initialLoad);
          IS_VERBOSE && UTIL.logInfo("finished running interactions");
          EVENT.publish(EVENT.ON_EVENT_READY, {
            blueConicClient: blueConicAPI,
            handledInteractions: handledInteractions,
            isFirstLoad: initialLoad,
          });
          if (initialLoad) {
            if (blueConicAPI._pendingInteractions.length > 0) {
              BlueConic.prototype.fn.hidePendingPositions();
            }
            INTERNAL.observeDOMChanges(executeInteractions);
          }
          PREVENT_UPDATEPROFILE = false;
          blueConicAPI.profile.updateProfile();
        }
      },
      hidePendingPositions: function () {
        if (blueConicAPI._pendingInteractions.length > 0) {
          var hostName = OVERRULLED_HOSTNAME
            ? OVERRULLED_HOSTNAME
            : document.location.hostname;
          var positions = myPositions[UTIL.hash(hostName)];
          var positionsToHide = [];
          for (var y = 0; y < blueConicAPI._pendingInteractions.length; y++) {
            var pendingInteraction = blueConicAPI._pendingInteractions[y];
            if (
              UTIL.indexOfArray(
                positions,
                pendingInteraction.ctx.getPosition()
              ) > -1
            ) {
              positionsToHide.push(pendingInteraction.ctx.getPosition());
            }
          }
          if (positionsToHide && positionsToHide.length > 0) {
            IS_VERBOSE &&
              UTIL.logInfo("hiding interactions: [" + positionsToHide + "]");
            var styleElement = document.getElementById(myAsyncHideCSSId);
            if (styleElement) {
              styleElement.parentNode.removeChild(styleElement);
            }
            UTIL.addCSSToDOM(positionsToHide, myAsyncHideCSSId);
          }
        }
      },
      registerInteractionType: function (
        id,
        InteractionTypeImpl,
        arrExternalLibs,
        baseUrls
      ) {
        var arrLibs = [];
        if (!InteractionTypeImpl) {
          UTIL.logInfo(
            "did not register interactionype with id : [" +
              id +
              "]. InteractionTypeImpl is undefined."
          );
          return null;
        } else {
          for (var i = 0; arrExternalLibs && i < arrExternalLibs.length; i++) {
            push.call(
              arrLibs,
              arrExternalLibs[i].url + " - " + arrExternalLibs[i].sharing
            );
          }
          IS_VERBOSE &&
            UTIL.logInfo(
              "register plugin [" +
                id +
                "] with libraries <br>" +
                arrLibs.join("<br>")
            );
        }
        var contructor;
        (function () {
          function createInstance(api, ctx) {
            try {
              var instance = new InteractionTypeImpl(api, ctx);
              return instance;
            } catch (error) {
              UTIL.logError(
                "an error occured in interactiontype: [" +
                  id +
                  "]<br>called method: [init]<br>error: " +
                  error.message
              );
              if (IS_VERBOSE && console.error) {
                console.error(error);
              }
            }
          }
          contructor = createInstance;
        })();
        if (baseUrls) {
          for (var i = 0; i < baseUrls.length; i++) {
            var baseUrl = baseUrls[i];
            if (
              baseUrl &&
              baseUrl.id &&
              baseUrl.baseUrl &&
              !myStaticUrls[baseUrl.id]
            ) {
              myStaticUrls[baseUrl.id] = baseUrl.baseUrl;
            }
          }
        }
        myInteractionTypeConstructors[id] = contructor;
        myInteractionTypeLibraries[id] = arrExternalLibs;
      },
      registerLibrary: function (url, importFunction) {
        IS_VERBOSE && UTIL.logInfo("register library [" + url + "]");
        myLibraries[url] = importFunction;
      },
      registerTemplates: function (templates) {
        if (!templates || IS_TEMPLATES_READY) {
          return;
        }
        var templateIds = UTIL.getPropertiesFromObject(templates);
        IS_VERBOSE &&
          UTIL.logInfo(
            "registering templates with the following IDs [" + templateIds + "]"
          );
        for (var i = 0; i < templateIds.length; i++) {
          var template = templates[templateIds[i]];
          if (
            template.css !== undefined &&
            template.js !== undefined &&
            template.html !== undefined
          ) {
            var precompiledTemplate = template.precompiled
              ? template.precompiled
              : null;
            myTemplates[templateIds[i]] = new Template(
              templateIds[i],
              template.html,
              template.css,
              template.js,
              precompiledTemplate
            );
          }
        }
        IS_TEMPLATES_READY = true;
      },
      saveGlobalVariables: function () {
        var backup = {};
        var backupKeys = [];
        var key = null;
        for (key in window) {
          if (UTIL.indexOfArray(myGlobalVarBlacklist, key) === -1) {
            backup[key] = window[key];
            push.call(backupKeys, key);
          }
        }
        var implicitGlobalListLength = myImplicitGlobalList.length;
        for (var i = 0; i < implicitGlobalListLength; i++) {
          key = myImplicitGlobalList[i];
          if (UTIL.indexOfArray(backupKeys, key) === -1) {
            if (window[key]) {
              backup[key] = window[key];
              push.call(backupKeys, key);
            }
          }
        }
        var restoreGlobals = function () {
          var changedKeys = [];
          var backupKeyLength = backupKeys.length;
          for (var i = 0; i < backupKeyLength; i++) {
            var key = backupKeys[i];
            if (UTIL.indexOfArray(myGlobalVarBlacklist, key) === -1) {
              if (window[key] !== backup[key]) {
                IS_VERBOSE &&
                  UTIL.logInfo(
                    typeof window[key] + " [" + key + "] moved to private space"
                  );
                this[key] = window[key];
                push.call(changedKeys, key);
                try {
                  window[key] = backup[key];
                } catch (err) {}
              }
            }
          }
          var windowKeys = [];
          for (var key in window) {
            if (UTIL.indexOfArray(myGlobalVarBlacklist, key) === -1) {
              windowKeys.push(key);
            }
          }
          var newKeys = UTIL.diffArrays(windowKeys, backupKeys);
          for (var i = 0, l = newKeys.length; i < l; i++) {
            var key = newKeys[i];
            if (UTIL.indexOfArray(myGlobalVarBlacklist, key) === -1) {
              this[key] = window[key];
              push.call(changedKeys, key);
            }
            IS_VERBOSE &&
              UTIL.logInfo(
                typeof window[key] + " [" + key + "] added to private space"
              );
          }
          return changedKeys;
        };
        return restoreGlobals;
      },
      importLibraries: function (urls) {
        var urls = UTIL.ensureArray(urls);
        var urlLength = urls.length;
        if (urlLength === 0) {
          return;
        }
        var restoreGlobals = saveGlobalVariables();
        for (var i = 0; i < urlLength; i++) {
          parseLibrary(urls[i]);
        }
        restoreGlobals.call(this);
      },
      importAndCacheLibraries: function (urls) {
        var urls = UTIL.ensureArray(urls);
        var urlLength = urls.length;
        var interactionTypeId = this.ctx.getInteractionTypeId();
        if (urlLength === 0) {
          return;
        }
        if (!interactionTypeId) {
          IS_VERBOSE &&
            UTIL.logInfo(
              "Could not determine the interactiontype during library import"
            );
          return;
        }
        if (!myCachedLibraries[interactionTypeId]) {
          myCachedLibraries[interactionTypeId] = {};
        }
        var interactionTypeLibraryCache = myCachedLibraries[interactionTypeId];
        for (var i = 0; i < urlLength; i++) {
          var url = urls[i];
          if (interactionTypeLibraryCache[url]) {
            var addFromCache = function (cache) {
              var cacheEntry;
              for (var j = 0; j < cache.length; j++) {
                cacheEntry = cache[j];
                IS_VERBOSE &&
                  UTIL.logInfo(
                    "added [" + cacheEntry.key + "] from cache to private space"
                  );
                this[cacheEntry.key] = cacheEntry.object;
              }
            };
            addFromCache.call(this, interactionTypeLibraryCache[url]);
          } else {
            interactionTypeLibraryCache[url] = [];
            var parseAndCache = function (url, cache) {
              var restoreGlobals = saveGlobalVariables();
              parseLibrary(url);
              var keys = restoreGlobals.call(this);
              for (var j = 0; j < keys.length; j++) {
                var cacheEntry = { key: null, object: null };
                cacheEntry.key = keys[j];
                cacheEntry.object = this[keys[j]];
                push.call(cache, cacheEntry);
              }
              IS_VERBOSE &&
                UTIL.logInfo(
                  "added library [" +
                    url +
                    "] to cache for interactiontype [" +
                    interactionTypeId +
                    "]"
                );
            };
            parseAndCache.call(this, url, interactionTypeLibraryCache[url]);
          }
        }
      },
      parseLibrary: function (url) {
        if (!myLibraries) {
          UTIL.logError("the external libraries are not loaded");
          return;
        }
        var parseFn = myLibraries[url];
        if (parseFn && typeof parseFn == "function") {
          IS_VERBOSE && UTIL.logInfo("start import library [" + url + "]");
          var oldDefine = null;
          if (window.define) {
            oldDefine = window.define;
            window.define = null;
          }
          parseFn.call(this);
          if (oldDefine) {
            window.define = oldDefine;
          }
        } else {
          UTIL.logError("library with url [" + url + "] not found");
        }
      },
      getDomainGroup: function (channelId) {
        var domainGroup = "DEFAULT";
        var channelHash = UTIL.hash(channelId);
        for (var groupId in myDomainGroups) {
          var hostnames = myDomainGroups[groupId];
          for (var j in hostnames) {
            var hostname = hostnames[j];
            if (hostname == channelHash) {
              return groupId;
            }
          }
        }
        return domainGroup;
      },
      setRequestInfo: function (requestinfo) {
        myRequestInfo = requestinfo;
      },
      getDOMElement: function (cssSelector) {
        return UTIL.getDOMElement(cssSelector);
      },
      version: VERSION,
    };
    var createInteraction = BlueConic.prototype.fn.createInteraction,
      updateParams = BlueConic.prototype.fn.updateParams,
      handleInteractions = BlueConic.prototype.fn.handleInteractions,
      registerInteractionType = BlueConic.prototype.fn.registerInteractionType,
      handlePreListeners = BlueConic.prototype.fn.handlePreListeners,
      saveGlobalVariables = BlueConic.prototype.fn.saveGlobalVariables,
      parseLibrary = BlueConic.prototype.fn.parseLibrary;
    var INTERNAL = {
      hideAllPositions: function () {
        var hostName = OVERRULLED_HOSTNAME
          ? OVERRULLED_HOSTNAME
          : document.location.hostname;
        IS_VERBOSE &&
          UTIL.logInfo(
            "start hide all positions for hostname [" + hostName + "]"
          );
        var positions = myPositions[UTIL.hash(hostName)];
        if (positions && positions.length > 0) {
          UTIL.addCSSToDOM(positions, myPreHideCSSId, 1250);
        }
        IS_VERBOSE &&
          UTIL.logInfo(
            "finished hide all positions for hostname [" + hostName + "]"
          );
      },
      checkPreListeners: function () {
        var preListeners = [];
        if (myPreListeners.length && myPreListeners.length > 0) {
          for (var i = 0, l = myPreListeners.length; i < l; i++) {
            var preListener = myPreListeners[i];
            registerInteractionType(
              preListener.id,
              preListener.interactionType
            );
            var preListenerInteraction = createInteraction({
              id: preListener.id,
              name: preListener.id,
              interactionType: { myId: preListener.id },
            });
            push.call(preListeners, preListenerInteraction);
          }
          handlePreListeners(preListeners);
        }
      },
      observeDOMChanges: function (handleInteractionsFn) {
        var me = blueConicAPI;
        var body = document.getElementsByTagName("body")[0];
        if (!body) {
          return;
        }
        var mutationObserver =
          window.MutationObserver ||
          window.WebKitMutationObserver ||
          window.MozMutationObserver;
        if (mutationObserver && !me._observer) {
          me._observer = new MutationObserver(function (mutations, observer) {
            INTERNAL.handleDOMMutation(handleInteractionsFn);
          });
          me._observer.observe(body, {
            childList: true,
            subtree: true,
            characterData: true,
          });
        } else {
          if (window.addEventListener) {
            body.addEventListener(
              "DOMNodeInserted",
              function () {
                INTERNAL.handleDOMMutation(handleInteractionsFn);
              },
              false
            );
          }
        }
      },
      handleDOMMutation: function (handleInteractionsFn) {
        if (blueConicAPI._handleMutationTO) {
          clearTimeout(blueConicAPI._handleMutationTO);
        }
        blueConicAPI._handleMutationTO = setTimeout(function () {
          var pending = blueConicAPI._pendingInteractions.length;
          if (blueConicAPI.isPaused === undefined || !blueConicAPI.isPaused) {
            IS_VERBOSE &&
              UTIL.logInfo(
                "dom mutation detected, #pending interactions: [" +
                  pending +
                  "]"
              );
          }
          if (pending > 0) {
            var handled = handleInteractionsFn(
              blueConicAPI._pendingInteractions.slice(),
              false
            );
            IS_VERBOSE &&
              UTIL.logInfo(
                "dom mutation detected, #handled: [" + handled + "]"
              );
            if (handled > 0) {
              var styleElement = document.getElementById(myAsyncHideCSSId);
              if (styleElement) {
                styleElement.parentNode.removeChild(styleElement);
              }
              BlueConic.prototype.fn.hidePendingPositions();
            }
          }
          var selectors = POSITION.getSelectors().concat();
          if (selectors && selectors.length > 0) {
            IS_VERBOSE &&
              UTIL.logInfo(
                "listener subscribers found for the following selectors: [" +
                  selectors +
                  "]. Callbacks will be called now."
              );
            for (var i = 0; i < selectors.length; i++) {
              var selector = selectors[i];
              try {
                if (selector && UTIL.getDOMElement(selector)) {
                  POSITION.publish(selector);
                }
              } catch (e) {
                if (IS_VERBOSE) {
                  console.error(e);
                }
              }
            }
          }
          delete blueConicAPI._handleMutationTO;
        }, SET_CONTENT_TIMEOUT);
      },
      isNative: function (fn, fnName) {
        var isNative = /\{\s*\[native code\]\s*\}/.test("" + fn);
        if (!isNative) {
          UTIL.logWarning(
            "function: [" +
              fnName +
              "] is not native any more, the target website overruled it."
          );
        }
        return isNative;
      },
    };
    function Connection(id, parameters) {
      this._id = id;
      this._parameters = parameters;
      this.getId = function () {
        return this._id;
      };
      this.getParameters = function () {
        var key = null;
        var lastKey = null;
        var parametersFound = false;
        for (key in this._parameters) {
          lastKey = key;
          if (!parametersFound) {
            if (LOCALE && key && key.indexOf(LOCALE) === 0) {
              IS_VERBOSE &&
                UTIL.logInfo(
                  "Use locale [" +
                    key +
                    "] for connection [" +
                    this.getId() +
                    "]."
                );
              parametersFound = true;
              return this._parameters[key];
            }
          }
        }
        if (!parametersFound && lastKey !== null) {
          IS_VERBOSE &&
            UTIL.logInfo(
              "Use locale [" +
                lastKey +
                "] for connection [" +
                this.getId() +
                "]."
            );
          return this._parameters[lastKey];
        }
        return null;
      };
    }
    function InteractionContext(data, parameters) {
      this._id = data.id;
      this._name = data.name;
      this._position = data.position;
      this._parameters = parameters;
      this._defaultLocale = data.defaultLocale;
      this._interactionTypeId = data.interactionType.myId
        ? data.interactionType.myId.toLowerCase()
        : null;
      this._type = data.interactionType.myType
        ? data.interactionType.myType.toUpperCase()
        : null;
      this._usedLocale = null;
      this._isPositionFound = false;
      this._isGetContentExecuted = false;
      this._isOnLoadExecuted = false;
      this.getInteractionId = function () {
        return this._id;
      };
      this.getName = function () {
        return this._name;
      };
      this.getType = function () {
        return this._type;
      };
      this.getPosition = function () {
        return this._position;
      };
      this.getDOMElement = function () {
        var element = UTIL.getDOMElement(this._position);
        if (element && !this._isPositionFound) {
          this._isPositionFound = true;
        }
        return element;
      };
      this.isPositionFound = function () {
        return this._isPositionFound;
      };
      this.isGetContentExecuted = function () {
        return this._isGetContentExecuted;
      };
      this.setGetContentExecuted = function (isExecuted) {
        this._isGetContentExecuted = isExecuted;
      };
      this.isOnLoadExecuted = function () {
        return this._isOnLoadExecuted;
      };
      this.setOnLoadExecuted = function (isExecuted) {
        this._isOnLoadExecuted = isExecuted;
      };
      this.setParameters = function (locale, parameters) {
        this._parameters[locale] = parameters;
      };
      this.getParameters = function () {
        var key;
        var interactionHandle = this.getName()
          ? this.getName()
          : this.getInteractionId();
        for (key in this._parameters) {
          if (LOCALE && key && key.indexOf(LOCALE) === 0) {
            this._usedLocale = key;
            IS_VERBOSE &&
              UTIL.logInfo(
                "use locale [" +
                  key +
                  "] for interaction [" +
                  interactionHandle +
                  "]."
              );
            return this._parameters[key];
          }
        }
        IS_VERBOSE &&
          UTIL.logInfo(
            "no parameters found for locale [" +
              LOCALE +
              "] with interaction [" +
              interactionHandle +
              "].<br>Using the default locale [" +
              this._defaultLocale +
              "] instead."
          );
        this._usedLocale = this._defaultLocale;
        return this._parameters[this._defaultLocale];
      };
      this.getDefaultLocale = function () {
        return this._defaultLocale;
      };
      this.getLocale = function () {
        return LOCALE;
      };
      this.getUrlPrefix = function () {
        UTIL.logDeprecated("context.getUrlPrefix", "profile.getBaseURL");
        return UTIL.getBaseURL(this._interactionTypeId);
      };
      this.getBaseURL = function () {
        return UTIL.getBaseURL(this._interactionTypeId);
      };
      this.getInteractionTypeId = function () {
        return this._interactionTypeId;
      };
      this.getProfile = function () {
        return myProfile;
      };
      this.getConnection = function (id) {
        if (
          !id ||
          !myConnections ||
          !UTIL.isArray(myConnections) ||
          myConnections.length === 0
        ) {
          return null;
        }
        for (var i = 0, length = myConnections.length; i < length; i++) {
          var rawConnection = myConnections[i];
          if (
            rawConnection &&
            rawConnection.id &&
            rawConnection.parameters &&
            rawConnection.id === id
          ) {
            var connectionParameters = UTIL.getInteractionParameters(
              rawConnection
            );
            var connection = new Connection(id, connectionParameters);
            return connection;
          }
        }
        return null;
      };
    }
    function Profile(id) {
      this._id = id;
      this._properties = {};
      this.getId = function () {
        return this._id;
      };
      this.getPropertyNames = function () {
        var propertyNames = [];
        for (property in this._properties) {
          push.call(propertyNames, property);
        }
        return propertyNames;
      };
      this.getValue = function (property) {
        if (!hasOwn.call(this._properties, property)) {
          return undefined;
        }
        var values = this._properties[property];
        if (UTIL.isArray(values)) {
          return values[0];
        }
        return values;
      };
      this.getValues = function (property) {
        if (!hasOwn.call(this._properties, property)) {
          return [];
        }
        return UTIL.ensureArray(this._properties[property]);
      };
      this.setValue = function (property, value) {
        if (!property) {
          IS_VERBOSE &&
            UTIL.logInfo("could not set value for undefined property");
          return;
        }
        if (value === null || value === undefined) {
          IS_VERBOSE && UTIL.logInfo("value cannot be undefined or null");
          return;
        }
        PROFILE.unsavedLog(property, null);
        if (UTIL.isArray(value)) {
          value = value.length > 0 ? value[0] : null;
        } else {
          if (UTIL.isDate(value)) {
            value = value.getTime();
          }
        }
        PROFILE.unsavedLog(property, value);
        this._properties[property] = UTIL.ensureArray(value);
      };
      this.setValues = function (property, values) {
        if (!property) {
          IS_VERBOSE &&
            UTIL.logInfo("could not set values for undefined property");
          return;
        }
        if (UTIL.isArray(property)) {
          IS_VERBOSE && UTIL.logInfo("property cannot be an array");
          return;
        }
        PROFILE.unsavedLog(property, null);
        values = UTIL.ensureArray(values);
        for (var i = 0; i < values.length; i++) {
          if (UTIL.isDate(values[i])) {
            values[i] = values[i].getTime();
          }
        }
        UTIL.removeItemFromArray(values, null);
        UTIL.removeItemFromArray(values, undefined);
        this._properties[property] = values;
        PROFILE.unsavedLog(property, values);
      };
      this.addValue = function (property, value) {
        if (!property) {
          IS_VERBOSE &&
            UTIL.logInfo("could not add value for undefined property");
          return;
        }
        if (UTIL.isArray(property)) {
          IS_VERBOSE && UTIL.logInfo("property cannot be an array");
          return;
        }
        if (value === null || value === undefined) {
          IS_VERBOSE && UTIL.logInfo("value cannot be undefined or null");
          return;
        }
        if (UTIL.isDate(value)) {
          value = value.getTime();
        }
        if (!this._properties[property]) {
          this._properties[property] = [];
        }
        var values = this._properties[property];
        if (UTIL.indexOfArray(values, value) === -1) {
          push.call(values, value);
          PROFILE.unsavedLog(property, value, true);
        }
        this._properties[property] = values;
      };
      this.loadValues = function (properties, caller, onSuccess) {
        var propArray = UTIL.ensureArray(properties);
        PROFILE.getProperties(propArray, this, function () {
          UTIL.doCallback(caller, onSuccess);
        });
        RPC.submitBatch();
      };
      this.addProperty = function (property, value) {
        UTIL.logDeprecated(
          "profile.addProperty(property, value)",
          "profile.addValue(property, value)"
        );
        this.addValue(property, value);
      };
    }
    Profile.prototype.permission = {
      getLevel: function () {
        return PERMISSION.getLevel();
      },
      setLevel: function (level, message) {
        return PERMISSION.setLevel(level, message);
      },
    };
    Profile.prototype.permission.optin = {};
    Profile.prototype.permission.optout = {};
    function Recommendations(recommendations) {
      this._id =
        recommendations && recommendations.length > 0
          ? recommendations[0].recommendationId[0]
          : null;
      this._items = recommendations ? recommendations : [];
      this.getId = function () {
        return this._id;
      };
      this.getItems = function () {
        return this._items;
      };
    }
    var PERMISSION = {
      DO_NOT_TRACK: "DO_NOT_TRACK",
      ANONYMOUS: "ANONYMOUS",
      PERSONAL: "PERSONAL",
      propertyOptOutHandler: null,
      propertyOptInHandler: null,
      pluginOptInHandler: null,
      pluginOptOutHandler: null,
      permissionLevel: null,
      previousPermissionLevel: null,
      isPermissionLevelChanged: false,
      PermissionHandler: function () {
        this.itemList = [];
        this.removeList = [];
        this.addList = [];
        this.getAll = function () {
          return this.itemList;
        };
        this.add = function (permissionItem) {
          if (UTIL.indexOfArray(this.itemList, permissionItem) !== -1) {
            return;
          }
          push.call(this.itemList, permissionItem);
          push.call(this.addList, permissionItem);
          UTIL.removeItemFromArray(this.removeList, permissionItem);
        };
        this.remove = function (permissionItem) {
          UTIL.removeItemFromArray(this.itemList, permissionItem);
          push.call(this.removeList, permissionItem);
          UTIL.removeItemFromArray(this.addList, permissionItem);
        };
        this.getRemoveList = function () {
          return this.removeList;
        };
        this.getAddList = function () {
          return this.addList;
        };
        this.set = function (arrItems) {
          this.itemList = arrItems;
        };
        this.clear = function () {
          this.addList = [];
          this.removeList = [];
        };
      },
      setLevel: function (level, message) {
        if (
          level !== PERMISSION.DO_NOT_TRACK &&
          level !== PERMISSION.ANONYMOUS &&
          level !== PERMISSION.PERSONAL
        ) {
          UTIL.logInfo(
            "invalid permission level [" +
              level +
              "]. Use one of <br>blueConicClient.permission.level.DO_NOT_TRACK<br>blueConicClient.permission.level.ANONYMOUS<br>blueConicClient.permission.level.PERSONAL"
          );
          return false;
        }
        PERMISSION.previousPermissionLevel = PERMISSION.permissionLevel;
        PERMISSION.isPermissionLevelChanged = true;
        PERMISSION.message = message;
        PERMISSION.permissionLevel = level;
        IS_VERBOSE &&
          UTIL.logInfo(
            "setPermissionLevel from [" +
              PERMISSION.previousPermissionLevel +
              "] to [" +
              PERMISSION.permissionLevel +
              "]"
          );
        return true;
      },
      getLevel: function () {
        return PERMISSION.permissionLevel;
      },
      createAPI: function () {
        PERMISSION.propertyOptOutHandler = addProfilePropertyHandler(
          Profile.prototype.permission.optout
        );
        PERMISSION.propertyOptInHandler = addProfilePropertyHandler(
          Profile.prototype.permission.optin
        );
        PERMISSION.pluginOptInHandler = addPluginHandler(
          Profile.prototype.permission.optin
        );
        PERMISSION.pluginOptOutHandler = addPluginHandler(
          Profile.prototype.permission.optout
        );
        BlueConic.prototype.permission = {};
        BlueConic.prototype.permission.level = {
          DO_NOT_TRACK: PERMISSION.DO_NOT_TRACK,
          ANONYMOUS: PERMISSION.ANONYMOUS,
          PERSONAL: PERMISSION.PERSONAL,
        };
        function addProfilePropertyHandler(api) {
          var ph = new PERMISSION.PermissionHandler();
          api.getProfileProperties = function () {
            return ph.getAll();
          };
          api.addProfileProperty = function (arg) {
            return ph.add(arg);
          };
          api.removeProfileProperty = function (arg) {
            return ph.remove(arg);
          };
          return ph;
        }
        function addPluginHandler(api) {
          var ph = new PERMISSION.PermissionHandler();
          api.getPlugins = function () {
            return ph.getAll();
          };
          api.addPlugin = function (arg) {
            return ph.add(arg);
          };
          api.removePlugin = function (arg) {
            return ph.remove(arg);
          };
          return ph;
        }
      },
    };
    PERMISSION.createAPI();
    var PROFILE = {
      addQueue: {},
      setQueue: {},
      getProfile: function (caller, onSuccess) {
        var id = new Date().getTime() + ++RPC.requestId;
        RPC.addBatchRequest(RPC.GET_PROFILE, null, id, this, function (
          responseData
        ) {
          this._handleProfileResponse(responseData, true);
          UTIL.doCallback(caller, onSuccess, myProfile);
        });
      },
      _handleProfileResponse: function (responseData, notifyReady) {
        if (responseData && responseData.result) {
          var setPermissionLevel = function (responseData, profileId) {
            var permissionLevel =
              PERMISSION[responseData.result.permissionlevel];
            PERMISSION.permissionLevel = permissionLevel;
            var optinProperties = UTIL.ensureArray(
              responseData.result.optinproperties
            );
            PERMISSION.propertyOptInHandler.set(optinProperties);
            var optoutProperties = UTIL.ensureArray(
              responseData.result.optoutproperties
            );
            PERMISSION.propertyOptOutHandler.set(optoutProperties);
            var optinPlugins = UTIL.ensureArray(
              responseData.result.optinplugins
            );
            PERMISSION.pluginOptInHandler.set(optinPlugins);
            var optoutPlugins = UTIL.ensureArray(
              responseData.result.optoutplugins
            );
            PERMISSION.pluginOptOutHandler.set(optoutPlugins);
            if (IS_VERBOSE) {
              var str = "Profile object initialized";
              str += "<br>-id : [" + profileId + "]";
              str += "<br>-permission level : [" + permissionLevel + "]";
              str += "<br>-optin properties : [" + optinProperties + "]";
              str += "<br>-optout properties : [" + optoutProperties + "]";
              str += "<br>-optin plugins : [" + optinPlugins + "]";
              str += "<br>-optout plugins : [" + optoutPlugins + "]";
              UTIL.logInfo(str);
            }
            if (notifyReady) {
              EVENT.publish(EVENT.ON_READY, { blueConicClient: blueConicAPI });
            }
          };
          var profileId = responseData.profileId
            ? responseData.profileId
            : responseData.tempId
            ? responseData.tempId
            : responseData.result.id;
          if (!myProfile) {
            myProfile = new Profile(profileId);
            setPermissionLevel.call(this, responseData, profileId);
          } else {
            var setProfileId = function (id) {
              this._id = id;
            };
            setProfileId.call(myProfile, profileId);
            if (!myProfile.getId() || !PERMISSION.getLevel()) {
              setPermissionLevel.call(this, responseData, profileId);
            }
          }
        }
      },
      deleteProfile: function (caller, onSuccess) {
        var id = new Date().getTime() + ++RPC.requestId;
        RPC.addBatchRequest(RPC.DELETE_PROFILE, null, id, this, function () {
          UTIL.setBcSessionIdCookie(null);
          myProfile = null;
          IS_VERBOSE && UTIL.logInfo("profile is deleted");
          UTIL.doCallback(caller, onSuccess);
        });
      },
      createProfile: function (caller, onSuccess) {
        var id = new Date().getTime() + ++RPC.requestId;
        RPC.addBatchRequest(RPC.CREATE_PROFILE, null, id, this, function (
          responseData
        ) {
          myProfile = null;
          PROFILE.addQueue = {};
          PROFILE.setQueue = {};
          this._handleProfileResponse(responseData, false);
          IS_VERBOSE && UTIL.logInfo("new profile is created");
          UTIL.doCallback(caller, onSuccess, myProfile);
        });
      },
      updateProfile: function (caller, onSuccess) {
        if (PREVENT_UPDATEPROFILE) {
          return;
        }
        if (
          PERMISSION.isPermissionLevelChanged &&
          PERMISSION.previousPermissionLevel === PERMISSION.DO_NOT_TRACK
        ) {
          (function () {
            PERMISSION.isPermissionLevelChanged = false;
            var id = new Date().getTime() + ++RPC.requestId;
            var parameter = {};
            parameter.level = UTIL.ensureArray(PERMISSION.permissionLevel);
            parameter.message = UTIL.ensureArray(PERMISSION.message);
            UTIL.setBcSessionIdCookie(null);
            RPC.addBatchRequest(
              RPC.SET_PERMISSION_LEVEL,
              parameter,
              id,
              this,
              function () {
                PROFILE.getProfile(this, function () {
                  if (myProfile) {
                    var propertyNames = myProfile.getPropertyNames();
                    for (
                      var nameCount = 0;
                      nameCount < propertyNames.length;
                      nameCount++
                    ) {
                      var propertyName = propertyNames[nameCount];
                      myProfile.setValues(
                        propertyName,
                        myProfile.getValues(propertyName)
                      );
                    }
                  }
                  PROFILE.updateProfile(this, function () {
                    EVENT.publish(EVENT.ON_PERMISSION_LEVEL_CHANGE, {
                      permissionLevel: PERMISSION.permissionLevel,
                      previousPermissionLevel:
                        PERMISSION.previousPermissionLevel,
                    });
                    UTIL.doCallback(caller, onSuccess);
                  });
                  RPC.submitBatch();
                });
                RPC.submitBatch();
              }
            );
            RPC.submitBatch();
          })();
        } else {
          (function () {
            var addQueue = PROFILE.addQueue;
            var setQueue = PROFILE.setQueue;
            PROFILE.addQueue = {};
            PROFILE.setQueue = {};
            var setProperties = UTIL.getPropertiesFromObject(setQueue);
            for (var i = 0, l = setProperties.length; i < l; i++) {
              delete addQueue[setProperties[i]];
            }
            var addProperties = UTIL.getPropertiesFromObject(addQueue);
            var successCountDown = 1;
            var revision = new Date().getTime();
            (function () {
              var isPermissionLevelChanged =
                PERMISSION.isPermissionLevelChanged;
              if (isPermissionLevelChanged) {
                var parameter = {};
                successCountDown++;
                var permissionLevel = PERMISSION.getLevel() + "";
                parameter.level = UTIL.ensureArray(permissionLevel);
                parameter.message = UTIL.ensureArray(PERMISSION.message);
                PERMISSION.isPermissionLevelChanged = false;
                var id = new Date().getTime() + ++RPC.requestId;
                RPC.addBatchRequest(
                  RPC.SET_PERMISSION_LEVEL,
                  parameter,
                  id,
                  this,
                  function (response) {
                    handleCallBack.call(this);
                    if (permissionLevel === PERMISSION.DO_NOT_TRACK) {
                      UTIL.setBcSessionIdCookie(response.profileId);
                    }
                    EVENT.publish(EVENT.ON_PERMISSION_LEVEL_CHANGE, {
                      permissionLevel: PERMISSION.permissionLevel,
                      previousPermissionLevel:
                        PERMISSION.previousPermissionLevel,
                    });
                  }
                );
              }
            })();
            (function () {
              var pluginOptin =
                PERMISSION.pluginOptInHandler &&
                PERMISSION.pluginOptInHandler.getAddList();
              var propertyOptin =
                PERMISSION.propertyOptInHandler &&
                PERMISSION.propertyOptInHandler.getAddList();
              var parameter = {};
              if (pluginOptin.length > 0 || propertyOptin.length > 0) {
                successCountDown++;
                parameter.properties = propertyOptin;
                parameter.plugins = pluginOptin;
                var id = new Date().getTime() + ++RPC.requestId;
                RPC.addBatchRequest(
                  RPC.ADD_OPTIN,
                  parameter,
                  id,
                  this,
                  handleCallBack
                );
              }
            })();
            (function () {
              var pluginOptin =
                PERMISSION.pluginOptInHandler &&
                PERMISSION.pluginOptInHandler.getRemoveList();
              var propertyOptin =
                PERMISSION.propertyOptInHandler &&
                PERMISSION.propertyOptInHandler.getRemoveList();
              var parameter = {};
              if (pluginOptin.length > 0 || propertyOptin.length > 0) {
                successCountDown++;
                parameter.properties = propertyOptin;
                parameter.plugins = pluginOptin;
                var id = new Date().getTime() + ++RPC.requestId;
                RPC.addBatchRequest(
                  RPC.REMOVE_OPTIN,
                  parameter,
                  id,
                  this,
                  handleCallBack
                );
              }
            })();
            (function () {
              var pluginOptout =
                PERMISSION.pluginOptOutHandler &&
                PERMISSION.pluginOptOutHandler.getAddList();
              var propertyOptout =
                PERMISSION.propertyOptOutHandler &&
                PERMISSION.propertyOptOutHandler.getAddList();
              var parameter = {};
              if (pluginOptout.length > 0 || propertyOptout.length > 0) {
                successCountDown++;
                parameter.properties = propertyOptout;
                parameter.plugins = pluginOptout;
                var id = new Date().getTime() + ++RPC.requestId;
                RPC.addBatchRequest(
                  RPC.ADD_OPTOUT,
                  parameter,
                  id,
                  this,
                  handleCallBack
                );
              }
            })();
            (function () {
              var pluginOptout =
                PERMISSION.pluginOptOutHandler &&
                PERMISSION.pluginOptOutHandler.getRemoveList();
              var propertyOptout =
                PERMISSION.propertyOptOutHandler &&
                PERMISSION.propertyOptOutHandler.getRemoveList();
              var parameter = {};
              if (pluginOptout.length > 0 || propertyOptout.length > 0) {
                successCountDown++;
                parameter.properties = propertyOptout;
                parameter.plugins = pluginOptout;
                var id = new Date().getTime() + ++RPC.requestId;
                RPC.addBatchRequest(
                  RPC.REMOVE_OPTOUT,
                  parameter,
                  id,
                  this,
                  handleCallBack
                );
              }
            })();
            (function () {
              if (setProperties.length > 0) {
                var setPropertiesParam = {};
                setPropertiesParam.properties = setQueue;
                successCountDown++;
                var id = new Date().getTime() + ++RPC.requestId;
                RPC.addBatchRequest(
                  RPC.SET_PROPERTIES,
                  setPropertiesParam,
                  id,
                  this,
                  handleCallBack
                );
              }
            })();
            (function () {
              if (addProperties.length > 0) {
                var addPropertiesParam = {};
                addPropertiesParam.properties = addQueue;
                successCountDown++;
                var id = new Date().getTime() + ++RPC.requestId;
                RPC.addBatchRequest(
                  RPC.ADD_PROPERTIES,
                  addPropertiesParam,
                  id,
                  this,
                  handleCallBack
                );
              }
            })();
            handleCallBack();
            function handleCallBack() {
              successCountDown--;
              if (successCountDown === 0) {
                UTIL.doCallback(caller, onSuccess);
              }
            }
            PERMISSION.propertyOptOutHandler &&
              PERMISSION.propertyOptOutHandler.clear();
            PERMISSION.propertyOptInHandler &&
              PERMISSION.propertyOptInHandler.clear();
            PERMISSION.pluginOptInHandler &&
              PERMISSION.pluginOptInHandler.clear();
            PERMISSION.pluginOptOutHandler &&
              PERMISSION.pluginOptOutHandler.clear();
          })();
        }
      },
      getProperties: function (properties, caller, onSuccess) {
        var params = { property: properties };
        var id = new Date().getTime() + ++RPC.requestId;
        var propertyName;
        RPC.addBatchRequest(RPC.GET_PROPERTIES, params, id, this, function (
          responseData
        ) {
          if (
            responseData &&
            responseData.result &&
            responseData.result.properties
          ) {
            var properties = responseData.result.properties;
            for (propertyName in properties) {
              var propertyValue = properties[propertyName];
              if (propertyValue && typeof propertyValue != "function") {
                loadProperty.call(myProfile, propertyName, propertyValue);
              }
            }
          }
          function loadProperty(property, values) {
            var values = UTIL.ensureArray(values);
            this._properties[property] = values;
          }
          UTIL.doCallback(caller, onSuccess);
        });
      },
      unsavedLog: function (property, value, isAdded) {
        var updateQueue = isAdded ? PROFILE.addQueue : PROFILE.setQueue;
        if (!isAdded) {
          delete PROFILE.addQueue[property];
          delete PROFILE.setQueue[property];
        }
        if (!updateQueue[property]) {
          updateQueue[property] = [];
        }
        var unsavedValues = updateQueue[property];
        if (UTIL.isArray(value)) {
          var valueLength = value.length;
          for (var i = 0; i < valueLength; i++) {
            push.call(unsavedValues, value[i]);
          }
        } else {
          if (value !== null && value !== undefined) {
            push.call(unsavedValues, value);
          } else {
            unsavedValues = null;
          }
        }
      },
    };
    var EVENT = {
      types: ["PAGEVIEW", "VIEW", "CLICK", "CONVERSION"],
      dynamicTypes: [],
      eventQueue: [],
      handlersByEvent: {},
      ON_PERMISSION_LEVEL_CHANGE: "onpermissionlevelchange",
      ON_READY: "onready",
      ON_EVENT_READY: "oneventready",
      ON_URL_CHANGE: "onurlchange",
      publish: function (eventName, eventContext) {
        if (!eventName || typeof eventName != "string") {
          return;
        }
        var e = {};
        e.name = eventName.toLowerCase();
        e.context = eventContext;
        EVENT.eventQueue.push(e);
        IS_VERBOSE && UTIL.logInfo("published event : [" + eventName + "]");
        EVENT.handleEvent(e);
      },
      subscribe: function (eventName, handlerObject, handlerFunction) {
        if (!eventName || typeof eventName != "string") {
          return;
        }
        if (!handlerFunction || typeof handlerFunction != "function") {
          return;
        }
        var eventName = eventName.toLowerCase();
        var handlers = this.handlersByEvent[eventName];
        handlers = handlers ? handlers : [];
        EVENT.handlersByEvent[eventName] = handlers;
        var handler = {};
        handler.handlerObject = handlerObject;
        handler.handlerFunction = handlerFunction;
        handlers.push(handler);
        IS_VERBOSE && UTIL.logInfo("subscribing to event: [" + eventName + "]");
        EVENT.handleQueuedEvents(eventName, handler);
      },
      handleQueuedEvents: function (eventName, handler) {
        var eventsHandled = 0;
        for (var i = 0, l = EVENT.eventQueue.length; i < l; i++) {
          var event = EVENT.eventQueue[i];
          if (event.name == eventName) {
            UTIL.doCallback(
              handler.handlerObject,
              handler.handlerFunction,
              eventName,
              event.context
            );
          }
        }
      },
      handleEvent: function (event) {
        if (!event || !event.name) {
          return;
        }
        var eventName = event.name.toLowerCase();
        var handlers = EVENT.handlersByEvent[eventName];
        handlers = handlers ? handlers : [];
        for (var i = 0, l = handlers.length; i < l; i++) {
          var handler = handlers[i];
          UTIL.doCallback(
            handler.handlerObject,
            handler.handlerFunction,
            eventName,
            event.context
          );
        }
      },
      create: function (options, caller, onSuccess) {
        var id = new Date().getTime() + ++RPC.requestId;
        var params = {
          type: UTIL.ensureArray(options.type),
          interaction: UTIL.ensureArray(options.interaction),
          referrer: UTIL.ensureArray(options.referrer),
          profile: UTIL.ensureArray(options.profile),
        };
        RPC.addBatchRequest(RPC.CREATE_EVENT, params, id, this, handleResponse);
        function handleResponse(response) {
          if (!response || !response.result) {
            UTIL.doCallback(caller, onSuccess, null);
            return;
          }
          var result = response.result;
          var interactions = [];
          if (result.interactions) {
            handleInteractionResponse(result.interactions);
          }
          if (result.loggedIn && result.loggedIn === "true") {
            IS_VERBOSE = true;
          }
          if (result.channelId) {
            myChannelId = result.channelId;
          }
          if (result.ipaddress) {
            myRemoteIp = result.ipaddress;
          }
          if (result.interactionnames) {
            myInteractionNames = result.interactionnames;
          }
          if (result.connections) {
            myConnections = result.connections;
          }
          if (result.segments) {
            mySegments = result.segments;
          }
          if (result.requestinfo) {
            myRequestInfo = result.requestinfo;
          }
          if (result.pluginversion) {
            myPluginVersion = result.pluginversion;
          }
          if (result.libraryversion) {
            myLibraryVersion = result.libraryversion;
          }
          if (result.templatesversion) {
            myTemplateVersion = result.templatesversion;
          }
          if (result.simulatordate) {
            SIMULATOR_DATE = new Date(result.simulatordate);
          }
          if (result.eventtypes) {
            var eventTypes = UTIL.ensureArray(result.eventtypes);
            EVENT.dynamicTypes = EVENT.dynamicTypes.concat(eventTypes);
          }
          UTIL.doCallback(caller, onSuccess, interactions);
          function handleInteractionResponse(interactionData) {
            var items = UTIL.ensureArray(interactionData);
            var itemLength = items.length;
            for (var i = 0; i < itemLength; i++) {
              var itemData = items[i];
              if (itemData) {
                var interaction = createInteraction(itemData);
                push.call(interactions, interaction);
              }
            }
          }
        }
      },
    };
    BlueConic.prototype.event = {
      publish: function (eventName, eventContext) {
        EVENT.publish(eventName, eventContext);
      },
      subscribe: function (eventName, handlerObject, handlerFunction) {
        EVENT.subscribe(eventName, handlerObject, handlerFunction);
      },
      onProfilePermissionChange: EVENT.ON_PERMISSION_LEVEL_CHANGE,
      onReady: EVENT.ON_READY,
      onEventReady: EVENT.ON_EVENT_READY,
      onUrlChange: EVENT.ON_URL_CHANGE,
    };
    var RECOMMENDATION = {
      getRecommendationsEndpoint: function (requestParameters, subPath) {
        var url = PROTOCOL + bcHostname + "/rest/recommendations";
        var zoneID = UTIL.getZoneId();
        if (zoneID) {
          url += "/" + zoneID;
        }
        url += subPath ? "/" + subPath : "";
        requestParameters = requestParameters || {};
        var qs = UTIL.objectToUrl(requestParameters);
        return url + (qs ? "?" + qs : "");
      },
      createEvent: function (requestParameters, callback) {
        RPC.JSONP.get(
          this.getRecommendationsEndpoint(null, "stats"),
          requestParameters,
          function (responseData) {
            if (callback) {
              UTIL.doCallback(this, callback, responseData);
            }
          }
        );
      },
      getRecommendations: function (requestParameters, callback) {
        RPC.JSONP.get(
          this.getRecommendationsEndpoint(),
          requestParameters,
          function (responseData) {
            var recommendations = new Recommendations(responseData);
            if (callback) {
              UTIL.doCallback(this, callback, recommendations);
            }
          }
        );
      },
    };
    BlueConic.prototype.recommendation = {
      getRecommendations: function (requestParameters, callback) {
        RECOMMENDATION.getRecommendations(requestParameters, callback);
      },
      createEvent: function (requestParameters, callback) {
        RECOMMENDATION.createEvent(requestParameters, callback);
      },
    };
    var POSITION = {
      selectors: [],
      handlersBySelector: {},
      publish: function (selector) {
        if (!selector || typeof selector !== "string") {
          return;
        }
        IS_VERBOSE &&
          UTIL.logInfo(
            "published position update event for selector : [" + selector + "]"
          );
        POSITION.handlePositionUpdateEvent(selector);
      },
      subscribe: function (selector, handlerObject, callbackFunction) {
        if (!selector || typeof selector !== "string") {
          throw new Error("Selector is empty or not of type string");
        }
        if (!callbackFunction || typeof callbackFunction != "function") {
          throw new Error("No callback function defined or not a function.");
        }
        if (UTIL.indexOfArray(this.selectors, selector) === -1) {
          if (UTIL.isArray(selector)) {
            this.selectors = this.selectors.concat(selector);
          } else {
            this.selectors.push(selector);
          }
        }
        var handlers = this.handlersBySelector[selector];
        handlers = handlers ? handlers : [];
        POSITION.handlersBySelector[selector] = handlers;
        var handler = {};
        handler.handlerObject = handlerObject;
        handler.handlerFunction = callbackFunction;
        handlers.push(handler);
        IS_VERBOSE &&
          UTIL.logInfo(
            "subscribing to position update event for selector: [" +
              selector +
              "]"
          );
      },
      handlePositionUpdateEvent: function (selector) {
        if (!selector) {
          return;
        }
        var handlers = POSITION.handlersBySelector[selector];
        handlers = handlers ? handlers : [];
        delete POSITION.handlersBySelector[selector];
        UTIL.removeItemFromArray(this.selectors, selector);
        for (var i = 0, l = handlers.length; i < l; i++) {
          var handler = handlers[i];
          UTIL.doCallback(
            handler.handlerObject,
            handler.handlerFunction,
            selector
          );
        }
      },
      getSelectors: function () {
        return this.selectors;
      },
    };
    BlueConic.prototype.position = {
      publish: function (selector) {
        POSITION.publish(selector);
      },
      subscribe: function (selector, context, callbackFunction) {
        POSITION.subscribe(selector, context, callbackFunction);
      },
    };
    var UTIL = {
      docReadyCallbacks: [],
      rxhtmlTag: /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      hash: function () {
        var value = arguments[0];
        var hash = 0;
        for (var i = 0; i < value.length; i++) {
          var character = value.charCodeAt(i);
          hash = 31 * hash + character;
          hash = hash & hash;
        }
        for (var i = value.length - 1; i >= 0; i--) {
          var character = value.charCodeAt(i);
          hash = 31 * hash + character;
          hash = hash & hash;
        }
        return hash;
      },
      doCallback: function () {
        var caller = arguments[0];
        var callback = arguments[1];
        var callBackArgs = [];
        for (var i = 2, l = arguments.length; i < l; i++) {
          push.call(callBackArgs, arguments[i]);
        }
        if (callback && typeof callback == "function") {
          if (IS_VERBOSE) {
            callback.apply(caller, callBackArgs);
          } else {
            try {
              callback.apply(caller, callBackArgs);
            } catch (error) {
              UTIL.logError(
                "an error occured in callback function: [" +
                  callback +
                  "], error: [" +
                  error +
                  "]"
              );
            }
          }
        }
      },
      trimLeft: function (str) {
        if (!str) {
          return;
        }
        return str.replace(/^\s+/, "");
      },
      trimRight: function (str) {
        if (!str) {
          return;
        }
        return str.replace(/\s+$/, "");
      },
      map: function (arr, callback, thisArg) {
        for (var i = 0, n = arr.length, a = []; i < n; i++) {
          if (i in arr) {
            a[i] = callback.call(thisArg, arr[i]);
          }
        }
        return a;
      },
      setContent: function (element, content) {
        if (!element) {
          return;
        }
        if (content === undefined || content === null) {
          return;
        }
        content = content.replace(UTIL.rxhtmlTag, "<$1></$2>");
        var voidElements = [
          "area",
          "base",
          "br",
          "col",
          "command",
          "embed",
          "hr",
          "img",
          "input",
          "keygen",
          "link",
          "meta",
          "param",
          "source",
          "track",
          "wbr",
        ];
        var elementNodeName = element.nodeName
          ? element.nodeName.toLowerCase()
          : element.nodeName;
        if (UTIL.indexOfArray(voidElements, elementNodeName) !== -1) {
          var containerHTML = element.parentNode
            ? element.parentNode.innerHTML
            : null;
          if (!containerHTML) {
            IS_VERBOSE &&
              UTIL.logInfo(
                "could not set inner html for void element [" +
                  elementNodeName +
                  "] because container was not ready"
              );
            return;
          }
          var wrap = document.createElement("div");
          wrap.appendChild(element.cloneNode(true));
          var elementHTML = wrap.innerHTML;
          var replacedHTML = containerHTML.replace(elementHTML, content);
          if (element.parentNode.innerHTML !== replacedHTML) {
            try {
              element.parentNode.innerHTML = replacedHTML;
              IS_VERBOSE &&
                UTIL.logInfo(
                  "setContent replaced void element [" +
                    elementNodeName +
                    "] with given html"
                );
            } catch (error) {
              IS_VERBOSE &&
                UTIL.logInfo(
                  "setContent failed to replace void element [" +
                    elementNodeName +
                    "] with given html"
                );
            }
          }
          return;
        }
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }
        try {
          element.innerHTML = content;
        } catch (error) {
          var el = document.createElement();
          el.innerHTML = content;
          element.appendChild(el);
        }
      },
      setBcSessionIdCookie: function (profileId) {
        if (!window.isBcServer) {
          UTIL.setCookie(COOKIE_BCSESSION, profileId);
        }
      },
      setCookie: function (name, value, ttl) {
        if (!IS_DOCUMENT_COOKIE_ALLOWED) {
          return;
        }
        if (!name) {
          return;
        }
        if (value === null || value === undefined) {
          document.cookie =
            name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
          return;
        }
        var expirationDate = new Date();
        if (ttl === null || ttl === undefined || isNaN(ttl)) {
          expirationDate.setDate(expirationDate.getDate() + 365);
        } else {
          if (ttl > 0) {
            expirationDate = new Date(expirationDate.getTime() + parseInt(ttl));
          } else {
            expirationDate = null;
          }
        }
        if (value && typeof value == "string") {
          value = value.replace(/[\n\r]/g, "");
        }
        var strCookie = name + "=" + encodeURIComponent(value);
        if (expirationDate) {
          strCookie += ";expires=" + expirationDate.toUTCString();
        }
        strCookie += ";path=/";
        var totalCookieSize = document.cookie + strCookie;
        if (
          name.indexOf(COOKIE_REVISION) > -1 &&
          totalCookieSize.length > 3000
        ) {
          IS_VERBOSE &&
            UTIL.logInfo(
              "could not set cookie [" +
                name +
                "] with size [" +
                strCookie.length +
                "] because it would exceed the total cookie length of 3kb"
            );
          return;
        }
        document.cookie = strCookie;
      },
      getCookies: function () {
        var c = null,
          v = 0,
          cookies = {};
        if (!IS_DOCUMENT_COOKIE_ALLOWED) {
          return cookies;
        }
        c = document.cookie;
        if (document.cookie.match(/^\s*\$Version=(?:"1"|1);\s*(.*)/)) {
          c = RegExp.$1;
          v = 1;
        }
        if (v === 0) {
          UTIL.map(c.split(/[,;]/), function (cookie) {
            var parts = cookie.split(/=/),
              name = decodeURIComponent(UTIL.trimLeft(parts[0])),
              value = null;
            try {
              if (parts.length > 1) {
                for (var i = 1; i < parts.length; i++) {
                  value = !value ? parts[i] : value + parts[i];
                  if (i < parts.length - 1) {
                    value += encodeURIComponent("=");
                  }
                }
              }
              cookies[name] = value
                ? decodeURIComponent(UTIL.trimRight(value))
                : null;
            } catch (err) {
              value = parts[1];
            }
          });
        } else {
          UTIL.map(
            c.match(
              /(?:^|\s+)([!#$%&'*+\-.0-9A-Z^`a-z|~]+)=([!#$%&'*+\-.0-9A-Z^`a-z|~]*|"(?:[\x20-\x7E\x80\xFF]|\\[\x00-\x7F])*")(?=\s*[,;]|$)/g
            ),
            function ($0, $1) {
              var name = $0,
                value =
                  $1.charAt(0) === '"'
                    ? $1.substr(1, -1).replace(/\\(.)/g, "$1")
                    : $1;
              cookies[name] = value;
            }
          );
        }
        return cookies;
      },
      getCookie: function (name) {
        var cookies = UTIL.getCookies();
        return UTIL.getCookies()[name];
      },
      ensureArray: function (obj) {
        if (UTIL.isArray(obj)) {
          return obj;
        }
        var result = [];
        if (obj !== null && obj !== undefined) {
          push.call(result, obj);
        }
        return result;
      },
      isArray: function (obj) {
        if (!obj) {
          return false;
        }
        if (toString.call(obj).indexOf("Array") == -1) {
          return false;
        } else {
          return true;
        }
      },
      isDate: function (obj) {
        if (!obj) {
          return false;
        }
        if (toString.call(obj).indexOf("Date") == -1 || !obj.getTime) {
          return false;
        } else {
          return true;
        }
      },
      diffArrays: function (a, b) {
        var i,
          j,
          result = a.slice();
        for (i = 0; i < result.length; i++) {
          for (j = 0; j < b.length; j++) {
            if (result[i] === b[j]) {
              result.splice(i, 1);
              i--;
              break;
            }
          }
        }
        return result;
      },
      removeItemFromArray: function (arr, item) {
        if (!UTIL.isArray(arr)) {
          return;
        }
        var index;
        while ((index = UTIL.indexOfArray(arr, item)) !== -1) {
          arr.splice(index, 1);
        }
      },
      indexOfArray: function (items, obj) {
        if (!items) {
          return -1;
        }
        if (!UTIL.isArray(items)) {
          return -1;
        }
        for (var i = 0, l = items.length; i < l; i++) {
          if (items[i] === obj) {
            return i;
          }
        }
        return -1;
      },
      mergeArrays: function (source, dest) {
        if (!UTIL.isArray(source) || !dest) {
          return;
        }
        if (!UTIL.isArray(dest) && UTIL.indexOfArray(source, dest) != -1) {
          push.call(source, dest);
          return;
        }
        for (var i = 0, l = dest.length; i < l; i++) {
          var d = dest[i];
          if (UTIL.indexOfArray(source, d) === -1) {
            push.call(source, d);
          }
        }
      },
      loadScript: function (url, caller, onSuccess) {
        var script = document.createElement("script"),
          done = false,
          head;
        script.src = url;
        script.async = true;
        script.onload = script.onreadystatechange = function () {
          if (
            !done &&
            (!this.readyState ||
              this.readyState === "loaded" ||
              this.readyState === "complete")
          ) {
            done = true;
            script.onload = script.onreadystatechange = null;
            if (script && script.parentNode) {
              script.parentNode.removeChild(script);
            }
            UTIL.doCallback(caller, onSuccess);
          }
        };
        if (!head) {
          head =
            document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0];
        }
        head.appendChild(script);
      },
      loadCSS: function (url) {
        if (!UTIL.loadCSS.urlMap) {
          UTIL.loadCSS.urlMap = {};
        }
        if (!UTIL.loadCSS.counter) {
          UTIL.loadCSS.counter = 0;
        }
        var urlMap = UTIL.loadCSS.urlMap;
        var htmlId = urlMap[url];
        if (!htmlId) {
          urlMap[url] = "id_" + ++UTIL.loadCSS.counter;
        }
        htmlId = urlMap[url];
        if (document.getElementById(htmlId)) {
          IS_VERBOSE && UTIL.logInfo("skip loading css [" + url + "]");
          return;
        }
        IS_VERBOSE && UTIL.logInfo("start loading css [" + url + "]");
        var parent =
          document.getElementsByTagName("head")[0] ||
          document.getElementsByTagName("body")[0];
        var link = document.createElement("link");
        link.id = htmlId;
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = url;
        parent.appendChild(link);
      },
      bindDocumentReady: function (scope, fn) {
        if (!fn || typeof fn != "function") {
          return;
        }
        if (!IS_DOCUMENT_READY) {
          push.call(UTIL.docReadyCallbacks, function () {
            UTIL.doCallback(scope, fn);
          });
        } else {
          UTIL.doCallback(scope, fn);
        }
      },
      docReady: function () {
        if (!IS_DOCUMENT_READY) {
          IS_DOCUMENT_READY = true;
          if (window.blueconicProxy) {
            RPC.submitBatch();
          }
          IS_VERBOSE &&
            UTIL.logInfo("[+] document ready event thrown by browser");
          var callBacks = UTIL.docReadyCallbacks;
          var callBacksLength = callBacks.length;
          for (var i = 0; i < callBacksLength; i++) {
            callBacks[i].apply();
          }
        }
      },
      getInteractionParameters: function (itemData) {
        var languageparameters = {};
        if (itemData) {
          var entries = UTIL.ensureArray(itemData.parameters);
          for (var i = 0, l = entries.length; i < l; i++) {
            var parameterData = entries[i];
            if (parameterData) {
              var parameters = {};
              for (
                var j = 0, l2 = parameterData.parameter.length;
                j < l2;
                j++
              ) {
                var subParameterData = parameterData.parameter[j];
                if (subParameterData) {
                  parameters[subParameterData.id] = subParameterData.value;
                }
              }
              languageparameters[parameterData.locale] = parameters;
            }
          }
        }
        return languageparameters;
      },
      getPropertiesFromObject: function (obj) {
        if (!obj) {
          return [];
        }
        var keys = [];
        for (property in obj) {
          if (
            hasOwn.call(obj, property) &&
            typeof obj[property] != "function"
          ) {
            push.call(keys, property);
          }
        }
        return keys;
      },
      getDOMElement: function (position, isCSSSelector) {
        if (!position) {
          return null;
        }
        if (typeof isCSSSelector == "undefined") {
          isCSSSelector = UTIL.isCSSSelector(position);
        }
        if (!isCSSSelector) {
          var element = document.getElementById(position);
          if (!element) {
            element = document.getElementsByTagName(position);
          }
          if (element && element.length && element.length > 0) {
            return element[0];
          }
          if (element instanceof HTMLCollection && element.length === 0) {
            return null;
          }
          return element;
        }
        var r = Sizzle(position);
        if (r && r.length > 0) {
          return r[0];
        }
        return null;
      },
      isCSSSelector: function (position) {
        if (!position) {
          return false;
        }
        var isAttributeSelection = false;
        if (
          position.indexOf("[") !== -1 &&
          position.indexOf("]") !== -1 &&
          position.indexOf("=") !== -1
        ) {
          isAttributeSelection = true;
        }
        var isCSSSelector = false;
        if (
          position.indexOf("#") !== -1 ||
          position.indexOf(".") !== -1 ||
          position.indexOf(" ") !== -1 ||
          position.indexOf(":") !== -1 ||
          isAttributeSelection
        ) {
          isCSSSelector = true;
        }
        return isCSSSelector;
      },
      normalizePosition: function (position) {
        if (!position) {
          return null;
        }
        if (!UTIL.isCSSSelector(position)) {
          position = "#" + position;
        }
        return position;
      },
      addCSSToDOM: function (arrSelector, identifier, duration) {
        if (!arrSelector || arrSelector.length === 0) {
          return;
        }
        IS_VERBOSE && UTIL.logInfo("hide positions  [" + arrSelector + "]");
        var css = "";
        for (var i = 0, l = arrSelector.length; i < l; i++) {
          var cssSelector = UTIL.normalizePosition(arrSelector[i]);
          if (cssSelector) {
            css =
              css + cssSelector + " {opacity:0.0;filter:alpha(opacity=0);}\n";
          }
        }
        var styleElement = document.createElement("style");
        styleElement.setAttribute("type", "text/css");
        styleElement.setAttribute("id", identifier);
        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = css;
        } else {
          styleElement.appendChild(document.createTextNode(css));
        }
        var head =
          document.getElementsByTagName("head")[0] ||
          document.getElementsByTagName("body")[0];
        head.appendChild(styleElement);
        if (duration && duration > 0) {
          window.setTimeout(function () {
            var styleElement = document.getElementById(identifier);
            if (styleElement) {
              styleElement.parentNode.removeChild(styleElement);
              IS_VERBOSE &&
                UTIL.logInfo(
                  "timeout [" +
                    duration +
                    "] expired; CSS [" +
                    identifier +
                    "] removed"
                );
            }
          }, duration);
        }
      },
      getBaseURL: function (interactionTypeId) {
        var staticUrl = null;
        if (myStaticUrls && myStaticUrls[interactionTypeId]) {
          staticUrl = myStaticUrls[interactionTypeId];
        }
        if (!staticUrl) {
          return null;
        }
        if (staticUrl.indexOf("/blueconic/static/plugins/") == 0) {
          return BC_URL + staticUrl;
        }
        if (
          !IS_HTTPS &&
          staticUrl.indexOf("https://localhost/") == -1 &&
          staticUrl.indexOf("https://localhost:9090/") == -1
        ) {
          staticUrl = staticUrl.replace("https:", "http:");
        } else {
          if (staticUrl && staticUrl.indexOf("http:") !== -1) {
            IS_VERBOSE &&
              UTIL.logInfo(
                "base url [" +
                  staticUrl +
                  "] for interaction type [" +
                  interactionTypeId +
                  ']<br> does not have "https" support'
              );
          }
        }
        return staticUrl;
      },
      parseJSON: function (json) {
        if (!json) {
          return null;
        }
        return (HAS_JSON_SUPPORT ? window.JSON : JSON).parse(json);
      },
      stringifyObject: function (obj, replacer, space) {
        return (HAS_JSON_SUPPORT ? window.JSON : JSON).stringify(
          obj,
          replacer,
          space
        );
      },
      handleProfileId: function (profileId) {
        if (PERMISSION.getLevel() === PERMISSION.DO_NOT_TRACK) {
          return;
        }
        var currentProfileId = UTIL.getCookie(COOKIE_BCSESSION);
        if (currentProfileId !== profileId) {
          IS_VERBOSE &&
            UTIL.logInfo(
              "update cookie [" +
                COOKIE_BCSESSION +
                "] with profile id [" +
                profileId +
                "]"
            );
          UTIL.setBcSessionIdCookie(profileId);
        }
        if (profileId && UTIL.getCookie(COOKIE_BCTEMPSESSION)) {
          UTIL.setCookie(COOKIE_BCTEMPSESSION, null);
          if (myProfile && !myProfile.getId()) {
            var setProfileId = function (id) {
              this._id = id;
            };
            setProfileId.call(myProfile, profileId);
          }
        }
      },
      handleTempProfileId: function (tempId) {
        if (tempId && UTIL.getCookie(COOKIE_BCTEMPSESSION) !== tempId) {
          UTIL.setCookie(COOKIE_BCTEMPSESSION, tempId, TEMP_COOKIE_TTL);
        }
      },
      log: function (message) {
        if (HAS_CONSOLE) {
          console.log("[BC]" + message);
        }
      },
      logError: function (message) {
        while (message.indexOf("<br>") !== -1) {
          message = message.replace("<br>", "\n            ");
        }
        UTIL.log("[ERROR] " + message);
        if (HAS_CONSOLE && console.trace) {
          UTIL.log("[ERROR] --stacktrace--");
          console.trace();
          UTIL.log("[ERROR] --end stacktrace--");
        }
      },
      logWarning: function (message) {
        if (IS_VERBOSE) {
          UTIL.log("[WARNING] " + message);
        }
      },
      logInfo: function (message) {
        if (IS_VERBOSE) {
          var runningTime = new Date().getTime() - START_TIME;
          while (message.indexOf("<br>") !== -1) {
            message = message.replace("<br>", "\n           ");
          }
          UTIL.log("[INFO] " + message + " +" + runningTime + " ms");
        }
      },
      logDeprecated: function (functionName, alt) {
        if (IS_VERBOSE) {
          UTIL.log(
            "[DEPRECATED] function [" +
              functionName +
              "] is deprecated. \n                 Please use : " +
              alt
          );
        }
      },
      formatLocalDate: function () {
        var now = new Date();
        var tzo = -now.getTimezoneOffset();
        var dif = tzo >= 0 ? "+" : "-",
          pad = function (num) {
            var norm = Math.abs(Math.floor(num));
            return (norm < 10 ? "0" : "") + norm;
          };
        return (
          now.getFullYear() +
          "-" +
          pad(now.getMonth() + 1) +
          "-" +
          pad(now.getDate()) +
          "T" +
          pad(now.getHours()) +
          ":" +
          pad(now.getMinutes()) +
          ":" +
          pad(now.getSeconds()) +
          dif +
          pad(tzo / 60) +
          ":" +
          pad(tzo % 60)
        );
      },
      getCurrentTime: function () {
        var now = new Date();
        return (
          ("0" + now.getHours()).slice(-2) +
          ":" +
          ("0" + now.getMinutes()).slice(-2)
        );
      },
      objectToUrl: function (obj) {
        var str = "";
        for (var key in obj) {
          if (str !== "") {
            str += "&";
          }
          str += key + "=" + encodeURIComponent(obj[key]);
        }
        return str;
      },
      getZoneId: function () {
        if (IS_LOCAL_STORAGE_SUPPORTED) {
          return sessionStorage.getItem(COOKIE_BCZONEID);
        } else {
          return UTIL.getCookie(COOKIE_BCZONEID);
        }
      },
      handleZoneId: function (zoneId) {
        if (IS_LOCAL_STORAGE_SUPPORTED) {
          zoneId
            ? sessionStorage.setItem(COOKIE_BCZONEID, zoneId)
            : sessionStorage.removeItem(COOKIE_BCZONEID);
        } else {
          zoneId
            ? UTIL.setCookie(COOKIE_BCZONEID, zoneId, 5 * 60 * 1000)
            : UTIL.setCookie(COOKIE_BCZONEID, null);
        }
      },
    };
    (function () {
      INTERNAL.hideAllPositions();
    })();
    var domainGroup;
    if (OVERRULLED_HOSTNAME) {
      domainGroup = BlueConic.prototype.fn.getDomainGroup(OVERRULLED_HOSTNAME);
    } else {
      if (window.blueconicProxy) {
        domainGroup = BlueConic.prototype.fn.getDomainGroup(window.websiteHost);
      } else {
        domainGroup = BlueConic.prototype.fn.getDomainGroup(
          document.location.hostname
        );
      }
    }
    var RPC = {
      GET_PROFILE: "getProfile",
      CREATE_PROFILE: "createProfile",
      DELETE_PROFILE: "deleteProfile",
      SET_PROPERTIES: "setProperties",
      ADD_PROPERTIES: "addProperties",
      GET_PROPERTIES: "getProperties",
      GET_LOGIN_STATUS: "getLoginStatus",
      GET_ALL: "getAll",
      CREATE_EVENT: "createEvent",
      GET_PROPERTY_LABELS: "getPropertyLabels",
      GET_PROFILE_PROPERTIES: "getProfileProperties",
      SEND_MAIL: "sendMail",
      ADD_OPTIN: "addOptin",
      REMOVE_OPTIN: "removeOptin",
      ADD_OPTOUT: "addOptout",
      REMOVE_OPTOUT: "removeOptout",
      SET_PERMISSION_LEVEL: "setPermissionLevel",
      resourceURL_GET: BC_SERVER + "/DG/" + domainGroup + "/rest/rpc/",
      resourceURL_POST: BC_SERVER + "/DG/" + domainGroup + "/rest/rpc/json",
      batchRequests: [],
      requestId: 0,
      JSONP: (function () {
        var counter = Math.floor(Math.random() * 1000) + 100;
        var head,
          query,
          key,
          window = this,
          config = {};
        function load(url, errorCallback) {
          var script = document.createElement("script"),
            done = false;
          script.src = url;
          script.async = true;
          script.onload = script.onreadystatechange = function () {
            if (
              !done &&
              (!this.readyState ||
                this.readyState === "loaded" ||
                this.readyState === "complete")
            ) {
              done = true;
              script.onload = script.onreadystatechange = null;
              if (script && script.parentNode) {
                script.parentNode.removeChild(script);
              }
            }
          };
          script.onerror = function (err) {
            UTIL.handleZoneId();
            if (errorCallback) {
              errorCallback(err);
            }
          };
          if (!head) {
            head = document.getElementsByTagName("head")[0];
          }
          head.appendChild(script);
        }
        function encode(str) {
          return encodeURIComponent(str);
        }
        function getRPCParameters(url) {
          var qsParams = "";
          var bcSessionId = UTIL.getCookie(COOKIE_BCSESSION) || "";
          var bcTempSessionId = UTIL.getCookie(COOKIE_BCTEMPSESSION) || "";
          var overruleReferrer = OVERRULLED_HOSTNAME
            ? encodeURIComponent(OVERRULLED_HOSTNAME)
            : "";
          if (window.blueconicProxy && window.bcChannelIdentifier) {
            overruleReferrer = encodeURIComponent(window.bcChannelIdentifier);
          } else {
            if (
              document.querySelector &&
              document.querySelector("meta[name=referrer]")
            ) {
              qsParams +=
                "referer=" + encodeURIComponent(window.location) + "&";
            } else {
              if (
                document.location.protocol === "https:" &&
                url.indexOf("http:") === 0
              ) {
                qsParams +=
                  "referer=" + encodeURIComponent(window.location) + "&";
              } else {
                if (
                  window.location &&
                  window.location.toString().indexOf("#") > -1
                ) {
                  qsParams +=
                    "referer=" + encodeURIComponent(window.location) + "&";
                }
              }
            }
          }
          if (window.name && window.name.indexOf("bc_") > -1) {
            var mode = window.name;
            if (mode) {
              var found = false;
              var newMode = mode;
              for (var i = 0; i < myFixedModes.length; i++) {
                var checkMode = myFixedModes[i];
                if (mode.indexOf(checkMode) > -1) {
                  newMode = checkMode;
                  found = true;
                }
              }
              if (!found) {
                mode = mode.substring(mode.indexOf("bc_"));
              } else {
                mode = newMode;
              }
              qsParams += "mode=" + mode + "&";
            }
          } else {
            if (BC_MGT || window.opener) {
              qsParams +=
                "checkCookie=true&isopener=" +
                (typeof window.opener != "undefined" && window.opener != null) +
                "&";
            }
          }
          qsParams +=
            "bcsessionid=" +
            bcSessionId +
            "&bctempid=" +
            bcTempSessionId +
            "&overruleReferrer=" +
            overruleReferrer +
            "&time=" +
            encode(UTIL.formatLocalDate());
          return qsParams;
        }
        function jsonp(url, params, callback, callbackName, errorCallback) {
          var query = (url || "").indexOf("?") === -1 ? "?" : "&";
          params = params || {};
          for (var key in params) {
            if (hasOwn.call(params, key)) {
              query += key + "=" + params[key] + "&";
            }
          }
          query +=
            (query.indexOf("?") === -1 ? "?" : "") + getRPCParameters(url);
          var jsonp = "bc_json" + ++counter;
          window[jsonp] = function (data) {
            callback(data);
            try {
              delete window[jsonp];
            } catch (e) {}
            window[jsonp] = null;
          };
          load(
            url +
              query +
              "&" +
              (callbackName || config.callbackName || "callback") +
              "=" +
              jsonp,
            errorCallback
          );
          return jsonp;
        }
        function corsPostRequest(
          url,
          params,
          successCallback,
          errorCallback,
          isRedirect
        ) {
          var createCORSRequest = function (method, url) {
            var xhr1 = new XMLHttpRequest();
            if ("withCredentials" in xhr1) {
              xhr1.open(method, url, true);
              xhr1.setRequestHeader("Content-Type", "text/plain");
              xhr1.withCredentials = true;
              xhr1.timeout = 10000;
            } else {
              xhr1 = null;
            }
            return xhr1;
          };
          var qsParams =
            (url.indexOf("?") === -1 ? "?" : "") + getRPCParameters(url);
          var xhr = createCORSRequest(
            "POST",
            url + qsParams + "&ts=" + new Date().getTime()
          );
          if (!xhr) {
            UTIL.logWarning(
              "CORS POST request failed, is XMLHttpRequest overruled? Fallback to GET."
            );
            errorCallback();
            return false;
          }
          xhr.onload = function () {
            if (xhr.responseText) {
              var response = blueConicAPI.json.parse(xhr.responseText);
              if (!isRedirect && response.location) {
                if (
                  PROTOCOL === "http://" &&
                  response.location.indexOf("https://") > -1
                ) {
                  response.location = response.location.replace(
                    "https://",
                    "http://"
                  );
                }
                corsPostRequest(
                  response.location,
                  params,
                  successCallback,
                  errorCallback,
                  true
                );
              } else {
                successCallback(response);
              }
            }
          };
          xhr.onerror = function () {
            var statusCode = xhr.status;
            if (statusCode > 0) {
              UTIL.logWarning("CORS POST request failed.");
            }
            UTIL.handleZoneId();
            if (errorCallback) {
              errorCallback();
            }
          };
          xhr.onabort = function (e) {
            HAS_CONSOLE && console.log("CORS request is aborted.", e);
          };
          xhr.ontimeout = function (event) {
            HAS_CONSOLE &&
              console.log("CORS request has timed-out, 10s exceeded.");
          };
          xhr.send(params);
          return true;
        }
        function setDefaults(obj) {
          config = obj;
        }
        return { get: jsonp, post: corsPostRequest, init: setDefaults };
      })(),
      handleRevisions: function () {
        var allCookies = null;
        var cookieNames = null;
        if (IS_LOCAL_STORAGE_SUPPORTED) {
          cookieNames = [];
          for (var i = 0; i < localStorage.length; i++) {
            cookieNames.push(localStorage.key(i));
          }
        } else {
          allCookies = UTIL.getCookies();
          cookieNames = UTIL.getPropertiesFromObject(allCookies);
        }
        for (var i = 0, l = cookieNames.length; i < l; i++) {
          var cookieName = cookieNames[i];
          if (!cookieName || cookieName.indexOf(COOKIE_REVISION) === -1) {
            continue;
          }
          var cookieValue;
          if (IS_LOCAL_STORAGE_SUPPORTED) {
            cookieValue = localStorage.getItem(cookieName);
          } else {
            cookieValue = allCookies[cookieName];
          }
          var backlog = UTIL.parseJSON(cookieValue);
          if (!backlog) {
            continue;
          }
          var method = backlog.method;
          var param = backlog.param;
          var id = backlog.requestId;
          if (!method || !param || !id) {
            continue;
          }
          IS_VERBOSE &&
            UTIL.logInfo(
              "scheduled revision RPC for requestId [" +
                id +
                "] with method : [" +
                method +
                "]"
            );
          RPC.addBatchRequest(method, param, id, null, null);
          if (IS_LOCAL_STORAGE_SUPPORTED) {
            localStorage.removeItem(cookieName);
          } else {
            UTIL.setCookie(cookieName, null);
          }
        }
      },
      RPCTask: function (id, parameter, method, caller, callBack) {
        this._id = id + "";
        this._param = parameter;
        this._method = method;
        this._caller = caller;
        this._callBack = callBack;
        this._isQueued = false;
        this._isFinished = false;
        this._rpc = null;
        this._revCookie = null;
        this.getContentLength = function () {
          return encodeURIComponent(UTIL.stringifyObject(this.getRPC())).length;
        };
        this.getId = function () {
          return this._id.replace("rev_", "");
        };
        this.isQueued = function () {
          return this._isQueued;
        };
        this.queued = function () {
          this._isQueued = true;
        };
        this.isFinished = function () {
          return this._isFinished;
        };
        this.setParameter = function (parameter) {
          this._param = parameter;
          this._rpc = null;
        };
        this.getParameter = function () {
          return this._param;
        };
        this.finished = function (response) {
          this._isFinished = true;
          UTIL.handleZoneId(response.zoneId);
          this.removeRevisionCookie();
          UTIL.doCallback(this._caller, this._callBack, response);
        };
        this.getRPC = function () {
          if (!this._rpc) {
            this._rpc = {
              method: encodeURIComponent(this._method),
              params: UTIL.stringifyObject(this._param),
              id: encodeURIComponent(this.getId()),
            };
          }
          return this._rpc;
        };
        this.setRevisionCookie = function () {
          if (this._id.indexOf("rev") === 0) {
            return;
          }
          if (PERMISSION.getLevel() === PERMISSION.DO_NOT_TRACK) {
            return;
          }
          if (this.getContentLength() > MAX_RPC_REQUEST_LENGTH) {
            return;
          }
          if (
            this._method !== RPC.SET_PROPERTIES &&
            this._method !== RPC.ADD_PROPERTIES &&
            this._method !== RPC.SEND_MAIL &&
            this._method !== RPC.CREATE_EVENT
          ) {
            return;
          }
          if (
            this._method === RPC.CREATE_EVENT &&
            this._param &&
            this._param.type &&
            this._param.type[0] === "PAGEVIEW"
          ) {
            return;
          }
          var revisionRequestId = "rev_" + this._id;
          var value = UTIL.stringifyObject({
            method: this._method,
            param: this._param,
            requestId: revisionRequestId,
          });
          var cookieName = COOKIE_REVISION + "_" + this._id;
          var setCookie = function () {
            UTIL.setCookie(cookieName, value, 0);
            var cookie = UTIL.getCookie(cookieName);
            if (!cookie) {
              var allCookies = UTIL.getCookies();
              var cookieNames = UTIL.getPropertiesFromObject(allCookies);
              for (var i = 0, l = cookieNames.length; i < l; i++) {
                var placedCookie = cookieNames[i];
                if (placedCookie.indexOf(COOKIE_REVISION) === 0) {
                  UTIL.setCookie(placedCookie, null);
                }
              }
              UTIL.setCookie(cookieName, value, 0);
              cookie = UTIL.getCookie(cookieName);
              if (!cookie) {
                IS_VERBOSE &&
                  UTIL.logInfo(
                    "could not store revision cookie [" + cookieName + "]"
                  );
                return;
              }
            }
            IS_VERBOSE &&
              UTIL.logInfo(
                "revision cookie with name [" +
                  cookieName +
                  "] with revision [" +
                  revisionRequestId +
                  "] stored"
              );
          };
          if (IS_LOCAL_STORAGE_SUPPORTED) {
            localStorage.setItem(cookieName, value);
            if (!localStorage.getItem(cookieName)) {
              setCookie();
            } else {
              IS_VERBOSE &&
                UTIL.logInfo(
                  "revision with name [" +
                    cookieName +
                    "] with revision [" +
                    revisionRequestId +
                    "] is stored in localStorage."
                );
            }
          } else {
            setCookie();
          }
          this._revCookie = cookieName;
        };
        this.removeRevisionCookie = function () {
          if (this._revCookie) {
            if (IS_LOCAL_STORAGE_SUPPORTED) {
              IS_VERBOSE &&
                UTIL.logInfo(
                  "revision with name [" +
                    this._revCookie +
                    "] removed from localStorage"
                );
              localStorage.removeItem(this._revCookie);
            } else {
              IS_VERBOSE &&
                UTIL.logInfo(
                  "revision cookie with name [" + this._revCookie + "] removed"
                );
              UTIL.setCookie(this._revCookie, null);
            }
          }
        };
      },
      RemoteRequest: function (
        method,
        caller,
        onSuccess,
        parameter,
        requestId
      ) {
        this._caller = caller;
        this._onSuccess = onSuccess;
        this._isFinished = false;
        this._parameter = parameter;
        this._requestId = requestId;
        this._method = method;
        this._tasks = [];
        this.getTasks = function () {
          return this._tasks;
        };
        this.isFinished = function () {
          return this._isFinished;
        };
        this.toString = function () {
          var totalLength = new RPC.RPCTask(
            this._requestId,
            this._parameter,
            this._method,
            null,
            null
          ).getContentLength();
          var str =
            "RemoteRequest [" +
            this._requestId +
            "] - method : [" +
            this._method +
            "], Tasks : [" +
            this._tasks.length +
            "], contentLength : [" +
            totalLength +
            "]";
          for (var i = 0, l = this._tasks.length; i < l; i++) {
            var task = this._tasks[i];
            var contentLength = task.getContentLength();
            str +=
              "<br>Task [" +
              task.getId() +
              "] - Content length : [" +
              contentLength +
              "]. Is finished [" +
              task.isFinished() +
              "].";
            var parameter = task.getParameter();
            if (!parameter) {
              return str;
            }
            var objectProperties = parameter.properties
              ? parameter.properties
              : parameter;
            for (property in objectProperties) {
              if (hasOwn.call(objectProperties, property)) {
                str += "<br>  -" + property;
                var values = objectProperties[property];
                if (!values || values.length === 0) {
                  str += "<br>    (null or undefined)";
                } else {
                  if (UTIL.isArray(values)) {
                    for (var j = 0, jl = values.length; j < jl; j++) {
                      var value = values[j];
                      if (value === "") {
                        value = "(empty string)";
                      } else {
                        if (value == null || value == undefined) {
                          value = "(null or undefined)";
                        }
                      }
                      str += "<br>    " + value;
                    }
                  } else {
                    if (values) {
                      str += "<br>    " + values;
                    }
                  }
                }
              }
            }
          }
          return str;
        };
        var runCallbackIfFinished = function (response) {
          var tasks = this._tasks;
          for (var i = 0, l = tasks.length; i < l; i++) {
            var task = tasks[i];
            if (!task.isFinished()) {
              return;
            }
          }
          this._isFinished = true;
          IS_VERBOSE && UTIL.logInfo(this.toString());
          UTIL.doCallback(this._caller, this._onSuccess, response);
        };
        var task = new RPC.RPCTask(
          this._requestId,
          this._parameter,
          this._method,
          this,
          runCallbackIfFinished
        );
        if (task.getContentLength() <= MAX_RPC_REQUEST_LENGTH) {
          push.call(this._tasks, task);
        } else {
          switch (method) {
            case RPC.ADD_PROPERTIES:
            case RPC.SET_PROPERTIES:
              var splittedParameters = (function (
                requestId,
                method,
                parameterToSplitUp
              ) {
                var splittedParameters = [];
                var createEmptyParameter = function () {
                  var rpcParam = {};
                  rpcParam.properties = {};
                  return rpcParam;
                };
                var addProperty = function (property, values) {
                  this["properties"][property] = UTIL.ensureArray(values);
                };
                var removeProperty = function (property) {
                  try {
                    delete this["properties"][property];
                  } catch (err) {}
                };
                var isLengthOK = function () {
                  var properties = UTIL.getPropertiesFromObject(
                    this["properties"]
                  );
                  if (properties.length === 1) {
                    return true;
                  }
                  var task = new RPC.RPCTask(
                    requestId,
                    this,
                    method,
                    null,
                    null
                  );
                  if (task.getContentLength() <= MAX_RPC_REQUEST_LENGTH) {
                    return true;
                  }
                  return false;
                };
                var propertiesToUpdate = UTIL.getPropertiesFromObject(
                  parameterToSplitUp.properties
                );
                var parameter = createEmptyParameter.call(this);
                for (var i = 0, l = propertiesToUpdate.length; i < l; i++) {
                  var property = propertiesToUpdate[i];
                  var value = parameterToSplitUp.properties[property];
                  addProperty.call(parameter, property, value);
                  if (!isLengthOK.call(parameter)) {
                    removeProperty.call(parameter, property);
                    push.call(splittedParameters, parameter);
                    parameter = createEmptyParameter.call(this);
                    addProperty.call(parameter, property, value);
                  }
                }
                push.call(splittedParameters, parameter);
                return splittedParameters;
              })(this._requestId, this._method, this._parameter);
              for (var i = 0, l = splittedParameters.length; i < l; i++) {
                var task = new RPC.RPCTask(
                  requestId + "-" + i,
                  splittedParameters[i],
                  method,
                  this,
                  runCallbackIfFinished
                );
                push.call(
                  this._tasks,
                  new RPC.RPCTask(
                    requestId + "-" + i,
                    splittedParameters[i],
                    method,
                    this,
                    runCallbackIfFinished
                  )
                );
              }
              break;
            default:
              push.call(this._tasks, task);
              break;
          }
        }
      },
      addBatchRequest: function (method, params, requestId, caller, onSuccess) {
        var request = new RPC.RemoteRequest(
          method,
          caller,
          onSuccess,
          params,
          requestId
        );
        push.call(RPC.batchRequests, request);
      },
      submitBatch: function () {
        if (window.blueconicProxy && !IS_DOCUMENT_READY) {
          return;
        }
        var doCorsRequest =
          IS_CORS_SUPPORTED &&
          XMLHttpRequest.prototype &&
          INTERNAL.isNative(
            XMLHttpRequest.prototype.send,
            "XMLHttpRequest.prototype.send"
          );
        var scheduleTasks = function (requests) {
          var scheduledTasks = [];
          var requestContentLength = 0;
          for (var i = 0, il = requests.length; i < il; i++) {
            var request = requests[i];
            var tasks = request.getTasks();
            for (var j = 0, jl = tasks.length; j < jl; j++) {
              var task = tasks[j];
              if (task.isQueued()) {
                continue;
              }
              var contentLength = parseInt(task.getContentLength());
              if (
                requestContentLength + contentLength <=
                MAX_RPC_REQUEST_LENGTH
              ) {
                task.queued();
                requestContentLength += contentLength;
                push.call(scheduledTasks, task);
              } else {
                if (scheduledTasks.length === 0) {
                  task.queued();
                  requestContentLength += contentLength;
                  push.call(scheduledTasks, task);
                  IS_VERBOSE &&
                    UTIL.logInfo(
                      "RPC task with id [" +
                        task.getId() +
                        "] method [" +
                        task.getMethod() +
                        " ] contains a profile property value which could be too large too handle.<br> The size of the RPC is [" +
                        contentLength +
                        "] while the max size is [" +
                        MAX_RPC_REQUEST_LENGTH +
                        "]"
                    );
                  submitTasks.call(this, scheduledTasks, function () {
                    scheduleTasks.call(this, requests);
                  });
                  return;
                } else {
                  submitTasks.call(this, scheduledTasks, function () {
                    scheduleTasks.call(this, requests);
                  });
                  return;
                }
              }
            }
          }
          if (scheduledTasks.length > 0) {
            submitTasks.call(this, scheduledTasks, null);
          }
        };
        var handleResponse = function (responseData, tasks, fnOnReady) {
          if (responseData) {
            var items = UTIL.ensureArray(responseData);
            for (var i = 0; i < items.length; i++) {
              var response = items[i];
              if (response) {
                UTIL.handleTempProfileId(response.tempId);
                UTIL.handleProfileId(response.profileId);
                for (var j = 0; j < tasks.length; j++) {
                  var task = tasks[j];
                  if (task.getId() === response.id) {
                    task.finished(response);
                  }
                }
              }
            }
          } else {
            for (var j = 0; j < tasks.length; j++) {
              tasks[j].finished();
            }
          }
          if (fnOnReady && typeof fnOnReady === "function") {
            fnOnReady.call(this);
          }
        };
        var getUrlIncludingZoneId = function (url) {
          var zoneId = UTIL.getZoneId();
          if (!zoneId) {
            return url;
          }
          if (url && url[url.length - 1] !== "/") {
            url += "/";
          }
          url += UTIL.getZoneId();
          return url;
        };
        var submitTasks = function (tasks, fnOnReady) {
          var rpcs = [];
          for (var i = 0; i < tasks.length; i++) {
            push.call(rpcs, tasks[i].getRPC());
            tasks[i].setRevisionCookie();
          }
          var jsonpGet = function () {
            var methodCalls = {
              requests: encodeURIComponent(UTIL.stringifyObject(rpcs)),
            };
            RPC.JSONP.get(
              getUrlIncludingZoneId(RPC.resourceURL_GET),
              methodCalls,
              function (responseData) {
                handleResponse(responseData, tasks, fnOnReady);
              },
              null,
              function () {
                RPC.JSONP.get(
                  getUrlIncludingZoneId(RPC.resourceURL_GET),
                  methodCalls,
                  function (responseData) {
                    handleResponse(responseData, tasks, fnOnReady);
                  }
                );
              }
            );
          };
          if (doCorsRequest) {
            RPC.JSONP.post(
              getUrlIncludingZoneId(RPC.resourceURL_POST),
              UTIL.stringifyObject(rpcs),
              function (responseData) {
                handleResponse(responseData, tasks, fnOnReady);
              },
              function () {
                UTIL.logWarning(
                  "CORS POST request failed, fallback on JSONP GET request."
                );
                jsonpGet();
              }
            );
          } else {
            jsonpGet();
          }
        };
        var getAllTasks = function (batchRequests) {
          var allTasks = [];
          for (var i = 0, il = batchRequests.length; i < il; i++) {
            var request = batchRequests[i];
            var tasks = request.getTasks();
            for (var j = 0, jl = tasks.length; j < jl; j++) {
              if (tasks[j].isQueued()) {
                continue;
              }
              tasks[j].queued();
              push.call(allTasks, tasks[j]);
            }
          }
          return allTasks;
        };
        var batchRequests = RPC.batchRequests;
        if (doCorsRequest) {
          var tasks = getAllTasks.call(this, batchRequests);
          if (tasks.length > 0) {
            submitTasks.call(this, tasks);
          }
        } else {
          scheduleTasks.call(this, batchRequests);
        }
        RPC.batchRequests = [];
      },
    };
    (function () {
      if (typeof bcSubscriptions === "undefined") {
        return;
      }
      if (!UTIL.isArray(bcSubscriptions)) {
        return;
      }
      for (var i = 0, l = bcSubscriptions.length; i < l; i++) {
        var subscription = bcSubscriptions[i];
        if (!UTIL.isArray(subscription)) {
          return;
        }
        if (subscription.length !== 2) {
          return;
        }
        EVENT.subscribe(subscription[0], null, subscription[1]);
      }
      bcSubscriptions = {};
      bcSubscriptions.push = function (subscription) {
        if (!UTIL.isArray(subscription)) {
          return;
        }
        if (subscription.length !== 2) {
          return;
        }
        EVENT.subscribe(subscription[0], null, subscription[1]);
      };
    })();
    (function () {
      if (document.readyState === "complete") {
        UTIL.docReady();
        return;
      }
      if (document.addEventListener) {
        document.addEventListener(
          "DOMContentLoaded",
          function () {
            UTIL.docReady();
          },
          false
        );
        window.addEventListener(
          "load",
          function () {
            UTIL.docReady();
          },
          false
        );
      } else {
        if (document.attachEvent) {
          document.attachEvent("onreadystatechange", function () {
            UTIL.docReady();
          });
          window.attachEvent("onload", function () {
            UTIL.docReady();
          });
          var toplevel = false;
          try {
            toplevel = window.frameElement == null;
          } catch (e) {}
          if (document.documentElement.doScroll && toplevel) {
            UTIL.docReady();
            return;
          }
        }
      }
    })();
    if (!HAS_JSON_SUPPORT) {
      IS_VERBOSE &&
        UTIL.logInfo(
          "The browser has no JSON support; the json2 [http://www.JSON.org/js.html] is used for handling JSON"
        );
      JSON = {};
      (function (JSON) {
        function f(n) {
          return n < 10 ? "0" + n : n;
        }
        if (typeof Date.prototype.bcToJSON !== "function") {
          Date.prototype.bcToJSON = function (key) {
            return isFinite(this.valueOf())
              ? this.getUTCFullYear() +
                  "-" +
                  f(this.getUTCMonth() + 1) +
                  "-" +
                  f(this.getUTCDate()) +
                  "T" +
                  f(this.getUTCHours()) +
                  ":" +
                  f(this.getUTCMinutes()) +
                  ":" +
                  f(this.getUTCSeconds()) +
                  "Z"
              : null;
          };
          String.prototype.bcToJSON = Number.prototype.bcToJSON = Boolean.prototype.bcToJSON = function (
            key
          ) {
            return this.valueOf();
          };
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          gap,
          indent,
          meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\",
          },
          rep;
        function quote(string) {
          escapable.lastIndex = 0;
          return escapable.test(string)
            ? '"' +
                string.replace(escapable, function (a) {
                  var c = meta[a];
                  return typeof c === "string"
                    ? c
                    : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                }) +
                '"'
            : '"' + string + '"';
        }
        function str(key, holder) {
          var i,
            k,
            v,
            length,
            mind = gap,
            partial,
            value = holder[key];
          if (
            value &&
            typeof value === "object" &&
            typeof value.bcToJSON === "function"
          ) {
            value = value.bcToJSON(key);
          }
          if (typeof rep === "function") {
            value = rep.call(holder, key, value);
          }
          switch (typeof value) {
            case "string":
              return quote(value);
            case "number":
              return isFinite(value) ? String(value) : "null";
            case "boolean":
            case "null":
              return String(value);
            case "object":
              if (!value) {
                return "null";
              }
              gap += indent;
              partial = [];
              if (Object.prototype.toString.apply(value) === "[object Array]") {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                  partial[i] = str(i, value) || "null";
                }
                v =
                  partial.length === 0
                    ? "[]"
                    : gap
                    ? "[\n" +
                      gap +
                      partial.join(",\n" + gap) +
                      "\n" +
                      mind +
                      "]"
                    : "[" + partial.join(",") + "]";
                gap = mind;
                return v;
              }
              if (rep && typeof rep === "object") {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                  if (typeof rep[i] === "string") {
                    k = rep[i];
                    v = str(k, value);
                    if (v) {
                      partial.push(quote(k) + (gap ? ": " : ":") + v);
                    }
                  }
                }
              } else {
                for (k in value) {
                  if (Object.prototype.hasOwnProperty.call(value, k)) {
                    v = str(k, value);
                    if (v) {
                      partial.push(quote(k) + (gap ? ": " : ":") + v);
                    }
                  }
                }
              }
              v =
                partial.length === 0
                  ? "{}"
                  : gap
                  ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}"
                  : "{" + partial.join(",") + "}";
              gap = mind;
              return v;
          }
        }
        if (typeof JSON.stringify !== "function") {
          JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
              for (i = 0; i < space; i += 1) {
                indent += " ";
              }
            } else {
              if (typeof space === "string") {
                indent = space;
              }
            }
            rep = replacer;
            if (
              replacer &&
              typeof replacer !== "function" &&
              (typeof replacer !== "object" ||
                typeof replacer.length !== "number")
            ) {
              throw new Error("JSON.stringify");
            }
            return str("", { "": value });
          };
        }
        if (typeof JSON.parse !== "function") {
          JSON.parse = function (text, reviver) {
            var j;
            function walk(holder, key) {
              var k,
                v,
                value = holder[key];
              if (value && typeof value === "object") {
                for (k in value) {
                  if (Object.prototype.hasOwnProperty.call(value, k)) {
                    v = walk(value, k);
                    if (v !== undefined) {
                      value[k] = v;
                    } else {
                      delete value[k];
                    }
                  }
                }
              }
              return reviver.call(holder, key, value);
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
              text = text.replace(cx, function (a) {
                return (
                  "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                );
              });
            }
            if (
              /^[\],:{}\s]*$/.test(
                text
                  .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                  .replace(
                    /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    "]"
                  )
                  .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
              )
            ) {
              j = eval("(" + text + ")");
              return typeof reviver === "function" ? walk({ "": j }, "") : j;
            }
            throw new SyntaxError("JSON.parse");
          };
        }
      })(JSON);
    } else {
      IS_VERBOSE && UTIL.logInfo("The browser has JSON support");
    }
    if (window.Sizzle) {
      window.bcTempSizzle = window.Sizzle;
      /*!
       * Sizzle CSS Selector Engine
       *  Copyright 2011, The Dojo Foundation
       *  Released under the MIT, BSD, and GPL Licenses.
       *  More information: http://sizzlejs.com/
       */
    }
    (function () {
      var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        expando = "sizcache" + (Math.random() + "").replace(".", ""),
        done = 0,
        toString = Object.prototype.toString,
        hasDuplicate = false,
        baseHasDuplicate = true,
        rBackslash = /\\/g,
        rNonWord = /\W/;
      [0, 0].sort(function () {
        baseHasDuplicate = false;
        return 0;
      });
      var Sizzle = function (selector, context, results, seed) {
        results = results || [];
        context = context || document;
        var origContext = context;
        if (context.nodeType !== 1 && context.nodeType !== 9) {
          return [];
        }
        if (!selector || typeof selector !== "string") {
          return results;
        }
        var m,
          set,
          checkSet,
          extra,
          ret,
          cur,
          pop,
          i,
          prune = true,
          contextXML = Sizzle.isXML(context),
          parts = [],
          soFar = selector;
        do {
          chunker.exec("");
          m = chunker.exec(soFar);
          if (m) {
            soFar = m[3];
            parts.push(m[1]);
            if (m[2]) {
              extra = m[3];
              break;
            }
          }
        } while (m);
        if (parts.length > 1 && origPOS.exec(selector)) {
          if (parts.length === 2 && Expr.relative[parts[0]]) {
            set = posProcess(parts[0] + parts[1], context, seed);
          } else {
            set = Expr.relative[parts[0]]
              ? [context]
              : Sizzle(parts.shift(), context);
            while (parts.length) {
              selector = parts.shift();
              if (Expr.relative[selector]) {
                selector += parts.shift();
              }
              set = posProcess(selector, set, seed);
            }
          }
        } else {
          if (
            !seed &&
            parts.length > 1 &&
            context.nodeType === 9 &&
            !contextXML &&
            Expr.match.ID.test(parts[0]) &&
            !Expr.match.ID.test(parts[parts.length - 1])
          ) {
            ret = Sizzle.find(parts.shift(), context, contextXML);
            context = ret.expr
              ? Sizzle.filter(ret.expr, ret.set)[0]
              : ret.set[0];
          }
          if (context) {
            ret = seed
              ? { expr: parts.pop(), set: makeArray(seed) }
              : Sizzle.find(
                  parts.pop(),
                  parts.length === 1 &&
                    (parts[0] === "~" || parts[0] === "+") &&
                    context.parentNode
                    ? context.parentNode
                    : context,
                  contextXML
                );
            set = ret.expr ? Sizzle.filter(ret.expr, ret.set) : ret.set;
            if (parts.length > 0) {
              checkSet = makeArray(set);
            } else {
              prune = false;
            }
            while (parts.length) {
              cur = parts.pop();
              pop = cur;
              if (!Expr.relative[cur]) {
                cur = "";
              } else {
                pop = parts.pop();
              }
              if (pop == null) {
                pop = context;
              }
              Expr.relative[cur](checkSet, pop, contextXML);
            }
          } else {
            checkSet = parts = [];
          }
        }
        if (!checkSet) {
          checkSet = set;
        }
        if (!checkSet) {
          Sizzle.error(cur || selector);
        }
        if (toString.call(checkSet) === "[object Array]") {
          if (!prune) {
            results.push.apply(results, checkSet);
          } else {
            if (context && context.nodeType === 1) {
              for (i = 0; checkSet[i] != null; i++) {
                if (
                  checkSet[i] &&
                  (checkSet[i] === true ||
                    (checkSet[i].nodeType === 1 &&
                      Sizzle.contains(context, checkSet[i])))
                ) {
                  results.push(set[i]);
                }
              }
            } else {
              for (i = 0; checkSet[i] != null; i++) {
                if (checkSet[i] && checkSet[i].nodeType === 1) {
                  results.push(set[i]);
                }
              }
            }
          }
        } else {
          makeArray(checkSet, results);
        }
        if (extra) {
          Sizzle(extra, origContext, results, seed);
          Sizzle.uniqueSort(results);
        }
        return results;
      };
      Sizzle.uniqueSort = function (results) {
        if (sortOrder) {
          hasDuplicate = baseHasDuplicate;
          results.sort(sortOrder);
          if (hasDuplicate) {
            for (var i = 1; i < results.length; i++) {
              if (results[i] === results[i - 1]) {
                results.splice(i--, 1);
              }
            }
          }
        }
        return results;
      };
      Sizzle.matches = function (expr, set) {
        return Sizzle(expr, null, null, set);
      };
      Sizzle.matchesSelector = function (node, expr) {
        return Sizzle(expr, null, null, [node]).length > 0;
      };
      Sizzle.find = function (expr, context, isXML) {
        var set, i, len, match, type, left;
        if (!expr) {
          return [];
        }
        for (i = 0, len = Expr.order.length; i < len; i++) {
          type = Expr.order[i];
          if ((match = Expr.leftMatch[type].exec(expr))) {
            left = match[1];
            match.splice(1, 1);
            if (left.substr(left.length - 1) !== "\\") {
              match[1] = (match[1] || "").replace(rBackslash, "");
              set = Expr.find[type](match, context, isXML);
              if (set != null) {
                expr = expr.replace(Expr.match[type], "");
                break;
              }
            }
          }
        }
        if (!set) {
          set =
            typeof context.getElementsByTagName !== "undefined"
              ? context.getElementsByTagName("*")
              : [];
        }
        return { set: set, expr: expr };
      };
      Sizzle.filter = function (expr, set, inplace, not) {
        var match,
          anyFound,
          type,
          found,
          item,
          filter,
          left,
          i,
          pass,
          old = expr,
          result = [],
          curLoop = set,
          isXMLFilter = set && set[0] && Sizzle.isXML(set[0]);
        while (expr && set.length) {
          for (type in Expr.filter) {
            if ((match = Expr.leftMatch[type].exec(expr)) != null && match[2]) {
              filter = Expr.filter[type];
              left = match[1];
              anyFound = false;
              match.splice(1, 1);
              if (left.substr(left.length - 1) === "\\") {
                continue;
              }
              if (curLoop === result) {
                result = [];
              }
              if (Expr.preFilter[type]) {
                match = Expr.preFilter[type](
                  match,
                  curLoop,
                  inplace,
                  result,
                  not,
                  isXMLFilter
                );
                if (!match) {
                  anyFound = found = true;
                } else {
                  if (match === true) {
                    continue;
                  }
                }
              }
              if (match) {
                for (i = 0; (item = curLoop[i]) != null; i++) {
                  if (item) {
                    found = filter(item, match, i, curLoop);
                    pass = not ^ found;
                    if (inplace && found != null) {
                      if (pass) {
                        anyFound = true;
                      } else {
                        curLoop[i] = false;
                      }
                    } else {
                      if (pass) {
                        result.push(item);
                        anyFound = true;
                      }
                    }
                  }
                }
              }
              if (found !== undefined) {
                if (!inplace) {
                  curLoop = result;
                }
                expr = expr.replace(Expr.match[type], "");
                if (!anyFound) {
                  return [];
                }
                break;
              }
            }
          }
          if (expr === old) {
            if (anyFound == null) {
              Sizzle.error(expr);
            } else {
              break;
            }
          }
          old = expr;
        }
        return curLoop;
      };
      Sizzle.error = function (msg) {
        throw new Error("Syntax error, unrecognized expression: " + msg);
      };
      var getText = (Sizzle.getText = function (elem) {
        var i,
          node,
          nodeType = elem.nodeType,
          ret = "";
        if (nodeType) {
          if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
            if (typeof elem.textContent === "string") {
              return elem.textContent;
            } else {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                ret += getText(elem);
              }
            }
          } else {
            if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
          }
        } else {
          for (i = 0; (node = elem[i]); i++) {
            if (node.nodeType !== 8) {
              ret += getText(node);
            }
          }
        }
        return ret;
      });
      var Expr = (Sizzle.selectors = {
        order: ["ID", "NAME", "TAG"],
        match: {
          ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
          CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
          NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
          ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
          TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
          CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
          POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
          PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
        },
        leftMatch: {},
        attrMap: { class: "className", for: "htmlFor" },
        attrHandle: {
          href: function (elem) {
            return elem.getAttribute("href");
          },
          type: function (elem) {
            return elem.getAttribute("type");
          },
        },
        relative: {
          "+": function (checkSet, part) {
            var isPartStr = typeof part === "string",
              isTag = isPartStr && !rNonWord.test(part),
              isPartStrNotTag = isPartStr && !isTag;
            if (isTag) {
              part = part.toLowerCase();
            }
            for (var i = 0, l = checkSet.length, elem; i < l; i++) {
              if ((elem = checkSet[i])) {
                while ((elem = elem.previousSibling) && elem.nodeType !== 1) {}
                checkSet[i] =
                  isPartStrNotTag ||
                  (elem && elem.nodeName.toLowerCase() === part)
                    ? elem || false
                    : elem === part;
              }
            }
            if (isPartStrNotTag) {
              Sizzle.filter(part, checkSet, true);
            }
          },
          ">": function (checkSet, part) {
            var elem,
              isPartStr = typeof part === "string",
              i = 0,
              l = checkSet.length;
            if (isPartStr && !rNonWord.test(part)) {
              part = part.toLowerCase();
              for (; i < l; i++) {
                elem = checkSet[i];
                if (elem) {
                  var parent = elem.parentNode;
                  checkSet[i] =
                    parent.nodeName.toLowerCase() === part ? parent : false;
                }
              }
            } else {
              for (; i < l; i++) {
                elem = checkSet[i];
                if (elem) {
                  checkSet[i] = isPartStr
                    ? elem.parentNode
                    : elem.parentNode === part;
                }
              }
              if (isPartStr) {
                Sizzle.filter(part, checkSet, true);
              }
            }
          },
          "": function (checkSet, part, isXML) {
            var nodeCheck,
              doneName = done++,
              checkFn = dirCheck;
            if (typeof part === "string" && !rNonWord.test(part)) {
              part = part.toLowerCase();
              nodeCheck = part;
              checkFn = dirNodeCheck;
            }
            checkFn("parentNode", part, doneName, checkSet, nodeCheck, isXML);
          },
          "~": function (checkSet, part, isXML) {
            var nodeCheck,
              doneName = done++,
              checkFn = dirCheck;
            if (typeof part === "string" && !rNonWord.test(part)) {
              part = part.toLowerCase();
              nodeCheck = part;
              checkFn = dirNodeCheck;
            }
            checkFn(
              "previousSibling",
              part,
              doneName,
              checkSet,
              nodeCheck,
              isXML
            );
          },
        },
        find: {
          ID: function (match, context, isXML) {
            if (typeof context.getElementById !== "undefined" && !isXML) {
              var m = context.getElementById(match[1]);
              return m && m.parentNode ? [m] : [];
            }
          },
          NAME: function (match, context) {
            if (typeof context.getElementsByName !== "undefined") {
              var ret = [],
                results = context.getElementsByName(match[1]);
              for (var i = 0, l = results.length; i < l; i++) {
                if (results[i].getAttribute("name") === match[1]) {
                  ret.push(results[i]);
                }
              }
              return ret.length === 0 ? null : ret;
            }
          },
          TAG: function (match, context) {
            if (typeof context.getElementsByTagName !== "undefined") {
              return context.getElementsByTagName(match[1]);
            }
          },
        },
        preFilter: {
          CLASS: function (match, curLoop, inplace, result, not, isXML) {
            match = " " + match[1].replace(rBackslash, "") + " ";
            if (isXML) {
              return match;
            }
            for (var i = 0, elem; (elem = curLoop[i]) != null; i++) {
              if (elem) {
                if (
                  not ^
                  (elem.className &&
                    (" " + elem.className + " ")
                      .replace(/[\t\n\r]/g, " ")
                      .indexOf(match) >= 0)
                ) {
                  if (!inplace) {
                    result.push(elem);
                  }
                } else {
                  if (inplace) {
                    curLoop[i] = false;
                  }
                }
              }
            }
            return false;
          },
          ID: function (match) {
            return match[1].replace(rBackslash, "");
          },
          TAG: function (match, curLoop) {
            return match[1].replace(rBackslash, "").toLowerCase();
          },
          CHILD: function (match) {
            if (match[1] === "nth") {
              if (!match[2]) {
                Sizzle.error(match[0]);
              }
              match[2] = match[2].replace(/^\+|\s*/g, "");
              var test = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
                (match[2] === "even" && "2n") ||
                  (match[2] === "odd" && "2n+1") ||
                  (!/\D/.test(match[2]) && "0n+" + match[2]) ||
                  match[2]
              );
              match[2] = test[1] + (test[2] || 1) - 0;
              match[3] = test[3] - 0;
            } else {
              if (match[2]) {
                Sizzle.error(match[0]);
              }
            }
            match[0] = done++;
            return match;
          },
          ATTR: function (match, curLoop, inplace, result, not, isXML) {
            var name = (match[1] = match[1].replace(rBackslash, ""));
            if (!isXML && Expr.attrMap[name]) {
              match[1] = Expr.attrMap[name];
            }
            match[4] = (match[4] || match[5] || "").replace(rBackslash, "");
            if (match[2] === "~=") {
              match[4] = " " + match[4] + " ";
            }
            return match;
          },
          PSEUDO: function (match, curLoop, inplace, result, not) {
            if (match[1] === "not") {
              if (
                (chunker.exec(match[3]) || "").length > 1 ||
                /^\w/.test(match[3])
              ) {
                match[3] = Sizzle(match[3], null, null, curLoop);
              } else {
                var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);
                if (!inplace) {
                  result.push.apply(result, ret);
                }
                return false;
              }
            } else {
              if (
                Expr.match.POS.test(match[0]) ||
                Expr.match.CHILD.test(match[0])
              ) {
                return true;
              }
            }
            return match;
          },
          POS: function (match) {
            match.unshift(true);
            return match;
          },
        },
        filters: {
          enabled: function (elem) {
            return elem.disabled === false && elem.type !== "hidden";
          },
          disabled: function (elem) {
            return elem.disabled === true;
          },
          checked: function (elem) {
            return elem.checked === true;
          },
          selected: function (elem) {
            if (elem.parentNode) {
              elem.parentNode.selectedIndex;
            }
            return elem.selected === true;
          },
          parent: function (elem) {
            return !!elem.firstChild;
          },
          empty: function (elem) {
            return !elem.firstChild;
          },
          has: function (elem, i, match) {
            return !!Sizzle(match[3], elem).length;
          },
          header: function (elem) {
            return /h\d/i.test(elem.nodeName);
          },
          text: function (elem) {
            var attr = elem.getAttribute("type"),
              type = elem.type;
            return (
              elem.nodeName.toLowerCase() === "input" &&
              "text" === type &&
              (attr === type || attr === null)
            );
          },
          radio: function (elem) {
            return (
              elem.nodeName.toLowerCase() === "input" && "radio" === elem.type
            );
          },
          checkbox: function (elem) {
            return (
              elem.nodeName.toLowerCase() === "input" &&
              "checkbox" === elem.type
            );
          },
          file: function (elem) {
            return (
              elem.nodeName.toLowerCase() === "input" && "file" === elem.type
            );
          },
          password: function (elem) {
            return (
              elem.nodeName.toLowerCase() === "input" &&
              "password" === elem.type
            );
          },
          submit: function (elem) {
            var name = elem.nodeName.toLowerCase();
            return (
              (name === "input" || name === "button") && "submit" === elem.type
            );
          },
          image: function (elem) {
            return (
              elem.nodeName.toLowerCase() === "input" && "image" === elem.type
            );
          },
          reset: function (elem) {
            var name = elem.nodeName.toLowerCase();
            return (
              (name === "input" || name === "button") && "reset" === elem.type
            );
          },
          button: function (elem) {
            var name = elem.nodeName.toLowerCase();
            return (
              (name === "input" && "button" === elem.type) || name === "button"
            );
          },
          input: function (elem) {
            return /input|select|textarea|button/i.test(elem.nodeName);
          },
          focus: function (elem) {
            return elem === elem.ownerDocument.activeElement;
          },
        },
        setFilters: {
          first: function (elem, i) {
            return i === 0;
          },
          last: function (elem, i, match, array) {
            return i === array.length - 1;
          },
          even: function (elem, i) {
            return i % 2 === 0;
          },
          odd: function (elem, i) {
            return i % 2 === 1;
          },
          lt: function (elem, i, match) {
            return i < match[3] - 0;
          },
          gt: function (elem, i, match) {
            return i > match[3] - 0;
          },
          nth: function (elem, i, match) {
            return match[3] - 0 === i;
          },
          eq: function (elem, i, match) {
            return match[3] - 0 === i;
          },
        },
        filter: {
          PSEUDO: function (elem, match, i, array) {
            var name = match[1],
              filter = Expr.filters[name];
            if (filter) {
              return filter(elem, i, match, array);
            } else {
              if (name === "contains") {
                return (
                  (
                    elem.textContent ||
                    elem.innerText ||
                    getText([elem]) ||
                    ""
                  ).indexOf(match[3]) >= 0
                );
              } else {
                if (name === "not") {
                  var not = match[3];
                  for (var j = 0, l = not.length; j < l; j++) {
                    if (not[j] === elem) {
                      return false;
                    }
                  }
                  return true;
                } else {
                  Sizzle.error(name);
                }
              }
            }
          },
          CHILD: function (elem, match) {
            var first,
              last,
              doneName,
              parent,
              cache,
              count,
              diff,
              type = match[1],
              node = elem;
            switch (type) {
              case "only":
              case "first":
                while ((node = node.previousSibling)) {
                  if (node.nodeType === 1) {
                    return false;
                  }
                }
                if (type === "first") {
                  return true;
                }
                node = elem;
              case "last":
                while ((node = node.nextSibling)) {
                  if (node.nodeType === 1) {
                    return false;
                  }
                }
                return true;
              case "nth":
                first = match[2];
                last = match[3];
                if (first === 1 && last === 0) {
                  return true;
                }
                doneName = match[0];
                parent = elem.parentNode;
                if (
                  parent &&
                  (parent[expando] !== doneName || !elem.nodeIndex)
                ) {
                  count = 0;
                  for (
                    node = parent.firstChild;
                    node;
                    node = node.nextSibling
                  ) {
                    if (node.nodeType === 1) {
                      node.nodeIndex = ++count;
                    }
                  }
                  parent[expando] = doneName;
                }
                diff = elem.nodeIndex - last;
                if (first === 0) {
                  return diff === 0;
                } else {
                  return diff % first === 0 && diff / first >= 0;
                }
            }
          },
          ID: function (elem, match) {
            return elem.nodeType === 1 && elem.getAttribute("id") === match;
          },
          TAG: function (elem, match) {
            return (
              (match === "*" && elem.nodeType === 1) ||
              (!!elem.nodeName && elem.nodeName.toLowerCase() === match)
            );
          },
          CLASS: function (elem, match) {
            return (
              (
                " " +
                (elem.className || elem.getAttribute("class")) +
                " "
              ).indexOf(match) > -1
            );
          },
          ATTR: function (elem, match) {
            var name = match[1],
              result = Sizzle.attr
                ? Sizzle.attr(elem, name)
                : Expr.attrHandle[name]
                ? Expr.attrHandle[name](elem)
                : elem[name] != null
                ? elem[name]
                : elem.getAttribute(name),
              value = result + "",
              type = match[2],
              check = match[4];
            return result == null
              ? type === "!="
              : !type && Sizzle.attr
              ? result != null
              : type === "="
              ? value === check
              : type === "*="
              ? value.indexOf(check) >= 0
              : type === "~="
              ? (" " + value + " ").indexOf(check) >= 0
              : !check
              ? value && result !== false
              : type === "!="
              ? value !== check
              : type === "^="
              ? value.indexOf(check) === 0
              : type === "$="
              ? value.substr(value.length - check.length) === check
              : type === "|="
              ? value === check ||
                value.substr(0, check.length + 1) === check + "-"
              : false;
          },
          POS: function (elem, match, i, array) {
            var name = match[2],
              filter = Expr.setFilters[name];
            if (filter) {
              return filter(elem, i, match, array);
            }
          },
        },
      });
      var origPOS = Expr.match.POS,
        fescape = function (all, num) {
          return "\\" + (num - 0 + 1);
        };
      for (var type in Expr.match) {
        Expr.match[type] = new RegExp(
          Expr.match[type].source + /(?![^\[]*\])(?![^\(]*\))/.source
        );
        Expr.leftMatch[type] = new RegExp(
          /(^(?:.|\r|\n)*?)/.source +
            Expr.match[type].source.replace(/\\(\d+)/g, fescape)
        );
      }
      Expr.match.globalPOS = origPOS;
      var makeArray = function (array, results) {
        array = Array.prototype.slice.call(array, 0);
        if (results) {
          results.push.apply(results, array);
          return results;
        }
        return array;
      };
      try {
        Array.prototype.slice.call(document.documentElement.childNodes, 0)[0]
          .nodeType;
      } catch (e) {
        makeArray = function (array, results) {
          var i = 0,
            ret = results || [];
          if (toString.call(array) === "[object Array]") {
            Array.prototype.push.apply(ret, array);
          } else {
            if (typeof array.length === "number") {
              for (var l = array.length; i < l; i++) {
                ret.push(array[i]);
              }
            } else {
              for (; array[i]; i++) {
                ret.push(array[i]);
              }
            }
          }
          return ret;
        };
      }
      var sortOrder, siblingCheck;
      if (document.documentElement.compareDocumentPosition) {
        sortOrder = function (a, b) {
          if (a === b) {
            hasDuplicate = true;
            return 0;
          }
          if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
            return a.compareDocumentPosition ? -1 : 1;
          }
          return a.compareDocumentPosition(b) & 4 ? -1 : 1;
        };
      } else {
        sortOrder = function (a, b) {
          if (a === b) {
            hasDuplicate = true;
            return 0;
          } else {
            if (a.sourceIndex && b.sourceIndex) {
              return a.sourceIndex - b.sourceIndex;
            }
          }
          var al,
            bl,
            ap = [],
            bp = [],
            aup = a.parentNode,
            bup = b.parentNode,
            cur = aup;
          if (aup === bup) {
            return siblingCheck(a, b);
          } else {
            if (!aup) {
              return -1;
            } else {
              if (!bup) {
                return 1;
              }
            }
          }
          while (cur) {
            ap.unshift(cur);
            cur = cur.parentNode;
          }
          cur = bup;
          while (cur) {
            bp.unshift(cur);
            cur = cur.parentNode;
          }
          al = ap.length;
          bl = bp.length;
          for (var i = 0; i < al && i < bl; i++) {
            if (ap[i] !== bp[i]) {
              return siblingCheck(ap[i], bp[i]);
            }
          }
          return i === al
            ? siblingCheck(a, bp[i], -1)
            : siblingCheck(ap[i], b, 1);
        };
        siblingCheck = function (a, b, ret) {
          if (a === b) {
            return ret;
          }
          var cur = a.nextSibling;
          while (cur) {
            if (cur === b) {
              return -1;
            }
            cur = cur.nextSibling;
          }
          return 1;
        };
      }
      (function () {
        var form = document.createElement("div"),
          id = "script" + new Date().getTime(),
          root = document.documentElement;
        form.innerHTML = "<a name='" + id + "'/>";
        root.insertBefore(form, root.firstChild);
        if (document.getElementById(id)) {
          Expr.find.ID = function (match, context, isXML) {
            if (typeof context.getElementById !== "undefined" && !isXML) {
              var m = context.getElementById(match[1]);
              return m
                ? m.id === match[1] ||
                  (typeof m.getAttributeNode !== "undefined" &&
                    m.getAttributeNode("id").nodeValue === match[1])
                  ? [m]
                  : undefined
                : [];
            }
          };
          Expr.filter.ID = function (elem, match) {
            var node =
              typeof elem.getAttributeNode !== "undefined" &&
              elem.getAttributeNode("id");
            return elem.nodeType === 1 && node && node.nodeValue === match;
          };
        }
        root.removeChild(form);
        root = form = null;
      })();
      (function () {
        var div = document.createElement("div");
        div.appendChild(document.createComment(""));
        if (div.getElementsByTagName("*").length > 0) {
          Expr.find.TAG = function (match, context) {
            var results = context.getElementsByTagName(match[1]);
            if (match[1] === "*") {
              var tmp = [];
              for (var i = 0; results[i]; i++) {
                if (results[i].nodeType === 1) {
                  tmp.push(results[i]);
                }
              }
              results = tmp;
            }
            return results;
          };
        }
        div.innerHTML = "<a href='#'></a>";
        if (
          div.firstChild &&
          typeof div.firstChild.getAttribute !== "undefined" &&
          div.firstChild.getAttribute("href") !== "#"
        ) {
          Expr.attrHandle.href = function (elem) {
            return elem.getAttribute("href", 2);
          };
        }
        div = null;
      })();
      if (document.querySelectorAll) {
        (function () {
          var oldSizzle = Sizzle,
            div = document.createElement("div"),
            id = "__sizzle__";
          div.innerHTML = "<p class='TEST'></p>";
          if (
            div.querySelectorAll &&
            div.querySelectorAll(".TEST").length === 0
          ) {
            return;
          }
          Sizzle = function (query, context, extra, seed) {
            context = context || document;
            if (!seed && !Sizzle.isXML(context)) {
              var match = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(query);
              if (match && (context.nodeType === 1 || context.nodeType === 9)) {
                if (match[1]) {
                  return makeArray(context.getElementsByTagName(query), extra);
                } else {
                  if (
                    match[2] &&
                    Expr.find.CLASS &&
                    context.getElementsByClassName
                  ) {
                    return makeArray(
                      context.getElementsByClassName(match[2]),
                      extra
                    );
                  }
                }
              }
              if (context.nodeType === 9) {
                if (query === "body" && context.body) {
                  return makeArray([context.body], extra);
                } else {
                  if (match && match[3]) {
                    var elem = context.getElementById(match[3]);
                    if (elem && elem.parentNode) {
                      if (elem.id === match[3]) {
                        return makeArray([elem], extra);
                      }
                    } else {
                      return makeArray([], extra);
                    }
                  }
                }
                try {
                  return makeArray(context.querySelectorAll(query), extra);
                } catch (qsaError) {}
              } else {
                if (
                  context.nodeType === 1 &&
                  context.nodeName.toLowerCase() !== "object"
                ) {
                  var oldContext = context,
                    old = context.getAttribute("id"),
                    nid = old || id,
                    hasParent = context.parentNode,
                    relativeHierarchySelector = /^\s*[+~]/.test(query);
                  if (!old) {
                    context.setAttribute("id", nid);
                  } else {
                    nid = nid.replace(/'/g, "\\$&");
                  }
                  if (relativeHierarchySelector && hasParent) {
                    context = context.parentNode;
                  }
                  try {
                    if (!relativeHierarchySelector || hasParent) {
                      return makeArray(
                        context.querySelectorAll("[id='" + nid + "'] " + query),
                        extra
                      );
                    }
                  } catch (pseudoError) {
                  } finally {
                    if (!old) {
                      oldContext.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return oldSizzle(query, context, extra, seed);
          };
          for (var prop in oldSizzle) {
            Sizzle[prop] = oldSizzle[prop];
          }
          div = null;
        })();
      }
      (function () {
        var html = document.documentElement,
          matches =
            html.matchesSelector ||
            html.mozMatchesSelector ||
            html.webkitMatchesSelector ||
            html.msMatchesSelector;
        if (matches) {
          var disconnectedMatch = !matches.call(
              document.createElement("div"),
              "div"
            ),
            pseudoWorks = false;
          try {
            matches.call(document.documentElement, "[test!='']:sizzle");
          } catch (pseudoError) {
            pseudoWorks = true;
          }
          Sizzle.matchesSelector = function (node, expr) {
            expr = expr.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
            if (!Sizzle.isXML(node)) {
              try {
                if (
                  pseudoWorks ||
                  (!Expr.match.PSEUDO.test(expr) && !/!=/.test(expr))
                ) {
                  var ret = matches.call(node, expr);
                  if (
                    ret ||
                    !disconnectedMatch ||
                    (node.document && node.document.nodeType !== 11)
                  ) {
                    return ret;
                  }
                }
              } catch (e) {}
            }
            return Sizzle(expr, null, null, [node]).length > 0;
          };
        }
      })();
      (function () {
        var div = document.createElement("div");
        div.innerHTML = "<div class='test e'></div><div class='test'></div>";
        if (
          !div.getElementsByClassName ||
          div.getElementsByClassName("e").length === 0
        ) {
          return;
        }
        div.lastChild.className = "e";
        if (div.getElementsByClassName("e").length === 1) {
          return;
        }
        Expr.order.splice(1, 0, "CLASS");
        Expr.find.CLASS = function (match, context, isXML) {
          if (typeof context.getElementsByClassName !== "undefined" && !isXML) {
            return context.getElementsByClassName(match[1]);
          }
        };
        div = null;
      })();
      function dirNodeCheck(dir, cur, doneName, checkSet, nodeCheck, isXML) {
        for (var i = 0, l = checkSet.length; i < l; i++) {
          var elem = checkSet[i];
          if (elem) {
            var match = false;
            elem = elem[dir];
            while (elem) {
              if (elem[expando] === doneName) {
                match = checkSet[elem.sizset];
                break;
              }
              if (elem.nodeType === 1 && !isXML) {
                elem[expando] = doneName;
                elem.sizset = i;
              }
              if (elem.nodeName.toLowerCase() === cur) {
                match = elem;
                break;
              }
              elem = elem[dir];
            }
            checkSet[i] = match;
          }
        }
      }
      function dirCheck(dir, cur, doneName, checkSet, nodeCheck, isXML) {
        for (var i = 0, l = checkSet.length; i < l; i++) {
          var elem = checkSet[i];
          if (elem) {
            var match = false;
            elem = elem[dir];
            while (elem) {
              if (elem[expando] === doneName) {
                match = checkSet[elem.sizset];
                break;
              }
              if (elem.nodeType === 1) {
                if (!isXML) {
                  elem[expando] = doneName;
                  elem.sizset = i;
                }
                if (typeof cur !== "string") {
                  if (elem === cur) {
                    match = true;
                    break;
                  }
                } else {
                  if (Sizzle.filter(cur, [elem]).length > 0) {
                    match = elem;
                    break;
                  }
                }
              }
              elem = elem[dir];
            }
            checkSet[i] = match;
          }
        }
      }
      if (document.documentElement.contains) {
        Sizzle.contains = function (a, b) {
          return a !== b && (a.contains ? a.contains(b) : true);
        };
      } else {
        if (document.documentElement.compareDocumentPosition) {
          Sizzle.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16);
          };
        } else {
          Sizzle.contains = function () {
            return false;
          };
        }
      }
      Sizzle.isXML = function (elem) {
        var documentElement = (elem ? elem.ownerDocument || elem : 0)
          .documentElement;
        return documentElement ? documentElement.nodeName !== "HTML" : false;
      };
      var posProcess = function (selector, context, seed) {
        var match,
          tmpSet = [],
          later = "",
          root = context.nodeType ? [context] : context;
        while ((match = Expr.match.PSEUDO.exec(selector))) {
          later += match[0];
          selector = selector.replace(Expr.match.PSEUDO, "");
        }
        selector = Expr.relative[selector] ? selector + "*" : selector;
        for (var i = 0, l = root.length; i < l; i++) {
          Sizzle(selector, root[i], tmpSet, seed);
        }
        return Sizzle.filter(later, tmpSet);
      };
      window.Sizzle = Sizzle;
    })();
    var Sizzle = window.Sizzle;
    try {
      if (window.bcTempSizzle) {
        window.Sizzle = window.bcTempSizzle;
        delete window.bcTempSizzle;
      } else {
        delete window.Sizzle;
      }
    } catch (err) {}
    var blueConicAPI = (window.blueConicClient = new BlueConic());
    blueConicAPI.fn.setRequestInfo({});
    (function () {
      var handleMain = function () {
        INTERNAL.checkPreListeners();
        var interactionsLoaded = false,
          interactionTypesLoaded = false;
        IS_VERBOSE && UTIL.logInfo("start pageview event");
        blueConicAPI.createEvent("PAGEVIEW", null, this, function (
          interactions
        ) {
          if (!interactions || interactions.length == 0) {
            IS_VERBOSE &&
              UTIL.logInfo(
                "the pageview event did not return any interacion, check if the channel is configured"
              );
            var styleElement = document.getElementById(myPreHideCSSId);
            if (styleElement) {
              styleElement.parentNode.removeChild(styleElement);
              IS_VERBOSE && UTIL.logInfo("removed css for phase 1");
            }
          }
          IS_VERBOSE &&
            UTIL.logInfo(
              "[+] finished pageview event [" +
                interactions.length +
                " interactions to run]"
            );
          myInteractions = interactions;
          interactionsLoaded = true;
          IS_VERBOSE &&
            UTIL.logInfo(
              "start hide positions mechanism for positions claimed by the configured interactions"
            );
          var arrSelectors = [];
          for (var i = 0, l = myInteractions.length; i < l; i++) {
            var position = myInteractions[i].getPosition();
            if (position) {
              push.call(arrSelectors, position);
            }
          }
          UTIL.addCSSToDOM(arrSelectors, myPostHideCSSId, 2000);
          window.setTimeout(function () {
            var styleElement = document.getElementById(myPreHideCSSId);
            if (styleElement) {
              styleElement.parentNode.removeChild(styleElement);
            }
          }, 1);
          interactionTypesLoaded = false;
          IS_VERBOSE &&
            UTIL.logInfo(
              "start plugin download from url [" +
                PLUGIN_URL +
                "] with version [" +
                myPluginVersion +
                "]"
            );
          var pluginUrlWithVersion = myPluginVersion
            ? BC_SERVER + PLUGIN_URL + "/" + myPluginVersion
            : BC_SERVER + PLUGIN_URL;
          if (BC_MGT) {
            pluginUrlWithVersion += "_e";
          }
          UTIL.loadScript(pluginUrlWithVersion, this, function () {
            IS_VERBOSE && UTIL.logInfo("finished plugin download");
            interactionTypesLoaded = true;
            handlePageView();
          });
        });
        function handlePageView() {
          if (!interactionTypesLoaded || !interactionsLoaded) {
            return;
          }
          if (!myProfile) {
            UTIL.log("Profile is not initialized");
          }
          handleInteractions(myInteractions, true);
        }
      };
      var profileId = UTIL.getCookie(COOKIE_BCSESSION);
      if (!profileId) {
        profileId = null;
      }
      myProfile = new Profile(profileId);
      if (BC_MGT) {
        var protocolToUse =
          "https:" === document.location.protocol ? "https:" : "http:";
        var url =
          bcHostname.indexOf("localhost") != -1
            ? BC_URL + "/frontend/e"
            : protocolToUse + "//" + bcHostname + "/frontend/e";
        RPC.JSONP.get(url, null, function (responseData) {
          if (!responseData) {
            PROTOCOL = protocolToUse + "//";
            BC_MGT = false;
            BC_SERVER = getBCServer();
          }
          if (
            BC_MGT &&
            window.name &&
            window.name.indexOf("bc_simulator") > -1
          ) {
            UTIL.loadScript(BC_SERVER + "/simulatordevice", null, function () {
              handleMain();
            });
          } else {
            handleMain();
          }
        });
      } else {
        handleMain();
      }
    })();
  })(
    window,
    this.bcVerbose,
    this.bcChannelIdentifier,
    window.blueconicProxy ? window.blueconicProxyHost : this.bcHostname,
    typeof domainGroups === "undefined" ? {} : domainGroups,
    typeof positions === "undefined" ? {} : positions,
    window.blueConicPreListeners
  );
  function Template(e, c, b, a, d) {
    this._id = e;
    this._html = c;
    this._css = b;
    this._javascript = a;
    this._precompiledTemplate = d;
    this.getId = function () {
      return this._id;
    };
    this.getHtml = function () {
      return this._html;
    };
    this.getCss = function () {
      return this._css;
    };
    this.getJavaScript = function () {
      return this._javascript;
    };
    this.getPrecompiled = function () {
      return this._precompiledTemplate;
    };
  }
})();
/*
page: http://www.theworldlink.com/
url: http://cdn.blueconic.net/lee.js
*/
