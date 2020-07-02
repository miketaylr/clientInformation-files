/*--------------
 @copyright David Maser
 david.maser@altitude-sports.com
 ----------------
 @update July 28,2016
 *
 include davesConfig.js before this file
 *
 --------------*/
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
Node.prototype.countChildNodes = function () {
  return this.hasChildNodes()
    ? Array.prototype.slice
        .apply(this.childNodes)
        .map(function (el) {
          return 1 + el.countChildNodes();
        })
        .reduce(function (previousValue, currentValue, index, array) {
          return previousValue + currentValue;
        })
    : 0;
};
if ($(window).width() <= 640) {
  var lowLevel = "phone";
} else if ($(window).width() > 767 && $(window).width() < 1025) {
  lowLevel = "tab";
} else if ($(window).width() > 1025) {
  lowLevel = "desk";
}
var ui = {
  /*
     create a few UI constants that will be
     used by different functions and features
     */
  curPos: 0,
  clickable: true,
  pageClass: $(conf.dom).attr("class"),
  wWidth: $(window).width(),
};
var constants = {
  /*
  create constants from liquid objects
  so that we keep liquid out of the core
  function. 
  */
  images: {
    logo: {
      en:
        "//cdn.shopify.com/s/files/1/0050/3522/t/22/assets/alti-x-tlh.svg?3053195883350170376",
      fr:
        "//cdn.shopify.com/s/files/1/0050/3522/t/22/assets/alti-x-ldc.svg?3053195883350170376",
    },
    checkout:
      "//cdn.shopify.com/s/files/1/0050/3522/files/checkout_logo_22_small.png?3053195883350170376",
    background: {
      christmas:
        "//cdn.shopify.com/s/files/1/0050/3522/t/22/assets/white-balls.jpg?3053195883350170376",
      autumn:
        "//cdn.shopify.com/s/files/1/0050/3522/t/22/assets/autumn-leaf.jpg?3053195883350170376",
      halloween:
        "//cdn.shopify.com/s/files/1/0050/3522/t/22/assets/halloween-Pumpkins.jpg?3053195883350170376",
    },
  },
  json: {
    popup: {
      source:
        "//cdn.shopify.com/s/files/1/0050/3522/t/22/assets/popups-data.json?3053195883350170376",
      fade: 100,
    },
    nav: {
      source:
        "//cdn.shopify.com/s/files/1/0050/3522/t/22/assets/nav.json?3053195883350170376",
      count: 28,
    },
  },
  mobile: {
    help: "help-dropdown",
  },
  components: {
    liveengage: {
      account: "69779087",
    },
  },
  shop: {
    name: {
      en: "The Last Hunt",
      fr: "La DerniÃ¨re Chasse",
    },
    access: {
      maintenance: "",
      available: "open",
    },
    banner: {
      view: "block",
      number: 6,
      hide: true,
    },
  },
};
var core = {
  /*
  define core object under which all functions
  will reside
  */
  node_glib_fn: function () {
    var standardGlobals = [
      "top",
      "window",
      "location",
      "external",
      "chrome",
      "document",
      "inlineCSS",
      "target",
      "width",
      "height",
      "canvas",
      "data",
      "DOMURL",
      "img",
      "svg",
      "ctx",
      "url",
      "w",
      "a",
      "speechSynthesis",
      "webkitNotifications",
      "localStorage",
      "sessionStorage",
      "applicationCache",
      "webkitStorageInfo",
      "indexedDB",
      "webkitIndexedDB",
      "crypto",
      "CSS",
      "performance",
      "console",
      "devicePixelRatio",
      "styleMedia",
      "parent",
      "opener",
      "frames",
      "self",
      "defaultstatus",
      "defaultStatus",
      "status",
      "name",
      "length",
      "closed",
      "pageYOffset",
      "pageXOffset",
      "scrollY",
      "scrollX",
      "screenTop",
      "screenLeft",
      "screenY",
      "screenX",
      "innerWidth",
      "innerHeight",
      "outerWidth",
      "outerHeight",
      "offscreenBuffering",
      "frameElement",
      "clientInformation",
      "navigator",
      "toolbar",
      "statusbar",
      "scrollbars",
      "personalbar",
      "menubar",
      "locationbar",
      "history",
      "screen",
      "postMessage",
      "close",
      "blur",
      "focus",
      "ondeviceorientation",
      "ondevicemotion",
      "onunload",
      "onstorage",
      "onresize",
      "onpopstate",
      "onpageshow",
      "onpagehide",
      "ononline",
      "onoffline",
      "onmessage",
      "onhashchange",
      "onbeforeunload",
      "onwaiting",
      "onvolumechange",
      "ontimeupdate",
      "onsuspend",
      "onsubmit",
      "onstalled",
      "onshow",
      "onselect",
      "onseeking",
      "onseeked",
      "onscroll",
      "onreset",
      "onratechange",
      "onprogress",
      "onplaying",
      "onplay",
      "onpause",
      "onmousewheel",
      "onmouseup",
      "onmouseover",
      "onmouseout",
      "onmousemove",
      "onmouseleave",
      "onmouseenter",
      "onmousedown",
      "onloadstart",
      "onloadedmetadata",
      "onloadeddata",
      "onload",
      "onkeyup",
      "onkeypress",
      "onkeydown",
      "oninvalid",
      "oninput",
      "onfocus",
      "onerror",
      "onended",
      "onemptied",
      "ondurationchange",
      "ondrop",
      "ondragstart",
      "ondragover",
      "ondragleave",
      "ondragenter",
      "ondragend",
      "ondrag",
      "ondblclick",
      "oncuechange",
      "oncontextmenu",
      "onclose",
      "onclick",
      "onchange",
      "oncanplaythrough",
      "oncanplay",
      "oncancel",
      "onblur",
      "onabort",
      "onwheel",
      "onwebkittransitionend",
      "onwebkitanimationstart",
      "onwebkitanimationiteration",
      "onwebkitanimationend",
      "ontransitionend",
      "onsearch",
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
      "requestAnimationFrame",
      "cancelAnimationFrame",
      "webkitRequestAnimationFrame",
      "webkitCancelAnimationFrame",
      "webkitCancelRequestAnimationFrame",
      "captureEvents",
      "releaseEvents",
      "atob",
      "btoa",
      "setTimeout",
      "clearTimeout",
      "setInterval",
      "clearInterval",
      "TEMPORARY",
      "PERSISTENT",
      "getComputedStyle",
      "getMatchedCSSRules",
      "webkitConvertPointFromPageToNode",
      "webkitConvertPointFromNodeToPage",
      "webkitRequestFileSystem",
      "webkitResolveLocalFileSystemURL",
      "openDatabase",
      "addEventListener",
      "removeEventListener",
      "dispatchEvent",
    ];
    var appSpecificGlobals = {};
    for (var w in window) {
      if (standardGlobals.indexOf(w) == -1) {
        appSpecificGlobals[w] = window[w];
      }
    }
    for (var item in appSpecificGlobals) {
      $(".collection_container").append(
        '<div class="item_L">' +
          item +
          '</div><div class="item_R">' +
          typeof item +
          "</div><br />"
      );
    }
  },
  /*-------------------
     a function to create a popup in the
     altitude black friday version of the
     site.
     -------------------*/
  buildPopUp: function (node, lang) {
    //node refers to the nodeID in the JSON
    $(".ocp.i-popup").remove();
    var node = node || null,
      domNode = "",
      item = [],
      links = [];
    if (lang == "en") {
      var imgSrc = constants.images.logo.en;
    } else if (lang == "fr") {
      imgSrc = constants.images.logo.fr;
    }
    $.ajax({
      url: constants.json.popup.source,
      dataType: "json",
      method: "GET",
      success: function (data) {
        for (var i = 0; i < data.popUpItem.length; i++) {
          if (data.popUpItem[i].nodeID == node) {
            if (lang == "en") {
              if (data.popUpItem[i].node1 !== null) {
                item[1] = data.popUpItem[i].node1.en;
              } else {
                item[1] = "";
              }
              if (data.popUpItem[i].node2 !== null) {
                item[2] = data.popUpItem[i].node2.en;
              } else {
                item[2] = "";
              }
              if (data.popUpItem[i].node3 !== null) {
                item[3] = data.popUpItem[i].node3.en;
              } else {
                item[3] = "";
              }
              if (data.popUpItem[i].node4 !== null) {
                item[4] = data.popUpItem[i].node4.en;
              } else {
                item[4] = "";
              }
              if (data.popUpItem[i].button !== null) {
                item[5] = data.popUpItem[i].button.en;
              } else {
                item[5] = "";
              }
              if (data.popUpItem[i].subLink !== null) {
                item[6] = data.popUpItem[i].subLink.en;
              } else {
                item[6] = "";
              }
            } else if (lang == "fr") {
              if (data.popUpItem[i].node1 !== null) {
                item[1] = data.popUpItem[i].node1.fr;
              } else {
                item[1] = "";
              }
              if (data.popUpItem[i].node2 !== null) {
                item[2] = data.popUpItem[i].node2.fr;
              } else {
                item[2] = "";
              }
              if (data.popUpItem[i].node3 !== null) {
                item[3] = data.popUpItem[i].node3.fr;
              } else {
                item[3] = "";
              }
              if (data.popUpItem[i].node4 !== null) {
                item[4] = data.popUpItem[i].node4.fr;
              } else {
                item[4] = "";
              }
              if (data.popUpItem[i].button !== null) {
                item[5] = data.popUpItem[i].button.fr;
              } else {
                item[5] = "";
              }
              if (data.popUpItem[i].subLink !== null) {
                item[6] = data.popUpItem[i].subLink.fr;
              } else {
                item[6] = "";
              }
            }
            if (data.popUpItem[i].node1 !== null) {
              links[1] = data.popUpItem[i].node1.link;
            } else {
              links[1] = null;
            }
            if (data.popUpItem[i].node2 !== null) {
              links[2] = data.popUpItem[i].node2.link;
            } else {
              links[2] = null;
            }
            if (data.popUpItem[i].node3 !== null) {
              links[3] = data.popUpItem[i].node3.link;
            } else {
              links[3] = null;
            }
            if (data.popUpItem[i].node4 !== null) {
              links[4] = data.popUpItem[i].node4.link;
            } else {
              links[4] = null;
            }
            if (data.popUpItem[i].subLink !== null) {
              links[6] = data.popUpItem[i].subLink.link;
            } else {
              links[6] = null;
            }
            if (data.popUpItem[i].button !== null) {
              links[7] = data.popUpItem[i].button.link;
            } else {
              links[7] = null;
            }
            domNode +=
              '<div class="ocp i-popup" style="opacity:0"><div class="ocp i-layer"><div class="ocp i-node">';
            domNode +=
              '<div class="i-node b-header"><div class="i-node-flush"><img src="' +
              imgSrc +
              '" /></div></div>';
            domNode +=
              '<div class="i-node b-content" style="background: url(' +
              data.popUpItem[i].bg +
              ');background-size: cover;background-repeat: no-repeat;">';
            if (item[1] !== null && item[1] !== "" && item[1] !== undefined) {
              domNode += '<div class="d-line node1">';
              if (
                item[1].l !== "" &&
                item[1].l !== undefined &&
                item[1].l !== null
              ) {
                domNode += '<a href="' + item[1].l + '">';
              }
              domNode += item[1];
              if (
                links[1] !== "" &&
                links[1] !== undefined &&
                links[1] !== null
              ) {
                domNode += "</a>";
              }
              domNode += "</div>";
            } else {
              domNode += '<div class="d-space-medi"></div>';
            }
            if (item[2] !== null && item[2] !== "" && item[2] !== undefined) {
              domNode += '<div class="d-line node2">';
              if (
                links[2] !== "" &&
                links[2] !== undefined &&
                links[2] !== null
              ) {
                domNode += '<a href="' + links[2] + '">';
              }
              domNode += item[2];
              if (
                links[2] !== "" &&
                links[2] !== undefined &&
                links[2] !== null
              ) {
                domNode += "</a>";
              }
              domNode += "</div>";
            } else {
              domNode += '<div class="d-space-mini"></div>';
            }
            if (item[3] !== null && item[3] !== "" && item[3] !== undefined) {
              domNode += '<div class="d-line node3">';
              if (
                links[3] !== "" &&
                links[3] !== undefined &&
                links[3] !== null
              ) {
                domNode += '<a href="' + links[3] + '">';
              }
              domNode += item[3];
              if (
                links[3] !== "" &&
                links[3] !== undefined &&
                links[3] !== null
              ) {
                domNode += "</a>";
              }
              domNode += "</div>";
            } else {
              domNode += '<div class="d-space-nul"></div>';
            }
            if (item[4] !== null && item[4] !== "" && item[4] !== undefined) {
              domNode += '<div class="d-line node4">';
              if (
                links[4] !== "" &&
                links[4] !== undefined &&
                links[4] !== null
              ) {
                domNode += '<a href="' + links[4] + '">';
              }
              domNode += item[4];
              if (
                links[4] !== "" &&
                links[4] !== undefined &&
                links[4] !== null
              ) {
                domNode += "</a>";
              }
              domNode += "</div>";
            } else {
              domNode += '<div class="d-space-mini"></div>';
            }
            if (item[5] !== null && item[5] !== "" && item[5] !== undefined) {
              domNode += '<div class="d-line node5"><button';
              if (links[7] !== null && links[7] !== "") {
                domNode += ' data-link="' + links[7] + '"';
              }
              domNode += ">" + item[5] + "</button></div>";
            } else {
              domNode += '<div class="d-space-mini"></div>';
            }
            if (item[6] !== null && item[6] !== "" && item[6] !== undefined) {
              domNode += '<div class="d-line node6">';
              if (
                links[6] !== "" &&
                links[6] !== undefined &&
                links[6] !== null
              ) {
                domNode += '<a href="' + links[6] + '">';
              }
              domNode += item[6];
              if (
                links[6] !== "" &&
                links[6] !== undefined &&
                links[6] !== null
              ) {
                domNode += "</a>";
              }
              domNode += "</div>";
            } else {
              domNode += '<div class="d-space-medi"></div>';
            }
            domNode += "</div></div></div></div>";
            $(conf.root).animate({ scrollTop: 0 }, 1000);
            $(conf.dom).prepend(domNode);
            $(".i-popup").animate({ opacity: 1 }, constants.json.popup.fade);
            $(conf.root).css("overflow", "hidden");
            $(".d-line.node5")
              .find("button")
              .on("click", function () {
                $(".ocp.i-popup").remove();
                $(conf.root).attr("style", "");
                if (links[7] !== null) {
                  window.location.href = links[7];
                }
              });
          }
        }
      },
      error: function () {},
    });
  },
  returnSizeValue: function (size) {
    var sz = size;
    var a = window.location.pathname,
      b = window.location.pathname.indexOf("sizes_");
    if (b > -1) {
      var c = a.slice(b);
      if (c.indexOf("+") > -1) {
        var d = c.indexOf("+"),
          e = c.slice(0, d),
          f = e.replace("sizes_", "");
        $(".calcSize").attr("href", sz + "?filterBySize=" + f);
      } else {
        f = c.replace("sizes_", "");
      }
      return sz + "?filterBySize=" + f;
    }
  },
  addBackgroundImage: function (el) {
    switch (el) {
      case "x":
        var a = constants.images.background.christmas;
        break;
      case "f":
        a = constants.images.background.autumn;
        break;
      case "t":
        a = constants.images.background.halloween;
        break;
    }
    $(conf.base).append(
      '<style type="text/css">body{  background-image: url(\'' +
        a +
        "');background-repeat: no-repeat;background-position-y: bottom;background-size: contain;}</style>"
    );
  },
  swapTitleText: function (el) {
    var a = document.title;
    var b = " - " + el;
    document.title = a + b;
  },
  buildParentLink: function () {
    return document.domain;
  },
  /*-------------------
     a function to create a desktop
     browser notification event. Takes
     two parameters : ti = The Title
     ct = The Content.
     -------------------*/
  brNotifier: function (ti, ct) {
    if (window.Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        // status is "granted", if accepted by user
        var n = new Notification(ti, {
          body: ct,
          icon: constants.images.checkout,
        });
      });
    }
  },
  /*-------------------
     function that automatically
     checks a product variant
     checkbox if it is the only
     option available
     -------------------*/
  checkLoner: function () {
    if ($(".main-pcc").find(".radio").length == 1) {
      $(".main-pcc").find(".radio").prop("checked", true);
    }
  },
  /*-------------------
     function that removes product
     images from the thumbnails if
     the product is out of stock
     -------------------*/
  purgeFlex: function () {
    try {
      if (
        $(".select_toggle_border").hasClass("product") &&
        !$(".select_toggle_border")
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .hasClass("fancybox-inner")
      ) {
        var boxPar = ".main-pcc";
      } else {
        boxPar = ".fancybox-inner";
      }
      var inarr = [];
      $.each($(boxPar).find(".radio"), function (key, value) {
        var a = $(this).data("prodname").slice(0, 50).toLowerCase();
        inarr.push(a);
      });
      $.each($(".op_sele"), function (key, value) {
        var a = $(this).html().slice(0, 50).toLowerCase();
        if ($.inArray(a, inarr) < 0) {
          $(this).parent("li").remove();
          /*$(this).parent().parent().parent().find('.slides').find('li:not([data-bridge="'+a+'"])').remove();
                     $(this).parent().parent().parent().find('.slides').find('li[data-bridge="'+a+'"]:gt(0)').remove();
                     flexJumpTo(a);
                     var slider = $('.flexslider').data('flexslider');
                     slider.stop();*/
        }
      });
    } catch (e) {}
    core.checkLoner();
  },
  /*-------------------
     function that jumps the
     flexslider component to #filt-zone
     a specific slide based
     on the value of it's data
     attributes
     -------------------*/
  flexJumpTo: function (val) {
    var colArr = [];
    $.each($(".main-pcc").find(".slides").find("li:not(.clone)"), function (
      key,
      value
    ) {
      var a = $(this).data("bridge").slice(0, 50).toLowerCase();
      colArr.push(a);
    });
    var b = colArr.indexOf(val.slice(0, 50).toLowerCase());
    var slider = $(".flexslider").data("flexslider");
    slider.vars.animationSpeed = 500;
    var animationSpeed = slider.vars.animationSpeed;
    slider.flexAnimate(b);
    slider.pause();
  },
  starHere: function () {
    /*-------------------
       simple function that duplicates
       the star rating icons and
       places a copy beside
       the prices
       -------------------*/
    $(".spr-starrating.spr-summary-starrating")
      .clone()
      .appendTo(".modal_price");
  },
  killHidden: function () {
    /*-------------------
         very simple function to remove
         from the dom, elements that are
         marked as hidden in the
         architecture json file .
         -------------------*/
    $(".no-view").remove();
  },
  percentList: function (obj, lang) {
    /*------------------
         function that builds the
         percent reduction values
         list and appends it to
         an object on the page
         i.e. percentList('#filter-options');
         -------------------*/
    if (typeof lang !== "undefined") {
      if (lang == "en") {
        var langLabel = "Discount",
          resLabel = "Reset";
      } else if (lang == "fr") {
        langLabel = "Rabais";
        resLabel = "R&eacute;initialiser";
      }
    } else {
      langLabel = "Discount";
    }
    var discList = '<div class="filter-intro discount">' + langLabel + "</div>";
    discList += '<div class="filtered sixth-discounts">';
    var list = $(".data-pack")
      .map(function () {
        return $(this).attr("data-discount");
      })
      .get();
    //list = $.unique(list);
    list = list
      .reverse()
      .filter(function (e, i, arr) {
        return list.indexOf(e, i + 1) === -1;
      })
      .reverse();
    var a = list.sort();
    var b = a.length;
    for (var i = 0; i < b; i++) {
      if (a[i] > 0) {
        discList +=
          '<div class="filtermenu level-six-items"><div class="discount-selector" data-value="' +
          a[i] +
          '"><div class="pinhole di_level"></div>' +
          a[i] +
          "%</div></div>";
      }
    }
    discList +=
      '<div class="filtermenu level-six-items"><div class="discount-selector" data-value="0"><div class="pinhole di_level"></div>' +
      resLabel +
      "</div></div>";
    discList += "</div>";
    if (obj !== "") {
      $(obj).append(discList);
    }
    $(document).on("click", ".discount-selector", function (e) {
      var gl = $(conf.base).attr("lang");
      if (gl == "en") {
        var lnhide = "Hide Filters",
          lnshow = "Show Filters";
      } else if (gl == "fr") {
        lnhide = "Masquer Filtres";
        lnshow = "Afficher Filters";
      }
      core.resortOnDiscount("down", $(this).attr("data-value"));
      if ($(".bigblob").is(":visible")) {
        $(".bigblob").hide(100);
        $(".filter_launcher").find(".sorter-fire-refine").html(lnshow);
      }
      $(".discount-selector").attr("style", "");
      if ($(this).attr("data-value") > 0) {
        $(this).css("font-size", "140%").css("font-weight", "bold");
      }
    });
  },
  subGlob: function () {
    var olen = $("#filt-zone")
      .find(".clear")
      .first()
      .prevAll(".data-pack:not(:hidden)").length;
    if ($(window).width() < 769) {
      $("br.clear").remove();
    }
    if ($(window).width() > 768) {
      if (olen == 2 || olen == 3) {
        $("#filt-zone").find(".clear").first().remove();
      }
    }
    var a = $("#filt-zone").find(".data-pack:not(:hidden)").next().first();
    if (a.hasClass("clear")) {
      $(".data-pack:not(:hidden)")
        .first()
        .detach()
        .insertAfter("br.clear:last");
    }
  },
  resortOnDiscount: function (dir, value) {
    /*------------------
         function that resorts the
         collection page content based
         on each product thumbnail's
         dicount value.
         dir can be up or down
         -------------------*/
    if (typeof value !== "undefined") {
      var scrl = false;
      if (value == 0) {
        $(".data-pack").attr("style", "");
      } else {
        $(".data-pack").attr("style", "");
        $('.data-pack:not([data-discount="' + value + '"])').hide();
        if ($(".data-pack:not(:hidden)").length > 1) {
          window.setTimeout(core.subGlob, 100);
        }
      }
    } else {
      scrl = true;
    }
    if (dir == "up") {
      $("#filt-zone").append(
        $("#filt-zone .data-pack:not(:hidden)").sort(function (a, b) {
          return (
            parseInt(a.getAttribute("data-discount"), 10) -
            parseInt(b.getAttribute("data-discount"), 10)
          );
        })
      );
      var el = $("#shuffled");
      $("#filt-zone").append(el);
      $("br.clear.product_clear").remove();
      $(".thumbnail")
        .removeClass("odd")
        .removeClass("even")
        .removeClass("alpha")
        .removeClass("omega");
      $(".data-pack:not(:hidden)").first().find(".thumbnail").addClass("alpha");
      if ($(window).width() > 767) {
        $(".data-pack:not(:hidden):nth-child(4n)")
          .find(".thumbnail")
          .addClass("omega");
        $('<br class="clear product_clear">').insertAfter(
          ".data-pack:not(:hidden):nth-child(4n)"
        );
        $(".data-pack:not(:hidden):even").find(".thumbnail").addClass("even");
        $(".data-pack:not(:hidden):odd").find(".thumbnail").addClass("odd");
      } else if ($(window).width() < 768) {
        $(".data-pack:not(:hidden):nth-child(2n)")
          .find(".thumbnail")
          .addClass("omega");
        $('<br class="clear product_clear">').insertAfter(
          ".data-pack:not(:hidden):nth-child(2n)"
        );
        $(".data-pack:not(:hidden):even").find(".thumbnail").addClass("even");
        $(".data-pack:not(:hidden):odd").find(".thumbnail").addClass("odd");
      }
      $("#filt-zone")
        .find(".clear.product_clear")
        .next()
        .find(".thumbnail:first")
        .addClass("alpha");
      var y = $(window).scrollTop();
      if (scrl == true) {
        $(conf.root).animate({ scrollTop: y + 20 }, 600);
      } else if (scrl == false) {
        $(conf.root).animate({ scrollTop: 0 }, 600);
      }
    } else if (dir == "down") {
      $("#filt-zone").append(
        $("#filt-zone .data-pack:not(:hidden)").sort(function (b, a) {
          return (
            parseInt(a.getAttribute("data-discount"), 10) -
            parseInt(b.getAttribute("data-discount"), 10)
          );
        })
      );
      var el = $("#shuffled");
      $("#filt-zone").append(el);
      $("br.clear.product_clear").remove();
      $(".thumbnail")
        .removeClass("odd")
        .removeClass("even")
        .removeClass("alpha")
        .removeClass("omega");
      $(".data-pack:not(:hidden)").first().find(".thumbnail").addClass("alpha");
      if ($(window).width() > 767) {
        $(".data-pack:not(:hidden):nth-child(4n)")
          .find(".thumbnail")
          .addClass("omega");
        $('<br class="clear product_clear">').insertAfter(
          ".data-pack:not(:hidden):nth-child(4n)"
        );
        $(".data-pack:not(:hidden):even").find(".thumbnail").addClass("even");
        $(".data-pack:not(:hidden):odd").find(".thumbnail").addClass("odd");
      } else if ($(window).width() < 768) {
        $(".data-pack:not(:hidden):nth-child(2n)")
          .find(".thumbnail")
          .addClass("omega");
        $('<br class="clear product_clear">').insertAfter(
          ".data-pack:not(:hidden):nth-child(2n)"
        );
        $(".data-pack:not(:hidden):even").find(".thumbnail").addClass("even");
        $(".data-pack:not(:hidden):odd").find(".thumbnail").addClass("odd");
      }
      $("#filt-zone")
        .find(".clear.product_clear")
        .next()
        .find(".thumbnail:first")
        .addClass("alpha");
      var y = $(window).scrollTop();
      if (scrl == true) {
        $(conf.root).animate({ scrollTop: y + 20 }, 600);
      } else if (scrl == false) {
        $(conf.root).animate({ scrollTop: 0 }, 600);
      }
    }
    core.pageHeightSet();
  },
  startTutorial: function () {
    /*-------------------
         starts the mobile tutorial
         overlays. Function reads and
         sets a cookie so that user
         will only have this overlay
         once
         -------------------*/
    var myCookie = $.cookie("tlh_site_mobile");
    if (myCookie === null || myCookie === undefined) {
      $.cookie("tlh_site_mobile", "done", { expires: 360, path: "/" });
      $("#mobile_tutorial").attr("class", "");
      $("#mobile_tutorial").show(200);
      var launch = 1;
      $("#mobile_tutorial").addClass("active_" + launch);
      $("#part" + launch).show(200);
      $("section:not(#part" + launch + ")").hide(200);
      var tut_status = "ready";
      $("#nav_controls .modal-success").prop("disabled", true);
      setTimeout("$('.icon-menu').click()", 4000);
      setTimeout("$('.icon-menu').click()", 7000);
      setTimeout(
        "$('#nav_controls .modal-success').prop('disabled', false)",
        7000
      );
    } else {
      return;
    }
  },
  makeModal: function (
    greet,
    close,
    message,
    buttons,
    btMessages,
    saidyes,
    saidno
  ) {
    /*-------------------
         btMessages variable should be split by adding a pound symbol
         if you have selected the yes/no option for buttons Yes#No
         //-------demo-------//
         core.makeModal('Hello',true,'Wow you are pretty good','yes/no','OK#NOT OK',action,action)
         //------enddemo-----//
         -------------------*/
    $(".submodal").remove(); //remove all other modal instances
    var a = greet;
    if (close === true) {
      var b = true;
    }
    var c = message;
    var d = buttons;
    var f = btMessages;
    if (f !== "") {
      if (f.indexOf("#") > -1) {
        var ff = f.split("#");
        var yes = ff[0];
        var no = ff[1];
      } else {
        ff = f;
      }
    }
    switch (d) {
      case "yes":
        var e =
          '<button type="button" class="modal-success">' + ff + "</button>";
        break;
      case "no":
        e = '<button type="button" class="modal-error">' + ff + "</button>";
        break;
      case "yes/no":
        e =
          '<button type="button" class="modal-success">' +
          yes +
          '</button><button type="button" class="modal-error">' +
          no +
          "</button>";
        break;
      case "yes/no-link":
        e =
          '<button type="button" class="modal-success">' +
          yes +
          '</button><span class="modal-error">' +
          no +
          "</span>";
        break;
      case "none":
        e = "&nbsp;";
        break;
      default:
        e =
          '<button type="button" class="modal-success">' +
          yes +
          '</button><button type="button" class="modal-error">' +
          no +
          "</button>";
    }
    var line = '<div class="submodal"><div class="layered">';
    line += '<div class="modal_title">' + a;
    if (b === true) {
      line += '<span class="modal_toggle fa fa-close"></span>';
    }
    line += "</div>";
    line +=
      '<div class="modal_message" id="modMessage"><div class="modal_content">' +
      c +
      '</div></div><div class="modal_cta">' +
      e +
      "</div>";
    line += "</div></div>";
    $(conf.dom).append(line);
    $(".modal_toggle,.modal-error").click(function () {
      if (saidno !== null) {
        saidno;
      } else {
        $(this).parent().parent().parent().hide();
      }
    });
    $(".modal-success").on("click", function () {
      if (saidyes !== null) {
        saidyes;
      } else {
        window.location.href = $("form#cart").attr("action");
      }
    });
  },
  mobileWait: function (mode) {
    /*--------------------
         function hides the mobile spinner
         screen when the page load has
         finished and the call returns false
         spinner is then removed from dom
         ----------------------*/
    if (mode === false) {
      if ($("#mobile_wait").length) {
        $("#mobile_wait").remove();
      }
    }
  },
  prepTitle: function () {
    /*--------------------
         function gets uri parameters and fires
         the wordTranslate function with data
         pulled from the url
         ----------------------*/
    var lang = $(conf.base).attr("lang");
    var a = window.location.pathname;
    //get size from url
    if (a.indexOf("sizes_") > -1) {
      var sizeX = window.location.pathname.split("sizes_")[1];
      if (sizeX.indexOf("+") > -1) {
        var sizeY = sizeX.split("+")[0];
        if (sizeY.indexOf("+") > -1) {
          var sizeY = sizeY.split("+")[0];
        }
      } else {
        sizeY = sizeX;
      }
    } else {
      sizeY = null;
    }
    //get brand from url
    if (a.indexOf("brands_") > -1) {
      var brandX = window.location.pathname.split("brands_")[1];
      if (brandX.indexOf("+") > -1) {
        var brandY = brandX.split("+")[0];
        if (brandY.indexOf("+") > -1) {
          var brandY = brandY.split("+")[0];
        }
      } else {
        brandY = brandX;
      }
    } else {
      brandY = null;
    }
    var b = a.slice(1);
    var c = b.split("/");
    var len = c.length;
    for (var i = 0; i < len; i++) {
      var nm = c[0];
    }
    if (nm == "collections") {
      if (len == 2) {
        core.wordTranslate(c[1], null, null, lang, brandY, sizeY);
      } else if (len == 3) {
        try {
          if (c[2].indexOf("+") > -1) {
            var d = c[2].split("+");
            if (d.length == 2) {
              var nm1 = d[0];
              var nm2 = d[1];
              if (d[1].indexOf("brand") > -1) {
                var brand = d[1]
                  .replace("brands_", "")
                  .replace("-", " ")
                  .capitalize();
                core.wordTranslate(c[1], nm1, null, lang, brandY, sizeY);
              } else {
                nm2 = d[1];
                core.wordTranslate(c[1], nm1, nm2, lang, brandY, sizeY);
              }
            } else if (d.length == 3) {
              nm1 = d[0];
              nm2 = d[1];
              var nm3 = d[2];
              core.wordTranslate(c[1], nm1, nm2, lang, brandY, sizeY);
            } else if (d.length > 3) {
              nm1 = d[0];
              nm2 = d[1];
              nm3 = d[2];
              core.wordTranslate(c[1], nm1, nm2, lang, brandY, sizeY);
            }
          } else {
            if (c[2].indexOf("brands_") > -1) {
              core.wordTranslate(c[1], null, null, lang, brandY, sizeY);
            } else if (c[2].indexOf("sizes_") > -1) {
              core.wordTranslate(c[1], null, null, lang, brandY, sizeY);
            } else {
              core.wordTranslate(c[1], c[2], null, lang, brandY, sizeY);
            }
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
  },
  forceArrow: function () {
    /*
      adds a css arrow to the breadcrumbs if there are more than
      one breadcrumbs
      */
    var a = $(".pseudo_crumb").find(".label").last().prev();
    if (a.hasClass("label--arrow-right")) {
    } else {
      a.addClass("label--arrow-right");
    }
  },
  wordTranslate: function (top, word, second, lang, brand, size) {
    /*--------------------
         function translates collection page with
         data pulled from  the main json file.
         Fired by prepTitle function
         addBr = Brut format brand
         aba = View friendly brand
         bab = Reconstructed brand link
         trn = Language translation
         ----------------------*/
    var mvf = "";
    if (size !== null && size !== "") {
      var addSi = size,
        asa = addSi.toLowerCase(), //view ready brand
        sas = "size_" + asa; //link ready brand
    } else {
      sas = null;
    }
    if (brand !== null && brand !== "") {
      var addBr = brand,
        aba = addBr.replace(" ", "-").toLowerCase(), //view ready brand
        bab = "brands_" + aba; //link ready brand
    }
    var trn = lang,
      lev = 0;
    $.getJSON(constants.json.nav.source, function (data) {
      /*
                  let's use getJson instead of ajax because in this case
                  the source will always be a json file
                  */
      $.each(data.navitems, function (i, data) {
        if (data.href == top) {
          lev = i;
          mvl = data.href;
          if (trn == "fr") {
            if (data.name_fr !== undefined) {
              mvf = data.name_fr;
            }
          } else if (trn == "en") {
            if (data.name_en !== undefined) {
              mvf = data.name_en;
            }
          }
        }
      });
      var ln = data.navitems[lev].level1.length;

      for (var i = 0; i < ln; i++) {
        if (data.navitems[lev].level1[i].href == word) {
          var ls = data.navitems[lev].level1[i].level2.length;
          var msl = data.navitems[lev].level1[i].href;
          if (trn == "fr") {
            var ms = data.navitems[lev].level1[i].name_fr,
              tlt = conf.fr;
          } else if (trn == "en") {
            ms = data.navitems[lev].level1[i].name_en;
            tlt = conf.en;
          }
          var qs = lev,
            rs = i,
            tt =
              mvf +
              " - " +
              ms
                .replace(/&amp;/g, "&")
                .replace(/&eacute;/g, "Ã©")
                .replace(/&egrave;/g, "Ã¨")
                .replace(/&agrave;/g, "Ã ")
                .replace(/&ecirc;/g, "Ãª")
                .replace(/&acirc;/g, "Ã¢");
          if (brand !== null) {
            tt = brand.replace("-", " ").toUpperCase() + " - " + tt;
          }
          tt += " - " + tlt;
          document.title = tt;
          var ff = ' <span class="icon-right-arrow"></span> ';
          var rr = '<a href="/collections/' + mvl + '">' + mvf + "</a> ";
          ff +=
            '<a href="/collections/' +
            mvl +
            "/" +
            msl +
            '">' +
            ms
              .replace(/&amp;/g, "&")
              .replace(/&eacute;/g, "Ã©")
              .replace(/&egrave;/g, "Ã¨")
              .replace(/&agrave;/g, "Ã ")
              .replace(/&ecirc;/g, "Ãª")
              .replace(/&acirc;/g, "Ã¢") +
            "</a>";
          rr +=
            '<a href="/collections/' +
            mvl +
            "/" +
            msl +
            '">' +
            ms
              .replace(/&amp;/g, "&")
              .replace(/&eacute;/g, "Ã©")
              .replace(/&egrave;/g, "Ã¨")
              .replace(/&agrave;/g, "Ã ")
              .replace(/&ecirc;/g, "Ãª")
              .replace(/&acirc;/g, "Ã¢") +
            "</a> ";
          if (brand !== null && second == null) {
            ff += ' <span class="icon-right-arrow"></span> ';
            rr +=
              ' <a href="/collections/' +
              mvl +
              "/" +
              msl +
              "+" +
              bab +
              '">' +
              brand.replace("-", " ") +
              "</a> ";
          }
        }
      }
      for (var i = 0; i < ls; i++) {
        if (data.navitems[qs].level1[rs].level2[i].href == second) {
          var nsl = data.navitems[qs].level1[rs].level2[i].href;
          if (trn == "fr") {
            var ns = data.navitems[qs].level1[rs].level2[i].name_fr;
          } else if (trn == "en") {
            var ns = data.navitems[qs].level1[rs].level2[i].name_en;
          }
          var uu =
            mvf +
            " - " +
            ms
              .replace(/&amp;/g, "&")
              .replace(/&eacute;/g, "Ã©")
              .replace(/&egrave;/g, "Ã¨")
              .replace(/&agrave;/g, "Ã ")
              .replace(/&ecirc;/g, "Ãª")
              .replace(/&acirc;/g, "Ã¢") +
            " - " +
            ns
              .replace(/&amp;/g, "&")
              .replace(/&eacute;/g, "Ã©")
              .replace(/&egrave;/g, "Ã¨")
              .replace(/&agrave;/g, "Ã ")
              .replace(/&ecirc;/g, "Ãª")
              .replace(/&acirc;/g, "Ã¢");
          if (brand !== null) {
            uu = brand.replace("-", " ").toUpperCase() + " - " + uu;
          }
          uu += " - " + tlt;
          document.title = uu;
          ff += ' <span class="icon-right-arrow"></span> ';
          ff += '<a href="/collections/' + mvl + "/" + msl + "+" + nsl;
          if (size !== null) {
            ff += "+" + sas;
          }
          ff +=
            '">' +
            ns
              .replace(/&amp;/g, "&")
              .replace(/&eacute;/g, "Ã©")
              .replace(/&egrave;/g, "Ã¨")
              .replace(/&agrave;/g, "Ã ")
              .replace(/&ecirc;/g, "Ãª")
              .replace(/&acirc;/g, "Ã¢") +
            "</a>";

          rr += ' <a href="/collections/' + mvl + "/" + msl + "+" + nsl;
          if (size !== null) {
            rr += "+" + sas;
          }
          rr +=
            '">' +
            ns
              .replace(/&amp;/g, "&")
              .replace(/&eacute;/g, "Ã©")
              .replace(/&egrave;/g, "Ã¨")
              .replace(/&agrave;/g, "Ã ")
              .replace(/&ecirc;/g, "Ãª")
              .replace(/&acirc;/g, "Ã¢") +
            "</a>";
        }
      }
      $(".global_tag_holder").empty(); //removes existing breadcrumbs
      $(ff).appendTo(".global_tag_holder"); //changes the breadcrumbs
      if (rr !== "" && rr !== undefined && rr !== null) {
        $(".coll_links").empty();
        //rr = '<span>' + rr + '</span>';
        $(rr)
          .appendTo(".lcontent")
          .addClass("label large label--arrow-right")
          .parent()
          .addClass("pseudo_crumb")
          .removeClass("center"); //changes the breadcrumbs
        if (brand !== null) {
          if ($(".pseudo_crumb").find(".label").length > 0) {
            $(".pseudo_crumb")
              .find(".label")
              .first()
              .addClass("label--arrow-right")
              .parent()
              .append(
                '<div class="label large trn" style="margin-left: 5px;" title="' +
                  brand.replace("brands_", "").replace("-", " ") +
                  '">' +
                  brand.replace("brands_", "").replace("-", " ") +
                  "</div>"
              );
            $(".pseudo_crumb")
              .find(".label")
              .first()
              .contents()
              .wrap('<a href="/collections/' + mvl + '">');
          } else {
            $(".pseudo_crumb").append(
              '<div class="label large trn" style="margin-left: 5px;" title="' +
                brand.replace("brands_", "").replace("-", " ") +
                '">' +
                brand.replace("brands_", "").replace("-", " ") +
                "</div>"
            );
          }
        }
        if (size !== null) {
          if ($(".pseudo_crumb").find(".label").length > 0) {
            $(".pseudo_crumb")
              .find(".label")
              .first()
              .addClass("label--arrow-right")
              .parent()
              .append(
                '<div class="label large trn" style="margin-left: 5px;" title="' +
                  size.replace("sizes_", "").replace("-", " ") +
                  '">' +
                  size.replace("sizes_", "").replace("-", " ") +
                  "</div>"
              );
            $(".pseudo_crumb")
              .find(".label")
              .first()
              .contents()
              .wrap('<a href="/collections/' + mvl + '">');
          } else {
            $(".pseudo_crumb").append(
              '<div class="label large trn" style="margin-left: 5px;" title="' +
                size.replace("sizes_", "").replace("-", " ") +
                '">' +
                size.replace("sizes_", "").replace("-", " ") +
                "</div>"
            );
          }
        }
        $(".coll_links").css("display", "block");
      } else {
        var colTags = $(".coll_links").attr("class");
        var a = window.location.pathname;
        var b = a.slice(1);
        var c = b.split("/");
        if (c.length > 0) {
          var d = c[1];
        }
        if (colTags.indexOf(d) > -1) {
          $(".coll_links").empty();
          if (mvf !== "") {
            $('<div class="label large" title="' + mvf + '">' + mvf + "</div>")
              .appendTo(".lcontent")
              .parent()
              .addClass("pseudo_crumb");
          }
        }
        if (brand !== null) {
          $(".pseudo_crumb")
            .find(".label")
            .first()
            .addClass("label--arrow-right")
            .parent()
            .append(
              '<div class="label large trn" style="margin-left: 5px;" title="' +
                brand.replace("brands_", "").replace("-", " ") +
                '">' +
                brand.replace("brands_", "").replace("-", " ") +
                "</div>"
            );
          try {
            $(".pseudo_crumb")
              .find(".label")
              .first()
              .contents()
              .wrap('<a href="/collections/' + mvl + '">');
          } catch (e) {}
        }
        if (size !== null) {
          if ($(".pseudo_crumb").find(".label").length > 0) {
            $(".pseudo_crumb")
              .find(".label")
              .first()
              .addClass("label--arrow-right")
              .parent()
              .append(
                '<div class="label large trn" style="margin-left: 5px;" title="' +
                  size.replace("sizes_", "").replace("-", " ") +
                  '">' +
                  size.replace("sizes_", "").replace("-", " ") +
                  "</div>"
              );
            $(".pseudo_crumb")
              .find(".label")
              .first()
              .contents()
              .wrap('<a href="/collections/' + mvl + '">');
          } else {
            $(".pseudo_crumb").append(
              '<div class="label large trn" style="margin-left: 5px;" title="' +
                size.replace("sizes_", "").replace("-", " ") +
                '">' +
                size.replace("sizes_", "").replace("-", " ") +
                "</div>"
            );
          }
        } else {
        }
        $(".coll_links").css("display", "block");
      }
      core.forceArrow();
    });
  },
  gbCollect: function (origin, length, page, limit) {
    /*-------------------
         custom overflow mechanism by Dave Maser
         -------------------*/
    var a = Math.random(0, length),
      b = a * 1000,
      c = Math.round(b),
      d = Array(7800, 150, 800, 125, 40),
      e = d[Math.floor(Math.random() * d.length)],
      f = Math.max.apply(Math, d),
      g = new Date(),
      h = g.getFullYear(),
      i = g.getMilliseconds(),
      j = g.getMonth() + 1,
      k = Math.round((h + i + j) / 1.6);
    if (c > 0 && c < 150) {
      var l = "a[0][" + k + "][" + origin + "]";
    } else if (c > 150 && c < 300) {
      l = "a[1][" + k + "][" + origin + "]";
    } else if (c > 300 && c < 450) {
      l = "a[2][" + k + "][" + origin + "]";
    } else if (c > 450 && c < 600) {
      l = "a[3][" + k + "][" + origin + "]";
    } else if (c > 600 && c < 900) {
      l = "a[4][" + k + "][" + origin + "]";
    } else if (c > limit) {
      l = "a[5][" + k + "][" + origin + "]";
    } else {
      l = null;
    }
    if (l !== null) {
      var m = l.split("]["),
        n = m[0] + "[" + page + "]" + m[2];
      try {
        l.sync[src] = "window";
        l.sync[data] = "body";
        l.sync[set] = this;
      } catch (e) {}
    }
    return Array(c, e, f, k, l);
  },
  reposFilters: function () {
    /*-------------------
         function reposition the filter
         panel in a new off canvas gutter
         for mobile use
         -------------------*/
    $("#filter-options").appendTo(".bigblob");
    $(".bigblob")
      .css("height", $(window).height() - $("#header").height())
      .css("margin-top", $("#header").height());
    $(".bigblob").find("#filter-options").css("display", "block");
    $(".bigblob").insertBefore("#filt-zone");
  },
  hideRelatedProds: function (check, hide) {
    /*-------------------
         hides the related products section
         if there are no products to show
         -------------------*/
    if ($(check).length == 0) {
      $(hide).css("display", "none");
    }
  },
  mobileTabManager: function () {
    /*-------------------
         adds active tab and sub tab
         functionalities to the mobile
         off canvas menu
         -------------------*/
    var a = window.location.pathname;
    var b = a.slice(1);
    var c = b.split("/");

    if (c.length > 2 && c[2].length) {
      if (c[2].indexOf("+" > -1)) {
        var d = c[2].split("+"),
          e = d[0].replace("&comma;", "");
        if (d.length > 1) {
          var f = d[1].replace("&comma;", "");
        }
      } else {
        d = c[2].replace("&comma;", "");
        e = d.replace("&comma;", "");
        f = null;
      }
    }
    if ($(".clint").hasClass(c[1])) {
      $(".clint." + c[1])
        .find("a.sub-menu:not(.top-el)")
        .addClass("link-active");
      $(".clint." + c[1])
        .addClass("lfe-open")
        .find(".menu_line_element")
        .css("display", "inline-block");
    }
    if (e !== undefined) {
      try {
        if ($("li.nav-parent").hasClass(e)) {
          $("li.nav-parent." + c[1] + "." + e.replace("&comma;", ""))
            .find("a.sub-menu.top-el")
            .addClass("link-active")
            .find("span.disp")
            .removeClass("icon-right-arrow")
            .addClass("icon-down-arrow");
          $("li.nav-parent." + c[1] + "." + e)
            .find("ul")
            .css("display", "block");
        }
      } catch (e) {
        alert(
          "This page has encountered an error. Please reload or try another page"
        );
      }
    }
    if (f !== undefined && f !== "#" && f !== "" && f !== null && f !== ",") {
      try {
        if (
          $("li.sub-menu").hasClass(f) &&
          f !== "#" &&
          f !== "" &&
          f !== null &&
          f !== ","
        ) {
          $("li.sub-menu." + c[1] + "." + e + "." + f)
            .find("a.thrd-el")
            .addClass("link-active");
        }
      } catch (e) {
        alert(
          "This page has encountered an error. Please reload or try another page"
        );
      }
    }
  },
  lsTest: function () {
    /*-------------------
         test if users navigator supports local storage
         -------------------*/
    var test = "tlh-st";
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  },
  setLs: function (name, val) {
    /*-------------------
         function to set local storage value
         in replacement of cookies. Not to be
         implemented untill full html5 coverage
         -------------------*/
    var a = name,
      b = val,
      c = core.lsTest();
    if (c == true) {
      localStorage.setItem(a, b);
    }
  },
  dimSoldOut: function (val) {
    /*-------------------
         adds an opacity value to products
         that are sold out
         -------------------*/
    if ($(".soldout").length) {
      $(".soldout").parent().animate({
        opacity: val,
      });
    }
  },
  indexNav: function () {
    /*-------------------
         deprecated function
         -------------------*/
    var topLink = "/collections/";
    $.getJSON(constants.json.nav.source, function (data) {
      var div_data = '<div id="filter-options">';
      $.each(data.navitems, function (i, data) {
        div_data +=
          '<div class="filtermenu level-one-items ' +
          data.href.replace(/'/g, "").toLowerCase() +
          '"><a href="' +
          topLink +
          data.href +
          '" class="sub-menu">' +
          data.name_en +
          "</a></div>";
      });
      div_data += "</div>";
      $(div_data).appendTo("#mm-0");
    });
  },
  bMobileMenu: function () {
    /*-------------------
         rearranges the dom elements to create a
         movile friendly gutter menu
         -------------------*/
    $("#mm-0").find("ul:first").wrap('<div class="ftt">');
    $("#mm-0").find(".ftt").find("ul:first").contents().unwrap();
    $(".ftt").contents().unwrap();
    $(".dropdown.animated").contents().unwrap();
    $(".menu_line_element")
      .removeClass("dropdown_links")
      .removeClass("clearfix");
    $(".menu_line_element").attr("id", "");
  },
  regExReplace: function (element, replacer) {
    /*-------------------
         basic regex replacement function
         -------------------*/
    var a = element,
      b = replacer,
      c = new RegExp(b, "g");
    return a.replace(c, "");
  },
  siteIsOpen: function () {
    /*-------------------
         function to redirect to maintenance page
         if site has been placed in maintenance mode
         see settings for values
         -------------------*/
    var checkPage = core.regExReplace(window.location.pathname, "/");
    var maintPage = "pages" + constants.shop.access.maintenance;
    if (checkPage == maintPage) {
      var pReset = false;
    } else {
      pReset = true;
    }
    /*
      let's not block the store access just because the constant
      hasn't been defined. Check that it's value is not undefined
      before going any further
      */
    var siteStat =
      constants.shop.access.available !== undefined
        ? constants.shop.access.available
        : "open";
    if (siteStat == "closed" && pReset == true) {
      window.location.replace("/pages/" + constants.shop.access.maintenance);
    } else {
      return false;
    }
  },
  setCart: function () {
    /*-------------------
         deprecated function
         -------------------*/
    var cart = $.cookie("cart"),
      shop = "3392785",
      ga = $.cookie("_shopify_ga"),
      loc = $.cookie("tlh_site");
    return (
      "https://checkout.shopify.com/" +
      shop +
      "/checkouts/" +
      cart +
      "?" +
      ga +
      "&locale=" +
      loc
    );
  },
  itemListSet: function () {
    /*-------------------
         deprecated function
         shopify no longer sets
         cart id in cookie
         -------------------*/
    $(".sidebar")
      .find("div:not(:first)")
      .find("ul")
      .hide(function () {
        core.pageHeightSet();
        $(this)
          .parent()
          .find("h4")
          .find(".side_elem_toggle")
          .removeClass("glyphicon-chevron-up")
          .addClass("glyphicon-chevron-down");
      });
    $(".sidebar")
      .find("div:first")
      .find(".side_elem_toggle")
      .removeClass("glyphicon-chevron-down")
      .addClass("glyphicon-chevron-up");
  },
  pageHeightSet: function () {
    /*-------------------
         reformats page height once all
         dynamic elements are loaded into
         the dom
         -------------------*/
    var he = $(".mm-page").height();
    $(conf.dom).css("height", he);
  },
  setDivNum: function () {
    var a = $("#sales_wrapper").find(".homepage_content").length,
      b = $(".rebuild-xy ").length;
    return a + b;
  },
  resizePad: function () {
    /*-------------------
         removes and replaces classes in column
         divs to adapt the viewport to tablets,
         specifically ipads
         -------------------*/
    $("#filt-zone")
      .removeClass("twelve")
      .addClass("sixteen")
      .find(".thumbnail")
      .removeClass("three")
      .addClass("four");
    $(".container.main.content").find(".page").removeClass("offset-by-three");
    window.setTimeout(core.pageHeightSet, 800);
  },
  doPercent: function (origP, newP, showMode, lang) {
    /*-------------------
         calculates the reduction percentage and
         places it in a span. Can be used with the
         countdown timer
         -------------------*/
    data_render = true;
    var aVal = newP - origP,
      bVal = aVal / origP,
      pPc = Math.floor(bVal * 100 * -1);
    if (showMode == "extended") {
      if (lang == "en") {
        var preLine = "Extra<br />",
          postLine = " % off";
      } else if (lang == "fr") {
        preLine = "R&eacute;duction de<br /> ";
        postLine = " % en plus";
      }
    } else {
      preLine = "-";
      postLine = "%";
    }
    document.write("<span>" + preLine + pPc + postLine + "</span>");
  },
  enhanceSearch: function (string) {
    /*-------------------
         function that allows users to enter
         search strings such as large that
         will be converted to handleized
         shopify tags such as sizes_l
         -------------------*/
    var sizes = [
        "small",
        "petit",
        "extra small",
        "xtra small",
        "extra petit",
        "xtra petit",
        "large",
        "grand",
        "medium",
        "moyen",
        "extra large",
        "extra grand",
        "xtra large",
        "xtra grand",
        "extra extra large",
        "xtra xtra large",
        "xtra xtra large",
        "xtra xtra grand",
      ],
      orgs = string.split(" "),
      orgsCount = orgs.length;
    if (orgsCount > 1) {
      var un = [];
      for (var i = 0; i < orgsCount; i++) {
        if ($.inArray(orgs[i], sizes) > -1) {
          un.push("sizes_" + orgs[i]);
        } else {
          un.push(orgs[i]);
        }
      }
      var research = un.join("+");
    }
    var hit = $.inArray(string, sizes);
    if (hit > -1) {
      var process = hit;
      switch (string) {
        case "small":
          var a = "s";
          break;
        case "petit":
          a = "s";
          break;
        case "extra small":
          a = "xs";
          break;
        case "xtra small":
          a = "xs";
          break;
        case "extra petit":
          a = "xs";
          break;
        case "xtra petit":
          a = "xs";
          break;
        case "large":
          a = "l";
          break;
        case "grand":
          a = "l";
          break;
        case "medium":
          a = "m";
          break;
        case "moyen":
          a = "m";
          break;
        case "extra large":
          a = "xl";
          break;
        case "extra grand":
          a = "xl";
          break;
        case "xtra large":
          a = "xl";
          break;
        case "xtra grand":
          a = "xl";
          break;
        case "extra extra large":
          a = "xxl";
          break;
        case "xtra xtra large":
          a = "xxl";
          break;
        case "extra extra grand":
          a = "xxl";
          break;
        case "xtra xtra grand":
          a = "xxl";
          break;
      }
      return a;
    } else {
      return string;
    }
  },
  genBlock: function (lang) {
    var RsetLang = lang,
      lco = [];
    $.ajax({
      url: "",
      dataType: "json",
      method: "GET",
      success: function (data) {
        for (var i = 0; i < data.blocks.length; i++) {
          lco.push({
            im: data.blocks[i].image,
            si: data.blocks[i].size,
            txE: data.blocks[i].text.en,
            txF: data.blocks[i].text.fr,
            rvE: data.blocks[i].reveal.en,
            rvF: data.blocks[i].reveal.fr,
          });
        }
        for (var j = 0; j < lco.length; j++) {
          if (RsetLang == "en") {
            var txtHead = lco[j].txE,
              txtRev = lco[j].rvE;
          } else if (RsetLang == "fr") {
            (txtHead = lco[j].txF), (txtRev = lco[j].rvF);
          } else {
            (txtHead = lco[j].txE), (txtRev = lco[j].rvE);
          }
          if (lco[j].si == "3-2") {
            var iW = 460,
              iH = 270,
              st = "lg";
          } else if (lco[j].si == "2-2") {
            (iW = 460), (iH = 185);
            st = "me";
          } else if (lco[j].si == "2-3") {
            (iW = 300), (iH = 185);
            st = "sm";
          }
          var exportHTML =
            '<div class="colBan ' + st + '" id="colBan' + j + '">';
          exportHTML +=
            '<a href="http://www.altitude-sports.com/en/all-categories?order=new">';
          exportHTML += '<img src="' + lco[j].im + '" alt="' + txtHead + '" />';
          exportHTML += "<h3>" + txtHead + "</h3>";
          exportHTML += "<p><span>" + txtRev + "</span></p></a></div>";
          $(".block_banners").append(exportHTML);
        }
      },
      error: function () {
        $(".header_bar").prepend(RdefTextForm);
      },
    });
  },
  buildSpMessage: function (lang) {
    var RsetLang = lang,
      lco = [],
      m = [];
    $.ajax({
      url: "",
      dataType: "json",
      method: "GET",
      success: function (data) {
        if (RsetLang == "en") {
          (m[1] = data.message[0].header.en),
            (m[2] = data.message[0].subtext.en),
            (m[3] = data.message[0].tagline.en),
            (m[4] = data.message[0].button.en);
        } else if (RsetLang == "fr") {
          (m[1] = data.message[0].header.fr),
            (m[2] = data.message[0].subtext.fr),
            (m[3] = data.message[0].tagline.fr),
            (m[4] = data.message[0].button.fr);
        }
        m[5] = data.message[0].link;
        var exportHTML = '<div class="container">';
        exportHTML += "<h3>" + m[1] + "</h3>";
        exportHTML += "<h1>" + m[2] + "</h1>";
        exportHTML += '<p class="special_conditions">' + m[3] + "</p>";
        exportHTML +=
          '<p class="special_conditions link"><a href="' +
          m[5] +
          '">' +
          m[4] +
          "</a></p></div>";
        $("#slide-special").append(exportHTML);
      },
      error: function () {
        //$('.header_bar').prepend(RdefTextForm);
      },
    });
  },
  genServiceBanners: function (lang) {
    var RsetLang = lang,
      lco = [];
    $.ajax({
      url: "",
      dataType: "json",
      method: "GET",
      success: function (data) {
        for (var i = 0; i < data.service.length; i++) {
          lco.push({
            im: data.service[i].icon,
            hEN: data.service[i].header.en,
            hFR: data.service[i].header.fr,
            sEN: data.service[i].subtext.en,
            sFR: data.service[i].subtext.fr,
            sLNK: data.service[i].link,
          });
        }
        for (var j = 0; j < lco.length; j++) {
          if (RsetLang == "en") {
            var txtHead = lco[j].hEN,
              txtRev = lco[j].sEN;
          } else if (RsetLang == "fr") {
            (txtHead = lco[j].hFR), (txtRev = lco[j].sFR);
          } else {
            (txtHead = lco[j].hEN), (txtRev = lco[j].sEN);
          }
          if (lco[j].sLNK !== null) {
            var dataService = "click",
              dataHit = lco[j].sLNK;
          } else {
            (dataService = "skip"), (dataHit = "");
          }

          var exportHTML =
            '<div class="serviceBan" data-click="' +
            dataService +
            '" data-link="' +
            dataHit +
            '">';
          exportHTML +=
            '<div class="serviceIcon"><img src="' +
            lco[j].im +
            '" alt="' +
            txtHead +
            '" width="22" height="24" style="padding-top: 5px"></div>';
          exportHTML +=
            '<div class="serviceContent"><h3>' +
            txtHead +
            "</h3><span>" +
            txtRev +
            "</span></div>";
          exportHTML += "</div>";
          $(".service_banners").append(exportHTML);
        }
        $(document).on("click", '.serviceBan[data-click="click"]', function () {
          window.location.href = $(this).attr("data-link");
        });
      },
      error: function () {
        $(".header_bar").prepend(RdefTextForm);
      },
    });
  },
  genBrandBanners: function (lang) {
    var RsetLang = lang,
      sbb = constants.shop.banner.view,
      sbn = constants.shop.banner.number,
      txtHide = constants.shop.banner.hide;
    if (sbb == "icon") {
      var view = "a";
    } else if (sbb == "block") {
      view = "b";
    }
    if (RsetLang == "en") {
      var ubtr = "Shop Now";
    } else if (RsetLang == "fr") {
      ubtr = "Magasinez";
    }
    var lco = [];
    $.ajax({
      url: "",
      dataType: "json",
      method: "GET",
      success: function (data) {
        for (i = 0; i < data.brands.length - 1; i++) {
          lco.push({
            im: data.brands[i].image,
            nam: data.brands[i].name,
            lnk: data.brands[i].link,
          });
        }
        for (var j = 0; j < sbn; j++) {
          if (view == "a") {
            var exportHTML = '<div class="brandView';
            if (lco[j].im == null) {
              exportHTML += " allBrands";
            }
            exportHTML += '">';
            exportHTML += '<a href="' + lco[j].lnk + '">';
            if (lco[j].im !== null) {
              exportHTML +=
                '<img src="' + lco[j].im + '" alt="' + lco[j].nam + '" />';
            } else {
              exportHTML += lco[j].nam;
            }
            exportHTML += "</a></div>";
          } else if (view == "b") {
            exportHTML = '<div class="brandView full">';
            exportHTML +=
              '<div class="brand-bc" style="background-image:url(' +
              lco[j].im +
              ')">';
            if (txtHide !== true) {
              exportHTML += '<div class="brand-ct">' + lco[j].nam + "</div>";
            }
            exportHTML +=
              '<div class="brand-bt"><a href="' +
              lco[j].lnk +
              '" class="action_button hero"><span>' +
              ubtr +
              "</span></a></div>";
            exportHTML += "</div>";
          }
          $(".block_brands").append(exportHTML);
        }
      },
      error: function () {
        $(".header_bar").prepend(RdefTextForm);
      },
    });
  },
  /*-------------------
     splits the brands sub menu
     into more manageable columns
     add max items per column in
     function call
     -------------------*/
  splitSubmenu: function (maxNumItems) {
    $(".menu_line_element ul").each(function () {
      // get all child li tags
      var list$ = $(this).children("li");
      var num,
        nextAfter$,
        after$ = $(this);
      // as long as the current list is too long, loop
      while (list$.length > maxNumItems) {
        // decide how many to remove this iteration
        num = Math.min(maxNumItems, list$.length - maxNumItems);
        // create new UL tag, append num items to it
        // and insert it into the DOM
        nextAfter$ = $('<ul class="submenu">')
          .append(list$.slice(maxNumItems, maxNumItems + num))
          .insertAfter(after$);
        // update insertion point for next loop iteration
        after$ = nextAfter$;
        // remove the items we just took out from the current jQuery object
        list$ = list$.filter(function (index) {
          return index < maxNumItems || index >= 2 * maxNumItems;
        });
      }
    });
  },
  /*-------------------
     front page one shot, events
     and upcoming sales function.
     handles events by passing
     attribute dir that corresponds
     to the direction user swipes
     or directional button clicked
     -------------------*/
  slideMotion: function (dir) {
    if (lowLevel == "phone") {
      var visPanes = 1,
        addBuffer = 1;
    } else if (lowLevel == "tab") {
      visPanes = 2;
      addBuffer = 2;
    } else if (lowLevel == "desk") {
      visPanes = 3;
      addBuffer = 3;
    }
    var divNum = core.setDivNum(),
      divWid = $("#sales_wrapper").find(".homepage_content").width(),
      //checks if the sales wrapper has a nul height
      divCheck = $("#sales_wrapper").height(),
      divMar = (divNum - 1) * 10 * 2;
    if (ui.wWidth < 768) {
      var totWid = divWid;
    } else {
      totWid = divWid + divMar / (divNum - 1);
    }
    var maxMove = divNum - addBuffer,
      slidOp = visPanes + 1;
    if (divNum <= visPanes) {
      $("#slides_nav").hide();
    }
    core.swiperCorrect(visPanes);
    if (dir == "right") {
      ui.clickable = false;
      if (ui.curPos < maxMove) {
        slidOp += 1;
        $("#sales_wrapper").animate(
          {
            left: "-=" + totWid,
          },
          500,
          function () {
            ui.curPos += 1;
            if (ui.curPos == maxMove) {
              $(".swiper.right").hide();
            } else {
              $(".swiper.right").show();
            }
            if (ui.curPos > 0) {
              $(".swiper.left").show();
            }
            ui.clickable = true;
          }
        );
      }
    } else if (dir == "left") {
      ui.clickable = false;
      if (ui.curPos > 0) {
        slidOp -= 1;
        $("#sales_wrapper").animate(
          {
            left: "+=" + totWid,
          },
          500,
          function () {
            ui.curPos -= 1;
            if (ui.curPos == 0) {
              $(".swiper.left").hide();
              $(".swiper.right").show();
            } else if (ui.curPos < maxMove) {
              $(".swiper.right").show();
            } else {
              $(".swiper.left").show();
            }
            //core.alphasize(false, slidOp);
            ui.clickable = true;
          }
        );
      }
    }
  },
  swiperCorrect: function (panes) {
    var a = $(".event").length,
      b = $(".one_shot").length,
      c = a + b;
    if (c <= panes) {
      $(".swiper").hide();
      return false;
    }
  },
  menuEval: function (action) {
    if (action == "hide") {
      $(".menu:not(.right)").find(".no-view").parent().hide();
    } else if (action == "show") {
      $(".menu:not(.right)").find(".no-view").parent().show();
    }
  },
  alphasize: function (direction, pin) {
    if (direction == false) {
      $(
        "#sales_wrapper .homepage_content:nth-child(n+" + (pin + 2) + ")"
      ).animate(
        {
          opacity: "0.2",
        },
        200
      );
    }
    if (direction == true) {
      $("#sales_wrapper .homepage_content:lt(" + (pin - 1) + ")").animate(
        {
          opacity: "1",
        },
        200
      );
    }
  },
  menuPosition: function () {
    var linkPosition = $(this).position();
    var height =
      $(".header").height() - ($(this).outerHeight() + linkPosition.top);
    var margin = height + 200;
    $(this)
      .find(".dropdown_links")
      .css("margin-top", margin + "px");
    $(".dropdown_links").css("display", "block");
  },
  /*-------------------
     add all products button
     to the front page product
     loop
     -------------------*/
  allProds: function (lang) {
    var cHtml =
      '<div class="three columns thumbnail odd"><a href="/collections/all"><div class="relative link_all">';
    if (lang == "en") {
      cHtml += "See All Products";
    } else if (lang == "fr") {
      cHtml += "Tous Les Produits";
    }
    cHtml += "</div></a></div>";
    document.write(cHtml);
  },
  animate_elems: function () {
    var winheight = $(window).height(),
      fullheight = $(document).height(),
      $elems = $(".animateblock"),
      wintop = $(window).scrollTop(); // calculate distance from top of window
    // loop through each item to check when it animates
    $elems.each(function () {
      $elm = $(this);
      if ($elm.hasClass("vanimated")) {
        return true;
      } // if already animated skip to the next item
      topcoords = $elm.offset().top; // element's distance from top of page in pixels
      if (wintop > topcoords - winheight * 0.75) {
        // animate when top of the window is 3/4 above the element
        $elm.addClass("vanimated");
      }
    });
  },
};
/*-------------------
 animation functionalities
 linked to icon motion
 -------------------*/
$(function () {
  $(window).scroll(function () {
    core.animate_elems();
  });
  if ($(window).width() < 1025) {
    $(".promo_banner.hello-bar.hellodefault")
      .insertBefore("#pride_banner")
      .css("display", "block");
  }
  $("#ship-message").click(function (e) {
    e.preventDefault();
    var lnk = $(this).attr("href");
    setTimeout(function () {
      window.location.href = lnk;
    }, 800);
  });
  var currentlang = $(conf.base).attr("lang");
  /*
     /search tweak
     */
  $(".search_string").keyup(function () {
    var brValue = $(".brand-select option:selected").val();

    var isSelector = $(".advanced-search:checked").val();

    var a = $(this).val().toLowerCase();
    if (isSelector == "brand") {
      var b = "brands_" + a.replace(/ /g, "-").replace(/'/g, "");
    } else if (isSelector == "size") {
      var c = core.enhanceSearch(a);
      b = "sizes_" + c.replace(/ /g, "-").replace(/'/g, "");
    } else if (a.indexOf("brand") > -1) {
      b = a.replace("brand ", "brands_").replace(/ /g, "-").replace(/'/g, "");
    } else if (a.indexOf("size") > -1) {
      b = a.replace("size ", "sizes_").replace(/ /g, "-").replace(/'/g, "");
    } else {
      b = a.replace(/ /g, "-").replace(/'/g, "");
    }

    $(".search_string_alt").val(b);
  });
  $(".advanced-search").change(function () {
    //$('.search_string').val('');
    switch (currentlang) {
      case "en":
        var srcPlh_brand = "Search by brand...",
          srcPlh_size = "Search by size...",
          srcPlh_default = "Search " + constants.shop.name.en + "...";
        break;
      case "fr":
        srcPlh_brand = "Rechercher par marque...";
        srcPlh_size = "Rechercher par taille...";
        srcPlh_default = "Search " + constants.shop.name.fr + "...";
        break;
    }

    var isSelector = $(".advanced-search:checked").val();

    var a = $(this).val().toLowerCase();
    if (isSelector == "brand") {
      $(".search_string").attr("placeholder", srcPlh_brand);
      var b = "brands_" + a.replace(/ /g, "-").replace(/'/g, "");
    } else if (isSelector == "size") {
      $(".search_string").attr("placeholder", srcPlh_size);
      var c = core.enhanceSearch(a);
      var b = "sizes_" + c.replace(/ /g, "-").replace(/'/g, "");
    } else if (a.indexOf("brand") > -1) {
      var b = a
        .replace("brand ", "brands_")
        .replace(/ /g, "-")
        .replace(/'/g, "");
    } else if (a.indexOf("size") > -1) {
      var b = a.replace("size ", "sizes_").replace(/ /g, "-").replace(/'/g, "");
    } else {
      $(".search_string").attr("placeholder", srcPlh_default);
    }
    $(".search_string_alt").val(b);
  });
  $(".brand-select").change(function () {
    var partA = $(".search_string").val();
    var partB = $(".brand-select option:selected").val();
    if (partA !== "") {
      var sString = partA + "+brands_" + partB;
    } else {
      sString = "brands_" + partB;
    }
    $(".search_string_alt").val(sString);
  });
  /*
     /end search tweak
     */

  $("iframe").remove();
  $(".modal_toggle").click(function () {
    $(this).parent().parent().parent().hide();
  });
  core.prepTitle();
  var wWidth = $(window).width();
  if (wWidth <= 1024) {
    if (wWidth >= 768) {
      /*-------------------
             change tablet dom layout
             -------------------*/
      core.resizePad();
    }
    $(document)
      .on("click", "#activate_filters", function () {
        var gl = $(conf.base).attr("lang");
        if (gl == "en") {
          var lnhide = "Hide Filters",
            lnshow = "Show Filters";
        } else if (gl == "fr") {
          lnhide = "Masquer Filtres";
          lnshow = "Afficher Filters";
        }
        if (!$(".bigblob").is(":visible")) {
          $(".bigblob").show(100);
          $(".filter_launcher").find(".sorter-fire-refine").html(lnhide);
        } else if ($(".bigblob").is(":visible")) {
          $(".bigblob").hide(100);
          $(".filter_launcher").find(".sorter-fire-refine").html(lnshow);
        }
      })
      .on("click", ".product .fancybox", function (e) {
        e.preventDefault();
      })
      .on("click", ".clint a", function (e) {
        /*-------------------
             mobile nav menu functions
             overrides native theme event handlers
             on mobile gutter a
             -------------------*/
        if (
          $(this).parent().find(".menu_line_element").css("display") == "none"
        ) {
          e.preventDefault();
          $(this)
            .parent()
            .siblings()
            .find(".menu_line_element")
            .css("display", "none");
          $(".lfe-open").find("a").removeClass("link-active");
          $(this).addClass("link-active");
          $(this).parent().addClass("lfe-open");
          $(this).parent().siblings().removeClass("lfe-open");
          $(this)
            .parent()
            .find("span:not(.disp)")
            .removeClass("icon-right-arrow")
            .addClass("icon-down-arrow");
          $(this)
            .parent()
            .find(".menu_line_element")
            .css("display", "inline-block");
          //$(this).parent().find('.sub-menu:not(.menu_line_element)').css('font-weight','bold');
        } else if (
          $(this).parent().find(".menu_line_element").css("display") ==
          "inline-block"
        ) {
          e.preventDefault();
          $(this).removeClass("link-active");
          $(this).parent().removeClass("lfe-open");
          $(this)
            .parent()
            .find("span:not(.disp)")
            .addClass("icon-right-arrow")
            .removeClass("icon-down-arrow");
          $(this).parent().find(".menu_line_element").css("display", "none");
          //$(this).parent().find('.sub-menu').css('font-weight','normal');
        }
      })
      .on("click", ".nav-parent a", function (e) {
        if ($(this).parent().find("ul").css("display") == "none") {
          e.preventDefault();
          $(this).addClass("link-active");
          $(this).parent().find("ul").css("display", "block");
          $(this)
            .parent()
            .parent()
            .siblings()
            .find("ul")
            .css("display", "none");
          $(this)
            .parent()
            .parent()
            .siblings()
            .find("a")
            .removeClass("link-active")
            .find("span.disp")
            .addClass("icon-right-arrow")
            .removeClass("icon-down-arrow");
          $(this)
            .parent()
            .find(".disp")
            .removeClass("icon-right-arrow")
            .addClass("icon-down-arrow");
        } else if ($(this).parent().find("ul").css("display") == "block") {
          e.preventDefault();
          $(this).removeClass("link-active");
          $(this).parent().find("ul").css("display", "none");
          $(this)
            .parent()
            .find(".disp")
            .addClass("icon-right-arrow")
            .removeClass("icon-down-arrow");
        }
      });
    /*-------------------
         add doubletap functionality to first and second
         level gutter menu links, allowing direct access
         to top level categories on doubletap.
         uses jquery.finger.min.js
         -------------------*/
    $(conf.dom).on("doubletap", ".clint a:not(.thrd-el)", function () {
      var targ = $(this).attr("href");
      window.location.href = targ;
    });
    $(".help_popout").remove();
    $(".menu.right").find("li.clint").removeClass("clint");
    $("a.tabs_help").attr("href", "/pages/" + constants.mobile.help);
    $(".clint")
      .find("span")
      .removeClass("icon-down-arrow")
      .addClass("icon-right-arrow");
    $("#filter-options").css("display", "none");
    $("#filter-options").appendTo("#mm-0");
    $(".mm-page").find(".container").attr("style", "");
    var a = $(".menu.right").find("li:first");
    var b = $(".menu.right").find("li:nth-child(3)");
    $("#mm-0").prepend(a, b);
    $("#mm-0").find("li:lt(3)").addClass("vignette");
    $('<div class="clearfix"></div>').insertAfter(".vignette:nth-child(3)");
    var c = $(".menu:not(.right)").html();
    $(".menu:not(.right)").appendTo("#mm-0");
  }
  /*-----------------
     filter menu functions
     -----------------*/
  $(".child_level:not(.subitems)").hide();
  $(".top_level .subitems:not(.child_level)").click(function () {
    var clickEL = $(this).attr("id");
    if ($(".child_level." + clickEL + ":not(.subitems)").hasClass("isActive")) {
      $(".child_level." + clickEL + ":not(.subitems)")
        .hide()
        .removeClass("isActive");
    } else {
      $(".child_level." + clickEL + ":not(.subitems)")
        .show()
        .addClass("isActive");
    }
  });
  setTimeout("core.dimSoldOut(0.6)", 1500);
  core.siteIsOpen();
  if (wWidth > 1024) {
    core.splitSubmenu(constants.json.nav.count);
  }
  core.pageHeightSet();
  core.menuEval("hide");

  //disable buttons in upcoming events box
  $(".bt_disabled .action_button").click(function (e) {
    e.preventDefault();
    $(this).html("coming soon");
  });
  /*-------------------
     desktop sidebar click handlers and
     hierarchy manager
     -------------------*/
  if ($(".sidebar").length) {
    core.itemListSet();
    $(
      "#side_elem_one h4,#side_elem_two,#side_elem_three,#side_elem_four,#side_elem_five,#side_elem_six"
    )
      .find("h4")
      .click(function () {
        var clickElem = $(this).parent().attr("id");
        $(".sidebar_item:not(#" + clickElem + ")")
          .find("ul")
          .hide("500", function () {
            $(this)
              .parent()
              .find("h4")
              .find(".side_elem_toggle")
              .removeClass("glyphicon-chevron-up")
              .addClass("glyphicon-chevron-down");
          });

        if ($(this).parent().find("ul").is(":visible")) {
          $(this)
            .parent()
            .find("ul")
            .hide("500", function () {
              core.pageHeightSet();
              $(this)
                .parent()
                .find(".side_elem_toggle")
                .removeClass("glyphicon-chevron-up")
                .addClass("glyphicon-chevron-down");
            });
        } else if ($(this).parent().find("ul").is(":hidden")) {
          $(this)
            .parent()
            .find("ul")
            .show("500", function () {
              core.pageHeightSet();
              $(this)
                .parent()
                .find(".side_elem_toggle")
                .removeClass("glyphicon-chevron-down")
                .addClass("glyphicon-chevron-up");
            });
        }
      });
  }

  if ($("#loaded-deals").length) {
    $("#loaded-deals .thumbnail").matchHeight();
    $("#loaded-deals").css("display", "block");
  }

  var open = false;
  $(".sale_banner")
    .mouseover(function () {
      if (open == false) {
        $(this).find(".it_ends_when").show(200);
        open = true;
      }
    })
    .mouseout(function () {
      if (open == true) {
        $(this)
          .find(".it_ends_when")
          .hide(200, function () {
            open = false;
          });
      }
    });

  /*-------------------
     front page one shot, events
     and upcoming sales attribute
     handler also linked to swipe
     events
     -------------------*/

  /*--------------
     hides the arrows if the number
     of events displayed is less than
     or equal to the amount of allowed
     panes for the device
     --------------*/
  if (ui.curPos == 0) {
    $("#slides_nav_left").hide();
  }
  $(".swiper.right").click(function () {
    if (ui.clickable == true) {
      core.slideMotion("right");
    }
  });
  $(".swiper.left").click(function () {
    if (ui.clickable == true) {
      core.slideMotion("left");
    }
  });
  /*end front page scrolling function*/
  /*-------------------
     click handler for see more button
     on one shot products
     -------------------*/

  /*-------------------
     swiping function that shows
     hides gutter when user swipes
     across page footer
     -------------------*/
  //Enable swiping...
  $(".footer").swipe({
    //Generic swipe handler for all directions
    swipe: function (
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      if (direction == "left") {
        //core.slideMotion('right');
        $("#nav").trigger("close");
      } else if (direction == "right") {
        //core.slideMotion('left');
        $("#nav").trigger("open");
      }
    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold: 100,
    excludedElements: $.fn.swipe.defaults.excludedElements + ", #sales_wrapper",
  });
  $(".promo_banner").swipe({
    //Generic swipe handler for all directions
    swipe: function (
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      $(this).hide(500);
    },
  });
  /*-------------------
     swiping function linked to
     slideMotion function
     -------------------*/
  if (wWidth > 500) {
    //Enable swiping...
    $("#sales_wrapper").swipe({
      //Generic swipe handler for all directions
      swipe: function (
        event,
        direction,
        distance,
        duration,
        fingerCount,
        fingerData
      ) {
        if (direction == "left") {
          core.slideMotion("right");
        } else if (direction == "right") {
          core.slideMotion("left");
        }
      },
      //Default is 75px, set to 0 for demo so any distance triggers swipe
      threshold: 100,
      excludedElements: $.fn.swipe.defaults.excludedElements + ", #slides_nav",
    });
  }
  $(".free_shipping,#slide-6").mouseover(function () {
    $(".truck").addClass("vanimated");
  });
  $(".free_shipping,#slide-6").click(function () {
    $(".truck").addClass("leave");
    setTimeout("$('.truck').removeClass('leave')", 5000);
  });
});
$(window).load(function () {
  core.slideMotion(null);
  $(".select_toggle_layer").click(function () {
    if ($(this).find(".toggle_dir").hasClass("glyphicon-chevron-down")) {
      $(this)
        .find(".toggle_dir")
        .removeClass("glyphicon-chevron-down")
        .addClass("glyphicon-chevron-up");
    } else if ($(this).find(".toggle_dir").hasClass("glyphicon-chevron-up")) {
      $(this)
        .find(".toggle_dir")
        .removeClass("glyphicon-chevron-up")
        .addClass("glyphicon-chevron-down");
    }
    $(this).next(".select_list").toggle(100);
  });
  $(".radio").change(function () {
    if (
      $(".select_toggle_border").hasClass("product") &&
      !$(".select_toggle_border")
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .hasClass("fancybox-inner")
    ) {
      var a = $(".main-pcc").find(".radio:checked + label").text(),
        b = a.slice(0, 50).split("/")[0].trim().toLowerCase();
      $(".tup").removeClass("outlined").find(".indicate-this").remove();
      $('.flex-control-nav [data-prodname="' + b + '"]')
        .addClass("outlined")
        .append(
          '<span class="glyphicon glyphicon-eject indicate-this"></span>'
        );
      core.flexJumpTo(b);
    } else {
      a = $(".fancybox-inner").find(".radio:checked + label").text();
    }
    $(this).parent().parent().parent().find(".toggle_text").html(a);
    $(this).parent().parent().toggle(200);
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".toggle_dir")
      .removeClass("glyphicon-chevron-up")
      .addClass("glyphicon-chevron-down");
  });
  $(".tup").click(function () {
    $(".sel_options").find("input").prop("checked", false);
    var a = $(this).attr("title").slice(0, 50).toLowerCase(),
      b = $(".main-pcc").find(".radio:checked + label").text(),
      c = window.location.search.split("=")[1];
    if (c !== undefined && c !== null) {
      $(
        'input[data-prodname="' +
          a.toLowerCase() +
          '"][data-prodsize="' +
          c.toUpperCase() +
          '"]'
      ).prop("checked", true);
    } else {
      $('input[data-prodname="' + a.toLowerCase() + '"]').prop("checked", true);
    }

    $(".tup").removeClass("outlined").find(".indicate-this").remove();
    $(this)
      .addClass("outlined")
      .append('<span class="glyphicon glyphicon-eject indicate-this"></span>');
    $(".main-pcc")
      .find(".toggle_text")
      .html($(".main-pcc").find(".radio:checked + label").text());
  });
  $(".lpe_help-click").click(function (e) {
    var a =
        "https://server.iad.liveperson.net/hc/" +
        constants.components.liveengage.account +
        "/?cmd=file&amp;file=visitorWantsToChat&amp;site=" +
        constants.components.liveengage.account +
        "&amp;imageUrl=https://server.iad.liveperson.net/hcp/Gallery/ChatButton-Gallery/English/General/1a&amp;referrer=",
      b = escape(document.location),
      c = a + b,
      w = 472,
      h = 320,
      v = "chat" + constants.components.liveengage.account;
    window.open(c, v, "width=" + w + ",height=" + h + ",resizable=yes");
    e.preventDefault();
  });

  core.purgeFlex();
  core.mobileWait(false);
  window.setTimeout(core.killHidden, 750);
  window.setTimeout(core.starHere, 750);
  setTimeout("core.mobileWait(false)", 10000);
  var wWidth = $(window).width();
  if (wWidth <= 1024) {
    window.setTimeout(core.bMobileMenu, 1000);
    core.reposFilters();
    core.hideRelatedProds(".rel_cls", ".cls_show_bar");
    $(".flash_sale_notice").removeClass("animate_down");
    $(".clint")
      .find("span")
      .removeClass("icon-down-arrow")
      .addClass("icon-right-arrow");
    $(".sub-menu.top-el").append('<span class="disp icon-right-arrow"></span>');
    window.setTimeout(core.mobileTabManager, 800);
  }
  if ($("#initial_sales").length) {
    $("#initial_sales .flash_sale_notice").delay(1000).matchHeight();
  }
  if (wWidth > 1024) {
    core.pageHeightSet();
    /* Menu level 1 positionning on desktop - marjolaine */
    /* edite par DAVID - place dans une condition if(wWidth >1024){
         car cette fonction ne doit pas s'appliquer a la version mobile */
    $(".clint").each(core.menuPosition);
    $(window).resize(function () {
      $(".clint").each(core.menuPosition);
    });
  }
});
$(window).resize(function () {
  var wWidth = $(window).width();
});
/*
page: http://www.ladernierechasse.com/
url: http://cdn.shopify.com/s/files/1/0050/3522/t/22/assets/davesFunctions.js?2185346142944598572
*/
