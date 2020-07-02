// ExceptionHub.com Error Tracking
// Copyright 2010 Agile Productions LLC, All Rights Reserved.

var ExceptionHub = {
  SERVER_URL: "www.exceptionhub.com",
  VERSION: "1.1.5",
  setup: function (d, b, e, a) {
    this.api_key = d;
    this.project_id = b;
    this.mode = e || "production";
    this.initial_wrap_ran = false;
    this.options = a || {};
    if (typeof this.options.server_url !== "undefined") {
      this.SERVER_URL = this.options.server_url;
    }
    if (this.utils.excludeBrowser()) {
      return;
    }
    if (window.opera) {
      return;
    }
    if (document.addEventListener) {
      if (navigator && navigator.userAgent.match(/Firefox/)) {
        this.firefox = true;
      }
      var c = this;
      document.addEventListener(
        "DOMContentLoaded",
        function () {
          document.removeEventListener(
            "DOMContentLoaded",
            arguments.callee,
            false
          );
          c.initialFunctionWrap();
        },
        false
      );
      if (this.firefox || window.chrome || window.opera) {
        document.addEventListener = this.wrapInterface(
          document.addEventListener,
          "document_addEventListener"
        );
        document.removeEventListener = this.wrapInterface(
          document.removeEventListener,
          "document_removeEventListener"
        );
      }
      window.addEventListener = this.wrapInterface(
        window.addEventListener,
        "window_addEventListener"
      );
      window.removeEventListener = this.wrapInterface(
        window.removeEventListener,
        "window_removeEventListener"
      );
      setTimeout = this.wrapInterface(setTimeout, "setTimeout");
      setInterval = this.wrapInterface(setInterval, "setInterval");
      if (!this.firefox) {
        this.wrapXMLHttpRequest();
      }
    } else {
      window.onerror = function () {
        /* Wrapper function MAGIC_KEY42939485 */ ExceptionHub.logStackTrace
          .apply(this, arguments)
          .upload();
        return false;
      };
    }
  },
  initialFunctionWrap: function () {
    if (this.initial_wrap_ran === false) {
      this.initial_wrap_ran = true;
      var b = [];
      if (this.firefox) {
        b = [
          "Console",
          "JSpec",
          "printStackTrace",
          "ExceptionHub",
          "EHConsole",
          "getInterface",
          "_FirebugCommandLine",
          "_firebug",
          "_getFirebugConsoleElement",
          "loadFirebugConsole",
          "console",
          "window",
          "_FirebugConsole",
          "document",
          "navigator",
          "netscape",
          "XPCSafeJSObjectWrapper",
          "XPCNativeWrapper",
          "Components",
          "sessionStorage",
          "globalStorage",
          "getComputedStyle",
          "dispatchEvent",
          "removeEventListener",
          "name",
          "parent",
          "top",
          "dump",
          "getSelection",
          "scrollByLines",
          "scrollbars",
          "scrollX",
          "scrollY",
          "scrollTo",
          "scrollBy",
          "scrollByPages",
          "sizeToContent",
          "setTimeout",
          "setInterval",
          "clearTimeout",
          "clearInterval",
          "setResizable",
          "captureEvents",
          "releaseEvents",
          "routeEvent",
          "enableExternalCapture",
          "disableExternalCapture",
          "open",
          "openDialog",
          "frames",
          "applicationCache",
          "self",
          "screen",
          "history",
          "content",
          "menubar",
          "toolbar",
          "locationbar",
          "personalbar",
          "statusbar",
          "directories",
          "closed",
          "crypto",
          "pkcs11",
          "controllers",
          "opener",
          "status",
          "defaultStatus",
          "location",
          "innerWidth",
          "innerHeight",
          "outerWidth",
          "outerHeight",
          "screenX",
          "screenY",
          "mozInnerScreenX",
          "mozInnerScreenY",
          "pageXOffset",
          "pageYOffset",
          "scrollMaxX",
          "scrollMaxY",
          "length",
          "fullScreen",
          "alert",
          "confirm",
          "prompt",
          "focus",
          "blur",
          "back",
          "forward",
          "home",
          "stop",
          "print",
          "moveTo",
          "moveBy",
          "resizeTo",
          "resizeBy",
          "scroll",
          "close",
          "updateCommands",
          "find",
          "atob",
          "btoa",
          "frameElement",
          "showModalDialog",
          "postMessage",
          "addEventListener",
          "localStorage",
          "nsXPCComponents",
          "Cufon",
        ];
      } else {
        if (window.opera) {
          b = [
            "open",
            "print",
            "stop",
            "getComputedStyle",
            "getSelection",
            "releaseEvents",
            "captureEvents",
            "dispatchEvent",
            "alert",
            "confirm",
            "prompt",
            "setTimeout",
            "setInterval",
            "addEventStream",
            "removeEventStream",
            "clearInterval",
            "clearTimeout",
            "back",
            "forward",
            "attachEvent",
            "detachEvent",
            "addEventListener",
            "removeEventListener",
            "navigate",
            "DOMParser",
            "XMLHttpRequest",
            "XMLSerializer",
            "XPathEvaluator",
            "XSLTProcessor",
            "opera",
            "Image",
            "Option",
            "frames",
            "Audio",
            "SVGUnitTypes",
            "SVGZoomAndPan",
            "java",
            "netscape",
            "sun",
            "Packages",
            "ImageData",
            "ByteArray",
            "printStackTrace",
            "ExceptionHub",
            "EHConsole",
            "props",
            "prop",
            "console",
            "closed",
            "defaultStatus",
            "document",
            "event",
            "frameElement",
            "history",
            "innerHeight",
            "innerWidth",
            "location",
            "name",
            "navigator",
            "opener",
            "outerHeight",
            "outerWidth",
            "pageXOffset",
            "pageYOffset",
            "parent",
            "screen",
            "screenLeft",
            "screenTop",
            "screenX",
            "screenY",
            "self",
            "status",
            "top",
            "window",
            "length",
            "Cufon",
          ];
        } else {
          if (window.chrome) {
            b = [
              "JSpec",
              "captures",
              "top",
              "window",
              "location",
              "chromium",
              "chrome",
              "external",
              "document",
              "ExceptionHub",
              "EHConsole",
              "SVGPathSegLinetoVerticalRel",
              "SVGFESpotLightElement",
              "SVGAnimatedNumber",
              "SVGPoint",
              "SVGScriptElement",
              "SVGFEPointLightElement",
              "SVGPathSegList",
              "SVGImageElement",
              "SharedWorker",
              "SVGAElement",
              "SVGAnimatedRect",
              "SVGGElement",
              "SVGLinearGradientElement",
              "SVGForeignObjectElement",
              "SVGAnimateElement",
              "SVGFontElement",
              "SVGFontFaceElement",
              "SVGPathSegCurvetoQuadraticSmoothRel",
              "SVGStopElement",
              "SVGViewElement",
              "SVGPathSegMovetoRel",
              "SVGFEImageElement",
              "SVGPathSegMovetoAbs",
              "SVGAnimatedTransformList",
              "SVGPathSegCurvetoQuadraticAbs",
              "SVGFilterElement",
              "SVGFETileElement",
              "SVGFEComponentTransferElement",
              "SVGAnimatedPreserveAspectRatio",
              "SVGRectElement",
              "SVGLineElement",
              "SVGDocument",
              "MessagePort",
              "SVGDescElement",
              "SVGPathSegLinetoRel",
              "SVGEllipseElement",
              "SVGFEFuncRElement",
              "HTMLAllCollection",
              "SVGAnimatedNumberList",
              "SVGElementInstance",
              "SVGPathSegLinetoHorizontalRel",
              "SVGPathSegLinetoHorizontalAbs",
              "SVGComponentTransferFunctionElement",
              "SVGStyleElement",
              "SVGNumberList",
              "Blob",
              "SVGFEFloodElement",
              "SVGFEBlendElement",
              "SVGFEGaussianBlurElement",
              "SVGTextElement",
              "SVGFEOffsetElement",
              "RGBColor",
              "SVGGlyphElement",
              "SVGZoomEvent",
              "SVGElementInstanceList",
              "SVGFEDisplacementMapElement",
              "SVGPathSegCurvetoCubicSmoothRel",
              "SVGFEDistantLightElement",
              "ImageData",
              "SVGFEFuncBElement",
              "SVGCircleElement",
              "SVGSetElement",
              "SVGFEMergeElement",
              "SVGFESpecularLightingElement",
              "SVGNumber",
              "SVGFontFaceSrcElement",
              "SVGElement",
              "SVGMissingGlyphElement",
              "SVGPathSegLinetoVerticalAbs",
              "SVGTextPositioningElement",
              "SVGFEFuncGElement",
              "SVGPathSegCurvetoQuadraticRel",
              "SVGPathSegCurvetoQuadraticSmoothAbs",
              "SVGRect",
              "SVGFontFaceFormatElement",
              "SVGAnimateTransformElement",
              "SVGPathSegCurvetoCubicSmoothAbs",
              "SVGPathSegClosePath",
              "SVGPathSegArcRel",
              "SVGAnimatedString",
              "SVGTransformList",
              "SVGFEMorphologyElement",
              "SVGAnimatedLength",
              "SVGPolygonElement",
              "SVGPathSegLinetoAbs",
              "SVGMaskElement",
              "SVGPathElement",
              "SVGStringList",
              "MessageChannel",
              "BeforeLoadEvent",
              "PageTransitionEvent",
              "SVGAnimatedLengthList",
              "SVGRadialGradientElement",
              "SVGCursorElement",
              "SVGPathSegCurvetoCubicAbs",
              "SVGUseElement",
              "SVGSwitchElement",
              "SVGLengthList",
              "SVGPathSegArcAbs",
              "SVGAnimatedBoolean",
              "SVGFontFaceUriElement",
              "SVGPointList",
              "SVGPathSegCurvetoCubicRel",
              "SVGMetadataElement",
              "SVGTitleElement",
              "SVGAnimatedAngle",
              "SVGAnimateColorElement",
              "SVGMatrix",
              "SVGSymbolElement",
              "SVGFEDiffuseLightingElement",
              "SVGFETurbulenceElement",
              "SVGAnimatedEnumeration",
              "SVGFEMergeNodeElement",
              "SVGAnimatedInteger",
              "SVGDefsElement",
              "SVGSVGElement",
              "SVGAltGlyphElement",
              "SVGClipPathElement",
              "SVGPolylineElement",
              "SVGPatternElement",
              "SVGFECompositeElement",
              "SVGFEColorMatrixElement",
              "SVGTRefElement",
              "SVGFEFuncAElement",
              "WebSocket",
              "SVGTSpanElement",
              "SVGFontFaceNameElement",
              "HTMLButtonElement",
              "webkitNotifications",
              "pageYOffset",
              "EntityReference",
              "NodeList",
              "screenY",
              "navigator",
              "MimeTypeArray",
              "offscreenBuffering",
              "sessionStorage",
              "OverflowEvent",
              "HTMLTableColElement",
              "HTMLOptionElement",
              "HTMLInputElement",
              "defaultStatus",
              "SVGMarkerElement",
              "HTMLLinkElement",
              "WebKitCSSTransformValue",
              "MutationEvent",
              "Clipboard",
              "HTMLTableElement",
              "toolbar",
              "innerHeight",
              "applicationCache",
              "pageXOffset",
              "Element",
              "opener",
              "CSSStyleSheet",
              "StyleSheetList",
              "HTMLHRElement",
              "WebKitPoint",
              "media",
              "screenLeft",
              "SVGGradientElement",
              "HTMLDivElement",
              "HTMLQuoteElement",
              "KeyboardEvent",
              "screenX",
              "RangeException",
              "SVGTextPathElement",
              "HTMLLegendElement",
              "MouseEvent",
              "MediaError",
              "HTMLObjectElement",
              "HTMLFontElement",
              "WebKitTransitionEvent",
              "MediaList",
              "SVGPaint",
              "Document",
              "XPathException",
              "innerWidth",
              "TextMetrics",
              "personalbar",
              "HTMLHeadElement",
              "ProgressEvent",
              "Node",
              "CSSPageRule",
              "CharacterData",
              "length",
              "ClientRect",
              "Option",
              "Notation",
              "StorageEvent",
              "HTMLFieldSetElement",
              "HTMLVideoElement",
              "locationbar",
              "SVGRenderingIntent",
              "UIEvent",
              "HTMLTableRowElement",
              "HTMLDListElement",
              "File",
              "CSSValue",
              "HTMLParamElement",
              "HTMLModElement",
              "scrollY",
              "outerHeight",
              "CSSFontFaceRule",
              "SVGPathSeg",
              "Rect",
              "CSSStyleDeclaration",
              "StyleSheet",
              "SVGColor",
              "clientInformation",
              "HTMLStyleElement",
              "HTMLBaseElement",
              "HTMLBRElement",
              "HTMLHtmlElement",
              "HTMLTextAreaElement",
              "HTMLBaseFontElement",
              "scrollbars",
              "screen",
              "localStorage",
              "defaultstatus",
              "HTMLCanvasElement",
              "ProcessingInstruction",
              "HTMLFrameElement",
              "frames",
              "HTMLElement",
              "HTMLSelectElement",
              "HTMLIsIndexElement",
              "HTMLDocument",
              "HTMLCollection",
              "HTMLDirectoryElement",
              "CSSMediaRule",
              "MessageEvent",
              "DOMException",
              "CSSRule",
              "WebKitCSSMatrix",
              "status",
              "HTMLScriptElement",
              "DOMImplementation",
              "SVGLength",
              "HTMLOptGroupElement",
              "HTMLAreaElement",
              "HTMLFrameSetElement",
              "name",
              "self",
              "HTMLIFrameElement",
              "Comment",
              "Event",
              "Storage",
              "XMLSerializer",
              "statusbar",
              "Range",
              "HTMLPreElement",
              "Image",
              "parent",
              "closed",
              "crypto",
              "CSSVariablesDeclaration",
              "HTMLOListElement",
              "HTMLFormElement",
              "DOMParser",
              "console",
              "EventException",
              "scrollX",
              "HTMLMediaElement",
              "XMLDocument",
              "HTMLHeadingElement",
              "XMLHttpRequest",
              "TextEvent",
              "event",
              "CSSVariablesRule",
              "HTMLAppletElement",
              "devicePixelRatio",
              "FileList",
              "CanvasRenderingContext2D",
              "HTMLMarqueeElement",
              "WebKitCSSKeyframesRule",
              "XSLTProcessor",
              "CSSImportRule",
              "CSSRuleList",
              "SVGTransform",
              "SVGTextContentElement",
              "HTMLTableCellElement",
              "DocumentFragment",
              "SVGPreserveAspectRatio",
              "HTMLMapElement",
              "XPathResult",
              "HTMLLIElement",
              "Plugin",
              "HTMLParagraphElement",
              "HTMLBlockquoteElement",
              "outerWidth",
              "CSSStyleRule",
              "Text",
              "HTMLUListElement",
              "CSSPrimitiveValue",
              "HTMLEmbedElement",
              "PluginArray",
              "ClientRectList",
              "CSSCharsetRule",
              "menubar",
              "HTMLBodyElement",
              "HTMLAudioElement",
              "CDATASection",
              "WebKitCSSKeyframeRule",
              "Audio",
              "history",
              "Entity",
              "HTMLTableCaptionElement",
              "MimeType",
              "SVGException",
              "NamedNodeMap",
              "XMLHttpRequestUpload",
              "WebKitAnimationEvent",
              "HTMLMenuElement",
              "SVGAngle",
              "XPathEvaluator",
              "HTMLImageElement",
              "NodeFilter",
              "Attr",
              "Counter",
              "CSSValueList",
              "XMLHttpRequestException",
              "WheelEvent",
              "SVGUnitTypes",
              "HTMLLabelElement",
              "HTMLAnchorElement",
              "frameElement",
              "DocumentType",
              "HTMLTableSectionElement",
              "HTMLTitleElement",
              "HTMLMetaElement",
              "Worker",
              "screenTop",
              "onwebkittransitionend",
              "onmouseover",
              "onmouseup",
              "ondragend",
              "onerror",
              "onsearch",
              "close",
              "onkeydown",
              "ondragstart",
              "onseeking",
              "postMessage",
              "onfocus",
              "ondurationchange",
              "onreset",
              "onkeyup",
              "onpause",
              "onended",
              "ondragenter",
              "onpagehide",
              "ondblclick",
              "onloadeddata",
              "ondragleave",
              "onvolumechange",
              "onbeforeunload",
              "onresize",
              "blur",
              "onloadstart",
              "onmousedown",
              "onloadedmetadata",
              "onabort",
              "onstalled",
              "onpageshow",
              "ononline",
              "onkeypress",
              "onclick",
              "oninvalid",
              "onsubmit",
              "onseeked",
              "onoffline",
              "onemptied",
              "onwebkitanimationiteration",
              "onsuspend",
              "onstorage",
              "onload",
              "onwaiting",
              "oncanplay",
              "onratechange",
              "ondragover",
              "onunload",
              "onpopstate",
              "onplay",
              "onwebkitanimationstart",
              "onplaying",
              "oncanplaythrough",
              "onselect",
              "focus",
              "onmousemove",
              "ondrag",
              "onmessage",
              "onscroll",
              "ontimeupdate",
              "onchange",
              "oncontextmenu",
              "onmousewheel",
              "onblur",
              "onmouseout",
              "oninput",
              "ondrop",
              "onwebkitanimationend",
              "onprogress",
              "onhashchange",
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
              "setTimeout",
              "clearTimeout",
              "setInterval",
              "clearInterval",
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
              "openDatabase",
              "dispatchEvent",
              "Cufon",
              "FormData",
            ];
          } else {
            b = [
              "JSpec",
              "printStackTrace",
              "ExceptionHub",
              "EHConsole",
              "document",
              "window",
              "EvalError",
              "RangeError",
              "ReferenceError",
              "SyntaxError",
              "TypeError",
              "URIError",
              "getComputedStyle",
              "getMatchedCSSRules",
              "moveBy",
              "find",
              "resizeTo",
              "clearTimeout",
              "btoa",
              "setTimeout",
              "scrollBy",
              "print",
              "resizeBy",
              "atob",
              "openDatabase",
              "moveTo",
              "scroll",
              "confirm",
              "showModalDialog",
              "close",
              "clearInterval",
              "webkitConvertPointFromNodeToPage",
              "open",
              "prompt",
              "focus",
              "blur",
              "scrollTo",
              "removeEventListener",
              "postMessage",
              "setInterval",
              "getSelection",
              "alert",
              "stop",
              "webkitConvertPointFromPageToNode",
              "addEventListener",
              "dispatchEvent",
              "captureEvents",
              "releaseEvents",
              "_inspectorCommandLineAPI",
              "frames",
              "HTMLBodyElement",
              "onseeking",
              "menubar",
              "onended",
              "onsuspend",
              "pageXOffset",
              "length",
              "CSSPrimitiveValue",
              "frameElement",
              "HTMLMenuElement",
              "NodeFilter",
              "MouseEvent",
              "TextEvent",
              "onreset",
              "HTMLQuoteElement",
              "onwebkitanimationiteration",
              "WebKitPoint",
              "HTMLIsIndexElement",
              "XMLHttpRequestUpload",
              "CSSCharsetRule",
              "HTMLAppletElement",
              "HTMLCollection",
              "statusbar",
              "XMLHttpRequestException",
              "HTMLStyleElement",
              "ondragleave",
              "DOMException",
              "HTMLFrameSetElement",
              "clientInformation",
              "localStorage",
              "onloadedmetadata",
              "HTMLUListElement",
              "CharacterData",
              "name",
              "ondragstart",
              "HTMLLegendElement",
              "XPathResult",
              "HTMLPreElement",
              "onkeydown",
              "onwebkitanimationstart",
              "ondblclick",
              "XSLTProcessor",
              "CSSRuleList",
              "onmousemove",
              "WebKitTransitionEvent",
              "outerHeight",
              "CSSVariablesDeclaration",
              "ondragend",
              "history",
              "SVGUnitTypes",
              "top",
              "parent",
              "CanvasRenderingContext2D",
              "TextMetrics",
              "ClientRectList",
              "HTMLButtonElement",
              "onunload",
              "HTMLMapElement",
              "scrollY",
              "Plugin",
              "CSSStyleSheet",
              "ondrag",
              "Attr",
              "EntityReference",
              "HTMLTableCaptionElement",
              "HTMLObjectElement",
              "self",
              "MutationEvent",
              "pageYOffset",
              "HTMLInputElement",
              "screenLeft",
              "onkeyup",
              "HTMLScriptElement",
              "onmousewheel",
              "onstorage",
              "HTMLOListElement",
              "HTMLCanvasElement",
              "CSSFontFaceRule",
              "XMLDocument",
              "HTMLBRElement",
              "CSSStyleRule",
              "HTMLFontElement",
              "HTMLTitleElement",
              "Node",
              "HTMLTableSectionElement",
              "Text",
              "onclick",
              "HTMLOptionElement",
              "File",
              "onvolumechange",
              "StyleSheetList",
              "Range",
              "onmouseover",
              "HTMLAnchorElement",
              "innerHeight",
              "onplaying",
              "CSSMediaRule",
              "HTMLEmbedElement",
              "NodeList",
              "SVGMarkerElement",
              "onmouseup",
              "WebKitAnimationEvent",
              "SVGColor",
              "HTMLParamElement",
              "offscreenBuffering",
              "HTMLTextAreaElement",
              "onratechange",
              "locationbar",
              "SVGLength",
              "KeyboardEvent",
              "MimeTypeArray",
              "ondragover",
              "HTMLDivElement",
              "HTMLBaseElement",
              "HTMLBaseFontElement",
              "onsubmit",
              "HTMLIFrameElement",
              "HTMLBlockquoteElement",
              "HTMLAudioElement",
              "SVGPreserveAspectRatio",
              "HTMLLIElement",
              "SVGAngle",
              "location",
              "onstalled",
              "scrollbars",
              "HTMLMarqueeElement",
              "SVGPaint",
              "Entity",
              "onprogress",
              "onwaiting",
              "HTMLModElement",
              "HTMLFormElement",
              "opener",
              "ontimeupdate",
              "onfocus",
              "outerWidth",
              "onplay",
              "HTMLHeadElement",
              "ondurationchange",
              "oncanplay",
              "onemptied",
              "MimeType",
              "HTMLImageElement",
              "CDATASection",
              "closed",
              "event",
              "DOMParser",
              "CSSValueList",
              "navigator",
              "screen",
              "FileList",
              "sessionStorage",
              "ProcessingInstruction",
              "ononline",
              "oncontextmenu",
              "RangeException",
              "onoffline",
              "WheelEvent",
              "onresize",
              "Storage",
              "innerWidth",
              "Rect",
              "MessageEvent",
              "StorageEvent",
              "HTMLElement",
              "onsearch",
              "onseeked",
              "Counter",
              "NamedNodeMap",
              "HTMLOptGroupElement",
              "HTMLHeadingElement",
              "Worker",
              "ondragenter",
              "onmessage",
              "onblur",
              "HTMLParagraphElement",
              "HTMLFieldSetElement",
              "ondrop",
              "personalbar",
              "HTMLSelectElement",
              "OverflowEvent",
              "XPathException",
              "oncanplaythrough",
              "ProgressEvent",
              "status",
              "onselect",
              "onpause",
              "MediaError",
              "HTMLFrameElement",
              "CSSRule",
              "devicePixelRatio",
              "CSSStyleDeclaration",
              "WebKitCSSTransformValue",
              "HTMLTableRowElement",
              "HTMLDirectoryElement",
              "Option",
              "Image",
              "onloadeddata",
              "WebKitCSSKeyframesRule",
              "scrollX",
              "onwebkittransitionend",
              "screenY",
              "onkeypress",
              "toolbar",
              "SVGTextContentElement",
              "HTMLAreaElement",
              "Event",
              "screenTop",
              "Element",
              "Audio",
              "DocumentType",
              "crypto",
              "UIEvent",
              "EventException",
              "defaultStatus",
              "onwebkitanimationend",
              "screenX",
              "SVGTransform",
              "HTMLHRElement",
              "CSSImportRule",
              "defaultstatus",
              "DocumentFragment",
              "applicationCache",
              "CSSPageRule",
              "onload",
              "onerror",
              "XPathEvaluator",
              "onchange",
              "MediaList",
              "console",
              "onabort",
              "onbeforeunload",
              "oninput",
              "onloadstart",
              "onmousedown",
              "onmouseout",
              "onscroll",
              "StyleSheet",
              "CSSValue",
              "CSSVariablesRule",
              "DOMImplementation",
              "Document",
              "Comment",
              "Notation",
              "HTMLDocument",
              "HTMLDListElement",
              "HTMLHtmlElement",
              "HTMLLabelElement",
              "HTMLLinkElement",
              "HTMLMetaElement",
              "HTMLTableCellElement",
              "HTMLTableColElement",
              "HTMLTableElement",
              "WebKitCSSKeyframeRule",
              "WebKitCSSMatrix",
              "Clipboard",
              "XMLSerializer",
              "XMLHttpRequest",
              "PluginArray",
              "ClientRect",
              "HTMLMediaElement",
              "HTMLVideoElement",
              "SVGException",
              "SVGGradientElement",
              "SVGPathSeg",
              "SVGRenderingIntent",
              "SVGTextPathElement",
              "Cufon",
            ];
          }
        }
      }
      this.ignore_nodes = {};
      for (var d = 0; d < b.length; d++) {
        this.ignore_nodes[b[d]] = true;
      }
      try {
        this.wrapFunctions(window, 0);
      } catch (f) {}
      if (typeof window.onload !== "undefined" && window.onload !== null) {
        window.onload = this.trackNode(window.onload, "onload", false);
      }
      this.documentEvent.__eht = true;
      var c = [
        "click",
        "mouseover",
        "mouseout",
        "mousedown",
        "mouseup",
        "submit",
      ];
      for (d = 0; d < c.length; d++) {
        var a = c[d];
        document.body.addEventListener(a, this.documentEvent, true);
      }
    }
  },
  wrapInterface: function (b, a) {
    if (typeof b.__eht !== "undefined") {
      return b;
    }
    var c = function () {
      for (var e = 0; e < arguments.length; e++) {
        if (
          typeof arguments[e] !== "undefined" &&
          typeof arguments[e] === "function" &&
          (!arguments[e].constructor ||
            !arguments[e].constructor.toString().match(/regexp/i))
        ) {
          arguments[e] = ExceptionHub.trackNode(
            arguments[e],
            a || "interface",
            false
          );
        }
      }
      var d = b.apply(this, arguments);
      if (typeof d !== "undefined") {
        return d;
      }
    };
    c.__eht = true;
    return c;
  },
  wrapXMLHttpRequest: function () {
    var a = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function () {
      var d = [
        "onreadystatechange",
        "onerror",
        "onload",
        "onprogress",
        "ontimeout",
      ];
      for (var c = 0; c < d.length; c++) {
        var g = d[c];
        if (
          typeof this[g] !== "undefined" &&
          this[g] !== null &&
          !this[g].__eht
        ) {
          try {
            this[g] = ExceptionHub.trackNode(this[g], g);
          } catch (f) {}
        }
      }
      var b = a.apply(this, arguments);
      if (typeof b !== "undefined") {
        return b;
      }
    };
  },
  wrapFunctions: function (b, g) {
    if (g > 2) {
      return 1;
    }
    g += 1;
    if (g === 1) {
      var a = typeof d;
      if (a === "string" || a === "boolean" || a === "number") {
        return 1;
      }
    }
    b.__eht = true;
    for (var f in b) {
      if (b.hasOwnProperty(f) || window.opera) {
        try {
          var d = b[f];
        } catch (c) {
          continue;
        }
        if (
          typeof d !== "string" &&
          f !== "__wrp" &&
          f !== "__eht" &&
          f !== "__con_for" &&
          (g != 1 || !this.ignore_nodes[f])
        ) {
          if (d === null) {
            continue;
          }
          if (!d.hasOwnProperty("__eht") || (window.opera && !d.__eht)) {
            if (
              typeof d === "object" &&
              !(d instanceof Array) &&
              typeof d.constructor === "function" &&
              d.constructor !== Function
            ) {
              if (typeof d.constructor.__wrp === "function") {
                d.constructor = d.constructor.__wrp;
              } else {
                d.constructor.__con_for = d.constructor.__con_for || [];
                d.constructor.__con_for.push(d);
              }
            }
            if (
              typeof d == "function" &&
              (!d.constructor || !d.constructor.toString().match(/regexp/i))
            ) {
              b[f] = this.trackNode(d, f);
            }
            this.wrapFunctions(d, g);
          }
        }
      }
    }
    if (window.chrome && b.prototype) {
      this.wrapFunctions(b.prototype, g);
    }
  },
  trackNode: function (f, a, j) {
    var h = this;
    var e = f;
    if (typeof f.__wrp !== "undefined") {
      return f.__wrp;
    }
    var g = function () {
      try {
        /* Wrapper function MAGIC_KEY42939485 */ var i;
        if (e.apply === Object.apply) {
          i = e.apply(this, arguments);
        } else {
          var l = e.hasOwnProperty("apply") && e.apply;
          e.apply = Object.apply;
          i = e.apply(this, arguments);
          if (l === false) {
            delete e.apply;
          } else {
            e.apply = l;
          }
        }
        if (
          typeof ExceptionHub.errorQueue !== "undefined" &&
          ExceptionHub.errorQueue
        ) {
          ExceptionHub.errorQueue = null;
        }
        if (typeof i !== "undefined") {
          return i;
        }
      } catch (k) {
        if (typeof k._tracked_as === "undefined") {
          if (typeof k === "string") {
            k = new Error(k);
          }
          k._tracked_as = h.logStackTrace(k);
          ExceptionHub.errorQueue = ExceptionHub.errorQueue || [];
          ExceptionHub.errorQueue.push(k._tracked_as);
          if (typeof j === "undefined" || j === true) {
            setTimeout(ExceptionHub.processQueue, 1);
          } else {
            ExceptionHub.processQueue();
          }
        }
        if (typeof j === "undefined" || j === true) {
          throw k;
        } else {
          return false;
        }
      }
    };
    g.prototype = e.prototype;
    g.__eht = true;
    g.original_func = e;
    g.func_name = a;
    if (
      (typeof e.constructor === "undefined" || e.constructor === Function) &&
      typeof g.__proto__ !== "undefined"
    ) {
      g.__proto__ = e;
    } else {
      for (var c in f) {
        if (f.hasOwnProperty(c)) {
          var b = f[c];
          g[c] = b;
        }
      }
    }
    if (typeof e === "function") {
      e.__wrp = g;
    }
    if (typeof f.__con_for !== "undefined") {
      for (var d = 0; d < f.__con_for.length; d++) {
        f.__con_for[d].constructor = g;
      }
      f.__con_for = null;
    }
    return g;
  },
  documentEvent: function (c) {
    var b = c.type;
    var a = c.target;
    if (c.target["on" + b] && !c.target["on" + b].__eht) {
      for (; a; a = a.parentNode) {
        if (a["on" + b]) {
          a["on" + b] = ExceptionHub.trackNode(a["on" + b], "on" + b, false);
        }
      }
      c.target["on" + b].__eht = true;
    }
    return true;
  },
  log: function () {
    this.logStackTrace.apply(this, arguments).upload();
  },
  logStackTrace: function (e) {
    if (e.stack) {
      if (e.fileName) {
        var h = e.stack.split("\n");
        var d = [];
        for (var o = 0; o < h.length; o++) {
          var r = h[o];
          if (r && r !== "" && !ExceptionHub.isTrackingScript(r)) {
            var u = r.match(/^[^@]+/);
            if (u !== null) {
              u = u[0];
            }
            var c = r.replace(/^[^@]*[@]/, "").replace(/[:][0-9]+$/, "");
            var t = r.match(/[0-9]+$/)[0];
            if (c == "") {
              continue;
            }
            var l = [u, c, t];
            if (u === null || u.match(/^\s*\([^\)]*\)\s*$/)) {
              l[0] = (function (v, i) {
                return function () {
                  return ExceptionHub.findFunctionNameAtLine(v, i) || "unknown";
                };
              })(c, t);
            }
            d.push(l);
          }
          if (d.length > 30) {
            break;
          }
        }
        var a = e.fileName + ":" + e.lineNumber;
        if (
          ExceptionHub.isTrackingScript(e.fileName) ||
          e.fileName.match("javascript:alert\\('TODO: FIXME'\\)")
        ) {
          var k = a;
          a = function (i, v) {
            if (v.length > 0) {
              return v[0][1] + ":" + v[0][2];
            } else {
              return document.location.href.replace(/[?#].*$/, "") + ":inline";
            }
          };
        }
        return new ExceptionHub.trackedError({
          error: e.name + ": " + e.message,
          location: a,
          stacktrace: d,
        });
      } else {
        var h = e.stack.split("\n");
        var d = [];
        var m = h[0];
        for (var o = 1; o < h.length; o++) {
          var r = h[o].replace(/\s*$/, "");
          if (r && !ExceptionHub.isTrackingScript(r)) {
            var n = (" " + r)
              .replace(/\s+at\s+/, "")
              .replace(/^\s+|\s+$/, "")
              .replace(/[\(\)]/g, "")
              .replace(/\[[^\]]+\]/g, "")
              .split(/\s+/);
            var u = n[0];
            if (u.match(/^http/)) {
              u = null;
            } else {
              u = u.match(/[^.]+$/)[0];
            }
            var j = n[n.length - 1].replace(/^\s+|\s+$/, "");
            var g = j.match(/\(?(.*)[:]([0-9]+)[:][0-9]+\)?$/);
            if (g) {
              var c = g[1];
              var t = g[2];
            } else {
              continue;
            }
            if (!u || u == "" || u.match(/[<]anonymous[>]/)) {
              u = (function (v, i) {
                return function () {
                  return ExceptionHub.findFunctionNameAtLine(v, i) || "unknown";
                };
              })(c, t);
            } else {
              if (!u.match(/\([^\)]+\)/)) {
                u += "()";
              }
            }
            d.push([u, c, t]);
          }
        }
        var a = function (i, v) {
          if (v && v[0]) {
            return v[0][1] + ":" + v[0][2];
          } else {
            return "unknown, use throw new Error(...) instead of throw string:0";
          }
        };
        return new ExceptionHub.trackedError({
          error: m,
          location: a,
          stacktrace: d,
        });
      }
    } else {
      if (window.opera && !("stacktrace" in e)) {
        for (var q = arguments.callee.caller; q; q = q.caller) {
          if (q === q.caller && window.opera) {
            break;
          }
        }
        return;
      } else {
        var d = [];
        var o = 0;
        for (var q = arguments.callee.caller; q; q = q.caller) {
          var f = q;
          if (
            window.opera &&
            typeof q.original_func !== "undefined" &&
            q.original_func !== null
          ) {
            f = q.original_func;
          }
          if (!(f + "").match(/Wrapper function MAGIC_KEY42939485/)) {
            var b = (function (i) {
              return function () {
                return ExceptionHub.getStackTraceFromScripts(i + "");
              };
            })(f);
            d.push(b);
          }
          if (
            window.opera &&
            (typeof q.caller === "undefined" || q.caller == null)
          ) {
            break;
          }
          o += 1;
          if (o > 30) {
            break;
          }
        }
        if (window.opera) {
          var s = e.message.match(/Statement on line (\d+): /)[1];
          d[0][2] = s;
          return new ExceptionHub.trackedError({
            error:
              e.name + ": " + e.message.replace(/Statement on line \d+: /, ""),
            location: d[0][1] + ":" + d[0][2],
            stacktrace: d,
          });
        } else {
          if (e.sourceURL) {
            var u = (function (i) {
              return function () {
                return (
                  ExceptionHub.findFunctionNameAtLine(i.sourceURL, i.line) ||
                  "unknown"
                );
              };
            })(e);
            var p = [u, e.sourceURL, e.line + ""];
            return new ExceptionHub.trackedError({
              error: e.name + ": " + e.message,
              location: e.sourceURL + ":" + e.line,
              stacktrace: [p].concat(d),
            });
          } else {
            if (document.addEventListener) {
              var a = function (i, v) {
                if (v && v[0]) {
                  return (
                    v[0][1].replace(/[?][^?]*$/, "") +
                    ":" +
                    v[0][2].replace(/[-][0-9]+$/, "")
                  );
                } else {
                  return "unknown, use throw new Error(...) instead of throw string:0";
                }
              };
              return new ExceptionHub.trackedError({
                error: e,
                location: a,
                stacktrace: d,
              });
            } else {
              if (e.name) {
                var m = e.name + ": " + e.message;
                var a = function (i, v) {
                  return (
                    v[0][1].replace(/[?][^?]*$/, "") +
                    ":" +
                    v[0][2].replace(/[-][0-9]+$/, "")
                  );
                };
              } else {
                var m = arguments[0];
                var s = arguments[2];
                if (s > 100000000) {
                  s = "eval";
                }
                var a = arguments[1].replace(/[?][^?]*$/, "") + ":" + s;
                if (!d[0] || typeof d[0] === "function") {
                  d[0] = [];
                }
                d[0][0] = (function (v, i) {
                  return function () {
                    return (
                      ExceptionHub.findFunctionNameAtLine(v, i) || "unknown"
                    );
                  };
                })(arguments[1], arguments[2]);
                d[0][1] = arguments[1].replace(/[?][^?]*$/, "");
                d[0][2] = arguments[2];
              }
              return new ExceptionHub.trackedError({
                error: m,
                location: a,
                stacktrace: d,
              });
            }
          }
        }
      }
    }
  },
  getStackTraceFromScripts: function (l) {
    var h = this.scriptLoader.getAllScripts();
    var c = /function\s*([^\s]*)\s*\(([^\)]*)\)\s*\{\s*((.|[\n])*)\s*\}\s*/;
    var n = ("   " + l + "   ").match(c);
    if (n) {
      var b = n[1];
      var o = n[2];
      var m = n[3];
      var p = false;
      var k = o.split(",");
      var g = [];
      for (var j = 0; j < k.length; j++) {
        g.push(k[j].replace(/\s*/, ""));
      }
      o = g.join("\\s*,\\s*");
      if (!b || b.match(/^\\s*$/)) {
        var e = new RegExp(
          "[\\'\\\"]?\\s*([\\w]+)\\s*[\\'\\\"]?\\s*[:=]\\s*function\\s*\\(\\s*" +
            o +
            "\\s*\\)\\s*\\{\\s*" +
            this.escapeForRegex(m) +
            "\\s*\\}"
        );
        p = true;
      } else {
        var e = new RegExp(
          "function\\s*" +
            this.escapeForRegex(b.replace(/[\(\)]/g, "")) +
            "\\s*\\(\\s*" +
            this.escapeForRegex(o.replace(/[\(\)]/g, "")) +
            "\\s*\\)\\s*\\{\\s*" +
            this.escapeForRegex(m) +
            "\\s*\\}"
        );
      }
      for (var a in h) {
        if (h.hasOwnProperty(a) || window.opera) {
          var d = h[a];
          var n = e.exec(d);
          if (n) {
            if (p == true) {
              b = n[1];
            }
            var f = d.substring(0, n.index).split("\n").length;
            var q = d.substring(0, n.index + n[0].length).split("\n").length;
            if (a.substring(0, 1) == "/") {
              a =
                document.location.protocol + "//" + document.location.host + a;
            }
            return [b + "()", a, f + "-" + q];
          }
        }
      }
    }
    return null;
  },
  findFunctionNameAtLine: function (b, j) {
    if (b.substring(0, 1) == "/") {
      b = document.location.protocol + "//" + document.location.host + b;
    }
    var c = this.scriptLoader.getScript(b);
    var d = c.split("\n").splice(0, parseInt(j, 10));
    var a = [];
    for (var g = d.length; g >= 0; g--) {
      a.push(d[g]);
    }
    a = a.join("\n");
    var f = new RegExp(
      "([\\'\\\"]?([\\w]+)[\\'\\\"]?\\s*[:=]\\s*function\\s*\\(|function\\s+([\\w]+)\\s*\\()"
    );
    var h = f.exec(a);
    if (h) {
      var e = (h[2] || h[3]).replace(/[\r\n]/g, "");
      if (!e.match(/\([^\)]*\)$/)) {
        e += "()";
      }
      return e;
    } else {
      return null;
    }
  },
  escapeForRegex: function (a) {
    this.escapeRegex = /([\/\.\*\+\?\|\(\)\[\]\{\}\\\$\^])/g;
    return a.replace(this.escapeRegex, "\\$1").replace(/;$/gm, ";?");
  },
  scriptLoader: {
    asyncLoad: function (b, d, a) {
      var c = window.XMLHttpRequest
        ? new XMLHttpRequest()
        : new ActiveXObject("Microsoft.XMLHTTP");
      c.onreadystatechange = function () {
        if (c.readyState == 4) {
          if (c.status == 200) {
            d(c.responseText);
          } else {
            a(c.responseText);
          }
        }
      };
      c.open("GET", b, true);
      c.send(null);
    },
    loadAll: function (m) {
      if (this.all_scripts_loaded === true) {
        m();
        return;
      }
      if (typeof this.scripts === "undefined") {
        this.scripts = {};
        this.load_callbacks = [];
      }
      this.load_callbacks.push(m);
      if (this.loading_all_scripts) {
        return;
      }
      this.loading_all_scripts = true;
      if (typeof this.loading_scripts === "undefined") {
        this.loading_scripts = 0;
      }
      var a = document.getElementsByTagName("script");
      var l = [];
      for (var g = 0; g < a.length; g++) {
        var b = a[g];
        if (typeof b.src != "undefined" && b.src) {
          l.push(b.src);
        }
      }
      this.loading_scripts += l.length + 1;
      this.crossdomain_urls = [];
      var h = this;
      for (var e = 0; e < l.length; e++) {
        var c = l[e];
        var f = document.location.protocol + "//" + document.location.host;
        var o = c.substring(0, 4) === "http";
        if (o && f != c.match(/[^\/]+\/\/[^\/]+/)[0]) {
          if (!c.indexOf(ExceptionHub.SERVER_URL) > -1) {
            this.crossdomain_urls.push(c);
          }
        } else {
          if (!o) {
            c = document.location.protocol + "//" + document.location.host + c;
          }
          this.asyncLoad(
            c,
            (function (i) {
              return function (j) {
                h.loaded(i, j);
              };
            })(c),
            this.error
          );
        }
      }
      for (var d = 0; d < this.crossdomain_urls.length; d++) {
        var n = document.createElement("script");
        n.src =
          document.location.protocol +
          "//" +
          ExceptionHub.SERVER_URL +
          "/proxy?url=" +
          encodeURIComponent(c);
        document.body.appendChild(n);
      }
      var c = document.location.href;
      this.asyncLoad(
        c,
        (function (i) {
          return function (j) {
            h.loaded(i, j);
          };
        })(c),
        function () {
          if (document.documentElement && document.documentElement.outerHTML) {
            h.scripts[document.location.href] =
              document.documentElement.outerHTML;
          } else {
            h.scripts[document.location.href] =
              "\n<html>\n" + document.getElementsByTagName("html")[0].innerHTML;
          }
          h.error();
        }
      );
    },
    getAllScripts: function () {
      if (this.all_scripts_loaded !== true) {
        return {};
      } else {
        return this.scripts;
      }
    },
    getScript: function (a) {
      if (this.all_scripts_loaded !== true) {
        return "";
      } else {
        return this.scripts[a] || "";
      }
    },
    loaded: function (a, b) {
      this.scripts[a] = b;
      this.loading_scripts -= 1;
      if (this.loading_scripts < 1) {
        this.complete();
      }
    },
    error: function () {
      this.loading_scripts -= 1;
      if (this.loading_scripts < 1) {
        this.complete();
      }
    },
    complete: function () {
      var a;
      this.all_scripts_loaded = true;
      while ((a = this.load_callbacks.pop())) {
        a(this.scripts);
      }
    },
  },
  isTrackingScript: function (a) {
    if (ExceptionHub.options && ExceptionHub.options.remote_hosted == true) {
      return a.match("/eh.js");
    } else {
      return (
        a.match(
          ExceptionHub.SERVER_URL.replace(/^www[.]/, "") +
            "/javascripts/error_track.js"
        ) ||
        a.match(
          ExceptionHub.SERVER_URL.replace(/^www[.]/, "") + "/javascripts/eh.js"
        )
      );
    }
  },
  processQueue: function () {
    if (
      typeof ExceptionHub.errorQueue !== "undefined" &&
      ExceptionHub.errorQueue !== null
    ) {
      for (var a = 0; a < ExceptionHub.errorQueue.length; a++) {
        ExceptionHub.errorQueue[a].upload();
      }
      ExceptionHub.errorQueue = [];
    }
  },
  utils: {
    includes: function (c, b) {
      for (var a = 0; a < c.length; a++) {
        if (c[a] === b) {
          return true;
        }
      }
      return false;
    },
    toJson: function (e) {
      var d = typeof e;
      if (d != "object" || e === null) {
        if (d == "string") {
          e = '"' + e + '"';
        }
        return String(e);
      } else {
        var f,
          b,
          c = [],
          a = e && e.constructor == Array;
        for (f in e) {
          b = e[f];
          d = typeof b;
          if (d == "string") {
            b = '"' + b + '"';
          } else {
            if (d == "object" && b !== null) {
              b = toJson(b);
            }
          }
          c.push((a ? "" : '"' + f + '":') + String(b));
        }
        return (a ? "[" : "{") + String(c) + (a ? "]" : "}");
      }
    },
    excludeBrowser: function () {
      if (ExceptionHub.options.exclude) {
        this.browserDetect.init();
        if (this.browserDetect.browser && this.browserDetect.version) {
          var b = this.browserDetect.browser
            .replace(/Firefox/, "ff")
            .replace(/Explorer/, "ie")
            .toLowerCase();
          var a = (this.browserDetect.version + "").replace(/[.]/, "_");
          switch (b) {
            case "ff":
              if (
                !this.includes(
                  [
                    "2_x",
                    "3_0",
                    "3_1",
                    "3_2",
                    "3_3",
                    "3_4",
                    "3_5",
                    "3_6",
                    "3_7",
                  ],
                  a
                )
              ) {
                a = "other";
              }
              if (a.substring(0, 1) === "2") {
                a = "2_x";
              }
              break;
            case "ie":
              if (!this.includes(["ie_6", "ie_7", "ie_8"], a)) {
                a = "other";
              }
              break;
            case "safari":
              if (!this.includes(["safari_3", "safari_4"], a)) {
                a = "other";
              }
              break;
            case "chrome":
              if (!this.includes(["chrome_4", "chrome_5"], a)) {
                a = "other";
              }
              break;
            default:
              b = "other";
              a = "other";
          }
          var c = b + "_" + a;
          if (this.includes(ExceptionHub.options.exclude, c)) {
            return true;
          }
        }
      }
      return false;
    },
    browserDetect: {
      init: function () {
        this.browser = this.searchString(this.dataBrowser) || "unknown";
        this.version =
          this.searchVersion(navigator.userAgent) ||
          this.searchVersion(navigator.appVersion) ||
          "unknown";
      },
      searchString: function (d) {
        for (var a = 0; a < d.length; a++) {
          var b = d[a].string;
          var c = d[a].prop;
          this.versionSearchString = d[a].versionSearch || d[a].identity;
          if (b) {
            if (b.indexOf(d[a].subString) != -1) {
              return d[a].identity;
            }
          } else {
            if (c) {
              return d[a].identity;
            }
          }
        }
      },
      searchVersion: function (b) {
        var a = b.indexOf(this.versionSearchString);
        if (a == -1) {
          return;
        }
        return parseFloat(b.substring(a + this.versionSearchString.length + 1));
      },
      dataBrowser: [
        {
          string: navigator.userAgent,
          subString: "Chrome",
          identity: "Chrome",
        },
        {
          string: navigator.userAgent,
          subString: "OmniWeb",
          versionSearch: "OmniWeb/",
          identity: "OmniWeb",
        },
        {
          string: navigator.vendor,
          subString: "Apple",
          identity: "Safari",
          versionSearch: "Version",
        },
        { prop: window.opera, identity: "Opera" },
        { string: navigator.vendor, subString: "iCab", identity: "iCab" },
        { string: navigator.vendor, subString: "KDE", identity: "Konqueror" },
        {
          string: navigator.userAgent,
          subString: "Firefox",
          identity: "Firefox",
        },
        { string: navigator.vendor, subString: "Camino", identity: "Camino" },
        {
          string: navigator.userAgent,
          subString: "Netscape",
          identity: "Netscape",
        },
        {
          string: navigator.userAgent,
          subString: "MSIE",
          identity: "Explorer",
          versionSearch: "MSIE",
        },
        {
          string: navigator.userAgent,
          subString: "Gecko",
          identity: "Mozilla",
          versionSearch: "rv",
        },
        {
          string: navigator.userAgent,
          subString: "Mozilla",
          identity: "Netscape",
          versionSearch: "Mozilla",
        },
      ],
    },
  },
};
ExceptionHub.trackedError = function (a) {
  this.data = a;
};
ExceptionHub.trackedError.prototype = {
  upload: function () {
    if (
      ExceptionHub.firefox &&
      this.data.error.match(/Permission denied for /)
    ) {
      return;
    }
    var a = this;
    ExceptionHub.scriptLoader.loadAll(function () {
      a.processUpload();
    });
  },
  processUpload: function () {
    var f = this.data.stacktrace;
    var g = [];
    for (var e = 0; e < f.length; e++) {
      var a = f[e];
      if (typeof a === "function") {
        var d = a();
        a = d;
      }
      if (a === null) {
        continue;
      }
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (typeof c === "function") {
          a[b] = c();
        }
      }
      if (!ExceptionHub.isTrackingScript(a[1])) {
        g.push(a);
      }
    }
    this.data.stacktrace = g;
    if (typeof this.data.location === "function") {
      this.data.location = this.data.location(
        this.data.error,
        this.data.stacktrace
      );
    }
    this.uploadError();
  },
  uploadError: function () {
    var stacktrace = this.data.stacktrace;
    var stacks = [];
    for (var i = 0; i < stacktrace.length; i++) {
      var trace = stacktrace[i];
      stacks.push(trace[0] + "@" + trace[1] + ":" + trace[2]);
    }
    var params = {
      error: this.data.error,
      location: this.data.location,
      stacktrace: stacks.join("\n"),
    };
    params.url = (document.location.href + "").replace(/[?].*$/, "");
    params._method = "POST";
    params.api = ExceptionHub.api_key;
    params.mode = ExceptionHub.mode;
    if (typeof ExceptionHub.options.data === "function") {
      try {
        params.data = ExceptionHub.utils.toJson(ExceptionHub.options.data());
      } catch (e) {}
    } else {
      if (typeof ExceptionHub.options.data === "string") {
        try {
          params.data = ExceptionHub.utils.toJson(
            eval(ExceptionHub.options.data + "()")
          );
        } catch (e) {}
      }
    }
    params.version = ExceptionHub.VERSION;
    var url =
      document.location.protocol +
      "//" +
      ExceptionHub.SERVER_URL +
      "/projects/" +
      ExceptionHub.project_id +
      "/errors";
    this.uploadData(url, params);
  },
  uploadData: function (b, f) {
    var h = "if" + Math.round(Math.random() * 10000000000000000);
    try {
      var c = document.createElement('<iframe name="' + h + '"></iframe>');
    } catch (g) {
      var c = document.createElement("iframe");
      c.name = h;
    }
    c.id = h;
    c.style.visibility = "hidden";
    c.style.height = "1px";
    c.style.width = "1px";
    var d = document.createElement("form");
    d.action = b;
    d.method = "POST";
    d.target = h;
    d.id = "form" + h;
    for (var i in f) {
      try {
        var a = document.createElement('<input name="' + i + '"></input>');
      } catch (g) {
        var a = document.createElement("input");
        a.name = i;
      }
      a.type = "hidden";
      a.value = f[i];
      d.appendChild(a);
    }
    document.body.appendChild(c);
    document.body.appendChild(d);
    document.getElementById("form" + h).submit();
  },
};
/*
page: http://www.fitnessmagnet.com/
url: http://js.exceptionhub.com/javascripts/eh.js
*/
