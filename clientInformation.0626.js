var CK_MEMBERID = 0;
var CK_PASSWORD = 1;
var CK_NAME = 2;
var CK_SEX = 3;
var CK_AGE = 4;
var CK_VALID = 5;
var CK_AVATARID = 6;
var CK_IDVALID = 7;
var CK_NICKNAME = 8;
var CK_SOCIALID = 9;
var CK_ABSUID = 10;
var CK_ABSSTATUS = 11;
var CK_PLUSLINK = 12;
var CK_SERVICE = 13;
var CK_SUBUPDATE = 14;
var CK_REGPATH = 15;
var CK_ROOMID = 20;
var CK_FIGCLASS = 21;
var CK_EMAILCHK = 22;
var CK_BIRTHDAY = 23;
var CK_USERNO = 24;
var CK_AVITEMEXPIRE = 25;
var CK_CHCLASSNO = 26;

var MAX_PASSWORD_LEN = 8;
var FIX_DOMAIN = "hangame.co.jp";
var FIX_DOMAIN_MOBILE = "hange.jp";

var __host_suffix = "";
var __host_prefix = "";

// use: footer menu.
var onresizeFunctions = new Array();
var onscrollFunctions = new Array();

var noJindoUtil = function () {};
noJindoUtil.prototype = {
  getElementsByClass: function (baseId, targetClass) {
    var allElements = document.getElementById(baseId).getElementsByTagName("*");
    var classElements = new Array();

    for (var i = 0, j = 0, sand; (sand = allElements[i]); i++) {
      if (sand.className == targetClass) {
        classElements[j] = sand;
        j++;
      }
    }
    return classElements;
  },

  bind: function (bind, fnc) {
    return function () {
      return fnc.apply(bind, arguments);
    };
  },
};

var noJindoRollOverImage = function (argu) {
  var options = (this.opt = this._getOptionSet(argu));
  this._base = document.getElementById(options.id);

  if (!this._base) return;

  this.noJindoUtilObj = new noJindoUtil();
  this.imgArr = this.noJindoUtilObj.getElementsByClass(
    options.id,
    options.imgCss
  );
  this._addEvent();
};

noJindoRollOverImage.prototype = {
  _getOptionSet: function (argu) {
    var option = {
      imgCss: "_rollOver",
      imgOn: "on",
    };
    if (typeof argu == "undefined") argu = new Object();
    for (var x in argu) option[x] = argu[x];
    return option;
  },
  _addEvent: function () {
    for (var i = 0, elm; (elm = this.imgArr[i]); i++) {
      if (elm.attachEvent) {
        elm.attachEvent(
          "onmouseover",
          this.noJindoUtilObj.bind(this, this.over)
        );
        elm.attachEvent("onmouseout", this.noJindoUtilObj.bind(this, this.out));
      } else {
        elm.addEventListener(
          "mouseover",
          this.noJindoUtilObj.bind(this, this.over),
          false
        );
        elm.addEventListener(
          "mouseout",
          this.noJindoUtilObj.bind(this, this.out),
          false
        );
      }
    }
  },
  over: function (e) {
    e.srcElement ? (e = e.srcElement) : (e = e.currentTarget);
    var src = e.src;
    var on = this.opt.imgOn;
    src = src.replace(new RegExp("(^.+)(..{3}$)"), "$1" + on + "$2");
    e.src = src;
  },
  out: function (e) {
    e.srcElement ? (e = e.srcElement) : (e = e.currentTarget);
    var src = e.src;
    var on = this.opt.imgOn;
    src = src.replace(new RegExp("(^.*)" + on + "(..{3}$)"), "$1$2");
    e.src = src;
  },
};

// footer menu functions
function setOnresize(func) {
  onresizeFunctions.push(func);
}

function setOnscroll(func) {
  onscrollFunctions.push(func);
}

function hg_onresize() {
  for (var i = 0; i < onresizeFunctions.length; i++) {
    onresizeFunctions[i]();
  }
}

function hg_onscroll() {
  for (var i = 0; i < onscrollFunctions.length; i++) {
    onscrollFunctions[i]();
  }
}
// tooter menu functions

// onResize-Event Æ onScroll-EventÍAhg_onresize, hg_onscrollÅÇµÜ·
window.onresize = hg_onresize;
window.onscroll = hg_onscroll;

setDomain();
//document.domain = "hangame.co.jp";

var GMT_KOREA = -540;

// var USERDETAIL_OPTION = "width=301,height=512,maximize=no,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no,screenX=100,screenY=100,left=100,top=100";
var USERDETAIL_OPTION =
  "width=760,height=600,maximize=no,location=no,menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no,screenX=100,screenY=100,left=100,top=100";
var BILL_WIDTH = 570;
var BILL_HEIGHT = 750;
var BILL_OPTION = "yes";

//--- AtBG[g»f ---
var IspHost = new Array("netcafe", "liv");
var aspcounter = 0;
var bAspFlg = 0;
var sHost = document.URL.substr(7);
sHost = sHost.substr(0, sHost.indexOf("."));
for (aspcounter = 0; aspcounter < IspHost.length; aspcounter++) {
  if (sHost == IspHost[aspcounter]) {
    bAspFlg = 1;
  }
}
var sAdHead = "http://ad2.hangame.co.jp/ad?loc=";
var sAdFoot = "&showme=js";
var sAdAsp = "";
if (bAspFlg == 1) {
  sAdAsp = "_aff";
}

function openWin(sURL, sWindowName, w, h, sScroll) {
  // æÊÌPopup - ScrollbarÍIvV
  // ex)
  //      openWin("test.asp", "winTest", 400, 300);     ¡ Scrollbar³µ
  //      openWin("test.asp", "winTest", 400, 300, "yes");  ¡ ScrollbarLè
  //      openWin("test.asp", "winTest", 400, 300, "auto"); ¡ Scrollbar©®

  var x = (screen.width - w) / 2;
  var y = (screen.height - h) / 2;

  if (sScroll == null) sScroll = "no";

  var sOption = "";
  sOption =
    sOption +
    "toolbar=no, channelmode=no, location=no, directories=no, resizable=yes, menubar=no";
  sOption =
    sOption +
    ", scrollbars=" +
    sScroll +
    ", left=" +
    x +
    ", top=" +
    y +
    ", width=" +
    w +
    ", height=" +
    h;

  if (window.name == sWindowName) {
    var win = window.open(sURL, "", sOption);
    win.name = sWindowName;
    window.close();
  } else {
    var win = window.open(sURL, sWindowName, sOption);
  }
  win.focus();
  return win;
}

function openWinFreePos(sURL, sWindowName, w, h, x, y, sScroll) {
  // æÊÁèÊuÌPopup - ScrollbarÍIvV
  // ex)
  //      openWin("test.asp", "winTest", 400, 300, 0, 0);      ¡ Scrollbar³µ
  //      openWin("test.asp", "winTest", 400, 300, 0, 0 "yes");  ¡ ScrollbarLè
  //      openWin("test.asp", "winTest", 400, 300, 0, 0 "auto"); ¡ Scrollbar©®

  if (sScroll == null) sScroll = "no";

  var sOption = "";
  sOption =
    sOption +
    "toolbar=no, channelmode=no, location=no, directories=no, resizable=yes, menubar=no";
  sOption =
    sOption +
    ", scrollbars=" +
    sScroll +
    ", left=" +
    x +
    ", top=" +
    y +
    ", width=" +
    w +
    ", height=" +
    h;

  var win = window.open(sURL, sWindowName, sOption);
  return win;
}

function outputCopyright() {
  // ey[WÌºÉCopyrightüêé
  // ex)
  //      outputCopyright();
  /*
  document.write("<table width=\"100%\" bgcolor=\"#37416E\" border=0 cellspacing=0 cellpadding=0>");
  document.write("<tr><td height=1 bgcolor=gray></td></tr>");
  document.write("<tr valign=middle height=44>");
  document.write("  <td align=center height=44>");
  document.write("    <font style=\"color: white; font-face: verdana,helvetica,gulim; font-size: 10pt\">Copyright(C) Since 2000 NHN PlayArt Corp. All rights reserved.</font>");
  document.write("  </td>");
  document.write("</tr>");
  document.write("</table>");
  */
  //setFooter("game");
}

function getCookie(n) {
  // NbL - OCÌîñÇÞ
  // ex)
  //      id = getCookie(CK_MEMBERID);    ¨ IDÇÞ

  var ckLogin = getStrCookie("login");
  if (ckLogin == "" || ckLogin == "undefined" || ckLogin == null) return "";
  var sList = ckLogin.split("%2C");

  if (n < sList.length) {
    if (n == CK_AVATARID) {
      return sList[n].customReplace("%2D", "-").replace(/%5F/g, "_"); // ÈÕfR[h
    } else {
      return sList[n];
    }
  }

  return "";
}

function getStrCookie(sName) {
  // NbLÇÞ

  var lName, aRec, aData, aValue, n, sCook;
  lName = sName.toLowerCase();
  var aCook = document.cookie.replace(/\0$/, "").split("; "); // for IE9beta's bug

  for (var i = 0; i < aCook.length; i++) {
    aRec = aCook[i].split("=");
    if (aRec.length == 1 && lName == aRec[0].toLowerCase()) {
      return "";
    } else if (aRec.length == 2) {
      //hangame.co.jpÌÈOÌTCg(KeyªÈ¢ê)
      if (lName == aRec[0].toLowerCase()) return aRec[1];
    } else {
      if (aCook[i].indexOf("&") > 0) {
        aData = aCook[i].split("&");
        for (var j = 0; j < aData.length; j++) {
          if (j == 0) {
            n = aData[0].indexOf("=");
            sCook = aData[0].substring(0, n);
            aData[0] = aData[0].substring(n + 1, aData[0].length);
          }
          aValue = aData[j].split("=");
          if (
            lName == sCook.toLowerCase() &&
            getKey() == aValue[0].toLowerCase()
          )
            return aValue[1];
        }
      } else {
        aValue = aCook[i].split("=");
        if (lName == aValue[0].toLowerCase() && aValue.length < 3) return "";
        else if (
          lName == aValue[0].toLowerCase() &&
          getKey() == aValue[1].toLowerCase()
        )
          return aValue[2];
      }
    }
  }

  return "";
}

function setStrCookie(sName, sValue, nExpireDay) {
  if (typeof nExpireDay == "number") {
    var exDate = new Date();
    exDate.setMonth(exDate.getMonth() + nExpireDay);
    sValue += ";expires=" + exDate.toGMTString();
  }

  document.cookie = sName + "=" + sValue + ";domain=" + getFixDomain();
  return "";
}

function setStrCookieForCui(sName, sValue, nExpireDay) {
  if (typeof nExpireDay == "number") {
    var exDate = new Date();
    exDate.setMonth(exDate.getMonth() + nExpireDay);
    sValue += ";expires=" + exDate.toGMTString();
  }

  document.cookie =
    sName + "=" + sValue + "; domain=" + getFixDomain() + "; Path=/";
  return "";
}

function setMenuURL(sValue) {
  setStrCookie("menuurl", sValue);
}

function numberFormat(nVar, nSize) {
  // 0000000123Ì`®ÉÔÒ  nSizeÌÈªÌê 00 ~ 99
  // ex)
  //      n = 2;
  //      s = numberFormat(n, 5);     ¨ s = "00002"
  //      s = numberFormat(n);        ¨ s = "02"

  if (nSize == null) nSize = 2;

  var s = "0000000000" + nVar;
  var n = s.length;

  return s.substring(n - nSize, n);
}

function isNum(sVal) {
  // `®©È¢©¸
  // ex)
  //      b = isNum("123")          ¨ b = true
  //      b = isNum("123°¡³ª´Ù")    ¨ b = false

  if (sVal == "") return false;
  for (var i = 0; i < sVal.length; i++) {
    if (sVal.charAt(i) < "0") return false;
    if (sVal.charAt(i) > "9") return false;
  }
  return true;
}

function isErrorID_Char(sBuf) {
  // StringÉÁêLª éêÉtrueð Return

  var sChk = "!@#$%&*()|'[];:\" ^|><~`=+-\\/{}^_,.?";
  for (var i = 0; i < sBuf.length; i++) {
    if (sChk.indexOf(sBuf.charAt(i)) >= 0) {
      return true;
    }
  }
  return false;
}

function isErrorAddress(sBuf) {
  // StringÉÁêLª éêÉtrueð Return (óe)

  var sChk = "!@#$%&*()|'[];:\"^|><~`=+-\\/{}^_,.?";
  for (var i = 0; i < sBuf.length; i++) {
    if (sChk.indexOf(sBuf.charAt(i)) >= 0) {
      return true;
    }
  }
  return false;
}

function isErrorID_Word(sBuf) {
  // StringÉÁêIDª éêÉtrueð Return

  var sChk = "admin,root,doumi,ubnf,qlor,anbf,mouky".split(",");
  for (var i = 0; i < sChk.length; i++) {
    if (sBuf.indexOf(sChk[i]) >= 0) {
      return true;
    }
  }
  return false;
}

String.prototype.trim = function () {
  // StringÌó
  // ex)
  //    s = "       ÐÐÐ     ".trim(); ¨ s = "ÐÐÐ"

  return this.replace(/(^\s*)|(\s*$)/g, "");
};

String.prototype.customReplace = function (a, b) {
  // StringÌÏX
  // ex)
  //    s = "abcTTTdef".replace("TTT", ""); ¨ s = "abcdef"

  var s = this;
  var n1, n2, s1, s2;

  while (true) {
    if (s == "" || a == "") break;
    n1 = s.indexOf(a);
    if (n1 < 0) break;
    n2 = n1 + a.length;
    if (n1 == 0) {
      s1 = b;
    } else {
      s1 = s.substring(0, n1) + b;
    }
    if (n2 >= s.length) {
      s2 = "";
    } else {
      s2 = s.substring(n2, s.length);
    }
    s = s1 + s2;
  }
  return s;
};

function checkEmail(EmailForm) {
  //email `FbN
  var strEmail = EmailForm.value;
  var i;
  var strCheck1 = false;
  var strCheck2 = false;
  var iEmailLen = strEmail.length;
  if (iEmailLen > 0) {
    // strEmail É '.@', '@.' ª éêÉG[bZ[W
    // strEmail ÌnßÉÜ½ÍIíèÉ '@', '.' ª éêÉG[bZ[W
    if (
      strEmail.indexOf(".@") != -1 ||
      strEmail.indexOf("@.") != -1 ||
      strEmail.substring(0, 1) == "." ||
      strEmail.substring(0, 1) == "@" ||
      strEmail.substring(iEmailLen - 1, iEmailLen) == "." ||
      strEmail.substring(iEmailLen - 1, iEmailLen) == "@"
    ) {
      alert("Emailð³µ­üÍµÄº³¢¡");
      EmailForm.focus();
      return false;
    }
    for (i = 0; i < iEmailLen; i++) {
      if (
        strEmail.substring(i, i + 1) == "." ||
        strEmail.substring(i, i + 1) == "-" ||
        strEmail.substring(i, i + 1) == "_" ||
        (strEmail.substring(i, i + 1) >= "0" &&
          strEmail.substring(i, i + 1) <= "9") ||
        (strEmail.substring(i, i + 1) >= "@" &&
          strEmail.substring(i, i + 1) <= "Z") ||
        (strEmail.substring(i, i + 1) >= "a" &&
          strEmail.substring(i, i + 1) <= "z")
      ) {
        if (strEmail.substring(i, i + 1) == ".") strCheck1 = true;
        if (strEmail.substring(i, i + 1) == "@") strCheck2 = true;
      } else {
        alert("Emailð³µ­üÍµÄº³¢¡");
        EmailForm.focus();
        return false;
      }
    }

    if (strCheck1 == false || strCheck2 == false) {
      alert("\nEmailð³µ­üÍµÄº³¢¡");
      EmailForm.focus();
      return false;
    }
  }
  return true;
}

function getTargetString(sGameid) {
  var gm, ag, sx;

  gm = sGameid == null ? getStrCookie("gameid") : sGameid;
  ag = getCookie(CK_AGE);
  sx = getCookie(CK_SEX).toLowerCase();

  return "&showme=html&gm=" + gm + "&ag=" + ag + "&sx=" + sx;
}

function getTimezone() {
  // Client GMT..

  now = new Date();
  return now.getTimezoneOffset();
}

function isKorean() {
  // ClientªØ©¸

  return getTimezone() == GMT_KOREA;
}

