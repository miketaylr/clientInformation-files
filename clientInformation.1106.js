$(document).ready(function () {
  //Tooltip
  if ($(".courselst li a[title!='']").length > 0) {
    $(".courselst li a[title!='']").tooltip({ offset: [60, 120] });
  }
  if (!$.browser.msie) {
    if (!isApple()) {
      $(".prim")
        .not(".nav06")
        .hover(
          function () {
            $(".prim")
              .children(".subnav")
              .stop(true, true)
              .hide()
              .children(".subnav")
              .stop(true, true);
            $(this)
              .children(".subnav")
              .fadeIn()
              .children(".subnav")
              .fadeIn("slow");
          },
          function () {
            $(this)
              .children(".subnav")
              .hide()
              .children(".subnav")
              .fadeOut("slow");
          }
        );
    }
  }
  // NEWS & MAGAZINE
  /*
    Es kann vorkommen, dass in Listen nur Eintr?ge angezeigt werden sollen, die Entweder die Klasse "global" oder das Landesk?rzel als Klasse haben.
    Dar?ber hinaus soll es so sein, dass maximal 6 Eintr?ge angezeigt werden.
    Dabei haben Eintr?ge mit dem Landesk?rzel, d.h. Landes-spezifische Eintr?ge eine h?here Priorit?t als globale Eintr?ge.
    Im Umkehrschluss hei?t das, dass Alle Eintr?ge aus der Liste entfernt werden m?ssen die weder die Klasse "global" noch das Landesk?rzel als Klasse besitzen.
    Falls nach dem o.g. Vorgang die L?nge der Liste immer noch gr??er 6 (Maximale Anzahl) ist, so m?ssen wir solange "globale" Eintr?ge entfernen bis die Liste nur noch 6 Eintr?ge enth?lt. Da es nat?rlich auch vorkommen kann, dass die Liste auch nach dem entfernen der globalen Eintr?ge gr??er als 6 ist,
    entfernen wir auch landes-spezifische Eintr?ge so lange, bis unser Ziel erreicht ist. Dabei ist zu achten, dass immer der ?lteste Eintrag (d.h. das letzte Element in der Liste) entfernt wird.
    */
  function handleCountryDependendNews(selector) {
    selector.allOther.remove();

    var show = 12;
    var show_local =
      selector.language.length > show ? show : selector.language.length;
    var show_global = show_local < show ? show - show_local : 0;

    var result = {
      global: [],
      local: [],
    };

    for (var i = 0; i < show_global; i++) {
      result.global.push($(selector.global[i]));
    }

    for (var i = 0; i < show_local; i++) {
      result.local.push($(selector.language[i]));
    }

    result.global.reverse();
    result.local.reverse();

    selector.language.remove();
    selector.global.remove();

    $.each($(result.global), function () {
      selector.appender.prepend($(this));
    });
    $.each($(result.local), function () {
      selector.appender.prepend($(this));
    });

    /*
        var removed     = 0;
        var toRemove    = (toShow - selector.all.length) * -1;
        if(selector.all.length > toShow){
                            
            if(selector.language.length > toShow){
                $.each(selector.global, function(){
                    if(toRemove == removed) return false;
                    $(this).remove();
                    removed++;
                });
                $.each(selector.language, function(i){
                    if(toRemove == removed) return false;
                    $(selector.language.get(selector.language.length - (i+1))).remove();
                    removed++;
                });
            }else{
            
                $.each(selector.global, function(i){
                    if(toRemove == removed) return false;
                    //$(selector.global.get(selector.global.length - (i+1))).remove();
                    $(this).remove();
                    removed++;
                });
                
                var html_local ="";
                $.each(selector.language, function(){
                    html_local += "<div class=\"nt " + countryCode + "\">" + $(this).html() + "</div>";
                });
                
                var html_global ="";
                $.each($(".news").find("div.global"), function(){
                    html_global += "<div class=\"nt global\">" + $(this).html() + "</div>";
                });
                            
                $(".news .pLR10").html(html_local + html_global);
            }
        }
        $.each(selector.language, function(){
            $(this).parent().prepend($(this));
        });*/
  }

  var countryCode = $.cookie("krones_countryCode");
  if (countryCode == "" || countryCode == null) {
    var queryParams = getQueryParams();
    countryCode =
      queryParams.countryCode === "undefined" || queryParams.countryCode == ""
        ? "en"
        : queryParams.countryCode;
  }

  handleCountryDependendNews({
    all: $(".news").find("div." + countryCode + ", div.global"),
    language: $(".news").find("div." + countryCode),
    global: $(".news").find("div.global"),
    allOther: $(".news").find("div.nt:not(." + countryCode + "):not(.global)"),
    appender: $(".news .pLR10"),
  });
  /*handleCountryDependendNews({
        all :       $(".magazine").find("div."+countryCode+", div.global"),            
        language: $(".magazine").find("div."+countryCode),
        global:   $(".magazine").find("div.global"),
        allOther: $(".magazine").find("div.mt:not(."+countryCode+"):not(.global)"),
    });*/

  // MAGAZINE TEASER
  $(".magazine .mt").hide();
  // initial
  var iMT;
  var currentPageMT = 0;
  var pageSizeMT = 3;
  var maxPagesMT = 3;

  if ($(".magazine .mt").length < pageSizeMT) {
    $(".magazine #mtPrev").hide();
    $(".magazine #mtNext").hide();
  }
  $(".magazine #mtNext").bind("click", function () {
    if (currentPageMT == maxPagesMT) currentPageMT = 0;
    currentPageMT++;
    $(".magazine .mt").hide();
    if (currentPageMT == 0) currentPageMT = 1;
    for (iMT = 0; iMT < pageSizeMT; iMT++) {
      $(".magazine .mt")
        .eq((currentPageMT - 1) * pageSizeMT + iMT)
        .show();
    }
  });

  $(".magazine #mtPrev").bind("click", function () {
    if (currentPageMT == 1) currentPageMT = maxPagesMT + 1;
    currentPageMT--;
    $(".magazine .mt").hide();
    for (iMT = 0; iMT < pageSizeMT; iMT++) {
      $(".magazine .mt")
        .eq((currentPageMT - 1) * pageSizeMT + iMT)
        .show();
    }
  });
  $(".magazine #mtNext").trigger("click");

  // NEWS TEASER
  $(".news .nt").hide();
  // initial

  var iNT;
  var currentPageNT = 0;
  var pageSizeNT = 6;
  //var maxPages    = Math.round($(".news .nt").length / pageSize);
  var maxPagesNT = 2;

  if ($(".news .nt").length < pageSizeNT) {
    $(".news #ntPrev").hide();
    $(".news #ntNext").hide();
  }
  //$('.news .nt:lt(6)').show();
  $(".news #ntNext").bind("click", function () {
    if (currentPageNT == maxPagesNT) currentPageNT = 0;
    currentPageNT++;
    $(".news .nt").hide();
    if (currentPageNT == 0) currentPageNT = 1;
    for (iNT = 0; iNT < pageSizeNT; iNT++) {
      $(".news .nt")
        .eq((currentPageNT - 1) * pageSizeNT + iNT)
        .show();
    }
  });

  $(".news #ntPrev").bind("click", function () {
    if (currentPageNT == 1) currentPageNT = maxPagesNT + 1;
    currentPageNT--;
    $(".news .nt").hide();
    for (iNT = 0; iNT < pageSizeNT; iNT++) {
      $(".news .nt")
        .eq((currentPageNT - 1) * pageSizeNT + iNT)
        .show();
    }
  });
  $(".news #ntNext").trigger("click");
  // MAP TEASER
  $(".map .mapt").hide();
  // initial
  if ($(".map .mapt").length < 2) {
    $(".map .maptPrev").hide();
    $(".map .maptNext").hide();
  }
  $(".map .mapt:first").show();
  var indexMAPT = 1;
  var tempIframeSrc = $(".map .mapiframe:eq(0) span");
  $(".map .mapiframe:eq(0)").append(
    '<iframe width="450" height="160" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="' +
      tempIframeSrc.text() +
      '"></iframe>'
  );
  tempIframeSrc.remove();
  $(".map .maptNext").bind("click", function () {
    if (indexMAPT == $(".map .mapt").length) indexMAPT = 0;
    $(".map .mapt").hide();
    if ($(".map .mapiframe").eq(indexMAPT).find("iframe").length == 0) {
      var tempIframeSrc = $(".map .mapiframe").eq(indexMAPT).find("span");
      $(".map .mapiframe")
        .eq(indexMAPT)
        .append(
          '<iframe width="450" height="160" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="' +
            tempIframeSrc.text() +
            '"></iframe>'
        );
      tempIframeSrc.remove();
    }
    $(".map .mapt").eq(indexMAPT).show();
    indexMAPT++;
  });
  $(".map .maptPrev").bind("click", function () {
    if (indexMAPT == 1) indexMAPT = $(".map .mapt").length + 1;
    $(".map .mapt").hide();
    if (
      $(".map .mapiframe")
        .eq(indexMAPT - 2)
        .find("iframe").length == 0
    ) {
      var tempIframeSrc = $(".map .mapiframe")
        .eq(indexMAPT - 2)
        .find("span");
      $(".map .mapiframe")
        .eq(indexMAPT - 2)
        .append(
          '<iframe width="450" height="160" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="' +
            tempIframeSrc.text() +
            '"></iframe>'
        );
    }
    $(".map .mapt")
      .eq(indexMAPT - 2)
      .show();
    indexMAPT--;
  });
});
var BaiduMap = function (opts) {
  var CONFIG = this.CONFIG;

  this.coords = {
    x: opts.x,
    y: opts.y,
  };
  this.name = opts.name;
  this.text = opts.text;
  this.scaleFactor = opts.scaleFactor;
  this.container = opts.container;
  this.marker = {
    title: this.name,
    content: this.text,
    point: this.coords.x + "|" + this.coords.y,
    isOpen: 1,
    icon: { w: 21, h: 21, l: 46, t: 0, x: 6, lb: 5 },
  };

  this.mapObj = null;
  this.initialized = false;

  this.init = function () {
    this.map.create(this);
    this.map.setEvent(this);
    this.map.addControl(this);
    this.map.addMarker(this);
    this.initialized = true;
  };

  this.map = {
    create: function (instance) {
      instance.mapObj = new BMap.Map(instance.container);
      var point = new BMap.Point(instance.coords.x, instance.coords.y);
      instance.mapObj.centerAndZoom(point, instance.scaleFactor);
    },
    setEvent: function (instance) {
      instance.mapObj.enableDragging();
      instance.mapObj.enableScrollWheelZoom();
      instance.mapObj.enableDoubleClickZoom();
      instance.mapObj.enableKeyboard();
    },
    addControl: function (instance) {
      if (CONFIG.CONTROLS.ZOOM) {
        var ctrl_nav = new BMap.NavigationControl({
          anchor: BMAP_ANCHOR_TOP_LEFT,
          type: BMAP_NAVIGATION_CONTROL_LARGE,
        });
        instance.mapObj.addControl(ctrl_nav); // Zoom in, Out
      }
      if (CONFIG.CONTROLS.MINIMAP) {
        var ctrl_ove = new BMap.OverviewMapControl({
          anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
          isOpen: 1,
        });
        instance.mapObj.addControl(ctrl_ove);
      }
      if (CONFIG.CONTROLS.SCALE) {
        var ctrl_sca = new BMap.ScaleControl({
          anchor: BMAP_ANCHOR_BOTTOM_LEFT,
        });
        instance.mapObj.addControl(ctrl_sca); // Scale
      }
    },
    addMarker: function (instance) {
      var json = instance.marker;
      var p = json.point.split("|");
      var point = new BMap.Point(p[0], p[1]);
      var iconImg = instance.createIcon();
      var marker = new BMap.Marker(point, { icon: iconImg });
      var iw = instance.createInfoWindow();
      var label = new BMap.Label(json.title, {
        offset: new BMap.Size(json.icon.lb - json.icon.x + 10, -20),
      });
      marker.setLabel(label);
      instance.mapObj.addOverlay(marker);
      label.setStyle({
        borderColor: "#808080",
        color: "#333",
        cursor: "pointer",
      });

      var _iw = instance.createInfoWindow();
      var _marker = marker;
      _marker.addEventListener("click", function () {
        this.openInfoWindow(_iw);
      });
      _iw.addEventListener("open", function () {
        _marker.getLabel().hide();
      });
      _iw.addEventListener("close", function () {
        _marker.getLabel().show();
      });
      label.addEventListener("click", function () {
        _marker.openInfoWindow(_iw);
      });
      if (!!json.isOpen) {
        label.hide();
        _marker.openInfoWindow(_iw);
      }
    },
  };

  (this.createInfoWindow = function () {
    return new BMap.InfoWindow(
      "<b class='iw_poi_title' title='" +
        this.marker.title +
        "'>" +
        this.marker.title +
        "</b><div class='iw_poi_content'>" +
        this.marker.content +
        "</div>"
    );
  }),
    (this.createIcon = function () {
      var json = this.marker.icon;
      var icon = new BMap.Icon(
        "http://app.baidu.com/map/images/us_mk_icon.png",
        new BMap.Size(json.w, json.h),
        {
          imageOffset: new BMap.Size(-json.l, -json.t),
          infoWindowOffset: new BMap.Size(json.lb + 5, 1),
          offset: new BMap.Size(json.x, json.h),
        }
      );
      return icon;
    });

  this.init();
};
BaiduMap.prototype.CONFIG = {
  CONTROLS: {
    ZOOM: true,
    MINIMAP: false,
    SCALE: false,
  },
};

/* FLOWPLAYER START
 * flowplayer.js minified Version 3.2.11
 * Date: 2012-06-16 10:34:45 -0400 (Sat, 16 Jun 2012)
 * Revision: 808
 */
