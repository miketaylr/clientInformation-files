//save text on change langs
function _pull_text(obj) {
  var f = document.forms[0];
  if (!f.from_text.value) return true;

  f.onsubmit = null;
  f.goto.value = obj.href;
  f.submit();

  return false;
}

function _from_lang(lang) {
  if (!lang) return;
  var f = document.forms[0];
  for (var i = 0; i < f.to_lang.length; i++) {
    if (f.to_lang[i].value != lang) continue;

    if (LF) {
      LF.innerHTML = "(" + f.to_lang[i].innerHTML + ")";
      LF.style.display = "";
    }
  }
}

function _translate(f) {
  f.to_text.value = "";
  TO_TEXT.innerHTML = "";
  if (!f.from_text.value) return;

  _progress(true);

  if (f.from_lang.value == "") {
    if (LF) LF.style.display = "none";
    google.language.detect(f.from_text.value, function (result) {
      _from_lang(result.language);
    });
  }

  if (ENGINE == "ms" && USE_AJAX) {
    /*	var src = "http://api.microsofttranslator.com/V2/Ajax.svc/Translate";
		src += "?oncomplete=apply";
		src += "&appId="+MS_API_KEY;
		src += "&from=" + f.from_lang.value;
		src += "&to=" + f.to_lang.value;
		src += "&text=" + encodeURIComponent(f.from_text.value);*/

    //	var token = 'Tstff1WjtrMR5DHJoWDVkWwJvPB9h-Bo8OzQmoFtl4Rs*';
    //	var token = 'Tq4NN6Fft-disEVn4m1XuuMrzfAVDccWvXxOkAgVpS6c*';
    //	var token = 'TOybYT_Jr3V-XXE-tQwMCzNJVUntJN2RPOOm7r7ySvXw*';
    var token = "TRNO-cSztoXBzz-APVsLYKdnPoIb65JWsjlJ_FQ35sNg*";

    if (
      typeof window["_mstConfig"] != "undefined" &&
      typeof window["_mstConfig"].appId != "undefined"
    ) {
      token = window["_mstConfig"].appId;
    }

    var src = "http://api.microsofttranslator.com/v2/ajax.svc/TranslateArray";
    src += '?appId="' + token + '"';

    src += "&texts=[";
    var text = f.from_text.value ? f.from_text.value.match(/[^\r\n]+/g) : [];
    if (text == null) text = [];
    for (var i = 0; i < text.length; i++) {
      var tmp = text[i];
      tmp = tmp.replace(/"/g, "&quot;");
      tmp = tmp.replace(/\t/g, " ");
      tmp = tmp.replace(/\\/g, "\\\\");
      src += (i ? "," : "") + '"' + encodeURIComponent(tmp) + '"';
    }
    src += "]";

    src += '&from="' + f.from_lang.value + '"';
    src += '&to="' + f.to_lang.value + '"';
    src += "&oncomplete=apply";
    src += "&onerror=_onerror";
    src += "&loc=en";
    src += "&ctr=Latvia";
    src += "&rgp=24f3a413"; //1d296da7

    _script(src);
    return;
  }

  /*	if( ENGINE == "google" && USE_AJAX ) {
		var src = "http://translate.google.ru/translate_a/t";
		src += "?client=t";
		src += "&text=" + encodeURIComponent(f.from_text.value);
		src += "&hl=ru";
		src += "&sl="+( f.from_lang.value ? f.from_lang.value : "auto" );
		src += "&tl=" + f.to_lang.value;
		src += "&multires=1";
		src += "&rom=1";
		src += "&prev=btn";
		src += "&ssel=4";
		src += "&tsel=4";
		src += "&uptl=ru";
		src += "&alttl=lv";
		src += "&sc=1";
		
		_script( src );
		return;
	}*/

  /*	//yandex
	if( ENGINE == "yandex" && USE_AJAX ) {
		var src = "http://translate.yandex.ru/tr.json/translate";
		src += "?callback=apply";
		src += "&lang="+f.from_lang.value+"-"+f.to_lang.value;
		src += "&text=" + encodeURIComponent(f.from_text.value);
		
		src += "&srv=tr-text";
		src += "&id=457d490f-0-0";
		src += "&reason=submit";
		
		_script( src );
		return;
	}	*/

  download_src(
    ACTION,
    "POST",
    "txt=" +
      encodeURIComponent(f.from_text.value) +
      "&fl=" +
      f.from_lang.value +
      "&tl=" +
      f.to_lang.value
  );
}

function _onerror(err) {
  _progress(false);
  alert(err ? err : "Error");
}

var TR_HIDDEN = true;
function apply(res, type) {
  _progress(false);

  //responseData: null
  //responseDetails: invalid translation language pair
  //responseStatus: 400
  //responseData: null
  //responseDetails: could not reliably detect source language
  //responseStatus: 400
  if (typeof res == "object" && res.responseStatus) {
    if (/invalid.*language.*pair/.test(res.responseDetails)) {
      var txt = ERR;
      if (LF) {
        txt = txt.replace(
          /:LANG1:/,
          LF.innerHTML.replace(/^\(/, "").replace(/\)$/, "")
        );
      } else if (document.forms[0].from_lang.value) {
        with (document.forms[0].from_lang) {
          txt = txt.replace(/:LANG1:/, options[selectedIndex].innerHTML);
        }
      } else {
        txt = txt.replace(/:LANG1:/, "");
      }

      with (document.forms[0].to_lang) {
        txt = txt.replace(/:LANG2:/, options[selectedIndex].innerHTML);
      }
      alert(txt);
      return;
    } else if (
      /could.*not.*detect.*source.*language/.test(res.responseDetails)
    ) {
      res = false;
    } else {
      alert(res.responseDetails == null ? "Error" : res.responseDetails);
      return;
    }
  }

  if (
    typeof res == "object" &&
    res &&
    res.responseData &&
    typeof res.responseData.translatedText == "string"
  ) {
    res = res.responseData.translatedText;
  } else if (typeof res == "object" && typeof res.length == "number") {
    var tmp = "";
    for (var i = 0; i < res.length; i++) {
      tmp += (tmp ? "\n" : "") + res[i].TranslatedText;
    }
    res = tmp;
  }

  if (!res) {
    document.forms[0].from_lang.focus();

    var txt = ERR2;
    if (document.forms[0].from_lang.value == "") {
      txt = txt.replace(/:OTH:.+:OTH:/, "");
    } else {
      txt = txt.replace(/:OTH:/g, "");
    }
    alert(txt);
    return;
  }

  if (TR_HIDDEN) {
    TR_HIDDEN = false;
    //document.getElementById( "tr_1" ).style.display = "";	//test
    document.getElementById("tr_2").style.display = "";
    document.getElementById("tr_3").style.display = "none";
    document.getElementById("tr_4").style.display = "none";
    document.getElementById("hkw").style.display = "none";
  }

  if (type == 1) {
    document.forms[0].to_text.style.display = "none";
    TO_TEXT.style.display = "";

    if (window.clientInformation) {
      res = res
        .replace(/<t>/gi, '<span class="tr">')
        .replace(/<\/t>/gi, "</span><br> ");
    }
    TO_TEXT.innerHTML = res;
  } else {
    TO_TEXT.style.display = "none";
    document.forms[0].to_text.style.display = "";
    document.forms[0].to_text.value = res;
  }
}

var PROG = false;
var TO = false;
function _progress(use) {
  if (!PROG) PROG = document.getElementById("progress");
  var text = document.forms[0].from_text;
  if (!use) {
    if (TO) clearTimeout(TO);
    PROG.style.display = "none";
    text.style.color = "black";
    return;
  }

  TO = setTimeout(function () {
    PROG.style.display = "";
    text.style.color = "silver";
  }, 500);
}

//text lang choise
function _ftext_sel(obj) {
  if (obj.value == "") {
    if (LF) LF.style.display = "none";
  } else {
    if (LF) {
      LF.style.display = "";
      LF.innerHTML = "(" + obj.options[obj.selectedIndex].innerHTML + ")";
    }
  }
  _layout(obj);
  CHDIR.style.visibility = obj.value == "" ? "hidden" : "visible";
}

//ÑÐ¼ÐµÐ½Ð° ÑÐ°ÑÐºÐ»Ð°Ð´ÐºÐ¸ Ð²Ð¸ÑÑÑÐ°Ð»ÑÐ½Ð¾Ð¹ ÐºÐ»Ð°Ð²Ñ
var KBON = false;
function _layout(obj) {
  if (!KBON) KBON = document.getElementById("kbon");
  var lg = "";
  for (var i in google.elements.keyboard.LayoutCode) {
    if (google.elements.keyboard.LayoutCode[i] != obj.value) continue;
    lg = i;
    break;
  }
  if (lg == "") {
    if (KB) _show_kb(false);
  } else {
    var cc = arguments.callee;
    if (!cc.counter) cc.counter = 0;
    (function () {
      if (!KBOBJ || ++cc.counter < 100) {
        setTimeout(arguments.callee, 100);
        return;
      }
      KBOBJ.setLayout(obj.value);
      KBON.title =
        KBON.title.replace(/\s*\(.+\)/, "") +
        " (" +
        google.elements.keyboard.getLayoutName(obj.value) +
        ")";
    })();
    setTimeout(function () {
      obj.focus();
    }, 100);
  }
  KBON.style.display = lg == "" ? "none" : "inline";
}

//Ð·Ð°Ð¿Ð¾Ð¼Ð¸Ð½Ð°Ð½Ð¸Ðµ Ð¿Ð°Ñ ÑÐ·ÑÐºÐ¾Ð² Ð² Ð¿ÐµÑÐµÐ½ÑÐºÐµ
function _remember_langs(txt) {
  var f = document.forms[0];
  var ff = f.from_lang;
  var tt = f.to_lang;

  document.cookie =
    "tfrom=" +
    (ff.value ? ff.value : "auto") +
    ";path=/;Domain=." +
    location.host;
  document.cookie = "tto=" + tt.value + ";path=/;Domain=." + location.host;

  alert(txt);
}

var KB = false;
var KBSHOW = false;
function _show_kb(set) {
  if (!KB) KB = document.getElementById("kbd");
  if (!KB) return;
  KBSHOW = !KBSHOW;
  if (set != null) KBSHOW = set;
  KB.style.display = KBSHOW ? "inline" : "none";

  var cc = arguments.callee;
  if (!cc.counter) cc.counter = 0;
  (function () {
    if (!KBOBJ || ++cc.counter < 100) {
      setTimeout(arguments.callee, 100);
      return;
    }
    KBOBJ.setVisible(KBSHOW);
  })();
}
/*
page: http://www.translate.eu/
url: http://www.translate.eu/js/translate.js?10
*/
