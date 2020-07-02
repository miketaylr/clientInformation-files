// common.js
String.prototype.trim = function () {
  return this.replace(/(^\s*)|(\s*$)/g, "");
};

function bluring() {
  if (event.srcElement.tagName == "A" || event.srcElement.tagName == "IMG")
    document.body.focus();
}
document.onfocusin = bluring;

function makeComma(num) {
  num = "" + num;
  if (num.length > 3) {
    var mod = num.length % 3;
    var output = mod > 0 ? num.substring(0, mod) : "";
    for (i = 0; i < Math.floor(num.length / 3); i++) {
      if (mod == 0 && i == 0)
        output += num.substring(mod + 3 * i, mod + 3 * i + 3);
      else output += "," + num.substring(mod + 3 * i, mod + 3 * i + 3);
    }
    return output;
  } else return num;
}
function CallByte(strSource) {
  var tmpStr;
  var temp = 0;
  var onechar;
  var tcount;
  tcount = 0;
  tmpStr = new String(strSource);
  temp = tmpStr.length;
  for (k = 0; k < temp; k++) {
    onechar = tmpStr.charAt(k);
    if (escape(onechar) == "%0D") continue;
    else if (escape(onechar).length > 4) tcount += 2;
    else tcount++;
  }
  return tcount;
}
function confirmAction(message, link_url, target) {
  if (target) target = target + ".";
  else target = "";
  if (confirm(message)) eval(target + "location.replace('" + link_url + "');");
  else return;
}
function showImage(src) {
  var imgObj = new Image();
  imgObj.src = src;

  var wOpt = "scrollbars=no,status=no,resizable=no";
  wOpt += ",width=" + imgObj.width;
  wOpt += ",height=" + imgObj.height;

  var wBody = "";
  wBody += "<head>";
  wBody += "<title>»çÁø º¸±â</title>";
  wBody += "<script language='javascript'>";
  wBody += "function finalResize(){";
  wBody += "  var oBody=document.body;";
  wBody += "  var oImg=document.images[0];";
  wBody += "  var xdiff=oImg.width-oBody.clientWidth;";
  wBody += "  var ydiff=oImg.height-oBody.clientHeight;";
  wBody += "  window.resizeBy(xdiff,ydiff);";
  wBody += "}";
  wBody += "</" + "script>";
  wBody += "</head>";
  wBody += "<body onLoad='finalResize()' style='margin:0'>";
  wBody +=
    "<a href='javascript:window.close()'><img src='" + src + "' border=0></a>";
  wBody += "</body>";

  winResult = window.open("about:blank", "", wOpt);
  winResult.document.open("text/html", "replace");
  winResult.document.write(wBody);
  winResult.document.close();
  winResult.focus();
}
function EmbedProcess() {
  document.write(document.getElementById("objectFlash").value);
  document.getElementById("objectFlash").id = "objectFlashOk";
}
function parseSize(val, Position) {
  var size = parseInt(val);
  if (size == 0) return "0Bytes";
  if (size < 1024) return size + "Bytes";
  else if (size < Math.pow(1024, 2))
    return Round(size / Math.pow(1024, 1), Position, "F") + "KB";
  else if (size < Math.pow(1024, 3))
    return Round(size / Math.pow(1024, 2), Position, "F") + "MB";
  else if (size < Math.pow(1024, 4))
    return Round(size / Math.pow(1024, 3), Position, "F") + "GB";
  else return Round(size / Math.pow(1024, 4), Position, "F") + "TB";
}

function swfCreater(width1, height1, id1, file1) {
  var flashStr =
    "<object id='" +
    id1 +
    "' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' width='" +
    width1 +
    "' height='" +
    height1 +
    "'>" +
    "<param name='movie' value='" +
    file1 +
    "'>" +
    "<param name='quality' value='high'>" +
    "<param name='wmode' value='transparent'>" +
    "<param name='wmode' value='opaque'>" +
    "<param name='swfversion' value='6.0.65.0'></object>";
  document.write(flashStr);
}

function Round(Num, Position, Base) {
  if (Position == 0) return Math.round(Num);
  else if (Position > 0) {
    var cipher = "1";
    for (var i = 0; i < Position; i++) cipher = cipher + "0";
    var no = Number(cipher);
    if (Base == "F") return Math.round(Num * no) / no;
    else return Math.round(Num / no) * no;
  }
}
function newWindow(url, target, width, height, sbar) {
  var top = (screen.height - height) / 2 - 30;
  var left = (screen.width - width) / 2;
  if (sbar) sbar = "yes";
  else sbar = "no";
  var modaless = window.open(
    url,
    target,
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      top +
      ",left=" +
      left +
      ",scrollbars=" +
      sbar
  );
  modaless.focus();
}
function newWindowPay(url, target, width, height, sbar) {
  var top = (screen.height - height) / 2 - 30;
  var left = (screen.width - width) / 2;
  if (sbar) sbar = "yes";
  else sbar = "no";
  var modaless = window.open(
    url,
    target,
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      top +
      ",left=" +
      left +
      ",scrollbars=" +
      sbar
  );
  if (modaless == null)
    alert(
      "°áÁ¦Ã¢ ÆË¾÷ÀÌ Â÷´ÜµÇ¾ú½À´Ï´Ù!\r\n\r\nÁÖ¼ÒÁÙ ÇÏ´ÜÀÇ ³ë¶õ»ö ¹Ù¸¦ Å¬¸¯ÇØ¼­ ÆË¾÷À» ÇØÁ¦ÇÏ¼¼¿ä"
    );
  else modaless.focus();
}
function MM_swapImgRestore() {
  var i,
    x,
    a = document.MM_sr;
  for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}