function getAdvurl(sAdcase, sGameid) {
  // ClientÌÉïÁÄ¢éLReturn

  var sTarget = getTargetString(sGameid);
  var sKor = "http://hangamead.naver.com/ad?loc=hangame." + sAdcase + sTarget;
  var sEtc =
    "http://naver128.naver.com:10040/ad?loc=hangame." + sAdcase + sTarget;

  if (!isKorean()) {
    if (typeof fraUsid == "object") {
      // ClientªOÌêÉIDÌvÌ½ßÉ
      fraUsid.location.href =
        "http://www.hangame.net/user/cuser.jsp?t=" +
        getTimezone() / 60 +
        "&uid=" +
        txtUsid.value;
    }
  }

  return isKorean() ? sKor : sEtc;
}

function errPassword(sPassword, sBirth) {
  // pX[h¸
  // ex)
  //    bErr = errPassword("abcd");   pX[hÉsÂ\È¶ÌêÉ bErr © true

  var ch, i, nLen, sSocialID;

  nLen = sPassword.length;
  if (nLen < MAX_PASSWORD_LEN) return true;

  ch = sPassword.substring(0, 1);
  for (i = 0; i < nLen; i++) {
    if (ch != sPassword.substring(i, i + 1)) break;
  }
  if (i >= nLen) return true;
  if (sBirth && sBirth.indexOf(sPassword) >= 0) return true;
  if (sPassword == "1234") return true;

  return false;
}

function getFixDomain() {
  var s = document.domain;

  if (s.indexOf(FIX_DOMAIN) >= 0) {
    return FIX_DOMAIN;
  } else {
    var n = s.indexOf(".");
    return s.substring(n + 1, s.length);
  }
}

function getKey() {
  var s, sKey;
  s = document.location.href;
  var protocol = document.location.protocol;
  var isHttpRequest = protocol == "http:" || protocol == "https:";

  if (getFixDomain() == FIX_DOMAIN && isHttpRequest) {
    s = s.substring(protocol.length + 2, s.length); // vgR + "//" ªÌ·³
    sKey = s.substring(0, s.indexOf("."));
    if (sKey.toLowerCase() != "gamegate") {
      if (__bTest) {
        sKey = "hangametest";
      } else {
        sKey = "hangame";
      }
    }
  } else {
    sKey = "";
  }
  return sKey.toLowerCase();
}

function setTopMenu(s) {
  if (typeof top.frames[0].oclick == "function") {
    top.frames[0].oclick(s);
  }
}

function setDomain() {
  document.domain = getFixDomain();
  // document.domain = "hangame.co.jp";
  // window.status = document.domain;
}

//AD
function putAdCode(sAdId) {
  document.write(
    '<script language=javascript src="' +
      sAdHead +
      sAdId +
      sAdAsp +
      sAdFoot +
      '"></script>'
  );
}
var LOGINHOST_domain = new Array("hgj", "ncf", "liv");

function putAdCodeNew(sAdSv, sAdId, sAdHost) {
  var sAdAff = "";
  var aff_host = getCookieHost();
  var cnt;
  for (cnt = 0; cnt <= LOGINHOST_domain.length; cnt++) {
    if (aff_host == LOGINHOST_domain[cnt]) {
      sAdAff = "_aff";
    }
  }
  if (sAdHost == "www.") {
    sAdAff = "";
  }
  document.write(
    '<script language=javascript src="http://' +
      sAdSv +
      ".hangame.co.jp/ad?loc=" +
      sAdId +
      sAdAff +
      sAdFoot +
      '"></script>'
  );
}

//PROFILE
var JCT11280;

