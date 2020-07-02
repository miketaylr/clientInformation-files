/*jQuery ê³µíµ
 * ìí°ê²ìì ì¸ë ¤ë©´ password input box ì nameì
 * ë¬´ì¡°ê±´ acntPwdë¡ í´ì¼í¨ ë¨ ìí°ê²ìì ë¤ìì´ ìëë¼ ì¡°íì.
*
*
*javascript ê³µíµ
*
*1. ajaxë¥¼ ì´ì©íì¬ TRì ì¡°ííê±°ë ìë ¥íí ìë´ modal íì í¸ì¶
* 		title = ì§ì ìë ¥ , msg = response.sysMsg , code = response.sysMsgCode
*			function commModalPop(title , msg , code){
*		modalìë´íìì´ ë¬ ì´í íì´ì§ ì´ëì´ íìí ë
* 			function commModalPopHref(title , msg , code , url)
*2. íì¬ ë ì§ìì ì§ì í ë ì§ê¹ì§ ëªì¼ì¸ì§ ê³ì°
*			function calDate(date)  ì¤ëì´ 20120101 ì´ê³  dateê° 20120103
*3. ììì  ìë ë¬´í¨í 0ì ê±°
*			function delZero(val){
*4. ìì«ì ì´ ììë ììì  ëëê³  ìì , ì°ê¸°
*			function commifyRatio(val)
*5. ìë í¸ ë°ì¤ ë³ëì ê³ì¢ëª ë³ê²½
*			function gubunChange(){
*			selectbox name="account"  ê³ì¢ëª name="gubun
*7. ë¹ì¨ì´ .xxxë¡ ëì´ì¬ë ìì 0 ë¶ì¬ì£¼ê¸°
*			function addZero(val)
*8. ì«ì í¬ë§· ì§ì  = ë°ì¬ë¦¼ë¨.
*			function fixNumberScale(10.123456 , 3) -> 10.123
*9. ì«ìë§ ìë ¥ëê² íë¤.ììí ë 0ì ì°ìì ìë¤.
*			function onlyNumber(){
*10. ì«ìë§ ìë ¥ëê² íë¤. ìììì 0ì ëª»ì°ëë¤
*			function handlerNum(obj) {
*11. ë ì§ ìë ¥ ì²´í¬
*			function isValidDate(validDate) {
*12. ì¤ìê°ì¼ë¡ ì½¤ë§ë¥¼ ì°ì´ì£¼ë íì
*			function getNumber(obj){
*13. 3ìë¦¬ë§ë¤ ì½¤ë§ì°ê¸°
*			function commify(n) {
*14. ë ì§ - ìì±
*			function setHyphen(date){
*15. ë¬¸ìì´ìì í¹ì  ë¬¸ì ì ê±°íê¸°
*		valueê° ë°ê¿ ë¬¸ìì´ keyê° ì ê±°í  ë¬¸ì
*			function str_replace(value, key) {
*16. alert ëì  ì ìí´ë
* 			function gfnAlert(msg) { alert(msg); }
*17. ë¨ìì²ë¦¬
* 			function gfnSetFtam(val) {
*18. ì¼ìê³ì°
* 			function gfnAddDate(pInterval, pAddVal, pYyyymmdd, pDelimiter) {
*19. ë¹ë°ë²í¸ ì²´í¬ 		//pwdChk($("#idAcntPwd").val()); ë¥¼ ì½íë©´ ëë¤.
*			function pwdChk(val){
*20. ë¬¸ìë¥¼ ì«ìë¡ ë³í(ì ëê°ì¼ë¡ ë³í. '-' ì ê±°)
*           function gfnParseInt(val) {
*
*    ë¬¸ìë¥¼ ì«ìë¡ ë³í('-' ì ì§)
*           function gfnSignedParseInt(val) {
*21. ììì  ì´í ì²ë¦¬
*           function CutDecimalPoint(0.98548, 2) -> 0.98
*22. ì¸íìì ì«ìë§ ìë ¥
*           function gfnCheckInputNumber(textId){
* ì¬ì©ë²    $(function(){ gfnCheckInputNumber("id"); });
*
*23. ì¸íìì ê¸ì¡ë§ ìë ¥
*           function gfnCheckInputMoney(textId){
* ì¬ì©ë²    $(function(){ gfnCheckInputMoney("id"); });
*
*24. ì«ìê¸ì¡ íê¸ë³í
*           function gfnMoneyToHangul(textId, returnId) {
*ì¬ì©ë²     $("#amt").keyup( function(e) {gfnMoneyToHangul("amt", "spnAmt");});
*
*trim ---------------------------------------------------------------------
*function gfnTrim(str) {
*
*ì¼ìª½ trim ----------------------------------------------------------------
*function gfnLTrim(str)
*
* ì¤ë¥¸ìª½ trim --------------------------------------------------------------
*function gfnRTrim(str)
*
*ì¸ííì¤í¸ ê¸ì¡ì ì½¤ë§ì¶ê°
*function gfnMoneyAddComma(textId) {
*
* ',' ì ê±° -----------------------------------------------------------------
*function gfnRemoveComma(str) {
*
*0 ìë ¥ì 0
*function gfnRemoveFirstZero(str) {
*
*ì«ìì¬ë¶ ì²´í¬ ------------------------------------------------------------
*function gfnDigitCheck(str) {
*
*ì¸í ë°ì¤ í¬ì»¤ì¤ì ìë í¸
*function gfnFocusSelect(textId) {*
*
*ë¬¸ìì´ ìë¥´ê¸°
*function string_cut(str, len, tail) {
*
*ì¼ìë¬ë ¥ ì»¤íìì ë ì§ë²ì íë¦´ì ì ì 
*function gfnSetDifferenceDate(datePickerId1, datePickerId2) {
*
*ì¼ìë¬ë ¥ ê¸°ë³¸ìµì ì¸í
*function gfnSetDatePickerOption(datePickerId) {
*
*ë ì§ì ë ì§ì ì¬ì´ ê°ê²©ì¼ì ê³ì°(ëë¤ ì í)
*function dateClac(start,end) {
*
*Dateê°ì²´ yyyymmdd íìì¼ë¡ ë³í
*function dateChange(date) {
*
*Dateê°ì²´ yyyy-mm-dd íìì¼ë¡ ë³í
*function dateChange2(date) {
*
*íì´ë¸ í¸ë²ë§
function gfnTableHover(tbodyId) {
*
*trìì ë°ì ""ê°ì 0ì¼ë¡ ë³ê²½í ë
*function nullChangeZero(data) {
*
*replaceALL
*function gfnReplace(str,before,after) {
*
*ì¼ìª½ ë¬¸ìì´ë¶í° ìë¥´ê¸°
*function LeftReplace(str, n) {
*
*ì¤ë¥¸ìª½ ë¬¸ìì´ë¶í° ìë¥´ê¸°
*function RightReplace(str, n) {
*ì¤íë¦¬í¸
*function gfnSplit(val, spl) {
*
*ìì´ì«ìë§ ìë ¥
*function gfnCheckInputEng(textId){
*
*ì´ë©ì¼ ì£¼ìì²´í¬
*function gfnMailAddressChk(str) {
*
*'-' ì ê±°
*function gfnRemoveMinus(str) {
*
*'+' ì ê±°
*function gfnRemovePlus(str) {
*
*
*ë¬¸ìì´ì hh:mm:ss
*function setTimeHyphen(time){
*
*
*ì ìë¶ë¶ ìììë 0 ì­ì 
*function deleteZero() {
*
*ë¬¸ìê¸¸ì´ ì²´í¬
*function getByteLength(data) {

*ë©ì¸ì§ ìíë ê¸¸ì´ë§í¼ ìë¥´ê³  ìíë ë¬¸ìì´ ë¶ì´ê¸°
*function cutMsg(ë¬¸ìì´,ëì ë¶ì¼ ë¬¸ìì´,ë¬¸ìì´ê¸¸ì´) {
*
*ì«ì + Tabë§ ìë ¥
*function onlyNumberTab(){
*
* - ë¶í¸ ìë ì«ìê° -.xxxë¡ ëì´ì¬ë ìì -0.xxx ë¶ì¬ì£¼ê¸°
function addZeroSign(val){


* // í¹ì  íì´ë¸ë°ë ì ìë ë´ì© ì¤ í¹ì  ì»¬ë¼ì ëí´ ê°ì´ ììì¸ ê²½ì° íëì, ììë ë¹¨ê°ìì¼ë¡ íì
* // input : tablebody id, ì»¬ë¼ ìì 0 ë¶í° ìì
*  function gfnSetFontColorTable(tBody, targetColNum){
*
*
* // í¹ì  ë¼ëì¤ë²í¼ì ì²´í¬ë ê±´ì´ ìì¼ë©´ ì²´í¬ë ID, ìì¼ë©´ '0' ë¦¬í´
* function gfnRadioCheck(rdoName)
*
* // í¹ì  ë¼ëì¤ë²í¼ì  ì²´í¬ë ê±´ì´ ìì¼ë©´ ì²´í¬ë ê±´ì value, ìì¼ë©´ '' ë¦¬í´
* function gfnRadioCheckVal(rdoName)
*
//ë¹ë°ë²í¸ ì²´í¬
//íë¼ë©í° : ê³ì¢ë²í¸, ë¹ë°ë²í¸
function gfnCheckPassword(pAcno, pAcntPwd)
*
rdíë¡ê·¸ë¨ ë¤ì´ë¡ë ê³µíµí¨ì
function certDown()
*
*ë¹ë°ë²í¸ ì²´í¬í¨ì
*ì±ê³µì response.sysCode ë¡ ì²´í¬ 0ì´ë©´ ì ì 1ì´ë©´ ë¹ì ì
*function pwdCheck(pwd,newPwd,newPwdCheck)
*
*ì£¼ë¯¼ë±ë¡ë²í¸ ì²´í¬í¨ì
*ì±ê³µì response.sysCode ë¡ ì²´í¬ 0ì´ë©´ ì ì 1ì´ë©´ ë¹ì ì
*function rcnoCheck(rcno1,rcno2)
*
*ììì¼ì ê°ì ¸ì¤ë í¨ì
*typeì ìê¸°ê° ìíë êµ¬ë¶ìë¥¼ ìë ¥ , ìììì ì¸ìê° ìì²´ë¥¼ ëê²¨ì£¼ì§ ìëë¤
*function getBsopDate(type)
*
*
//ììì  ì´í ìë¦¬ì ë²ë¦¼
//num: ëìì«ì, pos: í¬ë§ ììì  ì´íìë¦¬ì
function fixNumberCut(num, len)
*/

function commModalLoginPop(title, msg, subMsg, code) {
  $("span[id='commPopTitle99']").text(title);
  $("span[id='commPopMsg99']").text(subMsg);
  $("#basic-modal-content99").modal({
    closeHTML:
      '<a class="modalCloseImg" title="' +
      $("#basic-modal-content99 div h4 strong span").text() +
      ' (ë ì´ì´íì) ë«ê¸°"></a>',
  });
  $(".btn-type01").focus();
}

function commModalPop(title, msg, subMsg, code) {
  switch (code) {
    case "5762":
      msg = "ì¡°íê° ê³ìë©ëë¤. ë¤ì ë²í¼ì ëë¥´ì­ìì¤.";
      break; // ííì´ì§ììë PgDg ì´ ìì¼ë¯ë¡ ë©ì¸ì§ê°ì  ìì í¨.
    default:
      break;
  }

  if (code != "5766") {
    //$("span[id='commPopTitle']").text(title);
    //$("span[id='commPopMsg']").text(msg);
    if (subMsg == null) subMsg = "";

    if (gfnTrim(subMsg).length > 1) {
      $("span[id='commPopTitle97']").text(title);
      $("span[id='commPopMsg97']").text(msg);
      $("span[id='commPopSubMsg97']").text(subMsg);

      $("#basic-modal-content97").modal({
        closeHTML:
          '<a class="modalCloseImg" title="' +
          $("#basic-modal-content97 div h4 strong span").text() +
          ' (ë ì´ì´íì) ë«ê¸°"></a>',
      });
    } else {
      $("span[id='commPopTitle99']").text(title);
      $("span[id='commPopMsg99']").text(msg);

      $("#basic-modal-content99").modal({
        closeHTML:
          '<a class="modalCloseImg" title="' +
          $("#basic-modal-content99 div h4 strong span").text() +
          ' (ë ì´ì´íì) ë«ê¸°"></a>',
      });
    }
    $(".btn-type01").focus();
    //alert(subMsg.length);
  }
}

function commModalPopOK(title, msg, subMsg, code) {
  switch (code) {
    case "5762":
      msg = "ì¡°íê° ê³ìë©ëë¤. ë¤ì ë²í¼ì ëë¥´ì­ìì¤.";
      break; // ííì´ì§ììë PgDg ì´ ìì¼ë¯ë¡ ë©ì¸ì§ê°ì  ìì í¨.
    default:
      break;
  }

  if (code != "5766") {
    //$("span[id='commPopTitle']").text(title);
    //$("span[id='commPopMsg']").text(msg);
    if (subMsg == null) subMsg = "";

    if (gfnTrim(subMsg).length > 1) {
      $("span[id='commPopTitle97']").text(title);
      $("span[id='commPopMsg97']").text(msg);
      $("span[id='commPopSubMsg97']").text(subMsg);

      $("#basic-modal-content97").modal({
        onClose: function (dialog) {
          btnFocusOK();
        },
        closeHTML:
          '<a class="modalCloseImg" title="' +
          $("#basic-modal-content97 div h4 strong span").text() +
          ' (ë ì´ì´íì) ë«ê¸°"></a>',
      });
    } else {
      $("span[id='commPopTitle99']").text(title);
      $("span[id='commPopMsg99']").text(msg);

      $("#basic-modal-content99").modal({
        onClose: function (dialog) {
          btnFocusOK();
        },
        closeHTML:
          '<a class="modalCloseImg" title="' +
          $("#basic-modal-content99 div h4 strong span").text() +
          ' (ë ì´ì´íì) ë«ê¸°"></a>',
      });
    }
    $(".btn-type01").focus();
    //alert(subMsg.length);
  }
}

function commModalPopErr(title, msg, subMsg, code) {
  switch (code) {
    case "5762":
      msg = "ì¡°íê° ê³ìë©ëë¤. ë¤ì ë²í¼ì ëë¥´ì­ìì¤.";
      break; // ííì´ì§ììë PgDg ì´ ìì¼ë¯ë¡ ë©ì¸ì§ê°ì  ìì í¨.
    default:
      break;
  }

  if (code != "5766") {
    //$("span[id='commPopTitle']").text(title);
    //$("span[id='commPopMsg']").text(msg);
    if (subMsg == null) subMsg = "";

    if (gfnTrim(subMsg).length > 1) {
      $("span[id='commPopTitle97']").text(title);
      $("span[id='commPopMsg97']").text(msg);
      $("span[id='commPopSubMsg97']").text(subMsg);

      $("#basic-modal-content97").modal({
        onClose: function (dialog) {
          btnFocusErr();
        },
        closeHTML:
          '<a class="modalCloseImg" title="' +
          $("#basic-modal-content97 div h4 strong span").text() +
          ' (ë ì´ì´íì) ë«ê¸°"></a>',
      });
    } else {
      $("span[id='commPopTitle99']").text(title);
      $("span[id='commPopMsg99']").text(msg);

      $("#basic-modal-content99").modal({
        onClose: function (dialog) {
          btnFocusErr();
        },
        closeHTML:
          '<a class="modalCloseImg" title="' +
          $("#basic-modal-content99 div h4 strong span").text() +
          ' (ë ì´ì´íì) ë«ê¸°"></a>',
      });
    }
    $(".btn-type01").focus();
    //alert(subMsg.length);
  }
}

