var contorl_check = false;
var flash_path_xp = "/mmsv/windowxp.swf";
var flash_path_ot = "/mmsv/windowot.swf";
/*
//var Name_Insert_Form  = "frm";
*/
var Name_Insert_Form = "mmsvFormWrite";
var Name_Transe_Form = "mmsvFormTrans";

var MegaPerPoint = 10;

function getCookie_tmp(c_name) {
  var i,
    x,
    y,
    ARRcookies = document.cookie.split(";");
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");

    if (x == c_name) {
      return unescape(y);
    }
  }
}

/*
// ÄÁÆ®·Ñ Á¤º¸
*/

var control_tx = "";

control_tx += '<OBJECT ID="WebCtrl" ';
control_tx += 'CLASSID="CLSID:A40DE00F-F4AD-4444-9477-FA25C7299064" ';
control_tx +=
  'CODEBASE="http://www.daoki.com/mmsv/DAOKI2WebControl.cab#version=1,0,0,10" ';
control_tx += 'Width="0" Height="0">';
control_tx += "</OBJECT>";
/*
//control_tx += "<OBJECT ID=\"WebCtrl\" ";
//control_tx += "CLASSID=\"CLSID:A40DE00F-F4AD-4444-9477-FA25C7299063\" ";
//control_tx += "CODEBASE=\"http://filei.co.kr/setup/FileIWebControl.cab#version=1,0,0,0\" ";
//control_tx += "Width=\"0\" Height=\"0\">";
//control_tx += "</OBJECT>";
*/

document.write(control_tx);

/*
//// ÄÁÆ®·Ñ Á¤º¸
//document.write('<OBJECT ID="WebCtrl" ');
//document.write('CLASSID="CLSID:A40DE00F-F4AD-4444-9477-FA25C7299063" ');
//document.write('CODEBASE="http://filei.co.kr/setup/FileIWebControl.cab#version=1,0,0,0" ');
//document.write('Width="0" Height="0">');
//document.write('</OBJECT>');

// Àü¼Û´ã´ç ¾ÆÀÌÇÁ·¹ÀÓ
*/
document.write(
  '<iframe name="mmsvIFrame" width="0" height="0" src="about:blank"></iframe>'
);

/* ÄÁÆ®·Ñ ¼³Ä¡¿©ºÎ */
function mmsv_check() {
  try {
    WebCtrl.CheckInstall();
    return true;
  } catch (e) {
    return false;
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
    ) {
      return true;
    }
  } catch (e) {
    return false;
  }

  return false;
}

function mmsv_shortcut(url) {
  //if(!mmsv_check()) return;
  //WebCtrl.MakeShortCut(url);
}

/*
// ¾÷·Îµå ·çÆ¾
// type : 0=°Å·¡¼Ò, 1=ºí·Î±×, 2=°³ÀÎÀÚ·á
// idx : _webhard_bbs / _webhard_blog
*/
function mmsv_upload(userid, userpw, type, idx) {
  WebCtrl.UpLoad(userid, userpw, type, idx);
  return;
}

/*
// ´Ù¿î·Îµå ·çÆ¾
// type : 0=°Å·¡¼Ò, 1=ºí·Î±×, 2=°³ÀÎÀÚ·á
// idx : _webhard_bbs / _webhard_blog
// idx_ : _webhard_purchase
*/
function mmsv_download(userid, userpw, type, idx, idx_) {
  WebCtrl.DownLoad(userid, userpw, type, idx, idx_);
  return;
}

function mmsv_highdownload(userid, userpw, type, idx, idx_) {
  WebCtrl.HighDownLoad(userid, userpw, type, idx, idx_);
  return;
}

function mmsv_fileidownload(userid, userpw, type, idx, idx_) {
  var res = idx.split(":");
  var element = null;
  var js_src = new Array(
    "http://realweb1.filei.co.kr/wiselog/ContetnsDown.php?contid=" +
      idx_ +
      "&cid=" +
      res[0]
  );

  if (js_src.length > 0) {
    for (var i = 0; i < js_src.length; i++) {
      element = document.createElement("script");
      element.src = js_src[i];
      document.body.appendChild(element);
      element = null;
    }
  }

  WebCtrl.GDownLoad(userid, userpw, type, idx, idx_);
  return;
}

