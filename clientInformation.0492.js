var site_domain = "xiazaiba.com";
var _PHP_URL = "http://www.zheerxia.com";
//document.domain = "www.zheerxia.com";
if (typeof URL == "undefined") var URL = "http://www.zheerxia.com"; //
if (typeof XZB == "undefined") XZB = {};

XZB.namespace = function (str) {
  var arr = str.split("."),
    o = XZB;
  for (var i = arr[0] == "XZB" ? 1 : 0; i < arr.length; i++) {
    o[arr[i]] = o[arr[i]] || {};
    o = o[arr[i]];
  }
  return o;
};

Function.prototype.method = function (name, fn) {
  if (typeof this.prototype[name] == "undefined") this.prototype[name] = fn;
  return this;
};

String.method("encode", function (noCom) {
  return noCom ? encodeURI(this) : encodeURIComponent(this);
}).method("decode", function (noCom) {
  return noCom ? decodeURI(this) : decodeURIComponent(this);
});

XZB.Cookie = {};
//Ð´Èëcookie
XZB.Cookie.Set = function (name, value, hours) {
  var expire = "";
  if (hours != null) {
    expire = new Date(new Date().getTime() + hours * 3600000);
    expire = "; expires=" + expire.toGMTString();
  }
  document.cookie = name + "=" + escape(value) + expire;
};

//¶ÁÈ¡cookie
XZB.Cookie.Get = function (Name) {
  var search = Name + "=";
  var returnvalue = "";
  if (document.cookie.length > 0) {
    offset = document.cookie.indexOf(search);
    if (offset != -1) {
      offset += search.length;
      end = document.cookie.indexOf(";", offset);
      if (end == -1) end = document.cookie.length;
      returnvalue = unescape(document.cookie.substring(offset, end));
    }
  }
  return returnvalue;
};

//×ªÌùµ½ÂÛÌ³
var setcopy_gettext = function (id) {
  if (!id) return;
  var url = "/route.php?ac=post2bbs&softid=" + id;
  $.get(url, function (s) {
    window.document.clipboardswf.SetVariable("str", s);
  });
};
var floatwin = function () {
  alert("ÒÑ¾­³É¹¦¸´ÖÆ!");
};

//LoadJs
XZB.isloadjs = false;
XZB.loadjs = function (jsList, callback) {
  var jsListLen,
    jsList,
    i = 0;

  if (jsList instanceof Array) {
    jsListLen = jsList.length;
  } else {
    var a = new Array();
    a.push(jsList);
    jsList = a;
    jsListLen = jsList.length;
  }

  function createjs(uri) {
    if (!XZB.isloadjs) {
      var script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", uri);
      document.getElementsByTagName("head")[0].appendChild(script);
      script.onreadystatechange = script.onload = function () {
        clearTimeout(t);
        if (this.readyState == "loaded" || this.onload) {
          i++;
          if (i < jsListLen) {
            createjs(jsList[i]);
          } else {
            if (callback) {
              XZB.isloadjs = true;
              setTimeout(function () {
                callback();
              }, 0);
            }
          }
        }
      };
    }
    if (!XZB.isloadjs) {
      var t = setTimeout(function () {
        alert("¼ÓÔØJSÎÄ¼þÊ§°Ü");
      }, 5000);
    } else {
      setTimeout(function () {
        callback();
      }, 0);
    }
  }
  createjs(jsList[i]);
};