function commModalWPop(title, msg, subMsg, code, talign) {
  switch (code) {
    case "5762":
      msg = "ì¡°íê° ê³ìë©ëë¤. ë¤ì ë²í¼ì ëë¥´ì­ìì¤.";
      break; // ííì´ì§ììë PgDg ì´ ìì¼ë¯ë¡ ë©ì¸ì§ê°ì  ìì í¨.
    default:
      break;
  }

  if (code != "5766") {
    $("span[id='commPopTitle99']").text(title);
    $("span[id='commPopMsg99']").html(msg);
    $("span[id='commPopTitle97']").text(title);
    $("span[id='commPopMsg97']").html(msg);
    if (subMsg == null) subMsg = "";
    if (gfnTrim(subMsg).length > 1) {
      $("span[id='commPopSubMsg97']").text(subMsg);
      $("#basic-modal-content97").modal({
        closeHTML:
          '<a class="modalCloseImg" title="' +
          $("#basic-modal-content97 div h4 strong span").text() +
          ' (ë ì´ì´íì) ë«ê¸°"></a>',
      });
    } else {
      $("#basic-modal-content99").modal({
        closeHTML:
          '<a class="modalCloseImg" title="' +
          $("#basic-modal-content99 div h4 strong span").text() +
          ' (ë ì´ì´íì) ë«ê¸°"></a>',
      });
    }
    $(".btn-type01").focus();
    //alert(subMsg.length);
  }
}

var url = "";
function commModalPopHref(title, msg, subMsg, code, goUrl) {
  if (code != "5766") {
    $("span[id='commPopTitle96']").text(title);
    $("span[id='commPopMsg96']").text(msg);
    $("span[id='commPopTitle98']").text(title);
    $("span[id='commPopMsg98']").text(msg);
    if (subMsg == null) subMsg = "";
    if (gfnTrim(subMsg).length > 1) {
      $("span[id='commPopSubMsg96']").text(subMsg);
      $("#basic-modal-content96").modal({
        onClose: function (dialog) {
          document.location.href = goUrl;
        },
        closeHTML:
          '<a class="modalCloseImg" title="' +
          $("#basic-modal-content96 div h4 strong span").text() +
          ' (ë ì´ì´íì) ë«ê¸°"></a>',
      });
    } else {
      $("#basic-modal-content98").modal({
        onClose: function (dialog) {
          document.location.href = goUrl;
        },
        closeHTML:
          '<a class="modalCloseImg" title="' +
          $("#basic-modal-content98 div h4 strong span").text() +
          ' (ë ì´ì´íì) ë«ê¸°"></a>',
      });
    }
    $(".btn-type01").focus();
    url = goUrl;
  }
}
function commModalPopWithSubMsg(title, msg, subMsg, code) {
  if (code != "5766") {
    $("span[id='commPopTitle99']").text(title);
    $("span[id='commPopMsg99']").text(msg + subMsg);
    $("#basic-modal-content99").modal({
      closeHTML:
        '<a class="modalCloseImg" title="' +
        $("#basic-modal-content99 div h4 strong span").text() +
        ' (ë ì´ì´íì) ë«ê¸°"></a>',
    });
    $(".btn-type01").focus();
  }
}
function commModalPopUrlClose() {
  $.modal.impl.close();
  document.location.href = url;
}
function commModalPopClose() {
  $.modal.impl.close();
}
// íì¸ì íìì ë«ê¸° ìí ëª¨ë¬ íì ê³µíµ ëª¨ë 2013.01.21
function commModalPopAfterWinClose(title, msg, subMsg) {
  $("span[id='commPopTitle96']").text(title);
  $("span[id='commPopMsg96']").text(msg);
  $("span[id='commPopTitle98']").text(title);
  $("span[id='commPopMsg98']").text(msg);
  if (subMsg == null) subMsg = "";
  if (gfnTrim(subMsg).length > 1) {
    $("span[id='commPopSubMsg96']").text(subMsg);
    $("#basic-modal-content96").modal({
      onClose: function (dialog) {
        window.close();
      },
      closeHTML:
        '<a class="modalCloseImg" title="' +
        $("#basic-modal-content96 div h4 strong span").text() +
        ' (ë ì´ì´íì) ë«ê¸°"></a>',
    });
  } else {
    $("#basic-modal-content98").modal({
      onClose: function (dialog) {
        window.close();
      },
      closeHTML:
        '<a class="modalCloseImg" title="' +
        $("#basic-modal-content98 div h4 strong span").text() +
        ' (ë ì´ì´íì) ë«ê¸°"></a>',
    });
  }
}

function calDate(date) {
  var d = new Date();

  var calDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());

  var newDate = new Date(
    date.substr(0, 4),
    date.substr(4, 2) - 1,
    date.substr(6, 2)
  );
  var interval = newDate - calDate;
  var day = 1000 * 60 * 60 * 24;

  /*	var month = day*30;
	var year = month*12;
	document.write("ê¸°ê° ë ì§ì: "+parseInt(interval/day)+"ì¼<br>
							ê¸°ê° ê°ìì: ì½ "+parseInt(interval/month)+"ê°ì<br>
							ê¸°ê° ê°ëì: ì½ "+parseInt(interval/year)+"ê°ë");
*/
  var returnval = parseInt(interval / day);
  return returnval;
}

var getParam = function (key) {
  var _parammap = {};
  document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
      return decodeURIComponent(s.split("+").join(" "));
    }
    _parammap[decode(arguments[1])] = decode(arguments[2]);
  });
  return _parammap[key];
};

/*
 * ë¬¸ìì´ìì í¹ì  ë¬¸ì ì ê±°íê¸°
 * valueê° ë°ê¿ ë¬¸ìì´ keyê° ì ê±°í  ë¬¸ì
 */
function str_replace(value, key) {
  value = String(value);
  var newStr = "";
  for (var i = 0; i < value.length; i++) {
    if (value.charAt(i) != key) {
      newStr += value.charAt(i);
    }
  }
  return newStr;
}

//ë ì§ - ìì±
function setHyphen(date) {
  if (date == "" || date == null) return date;
  date =
    date.substring(0, 4) +
    "-" +
    date.substring(4, 6) +
    "-" +
    date.substring(6, 8);
  return date;
}
//3ìë¦¬ë§ë¤ ì½¤ë§ì°ê¸°
function commify(n) {
  if (n == null || n == "") return "0";

  var reg = /(^[+-]?\d+)(\d{3})/; // ì ê·ì
  n += ""; // ì«ìë¥¼ ë¬¸ìì´ë¡ ë³í

  while (reg.test(n)) n = n.replace(reg, "$1" + "," + "$2");

  return n;
}

//ì¤ìê°ì¼ë¡ ì½¤ë§ë¥¼ ì°ì´ì£¼ë íì
var rgx1 = /\D/g; // /[^0-9]/g ì ê°ì íí
var rgx2 = /(\d+)(\d{3})/;
//ì´ê±°ë¥¼ í¸ì¶íë©´ ëë¤.
function getNumber(obj, e) {
  var strKeyCode;
  if (e == undefined) {
    strKeyCode = window.event.keyCode;
  } else {
    strKeyCode = e.keyCode ? e.keyCode : e.which;
  }
  //	if(window.event.keyCode != 13 ){
  if (strKeyCode != 13) {
    var num01;
    var num02;
    num01 = obj.value;
    num02 = num01.replace(rgx1, "");
    num01 = setComma(num02);

    if (num01.indexOf("0") == 0) {
      num01 = num01.replace(num01.indexOf("0"), "");
    }

    obj.value = num01;
  } else {
    if (jQuery.browser.mozilla == false) {
      window.event.keyCode = 15;
    } else {
    }
  }
}
//ìì ì¢ìëê±°.
function setComma(inNum) {
  var outNum;
  outNum = inNum;
  while (rgx2.test(outNum)) {
    outNum = outNum.replace(rgx2, "$1" + "," + "$2");
  }
  return outNum;
}

