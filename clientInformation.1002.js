// ë ì´ì´ ì¤í¬ë¦½í¸ ë©ì¸ íì1
function displaytya(id) {
  var imgNamea;
  var rea;
  for (i = 1; i <= 3; i++) {
    document.getElementById("submenu" + i).style.display = "none";
    imgNamea = document.getElementById("subMenuImgtya_" + i).src;
    document.getElementById("subMenuImgtya_" + i).src = imgNamea.replace(
      "_up.gif",
      ".gif"
    );
  }
  if (document.getElementById("submenu" + id)) {
    document.getElementById("submenu" + id).style.display = "block";
    imgNamea = document.getElementById("subMenuImgtya_" + id).src;
    document.getElementById("subMenuImgtya_" + id).src = imgNamea.replace(
      ".gif",
      "_up.gif"
    );
  }
}

function reingturntya(id) {
  var imgNamea;
  for (i = 1; i <= 3; i++) {
    document.getElementById("submenu" + i).style.display = "none";
    imgNamea = document.getElementById("subMenuImgtya_" + i).src;
    document.getElementById("subMenuImgtya_" + i).src = imgNamea.replace(
      "_up.gif",
      ".gif"
    );
  }
  if (document.getElementById("submenu" + id)) {
    document.getElementById("submenu" + id).style.display = "block";
    imgNamea = document.getElementById("subMenuImgtya_" + id).src;
    document.getElementById("subMenuImgtya_" + id).src = imgNamea.replace(
      ".gif",
      "_up.gif"
    );
  }
}

//ë¡¤ì¤ë² ì¤í¬ë¦½í¸

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
  //v4.01

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

//

// ìì°½ëì°ê¸°

function openwin(theURL, winName, features) {
  window.open(theURL, winName, features);
}
//

//íëì

var EmbedStr = "";

function GetFlash(url, x, y) {
  EmbedStr =
    "<object id='flash' classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' width='" +
    x +
    "' height='" +
    y +
    "'>";

  EmbedStr += "<param name='allowScriptAccess' value='sameDomain' />";

  EmbedStr += "<param name='movie' value='" + url + "' />";

  EmbedStr += "<param name='quality' value='high' />";

  EmbedStr += "<param name='bgcolor' value='#ffffff' />";

  EmbedStr += "<param name='wmode' value='transparent' />";

  EmbedStr +=
    "<embed src='" +
    url +
    "' quality='high' wmode='transparent' bgcolor='#ffffff' width='" +
    x +
    "' height='" +
    y +
    "' allowScriptAccess='sameDomain' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' />";

  EmbedStr += "</object>";

  document.write(EmbedStr);

  return;
}

//

//pngì½ë©

function setPng24(obj) {
  obj.width = obj.height = 1;

  obj.className = obj.className.replace(/\bpng24\b/i, "");

  obj.style.filter =
    "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
    obj.src +
    "',sizingMethod='image');";

  obj.src = "";

  return "";
}

//ê´ë ¨ ì¬ì´í¸ ë± ìë í¸í¼ ê´ë ¨

function MM_jumpMenu(URL) {
  //v3.0

  if (URL != "") {
    window.open(URL);
  }
}

//

//íë¤ì´ë©ë´
function menu(formname) {
  var target = "_blank"; // íê²
  if (formname.value == "") {
    alert("ë©ë´ë¥¼ ì íí´ì£¼ì¸ì."); // ë©ë´ë¥¼ ì ííì§ìê³  ë²í¼ í´ë¦­ì ì´ë²¤í¸
  } else {
    window.open(document.flink.url.value, target);
    // ìì°½ ìµì
    // width : í­
    // height : ëì´
    // status : ìíë°
    // toolbar : ëêµ¬ëª¨ì
    // resizable : ìµëíë¨ì¶
    // scrollbars : ì¤í¬ë¡¤ë°
    document.flink.url.selectedIndex = 0; // ìì°½ì ëì°ê³  íë¤ì´ë©ë´ ì íí´ì 
  }
}
//

//í­(ë¤ì¤)ê³µì§ì¬í­