function escapeSJIS(str) {
  if (typeof JCT11280 == "undefined")
    JCT11280 = Function(
      'var a="zKV33~jZ4zN=~ji36XazM93y!{~k2y!o~k0ZlW6zN?3Wz3W?{EKzK[33[`y|;-~j^YOTz$!~kNy|L1$353~jV3zKk3~k-4P4zK_2+~jY4y!xYHR~jlz$_~jk4z$e3X5He<0y!wy|X3[:~l|VU[F3VZ056Hy!nz/m1XD61+1XY1E1=1y|bzKiz!H034zKj~mEz#c5ZA3-3X$1~mBz$$3~lyz#,4YN5~mEz#{ZKZ3V%7Y}!J3X-YEX_J(3~mAz =V;kE0/y|F3y!}~m>z/U~mI~j_2+~mA~jp2;~m@~k32;~m>V}2u~mEX#2x~mBy+x2242(~mBy,;2242(~may->2&XkG2;~mIy-_2&NXd2;~mGz,{4<6:.:B*B:XC4>6:.>B*BBXSA+A:X]E&E<~r#z+625z s2+zN=`HXI@YMXIAXZYUM8X4K/:Q!Z&33 3YWX[~mB`{zKt4z (zV/z 3zRw2%Wd39]S11z$PAXH5Xb;ZQWU1ZgWP%3~o@{Dgl#gd}T){Uo{y5_d{e@}C(} WU9|cB{w}bzvV|)[} H|zT}d||0~{]Q|(l{|x{iv{dw}(5}[Z|kuZ }cq{{y|ij}.I{idbof%cu^d}Rj^y|-M{ESYGYfYsZslS`?ZdYO__gLYRZ&fvb4oKfhSf^d<Yeasc1f&a=hnYG{QY{D`Bsa|u,}Dl|_Q{C%xK|Aq}C>|c#ryW=}eY{L+`)][YF_Ub^h4}[X|?r|u_ex}TL@YR]j{SrXgo*|Gv|rK}B#mu{R1}hs|dP{C7|^Qt3|@P{YVV |8&}#D}ef{e/{Rl|>Hni}R1{Z#{D[}CQlQ||E}[s{SG_+i8eplY[=[|ec[$YXn#`hcm}YR|{Ci(_[ql|?8p3]-}^t{wy}4la&pc|3e{Rp{LqiJ],] `kc(]@chYnrM`O^,ZLYhZB]ywyfGY~aex!_Qww{a!|)*lHrM{N+n&YYj~Z b c#e_[hZSon|rOt`}hBXa^i{lh|<0||r{KJ{kni)|x,|0auY{D!^Sce{w;|@S|cA}Xn{C1h${E]Z-XgZ*XPbp]^_qbH^e[`YM|a||+=]!Lc}]vdBc=j-YSZD]YmyYLYKZ9Z>Xcczc2{Yh}9Fc#Z.l{}(D{G{{mRhC|L3b#|xK[Bepj#ut`H[,{E9Yr}1b{[e]{ZFk7[ZYbZ0XL]}Ye[(`d}c!|*y`Dg=b;gR]Hm=hJho}R-[n}9;{N![7k_{UbmN]rf#pTe[x8}!Qcs_rs[m`|>N}^V})7{^r|/E}),}HH{OYe2{Skx)e<_.cj.cjoMhc^d}0uYZd!^J_@g,[[[?{i@][|3S}Yl3|!1|eZ|5IYw|1D}e7|Cv{OHbnx-`wvb[6[4} =g+k:{C:}ed{S]|2M]-}WZ|/q{LF|dYu^}Gs^c{Z=}h>|/i|{W]:|ip{N:|zt|S<{DH[p_tvD{N<[8Axo{X4a.^o^X>Yfa59`#ZBYgY~_t^9`jZHZn`>G[oajZ;X,i)Z.^~YJe ZiZF^{][[#Zt^|]Fjx]&_5dddW]P0C[-]}]d|y {C_jUql] |OpaA[Z{lp|rz}:Mu#]_Yf6{Ep?f5`$[6^D][^u[$[6^.Z8]]ePc2U/=]K^_+^M{q*|9tYuZ,s(dS{i=|bNbB{uG}0jZOa:[-]dYtu3]:]<{DJ_SZIqr_`l=Yt`gkTnXb3d@kiq0a`Z{|!B|}e}Ww{Sp,^Z|0>_Z}36|]A|-t}lt{R6pi|v8hPu#{C>YOZHYmg/Z4nicK[}hF_Bg|YRZ7c|crkzYZY}_iXcZ.|)U|L5{R~qi^Uga@Y[xb}&qdbd6h5|Btw[}c<{Ds53[Y7]?Z<|e0{L[ZK]mXKZ#Z2^tavf0`PE[OSOaP`4gi`qjdYMgys/?[nc,}EEb,eL]g[n{E_b/vcvgb.{kcwi`~v%|0:|iK{Jh_vf5lb}KL|(oi=LrzhhY_^@`zgf[~g)[J_0fk_V{T)}I_{D&_/d9W/|MU[)f$xW}?$xr4<{Lb{y4}&u{XJ|cm{Iu{jQ}CMkD{CX|7A}G~{kt)nB|d5|<-}WJ}@||d@|Iy}Ts|iL|/^|no|0;}L6{Pm]7}$zf:|r2}?C_k{R(}-w|`G{Gy[g]bVje=_0|PT{^Y^yjtT[[[l!Ye_`ZN]@[n_)j3nEgMa]YtYpZy].d-Y_cjb~Y~[nc~sCi3|zg}B0}do{O^{|$`_|D{}U&|0+{J3|8*]iayx{a{xJ_9|,c{Ee]QXlYb]$[%YMc*]w[aafe]aVYi[fZEii[xq2YQZHg]Y~h#|Y:thre^@^|_F^CbTbG_1^qf7{L-`VFx Zr|@EZ;gkZ@slgko`[e}T:{Cu^pddZ_`yav^Ea+[#ZBbSbO`elQfLui}.F|txYcbQ`XehcGe~fc^RlV{D_0ZAej[l&jShxG[ipB_=u:eU}3e8[=j|{D(}dO{Do[BYUZ0/]AYE]ALYhZcYlYP/^-^{Yt_1_-;YT`P4BZG=IOZ&]H[e]YYd[9^F[1YdZxZ?Z{Z<]Ba2[5Yb[0Z4l?]d_;_)a?YGEYiYv`_XmZs4ZjY^Zb]6gqGaX^9Y}dXZr[g|]Y}K aFZp^k^F]M`^{O1Ys]ZCgCv4|E>}8eb7}l`{L5[Z_faQ|c2}Fj}hw^#|Ng|B||w2|Sh{v+[G}aB|MY}A{|8o}X~{E8paZ:]i^Njq]new)`-Z>haounWhN}c#{DfZ|fK]KqGZ=:u|fqoqcv}2ssm}.r{]{nIfV{JW)[K|,Z{Uxc|]l_KdCb%]cfobya3`p}G^|LZiSC]U|(X|kBlVg[kNo({O:g:|-N|qT}9?{MBiL}Sq{`P|3a|u.{Uaq:{_o|^S}jX{Fob0`;|#y_@[V[K|cw[<_ }KU|0F}d3|et{Q7{LuZttsmf^kYZ`Af`}$x}U`|Ww}d]| >}K,r&|XI|*e{C/a-bmr1fId4[;b>tQ_:]hk{b-pMge]gfpo.|(w[jgV{EC1Z,YhaY^q,_G[c_g[J0YX]`[h^hYK^_Yib,` {i6vf@YM^hdOKZZn(jgZ>bzSDc^Z%[[o9[2=/YHZ(_/Gu_`*|8z{DUZxYt^vuvZjhi^lc&gUd4|<UiA`z]$b/Z?l}YI^jaHxe|;F}l${sQ}5g}hA|e4}?o{ih}Uz{C)jPe4]H^J[Eg[|AMZMlc}:,{iz}#*|gc{Iq|/:|zK{l&}#u|myd{{M&v~nV};L|(g|I]ogddb0xsd7^V})$uQ{HzazsgxtsO^l}F>ZB]r|{7{j@cU^{{CbiYoHlng]f+nQ[bkTn/}<-d9q {KXadZYo+n|l[|lc}V2{[a{S4Zam~Za^`{HH{xx_SvF|ak=c^[v^7_rYT`ld@]:_ub%[$[m](Shu}G2{E.ZU_L_R{tz`vj(f?^}hswz}GdZ}{S:h`aD|?W|`dgG|if{a8|J1{N,}-Ao3{H#{mfsP|[ bzn+}_Q{MT{u4kHcj_q`eZj[8o0jy{p7}C|[}l){MuYY{|Ff!Ykn3{rT|m,^R|,R}$~Ykgx{P!]>iXh6[l[/}Jgcg{JYZ.^qYfYIZl[gZ#Xj[Pc7YyZD^+Yt;4;`e8YyZVbQ7YzZxXja.7SYl[s]2^/Ha$[6ZGYrb%XiYdf2]H]kZkZ*ZQ[ZYS^HZXcCc%Z|[(bVZ]]:OJQ_DZCg<[,]%Zaa [g{C00HY[c%[ChyZ,Z_`PbXa+eh`^&jPi0a[ggvhlekL]w{Yp^v}[e{~;k%a&k^|nR_z_Qng}[E}*Wq:{k^{FJZpXRhmh3^p>de^=_7`|ZbaAZtdhZ?n4ZL]u`9ZNc3g%[6b=e.ZVfC[ZZ^^^hD{E(9c(kyZ=bb|Sq{k`|vmr>izlH[u|e`}49}Y%}FT{[z{Rk}Bz{TCc/lMiAqkf(m$hDc;qooi[}^o:c^|Qm}a_{mrZ(pA`,}<2sY| adf_%|}`}Y5U;}/4|D>|$X{jw{C<|F.hK|*A{MRZ8Zsm?imZm_?brYWZrYx`yVZc3a@f?aK^ojEd {bN}/3ZH]/$YZhm^&j 9|(S|b]mF}UI{q&aM]LcrZ5^.|[j`T_V_Gak}9J[ ZCZD|^h{N9{~&[6Zd{}B}2O|cv]K}3s}Uy|l,fihW{EG`j_QOp~Z$F^zexS`dcISfhZBXP|.vn|_HYQ|)9|cr]<`&Z6]m_(ZhPcSg>`Z]5`~1`0Xcb4k1{O!bz|CN_T{LR|a/gFcD|j<{Z._[f)mPc:1`WtIaT1cgYkZOaVZOYFrEe[}T$}Ch}mk{K-^@]fH{Hdi`c*Z&|Kt{if[C{Q;{xYB`dYIX:ZB[}]*[{{p9|4GYRh2ao{DS|V+[zd$`F[ZXKadb*A] Ys]Maif~a/Z2bmclb8{Jro_rz|x9cHojbZ{GzZx_)]:{wAayeDlx}<=`g{H1{l#}9i|)=|lP{Qq}.({La|!Y{i2EZfp=c*}Cc{EDvVB|;g}2t{W4av^Bn=]ri,|y?|3+}T*ckZ*{Ffr5e%|sB{lx^0]eZb]9[SgAjS_D|uHZx]dive[c.YPkcq/}db{EQh&hQ|eg}G!ljil|BO]X{Qr_GkGl~YiYWu=c3eb}29v3|D|}4i||.{Mv})V{SP1{FX}CZW6{cm|vO{pS|e#}A~|1i}81|Mw}es|5[}3w{C`h9aL]o{}p[G`>i%a1Z@`Ln2bD[$_h`}ZOjhdTrH{[j_:k~kv[Sdu]CtL}41{I |[[{]Zp$]XjxjHt_eThoa#h>sSt8|gK|TVi[Y{t=}Bs|b7Zpr%{gt|Yo{CS[/{iteva|cf^hgn}($_c^wmb^Wm+|55jrbF|{9^ q6{C&c+ZKdJkq_xOYqZYSYXYl`8]-cxZAq/b%b*_Vsa[/Ybjac/OaGZ4fza|a)gY{P?| I|Y |,pi1n7}9bm9ad|=d{aV|2@[(}B`d&|Uz}B}{`q|/H|!JkM{FU|CB|.{}Az}#P|lk}K{|2rk7{^8^?`/|k>|Ka{Sq}Gz}io{DxZh[yK_#}9<{TRdgc]`~Z>JYmYJ]|`!ZKZ]gUcx|^E[rZCd`f9oQ[NcD_$ZlZ;Zr}mX|=!|$6ZPZYtIo%fj}CpcN|B,{VDw~gb}@hZg`Q{LcmA[(bo`<|@$|o1|Ss}9Z_}tC|G`{F/|9nd}i=}V-{L8aaeST]daRbujh^xlpq8|}zs4bj[S`J|]?G{P#{rD{]I`OlH{Hm]VYuSYUbRc*6[j`8]pZ[bt_/^Jc*[<Z?YE|Xb|?_Z^Vcas]h{t9|Uwd)_(=0^6Zb{Nc} E[qZAeX[a]P^|_J>e8`W^j_Y}R{{Jp__]Ee#e:iWb9q_wKbujrbR}CY`,{mJ}gz{Q^{t~N|? gSga`V_||:#mi}3t|/I`X{N*|ct|2g{km}gi|{={jC}F;|E}{ZZjYf*frmu}8Tdroi{T[|+~}HG{cJ}DM{Lp{Ctd&}$hi3|FZ| m}Kr|38}^c|m_|Tr{Qv|36}?Up>|;S{DV{k_as}BK{P}}9p|t`jR{sAm4{D=b4pWa[}Xi{EjwEkI}3S|E?u=X0{jf} S|NM|JC{qo^3cm]-|JUx/{Cj{s>{Crt[UXuv|D~|j|d{YXZR}Aq}0r}(_{pJfi_z}0b|-vi)Z mFe,{f4|q`b{}^Z{HM{rbeHZ|^x_o|XM|L%|uFXm}@C_{{Hhp%a7|0p[Xp+^K}9U{bP}: tT}B|}+$|b2|[^|~h{FAby[`{}xgygrt~h1[li`c4vz|,7p~b(|mviN}^pg[{N/|g3|^0c,gE|f%|7N{q[|tc|TKA{LU}I@|AZp(}G-sz{F |qZ{}F|f-}RGn6{Z]_5})B}UJ{FFb2]4ZI@v=k,]t_Dg5Bj]Z-]L]vrpdvdGlk|gF}G]|IW}Y0[G| /bo|Te^,_B}#n^^{QHYI[?hxg{[`]D^IYRYTb&kJ[cri[g_9]Ud~^_]<p@_e_XdNm-^/|5)|h_{J;{kacVopf!q;asqd}n)|.m|bf{QW|U)}b+{tL|w``N|to{t ZO|T]jF}CB|0Q{e5Zw|k |We}5:{HO{tPwf_uajjBfX}-V_C_{{r~gg|Ude;s+}KNXH}! `K}eW{Upwbk%ogaW}9EYN}YY|&v|SL{C3[5s.]Y]I]u{M6{pYZ`^,`ZbCYR[1mNg>rsk0Ym[jrE]RYiZTr*YJ{Ge|%-lf|y(`=[t}E6{k!|3)}Zk} ][G{E~cF{u3U.rJ|a9p#o#ZE|?|{sYc#vv{E=|LC}cu{N8`/`3`9rt[4|He{cq|iSYxY`}V |(Q|t4{C?]k_Vlvk)BZ^r<{CL}#h}R+[<|i=}X|{KAo]|W<`K{NW|Zx}#;|fe{IMr<|K~tJ_x}AyLZ?{GvbLnRgN}X&{H7|x~}Jm{]-| GpNu0}.ok>|c4{PYisrDZ|fwh9|hfo@{H~XSbO]Odv]%`N]b1Y]]|eIZ}_-ZA]aj,>eFn+j[aQ_+]h[J_m_g]%_wf.`%k1e#Z?{CvYu_B^|gk`Xfh^M3`afGZ-Z|[m{L}|k3cp[it ^>YUi~d>{T*}YJ{Q5{Jxa$hg|%4`}|LAgvb }G}{P=|<;Ux{_skR{cV|-*|s-{Mp|XP|$G|_J}c6cM{_=_D|*9^$ec{V;|4S{qO|w_|.7}d0|/D}e}|0G{Dq]Kdp{}dfDi>}B%{Gd|nl}lf{C-{y}|ANZr}#={T~|-(}c&{pI|ft{lsVP}){|@u}!W|bcmB{d?|iW|:dxj{PSkO|Hl]Li:}VYk@|2={fnWt{M3`cZ6|)}|Xj}BYa?vo{e4|L7|B7{L7|1W|lvYO}W8nJ|$Vih|{T{d*_1|:-n2dblk``fT{Ky|-%}m!|Xy|-a{Pz}[l{kFjz|iH}9N{WE{x,|jz}R {P|{D)c=nX|Kq|si}Ge{sh|[X{RF{t`|jsr*fYf,rK|/9}$}}Nf{y!1|<Std}4Wez{W${Fd_/^O[ooqaw_z[L`Nbv[;l7V[ii3_PeM}.h^viqYjZ*j1}+3{bt{DR[;UG}3Og,rS{JO{qw{d<_zbAh<R[1_r`iZTbv^^a}c{iEgQZ<exZFg.^Rb+`Uj{a+{z<[~r!]`[[|rZYR|?F|qppp]L|-d|}K}YZUM|=Y|ktm*}F]{D;g{uI|7kg^}%?Z%ca{N[_<q4xC]i|PqZC]n}.bDrnh0Wq{tr|OMn6tM|!6|T`{O`|>!]ji+]_bTeU}Tq|ds}n|{Gm{z,f)}&s{DPYJ`%{CGd5v4tvb*hUh~bf]z`jajiFqAii]bfy^U{Or|m+{I)cS|.9k:e3`^|xN}@Dnlis`B|Qo{`W|>||kA}Y}{ERYuYx`%[exd`]|OyiHtb}HofUYbFo![5|+]gD{NIZR|Go}.T{rh^4]S|C9_}xO^i`vfQ}C)bK{TL}cQ|79iu}9a];sj{P.o!f[Y]pM``Jda^Wc9ZarteBZClxtM{LW}l9|a.mU}KX}4@{I+f1}37|8u}9c|v${xGlz}jP{Dd1}e:}31}%3X$|22i<v+r@~mf{sN{C67G97855F4YL5}8f{DT|xy{sO{DXB334@55J1)4.G9A#JDYtXTYM4, YQD9;XbXm9SX]IB^4UN=Xn<5(;(F3YW@XkH-X_VM[DYM:5XP!T&Y`6|,^{IS-*D.H>:LXjYQ0I3XhAF:9:(==.F*3F1189K/7163D,:@|e2{LS36D4hq{Lw/84443@4.933:0307::6D7}&l{Mx657;89;,K5678H&93D(H<&<>0B90X^I;}Ag1{P%3A+>><975}[S{PZE453?4|T2{Q+5187;>447:81{C=hL6{Me^:=7ii{R=.=F<81;48?|h8}Uh{SE|,VxL{ST,7?9Y_5Xk3A#:$%YSYdXeKXOD8+TXh7(@>(YdXYHXl9J6X_5IXaL0N?3YK7Xh!1?XgYz9YEXhXaYPXhC3X`-YLY_XfVf[EGXZ5L8BXL9YHX]SYTXjLXdJ: YcXbQXg1PX]Yx4|Jr{Ys4.8YU+XIY`0N,<H%-H;:0@,74/:8546I=9177154870UC]d<C3HXl7ALYzXFXWP<<?E!88E5@03YYXJ?YJ@6YxX-YdXhYG|9o{`iXjY_>YVXe>AYFX[/(I@0841?):-B=14337:8=|14{c&93788|di{cW-0>0<097/A;N{FqYpugAFT%X/Yo3Yn,#=XlCYHYNX[Xk3YN:YRT4?)-YH%A5XlYF3C1=NWyY}>:74-C673<69545v {iT85YED=64=.F4..9878/D4378?48B3:7:7/1VX[f4{D,{l<5E75{dAbRB-8-@+;DBF/$ZfW8S<4YhXA.(5@*11YV8./S95C/0R-A4AXQYI7?68167B95HA1*<M3?1/@;/=54XbYP36}lc{qzSS38:19?,/39193574/66878Yw1X-87E6=;964X`T734:>86>1/=0;(I-1::7ALYGXhF+Xk[@W%TYbX7)KXdYEXi,H-XhYMRXfYK?XgXj.9HX_SX]YL1XmYJ>Y}WwIXiI-3-GXcYyXUYJ$X`Vs[7;XnYEZ;XF! 3;%8;PXX(N3Y[)Xi1YE&/ :;74YQ6X`33C;-(>Xm0(TYF/!YGXg8 9L5P01YPXO-5%C|qd{{/K/E6,=0144:361:955;6443@?B7*7:F89&F35YaX-CYf,XiFYRXE_e{}sF 0*7XRYPYfXa5YXXY8Xf8Y~XmA[9VjYj*#YMXIYOXk,HHX40YxYMXU8OXe;YFXLYuPXP?EB[QV0CXfY{:9XV[FWE0D6X^YVP*$4%OXiYQ(|xp|%c3{}V`1>Y`XH00:8/M6XhQ1:;3414|TE|&o@1*=81G8<3}6<|(f6>>>5-5:8;093B^3U*+*^*UT30XgYU&7*O1953)5@E78--F7YF*B&0:%P68W9Zn5974J9::3}Vk|-,C)=)1AJ4+<3YGXfY[XQXmT1M-XcYTYZXCYZXEYXXMYN,17>XIG*SaS|/eYJXbI?XdNZ+WRYP<F:R PXf;0Xg`$|1GX9YdXjLYxWX!ZIXGYaXNYm6X9YMX?9EXmZ&XZ#XQ>YeXRXfAY[4 ;0X!Zz0XdN$XhYL XIY^XGNXUYS/1YFXhYk.TXn4DXjB{jg|4DEX]:XcZMW=A.+QYL<LKXc[vV$+&PX*Z3XMYIXUQ:ZvW< YSXFZ,XBYeXMM)?Xa XiZ4/EXcP3%}&-|6~:1(-+YT$@XIYRBC<}&,|7aJ6}bp|8)K1|Xg|8C}[T|8Q.89;-964I38361<=/;883651467<7:>?1:.}le|:Z=39;1Y^)?:J=?XfLXbXi=Q0YVYOXaXiLXmJXO5?.SFXiCYW}-;|=u&D-X`N0X^,YzYRXO(QX_YW9`I|>hZ:N&X)DQXP@YH#XmNXi$YWX^=!G6YbYdX>XjY|XlX^XdYkX>YnXUXPYF)FXT[EVTMYmYJXmYSXmNXi#GXmT3X8HOX[ZiXN]IU2>8YdX1YbX<YfWuZ8XSXcZU%0;1XnXkZ_WTG,XZYX5YSX Yp 05G?XcYW(IXg6K/XlYP4XnI @XnO1W4Zp-9C@%QDYX+OYeX9>--YSXkD.YR%Q/Yo YUX].Xi<HYEZ2WdCE6YMXa7F)=,D>-@9/8@5=?7164;35387?N<618=6>7D+C50<6B03J0{Hj|N9$D,9I-,.KB3}m |NzE0::/81YqXjMXl7YG; [.W=Z0X4XQY]:MXiR,XgM?9$9>:?E;YE77VS[Y564760391?14941:0=:8B:;/1DXjFA-564=0B3XlH1+D85:0Q!B#:-6&N/:9<-R3/7Xn<*3J4.H:+334B.=>30H.;3833/76464665755:/83H6633:=;.>5645}&E|Y)?1/YG-,93&N3AE@5 <L1-G/8A0D858/30>8<549=@B8] V0[uVQYlXeD(P#ID&7T&7;Xi0;7T-$YE)E=1:E1GR):--0YI7=E<}n9|aT6783A>D7&4YG7=391W;Zx<5+>F#J39}o/|cc;6=A050EQXg8A1-}D-|d^5548083563695D?-.YOXd37I$@LYLWeYlX<Yd+YR A$;3-4YQ-9XmA0!9/XLY_YT(=5XdDI>YJ5XP1ZAW{9>X_6R(XhYO65&J%DA)C-!B:97#A9;@?F;&;(9=11/=657/H,<8}bz|j^5446>.L+&Y^8Xb6?(CYOXb*YF(8X`FYR(XPYVXmPQ%&DD(XmZXW??YOXZXfCYJ79,O)XnYF7K0!QXmXi4IYFRXS,6<%-:YO(+:-3Q!1E1:W,Zo}Am|n~;3580534*?3Zc4=9334361693:30C<6/717:<1/;>59&:4}6!|rS36=1?75<8}[B|s809983579I.A.>84758=108564741H*9E{L{|u%YQ<%6XfH.YUXe4YL@,>N}Tv|ve*G0X)Z;/)3@A74(4P&A1X:YVH97;,754*A66:1 D739E3553545558E4?-?K17/770843XAYf838A7K%N!YW4.$T19Z`WJ*0XdYJXTYOXNZ 1XaN1A+I&Xi.Xk3Z3GB&5%WhZ1+5#Y[X<4YMXhQYoQXVXbYQ8XSYUX4YXBXWDMG0WxZA[8V+Z8X;D],Va$%YeX?FXfX[XeYf<X:Z[WsYz8X_Y]%XmQ(!7BXIZFX]&YE3F$(1XgYgYE& +[+W!<YMYFXc;+PXCYI9YrWxGXY9DY[!GXiI7::)OC;*$.>N*HA@{C|}&k=:<TB83X`3YL+G4XiK]i}(fYK<=5$.FYE%4*5*H*6XkCYL=*6Xi6!Yi1KXR4YHXbC8Xj,B9ZbWx/XbYON#5B}Ue}+QKXnF1&YV5XmYQ0!*3IXBYb71?1B75XmF;0B976;H/RXU:YZX;BG-NXj;XjI>A#D3B636N;,*%<D:0;YRXY973H5)-4FXOYf0:0;/7759774;7;:/855:543L43<?6=E,.A4:C=L)%4YV!1(YE/4YF+ F3%;S;&JC:%/?YEXJ4GXf/YS-EXEYW,9;E}X$}547EXiK=51-?71C%?57;5>463553Zg90;6447?<>4:9.7538XgN{|!}9K/E&3-:D+YE1)YE/3;37/:05}n<}:UX8Yj4Yt864@JYK..G=.(A Q3%6K>3(P3#AYE$-6H/456*C=.XHY[#S.<780191;057C)=6HXj?955B:K1 E>-B/9,;5.!L?:0>/.@//:;7833YZ56<4:YE=/:7Z_WGC%3I6>XkC*&NA16X=Yz2$X:Y^&J48<99k8}CyB-61<18K946YO4{|N}E)YIB9K0L>4=46<1K0+R;6-=1883:478;4,S+3YJX`GJXh.Yp+Xm6MXcYpX(>7Yo,/:X=Z;Xi0YTYHXjYmXiXj;*;I-8S6N#XgY}.3XfYGO3C/$XjL$*NYX,1 6;YH&<XkK9C#I74.>}Hd`A748X[T450[n75<4439:18A107>|ET}Rf<1;14876/Yb983E<5.YNXd4149>,S=/4E/<306443G/06}0&}UkYSXFYF=44=-5095=88;63844,9E6644{PL}WA8:>)7+>763>>0/B3A545CCnT}Xm|dv}Xq1L/YNXk/H8;;.R63351YY747@15YE4J8;46;.38.>4A369.=-83,;Ye3?:3@YE.4-+N353;/;@(X[YYD>@/05-I*@.:551741Yf5>6A443<3535;.58/86=D4753442$635D1>0359NQ @73:3:>><Xn?;43C14 ?Y|X611YG1&<+,4<*,YLXl<1/AIXjF*N89A4Z576K1XbJ5YF.ZOWN.YGXO/YQ01:4G38Xl1;KI0YFXB=R<7;D/,/4>;$I,YGXm94@O35Yz66695385.>:6A#5}W7n^4336:4157597434433<3|XA}m`>=D>:4A.337370?-6Q96{`E|4A}C`|Qs{Mk|J+~r>|o,wHv>Vw}!c{H!|Gb|*Ca5}J||,U{t+{CN[!M65YXOY_*B,Y[Z9XaX[QYJYLXPYuZ%XcZ8LY[SYPYKZM<LMYG9OYqSQYM~[e{UJXmQYyZM_)>YjN1~[f3{aXFY|Yk:48YdH^NZ0|T){jVFYTZNFY^YTYN~[h{nPYMYn3I]`EYUYsYIZEYJ7Yw)YnXPQYH+Z.ZAZY]^Z1Y`YSZFZyGYHXLYG 8Yd#4~[i|+)YH9D?Y^F~Y7|-eYxZ^WHYdYfZQ~[j|3>~[k|3oYmYqY^XYYO=Z*4[]Z/OYLXhZ1YLZIXgYIHYEYK,<Y`YEXIGZI[3YOYcB4SZ!YHZ*&Y{Xi3~[l|JSY`Zz?Z,~[m|O=Yi>??XnYWXmYS617YVYIHZ(Z4[~L4/=~[n|Yu{P)|];YOHHZ}~[o33|a>~[r|aE]DH~[s|e$Zz~[t|kZFY~XhYXZB[`Y}~[u|{SZ&OYkYQYuZ2Zf8D~[v}% ~[w3},Q[X]+YGYeYPIS~[y}4aZ!YN^!6PZ*~[z}?E~[{3}CnZ=~[}}EdDZz/9A3(3S<,YR8.D=*XgYPYcXN3Z5 4)~[~}JW=$Yu.XX~] }KDX`PXdZ4XfYpTJLY[F5]X~[2Yp}U+DZJ::<446[m@~]#3}]1~]%}^LZwZQ5Z`/OT<Yh^ -~]&}jx[ ~m<z!%2+~ly4VY-~o>}p62yz!%2+Xf2+~ly4VY-zQ`z (=] 2z~o2",C={" ":0,"!":1},c=34,i=2,p,s="",u=String.fromCharCode,t=u(12539);while(++c<127)C[u(c)]=c^39&&c^92?i++:0;i=0;while(0<=(c=C[a.charAt(i++)]))if(16==c)if((c=C[a.charAt(i++)])<87){if(86==c)c=1879;while(c--)s+=u(++p)}else s+=s.substr(8272,360);else if(c<86)s+=u(p+=c<51?c-16:(c-55)*92+C[a.charAt(i++)]);else if((c=((c-86)*92+C[a.charAt(i++)])*92+C[a.charAt(i++)])<49152)s+=u(p=c<40960?c:c|57344);else{c&=511;while(c--)s+=t;p=12539}return s'
    )();

  return str.replace(/[^*+.-9A-Z_a-z-]/g, function (s) {
    var c = s.charCodeAt(0),
      m;
    return c < 128
      ? (c < 16 ? "%0" : "%") + c.toString(16).toUpperCase()
      : 65376 < c && c < 65440
      ? "%" + (c - 65216).toString(16).toUpperCase()
      : (c = JCT11280.indexOf(s)) < 0
      ? "%81E"
      : "%" +
        ((m =
          ((c < 8272 ? c : (c = JCT11280.lastIndexOf(s))) - (c %= 188)) / 188) <
        31
          ? m + 129
          : m + 193
        )
          .toString(16)
          .toUpperCase() +
        ((64 < (c += c < 63 ? 64 : 65) && c < 91) ||
        95 == c ||
        (96 < c && c < 123)
          ? String.fromCharCode(c)
          : "%" + c.toString(16).toUpperCase());
  });
}