//*****sgÈí¼þÖúÊÖ***** ad by dragon 2015/11/27
var sogouHighDownLoad = (function () {
  var c = false;
  function a() {
    var d = navigator.userAgent.toLowerCase();
    var f = d.indexOf("trident") > -1 || d.indexOf("msie") > -1;
    var e = document.createElement("object");
    if (f) {
      e.setAttribute("id", "sogoudownload");
      e.setAttribute("classid", "CLSID:D1871D0A-4929-4A3C-AAE5-684235E62244");
      e.setAttribute("width", "0");
      e.setAttribute("height", "0");
      e.style.cssText = "position:absolute;top:-99px;left:-9999px;";
    } else {
      e.id = "sogoudownload";
      e.width = "0";
      e.height = "0";
      e.style = "position:absolute;top:-99px;left:-9999px;";
      e.type = "application/sd-plugin";
    }
    document.getElementsByTagName("body")[0].appendChild(e);
  }
  var b = function b() {
    var j = window;
    var e = j.navigator;
    var l = j.document;
    var f = j.ActiveXObject;
    var i = l.documentMode;
    var h = /^Apple/;
    var g = d() || i || 0;
    var m = f || i;
    var k = n();
    return k;
    function o(r, q) {
      var s = j.external || {};
      for (var p in s) {
        if (r.test(q ? s[p] : p)) {
          return true;
        }
      }
      return false;
    }
    function d() {
      var q = 3,
        s = document.createElement("p"),
        r = s.getElementsByTagName("i");
      while (
        ((s.innerHTML = "/*[if gt IE " + ++q + "]><i></i><![endif]*/"), r[0])
      ) {}
      return q > 4 ? q : 0;
    }
    function n() {
      var q = "track" in document.createElement("track");
      var p =
        j.chrome && j.chrome.webstore
          ? Object.keys(j.chrome.webstore).length
          : 0;
      if (m) {
        return "IE";
      }
      if (e.userAgent.toLowerCase().indexOf("firefox") !== -1) {
        return "Firefox";
      }
      if (e.userAgent.toLowerCase().indexOf("qqbrowser") !== -1) {
        return "QQBrowser";
      }
      if (o(/^sogou/i, 0)) {
        return "Sogou";
      }
      if (o(/^liebao/i, 0)) {
        return "LieBao";
      }
      if (j.clientInformation && j.clientInformation.permissions) {
        return "chrome";
      }
      if (q) {
        return p > 1 ? "360ee" : "360se";
      }
      return "";
    }
  };
  return function (d, l, e, n, h) {
    if (!c) {
      a();
      c = true;
    }
    var f = document.getElementById("sogoudownload");
    var i = "&browser=" + b();
    var k = 0;
    try {
      k = f.IsInstalled();
    } catch (g) {
      k = 0;
    }
    if (k >= 33554460) {
      if (!f.RunDownLoad(d, l, e, n)) {
        window.location.href = d;
        return true;
      }
      return false;
    } else {
      var m = [
        "http://yz.app.sogou.com/download?url=",
        encodeURIComponent(d),
        "&surl=",
        encodeURIComponent(""),
        "&iconurl=",
        encodeURIComponent(l),
        "&name=",
        encodeURIComponent(e),
        "&softsize=",
        encodeURIComponent(n),
        i,
      ].join("");
      var j = document.createElement("a");
      j.href = m;
      document.body.appendChild(j);
      j.click();
    }
    return true;
  };
})();

XZB.SGDown = function (obj, softid, softname, fulldownurl, size, iconurl) {
  //Í³¼ÆÏÂÔØ´ÎÊý
  countimg = document.createElement("img");
  if (!XZB.Cookie.Get("down_" + softid)) {
    var gettime = new Date().getTime();
    var url =
      _PHP_URL +
      "/index.php?ct=stat&ac=stat_softdown&softid=" +
      softid +
      "&gettime=" +
      gettime;
    countimg.src = url;
  }

  //ÆÕÍ¨Èí¼þ(²»ºÏ×÷ÍÆ¹ã)¡¢ÏÂÔØµØÖ·²»Îª¿Õ¡¢²»ÊÇ¶ºÓÎ
  if (
    softoem == 0 &&
    fulldownurl.length > 2 &&
    fulldownurl.indexOf("http://www.doyo.cn/") == -1
  ) {
    var filename = fulldownurl.substring(fulldownurl.lastIndexOf("/") + 1);
    sogouHighDownLoad(
      fulldownurl +
        "&pcid=" +
        softid +
        "&filename=" +
        filename +
        "&downloadtype=xiazaiba",
      iconurl,
      softname,
      size,
      "version=2&filename=" +
        filename +
        "&pcid=" +
        softid +
        "&downloadtype=xiazaiba"
    );
    return true;
  }
  if (obj) {
    //Ö±½Ó·µ»ØÕæÊµÏÂÔØµØÖ·

    obj.attr("href", fulldownurl);
  }
};
//*****sgÈí¼þÖúÊÖ end*****

XZB.clickCount = function (sid, type, file, obj, soft_name) {
  //Í³¼ÆÏÂÔØ´ÎÊý

  countimg = document.createElement("img");
  if (!XZB.Cookie.Get(type + "_" + sid)) {
    var gettime = new Date().getTime();
    var url =
      _PHP_URL +
      "/index.php?ct=stat&ac=stat_softdown&softid=" +
      sid +
      "&gettime=" +
      gettime;
    countimg.src = url;
  }
};

