document.write(
  "<script language='javascript' src='/js/GlobalDomain.asp'></script>"
);
function f_chkMatchHost(arrStrRe, strDefaultHost) {
  var strHost, strCurHost, anRegExp, i, bChk;
  try {
    strCurHost = self.location.host;
    for (i = 0, bChk = false; !bChk && i < arrStrRe.length; i++) {
      anRegExp = new RegExp(arrStrRe[i].replace(/[.]/g, "[.]") + "$", "gi");
      bChk = anRegExp.test(strCurHost);
      delete anRegExp;
    }
    if (!bChk) throw "";
    strHost = "";
  } catch (x) {
    strHost = strDefaultHost ? "http://" + strDefaultHost : "";
  }

  return strHost;
}
function f_getClubHost() {
  var arrHost;
  //modified
  arrHost = new Array("club.netmarble.net", "club-web.netmarble.org");

  return f_chkMatchHost(arrHost, "club.netmarble.net");
}

function f_getWWWHost() {
  var arrHost;
  arrHost = new Array(
    "www.netmarble.net",
    "web[0-9]+.netmarble.org",
    "test[0-9]*.netmarble.net"
  );

  return f_chkMatchHost(arrHost, "www.netmarble.net");
}

function f_opensms() {
  openWin(NM_DOMAIN_SERVICE + "/SMS/Index.asp", 510, 614);
}
// Function WindowOpen
function f_OpenWinBaseFunc(url, w, h, bCenter, paraOption, name) {
  var strOpt, ret;
  strOpt = "width=" + w + ",height=" + h;
  if (!name) name = "";
  if (bCenter)
    strOpt +=
      ",top=" + (screen.height - h) / 2 + ",left=" + (screen.width - w) / 2;
  if (paraOption) strOpt += "," + paraOption;
  ret = self.top.open(url, name, strOpt);

  if (name) ret.focus();
  return ret;
}
function f_openWinNoResize(strUrl, nWidth, nHeight, name) {
  return f_OpenWinBaseFunc(
    strUrl,
    nWidth,
    nHeight,
    true,
    "resizable=yes,scrollbars=no",
    name
  );
}
function f_openWinScroll(strUrl, nWidth, nHeight, name) {
  return f_OpenWinBaseFunc(
    strUrl,
    nWidth,
    nHeight,
    true,
    "resizable=yes,scrollbars=yes",
    name
  );
}

// Function Persional Pop-up
function f_openPopOnlineFriend() {
  top.location.href = NM_DOMAIN_MYPAGE + "/mypage/friend/";
}
function f_openPopMemoAlram() {
  top.location.href = NM_DOMAIN_MYPAGE + "/mypage/memo/mymemoenv.asp";
}

function f_PopResize() {
  var objBody = self.document.body;
  var objWin = self;
  var nHeight =
    objBody.scrollHeight + (objBody.offsetHeight - objBody.clientHeight);
  var nWidth, nWidthTmp;
  nWidth = document.body.scrollWidth + 10;
  nHeight = document.body.scrollHeight + 29;
  self.resizeTo(nWidth, nHeight);
}
function f_OnMouseOver(obj) {
  obj.style.textDecoration = "underline";
}
function f_OnMouseOut(obj) {
  obj.style.textDecoration = "none";
}

function f_GoMyInfo(strGoMenu) {
  top.location.href = NM_DOMAIN_MYPAGE + "/mypage/";
}
function f_getHiddenFrame(objWin) {
  return findTargFrame(objWin, "Action_Result");
}
function f_appletDisconnect() {
  return;
}
function f_openAgit(strUserID, strGoURL) {
  f_openhompy(strUserID, strGoURL);
}

function f_LogOut(strUrl) {
  try {
    f_ActiveXDisconnectAll();
  } catch (x) {}
  self.top.location.href = strUrl;
}
function f_GoMainMenu(strURL) {
  self.top.location.href = strURL;
}
function fLocation(url) {
  location.href = url;
}

function f_TMenuCount(t_group) {
  f_SMenuCount(t_group);
}
function f_SMenuCount(s_group) {
  /*
	var targFrame;
	if (typeof(f_isMain) == "function")
	{
		if (ISObject(targFrame = f_FindLocFrame(self)))
			targFrame.location.href = "/_common/LogClick.asp?link_cat=MAIN&link_id=" + s_group;
	}
	*/
}

