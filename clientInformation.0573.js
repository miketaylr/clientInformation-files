/* compiled: 1/12/2017 1:44:06 PM */

(function (i) {
  if (!i.BonaPage) {
    var j = (i.location.protocol + "//" + i.location.host).toLowerCase(),
      h = c();
    i.BonaPage = {
      isObjInited: false,
      isObjValid: false,
      eventTagsAttribute: "eventTags",
      topWindow: h,
      isTopWindow: i == h,
      contentWindow: h,
      throttle: g,
      clearThrottle: b,
      init: e,
    };
    i.WA = BonaPage;
    a();
  }
  function a() {
    if (!h.BonaPage || !h.BonaPage.isObjValid) {
      WA.throttle(a, 37);
      return;
    }
    h.BonaPage.addPageStateHandler(h.BonaPage.PAGE_PARSED, f);
  }
  function f() {
    WA.contentWindow = h.contentarea || h;
    if (!WA.contentWindow.BonaPage || !WA.contentWindow.BonaPage.isObjValid) {
      WA.contentWindow = h;
      WA.throttle(f, 37);
    }
  }
  function b(k) {
    if (k.timeoutId) {
      clearTimeout(k.timeoutId);
      k.timeoutId = null;
    }
  }
  function g(m, k, l) {
    k = k || {};
    var n = typeof k === "object" ? k.timeout || 500 : k;
    clearTimeout(m.timeoutId);
    m.timeoutId = setTimeout(function () {
      m.call(l, k);
    }, n);
  }
  function c() {
    try {
      if (
        top &&
        top.document &&
        (top.location.protocol + "//" + top.location.host).toLowerCase() == j
      ) {
        return top;
      } else {
        return d(i);
      }
    } catch (k) {
      return d(i);
    }
  }
  function d(l) {
    try {
      if (l.parent && l.location.href != l.parent.location.href) {
        if (
          (
            l.parent.location.protocol +
            "//" +
            l.parent.location.host
          ).toLowerCase() == j
        ) {
          return d(l.parent);
        } else {
          return l;
        }
      } else {
        return l;
      }
    } catch (k) {
      return l;
    }
  }
  function e() {
    WA.Browser = new WA.WaBrowser();
    WA.Device = new WA.WaDevice();
    WA.Log = new WA.WaLog();
    WA.Object = new WA.WaObject();
    WA.getTypeString = WA.Object.getTypeString;
    WA.Tools = new WA.WaTools();
    WA.Tools.EventHandlers = WA.EventHandlers;
    WA.Window = new WA.WaWindow();
    WA.Date = new WA.WaDate();
    WA.String = new WA.WaString();
    WA.Number = new WA.WaNumber();
    WA.Array = new WA.WaArray();
    WA.Price = new WA.WaPrice();
    WA.Url = new WA.WaUrl();
    WA.Style = new WA.WaStyle();
    WA.Dom = new WA.WaDom();
    WA.Dimensions = new WA.WaDimensions();
    WA.Localization = new WA.Localization();
    WA.$ = WA.Dom.$;
    WA.$c = WA.Dom.$c;
    WA.$$ = WA.Dom.$$;
    if (WA.isWidgetMode) {
      WA.WidgetMode = new WA.WaWidgetMode();
    }
    WA.DragDropStatic = new WA.WaDragDropStatic();
    WA.Gadgets = new WA.WaGadgets();
    WA.WebFormsValidator = new WA.WaWebFormsValidator();
    WA.AssociationUrlConverter = new WA.WaAssociationUrlConverter();
    WA.Tools.KeyboardWatcher = new WA.KeyboardWatcher({
      parentComponent: WA.Tools,
    });
    WA.Tools.PropertyWatcher = new WA.PropertyWatcher();
    WA.Tools.PeterBlum = new WA.PeterBlum();
    WA.Tools.JsCombinerTestModule = new WA.JsCombinerTestModule();
    WA.Tools.OpenLinkManager = new WA.OpenLinkManager();
    WA.Tools.MixPanel = new WA.MixPanel();
    WA.TestFramework = new WA.WaTestFramework();
    WA.ReactiveEmailingActive = false;
  }
})(window);
(function (d, b, a) {
  if (!b.WaLog) {
    b.WaLog = c;
    b.WaLog.TypeName = "WA.WaLog";
  }
  function c() {
    var r = this,
      u = b.WaLog.TypeName;
    r.toString = function () {
      return u;
    };
    var l = false,
      k = false,
      q,
      p,
      v = true,
      h = false,
      f = 1;
    r.add = e;
    r.enabled = h;
    r.show = t;
    r.hide = i;
    r.setUseConsole = s;
    function s(w) {
      v = w === true;
    }
    function n() {
      if (!v) {
        q = d.open(
          "",
          "walogwindow",
          "width=900,height=700,location=0,menubar=0,resizable=1,scrollbars=1,status=1,toolbar=0"
        );
        if (q == null) {
          alert("Log console is blocked. Please, allow pop-up windows.");
        } else {
          l = true;
        }
        b.addHandler(d, "unload", g);
      }
    }
    function m() {
      p = b.topWindow.BonaPage.$("idLogPanelDivForDebugger");
      if (!p) {
        p = b.topWindow.document.createElement("DIV");
        p.id = "idLogPanelDivForDebugger";
        p.style.position = "absolute";
        p.style.zIndex = "3737";
        p.style.left = "0px";
        p.style.top = "0px";
        p.style.width = "337px";
        p.style.height = "400px";
        p.style.display = "none";
        p.style.backgroundColor = "white";
        if (b.Browser.isIE) {
          p.style.filter =
            "progid:DXImageTransform.Microsoft.Alpha(opacity=97)";
        } else {
          p.style.opacity = parseFloat("0.73");
          p.style.MozOpacity = parseFloat("0.73");
          p.style.KhtmlOpacity = parseFloat("0.73");
        }
        b.topWindow.document.body.appendChild(p);
      }
    }
    function e(y, z) {
      if (!h) {
        return;
      }
      if (v && d.console) {
        o(y, z);
        return;
      }
      if (q && q.document) {
        var x = "id_" + new Date().getTime() + Math.floor(Math.random() * 11);
        q.document.write(
          '<p id="' +
            x +
            '" style="padding: 5px 5px; margin: 0; font-size: 14px; border-bottom: 1px dashed" title="' +
            new Date().toString() +
            '"><b ' +
            (y.indexOf("GLOBAL ERROR") >= 0 ? 'style="color: red;"' : "") +
            ">" +
            f++ +
            ". " +
            y +
            " : </b>" +
            z +
            "</p>"
        );
        if (q.document.getElementById) {
          var w = q.document.getElementById(x);
          w.scrollIntoView();
        }
      }
    }
    function o(x, y) {
      var z = b.getTypeString(y);
      switch (z) {
        case "object":
        case "array":
        case "mouseevent":
          var w = "";
          d.console.log(f++ + ". %c%s : %x", w, x, y);
          break;
        default:
          d.console.log(
            f++ +
              ". " +
              (x.indexOf("GLOBAL ERROR") >= 0 ? "ERROR: " : "") +
              x +
              " : " +
              y
          );
          break;
      }
    }
    function t(A, x) {
      x = x || {};
      var y,
        z,
        w = [];
      p = b.topWindow.BonaPage.$("idLogPanelDivForDebugger");
      if (x.left != null) {
        p.style.left = x.left + "px";
      } else {
        if (x.right != null) {
          p.style.right = x.right + "px";
        }
      }
      if (x.top != null) {
        p.style.top = x.top + "px";
      } else {
        if (x.bottom != null) {
          p.style.bottom = x.bottom + "px";
        }
      }
      if (x.width != null) {
        p.style.width = x.width + "px";
      }
      if (x.height != null) {
        p.style.height = x.height + "px";
      }
      if (A != null) {
        if (typeof A === "string") {
          w.push(A);
        } else {
          if (
            typeof A === "object" &&
            A.length != null &&
            typeof A.length !== "function"
          ) {
            for (y = A.length; y--; ) {
              w.unshift(y + ": " + A[y] + "<br>");
            }
          } else {
            for (y in A) {
              if (A.hasOwnProperty(y)) {
                w.push(y + ": " + A[y] + "<br>");
              }
            }
          }
        }
        p.innerHTML = w.join("");
      }
      if (p.style.display.toLowerCase() == "none") {
        p.style.display = "block";
      }
    }
    function i() {
      p.style.display = "none";
    }
    function j() {
      if (h && b.Device.isDesktop) {
        if (!l && q == null) {
          n();
        }
        if (!k && p == null) {
          b.addPageStateHandler(b.PAGE_PARSED, m);
        }
      }
    }
    function g() {
      if (q) {
        q.close();
      }
    }
    j();
  }
})(window, WA);
(function (window, WA) {
  if (!WA.Object) {
    WA.WaObject = WaObject;
    WA.WaObject.TypeName = "WA.WaObject";
  }
  function WaObject(args) {
    args = args || {};
    var pThis = this,
      typeName = WA.WaObject.TypeName;
    pThis.extend = extend;
    pThis.create = create;
    pThis.copy = copy;
    pThis.merge = merge;
    pThis.areEqual = areEqual;
    pThis.areMembersEqual = areMembersEqual;
    pThis.getTypeString = getTypeString;
    pThis.createEventTagsAttribute = createEventTagsAttribute;
    function createEventTagsAttribute(attrValue, obj) {
      obj = obj || {};
      obj[WA.eventTagsAttribute] = attrValue;
      return obj;
    }
    function getTypeString(obj) {
      return {}.toString
        .call(obj)
        .match(/\s([a-zA-Z]+)/)[1]
        .toLowerCase();
    }
    function areEqual(obj, rObj) {
      var i,
        ret = true;
      if (typeof obj == "object") {
        if (typeof rObj == "object") {
          if (obj == null) {
            ret = obj == rObj;
          } else {
            if (typeof obj.splice == "function") {
              for (i = 0; i < obj.length; i++) {
                ret = areMembersEqual(i, obj, rObj);
                if (!ret) {
                  break;
                }
              }
            } else {
              for (i in obj) {
                ret = areMembersEqual(i, obj, rObj);
                if (!ret) {
                  break;
                }
              }
            }
          }
        } else {
          ret = false;
        }
        return ret;
      }
    }
    function areMembersEqual(key, obj, rObj) {
      var ret = true;
      if (typeof obj[key] == "object") {
        if (obj[key] == null) {
          ret = obj[key] == rObj[key];
        } else {
          if (typeof obj[key].splice == "function") {
            ret = typeof rObj[key].splice == "function";
          } else {
            ret = typeof rObj[key] == "object";
          }
        }
        if (!ret) {
          return ret;
        }
        ret = areEqual(obj[key], rObj[key]);
      } else {
        ret = rObj[key] == obj[key];
      }
      return ret;
    }
    function merge(sourceObject, newObject) {
      if (!newObject) {
        return copy(sourceObject);
      }
      var result = copy(newObject);
      for (var i in sourceObject) {
        if (sourceObject[i] == null) {
          result[i] = null;
          continue;
        }
        if (typeof sourceObject[i] == "object") {
          result[i] = merge(sourceObject[i], result[i]);
        } else {
          result[i] = result[i] || sourceObject[i];
        }
      }
      return result;
    }
    function copy(sourceObject, shallowCopy) {
      if (sourceObject == null || typeof sourceObject != "object") {
        return sourceObject;
      }
      var result = new sourceObject.constructor();
      for (var key in sourceObject) {
        if (sourceObject.hasOwnProperty(key)) {
          if (
            shallowCopy === true ||
            sourceObject[key] == null ||
            typeof sourceObject[key] != "object" ||
            sourceObject[key].document
          ) {
            result[key] = sourceObject[key];
          } else {
            result[key] = copy(sourceObject[key]);
          }
        }
      }
      return result;
    }
    function extend(subType, superType) {
      var prototype = object(superType.prototype);
      prototype.constructor = subType;
      subType.prototype = prototype;
    }
    function create(base) {
      var i,
        len,
        strArgums = "",
        argums,
        pBase;
      if (arguments[1] && arguments[1].length) {
        argums = arguments[1];
      } else {
        if (arguments[2] && arguments[2].length) {
          argums = arguments[2];
        }
      }
      if (argums) {
        for (i = 0, len = argums.length; i < len; i++) {
          strArgums += "argums[" + i + "],";
        }
        strArgums = strArgums.slice(0, -1);
      }
      pBase = eval("new base(" + strArgums + ")");
      if (arguments[1] && !arguments[1].length) {
        inherit(pBase, arguments[1]);
        pBase.inheritor = arguments[1];
      } else {
        pBase.init();
      }
      return pBase;
    }
    function inherit(pBase, pChild) {
      var i;
      pChild.prototype = object(pBase);
      for (i in pBase) {
        if (pBase.hasOwnProperty(i)) {
          pChild[i] = pBase[i];
        }
      }
    }
    function object(o) {
      function F() {}
      F.prototype = o;
      return new F();
    }
  }
})(window, WA);
(function (b, a) {
  if (!a.EventHandlers) {
    a.EventHandlers = function (d, c, e) {
      c = c || {};
      this.sender = d;
      this.customHandlers = [];
      this.fired = null;
      this.type = c.type || a.EventHandlers.Type.Short;
    };
    a.EventHandlers.Type = { Long: "long", Short: "short" };
    a.EventHandlers.createHandlers = function (d, c, e) {
      var f = function () {
        a.EventHandlers.call(this, d, c, e);
      };
      a.Object.extend(f, a.EventHandlers);
      return new f();
    };
  }
  a.EventHandlers.prototype.hasSubscribers = function () {
    return this.customHandlers.length > 0;
  };
  a.EventHandlers.prototype.addHandler = function (e, c) {
    c = c || {};
    c.handlerName = c.handlerName || null;
    c.period = c.period || null;
    var f = this.customHandlers,
      d = "";
    if (typeof e != "function") {
      return;
    }
    var g;
    for (g = 0; g < f.length; g++) {
      if (f[g].isDeleted === true) {
        continue;
      }
      if (
        (f[g].handlerName && f[g].handlerName == c.handlerName) ||
        (!f[g].handlerName && f[g].handler == e)
      ) {
        break;
      }
    }
    if (g >= f.length) {
      if (this.fired && !c.isNoLazyFire && c.period == "once") {
        this.doFireHandlers(e, this.sender, this.fired.args);
        return;
      } else {
        f.push({ handler: e, handlerName: c.handlerName, period: c.period });
      }
    }
    if (this.fired && !c.isNoLazyFire) {
      this.doFireHandlers(e, this.sender, this.fired.args);
    }
  };
  a.EventHandlers.prototype.removeHandler = function (e, c) {
    c = c || {};
    c.handlerName = c.handlerName || null;
    var f = this.customHandlers,
      d = "";
    if (f && f.length) {
      var g;
      for (g = 0; g < f.length; g++) {
        if (f[g].isDeleted) {
          continue;
        }
        if (
          (f[g].handlerName && f[g].handlerName == c.handlerName) ||
          (!f[g].handlerName && f[g].handler == e)
        ) {
          f[g] = { isDeleted: true };
          break;
        }
      }
    }
  };
  a.EventHandlers.prototype.doFireHandlers = function (d, h, c) {
    var f = false;
    if ((!f && a.Browser.isIE) || d.runInTryCatch === true) {
      try {
        d(h, c);
      } catch (g) {}
    } else {
      d(h, c);
    }
  };
  a.EventHandlers.prototype.fireHandlers = function (c) {
    c = c || {};
    var f = this.customHandlers,
      j = c.period || null,
      d = "";
    if (this.type == a.EventHandlers.Type.Long) {
      this.fired = { args: c };
    }
    if (f && f.length) {
      var g,
        e,
        h = f.length;
      for (g = 0; g < h; g++) {
        if (typeof f[g].handler == "function") {
          e = f[g].handler;
          if (f[g].period && f[g].period == "once") {
            f[g] = { isDeleted: true };
          }
          this.doFireHandlers(e, this.sender, c);
        }
      }
    }
    if (j == "once") {
      this.disposeHandlers();
    }
    return { sender: this.sender, args: c };
  };
  a.EventHandlers.prototype.removeFired = function () {
    this.fired = null;
  };
  a.EventHandlers.prototype.disposeHandlers = function () {
    var c = this.customHandlers;
    if (c.length == 0) {
      return;
    }
    this.customHandlers.length = 0;
    this.fired = null;
  };
})(window, WA);
(function (d, b, a) {
  if (!b.WaTestFramework) {
    b.WaTestFramework = c;
  }
  function c() {
    var j = this,
      o = "WA.WaTestFramework";
    j.toString = function () {
      return o;
    };
    j.RenderComplete = b.EventHandlers.createHandlers(j, {
      id: "RenderComplete",
    });
    j.Dispose = b.EventHandlers.createHandlers(j, { id: "Dispose" });
    var i = false,
      m = [],
      f;
    j.renderTemplates = k;
    j.resetTests = l;
    j.addTemplate = e;
    j.Mocker = new b.WaTestFramework.Mocker();
    function e(p) {
      n();
      m.push(p);
    }
    function l() {
      j.RenderComplete.disposeHandlers();
      if (f) {
        f.innerHTML = "";
      }
      m.length = 0;
    }
    function k() {
      n();
      if (f === a) {
        f = document.getElementById("wa-test");
        if (!f) {
          f = document.createElement("div");
          f.id = "wa-test";
          document.body.appendChild(f);
        }
      }
      f.innerHTML = m.join("");
      j.RenderComplete.fireHandlers();
    }
    function n() {
      if (f && f.innerHTML.length > 0) {
        throw new Error("call resetTests before usage");
      }
    }
    function h() {}
    function g() {
      if (i) {
        return;
      }
      j.Dispose.fireHandlers();
      j.RenderComplete = null;
      j.Dispose = null;
      i = true;
    }
    h();
  }
})(window, WA);
(function (d, c, b) {
  if (!c.WaTestFramework.Mocker) {
    c.WaTestFramework.Mocker = a;
  }
  function a() {
    var k = this,
      r = "WA.WaTestFramework.Mocker";
    k.toString = function () {
      return r;
    };
    k.Dispose = c.Tools.EventHandlers.createHandlers(k, { id: "Dispose" });
    k.mockNamespace = i;
    k.mockComponentProperty = h;
    k.stubComponentMethods = q;
    k.restore = l;
    var g = false,
      p = {},
      o = {};
    function q(u) {
      var s = d[u],
        t,
        v,
        w;
      if (!s || typeof s !== "function") {
        return;
      }
      w = o[u];
      if (!w) {
        o[u] = w = {};
        w.initialPrototype = s.prototype;
        w.initialSignature = s;
      }
      t = new d[u]();
      v = d[u].prototype;
      delete d[u];
      d[u] = s = function () {};
      j(t, s);
      j(v, s);
    }
    function j(s, y) {
      var t, v, u, w, x;
      v = Object.keys(s);
      for (t = 0, w = v.length; t < w; t++) {
        u = v[t];
        x = s[u];
        if (typeof x === "function") {
          y.prototype[u] = function () {};
        }
      }
    }
    function h(s, v, w) {
      var u = d[s],
        t = o[s];
      if (!u) {
        d[s] = function () {};
      }
      if (!t) {
        o[s] = t = {};
        t.initialPrototype = u !== b ? u.prototype : b;
        t.initialSignature = u;
        d[s] = function () {};
      }
      d[s].prototype[v] = w;
    }
    function i(s, t) {
      p[s] = d[s];
      d[s] = t;
    }
    function l() {
      n();
      m();
    }
    function m() {
      var u,
        w,
        t,
        s,
        v = Object.keys(o);
      for (u = 0, w = v.length; u < w; u++) {
        t = v[u];
        s = o[t];
        if (s.initialSignature !== b && s.initialPrototype !== b) {
          d[t] = s.initialSignature;
          d[t].prototype = s.initialPrototype;
        } else {
          delete d[t];
        }
      }
    }
    function n() {
      var s,
        v,
        t,
        u = Object.keys(p);
      for (s = 0, v = u.length; s < v; s++) {
        t = u[s];
        d[t] = p[t];
        delete p[t];
      }
    }
    function f() {}
    function e() {
      if (g) {
        return;
      }
      k.Dispose.fireHandlers();
      viewModel = null;
      k.Dispose = null;
      g = true;
    }
    f();
  }
})(window, WA);
(function (d, c, b) {
  if (!c.MixPanel) {
    c.MixPanel = a;
  }
  function a(h) {
    var j = this,
      k = "WA.MixPanel",
      l = h;
    j.toString = function () {
      return k;
    };
    var i = false;
    j.dispose = f;
    function e() {
      (function (o, n) {
        if (!n.__SV) {
          var m, p, r, q;
          d.mixpanel = n;
          n._i = [];
          n.init = function (s, v, u) {
            function w(y, z) {
              var x = z.split(".");
              2 == x.length && ((y = y[x[0]]), (z = x[1]));
              y[z] = function () {
                y.push([z].concat(Array.prototype.slice.call(arguments, 0)));
              };
            }
            var t = n;
            "undefined" !== typeof u ? (t = n[u] = []) : (u = "mixpanel");
            t.people = t.people || [];
            t.toString = function (y) {
              var x = "mixpanel";
              "mixpanel" !== u && (x += "." + u);
              y || (x += " (stub)");
              return x;
            };
            t.people.toString = function () {
              return t.toString(1) + ".people (stub)";
            };
            r = "disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(
              " "
            );
            for (q = 0; q < r.length; q++) {
              w(t, r[q]);
            }
            n._i.push([s, v, u]);
          };
          n.__SV = 1.2;
          m = o.createElement("script");
          m.type = "text/javascript";
          m.async = true;
          m.src =
            "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL
              ? MIXPANEL_CUSTOM_LIB_URL
              : "file:" === o.location.protocol &&
                "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)
              ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"
              : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
          p = o.getElementsByTagName("script")[0];
          p.parentNode.insertBefore(m, p);
        }
      })(document, d.mixpanel || []);
    }
    function g() {
      e();
    }
    function f() {
      if (i) {
        return;
      }
      token = null;
      i = true;
    }
    g();
  }
})(window, WA);
(function (c, a) {
  if (!a.WaTools) {
    a.WaTools = b;
  }
  function b() {
    var h = this,
      i = "WA.WaTools";
    h.Dispose = a.EventHandlers.createHandlers(h, { id: "Dispose" });
    h.applyEventModel = d;
    h.disposeEventModel = f;
    function d(m, o) {
      var l;
      o = o || c;
      for (var n in m) {
        if (!m.hasOwnProperty(n)) {
          continue;
        }
        l = o.document.getElementById(n);
        if (l) {
          for (var j in m[n]) {
            if (!m[n].hasOwnProperty(j)) {
              continue;
            }
            var k = j.toLowerCase();
            switch (k) {
              case "onvaluechanged":
                h.PropertyWatcher.register(l, "value", m[n][j], {
                  targetWindow: o,
                });
                break;
              default:
                a.addHandler(l, k, m[n][j]);
                break;
            }
          }
        }
        l = null;
      }
    }
    function f(m, o) {
      o = o || c;
      var l;
      for (var n in m) {
        if (!m.hasOwnProperty(n)) {
          continue;
        }
        l = o.document.getElementById(n);
        if (l) {
          for (var j in m[n]) {
            if (!m[n].hasOwnProperty(j)) {
              continue;
            }
            var k = j.toLowerCase();
            switch (k) {
              case "onvaluechanged":
                h.PropertyWatcher.unregister(l, { targetWindow: o });
                break;
              default:
                a.removeHandler(l, k, m[n][j]);
                break;
            }
          }
        }
        l = null;
      }
      o = null;
    }
    function g() {}
    function e() {
      h.Dispose.fireHandlers();
    }
    g();
  }
})(window, WA);
(function (d, b, a) {
  if (!b.WaArray) {
    b.WaArray = c;
    b.WaArray.TypeName = "WA.WaArray";
  }
  function c() {
    var w = this,
      K = b.WaArray.TypeName;
    w.toString = function () {
      return K;
    };
    w.Dispose = b.Tools.EventHandlers.createHandlers(w, { id: "Dispose" });
    var u = false;
    w.foreach = m;
    w.first = l;
    w.where = L;
    w.select = D;
    w.sum = J;
    w.findFirst = k;
    w.contains = h;
    w.reTestOr = C;
    w.reTestAnd = B;
    w.clone = e;
    w.remove = x;
    w.sort = E;
    w.sortObjectsArray = I;
    w.getObjectByProperty = q;
    w.getObjectsByProperty = r;
    w.convertToDictionary = i;
    w.getHashFromArray = n;
    w.getHashFromArrays = p;
    w.getHashFromArrayObjects = o;
    w.indexOfObjectMatching = s;
    w.removeObjectMatching = A;
    w.removeAllObjectsMatching = y;
    w.removeElement = z;
    function z(M, N, P) {
      var O = M.indexOf(N, P || 0);
      if (O != -1) {
        M.splice(O, 1);
      }
    }
    function y(N, Q, O, M) {
      var P;
      do {
        P = N.length;
        A(N, Q, O, M);
      } while (P != N.length);
    }
    function A(N, Q, P, M) {
      var O = s(N, Q, P, M);
      if (O != -1) {
        N.splice(O, 1);
      }
    }
    function s(N, P, O, M) {
      if (typeof P != "function") {
        throw new Error("testFn has to be a function");
      }
      O = O || 0;
      return N.indexOf(l(N, P, null, M, O), O);
    }
    function m(M, N) {
      var O, P;
      for (O = 0, P = M.length; O < P; O++) {
        N(M[O], O, P);
      }
    }
    function o(M, O) {
      var N,
        P = {};
      for (N = 0; N < M.length; N++) {
        P[M[N][O]] = M[N];
      }
      return P;
    }
    function p(O, Q) {
      var N,
        P,
        M = {};
      for (N = 0, P = O.length; N < P; N++) {
        M[O[N]] = Q[N];
      }
      return M;
    }
    function n(M) {
      var N,
        O = {};
      for (N = 0; N < M.length; N++) {
        O[M[N]] = true;
      }
      return O;
    }
    function i(M, P, R) {
      var Q = {},
        N,
        O;
      for (N = 0, O = M.length; N < O; N++) {
        if (!M[N][P] && M[N][P] != 0) {
          continue;
        }
        Q[M[N][P]] = R ? M[N][R] : M[N];
      }
      return Q;
    }
    function r(M, O, P) {
      return L(M, N, null, { key: O, value: P });
      function N(Q) {
        return Q[O] == P;
      }
    }
    function q(M, N, O) {
      return l(M, v, null, { key: N, value: O });
    }
    function v(N, M) {
      return N[M.key] == M.value;
    }
    function E(M) {
      if (!M.length) {
        return M;
      }
      switch (b.getTypeString(M[0])) {
        case "string":
          return M.sort();
        case "number":
          return M.sort(g);
        case "date":
          return M.sort(f);
        default:
      }
    }
    function I(M, N, P) {
      var Q,
        O = [];
      if (!M.length) {
        return [];
      }
      Q = b.getTypeString(M[0][N]);
      switch (Q) {
        case "string":
          O = H(M, N);
          break;
        case "number":
          O = G(M, N);
          break;
        case "date":
          O = F(M, N);
          break;
        default:
      }
      return P ? O.reverse() : O;
    }
    function g(M, N) {
      return M - N;
    }
    function f(M, N) {
      return M.getTime() - N.getTime();
    }
    function G(M, O) {
      M.sort(N);
      function N(P, Q) {
        return g(P[O], Q[O]);
      }
      return M;
    }
    function F(M, O) {
      M.sort(N);
      function N(P, Q) {
        return f(P[O], Q[O]);
      }
      return M;
    }
    function H(M, O) {
      M.sort(N);
      function N(P, Q) {
        return P[O].localeCompare(Q[O]);
      }
      return M;
    }
    function x(M, N, P) {
      var O = M.slice((P || N) + 1 || M.length);
      M.length = N < 0 ? M.length + N : N;
      M.push.apply(M, O);
      return M;
    }
    function e(M) {
      var O = [];
      for (var N = 0; N < M.length; N++) {
        O.push(M[N]);
      }
      return O;
    }
    function B(N, O) {
      for (var M = 0; M < N.length; M++) {
        if (!N[M].test(O)) {
          return false;
        }
      }
      return true;
    }
    function C(N, O) {
      for (var M = 0; M < N.length; M++) {
        if (N[M].test(O)) {
          return true;
        }
      }
      return false;
    }
    function h(M, N) {
      return M.indexOf(N) != -1;
    }
    function k(M, O, N) {
      return M[M.indexOf(O, N)];
    }
    function l(N, P, O, M, Q) {
      var R, S;
      if (typeof P == "function") {
        for (R = Q || 0, S = N.length; R < S; R++) {
          if (P(N[R], M)) {
            return N[R];
          }
        }
      }
      return O;
    }
    function L(M, N) {
      var Q = [],
        O,
        P;
      for (O = 0, P = M.length; O < P; O++) {
        if (N(M[O], O)) {
          Q.push(M[O]);
        }
      }
      return Q;
    }
    function D(M, N) {
      var Q = [],
        O,
        P;
      for (O = 0, P = M.length; O < P; O++) {
        Q.push(N(M[O], O, P));
      }
      return Q;
    }
    function J(M, N) {
      var Q = D(M, N),
        R = 0,
        O,
        P;
      for (O = 0, P = Q.length; O < P; O++) {
        R += Q[O];
      }
      return R;
    }
    function t() {}
    function j() {
      if (u) {
        return;
      }
      w.Dispose.fireHandlers();
      w.Dispose = null;
      u = true;
    }
    t();
  }
})(window, WA);
(function (d, b, a) {
  if (!b.WaAssociationUrlConverter) {
    b.WaAssociationUrlConverter = c;
    b.WaAssociationUrlConverter.TypeName = "WA.WaAssociationUrlConverter";
  }
  function c(m, l) {
    l = l || {};
    var r = this,
      v = b.WaAssociationUrlConverter.TypeName,
      u = {
        A: "href",
        AREA: "href",
        IMG: "src",
        EMBED: "src",
        IFRAME: "src",
        SCRIPT: "src",
        TABLE: "background",
      },
      q = 2083,
      f;
    r.toString = function () {
      return v;
    };
    var o = false;
    function n(w) {
      if (o) {
        b.Log.add(v, w);
      }
    }
    r.convertUrls = g;
    function k() {
      f = h();
    }
    function h() {
      return document.createElement("DIV");
    }
    function g(x, w) {
      f.innerHTML = x;
      w = [].concat(w);
      b.Array.foreach(w, function (z, A) {
        w[A] = z.toLowerCase();
      });
      var y = e(f, w);
      return s(f.innerHTML, y, w);
    }
    function e(B, A) {
      var I = [];
      var z = new RegExp("://(?:" + A.join("|") + ")", "i");
      var w = [];
      for (var H in u) {
        w.push(H);
      }
      var G = B.querySelectorAll(w.join(", "));
      var C, F, E, D, E, x, y;
      for (C = 0, F = G.length; C < F; C++) {
        E = G[C];
        x = u[E.tagName];
        y = E.getAttribute(x);
        if (!y || y.length > q || !z.test(y)) {
          continue;
        }
        D = j();
        I.push({ id: D, link: E.getAttribute(x) });
        E.setAttribute(x, D);
      }
      G = B.querySelectorAll('*[style*="url("]');
      for (C = 0, F = G.length; C < F; C++) {
        E = G[C];
        y = E.style.backgroundImage;
        if (!y || y.length > q || !z.test(y)) {
          continue;
        }
        D = j();
        I.push({ id: D, link: y });
        E.style.backgroundImage = "url('" + D + "')";
      }
      return I;
    }
    function s(A, z, w) {
      var x, y;
      for (x = 0, y = z.length; x < y; x++) {
        A = A.replace(z[x].id, p(z[x].link, w));
      }
      return A;
    }
    function p(z, w) {
      var y = z.indexOf("url(") > -1,
        x = i(z.toLowerCase(), w);
      if (y) {
        z = t(z, x);
        x = i(z, w);
      }
      z = z.substr(x.idx + x.len).trim();
      if (z == "") {
        z = "/";
      }
      return z;
    }
    function i(B, x) {
      var z, A, y, w;
      for (z = 0, A = x.length; z < A; z++) {
        y = B.indexOf(x[z]);
        if (y > -1) {
          w = x[z].length;
          break;
        }
      }
      return { idx: y, len: w };
    }
    function t(w, x) {
      w = w.substr(x.idx, w.length - x.idx - 1);
      w = w.trim();
      if (w.lastIndexOf("'") == w.length - 1) {
        return w.substr(0, w.length - 1);
      }
      if (w.lastIndexOf('"') == w.length - 1) {
        return w.substr(0, w.length - 1);
      }
      if (w.lastIndexOf("&quot;") == w.length - 6) {
        return w.substr(0, w.length - 6);
      }
      return w;
    }
    function j() {
      function w() {
        return Math.floor((1 + Math.random()) * 65536)
          .toString(16)
          .substring(1);
      }
      return (
        "data:image/png;base64," + w() + w() + w() + w() + w() + w() + w() + w()
      );
    }
    k();
  }
})(window, WA);
(function (d, c, b) {
  if (!c.AssciationUrlConverterModule) {
    c.AssciationUrlConverterModule = a;
    c.AssciationUrlConverterModule.TypeName = "WA.AssciationUrlConverterModule";
  }
  function a(g, f) {
    f = f || {};
    var h = this,
      i = c.AssciationUrlConverterModule.TypeName;
    h.toString = function () {
      return i;
    };
    h.getAdditionalDomainNames = e;
    function e() {
      return c.AdminPanel && !c.AdminPanel.isDisposed()
        ? c.AdminPanel.getPanelResources().AccountDomainNames
        : c.topWindow.location.host;
    }
  }
})(window, WA);
(function (d, b, a) {
  if (!b.WaBrowser) {
    b.WaBrowser = c;
    b.WaBrowser.TypeName = "WA.WaBrowser";
  }
  function c() {
    var h = this,
      l = b.WaBrowser.TypeName;
    h.toString = function () {
      return l;
    };
    var m = navigator.userAgent,
      e = ["", "-webkit-", "-moz-", "-o-", "-ms-", ""],
      j = {};
    h.isCssStyleSupported = g;
    function g(s) {
      s = s.toLowerCase();
      if (j.hasOwnProperty(s)) {
        return j[s];
      }
      var o = document.createElement("div"),
        n = document.documentElement;
      switch (s) {
        case "pointer-events":
          if (!("pointerEvents" in o.style)) {
            j[s] = false;
            break;
          }
          o.style.pointerEvents = "auto";
          o.style.pointerEvents = "x";
          n.appendChild(o);
          j[s] = !(
            d.getComputedStyle &&
            d.getComputedStyle(o, "").pointerEvents === "auto"
          );
          n.removeChild(o);
          break;
        case "gradient":
          var p = "background-image:",
            q = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            r = "linear-gradient(left top,#9f9, white);";
          o.style.cssText = (
            p +
            "-webkit- ".split(" ").join(q + p) +
            e.join(r + p)
          ).slice(0, -p.length);
          j[s] = o.style.backgroundImage.indexOf("gradient") != -1;
          break;
        default:
          o.style.cssText = e.join(s + ";");
          j[s] = k(o, s);
          break;
      }
      return j[s];
    }
    function k(n, r) {
      var p = e.join(r + " "),
        o,
        q;
      p = p.replace(/^-ms-/, "ms-");
      p = p.replace(/-([\da-z])/gi, i);
      p = p.split(" ");
      for (o = 0, q = p.length - 2; o < q; o++) {
        if (n.style[p[o]] !== a) {
          return true;
        }
      }
      return false;
    }
    function i(n, o) {
      return o.toUpperCase();
    }
    function f() {
      h.isIE =
        document.all && d.clientInformation
          ? parseInt(
              d.clientInformation.userAgent.substr(
                d.clientInformation.userAgent.indexOf("MSIE ") + 5,
                3
              )
            )
          : 0;
      h.isMSIE = navigator.appName == "Microsoft Internet Explorer";
      h.isMSIE5 = h.isMSIE && m.indexOf("MSIE 5") != -1;
      h.isMSIE5_0 = h.isMSIE && m.indexOf("MSIE 5.0") != -1;
      h.isMSIE7 = h.isMSIE && m.indexOf("MSIE 7") != -1;
      h.isMSIE8 = h.isMSIE && m.indexOf("MSIE 8") != -1;
      h.isMSIE9 = h.isMSIE && m.indexOf("MSIE 9") != -1;
      h.isMSIE10 = navigator.appVersion.indexOf("MSIE 10") !== -1;
      h.isMSIE11 = m.indexOf("Trident") !== -1 && m.indexOf("rv:11") !== -1;
      h.isEdge = m.indexOf("Edge/") !== -1;
      h.isSafari = m.indexOf("Safari") != -1;
      h.isOpera = m.indexOf("Opera") != -1;
      h.isGecko = m.indexOf("Gecko") != -1 && !h.isSafari && !h.isOpera;
      h.isWebKit =
        m.indexOf("WebKit") != -1 && d.devicePixelRatio ? true : false;
      h.matchWebKitVer = h.isWebKit
        ? m.match(/[\s\S]*?(?:Version|Chrome)\/(\d+)\.?(\d*)\.?(\d*)[\s\S]*/i)
        : null;
      h.webKitVer =
        h.matchWebKitVer && h.matchWebKitVer[1] ? h.matchWebKitVer[1] : 5;
      h.webKitVer1 =
        h.matchWebKitVer && h.matchWebKitVer[2] ? h.matchWebKitVer[2] : 0;
      h.webKitVer2 =
        h.matchWebKitVer && h.matchWebKitVer[3] ? h.matchWebKitVer[3] : 0;
      h.isWebKit =
        h.isWebKit &&
        ((m.indexOf("Version/") != -1 &&
          h.webKitVer == 4 &&
          ((h.webKitVer1 == 0 && h.webKitVer2 >= 4) || h.webKitVer1 > 0)) ||
          h.webKitVer > 4 ||
          (m.indexOf("Chrome/") != -1 && h.webKitVer >= 3))
          ? true
          : false;
      h.isWebKitSafari = h.isWebKit && m.indexOf("Version/") != -1;
      h.isWebKitChrome =
        h.isWebKit && (m.indexOf("Chrome/") != -1 || m.indexOf("CriOS/") != -1);
      h.isOnBeforeUnloadEnabled =
        !h.isWebKit ||
        (h.isWebKit &&
          ((m.indexOf("Version/") != -1 && h.webKitVer >= 5) ||
            h.webKitVer >= 7));
      h.isMac = m.indexOf("Mac") != -1;
      h.isNS7 = m.indexOf("Netscape/7") != -1;
      h.isNS71 = m.indexOf("Netscape/7.1") != -1;
      h.isTouchEventsSupported = !!(
        "ontouchstart" in d ||
        (d.DocumentTouch && document instanceof DocumentTouch) ||
        (navigator.msPointerEnabled && navigator.msMaxTouchPoints)
      );
      if (/Firefox\/(\S+)/.test(m)) {
        h.Version = RegExp["$1"];
        h.Firefox = parseFloat(h.Version);
      }
      h.isCssStyleSupported = g;
      h.hasWorkingPointerEvents =
        h.isCssStyleSupported("pointer-events") && !h.isIE;
      h.pointerEventsCursorFixHalfWidth = 4;
      h.pointerEventsCursorFixOffset = h.pointerEventsCursorFixHalfWidth + 1;
      h.dragDropEvent = {
        eStart: "mousedown",
        eMove: "mousemove",
        eEnd: "mouseup",
      };
    }
    f();
  }
})(window, WA);
(function (d, b, a) {
  if (!b.WaDate) {
    b.WaDate = c;
    b.WaDate.TypeName = "WA.WaDate";
    b.WaDate.DateFormat = {
      MMddyyyySlash: "mm/dd/yyyy",
      dMMyyyySlash: "dd/mm/yyyy",
      dMMMyyyySpace: "d mmm yyyy",
      ddMMyyyyDot: 'dd"."mm"."yyyy',
      ddMMyyyyHyphen: "dd-mm-yyyy",
      ddMMMyyyySpace: "dd mmm yyyy",
      ddMMMyyyyHyphen: "dd-mmm-yyyy",
      yyyyMMddHyphen: "yyyy-mm-dd",
      ddddMMMMddyyyy: 'dddd"," mmmm dd"," yyyy',
      dddMMMMddyyyy: 'ddd"," mmmm dd"," yyyy',
      MMMMddyyyy: 'mmmm dd"," yyyy',
      ddMMMMyyyy: "dd mmmm yyyy",
    };
    b.WaDate.TimeFormat = { h24: "HH:MM", h12: "h:MM tt" };
    b.WaDate.WeekDayIndex = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };
    b.WaDate.DaysOfTheWeekBitMasks = [
      1 << 0,
      1 << 1,
      1 << 2,
      1 << 3,
      1 << 4,
      1 << 5,
      1 << 6,
    ];
    b.WaDate.SecondsInMinute = 60;
    b.WaDate.MinutesInHour = 60;
    b.WaDate.HoursInDay = 24;
    b.WaDate.MsInSecond = 1000;
    b.WaDate.MsInMinute = b.WaDate.SecondsInMinute * b.WaDate.MsInSecond;
    b.WaDate.SecondsInHour = b.WaDate.MinutesInHour * b.WaDate.SecondsInMinute;
    b.WaDate.MsInHour = b.WaDate.SecondsInHour * b.WaDate.MsInSecond;
    b.WaDate.SecondsInDay = b.WaDate.HoursInDay * b.WaDate.SecondsInHour;
    b.WaDate.MsInDay = b.WaDate.SecondsInDay * b.WaDate.MsInSecond;
    b.WaDate.DaysInWeek = 7;
    b.WaDate.MonthsInYear = 12;
    b.WaDate.I18N = {
      DayNames: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sundays",
        "Mondays",
        "Tuesdays",
        "Wednesdays",
        "Thursdays",
        "Fridays",
        "Saturdays",
      ],
      MonthNames: [
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
      MonthWeekNumbers: [
        "1st",
        "2nd",
        "3rd",
        "4th",
        "5th",
        "6th",
        "first",
        "second",
        "third",
        "fourth",
        "fifth",
        "sixth",
        "first",
        "second",
        "third",
        "fourth",
        "last",
        "last",
      ],
    };
  }
  function c() {
    var D = this,
      F = b.WaDate.TypeName;
    D.toString = function () {
      return F;
    };
    D.Dispose = b.Tools.EventHandlers.createHandlers(D, { id: "Dispose" });
    var C = false,
      m;
    D.getDateOnlyUtcTicks = p;
    D.getDateTimeUtcTicks = q;
    D.format = l;
    D.getCalendarMask = o;
    D.getBitMaskFromDaysOfTheWeekArray = n;
    D.getDaysOfTheWeekArrayFromBitMask = t;
    D.getDaysFromMilliseconds = r;
    D.getMillisecondsFromDays = x;
    D.shiftWeekDaysArray = E;
    D.getFullYearsBetweenUtcMs = w;
    D.getFullMonthsBetweenUtcMs = u;
    D.getFullWeeksBetweenUtcMs = v;
    D.addDaysToUtcMilliseconds = e;
    D.addYearsToUtcMilliseconds = i;
    D.addMonthsToUtcMilliseconds = f;
    D.addMonthsToUtcMillisecondsByWeekDay = g;
    D.addWeeksToUtcMilliseconds = h;
    D.getDaysInMonth = s;
    D.countWeeksInMonth = j;
    D.getMonthWeekIndex = y;
    D.getWeekDayIndexFromUtcMs = A;
    function A(G) {
      return new Date(G).getUTCDay();
    }
    function y(G, N) {
      var K = N ? "getUTC" : "get",
        O = G[K + "Day"](),
        Q = G[K + "FullYear"](),
        I = G[K + "Date"](),
        M = G[K + "Month"](),
        J = s(Q, M),
        L,
        H,
        P = 0;
      for (L = 1; L <= J; L++) {
        H = new Date(Q, M, L);
        if (H.getDay() == O) {
          if (L == I) {
            return P;
          }
          P++;
        }
      }
    }
    function z(G) {
      return y(new Date(G), true);
    }
    function s(H, G) {
      return new Date(H, G + 1, 0).getDate();
    }
    function j(K, I) {
      var G = new Date(K, I, 1),
        H = new Date(K, I + 1, 0),
        J = G.getDay() + H.getDate();
      return Math.ceil(J / 7);
    }
    function h(G, H) {
      return G + H * b.WaDate.MsInDay * b.WaDate.DaysInWeek;
    }
    function g(Q, O, H) {
      var P = new Date(Q),
        R = P.getUTCDay(),
        S = z(Q),
        N = f(Q, O, H, true),
        M = new Date(N),
        T = M.getUTCFullYear(),
        L = M.getUTCMonth(),
        J = s(M.getUTCFullYear(), M.getUTCMonth()),
        K,
        I,
        G = 0;
      if (S < 4) {
        for (K = 1; K <= J; K++) {
          I = new Date(T, L, K);
          if (R == I.getUTCDay()) {
            if (S == G) {
              return H ? p(I) : q(I);
            }
            G++;
          }
        }
      } else {
        for (K = J; K >= 1; K--) {
          I = new Date(T, L, K);
          if (R == I.getUTCDay()) {
            return H ? p(I) : q(I);
          }
        }
      }
      throw new Error("Unable to find date.");
    }
    function f(L, I, H, G) {
      var K = new Date(L),
        J = new Date(L);
      J.setMonth(K.getMonth() + I);
      if (G && J.getDate() != K.getDate()) {
        J = new Date(
          J.getFullYear(),
          J.getMonth(),
          0,
          J.getHours(),
          J.getMinutes(),
          J.getSeconds(),
          J.getMilliseconds()
        );
      }
      return H ? p(J) : q(J);
    }
    function i(K, L, H, G) {
      var J = new Date(K),
        I = new Date(K);
      I.setFullYear(I.getFullYear() + L);
      if (G && I.getMonth() != J.getMonth()) {
        I = new Date(
          I.getFullYear(),
          I.getMonth(),
          0,
          I.getHours(),
          I.getMinutes(),
          I.getSeconds(),
          I.getMilliseconds()
        );
      }
      return H ? p(I) : q(I);
    }
    function e(H, G) {
      return H + x(G);
    }
    function v(H, G) {
      return Math.floor(
        Math.abs(G - H) / (b.WaDate.MsInDay * b.WaDate.DaysInWeek)
      );
    }
    function u(J, G) {
      var K = new Date(J),
        H = new Date(G),
        I = (H.getUTCFullYear() - K.getUTCFullYear()) * b.WaDate.MonthsInYear;
      I -= K.getUTCMonth();
      I += H.getUTCMonth();
      I -=
        parseInt(l(K, "mddHHMMssl", true), 10) <=
        parseInt(l(H, "mddHHMMssl", true), 10)
          ? 0
          : 1;
      return I;
    }
    function w(H, G) {
      return Math.abs(new Date(G - H).getUTCFullYear() - 1970);
    }
    function E(G, H) {
      if (H == b.WaDate.WeekDayIndex.Sunday) {
        return G;
      }
      return G.slice(H).concat(G.slice(0, H));
    }
    function x(G) {
      return G * b.WaDate.MsInDay;
    }
    function r(H, G) {
      return G
        ? Math.ceil(H / b.WaDate.MsInDay)
        : Math.floor(H / b.WaDate.MsInDay);
    }
    function n(K) {
      var G,
        H = K.length,
        I = b.WaDate.DaysOfTheWeekBitMasks,
        J = 0;
      for (G = 0; G < H; G++) {
        if (K[G]) {
          J |= I[G];
        }
      }
      return J;
    }
    function t(G) {
      var H,
        J = b.WaDate.DaysOfTheWeekBitMasks,
        I = J.length,
        K = [];
      for (H = 0; H < I; H++) {
        K.push(!!(J[H] & G));
      }
      return K;
    }
    function o(G) {
      return m.getCalendarMask(G);
    }
    function l(G, I, H) {
      return m.format(G, I, H);
    }
    function q(G) {
      if (!G) {
        return null;
      }
      return G.getTime();
    }
    function p(G) {
      if (!G) {
        return null;
      }
      return Date.UTC(G.getFullYear(), G.getMonth(), G.getDate());
    }
    function B() {
      m = new b.WaDate.Formatter({}, { parentComponent: D });
    }
    function k() {
      if (C) {
        return;
      }
      D.Dispose.fireHandlers();
      m = null;
      D.Dispose = null;
      C = true;
    }
    B();
  }
})(window, WA);
(function (d, c, b) {
  if (!c.WaDate.Formatter) {
    c.WaDate.Formatter = a;
  }
  function a(l, k) {
    k = k || {};
    var n = this,
      o = "WA.WaDate.Formatter",
      p = l,
      m = k.parentComponent;
    n.toString = function () {
      return o;
    };
    n.Dispose = c.Tools.EventHandlers.createHandlers(n, { id: "Dispose" });
    n.format = h;
    n.getCalendarMask = i;
    var f;
    function h(q, s, r) {
      return f(q, s, r);
    }
    function e() {
      f = (function () {
        var t = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|w{1,3}|"[^"]*"|'[^']*'/g,
          r = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
          s = /[^-+\dA-Z]/g,
          q = function (v, u) {
            v = String(v);
            u = u || 2;
            while (v.length < u) {
              v = "0" + v;
            }
            return v;
          };
        return function (z, I, N) {
          var A = f;
          if (
            arguments.length == 1 &&
            Object.prototype.toString.call(z) == "[object String]" &&
            !/\d/.test(z)
          ) {
            I = z;
            z = b;
          }
          z = new Date(z);
          if (isNaN(z)) {
            z = new Date();
          }
          I = String(A.masks[I] || I || A.masks["default"]);
          if (I.slice(0, 4) == "UTC:") {
            I = I.slice(4);
            N = true;
          }
          var u = N ? "getUTC" : "get",
            v = z[u + "Date"](),
            x = z[u + "Day"](),
            F = z[u + "Month"](),
            P = z[u + "FullYear"](),
            C = z[u + "Hours"](),
            G = z[u + "Minutes"](),
            K = z[u + "Seconds"](),
            E = z[u + "Milliseconds"](),
            J = N ? 0 : z.getTimezoneOffset(),
            O = m.getMonthWeekIndex(z, N),
            B = {
              d: v,
              dd: q(v),
              ddd: A.i18n.DayNames[x],
              dddd: A.i18n.DayNames[x + 7],
              D: A.i18n.DayNames[x + 14],
              m: F + 1,
              mm: q(F + 1),
              mmm: A.i18n.MonthNames[F],
              mmmm: A.i18n.MonthNames[F + 12],
              yy: String(P).slice(2),
              yyyy: P,
              h: C % 12 || 12,
              hh: q(C % 12 || 12),
              H: C,
              HH: q(C),
              M: G,
              MM: q(G),
              s: K,
              ss: q(K),
              l: q(E, 3),
              L: q(E > 99 ? Math.round(E / 10) : E),
              t: C < 12 ? "a" : "p",
              tt: C < 12 ? "am" : "pm",
              T: C < 12 ? "A" : "P",
              TT: C < 12 ? "AM" : "PM",
              Z: N ? "UTC" : (String(z).match(r) || [""]).pop().replace(s, ""),
              o:
                (J > 0 ? "-" : "+") +
                q(Math.floor(Math.abs(J) / 60) * 100 + (Math.abs(J) % 60), 4),
              S: ["th", "st", "nd", "rd"][
                v % 10 > 3 ? 0 : (((v % 100) - (v % 10) != 10) * v) % 10
              ],
              w: A.i18n.MonthWeekNumbers[O],
              ww: A.i18n.MonthWeekNumbers[O + 6],
              www: A.i18n.MonthWeekNumbers[O + 12],
            };
          return I.replace(t, function (w) {
            return w in B ? B[w] : w.slice(1, w.length - 1);
          });
        };
      })();
      f.masks = {
        default: "ddd mmm dd yyyy HH:MM:ss",
        shortDate: "m/d/yy",
        mediumDate: "mmm d, yyyy",
        longDate: "mmmm d, yyyy",
        fullDate: "dddd, mmmm d, yyyy",
        shortTime: "h:MM TT",
        mediumTime: "h:MM:ss TT",
        longTime: "h:MM:ss TT Z",
        isoDate: "yyyy-mm-dd",
        isoTime: "HH:MM:ss",
        isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
        isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
      };
      f.i18n = c.WaDate.I18N;
    }
    function i(r) {
      var s = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        q = {
          d: "%e",
          dd: "%d",
          ddd: "%a",
          dddd: "%A",
          m: "%o",
          mm: "%m",
          mmm: "%b",
          mmmm: "%B",
          yy: "%y",
          yyyy: "%Y",
          h: "%l",
          hh: "%I",
          H: "%k",
          HH: "%H",
          M: "%M",
          MM: "%M",
          s: "%S",
          ss: "%S",
          l: "",
          L: "",
          t: "%P",
          tt: "%P",
          T: "%p",
          TT: "%p",
          Z: "",
          o: "",
          S: "%e",
        };
      return r.replace(s, function (t) {
        return t in q ? q[t] : t.slice(1, t.length - 1);
      });
    }
    function j() {
      e();
      m.Dispose.addHandler(g);
    }
    function g() {
      n.Dispose.fireHandlers();
      m.Dispose.removeHandler(g);
      p = null;
      m = null;
      n.Dispose = null;
    }
    j();
  }
})(window, WA);
(function (d, b, a) {
  if (!b.WaDevice) {
    b.WaDevice = c;
    b.WaDevice.TypeName = "WA.WaDevice";
  }
  function c() {
    var g = this,
      h = b.WaDevice.TypeName;
    g.toString = function () {
      return h;
    };
    function e() {
      var i = b.Window.getWindowSizes();
      g.isPortrait = i.clientHeight / i.clientWidth > 1;
      g.isLandscape = !g.isPortrait;
      b.addHandler(d, g.isOrientationEvent, e);
    }
    function f() {
      var i = d.navigator.userAgent.toLowerCase(),
        j;
      g.isIPhone = i.indexOf("iphone") !== -1;
      g.isIPad = i.indexOf("ipad") !== -1;
      g.isIPod = i.indexOf("ipod") !== -1;
      g.isIOS = g.isIPhone || g.isIPad || g.isIPod;
      if (g.isIOS) {
        j = i.match(/os\s+(\d+)_(\d+)(?:_(\d+))?\s+like\s+mac\s+os/i);
        if (j && j.length > 3) {
          g.iOSVersion = [j[1], j[2], j[3] || 0];
        } else {
          g.iOSVersion = [8, 1, 0];
        }
      }
      g.isAndroid = i.indexOf("android") !== -1;
      g.isAndroidPhone = g.isAndroid && i.indexOf("mobile") !== -1;
      g.isaAndroidTablet = g.isAndroid && i.indexOf("mobile") === -1;
      g.isBlackberry =
        i.indexOf("blackberry") !== -1 &&
        i.indexOf("bb10") !== -1 &&
        i.indexOf("rim") !== -1;
      g.isBlackberryPhone = g.isBlackberry && i.indexOf("tablet") === -1;
      g.isBlackberryTablet = g.isBlackberry && i.indexOf("tablet") !== -1;
      g.isWindows = i.indexOf("windows") !== -1;
      g.isWindowsPhone = g.isWindows && i.indexOf("phone") !== -1;
      g.isWindowsTablet =
        g.isWindows && i.indexOf("touch") !== -1 && !g.isWindowsPhone;
      g.isFFOS =
        (i.indexOf("(mobile;") !== -1 || i.indexOf("(tablet;") !== -1) &&
        i.indexOf("; rv:") !== -1;
      g.isFFOSPhone = g.isFFOS && i.indexOf("mobile") !== -1;
      g.isFFOSTablet = g.isFFOS && i.indexOf("tablet") !== -1;
      g.isMeeGo = i.indexOf("meego") !== -1;
      g.isCordova = d.cordova && location.protocol === "file:";
      g.isNodeWebkit = typeof d.process === "object";
      g.isPhone =
        g.isIPhone ||
        g.isIPod ||
        g.isAndroid ||
        g.isBlackberryPhone ||
        g.isWindowsPhone ||
        g.isFFOSPhone ||
        g.isMeeGo;
      g.isTablet =
        g.isIPad ||
        g.isaAndroidTablet ||
        g.isBlackberryTablet ||
        g.isWindowsTablet ||
        g.isFFOSTablet;
      g.isMobile = g.isPhone || g.isTablet;
      g.isDesktop = !g.isMobile;
      g.isPortrait =
        "innerWidth" in d && "innerHeight" in d
          ? d.innerHeight / d.innerWidth > 1
          : true;
      g.isLandscape = !g.isPortrait;
      g.isSupportsOrientation = "onorientationchange" in d;
      g.isOrientationEvent = g.isSupportsOrientation
        ? "orientationchange"
        : "resize";
      g.isTouchEventsSupported = b.Browser.isTouchEventsSupported;
      b.addPageStateHandler(b.PAGE_PARSED, e);
    }
    f();
  }
})(window, WA);
(function (d, b, a) {
  if (!b.WaDimensions) {
    b.WaDimensions = c;
    b.WaDimensions.TypeName = "WA.WaDimensions";
  }
  function c() {
    var t = this,
      u = b.WaDimensions.TypeName;
    t.toString = function () {
      return u;
    };
    t.Dispose = b.Tools.EventHandlers.createHandlers(t, { id: "Dispose" });
    var q = false;
    t.getXY = o;
    t.getElementBox = h;
    t.getViewport = m;
    t.isRectInViewport = s;
    t.getWindowAbsScroll = n;
    t.getElementXY = l;
    t.getElementScreenXY = k;
    t.getElementAbsXY = f;
    t.getElementAutoAbsXY = g;
    t.getElementRelXY = j;
    t.getElementRect = i;
    function i(w, N) {
      N = N || d;
      var C,
        F,
        J,
        v,
        A,
        L,
        B,
        M,
        K = m(N),
        H = K.scrollTop,
        G = K.scrollLeft,
        I,
        E,
        D,
        O,
        P;
      if (w.getBoundingClientRect) {
        if (typeof i.offset != "number") {
          I = N.document.createElement("div");
          I.style.cssText = "position:absolute;left:0;top:0;";
          N.document.body.appendChild(I);
          i.offset = -I.getBoundingClientRect().top - H;
          N.document.body.removeChild(I);
          I = null;
        }
        try {
          E = w.getBoundingClientRect();
        } catch (z) {
          E = [0, 0];
        }
        D = i.offset;
        C = E.left + D + G;
        F = E.right + D + G;
        J = E.top + D + H;
        v = E.bottom + D + H;
        A = v - J;
        L = F - C;
        B = J + (A >> 1);
        M = C + (L >> 1);
        return {
          left: C,
          right: F,
          top: J,
          bottom: v,
          height: A,
          width: L,
          heightCenter: B,
          widthCenter: M,
          viewport: K,
        };
      } else {
        D = o(w);
        O = D.x;
        P = D.y;
        C = O - G;
        F = O + w.offsetWidth - G;
        J = P - H;
        v = P + w.offsetHeight - H;
        A = v - J;
        L = F - C;
        B = J + (A >> 1);
        M = C + (L >> 1);
        return {
          left: C,
          right: F,
          top: J,
          bottom: v,
          height: A,
          width: L,
          heightCenter: B,
          widthCenter: M,
          viewport: K,
        };
      }
    }
    function j(w, B, z, A, v) {
      var x = f(w, B),
        y = f(z, A);
      if (v && v.allowNegative) {
        return {
          X: x.X - y.X,
          Y: x.Y - y.Y,
          left: x.left - y.left,
          right: x.right - y.left,
          top: x.top - y.top,
          bottom: x.bottom - y.bottom,
          width: x.width,
          height: x.height,
        };
      }
      return {
        X: Math.abs(x.X - y.X),
        Y: Math.abs(x.Y - y.Y),
        left: Math.abs(x.left - y.left),
        right: Math.abs(x.right - y.left),
        top: Math.abs(x.top - y.top),
        bottom: Math.abs(x.bottom - y.bottom),
        width: x.width,
        height: x.height,
      };
    }
    function f(v, z) {
      z = z || d;
      var y = l(v, z),
        x,
        w;
      y.viewport = m(b.topWindow);
      while (z != z.parent) {
        x = b.Dom.getFrameByWindow(z);
        if (x != null) {
          w = l(x, z.parent);
        }
        if (w) {
          y.X += w.X;
          y.Y += w.Y;
          y.left += w.left;
          y.right += w.left;
          y.top += w.top;
          y.bottom += w.top;
          y.deltaScrollX += w.deltaScrollX;
          y.deltaScrollY += w.deltaScrollY;
        }
        z = z.parent;
      }
      return y;
    }
    function g(w) {
      var v = w.ownerDocument,
        x = v.defaultView || v.parentWindow;
      return f(w, x);
    }
    function k(z, E, v) {
      E = E || d;
      v = v || {};
      var B,
        D,
        A,
        w = v.container || null,
        C = o(z, w),
        F = C.x - C.root.scrollLeft,
        G = C.y - C.root.scrollTop;
      C = null;
      z.X = F;
      z.Y = G;
      B = z.nodeName.toUpperCase() == "BODY";
      D = B
        ? b.Window.getInnerWidth(E) + b.Window.getScrollBarWidth()
        : z.offsetWidth;
      A = B
        ? b.Window.getInnerHeight(E) + b.Window.getScrollBarWidth()
        : z.offsetHeight;
      return {
        X: F,
        Y: G,
        left: F,
        top: G,
        right: F + D,
        bottom: G + A,
        width: D,
        height: A,
      };
    }
    function l(B, G, v) {
      if (!B) {
        return {
          X: 0,
          Y: 0,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          width: 0,
          height: 0,
          deltaScrollX: 0,
          deltaScrollY: 0,
        };
      }
      G = G || d;
      v = v || {};
      var D,
        F,
        C,
        z,
        A,
        w = v.container || null,
        E = o(B, w),
        H = E.x,
        I = E.y;
      E = null;
      B.X = H;
      B.Y = I;
      D = B.nodeName.toUpperCase() == "BODY";
      F = D
        ? b.Window.getInnerWidth(G) + b.Window.getScrollBarWidth()
        : B.offsetWidth;
      C = D
        ? b.Window.getInnerHeight(G) + b.Window.getScrollBarWidth()
        : B.offsetHeight;
      z = H - (w ? w.scrollLeft : b.Window.getScrollLeft(G));
      A = I - (w ? w.scrollTop : b.Window.getScrollTop(G));
      return {
        X: H,
        Y: I,
        left: H,
        top: I,
        right: H + F,
        bottom: I + C,
        width: F,
        height: C,
        deltaScrollX: z,
        deltaScrollY: A,
      };
    }
    function n(x) {
      var y = x,
        v = { X: 0, Y: 0 };
      while (y != y.parent) {
        v.X += y.scrollX || y.pageXOffset || 0;
        v.Y += y.scrollY || y.pageYOffset || 0;
        y = y.parent;
      }
      return v;
    }
    function s(v, w) {
      v.isVisible = r(v.topLeft, w) && r(v.bottomRight, w);
      return v.isVisible;
    }
    function r(v, w) {
      if (typeof v.x != "number" || typeof v.y != "number") {
        throw new Error("Invalid point parametes");
      }
      if (v.x < 0 || v.x > w.width + w.scrollLeft || v.x < w.scrollLeft) {
        v.isVisible = false;
        return false;
      }
      if (v.y < 0 || v.y > w.height + w.scrollTop || v.y < w.scrollTop) {
        v.isVisible = false;
        return false;
      }
      v.isVisible = true;
      return true;
    }
    function m(x) {
      x = x || d;
      var w = b.Window.getScrollTop(x),
        v = b.Window.getScrollLeft(x);
      return x.document.compatMode == "BackCompat"
        ? {
            width: x.document.body.clientWidth,
            height: x.document.body.clientHeight,
            scrollTop: w,
            scrollLeft: v,
          }
        : {
            width: x.document.documentElement.clientWidth,
            height: x.document.documentElement.clientHeight,
            scrollTop: w,
            scrollLeft: v,
          };
    }
    function h(w, A) {
      A = A || d;
      var y,
        x,
        z = [
          "marginLeft",
          "marginRight",
          "marginTop",
          "marginBottom",
          "borderLeftWidth",
          "borderRightWidth",
          "borderTopWidth",
          "borderBottomWidth",
          "paddingLeft",
          "paddingRight",
          "paddingTop",
          "paddingBottom",
          "width",
          "height",
        ],
        v = b.Style.getElementStyles(w, z, A, true);
      v.deltaLeft = v.marginLeft + v.borderLeftWidth + v.paddingLeft;
      v.deltaInnerLeft = v.borderLeftWidth + v.paddingLeft;
      v.deltaRight = v.marginRight + v.borderRightWidth + v.paddingRight;
      v.deltaInnerRight = v.borderRightWidth + v.paddingRight;
      v.deltaTop = v.marginTop + v.borderTopWidth + v.paddingTop;
      v.deltaInnerTop = v.borderTopWidth + v.paddingTop;
      v.deltaBottom = v.marginBottom + v.borderBottomWidth + v.paddingBottom;
      v.deltaInnerBottom = v.borderBottomWidth + v.paddingBottom;
      v.deltaWidth = v.deltaLeft + v.deltaRight;
      v.deltaInnerWidth = v.deltaInnerLeft + v.deltaInnerRight;
      v.deltaHeight = v.deltaTop + v.deltaBottom;
      v.deltaInnerHeight = v.deltaInnerTop + v.deltaInnerBottom;
      v.realWidth = v.width + v.marginLeft + v.marginRight;
      v.realHeight = v.height + v.marginTop + v.marginBottom;
      if (w) {
        y = w.offsetWidth;
        x = w.offsetHeight;
        v.scrollWidth = w.scrollWidth;
        v.scrollHeight = w.scrollHeight;
        v.offsetWidth = y;
        v.offsetHeight = x;
        v.innerOffsetWidth = y - v.deltaInnerWidth;
        v.innerOffsetHeight = x - v.deltaInnerHeight;
        v.realOffsetWidth = y + v.marginLeft + v.marginRight;
        v.realOffsetHeight = x + v.marginTop + v.marginBottom;
      } else {
        v.scrollWidth = 0;
        v.scrollHeight = 0;
        v.offsetWidth = 0;
        v.offsetHeight = 0;
        v.innerOffsetWidth = 0;
        v.innerOffsetHeight = 0;
        v.realOffsetWidth = 0;
        v.realOffsetHeight = 0;
      }
      return v;
    }
    function o(w, v) {
      if (!w) {
        return { x: 0, y: 0, root: null };
      }
      var B = w.offsetLeft || 0,
        C = w.offsetTop || 0,
        z = w.offsetParent,
        v = v || null,
        A = w;
      while (z && z !== v) {
        B += z.offsetLeft;
        C += z.offsetTop;
        A = z;
        z = z.offsetParent;
      }
      w.X = B;
      w.Y = C;
      return { x: B, y: C, root: A };
    }
    function p() {}
    function e() {
      if (q) {
        return;
      }
      t.Dispose.fireHandlers();
      t.Dispose = null;
      q = true;
    }
    p();
  }
})(window, WA);
(function (d, b, a) {
  if (!b.WaDom) {
    b.WaDom = c;
    b.WaDom.TypeName = "WA.WaDom";
  }
  function c() {
    var C = this,
      F = b.WaDom.TypeName;
    C.toString = function () {
      return F;
    };
    C.Dispose = b.Tools.EventHandlers.createHandlers(C, { id: "Dispose" });
    var z = false;
    C.$ = e;
    C.$c = g;
    C.$$ = f;
    C.getEventTagsAttribute = o;
    C.getDatasetAttrName = n;
    C.getDataset = m;
    C.getFirstChildByTagName = p;
    C.getFirstParentByTagName = q;
    C.getNextSiblingByTagName = s;
    C.getPreviousSiblingByTagName = u;
    C.getTagName = v;
    C.getNodeName = t;
    C.isDOMElement = A;
    C.containsDomNode = k;
    C.parseHTML = B;
    C.addStyle = i;
    C.getFrameByWindow = r;
    C.insertAdjacentHTML = x;
    C.containsClassName = j;
    C.addClassName = h;
    C.removeClassName = D;
    function D(I, H) {
      if (!I) {
        return;
      }
      if (I.classList) {
        I.classList.remove(H);
        return;
      }
      var G = I.className.split(/\s+/),
        L = -1;
      for (var J = 0, K = G.length; J < K; J++) {
        if (G[J] == H) {
          L = J;
          break;
        }
      }
      if (L != -1) {
        G.splice(J, 1);
        I.className = G.join(" ");
      }
    }
    function h(I, H) {
      if (!I || j(I, H)) {
        return;
      }
      if (I.classList) {
        I.classList.add(H);
        return;
      }
      var G = I.className.split(/\s+/);
      G.push(H);
      I.className = G.join(" ");
    }
    function j(H, G) {
      if (!H) {
        return false;
      }
      if (H.classList) {
        return H.classList.contains(G);
      }
      return H.className.split(/\s+/).indexOf(G) >= 0;
    }
    function x(G, H, I) {
      if (G.insertAdjacentHTML) {
        G.insertAdjacentHTML(I || "beforeEnd", H);
        return;
      }
      y(G, H, I);
    }
    function y(H, J, L) {
      var I = document.createDocumentFragment(),
        M = document.createElement("DIV"),
        G,
        K;
      M.innerHTML = J;
      G = M.firstChild;
      while (G) {
        K = G.nextSibling;
        I.appendChild(G);
        G = K;
      }
      switch (L.toLowerCase()) {
        case "beforebegin":
          H.parentNode.insertBefore(I, H);
          break;
        case "afterbegin":
          H.insertBefore(I, H.firstChild);
          break;
        case "afterend":
          if (H.nextSibling) {
            H.parentNode.insertBefore(I, H.nextSibling);
            break;
          }
          H.parentNode.appendChild(I);
          break;
        default:
          H.appendChild(I);
          break;
      }
      I = M = G = K = null;
    }
    function r(O) {
      var J, M, I, K, L, N;
      try {
        J = O.parent.document.getElementsByTagName("IFRAME");
      } catch (G) {
        return null;
      }
      M = J.length;
      I = null;
      N = b.getLocationDomain();
      for (L = 0; L < M; L++) {
        try {
          if (!J[L].src || J[L].src.toLowerCase().indexOf(N) === 0) {
            K = b.Browser.isIE
              ? J[L].contentWindow
              : J[L].contentDocument.defaultView;
            if (K == O) {
              return J[L];
            }
          }
        } catch (H) {
          continue;
        }
      }
      return null;
    }
    function i(G, K) {
      K = K || d;
      var J = K.document.createElement("style"),
        I = K.document.getElementsByTagName("head")[0];
      J.type = "text/css";
      try {
        J.appendChild(K.document.createTextNode(G));
      } catch (H) {
        J.styleSheet.cssText = G;
      }
      I.appendChild(J);
    }
    function B(H, G) {
      G = G || {};
      var J,
        Q,
        K,
        P,
        M = G.idPrefix != null ? G.idPrefix : "id",
        L = G.idPostfix != null ? G.idPostfix : "id",
        U,
        S,
        T,
        R,
        V = G.structure || {},
        N = G.isParseClasses || false,
        O = G.isSetLevel || false,
        I = H.getElementsByTagName("*");
      if (!("parseTags" in V)) {
        V.parseTags = {};
      }
      if (N && !("parseClasses" in V)) {
        V.parseClasses = {};
      }
      for (J = I.length; J--; ) {
        K = I[J].id;
        if (
          (M != null && K.indexOf(M) === 0) ||
          (L != null && K.indexOf(L) == K.length - L.length)
        ) {
          P =
            K.slice(M.length, M.length + 1).toLowerCase() +
            K.slice(M.length + 1, -1 - L.length);
          V[P] = I[J];
        }
        U = I[J].getAttribute("parseTags", 0);
        if (U) {
          S = U.split(/\s+/);
          for (Q = S.length; Q--; ) {
            if (!(S[Q] in V.parseTags)) {
              V.parseTags[S[Q]] = [];
            }
            V.parseTags[S[Q]].push(I[J]);
          }
        }
        if (N) {
          T = I[J].getAttribute("class", 0);
          if (T) {
            R = T.split(/\s+/);
            for (Q = R.length; Q--; ) {
              if (!(R[Q] in V.parseClasses)) {
                V.parseClasses[R[Q]] = [];
              }
              V.parseClasses[R[Q]].push(I[J]);
            }
          }
        }
      }
      if (O) {
        H.setAttribute("nodeLevel", 0, 0);
        if (H.firstChild) {
          E(H.firstChild, 1);
        }
      }
      return V;
    }
    function E(G, H) {
      while (G) {
        while (G && G.nodeType !== 1) {
          G = G.nextSibling;
        }
        if (G) {
          G.setAttribute("nodeLevel", H, 0);
          if (G.firstChild) {
            E(G.firstChild, H + 1);
          }
          G = G.nextSibling;
        }
      }
    }
    function k(I, H) {
      if (
        typeof I.contains == "function" &&
        (!b.Browser.isWebKit || b.Browser.webKitVersion >= 522)
      ) {
        return I.contains(H);
      } else {
        if (typeof I.compareDocumentPosition == "function") {
          return !!(I.compareDocumentPosition(H) & 16);
        } else {
          var G = H.parentNode;
          do {
            if (G === I) {
              return true;
            } else {
              G = G.parentNode;
            }
          } while (G !== null);
          return false;
        }
      }
    }
    function A(G) {
      return !!G.nodeType;
    }
    function t(G) {
      return G.nodeName.toUpperCase();
    }
    function v(G) {
      return G.tagName.toUpperCase();
    }
    function u(G, J) {
      var H = J ? ("|" + J.split(/\,/).join("|") + "|").toUpperCase() : "",
        I = G.previousSibling;
      while (
        I &&
        H.indexOf("|" + I.nodeName.toUpperCase() + "|") == -1 &&
        (H || I.nodeType != 1)
      ) {
        I = I.previousSibling;
      }
      return I &&
        (H.indexOf("|" + I.nodeName.toUpperCase() + "|") != -1 ||
          (!H && I.nodeType == 1))
        ? I
        : null;
    }
    function s(G, J) {
      var H = J ? ("|" + J.split(/\,/).join("|") + "|").toUpperCase() : "",
        I = G.nextSibling;
      while (
        I &&
        H.indexOf("|" + I.nodeName.toUpperCase() + "|") == -1 &&
        (H || I.nodeType != 1)
      ) {
        I = I.nextSibling;
      }
      return I &&
        (H.indexOf("|" + I.nodeName.toUpperCase() + "|") != -1 ||
          (!H && I.nodeType == 1))
        ? I
        : null;
    }
    function q(G, I) {
      var H = G.parentNode;
      while (H && H.nodeName.toUpperCase() != I.toUpperCase()) {
        H = H.parentNode;
      }
      return H && H.nodeName.toUpperCase() == I.toUpperCase() ? H : null;
    }
    function p(H, I) {
      var G = H.firstChild;
      while (G && G.nodeName.toUpperCase() != I.toUpperCase()) {
        G = G.nextSibling;
      }
      return G && G.nodeName.toUpperCase() == I.toUpperCase() ? G : null;
    }
    function m(J) {
      if (J.dataset) {
        return J.dataset;
      }
      var I = {},
        H = J.attributes,
        K,
        L,
        M,
        G;
      for (K = 0, L = H.length; K < L; K++) {
        G = H[K];
        if (/^data-/.test(G.name)) {
          M = n(G.name);
          I[M] = G.value;
        }
      }
      return I;
    }
    function n(G) {
      if (G.substr(0, 5).toLowerCase() != "data-") {
        return G;
      }
      return G.substr(5).replace(/-(.)/g, function (I, H) {
        return H.toUpperCase();
      });
    }
    function o(G) {
      return G.getAttribute(b.eventTagsAttribute, 0);
    }
    function f(P, N, Q) {
      Q = Q ? Q.window || Q : d;
      var J,
        K,
        G,
        M,
        O = [],
        L = P ? P.split(".") : ["*"],
        H,
        I;
      N = N ? (typeof N == "string" ? e(N, Q) : N) : Q.document;
      H = N.getElementsByTagName(L[0] ? L[0] : "*");
      if (L.length == 1) {
        for (J = 0, I = H.length; J < I; J++) {
          O.push(H[J]);
        }
        return O;
      }
      for (J = 0, I = H.length; J < I; J++) {
        G = H[J].className;
        for (K = 1; K < L.length; K++) {
          M = L[K];
          if (G.indexOf(M) == -1) {
            break;
          } else {
            if (
              !(
                (L.length == 2 && G.indexOf(" ") == -1 && G == M) ||
                new RegExp("(?:^|\\s+)" + M + "(?:\\s+|$)").test(G)
              )
            ) {
              break;
            }
          }
        }
        if (K == L.length) {
          O.push(H[J]);
        }
      }
      return O;
    }
    function e(G, H) {
      H = H || d;
      return H.document.getElementById(G);
    }
    function g(G) {
      return e(G, b.topWindow.contentarea);
    }
    function w() {}
    function l() {
      if (z) {
        return;
      }
      C.Dispose.fireHandlers();
      C.Dispose = null;
      z = true;
    }
    w();
  }
})(window, WA);
(function (d, c, b) {
  if (!c.Localization) {
    c.Localization = a;
  }
  function a() {
    var l = this,
      m = "WA.Localization";
    l.toString = function () {
      return m;
    };
    l.Dispose = c.Tools.EventHandlers.createHandlers(l, { id: "Dispose" });
    var k = false,
      f = "en";
    l.get = i;
    l.dispose = h();
    function i(n, q) {
      var o = g(n),
        p = new c.Res[o.culture][q]();
      if (!p) {
        throw new Error("cannot get localization resources");
      }
      return p;
    }
    function g(n) {
      if (c.SupportedCultures.hasOwnProperty(n)) {
        return c.SupportedCultures[n];
      }
      return c.SupportedCultures[f];
    }
    function e() {
      c.Res = {};
      var n;
      for (n in c.SupportedCultures) {
        if (!c.SupportedCultures.hasOwnProperty(n)) {
          continue;
        }
        c.Res[c.SupportedCultures[n].culture] = {};
      }
    }
    function j() {
      e();
    }
    function h() {
      if (k) {
        return;
      }
      l.Dispose.fireHandlers();
      l.Dispose = null;
      k = true;
    }
    j();
  }
})(window, WA);
(function (c, b, a) {
  if (b.SupportedCultures) {
    return;
  }
  b.SupportedCultures = { en: { display: "En", culture: "en" } };
})(window, WA);
(function (d, b, a) {
  if (!b.WaNumber) {
    b.WaNumber = c;
    b.WaNumber.TypeName = "WA.WaNumber";
  }
  function c() {
    var j = this,
      l = b.WaNumber.TypeName;
    j.toString = function () {
      return l;
    };
    j.Dispose = b.Tools.EventHandlers.createHandlers(j, { id: "Dispose" });
    var i = false;
    j.format = g;
    j.toFixed = k;
    j.complement = e;
    function e(u, p, o) {
      o = o || "0";
      var q,
        t = u,
        r = t ? 0 : 1,
        v = "";
      while (t > 0) {
        t = Math.floor(t / 10);
        r++;
      }
      if (p > r) {
        for (q = p - r; q--; ) {
          v += o;
        }
      }
      return v + u;
    }
    function k(m, n) {
      return parseFloat(m.toFixed(n));
    }
    function g(p, r, t) {
      r = r || 0;
      t = t || ",";
      var s = Math.abs(p).toFixed(r).toString(),
        m = s.indexOf("."),
        o = m >= 0 ? m : s.length,
        q = o % 3 || 3,
        n = (o - q) / 3;
      while (n--) {
        s = s.substr(0, q) + t + s.substr(q);
        q += 4;
      }
      return (p < 0 ? "-" : "") + s;
    }
    function h() {}
    function f() {
      if (i) {
        return;
      }
      j.Dispose.fireHandlers();
      j.Dispose = null;
      i = true;
    }
    h();
  }
})(window, WA);
(function (d, b, a) {
  if (!b.WaPrice) {
    b.WaPrice = c;
    b.WaPrice.TypeName = "WA.WaPrice";
  }
  function c() {
    var i = this,
      k = b.WaPrice.TypeName;
    i.toString = function () {
      return k;
    };
    i.Dispose = b.Tools.EventHandlers.createHandlers(i, { id: "Dispose" });
    var h = false;
    i.roundCurrency = j;
    i.format = f;
    function f(n, m, l) {
      var o = b.Number.format(Math.abs(n), 2, ",");
      m = m || "";
      o = (n < 0 ? "-" : "") + m + o;
      if (l && l != "") {
        o = o + " (" + l + ")";
      }
      return o;
    }
    function j(q, p) {
      var o = Math.round(q * 100 + 1 / 10000000) / 100,
        l = 1 / 100,
        m,
        n;
      if (!p || Math.abs(o) <= Math.abs(q)) {
        return o;
      }
      m = Math.abs(q) - Math.abs(o) + l;
      n = Math.floor(m * 1000);
      if (n != 5) {
        return o;
      }
      n = Math.round(m * 1000);
      if (n != 5 || (o * 100) % 2 == 0) {
        return o;
      }
      return o > 0 ? o - l : o + l;
    }
    function g() {}
    function e() {
      if (h) {
        return;
      }
      i.Dispose.fireHandlers();
      i.Dispose = null;
      h = true;
    }
    g();
  }
})(window, WA);
(function (d, b, a) {
  if (!b.WaString) {
    b.WaString = c;
    b.WaString.TypeName = "WA.WaString";
    b.WaString.DefaultCharsToTrim = "\\s";
  }
  function c() {
    var p = this,
      q = b.WaString.TypeName;
    p.toString = function () {
      return q;
    };
    p.Dispose = b.Tools.EventHandlers.createHandlers(p, { id: "Dispose" });
    var o = false,
      f = b.WaString.DefaultCharsToTrim;
    p.gtrim = m;
    p.gltrim = k;
    p.grtrim = l;
    p.escapeRegexp = h;
    p.formatNamed = j;
    p.capitaliseFirstLetter = e;
    p.format = i;
    function i(v, r) {
      var u = v,
        t;
      for (var s = 1; s < arguments.length; s++) {
        if (b.Browser.isWebKit) {
          t = new RegExp("\\{" + (s - 1) + "\\}", "gi");
          u = u.replace(t, arguments[s]);
        } else {
          u = u.split("{" + (s - 1) + "}").join(arguments[s]);
        }
      }
      return u;
    }
    function e(r) {
      if (!r) {
        return "";
      }
      return r.charAt(0).toUpperCase() + r.slice(1);
    }
    function j(v, r) {
      var u = v,
        t,
        w;
      for (var s in r) {
        if (r.hasOwnProperty(s)) {
          w = r[s] || r[s] == 0 ? r[s] : "";
          t = new RegExp("\\{" + s + "\\}", "gi");
          u = u.replace(t, w);
        }
      }
      return u;
    }
    function h(r) {
      return r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    }
    function m(t, r) {
      r = r || f;
      var s = new RegExp("^[" + r + "]*|[" + r + "]*$", "ig");
      return t.replace(s, "");
    }
    function k(t, r) {
      r = r || f;
      var s = new RegExp("^[" + r + "]*", "ig");
      return t.replace(s, "");
    }
    function l(t, r) {
      r = r || f;
      var s = new RegExp("[" + r + "]*$", "ig");
      return t.replace(s, "");
    }
    function n() {}
    function g() {
      if (o) {
        return;
      }
      p.Dispose.fireHandlers();
      p.Dispose = null;
      o = true;
    }
    n();
  }
})(window, WA);
(function (d, b, a) {
  if (!b.WaStyle) {
    b.WaStyle = c;
    b.WaStyle.TypeName = "WA.WaStyle";
  }
  function c() {
    var q = this,
      r = b.WaNumber.WaStyle;
    q.toString = function () {
      return r;
    };
    q.Dispose = b.Tools.EventHandlers.createHandlers(q, { id: "Dispose" });
    var p = false;
    q.getElementStyles = l;
    q.getElementStyle = j;
    q.getElementStyleStrictInt = m;
    q.getElementStyleInt = k;
    q.getElementRealBackground = i;
    q.currentStyleUnitNormalizer = e;
    q.currentStyleValueNormalizer = f;
    function i(w, x) {
      var t = {},
        v,
        u;
      do {
        t.backgroundColor = j(w, "backgroundColor", x);
        if (!t.backgroundColor) {
          break;
        }
        u = j(w, "backgroundImage", x);
        if (u && u.toLowerCase() !== "none") {
          t = l(
            w,
            [
              "backgroundRepeat",
              "backgroundPosition",
              "backgroundSize",
              "backgroundAttachment",
              "backgroundOrigin",
              "backgroundClip",
            ],
            x
          );
          t.backgroundImage = u;
        }
        v = (t.backgroundColor || "").replace(/\s+/g, "").toLowerCase();
        w = w.parentNode;
      } while (
        w &&
        w.nodeType === 1 &&
        (v === "rgba(0,0,0,0)" || v === "transparent")
      );
      return t;
    }
    function j(v, t, x) {
      x = d;
      var u,
        y = null;
      try {
        if (!v || !v.nodeType) {
          return null;
        }
      } catch (w) {
        return null;
      }
      if (v.nodeType === 9 && v.body) {
        v = v.body;
      }
      if (
        x.document &&
        x.getComputedStyle &&
        typeof x.getComputedStyle === "function" &&
        v.nodeType === 1
      ) {
        u = x.getComputedStyle(v, null);
        if (u == null && v.style) {
          u = v.style;
        }
        y = u ? u[t] : null;
      } else {
        if (v.currentStyle && v.nodeType === 1) {
          y = v.currentStyle[t];
          if (typeof y === "string") {
            y = y.replace(/(\d+\.?\d*|\.\d+)(em|pt|%)/i, function (z, A, C) {
              var B = parseFloat(A);
              switch (C.toLowerCase()) {
                case "em":
                  B *= 13.333;
                  break;
                case "pt":
                  B *= 1.3333;
                  break;
                case "%":
                  B *= 0.1333;
                  break;
              }
              return Math.round(B) + "px";
            });
          }
        }
      }
      return y;
    }
    function s(t) {
      return t || null;
    }
    function o(t) {
      return parseInt(t, 10) || 0;
    }
    function e(v, u) {
      var t = parseFloat(v);
      switch (u.toLowerCase()) {
        case "em":
          t *= 13.333;
          break;
        case "pt":
          t *= 1.3333;
          break;
        case "%":
          t *= 0.1333;
          break;
      }
      return t;
    }
    function h(t, u, v) {
      return Math.round(e(u, v)) + "px";
    }
    function f(t) {
      if (typeof t !== "string") {
        return t;
      }
      return t.replace(/(\d+\.?\d*|\.\d+)(em|pt|%)/i, h);
    }
    function l(y, t, D, v) {
      D = d;
      var u,
        E = {},
        B,
        C,
        w,
        G,
        z,
        x = v ? 0 : null,
        F = v ? o : s;
      for (B = 0, C = t.length; B < C; B++) {
        w = t[B];
        E[w] = x;
      }
      try {
        if (!y) {
          return E;
        }
        z = y.nodeType;
        if (!z) {
          return E;
        }
      } catch (A) {
        return E;
      }
      if (z === 9 && y.body) {
        y = y.body;
        z = y.nodeType;
      }
      if (z === 1) {
        if (D.document && typeof D.getComputedStyle === "function") {
          u = D.getComputedStyle(y, null);
          if (u == null) {
            u = y.style;
          }
          G = s;
        } else {
          u = y.currentStyle;
          G = f;
        }
      }
      if (u) {
        for (B = 0, C = t.length; B < C; B++) {
          w = t[B];
          E[w] = F(G(u[w]));
        }
      }
      return E;
    }
    function m(w, t, x) {
      var u = j(w, t, x),
        v = u != null ? parseInt(u) : null;
      return isNaN(v) ? null : v;
    }
    function k(v, t, w) {
      var u = m(v, t, w);
      return u === null ? 0 : u;
    }
    function n() {}
    function g() {
      if (p) {
        return;
      }
      q.Dispose.fireHandlers();
      q.Dispose = null;
      p = true;
    }
    n();
  }
})(window, WA);
(function (d, b, a) {
  if (!b.WaUrl) {
    b.WaUrl = c;
    b.WaUrl.TypeName = "WA.WaUrl";
  }
  function c() {
    var n = this,
      o = b.WaPrice.WaUrl;
    n.toString = function () {
      return o;
    };
    n.Dispose = b.Tools.EventHandlers.createHandlers(n, { id: "Dispose" });
    var l = false;
    n.parse = m;
    n.build = f;
    n.addQueryStringArgs = e;
    n.encodeUriEx = h;
    n.getQueryKeysArray = j;
    n.getParentUrl = i;
    function i(r) {
      var q = m(r),
        p = b.String.gtrim(q.path, "/").split("/");
      p.length = p.length - 1;
      q.path = "/" + p.join("/");
      q.queryKeys = {};
      q.anchor = "";
      return f(q);
    }
    function j(s) {
      var r = m(s),
        q = [],
        p;
      for (p in r.queryKeys) {
        if (r.queryKeys.hasOwnProperty(p)) {
          q.push(p);
        }
      }
      return q;
    }
    function h(p) {
      if (!p) {
        return "";
      }
      return encodeURIComponent(p).replace(/(?:\!|\*|\(|\)|\')/g, function (q) {
        return "%" + q.charCodeAt(0).toString(16);
      });
    }
    function m(u, v) {
      var v = v === true,
        q = [
          "source",
          "protocol",
          "authority",
          "userInfo",
          "user",
          "password",
          "host",
          "port",
          "relative",
          "path",
          "directory",
          "file",
          "query",
          "anchor",
        ],
        s = { name: "queryKeys", parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
        r = {
          strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
          loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        },
        w = {},
        p,
        t;
      t = r[v ? "strict" : "loose"].exec(u);
      for (p = q.length; p--; ) {
        w[q[p]] = t[p] ? decodeURIComponent(t[p]) : "";
      }
      w[s.name] = {};
      w.query.replace(s.parser, function (x, y, z) {
        if (y) {
          w[s.name][y] = z;
        }
      });
      return w;
    }
    function f(t) {
      var q,
        p,
        s = t.queryKeys || {},
        r = [];
      for (p in s) {
        if (s.hasOwnProperty(p)) {
          r.push(encodeURIComponent(p) + "=" + encodeURIComponent(s[p]));
        }
      }
      q = r.join("&");
      return (
        (t.protocol ? t.protocol + "://" : "") +
        (t.user ? t.user + (t.password ? ":" + t.password : "") + "@" : "") +
        (t.host || "") +
        (t.port ? ":" + t.port : "") +
        (t.path || "") +
        (q ? "?" + q : "") +
        (t.anchor ? "#" + t.anchor : "")
      );
    }
    function e(t, p, s) {
      s = s !== false;
      var r = m(t),
        q;
      for (q in p) {
        if (p.hasOwnProperty(q)) {
          if (!s && r.queryKeys.hasOwnProperty(q)) {
            continue;
          }
          r.queryKeys[q] = p[q];
        }
      }
      return f(r);
    }
    function k() {}
    function g() {
      if (l) {
        return;
      }
      n.Dispose.fireHandlers();
      n.Dispose = null;
      l = true;
    }
    k();
  }
})(window, WA);
(function (d, b, a) {
  if (!b.WaWebFormsValidator) {
    b.WaWebFormsValidator = c;
    b.WaWebFormsValidator.TypeName = "WA.WaWebFormsValidator";
  }
  function c() {
    var h = this,
      i = b.WaWebFormsValidator.TypeName;
    h.toString = function () {
      return i;
    };
    h.Dispose = b.Tools.EventHandlers.createHandlers(h, { id: "Dispose" });
    var g = false;
    h.validatePriceType = k;
    h.validatePriceTypeAllowZero = m;
    h.validatePriceTypeAllowNegatives = l;
    function k(o, n) {
      n.IsValid = j(n.Value, false, false);
      return n.IsValid;
    }
    function m(o, n) {
      n.IsValid = j(n.Value, true, false);
      return n.IsValid;
    }
    function l(o, n) {
      n.IsValid = j(n.Value, true, true);
      return n.IsValid;
    }
    function j(y, o, n) {
      var r = parseFloat("922337203685477.5807");
      var s = /^\s*-?(\d+\,?)*\.?\d*$/;
      var t = /^\s*\((\d+\,?)*\.?\d*\)$/;
      if (y.search(s) == -1 && y.search(t) == -1) {
        return false;
      }
      var x, u, p;
      var v = -1,
        w = -1;
      x = "";
      p = y;
      u = 0;
      while (u < p.length && (p.charAt(u) == "(" || p.charAt(u) == " ")) {
        u++;
      }
      if (p.charAt(u - 1) == "(") {
        x += "-";
      }
      while (u < p.length) {
        if (p.charAt(u) != "," && p.charAt(u) != ")") {
          x += p.charAt(u);
        }
        u++;
      }
      if (p.charAt(0) == "-" && !n) {
        return false;
      }
      if (p == "") {
        return true;
      }
      var q = parseFloat(x);
      if (isNaN(q)) {
        return false;
      }
      if (q > r) {
        return false;
      }
      if (q < parseFloat("0.01") && !o) {
        return false;
      }
      return true;
    }
    function f() {
      h.ExtraChargeCalculation = new b.CalculatedExtraChargeValidator({
        parentComponent: h,
      });
    }
    function e() {
      if (g) {
        return;
      }
      h.Dispose.fireHandlers();
      h.Dispose = null;
      g = true;
    }
    f();
  }
})(window, WA);
(function (d, c, b) {
  if (!c.CalculatedExtraChargeValidator) {
    c.CalculatedExtraChargeValidator = a;
    c.CalculatedExtraChargeValidator.TypeName =
      "WA.CalculatedExtraChargeValidator";
    c.CalculatedExtraChargeValidator.MultiplierType = {
      Undefined: "0",
      Currency: "1",
      Percentage: "2",
    };
    c.CalculatedExtraChargeValidator.AttName = {
      MinAmount: "data-minAmount",
      MaxAmount: "data-maxAmount",
      Multiplier: "data-multiplier",
      MultiplierType: "data-multiplierType",
      MultiplierString: "data-multiplierString",
      AmountTemplate: "data-extraCostAmountTemplate",
      ZeroValueErrorMessage: "data-extraCostZeroErrorMessage",
      MinAmountErrorMessage: "data-extraCostMinAmountErrorMessage",
      MaxAmountErrorMessage: "data-extraCostMaxAmountErrorMessage",
      CurrencySymbol: "data-currencySymbol",
      CurrencyCode: "data-currencyCode",
      ExtraCostAmountClientId: "data-extraCostAmountClientId",
      WrongAmountTemplate: "data-wrongAmountTemplate",
      AdminMode: "data-adminMode",
    };
    c.CalculatedExtraChargeValidator.EventTag = {
      EditControl: "CalculatedExtraChargeEditControl",
      ExtraCostAmount: "CalculatedExtraChargeAmount",
      AmountValidator: "CalculatedExtraChargeAmountValidator",
    };
  }
  function a(m) {
    m = m || {};
    var t = this,
      z = c.CalculatedExtraChargeValidator.TypeName,
      s = m.parentComponent;
    t.toString = function () {
      return z;
    };
    var n = 922337203685477.6,
      p = c.CalculatedExtraChargeValidator.MultiplierType,
      g = c.CalculatedExtraChargeValidator.AttName,
      j = c.CalculatedExtraChargeValidator.EventTag,
      D = 200,
      e,
      o = 9;
    t.validate = A;
    function A(I, F) {
      F = F || {};
      var G = I.getAttribute(g.MultiplierType, 0),
        J = k(I),
        H = parseInt(F.Value, 10);
      if (isNaN(H) || H < 0) {
        H = 0;
      }
      F.validatorData = J;
      F.normalizedValue = H;
      switch (G) {
        case p.Currency:
          return B(I, F);
        case p.Percentage:
          return E(I, F);
        default:
      }
    }
    function v(I) {
      if (!I) {
        return;
      }
      var H = I.value,
        G = H.replace(/[^0-9]/g, ""),
        F,
        J;
      if (G.length > o) {
        G = G.substr(0, o);
      }
      if (H !== G) {
        F = c.getSelectionStartIndex(I, c.topWindow.contentarea);
        J = G.length - H.length;
        I.value = G;
        if (F > 0) {
          c.setSelectionStartIndex(I, F + J, c.topWindow.contentarea);
        }
      }
      return G;
    }
    function E(K, G) {
      var L = G.validatorData,
        J = G.normalizedValue,
        I = null,
        H = L.minAmountErrorMessage,
        F = (J * L.multiplier) / 100;
      if (J < 1 && G.Value !== "") {
        K.innerHTML = K.errormessage = L.zeroValueErrorMessage;
        K.style.display = "inline";
        G.IsValid = !!L.isAdminMode || false;
        y(K, L, F, I, H);
        return G.IsValid;
      }
      K.style.display = "none";
      K.innerHTML = K.errormessage = "";
      G.IsValid = true;
      if (F < L.minAmount) {
        I = L.minAmount;
      } else {
        if (F > L.maxAmount) {
          I = L.maxAmount;
          H = L.maxAmountErrorMessage;
        }
      }
      y(K, L, F, I, H);
      return G.IsValid;
    }
    function y(L, M, F, J, H) {
      var I,
        G = c.Price.format(F, M.currencySymbol, M.currencyCode),
        K;
      if (!J || F <= 0) {
        I = c.String.format(M.amountTemplate, M.multiplierString, G);
      } else {
        G = c.String.format(M.wrongAmountTemplate, G);
        K = c.Price.format(J, M.currencySymbol, M.currencyCode);
        I = c.String.format(H, M.multiplierString, G, K);
      }
      x(L, I);
    }
    function B(I, F) {
      var J = F.validatorData,
        H = F.normalizedValue,
        G;
      w(I, J, H);
      if (F.Value === "") {
        I.style.display = "none";
        I.innerHTML = I.errormessage = "";
        F.IsValid = true;
        return F.IsValid;
      }
      if (H <= 0 && J.minAmount <= 0) {
        I.innerHTML = I.errormessage = J.zeroValueErrorMessage;
        I.style.display = "inline";
        F.IsValid = !!J.isAdminMode || false;
        return F.IsValid;
      }
      G = H >= J.minAmount && H <= J.maxAmount;
      F.IsValid = !!J.isAdminMode || G;
      if (!G) {
        if (H < J.minAmount) {
          I.innerHTML = I.errormessage = J.minAmountErrorMessage;
        } else {
          I.innerHTML = I.errormessage = J.maxAmountErrorMessage;
        }
        I.style.display = "inline";
      } else {
        I.style.display = "none";
        I.innerHTML = I.errormessage = "";
      }
      return F.IsValid;
    }
    function w(H, I, G) {
      var F = c.String.format(
        I.amountTemplate,
        I.multiplierString,
        c.Price.format(I.multiplier * G, I.currencySymbol, I.currencyCode)
      );
      x(H, F);
    }
    function k(J) {
      var G = parseFloat(J.getAttribute(g.MinAmount, 0)),
        F = parseFloat(J.getAttribute(g.MaxAmount, 0)),
        H = parseFloat(J.getAttribute(g.Multiplier, 0)),
        I;
      G = isNaN(G) || G < 0 ? 0 : G;
      F = isNaN(F) || F <= 0 ? n : F;
      H = isNaN(H) || H < 0 ? 0 : H;
      if (G > 0 && F > 0 && G > F) {
        I = G;
        G = F;
        F = I;
      }
      return {
        minAmount: G,
        maxAmount: F,
        multiplier: H,
        multiplierString: J.getAttribute(g.MultiplierString, 0) || "",
        amountTemplate: J.getAttribute(g.AmountTemplate, 0) || "",
        zeroValueErrorMessage: J.getAttribute(g.ZeroValueErrorMessage, 0) || "",
        minAmountErrorMessage: J.getAttribute(g.MinAmountErrorMessage, 0) || "",
        maxAmountErrorMessage: J.getAttribute(g.MaxAmountErrorMessage, 0) || "",
        currencySymbol: J.getAttribute(g.CurrencySymbol, 0) || "",
        currencyCode: J.getAttribute(g.CurrencyCode, 0) || "",
        extraCostAmountClientId:
          J.getAttribute(g.ExtraCostAmountClientId, 0) || "",
        wrongAmountTemplate: J.getAttribute(g.WrongAmountTemplate, 0) || "",
        isAdminMode: !!J.getAttribute(g.AdminMode, 0) || false,
      };
    }
    function x(H, G) {
      var F = H.parentNode.querySelector(
        "[" + c.eventTagsAttribute + '="' + j.ExtraCostAmount + '"]'
      );
      if (F) {
        F.innerHTML = G;
      }
    }
    function C() {
      if (!e) {
        return;
      }
      var F = e.parentNode.querySelector(
        "[" + c.eventTagsAttribute + '="' + j.AmountValidator + '"]'
      );
      if (F) {
        A(F, { IsValid: true, Value: e.value });
      }
    }
    function q(F) {
      e = c.getEventTarget(F);
      v(e);
      c.throttle(C, D);
    }
    function f() {
      c.addHandler(j.EditControl, d.oninput !== b ? "input" : "keyup", q, {
        window: c.topWindow.contentarea,
      });
      c.addHandler(j.EditControl, "paste", q, {
        window: c.topWindow.contentarea,
      });
    }
    function u() {
      c.removeHandler(j.EditControl, "input", q, {
        window: c.topWindow.contentarea,
      });
      c.removeHandler(j.EditControl, "keyup", q, {
        window: c.topWindow.contentarea,
      });
      c.removeHandler(j.EditControl, "paste", q, {
        window: c.topWindow.contentarea,
      });
    }
    function h() {
      c.clearThrottle(C);
    }
    function r() {
      if (c.AdminPanel) {
        c.AdminPanel.ContentAreaLoaded.addHandler(f);
        c.AdminPanel.BeforeLocationChange.addHandler(h);
        c.AdminPanel.ContentAreaUnload.addHandler(u);
      } else {
        f();
      }
    }
    function l() {
      s.Dispose.addHandler(i);
      c.addPageStateHandler(c.PAGE_PARSED, r);
    }
    function i() {
      h();
      s.Dispose.removeHandler(i);
      if (c.AdminPanel) {
        c.AdminPanel.ContentAreaLoaded.removeHandler(f);
        c.AdminPanel.BeforeLocationChange.removeHandler(h);
        c.AdminPanel.ContentAreaUnload.removeHandler(u);
      }
      u();
      p = null;
      g = null;
      j = null;
      e = null;
    }
    l();
  }
})(window, WA);
(function (d, b, a) {
  if (!b.WaWidgetMode) {
    b.WaWidgetMode = c;
    b.WaWidgetMode.SysLoginPath = "/widget/sys/login";
  }
  function c() {
    var i = this,
      j = "WA.WaWidgetMode";
    i.toString = function () {
      return j;
    };
    i.Dispose = b.Tools.EventHandlers.createHandlers(i, { id: "Dispose" });
    var g = false;
    function h(k) {
      return (k + "/").replace(/\/+/, "").toLowerCase();
    }
    function f() {
      var l = b.Url.parse(b.topWindow.location.href),
        k = h(l.path) == h(b.WaWidgetMode.SysLoginPath),
        m = null;
      if (l.queryKeys && l.queryKeys.ReturnUrl) {
        m = b.Url.build({
          protocol: l.protocol,
          host: l.host,
          port: l.port,
          path: l.queryKeys.ReturnUrl,
        });
      }
      b.Window.postMessage(
        {
          isLoginRequired: k,
          returnUrl: m,
          isUserAnonymous: b.topWindow.bonaPage_IsUserAnonymous,
        },
        "*",
        b.topWindow.top
      );
    }
    function e() {
      if (g) {
        return;
      }
      i.Dispose.fireHandlers();
      i.Dispose = null;
      g = true;
    }
    f();
  }
})(window, WA);
(function (d, b, a) {
  if (!b.WaWindow) {
    b.WaWindow = c;
    b.WaWindow.TypeName = "WA.WaWindow";
  }
  function c() {
    var v = this,
      y = b.WaWindow.TypeName;
    v.toString = function () {
      return y;
    };
    v.Dispose = b.Tools.EventHandlers.createHandlers(v, { id: "Dispose" });
    var t = false,
      w = null;
    v.getLocationOrigin = k;
    v.postMessage = u;
    v.getScroll = l;
    v.getScrollLeft = o;
    v.getScrollTop = p;
    v.getFullScroll = f;
    v.getFullScrollLeft = g;
    v.getFullScrollTop = h;
    v.getScrollWidth = q;
    v.getScrollHeight = n;
    v.getScrollBarWidth = m;
    v.setScrollTop = x;
    v.getInnerWidth = j;
    v.getInnerHeight = i;
    v.getWindowSizes = r;
    function r(A) {
      A = A || d;
      var z = {
        scrollWidth: 0,
        scrollHeight: 0,
        clientWidth: 0,
        clientHeight: 0,
        innerWidth: 0,
        innerHeight: 0,
        scrollLeft: 0,
        scrollTop: 0,
      };
      if (A.document && A.document.documentElement) {
        z.clientWidth = j(A) || 0;
        z.clientHeight = i(A) || 0;
        z.scrollWidth = Math.max(
          A.document.documentElement.scrollWidth || 0,
          z.clientWidth
        );
        z.scrollHeight = Math.max(
          A.document.documentElement.scrollHeight || 0,
          z.clientHeight
        );
        z.innerWidth =
          A.innerWidth || A.document.documentElement.offsetWidth || 0;
        z.innerHeight =
          A.innerHeight || A.document.documentElement.offsetHeight || 0;
        z.scrollLeft = o(A);
        z.scrollTop = p(A);
      }
      return z;
    }
    function i(A) {
      A = A || d;
      var z = 0;
      if (!A.document) {
        return 0;
      }
      if (b.Browser.isIE) {
        if (A.document.documentElement.clientHeight) {
          z = A.document.documentElement.clientHeight;
        } else {
          z = A.document.body.clientHeight;
          if (
            q(A) > A.document.body.clientWidth ||
            b.Style.getElementStyle(
              b.Dom.$$("HTML", null, A)[0],
              "overflowX"
            ) === "scroll"
          ) {
            z -= m();
          }
        }
      } else {
        z =
          A.document.compatMode === "CSS1Compat" && b.Device.isDesktop
            ? A.document.documentElement
              ? A.document.documentElement.clientHeight
              : 0
            : A.document.body.clientHeight;
      }
      return z;
    }
    function j(C) {
      C = C || d;
      var z = 0,
        B = null,
        A;
      if (!C.document) {
        return 0;
      }
      if (b.Browser.isIE) {
        if (C.document.documentElement.clientWidth) {
          z = C.document.documentElement.clientWidth;
        } else {
          z = C.document.body.clientWidth;
          if (
            n(C) > C.document.body.clientHeight ||
            b.Style.getElementStyle(
              b.Dom.$$("HTML", null, C)[0],
              "overflowY"
            ) === "scroll"
          ) {
            z -= m();
          }
        }
      } else {
        A = !!C.document.documentElement;
        if (b.Device.isMobile) {
          if (A) {
            B = C.document.documentElement.style.cssFloat;
            C.document.documentElement.style.cssFloat = "left";
          } else {
            B = C.document.body.style.cssFloat;
            C.document.body.style.cssFloat = "left";
          }
        }
        z =
          document.compatMode === "CSS1Compat" && b.Device.isDesktop
            ? A
              ? C.document.documentElement.clientWidth
              : 0
            : C.document.body.clientWidth;
        if (B !== null) {
          if (A) {
            C.document.documentElement.style.cssFloat = B;
          } else {
            C.document.body.style.cssFloat = B;
          }
        }
      }
      return z;
    }
    function x(A, B) {
      B = B || d;
      try {
        if (typeof B.pageYOffset == "number") {
          B.pageYOffset = A;
        } else {
          if (
            B.document.documentElement &&
            B.document.documentElement.scrollTop
          ) {
            B.document.documentElement.scrollTop = A;
          } else {
            if (B.document.body && B.document.body.scrollTop) {
              document.body.scrollTop = A;
            }
          }
        }
      } catch (z) {}
    }
    function m(D) {
      D = D || d;
      var z, A, C, B;
      if (!w) {
        z = D.document;
        A = z.createElement("DIV");
        if (A) {
          A.style.position = "absolute";
          A.style.left = A.style.top = "-1000px";
          A.style.width = A.style.height = "100px";
          A.style.overflow = "scroll";
          A.style.visibility = "hidden";
          if (z.body) {
            z.body.appendChild(A);
            C = A.offsetWidth;
            B = A.clientWidth;
            if (A && C && B) {
              w = C - B;
            }
          }
        }
      }
      if (A) {
        A.parentNode.removeChild(A);
      }
      return w;
    }
    function n(z) {
      return (z || d).document.body.scrollHeight;
    }
    function q(z) {
      return (z || d).document.body.scrollWidth;
    }
    function l(z) {
      return { left: o(z), top: p(z) };
    }
    function o(B) {
      B = B || d;
      if (typeof B.pageXOffset == "number") {
        return B.pageXOffset;
      }
      var A = B.document.documentElement,
        z;
      if (A && A.scrollLeft) {
        return A.scrollLeft;
      }
      z = B.document.body;
      if (z && z.scrollLeft) {
        return z.scrollLeft;
      }
      return 0;
    }
    function p(C) {
      C = C || d;
      var B = C.pageYOffset;
      if (typeof B == "number") {
        return B;
      }
      var A = C.document.documentElement,
        z;
      if (A && A.scrollTop) {
        return A.scrollTop;
      }
      z = C.document.body;
      if (z && z.scrollTop) {
        return z.scrollTop;
      }
      return 0;
    }
    function f(A, H, z) {
      z = z || {};
      var B,
        D = z.limiters,
        C = !!D,
        F = z.isOnlyElements ? 0 : o(H),
        G = z.isOnlyElements ? 0 : p(H),
        E = A.parentElement;
      if (C && D.length > 0) {
        for (B = 0; B < D.length; B++) {
          F += D[B].scrollLeft;
          G += D[B].scrollTop;
        }
      } else {
        while (E && E.nodeName !== "BODY") {
          if (C) {
            if (
              E.getAttribute("data-scrollable") != null ||
              (E.getAttribute("class") != null &&
                E.getAttribute("class").indexOf("scroll-container") !== -1)
            ) {
              D.push(E);
              F += E.scrollLeft;
              G += E.scrollTop;
            }
          } else {
            F += E.scrollLeft;
            G += E.scrollTop;
          }
          E = E.parentElement;
        }
      }
      return { left: F, top: G };
    }
    function g(A, B, z) {
      return f(A, B).left;
    }
    function h(A, B, z) {
      return f(A, B).top;
    }
    function k(z) {
      z = z || d.location;
      if (!z.origin) {
        z.origin =
          z.protocol + "//" + z.hostname + (z.port ? ":" + z.port : "");
      }
      return z.origin;
    }
    function u(z, B, C) {
      B = B || "*";
      C = C || d;
      if (typeof C.postMessage != "function") {
        return;
      }
      if (typeof z != "string") {
        try {
          z = JSON.stringify(z);
        } catch (A) {
          throw new Error("Unable to parse postMessage data");
        }
      }
      C.postMessage(z, B);
    }
    function s() {}
    function e() {
      if (t) {
        return;
      }
      v.Dispose.fireHandlers();
      v.Dispose = null;
      t = true;
    }
    s();
  }
})(window, WA);
(function (c, b) {
  if (!b.DragDrop) {
    b.DragDrop = a;
    b.DragDrop.EventTags = { DisableDragDrop: "disabledragdrop" };
  }
  function a(v, s, f) {
    var t = this;
    t.addTargets = d;
    t.dispose = i;
    t.objId = "DragAndDrop_" + b.getUniqueIdentifier();
    var u = v,
      r = s,
      e = f,
      m = false,
      l = (r && r.style.cursor) || "",
      j = (e && e.inactiveCursor) || l,
      h = (e && e.cursor) || j,
      y,
      z;
    v = null;
    s = null;
    f = null;
    t.DragStart = b.Tools.EventHandlers.createHandlers(t, { id: "DragStart" });
    t.Drop = b.Tools.EventHandlers.createHandlers(t, { id: "Drop" });
    t.BeforeDrop = b.Tools.EventHandlers.createHandlers(t, {
      id: "BeforeDrop",
    });
    t.Click = b.Tools.EventHandlers.createHandlers(t, { id: "Click" });
    t.objId = "DragAndDrop_" + b.getUniqueIdentifier();
    k();
    function k() {
      b.addHandler(r, "mousedown", g);
      b.addHandler(r, "dragstart", b.stopEvent);
      r.style.cursor = j;
    }
    function d(A) {}
    function g(A) {
      A = b.getEvent(A, u);
      if (A) {
        y = b.getEventTarget(A);
        var B = b.getEventTags(A, u);
        if (
          B &&
          B.toLowerCase().indexOf(b.DragDrop.EventTags.DisableDragDrop) >= 0
        ) {
          return;
        }
        if (y === r) {
          y = null;
          r.style.cursor = h;
        } else {
          z = y.style.cursor || "";
          y.style.cursor = h;
        }
        b.DragDropStatic.DragDrop.setParams(u, r, e);
        b.DragDropStatic.DragDrop.DragDropStaticDragStart.addHandler(q);
        b.DragDropStatic.DragDrop.DragDropStaticDrop.addHandler(p);
        b.DragDropStatic.DragDrop.DragDropStaticBeforeDrop.addHandler(o);
        b.DragDropStatic.DragDrop.DragDropStaticClick.addHandler(n);
        b.DragDropStatic.DragDrop.init(A);
      }
    }
    function q(B, A) {
      t.DragStart.fireHandlers({ dragContext: A });
    }
    function p(B, A) {
      w();
      t.Drop.fireHandlers({ dragContext: A });
    }
    function x() {
      if (y) {
        y.style.cursor = z;
        y = null;
      } else {
        r.style.cursor = j;
      }
    }
    function o(B, A) {
      x();
      t.BeforeDrop.fireHandlers({ dragContext: A });
    }
    function n(B, A) {
      x();
      w();
      t.Click.fireHandlers({ dragContext: A });
    }
    function w() {
      b.DragDropStatic.DragDrop.DragDropStaticDragStart.removeHandler(q);
      b.DragDropStatic.DragDrop.DragDropStaticDrop.removeHandler(p);
      b.DragDropStatic.DragDrop.DragDropStaticBeforeDrop.removeHandler(o);
      b.DragDropStatic.DragDrop.DragDropStaticClick.removeHandler(n);
    }
    function i() {
      if (m) {
        return;
      }
      w();
      if (y) {
        y.style.cursor = z;
      }
      if (r) {
        r.style.cursor = l;
        b.removeHandler(r, "mousedown", g);
        b.removeHandler(r, "dragstart", b.stopEvent);
      }
      t.dispose = null;
      u = null;
      r = null;
      e = null;
      y = null;
      t.DragStart = null;
      t.Drop = null;
      t.BeforeDrop = null;
      t.Click = null;
      t = null;
      m = true;
    }
  }
})(window, WA);
(function (d, b, a) {
  if (!b.WaDragDropHandler) {
    b.WaDragDropHandler = c;
  }
  function c() {
    var an = this,
      aN = "WA.WaDragDropHandler";
    an.toString = function () {
      return aN;
    };
    an.init = M;
    an.setParams = aC;
    an.setBounds = aA;
    an.setDynamicParams = aB;
    an.DragDropStaticDragStart = b.Tools.EventHandlers.createHandlers(an, {
      id: "DragDropStaticDragStart",
    });
    an.DragDropStaticBeforeDrop = b.Tools.EventHandlers.createHandlers(an, {
      id: "DragDropStaticBeforeDrop",
    });
    an.DragDropStaticDrop = b.Tools.EventHandlers.createHandlers(an, {
      id: "DragDropStaticDrop",
    });
    an.DragDropStaticClick = b.Tools.EventHandlers.createHandlers(an, {
      id: "DragDropStaticClick",
    });
    var ao, am, e;
    var O,
      P,
      aI,
      aJ,
      p,
      q,
      aa,
      ab,
      v = 0,
      w = 0,
      T = false,
      Z;
    var y,
      z = b.WaDragDropStatic.Direction.horizontal,
      A = b.WaDragDropStatic.Direction.vertical,
      x = b.WaDragDropStatic.Direction.both;
    var h, i, j, g, Q;
    var aM,
      C,
      Y,
      aL,
      aK,
      o,
      G = [],
      K,
      H,
      I,
      J,
      t,
      u;
    var aj = {},
      al,
      S,
      ac,
      ad,
      ae,
      ak,
      af,
      ai,
      ah,
      ag;
    var aw, aq, W, at, au, av, ar, ay, az, ax;
    var k, R, E;
    var r,
      s = {},
      X = false,
      aP = b.WaDragDropStatic.UnsetScrollActiveTimeOut,
      l = false;
    F();
    function F() {
      var aQ, aR;
      for (aQ = 0; aQ < 17; aQ++) {
        G[aQ] = new Array();
        for (aR = 0; aR < 17; aR++) {
          G[aQ][aR] = new Array();
        }
      }
      s[z] = "w-resize";
      s[A] = "n-resize";
      s[x] = "move";
    }
    function M(aQ) {
      if (S) {
        if (aj[al.name]) {
          ac = aj[al.name].movingElement;
          ad = aj[al.name].movingElementContent;
          ae = aj[al.name].movingElementCup;
        }
        n();
      } else {
        ac = am;
      }
      f(aQ);
    }
    function aA(aQ) {
      Q = aQ.bounds ? 1 : 0;
      if (Q) {
        h = aQ.bounds.left != null ? aQ.bounds.left : -1000000;
        i = aQ.bounds.right != null ? aQ.bounds.right : 10000000;
        j = aQ.bounds.top != null ? aQ.bounds.top : -1000000;
        g = aQ.bounds.bottom != null ? aQ.bounds.bottom : 10000000;
      }
    }
    function aC(aT, aS, aQ) {
      var aR;
      ao = aT || d;
      am = aS;
      e = aQ || {};
      aA(e);
      if (typeof am == "string") {
        am = ao.WA.$(am);
      }
      y = e.direction || x;
      k = e.callBackMoving || null;
      R = k ? 1 : 0;
      E = e.droppedParams || null;
      r = e.cursor || null;
      l = e.checkZIndexIntersection === true;
      S = e.isCreateMovingElement || false;
      al = e.movingElementWindow || ao;
      ag = e.movingElementHTML || null;
      ak = e.movingElementWidth || null;
      af = e.movingElementHeight || null;
      ai = e.movingElementPrototype || am.parentNode;
      ah = e.movingElementOpacity || 37;
      aM = e.targetWindow || al;
      aL = e.targetsOverCallBack || null;
      aK = e.targetsOutCallBack || aL || (Y ? C[0].callBack : null);
      aw = e.scrollableElementWindow || aM;
      aq = e.scrollableElement || aw;
      W = aq.location != null;
      aT = null;
      aS = null;
    }
    function aB(aQ) {
      C = aQ || null;
      Y = C ? 1 : 0;
      if (Y) {
        N();
      }
    }
    function N() {
      var aU,
        aY,
        aV,
        aW = 0,
        aX = 0,
        aR,
        aS,
        aT,
        aQ,
        aZ;
      for (aU = 0; aU < C.length; aU++) {
        if (C[aU].right > aW) {
          aW = C[aU].right;
        }
        if (C[aU].bottom > aX) {
          aX = C[aU].bottom;
        }
        if (C[aU].zindex == null) {
          C[aU].zindex = 0;
        }
      }
      I = Math.ceil(aW / 17);
      J = Math.ceil(aX / 17);
      K = I * 17;
      H = J * 17;
      for (aU = 0; aU < 17; aU++) {
        aR = I * aU;
        aS = I * (aU + 1);
        for (aY = 0; aY < 17; aY++) {
          aT = J * aY;
          aQ = J * (aY + 1);
          for (aV = 0; aV < C.length; aV++) {
            if (
              (C[aV].left >= aR && C[aV].left <= aS) ||
              (C[aV].right <= aS && C[aV].right >= aR) ||
              (C[aV].left < aR && C[aV].right > aS)
            ) {
              if (
                (C[aV].top >= aT && C[aV].top <= aQ) ||
                (C[aV].bottom <= aQ && C[aV].bottom >= aT) ||
                (C[aV].top < aT && C[aV].bottom > aQ)
              ) {
                G[aU][aY].push(aV);
              }
            }
          }
        }
      }
      aZ = b.Dimensions.getElementAbsXY(aM.document.body, aM);
      t = aZ.X;
      u = aZ.Y;
    }
    function n() {
      if (!ac) {
        ac = al.document.createElement("DIV");
        ac.style.position = "absolute";
        ac.style.left = "-3700px";
        ac.style.top = "-3700px";
        ac.style.zIndex = 33777;
        ac.style.width = "1px";
        ac.style.height = "1px";
        ac.style.overflow = "hidden";
        ac.style.visibility = "hidden";
        ad = al.document.createElement("DIV");
        ae = al.document.createElement("DIV");
        ae.style.position = "absolute";
        ae.style.left = "0px";
        ae.style.top = "0px";
        ae.style.zIndex = 33779;
        ae.style.width = "1px";
        ae.style.height = "1px";
        ac.appendChild(ad);
        ac.appendChild(ae);
        al.document.body.appendChild(ac);
        b.setElementOpacity(ac, ah);
        if (!aj[al.name]) {
          aj[al.name] = {};
        }
        aj[al.name].movingElement = ac;
        aj[al.name].movingElementContent = ad;
        aj[al.name].movingElementCup = ae;
      }
    }
    function aG() {
      var aS, aR, aQ;
      if (S) {
        if (ag) {
          ad.innerHTML = ag;
        } else {
          aS = ai.innerHTML;
          aS = aS.replace(/id=".*?"/gi, "").replace(/^\s+/, "");
          ad.innerHTML = aS;
        }
        aR = ak != null ? ak : am.offsetWidth;
        aQ = af != null ? af : am.offsetHeight;
        ac.style.width = aR + "px";
        ac.style.height = aQ + "px";
        ae.style.width = aR + "px";
        ae.style.height = aQ + "px";
        ac.style.visibility = "visible";
      }
      if (r) {
        ac.style.cursor = r;
      } else {
        ac.style.cursor = s[y];
      }
      if (ae) {
        ae.style.cursor = ac.style.cursor;
      }
    }
    function L() {
      ac.style.left = "-3700px";
      ac.style.top = "-3700px";
      ac.style.zIndex = 33777;
      ac.style.width = "1px";
      ac.style.height = "1px";
      ac.style.visibility = "hidden";
    }
    function f(aU) {
      var aW, aX, aS, aT, aQ, aR;
      aU = b.getEvent(aU, ao);
      if (
        aU &&
        (((!b.Browser.isIE || b.Browser.isIE >= 9) && aU.button == 0) ||
          (b.Browser.isIE && aU.button == 1))
      ) {
        Z = b.getEventTarget(aU);
        O = aU.clientX;
        P = aU.clientY;
        aa = aU.screenX;
        ab = aU.screenY;
        aW = b.Dimensions.getElementAbsXY(ao.document.body, ao);
        v = aa - (aW.X + O);
        w = ab - (aW.Y + P);
        aX = b.Dimensions.getElementAbsXY(W ? aq.document.body : aq, aw);
        at = aX.left + 17;
        au = aX.right - 17;
        av = aX.top + 17;
        ar = aX.bottom - 17;
        if (W) {
          try {
            aQ = aq.document.body.scrollLeft;
            aR = aq.document.body.scrollTop;
          } catch (aV) {}
          if (
            aq.document.documentElement &&
            aq.document.documentElement.scrollLeft != null
          ) {
            aS = aq.document.documentElement.scrollLeft;
            aT = aq.document.documentElement.scrollTop;
            ay = aS === 0 && aQ > 0 ? aQ : aS;
            az = aT === 0 && aR > 0 ? aR : aT;
          } else {
            ay = aQ;
            az = aR;
          }
        } else {
          ay = aq.scrollLeft;
          az = aq.scrollTop;
        }
        b.addGlobalHandler(
          b.Browser.isIE ? "body" : "window",
          "mousemove",
          D,
          "DragDropMouseMoveInAllWindow",
          {}
        );
        b.addGlobalHandler(
          b.Browser.isIE ? "body" : "window",
          "mouseup",
          ap,
          "DragDropMouseUpInAllWindow",
          {}
        );
        b.addHandler(
          ac,
          b.Browser.isGecko ? "DOMMouseScroll" : "mousewheel",
          aF
        );
        b.addHandler(ao.document, "selectstart", b.stopEvent);
        if (b.Browser.isWebKit) {
          b.addHandler(aq, "scroll", aE);
        }
        b.stopEvent(aU, ao);
        return false;
      }
    }
    function aH() {
      var aQ = b.Dimensions.getElementAbsXY(al.document.body, al),
        aR = b.Dimensions.getElementAbsXY(am, ao);
      aG();
      switch (y) {
        case z:
          aI =
            aa -
            v -
            aQ.X -
            Math.round(ac.offsetWidth / 2) +
            b.Window.getScrollLeft(al);
          aJ = aR.Y + b.Window.getScrollTop(al) - aQ.Y;
          break;
        case A:
          aI = aR.X + b.Window.getScrollLeft(al) - aQ.X;
          aJ =
            ab -
            w -
            aQ.Y -
            Math.round(ac.offsetHeight / 2) +
            b.Window.getScrollTop(al);
          break;
        case x:
          aI =
            aa -
            v -
            aQ.X -
            Math.round(ac.offsetWidth / 2) +
            b.Window.getScrollLeft(al);
          aJ =
            ab -
            w -
            aQ.Y -
            Math.round(ac.offsetHeight / 2) +
            b.Window.getScrollTop(al);
          break;
      }
      ac.style.left = aI + "px";
      ac.style.top = aJ + "px";
      p = aI;
      q = aJ;
      an.DragDropStaticDragStart.fireHandlers({
        movingElement: ac,
        args: { droppedParams: E },
      });
      aD();
    }
    var U = true;
    function V(aR, aQ) {
      return (
        aR.top >= aQ.top &&
        aR.bottom <= aQ.bottom &&
        aR.left >= aQ.left &&
        aR.right <= aQ.right
      );
    }
    function D(aS, a7) {
      if (aS && ac) {
        if (aS.type != "mousemove" || (X && aS.view !== al)) {
          return;
        }
        var aV,
          aZ,
          a0,
          a3,
          a4,
          a1 = aS.screenX,
          a2 = aS.screenY,
          aX,
          aY,
          aT,
          aU,
          a6,
          a5,
          aR = null,
          aW = false,
          aQ = false;
        if (!T) {
          if (O == aS.clientX && P == aS.clientY) {
            return;
          }
          T = true;
          aH();
        }
        switch (y) {
          case z:
            aZ = p + (a1 - aa);
            a0 = q;
            break;
          case A:
            aZ = p;
            a0 = q + (a2 - ab);
            break;
          case x:
            aZ = p + (a1 - aa);
            a0 = q + (a2 - ab);
            break;
        }
        if (Q || U === false) {
          if (aZ >= h && aZ <= i && U === true) {
            ac.style.left = aZ + "px";
            O = a1;
            a3 = aZ;
          } else {
            a3 = aZ < h ? h : i;
          }
          if (a0 >= j && a0 <= g && U === true) {
            ac.style.top = a0 + "px";
            P = a2;
            a4 = a0;
          } else {
            a4 = a0 < j ? j : g;
          }
        } else {
          ac.style.left = aZ + "px";
          ac.style.top = a0 + "px";
          O = a1;
          P = a2;
          a3 = aZ;
          a4 = a0;
        }
        if (R) {
          U = k(O, P, aZ, a0, a3, a4, {
            isMoving: U,
            bounds: { left: h, rigth: i, bottom: g, top: j },
            mouseCoords: b.getEventMouseCoords(aS),
          });
          if (U !== false) {
            U = true;
          }
        }
        if (Y) {
          aX = a1 - v - t + ay;
          aY = a2 - w - u + az;
          if (aX >= 0 && aX < K && aY >= 0 && aY < H) {
            aT = Math.floor(aX / I);
            aU = Math.floor(aY / J);
            a6 = G[aT][aU];
            for (aV = a6.length - 1; aV >= 0; aV--) {
              a5 = C[a6[aV]];
              if (
                aX >= a5.left &&
                aX <= a5.right &&
                aY >= a5.top &&
                aY <= a5.bottom
              ) {
                aQ = l && aR != null && a5.zindex == C[aR].zindex;
                if (
                  aR == null ||
                  a5.zindex > C[aR].zindex ||
                  (aQ && V(a5, C[aR]))
                ) {
                  aR = a6[aV];
                }
              }
            }
            if (aR != null) {
              a5 = C[aR];
              if (o != null && o != a6[aV]) {
                if (aK) {
                  aK(C[o].id, C[o].object, C[o].element);
                } else {
                  if (C[o].outCallBack) {
                    C[o].outCallBack(C[o].id, C[o].object, C[o].element);
                  }
                }
              }
              if (aL) {
                aL();
              } else {
                if (a5.overCallBack) {
                  a5.overCallBack({ movingElementX: a3, movingElementY: a4 });
                }
              }
              aW = true;
              o = aR;
            }
          }
          if (!aW && o != null) {
            if (aK) {
              aK(C[o].id, C[o].object, C[o].element);
            } else {
              if (C[o].outCallBack) {
                C[o].outCallBack(C[o].id, C[o].object, C[o].element);
              }
            }
            o = null;
          }
        }
        aa = a1;
        ab = a2;
        p = aZ;
        q = a0;
      }
      return false;
    }
    function aD() {
      var aT = 0,
        aU = 0,
        aQ = aa - v,
        aR = ab - w,
        aS = 17;
      if (W) {
        if (aQ > au - aS) {
          aT += aS;
        } else {
          if (aQ < at + aS) {
            aT -= aS;
          }
        }
        if (aR > ar - aS) {
          aU += aS;
        } else {
          if (aR <= av + aS) {
            aU -= aS;
          }
        }
      } else {
        if (aQ > au) {
          aT += aQ - au <= aS ? aQ - au : aS;
        } else {
          if (aQ < at) {
            aT -= at - aQ <= aS ? at - aQ : aS;
          }
        }
        if (aR > ar) {
          aU += aR - ar <= aS ? aR - ar : aS;
        } else {
          if (aR <= av) {
            aU -= av - aR <= aS ? av - aR : aS;
          }
        }
      }
      if (aT || aU) {
        if (W) {
          aq.scrollBy(aT, aU);
          ay = b.Window.getScrollLeft(aq);
          az = b.Window.getScrollTop(aq);
        } else {
          aq.scrollLeft += aT;
          aq.scrollTop += aU;
          ay = aq.scrollLeft;
          az = aq.scrollTop;
        }
        D({ screenX: aa, screenY: ab });
      }
      if (ax) {
        clearTimeout(ax);
      }
      ax = setTimeout(aD, 17);
    }
    function aF(aQ) {
      var aR = 0,
        aS = 120;
      aQ = b.getEvent(aQ, ao);
      if (aQ) {
        if (aQ.wheelDelta) {
          aR = aQ.wheelDelta / -120;
        } else {
          if (aQ.detail) {
            aR = aQ.detail / 3;
          }
        }
        if (aR) {
          if (W) {
            aq.scrollBy(0, aR * aS);
            az = b.Window.getScrollTop(aq);
          } else {
            aq.scrollTop += aR * aS;
            az = aq.scrollTop;
          }
          D({ screenX: aa, screenY: ab });
        }
        b.stopEvent(aQ);
      }
    }
    function aE() {
      X = true;
      b.throttle(aO, { timeout: aP });
    }
    function aO() {
      X = false;
    }
    function ap() {
      if (ax) {
        clearTimeout(ax);
      }
      b.removeHandler(ao.document, "selectstart", b.stopEvent);
      b.removeHandler(
        ac,
        b.Browser.isGecko ? "DOMMouseScroll" : "mousewheel",
        aF
      );
      b.removeGlobalHandler("DragDropMouseMoveInAllWindow");
      b.removeGlobalHandler("DragDropMouseUpInAllWindow");
      if (b.Browser.isWebKit) {
        b.removeHandler(aq, "scroll", aE);
      }
      if (r) {
        ac.style.cursor = "";
      }
      if (T) {
        T = false;
        an.DragDropStaticBeforeDrop.fireHandlers({ element: ac });
        if (o != null && C[o].dropCallBack) {
          C[o].dropCallBack(C[o].id, C[o].object, C[o].element, E);
        }
        an.DragDropStaticDrop.fireHandlers({
          object: o != null ? C[o].object : null,
          element: ac,
          position: { mouseX: aa, mouseY: ab, currentX: p, currentY: q },
        });
        if (S) {
          L();
        }
      } else {
        an.DragDropStaticClick.fireHandlers({ mouseDownTarget: Z });
      }
      m();
    }
    function m() {
      var aQ, aR;
      ao = null;
      am = null;
      e = null;
      k = null;
      al = null;
      ai = null;
      ac = null;
      ad = null;
      ae = null;
      aw = null;
      aq = null;
      o = null;
      for (aQ = 0; aQ < 17; aQ++) {
        for (aR = 0; aR < 17; aR++) {
          G[aQ][aR].splice(0, G[aQ][aR].length);
        }
      }
    }
    function B() {
      m();
      an.DragDropStaticDragStart.disposeHandlers();
      an.DragDropStaticBeforeDrop.disposeHandlers();
      an.DragDropStaticDrop.disposeHandlers();
      an.DragDropStaticClick.disposeHandlers();
    }
  }
})(window, WA);
(function (d, b, a) {
  if (!b.WaDragDropStatic) {
    b.WaDragDropStatic = c;
    b.WaDragDropStatic.Direction = { horizontal: 1, vertical: 2, both: 3 };
    b.WaDragDropStatic.UnsetScrollActiveTimeOut = 100;
  }
  function c() {
    var i = this,
      j = "WA.WaDragDropStatic";
    i.toString = function () {
      return j;
    };
    i.Dispose = b.Tools.EventHandlers.createHandlers(i, { id: "Dispose" });
    i.addTargets = e;
    var h = false;
    function e(k, n) {
      for (var l = 0, m = k.length; l < m; l++) {
        k[l].addTargets(n);
      }
    }
    function g() {
      i.DragDrop = new b.WaDragDropHandler();
    }
    function f() {
      if (h) {
        return;
      }
      i.Dispose.fireHandlers();
      i.Dispose = null;
      h = true;
    }
    g();
  }
})(window, WA);
(function (d, b, a) {
  if (!b.WaGadgets) {
    b.WaGadgets = c;
  }
  function c() {
    var k = this,
      l = "WA.WaGadgets";
    k.toString = function () {
      return l;
    };
    k.Dispose = b.Tools.EventHandlers.createHandlers(k, { id: "Dispose" });
    k.GadgetChanged = b.Tools.EventHandlers.createHandlers(k, {
      id: "GadgetChanged",
    });
    k.GadgetDeleted = b.Tools.EventHandlers.createHandlers(k, {
      id: "GadgetDeleted",
    });
    k.LayoutColumnResized = b.Tools.EventHandlers.createHandlers(k, {
      id: "LayoutColumnResized",
    });
    k.StickyPlaceHolderResized = b.Tools.EventHandlers.createHandlers(k, {
      id: "StickyPlaceHolderResized",
    });
    k.notifyGadgetChanged = g;
    k.notifyGadgetDeleted = h;
    k.notifyLayoutColumnResized = i;
    k.notifyStickyPlaceHolderResized = j;
    function j(m) {
      k.StickyPlaceHolderResized.fireHandlers(m);
    }
    function i(m) {
      k.LayoutColumnResized.fireHandlers(m);
    }
    function g(m) {
      k.GadgetChanged.fireHandlers(m);
    }
    function h(m) {
      m = m || {};
      k.GadgetDeleted.fireHandlers(m);
    }
    function f() {}
    function e() {
      k.Dispose.fireHandlers();
      k.GadgetChanged.disposeHandlers();
      k.GadgetDeleted.disposeHandlers();
      k.LayoutColumnResized.disposeHandlers();
      k.StickyPlaceHolderResized.disposeHandlers();
      k.Dispose = null;
    }
    b.PageParsed(f, d);
    b.PageUnLoaded(e, d);
  }
})(window, WA);
(function (c, b) {
  if (!b.KeyboardWatcher) {
    b.KeyboardWatcher = a;
  }
  function a(d) {
    var m = this,
      n = "WA.Tools.KeyboardWatcher",
      l = d.parentComponent;
    m.toString = function () {
      return n;
    };
    m.Dispose = b.Tools.EventHandlers.createHandlers(m, { id: "Dispose" });
    m.Enter = b.Tools.EventHandlers.createHandlers(m, { id: "Enter" });
    m.Esc = b.Tools.EventHandlers.createHandlers(m, { id: "Esc" });
    function g(o) {
      o = b.getEvent(o);
      switch (o.keyCode) {
        case 27:
          m.Esc.fireHandlers();
          break;
        case 13:
          if (b.getEventTarget(o).tagName.toLowerCase() != "textarea") {
            m.Enter.fireHandlers();
          }
          break;
      }
    }
    function i(o) {
      g(o);
    }
    function h(o) {
      g(o);
    }
    function k() {
      b.removeHandler(b.topWindow.contentarea.document, "keyup", g);
    }
    function j() {
      b.addHandler(b.topWindow.contentarea.document, "keyup", g);
    }
    function f() {
      if (!b.AdminPanel) {
        return;
      }
      l.Dispose.addHandler(e);
      b.addHandler(c.document, "keyup", i);
      b.AdminPanel.ContentAreaLoaded.addHandler(j);
      b.AdminPanel.ContentAreaUnload.addHandler(k);
    }
    function e() {
      if (!b.AdminPanel) {
        return;
      }
      l.Dispose.removeHandler(e);
      m.Dispose.fireHandlers();
      m.Dispose.disposeHandlers();
      b.removeHandler(document, "keyup", g);
      try {
        if (b.topWindow.contentarea.document) {
          b.removeHandler(b.topWindow.contentarea.document, "keyup", g);
        }
      } catch (o) {}
      if (b.AdminPanel.ContentAreaLoaded) {
        b.AdminPanel.ContentAreaLoaded.removeHandler(j);
      }
      if (b.AdminPanel.ContentAreaUnload) {
        b.AdminPanel.ContentAreaUnload.removeHandler(k);
      }
    }
    f();
  }
})(window, WA);
(function (c, b) {
  if (!b.PropertyWatcher) {
    b.PropertyWatcher = a;
  }
  function a() {
    var g = this,
      f = false,
      k = null,
      l = 350;
    g.unregister = j;
    g.register = h;
    g.dispose = d;
    function j(m) {
      if (f) {
        return;
      }
      var q,
        o = m.id;
      for (var n = 0, p = k.length; n < p; n++) {
        if (k[n].id == o) {
          q = k.splice(n, 1);
          q = null;
          break;
        }
      }
    }
    function e(n) {
      for (var m = 0, o = k.length; m < o; m++) {
        if (k[m].id == n) {
          return k[m];
        }
      }
      return null;
    }
    function h(q, s, r, m) {
      if (f) {
        k = [];
        f = false;
      }
      m = m || {};
      if (k == null) {
        k = [];
      }
      var o = q.id;
      var t = e(o);
      if (t == null) {
        t = {};
        t.id = o;
        t.handlers = [];
        t.propertyName = s;
        t.targetWindow = m.targetWindow;
        k.push(t);
      }
      t.oldValue = q[s];
      var n, p;
      for (n = 0, p = t.handlers.length; n < p; n++) {
        if (t.handlers[n] == r) {
          break;
        }
      }
      if (n >= t.handlers.length) {
        t.handlers.push(r);
      }
      i();
    }
    function i() {
      if (k == null) {
        return;
      }
      if (k.length == 0) {
        b.clearThrottle(i);
      }
      var r;
      for (r = 0; r < k.length; r++) {
        var v = k[r],
          o,
          u = v.targetWindow;
        try {
          o = u.document.getElementById(v.id);
        } catch (m) {
          b.clearThrottle(i);
          return;
        }
        if (!o) {
          v.targetWindow = null;
          v = null;
          k.splice(r, 1);
          continue;
        }
        var t = o[v.propertyName];
        if (t != undefined && t != v.oldValue) {
          v.oldValue = t;
          if (v.handlers) {
            var s, q;
            for (s = 0, q = v.handlers.length; s < q; s++) {
              var p = v.handlers[s];
              if (typeof p == "function") {
                p({ newValue: t });
              }
            }
          }
        }
        u = null;
      }
      o = null;
      b.throttle(i, { timeout: l });
    }
    function d() {
      b.clearThrottle(i);
      k = null;
      f = true;
    }
    b.PageUnLoaded(d, c);
  }
})(window, WA);
(function (d, c, b) {
  if (!c.PeterBlum) {
    c.PeterBlum = a;
  }
  function a(h, g) {
    g = g || {};
    var q = this,
      r = "WA.PeterBlum",
      s = h;
    q.toString = function () {
      return r;
    };
    q.Dispose = c.Tools.EventHandlers.createHandlers(q, { id: "Dispose" });
    var i = false;
    var l,
      k,
      j = false;
    function p(D, E) {
      var B = E.document.getElementById("DES_Popups"),
        t = E.document.getElementById(D),
        v = t.parentNode.parentNode;
      var z = E.document.querySelectorAll(".DESMenu"),
        A = E.document.querySelector(".DES_MYPControl"),
        x = z[0],
        y = z[1],
        w = E.document.querySelector(".DES_CalControl"),
        C = E.document.querySelector(".DES_TPControl");
      if (B) {
        v.appendChild(B);
      }
      if (A) {
        v.appendChild(A);
        A.style.marginTop = "50px";
        A.style.marginLeft = "50px";
        var u = E.document.querySelector(".DES_MYPOKCancel").parentNode;
        u.style.whiteSpace = "nowrap";
      }
      if (x) {
        v.appendChild(x);
      }
      if (y) {
        v.appendChild(y);
      }
      if (w) {
        v.appendChild(w);
      }
      if (C) {
        v.appendChild(C);
      }
    }
    function o(t) {
      if (!t.DES_BDATPopup) {
        return;
      }
      if (!t.document.forms) {
        return;
      }
      if (t.DES_BDATPopup == k) {
        return;
      }
      l = t.DES_BDATPopup;
      k = function (u) {
        p(u, t);
        l(u);
      };
      t.DES_BDATPopup = k;
    }
    function m() {
      o(c.topWindow.contentarea);
    }
    function n() {
      o(d);
      if (c.topWindow && c.topWindow.contentarea) {
        o(c.topWindow.contentarea);
      }
      if (c.AdminPanel) {
        c.AdminPanel.ContentAreaLoaded.addHandler(m);
      }
    }
    function f() {
      c.addPageStateHandler(c.PAGE_PARSED, n);
    }
    function e() {
      if (i) {
        return;
      }
      q.Dispose.fireHandlers();
      j = false;
      s = null;
      q.Dispose = null;
      i = true;
    }
    f();
  }
})(window, WA);
(function (d, c, b) {
  if (!c.JsCombinerTestModule) {
    c.JsCombinerTestModule = a;
  }
  function a(j, i) {
    i = i || {};
    var l = this,
      m = "WA.JsCombinerTestModule",
      n = j;
    l.toString = function () {
      return m;
    };
    l.Dispose = c.Tools.EventHandlers.createHandlers(l, { id: "Dispose" });
    var k = false;
    function e() {}
    function f() {}
    function h() {
      e();
      f();
    }
    function g() {
      if (k) {
        return;
      }
      l.Dispose.fireHandlers();
      n = null;
      l.Dispose = null;
      k = true;
    }
    h();
  }
})(window, WA);
(function (d, c, b) {
  if (!c.OpenLinkManager) {
    c.OpenLinkManager = a;
  }
  function a(j, i) {
    i = i || {};
    var o = this,
      p = "WA.OpenLinkManager",
      q = j;
    o.toString = function () {
      return p;
    };
    var k = false,
      m = "createFrameToOpen",
      l;
    o.openLink = n;
    o.dispose = f;
    function n(r, s) {
      if (s === true) {
        l.src = r;
        return;
      }
      r = r[0] == "/" ? r : "/" + r;
      l.src = c.getLocationDomain() + r;
    }
    function e() {
      l = document.createElement("iframe");
      l.style.display = "none";
      l.id = m;
      d.document.body.appendChild(l);
    }
    function g() {
      var r = document.createElement("div");
      r.appendChild(l);
      r.innerHTML = "";
      r = null;
    }
    function h() {
      c.addPageStateHandler(c.PAGE_PARSED, e);
    }
    function f() {
      if (k) {
        return;
      }
      g();
      q = null;
      k = true;
    }
    h();
  }
})(window, WA);
(function (aR, aP, aN) {
  var aU = aR.location.href,
    aT = (aR.location.protocol + "//" + aR.location.host).toLowerCase(),
    aq = aU.indexOf("/widget/") != -1,
    aM = aP.topWindow;
  var d = function (aW, aX) {
    return new BonaObject(aW, aX);
  };
  var ar = {
      "8": "backspace",
      "9": "tab",
      "13": "return",
      "19": "pause",
      "27": "escape",
      "33": "pageup",
      "34": "pagedown",
      "35": "end",
      "36": "home",
      "37": "left",
      "38": "up",
      "39": "right",
      "40": "down",
      "44": "printscreen",
      "45": "insert",
      "46": "delete",
      "112": "f1",
      "113": "f2",
      "114": "f3",
      "115": "f4",
      "116": "f5",
      "117": "f6",
      "118": "f7",
      "119": "f8",
      "120": "f9",
      "121": "f10",
      "122": "f11",
      "123": "f12",
      "144": "numlock",
      "145": "scrolllock",
    },
    l = function (aW, aX) {
      aX = aX || aR;
      return aW ? aW : aX.event;
    },
    o = function (aW, aX) {
      aX = aX || aR;
      aW = l(aW, aX);
      return aW.target || aW.srcElement;
    },
    n = function (aW, aY) {
      var aX = o(aW, aY);
      return aP.Dom.getEventTagsAttribute(aX);
    },
    j = function (aW, aX, aZ) {
      var aY = o(aW, aZ);
      return aY.getAttribute(aX, 0);
    },
    q = function (aW) {
      if (document.implementation.hasFeature("MouseEvents", "2.0")) {
        return aW.button;
      } else {
        switch (aW.button) {
          case 0:
          case 1:
          case 3:
          case 5:
          case 7:
            return 0;
          case 2:
          case 6:
            return 2;
          case 4:
            return 1;
        }
      }
    },
    s = function (aW) {
      aW = aP.getEvent(aW);
      return aW.relatedTarget || aW.toElement || aW.fromElement || null;
    };
  function I(aW, aX) {
    if (!(aW = l(aW, aX))) {
      return true;
    }
    if ("stopPropagation" in aW) {
      aW.stopPropagation();
    } else {
      aW.cancelBubble = true;
    }
    if ("preventDefault" in aW) {
      aW.preventDefault();
    } else {
      aW.returnValue = false;
    }
    return false;
  }
  function K(aW) {
    if (!(aW = l(aW))) {
      return true;
    }
    if (aW.preventDefault) {
      aW.preventDefault();
    } else {
      aW.returnValue = false;
    }
    return false;
  }
  function J(aW) {
    if (!(aW = l(aW))) {
      return true;
    }
    if (aW.stopPropagation) {
      aW.stopPropagation();
    } else {
      aW.cancelBubble = true;
    }
  }
  function H(aW) {
    if (!(aW = l(aW))) {
      return true;
    }
    var aX = aP.Browser.isIE ? aW.keyCode : aW.which;
    if (aX == 13) {
      return I(aW);
    } else {
      return true;
    }
  }
  var p = function (aW) {
      return ar[aW] || null;
    },
    M = function (a0, aX, aW) {
      aW = aW || {};
      var aY = aW.isCaseSensitive || false,
        aZ = aW.isInvalidateChar || false,
        a1;
      if (!p(a0)) {
        a1 = aY
          ? String.fromCharCode(a0).toLowerCase()
          : String.fromCharCode(a0);
        return aZ ? aX.indexOf(a1) === -1 : aX.indexOf(a1) !== -1;
      } else {
        return true;
      }
    },
    v = function (aY, aX, aW) {
      aW = aW || {};
      var a1 = aW.window || aR,
        a0,
        aZ;
      aY = l(aY, a1);
      if (!aY) {
        return true;
      }
      a0 = "which" in aY ? aY.keyCode : aY.which;
      aZ = aY.ctrlKey;
      if (a0 && !aZ && !M(a0, aX, aW)) {
        return I(aY);
      }
    },
    m = function (aW, aZ) {
      aZ = aZ || aR;
      aW = l(aW, aZ);
      var aX = aW.pageX,
        aY = aW.pageY;
      if (aX === aN) {
        aX = aW.clientX + aP.Window.getScrollLeft(aZ);
      }
      if (aY === aN) {
        aY = aW.clientY + aP.Window.getScrollTop(aZ);
      }
      return { left: aX, top: aY };
    },
    r = function (aW) {
      aW = aW || {};
      aW.radix = aW.radix || 36;
      aW.prefix = aW.hasOwnProperty("prefix") ? aW.prefix : "id";
      aW.length = aW.length || 0;
      var aX = ak(aW);
      if (aW.length > 0) {
        if (aX.length < aW.length) {
          while (aX.length < aW.length) {
            aX += ak(aW);
          }
        }
        aX = aX.substring(0, aW.length);
      }
      return aW.prefix + aX;
    };
  function ak(aW) {
    return Math.random().toString(aW.radix).slice(2);
  }
  var ae = {},
    T = {},
    a = function (aZ, aY, a0, aW) {
      if (!aZ) {
        return;
      }
      aW = aW || {};
      var a1 = aW.objectId || "DefaultObjectId",
        a2 = aW.window || aR,
        aX = aW.container || a2.document.body;
      z(aZ, aY, a0, aW);
      if (typeof aZ === "string") {
        if (!(a1 in ae)) {
          ae[a1] = {};
          ae[a1].counter = 0;
        }
        if (!(aZ in ae[a1])) {
          ae[a1][aZ] = {};
          ae[a1][aZ].counter = 0;
          ae[a1].counter++;
        }
        if (!(aY in ae[a1][aZ])) {
          ae[a1][aZ][aY] = {};
          ae[a1][aZ][aY].handlers = [];
          ae[a1][aZ].counter++;
        }
        if (!(a2.name in T && aY in T[a2.name])) {
          if (!(a2.name in T)) {
            T[a2.name] = {};
          }
          T[aY] = 0;
          aE(aX, aY, aC);
        }
        ae[a1][aZ][aY].handlers.push({
          name: aW.name || "",
          container: aX,
          eventName: aY,
          handler: a0,
        });
        T[aY]++;
      } else {
        aE(aZ, aY, a0);
      }
    },
    z = function (aZ, aY, a1, aW) {
      aW = aW || {};
      var a2,
        a3 = aW.objectId || "DefaultObjectId",
        a5 = aW.window || aR,
        aX = aW.container || a5.document.body,
        a0,
        a4;
      if (typeof aZ === "string") {
        if (a3 in ae && aZ in ae[a3] && aY in ae[a3][aZ]) {
          for (a2 = ae[a3][aZ][aY].handlers.length; a2--; ) {
            if (aW.name) {
              a0 = ae[a3][aZ][aY].handlers[a2].name;
              a4 = aW.name;
            } else {
              a0 = ae[a3][aZ][aY].handlers[a2].handler;
              a4 = a1;
            }
            if (a0 === a4) {
              if (aW.name) {
                aX = ae[a3][aZ][aY].handlers[a2].container;
                aY = ae[a3][aZ][aY].handlers[a2].eventName;
              }
              ae[a3][aZ][aY].handlers[a2].name = null;
              delete ae[a3][aZ][aY].handlers[a2].name;
              ae[a3][aZ][aY].handlers[a2].handler = null;
              delete ae[a3][aZ][aY].handlers[a2].handler;
              ae[a3][aZ][aY].handlers.splice(a2, 1);
              T[aY]--;
              break;
            }
          }
          if (ae[a3][aZ][aY].handlers.length === 0) {
            ae[a3][aZ][aY] = null;
            delete ae[a3][aZ][aY];
            ae[a3][aZ].counter--;
            if (ae[a3][aZ].counter === 0) {
              ae[a3][aZ] = null;
              delete ae[a3][aZ];
              ae[a3].counter--;
              if (ae[a3].counter === 0) {
                ae[a3] = null;
                delete ae[a3];
              }
            }
          }
          if (T[aY] === 0) {
            aO(aX, aY, aC);
            delete T[aY];
          }
        }
      } else {
        aO(aZ, aY, a1);
      }
    };
  function aE(aY, aX, aZ) {
    try {
      if (aY && (aY.addEventListener || aY.attachEvent)) {
        if ("addEventListener" in aY) {
          aY.addEventListener(aX, aZ, false);
        } else {
          aY.attachEvent("on" + aX, aZ);
        }
      }
    } catch (aW) {}
  }
  function aO(aY, aX, aZ) {
    try {
      if (aY && (aY.removeEventListener || aY.detachEvent)) {
        if ("removeEventListener" in aY) {
          aY.removeEventListener(aX, aZ, false);
        } else {
          aY.detachEvent("on" + aX, aZ);
        }
      }
    } catch (aW) {}
  }
  function aC(aW) {
    if (!(aW = l(aW))) {
      return true;
    }
    var a5 = o(aW);
    if (!a5) {
      return true;
    }
    var a0 = a5.getAttribute("eventTags", 0);
    if (!a0) {
      return true;
    }
    var a2,
      a3,
      a4 = a5.getAttribute("objectId", 0) || "DefaultObjectId",
      a1 = a0 ? a0.split(/\s+/) : null,
      aX,
      aY,
      aZ = aW.type;
    if (a4 in ae && a1) {
      for (aX = 0, aY = a1.length; aX < aY; aX++) {
        if (a1[aX] in ae[a4] && aZ && aZ in ae[a4][a1[aX]]) {
          for (a2 = 0, a3 = ae[a4][a1[aX]][aZ].handlers.length; a2 < a3; a2++) {
            ae[a4][a1[aX]][aZ].handlers[a2].handler(aW, {
              element: a5,
              eventTags: a0,
              eventTarget: a1[aX],
            });
          }
        }
      }
    }
  }
  var b = function (aW) {
      W(aW, a);
    },
    A = function (aW) {
      W(aW, z);
    };
  function W(aW, a0) {
    var aX,
      aY = aW.length,
      a1,
      aZ;
    for (aX = 0; aX < aY; aX++) {
      if (aP.getTypeString(aW[aX]) == "array") {
        if (aW[aX][0] !== null) {
          if (aP.getTypeString(aW[aX][1]) == "array") {
            for (a1 = 0, aZ = aW[aX][1].length; a1 < aZ; a1++) {
              if (aW[aX][1][a1][1] !== null) {
                a0(
                  aW[aX][0],
                  aW[aX][1][a1][0],
                  aW[aX][1][a1][1],
                  aW[aX][1][a1][2] || null
                );
              }
            }
          } else {
            if (aW[aX][2] !== null) {
              a0(aW[aX][0], aW[aX][1], aW[aX][2], aW[aX][3] || null);
            }
          }
        }
      } else {
        if (aW[aX].target !== null && aW[aX].handler !== null) {
          a0(aW[aX].target, aW[aX].name, aW[aX].handler, aW[aX].args);
        }
      }
    }
  }
  var g = function (aW) {
    var aX, aY;
    aW = aW.replace(/#/, "");
    aY =
      aW.length === 3
        ? aW.match(/([A-F0-9])([A-F0-9])([A-F0-9])/i)
        : aW.match(/([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})/i);
    if (aY && aY.length === 4) {
      aX =
        "rgb(" +
        parseInt("0x" + aY[1]) +
        "," +
        parseInt("0x" + aY[2]) +
        "," +
        parseInt("0x" + aY[3]) +
        ")";
    }
    return aX;
  };
  var h = function (aW) {
      aW = aW.replace(
        /.*?(#(?:[ABCDEF0-9]{6}|[ABCDEF0-9]{3})|rgb\s*\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\))/i,
        "$1"
      );
      var aX = aW.match(/^\s*\#?([ABCDEF0-9]{6}|[ABCDEF0-9]{3})\s*$/i);
      if (aX && aX.length == 2) {
        return aX[1].toUpperCase();
      } else {
        if (at[aW]) {
          return at[aW];
        } else {
          if (aW.toString().toLowerCase().indexOf("rgb") != -1) {
            aX = aW.match(/(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/);
            if (aX && aX.length == 4) {
              return (
                (parseInt(aX[1]).toString(16).length == 1 ? "0" : "") +
                parseInt(aX[1]).toString(16).toUpperCase() +
                ((parseInt(aX[2]).toString(16).length == 1 ? "0" : "") +
                  parseInt(aX[2]).toString(16).toUpperCase()) +
                ((parseInt(aX[3]).toString(16).length == 1 ? "0" : "") +
                  parseInt(aX[3]).toString(16).toUpperCase())
              );
            }
          } else {
            return null;
          }
        }
      }
    },
    E = function (aW, aX) {
      if (aP.Browser.isIE && aP.Browser.isIE < 9) {
        aW.style.filter =
          "progid:DXImageTransform.Microsoft.Alpha(opacity=" + aX + ")";
      } else {
        aW.style.MozOpacity = aX / 100;
        aW.style.KhtmlOpacity = aX / 100;
        aW.style.opacity = aX / 100;
      }
    },
    y = function (aW, aY) {
      var a0 = aY || aR;
      var aZ = a0.location.toString();
      aW = aW != null && aW ? "&" + aW + "=" : "#";
      var aX = aZ.indexOf(aW);
      if (aX < 0 && aW.length > 1) {
        aW = "?" + aW.substr(1);
        aX = aZ.indexOf(aW);
        if (aX < 0) {
          aW = "&amp;" + aW.substr(1);
          aX = aZ.indexOf(aW);
        }
      }
      a0.location.replace(aX < 0 ? aZ : aZ.substr(0, aX));
    },
    w = function (aX, aW) {
      var aY = aW || aR;
      aY.location.replace(aX);
    },
    u = function () {
      return Math.floor(Math.random() * new Date().getTime() * 10000);
    },
    x = function (aW) {
      if (!aW && aR.event) {
        aW = aR.event;
      }
      if (aW) {
        var aX = aP.Browser.isIE ? aW.keyCode : aW.which;
        if (aX == 13) {
          if (aP.Browser.isIE) {
            aW.cancelBubble = true;
            aW.returnValue = false;
          } else {
            aW.stopPropagation();
            aW.preventDefault();
          }
          return false;
        }
      }
    },
    f = function (aW) {
      aR.location = aW;
    },
    B = function (aY, aW) {
      if (!aY) {
        throw new Error("scrollToElement: element is invalid.");
      }
      aW = aW || {};
      var a1 = aW.win || aR,
        aZ = aW.offset && !isNaN(parseInt(aW.offset)) ? parseInt(aW.offset) : 0,
        a0 = aW.scrollableArea || null,
        aX;
      if (typeof aY == "string") {
        aY = aP.Dom.$(aY, a1);
      }
      if (!aY) {
        throw new Error("scrollToElement: element is invalid.");
      }
      if (a0) {
        if (typeof a0 == "string") {
          a0 = aP.Dom.$(a0, a1);
        }
        if (!a0) {
          throw new Error("scrollToElement: scrollableArea is invalid.");
        }
        aX = aP.Dimensions.getElementXY(aY, a1, { container: a0 });
        a0.scrollTop = aX.Y + aZ;
      } else {
        aX = aP.Dimensions.getElementXY(aY, a1);
        a1.scrollTo(aP.Window.getScrollLeft(a1), aX.Y + aZ);
      }
    },
    c = function () {
      if (!aR || !aR.document || !aR.document.body) {
        return false;
      }
      BonaPage.addHandler(aR.document.body, "keypress", function (aW) {
        try {
          if (!aW && aR.event) {
            aW = aR.event;
          }
          if (!aW) {
            return true;
          }
          var aY = aP.Browser.isIE ? aW.srcElement : aW.target;
          if (!aY) {
            return true;
          }
          if (aY.nodeName.toLowerCase() == "textarea") {
            return true;
          }
          return aR.BonaPage.stopEnter(aW);
        } catch (aX) {
          return true;
        }
      });
    },
    i = function (aY, aW) {
      aW = aW || {};
      if (typeof aY.onselectstart != "undefined") {
        aY.onselectstart = function (aZ) {
          return aX(aZ.target.tagName, aW.exceptions);
        };
      } else {
        if (typeof aY.style.MozUserSelect != "undefined") {
          aY.style.MozUserSelect = "none";
        } else {
          aY.onmousedown = function (aZ) {
            return aX(aZ.target.tagName, aW.exceptions);
          };
        }
      }
      function aX(a0, aZ) {
        if (
          aZ != aN &&
          a0 != aN &&
          aP.getTypeString(aZ) == "array" &&
          (aZ.indexOf(a0.toUpperCase()) >= 0 ||
            aZ.indexOf(a0.toLowerCase()) >= 0)
        ) {
          return;
        }
        return false;
      }
    },
    k = function (a0) {
      var aX = encodeURIComponent(a0) + "=",
        aY = document.cookie.indexOf(aX),
        aZ = null;
      if (aY > -1) {
        var aW = document.cookie.indexOf(";", aY);
        if (aW == -1) {
          aW = document.cookie.length;
        }
        aZ = decodeURIComponent(document.cookie.substring(aY + aX.length, aW));
      }
      return aZ;
    },
    D = function (aZ, a2, aY, a0, aX, a1) {
      var aW = encodeURIComponent(aZ) + "=" + encodeURIComponent(a2);
      if (aY instanceof Date) {
        aW += "; expires=" + aY.toGMTString();
      }
      if (a0) {
        aW += "; path=" + a0;
      }
      if (aX) {
        aW += "; domain=" + aX;
      }
      if (a1) {
        aW += "; secure";
      }
      document.cookie = aW;
    },
    L = function (aX, aY, aW, aZ) {
      D(aX, "deleted", new Date(0), aY, aW, aZ);
    },
    G = function (aX, aW) {
      if (aX && aW != null) {
        aX.name = aW;
      } else {
        throw new Error("Invalid window name");
      }
    },
    C = function (aX, aW) {
      if (aX) {
        aW = (aW || "") + "_" + aS++;
        G(aX, aW);
      } else {
        throw new Error("Invalid window name");
      }
    },
    t = function (aW, aZ) {
      aZ = aZ || aR;
      aW = aP.getTypeString(aW) == "string" ? aP.Dom.$(aW, aZ) : aW;
      if (!aW) {
        return 0;
      }
      if ("selectionStart" in aW) {
        return aW.selectionStart;
      }
      if (aZ.document.selection) {
        aW.focus();
        var aX = aZ.document.selection.createRange();
        var aY = aZ.document.selection.createRange().text.length;
        aX.moveStart("character", -aW.value.length);
        return aX.text.length - aY;
      }
    },
    F = function (aW, aX, aZ) {
      aZ = aZ || aR;
      aW = aP.getTypeString(aW) == "string" ? aP.Dom.$(aW, aZ) : aW;
      if (!aW) {
        return;
      }
      if (aW.createTextRange) {
        var aY = aW.createTextRange();
        aY.collapse(true);
        aY.moveEnd("character", aX);
        aY.moveStart("character", aX);
        aY.select();
        return;
      }
      if (aW.setSelectionRange) {
        aW.setSelectionRange(aX, aX);
      }
    };
  var e = function (aX) {
    var aW = function () {
      var aY = new TopCacheProvider();
      aY.Clear(aX);
    };
    aW();
  };
  var ad =
    "aero|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zr|zw";
  var at = {
    aliceblue: "F0F8FF",
    antiquewhite: "FAEBD7",
    aqua: "00FFFF",
    aquamarine: "7FFFD4",
    azure: "F0FFFF",
    beige: "F5F5DC",
    bisque: "FFE4C4",
    black: "000000",
    blanchedalmond: "FFEBCD",
    blue: "0000FF",
    blueviolet: "8A2BE2",
    brown: "A52A2A",
    burlywood: "DEB887",
    cadetblue: "5F9EA0",
    chartreuse: "7FFF00",
    chocolate: "D2691E",
    coral: "FF7F50",
    cornflowerblue: "6495ED",
    cornsilk: "FFF8DC",
    crimson: "DC143C",
    cyan: "00FFFF",
    darkblue: "00008B",
    darkcyan: "008B8B",
    darkgoldenrod: "B8860B",
    darkgray: "A9A9A9",
    darkgreen: "006400",
    darkkhaki: "BDB76B",
    darkmagenta: "8B008B",
    darkolivegreen: "556B2F",
    darkorange: "FF8C00",
    darkorchid: "9932CC",
    darkred: "8B0000",
    darksalmon: "E9967A",
    darkseagreen: "8FBC8B",
    darkslateblue: "483D8B",
    darkslategray: "2F4F4F",
    darkturquoise: "00CED1",
    darkviolet: "9400D3",
    deeppink: "FF1493",
    deepskyblue: "00BFFF",
    dimgray: "696969",
    dodgerblue: "1E90FF",
    firebrick: "B22222",
    floralwhite: "FFFAF0",
    forestgreen: "228B22",
    fuchsia: "FF00FF",
    gainsboro: "DCDCDC",
    ghostwhite: "F8F8FF",
    gold: "FFD700",
    goldenrod: "DAA520",
    gray: "808080",
    green: "008000",
    greenyellow: "ADFF2F",
    honeydew: "F0FFF0",
    hotpink: "FF69B4",
    indianred: "CD5C5C",
    indigo: "4B0082",
    ivory: "FFFFF0",
    khaki: "F0E68C",
    lavender: "E6E6FA",
    lavenderblush: "FFF0F5",
    lawngreen: "7CFC00",
    lemonchiffon: "FFFACD",
    lightblue: "ADD8E6",
    lightcoral: "F08080",
    lightcyan: "E0FFFF",
    lightgoldenrodyellow: "FAFAD2",
    lightgreen: "90EE90",
    lightgrey: "D3D3D3",
    lightpink: "FFB6C1",
    lightsalmon: "FFA07A",
    lightseagreen: "20B2AA",
    lightskyblue: "87CEFA",
    lightslategray: "778899",
    lightsteelblue: "B0C4DE",
    lightyellow: "FFFFE0",
    lime: "00FF00",
    limegreen: "32CD32",
    linen: "FAF0E6",
    magenta: "FF00FF",
    maroon: "800000",
    mediumaquamarine: "66CDAA",
    mediumblue: "0000CD",
    mediumorchid: "BA55D3",
    mediumpurple: "9370DB",
    mediumseagreen: "3CB371",
    mediumslateblue: "7B68EE",
    mediumspringgreen: "00FA9A",
    mediumturquoise: "48D1CC",
    mediumvioletred: "C71585",
    midnightblue: "191970",
    mintcream: "F5FFFA",
    mistyrose: "FFE4E1",
    moccasin: "FFE4B5",
    navajowhite: "FFDEAD",
    navy: "000080",
    oldlace: "FDF5E6",
    olive: "808000",
    olivedrab: "6B8E23",
    orange: "FFA500",
    orangered: "FF4500",
    orchid: "DA70D6",
    palegoldenrod: "EEE8AA",
    palegreen: "98FB98",
    paleturquoise: "AFEEEE",
    palevioletred: "DB7093",
    papayawhip: "FFEFD5",
    peachpuff: "FFDAB9",
    peru: "CD853F",
    pink: "FFC0CB",
    plum: "DDA0DD",
    powderblue: "B0E0E6",
    purple: "800080",
    red: "FF0000",
    rosybrown: "BC8F8F",
    royalblue: "4169E1",
    saddlebrown: "8B4513",
    salmon: "FA8072",
    sandybrown: "F4A460",
    seagreen: "2E8B57",
    seashell: "FFF5EE",
    sienna: "A0522D",
    silver: "C0C0C0",
    skyblue: "87CEEB",
    slateblue: "6A5ACD",
    slategray: "708090",
    snow: "FFFAFA",
    springgreen: "00FF7F",
    steelblue: "4682B4",
    tan: "D2B48C",
    teal: "008080",
    thistle: "D8BFD8",
    tomato: "FF6347",
    turquoise: "40E0D0",
    violet: "EE82EE",
    wheat: "F5DEB3",
    white: "FFFFFF",
    whitesmoke: "F5F5F5",
    yellow: "FFFF00",
    yellowgreen: "9ACD32",
  };
  var aV =
    "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
  var aS;
  if (!BonaPage.isObjInited) {
    BonaPage.PAGE_LOADING = 10;
    BonaPage.PAGE_LOADED = 20;
    BonaPage.PAGE_LOADEDORTIMEOUT = 100;
    BonaPage.PAGE_PARSING = 30;
    BonaPage.PAGE_PARSED = 40;
    BonaPage.PAGE_UNLOADING = 50;
    BonaPage.PAGE_UNLOADED = 60;
    BonaPage.UPDATEPANEL_UNDEFINED = 70;
    BonaPage.UPDATEPANEL_LOADING = 80;
    BonaPage.UPDATEPANEL_LOADED = 90;
    BonaPage.HANDLERTYPE_ONCE = 10;
    BonaPage.HANDLERTYPE_ALWAYS = 20;
    BonaPage.setPageState = aG;
    BonaPage.addPageStateHandler = Q;
    BonaPage.runPageStateHandlers = aD;
    BonaPage.setPageStateLoaded = aH;
    BonaPage.setPageStateUnloading = aJ;
    BonaPage.setPageStateUnloaded = aI;
    BonaPage.getLocationDomain = function () {
      return aT;
    };
    BonaPage.$bonaObject = d;
    BonaPage.reloadCurrentPage = y;
    BonaPage.loadPage = w;
    BonaPage.getUniqueIdentifier = u;
    BonaPage.getEvent = l;
    BonaPage.getEventTarget = o;
    BonaPage.getRelatedTarget = s;
    BonaPage.eventHoverTag = "hoverTags";
    BonaPage.getEventTags = n;
    BonaPage.getAttrByName = j;
    BonaPage.stopEvent = I;
    BonaPage.stopEventDefault = K;
    BonaPage.stopEventBubbling = J;
    BonaPage.getEventMouseCoords = m;
    BonaPage.stopEnter = H;
    BonaPage.getFunctionKeyByKeyCode = p;
    BonaPage.validateChar = M;
    BonaPage.keyValidator = v;
    BonaPage.getRandomId = r;
    BonaPage.getMouseButton = q;
    BonaPage.addHandler = a;
    BonaPage.removeHandler = z;
    BonaPage.addHandlers = b;
    BonaPage.removeHandlers = A;
    BonaPage.convertColorToHex = h;
    BonaPage.convertColorHexToRGB = g;
    BonaPage.setElementOpacity = E;
    BonaPage.preventPressEnter = x;
    BonaPage.encodeHtml = af;
    BonaPage.decodeHtml = ac;
    BonaPage.getContactDisplayName = am;
    BonaPage.webRequest = aQ;
    BonaPage.goToTopWindow = an;
    BonaPage.clientRedirect = f;
    BonaPage.scrollToElement = B;
    BonaPage.disableSelect = i;
    BonaPage.getCookie = k;
    BonaPage.setCookie = D;
    BonaPage.unsetCookie = L;
    BonaPage.clearTopCache = e;
    BonaPage.setWindowName = G;
    BonaPage.setAutoWindowName = C;
    BonaPage.getSelectionStartIndex = t;
    BonaPage.setSelectionStartIndex = F;
    BonaPage.openLink = function (aW, aX) {
      aP.Tools.OpenLinkManager.openLink(aW, aX);
    };
    BonaPage.showPageShadingContainer = aL;
    BonaPage.hidePageShadingContainer = ao;
    BonaPage.clearSelectionInRadioButtonsGroup = X;
    BonaPage.getDomainList = function () {
      return ad;
    };
    BonaPage.getZGif = function () {
      return aV;
    };
    BonaPage.Utils = {};
    BonaPage.Utils.fixGeckoTables = ai;
    BonaPage.Utils.getAttrEx = al;
    BonaPage.Utils.bindEnterKeyDefusionFunction = c;
    BonaPage.PageParsed = function (aW, aY, aX) {
      aY = aY || aR;
      (aX = aX || BonaPage.HANDLERTYPE_ALWAYS),
        BonaPage.addPageStateHandler(BonaPage.PAGE_PARSED, aW, aX, {
          window: aY,
        });
    };
    BonaPage.PageLoaded = function (aW) {
      BonaPage.addPageStateHandler(BonaPage.PAGE_LOADED, aW);
    };
    BonaPage.PageUnLoaded = function (aW, aX) {
      aX = aX || aR;
      BonaPage.addPageStateHandler(
        BonaPage.PAGE_UNLOADED,
        aW,
        BonaPage.HANDLERTYPE_ONCE,
        { window: aX }
      );
    };
    BonaPage.PageUnLoading = function (aW) {
      BonaPage.addPageStateHandler(BonaPage.PAGE_UNLOADING, aW);
    };
    aS = 0;
    BonaPage.isObjInited = true;
    aG(BonaPage.PAGE_LOADING);
  }
  function ap(aW) {
    if (aP.topWindow && !aP.topWindow.name) {
      aP.setWindowName(aP.topWindow, "nmWATopWindow");
    }
    aW.BonaPage.InternalPageType = {};
    if (aW.bonaPage_InternalPageType) {
      aW.BonaPage.InternalPageType.isWebPage = aW.bonaPage_InternalPageType
        .isWebPage
        ? true
        : false;
      aW.BonaPage.InternalPageType.isSystemPage = aW.bonaPage_InternalPageType
        .isSystemPage
        ? true
        : false;
      aW.BonaPage.InternalPageType.isErrorPage = aW.bonaPage_InternalPageType
        .isErrorPage
        ? true
        : false;
      aW.BonaPage.InternalPageType.isWebPageTemplate =
        aW.bonaPage_pageTemplate && aW.bonaPage_pageTemplate.id ? true : false;
      aW.BonaPage.InternalPageType.isAdminPage = aW.bonaPage_InternalPageType
        .isAdminPage
        ? true
        : false;
      aW.BonaPage.InternalPageType.isDialogPage = aW.bonaPage_InternalPageType
        .isDialogPage
        ? true
        : false;
      aW.BonaPage.InternalPageType.isError404Page = aW.bonaPage_InternalPageType
        .isError404Page
        ? true
        : false;
      aW.BonaPage.InternalPageType.isUndefinedPage = aW
        .bonaPage_InternalPageType.isUndefinedPage
        ? true
        : false;
    } else {
      aW.BonaPage.InternalPageType.isWebPage = false;
      aW.BonaPage.InternalPageType.isAdminPage = false;
      aW.BonaPage.InternalPageType.isDialogPage = false;
      aW.BonaPage.InternalPageType.isError404Page = false;
      aW.BonaPage.InternalPageType.isUndefinedPage = true;
    }
    aW.BonaPage.PageView = {};
    if (aW.bonaPage_PageView) {
      aW.BonaPage.PageView.isAnonymousView = aW.bonaPage_PageView
        .isAnonymousView
        ? true
        : false;
      aW.BonaPage.PageView.isMemberView = aW.bonaPage_PageView.isMemberView
        ? true
        : false;
      aW.BonaPage.PageView.isAdminView = aW.bonaPage_PageView.isAdminView
        ? true
        : false;
    } else {
      aW.BonaPage.PageView.isAnonymousView = true;
      aW.BonaPage.PageView.isMemberView = false;
      aW.BonaPage.PageView.isAdminView = false;
    }
    aW.BonaPage.isWidgetMode =
      aW.WidgetMode && aW.WidgetMode == 1 ? true : false;
    aW.BonaPage.isWidgetMode =
      !aW.BonaPage.isWidgetMode && aq ? aq : aW.BonaPage.isWidgetMode;
    aW.BonaPage.isEmulatedMode = false;
    if (aW.bonaPage_StatRes) {
      aW.BonaPage.statRes = bonaPage_StatRes;
      aW.BonaPage.adminPath = bonaPage_StatRes + "Admin/";
      aW.BonaPage.adminResPath = bonaPage_StatRes + "Admin/html_res/";
      aW.BonaPage.adminResImgPath = bonaPage_StatRes + "Admin/html_res/images/";
    }
    aW.BonaPage.version = aW.bonaPage_BuildVer;
    aW.BonaPage.fullVersion =
      aW.bonaPage_ThemeId != null
        ? aW.BonaPage.version + "." + aW.bonaPage_ThemeVer
        : aW.BonaPage.version;
    aW.BonaPage.themeHash =
      aW.bonaPage_ThemeVer != null ? aW.bonaPage_ThemeVer : "";
    aW.BonaPage.themeVersion = !isNaN(parseFloat(aW.bonaPage_ThemeVersion))
      ? parseFloat(aW.bonaPage_ThemeVersion)
      : null;
    aW.BonaPage.themeId =
      aW.bonaPage_ThemeId != null ? aW.bonaPage_ThemeId : "";
    aW.BonaPage.pageId = aW.bonaPage_id != null ? aW.bonaPage_id : "";
    aW.BonaPage.version_id = aW.version_id != null ? aW.version_id : "";
    aW.BonaPage.State = {};
    aW.BonaPage.State.isPageLoading = true;
    aW.BonaPage.State.isPageLoaded = false;
    aW.BonaPage.State.isPageLoadedOrTimeout = false;
    aW.BonaPage.State.isPageParsing = true;
    aW.BonaPage.State.isPageParsed = false;
    aW.BonaPage.State.isPageUnloading = false;
    aW.BonaPage.State.isPageUnloaded = false;
    aW.BonaPage.State.isPageUnloaded = false;
    aW.BonaPage.State.isUpdatePanelUndefined = true;
    aW.BonaPage.State.isUpdatePanelLoading = false;
    aW.BonaPage.State.isUpdatePanelLoaded = false;
    aW.BonaPage.stateHandlers = {};
    aW.BonaPage.stateHandlers[aW.BonaPage.PAGE_LOADING] = [];
    aW.BonaPage.stateHandlers[aW.BonaPage.PAGE_LOADED] = [];
    aW.BonaPage.stateHandlers[aW.BonaPage.PAGE_LOADEDORTIMEOUT] = [];
    aW.BonaPage.stateHandlers[aW.BonaPage.PAGE_PARSING] = [];
    aW.BonaPage.stateHandlers[aW.BonaPage.PAGE_PARSED] = [];
    aW.BonaPage.stateHandlers[aW.BonaPage.PAGE_UNLOADING] = [];
    aW.BonaPage.stateHandlers[aW.BonaPage.PAGE_UNLOADED] = [];
    aW.BonaPage.stateHandlers[aW.BonaPage.UPDATEPANEL_UNDEFINED] = [];
    aW.BonaPage.stateHandlers[aW.BonaPage.UPDATEPANEL_LOADING] = [];
    aW.BonaPage.stateHandlers[aW.BonaPage.UPDATEPANEL_LOADED] = [];
    aW.BonaPage.addHandler(aW, "load", aW.BonaPage.setPageStateLoaded);
    aW.BonaPage.addHandler(
      aW,
      "beforeunload",
      aW.BonaPage.setPageStateUnloading
    );
    aW.BonaPage.addHandler(aW, "unload", aW.BonaPage.setPageStateUnloaded);
    if (aW == aP.topWindow) {
      aP.init();
    }
    aW.BonaPage.isObjValid = true;
  }
  function aH(aW) {
    aW = aW || {};
    var aX = aW.window || aR;
    if (aX.BonaPage.loadingTimeout) {
      clearTimeout(aX.BonaPage.loadingTimeout);
    }
    aX.BonaPage.setPageState(aX.BonaPage.PAGE_LOADED);
  }
  function aJ(aW) {
    aW = aW || {};
    var aX = aW.window || aR;
    aX.BonaPage.setPageState(aX.BonaPage.PAGE_UNLOADING);
  }
  function aI(aW) {
    aW = aW || {};
    var aX = aW.window || aR;
    aX.BonaPage.setPageState(aX.BonaPage.PAGE_UNLOADED);
    BonaPage.removeHandler(aX, "load", aX.BonaPage.setPageStateLoaded);
    BonaPage.removeHandler(
      aX,
      "beforeunload",
      aX.BonaPage.setPageStateUnloading
    );
    BonaPage.removeHandler(aX, "unload", aX.BonaPage.setPageStateUnloaded);
  }
  function S() {
    if (
      aR.Sys &&
      Sys.WebForms &&
      Sys.WebForms.PageRequestManager &&
      typeof Sys.WebForms.PageRequestManager.getInstance == "function"
    ) {
      var aW = Sys.WebForms.PageRequestManager.getInstance();
      if (aW) {
        aW.add_beginRequest(U);
        aW.add_endRequest(ag);
      }
    }
  }
  function U(aX, aW) {
    aG(BonaPage.UPDATEPANEL_LOADING);
  }
  function ag(aX, aW) {
    aG(BonaPage.UPDATEPANEL_LOADED);
  }
  function aG(aY, aW) {
    aW = aW || {};
    var aZ = aW.window || aR,
      aX;
    if (aY == BonaPage.PAGE_LOADING && !aZ.BonaPage.State) {
      ap(aZ);
    }
    aX = aZ.BonaPage.State;
    if (aX[aY]) {
      return;
    }
    if (
      aY != BonaPage.UPDATEPANEL_LOADING &&
      aY != BonaPage.UPDATEPANEL_LOADED
    ) {
      aX[BonaPage.PAGE_LOADING] = aX.isPageLoading = false;
      aX[BonaPage.PAGE_LOADED] = aX.isPageLoaded = false;
      aX[BonaPage.PAGE_PARSING] = aX.isPageParsing = false;
      aX[BonaPage.PAGE_PARSED] = aX.isPageParsed = false;
      aX[BonaPage.PAGE_UNLOADING] = aX.isPageUnloading = false;
      aX[BonaPage.PAGE_UNLOADED] = aX.isPageUnloaded = false;
    }
    switch (aY) {
      case BonaPage.PAGE_LOADING:
        aX[BonaPage.PAGE_LOADING] = aX.isPageLoading = true;
        aD(BonaPage.PAGE_LOADING, aZ);
        break;
      case BonaPage.PAGE_LOADED:
        aX[BonaPage.PAGE_LOADED] = aX.isPageLoaded = true;
        aX[BonaPage.PAGE_PARSED] = aX.isPageParsed = true;
        aD(BonaPage.PAGE_LOADED, aZ);
        break;
      case BonaPage.PAGE_LOADEDORTIMEOUT:
        aH(aZ);
        break;
      case BonaPage.PAGE_PARSING:
        aX[BonaPage.PAGE_LOADING] = aX.isPageLoading = true;
        aX[BonaPage.PAGE_PARSING] = aX.isPageParsing = true;
        aD(BonaPage.PAGE_PARSING, aZ);
        break;
      case BonaPage.PAGE_PARSED:
        aX[BonaPage.PAGE_LOADING] = aX.isPageLoading = true;
        aX[BonaPage.PAGE_PARSED] = aX.isPageParsed = true;
        S();
        aD(BonaPage.PAGE_PARSED, aZ);
        break;
      case BonaPage.PAGE_UNLOADING:
        aX[BonaPage.PAGE_LOADED] = aX.isPageLoaded = true;
        aX[BonaPage.PAGE_PARSED] = aX.isPageParsed = true;
        aX[BonaPage.PAGE_UNLOADING] = aX.isPageUnloading = true;
        aD(BonaPage.PAGE_UNLOADING, aZ);
        break;
      case BonaPage.PAGE_UNLOADED:
        aX[BonaPage.PAGE_LOADED] = aX.isPageLoaded = true;
        aX[BonaPage.PAGE_PARSED] = aX.isPageParsed = true;
        aX[BonaPage.PAGE_UNLOADED] = aX.isPageUnloaded = true;
        aX[BonaPage.UPDATEPANEL_UNDEFINED] = aX.isUpdatePanelUndefined = true;
        aX[BonaPage.UPDATEPANEL_LOADING] = aX.isUpdatePanelLoading = false;
        aX[BonaPage.UPDATEPANEL_LOADED] = aX.isUpdatePanelLoaded = false;
        aD(BonaPage.PAGE_UNLOADED, aZ);
        break;
      case BonaPage.UPDATEPANEL_LOADING:
        aX[BonaPage.UPDATEPANEL_UNDEFINED] = aX.isUpdatePanelUndefined = false;
        aX[BonaPage.UPDATEPANEL_LOADING] = aX.isUpdatePanelLoading = true;
        aX[BonaPage.UPDATEPANEL_LOADED] = aX.isUpdatePanelLoaded = false;
        aD(BonaPage.UPDATEPANEL_LOADING, aZ);
        break;
      case BonaPage.UPDATEPANEL_LOADED:
        aX[BonaPage.UPDATEPANEL_UNDEFINED] = aX.isUpdatePanelUndefined = false;
        aX[BonaPage.UPDATEPANEL_LOADING] = aX.isUpdatePanelLoading = false;
        aX[BonaPage.UPDATEPANEL_LOADED] = aX.isUpdatePanelLoaded = true;
        aD(BonaPage.UPDATEPANEL_LOADED, aZ);
        break;
    }
  }
  function Q(a0, aX, a2, aW) {
    aW = typeof a2 === "object" ? a2 : aW || {};
    var aY,
      a3 = aW.window || aR,
      aZ = a3.BonaPage.State,
      a1 = a3.BonaPage.stateHandlers;
    aY = a1[a0].length;
    a2 = a2 || BonaPage.HANDLERTYPE_ONCE;
    if (aZ[a0]) {
      aX();
    }
    if (!aZ[a0] || a2 == BonaPage.HANDLERTYPE_ALWAYS) {
      a1[a0][aY] = {};
      a1[a0][aY].type = a2;
      a1[a0][aY].handler = aX;
    }
  }
  function aD(aZ, aW) {
    aW = aW || {};
    var aY,
      a0 = aW.window || aR,
      aX = a0.BonaPage.stateHandlers[aZ];
    for (aY = 0; aY < aX.length; aY++) {
      aX[aY].handler();
      if (aX[aY].type == BonaPage.HANDLERTYPE_ONCE) {
        aX.splice(aY, 1);
        aY--;
      }
    }
  }
  if (!aP.topWindow.adminpanel && !aP.topWindow.contentarea) {
    aP.topWindow.contentarea = aR;
  }
  BonaPage.changeBalancePanelState = V;
  function Y() {
    if (
      !aR.bonaPage_BalancePanel ||
      document
        .getElementsByTagName("BODY")[0]
        .className.indexOf("printContentView") >= 0
    ) {
      return;
    }
    var aX = aR.bonaPage_BalancePanel,
      a1 = "contentBalancePanelId",
      a9 = "opened",
      aZ = "closed",
      a4 = a9,
      a2 = "bpsh",
      a7 = BonaPage.getCookie(a2),
      ba = 30,
      a8 = globalUtils.getVisibleClientHeight(),
      a5 = "";
    if (!BonaPage.isWidgetMode) {
      a8 = a8 - ba;
      a5 = "max-height: " + a8 + "px;overflow-y: auto;overflow-x: hidden;";
    }
    if (a7 && a7 == "0") {
      a4 = aZ;
    }
    var aY = aP.String.format(
      "BonaPage.changeBalancePanelState('{0}','{1}','{2}','{3}');return false;",
      a1,
      a2,
      a9,
      aZ
    );
    var a0 = document.createElement("DIV");
    a0.setAttribute("id", "WA_messagePopup");
    if (aR.WABannerStickyBottom != null) {
      a0.setAttribute("class", "hasStickyBottomBanner");
    }
    if (aq) {
      a0.style.position = "relative";
      a0.style[aP.Browser.isIE ? "styleFloat" : "cssFloat"] = "right";
    }
    var aW = [];
    aW.push('<div id="' + a1 + '" class="' + a4 + '" style="' + a5 + '">');
    aW.push("<ul>");
    for (var a6 = 0; a6 < aX.length; a6++) {
      var a3 = "";
      if (a6 === 0) {
        a3 = "first";
      }
      if (a6 == aX.length - 1) {
        a3 = "last";
      }
      aW.push('<li class="' + a3 + '">');
      aW.push('  <a href="' + aX[a6].url + '">' + aX[a6].text + "</a>");
      aW.push("</li>");
    }
    aW.push("</ul>");
    aW.push(
      '<a href="#" id="messagePopupButton" onClick="' + aY + '">&nbsp;</a>'
    );
    aW.push("</div>");
    a0.innerHTML = aW.join("");
    if (document.body) {
      document.body.appendChild(a0);
    }
  }
  function V(aY, aZ, a0, aW) {
    var aX = aP.Dom.$(aY);
    if (aX.className == a0) {
      aX.className = aW;
      BonaPage.setCookie(aZ, "0");
      return;
    }
    aX.className = a0;
    BonaPage.setCookie(aZ, "1");
    if (BonaPage.isWidgetMode) {
      aR.scrollTo(0, document.body.scrollHeight);
    }
  }
  BonaPage.addPageStateHandler(BonaPage.PAGE_LOADED, Y);
  function P() {
    var aW = document.body.className;
    if (
      (aW.indexOf("publicContentView") == -1 &&
        aW.indexOf("memberContentView") == -1 &&
        aW.indexOf("adminContentView") == -1) ||
      aW.indexOf("customizeContentView") != -1
    ) {
      return;
    }
    var aY = aP.Dom.$("idLoginUserNameTextBox");
    if (!aY) {
      return;
    }
    var aX = aP.Dom.$$("input", "idLoginUserNameTextBox")[0];
    var aZ = aP.Dom.$$("input", "idLoginPasswordTextBox")[0];
    if (aX.value.length > 0) {
      aX.style.backgroundImage = "none";
    }
    if (aZ.value.length > 0) {
      aZ.style.backgroundImage = "none";
    }
    aX.onfocus = function () {
      this.style.backgroundImage = "none";
      this.onfocus = null;
      return true;
    };
    aZ.onfocus = function () {
      this.style.backgroundImage = "none";
      this.onfocus = null;
      return true;
    };
    if (!aX.value.length || !aZ.value.length) {
      setTimeout(P, 77);
    }
  }
  function ai(a1, a0) {
    var aY, aZ;
    var a8, ba, bb, bc, a9;
    var a4, a6, a2, aW, aX;
    var a5, a7;
    var a3 = a1 || aR;
    var bd = a0 ? [a0] : a3.document.body.getElementsByTagName("TABLE");
    if (!bd || !bd.length) {
      return false;
    }
    for (aY = 0; aY < bd.length; aY++) {
      if (bd[aY].getAttribute("watable", 0)) {
        a5 = bd[aY];
        if (!a5 || !a5.style) {
          continue;
        }
        a8 = a5.style.margin
          ? a5.style.margin
          : aP.Style.getElementStyle(a5, "margin");
        a8 = !isNaN(parseInt(a8)) && parseInt(a8) !== 0;
        ba = a5.style.marginLeft
          ? a5.style.marginLeft
          : aP.Style.getElementStyle(a5, "marginLeft");
        ba = !isNaN(parseInt(ba)) && parseInt(ba) !== 0;
        bb = a5.style.marginRight
          ? a5.style.marginRight
          : aP.Style.getElementStyle(a5, "marginRight");
        bb = !isNaN(parseInt(bb)) && parseInt(bb) !== 0;
        bc = a5.style.marginTop
          ? a5.style.marginTop
          : aP.Style.getElementStyle(a5, "marginTop");
        bc = !isNaN(parseInt(bc)) && parseInt(bc) !== 0;
        a9 = a5.style.marginBottom
          ? a5.style.marginBottom
          : aP.Style.getElementStyle(a5, "marginBottom");
        a9 = !isNaN(parseInt(a9)) && parseInt(a9) !== 0;
        if (a5.style.borderCollapse.toLowerCase() == "collapse" && !a8) {
          if (
            !a5.getAttribute("align", 0) ||
            a5.getAttribute("align", 0).toLowerCase() != "center"
          ) {
            if (!bd[aY].getAttribute("wamarginleft", 0) && !ba) {
              a4 = a5.style.borderLeftWidth
                ? a5.style.borderLeftWidth
                : aP.Style.getElementStyle(a5, "borderLeftWidth");
              a4 = !isNaN(parseInt(a4)) ? parseInt(a4) : 0;
              a6 = 0;
              for (aZ = 0; aZ < a5.rows.length && aZ < 17; aZ++) {
                if (a5.rows[aZ].cells && a5.rows[aZ].cells.length > 0) {
                  a7 = a5.rows[aZ].cells[0];
                  if (a7 && a7.style) {
                    a2 = a7.style.borderLeftWidth
                      ? a7.style.borderLeftWidth
                      : aP.Style.getElementStyle(a7, "borderLeftWidth");
                    a2 = !isNaN(parseInt(a2)) ? parseInt(a2) : 0;
                    if (a2 > a6) {
                      a6 = a2;
                    }
                  }
                }
              }
              aW = a4 > a6 ? a4 : a6;
              if (aW > 0) {
                aX = Math.ceil(aW / 2);
                a5.style.marginLeft = aX + "px";
                a5.setAttribute("wamarginleft", 1, 0);
              }
            }
            if (!bd[aY].getAttribute("wamarginright", 0) && !bb) {
              a4 = a5.style.borderRightWidth
                ? a5.style.borderRightWidth
                : aP.Style.getElementStyle(a5, "borderRightWidth");
              a4 = !isNaN(parseInt(a4)) ? parseInt(a4) : 0;
              a6 = 0;
              for (aZ = 0; aZ < a5.rows.length && aZ < 17; aZ++) {
                if (a5.rows[aZ].cells && a5.rows[aZ].cells.length > 0) {
                  a7 = a5.rows[aZ].cells[a5.rows[aZ].cells.length - 1];
                  if (a7 && a7.style) {
                    a2 = a7.style.borderRightWidth
                      ? a7.style.borderRightWidth
                      : aP.Style.getElementStyle(a7, "borderRightWidth");
                    a2 = !isNaN(parseInt(a2)) ? parseInt(a2) : 0;
                    if (a2 > a6) {
                      a6 = a2;
                    }
                  }
                }
              }
              aW = a4 > a6 ? a4 : a6;
              if (aW > 0) {
                aX = Math.ceil(aW / 2);
                a5.style.marginRight = aX + "px";
                a5.setAttribute("wamarginright", 1, 0);
              }
            }
          }
          if (!bd[aY].getAttribute("wamargintop", 0) && !bc) {
            a4 = a5.style.borderTopWidth
              ? a5.style.borderTopWidth
              : aP.Style.getElementStyle(a5, "borderTopWidth");
            a4 = !isNaN(parseInt(a4)) ? parseInt(a4) : 0;
            a6 = 0;
            if (
              a5.rows &&
              a5.rows.length > 0 &&
              a5.rows[0] &&
              a5.rows[0].cells
            ) {
              for (aZ = 0; aZ < a5.rows[0].cells.length && aZ < 17; aZ++) {
                a7 = a5.rows[0].cells[aZ];
                if (a7 && a7.style) {
                  a2 = a7.style.borderTopWidth
                    ? a7.style.borderTopWidth
                    : aP.Style.getElementStyle(a7, "borderTopWidth");
                  a2 = !isNaN(parseInt(a2)) ? parseInt(a2) : 0;
                  if (a2 > a6) {
                    a6 = a2;
                  }
                }
              }
            }
            aW = a4 > a6 ? a4 : a6;
            if (aW > 0) {
              aX = Math.ceil(aW / 2);
              a5.style.marginTop = aX + "px";
              a5.setAttribute("wamargintop", 1, 0);
            }
          }
          if (!bd[aY].getAttribute("wamarginbottom", 0) && !a9) {
            a4 = a5.style.borderBottomWidth
              ? a5.style.borderBottomWidth
              : aP.Style.getElementStyle(a5, "borderBottomWidth");
            a4 = !isNaN(parseInt(a4)) ? parseInt(a4) : 0;
            a6 = 0;
            if (
              a5.rows &&
              a5.rows.length > 0 &&
              a5.rows[a5.rows.length - 1] &&
              a5.rows[a5.rows.length - 1].cells
            ) {
              for (
                aZ = 0;
                aZ < a5.rows[a5.rows.length - 1].cells.length && aZ < 17;
                aZ++
              ) {
                a7 = a5.rows[a5.rows.length - 1].cells[aZ];
                if (a7 && a7.style) {
                  a2 = a7.style.borderBottomWidth
                    ? a7.style.borderBottomWidth
                    : aP.Style.getElementStyle(a7, "borderBottomWidth");
                  a2 = !isNaN(parseInt(a2)) ? parseInt(a2) : 0;
                  if (a2 > a6) {
                    a6 = a2;
                  }
                }
              }
            }
            aW = a4 > a6 ? a4 : a6;
            if (aW > 0) {
              aX = Math.ceil(aW / 2);
              a5.style.marginBottom = aX + "px";
              a5.setAttribute("wamarginbottom", 1, 0);
            }
          }
        }
      }
    }
  }
  function al(aY, aX) {
    if (aY == null) {
      return false;
    }
    var aW = aY.style[aX] ? aY.style[aX] : aP.Style.getElementStyle(aY, aX);
    if (
      aW == null ||
      (aW == "transparent" && aX == "backgroundColor") ||
      (aW == "none" && aX == "backgroundImage")
    ) {
      return false;
    } else {
      return aW;
    }
  }
  if (aR.name && aR.name == "nmCustomThemePreviewIFrame") {
    BonaPage.isEmulatedMode = true;
    if (aU.indexOf("javascript:") == -1 && aU.indexOf("emulatemode=1") == -1) {
      aR.location.replace(
        aU + (aU.indexOf("?") == -1 ? "?" : "&") + "emulatemode=1"
      );
    }
    aR.AdminPanel = {};
    aR.AdminPanel.reset = function () {};
    aR.AdminPanel.setStatusMessage = function () {};
    aR.AdminPanel.hideWaitMessage = function () {};
    aR.AdminPanel.setToolbarMessage = function () {};
    aR.AdminPanel.clearCache = function () {};
  }
  function aK() {
    var aW;
    try {
      aW = aM.adminpanel;
    } catch (aX) {}
    if (aW) {
      if (
        aM.adminpanel &&
        aM.contentarea &&
        aR == aM.contentarea &&
        aM.contentarea.BonaPage.themeHash != aM.BonaPage.themeHash &&
        aM.BonaEditor &&
        aM.BonaEditor.toolbar &&
        aM.BonaEditor.toolbar.isObjValid
      ) {
        aM.BonaPage.themeHash = aM.contentarea.BonaPage.themeHash;
        aM.BonaEditor.toolbar.reInitFormatingDropdown(
          aM.BonaPage.themeHash.toString() + aM.BonaPage.version.toString()
        );
      }
    }
  }
  function Z() {
    if (
      !aR.bonaPage_MemberPanel ||
      BonaPage.isWidgetMode ||
      document
        .getElementsByTagName("BODY")[0]
        .className.indexOf("printContentView") >= 0
    ) {
      return;
    }
    var aW = [];
    var aY =
      "font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-style: normal; color: #000000;";
    var aZ = aR.bonaPage_MemberPanel;
    var a0 = document.createElement("DIV");
    a0.style.position = "fixed";
    a0.style.right = "0";
    a0.style.top = "0";
    a0.style.width = "220px";
    a0.style.height = "32px";
    a0.style.zIndex = "37937";
    a0.style.backgroundColor = "#E7E7E7";
    a0.className = "switchToAdminShadowContainer";
    var aX = document.createElement("DIV");
    aX.style.position = "fixed";
    aX.style.right = "0";
    aX.style.top = "0";
    aX.style.width = "220px";
    aX.style.height = "32px";
    aX.style.zIndex = "37973";
    aX.style.backgroundColor = "#E7E7E7";
    aX.className = "switchToAdminContainer";
    aW.push('    <div id="WA_switchToAdmin" >');
    aW.push(
      '      <a href="' +
        aZ.switchToAdminUrl +
        '" style="' +
        aY +
        '">' +
        aZ.switchToAdminText +
        "</a>"
    );
    aW.push('      <span style="' + aY + '">&nbsp;|&nbsp;</span>');
    aW.push(
      '      <a href="' +
        aZ.signOutUrl +
        '" style="' +
        aY +
        '">' +
        aZ.signOutText +
        "</a>"
    );
    aW.push("    </div>");
    aX.innerHTML = aW.join("");
    document.body.appendChild(a0);
    BonaPage.setElementOpacity(a0, 37);
    document.body.appendChild(aX);
  }
  function am(aW) {
    if (aW == null) {
      return null;
    }
    if (aW.fio) {
      return aW.fio;
    }
    if (aW.organization) {
      return aW.organization;
    }
    if (aW.email) {
      return aW.email;
    }
    if (aW.id) {
      return aW.id;
    }
    return null;
  }
  function af(aY) {
    aY = aY != null ? aY.toString() : "";
    var a0 = "";
    for (var aZ = 0; aZ < aY.length; aZ++) {
      var aX = aY.charCodeAt(aZ);
      var aW = aY.charAt(aZ);
      if (aX > 160 && aX < 256) {
        a0 += "&#" + aX + ";";
      } else {
        if (aW == "&") {
          a0 += "&amp;";
        } else {
          if (aW == "<") {
            a0 += "&lt;";
          } else {
            if (aW == ">") {
              a0 += "&gt;";
            } else {
              if (aW == '"') {
                a0 += "&quot;";
              } else {
                if (aW == "'") {
                  a0 += "&#39;";
                } else {
                  a0 += aW;
                }
              }
            }
          }
        }
      }
    }
    return a0;
  }
  function ac(aW) {
    aW = aW || "";
    return aW.replace(/\&([A-Za-z0-9#]+)\;/gi, function (aY, aX) {
      if (aX.indexOf("#") == 0) {
        aX = aX.substr(1);
        return String.fromCharCode(aX);
      } else {
        switch (aX.toLowerCase()) {
          case "amp":
            return "&";
          case "lt":
            return "<";
          case "gt":
            return ">";
          case "quot":
            return '"';
          default:
            return "&" + aX + ";";
        }
      }
    });
  }
  function aQ(aW, aX) {
    aX = aX || aR;
    var aY = new aX.Sys.Net.WebRequest();
    aY.set_url(aW.url);
    aY.set_httpVerb(aW.verb || "GET");
    aY.set_userContext(aW.context);
    aY.add_completed(aW.completedCallback || function () {});
    aY.invoke();
  }
  function an() {
    try {
      var aX = top.location.href;
      if (!aX) {
        top.location = self.location;
      }
    } catch (aW) {
      try {
        if (self != top) {
          top.location = self.location;
        }
      } catch (aW) {
        try {
          if (self != top) {
            top = self;
          }
          return false;
        } catch (aW) {
          return false;
        }
      }
      return false;
    }
  }
  var ax;
  var av;
  var ay;
  var az;
  var aw = null;
  function aa() {
    var aX = "Please wait...";
    var aZ = "/Admin/html_res/images/async-load-progress-01.gif";
    var aY =
      '<div id="idPageShadingWaitMessage" style="display: none; position: absolute; width: 350px; text-align: center;">' +
      (aZ
        ? '<img src="' + aZ + '" border="0"><br>&nbsp;<br>&nbsp;&nbsp;'
        : "") +
      '<span id="idPageShadingWaitMessageText" style="font-size: 12px; font-weight: bold;">' +
      (aX ? aX : "") +
      "</span></div>";
    var aW =
      '<div id="idPageShadingContainer" style="position: absolute; left: -3700px; top: -3700px; width: 1px; height: 1px; z-index: 7337; overflow: hidden; visibility: hidden; background-color: #FFFFFF; ' +
      (BonaPage.Browser.isIE
        ? "filter: progid:DXImageTransform.Microsoft.Alpha(opacity=73);"
        : "-moz-opacity: 0.73; -khtml-opacity: 0.73; opacity: 0.73;") +
      '">' +
      aY +
      "</div>";
    ax = document.createElement("SPAN");
    ax.innerHTML = aW;
    if (aP.Browser.isIE) {
      setTimeout(ab, 137);
    } else {
      ab();
    }
  }
  function ab() {
    document.body.appendChild(ax);
    av = document.getElementById("idPageShadingContainer");
    ay = document.getElementById("idPageShadingWaitMessage");
    az = document.getElementById("idPageShadingWaitMessageText");
    aw = false;
  }
  function aL(aX, aW) {
    if (aw === null) {
      setTimeout(aL, 137);
    }
    if (aw) {
      return;
    }
    aw = true;
    az.innerHTML = aW == null ? "Please wait..." : aW;
    ay.style.display = aX ? "block" : "none";
    av.style.visibility = "visible";
    setTimeout(function () {
      aF(aX);
    }, 10);
    BonaPage.addHandler(aR, "resize", aF);
    aw = true;
  }
  function ao() {
    if (aw === null) {
      setTimeout(ao, 137);
    }
    if (!aw) {
      return;
    }
    aw = false;
    BonaPage.removeHandler(aR, "resize", aF);
    av.style.visibility = "hidden";
    av.style.left = "-3700px";
    av.style.top = "-3700px";
    av.style.width = "1px";
    av.style.height = "1px";
    av.style.overflow = "hidden";
    ay.style.display = "none";
    aw = false;
  }
  function aF(aW) {
    if (aw === null) {
      setTimeout(aF, 137);
    }
    av.style.left = "0px";
    av.style.top = "0px";
    av.style.width = aP.Window.getScrollWidth() + "px";
    av.style.height = aP.Window.getScrollHeight() + "px";
    if (aW || ay.style.display == "block") {
      ay.style.left =
        Math.floor((aP.Window.getInnerWidth() - ay.offsetWidth) / 2) + "px";
      ay.style.top =
        Math.floor((aP.Window.getInnerHeight() - ay.offsetHeight) / 2) + "px";
    }
  }
  if (!BonaPage.addGlobalHandler) {
    BonaPage.addGlobalHandler = O;
    BonaPage.addGlobalMouseDown = function (aW, aX) {
      aP.addGlobalHandler(
        aP.Browser.isIE && aP.Browser.isIE < 9 ? "document" : "window",
        "mousedown",
        aW,
        aX,
        {}
      );
    };
    BonaPage.removeGlobalHandler = aB;
    BonaPage.addDomHandler = N;
    BonaPage.removeDomHandler = aA;
  }
  var ae = {};
  function O(aX, aY, aZ, a0, aW) {
    R(true, aX, aY, aZ, a0, aW);
  }
  function aB(aW) {
    R(false, null, null, null, aW);
  }
  function R(a7, aY, a0, a3, a4, aX) {
    aX = aX || {};
    var a5,
      a8,
      aW,
      a6,
      a2 = aX.excludeWindows || {},
      a1 = aX.excludeWindowPartName || null;
    if (aP.isTopWindow) {
      if (a7) {
        aA(aR, a4);
        N(aR, aY, a0, a3, a4, aX);
      } else {
        aA(aR, a4);
      }
      aW = document.getElementsByTagName("IFRAME");
      a8 = aW.length;
      for (a5 = 0; a5 < a8; a5++) {
        try {
          if (aW[a5].src.toLowerCase().indexOf(aT) === 0) {
            a6 = aP.Browser.isIE
              ? aW[a5].contentWindow
              : aW[a5].contentDocument.defaultView;
            if (!a6.name) {
              C(a6);
            }
            if (
              a7 &&
              !a2[a6.name] &&
              (a1 === null || a6.name.indexOf(a1) === -1)
            ) {
              aA(a6, a4);
              N(a6, aY, a0, a3, a4, aX);
            } else {
              aA(a6, a4);
            }
          }
        } catch (aZ) {
          continue;
        }
      }
    } else {
      if (a7) {
        BonaPage.topWindow.BonaPage.addGlobalHandler(aY, a0, a3, a4, aX);
      } else {
        BonaPage.topWindow.BonaPage.removeGlobalHandler(a4);
      }
    }
  }
  function N(a3, aX, aZ, a0, a1, aW) {
    aW = aW || {};
    var aY,
      a4 = a3.name;
    if (typeof aX == "string") {
      if (aX == "window") {
        aY = a3;
      } else {
        if (aX == "document") {
          aY = a3.document;
        } else {
          if (aX == "body") {
            aY = a3.document.body;
          } else {
            aY = a3.document.getElementById(obj);
          }
        }
      }
      if (aY) {
        if (!ae[a4]) {
          ae[a4] = {};
        }
        ae[a4][a1] = {
          win: a3,
          element: aY,
          eventName: aZ,
          handler: a0,
          handlerName: a1,
          args: aW,
        };
        ae[a4][a1].object = new a2(ae[a4][a1]);
      }
    }
    function a2(a5) {
      this.removeDomHandler = function () {
        BonaPage.removeHandler(a5.element, a5.eventName, a6);
      };
      BonaPage.addHandler(a5.element, a5.eventName, a6);
      function a6(a7) {
        if (!a7 && aR.event) {
          a7 = aR.event;
        }
        if (a5.handler != aN) {
          a5.handler(a7, a5.win, a5.args);
        }
      }
    }
  }
  function aA(aX, aW) {
    var aY = aX.name;
    if (ae[aY] && ae[aY][aW]) {
      ae[aY][aW].object.removeDomHandler();
      delete ae[aY][aW].object;
      ae[aY][aW].object = null;
      ae[aY][aW].element = null;
      ae[aY][aW].handler = null;
      ae[aY][aW].args = null;
      ae[aY][aW] = null;
      delete ae[aY][aW];
    }
  }
  function X(aW) {
    var aZ = (aW && aW.target) || (aR.event && aR.event.srcElement);
    var aY = aZ.parentNode.getElementsByTagName("input");
    for (var aX = 0; aX < aY.length; aX++) {
      aY[aX].checked = false;
    }
  }
  function aj() {
    if (!aR.ValidatorOnChange) {
      return;
    }
    aR.ValidatorOnChange = function (aW) {
      if (!aW) {
        aW = aR.event;
      }
      aR.Page_InvalidControlToBeFocused = null;
      var aY;
      if (typeof aW.srcElement != "undefined" && aW.srcElement != null) {
        aY = aW.srcElement;
      } else {
        aY = aW.target;
      }
      if (aY.tagName.toLowerCase() == "label") {
        aY = document.getElementById(aY.htmlFor);
      }
      var aZ = aY.Validators || [];
      for (var aX = 0; aX < aZ.length; aX++) {
        ValidatorValidate(aZ[aX], null, aW);
      }
      ValidatorUpdateIsValid();
    };
  }
  function ah() {
    if (aR.DES_PopupTransform) {
      aR.DES_PopupTransform = function (aX, aW) {
        if (!aX.PUTOn) {
          aX.style.filter += gDES_FilterU + " " + gDES_FilterD;
          if (!aX.filters) {
            return null;
          }
          aX.PUT1 =
            aX.filters.length - (gDES_FilterU ? 1 : 0) - (gDES_FilterD ? 1 : 0);
          if (aX.PUT1 < 0) {
            return null;
          }
          aX.PUTOn = 1;
        }
        if (!aX.filters) {
          return null;
        }
        var aY = aX.filters[aX.PUT1 + aW];
        if (aY) {
          aY.apply();
        }
        return aY;
      };
    }
    if (aR.DES_MonthTransform) {
      aR.DES_MonthTransform = function (aW, aX) {
        if (!aW.MTOn) {
          aW.MT1 = aW.filters != null ? aW.filters.length : 0;
          aW.style.filter += gDES_FilterL + gDES_FilterR + gDES_FilterJ;
          aW.MTOn = 1;
        }
        if (!aW.filters) {
          return null;
        }
        var aY = aW.filters[aW.MT1 + aX];
        aW.style.backgroundColor = gDES_FilterBG;
        aY.apply();
        return aY;
      };
    }
    if (aR.DES_PVOpqChg) {
      aR.DES_PVOpqChg = function (aW) {
        if (!gDES_PV.PV) {
          return;
        }
        if (gDES_PV.TmrID) {
          aR.clearTimeout(gDES_PV.TmrID);
          gDES_PV.TmrID = null;
        }
        var a0 = gDES_PV.MaxO;
        var aZ = gDES_PV.MinO;
        var aX = aW && gDES_PV.CurOpq == a0 ? gDES_PV.DlyO : 100;
        if (!aW) {
          gDES_PV.CurOpq += gDES_PV.IncOpq;
          if (gDES_PV.CurOpq > a0) {
            gDES_PV.CurOpq = a0;
          } else {
            if (gDES_PV.CurOpq < aZ) {
              gDES_PV.CurOpq = aZ;
            }
          }
          var aY = gDES_PV.PV.View;
          if (gDES_BI.IEWin55 && aY.filters) {
            aY.filters.item("DXImageTransform.Microsoft.Alpha").opacity =
              gDES_PV.CurOpq;
          } else {
            if (aY.style.opacity != null) {
              var a1 = gDES_PV.CurOpq / 100;
              aY.style.opacity = a1.toString();
            }
          }
        }
        if (!aW && (gDES_PV.CurOpq >= a0 || gDES_PV.CurOpq < aZ)) {
          gDES_PV.IncOpq = null;
          gDES_PV.CX = null;
          gDES_PV.TmrID = null;
        } else {
          gDES_PV.TmrID = aR.setTimeout("DES_PVOpqChg(0);", aX);
        }
      };
    }
  }
  function au() {
    if (aR.bonaPage_ThemeId && bonaPage_ThemeId.indexOf("nature_") >= 0) {
      P();
    }
    if (aP.Browser.isGecko) {
      ai();
    }
    aK();
    Z();
    aa();
    aj();
    if (BonaPage.Browser.isIE) {
      ah();
    }
  }
  BonaPage.addPageStateHandler(BonaPage.PAGE_PARSED, au);
})(window, BonaPage.topWindow.WA);
function BonaObject(element, elementWindow) {
  if (typeof element === "string") {
    this.object = WA.Dom.$(element);
    if (!this.object) {
      throw new Error(element + " object not found");
    }
  } else {
    if (typeof element === "object") {
      this.object = element;
    } else {
      alert("unknown element");
    }
  }
  this.elementWindow = elementWindow || window;
  if (this.object.bonaObject) {
    return this.object.bonaObject;
  } else {
    this.object.bonaObject = this;
  }
  var pThis = this;
  this.animation = new (function f() {
    var animation = {
      queue: [],
      activeAnimation: { settings: null, timer: null, step: null, steps: null },
      refreshTimeout: 30,
    };
    animation.effects = {
      halfSinus: function (value, activeStep, totalSteps) {
        var present = activeStep / totalSteps;
        return Math.sin((present * Math.PI) / 2) * value;
      },
      halfCosinus: function (value, activeStep, totalSteps) {
        var present = activeStep / totalSteps;
        return (1 - Math.cos((present * Math.PI) / 2)) * value;
      },
      fullSinus: function (value, activeStep, totalSteps) {
        var present = activeStep / totalSteps;
        return ((Math.sin(present * Math.PI - Math.PI / 2) + 1) * value) / 2;
      },
      linear: function (value, activeStep, totalSteps) {
        return (activeStep / totalSteps) * value;
      },
    };
    animation.add = function (params, settings) {
      this.queue.push({ settings: settings, rawData: params, properties: [] });
      checkQueue();
    };
    function initializeNewAnimationProperties(newAnimation) {
      for (var styleName in newAnimation.rawData) {
        var propertyInfo = parseCssProperty(
            computeStyle(pThis.object, styleName)
          ),
          parsedValue = parseAnimationProperty(
            newAnimation.rawData[styleName].value
          );
        newAnimation.properties.push({
          name: styleName,
          from: propertyInfo.value,
          to:
            parsedValue.modification == "="
              ? eval(
                  propertyInfo.value + parsedValue.operation + parsedValue.value
                )
              : parsedValue.value,
          unit: parsedValue.unit,
          effect: getEffectByName(
            newAnimation.rawData[styleName].effect || "fullSinus"
          ),
        });
      }
    }
    function checkQueue() {
      if (
        animation.activeAnimation.settings != null ||
        animation.queue.length == 0
      ) {
        return;
      }
      var newAnimation = animation.queue.shift();
      initializeNewAnimationProperties(newAnimation);
      animation.activeAnimation = {
        settings: newAnimation,
        timer: pThis.elementWindow.setTimeout(function () {
          animateStep();
        }, animation.refreshTimeout),
        step: 0,
        steps: newAnimation.settings.time / animation.refreshTimeout,
      };
      animateStep();
    }
    function animateStep() {
      if (
        animation.activeAnimation.step >
        animation.activeAnimation.steps + 1
      ) {
        if (animation.activeAnimation.timer) {
          pThis.elementWindow.clearTimeout(animation.activeAnimation.timer);
        }
        if (
          animation.activeAnimation.settings &&
          animation.activeAnimation.settings.settings.onAnimateCompleteCallBack
        ) {
          animation.activeAnimation.settings.settings.onAnimateCompleteCallBack();
        }
        animation.activeAnimation.settings = null;
        checkQueue();
        return;
      }
      for (
        var i = 0;
        i < animation.activeAnimation.settings.properties.length;
        i++
      ) {
        var property = animation.activeAnimation.settings.properties[i];
        var newValue = getNewProperyValue(property);
        pThis.object.style[property.name] = newValue;
      }
      if (animation.activeAnimation.settings.settings.onAnimateStepCallBack) {
        animation.activeAnimation.settings.settings.onAnimateStepCallBack();
      }
      animation.activeAnimation.step++;
      animation.activeAnimation.timer = pThis.elementWindow.setTimeout(
        function () {
          animateStep();
        },
        animation.refreshTimeout
      );
    }
    function getNewProperyValue(property) {
      if (animation.activeAnimation.step >= animation.activeAnimation.steps) {
        return property.to + property.unit;
      }
      var propertyDelta = property.effect(
        property.to - property.from,
        animation.activeAnimation.step,
        animation.activeAnimation.steps
      );
      return property.from + propertyDelta + property.unit;
    }
    function getEffectByName(name) {
      return animation.effects[name];
    }
    function computeStyle(element, style) {
      return pThis.elementWindow.BonaPage.Browser.isIE
        ? element.currentStyle[style]
        : pThis.elementWindow.getComputedStyle(element, null)[style];
    }
    function parseAnimationProperty(value) {
      var parsingRegEx = /^(?:([+-\\*])(=))?(\-?[0-9]+(?:\.[0-9]+)?)([a-z%]+)?$/im;
      var match = parsingRegEx.exec(value);
      if (!match) {
        throw "unable to parse value: " + value;
      }
      return {
        operation: match[1],
        modification: match[2],
        value: parseInt(match[3], 0),
        unit: match[4] || "px",
      };
    }
    function parseCssProperty(value) {
      var parsingRegEx = /^(\-?[0-9]+(?:\.[0-9]+)?)([a-z%]+)?$/im;
      var match = parsingRegEx.exec(value);
      var result;
      if (!match) {
        result = { value: 0, unit: "px" };
      } else {
        result = { value: parseInt(match[1], 0), unit: match[2] || "px" };
      }
      return result;
    }
    return animation;
  })();
}
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (d, a) {
    if (a == null) {
      a = 0;
    } else {
      if (a < 0) {
        a = Math.max(0, this.length + a);
      }
    }
    for (var b = a, c = this.length; b < c; b++) {
      if (this[b] === d) {
        return b;
      }
    }
    return -1;
  };
}
if (window == BonaPage.topWindow) {
  if (!window.AddEditExternalLinkDialog) {
    window.AddEditExternalLinkDialog = {};
  }
  AddEditExternalLinkDialog.initializeLinkTreeStep1 = function (a) {
    if (AddEditExternalLinkDialog.initializeLinkTreeStep1Do) {
      AddEditExternalLinkDialog.initializeLinkTreeStep1Do(a);
    }
  };
  AddEditExternalLinkDialog.initializeLinkTreeStep1Exception = function () {
    if (AddEditExternalLinkDialog.initializeLinkTreeStep1ExceptionDo) {
      AddEditExternalLinkDialog.initializeLinkTreeStep1ExceptionDo();
    }
  };
  AddEditExternalLinkDialog.initializeEventTreeStep1 = function (a) {
    if (AddEditExternalLinkDialog.initializeEventTreeStep1Do) {
      AddEditExternalLinkDialog.initializeEventTreeStep1Do(a);
    }
  };
  AddEditExternalLinkDialog.initializeEventTreeStep1Exception = function () {
    if (AddEditExternalLinkDialog.initializeEventTreeStep1ExceptionDo) {
      AddEditExternalLinkDialog.initializeEventTreeStep1ExceptionDo();
    }
  };
}
if (
  (BonaPage.InternalPageType.isWebPage ||
    BonaPage.InternalPageType.isAdminPage) &&
  !BonaPage.isWidgetMode
) {
  BonaPage.goToTopWindow();
}
if (
  BonaPage.PageView.isAdminView &&
  BonaPage.topWindow &&
  BonaPage.topWindow.AdminPanel
) {
  BonaPage.topWindow.AdminPanel.createContentAreaInterfaces(window);
}
(function (window, WA, undefined) {
  if (!WA.Json) {
    WA.Json = new Json();
  }
  if (!window.JSON) {
    window.JSON = WA.Json;
  }
  function Json() {
    var pThis = this,
      typeName = "WA.Json";
    pThis.toString = function () {
      return typeName;
    };
    pThis.init = init;
    pThis.dispose = dispose;
    pThis.stringify = stringify;
    pThis.parse = parse;
    pThis.toJson = toJson;
    var cn = complementNumber;
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      rep,
      meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\",
      };
    function init() {}
    function complementNumber(n, d, c) {
      c = c || "0";
      var i,
        m = n,
        l = m ? 0 : 1,
        s = "";
      while (m > 0) {
        m = Math.floor(m / 10);
        l++;
      }
      if (d > l) {
        for (i = d - l; i--; ) {
          s += c;
        }
      }
      return s + n;
    }
    function toJson(value) {
      var type =
          typeof value === "object" && typeof value.getTime === "function"
            ? "date"
            : typeof value,
        ret;
      switch (type) {
        case "date":
          ret = isFinite(value.valueOf())
            ? value.getUTCFullYear() +
              "-" +
              cn(value.getUTCMonth() + 1) +
              "-" +
              cn(value.getUTCDate()) +
              "T" +
              cn(value.getUTCHours()) +
              ":" +
              cn(value.getUTCMinutes()) +
              ":" +
              cn(value.getUTCSeconds()) +
              "Z"
            : null;
          break;
        case "string":
        case "number":
        case "boolean":
        default:
          ret = value.valueOf();
      }
      return ret;
    }
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
        length,
        mind = gap,
        partial,
        value = holder[key],
        ret;
      if (value && typeof value === "object") {
        if (typeof value.getTime === "function") {
          toJson(value);
        } else {
          if (typeof value.toJSON === "function") {
            value = value.toJSON(key);
          }
        }
      }
      if (typeof rep === "function") {
        value = rep.call(holder, key, value);
      }
      switch (typeof value) {
        case "string":
          ret = quote(value);
          break;
        case "number":
          ret = isFinite(value) ? String(value) : "null";
          break;
        case "boolean":
        case "null":
          ret = String(value);
          break;
        case "object":
          if (!value) {
            ret = "null";
          } else {
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === "[object Array]") {
              length = value.length;
              for (i = 0; i < length; i += 1) {
                partial[i] = str(i, value) || "null";
              }
              ret =
                partial.length === 0
                  ? "[]"
                  : gap
                  ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]"
                  : "[" + partial.join(",") + "]";
              gap = mind;
            } else {
              if (rep && typeof rep === "object") {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                  if (typeof rep[i] === "string") {
                    k = rep[i];
                    ret = str(k, value);
                    if (ret) {
                      partial.push(quote(k) + (gap ? ": " : ":") + ret);
                    }
                  }
                }
              } else {
                for (k in value) {
                  if (Object.prototype.hasOwnProperty.call(value, k)) {
                    ret = str(k, value);
                    if (ret) {
                      partial.push(quote(k) + (gap ? ": " : ":") + ret);
                    }
                  }
                }
              }
              ret =
                partial.length === 0
                  ? "{}"
                  : gap
                  ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}"
                  : "{" + partial.join(",") + "}";
              gap = mind;
            }
          }
          break;
      }
      return ret;
    }
    function stringify(value, replacer, space) {
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
        (typeof replacer !== "object" || typeof replacer.length !== "number")
      ) {
        throw new Error("JSON.stringify");
      }
      return str("", { "": value });
    }
    function parse(text, reviver) {
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
          return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        });
      }
      if (
        !/^[\],:{}\s]*$/.test(
          text
            .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
            .replace(
              /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
              "]"
            )
            .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
        )
      ) {
        throw new SyntaxError("JSON.parse");
      }
      j = eval("(" + text + ")");
      return typeof reviver === "function" ? walk({ "": j }, "") : j;
    }
    function dispose() {}
  }
})(window, WA);
(function (b, a) {
  if (!b.WA.Templates) {
    a.Templates = {};
  }
  if (!b.WA.Templates.UI) {
    a.Templates.UI = {};
  }
  if (!b.WA.Templates.Admin) {
    a.Templates.Admin = {};
  }
  if (!b.WA.Templates.UI.Css) {
    a.Templates.UI.Css = {};
  }
})(window, WA);
(function (e, d, c) {
  if (!d.Ajax) {
    d.Ajax = a;
    d.Ajax.UrlTemplatesToFail = [];
  }
  function a(i) {
    var f = b(i.url);
    if (f != c) {
      return i.error(f);
    }
    var h = d.jq$ || e.jq$;
    if (!h) {
      return;
    }
    h.ajaxPrefilter(function (k, l, j) {
      var m;
      if (d.AdminPanel) {
        m = d.AdminPanel.token;
      } else {
        if (e.bonaPage_Token) {
          m = e.bonaPage_Token;
        }
      }
      if (m) {
        j.setRequestHeader("X-Request-Verification-Token", m);
      }
    });
    var g = false;
    h.ajaxSetup({
      global: g,
      cache: false,
      dataFilter: function (j, k) {
        if (!k || k === "json") {
          return j.indexOf("while(1); ") == 0 ? j.substring(9) : j;
        }
        return j;
      },
    });
    return h.ajax(i);
  }
  function b(j) {
    var f, h, g;
    for (f = 0, h = d.Ajax.UrlTemplatesToFail.length; f < h; f++) {
      g = d.Ajax.UrlTemplatesToFail[f];
      if (j.toLowerCase().indexOf(g.url.toLowerCase()) >= 0) {
        return g.errorData;
      }
    }
  }
})(window, WA);
(function (c, b) {
  if (!c.WA.Storage) {
    b.Storage = new a();
    b.Storage.init();
  }
  function a() {
    var r = this,
      y = "WA.Storage";
    r.toString = function () {
      return y;
    };
    r.init = o;
    r.dispose = f;
    r.supported = x;
    r.store = v;
    r.write = C;
    r.fetch = k;
    r.read = t;
    r.isset = p;
    r.unset = z;
    r.del = z;
    r.empty = j;
    r.dumps = h;
    r.loads = q;
    var u,
      B,
      s,
      d,
      e,
      i,
      A,
      g = c.document,
      w = true;
    function o() {
      if (w) {
        try {
          v("TestName", "TestValue");
          if (k("TestName") !== "TestValue") {
            w = false;
          }
          z("TestName");
        } catch (D) {
          w = false;
        }
      }
    }
    function m() {
      try {
        return "localStorage" in c && c.localStorage;
      } catch (D) {
        return false;
      }
    }
    function l() {
      try {
        return (
          "globalStorage" in c &&
          c.globalStorage &&
          c.globalStorage[c.location.hostname]
        );
      } catch (D) {
        return false;
      }
    }
    function n() {
      return typeof g.documentElement.addBehavior === "function";
    }
    if (m()) {
      u = c.localStorage;
      B = function (D, E) {
        u.setItem(D, E);
      };
      s = function (D) {
        return u.getItem(D);
      };
      d = function (D) {
        u.removeItem(D);
      };
      e = function () {
        u.clear();
      };
      i = function (D) {
        for (var E in u) {
          if (u.getItem(E)) {
            D(E);
          }
        }
      };
    } else {
      if (l()) {
        u = c.globalStorage[c.location.hostname];
        B = function (D, E) {
          u[D] = E;
        };
        s = function (D) {
          return u[D] && u[D].value ? u[D].value : null;
        };
        d = function (D) {
          delete u[D];
        };
        i = function (D) {
          for (var E in u) {
            if (u.hasOwnProperty(E)) {
              D(E);
            }
          }
        };
      } else {
        if (n()) {
          u = g.createElement("div");
          A = function (D) {
            return function () {
              g.body.appendChild(u);
              u.addBehavior("#default#userData");
              u.load("localStorage");
              var E = Array.prototype.slice.call(arguments, 0);
              E.unshift(u);
              var F = D.apply(c, E);
              g.body.removeChild(u);
              return F;
            };
          };
          B = A(function (E, D, F) {
            E.setAttribue(D, F);
            E.save("localStorage");
          });
          s = A(function (E, D) {
            return E.getAttribute(D);
          });
          d = A(function (E, D) {
            E.removeAttribute(D);
            E.save("localStorage");
          });
          i = A(function (H, F) {
            var D = H.XMLDocument.documentElement.attributes;
            for (var G = 0, E = D.length; G < E; G++) {
              F(attr);
            }
          });
        } else {
          w = false;
        }
      }
    }
    function x() {
      return w;
    }
    function v(D, E) {
      return w ? B(D, JSON.stringify(E)) : null;
    }
    function C(D, E) {
      return w ? B(D, E) : null;
    }
    function k(D) {
      return w ? JSON.parse(s(D)) : undefined;
    }
    function t(D) {
      return w ? s(D) : undefined;
    }
    function p(D) {
      return w ? s(D) != null : null;
    }
    function z(D) {
      if (w) {
        d(D);
      }
    }
    function j() {
      if (!w) {
        return null;
      }
      if (typeof e === "function") {
        e();
      } else {
        i(d);
      }
    }
    function h() {
      if (!w) {
        return null;
      }
      var D = {};
      i(function (E) {
        D[E] = JSON.parse(s(E));
      });
      return JSON.stringify(D);
    }
    function q(D) {
      if (!w) {
        return null;
      }
      D = JSON.parse(D);
      for (var E in D) {
        if (D.hasOwnProperty(E)) {
          B(E, JSON.stringify(D[E]));
        }
      }
    }
    function f() {}
  }
})(window, WA);
var BonaDialog;
(function () {
  if (BonaDialog == null) {
    BonaDialog = new Object();
  }
  BonaDialog.pDialog = new Array();
  BonaDialog.isDialogOpened = false;
  BonaDialog.createDialog = function (a) {
    if (
      typeof BonaPage.topWindow.BonaDialog == "undefined" ||
      !BonaPage.topWindow.BonaDialog
    ) {
      return null;
    }
    return BonaPage.topWindow.BonaDialog.createInnerWindow(a.dialogName, a);
  };
  BonaDialog.createInnerWindow = function (e, h, g, f) {
    var c,
      k = h.stateCookie ? h.stateCookie : null,
      j = new RegExp("InnerWindows\\s*=\\s*[^;]*" + e + ":([^&;]*)"),
      d,
      a = null;
    for (c = 0; c < BonaDialog.pDialog.length; c++) {
      if (BonaDialog.pDialog[c].id == e) {
        if (BonaDialog.pDialog[c].dialog) {
          BonaDialog.pDialog[c].dialog.updateParameters(h);
        }
        return BonaDialog.pDialog[c].dialog;
      }
    }
    c = BonaDialog.pDialog.length;
    BonaDialog.pDialog[c] = new Object();
    BonaDialog.pDialog[c].id = e;
    function b() {
      d = j.exec(document.cookie);
      if (d != null && d.length > 1) {
        a = d[1].split(/:/);
      }
      if (a && a[1] != null) {
        h.left = Number(a[1]);
      }
      if (a && a[2] != null) {
        h.top = Number(a[2]);
      }
      if (a && a[3] != null) {
        h.width = Number(a[3]);
      } else {
        h.width = winWidth ? Number(winWidth) : 500;
      }
      if (a && a[4] != null) {
        h.height = Number(a[4]);
      } else {
        h.height = winHeight ? Number(winHeight) : 300;
      }
    }
    if (k) {
      b();
    }
    BonaDialog.pDialog[c].dialog = new WA.UI.BonaDialogWrapper(e, h, g, f);
    return BonaDialog.pDialog[c].dialog;
  };
  BonaDialog.getObjectById = function (a) {
    var b;
    for (b = 0; b < BonaDialog.pDialog.length; b++) {
      if (BonaDialog.pDialog[b].id == a) {
        return BonaDialog.pDialog[b].dialog;
      }
    }
    return null;
  };
  BonaDialog.checkIfAllDialogsReady = function () {
    var a;
    for (a = 0; a < BonaDialog.pDialog.length; a++) {
      if (!BonaDialog.pDialog[a].dialog.isObjValid) {
        return false;
      }
    }
    return true;
  };
})();
(function () {
  var i = "BonaDropdown",
    h = WA.topWindow,
    d = WA.Browser.isIE,
    f,
    e,
    a;
  if (window.BonaDropdown == null) {
    window.BonaDropdown = {};
    window.BonaDropdown.debug = false;
  }
  BonaDropdown.pDropdown = [];
  BonaDropdown.currentDropdownId = "";
  BonaDropdown.currentMenuDropdownId = "";
  BonaDropdown.createDropdown = function (m, n, t, k, q, o, s, r, p, j) {
    j = j || {};
    var l;
    c(n);
    for (l = 0; l < BonaDropdown.pDropdown.length; l++) {
      if (BonaDropdown.pDropdown[l].id == m) {
        BonaDropdown.pDropdown[l].dropdown.reInitDropdown(
          m,
          n,
          t,
          k,
          q,
          o,
          s,
          r,
          p,
          j
        );
        return BonaDropdown.pDropdown[l].dropdown;
      }
    }
    l = BonaDropdown.pDropdown.length;
    BonaDropdown.pDropdown[l] = {};
    BonaDropdown.pDropdown[l].id = m;
    j.ddIndex = l;
    BonaDropdown.pDropdown[l].dropdown = new b(m, n, t, k, q, o, s, r, p, j);
    return BonaDropdown.pDropdown[l].dropdown;
  };
  BonaDropdown.getObjectById = function (j) {
    var k;
    for (k = 0; k < BonaDropdown.pDropdown.length; k++) {
      if (BonaDropdown.pDropdown[k].id == j) {
        return BonaDropdown.pDropdown[k].dropdown;
      }
    }
    return null;
  };
  BonaDropdown.checkIfAllDropdownReady = function () {
    var j;
    for (j = 0; j < BonaDropdown.pDropdown.length; j++) {
      if (!BonaDropdown.pDropdown[j].dropdown.isObjValid) {
        return false;
      }
    }
    return true;
  };
  BonaDropdown.closeAllDropdowns = function () {
    var j;
    for (j = 0; j < BonaDropdown.pDropdown.length; j++) {
      if (BonaDropdown.pDropdown[j].dropdown.getState()) {
        BonaDropdown.pDropdown[j].dropdown.closeDropdown(
          null,
          null,
          null,
          true,
          true
        );
      }
    }
  };
  function c(j) {
    f = h.adminpanel ? h.adminpanel : window;
    e = f.document.getElementsByTagName("HTML");
    if (e && e.length) {
      e = e[0];
    } else {
      e = f.document.body;
    }
    a = document.getElementsByTagName("HTML");
    if (a && a.length) {
      a = a[0];
    } else {
      a = document.body;
    }
  }
  function b(Y, af, at, u, an, ai, ap, ar, al, k) {
    k = k || {};
    var aw = this;
    aw.isObjValid = false;
    aw.isDataValid = false;
    aw.pButton = af;
    var F;
    var x = Y;
    var ag = af;
    var v = at.directURL;
    var O = at.isTransparent ? true : false;
    var H = at.iFrameBackgroundColor ? at.iFrameBackgroundColor : "#FFFFFF";
    var az, aA;
    var A,
      y,
      aD = {};
    var B, z;
    var t = u ? u : null;
    var W = at.multiDropdown ? at.multiDropdown : null;
    var V = null;
    var au = null;
    var av = null;
    var P = false;
    var X;
    var w = at.dropdownAlign ? at.dropdownAlign : "bottom";
    var D = at.edgeAlign ? at.edgeAlign : "left";
    var ab = at.offsetX ? at.offsetX : 0;
    var ac = at.offsetY ? at.offsetY : 0;
    var Q = at.isNotUnique ? true : false;
    var R = at.isWithoutCSS ? true : false;
    var am = an && typeof an == "function" ? an : null;
    var ah = ai && typeof ai == "function" ? ai : aw.closeDropdown;
    var aq = ar && typeof ar == "function" ? ar : null;
    var ao = ap && typeof ap == "function" ? ap : function () {};
    var ak = al && typeof al == "function" ? al : null;
    var aG = k.zIndexOffset || 0;
    var ay = null;
    var aj = {};
    var r = null;
    var m = null;
    var j = null;
    var n = [];
    if (at.callBackParameters) {
      for (F in at.callBackParameters) {
        if (
          at.callBackParameters.hasOwnProperty(F) &&
          typeof at.callBackParameters[F] != "function"
        ) {
          aj[F] = at.callBackParameters[F];
        }
      }
    }
    var aF = " ";
    var aa, Z, U, G;
    var o, p;
    var aE = false;
    var C = [];
    var q = null;
    var J = "idBaseIFrame_" + x;
    var K = "nmBaseIFrame_" + x;
    var I, L;
    aw.toString = function () {
      return i;
    };
    aw.getId = function () {
      return Y;
    };
    aw.getIFrame = function () {
      return G;
    };
    aw.getScrollablePanelContainer = function () {
      return aA;
    };
    aw.focus = function () {
      if (G && G.focus) {
        G.focus();
      }
    };
    aw.RenderComplete = {
      addHandler: function (aH) {
        aH();
      },
      removeHandler: function (aH) {},
    };
    aw.Dispose = {
      addHandler: function (aH) {},
      removeHandler: function (aH) {},
    };
    aw.DropDownShowed = WA.Tools.EventHandlers.createHandlers(aw, {
      id: "DropDownShowed",
    });
    aw.DropDownHidden = WA.Tools.EventHandlers.createHandlers(aw, {
      id: "DropDownHidden",
    });
    function M() {
      if (document && document.body) {
        aa = document.createElement("SPAN");
        document.body.appendChild(aa);
        aa.innerHTML =
          '<iframe id="' +
          J +
          '" name="' +
          K +
          '" src="' +
          v +
          '" frameborder="0" scrolling="no" ' +
          (O ? 'allowtransparency="true" ' : "") +
          'style="position: absolute; left: 1px; top: 1px; width: 1px; height: 1px; z-index: ' +
          (39077 + BonaDropdown.pDropdown.length * 2 + aG) +
          "; background-color: " +
          (O ? "transparent" : H) +
          '; border: none; -moz-box-shadow: 0 3px 7px rgba(0,0,0,.26); -webkit-box-shadow: 0 3px 7px rgba(0,0,0,.26); box-shadow: 0 3px 7px rgba(0,0,0,.26); padding: 0px; margin: 0px; visibility: hidden;"></iframe>';
        Z = WA.$(J, window);
        G = frames[K];
        s();
        setTimeout(N, 100);
      } else {
        setTimeout(M, 100);
      }
    }
    aw.reInitDropdown = function (aL, aM, aS, aH, aP, aN, aQ, aR, aO, aK) {
      var aJ,
        aT = {};
      aw.isObjValid = false;
      aw.isDataValid = false;
      aw.pButton = aM;
      x = aL;
      ag = aM;
      v = aS.directURL;
      t = aH ? aH : null;
      am = aP && typeof aP == "function" ? aP : null;
      ah = aN && typeof aN == "function" ? aN : aw.closeDropdown;
      aq = aR && typeof aR == "function" ? aR : null;
      ao = aQ && typeof aQ == "function" ? aQ : function () {};
      ak = aO && typeof aO == "function" ? aO : null;
      aK = aK || {};
      for (aJ in aK) {
        if (aK.hasOwnProperty(aJ)) {
          k[aJ] = aK[aJ];
          aT[aJ] = true;
        }
      }
      for (aJ in k) {
        if (k.hasOwnProperty(aJ)) {
          if (!aT.hasOwnProperty(aJ)) {
            delete k[aJ];
          }
        }
      }
      if (aS.callBackParameters) {
        for (F in aS.callBackParameters) {
          if (
            aS.callBackParameters.hasOwnProperty(F) &&
            typeof aS.callBackParameters[F] != "function"
          ) {
            aj[F] = aS.callBackParameters[F];
          }
        }
      }
      if (G) {
        G.isIFrameReloading = true;
      }
      try {
        if (k.isReload) {
          G.location.reload(true);
        } else {
          G.location.replace(v);
        }
      } catch (aI) {}
      s();
      setTimeout(N, 100);
    };
    function s() {
      var aH,
        aI = x.match(/^(.*?_Level)(\d+)$/i);
      n.splice(0, n.length);
      if (aI && aI[1] != null && aI[2] != null) {
        aI[2]++;
        aH = BonaDropdown.getObjectById(aI[1] + aI[2]);
        while (aH) {
          n.push(aH);
          aI[2]++;
          aH = BonaDropdown.getObjectById(aI[1] + aI[2]);
        }
      }
    }
    function N() {
      var aH, aJ, aI;
      G = frames[K];
      if (
        G &&
        G.document &&
        !G.isIFrameReloading &&
        G.document.getElementById("idEndOfPageDiv")
      ) {
        if (!WA.Browser.isIE || WA.Browser.isIE > 8) {
          aJ = G.document.createElement("STYLE");
          aJ.setAttribute("type", "text/css");
          aJ.setAttribute("rel", "stylesheet");
          aJ.innerHTML = g.join(" ");
          G.document.querySelector("HEAD").appendChild(aJ);
        }
        G.parentId = x;
        G.parentObject = aw;
        G.parentButton = ag;
        if (am) {
          G.callBackSave = am;
        }
        if (ah) {
          G.callBackClose = ah;
        }
        if (aq) {
          G.callBackWaitClose = aq;
        }
        if (ao) {
          G.callBackStopClose = ao;
        }
        if (ak) {
          G.callBackPreview = ak;
        }
        if (d) {
          I = G.document.body;
        } else {
          I = G;
        }
        G.document.body.onmousedown = function (aK) {
          WA.stopEventBubbling(aK);
        };
        if (R) {
          ax();
        }
        if (t) {
          t = WA.UI.ScrollablePanelTemplate({
            id: "idDropdownScrollableContentContainer_" + x,
            cssClass: "dropdownScrollableContentContainer",
            isBorder: true,
            isNoIndentTemplate: true,
            contentHTML: t,
          });
          if (G.document.getElementById("idInnerHTMLContainer")) {
            G.document.getElementById("idInnerHTMLContainer").innerHTML = t;
          } else {
            if (G.document.forms[0]) {
              G.document.forms[0].innerHTML = t;
            } else {
              G.document.body.innerHTML = t;
            }
          }
          if (!G.document.getElementById("idEndOfPageDiv")) {
            aI = G.document.createElement("DIV");
            aI.id = "idEndOfPageDiv";
            G.document.body.appendChild(aI);
          }
        }
        aH = G.document.body.getElementsByTagName("*");
        ae(G, aH);
        az = WA.Object.create(WA.UI.ScrollablePanel, [
          { id: "idDropdownScrollableContentContainer_" + x },
          {
            parentComponent: aw,
            window: G,
            isBorder: true,
            isNoRightPadding: true,
            scrollBarContainerZIndex: 37373,
            scrollBarSliderZIndex: 37377,
          },
        ]);
        aA = WA.$(
          "idDropdownScrollableContentContainer_" +
            x +
            "_ScrollablePanelContainer",
          G
        );
        G.document.body.style.backgroundColor = O ? "transparent" : H;
        G.document.body.style.backgroundImage = "none";
        G.document.body.style.filter = "none";
        aw.isObjValid = true;
      } else {
        setTimeout(N, 100);
      }
    }
    function ae(aP, aH) {
      var aL,
        aO,
        aI,
        aN = 0,
        aM = 0,
        aK,
        aJ;
      aP.typeElements = [];
      for (aL = 0, aO = aH.length; aL < aO; aL++) {
        aJ = aH[aL];
        aI = aJ.getAttribute("ddtype", 0);
        aK = aJ.getAttribute("ddvalue", 0);
        if (aI != null) {
          aP.typeElements[aN] = {};
          aP.typeElements[aN].element = aH[aL];
          aP.typeElements[aN].type = aI;
          aP.typeElements[aN].value = null;
          aP.typeElements[aN].menuId = null;
          aP.typeElements[aN].menuPart = null;
          if (aI.toLowerCase() == "item") {
            aP.typeElements[aN].value = aK != null ? aK : null;
            aJ.id = "idItem_" + aL;
            aJ.onmouseover = function () {
              BonaDropdown.currentDropdownId = Y;
              for (var aQ = 0, aR = n.length; aQ < aR; aQ++) {
                n[aQ].closeDropdown(null, null, null, true, true);
              }
              G.mouseOver(this.id);
            };
            aJ.onmouseout = function () {
              BonaDropdown.currentDropdownId = "";
              BonaDropdown.currentMenuDropdownId = "";
              G.mouseOut(this.id);
            };
            aJ.onclick = function (aQ) {
              BonaDropdown.currentDropdownId = "";
              BonaDropdown.currentMenuDropdownId = "";
              aP.mouseClick(this.id, aQ);
            };
          } else {
            if (aI.toLowerCase() == "itemmenu") {
              aP.typeElements[aN].menuId =
                aJ.getAttribute("ddmenuid", 0) != null
                  ? aJ.getAttribute("ddmenuid", 0)
                  : null;
              aP.typeElements[aN].menuPart =
                aJ.getAttribute("ddmenupart", 0) != null
                  ? aJ.getAttribute("ddmenupart", 0)
                  : null;
              aH[aL].id = "idItemMenu_" + aL;
              C[aM] = {};
              C[aM].id = "idItemMenu_" + aL;
              C[aM].item = new S(aw, C[aM].id, aH[aL], G);
              aM++;
            }
          }
          aN++;
        }
      }
    }
    function ax() {
      var aH = G.document.getElementsByTagName("LINK");
      if (aH && aH.length) {
        for (F = 0; F < aH.length; F++) {
          aH[F].disabled = true;
        }
      }
      G.document.body.style.margin = "0px";
      G.document.body.style.padding = "0px";
      if (!d) {
        for (F = 0; F < G.document.styleSheets.length; F++) {
          if (!G.document.styleSheets[F].disabled) {
            G.document.styleSheets[F].insertRule(
              "P:first-child, H1:first-child, H2:first-child, H3:first-child, H4:first-child, H5:first-child, H6:first-child { margin-top: 0; }",
              0
            );
          }
        }
      }
    }
    aw.openDropdown = function (aM, aK, aO, aN, aL, aJ, aQ, aP, aH) {
      aH = aH || {};
      if (!Q && !aH.isMenuDropdown) {
        BonaDropdown.closeAllDropdowns();
      }
      if (aM && typeof aM == "function") {
        am = aM;
      }
      if (aK && typeof aK == "function") {
        ah = aK;
      }
      if (aO && typeof aO == "function") {
        aq = aO;
      }
      if (aN && typeof aN == "function") {
        ao = aN;
      }
      if (aL && typeof aL == "function") {
        ak = aL;
      }
      if (aJ) {
        aw.pButton = aJ;
        ag = aJ;
      }
      if (aH.pCallBackClosed) {
        k.pCallBackClosed = aH.pCallBackClosed;
      }
      V = aQ ? aQ : null;
      X = aP || {};
      try {
        az.calculate();
      } catch (aI) {
        return false;
      }
      ad(aH.ddArgs);
    };
    function E() {
      var aI, aH;
      for (aI in aD) {
        if (aD.hasOwnProperty(aI)) {
          aH = aD[aI];
          aH.style.height = "auto";
          aH.style.position = "absolute";
          aH.style.left = "-3700px";
          aH.style.top = "-3700px";
        }
      }
      aD = {};
    }
    function aC(aJ, aI, aK, aH) {
      if (aD.hasOwnProperty(aJ)) {
        return;
      }
      aI.style.position = "relative";
      aI.style.left = "0px";
      aI.style.top = "0px";
      aI.style.width = aK + "px";
      aI.style.height = aH + "px";
      aD[aJ] = aI;
    }
    function ad(aT) {
      if (aw.isObjValid) {
        var aH = ag.getButtonXY(V),
          aJ = aH[0],
          aK = aH[1],
          aL = aH[2],
          aI = aH[3],
          aN = X.dropdownAlign ? X.dropdownAlign : w,
          aO = X.edgeAlign ? X.edgeAlign : D,
          aP = X.offsetX ? X.offsetX : ab,
          aQ = X.offsetY ? X.offsetY : ac,
          aR = WA.Window.getInnerHeight(window),
          aS = WA.Window.getScrollTop(window),
          aV,
          aW,
          aX,
          aU,
          aM,
          aY = {};
        aY[G.name] = true;
        if (V && W && W[V]) {
          A = G.document.getElementById(W[V].containerId);
          y = G.document.getElementById(W[V].childContainerId);
          P = true;
        } else {
          A = G.document.getElementById("idDropdownInnerMainContainer");
          P = false;
        }
        ay = {};
        if (aj) {
          for (F in aj) {
            if (typeof aj[F] != "function") {
              ay[F] = aj[F];
            }
          }
          G.callBackParameters = ay;
        }
        G.callBackSave = am;
        G.callBackClose = ah;
        G.callBackWaitClose = aq;
        G.callBackStopClose = ao;
        G.callBackPreview = ak;
        G.openInitDropdown(aT);
        if (P && A) {
          aX = A.offsetWidth;
          aU = A.offsetHeight;
          E();
          aC(y.id, A, aX, aU);
        }
        l();
        if (m) {
          clearTimeout(m);
        }
        m = setTimeout(function () {
          Z.style.visibility = "visible";
          aw.changeState(1);
        }, 30);
        if (j) {
          clearTimeout(j);
        }
        j = setTimeout(function () {
          WA.addHandler(I, "blur", aw.closeDropdownWait);
          WA.addHandler(I, "focus", aw.closeDropdownStop);
          WA.addGlobalHandler(
            "window",
            "blur",
            aw.closeDropdownWait,
            Y + "_CloseDropdownWhenBlurWindow"
          );
          WA.addGlobalHandler(
            "window",
            "focus",
            aw.closeDropdownStop,
            Y + "_StopCloseDropdownWhenFocusWindow"
          );
          WA.addGlobalHandler(
            "window",
            "mousedown",
            aw.closeDropdown,
            Y + "_CloseDropdownWhenMouseDownWindow",
            { excludeWindows: aY }
          );
          WA.addGlobalHandler(
            "window",
            "keydown",
            T,
            Y + "_CloseDropdownWhenKeyPressWindow"
          );
          WA.addHandler(window, "resize", aw.closeDropdown);
          WA.addHandler(window, "scroll", l);
          if (WA.AdminPanel) {
            WA.addHandler(WA.topWindow.contentarea, "scroll", l);
          }
          aw.DropDownShowed.fireHandlers();
        }, 100);
      } else {
      }
    }
    function l() {
      if (aw.isObjValid) {
        var aH = ag.getButtonXY(V),
          aJ = aH[0],
          aK = aH[1],
          aL = aH[2],
          aI = aH[3],
          aN = X.dropdownAlign ? X.dropdownAlign : w,
          aO = X.edgeAlign ? X.edgeAlign : D,
          aP = X.offsetX ? X.offsetX : ab,
          aQ = X.offsetY ? X.offsetY : ac,
          aZ = WA.Window.getWindowSizes(window),
          aR = WA.Device.isDesktop ? aZ.clientHeight : aZ.innerHeight,
          aS = aZ.scrollTop,
          aX = WA.AdminPanel ? aZ.scrollLeft : 0,
          aY = WA.AdminPanel ? aZ.scrollTop : 0,
          aU,
          aV,
          aW = A.offsetWidth,
          aT = A.offsetHeight,
          aM;
        aV = aK + aI + aQ + aY;
        if (aN == "right") {
          aV = aV - aI + aY;
          aU = aJ + aL + aP + aX;
        } else {
          if (aO == "center") {
            aU = aJ - Math.floor((aW - aL) / 2) + aP + aX;
          } else {
            if (aO == "right") {
              aU = aJ - (aW - aL) + aP + aX;
            } else {
              aU = aJ + aX;
            }
          }
        }
        if (aV + aT + 17 > aR + aS) {
          aT = aR - aV + aS - 17;
          aM = WA.Dimensions.getElementBox(A);
          A.style.height = aT - aM.deltaInnerHeight + "px";
        }
        Z.style.left = aU + "px";
        Z.style.top = aV + "px";
        Z.style.width = aW + 2 + "px";
        Z.style.height = aT + 2 + "px";
        az.calculate();
      }
    }
    function aB() {
      if (!aw.isObjValid) {
        return false;
      }
      if (tmSetXY) {
        clearTimeout(tmSetXY);
      }
      var aM = a.clientWidth ? a.clientWidth : a.offsetWidth;
      var aH = a.clientHeight ? a.clientHeight : a.offsetHeight;
      var aJ = a.scrollLeft;
      var aK = a.scrollTop;
      var aL = document.body.scrollWidth;
      var aI = document.body.scrollHeight;
      var aR = Z.offsetLeft;
      var aS = Z.offsetTop;
      var aN = aR - aJ;
      var aO = aS - aK;
      var aQ = aR,
        aT = aS,
        aU = Z.offsetWidth,
        aP = Z.offsetHeight;
      if (aN + aU < 50) {
        aQ = aJ - aU + 50;
      } else {
        if (aN > aM - 25) {
          aQ = aM + aJ - 25;
        } else {
          if (aO > aH - 25) {
            aT = aH + aK - 25;
          } else {
            if (aO < 0) {
              aT = aK;
            }
          }
        }
      }
      Z.style.left = aQ + "px";
      Z.style.top = aT + "px";
      o = aN;
      p = aO;
      if (isWinModal) {
        objShadingBox.style.width =
          aL > aM && !isWinModal ? aL - 17 + "px" : aM - 17 + "px";
        objShadingBox.style.height =
          aI > aH && !isWinModal ? aI - 17 + "px" : aH - 17 + "px";
        objShadingBox.style.visibility = "visible";
      }
      objMainBoxBg.style.width =
        aL > aM && !isWinModal ? aL - 17 + "px" : aM - 17 + "px";
      objMainBoxBg.style.height =
        aI > aH && !isWinModal ? aI - 17 + "px" : aH - 17 + "px";
      objMainBoxBg.style.overflow = "hidden";
      objMainBoxBg.style.visibility = "hidden";
    }
    aw.keyPress = function (aH) {
      T(aH);
    };
    function T(aH) {
      aH = WA.getEvent(aH);
      if (aH && aH.keyCode == 27) {
        aw.closeDropdown(null, null, null, false, false);
      }
    }
    aw.closeDropdownWait = function () {
      if (r) {
        clearTimeout(r);
      }
      if (G.callBackWaitClose) {
        G.callBackWaitClose();
      } else {
        r = setTimeout(aw.closeDropdown, 50);
      }
    };
    aw.closeDropdownStop = function () {
      var aH;
      if (r) {
        clearTimeout(r);
      }
      for (aH = 0; aH < C.length; aH++) {
        C[aH].item.closeDropdownStop();
      }
      G.callBackStopClose();
    };
    aw.closeDropdownDo = function () {
      G.callBackClose();
    };
    aw.closeDropdown = function (aH, aM, aI, aK, aL) {
      if (
        !aw.isObjValid ||
        Y == BonaDropdown.currentDropdownId ||
        Y == BonaDropdown.currentMenuDropdownId
      ) {
        return false;
      }
      if (!aE) {
        return true;
      }
      var aJ;
      if (!aL) {
        for (aJ = 0; aJ < C.length; aJ++) {
          C[aJ].item.closeMenuDropdown();
        }
      }
      if (j) {
        clearTimeout(j);
      }
      WA.removeHandler(I, "blur", aw.closeDropdownWait);
      WA.removeHandler(I, "focus", aw.closeDropdownStop);
      WA.removeGlobalHandler(Y + "_CloseDropdownWhenBlurWindow");
      WA.removeGlobalHandler(Y + "_StopCloseDropdownWhenFocusWindow");
      WA.removeGlobalHandler(Y + "_CloseDropdownWhenMouseDownWindow");
      WA.removeGlobalHandler(Y + "_CloseDropdownWhenKeyPressWindow");
      WA.removeGlobalHandler(Y + "_CloseDropdownWhenMouseDownDocument");
      WA.removeGlobalHandler(Y + "_CloseDropdownWhenMouseDownBody");
      WA.removeHandler(window, "resize", aw.closeDropdown);
      WA.removeHandler(window, "scroll", l);
      if (WA.AdminPanel) {
        WA.removeHandler(WA.topWindow.contentarea, "scroll", l);
      }
      G.document.body.onkeypress = null;
      Z.style.visibility = "hidden";
      Z.style.left = "-3700px";
      Z.style.top = "-3700px";
      Z.style.width = "1px";
      Z.style.height = "1px";
      if (P) {
        E();
      } else {
        if (A) {
          A.style.height = "auto";
        }
      }
      if (G.closeInitDropdown) {
        G.closeInitDropdown();
      }
      if (k.pCallBackClosed) {
        k.pCallBackClosed();
      }
      if (m) {
        clearTimeout(m);
      }
      m = setTimeout(function () {
        aw.changeState(0, aK);
      }, 10);
    };
    aw.getReturnedParameters = function () {
      return ay;
    };
    aw.setReturnedParameters = function (aH, aI) {
      aj[aH] = aI;
    };
    aw.setBodyIdAndClass = function (aI, aH) {
      if (aw.isObjValid) {
        G.document.body.id = aI;
        G.document.body.className = aH;
        if (O) {
          G.document.body.style.backgroundColor = "transparent";
          G.document.body.style.backgroundImage = "none";
          G.document.body.style.filter = "none";
        }
        G.document.body.style.textAlign = "left";
      }
    };
    aw.changeState = function (aI, aH) {
      aE = !!aI;
      if (!aE && !aH) {
        aw.DropDownHidden.fireHandlers();
      }
    };
    aw.getState = function (aH) {
      if (V && aH) {
        return aE && V === aH;
      }
      return aE;
    };
    aw.getButton = function () {
      return ag;
    };
    aw.getWindow = function () {
      return G;
    };
    aw.getDocument = function () {
      return G.document;
    };
    aw.get$ = function (aH) {
      if (G && G.document) {
        return G.document.getElementById(aH);
      } else {
        return false;
      }
    };
    aw.getDropdownXY = function () {
      return { X: Z.offsetLeft, Y: Z.offsetTop };
    };
    aw.getMultiDropdownPartName = function () {
      return V;
    };
    aw.pageUnload = function () {
      if (!aw.isObjValid) {
        return false;
      }
    };
    aw.destructor = function () {
      if (G) {
        if (G.parentId) {
          G.parentId = null;
        }
        if (G.moveWindow) {
          G.moveWindow = null;
        }
        if (G.keyPress) {
          G.keyPress = null;
        }
        aa.removeChild(Z);
        document.body.removeChild(aa);
      }
    };
    setTimeout(M, 200);
    function S(a0, aU, aV, a4) {
      var a1 = this;
      var aR = aV;
      var aY, aZ;
      var aW, aX;
      var aQ,
        aH = [];
      var aP = null;
      var aL = null;
      a1.init = aT;
      a1.closeDropdownWait = aM;
      a1.closeMenuDropdownStop = aO;
      a1.closeDropdownStop = aK;
      a1.closeAllDropdownStop = aI;
      a1.closeMenuDropdown = aN;
      a1.closeDropdown = aJ;
      a1.getButtonXY = aS;
      aT();
      function aT() {
        aY = aR.getAttribute("ddmenuid", 0);
        aZ = aR.getAttribute("ddmenupart", 0);
        aW = BonaDropdown.getObjectById(aY);
        aX = aY.match(/^(.*?_Level)(\d+)$/i);
        if (aX && aX[1] != null && aX[2] != null) {
          aX[2]++;
          aQ = BonaDropdown.getObjectById(aX[1] + aX[2]);
          while (aQ) {
            aH.push(aQ);
            aX[2]++;
            aQ = BonaDropdown.getObjectById(aX[1] + aX[2]);
          }
        }
        aR.onmouseover = function () {
          var a8;
          var a7 = this.getAttribute("ddvalue", 0);
          var a6 = this.getAttribute("ddtitle", 0);
          var a5 = this.getAttribute("dddisabled", 0);
          BonaDropdown.currentDropdownId = Y;
          if (a5 && a5.toLowerCase() == "true") {
            return;
          }
          G.mouseOver(this.id);
          for (a8 = 0; a8 < aH.length; a8++) {
            aH[a8].closeDropdown(null, null, null, true, true);
          }
          for (a8 = 0; a8 < C.length; a8++) {
            C[a8].item.closeMenuDropdown();
          }
          aI();
          if (a7) {
            aW.setReturnedParameters("itemMenuCommand", a7);
          }
          if (a6) {
            aW.setReturnedParameters("itemMenuTitle", a6);
          }
          if (aW.getState()) {
            if (m) {
              clearTimeout(m);
            }
            aI();
          }
          BonaDropdown.currentMenuDropdownId = aW.getId();
          aW.openDropdown(a2, aJ, aM, aI, null, a1, aZ, null, {
            isMenuDropdown: true,
          });
        };
        aR.onmouseout = function () {
          var a5 = this.getAttribute("dddisabled", 0);
          BonaDropdown.currentDropdownId = "";
          BonaDropdown.currentMenuDropdownId = "";
          if (a5 && a5.toLowerCase() == "true") {
            return;
          }
          G.mouseOut(this.id);
        };
      }
      function a3() {
        if (!aW.getState()) {
          aW.openDropdown(a2, aJ, aM, aI, null, a1, aZ, null, {
            isMenuDropdown: true,
          });
        }
      }
      function aS() {
        var a8,
          bb = a0.getDropdownXY(),
          a7 = WA.Dimensions.getXY(aR),
          a5 = a7.x,
          a6 = a7.y,
          a9,
          ba,
          bc = 0,
          bd = 0;
        a5 += bb.X;
        a6 += bb.Y;
        a8 = aR.parentNode;
        while (a8) {
          a9 = a8.scrollLeft;
          ba = a8.scrollTop;
          bc += !isNaN(a9) ? a9 : 0;
          bd += !isNaN(ba) ? ba : 0;
          a8 = a8.parentNode;
        }
        a5 -= bc;
        a6 -= bd;
        return [a5, a6, aR.offsetWidth, aR.offsetHeight];
      }
      function a2() {
        var a5;
        var a6 = aW.getReturnedParameters();
        for (a5 in a6) {
          if (typeof a6[a5] != "function") {
            G.callBackParameters[a5] = a6[a5];
          }
        }
        G.callBackSave();
      }
      function aM() {
        if (aP) {
          clearTimeout(aP);
        }
        aP = setTimeout(aN, 777);
        if (aL) {
          clearTimeout(aL);
        }
        aL = setTimeout(aJ, 777);
      }
      function aO() {
        if (aP) {
          clearTimeout(aP);
        }
      }
      function aK() {
        if (aL) {
          clearTimeout(aL);
        }
      }
      function aI() {
        if (aP) {
          clearTimeout(aP);
        }
        if (aL) {
          clearTimeout(aL);
        }
        a0.closeDropdownStop();
      }
      function aN() {
        if (aP) {
          clearTimeout(aP);
        }
        aW.closeDropdown(null, null, null, true, false);
      }
      function aJ() {
        if (aL) {
          clearTimeout(aL);
        }
        a0.closeDropdownDo();
      }
    }
  }
  var g = [
    "DIV.scrollablePanelContainer { position: relative; }",
    "DIV.scrollablePanelWrapper { overflow: hidden; }",
    "DIV.scrollablePanelContainer DIV.scrollablePanelWrapper ::-webkit-scrollbar, DIV.scrollablePanelContainer DIV.scrollablePanelWrapper ::-webkit-scrollbar-button, DIV.scrollablePanelContainer DIV.scrollablePanelWrapper ::-webkit-scrollbar-track, DIV.scrollablePanelContainer DIV.scrollablePanelWrapper ::-webkit-scrollbar-track-piece, DIV.scrollablePanelContainer DIV.scrollablePanelWrapper ::-webkit-scrollbar-thumb, DIV.scrollablePanelContainer DIV.scrollablePanelWrapper ::-webkit-scrollbar-corner, DIV.scrollablePanelContainer DIV.scrollablePanelWrapper ::-webkit-resizer { width: 0; }",
    "DIV.scrollBarContainer, DIV.scrollBarSlider { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAABCAMAAAC1xj0zAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFFQTFRFysrK39/fxMTEtbW12tra9vb26+vroqKi5ubmlpaW0NDQwcHB4ODg29vb1NTU4+Pj/f397u7ut7e38fHx4eHh3d3d8vLy+vr65+fnz8/P7e3tunUk0AAAADhJREFUeNpi4OZiYQQDFnZmJgYwYEKwhFgFxFnFBNlYJTk5hKUkeFj4OJg52Vh4RRlF+NmYAQIMACUMAa+nFZs1AAAAAElFTkSuQmCC); background-repeat: repeat-y; }",
    "DIV.scrollBarContainer { position: absolute; right: 0; top: 0; z-index: 3; width: 10px; overflow: hidden; background-color: #DFDFDF; cursor: default; }",
    "DIV.scrollBarTop, DIV.scrollBarBottom, DIV.scrollBarSliderTop, DIV.scrollBarSliderMiddle, DIV.scrollBarSliderBottom { position: absolute; left: 0; width: 10px; overflow: hidden; background-color: transparent; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAATCAMAAACwcE1OAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQhQTFRF////ysrK39/fxMTEtbW12tra9vb26+vroqKi5ubmlpaW0NDQwcHB4ODg29vb1NTU4+Pj/f397u7ut7e38fHx4eHh3d3d8vLy+vr65+fnz8/P7e3txcXFzMzMp6enwMDAw8PDxsbGpaWlj4+Pvb295eXlurq6oaGh+/v7uLi40tLStLS0u7u7vr6+0dHRnZ2doKCgmJiY1tbWl5eXjIyMjY2Nzc3N2NjYi4uLwsLCubm5lJSUkJCQ8PDwv7+/3Nzc+fn59/f37Ozs1dXVm5ubqKio7+/vpqamlZWVtra2o6Oj4uLinp6empqazs7On5+fsbGxvLy819fXqqqq2dnZrKysyMjI////b2CjvQAAAFh0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AHibwggAAAEqSURBVHjaxJDrVoJAFEaPw2UckYsomqnhDRQwFLuYllJappWW3Xj/NwkGjdUTtP/MXmev+fPBLsvsue80TyjNxCArcIjCpVkmRWESA92e8yGV0XYwGWqEaO9jZ2ByBsaGVHdgV+ge8SV1WbI3ojovixKnrTcGKhbRMyFrmPC5KGNe8EihUhY5meQ9zElFpCk4D9ZvXh2yszpkB4IgiHJAiXJsUQ6fKF+mGvX4eHbduort/KJ1s8+57u1dfISQP/avv60lXU2dChkUryayGQX54WqGwcLkexptPnVd72OLCEFu3vK+bAVjRbYsaGdnpyH14+HLU3rQ778+srPEQK+5C1leDKXPzpvZ7vXaenWcGFRtX6T4D2ajRmkkBowwkiijJqtXKXpiPwIMAEGFW/e/LsLPAAAAAElFTkSuQmCC); background-repeat: no-repeat; cursor: default; }",
    "DIV.scrollBarTop, DIV.scrollBarBottom { height: 2px; z-index: 4; }",
    "DIV.scrollBarTop { top: 0; }",
    "DIV.scrollBarBottom { bottom: 0; }",
    "DIV.scrollBarSlider { position: absolute; left: 0; top: 1px; z-index: 5; width: 10px; overflow: hidden; background-color: #F7F7F7; cursor: default; }",
    "DIV.scrollBarSliderTop, DIV.scrollBarSliderMiddle, DIV.scrollBarSliderBottom { z-index: 7; }",
    "DIV.scrollBarSliderTop, DIV.scrollBarSliderBottom { height: 4px; }",
    "DIV.scrollBarSliderTop { top: 0; }",
    "DIV.scrollBarSliderMiddle { height: 7px; }",
    "DIV.scrollBarSliderBottom { bottom: 0; }",
    "DIV.scrollBarContainerNormal { background-position: 0 0; }",
    "DIV.scrollBarContainerNormal DIV.scrollBarTop { background-position: 0 0; }",
    "DIV.scrollBarContainerNormal DIV.scrollBarBottom { background-position: 0 -17px; }",
    "DIV.scrollBarContainerNormal DIV.scrollBarSlider { background-position: -30px 0; }",
    "DIV.scrollBarContainerNormal DIV.scrollBarSliderTop { background-position: 0 -2px; }",
    "DIV.scrollBarContainerNormal DIV.scrollBarSliderMiddle { background-position: 0 -6px; }",
    "DIV.scrollBarContainerNormal DIV.scrollBarSliderBottom { background-position: 0 -13px; }",
    "DIV.scrollBarContainerOver { background-position: -10px 0; }",
    "DIV.scrollBarTop { background-position: -10px 0; }",
    "DIV.scrollBarContainerOver DIV.scrollBarBottom { background-position: -10px -17px; }",
    "DIV.scrollBarContainerOver DIV.scrollBarSlider { background-position: -40px 0; }",
    "DIV.scrollBarContainerOver DIV.scrollBarSliderTop { background-position: -10px -2px; }",
    "DIV.scrollBarContainerOver DIV.scrollBarSliderMiddle { background-position: -10px -6px; }",
    "DIV.scrollBarContainerOver DIV.scrollBarSliderBottom { background-position: -10px -13px; }",
    "DIV.scrollBarContainerActive { background-position: -20px 0; }",
    "DIV.scrollBarContainerActive DIV.scrollBarTop { background-position: -20px 0; }",
    "DIV.scrollBarContainerActive DIV.scrollBarBottom { background-position: -20px -px; }",
    "DIV.scrollBarContainerActive DIV.scrollBarSlider { background-position: -50px 0; }",
    "DIV.scrollBarContainerActive DIV.scrollBarSliderTop { background-position: -20px -2px; }",
    "DIV.scrollBarContainerActive DIV.scrollBarSliderMiddle { background-position: -20px -6px; }",
    "DIV.scrollBarContainerActive DIV.scrollBarSliderBottom { background-position: -20px -13px; }",
    "DIV.scrollablePanelContentContainer { overflow-x: hidden; overflow-y: scroll; visibility: hidden; }",
    "DIV.scrollablePanelContent { }",
    "DIV.scrollablePanelContainerBorder { border: 1px solid #C4C4C4; border-right-color: #DBDBDB; border-bottom-color: #DBDBDB; border-radius: 2px; }",
  ];
})();
(function (c, b, a) {
  if (!b.AccessHelper) {
    b.AccessHelper = {};
  }
  b.AccessHelper.getValue = function (j, h) {
    if (j == a || j == "") {
      return h;
    }
    var g = b.String.gtrim(j, ".").split("."),
      e,
      f,
      d = h;
    for (e = 0, f = g.length; e < f; e++) {
      d = d[g[e]];
    }
    return d;
  };
  b.AccessHelper.setValue = function (n, m, l) {
    var k = b.String.gtrim(n, ".").split("."),
      e,
      h,
      d = l;
    for (e = 0, h = k.length; e < h; e++) {
      if (e + 1 === h) {
        if (d[k[e]] === m) {
          break;
        }
        if (
          b.getTypeString(m) == "array" &&
          b.getTypeString(d[k[e]]) != "array"
        ) {
          d[k[e]] = [];
        }
        if (
          b.getTypeString(m) == "array" &&
          b.getTypeString(d[k[e]]) == "array"
        ) {
          d[k[e]].splice(0);
          var g, h, f;
          for (g = 0, h = m.length; g < h; g++) {
            d[k[e]].push(m[g]);
          }
          break;
        }
        d[k[e]] = b.Object.copy(m);
        break;
      }
      d = d[k[e]];
    }
  };
})(window, WA);
(function (d, c, b) {
  if (!c.ModelAccessor) {
    c.ModelAccessor = a;
    c.ModelAccessor.TypeName = "WA.ModelAccessor";
  }
  function a(t, s) {
    s = s || {};
    var y = this,
      E = c.ModelAccessor.TypeName,
      I = t,
      w = s.parentComponent,
      x = I.parentModelAccessor;
    y.toString = function () {
      return E;
    };
    y.Dispose = c.Tools.EventHandlers.createHandlers(y, { id: "Dispose" });
    var v,
      f = {},
      G = {},
      H,
      u = false,
      l,
      J = false;
    y.dispose = m;
    y.getHasChanges = o;
    y.applyChanges = e;
    y.resetChanges = z;
    y.getValue = q;
    y.setValue = D;
    y.getErrors = n;
    y.createChildModelAccessor = j;
    y.createValueAccessor = k;
    y.setServerValidationResult = B;
    y.setValidationErrors = C;
    y.resetValidationErrors = A;
    y.validateModelClone = F;
    y.getModel = p;
    y.getModelClone = function () {
      return v;
    };
    function p() {
      g();
      if (x) {
        return x.getValue("");
      }
      return I.model;
    }
    function o(K) {
      g();
      var L;
      if (K) {
        for (L in f) {
          if (f.hasOwnProperty(L) && L.indexOf(K) === 0) {
            return true;
          }
        }
        return false;
      }
      for (L in f) {
        if (f.hasOwnProperty(L)) {
          return true;
        }
      }
      return false;
    }
    function B(K) {
      if (!I.validationModel || I.validationModel.modelName !== K.ModelName) {
        return;
      }
      C(K.Errors);
    }
    function A() {
      G = {};
    }
    function C(K) {
      g();
      A();
      var L, N, M;
      for (L = 0, N = K.length; L < N; L++) {
        M = K[L];
        if (!G[M.ValuePath]) {
          G[M.ValuePath] = [];
        }
        G[M.ValuePath].push(M.ErrorMessage);
      }
    }
    function j(K) {
      g();
      return new c.ModelAccessor(
        { parentModelAccessor: y, validationModel: I.validationModel },
        { parentComponent: K }
      );
    }
    function k(L, K) {
      g();
      return new c.ValueAccessor(
        { modelAccessor: y, valuePath: L },
        { parentComponent: K }
      );
    }
    function n(K) {
      if (!K) {
        return G;
      }
      return G[K] || [];
    }
    function F() {
      g();
      J = true;
      if (!H && !l) {
        return { isValid: true };
      }
      var N = { isValid: true },
        K = { isValid: true },
        M = { isValid: true, errors: {} };
      if (H) {
        N = H.validateModel(y);
      }
      if (l) {
        K = l(v);
      }
      if (!N.isValid) {
        M.isValid = false;
        M.errors = N.errors;
      }
      if (!K.isValid) {
        M.isValid = false;
        for (var L in K.errors) {
          if (K.errors.hasOwnProperty(L)) {
            if (M.errors.hasOwnProperty(L)) {
              M.errors[L] = M.errors[L].concat(K.errors[L]);
            } else {
              M.errors[L] = K.errors[L];
            }
          }
        }
      }
      return M;
    }
    function z(K) {
      g();
      if (!o()) {
        return;
      }
      if (K && f[K]) {
        var L = c.AccessHelper.getValue(K, p());
        c.AccessHelper.setValue(K, L, v);
        delete f[K];
        return;
      }
      h(p(), v);
      f = {};
    }
    function e() {
      g();
      var K = { isSuccess: true, hasChanges: o() };
      if (!K.hasChanges && J && Object.keys(G).length === 0) {
        return K;
      }
      G = {};
      var L = F();
      K.isSuccess = L.isValid;
      if (L.isValid === true) {
        if (K.hasChanges) {
          if (x) {
            i();
          } else {
            h(v, I.model);
          }
        }
        f = {};
      } else {
        G = L.errors;
      }
      return K;
    }
    function i() {
      g();
      var K, L;
      for (K in f) {
        if (f.hasOwnProperty(K)) {
          L = c.AccessHelper.getValue(K, v);
          x.setValue(K, L);
        }
      }
    }
    function h(M, L) {
      g();
      var K, N;
      for (K in f) {
        if (f.hasOwnProperty(K)) {
          N = c.AccessHelper.getValue(K, M);
          c.AccessHelper.setValue(K, N, L);
        }
      }
    }
    function q(K) {
      g();
      return c.AccessHelper.getValue(K, v);
    }
    function D(M, L) {
      g();
      c.AccessHelper.setValue(M, L, v);
      var K = x ? x.getValue(M) : c.AccessHelper.getValue(M, I.model);
      if (K != L) {
        f[M] = true;
      } else {
        delete f[M];
      }
    }
    function g() {
      if (u) {
      }
    }
    function r() {
      w.Dispose.addHandler(m);
      v = c.Object.copy(p());
      if (I.validationModel) {
        H = c.Object.create(c.ValidationProcessor, [
          I.validationModel,
          { parentComponent: y },
        ]);
      }
      if (
        I.customValidator &&
        c.getTypeString(I.customValidator) != "function"
      ) {
      }
      l = I.customValidator;
    }
    function m() {
      if (u) {
        return;
      }
      u = true;
      y.Dispose.fireHandlers();
      w.Dispose.removeHandler(m);
      G = null;
      H = null;
      v = null;
      I = null;
      w = null;
      y.RenderComplete = null;
      y.Dispose = null;
    }
    r();
  }
})(window, WA);
(function (d, c, b) {
  if (!c.SimpleAccessor) {
    c.SimpleAccessor = a;
    c.SimpleAccessor.TypeName = "WA.SimpleAccessor";
  }
  function a(k, j) {
    j = j || {};
    var m = this,
      o = c.SimpleAccessor.TypeName,
      q = k,
      p = q.value,
      l = j.parentComponent;
    m.toString = function () {
      return o;
    };
    m.Dispose = c.Tools.EventHandlers.createHandlers(m, { id: "Dispose" });
    m.dispose = f;
    m.getValue = h;
    m.setValue = n;
    m.getErrors = g;
    m.createChildValueAccessor = e;
    function e(r, s) {
      return c.UI.Helpers.ValueAccessorHelper.createValueAccessor(
        { value: h(r) },
        m
      );
    }
    function h(r) {
      r = r || "";
      return c.AccessHelper.getValue(r, p);
    }
    function n(r, s) {
      s = s || "";
      if (s == "") {
        p = r;
        return;
      }
      c.AccessHelper.setValue(s, r, p);
    }
    function g() {
      return [];
    }
    function i() {
      l.Dispose.addHandler(f);
    }
    function f() {
      m.Dispose.fireHandlers();
      l.Dispose.removeHandler(f);
      p = null;
      q = null;
      l = null;
      m.RenderComplete = null;
      m.Dispose = null;
    }
    i();
  }
})(window, WA);
(function (d, c, a) {
  if (!c.ValueAccessor) {
    c.ValueAccessor = b;
    c.ValueAccessor.TypeName = "WA.ValueAccessor";
  }
  function b(l, k) {
    k = k || {};
    var o = this,
      r = c.ValueAccessor.TypeName,
      t = l,
      n = k.parentComponent,
      m = t.modelAccessor,
      s = t.valuePath || "";
    o.toString = function () {
      return r;
    };
    o.Dispose = c.Tools.EventHandlers.createHandlers(o, { id: "Dispose" });
    o.dispose = f;
    o.getPath = h;
    o.getValue = i;
    o.setValue = q;
    o.getErrors = g;
    o.resetChanges = p;
    o.createChildValueAccessor = e;
    function p() {
      m.resetChanges(s);
    }
    function e(u, w) {
      var v = s.length > 0 ? s + "." + u : u;
      return new c.ValueAccessor(
        { modelAccessor: m, valuePath: v },
        { parentComponent: w }
      );
    }
    function h() {
      return s;
    }
    function i(v) {
      var u = s;
      if (v != a) {
        u += "." + v;
      }
      return m.getValue(u);
    }
    function q(w, v) {
      var u = s;
      if (v != a) {
        u += "." + v;
      }
      m.setValue(u, w);
    }
    function g() {
      return m.getErrors(s);
    }
    function j() {
      n.Dispose.addHandler(f);
    }
    function f() {
      o.Dispose.fireHandlers();
      n.Dispose.removeHandler(f);
      m = null;
      s = null;
      t = null;
      n = null;
      o.RenderComplete = null;
      o.Dispose = null;
    }
    j();
  }
})(window, WA);
(function (d, c, a) {
  if (!c.ValidationProcessor) {
    c.ValidationProcessor = b;
  }
  function b(j, i) {
    i = i || {};
    var m = this,
      n = "WA.ValidationProcessor",
      q = j || { validationRules: [] },
      k = i.parentComponent;
    m.toString = function () {
      return n;
    };
    m.Dispose = c.Tools.EventHandlers.createHandlers(m, { id: "Dispose" });
    m.init = h;
    m.validateModel = o;
    var l = [];
    function o(t) {
      var w = { isValid: true, errors: {} };
      var r, s, v, u;
      for (r = 0, s = l.length; r < s; r++) {
        u = l[r];
        v = p(t, u);
        if (!v.isValid) {
          w.isValid = false;
          if (!w.errors[v.pinPath]) {
            w.errors[v.pinPath] = [];
          }
          w.errors[v.pinPath].push(v.errorMessage);
        }
      }
      return w;
    }
    function p(r, s) {
      var t = { isValid: true };
      var u = r.getValue(s.valuePath);
      return c.ValidationProcessorHelper.validateRule(u, s);
    }
    function f(t) {
      var s = "";
      if (t.isMultilineRegex === true) {
        s += "m";
      }
      if (t.isIgnoreCaseRegex === true) {
        s += "i";
      }
      var r = c.Object.copy(t);
      r.regex = new RegExp(t.value, s);
      return r;
    }
    function e(t, r) {
      var s = c.Object.copy(t);
      s.validator = r.createCustomRule(t, m);
      return s;
    }
    function h() {
      k.Dispose.addHandler(g);
      var r = c.Object.create(c.ValidationProcessor.CustomRuleFactory, [
        {},
        { parentComponent: m },
      ]);
      var s, u, t, v;
      for (s = 0, u = q.validationRules.length; s < u; s++) {
        t = q.validationRules[s];
        switch (t.type) {
          case c.ValidationProcessor.ValidationRuleType.MaxLength:
          case c.ValidationProcessor.ValidationRuleType.MinLength:
          case c.ValidationProcessor.ValidationRuleType.Required:
          case c.ValidationProcessor.ValidationRuleType.MaxValue:
          case c.ValidationProcessor.ValidationRuleType.MinValue:
          case c.ValidationProcessor.ValidationRuleType.NumericValueRange:
          case c.ValidationProcessor.ValidationRuleType.DateRangeDirection:
          case c.ValidationProcessor.ValidationRuleType.DateAndTimePeriod:
          case c.ValidationProcessor.ValidationRuleType.DateTimeTicks:
            v = t;
            break;
          case c.ValidationProcessor.ValidationRuleType.Mask:
            v = f(t);
            break;
          case c.ValidationProcessor.ValidationRuleType.Custom:
            v = e(t, r);
            break;
        }
        l.push(v);
      }
    }
    function g() {
      m.Dispose.fireHandlers();
      k.Dispose.removeHandler(g);
      q = null;
      k = null;
      l = null;
      m.Dispose = null;
    }
  }
})(window, WA);
(function (d, c, a) {
  if (!c.ValidationProcessorHelper) {
    c.ValidationProcessorHelper = new b();
  }
  function b() {
    var f = this;
    function e(h) {
      if (
        h.fromDate == null &&
        (h.fromTime != null || h.untilDate != null || h.untilTime != null)
      ) {
        return false;
      }
      if (h.untilDate == null) {
        return (
          h.fromDate == null ||
          h.fromTime == null ||
          h.untilTime == null ||
          h.fromTime <= h.untilTime
        );
      }
      if (h.fromTime == null || h.untilTime == null) {
        return h.fromDate <= h.untilDate;
      }
      return h.fromDate == h.untilDate
        ? h.fromTime <= h.untilTime
        : h.fromDate < h.untilDate;
    }
    f.validateRule = function (o, m) {
      var n = { isValid: true };
      switch (m.type) {
        case c.ValidationProcessor.ValidationRuleType.MaxLength:
          if (o != a && c.getTypeString(o) == "string" && o.length > m.value) {
            n.isValid = false;
            n.errorMessage = m.errorMessage.replace(
              "<<ExcessLength>>",
              o.length - m.value
            );
          }
          break;
        case c.ValidationProcessor.ValidationRuleType.MinLength:
          if (o != a && c.getTypeString(o) == "string" && o.length < m.value) {
            n.isValid = false;
            n.errorMessage = m.errorMessage;
          }
          break;
        case c.ValidationProcessor.ValidationRuleType.Required:
          if (!g(o, m)) {
            n.isValid = false;
            n.errorMessage = m.errorMessage;
          }
          break;
        case c.ValidationProcessor.ValidationRuleType.Mask:
          if (o && m.regex.test(o) !== m.isPositiveCheck) {
            n.isValid = false;
            n.errorMessage = m.errorMessage;
          }
          break;
        case c.ValidationProcessor.ValidationRuleType.Custom:
          var h = [],
            j,
            k,
            l;
          if (!m.validator.validate(o, h)) {
            n.isValid = false;
            n.errorMessage = m.errorMessage;
            for (j = 0, k = h.length; j < k; j++) {
              l = h[j];
              n.errorMessage = n.errorMessage.replace(
                "<<" + l.key + ">>",
                l.value
              );
            }
          }
          break;
        case c.ValidationProcessor.ValidationRuleType.MaxValue:
          if (o != a && o > m.value) {
            n.isValid = false;
            n.errorMessage = m.errorMessage;
          }
          break;
        case c.ValidationProcessor.ValidationRuleType.MinValue:
          if (o != a && o < m.value) {
            n.isValid = false;
            n.errorMessage = m.errorMessage;
          }
          break;
        case c.ValidationProcessor.ValidationRuleType.NumericValueRange:
          if (
            o != a &&
            c.getTypeString(o) == "number" &&
            (o < m.minValue || o > m.maxValue)
          ) {
            n.isValid = false;
            n.errorMessage = m.errorMessage;
          }
          break;
        case c.ValidationProcessor.ValidationRuleType.DateRangeDirection:
          if (
            o != a &&
            o.start != a &&
            o.end != a &&
            o.start.unixTicks != null &&
            o.end.unixTicks != null &&
            o.start.unixTicks > o.end.unixTicks
          ) {
            n.isValid = false;
            n.errorMessage = m.errorMessage;
          }
          break;
        case c.ValidationProcessor.ValidationRuleType.DateAndTimePeriod:
          if (!e(o)) {
            n.isValid = false;
            n.errorMessage = m.errorMessage;
          }
          break;
      }
      if (!n.isValid) {
        n.pinPath = m.pinTo || m.valuePath;
      }
      return n;
    };
    function g(i, h) {
      if (i == a) {
        return false;
      }
      switch (h.valueType) {
        case c.UI.ModelDataType.Int:
        case c.UI.ModelDataType.Double:
          if (c.getTypeString(i) != "number") {
            throw new Error(
              "expected and current data types are different. expected: Int or Double; current: " +
                c.getTypeString(i)
            );
          }
          return true;
        case c.UI.ModelDataType.Enum:
          if (c.getTypeString(i) != "number") {
            throw new Error(
              "expected and current data types are different. expected: Int current: " +
                c.getTypeString(i)
            );
          }
          return i !== 0;
        case c.UI.ModelDataType.String:
          if (c.getTypeString(i) != "string") {
            throw new Error(
              "expected and current data types are different. expected: String; current: " +
                c.getTypeString(i)
            );
          }
          return i.length > 0;
        case c.UI.ModelDataType.Collection:
          if (c.getTypeString(i) != "array") {
            throw new Error(
              "expected and current data types are different. expected: Collection; current: " +
                c.getTypeString(i)
            );
          }
          return i.length > 0;
        case c.UI.ModelDataType.Object:
          if (c.getTypeString(i) != "object") {
            throw new Error(
              "expected and current data types are different. expected: Object; current: " +
                c.getTypeString(i)
            );
          }
          return true;
        case c.UI.ModelDataType.DateTimePeriod:
          if (
            c.getTypeString(i) != "object" ||
            !i.hasOwnProperty("start") ||
            !i.hasOwnProperty("end")
          ) {
            throw new Error(
              "expected and current data types are different. expected: Object [DateTimePeriod]; current: " +
                c.getTypeString(i)
            );
          }
          return i.start.unixTicks != a || i.end.unixTicks != a;
        case c.UI.ModelDataType.DateAndTimePeriod:
          if (
            c.getTypeString(i) != "object" ||
            !i.hasOwnProperty("fromDate") ||
            !i.hasOwnProperty("fromTime") ||
            !i.hasOwnProperty("untilDate") ||
            !i.hasOwnProperty("untilTime")
          ) {
            throw new Error(
              "expected and current data types are different. expected: Object [DateAndTimePeriod]; current: " +
                c.getTypeString(i)
            );
          }
          return i.fromDate != a;
        case c.UI.ModelDataType.DateTimeTicks:
          if (
            c.getTypeString(i) != "object" ||
            !i.hasOwnProperty("unixTicks")
          ) {
            throw new Error(
              "expected and current data types are different. expected: Object [DateTimeTicks]; current: " +
                c.getTypeString(i)
            );
          }
          return i.unixTicks != a;
        default:
          throw new Error("unknown metaDataType");
      }
    }
  }
})(window, WA);
(function (c, b, a) {
  if (!b.ValidationProcessor.ValidationRuleType) {
    b.ValidationProcessor.ValidationRuleType = {
      MaxLength: "maxLength",
      MinLength: "minLength",
      Mask: "mask",
      Required: "required",
      Custom: "custom",
      MaxValue: "maxValue",
      MinValue: "minValue",
      NumericValueRange: "numericValueRange",
      DateRangeDirection: "dateRangeDirection",
      DateRangeRequired: "dateRangeRequired",
      DateAndTimePeriod: "dateAndTimePeriod",
      DateTimeTicks: "dateTimeTicks",
    };
  }
})(window, WA);
(function (d, c, b) {
  if (!c.ValidationProcessor.CustomRuleFactory) {
    c.ValidationProcessor.CustomRuleFactory = a;
  }
  function a(i, h) {
    h = h || {};
    var k = this,
      l = "WA.ValidationProcessor.CustomRuleFactory",
      m = i,
      j = h.parentComponent;
    k.toString = function () {
      return l;
    };
    k.Dispose = c.Tools.EventHandlers.createHandlers(k, { id: "Dispose" });
    k.init = g;
    k.createCustomRule = e;
    function e(o, n) {
      return c.Object.create(c.ValidationProcessor.CustomRuleFactory[o.key], [
        o,
        { parentComponent: n },
      ]);
    }
    function g() {
      j.Dispose.addHandler(f);
    }
    function f() {
      k.Dispose.fireHandlers();
      j.Dispose.removeHandler(f);
      m = null;
      j = null;
      k.RenderComplete = null;
      k.Dispose = null;
    }
  }
})(window, WA);
(function (d, c, b) {
  if (
    !c.ValidationProcessor.CustomRuleFactory
      .AnnouncementsSchedulerModelValidationRule
  ) {
    c.ValidationProcessor.CustomRuleFactory.AnnouncementsSchedulerModelValidationRule = a;
  }
  function a(h, g) {
    g = g || {};
    var j = this,
      k =
        "WA.ValidationProcessor.CustomRuleFactory.AnnouncementsSchedulerModelValidationRule",
      m = h,
      i = g.parentComponent;
    j.toString = function () {
      return k;
    };
    j.Dispose = c.Tools.EventHandlers.createHandlers(j, { id: "Dispose" });
    j.init = f;
    j.validate = l;
    function l(o) {
      var n = o;
      if (n.daysBeforeSend > n.recipients.maxDaysBeforeSend) {
        return false;
      }
      return true;
    }
    function f() {
      i.Dispose.addHandler(e);
    }
    function e() {
      j.Dispose.fireHandlers();
      i.Dispose.removeHandler(e);
      m = null;
      i = null;
      j.RenderComplete = null;
      j.Dispose = null;
    }
  }
})(window, WA);
(function (d, c, b) {
  if (!c.ValidationProcessor.CustomRuleFactory.CustomLayoutChunksLength) {
    c.ValidationProcessor.CustomRuleFactory.CustomLayoutChunksLength = a;
  }
  function a(h, g) {
    g = g || {};
    var k = this,
      l = "WA.ValidationProcessor.CustomRuleFactory.CustomLayoutChunksLength",
      n = h,
      j = g.parentComponent,
      i = 2048000;
    k.toString = function () {
      return l;
    };
    k.Dispose = c.Tools.EventHandlers.createHandlers(k, { id: "Dispose" });
    k.init = f;
    k.validate = m;
    function m(s) {
      var o = s.value,
        p,
        q;
      var r = 0;
      for (p = 0, q = o.length; p < q; p++) {
        if (o[p].content) {
          r += o[p].content.length;
        }
      }
      return r <= i;
    }
    function f() {
      j.Dispose.addHandler(e);
    }
    function e() {
      k.Dispose.fireHandlers();
      j.Dispose.removeHandler(e);
      n = null;
      j = null;
      k.RenderComplete = null;
      k.Dispose = null;
    }
  }
})(window, WA);
(function (d, c, b) {
  if (
    !c.ValidationProcessor.CustomRuleFactory
      .EventRegistrationTypeAvailableUntilLessEventEndDate
  ) {
    c.ValidationProcessor.CustomRuleFactory.EventRegistrationTypeAvailableUntilLessEventEndDate = a;
  }
  function a(h, g) {
    g = g || {};
    var k = this,
      l =
        "WA.ValidationProcessor.CustomRuleFactory.EventRegistrationTypeAvailableUntilLessEventEndDate",
      n = h,
      j = g.parentComponent;
    k.toString = function () {
      return l;
    };
    k.Dispose = c.Tools.EventHandlers.createHandlers(k, { id: "Dispose" });
    k.init = f;
    k.validate = m;
    function m(p) {
      var o = p.eventEndDate || p.eventStartDate;
      return i(p.availablePeriod.end, o) && i(p.availablePeriod.start, o);
    }
    function i(o, p) {
      return !o.unixTicks || o.unixTicks <= p.unixTicks;
    }
    function f() {
      j.Dispose.addHandler(e);
    }
    function e() {
      k.Dispose.fireHandlers();
      j.Dispose.removeHandler(e);
      n = null;
      j = null;
      k.RenderComplete = null;
      k.Dispose = null;
    }
  }
})(window, WA);
(function (d, c, b) {
  if (
    !c.ValidationProcessor.CustomRuleFactory.EventRegistrationTypeCodeRequired
  ) {
    c.ValidationProcessor.CustomRuleFactory.EventRegistrationTypeCodeRequired = a;
  }
  function a(h, g) {
    g = g || {};
    var j = this,
      k =
        "WA.ValidationProcessor.CustomRuleFactory.EventRegistrationTypeCodeRequired",
      m = h,
      i = g.parentComponent;
    j.toString = function () {
      return k;
    };
    j.Dispose = c.Tools.EventHandlers.createHandlers(j, { id: "Dispose" });
    j.init = f;
    j.validate = l;
    function l(n) {
      return !n.availability.registrationCode || !!n.registrationCode;
    }
    function f() {
      i.Dispose.addHandler(e);
    }
    function e() {
      j.Dispose.fireHandlers();
      i.Dispose.removeHandler(e);
      m = null;
      i = null;
      j.RenderComplete = null;
      j.Dispose = null;
    }
  }
})(window, WA);
(function (d, c, b) {
  if (
    !c.ValidationProcessor.CustomRuleFactory
      .EventRegistrationTypeMembershipLevels
  ) {
    c.ValidationProcessor.CustomRuleFactory.EventRegistrationTypeMembershipLevels = a;
  }
  function a(h, g) {
    g = g || {};
    var j = this,
      k =
        "WA.ValidationProcessor.CustomRuleFactory.EventRegistrationTypeMembershipLevels",
      m = h,
      i = g.parentComponent;
    j.toString = function () {
      return k;
    };
    j.Dispose = c.Tools.EventHandlers.createHandlers(j, { id: "Dispose" });
    j.init = f;
    j.validate = l;
    function l(n) {
      return !n.availability.membersOnly || n.availableForLevels.length > 0;
    }
    function f() {
      i.Dispose.addHandler(e);
    }
    function e() {
      j.Dispose.fireHandlers();
      i.Dispose.removeHandler(e);
      m = null;
      i = null;
      j.RenderComplete = null;
      j.Dispose = null;
    }
  }
})(window, WA);
(function (d, c, b) {
  if (
    !c.ValidationProcessor.CustomRuleFactory
      .EventReminderDaysBeforeSendValidationRule
  ) {
    c.ValidationProcessor.CustomRuleFactory.EventReminderDaysBeforeSendValidationRule = a;
    c.ValidationProcessor.CustomRuleFactory.EventReminderDaysBeforeSendValidationRule.TypeName =
      "WA.ValidationProcessor.CustomRuleFactory.EventReminderDaysBeforeSendValidationRule";
  }
  function a(h, g) {
    g = g || {};
    var j = this,
      k =
        c.ValidationProcessor.CustomRuleFactory
          .EventReminderDaysBeforeSendValidationRule.TypeName,
      m = h,
      i = g.parentComponent;
    j.toString = function () {
      return k;
    };
    j.Dispose = c.Tools.EventHandlers.createHandlers(j, { id: "Dispose" });
    j.init = f;
    j.validate = l;
    function l(o) {
      var n = o;
      if (n.daysBeforeSend > n.maxDaysBeforeSend) {
        return false;
      }
      return true;
    }
    function f() {
      i.Dispose.addHandler(e);
    }
    function e() {
      j.Dispose.fireHandlers();
      i.Dispose.removeHandler(e);
      m = null;
      i = null;
      j.RenderComplete = null;
      j.Dispose = null;
    }
  }
})(window, WA);
(function (d, c, b) {
  if (
    !c.ValidationProcessor.CustomRuleFactory
      .EventReminderSendBeforeFirstSessionValidationRule
  ) {
    c.ValidationProcessor.CustomRuleFactory.EventReminderSendBeforeFirstSessionValidationRule = a;
    c.ValidationProcessor.CustomRuleFactory.EventReminderSendBeforeFirstSessionValidationRule.TypeName =
      "WA.ValidationProcessor.CustomRuleFactory.EventReminderSendBeforeFirstSessionValidationRule";
  }
  function a(h, g) {
    g = g || {};
    var j = this,
      k =
        c.ValidationProcessor.CustomRuleFactory
          .EventReminderSendBeforeFirstSessionValidationRule.TypeName,
      m = h,
      i = g.parentComponent;
    j.toString = function () {
      return k;
    };
    j.Dispose = c.Tools.EventHandlers.createHandlers(j, { id: "Dispose" });
    j.init = f;
    j.validate = l;
    function l(o) {
      var n = o;
      if (n.isEventStarted === true && n.sendBeforeFirstSession === true) {
        return false;
      }
      return true;
    }
    function f() {
      i.Dispose.addHandler(e);
    }
    function e() {
      j.Dispose.fireHandlers();
      i.Dispose.removeHandler(e);
      m = null;
      i = null;
      j.RenderComplete = null;
      j.Dispose = null;
    }
  }
})(window, WA);
(function (d, c, b) {
  if (
    !c.ValidationProcessor.CustomRuleFactory
      .EventReminderSendBeforeRequiredValidationRule
  ) {
    c.ValidationProcessor.CustomRuleFactory.EventReminderSendBeforeRequiredValidationRule = a;
    c.ValidationProcessor.CustomRuleFactory.EventReminderSendBeforeRequiredValidationRule.TypeName =
      "WA.ValidationProcessor.CustomRuleFactory.EventReminderSendBeforeRequiredValidationRule";
  }
  function a(h, g) {
    g = g || {};
    var j = this,
      k =
        c.ValidationProcessor.CustomRuleFactory
          .EventReminderSendBeforeRequiredValidationRule.TypeName,
      m = h,
      i = g.parentComponent;
    j.toString = function () {
      return k;
    };
    j.Dispose = c.Tools.EventHandlers.createHandlers(j, { id: "Dispose" });
    j.init = f;
    j.validate = l;
    function l(o) {
      var n = o;
      if (
        n.sendBeforeEverySession !== true &&
        n.sendBeforeFirstSession !== true
      ) {
        return false;
      }
      return true;
    }
    function f() {
      i.Dispose.addHandler(e);
    }
    function e() {
      j.Dispose.fireHandlers();
      i.Dispose.removeHandler(e);
      m = null;
      i = null;
      j.RenderComplete = null;
      j.Dispose = null;
    }
  }
})(window, WA);
(function (d, c, b) {
  if (
    !c.ValidationProcessor.CustomRuleFactory
      .EventScheduleAnnuallyRepeatsValidationRule
  ) {
    c.ValidationProcessor.CustomRuleFactory.EventScheduleAnnuallyRepeatsValidationRule = a;
    c.ValidationProcessor.CustomRuleFactory.EventScheduleAnnuallyRepeatsValidationRule.TypeName =
      "WA.ValidationProcessor.CustomRuleFactory.EventScheduleAnnuallyRepeatsValidationRule";
  }
  function a(h, g) {
    g = g || {};
    var j = this,
      k =
        c.ValidationProcessor.CustomRuleFactory
          .EventScheduleAnnuallyRepeatsValidationRule.TypeName,
      m = h,
      i = g.parentComponent;
    j.toString = function () {
      return k;
    };
    j.Dispose = c.Tools.EventHandlers.createHandlers(j, { id: "Dispose" });
    j.init = f;
    j.validate = l;
    function l(n) {
      return !(
        n.periodicityType == c.UI.Scheduler.PeriodicityType.Yearly &&
        n.endType == c.UI.Scheduler.EndType.Repeats &&
        c.getTypeString(n.endsAfterOccurrences) == "number" &&
        n.repeatEvery * n.endsAfterOccurrences > 7320
      );
    }
    function f() {
      i.Dispose.addHandler(e);
    }
    function e() {
      j.Dispose.fireHandlers();
      i.Dispose.removeHandler(e);
      m = null;
      i = null;
      j.RenderComplete = null;
      j.Dispose = null;
    }
  }
})(window, WA);
(function (d, c, b) {
  if (
    !c.ValidationProcessor.CustomRuleFactory.EventScheduleEndDateValidationRule
  ) {
    c.ValidationProcessor.CustomRuleFactory.EventScheduleEndDateValidationRule = a;
    c.ValidationProcessor.CustomRuleFactory.EventScheduleEndDateValidationRule.TypeName =
      "WA.ValidationProcessor.CustomRuleFactory.EventScheduleEndDateValidationRule";
  }
  function a(h, g) {
    g = g || {};
    var j = this,
      k =
        c.ValidationProcessor.CustomRuleFactory
          .EventScheduleEndDateValidationRule.TypeName,
      m = h,
      i = g.parentComponent;
    j.toString = function () {
      return k;
    };
    j.Dispose = c.Tools.EventHandlers.createHandlers(j, { id: "Dispose" });
    j.init = f;
    j.validate = l;
    function l(n) {
      if (
        n.endType != c.UI.Scheduler.EndType.Date ||
        n.startDate.unixTicks == null
      ) {
        return true;
      }
      return (
        n.endDate.unixTicks != null &&
        n.startDate.unixTicks <= n.endDate.unixTicks
      );
    }
    function f() {
      i.Dispose.addHandler(e);
    }
    function e() {
      j.Dispose.fireHandlers();
      i.Dispose.removeHandler(e);
      m = null;
      i = null;
      j.RenderComplete = null;
      j.Dispose = null;
    }
  }
})(window, WA);
(function (d, c, b) {
  if (
    !c.ValidationProcessor.CustomRuleFactory
      .EventScheduleSessionTimeValidationRule
  ) {
    c.ValidationProcessor.CustomRuleFactory.EventScheduleSessionTimeValidationRule = a;
    c.ValidationProcessor.CustomRuleFactory.EventScheduleSessionTimeValidationRule.TypeName =
      "WA.ValidationProcessor.CustomRuleFactory.EventScheduleSessionTimeValidationRule";
    c.ValidationProcessor.CustomRuleFactory.EventScheduleSessionTimeValidationRule.Limits = {
      MinTime: 0,
      MaxTime: 86400000,
      MinDaysDuration: 1,
      MaxDaysDuration: 366,
    };
  }
  function a(h, g) {
    g = g || {};
    var k = this,
      l =
        c.ValidationProcessor.CustomRuleFactory
          .EventScheduleSessionTimeValidationRule.TypeName,
      n = h,
      j = g.parentComponent;
    k.toString = function () {
      return l;
    };
    k.Dispose = c.Tools.EventHandlers.createHandlers(k, { id: "Dispose" });
    var i =
      c.ValidationProcessor.CustomRuleFactory
        .EventScheduleSessionTimeValidationRule.Limits;
    k.init = f;
    k.validate = m;
    function m(r) {
      var p = r.sessionTimePeriod.fromTime,
        q = r.sessionTimePeriod.untilTime,
        o = r.sessionTimePeriod.daysDuration;
      if (p === null) {
        return q === null;
      }
      if (typeof o != "number" || p < i.MinTime || p > i.MaxTime) {
        return false;
      }
      if (q != null && (q < i.MinTime || q > i.MaxTime)) {
        return false;
      }
      if (o < i.MinDaysDuration || o > i.MaxDaysDuration) {
        return false;
      }
      return q == null || p <= q || o > i.MinDaysDuration;
    }
    function f() {
      j.Dispose.addHandler(e);
    }
    function e() {
      k.Dispose.fireHandlers();
      j.Dispose.removeHandler(e);
      n = null;
      j = null;
      i = null;
      k.RenderComplete = null;
      k.Dispose = null;
    }
  }
})(window, WA);
(function (d, c, b) {
  if (
    !c.ValidationProcessor.CustomRuleFactory.EventScheduleWeekDaysValidationRule
  ) {
    c.ValidationProcessor.CustomRuleFactory.EventScheduleWeekDaysValidationRule = a;
    c.ValidationProcessor.CustomRuleFactory.EventScheduleWeekDaysValidationRule.TypeName =
      "WA.ValidationProcessor.CustomRuleFactory.EventScheduleWeekDaysValidationRule";
  }
  function a(h, g) {
    g = g || {};
    var j = this,
      k =
        c.ValidationProcessor.CustomRuleFactory
          .EventScheduleWeekDaysValidationRule.TypeName,
      m = h,
      i = g.parentComponent;
    j.toString = function () {
      return k;
    };
    j.Dispose = c.Tools.EventHandlers.createHandlers(j, { id: "Dispose" });
    j.init = f;
    j.validate = l;
    function l(n) {
      return (
        n.periodicityType != c.UI.Scheduler.PeriodicityType.Weekly ||
        (c.getTypeString(n.daysBitMap) == "number" && n.daysBitMap !== 0)
      );
    }
    function f() {
      i.Dispose.addHandler(e);
    }
    function e() {
      j.Dispose.fireHandlers();
      i.Dispose.removeHandler(e);
      m = null;
      i = null;
      j.RenderComplete = null;
      j.Dispose = null;
    }
  }
})(window, WA);
(function (d, c, b) {
  if (!c.ValidationProcessor.CustomRuleFactory.ExportFieldsRequired) {
    c.ValidationProcessor.CustomRuleFactory.ExportFieldsRequired = a;
  }
  function a(h, g) {
    g = g || {};
    var j = this,
      k = "WA.ValidationProcessor.CustomRuleFactory.ExportFieldsRequired",
      m = h,
      i = g.parentComponent;
    j.toString = function () {
      return k;
    };
    j.Dispose = c.Tools.EventHandlers.createHandlers(j, { id: "Dispose" });
    j.init = f;
    j.validate = l;
    function l(n) {
      return n.isExportAllFields || n.fields.length;
    }
    function f() {
      i.Dispose.addHandler(e);
    }
    function e() {
      j.Dispose.fireHandlers();
      i.Dispose.removeHandler(e);
      m = null;
      i = null;
      j.RenderComplete = null;
      j.Dispose = null;
    }
  }
})(window, WA);
(function (d, c, b) {
  if (!c.ValidationProcessor.CustomRuleFactory.ExportXlsFormatRestriction) {
    c.ValidationProcessor.CustomRuleFactory.ExportXlsFormatRestriction = a;
  }
  function a(h, g) {
    g = g || {};
    var j = this,
      k = "WA.ValidationProcessor.CustomRuleFactory.ExportXlsFormatRestriction",
      m = h,
      i = g.parentComponent;
    j.toString = function () {
      return k;
    };
    j.Dispose = c.Tools.EventHandlers.createHandlers(j, { id: "Dispose" });
    j.init = f;
    j.validate = l;
    function l(n) {
      if (
        c.Admin.ExportDataFormatTypeCode[n.format] !=
        c.Admin.ExportDataFormatType.Xls
      ) {
        return true;
      }
      return n.isExportAllFields
        ? n.totalFieldsCount <= 256
        : n.fields.length <= 256;
    }
    function f() {
      i.Dispose.addHandler(e);
    }
    function e() {
      j.Dispose.fireHandlers();
      i.Dispose.removeHandler(e);
      m = null;
      i = null;
      j.RenderComplete = null;
      j.Dispose = null;
    }
  }
})(window, WA);
(function (d, c, b) {
  if (!c.ValidationProcessor.CustomRuleFactory.RecipientsModelValidationRule) {
    c.ValidationProcessor.CustomRuleFactory.RecipientsModelValidationRule = a;
  }
  function a(h, g) {
    g = g || {};
    var j = this,
      k =
        "WA.ValidationProcessor.CustomRuleFactory.RecipientsModelValidationRule",
      m = h,
      i = g.parentComponent;
    j.toString = function () {
      return k;
    };
    j.Dispose = c.Tools.EventHandlers.createHandlers(j, { id: "Dispose" });
    j.init = f;
    j.validate = l;
    function l(o) {
      var n = o;
      if (n.recipients.allContacts) {
        return true;
      }
      if (
        n.recipients.selectContacts &&
        !n.recipients.members &&
        !n.recipients.groups &&
        !n.recipients.contactSavedSearches &&
        !n.recipients.memberSavedSearches &&
        !n.recipients.allDonors &&
        !n.recipients.registrantsFromPast &&
        !n.recipients.allOtherContacts
      ) {
        return false;
      }
      if (
        n.recipients.members &&
        !n.recipients.levels.AllSelected &&
        n.recipients.levels.items.length == 0
      ) {
        return false;
      }
      if (
        n.recipients.groups &&
        !n.recipients.groupsList.allSelected &&
        n.recipients.groupsList.items.length == 0
      ) {
        return false;
      }
      if (
        n.recipients.contactSavedSearches &&
        n.recipients.contactSavedSearchesList.items.length == 0
      ) {
        return false;
      }
      if (
        n.recipients.memberSavedSearches &&
        n.recipients.memberSavedSearchesList.items.length == 0
      ) {
        return false;
      }
      return true;
    }
    function f() {
      i.Dispose.addHandler(e);
    }
    function e() {
      j.Dispose.fireHandlers();
      i.Dispose.removeHandler(e);
      m = null;
      i = null;
      j.RenderComplete = null;
      j.Dispose = null;
    }
  }
})(window, WA);
(function () {
  function b() {
    if (WA && WA.Browser) {
      if (WA.Browser.isWebKit && !WA.ClientPerformanceChecker) {
        WA.ClientPerformanceChecker = new a();
      }
    } else {
      setTimeout(b, 100);
    }
  }
  b();
  function a() {
    var t = false,
      j = WA.topWindow.bonaPage_ClientPerformanceCheckerConfig || {
        enabled: false,
      },
      o,
      k,
      y,
      x,
      c,
      q = [],
      f = null,
      u = false,
      h = 0,
      p = {},
      i = [
        "duration",
        "fetchStart",
        "startTime",
        "domainLookupStart",
        "domainLookupEnd",
        "connectStart",
        "connectEnd",
        "redirectStart",
        "redirectEnd",
        "requestStart",
        "responseStart",
        "responseEnd",
        "secureConnectionStart",
        "name",
        "entryType",
        "initiatorType",
      ],
      s = {
        unknown: 0,
        link: 1,
        script: 2,
        img: 3,
        iframe: 4,
        xmlhttprequest: 5,
      };
    if (j.enabled) {
      r();
    }
    function r() {
      if (WA && WA.Ajax && WA.jq$) {
        window.performance.webkitSetResourceTimingBufferSize(1737);
        WA.addPageStateHandler(BonaPage.PAGE_LOADED, w);
        A();
        WA.addPageStateHandler(BonaPage.PAGE_UNLOADED, n);
      } else {
        setTimeout(r, 37);
      }
    }
    function w() {
      g();
      u = true;
      if (y) {
        e();
      } else {
        m();
      }
    }
    function A() {
      if (f) {
        clearTimeout(f);
      }
      f = setTimeout(v, j.checkNewRecordsInterval);
    }
    function g() {
      if (f) {
        clearTimeout(f);
      }
    }
    function v() {
      g();
      if (y) {
        e();
      } else {
        m();
      }
    }
    function m() {
      var B = new Date();
      o = window.performance.getEntries();
      k = o.length;
      if (k > 0) {
        d();
        y =
          j.currentEnvironment +
          "_" +
          bonaPage_AccountId +
          "_" +
          bonaPage_UserId +
          "_" +
          B.getTime();
        x = {
          packageId: y,
          currentEnvironment: j.currentEnvironment,
          accountId: bonaPage_AccountId,
          userId: bonaPage_UserId,
          clientTime: B.getTime() + B.getTimezoneOffset() * 60000,
          isLoaded: u,
          items: q,
        };
        z(true);
      }
    }
    function l() {
      var B = new Date();
      d();
      if (q.length > 0) {
        c = {
          packageId: y,
          clientTime: B.getTime() + B.getTimezoneOffset() * 60000,
          isLoaded: u,
          items: q,
        };
        z(false);
      } else {
        A();
      }
    }
    function e() {
      o = window.performance.getEntries();
      if (o.length > k) {
        k = o.length;
        l();
      } else {
        A();
      }
    }
    function d() {
      var F,
        I,
        B,
        G,
        K,
        E = [],
        C,
        H = 0,
        D = j.firstRequestURL.toLowerCase(),
        J = j.otherRequestURL.toLowerCase();
      q.splice(0, q.length);
      G = 0;
      for (F = 0; F < o.length; F++) {
        B = o[F];
        if (B.name.toLowerCase() === D || B.name.toLowerCase() === J) {
          H++;
          continue;
        }
        E.splice(0, E.length);
        E.splice(
          0,
          0,
          B.connectEnd,
          B.connectStart,
          B.domainLookupEnd,
          B.domainLookupStart,
          B.duration,
          B.entryType,
          B.fetchStart,
          B.initiatorType,
          B.name,
          B.redirectEnd,
          B.redirectStart,
          B.requestStart,
          B.responseStart,
          B.secureConnectionStart,
          B.startTime
        );
        C = E.join("|");
        if (B.responseEnd in p) {
          if (C in p[B.responseEnd]) {
            continue;
          } else {
            p[B.responseEnd][C] = true;
          }
        } else {
          p[B.responseEnd] = {};
          p[B.responseEnd][C] = true;
        }
        q[G] = {};
        for (I = 0; I < i.length; I++) {
          if (o[F][i[I]] != null) {
            if (i[I] === "name") {
              K = o[F][i[I]].match(
                /^(https?):\/\/([^\/\s]+)?\/?([^?\s]+)?\??(.*)/i
              );
              if (K && K.length > 1) {
                q[G]["IsSSL"] = K[1] && K[1].toLowerCase() === "https";
                q[G]["Domain"] = K[2] ? K[2].toLowerCase() : "";
                q[G]["Prms"] =
                  K[4] && q[G]["Domain"].indexOf(".google") === -1
                    ? K[4].replace(/(?:^5\.\d[^&]*?(?:&|$)|&?_=\d+)/gi, "")
                    : "";
              }
              K = K[3] || "";
            } else {
              if (i[I] === "initiatorType") {
                K = s[o[F][i[I]]] || 0;
              } else {
                if (i[I] === "entryType") {
                  continue;
                } else {
                  if (!isNaN(o[F][i[I]])) {
                    K = o[F][i[I]].toString().replace(/\..*$/, "");
                  } else {
                    K = o[F][i[I]];
                  }
                }
              }
            }
          } else {
            K = -1;
          }
          q[G][i[I].substr(0, 1).toUpperCase() + i[I].substr(1)] = K;
        }
        G++;
      }
    }
    function z(B) {
      var D = B ? j.firstRequestURL : j.otherRequestURL,
        C = B ? x : c;
      h += C.items.length;
      WA.Ajax({
        url: D,
        data: JSON.stringify(C),
        dataType: "json",
        type: "POST",
        beforeSend: function () {},
        success: function (E) {
          if (!t) {
            A();
          }
        },
        error: function (E) {
          if (!t) {
            A();
          }
        },
      });
    }
    function n() {
      t = true;
      g();
      o = null;
      x = null;
      c = null;
      p = null;
      q = null;
      f = null;
      i = null;
      s = null;
    }
  }
})();
(function (window, WA) {
  if (!window.globalUtils) {
    window.globalUtils = {};
    WA.globalUtils = window.globalUtils;
  }
  var globalUtils = WA.globalUtils;
  var _UdDomainNames = [
    "NET",
    "COM",
    "BIZ",
    "ORG",
    "EDU",
    "MIL",
    "GOV",
    "PRO",
    "INT",
    "COOP",
    "NAME",
    "INFO",
    "AERO",
    "ARPA",
    "TRAVEL",
    "MUSEUM",
    "US",
    "CA",
    "UK",
    "GB",
    "FR",
    "RU",
    "AC",
    "AD",
    "AE",
    "AF",
    "AG",
    "AI",
    "AL",
    "AM",
    "AN",
    "AO",
    "AQ",
    "AR",
    "AS",
    "AT",
    "AU",
    "AW",
    "AZ",
    "BA",
    "BB",
    "BD",
    "BE",
    "BF",
    "BG",
    "BH",
    "BI",
    "BJ",
    "BM",
    "BN",
    "BO",
    "BR",
    "BS",
    "BT",
    "BV",
    "BW",
    "BY",
    "BZ",
    "CC",
    "CD",
    "CF",
    "CG",
    "CH",
    "CI",
    "CK",
    "CL",
    "CM",
    "CN",
    "CO",
    "CR",
    "CU",
    "CV",
    "CX",
    "CY",
    "CZ",
    "DE",
    "DJ",
    "DK",
    "DM",
    "DO",
    "DZ",
    "EC",
    "EE",
    "EG",
    "ER",
    "ES",
    "ET",
    "EU",
    "FI",
    "FJ",
    "FK",
    "FM",
    "FO",
    "GA",
    "GD",
    "GE",
    "GF",
    "GG",
    "GH",
    "GI",
    "GL",
    "GM",
    "GN",
    "GP",
    "GQ",
    "GR",
    "GS",
    "GT",
    "GU",
    "GW",
    "GY",
    "HK",
    "HM",
    "HN",
    "HR",
    "HT",
    "HU",
    "ID",
    "IE",
    "IL",
    "IM",
    "IN",
    "IO",
    "IQ",
    "IR",
    "IS",
    "IT",
    "JE",
    "JM",
    "JO",
    "JP",
    "KE",
    "KG",
    "KH",
    "KI",
    "KM",
    "KN",
    "KR",
    "KW",
    "KY",
    "KZ",
    "LA",
    "LB",
    "LC",
    "LI",
    "LK",
    "LR",
    "LS",
    "LT",
    "LU",
    "LV",
    "LY",
    "MA",
    "MC",
    "MD",
    "MG",
    "MH",
    "MK",
    "ML",
    "MM",
    "MN",
    "MO",
    "MP",
    "MQ",
    "MR",
    "MS",
    "MT",
    "MU",
    "MV",
    "MW",
    "MX",
    "MY",
    "MZ",
    "NA",
    "NC",
    "NE",
    "NF",
    "NG",
    "NI",
    "NL",
    "NO",
    "NP",
    "NR",
    "NU",
    "NZ",
    "OM",
    "PA",
    "PE",
    "PF",
    "PG",
    "PH",
    "PK",
    "PL",
    "PM",
    "PN",
    "PR",
    "PS",
    "PT",
    "PW",
    "PY",
    "QA",
    "RE",
    "RO",
    "RW",
    "SA",
    "SB",
    "SC",
    "SD",
    "SE",
    "SG",
    "SH",
    "SI",
    "SJ",
    "SK",
    "SL",
    "SM",
    "SN",
    "SO",
    "SR",
    "ST",
    "SU",
    "SV",
    "SY",
    "SZ",
    "TC",
    "TD",
    "TF",
    "TG",
    "TH",
    "TJ",
    "TK",
    "TL",
    "TM",
    "TN",
    "TO",
    "TP",
    "TR",
    "TT",
    "TV",
    "TW",
    "TZ",
    "UA",
    "UG",
    "UM",
    "UY",
    "UZ",
    "VA",
    "VC",
    "VE",
    "VG",
    "VI",
    "VN",
    "VU",
    "WF",
    "WS",
    "YE",
    "YT",
    "YU",
    "ZA",
    "ZM",
    "ZW",
  ];
  function _udTrim(s) {
    var m = s.match(/^\s*(\S+(\s+\S+)*)\s*$/);
    return m == null ? "" : m[1];
  }
  globalUtils.ValidateEmailFormat = function (source, args) {
    var s, m, i;
    args.IsValid = true;
    s = _udTrim(args.Value);
    if (s == "") {
      return;
    }
    m = s.match(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/);
    if (m != null && m.length > 0) {
      if (args.ValidateDomains == null || !args.ValidateDomains) {
        return;
      }
      s = s.substr(s.lastIndexOf(".") + 1).toUpperCase();
      for (i = 0; i < _UdDomainNames.length; i++) {
        if (s == _UdDomainNames[i]) {
          return;
        }
      }
    }
    args.IsValid = false;
  };
  globalUtils.validateCheckBoxList = function (validator) {
    var list = WA.$(
      validator.controltovalidate,
      WA.topWindow.contentarea || WA.topWindow
    );
    if (!list) {
      throw new ReferenceError("Unable to find list element.");
    }
    var items = list.getElementsByTagName("INPUT");
    if (items != null) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].checked) {
          return true;
        }
      }
      return false;
    }
    return true;
  };
  globalUtils.$ = function (id) {
    return document.all ? document.all[id] : document.getElementById(id);
  };
  globalUtils.handleCancalClick = function (myValidationGroup) {
    var w = WA.topWindow.contentarea;
    if (!w.DataChangeWatcher.confirmIfDataChanged()) {
      globalUtils.updateValidators(myValidationGroup);
      return false;
    } else {
      w.Page_IsValid = true;
      w.Page_BlockSubmit = false;
      return true;
    }
  };
  globalUtils.updateValidators = function (myValidationGroup) {
    var w = WA.topWindow.contentarea;
    for (var i = 0; i < w.Page_Validators.length; i++) {
      w.ValidatorValidate(w.Page_Validators[i], myValidationGroup, null);
    }
  };
  globalUtils.stopEventPropogation = function (e) {
    if (document.all) {
      e.cancelBubble = true;
    } else {
      e.stopPropagation();
    }
  };
  globalUtils.addHandler = function (obj, event, handler) {
    if (typeof obj.addEventListener != "undefined") {
      obj.addEventListener(event, handler, false);
    } else {
      if (typeof obj.attachEvent != "undefined") {
        obj.attachEvent("on" + event, handler);
      } else {
        var hProp = "_handlerStack_" + event;
        var eProp = "on" + event;
        if (typeof obj[hProp] == "undefined") {
          obj[hProp] = [];
          if (typeof obj[eProp] != "undefined") {
            obj[hProp].push(obj[eProp]);
          }
          obj[eProp] = function (e) {
            var ret = true;
            for (var i = 0; ret != false && i < obj[hProp].length; i++) {
              ret = obj[hProp][i](e);
            }
            return ret;
          };
        }
        obj[hProp].push(handler);
      }
    }
  };
  globalUtils.removeHandler = function (obj, event, handler) {
    if (typeof obj.removeEventListener != "undefined") {
      obj.removeEventListener(event, handler, false);
    } else {
      if (typeof obj.detachEvent != "undefined") {
        obj.detachEvent("on" + event, handler);
      } else {
        var hProp = "_handlerStack_" + event;
        if (typeof obj[hProp] != "undefined") {
          for (var i = 0; i < obj[hProp].length; i++) {
            if (obj[hProp][i] == handler) {
              obj[hProp].splice(i, 1);
              return;
            }
          }
        }
      }
    }
  };
  var scrollBarWidth = null;
  globalUtils.getScrollBarWidth = function () {
    if (!scrollBarWidth) {
      var objDiv = document.createElement("DIV"),
        objDivOffsetWidth,
        objDivClientWidth;
      if (objDiv) {
        objDiv.style.position = "absolute";
        objDiv.style.left = objDiv.style.top = "-1000px";
        objDiv.style.width = objDiv.style.height = "100px";
        objDiv.style.overflow = "scroll";
        objDiv.style.visibility = "hidden";
        if (document.body) {
          document.body.appendChild(objDiv);
          objDivOffsetWidth = objDiv.offsetWidth;
          objDivClientWidth = objDiv.clientWidth;
          if (objDiv && objDivOffsetWidth && objDivClientWidth) {
            scrollBarWidth = objDivOffsetWidth - objDivClientWidth;
          }
        }
      }
    }
    if (objDiv) {
      objDiv.parentNode.removeChild(objDiv);
    }
    return scrollBarWidth;
  };
  globalUtils.docForSize = null;
  globalUtils.getDocForSize = function () {
    if (globalUtils.docForSize == null) {
      globalUtils.docForSize = document.getElementsByTagName("HTML");
      if (globalUtils.docForSize && globalUtils.docForSize.length) {
        globalUtils.docForSize = globalUtils.docForSize[0];
      } else {
        globalUtils.docForSize = document.body;
      }
    }
    return globalUtils.docForSize;
  };
  globalUtils.getVisibleClientWidth = function () {
    var docForSize = globalUtils.getDocForSize();
    return docForSize.clientWidth > 0
      ? docForSize.clientWidth
      : document.body.clientWidth;
  };
  globalUtils.getVisibleClientHeight = function () {
    var docForSize = globalUtils.getDocForSize();
    return docForSize.clientHeight > 0
      ? docForSize.clientHeight
      : document.body.clientHeight;
  };
  globalUtils.scrollIntoView = function (container, target) {
    if (typeof container == "window") {
      globalUtils.getXY(target);
      container.scrollTo(0, target.Y + 20);
    } else {
      globalUtils.getXY(container);
      globalUtils.getXY(target);
      container.scrollTop = target.Y - container.Y;
    }
  };
  globalUtils.getTextareaLength = function (obj) {
    var value = obj.value;
    value = value.replace(/\r\n/g, "\n");
    value = value.replace(/\n/g, "\r\n");
    return value.length;
  };
  globalUtils.getXY = function (element) {
    var x = element.offsetLeft || 0,
      y = element.offsetTop || 0,
      parentElement = element.offsetParent;
    while (parentElement) {
      x += parentElement.offsetLeft;
      y += parentElement.offsetTop;
      parentElement = parentElement.offsetParent;
    }
    element.X = x;
    element.Y = y;
    return { x: x, y: y };
  };
  globalUtils.getAbsoluteXY = function (obj) {
    var parTemp;
    obj.X = 0;
    obj.Y = 0;
    if (obj.parentNode) {
      parTemp = obj;
      while (parTemp.nodeName.toUpperCase() != "BODY") {
        parTemp = parTemp.parentNode;
        var position = WA.Style.getElementStyle(
          parTemp,
          "position"
        ).toLowerCase();
        if (position == "absolute" || position == "relative") {
          obj.X += parTemp.offsetLeft;
          obj.Y += parTemp.offsetTop;
        }
      }
    }
    obj.X += obj.offsetLeft;
    obj.Y += obj.offsetTop;
    return { x: obj.X, y: obj.Y };
  };
  globalUtils.validateIntType = function (source, args) {
    var data = args.Value;
    args.IsValid = true;
    if (data.charAt(0) == "-") {
      args.IsValid = false;
    }
    if (args.IsValid && isNaN(data)) {
      args.IsValid = false;
    }
  };
  globalUtils.validateIntTypePositive = function (source, args) {
    globalUtils.validateIntType(source, args);
    if (!args.IsValid) {
      return;
    }
    var data = args.Value;
    args.IsValid = data > 0;
  };
  globalUtils.collectContainerDataState = function (containerId, w) {
    w = w || WA.topWindow.contentarea;
    var control = w.document.getElementById(containerId),
      i,
      len;
    if (!control) {
      return "";
    }
    var state = "";
    var inputs = control.getElementsByTagName("INPUT");
    for (i = 0, len = inputs.length; i < len; i++) {
      var input = inputs[i];
      if (
        (input.type == "checkbox" || input.type == "radio") &&
        input.checked
      ) {
        state += input.value;
      } else {
        if (input.type == "text") {
          state += input.value;
        }
      }
    }
    var textAreas = control.getElementsByTagName("TEXTAREA");
    for (i = 0, len = textAreas.length; i < len; i++) {
      state += textAreas[i].value;
    }
    var selects = control.getElementsByTagName("SELECT");
    for (i = 0, len = selects.length; i < len; i++) {
      state += selects[i].selectedIndex;
    }
    return state;
  };
  globalUtils.validateStateChanged = function (args, containerId, w) {
    w = w || WA.topWindow.contentarea;
    var control = w.document.getElementById(containerId);
    if (!control) {
      return "";
    }
    var state = globalUtils.collectContainerDataState(containerId);
    w.DataChangeWatcher.changeValidatorCustom(containerId, state, args);
  };
  globalUtils.correctDateTextBoxValidation = function (dateTextBoxId) {
    setTimeout(function () {
      doCorrectDateTextBoxValidation(dateTextBoxId);
    }, 50);
  };
  function moveDateTextBoxSysCodeToBegin(on, sysCode) {
    var ix1 = on.indexOf("function()");
    if (ix1 == 0) {
      on = "function(event)" + on.substr(10);
    }
    ix1 = on.indexOf("{");
    var ix2 = on.indexOf(sysCode);
    return ix1 < 0 || ix2 <= ix1
      ? on
      : on.substr(0, ix1 + 1) +
          sysCode +
          on.substr(ix1 + 1, ix2 - ix1 - 1) +
          on.substr(ix2 + sysCode.length);
  }
  function doCorrectDateTextBoxValidation(dateTextBoxId) {
    var dateTextBox = document.getElementById(dateTextBoxId);
    if (!dateTextBox) {
      return;
    }
    var on = moveDateTextBoxSysCodeToBegin(
      "" + dateTextBox.onchange,
      "ValidatorOnChange(event);"
    );
    eval("document.getElementById('" + dateTextBoxId + "').onchange = " + on);
    on = moveDateTextBoxSysCodeToBegin(
      "" + dateTextBox.onkeypress,
      "event = event || window.event; if (!ValidatedTextBoxOnKeyPress(event)) { event.cancelBubble = true; if (event.stopPropagation) event.stopPropagation(); return false; }"
    );
    eval("document.getElementById('" + dateTextBoxId + "').onkeypress = " + on);
  }
  globalUtils.setWidgetModeFormTarget = function (form, target) {
    if (!WA.isWidgetMode) {
      return;
    }
    WA.clearThrottle(setFormTarget);
    form.target = target;
    WA.throttle(setFormTarget, 500);
    function setFormTarget() {
      try {
        form.target = "_self";
      } catch (e) {}
    }
  };
  globalUtils.nop = function () {};
})(window, WA);
window.BonaDialogHandler = function (l) {
  var j = this;
  if (l.name.indexOf(".") >= 0) {
    throw new Error("Name has invalid chracters!");
  }
  j.settings = l;
  j.objects = { bonaDialog: null };
  j.onDialogOpen = l.onDialogOpen || null;
  j.onDialogInit = l.onDialogInit || null;
  j.afterDialogInit = l.afterDialogInit || null;
  j.afterDialogOpen = l.afterDialogOpen || null;
  j.onDialogOk = l.onDialogOk || null;
  j.onDialogClose = l.onDialogClose || null;
  j.initialize = function (m) {
    j.settings = WA.Object.merge(j.settings, m);
    e();
    j.initialized = true;
  };
  j.dispose = function () {
    if (!j.initialized) {
      return;
    }
    j.initialized = false;
  };
  j.open = h;
  j.close = b;
  j.generateReloadUrl = l.generateReloadUrl || d;
  j.generateDirectUrl = l.generateDirectUrl || c;
  function h(o, m, n) {
    if (!j.initialized) {
      j.initialize(m);
    }
    if (!j.objects.bonaDialog) {
      setTimeout(function () {
        h(o, m, n);
      }, 100);
      return;
    }
    o = i(n, o);
    a(m);
    k(j.onDialogOpen, {
      windowProperties: o,
      callBackParameters: m,
      directAccessParameters: n,
    });
    j.objects.bonaDialog.parameters = n;
    window.setTimeout(function () {
      j.objects.bonaDialog.showDialog(o);
      k(j.afterDialogOpen, {
        windowProperties: o,
        callBackParameters: m,
        directAccessParameters: n,
      });
    }, 100);
  }
  function b() {
    if (!j.initialized) {
      return;
    }
    j.objects.bonaDialog.closeWindow();
  }
  function g() {
    if (
      j.onDialogOk &&
      j.onDialogOk.call(j, j.objects.bonaDialog.getReturnedParameters()) ==
        false
    ) {
      return;
    }
    b();
  }
  function f() {
    if (
      j.onDialogClose &&
      j.onDialogClose.call(j, j.objects.bonaDialog.getReturnedParameters()) ==
        false
    ) {
      return;
    }
    b();
  }
  function a(m) {
    for (var n in m) {
      j.objects.bonaDialog.setReturnedParameters(n, m[n]);
    }
  }
  function i(m, n) {
    n = n || {};
    var o = n.windowSize;
    n.winNewWidth = o && o.width;
    n.winNewHeight = o && o.height;
    n.newReloadUrl =
      n.newReloadUrl ||
      j.generateReloadUrl.call(j, WA.Object.merge(j.settings, m));
    n.pCallBackSaveNew = n.pCallBackSaveNew || g;
    n.pCallBackCloseNew = n.pCallBackCloseNew || f;
    return n;
  }
  function d(m) {
    if (!j.settings.dialogParameters.reloadURLTemplate) {
      return "";
    }
    return WA.String.formatNamed(
      j.settings.dialogParameters.reloadURLTemplate,
      m
    );
  }
  function c(m) {
    if (!j.settings.dialogParameters.directURLTemplate) {
      return "";
    }
    return WA.String.formatNamed(
      j.settings.dialogParameters.directURLTemplate,
      m
    );
  }
  function e() {
    if (
      typeof BonaPage.topWindow.BonaDialog == "undefined" ||
      !BonaPage.topWindow.BonaDialog
    ) {
      setTimeout(e, 100);
      return;
    }
    if (!j.settings.dialogParameters.directURL) {
      j.settings.dialogParameters.directURL = j.generateDirectUrl.call(
        j,
        j.settings
      );
    }
    if (!j.settings.dialogParameters.reloadURL) {
      j.settings.dialogParameters.reloadURL = j.generateReloadUrl.call(
        j,
        j.settings
      );
    }
    k(j.onDialogInit);
    j.objects.bonaDialog = BonaPage.topWindow.BonaDialog.createInnerWindow(
      j.settings.name,
      j.settings.dialogParameters
    );
    k(j.afterDialogInit);
  }
  function k(n) {
    if (n) {
      var m = [];
      for (var o = 0; o < arguments.length; o++) {
        m.push(arguments);
      }
      n.apply(j, m.length > 1 ? m.splice(0, 1) : []);
    }
  }
};
(function (f, a) {
  a.implementBonaPage = c;
  a.implementBonaPageProperties = e;
  a.implementBonaPageMethods = d;
  function c(g) {
    if (!g.WA) {
      g.WA = WA;
    }
    if (!g.BonaPage) {
      g.BonaPage = {};
      g.BonaPage.isObjInited = false;
      g.BonaPage.isObjValid = false;
      e(g);
      d(g);
      g.BonaPage.isObjInited = true;
      g.BonaPage.setPageState(a.PAGE_LOADING);
    }
  }
  function e(h) {
    var g = h.BonaPage;
    h.globalUtils = f.globalUtils;
    h.browserInfo = f.browserInfo;
    g.topWindow = a.topWindow;
    g.Browser = a.Browser;
    g.isWidgetMode = a.isWidgetMode;
    g.Utils = a.Utils;
    g.PAGE_LOADING = a.PAGE_LOADING;
    g.PAGE_LOADED = a.PAGE_LOADED;
    g.PAGE_LOADEDORTIMEOUT = a.PAGE_LOADEDORTIMEOUT;
    g.PAGE_PARSING = a.PAGE_PARSING;
    g.PAGE_PARSED = a.PAGE_PARSED;
    g.PAGE_UNLOADING = a.PAGE_UNLOADING;
    g.PAGE_UNLOADED = a.PAGE_UNLOADED;
    g.UPDATEPANEL_UNDEFINED = a.UPDATEPANEL_UNDEFINED;
    g.UPDATEPANEL_LOADING = a.UPDATEPANEL_LOADING;
    g.UPDATEPANEL_LOADED = a.UPDATEPANEL_LOADED;
    g.HANDLERTYPE_ONCE = a.HANDLERTYPE_ONCE;
    g.HANDLERTYPE_ALWAYS = a.HANDLERTYPE_ALWAYS;
  }
  function d(h) {
    var g = h.BonaPage;
    g.implementBonaPage = c;
    g.$ = function () {
      b(this, "$", arguments, h);
    };
    g.$$ = function () {
      b(this, "$$", arguments, h);
    };
    g.addHandler = function () {
      b(this, "addHandler", arguments, h);
    };
    g.removeHandler = function () {
      b(this, "removeHandler", arguments, h);
    };
    g.decodeHtml = function () {
      return b(this, "decodeHtml", arguments, h);
    };
    g.encodeHtml = function () {
      return b(this, "encodeHtml", arguments, h);
    };
    g.setPageState = function () {
      b(this, "setPageState", arguments, h);
    };
    g.addPageStateHandler = function () {
      b(this, "addPageStateHandler", arguments, h);
    };
    g.runPageStateHandlers = function () {
      b(this, "runPageStateHandlers", arguments, h);
    };
    g.setPageStateLoaded = function () {
      b(this, "setPageStateLoaded", arguments, h);
    };
    g.setPageStateUnloading = function () {
      b(this, "setPageStateUnloading", arguments, h);
    };
    g.setPageStateUnloaded = function () {
      b(this, "setPageStateUnloaded", arguments, h);
    };
    g.getEvent = function () {
      return b(this, "getEvent", arguments, h);
    };
    g.getEventTarget = function () {
      return b(this, "getEventTarget", arguments, h);
    };
    h.TopCacheProvider = TopCacheProvider;
    h.CacheItem = CacheItem;
  }
  function b(j, i, h, k) {
    var g = h.length - 1;
    if (WA.getTypeString(h[g]) !== "object") {
      g = h.length++;
      h[g] = {};
    }
    if (!h[g].window) {
      h[g].window = k;
    }
    return a[i].apply(j, h);
  }
})(window, BonaPage);
(function (e) {
  if (!e.browserInfo) {
    e.browserInfo = {};
  }
  var d = navigator.userAgent;
  browserInfo.isMSIE = navigator.appName == "Microsoft Internet Explorer";
  browserInfo.isMSIE5 = browserInfo.isMSIE && d.indexOf("MSIE 5") != -1;
  browserInfo.isMSIE50 = browserInfo.isMSIE && d.indexOf("MSIE 5.0") != -1;
  browserInfo.isMSIE55 = browserInfo.isMSIE && d.indexOf("MSIE 5.5") != -1;
  browserInfo.isMSIE60 = browserInfo.isMSIE && d.indexOf("MSIE 6.0") != -1;
  browserInfo.isMSIE70 = browserInfo.isMSIE && d.indexOf("MSIE 7") != -1;
  browserInfo.isMSIE80 = browserInfo.isMSIE && d.indexOf("MSIE 8") != -1;
  browserInfo.isMSIE10 = navigator.appVersion.indexOf("MSIE 10") !== -1;
  browserInfo.isMSIE11 =
    d.indexOf("Trident") !== -1 && d.indexOf("rv:11") !== -1;
  browserInfo.isGecko = d.indexOf("Gecko") != -1;
  browserInfo.isSafari = d.indexOf("Safari") != -1;
  browserInfo.isOpera = d.indexOf("Opera") != -1;
  browserInfo.isWebKit =
    d.indexOf("WebKit") != -1 && e.devicePixelRatio ? true : false;
  browserInfo.isMac = d.indexOf("Mac") != -1;
  browserInfo.isFirefox = d.indexOf("Firefox") != -1;
  if (browserInfo.isWebKit) {
    /AppleWebKit\/(\S+)/.test(d);
    browserInfo.webKitVersion = parseFloat(RegExp.$1);
  }
  if (browserInfo.isFirefox) {
    var b = /Firefox\/(\d+)/;
    b.test(d);
    browserInfo.firefoxMajorVersion = RegExp.$1;
  }
  browserInfo.isNS7 = d.indexOf("Netscape/7") != -1;
  browserInfo.isNS71 = d.indexOf("Netscape/7.1") != -1;
  if (browserInfo.isOpera) {
    browserInfo.isMSIE = true;
    browserInfo.isGecko = false;
    browserInfo.isSafari = false;
  }
  browserInfo.isIE = browserInfo.isMSIE;
  browserInfo.isRealIE = browserInfo.isMSIE && !browserInfo.isOpera;
  browserInfo.execCommand = typeof document.execCommand != "undefined";
  browserInfo.clientCookiesEnabled = function () {
    var f;
    c("tcc", "tccv");
    f = a("tcc") == "tccv";
    c("tcc", "", new Date("1/1/2000").toGMTString());
    return f;
  };
  browserInfo.getBrowserCapabilitiesData = function () {
    var f;
    var h = true;
    var g;
    c("tcc", "tccv");
    f = a("tcc") == "tccv";
    c("tcc", "", new Date("1/1/2000").toGMTString());
    g =
      h &&
      (browserInfo.isMSIE80 ||
        browserInfo.isMSIE90 ||
        browserInfo.isMSIE10 ||
        browserInfo.isMSIE11 ||
        browserInfo.isMSIE12 ||
        browserInfo.isFirefox ||
        browserInfo.isWebKit) &&
      browserInfo.execCommand;
    return (
      (browserInfo.isMSIE60 ? "MSIE 6.0;" : "") +
      (browserInfo.isMSIE70 ? "MSIE 7.0;" : "") +
      (browserInfo.isMSIE80 ? "MSIE 8.0;" : "") +
      (browserInfo.isMSIE90 ? "MSIE 9.0;" : "") +
      (browserInfo.isMSIE10 ? "MSIE 10.0;" : "") +
      (browserInfo.isMSIE11 ? "MSIE 11.0;" : "") +
      (browserInfo.isWebKit ? "WebKit;" : "") +
      (browserInfo.isFirefox ? "Firefox;" : "") +
      (browserInfo.firefoxMajorVersion
        ? "FirefoxMajorVersion:" + browserInfo.firefoxMajorVersion + ";"
        : "") +
      (browserInfo.execCommand ? "Exec Command;" : "") +
      (f ? "Client Cookies Enabled;" : "") +
      (g ? "Platform Compatible;" : "") +
      (h ? "Javascript Enabled;" : "")
    );
  };
  function c(h, k, g, i, f, j) {
    document.cookie =
      h +
      "=" +
      escape(k) +
      (g ? "; expires=" + g : "") +
      (i ? "; path=" + i : "") +
      (f ? "; domain=" + f : "") +
      (j ? "; secure" : "");
  }
  function a(h) {
    var f = " " + document.cookie;
    var j = " " + h + "=";
    var k = null;
    var i = 0;
    var g = 0;
    if (f.length > 0) {
      i = f.indexOf(j);
      if (i != -1) {
        i += j.length;
        g = f.indexOf(";", i);
        if (g == -1) {
          g = f.length;
        }
        k = unescape(f.substring(i, g));
      }
    }
    return k;
  }
})(window);
(function (c, b) {
  if (!b.ExceptionHandler) {
    b.ExceptionHandler = new a();
  }
  function a() {
    c.onerror = d;
    function d(e, g, f) {
      if (b && b.AdminPanel) {
        b.AdminPanel.setGlobalError({ errorMessage: e, url: g, line: f });
      }
    }
  }
})(window, WA);
(function (d, c, b) {
  if (!c.MouseDownHandler) {
    c.MouseDownHandler = a;
  }
  function a(k, j) {
    j = j || {};
    var q = this,
      u = "WA.MouseDownHandler",
      v = k,
      p = j.parentComponent,
      g = j.elementId,
      f = j.element,
      h = j.handler,
      w = j.win || d,
      r = j.stopBubble === true,
      s = j.stopEvent === true;
    q.toString = function () {
      return u;
    };
    q.dipose = e;
    var l = false,
      m = c.Browser.isTouchEventsSupported;
    function t(x) {
      if (r) {
        c.stopEventBubbling(x);
      }
      if (s) {
        c.stopEvent(x);
      }
    }
    function o(x) {
      x = c.getEvent(x);
      t(x);
      if (
        x &&
        (x.pointerType === x.MSPOINTER_TYPE_MOUSE || x.pointerType == "mouse")
      ) {
        h(x);
      }
    }
    function n(x) {
      t(x);
      if (!m || !c.Browser.isIE) {
        h(x);
      }
    }
    function i() {
      p.Dispose.addHandler(e);
      if (!f) {
        f = c.$(g, w);
      }
      if (!f) {
        return;
      }
      if (m) {
        c.PointerHandlersHelper.stopTouchBubble(w);
        if (c.Browser.isIE) {
          c.addHandler(f, "pointerdown", o, { window: w });
        }
      }
      c.addHandler(f, "mousedown", n, { window: w });
    }
    function e() {
      if (l) {
        return;
      }
      c.removeHandler(f, "pointerdown", o, { window: w });
      c.removeHandler(f, "mousedown", n, { window: w });
      p.Dispose.removeHandler(e);
      v = null;
      p = null;
      f = null;
      h = null;
      w = null;
      q.RenderComplete = null;
      l = true;
    }
    i();
  }
})(window, WA);
(function (d, c, b) {
  if (!c.MouseUpHandler) {
    c.MouseUpHandler = a;
  }
  function a(k, j) {
    j = j || {};
    var q = this,
      u = "WA.MouseUpHandler",
      v = k,
      p = j.parentComponent,
      g = j.elementId,
      f = j.element,
      h = j.handler,
      w = j.win || d,
      r = j.stopBubble === true,
      s = j.stopEvent === true;
    q.toString = function () {
      return u;
    };
    q.dipose = e;
    var l = false,
      m = c.Browser.isTouchEventsSupported;
    function t(x) {
      if (r) {
        c.stopEventBubbling(x);
      }
      if (s) {
        c.stopEvent(x);
      }
    }
    function o(x) {
      x = c.getEvent(x);
      t(x);
      if (
        x &&
        (x.pointerType === x.MSPOINTER_TYPE_MOUSE || x.pointerType == "mouse")
      ) {
        h(x);
      }
    }
    function n(x) {
      t(x);
      if (!m || !c.Browser.isIE) {
        h(x);
      }
    }
    function i() {
      p.Dispose.addHandler(e);
      if (!f) {
        f = c.$(g, w);
      }
      if (!f) {
        return;
      }
      if (m) {
        c.PointerHandlersHelper.stopTouchBubble(w);
        if (c.Browser.isIE) {
          c.addHandler(f, "pointerup", o, { window: w });
        }
      }
      c.addHandler(f, "mouseup", n, { window: w });
    }
    function e() {
      if (l) {
        return;
      }
      c.removeHandler(f, "pointerup", o, { window: w });
      c.removeHandler(f, "mouseup", n, { window: w });
      p.Dispose.removeHandler(e);
      v = null;
      p = null;
      f = null;
      h = null;
      w = null;
      q.RenderComplete = null;
      l = true;
    }
    i();
  }
})(window, WA);
(function (d, c, b) {
  if (!c.PointerClickHandler) {
    c.PointerClickHandler = a;
    c.PointerClickHandler.ClickDistance = 10;
  }
  function a(m, l) {
    l = l || {};
    var u = this,
      B = "WA.PointerClickHandler",
      C = m,
      t = l.parentComponent,
      h = l.elementId,
      j = l.handler,
      D = l.win || d,
      y = l.stopBubble === true,
      z = l.stopEvent === true;
    u.toString = function () {
      return B;
    };
    u.dipose = f;
    var n = false,
      w,
      x,
      g,
      e = c.PointerClickHandler.ClickDistance,
      p = c.Browser.isTouchEventsSupported,
      o = false;
    function i(E) {
      if (n) {
        return;
      }
      E = c.getEvent(E);
      switch (E.type) {
        case "touchstart":
        case "MSPointerDown":
          s(E);
          break;
        case "touchmove":
        case "MSPointerMove":
          r(E);
          break;
        case "touchend":
        case "MSPointerUp":
        case "click":
          q(E);
          break;
      }
    }
    function s(E) {
      o = true;
      c.addHandler(g, "touchend", i, { window: D });
      c.addHandler(g, "pointerup", i, { window: D });
      c.addHandler(D.document, "touchmove", i, { window: D });
      c.addHandler(D.document, "pointermove", i, { window: D });
      if (E.touches) {
        w = E.touches[0].clientX;
        x = E.touches[0].clientY;
      } else {
        w = E.clientX;
        x = E.clientY;
      }
    }
    function r(E) {
      var F, G;
      if (E.touches) {
        F = E.touches[0].clientX;
        G = E.touches[0].clientY;
      } else {
        F = E.clientX;
        G = E.clientY;
      }
      if (Math.abs(F - w) > e || Math.abs(G - x) > e) {
        v();
      }
    }
    function A(E) {
      if (y) {
        c.stopEventBubbling(E);
      }
      if (z) {
        c.stopEvent(E);
      }
    }
    function q(E) {
      A(E);
      if (p) {
        v();
        if (c.Browser.isIE && E.type == "click" && o) {
          return;
        }
      }
      j(E);
    }
    function v() {
      c.removeHandler(g, "touchend", i, { window: D });
      c.removeHandler(g, "pointerup", i, { window: D });
      c.removeHandler(D.document, "touchmove", i, { window: D });
      c.removeHandler(D.document, "pointermove", i, { window: D });
    }
    function k() {
      t.Dispose.addHandler(f);
      g = c.$(h, D);
      if (!g) {
        return;
      }
      if (p) {
        c.PointerHandlersHelper.stopTouchBubble(D);
        c.addHandler(g, "touchstart", i, { window: D });
        c.addHandler(g, "pointerdown", i, { window: D });
      }
      c.addHandler(g, "click", i, { window: D });
    }
    function f() {
      if (n) {
        return;
      }
      if (p) {
        v();
        c.removeHandler(g, "touchstart", i, { window: D });
        c.removeHandler(g, "pointerdown", i, { window: D });
      }
      c.removeHandler(g, "click", i, { window: D });
      t.Dispose.removeHandler(f);
      C = null;
      t = null;
      g = null;
      j = null;
      D = null;
      u.RenderComplete = null;
      n = true;
    }
    k();
  }
})(window, WA);
(function (f, e, d) {
  if (!e.PointerHandlersHelper) {
    e.PointerHandlersHelper = {};
  }
  var a = e.PointerHandlersHelper,
    c = "WA.PointerHandlersHelper";
  a.toString = function () {
    return c;
  };
  a.stopTouchBubble = b;
  function b(g) {
    if (!e.Browser.isTouchEventsSupported) {
      return;
    }
    g = g || f;
    if (g.waTouchBubbleStopped) {
      return;
    }
    e.addHandler(g.document, "pointerdown", e.stopEventBubbling, { window: g });
    e.addHandler(g.document, "pointerup", e.stopEventBubbling, { window: g });
    g.waTouchBubbleStopped = true;
  }
})(window, WA);
window.CacheItem = function (a, b) {
  a = a ? a : null;
  b = b ? b : null;
  if (!a) {
    alert("cache provider required");
  }
  if (!b) {
    alert("key required");
  }
  this.Get = function () {
    return a.Retrive(b);
  };
  this.Set = function (c) {
    a.Store(b, c);
  };
  this.IsNull = function () {
    return this.Get() == null;
  };
  return this;
};
window.TopCacheProvider = function () {
  var a = BonaPage.topWindow;
  this.Clear = function (b) {
    if (!a.cache) {
      return;
    }
    if (!b) {
      a.cache = null;
      a.cache = {};
    } else {
      a.cache[b] = null;
    }
  };
  this.Store = function (b, c) {
    if (!a.cache) {
      a.cache = {};
    }
    a.cache[b] = c;
  };
  this.Contains = function (b) {
    return a.cache ? a.cache[b] : false;
  };
  this.Retrive = function (b) {
    return a.cache ? a.cache[b] : null;
  };
  return this;
};
/*
page: http://www.fintechjapan.org/
url: http://sf.wildapricot.org/WebUI/built5.9.2/scripts/shared/bonapagetop/bonapagetop-compiled.js
*/
