function getIndexCount() {
  var url_request = "http://stat.jseea.cn/statApp/CountApp";
  var cnt = getResponseText(url_request);
  var showCnt = "";
  for (var i = 0; i < cnt.length; i++) {
    showCnt = showCnt + " " + cnt.slice(i, i + 1);
  }
  return showCnt;
}
function detectOS() {
  var sUserAgent = navigator.userAgent;
  var isWin = navigator.platform == "Win32" || navigator.platform == "Windows";
  var isMac =
    navigator.platform == "Mac68K" ||
    navigator.platform == "MacPPC" ||
    navigator.platform == "Macintosh";
  if (isMac) {
    return "Mac";
  }
  var isUnix = navigator.platform == "X11" && !isWin && !isMac;
  if (isUnix) {
    return "Unix";
  }
  var isLinux = String(navigator.platform).indexOf("Linux") > -1;
  if (isLinux) {
    return "Linux";
  }
  if (isWin) {
    var isWin2K =
      sUserAgent.indexOf("Windows NT 5.0") > -1 ||
      sUserAgent.indexOf("Windows 2000") > -1;
    if (isWin2K) {
      return "Win2000";
    }
    var isWinXP =
      sUserAgent.indexOf("Windows NT 5.1") > -1 ||
      sUserAgent.indexOf("Windows XP") > -1;
    if (isWinXP) {
      return "WinXP";
    }
    var isWin2003 =
      sUserAgent.indexOf("Windows NT 5.2") > -1 ||
      sUserAgent.indexOf("Windows 2003") > -1;
    if (isWin2003) {
      return "Win2003";
    }
    var isWin_vista =
      sUserAgent.indexOf("Windows NT 6.0") > -1 ||
      sUserAgent.indexOf("Windows vista") > -1;
    if (isWin_vista) {
      return "vista";
    }
    return "win32 Unknown version";
  }
  return "None";
}
function requestServletForCount(counterid) {
  if (navigator.userAgent.indexOf("MSIE") > 0) {
    var id, s_w, s_h, d_r, d_u, c_v, c_l, c_f, send_u;
    id = counterid; //é¢éå·ï¼é¡µé¢
    s_w = window.screen.width;
    s_h = window.screen.height;
    d_r = escape(document.referrer); //å¼ç¨é¡µ
    d_u = document.URL == "" ? document.href.url : document.URL; //ç®æ é¡µ
    d_u = escape(d_u);
    //c_v = escape(window.clientInformation.appVersion);
    c_v = window.clientInformation.appVersion;
    var browers = c_v.split(";");
    c_v = browers[1];
    c_l = escape(window.clientInformation.systemLanguage);
    c_f = detectOS();
    send_u =
      "http://stat.jseea.cn/statApp/RemoteInfoServlet?id=" +
      id +
      "&dr=" +
      d_r +
      "&du=" +
      d_u +
      "&cv=" +
      c_v +
      "&cl=" +
      c_l +
      "&cf=" +
      c_f +
      "&sc=" +
      s_w +
      "x" +
      s_h;
    document.write('<Script src="' + send_u + '"></Script>');
  } else {
    var id, s_w, s_h, d_r, d_u, c_v, c_l, c_f, send_u;
    id = counterid;
    s_w = window.screen.width;
    s_h = window.screen.height;
    d_r = escape(document.referrer);
    d_u = document.URL == "" ? document.href.url : document.URL;
    d_u = escape(d_u);
    send_u =
      "http://stat.jseea.cn/statApp/RemoteInfoServlet?id=" +
      id +
      "&dr=" +
      d_r +
      "&du=" +
      d_u +
      "&sc=" +
      s_w +
      "x" +
      s_h +
      "&noie=" +
      1;
    //alert(send_u);
    document.write('<Script src="' + send_u + '"></Script>');
  }
}
function palpitant() {
  var send_u = "http://stat.jseea.cn/statApp/Palpitant";
  document.write('<Script src="' + send_u + '"></Script>');
}

/*
page: http://www.jseea.cn/
url: http://www.jseea.cn/js/client_info.js
*/