function f_chkFileFormat(strFileName, arrFileFormat) {
  var arrFileName = strFileName.split(".");
  var nArraySize = arrFileName.length;
  var strFileFormat = arrFileName[nArraySize - 1].toLowerCase();
  var bValid = false;
  nArraySize = arrFileFormat.length;
  for (var i = 0; i < nArraySize; i++) {
    if (strFileFormat == arrFileFormat[i]) {
      bValid = true;
    }
  }
  var arrResult = new Array(bValid, strFileFormat, arrFileFormat.join("', '"));
  return arrResult;
}
function f_getFileName(strFile) {
  var arrString = strFile.split("\\");
  var nStringSize = arrString.length;
  var strFileName = arrString[nStringSize - 1];
  return strFileName;
}
function f_chkAlphaNum(strString) {
  strValid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";
  for (var i = 0; i < strString.length; i++) {
    if (strValid.indexOf(strString.charAt(i)) == -1) {
      return false;
    }
  }
  return true;
}
function f_chkFileName(strFile) {
  var arrString = strFile.split("\\");
  var nStringSize = arrString.length;
  var strFileName = arrString[nStringSize - 1];
  arrString = strFileName.split(".");
  nStringSize = arrString.length;
  if (nStringSize != 2) {
    return false;
  }
  var strFileName = arrString[0];
  var strFileFormat = arrString[1];
  if (!check_space(strFileFormat)) {
    return false;
  }
  if (strFileFormat.length > 4 || strFileFormat.length < 3) {
    return false;
  }
  if (strFileName.length > 15) {
    return false;
  }
  if (!f_chkAlphaNum(strFileName)) {
    return false;
  }
  return true;
}
function f_GetSelValue(theForm, ElementName) {
  var strSelValue = "";
  var idxSelect;
  var bSelected = false;
  var Element = theForm.elements[ElementName];
  var ElementLen = Element.length;
  if (typeof ElementLen == "undefined") {
    if (Element.checked) {
      strSelValue = Element.value;
      bSelected = true;
    }
  } else {
    for (var idxLoop = 0; idxLoop < ElementLen; idxLoop++) {
      if (Element[idxLoop].checked) {
        idxSelect = idxLoop;
        strSelValue = Element[idxSelect].value;
        bSelected = true;
      }
    }
  }
  var arrReturnValue = new Array(3);
  arrReturnValue[0] = bSelected;
  arrReturnValue[1] = strSelValue;
  arrReturnValue[2] = idxSelect;
  return arrReturnValue;
}
function f_setSelect(Element, Val) {
  var nEleLen = Element.length;
  for (var idxLoop = 0; idxLoop < nEleLen; idxLoop++) {
    if (Element[idxLoop].value == Val) {
      Element[idxLoop].selected = true;
    }
  }
}
function f_setChkVal(strVal, objEle) {
  var nEleLen = objEle.length;
  for (var i = 0; i < nEleLen; i++) {
    if (objEle[i].value.toString() == strVal.toString()) {
      objEle[i].checked = true;
    }
  }
}
function f_SetReadOnly(theForm, bStart) {
  var bReadOnly;
  if (bStart == 1) {
    bReadOnly = true;
  } else {
    bReadOnly = false;
  }
  var nLen = theForm.elements.length;
  for (var i = 0; i < nLen; i++) {
    theForm.elements[i].readOnly = bReadOnly;
  }
}
function f_TogleScrl() {
  var objBody = document.body;
  var strOverFlow = objBody.style.overflow;
  if (strOverFlow == "") {
    objBody.style.overflow = "hidden";
  } else {
    objBody.style.overflow = "";
  }
}
function f_doBlink() {
  var blink = document.all.tags("BLINK");
  for (var i = 0; i < blink.length; i++)
    blink[i].style.visibility = blink[i].style.visibility == "" ? "hidden" : "";
}
function f_startBlink() {
  if (document.all) setInterval("f_doBlink()", 1000);
}
function f_TogShowHide(LayerName) {
  var DisplayVal = document.all[LayerName].style.display;
  if (DisplayVal == "none") {
    document.all[LayerName].style.display = "block";
  } else {
    document.all[LayerName].style.display = "none";
  }
}
function f_TogBreakShowHide(LayerName) {
  var DisplayVal = parent.document.all[LayerName].style.display;
  if (DisplayVal == "none") {
    parent.document.all[LayerName].style.display = "block";
  } else {
    parent.document.all[LayerName].style.display = "none";
  }
}