(function () {
  function g(o) {
    console.log("$f.fireEvent", [].slice.call(o));
  }
  function k(q) {
    if (!q || typeof q != "object") {
      return q;
    }
    var o = new q.constructor();
    for (var p in q) {
      if (q.hasOwnProperty(p)) {
        o[p] = k(q[p]);
      }
    }
    return o;
  }
  function m(t, q) {
    if (!t) {
      return;
    }
    var o,
      p = 0,
      r = t.length;
    if (r === undefined) {
      for (o in t) {
        if (q.call(t[o], o, t[o]) === false) {
          break;
        }
      }
    } else {
      for (var s = t[0]; p < r && q.call(s, p, s) !== false; s = t[++p]) {}
    }
    return t;
  }
  function c(o) {
    return document.getElementById(o);
  }
  function i(q, p, o) {
    if (typeof p != "object") {
      return q;
    }
    if (q && p) {
      m(p, function (r, s) {
        if (!o || typeof s != "function") {
          q[r] = s;
        }
      });
    }
    return q;
  }
  function n(s) {
    var q = s.indexOf(".");
    if (q != -1) {
      var p = s.slice(0, q) || "*";
      var o = s.slice(q + 1, s.length);
      var r = [];
      m(document.getElementsByTagName(p), function () {
        if (this.className && this.className.indexOf(o) != -1) {
          r.push(this);
        }
      });
      return r;
    }
  }
  function f(o) {
    o = o || window.event;
    if (o.preventDefault) {
      o.stopPropagation();
      o.preventDefault();
    } else {
      o.returnValue = false;
      o.cancelBubble = true;
    }
    return false;
  }
  function j(q, o, p) {
    q[o] = q[o] || [];
    q[o].push(p);
  }
  function e() {
    return "_" + ("" + Math.random()).slice(2, 10);
  }
  var h = function (t, r, s) {
    var q = this,
      p = {},
      u = {};
    q.index = r;
    if (typeof t == "string") {
      t = { url: t };
    }
    i(this, t, true);
    m(
      "Begin*,Start,Pause*,Resume*,Seek*,Stop*,Finish*,LastSecond,Update,BufferFull,BufferEmpty,BufferStop".split(
        ","
      ),
      function () {
        var v = "on" + this;
        if (v.indexOf("*") != -1) {
          v = v.slice(0, v.length - 1);
          var w = "onBefore" + v.slice(2);
          q[w] = function (x) {
            j(u, w, x);
            return q;
          };
        }
        q[v] = function (x) {
          j(u, v, x);
          return q;
        };
        if (r == -1) {
          if (q[w]) {
            s[w] = q[w];
          }
          if (q[v]) {
            s[v] = q[v];
          }
        }
      }
    );
    i(this, {
      onCuepoint: function (x, w) {
        if (arguments.length == 1) {
          p.embedded = [null, x];
          return q;
        }
        if (typeof x == "number") {
          x = [x];
        }
        var v = e();
        p[v] = [x, w];
        if (s.isLoaded()) {
          s._api().fp_addCuepoints(x, r, v);
        }
        return q;
      },
      update: function (w) {
        i(q, w);
        if (s.isLoaded()) {
          s._api().fp_updateClip(w, r);
        }
        var v = s.getConfig();
        var x = r == -1 ? v.clip : v.playlist[r];
        i(x, w, true);
      },
      _fireEvent: function (v, y, w, A) {
        if (v == "onLoad") {
          m(p, function (B, C) {
            if (C[0]) {
              s._api().fp_addCuepoints(C[0], r, B);
            }
          });
          return false;
        }
        A = A || q;
        if (v == "onCuepoint") {
          var z = p[y];
          if (z) {
            return z[1].call(s, A, w);
          }
        }
        if (
          y &&
          "onBeforeBegin,onMetaData,onStart,onUpdate,onResume".indexOf(v) != -1
        ) {
          i(A, y);
          if (y.metaData) {
            if (!A.duration) {
              A.duration = y.metaData.duration;
            } else {
              A.fullDuration = y.metaData.duration;
            }
          }
        }
        var x = true;
        m(u[v], function () {
          x = this.call(s, A, y, w);
        });
        return x;
      },
    });
    if (t.onCuepoint) {
      var o = t.onCuepoint;
      q.onCuepoint.apply(q, typeof o == "function" ? [o] : o);
      delete t.onCuepoint;
    }
    m(t, function (v, w) {
      if (typeof w == "function") {
        j(u, v, w);
        delete t[v];
      }
    });
    if (r == -1) {
      s.onCuepoint = this.onCuepoint;
    }
  };
  var l = function (p, r, q, t) {
    var o = this,
      s = {},
      u = false;
    if (t) {
      i(s, t);
    }
    m(r, function (v, w) {
      if (typeof w == "function") {
        s[v] = w;
        delete r[v];
      }
    });
    i(this, {
      animate: function (y, z, x) {
        if (!y) {
          return o;
        }
        if (typeof z == "function") {
          x = z;
          z = 500;
        }
        if (typeof y == "string") {
          var w = y;
          y = {};
          y[w] = z;
          z = 500;
        }
        if (x) {
          var v = e();
          s[v] = x;
        }
        if (z === undefined) {
          z = 500;
        }
        r = q._api().fp_animate(p, y, z, v);
        return o;
      },
      css: function (w, x) {
        if (x !== undefined) {
          var v = {};
          v[w] = x;
          w = v;
        }
        r = q._api().fp_css(p, w);
        i(o, r);
        return o;
      },
      show: function () {
        this.display = "block";
        q._api().fp_showPlugin(p);
        return o;
      },
      hide: function () {
        this.display = "none";
        q._api().fp_hidePlugin(p);
        return o;
      },
      toggle: function () {
        this.display = q._api().fp_togglePlugin(p);
        return o;
      },
      fadeTo: function (y, x, w) {
        if (typeof x == "function") {
          w = x;
          x = 500;
        }
        if (w) {
          var v = e();
          s[v] = w;
        }
        this.display = q._api().fp_fadeTo(p, y, x, v);
        this.opacity = y;
        return o;
      },
      fadeIn: function (w, v) {
        return o.fadeTo(1, w, v);
      },
      fadeOut: function (w, v) {
        return o.fadeTo(0, w, v);
      },
      getName: function () {
        return p;
      },
      getPlayer: function () {
        return q;
      },
      _fireEvent: function (w, v, x) {
        if (w == "onUpdate") {
          var z = q._api().fp_getPlugin(p);
          if (!z) {
            return;
          }
          i(o, z);
          delete o.methods;
          if (!u) {
            m(z.methods, function () {
              var B = "" + this;
              o[B] = function () {
                var C = [].slice.call(arguments);
                var D = q._api().fp_invoke(p, B, C);
                return D === "undefined" || D === undefined ? o : D;
              };
            });
            u = true;
          }
        }
        var A = s[w];
        if (A) {
          var y = A.apply(o, v);
          if (w.slice(0, 1) == "_") {
            delete s[w];
          }
          return y;
        }
        return o;
      },
    });
  };
  function b(q, G, t) {
    var w = this,
      v = null,
      D = false,
      u,
      s,
      F = [],
      y = {},
      x = {},
      E,
      r,
      p,
      C,
      o,
      A;
    i(w, {
      id: function () {
        return E;
      },
      isLoaded: function () {
        return v !== null && v.fp_play !== undefined && !D;
      },
      getParent: function () {
        return q;
      },
      hide: function (H) {
        if (H) {
          q.style.height = "0px";
        }
        if (w.isLoaded()) {
          v.style.height = "0px";
        }
        return w;
      },
      show: function () {
        q.style.height = A + "px";
        if (w.isLoaded()) {
          v.style.height = o + "px";
        }
        return w;
      },
      isHidden: function () {
        return w.isLoaded() && parseInt(v.style.height, 10) === 0;
      },
      load: function (J) {
        if (!w.isLoaded() && w._fireEvent("onBeforeLoad") !== false) {
          var H = function () {
            if (u && !flashembed.isSupported(G.version)) {
              q.innerHTML = "";
            }
            if (J) {
              J.cached = true;
              j(x, "onLoad", J);
            }
            flashembed(q, G, { config: t });
          };
          var I = 0;
          m(a, function () {
            this.unload(function (K) {
              if (++I == a.length) {
                H();
              }
            });
          });
        }
        return w;
      },
      unload: function (J) {
        if (u.replace(/\s/g, "") !== "") {
          if (w._fireEvent("onBeforeUnload") === false) {
            if (J) {
              J(false);
            }
            return w;
          }
          D = true;
          try {
            if (v) {
              if (v.fp_isFullscreen()) {
                v.fp_toggleFullscreen();
              }
              v.fp_close();
              w._fireEvent("onUnload");
            }
          } catch (H) {}
          var I = function () {
            v = null;
            q.innerHTML = u;
            D = false;
            if (J) {
              J(true);
            }
          };
          if (
            /WebKit/i.test(navigator.userAgent) &&
            !/Chrome/i.test(navigator.userAgent)
          ) {
            setTimeout(I, 0);
          } else {
            I();
          }
        } else {
          if (J) {
            J(false);
          }
        }
        return w;
      },
      getClip: function (H) {
        if (H === undefined) {
          H = C;
        }
        return F[H];
      },
      getCommonClip: function () {
        return s;
      },
      getPlaylist: function () {
        return F;
      },
      getPlugin: function (H) {
        var J = y[H];
        if (!J && w.isLoaded()) {
          var I = w._api().fp_getPlugin(H);
          if (I) {
            J = new l(H, I, w);
            y[H] = J;
          }
        }
        return J;
      },
      getScreen: function () {
        return w.getPlugin("screen");
      },
      getControls: function () {
        return w.getPlugin("controls")._fireEvent("onUpdate");
      },
      getLogo: function () {
        try {
          return w.getPlugin("logo")._fireEvent("onUpdate");
        } catch (H) {}
      },
      getPlay: function () {
        return w.getPlugin("play")._fireEvent("onUpdate");
      },
      getConfig: function (H) {
        return H ? k(t) : t;
      },
      getFlashParams: function () {
        return G;
      },
      loadPlugin: function (K, J, M, L) {
        if (typeof M == "function") {
          L = M;
          M = {};
        }
        var I = L ? e() : "_";
        w._api().fp_loadPlugin(K, J, M, I);
        var H = {};
        H[I] = L;
        var N = new l(K, null, w, H);
        y[K] = N;
        return N;
      },
      getState: function () {
        return w.isLoaded() ? v.fp_getState() : -1;
      },
      play: function (I, H) {
        var J = function () {
          if (I !== undefined) {
            w._api().fp_play(I, H);
          } else {
            w._api().fp_play();
          }
        };
        if (w.isLoaded()) {
          J();
        } else {
          if (D) {
            setTimeout(function () {
              w.play(I, H);
            }, 50);
          } else {
            w.load(function () {
              J();
            });
          }
        }
        return w;
      },
      getVersion: function () {
        var I = "flowplayer.js 3.2.11";
        if (w.isLoaded()) {
          var H = v.fp_getVersion();
          H.push(I);
          return H;
        }
        return I;
      },
      _api: function () {
        if (!w.isLoaded()) {
          throw (
            "Flowplayer " + w.id() + " not loaded when calling an API method"
          );
        }
        return v;
      },
      setClip: function (H) {
        m(H, function (I, J) {
          if (typeof J == "function") {
            j(x, I, J);
            delete H[I];
          } else {
            if (I == "onCuepoint") {
              $f(q).getCommonClip().onCuepoint(H[I][0], H[I][1]);
            }
          }
        });
        w.setPlaylist([H]);
        return w;
      },
      getIndex: function () {
        return p;
      },
      bufferAnimate: function (H) {
        v.fp_bufferAnimate(H === undefined || H);
        return w;
      },
      _swfHeight: function () {
        return v.clientHeight;
      },
    });
    m(
      "Click*,Load*,Unload*,Keypress*,Volume*,Mute*,Unmute*,PlaylistReplace,ClipAdd,Fullscreen*,FullscreenExit,Error,MouseOver,MouseOut".split(
        ","
      ),
      function () {
        var H = "on" + this;
        if (H.indexOf("*") != -1) {
          H = H.slice(0, H.length - 1);
          var I = "onBefore" + H.slice(2);
          w[I] = function (J) {
            j(x, I, J);
            return w;
          };
        }
        w[H] = function (J) {
          j(x, H, J);
          return w;
        };
      }
    );
    m(
      "pause,resume,mute,unmute,stop,toggle,seek,getStatus,getVolume,setVolume,getTime,isPaused,isPlaying,startBuffering,stopBuffering,isFullscreen,toggleFullscreen,reset,close,setPlaylist,addClip,playFeed,setKeyboardShortcutsEnabled,isKeyboardShortcutsEnabled".split(
        ","
      ),
      function () {
        var H = this;
        w[H] = function (J, I) {
          if (!w.isLoaded()) {
            return w;
          }
          var K = null;
          if (J !== undefined && I !== undefined) {
            K = v["fp_" + H](J, I);
          } else {
            K = J === undefined ? v["fp_" + H]() : v["fp_" + H](J);
          }
          return K === "undefined" || K === undefined ? w : K;
        };
      }
    );
    w._fireEvent = function (Q) {
      if (typeof Q == "string") {
        Q = [Q];
      }
      var R = Q[0],
        O = Q[1],
        M = Q[2],
        L = Q[3],
        K = 0;
      if (t.debug) {
        g(Q);
      }
      if (!w.isLoaded() && R == "onLoad" && O == "player") {
        v = v || c(r);
        o = w._swfHeight();
        m(F, function () {
          this._fireEvent("onLoad");
        });
        m(y, function (S, T) {
          T._fireEvent("onUpdate");
        });
        s._fireEvent("onLoad");
      }
      if (R == "onLoad" && O != "player") {
        return;
      }
      if (R == "onError") {
        if (
          typeof O == "string" ||
          (typeof O == "number" && typeof M == "number")
        ) {
          O = M;
          M = L;
        }
      }
      if (R == "onContextMenu") {
        m(t.contextMenu[O], function (S, T) {
          T.call(w);
        });
        return;
      }
      if (R == "onPluginEvent" || R == "onBeforePluginEvent") {
        var H = O.name || O;
        var I = y[H];
        if (I) {
          I._fireEvent("onUpdate", O);
          return I._fireEvent(M, Q.slice(3));
        }
        return;
      }
      if (R == "onPlaylistReplace") {
        F = [];
        var N = 0;
        m(O, function () {
          F.push(new h(this, N++, w));
        });
      }
      if (R == "onClipAdd") {
        if (O.isInStream) {
          return;
        }
        O = new h(O, M, w);
        F.splice(M, 0, O);
        for (K = M + 1; K < F.length; K++) {
          F[K].index++;
        }
      }
      var P = true;
      if (typeof O == "number" && O < F.length) {
        C = O;
        var J = F[O];
        if (J) {
          P = J._fireEvent(R, M, L);
        }
        if (!J || P !== false) {
          P = s._fireEvent(R, M, L, J);
        }
      }
      m(x[R], function () {
        P = this.call(w, O, M);
        if (this.cached) {
          x[R].splice(K, 1);
        }
        if (P === false) {
          return false;
        }
        K++;
      });
      return P;
    };
    function B() {
      if ($f(q)) {
        $f(q).getParent().innerHTML = "";
        p = $f(q).getIndex();
        a[p] = w;
      } else {
        a.push(w);
        p = a.length - 1;
      }
      A = parseInt(q.style.height, 10) || q.clientHeight;
      E = q.id || "fp" + e();
      r = G.id || E + "_api";
      G.id = r;
      u = q.innerHTML;
      if (typeof t == "string") {
        t = { clip: { url: t } };
      }
      t.playerId = E;
      t.clip = t.clip || {};
      if (q.getAttribute("href", 2) && !t.clip.url) {
        t.clip.url = q.getAttribute("href", 2);
      }
      s = new h(t.clip, -1, w);
      t.playlist = t.playlist || [t.clip];
      var I = 0;
      m(t.playlist, function () {
        var L = this;
        if (typeof L == "object" && L.length) {
          L = { url: "" + L };
        }
        m(t.clip, function (M, N) {
          if (N !== undefined && L[M] === undefined && typeof N != "function") {
            L[M] = N;
          }
        });
        t.playlist[I] = L;
        L = new h(L, I, w);
        F.push(L);
        I++;
      });
      m(t, function (L, M) {
        if (typeof M == "function") {
          if (s[L]) {
            s[L](M);
          } else {
            j(x, L, M);
          }
          delete t[L];
        }
      });
      m(t.plugins, function (L, M) {
        if (M) {
          y[L] = new l(L, M, w);
        }
      });
      if (!t.plugins || t.plugins.controls === undefined) {
        y.controls = new l("controls", null, w);
      }
      y.canvas = new l("canvas", null, w);
      u = q.innerHTML;
      function K(L) {
        if (
          /iPad|iPhone|iPod/i.test(navigator.userAgent) &&
          !/.flv$/i.test(F[0].url) &&
          !J()
        ) {
          return true;
        }
        if (!w.isLoaded() && w._fireEvent("onBeforeClick") !== false) {
          w.load();
        }
        return f(L);
      }
      function J() {
        return w.hasiPadSupport && w.hasiPadSupport();
      }
      function H() {
        if (u.replace(/\s/g, "") !== "") {
          if (q.addEventListener) {
            q.addEventListener("click", K, false);
          } else {
            if (q.attachEvent) {
              q.attachEvent("onclick", K);
            }
          }
        } else {
          if (q.addEventListener && !J()) {
            q.addEventListener("click", f, false);
          }
          w.load();
        }
      }
      setTimeout(H, 0);
    }
    if (typeof q == "string") {
      var z = c(q);
      if (!z) {
        throw "Flowplayer cannot access element: " + q;
      }
      q = z;
      B();
    } else {
      B();
    }
  }
  var a = [];
  function d(o) {
    this.length = o.length;
    this.each = function (q) {
      m(o, q);
    };
    this.size = function () {
      return o.length;
    };
    var p = this;
    for (name in b.prototype) {
      p[name] = function () {
        var q = arguments;
        p.each(function () {
          this[name].apply(this, q);
        });
      };
    }
  }
  window.flowplayer = window.$f = function () {
    var p = null;
    var o = arguments[0];
    if (!arguments.length) {
      m(a, function () {
        if (this.isLoaded()) {
          p = this;
          return false;
        }
      });
      return p || a[0];
    }
    if (arguments.length == 1) {
      if (typeof o == "number") {
        return a[o];
      } else {
        if (o == "*") {
          return new d(a);
        }
        m(a, function () {
          if (this.id() == o.id || this.id() == o || this.getParent() == o) {
            p = this;
            return false;
          }
        });
        return p;
      }
    }
    if (arguments.length > 1) {
      var t = arguments[1],
        q = arguments.length == 3 ? arguments[2] : {};
      if (typeof t == "string") {
        t = { src: t };
      }
      t = i(
        {
          bgcolor: "#000000",
          version: [10, 1],
          expressInstall:
            "http://releases.flowplayer.org/swf/expressinstall.swf",
          cachebusting: false,
        },
        t
      );
      if (typeof o == "string") {
        if (o.indexOf(".") != -1) {
          var s = [];
          m(n(o), function () {
            s.push(new b(this, k(t), k(q)));
          });
          return new d(s);
        } else {
          var r = c(o);
          return new b(r !== null ? r : k(o), k(t), k(q));
        }
      } else {
        if (o) {
          return new b(o, k(t), k(q));
        }
      }
    }
    return null;
  };
  i(window.$f, {
    fireEvent: function () {
      var o = [].slice.call(arguments);
      var q = $f(o[0]);
      return q ? q._fireEvent(o.slice(1)) : null;
    },
    addPlugin: function (o, p) {
      b.prototype[o] = p;
      return $f;
    },
    each: m,
    extend: i,
  });
  if (typeof jQuery == "function") {
    jQuery.fn.flowplayer = function (q, p) {
      if (!arguments.length || typeof arguments[0] == "number") {
        var o = [];
        this.each(function () {
          var r = $f(this);
          if (r) {
            o.push(r);
          }
        });
        return arguments.length ? o[arguments[0]] : new d(o);
      }
      return this.each(function () {
        $f(this, k(q), p ? k(p) : {});
      });
    };
  }
})();
(function () {
  var h = document.all,
    j = "http://get.adobe.com/flashplayer",
    c = typeof jQuery == "function",
    e = /(\d+)[^\d]+(\d+)[^\d]*(\d*)/,
    b = {
      width: "100%",
      height: "100%",
      id: "_" + ("" + Math.random()).slice(9),
      allowfullscreen: true,
      allowscriptaccess: "always",
      quality: "high",
      version: [3, 0],
      onFail: null,
      expressInstall: null,
      w3c: false,
      cachebusting: false,
    };
  if (window.attachEvent) {
    window.attachEvent("onbeforeunload", function () {
      __flash_unloadHandler = function () {};
      __flash_savedUnloadHandler = function () {};
    });
  }
  function i(m, l) {
    if (l) {
      for (var f in l) {
        if (l.hasOwnProperty(f)) {
          m[f] = l[f];
        }
      }
    }
    return m;
  }
  function a(f, n) {
    var m = [];
    for (var l in f) {
      if (f.hasOwnProperty(l)) {
        m[l] = n(f[l]);
      }
    }
    return m;
  }
  window.flashembed = function (f, m, l) {
    if (typeof f == "string") {
      f = document.getElementById(f.replace("#", ""));
    }
    if (!f) {
      return;
    }
    if (typeof m == "string") {
      m = { src: m };
    }
    return new d(f, i(i({}, b), m), l);
  };
  var g = i(window.flashembed, {
    conf: b,
    getVersion: function () {
      var m, f;
      try {
        f = navigator.plugins["Shockwave Flash"].description.slice(16);
      } catch (o) {
        try {
          m = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
          f = m && m.GetVariable("$version");
        } catch (n) {
          try {
            m = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            f = m && m.GetVariable("$version");
          } catch (l) {}
        }
      }
      f = e.exec(f);
      return f ? [1 * f[1], 1 * f[f[1] * 1 > 9 ? 2 : 3] * 1] : [0, 0];
    },
    asString: function (l) {
      if (l === null || l === undefined) {
        return null;
      }
      var f = typeof l;
      if (f == "object" && l.push) {
        f = "array";
      }
      switch (f) {
        case "string":
          l = l.replace(new RegExp('(["\\\\])', "g"), "\\$1");
          l = l.replace(/^\s?(\d+\.?\d*)%/, "$1pct");
          return '"' + l + '"';
        case "array":
          return (
            "[" +
            a(l, function (o) {
              return g.asString(o);
            }).join(",") +
            "]"
          );
        case "function":
          return '"function()"';
        case "object":
          var m = [];
          for (var n in l) {
            if (l.hasOwnProperty(n)) {
              m.push('"' + n + '":' + g.asString(l[n]));
            }
          }
          return "{" + m.join(",") + "}";
      }
      return String(l).replace(/\s/g, " ").replace(/\'/g, '"');
    },
    getHTML: function (o, l) {
      o = i({}, o);
      var n =
        '<object width="' +
        o.width +
        '" height="' +
        o.height +
        '" id="' +
        o.id +
        '" name="' +
        o.id +
        '"';
      if (o.cachebusting) {
        o.src += (o.src.indexOf("?") != -1 ? "&" : "?") + Math.random();
      }
      if (o.w3c || !h) {
        n += ' data="' + o.src + '" type="application/x-shockwave-flash"';
      } else {
        n += ' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';
      }
      n += ">";
      if (o.w3c || h) {
        n += '<param name="movie" value="' + o.src + '" />';
      }
      o.width = o.height = o.id = o.w3c = o.src = null;
      o.onFail = o.version = o.expressInstall = null;
      for (var m in o) {
        if (o[m]) {
          n += '<param name="' + m + '" value="' + o[m] + '" />';
        }
      }
      var p = "";
      if (l) {
        for (var f in l) {
          if (l[f]) {
            var q = l[f];
            p +=
              f +
              "=" +
              (/function|object/.test(typeof q) ? g.asString(q) : q) +
              "&";
          }
        }
        p = p.slice(0, -1);
        n += '<param name="flashvars" value=\'' + p + "' />";
      }
      n += "</object>";
      return n;
    },
    isSupported: function (f) {
      return k[0] > f[0] || (k[0] == f[0] && k[1] >= f[1]);
    },
  });
  var k = g.getVersion();
  function d(f, n, m) {
    if (g.isSupported(n.version)) {
      f.innerHTML = g.getHTML(n, m);
    } else {
      if (n.expressInstall && g.isSupported([6, 65])) {
        f.innerHTML = g.getHTML(i(n, { src: n.expressInstall }), {
          MMredirectURL: encodeURIComponent(location.href),
          MMplayerType: "PlugIn",
          MMdoctitle: document.title,
        });
      } else {
        if (!f.innerHTML.replace(/\s/g, "")) {
          f.innerHTML =
            "<h2>Flash version " +
            n.version +
            " or greater is required</h2><h3>" +
            (k[0] > 0
              ? "Your version is " + k
              : "You have no flash plugin installed") +
            "</h3>" +
            (f.tagName == "A"
              ? "<p>Click here to download latest version</p>"
              : "<p>Download latest version from <a href='" +
                j +
                "'>here</a></p>");
          if (f.tagName == "A" || f.tagName == "DIV") {
            f.onclick = function () {
              location.href = j;
            };
          }
        }
        if (n.onFail) {
          var l = n.onFail.call(this);
          if (typeof l == "string") {
            f.innerHTML = l;
          }
        }
      }
    }
    if (h) {
      window[n.id] = document.getElementById(n.id);
    }
    i(this, {
      getRoot: function () {
        return f;
      },
      getOptions: function () {
        return n;
      },
      getConf: function () {
        return m;
      },
      getApi: function () {
        return f.firstChild;
      },
    });
  }
  if (c) {
    jQuery.tools = jQuery.tools || { version: "3.2.11" };
    jQuery.tools.flashembed = { conf: b };
    jQuery.fn.flashembed = function (l, f) {
      return this.each(function () {
        $(this).data("flashembed", flashembed(this, l, f));
      });
    };
  }
})();
/* FLOWPLAYER END */

/* CUSTOM VARIABLES FÃR DIE INFOBOX IN DER BÃHNE */
// Indikator -> {customVariable}
var variables = [
  {
    index: 0,
    get: function () {
      var data = {
        year: 2013,
        month: 09,
        day: 16,
      };
      var daysToCount = new Date(data.year, data.month - 1, data.day);
      var today = new Date();
      var oneday = 1000 * 60 * 60 * 24;
      if (today.getMonth() == data.month && today.getDate() > data.day) {
        daysToCount.setFullYear(daysToCount.getFullYear());
      }
      return String(
        Math.ceil((daysToCount.getTime() - today.getTime()) / oneday)
      );
    },
  },
];
/* CUSTOM VARIABLES FÃR DIE INFOBOX IN DER BÃHNE ENDE */

/* HOMEPAGEBANENER START V2.1 */
if ("false" == "true") {
  $(function () {
    hpb = new HomepageBanner({
      xmlPath: "", // Pfad zur data.xml
      fallback_video: "/mediathek/flowplayer.swf", // Absoulter oder relativer Pfad zur SWF Datei die das Flash Fallback des Video Moduls ist
      fallback_kronestv: "/mediathek/flowplayer.swf", // Absoulter oder relativer Pfad zur SWF Datei die das Flash Fallback des KronesTV
      fallback_particle: "/mediathek/ParticleModule.swf", // Absoulter oder relativer Pfad zur SWF Datei die das Flash Fallback des Particle Moduls ist
      youkuVideoBg: "/images/youku_bg_968x322.png", // Absoluter oder relativer Pfad zum Hintergrundbild wÃ¤hrend des Ladens von youku videos.
      youkuJsApi: "", // Absoluter oder relativer Pfad zur jsapi.js zum abspielen von youku Videos
      youtubeApi: "http://www.youtube.com/iframe_api", // Absoluter, relativer Pfad oder URL zur Youtube API
      /*"youkuVideoCheckInterval" : 1000, // Sofern eine "videoDuration" gesetzt ist wird das Video automatisch nach dieser duration beendet. Dieses Interval besagt nach wievielen ms geprÃ¼ft werden soll, ob die Zeit erreich ist.*/
      size: { width: 968, height: 322 }, // Standard Canvas GrÃ¶Ãe. Kann in der Modulklasse fÃ¼r jedes Modul angepasst werden
      appender: ".content .printNoDisplay", // DOM Element an dem der Homepagebanner angehangen werden soll
      pagerAppender: "#idm_stage_banner nav ul", // DOM Element an dem der Pager angehangen werden soll
      moduleAppender: "#idm_stage_content", // DOM Element des Homepagebanners an dem die Module dargestellt werden sollen
      infoboxDuration: 2500, // Die Dauer fÃ¼r die die Infobox NACH ABSPIELEN des Media Elementes dargestellt werden soll
      startingElement: 0, // Index der Start Video Elementes
      canvasId: "k-canvas", // ID des Canvas Objektes (wird dynamisch erzeugt) fÃ¼r SubModule des Canvas Moduls
      maxAsyncProcesses: 2, // Maximale Anzahl der Asynchronen Prozesse
    });
  });
}
// Wenn auf true -> in der Konsole werden Debug Meldungen ausgegeben.
// Wenn auf false kann debugMode Ã¼ber die Konsole auch manuell auf true gesetzt werden. Gilt dann natÃ¼rlich nur fÃ¼r die aktuelle Session. Eingabe von "log" in der Konsole gibt alle in der Session geloggten Meldungen aus.
debugMode = false;

// JavaScript Inheritance FunktionalitÃ¤t zum Einsatz von OOP in Javascript
// ErmÃ¶glicht den Einsatz von z.B var Test = Class.extend(); (Test ist nun vom Typ Klasse)
(function () {
  var initializing = false,
    fnTest = /xyz/.test(function () {
      xyz;
    })
      ? /\b_super\b/
      : /.*/;
  this.Class = function () {};
  Class.extend = function (prop) {
    var _super = this.prototype;
    initializing = true;
    var prototype = new this();
    initializing = false;
    for (var name in prop) {
      prototype[name] =
        typeof prop[name] == "function" &&
        typeof _super[name] == "function" &&
        fnTest.test(prop[name])
          ? (function (name, fn) {
              return function () {
                var tmp = this._super;
                this._super = _super[name];
                var ret = fn.apply(this, arguments);
                this._super = tmp;
                return ret;
              };
            })(name, prop[name])
          : prop[name];
    }
    function Class() {
      if (!initializing && this.init) this.init.apply(this, arguments);
    }
    Class.prototype = prototype;
    Class.prototype.constructor = Class;
    Class.extend = arguments.callee;
    return Class;
  };
})();
// Die Basis Klasse fÃ¼r den HomepageBanner. Wird on Document Ready instanziert
var HomepageBanner = Class.extend({
  init: function (options) {
    idm_utils.debug("Initialisiere Homepagebanner");
    if (typeof options.xmlPath === "undefined") throw "No XML file path given";
    if (typeof options.appender === "undefined") throw "No appender given";
    if (typeof options.pagerAppender === "undefined")
      throw "No pagerAppender given";
    if (typeof options.moduleAppender === "undefined")
      throw "No moduleAppender given";
    if (typeof options.fallback_video === "undefined")
      throw "No path for Video SWF fallback given";
    if (typeof options.fallback_kronestv === "undefined")
      throw "No path for KronesTV SWF fallback given";
    if (typeof options.fallback_particle === "undefined")
      throw "No path for Particle SWF fallback given";

    if (typeof options.infoboxDuration === "undefined")
      options.infoboxDuration = 2000;
    if (typeof options.startingElement === "undefined")
      options.startingElement = 0;
    if (typeof options.size === "undefined")
      options.size = { width: 968, height: 322 };
    if (typeof options.canvasId === "undefined") options.canvasId = "k-canvas";
    if (typeof options.maxAsyncProcesses === "undefined")
      options.maxAsyncProcesses = 5;

    /*if(typeof(options.youkuVideoBg) === "undefined") options.youkuVideoBg = "";
        if(typeof(options.youkuVideoCheckInterval) === "undefined") options.youkuVideoCheckInterval = 1000;*/

    if (typeof options.kronesTvApi === "undefined")
      options.kronesTvApi = "http://krones.tv/getClip.php";
    if (typeof options.youkuJsApi === "undefined")
      options.youkuJsApi = "http://player.youku.com/jsapi";
    if (typeof options.youtubeApi === "undefined")
      options.youtubeApi = "http://www.youtube.com/iframe_api";

    HomepageBannerInstance = this;

    this.xmlPath = options.xmlPath;
    this.appender = options.appender;
    this.moduleAppender = options.moduleAppender;
    this.pagerAppender = options.pagerAppender;
    this.infoboxDuration = options.infoboxDuration;
    this.startingElement = options.startingElement;
    this.maxAsyncProcesses = options.maxAsyncProcesses;
    this.size = Util.removePx(options.size);
    this.canvasId = options.canvasId;
    this.fallback_video = options.fallback_video;
    this.fallback_kronestv = options.fallback_kronestv;
    this.fallback_particle = options.fallback_particle;
    this.fplayer = null;
    this.kronesTvApi = options.kronesTvApi;
    this.youkuJsApi = options.youkuJsApi;
    this.youkuVideoBg = options.youkuVideoBg;
    this.youtubeApi = options.youtubeApi;
    // this.youkuVideoCheckInterval = options.youkuVideoCheckInterval;

    // Erzeugen den HTML's. Alle benÃ¶tigten ID's, Klassen etc. stehen dort hart verdrahtet.
    this.createBasicConstruct();

    // Informationen Ã¼ber den User.
    this.client = new Client();

    // Manager zum abarbeiten von asynchronen Prozessen nacheinander
    this.processManager = new ProcessManager({
      maxAsyncProcesses: this.maxAsyncProcesses,
    });

    // Klasse zur dynamischen Erzeugung von Canvas Objekten
    this.canvasHandler = new CanvasHandler({
      size: this.size,
      canvasId: this.canvasId,
    });

    // Xml Datei mit den Animationen
    this.xmlFile = new XmlLoader({
      file: this.xmlPath,
    });

    // Klasse zum Laden der Module aus der XML Datei (Erzeugt intern Modulinstanzen)
    this.moduleLoader = new ModuleLoader({
      appender: this.moduleAppender,
      xml: this.xmlFile,
      canvasHandler: this.canvasHandler,
    });

    // Alle erzeugten Modulinstanzen in einem Array.
    this.modules = this.moduleLoader.loadAnimationStructure();

    // Paging FunktionalitÃ¤t
    this.pager = new Pager({
      appender: this.pagerAppender,
      startIndex: this.startingElement,
      maxPages: this.modules.length,
      clientInformation: this.client,
    }).createHTML();

    // Fade-In/Out fÃ¼r die Media Elemente/Animationen
    this.effectManager = new EffectManager();

    // Media Player (Stage an sich) samt FunktionalitÃ¤t
    this.player = new Player({
      playlist: this.modules,
      effects: this.effectManager,
      startIndex: this.startingElement,
    });

    // Pager-Buttons mit Events belegen
    this.pager.bind();
    // Erstes Element abspielen
    this.player.play();

    // Zur weiterverwendung von Objekt- und Funktionen wird nach der Initialisierung das erstellte Objekt zurÃ¼ck gegeben.
    return this;
  },

  createBasicConstruct: function () {
    if (typeof this.basicConstructCreated !== "undefined")
      throw "Basic HTML construct of HomepageBanner has already been created.";

    $(
      "#idm_stage_banner, #idm_stage_content, #idm_stage_overlay, #idm_stage_infobox"
    ).remove();

    var article = $("<article />")
      .attr("id", "idm_stage_banner")
      .css({
        width: this.size.width,
        height: this.size.height,
        position: "relative",
      });
    article.append(
      $("<div />")
        .attr("id", "idm_stage_content")
        .css({ width: this.size.width, height: this.size.height })
    );

    var infobox = $("<div />").attr("id", "idm_stage_infobox");
    infobox.append($("<p class='h2home' />"));
    infobox.append($("<p />"));

    var anchor = $("<a />").addClass("btn").attr("href", "#");
    anchor.append($("<span />"));

    var nav = $("<nav />");
    nav.append("<ul />");

    infobox.append(anchor);
    article.append(infobox);
    article.append(nav);
    article.append($("<div />").attr("id", "idm_stage_overlay"));

    $(this.appender).append(article);
    this.basicConstructCreated = true;

    idm_utils.debug("HTML Konstrukt initialisiert");
  },

  cleanStage: function (postFade) {
    // Falls Module etwas am Basiskontrukt Ã¤ndern, so kÃ¶nnen diese Ãnderungen hier wieder rÃ¼ckgÃ¤ngig gemacht werden.
    // Diese Funktion wird bei jedem wechsel eines Elementes aufgerufen sodass die Ãnderungen am Basiskontrukt nur fÃ¼r die Dauer des
    // abzuspielendes Elementes gelten.
    // Wird VOR dem Rausfaden des Elements ausgefÃ¼hrt
    $(this.moduleAppender).css("background-image", "none");
    if (this.fplayer != null && this.fplayer.isLoaded()) {
      this.fplayer.unload();
      this.fplayer = null;
    }
    // Wird WÃHREND des rausfaden des Elementes ausgefÃ¼hrt
    if (typeof postFade != "undefined") {
      $(this.moduleAppender).css("background-color", "transparent");
    }

    if ($("#hpbvideo").length > 0) {
      $("#hpbvideo").unbind();
      $("#hpbvideo").remove();
    }

    //KronesTV und Youku manipulieren das Ajax setup.
    $.ajaxSetup({
      async: true,
      cache: false,
    });
  },
});
var ProcessManager = Class.extend({
  init: function (options) {
    if (typeof options === "undefined")
      throw "No options for ProcessManager class given";
    if (typeof ProcessManagerInstance !== "undefined")
      throw "Cannot create a second instance of Class ProcessManager. Please use the instance, you've already created";

    ProcessManagerInstance = this;

    this.maxAsyncProcesses = options.maxAsyncProcesses;
    this.interval = null;
    this._ready = true;
    this._queue = [];

    this.queue = {
      add: function (fn) {
        if (typeof fn != "function")
          throw "ProcessManager.queue.add() has to be an function value";

        idm_utils.debug("Added function to process manager queue");
        ProcessManagerInstance._queue.push(fn);
        var queueLength = ProcessManagerInstance._queue.length;
        var maxProcesses = ProcessManagerInstance.maxAsyncProcesses;
        idm_utils.debug("Process Manager queue Items: " + queueLength);

        // neue Prozesse immer hinzufÃ¼gen, auch wenn die maximale Anzahl von asynchronen Prozessen Ã¼berschritten wird. Weil wenn dem so ist, wollen wir trotzdem die letzte gewÃ¼nschte Aktion des Users ausfÃ¼hren und nicht die, die bereits in der queue ist. im Umkehrschluss heiÃt das, dass wir, sobald die maximale Anzahl der Asynchronen Prozesse Ã¼berschritten wird, solange Elemente aus der Queue (ab Index 0) entfernen mÃ¼ssen, bis es wieder in Ordnung ist.
        if (queueLength > maxProcesses) {
          idm_utils.debug(
            "Too Many Async processes in queue (" +
              queueLength +
              ") - Maximal queue length is " +
              maxProcesses
          );
          var toRemove = queueLength - maxProcesses;
          idm_utils.debug("Removing first " + toRemove + " Items from queue");
          ProcessManagerInstance.queue.remove(0, toRemove);
          idm_utils.debug(
            "Items removed. New queue length is: " +
              ProcessManagerInstance._queue.length
          );
        }
        return ProcessManagerInstance;
      },
      get: function () {
        return ProcessManagerInstance._queue;
      },
      remove: function (from, to) {
        ProcessManagerInstance._queue.splice(from, to);
      },
      removeAll: function () {
        ProcessManagerInstance._queue = [];
      },
    };
    this.ready = {
      set: function (bool) {
        if (typeof bool != "boolean")
          throw "ProcessManager.ready.set() needs to be an boolean";
        ProcessManagerInstance._ready = bool;
      },
      get: function () {
        return ProcessManagerInstance._ready;
      },
    };

    idm_utils.debug("Prozess Manager initialisiert");
  },

  work: function (parent) {
    // Wenn Elemente in der Schleife sind und der Status auf bereit gesetzt ist, fang an zu arbeiten!
    if (this.queue.get().length > 0 && this.ready.get()) {
      // Setzte den Status auf "nicht bereit" - jetzt geht die Abarbeitung der Schleife los
      this.ready.set(false);
      // Hol dir das erste Element aus der Schleife und fÃ¼hre dieses als Funktion aus (In der Schleife befinden sich nur Funktionen)
      // Innerhalb dieser Funktion wird, sobald diese durchgelaufen ist, der "Status" wieder auf "bereit" gesetzt. (redy.set(true))
      this.queue.get()[0]();
      // Checke alle 20ms, ob der Status auf "bereit" steht. (Wird nach AusfÃ¼hren der obigen Funktion gesetzt)
      this.interval = window.setInterval(function () {
        if (ProcessManagerInstance.ready.get()) {
          // Wenn bereit, dann stoppe den Interval und entferne die ausgefÃ¼hrte Funktion aus der Schleife damit diese nicht nochmal ausgefÃ¼hrt wird. Die Abarbeitung dieses Prozesses ist nun durch ! Setze die interval variable zurÃ¼ck sodass wir keine Referenz auf den Timer mehr haben. Sind jetzt noch Elemente in der Schleife ? Wenn ja fÃ¼hre diese Funktion (work()) nochmal aus.
          window.clearInterval(ProcessManagerInstance.interval);
          ProcessManagerInstance.interval = null;
          ProcessManagerInstance.queue.remove(0, 1);
          if (ProcessManagerInstance.queue.get().length > 0)
            ProcessManagerInstance.work("processManager");
        }
      }, 20);
    }
  },
});
var Player = Class.extend({
  init: function (options) {
    if (typeof options.effects === "undefined")
      throw "No effects for Player class given";
    if (typeof options.playlist === "undefined")
      throw "No playlist for Player class given";
    if (typeof options.startIndex === "undefined")
      throw "No playlist for Player class given";
    if (typeof PlayerInstance !== "undefined")
      throw "Cannot create a second instance of Class XmlLoader. Please use the instance, you've already created";

    PlayerInstance = this;
    this.effects = options.effects;
    this.playlist = options.playlist;
    this.playlistLength = options.playlist.length;
    this.startIndex = options.startIndex;
    this._currentItem = this.startIndex;
    this.currentItem = {
      set: function (i) {
        if (i < 0 || i >= PlayerInstance.playlistLength) i = 0;
        PlayerInstance._currentItem = i;
      },
      get: function () {
        return PlayerInstance._currentItem;
      },
    };

    this._isLoading = false;
    this.isLoading = {
      set: function (val) {
        PlayerInstance._isLoading = val;
      },
      get: function () {
        return PlayerInstance._isLoading;
      },
    };

    idm_utils.debug("Video Player initialisiert");
    return this;
  },

  /* Ãbernimmt den Parameter "i" welches der Index des Elementes ist welches in der BÃ¼hne abgespielt werden soll (beginnend ab 0)
       Falls der Parameter nicht gesetzt bzw. Ã¼bergeben wird, wird das momentan aktive Element (currentItem) genutzt.
       In der Playlist befinden sich alle Elemente in der selben Reihenfolge wie in der BÃ¼hne. All diese Elemente sind bereits Klassen Instanzen und
       aben die Methode createHTML(). D.h., dass fÃ¼r das Element was abgespielt weredn soll einfach die Methode "createHTML()" aufgerufen wird.
       Im Anschluss darauf wird manuell das "Das abspielen des Elementes wurde gestartet"-Event getriggert und das Element wird mittels der Effekt Klasse langsam eingeblendet.
    */
  play: function (i) {
    if (typeof i === "undefined") i = this.currentItem.get();
    idm_utils.debug("Spiele Element mit Index: " + i);
    this.currentItem.set(i);

    var moduleDeferred = $.Deferred(function () {
      PlayerInstance.effects.transformIn();
    })
      .done(function () {
        $(document).trigger(CONSTANTS.CUSTOM_EVENT.STARTED, {
          instance: PlayerInstance.playlist[i],
        });
      })
      .fail(function () {
        $(document).trigger(CONSTANTS.CUSTOM_EVENT.FINISHED, {
          instance: PlayerInstance.playlist[i],
        });
      });
    if (
      typeof this.playlist[i].deferrable !== "undefined" &&
      this.playlist[i].deferrable
    ) {
      this.playlist[i].createHTML(moduleDeferred);
    } else {
      this.playlist[i].createHTML();
      moduleDeferred.resolve();
    }

    /*this.playlist[i].createHTML();
            $(document).trigger(CONSTANTS.CUSTOM_EVENT.STARTED, {"instance":this.playlist[i]});
            this.effects.transformIn();*/
  },

  // Die Effektklasse Ã¼bernimmt hier das FadeOut und lÃ¶schen des Elementes aus dem DOM.
  // Der Ãbergabeparameter cb ist eine Funktion (Callback) die nach dem ausfÃ¼hren des FadeOut Vorgangs aufgerufen wird.
  stop: function (cb) {
    this.effects.transformOut(cb);
  },

  // ErhÃ¶ht den momentan aktiven index um 1 und ruft die play Funktion auf die das abspielen des Elementen Ã¼bernimmt
  playNext: function () {
    this.currentItem.set(this.currentItem.get() + 1);
    this.play();
    return this.currentItem.get();
  },

  // Verringert den momentan aktiven index um 1 und ruft die play Funktion auf die das abspielen des Elementen Ã¼bernimmt
  playPrev: function () {
    this.currentItem.set(this.currentItem.get() - 1);
    this.play();
    return this.currentItem.get();
  },

  // Kann bei der Initialisierung der Klasse aufgerufen werden um das Erste Element in der Playlist direkt abzuspielen
  autostart: function () {
    this.play();
  },
});
var EffectManager = Class.extend({
  init: function () {
    if (typeof EffectManagerInstance !== "undefined")
      throw "Cannot create a second instance of Class XmlLoader. Please use the instance, you've already created";

    EffectManagerInstance = this;

    this.contentSelector = "#idm_stage_content";
    this.overlaySelector = "#idm_stage_overlay";
    this.infoboxSelector = "#idm_stage_infobox";

    idm_utils.debug("Effect Manager initialisiert");
  },

  executeCallback: function (cb) {
    if (typeof cb === "function") cb();
  },

  transformIn: function (cb) {
    var cs = $(EffectManagerInstance.contentSelector);
    var os = $(EffectManagerInstance.overlaySelector);
    cs.animate({ opacity: 1 }, 300, "linear", function () {
      os.animate({ opacity: 0 }, 300, "linear", function () {
        os.css("visibility", "hidden");
      });
      EffectManagerInstance.executeCallback(cb);
    });
  },

  transformOut: function (cb) {
    var cs = $(EffectManagerInstance.contentSelector);
    var os = $(EffectManagerInstance.overlaySelector);
    var kib = $(EffectManagerInstance.infoboxSelector);

    os.css("visibility", "visible");
    os.animate({ opacity: 1 }, 300, "linear", function () {
      cs.animate({ opacity: 0 }, 300, "linear", function () {
        cs.empty();
      });
      kib.animate({ opacity: 0, top: "0" }, 300, "linear", function () {
        $(this).css("display", "none");
        HomepageBannerInstance.cleanStage("true");
        EffectManagerInstance.executeCallback(cb);
      });
    });
  },
});
var XmlLoader = Class.extend({
  init: function (options) {
    if (typeof xmlInstance !== "undefined")
      throw "Cannot create a second instance of Class XmlLoader. Please use the instance, you've already created";

    xmlInstance = this;
    this.file = options.file;
    this._xml = null;
    this.xml = {
      set: function (xml) {
        xmlInstance._xml = xml;
      },
      get: function () {
        return xmlInstance._xml;
      },
    };

    this.load();

    idm_utils.debug("XML Loader initialisiert");
    return this;
  },

  // LÃ¤dt die Ã¼bergebene XML Datei via AJAX request und speichert das XML-Objekt welches man erhÃ¤lt in der _xml variable.
  // Diese ist Ã¼ber den getter xml.get() von auÃen aufrufbar.
  load: function () {
    $.ajax({
      url: xmlInstance.file,
      async: false,
      dataType: "xml",
      success: function (xml) {
        xmlInstance.xml.set(xml);
        idm_utils.debug("XML Datei " + xmlInstance.file + " geladen");
      },
      error: function (e) {
        throw "Error during XML loading (" + xmlInstance.file + ")";
      },
    });
    return this;
  },

  getAttribute: function (attr) {
    return $(this.xml.get()).find(attr);
  },
  // Methode um zu kontrollieren ob die XML Datei bereits geladen wurde.
  xmlLoaded: function () {
    return this.xml.get() != null;
  },
});
var Module = Class.extend({
  init: function (options) {
    if (typeof options.animation === "undefined")
      throw "No Animation for Module given";

    // global instance
    moduleInstance = this;

    this.appender = options.appender;
    this.isSubModule = options.isSubModule;
    this.showInfoboxAt = CONSTANTS.INFOBOX_SHOW.AFTER;

    // Module variables, available on each module.
    this.module = options.animation.find("module").text();
    this.header = options.animation.find("header").text();
    this.subheader = options.animation.find("subheader").text();
    this.buttonText = options.animation.find("buttonText").text();
    this.buttonLink = options.animation.find("buttonLink").text();
    this.buttonTarget = options.animation.find("buttonTarget").text();

    if (this.isSubModule)
      this.subModule = options.animation.find("subModule").text();

    this.html = "";
    return this;
  },

  addInfoBox: function () {
    this.replaceVariables();
    var currentIndex = HomepageBannerInstance.player.currentItem.get();
    $("#idm_stage_infobox p.h2home").html(this.header);
    $("#idm_stage_infobox p.h2home").next().html(this.subheader);
    // Wenn buttonText leer ist dann zeige den Button nicht an
    if (
      this.buttonText.indexOf("<span></span>") != -1 ||
      this.buttonText.indexOf("hide") != -1
    ) {
      $("#idm_stage_infobox .btn").hide();
    } else {
      $("#idm_stage_infobox .btn").show();
      $("#idm_stage_infobox .btn span").html(this.buttonText);
      $("#idm_stage_infobox .btn").attr("target", this.buttonTarget);
      $("#idm_stage_infobox .btn").attr(
        "name",
        "Home.home-stage.slide" +
          currentIndex +
          ".btn." +
          this.header.replace(" ", "-").toLowerCase()
      ); // Webtrekk
      $("#idm_stage_infobox .btn").unbind();
    }
    buttonLink = $.trim(this.buttonLink);
    buttonTarget = this.buttonTarget;

    $("#idm_stage_infobox").animate(
      {
        opacity: 1,
        top: (322 - $("#idm_stage_infobox").height()) / 2,
      },
      200,
      "easeOutQuad",
      function () {}
    );
    $("#idm_stage_infobox").css("display", "block");
  },

  // Ersetzt {customVariable} mit dem Inhalt einer Variable (String).
  // Dieser String ist unter der Get Funktion des Momentanen Indexes des "variables" Objekt zu finden (Siehe Doku)
  replaceVariables: function () {
    if (typeof variables != "undefined") {
      var currentIndex = HomepageBannerInstance.player.currentItem.get();
      var currentModule = this;
      $.each(variables, function () {
        if (this.index == currentIndex) {
          var replaceRule = /\{customVariable\}/;
          var replaceValue = this.get();
          if (currentModule.header.indexOf("{customVariable}") != -1) {
            currentModule.header = String(
              currentModule.header.replace(replaceRule, replaceValue)
            );
          }
          if (currentModule.subheader.indexOf("{customVariable}") != -1) {
            currentModule.subheader = String(
              currentModule.subheader.replace(replaceRule, replaceValue)
            );
          }
          return true;
        }
      });
    }
  },

  bind: function () {
    // Konfiguration over Code Convention -> Bindings."MODULE_NAME"Events gets binded
    Bindings[this.module + "Events"]();
  },

  createFlashFallback: function () {
    idm_utils.debug("Benutze Flash als Fallback fÃ¼r " + this.module);

    /* Kleiner Hack
        In der vorherigen Version der BÃ¼hne hatten wir fÃ¼r jedes Modul eine SWF Datei die zum Darstellen des Flash Videos zustÃ¤ndig ist.
        Aus GrÃ¼nden, die in diesem Kontext belanglos sind funktionieren diese bis auf das ParticleModule.swf nicht mehr.
        Dementsprechen Ã¼berprÃ¼fen wir hier, ob das anzuzeigende Modul vom Typ SequenceModul ist und falls dem so sein sollte greifen wir
        auf die bereits vorhandene SWF Datei zur Ausgabe des Flash's zu. Mit einer Oder VerknÃ¼pfung kÃ¶nnen in der unten stehenden IF Abfrage
        auch weitere Modultypen (wenn fÃ¼r ein Modul z.B. eine eigenstÃ¤ndige SWF vorhanden ist) ergÃ¤nzt werden, da die Abfrage komplett generisch aufgebaut ist.
        Anderenfalls benuten wir den Flowplayer zur Darstellung von Videos. */
    var moduleType = this.isSubModule ? this.subModule : this.module;
    var moduleInstance =
      HomepageBannerInstance.modules[
        HomepageBannerInstance.player.currentItem.get()
      ];

    if (moduleType.toLowerCase().indexOf("particle") != -1) {
      // Particle Modul -> ParticleModule.swf
      var flashFile = HomepageBannerInstance.fallback_particle;

      if ($.browser.msie) {
        // Aus irgendeinem Grund mackt der IE7/8 rum und wollen nicht mit den JQ Objekten das Flash erzeugen...
        var object =
          '<object id="app" width="' +
          HomepageBannerInstance.size.width +
          '" height="' +
          HomepageBannerInstance.size.height +
          '" type="application/x-shockwave-flash" data="' +
          flashFile +
          '">';
        object += ' <param name="movie" value="' + flashFile + '"/>';
        object += ' <param name="AllowScriptAccess" value="always"/>';
        object +=
          ' <param name="flashvars" value="dataUrl=' +
          HomepageBannerInstance.xmlPath +
          "&currentIndex=" +
          HomepageBannerInstance.player.currentItem.get() +
          '&assetPath=" />';
        object += ' <param name="wmode" value="opaque"/>';
        object += " /* */";
        object += " </object>";
      } else {
        var params = [
          ["movie", flashFile],
          ["wmode", "opaque"],
          ["allowScriptAccess", "always"],
          [
            "flashvars",
            "dataUrl=" +
              HomepageBannerInstance.xmlPath +
              "&currentIndex=" +
              HomepageBannerInstance.player.currentItem.get() +
              "&assetPath=",
          ],
        ];
        var object = $("<object />").attr({
          id: "app",
          width: HomepageBannerInstance.size.width,
          height: HomepageBannerInstance.size.height,
          type: "application/x-shockwave-flash",
          data: flashFile,
        });
        var tmp;
        $.each(params, function (index, item) {
          tmp = $("<param />");
          tmp.attr("name", item[0]);
          tmp.attr("value", item[1]);
          object.append(tmp);
        });
      }

      $(this.appender).append(object);
      $(document).trigger(CONSTANTS.CUSTOM_EVENT.STARTED, {
        instance: moduleInstance,
      });

      /* Da das SWF File keine Events wirft die wir mit Javascript abfangen kÃ¶nnen haben wir leider keine MÃ¶glichkeit zu erfahren, wann das
               abspielen der Animation beendet ist. Dies sollte in ZukÃ¼nftigen relases mit einer neuen, eigenstÃ¤ndigen SWF Datei dringend angepasst werden (@Todo !). Bis dahin ziehen wir eine etwas nicht ganz so schÃ¶ne Methode in betracht: Da wir wissen wie lange die Animation dauert (9 Sekunden) starten wir einen Timer, der nach laden des Modules 8 Sekunden wartet und dann ein "Ich bin fertig" signal von sich gibt. Nicht schÃ¶n- aber funktioniert...vorerst */
      var ti = Timeouts.add(
        window.setInterval(function () {
          Timeouts.stop(ti);
          $(document).trigger(CONSTANTS.CUSTOM_EVENT.FINISHED, {
            instance: moduleInstance,
          });
        }, 9000)
      );
    } else if (moduleType.toLowerCase().indexOf("video") != -1) {
      // Video Module -> Flowplayer.swf
      var flashFile = HomepageBannerInstance.fallback_video;

      HomepageBannerInstance.fplayer = flowplayer(
        "idm_stage_content",
        {
          src: flashFile,
          wmode: "opaque",
          allowfullscreen: "false",
          allowScriptAccess: "always",
        },

        {
          clip: {
            url: this.asset,
            linkUrl: "#",
            autoPlay: true,
            autoBuffering: true,
            onStart: function () {
              $("#idm_stage_content").css({ width: "100%", height: "100%" });
              $(document).trigger(CONSTANTS.CUSTOM_EVENT.STARTED, {
                instance: moduleInstance,
              });
            },
            onFinish: function () {
              $(document).trigger(CONSTANTS.CUSTOM_EVENT.FINISHED, {
                instance: moduleInstance,
              });
            },
            // Verhinder das starten/stoppen des Videos durch klick auf dieses
            onBeforePause: function () {
              return false;
            },
          },
          plugins: {
            // Control Bars werden nicht benÃ¶tigt
            controls: null,
          },
          canvas: {
            // Da der Hintergrund der BÃ¼hne weiÃ ist, ist es Sinnvoll den Hintergrund des Players auch weiÃ zu halten.
            backgroundColor: "#ffffff",
            backgroundGradient: [0, 0],
          },
          play: null,
          onLoad: function () {
            $("#idm_stage_content").css({ width: "1px", height: "1px" });
          },
        }
      );
    } else if (moduleType.toLowerCase().indexOf("html5animation") != -1) {
      // HTML5AnimationModule FlashFallback: Fallback vom Video Module benutzen (Flowplayer)
      var flashFile = HomepageBannerInstance.fallback_video;

      HomepageBannerInstance.fplayer = flowplayer(
        "idm_stage_content",
        {
          src: flashFile,
          wmode: "opaque",
          allowfullscreen: "false",
          allowScriptAccess: "always",
        },

        {
          clip: {
            url: this.asset,
            linkUrl: "#",
            autoPlay: true,
            autoBuffering: true,
            onStart: function () {
              $("#idm_stage_content").css({ width: "100%", height: "100%" });
              $(document).trigger(CONSTANTS.CUSTOM_EVENT.STARTED, {
                instance: moduleInstance,
              });
            },
            onFinish: function () {
              $(document).trigger(CONSTANTS.CUSTOM_EVENT.FINISHED, {
                instance: moduleInstance,
              });
            },
            // Verhinder das starten/stoppen des Videos durch klick auf dieses
            onBeforePause: function () {
              return false;
            },
          },
          plugins: {
            // Control Bars werden nicht benÃ¶tigt
            controls: null,
          },
          canvas: {
            // Da der Hintergrund der BÃ¼hne weiÃ ist, ist es Sinnvoll den Hintergrund des Players auch weiÃ zu halten.
            backgroundColor: "#ffffff",
            backgroundGradient: [0, 0],
          },
          play: null,
          onLoad: function () {
            $("#idm_stage_content").css({ width: "1px", height: "1px" });
          },
        }
      );
    } else if (moduleType.toLowerCase().indexOf("kronestv") != -1) {
      // KronesTV Module -> Flowplayer.swf
      var flashFile = HomepageBannerInstance.fallback_kronestv;
      HomepageBannerInstance.fplayer = flowplayer(
        "idm_stage_content",

        {
          src: flashFile,
          wmode: "opaque",
          allowfullscreen: "false",
          allowScriptAccess: "always",
        },

        {
          clip: {
            url: this.videoOpts.videoURL + this.videoOpts.mp4_270p,
            linkUrl: "#",
            autoPlay: true,
            autoBuffering: true,
            onStart: function () {
              $("#idm_stage_content").css({ width: "100%", height: "100%" });
              $(document).trigger(CONSTANTS.CUSTOM_EVENT.STARTED, {
                instance: moduleInstance,
              });
            },
            onFinish: function () {
              $(document).trigger(CONSTANTS.CUSTOM_EVENT.FINISHED, {
                instance: moduleInstance,
              });
            },
            // Verhinder das starten/stoppen des Videos durch klick auf dieses
            onBeforePause: function () {
              return false;
            },
          },
          plugins: {
            // Control Bars werden nicht benÃ¶tigt
            controls: null,
          },
          canvas: {
            // Da der Hintergrund der BÃ¼hne weiÃ ist, ist es Sinnvoll den Hintergrund des Players auch weiÃ zu halten.
            backgroundColor: "#ffffff",
            backgroundGradient: [0, 0],
          },
          play: null,
          onLoad: function () {
            $("#idm_stage_content").css({ width: "1px", height: "1px" });
          },
        }
      );
    } else if (moduleType.toLowerCase().indexOf("youku") != -1) {
    } else if (moduleType.toLowerCase().indexOf("sequence") != -1) {
      // Achtung: Da wir kein Flash Fallback haben wird fÃ¼r das sequence modul hier eine HTML/JS LÃ¶sung genutzt

      var img = new Image();
      var appender = this.appender;
      img.src = this.asset;

      if (
        typeof this.bgColor != "undefined" &&
        this.bgColor.length == 7 &&
        this.bgColor.indexOf("#") != -1
      ) {
        $(HomepageBannerInstance.moduleAppender).css(
          "background-color",
          this.bgColor
        );
      }

      $(img).load(
        (function (instance) {
          var frameIndex = (currentRepeat = 0);
          var sx = (dx = 0);
          var sy = (dy = 0);
          var sw = (dw = instance.frameWidth);
          var sh = (dh = instance.frameHeight);
          var wrapId = "idm_stage_sequence_wrapper";
          var wrapElem = $("<div />")
            .attr("id", wrapId)
            .css({
              width: sw,
              height: sh,
              overflow: "hidden",
              position: "relative",
            });

          $(img).css({ position: "absolute", top: 0, left: 0 });
          wrapElem.append(img);

          $(appender).append(wrapElem);
          $(document).trigger(CONSTANTS.CUSTOM_EVENT.STARTED, {
            instance: instance,
          });

          $(img).hide().css("top", sy).show();
          frameIndex =
            frameIndex == instance.numFrames - 1 ? 0 : frameIndex + 1;
          sy = frameIndex * instance.frameHeight * -1;

          var to = Timeouts.add(
            window.setInterval(function () {
              $(img).hide().css("top", sy).show();
              sy = frameIndex * instance.frameHeight * -1;

              if (instance.repeats == 1) {
                frameIndex =
                  frameIndex == instance.numFrames ? 0 : frameIndex + 1;
              } else {
                frameIndex =
                  frameIndex == instance.numFrames - 1 ? 0 : frameIndex + 1;
              }

              if (frameIndex == 0) currentRepeat++;

              if (currentRepeat == instance.repeats) {
                frameIndex = currentRepeat = sy = 0;
                window.clearInterval(to);
                instance.bind();
                $(document).trigger(CONSTANTS.CUSTOM_EVENT.FINISHED, {
                  instance: instance,
                });
                delete img;
              }
            }, 1000 / instance.fps)
          );
        })(this)
      );
    } else {
      $(document).trigger(CONSTANTS.CUSTOM_EVENT.STARTED, {
        instance: moduleInstance,
      });
      $(document).trigger(CONSTANTS.CUSTOM_EVENT.FINISHED, {
        instance: moduleInstance,
      });
      // Keine SWF bzw. Flash Datei zum abspielen dieses Modules vorhanden
    }

    return false;
  },
});
var YoukuModule = Module.extend({
  init: function (options) {
    this._super(options);
    youkuModuleInstance = this;

    this.videoId = options.animation.find("videoId").text();
    this.startImage = options.animation.find("startImage").text();
    this.endImage = options.animation.find("endImage").text();
    //this.videoDuration = options.animation.find("videoDuration").text();

    this.backgroundImage = HomepageBannerInstance.youkuVideoBg;

    this.player = null; // Referenz auf youku player objekt
    this.timeoutAttempts = -1; // Wieviele versuche den Player zu laden bis zum timeout ?
    this.requestInterval = 300; // In welchem Interval (ms) soll geprÃ¼ft werden ob der player geladen wurde? (Haben keine Callback dafÃ¼r)

    this.deferrable = true;

    return this;
  },
  createHTML: function () {
    // Asynchrones Modul. Wenn ein CB ausgefÃ¼hrt wird zeigt die instanz nicht auf das aktuelle sondern auf das letzte objekt dieses Moduls. Demnach refreshen wir bei jederm aufruf der createHTML Methode den Pointer und setzten ihn auf die aktuelle instanz.
    youkuModuleInstance = this;
    var resolver = null;
    if (
      typeof arguments[0] !== "undefined" &&
      typeof arguments[0] === "object"
    ) {
      resolver = arguments[0];
    }
    $(this.appender).css(
      "background-image",
      "url(" + this.backgroundImage + ")"
    );

    // 1. Load The JS API
    var def_apiLoaded = $.Deferred(function () {
      idm_utils.debug("Lade Youku JS API");
      idm_utils.backupConsole();
    }).done(function () {
      idm_utils.debug("Youku JS API erfolgreich geladen");
      idm_utils.restoreConsole();

      // 2. Load the player
      var def_youkuPlayerLoaded = $.Deferred(function () {
        idm_utils.debug("Load Youku Player");

        // Done = Player geladen (Flash)
      })
        .done(function () {
          idm_utils.debug("Youku FLASH Player loaded");
          resolver.resolve();
          // Fail = Player geladen (HTML5)
        })
        .fail(function (e) {
          // 3.1 Player konnte nicht geladen werden weil der Server einen timeout schmeiÃt
          if (e === "timeout") {
            idm_utils.debug(
              "Flash Player konnte nicht geladen werden. Server Timed out."
            );
            resolver.reject();
            // 3.2 Player konnte nicht geladen werden weil der Client kein Flash hat
          } else if (e === "noFlash") {
            idm_utils.debug(
              "Flash Player konnte nicht geladen werden. Nutze alternativ den HTML5 Player"
            );

            var def_youkuPlayerReady = $.Deferred(function () {
              idm_utils.debug("Wait for HTML5 player for beeing ready");

              // Done = Player fertig geladen
            })
              .done(function () {
                idm_utils.debug("HTML5 Player ready");
                idm_utils.debug(
                  "Erstelle MP4 Video mit der Source: " +
                    youkuModuleInstance.getFallbackSource()
                );
                youkuModuleInstance.createHTML5Video(
                  youkuModuleInstance.getFallbackSource()
                );
                youkuModuleInstance.bind();
                resolver.resolve();

                // Fail = Timeout / Laden dauert zu lange
              })
              .fail(function () {
                idm_utils.debug("Timeout during HTML5 player load");
                resolver.reject();
              });

            youkuModuleInstance.handleDeferredeOnHTML5PlayerReady(
              def_youkuPlayerReady
            );
          } else {
            idm_utils.debug(
              "Player konnte nicht geladen werden. Weder wurde ein timeout geschmissen, noch hat der User kein Flash installiert"
            );
            resolver.reject();
          }
        });

      // Invoke Player load
      youkuModuleInstance.loadYoukuPlayer(def_youkuPlayerLoaded);
    });

    if (typeof YKU === "undefined") {
      $.when(this.loadScript()).done(function () {
        def_apiLoaded.resolve();
      });
    } else {
      def_apiLoaded.resolve();
    }

    return youkuModuleInstance;
  },
  createHTML5Video: function (mp4src) {
    var client = HomepageBannerInstance.client;

    // Ãberreste vom Youku Player entfernen
    $("#x-player").remove();

    // Erstellen des Video Elementes
    var elem = $("<video />").attr({
      autobuffer: true,
      autoplay: true,
      preload: "auto",
      id: "hpbvideo",
      class: "youkou-hp",
      tabindex: 0,
      type: "video/mp4",
      src: mp4src,
    });
    $(elem).prop("muted", true);

    // Kein Autoplay auf IOS GerÃ¤ten !
    if (client.usesIOS) {
      elem.css("position", "absolute");
      elem.removeAttr("autoplay");
    }

    // Damit die Navigation clickbar ist muss das Video verschoben werden damit es nicht unter der navi liegt
    // Nur auf IPhone (Bug bei Apple bekannt)
    if (client.usesIPhone) {
      elem.css("left", "-2000px");
    }

    // Beim "zoomen" hat das IPad einen strangen bug bei dem eine schwarze durchgezogene linie zwischen zwei divs erscheint.
    if (client.usesIPad) {
      $("#idm_stage_content").css("overflow", "hidden");
      elem.css({
        height: "321px",
        width: "966px",
        "margin-top": "-1px",
        "margin-bottom": "-1px",
      });
    }

    // Video einfÃ¼gen
    $(this.appender).append(elem);

    if (client.usesIOS || client.usesAndroid) {
      elem = $("<div />").attr("id", "videoContainer");

      if (client.usesIOS || client.usesAndroidTab) {
        elem.css("background-image", "url(" + this.backgroundImage + ")");
      }

      elem.append($("<div />").attr("id", "videoControls"));

      $(this.appender).append(elem);
    }

    // Opera Fix
    if (client.usesOpera) {
      $(this.appender).find("#hpbvideo").get(0).pause();
      $(this.appender).find("#hpbvideo").get(0).play();
    }

    return this;
  },
  loadYoukuPlayer: function (loaded) {
    //var ti;
    var player = new YKU.Player("idm_stage_content", {
      client_id: "c86b38899e39000f",
      vid: this.videoId,
      autoplay: true,
      paid: 1,
      show_related: false,
      events: {
        onPlayerReady: function () {
          player.hideControls(); //Hide Controls wenn player bereit ist
          loaded.resolve();
        },
        onPlayStart: function () {
          player.hideControls(); // Hide controls doesn't work proper. Maybe the "hide" command hasn't been applied.
          $(document).trigger(CONSTANTS.CUSTOM_EVENT.STARTED, {
            instance: youkuModuleInstance,
          });
          /*            
                    if(parseInt(youkuModuleInstance.videoDuration) > 0){
                        idm_utils.debug("Video stoppt autmatisch nach " + youkuModuleInstance.videoDuration + " Sekunden");
                        // H4ck/API Bug: Wenn commercials eingeblenden werden, wird die Zeit automatisch zur "currentTime" draufgerechnet.
                        // Hiermit sorgen wir dafÃ¼r, dass currentTime() beim starten des Videos tatsÃ¤chlich auf 0 steht.
                        player.seekTo(0);
                        ti = Timeouts.add(
                            window.setInterval(function () {
                                if( parseInt(player._player.currentTime()) > youkuModuleInstance.videoDuration){
                                    idm_utils.debug("Stop Video");
                                    $(youkuModuleInstance.appender).css("background-image", "url(" + youkuModuleInstance.endImage + ")");
                                    $("#youku-player").hide();
                                    Timeouts.stop(ti);
                                    $(document).trigger(CONSTANTS.CUSTOM_EVENT.FINISHED,{"instance":youkuModuleInstance});
                                }
                            }, HomepageBannerInstance.youkuVideoCheckInterval)
                        );
                    }
                    */
        },
        onPlayEnd: function () {
          /*if(typeof ti !== "undefined"){
                        Timeouts.stop(ti);
                    }*/
          $(youkuModuleInstance.appender).css(
            "background-image",
            "url(" + youkuModuleInstance.endImage + ")"
          );
          $("#youku-player").hide();
          $(document).trigger(CONSTANTS.CUSTOM_EVENT.FINISHED, {
            instance: youkuModuleInstance,
          });
        },
      },
    });
    youkuModuleInstance.player = player;
    // Auf Timeout Ã¼berprÃ¼fen
    this.handleDeferredOnFlashPlayerLoaded(loaded);

    // _h5player vorhanden = Es ist kein Flash verfÃ¼gbar -> reject
    //if(typeof player._h5player !== "undefined"){
    if (YKP.playerType != "flash") {
      loaded.reject("noFlash");
    } else {
      //H4CK: Youku API bietet keine MÃ¶glichkeit den wmode auf Transparent zu setzen. Deswegen mÃ¼ssen wir es dynamisch im Nachgang machen.
      //Hat leider zufolge, dass das Element bzw. das <OBJECT> 2x initialisiert werden muss.
      idm_utils.wmode2transparency();
    }

    return player;
  },
  loadScript: function () {
    $.ajaxSetup({
      cache: true,
      async: false,
    });
    return $.getScript(HomepageBannerInstance.youkuJsApi);
  },
  getFallbackSource: function () {
    var h5p = youkuModuleInstance.player._h5player;
    if (typeof h5p.src !== "undefined" && h5p.src != "") {
      return h5p.src;
    } else if (typeof h5p.video !== "undefined" && h5p.video.src != "") {
      return h5p.video.src;
    }
    return "";
  },
  checkHTML5ReadyState: function () {
    var h5p = youkuModuleInstance.player._h5player;
    if (typeof h5p.src !== "undefined") {
      return true;
    } else if (typeof h5p.video !== "undefined" && h5p.video.src != "") {
      return true;
    }
    return false;
  },
  handleDeferredeOnHTML5PlayerReady: function (def_youkuPlayerReady) {
    var currentAttempts = 0;
    var to = Timeouts.add(
      window.setInterval(function () {
        if (youkuModuleInstance.checkHTML5ReadyState()) {
          //window.clearInterval(to);
          Timeouts.stop(to);
          def_youkuPlayerReady.resolve();
          return;
        }
        if (
          ++currentAttempts >= youkuModuleInstance.timeoutAttempts &&
          youkuModuleInstance.timeoutAttempts != -1
        ) {
          //window.clearInterval(to);
          Timeouts.stop(to);
          def_youkuPlayerReady.reject();
          return;
        }
      }, youkuModuleInstance.requestInterval)
    );
    /*    for(var a in youkuModuleInstance.player._h5player.video){
                document.write(a + " : " + youkuModuleInstance.player._h5player.video[a]+"\n");
            }*/
  },
  handleDeferredOnFlashPlayerLoaded: function (def_youkuPlayerLoaded) {
    var currentAttempts = 0;
    var isReady = false;
    var to = Timeouts.add(
      window.setInterval(function () {
        isReady = def_youkuPlayerLoaded.state() === "resolved";
        if (isReady) {
          //window.clearInterval(to);
          Timeouts.stop(to);
          def_youkuPlayerLoaded.resolve();
          return;
        }
        if (
          ++currentAttempts >= youkuModuleInstance.timeoutAttempts &&
          youkuModuleInstance.timeoutAttempts != -1
        ) {
          //window.clearInterval(to);
          Timeouts.stop(to);
          def_youkuPlayerLoaded.reject("timeout");
          return;
        }
      }, youkuModuleInstance.requestInterval)
    );
  },
});

var YoutubeModule = Module.extend({
  init: function (options) {
    this._super(options);

    youtubeModuleInstance = this;

    this.videoId = options.animation.find("videoId").text();
    this.startImage = options.animation.find("startImage").text();
    this.endImage = options.animation.find("endImage").text();
    this.sound = options.animation.find("sound").text();

    this.videoOpts = null;

    return this;
  },
  createHTML: function () {
    // Asynchrones Modul. Wenn ein CB ausgefÃ¼hrt wird zeigt die instanz nicht auf das aktuelle sondern auf das letzte objekt dieses Moduls. Demnach refreshen wir bei jederm aufruf der createHTML Methode den Pointer und setzten ihn auf die aktuelle instanz.
    youtubeModuleInstance = this;

    $("#idm_stage_content").css(
      "background-image",
      "url(" + this.startImage + ")"
    );

    var def_apiLoaded = $.Deferred(function () {
      idm_utils.debug("Lade Youtube JS API");
    }).done(function () {
      idm_utils.debug("Youtube JS API geladen");
      // Erstellen eines Wrappers zum einbinden des Youtube Videos
      $("#idm_stage_content").append(
        $("<div />").attr({
          id: "hpbvideo",
        })
      );

      idm_utils.debug("Erstelle Player");
      var player = youtubeModuleInstance.Player.create();
    });

    // Lade Youtube JS API
    if (typeof YT === "undefined") {
      $.when(this.loadScript()).done(function () {
        // API geladen, die Youtube API stellt uns im Window Objekt eine "onYouTubeIframeAPIReady" zur VerfÃ¼gung
        // Da wir uns nicht aus dem Kontext rausbewegen wollen checken wir auf vorhanden sein des Objektes
        window.setInterval(function () {
          if (typeof YT.Player === "function") {
            def_apiLoaded.resolve();
          }
        }, 100);
      });
    } else {
      def_apiLoaded.resolve();
    }

    this.bind();
    return this;
  },
  Player: {
    create: function () {
      var client = HomepageBannerInstance.client;
      var player = new YT.Player("hpbvideo", {
        height: HomepageBannerInstance.size.height,
        width: HomepageBannerInstance.size.width,
        playerVars: {
          enablejsapi: 1,
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          showinfo: 0,
          wmode: "transparent",
          rel: 0,
        },
        videoId: youtubeModuleInstance.videoId,
        events: {
          onReady: function () {
            if (youtubeModuleInstance.sound == "off") {
              player.mute();
            }
          },
          onStateChange: function (e) {
            if (client.usesIPhone) {
              if (e.data == YT.PlayerState.PLAYING) {
                $("#hpbvideo").show();
                $("#idm_stage_content").css("background-image", "none");
                $(document).trigger(CONSTANTS.CUSTOM_EVENT.STARTED, {
                  instance: youtubeModuleInstance,
                });
              }
              if (
                e.data == YT.PlayerState.ENDED ||
                e.data == YT.PlayerState.PAUSED
              ) {
                $("#idm_stage_content")
                  .html("")
                  .css(
                    "background-image",
                    "url(" + youtubeModuleInstance.endImage + ")"
                  );
                $(document).trigger(CONSTANTS.CUSTOM_EVENT.FINISHED, {
                  instance: youtubeModuleInstance,
                });
              }
            } else {
              if (e.data == YT.PlayerState.PAUSED) {
                player.playVideo();
              }
              if (e.data == YT.PlayerState.PLAYING) {
                var nExpirationDuration = player.getDuration() * 1000 - 300;
                var ti = Timeouts.add(
                  window.setTimeout(function () {
                    var $iframe = $("#idm_stage_content").find("iframe");
                    var $video = $("#idm_stage_content").find("video");
                    if ($iframe.length > 0) {
                      $iframe.remove();
                    } else if ($video.length > 0) {
                      $video.remove();
                    } else {
                      $("#idm_stage_content").html("");
                    }
                    $(document).trigger(CONSTANTS.CUSTOM_EVENT.FINISHED, {
                      instance: youtubeModuleInstance,
                    });
                    Timeouts.stop(ti);
                  }, nExpirationDuration)
                );
                $("#hpbvideo").show();
                $("#idm_stage_content").css(
                  "background-image",
                  "url(" + youtubeModuleInstance.endImage + ")"
                );
                $(document).trigger(CONSTANTS.CUSTOM_EVENT.STARTED, {
                  instance: youtubeModuleInstance,
                });
              }
              if (e.data == YT.PlayerState.ENDED) {
                alert("ENDED");
                player.seekTo(player.getDuration());
                var $iframe = $("#idm_stage_content").find("iframe");
                var $video = $("#idm_stage_content").find("video");
                if ($iframe.length > 0) {
                  $iframe.remove();
                } else if ($video.length > 0) {
                  $video.remove();
                } else {
                  $("#idm_stage_content").html("");
                }
                $(document).trigger(CONSTANTS.CUSTOM_EVENT.FINISHED, {
                  instance: youtubeModuleInstance,
                });
              }
            }
          },
        },
      });

      return player;
    },
  },
  loadScript: function () {
    $.ajaxSetup({
      cache: true,
      async: false,
    });
    return $.getScript(HomepageBannerInstance.youtubeApi);
  },
});
var KronestvModule = Module.extend({
  init: function (options) {
    this._super(options);

    kronesTvModuleInstance = this;

    this.videoId = options.animation.find("videoId").text();
    this.forceFlash =
      options.animation.find("forceFlash").text() == "true" &&
      HomepageBannerInstance.client.supportsFlash;
    this.startImage = options.animation.find("startImage").text();
    this.endImage = options.animation.find("endImage").text();

    this.videoOpts = null;
    this.deferrable = true;

    return this;
  },
  createHTML: function () {
    // Asynchrones Modul. Wenn ein CB ausgefÃ¼hrt wird zeigt die instanz nicht auf das aktuelle sondern auf das letzte objekt dieses Moduls. Demnach refreshen wir bei jederm aufruf der createHTML Methode den Pointer und setzten ihn auf die aktuelle instanz.
    //kronesTvModuleInstance = this;
    kronesTvModuleInstance =
      HomepageBannerInstance.modules[
        HomepageBannerInstance.player.currentItem.get()
      ];

    var resolver = null;
    if (
      typeof arguments[0] !== "undefined" &&
      typeof arguments[0] === "object"
    ) {
      resolver = arguments[0];
    }

    $.when(this.getRemoteData())
      .done(function () {
        var client = HomepageBannerInstance.client;
        resolver.resolve();

        // Wir mÃ¼ssen hier tatsÃ¤chlich abfangen ob der Client MP4 abspielen kann, da die kronestv API uns kein OGG / webm liefert.
        if (
          !client.supportsMV4 || // KTV liefert MP4 => Wir brauchen UNBDINGT MP4 Support
          kronesTvModuleInstance.forceFlash || // Wenn die Eigenschaft "Flash erzwingen" auf true gesetzt ist
          client.usesIE || // IE'S verfharen alle komplett anders mit <video> tags. Flash ist hier eine sichere alternative
          client.usesAndroidTab // Some Android Tablets haben einen Bug beim laden eines MP4's durch eine externe Quelle
        )
          return kronesTvModuleInstance.createFlashFallback();

        // Erstellen des Video Elementes
        // Immer MP4 weil KTV ein MP4 liefert.
        var elem = $("<video />").attr({
          autobuffer: true,
          autoplay: true,
          id: "hpbvideo",
          preload: "auto",
          tabindex: 0,
          width: HomepageBannerInstance.size.width,
          height: HomepageBannerInstance.size.height,
          type: "video/mp4",
          poster: "",
          src:
            kronesTvModuleInstance.videoOpts.videoURL +
            kronesTvModuleInstance.videoOpts.mp4_270p,
        });

        $(elem).prop("muted", true);

        elem.append(
          $("<source />").attr({
            type: "video/mp4",
            src:
              kronesTvModuleInstance.videoOpts.videoURL +
              kronesTvModuleInstance.videoOpts.mp4_270p,
          })
        );

        // Kein Autoplay auf IOS GerÃ¤ten !
        if (client.usesIOS) {
          elem.css("position", "absolute");
          elem.removeAttr("autoplay");
        }

        // Damit die Navigation clickbar ist muss das Video verschoben werden damit es nicht unter der navi liegt
        // Nur auf IPhone (Bug bei Apple bekannt)
        if (client.usesIPhone) {
          elem.css("left", "-2000px");
        }

        // Beim "zoomen" hat das IPad einen strangen bug bei dem eine schwarze durchgezogene linie zwischen zwei divs erscheint.
        if (client.usesIPad) {
          $("#idm_stage_content").css("overflow", "hidden");
          elem.css({
            height: "321px",
            width: "966px",
            "margin-top": "-1px",
            "margin-bottom": "-1px",
          });
        }

        elem.css("display", "none");
        $(kronesTvModuleInstance.appender).append(elem);
        window.setTimeout(function () {
          elem.show();
        }, 700);

        if (client.usesIOS || client.usesAndroid) {
          elem = $("<div />").attr("id", "videoContainer");

          if (client.usesIOS || client.usesAndroidTab) {
            elem.css(
              "background-image",
              "url(" + kronesTvModuleInstance.startImage + ")"
            );
          }

          elem.append($("<div />").attr("id", "videoControls"));

          $(kronesTvModuleInstance.appender).append(elem);
        }

        // Opera Fix
        if (client.usesOpera) {
          $(kronesTvModuleInstance.appender).find("#hpbvideo").get(0).pause();
          $(kronesTvModuleInstance.appender).find("#hpbvideo").get(0).play();
        }

        kronesTvModuleInstance.bind();

        return kronesTvModuleInstance;
      })
      .fail(function () {
        resolver.reject();
      });
  },

  getRemoteData: function () {
    // Krones TV Daten werden via AJAX angefragt -> Synchron
    $.ajaxSetup({ async: false });

    return $.getJSON(
      HomepageBannerInstance.kronesTvApi + "?cb=?",
      { id: this.videoId },
      function (data) {
        idm_utils.debug(
          "KronesTV Module - video with given id " +
            kronesTvModuleInstance.videoId +
            " and remote URL : " +
            HomepageBannerInstance.kronesTvApi +
            " successfully loaded"
        );
        kronesTvModuleInstance.videoOpts = data;
      }
    ).fail(function () {
      idm_utils.debug(
        "KronesTV Module - Loading of video with given id " +
          kronesTvModuleInstance.videoId +
          " and remote URL " +
          HomepageBannerInstance.kronesTvApi +
          " failed"
      );
    });
  },
});
var VideoModule = Module.extend({
  init: function (options) {
    this._super(options);
    videoModuleInstance = this;

    this.asset = options.animation.find("asset").text();
    this.videoM4V = options.animation.find("videoM4V").text();
    this.videoOGV = options.animation.find("videoOGV").text();
    this.startImage = options.animation.find("startImage").text();
    this.endImage = options.animation.find("endImage").text();
    /* ForceFlash = Flash erzwingen. Wenn allerdings vom Client kei Flash unterstÃ¼tzt wird bringt uns das erzwingen nichts und es soll trotzdem HTML5 genutzt werden. Demenstprechend setzen wir forceFlsah immer auf false wenn kein FlashSupport Seitens der Clients gegeben ist.*/
    this.forceFlash =
      options.animation.find("forceFlash").text() == "true" &&
      HomepageBannerInstance.client.supportsFlash;
    return this;
  },

  createHTML: function () {
    var client = HomepageBannerInstance.client;
    if (!client.supportsVideo || this.forceFlash || client.usesIE)
      return this.createFlashFallback();

    // Erstellen des Video Elementes
    var elem = $("<video />").attr({
      autobuffer: true,
      autoplay: true,
      preload: "auto",
      id: "hpbvideo",
      tabindex: 0,
    });
    //$(elem).prop("muted",true);

    // Kein Autoplay auf IOS GerÃ¤ten !
    if (client.usesIOS) {
      elem.css("position", "absolute");
      elem.removeAttr("autoplay");
    }

    // Damit die Navigation clickbar ist muss das Video verschoben werden damit es nicht unter der navi liegt
    // Nur auf IPhone (Bug bei Apple bekannt)
    if (client.usesIPhone) {
      elem.css("left", "-2000px");
    }

    // Beim "zoomen" hat das IPad einen strangen bug bei dem eine schwarze durchgezogene linie zwischen zwei divs erscheint.
    if (client.usesIPad) {
      $("#idm_stage_content").css("overflow", "hidden");
      elem.css({
        height: "321px",
        width: "966px",
        "margin-top": "-1px",
        "margin-bottom": "-1px",
      });
    }

    if (client.supportsMV4) {
      elem.append(
        $("<source />").attr({
          type: "video/mp4",
          src: this.videoM4V,
        })
      );
    }

    if (client.supportsOGG) {
      elem.append(
        $("<source />").attr({
          type: "video/ogg",
          src: this.videoOGV,
        })
      );
    }

    $(this.appender).append(elem);

    if (client.usesIOS || client.usesAndroid) {
      elem = $("<div />").attr("id", "videoContainer");

      if (client.usesIOS || client.usesAndroidTab) {
        elem.css("background-image", "url(" + this.startImage + ")");
      }

      elem.append($("<div />").attr("id", "videoControls"));

      $(this.appender).append(elem);
    }

    // Opera Fix
    if (client.usesOpera) {
      $(this.appender).find("#hpbvideo").get(0).pause();
      $(this.appender).find("#hpbvideo").get(0).play();
    }

    this.bind();
    return this;
  },
});
var ImageModule = Module.extend({
  init: function (options) {
    this._super(options);

    imageModuleInstance = this;

    this.showInfoboxAt = CONSTANTS.INFOBOX_SHOW.DURING;
    this.asset = options.animation.find("asset").text();

    return this;
  },
  createHTML: function () {
    // Don't trigger "STARTED"-Event. It get's triggered by the Player on start
    //$(document).trigger(CONSTANTS.CUSTOM_EVENT.STARTED,{"instance":this});
    var elem = $("<img />").attr("id", "k-image");

    $("#idm_stage_content").append(elem);
    $("#k-image")
      .load(function (src) {
        idm_utils.debug(
          "Loading Image for ImageModule - size: " +
            HomepageBannerInstance.size.width +
            "x" +
            HomepageBannerInstance.size.height
        );
        $(this).attr({
          width: HomepageBannerInstance.size.width,
          height: HomepageBannerInstance.size.height,
        });
      })
      .attr("src", this.asset);

    // Prinzipiell kÃ¶nnten wir "FINISHED" direkt nach dem anzeigen des Bildes aufrufen weil nichts bagespielt werden muss und somit der Abspiel-
    // Vorgang im Prinzip beendet ist. Da der der Process Manager allerdings aus performance technischen grÃ¼nden nur alle 3ms nach neuen
    // Ereignissen schaut, kann es unter UmstÃ¤nden dazu kommen, dass das Laden- und Anzeigen des Moduls Zweimal nacheinander stattfindet.
    // Dementsprechend wird das FINISHED Event, erst nach 5ms getriggert (Damit kÃ¶nnen wir sicherstellen, dass der Prozessmanager die
    // Ereignisse in der Queue schon ausgefÃ¼hrt hat.
    var processManagerTimer = Timeouts.add(
      window.setTimeout(function () {
        Timeouts.stop(processManagerTimer);
        $(document).trigger(CONSTANTS.CUSTOM_EVENT.FINISHED, {
          instance: imageModuleInstance,
        });
      }, 50)
    );

    this.bind();

    return this;
  },
});
var HTML5AnimationModule = Module.extend({
  init: function (options) {
    this._super(options);

    html5animationInstance = this;

    this.asset = options.animation.find("asset").text();
    this.texts = Array(
      options.animation.find("text1").text(),
      options.animation.find("text2").text(),
      options.animation.find("text3").text(),
      options.animation.find("text4").text(),
      options.animation.find("text5").text()
    );

    this.animationStartClass = "animate";
    this.animationFinishedClass = "finished";
    this.animationFinishedInterval = 500;
    return this;
  },
  createHTML: function () {
    var client = HomepageBannerInstance.client;
    if (this.forceFlash || !client.supportsHTML5Animation)
      return this.createFlashFallback();

    // HTML erzeugen und der Stage hinzufÃ¼gen
    var html =
      '\
            <div class="equitherm">\
                <div class="labels">\
                    <span id="text1">{TEXT1}</span>\
                    <span id="text2">{TEXT2}</span>\
                    <span id="text3">{TEXT3}</span>\
                    <span id="text4">{TEXT4}</span>\
                    <span id="text5">{TEXT5}</span>\
                </div>\
                <div class="circleanimation ">\
                    <div style="" class="counterbox">\
                        <span id="counter">0</span>%\
                    </div>\
                    <img src="/img/html5animationFiles/assets/krones_anim_40_1.png" class="gwd-img-xxse gwd-gen-8jk6gwdanimation">\
                    <img src="/img/html5animationFiles/assets/krones_anim_0_1.png" class="gwd-img-zeeh gwd-gen-tulcgwdanimation">\
                </div>\
                <div class="layer"></div>\
                <div class="layertxt"></div>\
                <div class="finished"></div>\
                <div class="animationControl1"></div>\
                <div class="animationControl2"></div>\
                <div class="animationControl3"></div>\
            </div>';

    // Texte als leerstring setzten wenn in der XML nicht definiert und mit Platzhalter ersetzten
    var identifier;
    for (var i = 0; i < this.texts.length; i++) {
      if (
        typeof this.texts[i] === "undefined" ||
        $.trim(this.texts[i]).length === 0
      ) {
        this.texts[i] = "";
        idm_utils.debug("HTML5Animation Module: " + (i + 1) + " nicht gesetzt");
      }

      identifier = "{TEXT" + (i + 1) + "}";
      html = html.replace(identifier, this.texts[i]);
    }

    $("#idm_stage_content").html(html);

    // Animation starten
    $(".equitherm").addClass(this.animationStartClass);

    // Der Stage sagen, dass die Animation gestartet hat
    $(document).trigger(CONSTANTS.CUSTOM_EVENT.STARTED, { instance: this });

    // Counter
    this.handleCounter();

    // Finished listener: Anhand an der Sichtbarkeit eines definierten Elementes Ã¼berprÃ¼fen ob die Animation zu ende ist
    var finishedListener = Timeouts.add(
      window.setInterval(function () {
        var elem = $("." + html5animationInstance.animationFinishedClass);
        if (elem.length != 1) {
          Timeouts.stop(finishedListener);
          idm_utils.debug(
            "HTML5Animation Module: Finisher Element nicht gefunden. Animation gestoppt"
          );
          $(document).trigger(CONSTANTS.CUSTOM_EVENT.FINISHED, {
            instance: html5animationInstance,
          });
        } else {
          idm_utils.debug(
            "HTML5Animation Module: IntervalÃ¼berprÃ¼fung fÃ¼r finisher Element gestartet"
          );
          if (parseInt(elem.css("opacity")) === 0) {
            Timeouts.stop(finishedListener);
            $(document).trigger(CONSTANTS.CUSTOM_EVENT.FINISHED, {
              instance: html5animationInstance,
            });
          }
        }
      }, this.animationFinishedInterval)
    );

    this.bind();

    return this;
  },
  handleCounter: function () {
    var counter = parseInt($("#counter").text());
    var phase = 1;
    var ran = false;
    var a1 = $(".animationControl1");
    var a2 = $(".animationControl2");
    var a3 = $(".animationControl3");
    var timer, timer2;

    timer = Timeouts.add(
      window.setInterval(function () {
        if (a1.css("opacity") > 0.5 && !ran && phase == 1) {
          ran = true;
          timer2 = Timeouts.add(
            window.setInterval(function () {
              if (phase == 1) {
                if (++counter == 20) {
                  phase = 2;
                  ran = false;
                }
                $("#counter").text(counter);
              }
            }, 80)
          );
        }

        if (a2.css("opacity") > 0.5 && !ran && phase == 2) {
          Timeouts.stop(timer2);
          ran = true;
          timer2 = Timeouts.add(
            window.setInterval(function () {
              if (phase == 2) {
                if (++counter == 30) {
                  phase = 3;
                  ran = false;
                }
                $("#counter").text(counter);
              }
            }, 90)
          );
        }

        if (a3.css("opacity") > 0.5 && !ran && phase == 3) {
          Timeouts.stop(timer2);
          ran = true;
          timer2 = Timeouts.add(
            window.setInterval(function () {
              if (phase == 3) {
                if (++counter == 40) {
                  Timeouts.stop(timer);
                  Timeouts.stop(timer2);
                }
                $("#counter").text(counter);
              }
            }, 90)
          );
        }
      }, 10)
    );

    /* var startCounter = function(interval) {
            if (typeof interval === "undefined"){
                idm_utils.debug("HTML5Animation Module: Fehler: counterInterval ohne Interval aufgerufen.");
            }
            counterInterval = Timeouts.add(
                window.setInterval(function() {
                    increaseCounter();
                }, interval)
            );
        }
        var increaseCounter = function(){
            //document.getElementById("counter").innerHTML = counter = document.getElementById("counter").innerHTML*1 + 1;
            switch(counter) {
                case 20:
                    window.setTimeout(function() {
                        startCounter(120)
                    },1200)
                    Timeouts.stop(counterInterval);
                    break;                    
                case 30:
                    window.setTimeout(function() {
                        startCounter(95)
                    },3100)
                    Timeouts.stop(counterInterval);
                    break;  
                case 40:
                    Timeouts.stop(counterInterval);
                default: 
                    break;
            }
        }
        window.setTimeout(function() {
            startCounter(80)
        },2800)*/
  },
});
var CanvasHandler = Class.extend({
  init: function (options) {
    if (typeof CanvasModuleInstance !== "undefined")
      throw "Only one instance of 'Canvas Module' can be initialized.";

    CanvasModuleInstance = this;
    this.originalSize = options.size;
    this.size = options.size;
    this.canvasId = options.canvasId;
    this.canvasSelector = "#" + this.canvasId;
    this.registeredModules = [];
    this.context = null;

    idm_utils.debug("Canvas Handler initialisiert");
  },

  createCanvas: function (appender, canvasSize) {
    if ($(this.canvasSelector).length > 0) throw "Canvas already created";

    //Da wir nur eine Singleton Instanz haben und jedes Modul die grÃ¶Ãe fÃ¼r den gebrauch anpassen kann setzen wir die grÃ¶Ãe bei jedem erstellen eines neuen Canvas HTML Objektes zurÃ¼ck
    this.size = this.originalSize;

    if (typeof canvasSize !== "undefined") this.size = canvasSize;
    var canvas = $(document.createElement("canvas")).attr({
      id: "" + this.canvasId,
      width: this.size.width,
      height: this.size.height,
    });

    $(appender).append(canvas);
    idm_utils.debug("Canvas '#" + this.canvasId + "' erstellt");
    this.getContext();
  },
  getContext: function () {
    this.context = $(this.canvasSelector)[0].getContext("2d");
    return this.context;
  },

  registerSubModule: function (options) {
    var subModuleIndex = this.registeredModules.length;
    var subModuleName = options.animation.find("subModule").text();
    var subModuleInstance = new SubModules[subModuleName](
      options,
      subModuleIndex,
      this
    );
    this.registeredModules.push(subModuleInstance);
    idm_utils.debug(
      "Ein " +
        subModuleName +
        " wurde registiert (Submodule Index: " +
        subModuleIndex +
        ")."
    );
    return subModuleInstance;
  },
});
var SubModules = {
  ParticleModule: Module.extend({
    init: function (options, subModuleIndex, canvasInstance) {
      this._super(options);

      ParticleModuleInstance = this;

      // Normalerweise kÃ¶nnten wir Farbe, Hintergrundbild etc. konfigurierbar machen.
      // Dazu wÃ¤re allerdings ein etwas grÃ¶Ãerer Aufwand und Zeit erforderlich die wir nicht haben.
      // Und da jedes Partikel Modul das selbe Hintergrundbild bzw. Farben verwendet kÃ¶nnen diese hier festgelegt werden.
      this.colors = ["#203351", "#2F51A3", "#7C9CDD"]; // Array mit HEX Werten fÃ¼r die Farben der Partikel
      this.startAfter = 2000; // Explode beginnt nach xx ms
      this.explodeSpeed = 0.15; // Je weniger desto schneller
      this.implodeSpeed = 0.15; // Je mehr desto schneller
      this.showExplodeMode = 1000; // Wie lange sollen die explodierten Particle bevor sie "zurÃ¼ckfahren" angezeigt wetrden
      this.showEndMode = 1000; // Wie lange sollen die Particle, nachdem sich die explodierten Partikel wieder zurÃ¼ckgefahren haben angezeigt werden bis das nÃ¤chste Label kommt
      this.textColor = "#37424a"; //  HEX Wert fÃ¼r die Farbe der anzuzeigendes Labels

      this.states = {
        EXPLODE: "explode",
        DRAW: "draw",
        REBUILD: "rebuild",
        OUT: "out",
        COMPLETE: "complete",
        IN: "in",
      };

      this.canvasInstance = canvasInstance;
      this.subModuleIndex = subModuleIndex;
      this.showInfoboxAt = CONSTANTS.INFOBOX_SHOW.AFTER;

      this.background = options.animation.find("background").text();
      /* ForceFlash = Flash erzwingen. Wenn allerdings vom Client kei Flash unterstÃ¼tzt wird bringt uns das erzwingen nichts und es soll trotzdem HTML5 genutzt werden. Demenstprechend setzen wir forceFlsah immer auf false wenn kein FlashSupport Seitens der Clients gegeben ist.*/
      this.forceFlash =
        options.animation.find("forceFlash").text() == "true" &&
        HomepageBannerInstance.client.supportsFlash;

      this.labels = options.animation.find("labels").text().split(",");
      this.start = {
        x: options.animation.find("startXPoints").text().split(","),
        y: options.animation.find("startYPoints").text().split(","),
      };
      this.end = {
        x: options.animation.find("endXPoints").text().split(","),
        y: options.animation.find("endYPoints").text().split(","),
      };

      this._currentState = null;
      this.currentState = {
        set: function (val) {
          this._currentState = val;
          idm_utils.debug("Partikel System Modus geÃ¤ndert: " + val);
        },
        get: function () {
          return this._currentState;
        },
      };

      if (
        this.start.x.length != this.start.y.length ||
        this.start.x.length != this.end.x.length ||
        this.start.x.length != this.end.y.length ||
        this.labels.length < 2
      ) {
        throw "Misconfiguration for ParticleModule given. Start and End Parameters needs to have the same amount of values and the labels there need to be be exactly 3 labels";
      }
    },

    createHTML: function () {
      // ToDo: Client als Ãbergabeparameter initialisieren und nicht Ã¼ber die globale Variable auf die Client Instanz zugreifen
      var client = HomepageBannerInstance.client;
      if (!client.supportsVideo || this.forceFlash)
        return this.createFlashFallback();

      // Canvas der BÃ¼hne hinzufÃ¼gen
      idm_utils.debug("Erstelle Canvas fÃ¼r das Partikel Modul");
      this.canvasInstance.createCanvas(this.appender);

      // Prepare, draw starting particle, parse and render
      idm_utils.debug("Standartwerte fÃ¼r das Partikel Modul werden gesetzt");
      this.prepare();

      // Nach 2 Sekunden den State auf "Explodieren" setzten. Durch das setzten wird das Starten der Animation getriggert
      var startTimer = Timeouts.add(
        window.setInterval(function () {
          idm_utils.debug("Starte transformation (Partikel)");
          Timeouts.stop(startTimer);
          ParticleModuleInstance.currentState.set(
            ParticleModuleInstance.states.EXPLODE
          );
        }, this.startAfter)
      );

      this.explodeTimer = Timeouts.add(
        window.setInterval(function () {
          ParticleModuleInstance.animate();
        }, this.explodeSpeed * 277)
      );
    },

    prepare: function () {
      // Initialwerte setzen
      this.count = 0;
      this.numParticles = 0;
      this.particles = [];
      this.text = null;
      this.explodeTimer = null;

      // Hintergrundgrafik einblenden
      if (this.background != "") {
        $("#idm_stage_content").css(
          "background-image",
          "url(" + this.background + ")"
        );
      }

      // Anzahl der Particle auslesen (-1 weil index = 0)
      this.numParticles = this.start.x.length - 1;

      // Text Objekt mit dem ersten anzuzeigenden Label erstellen
      this.text = this.createText({
        text: this.labels[0],
        color: this.textColor,
      });

      // Den aktuellen Status auf "Zeichnen" setzten.
      this.currentState.set(this.states.DRAW);

      // Alle Particle mit Informationen in ein Array packen
      for (i = 0; i <= this.numParticles; i++) {
        this.particles.push(
          this.createParticle({
            startx: this.start.x[i],
            starty: this.start.y[i],
            endx: this.end.x[i],
            endy: this.end.y[i],
            size: 5 * Math.random() + 1,
            color: this.colors[parseInt(Math.random() * this.colors.length)],
          })
        );
      }
    },

    animate: function () {
      var pmi = ParticleModuleInstance;

      this.canvasInstance
        .getContext()
        .clearRect(
          0,
          0,
          this.canvasInstance.size.width,
          this.canvasInstance.size.height
        );

      this.text.render(function () {
        Timeouts.stop(pmi.explodeTimer);
        $(document).trigger(CONSTANTS.CUSTOM_EVENT.FINISHED, {
          instance: ParticleModuleInstance,
        });
      });

      for (var i = 0; i <= pmi.numParticles; i++) {
        var currentParticle = pmi.particles[i];
        switch (pmi.currentState.get()) {
          case pmi.states.DRAW:
            currentParticle.draw();
            break;

          case pmi.states.EXPLODE:
            currentParticle.render(function () {
              if (pmi.count++ == pmi.numParticles) {
                pmi.text.currentText = pmi.labels[1];

                var ti = Timeouts.add(
                  window.setInterval(function () {
                    Timeouts.stop(ti);

                    pmi.currentState.set(pmi.states.REBUILD);
                    for (var c = pmi.numParticles; 0 <= c; c--) {
                      pmi.particles[c].update();
                    }
                  }, pmi.showExplodeMode)
                );
              }
            });
            break;

          case pmi.states.REBUILD:
            currentParticle.render(function () {
              if (pmi.count-- == 0) {
                pmi.text.currentText = pmi.labels[2];

                var ti = Timeouts.add(
                  window.setInterval(function () {
                    Timeouts.stop(ti);
                    pmi.text.update();
                  }, pmi.showEndMode)
                );
              }
            });

            break;
        }
      }
    },

    createParticle: function (options) {
      var particle = {};
      particle.start = {};
      particle.end = {};
      particle.target = {};
      var context = ParticleModuleInstance.canvasInstance.getContext();
      particle.x = particle.y = null;

      particle.state = ParticleModuleInstance.states.IN;
      particle.start.x = 260 + parseFloat(options.startx);
      particle.start.y = 161 + parseFloat(options.starty);
      particle.end.x = 260 + parseFloat(options.endx);
      particle.end.y = 161 + parseFloat(options.endy);
      particle.originalSize = particle.size = options.size;
      particle.size2 = 0.5 * particle.size;
      particle.color = options.color;
      particle.rotation = 90 * Math.random() * (Math.PI / 180);
      particle.scale = parseInt(15 * Math.random() + 8);
      particle.speed = ParticleModuleInstance.implodeSpeed;
      particle.target.x =
        particle.start.x + 150 * Math.random() * (1 > options.startx ? -1 : 1);
      particle.target.y =
        particle.start.y + 50 * Math.random() * (1 > options.starty ? -1 : 1);

      particle.draw = function () {
        particle.x = particle.start.x;
        particle.y = particle.start.y;
        context.save();
        context.translate(particle.start.x, particle.start.y);
        context.rotate(particle.rotation);
        context.fillStyle = particle.color;
        context.fillRect(
          -particle.size2,
          -particle.size2,
          particle.size,
          particle.size
        );
        context.restore();
      };

      particle.render = function (fn) {
        var b = particle.target.x - particle.x;
        var c = particle.target.y - particle.y;
        var h = particle.scale - particle.size;

        particle.x += b * particle.speed;
        particle.y += c * particle.speed;
        particle.size += h * particle.speed;
        context.save();
        context.translate(particle.x, particle.y);
        context.rotate(particle.rotation);
        context.fillStyle = particle.color;
        context.fillRect(
          -particle.size2,
          -particle.size2,
          particle.size,
          particle.size
        );
        context.restore();

        b < 1 &&
          c < 1 &&
          h < 1 &&
          (particle.state == ParticleModuleInstance.states.OUT
            ? ((particle.state = ParticleModuleInstance.states.IN), fn())
            : ParticleModuleInstance.states.IN == particle.state && fn());
      };

      particle.update = function () {
        particle.speed = ParticleModuleInstance.implodeSpeed;
        particle.target.x = particle.end.x;
        particle.target.y = particle.end.y;
        particle.scale = particle.originalSize;
      };

      particle.draw();
      return particle;
    },

    createText: function (options) {
      var text = {};
      text.start = {};
      text.target = {};

      var context = ParticleModuleInstance.canvasInstance.getContext();
      text.x = text.y = null;

      text.start.x = 630;
      text.start.y = 10;
      text.speed = 0.1;
      text.target.y = 161;
      text.color = options.color;
      text.state = ParticleModuleInstance.states.IN;
      text.currentText = options.text;
      text.a = text.alphaTarget = 1;

      text.draw = function () {
        text.x = text.start.x;
        text.y = text.start.y;
        context.save();
        context.font = "18pt TheSansLP5Plain";
        context.fillStyle = text.color;
        context.translate(text.start.x, text.start.y);
        context.fillText(text.currentText, 0, 0);
        context.restore();
      };

      text.update = function () {
        text.target.y = 300;
        text.alphaTarget = 0;
        text.state = ParticleModuleInstance.states.OUT;
      };

      text.render = function (fn) {
        var b = text.target.y - text.y;
        text.y += b * text.speed;
        text.a += (text.alphaTarget - text.a) * text.speed;
        context.save();
        context.font = "18pt TheSansLP5Plain";
        context.fillStyle = "rgba(55, 66, 74," + text.a + ")";
        context.translate(text.x, text.y);
        context.fillText(text.currentText, 0, 0);
        context.restore();
        text.state == ParticleModuleInstance.states.OUT &&
          b < 1 &&
          ((text.state = ParticleModuleInstance.states.COMPLETE), fn());
      };

      text.draw();
      return text;
    },
  }),

  SequenceModule: Module.extend({
    init: function (options, subModuleIndex, canvasInstance) {
      this._super(options);
      this.canvasInstance = canvasInstance;
      this.subModuleIndex = subModuleIndex;
      //this.showInfoboxAt = CONSTANTS.INFOBOX_SHOW.DURING;

      this.asset = options.animation.find("asset").text();
      this.frameWidth = parseInt(options.animation.find("frameWidth").text());
      this.frameHeight = parseInt(options.animation.find("frameHeight").text());
      this.numFrames = parseInt(options.animation.find("numFrames").text());
      this.repeats = parseInt(options.animation.find("repeats").text());
      this.fps = parseFloat(options.animation.find("fps").text());
      this.bgColor = options.animation.find("bgColor").text();

      /* ForceFlash = Flash erzwingen. Wenn allerdings vom Client kei Flash unterstÃ¼tzt wird bringt uns das erzwingen nichts und es soll trotzdem HTML5 genutzt werden. Demenstprechend setzen wir forceFlsah immer auf false wenn kein FlashSupport Seitens der Clients gegeben ist.*/
      this.forceFlash =
        options.animation.find("forceFlash").text() == "true" &&
        HomepageBannerInstance.client.supportsFlash;

      this.canvasSize = {
        width: this.frameWidth,
        height: this.frameHeight,
      };
    },
    createHTML: function () {
      // ToDo: Client als Ãbergabeparameter initialisieren und nicht Ã¼ber die globale Variable auf die Client Instanz zugreifen
      var client = HomepageBannerInstance.client;
      if (!client.supportsVideo || this.forceFlash)
        return this.createFlashFallback();

      this.canvasInstance.createCanvas(this.appender, this.canvasSize);
      this.animate();
    },

    animate: function () {
      if (
        typeof this.bgColor != "undefined" &&
        this.bgColor.length == 7 &&
        this.bgColor.indexOf("#") != -1
      ) {
        $(HomepageBannerInstance.moduleAppender).css(
          "background-color",
          this.bgColor
        );
      }
      var img = new Image();
      img.src = this.asset;

      var context = this.canvasInstance.getContext();

      $(img).load(
        (function (instance) {
          // Don't trigger "STARTED"-Event. It get's triggered by the Player on start
          //$(document).trigger(CONSTANTS.CUSTOM_EVENT.STARTED,{"instance":instance});
          var frameIndex = (currentRepeat = 0);
          var sx = (dx = 0);
          var sy = (dy = 0);
          var sw = (dw = instance.frameWidth);
          var sh = (dh = instance.frameHeight);

          context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
          frameIndex =
            frameIndex == instance.numFrames - 1 ? 0 : frameIndex + 1;
          sy = frameIndex * instance.frameHeight;
          var to = Timeouts.add(
            window.setInterval(function () {
              context.clearRect(
                0,
                0,
                instance.frameWidth,
                instance.frameHeight
              );
              context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
              sy = frameIndex * instance.frameHeight;

              if (instance.repeats == 1) {
                frameIndex =
                  frameIndex == instance.numFrames ? 0 : frameIndex + 1;
              } else {
                frameIndex =
                  frameIndex == instance.numFrames - 1 ? 0 : frameIndex + 1;
              }

              if (frameIndex == 0) currentRepeat++;

              if (currentRepeat == instance.repeats) {
                frameIndex = currentRepeat = sy = 0;
                //window.clearInterval(to);
                Timeouts.stop(to);
                instance.bind();
                $(document).trigger(CONSTANTS.CUSTOM_EVENT.FINISHED, {
                  instance: instance,
                });
                delete img;
              }
            }, 1000 / instance.fps)
          );
        })(this)
      );
    },
  }),
};
var ModuleLoader = Class.extend({
  init: function (options) {
    if (typeof moduleLoaderInstance !== "undefined")
      throw "Cannot create a second instance of Class ModuleLoader. Please use the instance, you've already created";

    moduleLoaderInstance = this;

    this.appender = options.appender;
    this.xml = options.xml;
    this.canvasHandler = options.canvasHandler;

    this._moduleInstance = null;
    this._animation = null;

    this.moduleInstance = {
      set: function (instance) {
        moduleLoaderInstance._moduleInstance = instance;
      },
      get: function () {
        return moduleLoaderInstance._moduleInstance;
      },
    };

    this.animation = {
      set: function (animation) {
        moduleLoaderInstance._animation = animation;
        moduleLoaderInstance.load();
      },
      get: function () {
        return moduleLoaderInstance._animation;
      },
    };

    idm_utils.debug("Module Loader initialisiert");
    return this;
  },

  load: function () {
    var subModule = this.isSubModule(this.animation.get());
    var moduleName = this.animation.get().find("module").text();
    var instanceOptions = {
      animation: this.animation.get(),
      appender: this.appender,
      isSubModule: subModule,
    };

    if (
      !subModule &&
      typeof window[this.animation.get().find("module").text()] === "undefined"
    ) {
      throw moduleName + "is not a Module";
    }

    this.moduleInstance.set(
      subModule
        ? this.canvasHandler.registerSubModule(instanceOptions)
        : new window[moduleName](instanceOptions)
    );

    return this;
  },

  loadAnimationStructure: function (xml) {
    var res = [];
    $.each($(this.xml.getAttribute("animation")), function () {
      moduleLoaderInstance.animation.set($(this));
      res.push(moduleLoaderInstance.moduleInstance.get());
    });

    idm_utils.debug("Module geladen.");
    return res;
  },

  isSubModule: function () {
    return (
      this.animation
        .get()
        .find("module")
        .text()
        .toLowerCase()
        .indexOf("canvas") != -1
    );
  },

  moduleLoaded: function () {
    return this.moduleInstance.get() != null;
  },
});
var Pager = Class.extend({
  init: function (options) {
    if ($("#idm_stage_banner nav ul").length == 0)
      throw "Cannot create Pager. Please create Basic HTML construction (HomepageBanner: createBasicConstruct()) first";
    if (typeof options === "undefined") throw "No options for pager given.";
    if (typeof pagerInstance !== "undefined")
      throw "Cannot create a second instance of Class Pager. Please use the instance, you've already created";

    pagerInstance = this;

    this.appender = options.appender;
    this.startingElement = options.startIndex;
    this.maxPages = options.maxPages;
    this.client = options.clientInformation;

    this._lastActive = null;

    this.lastActive = {
      set: function (val) {
        pagerInstance._lastActive = val;
      },
      get: function () {
        return pagerInstance._lastActive;
      },
    };
    idm_utils.debug("Pager initialisiert");
    return this;
  },
  set: function (i) {
    if (typeof this.constructed === "undefined")
      throw "Cannot highlight pager. please create html first.";

    $(this.appender).find("li a.selected").removeClass("selected");
    $(this.appender)
      .find("li a:eq(" + i + ")")
      .addClass("selected");
    idm_utils.debug("Seite gewechselt - aktive Seite:" + i);

    this.lastActive.set(i);
  },
  bind: function () {
    Bindings.bindPagerEvents();
    idm_utils.debug("Pager FunktionalitÃ¤t aktiviert");
    return this;
  },
  createHTML: function () {
    if (typeof this.constructed !== "undefined")
      throw "Cannot construct HTML of the pager twice. HTML Already constructed due to object initialization";

    var ios = this.client.usesIOS;
    var classes = { ios: "touch", def: "no-touch" };
    var elem;

    for (var i = 0; i < this.maxPages; i++) {
      elem = $("<li />").addClass(ios ? classes.ios : classes.def);

      elem.append(
        $("<a />").attr({
          href: "#",
          name: "Home.home-stage.slide" + i + ".point",
          onclick:
            typeof wt === "undefined"
              ? void 0
              : "wt.sendinfo({linkId:'Home.home-stage.slide" + i + ".point'});",
        })
      );
      $(this.appender).append(elem);
    }

    this.constructed = true;
    this.set(this.startingElement);

    return this;
  },
});
var Client = Class.extend({
  init: function () {
    if (typeof clientInstance !== "undefined")
      throw "Cannot create a second instance of Class ModuleLoader. Please use the instance, you've already created";

    clientInstance = this;
    var matchIOS = navigator.userAgent.match(/OS (\d+)_/i);
    var matchAndroid = navigator.userAgent.match(/Android (\d+)\./i);
    var video = document.createElement("video");

    this.supportsVideo = typeof video.canPlayType === "function";
    this.supportsMV4 =
      typeof video.canPlayType !== "undefined" &&
      video.canPlayType("video/mp4") != "";
    this.supportsOGG =
      typeof video.canPlayType !== "undefined" &&
      video.canPlayType("video/ogg") != "";
    this.supportsCanvas = !!document.createElement("canvas").getContext;
    this.resolution = { x: screen.width, y: screen.height };
    this.usesIPhone = navigator.userAgent.match(/iPhone/i) !== null;
    this.usesIPad = navigator.userAgent.match(/iPad/i) !== null;
    this.usesIOS = this.usesIPhone || this.usesIPad;
    this.usesAndroid = navigator.userAgent.match(/Android/i) !== null;
    this.usesAndroidTab =
      this.usesAndroid && navigator.userAgent.match(/mobile/i) === null;
    this.androidVersion =
      matchAndroid && matchAndroid[1] ? matchAndroid[1] : "0.0";
    this.iOSVersion = matchIOS && matchIOS[1] ? matchIOS[1] : "0.0";
    this.usesSafari =
      navigator.userAgent.match(/Safari/i) !== null &&
      navigator.userAgent.match(/Android/i) === null;
    this.usesOpera = /Opera/.test(navigator.userAgent);
    this.usesIE = !+"\v1" || navigator.appName == "Microsoft Internet Explorer";
    this.supportsFlash = (function () {
      var support = false;
      if (navigator.plugins && navigator.plugins.length > 0) {
        var type = "application/x-shockwave-flash";
        var mimeTypes = navigator.mimeTypes;
        if (
          mimeTypes &&
          mimeTypes[type] &&
          mimeTypes[type].enabledPlugin &&
          mimeTypes[type].enabledPlugin.description
        ) {
          support = true;
        }
      } else if (
        navigator.appVersion.indexOf("Mac") == -1 &&
        window.execScript
      ) {
        try {
          new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
          support = true;
        } catch (error) {
          support = false;
        }
      }
      return support;
    })();
    this.supportsHTML5Animation = (function () {
      var animation = false,
        animationstring = "animation",
        keyframeprefix = "",
        domPrefixes = "Webkit Moz O ms Khtml".split(" "),
        pfx = "",
        elm = $("#idm_stage_banner").get(0);
      if (elm.style.animationName !== undefined) {
        animation = true;
      }
      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + "AnimationName"] !== undefined) {
            pfx = domPrefixes[i];
            animationstring = pfx + "Animation";
            keyframeprefix = "-" + pfx.toLowerCase() + "-";
            animation = true;
            break;
          }
        }
      }
      return animation;
    })();
    delete video;
    delete matchIOS;
    delete matchAndroid;
    idm_utils.debug("Client Informationen initialisiert");
  },
});
var CONSTANTS = {
  CUSTOM_EVENT: {
    FINISHED: "finished",
    STARTED: "started",
  },
  INFOBOX_SHOW: {
    DURING: "during",
    AFTER: "after",
  },
};
var Bindings = {
  init: (function () {
    $(document).bind(CONSTANTS.CUSTOM_EVENT.FINISHED, function (e, cp) {
      HomepageBannerInstance.processManager.queue
        .add(function () {
          if (cp.instance.showInfoboxAt == CONSTANTS.INFOBOX_SHOW.AFTER) {
            cp.instance.isSubModule
              ? CanvasModuleInstance.registeredModules[
                  cp.instance.subModuleIndex
                ].addInfoBox()
              : cp.instance.addInfoBox();
          }
          HomepageBannerInstance.player.isLoading.set(true);
          a = Timeouts.stopAll().add(
            window.setTimeout(function () {
              HomepageBannerInstance.player.isLoading.set(false);
              HomepageBannerInstance.player.stop(function () {
                HomepageBannerInstance.cleanStage();
                var nPage = HomepageBannerInstance.player.playNext();
                HomepageBannerInstance.pager.set(nPage);
                HomepageBannerInstance.processManager.ready.set(true);
              });
            }, HomepageBannerInstance.infoboxDuration)
          );
        })
        .work(this);
    });

    $(document).bind(CONSTANTS.CUSTOM_EVENT.STARTED, function (e, cp) {
      idm_utils.debug("Abspielen des Elementes gestartet");
      if (cp.instance.showInfoboxAt == CONSTANTS.INFOBOX_SHOW.DURING) {
        cp.instance.module.toLowerCase().indexOf("canvasmodule") != -1
          ? CanvasModuleInstance.registeredModules[
              cp.instance.subModuleIndex
            ].addInfoBox()
          : cp.instance.addInfoBox();
      }
    });

    $("#idm_stage_infobox .btn").live("click", function () {
      if (typeof buttonTarget === "undefined") return false;
      if (typeof buttonLink === "undefined") return false;
      // Wenn buttonTarget leer ist, dann Ã¶ffne den Link im selben Fenster, ansonsten im neuen
      if (buttonTarget == "") {
        window.location = buttonLink;
      } else {
        window.open(buttonLink);
      }

      idm_utils.debug("User clicked Infobox button - " + buttonLink);
      return false;
    });
  })(),
  bindPagerEvents: function () {
    $(HomepageBannerInstance.appender + " #idm_stage_banner ul li a").bind(
      "click",
      function (e) {
        e.preventDefault();
        idm_utils.stopPendingRequests;

        var clickedIndex = parseInt($(this).parent().index());
        idm_utils.debug("clicked: index: " + clickedIndex);
        var currentIndex = HomepageBannerInstance.player.currentItem.get();
        idm_utils.debug(
          "current index: " + HomepageBannerInstance.player.currentItem.get()
        );

        var lastActive = HomepageBannerInstance.pager.lastActive.get();
        HomepageBannerInstance.pager.lastActive.set(clickedIndex);

        if (clickedIndex == currentIndex || clickedIndex == lastActive)
          return false;

        // Er ist am laden aber der user hat woanders hinigeklickt.
        // Laden abbrechen und wunsch des users ausfÃ¼hren ?!
        // Timer holen, stoppen und tracen ?!
        if (HomepageBannerInstance.player.isLoading.get()) {
          ProcessManagerInstance.queue.removeAll();
          Timeouts.stopAll();
          HomepageBannerInstance.player.isLoading.set(false);
          HomepageBannerInstance.processManager.ready.set(true);
        }
        HomepageBannerInstance.processManager.queue
          .add(function () {
            Timeouts.stopAll();
            if (
              $(
                HomepageBannerInstance.appender + " #idm_stage_banner"
              ).hasClass("locked")
            ) {
              HomepageBannerInstance.processManager.ready.set(true);
              return false;
            }
            $(HomepageBannerInstance.appender + " #idm_stage_banner").addClass(
              "locked"
            );
            HomepageBannerInstance.cleanStage();
            HomepageBannerInstance.player.stop(function () {
              HomepageBannerInstance.pager.set(clickedIndex);
              HomepageBannerInstance.player.play(clickedIndex);
              $(
                HomepageBannerInstance.appender + " #idm_stage_banner"
              ).removeClass("locked");
              HomepageBannerInstance.processManager.ready.set(true);
            });
          })
          .work(this);
        return false;
      }
    );
  },
  YoukuModuleEvents: function () {
    var client = HomepageBannerInstance.client;
    if (!client.usesIOS && !client.usesAndroidTab) {
      $("#hpbvideo").bind("canplay", function (e) {
        // Youku Hintergrund bild entfernen und Background schwarz machen
        $(youkuModuleInstance.appender).css({
          "background-image": "none",
          "background-color": "#000",
        });
        $("#hpbvideo").prop("muted", true);
      });

      $("#hpbvideo").bind("ended", function () {
        var instance =
          HomepageBannerInstance.modules[
            HomepageBannerInstance.player.currentItem.get()
          ];
        if (instance.endImage != "") {
          $(instance.appender).css(
            "background-image",
            "url(" + instance.endImage + ")"
          );
          $("#hpbvideo").hide();
        }
      });
    }
    /*
        $("#hpbvideo").bind("play", function(){
            var instance = HomepageBannerInstance.modules[HomepageBannerInstance.player.currentItem.get()];
            if(parseInt(instance.videoDuration) > -1){
                ti = Timeouts.add(
                    window.setInterval(function () {
                        if(Math.floor($("#hpbvideo")[0].currentTime) > instance.videoDuration){
                            Timeouts.stop(ti);
                             $("#hpbvideo")[0].pause();
                             $("#hpbvideo").trigger("ended");
                        }
                    }, HomepageBannerInstance.youkuVideoCheckInterval)
                );
            }
        });*/

    Bindings.VideoModuleEvents({
      unbindEvents: false,
    });
  },
  YoutubeModuleEvents: function () {},
  VideoModuleEvents: function (o_args) {
    var client = HomepageBannerInstance.client;
    var args = typeof o_args === "undefined" ? {} : o_args;

    var settings = {
      unbindEvents:
        typeof args.unbindEvents !== "undefined" ? args.unbindEvents : true,
    };

    if (client.usesIOS || client.usesAndroid) {
      $("div#videoControls").bind("click", function () {
        $("#videoContainer").remove();
        $("#hpbvideo")[0].play();
      });
    }

    // Alle Events unbinden Altlasten von vorherigen abgespielten Videos zu entfernen
    if (settings.unbindEvents) {
      $("#hpbvideo").unbind();
    }

    $("#hpbvideo").bind("ended", function (e) {
      /* videoModuleInstance ist eine statische Instanz vom zuletzt geladenen Video (aus der XML).
            Dementsprechend reprÃ¤sentiert diese Variable nicht das aktuelle- sondern das zuletzt geladene Video.
            Das ist fÃ¼r unsere zwecke natÃ¼rlich unbrauchbar. Um das aktuelle Video zu ermitteln benutzten wir den Index das Players.
            Wenn der Player momentan auf Seite 3 ist wissen wir, dass das 3. Media Element abgespielt wird.
            Diese Information kÃ¶nnen wir nutzen um unser Media Element aus dem Modul-Array (Array in dem alle Media-Instanzen liegen) zu laden.
            stopPropagation() stoppt das Event bubbeling durch den DOM tree.
            Das wollen wir an dieser stelle nicht, da dieses Event eigenstÃ¤ndig agiert und alle benÃ¶tigten "Parent Events" via trigger() aufruft.*/
      e.stopPropagation();
      var videoInstance =
        HomepageBannerInstance.modules[
          HomepageBannerInstance.player.currentItem.get()
        ];
      var client = HomepageBannerInstance.client;
      if (client.usesIOS || client.usesAndroidTab) {
        n = $("<div />").attr("id", "videoContainer");
        $("#idm_stage_content").append($(n));
        $("#videoContainer").css(
          "background-image",
          "url(" + videoInstance.endImage + ")"
        );
        if ($("#hpbvideo")[0].webkitDisplayingFullscreen) {
          $("#hpbvideo")[0].webkitExitFullscreen();
        }
      }
      $(document).trigger(CONSTANTS.CUSTOM_EVENT.FINISHED, {
        instance: videoInstance,
      });
      return false;
    });

    $("#hpbvideo").bind("pause", function (e) {
      /* stopPropagation() stoppt das Event bubbeling durch den DOM tree.
            Das wollen wir an dieser stelle nicht, da dieses Event eigenstÃ¤ndig agiert und alle benÃ¶tigten "Parent Events" via trigger() aufruft.
            "Pause" wird beim IPhone sowohl nach abspielen eines Videos als auch bei einem Klick auf den "fertig" Button getriggered.
            Das heiÃt im Endeffekt, dass wenn sich ein User ein Video anschaut und anschlieÃend auf fertig klickt, wird dieses Event doppelt aufgerufen.
            Das gilt es natÃ¼rlich zu verhindern indem wir die Eigenschaft "ended" vom Video Element abfragen.
            Das "ended" Event wird von hier aus also nur getriggered wenn der User auf "fertig" klickt und NICHT wenn das Video beendet wird.
            Andernfalls, wenn der User das Video zuende angeschaut hat wird das "ended" Event hier nicht getriggert (Weil es automatisch getriggert wird).*/
      e.stopPropagation();
      if (
        HomepageBannerInstance.client.usesIPhone &&
        !$("#hpbvideo")[0].ended
      ) {
        $(this).trigger("ended");
      }
      return false;
    });
  },
  HTML5AnimationModuleEvents: function () {},
  KronestvModuleEvents: function () {
    Bindings.VideoModuleEvents();
  },

  ImageModuleEvents: function () {},
  CanvasModuleEvents: function () {},
};
var Timeouts = {
  list: [],
  add: function (timeout) {
    var to = timeout;
    Timeouts.list.push(to);
    return to;
  },
  stop: function (to) {
    window.clearTimeout(to);
    for (var i = 0; i < Timeouts.list.length; i++) {
      if (Timeouts.list[i] == to) {
        Timeouts.list.splice(i, 1);
      }
    }
    return Timeouts;
  },
  stopAll: function () {
    for (var i = 0; i < Timeouts.list.length; i++) {
      window.clearTimeout(Timeouts.list[i]);
    }
    Timeouts.list = [];
    return Timeouts;
  },
};
var Util = {
  removePx: function (val) {
    if (typeof val === "object") {
      $.each(val, function (k, v) {
        val[k] = Util.removePx(v);
      });
      return val;
    }
    return typeof val == "string" ? parseInt(val.replace(/px/, "")) : val;
  },
  startsWith: function (str, prefix) {
    return str.indexOf(prefix) === 0;
  },
  endsWith: function (str, postfix) {
    return str.indexOf(postfix) === str.length - 1;
  },
};
if (typeof idm_utils === "undefined") {
  var idm_utils = {}; // Ggf. extenden
}
idm_utils.addPlayButton = function () {
  if ($("#idm_play").length === 0) {
    $("body").prepend(
      $("<input />").attr({
        id: "idm_play",
        type: "button",
        value: "play",
        onclick:
          "javascript:$('#videoContainer').remove();$('#hpbvideo')[0].play();",
      })
    );
  }
};
idm_utils.getRotationDegrees = function (obj) {
  var matrix =
    obj.css("-webkit-transform") ||
    obj.css("-moz-transform") ||
    obj.css("-ms-transform") ||
    obj.css("-o-transform") ||
    obj.css("transform");
  if (typeof matrix === "undefined") return false;
  if (matrix !== "none") {
    var values = matrix.split("(")[1].split(")")[0].split(",");
    var a = values[0];
    var b = values[1];
    var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  } else {
    var angle = 0;
  }
  if (angle < 0) angle += 360;
  return angle;
};
idm_utils.debug = function (msg) {
  if (
    typeof console === "undefined" ||
    typeof debugMode === "undefined" ||
    !debugMode
  )
    return false;

  //if(navigator.userAgent.match(/iPhone/i) !== null){
  if ($("#idm_debug").length === 0) {
    $("body").prepend(
      $("<div />")
        .attr({
          id: "idm_debug",
        })
        .css({
          width: "auto",
          height: "300px",
          overflow: "scroll",
          border: "1px solid black",
          "background-color": "#c0c0c0",
          "line-height": "5px",
          padding: "10px",
        })
    );
  }
  $("#idm_debug").append("<p>" + msg + "</p>");
  //}else{
  //console.log(msg);
  //}
  if (typeof d === "undefined") d = new Date();
  if (typeof window.log === "undefined") window.log = "";

  var time =
    d.getDay() +
    "." +
    (d.getMonth() + 1) +
    "." +
    d.getFullYear() +
    " - " +
    d.getHours() +
    ":" +
    d.getMinutes() +
    ": ";
  window.log += time.concat(msg).concat("\n");
};
idm_utils.backupConsole = function () {
  if (typeof window.console !== "undefined") {
    window.consoleTmp = window.console;
  }
};
idm_utils.restoreConsole = function () {
  if (!debugMode) return false;
  // Hier wird das originale window.console Objekt wieder "zurÃ¼ck Ã¼berschrieben"
  if (typeof window.consoleTmp !== "undefined") {
    window.console = window.consoleTmp;
    delete window.consoleTmp;
  }
};
(idm_utils.wmode2transparency = function () {
  /* Wrote by jose.nobile@gmail.com */
  $("embed").each(function (i) {
    var elClone = this.cloneNode(true);
    elClone.setAttribute("WMode", "Transparent");
    $(this).before(elClone);
    $(this).remove();
  });
  // For object and/or embed into objects
  $("object").each(function (i, v) {
    var elEmbed = $(this).children("embed");
    if (typeof elEmbed.get(0) != "undefined") {
      if (typeof elEmbed.get(0).outerHTML != "undefined") {
        elEmbed.attr("wmode", "transparent");
        $(this.outerHTML).insertAfter(this);
        $(this).remove();
      }
      return true;
    }
    var algo = this.attributes;
    var str_tag = "<OBJECT ";
    for (var i = 0; i < algo.length; i++)
      str_tag += algo[i].name + '="' + algo[i].value + '" ';
    str_tag += ">";
    var flag = false;
    $(this)
      .children()
      .each(function (elem) {
        if (this.nodeName == "PARAM") {
          if (this.name == "wmode") {
            flag = true;
            str_tag += '<PARAM NAME="' + this.name + '" VALUE="transparent">';
          } else if (this.name == "allowFullScreen") {
            str_tag += '<PARAM NAME="' + this.name + '" VALUE="false">';
          } else
            str_tag +=
              '<PARAM NAME="' + this.name + '" VALUE="' + this.value + '">';
        }
      });
    if (!flag) str_tag += '<PARAM NAME="wmode" VALUE="transparent">';
    str_tag += "</OBJECT>";
    $(str_tag).insertAfter(this);
    $(this).remove();
  });
}),
  (idm_utils.stopPendingRequests = function () {
    try {
      window.stop();
    } catch (e) {
      document.execCommand("Stop");
    }
  });