function unescapeSJIS(str) {
  // This ensures load of JCT11280 code.
  if (typeof JCT11280 == "undefined") var tmp = escapeSJIS("");

  return str.replace(
    /%(8[1-9A-F]|[9E][0-9A-F]|F[0-9A-C])(%[4-689A-F][0-9A-F]|%7[0-9A-E]|[@-~])|%([0-7][0-9A-F]|A[1-9A-F]|[B-D][0-9A-F])/gi,
    function (s) {
      var c = parseInt(s.substring(1, 3), 16),
        l = s.length;
      return 3 == l
        ? String.fromCharCode(c < 160 ? c : c + 65216)
        : JCT11280.charAt(
            (c < 160 ? c - 129 : c - 193) * 188 +
              (4 == l
                ? s.charCodeAt(3) - 64
                : (c = parseInt(s.substring(4), 16)) < 127
                ? c - 64
                : c - 65)
          );
    }
  );
}

var MYPAGE_TID = [
  "profile",
  "blog",
  "avatar",
  "mygame",
  "friend",
  "mynews",
  "setting",
  "stamp",
];
var MYPAGE_STID = [
  ["index.nhn"],
  ["index.nhn"],
  ["index.nhn", "myitem.nhn"],
  ["index.nhn"],
  [
    "index.nhn",
    "prishotsquare.nhn",
    "magokorotop.nhn",
    "magokororeceiveseal.nhn",
    "magokorosendseal.nhn",
  ],
  ["index.nhn", "clubhg.nhn"],
  ["index.nhn", "sound.nhn", "mygarage.nhn", "skin.nhn"],
  ["board.nhn", "collection.nhn"],
];
var MYPAGE_PROFILE = 0;
var MYPAGE_BLOG = 1;
var MYPAGE_AVATAR = 2;
var MYPAGE_MYGAME = 3;
var MYPAGE_FRIEND = 4;
var MYPAGE_MYNEWS = 5;
var MYPAGE_SETTING = 6;
var MYPAGE_STAMP = 7;
var MYPAGE_WIN_NAME = "mypage";

function openProfile(url) {
  //  if(typeof(fraShop) == "object"){
  //    top.opener = fraShop;
  //  }
  //  if(typeof(top.opener) == "object"){
  //    return top.opener.window.location.href = __urlProfile + "/redirect.nhn?url=" + encodeURIComponent(escapeSJIS(url));
  //  }else{
  //    return top.window.location.href = __urlProfile + "/redirect.nhn?url=" + encodeURIComponent(escapeSJIS(url));
  //  }
  url = url.customReplace("&", "@");
  var win = window.open(
    __urlProfile + "/redirect.nhn?url=" + escapeSJIS(url),
    MYPAGE_WIN_NAME
  );
  win.focus();
  return win;
}
function openPetitPage(mid, svcid) {
  if (mid.length > 0) {
    mid = "mid=" + mid + "&";
  }
  if (svcid == null) {
    svcid = "";
  } else {
    svcid = "svcid=" + svcid + "&";
  }
  return window.open(
    __urlProfile + "/petit/index.nhn?" + mid + svcid,
    "petit",
    "width=295,height=634,scroll=no"
  );
}
function openMypage(mid, tid, stid) {
  if (typeof tid == "undefined") {
    tid = MYPAGE_PROFILE;
  }
  if (typeof stid == "undefined") {
    stid = 0;
  }
  if (typeof mid == "undefined") {
    mid = "";
    tid = MYPAGE_MYNEWS;
    if (getCookie(CK_MEMBERID).length == 0) {
      alert("OCµÄ¢È¢½ßAvtB[ð²p¢½¾¯Ü¹ñB");
      return;
    }
  }
  if (mid.length > 0) {
    mid = "?mid=" + escapeSJIS(mid);
  }
  //  top.window.location.href = __urlProfile + "/" + MYPAGE_TID[tid] + "/" + MYPAGE_STID[tid][stid] + mid;
  var win = window.open(getMypageURL(mid, tid, stid), MYPAGE_WIN_NAME);
  win.focus();
}
function getMypageURL(mid, tid, stid) {
  return (
    __urlProfile + "/" + MYPAGE_TID[tid] + "/" + MYPAGE_STID[tid][stid] + mid
  );
}

var __bTest =
  location.hostname.indexOf("test") >= 0 ||
  location.hostname.indexOf("dev") >= 0 ||
  location.hostname.indexOf("alpha-") >= 0;

if (location.hostname.indexOf("dev-") >= 0) {
  __host_suffix = "dev";
  __host_prefix = "dev-";
} else if (location.hostname.indexOf("alpha-") >= 0) {
  __host_suffix = "test";
  __host_prefix = "alpha-";
} else if (location.hostname.indexOf("beta-") >= 0) {
  __host_suffix = "";
  __host_prefix = "beta-";
} else if (location.hostname.indexOf("test") >= 0) {
  __host_suffix = "test";
  __host_prefix = "alpha-";
} else if (location.hostname.indexOf("dev") >= 0) {
  __host_suffix = "dev";
  __host_prefix = "dev-";
}

var sSubDomain = "http://www.hangame.co.jp";

var __urlLogin = "http://top.hangame.co.jp/login/index.nhn";
var __urlLogout = "http://id.hangame.co.jp/logout.asp";
var __urlProfile = "http://mypage.hangame.co.jp";
var __urlchat = "http://pasteller.hangame.co.jp";
var __urlSiteMap = "http://top.hangame.co.jp/sitemap.nhn";
var __urlBlog = "http://blog.hangame.co.jp";
var __urlAvatars = "http://avatars.hangame.co.jp";

var __urlHangame = "http://www.hangame.co.jp/";
var __urlNHNCorp = "http://www.nhn-playart.com/";

//var __urlBeginner = 'javascript:void(window.open(\'http://www.hangame.co.jp/guide/index.htm\', \'guide\', \'width=500,height=400\'));';
var __urlBeginner = "http://www.hangame.co.jp/pamphlet/index.asp";
var __urlHelp = "http://customer.hangame.co.jp/";

function getLoginStatus() {
  return getCookie(CK_MEMBERID).length > 0;
}

// Top Pages file-name
var FILENAME_SUPER_TOP = "index.html";
var FILENAME_EGAME_TOP = "easygame.hangame.co.jp";
var FILENAME_CGAME_TOP = "coregame.hangame.co.jp";
var FILENAME_COMMUNITY_TOP = "community.hangame.co.jp";
var FILENAME_AVATAR_TOP = "avatars.hangame.co.jp";
var FILENAME_SHOP_TOP = "shop.hangame.co.jp";
var FILENAME_HANG_TOP = "hangmall.hangame.co.jp";
var FILENAME_PREMIUM_TOP = "premium.hangame.co.jp";
var FILENAME_MOBILE_TOP = "smartphone.hangame.co.jp";
var FILENAME_GAME_LIST = "gamelist.hangame.co.jp";
var FILENAME_INFO_TOP = "info.hangame.co.jp";

//Server URL PATH
var __IMAGE_SERVER = document.location.protocol + "//images.hangame.co.jp/";
var __STATIC_SERVER = document.location.protocol + "//static.hangame.co.jp/";

var __COMMON_IMAGE_PATH = __IMAGE_SERVER + "r02/common/";
var __COMMON_CSS_HEADER_PATH = __STATIC_SERVER + "r02/common/r02/css/";
var __COMMON_CSS_FOOTER_PATH = __STATIC_SERVER + "r02/common/r02/css/";
var __COMMON_JS_PATH = __STATIC_SERVER + "js/";

var IMG_LOGINLOGOUT = __COMMON_IMAGE_PATH + "header/r02/default/";

// custom URL PATH(ex. using https)
if (typeof customCommonJsUrlPath == "function") {
  // need implement before including common.js
  customCommonJsUrlPath();
}

var __serviceMenu = new Array(
  "game_top",
  "community_top",
  "avatar_top",
  "entame_top",
  "super_top",
  "item_shop",
  "premium_top"
);

var __serviceUrl = new Array(
  "http://www.hangame.co.jp/" + FILENAME_SUPER_TOP,
  "http://" + FILENAME_EGAME_TOP,
  "http://" + FILENAME_CGAME_TOP,
  "http://" + FILENAME_COMMUNITY_TOP,
  "http://" + FILENAME_AVATAR_TOP,
  "http://" + FILENAME_SHOP_TOP,
  "http://" + FILENAME_PREMIUM_TOP,
  "http://" + FILENAME_HANG_TOP,
  "http://" + FILENAME_MOBILE_TOP,
  "http://" + FILENAME_GAME_LIST,
  "http://" + FILENAME_INFO_TOP
);

var __subMenuIndex = new Array(
  "http://www.hangame.co.jp/",
  "http://info.hangame.co.jp/",
  "http://info.hangame.co.jp/event.nhn",
  "http://guide.hangame.co.jp/",
  "http://customer.hangame.co.jp/",
  "http://www.hangame.co.jp/sitemap.nhn",
  "http://www.nhn-hangame.com/company/info.html",
  "http://announce.hangame.co.jp/hgj/notice/kiyaku.htm",
  "http://announce.hangame.co.jp/hgj/notice/privacypolicy.htm",
  "http://announce.hangame.co.jp/hgj/notice/tokusyo.html",
  "http://www.nhn-playart.com/recruit/recruit_01.html",
  "http://cururu.jp/",
  "http://" + FIX_DOMAIN_MOBILE + "/",
  "http://announce.hangame.co.jp/hgj/notice/settlement.html",
  "http://announce.hangame.co.jp/hgj/notice/salespolicy.htm",
  "http://www.nhn-hangame.com/",
  "http://www.comico.jp/"
);

var __communityIndex = new Array(
  "http://portal.blog.hangame.co.jp/",
  "http://www.hangame.co.jp/gamenc/schat.asp",
  "http://circle2.hangame.co.jp/",
  "http://forum.hangame.co.jp/",
  "http://motecoorde.hangame.co.jp/index.nhn",
  "http://board2.hangame.co.jp/request/index.nhn",
  "http://anilog.hangame.co.jp/",
  "http://friends.hangame.co.jp/"
);

var __shopIndex = new Array(
  "http://shop.hangame.co.jp/pure.nhn",
  "http://shop.hangame.co.jp/cool.nhn",
  "http://market.hangame.co.jp/flea/index.nhn",
  "http://itemtrade.hangame.co.jp/itemtrade/index.asp",
  "http://shop.hangame.co.jp/pointtrade/index.nhn"
);

var __loginHost = new Array("hgj", "ncf");
var __loginHostInfo = new Array(
  new Array(
    "hgj",
    "http://www.hangame.co.jp/",
    "Hangame SôéQ[ª±±É é",
    "_self",
    __COMMON_IMAGE_PATH + "header/logo_hangame_b_154x80.png",
    "display:none"
  ),
  new Array(
    "ncf",
    "http://netcafe.hangame.co.jp/netcafe.asp",
    "Hangame SôéQ[ª±±É é",
    "_self",
    __COMMON_IMAGE_PATH + "header/logo_hangame_b_154x80.png",
    "display:none"
  )
);
var __loginHostInfoSimpleWhite = new Array(
  new Array(
    "hgj",
    "http://www.hangame.co.jp/",
    "Hangame SôéQ[ª±±É é",
    "_self",
    __COMMON_IMAGE_PATH + "header/logo_hangame_b_127x54.png",
    "display:none"
  ),
  new Array(
    "ncf",
    "http://netcafe.hangame.co.jp/netcafe.asp",
    "Hangame SôéQ[ª±±É é",
    "_self",
    __COMMON_IMAGE_PATH + "header/logo_hangame_b_127x54.png",
    "display:none"
  )
);
var __loginHostInfoSimpleBlack = new Array(
  new Array(
    "hgj",
    "http://www.hangame.co.jp/",
    "Hangame SôéQ[ª±±É é",
    "_self",
    __COMMON_IMAGE_PATH + "header/logo_hangame_w_127x54.png",
    "display:none"
  ),
  new Array(
    "ncf",
    "http://netcafe.hangame.co.jp/netcafe.asp",
    "Hangame SôéQ[ª±±É é",
    "_self",
    __COMMON_IMAGE_PATH + "header/logo_hangame_w_127x54.png",
    "display:none"
  )
);
var __loginHostInfoDefault = new Array(
  "www",
  "http://www.hangame.co.jp/",
  "Hangame | ³¿Q[EICQ[EPC Q[ÌnQ[",
  "_self",
  "http://images.hangame.co.jp/hangame/common/header/r02/default/logo_hangame.gif",
  "display:none"
);
setUrl();

/** If test, replace url */
function setUrl() {
  if (__bTest) {
    sSubDomain = setTestUrl(sSubDomain);

    __urlLogin = setTestServiceUrl(__urlLogin);
    __urlLogout = setTestServiceUrl(__urlLogout);
    __urlProfile = getMypageHost();
    __urlchat = setTestUrl(__urlchat);
    __urlAvatars = getAvatarsHost();
    __urlHangame = setTestUrl(__urlHangame);
    __urlBeginner = setTestUrl(__urlBeginner);
    __urlHelp = setTestUrl(__urlHelp);

    __urlSiteMap = setTestUrl(__urlSiteMap);

    for (var i = 0; i < __serviceUrl.length; i++) {
      __serviceUrl[i] = setTestServiceUrl(__serviceUrl[i]);
    }

    __loginHostInfoDefault[1] = setTestUrl(__loginHostInfoDefault[1]);
  }

  function setTestServiceUrl(url) {
    if (url.indexOf("www.") >= 0) {
      return url.customReplace("www.", __host_suffix + ".");
    } else {
      var urlArray = url.split("//");
      var result = "";
      for (var i = 0; i < urlArray.length; i++) {
        result += urlArray[i];
        if (i == 0) {
          result += "//" + __host_prefix;
        }
      }
      return result;
    }
  }
}

/** Replace url with test url. */
function setTestUrl(url) {
  if (url.indexOf("www.") >= 0) {
    return url.customReplace("www.", __host_suffix + ".");
  } else {
    if (url.indexOf(".") >= 0) {
      var testUrl = "";
      var sUrl = url.split(".");
      for (var i = 0; i < sUrl.length - 1; i++) {
        testUrl +=
          sUrl[i] +
          (sUrl[i].indexOf("http://") >= 0 ? __host_suffix + "." : ".");
      }
      testUrl += sUrl[sUrl.length - 1];
      return testUrl;
    } else {
      return url;
    }
  }
}

function getCookieHost() {
  return getStrCookie("loginhost");
}

function isAffSite() {
  var value = getCookieHost();
  var index = 0;
  for (var i = 0; i < __loginHost.length; i++) {
    if (__loginHost[i] == value) {
      return true;
    }
  }

  return false;
}

function equalsAffSite(host) {
  return host == getCookieHost();
}

/** Get Hangame / Aff. site info */
function getLoginHostInfo() {
  var value = getCookieHost();
  var index = -1;
  for (var i = 0; i < __loginHost.length; i++) {
    if (__loginHost[i] == value) {
      index = i;
      break;
    }
  }

  return index == -1 ? __loginHostInfoDefault : __loginHostInfo[index];
}

function getLoginHostInfoSimple(type) {
  var value = getCookieHost();
  var index = -1;
  for (var i = 0; i < __loginHost.length; i++) {
    if (__loginHost[i] == value) {
      index = i;
      break;
    }
  }
  if (type == "bk")
    return index == -1
      ? __loginHostInfoSimpleBlack[0]
      : __loginHostInfoSimpleBlack[index];
  return index == -1
    ? __loginHostInfoSimpleWhite[0]
    : __loginHostInfoSimpleWhite[index];
}