function f_arrTogShowHideClose(sel, Name) {
  var nLayerLen = document.all[Name].length;
  for (var i = 0; i < nLayerLen; i++) {
    document.all[Name][i].style.display = "none";
  }
  document.all[Name][sel].style.display = "block";
}
function f_arrTogShowHide(sel, Name) {
  var DisplayVal = document.all[Name][sel].style.display;
  if (DisplayVal == "block") {
    document.all[Name][sel].style.display = "none";
  } else {
    document.all[Name][sel].style.display = "block";
  }
}
function f_show_hide(bShow, LayerName) {
  if (bShow == "show") {
    field1 = "visible";
    field2 = "static";
  } else if (bShow == "hide") {
    field1 = "hidden";
    field2 = "absolute";
  }
  document.all[LayerName].style.visibility = field1;
  document.all[LayerName].style.position = field2;
}
function f_show_hide_sub(bshow, LayerName, SubLayerName) {
  if (bshow == "show") {
    field1 = "visible";
    field2 = "static";
  } else if (bshow == "hide") {
    field1 = "hidden";
    field2 = "absolute";
  }
  document.all[LayerName].all[SubLayerName].style.visibility = field1;
  document.all[LayerName].all[SubLayerName].style.position = field2;
}
function MM_swapImgRestore() {
  //v3.0
  var i,
    x,
    a = document.MM_sr;
  for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}

function MM_preloadImages() {
  //v3.0
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
  //v4.0
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
  if (!x && document.getElementById) x = document.getElementById(n);
  return x;
}