//ë ì§ ìë ¥ ì²´í¬
function isValidDate(validDate) {
  var flag = true;
  if (isNumber(validDate.value) == "no") {
    gfnAlert("  + ë ì§ë¥¼ ìë ¥í´ì£¼ì¸ì.\n");
    flag = false;
  } else {
    if (validDate.value.length == 8) {
      specialDay = document.frm.rday.value;
      thismonth = specialDay.slice(4, 6);
      thisyear = specialDay.slice(0, 4);
      thisday = specialDay.slice(6, 8);
      montharray = new Array(31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
      // í´ë¹ëë ë¬ì ìµë ë ì§ë¥¼ ë°°ì´ìì ë°ëë¤.
      maxdays = montharray[thismonth - 1];
      if (thismonth == 2) {
        if (thisyear / 4 != parseInt(thisyear / 4)) maxdays = 28;
        else maxdays = 29;
      }
      thismonth = "" + thismonth;
      if (thismonth.length == 1) {
        thismonth = "0" + thismonth;
      }

      if (parseInt(thismonth) > 12) {
        gfnAlert("  + ì ííì§ ìì ë ì§ìë ¥ìëë¤.\n     ë¬ì´ ë§ì§ ììµëë¤. \n");
        flag = false;
      } else if (!(parseInt(thisyear) >= 1985 && parseInt(thisyear) <= 2099)) {
        gfnAlert("  + ì ííì§ ìì ë ì§ìë ¥ìëë¤.\n     ëëê° ë§ì§ ììµëë¤. \n");
        flag = false;
      } else {
        if (parseInt(thisday) > maxdays) {
          gfnAlert("  + ì ííì§ ìì ë ì§ìë ¥ìëë¤. \n     ë ì§ê° ë§ì§ ììµëë¤. \n");
          flag = false;
        } else {
          //         gfnAlert(' ë ì§ê° ë§ìµëë¤.\n');
          flag = true;
        }
      }
    } else {
      gfnAlert("  + ìë ¥ë ì§ë 8ìë¦¬ë¡ ë§ì¶° ì£¼ì¸ì.\n");
      flag = false;
    }
  }
  return flag;
} //ë ì§ìë ¥ ì²´í¬ ì¢ì
function isNumber(num) {
  var valid = "0123456789";
  var ok = "yes";
  var temp;
  for (var i = 0; i < num.length; i++) {
    temp = "" + num.substring(i, i + 1);
    if (valid.indexOf(temp) == "-1") ok = "no";
  }
  return ok;
}
//ì«ìë§ ìë ¥ëê² íë¤.
//ì«ìë§ ìë ¥ëê² íë¤. ì¼ë ìììì 0ì ëª»ì°ëë¤
function handlerNum(obj) {
  e = window.event;

  if (
    (e.keyCode >= 48 && e.keyCode <= 57) ||
    (e.keyCode >= 96 && e.keyCode <= 105) ||
    e.keyCode == 8 ||
    e.keyCode == 46 ||
    e.keyCode == 37 ||
    e.keyCode == 39 ||
    e.keyCode == 35 ||
    e.keyCode == 36 ||
    e.keyCode == 9
  ) {
    if (e.keyCode == 48 || e.keyCode == 96) {
      if (obj.value == "" || obj.value == "0") {
        return true;
      } else {
        return;
      }
    } else {
      return;
    }
  } else {
    return true;
  }
}

//obank_common.js ì ìì
function getCommaNumber(obj, e) {
  getNumber(obj, e);
  if (obj.value.length > 23) {
    fnAlertOkInit("ìë ¥ì²´í¬", "ìë ¥ê°ì 18ìë¦¬ê° ìµëê°ìëë¤.", "", "", "");
    obj.value = obj.value.replace(/,/gi, "").substring(0, 18);
    getNumber(obj, e);
  }
}

//ì«ìë§ ìë ¥ëê² íë¤.ììí ë 0ì ì°ìì ìë¤.
function onlyNumber(e) {
  var strKeyCode;
  if (e == undefined) {
    strKeyCode = window.event.keyCode;
  } else {
    strKeyCode = e.keyCode ? e.keyCode : e.which;
  }

  if (
    (strKeyCode < 48 || strKeyCode > 57) &&
    (strKeyCode < 96 || strKeyCode > 105) &&
    strKeyCode != 8 &&
    strKeyCode != 46
  ) {
    if (e == undefined) {
      event.returnValue = false;
    } else {
      e.preventDefault();
    }
  }
}

//ì«ìë§ìë ¥ëê² íë¤.(ê¸°ì¡´ ì½¤ë§ì¶ê°ëëë¶ë¶ ì ì¸)
function onlyNum(obj) {
  var rgx1 = /[^0-9]/g;
  var tmp = obj.value;
  obj.value = tmp.replace(rgx1, "");
}

//ì«ìë§ ìë ¥ëê² íë¤.
function numbersonly(e, decimal) {
  var key;
  var keychar;

  if (window.event) {
    key = window.event.keyCode;
  } else if (e) {
    key = e.which;
  } else {
    return true;
  }
  keychar = String.fromCharCode(key);

  if (
    key == null ||
    key == 0 ||
    key == 8 ||
    key == 9 ||
    key == 13 ||
    key == 27
  ) {
    return true;
  } else if ("0123456789".indexOf(keychar) > -1) {
    return true;
  } else if (decimal && keychar == ".") {
    return true;
  } else {
    return false;
  }
}

function checkDate(form) {
  var planStart = form.planStartDate.value;
  var planEnd = form.planEndDate.value;
  // planStart, planEnd ë yyyy/mm/dd íì

  planStart =
    planStart.substring(0, 4) +
    planStart.substring(5, 7) +
    planStart.substring(8, 10);
  planEnd =
    planEnd.substring(0, 4) +
    planEnd.substring(5, 7) +
    planEnd.substring(8, 10);
  isValidDate(planStart);
  isValidDate(planEnd);
  planStart = parseInt(planStart);
  planEnd = parseInt(planEnd);

  if (planStart >= planEnd) {
    form.planEndDate.value = "";
    gfnAlert("ì¢ë£ì¼ìë ììì¼ìë³´ë¤ ì´íì ì¼ìë¥¼ ì íí´ ì£¼ì¸ì.");
  }
}
function comDate(validDate) {
  var flag = true;

  if (validDate.length == 8) {
    specialDay = validDate;
    thismonth = specialDay.slice(4, 6);
    thisyear = specialDay.slice(0, 4);
    thisday = specialDay.slice(6, 8);
    montharray = new Array(31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    // í´ë¹ëë ë¬ì ìµë ë ì§ë¥¼ ë°°ì´ìì ë°ëë¤.
    maxdays = montharray[thismonth - 1];
    if (thismonth == 2) {
      if (thisyear / 4 != parseInt(thisyear / 4)) maxdays = 28;
      else maxdays = 29;
    }
    thismonth = "" + thismonth;
    if (thismonth.length == 1) {
      thismonth = "0" + thismonth;
    }

    if (parseInt(thismonth) > 12) {
      gfnAlert("  + ì ííì§ ìì ë ì§ìë ¥ìëë¤.\n     ë¬ì´ ë§ì§ ììµëë¤. \n");
      flag = false;
    } else if (!(parseInt(thisyear) >= 1985 && parseInt(thisyear) <= 2099)) {
      gfnAlert("  + ì ííì§ ìì ë ì§ìë ¥ìëë¤.\n     ëëê° ë§ì§ ììµëë¤. \n");
      flag = false;
    } else {
      if (parseInt(thisday) > maxdays) {
        gfnAlert("  + ì ííì§ ìì ë ì§ìë ¥ìëë¤. \n     ë ì§ê° ë§ì§ ììµëë¤. \n");
        flag = false;
      } else {
        //         gfnAlert(' ë ì§ê° ë§ìµëë¤.\n');
        flag = true;
      }
    }
  } else {
    gfnAlert("  + ìë ¥ë ì§ë 8ìë¦¬ë¡ ë§ì¶° ì£¼ì¸ì.\n");
    flag = false;
  }
  return flag;
} //ë ì§ìë ¥ ì²´í¬ ì¢ì

function inputDate(obj) {
  var inDate;
  var outDate = "";
  if (obj.value.length < 5) {
    if (handlerNum(obj)) {
      gfnAlert("ì«ìë§ ìë ¥í ì ììµëë¤");
      obj.value = "";
      return;
    }
    return;
  }
  if (obj.value.length == 5) {
    if (handlerNum(obj)) {
      gfnAlert("ì«ìë§ ìë ¥í ì ììµëë¤");
      obj.value = "";
      return;
    }
    obj.value = obj.value.substring(0, 4) + "-" + obj.value.substring(4, 5);
  }
  inDate = str_replace(obj.value, "-");

  if (isNaN(inDate)) {
    handlerNum("ì«ìë§ ìë ¥í ì ììµëë¤");
    obj.value = "";
    return;
  }
  inDate = obj.value.split("-");

  for (var i = 0; inDate.length > i; i++) {
    outDate += inDate[i];
  }
  if (outDate.length > 8) {
    outDate = outDate.substring(0, 8);
  }
  if (outDate.length > 7) {
    comDate(outDate);
  }
  if (outDate.length > 4 && outDate.length < 7) {
    obj.value = outDate.substring(0, 4) + "-" + outDate.slice(4);
    return;
  } else if (outDate.length > 6) {
    obj.value =
      outDate.substring(0, 4) +
      "-" +
      outDate.substring(4, 6) +
      "-" +
      outDate.slice(6);
    return;
  }
  obj.value = outDate;
}

//ì«ì í¬ë§· ì§ì  ex ) fixNumberScale(10.123456 , 3) -> 10.123
function fixNumberScale(num, scale) {
  var val = Number(num);
  var cal = val.toFixed(scale);
  return cal;
}
//ë¹ì¨ì´ .xxxë¡ ëì´ì¬ë ìì 0 ë¶ì¬ì£¼ê¸°
function addZero(val) {
  if (val.substring(0, 1) == ".") {
    val = "0" + val;
    return val;
  }
  return val;
}
//ìë í¸ ë°ì¤ ë³ëì ê³ì¢ëª ë³ê²½
function gubunChange() {
  var index = $("select[name='account'] option:selected").index();
  if (index == -1) index = $("select[name='acno'] option:selected").index();
  var gubun = $("input[name='gubun']").eq(index).val();
  $("input[name='acnt']").val(gubun);
}
//ìì«ì ì´ ììë ììì  ëëê³  ë¤ì , ì°ê¸°
//commifyRatio(val)
function commifyRatio(val) {
  var aa = val.split(".");
  var bb = commify(aa[0]);
  return bb + "." + aa[1];
}

function delZero(val) {
  var size = val.length;
  if (val.indexOf(".") == -1) {
    return val;
  }
  for (var i = 0; i <= size; size--) {
    2;
    if (val.substring(size - 1, size) == "0") {
      val = val.substring(0, size - 1);
    } else if (val.substring(size - 1, size) == ".") {
      val = val.substring(0, size - 1);
      return val;
    } else {
      return val;
    }
  }
}

function nullZero(val) {
  var num;
  num = val.split(".");
  if (val == "") {
    val = 0;
    return val;
  } else if (num[0] == "" && num[1] != "") {
    return "0." + num[1];
  }
  return val;
}
function pwdChk(val) {
  if (val == "") {
    alert("ë¹ë°ë²í¸ë¥¼ ìë ¥íìì¼ í©ëë¤.");
    return false;
  }
  return true;
}

$(document).ready(function () {
  $(document).bind("contextmenu", function (e) {
    return false;
  });
  //ëëê·¸ ë§ì - ì´ì¬í
  //$(document).bind('selectstart',function() {return false;});
  $(document).bind("dragstart", function () {
    return false;
  });
  $("input[name=acntPwd]").bind("keyup", function (e) {
    if (e.which == 13) {
      $("a#btnSearch").click();
      return false;
    }
  });
  $("input[name=pwd]").bind("keyup", function (e) {
    if (e.which == 13) {
      $("a#btnSearch").click();
    }
  });
  $("#commClose").click(function () {
    $.modal.impl.close();
  });
  $("#commSubPopClose").click(function () {
    $.modal.impl.close();
  });

  //ë³¸ë¬¸ ëª¨ëì¼ë
  if ($("div#sideContent").text() == "") {
    $("div#sideContent").css("background", "");
  }

  //rdíë¡ê·¸ë¨ ë¤ì´ë¡ë ê³µíµí¨ì
  $("#certDown").live("click", function () {
    //ì¥ì°¨ë²
    var IE = document.all ? true : false;
    if (IE) {
    } else {
      alert("Internet Explorerë§ ì§ìí©ëë¤.");
      return;
    }

    certDown();
  });
});

//ì¼ë¿ì°½ ì ì
function gfnAlert(msg) {
  alert(msg);
}

//ë¨ìì²ë¦¬
function gfnSetFtam(val) {
  if (val == null || val == "") {
    return 0;
  }

  if (val.length > 0) {
    if (val.substring(0, 1) == ".") {
      return 0;
    }
  }

  val = delZero(val);

  return gfnParseInt(val);
}

/* ----------------------------------------------------------------------------
* í¹ì  ë ì§ì ëí´ ì§ì í ê°ë§í¼ ê°ê°(+-)í ë ì§ë¥¼ ë°í
* ìë ¥ íë¼ë¯¸í° -----
* pInterval : "yyyy" ë ì°ë ê°ê°, "m" ì ì ê°ê°, "d" ë ì¼ ê°ê°
* pAddVal  : ê°ê° íê³ ì íë ê° (ì ìí)
* pYyyymmdd : ê°ê°ì ê¸°ì¤ì´ ëë ë ì§
* pDelimiter : pYyyymmdd ê°ì ì¬ì©ë êµ¬ë¶ìë¥¼ ì¤ì  (ìì¼ë©´ "" ìë ¥)
* ë°íê° ----
* yyyymmdd ëë í¨ì ìë ¥ì ì§ì ë êµ¬ë¶ìë¥¼ ê°ì§ë yyyy?mm?dd ê°
* ì¬ì©ì ---
* 2012-01-01 ì 3 ì¼ ëíê¸° ==> gfnAddDate("d", 3, "2012-01-01", "-");
* 20120101 ì 8 ê°ì ëíê¸° ==> gfnAddDate("m", 8, "20120101", "");
--------------------------------------------------------------------------- */
function gfnAddDate(pInterval, pAddVal, pYyyymmdd, pDelimiter) {
  var yyyy;
  var mm;
  var dd;
  var cDate;
  var cYear, cMonth, cDay;

  if (pDelimiter != "") {
    pYyyymmdd = pYyyymmdd.replace(eval("/\\" + pDelimiter + "/g"), "");
  }

  yyyy = pYyyymmdd.substr(0, 4);
  mm = pYyyymmdd.substr(4, 2);
  dd = pYyyymmdd.substr(6, 2);

  if (pInterval == "yyyy") {
    yyyy = yyyy * 1 + pAddVal * 1;
  } else if (pInterval == "m") {
    mm = mm * 1 + pAddVal * 1;
  } else if (pInterval == "d") {
    dd = dd * 1 + pAddVal * 1;
  }

  cDate = new Date(yyyy, mm - 1, dd); // 12ì, 31ì¼ì ì´ê³¼íë ìë ¥ê°ì ëí´ ìëì¼ë¡ ê³ì°ë ë ì§ê° ë§ë¤ì´ì§.
  cYear = cDate.getFullYear();
  cMonth = cDate.getMonth() + 1;
  cDay = cDate.getDate();

  cMonth = cMonth < 10 ? "0" + cMonth : cMonth;
  cDay = cDay < 10 ? "0" + cDay : cDay;

  if (pDelimiter != "") {
    return cYear + pDelimiter + cMonth + pDelimiter + cDay;
  } else {
    return cYear.toString() + cMonth.toString() + cDay.toString();
  }
}

//ë¬¸ìë¥¼ ì«ìë¡ ë³í
function gfnParseInt(val) {
  if (val == null || val == "") {
    return 0;
  }
  val = str_replace(val, ",");
  val = str_replace(val, "-");

  if (isNaN(parseInt(val))) {
    return 0;
  }
  return parseInt(val);
}

//ë¬¸ìë¥¼ ì«ìë¡ ë³í. - ê° ì ì§
function gfnSignedParseInt(val) {
  if (val == null || val == "") {
    return 0;
  }
  val = str_replace(val, ",");

  if (isNaN(parseInt(val))) {
    return 0;
  }
  return parseInt(val);
}

// ììì  ì´í ì²ë¦¬
function CutDecimalPoint(intTarget, intCutPosition) {
  //1234.567890
  //. ë¤ì 2ìë¦¬ë§ ë¨ê¸°ê³  ìë¥´ê² ë¤.  . index +2

  var intResult = "";
  var strTarget = String(intTarget).split(".");

  if (intCutPosition == 0) {
    return strTarget[0];
  }

  if (strTarget[1] != null && strTarget[1].length >= intCutPosition) {
    strTarget[1] = strTarget[1].slice(0, intCutPosition);
  } else if (strTarget[1] != null && strTarget[1].length < intCutPosition) {
    strTarget[1] = strTarget[1];
  } else {
    strTarget[1] = "00";
  }

  intResult = strTarget[0] + "." + strTarget[1];
  return intResult;
}

//ì«ìë§ ìë ¥
function gfnCheckInputNumber(textId) {
  $("#" + textId).keyup(function (e) {
    if (
      $(this)
        .val()
        .match(/[^0-9]/g) != null
    ) {
      $(this).val(
        $(this)
          .val()
          .replace(/[^0-9]/g, "")
      );
    }
  });
}

//ìì´ì«ìë§ ìë ¥
function gfnCheckInputEng(textId) {
  $("#" + textId).keyup(function (e) {
    if (
      $(this)
        .val()
        .match(/[^^a-zA-Z0-9.]/g) != null
    ) {
      $(this).val(
        $(this)
          .val()
          .replace(/[^a-zA-Z0-9]/g, "")
      );
    }
  });
}

//ì´ë©ì¼ ìë ¥
function gfnCheckInputEmail(textId) {
  $("#" + textId).keyup(function (e) {
    if (
      $(this)
        .val()
        .match(/[^^a-zA-Z0-9._-]/g) != null
    ) {
      $(this).val(
        $(this)
          .val()
          .replace(/[^a-zA-Z0-9._-]/g, "")
      );
    }
  });
}

//ì´ë©ì¼ ì£¼ìì²´í¬
function gfnMailAddressChk(str) {
  var mailV = str;
  var mailA = mailV.indexOf("@", 0);
  var mailD = mailV.indexOf(".", mailA);

  if (gfnTrim(str).length == 0) return true;

  if (mailA <= 0 || mailD <= 0) {
    return false;
  }

  return true;
}

//ê¸ì¡ë§ ìë ¥
function gfnCheckInputMoney(textId) {
  $("#" + textId).keyup(function (e) {
    if (
      $(this)
        .val()
        .match(/[^0-9]/g) != null
    ) {
      $(this).val(
        $(this)
          .val()
          .replace(/[^0-9]/g, "")
      );
    }
    $("#" + textId).val(gfnMoneyAddComma($("#" + textId).val()));
  });
}

//ì«ìê¸ì¡ íê¸ë³í
function gfnMoneyToHangul(textId, returnId) {
  var val = $("#" + textId).val();

  val = gfnRemoveComma(val);
  val = gfnRemoveFirstZero(val);

  var num = "";
  var won = new Array();

  re = /[^0-9]+/g;
  num = val.toString();

  if (!val) {
    $("#" + returnId).html("");
    $("#" + textId).val("");
    return;
  }
  if (re.exec(num)) {
    $("#" + returnId).html("");
    $("#" + textId).val("");
    return;
  }
  if (num.substr(0, 1) == 0) {
    $("#" + returnId).html("");
    $("#" + textId).val("");
    return;
  }

  var price_unit0 = new Array(
    "",
    "ì¼",
    "ì´",
    "ì¼",
    "ì¬",
    "ì¤",
    "ì¡",
    "ì¹ ",
    "í",
    "êµ¬"
  );
  var price_unit1 = new Array("", "ì­", "ë°±", "ì²");
  var price_unit2 = new Array("ë§", "ìµ", "ì¡°", "ê²½", "í´");

  for (var i = 0; i <= num.length - 1; i++) {
    won[i] = price_unit0[num.substr(i, 1)];
  }
  won = won.reverse();
  for (var i = 0; i <= num.length - 1; i++) {
    if (i > 0 && won[i] != "") {
      won[i] += price_unit1[i % 4];
    }
  }
  for (i = 4; i <= won.length - 1; i = i + 4) {
    won[i] += price_unit2[i / 4 - 1];
  }
  for (var i = 0; i <= num.length - 1; i++) {
    if (i % 4 > 0) {
      won[i] = won[i].replace("ì¼", "");
    }
  }
  won = won.reverse();
  won = won.join("");
  won = gfnReplace(won, "ìµë§", "ìµ");

  $("#" + returnId).html(won + "ì");
  $("#" + textId).val(gfnMoneyAddComma($("#" + textId).val()));
}

//ì«ìê¸ì¡ì¶ê°
function gfnPlusMoney(money, textId) {
  var val = $("#" + textId).val();

  val = gfnRemoveComma(val);
  val = gfnRemoveFirstZero(val);

  if (val == "") val = "0";
  val = eval(val) + money + "";

  if (val.substring(0, 1) == "0") val = val.substring(1);

  $("#" + textId).val(gfnMoneyAddComma(val));
}

//ì¸í ë°ì¤ í¬ì»¤ì¤ì ìë í¸
function gfnFocusSelect(textId) {
  $("#" + textId).focus(function () {
    $(this).select();
  });
}

//trim ---------------------------------------------------------------------
function gfnTrim(str) {
  if (str == null) str = "";
  return gfnRTrim(gfnLTrim(str));
}

//ì¼ìª½ trim ----------------------------------------------------------------
function gfnLTrim(str) {
  var resultText = "";

  for (var i = 0; i < str.length; i++) {
    if (str.substring(i, i + 1) != " ") {
      resultText = str.substring(i, str.length);
      break;
    }
  }
  return resultText;
}

// ì¤ë¥¸ìª½ trim --------------------------------------------------------------
function gfnRTrim(str) {
  var resultText = "";
  for (var i = str.length; i > 0; i--) {
    if (str.substring(i - 1, i) != " ") {
      resultText = str.substring(0, i);
      break;
    }
  }
  return resultText;
}

//ì¸ííì¤í¸ ê¸ì¡ì ì½¤ë§ì¶ê°
function gfnMoneyAddComma(str) {
  var signed = "";
  var remain = "";
  var resultText = "";

  str = gfnRemoveComma(str);
  if (gfnDigitCheck(str) == false) {
    $("#" + textId).val(str);
    return;
  }

  if (str.length > 0) {
    if (str.substring(0, 1) == "-") {
      signed = "-";
      str = str.substring(1);
    }
    remain = str.length % 3;
    for (var i = 0; i < str.length; i++) {
      var ch = str.charAt(i);
      for (var k = 0; k < str.length / 3; k++) {
        if (i == remain + 3 * k && i != 0) resultText = resultText + ",";
      }
      resultText = resultText + ch;
    }
    return signed + resultText;
  }
}

// ',' ì ê±° -----------------------------------------------------------------
function gfnRemoveComma(str) {
  var resultText = "";
  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (ch != ",") resultText = resultText + ch;
  }
  return resultText;
}

//0 ìë ¥ì 0
function gfnRemoveFirstZero(str) {
  if (str.length > 1) {
    while (str.substring(0, 1) == "0" || str.substring(0, 1) == ",") {
      str = str.substring(1, str.length);
    }
  }
  return str;
}

//ì«ìì¬ë¶ ì²´í¬ ------------------------------------------------------------
function gfnDigitCheck(str) {
  if (gfnTrim(str).length == 0) return true;

  str = gfnTrim(str);
  for (var i = 0; i < str.length; i++) {
    var oneChar = str.charAt(i);
    if (oneChar < "0" || oneChar > "9") {
      if (oneChar == "." || (i == 0 && oneChar == "-")) {
      } else {
        return false;
      }
    }
  }
  return true;
}

//ììì¤
//ì¸íì íììë ¥
function gfnValidRequired(chkId, msg) {
  var val = $("#" + chkId).val();
  val = gfnRemoveComma(val);
  val = gfnRemoveFirstZero(val);

  if (chkId == "acno2" && $("#" + chkId).val() == "0000") {
    return true;
  }

  if (val == "" || val == "0") {
    gfnAlert(msg);
    return false;
  }
  return true;
}

//ììì¤
//ì²´í¬ë°ì¤íì
function gfnIsValidCheckBox(chkId, msg) {
  if (!$("#" + chkId).is(":checked")) {
    gfnAlert(msg);
    return false;
  }
  return true;
}

//ììì¤
//ì¸íê¸¸ì´ì²´í¬
function gfnIsValidLength(chkId, len, msg) {
  var val = $("#" + chkId).val();

  if (val.length != len) {
    gfnAlert(msg);
    return false;
  }
  return true;
}

//ë¬¸ìì´ ìë¥´ê¸°
//@ arguments
//str  : ë¬¸ìì´ì ìë¥¼ UTF-8 ì¸ì½ë© ë¬¸ìì´
//len  : ìë¥¼ ë¬¸ìì´ì ìì
//tail : ìë¥¼ ë¬¸ìì´ì ë
//@ return : string
function string_cut(str, len, tail) {
  return str.substr(len, tail);
}

//ì¼ìë¬ë ¥ ì»¤íìì ë ì§ë²ì íë¦´ì ì ì 
function gfnSetDifferenceDate(datePickerId1, datePickerId2) {
  var stDate = $(datePickerId1).val();
  var edDate = $(datePickerId2).val();

  if (stDate != "" && edDate != "" && stDate > edDate) {
    var temp = stDate;
    $(datePickerId1).val(edDate);
    $(datePickerId2).val(temp);
  }
}

//ì¼ìë¬ë ¥ ê¸°ë³¸ìµì ì¸í
function gfnSetDatePickerOption(datePickerId) {
  $(datePickerId).datepicker("option", "dateFormat", "yy-mm-dd");
  $(datePickerId).datepicker("option", "yearRange", "2000:2015");
  $(datePickerId).datepicker("option", "showMonthAfterYear", true);
  $(datePickerId).datepicker("option", "defaultDate", "+1w");
  $(datePickerId).datepicker("option", "changeMonth", true);
  $(datePickerId).datepicker("option", "changeYear", true);
  $(datePickerId).datepicker("option", "hideIfNoPrevNext", false);
  $(datePickerId).datepicker("option", "numberOfMonths", 1);
}

//ì í ë ì§ 2ê° ì¬ì´ì ê¸°ê° êµ¬íê¸°
//íìì yyyy-mm-dd
function dateClac(start, end) {
  var s = start.split("-"); //ììë ì§
  var e = end.split("-"); //ì¢ë£ë ì§
  var startDay = new Date(s[0], s[1] - 1, s[2]);
  var endDay = new Date(e[0], e[1] - 1, e[2]);
  var day = 1000 * 60 * 60 * 24;
  var calcDate = (endDay - startDay) / day;
  return calcDate;
}

//Dateê°ì²´ yyyymmdd íìì¼ë¡ ë³í
function dateChange(date) {
  var year = date.getFullYear();
  var month = "";
  var day = "";
  if (parseInt(date.getMonth() + 1) < 10) {
    month = "0" + (date.getMonth() + 1);
  } else {
    month = "" + (date.getMonth() + 1);
  }
  if (parseInt(date.getDate()) < 10) {
    day = "0" + date.getDate();
  } else {
    day = "" + date.getDate();
  }
  var fulldate = year + month + day;
  return fulldate;
}

//Dateê°ì²´ yyyy-mm-dd íìì¼ë¡ ë³í
function dateChange2(date) {
  return setHyphen(dateChange(date));
}

//íì´ë¸ í¸ë²ë§
function gfnTableHover(tbodyId) {
  $("#" + tbodyId + " tr").hover(
    function () {
      $(this).removeClass("tbl_non_hover");
      $(this).addClass("tbl_hover");
    },
    function () {
      $(this).removeClass("tbl_hover");
      $(this).addClass("tbl_non_hover");
    }
  );
}

//ë¹ê°ì´ ëì´ìëë° 0ì¼ë¡ ì°ì´ì¼í ë
function nullChangeZero(data) {
  if (data == "") {
    return 0;
  } else {
    return data;
  }
}

//replaceALL
function gfnReplace(str, before, after) {
  var resultText = str;
  for (var i = 0; i < str.length; i++) {
    resultText = resultText.replace(before, after);
  }
  return resultText;
}

function LeftReplace(str, n) {
  if (n <= 0) {
    return "";
  } else if (n > String(str).length) {
    return str;
  } else {
    var iLen = String(str).length;
    return String(str).substring(iLen, iLen - n);
  }
}

function RightReplace(str, n) {
  if (n <= 0) {
    return "";
  } else if (n > String(str).length) {
    return str;
  } else {
    return String(str).substring(0, n);
  }
}

//ì¤íë¦¬í¸
function gfnSplit(val, spl) {
  var txt = val;
  var arr = new Array();
  var i = 0;
  while (txt.indexOf(spl) != -1) {
    arr[i] = txt.substring(0, txt.indexOf(spl));
    txt = txt.substring(txt.indexOf(spl) + spl.length, txt.length);
    i++;
  }
  arr[arr.length] = txt;
  return arr;
}

//'-' ì ê±° -----------------------------------------------------------------
function gfnRemoveMinus(str) {
  var resultText = "";
  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (ch != "-") resultText = resultText + ch;
  }
  return resultText;
}

