function returnObject(frmIndex, eleIndex, errMessage) {
  if (errMessage != "") alert(errMessage);
  document.forms[frmIndex].elements[eleIndex].focus();
}

function submitFrm(frmIndex) {
  try {
    document.forms[frmIndex].nowPage.value = "0";
    document.forms[frmIndex].totalCount.value = "0";
    document.forms[frmIndex].totalPage.value = "0";
  } catch (e) {}
  document.forms[frmIndex].submit();
}

function chkKeydown() {
  if (event.keyCode == 13) {
    //enter
    searchFrm();
  }
}

function checkAll(frmIndex) {
  var totalCount = document.forms[frmIndex].chkID.length;

  if (totalCount > 1) {
    if (document.forms[frmIndex].chkID[0].checked) {
      for (i = 0; i < totalCount; i++) {
        document.forms[frmIndex].chkID[i].checked = false;
      }
    } else {
      for (i = 0; i < totalCount; i++) {
        document.forms[frmIndex].chkID[i].checked = true;
      }
    }
  } else {
    if (document.forms[frmIndex].chkID.checked)
      document.forms[frmIndex].chkID.checked = false;
    else document.forms[frmIndex].chkID.checked = true;
  }
  return;
}

function checkAllS(frmIndex) {
  var totalCount = document.forms[frmIndex].chkID.length;
  var nChkID;
  if (totalCount > 1) {
    if (document.forms[frmIndex].CACheckBox.checked) {
      for (i = 0; i < totalCount; i++) {
        nChkID = document.forms[frmIndex].chkID[i];
        if (nChkID.disabled == true) {
          nChkID.checked = false;
        } else {
          nChkID.checked = true;
        }
      }
    } else {
      for (i = 0; i < totalCount; i++) {
        nChkID = document.forms[frmIndex].chkID[i];
        nChkID.checked = false;
      }
    }
  } else {
    if (document.forms[frmIndex].CACheckBox.checked) {
      nChkID = document.forms[frmIndex].chkID;
      if (nChkID.disabled == true) {
        nChkID.checked = false;
      } else {
        nChkID.checked = true;
      }
    } else {
      document.forms[frmIndex].chkID.checked = false;
    }
  }
  return;
}

function movePage(mPage, sURL) {
  //setValue();
  document.actFrm.action = sURL;
  document.actFrm.nowPage.value = mPage;
  document.actFrm.submit();
}

function chkMove(mPage, totalPage, sURL) {
  if (mPage.value == "") {
    alert("ÆäÀÌÁö ¹øÈ£¸¦ ÀÔ·ÂÇØ ÁÖ¼¼¿ä");
    mPage.focus();
    return;
  }
  if (mPage.value * 1 > totalPage * 1) {
    alert("ÀÌµ¿ÇÏ·Á´Â ÆäÀÌÁö ¹üÀ§¸¦ ³Ñ¾î¼¹½À´Ï´Ù");
    mPage.focus();
    return;
  }
  //setValue();
  document.actFrm.action = sURL;
  document.actFrm.nowPage.value = mPage.value;
  document.actFrm.submit();
}

function openWin(oURL, wwidth, wheight) {
  window.open(
    oURL,
    "openWindow",
    "left=0,top=0,width=" +
      wwidth +
      ",height=" +
      wheight +
      ",scrollbars=yes,resizable=yes,menubar=no,status=no,toolbar=no,location=no"
  );
}

function openWinS(oURL, wwidth, wheight) {
  window.open(
    oURL,
    "openWindow",
    "left=0,top=0,width=" +
      wwidth +
      ",height=" +
      wheight +
      ",scrollbars=no,resizable=yes,menubar=no,status=no,toolbar=no,location=no"
  );
}

function dataClear(i) {
  opener.document.actFrm.applyData1.value = "";
  opener.document.actFrm.applyData2.value = "";
  opener.document.actFrm.applyData3.value = "";
  opener.document.actFrm.applyData4.value = "";
  opener.document.actFrm.applyData5.value = "";
  opener.document.actFrm.applyType[i].checked = true;
}