/* HOMEPAGEBANENER END V2.1*/
(function (b) {
  var m,
    t,
    u,
    f,
    D,
    j,
    E,
    n,
    z,
    A,
    q = 0,
    e = {},
    o = [],
    p = 0,
    d = {},
    l = [],
    G = null,
    v = new Image(),
    J = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,
    W = /[^\.]\.(swf)\s*$/i,
    K,
    L = 1,
    y = 0,
    s = "",
    r,
    i,
    h = false,
    B = b.extend(b("<div/>")[0], { prop: 0 }),
    M = b.browser.msie && b.browser.version < 7 && !window.XMLHttpRequest,
    N = function () {
      t.hide();
      v.onerror = v.onload = null;
      G && G.abort();
      m.empty();
    },
    O = function () {
      if (false === e.onError(o, q, e)) {
        t.hide();
        h = false;
      } else {
        e.titleShow = false;
        e.width = "auto";
        e.height = "auto";
        m.html(
          '<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'
        );
        F();
      }
    },
    I = function () {
      var a = o[q],
        c,
        g,
        k,
        C,
        P,
        w;
      N();
      e = b.extend(
        {},
        b.fn.fancybox.defaults,
        typeof b(a).data("fancybox") == "undefined" ? e : b(a).data("fancybox")
      );
      w = e.onStart(o, q, e);
      if (w === false) h = false;
      else {
        if (typeof w == "object") e = b.extend(e, w);
        k = e.title || (a.nodeName ? b(a).attr("title") : a.title) || "";
        if (a.nodeName && !e.orig)
          e.orig = b(a).children("img:first").length
            ? b(a).children("img:first")
            : b(a);
        if (k === "" && e.orig && e.titleFromAlt) k = e.orig.attr("alt");
        c = e.href || (a.nodeName ? b(a).attr("href") : a.href) || null;
        if (/^(?:javascript)/i.test(c) || c == "#") c = null;
        if (e.type) {
          g = e.type;
          if (!c) c = e.content;
        } else if (e.content) g = "html";
        else if (c)
          g = c.match(J)
            ? "image"
            : c.match(W)
            ? "swf"
            : b(a).hasClass("iframe")
            ? "iframe"
            : c.indexOf("#") === 0
            ? "inline"
            : "iframe";
        if (g) {
          if (g == "inline") {
            a = c.substr(c.indexOf("#"));
            g = b(a).length > 0 ? "inline" : "ajax";
          }
          e.type = g;
          e.href = c;
          e.title = k;
          if (e.autoDimensions)
            if (e.type == "html" || e.type == "inline" || e.type == "ajax") {
              e.width = "auto";
              e.height = "auto";
            } else e.autoDimensions = false;
          if (e.modal) {
            e.overlayShow = true;
            e.hideOnOverlayClick = false;
            e.hideOnContentClick = false;
            e.enableEscapeButton = false;
            e.showCloseButton = false;
          }
          e.padding = parseInt(e.padding, 10);
          e.margin = parseInt(e.margin, 10);
          m.css("padding", e.padding + e.margin);
          b(".fancybox-inline-tmp")
            .unbind("fancybox-cancel")
            .bind("fancybox-change", function () {
              b(this).replaceWith(j.children());
            });
          switch (g) {
            case "html":
              m.html(e.content);
              F();
              break;
            case "inline":
              if (b(a).parent().is("#fancybox-content") === true) {
                h = false;
                break;
              }
              b('<div class="fancybox-inline-tmp" />')
                .hide()
                .insertBefore(b(a))
                .bind("fancybox-cleanup", function () {
                  b(this).replaceWith(j.children());
                })
                .bind("fancybox-cancel", function () {
                  b(this).replaceWith(m.children());
                });
              b(a).appendTo(m);
              F();
              break;
            case "image":
              h = false;
              b.fancybox.showActivity();
              v = new Image();
              v.onerror = function () {
                O();
              };
              v.onload = function () {
                h = true;
                v.onerror = v.onload = null;
                e.width = v.width;
                e.height = v.height;
                b("<img />")
                  .attr({ id: "fancybox-img", src: v.src, alt: e.title })
                  .appendTo(m);
                Q();
              };
              v.src = c;
              break;
            case "swf":
              e.scrolling = "no";
              C =
                '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' +
                e.width +
                '" height="' +
                e.height +
                '"><param name="movie" value="' +
                c +
                '"></param>';
              P = "";
              b.each(e.swf, function (x, H) {
                C += '<param name="' + x + '" value="' + H + '"></param>';
                P += " " + x + '="' + H + '"';
              });
              C +=
                '<embed src="' +
                c +
                '" type="application/x-shockwave-flash" width="' +
                e.width +
                '" height="' +
                e.height +
                '"' +
                P +
                "></embed></object>";
              m.html(C);
              F();
              break;
            case "ajax":
              h = false;
              b.fancybox.showActivity();
              e.ajax.win = e.ajax.success;
              G = b.ajax(
                b.extend({}, e.ajax, {
                  url: c,
                  data: e.ajax.data || {},
                  error: function (x) {
                    x.status > 0 && O();
                  },
                  success: function (x, H, R) {
                    if ((typeof R == "object" ? R : G).status == 200) {
                      if (typeof e.ajax.win == "function") {
                        w = e.ajax.win(c, x, H, R);
                        if (w === false) {
                          t.hide();
                          return;
                        } else if (typeof w == "string" || typeof w == "object")
                          x = w;
                      }
                      m.html(x);
                      F();
                    }
                  },
                })
              );
              break;
            case "iframe":
              Q();
          }
        } else O();
      }
    },
    F = function () {
      var a = e.width,
        c = e.height;
      a =
        a.toString().indexOf("%") > -1
          ? parseInt(
              ((b(window).width() - e.margin * 2) * parseFloat(a)) / 100,
              10
            ) + "px"
          : a == "auto"
          ? "auto"
          : a + "px";
      c =
        c.toString().indexOf("%") > -1
          ? parseInt(
              ((b(window).height() - e.margin * 2) * parseFloat(c)) / 100,
              10
            ) + "px"
          : c == "auto"
          ? "auto"
          : c + "px";
      m.wrapInner(
        '<div style="width:' +
          a +
          ";height:" +
          c +
          ";overflow: " +
          (e.scrolling == "auto"
            ? "auto"
            : e.scrolling == "yes"
            ? "scroll"
            : "hidden") +
          ';position:relative;"></div>'
      );
      e.width = m.width();
      e.height = m.height();
      Q();
    },
    Q = function () {
      var a, c;
      t.hide();
      if (f.is(":visible") && false === d.onCleanup(l, p, d)) {
        b.event.trigger("fancybox-cancel");
        h = false;
      } else {
        h = true;
        b(j.add(u)).unbind();
        b(window).unbind("resize.fb scroll.fb");
        b(document).unbind("keydown.fb");
        f.is(":visible") &&
          d.titlePosition !== "outside" &&
          f.css("height", f.height());
        l = o;
        p = q;
        d = e;
        if (d.overlayShow) {
          u.css({
            "background-color": d.overlayColor,
            opacity: d.overlayOpacity,
            cursor: d.hideOnOverlayClick ? "pointer" : "auto",
            height: b(document).height(),
          });
          if (!u.is(":visible")) {
            M &&
              b("select:not(#fancybox-tmp select)")
                .filter(function () {
                  return this.style.visibility !== "hidden";
                })
                .css({ visibility: "hidden" })
                .one("fancybox-cleanup", function () {
                  this.style.visibility = "inherit";
                });
            u.show();
          }
        } else u.hide();
        i = X();
        s = d.title || "";
        y = 0;
        n.empty().removeAttr("style").removeClass();
        if (d.titleShow !== false) {
          if (b.isFunction(d.titleFormat)) a = d.titleFormat(s, l, p, d);
          else
            a =
              s && s.length
                ? d.titlePosition == "float"
                  ? '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' +
                    s +
                    '</td><td id="fancybox-title-float-right"></td></tr></table>'
                  : '<div id="fancybox-title-' +
                    d.titlePosition +
                    '">' +
                    s +
                    "</div>"
                : false;
          s = a;
          if (!(!s || s === "")) {
            n.addClass("fancybox-title-" + d.titlePosition)
              .html(s)
              .appendTo("body")
              .show();
            switch (d.titlePosition) {
              case "inside":
                n.css({
                  width: i.width - d.padding * 2,
                  marginLeft: d.padding,
                  marginRight: d.padding,
                });
                y = n.outerHeight(true);
                n.appendTo(D);
                i.height += y;
                break;
              case "over":
                n.css({
                  marginLeft: d.padding,
                  width: i.width - d.padding * 2,
                  bottom: d.padding,
                }).appendTo(D);
                break;
              case "float":
                n.css(
                  "left",
                  parseInt((n.width() - i.width - 40) / 2, 10) * -1
                ).appendTo(f);
                break;
              default:
                n.css({
                  width: i.width - d.padding * 2,
                  paddingLeft: d.padding,
                  paddingRight: d.padding,
                }).appendTo(f);
            }
          }
        }
        n.hide();
        if (f.is(":visible")) {
          b(E.add(z).add(A)).hide();
          a = f.position();
          r = {
            top: a.top,
            left: a.left,
            width: f.width(),
            height: f.height(),
          };
          c = r.width == i.width && r.height == i.height;
          j.fadeTo(d.changeFade, 0.3, function () {
            var g = function () {
              j.html(m.contents()).fadeTo(d.changeFade, 1, S);
            };
            b.event.trigger("fancybox-change");
            j.empty()
              .removeAttr("filter")
              .css({
                "border-width": d.padding,
                width: i.width - d.padding * 2,
                height: e.autoDimensions
                  ? "auto"
                  : i.height - y - d.padding * 2,
              });
            if (c) g();
            else {
              B.prop = 0;
              b(B).animate(
                { prop: 1 },
                {
                  duration: d.changeSpeed,
                  easing: d.easingChange,
                  step: T,
                  complete: g,
                }
              );
            }
          });
        } else {
          f.removeAttr("style");
          j.css("border-width", d.padding);
          if (d.transitionIn == "elastic") {
            r = V();
            j.html(m.contents());
            f.show();
            if (d.opacity) i.opacity = 0;
            B.prop = 0;
            b(B).animate(
              { prop: 1 },
              { duration: d.speedIn, easing: d.easingIn, step: T, complete: S }
            );
          } else {
            d.titlePosition == "inside" && y > 0 && n.show();
            j.css({
              width: i.width - d.padding * 2,
              height: e.autoDimensions ? "auto" : i.height - y - d.padding * 2,
            }).html(m.contents());
            f.css(i).fadeIn(d.transitionIn == "none" ? 0 : d.speedIn, S);
          }
        }
      }
    },
    Y = function () {
      if (d.enableEscapeButton || d.enableKeyboardNav)
        b(document).bind("keydown.fb", function (a) {
          if (a.keyCode == 27 && d.enableEscapeButton) {
            a.preventDefault();
            b.fancybox.close();
          } else if (
            (a.keyCode == 37 || a.keyCode == 39) &&
            d.enableKeyboardNav &&
            a.target.tagName !== "INPUT" &&
            a.target.tagName !== "TEXTAREA" &&
            a.target.tagName !== "SELECT"
          ) {
            a.preventDefault();
            b.fancybox[a.keyCode == 37 ? "prev" : "next"]();
          }
        });
      if (d.showNavArrows) {
        if ((d.cyclic && l.length > 1) || p !== 0) z.show();
        if ((d.cyclic && l.length > 1) || p != l.length - 1) A.show();
      } else {
        z.hide();
        A.hide();
      }
    },
    S = function () {
      if (!b.support.opacity) {
        j.get(0).style.removeAttribute("filter");
        f.get(0).style.removeAttribute("filter");
      }
      e.autoDimensions && j.css("height", "auto");
      f.css("height", "auto");
      s && s.length && n.show();
      d.showCloseButton && E.show();
      Y();
      d.hideOnContentClick && j.bind("click", b.fancybox.close);
      d.hideOnOverlayClick && u.bind("click", b.fancybox.close);
      b(window).bind("resize.fb", b.fancybox.resize);
      d.centerOnScroll && b(window).bind("scroll.fb", b.fancybox.center);
      if (d.type == "iframe")
        b(
          '<iframe id="fancybox-frame" name="fancybox-frame' +
            new Date().getTime() +
            '" frameborder="0" hspace="0" ' +
            (b.browser.msie ? 'allowtransparency="true""' : "") +
            ' scrolling="' +
            e.scrolling +
            '" src="' +
            d.href +
            '"></iframe>'
        ).appendTo(j);
      f.show();
      h = false;
      b.fancybox.center();
      d.onComplete(l, p, d);
      var a, c;
      if (l.length - 1 > p) {
        a = l[p + 1].href;
        if (typeof a !== "undefined" && a.match(J)) {
          c = new Image();
          c.src = a;
        }
      }
      if (p > 0) {
        a = l[p - 1].href;
        if (typeof a !== "undefined" && a.match(J)) {
          c = new Image();
          c.src = a;
        }
      }
    },
    T = function (a) {
      var c = {
        width: parseInt(r.width + (i.width - r.width) * a, 10),
        height: parseInt(r.height + (i.height - r.height) * a, 10),
        top: parseInt(r.top + (i.top - r.top) * a, 10),
        left: parseInt(r.left + (i.left - r.left) * a, 10),
      };
      if (typeof i.opacity !== "undefined") c.opacity = a < 0.5 ? 0.5 : a;
      f.css(c);
      j.css({
        width: c.width - d.padding * 2,
        height: c.height - y * a - d.padding * 2,
      });
    },
    U = function () {
      return [
        b(window).width() - d.margin * 2,
        b(window).height() - d.margin * 2,
        b(document).scrollLeft() + d.margin,
        b(document).scrollTop() + d.margin,
      ];
    },
    X = function () {
      var a = U(),
        c = {},
        g = d.autoScale,
        k = d.padding * 2;
      c.width =
        d.width.toString().indexOf("%") > -1
          ? parseInt((a[0] * parseFloat(d.width)) / 100, 10)
          : d.width + k;
      c.height =
        d.height.toString().indexOf("%") > -1
          ? parseInt((a[1] * parseFloat(d.height)) / 100, 10)
          : d.height + k;
      if (g && (c.width > a[0] || c.height > a[1]))
        if (e.type == "image" || e.type == "swf") {
          g = d.width / d.height;
          if (c.width > a[0]) {
            c.width = a[0];
            c.height = parseInt((c.width - k) / g + k, 10);
          }
          if (c.height > a[1]) {
            c.height = a[1];
            c.width = parseInt((c.height - k) * g + k, 10);
          }
        } else {
          c.width = Math.min(c.width, a[0]);
          c.height = Math.min(c.height, a[1]);
        }
      c.top = parseInt(
        Math.max(a[3] - 20, a[3] + (a[1] - c.height - 40) * 0.5),
        10
      );
      c.left = parseInt(
        Math.max(a[2] - 20, a[2] + (a[0] - c.width - 40) * 0.5),
        10
      );
      return c;
    },
    V = function () {
      var a = e.orig ? b(e.orig) : false,
        c = {};
      if (a && a.length) {
        c = a.offset();
        c.top += parseInt(a.css("paddingTop"), 10) || 0;
        c.left += parseInt(a.css("paddingLeft"), 10) || 0;
        c.top += parseInt(a.css("border-top-width"), 10) || 0;
        c.left += parseInt(a.css("border-left-width"), 10) || 0;
        c.width = a.width();
        c.height = a.height();
        c = {
          width: c.width + d.padding * 2,
          height: c.height + d.padding * 2,
          top: c.top - d.padding - 20,
          left: c.left - d.padding - 20,
        };
      } else {
        a = U();
        c = {
          width: d.padding * 2,
          height: d.padding * 2,
          top: parseInt(a[3] + a[1] * 0.5, 10),
          left: parseInt(a[2] + a[0] * 0.5, 10),
        };
      }
      return c;
    },
    Z = function () {
      if (t.is(":visible")) {
        b("div", t).css("top", L * -40 + "px");
        L = (L + 1) % 12;
      } else clearInterval(K);
    };
  b.fn.fancybox = function (a) {
    if (!b(this).length) return this;
    b(this)
      .data("fancybox", b.extend({}, a, b.metadata ? b(this).metadata() : {}))
      .unbind("click.fb")
      .bind("click.fb", function (c) {
        c.preventDefault();
        if (!h) {
          h = true;
          b(this).blur();
          o = [];
          q = 0;
          c = b(this).attr("rel") || "";
          if (!c || c == "" || c === "nofollow") o.push(this);
          else {
            o = b("a[rel=" + c + "], area[rel=" + c + "]");
            q = o.index(this);
          }
          I();
        }
      });
    return this;
  };
  b.fancybox = function (a, c) {
    var g;
    if (!h) {
      h = true;
      g = typeof c !== "undefined" ? c : {};
      o = [];
      q = parseInt(g.index, 10) || 0;
      if (b.isArray(a)) {
        for (var k = 0, C = a.length; k < C; k++)
          if (typeof a[k] == "object")
            b(a[k]).data("fancybox", b.extend({}, g, a[k]));
          else a[k] = b({}).data("fancybox", b.extend({ content: a[k] }, g));
        o = jQuery.merge(o, a);
      } else {
        if (typeof a == "object") b(a).data("fancybox", b.extend({}, g, a));
        else a = b({}).data("fancybox", b.extend({ content: a }, g));
        o.push(a);
      }
      if (q > o.length || q < 0) q = 0;
      I();
    }
  };
  b.fancybox.showActivity = function () {
    clearInterval(K);
    t.show();
    K = setInterval(Z, 66);
  };
  b.fancybox.hideActivity = function () {
    t.hide();
  };
  b.fancybox.next = function () {
    return b.fancybox.pos(p + 1);
  };
  b.fancybox.prev = function () {
    return b.fancybox.pos(p - 1);
  };
  b.fancybox.pos = function (a) {
    if (!h) {
      a = parseInt(a);
      o = l;
      if (a > -1 && a < l.length) {
        q = a;
        I();
      } else if (d.cyclic && l.length > 1) {
        q = a >= l.length ? 0 : l.length - 1;
        I();
      }
    }
  };
  b.fancybox.cancel = function () {
    if (!h) {
      h = true;
      b.event.trigger("fancybox-cancel");
      N();
      e.onCancel(o, q, e);
      h = false;
    }
  };
  b.fancybox.close = function () {
    function a() {
      u.fadeOut("fast");
      n.empty().hide();
      f.hide();
      b.event.trigger("fancybox-cleanup");
      j.empty();
      d.onClosed(l, p, d);
      l = e = [];
      p = q = 0;
      d = e = {};
      h = false;
    }
    if (!(h || f.is(":hidden"))) {
      h = true;
      if (d && false === d.onCleanup(l, p, d)) h = false;
      else {
        N();
        b(E.add(z).add(A)).hide();
        b(j.add(u)).unbind();
        b(window).unbind("resize.fb scroll.fb");
        b(document).unbind("keydown.fb");
        j.find("iframe").attr(
          "src",
          M && /^https/i.test(window.location.href || "")
            ? "javascript:void(false)"
            : "about:blank"
        );
        d.titlePosition !== "inside" && n.empty();
        f.stop();
        if (d.transitionOut == "elastic") {
          r = V();
          var c = f.position();
          i = {
            top: c.top,
            left: c.left,
            width: f.width(),
            height: f.height(),
          };
          if (d.opacity) i.opacity = 1;
          n.empty().hide();
          B.prop = 1;
          b(B).animate(
            { prop: 0 },
            { duration: d.speedOut, easing: d.easingOut, step: T, complete: a }
          );
        } else f.fadeOut(d.transitionOut == "none" ? 0 : d.speedOut, a);
      }
    }
  };
  b.fancybox.resize = function () {
    u.is(":visible") && u.css("height", b(document).height());
    b.fancybox.center(true);
  };
  b.fancybox.center = function (a) {
    var c, g;
    if (!h) {
      g = a === true ? 1 : 0;
      c = U();
      (!g && (f.width() > c[0] || f.height() > c[1])) ||
        f
          .stop()
          .animate(
            {
              top: parseInt(
                Math.max(
                  c[3] - 20,
                  c[3] + (c[1] - j.height() - 40) * 0.5 - d.padding
                )
              ),
              left: parseInt(
                Math.max(
                  c[2] - 20,
                  c[2] + (c[0] - j.width() - 40) * 0.5 - d.padding
                )
              ),
            },
            typeof a == "number" ? a : 200
          );
    }
  };
  b.fancybox.init = function () {
    if (!b("#fancybox-wrap").length) {
      b("body").append(
        (m = b('<div id="fancybox-tmp"></div>')),
        (t = b('<div id="fancybox-loading"><div></div></div>')),
        (u = b('<div id="fancybox-overlay"></div>')),
        (f = b('<div id="fancybox-wrap"></div>'))
      );
      D = b('<div id="fancybox-outer"></div>')
        .append(
          '<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>'
        )
        .appendTo(f);
      D.append(
        (j = b('<div id="fancybox-content"></div>')),
        (E = b('<a id="fancybox-close"></a>')),
        (n = b('<div id="fancybox-title"></div>')),
        (z = b(
          '<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'
        )),
        (A = b(
          '<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'
        ))
      );
      E.click(b.fancybox.close);
      t.click(b.fancybox.cancel);
      z.click(function (a) {
        a.preventDefault();
        b.fancybox.prev();
      });
      A.click(function (a) {
        a.preventDefault();
        b.fancybox.next();
      });
      b.fn.mousewheel &&
        f.bind("mousewheel.fb", function (a, c) {
          if (h) a.preventDefault();
          else if (
            b(a.target).get(0).clientHeight == 0 ||
            b(a.target).get(0).scrollHeight === b(a.target).get(0).clientHeight
          ) {
            a.preventDefault();
            b.fancybox[c > 0 ? "prev" : "next"]();
          }
        });
      b.support.opacity || f.addClass("fancybox-ie");
      if (M) {
        t.addClass("fancybox-ie6");
        f.addClass("fancybox-ie6");
        b(
          '<iframe id="fancybox-hide-sel-frame" src="' +
            (/^https/i.test(window.location.href || "")
              ? "javascript:void(false)"
              : "about:blank") +
            '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>'
        ).prependTo(D);
      }
    }
  };
  b.fn.fancybox.defaults = {
    padding: 10,
    margin: 40,
    opacity: false,
    modal: false,
    cyclic: false,
    scrolling: "auto",
    width: 968,
    height: 544,
    autoScale: false,
    autoDimensions: true,
    centerOnScroll: false,
    ajax: {},
    swf: { wmode: "transparent" },
    hideOnOverlayClick: true,
    hideOnContentClick: false,
    overlayShow: true,
    overlayOpacity: 0.7,
    overlayColor: "#CCC",
    titleShow: true,
    titlePosition: "inside",
    titleFormat: null,
    titleFromAlt: false,
    transitionIn: "fade",
    transitionOut: "fade",
    speedIn: 300,
    speedOut: 300,
    changeSpeed: 300,
    changeFade: "fast",
    easingIn: "swing",
    easingOut: "swing",
    showCloseButton: true,
    showNavArrows: true,
    enableEscapeButton: true,
    enableKeyboardNav: true,
    onStart: function () {},
    onCancel: function () {},
    onComplete: function () {},
    onCleanup: function () {},
    onClosed: function () {},
    onError: function () {},
  };
  b(document).ready(function () {
    b.fancybox.init();
  });
})(jQuery);