function MM_preloadImages() {
  var d = document;
  if (d.images) {
    if (!d.MM_p) d.MM_p = new Array();
    var i,
      j = d.MM_p.length,
      a = MM_preloadImages.arguments;
    for (i = 0; i < a.length; i++)
      if (a[i].indexOf("#") != 0) {
        d.MM_p[j] = new Image();
        d.MM_p[j++].src = a[i];
      }
  }
}
function MM_findObj(n, d) {
  var p, i, x;
  if (!d) d = document;
  if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
    d = parent.frames[n.substring(p + 1)].document;
    n = n.substring(0, p);
  }
  if (!(x = d[n]) && d.all) x = d.all[n];
  for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
  for (i = 0; !x && d.layers && i < d.layers.length; i++)
    x = MM_findObj(n, d.layers[i].document);
  if (!x && d.getElementById) x = d.getElementById(n);
  return x;
}
function MM_swapImage() {
  var i,
    j = 0,
    x,
    a = MM_swapImage.arguments;
  document.MM_sr = new Array();
  for (i = 0; i < a.length - 2; i += 3)
    if ((x = MM_findObj(a[i])) != null) {
      document.MM_sr[j++] = x;
      if (!x.oSrc) x.oSrc = x.src;
      x.src = a[i + 2];
    }
}
function MM_reloadPage(init) {
  if (init == true)
    with (navigator) {
      if (appName == "Netscape" && parseInt(appVersion) == 4) {
        document.MM_pgW = innerWidth;
        document.MM_pgH = innerHeight;
        onresize = MM_reloadPage;
      }
    }
  else if (innerWidth != document.MM_pgW || innerHeight != document.MM_pgH)
    location.reload();
}
MM_reloadPage(true);
function MM_showHideLayers() {
  var i,
    p,
    v,
    obj,
    args = MM_showHideLayers.arguments;
  for (i = 0; i < args.length - 2; i += 3)
    if ((obj = MM_findObj(args[i])) != null) {
      v = args[i + 2];
      if (obj.style) {
        obj = obj.style;
        v = v == "show" ? "visible" : v == "hide" ? "hidden" : v;
      }
      obj.visibility = v;
    }
}

function IsWinXPSP2() {
  try {
    var info = window.clientInformation;
    var reg1 = /[^A-Z0-9]MSIE[ ]+6.0[^A-Z0-9]/i;
    var reg2 = /[^A-Z0-9]WINDOWS[ ]+NT[ ]+5.1[^A-Z0-9]/i;

    if (
      info.appMinorVersion.replace(/\s/g, "").toUpperCase().indexOf(";SP2;") >=
        0 &&
      reg1.test(info.userAgent) == true &&
      reg2.test(info.userAgent) == true
    )
      return true;
  } catch (e) {
    return false;
  }
  return false;
}

var xmlHttp = null;

function createXMLHttpRequest() {
  if (window.ActiveXObject) {
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  } else if (window.XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest();
  }
}

function startRequest(method, url, param, callbackfunc) {
  createXMLHttpRequest();

  if (xmlHttp == null) {
    alert("Create Error");
    return;
  }

  xmlHttp.open(method, url, true);
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4) {
      if (xmlHttp.status == 200) {
        callbackfunc();
      }
    }
  };

  if (method == "POST") {
    xmlHttp.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF-8"
    );
    //xmlHttp.setRequestHeader("User-Agent","XMLHttpRequest");
    xmlHttp.send(param);
  } else {
    xmlHttp.send(null);
  }
}

function showhide(what) {
  if (what.style.display == "none") {
    what.style.display = "";
  } else {
    what.style.display = "none";
  }
}

// ¼¿·ºÆ® ¹Ú½º option ³Ö±â
function optionAdd(input_name, text, value) {
  newOption = document.createElement("OPTION");
  newOption.text = text;
  newOption.value = value;
  input_name.add(newOption);
}