function MM_swapImage() {
  //v3.0
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
function f_callColorPicker(tmpx, tmpy) {
  var x = event.screenX - event.clientX - document.body.scrollLeft;
  var y = event.screenY - event.clientY - document.body.scrollTop;

  x = x + tmpx;
  y = y + tmpy;

  var Selcol = f_showColorPicker(x, y);
  return Selcol;
}

function f_showColorPicker(x, y) {
  var bIsWinXPSP2 = IsWinXPSP2(); // OS°¡ WinXP sp2ÀÎÁö Ã¼Å©

  nWidth = 202;
  nHeight = 162;

  if (bIsWinXPSP2) {
    nHeight += 25;
  }

  var Selcol = showModalDialog(
    "/_common/pall.asp",
    "",
    "font-family:Verdana; font-size:12; " +
      "dialogWidth:" +
      nWidth +
      "px;dialogHeight:" +
      nHeight +
      "px;" +
      " dialogLeft:" +
      x +
      "px; dialogTop:" +
      y +
      "px; status:no; help:no; scroll:no"
  );
  return Selcol;
}
function callColorPicker(tmpx, tmpy) {
  var x = event.screenX - event.clientX - document.body.scrollLeft;
  var y = event.screenY - event.clientY - document.body.scrollTop;

  x = x + tmpx;
  y = y + tmpy;

  showColorPicker(x, y);
  return;
}

function showColorPicker(x, y) {
  var Selcol = showModalDialog(
    "/_common/pall.asp",
    "",
    "font-family:Verdana; font-size:12; dialogWidth:202px; dialogHeight:162px; dialogLeft:" +
      x +
      "px; dialogTop:" +
      y +
      "px; status:no; help:no; scroll:no"
  );
  if (Selcol != "") {
    document.all.calinput.style.backgroundColor = Selcol;
    document.Send.ChatFontColor.value = Selcol;
  }
  return;
}

function check_cnt(form, strName) {
  var checkcnt = 0;

  for (var i = 0; i < form.length; i++) {
    if (form.elements[i].name == strName && form.elements[i].checked) {
      checkcnt++;
    }
  }
  return checkcnt;
}
function f_chk_all(theForm, bChked, strName) {
  var strSet = "";
  if (bChked) {
    strSet = true;
  } else {
    strSet = false;
  }
  for (var i = 0; i < theForm.elements.length; i++) {
    var objElm = theForm.elements[i];
    if (objElm.name == strName) objElm.checked = strSet;
  }
  return;
}
function revcheck(theForm, strName) {
  for (var i = 0; i < theForm.elements.length; i++) {
    var select = theForm.elements[i];
    if (select.name == strName) select.checked = !select.checked;
  }
  return;
}
function openWinN(url, wName, w, h, bScroll) {
  var PopWin = openWinW(url, wName, w, h, "", "", bScroll);
  return PopWin;
}
function openWinY(url, w, h) {
  var PopWin = openWinW(url, "_blank", w, h, "", "", 1);
}
function openWin(url, w, h) {
  //	var PopWin = openWinW(url,'_blank',w,h,'','',0,0);
  var PopWin = openWinW(url, "_blank", w, h, "", "", 0, 1);
}
function openWinW(strUrl, strWName, nW, nH, nT, nL, bScroll, bResize) {
  var sOption = "";
  var strScroll;
  var nSW = screen.width;
  var nSH = screen.height;
  var nPointW = 0,
    nPointH = 0;
  //var

  var strResize;
  if (bResize == 0) strResize = "resizable=no";
  else strResize = "resizable=yes";

  if (nT == "" || nL == "") {
    if (nW < nSW) {
      nPointW = (nSW - nW) / 2;
    }
    if (nH < nSH) {
      nPointH = (nSH - nH) / 2 - 40;
    }
  } else {
    nPointW = nL;
    nPointH = nT;
  }

  if (bScroll == 0) {
    strScroll = " scrollbars=no";
  } else {
    strScroll = " scrollbars=yes";
  }
  sOption =
    sOption +
    "toolbar=no, channelmode=no, location=no, directories=no, menubar=no," +
    strScroll +
    "," +
    strResize;
  sOption =
    sOption +
    ", width=" +
    nW +
    ", height=" +
    nH +
    ", top=" +
    nPointH +
    ", left=" +
    nPointW;

  var PopWin = window.open(strUrl, strWName, sOption);

  if (PopWin != null) PopWin.focus();
  return PopWin;
}

function CloseNgoURL(URL) {
  opener.location = URL;
  self.close();
}
function CloseNgoURL2(URL) {
  var targ_Win = self.opener;
  if (typeof targ_Win == "object" && !targ_Win.closed)
    targ_Win.top.location.href = URL;
  self.close();
}
function f_MakeWin(strBody, nW, nH, bS) {
  var popWIn = window.open(
    "about:blank",
    "",
    "toolbar=0, channelmode=0, location=0, directories=0, resizable=1, menubar=0, scrollbars=" +
      bS +
      ",width=" +
      nW +
      ",height=" +
      nH
  );
  popWIn.document.write(strBody);
}
function getCookie(name) {
  var nameOfCookie = name + "=";
  var x = 0;
  while (x <= document.cookie.length) {
    var y = x + nameOfCookie.length;
    if (document.cookie.substring(x, y) == nameOfCookie) {
      if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
        endOfCookie = document.cookie.length;
      return unescape(document.cookie.substring(y, endOfCookie));
    }

    x = document.cookie.indexOf(" ", x) + 1;

    if (x == 0) break;
  }
  return "";
}
function setCookie(name, value, expiredays) {
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
function AlpaNumber(string) {
  //¾ËÆÄºªÀÌ³ª ¼ýÀÚ°¡ ¾Æ´Ñ ¹®ÀÚ°¡ Æ÷ÇÔµÇ¾î ÀÖÀ¸¸é false ¸®ÅÏ
  valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (var i = 0; i < string.length; i++) {
    if (valid.indexOf(string.charAt(i)) == -1) {
      return false;
    }
  }
  return true;
}
function NoNumber(string) {
  if (!f_chkNoNum(string)) {
    alert("¼ýÀÚ´Â Æ÷ÇÔµÉ ¼ö ¾ø½À´Ï´Ù.");
    return false;
  }
  return true;
}
function f_chkNoNum(string) {
  //¼ýÀÚ°¡ Æ÷ÇÔµÇ¾î ÀÖÀ¸¸é false ¸®ÅÏ
  valid = "0123456789";
  for (var i = 0; i < string.length; i++) {
    if (valid.indexOf(string.charAt(i)) != -1) {
      return false;
      return false;
    }
  }
  return true;
}
function OnlyNumber(string) {
  if (!f_chkOnlyNum(string)) {
    alert("¼ýÀÚ¸¸ ÀÔ·ÂÇØÁÖ¼¼¿ä");
    return false;
  }
  return true;
}
function f_chkOnlyNum(string) {
  //¼ýÀÚ ¿ÜÀÇ ¹®ÀÚ°¡ Æ÷ÇÔµÇ¾î ÀÖÀ¸¸é false ¸®ÅÏ
  valid = "0123456789";
  for (var i = 0; i < string.length; i++) {
    if (valid.indexOf(string.charAt(i)) == -1) {
      return false;
    }
  }
  return true;
}
function check_space(str) {
  //°ø¹éÀ» Á¦°ÅÇÏ°í ÀÔ·Â ¿©ºÎ Ã¼Å©
  if (str.search(/\S/) < 0) {
    return false;
  }
  var temp = str.replace(" ", "");
  if (temp.length == 0) {
    return false;
  }
  return true;
}
function calbyte(aquery) {
  //¹ÙÀÌÆ® ¼ö °è»ê
  //aquery - °è»êÇÒ ½ºÆ®¸µ
  var tmpStr;
  var temp = 0;
  var onechar;
  var tcount;
  tcount = 0;
  tmpStr = new String(aquery);
  temp = tmpStr.length;

  for (k = 0; k < temp; k++) {
    onechar = tmpStr.charAt(k);
    onechar_1 = escape(onechar);
    if (onechar_1.charAt(0) == "%") {
      onechar_1 = onechar_1.substring(1, 2);
      switch (onechar_1) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
          tcount++;
          break;
        default:
          tcount += 2;
          break;
      }
    } else if (onechar != "\r") {
      tcount++;
    }
  }
  return tcount;
}
function f_chkRegID(elmRegID1, elmRegID2) {
  // CheckSum Ã¼Å©
  if (chksumID(elmRegID1, elmRegID2) == false) {
    alert("¿Ã¹Ù¸¥ ÁÖ¹Îµî·Ï¹øÈ£°¡ ¾Æ´Õ´Ï´Ù.");
    return false;
  }

  // »ý¼º±â·Î ¸¸µç°Ô ¾Æ´Ñ°¡ »ý³â¿ùÀÏ°ú ³²³àÇÊµå Ã¼Å©
  if (ValidRegNo(elmRegID1, elmRegID2) == false) {
    alert("¿Ã¹Ù¸¥ ÁÖ¹Îµî·Ï¹øÈ£°¡ ¾Æ´Õ´Ï´Ù.");
    return false;
  }

  // YYMMDD°¡ ¸Â´ÂÁö È®ÀÎÇÑ´Ù.
  if (ValidRegNo2(elmRegID1) == false) {
    alert("¿Ã¹Ù¸¥ ÁÖ¹Îµî·Ï¹øÈ£°¡ ¾Æ´Õ´Ï´Ù.");
    return false;
  }

  return true;
}
function chksumID(elmRegID1, elmRegID2) {
  str1 = elmRegID1.value;
  str2 = elmRegID2.value;
  var li_lastid, li_mod, li_minus, li_last;
  var value0, value1, value2, value3, value4, value5, value6;
  var value7, value8, value9, value10, value11, value12;

  if (f_chkOnlyNum(str1) && f_chkOnlyNum(str2)) {
    li_lastid = parseFloat(str2.substring(6, 7));
    value0 = parseFloat(str1.substring(0, 1)) * 2;
    value1 = parseFloat(str1.substring(1, 2)) * 3;
    value2 = parseFloat(str1.substring(2, 3)) * 4;
    value3 = parseFloat(str1.substring(3, 4)) * 5;
    value4 = parseFloat(str1.substring(4, 5)) * 6;
    value5 = parseFloat(str1.substring(5, 6)) * 7;
    value6 = parseFloat(str2.substring(0, 1)) * 8;
    value7 = parseFloat(str2.substring(1, 2)) * 9;
    value8 = parseFloat(str2.substring(2, 3)) * 2;
    value9 = parseFloat(str2.substring(3, 4)) * 3;
    value10 = parseFloat(str2.substring(4, 5)) * 4;
    value11 = parseFloat(str2.substring(5, 6)) * 5;
    value12 = 0;

    value12 =
      value0 +
      value1 +
      value2 +
      value3 +
      value4 +
      value5 +
      value6 +
      value7 +
      value8 +
      value9 +
      value10 +
      value11 +
      value12;

    li_mod = value12 % 11;
    li_minus = 11 - li_mod;
    li_last = li_minus % 10;
    if (li_last != li_lastid) {
      elmRegID2.select();
      elmRegID2.focus();
      return false;
    } else return true;
  } else elmRegID2.select();
  elmRegID2.focus();
  return false;
}
function ValidRegNo(elmRegID1, elmRegID2) {
  strReg1 = elmRegID1.value;
  strReg2 = elmRegID2.value;
  sGender = strReg2.substring(0, 1);
  sYear = strReg1.substring(0, 2);
  sMonth = new Number(strReg1.substring(2, 4));
  sDay = new Number(strReg1.substring(4, 6));

  //[¿ù]ÀÌ 1~12¿ù »çÀÌÀÎÁö, [ÀÏ]ÀÌ 1~31ÀÏ »çÀÌÀÎÁö
  if (sMonth < 1 || sMonth > 12 || sDay < 1 || sDay > 31) {
    return false;
  }
  // µÎ¹øÂ° ´Ü¶ô Ã¹¹øÂ° ¼ýÀÚ´Â 4º¸´Ù Å¬ ¼ö ¾ø´Ù.
  if (sGender > 4 || sGender < 0) {
    return false;
  }

  // 2000³âµµ ÀÌÀüÀº ³²ÀÚ´Â 1, ¿©ÀÚ´Â 2
  // 2000³âµµ ÀÌÈÄ´Â ³²ÀÚ´Â 3, ¿©ÀÚ´Â 4
  /*		if (sYear != '00') {
		if ((sGender != '1') && (sGender != '2')) {
			return false;
		}
	}
*/
  return true;
}

// YYMMDD°¡ ¸Â´ÂÁö È®ÀÎÇÑ´Ù.
function ValidRegNo2(elmRegID1) {
  strReg1 = elmRegID1.value;

  a = new String(strReg1);

  if (a == "") return false;
  if (a.length != 6) return false;

  intYear = parseInt(a.substring(0, 2), 10);
  intMonth = parseInt(a.substring(2, 4), 10);
  intDay = parseInt(a.substring(4, 6), 10);

  if (intMonth < 0 || intMonth > 12) {
    return false;
  }

  switch (intMonth) {
    case 2:
      if (intDay < 0 || intDay > 29) {
        return false;
        breake;
      }
    case 4:
      if (intDay < 0 || intDay > 30) {
        return false;
        breake;
      }
    case 6:
      if (intDay < 0 || intDay > 30) {
        return false;
        breake;
      }
    case 9:
      if (intDay < 0 || intDay > 30) {
        return false;
        breake;
      }
    case 11:
      if (intDay < 0 || intDay > 30) {
        return false;
        breake;
      }
    default:
      if (intDay < 0 || intDay > 31) {
        return false;
        breake;
      }
  }

  return true;
}
function ssn_check(theForm) {
  //ÁÖ¹Î¹øÈ£ ¿Ã¹Ù¸¥ Çü½ÄÀÎÁö¸¦ Ã¼Å©
  if (!f_chkRegID(theForm.ssn1, theForm.ssn2)) {
    return false;
  }
  return true;
}

function f_chkEmail(strEmail) {
  // ±âÀÔ¿©ºÎ Ã¼Å©
  if (!check_space(strEmail)) {
    alert("¸ÞÀÏÁÖ¼Ò¸¦ ÀÔ·ÂÇØÁÖ½Ê½Ã¿À.");
    return false;
  }
  // ¿Ã¹Ù¸¥ Çü½ÄÀÎÁö Ã¼Å©
  if (
    strEmail.search(
      /^[a-zA-Z0-9_]+(.[-_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)+$/
    ) == -1
  ) {
    alert("¸ÞÀÏÁÖ¼Ò°¡ ºÎÁ¤È®ÇÕ´Ï´Ù.");
    return false;
  }
  var strvalid_char =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-.@";
  for (var i = 0; i < strEmail.length; i++) {
    if (strvalid_char.indexOf(strEmail.charAt(i)) == -1) {
      alert("¸ÞÀÏ ÁÖ¼Ò°¡ Àß¸øµÇ¾ú½À´Ï´Ù.");
      return false;
    }
  }
  return true;
}
function email_check(theForm) {
  //¸ÞÀÏÁÖ¼Ò ±âÀÔ¿©ºÎ Ã¼Å©
  str = theForm.email.value;

  if (!f_chkEmail(str)) {
    theForm.email.focus();
    return false;
  }
  return true;
}
function objVisibility(obj, _visibility, subwidth) {
  ww = document.body.offsetWidth;
  if (ww > 1000) psubwidth = (ww - 1000) / 2;
  if (document.layers)
    document.layers[obj].visibility =
      _visibility == "visible" ? "show" : "hide";
  else {
    document.all[obj].style.visibility = _visibility;
    document.all[obj].style.left = subwidth + psubwidth;
  }
}

tog_subobj = 0;
function topmenu(subobj, subwidth) {
  if (tog_subobj == subobj) return;
  if (tog_subobj != 0)
    objVisibility("menusub" + tog_subobj, "hidden", subwidth);
  objVisibility("menusub" + subobj, "visible", subwidth);
  tog_subobj = subobj;
}
function ifrmreSize(ifrm_Name) {
  var objBody = frames[ifrm_Name].document.body;
  var objFrame = document.all[ifrm_Name];
  objFrame.style.height =
    objBody.scrollHeight + (objBody.offsetHeight - objBody.clientHeight);
  objFrame.style.width =
    objBody.scrollWidth + (objBody.offsetWidth - objBody.clientWidth);
}

function ifrm_init(ifrm_Name) {
  parent.ifrmreSize(ifrm_Name);
  parent.document.location.href = parent.document.location.href + "#";
}

function ltrim(str) {
  var s = new String(str);

  if (s.substr(0, 1) == " ") return ltrim(s.substr(1));
  else return s;
}

function rtrim(str) {
  var s = new String(str);
  if (s.substr(s.length - 1, 1) == " ")
    return rtrim(s.substring(0, s.length - 1));
  else return s;
}

function trim(str) {
  return ltrim(rtrim(str));
}

function get_appletFrame(currentWin) {
  return self;
}
function ISObject(objA) {
  return typeof objA == "object";
}
function getOpenerWin(orgWin) {
  var retWin;
  if (!ISObject(orgWin) || !ISObject((orgWin = orgWin.top)));
  else if (ISObject((retWin = orgWin.dialogArguments)) && !retWin.closed);
  else if (ISObject((retWin = orgWin.opener)) && !retWin.closed);
  else retWin = false;
  return retWin;
}
function fnGetTopWindow(targWin) {
  var ret = false;
  if (ISObject((ret = targWin)) && !ret.closed)
    while (ret != ret.parent) ret = ret.parent;
  return ret;
}
function findTargFrame(currentWin, name) {
  var current = currentWin;
  do {
    if (!ISObject((current = current.top)));
    else if (ISObject(current.frames[name])) return current.frames[name];
    else if (!stricmp(current.name, name)) return current;
  } while (ISObject((current = getOpenerWin(current))));
  return ISObject(getOpenerWin(currentWin)) ? -1 : 1;
}
function ret_appletFrame(currentWin) {
  return currentWin;
}
function f_FindLocFrame(currentWin) {
  return findTargFrame(currentWin, "Action_Result");
}
function f_findFaceFrame(currentWin) {
  var ret;
  if ((ret = get_bottomFrame(currentWin)))
    ret = ret.document.frames["i_change_face"];
  return ret;
}
function f_findMainFrame() {
  var curFrame, objFindFrame, objReturn;
  curFrame = self;
  objFindFrame = false;
  do {
    // Current Frame is Nemtarble Main.
    if (curFrame.GlobalIsNetmarbleMainFrame) objFindFrame = curFrame;
    // Current Top Frame is Nemtarble Main.
    else if ((curFrame = curFrame.top) && curFrame.GlobalIsNetmarbleMainFrame)
      objFindFrame = curFrame;
  } while ( // if opener window exist and not find main frame then loop
    !objFindFrame &&
    curFrame &&
    (curFrame = curFrame.opener) &&
    !curFrame.closed
  );

  objReturn = new Object();
  objReturn.bSucc = objFindFrame ? true : false;
  objReturn.frame = objFindFrame;

  return objReturn;
}
function f_findAppletMainFrame(targFrame) {
  return self.top;
}
function get_bottomFrame(currentWin) {
  return findTargFrame(currentWin, "bottom");
}
function appletOpenWin(url, w, h) {
  f_openWinNoResize(url, w, h);
}
function appletOpenScrollWin(url, w, h) {
  f_openWinScroll(url, w, h);
}
function encode_url_para(org_para) {
  var i,
    ret = "",
    tmp_char,
    tmp_one_char;
  try {
    if (typeof org_para != "string") throw "";
    for (i = 0, ret = ""; i < org_para.length; i++) {
      tmp_one_char = org_para.charAt(i);
      tmp_char = escape(tmp_one_char);
      if (tmp_one_char == "+") ret += "%2B";
      else if (tmp_one_char == " ") ret += "%80";
      else if (
        tmp_char.length == 3 &&
        tmp_char.charAt(0) == "%" &&
        !isNaN(tmp_char.charAt(1)) &&
        tmp_char.charAt(1) < 8
      )
        ret += tmp_char;
      else ret += tmp_one_char;
    }
  } catch (x) {
    ret = "";
  }
  return ret;
}
// Character Search
function f_stringCountChar(orgStr, searString) {
  var idx, count;
  var subStr;

  count = 0;
  try {
    subStr = orgStr;
    while (subStr) {
      if ((idx = subStr.indexOf(searString)) > -1) {
        count++;
        subStr = subStr.substring(idx + 1);
      } else subStr = "";
    }
  } catch (x) {}
  return count;
}
//¹®ÀÚ¿­ ºñ±³ ÇÔ¼ö
function strcmp(strA, strB) {
  return strA > strB ? 1 : strA == strB ? 0 : -1;
}
function streql(strA, strB) {
  return strcmp(strA, strB) == 0;
}
function stricmp(strA, strB) {
  if (typeof strA == "string" && typeof strB == "string")
    return strcmp(strA.toUpperCase(), strB.toUpperCase());
  else return -1;
}
function strieql(strA, strB) {
  return stricmp(strA, strB) == 0;
}
function getNewMemoCount() {
  return;
}
function getAppletUserID() {
  return;
}
function fnShowAppletFrame() {
  return;
}
function chkUrlNOpenOrHref(strUrl) {
  var objFrame;
  objFrame = self;
  try {
    do {
      if (typeof objFrame.f_MoveLocationHref != "undefined") {
        objFrame.f_MoveLocationHref(strUrl);
        break;
      }
    } while ((objFrame = objFrame.opener) && !objFrame.closed);
    throw "";
  } catch (x) {
    if (!objFrame) objFrame = self.top.window.open(strUrl);
    objFrame.focus();
  }
}
function f_ChkRefresh() {
  try {
    if (event.keyCode == 116) {
      event.keyCode = 0;
      event.returnValue = 0;
      event.cancelBubble = 0;
      self.location.reload();
    }
  } catch (x) {}
}
function F_MsgBox_Modeless(url, w, h) {
  var strFeatures =
    "status:no;dialogWidth:" +
    w +
    "px;dialogHeight:" +
    h +
    "px;center:yes;scroll:no;unadorned:no;help:no;";
  var winMsgBox = window.showModelessDialog(
    url,
    new Array(window, opener),
    strFeatures
  );
}

if (!document.onkeydown) document.onkeydown = f_ChkRefresh;

//È¨ÇÇÃ¢ ¿­±â
function f_openhompy(strUserID, strParam) {
  if (!strParam) strParam = "";
  openWinW(
    NM_DOMAIN_MYHOME +
      "/Hompy/HompyWin/index.asp?o_id=" +
      encode_url_para(strUserID) +
      "&num=" +
      strParam,
    id2frame_name(strUserID),
    700,
    685,
    "",
    "",
    0,
    0
  );
}

if (typeof id2frame_name != "function") {
  document.write(
    "<script language=javascript src=/irc/jsFunc/fnIrcIdConvert.js></script>"
  );
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
    ) {
      return true;
    }
  } catch (e) {
    return false;
  }

  return false;
}

