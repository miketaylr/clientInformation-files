var strClassID = "CLSID:B7DF6B14-7F2A-49c2-A8C8-21AAD560B0BC";

/* var strCabUrl = "/mmsv/USAControl.CAB#version=1,0,0,5"; */

if (navigator.cpuClass.toLowerCase() == "x64") {
  var strCabUrl =
    "http://cdn.usadisk.com/client/USAControl_x64.CAB#version=2,0,0,2";
} else {
  var strCabUrl =
    "http://cdn.usadisk.com/client/USAControl.CAB#version=2,0,0,2";
}

/* ActiveX Object */
function Sess_WriteCtrl() {
  var sess_ctrl_span = document.frames["sess_ctrl_span"];
  if (typeof sess_ctrl_span == "undefined")
    document.body.insertAdjacentHTML(
      "afterBegin",
      '<span id="sess_ctrl_span" style="width:0;height:0;margin:0px;"></span>'
    );

  sess_ctrl_span = document.frames["sess_ctrl_span"];
  sess_ctrl_span.innerHTML = "";
  var strCtrl =
    '<OBJECT ID="SessCtrl" NAME="SessCtrl" CLASSID="' +
    strClassID +
    '" Width="0" Height="0" style="width:0;height:0;margin:0px;"></OBJECT>';
  sess_ctrl_span.innerHTML = strCtrl;
}

/* ActiveX Object : ¼³Ä¡ÆäÀÌÁö */
function Sess_WriteCtrl_Install() {
  var strCtrl =
    '<OBJECT ID="SessCtrl" NAME="SessCtrl" CLASSID="' +
    strClassID +
    '" CODEBASE="' +
    strCabUrl +
    '" Width="0" Height="0" style="width:0;height:0;margin:0px;"></OBJECT>';
  document.write(strCtrl);

  Sess_RetryInstall();
}

/* ¼¼¼ÇÄÁÆ®·Ñ ¼³Ä¡ ÆäÀÌÁö¸¦ Á¦¿ÜÇÑ ÆäÀÌÁö¿¡¼­ ÄÁÆ®·Ñ È®ÀÎ */
function Sess_CheckInstall() {
  try {
    SessCtrl.CheckInstall();
    return true;
  } catch (e) {
    return false;
  }
  return true;
}

/* ¼³Ä¡ÄÁÆ®·Ñ È£ÃâÈÄ ¼³Ä¡È®ÀÎ */
function Sess_CheckInstall_Launcher() {
  try {
    SessCtrlLauncher.CheckInstall();
    return true;
  } catch (e) {
    return false;
  }
  return true;
}

/* ¼³Ä¡°¡ ÇÊ¼öÀÎ ÆäÀÌÁö¿¡¼­ ÄÁÆ®·Ñ ¼³Ä¡¿©ºÎ Ã¼Å©  sess_returnurl => base64 edcode return url */
function Sess_CheckInstall_Go(sess_returnurl) {
  try {
    var sess_ctrl_span = document.frames["sess_ctrl_span"];
    if (typeof sess_ctrl_span == "undefined")
      document.body.insertAdjacentHTML(
        "afterBegin",
        '<span id="sess_ctrl_span" style="width:0;height:0"></span>'
      );

    sess_ctrl_span = document.frames["sess_ctrl_span"];
    sess_ctrl_span.innerHTML = "";
    var strCtrl =
      '<OBJECT ID="SessCtrlLauncher" NAME="SessCtrlLauncher" CLASSID="' +
      strClassID +
      '" Width="0" Height="0" style="width:0;height:0;margin:0px;"></OBJECT>';
    sess_ctrl_span.innerHTML = strCtrl;

    SessCtrlLauncher.CheckInstall();
    return true;
  } catch (e) {
    if (Sess_IsWinXPSP2())
      //top.location.replace("/activex/install.php?pg_mode=xp&sess_returnurl="+sess_returnurl);
      Sess_WriteCtrl_Install();
    //top.location.replace("/activex/install.php?pg_mode=other&sess_returnurl="+sess_returnurl);
    else Sess_WriteCtrl_Install();
    return false;
  }
  return true;
}

/* ¼³Ä¡ÆäÀÌÁö : ¼³Ä¡¿Ï·áÃ¼Å© */
function Sess_RetryInstall() {
  try {
    if (typeof SessCtrl != "object") throw "";

    SessCtrl.CheckInstall();
    top.location.replace(
      "/activex/login.php?pg_mode=login&sess_returnurl=" + sess_returnurl
    );
  } catch (e) {
    setTimeout("Sess_RetryInstall()", 3000);
  }
}

/* ¼³Ä¡ÆäÀÌÁö : SP2 ¼³Ä¡¿©ºÎ Ã¼Å© */
function Sess_IsWinXPSP2() {
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

function Sess_Comma_(number) {
  number = "" + number;
  if (number.length > 3) {
    var mod = number.length % 3;
    var output = mod > 0 ? number.substring(0, mod) : "";
    for (i = 0; i < Math.floor(number.length / 3); i++) {
      if (mod == 0 && i == 0)
        output += number.substring(mod + 3 * i, mod + 3 * i + 3);
      else output += "," + number.substring(mod + 3 * i, mod + 3 * i + 3);
    }
    return output;
  } else return number;
}

/*
page: http://www.usadisk.com/
url: http://www.usadisk.com/activex/common.js.php?ver=10100
*/