//'+' ì ê±° -----------------------------------------------------------------
function gfnRemovePlus(str) {
  var resultText = "";
  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (ch != "+") resultText = resultText + ch;
  }
  return resultText;
}

//ìê° - ìì±
function setTimeHyphen(time) {
  if (time == "" || time == null) return time;
  time =
    time.substring(0, 2) +
    ":" +
    time.substring(2, 4) +
    ":" +
    time.substring(4, 6);
  return time;
}

//ì ìë¶ë¶ ìììë 0 ì­ì 
function deleteZero(num) {
  var tNum = num.split(".");
  if (tNum[1] == undefined) {
    tNum[1] == "";
  } else {
    tNum[1] = "." + tNum[1];
  }
  for (var i = 0; i < tNum[0].length; i++) {
    if (tNum[0].substring(i, i + 1) != "0") {
      return tNum[0].substring(i, tNum[0].legnth) + tNum[1];
    }
  }
  return 0 + tNum[1];
}

//ë¬¸ì ê¸¸ì´ ì²´í¬
function getByteLength(data) {
  var len = 0;
  var str = data.substring(0);

  if (str == null) {
    return 0;
  }

  for (var i = 0; i < str.length; i++) {
    var ch = escape(str.charAt(i));

    if (ch.length == 1) {
      len++;
    } else if (ch.indexOf("&u") != -1) {
      len += 2;
    } else if (ch.indexOf("%") != -1) {
      len += ch.length / 3;
    }
  }
  return len;
}

//ë©ì¸ì§ ìíë ê¸¸ì´ë§í¼ ìë¥´ê³  ìíë ë¬¸ìì´ ë¶ì´ê¸°
function cutMsg(data, str, len) {
  var ret = "";
  var msglen = 0;
  var endStr = "";
  for (var i = 0; i < data.length; i++) {
    var ch = data.charAt(i);
    if (escape(ch).length > 4) {
      msglen += 2;
    } else {
      msglen++;
    }
    if (msglen > len) {
      endStr = str;
      break;
    }
    ret += ch;
  }
  return ret + endStr;
}

//ì«ì + Tabë§ ìë ¥
function onlyNumberTab(e) {
  var strKeyCode;
  if (e == undefined) {
    strKeyCode = window.event.keyCode;
  } else {
    strKeyCode = e.keyCode ? e.keyCode : e.which;
  }
  if (strKeyCode != 9) {
    onlyNumber(e);
  }
}

//ìì°½ í¹ì ì´ë
function pageLocation(urls, pagename, flag, option) {
  //	console.log(document.writeln(location.href));
  //	alert("test common");
  var front = "";
  if (urls == "/newsmakt/OvrlNewsMakt.do") {
    front = window.open(urls, "_blank");
    front.focus();
  } else if (urls == "/invtsttganls/OmStckQttn.do") {
    front = window.open(urls, "_blank");
    front.focus();
  } else if (urls.indexOf("/wts/WtsMain.do") != -1) {
    //		var IE = (document.all)?true:false;
    //		if (IE) {
    //			// IE ì¸ ê²½ì°
    //			var userAgent = window.clientInformation.userAgent;  // Browser ì ë³´
    //			if (navigator.userAgent.match(/Trident\/(\d.\d)/i)!=null) { // IE 8 ì´ìë§ íì
    document.location.href = urls;
    //			} else {
    //				alert('WTSë Internet Explorer 8ì´ìë§ ì¬ì© ê°ë¥í©ëë¤.\n(ê³ ê°ëPCì ë³´: ' + userAgent + ')');
    //			}
    ////			document.location.href = urls;
    //		} else {
    //			alert('WTSë Internet Explorerë§ ì§ìí©ëë¤.');
    ////			alert('Internet Explorerë§ ì§ìí©ëë¤.');
    //		}
    ////		if(logOutTime > 0) {
    ////			front =window.open(urls, "_blank");
    ////			front.focus();
    ////		} else {
    ////			document.location.href = "http://home.imeritz.com/comm/logn/LognMang.do?targetURL=%2Findex.jsp#none";
    ////		}
  } else if (location.href.indexOf("/wts/WtsMain.do") != -1) {
    if (location.href.indexOf("popup=popup") != -1) {
      opener.location.href = urls;
      window.close();
    } else {
      document.location.href = urls;
    }
  } else {
    if (flag == "1") {
      document.location.href = urls;
    } else if (flag == "2") {
      front = window.open(urls, pagename, option);
      front.focus();
    }
  }
}

//ì£¼ë¯¼ë²í¸ ì í¨ì± ì²´í¬ -----------------------------------------------------
function gfnResidNoChk(str) {
  chk = 0;
  for (var i = 0; i <= 11; i++) {
    chk = chk + ((i % 8) + 2) * parseInt(str.substring(i, i + 1));
  }
  chk = 11 - (chk % 11);
  chk = chk % 10;

  if (chk != str.substring(12, 13)) {
    if (gfnFgnNoChksum(str)) {
      return true;
    }
    if (gfnFgnNoChksum(str)) {
      return true;
    }
    return false;
  } else return true;
}

//ì¸êµ­ì¸ ë±ë¡ë²í¸ ê²ì¬
function gfnFgnNoChksum(reg_no) {
  var birthYear;
  var birthMonth;
  var birthDate;
  var birth;
  var sum = 0;
  var odd = 0;

  if (reg_no.charAt(6) == "5" || reg_no.charAt(6) == "6") {
    birthYear = "19";
  } else if (reg_no.charAt(6) == "7" || reg_no.charAt(6) == "8") {
    birthYear = "20";
  } else if (reg_no.charAt(6) == "9" || reg_no.charAt(6) == "0") {
    birthYear = "18";
  } else {
    birthYear = "19";
  }
  birthYear += reg_no.substr(0, 2);
  birthMonth = reg_no.substr(2, 2) - 1;
  birthDate = reg_no.substr(4, 2);
  birth = new Date(birthYear, birthMonth, birthDate);

  if (
    birth.getYear() % 100 != reg_no.substr(0, 2) ||
    birth.getMonth() != birthMonth ||
    birth.getDate() != birthDate
  ) {
    return false;
  }

  buf = new Array(13);
  for (var i = 0; i < 13; i++) {
    buf[i] = parseInt(reg_no.charAt(i));
  }

  /* 8, 9ë²ì§¸ ìë¦¬ íì¸ */
  odd = buf[7] * 10 + buf[8];
  if (odd % 2 != 0) {
    return false;
  }
  /* 12ë²ì§¸ ìë¦¬ íì¸ */
  if (buf[11] != 6 && buf[11] != 7 && buf[11] != 8 && buf[11] != 9) {
    return false;
  }

  /* ì«ì ì¡°í© íì¸ */
  multipliers = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
  for (i = 0, sum = 0; i < 12; i++) sum += buf[i] *= multipliers[i];
  sum = 11 - (sum % 11);
  if (sum >= 10) sum -= 10;
  sum += 2;
  if (sum >= 10) sum -= 10;
  if (sum != buf[12]) return false;
  return true;
}

//iframe resize
function iframeResize(title) {
  if (title == undefined) {
    title = "iframe_main";
  }
  //find the height of the internal page

  document.all(title).height = 200;

  var the_height = 0;

  try {
    the_height = document.getElementById(title).contentWindow.document.body
      .scrollHeight;
  } catch (e) {}
  //change the height of the iframe
  document.getElementById(title).height = the_height + 40 + "px";
}

//ììì  ì´í ì²ë¦¬2
function CutDecimalPoint2(intTarget, intCutPosition) {
  //1234.567890
  //. ë¤ì 2ìë¦¬ë§ ë¨ê¸°ê³  ìë¥´ê² ë¤.  . index +2
  //1234.5
  //. ìì«ì  2ìë¦¬ë¡ ë§ë¤ê² ë¤.   1234.50

  var intResult = "";
  var strTarget = String(intTarget).split(".");

  if (intCutPosition == 0) {
    return strTarget[0];
  }

  if (strTarget[1] != null && strTarget[1].length > intCutPosition) {
    strTarget[1] = strTarget[1].slice(0, intCutPosition);
  } else if (strTarget[1] != null && strTarget[1].length <= intCutPosition) {
    for (var i = 0; i < intCutPosition - strTarget[1].length; i++) {
      strTarget[1] = strTarget[1] + "0";
    }
  } else {
    strTarget[1] = "00";
  }

  intResult = strTarget[0] + "." + strTarget[1];
  return intResult;
}

//FROM ~ TO ì¼ìì ì»ê¸°
//param1 : yyyymmdd ììì¼
//param2 : yyyymmdd ì¢ë£ì¼
function gfnDayDiff(str1, str2) {
  var fromYear;
  var fromMonth;
  var fromDay;
  var fromDate;
  var toYear;
  var toMonth;
  var toDay;
  var toDate;

  fromYear = str1.substring(0, 4);
  fromMonth = str1.substring(4, 6) - 1;
  fromDay = str1.substring(6);
  fromDate = new Date(fromYear, fromMonth, fromDay);

  toYear = str2.substring(0, 4);
  toMonth = str2.substring(4, 6) - 1;
  toDay = str2.substring(6);
  toDate = new Date(toYear, toMonth, toDay);

  return Math.ceil((toDate - fromDate) / 1000 / 24 / 60 / 60);
}

