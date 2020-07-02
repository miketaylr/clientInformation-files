// JavaScript Document
var eid = "218808P8z8p8x8Q8y8y8x";
if (typeof project_contextPath == "undefined") {
  project_contextPath = "";
}
jQuery(function ($) {
  $("#loginButtonHeader").click(function () {
    loginWithAjax($("#loginformHeader"), function (data) {
      $("#loginZt").hide();
      $("#realNameHeader").text(data.username);
      $("#loginZtAfter").show();
      $(".colse_gb").trigger("click");
      if (data.userPhoto) {
        $("#userPhotoHeader").attr("src", data.userPhoto);
      }
      if (typeof loginAjaxAfter_handler == "function") {
        loginAjaxAfter_handler(data);
      }
      if (typeof updateHeadInfo == "function") {
        updateHeadInfo();
      }
    });
  });
  loginOutWithAjax($("#outbtnHeader"));
  //ä¸æ
  $(".xyzx_xl").hover(
    function () {
      $(this).find(".xwzx_erxl").show();
      $(this)
        .find(".top_jt_tb")
        .attr("src", project_contextPath + "/res/v2/images/index/up_jt.png");
    },
    function () {
      $(this).find(".xwzx_erxl").hide();
      $(this)
        .find(".top_jt_tb")
        .attr("src", project_contextPath + "/res/v2/images/index/down_jt.png");
    }
  );
  //å¯¼èªä¸æ
  $(".ny_course_fl").hover(
    function () {
      $(this).find(".ny_course_content").show();
      $(this)
        .children("h2")
        .find(".ny_arrow img")
        .attr(
          "src",
          project_contextPath + "/res/v2/images/ny_new/jt_nynav_up.png"
        );
    },
    function () {
      $(this).find(".ny_course_content").hide();
      $(this)
        .children("h2")
        .find(".ny_arrow img")
        .attr(
          "src",
          project_contextPath + "/res/v2/images/ny_new/jt_nynav_down.png"
        );
    }
  );
  //ä¾§é¢äºçº§å¯¼èª
  $(".nav_left_yd li").hover(
    function () {
      if ($(this).find(".cateright").length > 0) {
        $(this).addClass("cur");
      }
    },
    function () {
      $(this).removeClass("cur");
    }
  );

  //ä¸ªäººä¸­å¿ä¸æ
  $(".dlh_zt").hover(
    function () {
      $(this).children(".usernavson").show();
    },
    function () {
      $(this).children(".usernavson").hide();
    }
  );

  //ç»å½å¼¹æ¡

  $(".login_cf").click(function () {
    $(".tkdlzc_box").show();
  });
  $(".tkdlzc_bj").click(function () {
    $(".tkdlzc_box").hide();
  });

  $(".colse_gb").click(function () {
    $(".tkdlzc_box").hide();
  });

  //å¯ç 
  $(".wenz_tip").click(function () {
    $(this).hide();
    $(this).next(".ts_mm").focus();
  });
  $(".ts_mm").focus(function () {
    $(this).prev(".wenz_tip").hide();
  });
  $(".ts_mm").change(function () {
    $(this).prev(".wenz_tip").hide();
  });

  $(".ts_mm").blur(function () {
    if ($(this).val() == "") {
      //alert("ç©º");
      $(this).prev(".wenz_tip").show();
    } else {
      //alert("ä¸ç©º");
      $(this).prev(".wenz_tip").hide();
    }
  });
  //äºç»´ç 
  $(".saoyisao").hover(
    function () {
      $(this).find(".xzewm_box ").show();
    },
    function () {
      $(this).find(".xzewm_box ").hide();
    }
  );
  //è¿åé¡¶é¨
  $(".goto").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
  $(window).scroll(function () {
    var win_scroll = $(this).scrollTop();
    if (win_scroll > 100) {
      $(".goto").show(500);
    } else {
      $(".goto").hide(500);
    }
  });

  //æåºä¸æ
  $(".px_xl").hover(
    function () {
      $(this).addClass("px_xl_on");
      $(this).find(".xwzx_erxl").show();
      $(this)
        .find(".top_jt_tb")
        .attr("src", project_contextPath + "/res/v2/images/index/up_jt.png");
    },
    function () {
      $(this).removeClass("px_xl_on");
      $(this).find(".xwzx_erxl").hide();
      $(this)
        .find(".top_jt_tb")
        .attr("src", project_contextPath + "/res/v2/images/index/down_jt.png");
    }
  );

  $(".user_img").hover(
    function () {
      $(this).find(".xiugrx_tx").show();
    },
    function () {
      $(this).find(".xiugrx_tx").hide();
    }
  );

  //éç¨æç¤ºå¼¹æ¡
  $(".General_but").click(function () {
    $(".General_Bomb_box").show();
  });
  $(".tkdlzc_bj").click(function () {
    $(".General_Bomb_box").hide();
  });

  $(".colse_gb").click(function () {
    $(".General_Bomb_box").hide();
  });
});