(function (d) {
  function g(a) {
    var b = a || window.event,
      i = [].slice.call(arguments, 1),
      c = 0,
      h = 0,
      e = 0;
    a = d.event.fix(b);
    a.type = "mousewheel";
    if (a.wheelDelta) c = a.wheelDelta / 120;
    if (a.detail) c = -a.detail / 3;
    e = c;
    if (b.axis !== undefined && b.axis === b.HORIZONTAL_AXIS) {
      e = 0;
      h = -1 * c;
    }
    if (b.wheelDeltaY !== undefined) e = b.wheelDeltaY / 120;
    if (b.wheelDeltaX !== undefined) h = (-1 * b.wheelDeltaX) / 120;
    i.unshift(a, c, h, e);
    return d.event.handle.apply(this, i);
  }
  var f = ["DOMMouseScroll", "mousewheel"];
  d.event.special.mousewheel = {
    setup: function () {
      if (this.addEventListener)
        for (var a = f.length; a; ) this.addEventListener(f[--a], g, false);
      else this.onmousewheel = g;
    },
    teardown: function () {
      if (this.removeEventListener)
        for (var a = f.length; a; ) this.removeEventListener(f[--a], g, false);
      else this.onmousewheel = null;
    },
  };
  d.fn.extend({
    mousewheel: function (a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
    },
    unmousewheel: function (a) {
      return this.unbind("mousewheel", a);
    },
  });
})(jQuery);