//Èí¼þÆÀÂÛÖ§³Ö
XZB.comup = function (obj, softid, comupid) {
  if (!XZB.Cookie.Get(softid + "_comup_" + comupid)) {
    $.ajax({
      type: "POST",
      url: "/route.php?ac=review_vote",
      data: "softid=" + softid + "&comup=" + comupid,
      cache: false,
      success: function (msg) {
        //¸Ä±äµ÷»ØµÄÊý¾Ý
        if (msg == 1) {
          var upnum = $(obj).find(".upnum")[0];
          if (!upnum.innerHTML) {
            upnum.innerHTML = 0;
          }
          //¼ÆËã
          var good = parseInt(upnum.innerHTML, 10) + 1;
          upnum.innerHTML = good;
        } else if (msg == -1) {
          alert("ÄãÒÑ¾­¶¥¹ý¸ÃÆÀÂÛÁË");
        }
        XZB.Cookie.Set(softid + "_comup_" + comupid, "1");
      },
    });
  } else {
    alert("ÄãÒÑ¾­¶¥¹ý¸ÃÆÀÂÛÁË");
  }
};
//Èí¼þÆÀÂÛ²È
XZB.comcai = function (obj, softid, comupid) {
  if (!XZB.Cookie.Get(softid + "_comcai_" + comupid)) {
    $.ajax({
      type: "POST",
      url: "/route.php?ac=review_vote",
      data: "softid=" + softid + "&comup=" + comupid + "&funs=cai",
      cache: false,
      success: function (msg) {
        //¸Ä±äµ÷»ØµÄÊý¾Ý
        if (msg == 1) {
          var upnum = $(obj).find(".cainum")[0];
          if (!upnum.innerHTML) {
            upnum.innerHTML = 0;
          }
          //¼ÆËã
          var good = parseInt(upnum.innerHTML, 10) + 1;
          upnum.innerHTML = good;
        } else if (msg == -1) {
          alert("ÄãÒÑ¾­²È¹ý¸ÃÆÀÂÛÁË");
        }
        XZB.Cookie.Set(softid + "_comcai_" + comupid, "1");
      },
    });
  } else {
    alert("ÄãÒÑ¾­²È¹ý¸ÃÆÀÂÛÁË");
  }
};
//Èí¼þÆÀÂÛ¾Ù±¨
XZB.comju = function (obj, softid, comupid) {
  if (!XZB.Cookie.Get(softid + "_comju_" + comupid)) {
    $.ajax({
      type: "POST",
      url: "/route.php?ac=review_vote",
      data: "softid=" + softid + "&comup=" + comupid + "&funs=ju",
      cache: false,
      success: function (msg) {
        //¸Ä±äµ÷»ØµÄÊý¾Ý
        if (msg == 1) {
          alert("³É¹¦¾Ù±¨");
        } else if (msg == -1) {
          alert("ÄãÒÑ¾­¾Ù±¨¹ý¸ÃÆÀÂÛÁË");
        }
        XZB.Cookie.Set(softid + "_comju_" + comupid, "1");
      },
    });
  } else {
    alert("ÄãÒÑ¾­¾Ù±¨¹ý¸ÃÆÀÂÛÁË");
  }
};

//»ñÈ¡ajaxÄÚÈÝ
XZB.getAjaxContent = function (url, callback) {
  $.get(url, function (data) {
    if (data != -1) {
      callback(data);
    } else {
      return false;
    }
  });
};

//ÆÀÂÛ±íµ¥ÑéÖ¤
XZB.InsertRecomment = function (obj, callback) {
  var url = _PHP_URL + "/route.php?ac=comment";
  obj.imgcode = $.trim(obj.imgcode);
  obj.comment = $.trim(obj.comment);
  if (obj.comment == "") {
    return "ÇëÊäÈëÆÀÂÛÄÚÈÝ";
  }
  if (obj.comment.length < 3) {
    return "ÆÀÂÛÄÚÈÝÒªÔÚ3µ½1000¸ö×Ö·ûÒÔÄÚ";
  }
  if (obj.imgcode == "") {
    return "ÇëÊäÈëÑéÖ¤Âë";
  }
  var postObj = {
    imgcode: obj.imgcode,
    comment: obj.comment,
    softid: obj.softid,
    subject: obj.subject,
    quote_id: obj.quote_id ? obj.quote_id : "",
  };

  if (obj.report != undefined) {
    postObj.report = obj.report;
  }
  $.post(url, postObj, callback);
  return "";
};
//Éè¶¨iframe¸ß¶È
XZB.SetAutoHeight = function () {
  var parentWindow;
  parentWindow = parent.window;
  var f = parentWindow.document.getElementById("com_iframe");
  if ($.browser.msie) {
    f.style.height =
      $(".soft-comment").height() + $(".ylmf-page").height() + "px";
  } else {
    f.style.height = $(document.body).height() + 10 + "px";
  }
};