function loginWithAjax(loginForm, callback) {
  var username = loginForm.find(":input[name='account']").val();
  if (!username) {
    alert("ç¨æ·åä¸è½ä¸ºç©ºï¼");
    return;
  }
  var password = loginForm.find(":input[name='password']").val();
  if (!password) {
    alert("å¯ç ä¸è½ä¸ºç©ºï¼");
    return;
  }

  var loginBtn = loginForm.find("#loginButtonHeader");
  loginBtn.val("æ­£å¨ç»å½ï¼è¯·ç­å¾...");
  $.ajax(project_contextPath + "/user/loginAjax", {
    type: "post",
    dataType: "json",
    timeout: 4000, //è¶æ¶æ¶é´è®¾ä¸º4s
    data: loginForm.serialize(),
    success: function (data) {
      if ("UC1N01" == data.result) {
        loginForm.find(":input[name='password']").val("");
        if (typeof callback == "function") {
          callback(data);
        }
      } else if ("UL1E07" == data.result) {
        //éªè¯ç 
        window.location.href = project_contextPath + "/user/login";
      } else if ("UL1E06" == data.result) {
        alert("è´¦æ·è¢«å»ç»ï¼è¯·èç³»ç®¡çå!");
      } else {
        alert("è´¦æ·æèå¯ç è¾å¥éè¯¯");
      }
    },
  })
    .fail(function (jqXHR, textStatus, errorThrown) {
      if (textStatus == "timeout") {
        alert("ç½ç»ä¸­æ­ï¼è¯·ç¨åéè¯");
      } else {
        alert("ç»å½å¼å¸¸ï¼è¯·ç¨åéè¯ï¼éè¯¯æè¿°ç ï¼" + textStatus);
      }
    })
    .always(function () {
      loginBtn.val("ç»    å½");
    });
}

function loginOutWithAjax(btn) {
  btn.click(function () {
    $.ajax(project_contextPath + "/user/logoutAjax", {
      type: "post",
      timeout: 4000, //è¶æ¶æ¶é´è®¾ä¸º4s
      success: function (data) {
        if ("ok" == data) {
          window.location.reload(true);
        } else {
          alert("ç³»ç»å¼å¸¸ï¼è¯·ç¨åéè¯ï¼");
        }
      },
    }).fail(function (jqXHR, textStatus, errorThrown) {
      if (textStatus == "timeout") {
        alert("ç½ç»ä¸­æ­ï¼è¯·ç¨åéè¯");
      } else {
        alert("ç»å½å¼å¸¸ï¼è¯·ç¨åéè¯ï¼éè¯¯æè¿°ç ï¼" + textStatus);
      }
    });
  });
}

function registerTkBox(boxid, tid) {
  $("#" + tid).click(function () {
    $("#" + boxid).show();
  });

  $("#" + boxid)
    .find(".tkdlzc_update_bj")
    .click(function () {
      $("#" + boxid).hide();
    });

  $("#" + boxid)
    .find(".colse_update")
    .click(function () {
      $("#" + boxid).hide();
    });
}

function kf_openChatWindow(wpadomain, kfguin) {
  window.open(
    "http://" +
      wpadomain +
      ".qq.com/webc.htm?new=0&sid=" +
      kfguin +
      "&eid=" +
      eid +
      "&o=&q=7&ref=" +
      document.location,
    "_blank",
    "height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no"
  );
  return false;
}

var win = window;
var nav = win.navigator;
var doc = win.document;
var ieAX = win.ActiveXObject;
var ieMode = doc.documentMode;
var isIe = ieAX || ieMode;
/**
 * æ£æµ external æ¯å¦åå«è¯¥å­æ®µ
 * @param reg æ­£å
 * @param type æ£æµç±»åï¼0ä¸ºé®ï¼1ä¸ºå¼
 * @returns {boolean}
 * @private
 */
function _testExternal(reg, type) {
  var external = win.external || {};

  for (var i in external) {
    if (reg.test(type ? external[i] : i)) {
      return true;
    }
  }

  return false;
}

/**
 * è·å Chromium åæ ¸æµè§å¨ç±»å
 * @link http://www.adtchrome.com/js/help.js
 * @link https://ext.chrome.360.cn/webstore
 * @link https://ext.se.360.cn
 * @return {String}
 *         360ee 360æéæµè§å¨
 *         360se 360å®å¨æµè§å¨
 *         sougou æçæµè§å¨
 *         liebao çè±¹æµè§å¨
 *         chrome è°·æ­æµè§å¨
 *         ''    æ æ³å¤æ­
 * @version 1.0
 * 2014å¹´3æ12æ¥20:39:55
 */

function _getChromiumType() {
  if (isIe || typeof win.scrollMaxX !== "undefined") {
    return "";
  }

  var _track = "track" in document.createElement("track");
  var webstoreKeysLength =
    win.chrome && win.chrome.webstore
      ? Object.keys(win.chrome.webstore).length
      : 0;

  // æçæµè§å¨
  if (_testExternal(/^sogou/i, 0)) {
    return "sogou";
  }

  // çè±¹æµè§å¨
  if (_testExternal(/^liebao/i, 0)) {
    return "liebao";
  }

  // chrome
  if (win.clientInformation && win.clientInformation.permissions) {
    return "chrome";
  }

  if (_track) {
    // 360æéæµè§å¨
    // 360å®å¨æµè§å¨
    return webstoreKeysLength > 1 ? "360ee" : "360se";
  }

  return "";
}

function is360se() {
  var where = "suffixes",
    value = "dll",
    name = "description",
    nameReg = /fancy/;

  var mimeTypes = window.navigator.mimeTypes,
    i;

  for (var i in mimeTypes) {
    if (mimeTypes[i][where] == value) {
      if (nameReg.test(mimeTypes[i][name])) return false;
    }
  }

  return true;
}

/*
page: http://www.gdsjxjy.com/
url: http://www.gdsjxjy.com/res/v2/js/com.js?_2
*/
