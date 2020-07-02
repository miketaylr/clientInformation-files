$(document).ready(function () {
  if (getCookie("meritzpoptop2") == "done") {
    $("#ntopPop08").hide();
  }

  $(".top_notice_close").click(function (e) {
    if ($("#checkbox_7").attr("checked") == "checked") {
      poptop_setCookie("meritzpoptop2", "done", 1);
    }
    e.preventDefault();
    var $notice = $(this).parents(".top_notice");
    var $noticeH = $notice.outerHeight();
    $notice.animate({ "margin-top": "-" + $noticeH }, 600, function () {
      $notice.hide();
    });
  });

  getDate();
  getEvntList();
  setInterval(function () {
    // 5ì´ë§ë¤ ìì¸ ëì´ê°ê¸°
    getDate();
  }, 60000);

  $("#link1").click(function () {
    abc("", 0);
  });
  $("#link2").click(function () {
    abc("", 1);
  });
  $("#link3").click(function () {
    abc("", 2);
  });
  $("#link4").click(function () {
    abc("", 3);
  });
  $("#link5").click(function () {
    abc("2", 0);
  });
  $("#link6").click(function () {
    abc("2", 1);
  });
  $("#link7").click(function () {
    abc("2", 2);
  });
  $("#link8").click(function () {
    abc("2", 3);
  });
  $("#link9").click(function () {
    abc("4", 0);
  });
  $("#link10").click(function () {
    abc("4", 1);
  });
  $("#link11").click(function () {
    abc("4", 2);
  });
  $("#link12").click(function () {
    abc("4", 3);
  });
  $("#link13").click(function () {
    abc("3", 0);
  });
  $("#link14").click(function () {
    abc("3", 1);
  });
  $("#link15").click(function () {
    abc("3", 2);
  });
  $("#link16").click(function () {
    abc("3", 3);
  });

  $("#chobo").click(function () {
    alert("íì´ì§ ìê¸ ì¤ìëë¤.");
  });
  $("#introMeritz").click(function () {
    returnBntFocus = $(this);
    $("#basic-modal-content_intro").modal();
  });
  $("#btnPopZipOk").click(function () {
    $.modal.impl.close();
    returnBntFocus.focus();
  });
  $("#downPdf").click(function () {
    var filePath =
      "/home/imeritz/htapps/WEB-INF/bbs/resource/comm/ALL_NEW_HTS_MANUAL.pdf"; // í´ë¹íì¼ ê²½ë¡ ë£ì¼ì¸ì

    $("#iframe_main").attr(
      "src",
      "/popup/FileDownLoad.go?filePath=" + filePath
    );
  });

  // ëª¨ë°ì¼ ííì´ì§ ë§í¬ ì²´í¬
  if ($("#fromMobileYN").val() == "N") {
    // ëª¨ë°ì¼ìì PCí ë²í¼ í´ë¦­ì ìëµ
    if (jQuery.browser.mozilla == false) {
      checkDevice(); // ì¬ì© ê¸°ê¸° ì²´í¬
    }
  }

  // ì ìê¸ìµì¬ê¸° ìë°© ìë¨ íì 2013.09.09
  if (getCookie("meritzpoptop2") == "done") {
    $("#ntopPop07").animate(
      { height: 0 },
      { duration: 1, complete: hideTopPopup }
    );
  } else {
  }
});