/** Find service index from service Id */
function findServiceIndex(serviceId) {
  var rtn;

  switch (serviceId) {
    case "easygame":
      rtn = 0;
      break;
    case "coregame":
      rtn = 0;
      break;
    case "community":
      rtn = 3;
      break;
    case "avatars":
      rtn = 4;
      break;
    case "shop":
      rtn = 5;
      break;

    // ÈºÍßÌ¨ðT|[g·é×É èBÇÁsÂB
    case "chat":
    case "circle":
    case "board":
    case "kplus":
    case "mobile":
      rtn = 3;
      break;
    case "avatar":
    case "prishot":
      rtn = 4;
      break;
    case "item_shop":
      rtn = 5;
      break;
    default:
      rtn = 0;
      break;
  }

  return rtn;
}

/** Header&Footer's function */
/** GameList Include */
function setOnEventHandler() {
  document.onclick = gameTitleList.init;
}
var gameTitleList = {
  init: function (e) {
    var event = e || window.event;
    var _target = event.target || event.srcElement;
    var o = (this.obj = document.getElementById("gameTitleList"));
    var h2 = o.getElementsByTagName("h2")[0];
    var check = gameTitleList.check(_target);

    if (_target == h2) gameTitleList.toggle(this);
    else if (check) return;
    else gameTitleList.close(this);
  },
  check: function (target) {
    var o = document.getElementById("gameTitleList");
    var s = false;
    if (document.getElementById("pullDownGameList") != null) {
      var chk = document
        .getElementById("pullDownGameList")
        .getElementsByTagName("*");
      for (var i = 0; i < chk.length; i++) {
        if (target == chk[i]) {
          s = true;
          break;
        }
      }
    }
    return s;
  },
  close: function (v) {
    var o = v.obj;
    var Blocker = gameTitleList.iframe()[1];
    if (o.className == "listOpen") {
      o.className = "listClose";
      if (Blocker) o.removeChild(Blocker);
    }
  },
  toggle: function (v) {
    var o = v.obj;
    var iframe = gameTitleList.iframe()[0];
    var Blocker = gameTitleList.iframe()[1];

    if (o.className == "listClose") {
      o.className = "listOpen";
      o.appendChild(iframe);
    } else {
      o.className = "listClose";
      if (Blocker) o.removeChild(Blocker);
    }
  },
  iframe: function () {
    var iframe = document.createElement("iframe");
    var id = document.getElementById("selectBlocker");
    iframe.id = "selectBlocker";
    return [iframe, id];
  },
};
/*Elementì¬t@NV
 * @param tagName ^O¼iá:a,img.div...etcj
 * @param attrName ®«¼B¡ÌêÍæØè¶"##,##"ÅÂÈ°é
 * @param attrValue ®«lB¡ÌêÍæØè¶"##,##"ÅÂÈ°é
 * @param innerValue ^Ol
 * return Element
 */
function privateCreateElement(tagName, attrName, attrValue, innerValue) {
  var aryAttrName, aryAttrValue;
  var element = document.createElement(tagName);
  if (
    attrName != null &&
    attrName != "" &&
    attrValue != null &&
    attrValue != ""
  ) {
    aryAttrName = attrName.split("##,##");
    aryAttrValue = attrValue.split("##,##");
    if (aryAttrName.length == aryAttrValue.length) {
      for (i = 0; i < aryAttrName.length; i++) {
        element.setAttribute(aryAttrName[i], aryAttrValue[i]);
      }
    }
  }
  if (innerValue != "" && innerValue != null) {
    element.innerHTML = innerValue;
  }
  return element;
}
function setMainCategoryAction(
  element,
  tmpElement,
  h4Element,
  ulElement,
  intMainChangeCount,
  strMainCategory
) {
  if (intMainChangeCount != 0) {
    if (
      h4Element != null &&
      h4Element != "" &&
      ulElement != null &&
      ulElement != ""
    ) {
      tmpElement.appendChild(h4Element);
      tmpElement.appendChild(ulElement);
      h4Element = null;
      ulElement = null;
    }
    element.appendChild(tmpElement);
    tmpElement = privateCreateElement("div", "class", "second", "");
  }
  tmpElement.appendChild(privateCreateElement("h3", "", "", strMainCategory));
  return {
    element: function () {
      return element;
    },
    tmpElement: function () {
      return tmpElement;
    },
    h4Element: function () {
      return h4Element;
    },
    ulElement: function () {
      return ulElement;
    },
  };
}
function setSubCategoryAction(
  tmpElement,
  h4Element,
  ulElement,
  strSubCategory
) {
  if (
    h4Element != null &&
    h4Element != "" &&
    ulElement != null &&
    ulElement != ""
  ) {
    tmpElement.appendChild(h4Element);
    tmpElement.appendChild(ulElement);
  }
  h4Element = privateCreateElement("h4", "", "", strSubCategory);
  ulElement = privateCreateElement("ul", "", "", "");
  return {
    tmpElement: function () {
      return tmpElement;
    },
    h4Element: function () {
      return h4Element;
    },
    ulElement: function () {
      return ulElement;
    },
  };
}
function loadGameListFromJson(json) {
  var sIsp;
  var tmpMain = "";
  var tmpSub = "";
  var h4Element = null;
  var ulElement = null;
  var mainAction = null;
  var subAction = null;
  var intMainChangeCount = 0;
  var aryMainCategory = { easy: "©ñ½ñQ[", core: "¶Á­èQ[" };

  if (isAffSite()) {
    sIsp = getCookieHost();
  } else {
    sIsp = "hgj";
  }
  var tmpElement = privateCreateElement("div", "class", "first", "");
  var element = document.getElementById("pullDownGameList");
  if (element != null) {
    for (var i = 0; i < json.length; i++) {
      var list = json[i];
      if (list == null) {
        continue;
      }
      if (sIsp == "aff" && list.aff == "N") {
        continue;
      } else if (sIsp == "ncf" && list.ncf == "N") {
        continue;
      } else {
        if (tmpMain != list.main) {
          mainAction = setMainCategoryAction(
            element,
            tmpElement,
            h4Element,
            ulElement,
            intMainChangeCount,
            aryMainCategory[list.main]
          );
          element = mainAction.element();
          tmpElement = mainAction.tmpElement();
          h4Element = mainAction.h4Element();
          ulElement = mainAction.ulElement();
          tmpMain = list.main;
          tmpSub = "";
          intMainChangeCount++;
        }
        if (tmpSub != list.sub) {
          subAction = setSubCategoryAction(
            tmpElement,
            h4Element,
            ulElement,
            list.sub
          );
          tmpElement = subAction.tmpElement();
          h4Element = subAction.h4Element();
          ulElement = subAction.ulElement();
          tmpSub = list.sub;
        }
        var liElement = document.createElement("li");
        var aElement = privateCreateElement(
          "a",
          "href",
          list.game_href,
          list.game_name
        );
        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
      }
    }
    subAction = setSubCategoryAction(
      tmpElement,
      h4Element,
      ulElement,
      list.sub
    );
    tmpElement = subAction.tmpElement();
    element.appendChild(tmpElement);
  }
}
function privateIncludeGameList() {
  __ss = "";
  __ss += '<div id="gameTitleList" class="listClose">';
  __ss += '<h2 onmouseover="setOnEventHandler();">Q[Xg</h2>';
  __ss += '<div id="pullDownGameList">';
  __ss += "</div>";
  __ss += "</div>";
  return __ss;
}
/** wb_Etb_ÌCSS Generation */
function privateSetFooterCss() {
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", __COMMON_CSS_FOOTER_PATH + "footer.css");
  link.setAttribute("type", "text/css");
  document.getElementsByTagName("head")[0].appendChild(link);
}
function privateSetHeaderCss() {
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", __COMMON_CSS_HEADER_PATH + "header.v05.css");
  link.setAttribute("type", "text/css");
  document.getElementsByTagName("head")[0].appendChild(link);
}
/** OC{^ */
function privateGetLoginButtonStatus() {
  var loginButtonStatus = new Array();

  loginButtonStatus[0] = "OC";
  loginButtonStatus[1] = __urlLogin;
  if (document.URL.indexOf("nxtURL=") > 0) {
    loginButtonStatus[2] = document.URL.substr(
      document.URL.indexOf("nxtURL=") + 7
    );
  } else {
    loginButtonStatus[2] = document.URL;
  }
  loginButtonStatus[3] = "logIn";

  if (getLoginStatus()) {
    loginButtonStatus[0] = "OAEg";
    loginButtonStatus[1] = __urlLogout;
    loginButtonStatus[2] = "";
    loginButtonStatus[3] = "logOut";
  }

  return loginButtonStatus;
}
/** Hangame Simple Header*/
function setSimpleHeader(type, menu) {
  var loginHost = getLoginHostInfoSimple(type);

  privateSetHeaderCss();
  var IMG_PATH = __COMMON_IMAGE_PATH + "header/";
  var loginButtonStatus = privateGetLoginButtonStatus();

  var __s =
    '<div id="smallHeader"' + (type == "bk" ? 'class="blackHeader"' : "") + ">";
  __s += '<div class="mdHeader">';
  __s += '<div class="wrap">';
  __s +=
    '<p class="hgLogo"><a href="' +
    loginHost[1] +
    '" title="' +
    loginHost[2] +
    '"><img src="' +
    loginHost[4] +
    '" alt="' +
    loginHost[2] +
    '"></a></p>';
  __s += '<div class="addUnit">';
  __s += '<ul class="guide">';
  __s += '<li class="bgnr"><a href="' + __subMenuIndex[3] + '">ßÄÌûÖ</a></li>';
  __s += '<li class="help"><a href="' + __subMenuIndex[4] + '">wv</a></li>';
  __s +=
    '<li class="sitemap"><a href="' + __subMenuIndex[5] + '">TCg}bv</a></li>';
  __s += "</ul>";
  __s +=
    '<div class="btn ' +
    loginButtonStatus[3] +
    '"><a href="javascript:getLoginURL();">' +
    loginButtonStatus[0] +
    "</a></div>";
  __s += "</div>";

  __s += '<div class="gMenu"><ul>';
  __s +=
    '<li class="game"><a href="' + __serviceUrl[1] + '">©ñ½ñQ[p[N</a></li>';
  __s += '<li class="shop"><a href="' + __serviceUrl[5] + '">Ao^[Vbv</a></li>';
  __s +=
    '<li class="community"><a href="' + __serviceUrl[3] + '">R~jeB</a></li>';
  __s += '<li class="gLi"><a href="' + __serviceUrl[9] + '">Q[Xg</a></li>';
  __s += '<li class="gInfo"><a href="' + __serviceUrl[10] + '">¨mç¹</a></li>';
  __s += "</ul></div>";
  __s += "</div>";
  __s += "</div>";
  __s += "</div>";

  document.write(__s);

  var elem = document.getElementsByTagName("BODY");
  elem[0].style.marginTop = 0;
}
/** Hangame Header Generation */
function setHeader(serviceid, contentid) {
  setSimpleHeader();
  return;
}
function getLoginURL() {
  var loginButtonStatus = new Array();
  loginButtonStatus = privateGetLoginButtonStatus();
  location.href = loginButtonStatus[1] + "?nxtURL=" + loginButtonStatus[2];
}

function getFooterBody(wideFlag, footerKind) {
  var __ss =
    '<div id="hangameFooter"' +
    (wideFlag ? ' class="wide v151001"' : 'class="v151001"') +
    ">";
  switch (footerKind) {
    case "global":
      __ss += '<div class="wrap basic">';
      __ss += '<div class="inner">';
      __ss +=
        '<p id="recommendedSystem">nQ[Í<span>&nbsp;Microsoft Windows&nbsp;</span>¨æÑ<span>&nbsp;Internet Explorer 9 / 10 / 11&nbsp;</span>Å²p­¾³¢</p>';
      __ss +=
        '<h2 id="nhncorpLogo"><a href="' +
        __subMenuIndex[15] +
        '" target="_blank"><img src="' +
        __COMMON_IMAGE_PATH +
        'footer/logo_nhn_hg_g_w55.png" alt="NHN hangame" /></a></h2>';
      __ss += '<ul id="nhnCorpNavi">';
      __ss +=
        '<li class="corpSummary"><a href="' +
        __subMenuIndex[6] +
        '" target="_blank">ïÐTv</a></li>\n';
      //    __ss += '<li><a href="'+__subMenuIndex[10]+'" target="_blank">Ìpîñ</a></li>\n';
      __ss += '<li><a href="' + __subMenuIndex[7] + '">pKñ</a></li>\n';
      __ss += '<li><a href="' + __subMenuIndex[8] + '">ÂlîñÛì</a></li>\n';
      __ss += '<li><a href="' + __subMenuIndex[9] + '">Áè¤æø@ÌL</a></li>\n';
      __ss += '<li><a href="' + __subMenuIndex[13] + '">àÏ@ÉîÃ­¦</a></li>';
      __ss += '<li><a href="' + __subMenuIndex[14] + '">Ì^c|V[</a></li>';
      __ss += "</ul>";
      __ss +=
        '<address>&copy; <span class="nhnCorp">NHN hangame Corp.</span></address>';
      __ss +=
        '<div id="familySite"><h3>Family Site</h3><ul><li class="comico"><a a href="' +
        __subMenuIndex[16] +
        '" target="_blank"><img width="62" height="20" src="' +
        __COMMON_IMAGE_PATH +
        'r02/footer/logo_comico.png" alt="³¿}KÈçcomico" /></a></li></ul></div>';
      __ss += "</div>";
      __ss += "</div>";
      break;
  }
  __ss += "</div>";
  return __ss;
}
function setSimpleFooterL(serviceId) {
  setFooter();
}

/** Hangame Simple Footer Generation */
function setSimpleFooter(serviceId) {
  setFooter();
}
/** Hangame Simple Footer Generation (not favorite-link ver) */
function setMoreSimpleFooter(serviceId) {
  setSimpleFooter();
}
/** Hangame Footer Generation */
function setFooter(serviceId, wideFlag) {
  wideFlag = wideFlag === true ? true : false;
  privateSetFooterCss();
  var __s = getFooterBody(wideFlag, "global");
  document.write(__s);
  document.write(getTimeLimitItemsTag());
  setNDScode();
}
/** Hangame Footer Generation: Wide version*/
function setWideFooter(serviceId) {
  setFooter(serviceId, true);
}

var __dynamic_index = 10;
var __temp_host = getLoginHostInfo();
if (__temp_host[0] != "www") {
  __dynamic_index = 5;
}

setTitle();

/** Hangame Title */
function setTitle() {
  if (document.title.match("yµ¢PúªnÜé")) {
    document.title = "³¿Q[EICQ[ÌnQ[ | Happy Everyday nQ[";
  }
  //------for avitem expire start------//
  setTimeout("checkLimitItemView()", 2000);
  //------for avitem expire end------//
}

function openSearchid() {
  openProfile("/userinfo/index.asp?mid=_search");
}
function openPost(sOption) {
  if (getCookie(CK_MEMBERID).length == 0) {
    alert("OCµÄ­¾³¢B");
    return;
  }
  if (typeof sOption == "undefined") {
    sOption = "";
  }
  openWin(getMMailHost() + "/main.nhn" + sOption, "mmail", 600, 623, "no");
}
function openPostToWindow(sMid) {
  openPost("?tid[]=" + sMid);
}

function clickLogout() {
  //top.location.href = __urlLogout;
  if (__bTest) {
    top.location.href =
      "http://ctrad.hangame.co.jp/go?loc=clate.logout&ad=AD1138864328242";
  } else {
    top.location.href =
      "http://ctrad.hangame.co.jp/go?loc=clate.logout&ad=AD1138864266428";
  }
}

function clickLogoutToolbar() {
  if (__bTest) {
    top.location.href =
      "http://ctrad.hangame.co.jp/go?loc=clate.logout&ad=AD1138864442987";
  } else {
    top.location.href =
      "http://ctrad.hangame.co.jp/go?loc=clate.logout&ad=AD1138864374477";
  }
}

function buyItem(s, sex) {
  ckID = getCookie(CK_MEMBERID);
  if (ckID.length == 0) {
    alert("OC³êÄ¢Ü¹ñÌÅAACeð²wü¢½¾¯Ü¹ñB");
    return;
  }
  if (sex != "A" && sex != getCookie(CK_SEX)) {
    alert("«Êªá¤ACeÍwüÅ«Ü¹ñB");
  } else {
    openWin(
      sSubDomain +
        "/avatar/popAvitem.asp?proc=buy&linkfrom=top&lstItem=" +
        s +
        "@",
      "avItem",
      400,
      460,
      "yes"
    );
  }
}

