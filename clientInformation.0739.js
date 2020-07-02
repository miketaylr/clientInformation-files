/*
	ì¹íë ì ì© ìë°ì¤í¬ë¦½í¸ 
	
	ë§ì§ë§ ìì ì¼ : 2005-11-25 by mmsv
*/

var contorl_check = false;
var flash_path_xp = "/mmsv/windowxp.swf";
var flash_path_ot = "/mmsv/windowot.swf";
var Name_Insert_Form = "mmsvFormWrite";
var Name_Transe_Form = "mmsvFormTrans";

var userAgent2 = navigator.userAgent.toLowerCase();

var mac2 = /macintosh/.test(userAgent2);
var firefox2 = /firefox/.test(userAgent2);
var chrome2 = /chrome/.test(userAgent2);
var msie2 = /trident|msie/.test(userAgent2);
var edge = /Edge|edge/.test(userAgent2);

if (
  document.location.pathname == "/" ||
  document.location.pathname == "/index.php"
)
  var v_main = 1;
else var v_main = 0;

var obj_markup = "";

if (mac2) {
  document.write('<OBJECT ID="WebCtrl"  ');
  obj_markup += '<OBJECT ID="WebCtrl" ';
} else {
  document.write('<OBJECT ID="WebCtrl" TYPE="application/x-itst-activex" ');
  obj_markup += '<OBJECT ID="WebCtrl" TYPE="application/x-itst-activex" ';
}

if (msie2) {
  document.write('CLASSID="CLSID:EF3AFB74-6F3C-491f-8FF2-FBEC88ADEBE5" ');
  obj_markup += 'CLASSID="CLSID:EF3AFB74-6F3C-491f-8FF2-FBEC88ADEBE5" ';
} else if (!(firefox2 || chrome2)) {
  document.write('CLASSID="CLSID:EF3AFB74-6F3C-491f-8FF2-FBEC88ADEBE5" ');
  obj_markup += 'CLASSID="CLSID:EF3AFB74-6F3C-491f-8FF2-FBEC88ADEBE5" ';
} else {
  document.write('clsid="{EF3AFB74-6F3C-491f-8FF2-FBEC88ADEBE5}" ');
  obj_markup += 'clsid="{EF3AFB74-6F3C-491f-8FF2-FBEC88ADEBE5}" ';
}

var is64b = false;
if (
  window.navigator.cpuClass != null &&
  window.navigator.cpuClass.toLowerCase() == "x64"
)
  is64b = true;
if (!is64b && window.navigator.platform.toLowerCase() == "win64") is64b = true;
if (
  (!is64b && navigator.userAgent.indexOf("WOW64") != -1) ||
  navigator.userAgent.indexOf("Win64") != -1
)
  is64b = true;

if (firefox2 || chrome2) {
  var isPlugin = navigator.plugins["ActiveX hosting plugin for Firefox"];
  var isPlugin2 = navigator.plugins["ActiveX hosting plugin for NPAPI"];
}

if (isPlugin) {
  if (is64b == true) {
    document.write('CODEBASE="/app/KiwidiskCtrl_x64.CAB#version=3,0,4,0" ');
    obj_markup += 'CODEBASE="/app/KiwidiskCtrl_x64.CAB#version=3,0,4,0" ';
  } else {
    document.write('CODEBASE="/app/KiwidiskCtrl.CAB#version=3,0,4,0" ');
    obj_markup += 'CODEBASE="/app/KiwidiskCtrl.CAB#version=3,0,4,0" ';
  }
} else {
  if (firefox2) {
    document.write(
      'CODEBASE="http://' + script_Domain + '/app/KiwidiskPlugins.exe" '
    );
    obj_markup +=
      'CODEBASE="http://' + script_Domain + '/app/KiwidiskPlugins.exe" ';
  }
}

document.write('Width="0" Height="0">');
document.write("</OBJECT>");

obj_markup += 'Width="0" Height="0"></OBJECT>';

// ì ì¡ë´ë¹ ìì´íë ì

if (msie2 && !v_main) {
  if (
    typeof window.external.msActiveXFilteringEnabled != "undefined" &&
    window.external.msActiveXFilteringEnabled() == true
  ) {
    //top.location.href="http://"+script_Domain+"/cust/faq.php?pg_mode=view&list_count=0&code=support&category=&start=0&idx=30138";
    top.location.href =
      "http://" +
      script_Domain +
      "/cust/faq.php?pg_mode=view&list_count=0&code=faq&category=&start=0&idx=70294";
  }
}

/* chrome test code start : code remove */
if (!isPlugin2 && !isPlugin) {
  //if(!msie2 && !mac2 && firefox2) top.location.href="http://"+script_Domain+"/cust/install.php?pg_mode=win_firefox";		/*  ì ê±° */
  //if(!msie2 && !mac2 && chrome2) top.location.href="http://"+script_Domain+"/cust/install.php?pg_mode=win_chrome";			/*  ì ê±° */
}
/* chrome test code end : code remove */

//if(chrome2&&!isPlugin && !mac2) alert('http://www.kiwidisk.com/app/KiwidiskPlugins.exe not installed. Please install or  reinstall');

if (firefox2) {
  document.write(
    '<iframe name="mmsvIFrame" width="0" height="0" src="about:blank"></iframe>'
  );
  obj_markup +=
    '<iframe name="mmsvIFrame" width="0" height="0" src="about:blank"></iframe>';
} else {
  document.write(
    '<iframe name="mmsvIFrame" width="0" height="0" src="about:blank" style=display:none;></iframe>'
  );
  obj_markup +=
    '<iframe name="mmsvIFrame" width="0" height="0" src="about:blank" style=display:none;></iframe>';
}

var mmsv_create_frame = function (obj_markup) {
  jQuery("body").find("object#WebCtrl").remove();
  jQuery("body").find("iframe[name=mmsvIFrame]").remove();
  jQuery("body").append(obj_markup);
};