/*function getDate(){
	var now = new Date();
	var year = now.getFullYear();
	var mon = (now.getMonth()+1)>9 ? ''+(now.getMonth()+1) : '0'+(now.getMonth()+1);
	var day = now.getDate()>9 ? ''+now.getDate() : '0'+now.getDate();
	var stdDate = year + '.' + mon + '.' + day;
	var hour = now.getHours();
	if(now.getHours()<10)
		hour ="0"+now.getHours();
	var min = now.getMinutes();
	if(now.getMinutes()<10)
		min ="0"+now.getMinutes();
	var time ="<strong>"+ stdDate+" "+hour+":"+min+"</strong> íì¬";
	$("#time").html(time);
}*/
function getDate() {
  $.ajax({
    type: "POST",
    async: true,
    url: "/comm/main/TodayData.go",
    dataType: "json",
    timeout: 30000,
    error: function (request, status, error) {},
    success: function (response, status, request) {
      try {
        $("#time").html(
          "<strong>" +
            response.year +
            "." +
            response.month +
            "." +
            response.day +
            " " +
            response.time.substring(0, 2) +
            ":" +
            response.time.substring(2, 4) +
            "</strong>"
        );
      } catch (e) {
        $.unblockUI();
      }
    },
  });
}
function abc(type, current) {
  $(".banner_list" + type)
    .children(".tabContainer")
    .children(".main_tab")
    .children("li")
    .children("a")
    .css("color", "black");
  $(".banner_list" + type)
    .children(".tabContainer")
    .children(".main_tab")
    .children("li")
    .removeClass("on");
  $(".banner_list" + type)
    .children(".tabContainer")
    .children(".main_tab")
    .children("li")
    .eq(current)
    .children("a")
    .css("color", "red");
  $(".banner_list" + type)
    .children(".tabContainer")
    .children(".main_tab")
    .children("li")
    .eq(current)
    .addClass("on");
  $(".banner_list" + type)
    .children(".tabBody")
    .children("div")
    .hide();
  $(".banner_list" + type)
    .children(".tabBody")
    .children("div")
    .eq(current)
    .show();
}

function getEvntList() {
  // ì´ë²¤í¸ ê°ì ê²ìí ë¶ë¬ì¤ê¸°
  $.ajax({
    type: "POST",
    async: true,
    url: "/cust/ntcevnt/PrgsEvntList.do",
    dataType: "json",
    timeout: 30000,
    error: function (request, status, error) {
      //fnAjaxError();
    },
    success: function (response, status, request) {
      try {
        $("#evntList").html();
        var htmlList = "";
        var cnt = 0;
        for (var i = 0; i < response.selectList.length; i++) {
          if (cnt < 5) {
            // ë¦¬ì¤í¸ë 5ê°ë§ ì¤ë ë ì§ ì´ì ì¸ ê²ë§ ë³´ì¬ì£¼ê² ë¤
            cnt++;
            var dt =
              response.selectList[i].evntStartDate.substring(4, 6) +
              "." +
              response.selectList[i].evntStartDate.substring(6, 8);
            /*htmlList+="<li><span class='txt'><a href='#none' " +
								"onclick=\"window.open('/include/resource/evnt/"+response.selectList[i].fileName+"/"+response.selectList[i].evntDescImg+"', '', 'scrollbars=yes, width=750, height=600')\" >"+response.selectList[i].evntTitle+"</a></span> <span class='date'>"+dt+"</span></li>";
								*/
            htmlList +=
              "<tr><td class='t_left_pl' style='border-top-color:currentColor;border-top-width:0px;border-top-style:none; width:239px;'><div style='width:239px; height:20px; text-overflow:ellipsis; overflow:hidden; text-align:left;'><a href='#none' " +
              "onclick=\"window.open('/include/resource/evnt/" +
              response.selectList[i].fileName +
              "/" +
              response.selectList[i].evntDescImg +
              "', '', 'scrollbars=yes, width=750, height=600')\" >" +
              response.selectList[i].evntTitle +
              "</a></div></td>" +
              "<td style='text-align:left; color:#999;'>" +
              dt +
              "</td></tr>";
          }
        }
        $("#evntList").html(htmlList);
      } catch (e) {
        $.unblockUI();
      }
    },
  });
}