//ÆÀÂÛ»Ø¸´µ¯³ö¿ò
var showReplyBox = function (ele) {
  var commentEle = $(ele);
  var ifram = $(".showcom");
  var left = ifram.offset().left + 30;
  var top = ifram.offset().top + commentEle.offset().top - 60;
  $("#com_alert")
    .css({ left: left + "px", top: top + "px" })
    .attr("rel", commentEle.attr("rel"));
  ResultControl.ShowScreen("com_alert", true);
};

//ÆÀÂÛ»Ø¸´¿ò
var showReplydisplay = function (id, elem) {
  var hfBox = $(".huifu-box"),
    curHF = $("#huifu_" + id),
    inserted = $(elem).attr("insert"),
    str = "",
    qID = $(elem).attr("rel");
  if (inserted == 0) {
    str =
      '<div id="form_error_box2"></div><div class="sub-post-cmt"><div class="inp-wrap"><textarea name="your_desc2" id="your_desc2" cols="30" rows="10"></textarea></div><div class="inp-row clearfix"><label class="fl" for="scode">ÑéÖ¤Âë£º</label><input id="code2" class="input-text inp-vcode fl" type="text" autocomplete="off"><img class="img-code" id="js_img_code2" alt="¿´²»Çå³þÇëµã»÷Í¼Æ¬¸ü»»ÑéÖ¤Âë" data="' +
      _PHP_URL +
      '/index.php?ac=validate_code"><input id="js_com_submit2" class="com-submit" type="button" value="Ìá½»ÆÀÂÛ"></div><i class="cmt-arr"></i><input type="hidden" id="com_alert" value="' +
      qID +
      '" /></div>';
    $(".com-reply").attr("insert", 0);
    hfBox.html("");
    $(elem).attr("insert", 1).html("¹Ø±Õ»Ø¸´");
    curHF.html(str);
    $("#js_img_code2").click(function () {
      $(this).attr(
        "src",
        _PHP_URL + "/index.php?ac=validate_code&" + new Date().getTime()
      );
    });
  } else {
    hfBox.html("");
    $(".com-reply").attr("insert", 0);
    $(elem).html("»Ø¸´");
  }
};

var mmScrollShow = function (o) {
  var box = $(o.elem),
    item = box.find("li"),
    len = item.length,
    num = len / o.setup,
    curNum = 1,
    prev = box.find(o.prev),
    next = box.find(o.next),
    autoTimer = null,
    autoPlay = function () {
      if (curNum + 1 > num) {
        go(1);
      } else {
        go(curNum + 1);
      }
    };

  if (num > 1) {
    num = Math.ceil(num);
    var go = function (idx) {
      if (autoTimer) clearInterval(autoTimer);
      item.hide();
      item.slice((idx - 1) * o.setup, o.setup * idx).show();
      curNum = idx;
      if (o.auto) autoTimer = setInterval(autoPlay, o.timeout);
    };
    go(curNum);
    prev.click(function (e) {
      e.preventDefault();
      --curNum;
      if (curNum == 0) {
        curNum = num;
      }
      go(curNum);
    });
    next.click(function (e) {
      e.preventDefault();
      ++curNum;
      if (curNum > num) {
        curNum = 1;
      }
      go(curNum);
    });

    if (autoTimer) clearInterval(autoTimer);
    if (o.auto) autoTimer = setInterval(autoPlay, o.timeout);
  }
};