function IsPatched() {
  try {
    var obj = new ActiveXObject("TrustMarble.TrustManager");
    var reg = /.*WINNT,5.1,.*,Service[ ]+Pack[ ]+2.*/i;
    if (reg.test(obj.OSVersion)) {
      obj.PopupAllow("*.netmarble.net");
      obj.PopupAllow("*.mym.net");
    }
  } catch (e) {
    return false;
  }

  return true;
}

/* ±âÁ¸ ·Î±×ÀÎ confirm ÇÔ¼ö */
function goLogin(loginUrl) {
  if (confirm("·Î±×ÀÎÀÌ ÇÊ¿äÇÑ ¼­ºñ½ºÀÔ´Ï´Ù. ·Î±×ÀÎ ÇÏ½Ã°Ú½À´Ï±î?")) {
    self.top.location.href = loginUrl;
  }
}

//ÀÌº¥Æ® Á¤º¸Á¦°ø µ¿ÀÇ °øÅëÆË¾÷ ¿­±â
function f_eventDeliveryAgreePop(returnUrl, eCode, addTag, x, y) {
  if (x == 0) x = 400;
  if (y == 0) y = 315;
  openWinW(
    NM_DOMAIN_EVENT +
      "/event/DeliveryAgree/_html/EventAgree.asp?returnUrl=" +
      escape(returnUrl) +
      "&eCode=" +
      eCode +
      "&addTag=" +
      addTag,
    "AgreePop",
    x,
    y,
    "",
    "",
    0,
    0
  );
}