//ì¬ì© ê¸°ê¸° ì²´í¬
function checkDevice() {
  var userInfo = window.clientInformation.userAgent;

  // ëª¨ë°ì¼ ê¸°ê¸° ì²´í¬
  if (
    // Apple
    userInfo.indexOf("iPhone") >= 0 ||
    userInfo.indexOf("iPod") >= 0 ||
    // Samsung Mobile
    userInfo.indexOf("SHW-M110") >= 0 || // Galaxy S
    userInfo.indexOf("SHV-E120") >= 0 || // Galaxy S2
    userInfo.indexOf("SHV-E110") >= 0 || // Galaxy S2 LTE
    userInfo.indexOf("SHV-E210") >= 0 || // Galaxy S3
    userInfo.indexOf("SHV-E220") >= 0 || // Galaxy S3 Pop
    // LG Mobile
    userInfo.indexOf("LG-SU870") >= 0 || //  Optimus 3D CUBE
    userInfo.indexOf("LG-F120") >= 0 || //  Optimus LTE TAG
    userInfo.indexOf("LG-LU6500") >= 0 || //  Optimus Q2
    userInfo.indexOf("LG-SU880") >= 0 || //  Optimus EX
    userInfo.indexOf("LG-SU760") >= 0 || //  Optimus 3D
    userInfo.indexOf("LG-LU6800") >= 0 || //  Optimus Big
    userInfo.indexOf("LG-KU5900") >= 0 || //  Optimus Black
    userInfo.indexOf("LG-SU660") >= 0 || //  Optimus 2X
    userInfo.indexOf("LG-KU9500") >= 0 || //  Optimus Z
    userInfo.indexOf("LG-SU950") >= 0 || //  Optimus Z
    userInfo.indexOf("LG-LU2300") >= 0 || //  Optimus Q
    // Pantech Sky
    userInfo.indexOf("IM-A850") >= 0 || // VEGA R3
    userInfo.indexOf("IM-A840") >= 0 || // VEGA S5
    userInfo.indexOf("IM-A830") >= 0 || // VEGA Racer2
    userInfo.indexOf("IM-A820") >= 0 || // VEGA LTE EX
    userInfo.indexOf("IM-A810") >= 0 || // VEGA LTE M
    userInfo.indexOf("IM-A800") >= 0 || // VEGA LTE
    userInfo.indexOf("IM-T100") >= 0 || // VEGA NË5
    userInfo.indexOf("IM-A725L") >= 0 || // VEGA X+
    userInfo.indexOf("IM-A760") >= 0 || // VEGA Racer
    userInfo.indexOf("IM-A775") >= 0 || // VEGA Racer
    userInfo.indexOf("IM-A770") >= 0 || // VEGA Racer
    userInfo.indexOf("IM-A780") >= 0 || // VEGA Racer
    userInfo.indexOf("IM-A740") >= 0 || // Mirach A
    userInfo.indexOf("IM-A750") >= 0 || // Mirach A
    userInfo.indexOf("IM-A730") >= 0 || // VEGA S
    userInfo.indexOf("IM-A710") >= 0 || // VEGAXpress
    userInfo.indexOf("IM-A720") >= 0 || // VEGAXpress
    userInfo.indexOf("IM-A690") >= 0 || // Mirach
    userInfo.indexOf("IM-A650") >= 0 || // VEGA
    userInfo.indexOf("IM-A630") >= 0 || // Izar
    userInfo.indexOf("IM-A600") >= 0 // Sirius
  ) {
    top.location.href = "http://m.imeritz.com";
  } else if (userInfo.indexOf("MSIE")) {
    //		alert(userInfo);
  }
}

// ë©ì¸ ìë¨ íì ë«ê¸° 2013.09.09
function closeOpenPopupWin(popupId, cookieName, notOpenToday) {
  if ($("#checkbox_" + popupId).attr("checked") == "checked") {
    poptop_setCookie("meritzpoptop2", "done", 1);
  }
  //$("#ntopPop0"+popupId).animate({ height: 0 }, 300);
  $("#ntopPop0" + popupId).animate(
    { height: 0 },
    { duration: 300, complete: hideTopPopup }
  );
}

// ë©ì¸ ìë¨ íì ê°ì¶ê¸°  2013.09.09
function hideTopPopup() {
  $("#ntopPop07").hide();
}

// ë©ì¸ ìë¨ íì ì ì© Cookie  2013.09.09
function poptop_setCookie(name, value, expiredays) {
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays);
  document.cookie =
    name +
    "=" +
    escape(value) +
    "; path=/; expires=" +
    todayDate.toGMTString() +
    ";";
}

//2014.10.16 ìº íì¸ ì¶ê°
function campaignOpenPopupWin() {
  window.open(
    "/main/ir/campaign_20141016.swf",
    "",
    "width=720, height=480,left=0,top=0,resizable=no,scrollbars=no, status=no"
  );
}
/*
page: http://www.imeritz.com/
url: http://home.imeritz.com/include/js/comm/main/Main.js
*/