//ì¸ì¦ì ì íì°½ ì¶ë ¥ , í¨ì¤ìëê¹ì§ ìë ¥(ë¡ê·¸ì¸ íìì)
//ì±ê³µíë©´ Y ì¤í¨íë©´ N
function loginSignKorea(errorTitle, userId, callback, param, callbackFailure) {
  var dn = sessionGetDn();

  //ê³µì¸ì¸ì¦ ë¹ë°ë²í¸ íìì´ê³¼ ì²´í¬ í¨ì
  //ë¹ë°ë²í¸ íë¦°íìê° 7ë² ì´ìì´ë©´ ì¬ì©ë¶ê°
  var nFailedCount = getPbcrPwdMstkTmnu(); //ì¤í¨ íê³  ìë íìë¥¼ ì²´í¬ í©ëë¤.
  if (pbrcPwdErrorCheck(nFailedCount, errorTitle) == "N") {
    return "N";
  }

  //ì¸ì¦ì ë¹ë°ë²í¸ í¤ë¡ê¹
  //	var sks = CertManX.SetKeySaferMode(5);  // NA 2016.10.21

  // ìë¨ ì´ë¯¸ì§ ì ì©
  //  CertManX.SetLogoURL("http://home.imeritz.com/include/signKorea/login_pop_banner_47.bmp.sig","");

  CertManX.SetKeySaferMode(3); // Ahnlab ASTX2.0 í¤ë³´ë ë³´ì ì°ë

  CertManX = ytMain;

  if (!CertManX.SetPolicyFilter(0, "")) {
    alert("[" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
    return;
  }

  /*=======================================================================
	ì¸ì¦ì ì í í¨ì ìëë¤. ë¹ë°ë²í¸ ì¤ë¥ íì ì²ë¦¬ì ê´í ìì  ìëë¤.
	=======================================================================*/

  var nMaxCount = 6; //ì´ 1ë²ì ì¤ë¥ ë¹ë° ë²í¸ ìë ¥ ì í
  var nErrCode;
  var strErrMsg;
  var strSignData;
  var strRet;
  var plainText;
  var r;
  var signData;

  try {
    //		while(nFailedCount <= nMaxCount)
    //		{

    //íë¦° ë¹ë°ë²í¸ ìë ¥ì¬ë¶
    CertManX.SetWrongPasswordLimit(1);

    //				CertManX.SetWebAccMode(1); // ì¥ì ì¸ ì¹ ì ê·¼ì± ëª¨ëì¤ì 

    //ì¸ì¦ì ê²ì ì°ì ìì
    CertManX.SetDeviceOrder("RHSU");

    //ì¸ì¦ì ì í ì ë³´ë¥¼ ì´ê¸°í í´ì¤ëë¤.
    CertManX.UnSetMatchedContext(function () {
      //ì¸ì¦ì ì í í¨ì ìëë¤.
      CertManX.SetMatchedContextExt(dn, "", "", 256 + 0 + 0, function (strRet) {
        //ì í í¨ìì ìë¬ ì ì²ë¦¬ ë¸ë­
        if (strRet == "") {
          nErrCode = CertManX.GetLastErrorCode();
          strErrMsg = CertManX.GetLastErrorMsg();

          //ì ì ìëª ë¹ë°ë²í¸ ì¤ë¥ ì½ë ìëë¤.
          if (nErrCode == 2417) {
            //setPbcrPwdFail(nFailedCount,"N")
            //ë¹ë°ë²í¸ê° íë ¸ìê²½ì° ê³µì¸ì¸ì¦ ë¹ë°ë²í¸ ì¤ë¥íì TRíì´ë¤ ì¦ê°í ê°ì ë¦¬í´ë°ì
            nFailedCount = setPbcrPwdFail(nFailedCount, "N");
            alert(
              "ì¸ì¦ë¹ë°ë²í¸[" +
                nFailedCount +
                "]í ì¤ë¥ìëë¤ 7í ì¤ë¥ì ì¬ë°ê¸ ë°ì¼ìì¼ ë©ëë¤."
            ); //ê³µì¸ì¸ì¦ ë¹ë°ë²í¸ íìì´ê³¼ ì²´í¬ í¨ì
            if (pbrcPwdErrorCheck(nFailedCount, errorTitle) == "N") {
              return "N";
            }
          }
          //ë¹ë°ë²í¸ ì¤ë¥ ì¸ì ë¤ë¥¸ ìë¬ë¥¼ ì²ë¦¬ íë ë¶ë¶ ìëë¤.
          else {
            alert("ìë¬ ì½ë : " + nErrCode + "\nìë¬ ë©ì¸ì§ : " + strErrMsg);
            return;
          }
        } else {
          /*=======================================================================
				ìëª í¨ì ìëë¤.
				ì´ë¯¸ì§ ì¤ì ê³¼ ì ì± íí°ë§ì íµíì¬ ì íë ì¸ì¦ìë¡ ìëªì í©ëë¤.
				=======================================================================*/
          plainText = getPbrcId();

          CertManX.SignDataB64("", plainText, 1, function (strSignData) {
            //dataê°
            signData = CertManX.GetToken(strSignData, "data");

            //rê°
            r = CertManX.GetToken(strSignData, "r");

            // OCSP ë¹ë¡ê·¸ì¸ ìëª 2014.05.20
            /*if (getFullSgntDataChck(encodeURIComponent(signData.replace(/\n/gi,"")),encodeURIComponent(r)
//				if (getFullSgntDataChck(signData.replace(/\n/gi,""),r //encode ìí¨
						,errorTitle, plainText
						,"", ""
						,"","")=="Y") {
				} else {
					return;
				}*/
            // OCSP ë¹ë¡ê·¸ì¸ ìëª 2014.05.20 END

            // ê¹ë¨ì ìì ìë£
            if (strSignData == "") {
              alert(
                "[" +
                  CertManX.GetLastErrorCode() +
                  "]" +
                  CertManX.GetLastErrorMsg()
              );
              return;
            }

            setPbcrPwdFail(getPbcrPwdMstkTmnu(), "Y"); //ê³µì¸ì¸ì¦ ì¤ë¥ íì ì´ê¸°í
            //ë¹ë°ë²í¸ ì¤ë¥íì ì´ê¸°í
            //							setPbcrPwdFail(nFailedCount,"Y");

            // ì½ìë í¨ìë¡ return
            // ê²°ê³¼ê°ì´ Yì¸ ê²½ì°
            if (
              getPbcrSgntDataChck(
                encodeURIComponent(signData.replace(/\n/gi, "")),
                encodeURIComponent(r),
                errorTitle,
                userId
              ) == "Y"
            ) {
              if (param == null) {
                callback();
              } else if (param == undefined) {
                callback();
              } else if (param.toString == "") {
                callback();
              } else {
                callback(param);
              }
            } else {
              if (callbackFailure != null) callbackFailure();
            }
          });
          //				break;
        }
      });
    });
    //		}//end while

    //ëª¨ë  ê¸°ë¥ì´ ëë ë¤ì ì´ê¸°í ì¤ì ì¼ë¡ í¨ìë¤ì í¸ì¶í´ ì¤ëë¤.
    /*=======================================================================
		ì¤ì  ì´í ë¤ë¥¸ ì¸ì¦ì ì í ì°½ íì´ì§ìë ìí¥ì ë¼ì¹ ì ìì¼ë¯ë¡, íí°ë§ì´ ëë íìë
		ë°ëì ê¸°ë³¸ ì¤ì ì¼ë¡ ë¤ì íë² í¨ìë¥¼ í¸ì¶í´ ì£¼ìì¼ í©ëë¤.
		=======================================================================*/

    //		CertManX.SetPolicyFilter(0, "");
    //		CertManX.UnsetMatchedContext(function () {});  //  ì´ê¸°í
    //		CertManX.SetLogoFile("");

    //ì´íìë strSignData ë¥¼ ë¡ê·¸ì¸ ìë¸ë¦¿ì¼ë¡ ë³´ë´ë ììì ì§í
  } catch (e) {}
  //ë¹ë°ë²í¸ ì¤ë¥íì ì´ê¸°í
  //	setPbcrPwdFail(nFailedCount,"Y");
  //	return getPbcrSgntDataChck(encodeURIComponent(signData.replace(/\n/gi,"")),encodeURIComponent(r),errorTitle,userId);
}

// ì¬ì¸ì½ë¦¬ì ì¼íì©ì¸ì¦ë²í¸ ìì²­ 2016.06.03
function getPbcrSgntDataChck(signData, r, errorTitle, userId) {
  var id = "";
  if (userId != undefined) {
    id = "&id=" + userId;
  }
  //	if(userId != undefined) { id = "&id="+URLEncode(userId); }
  var yn = "N";

  //	alert(userId);

  var frmData = "r=" + r + "&data=" + signData + "&ssnm=PBCR";
  //	frmData = GatherValueEach(frmData); // ì´ë¯¸ URLEncode ëì´ì ë¤ì´ì¨ ê°ì´ë¼ ì ì¸
  $.ajax({
    type: "POST",
    async: false,
    url: "/pbcr/GetOneCertSeq.do",
    dataType: "json",
    timeout: 30000,
    data: frmData, // NA
    //		data:frmData, // NA // data:"INIpluginData="+URLEncode(EncParams(frmData)),
    error: function (request, status, error) {
      fnAjaxError();
    },
    success: function (response, status, request) {
      if (response.sysCode == "0") {
        //				alert(response.onecert);

        yn = getPbcrSgntDataChck2(
          signData,
          r,
          errorTitle,
          userId,
          response.onecert
        );

        //	    		yn = "Y";
      } else {
        commModalPop(
          errorTitle,
          response.sysMsg,
          response.sysSubMsg,
          response.sysMsgCode
        );
      }
    },
    beforeSend: function () {
      $.blockUI({});
    },
    complete: function () {
      $.unblockUI();
    },
  });

  return yn;
}

//ì¬ì¸ì½ë¦¬ì ë¹ë°ë²í¸ ì²´í¬ 2016.06.03
function getPbcrSgntDataChck2(signData, r, errorTitle, userId, onecert) {
  var id = "";
  if (userId != undefined) {
    id = "&id=" + userId;
  }
  //	if(userId != undefined) { id = "&id="+URLEncode(userId); }
  var cert1time = "";
  if (onecert != undefined) {
    cert1time = "&ocsno=" + onecert;
  }
  //	if(onecert != undefined) { cert1time = "&ocsno="+URLEncode(onecert); }
  var yn = "N";

  var frmData = "r=" + r + "&data=" + signData + id + cert1time;
  //	frmData = GatherValueEach(frmData); // ì´ë¯¸ URLEncode ëì´ì ë¤ì´ì¨ ê°ì´ë¼ ì ì¸
  $.ajax({
    type: "POST",
    async: false,
    url: "/pbcr/PbcrSgntDataChck.do",
    dataType: "json",
    timeout: 30000,
    data: frmData, // NA
    //		data:frmData, // NA // data:"INIpluginData="+URLEncode(EncParams(frmData)),
    error: function (request, status, error) {
      fnAjaxError();
    },
    success: function (response, status, request) {
      if (response.sysCode == "0") {
        yn = "Y";
      } else {
        commModalPop(
          errorTitle,
          response.sysMsg,
          response.sysSubMsg,
          response.sysMsgCode
        );
      }
    },
    beforeSend: function () {
      $.blockUI({});
    },
    complete: function () {
      $.unblockUI();
    },
  });

  return yn;
}

// not used
function getPbcrSgntDataChckOld(signData, r, errorTitle, userId) {
  var id = "";
  if (userId != undefined) {
    id = "&id=" + URLEncode(userId);
  }
  var yn = "N";

  var frmData = "r=" + r + "&data=" + signData + id;
  //	frmData = GatherValueEach(frmData); // ì´ë¯¸ URLEncode ëì´ì ë¤ì´ì¨ ê°ì´ë¼ ì ì¸
  $.ajax({
    type: "POST",
    async: false,
    url: "/pbcr/PbcrSgntDataChck.do",
    dataType: "json",
    timeout: 30000,
    data: frmData, // NA // data:"INIpluginData="+URLEncode(EncParams(frmData)),
    error: function (request, status, error) {
      fnAjaxError();
    },
    success: function (response, status, request) {
      if (response.sysCode == "0") {
        yn = "Y";
      } else {
        commModalPop(
          errorTitle,
          response.sysMsg,
          response.sysSubMsg,
          response.sysMsgCode
        );
      }
    },
    beforeSend: function () {
      $.blockUI({});
    },
    complete: function () {
      $.unblockUI();
    },
  });

  return yn;
}

//ê³µì¸ì¸ì¦ íì¸ì ìí´ ì ìì¤ì¸ IDê°ì ¸ì¤ê¸°
function getPbrcId() {
  var userId;
  $.ajax({
    type: "POST",
    async: false,
    url: "/pbcr/LognId.do",
    dataType: "json",
    timeout: 30000,
    error: function (request, status, error) {
      fnAjaxError();
    },
    success: function (response, status, request) {
      userId = response.userId;
    },
    beforeSend: function () {
      $.blockUI({});
    },
    complete: function () {
      $.unblockUI();
    },
  });
  //ì¸ìì IDê°ì´ ììê²½ì°
  //íë©´ì IDê° ìëì§ íì¸í íë©´ìì ê°ì ê°ì ¸ì´
  if (userId == "") {
    userId = $("input[name=elfnId]").val();
  }
  return userId;
}

//ê³µì¸ì¸ì¦ ì¤ë¥íì ì¸ììì ê°ì ¸ì¤ê¸°
function getPbcrPwdMstkTmnu() {
  var pbcrPwdMstkTmnu;
  $.ajax({
    type: "POST",
    async: false,
    url: "/pbcr/PbcrPwdMstkTmnu.do",
    dataType: "json",
    timeout: 30000,
    error: function (request, status, error) {
      fnAjaxError();
    },
    success: function (response, status, request) {
      pbcrPwdMstkTmnu = nullZero(response.pbcrPwdMstkTmnu);
    },
    beforeSend: function () {
      $.blockUI({});
    },
    complete: function () {
      $.unblockUI();
    },
  });
  return pbcrPwdMstkTmnu;
}

//ê³µì¸ì¸ì¦ì ë¹ë°ë²í¸ íë ¸ìê²½ì° íì°ë TR
function setPbcrPwdFail(pbcrPwdMstkTmnu, sucsYn, userId) {
  var nFailedCount;
  var idText = "";
  if (userId != undefined) {
    idText = "&userId=" + userId;
  }

  // macAddr ì¶ê° 201.10.08
  if ($("input#macAddrF").length > 0) {
    idText += "&macAddrF=" + $("input[name='macAddrF']").val();
    idText += "&macAddrR=" + $("input[name='macAddrR']").val();
    idText += "&macAddrType=" + $("input[name='macAddrType']").val();
  }

  var frmData =
    "pbcrPwdMstkTmnu=" + pbcrPwdMstkTmnu + "&sucsYn=" + sucsYn + idText;
  //	frmData = GatherValueEach(frmData);
  $.ajax({
    type: "POST",
    async: false,
    url: "/pbcr/PbcrPwdFail.do",
    dataType: "json",
    timeout: 30000,
    data: frmData, // NA
    //		data:frmData, // NA // data:"INIpluginData="+URLEncode(EncParams(frmData)),
    error: function (request, status, error) {
      fnAjaxError();
    },
    success: function (response, status, request) {
      nFailedCount = response.resultList[0][0].PbcrPwdMstkTmnu;
    },
    beforeSend: function () {
      $.blockUI({});
    },
    complete: function () {
      $.unblockUI();
    },
  });
  return nFailedCount;
}

//ê³µì¸ì¸ì¦ì ë¹ë°ë²í¸ íë ¸ìê²½ì° íì°ë TR (ë¡ê·¸ì¸ì ì©)
function setPbcrPwdFail4Login(pbcrPwdMstkTmnu, sucsYn, userId) {
  var nFailedCount;
  var idText = "";
  if (userId != undefined) {
    idText = "&userId=" + userId;
  }

  // macAddr ì¶ê° 201.10.08
  if ($("input#macAddrF").length > 0) {
    idText += "&macAddrF=" + $("input[name='macAddrF']").val();
    idText += "&macAddrR=" + $("input[name='macAddrR']").val();
    idText += "&macAddrType=" + $("input[name='macAddrType']").val();
  }

  var frmData =
    "pbcrPwdMstkTmnu=" + pbcrPwdMstkTmnu + "&sucsYn=" + sucsYn + idText;
  //	frmData = GatherValueEach(frmData);

  $.ajax({
    type: "POST",
    async: false,
    url: "/pbcr/PbcrPwdFail4Login.do",
    dataType: "json",
    timeout: 30000,
    data: frmData, // NA
    //data: "pbcrPwdMstkTmnu="+pbcrPwdMstkTmnu+"&sucsYn="+sucsYn+idText,
    //data:frmData, // NA // data:"INIpluginData="+URLEncode(EncParams(frmData)),
    error: function (request, status, error) {
      fnAjaxError();
    },
    success: function (response, status, request) {
      nFailedCount = response.resultList[0][0].PbcrPwdMstkTmnu;
    },
    beforeSend: function () {
      $.blockUI({});
    },
    complete: function () {
      $.unblockUI();
    },
  });
  return nFailedCount;
}

//ê³µì¸ì¸ì¦ íì ì´ê³¼ì¼ë íìì°½ ëì°ê³  ë¦¬í´ê° ë ë¦¬ë í¨ì
//íì ì´ê³¼ì´ë©´ Nì ë¦¬í´
function pbrcPwdErrorCheck(error, title) {
  if (parseInt(error) > 6) {
    returnBntFocus = $(this);
    //		commModalPop(title , "ì ììëªì ìíí  ì ììµëë¤" ,"ì»¨íì¼í°ë¡ ë¬¸ìë°ëëë¤", "");
    commModalPop(
      title,
      "ê³µì¸ì¸ì¦ ë¹ë°ë²í¸ 7í ì´ì ì°ìì¤ë¥ë¡ ì ìí  ì ììµëë¤.",
      "ê³µì¸ì¸ì¦ìë¥¼ ì¬ë°ê¸ ë°ì¼ìê¸° ë°ë¼ë©°, ìì¸í ì¬í­ì ì§ì  ëë ê³ ê°ì§ìì¼í°(1588-3400)ë¡ ë¬¸ìíìê¸° ë°ëëë¤.",
      ""
    );
    return "N";
  }
}

//ë¹ì¨ì´ .xxxë¡ ëì´ì¬ë ìì 0 ë¶ì¬ì£¼ê¸°
function addZeroSign(val) {
  var rt = "";
  var sign = val.substring(0, 1);

  var ary = new Array();
  ary = val.split("-");

  if (sign == ".") {
    rt = "0" + val;
  } else if (sign == "-" && ary[1].substring(0, 1) == ".") {
    rt = sign + "0" + ary[1];
  } else {
    rt = val;
  }
  //alert(val + "   " + tempsign + "   " + sign);
  return rt;
}

//ê³µì¸ì¸ì¦ ìí°ë¸ìì¤ í¸ì¶  Not Used
//ì¤ë¸ì í¸ ì ì¸ì´ ëì§ ìììê²½ì°ë§ headíê·¸ìì ì¶ê°í´ì¤ë¤
function addCertManX() {
  return;
  //	if($("object#CertManX").attr("classid") == undefined)
  //	{
  //		// 2015.10.15 ìë°ì´í¸
  //		$("head").append('<object id=CertManX classid=CLSID:EC5D5118-9FDE-4A3E-84F3-C2B711740E70  codeBase=http://home.imeritz.com/include/signKorea/SKCommAX.cab#version=9,9,6,0></object>');
  //	}
}

function gfnAccountIsNull(acnoId) {
  var selAcnoOptionStr = $(acnoId).html();
  if ($(acnoId).val() == null || $(acnoId).val() == "") selAcnoOptionStr = "";
  selAcnoOptionStr = gfnTrim(selAcnoOptionStr);
  selAcnoOptionStr = gfnReplace(selAcnoOptionStr, "\n", "");
  selAcnoOptionStr = gfnReplace(selAcnoOptionStr, " ", "");
  selAcnoOptionStr = gfnReplace(selAcnoOptionStr, "	", "");

  if (selAcnoOptionStr == "") {
    $("#basic-modal-AccountIsNull").modal();
    //alert("í´ë¹ìíì ì¬ì©ê°ë¥í ê³ì¢ê° ììµëë¤.");
    return false;
  }
  return true;
}

// í¹ì  íì´ë¸ë°ë ì ìë ë´ì© ì¤ í¹ì  ì»¬ë¼ì ëí´ ê°ì´ ììì¸ ê²½ì° íëì, ììì¸ ê²½ì° ë¹¨ê°ìì¼ë¡ íì
// tBody : íì´ë¸ ë°ë ì ID
// targetColNum : ìì íìí  ì»¬ë¼ ìì. ì¼ìª½ë¶í° 0ì¼ë¡ ìì
// lInterval : ìì íìí  ë ì½ëì ë¼ì¸ ê°ê²©. ë§¤ë¼ì¸ë§ë¤ ë¹ ì§ìì´ íìí  ëë 1, 2ë¼ì¸ë§ë¤ íìí  ëë 2
// lOrder : 2ë¼ì¸ ì´ìì¼ ë íìí  ìì. 2ë¼ì¸ì¤ ì²«ë²ì§¸ ë¼ì¸ì ìì¼ë©´ 0, ëë²ì§¸ ë¼ì¸ì´ë©´ 1
// ìì) ë§¤ë¼ì¸ 3ë²ì§¸ ì»¬ë¼ ìì íì gfnSetFontColorTable("tableBody", 3, 1, 0)
//      2ë¼ì¸ë§ë¤ 3ë²ì§¸ ì»¬ë¼ì í´ë¹íë ì²«ë²ì§¸ ë¼ì¸  gfnSetFontColorTable("tableBody", 3, 2, 0)
function gfnSetFontColorTable(tBody, targetColNum, lInterval, lOrder) {
  var tableBody = document.getElementById(tBody);
  var classNm = "";
  var classAdd = "";
  var numStr = "";

  for (var i = 0; i < tableBody.rows.length; i++) {
    if (i % lInterval == lOrder) {
      classAdd = "";
      classNm = "";

      classNm = $(
        "#" + tBody + " tr:eq(" + i + ") td:eq(" + targetColNum + ")"
      ).attr("class");
      numStr = str_replace(
        $("#" + tBody + " tr:eq(" + i + ") td:eq(" + targetColNum + ")").text(),
        "%"
      );

      if (parseFloat(numStr, 3) == 0.0) {
        classAdd = "";
      } else if (numStr.substr(0, 1) == "-") {
        classAdd = " c_blue";
      } else {
        classAdd = " c_r";
      }
      $("#" + tBody + " tr:eq(" + i + ") td:eq(" + targetColNum + ")").attr(
        "class",
        classNm + classAdd
      );
    }
  }
}

//í¹ì  íì´ë¸ë°ëì ìë ë´ì© ì¤ í¹ì  íë ¬ ì¢íì ëí´ ê°ì´ ììì¸ ê²½ì° íëì, ììì¸ ê²½ì° ë¹¨ê°ìì¼ë¡ íì
//tBody : íì´ë¸ ë°ë ì ID
//rowNum : ìì íìí  í ë²í¸
//colNum : ìì íìí  ì´ ë²í¸
function gfnSetFontColorTable2(tBody, rowNum, colNum) {
  var classNm = "";
  var classAdd = "";
  var numStr = "";

  var data = $("#" + tBody + " tr:eq(" + rowNum + ") td:eq(" + colNum + ")");

  classAdd = "";
  classNm = "";

  classNm = $(data).attr("class");

  numStr = str_replace($(data).text(), "%");

  if (parseFloat(numStr, 3) == 0.0) {
    classAdd = "";
  } else if (numStr.substr(0, 1) == "-") {
    classAdd = " c_blue";
  } else {
    classAdd = " c_r";
  }

  $(data).attr("class", classNm + classAdd);
}

//ì½ê´ typeA ëì°ê¸°
//ì½ê´ ì´ë¦ , íì¼ ê²½ë¡ , ì²´í¬ë°ì¤ IDê° , ì½ê´ íì (ì½ê´ëª¨ìì§ 1 , ì½ê´ëª¨ìì§ ì¸ì ì½ê´ 2)
function ctcnPrintTypeA(title, path, checkId, type) {
  if (checkId == "") {
    $("p.agreement").remove();
    $("div#t_c mar-t25").remove();

    //		$("a#ctcnOk").attr("onclick","commModalPopClose();");
    $("a#ctcnOk").removeAttr("onclick");
    $("a#ctcnOk").live("click", function () {
      commModalPopClose();
    });
  }
  var ctcnType = "";
  if (type == 1) {
    ctcnType = "#ctcn";
  } else {
    ctcnType = "#ctcnDiv";
  }
  $.ajax({
    url: path,
    async: false,
    success: function (data) {
      //ì ì ìë divì ìì¤ë¥¼ ì´ê¸°íí´ì£¼ê³  ë¶ë¬ì¨ htmlì½ëë¥¼ ì½ì
      $("div#ctcnDiv").html("");
      if (data.indexOf("<body>") != -1) {
        //body ê° ìë ê²½ì°
        var datas = data.split("<body>");
        data = datas[1];
        datas = data.split("</body>");
        data = datas[0];
      } else {
        //body ê° ìë ê²½ì°
      }

      $("div#ctcnDiv").append(data);
    },
  });
  $("span[id='commPopTitleCtcn']").text(title);
  $("span[id='commPopTitleCtcnSub']").text(title);
  $("input[name=checkBoxId]").val(checkId);
  $("#ctcnContent").html("");
  if (type == 1) {
    $("#ctcnContent").html(
      $(ctcnType).html().replace(/\n/gi, "<br/>").replace(/ /gi, "&nbsp;")
    );
    // ì½ê´ì íê° ë¤ì´ê°ê²½ì° íê° ëªê° ì§ spaníê·¸ìì ì½ì´ì¨ë¤ì
    // ê°¯ìë§í¼ divì ë£ì´ì¤ë¤ ë³¸ë¬¸ì "table+ë²í¸" ìì¼ë¡ ë£ì´ì£¼ê³  ê°ê° ë§ëê°ê³¼ replaceí´ì¤ë¤
    if ($("span#table").text() != "") {
      for (var i = 0; i < parseInt($("span#table").text()); i++) {
        $("#ctcnContent").html(
          $("#ctcnContent")
            .html()
            .replace('"table' + i + '"', $("div#table" + i).html())
        );
      }
    }
  } else {
    $("#ctcnContent").html($(ctcnType).html());
  }

  //$('#basic-modal-ctcn').modal( ) ;
  $("#basic-modal-ctcn").modal({
    closeHTML:
      '<a class="modalCloseImg" title="' +
      $("#basic-modal-ctcn div h4 strong").text() +
      ' (ë ì´ì´íì) ë«ê¸°"></a>',
  });
}

//ì½ê´ typeB ëì°ê¸°
//ì½ê´ ì´ë¦ , íì¼ ê²½ë¡ , ì²´í¬ë°ì¤ IDê° , ì½ê´ íì (ì½ê´ëª¨ìì§ 1 , ì½ê´ëª¨ìì§ ì¸ì ì½ê´ 2)
function ctcnPrintTypeB(title, path, checkId, type) {
  if (checkId == "") {
    $("p.agreement").remove();
    $("div#t_c mar-t25").remove();

    //		$("a#ctcnOk").attr("onclick","commModalPopClose();");
    $("a#ctcnOk").removeAttr("onclick");
    $("a#ctcnOk").live("click", function () {
      commModalPopClose();
    });
  }
  var ctcnType = "";
  if (type == 1) {
    ctcnType = "#ctcn";
  } else {
    ctcnType = "#ctcnDiv";
  }
  $.ajax({
    url: path,
    async: false,
    success: function (data) {
      //ì ì ìë divì ìì¤ë¥¼ ì´ê¸°íí´ì£¼ê³  ë¶ë¬ì¨ htmlì½ëë¥¼ ì½ì
      $("div#ctcnDiv").html("");
      if (data.indexOf("<body>") != -1) {
        //body ê° ìë ê²½ì°
        var datas = data.split("<body>");
        data = datas[1];
        datas = data.split("</body>");
        data = datas[0];
      } else {
        //body ê° ìë ê²½ì°
      }
      $("div#ctcnDiv").append(data);
    },
  });
  $("span[id='commPopTitle']").text(title);
  $("input[name=checkBoxId]").val(checkId);
  $("#ctcnContent").html("");
  if (type == 1) {
    $("#ctcnContent").html(
      $(ctcnType).html().replace(/\n/gi, "<br/>").replace(/ /gi, "&nbsp;")
    );
    // ì½ê´ì íê° ë¤ì´ê°ê²½ì° íê° ëªê° ì§ spaníê·¸ìì ì½ì´ì¨ë¤ì
    // ê°¯ìë§í¼ divì ë£ì´ì¤ë¤ ë³¸ë¬¸ì "table+ë²í¸" ìì¼ë¡ ë£ì´ì£¼ê³  ê°ê° ë§ëê°ê³¼ replaceí´ì¤ë¤
    if ($("span#table").text() != "") {
      for (var i = 0; i < parseInt($("span#table").text()); i++) {
        $("#ctcnContent").html(
          $("#ctcnContent")
            .html()
            .replace('"table' + i + '"', $("div#table" + i).html())
        );
      }
    }
  } else {
    $("#ctcnContent").html($(ctcnType).html());
  }
  $("#lbTitle").html("ì½ê´ ë´ì©ì ì½ìê³  ê·¸ ë´ì©ì ëìí©ëë¤.");

  //$('#basic-modal-ctcn').modal( ) ;
  $("#basic-modal-ctcn").modal({
    closeHTML:
      '<a class="modalCloseImg" title="' +
      $("#basic-modal-ctcn div h4 strong").text() +
      ' (ë ì´ì´íì) ë«ê¸°"></a>',
  });
}

//ì½ê´ ì²´í¬ë°ì¤ íì¸
function ctcnBoxCheck() {
  if ($("input[name=popAgrmBox]:checked").attr("checked") != "checked") {
    alert("ë´ì©ì ëìí´ì£¼ì¸ì");
    return;
  } else {
    $("#" + $("input[name=checkBoxId]").val()).attr("checked", "checked");
    $("#" + $("input[name=checkBoxId]").val()).attr("disabled", false);
    $.modal.impl.close();
    returnBntFocus.focus();
  }
}

// í¹ì  ë¼ëì¤ë²í¼ì ì²´í¬ë ê±´ì´ ìì¼ë©´ ì²´í¬ë ID, ìì¼ë©´ '0' ë¦¬í´
function gfnRadioCheck(rdoName) {
  for (var i = 0; i < document.getElementsByName(rdoName).length; i++) {
    if (document.getElementsByName(rdoName)[i].checked) {
      return document.getElementsByName(rdoName)[i].id;
      break;
    }
  }
  return "0";
}

// í¹ì  ë¼ëì¤ë²í¼ì  ì²´í¬ë ê±´ì´ ìì¼ë©´ ì²´í¬ë ê±´ì value, ìì¼ë©´ '' ë¦¬í´
function gfnRadioCheckVal(rdoName) {
  for (var i = 0; i < document.getElementsByName(rdoName).length; i++) {
    if (document.getElementsByName(rdoName)[i].checked) {
      return document.getElementsByName(rdoName)[i].value;
      break;
    }
  }
  return "";
}

//ë¹ë°ë²í¸ ì²´í¬
//íë¼ë©í° : ê³ì¢ë²í¸, ë¹ë°ë²í¸
function gfnCheckPassword(pAcno, pAcntPwd) {
  var rt = false;

  var frmData = "acno=" + pAcno + "&_E2E123_acntPwd=" + pAcntPwd;
  //	frmData = GatherValueEach(frmData);
  $.ajax({
    type: "POST",
    async: false,
    url: "/account/AccountPasswordCheckAjax.do",
    dataType: "json",
    timeout: 30000,
    data: frmData, // NA
    //	    data:frmData, // NA // data:"INIpluginData="+URLEncode(EncParams(frmData)),
    error: function (request, status, error) {
      fnAjaxError();
      $.unblockUI();
      return false;
    },
    success: function (response, status, request) {
      if (response.sysCode == "0") {
        if (response.resultList[0][0].ProsClsCode != "1") {
          alert(
            "ë¹ë°ë²í¸ ì²´í¬ : " + response.sysMsg + " " + response.sysSubMsg
          );
          $.unblockUI();
          rt = false;
        } else {
          $.unblockUI();
          rt = true;
        }
      } else {
        alert("ë¹ë°ë²í¸ ì²´í¬ : " + response.sysMsg + " " + response.sysSubMsg);
        $.unblockUI();
        rt = false;
      }
    },
    beforeSend: function () {
      $.blockUI({});
    },
    complete: function () {
      $.unblockUI();
    },
  });

  return rt;
}

function gfnCheckPassword2(pAcno, pAcntPwd) {
  var rt = false;

  var frmData = "acno=" + pAcno + "&_E2E123_acntPwd=" + pAcntPwd;

  frmData = GatherValueEach(frmData);
  $.ajax({
    type: "POST",
    async: false,
    url: "/account/AccountPasswordCheckAjax.do",
    dataType: "json",
    timeout: 30000,
    data: frmData, // NA
    //	    data:frmData, // NA // data:"INIpluginData="+URLEncode(EncParams(frmData)),
    error: function (request, status, error) {
      fnAjaxError();
      $.unblockUI();
      return false;
    },
    success: function (response, status, request) {
      if (response.sysCode == "0") {
        if (response.resultList[0][0].ProsClsCode != "1") {
          alert(
            "ë¹ë°ë²í¸ ì²´í¬ : " + response.sysMsg + " " + response.sysSubMsg
          );
          $.unblockUI();
          rt = false;
        } else {
          $.unblockUI();
          rt = true;
        }
      } else {
        alert("ë¹ë°ë²í¸ ì²´í¬ : " + response.sysMsg + " " + response.sysSubMsg);
        $.unblockUI();
        rt = false;
      }
    },
    beforeSend: function () {
      $.blockUI({});
    },
    complete: function () {
      $.unblockUI();
    },
  });

  return rt;
}

//rdíë¡ê·¸ë¨ ë¤ì´ë¡ë ê³µíµí¨ì
function certDown() {
  $("#iframe_main").remove();
  $("body").append(
    "<iframe id='iframe_main' style='display:none'" +
      "src='/popup/FileDownLoad.go?filePath=/home/imeritz/htapps/WEB-INF/bbs/resource/rd/rdocx50_cabsoft.exe'></iframe>"
  );
}
// Ajax íµì  ìë¬ ë°ìì ì²ë¦¬
function fnAjaxError() {
  alert("ë¤í¸ìí¬ ì¼ì ì¥ì ìëë¤.");
}

//ë¹ë°ë²í¸ ì²´í¬ í¨ì
function E2EpwdCheck(pwd, newPwd, newPwdCheck) {
  var Yn = true;
  var valueData;
  if (pwd != "") {
    valueData =
      "_E2E123_pwd=" +
      pwd +
      "&_E2E123_newPwd=" +
      newPwd +
      "&_E2E123_newPwdCheck=" +
      newPwdCheck;
  } else {
    valueData =
      "_E2E123_newPwd=" + newPwd + "&_E2E123_newPwdCheck=" + newPwdCheck;
  }

  var frmData = valueData;
  frmData = GatherValueEach(frmData);
  $.ajax({
    type: "POST",
    async: false,
    url: "/check/PwdCheck.do",
    dataType: "json",
    timeout: 30000,
    data: frmData, // NA
    //data:valueData,
    //	    data:frmData, // NA // data:"INIpluginData="+URLEncode(EncParams(frmData)),
    error: function (request, status, error) {
      fnAjaxError();
      $.unblockUI();
      return false;
    },
    success: function (response, status, request) {
      if (response.sysCode == "1") {
        alert(response.sysMsg);
        Yn = false;
      }
    },
    beforeSend: function () {},
    complete: function () {},
  });

  return Yn;
}

//ì£¼ë¯¼ë±ë¡ë²í¸ ì²´í¬ í¨ì
function rcnoCheck(rcno1, rcno2) {
  var Yn = true;
  var valueData;
  if (rcno2 != "") {
    valueData = "rcno1=" + rcno1 + "&_E2E123_rcno2=" + rcno2;
  } else {
    valueData = "_E2E123_rcno1=" + rcno1;
  }

  //	var frmData = GatherValueEach(valueData);

  $.ajax({
    type: "POST",
    async: false,
    url: "/check/RcnoCheck.do",
    dataType: "json",
    timeout: 30000,
    data: valueData,
    //	    data:frmData, // NA // data:"INIpluginData="+URLEncode(EncParams(frmData)),
    error: function (request, status, error) {
      fnAjaxError();
      $.unblockUI();
      return false;
    },
    success: function (response, status, request) {
      if (response.sysCode == "1") {
        alert(response.sysMsg);
        Yn = false;
      }
    },
    beforeSend: function () {},
    complete: function () {},
  });

  return Yn;
}

//ìí¸íë ê¸ì ê¸¸ì´ ì²´í¬
function stringLength(text) {
  var len = 0;

  len = text.length;

  //	var frmData = "strChk="+text ;
  //	frmData = GatherValueEach(frmData);
  //
  //	var len = 0;
  //	$.ajax({
  //		type: "POST",
  //	    async : false,
  //	    url: "/check/StringLength.do",
  //	    dataType:"json",
  //	    data:frmData,  // NA
  //	    timeout:30000,
  //	    //data:"_E2E123_strChk="+text,
  ////	    data:frmData, // NA // data:"INIpluginData="+URLEncode(EncParams(frmData)),
  //		error:function(request, status, error){
  //			fnAjaxError();
  //			$.unblockUI();
  //			return false;
  //		},
  //	    success: function(response, status, request ) {
  //			if(response.sysCode=='0'){
  //				len = response.sysLen;
  //			}
  //		}
  //		,beforeSend: function(){}
  //		,complete: function(){}
  //	});
  return len;
}

//ìí¸íë ìí¸ ì«ììë¬¸ì í¼í© ì²´í¬
function numCharCheck(text) {
  var yn = true;
  var frmData = "_E2E123_strChk=" + text;
  frmData = GatherValueEach(frmData);
  $.ajax({
    type: "POST",
    async: false,
    //2015.03.12
    //url: "/check/NumCharCheck.do",
    url: "/check/NumCharSpecialCheck.do",
    dataType: "json",
    timeout: 30000,
    data: frmData, // NA
    //	    data:frmData, // NA // data:"INIpluginData="+URLEncode(EncParams(frmData)),
    error: function (request, status, error) {
      fnAjaxError();
      $.unblockUI();
      return false;
    },
    success: function (response, status, request) {
      if (response.sysCode != "0") {
        yn = false;
        alert(response.sysMsg);
      }
    },
    beforeSend: function () {},
    complete: function () {},
  });
  return yn;
}

//ììì¼ ê°ì ¸ì¤ê¸°
function getBsopDate(type) {
  var date = "";
  $.ajax({
    type: "POST",
    async: false,
    url: "/comm/logn/BsopDate.do",
    dataType: "json",
    timeout: 30000,
    error: function (request, status, error) {
      fnAjaxError();
      $.unblockUI();
      return false;
    },
    success: function (response, status, request) {
      date = response.BsopDate;
    },
    beforeSend: function () {},
    complete: function () {},
  });
  if (date == "") {
    date = dateChange2(new Date().replace(/-/gi, ""));
  }
  if (type != undefined) {
    date =
      date.substring(0, 4) +
      type +
      date.substring(4, 6) +
      type +
      date.substring(6, 8);
  }
  return date;
}

//ììì  ì´í ìë¦¬ì ë²ë¦¼
//num: ëìì«ì, pos: í¬ë§ ììì  ì´íìë¦¬ì
function fixNumberCut(num, len) {
  var rslt = "";
  var ary = new Array();
  ary = num.split(".");

  var undot = "";
  try {
    if (len > ary[1].length) {
      undot = ary[1] + "";
    } else undot = ary[1].substring(0, len);
  } catch (E) {
    undot = "0";
  }

  if (num == "0" || num == "0." || num == "0.0" || num == "0.00") rslt = "0.00";
  else rslt = ary[0] + "." + undot;

  return rslt;
  //	return ary[0] + "." + ary[1].substring(0, len);
}
//wtsì© ê¸ìì¨ì§ëê±° ë°©ì§
function wtsMainSetFocus() {
  $("#fastSrchKeyword").focus();
}

//ì¸ììì dnê° ê°ì ¸ì¤ê¸°
function sessionGetDn() {
  var dn = "";
  $.ajax({
    type: "POST",
    async: false,
    url: "/pbcr/DnData.do",
    dataType: "json",
    timeout: 30000,
    error: function (request, status, error) {
      fnAjaxError();
      $.unblockUI();
      return false;
    },
    success: function (response, status, request) {
      dn = response.DnData;
    },
    beforeSend: function () {},
    complete: function () {},
  });
  return dn;
}

//ìë°ì¤í¬ë¦½í¸ ì ê·ì í¹ìë¬¸ì ì ê±°íê¸°
function specialCodeRemove(obj) {
  var val = obj.value;
  var pattern = /[^(ê°-í£ã±-ãã-ã£a-zA-Z0-9|., )]/gi;
  if (pattern.test(val)) {
    obj.value = val.replace(pattern, "");
  }
}

// ì ì²´ ë³´ì ëª¨ë ActiveX ì¤ì¹ íì¸ í íë©´ ì´ëì© (íë©´ ì¬ì©)
function fnCommonCheckSecuAXFromView() {
  // ë³´ìëª¨ë ì¤ì¹ íí©
  var sa = fnCommonCheckSecuModule();
  //	alert(sa[0] + ":" + sa[1] + ":" + sa[2] + ":" + sa[3]);
  if (!(sa[0] == "Y" && sa[1] == "Y" && sa[2] == "Y" && sa[3] == "Y")) {
    var turl = "tURL=" + location.href;
    //		var pss1 = "&PSS1=" + sa[0];
    //		var pss2 = "&PSS2=" + sa[1];
    //		var pss3 = "&PSS3=" + sa[2];
    //		var pss4 = "&PSS4=" + sa[3];
    location = "http://home.imeritz.com/comm/logn/MainSecurities.jsp?" + turl;
    //+ pss1 + pss2 + pss3	+ pss4
    return;
  }
}

// ì ì²´ ë³´ì ëª¨ë ActiveX ì¤ì¹ íì¸
// ê²°ê³¼ : Array
function fnCommonCheckSecuModule() {
  var rarray = ["X", "X", "X", "X"];

  // nProtect AX ProgId
  if (fnCommonCheckProgID("npenkIEInstall5.npenkInstall5.1")) rarray[0] = "Y";
  else rarray[0] = "N";

  // í¤ë³´ë ë³´ì
  //	if (fnCommonCheckSCSKInstall())  rarray[1] = "Y";
  if (fnCommonCheckProgID("SCSK3.SCSK3Ctrl.1")) rarray[1] = "Y";
  else rarray[1] = "N";

  // INISafe 7.0 AX ProgId
  if (fnCommonCheckProgID("INISAFEWeb60.INISafe6Ctrl.1")) rarray[2] = "Y";
  else rarray[2] = "N";

  // ê³µì¸ì¸ì¦ì AX ProgId
  if (fnCommonCheckProgID("SKCOMMAX.SKCommAXCtrl.1")) rarray[3] = "Y";
  else rarray[3] = "N";

  return rarray;
}

//íë¡ê·¸ë¨ idë¡ ActiveX ì¤ì¹ íì¸
function fnCommonCheckProgID(progId) {
  var ret = false;
  try {
    var obj = new ActiveXObject(progId);
    if (obj) {
      ret = true;
    } else {
      ret = false;
    }
  } catch (e) {
    ret = false;
  }
  return ret;
}

//2nd. í¤ë³´ë ë³´ì ì¤ì¹ ì²´í¬
function fnCommonCheckSCSKInstall() {
  var ret = false;
  try {
    if (
      typeof document.secukey == "undefined" ||
      document.secukey.object == null
    )
      ret = false;
    else ret = true;
  } catch (e) {
    ret = false;
  }
  return ret;
}

// íë©´ ê³µíµ ë³ì
var commbankarray = new Array();

//Bank ì½ë, ëª ì´ê¸°í
function initBankCodeName() {
  $.ajax("/include/resource/comm/BankCodeName.xml", {
    type: "POST",
    dataType: "xml",
    success: function (xml) {
      $(xml)
        .find("block")
        .each(function () {
          if ($(this).attr("id") == "_OBCPP_CODE_015R_OutBlock1") {
            $(this)
              .find("r")
              .each(function (idx) {
                var bcObject = new Object();
                bcObject.BankCode = $(this).find("v").text().substring(0, 3);
                bcObject.BankName = $(this).find("v").text().substring(3);

                commbankarray[idx] = bcObject;
              });
          }
        });
    },
  });
}

//Bank ëª ê°ì ¸ì¤ê¸° ê³µíµArray ì´ì©
function fnGetCommBankName(BankCode0) {
  // ë°ì´í°ë¥¼ ë°ìì¤ì§ ìì ê²½ì°
  if (commbankarray == null || commbankarray.length == 0) {
    //		alert("ë°ì´í°ë¥¼ ë°ììµëë¤." + commbankarray.length);
    initBankCodeName();
  }

  for (var i = 0; i < commbankarray.length; i++)
    if (commbankarray[i].BankCode == BankCode0)
      return commbankarray[i].BankName;

  return "";
}

// Bank ì½ë, ëª Array ê°ì ¸ì¤ê¸°
function fnGetBankCodeName() {
  var bankcode0 = new Array();
  $.ajax("/include/resource/comm/BankCodeName.xml", {
    type: "POST",
    dataType: "xml",
    success: function (xml) {
      $(xml)
        .find("block")
        .each(function () {
          if ($(this).attr("id") == "_OBCPP_CODE_015R_OutBlock1") {
            $(this)
              .find("r")
              .each(function (idx) {
                var bcObject = new Object();
                bcObject.BankCode = $(this).find("v").text().substring(0, 3);
                bcObject.BankName = $(this).find("v").text().substring(3);

                bankcode0[idx] = bcObject;
              });
          }
        });
    },
  });
  return bankcode0;
}

//Bank ëª ê°ì ¸ì¤ê¸°
function fnGetBankName0(BankCode0, bankArray) {
  if (BankCode0 == null || BankCode0 == "") return "";
  if (bankArray == null || bankArray.length == 0) return "";

  for (var i = 0; i < bankArray.length; i++)
    if (bankArray[i].BankCode == BankCode0) return bankArray[i].BankName;

  return "";
}

// ëìì¼ YYYY-MMíìì¼ë¡ ë³ê²½
function fnFormYearMonth(yearmonth) {
  if (yearmonth == null || yearmonth == "" || yearmonth.length != 6) return "";

  return yearmonth.substring(0, 4) + "-" + yearmonth.substring(4);
}

// ì§ì  ëª ë°í
function fnGetBrName(code) {
  if (code == "1001") return "ììë¶";
  else if (code == "1002") return "ë°í¬ì§ì ";
  else if (code == "1005") return "ìëì§ì ";
  else if (code == "1006") return "ë¶ì°ì§ì ";
  else if (code == "1007") return "ì¸ì²ì§ì ";
  else if (code == "1008") return "ì²­ì£¼ì§ì ";
  else if (code == "1009") return "ê²½ì£¼ì§ì ";
  else if (code == "1010") return "ìê³µëì§ì ";
  else if (code == "1011") return "ë¶ê´ì§ì ";
  else if (code == "1013") return "ì°½ìì§ì ";
  else if (code == "1015") return "ëêµ¬ì§ì ";
  else if (code == "1017") return "ë¶ë¹ì§ì ";
  else if (code == "1018") return "ê´ì£¼ì§ì ";
  else if (code == "1020") return "ì¼ì°ì§ì ";
  else if (code == "1022") return "ëìë¬¸ì§ì ";
  else if (code == "1023") return "ì¢ë¡ì§ì ";
  else if (code == "1025") return "ììì§ì ";
  else if (code == "1026") return "ì ì£¼ì§ì ";
  else if (code == "1027") return "ëì¹ëì§ì ";
  else if (code == "1029") return "ê°ë¨ì¼í°ì§ì ";
  else if (code == "1030") return "ë¬´ì­ì¼í°ì§ì ";
  else if (code == "1031") return "ë©í¸ë¡ê¸ìµì¼í°ì§ì ";
  else if (code == "1032") return "ê°ìì§ì ";
  else if (code == "1034") return "ìêµ¬ì ì§ì ";
  else if (code == "1037") return "ì íµë¨ì§ì§ì ";
  else if (code == "1038") return "êµ­ë¯¼CyberCit";
  else if (code == "1040") return "ëê³¡ì§ì ";
  else if (code == "1044") return "ëì ì§ì ";
  else if (code == "1045") return "íë¼ìì§ì ";
  else if (code == "1047") return "ì°ë¦¬CyberCit";
  else if (code == "1048") return "ê´íë¬¸ì§ì ";
  else if (code == "1049") return "ë¶ì°CyberCit";
  else if (code == "1050") return "ì¨í°CyberCit";
  else if (code == "1051") return "ì¸íCyberCit";
  else if (code == "1052") return "ì íCyberCit";
  else if (code == "1053") return "ë¶ì°ì¤ìì§ì ";
  else if (code == "1054") return "ëêµ¬CyberCit";
  else if (code == "1055") return "ê°ë¨RITZCLUB";
  else if (code == "1056") return "íëCyberCit";
  else if (code == "1057") return "ì ì¤ì§ì ";
  else if (code == "1058") return "ë©ë¦¬ì¸ íìWMì¼í°";
  else if (code == "1059") return "Meritz Cafe ìë´ì­";
  else return "";
}

// ê³ ì§ êµ¬ë¶ ì½ë
function fnGetNticClsName(code) {
  var data = "";
  if (code == "0") data = "ì ìë¶";
  else if (code == "1") data = "ì°ì²´ë¶";
  else if (code == "2") data = "ëì´ë¶";
  else if (code == "3") data = "ììë¶(ê¸°í)";
  else if (code == "4") data = "ì²´ë©ë¶";
  else if (code == "9") data = "ìëì´ì²´ë¶";
  return data;
}

// ì ì²´ê³ì¢ë²í¸ë¥¼ xxxx-xxxx-xx íìì¼ë¡ ë³ííì¬ ë³´ì¬ì¤
function fnGetAcnoShowFormat(acno) {
  var sAcno = "";

  if (acno == null || acno == "" || acno.length != 10) return sAcno;

  try {
    sAcno =
      acno.substring(0, 4) +
      "-" +
      acno.substring(4, 8) +
      "-" +
      acno.substring(8);
  } catch (e) {
    return "-"; // ì¤ë¥ ë°ìì
  }

  return sAcno;
}

// ê°ì´ ìë ê²½ì° ì²´í¬ input box For Giro (input box idë¥¼ ììì¼ íë©° commonModalì´ ë¡ë© ëì´ ìì´ì¼ í¨.
function nullCheckInput(formid, id, title, item) {
  if (
    $("form#" + formid)
      .find("#" + id)
      .val() == null ||
    $("form#" + formid)
      .find("#" + id)
      .val() == "" ||
    $("form#" + formid)
      .find("#" + id)
      .val().length == 0
  ) {
    commModalPop(title, item + " ìë ¥í´ ì£¼ì¸ì.", "", "");
    $("form#" + formid)
      .find("#" + id)
      .focus();
    return false;
  }
  return true;
}
//  íê¸ ì²´í¬
function fnCheckExtKorAjax(checkKor) {
  var orgin = checkKor;
  var orginLen = getByteLength(checkKor);
  var rslt = "false";

  var frmData = "checkKor=" + checkKor + "&checkKorLen=" + orginLen;
  //		frmData = GatherValueEach(frmData);
  $.ajax({
    type: "POST",
    async: false,
    url: "/popup/CheckExpenstionKorean.do",
    dataType: "json",
    timeout: 300000,
    data: frmData, // NA
    //		    data:frmData, // NA // data:"INIpluginData="+URLEncode(EncParams(frmData)),
    error: function (request, status, error) {
      fnAjaxError();
      return "error";
    },
    success: function (response, status, request) {
      if (response.sysCode == "0") {
        rslt = response.sysMsg;
      } else {
        rslt = "error";
      }
    },
    beforeSend: function () {},
    complete: function () {},
  });

  return rslt;
}

// OCSP Full ìëªì©
function getFullSgntDataChck(
  signData,
  r,
  errorTitle,
  userId,
  rcno,
  username,
  acno,
  acntPwd
) {
  var id = "";
  if (userId != undefined) {
    id = "&id=" + userId;
  }
  //	if(userId != undefined) { id = "&id="+URLEncode(userId); }
  var yn = "N";
  //	var frmData =
  ////		"r="+URLEncode(r) + "&data="+URLEncode(signData)
  //		"r="+r + "&data="+signData
  //	+ "&username=" + URLEncode(username)
  //	+ "&acno=" + URLEncode(acno)
  //	+ id;
  //	if($("input[name=_ETEExt_SEED_]").val() ==  undefined) {
  //		// apië°©ìì ìëê°ì´ ìì¼ë©´ ìë¬ëë¤.
  //		// íë©´ì _ETEExt_SEED_ ê° ììê²½ì° _E2E123_ë¥¼ ì­ì íë¤.
  //		// _E2E123_ê° ìëë° ê³µë°±ì¼ë¡ ëì´ê°ëê²½ì°
  //		frmData = frmData
  //		+ "&rcno=" + URLEncode(rcno)
  //		+ "&acntPwd=" + URLEncode(acntPwd);
  //	} else {
  //		frmData = frmData
  //		+ "&_E2E123_rcno=" + URLEncode(rcno)
  //		+ "&_E2E123_acntPwd=" + URLEncode(acntPwd)
  //		+ "&_ETEExt_SEED_="+URLEncode($("input[name=_ETEExt_SEED_]").val());
  //	}

  var frmData =
    //		"r="+URLEncode(r) + "&data="+URLEncode(signData)
    "r=" +
    r +
    "&data=" +
    signData +
    "&username=" +
    username +
    "&acno=" +
    acno +
    id;
  if (acntPwd != "") {
    frmData +=
      "&_E2E123_acntPwd=" +
      acntPwd +
      "&1_ETEExt_SEED_=" +
      $("input[name=1_ETEExt_SEED_]").val();
  }

  $.ajax({
    type: "POST",
    async: false,
    url: "/ocsp/FullSgntDataChck.do",
    dataType: "json",
    timeout: 30000,
    data: frmData, // NA
    //		data:frmData, // NA // data:"INIpluginData="+URLEncode(EncParams(frmData)),
    error: function (request, status, error) {
      fnAjaxError();
    },
    success: function (response, status, request) {
      if (response.sysCode == "0") {
        yn = "Y";
      } else {
        commModalPop(
          errorTitle,
          response.sysMsg,
          response.sysSubMsg,
          response.sysMsgCode
        );
      }
    },
    beforeSend: function () {
      $.blockUI({});
    },
    complete: function () {
      $.unblockUI();
    },
  });

  return yn;
}

//htsë¤ì´ë¡ë íì¼ ê³µíµ ì²ë¦¬ë¥¼ ìí ê³µíµí¨ì
function downloadHTSClient() {
  location.href =
    "http://home.imeritz.com/include/resource/htsdown/iMeritzXII.exe";
}

// ì ì²´ê³ì¢ë²í¸ë¥¼ xxxx-xxxx-xx íìì¼ë¡ ë³ííì¬ ë³´ì¬ì¤ 2015.09.24
function fnGetAcnoShowFormatAndMask(acno) {
  var sAcno = "";

  if (acno == null || acno == "" || acno.length != 10) return sAcno;

  try {
    sAcno =
      acno.substring(0, 4) +
      "-***" +
      acno.substring(7, 8) +
      "-" +
      acno.substring(8);
  } catch (e) {
    return "-"; // ì¤ë¥ ë°ìì
  }

  return sAcno;
}

//ì¢í©ê³ì¢ë²í¸ë¥¼ xxxx-xxxx íìì¼ë¡ ë³ííì¬ ë³´ì¬ì¤
function fnGetAcnoShowMultiFormat(acno) {
  var sAcno = "";

  if (acno == null || acno == "") return sAcno;
  if (acno.length != 8 && acno.length != 10) return acno;

  try {
    if (acno.length == 8)
      sAcno = acno.substring(0, 4) + "-" + acno.substring(4, 8);
    if (acno.length == 10)
      sAcno =
        acno.substring(0, 4) +
        "-" +
        acno.substring(4, 8) +
        "-" +
        acno.substring(8);
  } catch (e) {
    return acno; // ì¤ë¥ ë°ìì
  }

  return sAcno;
}

var signedData4CMS = "";
var signedData4CMSTemp = "a";
var signedData4CMSsize = 0;

//âì¸ì¦ì ì íì°½ ì¶ë ¥ , í¨ì¤ìëê¹ì§ ìë ¥(ë¡ê·¸ì¸ íìì) + CMSì¸ì¦
//srcFormId : ìì¤ ë°ì´í°ë¥¼ ì ì¡í  ë°ì´í°ë¥¼ ë´ì Form ID  (ìì¤ì»¬ë¼ê³¼ ì¬ì¸ì»¬ë¼ì´ íìí¨.)
//ì±ê³µíë©´ Y ì¤í¨íë©´ N
function loginSignKoreaCMSProof(
  errorTitle,
  targetData,
  callback,
  param,
  callbackFailure
) {
  signedData4CMS = "";
  signedData4CMSsize = 0;

  var dn = sessionGetDn();

  //ê³µì¸ì¸ì¦ ë¹ë°ë²í¸ íìì´ê³¼ ì²´í¬ í¨ì
  //ë¹ë°ë²í¸ íë¦°íìê° 7ë² ì´ìì´ë©´ ì¬ì©ë¶ê°
  var nFailedCount = getPbcrPwdMstkTmnu(); //ì¤í¨ íê³  ìë íìë¥¼ ì²´í¬ í©ëë¤.
  if (pbrcPwdErrorCheck(nFailedCount, errorTitle) == "N") {
    return "N";
  }

  //ê³µì¸ì¸ì¦ objectì¶ê°
  CertManX = ytMain;

  if (!CertManX.SetPolicyFilter(0, "")) {
    alert("[" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
    return;
  }

  /*=======================================================================
	ì¸ì¦ì ì í í¨ì ìëë¤. ë¹ë°ë²í¸ ì¤ë¥ íì ì²ë¦¬ì ê´í ìì  ìëë¤.
	=======================================================================*/

  var nMaxCount = 6; //ì´ 1ë²ì ì¤ë¥ ë¹ë° ë²í¸ ìë ¥ ì í
  var nErrCode;
  var strErrMsg;
  var strSignData;
  var strRet;
  var plainText;
  var r;
  var signData;

  try {
    //		while(nFailedCount <= nMaxCount)
    //		{

    //ì¸ì¦ì ì í ì ë³´ë¥¼ ì´ê¸°í í´ì¤ëë¤.
    CertManX.UnSetMatchedContext(function () {
      //íë¦° ë¹ë°ë²í¸ ìë ¥ì¬ë¶
      CertManX.SetWrongPasswordLimit(1);

      //ì¸ì¦ì ê²ì ì°ì ìì
      CertManX.SetDeviceOrder("RHSU");

      //ì¸ì¦ì ì í í¨ì ìëë¤.
      CertManX.SetMatchedContextExt(dn, "", "", 256 + 0 + 0, function (strRet) {
        //ì í í¨ìì ìë¬ ì ì²ë¦¬ ë¸ë­
        if (strRet == "") {
          nErrCode = CertManX.GetLastErrorCode();
          strErrMsg = CertManX.GetLastErrorMsg();

          //ì ì ìëª ë¹ë°ë²í¸ ì¤ë¥ ì½ë ìëë¤.
          if (nErrCode == 2417) {
            //setPbcrPwdFail(nFailedCount,"N")
            //ë¹ë°ë²í¸ê° íë ¸ìê²½ì° ê³µì¸ì¸ì¦ ë¹ë°ë²í¸ ì¤ë¥íì TRíì´ë¤ ì¦ê°í ê°ì ë¦¬í´ë°ì
            nFailedCount = setPbcrPwdFail(nFailedCount, "N");
            alert(
              "ì¸ì¦ë¹ë°ë²í¸[" +
                nFailedCount +
                "]í ì¤ë¥ìëë¤ 7í ì¤ë¥ì ì¬ë°ê¸ ë°ì¼ìì¼ ë©ëë¤."
            ); //ê³µì¸ì¸ì¦ ë¹ë°ë²í¸ íìì´ê³¼ ì²´í¬ í¨ì
            if (pbrcPwdErrorCheck(nFailedCount, errorTitle) == "N") {
              return "N";
            }
          }
          //ë¹ë°ë²í¸ ì¤ë¥ ì¸ì ë¤ë¥¸ ìë¬ë¥¼ ì²ë¦¬ íë ë¶ë¶ ìëë¤.
          else {
            alert("ìë¬ ì½ë : " + nErrCode + "\nìë¬ ë©ì¸ì§ : " + strErrMsg);
            return;
          }
        } else {
          /*=======================================================================
				ìëª í¨ì ìëë¤.
				ì´ë¯¸ì§ ì¤ì ê³¼ ì ì± íí°ë§ì íµíì¬ ì íë ì¸ì¦ìë¡ ìëªì í©ëë¤.
				=======================================================================*/
          plainText = getPbrcId();

          CertManX.SignDataB64("", plainText, 1, function (strSignData) {
            //dataê°
            signData = CertManX.GetToken(strSignData, "data");

            //rê°
            r = CertManX.GetToken(strSignData, "r");

            //ì¸ì¦ì ì í í¨ì ìëë¤.
            CertManX.SetMatchedContextExt(dn, "", "", 256 + 0 + 0, function (
              strRet
            ) {
              //						// ìëªê° ë°ì´í¸ íì¸ í ìëªê° ì ì¥
              CertManX.SignDataB64("", targetData, 0, function (
                signedData4CMS
              ) {
                signedData4CMS = signedData4CMS.replace(/(\s*)/g, "");
                signedData4CMS = signedData4CMS.replace(/\n/g, ""); // íë°ê¿ ì ê±°
                signedData4CMS = signedData4CMS.replace(/\r/g, ""); // ìí° ì ê±°

                /*2016.12.14 ì¤íì ì¶ê°*/
                signedData4CMSTemp = signedData4CMS;
                signedData4CMSTemp = signedData4CMSTemp.replace(/(\s*)/g, "");
                signedData4CMSTemp = signedData4CMSTemp.replace(/\n/g, ""); // íë°ê¿ ì ê±°
                signedData4CMSTemp = signedData4CMSTemp.replace(/\r/g, ""); // ìí° ì ê±°

                signedData4CMSsize = getByteLength(signedData4CMS);

                //dataê°
                //								signData = CertManX.GetToken(strSignData,"data");

                //rê°
                //								r = CertManX.GetToken(strSignData,"r");

                // OCSP ë¹ë¡ê·¸ì¸ ìëª 2014.05.20
                //							if (getFullSgntDataChck(encodeURIComponent(signData.replace(/\n/gi,"")),encodeURIComponent(r)
                //									,errorTitle, plainText
                //									,"", ""
                //									,"","")=="Y") {
                //							} else {
                //								return;
                //							}
                // OCSP ë¹ë¡ê·¸ì¸ ìëª 2014.05.20 END

                // ê¹ë¨ì ìì ìë£
                if (strSignData == "") {
                  alert(
                    "[" +
                      CertManX.GetLastErrorCode() +
                      "]" +
                      CertManX.GetLastErrorMsg()
                  );
                  return;
                }
                setPbcrPwdFail(getPbcrPwdMstkTmnu(), "Y"); //ê³µì¸ì¸ì¦ ì¤ë¥ íì ì´ê¸°í
                //ë¹ë°ë²í¸ ì¤ë¥íì ì´ê¸°í
                // ì½ìë í¨ìë¡ return
                // ê²°ê³¼ê°ì´ Yì¸ ê²½ì°
                if (
                  getPbcrSgntDataChck(
                    encodeURIComponent(signData.replace(/\n/gi, "")),
                    encodeURIComponent(r),
                    errorTitle,
                    plainText
                  ) == "Y"
                ) {
                  if (param == null || param == undefined || param == "")
                    callback();
                  else callback(param);
                } else {
                  callbackFailure();
                }
              });
            });
          });
          //				break;
        }
      });
    });
    //		}//end while

    //ëª¨ë  ê¸°ë¥ì´ ëë ë¤ì ì´ê¸°í ì¤ì ì¼ë¡ í¨ìë¤ì í¸ì¶í´ ì¤ëë¤.
    /*=======================================================================
		ì¤ì  ì´í ë¤ë¥¸ ì¸ì¦ì ì í ì°½ íì´ì§ìë ìí¥ì ë¼ì¹ ì ìì¼ë¯ë¡, íí°ë§ì´ ëë íìë 
		ë°ëì ê¸°ë³¸ ì¤ì ì¼ë¡ ë¤ì íë² í¨ìë¥¼ í¸ì¶í´ ì£¼ìì¼ í©ëë¤.
		=======================================================================*/

    //		CertManX.SetPolicyFilter(0, "");
    //		CertManX.UnsetMatchedContext();
    //		CertManX.SetLogoFile("");

    //ì´íìë strSignData ë¥¼ ë¡ê·¸ì¸ ìë¸ë¦¿ì¼ë¡ ë³´ë´ë ììì ì§í
  } catch (e) {}
  //ë¹ë°ë²í¸ ì¤ë¥íì ì´ê¸°í
  //	setPbcrPwdFail(nFailedCount,"Y");
  //
  //	return getPbcrSgntDataChck(encodeURIComponent(signData.replace(/\n/gi,"")),encodeURIComponent(r),errorTitle,plainText);
}

// URL check ë¤ë¥¸ ííì´ì§ ì´ëì ë°©ì´ë¡ì§ ì¶ê°
function fnCheckSubUrl(tUrl) {
  if (tUrl == null || tUrl == "") {
    return true;
  } else if (
    tUrl.indexOf("http://") == 0 ||
    tUrl.indexOf("https://") == 0 ||
    tUrl.indexOf("www.") == 0
  ) {
    alert("ì´ë ì£¼ìê° ë³ì¡°ëììµëë¤.(ìë³ì¡° ë°©ì§)");
    return false;
  } else {
    return true;
  }
}
/*
page: http://www.imeritz.com/
url: http://home.imeritz.com/include/js/comm/common/common.js
*/