//ÀÌº¥Æ® Á¤º¸Á¦°ø µ¿ÀÇ °øÅëÆË¾÷ ¿­±â ±×³É ´ÝÈ÷±â ±â´É Ãß°¡
function f_eventDeliveryAgreePop2(returnUrl, close, eCode, addTag, x, y) {
  if (x == 0) x = 450;
  if (y == 0) y = 416;
  openWinW(
    NM_DOMAIN_EVENT +
      "/event/DeliveryAgree/_html/EventAgree.asp?returnUrl=" +
      escape(returnUrl) +
      "&close=" +
      close +
      "&eCode=" +
      eCode +
      "&addTag=" +
      addTag,
    "AgreePop",
    x,
    y,
    "",
    "",
    0,
    0
  );
}

// ³»Á¤º¸ ¼öÁ¤ ÆË¾÷¿ë ½ºÅ©¸³Æ®
function f_MyinfoPop(closeType, modifyType, openerRtnURL, actionURL) {
  openWinN(
    NM_DOMAIN_MEMBER +
      "/popupmyinfo/PopInfoPwCheck.asp?closeType=" +
      closeType +
      "&modifyType=" +
      modifyType +
      "&openerRtnURL=" +
      openerRtnURL +
      "&actionURL=" +
      actionURL,
    "PopMy",
    450,
    468,
    false
  );
}

// PC¹æ ÇýÅÃUI ÆË¾÷¿ë ½ºÅ©¸³Æ®
function f_PCBangBenefitPop(gameType, gameCode) {
  openWinN(
    "http://pcbang.netmarble.net/PcbangPop/Benefit/main.asp?gtype=" +
      gameType +
      "&gCode=" +
      gameCode,
    "popPcbang",
    890,
    610,
    false
  );
}

// ÀÌ¹ÌÁö °´Ã¼¿¡ ´ëÇÑ »çÀÌÁî ³Ö±â
function f_makeImageTag(obj, pUrl) {
  var imgObj = new Image(); //ÀÌ¹ÌÁö °´Ã¼¸¦ »ý¼ºÇÏ°í
  imgObj.src = pUrl; //ÀÌ¹ÌÁö ÁÖ¼Ò¸¦ ´ëÀÔÇÑÈÄ¿¡,

  obj.attr("width", imgObj.width);
  obj.attr("height", imgObj.height);
}

/*
page: http://www.grandchasereborn.com/
url: http://grandchasereborn.com/main_arquivos/comn.js
*/