/* ### ê¸ë³´ê¸° íì´ì§ìì ìëì¼ë¡ ëª¨ë  ìì´í ì íë ìíë¥¼ ìí ë ì ì¼ ë°ë¶ë¶ ëë OnLoad()ìì í¸ì¶
<script language="javascript">
	mmsv_checkAll(true);
</script>
*/

function mmsv_check() {
  var userAgent = navigator.userAgent.toLowerCase();
  var msie_old = /msie/.test(userAgent) && !/opera/.test(userAgent);
  var msie = /trident/i.test(userAgent) && !/opera/.test(userAgent);
  var firefox = /firefox/.test(userAgent) || /chrome/.test(userAgent);

  if (firefox) {
    return 1;
  }

  if (!msie && !msie_old) return;

  try {
    WebCtrl.CheckInstall();
    return true;
  } catch (e) {
    if (contorl_check) return;

    contorl_check = true;

    var f_path = "";

    if (mmsv_IsWinXPSP2()) f_path = flash_path_xp;
    else f_path = flash_path_ot;

    location.href = "/app/active_install.php";
    ControlCall();
    return false;
  }
  return true;
}

function ControlCall() {
  try {
    WebCtrl.CheckInstall();

    if (contorl_check) document.all.DIV_CONTROL.style.display = "none";

    contorl_check = false;

    return true;
  } catch (e) {
    setTimeout("ControlCall()", 300);
  }
}