// ¼¿·ºÆ® ¹Ú½º selected
function setSelect(obj, value) {
  if (value) {
    var str = "document.all['" + obj + "'].value = '" + value + "';";
    eval(str);
    // alert(document.all['list_count'].value);
  }
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ÄíÅ° ¾²±â
------------------------------------------------------------------------------------------------------------------------------------------*/
function set_cookie(name, value, exp_days, domain) {
  // ÄíÅ° ÀÔ·Â
  var today = new Date();
  today.setTime(today.getTime() + 60 * 60 * 24 * parseInt(exp_days));
  document.cookie =
    name +
    "=" +
    escape(value) +
    "; path=/; expires=" +
    today.toGMTString() +
    "; domain=" +
    domain +
    ";";
}

function set_cookie_hour(name, value, exp_hours, domain) {
  var today = new Date();
  today.setTime(today.getTime() + 60 * 60 * parseInt(exp_hours));
  document.cookie =
    name +
    "=" +
    escape(value) +
    "; path=/; expires=" +
    today.toGMTString() +
    "; domain=" +
    domain +
    ";";
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ÄíÅ° ÀÐ±â
------------------------------------------------------------------------------------------------------------------------------------------*/
function get_cookie(name) {
  var find_sw = false;
  var start, end;
  var i = 0;

  for (i = 0; i <= document.cookie.length; i++) {
    start = i;
    end = start + name.length;

    if (document.cookie.substring(start, end) == name) {
      find_sw = true;
      break;
    }
  }

  if (find_sw == true) {
    start = end + 1;
    end = document.cookie.indexOf(";", start);

    if (end < start) {
      end = document.cookie.length;
    }

    return document.cookie.substring(start, end);
  }

  return "";
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ÆË¾÷Ã¢ ¶ç¿ì±â
  TargetURL									: ÆË¾÷Ã¢ ÁÖ¼Ò
  WindowName								: Ã¢ÀÌ¸§
  WidthSize									: °¡·Î»çÀÌÁî (pxÁ¦¿Ü)
  HeightSize								: ¼¼·Î»çÀÌÁî (pxÁ¦¿Ü)
  LeftLoc									: ¿ÞÂÊÀ§Ä¡ (pxÁ¦¿Ü)
  TopLoc									: »ó´ÜÀ§Ä¡ (pxÁ¦¿Ü)
  scrollbar									: ½ºÅ©·Ñ¹Ù¿©ºÎ (1, 0)
------------------------------------------------------------------------------------------------------------------------------------------*/
function OpenWindow_Loc(
  TargetURL,
  WindowName,
  WidthSize,
  HeightSize,
  LeftLoc,
  TopLoc,
  ScrollBar
) {
  var YNScrollBar = "";
  if (ScrollBar == 1) YNScrollBar = "yes";
  else YNScrollBar = "no";

  var WindowOption = "width=" + WidthSize + ", height=" + HeightSize;
  WindowOption += ", top=" + TopLoc + "left=" + LeftLoc;
  WindowOption += ", scrollbars=" + YNScrollBar + ", status=yes";

  var Win = window.open(TargetURL, WindowName, WindowOption);
  Win.focus();
}
/*------------------------------------------------------------------------------------------------------------------------------------------
  ÆË¾÷Ã¢ ¶ç¿ì±â [°¡¿îµ¥]
  TargetURL									: ÆË¾÷Ã¢ ÁÖ¼Ò
  WindowName								: Ã¢ÀÌ¸§
  WidthSize									: °¡·Î»çÀÌÁî (pxÁ¦¿Ü)
  HeightSize								: ¼¼·Î»çÀÌÁî (pxÁ¦¿Ü)
  LeftLoc									: ¿ÞÂÊÀ§Ä¡ (pxÁ¦¿Ü)
  TopLoc									: »ó´ÜÀ§Ä¡ (pxÁ¦¿Ü)
  scrollbar									: ½ºÅ©·Ñ¹Ù¿©ºÎ (1, 0)
------------------------------------------------------------------------------------------------------------------------------------------*/
function OpenWindow_Center(
  TargetURL,
  WindowName,
  WidthSize,
  HeightSize,
  ScrollBar
) {
  var YNScrollBar = "";
  if (ScrollBar == 1) YNScrollBar = "yes";
  else YNScrollBar = "no";

  var LeftLoc = screen.width / 2 - WidthSize / 2;
  var TopLoc = (screen.height - HeightSize) / 2 - 20;

  var WindowOption = "width=" + WidthSize + ", height=" + HeightSize;
  WindowOption += ", top=" + TopLoc + "left=" + LeftLoc;
  WindowOption += ", scrollbars=" + YNScrollBar + ", status=no";

  var Win = window.open(TargetURL, WindowName, WindowOption);
  Win.focus();
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  Ã¼Å©¹Ú½º ÀüÃ¼¼±ÅÃ/ÇØÁ¦
------------------------------------------------------------------------------------------------------------------------------------------*/
function checkbox_all_check(checkboxName, allcheckboxID) {
  var chk_arr = document.getElementsByName(checkboxName);

  var all_chk = document.getElementById(allcheckboxID);
  var flag_check = false;

  if (all_chk.checked) flag_check = true;

  for (var i = 0; i < chk_arr.length; i++) {
    chk_arr[i].checked = flag_check;
  }
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  Ã¼Å©¹Ú½º ÀüÃ¼¼±ÅÃ
------------------------------------------------------------------------------------------------------------------------------------------*/
function checkbox_all_checked(checkboxName, allcheckboxID) {
  var chk_arr = document.getElementsByName(checkboxName);
  for (var i = 0; i < chk_arr.length; i++) {
    chk_arr[i].checked = true;
  }

  checkbox_all_control(checkboxName, allcheckboxID);
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  Ã¼Å©¹Ú½º ¼±ÅÃ°³¼ö°¡ ÀüÃ¼Ã¼Å©¹Ú½º °³¼ö¿Í °°À¸¸é ÀüÃ¼¼±ÅÃ Ã¼Å©¹Ú½º¸¦ Ã¼Å© ¶Ç´Â ÇØÁ¦
------------------------------------------------------------------------------------------------------------------------------------------*/
function checkbox_all_control(checkboxName, allcheckboxID) {
  var chk_arr = document.getElementsByName(checkboxName);
  var all_chk = document.getElementById(allcheckboxID);

  if (get_checkbox_check_count(checkboxName) == chk_arr.length) {
    all_chk.checked = true;
  } else {
    all_chk.checked = false;
  }
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ¼±ÅÃµÈ Ã¼Å©¹Ú½º °³¼ö¸¦ ¹ÝÈ¯
------------------------------------------------------------------------------------------------------------------------------------------*/
function get_checkbox_check_count(checkboxName) {
  var chk_arr = document.getElementsByName(checkboxName);

  chk_cnt = 0;
  for (var i = 0; i < chk_arr.length; i++) {
    if (chk_arr[i].checked) chk_cnt++;
  }

  return chk_cnt;
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ¼±ÅÃµÈ Ã¼Å©¹Ú½ºÀÇ value¸¦ ±¸ºÐÀÚ·Î ¹­¾î ¹®ÀÚ¿­·Î ¹ÝÈ¯
------------------------------------------------------------------------------------------------------------------------------------------*/
function get_checkbox_check_values(checkboxName, termChar) {
  var chk_arr = document.getElementsByName(checkboxName);

  var returnvalue = "";
  var k = 0;
  for (var i = 0; i < chk_arr.length; i++) {
    if (chk_arr[i].checked) {
      if (k > 0) returnvalue += termChar;
      returnvalue += chk_arr[i].value;
      k++;
    }
  }

  return returnvalue;
}
/*------------------------------------------------------------------------------------------------------------------------------------------
  AX ÇÊÅÍ¸µ °Ë»çÇØ ÇÊÅÍ¸µ ÁßÀÌ¸é true, ¾Æ´Ï¸é false¸¦ ¹ÝÈ¯
------------------------------------------------------------------------------------------------------------------------------------------*/
function AX_FilteringCheck(userid) {
  var IEIndex = navigator.appVersion.indexOf("MSIE"); // MSIE¸¦ Ã£°í ÀÎµ¦½º¸¦ ¸®ÅÏ
  var IE8Over = navigator.userAgent.indexOf("Trident"); // MS IE 8ÀÌ»ó ¹öÀü Ã¼Å©

  if (IEIndex > 0 || IE8Over > 0) {
    var trident = navigator.userAgent.match(/Trident\/(\d.\d)/i);
    if (trident != null) {
      switch (trident[1]) {
        case "7.0":
          strVer = "11.0";
          break;

        case "6.0":
          strVer = "10.0";
          break;

        case "5.0":
          strVer = "9.0";
          break;

        case "4.0":
          strVer = "8.0";
          break;

        default:
          strVer = "7.0";
          break;
      }
    } else {
      strVer = "7.0";
    }

    strNav = strVer;
  } else {
    strNav = "-1";
  }

  if (parseInt(strNav) >= 9) {
    if (
      window.external.msActiveXFilteringEnabled() == true ||
      typeof window.external.msActiveXFilteringEnabled == "undefined"
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ¿ø°ÝÁö¿ø½ÅÃ»
------------------------------------------------------------------------------------------------------------------------------------------*/
function remote_service() {
  alert(
    "¿ø°ÝÁö¿ø ½ÅÃ» ÈÄ ¼ö¶ô¹öÆ°À» Å¬¸¯ ÇÏ½Å µÚ\nÀÏÃ¼ÀÇ ´Ù¸¥ Á¶ÀÛÀ» ÁßÁöÇØ ÁÖ½Ê½Ã¿À."
  );
  window.open("http://helpu.kr/tple/", "agentLoginA", "width=845, height=420");
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ¿ÀºêÁ§Æ®¿¡ ÀÏ¼ö¸¦ ´õÇØ ¼ÂÆÃ
------------------------------------------------------------------------------------------------------------------------------------------*/
function set_days(ObjName, days) {
  var Obj = document.getElementById(ObjName);
  var cur_fix_end = Obj.value;

  if (cur_fix_end == "") {
    var date = new Date();
    cur_fix_end = set_dateformat(date);
  }

  var exp_date = cur_fix_end.split("-");

  var cal_date = new Date(exp_date[0], exp_date[1] - 1, exp_date[2]);
  cal_date.setDate(cal_date.getDate() + days);

  var newFixend = set_dateformat(cal_date);

  Obj.value = newFixend;
}
/*------------------------------------------------------------------------------------------------------------------------------------------
  ¿ÀºêÁ§Æ®¿¡ ¿À´Ã³¯Â¥¿¡ ÀÏ¼ö¸¦ ´õÇØ ¼ÂÆÃ
------------------------------------------------------------------------------------------------------------------------------------------*/
function set_days_today(ObjName, days) {
  var Obj = document.getElementById(ObjName);
  var date = new Date();
  var cur_fix_end = set_dateformat(date);

  var exp_date = cur_fix_end.split("-");

  var cal_date = new Date(exp_date[0], exp_date[1] - 1, exp_date[2]);
  cal_date.setDate(cal_date.getDate() + days);

  var newFixend = set_dateformat(cal_date);

  Obj.value = newFixend;
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ³¯Â¥¸¦ ¹Þ¾Æ Y-m-d Çü½ÄÀ¸·Î ¹ÝÈ¯
------------------------------------------------------------------------------------------------------------------------------------------*/
function set_dateformat(date) {
  var year = date.getFullYear();
  var mon =
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
  var day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();

  var newDate = year + "-" + mon + "-" + day;

  return newDate;
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ¿ÀºêÁ§Æ®¿¡ ÅØ½ºÆ®¸¦ ¼ÂÆÃ
------------------------------------------------------------------------------------------------------------------------------------------*/
function set_text(ObjName, txt) {
  document.getElementById(ObjName).value = txt;
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ¿ÀºêÁ§Æ®¿¡ ¹ÞÀº ¼ýÀÚ¸¦ ´õÇØ ¼ÂÆÃ
------------------------------------------------------------------------------------------------------------------------------------------*/
function set_numbers(ObjName, no) {
  var Obj = document.getElementById(ObjName);
  var cur_no = Obj.value;
  if (cur_no == "") {
    cur_no = 0;
  }

  var new_no = parseInt(cur_no) + parseInt(no);

  Obj.value = new_no;
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ¼¿·ºÆ®¹Ú½º ¾ÆÀÌÅÛ Ãß°¡
------------------------------------------------------------------------------------------------------------------------------------------*/
function selectbox_item_add(ObjName, val, txt) {
  var Obj = document.getElementById(ObjName);
  var ObjLen = Obj.options.length;

  Obj.options[ObjLen] = new Option(txt, val);
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ¼¿·ºÆ®¹Ú½º ¾ÆÀÌÅÛ ¸ðµÎ »èÁ¦
------------------------------------------------------------------------------------------------------------------------------------------*/
function set_selectbox_reset(ObjName, DefaultOptionValue, DefaultOptionText) {
  var Obj = document.getElementById(ObjName);
  var ItemCount = Obj.options.length;

  for (var i = ItemCount; i >= 0; i--) {
    Obj.options[i] = null;
  }

  if (DefaultOptionText != "") {
    Obj.options[0] = new Option(DefaultOptionText, DefaultOptionValue);
  }
  Obj.selectedIndex = 0;
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ÀÏÀÚ ¼¿·ºÆ®¹Ú½º¿¡ ³âµµ, ¿ù·Î ¼ÂÆÃ
------------------------------------------------------------------------------------------------------------------------------------------*/
function setDays(
  YearObjName,
  MonthObjName,
  DayObjName,
  DefaultText,
  SelectValue
) {
  var YearObj = document.getElementById(YearObjName);
  var MonthObj = document.getElementById(MonthObjName);
  var DayObj = document.getElementById(DayObjName);

  var Year = YearObj.value;
  var Month = MonthObj.value;

  $.ajax({
    url: "/common/ajax.php",
    type: "POST",
    cache: true,
    data: "todo=get_day&year=" + Year + "&month=" + Month,
    timeout: 10000,
    error: function () {
      alert("¿À·ù¹ß»ý#1001");
      return false;
    },
    success: function (res) {
      var arr_response = res.split("||");

      set_selectbox_reset(DayObjName, "", DefaultText);

      for (var i = 0; i < arr_response.length; i++) {
        selectbox_item_add(DayObjName, arr_response[i], arr_response[i]);
      }

      if (SelectValue != "" && SelectValue != undefined) {
        DayObj.value = SelectValue;
      }
    },
  });
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ½ºÅä¸® ´ëºÐ·ù ¼³Á¤
------------------------------------------------------------------------------------------------------------------------------------------*/
function set_story_code1(
  story_type,
  Code1ObjName,
  Code2ObjName,
  Code1DefaultText,
  Code2DefaultText,
  SelectValue
) {
  var Code1Obj = document.getElementById(Code1ObjName);

  $.ajax({
    url: "/common/ajax.php",
    type: "POST",
    cache: true,
    data: "todo=get_story_code1&story_type=" + story_type,
    timeout: 10000,
    error: function () {
      alert("¿À·ù¹ß»ý#1001");
      return false;
    },
    success: function (res) {
      var arr_response = res.split("||");

      set_selectbox_reset(Code1ObjName, "", Code1DefaultText);
      set_selectbox_reset(Code2ObjName, "", Code2DefaultText);

      for (var i = 0; i < arr_response.length; i++) {
        var Items_Array = arr_response[i].split("^");
        selectbox_item_add(Code1ObjName, Items_Array[0], Items_Array[1]);
      }

      if (SelectValue != "" && SelectValue != undefined) {
        Code1Obj.value = SelectValue;
      }
    },
  });
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ½ºÅä¸® ´ëºÐ·ù ¼³Á¤
------------------------------------------------------------------------------------------------------------------------------------------*/
function set_story_code2(
  story_type,
  Code1ObjName,
  Code2ObjName,
  DefaultText,
  SelectValue
) {
  var Code1Obj = document.getElementById(Code1ObjName);
  var Code2Obj = document.getElementById(Code2ObjName);
  $.ajax({
    url: "/common/ajax.php",
    type: "POST",
    cache: true,
    data:
      "todo=get_story_code2&story_type=" +
      story_type +
      "&code1=" +
      Code1Obj.value,
    timeout: 10000,
    error: function () {
      alert("¿À·ù¹ß»ý#1001");
      return false;
    },
    success: function (res) {
      var arr_response = res.split("||");

      set_selectbox_reset(Code2ObjName, "", DefaultText);

      for (var i = 0; i < arr_response.length; i++) {
        var Items_Array = arr_response[i].split("^");
        selectbox_item_add(Code2ObjName, Items_Array[0], Items_Array[1]);
      }

      if (SelectValue != "" && SelectValue != undefined) {
        Code2Obj.value = SelectValue;
      } else {
        // Ãß°¡µÈ ¾ÆÀÌÅÛÀÌ ÇÑ°³¹Û¿¡ ¾øÀ¸¸é ÀÚµ¿À¸·Î 1°³ ¾ÆÀÌÅÛ ¼±ÅÃÇÏµµ·Ï
        if (arr_response.length == 1) {
          Code2Obj.selectedIndex = 1;
        }
      }
    },
  });
}
/*------------------------------------------------------------------------------------------------------------------------------------------
  ¶óµð¿À¹öÆ°¿¡¼­ ¼±ÅÃÇß´ÂÁö ¿©ºÎ ¹ÝÈ¯
------------------------------------------------------------------------------------------------------------------------------------------*/
function get_radio_checked(ObjName) {
  var flag_checked = false;

  var Obj = document.getElementsByName(ObjName);
  for (var i = 0; i < Obj.length; i++) {
    if (Obj[i].checked) {
      flag_checked = true;
      break;
    }
  }

  return flag_checked;
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ¶óµð¿À¹öÆ°¿¡ ¼±ÅÃµÈ Value°ª ¸®ÅÏ
------------------------------------------------------------------------------------------------------------------------------------------*/
function get_radio_value(ObjName) {
  var Obj = document.getElementsByName(ObjName);
  var check_value = "";
  for (var i = 0; i < Obj.length; i++) {
    if (Obj[i].checked) {
      check_value = Obj[i].value;
    }
  }

  return check_value;
}
/*------------------------------------------------------------------------------------------------------------------------------------------
  Å×ÀÌºíÀÇ µ¥ÀÌÅÍ¸¦ º¯°æÇÏ´Â AjaxÇÔ¼ö
  
  [ ÆÄ¶ó¸ÞÅÍ ]
  server														: º¯°æÇÒ ¼­¹ö (¸¶½ºÅÍ : '0', Á¦ÈÞ : '55'...)
  table															: º¯°æÇÒ Å×ÀÌºí
  pk															: Å×ÀÌºíÀÇ PK ÇÊµå
  pk_val														: º¯°æÇÒ PK °ª
  field															: º¯°æÇÒ ÇÊµå¸í
  val															: º¯°æÇÒ °ª
  show_message													: ¿Ï·á ÈÄ ¸Þ¼¼Áö Ç¥½Ã¿©ºÎ
  flag_reload													: ¿Ï·á ÈÄ ÆäÀÌÁö ¸®·Îµå ¿©ºÎ
------------------------------------------------------------------------------------------------------------------------------------------*/
function set_table_modify_value(
  server,
  table,
  pk,
  pk_val,
  field,
  val,
  show_message,
  flag_reload
) {
  var params = "todo=change_table_field_value";
  params += "&modify_server=" + server;
  params += "&modify_table=" + table;
  params += "&modify_pk=" + pk;
  params += "&modify_pk_value=" + pk_val;
  params += "&modify_field=" + field;
  params += "&modify_value=" + val;

  $.ajax({
    url: "/access/common.php",
    type: "POST",
    cache: true,
    data: params,
    timeout: 10000,
    error: function () {
      alert("¿À·ù·Î ÀÎÇØ µ¥ÀÌÅÍ¸¦ º¯°æÇÏÁö ¸øÇß½À´Ï´Ù.");
      return false;
    },
    success: function (res) {
      if (res == "OK") {
        if (show_message == 1) {
          alert("¼öÁ¤µÇ¾ú½À´Ï´Ù.");
        }

        if (flag_reload == 1) {
          location.reload();
        }
      } else {
        alert(res);
      }
    },
  });
}

/*------------------------------------------------------------------------------------------------------------------------------------------
 ÅøÆÁ [ ¾Æ·¡ ³»¿ë Ãß°¡ ÇØÁà¾ß »ç¿ë °¡´É ]

 $(document).ready(function(){
 initTooltip();
 });
 ------------------------------------------------------------------------------------------------------------------------------------------*/
function initTooltip() {
  if (!$(".tooltip").length) {
    return;
  }

  $("body").append(
    '<div id="tooltip_outer" name="tooltip_outer"><div id="tooltip_inner" name="tooltip_inner"></div></div>'
  );
  var tt_title = "";
  var tt = $("#tooltip_outer");
  var tt_i = $("#tooltip_inner");
  $(".tooltip")
    .hover(
      function () {
        // ¸¶¿ì½º ·Ñ¿À¹ö
        if ($(this).attr("alt")) {
          tt_title = $(this).attr("alt");
        } else {
          tt_title = "";
        }

        tt_i.html(tt_title);
        tt.show();
      },
      function () {
        // ¸¶¿ì½º ·Ñ¾Æ¿ô
        tt.hide();
      }
    )

    .mousemove(function (e) {
      var e_x = e.pageX;
      var e_y = e.pageY;
      var tt_x = tt.outerWidth(); //ÅøÆÁÀÇ xÁÂÇ¥?
      var tt_y = tt.outerHeight(); //ÅøÆÁÀÇ yÁÂÇ¥?

      //º»¹® ÁÂÇ¥
      var bd_x = $("body").outerWidth();
      var bd_y = $("body").outerHeight();
      tt.css({
        top: e_y + tt_y > bd_y ? e_y - tt_y : e_y,
        left: e_x + tt_x + 20 > bd_x ? e_x - tt_x - 10 : e_x + 15,
      });
    });
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 PHPÀÇ implode
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function implode(str, array) {
  var txt = "";
  for (var i = 0; i < array.length; i++) {
    if (i > 0) {
      txt += str;
    }

    txt += array[i];
  }

  return txt;
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 ³¯Â¥¸¦ ÀÔ·ÂÇÏ¸é ÀÚ¸®¼ö¿¡ ¸Â°Ô ÀÚµ¿À¸·Î ÇÏÀÌÇÂ Ã¤¿öÁö°Ô ÇÏ´Â ÇÔ¼ö
 À¯È¿ÇÑ ³¯Â¥°¡ ¾Æ´Ï¸é ÅØ½ºÆ®¹Ú½ºÀÇ ³»¿ëÀ» Áö¿ö¹ö¸²
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function set_date_hypen(ObjName) {
  var Obj = document.getElementsByName(ObjName);

  var eventKey;
  var keychar;

  if (window.event) {
    eventKey = event.keyCode;
  } else if (e) {
    eventKey = event.which;
  } else {
    return true;
  }

  var year; //³â
  var month; //¿ù
  var day; //ÀÏ

  if (eventKey != 8) {
    // ÀÔ·ÂÇÑ Å°°¡ ¡ç°¡ ¾Æ´Ò¶§
    if (Obj[0].value.length == 4) {
      Obj[0].value = Obj[0].value.substring(0, 5).concat("-");
    }

    if (Obj[0].value.length == 7) {
      Obj[0].value = Obj[0].value.substring(0, 7).concat("-");
    }
  }

  //À¯È¿¼º Ã¼Å©
  if (Obj[0].value.length == 10) {
    if (!check_datetime(Obj[0].value)) {
      Obj[0].value = "";
      Obj[0].focus();
      return;
    }
  }
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 ³¯Â¥ À¯È¿¼º Ã¼Å©
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function check_datetime(val) {
  if (val.length != 10) {
    return false;
  }
  var exp_val = val.split("-");

  var year = exp_val[0];
  var month = exp_val[1];
  var day = exp_val[2];

  if (exp_val.length != 3) {
    return false;
  }

  var Digit = /\D/g;

  // ³â, ¿ù, ÀÏÀÌ ¼ýÀÚ°¡ ¾Æ´Ï¸é Àß¸øµÈ ³¯Â¥
  if (Digit.test(year) || Digit.test(month) || Digit.test(day)) {
    return false;
  }

  // ³âµµ°¡ 1900º¸´Ù ÀÛ°Å³ª 2100³âÀÌ ³ÑÀ¸¸é Àß¸øµÈ ³¯Â¥
  if (year < 1900 || year > 2100) {
    return false;
  }

  // ¿ùÀÌ 1 ~ 12 ¹üÀ§°¡ ¾Æ´Ï¸é Àß¸øµÈ ³¯Â¥
  if (month < 1 || month > 12) {
    return false;
  }

  // ÀÏÀÌ 1 ~ 31 ¹üÀ§°¡ ¾Æ´Ï¸é Àß¸øµÈ ³¯Â¥
  if (day < 1 || day > 31) {
    return false;
  }

  // 4, 6, 9, 11¿ùÀÎµ¥ ³¯Â¥°¡ 31ÀÌ¸é Àß¸øµÈ ³¯Â¥
  if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
    return false;
  }

  // 2¿ùÀº À±³âÀ» °è»êÇØ 28ÀÌ°Å³ª 29°¡ ¾Æ´Ï¸é Àß¸øµÈ ³¯Â¥
  if (month == 2) {
    var isleap = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    if (day > 29 || (day == 29 && !isleap)) {
      return false;
    }
  }

  return true;
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 ÀüÈ­¹øÈ£ ÀÔ·Â½Ã ÀÚµ¿ÇÏÀÌÇÂÀ» ºÙ¿© ÅØ½ºÆ®¹Ú½º¿¡ ´Ù½Ã ÀÔ·Â
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function set_phone_hypen(ObjID) {
  var Obj = document.getElementById(ObjID);
  var val = Obj.value;

  val = RemoveHypen(val); // ¹®ÀÚ¿­¿¡ ÇÏÀÌÇÂ »èÁ¦
  val = checkDigit(val); // ¹®ÀÚ¿­¿¡ 0 ~ 9 ¿ÜÀÇ ¹®ÀÚ°¡ ÀÖÀ¸¸é »èÁ¦
  var valLen = val.length;

  if (event.keyCode != 12) {
    // ¼­¿ïÀüÈ­¹øÈ£ÀÏ °æ¿ì 10ÀÚ¸®±îÁö¸¸ ³ªÅ¸³ª±³ ±× ÀÌ»óÀÇ ÀÚ¸®¼ö´Â ÀÚµ¿»èÁ¦
    if (val.substring(0, 2) == 02) {
      if (valLen <= 1) Obj.value = val;
      if (valLen == 2) Obj.value = val + "-";
      if (valLen == 4)
        Obj.value = val.substring(0, 2) + "-" + val.substring(2, 3);
      if (valLen == 4)
        Obj.value = val.substring(0, 2) + "-" + val.substring(2, 4);
      if (valLen == 5)
        Obj.value = val.substring(0, 2) + "-" + val.substring(2, 5);
      if (valLen == 6)
        Obj.value = val.substring(0, 2) + "-" + val.substring(2, 6);
      if (valLen == 7)
        Obj.value =
          val.substring(0, 2) +
          "-" +
          val.substring(2, 5) +
          "-" +
          val.substring(5, 7);
      if (valLen == 8)
        Obj.value =
          val.substring(0, 2) +
          "-" +
          val.substring(2, 6) +
          "-" +
          val.substring(6, 8);
      if (valLen == 9)
        Obj.value =
          val.substring(0, 2) +
          "-" +
          val.substring(2, 5) +
          "-" +
          val.substring(5, 9);
      if (valLen == 10)
        Obj.value =
          val.substring(0, 2) +
          "-" +
          val.substring(2, 6) +
          "-" +
          val.substring(6, 10);
      if (valLen == 11)
        Obj.value =
          val.substring(0, 2) +
          "-" +
          val.substring(2, 6) +
          "-" +
          val.substring(6, 10);
      if (valLen == 12)
        Obj.value =
          val.substring(0, 2) +
          "-" +
          val.substring(2, 6) +
          "-" +
          val.substring(6, 10);
    }

    // 05·Î ½ÃÀÛµÇ´Â ¹øÈ£ Ã¼Å©
    if (val.substring(0, 2) == 05) {
      // 050À¸·Î ½ÃÀÛµÇ´ÂÁö µûÁö±â À§ÇÑ Á¶°Ç¹®
      if (val.substring(2, 3) == 0) {
        if (valLen <= 3) Obj.value = val;
        if (valLen == 4) Obj.value = val + "-";
        if (valLen == 5)
          Obj.value = val.substring(0, 4) + "-" + val.substring(4, 5);
        if (valLen == 6)
          Obj.value = val.substring(0, 4) + "-" + val.substring(4, 6);
        if (valLen == 7)
          Obj.value = val.substring(0, 4) + "-" + val.substring(4, 7);
        if (valLen == 8)
          Obj.value = val.substring(0, 4) + "-" + val.substring(4, 8);
        if (valLen == 9)
          Obj.value =
            val.substring(0, 4) +
            "-" +
            val.substring(4, 7) +
            "-" +
            val.substring(7, 9);
        if (valLen == 10)
          Obj.value =
            val.substring(0, 4) +
            "-" +
            val.substring(4, 8) +
            "-" +
            val.substring(8, 10);
        if (valLen == 11)
          Obj.value =
            val.substring(0, 4) +
            "-" +
            val.substring(4, 7) +
            "-" +
            val.substring(7, 11);
        if (valLen == 12)
          Obj.value =
            val.substring(0, 4) +
            "-" +
            val.substring(4, 8) +
            "-" +
            val.substring(8, 12);
        if (valLen == 13)
          Obj.value =
            val.substring(0, 4) +
            "-" +
            val.substring(4, 8) +
            "-" +
            val.substring(8, 12);
      } else {
        if (valLen <= 2) Obj.value = val;
        if (valLen == 3) Obj.value = val + "-";
        if (valLen == 4)
          Obj.value = val.substring(0, 3) + "-" + val.substring(3, 4);
        if (valLen == 5)
          Obj.value = val.substring(0, 3) + "-" + val.substring(3, 5);
        if (valLen == 6)
          Obj.value = val.substring(0, 3) + "-" + val.substring(3, 6);
        if (valLen == 7)
          Obj.value = val.substring(0, 3) + "-" + val.substring(3, 7);
        if (valLen == 8)
          Obj.value =
            val.substring(0, 3) +
            "-" +
            val.substring(3, 6) +
            "-" +
            val.substring(6, 8);
        if (valLen == 9)
          Obj.value =
            val.substring(0, 3) +
            "-" +
            val.substring(3, 7) +
            "-" +
            val.substring(7, 9);
        if (valLen == 10)
          Obj.value =
            val.substring(0, 3) +
            "-" +
            val.substring(3, 6) +
            "-" +
            val.substring(6, 10);
        if (valLen == 11)
          Obj.value =
            val.substring(0, 3) +
            "-" +
            val.substring(3, 7) +
            "-" +
            val.substring(7, 11);
        if (valLen == 12)
          Obj.value =
            val.substring(0, 3) +
            "-" +
            val.substring(3, 7) +
            "-" +
            val.substring(7, 11);
      }
    }

    // ¼­¿ïÀüÈ­¹øÈ£°¡ ¾Æ´Ñ ¹øÈ£ÀÏ °æ¿ì(070, 080Æ÷ÇÔ)
    if (
      val.substring(0, 2) == 03 ||
      val.substring(0, 2) == 04 ||
      val.substring(0, 2) == 06 ||
      val.substring(0, 2) == 07 ||
      val.substring(0, 2) == 08
    ) {
      if (valLen <= 2) Obj.value = val;
      if (valLen == 3) Obj.value = val + "-";
      if (valLen == 4)
        Obj.value = val.substring(0, 3) + "-" + val.substring(3, 4);
      if (valLen == 5)
        Obj.value = val.substring(0, 3) + "-" + val.substring(3, 5);
      if (valLen == 6)
        Obj.value = val.substring(0, 3) + "-" + val.substring(3, 6);
      if (valLen == 7)
        Obj.value = val.substring(0, 3) + "-" + val.substring(3, 7);
      if (valLen == 8)
        Obj.value =
          val.substring(0, 3) +
          "-" +
          val.substring(3, 6) +
          "-" +
          val.substring(6, 8);
      if (valLen == 9)
        Obj.value =
          val.substring(0, 3) +
          "-" +
          val.substring(3, 7) +
          "-" +
          val.substring(7, 9);
      if (valLen == 10)
        Obj.value =
          val.substring(0, 3) +
          "-" +
          val.substring(3, 6) +
          "-" +
          val.substring(6, 10);
      if (valLen == 11)
        Obj.value =
          val.substring(0, 3) +
          "-" +
          val.substring(3, 7) +
          "-" +
          val.substring(7, 11);
      if (valLen == 12)
        Obj.value =
          val.substring(0, 3) +
          "-" +
          val.substring(3, 7) +
          "-" +
          val.substring(7, 11);
    }

    // ÈÞ´ëÆùÀÏ °æ¿ì
    if (val.substring(0, 2) == 01) {
      if (valLen <= 2) Obj.value = val;
      if (valLen == 3) Obj.value = val + "-";
      if (valLen == 4)
        Obj.value = val.substring(0, 3) + "-" + val.substring(3, 4);
      if (valLen == 5)
        Obj.value = val.substring(0, 3) + "-" + val.substring(3, 5);
      if (valLen == 6)
        Obj.value = val.substring(0, 3) + "-" + val.substring(3, 6);
      if (valLen == 7)
        Obj.value = val.substring(0, 3) + "-" + val.substring(3, 7);
      if (valLen == 8)
        Obj.value =
          val.substring(0, 3) +
          "-" +
          val.substring(3, 7) +
          "-" +
          val.substring(7, 8);
      if (valLen == 9)
        Obj.value =
          val.substring(0, 3) +
          "-" +
          val.substring(3, 7) +
          "-" +
          val.substring(7, 9);
      if (valLen == 10)
        Obj.value =
          val.substring(0, 3) +
          "-" +
          val.substring(3, 6) +
          "-" +
          val.substring(6, 10);
      if (valLen == 11)
        Obj.value =
          val.substring(0, 3) +
          "-" +
          val.substring(3, 7) +
          "-" +
          val.substring(7, 11);
      if (valLen == 12)
        Obj.value =
          val.substring(0, 3) +
          "-" +
          val.substring(3, 7) +
          "-" +
          val.substring(7, 11);
    }

    // 1588, 1688µîÀÇ ¹øÈ£ÀÏ °æ¿ì
    if (val.substring(0, 1) == 1) {
      if (valLen <= 3) Obj.value = val;
      if (valLen == 4) Obj.value = val + "-";
      if (valLen == 5)
        Obj.value = val.substring(0, 4) + "-" + val.substring(4, 5);
      if (valLen == 6)
        Obj.value = val.substring(0, 4) + "-" + val.substring(4, 6);
      if (valLen == 7)
        Obj.value = val.substring(0, 4) + "-" + val.substring(4, 7);
      if (valLen == 8)
        Obj.value = val.substring(0, 4) + "-" + val.substring(4, 8);
      if (valLen == 9)
        Obj.value = val.substring(0, 4) + "-" + val.substring(4, 8);
      if (valLen == 10)
        Obj.value = val.substring(0, 4) + "-" + val.substring(4, 8);
      if (valLen == 11)
        Obj.value = val.substring(0, 4) + "-" + val.substring(4, 8);
      if (valLen == 12)
        Obj.value = val.substring(0, 4) + "-" + val.substring(4, 8);
    }
  }
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 ¹®ÀÚ¿­¿¡ ÇÏÀÌÇÂÀÌ ÀÖÀ¸¸é »èÁ¦ ÈÄ ¹ÝÈ¯
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function RemoveHypen(sNo) {
  var reNo = "";
  for (var i = 0; i < sNo.length; i++) {
    if (sNo.charAt(i) != "-") {
      reNo += sNo.charAt(i);
    }
  }
  return reNo;
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 ¹®ÀÚ¿­¿¡ ¼ýÀÚ¿ÜÀÇ ¹®ÀÚ°¡ ÀÖÀ¸¸é »èÁ¦ ÈÄ ¹ÝÈ¯
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function checkDigit(num) {
  var Digit = "1234567890";
  var string = num;
  var len = string.length;
  var retVal = "";

  for (i = 0; i < len; i++) {
    if (Digit.indexOf(string.substring(i, i + 1)) >= 0) {
      retVal = retVal + string.substring(i, i + 1);
    }
  }
  return retVal;
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 ÀÔ·ÂµÈ ¿µ¹®ÀÚ·Ñ ´ë¹®ÀÚ·Î ÀÚµ¿º¯°æ
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function upper_change(ObjID) {
  var Obj = document.getElementById(ObjID);

  Obj.value = Obj.value.toUpperCase();
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 ÀÔ·ÂµÈ ¿µ¹®ÀÚ·Ñ ¼Ò¹®ÀÚ·Î ÀÚµ¿º¯°æ
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function lower_change(ObjID) {
  var Obj = document.getElementById(ObjID);

  Obj.value = Obj.value.toLowerCase();
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 ¼ýÀÚ¸¸ ÀÔ·Â°¡´É
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function OnlyNumber(ObjID) {
  $("#" + ObjID).val(
    $("#" + ObjID)
      .val()
      .replace(/\D/g, "")
  );
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ¿£ÅÍ ¾×¼Ç
------------------------------------------------------------------------------------------------------------------------------------------*/
function EnterAction(Func) {
  if (event.keyCode == 13) {
    Func();
  }
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  Å¬¸³º¸µå º¹»ç
------------------------------------------------------------------------------------------------------------------------------------------*/
function setClipboard(str) {
  if (window.clipboardData) {
    var ret = null;
    ret = clipboardData.clearData();
    if (ret) {
      window.clipboardData.setData("Text", str);
    } else {
      alert("¿¢¼¼½º Çã¿ë ¾ÈµÊ");
    }
  }
}
function goUrl(url, target) {
  if (target == "_blank") {
    window.open(url);
  } else {
    location.href = url;
  }
}
/*
page: http://www.tple.co.kr/
url: http://www.tple.co.kr/files/script/common.js?t=1484692531
*/