var mmPic = function (data) {
  if (!data.length) return;
  var len = data.length,
    str = "";
  if (len > 8) len = 8;
  for (var i = 0; i < len; i++) {
    str +=
      '<li><a href="' +
      data[i].url +
      '" class="white" target="_blank"><img height="130" src="' +
      data[i].thumb +
      '" alt="' +
      data[i].title +
      '"><span class="til">' +
      data[i].title +
      '</span><span class="bg"></span></a></li>';
  }
  $("#cmt_mm_wrap").find("ul").html(str);

  mmScrollShow({
    elem: "#cmt_mm_wrap",
    setup: 1,
    prev: ".btn-prev",
    next: ".btn-next",
    timeout: 5000,
    auto: true,
  });
};
//Ö´ÐÐ
$(document).ready(function () {
  $("#base_download").bind("click", function () {
    var softid = $(this).attr("softid");
    var softname = $(this).attr("softname");
    $.get("/api.php?softid=" + softid, function (data) {
      var downsrc = $(data).find("downsrc").text();
      if (downsrc.length > 28) {
        /*http://xiazai.xiazaiba.com/*/
        if (downsrc.indexOf("http://www.doyo.cn/") == 0) {
          location.href = downsrc;
        } else {
          location.href =
            "/download.php?softid=" + softid + "&softname=" + softname;
        }
      } else {
        /* ÌØÊâ´¦Àí 2015-08-12 */
        if (fckNum != "" && fckNum != null) {
          alert(file);
          location.href = "http://xiazai.xiazaiba.com" + file;
          //return false;
        } else {
          location.href = "#j_down_list";
        }
      }
    });
  });

  if ($("#cmt_mm_wrap").get(0)) {
    $.getScript(
      "http://meitu.999.com/?ac=api&tid=0&img_type=2&order=2&callback=mmPic"
    );
  }

  //Èí¼þÆÀÂÛ±íµ¥²¿·Ö
  var changeImgState = true;
  $("#code,#code2")
    .bind("click", function () {
      var imgBox = $("#js_img_code");
      imgBox.appendTo("#" + this.id + "_imgbox");
    })
    .bind("blur", function () {
      if (changeImgState) {
        var imgBox = $("#js_img_code");
        imgBox.appendTo("#js_cache_box");
      }
    });

  $("#js_img_code")
    .bind("mouseover", function () {
      changeImgState = false;
    })
    .bind("mouseout", function () {
      changeImgState = true;
    })
    .bind("click", function () {
      this.src =
        _PHP_URL + "/route.php?ac=validate_code&t=" + new Date().getTime();
    });

  //°ó¶¨ÆÀ¼Û±íµ¥Ìá½»°´Å¥
  $("#js_com_submit1").bind("click", function () {
    var obj = {};
    obj.imgcode = $("#code").val();
    obj.comment = $("#your_desc").val();
    obj.softid = $("#softid").val();
    obj.subject = _subject;
    var errorMsg = XZB.InsertRecomment(obj, function (res) {
      var result = eval("(" + res + ")");
      if (result.state == 1) {
        $("#code").val("");
        $("#your_desc").val("");
        alert("·¢±í³É¹¦!µ«ÐèÒªÐ¡±àÉóºË²ÅÏÔÊ¾Å¶¡£");
        window.location.href =
          window.location.href + "&gc=" + new Date().getTime() + "#warp";
      } else {
        alert(result.msg);
      }
      $("#js_img_code").attr(
        "src",
        _PHP_URL + "/route.php?ac=validate_code&t=" + new Date().getTime()
      );
    });

    if (errorMsg != "") {
      alert(errorMsg);
    }
  });

  //°ó¶¨»Ø¸´±íµ¥Ìá½»°´Å¥
  $("#js_com_submit2").live("click", function () {
    var obj = {};
    obj.imgcode = $("#code2").val();
    obj.comment = $("#your_desc2").val();
    obj.softid = $("#softid").val();
    obj.quote_id = $("#com_alert").val();
    obj.subject = _subject;
    var errorMsg = XZB.InsertRecomment(obj, function (res) {
      var result = eval("(" + res + ")");
      if (result.state == 1) {
        $("#code2").val("");
        $("#your_desc2").val("");
        alert("¸ÇÂ¥³É¹¦!µ«ÐèÒªÐ¡±àÉóºË²ÅÏÔÊ¾Å¶¡£");
        window.location.reload();
      } else {
        errorbox.show();
        errorbox.html(result.msg);
      }
      $("#js_img_code").attr(
        "src",
        _PHP_URL + "/route.php?ac=validate_code&t=" + new Date().getTime()
      );
    });
    if (errorMsg != "") {
      alert(errorMsg);
    }
  });

  var focused = false,
    oldTime = false;
  $(".inp-vcode").live("focus", function () {
    var t = new Date().getTime(),
      vImg = $(this).parent().find(".img-code"),
      vUrl = vImg.attr("data");
    if (oldTime && t - oldTime > 180000) {
      focused = false;
    }
    if (!focused) {
      vImg.attr("src", vUrl + "&" + t).show();
      oldTime = t;
    }
    vImg.click(function () {
      $(this).attr("src", vUrl + "&" + new Date().getTime());
      oldTime = t;
      focused = true;
    });
  });
});

/*
page: http://www.zheerxia.com/
url: http://www.zheerxia.com/static/js/xzb.js?v=2
*/
