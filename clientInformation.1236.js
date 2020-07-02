function getCookie(e) {
  var t = document.cookie.match(
    RegExp(
      "(?:^|; )" +
        e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return t ? decodeURIComponent(t[1]) : void 0;
}
function setCookie(e, t, i) {
  i = i || {};
  var o = i.expires;
  if ("number" == typeof o && o) {
    var n = new Date();
    n.setTime(n.getTime() + 1e3 * o), (o = i.expires = n);
  }
  var a = i.path;
  void 0 === a && (i.path = "/"),
    o && o.toUTCString && (i.expires = o.toUTCString()),
    (t = encodeURIComponent(t));
  var s = e + "=" + t;
  for (var r in i) {
    s += "; " + r;
    var c = i[r];
    c !== !0 && (s += "=" + c);
  }
  document.cookie = s;
}
function receivePinCount(e) {
  void 0 !== typeof e.count && $("a.pt").find("span").text(e.count);
}
function subscribe_by_email(e) {
  validateEmail(e) &&
    ($.ajax({
      url: "/index.php?route=account/account/subscribe",
      method: "POST",
      data: { email: e },
      success: function (t) {
        if (!t.error) {
          document.$mail_input.val(e),
            document.$t_mail_input.val(e),
            setSubscribed(document.$email_submit),
            setSubscribed(document.$t_email_submit);
          var i = new Date("2035-01-01");
          setCookie("subscribed_email", e, { expires: i.toUTCString() });
        }
      },
    }),
    "undefined" != typeof ga &&
      ga("send", "event", "ls", "Subscribe", "Subscribe", 1),
    (document.subscribed_email = e));
}
function setSubscribed(e) {
  $(e).val("Subscribed").attr("disabled", !0).addClass("subscribed");
}
function subscribeInit() {
  document.$email_submit.on("click", function () {
    return subscribe_by_email(document.$mail_input.val()), !1;
  }),
    document.$t_email_submit.on("click", function () {
      return subscribe_by_email(document.$t_mail_input.val()), !1;
    }),
    (document.subscribed_email = getCookie("subscribed_email")),
    void 0 != document.subscribed_email &&
      (document.$mail_input.val(document.subscribed_email),
      document.$t_mail_input.val(document.subscribed_email),
      setSubscribed(document.$email_submit),
      setSubscribed(document.$t_email_submit)),
    document.$mail_input.on("keyup", function (e) {
      e.target.value != document.subscribed_email
        ? document.$email_submit
            .val("Subscribe")
            .attr("disabled", !1)
            .removeClass("subscribed")
        : setSubscribed(document.$email_submit);
    }),
    document.$t_mail_input.on("keyup", function (e) {
      e.target.value != document.subscribed_email
        ? document.$t_email_submit
            .val("Subscribe")
            .attr("disabled", !1)
            .removeClass("subscribed")
        : setSubscribed(document.$t_email_submit);
    });
}
function validateEmail(e) {
  var t = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    i = t.test(e);
  return i;
}
function ga_send(e, t) {
  void 0 === t && (t = e),
    "undefined" != typeof ga && ga("send", "event", t, e, 1);
}
function form_log(e, t, i) {
  void 0 !== t &&
    "" != t &&
    $.ajax({
      url: "index.php?route=common/header/form_log",
      method: "POST",
      data: { form_name: e, field_name: t, value: i },
    });
}
$(document).ready(function () {
  function e(t) {
    t.stopPropagation(),
      t.preventDefault(),
      cart.add($(this).data("prod")),
      $(this).addClass("added"),
      $(this).off("click", e);
    var i = $(this).children("span").eq(0);
    I.hasClass("zero") && I.removeClass("zero");
    var o = I.find("span");
    i.hasClass("word") &&
      (i.find("i").remove(), i.prepend("<i>Item in<br>basket</i>"));
    var n = "" == o.text() ? 0 : parseInt(o.text());
    return (
      0 == n && I.find("svg, span").wrapAll('<a href="/basket"></a>'),
      o.text(1 * n + 1),
      ga_send("bfc", "ls"),
      !1
    );
  }
  function t() {
    $("#zoom-full").addClass("ani"), setCookie("zoom_ani_was", 0);
  }
  function i(e) {
    if (((e = JSON.parse(e)), W || B)) {
      if (
        ($(".price .wrap").each(function () {
          var t = $(this).find("i");
          t.length > 0
            ? $(this)
                .html(o($(this).data("price"), e.l, e.r, e.q))
                .prepend(t)
            : $(this).html(o($(this).data("price"), e.l, e.r, e.q));
        }),
        B)
      ) {
        var t = $("#price");
        t.contents().each(function () {
          $("#price")
            .contents()
            .filter(function () {
              return !$(this).prop("class") && !$(this).attr("id");
            })
            .remove();
        }),
          t.find(".pr-gap").attr("style", ""),
          t.append(o(t.data("price"), e.l, e.r, e.q)).css("min-width", 0);
      }
      $.post("/index.php?route=common/currency/set", "code=" + e.code);
    }
    A &&
      ($(".price").each(function () {
        $(this).html(o($(this).data("price"), e.l, e.r, e.q));
      }),
      $.post("/index.php?route=common/currency/set", "code=" + e.code));
  }
  function o(e, t, i, o) {
    e *= o;
    var n = Math.floor(e),
      a = (e - n).toFixed(2).substr(2);
    return (t + "<span> </span>" + n + "<sup>" + a + i + "</sup>").trim();
  }
  function n() {
    function e(e) {
      e.preventDefault(),
        (n = !0),
        (o = window.innerHeight),
        (a = g.scrollTop()),
        i.addClass("active"),
        B || (i.css("min-height", o), g.addClass("hidden-f-content"));
    }
    function t(e) {
      e.preventDefault(),
        i.css("min-height", 0).removeClass("active"),
        g.removeClass("hidden-f-content").scrollTop(a),
        (n = !1);
    }
    if (B) var i = $("footer").find(".tags_menu").find(".wrapper");
    if (W) var i = $("footer").find(".filter");
    if (i.length > 0) {
      var o = window.innerHeight,
        n = !1,
        a = 0;
      $("footer")
        .find(".selector")
        .find("a")
        .on("click", function (i) {
          n ? t(i) : e(i);
        }),
        i.find(".close_filter").on("click", function (e) {
          t(e);
        }),
        g.on("ls_orient", function (e, t) {
          o = window.innerHeight;
        });
    }
  }
  function a() {
    var e = $(window).scrollTop(),
      t = $(window).outerHeight();
    if (
      e + t > cartRelatedOffset &&
      e + t < cartRelatedOffset + cartRelatedHeight
    ) {
      var i = (
        1 -
        (e + t - cartRelatedOffset - cartCheckoutbarHeight) / cartRelatedHeight
      ).toFixed(2);
      $cartScrollStyle.html("body:before{opacity:" + i + "}");
    }
  }
  function s() {
    var e = 100,
      i = 0.3 * q.outerHeight() + e,
      o = ($("nav.row").offset(), $(window).scrollTop()),
      n = $(window).outerHeight();
    o > i ? w.addClass("offset") : w.removeClass("offset"),
      o > e ? w.addClass("sticky") : w.removeClass("sticky"),
      o + n > P.offset().top
        ? (C.addClass("sticky"), w.addClass("no-bckg"))
        : (C.removeClass("sticky"), w.removeClass("no-bckg")),
      o > R - n && !k && w.addClass("index-hide"),
      R - n > o && !k && w.removeClass("index-hide"),
      Y && void 0 !== ue && ue > 0 && o + n > ue && t(),
      (G = !1);
  }
  function r() {
    j.removeClass("hide"),
      w.addClass("menu-active"),
      w.removeClass("mini"),
      J && ((Q = g.scrollTop()), D.addClass("hidden")),
      M ||
        (w.css("clip", "rect(0, auto, " + y + "px, 0)"),
        (b = $(document).scrollTop()),
        $(window).on("scroll", d)),
      (k = !0),
      $.ajax({
        method: "POST",
        data: { page_type: "Browsing" },
        url: "/index.php?route=common/header/spylog",
      }),
      "undefined" != typeof ga &&
        ga("send", "event", "ls", "Browsing", "Browsing", 1),
      g.on("click", l);
  }
  function c() {
    j.removeClass("hide"),
      w.removeClass("menu-active"),
      M || w.attr("style", ""),
      (k = !1),
      g.off("click", l),
      $(window).unbind("scroll", d),
      A ? s() : m(),
      J && (D.removeClass("hidden"), g.scrollTop(Q)),
      M && E && w.addClass("mini");
  }
  function d(e) {
    Math.abs($(document).scrollTop() - b) > 100 && c();
  }
  function l(e) {
    w.is(e.target) || 0 !== w.has(e.target).length || c();
  }
  function u() {
    M ||
      ((y = w.outerHeight()),
      (x = _.outerHeight()),
      k && w.css("clip", "rect(0, auto, " + y + "px, 0)")),
      M &&
        setTimeout(function () {
          if (
            ((N = window.innerWidth),
            (K = window.innerHeight),
            (L = K > N),
            Z && /CriOS/.test(clientInformation.userAgent))
          ) {
            var e = L ? screen.width / 1e3 : screen.height / 1e3;
            L
              ? U.attr(
                  "content",
                  "width=1000, initial-scale=" +
                    e +
                    ", minimum-scale=" +
                    e +
                    ", maximum-scale=" +
                    e
                )
              : U.attr(
                  "content",
                  "width=1000, initial-scale=" +
                    e +
                    ", minimum-scale=" +
                    e +
                    ", maximum-scale=" +
                    e
                ),
              setTimeout(function () {
                U.attr("content", "width=1000, initial-scale=" + e);
              }, 300);
          }
          L
            ? (g.addClass("portrait").removeClass("landscape"),
              g.trigger("ls_orient", "portrait"))
            : (g.addClass("landscape").removeClass("portrait"),
              g.trigger("ls_orient", "landscape"));
        }, 300),
      (N = window.innerWidth),
      (K = window.innerHeight);
  }
  function m() {
    var e = $(window).scrollTop(),
      i = $(window).outerHeight();
    e > 0 && !k && (w.addClass("mini"), (H = !0)),
      0 != e || k || (w.removeClass("mini"), (H = !1)),
      e > R - $(window).height() && !k && !E && j.addClass("hide"),
      e < R - $(window).height() && !k && !E && j.removeClass("hide"),
      te &&
        void 0 !== ie &&
        (e > ie ? w.removeClass("onBanner") : w.addClass("onBanner")),
      Y &&
        (W && void 0 !== re && e + i > re && t(),
        B && void 0 !== de && e + i > de && t());
  }
  function f() {
    var e = S;
    $.ajax({
      url:
        "https://api.pinterest.com/v1/urls/count.json?callback=receivePinCount&url=" +
        e,
      type: "GET",
      dataType: "script",
      crossDomain: !0,
    });
  }
  function p() {
    var e = S;
    $.ajax({
      url:
        "https://api.facebook.com/method/links.getStats?format=json&urls=" + e,
      type: "GET",
      dataType: "json",
      crossDomain: !0,
    }).done(function (e) {
      void 0 !== typeof e[0] && $("a.fb").find("span").text(e[0].total_count);
    });
  }
  function h() {
    (document.$t_email_submit = $("#t-email-submit")),
      (document.$email_submit = $("#email-submit")),
      (document.$mail_input = $("#mail_input")),
      (document.$t_mail_input = $("#t_mail_input"));
  }
  function v() {}
  var b,
    g = $("body"),
    w = $("header"),
    _ = $("nav>.menu"),
    C = $("#show-menu"),
    k = !1,
    y = w.outerHeight(),
    x = _.outerHeight(),
    S = $("head").find('link[rel="canonical"]').attr("href"),
    T = !1,
    H = !1,
    z = $("footer"),
    O = z.offset().top,
    R = z.find(".right-menu").offset().top,
    j = $("#logo-min"),
    q = $(".row.main"),
    D = $("div.content"),
    P = $("nav.row"),
    I = $("#cart_container"),
    A = $("body.index").length > 0,
    B = $("body.product").length > 0,
    E = $("body.cart").length > 0,
    F = $(".row.related"),
    U = $('meta[name="viewport"]'),
    W = $("body.collection").length > 0,
    G = !1,
    M = $("body.mobile").length > 0,
    Z = $("body.iphone").length > 0,
    J = $("body.mobile:not(.tablet)").length > 0,
    N = window.innerWidth,
    K = window.innerHeight,
    L = K > N,
    Q = 0,
    V = void 0 === getCookie("version_menu") ? 0 : getCookie("version_menu"),
    X = void 0 === getCookie("zoom_ani_was") ? 0 : getCookie("zoom_ani_was");
  setCookie("zoom_ani_was", X);
  var Y = 0,
    ee = $("#top_image"),
    te = ee.length > 0;
  if (te) var ie = ee.offset().top + ee.outerHeight() - 100;
  if (
    ($("#currency-selector").on("change", function (e) {
      $("#currency").find("span").html($(this).find("option:selected").text()),
        i($(this).val());
    }),
    L ? g.addClass("portrait") : g.addClass("landscape"),
    1 == V && 0 == X && (Y = 1),
    E && M)
  ) {
    w.addClass("mini");
    $(".checkoutFixed");
  }
  if (
    (M &&
      ($(window).on("orientationchange", function () {
        u();
      }),
      w.addClass("bckg")),
    $(window).load(function () {
      (y = w.outerHeight()),
        (x = _.outerHeight()),
        (O = z.offset().top),
        (R = z.find(".right-menu").offset().top),
        te && (ie = ee.offset().top + ee.outerHeight() - 100),
        A ? s() : m(),
        E &&
          F.length > 0 &&
          ((cartRelatedOffset = F.offset().top),
          (cartRelatedHeight = F.outerHeight()),
          (cartCheckoutbarHeight = $(".checkoutFixed").outerHeight()),
          a()),
        B && ce.length > 0 && (de = ce.offset().top),
        v();
    }),
    J ||
      w.on("mouseover", function () {
        (T = !0), w.addClass("bckg");
      }),
    J ||
      w.on("mouseout", function () {
        (T = !1), w.removeClass("bckg");
      }),
    Z)
  )
    for (var oe in document.styleSheets) {
      var ne = document.styleSheets[oe];
      if (ne.rules)
        for (var ae = ne.rules.length - 1; ae >= 0; ae--)
          ne.rules[ae].selectorText &&
            ne.rules[ae].selectorText.match(":hover") &&
            ne.deleteRule(ae);
    }
  if ((W || B) && !E) {
    var se = $(".el.banner").eq(0);
    if (se.length > 0) var re = se.offset().top;
    ($addtb = $(".el.addtb")),
      $addtb.length > 0 &&
        $addtb.filter(":not(.sold)").find(".price:not(.added)").on("click", e),
      J && n();
  }
  if (B) {
    var ce = F.eq(0);
    if (ce.length > 0) var de = ce.offset().top;
    J && n();
  }
  if (A) {
    var le = $(".row.multi"),
      ue = 0;
    if (
      ((ue = le.offset().top),
      Z &&
        $(document).on("touchend", "*", function (e) {
          console.log(e);
        }),
      $(window)
        .on("scroll", function () {
          G || (window.requestAnimationFrame(s), (G = !0));
        })
        .trigger("scroll"),
      ($popupuns = $("#unsub")),
      $popupuns.length > 0)
    ) {
      $popupuns.find(".close").on("click", function () {
        $popupuns.addClass("hidden");
      });
      for (
        var me,
          fe = [],
          pe = window.location.href
            .slice(window.location.href.indexOf("?") + 1)
            .split("&"),
          he = 0;
        he < pe.length;
        he++
      )
        (me = pe[he].split("=")), fe.push(me[0]), (fe[me[0]] = me[1]);
      console.log(fe),
        $popupuns.find("a").on("click", function () {
          $.ajax({
            method: "POST",
            data: { c: fe.h, m: fe.m, t: fe.t },
            url: "/index.php?route=account/unsubscribe/cancel",
          }).done(function () {
            $popupuns.addClass("hidden");
          });
        });
    }
  } else
    m(),
      B && (f(), p()),
      $(window).scroll(function () {
        m();
      }),
      $(function () {
        $(".sticky").length > 0 &&
          void 0 !== $.Stickyfill &&
          $(".sticky").Stickyfill();
      });
  g.on("click", "#show-menu", function (e) {
    return (
      e.stopPropagation(),
      e.preventDefault(),
      k ? c() : r(),
      $("#zoom-full").removeClass("ani"),
      Y && (setCookie("zoom_ani_was", 1), (Y = 0)),
      !1
    );
  }),
    h(),
    subscribeInit(),
    $(".el.w1.dscr")
      .next()
      .on("mouseover", function () {
        $(this).prev().find("a").addClass("hover");
      }),
    $(".el.w1.dscr")
      .next()
      .on("mouseout", function () {
        $(this).prev().find("a").removeClass("hover");
      });
});
//# sourceMappingURL=/js/main.min.js.map
/*
page: http://www.lavishshoestring.com/
url: https://www.lavishshoestring.com/js/main.min.js?1482922860
*/