function mmsv_ftpdownload(userid, userpw, type, idx, idx_) {
  WebCtrl.DownLoad2(userid, userpw, type, idx, idx_, 64);
  return;
}

/*
// Àü¼Û¾ÆÀÌÅÛ °ü·Ã ·çÆ¾
// ¼±ÅÃµÈ ¾ÆÀÌÅÛ °¹¼ö
*/
function mmsv_checkCountSet() {
  var count = 0;
  var size = 0;
  var form = document[Name_Transe_Form];

  // Æú´õ Ã¼Å©
  var chkBox_foloer = form.elements["mmsv_trans_folder"];
  var chkLen_folder = chkBox_foloer.length;

  if (!chkLen_folder) {
    if (chkBox_foloer.checked && chkBox_foloer.value != "") count++;
  } else {
    for (i = 0; i < chkLen_folder; i++) {
      if (chkBox_foloer[i].checked && chkBox_foloer[i].value != "") count++;
    }
  }

  // ÆÄÀÏ Ã¼Å©
  var chkBox_file = form.elements["mmsv_trans_file"];
  var chkLen_file = chkBox_file.length;

  if (!chkLen_file) {
    if (chkBox_file.checked && chkBox_file.value != "") {
      count++;
      size += parseInt(chkBox_file.label);
    }
  } else {
    for (i = 0; i < chkLen_file; i++) {
      if (chkBox_file[i].checked && chkBox_file[i].value != "") {
        count++;
        size += parseInt(chkBox_file[i].label);
      }
    }
  }

  document.all.checkCount.innerHTML = count;
  document.all.checkSize.innerHTML = parseSize(size, 1);
}

/*
// Àü¼Û¾ÆÀÌÅÛ Ã¼Å©¹Ú½º Å¬¸¯(Æú´õ)
*/
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

/*
// Àü¼Û¾ÆÀÌÅÛ Ã¼Å©¹Ú½º Å¬¸¯(ÆÄÀÏ)
*/
function mmsv_checkFile() {
  mmsv_checkCountSet();
}

