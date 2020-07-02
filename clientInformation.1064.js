(function () {
  var B = [],
    c = "http://123.56.43.130:8090/ds.gif?",
    b = "http://123.56.43.130:8090/hot/hotpints.gif?",
    a,
    h = g(),
    E = "http://m.houxue.com/",
    q = [],
    D = new Array(),
    e = "100001";
  D.push("sem11");
  D.push("sem360");
  D.push("sem1");
  D.push("sem3");
  q["http://hz.houxue.com/xuexiao/"] = 1;
  q["http://cd.houxue.com/kecheng/"] = 2;
  q["http://cd.houxue.com/xuexiao/"] = 3;
  q["http://cd.houxue.com/"] = 4;
  q["http://suzhou.houxue.com/"] = 5;
  q["http://gz.houxue.com/"] = 6;
  q["http://sh.houxue.com/"] = 7;
  q["http://hz.houxue.com/"] = 8;
  q["http://bj.houxue.com/"] = 9;
  q["http://nj.houxue.com/"] = 10;
  q["http://zhuanti.houxue.com/meirong-nj.html"] = 11;
  q["http://zhuanti.houxue.com/meirong-bj.html"] = 12;
  q["http://zhuanti.houxue.com/meirong-cd.html"] = 13;
  q["http://zhuanti.houxue.com/meirong-cz.html"] = 14;
  q["http://zhuanti.houxue.com/meirong-sjz.html"] = 15;
  q["http://zhuanti.houxue.com/meirong-lz.html"] = 16;
  q["http://zhuanti.houxue.com/meirong-sh.html"] = 17;
  q["http://zhuanti.houxue.com/meirong-tj.html"] = 18;
  q["http://zhuanti.houxue.com/meirong-fs.html"] = 19;
  q["http://zhuanti.houxue.com/meirong-ly.html"] = 20;
  q["http://zhuanti.houxue.com/meirong-suzhou.html"] = 21;
  q["http://zhuanti.houxue.com/meirong-xm.html"] = 22;
  q["http://zhuanti.houxue.com/meirong-hz.html"] = 23;
  q["http://zhuanti.houxue.com/meirong-fz.html"] = 24;
  q["http://hz.houxue.com/kecheng/jiashi37/"] = 36;
  q["http://nj.houxue.com/kecheng/575915.html"] = 38;
  q["http://zhuanti.houxue.com/yasi.html"] = 39;
  q["asdfasdf"] = 40;
  q["zzzzzzz"] = 41;
  q["http://zhuanti.houxue.com/yasi-bj.html"] = 43;
  q["http://zhuanti.houxue.com/yasi-sh.html"] = 44;
  q["http://zhuanti.houxue.com/yasi-sz.html"] = 45;
  q["http://zhuanti.houxue.com/yasi-gz.html"] = 46;
  q["http://zhuanti.houxue.com/yasi-cq.html"] = 47;
  q["http://zhuanti.houxue.com/yasi-wh.html"] = 48;
  q["http://zhuanti.houxue.com/yasi-dg.html"] = 49;
  q["http://zhuanti.houxue.com/yasi-zz.html"] = 50;
  q["http://zhuanti.houxue.com/yasi-tj.html"] = 51;
  q["http://zhuanti.houxue.com/yasi-cd.html"] = 52;
  q["http://xh.houxue.com/"] = 53;
  q["http://bj.houxue.com/"] = 54;
  q["http://bj.houxue.com/kecheng/"] = 55;
  q["http://bj.houxue.com/xuexiao/"] = 56;
  q["http://nj.houxue.com/xuexiao/"] = 57;
  q["http://nj.houxue.com/kecheng/"] = 58;
  q["http://bj.houxue.com/kecheng/youyong231/"] = 59;
  q["http://bj.houxue.com/kecheng/jianshen230/"] = 60;
  q["http://bj.houxue.com/kecheng/bangongyingyongruanjian18/"] = 61;
  q["http://bj.houxue.com/kecheng/wangluoguanliyuan436/"] = 62;
  q["http://cz.houxue.com/kecheng/zikao96/"] = 63;
  q["http://cz.houxue.com/kecheng/chengrengaokao95/"] = 64;
  q["http://cz.houxue.com/kecheng/zhuanzhuanben254/"] = 65;
  q["http://cz.houxue.com/kecheng/zhuanzhuanben254/"] = 66;
  q["http://bj.houxue.com/kecheng/gongwuyuan70/"] = 67;
  q["http://bj.houxue.com/kecheng/jiaoshizige71/"] = 68;
  q["http://bj.houxue.com/kecheng/sifakaoshi147/"] = 69;
  q["http://bj.houxue.com/kecheng/youshizige445/"] = 70;
  q["http://bj.houxue.com/kecheng/kuaiji499/"] = 71;
  q["http://bj.houxue.com/kecheng/kuaijicongyezige103/"] = 72;
  q["http://bj.houxue.com/kecheng/shicao547/"] = 73;
  q["http://bj.houxue.com/kecheng/chujikuaijizhicheng310/"] = 74;
  q["http://bj.houxue.com/kecheng/zhongjikuaijizhicheng311/"] = 75;
  q["http://bj.houxue.com/kecheng/gaojikuaijizhicheng312/"] = 76;
  q["http://bj.houxue.com/kecheng/zhucekuaijishi141/"] = 77;
  q["http://bj.houxue.com/kecheng/zhucekuaijishi141/"] = 78;
  q["http://bj.houxue.com/kecheng/acca473/"] = 79;
  q["http://hz.houxue.com/kecheng/jiashi37/"] = 80;
  q["http://bj.houxue.com/kecheng/jianzaoshi108/"] = 81;
  q["http://bj.houxue.com/kecheng/xiaofanggongchengshi615/"] = 82;
  q["http://bj.houxue.com/kecheng/jianzhushi351/"] = 83;
  q["http://bj.houxue.com/kecheng/jianligongchengshi355/"] = 84;
  q["http://bj.houxue.com/kecheng/zaojiayuan414/"] = 85;
  q["http://bj.houxue.com/kecheng/zaojiayuan414/"] = 86;
  q["http://bj.houxue.com/kecheng/zaojiagongchengshi361/"] = 87;
  q["http://bj.houxue.com/kecheng/anquangongchengshi356/"] = 88;
  q["http://bj.houxue.com/kecheng/huazhuang142/"] = 89;
  q["http://bj.houxue.com/kecheng/caizhuangzaoxing383/"] = 90;
  q["http://bj.houxue.com/kecheng/meifa39/"] = 91;
  q["http://bj.houxue.com/kecheng/meijia143/"] = 92;
  q["http://bj.houxue.com/kecheng/banyongjiuhuazhuang630/"] = 93;
  q["http://bj.houxue.com/kecheng/wenxiu543/"] = 94;
  q["http://nj.houxue.com/kecheng/yingyu483/"] = 95;
  q["http://zhuanti.houxue.com/kuaiji.html"] = 97;
  q["http://zhuanti.houxue.com/kuaiji.html"] = 98;
  q["http://zhuanti.houxue.com/kuaiji.html"] = 99;
  q["http://zhuanti.houxue.com/meirong.html"] = 100;
  q["http://i.houxue.com/accounts/login/"] = 101;
  q["http://nj.houxue.com/xuexiao/31834.html"] = 102;
  q["http://sale.houxue.com/9year/mz-nj.html"] = 103;
  q["http://sale.houxue.com/9year/mz-bj.html"] = 104;
  q["http://sale.houxue.com/9year/mz-sh.html"] = 105;
  q["http://sale.houxue.com/9year/mz-cq.html"] = 106;
  q["http://sale.houxue.com/9year/mz-sz.html"] = 107;
  q["http://sale.houxue.com/9year/mz-cd.html"] = 108;
  q["http://sale.houxue.com/9year/mz-hz.html"] = 109;
  q["http://sale.houxue.com/9year/mz-cs.html"] = 110;
  q["http://sale.houxue.com/9year/mz-fz.html"] = 111;
  q["http://zhuanti.houxue.com/zxxkwfd.html"] = 112;
  function d() {
    var Q = document.getElementsByTagName("meta");
    if (Q != undefined) {
      var m = Q.keywords == undefined ? null : Q.keywords.content;
      var P = Q.description == undefined ? null : Q.description.content;
      if (m != null) {
        k("key", C(m, "'", ""));
      }
      if (P != null) {
        k("content", C(P, "'", ""));
      }
    }
    if (document.title != undefined) {
      k("title", C(document.title, "'", ""));
    }
  }
  function O() {
    var m = document.referrer;
    if (!m) {
      try {
        if (window.opener) {
          m = window.opener.location.href;
        }
      } catch (P) {}
    }
    m = decodeURIComponent(m);
    return m;
  }
  function M() {
    var m = location.href;
    var P = null;
    if (m.indexOf(E) > -1) {
      P = m.substring(20, m.indexOf("/", 20));
    } else {
      P = m.substring(7, m.indexOf(".", 7));
    }
    if (P != "home" && P != "i" && P != "www" && P != null) {
      k("city", P);
    }
  }
  function i(S) {
    var R = location.search;
    if (R) {
      R = R.substr(1).split("&");
      for (var Q in R) {
        if (Q / 2 == 0) {
          var P = R[Q];
          if (D.length > 0 && P) {
            for (var Q = 0; Q < D.length; Q++) {
              if (D[Q] == P) {
                var m = location.href;
                var T = z(S, "wd");
                if (T != null) {
                  x("tj_keyword", T);
                }
                k("sem", P);
                x("tj_uuid", h);
                x("tj_did", e);
                x("tj_semurl", m);
                x("tj_account", P);
                return;
              }
            }
          }
        }
      }
      R = location.search;
      console.log("search:" + R);
      R = R.substr(1).split("?");
      for (var Q in R) {
        if (Q / 2 == 0) {
          var P = R[Q];
          if (D.length > 0 && P) {
            for (var Q = 0; Q < D.length; Q++) {
              if (D[Q] == P) {
                var m = location.href;
                var T = z(S, "wd");
                if (T != null) {
                  x("tj_keyword", T);
                }
                k("sem", P);
                x("tj_uuid", h);
                x("tj_did", e);
                x("tj_semurl", m);
                x("tj_account", P);
                return;
              }
            }
          }
        }
      }
    }
  }
  function J() {
    M();
    d();
    var Q = window.location.href;
    var S = location.hash;
    if (
      S != null &&
      S != "" &&
      S != undefined &&
      S != "undefined" &&
      S.length > 0
    ) {
      k("hash", S.replace("#", ""));
    }
    var T = 0;
    var R = O();
    if (!R) {
      T = 1;
    }
    var P = navigator.userAgent.toLowerCase();
    var m = j(P);
    if (e != null && e != "") {
      k("did", e);
    } else {
      v();
    }
    k("cookieid", h);
    k("llq", m);
    k("sourceform", T);
    k("referrer", encodeURIComponent(R));
    k("refererdomain", I(R));
    k("inpagedomain", location.hostname);
    k("resolution", window.screen.width + "X" + window.screen.height);
    k("userAgent", navigator.userAgent);
    k("type", w());
    t(R);
    i(R);
    L(Q);
    k("inpage", encodeURIComponent(Q));
  }
  function w() {
    var P = new Array(
      "iphone",
      "ipod",
      "ipad",
      "android",
      "mobile",
      "blackberry",
      "webos",
      "incognito",
      "webmate",
      "bada",
      "nokia",
      "lg",
      "ucweb",
      "skyfire"
    );
    var m = navigator.userAgent.toLowerCase();
    var R = "1";
    for (var Q = 0; Q < P.length; Q++) {
      if (m.indexOf(P[Q]) != -1) {
        R = "2";
        break;
      }
    }
    return R;
  }
  function t(P) {
    var S = new Array();
    S["bzclk.baidu.com"] = "wd";
    S["https://www.baidu.com"] = "word";
    S["www.baidu.com"] = "wd";
    S["http://m.baidu.com"] = "word";
    S["http://cn.bing.com"] = "q";
    S["www.sogou.com"] = "query";
    S["wap.sogou.com"] = "keyword";
    S["http://www.haosou.com"] = "q";
    S["http://m.haosou.com"] = "q";
    S[".so.com"] = "q";
    S[".houxue.com"] = "kw";
    var m = new Array();
    m["baidu"] = 1;
    m["bing"] = 2;
    m["sogou"] = 3;
    m["haosou"] = 4;
    m["so"] = 4;
    m["houxue"] = 5;
    for (var R in S) {
      if (P.indexOf(R) != -1) {
        a = z(P, S[R]);
        if (a != "" && a != null) {
          k("keyword", a);
        }
        var Q = R.substring(R.indexOf(".") + 1, R.indexOf(".com"));
        if (Q != ".") {
          k("se", m[Q]);
        }
        break;
      }
    }
  }
  function k(m, Q) {
    if (Q != null && Q != "" && Q != undefined) {
      var P = m + "=" + Q;
      if (B[P] == null || B[P] == undefined) {
        B.push(P);
      }
    }
  }
  function C(Q, P, m) {
    Q = Q.replace(P, m);
    return Q;
  }
  function p(R, T) {
    var Q = new Array();
    var m = R.getElementsByTagName("*");
    for (var P = 0; P < m.length; P++) {
      try {
        if (m[P].className.indexOf(T) != -1) {
          Q[Q.length] = m[P];
        }
      } catch (S) {}
    }
    return Q;
  }
  function L(Q) {
    var V = null,
      U = null,
      T = null,
      P = null,
      X = null;
    if (Q.indexOf(E) == -1) {
      if (Q.indexOf("houxue.com/kecheng/") != -1 && Q.indexOf(".html") != -1) {
        var S = p(document, "course_tit")[0];
        if (S != undefined) {
          V = S.firstChild.nodeValue;
          V = V.replace("<", "");
          V = V.replace(">", "");
        }
        U = K(Q);
        var R = p(document, "link_c99")[0];
        if (R != undefined) {
          P = K(R.href + "");
          T = R.text.replace(/s+/g, "");
        } else {
          T = null;
        }
        X = p(document, "f26")[0];
        if (X != undefined) {
          X = X.firstChild.nodeValue;
        } else {
          X = null;
        }
      } else {
        if (
          Q.indexOf("houxue.com/xuexiao/") != -1 &&
          Q.indexOf(".html") != -1
        ) {
          T = p(document, "current_page")[0].firstChild.nodeValue.replace(
            /s+/g,
            ""
          );
          P = Q.substring(Q.lastIndexOf("/") + 1, Q.indexOf(".html"));
        }
      }
      if (Q.indexOf("houxue.com/kecheng/") != -1) {
        var W = new RegExp("houxue.com/kecheng/([0-9])+");
        if (!Number(U)) {
          if (W.test(Q)) {
            var Y = Q.substring(30, Q.length);
            var m = Y.substring(0, Y.indexOf("/"));
            U = m;
          }
        }
      } else {
        if (Q.indexOf("www.houxue.com/xuexiao/") != -1) {
          if (!Number(P)) {
            var Y = Q.substring(30, Q.length);
            var m = Y.substring(0, Y.indexOf("/"));
            P = m;
          }
        }
      }
    } else {
      if (Q.indexOf("/kecheng/") != -1 && Q.indexOf(".html") != -1) {
        V = p(document, "detail_name")[0].children[0].firstChild.nodeValue;
        if (p(document, "det_right")[0].firstChild == null) {
          T = "";
        } else {
          T = p(document, "det_right")[0].firstChild.nodeValue;
        }
        U = K(Q);
        X = p(document, "det_price")[0].firstChild.nodeValue;
        if (X != undefined && X != "") {
          X = X.substring(1);
          if (Number(X)) {
            X = X;
          } else {
            X = null;
          }
        }
        P = p(document, "course_describe")[0].children[1].children[0]
          .children[0].href;
        P = K(P);
      } else {
        if (Q.indexOf("/xuexiao/") > -1) {
          P = K(Q);
          if (P != undefined) {
            T = p(document, "school_name")[0];
            if (T != undefined) {
              T = T.firstChild.innerHTML.replace(/s+/g, "");
            }
          } else {
            var Y = Q.substring(Q.lastIndexOf("/") + 1, Q.indexOf(".html"));
            var W = new RegExp(
              "http://m.houxue.com/([a-z])+/xuexiao/(env|intro|map|news|laoshi|kecheng)"
            );
            if (W.test(Q)) {
              P = Y.replace(/[^0-9]/gi, "");
            }
          }
        }
      }
    }
    if (P == "" || P == null || P == "undefined") {
      if (document.getElementsByName("loginid")[0] != undefined) {
        P = document.getElementsByName("loginid")[0].value;
      }
    }
    k("sid", P);
    k("cid", U);
    k("schoolname", T);
    k("coursename", V);
    k("kechengprice", X);
  }
  function K(m) {
    var P = m.substring(m.lastIndexOf("/") + 1, m.indexOf(".html"));
    if (!Number(P)) {
      return undefined;
    }
    return P;
  }
  function v() {
    var Q = document.getElementsByTagName("script");
    for (var m = 0; m < Q.length; m++) {
      if (Q[m].src.indexOf("core.js") >= 0) {
        var R = Q[m].src;
        var P = z(R, "did");
        k("did", P);
        break;
      }
    }
  }
  function z(R, m) {
    var P = new RegExp("(^|&)" + m + "=([^&]*)(&|$)", "i");
    var Q = R.substring(R.indexOf("?")).substr(1).match(P);
    if (Q != null) {
      return unescape(Q[2]);
    }
    return null;
  }
  function I(Q) {
    var S = null;
    var m = new Array(
      ".com.cn",
      ".com",
      ".cn",
      ".org",
      ".net",
      ".cc",
      ".biz",
      ".gov"
    );
    for (var R = 0; R < m.length; R++) {
      if (Q.indexOf(m[R]) != -1) {
        var P = Q.indexOf(m[R]);
        S = Q.substring(0, P + m[R].length);
      }
    }
    return S;
  }
  function j(U) {
    var R = new Array(
      "firefox",
      "msie",
      "chrome",
      "metaSr",
      "bidubrowser",
      "maxthon",
      "qqbrowser",
      "ubrowser",
      "safari",
      "opr",
      "lbbrowser",
      "metasr"
    );
    var Q = "";
    for (var T = 0; T < R.length; T++) {
      if (U.indexOf(R[T]) != -1) {
        Q += R[T] + "/";
      }
    }
    var W = "";
    if (Q == "firefox/") {
      W = "firefox";
    } else {
      if (Q == "msie/") {
        W = "ie";
      } else {
        if (Q == "chrome/safari/metasr/") {
          W = "sougou";
        } else {
          if (Q == "chrome/bidubrowser/ubrowser/safari/") {
            W = "baidu";
          } else {
            if (Q == "chrome/maxthon/safari/") {
              W = "aoyou";
            } else {
              if (Q == "msie/qqbrowser/") {
                W = "qq";
              } else {
                if (Q == "chrome/ubrowser/safari/") {
                  W = "uc";
                } else {
                  if (Q == "safari/") {
                    W = "safari";
                  } else {
                    if (Q == "chrome/safari/opr/") {
                      W = "oupeng";
                    } else {
                      if (Q == "msie/lbbrowser/") {
                        W = "liebao";
                      } else {
                        var P = "";
                        var S = "track" in document.createElement("track");
                        var V =
                          window.chrome && window.chrome.webstore
                            ? Object.keys(window.chrome.webstore).length
                            : 0;
                        if (
                          window.clientInformation &&
                          window.clientInformation.permissions
                        ) {
                          W = "google";
                        }
                        var m = navigator.platform.toLowerCase();
                        if (m.indexOf("mac") == 0 || m.indexOf("linux") == 0) {
                          W = "google";
                        }
                        if (S) {
                          W = V > 1 ? "google" : "360se";
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return W;
  }
  function G() {
    var S = new Date();
    var T = S.getTime();
    var R = [];
    var m = "0123456789abcdef" + T;
    for (var P = 0; P < 36; P++) {
      R[P] = m.substr(Math.floor(Math.random() * 16), 1);
    }
    R[14] = "4";
    R[19] = m.substr((R[19] & 3) | 8, 1);
    R[8] = R[13] = R[18] = R[23];
    var Q = R.join("");
    return Q;
  }
  function y(m, P) {
    localStorage.setItem(m, P);
  }
  function l(m) {
    return localStorage.getItem(m);
  }
  function r(m) {
    localStorage.removeItem(m);
  }
  function x(R, P) {
    var Q = 1;
    var P = R + "=" + escape(P);
    var m = new Date();
    m.setTime(m.getTime() + parseInt(Q) * 3600 * 1000 * 24);
    P = P + ";domain=.houxue.com;path=/;expires=" + m.toGMTString();
    document.cookie = P;
  }
  function f(m) {
    if (document.cookie.length > 0) {
      c_start = document.cookie.indexOf(m + "=");
      if (c_start != -1) {
        c_start = c_start + m.length + 1;
        c_end = document.cookie.indexOf(";", c_start);
        if (c_end == -1) {
          c_end = document.cookie.length;
        }
        return unescape(document.cookie.substring(c_start, c_end));
      }
    }
    return "";
  }
  function g() {
    var P = "";
    var m = "tj_cookieid";
    P = f(m);
    if (P == "" || P == null || P == "undefined") {
      P = G();
      x(m, P);
      P = f(m);
    }
    return P;
  }
  var u = function () {
    var Q = new Image();
    Q.onload = Q.onerror = function () {
      Q.onload = Q.onerror = null;
      Q = null;
    };
    var P = new Array();
    var T = "";
    for (var S in B) {
      if (B[S].indexOf("inpage=") != -1) {
        T = B[S];
      } else {
        P.push(B[S]);
      }
    }
    if (T != "") {
      P.push(T);
    }
    var R = navigator.userAgent.toLowerCase();
    var m = j(R);
    if (m == "ie") {
      $.ajax({
        url:
          "http://123.56.43.130:8090/ie/ds.gif?" +
          P.join("&") +
          "&rm=" +
          Math.floor(2147483648 * Math.random()),
        dataType: "jsonp",
        jsonp: "callbackparam",
        success: function (U) {},
      });
    } else {
      Q.src = c + P.join("&") + "&rm=" + Math.floor(2147483648 * Math.random());
    }
    B = [];
  };
  function F(P) {
    var m;
    if (!P) {
      var P = window.event;
    }
    if (P.target) {
      m = P.target;
    } else {
      if (P.srcElement) {
        m = P.srcElement;
      }
    }
    if (m.nodeType == 3) {
      m = m.parentNode;
    }
    return m;
  }
  function A(P) {
    var m = P.offsetLeft;
    while (P.offsetParent != null) {
      P = P.offsetParent;
      m += P.offsetLeft;
    }
    return m;
  }
  function H(P) {
    var m = P.offsetTop;
    while (P.offsetParent != null) {
      P = P.offsetParent;
      m += P.offsetTop;
    }
    return m;
  }
  function N() {
    var m = document.documentElement.scrollWidth || document.body.scrollWidth;
    return m;
  }
  function o(P) {
    var R = P || window.event;
    var S = document.documentElement.scrollLeft || document.body.scrollLeft;
    var Q = document.documentElement.scrollTop || document.body.scrollTop;
    var m = R.pageX || R.clientX + S;
    var T = R.pageY || R.clientY + Q;
    return { x: m, y: T };
  }
  function s(W, U) {
    var ab = F(W);
    var X = [],
      V,
      Y,
      P,
      aa,
      T,
      Z,
      m;
    X.push("pid=" + U);
    if (ab.tagName == "A") {
      Z = ab.offsetHeight;
      m = ab.offsetWidth;
      T = A(ab);
      aa = H(ab);
      X.push("height=" + Z);
      X.push("width=" + m);
      X.push("eleleft=" + T);
      X.push("eletop=" + aa);
      X.push("url=" + ab.href);
    }
    var R = o(W);
    P = R.x;
    Y = R.y;
    var S = N();
    X.push("winwidth=" + S);
    X.push("left=" + P);
    X.push("top=" + Y);
    var Q = new Image();
    Q.src = b + X.join("&") + "&m=" + new Date().getTime();
  }
  function n() {
    document.body.onmousedown = function (Q) {
      var P = location.href;
      var m = q[P];
      if (m != undefined) {
        s(Q, m);
      }
    };
  }
  J();
  u();
  n();
})();
/*
page: http://www.houxue.com/
url: http://123.56.43.130:8090/rs/core.js?did=100001
*/