function giftItem(s) {
  ckID = getCookie(CK_MEMBERID);
  if (ckID.length == 0) {
    alert("OC³êÄ¢Ü¹ñÌÅAv[g@ð²p¢½¾¯Ü¹ñB");
    return;
  }
  openWin(
    sSubDomain +
      "/avatar/popAvitem.asp?proc=gift&linkfrom=top&lstItem=" +
      s +
      "@",
    "avItem",
    400,
    460,
    "yes"
  );
}

function buyAvapri(s, sInfo) {
  ckID = getCookie(CK_MEMBERID);
  if (ckID.length == 0) {
    alert("OC³êÄ¢Ü¹ñÌÅAACeð²wü¢½¾¯Ü¹ñB");
    return;
  }

  openWin(
    sSubDomain +
      "/avatar/popAvitem.asp?proc=" +
      sInfo +
      "&linkfrom=top&lstItem=" +
      s +
      "@",
    "avItem",
    400,
    460,
    "yes"
  );
}

function buyProc(s, sInfo) {
  ckID = getCookie(CK_MEMBERID);
  if (ckID.length == 0) {
    alert("OC³êÄ¢Ü¹ñÌÅAACeð²wü¢½¾¯Ü¹ñB");
    return;
  }

  openWin(
    sSubDomain +
      "/avatar/popAvitem.asp?proc=" +
      sInfo +
      "&linkfrom=top&lstItem=" +
      s +
      "@",
    "avItem",
    400,
    460,
    "yes"
  );
}

function buyTicketUranai(s, sInfo) {
  ckID = getCookie(CK_MEMBERID);
  if (ckID.length == 0) {
    alert("OC³êÄ¢Ü¹ñÌÅAACeð²wü¢½¾¯Ü¹ñB");
    return;
  }
  openWin(
    sSubDomain +
      "/avatar/popAvitem.asp?proc=" +
      sInfo +
      "&linkfrom=top&lstItem=" +
      s +
      "@",
    "avItem",
    400,
    460,
    "yes"
  );
}

// footer menu functions
var footer_menu_id = "hg_footer_menu";
var footer_margin = 0;

function hg_checkIsZenkaku(value) {
  for (var i = 0; i < value.length; ++i) {
    var c = value.charCodeAt(i);
    if (c < 256 || (c >= 0xff61 && c <= 0xff9f)) {
      return false;
    }
  }
  return true;
}

function hg_getByteCount(value) {
  var count = 0;
  for (var i = 0; i < value.length; ++i) {
    var sub = value.substring(i, i + 1);
    if (hg_checkIsZenkaku(sub)) {
      count += 2;
    } else {
      count += 1;
    }
  }
  return count;
}

function openFooterMenuChat() {
  ckID = getCookie(CK_MEMBERID);
  if (ckID.length == 0) {
    alert("OC³êÄ¢Ü¹ñÌÅA`bgð²p¢½¾¯Ü¹ñB");
    return false;
  }
  //exec_chat_area.location.href = __urlchat + '/pasteller/chat_create_room.asp?roomname=&maxuser=20&sCategoryname=&execution=1';
  exec_chat_area.location.href =
    __urlchat +
    "/pasteller/chat_create_room.asp?roomname=" +
    escape("ð¬pLê001") +
    "&maxuser=50&cat_code=1&kwinsize=2";

  return true;
}

function execSearchid() {
  var target_id = "";
  target_id = document.footer_frm.find.value;

  if (!isFindInitialize || target_id == "" || target_id.length <= 0) {
    alert("õµ½¢nQ[IDðüÍµÄ­¾³¢");
    document.footer_frm.find.value = "";
    isFindInitialize = true;

    document.footer_frm.find.focus();
    return false;
  }

  if (hg_getByteCount(target_id) > 20) {
    alert("nQ[IDð³µ­üÍµÄ­¾³¢B\niSp10¶¼p20¶ÜÅj");
    isFindInitialize = true;

    document.footer_frm.find.focus();
    return false;
  }

  return false;
}

function escape_cb(target_id) {
  openMypage(target_id, MYPAGE_PROFILE, 0);
}

function getElementLeft(obj) {
  var width = 0;
  var p;

  width = obj.offsetLeft;
  for (p = obj.offsetParent; p.tagName != "BODY"; p = p.offsetParent) {
    width += p.offsetLeft;
  }

  return width;
}

function getElementtop(obj) {
  var top = 0;
  var p;

  top = obj.offsetTop;
  for (p = obj.offsetParent; p.tagName != "BODY"; p = p.offsetParent) {
    top += p.offsetLeft;
  }

  return top;
}

function showToolChip(obj, comment) {
  var width = getElementLeft(obj);
  var top = getElementtop(obj);

  document.getElementById("menu_alt").innerHTML = comment;
  var menubar = document.getElementById(footer_menu_id);

  document.getElementById("menu_comment").style.left =
    width - document.getElementById("menu_comment").width / 2 + obj.width / 2;
  document.getElementById("menu_comment").style.top =
    document.body.clientHeight +
    document.body.scrollTop +
    5 -
    menubar.clientHeight * 2;

  document.getElementById("menu_alt").style.lineHeight = 1;
  document.getElementById("menu_alt").style.color = "#000000";
  document.getElementById("menu_comment").style.display = "inline";
}

function hiddenToolChip(obj) {
  document.getElementById("menu_comment").style.display = "none";
}

var isFindInitialize = false;
function initFind(obj) {
  if (isFindInitialize) {
    return;
  }
  obj.value = "";
  isFindInitialize = true;
}

function createFooterMenu() {}

function initFooterMune() {}

function hg_chgButton(btObj) {
  btObj.style.display = "none";
  if (typeof btObj.form == "object") {
    disObj = eval("document." + btObj.form.name + "." + btObj.name + "_dis");
  } else {
    disObj = eval("document." + btObj.name + "_dis");
  }
  disObj.style.display = "";
}

// footer menu functions

/** Hangame Event(MSN Sports) Header Generation   2005/07/11(Kyounghwa Park) **/
function setEventHeader() {
  var __s = "";

  __s +=
    '<table width="100%" height="32"  border="0" cellpadding="0" cellspacing="0">';
  __s += "<tr>";
  __s +=
    '<td width="131" valign="top" background="http://images.hangame.co.jp/_images/top200506/img_nw/top_pt.gif"><a href="http://www.hangame.co.jp/" target="_blank"><img src="http://images.hangame.co.jp/_images/top200506/img_nw/logo_nw.gif" width="131" height="30" border="0"></a></td>';
  __s +=
    '<td width="*" valign="top" background="http://images.hangame.co.jp/_images/top200506/img_nw/top_pt.gif"><img src="http://images.hangame.co.jp/_images/top200506/img_nw/catch.gif" width="120" height="30"></td>';
  __s +=
    '<td width="104" valign="top" background="http://images.hangame.co.jp/_images/top200506/img_nw/top_pt.gif"><a href="http://customer.hangame.co.jp/" target="_blank"><img src="http://images.hangame.co.jp/_images/top200506/img_nw/help.gif" width="66" height="30" border="0"></a></td>';
  __s += "</tr>";
  __s += "</table>";
  //  __s += '<EMBED id="D22AABF2-BFF0-4b20-B5F8-441DC33D9D94" class="" width=0 height=0 style="display: none;"></EMBED>';

  document.write(__s);
}

/** Hangame Event(MSN Sports) Footer Generation   2005/07/11(Kyounghwa Park) **/
function setEventFooter(serviceId) {
  var __s = "";

  __s +=
    '<table width="100%" height="60"  border="0" cellpadding="0" cellspacing="0">';
  __s += "<tr>";
  __s +=
    '<td width="175" align="center" background="http://images.hangame.co.jp/_images/top200506/img_nw/bottom_pt.gif"><img src="http://images.hangame.co.jp/_images/top200506/img_nw/nhnlogo_nw.gif" width="67" height="22"></td>';
  __s +=
    '<td width="*" background="http://images.hangame.co.jp/_images/top200506/img_nw/bottom_pt.gif"><img src="http://images.hangame.co.jp/_images/top200506/img_nw/bottom_prm.gif" width="581" height="34" border="0"></td>';
  __s += "</tr>";
  __s += "</table>";

  document.write(__s);
}

