var NS4;
var IE4;
var sUserAgent = navigator.userAgent;
var isOpera = sUserAgent.indexOf("Opera") > -1;
var isIE =
  sUserAgent.indexOf("compatible") > -1 &&
  sUserAgent.indexOf("MSIE") > -1 &&
  !isOpera;
//ie ¹öÀü È®ÀÎ
function getIEVersion() {
  var rv = -1;
  if (navigator.appName == "Microsoft Internet Explorer") {
    var re = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
    if (re.exec(sUserAgent) != null) rv = parseFloat(RegExp.$1);
  }
  return rv;
}

if (isIE) {
  IE4 = true;
  NS4 = false;
} else {
  IE4 = false;
  NS4 = true;
}
var isWin = navigator.appVersion.indexOf("Win") != -1;

function number_format(num) {
  var num_str = num.toString();
  var result = "";
  for (var i = 0; i < num_str.length; i++) {
    var tmp = num_str.length - (i + 1);
    if (i % 3 == 0 && i != 0) result = "," + result;
    result = num_str.charAt(tmp) + result;
  }
  return result;
}

function resizeIframe(name, userHtmlScroll) {
  if (name == null || name == "") {
    name = "cafe_main";
  }

  try {
    var oTarget;

    if (isIE && getIEVersion() <= 7) {
      var oFrame = document.getElementById(name);

      var oFrameHtml = window.frames[name].document.getElementsByTagName(
        "HTML"
      )[0];
      var oFrameBody = window.frames[name].document.getElementsByTagName(
        "BODY"
      )[0];

      //IE5.5¿¡¼­´Â htmlÀÇ scrollHeight °ªÀÌ ´Ù¸£´Ù.
      if (userHtmlScroll && !$Agent().IE55) oTarget = oFrameHtml;
      else oTarget = oFrameBody;

      oFrame.style.width = oTarget.scrollWidth + "px";
      oFrame.style.height = oTarget.scrollHeight + "px";
    } else {
      var oBody = document.getElementById(name).contentDocument.documentElement;
      var oIFrame = document.getElementById(name);

      var frmWidth = oBody.scrollWidth;
      var frmHeight = oBody.scrollHeight;

      // IE8À» À§ÇÑ ÁöÀúºÐÇÑ ÄÚµå
      if (
        isIE &&
        getIEVersion() == 8 &&
        (frmHeight == parseInt(oIFrame.style.height) ||
          !parseInt(oIFrame.style.height) ||
          frmHeight == 0)
      ) {
        var s = oBody
          .getElementsByTagName("BODY")[0]
          .appendChild(document.createElement("DIV"));
        s.style.clear = "both";
        s.innerHTML = "";
        s.innerHTML = "";
        var nHeight = s.offsetTop;
        s.parentNode.removeChild(s);
        if (nHeight > 0) frmHeight = nHeight;
      }

      if (applyMinSize) {
        if (frmMinWidth > -1) frmWidth = Math.max(frmWidth, frmMinWidth);
        if (frmMinHeight > -1) frmHeight = Math.max(frmHeight, frmMinHeight);
      }
      if (applyMaxSize) {
        if (frmMaxWidth > -1) frmWidth = Math.min(frmWidth, frmMaxWidth);
        if (frmMaxHeight > -1) frmHeight = Math.min(frmHeight, frmMaxHeight);
      }

      oIFrame.style.height = frmHeight + "px";
      oIFrame.style.width = frmWidth + "px";
    }
  } catch (e) {}
}

function goClub(url) {
  if (url.trim()) window.top.location.replace(url);
}

function Error_Login() {
  alert("·Î±×ÀÎ ÈÄ ÀÌ¿ëÇØÁÖ¼¼¿ä!");
}

function Error_Right() {
  alert("È¸¿øµî±Þ ¹®Á¦·Î ±ÇÇÑÀÌ ¾ø½À´Ï´Ù. »çÀÌÆ® ¿î¿µÀÚ¿¡°Ô ¹®ÀÇÇÏ¼¼¿ä!");
}

function Error_Reply() {
  alert("°øÁö±Û¿¡´Â ´äº¯±ÛÀ» ÀÛ¼ºÇÒ ¼ö ¾ø½À´Ï´Ù");
}

function point_Give(userid) {
  var width = 420;
  var height = 340;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var modaless = window.open(
    "/member/point_give.php?todo=userpoint_give_form_popup&userid=" + userid,
    "",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=no"
  );
  modaless.focus();
}

function point_Give_Club(clubid) {
  var sleft = (screen.width - 400) / 2;
  var stop = (screen.height - 300) / 2 - 20;
  var modaless = window.open(
    "/club/open/etc.php?clubid=" + clubid + "&todo=point_Give_Club",
    "",
    "toolbar=no,status=no,width=400,height=300,top=" + stop + ",left=" + sleft
  );
  modaless.focus();
}

function clubPublicPopup() {
  var sleft = (screen.width - 480) / 2;
  var stop = (screen.height - 476) / 2 - 20;
  var modaless = window.open(
    "/club/club_public_popup.php",
    "cpublic",
    "toolbar=no,status=no,width=480,height=476,top=" + stop + ",left=" + sleft
  );
  modaless.focus();
}

// ¾ÆÀÌµð / ºñ¹Ð¹øÈ£ Ã£±â
function searchMember(pw) {
  var width = 500;
  var height = 350;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  if (pw)
    var modaless = window.open(
      "/join/search.php?todo=find_password",
      "search",
      "width=" +
        width +
        ",height=" +
        height +
        ",top=" +
        wintop +
        ",left=" +
        winleft +
        ",scrollbars=no"
    );
  else
    var modaless = window.open(
      "/join/search.php",
      "search",
      "width=" +
        width +
        ",height=" +
        height +
        ",top=" +
        wintop +
        ",left=" +
        winleft +
        ",scrollbars=no"
    );
  modaless.focus();
}