// for Publishing Tool
function OpenWin(URL, WinName, x, y, Menu, cSize, scroll) {
  var features;

  var nTop = (screen.height - y) / 2 - 30;
  var nLeft = (screen.width - x) / 2;

  if (Menu == 0)
    features =
      "toolbar=no,width=" +
      x +
      ",height=" +
      y +
      ",top=" +
      nTop +
      ",left=" +
      nLeft +
      ",status=no,menubar=no";
  else
    features =
      "toolbar=no,width=" +
      (x + 18) +
      ",height=" +
      y +
      ",top=" +
      nTop +
      ",left=" +
      nLeft +
      ",status=no,menubar=yes";

  if (cSize == 0) features = features + ",resizable=no";
  else features = features + ",resizable=yes";

  if (scroll == 0) features = features + ",scrollbars=no";
  else features = features + ",scrollbars=yes";

  //alert(features);

  TheWindow = window.open(URL, WinName, features);
}

// ÁöÁ¤ ¹üÀ§¸¦ ¹þ¾î³¯ °æ¿ì ½ºÅ©·Ñ¹Ù°¡ »ý±ä´Ù.
function ResizePopup_Size() {
  window.resizeTo(10, 10);

  var scrollHeight = document.body.scrollHeight;

  var clientHeight = document.body.clientHeight;

  if (scrollHeight > 600) {
    // ½ºÅ©·Ñ¹Ù°¡ »ý±æ ½Ã ³Êºñ,³ôÀÌ Á¶Á¤

    document.body.scroll = "yes";

    window.resizeTo(document.body.scrollWidth, 600);

    window.resizeBy(document.body.scrollWidth - document.body.clientWidth, 0);
  } else {
    // ½ºÅ©·Ñ¹Ù°¡ ¾øÀ» °æ¿ì ³ôÀÌ Á¶Á¤

    document.body.scroll = "no";

    window.resizeBy(
      document.body.scrollWidth - document.body.clientWidth,
      scrollHeight - clientHeight
    );
  }
}

function js_card(c_code) {
  window.open(
    "/backOffice/card/user_card_start.asp?c_code=" + c_code,
    "card",
    "width=500,height=500,scrollbars=no"
  );
}

// ¹Ì¿ë°æÁ¦ ¸Å°ÅÁø µî·Ï °ü·Ã

function show(url, _width, _height) {
  if (window.clientInformation.userAgent.indexOf("SV1") > 0) {
    //--WindowXP SP2°¡ ¼³Ä¡µÈ È¯°æ¿¡¼­ÀÇ ¼¼ÆÃÀÔ´Ï´Ù.
    newWin = window.open(
      url,
      "",
      "toolbar=no location=no directories=no status=no menubar=no scrollbars=no resizable=no width=1000 height=700 top=0 left=0"
    );
    newWin.moveTo(0, 0);

    left1 = (screen.availWidth - 1024 - 5) / 2; //--1024X768 ÇØ»óµµ¿¡¼­ÀÇ eBook Popup Ã¢ÀÇ °¡·Î Áß¾Ó À§Ä¡¸¦ ÁöÁ¤.
    top1 = (screen.availHeight - 768 - 10) / 2; //--1024X768 ÇØ»óµµ¿¡¼­ÀÇ eBook Popup Ã¢ÀÇ ¼¼·Î Áß¾Ó À§Ä¡¸¦ ÁöÁ¤.
    //À§ 1024, 768 ÀÇ Á¶Á¤À¸·Î Ã¢ÀÌ ³ªÅ¸³ª´Â À§Ä¡¸¦ Á¶Á¤ÇÒ ¼ö ÀÖ½À´Ï´Ù.

    newWin.resizeTo(1000, 700);
    newWin.moveTo(left1, top1);
  } else {
    //--Windows XP SP2 °¡ ¼³Ä¡µÈ È¯°æÀ» Á¦¿ÜÇÑ È¯°æ
    if (screen.width == _width && screen.height == _height) {
      window.open(url, "", "fullscreen");
      window.open(url, "", "fullscreen");
    } else {
      left1 = (screen.availWidth - 1024 - 5) / 2;
      top1 = (screen.availHeight - 768 - 10) / 2;
      window.open(
        url,
        "",
        "toolbar=no location=no directories=no status=no menubar=no scrollbars=no resizable=no width=1000 height=700 top=" +
          top1 +
          " left=" +
          left1
      );
    }
  }
}
/*
page: http://www.hanent.com/
url: http://www.hanent.com/common/js/HTMLFunction.js
*/