/** Check XPSP2 is installed or not  2005/8/10 (M.Abe) **/
function IsWinXPSP2_Check() {
  try {
    var info = window.clientInformation;
    var reg1 = /[^A-Z0-9]MSIE[ ]+6.0[^A-Z0-9]/i;
    var reg2 = /[^A-Z0-9]WINDOWS[ ]+NT[ ]+5.1[^A-Z0-9]/i;

    if (
      info.appMinorVersion
        .customReplace(/\s/g, "")
        .toUpperCase()
        .indexOf(";SP2;") >= 0 &&
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

/** OSîñæ¾ **/
function getOSInfo() {
  var info = {};
  var u = navigator.userAgent;
  var p = navigator.platform;

  // Return boolean.
  var f = function (s, h) {
    return h.indexOf(s) > -1;
  };

  info.getName = function () {
    var name = "";
    for (x in info) {
      if (typeof info[x] == "boolean" && info[x] && info.hasOwnProperty(x))
        name = x;
    }
    return name;
  };

  info.win = f("Win", p);
  info.mac = f("Mac", p);
  info.win2000 = info.win && (f("NT 5.0", u) || f("2000", u));
  info.winxp = info.win && f("NT 5.1", u);
  info.xpsp2 = info.winxp && f("SV1", u);
  info.vista = info.win && f("NT 6.0", u);
  info.win7 = info.win && f("NT 6.1", u);
  info.win8 = info.win && f("NT 6.2", u);
  info.win81 = info.win && f("NT 6.3", u);
  info.win10 = info.win && f("NT 10.0", u);
  info.iphone = f("iPhone", u);
  info.android = f("Android", u);

  //getClientInfo
  info.iphone2 = f("iPhone OS 2", u);
  info.iphone3 = f("iPhone OS 3", u);
  info.iphone4 = f("iPhone OS 4", u);
  info.ipad = f("iPad", u);
  info.android16 = f("Android 1.6", u);
  info.android21 = f("Android 2.1", u);
  info.android22 = f("Android 2.2", u);

  info.ie = f("MSIE", u);
  info.firefox = f("Firefox", u);
  info.opera = f("Opera", u);
  info.netscape = f("Netscape", u);
  info.safari = f("Safari", u);
  info.chrome = f("Chrome", u);
  info.webkit = f("HangameApp", u);

  return info;
}

/** Windows8Î **/
var getOS_Environment_Check = function () {
  var userAgent = window.navigator.userAgent.toLowerCase();
  var appVersion = window.navigator.appVersion.toLowerCase();

  /* Window8Ìê F true
   * Window8ÅÍÈ¢ F false
   * */
  function isWin8() {
    var uA = window.navigator.userAgent;
    if (uA.match(/Win(dows )?NT 6\.2/)) {
      return true;
    } else {
      return false;
    }
  }

  /* IE10Ìê Ftrue
   * IE10ÌÅÍÈ¢ê Ffalse
   *  */
  function isIE10() {
    if (
      userAgent.indexOf("msie") != -1 &&
      appVersion.indexOf("msie 10.") != -1
    ) {
      return true;
    } else {
      return false;
    }
  }

  (function () {
    // win8
    if (isWin8() && isIE10()) {
      //Cookie@Check
      var resultCookie = getStrCookie("hgWin8Cookie");
      if (resultCookie === "hgWindow8") {
        return;
      }

      var getClassNameFunc = function (name) {
        if (
          typeof document.getElementsByClassName !== "undefined" &&
          typeof document.getElementsByClassName === "function"
        ) {
          return document.getElementsByClassName(name)[0];
        } else {
          // for under ie9
          var searchNodes = document.getElementsByTagName("DIV"),
            i,
            l = searchNodes.length;
          for (i = 0; i < l; i++) {
            if (searchNodes[i].className.indexOf(name) !== -1) {
              return searchNodes[i];
            }
          }
        }
      };

      var header = getClassNameFunc("hgHeaders");
      if (!header) {
        header = getClassNameFunc("mdHeader");
      }
      if (!header) {
        return;
      }

      // TODO check win8Info exist
      var win8Elm = getClassNameFunc("win8Info");
      if (win8Elm) {
        return;
      }

      var sCss =
        "body,p{padding: 0; margin: 0;}.win8Info{background: url(http://images.hangame.co.jp/hangame/extra/win8/bar_win8.gif) repeat-x 0 0; height: 62px;} .win8Info p.txtWin8{font-size: 14px; color: #333; font-weight: bold; text-align: center; padding-top: 20px;} .win8Info p.txtWin8 span img{ vertical-align: top;} .win8Info p.txtWin8 a{ color: #ff3c00; text-decoration: underline;} .win8Info p.txtWin8 span{ padding-right: 5px;}";
      var elStyle = document.createElement("style");
      elStyle.type = "text/css";
      var elHead = document.getElementsByTagName("head")[0];
      elHead.appendChild(elStyle);

      if (elStyle.styleSheet) {
        // IE
        elStyle.styleSheet.cssText = sCss;
      } else {
        // TODO test for IEÈO
        elStyle.innerText = sCss;
      }

      var newElm = document.createElement("div");
      newElm.className = "win8Info";

      newElm.innerHTML =
        '<p class="txtWin8"><span><img src="http://images.hangame.co.jp/hangame/extra/win8/ico_info.gif" alt="" width="19" height="19" /></span>Windows8ÅnQ[ð²pÌêA<a href="http://static.hangame.co.jp/hangame/extra/win8/">K¸êx¨ÇÝ­¾³¢B</a></p>';
      header.parentNode.insertBefore(newElm, header);
    } else {
      return;
    }
  })();
};

//Windows8
//if(window.addEventListener){
//    window.addEventListener('load',getOS_Environment_Check,false); //W3C
//}
//else{
//    window.attachEvent('onload',getOS_Environment_Check); //IE
//}

function isIE7() {
  try {
    var info = window.clientInformation;
    var reg1 = /[^A-Z0-9]MSIE[ ]+7.0[^A-Z0-9]/i;
    if (reg1.test(info.userAgent) == true) {
      return true;
    }
  } catch (e) {
    return false;
  }
  return false;
}

function setHgAB() {
  var OBJECTID, CLASSID;
  OBJECTID = "HgAB";
  CLASSID = "C71C8580-B76B-4FA4-8592-1160E8CE2BBC";
  document.write(
    '<OBJECT ID="' +
      OBJECTID +
      '" width=0 Height=0 CLASSID="CLSID:' +
      CLASSID +
      '" CODEBASE="http://down.hangame.co.jp/jp/dist/hgstart/HGAB.cab#version=1,2,0,0" style="display:none"></OBJECT>'
  );
  return eval(OBJECTID);
}

function setHgPlugin() {
  var OBJECTID, CLASSID, CODEBASE;
  OBJECTID = "HGPluginJP28";
  CLASSID = "1DC420F0-D89A-40D0-B5CC-92B9AD19A1AC";
  if (__bTest) {
    CODEBASE =
      "downdev.hangame.co.jp/jp-test/dist/hgstart/HGPluginJP28.cab#version=28.0.0.0";
  } else {
    CODEBASE =
      "down.hangame.co.jp/jp/dist/hgstart/HGPluginJP28.cab#version=28.0.0.0";
  }
  document.write(
    '<OBJECT ID="' +
      OBJECTID +
      '" width=0 height=0 CLASSID="CLSID:' +
      CLASSID +
      '" style="display:none" onreadystatechange="HGCheckActiveX(\'' +
      OBJECTID +
      "', '" +
      CLASSID +
      "', '" +
      CODEBASE +
      "',this);\" VIEWASTEXT></OBJECT>"
  );
  return eval(OBJECTID);
}

function gamebootHgPlugin(gamestring) {
  HGPluginJP28.hgs_startGame(gamestring);
}

function hannotiHgPlugin(gamestring) {
  HGPluginJP28.hgs_startNotify(gamestring);
}

function hanplayHgPlugin(gamestring) {
  HGPluginJP28.hgs_startHanplay(gamestring);
}

function setHgRunPub() {
  var OBJECTID, CLASSID, CODEBASE;
  OBJECTID = "HgRunPub";
  CLASSID = "5082D9B5-5538-4C50-BDB1-C5F44BFB98CC";
  if (__bTest) {
    CODEBASE =
      "pubdownt.hangame.co.jp/downbase/jp-test/dist/hgrunpub/HgRunPub.cab#version=1.0.3.0";
  } else {
    CODEBASE = "down.hangame.co.jp/jp/installer/HgRunPub.cab#version=1.0.3.0";
  }

  document.write(
    '<OBJECT ID="' +
      OBJECTID +
      '" width=0 height=0 CLASSID="CLSID:' +
      CLASSID +
      '" style="display:none" onreadystatechange="HGCheckActiveX(\'' +
      OBJECTID +
      "', '" +
      CLASSID +
      "', '" +
      CODEBASE +
      "',this);\" VIEWASTEXT></OBJECT>"
  );
  return eval(OBJECTID);
}

function setHgArcadePluginJP3() {
  var OBJECTID, CLASSID, CODEBASE;
  OBJECTID = "HgArcadePluginJP3";
  CLASSID = "1C9D421B-ACBC-48BB-9CED-51368BC1CE31";
  CODEBASE =
    "down.hangame.co.jp/jp/dist/hgstart/HgArcadePluginJP3.cab#version=3,0,0,0";

  //modified in order to display ActiveX notice page by M.Abe 2005/08/12
  document.write(
    '<OBJECT ID="' +
      OBJECTID +
      '" width=0 height=0 CLASSID="CLSID:' +
      CLASSID +
      '" style="display:none" onreadystatechange="HGCheckActiveX(\'' +
      OBJECTID +
      "', '" +
      CLASSID +
      "', '" +
      CODEBASE +
      "',this);\" VIEWASTEXT></OBJECT>"
  );
  return eval(OBJECTID);
}

/** Check ActiveX "HGPluginJP21" is installed or not  2005/8/10 (M.Abe) **/
function HGCheckActiveX(ObjID, ClsID, CDBase, objActiveX) {
  if (!objActiveX || objActiveX.readyState < 4) return;

  if (!objActiveX.object) {
    if (objActiveX.id == ObjID) {
      window.top.location.href =
        "http://static.hangame.co.jp/hangame/extra/activex/activex.html?objectid=" +
        ObjID +
        "&classid=" +
        ClsID +
        "&codebase=" +
        CDBase;
    } else {
      location.href = CDBase;
    }
  }
}

function openItemBag(menu, submenu, ver) {
  if (getCookie(CK_MEMBERID).length == 0) {
    alert("OC³êÄ¢Ü¹ñÌÅAACeobOð²p¢½¾¯Ü¹ñB");
    return;
  }
  var url = getMypageURL("", MYPAGE_AVATAR, 1);
  if (
    url.indexOf("?") == -1 &&
    ((typeof ver != "undefined" && ver != null) ||
      (typeof menu != "undefined" && menu != null) ||
      (typeof submenu != "undefined" && submenu != null))
  ) {
    url += "?";
  }
  if (typeof ver != "undefined" && ver != null) {
    url += "ver=" + ver;
  }
  if (
    typeof ver != "undefined" &&
    ver != null &&
    typeof menu != "undefined" &&
    menu != null
  ) {
    url += "&menu=" + menu;
  } else if (
    (typeof ver == "undefined" || ver == null) &&
    typeof menu != "undefined" &&
    menu != null
  ) {
    url += "menu=" + menu;
  }
  if (
    typeof menu != "undefined" &&
    menu != null &&
    typeof submenu != "undefined" &&
    submenu != null
  ) {
    url += "&submenu=" + submenu;
  }
  var win = window.open(url, MYPAGE_WIN_NAME);
  win.focus();
}
function openCollectionBox(svcid, svcver) {
  var colpath = "";

  switch (svcid) {
    case "gachadx":
      colpath = "/avatar/collectgachadx.nhn";
      break;
    case "gachamini":
      colpath = "/avatar/collectgachamini.nhn";
      break;
    case "homegacha":
      colpath = "/avatar/collecthomegacha.nhn";
      break;
    case "itemtree":
      colpath = "/avatar/collectitemtree.nhn";
      break;
    case "nene":
      colpath = "/avatar/collectnene.nhn";
      break;
    case "bandai":
      colpath = "/avatar/collectbandai.nhn";
      break;
    case "stonage":
      colpath = "/avatar/collectstonage.nhn";
      break;
    case "collectionking":
      colpath = "/mygame/collectioncard.nhn";
      break;
    case "chocottoland":
      colpath = "/mygame/chocottoland.nhn";
      break;
    default:
      colpath = "";
  }
  if (colpath != "" && typeof svcver != "undefined") {
    colpath = colpath + "?version=" + svcver;
  }
  location.href = getMypageHost() + colpath;
}

function getBlogHost() {
  return "http://" + __host_prefix + "blog.hangame.co.jp";
}

function getLinkLinkTownHost() {
  return "http://linklinktown.hangame.co.jp".replace(/\./, __host_suffix + ".");
}

function getMemberHost() {
  return "http://" + __host_prefix + "member.hangame.co.jp";
}

function getMemberHostForSecure() {
  return "https://" + __host_prefix + "member.hangame.co.jp";
}

function getMypageHost() {
  return "http://" + __host_prefix + "mypage.hangame.co.jp";
}

function getAvatarsHost() {
  return "http://" + __host_prefix + "avatars.hangame.co.jp";
}

function getTopHost() {
  return "http://" + __host_prefix + "top.hangame.co.jp";
}

function getMMailHost() {
  return "http://" + __host_prefix + "mmail.hangame.co.jp";
}

function getMyinfoHost() {
  return "https://" + __host_prefix + "myinfo.hangame.co.jp";
}

function getWWWHost() {
  if (__host_suffix == "") {
    return "http://www.hangame.co.jp";
  } else {
    return "http://" + __host_suffix + ".hangame.co.jp";
  }
}

function getBillHost() {
  if (__host_suffix == "") {
    return "https://billing.hangame.co.jp";
  } else {
    return "https://billdev.hangame.co.jp";
  }
}

function getLink2Host() {
  return "http://" + __host_prefix + "link2.hangame.co.jp";
}

function privOpenBlogWin(url) {
  return window.open(url, MYPAGE_WIN_NAME);
}

function privOpenLinkLinkTownWin(url) {
  return window.open(url, "LinkLinkTown");
}

function openBlogTop() {
  if (getCookie(CK_MEMBERID).length == 0) {
    alert("nQ[IDðwèµÄ­¾³¢B");
    return;
  }
  return privOpenBlogWin(getBlogHost());
}

function openBlog(mid) {
  if (mid.length == 0) {
    alert("nQ[IDðwèµÄº³¢B");
    return;
  }
  var url = getBlogHost() + "/index.nhn?mid=" + mid;
  return privOpenBlogWin(url);
}

function openBlogPost() {
  if (getCookie(CK_MEMBERID).length == 0) {
    alert("OC³êÄ¢éêÌÝeªÂÅ·B");
    return;
  }
  var url = getBlogHost() + "/write.nhn";
  return privOpenBlogWin(url);
}

function openBlogDetail(num, url) {
  var url = getBlogHost() + "/" + url + "/article/" + num + "/";
  return privOpenBlogWin(url);
}

function openBlogDetailCmt(num, cmt, url) {
  var url = getBlogHost() + "/" + url + "/article/" + num + "/cmt/" + cmt + "/";
  return privOpenBlogWin(url);
}

function openMyHome(mid) {
  top.location.href = privGetMyHomeURL(mid);
}

function openMyHomeNW(mid) {
  return privOpenLinkLinkTownWin(privGetMyHomeURL(mid));
}

function openHancoinBuy(rurl) {
  if (getCookie(CK_MEMBERID).length == 0) {
    alert("OC³êÄ¢Ü¹ñÌÅAnRCð²wü¢½¾¯Ü¹ñB");
    return;
  }
  if (typeof rurl != "string") {
    rurl = "";
  }
  openWin(
    getMyinfoHost() + "/bill/chargehancoin.nhn?rurl=" + escapeSJIS(rurl),
    "avItem",
    720,
    815,
    "yes"
  );
}
function redirectHancoinBuy(rurl) {
  if (getCookie(CK_MEMBERID).length == 0) {
    alert("OC³êÄ¢Ü¹ñÌÅAnRCð²wü¢½¾¯Ü¹ñB");
    return;
  }
  if (typeof rurl != "string") {
    rurl = "";
  }
  location.href =
    getMyinfoHost() + "/bill/chargehancoin.nhn?rurl=" + escapeSJIS(rurl);
}

function openHancoinHist(selfWinFlg) {
  if (getCookie(CK_MEMBERID).length == 0) {
    alert("OC³êÄ¢Ü¹ñÌÅAnRCÊ ð²p¢½¾¯Ü¹ñB");
    return;
  }

  if (typeof selfWinFlg == "undefined") {
    window.open(getMyinfoHost() + "/bankbook/hancoinbankbook.nhn");
  } else if (selfWinFlg) {
    location.href = getMyinfoHost() + "/bankbook/hancoinbankbook.nhn";
  } else {
    window.open(getMyinfoHost() + "/bankbook/hancoinbankbook.nhn");
  }
}

function openHangHist(selfWinFlg) {
  if (getCookie(CK_MEMBERID).length == 0) {
    alert("OC³êÄ¢Ü¹ñÌÅAnGÊ ð²p¢½¾¯Ü¹ñB");
    return;
  }
  if (typeof selfWinFlg == "undefined") {
    window.open(getMyinfoHost() + "/bankbook/hangbankbook.nhn");
  } else if (selfWinFlg) {
    location.href = getMyinfoHost() + "/bankbook/hangbankbook.nhn";
  } else {
    window.open(getMyinfoHost() + "/bankbook/hangbankbook.nhn");
  }
}

//2015/9/16 loginPanel PresentBoxÇÁÎ
//parameter:gid(gameid)
function openPresentBoxList(gid) {
  if (gid == "") {
    openWin(
      "http://" + __host_prefix + "myinfo.hangame.co.jp/giftticket/index.nhn",
      "presentListWin",
      628,
      678
    );
  } else {
    openWin(
      "http://" +
        __host_prefix +
        "myinfo.hangame.co.jp/giftticket/index.nhn?gameid=" +
        gid,
      "presentListWin",
      628,
      678
    );
  }
}

//2016/03/09 PresentBoxjAÎ
function openPresentBoxList201603() {
  openWin(
    "http://" + __host_prefix + "myinfo.hangame.co.jp/presentbox/index.nhn",
    "presentListWin",
    628,
    678,
    "yes"
  );
}

function privGetMyHomeURL(mid) {
  var url;
  if (typeof mid == "undefined" || mid == null) {
    mid = "";
  }
  if (mid.length > 0) {
    mid = "?mid=" + mid;
  }
  url = getMypageURL(mid, MYPAGE_PROFILE, 0);
  return url;
}

function openMyGarage(objWinHandle) {
  return openMypage("", MYPAGE_SETTING, 2);
}

function openEmailCheck(strServiceID) {
  if (strServiceID == "_hidden") {
    if (typeof document.all.frmEmailCheck == "undefined") {
      alert(
        "^Oª©Â©èÜ¹ñ:<iframe style='display:none;' id='frmEmailCheck' src='about:blank;'></iframe>"
      );
    } else {
      document.all.frmEmailCheck.src =
        getMemberHost() +
        "/emailcheck/js/sendmail.nhn?&serviceid=" +
        strServiceID;
    }
  } else if (
    strServiceID == "present_avatar" ||
    strServiceID == "present_coupon" ||
    strServiceID == "present_bgm" ||
    strServiceID == "present_myhome"
  ) {
    window.moveTo(100, 100);
    window.resizeTo(900, 600);
    location.href =
      getMemberHost() + "/emailcheck/top.nhn?&serviceid=" + strServiceID;
  } else {
    window.open(
      getMemberHost() + "/emailcheck/top.nhn?&serviceid=" + strServiceID,
      "emailcheck",
      ""
    );
  }
}

function resizeContents(objResize) {
  resizeBy(
    objResize.offsetWidth - document.body.clientWidth,
    objResize.offsetHeight - document.body.clientHeight
  );
}

function writeDocumentForObjectEmbedApplet(strHTML) {
  document.write(strHTML);
}

//------for avitem expire start------//
var KEY_EXPIREUPDATEFLAG = "EXPIREUPDATEFLAG";
var VIEWTYPE_HANGAME = 0;
var VIEWTYPE_MYITEMBAG = 1;
var divLimitItemInit = true;

function getTimeLimitItemsTag() {
  var tag = "";
  if (divLimitItemInit) {
    tag +=
      '<div id="divLimitItem" style="position:absolute;left:0px; top:0px; display:none; z-index:100000">';
    tag +=
      '<table width="100%" height="100%" style="filter:alpha(opacity=70);background-color:#000000;"><tr><td bgcolor="#ffffff">';
    tag +=
      '<div id="divLimitItemView" style="position:absolute;left:0px; top:0px;">';
    tag += "</div>";
    tag += "</td></tr></table>";
    tag += "</div>";
    divLimitItemInit = false;
  }
  return tag;
}

function setItemList(type, expiredItems) {
  var tag;
  var url;
  var sFeatures;
  var result;
  url = getMypageHost() + "/avatar/expiredAvItemList.nhn";
  if (type == VIEWTYPE_MYITEMBAG) {
    url += "?expiredItems=" + expiredItems;
  }
  if (isIE7()) {
    sFeatures = "dialogWidth=380px;";
    sFeatures += "dialogHeight=487px;";
  } else if (IsWinXPSP2_Check()) {
    sFeatures = "dialogWidth=385px;";
    sFeatures += "dialogHeight=538px;";
  } else {
    sFeatures = "dialogWidth=385px;";
    sFeatures += "dialogHeight=512px;";
  }
  sFeatures += "status:no;help:no;scroll:no";

  //cmdOpenLimitItemDiv();
  result = window.showModalDialog(url, self, sFeatures);
  if (result != null) {
    returnModal(result);
  }
  //cmdCloseLimitItemDiv();
}

function returnModal(result) {
  if (result["PPOC"] == "BUY") {
    openWin(result["URL"], "avItem", 400, 460, "yes");
  } else if (result["PPOC"] == "DESC") {
    var win = window.open(result["URL"], "_blank");
    win.focus();
  }
}

function checkLimitItemView() {
  if (getStrCookie(KEY_EXPIREUPDATEFLAG) == "true") {
    document.cookie =
      KEY_EXPIREUPDATEFLAG +
      "=;domain=" +
      getFixDomain() +
      ";path=/;expires=" +
      new Date(0).toGMTString();
    if (typeof divLimitItem == "object") {
      setItemList(VIEWTYPE_HANGAME, "");
    } else if (typeof parent.divLimitItem == "object") {
      parent.setItemList(VIEWTYPE_HANGAME, "");
    } else {
      setItemList(VIEWTYPE_HANGAME, "");
    }
  }
}

function cmdCloseLimitItemDiv() {
  if (typeof top.divLimitItem == "object") {
    top.divLimitItem.style.display = "none";
  }
}

function cmdOpenLimitItemDiv() {
  if (typeof top.divLimitItem == "object") {
    top.divLimitItem.style.height = document.body.scrollHeight;
    top.divLimitItem.style.display = "inline";
  }
}
//------for avitem expire end------//

function openAvatarChange() {
  if (getCookie(CK_MEMBERID).length == 0) {
    alert("»ÝOCµÄ¢È¢½ßAAo^[ÌÏXðs¦Ü¹ñB");
    return;
  }
  top.location.href =
    "https://" + __host_prefix + "myinfo.hangame.co.jp/avatar/index.nhn";
}

function isCoolAvatarId(avatarID) {
  if (typeof avatarID == "undefined") {
    avatarID = getCookie(CK_AVATARID);
  }
  if (avatarID.length != 0 && avatarID.substring(0, 1) == "2") {
    return true;
  }
  return false;
}

function isPureAvatarId(avatarID) {
  return isCoolAvatarId(avatarID) ? false : true;
}

function hangameRegist(kind, nextUrl) {
  var locationUrl = getMemberHostForSecure() + "/registration/index.nhn";

  if (typeof kind == "undefined") {
    kind = "";
  }
  locationUrl += "?kind=" + kind;

  if (typeof nextUrl != "undefined" && nextUrl != "") {
    locationUrl += "&nxtUrl=" + nextUrl;
  }

  top.location.href = locationUrl;
}

function gotoLogin(gotourl) {
  var nexturl;
  if (gotourl == undefined || gotourl == null || gotourl == "") {
    nexturl = document.URL;
  } else {
    nexturl = gotourl;
  }

  var inputElement = document.createElement("input");
  inputElement.setAttribute("type", "hidden");
  inputElement.setAttribute("name", "nexturl");
  inputElement.setAttribute("id", "nexturl");
  inputElement.setAttribute("value", nexturl);

  var formElement = document.createElement("form");
  formElement.setAttribute("action", __urlLogin.replace("//dev-", "//alpha-"));
  formElement.setAttribute("name", "gotologinform");
  formElement.setAttribute("id", "gotologinform");
  formElement.setAttribute("method", "GET");

  formElement.appendChild(inputElement);
  document.body.appendChild(formElement);

  document.getElementById("gotologinform").submit();
}

// Enable alpha PNG for IE6.
if (
  navigator.userAgent.match(/MSIE 6/i) &&
  typeof DD_belatedPNG == "undefined"
) {
  var DD_belatedPNG = {
    ns: "DD_belatedPNG",
    imgSize: {},
    delay: 10,
    nodesFixed: 0,
    createVmlNameSpace: function () {
      if (document.namespaces && !document.namespaces[this.ns]) {
        document.namespaces.add(this.ns, "urn:schemas-microsoft-com:vml");
      }
    },
    createVmlStyleSheet: function () {
      var b, a;
      b = document.createElement("style");
      b.setAttribute("media", "screen");
      document.documentElement.firstChild.insertBefore(
        b,
        document.documentElement.firstChild.firstChild
      );
      if (b.styleSheet) {
        b = b.styleSheet;
        b.addRule(this.ns + "\\:*", "{behavior:url(#default#VML)}");
        b.addRule(this.ns + "\\:shape", "position:absolute;");
        b.addRule(
          "img." + this.ns + "_sizeFinder",
          "behavior:none; border:none; position:absolute; z-index:-1; top:-10000px;"
        );
        this.screenStyleSheet = b;
        a = document.createElement("style");
        a.setAttribute("media", "print");
        document.documentElement.firstChild.insertBefore(
          a,
          document.documentElement.firstChild.firstChild
        );
        a = a.styleSheet;
        a.addRule(this.ns + "\\:*", "{display: none !important;}");
        a.addRule(
          "img." + this.ns + "_sizeFinder",
          "{display: none !important;}"
        );
      }
    },
    readPropertyChange: function () {
      var b, c, a;
      b = event.srcElement;
      if (!b.vmlInitiated) {
        return;
      }
      if (
        event.propertyName.search("background") != -1 ||
        event.propertyName.search("border") != -1
      ) {
        DD_belatedPNG.applyVML(b);
      }
      if (event.propertyName == "style.display") {
        c = b.currentStyle.display == "none" ? "none" : "block";
        for (a in b.vml) {
          if (b.vml.hasOwnProperty(a)) {
            b.vml[a].shape.style.display = c;
          }
        }
      }
      if (event.propertyName.search("filter") != -1) {
        DD_belatedPNG.vmlOpacity(b);
      }
    },
    vmlOpacity: function (b) {
      if (b.currentStyle.filter.search("lpha") != -1) {
        var a = b.currentStyle.filter;
        a =
          parseInt(
            a.substring(a.lastIndexOf("=") + 1, a.lastIndexOf(")")),
            10
          ) / 100;
        b.vml.color.shape.style.filter = b.currentStyle.filter;
        b.vml.image.fill.opacity = a;
      }
    },
    handlePseudoHover: function (a) {
      setTimeout(function () {
        DD_belatedPNG.applyVML(a);
      }, 1);
    },
    fix: function (a) {
      if (this.screenStyleSheet) {
        var c, b;
        c = a.split(",");
        for (b = 0; b < c.length; b++) {
          this.screenStyleSheet.addRule(
            c[b],
            "behavior:expression(DD_belatedPNG.fixPng(this))"
          );
        }
      }
    },
    applyVML: function (a) {
      a.runtimeStyle.cssText = "";
      this.vmlFill(a);
      this.vmlOffsets(a);
      this.vmlOpacity(a);
      if (a.isImg) {
        this.copyImageBorders(a);
      }
    },
    attachHandlers: function (i) {
      var d, c, g, e, b, f;
      d = this;
      c = { resize: "vmlOffsets", move: "vmlOffsets" };
      if (i.nodeName == "A") {
        e = {
          mouseleave: "handlePseudoHover",
          mouseenter: "handlePseudoHover",
          focus: "handlePseudoHover",
          blur: "handlePseudoHover",
        };
        for (b in e) {
          if (e.hasOwnProperty(b)) {
            c[b] = e[b];
          }
        }
      }
      for (f in c) {
        if (c.hasOwnProperty(f)) {
          g = function () {
            d[c[f]](i);
          };
          i.attachEvent("on" + f, g);
        }
      }
      i.attachEvent("onpropertychange", this.readPropertyChange);
    },
    giveLayout: function (a) {
      a.style.zoom = 1;
      if (a.currentStyle.position == "static") {
        a.style.position = "relative";
      }
    },
    copyImageBorders: function (b) {
      var c, a;
      c = { borderStyle: true, borderWidth: true, borderColor: true };
      for (a in c) {
        if (c.hasOwnProperty(a)) {
          b.vml.color.shape.style[a] = b.currentStyle[a];
        }
      }
    },
    vmlFill: function (e) {
      if (!e.currentStyle) {
        return;
      } else {
        var d, f, g, b, a, c;
        d = e.currentStyle;
      }
      for (b in e.vml) {
        if (e.vml.hasOwnProperty(b)) {
          e.vml[b].shape.style.zIndex = d.zIndex;
        }
      }
      e.runtimeStyle.backgroundColor = "";
      e.runtimeStyle.backgroundImage = "";
      f = true;
      if (d.backgroundImage != "none" || e.isImg) {
        if (!e.isImg) {
          e.vmlBg = d.backgroundImage;
          e.vmlBg = e.vmlBg.substr(5, e.vmlBg.lastIndexOf('")') - 5);
        } else {
          e.vmlBg = e.src;
        }
        g = this;
        if (!g.imgSize[e.vmlBg]) {
          a = document.createElement("img");
          g.imgSize[e.vmlBg] = a;
          a.className = g.ns + "_sizeFinder";
          a.runtimeStyle.cssText =
            "behavior:none; position:absolute; left:-10000px; top:-10000px; border:none; margin:0; padding:0;";
          c = function () {
            this.width = this.offsetWidth;
            this.height = this.offsetHeight;
            g.vmlOffsets(e);
          };
          a.attachEvent("onload", c);
          a.src = e.vmlBg;
          a.removeAttribute("width");
          a.removeAttribute("height");
          document.body.insertBefore(a, document.body.firstChild);
        }
        e.vml.image.fill.src = e.vmlBg;
        f = false;
      }
      e.vml.image.fill.on = !f;
      e.vml.image.fill.color = "none";
      e.vml.color.shape.style.backgroundColor = d.backgroundColor;
      e.runtimeStyle.backgroundImage = "none";
      e.runtimeStyle.backgroundColor = "transparent";
    },
    vmlOffsets: function (d) {
      var h, n, a, e, g, m, f, l, j, i, k;
      h = d.currentStyle;
      n = {
        W: d.clientWidth + 1,
        H: d.clientHeight + 1,
        w: this.imgSize[d.vmlBg].width,
        h: this.imgSize[d.vmlBg].height,
        L: d.offsetLeft,
        T: d.offsetTop,
        bLW: d.clientLeft,
        bTW: d.clientTop,
      };
      a = n.L + n.bLW == 1 ? 1 : 0;
      e = function (b, p, q, c, s, u) {
        b.coordsize = c + "," + s;
        b.coordorigin = u + "," + u;
        b.path = "m0,0l" + c + ",0l" + c + "," + s + "l0," + s + " xe";
        b.style.width = c + "px";
        b.style.height = s + "px";
        b.style.left = p + "px";
        b.style.top = q + "px";
      };
      e(
        d.vml.color.shape,
        n.L + (d.isImg ? 0 : n.bLW),
        n.T + (d.isImg ? 0 : n.bTW),
        n.W - 1,
        n.H - 1,
        0
      );
      e(d.vml.image.shape, n.L + n.bLW, n.T + n.bTW, n.W, n.H, 1);
      g = { X: 0, Y: 0 };
      if (d.isImg) {
        g.X = parseInt(h.paddingLeft, 10) + 1;
        g.Y = parseInt(h.paddingTop, 10) + 1;
      } else {
        for (j in g) {
          if (g.hasOwnProperty(j)) {
            this.figurePercentage(g, n, j, h["backgroundPosition" + j]);
          }
        }
      }
      d.vml.image.fill.position = g.X / n.W + "," + g.Y / n.H;
      m = h.backgroundRepeat;
      f = { T: 1, R: n.W + a, B: n.H, L: 1 + a };
      l = { X: { b1: "L", b2: "R", d: "W" }, Y: { b1: "T", b2: "B", d: "H" } };
      if (m != "repeat" || d.isImg) {
        i = { T: g.Y, R: g.X + n.w, B: g.Y + n.h, L: g.X };
        if (m.search("repeat-") != -1) {
          k = m.split("repeat-")[1].toUpperCase();
          i[l[k].b1] = 1;
          i[l[k].b2] = n[l[k].d];
        }
        if (i.B > n.H) {
          i.B = n.H;
        }
        d.vml.image.shape.style.clip =
          "rect(" +
          i.T +
          "px " +
          (i.R + a) +
          "px " +
          i.B +
          "px " +
          (i.L + a) +
          "px)";
      } else {
        d.vml.image.shape.style.clip =
          "rect(" + f.T + "px " + f.R + "px " + f.B + "px " + f.L + "px)";
      }
    },
    figurePercentage: function (d, c, f, a) {
      var b, e;
      e = true;
      b = f == "X";
      switch (a) {
        case "left":
        case "top":
          d[f] = 0;
          break;
        case "center":
          d[f] = 0.5;
          break;
        case "right":
        case "bottom":
          d[f] = 1;
          break;
        default:
          if (a.search("%") != -1) {
            d[f] = parseInt(a, 10) / 100;
          } else {
            e = false;
          }
      }
      d[f] = Math.ceil(
        e ? c[b ? "W" : "H"] * d[f] - c[b ? "w" : "h"] * d[f] : parseInt(a, 10)
      );
      if (d[f] % 2 === 0) {
        d[f]++;
      }
      return d[f];
    },
    fixPng: function (c) {
      c.style.behavior = "none";
      var g, b, f, a, d;
      if (c.nodeName == "BODY" || c.nodeName == "TD" || c.nodeName == "TR") {
        return;
      }
      c.isImg = false;
      if (c.nodeName == "IMG") {
        if (c.src.toLowerCase().search(/\.png$/) != -1) {
          c.isImg = true;
          c.style.visibility = "hidden";
        } else {
          return;
        }
      } else {
        if (c.currentStyle.backgroundImage.toLowerCase().search(".png") == -1) {
          return;
        }
      }
      g = DD_belatedPNG;
      c.vml = { color: {}, image: {} };
      b = { shape: {}, fill: {} };
      for (a in c.vml) {
        if (c.vml.hasOwnProperty(a)) {
          for (d in b) {
            if (b.hasOwnProperty(d)) {
              f = g.ns + ":" + d;
              c.vml[a][d] = document.createElement(f);
            }
          }
          c.vml[a].shape.stroked = false;
          c.vml[a].shape.appendChild(c.vml[a].fill);
          c.parentNode.insertBefore(c.vml[a].shape, c);
        }
      }
      c.vml.image.shape.fillcolor = "none";
      c.vml.image.fill.type = "tile";
      c.vml.color.fill.on = false;
      g.attachHandlers(c);
      g.giveLayout(c);
      g.giveLayout(c.offsetParent);
      c.vmlInitiated = true;
      g.applyVML(c);
      // Fixed to enable alt tags.
      if (c.isImg) {
        cW = c.width;
        cH = c.height;
        c.src = "http://images.hangame.co.jp/hangame/common/spacer.gif";
        c.style.visibility = "visible";
        c.style.width = cW;
        c.style.height = cH;
      }
    },
  };
  try {
    document.execCommand("BackgroundImageCache", false, true);
  } catch (r) {}
  DD_belatedPNG.createVmlNameSpace();
  DD_belatedPNG.createVmlStyleSheet();

  DD_belatedPNG.fix(".png32");
}

(function () {
  try {
    var sCookieC = "cui_c";
    var sCookieS = "cui_s";
    var cookieC = getStrCookie(sCookieC);
    var cookieS = getStrCookie(sCookieS);

    if (cookieS == "" || cookieS == null || typeof cookieS == "undefined")
      return;
    if (cookieC == "" || cookieC == null || typeof cookieC == "undefined")
      return;

    if (cookieC == cookieS) {
      removeCookieForCui(sCookieS);
      removeCookieForCui(sCookieC);
      setStrCookieForCui("cui_m", getCookie(CK_MEMBERID));
    } else {
      var nxturl = encodeURIComponent(location.href);
      top.location.href =
        "https://" +
        __host_prefix +
        "id.hangame.co.jp/exlogout.nhn?nxturl=" +
        nxturl;
    }
  } catch (e) {}
})();

(function () {
  try {
    var rcmipCookie = getStrCookie("rcmip");
    var lUserID = getStrCookie("cui_m");

    if (
      rcmipCookie == "" ||
      rcmipCookie == null ||
      typeof rcmipCookie == "undefined"
    )
      return;
    if (lUserID == "" || lUserID == null || typeof lUserID == "undefined")
      return;

    var rUserID = rcmipCookie.split("%2C")[1].replace(/\"/g, ""); // for rcmip cookie created by jetty
    if (lUserID != rUserID) {
      var nxturl = encodeURIComponent(location.href);
      top.location.href =
        "https://" +
        __host_prefix +
        "id.hangame.co.jp/rcmiplog.nhn?nxturl=" +
        nxturl +
        "&luserid=" +
        lUserID +
        "&ruserid=" +
        rUserID;
    }
  } catch (e) {}
})();

function checkRcmipCookie() {
  try {
    var rcmipCookie = getStrCookie("rcmip");
    var lUserID = getStrCookie("cui_m");

    if (
      rcmipCookie == "" ||
      rcmipCookie == null ||
      typeof rcmipCookie == "undefined"
    )
      return;
    if (lUserID == "" || lUserID == null || typeof lUserID == "undefined")
      return;

    var rUserID = rcmipCookie.split("%2C")[1].replace(/\"/g, ""); // for rcmip cookie created by jetty
    if (lUserID != rUserID) {
      var nxturl = encodeURIComponent(location.href);
      document.write(
        '<iframe width="0" height="0" border="0" frameborder="0" src="https://' +
          __host_prefix +
          "id.hangame.co.jp/rcmiplog2.nhn?nxturl=" +
          nxturl +
          "&luserid=" +
          lUserID +
          "&ruserid=" +
          rUserID +
          '"></iframe>'
      );
      //top.location.href = 'https://' +  __host_prefix  + 'id.hangame.co.jp/rcmiplog.nhn?nxturl=' + nxturl + '&luserid=' + lUserID + '&ruserid=' + rUserID;
    }
  } catch (e) {}
}

function checkAutologinCookie() {
  try {
    var autologin = getStrCookie("alk");
    var chka1 = getStrCookie("cui_a1");
    var chka2 = getStrCookie("cui_a2");

    if (autologin == null || autologin == "") return;
    if (chka1 == null || chka1 == "") {
      setStrCookieForCui("cui_a1", createChecksum(autologin), 30);
      removeCookieForCui("cui_a2");
      return;
    }
    if (chka2 == null || chka2 == "") {
      return;
    }

    // exist all cookie
    if (chka1 == chka2) {
      removeCookieForCui("cui_a2");
      setStrCookieForCui("cui_a1", createChecksum(autologin), 30);
    } else {
      removeCookieForCui("cui_a1");
      removeCookieForCui("cui_a2");
      var nxturl = encodeURIComponent(location.href);
      top.location.href =
        "https://" +
        __host_prefix +
        "id.hangame.co.jp/exlogout.nhn?type=autologin&nxturl=" +
        nxturl +
        "&alk=" +
        autologin +
        "&a1=" +
        chka1 +
        "&a2=" +
        chka2;
    }
  } catch (e) {}
}
checkAutologinCookie();

function createChecksum(str) {
  var checksum = 0;
  for (var i = 0; i < str.length; i++) {
    checksum += str.charCodeAt(i);
  }
  return checksum;
}

function removeCookieForCui(sName) {
  var exDate = new Date();
  exDate.setYear(exDate.getYear() - 1);

  document.cookie =
    sName +
    "=; expires=" +
    exDate.toGMTString() +
    "; domain=" +
    getFixDomain() +
    "; Path=/";
}

document.write(
  "<scr" +
    'ipt type="text/javascr' +
    'ipt" src="' +
    __COMMON_JS_PATH +
    'scouter.js"></scr' +
    "ipt>"
);

//2016/05/19
//window.showModalDialog override
//aution:mymenu add
//asondemall:mymenu add
window.showModalDialog =
  window.showModalDialog ||
  function (url, arg) {
    url = url || "";
    arg = arg || null;

    if (document.getElementById("js_myMenuAdd")) {
      var js_mymenuAddId = document.getElementById("js_myMenuAdd");
      js_mymenuAddId.parentNode.removeChild(js_mymenuAddId);
    }

    var iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = url;
    iframe.id = "js_myMenuAdd";
    document.body.appendChild(iframe);
  };

/*
page: http://www.hangame.co.jp/
url: http://static.hangame.co.jp/js/common.js?r=201604
*/