function activexPopup() {
  var width = 500;
  var height = 450;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var modaless = window.open(
    "/append/application/passive.php",
    "passive",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=no"
  );
  modaless.focus();
}

// ·Î±×ÀÎ ÆË¾÷ Ã¢
function loginPopup(redirect, frm1, dom1) {
  var width = 470;
  var height = 400;

  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  if (redirect)
    var query_redirect = "&redirect=" + encodeURIComponent(redirect);
  else var query_redirect = "";

  var modaless = window.open(
    "/login/?frm1=" + frm1 + "&dom1=" + dom1 + "&todo=popup" + query_redirect,
    "loginpopup",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=no"
  );
  modaless.focus();
}

function memo_write(userid, opt) {
  var opt = opt;
  if (opt == "filebox") document.domain = "tple.co.kr";

  var width = 600;
  var height = 600;
  var winleft = (screen.width - width) / 2;
  //var wintop = (screen.height - height) / 2 -20;
  var wintop = 0;

  var clubIframe = parent.document.getElementById("club_body");
  if (clubIframe != null) opt = "club";

  var url1 = "/memo/?todo=send_form";
  if (userid) url1 += "&recv_userid=" + userid;

  if (opt == "club")
    url1 += "&club_idx=" + parent.document.getElementById("club_idx").value;

  var modaless = window.open(
    url1,
    "memo",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=no"
  );
  modaless.focus();
}

function friend_insert(userid, diff_domain) {
  if (diff_domain == 1) document.domain = "tple.co.kr";
  var width = 400;
  var height = 300;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;

  var club_idx_input = parent.document.getElementById("club_idx");

  if (club_idx_input != null) {
    var modaless = window.open(
      "/friend/?todo=addForm&nickname=" +
        userid +
        "&club_idx=" +
        club_idx_input.value,
      "friend",
      "width=" +
        width +
        ",height=" +
        height +
        ",top=" +
        wintop +
        ",left=" +
        winleft +
        ",scrollbars=no"
    );
  } else {
    var modaless = window.open(
      "/friend/?todo=addForm&nickname=" + userid,
      "friend",
      "width=" +
        width +
        ",height=" +
        height +
        ",top=" +
        wintop +
        ",left=" +
        winleft +
        ",scrollbars=no"
    );
  }
  modaless.focus();
}

function ClubstoragePopup(type, is_club) {
  var width = 818;
  var height = 750;
  var width_start = 818;
  var height_start = 750;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var modaless = window.open(
    type,
    "storage_form",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=yes"
  );
  modaless.focus();
}

function tvViewPopup(idx) {
  var width = 818;
  var height = 750;
  var width_start = 818;
  var height_start = 750;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var modaless = window.open(
    "http://tv.tple.co.kr/contents/list.php?todo=view&idx=" + idx,
    "tvViewPopup",
    "width=" +
      width_start +
      ",height=" +
      height_start +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=yes"
  );
  modaless.focus();
}

function storagePopup(source) {
  var w = 800;
  var h = 820;
  var width_start = 800;
  var height_start = 750;
  //var winleft = (screen.width - width) / 2;
  //var wintop = (screen.height - height) / 2 -20;

  var winleft = 10;
  var wintop = 10;

  var modaless = window.open(
    "/storage/storage.php?todo=form_write&source=" + source,
    "storage_form",
    "width=" +
      w +
      ",height=" +
      h +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=yes"
  );
  modaless.focus();
}