function mmsv_IsWinXPSP2() {
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

/* íìê¸° ì¤í */
function mmsv_explorer_launcher(userid, userpw) {
  if (!mmsv_check()) return;

  WebCtrl.LauncherExplorer(userid, userpw);
  return;
}

/* ì¹ë§í¬ ì¶ê° */
function mmsv_explorer_weblink(userid, userpw, weblink) {
  if (!mmsv_check()) return true;

  var nResult = parseInt(WebCtrl.LauncherWebLink(userid, userpw, weblink));

  if (nResult) {
    return true;
  } else {
    return false;
  }
}

/* #### ìë¡ë ìì´í ìì± ë£¨í´ ### */

/* ìë¡ë ìì´í ì¶ê° ì´ê¸°í */
function mmsv_bbs_upload_init(sBoardNo, sId, sPw) {
  //( sBoardNo, sUserId, sUserPw )//add yihym  sUpload_type = ìë¡ë íì S=ê³ ì, P=ì¼ë°
  if (!sBoardNo || !sId || !sPw) {
    alert(sBoardNo + "|" + sId + "|" + sPw);
    return;
  }

  if (!mmsv_check()) return;
  WebCtrl.UpLoadInit(sBoardNo, sId, sPw);
  return;
}

/* ìë¡ë ìì´í ì¶ê° */
function mmsv_bbs_upload_item(item, area) {
  if (!item) {
    alert(item);
    return;
  }

  if (!mmsv_check()) return;

  WebCtrl.UpLoadInfo(item, area);

  return;
}

/* ìë¡ë ìì´í ì¶ê° ìë£ */
function mmsv_bbs_upload_end(sBoardNo) {
  if (!sBoardNo) {
    alert(sBoardNo);
    return;
  }

  if (!mmsv_check()) return;

  WebCtrl.UpLoadEnd(sBoardNo);
  return;
}

/* #### ë¤ì´ë¡ë ìì´í ìì± ë£¨í´ ### */

/* ë¤ì´ë¡ë ìì´í ì¶ê° ì´ê¸°í */
/* ë¤ì´ë¡ë ìì´í ì¶ê° ì´ê¸°í */
function mmsv_bbs_download_init(sBoardNo, sId, sPw) {
  //( sBoardNo, sUserId, sUserPw )
  /* chrome test code start : ì½ë ì¶ê° */
  if (!isPlugin2 && !isPlugin) {
    if (!msie2 && !mac2 && firefox2)
      top.location.href =
        "http://" + script_Domain + "/cust/install.php?pg_mode=win_firefox";
    if (!msie2 && !mac2 && chrome2)
      top.location.href =
        "http://" + script_Domain + "/cust/install.php?pg_mode=win_chrome";
  }
  /* chrome test code end : ì½ë ì¶ê° */

  if (sPw.length < 40) {
    alert(
      "ë³ê²½ë ë°ì´í°ë² ì´ì¤ìì íµì ì ì¤í¨íì¿ìµëë¤.\n\nì¹ ëë í´ë½ìì ë¤ì ë¡ê·¸ì¸ íì  í ì´ì©í´ ì£¼ì¸ì"
    );
    return;
  }

  if (!sBoardNo || !sId || !sPw) {
    alert(sBoardNo + "<>" + sId + "<>" + sPw);
    return;
  }
  if (!mmsv_check()) return;
  WebCtrl.DownLoadInit(sBoardNo, sId, sPw);
  return;
}

/* ë¤ì´ë¡ë ìì´í ì¶ê° */
function mmsv_bbs_download_item(item, path, strSize, mode) {
  if (!item || !path) {
    alert(item + "|" + path);
    return;
  }
  if (!mmsv_check()) {
    return;
  }

  WebCtrl.DownLoadInfo(item, path, strSize, mode);
  return;
}

/* ë¤ì´ë¡ë ìì´í ì¶ê° ìë£ */
function mmsv_bbs_download_end(sBoardNo) {
  if (!sBoardNo) {
    alert(sBoardNo);
    return;
  }

  if (!mmsv_check()) {
    return;
  }

  WebCtrl.DownLoadEnd(sBoardNo);
  return;
}

/* ë¤ì´ë¡ë ìì´í ì¶ê° ìë£ */
function game(sId, sPw, key) {
  if (!sId || !sPw) {
    alert(sPw + "|" + sPw);
    return;
  }

  if (!mmsv_check()) {
    return;
  }

  WebCtrl.RunGame(sId, sPw, key);
  return;
}

/* #### ì ì¡ìì´í ê´ë ¨ ë£¨í´ ### */

/* ì íë ìì´í ê°¯ì */
function mmsv_checkCountSet() {
  var count = 0;
  var size = 0;
  var form = document[Name_Transe_Form];

  // í´ë ì²´í¬
  var chkBox_foloer = form.elements["mmsv_trans_folder"];
  var chkLen_folder = chkBox_foloer.length;

  if (!chkLen_folder) {
    if (chkBox_foloer.checked && chkBox_foloer.value != "") count++;
  } else {
    for (i = 0; i < chkLen_folder; i++) {
      if (chkBox_foloer[i].checked && chkBox_foloer[i].value != "") count++;
    }
  }

  // íì¼ ì²´í¬
  var chkBox_file = jQuery('input[name="mmsv_trans_file"]:checkbox');
  var chkLen_file = chkBox_file.length;

  if (!chkLen_file) {
    if (chkBox_file.checked && chkBox_file.value != "") {
      count++;
      size += parseInt(chkBox_file.op_flag);
    }
  } else {
    chkBox_file.each(function (i) {
      if (jQuery(this).attr("checked") && jQuery(this).val() != "") {
        count++;
        size += parseInt(jQuery(this).attr("op_flag"));
      }
    });
  }

  jQuery("#checkCount").text(count);
  jQuery("#checkSize").text(parseSize(size, 1));
}

/* ì íë ìì´í ê°¯ì */
function mmsv_checkCountSet_2() {
  var count = 0;
  var size = 0;
  var form = document[Name_Transe_Form];

  // í´ë ì²´í¬
  var chkBox_foloer = form.elements["mmsv_trans_folder_2"];
  var chkLen_folder = chkBox_foloer.length;

  if (!chkLen_folder) {
    if (chkBox_foloer.checked && chkBox_foloer.value != "") count++;
  } else {
    for (i = 0; i < chkLen_folder; i++) {
      if (chkBox_foloer[i].checked && chkBox_foloer[i].value != "") count++;
    }
  }

  // íì¼ ì²´í¬
  var chkBox_file = form.elements["mmsv_trans_file_2"];
  var chkLen_file = chkBox_file.length;

  if (!chkLen_file) {
    if (chkBox_file.checked && chkBox_file.value != "") {
      count++;
      size += parseInt(chkBox_file.op_flag);
    }
  } else {
    for (i = 0; i < chkLen_file; i++) {
      if (chkBox_file[i].checked && chkBox_file[i].value != "") {
        count++;
        size += parseInt(chkBox_file[i].op_flag);
      }
    }
  }

  document.all.checkCount_2.innerHTML = count;
  document.all.checkSize_2.innerHTML = parseSize(size, 1);
}

/* ì ì¡ìì´í ì²´í¬ë°ì¤ í´ë¦­(í´ë) */
function mmsv_checkFolder(obj) {
  var chkBox = obj.form.elements["mmsv_trans_folder"];
  var chkLen = chkBox.length;

  if (!chkLen) {
    if (chkBox.value.indexOf(obj.value) >= 0) chkBox.checked = obj.checked;
  } else {
    for (i = 0; i < chkLen; i++) {
      if (chkBox[i].value.indexOf(obj.value) >= 0)
        chkBox[i].checked = obj.checked;
    }
  }

  var chkBox = obj.form.elements["mmsv_trans_file"];
  var chkLen = chkBox.length;

  if (!chkLen) {
    temp = chkBox.value.split("|");
    if (temp[0].indexOf(obj.value) >= 0) chkBox.checked = obj.checked;
  } else {
    for (i = 0; i < chkLen; i++) {
      temp = chkBox[i].value.split("|");
      if (temp[0].indexOf(obj.value) >= 0) chkBox[i].checked = obj.checked;
    }
  }

  mmsv_checkCountSet();
}

function mmsv_checkFolder_2(obj) {
  var chkBox = obj.form.elements["mmsv_trans_folder_2"];
  var chkLen = chkBox.length;

  if (!chkLen) {
    if (chkBox.value.indexOf(obj.value) >= 0) chkBox.checked = obj.checked;
  } else {
    for (i = 0; i < chkLen; i++) {
      if (chkBox[i].value.indexOf(obj.value) >= 0)
        chkBox[i].checked = obj.checked;
    }
  }

  var chkBox = obj.form.elements["mmsv_trans_file_2"];
  var chkLen = chkBox.length;

  if (!chkLen) {
    temp = chkBox.value.split("|");
    if (temp[0].indexOf(obj.value) >= 0) chkBox.checked = obj.checked;
  } else {
    for (i = 0; i < chkLen; i++) {
      temp = chkBox[i].value.split("|");
      if (temp[0].indexOf(obj.value) >= 0) chkBox[i].checked = obj.checked;
    }
  }

  mmsv_checkCountSet_2();
}

/* ì ì¡ìì´í ì²´í¬ë°ì¤ í´ë¦­(íì¼) */
function mmsv_checkFile() {
  mmsv_checkCountSet();
}

/* ì ì¡ìì´í ì²´í¬ë°ì¤ í´ë¦­(íì¼) */
function mmsv_checkFile_2() {
  mmsv_checkCountSet_2();
}
/* ì ì¡ìì´í íì¼ì´ íë ì´ì ì íëìëì§ ì²´í¬ */
function mmsv_isChecked() {
  var form = document[Name_Transe_Form];
  var chkBox = form.elements["mmsv_trans_file"];
  var chkLen = chkBox.length;

  // ì íë íì¼ì´ ìëì§ ì²´í¬
  if (!chkLen) {
    if (chkBox.checked) return true;
    else return false;
  } else {
    for (i = 0; i < chkLen; i++) {
      if (chkBox[i].checked) return true;
    }
    return false;
  }
}
/* ì ì¡ìì´í ë¤ì´ë¡ë */
function mmsv_downloadFile() {
  var form = document[Name_Transe_Form];

  if (mmsv_isChecked()) {
    mmsv_Trans_Make();
    form.pg_mode.value = "mmsv_down";
    form.submit();
  } else {
    alert(
      "ë¤ì´ ë°ì¼ì¤ íì¼ì ì ííì¸ì.\nìë¡ëê° ìë£ ëì§ ìì íì¼ì ì ííìë ë¤ì´ ë°ì¼ì¤ ì ììµëë¤."
    );
  }
}

/* chrome test code start : code ì¶ê° */
/* ìë¹ì¤ê° ì¤ì¹ë¼ì´ ìëì§ ì²´í¬íë í¨ì*/
function mmsv_plugin_check() {
  for (index = 0; index < 1; ++index) {
    // port : 50001 : www.kiwidisk.com
    // port : 50002 : www.fios.kiwidisk.com
    $.support.cors = true;
    jQuery.ajax({
      url: "http://127.0.0.1:50001",
      dataType: "text",
      type: "POST",
      timeout: 1000,
      success: function (data) {
        //alert('succ' + data);
        var data_split = data.split("&");
        if (data_split[0] == "ok") {
          result_my = "succ";
        }
      },
      error: function (request, status, error) {
        result_my = "fail";
      },

      async: false,
    });

    if (result_my == "succ") {
      return true;
      break;
    }
  }
  if (result_my != "succ") {
    return false;
  }
}

function mmsv_down_chrome_test() {
  sh = document.styleSheets[0];
  if (sh.insertRule) {
    sh.insertRule("* {cursor: wait !important}", 0);
  } else {
    if (sh.addRule) {
      sh.addRule("*", "cursor: wait !important", 0);
    }
  }

  if (!mmsv_plugin_check()) {
    $("#chrome_display").show();
    if (sh.insertRule) sh.deleteRule(0);
    if (sh.addRule) sh.removeRule(0);
    return;
  }

  if (mac2) {
    alert("íì¬ New Downì Windowììë§ ì¬ì©ì´ ê°ë¥í©ëë¤.");
    return;
  }

  var form = document[Name_Transe_Form];

  if (mmsv_isChecked()) {
    mmsv_Trans_Make();
    form.pg_mode.value = "mmsv_down_chrome";
    form.action = "/club/basic/bbs.php";
    form.submit();
    if (sh.insertRule) window.setTimeout("sh.deleteRule(0)", 2000);
    if (sh.addRule) window.setTimeout("sh.removeRule(0)", 2000);
  } else {
    if (sh.insertRule) sh.deleteRule(0);
    if (sh.addRule) sh.removeRule(0);
    alert(
      "ë¤ì´ ë°ì¼ì¤ íì¼ì ì ííì¸ì.\nìë¡ëê° ìë£ ëì§ ìì íì¼ì ì ííìë ë¤ì´ ë°ì¼ì¤ ì ììµëë¤."
    );
  }
}
/* chrome test code end : code ì¶ê° */

/* ver2.0 ì ì¡ìì´í ë¤ì´ë¡ë */
function mmsv_downloadFile2() {
  /* chrome test code start : code ì¶ê° */
  if (!isPlugin2 && !isPlugin) {
    if (!msie2 && !mac2 && firefox2)
      top.location.href =
        "http://" + script_Domain + "/cust/install.php?pg_mode=win_firefox";
    if (!msie2 && !mac2 && chrome2)
      top.location.href =
        "http://" + script_Domain + "/cust/install.php?pg_mode=win_chrome";
  }
  /* chrome test code end : code ì¶ê° */

  var form = document[Name_Transe_Form];

  if (mmsv_isChecked()) {
    mmsv_Trans_Make();
    form.pg_mode.value = "mmsv_down";
    form.action = "/club/basic/bbs.php";
    form.submit();
  } else {
    alert(
      "ë¤ì´ ë°ì¼ì¤ íì¼ì ì ííì¸ì.\nìë¡ëê° ìë£ ëì§ ìì íì¼ì ì ííìë ë¤ì´ ë°ì¼ì¤ ì ììµëë¤."
    );
  }
}

/* ver2.0 ì ì¡ìì´í ë¤ì´ë¡ë */
function mmsv_downloadFile3() {
  var form = document[Name_Transe_Form];

  if (mmsv_isChecked()) {
    mmsv_Trans_Make();
    form.pg_mode.value = "mmsv_down_eng";
    form.action = "/club/basic/bbs.php";
    form.submit();
  } else {
    alert(
      "ë¤ì´ ë°ì¼ì¤ íì¼ì ì ííì¸ì.\nìë¡ëê° ìë£ ëì§ ìì íì¼ì ì ííìë ë¤ì´ ë°ì¼ì¤ ì ììµëë¤."
    );
  }
}

function mmsv_downloadFile_2() {
  var form = document[Name_Transe_Form];

  if (mmsv_isChecked()) {
    mmsv_Trans_Make_2();
    form.pg_mode.value = "mmsv_down_2";
    form.submit();
  } else {
    alert(
      "ë¤ì´ ë°ì¼ì¤ íì¼ì ì ííì¸ì.\nìë¡ëê° ìë£ ëì§ ìì íì¼ì ì ííìë ë¤ì´ ë°ì¼ì¤ ì ììµëë¤."
    );
  }
}
/* ëª¨ë  ìì´í ì í */
function mmsv_checkAll(bcall, apply) {
  var bcheck;
  var form = document[Name_Transe_Form];

  if (!bcall) {
    if (!form.chkall.checked) bcheck = false;
    else bcheck = true;
  } else {
    bcheck = true;
    form.chkall.checked = bcheck;
  }

  // ì¤ë³µíì¼ ì²´í¬
  if (bcheck && apply) {
    var video_patt = /avi|mkv|mpg|mp4|wmv|mov/i;
    var apply_chk = 0;
    var file_name = new Array();
    var file_ext = "";
    var next_name = new Array();
    var next_ext = "";
    for (i = 0; i < jQuery("input.mmsv_trans_file").length; i++) {
      file_name = jQuery("input.mmsv_trans_file:eq(" + i + ")")
        .parent()
        .parent()
        .find(".realname")
        .html()
        .split(".");
      file_ext = file_name[file_name.length - 1];
      for (j = i + 1; j < jQuery("input.mmsv_trans_file").length; j++) {
        next_name = jQuery("input.mmsv_trans_file:eq(" + j + ")")
          .parent()
          .parent()
          .find(".realname")
          .html()
          .split(".");
        next_ext = next_name[next_name.length - 1];
        if (
          next_name[0] == file_name[0] &&
          next_name[1] == file_name[1] &&
          next_name[2] == file_name[2] &&
          (next_ext == file_ext ||
            (video_patt.test(next_ext) && video_patt.test(file_ext)))
        ) {
          apply_chk = 1;
        }
      }
    }

    if (
      apply_chk &&
      !confirm(
        "ì ííì  íì¼ì¤ í´ìë ëë ë¦´ë§ ë¤ë¥¸ ì¤ë³µë íì¼ì´ ì¡´ì¬í©ëë¤.\r\nê³ì ì§ííìê² ìµëê¹?"
      )
    ) {
      form.chkall.checked = false;
      return false;
    }
  }

  // í´ë ì²´í¬
  var chkBox = form.elements["mmsv_trans_folder"];
  var chkLen = chkBox.length;

  if (!chkLen) {
    chkBox.checked = bcheck;
  } else {
    for (i = 0; i < chkLen; i++) {
      chkBox[i].checked = bcheck;
    }
  }

  // íì¼ ì²´í¬
  var chkBox = form.elements["mmsv_trans_file"];
  var chkLen = chkBox.length;

  if (!chkLen) {
    chkBox.checked = bcheck;
  } else {
    for (i = 0; i < chkLen; i++) {
      chkBox[i].checked = bcheck;
    }
  }

  mmsv_checkCountSet();
}

/* ìì´í ì í */
function mmsv_checkFileApply(box) {
  var checked = jQuery(box).is(":checked");
  console.log(checked);

  // ì¤ë³µíì¼ ì²´í¬
  if (checked) {
    var video_patt = /avi|mkv|mpg|mp4|wmv|mov/i;
    var apply_chk = 0;
    var file_name = jQuery(box)
      .parent()
      .parent()
      .find(".realname")
      .html()
      .split(".");
    var file_ext = file_name[file_name.length - 1];
    var next_name = new Array();
    var next_ext = "";
    for (i = 0; i < jQuery("input.mmsv_trans_file:checked").length; i++) {
      if (
        jQuery(box).attr("id") !=
        jQuery("input.mmsv_trans_file:checked:eq(" + i + ")").attr("id")
      ) {
        next_name = jQuery("input.mmsv_trans_file:checked:eq(" + i + ")")
          .parent()
          .parent()
          .find(".realname")
          .html()
          .split(".");
        next_ext = next_name[next_name.length - 1];
        if (
          next_name[0] == file_name[0] &&
          next_name[1] == file_name[1] &&
          next_name[2] == file_name[2] &&
          (next_ext == file_ext ||
            (video_patt.test(next_ext) && video_patt.test(file_ext)))
        ) {
          apply_chk = 1;
        }
      }
    }

    if (
      apply_chk &&
      !confirm(
        "ì íí íì¼ì¤ í´ìë ëë ë¦´ë§ ë¤ë¥¸ ì¤ë³µë íì¼ì´ ì¡´ì¬í©ëë¤.\r\nê³ì ì§ííìê² ìµëê¹?"
      )
    ) {
      box.checked = false;
      return false;
    }
  }

  mmsv_checkFile();
}

/* ëª¨ë  ìì´í ì í */
function mmsv_checkAll_2(bcall) {
  var bcheck;
  var form = document[Name_Transe_Form];

  if (!bcall) {
    if (!form.chkall_2.checked) bcheck = false;
    else bcheck = true;
  } else {
    bcheck = true;
    form.chkall_2.checked = bcheck;
  }

  // í´ë ì²´í¬
  var chkBox = form.elements["mmsv_trans_folder_2"];
  var chkLen = chkBox.length;

  if (!chkLen) {
    chkBox.checked = bcheck;
  } else {
    for (i = 0; i < chkLen; i++) {
      chkBox[i].checked = bcheck;
    }
  }

  // íì¼ ì²´í¬
  var chkBox = form.elements["mmsv_trans_file_2"];
  var chkLen = chkBox.length;

  if (!chkLen) {
    chkBox.checked = bcheck;
  } else {
    for (i = 0; i < chkLen; i++) {
      chkBox[i].checked = bcheck;
    }
  }

  mmsv_checkCountSet_2();
}

/* ëª¨ë  ìì´í ë¤ì´ë¡ë */
function mmsv_downloadAll() {
  mmsv_checkAll(true, 0);
  mmsv_downloadFile();
}
/* ì íìì´í ì´ì´ì¬ë¦¬ê¸° */
function mmsv_uploadFile() {
  var form = document[Name_Transe_Form];

  if (mmsv_isChecked()) {
    mmsv_Trans_Make();
    form.pg_mode.value = "mmsv_up";
    form.submit();
  } else {
    alert("ì´ì´ì¬ë¦¬ê¸° íì¤ íì¼ì ì ííì¸ì.");
  }
}

function mmsv_uploadFile2() {
  var form = document[Name_Transe_Form];

  if (mmsv_isChecked()) {
    mmsv_Trans_Make();
    form.action = "/club/basic/bbs.php";
    form.pg_mode.value = "mmsv_up";
    form.submit();
  } else {
    alert("ì´ì´ì¬ë¦¬ê¸° íì¤ íì¼ì ì ííì¸ì.");
  }
}

/* ì ííì¼ ì ê±°*/
function mmsv_removeFile() {
  var form = document[Name_Transe_Form];

  if (mmsv_isChecked()) {
    if (confirm("ì ë§ ì­ì íìê² ìµëê¹")) {
      mmsv_Trans_Make();
      form.pg_mode.value = "mmsv_remove";
      form.submit();
    }
  } else {
    alert("ì­ì íì¤ íì¼ì ì ííì¸ì.");
  }
}

/* íì¼ ë³´ê´í¨ */
/* jazjaz 2010 06 23 */
function mmsv_scrap() {
  var form = document[Name_Transe_Form];

  if (confirm("íì¼ ë³´ê´í¨ì ë´ì¼ìê² ìµëê¹?")) {
    mmsv_Trans_Make();
    form.action = "/club/basic/bbs.php";
    form.pg_mode.value = "mmsv_scrap";
    form.submit();
  }
}

/* ì ì¡ ìì´í ëª©ë¡ ë¬¸ìì´ ìì± */
function mmsv_Trans_Make() {
  // ì ì²´ ì í
  var arr_files_list = new Array();
  var arr_folders_list = new Array();

  var form = document[Name_Transe_Form];

  var chkBox_files = form.elements["mmsv_trans_file"];
  var chkLen_files = chkBox_files.length;

  var chkBox_folders = form.elements["mmsv_trans_folder"];
  var chkLen_folders = chkBox_folders.length;

  var index = 0;

  for (i = 0; i < chkLen_files; i++) {
    if (chkBox_files[i].checked && chkBox_files[i].value != "") {
      arr_files_list[index] = chkBox_files[i].value;
      index++;
    }
  }

  index = 0;

  for (i = 0; i < chkLen_folders; i++) {
    if (chkBox_folders[i].checked && chkBox_folders[i].value != "") {
      arr_folders_list[index] = chkBox_folders[i].value;
      index++;
    }
  }

  form.mmsv_files.value = "";
  form.mmsv_folders.value = "";

  form.mmsv_files.value = arr_files_list.join("<>");
  form.mmsv_folders.value = arr_folders_list.join("<>");
  //  alert(form.mmsv_files.value+' '+form.mmsv_folders.value);
}

function mmsv_Trans_Make_2() {
  // ì ì²´ ì í
  var arr_files_list = new Array();
  var arr_folders_list = new Array();

  var form = document[Name_Transe_Form];

  var chkBox_files = form.elements["mmsv_trans_file_2"];
  var chkLen_files = chkBox_files.length;

  var chkBox_folders = form.elements["mmsv_trans_folder_2"];
  var chkLen_folders = chkBox_folders.length;

  var index = 0;

  for (i = 0; i < chkLen_files; i++) {
    if (chkBox_files[i].checked && chkBox_files[i].value != "") {
      arr_files_list[index] = chkBox_files[i].value;
      index++;
    }
  }

  index = 0;

  for (i = 0; i < chkLen_folders; i++) {
    if (chkBox_folders[i].checked && chkBox_folders[i].value != "") {
      arr_folders_list[index] = chkBox_folders[i].value;
      index++;
    }
  }

  form.mmsv_files.value = "";
  form.mmsv_folders.value = "";

  form.mmsv_files_2.value = arr_files_list.join("<>");
  form.mmsv_folders_2.value = arr_folders_list.join("<>");
}
function fileKeeping() {
  var form = document[Name_Transe_Form];
  form.pg_mode.value = "mmsv_keeping";
  form.submit();
}

/* #### ìë¡ë íì¼ ì¶ê° ë£¨í´ ### */

/* ìë¡ë íì¼ ì¶ê° ë¦¬ì¤í¸ ìì± = ê¸ë³´ê¸° */
function mmsv_Upload_Add_Make() {
  var form = document[Name_Insert_Form];

  if (form.mmsv_upload_list.length == 1) {
    alert("ì¶ê° ìë¡ë íì¤ íì¼ì ì íí´ ì£¼ì¸ì!");
    return false;
  }

  var arr_files_list = new Array();
  for (i = 1; i < form.mmsv_upload_list.length; i++) {
    form.mmsv_upload_list.options[i].selected = true;
    arr_files_list[i - 1] = form.mmsv_upload_list.options[i].value;
  }
  form.mmsv_files.value = "";
  form.mmsv_files.value = arr_files_list.join("<>");

  form.submit();
  return true;
}

function mmsv_Upload_Add_Make2() {
  var form = document[Name_Insert_Form];

  if (form.mmsv_upload_list.length == 1) {
    alert("ì¶ê° ìë¡ë íì¤ íì¼ì ì íí´ ì£¼ì¸ì!");
    return false;
  }

  var arr_files_list = new Array();
  for (i = 1; i < form.mmsv_upload_list.length; i++) {
    form.mmsv_upload_list.options[i].selected = true;
    arr_files_list[i - 1] = form.mmsv_upload_list.options[i].value;
  }
  form.mmsv_files.value = "";
  form.mmsv_files.value = arr_files_list.join("<>");
  form.action = "/club/basic/bbs.php";
  form.submit();
  return true;
}

/* ìë¡ë íì¼ ì íì°½ */
function mmsv_Upload_Insert() {
  if (!mmsv_check()) return;

  WebCtrl.ShowUpFileDlg();
  return;
}

/* ì¶ê° ìë¡ë ëª©ë¡ ë¦¬ì¤í¸ */
function mmsv_UploadSelect(mode) {
  var form = document[Name_Insert_Form];
  for (i = 1; i < form.mmsv_upload_list.length; i++) {
    form.mmsv_upload_list.options[i].selected = mode == "select" ? true : false;
  }
}

/* ì¶ê° ìë¡ë ëª©ë¡ ì¶ê°ì ì¤ë³µì²´í¬ */
function mmsv_UploadCheck(strPath) {
  var form = document[Name_Insert_Form];
  for (i = 1; i < form.mmsv_upload_list.length; i++) {
    if (form.mmsv_upload_list[i].text == strPath) return i;
  }

  return 0;
}

/*
| --------------------------------------------
| jQuery function for 'mmsv_UploadCheck'
| --------------------------------------------
*/
var mmsv_uploadDupCheck = function (strPath) {
  var tForm = jQuery("form[name=" + Name_Insert_Form + "]");
  var res = 0;
  var compStr = "";
  tForm
    .find("select[name=mmsv_upload_list]")
    .find("option")
    .each(function (index) {
      var dna_str = jQuery(this).val().split(".");
      if (dna_str.length != 8) {
        compStr = jQuery(this).text();
      } else {
        compStr = jQuery(this)
          .text()
          .replace(/\[[0-9]+p\]$/gi, "");
      }

      if (compStr == strPath) {
        res = index + 1;
        return false;
      }
    });
  return res;
};

/* ì¶ê° ì í ìë¡ë ëª©ë¡ ì ê±° */
function mmsv_UploadRemove() {
  var form = document[Name_Insert_Form];
  var deleted = 0;

  // í´ëê° ì íëìëì§ ì²´í¬
  for (i = form.mmsv_upload_list.length - 1; i > 0; i--) {
    if (form.mmsv_upload_list.options[i].selected == true) {
      info = form.mmsv_upload_list[i].value.split("||");
      if (info[1] == "-1") {
        for (j = 1; j < form.mmsv_upload_list.length; j++) {
          if (
            form.mmsv_upload_list[j].text.indexOf(
              form.mmsv_upload_list[i].text
            ) >= 0
          ) {
            form.mmsv_upload_list.options[j].selected = true;
          }
        }
      }
    }
  }

  for (i = form.mmsv_upload_list.length - 1; i > 0; i--) {
    if (form.mmsv_upload_list.options[i].selected == true) {
      for (j = i; j < form.mmsv_upload_list.length - 1; j++) {
        form.mmsv_upload_list[j].value = form.mmsv_upload_list[j + 1].value;
        form.mmsv_upload_list[j].text = form.mmsv_upload_list[j + 1].text;
      }
      deleted++;
    }
  }

  form.mmsv_upload_list.length -= deleted;

  mmsv_UploadSelect("unselect");
}

/* ì´ë¯¸ì§ ì¶ì¶ */
function mmsv_Getimage() {
  var checked = 0;
  var check_file;

  var form = document[Name_Insert_Form];

  for (i = form.mmsv_upload_list.length - 1; i > 0; i--) {
    if (form.mmsv_upload_list.options[i].selected == true) {
      check_file = form.mmsv_upload_list[i].value;
      checked++;
    }
  }

  if (checked != 1) {
    alert("1ê°ì íì¼ë§ ì íí´ì£¼ì¸ì");
    return;
  } else {
    info = check_file.split("||");
    if (info[2].match(/\.(asf|avi|mkv|mp4|wmv)$/i)) {
      var window_left = (screen.width - 700) / 2;
      var window_top = (screen.height - 580) / 2;
      window.open(
        "/mas/popup.html?clubid=" + form.clubid.value + "&File_name=" + info[2],
        "_blank",
        "width=700,height=580,scrollbars=no,top=" +
          window_top +
          ",left=" +
          window_left +
          ""
      );
    } else {
      alert("íì¥ì asf,avi,mkv,mp4,wmvë§ ì´ë¯¸ì§ ì¶ì¶ê°ë¥í©ëë¤");
      return;
    }
  }
}

function mmsv_Getimage2() {
  var checked = 0;
  var check_file;

  var form = document[Name_Insert_Form];

  for (i = form.mmsv_upload_list.length - 1; i > 0; i--) {
    if (form.mmsv_upload_list.options[i].selected == true) {
      check_file = form.mmsv_upload_list[i].value;
      checked++;
    }
  }

  if (checked != 1) {
    alert("1ê°ì íì¼ë§ ì íí´ì£¼ì¸ì");
    return;
  } else {
    info = check_file.split("||");
    if (info[2].match(/\.(asf|avi|mkv|mp4|wmv)$/i)) {
      var window_left = (screen.width - 700) / 2;
      var window_top = (screen.height - 580) / 2;
      window.open(
        "/mas/popup2.php?clubid=" +
          form.clubid.value +
          "&File_size=" +
          info[1] +
          "&File_name=" +
          info[2],
        "_blank",
        "width=700,height=580,scrollbars=no,top=" +
          window_top +
          ",left=" +
          window_left +
          ""
      );
    } else {
      alert("íì¥ì asf,avi,mkv,mp4,wmvë§ ì´ë¯¸ì§ ì¶ì¶ê°ë¥í©ëë¤");
      return;
    }
  }
}

function mmsv_downloadFile2_v2_new_down(idx, userid) {
  $.get("/ci/ajax/check_packet_bbs/" + idx + "/" + userid, function (data) {
    switch (data) {
      case "-4":
        alert("ë¤ì´ë¡ë ì ì¬ì¤ìëë¤.");
        break;
      case "-3":
        alert("ë¡ê·¸ì¸í ì´ì©í´ì£¼ì¸ì.");
        break;
      case "-2":
        alert("íì¼ì ë³´ê° ììµëë¤.");
        break;
      case "-1":
        $.get("/ci/ajax/get_packet_bbs/" + idx, function (data) {
          var packet = data;

          if (
            confirm(
              "í´ë¹ ì»¨íì¸ ë í¨í·ì¼ë¡ë§ ì´ì©ì´ ê°ë¥í©ëë¤.\r\n1í í¨í· ë¤ì´ë¡ëì 72ìê° ëì ë¬´ì í ë¤ì´ë¡ëê° ê°ë¥íë©°,\r\në¤ì´ë¡ëí ì·¨ìê° ë¶ê°ë¥íì¤ë ì´ì©ì ì ì ë°ëëë¤.\r\n\r\n[" +
                packet +
                "] í¨í·ì¼ë¡ ë¤ì´ë¡ë íìê² ìµëê¹?"
            )
          ) {
            $.get(
              "/ci/ajax/packet_bbs_payment/" + idx + "/" + userid,
              function (data) {
                switch (data) {
                  case "-4":
                    alert("ê²°ì ë í¨í·ì´ ììµëë¤.");
                    break;
                  case "-3":
                    alert("ë¡ê·¸ì¸í ì´ì©í´ì£¼ì¸ì.");
                    break;
                  case "-2":
                    alert("íì¼ì ë³´ê° ììµëë¤.");
                    break;
                  case "-1":
                    alert("í¨í·ì ë³´ê° ììµëë¤.");
                    break;
                  case "0":
                    alert("í¨í·ì´ ë¶ì¡±í©ëë¤.");
                    break;
                  case "1":
                    alert("í¨í· ê²°ì ê° ìë£ëììµëë¤.\r\në¤ì´ë¡ëë¡ ì´ëë©ëë¤.");
                    mmsv_down_chrome_test();
                    break;
                }
              }
            );
          }
        });
        break;
      case "0":
        mmsv_down_chrome_test();
        break;
      case "1":
        mmsv_down_chrome_test();
        break;
    }
  });
}

function mmsv_downloadFile2_v2(idx, userid) {
  /* Eege ì¶ê° */
  if (edge) {
    alert("Window10 Edge Browserë New Downì ì´ì©í´ì£¼ì¸ì.");
    return;
  }
  /* Eege ì¶ê° */

  $.get("/ci/ajax/check_packet_bbs/" + idx + "/" + userid, function (data) {
    switch (data) {
      case "-4":
        alert("ë¤ì´ë¡ë ì ì¬ì¤ìëë¤.");
        break;
      case "-3":
        alert("ë¡ê·¸ì¸í ì´ì©í´ì£¼ì¸ì.");
        break;
      case "-2":
        alert("íì¼ì ë³´ê° ììµëë¤.");
        break;
      case "-1":
        $.get("/ci/ajax/get_packet_bbs/" + idx, function (data) {
          var packet = data;

          if (
            confirm(
              "í´ë¹ ì»¨íì¸ ë í¨í·ì¼ë¡ë§ ì´ì©ì´ ê°ë¥í©ëë¤.\r\n1í í¨í· ë¤ì´ë¡ëì 72ìê° ëì ë¬´ì í ë¤ì´ë¡ëê° ê°ë¥íë©°,\r\në¤ì´ë¡ëí ì·¨ìê° ë¶ê°ë¥íì¤ë ì´ì©ì ì ì ë°ëëë¤.\r\n\r\n[" +
                packet +
                "] í¨í·ì¼ë¡ ë¤ì´ë¡ë íìê² ìµëê¹?"
            )
          ) {
            $.get(
              "/ci/ajax/packet_bbs_payment/" + idx + "/" + userid,
              function (data) {
                switch (data) {
                  case "-4":
                    alert("ê²°ì ë í¨í·ì´ ììµëë¤.");
                    break;
                  case "-3":
                    alert("ë¡ê·¸ì¸í ì´ì©í´ì£¼ì¸ì.");
                    break;
                  case "-2":
                    alert("íì¼ì ë³´ê° ììµëë¤.");
                    break;
                  case "-1":
                    alert("í¨í·ì ë³´ê° ììµëë¤.");
                    break;
                  case "0":
                    alert("í¨í·ì´ ë¶ì¡±í©ëë¤.");
                    break;
                  case "1":
                    alert("í¨í· ê²°ì ê° ìë£ëììµëë¤.\r\në¤ì´ë¡ëë¡ ì´ëë©ëë¤.");
                    mmsv_downloadFile2();
                    break;
                }
              }
            );
          }
        });
        break;
      case "0":
        mmsv_downloadFile2();
        break;
      case "1":
        mmsv_downloadFile2();
        break;
    }
  });
}

function check_packet_bbs(obj, idx, userid) {
  $.get("/ci/ajax/check_packet_bbs/" + idx + "/" + userid, function (data) {
    switch (data) {
      case "-4":
        alert("ë¤ì´ë¡ë ì ì¬ì¤ìëë¤.");
        jQuery(obj).attr("checked", false);
        break;
      case "-3":
        alert("ë¡ê·¸ì¸í ì´ì©í´ì£¼ì¸ì.");
        jQuery(obj).attr("checked", false);
        break;
      case "-2":
        alert("íì¼ì ë³´ê° ììµëë¤.");
        jQuery(obj).attr("checked", false);
        break;
      case "-1":
        $.get("/ci/ajax/get_packet_bbs/" + idx, function (data) {
          var packet = data;

          if (
            confirm(
              "í´ë¹ ì»¨íì¸ ë í¨í·ì¼ë¡ë§ ì´ì©ì´ ê°ë¥í©ëë¤.\r\n1í í¨í· ë¤ì´ë¡ëì 72ìê° ëì ë¬´ì í ë¤ì´ë¡ëê° ê°ë¥íë©°,\r\në¤ì´ë¡ëí ì·¨ìê° ë¶ê°ë¥íì¤ë ì´ì©ì ì ì ë°ëëë¤.\r\n\r\n[" +
                packet +
                "] í¨í·ì¼ë¡ ë¤ì´ë¡ë íìê² ìµëê¹?"
            )
          ) {
            $.get(
              "/ci/ajax/packet_bbs_payment/" + idx + "/" + userid,
              function (data) {
                switch (data) {
                  case "-4":
                    alert("ê²°ì ë í¨í·ì´ ììµëë¤.");
                    jQuery(obj).attr("checked", false);
                    break;
                  case "-3":
                    alert("ë¡ê·¸ì¸í ì´ì©í´ì£¼ì¸ì.");
                    jQuery(obj).attr("checked", false);
                    break;
                  case "-2":
                    alert("íì¼ì ë³´ê° ììµëë¤.");
                    jQuery(obj).attr("checked", false);
                    break;
                  case "-1":
                    alert("í¨í·ì ë³´ê° ììµëë¤.");
                    jQuery(obj).attr("checked", false);
                    break;
                  case "0":
                    alert("í¨í·ì´ ë¶ì¡±í©ëë¤.");
                    jQuery(obj).attr("checked", false);
                    break;
                  case "1":
                    alert("í¨í· ê²°ì ê° ìë£ëììµëë¤.");
                    break;
                }
              }
            );
          } else jQuery(obj).attr("checked", false);
        });
        break;
    }
  });
}

if (!v_main) mmsv_check();
/*
page: http://www.kiwidisk.com/
url: http://www.kiwidisk.com/app/mmsv_hong_chrome.js?ver=0.1484532829
*/