function showAbout(show) {
  if (show == "1") {
    About1.style.display = "";
    About2.style.display = "none";
    About3.style.display = "none";
    About4.style.display = "none";
    About5.style.display = "none";
    About6.style.display = "none";
    About7.style.display = "none";
    About8.style.display = "none";
    About9.style.display = "none";
  } else if (show == "2") {
    About1.style.display = "none";
    About2.style.display = "";
    About3.style.display = "none";
    About4.style.display = "none";
    About5.style.display = "none";
    About6.style.display = "none";
    About7.style.display = "none";
    About8.style.display = "none";
    About9.style.display = "none";
  } else if (show == "3") {
    About1.style.display = "none";
    About2.style.display = "none";
    About3.style.display = "";
    About4.style.display = "none";
    About5.style.display = "none";
    About6.style.display = "none";
    About7.style.display = "none";
    About8.style.display = "none";
    About9.style.display = "none";
  } else if (show == "4") {
    About1.style.display = "none";
    About2.style.display = "none";
    About3.style.display = "none";
    About4.style.display = "";
    About5.style.display = "none";
    About6.style.display = "none";
    About7.style.display = "none";
    About8.style.display = "none";
    About9.style.display = "none";
  } else if (show == "5") {
    About1.style.display = "none";
    About2.style.display = "none";
    About3.style.display = "none";
    About4.style.display = "none";
    About5.style.display = "";
    About6.style.display = "none";
    About7.style.display = "none";
    About8.style.display = "none";
    About9.style.display = "none";
  } else if (show == "6") {
    About1.style.display = "none";
    About2.style.display = "none";
    About3.style.display = "none";
    About4.style.display = "none";
    About5.style.display = "none";
    About6.style.display = "";
    About7.style.display = "none";
    About8.style.display = "none";
    About9.style.display = "none";
  } else if (show == "7") {
    About1.style.display = "none";
    About2.style.display = "none";
    About3.style.display = "none";
    About4.style.display = "none";
    About5.style.display = "none";
    About6.style.display = "none";
    About7.style.display = "";
    About8.style.display = "none";
    About9.style.display = "none";
  } else if (show == "8") {
    About1.style.display = "none";
    About2.style.display = "none";
    About3.style.display = "none";
    About4.style.display = "none";
    About5.style.display = "none";
    About6.style.display = "none";
    About7.style.display = "none";
    About8.style.display = "";
    About9.style.display = "none";
  } else {
    About1.style.display = "none";
    About2.style.display = "none";
    About3.style.display = "none";
    About4.style.display = "none";
    About5.style.display = "none";
    About6.style.display = "none";
    About7.style.display = "none";
    About8.style.display = "none";
    About9.style.display = "";
  }
}

//í­(ë¤ì¤)ë§ì´íì´ì§

function showMypage(show) {
  if (show == "1") {
    Mypage1.style.display = "";
    Mypage2.style.display = "none";
    Mypage3.style.display = "none";
  } else if (show == "2") {
    Mypage1.style.display = "none";
    Mypage2.style.display = "";
    Mypage3.style.display = "none";
  } else {
    Mypage1.style.display = "none";
    Mypage2.style.display = "none";
    Mypage3.style.display = "";
  }
}

//í­(ë¤ì¤)

function showTax(show) {
  if (show == "1") {
    Tax1.style.display = "";
    Tax2.style.display = "none";
    Tax3.style.display = "none";
    Tax4.style.display = "none";
    Tax5.style.display = "none";
    Tax6.style.display = "none";
  } else if (show == "2") {
    Tax1.style.display = "none";
    Tax2.style.display = "";
    Tax3.style.display = "none";
    Tax4.style.display = "none";
    Tax5.style.display = "none";
    Tax6.style.display = "none";
  } else if (show == "3") {
    Tax1.style.display = "none";
    Tax2.style.display = "none";
    Tax3.style.display = "";
    Tax4.style.display = "none";
    Tax5.style.display = "none";
    Tax6.style.display = "none";
  } else if (show == "4") {
    Tax1.style.display = "none";
    Tax2.style.display = "none";
    Tax3.style.display = "none";
    Tax4.style.display = "";
    Tax5.style.display = "none";
    Tax6.style.display = "none";
  } else if (show == "5") {
    Tax1.style.display = "none";
    Tax2.style.display = "none";
    Tax3.style.display = "none";
    Tax4.style.display = "none";
    Tax5.style.display = "";
    Tax6.style.display = "none";
  } else {
    Tax1.style.display = "none";
    Tax2.style.display = "none";
    Tax3.style.display = "none";
    Tax4.style.display = "none";
    Tax5.style.display = "none";
    Tax6.style.display = "";
  }
}

//ì¦ê²¨ì°¾ê¸°ì¶ê°

/*function myFavorite(){ 

window.external.AddFavorite('http://seohae.web2002.kr/', '[ìí´íí]') 

}*/

/*ì¦ê²¨ì°¾ê¸° ì¶ê°*/
var sidebarurl = "http://www.nygirlz.co.kr/"; // Change as required
//var sidebartitle = "ìí´íí(ì£¼)"; // Change as required
var sidebartitle = "(ì£¼)ë´ìê±¸ì¦"; // Change as required
var url = this.location;
var title = document.title;

