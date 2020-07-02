function loadScript(js) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = js;
  script.async = true;
  document.body.appendChild(script);
}

// Àü¼Û´ã´ç ¾ÆÀÌÇÁ·¹ÀÓ
document.write(
  '<iframe name="nfileIFrame" frameborder="0" style="display:none;" width="0" height="0" src="about:blank"></iframe>'
);

/* ÄÁÆ®·Ñ ¼³Ä¡¿©ºÎ */
function nfile_check() {
  try {
    var agt = navigator.userAgent.toLowerCase();
    var isIE11 = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
    if (agt.indexOf("msie") != -1 || isIE11) {
      WebCtrl.CheckInstall();
    }
    return true;
  } catch (e) {
    return false;
  }
}

function nfile_IsWinXPSP2() {
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

function nfile_shortcut(url) {
  if (!nfile_check()) return;
  WebCtrl.MakeShortCut(url);
}

/*
#### ¾÷·Îµå ·çÆ¾ ###
type : 0=°Å·¡¼Ò, 1=ºí·Î±×, 2=°³ÀÎÀÚ·á
idx : _webhard_bbs / _webhard_blog
aaaaaaaaaaaaaaaaaaaaaa
*/
function nfile_upload(userid, userpw, idx) {
  WebCtrl.UpLoad(userid, userpw, 0, idx);
  return;
}
/*
#### ´Ù¿î·Îµå ·çÆ¾ ###
type : 0=°Å·¡¼Ò, 1=ºí·Î±×, 2=°³ÀÎÀÚ·á
idx : _webhard_bbs / _webhard_blog
idx_ : _webhard_purchase
*/

function nfile_download(userid, userpw, idx, idx_purchase, ftp) {
  //alert(userid+"|"+userpw+"|"+idx+"|"+idx_purchase+"|"+ftp);
  var agt = navigator.userAgent.toLowerCase();
  var isIE11 = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
  if (agt.indexOf("msie") != -1 || isIE11) {
    WebCtrl.DownLoad(userid, userpw, 0, idx, idx_purchase, ftp, 1);
  } else {
    document
      .getElementById("NKWebhard")
      .DownLoad(userid, userpw, 0, idx, idx_purchase, ftp, 1);
  }

  try {
    Show_Share_layout_obj = parent.document.getElementById("GNB");
    Show_Share_layout_obj.style.display = "";
  } catch (e) {}

  return;
}

//¹Â·¹Ä« ´Ù¿î·Îµå(´Ù½Ã ¹Þ±â)
function nfile_downloads_re(userid, userpw, idx, idx_purchase, ftp) {
  //alert(userid+"|"+userpw+"|"+type+"|"+idx+"|"+idx_+"|"+ftp+"|"+name);
  var agt = navigator.userAgent.toLowerCase();
  var isIE11 = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
  if (agt.indexOf("msie") != -1 || isIE11) {
    WebCtrl.DownLoads(userid, userpw, 0, idx, idx_purchase, ftp, 1, 2);
  } else {
    document
      .getElementById("NKWebhard")
      .DownLoads(userid, userpw, 0, idx, idx_purchase, ftp, 1, 2);
  }

  try {
    Show_Share_layout_obj = parent.document.getElementById("GNB");
    Show_Share_layout_obj.style.display = "";
  } catch (e) {}

  return;
}
//¹Â·¹Ä« ´Ù¿î·Îµå

function nfile_downloads_hash(userid, userpw, idx, idx_purchase, ftp) {
  //alert(userid+"|"+userpw+"|"+type+"|"+idx+"|"+idx_+"|"+ftp+"|"+name);
  var agt = navigator.userAgent.toLowerCase();
  var isIE11 = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
  if (agt.indexOf("msie") != -1 || isIE11) {
    WebCtrl.DownLoads(userid, userpw, 0, idx, idx_purchase, ftp, 1, 3);
  } else {
    document
      .getElementById("NKWebhard")
      .DownLoads(userid, userpw, 0, idx, idx_purchase, ftp, 1, 3);
  }

  try {
    Show_Share_layout_obj = parent.document.getElementById("GNB");
    Show_Share_layout_obj.style.display = "";
  } catch (e) {}

  return;
}

//¹Â·¹Ä« ´Ù¿î·Îµå
function nfile_downloads(userid, userpw, idx, idx_purchase, ftp) {
  //alert(userid+"|"+userpw+"|"+type+"|"+idx+"|"+idx_+"|"+ftp+"|"+name);
  var agt = navigator.userAgent.toLowerCase();
  var isIE11 = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
  if (agt.indexOf("msie") != -1 || isIE11) {
    WebCtrl.DownLoads(userid, userpw, 0, idx, idx_purchase, ftp, 1, 1);
  } else {
    document
      .getElementById("NKWebhard")
      .DownLoads(userid, userpw, 0, idx, idx_purchase, ftp, 1, 1);
  }

  try {
    Show_Share_layout_obj = parent.document.getElementById("GNB");
    Show_Share_layout_obj.style.display = "";
  } catch (e) {}

  return;
}

/* #### Àü¼Û¾ÆÀÌÅÛ °ü·Ã ·çÆ¾ ### */
/* ¼±ÅÃµÈ ¾ÆÀÌÅÛ °¹¼ö */
function nfile_checkCountSet() {
  var count = 0;
  var size = 0;
  var form = document[Name_Transe_Form];

  // Æú´õ Ã¼Å©
  var chkBox_foloer = form.elements["nfile_trans_folder"];
  var chkLen_folder = chkBox_foloer.length;

  if (!chkLen_folder) {
    if (chkBox_foloer.checked && chkBox_foloer.value != "") count++;
  } else {
    for (i = 0; i < chkLen_folder; i++) {
      if (chkBox_foloer[i].checked && chkBox_foloer[i].value != "") count++;
    }
  }

  // ÆÄÀÏ Ã¼Å©
  var chkBox_file = form.elements["nfile_trans_file"];
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

/* Àü¼Û¾ÆÀÌÅÛ Ã¼Å©¹Ú½º Å¬¸¯(Æú´õ) */
function nfile_checkFolder(obj) {
  var chkBox = obj.form.elements["nfile_trans_folder"];
  var chkLen = chkBox.length;

  if (!chkLen) {
    if (chkBox.value.indexOf(obj.value) >= 0) chkBox.checked = obj.checked;
  } else {
    for (i = 0; i < chkLen; i++) {
      if (chkBox[i].value.indexOf(obj.value) >= 0)
        chkBox[i].checked = obj.checked;
    }
  }

  var chkBox = obj.form.elements["nfile_trans_file"];
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

  nfile_checkCountSet();
}
/* Àü¼Û¾ÆÀÌÅÛ Ã¼Å©¹Ú½º Å¬¸¯(ÆÄÀÏ) */
function nfile_checkFile() {
  nfile_checkCountSet();
}
/* Àü¼Û¾ÆÀÌÅÛ ÆÄÀÏÀÌ ÇÏ³ª ÀÌ»ó ¼±ÅÃµÇ¾ú´ÂÁö Ã¼Å© */
function nfile_isChecked() {
  var form = document[Name_Transe_Form];
  var chkBox = form.elements["nfile_trans_file"];
  var chkLen = chkBox.length;

  // ¼±ÅÃµÈ ÆÄÀÏÀÌ ÀÖ´ÂÁö Ã¼Å©
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
/* Àü¼Û¾ÆÀÌÅÛ ´Ù¿î·Îµå */
function nfile_downloadFile() {
  var form = document[Name_Transe_Form];

  if (nfile_isChecked()) {
    nfile_Trans_Make();
    form.pg_mode.value = "nfile_down";
    form.submit();
  } else {
    alert(
      "´Ù¿î ¹ÞÀ¸½Ç ÆÄÀÏÀ» ¼±ÅÃÇÏ¼¼¿ä.\n¾÷·Îµå°¡ ¿Ï·á µÇÁö ¾ÊÀº ÆÄÀÏÀº ¼±ÅÃÇÏ¼Åµµ ´Ù¿î ¹ÞÀ¸½Ç ¼ö ¾ø½À´Ï´Ù."
    );
  }
}
/* ¸ðµç ¾ÆÀÌÅÛ ¼±ÅÃ */
function nfile_checkAll(bcall) {
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
  var chkBox = form.elements["nfile_trans_folder"];
  var chkLen = chkBox.length;

  if (!chkLen) {
    chkBox.checked = bcheck;
  } else {
    for (i = 0; i < chkLen; i++) {
      chkBox[i].checked = bcheck;
    }
  }

  // ÆÄÀÏ Ã¼Å©
  var chkBox = form.elements["nfile_trans_file"];
  var chkLen = chkBox.length;

  if (!chkLen) {
    chkBox.checked = bcheck;
  } else {
    for (i = 0; i < chkLen; i++) {
      chkBox[i].checked = bcheck;
    }
  }

  nfile_checkCountSet();
}
/* ¸ðµç ¾ÆÀÌÅÛ ´Ù¿î·Îµå */
function nfile_downloadAll() {
  nfile_checkAll(true);
  nfile_downloadFile();
}
/* ¼±ÅÃ¾ÆÀÌÅÛ ÀÌ¾î¿Ã¸®±â */
function nfile_uploadFile() {
  var form = document[Name_Transe_Form];

  if (nfile_isChecked()) {
    nfile_Trans_Make();
    form.pg_mode.value = "nfile_up";
    form.submit();
  } else {
    alert("ÀÌ¾î¿Ã¸®±â ÇÏ½Ç ÆÄÀÏÀ» ¼±ÅÃÇÏ¼¼¿ä.");
  }
}
/* ¼±ÅÃÆÄÀÏ Á¦°Å*/
function nfile_removeFile() {
  var form = document[Name_Transe_Form];

  if (nfile_isChecked()) {
    if (confirm("»èÁ¦ÇÏ½Ã°Ú½À´Ï±î")) {
      nfile_Trans_Make();
      form.pg_mode.value = "nfile_remove";
      form.submit();
    }
  } else {
    alert("»èÁ¦ÇÏ½Ç ÆÄÀÏÀ» ¼±ÅÃÇÏ¼¼¿ä.");
  }
}
/* Àü¼Û ¾ÆÀÌÅÛ ¸ñ·Ï ¹®ÀÚ¿­ »ý¼º */
function nfile_Trans_Make() {
  // ÀüÃ¼ ¼±ÅÃ
  var arr_files_list = new Array();
  var arr_folders_list = new Array();

  var form = document[Name_Transe_Form];

  var chkBox_files = form.elements["nfile_trans_file"];
  var chkLen_files = chkBox_files.length;

  var chkBox_folders = form.elements["nfile_trans_folder"];
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

  form.nfile_files.value = "";
  form.nfile_folders.value = "";

  form.nfile_files.value = arr_files_list.join("<>");
  form.nfile_folders.value = arr_folders_list.join("<>");
}
function fileKeeping() {
  var form = document[Name_Transe_Form];
  form.pg_mode.value = "nfile_keeping";
  form.submit();
}

/* #### ¾÷·Îµå ÆÄÀÏ Ãß°¡ ·çÆ¾ ### */

/* ¾÷·Îµå ÆÄÀÏ Ãß°¡ ¸®½ºÆ® »ý¼º = ±Ûº¸±â */
function nfile_Upload_Add_Make() {
  var form = document[Name_Insert_Form];

  if (form.nfile_upload_list.length == 1) {
    alert("Ãß°¡ ¾÷·Îµå ÇÏ½Ç ÆÄÀÏÀ» ¼±ÅÃÇØ ÁÖ¼¼¿ä!");
    return false;
  }

  var arr_files_list = new Array();
  for (i = 1; i < form.nfile_upload_list.length; i++) {
    form.nfile_upload_list.options[i].selected = true;
    arr_files_list[i - 1] = form.nfile_upload_list.options[i].value;
  }
  form.nfile_files.value = "";
  form.nfile_files.value = arr_files_list.join("<>");

  form.submit();
  return true;
}

/* ¾÷·Îµå ÆÄÀÏ ¼±ÅÃÃ¢ */
var lastIndex = "";

function nfile_DoUpload(type) {
  nfile_Upload_Insert(type);
}

var ADT_cash_check = false;

function nfile_Upload_Insert(type) {
  var agt = navigator.userAgent.toLowerCase();
  var isIE11 = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);

  if (!nfile_check()) {
    alert(
      "ÄÁÅÙÃ÷ ¾÷·Îµå¸¦ À§ÇØ¼­´Â\n»ó´ÜÀÇ ÆÄÀÏ¼­¹ö ÆÄÀÏÀü¼Û °ü¸®ÀÚ¸¦ ¼³Ä¡ÇØÁÖ¼¼¿ä."
    );
    return;
  }
  var f = document.uploadForm;

  if (type == "file") {
    if (agt.indexOf("msie") != -1 || isIE11) {
      WebCtrl.ShowDlgFile();
    } else {
      document.getElementById("NKWebhard").ShowDlgFile();
    }
  } else if (type == "folder") {
    if (agt.indexOf("msie") != -1 || isIE11) {
      WebCtrl.ShowDlgFolder();
    } else {
      document.getElementById("NKWebhard").ShowDlgFolder();
    }
  }

  var arr_files_list = new Array();
  f.filetype.value = type;

  //ÀÌÀü¿¡ ¾÷·ÎµåÇÑ ÆÄÀÏ ¸®¼ÂÇÏ±â
  if (f.filepath.value && f.nfile_upload_list.length > lastIndex) {
    f.filepath.value = "";
    for (i = 1; i < lastIndex; i++) {
      f.nfile_upload_list.options[i].selected = true;
    }
    nfile_UploadRemove();
  }

  //Æ¯¼ö ÆÄÀÏ È®ÀåÀÚ Ã¼Å©
  Check_nds = 0;
  for (i = 1; i < f.nfile_upload_list.length; i++) {
    Select_File_Datas = f.nfile_upload_list.options[i].value;
    Select_File_Datas_ary = Select_File_Datas.split("||");
    File_Type_name = Select_File_Datas_ary[2].substr(
      Select_File_Datas_ary[2].length - 4
    );

    Real_file_type_lower = File_Type_name.substr(1, 3);

    if (
      File_Type_name.substr(0, 1) == "." &&
      Real_file_type_lower.toLowerCase() == "nds"
    ) {
      f.nfile_upload_list.options[i] = null;
      Check_nds = 1;
    }
  }

  if (Check_nds)
    alert("¼±ÅÃÇÑ ÆÄÀÏÁß NDSÆÄÀÏÀÌ ÀÖ¾î ¼±ÅÃ ÆÄÀÏ¿¡¼­ Á¦¿ÜµÇ¾ú½À´Ï´Ù.");

  if (f.nfile_upload_list.length > 1) {
    //ÆÄÀÏ¸®½ºÆ® °¡Á®¿Í¼­ select¸®½ºÆ®·Î »Ñ¸®±â
    for (i = 1; i < f.nfile_upload_list.length; i++) {
      //f.nfile_upload_list.options[i].selected = true;
      arr_files_list[i - 1] = f.nfile_upload_list.options[i].value;
    }
    lastIndex = i;
    var sp_filename = f.nfile_upload_list.options[1].value.split("\\");
    var jjangu_tempName = sp_filename[sp_filename.length - 1].split("||");
    f.filename.value = jjangu_tempName[0];
    f.nfile_files.value = "";
    f.nfile_files.value = arr_files_list.join("<>");

    //»çÀÌÁî °è»ê
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

    var mega = Math.round(f.size.value / 1045576, 0, ""); //¸Þ°¡·Î º¯°æ

    //±âÁ¸ 10%
    var permWonMin = Math.round(mega / 10);
    permWonMin = Math.round(permWonMin / 10) * 10; //Á¤¼öÇü Ã¹Â°ÀÚ¸® Ã³¸®

    //		var permWonMin = Math.floor(mega*0.09);
    //		permWonMin = Math.floor(permWonMin/10)*10;//Á¤¼öÇü Ã¹Â°ÀÚ¸® Ã³¸®

    if (permWonMin < 10) permWonMin = 10;

    if ($("#category1").val() == "ADT") {
      ADT_cash_check = true;
      //			permWonMin *= 2;
    } else ADT_cash_check = false;

    f.cash.value = permWonMin;

    //$('div_size').innerHTML=parseSize(f.size.value,2);
    $("#div_size").html(parseSize(f.size.value, 2));

    /* ¿ë·®Á¦ÇÑ ÇØÁ¦ 20130118
		if(plus_size > 10737418240){
			alert('ÄÁÅÙÃ÷´ç ÃÖ´ë 10±â°¡±îÁö ¾÷·Îµå°¡ °¡´ÉÇÕ´Ï´Ù.     \n\n¿ë·®ÀÌ Å¬ °æ¿ì ºÐÇÒÇØ¼­ µî·ÏÇØÁÖ½Ã±â ¹Ù¶ø´Ï´Ù.      ');
		}
*/
  }
  return;
}

/* Ãß°¡ ¾÷·Îµå ¸ñ·Ï ¸®½ºÆ® */
function nfile_UploadSelect(mode) {
  var form = document[Name_Insert_Form];
  for (i = 1; i < form.nfile_upload_list.length; i++) {
    form.nfile_upload_list.options[i].selected =
      mode == "select" ? true : false;
  }
}

/* Ãß°¡ ¾÷·Îµå ¸ñ·Ï Ãß°¡½Ã Áßº¹Ã¼Å© */
function nfile_UploadCheck(strPath) {
  var form = document[Name_Insert_Form];
  for (i = 1; i < form.nfile_upload_list.length; i++) {
    if (form.nfile_upload_list[i].text == strPath) return i;
  }

  return 0;
}

/* Ãß°¡ ¼±ÅÃ ¾÷·Îµå ¸ñ·Ï Á¦°Å */
function nfile_UploadRemove() {
  var form = document[Name_Insert_Form];
  var deleted = 0;

  // Æú´õ°¡ ¼±ÅÃµÇ¾ú´ÂÁö Ã¼Å©
  for (i = form.nfile_upload_list.length - 1; i > 0; i--) {
    if (form.nfile_upload_list.options[i].selected == true) {
      info = form.nfile_upload_list[i].value.split("||");
      if (info[1] == "-1") {
        for (j = 1; j < form.nfile_upload_list.length; j++) {
          if (
            form.nfile_upload_list[j].text.indexOf(
              form.nfile_upload_list[i].text
            ) >= 0
          ) {
            form.nfile_upload_list.options[j].selected = true;
          }
        }
      }
    }
  }

  for (i = form.nfile_upload_list.length - 1; i > 0; i--) {
    if (form.nfile_upload_list.options[i].selected == true) {
      for (j = i; j < form.nfile_upload_list.length - 1; j++) {
        form.nfile_upload_list[j].value = form.nfile_upload_list[j + 1].value;
        form.nfile_upload_list[j].text = form.nfile_upload_list[j + 1].text;
      }
      deleted++;
    }
  }

  form.nfile_upload_list.length -= deleted;

  nfile_UploadSelect("unselect");
}

/* ¼±ÅÃµÈ ÆÄÀÏ¸®½ºÆ® */
document.write(
  '<script type="text/javascript" for="WebCtrl" event="UpSelectComplete(strPath,  strSize, strMode, strHash)">'
);
document.write("var form = document[Name_Insert_Form];");
document.write("if(form.nfile_upload_list.length < 10000) {");
document.write("		idx = nfile_UploadCheck(strPath);");
document.write("		if(idx){");
document.write('				info = form.nfile_upload_list[idx].value.split("||"); ');
document.write('				if (info[0] == "-1" || info[0].indexOf(strMode) >= 0) {');
document.write(
  '					form.nfile_upload_list[idx].value = strMode + "||" + strSize + "||" + strPath;'
);
document.write("				}");
document.write("		}");
document.write("		else {");
document.write("				form.nfile_upload_list.length++;");
document.write(
  '				form.nfile_upload_list[form.nfile_upload_list.length-1].value = strMode + "||" + strSize + "||" + strPath + "||" + strHash;'
);
document.write(
  "				form.nfile_upload_list[form.nfile_upload_list.length-1].text = strPath;"
);
document.write("		}");
document.write("	}");
document.write("</script>");

/* ÄÁÆ®·Ñ ¼³Ä¡ È®ÀÎ */
//nfile_check();

function nfile_OpenUpLoad(ta, filepath) {
  WebCtrl.OpenUpLoad(ta + "/" + filepath);
  return;
}

function nfile_OpenDownLoad(fileName) {
  WebCtrl.OpenDownLoad(fileName);
  return;
}

/*	 ###2007-12-07 ¼öÁ¤###
	¿ÀÇÂÀÚ·á½Ç ´Ù¿î·Îµå , ¾÷·Îµå
	// ÆÄÀÏ ¾÷·Îµå : ftp¼­¹öÀÎµ¦½º/ftp¼­¹öµð·ºÅä¸®/ÆÄÀÏ¸í  ex) 1/caption/file.exe
	// Æú´õ ¾÷·Îµå : ftp¼­¹öÀÎµ¦½º/ftp¼­¹öµð·ºÅä¸®/Æú´õ¸í\ÆÄÀÏ¸í/Æú´õ¸í\ÆÄÀÏ¸í ex)1/caption/folder1\file1.exe/folder1\file2.exe
*/

function nfile_OpenUpLoad1(no, table, filepath, type) {
  if (type == "file") {
    WebCtrl.OpenUpLoad(no + "/" + table + "/" + filepath);
    return;
  } else if (type == "folder") {
    WebCtrl.OpenUpLoad(no + "/" + table + "/" + filepath + "\\");
    return;
  }
}

function nfile_OpenDownLoad1(no, ta, filepath, type) {
  WebCtrl.OpenDownLoad(no + "/" + ta + "/" + filepath);
  return;
}

/* ÄÁÆ®·Ñ ¼³Ä¡¿©ºÎ */
function open_check() {
  try {
    WebCtrl.UpdateOpenCheck();
    return true;
  } catch (e) {
    //		alert("¿ÀÇÂÀÚ·á½Ç ÄÁÆ®·ÑÀÌ ¼³Ä¡µÇÁö ¾Ê¾Ò½À´Ï´Ù.     \n»ó´ÜÀÇ ¾Ë¸² Ç¥½ÃÁÙÀ» Å¬¸¯ÇØÁÖ½Ê½Ã¿ä.    ");
    //alert(e);
    return false;
  }
}

function openPdsUploadInsert(f) {
  //Æû¸í
  WebCtrl.ShowDlgOpenFile();

  var f = document[Name_Insert_Form];
  var arr_files_list = new Array();

  if (f.nfile_upload_list.length > 1) {
    // ÆÄÀÏÀÌ³ª Æú´õ°¡ ¼±ÅÃµÇ¾úÀ»¶§¸¸		1°ú ºñ±³ÇÏ´Â ÀÌÀ¯´Â -------Ã·ºÎµÈ ÆÄÀÏ¸ñ·Ï------- ÀÌ°Í ¶§¹®

    //ÆÄÀÏ¸®½ºÆ® °¡Á®¿Í¼­ select¸®½ºÆ®·Î »Ñ¸®±â
    for (i = 1; i < f.nfile_upload_list.length; i++) {
      //	f.nfile_upload_list.options[i].selected = true;
      //	alert(f.nfile_upload_list.options[i].value);
      arr_files_list[i - 1] = f.nfile_upload_list.options[i].value;
      if (i > 1) {
        f.nfile_upload_list.options[i - 1].selected = "unselect";
        nfile_UploadRemove();
      }
    }
    lastIndex = i;
    var sp_filename = f.nfile_upload_list.options[1].value.split("\\");
    f.filename.value = sp_filename[sp_filename.length - 1];
    f.nfile_files.value = "";
    f.nfile_files.value = arr_files_list.join("<>");

    //»çÀÌÁî °è»ê
    var plus_size = parseInt("0");
    for (var i = 0; i < arr_files_list.length; i++) {
      var as = arr_files_list[i];
      var split_as = as.split("||");
      if (i == 0) f.filepath.value = split_as[2]; //	$('printpath').innerHTML=split_as[2];

      if (split_as[1] != "-1") {
        plus_size += parseInt(split_as[1]);
      }
    }

    f.size.value = plus_size;

    var mega = Round(f.size.value / 1045576, 0, ""); //¸Þ°¡·Î º¯°æ
    //		var permWonMin = Math.round(mega/10);
    if (
      document.all.category1.value == "ADT" ||
      document.all.category1.value == "req"
    ) {
      var permWonMin = Math.round(mega / 10); // 10¸Þ°¡´ç 1Æ÷ÀÎÆ®·Î º¯°æ
    } else {
      var permWonMin = Math.round(mega / 10); // 10¸Þ°¡´ç 1Æ÷ÀÎÆ®·Î º¯°æ
      //var permWonMin = Math.round(mega/16); // 16¸Þ°¡´ç 1Æ÷ÀÎÆ®·Î º¯°æ
    }
    var permWonMin = Math.round(permWonMin / 10) * 10; //Á¤¼öÇü Ã¹Â°ÀÚ¸® Ã³¸®
    if (permWonMin < 10) var permWonMin = 10;
  }

  return;
}

/*##########################################
		¿ÀÇÂÀÚ·á½Ç  Start
		type  = file, folder
*/
function openPdsUploadInsert1(type) {
  //Æû¸í

  var f = document[Name_Insert_Form];
  var arr_files_list = new Array();

  if (type == "file") {
    WebCtrl.ShowDlgOpenFile();
  } else if (type == "folder") {
    WebCtrl.ShowDlgOpenFolder();
  }

  f.filetype.value = type;

  //ÀÌÀü¿¡ ¾÷·ÎµåÇÑ ÆÄÀÏ ¸®¼ÂÇÏ±â
  if (f.filepath.value && f.nfile_upload_list.length > lastIndex) {
    f.filepath.value = "";
    for (i = 1; i < lastIndex; i++) {
      f.nfile_upload_list.options[i].selected = true;
    }
    nfile_UploadRemove();
  }

  lastIndex = 30; //Æú´õ µî·Ï½Ã ÆÄÀÏ + Æú´õ¼ö
  if (f.nfile_upload_list.length > lastIndex) {
    alert("ÆÄÀÏ¸ñ·ÏÀº ÃÖ´ë " + lastIndex + "°³±îÁö¸¸ µî·Ï °¡´ÉÇÕ´Ï´Ù.");
    for (i = 1; i < lastIndex; i++) {
      f.nfile_upload_list.options[i].selected = true;
    }
    nfile_UploadRemove();
    f.filepath.value = "";
  }

  if (f.nfile_upload_list.length > 1) {
    for (i = 1; i < f.nfile_upload_list.length; i++) {
      arr_files_list[i - 1] = f.nfile_upload_list.options[i].value;
      if (type == "file") {
        if (i > 1) {
          f.nfile_upload_list.options[i - 1].selected = "unselect";
          nfile_UploadRemove();
        }
      }
    }
    lastIndex = i;
    var sp_filename = f.nfile_upload_list.options[1].value.split("\\");
    f.filename.value = sp_filename[sp_filename.length - 1];
    f.nfile_files.value = "";
    f.nfile_files.value = arr_files_list.join("<>");

    //»çÀÌÁî °è»ê
    var plus_size = parseInt("0");
    for (var i = 0; i < arr_files_list.length; i++) {
      var as = arr_files_list[i];
      var split_as = as.split("||");
      if (i == 0) f.filepath.value = split_as[2]; //	$('printpath').innerHTML=split_as[2];

      if (split_as[1] != "-1") {
        plus_size += parseInt(split_as[1]);
      }
    }

    f.size.value = plus_size;

    var mega = Round(f.size.value / 1045576, 0, ""); //¸Þ°¡·Î º¯°æ
    //		var permWonMin = Math.round(mega/10);
    if (
      document.all.category1.value == "ADT" ||
      document.all.link_idx.value != "" ||
      document.all.chkGrade.value > 1
    ) {
      var permWonMin = Math.round(mega / 10); // 10¸Þ°¡´ç 1Æ÷ÀÎÆ®·Î º¯°æ
    } else {
      var permWonMin = Math.round(mega / 10); // 10¸Þ°¡´ç 1Æ÷ÀÎÆ®·Î º¯°æ
      //var permWonMin = Math.round(mega/16); // 16¸Þ°¡´ç 1Æ÷ÀÎÆ®·Î º¯°æ
    }
    var permWonMin = Math.round(permWonMin / 10) * 10; //Á¤¼öÇü Ã¹Â°ÀÚ¸® Ã³¸®
    if (permWonMin < 10) var permWonMin = 10;
  }

  return;
}

/*#########################################################
   ¿ÀÇÂÀÚ·á½Ç  End
*/

/* select Ã¼Å©ÇÏ¸é ¾÷·Îµå ÆÄÀÏ ¼±ÅÃÃ¢ */
var lastIndex = "";

function nfile_Upload_Insert_Re(type) {
  if (!nfile_check()) return;
  var f = document.uploadForm;

  var arr_files_list = new Array();

  f.filetype.value = type;

  //ÀÌÀü¿¡ ¾÷·ÎµåÇÑ ÆÄÀÏ ¸®¼ÂÇÏ±â
  if (f.filepath.value && f.nfile_upload_list.length > lastIndex) {
    f.filepath.value = "";
    for (i = 1; i < lastIndex; i++) {
      f.nfile_upload_list.options[i].selected = true;
    }
    alert(1);
    nfile_UploadRemove();
  }

  if (f.nfile_upload_list.length > 1) {
    for (i = 1; i < f.nfile_upload_list.length; i++) {
      arr_files_list[i - 1] = f.nfile_upload_list.options[i].value;
    }
    lastIndex = i;
    var sp_filename = f.nfile_upload_list.options[1].value.split("\\");
    f.filename.value = sp_filename[sp_filename.length - 1];
    f.nfile_files.value = "";
    f.nfile_files.value = arr_files_list.join("<>");

    //»çÀÌÁî °è»ê
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

    var mega = Round(f.size.value / 1045576, 0, ""); //¸Þ°¡·Î º¯°æ

    if (
      document.all.category1.value == "ADT" ||
      document.all.link_idx.value != "" ||
      document.all.chkGrade.value > 1
    ) {
      var permWonMin = Math.round(mega / 10); // 10¸Þ°¡´ç 1Æ÷ÀÎÆ®·Î º¯°æ
    } else {
      var permWonMin = Math.round(mega / 10); // 10¸Þ°¡´ç 1Æ÷ÀÎÆ®·Î º¯°æ
      //var permWonMin = Math.round(mega/16); // 16¸Þ°¡´ç 1Æ÷ÀÎÆ®·Î º¯°æ
    }
    var permWonMin = Math.round(permWonMin / 10) * 10; //Á¤¼öÇü Ã¹Â°ÀÚ¸® Ã³¸®
    if (permWonMin < 10) var permWonMin = 10;
    f.cash.value = permWonMin;

    $("div_size").innerHTML = parseSize(f.size.value, 2);

    /* ¿ë·®Á¦ÇÑ ÇØÁ¦ 20130118
		if(plus_size > 10737418240){
			alert('ÄÁÅÙÃ÷´ç ÃÖ´ë 10±â°¡±îÁö ¾÷·Îµå°¡ °¡´ÉÇÕ´Ï´Ù.     \n\n¿ë·®ÀÌ Å¬ °æ¿ì ºÐÇÒÇØ¼­ µî·ÏÇØÁÖ½Ã±â ¹Ù¶ø´Ï´Ù.      ');
		}
*/
  }

  return;
}

//############ÀúÀÛ±Ç //added by jjangu 2008-11-18
function nfile_Upload_Insert_Hash(type) {
  if (!nfile_check()) {
    alert(
      "ÄÁÅÙÃ÷ ¾÷·Îµå¸¦ À§ÇØ¼­´Â\n½º¸¶Æ®ÆÄÀÏ ÆÄÀÏÀü¼Û °ü¸®ÀÚ ÇÁ·Î±×·¥ÀÌ ¼³Ä¡ µÇ¾î¾ß ÇÕ´Ï´Ù."
    );
    windowOpenCenter("/contents/pop_activex.htm", "AXInfoWin", "510", "720");
    return;
  }
  var f = document.uploadForm;

  if (type == "file") WebCtrl.ShowDlgFile();
  else if (type == "folder") WebCtrl.ShowDlgFolder();
  var arr_files_list = new Array();

  f.filetype.value = type;

  //ÀÌÀü¿¡ ¾÷·ÎµåÇÑ ÆÄÀÏ ¸®¼ÂÇÏ±â
  if (f.filepath.value && f.nfile_upload_list.length > lastIndex) {
    f.filepath.value = "";
    for (i = 1; i < lastIndex; i++) {
      f.nfile_upload_list.options[i].selected = true;
    }
    nfile_UploadRemove();
  }

  if (f.nfile_upload_list.length > 1) {
    // ÆÄÀÏÀÌ³ª Æú´õ°¡ ¼±ÅÃµÇ¾úÀ»¶§¸¸		1°ú ºñ±³ÇÏ´Â ÀÌÀ¯´Â -------Ã·ºÎµÈ ÆÄÀÏ¸ñ·Ï------- ÀÌ°Í ¶§¹®

    //ÆÄÀÏ¸®½ºÆ® °¡Á®¿Í¼­ select¸®½ºÆ®·Î »Ñ¸®±â
    for (i = 1; i < f.nfile_upload_list.length; i++) {
      //f.nfile_upload_list.options[i].selected = true;
      //	alert(f.nfile_upload_list.options[i].value);
      arr_files_list[i - 1] = f.nfile_upload_list.options[i].value;
    }
    lastIndex = i;
    var sp_filename = f.nfile_upload_list.options[1].value.split("\\");
    var temp_fileNames = sp_filename[sp_filename.length - 1].split("||");
    f.filename.value = temp_fileNames[0];
    f.nfile_files.value = "";
    f.nfile_files.value = arr_files_list.join("<>");

    //»çÀÌÁî °è»ê
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
    /* ¿ë·®Á¦ÇÑ ÇØÁ¦ 20130118
		if(plus_size > 6424018944){
			alert('ÃÖ´ë 4±â°¡±îÁö ¾÷·Îµå°¡ °¡´ÉÇÕ´Ï´Ù.     \r\n\r\n¿ë·®ÀÌ Å¬ °æ¿ì ºÐÇÒÇØ¼­ µî·ÏÇØÁÖ½Ã±â ¹Ù¶ø´Ï´Ù.      ');
		}
*/
  }
  return;
}

/*
page: http://www.smartfile.co.kr/
url: http://smartfile.co.kr/js/app.js
*/