/*
// Àü¼Û¾ÆÀÌÅÛ ÆÄÀÏÀÌ ÇÏ³ª ÀÌ»ó ¼±ÅÃµÇ¾ú´ÂÁö Ã¼Å©
*/
function mmsv_isChecked() {
  var form = document[Name_Transe_Form];
  var chkBox = form.elements["mmsv_trans_file"];
  var chkLen = chkBox.length;

  /*
        // ¼±ÅÃµÈ ÆÄÀÏÀÌ ÀÖ´ÂÁö Ã¼Å©
*/
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

/*
// Àü¼Û¾ÆÀÌÅÛ ´Ù¿î·Îµå
*/
function mmsv_downloadFile() {
  var form = document[Name_Transe_Form];

  if (mmsv_isChecked()) {
    mmsv_Trans_Make();

    form.pg_mode.value = "mmsv_down";
    form.submit();
  } else {
    alert(
      "´Ù¿î ¹ÞÀ¸½Ç ÆÄÀÏÀ» ¼±ÅÃÇÏ¼¼¿ä.\n¾÷·Îµå°¡ ¿Ï·á µÇÁö ¾ÊÀº ÆÄÀÏÀº ¼±ÅÃÇÏ¼Åµµ ´Ù¿î ¹ÞÀ¸½Ç ¼ö ¾ø½À´Ï´Ù."
    );
  }
}

/*
// ¸ðµç ¾ÆÀÌÅÛ ¼±ÅÃ
*/
function mmsv_checkAll(bcall) {
  var bcheck;
  var form = document[Name_Transe_Form];

  if (!bcall) {
    if (!form.chkall.checked) bcheck = false;
    else bcheck = true;
  } else {
    bcheck = true;

    form.chkall.checked = bcheck;
  }

  // Æú´õ Ã¼Å©
  var chkBox = form.elements["mmsv_trans_folder"];
  var chkLen = chkBox.length;

  if (!chkLen) {
    chkBox.checked = bcheck;
  } else {
    for (i = 0; i < chkLen; i++) {
      chkBox[i].checked = bcheck;
    }
  }

  // ÆÄÀÏ Ã¼Å©
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

/*
// ¸ðµç ¾ÆÀÌÅÛ ´Ù¿î·Îµå
*/
function mmsv_downloadAll() {
  mmsv_checkAll(true);
  mmsv_downloadFile();
}

/*
// ¼±ÅÃ¾ÆÀÌÅÛ ÀÌ¾î¿Ã¸®±â
*/
function mmsv_uploadFile() {
  var form = document[Name_Transe_Form];

  if (mmsv_isChecked()) {
    mmsv_Trans_Make();

    form.pg_mode.value = "mmsv_up";
    form.submit();
  } else {
    alert("ÀÌ¾î¿Ã¸®±â ÇÏ½Ç ÆÄÀÏÀ» ¼±ÅÃÇÏ¼¼¿ä.");
  }
}

/*
// ¼±ÅÃÆÄÀÏ Á¦°Å
*/
function mmsv_removeFile() {
  var form = document[Name_Transe_Form];

  if (mmsv_isChecked()) {
    if (confirm("Á¤¸» »èÁ¦ÇÏ½Ã°Ú½À´Ï±î")) {
      mmsv_Trans_Make();

      form.pg_mode.value = "mmsv_remove";
      form.submit();
    }
  } else {
    alert("»èÁ¦ÇÏ½Ç ÆÄÀÏÀ» ¼±ÅÃÇÏ¼¼¿ä.");
  }
}

/*
// Àü¼Û ¾ÆÀÌÅÛ ¸ñ·Ï ¹®ÀÚ¿­ »ý¼º
*/
function mmsv_Trans_Make() {
  // ÀüÃ¼ ¼±ÅÃ
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
}

function fileKeeping() {
  var form = document[Name_Transe_Form];

  form.pg_mode.value = "mmsv_keeping";
  form.submit();
}

/*
// ¾÷·Îµå ÆÄÀÏ Ãß°¡ ¸®½ºÆ® »ý¼º = ±Ûº¸±â
*/
function mmsv_Upload_Add_Make() {
  var form = document[Name_Insert_Form];

  if (form.mmsv_upload_list.length == 1) {
    alert("Ãß°¡ ¾÷·Îµå ÇÏ½Ç ÆÄÀÏÀ» ¼±ÅÃÇØ ÁÖ¼¼¿ä!");
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

/*
// ¾÷·Îµå ÆÄÀÏ ¼±ÅÃÃ¢
*/
var lastIndex = "";
var zeroSizeArray = new Array(); /*	//Á¦·Î»çÀÌÁî Ã¼Å©  2008-04-17 Ãß°¡	*/

function mmsv_Upload_Insert() {
  return mmsv_Upload_Insert_File("file");
}

function mmsv_UploadFolder_Insert() {
  return mmsv_Upload_Insert_File("folder");
}

function mmsv_Upload_Insert_File(type) {
  if (!mmsv_check()) return;

  var f = document.mmsvFormWrite;

  // Á¦·Î»çÀÌÁî Ã¼Å©  2008-04-17 Ãß°¡
  zeroSizeArray = Array();

  if (type == "file") WebCtrl.ShowDlgFile();
  else if (type == "folder") {
    WebCtrl.ShowDlgFolder();
  }

  /*
        var arr_files_list = new Array();

//        f.filetype.value = type;

        // ÀÌÀü¿¡ ¾÷·ÎµåÇÑ ÆÄÀÏ ¸®¼ÂÇÏ±â
//        f.filepath.value='';
        for(i=1;i<lastIndex;i++) {

                f.mmsv_upload_list.options[i].selected = true;

        }

        mmsv_UploadRemove();

        // ÆÄÀÏÀÌ³ª Æú´õ°¡ ¼±ÅÃµÇ¾úÀ»¶§¸¸               1°ú ºñ±³ÇÏ´Â ÀÌÀ¯´Â -------Ã·ºÎµÈ ÆÄÀÏ¸ñ·Ï------- ÀÌ°Í ¶§¹®
        if(f.mmsv_upload_list.length > 1) {

                var file_name;
                var file_ext;
                var mp3_exists = false;

                // ÆÄÀÏ¸®½ºÆ® °¡Á®¿Í¼­ select¸®½ºÆ®·Î »Ñ¸®±â
                for (i = 1; i < f.mmsv_upload_list.length; i++) {

                        arr_files_list[i-1] = f.mmsv_upload_list.options[i].value;

                        file_name       = arr_files_list[i-1];
                        length_1        = file_name.length - 3;
                        length_2        = file_name.length;
                        file_ext        = file_name.substring(length_1, length_2);
                        if(file_ext.toLowerCase() == "mp3")             mp3_exists = true;

                }

                lastIndex = i;

                if(mp3_exists) {

                        alert("mp3 ÆÄÀÏÀº ¾÷·Îµå ÇÏ½Ç¼ö ¾ø½À´Ï´Ù.");
                        return;

                }

                var sp_filename = f.mmsv_upload_list.options[1].value.split('\\');

                //f.filename.value = sp_filename[sp_filename.length-1];
                f.mmsv_files.value ="";
                f.mmsv_files.value = arr_files_list.join("<>");

                //»çÀÌÁî °è»ê
                var plus_size = parseInt('0');
                for(var i=0;i<arr_files_list.length;i++ ) {

                        var as = arr_files_list[i];
                        var split_as = as.split('||');
                        if(i==0) f.filepath.value = split_as[2];

                        if(split_as[1]!='-1') {

                                // Á¦·Î»çÀÌÁî Ã¼Å©  if¹® Ãß°¡ 2008-04-17 Ãß°¡
                                if(split_as[1] <= 0) {

                                        var splitFileName = split_as[2].split('\\');
                                        zeroSizeArray.push(splitFileName[splitFileName.length-1]);

                                }

                                plus_size += parseInt(split_as[1]);

                        }

                }

                f.size.value=plus_size;

                var mega = Round(f.size.value / 1045576 , 0 ,'') //¸Þ°¡·Î º¯°æ
                var permWonMin = Math.round(mega / MegaPerPoint);
                var permWonMin = Math.round(permWonMin/10)*10;//Á¤¼öÇü Ã¹Â°ÀÚ¸® Ã³¸®

                if(permWonMin < 30) var permWonMin = 30;

                f.cash.value = permWonMin;

                $('printSize').innerHTML=parseSize(f.size.value,2);

                if(plus_size > 6424018944) {

                        alert('ÄÁÅÙÃ÷´ç ÃÖ´ë 6±â°¡±îÁö ¾÷·Îµå°¡ °¡´ÉÇÕ´Ï´Ù.     \r\n\r\n¿ë·®ÀÌ Å¬ °æ¿ì ºÐÇÒÇØ¼­ µî·ÏÇØÁÖ½Ã±â ¹Ù¶ø´Ï´Ù.      ');

                }

        }
*/

  return;
}

/*
// Ãß°¡ ¾÷·Îµå ¸ñ·Ï ¸®½ºÆ®
*/
function mmsv_UploadSelect(mode) {
  var form = document[Name_Insert_Form];

  for (i = 1; i < form.mmsv_upload_list.length; i++) {
    form.mmsv_upload_list.options[i].selected = mode == "select" ? true : false;
  }
}

/*
/// Ãß°¡ ¾÷·Îµå ¸ñ·Ï Ãß°¡½Ã Áßº¹Ã¼Å©
*/
function mmsv_UploadCheck(strPath) {
  var form = document[Name_Insert_Form];

  for (i = 1; i < form.mmsv_upload_list.length; i++) {
    if (form.mmsv_upload_list[i].text == strPath) return i;
  }

  return 0;
}

/*
// Ãß°¡ ¼±ÅÃ ¾÷·Îµå ¸ñ·Ï Á¦°Å
*/
function mmsv_UploadRemove() {
  var form = document[Name_Insert_Form];
  var deleted = 0;

  /*
        // Æú´õ°¡ ¼±ÅÃµÇ¾ú´ÂÁö Ã¼Å©
*/
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

/*
// ¼±ÅÃµÈ ÆÄÀÏ¸®½ºÆ®
*/
document.write(
  '<Script Language="JavaScript" for="WebCtrl" event="UpSelectComplete(strPath,  strSize, strMode)">'
);
document.write("var form = document[Name_Insert_Form];");
document.write("if(form.mmsv_upload_list.length < 10000) {");
document.write("                idx = mmsv_UploadCheck(strPath);");
document.write("                if(idx){");
document.write(
  '                                info = form.mmsv_upload_list[idx].value.split("||"); '
);
document.write(
  '                                if (info[0] == "-1" || info[0].indexOf(strMode) >= 0) {'
);
document.write(
  '                                        form.mmsv_upload_list[idx].value = strMode + "||" + strSize + "||" + strPath;'
);
document.write("                                }");
document.write("                }");
document.write("                else {");
document.write(
  "                                form.mmsv_upload_list.length++;"
);
document.write(
  '                                form.mmsv_upload_list[form.mmsv_upload_list.length-1].value = strMode + "||" + strSize + "||" + strPath;'
);
document.write(
  "                                form.mmsv_upload_list[form.mmsv_upload_list.length-1].text = strPath;"
);
document.write("                }");
document.write("        }");
document.write("</script>");

function mmsv_OpenUpLoad(ta, filepath) {
  WebCtrl.OpenUpLoad(ta + "/" + filepath);
  return;
}

function mmsv_OpenDownLoad(fileName) {
  WebCtrl.OpenDownLoad(fileName);
  return;
}

/*
// ¿ÀÇÂÀÚ·á½Ç ´Ù¿î·Îµå , ¾÷·Îµå
// ÆÄÀÏ ¾÷·Îµå : ftp¼­¹öÀÎµ¦½º/ftp¼­¹öµð·ºÅä¸®/ÆÄÀÏ¸í  ex) 1/caption/file.exe
// Æú´õ ¾÷·Îµå : ftp¼­¹öÀÎµ¦½º/ftp¼­¹öµð·ºÅä¸®/Æú´õ¸í\ÆÄÀÏ¸í/Æú´õ¸í\ÆÄÀÏ¸í ex)1/caption/folder1\file1.exe/folder1\file2.exe
*/
function mmsv_OpenUpLoad1(no, table, filepath, type) {
  if (type == "file") {
    WebCtrl.OpenUpLoad(no + "/" + table + "/" + filepath);
    return;
  } else if (type == "folder") {
    WebCtrl.OpenUpLoad(no + "/" + table + "/" + filepath + "\\");
    return;
  }
}

function mmsv_OpenDownLoad1(no, ta, filepath, type) {
  WebCtrl.OpenDownLoad(no + "/" + ta + "/" + filepath);
  return;
}

/*
// ÄÁÆ®·Ñ ¼³Ä¡¿©ºÎ
*/
function open_check() {
  try {
    WebCtrl.UpdateOpenCheck();
    return true;
  } catch (e) {
    return false;
  }
}

/*
// Æû¸í
*/
function openPdsUploadInsert(f) {
  WebCtrl.ShowDlgOpenFile();

  var f = document[Name_Insert_Form];
  var arr_files_list = new Array();

  /*
        // ÆÄÀÏÀÌ³ª Æú´õ°¡ ¼±ÅÃµÇ¾úÀ»¶§¸¸               1°ú ºñ±³ÇÏ´Â ÀÌÀ¯´Â -------Ã·ºÎµÈ ÆÄÀÏ¸ñ·Ï------- ÀÌ°Í ¶§¹®
*/
  if (f.mmsv_upload_list.length > 1) {
    /*
                // ÆÄÀÏ¸®½ºÆ® °¡Á®¿Í¼­ select¸®½ºÆ®·Î »Ñ¸®±â
*/
    for (i = 1; i < f.mmsv_upload_list.length; i++) {
      arr_files_list[i - 1] = f.mmsv_upload_list.options[i].value;

      if (i > 1) {
        f.mmsv_upload_list.options[i - 1].selected = "unselect";
        mmsv_UploadRemove();
      }
    }

    lastIndex = i;

    var sp_filename = f.mmsv_upload_list.options[1].value.split("\\");

    f.filename.value = sp_filename[sp_filename.length - 1];
    f.mmsv_files.value = "";
    f.mmsv_files.value = arr_files_list.join("<>");

    /*
                //»çÀÌÁî °è»ê
*/
    var plus_size = parseInt("0");

    for (var i = 0; i < arr_files_list.length; i++) {
      var as = arr_files_list[i];
      var split_as = as.split("||");

      if (i == 0) f.filepath.value = split_as[2];

      if (split_as[1] != "-1") {
        plus_size += parseInt(split_as[1]);
      }
    }

    f.size.value = plus_size;

    var mega = Round(f.size.value / 1045576, 0, ""); /*	//¸Þ°¡·Î º¯°æ	*/
    var permWonMin = Math.round(mega / MegaPerPoint);
    var permWonMin =
      Math.round(permWonMin / 10) * 10; /*	//Á¤¼öÇü Ã¹Â°ÀÚ¸® Ã³¸®	*/
    if (permWonMin < 30) var permWonMin = 30;
  }

  return;
}

/*
// ¿ÀÇÂÀÚ·á½Ç  Start
// type  = file, folder
*/
function openPdsUploadInsert1(type) {
  var f = document[Name_Insert_Form];
  var arr_files_list = new Array();

  if (type == "file") {
    WebCtrl.ShowDlgOpenFile();
  } else if (type == "folder") {
    WebCtrl.ShowDlgOpenFolder();
  }

  f.filetype.value = type;

  /*
        // ÀÌÀü¿¡ ¾÷·ÎµåÇÑ ÆÄÀÏ ¸®¼ÂÇÏ±â
*/
  if (f.filepath.value && f.mmsv_upload_list.length > lastIndex) {
    f.filepath.value = "";

    for (i = 1; i < lastIndex; i++) {
      f.mmsv_upload_list.options[i].selected = true;
    }

    mmsv_UploadRemove();
  }

  /*
        // Æú´õ µî·Ï½Ã ÆÄÀÏ + Æú´õ¼ö
*/
  lastIndex = 30;
  if (f.mmsv_upload_list.length > lastIndex) {
    alert("ÆÄÀÏ¸ñ·ÏÀº ÃÖ´ë " + lastIndex + "°³±îÁö¸¸ µî·Ï °¡´ÉÇÕ´Ï´Ù.");

    for (i = 1; i < lastIndex; i++) {
      f.mmsv_upload_list.options[i].selected = true;
    }

    mmsv_UploadRemove();

    f.filepath.value = "";
  }

  /*
        // ÆÄÀÏÀÌ³ª Æú´õ°¡ ¼±ÅÃµÇ¾úÀ»¶§¸¸               1°ú ºñ±³ÇÏ´Â ÀÌÀ¯´Â -------Ã·ºÎµÈ ÆÄÀÏ¸ñ·Ï------- ÀÌ°Í ¶§¹®
*/
  if (f.mmsv_upload_list.length > 1) {
    /*
                // ÆÄÀÏ¸®½ºÆ® °¡Á®¿Í¼­ select¸®½ºÆ®·Î »Ñ¸®±â
*/
    for (i = 1; i < f.mmsv_upload_list.length; i++) {
      arr_files_list[i - 1] = f.mmsv_upload_list.options[i].value;

      if (type == "file") {
        if (i > 1) {
          f.mmsv_upload_list.options[i - 1].selected = "unselect";
          mmsv_UploadRemove();
        }
      }
    }

    lastIndex = i;

    var sp_filename = f.mmsv_upload_list.options[1].value.split("\\");

    f.filename.value = sp_filename[sp_filename.length - 1];
    f.mmsv_files.value = "";
    f.mmsv_files.value = arr_files_list.join("<>");

    /*
                // »çÀÌÁî °è»ê
*/
    var plus_size = parseInt("0");

    for (var i = 0; i < arr_files_list.length; i++) {
      var as = arr_files_list[i];
      var split_as = as.split("||");
      if (i == 0) f.filepath.value = split_as[2];

      if (split_as[1] != "-1") {
        plus_size += parseInt(split_as[1]);
      }
    }

    f.size.value = plus_size;

    var mega = Round(f.size.value / 1045576, 0, ""); /*	//¸Þ°¡·Î º¯°æ	*/
    var permWonMin = Math.round(
      mega / MegaPerPoint
    ); /*	// 15¸Þ°¡´ç 1Æ÷ÀÎÆ®·Î º¯°æ	*/
    var permWonMin =
      Math.round(permWonMin / 10) * 10; /*	//Á¤¼öÇü Ã¹Â°ÀÚ¸® Ã³¸®	*/
    if (permWonMin < 30) var permWonMin = 30;
  }

  return;
}

/*
// ¹Ù·Î°¡±â »ý¼º¿¡ ´ëÇÑ registry °ªÀ» ÀÐ¾î ¿Â´Ù
*/
function mmsv_GetCreateShortcut() {
  return WebCtrl.GetCreateShortcut();
}

/*
// ¹Ù·Î°¡±â »ý¼º¿¡ ´ëÇÑ registry °ªÀ» SettingÇÑ´Ù.
*/
function mmsv_SetCreateShortcut(value) {
  return WebCtrl.SetCreateShortcut(value);
}

function WebColapopDirceViewing(
  strMediaFileNo,
  strGreedServer,
  strMediaFileName,
  strSmiFileName
) {
  WebCtrl.ColapopDirceViewing(
    strMediaFileNo,
    strGreedServer,
    strMediaFileName,
    strSmiFileName
  );
  return;
}

mmsv_shortcut("http://filei.co.kr/");

// 2012-12-20
function mmsv_event_201212(_event, _userid, _t, _str) {
  try {
    return WebCtrl.Event_Function(_event, _userid, _t, _str);
  } catch (e) {
    alert("½ÇÄ¡¿À·ùÀÔ´Ï´Ù.");
    return false;
  }
}

function Round(Num, Position, Base) {
  /*
	//Num = ©ö¢¯¢¬©÷ ¨ù
	//Position = ©ö¢¯¢¬©÷ ¢¬¢¥¨ù(¢´¨ù¡¤¢¬¢¬)
	//Base = I ¢¬ ¨ù¨ù¢®¡× ¢¬¢¥¨ù¢¯¢®¨ù¡©, F ¢¬ ¨ù¨ù¢®¨ú¨¡¡¤¢® ¢¬¢¥¨ù¢¯¢®¨ù¡© ©ö¢¯¢¬©÷
*/

  if (Position == 0) return Math.round(Num);
  else if (Position > 0) {
    var cipher = "1";
    for (var i = 0; i < Position; i++) cipher = cipher + "0";
    var no = Number(cipher);
    if (Base == "F") return Math.round(Num * no) / no;
    else return Math.round(Num / no) * no;
  }
}

function parseSize(val, Position) {
  var size = parseInt(val);
  if (size == 0) return "0 Bytes";
  if (size < 1024) result = size + " Bytes";
  else if (size < Math.pow(1024, 2))
    return Round(size / Math.pow(1024, 1), Position, "F") + " KB";
  else if (size < Math.pow(1024, 3))
    return Round(size / Math.pow(1024, 2), Position, "F") + " MB";
  else if (size < Math.pow(1024, 4))
    return Round(size / Math.pow(1024, 3), Position, "F") + " GB";
  else return Round(size / Math.pow(1024, 4), Position, "F") + " TB";
}

function chkPrePayment(type) {
  var form = document[Name_Transe_Form];

  if (mmsv_isChecked()) {
    mmsv_Trans_Make();
    form.action = "/lib/crypt/procPrePayment.php";
    form.pg_mode.value = "prePayment_" + type;
    form.submit();
  } else {
    alert(
      "´Ù¿î ¹ÞÀ¸½Ç ÆÄÀÏÀ» ¼±ÅÃÇÏ¼¼¿ä.\n¾÷·Îµå°¡ ¿Ï·á µÇÁö ¾ÊÀº ÆÄÀÏÀº ¼±ÅÃÇÏ¼Åµµ ´Ù¿î ¹ÞÀ¸½Ç ¼ö ¾ø½À´Ï´Ù!"
    );
  }
}

/*
page: http://www.daoki.com/
url: http://www.daoki.com/mmsv/mmsv_fi.js
*/