function bookmarksite() {
  if (window.sidebar && window.sidebar.addPanel) {
    // Firefox
    window.sidebar.addPanel(sidebartitle, sidebarurl, "");
  } else if (document.all) {
    // IE Favorite
    window.external.AddFavorite(url, title);
  } else if (window.opera && window.print) {
    // do nothing
  } else if (navigator.appName == "Netscape") {
    alert(
      "íì¸ì í´ë¦­íì  í ì£¼ìì°½ìì <Ctrl-D>ë¥¼ ëë¥´ìë©´ ì¦ê²¨ì°¾ê¸°ì ë±ë¡ë©ëë¤."
    );
  }
}

//

//ì´ë¶

function show(url, _width, _height) {
  if (window.clientInformation.userAgent.indexOf("SV1") > 0) {
    //--WindowXP SP2ê° ì¤ì¹ë íê²½ììì ì¸íìëë¤.

    newWin = window.open(
      url,
      "",
      "toolbar=no location=no directories=no status=no menubar=no scrollbars=no resizable=no width=1024 height=768 top=0 left=0"
    );

    newWin.moveTo(0, 0);

    left1 = (screen.availWidth - 1024 - 5) / 2; //--1024X768 í´ìëì ëª¨ëí°ìì ëíëë eBook Popup ì°½ì ê°ë¡ ì¤ì ìì¹ë¥¼ ì§ì í©ëë¤.

    top1 = (screen.availHeight - 768 - 10) / 2; //--1024X768 í´ìëì ëª¨ëí°ìì ëíëë eBook Popup ì°½ì ì¸ë¡ ì¤ì ìì¹ë¥¼ ì§ì í©ëë¤.

    //ì 1024, 768 ì ì¡°ì ì¼ë¡ ì°½ì´ ëíëë ìì¹ë¥¼ ì¡°ì í  ì ììµëë¤.

    newWin.resizeTo(1024, 768);

    newWin.moveTo(left1, top1);
  } else {
    //--Windows XP SP2 ê° ì¤ì¹ë íê²½ì ì ì¸í íê²½ììì ì¸íìëë¤.

    if (screen.width == _width && screen.height == _height) {
      window.open(url, "", "fullscreen");
    } else {
      left1 = (screen.availWidth - 1024 - 5) / 2;

      top1 = (screen.availHeight - 768 - 10) / 2;

      window.open(
        url,
        "",
        "toolbar=no location=no directories=no status=no menubar=no scrollbars=no resizable=no width=1024 height=768 top=" +
          top1 +
          " left=" +
          left1
      );
    }
  }
}

function getPosition() {
  var start, end, scale, term, doc, body;
  (doc = document.documentElement), (body = document.body);
  start = parseInt(document.getElementById("quickBox").style.top, 0);
  end = ((doc && doc.scrollTop) || (body && body.scrollTop)) + 70;
  term = 1;

  if (start != end) {
    scale = Math.ceil(Math.abs(end - start) / 20);
    if (end < start) scale = -scale;
    document.getElementById("quickBox").style.top =
      parseInt(document.getElementById("quickBox").style.top, 0) + scale + "px";
    term = 1;
  }
  setTimeout("getPosition()", term);
}

function moveBanner() {
  if (!document.getElementById("quickBox")) return false;
  document.getElementById("quickBox").style.top =
    document.documentElement.scrollTop + 500 + "px"; //ì«ìê° ê°ì¼ë©´ ì¬ë¼ì´ë ìë¤.
  getPosition();
  return true;
}

//ììíì´ì§ ì¤ì 
function setPage() {
  document.body.style.behavior = "url(#default#homepage)";
  document.body.setHomePage("http://seohae.web2002.kr/");
}

/*ì¦ê²¨ì°¾ê¸° ì¶ê°*/
var sidebarurl = "http://nygirlz.co.kr/"; // Change as required
var sidebartitle = "ë´ìê±¸ì¦"; // Change as required
var url = this.location;
var title = document.title;

function bookmarksite() {
  if (window.sidebar && window.sidebar.addPanel) {
    // Firefox
    window.sidebar.addPanel(sidebartitle, sidebarurl, "");
  } else if (document.all) {
    // IE Favorite
    window.external.AddFavorite(url, title);
  } else if (window.opera && window.print) {
    // do nothing
  } else if (navigator.appName == "Netscape") {
    alert(
      "íì¸ì í´ë¦­íì  í ì£¼ìì°½ìì <Ctrl-D>ë¥¼ ëë¥´ìë©´ ì¦ê²¨ì°¾ê¸°ì ë±ë¡ë©ëë¤."
    );
  }
}
/*
page: http://www.nygirlz.co.kr/
url: https://nygirlz.co.kr/main/comm/js/script.js
*/