// t: current time, b: begInnIng value, c: change In value, d: duration
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < a ? "" : e(parseInt(c / a))) +
        ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if (!"".replace(/^/, String)) {
      while (c--) r[e(c)] = k[c] || e(c);
      k = [
        function (e) {
          return r[e];
        },
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    "h.i['1a']=h.i['z'];h.O(h.i,{y:'D',z:9(x,t,b,c,d){6 h.i[h.i.y](x,t,b,c,d)},17:9(x,t,b,c,d){6 c*(t/=d)*t+b},D:9(x,t,b,c,d){6-c*(t/=d)*(t-2)+b},13:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t+b;6-c/2*((--t)*(t-2)-1)+b},X:9(x,t,b,c,d){6 c*(t/=d)*t*t+b},U:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},R:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t+b;6 c/2*((t-=2)*t*t+2)+b},N:9(x,t,b,c,d){6 c*(t/=d)*t*t*t+b},M:9(x,t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},L:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t+b;6-c/2*((t-=2)*t*t*t-2)+b},K:9(x,t,b,c,d){6 c*(t/=d)*t*t*t*t+b},J:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},I:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t*t+b;6 c/2*((t-=2)*t*t*t*t+2)+b},G:9(x,t,b,c,d){6-c*8.C(t/d*(8.g/2))+c+b},15:9(x,t,b,c,d){6 c*8.n(t/d*(8.g/2))+b},12:9(x,t,b,c,d){6-c/2*(8.C(8.g*t/d)-1)+b},Z:9(x,t,b,c,d){6(t==0)?b:c*8.j(2,10*(t/d-1))+b},Y:9(x,t,b,c,d){6(t==d)?b+c:c*(-8.j(2,-10*t/d)+1)+b},W:9(x,t,b,c,d){e(t==0)6 b;e(t==d)6 b+c;e((t/=d/2)<1)6 c/2*8.j(2,10*(t-1))+b;6 c/2*(-8.j(2,-10*--t)+2)+b},V:9(x,t,b,c,d){6-c*(8.o(1-(t/=d)*t)-1)+b},S:9(x,t,b,c,d){6 c*8.o(1-(t=t/d-1)*t)+b},Q:9(x,t,b,c,d){e((t/=d/2)<1)6-c/2*(8.o(1-t*t)-1)+b;6 c/2*(8.o(1-(t-=2)*t)+1)+b},P:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6-(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b},H:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6 a*8.j(2,-10*t)*8.n((t*d-s)*(2*8.g)/p)+c+b},T:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d/2)==2)6 b+c;e(!p)p=d*(.3*1.5);e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);e(t<1)6-.5*(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b;6 a*8.j(2,-10*(t-=1))*8.n((t*d-s)*(2*8.g)/p)*.5+c+b},F:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*(t/=d)*t*((s+1)*t-s)+b},E:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},16:9(x,t,b,c,d,s){e(s==u)s=1.l;e((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.B))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.B))+1)*t+s)+2)+b},A:9(x,t,b,c,d){6 c-h.i.v(x,d-t,0,c,d)+b},v:9(x,t,b,c,d){e((t/=d)<(1/2.k)){6 c*(7.q*t*t)+b}m e(t<(2/2.k)){6 c*(7.q*(t-=(1.5/2.k))*t+.k)+b}m e(t<(2.5/2.k)){6 c*(7.q*(t-=(2.14/2.k))*t+.11)+b}m{6 c*(7.q*(t-=(2.18/2.k))*t+.19)+b}},1b:9(x,t,b,c,d){e(t<d/2)6 h.i.A(x,t*2,0,c,d)*.5+b;6 h.i.v(x,t*2-d,0,c,d)*.5+c*.5+b}});",
    62,
    74,
    "||||||return||Math|function|||||if|var|PI|jQuery|easing|pow|75|70158|else|sin|sqrt||5625|asin|||undefined|easeOutBounce|abs||def|swing|easeInBounce|525|cos|easeOutQuad|easeOutBack|easeInBack|easeInSine|easeOutElastic|easeInOutQuint|easeOutQuint|easeInQuint|easeInOutQuart|easeOutQuart|easeInQuart|extend|easeInElastic|easeInOutCirc|easeInOutCubic|easeOutCirc|easeInOutElastic|easeOutCubic|easeInCirc|easeInOutExpo|easeInCubic|easeOutExpo|easeInExpo||9375|easeInOutSine|easeInOutQuad|25|easeOutSine|easeInOutBack|easeInQuad|625|984375|jswing|easeInOutBounce".split(
      "|"
    ),
    0,
    {}
  )
);

/*
page: http://www.krones.com/
url: http://www.krones.com/cssjs/index.js
*/