function FileboxstoragePopup(boxid) {
  var width = 818;
  var height = 750;
  var width_start = 818;
  var height_start = 750;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var modaless = window.open(
    "/filebox/pds.php?todo=form_write&boxid=" + boxid,
    "storage_form",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=yes"
  );
  modaless.focus();
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ÆÄÀÏ°øÀ¯, ÆÄÀÏ¹Ú½º, Å¬·´ °øÅë ÄÁÅÙÃ÷ºä ÆË¾÷ÆäÀÌÁö È£Ãâ
  todo, idx¸¦ »« ÆÄ¶ó¸ÞÅÍ
------------------------------------------------------------------------------------------------------------------------------------------*/
function WebViewPopup(source, idx, params) {
  var WindowHeight = window.screen.availHeight;

  //var w			= 1016;
  //var h			= parseInt(WindowHeight) - 100;
  //Ã¢»çÀÌÁî ¸®»çÀÌÁî ¾ÈÇØµµ µÇ°Ô Á¤È®ÇÑ »çÀÌÁî·Î ¿­¸®°Ô º¯°æ
  var w = 816;
  var h = window.screen.height;
  var w_start = 800;
  var h_start = 900;

  //var l			= (screen.width - w) / 2;
  //var t			= (screen.height - h) / 2 - 20;
  var l = 10;
  var t = 10;

  var page = "/storage/storage.php";
  var opt =
    "width=" +
    w +
    ", height=" +
    h +
    ", top=" +
    t +
    ", left=" +
    l +
    ", scrollbars=yes, status=yes";

  if (source == "S" || source == "M") {
    source = "W";
  }

  params = "?todo=view&source=" + source + "&idx=" + idx + params;

  // ÆÄÀÏ°øÀ¯ÀÏ ¶§ ÇöÀç ¿­°í ÀÖ´Â ¸®½ºÆ® È®ÀÎ¿ë
  if (source == "W") {
    if (document.getElementById("open_idx") != null) {
      var old_idx = document.getElementById("open_idx").value;

      // »õ·Î ¿ÀÇÂµÈ idx ÀúÀå
      document.getElementById("open_idx").value = idx;

      // ÀÌÀü ¹è°æ ¾ø¾Ö±â
      if (old_idx != "") {
        var tr_Obj = document.getElementById("tr_" + old_idx);
        tr_Obj.style.backgroundColor = "";
      }
    }
  }

  var modaless = window.open(page + params, "storage_view", opt);
  modaless.focus();
}
function WebViewPopupMusic(purchase_idx) {
  var WindowHeight = window.screen.availHeight;

  //var w			= 1016;
  //var h			= parseInt(WindowHeight) - 100;
  //Ã¢»çÀÌÁî ¸®»çÀÌÁî ¾ÈÇØµµ µÇ°Ô Á¤È®ÇÑ »çÀÌÁî·Î ¿­¸®°Ô º¯°æ
  var w = 816;
  var h = window.screen.height;
  var w_start = 800;
  var h_start = 900;

  //var l			= (screen.width - w) / 2;
  //var t			= (screen.height - h) / 2 - 20;
  var l = 10;
  var t = 10;

  var page = "/storage/storage.php";
  var opt =
    "width=" +
    w +
    ", height=" +
    h +
    ", top=" +
    t +
    ", left=" +
    l +
    ", scrollbars=yes, status=yes";

  var modaless = window.open(
    "/music/?todo=view&pidx=" + purchase_idx,
    "storage_view",
    opt
  );
  modaless.focus();
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ÆÄÀÏ°øÀ¯ ÆË¾÷ ºä
------------------------------------------------------------------------------------------------------------------------------------------*/
function storageViewPopup(idx, code, search_top_field, search_top_value) {
  /*
	var idx = idx;
	var width = 818;
	var height = 900;
	var width_start = 818;
	var height_start = 900;
	var winleft = (screen.width - width) / 2;
	var wintop = (screen.height - height) / 2 -20;
	var winleft=0;
	var wintop =0;
	//var window.document.body.clientHeight;
	var modaless = window.open("/storage/storage.php?todo=view&idx="+idx+"&code="+val1+"&search_top_field="+val2+"&search_top_value="+val3,"storage_view","width="+width_start+",height="+height_start+",top="+wintop+",left="+winleft+",scrollbars=yes");
	modaless.focus();
	*/

  var params =
    "&code=" +
    code +
    "&search_top_field=" +
    search_top_field +
    "&search_top_value=" +
    search_top_value;
  WebViewPopup("W", idx, params);
}
/*------------------------------------------------------------------------------------------------------------------------------------------
  ÆÄÀÏ¹Ú½º ÆË¾÷ ºä
------------------------------------------------------------------------------------------------------------------------------------------*/
function FileboxViewPopup(idx, box_idx, control_idx) {
  /*
	var idx = idx;
	var width = 818;
	var height = 900;
	var width_start = 818;
	var height_start = 900;
	var winleft = (screen.width - width) / 2;
	var wintop = (screen.height - height) / 2 -20;
	var modaless = window.open(type,"storage_view","width="+width_start+",height="+height_start+",top="+wintop+",left="+winleft+",scrollbars=yes");
	modaless.focus();
	*/

  var params = "&boxid=" + box_idx + "&control_idx=" + control_idx;
  PopupView("F", idx, params);
}
/*------------------------------------------------------------------------------------------------------------------------------------------
  Å¬·´ ÆË¾÷ ºä
------------------------------------------------------------------------------------------------------------------------------------------*/
function ClubViewPopup(idx, club_idx, club_id, control_idx) {
  /*
	var width = 818;
	var height = 750;
	var width_start = 818;
	var height_start = 750;
	var winleft = (screen.width - width) / 2;
	var wintop = (screen.height - height) / 2 -20;
	var modaless = window.open(type,"storage_form","width="+width+",height="+height+",top="+wintop+",left="+winleft+",scrollbars=yes");
	modaless.focus();
	*/

  var params =
    "&clubid=" + club_id + "&clubidx=" + club_idx + "&bbs_idx=" + control_idx;
  PopupView("C", idx, params);
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ÄÁÅÙÃ÷ µî·Ï ÆË¾÷Ã¢
------------------------------------------------------------------------------------------------------------------------------------------*/
function WebStoragePopup(source, params) {
  var w = 818;
  var h = 860;

  //var l			= (screen.width - w) / 2;
  //var t			= (screen.height - h) / 2 - 20;
  var l = 10;
  var t = 10;

  var page = "/storage/storage.php";
  var opt =
    "width=" +
    w +
    ", height=" +
    h +
    ", top=" +
    t +
    ", left=" +
    l +
    ", scrollbars=yes, status=yes";

  params = "?todo=form_write&source=" + source + params;

  var modaless = window.open(page + params, "storage_ins", opt);
  modaless.focus();
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ÄÁÅÙÃ÷ ¼öÁ¤ ÆË¾÷Ã¢
------------------------------------------------------------------------------------------------------------------------------------------*/
function WebStorageModifyPopup(source, idx, params) {
  var w = 818;
  var h = 860;

  //var l			= (screen.width - w) / 2;
  //var t			= (screen.height - h) / 2 - 20;
  var l = 10;
  var t = 10;

  var page = "/storage/storage.php";
  var opt =
    "width=" +
    w +
    ", height=" +
    h +
    ", top=" +
    t +
    ", left=" +
    l +
    ", scrollbars=yes, status=yes";

  params = "?todo=form_modify&source=" + source + "&idx=" + idx + params;

  location.href = page + params;
}

function requestPopup(idx) {
  WebStoragePopup("W", "&idx_request=" + idx);
}

function itemusePopup(loc) {
  var loc = loc;
  var width = 500;
  var height = 400;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var modaless = window.open(
    "/mypage/seller_item.php?todo=popup_use_form&loc=" + loc,
    "popup_item",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=no"
  );
  modaless.focus();
}

function itembuyPopup() {
  var idx = idx;
  var width = 500;
  var height = 580;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var modaless = window.open(
    "/mypage/seller_item.php?todo=popup_buy_form",
    "popup_item",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=no"
  );
  modaless.focus();
}

function HelpPopupSellerContents(todo) {
  var idx = idx;
  var todo = todo;
  var width = 708;
  var height = 580;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var modaless = window.open(
    "/mypage/seller_popupinfo.php?todo=" + todo,
    "popup_seller_info",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=yes"
  );
  modaless.focus();
}

function couponGiftPopup() {
  var width = 500;
  var height = 400;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var modaless = window.open(
    "/popup/mypage_gift.php?todo=mypage_gift",
    "mypage_gift",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=no"
  );
  modaless.focus();
}

function smsPopup() {
  var idx = idx;
  var width = 710;
  var height = 472;
  var width_start = 710;
  var height_start = 472;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var modaless = window.open(
    "/sms/sms_popup.php",
    "sms_popup",
    "width=" +
      width_start +
      ",height=" +
      height_start +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=no"
  );
  modaless.focus();
}

// ÆË¾÷Ã¢ ´Ý±â¸¦ À§ÇØ Àü¿ªÀ¸·Î ¼±¾ð
var modaless2;
function Searchnick(where) {
  var width = 450;
  var height = 450;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var where = where;
  modaless2 = window.open(
    "/popup/mypage_search_nick.php?todo=mypage_search_nick&where=" + where,
    "mypage_search_nick",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=no"
  );
  modaless2.focus();
}

function Searchuserid(where) {
  var width = 450;
  var height = 450;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var where = where;
  modaless2 = window.open(
    "/popup/mypage_search.php?todo=mypage_search&where=" + where,
    "mypage_search",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=no"
  );
  modaless2.focus();
}

function changePoint() {
  var width = 400;
  var height = 250;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var modaless = window.open(
    "/popup/mypage_point.php?todo=mypage_point",
    "mypage_point",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=no"
  );
  modaless.focus();
}

function changeCash() {
  var width = 500;
  var height = 650;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var modaless = window.open(
    "/popup/mypage_cash.php?todo=mypage_cash",
    "mypage_cash",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=no"
  );
  modaless.focus();
}
function changePointree() {
  var width = 500;
  var height = 500;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var modaless = window.open(
    "/popup/mypage_pointree.php?todo=mypage_pointree",
    "mypage_cash",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=no"
  );
  modaless.focus();
}
//¼ºÀÎÃ¼Å©ÆË¾÷
function adultPopup(where) {
  var wherer = where;
  var width = 500;
  var height = 400;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var modaless = window.open(
    "/popup/adult.php?where=" + wherer,
    "adultCheck",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=no"
  );
  modaless.focus();
}

//»õÃ¢
function openWin(url, target, w, h, s) {
  var winleft = (screen.width - w) / 2;
  var wintop = (screen.height - h) / 2 - 35;
  var its = window.open(
    url,
    target,
    "width=" +
      w +
      ",height=" +
      h +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ", scrollbars=" +
      s
  );
  its.focus();
}

// ¿ìÆí¹øÈ£ Ã£±â
function zipCodePopup() {
  var width = 430;
  var height = 300;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var modaless = window.open(
    "/popup/zipcode.php",
    "zipCode",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=yes"
  );
  modaless.focus();
}

// È¸¿ø Á¦ÀçÃ¢
function penalty_popup_div(userid) {
  memberInfoAdmin2new(userid, "panalty_new");
}

// È¸¿ø º¸±âÃ¢ °ü¸®ÀÚ¿ë
function userinfo_view_admin(userid) {
  memberInfoAdmin2new(userid);
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  °ü¸®ÀÚ¿ë È¸¿ø»ó¼¼º¸±âÃ¢
------------------------------------------------------------------------------------------------------------------------------------------*/
function memberInfoAdmin2new(userid, todo) {
  var url = "/access/member/member_pop.php?userid=" + userid;
  if (todo != null) {
    url += "&todo=" + todo;
  }

  OpenWindow_Center(url, "ADMIN_MEMBER_VIEW", 1218, 730, 0);
}

function memberInfoAdminnew(useridx, todo) {
  var width = 900;
  var height = 640;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var modaless = window.open(
    "/access/member/member.php?todo=form_edit&user_idx=" + useridx,
    "adminMemberInfo",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=yes,status=yes"
  );
  modaless.focus();

  /*
	var url													= "/access/member/member_pop.php?useridx=" + useridx;
	if(todo != null){
		url													+= "&todo=" + todo;
	}
	
	OpenWindow_Center(url, "ADMIN_MEMBER_VIEW", 1218, 730, 0);
*/
}

// ÀüÃ¼ Ã¼Å©
function chkAll(obj) {
  if (obj == null) {
    // Ã¼Å©¹Ú½º ¾øÀ»¶§
  } else if (obj.value == undefined) {
    // Ã¼Å©¹Ú½º°¡ 2°³ÀÌ»ó
    for (var i = 0; i < obj.length; i++) {
      obj[i].checked = true;
    }
  } else {
    // Ã¼Å©¹Ú½º ÇÏ³ªÀÏ¶§
    obj.checked = true;
  }
}

// Ã¼Å©ÇØÁ¦
function unChkAll(obj) {
  if (obj == null) {
    // Ã¼Å©¹Ú½º ¾øÀ»¶§
  } else if (obj.value == undefined) {
    // Ã¼Å©¹Ú½º°¡ 2°³ÀÌ»ó
    for (var i = 0; i < obj.length; i++) {
      obj[i].checked = false;
    }
  } else {
    // Ã¼Å©¹Ú½º ÇÏ³ªÀÏ¶§
    obj.checked = false;
  }
}

function club_userinfo(userid) {
  var width = 500;
  var height = 460;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var modaless = window.open(
    "/club/open/etc.php?todo=userinfo&clubid=" +
      parent.clubid +
      "&userid=" +
      userid,
    "mypage_point",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ",scrollbars=no"
  );
  modaless.focus();
}

document.write(
  '<div id="memberLayer" style="z-index:999;position:absolute;display:none;"></div>'
);

function memberLayerView(userid, usernick, e, t) {
  if (typeof document.all.memberLayer == "object") {
    if (t == "" || t == null) {
      t = "self";
    }

    var opt = null;
    var clubIframe = parent.document.getElementById("club_body");
    if (clubIframe != null) opt = "club";

    X = e.clientX + document.body.scrollLeft - 50;
    Y = e.clientY + document.body.scrollTop + 10;
    document.all.memberLayer.style.top = Y;
    document.all.memberLayer.style.left = X;

    var contents;
    contents =
      '<table width="120" border="0" cellspacing="1" cellpadding="1" bgcolor="#F6F6F6">';
    contents += "	<tr>";
    contents += '		<td bgcolor="#FFFFFF" valign="top">';
    contents +=
      '			<table width="100%" border="0" cellspacing="1" cellpadding="1" bgcolor="#D8D8D8">';
    contents += "				<tr>";
    contents += '					<td bgcolor="#FFFFFF" valign="top">';
    contents +=
      '						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="common_m_over">';
    if (opt == "club" && _club_member_level_ <= 3 && _club_member_level_ >= 1) {
      contents += "						<tr>";
      contents +=
        '							<td height="22" style="padding-left:6px;"><a href="javascript:club_userinfo(\'' +
        userid +
        "');\">È¸¿øÁ¤º¸</a></td>";
      contents += "						</tr>";
    }
    contents += "							<tr>";
    contents +=
      '								<td height="22" style="padding-left:6px;"><a href="javascript:memo_write(\'' +
      userid +
      "');\">ÂÊÁöº¸³»±â</a></td>";
    contents += "							</tr>";
    contents += "							<tr>";
    contents += '								<td height="1" bgcolor="#F5F5F5"></td>';
    contents += "							</tr>";
    contents += "							<tr>";
    contents +=
      '								<td height="22" style="padding-left:6px;"><a href="javascript:friend_insert(\'' +
      userid +
      "');\">Ä£±¸Ãß°¡</a></td>";
    contents += "							</tr>";
    contents += "							<tr>";
    contents += '								<td height="1" bgcolor="#F5F5F5"></td>';
    contents += "							</tr>";
    contents += "                           <tr>";
    contents +=
      '								<td height="22" style="padding-left:6px;"><a href="http://filebox.tple.co.kr/' +
      userid +
      '" target="_blank">ÆÄÀÏ¹Ú½º</a></td>';
    contents += "							</tr>";
    contents += "							<tr>";
    contents += '								<td height="1" bgcolor="#F5F5F5"></td>';
    contents += "							</tr>";
    contents += "                           <tr>";
    contents +=
      '								<td height="22" style="padding-left:6px;"><a href="#" onclick="' +
      t +
      ".location.href='/storage/storage.php?code=&search_top_field=srch_NICKNAME&search_top_value=" +
      usernick +
      "'\">ÆÇ¸ÅÀÚ ´Ù¸¥ÀÚ·á</a></td>";
    contents += "							</tr>";
    contents += "							<tr>";
    contents += '								<td height="1" bgcolor="#F5F5F5"></td>';
    contents += "							</tr>";
    contents += "						</table>";
    contents += "					</td>";
    contents += "				</tr>";
    contents += "			</table>";
    contents += "		</td>";
    contents += "	</tr>";
    contents += "</table>";

    document.all.memberLayer.innerHTML = contents;
    document.all.memberLayer.style.display = "";
  }
  return;
}

function memberLayerView_admin(userid, usernick, e, t) {
  if (typeof document.all.memberLayer == "object") {
    var opt;
    var clubIframe = parent.document.getElementById("club_body");
    if (clubIframe != null) opt = "club";

    X = e.clientX + document.body.scrollLeft - 50;
    Y = e.clientY + document.body.scrollTop + 10;
    document.all.memberLayer.style.top = Y;
    document.all.memberLayer.style.left = X;

    if (t == "" || t == null) {
      t = "self";
    }

    var contents;
    contents =
      '<table width="120" border="0" cellspacing="1" cellpadding="1" bgcolor="#F6F6F6">';
    contents += "	<tr>";
    contents += '		<td bgcolor="#FFFFFF" valign="top">';
    contents +=
      '			<table width="100%" border="0" cellspacing="1" cellpadding="1" bgcolor="#D8D8D8">';
    contents += "				<tr>";
    contents += '					<td bgcolor="#FFFFFF" valign="top">';
    contents +=
      '						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="common_m_over">';
    if (opt == "club") {
      contents += "						<tr>";
      contents +=
        '							<td height="22" style="padding-left:6px;"><a href="javascript:club_userinfo(\'' +
        userid +
        "');\">È¸¿øÁ¤º¸</a></td>";
      contents += "						</tr>";
    }
    contents += "							<tr>";
    contents +=
      '								<td height="22" style="padding-left:6px;"><a href="javascript:memo_write(\'' +
      userid +
      "');\">ÂÊÁöº¸³»±â</a></td>";
    contents += "							</tr>";
    contents += "							<tr>";
    contents += '								<td height="1" bgcolor="#F5F5F5"></td>';
    contents += "							</tr>";
    contents += "							<tr>";
    contents +=
      '								<td height="22" style="padding-left:6px;"><a href="javascript:friend_insert(\'' +
      userid +
      "');\">Ä£±¸Ãß°¡</a></td>";
    contents += "							</tr>";
    contents += "							<tr>";
    contents += '								<td height="1" bgcolor="#F5F5F5"></td>';
    contents += "							</tr>";
    contents += "							<tr>";
    contents +=
      '								<td height="22" style="padding-left:6px;"><a href="javascript:penalty_popup_div(\'' +
      userid +
      "');\">Á¦Àç°ü¸®</a></td>";
    contents += "							</tr>";
    contents += "							<tr>";
    contents += '								<td height="1" bgcolor="#F5F5F5"></td>';
    contents += "							</tr>";
    contents += "                           <tr>";
    contents += '								<td height="1" bgcolor="#F5F5F5"></td>';
    contents += "							</tr>";
    contents +=
      '								<td height="22" style="padding-left:6px;"><a href="http://filebox.tple.co.kr/' +
      userid +
      '" target="_blank">ÆÄÀÏ¹Ú½º</a></td>';
    contents += "							</tr>";
    contents += "							<tr>";
    contents += '								<td height="1" bgcolor="#F5F5F5"></td>';
    contents += "							</tr>";
    contents += "                           <tr>";
    contents +=
      '								<td height="22" style="padding-left:6px;"><a href="#" onclick="' +
      t +
      ".location.href='/storage/storage.php?code=&search_top_field=srch_NICKNAME&search_top_value=" +
      usernick +
      "'\">ÆÇ¸ÅÀÚ ´Ù¸¥ÀÚ·á</a></td>";
    contents += "							</tr>";
    contents += "                           <tr>";
    contents += '								<td height="1" bgcolor="#F5F5F5"></td>';
    contents += "							</tr>";
    contents +=
      '								<td height="22" style="padding-left:6px;"><a href="javascript:userinfo_view_admin(\'' +
      userid +
      "');\">È¸¿øÁ¤º¸</a></td>";
    contents += "							</tr>";
    contents += "						</table>";
    contents += "					</td>";
    contents += "				</tr>";
    contents += "			</table>";
    contents += "		</td>";
    contents += "	</tr>";
    contents += "</table>";

    document.all.memberLayer.innerHTML = contents;
    document.all.memberLayer.style.display = "";
  }
  return;
}

function memberLayerView_fbox(userid, usernick, e) {
  if (typeof document.all.memberLayer == "object") {
    //var clubIframe = parent.document.getElementById('club_body');

    X = e.clientX + document.body.scrollLeft - 50;
    Y = e.clientY + document.body.scrollTop + 10;
    document.all.memberLayer.style.top = Y;
    document.all.memberLayer.style.left = X;

    var contents;
    contents =
      '<table width="120" border="0" cellspacing="1" cellpadding="1" bgcolor="#F6F6F6">';
    contents += "	<tr>";
    contents += '		<td bgcolor="#FFFFFF" valign="top">';
    contents +=
      '			<table width="100%" border="0" cellspacing="1" cellpadding="1" bgcolor="#D8D8D8">';
    contents += "				<tr>";
    contents += '					<td bgcolor="#FFFFFF" valign="top">';
    contents +=
      '						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="common_m_over">';
    contents += "							<tr>";
    contents +=
      '								<td height="22" style="padding-left:6px;"><a href="javascript:memo_write(\'' +
      userid +
      "');\">ÂÊÁöº¸³»±â</a></td>";
    contents += "							</tr>";
    contents += "							<tr>";
    contents += '								<td height="1" bgcolor="#F5F5F5"></td>';
    contents += "							</tr>";
    contents += "							<tr>";
    contents +=
      '								<td height="22" style="padding-left:6px;"><a href="javascript:friend_insert(\'' +
      userid +
      "',1);\">Ä£±¸Ãß°¡</a></td>";
    contents += "							</tr>";
    contents += "							<tr>";
    contents += '								<td height="1" bgcolor="#F5F5F5"></td>';
    contents += "							</tr>";
    contents += "                           <tr>";
    contents += '								<td height="1" bgcolor="#F5F5F5"></td>';
    contents += "							</tr>";
    contents +=
      '								<td height="22" style="padding-left:6px;"><a href="http://filebox.tple.co.kr/' +
      userid +
      '" target="_blank">ÆÄÀÏ¹Ú½º</a></td>';
    contents += "							</tr>";
    contents += "						</table>";
    contents += "					</td>";
    contents += "				</tr>";
    contents += "			</table>";
    contents += "		</td>";
    contents += "	</tr>";
    contents += "</table>";

    document.all.memberLayer.innerHTML = contents;
    document.all.memberLayer.style.display = "";
  }
  return;
}

function memberLayerHidden() {
  if (
    typeof document.all.memberLayer == "object" &&
    document.all.memberLayer.style.display == ""
  )
    document.all.memberLayer.style.display = "none";

  if (document.all.appLayer) document.all.appLayer.style.display = "none";
}

//document.onmouseup = memberLayerHidden;

/*------------------------------------------------------------------------------------------------------------------------------------------
  ÆÄÀÏ¹Ú½º ¿­±â
------------------------------------------------------------------------------------------------------------------------------------------*/
function open_filebox(userid) {
  window.open("http://filebox.tple.co.kr/" + userid, userid);
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  È¸¿ø ·¹ÀÌ¾î º¸±â
  userid					: È¸¿ø¾ÆÀÌµð
  nickname					: È¸¿ø´Ð³×ÀÓ
  e							: event
  s							: source (C, F, W)
  p							: ºÎ¸ð
  a							: adminstrator
  clubid					: Å¬·´¾ÆÀÌµð
  clubadmin					: Å¬·´ °ü¸®ÀÚ¿©ºÎ
  flag_quiescence			: ÈÞ¸éÈ¸¿ø¿©ºÎ (1ÀÌ¸é ÈÞ¸éÈ¸¿ø)
  access_type				: Á¢±Ù±¸ºÐ(1:ÄÁÅÙÃ÷, 2:´ñ±Û, 3:¿äÃ»ÀÚ·á...)
  idx						: Á¢±ÙÇÏ°í ÀÖ´Â ¸®½ºÆ®ÀÇ idx
------------------------------------------------------------------------------------------------------------------------------------------*/
function Member_Layer(
  userid,
  nickname,
  e,
  s,
  p,
  a,
  clubid,
  clubadmin,
  flag_quiescence,
  access_type,
  idx
) {
  var Obj = document.all.memberLayer;
  if (Obj.style.display == "block") {
    Obj.style.display = "none";
    return;
  }

  if (p == "" || p == null) {
    p = "self";
  }

  var contents = "";

  contents +=
    '<table border="0" cellpadding="1" cellspacing="1" class="layer_table">';
  contents += "<tr>";
  contents += "	<th>" + nickname + "</th>";
  contents += "</tr>";
  contents += "<tr>";
  contents += '	<td bgcolor="#FFFFFF">';
  contents += '		<table border="0" cellpadding="0" cellspacing="0" width="100%">';

  if (flag_quiescence == "1") {
    contents += '		<tr align="center">';
    contents += '			<td class="items">ÈÞ¸éÈ¸¿øÀÔ´Ï´Ù.</td>';
    contents += "		</tr>";
  } else {
    if (a == "1") {
      contents +=
        "		<tr onmouseover=\"this.className='over'\" onmouseout=\"this.className=''\" onclick=\"userinfo_view_admin('" +
        userid +
        '\')" style="cursor:pointer;">';
      contents += '			<td class="items">È¸¿øÁ¤º¸</td>';
      contents += "		</tr>";

      contents +=
        "		<tr onmouseover=\"this.className='over'\" onmouseout=\"this.className=''\" onclick=\"penalty_popup_div('" +
        userid +
        '\')" style="cursor:pointer;">';
      contents += '			<td class="items">Á¦Àç°ü¸®</td>';
      contents += "		</tr>";

      contents +=
        "		<tr onmouseover=\"this.className='over'\" onmouseout=\"this.className=''\" onclick=\"ad_penalty('" +
        userid +
        "', '" +
        s +
        "', '" +
        access_type +
        "', '" +
        idx +
        '\')" style="cursor:pointer;">';
      contents += '			<td class="items" style="color:#FF0000;">±¤°íÁ¦Àç</td>';
      contents += "		</tr>";
    }

    if (s == "C" && (clubadmin == "1" || a == "1")) {
      contents +=
        "		<tr onmouseover=\"this.className='over'\" onmouseout=\"this.className=''\" onclick=\"club_userpop('" +
        clubid +
        "', '" +
        userid +
        '\')" style="cursor:pointer;">';
      contents += '			<td class="items">Å¬·´È¸¿øÁ¤º¸</td>';
      contents += "		</tr>";
    }

    contents +=
      "		<tr onmouseover=\"this.className='over'\" onmouseout=\"this.className=''\" onclick=\"memo_write('" +
      userid +
      '\')" style="cursor:pointer;">';
    contents += '			<td class="items">ÂÊÁöº¸³»±â</td>';
    contents += "		</tr>";

    if (s != "F") {
      contents +=
        "		<tr onmouseover=\"this.className='over'\" onmouseout=\"this.className=''\" onclick=\"open_filebox('" +
        userid +
        '\')" style="cursor:pointer;">';
      contents += '			<td class="items">ÆÄÀÏ¹Ú½º</td>';
      contents += "		</tr>";
    }

    if (s == "W") {
      contents +=
        '		<tr onmouseover="this.className=\'over\'" onmouseout="this.className=\'\'" onclick="' +
        p +
        ".location.href='/storage/storage.php?code=&search_top_field=srch_NICKNAME&search_top_value=" +
        nickname +
        '\'" style="cursor:pointer;">';
      contents += '			<td class="items">ÆÇ¸ÅÀÚ ´Ù¸¥ÀÚ·á</td>';
      contents += "		</tr>";
    }

    contents +=
      "		<tr onmouseover=\"this.className='over'\" onmouseout=\"this.className=''\" onclick=\"friend_insert('" +
      userid +
      '\')" style="cursor:pointer;">';
    contents += '			<td class="items_bottom">Ä£±¸Ãß°¡</td>';
    contents += "		</tr>";
  }

  contents += "		</table>";
  contents += "	</td>";
  contents += "</tr>";
  contents += "</table>";

  Obj.style.top = e.clientY + document.body.scrollTop + 15;
  Obj.style.left = e.clientX + document.body.scrollLeft - 50;

  //if(s == "C" || s == "F"){
  Obj.style.position = "absolute";
  //}
  Obj.innerHTML = contents;
  Obj.style.display = "";
}

function ad_penalty(userid, source, ad_type, idx) {
  var Msg = "";

  Msg += "ÇöÀç È¸¿øÀ» ±¤°íÁ¦ÀçÇÏ½Ã°Ú½À´Ï±î?";
  Msg += "\n\n[ Ã³ ¸® ³» ¿ë ]";
  Msg += "\n1. È¸¿ø ¾ÆÀÌµð¸¦ ±¤°í ¾ÆÀÌµð¿¡ Ãß°¡";
  Msg += "\n2. µî·Ï IP¸¦ ±¤°í IP·Î±×¿¡ Ãß°¡";
  Msg += "\n3. È¸¿øÀÌ µî·ÏÇÑ ¸ðµç ÄÁÅÙÃ÷¸¦ º¸°üÇÔÀ¸·Î ÀÌµ¿";
  Msg += "\n4. È¸¿øÀÌ µî·ÏÇÑ ´ñ±Û ¸ðµÎ »èÁ¦";
  Msg += "\n5. È¸¿øÀÌ µî·ÏÇÑ ¿äÃ»ÀÚ·á ¸ðµÎ »èÁ¦";
  Msg += "\n6. ¾÷·Îµå ½Ã ÀÚµ¿À¸·Î °ü»óÅÂ°ªÀ¸·Î ÀÌµ¿";
  Msg += "\n7. ´ñ±ÛÀÛ¼º ¹× ¿äÃ»ÀÚ·á µî·Ï ¾ÈµÇ°Ô Ã³¸®";
  Msg += "\n8. È¸¿øÀÌ º¸³½ ÂÊÁö ¸ðµÎ »èÁ¦";

  if (!confirm(Msg)) {
    return;
  }

  newWindow(
    "/access/penalty/ad_penalty.php?userid=" +
      userid +
      "&source=" +
      source +
      "&ad_type=" +
      ad_type +
      "&idx=" +
      idx,
    "AD_POP",
    500,
    500,
    true
  );
}

function comment_penalty(userid) {
  var rsize_width = 500;
  var rsize_height = 400;
  try {
    var info = window.clientInformation;
    var reg1 = /[^A-Z0-9]MSIE[ ]+7.0[^A-Z0-9]/i;
    if (reg1.test(info.userAgent) == true) rsize_height += 20;
  } catch (e) {}
  newWindow(
    '/access/penalty/comment_penalty.php?idx=<?php echo $_GET["idx"]?>&source=<?php echo $TPL_VAR["source"]?>&userid=' +
      userid,
    "copyright_dc_popup",
    rsize_width,
    rsize_height,
    true
  );
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  Å¬·´°ü¸®ÀÚ Å¬·´È¸¿ø »ó¼¼º¸±â
------------------------------------------------------------------------------------------------------------------------------------------*/
function club_userpop(clubid, userid) {
  var width = 500;
  var height = 460;
  var winleft = (screen.width - width) / 2;
  var wintop = (screen.height - height) / 2 - 20;
  var modaless = window.open(
    "/club/open/etc.php?todo=userinfo&clubid=" + clubid + "&userid=" + userid,
    "mypage_point",
    "width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      wintop +
      ",left=" +
      winleft +
      ", scrollbars=no"
  );
  modaless.focus();
}

/*------------------------------------------------------------------------------------------------------------------------------------------
  ÀÎÁõ ÆË¾÷Ã¢
------------------------------------------------------------------------------------------------------------------------------------------*/
function auth_pop(access_source, auth_method, auth_type, rtn_path) {
  var w = 100;
  var h = 100;

  // ¾ÆÀÌÇÉ ÀÎÁõ
  if (auth_method == "I") {
    w = 450;
    h = 500;
  }
  // ³ªÀÌ½º¾ÆÀÌÇÉ ÀÎÁõ
  if (auth_method == "NI") {
    w = 450;
    h = 550;
  }

  // ÈÞ´ëÆù ÀÎÁõ
  else if (auth_method == "P") {
    w = 425;
    h = 550;
  }

  // ¸ÅÅ©·Î½º ÈÞ´ëÆù ÀÎÁõ
  else if (auth_method == "MP") {
    w = 425;
    h = 550;
  }

  var url =
    "http://www.tple.co.kr/auth/auth_front.php?auth_method=" +
    auth_method +
    "&auth_type=" +
    auth_type +
    "&source=" +
    access_source +
    "&path=" +
    encodeURIComponent(rtn_path);
  var AuthWindow = window.open(
    url,
    "AUTH_P_WINDOW",
    "width=" +
      w +
      ", height=" +
      h +
      ", resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=435, top=100"
  );

  if (AuthWindow == null) {
    alert(
      "¡Ø À©µµ¿ì XP SP2 ¶Ç´Â ÀÎÅÍ³Ý ÀÍ½ºÇÃ·Î·¯ 7 »ç¿ëÀÚÀÏ °æ¿ì¿¡´Â\nÈ­¸é »ó´Ü¿¡ ÀÖ´Â ÆË¾÷ Â÷´Ü ¾Ë¸²ÁÙÀ» Å¬¸¯ÇÏ¿© ÆË¾÷À» Çã¿ëÇØ ÁÖ½Ã±â ¹Ù¶ø´Ï´Ù.\n\n¡Ø MSN, ¾ßÈÄ, ±¸±Û ÆË¾÷ Â÷´Ü Åø¹Ù°¡ ¼³Ä¡µÈ °æ¿ì ÆË¾÷Çã¿ëÀ» ÇØÁÖ½Ã±â ¹Ù¶ø´Ï´Ù."
    );
    return;
  }

  AuthWindow.focus();
}

/*
page: http://www.tple.co.kr/
url: http://www.tple.co.kr/files/script/appendix.js?t=1484692531
*/
