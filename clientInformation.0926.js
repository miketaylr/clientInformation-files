/*_combo_cut*/ define("statics/zhe/index/js/startIndexFirstPage", function (s) {
  s("statics/zhe/index/js/drawUserInfo"),
    s("statics/zhe/common/js/ju/similarDealPage"),
    s("statics/zhe/index/js/indexNav"),
    s("statics/zhe/index/js/syncUserVer"),
    s("statics/zhe/index/js/addFavorite"),
    s("statics/zhe/index/js/navPop"),
    s("statics/zhe/search/js/sidePop"),
    s("statics/zhe/index/js/index_hot_brand"),
    s("statics/zhe/index/js/initFlashSale"),
    s("statics/zhe/index/js/loadIndexDeal"),
    s("statics/zhe/index/js/indexBg"),
    s("statics/zhe/index/js/exposure_index"),
    s("statics/zhe/components/outDialog/index"),
    s("statics/zhe/index/js/initFlashSale");
});
/*_combo_cut*/ define("statics/zhe/components/bindPhone/index", function (
  t,
  i,
  n
) {
  function e(t) {
    this.opts = t || {};
  }
  function a(t) {
    return r ? r : (r = new e(t));
  }
  function c(t) {
    var i = a();
    i.render(t);
  }
  var o = {
      tip: function (t, i, n) {
        var e = this.parents(".item").removeClass(
          "msg_zt1 msg_zt2 msg_zt3 msg_zt4"
        );
        this.siblings(".msg_box").remove(),
          t !== !0 &&
            e
              .addClass("msg_zt" + t)
              .append(
                '<div class="msg_box row' +
                  n +
                  '"><em></em><span class="msg">' +
                  i +
                  "</span></div>"
              );
      },
      isMobile: function (t) {
        return t ? (/^1\d{10}$/.test(t) ? void 0 : 2) : 1;
      },
      isPcode: function (t) {
        return t ? void 0 : 1;
      },
      getCaptcha: function (t) {
        $.ajax("//acode.tuanimg.com/captcha/get_image?jsonp=1&callback=?", {
          type: "GET",
          cache: !1,
          dataType: "jsonp",
          jsonpCallback: "jsonp_callback",
          success: function (i) {
            var n = { captcha_keywords: i.keywords, captcha_img: i.url };
            t(!0, n);
          },
          error: function () {
            var i = { captcha_keywords: "", captcha_img: "" };
            t(!1, i);
          },
          complete: function () {},
        });
      },
    },
    s = {
      quizVeriCode: function () {
        var t = this;
        t.val() ? t.inputNotip() : t.inputError("è¯·è¾å¥ç­ä¿¡éªè¯ç ");
      },
      quizMobile: function () {
        var t = this;
        switch (o.isMobile(t.val())) {
          case 1:
            return t.inputError("è¯·è¾å¥ææºå·");
          case 2:
            return t.inputError("ææºå·ç æ ¼å¼éè¯¯");
          default:
            return t.inputCorrect();
        }
      },
    };
  $.extend(
    $.fn,
    {
      inputWarn: function (t, i) {
        o.tip.call(this, 1, t, i || 1);
      },
      inputError: function (t, i) {
        o.tip.call(this, 3, t, i || 1);
      },
      inputChangebind: function (t, i) {
        o.tip.call(this, 4, t, i || 1);
      },
      inputCorrect: function () {
        o.tip.call(this, 2, "", 1);
      },
      inputNotip: function () {
        o.tip.call(this, !0);
      },
    },
    s,
    {
      sendMobileCode: function (t, i, n) {
        var e = "",
          n = ($(this), n || new Function());
        if (i)
          for (var a in i) i.hasOwnProperty(a) && (e += "&" + a + "=" + i[a]);
        $.getScript(
          "https://passport.tuan800.com/api/bind_mobiles/phone_confirmations?phone_number=" +
            $("#mobil").val() +
            "&source=zhe800&id=" +
            new Date().valueOf() +
            e +
            "&type=force_unbind",
          {
            callback: function () {
              var t = window.result || {};
              switch (t.status) {
                case 1:
                  $(".captcha_err").html("");
                  break;
                case 2:
                  return $("#mobil").inputError(t.message), n(t);
                case 3:
                  return $("#mobil").inputError(t.message), n(t);
                case 4:
                  return $("#mobil").inputError(t.message), n(t);
                case 5:
                  return $("#mobil").inputError(t.message), n(t);
                case 10:
                  return $("#mobil").inputError(t.message), n(t);
                case 11:
                  return $("#mobil").inputError(t.message), n(t);
                case 200:
                  $("#mobil").inputChangebind(t.message);
                  break;
                case 401:
                  return $(".captcha_err").html(t.message), n(t);
                case 402:
                  return void $(".captcha_err").html(t.message);
                case 403:
                  return $("#mobil").inputChangebind(t.message), n(t);
              }
            },
            cache: "false",
          }
        );
      },
    }
  ),
    (e.prototype = {
      checkin_status: {},
      bindPhoneTpl: function () {
        var t = this,
          i = new $.Buffers(),
          n = t.checkin_status.ck_times;
        if ((i.append('<div class="bangdtit">'), t.opts.titTxt))
          i.append("<h3>" + t.opts.titTxt + "</h3>");
        else if (0 === n)
          i.append("<h3>ä¸ºäºç»§ç»­ç­¾å°ï¼è¯·å¡«åæ¨çææºå·å®æå®å¨éªè¯</h3>");
        else {
          var e = $.parseJSON(Base64.decode($.cookie("ppinf").split("|")[3]))
            .regt;
          0 == e
            ? i.append("<h3>ç»å®ææºæ´å®å¨ï¼ç«å»å°±å¾5ç§¯åï¼</h3>")
            : 1 == e &&
              i.append(
                "<h3>æ¨è¿æªç»å®ææºï¼å¿«æ¥ç»å®å§ï¼å®æç»å®åç»å½æ800æ´æ¹ä¾¿ã</h3>"
              );
        }
        return (
          i.append("</div>"),
          i.append('<div class="reg_box clear">'),
          i.append('<div class="item">'),
          i.append(
            '<label>ææºå·ï¼</label><input type="text" class="itext1" id="mobil">'
          ),
          i.append("</div>"),
          i.append('<div class="item i_code">'),
          i.append("<label>ç­ä¿¡éªè¯ç ï¼</label>"),
          i.append('<input type="text" class="itext2" id="validCodeP">'),
          i.append(
            '<span class="i_codeP"><a class="send-idf" href="javascript:void(0);">è·åéªè¯ç </a></span>'
          ),
          i.append("</div>"),
          i.append(
            '     <div id="phone_img_captcha_box" style="display:none;" class="captcha_box_new token" data-allow-captcha="no">'
          ),
          i.append(
            '         <input type="hidden" name="captcha_keywords" value="" />'
          ),
          i.append(
            '         <input type="text" name="captcha_img" value="" title="éªè¯ç " onfocus="this.value==this.title?this.value=\'\':null" onblur="this.value==\'\'?this.value=this.title:null" autocomplete="off" disableautocomplete="" /><img class="captcha-img captchaImg" src=""/>'
          ),
          i.append('<span class="changeImg">æ¢ä¸å¼ </span>'),
          i.append('<span class="captcha_err"></span>'),
          i.append("     </div>"),
          i.append('<div class="item i_txt">'),
          i.append(
            '<input type="button" class="tbtn btn" id="reg_submit_i" value="ç¡®è®¤">'
          ),
          0 !== n &&
            t.opts.btnTxt &&
            i.append(
              '<a class="nextbind" href="javascript:void(0)">' +
                t.opts.btnTxt +
                "</a>"
            ),
          i.append("</div>"),
          i.append("</div>"),
          i.toString()
        );
      },
      bindPhoneSugTpl: function () {
        var t = new $.Buffers();
        return (
          t.append('<div class="bangdok">'),
          t.append("<h3>æ­åï¼ææºå·ç»å®æåã</h3>"),
          t.append(" </div>"),
          t.toString()
        );
      },
      render: function (t, i) {
        var n = this;
        "object" == typeof t && (this.opts = t),
          this.opts.isCheckin
            ? (PubSub.onece("get_signin", function (t) {
                n.checkin_status = t;
              }),
              n.draw(t, i))
            : this.draw(t, i);
      },
      draw: function (t, i) {
        var n = this;
        (n.phoneSource = i ? i : ""),
          setTimeout(function () {
            function t() {
              o.getCaptcha(function (t, n) {
                t
                  ? (i.attr("data-allow-captcha", "yes"),
                    i.find("img.captcha-img").attr("src", n.captcha_img),
                    i
                      .find('input[name="captcha_keywords"]')
                      .val(n.captcha_keywords),
                    i.show())
                  : i.inputError("è¯·éæ°è·åææºå¨æç ");
              });
            }
            $.Dialogs({
              id: "dialog_bdsj_bangding",
              overlay: !0,
              msg: n.bindPhoneTpl(),
              auto: !1,
              closefun: function () {
                "function" == typeof n.opts.closeCallBack
                  ? n.opts.closeCallBack()
                  : "",
                  $(".dialog-overlay").remove();
              },
            });
            var i = $("#phone_img_captcha_box");
            t(),
              i
                .find("img.captcha-img, .changeImg")
                .off("click.captcha")
                .on("click.captcha", function () {
                  t();
                });
            var e = $("#reg_submit_i");
            n.inputEvent(),
              n.getMobileCode($(".send-idf"), $("#mobil")),
              e.click(function (t) {
                t.preventDefault(),
                  n.Checkout(),
                  n.opts.registerCallback && n.opts.registerCallback();
              }),
              0 !== $("a.nextbind").length &&
                $("a.nextbind").click(function () {
                  $("#dialog_bdsj_bangding .close").trigger("click"),
                    n.opts.callBack
                      ? n.opts.callBack()
                      : PubSub.fire("bindPhone_next");
                });
          }, 200);
      },
      inputEvent: function () {
        var t = [$("#mobil"), $("#validCodeP")],
          i = [
            {
              focus: function () {
                $(this).inputWarn(
                  "ä¸ºäºæ¨çå®å¨ï¼è¯·ç¡®ä¿ç»å®ææºå·æ¯æ¨ççå®ææº",
                  1
                ),
                  $("#reg_submit_i").inputNotip();
              },
              blur: function () {
                $(this).quizMobile();
              },
            },
            {
              focus: function () {
                $(this).inputNotip(), $("#reg_submit_i").inputNotip();
              },
              blur: function () {
                $(this).quizVeriCode();
              },
            },
          ];
        $.each(t, function (t, n) {
          n.live(i[t]);
        });
      },
      Checkout: function () {
        var t = [$("#mobil"), $("#validCodeP")];
        $.each(t, function (t, i) {
          i.trigger("blur");
        }),
          $(".reg_box").find(".msg_zt3")[0] || this.submitForm();
      },
      submitForm: function () {
        var t = this;
        $.getScript(
          "https://passport.tuan800.com/api/bind_mobiles/bind_and_unbind?phone_number=" +
            $("#mobil").val() +
            "&phone_confirmation=" +
            $("#validCodeP").val(),
          {
            callback: function () {
              var i = window.result || {};
              switch (i.status) {
                case 200:
                  $.cookie("ppinf") &&
                    ($("#reg_submit_i").inputNotip(),
                    $("#dialog_bdsj_bangding .close").trigger("click"),
                    t.opts.confirmCallback
                      ? t.opts.confirmCallback()
                      : $.Dialogs({
                          overlay: !0,
                          id: "dialog_bdsj_bangding",
                          msg: t.bindPhoneSugTpl,
                          auto: !0,
                          times: 3,
                          closefun: function () {
                            PubSub.fire("bindPhone_suc");
                          },
                        }),
                    t.opts.bindSucCallBack && t.opts.bindSucCallBack());
                  break;
                case 401:
                  return $("#validCodeP").inputError(i.message);
                case 402:
                  return $("#reg_submit_i").inputError(i.message);
                case 10:
                  return $("#reg_submit_i").inputError(i.message);
                case 403:
                  return $("#mobil").inputChangebind(i.message);
                case 404:
                  return $("#mobil").inputError(i.message);
                case 400:
                  return $("#mobil").inputError(i.message);
                default:
                  $("#reg_submit_i").inputNotip();
              }
            },
            cache: "false",
          }
        );
      },
      addTimeout: function (t, i, n, e) {
        var a = new Function(),
          c = null;
        return (
          (e = e || a),
          (n = n || a),
          window.setInterval(function () {
            return 0 === t--
              ? (e.call(window, t), window.clearInterval(c))
              : void n.call(window, t);
          }, i)
        );
      },
      getMobileCode: function (t, i) {
        var n = (new Function(), !0),
          e = null,
          a = this,
          c = 60,
          s = 1e3;
        $(".send-idf")
          .unbind()
          .bind("click", function () {
            if (n) {
              var r = null,
                p = $("#phone_img_captcha_box"),
                l = p.find(".captcha_err");
              if ("yes" === p.attr("data-allow-captcha")) {
                if (
                  ((r = {}),
                  (r.hasCaptcha = !0),
                  (r.captcha = p.find('input[name="captcha_img"]').val()),
                  (r.captcha_keywords = p
                    .find('input[name="captcha_keywords"]')
                    .val()),
                  !r.captcha || "éªè¯ç " == r.captcha)
                )
                  return void l.html("è¯·è¾å¥æ­£ç¡®çéªè¯ç ");
                l.html("");
              }
              switch (((i = $("#mobil")), o.isMobile(i.val()))) {
                case 1:
                  return i.inputError("è¯·è¾å¥ææºå·");
                case 2:
                  return i.inputError("ææºå·ç æ ¼å¼éè¯¯");
                default:
                  (e = a.addTimeout(
                    c,
                    s,
                    function (t) {
                      $(".send-idf")
                        .html("" + (10 > t ? "0".concat(t) : t) + "ç§åéæ°åé")
                        .css({
                          cursor: "default",
                          "background-position": "0 -208px",
                        }),
                        $(".reg_box .item .i_codeP a").css("width", "120px"),
                        (n = !1);
                    },
                    function () {
                      clearInterval(e),
                        (n = !0),
                        (counter = c),
                        $(".send-idf")
                          .html("è·åéªè¯ç ")
                          .css({
                            cursor: "pointer",
                            "background-position": "0 -142px",
                          }),
                        $(".reg_box .item .i_codeP a").css("width", "84px");
                    }
                  )),
                    $("#dialog_bdsj_bangding")
                      .find(".close")
                      .bind("click", function () {
                        clearInterval(e),
                          (n = !0),
                          (counter = c),
                          $(".send-idf")
                            .html("è·åéªè¯ç ")
                            .css({ "background-position": "0 -142px" }),
                          $(".reg_box .item .i_codeP a").css("width", "84px");
                      }),
                    t.sendMobileCode(i.val(), r, function () {
                      clearInterval(e),
                        (n = !0),
                        (counter = c),
                        $(".send-idf")
                          .html("è·åéªè¯ç ")
                          .css({ "background-position": "0 -142px" }),
                        $(".reg_box .item .i_codeP a").css("width", "84px");
                    });
              }
            }
          });
      },
    });
  var r = null;
  n.exports = { BindPhone: e, render: c, getInstance: a };
});
/*_combo_cut*/ define("statics/zhe/components/bindemailDialog/index", function (
  i,
  e
) {
  function n() {
    if (!$("#bind_email").length) {
      var i = new $.Buffers(),
        e = $('<div id="bind_email"></div>'),
        n = $(window);
      i.push(
        '<div class="inner"> <a href="javascript:void(0)" class="icon-close close"></a> <div class="bd"> <p>ç»å®é®ç®±å¯è·å¾<em>10ç§¯å</em>å¦~</p> <div class="triggers"> <a href="//www.zhe800.com/hd/firsttask/emailandmobile" target="_blank" class="btn">ç«å³å»ç»å®</a> <a href="javascript:void(0)" class="next_time">ä¸æ¬¡ç»å®</a> </div> </div> </div>'
      ),
        e.html(i.toString()),
        $("body").append(e),
        e.css({ top: (n.height() - e.height()) / 2 }),
        e.on("click", ".close", function (i) {
          i.preventDefault(), e.remove();
        }),
        e.find(".next_time").bind("click", function (i) {
          i.preventDefault(), e.find(".close").trigger("click");
        });
    }
  }
  e.render = n;
});
/*_combo_cut*/ define("statics/zhe/components/loginPassportCard/pwdLogin/tpl.ejs", function (
  require,
  exports,
  module
) {
  function render(data) {
    var __p = [],
      _p = function (t) {
        __p.push(t);
      };
    with (data)
      _p(
        '<div id="login-pwd">\r\n  	<form method="post" id="login-pwd-form" onsubmit="return PassportCardList['
      ),
        _p(__e(index)),
        _p(
          '].doLogin();" name="loginform">\r\n          <ul class="inputitem">\r\n              <li class="liitem">\r\n                  <input value="é®ç®±/ææºå·/ç¨æ·å" title="é®ç®±/ææºå·/ç¨æ·å" onfocus="this.value==this.title?this.value=\'\':null" onblur="this.value==\'\'?this.value=this.title:null" id="ddusername" name="username" type="text" autocomplete="off" disableautocomplete="" />\r\n              </li>\r\n              <li class="liitem">\r\n                  <input id="pwdLogin-pwd" value="" name="password" type="password" autocomplete="off" disableautocomplete="" />\r\n                  <input id="pwdLogin-pwd-placeholder" value="è¯·è¾å¥å¯ç " autocomplete="off" disableautocomplete="" />\r\n              </li>\r\n              <li>\r\n                  <div id=\'pwd-validate\'></div>\r\n              </li>\r\n              <li class="liitem">\r\n                  <input type="submit" class="pwdlogin-submit" value="ç«å³ç»å½" onfocus="this.blur()" alt="ç» å½" title="ç» å½"/>\r\n                  <div class="error"></div>\r\n              </li>\r\n          </ul>\r\n  	</form>\r\n  </div>'
        );
    return __p.join("");
  }
  var __a = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    },
    __b = /[&<>"']/g,
    __e = function (t) {
      return (
        (t = String(t)),
        t.replace(__b, function (t) {
          return __a[t];
        })
      );
    };
  module.exports = render;
});
/*_combo_cut*/ define("statics/zhe/components/loginPassportCard/imgcaptchatpl.ejs", function (
  require,
  exports,
  module
) {
  function render(data) {
    var __p = [],
      _p = function (t) {
        __p.push(t);
      };
    with (data)
      _p(
        '<input type="text" class="captchaImgInput" value="éªè¯ç " title="éªè¯ç " onfocus="this.value==this.title?this.value=\'\':null" onblur="this.value==\'\'?this.value=this.title:null" name="captcha" autocomplete="off" disableautocomplete="">\r\n  <img class="captchaImg" src="'
      ),
        _p(__e(imgsrc)),
        _p('">\r\n  <span class="changeImg">æ¢ä¸å¼ </span>\r\n  ');
    return __p.join("");
  }
  var __a = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    },
    __b = /[&<>"']/g,
    __e = function (t) {
      return (
        (t = String(t)),
        t.replace(__b, function (t) {
          return __a[t];
        })
      );
    };
  module.exports = render;
});
/*_combo_cut*/ define("statics/zhe/common/js/stat/picstat", function (e, t, o) {
  function i(e, t) {
    var o = [];
    if (t) for (var i in t) t.hasOwnProperty(i) && o.push(i + "=" + t[i]);
    t.hiveid || o.push("hiveid=" + n()),
      o.push("clsct=" + new Date().getTime()),
      (o = o.join("&"));
    var s = document.createElement("img");
    (s.src = "//analysis.tuanimg.com/" + e + ".gif?" + o),
      (s.onload = function () {
        $(this).remove();
      }),
      document.body.appendChild(s);
  }
  function n() {
    var e = "";
    try {
      e = $.cookie("__utma").split(".")[1] + $.cookie("__utma").split(".")[2];
    } catch (t) {
      console && console.error && console.error(t.message);
    }
    return e;
  }
  o.exports = { doStat: i, getHiveid: n };
});
/*_combo_cut*/ define("statics/zhe/common/js/validate/validator", function (
  t,
  i,
  a
) {
  var o = function (t) {
    $.extend(
      this,
      {
        init: function () {},
        validate: function () {},
        refresh: function () {},
        validateStatus: 0,
        validateUrl:
          window.location.protocol + "//acode.zhe800.com/t/verify/do_validate",
        statOpts: { alitimes: 1, alitoken: "" },
      },
      t
    );
  };
  a.exports = o;
});
/*_combo_cut*/ define("statics/zhe/common/js/validate/aliyunValidator", function (
  t,
  a,
  e
) {
  var i = t("statics/zhe/common/js/validate/validator"),
    n = function (t) {
      var a = new i({
        validateStatus: 0,
        init: function (t) {
          var a = this;
          if (($.extend(this, t), (t.ins = this), window.noCaptcha))
            s(t, function (t) {
              a.validateSuc(t);
            });
          else {
            $("#_umfp").length ||
              $("body").append(
                '<div id="_umfp" style="display:inline;width:1px;height:1px;overflow:hidden"></div>'
              );
            var e = new Date().getTime();
            $("head").append(
              '<link type="text/css" href="' +
                window.location.protocol +
                "//g.alicdn.com/sd/ncpc/nc.css?t=" +
                e +
                '" rel="stylesheet"/>'
            ),
              $.getScript(
                window.location.protocol +
                  "//g.alicdn.com/sd/ncpc/nc.js?t=" +
                  e,
                function () {
                  s(t, function (t) {
                    a.validateSuc(t);
                  });
                }
              );
          }
        },
        validate: function (t) {
          var t = $.extend(
            { success: function () {}, error: function () {} },
            t
          );
          if (!this.validateStatus || !this.validateData)
            return void t.error({ msg: "è¯·å®ææ»åéªè¯" });
          var a = {
            aliyun_csessionid: this.validateData.csessionid,
            aliyun_sig: this.validateData.sig,
            aliyun_token: this.validateData.token,
            aliyun_scene: this.nc_scene,
            validate_token: this.parent.validate_data.validate_token,
          };
          this.parent.validate_data.business_code &&
            (a.business_code = this.parent.validate_data.business_code),
            $.ajax({
              url: this.validateUrl,
              type: "GET",
              dataType: "JSONP",
              jsonpCallback: "validateAliyun" + new Date().getTime(),
              data: a,
              success: function (a) {
                1 == a.status
                  ? t.success(a)
                  : t.error({ msg: a.msg.error_content });
              },
              error: function () {
                t.error({ msg: "ç½ç»éè¯¯" });
              },
            });
        },
        refresh: function () {
          (this.validateStatus = 0), (this.validateData = null);
          var t = this;
          s(this, function (a) {
            t.validateSuc(a);
          });
        },
      });
      return (
        (a.validateSuc = function (t) {
          (this.validateStatus = 1), (this.validateData = t);
          try {
            this.validateSucFn &&
              "function" == typeof this.validateSucFn &&
              this.validateSucFn();
          } catch (a) {
            console.log(a);
          }
        }),
        (a.parent = t),
        a
      );
    },
    s = function (t, a) {
      var e = new noCaptcha(),
        i = t.afs_appkey,
        n = t.nc_scene,
        s = [i, new Date().getTime(), Math.random()].join(":");
      t.ins.statOpts.alitoken = s;
      var c = {
        renderTo: t.renderTo,
        appkey: i,
        scene: n,
        token: s,
        callback: function (t) {
          a(t);
        },
        verifycallback: function () {
          t.ins.statOpts.alitimes = 2;
        },
      };
      e.init(c);
    };
  e.exports = { createIns: n };
});
/*_combo_cut*/ define("statics/zhe/common/js/validate/imgValidator", function (
  t,
  a,
  e
) {
  var s = t("statics/zhe/common/js/validate/validator"),
    n = function (t) {
      var a = new s({
        validateStatus: 1,
        init: function (t) {
          $.extend(this, t), t.success(this.parent.validate_data);
        },
        validate: function (t) {
          var t = $.extend(
            { success: function () {}, error: function () {} },
            t
          );
          if (!t.content) return void t.error({ msg: "è¯·å¡«åéªè¯ç " });
          var a = {
            validate_token: this.parent.validate_data.validate_token,
            content: t.content,
          };
          this.parent.validate_data.business_code &&
            (a.business_code = this.parent.validate_data.business_code),
            console.log(a),
            $.ajax({
              url: this.validateUrl,
              type: "GET",
              dataType: "JSONP",
              jsonpCallback: "validateImg",
              data: a,
              success: function (a) {
                1 == a.status
                  ? t.success(a)
                  : t.error({ msg: a.msg.error_content });
              },
              error: function () {
                t.error({ msg: "ç½ç»éè¯¯" });
              },
            });
        },
        refresh: function (t) {
          var a = { source_type: this.parent.source_type, validate_type: 2 };
          this.parent.validate_data.business_code &&
            (a.business_code = this.parent.validate_data.business_code);
          var e = this;
          $.ajax({
            url:
              window.location.protocol +
              "//acode.zhe800.com/t/verify/get_token",
            type: "GET",
            dataType: "JSONP",
            jsonpCallback: "validateRefreshImgToken" + +new Date().getTime(),
            data: a,
            success: function (a) {
              a &&
                1 == a.status &&
                ((e.parent.validate_data.validate_token = a.validate_token),
                $.extend(e.parent.validate_data, a.validate_adds),
                t(a.validate_adds));
            },
          });
        },
      });
      return (a.parent = t), a;
    };
  e.exports = { createIns: n };
});
/*_combo_cut*/ define("statics/zhe/common/js/validate/geetestValidator", function (
  e,
  t,
  a
) {
  var i = e("statics/zhe/common/js/validate/validator");
  window.initGeetestFunction = function () {
    o();
  };
  var n = {},
    s = null,
    c = function (e) {
      var t = new i({
        validateStatus: 0,
        init: function (e) {
          $.extend(n, e),
            window.Geetest
              ? window.initGeetestFunction()
              : $("body").append(
                  '<script id="geetest_js" async=true src="' +
                    window.location.protocol +
                    '//api.geetest.com/get.php?callback=initGeetestFunction"></script>'
                );
        },
        validate: function (e) {
          var e = $.extend(
            { success: function () {}, error: function () {} },
            e
          );
          if (!this.validateStatus || !this.validateData)
            return void e.error({ msg: "è¯·å®ææ»åéªè¯" });
          var t = {
            validate_token: this.parent.validate_data.validate_token,
            geetest_validate: this.validateData.geetest_validate,
            geetest_seccode: this.validateData.geetest_seccode,
            geetest_challenge: this.validateData.geetest_challenge,
          };
          this.parent.validate_data.business_code &&
            (t.business_code = this.parent.validate_data.business_code),
            console.log(t),
            $.ajax({
              url: this.validateUrl,
              type: "GET",
              dataType: "JSONP",
              jsonpCallback: "validateGeeTest" + +new Date().getTime(),
              data: t,
              success: function (t) {
                1 == t.status
                  ? e.success(t)
                  : e.error({ msg: t.msg.error_content });
              },
              error: function () {
                e.error({ msg: "ç½ç»éè¯¯" });
              },
            });
        },
      });
      return (t.parent = e), (s = t), t;
    },
    o = function () {
      (s.embed_captcha = window
        .Geetest({ gt: n.gt, product: n.product || "float" })
        .appendTo($(n.renderTo))),
        s.embed_captcha.onSuccess(function () {
          (s.validateStatus = 1),
            s.embed_captcha.hideRefresh(),
            (s.validateData = s.embed_captcha.getValidate());
          try {
            n.validateSucFn &&
              "function" == typeof n.validateSucFn &&
              n.validateSucFn();
          } catch (e) {
            console.log(e);
          }
        });
    };
  a.exports = { createIns: c };
});
/*_combo_cut*/ define("statics/zhe/common/js/validate/validate", function (
  t,
  e,
  a
) {
  var s = t("statics/zhe/common/js/validate/aliyunValidator"),
    i = t("statics/zhe/common/js/validate/imgValidator"),
    o = t("statics/zhe/common/js/validate/geetestValidator"),
    n = function (t) {
      var t = $.extend({}, t);
      if (void 0 === t.source_type || null === t.source_type)
        throw new Error("source_type ä¸ºå¿é¡»åæ°");
      (this.source_type = t.source_type),
        (this.business_code = t.business_code || ""),
        (this.validate_type = t.validate_type || ""),
        (this.validate_data = { business_code: this.business_code }),
        (this.validator = null),
        this.getToken(t);
    };
  (n.prototype.getToken = function (t) {
    var t = $.extend({ success: function () {}, error: function () {} }, t),
      e = { source_type: this.source_type };
    this.business_code && (e.business_code = this.business_code);
    var a = this;
    return (
      $.ajax({
        url: window.location.protocol + "//acode.zhe800.com/t/verify/get_token",
        type: "GET",
        dataType: "JSONP",
        jsonpCallback: "validateGetToken" + new Date().getTime(),
        data: e,
        success: function (e) {
          e && 1 == e.status
            ? ((a.validate_type = e.validate_type),
              (a.validate_data.validate_token = e.validate_token),
              $.extend(a.validate_data, e.validate_adds),
              a.initValidator(),
              t.success(e))
            : t.error(e);
        },
        error: function (e) {
          t.error(e);
        },
      }),
      this
    );
  }),
    (n.prototype.initValidator = function () {
      switch (this.validate_type) {
        case 1:
          this.validator = o.createIns(this);
          break;
        case 2:
          this.validator = i.createIns(this);
          break;
        case 6:
          this.validator = s.createIns(this);
      }
      return this;
    }),
    (a.exports = n);
});
/*_combo_cut*/ define("statics/zhe/common/js/validate/validateStat", function (
  t,
  a,
  e
) {
  var o = function (t) {
    try {
      $.ajax({
        type: "GET",
        url:
          "https://passport.zhe800.com/j/users/record_aliyun_token?token=" +
          t.validator.statOpts.alitoken +
          "&type=" +
          t.type +
          "&time=" +
          t.validator.statOpts.alitimes,
        dataType: "JSONP",
      });
    } catch (a) {
      console.log(a);
    }
  };
  e.exports = o;
});
/*_combo_cut*/ define("statics/zhe/components/loginPassportCard/pwdLogin/index", function (
  t,
  i,
  e
) {
  function n(t, i, e) {
    {
      var n = (e.t || this, PassportCardList[t]);
      e.ttl || "";
    }
    (u = n),
      (n.rootElement = function () {
        (this.cElement = i),
          (this.sElement = i
            .after('<div id="pwdDologin" class="hidden"></div>')
            .next());
      }),
      (n._drawLoginForm = function () {
        this.cElement.html(r({ index: t })), (n.validateIns = s()), o();
      }),
      (n.drawPassportWait = function () {
        $(".pwdlogin-submit")
          .unbind()
          .click(function () {
            return !1;
          });
      }),
      (n._drawPassportCard = function () {
        PubSub.fire("login_s1_callback");
      }),
      (n.loginApp = function () {
        if (
          (n.validateIns &&
            6 == n.validateIns.validate_type &&
            c({ type: 1, validator: n.validateIns.validator }),
          PubSub.fire("user_change"),
          $.getParm().return_to)
        ) {
          var t = $.getParm().return_to;
          return (
            $.cookie("crossdomain", PassportSC.getTime(), {
              path: "/",
              expires: 1,
            }),
            (window.returnToCenter = function () {
              window.location.href = decodeURIComponent(t);
            }),
            setTimeout(window.returnToCenter, 2e3),
            !1
          );
        }
      }),
      (n.logoutApp = function () {
        PubSub.fire("user_change");
      }),
      (n.showMsg = function (t) {
        this.loginMsg &&
          ("é®ç®±æªæ¿æ´»" == t &&
            (t += ',<span class="comfir_mail">å»æ¿æ´»é®ç®±</span>'),
          this.loginMsg.html(t).show());
      }),
      (n.doLogin = function () {
        if (this.eInterval) return !1;
        try {
          arguments[0] && PassportCardList[t].doLogin(),
            (this.intervalCount = 0),
            this.sElement.empty(),
            (this.loginParams = {});
          var i = $("#login-pwd-form [name=username]"),
            e = $("#login-pwd-form [name=password]");
          if (
            ((this.loginParams.username = $.trim(i.val())),
            (this.loginParams.password = $.trim(e.val())),
            !this.loginParams.username ||
              this.loginParams.username == i.attr("title"))
          )
            return this.reportMsg("1"), i.focus(), !1;
          if (!this.loginParams.password)
            return this.reportMsg("4"), e.focus(), !1;
          var n = this,
            a = {
              success: function () {
                return n.loginHandle(
                  0,
                  n.sElement,
                  n.loginFailCall.bindFunc(n),
                  n.loginSuccessCall.bindFunc(n)
                );
              },
              error: function (t) {
                var i = t && t.msg;
                n.reportMsg("error", { message: i || "éªè¯å¤±è´¥" });
              },
            };
          if (2 == p.validate_type) {
            var o = $("#login-pwd-form .captchaImgInput");
            a.content = o.val() == o.attr("title") ? "" : o.val();
          }
          if (!p.validator)
            return void n.reportMsg("error", { message: "è¯·å®æéªè¯" });
          p.validator.validate(a);
        } catch (s) {
          console.log(s);
        } finally {
          return !1;
        }
      }),
      (n.loginHandle = function (t, i, e, n) {
        if ("object" != typeof i) return !1;
        if (0 == $.cookie()) return e(), !1;
        var a = $.getBrowserType(),
          o = screen.width;
        "" == this.domain && (this.domain = this.getDomain());
        var s = this.getTime(),
          r = this.md5pwd
            ? function () {
                return $.md5
                  ? $.md5(this.loginParams.password)
                  : this.loginParams.password;
              }
            : this.loginParams.password,
          l = {
            http: this.loginProtocal,
            url: this.loginURL,
            username: encodeURIComponent(this.loginParams.username),
            pwd_md5: encodeURIComponent(r),
            appid: this.appid,
            pc: t,
            s: s,
            b: a,
            w: o,
            version: this.version,
            popup: this.getusername(),
          },
          d = this.login_urltpl;
        try {
          "https" == this.loginProtocal && (d = this.logins_urltpl),
            (this.http_url = $.ParseTpl(d, l));
          var c = this.http_url;
        } catch (u) {
          "https" == this.loginProtocal && (d = this.https_urltpl),
            (this.http_url = $.ParseTpl(d, l));
          var c = this.http_url;
          window.console && console.info(u);
        }
        (c += "&domain=" + this.domain),
          (c += "&validate_token=" + p.validate_data.validate_token),
          (login_status = ""),
          (login_error_result = ""),
          (login_need_captcha = !1),
          $.getScript(c, !0);
        var g = this;
        return (
          (this.eInterval = setInterval(function () {
            g.loginIntervalProc(e, n, i);
          }, 100)),
          !1
        );
      }),
      n.drawPassport(i);
  }
  function a() {
    $("#pwdLogin-pwd-placeholder").focus(function () {
      $(this).hide(),
        $("#pwdLogin-pwd").show(),
        setTimeout(function () {
          $("#pwdLogin-pwd").focus();
        }, 10);
    }),
      $("#pwdLogin-pwd").blur(function () {
        var t = $(this);
        "" == t.val() && ($("#pwdLogin-pwd-placeholder").show(), t.hide());
      });
  }
  function o() {
    a();
    var t = !0;
    $("#login-pwd .error").delegate(".comfir_mail", "click", function () {
      {
        var i =
          "https://passport.zhe800.com/users/email_signed?email=" +
          encodeURIComponent($("#login-pwd #ddusername").val());
        $(this);
      }
      t &&
        ((t = !1),
        $.getScript(
          "https://passport.zhe800.com/api/ued/retries/send_active_email_confirmation?email=" +
            encodeURIComponent($("#login-pwd #ddusername").val()) +
            "&secret=" +
            encodeURIComponent(window.login_error_result.secret || ""),
          {
            callback: function () {
              window.location = i;
            },
          }
        ));
    }),
      $("#login-pwd .error").delegate(
        ".pwd-reloadValidate",
        "click",
        function () {
          s(), $("#login-pwd .error").html("");
        }
      );
  }
  function s() {
    return (p = new d({
      source_type: g,
      success: function (t) {
        6 == t.validate_type
          ? p.validator.init({
              renderTo: "#pwd-validate",
              nc_scene: "login",
              afs_appkey: t.validate_adds.afs_appkey,
              validateSucFn: function () {
                u.loginMsg.html("");
              },
            })
          : 1 == t.validate_type
          ? p.validator.init({
              renderTo: "#pwd-validate",
              gt: t.validate_adds.geetest_id,
            })
          : 2 == t.validate_type &&
            p.validator.init({
              success: function (t) {
                $("#pwd-validate").html(l({ imgsrc: t.image_url })),
                  setTimeout(function () {
                    $(
                      "#pwd-validate .changeImg,#pwd-validate .captchaImg"
                    ).bind("click", function () {
                      p.validator.refresh(function (t) {
                        $("#pwd-validate .captchaImg").attr("src", t.image_url);
                      });
                    });
                  }, 10);
              },
            });
      },
      error: function () {
        u.reportMsg("error", {
          message:
            'è·åéªè¯å¤±è´¥,<span class="pwd-reloadValidate">ç¹å»éè¯</span>',
        });
      },
    }));
  }
  var r = t("statics/zhe/components/loginPassportCard/pwdLogin/tpl.ejs"),
    l = t("statics/zhe/components/loginPassportCard/imgcaptchatpl.ejs"),
    d =
      (t("statics/zhe/common/js/stat/picstat"),
      t("statics/zhe/common/js/validate/validate")),
    c = t("statics/zhe/common/js/validate/validateStat"),
    p = null,
    u = null,
    g = "5";
  e.exports = { loginfun: n };
});
/*_combo_cut*/ define("statics/zhe/components/loginPassportCard/mobileLogin/tpl.ejs", function (
  require,
  exports,
  module
) {
  function render(data) {
    var __p = [],
      _p = function (t) {
        __p.push(t);
      };
    with (data)
      _p(
        '<div id="login-mobile">\r\n  	<form method="post" id="login-mobile-form" onsubmit="return PassportCardList['
      ),
        _p(__e(index)),
        _p(
          '].doLogin();" name="loginform">\r\n          <ul class="inputitem">\r\n              <li class="liitem">\r\n                  <input value="è¯·è¾å¥æ³¨åææºå·" title="è¯·è¾å¥æ³¨åææºå·" onfocus="this.value==this.title?this.value=\'\':null" onblur="this.value==\'\'?this.value=this.title:null" id="mobileusername" name="username" type="text" autocomplete="off" disableautocomplete="" />\r\n              </li>\r\n              <li>\r\n                  <div id=\'mobile-validate\'></div>\r\n              </li>\r\n              <li class="liitem">\r\n                  <input value="å¨æå¯ç " class="dynamicPwd" title="å¨æå¯ç "  name="password" onfocus="this.value==this.title?this.value=\'\':null" onblur="this.value==\'\'?this.value=this.title:null" type="text" autocomplete="off" disableautocomplete="" />\r\n                  <input type="button" class="dynamicBtn" value="è·åå¨æå¯ç " title="è·åå¨æå¯ç ">\r\n              </li>\r\n              <li class="liitem">\r\n                  <input type="submit" class="mobilelogin-submit" value="ç«å³ç»å½" onfocus="this.blur()" alt="ç» å½" title="ç» å½"/>\r\n                  <div class="error"></div>\r\n              </li>\r\n          </ul>\r\n  	</form>\r\n  </div>'
        );
    return __p.join("");
  }
  var __a = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    },
    __b = /[&<>"']/g,
    __e = function (t) {
      return (
        (t = String(t)),
        t.replace(__b, function (t) {
          return __a[t];
        })
      );
    };
  module.exports = render;
});
/*_combo_cut*/ define("statics/zhe/components/login_reg_dialog/registertpl.ejs", function (
  require,
  exports,
  module
) {
  function render(data) {
    var __p = [],
      _p = function (n) {
        __p.push(n);
      };
    with (data)
      _p(
        '<div class="login_reg_dialog_wrapper">\r\n      <a class="loglink" href="javascript:void(0)">ç«å³ç»å½</a>\r\n      <form method="post" name="regform">\r\n          <div class="signupnewbox">\r\n              <h3><span>æ³¨åæ800âäº«ç¬å®¶ææ£</span></h3>\r\n              <input type="hidden" id="reg_authenticity_token" value="">\r\n              <ul class="clear">\r\n                  <li class="name">\r\n                      <div class="liwrapper">\r\n                          <label>ææºå·ç </label>\r\n                          <input id="reg_mobile" type="text" class="txt1" value="è¯·è¾å¥å¸¸ç¨çææºå·" title="è¯·è¾å¥å¸¸ç¨çææºå·">\r\n                          <ins></ins>\r\n                      </div>\r\n                  </li>\r\n                  <li class="password">\r\n                      <div class="liwrapper">\r\n                          <label>è®¾ç½®å¯ç </label>\r\n                          <input id="txt_password" type="text" class="txt1" value="6-24ä½å­ç¬¦ï¼ä¸è½æ¯çº¯æ°å­">\r\n                          <input id="reg_password" type="password" class="txt1 change" value="" style="display:none" maxlength="24">\r\n                          <ins></ins>\r\n                      </div>\r\n                  </li>\r\n                  <li class="password">\r\n                      <div class="liwrapper">\r\n                          <label>ç¡®è®¤å¯ç </label>\r\n                          <input id="txt_confirmpwd" type="text" class="txt1" value="è¯·åæ¬¡è¾å¥å¯ç ">\r\n                          <input id="reg_confirmpwd" type="password" class="txt1 change" value="" style="display:none" maxlength="24">\r\n                          <ins></ins>\r\n                      </div>\r\n                  </li>\r\n                  <li class="validatepalceholder">\r\n                      <div id="validatewrapper"></div>\r\n                  </li>\r\n                  <li class="captcha_box token">\r\n                      <div class="liwrapper">\r\n                          <input id="reg_captcha" type="text" class="txt1" disableautocomplete="" autocomplete="off" name="captcha" title="éªè¯ç " value="éªè¯ç ">\r\n                      </div>\r\n                      <a id="send_reg_captcha" href="javascript:void(0)">åééªè¯ç </a>\r\n                  </li>\r\n                  <li class="btn">\r\n                      <input id="reg_submit" type="button" value="åæåè®®å¹¶æ³¨å" class="sign statisticalObject">\r\n                  </li>\r\n                  <li class="txt">\r\n                      <span>\r\n                          <a href="//www.zhe800.com/service_terms" target="_blank">ãæ800ç¨æ·æ³¨ååè®®ã</a>\r\n                      </span>\r\n                  </li>\r\n              </ul>\r\n          </div>\r\n      </form>\r\n  </div>'
      );
    return __p.join("");
  }
  module.exports = render;
});
/*_combo_cut*/ define("statics/zhe/components/login_reg_dialog/register", function (
  a,
  e,
  t
) {
  var r = a("statics/zhe/components/login_reg_dialog/registertpl.ejs"),
    s = a("statics/zhe/common/js/validate/validate"),
    l = a("statics/zhe/common/js/validate/validateStat"),
    n = "rTfi9q",
    o = null,
    d = function (a) {
      return (
        '<div class="liwrapper imgwrapper"><input type="text" class="imgwrapperinput" name="captcha_img" value="éªè¯ç " title="éªè¯ç " onfocus="this.value==this.title?this.value=\'\':null" onblur="this.value==\'\'?this.value=this.title:null" autocomplete="off" disableautocomplete=""></div><img class="captcha-img captchaImg" width="80" height="32" src="' +
        a +
        '"><span class="changeImg">æ¢ä¸å¼ </span>'
      );
    };
  t.exports = {
    tips: {
      MOBILE: {
        DEFAULT: "è¯·è¾å¥å¸¸ç¨çææºå·",
        NULL: "è¯·è¾å¥ææºå·",
        INVALID: "ææºå·æ ¼å¼éè¯¯",
        EXIST: "ææºå·å·²å­å¨",
      },
      CAPTCHA: {
        DEFAULT: "éªè¯ç ",
        NULL: "è¯·è¾å¥éªè¯ç ",
        INVALID: "éªè¯ç éè¯¯ï¼è¯·éè¯",
        MAXNUM: "åééªè¯ç è¿äºé¢ç¹ï¼è¯·ç¨ååè¯",
        ORIGIN: "åééªè¯ç ",
        REPEAT: "éåéªè¯ç ",
      },
      PASSWORD: {
        NULL: "è¯·è¾å¥å¯ç ",
        MINLENGTH: "å¯ç è¿ç­ï¼è¯·è¾å¥6-24ä½å­ç¬¦",
        MAXLENGTH: "å¯ç è¿é¿ï¼è¯·è¾å¥6-24ä½å­ç¬¦",
        NUMBER: "å¯ç ä¸è½ä½¿ç¨çº¯æ°å­",
        EMPTY: "å¯ç ä¸è½åå«ç©ºæ ¼",
      },
      CONFIRM: {
        NULL: "ç¡®è®¤å¯ç ä¸è½ä¸ºç©º",
        MINLENGTH: "å¯ç è¿ç­ï¼è¯·è¾å¥6-24ä½å­ç¬¦",
        MAXLENGTH: "å¯ç è¿é¿ï¼è¯·è¾å¥6-24ä½å­ç¬¦",
        NUMBER: "å¯ç ä¸è½ä½¿ç¨çº¯æ°å­",
        EMPTY: "å¯ç ä¸è½åå«ç©ºæ ¼",
        NOTEQUAL: "å¯ç ä¸ä¸è´ï¼è¯·éè¯",
      },
    },
    renderForm: function () {
      return r(!0);
    },
    addValidClass: function (a, e) {
      e
        ? (a.addClass("warn1"), a.removeClass("warn2"))
        : (a.addClass("warn2"), a.removeClass("warn1"));
    },
    addUpplerClass: function (a, e) {
      e ? a.addClass("warn3") : a.removeClass("warn3");
    },
    appendError: function (a, e) {
      a.find("span.err")
        .remove()
        .end()
        .append('<span class="err">' + e + "</span>");
    },
    isError: function (a, e) {
      return 1 === a.find("span.err").size() && a.find("span.err").text() === e
        ? !0
        : !1;
    },
    removeError: function (a) {
      a.find("span.err").remove();
    },
    isMobile: function (a) {
      var e = $.trim(a),
        t = { status: 1, msg: "" };
      return "" == e
        ? ((t.status = 1), t)
        : /^1\d{10}$/.test(e)
        ? ((t.status = 0), t)
        : ((t.status = 2), t);
    },
    checkMobile: function (a) {
      var e = this;
      a.focus(function () {
        $(this).val() == e.tips.MOBILE.DEFAULT && $(this).val(""),
          $(this).removeClass("change").addClass("change");
      }).blur(function () {
        var a = this,
          t = $(a).val(),
          r = $(a).parents("li");
        e.removeError(r),
          e.addValidClass(r, !0),
          0 === t.length || t == e.tips.MOBILE.DEFAULT
            ? (e.appendError(r, e.tips.MOBILE.NULL),
              $(a).val(e.tips.MOBILE.DEFAULT),
              e.addValidClass(r, !1),
              $(this).removeClass("change"))
            : 0 != e.isMobile(t).status
            ? (e.appendError(r, e.tips.MOBILE.INVALID), e.addValidClass(r, !1))
            : e.ajaxCheckMobile(t, function (a) {
                (a && 200 === a.status) ||
                  (400 == a.status
                    ? (e.appendError(
                        r,
                        e.tips.MOBILE.EXIST +
                          'ï¼<a class="loglink" href="javascript:void(0)">ç«å³ç»å½</a>'
                      ),
                      e.addValidClass(r, !1))
                    : (e.appendError(r, e.tips.MOBILE.INVALID),
                      e.addValidClass(r, !1)));
              });
      });
    },
    checkPassword: function (a, e, t, r) {
      var s = this;
      e.removeClass("change").addClass("change"),
        r.removeClass("change").addClass("change"),
        a.focus(function () {
          var a = this,
            e = $(a).next();
          $(a).hide(), e.val("").show().focus();
        }),
        t.focus(function () {
          var a = this,
            e = $(a).next();
          $(a).hide(), e.val("").show().focus();
        }),
        e
          .blur(function () {
            var a = this,
              e = $(a).val(),
              t = $(a).parents("li"),
              i = $(a).prev();
            s.removeError(t),
              s.addValidClass(t, !0),
              s.addUpplerClass(t, !1),
              0 === e.length
                ? ($(a).hide(),
                  i.show(),
                  s.appendError(t, s.tips.PASSWORD.NULL),
                  s.addValidClass(t, !1))
                : e.length < 6
                ? (s.appendError(t, s.tips.PASSWORD.MINLENGTH),
                  s.addValidClass(t, !1))
                : e.length > 24
                ? (s.appendError(t, s.tips.PASSWORD.MAXLENGTH),
                  s.addValidClass(t, !1))
                : /^\d+$/.test(e)
                ? (s.appendError(t, s.tips.PASSWORD.NUMBER),
                  s.addValidClass(t, !1))
                : r.val().length > 0 && r.trigger("blur");
          })
          .keyup(function () {
            var a = this,
              e = $(a).val(),
              t = $(a).parents("li");
            return /\s$/.test(e)
              ? (s.appendError(t, s.tips.PASSWORD.EMPTY),
                s.addValidClass(t, !1),
                void $(a).val(e.trim()))
              : (s.isError(t, s.tips.PASSWORD.EMPTY) &&
                  (s.removeError(t), s.addValidClass(t, !0)),
                void (/[A-Z]/.test(e)
                  ? s.addUpplerClass(t, !0)
                  : s.addUpplerClass(t, !1)));
          }),
        r
          .blur(function () {
            var a = this,
              t = $(a).val(),
              r = $(a).parents("li"),
              i = $(a).prev();
            s.removeError(r),
              s.addValidClass(r, !0),
              s.addUpplerClass(r, !1),
              0 === t.length
                ? ($(a).hide(),
                  i.show(),
                  s.appendError(r, s.tips.CONFIRM.NULL),
                  s.addValidClass(r, !1))
                : t.length < 6
                ? (s.appendError(r, s.tips.CONFIRM.MINLENGTH),
                  s.addValidClass(r, !1))
                : t.length > 24
                ? (s.appendError(r, s.tips.CONFIRM.MAXLENGTH),
                  s.addValidClass(r, !1))
                : /^\d+$/.test(t)
                ? (s.appendError(r, s.tips.CONFIRM.NUMBER),
                  s.addValidClass(r, !1))
                : t != e.val() &&
                  (s.appendError(r, s.tips.CONFIRM.NOTEQUAL),
                  s.addValidClass(r, !1));
          })
          .keyup(function () {
            var a = this,
              e = $(a).val(),
              t = $(a).parents("li");
            return /\s$/.test(e)
              ? (s.appendError(t, s.tips.CONFIRM.EMPTY),
                s.addValidClass(t, !1),
                void $(a).val(e.trim()))
              : (s.isError(t, s.tips.CONFIRM.EMPTY) &&
                  (s.removeError(t), s.addValidClass(t, !0)),
                void (/[A-Z]/.test(e)
                  ? s.addUpplerClass(t, !0)
                  : s.addUpplerClass(t, !1)));
          });
    },
    checkCaptcha: function (a) {
      var e = this;
      a.focus(function () {
        $(this).val() == e.tips.CAPTCHA.DEFAULT && $(this).val(""),
          $(this).removeClass("change").addClass("change");
      }).blur(function () {
        var a = this,
          t = $(a).val(),
          r = $(a).parents("li");
        e.removeError(r),
          e.addValidClass(r, !0),
          (0 === t.length || t == e.tips.CAPTCHA.DEFAULT) &&
            (e.appendError(r, e.tips.CAPTCHA.NULL),
            $(a).val(e.tips.CAPTCHA.DEFAULT),
            e.addValidClass(r, !1),
            $(this).removeClass("change"));
      });
    },
    sendCaptcha: function (a, e) {
      var t = this;
      (this.clickable = !0),
        a.click(function () {
          {
            var r = this,
              s = $(r).parents("li");
            e.parents("li");
          }
          return (
            a.attr("disabled", "disabled"),
            t.clickable
              ? ((t.clickable = !1),
                t.removeError(s),
                t.addValidClass(s, !0),
                e.trigger("blur"),
                $(".name").find(".err")[0]
                  ? ($("#reg_submit").removeAttr("disabled"),
                    void (t.clickable = !0))
                  : void t.ajaxCheckMobile(e.val(), function (i) {
                      var l = !0;
                      i && 400 == i.status
                        ? (l = !1)
                        : i &&
                          200 == i.status &&
                          (0 === e.val().length ||
                          e.val() == t.tips.MOBILE.DEFAULT
                            ? (l = !1)
                            : 0 != t.isMobile(e.val()).status && (l = !1));
                      var n = $(".validatepalceholder"),
                        d = {
                          success: function () {
                            t.ajaxGetAuthToken(function (i) {
                              var l = 60,
                                n = 1e3;
                              if (!i || !i.authenticity_token)
                                return (
                                  $(r).val(t.tips.CAPTCHA.ORIGIN),
                                  t.addValidClass(s, !1),
                                  a.removeAttr("disabled"),
                                  void (t.clickable = !0)
                                );
                              $("#reg_authenticity_token").val(
                                i.authenticity_token
                              );
                              var d = {
                                mobile: e.val(),
                                timestamp: new Date().getTime(),
                                token: i.authenticity_token,
                                validate_token: o.validate_data.validate_token,
                              };
                              t.ajaxSendCaptcha(d, function (i) {
                                switch (i.status) {
                                  case 201:
                                    var o = $(
                                      ".login_reg_dialog_wrapper .validatepalceholder"
                                    );
                                    t.removeError(o),
                                      t.addValidClass(o, !0),
                                      (window.reg_timer = $.addTimeout(
                                        l,
                                        n,
                                        function (a) {
                                          $(r)
                                            .html(
                                              "éåéªè¯ç ( " +
                                                (10 > a ? "0".concat(a) : a) +
                                                "ç§ )"
                                            )
                                            .css("cursor", "default");
                                        },
                                        function () {
                                          clearInterval(window.reg_timer),
                                            (counter = l),
                                            $(r)
                                              .html(t.tips.CAPTCHA.REPEAT)
                                              .css("cursor", "pointer"),
                                            a.removeAttr("disabled"),
                                            (t.clickable = !0);
                                        }
                                      ));
                                    break;
                                  case 0:
                                    i.errors &&
                                      (i.errors.phone_number &&
                                        e.trigger("blur"),
                                      i.errors.phone_confirmation &&
                                        (t.appendError(
                                          s,
                                          t.tips.CAPTCHA.MAXNUM
                                        ),
                                        $(r).val(t.tips.CAPTCHA.REPEAT),
                                        t.addValidClass(s, !1))),
                                      clearInterval(window.reg_timer),
                                      (counter = l),
                                      $(r)
                                        .html(t.tips.CAPTCHA.REPEAT)
                                        .css("cursor", "pointer"),
                                      a.removeAttr("disabled"),
                                      (t.clickable = !0);
                                    break;
                                  case 401:
                                    break;
                                  case 402:
                                    if (i.errors) {
                                      var o = $(
                                        ".login_reg_dialog_wrapper .validatepalceholder"
                                      );
                                      t.removeError(o),
                                        t.appendError(o, i.errors),
                                        t.addValidClass(o, !1),
                                        a.removeAttr("disabled"),
                                        (t.clickable = !0),
                                        t.getValidate();
                                    }
                                }
                              });
                            });
                          },
                          error: function (e) {
                            var r = e && e.msg;
                            t.appendError(n, r || "éªè¯å¤±è´¥"),
                              a.removeAttr("disabled"),
                              (t.clickable = !0);
                          },
                        };
                      if (2 == o.validate_type) {
                        var p = $("#validatewrapper .imgwrapperinput");
                        d.content = p.val() == p.attr("title") ? "" : p.val();
                      }
                      return o.validator
                        ? void o.validator.validate(d)
                        : (t.appendError(n, "è¯·å®æéªè¯"),
                          t.addValidClass(n, !1),
                          (l = !1),
                          a.removeAttr("disabled"),
                          void (t.clickable = !0));
                    }))
              : void 0
          );
        });
    },
    startRegister: function () {
      var a = this;
      $("#reg_submit").click(function () {
        var e = $(this),
          t = $(e).parents("li");
        a.removeError(t), $(this).attr("disabled", "disabled"), a.checkForm();
      });
    },
    checkForm: function () {
      var a = this,
        e = a.getElements();
      for (var t in e) e[t].trigger("blur");
      return $(".signupnewbox").find(".err")[0]
        ? void $("#reg_submit").removeAttr("disabled")
        : void a.register();
    },
    loginSuccessCall: function () {
      for (
        $("#dialog_reg_qiandao .close").trigger("click"), i = 0;
        i < PassportCardList.length;
        i++
      )
        PassportCardList[i].parsePassportCookie(),
          PassportCardList[i].getBottomRow(),
          PassportCardList[i].drawPassportCard();
    },
    register: function () {
      var a = this;
      a.ajaxSubmitRegister(
        a.getRegInfo(),
        function (e) {
          if (
            (1 == e.status &&
              $.getScript(e.return_to, function () {
                "success" == login_status &&
                  (6 == o.validate_type &&
                    l({ type: 3, validator: o.validator }),
                  a.loginSuccessCall(),
                  $("body").trigger("login"),
                  PubSub.fire("user_change"));
              }),
            0 == e.status)
          ) {
            if (e.errors && e.errors.captcha) {
              var t = a.getElements().captcha,
                r = ($(t).val(), $(t).parents("li"));
              a.removeError(r),
                a.addValidClass(r, !0),
                a.appendError(r, a.tips.CAPTCHA.INVALID),
                a.addValidClass(r, !1);
            }
            if (e.errors && e.errors.phone_number) {
              var t = a.getElements().mobile,
                r = ($(t).val(), $(t).parents("li"));
              a.removeError(r),
                a.addValidClass(r, !0),
                a.appendError(
                  r,
                  a.tips.MOBILE.EXIST +
                    'ï¼<a class="loglink" href="javascript:void(0)">ç«å³ç»å½</a>'
                ),
                a.addValidClass(r, !1);
            }
            if (e.errors && e.errors.register) {
              var t = $("#reg_submit"),
                r = $(t).parents("li");
              a.removeError(r), a.appendError(r, a.errors.register);
            }
          }
          $("#reg_submit").removeAttr("disabled");
        },
        "json"
      );
    },
    bindEvents: function (a) {
      var e = this,
        t = e.getElements().mobile,
        r = e.getElements().tipsPwd,
        s = e.getElements().pwd,
        i = e.getElements().tipsConfirm,
        l = e.getElements().confirm,
        n = e.getElements().captcha,
        o = e.getElements().sendCaptcha;
      (e.appid = a && a.appid ? a.appid : ""),
        e.checkMobile(t),
        e.checkPassword(r, s, i, l),
        e.checkCaptcha(n),
        e.sendCaptcha(o, t),
        e.getValidate(),
        e.startRegister();
    },
    getValidate: function () {
      var a = this;
      o = new s({
        source_type: n,
        success: function (e) {
          6 == e.validate_type
            ? o.validator.init({
                renderTo: "#validatewrapper",
                nc_scene: "register",
                afs_appkey: e.validate_adds.afs_appkey,
                validateSucFn: function () {
                  ($validatepalceholder = $(".validatepalceholder")),
                    a.removeError($validatepalceholder),
                    a.addValidClass($validatepalceholder, !0);
                },
              })
            : 1 == e.validate_type
            ? o.validator.init({
                renderTo: "#validatewrapper",
                gt: e.validate_adds.geetest_id,
              })
            : 2 == e.validate_type &&
              o.validator.init({
                success: function (a) {
                  $("#validatewrapper").html(d(a.image_url)),
                    setTimeout(function () {
                      $(
                        "#validatewrapper .changeImg,#validatewrapper .captchaImg"
                      ).bind("click", function () {
                        o.validator.refresh(function (a) {
                          $("#validatewrapper .captchaImg").attr(
                            "src",
                            a.image_url
                          );
                        });
                      });
                    }, 10);
                },
              });
        },
        error: function () {},
      });
    },
    getElements: function () {
      return {
        mobile: $("#reg_mobile"),
        tipsPwd: $("#txt_password"),
        pwd: $("#reg_password"),
        tipsConfirm: $("#txt_confirmpwd"),
        confirm: $("#reg_confirmpwd"),
        captcha: $("#reg_captcha"),
        sendCaptcha: $("#send_reg_captcha"),
      };
    },
    getRegInfo: function () {
      var a = this;
      return {
        username: a.getElements().mobile.val(),
        password: a.getElements().pwd.val(),
        captcha: a.getElements().captcha.val(),
        platform: "www",
        regtype: "mobile",
        agreement: !0,
        subscribe_status: 0,
        authenticity_token: $("#reg_authenticity_token").val(),
        password_confirmation: a.getElements().confirm.val(),
        domain: "zhe800.com",
        popup: 1,
        appid: a.appid,
        validate_token: o.validate_data.validate_token,
      };
    },
    ajaxCheckMobile: function (a, e) {
      $.ajax({
        url: "https://passport.zhe800.com/j/users/check_mobile",
        type: "GET",
        data: { phoneNumber: a },
        dataType: "JSONP",
        jsonpCallback: "mobile_registerDialog",
        success: function (a) {
          e(a);
        },
      });
    },
    ajaxGetAuthToken: function (a) {
      $.getJSON("/users/register_access", function (e) {
        a(e);
      });
    },
    ajaxSendCaptcha: function (a, e) {
      $.extend(a, {});
      var t = {
        phone_number: a.mobile,
        timestamp: a.timestamp,
        authenticity_token: a.token,
        source: "zhe800",
        validate_token: a.validate_token,
      };
      a.type && (t.type = a.type),
        $.post("/users/passport/send_phone_confirmations", t, function (a) {
          e(a);
        });
    },
    ajaxSubmitRegister: function (a, e) {
      $.post("/users.json", a, function (a) {
        e(a);
      });
    },
  };
});
/*_combo_cut*/ define("statics/zhe/components/loginPassportCard/mobileLogin/index", function (
  t,
  e,
  i
) {
  function a(t, e, i) {
    {
      var a = (i.t || this, PassportCardList[t]);
      i.ttl || "";
    }
    (f = a),
      (a.rootElement = function () {
        (this.cElement = e),
          (this.sElement = e
            .after('<div id="mobileDologin" class="hidden"></div>')
            .next());
      }),
      (a._drawLoginForm = function () {
        this.cElement.html(m({ index: t })), (a.validateIns = c()), r();
      }),
      (a.drawPassportWait = function () {
        $(".mobilelogin-submit")
          .unbind()
          .click(function () {
            return !1;
          });
      }),
      (a._drawPassportCard = function () {
        PubSub.fire("login_s1_callback");
      }),
      (a.loginApp = function () {
        if (
          (a.validateIns &&
            6 == a.validateIns.validate_type &&
            p({ type: 1, validator: a.validateIns.validator }),
          PubSub.fire("user_change"),
          $.getParm().return_to)
        ) {
          var t = $.getParm().return_to;
          return (
            $.cookie("crossdomain", PassportSC.getTime(), {
              path: "/",
              expires: 1,
            }),
            (window.returnToCenter = function () {
              window.location.href = decodeURIComponent(t);
            }),
            setTimeout(window.returnToCenter, 2e3),
            !1
          );
        }
      }),
      (a.logoutApp = function () {
        PubSub.fire("user_change");
      }),
      (a.showMsg = function (t) {
        this.loginMsg &&
          ("é®ç®±æªæ¿æ´»" == t &&
            (t += ',<span class="comfir_mail">å»æ¿æ´»é®ç®±</span>'),
          this.loginMsg.html(t).show());
      }),
      (a.doLogin = function () {
        if (this.eInterval) return !1;
        try {
          arguments[0] && PassportCardList[t].doLogin(),
            (this.intervalCount = 0),
            this.sElement.empty(),
            (this.loginParams = {});
          var e = $("#login-mobile-form [name=username]"),
            i = $("#login-mobile-form [name=password]");
          return (
            (this.loginParams.username = $.trim(e.val())),
            (this.loginParams.password = $.trim(i.val())),
            this.loginParams.username &&
            this.loginParams.username != e.attr("title")
              ? /^1\d{10}/.test(this.loginParams.username)
                ? this.loginParams.password &&
                  this.loginParams.password != i.attr("title")
                  ? this.loginHandle(
                      0,
                      this.sElement,
                      this.loginFailCall.bindFunc(this),
                      this.loginSuccessCall.bindFunc(this)
                    )
                  : (this.reportMsg("error", { message: "è¯·å¡«åå¨æå¯ç " }),
                    i.focus(),
                    !1)
                : (this.reportMsg("error", { message: "ææºå·æ ¼å¼æè¯¯" }), !1)
              : (this.reportMsg("1"), e.focus(), !1)
          );
        } catch (a) {
          console.log(a);
        } finally {
          return !1;
        }
      }),
      (a.loginHandle = function (t, e, i, a) {
        if ("object" != typeof e) return !1;
        if (0 == $.cookie()) return i(), !1;
        var r = $.getBrowserType(),
          o = screen.width;
        "" == this.domain && (this.domain = this.getDomain());
        var n = this.getTime(),
          s = this.md5pwd
            ? function () {
                return $.md5
                  ? $.md5(this.loginParams.password)
                  : this.loginParams.password;
              }
            : this.loginParams.password,
          l = {
            http: this.loginProtocal,
            url: this.loginURL,
            username: encodeURIComponent(this.loginParams.username),
            pwd_md5: encodeURIComponent(s),
            appid: this.appid,
            pc: t,
            s: n,
            b: r,
            w: o,
            version: this.version,
            popup: this.getusername(),
          },
          c = this.login_urltpl;
        try {
          "https" == this.loginProtocal && (c = this.logins_urltpl),
            (this.http_url = $.ParseTpl(c, l));
          var m = this.http_url;
        } catch (d) {
          "https" == this.loginProtocal && (c = this.https_urltpl),
            (this.http_url = $.ParseTpl(c, l));
          var m = this.http_url;
          window.console && console.info(d);
        }
        (m += "&domain=" + this.domain),
          (m += "&sms_dynamic_login=true"),
          (m += "&validate_token=" + v.validate_data.validate_token),
          (login_status = ""),
          (login_error_result = ""),
          (login_need_captcha = !1),
          $.getScript(m, !0);
        var g = this;
        return (
          (this.eInterval = setInterval(function () {
            g.loginIntervalProc(i, a, e);
          }, 100)),
          !1
        );
      }),
      a.drawPassport(e);
  }
  function r() {
    var t = !0;
    $("#login-mobile .error").delegate(".comfir_mail", "click", function () {
      {
        var e =
          "https://passport.zhe800.com/users/email_signed?email=" +
          encodeURIComponent($("#login-mobile #mobileusername").val());
        $(this);
      }
      t &&
        ((t = !1),
        $.getScript(
          "https://passport.zhe800.com/api/ued/retries/send_active_email_confirmation?email=" +
            encodeURIComponent($("#login-mobile #mobileusername").val()) +
            "&secret=" +
            encodeURIComponent(window.login_error_result.secret || ""),
          {
            callback: function () {
              window.location = e;
            },
          }
        ));
    }),
      $("#login-mobile .error").delegate(
        ".mobile-reloadValidate",
        "click",
        function () {
          c(), $("#login-mobile .error").html("");
        }
      ),
      $("#login-mobile").delegate(".dynamicBtn", "click", function () {
        var t = $(this),
          e = t.attr("disabled");
        e || w();
      });
  }
  function o() {
    h.ajaxGetAuthToken(function (t) {
      if (!t || !t.authenticity_token)
        return f.reportMsg("error", { message: "è¯·éæ°è·åææºå¨æç " }), n(), !1;
      var e = $("#login-mobile-form [name=username]").val(),
        i = {
          mobile: e,
          timestamp: new Date().getTime(),
          type: "login",
          token: t.authenticity_token,
          validate_token: v.validate_data.validate_token,
        };
      h.ajaxSendCaptcha(i, function (t) {
        switch (t.status) {
          case 201:
            l();
            break;
          case 0:
            t.errors &&
              (t.errors.phone_number
                ? f.reportMsg("error", { message: t.errors.phone_number })
                : t.errors.phone_confirmation &&
                  f.reportMsg("error", {
                    message: t.errors.phone_confirmation[0],
                  })),
              c(),
              l();
            break;
          case 400:
            t.errors &&
              f.reportMsg("error", {
                message:
                  'ææºå·æªæ³¨åï¼è¯·<a class="pperrmsgcl" href="https://passport.zhe800.com/users/signup" target="_blank">æ³¨åæ800è´¦å·</a>',
              }),
              n();
            break;
          case 401:
          case 402:
            t.errors && f.reportMsg("error", { message: errors }), c(), n();
        }
      });
    });
  }
  function n() {
    clearInterval(_);
    var t = $(".dynamicBtn");
    t.removeAttr("disabled").val(t.attr("title"));
  }
  function s() {
    var t = $(".dynamicBtn");
    t.attr("disabled", !0).val("æäº¤ä¸­...");
  }
  function l() {
    var t = $(".dynamicBtn");
    t.attr("disabled", !0);
    var e = 60;
    _ && clearInterval(_),
      (_ = setInterval(function () {
        var t = $(".dynamicBtn");
        (e -= 1), e > 0 ? t.val("éåéªè¯(" + e + ")") : n();
      }, 1e3));
  }
  function c() {
    return (v = new u({
      source_type: b,
      success: function (t) {
        6 == t.validate_type
          ? v.validator.init({
              renderTo: "#mobile-validate",
              nc_scene: "login",
              afs_appkey: t.validate_adds.afs_appkey,
              validateSucFn: function () {
                f.loginMsg.html("");
              },
            })
          : 1 == t.validate_type
          ? v.validator.init({
              renderTo: "#mobile-validate",
              gt: t.validate_adds.geetest_id,
            })
          : 2 == t.validate_type &&
            v.validator.init({
              success: function (t) {
                $("#mobile-validate").append(d({ imgsrc: t.image_url })),
                  setTimeout(function () {
                    $(
                      "#mobile-validate .changeImg,#mobile-validate .captchaImg"
                    ).bind("click", function () {
                      v.validator.refresh(function (t) {
                        $("#mobile-validate .captchaImg").attr(
                          "src",
                          t.image_url
                        );
                      });
                    });
                  }, 10);
              },
            });
      },
      error: function () {
        f.reportMsg("error", {
          message:
            'è·åéªè¯å¤±è´¥,<span class="mobile-reloadValidate">ç¹å»éè¯</span>',
        });
      },
    }));
  }
  var m = t("statics/zhe/components/loginPassportCard/mobileLogin/tpl.ejs"),
    d = t("statics/zhe/components/loginPassportCard/imgcaptchatpl.ejs"),
    g = t("statics/zhe/common/js/stat/picstat"),
    u = t("statics/zhe/common/js/validate/validate"),
    p = t("statics/zhe/common/js/validate/validateStat"),
    h = t("statics/zhe/components/login_reg_dialog/register"),
    v = null,
    f = null,
    _ = null,
    b = "DjbSdo",
    w = function () {
      var t = $("#login-mobile-form [name=username]"),
        e = t.val();
      if (
        (g.doStat("click_v0", {
          clickkey: "huoqudongtaima_tanchuang",
          data: new Date().getTime(),
        }),
        !e || e == t.attr("title"))
      )
        return f.reportMsg("1"), t.focus(), !1;
      if (!/^1\d{10}/.test(e))
        return f.reportMsg("error", { message: "ææºå·æ ¼å¼æè¯¯" }), !1;
      var i = {
        success: function () {
          f.loginMsg.html("").hide(), o();
        },
        error: function (t) {
          var e = t && t.msg;
          f.reportMsg("error", { message: e || "éªè¯å¤±è´¥" }), n();
        },
      };
      if (2 == v.validate_type) {
        var a = $("#login-mobile-form .captchaImgInput");
        i.content = a.val() == a.attr("title") ? "" : a.val();
      }
      return v.validator
        ? (s(), void v.validator.validate(i))
        : void f.reportMsg("error", { message: "è¯·å®æéªè¯" });
    };
  i.exports = { loginfun: a };
});
/*_combo_cut*/ define("statics/zhe/components/login_reg_dialog/tpl.ejs", function (
  require,
  exports,
  module
) {
  function render(data) {
    var __p = [],
      _p = function (r) {
        __p.push(r);
      };
    with (data)
      _p(
        '<div class="login_reg_dialog_wrapper">\r\n      <a class="reglink" target="_blank" href="javascript: void(0)">ç«å³æ³¨å</a>\r\n      <div class="login-switch">\r\n          <input type="radio" id="loginppr"  name="logintype"  value="1">\r\n          <label for="loginppr">æ800è´¦å·ç»å½&nbsp;</label>\r\n          <input type="radio" id="phonecode" name="logintype" value="2">\r\n          <label for="phonecode">ææºå¨æç ç»å½</label>\r\n      </div>\r\n      <div class="login_reg">\r\n          <div id="login_dialog">\r\n              <div class="passportcard" id="login_pwd"></div>\r\n              <div class="passportcard" id="login_mobile"></div>\r\n              <div class="pwd_forget">\r\n                  <a class="forgetPwd" target="_blank" href="https://passport.zhe800.com/users/password/new">\r\n                      å¿è®°å¯ç ?\r\n                  </a>\r\n                  <span class="otheraccount">ä½¿ç¨å¶ä»è´¦å·ç»å½</span>\r\n                  <i></i>\r\n              </div>\r\n              <div class="thirdlogin">\r\n                  <div class="thirdlogin-content">\r\n                      <p>\r\n                          <a class="qq" href="https://passport.tuan800.com/sso/partner_login/qq_connect'
      ),
        _p(__e(return_to)),
        _p("&appid="),
        _p(__e(appid)),
        _p(
          '"><i></i><span>QQç»å½</span></a>\r\n                          <a class="morela"><span>æ´å¤&gt;&gt;</span></a>\r\n                      </p>\r\n                      <p class="more_logina hidden">\r\n                          <a class="baidu" href="https://passport.tuan800.com/sso/partner_login/baidu'
        ),
        _p(__e(return_to)),
        _p("&appid="),
        _p(__e(appid)),
        _p(
          '"></a>\r\n                          <a class="sina" href="https://passport.tuan800.com/sso/partner_login/weibo'
        ),
        _p(__e(return_to)),
        _p("&appid="),
        _p(__e(appid)),
        _p(
          '"></a>\r\n                          <a class="taobao" href="https://passport.tuan800.com/sso/partner_login/taobao'
        ),
        _p(__e(return_to)),
        _p("&appid="),
        _p(__e(appid)),
        _p(
          '"></a>\r\n                          <a class="renren" href="https://passport.tuan800.com/sso/partner_login/renren'
        ),
        _p(__e(return_to)),
        _p("&appid="),
        _p(__e(appid)),
        _p(
          '"></a>\r\n                      </p>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div id="reg_dialog"></div>\r\n      </div>\r\n  </div>'
        );
    return __p.join("");
  }
  var __a = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    },
    __b = /[&<>"']/g,
    __e = function (r) {
      return (
        (r = String(r)),
        r.replace(__b, function (r) {
          return __a[r];
        })
      );
    };
  module.exports = render;
});
/*_combo_cut*/ define("statics/zhe/components/login_reg_dialog/index", function (
  n
) {
  function o(n) {
    var n = $.extend({ appid: 3002, logintype: 1 }, n);
    s = n.appid;
    var o = "boolean" == $.type(n.classAll) ? n.classAll : !1,
      t =
        -1 == document.location.href.indexOf("login")
          ? "?return_to=" + encodeURIComponent(document.location.href)
          : "?return_to=" +
            encodeURIComponent(location.protocol + "//www.zhe800.com");
    $.Dialogs({
      id: "loginDialog",
      overlay: !0,
      auto: !1,
      classAll: o,
      msg: h({ appid: n.appid, return_to: t }),
      openfun: function () {
        e(n.logintype),
          $(".morela").toggle(
            function () {
              $(this).find("span").html("æ¶èµ·&lt;&lt;"),
                $(".more_logina").removeClass("hidden");
            },
            function () {
              $(this).find("span").html("æ´å¤&gt;&gt;"),
                $(".more_logina").addClass("hidden");
            }
          ),
          $.each(m, function (n, o) {
            if ("function" == $.type(o))
              try {
                o.apply(this, []);
              } catch (t) {
                window.console && console.info(t.message);
              }
          });
      },
      closefun: function (o) {
        if (n.closefun && "function" == typeof n.closefun)
          try {
            n.closefun(o);
          } catch (t) {
            window.console && window.console.log(t);
          }
      },
    });
  }
  function t(n) {
    var n = $.extend({}, n);
    $.Dialogs({
      id: "dialog_reg_qiandao",
      overlay: !0,
      auto: !1,
      msg: f.renderForm(),
      openfun: function () {
        f.bindEvents(n);
      },
      closefun: function () {
        $(".dialog-overlay").remove();
      },
    });
  }
  function i(n) {
    $("#loginDialog").delegate(".reglink", "click", function (o) {
      $("#loginDialog .close").trigger("click"), c(n), o.preventDefault();
    }),
      $("#dialog_reg_qiandao").delegate(".loglink", "click", function (o) {
        $("#dialog_reg_qiandao .close").trigger("click"),
          l(n),
          o.preventDefault();
      });
  }
  function e(n) {
    var o;
    switch (parseInt(n)) {
      case 1:
        $("#loginDialog #loginppr").attr("checked", !0), (o = 1);
        break;
      case 2:
        $("#loginDialog #phonecode").attr("checked", !0), (o = 2);
        break;
      default:
        $("#loginDialog #loginppr").attr("checked", !0), (o = 1);
    }
    $("#loginDialog input:radio").on("change", function () {
      var n = ($(this), { appid: s, logintype: $(this).val() });
      a(n);
    }),
      a({ appid: s, logintype: o });
  }
  function a(n) {
    $(".passportcard").hide();
    var n = $.extend({ appid: 3002, logintype: 1 }, n);
    switch (parseInt(n.logintype)) {
      case 1:
        d[1] ||
          (PassportSC.drawPassportNew("login_pwd", r.loginfun, {
            appid: n.appid,
            t: r.loginfun,
            ttl: n.ttl ? n.ttl : null,
            opts: n,
          }),
          (d[1] = !0)),
          $("#login_pwd").show(),
          _.doStat("click_v0", {
            clickkey: "zhanghaodenglu_tanchuang",
            data: new Date().getTime(),
          });
        break;
      case 2:
        d[2] ||
          (PassportSC.drawPassportNew("login_mobile", u.loginfun, {
            appid: n.appid,
            t: u.loginfun,
            ttl: n.ttl ? n.ttl : null,
            opts: n,
          }),
          (d[2] = !0)),
          $("#login_mobile").show(),
          _.doStat("click_v0", {
            clickkey: "dongtaimadenglu_tanchuang",
            data: new Date().getTime(),
          });
        break;
      default:
        d[1] ||
          (PassportSC.drawPassportNew("login_pwd", r.loginfun, {
            appid: n.appid,
            t: r.loginfun,
            ttl: n.ttl ? n.ttl : null,
            opts: n,
          }),
          (d[1] = !0)),
          $("#login_pwd").show(),
          _.doStat("click_v0", {
            clickkey: "zhanghaodenglu_tanchuang",
            data: new Date().getTime(),
          });
    }
  }
  function l(n) {
    d = {};
    var n = $.extend({}, n);
    (p = n && n.appid ? n.appid : 3002), (n.appid = p), o(n), i(n);
  }
  function c(n) {
    var n = $.extend({}, n);
    (p = n && n.appid ? n.appid : 3002), (n.appid = p), t(n), i(n);
  }
  function g() {
    PubSub.add("login_s1_callback", function () {
      $("#loginDialog .close").trigger("click");
    });
  }
  var d,
    s,
    p,
    r = n("statics/zhe/components/loginPassportCard/pwdLogin/index"),
    u = n("statics/zhe/components/loginPassportCard/mobileLogin/index"),
    f = n("statics/zhe/components/login_reg_dialog/register"),
    h = n("statics/zhe/components/login_reg_dialog/tpl.ejs"),
    _ = n("statics/zhe/common/js/stat/picstat"),
    m = [];
  return (
    g(), { renderLoginDialog: l, renderRegisterDialog: c, callbackQueue: m }
  );
});
/*_combo_cut*/ define("statics/zhe/common/js/signin", function (n, e, i) {
  function s() {
    $.cookie("ppinf") &&
      $.ajax({
        url: "//www.zhe800.com/cn/z_key/checkin_status?d=10",
        type: "GET",
        dataType: "JSONP",
        jsonpCallback: "checkin_status",
        success: function (n) {
          n.is_double && n.channels.mobile && !n.channels.web && (n.status = 0),
            PubSub.fire("get_signin", n),
            PubSub.fire("justSignData", n);
        },
      });
  }
  function t(n) {
    PubSub.fire("get_signin", n);
  }
  i.exports = { get: s, fireCheckin: t };
});
/*_combo_cut*/ define("statics/zhe/common/js/isLogin", function (i, o, e) {
  var n = function () {
    return "" == $.cookie("ppinf")
      ? !1
      : $.parseJSON(Base64.decode($.cookie("ppinf").split("|")[3])) || {};
  };
  e.exports = { isLogin: n };
});
/*_combo_cut*/ define("statics/zhe/components/lottery/tpl.ejs", function (
  require,
  exports,
  module
) {
  function render(data) {
    var __p = [],
      _p = function (n) {
        __p.push(n);
      };
    with (data) {
      _p('<div class="lot_tit"></div>\r\n  <p class="lot_desc">'),
        _p(__e(description)),
        _p(
          '</p>\r\n  <div id="lot_wrapper">\r\n      <div class="lot_bg"></div>\r\n      <div class="lot_content">\r\n          <ul class="all_prize">'
        );
      for (var i = 0, len = prizes.length; len > i; i++)
        _p('            <li class="prize prize'),
          _p(__e(i)),
          _p('"><img src="'),
          _p(__e(prizes[i].image)),
          _p('"></li>');
      _p(
        '        </ul>\r\n          <span class="start_play"></span>\r\n      </div>\r\n  </div>\r\n  <span class="giveup_play">æ¾å¼æ½å¥</span>\r\n  <div class="lot_rule">æ¥çæ´»å¨è§å<span></span></div>\r\n  '
      );
    }
    return __p.join("");
  }
  var __a = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    },
    __b = /[&<>"']/g,
    __e = function (n) {
      return (
        (n = String(n)),
        n.replace(__b, function (n) {
          return __a[n];
        })
      );
    };
  module.exports = render;
});
/*_combo_cut*/ define("statics/zhe/components/lottery/index", function (
  e,
  t,
  i
) {
  function o(e) {
    (e = e || {}),
      (this.opts = $.extend(
        {
          activityInfo: null,
          prizes: [],
          prizeId: -1,
          noPrizeId: -1,
          noPrizeDoc: "å¾éæ¾ï¼æªä¸­å¥~",
          fastSpeed: 150,
          fastMinCount: 3,
          slowCount: 2,
          startIndex: 0,
          prizeCount: 8,
        },
        e
      ));
  }
  function n(e) {
    a ? a.init() : ((a = new o(e)), a.init());
  }
  var s = e("statics/zhe/components/lottery/tpl.ejs");
  (loginDialog = e("statics/zhe/components/login_reg_dialog/index")),
    (isLogin = e("statics/zhe/common/js/isLogin")),
    (picstat = e("statics/zhe/common/js/stat/picstat")),
    (fastTimer = null),
    (slowTimer = null),
    (getPrizesFlag = !0),
    (o.prototype = {
      init: function () {
        isLogin.isLogin()
          ? this.getAllPrize()
          : loginDialog.renderLoginDialog();
      },
      getAllPrize: function () {
        var e = this,
          t = e.opts,
          i = t.activityInfo,
          o = t.prizeCount;
        i && i.prizes.length >= o
          ? ((t.prizes = i.prizes), e.renderPrize())
          : getPrizesFlag &&
            ((getPrizesFlag = !1),
            $.ajax({
              url:
                "//www.zhe800.com/n/data_service/wx/hit/play?ids=20161111qiandao",
              type: "GET",
              dataType: "JSONP",
              callback: "callback",
              jsonpCallback: "getAllPrize",
              success: function (i) {
                (t.activityInfo = i[0]),
                  (t.prizes = i[0].prizes),
                  e.renderPrize(),
                  (getPrizesFlag = !0);
              },
              error: function () {
                getPrizesFlag = !0;
              },
            }));
      },
      renderPrize: function () {
        var e = this,
          t = e.opts,
          i = t.prizes,
          o = t.prizeCount;
        return i.length < o
          ? !1
          : ((i.length = i.length > o ? o : i.length),
            void $.Dialogs({
              id: "marquee_lottery",
              overlay: !0,
              msg: s({
                description: t.activityInfo.description,
                context: t.activityInfo.context,
                prizes: i,
              }),
              auto: !1,
              closefun: function () {
                "function" == typeof t.closeCallback ? t.closeCallback() : "",
                  clearInterval(fastTimer),
                  clearTimeout(slowTimer),
                  (a = null);
              },
              openfun: function () {
                "function" == typeof t.openCallback ? t.openCallback() : "",
                  e.giveupEvent(),
                  e.startEvent(),
                  e.openRule();
              },
            }));
      },
      openRule: function () {
        var e = this;
        $("#marquee_lottery .lot_rule").on("click.openRule", function () {
          var t = [];
          t.push('<div class="rule_dialog_mask"></div>'),
            t.push('<div class="rule_dialog">'),
            t.push('<span class="close_btn"></span>'),
            t.push(e.opts.activityInfo.context),
            t.push("</div>"),
            (t = t.join("")),
            setTimeout(function () {
              $("#lot_wrapper").append(t),
                $(".rule_dialog .close_btn").on("click", function () {
                  $(".rule_dialog_mask, .rule_dialog").remove();
                });
            }, 200);
        });
      },
      giveupEvent: function () {
        var e = this;
        $("#marquee_lottery .giveup_play").on("click", function () {
          $("#marquee_lottery .close").trigger("click"),
            e.statClick("161111_giveup_lottery");
        });
      },
      startEvent: function () {
        var e = this;
        $("#lot_wrapper .start_play").on("click", function () {
          e.statClick("161111_start_lottery"),
            $(this).addClass("disable").off("click"),
            e.getPriceId(),
            e.fastPlay(),
            $("#marquee_lottery .lot_rule").off("click.openRule");
        });
      },
      getPriceId: function () {
        var e = this;
        $.ajax({
          url:
            "//zapi.zhe800.com/cn/zhe800_n_api/activity/play?url_name=20161111qiandao",
          timeout: 1e4,
          type: "GET",
          dataType: "JSONP",
          callback: "callback",
          jsonpCallback: "getPriceId",
          success: function (t) {
            3 == t.status
              ? (e.opts.prizeId = t.prize_id)
              : ((e.opts.prizeId = 0),
                (e.opts.noPrizeDoc = t.not_win_doc || t.msg)),
              e.getStartSlowIndex();
          },
          complete: function (t, i) {
            "success" != i && ((e.opts.prizeId = 0), e.getStartSlowIndex());
          },
        });
      },
      getStartSlowIndex: function () {
        for (
          var e = this, t = e.opts, i = t.prizes, o = 0, n = i.length;
          n > o;
          o++
        ) {
          if (0 == t.prizeId && 0 == i[o].prize_type) {
            (t.prizeId = t.noPrizeId = i[o].id),
              (t.startSlowIndex = (t.prizeCount + o - 2) % t.prizeCount);
            break;
          }
          if (i[o].id == t.prizeId) {
            t.startSlowIndex = (t.prizeCount + o - 2) % t.prizeCount;
            break;
          }
        }
      },
      fastPlay: function () {
        var e = this,
          t = e.opts,
          i = t.startIndex,
          o = i,
          n = 0,
          s = $("#lot_wrapper .prize"),
          a = !1;
        fastTimer = setInterval(function () {
          s
            .eq(o++)
            .addClass("on")
            .siblings()
            .removeClass("on"),
            o === t.prizeCount &&
              ((o = 0),
              n++,
              -1 !== t.prizeId && n >= t.fastMinCount && (a = !0)),
            a &&
              o >= t.startSlowIndex &&
              (clearInterval(fastTimer), e.slowPlay(o));
        }, t.fastSpeed);
      },
      slowPlay: function (e) {
        function t() {
          return (
            e === n.prizeCount && ((e = 0), a++),
            r.eq(e).addClass("on").siblings().removeClass("on"),
            a >= n.slowCount && n.prizes[e].id == n.prizeId ? !0 : (e++, !1)
          );
        }
        function i() {
          return (
            (s += 15),
            t()
              ? (clearTimeout(slowTimer),
                $("#lot_wrapper .start_play").addClass("seeyou"),
                $("#marquee_lottery a span.close").show(),
                o.openDialog(
                  n.noPrizeId == n.prizeId
                    ? '<span class="noprize_img"></span><p>' +
                        n.noPrizeDoc +
                        "</p>"
                    : '<span class="prize_img"></span><p>æ­åæ¨è·å¾' +
                        n.prizes[e].name +
                        'ï¼è¯·åå¾<a href="//shop.zhe800.com/my/coupons" target="_blank">æçä¼æ å¸</a>æ¥ç!</p>'
                ),
                void ("function" == typeof o.opts.sucCallback
                  ? o.opts.sucCallback()
                  : ""))
              : void (slowTimer = setTimeout(function () {
                  i();
                }, s))
          );
        }
        var o = this,
          n = o.opts,
          s = n.fastSpeed,
          a = 0,
          r = $("#lot_wrapper .prize");
        slowTimer = setTimeout(function () {
          i();
        }, s);
      },
      openDialog: function (e) {
        var t = [],
          i = this;
        t.push('<div class="prize_dialog_mask"></div>'),
          t.push('<div class="prize_dialog">'),
          t.push('<span class="close_btn"></span>'),
          t.push(e),
          t.push("</div>"),
          (t = t.join("")),
          setTimeout(function () {
            $("#lot_wrapper").append(t),
              $(".prize_dialog .close_btn").on("click", function () {
                $(".prize_dialog_mask, .prize_dialog").remove(), i.openRule();
              });
          }, 200);
      },
      statClick: function (e) {
        var t = isLogin.isLogin(),
          i = 0;
        t && t.uid && (i = t.uid.substring(1)),
          picstat.doStat("click_v0", { clickkey: e, userid: i });
      },
    });
  var a = null;
  i.exports = { render: n };
});
/*_combo_cut*/ define("statics/zhe/common/js/qdpost", function (e, a, i) {
  function n(e) {
    PubSub.onece("get_signin", function (a) {
      var i = l.isLogin(),
        n = i ? i.idss.id2 : 0;
      0 == n && a.ck_times <= 3 ? c.render() : s(e);
    });
  }
  function s(e) {
    $.ajax({
      url: "//www.zhe800.com/cn/checkin?checkin=1",
      type: "GET",
      dataType: "JSONP",
      jsonpCallback: "zhe_pc_signin_post",
      success: function (a) {
        t(a, e);
      },
    });
  }
  function t(e, a) {
    switch (e.status) {
      case -1:
        $.Dialogs({
          id: "dialog_empty_deal",
          cls: "diglog-wrapper-ad",
          msg:
            'è¯·<a style="color:#3399cc" href=' +
            e.url +
            ' target="_blank" href="#">æ¿æ´»</a>æ¨çè´¦æ·ååæ¥ç­¾å°ï¼',
          auto: !1,
        });
        break;
      case 0:
        r.renderLoginDialog();
        break;
      case 1:
        $.ajax({
          url:
            "//zapi.zhe800.com/cn/zhe800_n_api/activity/free_times?url_name=20161111qiandao",
          type: "GET",
          dataType: "jsonp",
          jsonp: "callback",
          jsonpCallback: "user_activity_free_times",
          success: function (e) {
            1 == e.status &&
              e.free_times > 0 &&
              $.ajax({
                url:
                  "//www.zhe800.com/n/data_service/wx/hit/play?ids=20161111qiandao",
                type: "GET",
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "activity_info",
                success: function (a) {
                  a = a[0];
                  var i = Number(e.time),
                    n = Number(a.begin_time),
                    s = Number(a.end_time);
                  i >= n && s >= i && m.render({ activityInfo: a });
                },
              });
          },
        }),
          d.fireCheckin(e),
          e.email_tip && o.render();
        var i = new Date(
          new Date(Number(new Date()) + 864e5).setHours(0, 0, 0, 0)
        );
        (i = i.toGMTString()),
          (document.cookie =
            "myqd=1;expires=" + i + ";path=/;domain=zhe800.com");
        break;
      case 2:
        $.Dialogs({
          id: "dialog_empty_deal",
          cls: "dialog-wrapper-ad",
          msg: "ç­¾å°å¤±è´¥ï¼è¯·éæ°ç­¾å°",
          auto: !1,
        });
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        $.Dialogs({
          id: "dialog_empty_deal",
          cls: "dialog-wrapper-ad",
          msg:
            "ä¸ºé¿åå·å°å·ç°è±¡ï¼å³æ¥èµ·<br/>æ¯å°çµèä»åè®¸ä¸ä¸ªè´¦å·è¿è¡ç­¾å°ï¼",
          auto: !1,
        });
    }
    a && a.callback && a.callback(e);
  }
  var c = e("statics/zhe/components/bindPhone/index"),
    o = e("statics/zhe/components/bindemailDialog/index"),
    r = e("statics/zhe/components/login_reg_dialog/index"),
    d = e("statics/zhe/common/js/signin"),
    l = e("statics/zhe/common/js/isLogin"),
    m = e("statics/zhe/components/lottery/index");
  PubSub.add("bindPhone_next", function () {
    s();
  }),
    PubSub.add("bindPhone_suc", function () {
      s();
    }),
    (i.exports = { dosigin: n });
});
/*_combo_cut*/ define("statics/zhe/index/js/drawUserInfo", function (n) {
  function i() {
    var n = "ç­¾å°æ£ç§¯å",
      i = "è¯ä»·å¾ç§¯å",
      s = { signText: n, isSigninCls: "" },
      o = {
        evaluateText: i,
        hasEvallist: !1,
        link_url:
          "//shop.zhe800.com/my/orders?is_sub_tag=1&order_state=88&page=1&per_page=10&utm_content=zhe800_infobar",
      };
    PubSub.add("get_signin", function (n) {
      if (1 == n.status) {
        var i = n.tomorrow_score;
        (s.isSigninCls = "al_signin"), (s.signText = "ææ¥<em>+" + i + "</em>å");
      } else {
        var i = n.current_score;
        (s.isSigninCls = "no_signin"),
          (s.signText = "ç­¾å°<em>+" + i + "</em>å");
      }
      e(s);
    }),
      PubSub.onece("get_checkin_info", function (n) {
        (o.hasEvallist = n.return_score <= 0 ? !1 : !0),
          (o.evaluateText =
            n.return_score <= 0
              ? "è´­ç©è¿ç§¯å"
              : "è¯ä»·<i>+" + n.return_score + "</i>å"),
          (o.iconCls = o.hasEvallist ? "" : "hasEvallist"),
          (o.link_url = o.hasEvallist
            ? "//shop.zhe800.com/my/orders?is_sub_tag=1&order_state=88&page=1&per_page=10&utm_content=zhe800_infobar"
            : "//shop.zhe800.com?utm_content=zhe800_infobar"),
          a(o);
      }),
      e(s),
      a(o),
      $(".banner_user_info").addClass("gradient_show");
  }
  function e(n) {
    $(".signin_info_area .signin_btn").length > 0 &&
      $(".signin_info_area .signin_btn").remove();
    var i =
      ' <a class="signin_btn user_info_content ' +
      n.isSigninCls +
      '" href="javascript:void(0);"><span class="user_info_icon"></span>' +
      n.signText +
      "</a>";
    $(".signin_info_area").append(i), s();
  }
  function a(n) {
    $(".eval_info_area .evaluate_link").length > 0 &&
      $(".eval_info_area .evaluate_link").remove();
    var i =
      ' <a href="' +
      n.link_url +
      '" target="_blank" class="evaluate_link"><span class="user_info_icon ' +
      n.iconCls +
      '"></span><em>' +
      n.evaluateText +
      "</em></a>";
    $(".eval_info_area").append(i);
  }
  function s() {
    $(".banner_user_info .signin_btn")
      .unbind("click")
      .click(function () {
        var n = $.cookie("ppinf")
          ? $.parseJSON(
              Base64.decode(unescape($.cookie("ppinf")).split("|")[3])
            ).uid
          : "";
        t.doStat("click_v0", { clickkey: "qiandao_infobar", userid: n }),
          $(this).hasClass("al_signin") ||
            ($.cookie("ppinf")
              ? o.dosigin()
              : (r.renderLoginDialog({ classAll: !0 }),
                PubSub.add("login_s1_callback", function () {
                  o.dosigin();
                })));
      });
  }
  var o = n("statics/zhe/common/js/qdpost"),
    t = n("statics/zhe/common/js/stat/picstat"),
    r = n("statics/zhe/components/login_reg_dialog/index");
  PubSub.add("ready", i);
});
/*_combo_cut*/ define("statics/zhe/common/js/ju/similarDealPage", function (i) {
  var a = i("statics/zhe/common/js/stat/picstat"),
    t = function () {
      $("body").append(
        "<style>.deal:hover .similarBtn{display: block;}</style>"
      ),
        $(".dealbox").on("click", ".deal a.similarBtn", function () {
          a.doStat("click_v0", { clickkey: "similarbutton" });
        });
    };
  PubSub.add("ready", function () {
    1 == window.showSimilarBtn && t();
  });
});
/*_combo_cut*/ define("statics/zhe/index/js/indexNav", function () {
  var e = function () {
    var e,
      a = (window.screen.width, $(window).scrollTop()),
      i = ($("#junav1").height(), $("#junav1")),
      o = $("#categoryhome,#areahome"),
      h = $("#junav1 .junavInfo");
    $("#head_wrapper #index_nav").length > 0
      ? (e =
          $("#toolbar").height() +
          $("div.header").height() +
          $("#head_nav").height() +
          $("#thisadA").height() -
          20)
      : ((e =
          $("#toolbar").height() +
          $("div.header").height() +
          $("#head_nav").height()),
        i.removeClass("homePage"),
        h.hide()),
      a > e
        ? (i.addClass("junav1_fix"), o.removeClass("home"), h.show())
        : (i.removeClass("junav1_fix"), o.addClass("home"), h.hide()),
      ($win = $(window));
    var n = function () {
      (a = $win.scrollTop()),
        $.support.fixedPosition
          ? a > e
            ? (i.addClass("junav1_fix"), o.removeClass("home"), h.show())
            : (i.removeClass("junav1_fix"), o.addClass("home"), h.hide())
          : a > e
          ? i.css({
              position: "absolute",
              left: 0,
              top: a + "px",
              width: "100%",
              "z-index": 9999,
            })
          : i.removeAttr("style");
    };
    $win.scroll(function () {
      window.lazyExecute("index_nav", n);
    });
  };
  PubSub.add("ready", e);
});
/*_combo_cut*/ define("statics/zhe/index/js/syncUserVer", function () {
  var e = function () {
    var e = $.cookie("ju_version"),
      n = $.cookie("ppinf"),
      o = $.cookie("user_version"),
      c = "0" === e || "1" === e,
      i = "def" == o || "" == o;
    c &&
      n &&
      i &&
      $.ajax({
        url: "/cn/n/user_type",
        type: "GET",
        dataType: "JSONP",
        callback: "callback",
        jsonpCallback: "pc_app_juVersion_sync",
        success: function (e) {
          $.cookie("user_version", e.userversion, {
            path: "/",
            expires: 1,
            domain: ".zhe800.com",
          });
        },
      });
  };
  PubSub.add("ready", function () {
    window.is_home_page && e();
  });
});
/*_combo_cut*/ define("statics/zhe/index/js/addFavorite", function () {
  PubSub.add("ready", function () {
    var e = $.cookie("zhe800colls") || -1;
    if ($.getParm().utm_source && "AddFavorite" == $.getParm().utm_source)
      return !1;
    if (e >= 0) return !1;
    var r = "Ctrl",
      n = function (e, r) {
        return (
          l.remove(),
          $("style#colls").remove(),
          $.cookie("zhe800colls", e, {
            expires: r,
            path: "/",
            domain: ".zhe800.com",
          }),
          !1
        );
      },
      i = function (e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r].string;
          if (n && -1 != n.indexOf(e[r].subString)) return e[r].identity;
        }
      },
      a = [
        { string: navigator.platform, subString: "Win", identity: "Windows" },
        { string: navigator.platform, subString: "Mac", identity: "Mac" },
        {
          string: navigator.userAgent,
          subString: "iPhone",
          identity: "iPhone/iPod",
        },
        { string: navigator.platform, subString: "Linux", identity: "Linux" },
      ],
      o = new $.Buffers();
    o.append('<div class="index_collection">'),
      o.append('<div class="top">'),
      o.append(
        '<div class="area"><p>å³é­</p>{{#info}}<span><a href="javascript:void(0)">ä¸åæé</a></span></div>'
      ),
      o.append(" </div> </div>");
    var t = o.toString(),
      s = i(a) || "an unknown OS",
      d = "ææ800æ¾å¥æ¶èå¤¹ï¼ææ£ä¿¡æ¯ä¸æææ¡ï¼<u>æ¾å¥æ¶èå¤¹</u>",
      c = "æ <strong>{{#sys}}+D</strong>ï¼ææ800æ¾å¥æ¶èå¤¹ï¼ææ£ä¿¡æ¯ä¸æææ¡ï¼";
    ("chrome" == $.browser.name ||
      "safari" == $.browser.name ||
      "opera" == $.browser.name ||
      ("firefox" == $.browser.name && parseInt($.browser.ver) >= 23) ||
      ("msie" == $.browser.name && parseInt($.browser.ver) >= 10) ||
      ("mozilla" == $.browser.name && 11 == parseInt($.browser.ver))) &&
      ((d = c),
      $(document).bind("keydown", function (e) {
        "Mac" == s && 68 == e.keyCode && e.metaKey
          ? n(2, 9999)
          : "Mac" != s && e.ctrlKey && 68 == e.keyCode && n(2, 9999);
      })),
      "Mac" == s && (r = "Command"),
      $("body").prepend($.ParseTpl(t, { info: d, sys: r }));
    var l = $(".index_collection");
    l.find("p").click(function () {
      return n(1, 10), !1;
    }),
      l.find("span").click(function () {
        return n(2, 9999), !1;
      }),
      l.find("u").click(function () {
        var e = "//www.zhe800.com/?utm_source=AddFavorite",
          i =
            "ãæ800å®ç½ãæå«ç¾,æ800ç¬å®¶ä¼æ ,æ800å¢è´­,å¤©å¤©ç¹ä»·9.9åé®ç§æå¨æ800ç½!";
        if ($.browser.msie)
          try {
            window.external.addFavorite(e, i), n(2, 9999);
          } catch (a) {
            try {
              window.external.addToFavoritesBar(e, i), n(0, 9999);
            } catch (o) {
              $.Dialogs.Dialog({ m: 2, msg: $.ParseTpl(c, { sys: r }) });
            }
          }
        else
          window.external
            ? (window.sidebar.addPanel(i, e, ""), n(2, 9999))
            : (l.remove(),
              $.Dialogs.Dialog({ m: 2, msg: $.ParseTpl(c, { sys: r }) }));
        return !1;
      });
  });
});
/*_combo_cut*/ define("statics/zhe/common/js/retinaImg", function (e, n, t) {
  t.exports = function (e) {
    if (window && window.devicePixelRatio > 1) {
      var n = e.match(/\d+x\d+|\d+x|x\d+/g);
      if (n) {
        var t = n.length;
        if (t > 1) {
          var i = n[t - 1].split("x"),
            a = 2 * parseInt(i[0]) || "",
            r = 2 * parseInt(i[1]) || "",
            s = n[0].split("x"),
            p = parseInt(s[0]),
            x = parseInt(s[1]);
          p >= a &&
            x >= r &&
            (e = e.replace(
              new RegExp(n[t - 1] + "(?!.*" + n[t - 1] + ")"),
              a + "x" + r
            ));
        }
      }
    }
    return e;
  };
});
/*_combo_cut*/ define("statics/zhe/index/js/navPop", function (a) {
  function i() {
    var a = $("#index_nav li"),
      i = {
        nvz: "taofushi",
        neiyi: "taoneiyi",
        nanz: "taonanzhuang",
        xie: "taoxiepinxiangbao",
        ert: "taoertong",
        muying: "taomuying",
        jiafa: "taojiafang",
        jujia: "taojujia",
        meis: "taomeishi",
        chaj: "taochajiu",
        jiad: "taojiadian",
        shuma: "taoshuma",
        xiangb: "taoxiepinxiangbao",
        peis: "taopeishi",
        meiz: "taomeizhuang",
        laon: "taoold",
        yund: "taoyundong",
        qita: "taoqita",
      },
      s = window.indexSideNavData || {};
    a.each(function () {
      function a() {
        for (var a = t[0], i = 0, n = 1; 4 > n; n++)
          a.priority > t[n].priority
            ? ((a = t[n]), (i = n))
            : (a.priority = t[n].priority) &&
              a.id > t[n].id &&
              ((a = t[n]), (i = n));
        t.splice(i, 1), (r = t.length);
      }
      var t = [],
        o = $(this).children("a"),
        e = [];
      if (!$(this).hasClass("bottom")) {
        e.push('<div class="nav_pop">'),
          e.push('<div class="nav_pop_left">'),
          o.each(function () {
            var a = i[$(this).attr("class").split(" ")[1]],
              n = $(this).attr("href"),
              o = $(this).text(),
              r = s[a] || {},
              d = r.second ? r.second.length : 0,
              h = "";
            if (0 !== d) {
              (r.first = { firstLink: n, firstName: o }),
                e.push('  <div class="pop_second">'),
                e.push(
                  '      <h3><a href="' +
                    r.first.firstLink +
                    '" target="_blank">' +
                    r.first.firstName +
                    "</a></h3>"
                ),
                e.push("  </div>"),
                e.push("<ul>");
              for (var u = 0; d > u; u++)
                (h = 1 == r.second[u].isred ? "addRed" : ""),
                  e.push(
                    '<li><a href="' +
                      r.second[u].href +
                      '" target="' +
                      r.second[u].target +
                      '"  class="' +
                      h +
                      '" add_params="utm_content=left_menu_zk">' +
                      r.second[u].name +
                      "</a></li>"
                  );
              e.push("</ul>"), (t = r.brands ? t.concat(r.brands) : t);
            }
          }),
          e.push("</div>");
        var r = t.length;
        r >= 4 && a(),
          e.push('<div class="nav_pop_right">'),
          e.push('<ul class="nav_pop_right_list">');
        for (var d = 0; r > d; d++)
          (t[d].src = n(t[d].src)),
            e.push(
              '<li><a href="' +
                t[d].href +
                '" target="' +
                t[d].target +
                '" add_params="utm_content=left_menu_zkt"><img class="nav_popimg" data-src="' +
                t[d].src +
                '" src="//z5.tuanimg.com/v2/global/img/nav_loading.gif"></a></li>'
            );
        e.push("</ul>"), e.push("</div>"), $(this).append(e.join(""));
      }
    }),
      t(a);
  }
  function t(a) {
    var i = null;
    a.on("mouseenter", function () {
      var a = this;
      clearTimeout(i),
        (i = setTimeout(function () {
          var i = $(a);
          i.find(".nav_popimg").each(function () {
            var a = $(this);
            if (!a.data("loaded")) {
              var i = a.data("src");
              $("<img />")
                .bind("load", function () {
                  a.attr("src", i), a.data("loaded", !0);
                })
                .attr("src", i);
            }
          }),
            i.find(".nav_pop").show(),
            i.siblings().find(".nav_pop").hide();
        }, 50));
    }),
      $("#index_nav").on("mouseleave", function () {
        clearTimeout(i), $(this).find(".nav_pop").hide();
      });
  }
  var n = a("statics/zhe/common/js/retinaImg");
  PubSub.add("ready", function () {
    i();
  });
});
/*_combo_cut*/ define("statics/zhe/search/js/sidePop", function () {
  function i(i) {
    $.cookie("sideAd", i || sideAd.id, {
      path: "/",
      expires: 1,
      domain: ".zhe800.com",
    });
  }
  function o() {
    if (
      window.sideAd &&
      (("www.zhe800.com" === location.hostname && "/" === location.pathname) ||
        "search.zhe800.com" === location.hostname)
    ) {
      var i = $.cookie("sideAd");
      return (
        "yes" === i && (this.setCookie(sideAd.id), (i = sideAd.id)),
        i != sideAd.id
      );
    }
    return !1;
  }
  PubSub.add("ready", function () {
    if (o()) {
      var e = new $.Buffers();
      e.push('<div class="right_down">'),
        e.push('<a href="javascript:void(0)" class="close"></a>'),
        e.push(
          sideAd.link
            ? '<a href="' +
                sideAd.link +
                '" target="_blank"><img src="' +
                sideAd.img +
                '" alt="" /></a>'
            : '<img src="' + sideAd.img + '" alt="" />'
        ),
        e.push("</div>"),
        $(".toolbar").after(e.toString());
      var d = $(".right_down"),
        n = d.find("img"),
        t = n.closest("a");
      d.find(".close").bind("click", function (o) {
        o.preventDefault(), d.remove(), i();
      }),
        t.bind("click", function () {
          i();
        });
      var s = "<style>.right_down.hide_min_window{visibility:hidden;}</style>";
      if (
        ($(document.body).append(s),
        $(window).bind("scroll.right_down", function () {
          var i = $(".right_down").offset().top + $(".right_down").height(),
            o = $(".about").offset().top;
          $("#footBanner").length > 0 && (o = $("#footBanner").offset().top),
            i >= o
              ? $(".right_down").addClass("hide_min_window")
              : $(".right_down").removeClass("hide_min_window");
        }),
        $.browser.msie && 6 == $.browser.version)
      ) {
        var r = d.offset().top;
        $(window).bind("scroll", function () {
          var i = document.documentElement.scrollTop;
          d.css({ bottom: "auto", top: i + r });
        });
      }
    }
  });
});
/*_combo_cut*/ define("statics/zhe/index/js/index_hot_brand", function (n) {
  var e = n("statics/zhe/common/js/stat/picstat");
  if (
    window.is_home_page &&
    "1" == window.is_home_page &&
    1 == window.indexFirstPage
  ) {
    var t = $("#UED_FocusImage");
    PubSub.add("ready", function () {
      t.switchable({
        type: "focus",
        contentEle: ".slider_main",
        mainItem: ".slider_panel",
        indexBtn: !0,
        event: "mouseenter",
        speed: 500,
        autoPlay: !0,
        stayTime: 5e3,
        isLazyload: !0,
        lazyLoadItem: ".fi_player",
        callbackClickPrev: function () {
          e.doStat("click_v0", { clickkey: "index_adlunbo_left" });
        },
        callbackClickNext: function () {
          e.doStat("click_v0", { clickkey: "index_adlunbo_right" });
        },
        callbackBefore: function () {
          var n = new Image(),
            e = t.find(".fade_indexBtn .indexSelected").index(),
            i = -1 === e ? 0 : e,
            a = t.find(".fi_player").eq(i);
          (n.onload = function () {
            a.css({ width: "100%", height: "100%" });
          }),
            (n.src = a.attr("src"));
        },
      }),
        t
          .mouseenter(function () {
            t.find(".fade_dirBtn a").addClass("show");
          })
          .mouseleave(function () {
            t.find(".fade_dirBtn a").removeClass("show");
          }),
        $("#UED_FocusImage .fade_indexBtn b")
          .mouseenter(function () {
            t.find(".fade_dirBtn a").removeClass("show");
          })
          .mouseleave(function () {
            t.find(".fade_dirBtn a").addClass("show");
          });
    }),
      PubSub.add("ready", function () {
        var n = $(".brand_hot"),
          e = n.find(".dirBtn");
        n.find("li").length <= 1 ||
          (n.switchable({
            type: "slider",
            contentEle: "ul",
            mainItem: "li",
            mainSelectedClass: "itemOn",
            prevEle: ".brand_hot_prev",
            nextEle: ".brand_hot_next",
            speed: 500,
            autoPlay: !0,
            stayTime: 5e3,
            isLazyload: !0,
            lazyLoadItem: ".small_banner_img",
          }),
          n.find("li").length > 1 &&
            n.hover(
              function () {
                e.show();
              },
              function () {
                e.hide();
              }
            ));
      }),
      PubSub.add("ready", function () {
        function n(n, t) {
          e.doStat("click_v0", { clickkey: n, userid: t });
        }
        var t = $(".area.dealadbox .thisadsbox"),
          i = t.find(".item"),
          a = i.length;
        if (!(1 >= a)) {
          t.switchable({
            type: "focus",
            contentEle: ".container",
            mainItem: ".item",
            mainSelectedClass: "itemSelected",
            pageBtn: !0,
            indexBtn: !0,
            event: "mouseenter",
            speed: 200,
            autoPlay: !0,
            stayTime: 5e3,
            isLazyload: !0,
            lazyLoadItem: ".small_banner_img",
          });
          var d = "";
          "" != $.cookie("ppinf") &&
            null != $.cookie("ppinf") &&
            (d = $.parseJSON(
              Base64.decode(window.unescape($.cookie("ppinf")).split("|")[3])
            ).uid.replace(/^u/g, "")),
            t.find("a").on("click.tongji", function () {
              var e = $(this);
              e.hasClass("fade_prev")
                ? n("small_previous", d)
                : e.hasClass("fade_next") && n("small_next", d);
            });
        }
      }),
      PubSub.add("ready", function () {
        function n() {
          $("#index_nav ul.nav_big>li").hover(
            function () {
              $(this).hasClass("bottom") || $(this).addClass("on");
            },
            function () {
              $(this).hasClass("bottom") || $(this).removeClass("on");
            }
          );
        }
        n();
      }),
      PubSub.add("ready", function () {
        function n(n) {
          if (
            !(
              window.param &&
              window.param.dacuIndexAdBannerArr &&
              window.param.dacuIndexAdBannerArr.length > 1
            )
          ) {
            var e = "narrow" === n ? "src_n" : "src_w",
              t = $("#UED_FocusImage"),
              i = t.find(".slider_panel img");
            return 1 !== i.length
              ? void $("#rigt_wrapper .big_ban img").attr("src", function () {
                  return $(this).attr(e);
                })
              : (i.eq(0).attr("src", function () {
                  return $(this).attr(e);
                }),
                void i.attr("data-src", function () {
                  return $(this).attr(e);
                }));
          }
        }
        function e(n) {
          var e = "narrow" === n ? "src_n" : "src_w",
            t = $("#hotSaleIndex li img");
          t.attr("src", function () {
            return $(this).attr(e);
          });
        }
        function t(n) {
          var e = "narrow" === n ? "src_n" : "src_w",
            t = $("#brandAds .brand_hot li");
          t.find(".small_banner_img")
            .attr("src", function () {
              return $(this).attr(e);
            })
            .attr("data-src", function () {
              return $(this).attr(e);
            });
          var i = $("#brandSale .brands_small_banners li img");
          i.attr("src", function () {
            return $(this).attr(e);
          }),
            1 !== t.length &&
              $("#brandAds .brand_hot ul").css({
                width: function () {
                  return (
                    $(this).find("li").length *
                    $("#brandAds .brand_hot").width()
                  );
                },
                marginLeft: function () {
                  return (
                    -(
                      $(this).find(".itemOn").index() *
                      $("#brandAds .brand_hot").width()
                    ) + "px"
                  );
                },
              });
        }
        var i = window.innerWidth || $(document).width(),
          a = /msie\s8\.0/.test(navigator.userAgent.toLowerCase());
        a ||
          $(window).resize(function () {
            var a = window.innerWidth || $(document).width();
            i >= 1280 && 1280 > a
              ? ((i = window.innerWidth || $(document).width()),
                n("narrow"),
                e("narrow"),
                t("narrow"))
              : 1280 > i &&
                a >= 1280 &&
                ((i = window.innerWidth || $(document).width()),
                n("wide"),
                e("wide"),
                t("wide"));
          });
      });
  }
});
/*_combo_cut*/ define("statics/zhe/components/flashsale/tpl.ejs", function (
  require,
  exports,
  module
) {
  function render(data) {
    var __p = [],
      _p = function (a) {
        __p.push(a);
      };
    with (data) {
      _p(
        '\r\n  <div class="flashsaleModule" id="flashsaleModuleWrap">\r\n  	<ul need-exposure="" exposure-pos-val="flash_sale_'
      ),
        _p(__e(posVal)),
        _p('" exposure-pos-type="home" exposure-columns="'),
        _p(__e(jsons.length)),
        _p('">');
      for (var i = 0; i < jsons.length; i++) {
        var deal = jsons[i],
          flash = deal.xianshi;
        _p('		<li data-id="'),
          _p(__e(deal.id)),
          _p('" data-type="'),
          _p(__e(deal.type)),
          _p('" data-seq="'),
          _p(__e(i + 1)),
          _p("\" exposurenum='0' >"),
          flash.cpc_coupon_icon
            ? (_p(
                '                <a class="cpc_subscript" style="background:url('
              ),
              _p(__e(flash.logo_image_url)),
              _p(
                ') 0 0 no-repeat!important;top:0px!important;left:0px!important;" href="'
              ),
              _p(__e(deal.deal_coupon.url)),
              _p('" target="_blank"><span class="y1">'),
              _p(__e(flash.youhui_price)),
              _p('åå¸</span><span class="y2">ç¹æ­¤é¢å</span></a>'))
            : flash.show_cpc_jiaobiao &&
              _p('		    	<span class="xsqJiaobiao baokuan_icon"></span>'),
          _p("			<a onclick=\"add_page_stats_to_params(this,'"),
          _p(__e(deal.id)),
          _p("','')\" href=\""),
          _p(__e(flash.jump_url)),
          _p(
            '" add_params="utm_content=xianshiqiang" target="_blank" data-url="'
          ),
          _p(__e(flash.deal_url)),
          _p('" data-begintime="'),
          _p(__e(deal.begin_time)),
          _p('" class="saleDeal" >'),
          _p(flash.subscript),
          _p(
            '	            <div class="dealCon">\r\n                  	<img src="'
          ),
          _p(__e(flash.image)),
          _p('" class="dealImg">'),
          _p(flash.statusText),
          _p(
            '	                \r\n  	            </div>\r\n  	            <div class="title_new">\r\n  	                <p class="word" title="'
          ),
          _p(__e(deal.title)),
          _p('">'),
          _p(__e(flash.fulltitle)),
          _p(
            '</p>\r\n  	            </div>\r\n  \r\n  	            <div class="dealInfo">\r\n  	                <span class="price">Â¥<em>'
          ),
          _p(__e(flash.price)),
          _p("</em></span>"),
          flash.cpc_coupon &&
            (_p('<span class="'), _p(__e(flash.cpc_coupon)), _p('"></span>')),
          _p("	                "),
          flash.discountText &&
            (_p('<span class="shop_preferential" '),
            flash.presell_info &&
              _p(" style=\"color:#ec1611;font-family:'microsoft yahei';\" "),
            _p(">"),
            _p(__e(flash.discountText)),
            _p("</span>")),
          _p("	            </div>\r\n  	        </a>\r\n  		</li>");
      }
      _p(
        '	</ul>\r\n  	<a href="javascript:void(0)" class="prev trigger"></a>\r\n      <a href="javascript:void(0)" class="next trigger"></a>\r\n  </div>'
      );
    }
    return __p.join("");
  }
  var __a = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    },
    __b = /[&<>"']/g,
    __e = function (a) {
      return (
        (a = String(a)),
        a.replace(__b, function (a) {
          return __a[a];
        })
      );
    };
  module.exports = render;
});
/*_combo_cut*/ define("statics/zhe/components/flashsale/index", function (
  e,
  t,
  a
) {
  function s(e, t) {
    var t = $.extend({}, t),
      a = { ins: !1, outs: !1 };
    try {
      var s = t.percent > 0 && t.percent <= 1 ? t.percent : 0.8;
      if ("none" == $(e).css("display")) return a;
      var i = !0,
        n = e.offsetTop,
        o = e.offsetLeft,
        l = e.offsetWidth,
        r = e.offsetHeight;
      if (
        ((o >= e.offsetParent.offsetWidth || -l / 2 > o) && (i = !1),
        0 == n && 0 == o && 0 == l && 0 == r)
      )
        return a;
      for (; e.offsetParent; )
        (e = e.offsetParent), (n += e.offsetTop), (o += e.offsetLeft);
      var d = window.pageYOffset,
        c = window.pageXOffset,
        u = window.innerWidth;
      return d >= n + r || o > c + u || n > d + $(window).height() || !i
        ? ((a.outs = !0), (a.ins = !1), a)
        : n + r * (1 - s) >= d &&
          o + 0.2 * l >= c &&
          n + r * s <= d + window.innerHeight &&
          c + u >= o + 0.8 * l &&
          i
        ? ((a.outs = !1), (a.ins = !0), a)
        : ((a.outs = !1), (a.ins = !1), a);
    } catch (p) {
      return !1;
    }
  }
  var i = e("statics/zhe/components/flashsale/tpl.ejs"),
    n = {
      getFlashData: function (e) {
        function t() {
          var e = s(document.getElementById("flashsaleModuleWrap"), {
            percent: 0.8,
          });
          1 != p.attr("exposured") && e.ins
            ? (n.flashExposure(u.slice(n.index, n.index + n.verCount)),
              p.attr("exposured", 1))
            : e.outs && p.attr("exposured", -1);
        }
        if (e && 1 == e.status) {
          {
            var a = window.setUnixTime || new Date().getTime(),
              o = new Date(a),
              l = parseInt(o.getDate()),
              r = parseInt(o.getMonth()),
              d = parseInt(o.getFullYear());
            new Date(d, r, l).getTime();
          }
          (e.posVal = ($(".tab-nav .active").text() || "").split(" ")[0]),
            (n.serverDay = new Date(d, r, l).getTime()),
            $.each(e.jsons, function (e, t) {
              n.handleFlashData(t);
            }),
            $("#flashSale").append(i(e));
          var c = $(".flashsaleModule ul"),
            u = $(".flashsaleModule li");
          (n.oneWidth = u.outerWidth(!0)),
            c.css("width", n.len * n.oneWidth),
            (n.verCount = Math.ceil(
              $(".flashsaleModule").width() / n.oneWidth
            )),
            (n.len = u.length),
            (n.index = 0),
            n.bindEvent(2);
          var p = $(".flashsaleModule");
          $(window).on(
            "scroll",
            _.debounce(function () {
              t();
            }, 500)
          ),
            t();
        }
      },
      handleFlashData: function (e) {
        if (e.xianshi) {
          var t = e.xianshi;
          if (
            ((t.deal_url =
              e.url_name && e.id
                ? "//out.zhe800.com/ju/deal/" + e.url_name + "_" + e.id
                : ""),
            100 == t.activity_type || 101 == t.activity_type)
          ) {
            switch (
              ((t.brand_url = e.pinpai && e.pinpai.link ? e.pinpai.link : ""),
              (t.subscript =
                100 == t.activity_type
                  ? '<span class="xsqJiaobiao xsq_miaosha_icon"></span>'
                  : ""),
              (t.subscript =
                101 == t.activity_type
                  ? '<span class="xsqJiaobiao xsq_presell_icon"></span>'
                  : t.subscript),
              t.page_type)
            ) {
              case 0:
                t.jump_url = t.deal_url
                  ? t.deal_url + "?utm_content=xianshiqiang"
                  : "";
              case 1:
                t.jump_url =
                  e.seller_id && e.id
                    ? "//store" +
                      e.seller_id +
                      ".zhe800.com?id=" +
                      e.id +
                      "&utm_content=xianshiqiang"
                    : t.deal_url + "?utm_content=xianshiqiang";
                break;
              case 2:
                var a =
                  e.pinpai && e.pinpai.brand_id
                    ? "&brandid=" + e.pinpai.brand_id
                    : "";
                t.jump_url = t.brand_url
                  ? t.brand_url + "&utm_content=xianshiqiang" + a
                  : t.deal_url + "?utm_content=xianshiqiang";
                break;
              case 3:
                t.jump_url = t.pc_url
                  ? t.pc_url
                  : t.deal_url + "?utm_content=xianshiqiang";
                break;
              default:
                t.jump_url = t.deal_url + "?utm_content=xianshiqiang";
            }
            "onsale" == t.flashStatus &&
              (t.jump_url = t.deal_url + "?utm_content=xianshiqiang"),
              (t.zt2Word2 = "é" + t.stock + "ä»¶"),
              (t.zt3Word2 = ""),
              (t.stockWord = "");
          } else if (99 == t.activity_type)
            (t.jump_url = t.deal_url + "?utm_content=xianshiqiang"),
              t.already_coupon &&
                ((t.cpc_coupon_icon =
                  e.deal_coupon && e.deal_coupon.url && t.logo_image_url
                    ? !0
                    : ""),
                (t.cpc_coupon = "cpc_coupon"));
          else {
            t.deal_url = t.flash_deal_url;
            var s =
                8 == t.activity_type
                  ? window.encodeURIComponent("?new_user=1")
                  : "",
              i =
                "//out.zhe800.com/jump?deal_id=" +
                e.id +
                "&url=" +
                location.protocol +
                "//shop.zhe800.com/products/" +
                e.zid +
                s +
                "&jump_source=1&qd_key=qyOwt6Jn&zid=" +
                e.zid;
            (t.jump_url = 0 == t.page_type ? i : t.deal_url),
              (t.subscript = s
                ? '<span class="xsqJiaobiao new_user_icon"></span>'
                : ""),
              (t.zt2Word2 =
                "é" + t.stock + "ä»¶ï¼æ¢å®æ¢å¤" + t.list_price + "å"),
              (t.zt3Word2 = "åä»·" + t.list_price + "åè´­ä¹°"),
              (t.stockWord = "æ¢å®æ¢å¤åä»·" + t.list_price + "å");
          }
          2 == e.type
            ? (t.discountText = "å»å¤©ç«")
            : 3 == e.type
            ? (t.discountText = "å»æ·å®")
            : ((t.discountText = t.presell_info
                ? t.presell_info
                : t.discountText),
              (t.statusText = n.handleDealStaus(t)));
        }
      },
      handleDealStaus: function (e) {
        var t = "";
        switch (e.flashStatus) {
          case "forecast":
            var a = n.parseShowTimes(e.begin_time);
            (t += '<div class="zt2Qrcode overlay">'),
              (t += '<div class="xsqMask"></div>'),
              (t += '<p class="word1">' + a + "å¼æ¢</p>"),
              (t += '<p class="word2">' + e.zt2Word2 + "</p>"),
              (t += '<p class="word3">æ¥çåå&gt;&gt;</p></div>');
            break;
          case "onsale":
            var s = parseInt(e.activity_stock + e.lock_stock);
            (t += '<div class="stock">'),
              (t += '<div class="xsqMask"></div>'),
              (t +=
                '<span class="stockWord"><i class="stocknumber">è¿å©' +
                s +
                "ä»¶</i> " +
                e.stockWord +
                "</span></div>");
            break;
          case "total_over":
            t += '<span class="soldOut xsqIcon"></span>';
            break;
          case "limit_over":
            (t += '<span class="finishIcon xsqIcon"></span>'),
              (t += '<div class="finish overlay">'),
              (t += '<div class="xsqMask"></div>'),
              (t += '<p class="word1">æ´»å¨ç»æ</p>'),
              (t += '<p class="word2">' + e.zt3Word2 + "</p>"),
              (t += '<p class="word3">æ¥çåå&gt;</p></div>');
            break;
          default:
            var s = parseInt(e.activity_stock + e.lock_stock);
            (t += '<div class="stock">'),
              (t += '<div class="xsqMask"></div>'),
              (t +=
                '<span class="stockWord"><i class="stocknumber">è¿å©' +
                s +
                "ä»¶</i> " +
                e.stockWord +
                "</span></div>");
        }
        return t;
      },
      parseShowTimes: function (e) {
        var t = parseInt($.trim(e)),
          a = new Date(t).getDate(),
          s = new Date(t).getMonth(),
          i = new Date(t).getFullYear(),
          o = new Date(i, s, a).getTime(),
          l = new Date(t).getHours(),
          r = new Date(t).getMinutes(),
          d = "";
        return (
          (l = 10 > l ? "0" + l : l),
          (r = 10 > r ? "0" + r : r),
          (d =
            n.serverDay > o
              ? "æ¨" + l + ":" + r
              : n.serverDay == o
              ? l + ":" + r
              : "ææ¥" + l + ":" + r)
        );
      },
      bindEvent: function (e) {
        var t = $(".flashsaleModule ul");
        if (3 != e) {
          $(".flashsaleModule .trigger").click(function () {
            var e = $(this).hasClass("next"),
              a = $(this).hasClass("prev"),
              s = $(".flashsaleModule li").eq(n.index),
              i = Math.floor(n.len / n.verCount),
              o = n.len % n.verCount,
              l = 0 == o ? (i - 1) * n.verCount : i * n.verCount,
              r = $(".flashsaleModule").width();
            if (((allVer = 0 == o ? i : i + 1), (maxDis = allVer * r), e)) {
              var d = s.nextAll("li"),
                c = d.length;
              if (d && c >= n.verCount)
                t.animate({ left: "-=" + r }, 500), (n.index += n.verCount);
              else {
                for (var u = 0; u < n.verCount; u++)
                  $(".flashsaleModule li")
                    .eq(u)
                    .css({ position: "relative", left: maxDis });
                t.animate({ left: "-=" + r }, 500, function () {
                  for (var e = 0; e < n.verCount; e++)
                    $(".flashsaleModule li").eq(e).removeAttr("style");
                  t.css("left", 0);
                }),
                  (n.index = 0);
              }
            } else if (a) {
              var p = s.prevAll("li");
              if (((prevAllLen = p.length), p && prevAllLen >= n.verCount))
                t.animate({ left: "+=" + r }, 500), (n.index -= n.verCount);
              else {
                for (var u = l; u < n.len; u++)
                  $(".flashsaleModule li")
                    .eq(u)
                    .css({ position: "relative", left: -maxDis });
                t.animate({ left: "+=" + r }, 500, function () {
                  for (var e = l; e < n.len; e++)
                    $(".flashsaleModule li").eq(e).removeAttr("style");
                  t.css("left", -(maxDis - r));
                }),
                  (n.index = l);
              }
            }
            var h = $(".flashsaleModule li").slice(
              n.index,
              n.index + n.verCount
            );
            n.flashExposure(h);
            for (var f = !0, v = [], _ = 0; _ < n.len; _++) {
              var m = $(".flashsaleModule li").eq(_).data("id");
              v.push(m);
            }
            (v = v.join()),
              f &&
                ((f = !1),
                $.ajax({
                  type: "get",
                  url: "//www.zhe800.com/api/get_xsq_deal_kucun",
                  dataType: "jsonp",
                  data: { deal_ids: v },
                  jsonp: "callback",
                  jsonpCallback: "getXianshiqiang_kucun",
                  success: function (e) {
                    for (var t = 0; t < n.len; t++) {
                      var a = $(".flashsaleModule li").eq(t).data("id");
                      $('li[data-id="' + a + '"]')
                        .find("i.stocknumber")
                        .html("è¿å©" + e[a] + "ä»¶");
                    }
                    f = !0;
                  },
                  error: function (e) {
                    console.info(e);
                  },
                }));
          });
          var a = window.innerWidth || $(document).width();
          $(window).resize(function () {
            var e = $(".flashsaleModule ul"),
              t = $(".flashsaleModule li"),
              s = window.innerWidth || $(document).width();
            (n.len = t.length),
              (n.oneWidth = t.outerWidth(!0)),
              e.css("width", n.len * n.oneWidth),
              (n.verCount = Math.ceil(
                $(".flashsaleModule").width() / n.oneWidth
              )),
              (n.index = 0),
              e.css("left", 0);
            var s = window.innerWidth || $(document).width();
            a >= 1280 && 1280 > s
              ? (t.length >= 5 && $(".flashSale_wrap").show(),
                (a = window.innerWidth || $(document).width()))
              : 1280 > a &&
                s >= 1280 &&
                (t.length < 6 && $(".flashSale_wrap").hide(),
                (a = window.innerWidth || $(document).width()));
          });
        }
      },
      flashExposure: function (e) {
        for (var e = e, t = [], a = 0; a < e.length; a++) {
          var s = $(e[a]),
            i = s.data("id") || "",
            o = 1 == s.data("type") ? "zhe" : "tao",
            l = s.data("seq") || "",
            r = new Date().getTime(),
            d = parseInt(s.attr("exposurenum")) + 1 || 0,
            c = {
              id: i,
              sourcetype: o,
              x: 1,
              y: l,
              time: r,
              exposure_num: d,
              n: l,
              zid: "",
            };
          t.push(c), s.attr("exposurenum", d);
        }
        var u =
            $.cookie("utm_cmd") +
            "|" +
            $.cookie("utm_ctr") +
            "|" +
            $.cookie("utm_cct") +
            "|" +
            $.cookie("utm_ccn"),
          p = ($(".tab-nav .active").text() || "").split(" ")[0],
          h =
            "//analysis.tuanimg.com/bgl_v2.gif?pos_type=home&uid=" +
            n.getTao800UserId() +
            "&deviceid=" +
            $.cookie("session_id") +
            "&cookieid=" +
            $.cookie("__utma") +
            "&fromsource=1&platform=&version=" +
            $.cookie("ju_version") +
            "&channel=" +
            $.cookie("utm_csr") +
            "&newversion=" +
            $.cookie("ju_version_new") +
            "&cdetail=" +
            u +
            "&userrole=" +
            $.cookie("user_version") +
            "&child=" +
            $.cookie("maternal") +
            "&listversion=" +
            $.cookie("ju_rv") +
            "&url=" +
            window.encodeURIComponent(window.location.href) +
            "&refer=" +
            window.encodeURIComponent(document.referrer) +
            "&page=1&screenversion=" +
            $.cookie("screenversion") +
            "&deals=" +
            JSON.stringify(t) +
            "&pos_value=flash_sale_" +
            p,
          f = new Image();
        (f.onload = function () {
          $(this).remove();
        }),
          (f.src = h),
          document.body.appendChild(f);
      },
      getTao800UserId: function () {
        var e,
          t = "";
        return (
          $.cookie("ppinf") &&
            ((e =
              $.parseJSON(Base64.decode($.cookie("ppinf").split("|")[3])) ||
              {}),
            (t = e.uid || "")),
          t
        );
      },
    };
  a.exports.init = n.getFlashData;
});
/*_combo_cut*/ define("statics/zhe/index/js/initFlashSale", function (s, a) {
  function i() {
    var s = h.isLogin(),
      a = 0;
    s && s.uid && (a = s.uid.substring(1)),
      $.ajax({
        url: "//zapi.zhe800.com/zhe800_n_api/flashsale/index",
        data: { user_id: a },
        jsonp: "callback",
        dataType: "jsonp",
        jsonpCallback: "flashsaleIndex",
        success: function (s) {
          return s.jsons.length < 5
            ? void $(".flashSale_wrap").remove()
            : (1 == window.isWide &&
                5 == s.jsons.length &&
                $(".flashSale_wrap").hide(),
              $(".flashSale_wrap").html(n(s.session)),
              void e.init(s));
        },
      });
  }
  function n(s) {
    var a = [];
    a.push('<div id="flashSale" class="area">'),
      a.push('<div class="hdXsq">'),
      a.push('<div class="tab-nav">');
    for (var i = 0, n = s.length; n > i; i++) {
      var e = s[i],
        h = e.current ? 'class="active" data-id="' + e.id + '"' : "";
      a.push(
        '<a href="//www.zhe800.com/cn/n/xianshiqiangPC?season_id=' +
          e.id +
          '" data-index="' +
          i +
          '" target="_blank" ' +
          h +
          " >" +
          e.hhmm +
          " </a><em></em>"
      );
    }
    return (
      a.push("</div>"),
      a.push('<div class="tit">'),
      a.push("<span>ééæ¢è´­</span>"),
      a.push("</div>"),
      a.push("</div>"),
      a.push("</div>"),
      a.join("")
    );
  }
  var e = s("statics/zhe/components/flashsale/index"),
    h = s("statics/zhe/common/js/isLogin");
  i(), (a.init = i);
});
/*_combo_cut*/ define("statics/zhe/components/zhedeals/deal/libs/cache", function (
  e,
  n,
  t
) {
  var c = {},
    l = {
      set: function (e, n) {
        return (c[e] = n), n;
      },
      get: function (e) {
        return c[e];
      },
      clearAll: function () {
        c = {};
      },
      clearKey: function (e) {
        e && (c[e] = null);
      },
    };
  t.exports = l;
});
/*_combo_cut*/ define("statics/zhe/components/zhedeals/deal/libs/tools", function (
  e,
  t,
  r
) {
  var n = e("statics/zhe/components/zhedeals/deal/libs/cache"),
    a = {
      timeFormat: function (e) {
        if (e) {
          var t = new Date(e),
            r = t.getFullYear(),
            n = t.getMonth() + 1,
            a = t.getDate(),
            o = t.getHours(),
            i = t.getMinutes(),
            s = t.getSeconds();
          (n = 10 > n ? "0" + n : n),
            (a = 10 > a ? "0" + a : a),
            (o = 10 > o ? "0" + o : o),
            (i = 10 > i ? "0" + i : i),
            (s = 10 > s ? "0" + s : s);
          var u = r + "-" + n + "-" + a + " " + o + ":" + i + ":" + s;
          return u;
        }
      },
      formatUrl: function (e) {
        var t = e.protocol || "http",
          r = e.host || "www.zhe800.com",
          n = e.pathname || "",
          a = e.query || {},
          o = [],
          i = "",
          s = [];
        for (var u in a) a.hasOwnProperty(u) && a[u] && o.push(u + "=" + a[u]);
        return (
          o.length && (i = o.join("&")),
          t && s.push(t + "://"),
          r && s.push(r),
          n && s.push("/" + n),
          i && s.push("?" + i),
          s.join("")
        );
      },
      apartDays: function (e) {
        var t = new Date(),
          r = new Date(e),
          n = t.getFullYear(),
          a = t.getMonth(),
          o = t.getDate(),
          i = r.getFullYear(),
          s = r.getMonth(),
          u = r.getDate(),
          p = (new Date(i, s, u) - new Date(n, a, o)) / 864e5;
        return p;
      },
      toYuan: function (e) {
        return (
          (e = parseInt(e)), 100 > e / 100 ? e / 100 : Math.ceil(e / 10) / 10
        );
      },
      remainTime: function (e) {
        if (e) {
          var t = "remainTime" + e,
            r = n.get(t);
          if (r) return r;
          var a,
            o,
            i,
            s = Number(new Date(e)),
            u = s - Number(new Date()),
            p = "";
          return (
            (a = parseInt(u / 864e5)),
            (o = parseInt((u % 864e5) / 36e5)),
            (i = parseInt(((u % 864e5) % 36e5) / 6e4)),
            (p =
              0 >= u || a > 15
                ? ""
                : a >= 1
                ? "å©ä½" + a + "å¤©"
                : o >= 1
                ? "å©ä½" + o + "å°æ¶"
                : i >= 1
                ? "å©ä½" + i + "åé"
                : "å©ä½1åé"),
            n.set(t, p)
          );
        }
        return "";
      },
      getKey: function (e, t) {
        if ((void 0 === t && (t = ""), !e)) return t;
        if (this[e]) return this[e];
        for (
          var r, n = (e + "").split("."), a = 0, o = this, i = n.length;
          i > a;
          a++
        ) {
          if (((r = o[n[a]]), !r)) return t;
          o = r;
        }
        return r;
      },
      parseTpl: function (e, t) {
        for (
          var r,
            n = Object.prototype.toString,
            a = new RegExp("{{([a-zA-z0-9.]+)}}");
          null != (r = a.exec(e));

        ) {
          for (
            var o = r[1].split("."), i = o.length, s = "", u = t, p = 0;
            i > p &&
            ((s = 0 === u[o[p]] ? "0" : u[o[p]] || ""),
            "[object Object]" == n.call(s));
            p++
          )
            u = s;
          e = e.replace(new RegExp(r[0], "g"), s);
        }
        return e;
      },
      keys: function (e) {
        if (Object.keys) return Object.keys(e);
        var t = [];
        for (var r in e) e.hasOwnProperty(r) && t.push(r);
        return t;
      },
    };
  r.exports = a;
});
/*_combo_cut*/ define("statics/zhe/components/zhedeals/deal/baseJson", function (
  e,
  i,
  n
) {
  var t = e("statics/zhe/components/zhedeals/deal/libs/tools"),
    r = e("statics/zhe/components/zhedeals/deal/libs/cache"),
    a = {
      divUri: function (e) {
        return e.url_name + "_" + e.id;
      },
      beginTimeFormated: function (e) {
        var i = e.begin_time,
          n = r.get(i);
        return n ? n : r.set(i, t.timeFormat(i));
      },
      endTimeFormated: function (e) {
        var i = e.end_time,
          n = r.get(i);
        return n ? n : r.set(i, t.timeFormat(i));
      },
      isBrand: function (e) {
        return !!e.pinpai;
      },
      isTemai: function (e) {
        return 1 == e.type ? 1 : 0;
      },
      isPublish: function (e) {
        return 4 == e.getKey("pinpai.publish_status");
      },
      status: function (e, i) {
        var n = e.is_oos;
        n = e.getKey("sku.oos", n);
        var t = 0,
          r = 1;
        if (i.isWin) var a = window.setUnixTime;
        if (
          ((a = a || +new Date()),
          e.begin_time > a && (r = 0),
          e.end_time < a && (t = 1),
          e.xianshi)
        ) {
          var s = e.xianshi;
          if (
            new Date() >= s.begin_time &&
            a <= s.end_time &&
            s.activity_stock <= 0 &&
            n &&
            s.lock_stock > 0
          )
            return 0;
        }
        if (e.presell) {
          var o = e.presell;
          if (o.start_time <= a && a <= o.end_time)
            return 1 == e.is_oos ? 2 : 0;
          if (o.end_time < a && a <= e.end_time) return 1 == e.is_oos ? 2 : 0;
          if (a > e.end_time) return 2;
        }
        return n || t ? 2 : r ? 0 : 1;
      },
      imgBar: "//z5.tuanimg.com/v2/ju/img/bdg_img.png",
      isBaoyou: function (e) {
        return !!e.is_baoyou;
      },
      isSku: function (e) {
        return !!e.getKey("sku.id");
      },
      couponPrice: function (e) {
        return 1 != e.type && e.deal_coupon && e.deal_coupon.price < e.price
          ? e.deal_coupon.price
          : 0;
      },
      pinpaiName: function (e) {
        return e.pinpai ? e.pinpai.name : "";
      },
      remainTime: function (e) {
        var i = e.end_time || e.getKey("cpc_shop_ext.end_time");
        return t.remainTime(i);
      },
      isTaobaoStore: function (e, i) {
        var n = e.taobao_show,
          t = i.vType;
        return n && "taojingxuan" == t
          ? 1 == n.publish_status &&
              n.end_time >= +new Date() &&
              n.begin_time <= +new Date()
          : !1;
      },
      brandPromotion: function (e, i) {
        var n = e.shop_discounts,
          t = "";
        if (n && n.length) {
          var r =
              i.isWin && window.setUnixTime ? window.setUnixTime : +new Date(),
            a = 0,
            s = n.length;
          for (a = s; a--; ) {
            var o = n[a];
            if (r >= o.start_time && r <= o.end_time) {
              var p = o.rule.split(","),
                c = 0,
                u = p.length,
                _ = p[0];
              for (c = u; c--; ) parseInt(p[c]) < parseInt(_) && (_ = p[c]);
              var l = _.split("-");
              switch (o.discount_type) {
                case 1:
                case 2:
                  t = "æ»¡" + l[0] + "åå" + l[1] + "å";
                  break;
                case 3:
                  t = "æ»¡" + l[0] + "ä»¶" + l[1] + "æ";
                  break;
                case 4:
                  t = "æ»¡" + l[0] + "ä»¶åé®";
                  break;
                case 5:
                  t = "æ»¡" + l[0] + "ååé®";
              }
            }
          }
        }
        return t;
      },
      isBrandCpc: function (e, i) {
        var n = i.vType,
          t = e.block_type,
          r = ["homepage", "tag", "new"];
        return -1 != r.indexOf(n) && (6 == t || 3 == t || 7 == t);
      },
      isBannerImg: function (e, i) {
        var n = i.vType,
          t = e.block_type,
          r = ["homepage", "tag", "new", "taojingxuan", "search"];
        return r.indexOf(n) > -1 && 4 == t;
      },
      isBannerLogo: function (e, i) {
        var n = i.vType,
          t = e.block_type,
          r = ["homepage", "tag", "new"];
        return r.indexOf(n) > -1 && 5 == t;
      },
      swdStatus: function (e, i) {
        var n = i.vType,
          t = [
            "homepage",
            "tag",
            "zone",
            "brandIndex",
            "brandTag",
            "brandInfo",
            "search",
            "pcxindacu",
            "daiyanrenzhuanti",
            "taojingxuan",
          ];
        if (-1 != t.indexOf(n)) {
          var r = e.wireless_info_share;
          if ("string" == typeof r || "object" == typeof r) {
            try {
              r = JSON.parse(r);
            } catch (a) {
              if (a) return;
            }
            if (7 != r.discountType) {
              var s = r.beginTime
                  ? +new Date(r.beginTime.replace(/-/g, "/"))
                  : "",
                o = r.endTime ? +new Date(r.endTime.replace(/-/g, "/")) : "",
                p = r.lastUpdateTime
                  ? +new Date(r.lastUpdateTime.replace(/-/g, "/"))
                  : "",
                c =
                  i.isWin && window.setUnixTime
                    ? window.setUnixTime
                    : +new Date(),
                u = function (i) {
                  if (!i) return "";
                  if (
                    (31 == r.discountType ||
                      32 == r.discountType ||
                      33 == r.discountType) &&
                    i.indexOf("%price%") > 0
                  ) {
                    var n = e.price;
                    return !n || parseFloat(n) <= 0
                      ? ""
                      : i.replace(/%price%/g, n);
                  }
                  if (
                    (51 != r.discountType && 55 != r.discountType) ||
                    i.indexOf("%s") < 0
                  )
                    return i;
                  var t = e.getKey("xianshi.prices.wireless");
                  return !t || parseFloat(t) <= 0 ? "" : i.replace(/%s/g, t);
                };
              if (s && o && c >= s && o >= c && p + 36e5 >= c) {
                var _ = u(r.promotionText);
                return (
                  (r.v2FootText = u(r.v2FootText)),
                  (r.promotionTextLong = _),
                  (r.promotionText = _),
                  (e.wireless_info_share = r),
                  !0
                );
              }
            }
          }
        }
      },
      isXsq: function (e, i) {
        if (i.isWin) var n = window.setUnixTime;
        if (((n = n || +new Date()), e.xianshi)) {
          var t = e.xianshi;
          return 1 == t.wireless_only
            ? !1
            : e.begin_time == t.begin_time && n < t.begin_time
            ? !0
            : e.begin_time < t.begin_time && n < t.begin_time
            ? !1
            : n < t.begin_time ||
              n > t.end_time ||
              (t.activity_stock <= 0 && t.lock_stock <= 0) ||
              8 == t.activity_type ||
              100 == t.activity_type ||
              99 == t.activity_type
            ? !1
            : !0;
        }
        return !1;
      },
      noImgHolder: function (e, i) {
        if (i.noImgHolder) {
          var n = r.get("noImgHolder");
          if (n && n > 0) return r.set("noImgHolder", --n), !0;
        }
      },
      isPresell: function (e, i) {
        if (i.isWin) var n = window.setUnixTime;
        if (((n = n || +new Date()), e.presell)) {
          var t = e.presell;
          if (n < t.start_time) return !0;
          if (t.start_time <= n && n <= t.end_time) return !0;
        }
        return !1;
      },
      presellText: function (e, i) {
        var n = "";
        n = i.isWin ? window.viewType.zhebuy || "" : app._zhebuy;
        var t = (n.pre_sell_info && n.pre_sell_info.pre_sell_equal) || "",
          r = (n.pre_sell_info && n.pre_sell_info.pre_sell_less) || "",
          a = e.presell;
        if (a) {
          var s = a.deposit_price == a.expand_price,
            o = a.deposit_price < a.expand_price;
          return e.isPresell
            ? s
              ? t.indexOf("{å®é}") < 0
                ? ""
                : t.replace(/{å®é}/g, a.deposit_price)
              : o
              ? r.indexOf("{å®é}") < 0 && r.indexOf("{æµç¨é}") < 0
                ? ""
                : r
                    .replace(/{å®é}/g, a.deposit_price)
                    .replace(/{æµç¨é}/g, a.expand_price)
              : ""
            : "";
        }
      },
      wirelessPriceText: function (e, i) {
        var n = "",
          t = "";
        i.isWin
          ? ((n = window.viewType.zhebuy || ""), (t = window.setUnixTime))
          : (n = app._zhebuy),
          (t = t || +new Date());
        var r =
          (n.shouji_zhuan_text && n.shouji_zhuan_text.promotionTextPc) || "";
        if (!r) return "";
        if (
          e.getKey("xianshi.wireless_only") &&
          e.getKey("xianshi.begin_time") < t &&
          e.getKey("xianshi.end_time") > t
        ) {
          var a = e.getKey("xianshi.prices.wireless");
          return r.replace(/%cheap%/g, a);
        }
      },
      flag: 0,
    };
  n.exports = a;
});
/*_combo_cut*/ define("statics/zhe/components/zhedeals/deal/bussLogic", function (
  i,
  a,
  e
) {
  var n = i("statics/zhe/components/zhedeals/deal/libs/tools"),
    t = i("statics/zhe/components/zhedeals/deal/libs/cache"),
    r = n.parseTpl,
    s = {
      className: function (i, a) {
        var e = ["deal"],
          n = (i.type, a.vType);
        return (
          i.isTaobaoStore && e.push("taotbaoStore"),
          "top" == n && e.push("topstyle"),
          e.join(" ")
        );
      },
      conClass: function (i) {
        var a = "";
        switch (i.status) {
          case 1:
            a = "zt2";
            break;
          case 2:
            a = "zt3";
        }
        return "con " + a;
      },
      dealUrl: function (i, a) {
        var e = a.vType,
          t = i.taobao_show;
        if (t && i.isTaobaoStore)
          return "//www.zhe800.com/n/cpcstore/" + t.taobao_show_id;
        if (
          ("brandIndex" == e || ("forecast" == e && i.isPublish)) &&
          i.isBrand
        )
          return i.pinpai.link;
        var r = "pindao" == e && i.isTemai;
        if (r) {
          var s = n.formatUrl({
            host: "shop.zhe800.com",
            pathname: "products/" + i.zid,
            query: { sku_id: i.sku && i.sku.id },
          });
          return n.formatUrl({
            host: "out.zhe800.com",
            pathname: "jump",
            query: {
              deal_id: i.id,
              url: s,
              jump_source: 1,
              u_type: 2,
              qd_key: "qyOwt6Jn",
              u_cid: "zhe800top",
              qd_wi: "zhe800top",
              z_cid: 0,
            },
          });
        }
        var o = n.formatUrl({
            host: "out.zhe800.com",
            pathname: "ju/deal/" + i.divUri,
            query: { sku_id: i.sku && i.sku.id },
          }),
          c = i.status,
          p = i.type;
        return 2 != c || 1 == p
          ? o
          : 2 == p || 3 == p
          ? "//www.zhe800.com/ju_deal/" + i.divUri
          : "javascript:void(0);";
      },
      onclick: function (i) {
        var a = i.isTemai || 2 !== i.status || 1 != i.block_type;
        return a ? "add_page_stats_to_params(this," + i.id + ",'')" : "";
      },
      placeholderImg: function (i) {
        return i.noImgHolder
          ? i.square_image_url
          : "//z5.tuanimg.com/v2/global/img/load_deal_310.gif";
      },
      imgUrl: function (i) {
        return i.isSku && i.sku.square_image
          ? i.sku.square_image
          : i.square_image_url;
      },
      dealTitle: function (i) {
        return i.isSku && (i.title += " " + i.sku.color), i.title;
      },
      source: function (i) {
        var a = "&nbsp|&nbsp";
        return i.isPresell
          ? '<em class="yp">é¢å®</em>' + a
          : i.youpinhui
          ? '<em class="yp">ä¼å</em>' + a
          : 1 == i.is_haitao
          ? "å¨çè´­" + a
          : 1 == i.is_import
          ? "è¿å£" + a
          : 2 == i.type
          ? "å¤©ç«" + a
          : 3 == i.type
          ? "æ·å®" + a
          : "";
      },
      price: function (i) {
        if (2 === i.block_type) return n.toYuan(i.price);
        var a = i.getKey("xianshi.prices.pc");
        if (i.isXsq && a) return a;
        var e = i.wireless_info_share;
        return !i.couponPrice ||
          (i.swdStatus && e.promotionText && 13 != e.discountType)
          ? i.price
          : parseFloat((i.price - i.couponPrice).toFixed(2));
      },
      detailUrl: function (i) {
        var a = i.type;
        return 1 == a
          ? "//shop.zhe800.com/products/" + i.zid
          : "//www.zhe800.com/ju_deal/" + i.divUri;
      },
      soldTxt: function (i, a) {
        var e = i.sold,
          n = a.vType,
          t = '<div class="sold">{{data}}</div>',
          s =
            '<div class="sold"><span>{{preSoldTxt}}<em>{{sold}}</em>ä»¶</span><i></i></div>',
          o =
            '<div class="sold seckill_sold" data-deal-id="{{id}}" data-seckill-sold="{{sold}}"></div>',
          c = i.wireless_info_share;
        if (i.swdStatus && c.v2FootText) return r(t, { data: c.v2FootText });
        if (i.remainTime && !i.youpinhui) return r(t, { data: i.remainTime });
        if (4 == i.special_deal_type && i.last_supply_count)
          return (i.preSoldTxt = "éé"), (i.sold = i.last_supply_count), r(s, i);
        if (void 0 !== e) {
          if (
            (e >= 1e4 && (e = Math.floor(e / 1e3) / 10 + "ä¸"),
            "pinpaidetail" == n && 4 == i.special_deal_type && e)
          )
            return r(o, { id: i.id, sold: e });
          if (50 > e) return r(t, { data: "æ°åä¸æ¶" });
          if ("top" == n) return (i.preSoldTxt = "æè¿æäº¤"), r(s, i);
          if ("newOrder" == n) return (i.preSoldTxt = "æ°æä¸å"), r(s, i);
          if ("pcxindacu" == n) return "";
          if ("group" == n) return (i.preSoldTxt = "å·²å®"), r(s, i);
          if (e) return r(t, { data: "å·²å®" + e + "ä»¶" });
        }
        return "";
      },
      cornerMark: function (i, a) {
        var e = i.corner_mark,
          n = "",
          t = i.xianshi || "",
          r = {
            0: "",
            5: "icon_xianshiqiang",
            9: "icon_lijian",
            11: "youhuiquan",
            17: "icon_youpinhui",
            19: "icon_brand",
            21: "icon_discount",
            23: "icon_new",
            27: "icon_baokuan",
            29: "icon_miaosha",
          };
        if (e) {
          var s = e.id,
            o = r[s],
            c = e.logo_image_url,
            p = e.logo_link,
            l = c
              ? 'style="background:url(' +
                c +
                ') 0 0 no-repeat!important;top:0px!important;left:0px!important;"'
              : "",
            u = "";
          switch (s) {
            case 7:
              e.logo_link &&
                ((p = e.logo_link), (u = "utm_content=jiaobiao_ll")),
                e.is_zhijian && e.zhijian_price >= 1
                  ? (n =
                      "<span class='subscript icon_zhijian' " +
                      l +
                      ">é¢åµ<br /><span class='zhijian_price'>å" +
                      e.zhijian_price +
                      "å</span></span>")
                  : e.is_manjian &&
                    e.man_price &&
                    e.jian_price &&
                    e.jian_price <= e.man_price &&
                    (n =
                      "<span class='subscript icon_manjian' " +
                      l +
                      ">é¢åµ<br />" +
                      e.man_price +
                      "å" +
                      e.jian_price +
                      "</span>");
              break;
            case 9:
              e.price &&
                (n =
                  '<span class="icon_lijian" ' +
                  l +
                  ">ç«å<br />" +
                  e.price +
                  "å</span>");
              break;
            case 11:
              (e.url && e.price) ||
                !i.deal_coupon ||
                ((e.url = i.deal_coupon.url || ""),
                (e.price = i.deal_coupon.price || "")),
                e.url &&
                  e.price &&
                  (n =
                    '<a class="subscript youhuiquan" ' +
                    l +
                    ' href="' +
                    e.url +
                    '" target="_blank"><span class="y1">' +
                    e.price +
                    'åå¸</span><span class="y2">ç¹æ­¤é¢å</span></a>');
              break;
            case 5:
            case 17:
            case 19:
            case 21:
            case 23:
            case 25:
            case 27:
            case 29:
            case 31:
            case 33:
              n =
                '<span style="position: absolute;top:0;left:0;z-index:5;" class="subscript"><img class="img_jiaobiao" src="' +
                c +
                '" alt="jiaobiao_img" style="width:auto;height:auto;"></span>';
              break;
            default:
              n = '<span class="subscript ' + o + '" ' + l + "></span>";
          }
          n =
            p && 11 != s
              ? '<a target="_blank" href="' +
                p +
                '" style="position:absolute;left:0;top:0;" add_params="' +
                u +
                '"> ' +
                n +
                " </a>"
              : n;
        }
        if (i.jiaobiao_image_url) {
          var _ = (jb_class = ""),
            d = "javascript:void(0);";
          i.jiaobiao_link_url
            ? ((_ = i.jiaobiao_target ? i.jiaobiao_target : "_blank"),
              (d = i.jiaobiao_link_url))
            : (jb_class = "without_link"),
            (jb_hoverImg = i.jiaobiao_hover_img
              ? i.jiaobiao_hover_img
              : i.jiaobiao_image_url),
            (n =
              '<a href="' +
              d +
              '" target="' +
              _ +
              '" class="jb_icon ' +
              jb_class +
              '"><img class="jb_img" src="' +
              i.jiaobiao_image_url +
              '" /><img class="jb_hover_img" src="' +
              jb_hoverImg +
              '" /></a>');
        }
        return (
          "pcxindacu" != a.vType ||
            (9001 != t.business_type &&
              9002 != t.business_type &&
              9003 != t.business_type) ||
            (n = ""),
          n
        );
      },
      outparams: function (i) {
        var a =
            i.pinpai && i.pinpai.brand_id
              ? "&brandid=" + i.pinpai.brand_id
              : "",
          e = "utm_content=";
        return i.swdStatus
          ? e + "wireless_customized" + a
          : i.isTaobaoStore
          ? e + "cpcstore_deal" + a
          : i.isBrand
          ? e + "brand_deal" + a
          : "";
      },
      btnTxt: function (i) {
        var a = i.status;
        if (1 == a) {
          var e = "btnTxt" + i.begin_time,
            r = t.get(e);
          if (r) return r;
          var s = n.apartDays(i.begin_time),
            o = new Date(i.begin_time),
            c = o.getHours(),
            p = o.getMinutes(),
            l = "å¼æ¢æé";
          return (
            (c = 10 > c ? "0" + c : c),
            (p = 10 > p ? "0" + p : p),
            (c = c + ":" + p),
            0 === s && (l = c + "å¼æ¢"),
            1 === s && (l = "ææ¥" + c),
            t.set(e, l)
          );
        }
        return "";
      },
      taobaoStoreIcon: function (i) {
        var a = i.type,
          e = "";
        switch (a) {
          case 1:
            e = "temai";
            break;
          case 2:
            e = "tianmao";
            break;
          case 3:
            e = "taobao";
        }
        return e;
      },
      pinpaiLink: function (i) {
        return i.isBrand ? i.pinpai.link.split("?")[0] : "";
      },
      remainDay: function (i, a) {
        if ("brandIndex" != a.vType) return "";
        var e =
            a.isWin && window.setUnixTime ? window.setUnixTime : +new Date(),
          n = i.end_time - e,
          t = Math.floor(n / 864e5),
          r = Math.floor(n / 36e5);
        return t >= 1
          ? "<em>å©" + t + "å¤©</em>"
          : r >= 1
          ? " <em>å©" + r + "å°æ¶</em>"
          : 1 > (r > 0)
          ? " <em>å³å°ç»æ</em>"
          : "";
      },
      brandIndexCoupon: function (i, a) {
        if ("brandIndex" != a.vType) return "";
        var e = i.brandPromotion;
        return e
          ? "<i>" + e + "</i>"
          : i.pinpai && i.pinpai.deals_count
          ? "<i>å±" + i.pinpai.deals_count + "æ¬¾</i>"
          : "";
      },
      adsParams: function (i, a) {
        var e = a.vType;
        return "homepage" == e || "zone" == e
          ? "utm_content=zhe800_banner_sydeal"
          : "utm_content=zhe800_deal";
      },
      originPrice: function (i) {
        return 2 === i.block_type
          ? n.toYuan(i.origin_price)
          : i.origin_price || "";
      },
      store: function (i, a) {
        var e = i.getKey("sale_stock.kucun", 0),
          n = 0;
        return (
          (n = a.isWin
            ? viewType && viewType.zhebuy
              ? viewType.zhebuy.deal_stock_limit
              : 0
            : global && global.app && global.app._zhebuy
            ? global.app._zhebuy.deal_stock_limit
            : 0),
          1 == i.type && 2 != i.status && n > e && e > 0
            ? '<span class="less-stock">å°éåºå­</span>'
            : ""
        );
      },
      brandCpc: function (i) {
        var a = {};
        if (i.isBrandCpc) {
          var e = i.cpc_shop_ext,
            t = i.block_type,
            s =
              '<em class="price-sign">Â¥</em>{{lowerPrice}}-<em class="price-sign">Â¥</em>{{higherPrice}}';
          if (
            ((a.cornerMark = i.jiaobiao_image
              ? '<span class="sign-icon"><img src="' +
                i.jiaobiao_image +
                '" /></span>'
              : ""),
            3 == t)
          )
            return (
              (a.lowerPrice = n.toYuan(i.lowest_price)),
              (a.higherPrice = n.toYuan(i.highest_price)),
              (a.source = i.major_brand_id
                ? '<span class="brand_fav">æ¶èåç</span>'
                : ""),
              (a.activity = i.youhui_activity || r(s, a)),
              (a.title = i.title ? i.title : ""),
              (a.url = "//brand.zhe800.com/" + i.url_name),
              (a.type = "brand"),
              (a.image = i.list_pic),
              a
            );
          if (6 == t && e)
            return (
              (a.lowerPrice = n.toYuan(e.lowest_price)),
              (a.higherPrice = n.toYuan(e.highest_price)),
              (a.source = '<span class="tao-store">æ·åºéºå¢</span>'),
              (a.activity = e.youhui_activity || r(s, a)),
              (a.title = e.name),
              (a.url = "//www.zhe800.com/n/cpcstore/" + e.taobao_show_id),
              (a.type = "banner"),
              (a.image = e.pic),
              a
            );
          if (7 == t)
            return (
              (a.cls = "block-type7"),
              (a.url = i.bannerImg.url),
              (a.type = "banner"),
              (a.image = i.list_pic),
              (a.title = i.activity_name),
              (a.activity = i.you_hui_activity),
              a
            );
        }
        return a;
      },
      bannerImg: function (i) {
        var a = {};
        if (i.isBannerImg || 7 == i.block_type)
          switch (
            ((a.cornerMark = i.jiaobiao_image
              ? '<span class="sign-icon"><img src="' +
                i.jiaobiao_image +
                '" /></span>'
              : ""),
            i.point)
          ) {
            case 1:
              a.url = i.point_detail;
              break;
            case 2:
              var e =
                i.brand_ext && i.brand_ext.brandid
                  ? "?brandid=" + i.brand_ext.brandid
                  : "";
              a.url = i.brand_ext
                ? "//brand.zhe800.com/" + i.brand_ext.url_name + e
                : "";
              break;
            case 3:
              a.url = "//store" + i.point_detail + ".zhe800.com/";
          }
        return a;
      },
      bannerLogo: function (i) {
        var a = {};
        if (i.isBannerLogo) {
          var e = 0,
            t = i.grid_infos && i.grid_infos.length;
          for (a.html = ""; t > e; e++) {
            var r = i.grid_infos[e],
              s = r.brand_ext,
              o = r.point,
              c = (word1 = word2 = "");
            if (1 == o)
              (c = r.point_detail),
                (word1 = r.first_line_text),
                (word2 = r.second_line_text);
            else if (2 == o && s) {
              var p = s.brandid ? "?brandid=" + s.brandid : "";
              (c = "//brand.zhe800.com/" + s.url_name + p),
                (word1 = s.name),
                (word2 =
                  2 == r.discount_type ? s.text : n.remainTime(s.end_time)),
                (r.grid_pic = s.logo_image);
            }
            a.html +=
              '<li class="position' +
              r.position +
              '"><a target="_blank" href="' +
              c +
              '" class="logo-img" onclick="{{onclick}}" ><img src="' +
              r.grid_pic +
              '"/></a><span class="logo-word1">' +
              word1 +
              '</span><span class="logo-word2">' +
              word2 +
              "</span></li>";
          }
        }
        return a;
      },
      iconPrice: function (i) {
        {
          var a = "<div class='icon_pxgj' title='{{title}}'>{{title}}</div>",
            e = i.wireless_info_share;
          new Date().getTime();
        }
        return i.presellText
          ? r(a, { title: i.presellText })
          : i.wirelessPriceText
          ? r(a, { title: i.wirelessPriceText })
          : i.swdStatus && e.promotionText
          ? r(a, { title: e.promotionText })
          : i.couponPrice
          ? r(a, { title: "å¸åä»·æ ¼" })
          : i.is_promotion
          ? r(a, { title: "æä¸æ¹ä»·" })
          : "";
      },
      similarAccess: function (i, a) {
        var e = a.vType;
        return ("homepage" != e && "tag" != e) || i.swdStatus || i.block_type
          ? ""
          : '<a href="//www.zhe800.com/n/similar/' +
              i.id +
              '?utm_content=deal_list" target="_blank" class="similarBtn">æ¾ç¸ä¼¼></a>';
      },
      lowQuality: function (i) {
        return -2 == i.priority
          ? '<span class="low-quality">åå®¶èªè</span>'
          : "";
      },
      youpin: function (i, a) {
        var e = a.vType,
          r = {};
        if ("youpin" == e && i.youpinhui) {
          var s = i.status,
            o = i.youpinhui,
            c =
              parseInt(i.sold) >= 1e4
                ? Math.round(i.sold / 1e3) / 10 + "ä¸"
                : i.sold,
            p = "",
            l =
              '<div class="tips-overlayer"><div class="p1">ä¸è½½ææºå®¢æ·ç«¯</div><div class="p2">æå5åéå¼æ¢æé</div><div class="go-buy-code"><img src="{{qrcode_url}}"/></div><span class="trigger-overlayer openAlert">å¦ä½æ«ç  ?</span><a class="tips-out" target="_blank" href="{{dealUrl}}"></a></div>';
          if (
            ((r.specification = o.specification ? "/" + o.specification : ""),
            (r.mark = 2 == s ? '<span class="oos-mark"></span>' : ""),
            o.comment_rate)
          ) {
            var u = Math.floor(o.comment_rate.good_rate);
            isNaN(u) ||
              (p = "<span class='comment'>å¥½è¯çï¼" + u + "% </span>");
          }
          if (
            ((r.commentSold =
              p + "<span class='hava-sold'>å·²å®<i>" + c + "</i>ä»¶</span>"),
            (r.timeBtn = ""),
            1 === s)
          ) {
            var _ = "youpintxt" + i.begin_time,
              d = t.set(_);
            if (d) i.new_outbtn = d;
            else {
              var m = "",
                b = new Date(i.begin_time),
                h = b.getHours(),
                g = 10 > h ? "0" + h : h,
                f = b.getMonth() + 1 + "æ" + b.getDate() + "æ¥",
                v = g + ":00",
                y = n.apartDays(i.begin_time);
              (m =
                0 == y
                  ? "ä»å¤©" + v + "å¼æ¢"
                  : 1 == y
                  ? "æå¤©" + v + "å¼æ¢"
                  : 2 == y
                  ? "åå¤©" + v + "å¼æ¢"
                  : f + v + "å¼æ¢"),
                (i.new_outbtn = t.set(_, m));
            }
            (r.timeBtn = "<span class='time-btn'>" + i.new_outbtn + "</span>"),
              (r.commentSold = "");
          }
          0 == s
            ? ((r.statusCls = ""),
              (r.btnText = "ç«å³æ¢è´­"),
              (r.overlayer = ""))
            : 1 == s
            ? ((r.statusCls = "zt2"),
              (r.btnText = "å³å°å¼å§"),
              (r.overlayer = l))
            : ((r.statusCls = "zt3"), (r.btnText = "å·²åå"), (r.overlayer = l));
        }
        return r;
      },
      youpinCorerMark: function (i, a) {
        if ("youpin" != a.vType || !i.youpinhui) return "";
        var e = i.manjian_zhijian || {},
          n = i.youpinhui;
        if (i.isXsq) return '<span class="subscript icon_xianshiqiang"></span>';
        if (e.zhijian_manjian || e.brand_coupon || e.dianpu_coupon) {
          for (
            var t = [],
              r = [],
              s = ["zhijian_manjian", "brand_coupon", "dianpu_coupon"],
              o = s.length,
              c = 0;
            o > c;
            c++
          ) {
            var p = e[s[c]];
            p &&
              (p.is_zhijian
                ? t.push({ name: s[c], zhijian_price: p.zhijian_price })
                : p.is_manjian &&
                  r.push({ name: s[c], jian_price: p.jian_price }));
          }
          var l = {};
          if (
            (t.length
              ? (t.sort(function (i, a) {
                  return a.zhijian_price - i.zhijian_price;
                }),
                (l = e[t[0].name]))
              : r.length &&
                (r.sort(function (i, a) {
                  return a.jian_price - i.jian_price;
                }),
                (l = e[r[0].name])),
            l.is_zhijian && l.zhijian_price >= 1)
          ) {
            if (l.icon_url) {
              var u = l.icon_url.split("?")[0] + "?utm_content=jiaobiao_yph";
              return (
                "<a href='" +
                u +
                " ' target='_blank'><span class='subscript icon_zhijian'>é¢å¸<br>å<span class='zhijian_price'>" +
                l.zhijian_price +
                "å</span></span></a>"
              );
            }
            return (
              "<span class='subscript icon_zhijian'>é¢å¸<br>å<span class='zhijian_price'>" +
              l.zhijian_price +
              "å</span></span>"
            );
          }
          if (
            l.is_manjian &&
            l.man_price &&
            l.jian_price &&
            l.jian_price <= l.man_price
          ) {
            if (l.icon_url) {
              var u = l.icon_url.split("?")[0] + "?utm_content=jiaobiao_yph";
              return (
                "<a href='" +
                u +
                "' target='_blank'><span class='subscript icon_manjian'>é¢å¸<br>" +
                l.man_price +
                "<span class='manjian_price'>å" +
                l.jian_price +
                "</span></span></a>"
              );
            }
            return (
              "<span class='subscript icon_manjian'>é¢å¸<br>" +
              l.man_price +
              "<span class='manjian_price'>å" +
              l.jian_price +
              "</span></span>"
            );
          }
        }
        return i.isNew
          ? '<span class="subscript icon_new"></span>'
          : n.is_star
          ? '<span class="subscript icon_star_yph"></span>'
          : n.is_youpin_plus
          ? '<span class="subscript icon_youpinplus"></span>'
          : "";
      },
      isNew: function (i, a) {
        if ("youpin" == a.vType) {
          var e = "isNew" + i.begin_time,
            n = t.get(e);
          if (n) return n;
          var r = new Date(i.begin_time),
            s = 0,
            o = new Date(),
            c = o.getFullYear(),
            p = o.getMonth() + 1,
            l = o.getDate(),
            u = c + "/" + p + "/" + l,
            _ = new Date(u + " 00:00:00"),
            d = new Date(u + " 23:59:59");
          if (d > r && r > _) s = 1;
          else {
            var m =
              new Date(Number(o) - 864e5).setHours(19, 0, 0, 0) === Number(r);
            m && (s = 1);
          }
          return t.set(e, s);
        }
      },
      listPrice: function (i) {
        return (i.swdStatus && i.getKey("wireless_info_share.promotionText")) ||
          i.couponPrice ||
          i.is_promotion ||
          i.presellText ||
          i.wirelessPriceText
          ? ""
          : '<del class="list_price">ï¿¥' + i.list_price + "</del>";
      },
      soldOutIcon: function (i, a) {
        return i.sku && i.sku.color && "brandInfo" == a.vType
          ? '<span class="mark_text">' + i.sku.color + " å·²åå</span>"
          : '<span class="mark"></span>';
      },
    };
  e.exports = s;
});
/*_combo_cut*/ define("statics/zhe/components/zhedeals/deal/tpls/existTpls", function (
  a,
  i,
  l
) {
  var e = {
    ads: [
      '<div class="dealad" data-pdtype="5">',
      '<a href="{{url}}" target="_blank" add_params="{{adsParams}}">',
      '	<img src="{{image_url}}"></a>',
      '	<h3><a target="_blank" href="{{url}}" add_params="{{adsParams}}">{{sec_title}}</a></h3>',
      '	<h4><span><a target="_blank" href="{{url}}" add_params="{{adsParams}}">{{title}}</a></span>',
      '<a target="_blank" href="{{url}}" add_params="{{adsParams}}"></a></h4></div>',
    ].join(""),
    jifen: [
      '<div class="deal dealstyle6" id="deal{{id}}"><div class="con">',
      '<a rel="nofollow" target="_blank" onclick="{{onclick}}" href="{{jump_url}}" info="{{jump_url}}"><img src="{{image_url}}" data-original="{{image_url}}"></a>',
      '	<h3><a rel="nofollow" target="_blank" onclick="{{onclick}}" href="{{jump_url}}" title="{{title}}">{{title}}</a></h3>',
      '	<h4><span><em>{{required_jifen}}</em>ç§¯å</span><i>+</i><span><em>{{price}}</em>å</span><span class="price"><i>Â¥{{originPrice}}</i></span>',
      '<a rel="nofollow" onclick="{{onclick}}" href="{{jump_url}}" target="_blank">å»åæ¢</a></h4>',
      "</div></div>",
    ].join(""),
    brandCpc: [
      '<div class="deal brand-cpc {{brandCpc.cls}}" data-id="{{id}}" data-brand_id="{{major_brand_id}}" data-type="{{brandCpc.type}}" data-flag="{{flag}}">',
      '<div class="con">',
      '	<a target="_blank" href="{{brandCpc.url}}" class="goods-img" onclick="{{onclick}}">',
      '		<img src="{{placeholderImg}}" data-original="{{brandCpc.image}}">',
      "	</a>",
      '	<div class="title-time">',
      '		<a target="_blank" href="{{brandCpc.url}}" class="title-url" onclick="{{onclick}}">{{brandCpc.title}}</a>',
      '		<span class="remain-time">{{remainTime}}</span>',
      "	</div>",
      '	<div class="coupon-collect">',
      '		<span class="coupon">{{brandCpc.activity}}</span>',
      "		{{brandCpc.source}}",
      "	</div>",
      "{{brandCpc.cornerMark}}",
      "</div></div>",
    ].join(""),
    bannerImg: [
      '<div class="deal banner-img" data-id="{{id}}" data-type="banner" data-flag="{{flag}}">',
      '   <div class="con">',
      '      <a target="_blank" href="{{bannerImg.url}}" onclick="{{onclick}}" class="goods-img">',
      '          <img src="{{placeholderImg}}" data-original="{{list_pic}}">',
      "      </a>",
      "      {{bannerImg.cornerMark}}",
      "   </div>",
      "</div>",
    ].join(""),
    bannerLogo: [
      '<div class="deal banner-logo" data-id="{{id}}" data-type="banner" data-flag="{{flag}}">',
      '   <div class="con">',
      "      <ul>",
      "      {{bannerLogo.html}}",
      "      </ul>",
      "   </div>",
      "</div>",
    ].join(""),
    sellOut: [
      '<div class="{{className}}" zid="{{zid}}" id="deal{{id}}" data-id="{{id}}" data-type="{{type}}" data-flag="{{flag}}" data-begin_time="{{beginTimeFormated}}">',
      '	<div class="{{conClass}}">',
      '		<a target="_blank" href="{{dealUrl}}" rel="nofollow" class="goods_img" onclick="{{onclick}}" add_params="{{outparams}}">',
      '		<img src="{{placeholderImg}}" data-original="{{imgUrl}}" width="312" height="208"><img class="bdg_img" src="{{imgBar}}"></a>',
      "	<h3>",
      '		<a target="_blank" href="{{dealUrl}}" rel="nofollow" onclick="{{onclick}}" title="{{dealTitle}}" add_params="{{outparams}}">{{source}}{{dealTitle}}</a>',
      "	</h3>",
      "	<h4><em><b>Â¥</b>{{price}}</em>{{listPrice}}{{iconPrice}}</h4>",
      "	{{soldOutIcon}}{{soldTxt}}{{cornerMark}}",
      "	</div>",
      "</div>",
    ].join(""),
    notStart: [
      '<div class="{{className}}" zid="{{zid}}" id="deal{{id}}" data-id="{{id}}" data-type="{{type}}" data-flag="{{flag}}" data-begin_time="{{beginTimeFormated}}">',
      '	<div class="{{conClass}}">',
      '	<a target="_blank" href="{{dealUrl}}" rel="nofollow" class="goods_img" onclick="{{onclick}}" add_params="{{outparams}}">',
      '		<img src="{{placeholderImg}}" data-original="{{imgUrl}}" width="312" height="208"><img class="bdg_img" src="{{imgBar}}">',
      "	</a>",
      "	<h3>",
      '		<a target="_blank" href="{{dealUrl}}" rel="nofollow" onclick="{{onclick}}" title="{{dealTitle}}" add_params="{{outparams}}">{{source}}{{dealTitle}}</a>',
      "	</h3>",
      "	<h4>",
      '		<em><b>Â¥</b>{{price}}</em>{{listPrice}}{{iconPrice}}<a rel="nofollow" target="_blank" href="{{dealUrl}}" add_params="{{outparams}}" class="openAlert" onclick="{{onclick}}"><em class="kaiqiang" style="top: -3px;">{{btnTxt}}</em><span class="yugao_default" style="top: 3px;"><img src="//z5.tuanimg.com/v2/ju/img/yugao_default.png"></span> <span class="yugao_hover" style="top: -25px;"><img src="//z5.tuanimg.com/v2/ju/img/yugao_hover.png"></span><em class="qiangxian" style="top: -32px;">æ¢åå»ç</em></a>',
      "	</h4>",
      '	<div class="bottom-word">',
      '	<div class="sellalert_w"><div class="sellalert"><div class="sellclock"></div><div class="selltext">å¼åæé</div></div><div class="addfav"></div></div>',
      '		<a href="javascript:void(0)" class="shc mycol">æ¶è</a><i class="border_top"></i>',
      "	</div>",
      "	{{cornerMark}}{{store}}",
      '<div class="zt2_qrcode">',
      '	<div class="bg_yugao"></div><p class="down_app_word">ä¸è½½ææºå®¢æ·ç«¯</p><p>æå5åéå¼æ¢æé</p>',
      '	<img class="deal_qrcode" src="{{qrcode_url}}" />',
      '	<a class="saoma" href="javascript:void(0)""><img src="//z5.tuanimg.com/v2/ju/img/saoma.png" /></a>',
      "</div>",
      "	</div>",
      "</div>",
    ].join(""),
    tjxyg: [
      '<div class="{{className}}" zid="{{zid}}" id="deal{{id}}" data-id="{{id}}" data-type="{{type}}" data-flag="{{flag}}" data-begin_time="{{beginTimeFormated}}">',
      '	<div class="{{conClass}}">',
      '	<a href="javascript:void(0);" rel="nofollow" class="goods_img tjxyg-img">',
      '		<img src="{{placeholderImg}}" data-original="{{imgUrl}}" width="312" height="208"><img class="bdg_img" src="{{imgBar}}">',
      "	</a>",
      "	<h3>",
      '		<a class="tjxyg-title" href="javascript:void(0);" rel="nofollow" title="{{dealTitle}}">{{source}}{{dealTitle}}</a>',
      "	</h3>",
      "	<h4>",
      '		<em><b>Â¥</b>{{price}}</em>{{listPrice}}{{iconPrice}}<a rel="nofollow" href="javascript:void(0);" class="openAlert tjxyg-openAlert"><em class="kaiqiang" style="top: -3px;">{{btnTxt}}</em><span class="yugao_default" style="top: 3px;"><img src="//z5.tuanimg.com/v2/ju/img/yugao_default.png"></span> <span class="yugao_hover" style="top: -25px;"><img src="//z5.tuanimg.com/v2/ju/img/yugao_hover.png"></span><em class="qiangxian" style="top: -32px;">æ¢åå»ç</em></a>',
      "	</h4>",
      '	<div class="bottom-word">',
      '	<div class="sellalert_w"><div class="sellalert"><div class="sellclock"></div><div class="selltext">å¼åæé</div></div><div class="addfav"></div></div>',
      '		<a href="javascript:void(0)" class="shc mycol">æ¶è</a><i class="border_top"></i>',
      "	</div>",
      "	{{cornerMark}}{{store}}",
      '<div class="zt2_qrcode">',
      '	<div class="bg_yugao"></div><p class="down_app_word">ä¸è½½ææºå®¢æ·ç«¯</p><p>æå5åéå¼æ¢æé</p>',
      '	<img class="deal_qrcode" src="{{qrcode_url}}" />',
      '	<a class="saoma" href="javascript:void(0)""><img src="//z5.tuanimg.com/v2/ju/img/saoma.png" /></a>',
      "</div>",
      "	</div>",
      "</div>",
    ].join(""),
    tmall: [
      '<div class="{{className}}" zid="{{zid}}" id="deal{{id}}" data-id="{{id}}" data-type="{{type}}" data-flag="{{flag}}" data-begin_time="{{beginTimeFormated}}">',
      '	<div class="{{conClass}}">',
      '		<a target="_blank" href="{{dealUrl}}" rel="nofollow" class="goods_img" onclick="{{onclick}}" add_params="{{outparams}}">',
      '		<img src="{{placeholderImg}}" data-original="{{imgUrl}}" width="312" height="208"><img class="bdg_img" src="{{imgBar}}">',
      "	</a>",
      "	<h3>",
      '		<a target="_blank" href="{{dealUrl}}" rel="nofollow" onclick="{{onclick}}" title="{{dealTitle}}" add_params="{{outparams}}">{{source}}{{dealTitle}}</a></h3>',
      "	<h4><em><b>Â¥</b>{{price}}</em>{{listPrice}}{{iconPrice}}</h4>",
      '	<div class="bottom-word"><span class="fjf_w">åé®</span><i class="border_top"></i><a class="xq" href="{{detailUrl}}" target="_blank">[è¯¦æ]</a><a href="javascript:void(0)" class="shc mycol">æ¶è</a>',
      "	</div>",
      "	{{soldTxt}}{{cornerMark}}",
      "	{{similarAccess}}{{store}}",
      "	</div>",
      "</div>",
    ].join(""),
    shop: [
      '<div class="{{className}}" zid="{{zid}}" id="deal{{id}}" data-id="{{id}}" data-type="{{type}}" data-flag="{{flag}}" data-begin_time="{{beginTimeFormated}}">',
      '	<div class="{{conClass}}">',
      '		<a target="_blank" href="{{dealUrl}}" rel="nofollow" class="goods_img" onclick="{{onclick}}" add_params="{{outparams}}">',
      '		<img src="{{placeholderImg}}" data-original="{{imgUrl}}" width="312" height="208"><img class="bdg_img" src="{{imgBar}}"></a>',
      "	<h3>",
      '		<a target="_blank" href="{{dealUrl}}" rel="nofollow" onclick="{{onclick}}" title="{{dealTitle}}" add_params="{{outparams}}">{{lowQuality}}{{source}}{{dealTitle}}</a>',
      "	</h3>",
      "	<h4><em><b>Â¥</b>{{price}}</em>{{listPrice}}{{iconPrice}}</h4>",
      '	<div class="bottom-word">',
      '		<span class="fjf_w">åé®</span><i class="fjf_r"></i><span class="fjf_w">è¿ç§¯å</span><i class="fjf_r"></i><a href="//shop.zhe800.com/n/act/yunfeibutieka" add_params="utm_content=deal_yfbtk" rel="nofollow" target="_blank" class="yfbtk">éè´§è¡¥è´´ä¼æ å¸</a><i class="border_top"></i>',
      '		<a class="xq" href="{{detailUrl}}" target="_blank">[è¯¦æ]</a><a href="javascript:void(0)" class="shc mycol">æ¶è</a>',
      "	</div>",
      "	{{soldTxt}}{{cornerMark}}",
      "	{{similarAccess}}{{store}}",
      "	</div>",
      "</div>",
    ].join(""),
    brandIndex: [
      '<div class="deal brand-index" zid="{{zid}}" id="deal{{id}}" data-id="{{id}}" data-type="{{type}}" data-flag="{{flag}}" data-begin_time="{{beginTimeFormated}}" data-brand_id={{major_brand_id}}>',
      '	<div class="con">',
      '	<a target="_blank" href="{{dealUrl}}" rel="nofollow" class="goods_img" onclick="{{onclick}}" add_params="{{outparams}}">',
      '		<img src="{{placeholderImg}}" data-original="{{imgUrl}}" width="312" height="208"><img class="bdg_img" src="{{imgBar}}">',
      "	</a>",
      '	<span class="brand_home_coupon">{{brandIndexCoupon}} {{remainDay}}</span>',
      '	<a class="pinpai_right_name" target="_blank" href="{{pinpaiLink}}">{{pinpaiName}}</a>',
      "	<h3>",
      '		<a target="_blank" href="{{dealUrl}}" rel="nofollow" onclick="{{onclick}}" title="{{dealTitle}}" add_params="{{outparams}}">{{source}}{{dealTitle}}</a>',
      "	</h3>",
      '		<h4><em><b>Â¥</b>{{price}}</em><span class="brand_fav">æ¶èåç</span>',
      "	</h4>",
      "	{{cornerMark}}",
      "	</div>",
      "</div>",
    ].join(""),
    taobaoStore: [
      '<div class="{{className}}" zid="{{zid}}" id="deal{{id}}" data-id="{{id}}" data-type="{{type}}" data-flag="{{flag}}" data-begin_time="{{beginTimeFormated}}">',
      '	<div class="{{conClass}}">',
      '		<a target="_blank" href="{{dealUrl}}" rel="nofollow" class="goods_img" onclick="{{onclick}}" add_params="{{outparams}}">',
      '		<img src="{{placeholderImg}}" data-original="{{imgUrl}}" width="312" height="208"><img class="bdg_img" src="{{imgBar}}"></a>',
      "	<h3>",
      '		<a target="_blank" href="{{dealUrl}}" rel="nofollow" onclick="{{onclick}}" title="{{dealTitle}}" add_params="{{outparams}}">{{source}}{{dealTitle}}</a>',
      "	</h3>",
      "	<h4><em><b>Â¥</b>{{price}}</em>{{iconPrice}}</h4>",
      '	<span class="deals_count">å±<em>{{taobao_show.taobao_show_deal_count}}</em>æ¬¾</span>',
      '	<a class="taotao_right" target="_blank" href="{{dealUrl}}" title="{{taobao_show.taobao_show_name}}"><span class="cpctitle"><em class="{{taobaoStoreIcon}}"></em>{{taobao_show.taobao_show_name}}</span>&gt;&gt;</a>',
      "	{{cornerMark}}",
      "	</div>",
      "</div>",
    ].join(""),
    recommend: [
      '<div class="deal dealstyle4" zid="{{zid}}" id="deal{{id}}" data-id="{{id}}" data-type="{{type}}" data-flag="{{flag}}" data-begin_time="{{beginTimeFormated}}">',
      '	<div class="{{conClass}}">',
      '		<a target="_blank" href="{{dealUrl}}" rel="nofollow" class="goods_img" onclick="{{onclick}}" add_params="{{outparams}}">',
      '		<img src="{{placeholderImg}}" data-original="{{imgUrl}}" width="312" height="208"><img class="bdg_img" src="{{imgBar}}"></a>',
      "	<h3>",
      '		<a target="_blank" href="{{dealUrl}}" rel="nofollow" onclick="{{onclick}}" title="{{dealTitle}}" add_params="{{outparams}}">{{source}}{{dealTitle}}</a>',
      "	</h3>",
      "	<h4><em><b>Â¥</b>{{price}}</em>{{iconPrice}}</h4>",
      "	{{soldTxt}}{{cornerMark}}",
      "	{{store}}",
      "	</div>",
      "</div>",
    ].join(""),
    youpinType1: [
      '<div class="you-deal-wide youpin-type clear" zid="{{zid}}" id="deal{{id}}" data-id="{{id}}" data-type="{{type}}" data-begin_time="{{beginTimeFormated}}">',
      '	<img class="goods-img" src="{{youpinhui.image_url}}"/>',
      '	<div class="goods-detail">',
      '		<div class="goods-title">{{youpinhui.long_title}}</div>',
      '		<ul class="character">',
      "			<li>{{youpinhui.character_1}}</li>",
      "			<li>{{youpinhui.character_2}}</li>",
      "			<li>{{youpinhui.character_3}}</li>",
      "		</ul>",
      '		<div class="goods-price">',
      '			<span class="now-price"><i>Â¥</i>{{price}}</span>',
      '			<span class="spec-price">',
      '				<em class="list-price"><b>Â¥</b>{{list_price}}</em><br />',
      '				<em class="specification">{{youpin.specification}} </em>',
      "			</span>",
      '			<span class="btn-buy">{{youpin.btnText}}</span>',
      "		</div>",
      "	</div>",
      "	{{youpinCorerMark}}",
      '	<a class="youpin-href" href="{{dealUrl}}" target="_blank" onclick="{{onclick}}"></a>',
      "</div>",
    ].join(""),
    youpinType2: [
      '<div class="deal you-deal youpin-type {{youpin.statusCls}}" zid="{{zid}}" id="deal{{id}}" data-id="{{id}}" data-type="{{type}}" data-begin_time="{{beginTimeFormated}}">',
      '	<div class="bd">',
      '		<a href="{{dealUrl}}" target="_blank" onclick="{{onclick}}"><img class="goods-img" src="{{placeholderImg}}" data-original="{{imgUrl}}"/></a>',
      "		{{youpin.mark}}",
      "		{{youpin.timeBtn}}",
      "		{{youpin.overlayer}}",
      "	</div>",
      '	<div class="ft">',
      '		<div class="goods-desc">{{youpinhui.recommend_reason}}</div>',
      '		<div class="goods-title">{{youpinhui.short_title}}</div>',
      '		<div class="info">',
      '			<span class="now-price"><i>Â¥</i>{{price}}</span>',
      '			<span class="spec-price">',
      '				<em class="list-price"><b>Â¥</b>{{list_price}}</em><br />',
      '				<em class="specification">{{youpin.specification}}</em>',
      "			</span>",
      "		</div>",
      '		<div class="comment-sold">{{youpin.commentSold}}</div>',
      "	</div>",
      "	{{youpinCorerMark}}",
      '	<a class="youpin-href" href="{{dealUrl}}" target="_blank" onclick="{{onclick}}"></a>',
      "</div>",
    ].join(""),
    channelType1: [].join(""),
  };
  l.exports = e;
});
/*_combo_cut*/ define("statics/zhe/components/zhedeals/deal/tpls/config", function (
  s,
  n,
  o
) {
  var e = {
    shop: { bussJson: [] },
    sellOut: { bussJson: [] },
    notStart: { bussJson: [] },
    tjxyg: { bussJson: [] },
    tmall: { bussJson: [] },
    brandIndex: { bussJson: [] },
    taobaoStore: { bussJson: [] },
    brandCpc: {
      bussJson: ["brandCpc", "onclick", "placeholderImg", "bannerImg"],
    },
    bannerImg: { bussJson: ["onclick", "bannerImg", "placeholderImg"] },
    bannerLogo: { bussJson: ["onclick", "bannerLogo"] },
    ads: { bussJson: ["adsParams"] },
    jifen: { bussJson: ["divClass", "onclick", "originPrice", "price"] },
    recommend: { bussJson: [] },
    youpinType1: { bussJson: [] },
    youpinType2: { bussJson: [] },
  };
  o.exports = e;
});
/*_combo_cut*/ define("statics/zhe/components/zhedeals/deal/tpls/createTpl", function (
  s,
  e,
  t
) {
  function n(s, e) {
    var t = e.tplType || "shop",
      n = a[t];
    return (
      n && (e.bussJson = n.bussJson),
      l[t] ? l[t] : t in o ? (l[t] = o[t]) : void 0
    );
  }
  var o = s("statics/zhe/components/zhedeals/deal/tpls/existTpls"),
    a = s("statics/zhe/components/zhedeals/deal/tpls/config"),
    l = {};
  t.exports = n;
});
/*_combo_cut*/ define("statics/zhe/components/zhedeals/deal/tpls/matchTpl", function (
  e,
  n,
  a
) {
  function o(e, n) {
    var a = n.vType,
      o = {
        ads: 1 == e.block_type,
        jifen: 2 == e.block_type,
        brandIndex: "brandIndex" == a,
        recommend: "recommend" == a,
        channelType1: "pindao" == a && 1 == n.channelDealType,
        channelType2: "pindao" == a && 2 == n.channelDealType,
        channelType4: "pindao" == a && 4 == n.channelDealType,
        youpinType1: "youpin" == a && 1 == n.youpinType,
        youpinType2: "youpin" == a && 2 == n.youpinType,
        brandCpc: e.isBrandCpc,
        bannerImg: e.isBannerImg,
        bannerLogo: e.isBannerLogo,
        taobaoStore: e.isTaobaoStore,
        sellOut: 2 == e.status,
        tjxyg: "taojingxuan" == a && 1 == e.status,
        notStart: 1 == e.status,
        tmall: 2 == e.type || 3 == e.type,
      };
    return o;
  }
  function p(e, n) {
    var a = n.vType;
    a in r || (n.vType = "homepage");
    var p = "shop",
      i = o(e, n);
    for (var c in i) {
      var d,
        s = i[c];
      if (((d = "function" == typeof s ? s(e, n) : s), d === !0)) {
        p = c;
        break;
      }
    }
    return (n.tplType = p), (n.tpl = t(e, n));
  }
  var t = e("statics/zhe/components/zhedeals/deal/tpls/createTpl"),
    r = {
      last: "å³å°ä¸æ¶ï¼åæåç¯æ¢ï¼",
      new: "ä»æ¥ä¸æ°",
      top: "æè¡æ¦é¡µé¢",
      newOrder: "æè¡æ¦æ°æä¸å",
      zone: "9å9åé®å20åå°é¡¶",
      search: "æç´¢é¡µé¢",
      similar: "æ¾ç¸ä¼¼é¡µé¢",
      tag: "åç±»é¡µ",
      homepage: "é¦é¡µ",
      pindao: "é¢éé¡µ",
      pinpaidetail: "åçè¯¦æé¡µ",
      brandInfo: "åçå¢è¯¦æé¡µï¼æ°ï¼",
      brandIndex: "åçå¢é¦é¡µ",
      brandTag: "åçå¢åç±»é¡µ",
      branddesc: "åçä»ç»é¡µ",
      daiyanrenzhuanti: "ä»£è¨äººé¡µé¢",
      taojingxuan: "æ·å®ç²¾é",
      recommend: "æ¨èdeal",
      pcxindacu: "PCå¤§ä¿æ¨¡æ¿",
      youpin: "ä¼åæ±",
      forecast: "ç²¾éé¢å",
      word: "wordé¡µé¢",
      aggregation: "åçåç±»èåé¡µ",
      youpinchubei: "ä¼åå¨å¤",
      cpcstore: "cpcåºéºå¢",
    };
  a.exports = p;
});
/*_combo_cut*/ define("statics/zhe/components/zhedeals/deal/tiger", function (
  t,
  e,
  n
) {
  var o = t("statics/zhe/components/zhedeals/deal/baseJson"),
    r = t("statics/zhe/components/zhedeals/deal/bussLogic"),
    s = t("statics/zhe/components/zhedeals/deal/tpls/matchTpl"),
    i = t("statics/zhe/components/zhedeals/deal/libs/tools"),
    a = t("statics/zhe/components/zhedeals/deal/libs/cache");
  (function () {
    var t = this,
      c = {},
      l = t.tiger,
      f = !!t.exports;
    (c.VERSION = "0.0.1"),
      (c.noConflict = function () {
        return (t.tiger = l), this;
      }),
      (c.factory = function (t, e) {
        if (t) {
          if (t.constructor !== Array) return "jsons must be hash object";
          f || ((t = JSON.parse(JSON.stringify(t))), a.clearAll()),
            (c.jsons = t),
            (e = e || {}),
            (e.isWin = f),
            e.noImgHolder && a.set("noImgHolder", e.noImgHolder);
          for (var n = 0, o = [], r = t.length; r > n; n++) {
            var s = t[n];
            if (s) {
              s.getKey = i.getKey;
              try {
                var l = c
                  .baseWork(s, e)
                  .getTpl(s, e)
                  .logic(s, e)
                  .priorKeys(s, e)
                  .html(s, e);
              } catch (h) {
                var u = "tiger error: ";
                console.log(
                  h.stack ? u + h.stack.toString() : u + h.toString()
                );
                continue;
              }
              o.push(l);
            }
          }
          return o.join("");
        }
      }),
      (c.baseWork = function (t, e) {
        for (var n in o)
          if (o.hasOwnProperty(n)) {
            var r = o[n];
            if ("function" == typeof r) {
              t[n] = r(t, e);
              continue;
            }
            t[n] = r;
          }
        return this;
      }),
      (c.getTpl = function (t, e) {
        return s(t, e), this;
      }),
      (c.logic = function (t, e) {
        var n = e.bussJson || [],
          o = i.keys(r);
        n.length && (o = n);
        var s = 0,
          a = o.length;
        for (s = a; s--; ) {
          var c = o[s],
            l = r[c];
          t[c] = "function" != typeof l ? l : l(t, e);
        }
        return this;
      }),
      (c.priorKeys = function (t, e) {
        var n = e.priorKeys;
        return "function" == typeof n && n(t, e), this;
      }),
      (c.html = function (t, e) {
        return i.parseTpl(e.tpl, t);
      }),
      void 0 !== e
        ? (void 0 !== n && n.exports && (e = n.exports = c), (e.tiger = c))
        : (t.tiger = c),
      "function" == typeof define &&
        define.amd &&
        define("tiger", [], function () {
          return c;
        });
  }.call(this));
});
/*_combo_cut*/ define("statics/zhe/components/zhedeals/openTuanAlert", function (
  e,
  i,
  t
) {
  var o = e("statics/zhe/components/login_reg_dialog/index"),
    s = e("statics/zhe/components/bindPhone/index"),
    n = {
      init: function () {
        var e = this;
        $(".dealbox").on("click", ".openAlert", function () {
          $(this).closest(".zt2,.zt3,.zt5").length || e.goAlert($(this));
        });
      },
      goAlert: function (e) {
        if (!$.cookie("ppinf")) return o.renderLoginDialog({ appid: 3006 }), !1;
        var i = $.parseJSON(Base64.decode($.cookie("ppinf").split("|")[3])),
          t = i.idss.id2;
        if (0 == t)
          s.render(),
            window.setTimeout(function () {
              $(".bangdtit")
                .find("p")
                .html("ä¸ºäºä¿æ¤æ¨çè´¦æ·å®å¨ï¼éè¦åç»å®ææºã");
            }, 210);
        else {
          var n = e.parents(".deal"),
            a = n.attr("data-id") || n.attr("info").split(",")[1];
          $.get(
            "//www.zhe800.com/cn/ju_deal/subscribe",
            { deal_id: a },
            function (i) {
              if (0 == i.status) {
                var t = $.cookie("isSuccPop") || !1;
                if ((e.remove(), t)) return !1;
                var o = new $.Buffers();
                o.push('<div class="qd_login">'),
                  o.push(
                    '    <div class="ht">        <a href="//www.zhe800.com" target="_blank" class="logo"></a>   </div>'
                  ),
                  o.push('    <div class="dysucc">'),
                  o.push("        <em>æåè®¢éå¼æ¢æéï¼</em>"),
                  o.push(
                    '        <span>æä»¬å°å¨å¼æ¢å½å¤©ä»¥ç­ä¿¡æ¹å¼éç¥æ¨ï¼<br/>æ¨å¯ä»¥å»ä¸ªäººä¸­å¿æ¥çå·²è®¢éçååï¼<a href="{{#goto_url}}" target="_blank">å»çç>></a></span>'
                  ),
                  o.push('        <p><input type="checkbox" />ä¸åæé</p>'),
                  o.push("    </div>"),
                  o.push("</div>"),
                  (o = o.toString()),
                  $.Dialogs({
                    id: "dialog_log_qiandao",
                    msg: $.ParseTpl(o, i),
                    auto: !1,
                    closebtn: "a.close, span.close",
                    overlay: !0,
                  }),
                  $("#dialog_log_qiandao input[type=checkbox]").click(
                    function () {
                      $(this).is(":checked")
                        ? $.cookie("isSuccPop", !0)
                        : $.cookie("isSuccPop", !1);
                    }
                  );
              } else 1 == i.status && alert("è®¾ç½®å¤±è´¥,è¯·éæ°å°è¯!");
            },
            "JSONP"
          );
        }
      },
    };
  PubSub.add("ready", function () {
    n.init();
  }),
    (t.exports = n);
});
/*_combo_cut*/ define("statics/zhe/common/js/user", function (u, s, e) {
  function n() {
    $.cookie("ppinf") &&
      $.ajax({
        url: "/cn/z_key/user_infos",
        type: "GET",
        dataType: "JSON",
        success: function (u) {
          PubSub.fire("user_status", u);
        },
      });
  }
  n(),
    PubSub.add("user_change", n),
    (e.exports = {
      add: function (u, s) {
        PubSub.add("user_status", u, s);
      },
    });
});
/*_combo_cut*/ define("statics/zhe/common/js/myfav", function (a, c, e) {
  function d() {
    $.cookie("ppinf") &&
      $.ajax({
        url: "//zapi.zhe800.com/cn/f/get_favorite_nums",
        dataType: "jsonp",
        cache: !0,
        jsonp: "callback",
        jsonpCallback: "jsonpCallback_getfavorites_sidePanel",
        success: function (a) {
          200 == a.status && PubSub.fire("get_myfav", a);
        },
      });
  }
  function n(a) {
    $.ajax({
      url: "//zapi.zhe800.com/cn/f/deal/add",
      dataType: "jsonp",
      cache: !0,
      data: { ids: a.ids },
      jsonp: "callback",
      jsonpCallback: "jsonpCallback_add_dealFavorite",
      success: function (c) {
        var e = { data: c, opt: a };
        PubSub.fire("add_myfav", e);
      },
    });
  }
  function o(a) {
    $.ajax({
      url: "//zapi.zhe800.com/cn/f/deal/del",
      dataType: "jsonp",
      cache: !0,
      data: { ids: a.ids },
      jsonp: "callback",
      jsonpCallback: "jsonpCallback_delete_dealFavorite",
      success: function (c) {
        var e = { data: c, opt: a };
        PubSub.fire("del_myfav", e);
      },
    });
  }
  d(),
    PubSub.add("user_change", d),
    (e.exports = {
      addGetfav: function (a) {
        PubSub.add("get_myfav", a);
      },
      addAddFav: function (a) {
        PubSub.add("add_myfav", a);
      },
      addDelFav: function (a) {
        PubSub.add("del_myfav", a);
      },
      createFav: function (a) {
        n(a);
      },
      delFav: function (a) {
        o(a);
      },
    });
});
/*_combo_cut*/ define("statics/zhe/components/zhedeals/dealFavorite", function (
  a,
  i,
  e
) {
  var s = a("statics/zhe/common/js/stat/picstat"),
    t = a("statics/zhe/components/login_reg_dialog/index"),
    d = a("statics/zhe/common/js/user"),
    o = a("statics/zhe/common/js/myfav"),
    n = {
      favids: { has_get: !1, fav_ids: [] },
      init: function (a) {
        var i = !0;
        $(".dealbox").on("click", ".deal .mycol", function (a) {
          var e = $(this).parents(".deal"),
            s = $(this);
          return $.cookie("ppinf")
            ? void n.addNow(s, e, i, a)
            : (t.renderLoginDialog({ appid: 3005 }),
              PubSub.add("login_s1_callback", function () {
                n.addNow(s, e, i, a);
              }),
              !1);
        }),
          n.initDealFav(a);
      },
      addNow: function (a, i, e, t) {
        if (e) {
          e = !1;
          var d = i.attr("data-id"),
            n = i.find(".con"),
            c = !1;
          (isOn = a.hasClass("on")),
            (n.hasClass("zt2") || n.hasClass("zt3") || n.hasClass("zt4")) &&
              (c = !0);
          var l =
              $.cookie("__utma").split(".")[1] +
              $.cookie("__utma").split(".")[2],
            f = $.parseJSON(
              Base64.decode(unescape($.cookie("ppinf")).split("|")[3])
            ).uid.replace(/^u/g, "");
          isOn
            ? (o.delFav({ ids: d, notAdd: c }),
              PubSub.onece("del_myfav", function () {
                a.removeClass("on").html("æ¶è"),
                  s.doStat("click_v0", {
                    clickkey: "deal_del_favorite",
                    hiveid: l,
                    userid: f,
                  }),
                  (e = !0);
              }))
            : (o.createFav({
                ids: d,
                x: t.pageX,
                y: t.pageY,
                starAnimation: !0,
                notAdd: c,
              }),
              PubSub.onece("add_myfav", function () {
                a.addClass("on").html("å·²æ¶è"),
                  s.doStat("click_v0", {
                    clickkey: "deal_add_favorite",
                    hiveid: l,
                    userid: f,
                  }),
                  (e = !0);
              }));
        }
      },
      initDealFav: function () {
        if (!$.cookie("ppinf")) return !1;
        var a = n;
        a.favids.has_get ||
          ((a.favids.has_get = !0),
          $.ajax({
            url: "//zapi.zhe800.com/cn/f/deal/status",
            type: "GET",
            dataType: "JSONP",
            jsonpCallback: "get_favorite_deal_ids",
            success: function (i) {
              a.favids.fav_ids = i.favorite_deal_ids || [];
              for (var e = 0, s = a.favids.fav_ids, t = s.length; t > e; e++)
                (id = s[e]),
                  $("#deal" + id)
                    .find(".mycol")
                    .addClass("on")
                    .html("å·²æ¶è");
            },
            error: function () {
              a.favids.has_get = !1;
            },
          }));
      },
    };
  PubSub.add("ready", function () {
    n.init();
  }),
    d.add(n.initDealFav, n),
    (e.exports = n);
});
/*_combo_cut*/ define("statics/zhe/components/zhedeals/brandFavorite", function (
  a,
  t,
  n
) {
  var d = a("statics/zhe/common/js/stat/picstat"),
    i = a("statics/zhe/components/login_reg_dialog/index"),
    e = a("statics/zhe/common/js/user"),
    s = {
      hasGetFavStatus: !1,
      favIds: [],
      init: function () {
        var a = this;
        $(".dealbox").on("click", ".deal .brand_fav", function () {
          a.clickFav($(this));
        }),
          $("#detail_brand_fav").on("click", function () {
            a.clickFav($(this));
          }),
          a.initDealFav();
      },
      clickFav: function (a) {
        var t = !0,
          n = this;
        return $.cookie("ppinf")
          ? void n.addNow(a, t)
          : (i.renderLoginDialog({ appid: 3005 }),
            PubSub.add("login_s1_callback", function () {
              n.addNow(a, t);
            }),
            !1);
      },
      addNow: function (a, t) {
        if (t) {
          t = !1;
          var n = "detail_brand_fav" === a.attr("id") ? a : a.parents(".deal"),
            i = n.data("brand_id"),
            e = a.hasClass("on"),
            s = $.parseJSON(
              Base64.decode(unescape($.cookie("ppinf")).split("|")[3])
            ).uid.replace(/^u/g, "");
          e
            ? (d.doStat("click_v0", {
                clickkey: "favorite_cancel_brand",
                userid: s,
              }),
              $.get(
                "//zapi.zhe800.com/cn/f/major_brand/del",
                { ids: i },
                function (n) {
                  200 == n.status &&
                    1 == n.result &&
                    (a.removeClass("on").html("æ¶èåç"),
                    $(".deal[data-brand_id=" + i + "]")
                      .find(".brand_fav")
                      .removeClass("on")
                      .html("æ¶èåç")),
                    (t = !0);
                },
                "JSONP"
              ))
            : (d.doStat("click_v0", {
                clickkey: "favorite_confirm_brand",
                userid: s,
              }),
              $.get(
                "//zapi.zhe800.com/cn/f/major_brand/add",
                { ids: i },
                function (n) {
                  200 == n.status &&
                    1 == n.result &&
                    (a.addClass("on").html("å·²æ¶èåç"),
                    $(".deal[data-brand_id=" + i + "]")
                      .find(".brand_fav")
                      .addClass("on")
                      .html("å·²æ¶èåç")),
                    (t = !0);
                },
                "JSONP"
              ));
        }
      },
      initDealFav: function () {
        if (!$.cookie("ppinf")) return !1;
        var a = this,
          t = $("#detail_brand_fav"),
          n = t.length > 0 ? "?ids=" + t.data("brand_id") : "";
        a.hasGetFavStatus
          ? a.changeStyle()
          : ((a.hasGetFavStatus = !0),
            $.ajax({
              url: "//zapi.zhe800.com/cn/f/major_brand/status" + n,
              type: "GET",
              dataType: "JSONP",
              jsonpCallback: "get_favorite_brand_ids",
              success: function (t) {
                (a.favIds = t.favorite_ids || []),
                  a.changeStyle(),
                  (a.hasGetFavStatus = !0);
              },
              error: function () {
                a.hasGetFavStatus = !1;
              },
            }));
      },
      changeStyle: function () {
        var a = this,
          t = $("#detail_brand_fav"),
          n = a.favIds.length;
        if (t.length)
          for (var d = 0; n > d; d++)
            a.favIds[d] == t.data("brand_id") &&
              t.addClass("on").html("å·²æ¶èåç");
        else
          for (var i = 0; n > i; i++) {
            var e = $(".deal[data-brand_id=" + a.favIds[i] + "]");
            e.length && e.find(".brand_fav").addClass("on").html("å·²æ¶èåç");
          }
      },
    };
  PubSub.add("ready", function () {
    s.init();
  }),
    e.add(s.initDealFav, s),
    (n.exports = s);
});
/*_combo_cut*/ define("statics/zhe/components/zhedeals/dealEvent", function (
  e,
  a,
  t
) {
  var n =
      (e("statics/zhe/components/zhedeals/openTuanAlert"),
      e("statics/zhe/components/zhedeals/dealFavorite")),
    i = e("statics/zhe/components/zhedeals/brandFavorite"),
    d = {
      init: function () {
        $(".showall").hide(),
          $.cookie("ppinf") && $(".recommenddeal").hide(),
          window.setDeals ||
            window.setDealIDs ||
            (window.indexFirstPage ||
              ($("<style>.page_div{display:block;}</style>").appendTo("body"),
              $(".loading").hide()),
            $(".showall, .recommenddeal").show(),
            $("#zxt_zheid").length > 0 &&
              !$("#zxt_zheid").data("created") &&
              PubSub.fire("dealLoaded")),
          this.bindEvents(),
          this.lazyLoad();
      },
      idsOver: function (e) {
        $(".loading").hide(),
          $(".page_div").show(),
          $(".showall, .recommenddeal").show(),
          $("#zxt_zheid").data("created") || PubSub.fire("dealLoaded"),
          e || this.nextPage();
      },
      lazyLoad: function () {
        $('img:first-child[src*="img/load_deal"]').lazyload(),
          n.initDealFav(),
          i.initDealFav();
      },
      nextPage: function () {
        var e = $(".next_img");
        if ($(".page_div .next").length > 0 && 0 == e.length) {
          var a = $(".page_div .next a").attr("href"),
            t = $.trim($(".page_div .current").html()),
            n = window.next_img || {},
            i = n[t] || "//z5.tuanimg.com/v2/patch/img/next_page.png",
            d =
              '<div class="next_img"><a href="' +
              a +
              '" add_params="utm_content=zhe800_deal"><img src="' +
              i +
              '"></a></div>';
          $(".dealbox").first().append(d),
            e.hover(
              function () {
                e.addClass("next_img_over");
              },
              function () {
                e.removeClass("next_img_over");
              }
            );
        }
      },
      bindEvents: function () {
        var e = $(".dealbox");
        e.delegate(".deal .sellalert", "click", function () {
          $(this).parents(".deal").find(".zt2_qrcode").show();
        }),
          e.delegate(".deal .zt2", "mouseleave", function () {
            $(this).parents(".deal").find(".zt2_qrcode").hide();
          }),
          e
            .delegate(".deal .zt2 .openAlert", "mouseenter", function () {
              var e = $(this);
              e.find(".yugao_hover").show(),
                "1" != e.data("btn_stop") &&
                  (setTimeout(function () {
                    e.attr("data-btn_stop", "1");
                  }, 0),
                  e.find(".yugao_default").animate({ top: "-23px" }, 100),
                  e.find(".kaiqiang").animate({ top: "-32px" }, 100),
                  e.find(".yugao_hover").animate({ top: "3px" }, 100),
                  e.find(".qiangxian").animate({ top: "-4px" }, 100));
            })
            .delegate(".deal .zt2 .openAlert", "mouseleave", function () {
              var e = $(this);
              e.find(".yugao_default").animate({ top: "3px" }, 100),
                e.find(".kaiqiang").animate({ top: "-3px" }, 100),
                e.find(".yugao_hover").animate({ top: "-25px" }, 100),
                e.find(".qiangxian").animate({ top: "-32px" }, 100),
                setTimeout(function () {
                  e.attr("data-btn_stop", "0");
                }, 0);
            });
      },
    };
  d.init(), (t.exports = d);
});
/*_combo_cut*/ define("statics/zhe/index/js/loadIndexDeal", function (e) {
  function a(e) {
    window.bannerDealJsons.length &&
      ((e = window.bannerDealJsons.concat(e)), (window.bannerDealJsons = []));
    var a = new Date().getTime(),
      o = n.factory(e, { vType: t.vtype });
    c.append(o), i.lazyLoad();
    var d = new Date().getTime();
    d - a > 1e3
      ? s.doStat("click_v0", { clickkey: "loadDealsTime" })
      : s.doStat("click_v0", { clickkey: "normal_loadDealsTime" });
  }
  var n = e("statics/zhe/components/zhedeals/deal/tiger"),
    i = e("statics/zhe/components/zhedeals/dealEvent"),
    s = e("statics/zhe/common/js/stat/picstat");
  window.viewType && (window.viewType.isRetina = window.devicePixelRatio);
  var t = window.viewType || {},
    o = window.is_home_page ? "&pageIndex=1" : "",
    d = "&vtype=homepage",
    l = window.is_home_page ? "&pagename=homepage" : "",
    c = $(".dealbox").first(),
    w = function () {
      var e = window.setDealIDs && window.setDealIDs.ids,
        n = window.dealFlag;
      if (!e || 0 == e.length) return null;
      var s = arguments[0] || 1,
        c = e.length,
        w = parseInt(c / s);
      !(function () {
        if (0 == s) return i.idsOver(), void PubSub.fire("dealLoadOver");
        var c = 1 == s ? e : e.splice(0, w),
          r = arguments.callee,
          p = window.fromRecommend
            ? "/n/deal_service/json_new?deal_ids="
            : "/n/deal_service/nr/json_new?deal_ids=",
          v =
            "//status.tuanimg.com" +
            p +
            c +
            "&view_type=" +
            (t.type || 0) +
            o +
            l +
            d;
        $.ajax({
          url: v,
          type: "GET",
          dataType: "JSONP",
          jsonpCallback: "deal_service_success_jsonpCallback",
          success: function (e) {
            if (n)
              for (var i = 0, s = e.length; s > i; i++)
                e[i] && (e[i].flag = n[e[i].id]);
            a(e), r();
          },
        }),
          s--;
      })();
    };
  window.indexFirstPage && window.setDealIDs && w(4);
});
/*_combo_cut*/ define("statics/zhe/index/js/indexBg", function () {
  function n() {
    var n = new Image(),
      c = window.baImage,
      o = window.hoverImage,
      e = $(".bto_bgs");
    c &&
      ((n.src = c),
      (n.onload = function () {
        e.css("background", "url(" + n.src + ") top center");
      }),
      (n.src = c)),
      o &&
        $(".bto_bgs").hover(
          function () {
            e.css("background", "url(" + o + ")top center");
          },
          function () {
            e.css("background", "url(" + n.src + ")top center");
          }
        );
  }
  PubSub.add("ready", n);
});
/*_combo_cut*/ define("statics/zhe/index/js/exposure_index", function () {
  $(function () {
    function e() {
      var e = [];
      n.find(".dealad").each(function (t) {
        var n = this,
          a = $(this);
        if (
          1 != a.attr("exposured") &&
          r.viewHelper.elementInViewport(n, 0.8)
        ) {
          a.attr("exposured", 1),
            a.attr("x-y", d.getX(t) + "-" + d.getY(t)),
            a.attr("exposured-num") && "undefined" != a.attr("exposured-num")
              ? a.attr("exposured-num", a.attr("exposured-num") - 0 + 1)
              : a.attr("exposured-num", 1);
          var i = "",
            u =
              "{'id':'" +
              r.parseHelper.parse(a.find("a").attr("href")) +
              "','sourcetype':'ad','x':" +
              d.getX(t) +
              ",'y':" +
              d.getY(t) +
              ",'time':" +
              new Date().getTime() +
              ",'exposure_num':" +
              a.attr("exposured-num") +
              ",'n':" +
              d.getN(t),
            o = "}";
          if (a.attr("data-imgVer") && "undefined" != a.attr("data-imgVer")) {
            var p = ",'imgver':" + a.attr("data-imgVer");
            i = u + p + o;
          } else i = u + o;
          e.push(i);
        }
      }),
        r.ajax(e, "deal");
    }
    function t() {
      n.find(".dealad").each(function () {
        var e = this,
          t = $(this);
        1 == t.attr("exposured") &&
          r.viewHelper.elementOutViewport(e) &&
          t.attr("exposured", -1);
      });
    }
    var r = Exposure.getSingleton(),
      n = $("[exposure-includead]");
    if (0 == n.find(".dealad").length) return !1;
    for (var a = n.find(".dealad").eq(0), i = n.width(); 0 == a.height(); )
      a = a.children().eq(0);
    var u = Math.floor(i / a.outerWidth(!0));
    n.attr("exposure-columns", u);
    var d = {
      getX: function (e) {
        return Math.floor(e / u) - 0 + 1;
      },
      getY: function (e) {
        return (e % u) - 0 + 1;
      },
      getN: function (e) {
        return e - 0 + 1;
      },
    };
    e();
    var o = function () {
      e(), t();
    };
    $(window).on("scroll", _.debounce(o, 500));
  }),
    $(function () {
      function e(e) {
        var t = e + 1;
        o[t] || (o[t] = new AdBanner());
        var r = o[t],
          n = [],
          u = i[0],
          d = i;
        if (
          1 != i.attr("exposured") &&
          a.viewHelper.elementInViewport(u, 0.8)
        ) {
          r.setId(d.find(".slider_panel .fi_player").eq(e).attr("link")),
            r.addOnce(),
            d.attr("exposured", 1),
            d.attr("exposured-num") && "undefined" != d.attr("exposured-num")
              ? d.attr("exposured-num", d.attr("exposured-num") - 0 + 1)
              : d.attr("exposured-num", 1);
          var p = "",
            s = d.find(".slider_panel .fi_player").eq(e).attr("link"),
            l = s ? a.parseHelper.parse(s) : "void(0);",
            f =
              "{'id':'" +
              l +
              "','sourcetype':'ad','x':1,'y':" +
              t +
              ",'time':" +
              new Date().getTime() +
              ",'exposure_num':" +
              r.exposureNum +
              ",'n':" +
              t,
            x = "}";
          if (d.attr("data-imgVer") && "undefined" != d.attr("data-imgVer")) {
            var m = ",'imgver':" + d.attr("data-imgVer");
            p = f + m + x;
          } else p = f + x;
          n.push(p);
        }
        a.ajax(n, "topup");
      }
      function t() {
        var e = i[0],
          t = i;
        a.viewHelper.elementOutViewport(e) && window.clearTimeout(n),
          1 == t.attr("exposured") &&
            a.viewHelper.elementOutViewport(e) &&
            t.attr("exposured", -1);
      }
      function r() {
        (u = u.length ? u : i.find(".fade_indexBtn")),
          u.find("b").each(function (r) {
            $(this).hasClass("indexSelected") &&
              r != d &&
              a.viewHelper.elementInViewport(i[0]) &&
              1 != i.attr("exposure") &&
              (i.attr("exposured", -1), (d = r), e(d), t());
          }),
          i &&
            0 == u.length &&
            a.viewHelper.elementInViewport(i[0]) &&
            1 != i.attr("exposured") &&
            (e(0), t()),
          (n = window.setTimeout(r, 800));
      }
      var n,
        a = Exposure.getSingleton(),
        i = $("#UED_FocusImage"),
        u = i.find(".fade_indexBtn"),
        d = 0,
        o = {},
        p = !1;
      0 == i.length && (p = !0),
        (AdBanner = function () {
          this.exposureNum = 0;
        }),
        (AdBanner.prototype.setId = function (e) {
          this.id = e;
        }),
        (AdBanner.prototype.addOnce = function () {
          this.exposureNum = this.exposureNum + 1;
        }),
        r(),
        t();
      var s = function () {
        a.viewHelper.elementInViewport(i[0]) && r(),
          a.viewHelper.elementOutViewport(i[0]) &&
            (window.clearTimeout(n), p && i.attr("exposured", -1));
      };
      $(window).on("scroll", _.debounce(s, 600));
    });
});
/*_combo_cut*/ define("statics/zhe/common/js/fingerprint", function (e, t, n) {
  !(function (e, t, i) {
    !!window && (window[e] = i()),
      "undefined" != typeof n && n.exports
        ? (n.exports = i())
        : "function" == typeof define && define.amd && define(i);
  })("Fingerprint", this, function () {
    "use strict";
    var e = function (e) {
      var t, n;
      (t = Array.prototype.forEach),
        (n = Array.prototype.map),
        (this.each = function (e, n, i) {
          if (null !== e)
            if (t && e.forEach === t) e.forEach(n, i);
            else if (e.length === +e.length) {
              for (var r = 0, o = e.length; o > r; r++)
                if (n.call(i, e[r], r, e) === {}) return;
            } else
              for (var a in e)
                if (e.hasOwnProperty(a) && n.call(i, e[a], a, e) === {}) return;
        }),
        (this.map = function (e, t, i) {
          var r = [];
          return null == e
            ? r
            : n && e.map === n
            ? e.map(t, i)
            : (this.each(e, function (e, n, o) {
                r[r.length] = t.call(i, e, n, o);
              }),
              r);
        }),
        "object" == typeof e
          ? ((this.hasher = e.hasher),
            (this.screen_resolution = e.screen_resolution),
            (this.screen_orientation = e.screen_orientation),
            (this.canvas = e.canvas),
            (this.ie_activex = e.ie_activex))
          : "function" == typeof e && (this.hasher = e);
    };
    return (
      (e.prototype = {
        get: function () {
          var e = [];
          if (
            (e.push(navigator.userAgent),
            e.push(navigator.language),
            e.push(screen.colorDepth),
            this.screen_resolution)
          ) {
            var t = this.getScreenResolution();
            "undefined" != typeof t &&
              e.push(this.getScreenResolution().join("x"));
          }
          return (
            e.push(new Date().getTimezoneOffset()),
            e.push(this.hasSessionStorage()),
            e.push(this.hasLocalStorage()),
            e.push(!!window.indexedDB),
            e.push(
              document.body ? typeof document.body.addBehavior : "undefined"
            ),
            e.push(typeof window.openDatabase),
            e.push(navigator.cpuClass),
            e.push(navigator.platform),
            e.push(navigator.doNotTrack),
            e.push(this.getPluginsString()),
            this.canvas &&
              this.isCanvasSupported() &&
              e.push(this.getCanvasFingerprint()),
            this.hasher
              ? this.hasher(e.join("###"), 31)
              : this.murmurhash3_32_gc(e.join("###"), 31)
          );
        },
        murmurhash3_32_gc: function (e, t) {
          var n, i, r, o, a, s, c, h;
          for (
            n = 3 & e.length,
              i = e.length - n,
              r = t,
              a = 3432918353,
              s = 461845907,
              h = 0;
            i > h;

          )
            (c =
              (255 & e.charCodeAt(h)) |
              ((255 & e.charCodeAt(++h)) << 8) |
              ((255 & e.charCodeAt(++h)) << 16) |
              ((255 & e.charCodeAt(++h)) << 24)),
              ++h,
              (c =
                ((65535 & c) * a + ((((c >>> 16) * a) & 65535) << 16)) &
                4294967295),
              (c = (c << 15) | (c >>> 17)),
              (c =
                ((65535 & c) * s + ((((c >>> 16) * s) & 65535) << 16)) &
                4294967295),
              (r ^= c),
              (r = (r << 13) | (r >>> 19)),
              (o =
                (5 * (65535 & r) + (((5 * (r >>> 16)) & 65535) << 16)) &
                4294967295),
              (r =
                (65535 & o) + 27492 + ((((o >>> 16) + 58964) & 65535) << 16));
          switch (((c = 0), n)) {
            case 3:
              c ^= (255 & e.charCodeAt(h + 2)) << 16;
            case 2:
              c ^= (255 & e.charCodeAt(h + 1)) << 8;
            case 1:
              (c ^= 255 & e.charCodeAt(h)),
                (c =
                  ((65535 & c) * a + ((((c >>> 16) * a) & 65535) << 16)) &
                  4294967295),
                (c = (c << 15) | (c >>> 17)),
                (c =
                  ((65535 & c) * s + ((((c >>> 16) * s) & 65535) << 16)) &
                  4294967295),
                (r ^= c);
          }
          return (
            (r ^= e.length),
            (r ^= r >>> 16),
            (r =
              (2246822507 * (65535 & r) +
                (((2246822507 * (r >>> 16)) & 65535) << 16)) &
              4294967295),
            (r ^= r >>> 13),
            (r =
              (3266489909 * (65535 & r) +
                (((3266489909 * (r >>> 16)) & 65535) << 16)) &
              4294967295),
            (r ^= r >>> 16),
            r >>> 0
          );
        },
        hasLocalStorage: function () {
          try {
            return !!window.localStorage;
          } catch (e) {
            return !0;
          }
        },
        hasSessionStorage: function () {
          try {
            return !!window.sessionStorage;
          } catch (e) {
            return !0;
          }
        },
        isCanvasSupported: function () {
          var e = document.createElement("canvas");
          return !(!e.getContext || !e.getContext("2d"));
        },
        isIE: function () {
          return "Microsoft Internet Explorer" === navigator.appName
            ? !0
            : "Netscape" === navigator.appName &&
              /Trident/.test(navigator.userAgent)
            ? !0
            : !1;
        },
        getPluginsString: function () {
          return this.isIE() && this.ie_activex
            ? this.getIEPluginsString()
            : this.getRegularPluginsString();
        },
        getRegularPluginsString: function () {
          return this.map(
            navigator.plugins,
            function (e) {
              var t = this.map(e, function (e) {
                return [e.type, e.suffixes].join("~");
              }).join(",");
              return [e.name, e.description, t].join("::");
            },
            this
          ).join(";");
        },
        getIEPluginsString: function () {
          if (window.ActiveXObject) {
            var e = [
              "ShockwaveFlash.ShockwaveFlash",
              "AcroPDF.PDF",
              "PDF.PdfCtrl",
              "QuickTime.QuickTime",
              "rmocx.RealPlayer G2 Control",
              "rmocx.RealPlayer G2 Control.1",
              "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
              "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
              "RealPlayer",
              "SWCtl.SWCtl",
              "WMPlayer.OCX",
              "AgControl.AgControl",
              "Skype.Detection",
            ];
            return this.map(e, function (e) {
              try {
                return new ActiveXObject(e), e;
              } catch (t) {
                return null;
              }
            }).join(";");
          }
          return "";
        },
        getScreenResolution: function () {
          var e;
          return (e = this.screen_orientation
            ? screen.height > screen.width
              ? [screen.height, screen.width]
              : [screen.width, screen.height]
            : [screen.height, screen.width]);
        },
        getCanvasFingerprint: function () {
          var e = document.createElement("canvas"),
            t = e.getContext("2d"),
            n = "//valve.github.io";
          return (
            (t.textBaseline = "top"),
            (t.font = "14px 'Arial'"),
            (t.textBaseline = "alphabetic"),
            (t.fillStyle = "#f60"),
            t.fillRect(125, 1, 62, 20),
            (t.fillStyle = "#069"),
            t.fillText(n, 2, 15),
            (t.fillStyle = "rgba(102, 204, 0, 0.7)"),
            t.fillText(n, 4, 17),
            e.toDataURL()
          );
        },
      }),
      e
    );
  });
});
/*_combo_cut*/ define("statics/zhe/components/outDialog/index", function (
  e,
  i
) {
  function t() {
    (this.queDialog1Tpl = ""),
      (this.queDialog2Tpl = ""),
      (this.queDialog3Tpl = "");
  }
  function o() {
    return n ? n : (n = new t());
  }
  e("statics/zhe/common/js/fingerprint");
  var a = e("statics/zhe/common/js/stat/picstat");
  t.prototype = {
    getQueDialog1Tpl: function () {
      if (!this.queDialog1Tpl) {
        var e = new $.Buffers();
        e.push('<div class="que_d que_dialog1">'),
          e.push('  <span class="d_close"></span>'),
          e.push('  <span class="d_iknow"></span>'),
          e.push("</div>"),
          (this.queDialog1Tpl = e.toString());
      }
      return this.queDialog1Tpl;
    },
    getQueDialog2Tpl: function () {
      if (!this.queDialog2Tpl) {
        var e = new $.Buffers();
        e.push('<div class="que_d que_dialog2">'),
          e.push('  <span class="d_close"></span>'),
          e.push('  <span class="d_iknow"></span>'),
          e.push("</div>"),
          (this.queDialog2Tpl = e.toString());
      }
      return this.queDialog2Tpl;
    },
    getQueDialog3Tpl: function () {
      if (!this.queDialog3Tpl) {
        var e = new $.Buffers();
        e.push('<div class="que_d que_dialog3">'),
          e.push('  <span class="d_close"></span>'),
          e.push('  <span class="d_iknow"></span>'),
          e.push("</div>"),
          (this.queDialog3Tpl = e.toString());
      }
      return this.queDialog3Tpl;
    },
    getRandom: function (e) {
      return 1 + Math.floor(Math.random() * e);
    },
    init: function () {
      var e,
        i = this,
        t = "";
      $.cookie("ppinf") &&
        (t = $.parseJSON(
          Base64.decode(window.unescape($.cookie("ppinf")).split("|")[3])
        ).uid.replace(/^u/g, "")),
        $(".dealbox").delegate(
          "a[href*='out.zhe800.com'][target=_blank]",
          "click",
          function () {
            var o = $(this).parents(".deal").data("type"),
              n = $.cookie("out_dialog")
                ? $.cookie("out_dialog").split(",")
                : [];
            if (!$.cookie("out_dialog_time")) {
              for (var s = 0; s < n.length; s++) n[s] = parseInt(n[s]);
              if (3 != n.length) {
                if (0 == n.length) e = i.getRandom(1 == o ? 3 : 2);
                else if (1 == n.length)
                  if (1 == o)
                    for (e = i.getRandom(3); n[0] == e; ) e = i.getRandom(3);
                  else e = 3 == n[0] ? i.getRandom(2) : 1 == n[0] ? 2 : 1;
                else if (2 == n.length)
                  if (1 == o) e = 6 - n[0] - n[1];
                  else {
                    if (3 != n[0] && 3 != n[1]) return;
                    e = 6 - n[0] - n[1];
                  }
                var u = new Fingerprint().get();
                $.ajax({
                  url: "//status.tuanimg.com/cn/n/fingerprints",
                  type: "get",
                  dataType: "jsonp",
                  data: { fp: u, t: "out" },
                  jsonpCallback: "outdialog",
                  success: function (o) {
                    0 == o.status &&
                      o.times < 3 &&
                      $.Dialogs({
                        id: "queDialogCon" + e,
                        overlay: !0,
                        auto: !1,
                        closebtn: ".que_d .d_close,.que_d .d_iknow",
                        msg: function () {
                          switch (e) {
                            case 1:
                              return i.getQueDialog1Tpl();
                            case 2:
                              return i.getQueDialog2Tpl();
                            case 3:
                              return i.getQueDialog3Tpl();
                          }
                        },
                        openfun: function () {
                          var i = new Date(),
                            o = i.getFullYear(),
                            n = i.getMonth(),
                            s = i.getDate();
                          $.cookie("out_dialog_time", 1, {
                            expires: new Date(o, n, s + 1, 0),
                            path: "/",
                            domain: ".zhe800.com",
                          }),
                            $.cookie("out_dialog")
                              ? $.cookie(
                                  "out_dialog",
                                  $.cookie("out_dialog") + "," + e,
                                  {
                                    expires: 90,
                                    path: "/",
                                    domain: ".zhe800.com",
                                  }
                                )
                              : $.cookie("out_dialog", e, {
                                  expires: 90,
                                  path: "/",
                                  domain: ".zhe800.com",
                                }),
                            $.ajax({
                              url: "//www.zhe800.com/cn/n/fingerprints",
                              type: "POST",
                              data: { fp: u, t: "out" },
                            }),
                            a.doStat("click_v0", {
                              clickkey: "xiena_out_tanchuang_open",
                              userid: t,
                            }),
                            $(".que_d .d_close,.que_d .d_iknow").on(
                              "click",
                              function () {
                                a.doStat("click_v0", {
                                  clickkey: "xiena_out_tanchuang_close",
                                  userid: t,
                                });
                              }
                            );
                        },
                      });
                  },
                });
              }
            }
          }
        );
    },
  };
  var n = null;
  PubSub.add("ready", o().init, n), (i.init = o());
});
/*_combo_cut*/ define("statics/zhe/common/js/start", function (s) {
  {
    var t =
        (s("statics/zhe/components/toolbar/index"),
        s("statics/zhe/components/zhedeals/index"),
        s("statics/zhe/components/sidebar/sidebar_start")),
      e = s("statics/zhe/components/signBtn/index"),
      o =
        (s("statics/zhe/components/sidenav/index"),
        s("statics/zhe/components/searchList/index"),
        s("statics/zhe/components/pop/index"));
    s("statics/zhe/components/zxt/index"),
      s("statics/zhe/common/js/feedbackPopup"),
      s("statics/zhe/common/js/yugaoPop"),
      s("statics/zhe/common/js/layoutlogic"),
      s("statics/zhe/common/js/fireReady"),
      s("statics/zhe/common/js/dealHistoryList"),
      s("statics/zhe/common/js/ju/fixedJunav"),
      s("statics/zhe/common/js/ju/visitIndexCookie"),
      s("statics/zhe/common/js/ju/rewrite_ju_rv"),
      s("statics/zhe/common/js/stat/statCommon");
  }
  o.init(), t.init(), e.init();
});
/*_combo_cut*/ define("statics/zhe/common/js/cart", function (t, c, a) {
  function e() {
    $.ajax({
      type: "get",
      url: "//cart.zhe800.com/cart/items_count.jsonp",
      dataType: "jsonp",
      jsonp: "callback",
      jsonpCallback: "get_item_cart",
      success: function (t) {
        PubSub.fire("get_cart", t);
      },
    });
  }
  e(),
    PubSub.add("user_change", e),
    (a.exports = {
      add: function (t) {
        PubSub.add("get_cart", t);
      },
    });
});
/*_combo_cut*/ define("statics/zhe/common/js/msg", function (e, n, s) {
  function a() {
    $.cookie("ppinf") &&
      $.ajax({
        url: "//www.zhe800.com/cn/msg",
        type: "get",
        dataType: "JSONP",
        jsonp: "callback",
        jsonpCallback: "user_information_top_message",
        success: function (e) {
          PubSub.fire("get_msg", e);
        },
      });
  }
  a(),
    PubSub.add("user_change", a),
    (s.exports = {
      add: function (e) {
        PubSub.add("get_msg", e);
      },
    });
});
/*_combo_cut*/ define("statics/zhe/components/toolbar/index", function (
  a,
  e,
  o
) {
  function t() {
    PassportSC.drawPassportNew($("#toolbar #toolbarlogin"), s, { appid: 3001 }),
      $("#toolbar .phone-qrcode-down").dropdown({ evt: "hover" }),
      i.add(function (a) {
        if (a && !$("#toolbar .myzhe .icon-level").length) {
          var e = new $.Buffers();
          e.push(
            '<a class="icon-level level' +
              (a.grade - 1) +
              '" href="//www.zhe800.com/profile/my_rank" target="_blank"></a>'
          ),
            $("#toolbar .username").after(e.toString());
        }
      }),
      r.add(function (a) {
        200 !== a.status && (a.data = 0);
        var e =
          '<span class="cart"><a class="need_margin_left" target="_blank" href="//cart.zhe800.com/cart"><i><img src="//z6.tuanimg.com/v3/src/img/common/cart_icon.png" width="20" height="20" /></i>è´­ç©è½¦<b class="count">' +
          a.data +
          '</b></a></span><b class="toolbar_sepera_line"></b>';
        $("#toolbarcart").html(e),
          window &&
            window.devicePixelRatio > 1 &&
            ($(".phone-qrcode-icon").html(
              "<img width='13' height='18' src='//z6.tuanimg.com/v3/src/img/common/mobile_icon_two.jpg'>"
            ),
            $("#toolbarcart .cart a i").html(
              "<img src='//z6.tuanimg.com/v3/src/img/common/cart_icon_two.png' width='20' height='20' />"
            ));
      }),
      n.add(function (a) {
        if (a) {
          var e = "",
            o = "",
            t = parseInt(a.msg_num);
          if (
            ((o = t > 0 ? '<i class="msg-num">' + t + "</i>" : ""), a.pop_msg)
          ) {
            var s = 12 * $("<span>" + a.pop_msg + "</span>").text().length;
            (s = s > 215 ? 215 : s),
              (e =
                '<div class="msg-tips" style="width:' +
                s +
                'px"><span>' +
                a.pop_msg +
                '</span><i class="up-arr"></i><i class="close-tips"></i></div>');
          }
          (msghtml =
            '<div class="msg-box"><a href="//www.zhe800.com/profile/message_box" class="msg need_margin_left" target="_blank">æçæ¶æ¯' +
            o +
            '</a><b class="toolbar_sepera_line"></b>' +
            e +
            "</div>"),
            $("#toolbarmsg").html(msghtml),
            $(".msg-tips").click(function (a) {
              var e = $(this),
                o = a.target;
              "close-tips" === o.className
                ? e.hide()
                : "SPAN" === o.nodeName &&
                  window.open("//www.zhe800.com/profile/message_box"),
                $.get(
                  "//www.zhe800.com/cn/msg/set_pull_time?pop_read=1",
                  {},
                  function () {},
                  "JSONP"
                );
            });
        }
      });
  }
  function s(a, e) {
    {
      var o = PassportCardList[a],
        t =
          -1 == document.location.href.indexOf("login")
            ? "?return_to=" + encodeURIComponent(document.location.href)
            : "?return_to=" +
              encodeURIComponent(location.protocol + "//www.zhe800.com");
      "?return_to=" +
        encodeURIComponent(location.protocol + "//shop.zhe800.com/my/orders");
    }
    (o.rootElement = function (a) {
      this.cElement = a;
    }),
      (o.drawLoginForm = function () {
        var a = new $.Buffers();
        a.push(
          '<a target="_blank" class="qq" href="//passport.tuan800.com/sso/partner_login/qq_connect' +
            t +
            '">QQç»å½</a><b class="toolbar_sepera_line"></b>'
        ),
          a.push(
            '<a class="sign_login" href="//www.zhe800.com/login' +
              t +
              '">ç»å½</a> <a class="sign_login" target="_blank" href="https://passport.zhe800.com/users/signup' +
              t +
              '">åè´¹æ³¨å</a><b class="toolbar_sepera_line"></b><span></span>'
          ),
          a.push(
            '<a target="_blank" href="//shop.zhe800.com/my/orders">æçè®¢å</a><b class="toolbar_sepera_line"></b>'
          ),
          this.cElement.html(a.toString());
      }),
      (o._drawPassportCard = function () {
        var a = this.cookie,
          o =
            '<span class="username"><a href="//www.zhe800.com/profile/my_rank" target="_blank">' +
            a.userid +
            '</a><i class="icon-arrow arrow-down"></i><em></em></span>',
          s = new $.Buffers();
        s.push(
          '<span>æ¨å¥½ï¼</span><div class="dropdown myzhe">' +
            o +
            '</a><ul class="dropdown-menu"><li><a href="//www.zhe800.com/profile/my_favorites/all" target="_blank">æçæ¶è</a></li><li><a href="https://passport.zhe800.com/account/safe" target="_blank">è´¦å·ä¿¡æ¯</a></li><li><a href="//shop.zhe800.com/my/orders" target="_blank">æçè®¢å</a></li><li><a href="//www.zhe800.com/cn/history/list" target="_blank" add_params="utm_content=zhe800_yetou">æµè§è¶³è¿¹</a></li><li><a href="//www.zhe800.com/jifen/profile/score_histories/all" target="_blank">æçç§¯å</a></li><li><a href="//www.zhe800.com/help/cs_support" target="_blank">æ¶è´¹ä¿é</a></li><li><a href="//www.zhe800.com/profile/my_rank" target="_blank">æçç­çº§</a></li><li><a href="//shop.zhe800.com/my/coupons" target="_blank">ä¼æ å¸</a></li><li><a href="//www.zhe800.com/orders/lottery" target="_blank">æçæ½å¥</a></li><li><a class="exit" href="https://passport.zhe800.com/sso/logout' +
            t +
            '">éåº</a></li></ul></div>'
        ),
          s.push(
            '<b class="toolbar_sepera_line"></b><a href="//shop.zhe800.com/my/orders"id="mytrade" target="_blank" class="need_margin_right" >æçè®¢å</a><b class="toolbar_sepera_line"></b>'
          ),
          this.cElement.html(s.toString()),
          0 == a.nkd &&
            e
              .find(".user")
              .attr("href", "//www.zhe800.com/jifen/profile/trade"),
          $("#toolbar .myzhe").dropdown({ evt: "hover" });
      }),
      "prologin" == e.attr("id") && (o.logoutRedirectUrl = "//www.zhe800.com/"),
      (o.loginApp = function () {
        PubSub.fire("user_change");
      }),
      (o.logoutApp = function () {
        PubSub.fire("user_change");
      }),
      o.drawPassport(e);
  }
  var r = a("statics/zhe/common/js/cart"),
    n = a("statics/zhe/common/js/msg"),
    i = a("statics/zhe/common/js/user");
  t(), (o.exports = { init: t });
});
/*_combo_cut*/ define("statics/zhe/components/zhedeals/index", function (
  e,
  n,
  a
) {
  var d = e("statics/zhe/components/zhedeals/deal/tiger");
  dealEvent = e("statics/zhe/components/zhedeals/dealEvent");
  var i = window.viewType || {},
    t = window.is_top_brand ? "&is_top_brand=" + window.is_top_brand : "",
    s = function () {
      var e = window.setDealIDs && window.setDealIDs.ids;
      if (!e || 0 == e.length) return null;
      var n = arguments[0] || 1,
        a = e.length;
      if (10 > n) {
        var s = parseInt(a / n);
        !(function () {
          if (0 == n)
            return (
              (dealWork = null),
              dealEvent.idsOver(),
              void PubSub.fire("dealLoadOver")
            );
          var a = 1 == n ? e : e.splice(0, s),
            o = arguments.callee,
            l = window.fromRecommend
              ? "/n/deal_service/json_new?deal_ids="
              : "/n/deal_service/nr/json_new?deal_ids=",
            r =
              "//status.tuanimg.com" +
              l +
              a +
              "&view_type=" +
              (i.type || 0) +
              t +
              "&pagename=" +
              i.pagename +
              "&vtype=" +
              i.vtype;
          $.ajax({
            url: r,
            type: "GET",
            dataType: "JSONP",
            jsonpCallback: "deal_service_success_jsonpCallback",
            success: function (e) {
              window.xinshouOrderCount &&
                e.forEach(function (e) {
                  window.xinshouOrderCount[e.id] &&
                    (e.sold = window.xinshouOrderCount[e.id]);
                }),
                console.time("create deal"),
                console.log("deal length: " + e.length);
              var n = d.factory(e, {
                vType: i.pagename || i.vtype,
                youpinType: window.youpinType,
              });
              console.timeEnd("create deal"),
                $(".dealbox").first().append(n),
                dealEvent.lazyLoad(),
                o();
            },
          }),
            n--;
        })();
      }
    },
    o = function () {
      if (window.setDealIDs) {
        var e = 2,
          n = window.setDealIDs.ids.length;
        if (!n) return;
        (e = 200 >= n ? (100 >= n ? 1 : 2) : 3), s(e);
      } else dealEvent.idsOver(!0);
    },
    l = function () {
      if (
        !window.indexFirstPage &&
        (window.setDealIDs
          ? o()
          : PubSub.add("ready", function () {
              o();
            }),
        window.setDeals && window.setDeals.deals)
      ) {
        var e = window.setDeals.deals;
        if (e.length > 0) {
          var n = d.factory(e, { vType: i.vtype });
          $(".dealbox").first().append(n),
            dealEvent.lazyLoad(),
            dealEvent.idsOver(),
            PubSub.fire("dealLoadOver");
        }
      }
    };
  l(), (a.exports = { init: l });
});
/*_combo_cut*/ define("statics/zhe/common/js/order", function (e, n, a) {
  function o() {
    $.cookie("ppinf") &&
      $.ajax({
        url: "//zapi.zhe800.com/cn/zhe800_n_api/get_user_unpay_orders",
        dataType: "jsonp",
        cache: !0,
        jsonp: "callback",
        jsonpCallback: "jsonpCallback_getorder_sidePanel",
        success: function (e) {
          200 == e.status && PubSub.fire("get_order", e);
        },
      });
  }
  o(),
    setInterval(function () {
      $.cookie("ppinf") && o();
    }, 3e5),
    PubSub.add("user_change", o),
    (a.exports = {
      add: function (e) {
        PubSub.add("get_order", e);
      },
    });
});
/*_combo_cut*/ define("statics/zhe/common/js/coupon", function (o, n, c) {
  function u() {
    $.cookie("ppinf") &&
      $.ajax({
        url: "//shop.zhe800.com/nnc/coupons/getcoupon.jsonp",
        dataType: "jsonp",
        cache: !0,
        jsonp: "callback",
        jsonpCallback: "jsonpCallback_getcoupon_sidePanel",
        success: function (o) {
          200 == o.status && PubSub.fire("get_coupon", o);
        },
      });
  }
  u(),
    PubSub.add("user_change", u),
    (c.exports = {
      add: function (o) {
        PubSub.add("get_coupon", o);
      },
    });
});
/*_combo_cut*/ define("statics/zhe/common/js/immsg", function (e, s, a) {
  function i() {
    if ($.cookie("ppinf")) {
      var e = $.parseJSON(
        Base64.decode(unescape($.cookie("ppinf")).split("|")[3])
      ).uid.replace(/^u/g, "");
      $.ajax({
        url:
          "//message.im.zhe800.com/im-server-high-web/im/message/get_seller_msg.jsonp",
        type: "GET",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "getImMessage_callback",
        data: "userId=" + e,
        success: function (e) {
          200 === e.status && PubSub.fire("get_immsg", e);
        },
      });
    }
  }
  i(),
    PubSub.add("user_change", i),
    (a.exports = {
      add: function (e) {
        PubSub.add("get_immsg", e);
      },
    });
});
/*_combo_cut*/ define("statics/zhe/components/sidebar/gender.ejs", function (
  require,
  exports,
  module
) {
  function render(data) {
    var __p = [],
      _p = function (e) {
        __p.push(e);
      };
    with (data)
      gender &&
        (_p(
          '  <div class="side-tab side-tab-bottom side-tab-gender">\r\n      <div class="tab-icon gender-icon '
        ),
        _p(__e(gender.version)),
        _p(
          '"></div>\r\n      <div class="tab-tip" id="userversion">\r\n        <a href="//www.zhe800.com?userversion=def'
        ),
        _p(__e(gender.anchor)),
        _p(
          '" data-version="def" class="gender-version-def">é»è®¤</a>\r\n        <a href="//www.zhe800.com?userversion=lama'
        ),
        _p(__e(gender.anchor)),
        _p(
          '" title="éæ©åï¼å°ä¼åå±ç¤ºåè¾£å¦åå" data-version="lama" class="gender-version-lama">è¾£å¦</a>\r\n        <a href="//www.zhe800.com?userversion=woman'
        ),
        _p(__e(gender.anchor)),
        _p(
          '" title="éæ©åï¼å°ä¼åå±ç¤ºåå¥³æ§åå" data-version="woman" class="gender-version-woman">å¥³</a>\r\n        <a href="//www.zhe800.com?userversion=man'
        ),
        _p(__e(gender.anchor)),
        _p(
          '" title="éæ©åï¼å°ä¼åå±ç¤ºåç·æ§åå" data-version="man" class="gender-version-man">ç·</a>\r\n      </div>\r\n    </div>'
        )),
        _p("");
    return __p.join("");
  }
  var __a = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    },
    __b = /[&<>"']/g,
    __e = function (e) {
      return (
        (e = String(e)),
        e.replace(__b, function (e) {
          return __a[e];
        })
      );
    };
  module.exports = render;
});
/*_combo_cut*/ define("statics/zhe/components/checkin/login.ejs", function (
  require,
  exports,
  module
) {
  function render(data) {
    var __p = [],
      _p = function (n) {
        __p.push(n);
      };
    with (data)
      _p(
        checkin_status.status
          ? '  <div class="signin-panel login signined">'
          : '  <div class="signin-panel login unsignined">'
      ),
        _p(
          '  <div class="title_user_status">\r\n      <div class="title_user_status_l">\r\n        <span class="user_jifen">\r\n          <span>'
        ),
        _p(__e(checkin_status.score)),
        _p("</span><b>å</b>\r\n          <u>è´­ç©å¯æµ<em>"),
        _p(__e(checkin_status.cash)),
        _p(
          'å</em></u>\r\n          <a class="jfhhl" href="//www.zhe800.com/jifen/welfare?utm_content=qiandao" target="_blank">ç§¯åæ¢å¥½ç¤¼&gt;&gt;</a>\r\n        </span>\r\n        <div class="checkin_time_line">'
        ),
        _p(signinpanel_cktimeline(checkin_status)),
        _p(
          '      </div>\r\n      </div>\r\n      <div class="title_user_status_r">'
        ),
        checkin_status.status
          ? (_p('      <button class="checked_btn'),
            _p(signinpanel_getscore(checkin_status)),
            _p('"></button>'))
          : (_p(
              '      <button data-clickkey="qiandao_button" class="docheckin checked_btn'
            ),
            _p(signinpanel_getscore(checkin_status)),
            _p('"></button>')),
        _p(
          '    </div>\r\n    </div>\r\n    <div class="sign_tog_wrap">\r\n      <div class="cal_box">\r\n        <div class="qiandao_huodong">\r\n          <a href="'
        ),
        _p(__e(checkin_info.adv.image1.link_url)),
        _p('" target="'),
        _p(__e(checkin_info.adv.image1.link_type)),
        _p('">\r\n            <img src="'),
        _p(__e(checkin_info.adv.image1.image_url)),
        _p('"/>\r\n          </a>\r\n          <a href="'),
        _p(__e(checkin_info.adv.image2.link_url)),
        _p('" target="'),
        _p(__e(checkin_info.adv.image2.link_type)),
        _p('">\r\n            <img src="'),
        _p(__e(checkin_info.adv.image2.image_url)),
        _p('"/>\r\n          </a>\r\n          <a href="'),
        _p(__e(checkin_info.adv.image3.link_url)),
        _p('" target="'),
        _p(__e(checkin_info.adv.image3.link_type)),
        _p('">\r\n            <img src="'),
        _p(__e(checkin_info.adv.image3.image_url)),
        _p(
          '"/>\r\n          </a>\r\n        </div>\r\n        <div class="qiandao_renwu">\r\n          <ul>'
        ),
        checkin_info.tasks.forEach(function (n) {
          _p("            "), _p(signinpanel_task(n)), _p("          ");
        }),
        _p(
          '        </ul>\r\n          <a class="btn_cal_icon" href="javascript:;"></a>\r\n        </div>\r\n      </div>\r\n      <div class="qr_box undis">\r\n        <div class="article">\r\n            <div class="qr_content">\r\n                <p>ä¸ºä½ çç­¾å°åä¸ªçº§å§~</p>\r\n                  <img src="//z5.tuanimg.com/v2/core/img/109082_qrcode.png">\r\n            </div>\r\n        </div>\r\n        <div class="ad_signin">\r\n            <h2 class="qr_tit">ææºç­¾å°å¥½å¤å¤</h2>\r\n            <ul class="qr_list">\r\n                <li><span>é¢å¤ç§¯å</span></li>\r\n                <li><span>ç­¾å°æé</span></li>\r\n                <li><span>æ­ç­¾å¤æ´»</span></li>\r\n                <li><span>å¨æç§ç­¾</span></li>\r\n                <li><span>éæ¶éå°</span></li>\r\n            </ul>\r\n        </div>\r\n        <a href="javascript:;" class="btn_qr_icon"></a>\r\n      </div>\r\n    </div>\r\n  </div>'
        );
    return __p.join("");
  }
  var __a = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    },
    __b = /[&<>"']/g,
    __e = function (n) {
      return (
        (n = String(n)),
        n.replace(__b, function (n) {
          return __a[n];
        })
      );
    };
  module.exports = render;
});
/*_combo_cut*/ define("statics/zhe/components/checkin/unlogin.ejs", function (
  require,
  exports,
  module
) {
  function render(data) {
    var __p = [],
      _p = function (n) {
        __p.push(n);
      };
    with (data)
      _p(
        '<div class="signin-panel unlogin">\r\n    <img class="unloginpic" src="'
      ),
        _p(__e(adv.image_url)),
        _p('"></img>\r\n  </div>');
    return __p.join("");
  }
  var __a = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    },
    __b = /[&<>"']/g,
    __e = function (n) {
      return (
        (n = String(n)),
        n.replace(__b, function (n) {
          return __a[n];
        })
      );
    };
  module.exports = render;
});
/*_combo_cut*/ define("statics/zhe/components/checkin/index", function (
  n,
  i,
  a
) {
  function s(n) {
    var i;
    return (i =
      1 === n.score_tasks_type_id && -1 !== n.name.indexOf("ç­¾å°")
        ? '<li class="meiri_wrap"><a class="meiri_qiandao docheckin" data-clickkey="qiandao_task" ><img src="' +
          n.image_url +
          '"/><p>' +
          n.name +
          "<span>+" +
          n.scores +
          'å</span></p><em class="complete"></em></a></li>'
        : '<li><a href="' +
          n.url +
          '" target="_blank"><img src="' +
          n.image_url +
          '"/><p>' +
          n.name +
          (n.score_no_limit
            ? "<span>æ ä¸é</span>"
            : "<span>+" + n.scores + "å</span>") +
          "</p></a></li>");
  }
  function c(n) {
    return n.status ? n.tomorrow_score : n.current_score;
  }
  function e(n) {
    for (
      var i = n.day,
        a = n.status ? i - 1 : i,
        s = n.status ? i + 1 : i + 2,
        c = [],
        e = a - 2 > 0 ? a - 2 : 1,
        t = 0;
      3 > t && a >= e;

    )
      c.push(
        "<li><div><span>+" +
          (e >= 3 ? 5 : e + 2) +
          "</span></div><p><span>" +
          e +
          "</span>å¤©</p></li>"
      ),
        t++,
        e++;
    for (
      c.push(
        '<li data-clickkey="qiandao_lianxu" class="today_line ' +
          (n.status ? "" : "docheckin") +
          '"><div><span>+' +
          (e >= 3 ? 5 : e + 2) +
          "</span></div><p>ä»å¤©</p></li>"
      ),
        e++;
      c.length < 5;

    )
      c.push(
        '<li class="right_time_line ' +
          (4 == c.length ? "last_time_line" : "") +
          '"><div><span>+' +
          (e >= 3 ? 5 : e + 2) +
          "</span></div><p><span>" +
          s +
          "</span>å¤©</p></li>"
      ),
        s++,
        e++;
    return "<ul>" + c.join("") + "</ul>";
  }
  function t(n) {
    var i = $(n);
    if (0 !== i.length) {
      u(i),
        i.on("click", ".login.unsignined .docheckin", function (n) {
          n.stopPropagation(),
            r.dosigin(),
            p.doStat("click_v0", { clickkey: $(this).data("clickkey") });
        });
      var a = $.grep(m, function (i) {
        return i == n;
      });
      0 == a.length && m.push(n);
    }
  }
  function o(n) {
    return v
      ? void setTimeout(function () {
          o(n);
        }, 500)
      : void ($.cookie("ppinf")
          ? b
            ? n({ data: b, status: 1 })
            : ((v = !0),
              $.ajax({
                url: "//www.zhe800.com/cn/checkin_info",
                type: "GET",
                dataType: "JSONP",
                jsonp: "callback",
                jsonpCallback: "get_pannel_checkin_info",
                success: function (i) {
                  (b = i),
                    PubSub.fire("get_checkin_info", i),
                    n({ data: b, status: 1 });
                },
                complete: function () {
                  v = !1;
                },
              }))
          : h
          ? n({ data: h, status: 0 })
          : ((v = !0),
            $.ajax({
              url: "//www.zhe800.com/right_sign_words/get_not_checkin_info",
              type: "GET",
              dataType: "JSONP",
              jsonp: "callback",
              jsonpCallback: "get_not_checkin_info",
              success: function (i) {
                (h = i), n({ data: h, status: 0 });
              },
              complete: function () {
                v = !1;
              },
            })));
  }
  function l() {
    function n() {
      var n = $(".sign_tog_wrap"),
        i = n.find(".cal_box"),
        a = n.find(".qr_box");
      $(".btn_cal_icon").show(),
        $(".btn_cal_icon").on("click", function () {
          i.css("display", "none"),
            a.css("display", "block"),
            p.doStat("qiandao_sijiao", { from: "qrcode" });
        }),
        $(".btn_qr_icon").on("click", function () {
          i.css("display", "block"),
            a.css("display", "none"),
            p.doStat("qiandao_sijiao", { from: "calendar" });
        });
    }
    var i = "1" === $.cookie("newauser") ? !0 : !1;
    if (i) n();
    else {
      var a = $.parseJSON(
        Base64.decode(window.unescape($.cookie("ppinf")).split("|")[3])
      ).uid.replace(/^u/g, "");
      $.ajax({
        url: "//status.tuanimg.com/cn/n/user_transfer/authorize?user_id=" + a,
        type: "GET",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "app_new_user_cornerAd",
        success: function (i) {
          function a(n) {
            $.cookie("newauser", n, {
              path: "/",
              expires: 1,
              domain: ".zhe800.com",
            });
          }
          0 === i.code && 2 === i.response ? (a("1"), n()) : a("0");
        },
      });
    }
  }
  function u(n) {
    0 != n.length &&
      (n.html('<img src="//z5.tuanimg.com/v2/core/img/checkin_loading.gif" />'),
      o(function (i) {
        switch (i.status) {
          case 0:
            n.html(k(i.data)),
              n.on("click", ".signin-panel.unlogin", function () {
                g.renderLoginDialog(),
                  PubSub.add("login_s1_callback", function () {
                    r.dosigin({
                      callback: function (i) {
                        1 == i.status &&
                          setTimeout(function () {
                            n.trigger("mouseenter");
                          }, 5);
                      },
                    });
                  }),
                  p.doStat("click_v0", { clickkey: "qiandao_banner" });
              });
            break;
          case 1:
            PubSub.onece("get_signin", function (a) {
              n.html(
                f({
                  checkin_status: a,
                  checkin_info: i.data,
                  signinpanel_task: s,
                  signinpanel_getscore: c,
                  signinpanel_cktimeline: e,
                })
              ),
                l();
            });
        }
      }));
  }
  var r = n("statics/zhe/common/js/qdpost"),
    p = n("statics/zhe/common/js/stat/picstat"),
    d = n("statics/zhe/common/js/signin"),
    _ = n("statics/zhe/common/js/user"),
    g = n("statics/zhe/components/login_reg_dialog/index"),
    f = n("statics/zhe/components/checkin/login.ejs"),
    k = n("statics/zhe/components/checkin/unlogin.ejs"),
    m = [],
    h = null,
    b = null,
    v = !1;
  PubSub.add("get_signin", function () {
    for (var n = 0, i = m.length; i > n; n++) u($(m[n]));
  }),
    _.add(d.get),
    (a.exports = { render: t });
});
/*_combo_cut*/ define("statics/zhe/components/sidebar/sidebar_start", function (
  e,
  t,
  a
) {
  function i(e) {
    function t(e, t) {
      var a = $("em.favo_num"),
        i = $("i.favorite_num_tip"),
        n = Number(i.html()),
        s = "<i class='quan_i'>...</i>",
        t = t ? t : {};
      0 === a.length &&
        ($(".myFavorites-icon a").append('<em class="favo_num"></em>'),
        (a = $("em.favo_num"))),
        t.notAdd || (n += e),
        0 >= n ? (a.remove(), (n = 0)) : a.html(n >= 100 ? s : n),
        i.html(n);
    }
    if (!h) {
      var a = {},
        i = [];
      i = $("body").data("userversion")
        ? e || [
            "cart",
            "order",
            "coupons",
            "myFavorites",
            "imMessage",
            "checkin",
            "qrcode",
            "faq",
            "gender",
            "feedback",
            "totop",
          ]
        : e || [
            "cart",
            "order",
            "coupons",
            "myFavorites",
            "imMessage",
            "checkin",
            "qrcode",
            "faq",
            "feedback",
            "totop",
          ];
      for (var _ = 0, f = i.length; f > _; _++) a[i[_]] = !0;
      var g = ".gender-version-def";
      a.gender
        ? ((a.gender = {}),
          (a.gender.version = $.cookie("user_version")
            ? $.cookie("user_version")
            : "def"),
          (a.gender.anchor =
            window.is_home_page && "1" == window.is_home_page
              ? "#today_deals"
              : ""),
          (g = ".gender-version-" + a.gender.version))
        : (a.gender = !1),
        $(m(a)).insertAfter($("#sidebar .side-tab-checkin")),
        $(".side-tab-gender").find(g).addClass("on"),
        $("#userversion a").click(function () {
          var e = $(this).data("version");
          $(".gender-icon").addClass(e),
            $.cookie("user_version", e, {
              expires: 365,
              domain: ".zhe800.com",
              path: "/",
            });
        }),
        $.cookie("myqd") && $(".side-tab-checkin").addClass("checkyet"),
        $("#sidebar #goTop").bind("click", function () {
          var e = document.body.scrollTop
            ? document.body
            : document.documentElement;
          $(e).animate({ scrollTop: 0 }, 300),
            window._gaq &&
              _gaq.push(["_trackPageview", "/PageAction/left_menu/Top"]);
        });
      var v = $("#sidebar #goTop"),
        k = $(window),
        y = function () {
          var e = k.scrollTop();
          e > 0 ? v.removeClass("thide") : v.addClass("thide");
        };
      k.scroll(function () {
        window.lazyExecute("sidebar", y);
      }),
        $("#sidebar .side-tab-top").each(function (e) {
          $(this).addClass("side-tab-top" + e);
        }),
        $("#sidebar .side-tab-bottom").each(function (e) {
          $(this).addClass(
            "side-tab-bottom" + ($(".side-tab-bottom").length - e - 1)
          );
        }),
        $(".side-tab").hover(
          function () {
            $(this).find(".tab-tip").css("display", "block");
          },
          function () {
            $(this).find(".tab-tip").css("display", "none");
          }
        ),
        (h = !0),
        o.add(function (e) {
          var t = e.orderCount,
            a = e.orderCount;
          t > 999 && (a = 999);
          var i =
            '<div class="tab-icon order-icon"><a href="//shop.zhe800.com/my/orders" target="_blank" add_params="utm_content=right_bar"><em class="order_num"></em></a></div> <div class="tab-tip tab-tip-order"><a href="//shop.zhe800.com/my/orders" target="_blank" add_params="utm_content=right_bar"><i class="order_num_tip"></i>ä¸ªå¾æ¯ä»è®¢å<br>ä¸å<i class="order_count_tip">30åé</i>å¤±æ</a></div>';
          $(".order_num").length || $(".side-tab-order").empty().html(i),
            t >= 100 && (t = "<i class='quan_i'>...</i>"),
            0 == t
              ? $("em.order_num").remove()
              : $(".side-tab-order .order_num").html(t),
            $(".side-tab-order .order_num_tip").html(a);
        }),
        r.add(function (e) {
          function t(e, t) {
            var a, i, n, s;
            try {
              a = e.toString().split(".")[1].length;
            } catch (o) {
              a = 0;
            }
            try {
              i = t.toString().split(".")[1].length;
            } catch (o) {
              i = 0;
            }
            if (
              ((s = Math.abs(a - i)), (n = Math.pow(10, Math.max(a, i))), s > 0)
            ) {
              var r = Math.pow(10, s);
              a > i
                ? ((e = Number(e.toString().replace(".", ""))),
                  (t = Number(t.toString().replace(".", "")) * r))
                : ((e = Number(e.toString().replace(".", "")) * r),
                  (t = Number(t.toString().replace(".", ""))));
            } else (e = Number(e.toString().replace(".", ""))), (t = Number(t.toString().replace(".", "")));
            return (e + t) / n;
          }
          var a = [],
            i = {},
            n = 0,
            s = 0,
            o = 0,
            r = 0,
            d =
              '<div class="tab-icon coupons-icon"><a href="//shop.zhe800.com/my/coupons" target="_blank" add_params="utm_content=right_bar"><em class="quan_num"></em></a></div> <div class="tab-tip tab-tip-coupon"><a href="//shop.zhe800.com/my/coupons" target="_blank" add_params="utm_content=right_bar">å±<i class="quan_num_tip"></i>å¼ <br>å¯ä¼æ <i class="quan_count_tip"></i>å</a></div>',
            c = $(".side-tab-coupons");
          if ((c.html(d), 200 == e.status)) {
            var m = e.data || {};
            (i = e.store_coupons_data || {}),
              (a = m.couponInfoList || []),
              (n = (m.total || 0) + (i.count || 0)),
              (s = n > 99 ? 99 : n),
              (o = n >= 100 ? "<i class='quan_i'>...</i>" : n);
          }
          0 == o ? $("em.quan_num").remove() : c.find(".quan_num").html(o),
            c.find(".quan_num_tip").html(s);
          for (var l = 0, b = a.length; b > l; l++) r = t(r, a[l].price);
          (r = t(r, i.amount)),
            (r = r > 999 ? 999 : r),
            c.find(".quan_count_tip").html(r);
        }),
        d.addGetfav(function (e) {
          (number = e.favorite_nums), number > 999 && (number = 999);
          var t =
            '<div class="tab-icon myFavorites-icon"><a href="//www.zhe800.com/profile/my_favorites/all" target="_blank" add_params="utm_content=right_bar"><em class="favo_num"></em></a></div> <div class="tab-tip tab-tip-myFavorites"><a href="//www.zhe800.com/profile/my_favorites/all" target="_blank" add_params="utm_content=right_bar"><i class="favorite_num_tip">' +
            number +
            "</i>ä¸ªæ¶èåå</a></div>";
          $(".side-tab-myFavorites").empty().html(t),
            number >= 100 && (number = "<i class='quan_i'>...</i>"),
            0 === number
              ? $("em.favo_num").remove()
              : $(".side-tab-myFavorites .favo_num").html(number);
        }),
        d.addAddFav(function (e) {
          e.data;
          e.opt && e.opt.starAnimation
            ? n(e.opt.x, e.opt.y, function () {
                t(1, e.opt);
              })
            : t(1, e.opt);
        }),
        d.addDelFav(function (e) {
          t(-1, e.opt);
        }),
        c.add(function (e) {
          var t,
            a,
            i = $(".side-tab-imMessage"),
            n = i.find(".imMessage-icon"),
            s = i.find(".tab-tip"),
            o = "",
            r = "",
            d = "";
          (t = e.data.sellerMsgCount || 0),
            (a = e.data.lastSellerJid),
            "" !== a
              ? ((d =
                  "//im.zhe800.com/index.html#/login?type=buyer&othersidename=" +
                  a.replace(/@im.zhe800.com/, "")),
                (o =
                  0 == t
                    ? '<a class="message_big" href="' +
                      d +
                      '" target="_blank" add_params="utm_content=right_bar"></a>'
                    : 99 >= t
                    ? '<a class="message_big" href="' +
                      d +
                      '" target="_blank" add_params="utm_content=right_bar"><span>' +
                      t +
                      "</span></a>"
                    : '<a class="message_small" href="' +
                      d +
                      '" target="_blank" add_params="utm_content=right_bar"><span>...</span></a>'),
                (r =
                  '<a class="message_text" href="' +
                  d +
                  '" target="_blank" add_params="utm_content=right_bar"><i>' +
                  t +
                  "</i>æ¡æªè¯»æ¶æ¯</a>"),
                n.append(o),
                s.html(r))
              : s.html('<a class="message_text">åå®¶æ¶æ¯</a>');
        }),
        PubSub.add("get_page_config", function (e) {
          var t = e.right_sign_text,
            a = "signTips";
          if (($.cookie("myqd") && (a = ""), !$.cookie("ppinf"))) {
            var i = "æµç°åæ¢ç¤¼<br/>ç§¯åè¶å®ç¨";
            (i =
              0 == t.not_sign_in.length
                ? i
                : t.not_sign_in.splice(0, 2).join("<br/>")),
              $("#sidebar .side-tab-checkin .tab-tip")
                .removeClass("signined")
                .addClass(a)
                .find(".tab-ckcontent")
                .html(
                  '<table class="tab-cktips"><tr><td><div>' +
                    i +
                    "</div></td></tr></table>"
                ),
              $("#sidebar .side-tab-checkin")
                .unbind("click.sidebar")
                .bind("click.sidebar", function () {
                  return (
                    u.renderLoginDialog({ appid: 3004 }),
                    PubSub.add("login_s1_callback", function () {
                      l.dosigin({
                        callback: function (e) {
                          1 == e.status &&
                            setTimeout(function () {
                              $("#sidebar .side-tab-checkin").trigger(
                                "mouseenter"
                              );
                            }, 5);
                        },
                      });
                    }),
                    b.doStat("click_v0", { clickkey: "qiandao_right" }),
                    !1
                  );
                });
          }
          PubSub.add("get_signin", function (e) {
            if (0 == e.status) {
              var i = "ç§¯åæäº<br/>å¿«æ¡èµ·æ¥";
              (i =
                0 == t.signed_in.length
                  ? i
                  : t.signed_in.splice(0, 2).join("<br/>")),
                $("#sidebar .side-tab-checkin .tab-tip")
                  .removeClass("signined")
                  .addClass(a)
                  .find(".tab-ckcontent")
                  .html(
                    '<table class="tab-cktips"><tr><td><div>' +
                      i +
                      "</div></td></tr></table>"
                  ),
                $("#sidebar .side-tab-checkin")
                  .unbind("click.sidebar")
                  .bind("click.sidebar", function () {
                    l.dosigin({
                      callback: function (e) {
                        1 == e.status &&
                          setTimeout(function () {
                            $("#sidebar .side-tab-checkin").trigger(
                              "mouseenter"
                            );
                          }, 5);
                      },
                    }),
                      b.doStat("click_v0", { clickkey: "qiandao_right" });
                  });
            } else
              $("#sidebar .side-tab-checkin").addClass("checked"),
                $("#sidebar .side-tab-checkin .tab-tip")
                  .addClass("signined")
                  .removeClass("signTips"),
                $("#sidebar .side-tab-checkin").bind(
                  "mouseenter.rendersp",
                  function () {
                    p.render("#sidebar .side-tab-checkin .tab-ckcontent"),
                      $("#sidebar .side-tab-checkin").off(
                        "mouseenter.rendersp"
                      );
                  }
                ),
                $("#sidebar .side-tab-checkin").unbind("click.sidebar");
          });
        }),
        s.add(function (e) {
          e &&
            $(".tab-sup-bd").html(
              e.data <= 99 ? e.data : "<i class='quan_i'>...</i>"
            );
        });
    }
  }
  function n(e, t, a) {
    $("#fivepointed").length ||
      $('<div id="fivepointed"></div>').appendTo($("body"));
    var i = $("#sidebar .side-tab-myFavorites").offset();
    (endTop = i.top), (endLeft = i.left);
    var n = 20,
      s = -1,
      o = Math.min(t, endTop) - Math.abs(e - endLeft) / 8;
    n > o && (o = Math.min(n, Math.min(t, endTop)));
    var r = 0,
      d = 0.28,
      c = navigator.userAgent.toLowerCase().toString();
    c.indexOf("chrome") > 0 && (d = 0.7);
    var m = Math.sqrt(Math.pow(t - endTop, 2) + Math.pow(e - endLeft, 2)),
      r = Math.ceil(Math.min(Math.max(Math.log(m) / 0.05 - 75, 30), 100) / d),
      l = t == o ? 0 : -Math.sqrt((endTop - o) / (t - o)),
      b = (l * e - endLeft) / (l - 1),
      u = endLeft == b ? 0 : (endTop - o) / Math.pow(endLeft - b, 2);
    $("#fivepointed").css({ display: "block", left: e + "px", top: t + "px" });
    var p = setInterval(function () {
      s++;
      var i = e + ((endLeft - e) * s) / r,
        n = 0 == u ? t + ((endTop - t) * s) / r : u * Math.pow(i - b, 2) + o;
      $("#fivepointed").css({ left: i + "px", top: n + "px" }),
        s > r &&
          ($("#fivepointed").css("display", "none"),
          window.clearInterval(p),
          a && "function" == typeof a && a());
    }, 1);
  }
  var s = e("statics/zhe/common/js/cart"),
    o = e("statics/zhe/common/js/order"),
    r = e("statics/zhe/common/js/coupon"),
    d = e("statics/zhe/common/js/myfav"),
    c = e("statics/zhe/common/js/immsg"),
    m = e("statics/zhe/components/sidebar/gender.ejs"),
    l = e("statics/zhe/common/js/qdpost"),
    b = e("statics/zhe/common/js/stat/picstat"),
    u = e("statics/zhe/components/login_reg_dialog/index"),
    p = e("statics/zhe/components/checkin/index"),
    h = !1;
  a.exports.init = i;
});
/*_combo_cut*/ define("statics/zhe/components/signBtn/index", function (
  i,
  n,
  o
) {
  function e() {
    var i = $("#signinid"),
      n = function () {
        $.ajax({
          url: "//www.zhe800.com/ajax_api/get_navi_button",
          type: "GET",
          dataType: "JSONP",
          callback: "callback",
          jsonpCallback: "change_Singn_Status",
          success: function (i) {
            i.status &&
              ((i = o(i)),
              (window.signinBtnData = i),
              PubSub.fire("siginBtnImg", i),
              PubSub.fire("get_page_config", i));
          },
        });
      };
    n();
    var o = function (i) {
        var n = i || {},
          o = window.is_home_page && !/page/.test(location.href),
          e = o && n.index ? n.index : n;
        return (
          (unsignup_gif =
            window && window.devicePixelRatio > 1
              ? e.unsignup_gif
              : e.unsignup_single_gif),
          {
            sign: u(e.signup_image),
            unsignHover: u(e.unsignup_hover_image),
            unsignNohover: u(e.unsignup_no_hover_image),
            unsignGif: unsignup_gif,
            signHover: u(e.signup_hover_image),
            right_sign_text: i.right_sign_text,
          }
        );
      },
      e = function (n, o) {
        (data = n || {}), (o = o || {});
        var e = ($("#signinid"), 1 == $.cookie("myqd")),
          t = (hover = ""),
          s = o.status;
        s
          ? ((t = data.sign), (hover = data.signHover))
          : ((t = data.unsignGif), (hover = data.unsignHover)),
          e && !s && ((t = data.unsignNohover), (hover = data.unsignHover)),
          i.css({
            "background-image": "url(" + t + ")",
            "background-size": "100% 100%",
          }),
          i.hover(
            function () {
              $(this).addClass("open"),
                i.css({
                  "background-image": "url(" + hover + ")",
                  "background-size": "100% 100%",
                });
            },
            function () {
              $(this).removeClass("open"),
                i.css({
                  "background-image": "url(" + t + ")",
                  "background-size": "100% 100%",
                });
            }
          );
      },
      r = function () {
        i.unbind("click").click(function (i) {
          i.target == this &&
            ($.cookie("ppinf")
              ? g.dosigin()
              : (s.renderLoginDialog(),
                PubSub.add("login_s1_callback", function () {
                  g.dosigin();
                })),
            d.doStat("click_v0", { clickkey: "qiandao_top" }));
        });
      };
    r();
    var l = function (i) {
        i = i || {};
        var n = new Date();
        n.setHours(23, 59, 59, 0),
          $.cookie("qd", i.status + "-" + i.day + "-" + i.score, {
            path: "/",
            expires: n,
            domain: ".zhe800.com",
          });
      },
      _ = function () {
        d.doStat("click_v0", { clickkey: "double_registration_pop_up_window" }),
          a.render({
            titTxt: "ä¸ºå®æå¨äºåç­¾ï¼è¯·å¡«åæ¨çææºå·å®æéªè¯",
            btnTxt: "æ¾å¼éªè¯",
            bindSucCallBack: function () {
              d.doStat("click_v0", {
                clickkey: "double_registration_complete_verification",
              }),
                g.dosigin();
            },
          });
        var i = null;
        i = setInterval(function () {
          $("#dialog_bdsj_bangding").length &&
            ($("#dialog_bdsj_bangding .close").on("click", function () {
              d.doStat("click_v0", { clickkey: "double_registration_close" }),
                $("#dialog_tishi_qiandao .close").trigger("click");
            }),
            $("#reg_submit_i").on("click", function () {
              d.doStat("click_v0", {
                clickkey: "double_registration_verify_now",
              });
            }),
            clearInterval(i));
        }, 100);
      };
    $.cookie("ppinf") ||
      PubSub.add("siginBtnImg", function (i) {
        e(i);
      }),
      i.find(".dropdown-menu").length ||
        i.append('<div class="dropdown-menu"></div>'),
      t.render("#signinid .dropdown-menu"),
      PubSub.add("get_signin", function (n) {
        l(n),
          PubSub.add("siginBtnImg", function (i) {
            e(i, n);
          });
        var o = c.isLogin(),
          t = o ? o.idss.id2 : !1;
        !t &&
          n.is_double &&
          n.channels.mobile &&
          $("#signinid, .side_panel .signin")
            .unbind("click")
            .click(function () {
              _();
            }),
          n.status && i.unbind("click");
      });
  }
  var t = i("statics/zhe/components/checkin/index"),
    s = i("statics/zhe/components/login_reg_dialog/index"),
    a = i("statics/zhe/components/bindPhone/index"),
    c = i("statics/zhe/common/js/isLogin"),
    g = i("statics/zhe/common/js/qdpost"),
    d = i("statics/zhe/common/js/stat/picstat"),
    u = i("statics/zhe/common/js/retinaImg");
  o.exports = { init: e };
});
/*_combo_cut*/ define("statics/zhe/components/sidenav/tpl.ejs", function (
  require,
  exports,
  module
) {
  function render(data) {
    var __p = [],
      _p = function (_) {
        __p.push(_);
      };
    with (data) {
      _p(
        '<div id="side_nav">\r\n  	<div class ="logo">\r\n  		<a href="//www.zhe800.com" add_params="utm_content=left_menu">\r\n  			<span class="lo_img"></span>\r\n  		</a>\r\n  	</div>\r\n  	<div class="sd_content">\r\n  		<div class="choose_identify" id="choose_identify">\r\n  			<a href="javascript:void(0);" style="background-color: '
      ),
        _p(__e(userColor)),
        _p(' ;">æ¨çèº«ä»½&nbsp:&nbsp<span>'),
        _p(__e(identify)),
        _p('</span></a>\r\n  		</div>\r\n  		<div class="sd_bd">\r\n  			<ul>');
      for (var t in top)
        _p('					<li class="'),
          _p(__e(top[t].className || "")),
          _p('">'),
          top[t].isHot && _p("							<i></i>"),
          _p('						<a href="'),
          _p(__e(top[t].url)),
          _p('" add_params="utm_content=left_menu" '),
          _p(__e(getOn.call(top[t]))),
          _p(">"),
          _p(__e(t)),
          _p("</a>\r\n  					</li>");
      _p(
        '			</ul>\r\n  		</div>\r\n  		<div class="sd_line"></div>\r\n  		<div class="sd_bdc">\r\n  			<ul>'
      );
      for (var m in middle)
        _p('					<li class="'),
          _p(__e(middle[m].className || "")),
          _p('">\r\n  						<a href="'),
          _p(__e(middle[m].url)),
          _p('" add_params="utm_content=left_menu" '),
          _p(__e(getOn.call(middle[m]))),
          _p(" >\r\n  							<i></i>"),
          _p(__e(m)),
          _p("						</a>\r\n  					</li>");
      _p(
        '			</ul>\r\n  		</div>\r\n  		<form class="sd_search" target="_blank" action="//search.zhe800.com/search">\r\n  			<input type="text" name="keyword" class="sd_txt" placeholder="æç´¢" autocomplete="off">\r\n  			<input type="submit" value="" class="sd_smt">\r\n  		</form>\r\n  		<div class="sd_zhi_guang">\r\n  			<ul>'
      );
      for (var b in bottom)
        _p('					<li>\r\n  						<a href="'),
          _p(__e(bottom[b].url)),
          _p('" target="'),
          _p(__e(bottom[b].target || "_self")),
          _p('" add_params="utm_content=left_menu" '),
          _p(__e(getOn.call(bottom[b]))),
          _p(" >"),
          _p(__e(b)),
          _p("</a>\r\n  					</li>"),
          bottom[b].emTag && _p("					<em>|</em>"),
          _p("				");
      _p("			</ul>\r\n  		</bottom>\r\n  	</div>\r\n  </div>");
    }
    return __p.join("");
  }
  var __a = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    },
    __b = /[&<>"']/g,
    __e = function (_) {
      return (
        (_ = String(_)),
        _.replace(__b, function (_) {
          return __a[_];
        })
      );
    };
  module.exports = render;
});
/*_combo_cut*/ define("statics/zhe/components/sidenav/index", function (a) {
  function e() {
    var a = window.location.origin + window.location.pathname,
      e = function () {
        return new RegExp(this.regUrl || this.url).test(a) ? "class=on" : "";
      },
      s = {
        top: {
          "ä»æ¥ä¸æ°": { url: "//new.zhe800.com", className: "new" },
          "å³å°ä¸æ¶": { url: "//last.zhe800.com", className: "last" },
          "æ¯æ¥10ä»¶": {
            url: "//www.zhe800.com/n/meirishijian",
            className: "ten",
          },
          "9å9åé®": {
            url: "//www.zhe800.com/ju_type/baoyou",
            className: "baoyou",
          },
          "åçå¢": { url: "//brand.zhe800.com", className: "brand" },
          "ä¼åæ±": {
            url: "//www.zhe800.com/n/youpinhui",
            className: "youpinhui",
            isHot: !0,
          },
          "æè¡": {
            url: "//top.zhe800.com/zuorixiaoliang",
            regUrl: "//top.zhe800.com",
            className: "rank",
          },
        },
        middle: {
          "å¥³è£": {
            url: "//www.zhe800.com/ju_tag/taofushi",
            className: "nvzhuang",
          },
          "åè¡£": {
            url: "//www.zhe800.com/ju_tag/taoneiyi",
            className: "neiyi",
          },
          "ç·è£": {
            url: "//www.zhe800.com/ju_tag/taonanzhuang",
            className: "nanzhuang",
          },
          "éå": {
            url: "//www.zhe800.com/ju_tag/taoxiepinxiangbao",
            className: "xiepin",
          },
          "å¿ç«¥": {
            url: "//www.zhe800.com/ju_tag/taoertong",
            className: "ertong",
          },
          "æ¯å©´": {
            url: "//www.zhe800.com/ju_tag/taomuying",
            className: "muying",
          },
          "å®¶çºº": {
            url: "//www.zhe800.com/ju_tag/taojiafang",
            className: "jiafang",
          },
          "å±å®¶": {
            url: "//www.zhe800.com/ju_tag/taojujia",
            className: "jujia",
          },
          "ç¾é£": {
            url: "//www.zhe800.com/ju_tag/taomeishi",
            className: "shipin",
          },
          "è¿å¨": {
            url: "//www.zhe800.com/ju_tag/taoyundong",
            className: "yundong",
          },
          "å®¶çµ": {
            url: "//www.zhe800.com/ju_tag/taojiadian",
            className: "jiadian",
          },
          "æ°ç ": {
            url: "//www.zhe800.com/ju_tag/taojiadian",
            className: "shuma",
          },
          "ç®±å": {
            url: "//www.zhe800.com/ju_tag/taoxiepinxiangbao",
            className: "xiangbao",
          },
          "éé¥°": {
            url: "//www.zhe800.com/ju_tag/taopeishi",
            className: "peishi",
          },
          "ç¾å¦": {
            url: "//www.zhe800.com/ju_tag/taomeizhuang",
            className: "meizhuang",
          },
          "ä¸­èå¹´": {
            url: "//www.zhe800.com/ju_tag/taoold",
            className: "old",
          },
        },
        bottom: {
          "å¼å¾ä¹°": { url: "//zhi.zhe800.com", emTag: !0 },
          "ééæ¢": { url: "//www.zhe800.com/cn/n/xianshiqiangPC" },
        },
      },
      t = o();
    (s.userColor = t.userColor),
      (s.identify = t.identify),
      (s.getOn = e),
      $("body").append(n(s)),
      PubSub.fire("sidenav_created", $("#side_nav")),
      $("#choose_identify a").click(function () {
        $(document.body).trigger("identpopclick");
      });
    var u = $(".about"),
      l = $("#side_nav").length ? $("#side_nav").outerHeight() : 0;
    $(window).bind("scroll", function () {
      var a = document.body.scrollTop || document.documentElement.scrollTop,
        e = u.length ? u.offset().top : 1e3,
        o = e - l - 10;
      o > 0 && a > o
        ? $("#side_nav")
            .removeClass("sd_affix")
            .css({ top: o + "px" })
        : a > i.scrollTop
        ? $("#side_nav").addClass("sd_affix").css({ top: i.fixedTop })
        : $("#side_nav").removeClass("sd_affix").css({ top: "" });
    });
  }
  function o() {
    var a = $.cookie("user_version") || "default",
      e = "lama man woman default".indexOf(a) > -1 ? a : "default",
      o = {
        lama: { userColor: "#e01914", identify: "è¾£å¦" },
        man: { userColor: "#e01914", identify: "ç·" },
        woman: { userColor: "#e01914", identify: "å¥³" },
        def: { userColor: "#fe6a6a", identify: "è¯·éæ©" },
        default: { userColor: "#fe6a6a", identify: "è¯·éæ©" },
      };
    return o[e];
  }
  var n = a("statics/zhe/components/sidenav/tpl.ejs"),
    i = { scrollTop: 70, fixedTop: 0 };
  return (
    e(),
    {
      affterCreated: function (a) {
        PubSub.add("sidenav_created", a);
      },
    }
  );
});
/*_combo_cut*/ define("statics/zhe/common/js/cdStorage", function () {
  var e = function (e, t) {
    (this.origin = e),
      (this.path = t),
      (this._iframe = null),
      (this._iframeReady = !1),
      (this._queue = []),
      (this._requests = {}),
      (this._id = 0);
  };
  return (
    (e.prototype = {
      op: { WRITE: "W", READ: "R", DEL: "D", CLEAR: "X" },
      constructor: e,
      init: function () {
        var e = this;
        if (!this._iframe) {
          if (!(window.postMessage && window.JSON && window.localStorage))
            throw new Error("Unsupported browser.");
          (this._iframe = document.createElement("iframe")),
            (this._iframe.style.cssText =
              "position:absolute;width:1px;height:1px;left:-9999px;"),
            document.body.appendChild(this._iframe),
            window.addEventListener
              ? (this._iframe.addEventListener(
                  "load",
                  function () {
                    e._iframeLoaded();
                  },
                  !1
                ),
                window.addEventListener(
                  "message",
                  function (t) {
                    e._handleMessage(t);
                  },
                  !1
                ))
              : this._iframe.attachEvent &&
                (this._iframe.attachEvent(
                  "onload",
                  function () {
                    e._iframeLoaded();
                  },
                  !1
                ),
                window.attachEvent("onmessage", function (t) {
                  e._handleMessage(t);
                }));
        }
        this._iframe.src = this.origin + this.path;
      },
      getValue: function (e, t) {
        this._toSend({ key: e }, t);
      },
      setValue: function (e, t, i) {
        this._toSend({ key: e, op: this.op.WRITE, value: t }, i);
      },
      delValue: function (e, t) {
        this._toSend({ key: e, op: this.op.DEL, value: value }, t);
      },
      clearValue: function (e) {
        this._toSend({ op: this.op.CLEAR }, e);
      },
      _toSend: function (e, t) {
        var i = {
          request: { key: e.key, id: ++this._id, op: e.op, value: e.value },
          callback: t,
        };
        this._iframeReady ? this._sendRequest(i) : this._queue.push(i),
          this._iframe || this.init();
      },
      _sendRequest: function (e) {
        (this._requests[e.request.id] = e),
          this._iframe.contentWindow.postMessage(
            JSON.stringify(e.request),
            this.origin
          );
      },
      _iframeLoaded: function () {
        if (((this._iframeReady = !0), this._queue.length)) {
          for (var e = 0, t = this._queue.length; t > e; e++)
            this._sendRequest(this._queue[e]);
          this._queue = [];
        }
      },
      _handleMessage: function (e) {
        if (e.origin == this.origin) {
          var t = JSON.parse(e.data);
          this._requests[t.id] &&
            this._requests[t.id].callback &&
            this._requests[t.id].callback(t.key, t.value),
            delete this._requests[t.id];
        }
      },
    }),
    e
  );
});
/*_combo_cut*/ define("statics/zhe/common/js/search", function (t, e, a) {
  function n() {
    PubSub.add("dealLoadOver", function () {
      $("#recommendtitle, #recommend").show();
    }),
      $(function () {
        {
          var t = $(".header .search"),
            e = t.find("form"),
            a = t.find(".sort"),
            n = a.find("a"),
            s = n.filter(".dj"),
            i = n.filter(".qw"),
            o = a.siblings(".txt"),
            l = o.siblings("label");
          a.find(".dropdown-menu"), e.find(".txt");
        }
        i.hasClass("active") && l.show(),
          i.bind("mouseenter", function () {
            s.removeClass("active");
          }),
          i.bind("mouseleave", function () {
            s.addClass("active");
          }),
          a.delegate("a", "click", function (t) {
            t.preventDefault();
            var n = $(this);
            if (
              (n.hasClass("dj")
                ? (e.attr({
                    action: "//www.zhe800.com/search",
                    target: "_self",
                  }),
                  o.attr("name", "keyword"),
                  l.hide())
                : (e.attr({ action: "//s.etao.com/search", target: "_blank" }),
                  o.attr("name", "q"),
                  o.val() || l.show()),
              n.closest(".dropdown-menu").length)
            ) {
              var s = a.find("a"),
                i = s.not(n),
                r = n.attr("class").split(" ")[0],
                c = n.text();
              n.attr({ class: i.attr("class").split(" ")[0] }),
                n.html(i.text()),
                i.attr("class", r),
                i.html(c + '<i class="icon-arrow arrow-down"></i>');
            }
            a.removeClass("open");
          }),
          o.focus(function () {
            l.hide();
          }),
          o.blur(function () {
            var t = n.filter(".qw");
            t.hasClass("active") && !o.val() && l.show();
          }),
          l.click(function () {
            o.focus();
          }),
          "placeholder" in document.createElement("input") ||
            $("input,textarea").each(function () {
              var t = $(this),
                e = t.attr("placeholder");
              e &&
                (t.val(e),
                t.focus(function () {
                  var a = t.val();
                  a == e && t.val("");
                }),
                t.blur(function () {
                  var a = t.val();
                  "" == a && t.val(e);
                }));
            }),
          window.setDeals &&
            window.setDeals.deals.length > 0 &&
            $("#recommendtitle, #recommend").hide();
      });
  }
  n(), (a.exports = { init: n });
});
/*_combo_cut*/ define("statics/zhe/components/searchList/index", function (
  e,
  s,
  t
) {
  function o() {
    n.init();
    var e = function () {
      var e = {},
        s = $.cookie("screenversion");
      $(".header .search .txt").attr("autocomplete", "off"),
        $(".header .search form").attr("target", "_self"),
        (e.sugg = {
          val: $(".header .search .txt").val(),
          upval: "",
          show: function (s) {
            var t = this;
            38 != s && 40 != s && 39 != s && 37 != s && (t.i = -1),
              (t.i = t.i || 0),
              (t.list = t.list || $("#JS_query li:not(.close)"));
            var o = $("#JS_history");
            if (t.list.length > 0 && o && 0 == o.length)
              switch (s) {
                case 38:
                  return (
                    t.clear(),
                    t.i < 1 && (t.i = t.list.length),
                    t.i--,
                    t.list.eq(e.sugg.i).addClass("hover"),
                    t.vals(t.list.eq(t.i)),
                    !1
                  );
                case 40:
                  return (
                    t.clear(),
                    t.i == t.list.length - 1 && (t.i = -1),
                    t.i++,
                    t.list.eq(e.sugg.i).addClass("hover"),
                    t.vals(t.list.eq(t.i)),
                    !1
                  );
              }
            else 1 == o.length;
            t.getjson();
          },
          getjson: function () {
            var s = this,
              t = $(".header .search .txt").val();
            return (
              (s.url =
                "//status.tuanimg.com/zhe800-search/suggestion/searchJsonp"),
              "" == t
                ? (s.outkeys(), e.sugg.showHistory(), !1)
                : ($("#JS_history").remove(),
                  void $.ajax({
                    type: "get",
                    url: s.url,
                    dataType: "jsonp",
                    jsonpCallback: "search_sug",
                    data: { word: t, limit: 10, offset: 0 },
                    success: function (s) {
                      var t = e.sugg,
                        o = s.response.docs || [],
                        a = new $.Buffers(),
                        r =
                          '<li class="close"><a href="javascript:void(0);" class="close_query">å³é­</a></li>',
                        n = "";
                      return 0 == o.length
                        ? (t.outkeys(), !1)
                        : ($.each(o, function (e, s) {
                            a.append(
                              '<li info="' +
                                s.word +
                                '"><span class="pc_count">çº¦' +
                                (s.count || 0) +
                                "æ¡ç»æ</span>" +
                                s.word +
                                "</li>"
                            );
                          }),
                          (n = a.toString()),
                          $("#JS_query").size() > 0
                            ? $("#JS_query")
                                .empty()
                                .prepend(n + r)
                            : ($(".search").css({
                                "z-index": "9908",
                                position: "relative",
                              }),
                              $(".header .search form").after(
                                '<ul id="JS_query" class="search_query">' +
                                  n +
                                  "</li>" +
                                  r +
                                  "</ul>"
                              )),
                          i.doStat("click_v0", {
                            clickkey: "search_relate_pop_up_window",
                          }),
                          $("#JS_query .close_query").click(function () {
                            t.outkeys(),
                              i.doStat("click_v0", {
                                clickkey: "click_search_relate_close",
                              });
                          }),
                          $("#JS_query li")
                            .unbind()
                            .bind("mouseover", function () {
                              e.sugg.hovers(this);
                            })
                            .bind("click", function () {
                              t.vals($(this)),
                                i.doStat("click_v0", {
                                  clickkey: "click_relate_recommend",
                                }),
                                $(".header .search form")
                                  .attr("target", "_self")
                                  .submit();
                            }),
                          $("JS_query .close")
                            .unbind()
                            .css("cursor", "default"),
                          void (t.list = $("#JS_query li:not(.close)")));
                    },
                    error: function () {
                      console.log("jsonp error");
                    },
                  }))
            );
          },
          keys: function (s) {
            var t = e.sugg,
              s = window.event || s,
              o = s.keyCode || s.which;
            t.show(o);
          },
          hovers: function (e) {
            var s = this;
            s.clear(),
              s.list.each(function (t) {
                e == s.list.get(t) &&
                  ((s.i = t), s.list.eq(t).addClass("hover"));
              });
          },
          vals: function (e) {
            $(".header .search .txt").val(e.attr("info"));
          },
          focusHandler: function (s) {
            var t = e.sugg,
              o = $(".header .search .txt").val();
            -1 == location.href.indexOf("search.zhe800.com") &&
              o == t.val &&
              ($(".header .search .txt").attr("data-keyword", o),
              $(".header .search .txt").val(""));
            {
              var s = window.event || s;
              s.keyCode || s.which;
            }
            t.getjson();
          },
          blurHandler: function () {
            var s = $(".header .search .txt"),
              t = s.data("keyword");
            "" == s.val() &&
              t &&
              ($(".header .search .showkw").show(), s.val(t)),
              e.sugg.outkeys();
          },
          outkeys: function () {
            $(".header .search").removeAttr("style"), $("#JS_query").remove();
          },
          clear: function () {
            var s = e.sugg;
            s.list.removeClass("hover");
          },
          submitForm: function (s) {
            var t = e.sugg,
              s = window.event || s,
              o = s.keyCode || s.which;
            if (13 == o) {
              if ($("#JS_history").length > 0) {
                var a = $(".header .search form");
                a.append(
                  "<input type='hidden' name='utm_content' value='zuijinsousuo' />"
                );
              }
              return $(".header .search form").submit(), t.outkeys(), !1;
            }
          },
          defaultSenKws: function () {
            function e(e) {
              var s = { sentence: "", keyword: "" },
                t = e.length,
                o = Math.floor(Math.random() * t);
              return (
                (s.keyword = e[o].keyword),
                (s.sentence = e[o].sentence ? e[o].sentence : s.keyword),
                s
              );
            }
            var t = this;
            $.ajax({
              url: "//status.tuanimg.com/n/default_sen_and_kws",
              type: "GET",
              dataType: "JSONP",
              jsonpCallback: "get_default_sen_and_kws",
              success: function (o) {
                var a = {};
                if (o.length) {
                  if (s) a = e(o);
                  else {
                    for (var r = [], i = 0; i < o.length; i++)
                      o[i].sentence && r.push(o[i]);
                    a = e(r.length ? r : o);
                  }
                  var n = $(".header .search .txt"),
                    c = '<span class="showkw">' + a.sentence + "</span>";
                  (t.val = a.keyword),
                    n.attr("data-keyword", a.keyword),
                    n.val(a.keyword),
                    $(".header .search").append(c),
                    $(".header .search .showkw").click(function () {
                      $(this).hide(), n.focus();
                    });
                }
              },
            });
          },
          hotWordData: [],
          loadHotWord: function (s) {
            e.sugg.hotWordData.length ||
              $.ajax({
                type: "get",
                url: "//status.tuanimg.com/n/search/hot_search_words",
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "hotWordSearch",
                success: function (t) {
                  (e.sugg.hotWordData = t || []), e.sugg.loadHistory(s);
                },
              });
          },
          isRequestHistoryData: !1,
          isRequestHistoryFromAjax: !1,
          historyData: [],
          loadHistory: function (s) {
            if (!e.sugg.isRequestHistoryData)
              if (window.localStorage) {
                var t = new r(
                  window.location.protocol + "//search.zhe800.com",
                  "/n/agent.html"
                );
                t.getValue("search_history_list", function (t, o) {
                  var a = [];
                  o = o ? o.split(",") : [];
                  for (var r = 0; r < o.length; r++)
                    a.push(decodeURIComponent(o[r]));
                  (e.sugg.historyData = a),
                    $.cookie("ppinf") && a.length < 20
                      ? e.sugg.loadHistoryAjax(s, !0)
                      : ((e.sugg.isRequestHistoryData = !0),
                        s.focus(),
                        e.sugg.showHistory());
                });
              } else $.cookie("ppinf") && e.sugg.loadHistoryAjax(s, !0);
          },
          loadHistoryAjax: function (s, t) {
            e.sugg.isRequestHistoryFromAjax ||
              $.ajax({
                type: "get",
                url: "//search.zhe800.com/cn/n/history/json",
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "history_search",
                success: function (o) {
                  o &&
                    o.search_history &&
                    ((e.sugg.historyData = e.sugg.unique(
                      e.sugg.historyData.concat(o.search_history)
                    )),
                    (e.sugg.isRequestHistoryData = !0),
                    (e.sugg.isRequestHistoryFromAjax = !0),
                    t && s.focus() && e.sugg.showHistory());
                },
              });
          },
          delRemoteData: function (s) {
            var t = s.closest("li.history_item"),
              o = t.index(),
              a = e.sugg.historyData,
              i = t.attr("info");
            if (
              (t.remove(),
              a.splice(o - 1, 1),
              $(".header .search .txt").focus(),
              window.localStorage)
            ) {
              var n = encodeURIComponent(i),
                c = new r(
                  window.location.protocol + "//search.zhe800.com",
                  "/n/agent.html"
                );
              c.getValue("search_history_list", function (e, s) {
                s = s ? s.split(",") : [];
                var t = $.inArray(n, s);
                t > -1 && s.splice(t, 1),
                  c.setValue("search_history_list", s.join(","));
              });
            }
            if (
              ($.cookie("ppinf") &&
                $.ajax({
                  type: "get",
                  url: "//search.zhe800.com/cn/n/del",
                  dataType: "jsonp",
                  jsonp: "callback",
                  jsonpCallback: "del_search",
                  data: { keyword: i },
                  success: function () {},
                }),
              a.length < 20 &&
                e.sugg.loadHistoryAjax($(".header .search .txt")),
              0 == a.length)
            )
              return (
                $("#JS_history .search_history").append(
                  '<p class="no_history">æ¨è¿æ²¡ææç´¢è¿è¿é</p><div class="no_history_pic"></div><p class="no_history_word">æä¸æï¼æ»ææåç­çä½ </p>'
                ),
                void $("#his_recent_tit span").remove()
              );
            var l = $("#JS_history li.history_item:visible").length;
            l < a.length && $("#JS_history li.history_item").eq(l).show();
          },
          delAllData: function () {
            var s = $("ul.search_history li").not(":first");
            if (
              (s.remove(),
              $(".header .search .txt").focus(),
              (e.sugg.historyData = []),
              window.localStorage)
            ) {
              var t = new r(
                window.location.protocol + "//search.zhe800.com",
                "/n/agent.html"
              );
              t.clearValue(function () {});
            }
            $.cookie("ppinf") &&
              $.ajax({
                type: "get",
                url: "//search.zhe800.com/cn/n/del_all",
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "del_search",
                success: function () {},
              }),
              $("#JS_history .search_history").append(
                '<p class="no_history">æ¨è¿æ²¡ææç´¢è¿è¿é</p><div class="no_history_pic"></div><p class="no_history_word">æä¸æï¼æ»ææåç­çä½ </p>'
              ),
              $("#his_recent_tit span").remove();
          },
          historyHover: function () {
            var s = null,
              t = $("#JS_history li.history_item"),
              o = $("#his_recent_tit span");
            $(".search")
              .on("mouseleave", function () {
                s = setTimeout(function () {
                  $(".header .search .txt").trigger("blur"),
                    e.sugg.blurHandler(),
                    e.sugg.removeHistory();
                }, 2e3);
              })
              .on("mouseenter", function () {
                clearTimeout(s);
              }),
              $("#his_recent_tit")
                .on("mouseenter", function () {
                  0 != t.length
                    ? (o.addClass("del_all_hover").removeClass("del_all"),
                      t.removeClass("hover_style"))
                    : o.addClass("del_all");
                })
                .on("mouseleave", function () {
                  o.removeClass("del_all_hover").addClass("del_all");
                }),
              $("#JS_history li.history_item").on("mouseover", function () {
                $(this).addClass("hover_style"),
                  $(this).siblings().removeClass("hover_style");
              });
          },
          showHistory: function () {
            if (
              "" == $(".header .search .txt").val() &&
              !(
                $("#JS_history").length > 0 ||
                $("#JS_query").length > 0 ||
                e.sugg.hotWordData.length < 1
              )
            ) {
              i.doStat("click_v0", { clickkey: "search_pop_up_window" });
              {
                var s = e.sugg.historyData,
                  t = e.sugg.hotWordData,
                  o = [];
                $(".header .search .txt");
              }
              if ((o.push('<div id="JS_history">'), t.length)) {
                o.push('<dl class="search_hotword">'),
                  o.push("<dt>æ­£å¨ç­æ</dt>");
                for (var a = 0; a < t.length; a++) {
                  var r = t[a],
                    n = "";
                  (n = r.url
                    ? r.url
                    : "//search.zhe800.com/search?keyword=" +
                      encodeURIComponent(r.word)),
                    o.push("<dd>"),
                    o.push(
                      '<a href="' +
                        n +
                        '" add_params="utm_content=zhe800_topsearch_hot">' +
                        r.word +
                        "</a>"
                    ),
                    o.push("</dd>");
                }
                o.push("</dl>");
              }
              if (
                (o.push("<ul class='search_history'>"),
                o.push(
                  "<li id='his_recent_tit'>åå²è®°å½<span class='del_all'>æ¸é¤</span></li>"
                ),
                s.length)
              )
                for (var a = 0; a < s.length; a++)
                  o.push(
                    10 > a
                      ? "<li class='history_item' info='" +
                          s[a] +
                          "'><span class='del'>å é¤</span><span class='hisinfo'>" +
                          s[a] +
                          "</span></li>"
                      : "<li class='history_item hidden' info='" +
                          s[a] +
                          "'><span class='del'>å é¤</span><span class='hisinfo'>" +
                          s[a] +
                          "</span></li>"
                  );
              else
                o.push(
                  '<p class="no_history">æ¨è¿æ²¡ææç´¢è¿è¿é</p><div class="no_history_pic"></div><p class="no_history_word">æä¸æï¼æ»ææåç­çä½ </p>'
                );
              o.push("</ul>"),
                o.push("</div>"),
                $(".header .search form").after(o.join("")),
                $("#JS_history .search_hotword a").on("click", function () {
                  i.doStat("click_v0", { clickkey: "click_recommend" });
                }),
                $("#JS_history .search_history li.history_item").on(
                  "click",
                  function () {
                    e.sugg.vals($(this));
                    var s = $(".header .search form");
                    i.doStat("click_v0", { clickkey: "click_recent_search" }),
                      s.append(
                        "<input type='hidden' name='utm_content' value='zuijinsousuo' />"
                      ),
                      s.submit();
                  }
                ),
                $("#his_recent_tit span").on("click", function (s) {
                  s.stopPropagation(),
                    e.sugg.delAllData(),
                    $("#his_recent_tit").trigger("mouseenter");
                }),
                $("#JS_history li span.del").on("click", function (s) {
                  s.stopPropagation(), e.sugg.delRemoteData($(this));
                }),
                e.sugg.historyHover();
            }
          },
          removeHistory: function () {
            $("#JS_history").remove();
          },
          unique: function (e) {
            for (var s, t = [], o = {}, a = 0; null != (s = e[a]); a++)
              o[s] || (t.push(s), (o[s] = !0));
            return t;
          },
        }),
        -1 == location.href.indexOf("search.zhe800.com")
          ? e.sugg.defaultSenKws()
          : $(".header .search .txt").val($("#custumize_word").text()),
        $(".header .search .txt")
          .bind("keyup", e.sugg.keys)
          .bind("paste", e.sugg.keys)
          .bind("cut", e.sugg.keys)
          .bind("focus", e.sugg.focusHandler)
          .bind("keypress", e.sugg.submitForm),
        $(document.body).bind("click", function (s) {
          var t = $(".header .search .txt"),
            o = $(".header .search .showkw"),
            a = ($("#JS_history li.history_item"), $("#his_recent_tit"));
          if (s.target == t[0]) e.sugg.loadHotWord(t);
          else {
            if (s.target == a[0]) return;
            s.target == o[0]
              ? (o.hide(), e.sugg.loadHotWord(t))
              : (e.sugg.blurHandler(), e.sugg.removeHistory());
          }
        }),
        $.cookie("ppinf") ||
          a.add(function () {
            e.sugg.isRequestHistoryData &&
              e.sugg.loadHistoryAjax($(".header .search .txt"));
          });
    };
    PubSub.add("ready", e);
  }
  var a = e("statics/zhe/common/js/user"),
    r = e("statics/zhe/common/js/cdStorage"),
    i = e("statics/zhe/common/js/stat/picstat"),
    n = e("statics/zhe/common/js/search");
  o(), (t.exports = { init: o });
});
/*_combo_cut*/ define("statics/zhe/components/pop/identpop", function (
  e,
  i,
  o
) {
  function s() {
    (l = $("#choose_identify a")),
      "lama" == d
        ? l.css("background-color", "#e01914").find("span").html("è¾£å¦")
        : "man" == d
        ? l.css("background-color", "#e01914").find("span").html("ç·")
        : "woman" == d
        ? l.css("background-color", "#e01914").find("span").html("å¥³")
        : l.css("background-color", "#fe6a6a").find("span").html("è¯·éæ©");
  }
  function n() {
    var e = new $.Buffers(),
      i = "",
      o = "",
      s = "";
    return (
      "woman" == d
        ? (i = " on")
        : "lama" == d
        ? (o = " on")
        : "man" == d && (s = " on"),
      e.push('<div class="identify_window_p">'),
      e.push("    <p>æ¨çèº«ä»½æ¯ï¼</p>"),
      e.push("    <p> åªä¸ºä½ ç§äººå®å¶æ´åéçåå</p>"),
      e.push("</div>"),
      e.push('<div class="identify_head">'),
      e.push(" <ul>"),
      e.push(
        '   <li class="i_h_one' +
          i +
          '" data-version="woman"><a href="javascript:void(0)"><span>å¥³</span></a></li>'
      ),
      e.push(
        '   <li class="i_h_two' +
          o +
          '" data-version="lama" ><a href="javascript:void(0)"><span>è¾£å¦</span></a></li>'
      ),
      e.push(
        '   <li class="i_h_three' +
          s +
          '" data-version="man"><a href="javascript:void(0)"><span>ç·</span></a></li>'
      ),
      e.push(" </ul>"),
      e.push("</div>"),
      e.push("<div >"),
      e.push(
        '   <a href="javascript:void(0)"><span class="i_h_sure">ç¡®å®</span></a>'
      ),
      e.push(
        '   <a href="javascript:void(0)" data-version="def" ><span class="i_h_return">æ¢å¤é»è®¤</span></a>'
      ),
      e.push("</div >"),
      e
    );
  }
  function a(e) {
    r.doStat("click_v0", { clickkey: e });
  }
  function t() {
    $.Dialogs({
      id: "identify_window",
      cls: "identify_window",
      msg: n(),
      auto: !1,
      closebtn: "a span.close, .i_h_sure, .i_h_return",
      overlay: !0,
      closefun: function () {
        $(".dialog-overlay").remove();
      },
      openfun: function () {
        $("#identify_window span.close").click(function () {
          a("user_identity_close");
        });
        var e = $("#identify_window .identify_head li");
        e.click(function () {
          var e = $(this),
            i = "";
          e.addClass("on").siblings().removeClass("on"),
            e.hasClass("i_h_one")
              ? (i = "user_identity_woman")
              : e.hasClass("i_h_two")
              ? (i = "user_identity_hotmom")
              : e.hasClass("i_h_three") && (i = "user_identity_man"),
            a(i);
        }),
          $("#identify_window .i_h_sure").click(function () {
            a("user_identity_ensure");
            for (var i = "", o = 0; o < e.length; o++)
              e.eq(o).hasClass("on") && (i = e.eq(o).data("version"));
            $.cookie("user_version", i, {
              expires: 365,
              domain: ".zhe800.com",
              path: "/",
            }),
              (d = $.cookie("user_version")),
              s(),
              window.is_home_page &&
                "1" === window.is_home_page &&
                (window.location.href = d
                  ? "//www.zhe800.com?userversion=" + d + "#today_deals"
                  : "//www.zhe800.com"),
              window.viewType &&
                13 == window.viewType.type &&
                (window.location.href = "//" + window.location.host);
          }),
          $("#identify_window .i_h_return").click(function () {
            a("user_identity_restore");
            $.cookie("user_version");
            $.cookie("user_version", "def", {
              expires: 365,
              domain: ".zhe800.com",
              path: "/",
            }),
              (d = $.cookie("user_version")),
              s(),
              window.is_home_page &&
                "1" === window.is_home_page &&
                (window.location.href =
                  "//www.zhe800.com?userversion=def#today_deals"),
              window.viewType &&
                13 == window.viewType.type &&
                (window.location.href = "//" + window.location.host);
          });
      },
    });
  }
  var r = e("statics/zhe/common/js/stat/picstat"),
    d = $.cookie("user_version") || "",
    c = $.cookie("version_dialog") || "",
    l = $("#choose_identify a"),
    _ = !1;
  $(document.body).on("identpopclick", function () {
    a("user_identity_choose"), t();
  });
  var h = function (e) {
    if (_) return void e.deferr.resolve();
    _ = !0;
    var i = window.is_home_page && "1" === window.is_home_page,
      o = !d,
      s = 1 != c,
      n = !$(".dialog-overlay").length;
    i && o && s && n
      ? $.ajax({
          url: "//zapi.zhe800.com/custom_identities/switch_status",
          type: "get",
          dataType: "jsonp",
          jsonp: "callback",
          jsonpCallback: "switch_status_callback",
          success: function (i) {
            var o = !$("#new_cookie_dialog").length;
            if (($(".tf_sigin").remove(), 1 == i.status && o && n)) {
              if (e.data.isalert) return void e.deferr.resolve({ isalert: !0 });
              t(),
                $.cookie("version_dialog", 1, {
                  expires: 1,
                  domain: ".zhe800.com",
                  path: "/",
                }),
                e.deferr.resolve({ isalert: !0 });
            } else e.deferr.resolve();
          },
          error: function () {
            e.deferr.resolve();
          },
        })
      : e.deferr.resolve();
  };
  o.exports = { pop: h };
});
/*_combo_cut*/ define("statics/zhe/components/survey/clientDetail", function (
  e,
  i,
  n
) {
  "use strict";
  var t = {
    getOS: function () {
      var e = navigator.userAgent,
        i = "other";
      if (-1 !== e.indexOf("Win")) {
        i = "Windows";
        var n = {
          isWinXP:
            -1 !== e.indexOf("Windows NT 5.1") ||
            -1 !== e.indexOf("Windows XP"),
          isWin7:
            -1 !== e.indexOf("Windows NT 6.1") || -1 !== e.indexOf("Windows 7"),
          isWin8: -1 !== e.indexOf("Windows NT 6.2"),
          isWin81: -1 !== e.indexOf("Windows NT 6.3"),
          isWin10: -1 !== e.indexOf("Windows NT 10"),
        };
        return n.isWinXP
          ? i + "XP"
          : n.isWin7
          ? i + "7"
          : n.isWin8
          ? i + "8"
          : n.isWin81
          ? i + "81"
          : n.isWin10
          ? i + "10"
          : i;
      }
      return (
        -1 !== e.indexOf("Mac") && (i = "MacOS"),
        -1 !== e.indexOf("X11") && (i = "UNIX"),
        -1 !== e.indexOf("Linux") && (i = "Linux"),
        i
      );
    },
    getBw: function () {
      var e = navigator.userAgent.toLowerCase(),
        i = window.clientInformation,
        n = "track" in document.createElement("track");
      return /qqbrowser/.test(e)
        ? "QQæµè§å¨"
        : /bidubrowser/.test(e)
        ? "ç¾åº¦æµè§å¨"
        : /ubrowser/.test(e)
        ? "UCæµè§å¨"
        : /2345explorer/.test(e)
        ? "2345"
        : /metasr/.test(e)
        ? "æçæµè§å¨"
        : /lbbrowser/.test(e)
        ? "çè±¹æµè§å¨"
        : /firefox/.test(e)
        ? "ç«çæµè§å¨"
        : /chrome/.test(e) && i && i.languages && i.languages.length > 2
        ? "chromeæµè§å¨"
        : /rv:11.0/.test(e)
        ? "IE11"
        : /msie 10.0/.test(e)
        ? "IE10"
        : this.getIeVersion()
        ? "IE" + this.getIeVersion()
        : window.ActiveXObject || "ActiveXObject" in window
        ? "IE"
        : /micromessenger/.test(e)
        ? "weixin"
        : n && /chrome/.test(e)
        ? "360æµè§å¨"
        : /opera/.test(e)
        ? "opera"
        : /safari/.test(e)
        ? "safari"
        : "other";
    },
    getIeVersion: function () {
      var e = window.ActiveXObject,
        i = window.document.documentMode,
        n = e || i,
        t = 3,
        r = document.createElement("p"),
        s = r.getElementsByTagName("i");
      if (n) {
        for (
          ;
          (r.innerHTML = "/*[if gt IE " + ++t + "]><i></i><![endif]*/"), s[0];

        );
        return t > 4 ? t : 0;
      }
      return !1;
    },
    getScreen: function () {
      return window.screen.width + "*" + window.screen.height;
    },
  };
  n.exports = t;
});
/*_combo_cut*/ define("statics/zhe/components/survey/renderSurvey", function (
  e,
  n,
  s
) {
  function t(e) {
    var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
      s = window.location.search.substr(1).match(n);
    return null != s ? window.unescape(s[2]) : null;
  }
  var i = e("statics/zhe/components/survey/clientDetail"),
    r = {
      questionList: {},
      unansweredQuestionIds: [],
      questionId2SortIdMap: {},
      questionId2RecordIndexMap: {},
      result: {},
      currentQuestion: {},
      questionRecordTree: [],
      getParentTreeIndex: function (e) {
        for (var n = this.questionRecordTree.length - 1, s = -1; n >= 0; --n)
          if (((s = $.inArray(e, this.questionRecordTree[n].next)), -1 !== s))
            return n;
        return -1;
      },
      rebuildTree: function (e, n) {
        for (var s = 0, t = -1, i = this.questionRecordTree.length; i > s; ++s)
          if (
            s !== n &&
            ((t = $.inArray(e, this.questionRecordTree[s].next)), -1 !== t)
          )
            return this.questionRecordTree[s].next.splice(t, 1), !0;
        return !0;
      },
      getNextQuestionIdByBacktracking: function (e) {
        var n = this.questionId2RecordIndexMap[e + ""],
          s = this.questionRecordTree[n].parent,
          t = null,
          i = -1;
        if (
          -1 !== s &&
          ((t = this.questionRecordTree[s]),
          (i = $.inArray(e, t.next)),
          -1 !== i)
        )
          return t.next.hasOwnProperty(i + 1)
            ? t.next[i + 1]
            : this.getNextQuestionIdByBacktracking(t.questionId);
        if (this.unansweredQuestionIds.length)
          for (var r = 0, a = this.unansweredQuestionIds.length; a > r; ++r)
            if (
              this.questionId2SortIdMap[this.unansweredQuestionIds[r] + ""] >
              this.currentQuestion.sortId
            )
              return this.unansweredQuestionIds[r];
        return !1;
      },
      injectQuestions: function (e) {
        var n = this;
        (n.questionList = {}),
          (n.unansweredQuestionIds = []),
          (n.questionId2SortIdMap = {});
        for (var s = 0, t = e.length; t > s; ++s)
          (n.questionList[e[s].id + ""] = e[s]),
            n.unansweredQuestionIds.push(e[s].id),
            (n.questionId2SortIdMap[e[s].id + ""] = e[s].sortId);
        n.unansweredQuestionIds.sort(function (e, s) {
          return (
            n.questionId2SortIdMap[e + ""] - n.questionId2SortIdMap[s + ""]
          );
        });
      },
      getNextQuestion: function (e) {
        var n = this,
          s = n.currentQuestion,
          t = parseInt(s.id),
          i = t + "",
          e = $.makeArray(e);
        if (!n.questionList.hasOwnProperty(i)) return !1;
        var r = $.inArray(t, n.unansweredQuestionIds);
        n.unansweredQuestionIds.splice(r, 1), (n.result[i] = []);
        var a = [];
        if (s.linkedRel && s.linkedRel.hasOwnProperty("-1")) {
          var u = s.linkedRel[-1].nextQuestionId;
          void 0 != u && u != t && -1 === $.inArray(u, a) && a.push(u);
        } else
          for (var o = 0, l = e.length, u = null; l > o; ++o)
            (e[o] += ""),
              n.result[i].push(e[o]),
              s.linkedRel &&
                ((u = null),
                s.linkedRel.hasOwnProperty(e[o]) &&
                  (u = s.linkedRel[e[o]].nextQuestionId),
                null != u && u != t && -1 === $.inArray(u, a) && a.push(u));
        var d = n.getParentTreeIndex(t);
        if (-1 !== $.inArray(0, a)) return "finish";
        a.length || this.rebuildTree(t, d),
          a.sort(function (e, s) {
            return (
              n.questionId2SortIdMap[e + ""] - n.questionId2SortIdMap[s + ""]
            );
          }),
          (n.questionId2RecordIndexMap[i] =
            n.questionRecordTree.push({ parent: d, questionId: t, next: a }) -
            1);
        var c = null,
          p = 0;
        do {
          if (a.length && p < a.length) c = a[p++];
          else {
            if (((c = n.getNextQuestionIdByBacktracking(t)), !c))
              return "finish";
            t = c;
          }
          c += "";
        } while (n.result.hasOwnProperty(c));
        return (n.currentQuestion = n.questionList[c]), n.currentQuestion;
      },
    },
    a = {
      isRequired: "",
      thwartMark: !1,
      txtInfo: "ï¼å¿å¡«ï¼",
      init: function (e) {
        var n = "",
          s = this;
        switch (
          ((s.isRequired = ""),
          (s.thwartMark = ""),
          e.isRequired && (s.isRequired = '<span class="star">*</span>'),
          e.thwartMark && (s.thwartMark = ' class="across"'),
          e.type)
        ) {
          case "SINGLE_CHOICE":
            n = s.singleHtml(e);
            break;
          case "MULTIPLE_CHOICE":
            n = s.multipleHtml(e);
            break;
          case "FILL_BLANK":
            n = s.fillHtml(e);
            break;
          default:
            n = "";
        }
        var t =
          e.linkedRel &&
          e.linkedRel.hasOwnProperty("-1") &&
          0 == e.linkedRel[-1].nextQuestionId;
        return (
          ((null === e.linkedRel || s.isEmptyObject(e.linkedRel)) &&
            e.id ==
              r.unansweredQuestionIds[r.unansweredQuestionIds.length - 1]) ||
          t
            ? u() ||
              (n +=
                '<a href="javascript:void(0)" class="finish-question">æäº¤</a>')
            : (n +=
                '<a href="javascript:void(0)" class="next-page">ä¸ä¸é¢</a>'),
          n
        );
      },
      singleHtml: function (e) {
        var n = [],
          s = this,
          t = e.optionList;
        n.push('<dl class="single-question">'),
          n.push("<dt>" + s.isRequired + e.name + "</dt>"),
          n.push("<dd><ul" + s.thwartMark + ">");
        for (var i = 0, r = t.length; r > i; ++i) {
          var a = t[i];
          if (
            (n.push("<li>"),
            n.push("<label>"),
            n.push(
              '<input type="radio" class="unuse" value="' +
                a.sortId +
                '" name="answer_' +
                e.id +
                '">'
            ),
            n.push('<span class="surv-radio"></span>'),
            n.push('<span class="surv-text">' + a.name + "</span>"),
            n.push("</label>"),
            a.hasFillBlank)
          ) {
            var u = "";
            e.optionFillBlankIsRequired && (u = s.txtInfo),
              n.push(
                '<input class="fill-blank" type="text" maxlength="150" value="' +
                  u +
                  '" />'
              );
          }
          n.push("</li>");
        }
        return n.push("</ul></dd>"), n.push("</dl>"), n.join("");
      },
      multipleHtml: function (e) {
        var n = [],
          s = this,
          t = e.optionList;
        n.push('<dl class="multiple-question">'),
          n.push("<dt>" + s.isRequired + e.name + "[å¤éé¢]</dt>"),
          n.push("<dd><ul" + s.thwartMark + ">");
        for (var i = 0, r = t.length; r > i; ++i) {
          var a = t[i];
          if (
            (n.push("<li>"),
            n.push("<label>"),
            n.push(
              '<input type="checkbox" class="unuse" value="' +
                a.sortId +
                '" name="answer_' +
                e.id +
                '">'
            ),
            n.push('<span class="surv-checkbox"></span>'),
            n.push('<span class="surv-text">' + a.name + "</span>"),
            n.push("</label>"),
            a.hasFillBlank)
          ) {
            var u = "";
            e.optionFillBlankIsRequired && (u = s.txtInfo),
              n.push(
                '<input class="fill-blank" type="text" maxlength="150" value="' +
                  u +
                  '" />'
              );
          }
          n.push("</li>");
        }
        return n.push("</ul></dd>"), n.push("</dl>"), n.push(""), n.join("");
      },
      fillHtml: function (e) {
        var n = [],
          s = this;
        return (
          n.push('<dl class="fill-question">'),
          n.push("<dt>" + s.isRequired + e.name + "</dt>"),
          n.push("<dd>"),
          n.push(
            '<textarea maxlength="1000" resize="none" name="answer_' +
              e.id +
              '"></textarea>'
          ),
          n.push("</dd>"),
          n.push("</dl>"),
          n.join("")
        );
      },
      isEmptyObject: function (e) {
        for (var n in e) return !1;
        return !0;
      },
      isFinish: function () {},
    },
    u = function () {
      return "sys" === t("from") ? 1 : 0;
    },
    o = "",
    l = "",
    d = "",
    c = t("order_id") || "",
    p = i.getOS(),
    h = i.getBw(),
    f = i.getScreen();
  if ($.cookie("ppinf")) {
    var v = $.parseJSON(
      Base64.decode(window.unescape($.cookie("ppinf")).split("|")[3])
    );
    (o = v.uid.replace(/^u/g, "")), (l = v.userid);
  }
  var k = {
      quesitonAnswerVoList: [],
      choice: [],
      errorTip:
        "<span class='error-tip'>äº²ï¼æ­¤é¢ä¸ºå¿ç­é¢ï¼è¯·å¡«åæ­¤é¢</span>",
      fillBlankErrorTip:
        "<span class='error-tip'>æ­¤é¢è¿æªå®æï¼è¯·æ¨å¡«åå®å¨</span>",
      checkForm: function (e) {
        var n = this,
          s = r.currentQuestion,
          t = {},
          i = e.find("textarea"),
          o = e.find("input:checked"),
          l = !0;
        if (
          ((n.quesitonAnswerVoList = []),
          (n.choice = []),
          (t.chocieAnswerList = []),
          (t.fillBlankAnswerList = []),
          (t.questionId = s.id),
          $("span.error-tip").remove(),
          "FILL_BLANK" === s.type && $.trim(i.val())
            ? t.fillBlankAnswerList.push(i.val())
            : o.length &&
              o.each(function () {
                var e = $(this).parents("li").find(".fill-blank"),
                  s = $(this).val(),
                  i = "";
                e.length > 0 && (i = e.val());
                var r = {};
                (r[s] = i), t.chocieAnswerList.push(r), n.choice.push(s);
              }),
          n.quesitonAnswerVoList.push(t),
          u())
        )
          return !0;
        if (
          s.isRequired &&
          !t.chocieAnswerList.length &&
          !t.fillBlankAnswerList.length
        )
          return e.find(".question-list").append(n.errorTip), !1;
        for (var d = 0; d < o.length; d++) {
          var c = o.eq(d).parents("li").find(".fill-blank");
          if (s.optionFillBlankIsRequired && c.val() === a.txtInfo) {
            l = !1;
            break;
          }
        }
        return l
          ? !0
          : (e.find(".question-list").append(n.fillBlankErrorTip), !1);
      },
      postFrom: function (e) {
        var n = {
          ip: "",
          surveyId: e,
          userId: o,
          userName: l,
          phone: d,
          channel: "web",
          quesitonAnswerVoList: k.quesitonAnswerVoList,
          sessionId: $.cookie("session_id"),
          browserVersion: h,
          browserResolution: f,
          operatingSys: p,
          orderId: c,
        };
        $.ajax({
          url: "//www.zhe800.com/cn/n/survey/save_answer",
          type: "POST",
          dataType: "json",
          data: { survey: n },
          success: function () {},
          error: function () {},
        });
      },
    },
    I = {
      init: function (e, n, s) {
        if (!e) return !1;
        var t = this;
        "function" == typeof s && (t.finishCallback = s),
          "object" == typeof s && (t.opts = s);
        var i = e.questionVoList[0];
        r.injectQuestions(e.questionVoList),
          (r.currentQuestion = i),
          n.html('<div class="question-list"></div>'),
          n.find(".question-list").html(a.init(i)),
          n.on("click", ".next-page", function () {
            var s = k.checkForm(n);
            if (!s) return !1;
            !u() && k.postFrom(e.survey.id);
            var i = r.getNextQuestion(k.choice);
            "finish" === i || i === !1
              ? t.finishCallback && t.finishCallback()
              : n.find(".question-list").html(a.init(i));
          }),
          n.on("click", ".finish-question", function () {
            var s = k.checkForm(n);
            return s
              ? (k.postFrom(e.survey.id),
                void (t.finishCallback && t.finishCallback()))
              : !1;
          }),
          n.on("change", "input", function (e) {
            var n = $(e.target);
            if (n.is('input[type="checkbox"]'))
              if (n.attr("checked")) {
                n.siblings(".surv-checkbox").addClass("checked");
                var s = n.parent().siblings('input[type="text"]');
                s.length &&
                  (s.css("display", "block"),
                  n.parents("li").css("width", "100%"));
              } else
                n.siblings(".surv-checkbox").removeClass("checked"),
                  n.parents("li").css("width", "auto"),
                  n
                    .parent()
                    .siblings('input[type="text"]')
                    .css("display", "none");
            else if (n.is('input[type="radio"]')) {
              n.siblings(".surv-radio").addClass("checked");
              var s = n.parent().siblings('input[type="text"]');
              s.length &&
                (s.css("display", "block"),
                n.parents("li").css("width", "100%")),
                n
                  .parents("li")
                  .siblings("li")
                  .find(".surv-radio")
                  .removeClass("checked"),
                n
                  .parents("li")
                  .siblings("li")
                  .find('input[type="text"]')
                  .css("display", "none"),
                n.parents("li").siblings("li").css("width", "auto");
            }
          }),
          n.on("focus", ".fill-blank", function () {
            $(this).val() == a.txtInfo && $(this).val("");
          }),
          n.on("blur", ".fill-blank", function () {
            "" == $(this).val() && $(this).val(a.txtInfo);
          });
      },
    };
  s.exports = I;
});
/*_combo_cut*/ define("statics/zhe/components/pop/npspop", function (s, e, i) {
  var a = s("statics/zhe/components/survey/renderSurvey"),
    n = s("statics/zhe/common/js/stat/picstat"),
    o = {
      npsSurveyTpl: "",
      npspoprun: !1,
      isNewDialog: !1,
      npsDiaStat: function (s, e) {
        var i = "";
        if ($.cookie("ppinf"))
          try {
            var a = $.parseJSON(
              Base64.decode(unescape($.cookie("ppinf")).split("|")[3])
            );
            i = a.uid.replace(/^u/g, "");
          } catch (o) {
            !!window.console && console.log(o);
          }
        "" == i
          ? n.doStat(s, { clickkey: e })
          : n.doStat(s, { clickkey: e, userid: i });
      },
      getNpsScoreTpl: function () {
        if (!this.npsSurveyTpl) {
          var s = new $.Buffers();
          s.push('<div class="survey_dialog score_dialog">'),
            window.zheNps
              ? s.push(
                  '    <span class="title">æ¬¢è¿åå°æ800ï¼è¯éæ¨åä¸ªå°è°æ¥</span>'
                )
              : window.brandNps &&
                s.push(
                  '    <span class="title">æ¬¢è¿åå°åçå¢ï¼è¯éæ¨åä¸ªå°è°æ¥</span>'
                ),
            s.push('    <div class="survey">'),
            s.push('      <div class="dosurvey">'),
            window.zheNps
              ? s.push(
                  '        <em>*</em><span class="que">æ¨æ¿æææ800æ¨èç»å®¶äººæååï¼</span><i>10åè¡¨ç¤ºéå¸¸æ¿æ</i>'
                )
              : window.brandNps &&
                s.push(
                  '        <em>*</em><span class="que">æ¨æ¿ææåçå¢æ¨èç»å®¶äººæååï¼</span><i>10åè¡¨ç¤ºéå¸¸æ¿æ</i>'
                ),
            s.push(
              '          <span class="star"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><em class="npsgrades">0å</em></span>'
            ),
            s.push(
              '        <span class="que2">æ¨ç»åºè¿ä¸ªåæ°çä¸»è¦åå ï¼</span>'
            ),
            s.push(
              '        <input class="reason_txt" type="text" id="reason_txt" maxlength="150" placeholder="è¿ä¸ªç½ç«è¿ä¸éå¢"/>'
            ),
            s.push("      </div>"),
            s.push('      <span class="submit">æäº¤å¹¶å³é­</span>'),
            s.push('      <div class="errTip"></div>'),
            s.push("    </div>"),
            s.push("</div>"),
            (this.npsSurveyTpl = s.toString());
        }
        return this.npsSurveyTpl;
      },
      getNpsQuestionTpl: function () {
        if (!this.npsQuestionTpl) {
          var s = new $.Buffers();
          s.push('<div class="survey_dialog question_dialog">'),
            window.zheNps
              ? s.push(
                  '    <span class="title">æ¬¢è¿åå°æ800ï¼è¯éæ¨åä¸ªå°è°æ¥</span>'
                )
              : window.brandNps &&
                s.push(
                  '    <span class="title">æ¬¢è¿åå°åçå¢ï¼è¯éæ¨åä¸ªå°è°æ¥</span>'
                ),
            s.push('    <div class="survey">'),
            s.push('      <div class="dosurvey">'),
            s.push('          <div class="que">'),
            s.push("              <p>1. æ800ååçè¶ä½ä»·æ ¼æ¯æä¹æ¥çï¼</p>"),
            s.push(
              '              <label><input type="radio" name="ans1" class="ans1" value="æ800èªå¨æºè½æåäºå¨ç½æä½ä»·æ ¼çåå">æ800èªå¨æºè½æåäºå¨ç½æä½ä»·æ ¼çåå</label>'
            ),
            s.push(
              '              <label><input type="radio" name="ans1" class="ans1"  value="æ800ç¾ä½ç ä»·å¸è·åå®¶ä¸æ¬¾ä¸æ¬¾ç ä»·ç æ¥ç">æ800ç¾ä½ç ä»·å¸è·åå®¶ä¸æ¬¾ä¸æ¬¾ç ä»·ç æ¥ç</label>'
            ),
            s.push(
              '              <label><input type="radio" name="ans1" class="ans1" value="æ800åå·¥äººå·¥æç´¢æ¶éå¨ç½æä½ä»·æ ¼çåå">æ800åå·¥äººå·¥æç´¢æ¶éå¨ç½æä½ä»·æ ¼çåå</label>'
            ),
            s.push("          </div>"),
            s.push('          <div class="que">'),
            s.push("              <p>2. ä»¥ä¸åªæ¡ä¸æ¯æ800çè´¨éä¿è¯ç¯èï¼</p>"),
            s.push(
              '              <label><input type="radio" name="ans2" class="ans2" value="å®åååå®¶éåæä¾æ ·åè¿è¡å®¡æ ¸">å®åååå®¶éåæä¾æ ·åè¿è¡å®¡æ ¸</label>'
            ),
            s.push(
              '              <label><input type="radio" name="ans2" class="ans2" value="æ800åååå8å¤©æ çç±éæ¢è´§">æ800åååå8å¤©æ çç±éæ¢è´§</label>'
            ),
            s.push(
              '              <label><input type="radio" name="ans2" class="ans2" value="éå®è¿ç¨ä¸­æ800ä¼å¯¹ååè¿è¡æ½æ£">éå®è¿ç¨ä¸­æ800ä¼å¯¹ååè¿è¡æ½æ£</label>'
            ),
            s.push(
              '              <label><input type="radio" name="ans2" class="ans2" value="å®ååååç»ä¸è¿å¥æ800ä»åº">å®ååååç»ä¸è¿å¥æ800ä»åº</label>'
            ),
            s.push("          </div>"),
            s.push("      </div>"),
            s.push('      <span class="submit">æäº¤</span>'),
            s.push('      <div class="errTip"></div>'),
            s.push("    </div>"),
            s.push("</div>"),
            (this.npsQuestionTpl = s.toString());
        }
        return this.npsQuestionTpl;
      },
      OnLoad: function () {
        var s = this;
        s.willShow();
      },
      willShow: function (s) {
        function e(s, e, i) {
          var a,
            n,
            o = !1,
            t = !1,
            l = !1;
          return (
            s && i == s.num && ((a = Math.random()), a <= s.rate && (o = !0)),
            e && i == e.num && ((n = Math.random()), n <= e.rate && (t = !0)),
            o && t
              ? (l = a > n ? "scoreDialog" : "questionDialog")
              : o
              ? (l = "scoreDialog")
              : t && (l = "questionDialog"),
            l
          );
        }
        if (this.npspoprun) return void s.deferr.resolve();
        this.npspoprun = !0;
        var i,
          a,
          n = this,
          o = $.cookie("firstTime");
        " " != o
          ? ((i = new Date() - new Date(o.replace(/-/g, "/"))),
            (a = Math.floor(i / 864e5)))
          : (a = 0);
        var t = !1;
        window.zheNps || window.zheQuestionNps
          ? (t = e(window.zheNps, window.zheQuestionNps, a))
          : (window.brandNps || window.brandQuestionNps) &&
            (t = e(window.brandNps, window.brandQuestionNps, a));
        var l = $.cookie("session_id")
          ? $.cookie("session_id").replace(".", "_")
          : "";
        t
          ? $.ajax({
              url:
                "//www.zhe800.com/cn/ajax_api/check_nps_user?user_id=" +
                $.cookie("session_id"),
              dataType: "jsonp",
              type: "get",
              jsonp: "callback",
              jsonpCallback: "check_nps_user" + l,
              success: function (e) {
                0 === e.status ? n.whichShow(t, s, a) : s.deferr.resolve();
              },
              error: function (e) {
                s.deferr.resolve(), console && console.log(e);
              },
            })
          : s.deferr.resolve();
      },
      whichShow: function (s, e) {
        function i(s) {
          var i = new $.Buffers();
          i.push('<div class="survey_dialog question_dialog">'),
            i.push(
              '    <span class="title">æ¬¢è¿åå°æ800ï¼è¯éæ¨åä¸ªå°è°æ¥</span>'
            ),
            i.push('    <div class="survey">'),
            i.push("    </div>"),
            i.push("</div>"),
            $.Dialogs({
              id: "NPSsurvey_dialog",
              overlay: !0,
              auto: !1,
              msg: i.toString(),
              cls: "score",
              openfun: function () {
                n.scoreEvent(),
                  window.is_home_page &&
                    "1" === window.is_home_page &&
                    (n.npsDiaStat("click_v0", "nps_sy_tc_ll"),
                    n.npsDiaStat("open_dialog79385", "nps"));
              },
              closefun: function () {
                n.analysisClick();
              },
            }),
            n.ajaxPost({
              visited_at: $.cookie("__utma").split(".")[4],
              user_id: $.cookie("session_id"),
              type: 0,
              firsttime: $.cookie("firstTime"),
              lasttime: $.cookie("lastTime"),
              survey_id: t,
            }),
            a.init(s, $("#NPSsurvey_dialog .survey"), function () {
              $("#NPSsurvey_dialog, .dialog-overlay").remove();
            }),
            e.deferr.resolve({ isalert: !0 });
        }
        var n = this;
        if (s)
          if ("scoreDialog" === s && "1" === window.is_home_page) {
            if (((o.isNewDialog = !0), e.data.isalert))
              return void e.deferr.resolve({ isalert: !0 });
            var t = window.zheNps ? window.zheNps.survey_id : 0;
            $.ajax({
              url: "//status.tuanimg.com/n/survey/get_survey_v2?survey_id=" + t,
              dataType: "jsonp",
              type: "get",
              jsonp: "callback",
              jsonpCallback: "get_survey_v2_" + t,
              success: function (s) {
                s && s.questionVoList.length > 0 && "RUN" == s.survey.status
                  ? i(s)
                  : e.deferr.resolve();
              },
              error: function (s) {
                e.deferr.resolve(), console && console.log(s);
              },
            });
          } else if ("scoreDialog" === s) {
            if (((o.isNewDialog = !1), e.data.isalert))
              return void e.deferr.resolve({ isalert: !0 });
            $.Dialogs({
              id: "NPSsurvey_dialog",
              overlay: !0,
              auto: !1,
              msg: n.getNpsScoreTpl(),
              cls: "score",
              openfun: function () {
                n.scoreEvent(),
                  window.is_home_page &&
                    "1" === window.is_home_page &&
                    n.npsDiaStat("open_dialog79385", "nps");
              },
              closefun: function () {
                n.analysisClick();
              },
            }),
              e.deferr.resolve({ isalert: !0 });
          } else if ("questionDialog" === s) {
            if (((o.isNewDialog = !1), e.data.isalert))
              return void e.deferr.resolve({ isalert: !0 });
            $.Dialogs({
              id: "NPSsurvey_dialog",
              overlay: !0,
              auto: !1,
              msg: n.getNpsQuestionTpl(),
              cls: "question",
              openfun: function () {
                n.questionEvent(),
                  window.is_home_page &&
                    "1" === window.is_home_page &&
                    n.npsDiaStat("open_dialog79385", "nps");
              },
              closefun: function () {
                n.analysisClick();
              },
            }),
              e.deferr.resolve({ isalert: !0 });
          } else e.deferr.resolve();
        else e.deferr.resolve();
      },
      gradesShow: function () {
        var s = $(".star i.on").length,
          e = $(".score_dialog .npsgrades");
        e.html(s + "å"),
          s > 0 ? e.addClass("selected") : e.removeClass("selected");
      },
      scoreEvent: function () {
        var s = this,
          e = 0,
          i = $(".score_dialog"),
          a = i.find(".errTip");
        i.delegate(".star i", "mouseenter", function () {
          $(this).attr("class", "on").prevAll("i").attr("class", "on"),
            $(this).nextAll("i").removeClass("on"),
            s.gradesShow();
        })
          .delegate(".star i", "mouseleave", function () {
            $(".star i").removeClass("on"),
              (e = $(".star i.on").length),
              s.gradesShow(e);
          })
          .delegate(".star i", "click", function () {
            $(this).attr("class", "on").prevAll().attr("class", "on"),
              $(this).nextAll("i").removeClass("on"),
              i.undelegate(".star i", "mouseleave");
          })
          .delegate(".submit", "click", function () {
            if (i.data("submiting") !== !0) {
              if (((e = $(".star i.on").length), 0 == e))
                return void a.html("äº²ï¼è¯·éæ©æ¨èææ°~");
              i.data("submiting", !0);
              var n,
                o = $.cookie("__utma").split(".");
              window.zheNps ? (n = 0) : window.brandNps && (n = 1),
                s.ajaxPost({
                  visited_at: o[4],
                  score: e,
                  answer: $(".reason_txt").val(),
                  user_id: $.cookie("session_id"),
                  type: n,
                  firsttime: $.cookie("firstTime"),
                  lasttime: $.cookie("lastTime"),
                });
            }
          });
      },
      questionEvent: function () {
        var s = this,
          e = $(".question_dialog"),
          i = e.find(".ans1"),
          a = e.find(".ans2"),
          n = !1,
          o = !1,
          t = e.find(".errTip");
        e.delegate(".submit", "click", function () {
          if (e.data("submiting") !== !0) {
            for (var l = 0; l < i.length; l++)
              if (i[l].checked) {
                n = !0;
                break;
              }
            for (var r = 0; r < a.length; r++)
              if (a[r].checked) {
                o = !0;
                break;
              }
            if (!n || !o) return void t.html("äº²ï¼è¿æé®é¢æ²¡æåç­å~");
            e.data("submiting", !0);
            var p,
              u = "" != $.cookie("__utma") && $.cookie("__utma").split(".");
            window.zheNps ? (p = 2) : window.brandNps && (p = 3),
              s.ajaxPost({
                visited_at: u[4],
                answer_one: e.find(".ans1:checked").val(),
                answer: e.find(".ans2:checked").val(),
                user_id: $.cookie("session_id"),
                type: p,
                firsttime: $.cookie("firstTime"),
                lasttime: $.cookie("lastTime"),
              });
          }
        });
      },
      ajaxPost: function (s) {
        $.ajax({
          type: "GET",
          url: "//www.zhe800.com/cn/ajax_api/nps_survey",
          data: s,
          dataType: "JSONP",
          success: function () {
            o.isNewDialog || $("#NPSsurvey_dialog, .dialog-overlay").remove();
          },
          error: function () {
            $("#NPSsurvey_dialog .errTip").html("ç½ç»éè¯¯ï¼è¯·éè¯~");
          },
        });
      },
      analysisClick: function () {
        var s = this,
          e = $("#NPSsurvey_dialog");
        window.zheNps || window.zheQuestionNps
          ? e.find(".score_dialog").length || e.hasClass("score")
            ? s.npsDiaStat("click_v0", "score_nps_sy")
            : s.npsDiaStat("click_v0", "question_nps_sy")
          : (window.brandNps || window.brandQuestionNps) &&
            (e.find(".score_dialog").length
              ? s.npsDiaStat("click_v0", "score_nps_ppt")
              : s.npsDiaStat("click_v0", "question_nps_ppt"));
      },
    };
  i.exports = o;
});
/*_combo_cut*/ define("statics/zhe/components/pop/signpop", function (e, i, n) {
  var o = e("statics/zhe/common/js/stat/picstat"),
    s = e("statics/zhe/common/js/qdpost"),
    t = {
      sign_prompt: function (e) {
        var i = new $.Buffers();
        $.ajax({
          url: "//www.zhe800.com/ajax_api/get_signup_pop_up",
          type: "get",
          dataType: "jsonp",
          jsonpCallback: "get_signup_pop_up",
          success: function (n) {
            n && 1 == n.status && n.pop_up
              ? (i.append(
                  '<div class="tf_sigin_dialog"><ul><li class="new_user_page1">'
                ),
                i.append(
                  '<div class="img_container"><img style="cursor: pointer;" src="' +
                    n.pop_up +
                    '"/>'
                ),
                i.append('<span class="close_icon"></span></div>'),
                i.append("</li></ul></div>"),
                $.Dialogs({
                  overlay: !0,
                  cls: "tf_sigin",
                  auto: !1,
                  msg: i.toString(),
                  closefun: function () {},
                  openfun: function () {
                    $(".tf_sigin span.close_icon")
                      .css("top", n.top_distance + "px")
                      .css("right", n.right_distance + "px");
                  },
                }),
                $(".tf_sigin .close_icon").click(function (e) {
                  e.preventDefault(),
                    o.doStat("click_v0", { clickkey: "tanchuang_guanbi" }),
                    $.cookie("fifthnosigno", "1", {
                      path: "/",
                      expires: 5,
                      domain: ".zhe800.com",
                    }),
                    $(".tf_sigin span.close").trigger("click");
                }),
                $(".tf_sigin_dialog .new_user_page1 img").click(function () {
                  s.dosigin(),
                    $(".tf_sigin span.close").trigger("click"),
                    o.doStat("click_v0", { clickkey: "tanchuang_qiandao" });
                }),
                e.deferr.resolve({ isalert: !0 }))
              : e.deferr.resolve();
          },
          error: function () {
            e.deferr.resolve();
          },
        });
      },
      init: function (e) {
        return "" == $.cookie("ppinf")
          ? void e.deferr.resolve()
          : void PubSub.onece("justSignData", function (i) {
              var n = i.sign_info,
                o = /1/.test(n),
                s = window.is_home_page && 1 == window.is_home_page,
                a = !$.cookie("fifthnosigno"),
                c = !$("#dialog_tishi_qiandao").length,
                r = !$(".dialog-overlay").length,
                l = s && !o && a && c && r;
              if (l) {
                if (e.data.isalert)
                  return void e.deferr.resolve({ isalert: !0 });
                t.sign_prompt(e);
              } else e.deferr.resolve();
            });
      },
    },
    a = function (e) {
      return "" == $.cookie("ppinf")
        ? void e.deferr.resolve()
        : void PubSub.onece("justSignData", function (i) {
            var n = (new $.Buffers(), $.cookie("outoverlay")),
              o = i || {};
            $("#head_nav .tooltip .close").trigger("click"),
              setTimeout(function () {
                if (1 != o.is_double || n || 2 != o.status)
                  if (
                    2 == o.status ||
                    n ||
                    1 != o.is_double ||
                    0 != o.channels.web ||
                    0 != o.channels.mobile
                  )
                    if (
                      1 != o.is_double ||
                      0 != o.channels.web ||
                      1 != o.channels.mobile ||
                      2 == o.status ||
                      $.cookie("signed")
                    )
                      e.deferr.resolve();
                    else {
                      var i = $.cookie("qd"),
                        s = i.split("-"),
                        t = s[1] || 0,
                        a =
                          $("#signinid").length > 0
                            ? $("#signinid").attr("info").split("-")
                            : "1-2-3".split("-"),
                        c = a[0],
                        r = a[0],
                        l = a[0];
                      t > 0 &&
                        3 > t &&
                        ((c = a[t]), (r = a[t - 1]), (l = a[t])),
                        t >= 3 && ((c = a[2]), (r = a[2]), (l = a[2])),
                        e.deferr.resolve();
                    }
                  else e.deferr.resolve();
                else e.deferr.resolve();
              }, 200);
          });
    };
  n.exports = {
    fifthnosigno: function (e) {
      t.init(e);
    },
    doublesign: function (e) {
      a(e);
    },
  };
});
/*_combo_cut*/ define("statics/zhe/components/pop/cookiepop", function (
  e,
  o,
  i
) {
  e("statics/zhe/common/js/fingerprint");
  var n = e("statics/zhe/common/js/stat/picstat"),
    a = { userpoprun: !1 },
    r = function (e) {
      function o() {
        if ("" == $.cookie("ppinf"))
          return (
            $.cookie("newauser", "", {
              path: "/",
              expires: -1,
              domain: ".zhe800.com",
            }),
            $.cookie("appdialog2", "", {
              path: "/",
              expires: -1,
              domain: ".zhe800.com",
            }),
            void e.deferr.resolve()
          );
        var o = $.cookie("newauser"),
          i = $.cookie("appdialog2");
        if ("0" === o) s();
        else if ("1" === o && "" != i) r();
        else {
          var n = "//status.tuanimg.com/cn/n/user_transfer/authorize?user_id=",
            a = $.parseJSON(
              Base64.decode(window.unescape($.cookie("ppinf")).split("|")[3])
            ).uid.replace(/^u/g, "");
          $.ajax({
            url: n + a,
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "getUserAppStatus",
            success: function (e) {
              0 === e.code &&
                ($.cookie("appdialog2", e.popup_times, {
                  path: "/",
                  expires: 1,
                  domain: ".zhe800.com",
                }),
                2 === e.response
                  ? ($.cookie("newauser", "1", {
                      path: "/",
                      expires: 1,
                      domain: ".zhe800.com",
                    }),
                    r())
                  : ($.cookie("newauser", "0", {
                      path: "/",
                      expires: 1,
                      domain: ".zhe800.com",
                    }),
                    s()));
            },
            error: function () {
              e.deferr.resolve();
            },
          });
        }
      }
      function i() {
        if (
          $.cookie("app_guide_dialog") ||
          "/n/huodong/newappuser" == window.location.pathname ||
          $(".dialog-overlay").length
        )
          e.deferr.resolve();
        else {
          var o = new $.Buffers();
          if (
            (o.append(
              '<div class="new_user_pagenew_zz"><ul><li class="new_user_page1"><a target="_blank" class="try_it1" href="//www.zhe800.com/n/huodong/newappuser?utm_content=zhe800_banner_newusersignintc"><img src="//z5.tuanimg.com/v2/subject/app_guide/img/wh_five_one_lunbo_new.png"/></li></a></ul></div>'
            ),
            (o = o.toString()),
            e.data.isalert)
          )
            return void e.deferr.resolve({ isalert: !0 });
          $.Dialogs({
            id: "app_guide_dialog",
            cls: "app_guide_dialog",
            msg: o,
            auto: !1,
            closebtn: "a span.close,.close_now",
            overlay: !0,
            closefun: function () {
              $(".dialog-overlay").remove();
            },
            openfun: function () {
              $.cookie("app_guide_dialog", !0, {
                path: "/",
                expires: 1,
                domain: ".zhe800.com",
              }),
                $.cookie("appdialog2", parseInt($.cookie("appdialog2")) + 1, {
                  path: "/",
                  expires: 1,
                  domain: ".zhe800.com",
                }),
                $("#dialog_tishi_qiandao").remove(),
                $("#dialog_bdsj_bangding").remove(),
                $(".tf_sigin").remove(),
                window.is_home_page &&
                  "1" === window.is_home_page &&
                  n.doStat("open_dialog79385", { clickkey: "newappuser" });
              var e = $.parseJSON(
                Base64.decode(window.unescape($.cookie("ppinf")).split("|")[3])
              ).uid.replace(/^u/g, "");
              $.ajax({
                type: "POST",
                url: "//status.tuanimg.com/n/user_transfer/popup",
                data: { user_id: e },
              });
            },
          });
          var i = $("#app_guide_dialog"),
            a = i.find("ul li a");
          a.click(function () {
            i.find(".close").trigger("click");
          }),
            e.deferr.resolve({ isalert: !0 });
        }
      }
      function a() {
        $(".toolbar .right .phone-qrcode-down .dropdown-menu a").css(
          "background",
          "url(//z5.tuanimg.com/v2/core/img/qrcode_top_73663.png)"
        ),
          $(".side-panel .side-tab-qrcode .tab-tip").css(
            "background",
            "url(//z5.tuanimg.com/v2/core/img/sidePanel_73663.png)"
          ),
          $(".about li.w4 .bottom_qrcode_wrapper img").attr(
            "src",
            "//z5.tuanimg.com/v2/core/img/qrcode_bot_73663.png"
          );
      }
      function r() {
        parseInt($.cookie("appdialog2")) < 2 && i(), a();
      }
      function s() {
        e.deferr.resolve();
      }
      "" == $.cookie("ppinf") &&
        $.cookie("newauser", "", {
          path: "/",
          expires: -1,
          domain: ".zhe800.com",
        });
      try {
        o();
      } catch (c) {
        e.deferr.resolve(), !!console && console.log(c);
      }
    },
    s = function (e) {
      function o(o) {
        var i = new window.Fingerprint().get();
        $.ajax({
          url: "//status.tuanimg.com/cn/n/fingerprints",
          type: "get",
          dataType: "jsonp",
          data: { fp: i, t: "newcookie" },
          jsonpCallback: "newcookie",
          success: function (a) {
            var r = !$("#identify_window").length;
            if (0 == a.status && a.times < 1 && r) {
              var s = new $.Buffers(),
                c = new Image();
              if (e.data.isalert) return void e.deferr.resolve({ isalert: !0 });
              (c.onload = function () {
                s.append(
                  "" == o.href_url
                    ? '<div class="new_cookie_dialog"><ul><li><a ><img src="' +
                        o.image_url +
                        '" style="cursor:default"></li></a></ul></div>'
                    : '<div class="new_cookie_dialog"><ul><li><a target="' +
                        o.target +
                        '" href="' +
                        o.href_url +
                        '"><img src="' +
                        o.image_url +
                        '"></li></a></ul></div>'
                ),
                  $.Dialogs({
                    overlay: !0,
                    cls: "new_cookie_dialog",
                    id: "new_cookie_dialog",
                    auto: !1,
                    msg: s.toString(),
                    closefun: function () {},
                    openfun: function () {
                      n.doStat("open_dialog79385", { clickkey: "newcookie" }),
                        $.ajax({
                          url: "//www.zhe800.com/cn/n/fingerprints",
                          type: "post",
                          data: { fp: i, t: "newcookie" },
                        });
                    },
                  }),
                  "" !== o.href_url
                    ? $(
                        "#new_cookie_dialog span.close , .diginfo .new_cookie_dialog a"
                      ).click(function () {
                        $("#new_cookie_dialog").remove(),
                          $(".dialog-overlay").remove();
                      })
                    : $("#new_cookie_dialog span.close").click(function () {
                        $("#new_cookie_dialog").remove(),
                          $(".dialog-overlay").remove();
                      }),
                  e.deferr.resolve({ isalert: !0 });
              }),
                (c.onerror = function () {
                  e.deferr.resolve();
                }),
                (c.src = o.image_url);
            } else e.deferr.resolve();
          },
          error: function () {
            e.deferr.resolve();
          },
        });
      }
      if (a.userpoprun) return void e.deferr.resolve();
      a.userpoprun = !0;
      var i = window.is_home_page && 1 == window.is_home_page,
        r = "" == $.cookie("firstTime"),
        s = !$("#identify_window").length;
      i && s && r
        ? $.ajax({
            url: "//www.zhe800.com/api/get_new_cookie_ad",
            type: "get",
            dataType: "JSONP",
            jsonpCallback: "new_cookie",
            success: function (i) {
              var n = i,
                a = !$("#identify_window").length;
              a && i.image_url ? o(n) : e.deferr.resolve();
            },
            error: function (o) {
              e.deferr.resolve(), console && console.log(o);
            },
          })
        : e.deferr.resolve();
    };
  i.exports = { newcookiepop: r, newuserpop: s };
});
/*_combo_cut*/ define("statics/zhe/components/pop/muyingpop", function (
  e,
  t,
  i
) {
  var a = "",
    n = [
      function () {
        _gaq.push(["_trackPageview", "/PageAction/muying/mommy/not_yet"]);
      },
      function () {
        _gaq.push(["_trackPageview", "/PageAction/muying/mommy/soon"]);
      },
      function () {
        _gaq.push(["_trackPageview", "/PageAction/muying/mommy/already"]);
      },
    ],
    o = window.location.pathname,
    s =
      (/taomuying/.test(o) ? "muying_open_dialog" : "ertong_open_dialog",
      {
        init: function (e) {
          function t() {
            var t = $("#mytc").data("select"),
              a = $("#mytc").data("count"),
              n = parseInt($("#mytc").data("maxtime")),
              o = window.location.pathname,
              r = "",
              c = "";
            if (/taomuying/.test(o))
              (r = "muying_open_dialog"), (c = "muying_dialog_times");
            else {
              if (!/taoertong/.test(o)) return void e.deferr.resolve();
              (r = "ertong_open_dialog"), (c = "ertong_dialog_times");
            }
            var l = $("#new_user_pagenew_zz").length,
              p =
                "" === $.cookie("maternal") ||
                null === $.cookie("maternal") ||
                "0" === $.cookie("maternal").split(",")[0],
              d = "" == $.cookie(c) ? 0 : parseInt($.cookie(c)),
              u = n > d || -1 == n,
              h = parseInt($.cookie(r)) % a == 0 || 0 == $.cookie(r) || 0 == a;
            if (l || !p || 1 != t || !u || !h) return void e.deferr.resolve();
            var m = new Date();
            m.setDate(m.getDate() + 1),
              m.setHours(0),
              m.setMinutes(0),
              m.setSeconds(0),
              $.cookie(r, 0, { expires: m, path: "/", domain: ".zhe800.com" }),
              setTimeout(function () {
                if (e.data.isalert)
                  return void e.deferr.resolve({ isalert: !0 });
                s(), $(".picd .ybb").trigger("click");
                var t = new Date();
                i($(".ybb_year option"), t.getFullYear()),
                  i($(".ybb_month option"), t.getMonth() + 1);
                var a = 0,
                  n = $.cookie(c);
                "" !== n && null !== n && (a = parseInt(n)),
                  a++,
                  $.cookie(c, a, {
                    expires: 365,
                    path: "/",
                    domain: ".zhe800.com",
                  }),
                  e.deferr.resolve({ isalert: !0 });
              }, 0);
          }
          function i(e, t) {
            e.each(function () {
              $(this).val() == t && $(this).attr("selected", "selected");
            });
          }
          function o(e, t) {
            t = parseInt(t);
            var i = ["no", "boy", "girl"];
            e.each(function () {
              $(this).val() == i[t] && $(this).attr("checked", "checked");
            });
          }
          function s() {
            var e = 1e3 * $("#mytc").data("dtime"),
              t = new $.Buffers(),
              s = $(".seclevelinner .on");
            t.push("<p>å¡«åå®å®ä¿¡æ¯</p>"),
              t.push("<div class='picd'>"),
              t.push(
                "<div class='ybb' data-type='2'><span></span><h3>å·²æå®å®</h3></div>"
              ),
              t.push(
                "<div class='jybb' data-type='1'><span></span><h3>å³å°æå®å®</h3></div>"
              ),
              t.push(
                "<div class='nbb' data-type='0'><span></span><h3>è¿æ²¡æå®å®</h3></div>"
              ),
              t.push("</div>"),
              t.push("<div class='birthouter'>"),
              t.push(
                "<div class='ybb_birth hidden'><i>å®å®åºçäºï¼</i><select class='ybb_year'></select><select class='ybb_month'></select></div><div class='ybb_sex hidden'><i>å®å®çæ§å«ï¼</i><input type='radio' name='sex_chooice' class='sex_boy' value='boy'><span>çå­</span><input type='radio' name='sex_chooice' class='sex_girl' value='girl'><span>å¬ä¸»</span><em></em></div>"
              ),
              t.push(
                "<div class='jybb_birth hidden'><i>å®å¦é¢äº§æï¼</i><select class='jybb_year'></select><select class='jybb_month'></select></div><div class='jybb_sex hidden'><i>å®å®çæ§å«ï¼</i><input type='radio' name='sex_chooice' class='sex_boy' value='boy'><span>çå­</span><input type='radio' name='sex_chooice' class='sex_girl' value='girl'><span>å¬ä¸»</span><em></em></div>"
              ),
              t.push(
                "<div class='nbb_birth hidden'><i>æ²¡æå®å®ï¼æ¢å¤é»è®¤æ¨èï¼</i><em></em></div>"
              ),
              t.push(
                "<form id='myform' action='//www.zhe800.com/cn/maternal/custom' method='POST' target='_self' style='display:none'>"
              ),
              t.push(
                "<input type='hidden' name='type' value=" + s.attr("type") + ">"
              ),
              t.push(
                "<input type='hidden' name='data' value=" + s.attr("data") + ">"
              ),
              t.push(
                "<input type='hidden' name='sort' value=" +
                  $(".seclevelinner").attr("sort") +
                  ">"
              ),
              t.push("<input type='hidden' name='category'/>"),
              t.push("<input type='hidden' name='year'/>"),
              t.push("<input type='hidden' name='month'/>"),
              t.push("<input type='hidden' name='url_name' value='muying'/>"),
              t.push("<input type='hidden' name='sex'/>"),
              t.push("</form>"),
              t.push("</div>"),
              $.Dialogs.Dialog({
                id: "dialog_zdy",
                overlay: !0,
                cls: "diglog-wrapper",
                auto: !1,
                closebtn: ".birthouter em,.close",
                classAll: !0,
                openfun: function () {
                  var t = this.$d.find("span.close").hide();
                  t.hide(),
                    setTimeout(function () {
                      t.show();
                    }, e),
                    setTimeout(function () {
                      var e;
                      if (
                        "" === $.cookie("maternal") ||
                        null === $.cookie("maternal")
                      )
                        return void $(".picd .ybb").trigger("click");
                      switch (
                        ((e = $.cookie("maternal").split(",")), e[0].toString())
                      ) {
                        case "0":
                          $(".picd .nbb").trigger("click");
                          break;
                        case "1":
                          $(".picd .jybb").trigger("click"),
                            i($(".jybb_year option"), e[1]),
                            i($(".jybb_month option"), e[2]),
                            o($(".jybb_sex input"), e[4]);
                          break;
                        case "2":
                          $(".picd .ybb").trigger("click"),
                            i($(".ybb_year option"), e[1]),
                            i($(".ybb_month option"), e[2]),
                            o($(".ybb_sex input"), e[4]);
                          break;
                        default:
                          $(".picd .ybb").trigger("click"),
                            i($(".ybb_year option"), e[1]),
                            i($(".ybb_month option"), e[2]),
                            o($(".ybb_sex input"), e[4]);
                      }
                    }, 50);
                },
                closefun: function () {
                  if (((a = ""), "close" !== $(this).attr("class"))) {
                    var e,
                      t,
                      i,
                      o = $(".picd .selected"),
                      s = [o.data("type").toString(), "0", "0"];
                    "0" !== s[0] &&
                      ("1" === s[0]
                        ? ((e = $(".jybb_birth .jybb_year")),
                          (t = $(".jybb_birth .jybb_month")),
                          (i = $(".jybb_sex :radio")))
                        : ((e = $(".ybb_birth .ybb_year")),
                          (t = $(".ybb_birth .ybb_month")),
                          (i = $(".ybb_sex :radio"))),
                      (s[1] = e.find("option:selected").val()),
                      (s[2] = t.find("option:selected").val()));
                    var r = [],
                      c = new Date(s[1], parseInt(s[2]) - 1),
                      l = new Date();
                    "1" == s[0]
                      ? c.getTime() <
                          new Date(l.getFullYear(), l.getMonth()).getTime() &&
                        (s[0] = "2")
                      : "2" == s[0] &&
                        c.getTime() >
                          new Date(l.getFullYear(), l.getMonth()).getTime() &&
                        (s[0] = "1");
                    for (var p = 0, d = s.length; d > p; p++) r.push(s[p]);
                    if ("" != $.cookie("ppinf") && null != $.cookie("ppinf")) {
                      var u = $.parseJSON(
                          Base64.decode(
                            window.unescape($.cookie("ppinf")).split("|")[3]
                          )
                        ),
                        h = u.uid.replace(/^u/g, "");
                      r.push(h), (s[3] = h);
                    } else r.push(""), (s[3] = "");
                    var m = { no: 0, boy: 1, girl: 2, check: !1 };
                    if (i)
                      for (var y = 0, b = i.length; b > y; y++) {
                        var g = i.eq(y);
                        if ("checked" == g.attr("checked")) {
                          var v = g.attr("value");
                          r.push(m[v]), (m.check = !0), (s[4] = m[v]);
                        }
                      }
                    m.check || (r.push(0), (s[4] = 0));
                    var f;
                    (f =
                      "" !== $.cookie("maternal") &&
                      null !== $.cookie("maternal")
                        ? 1
                        : 0),
                      $.cookie("maternal", "0" === s[0] ? "" : r.join(","), {
                        path: "/",
                        expires: 30,
                        domain: ".zhe800.com",
                      });
                    try {
                      n[parseInt(s[0])] && n[parseInt(s[0])]();
                    } catch (_) {}
                    var k = "",
                      w = "";
                    "" === $.cookie("ppinf")
                      ? (w = "login=0")
                      : ((k = $.parseJSON(
                          Base64.decode(
                            window.unescape($.cookie("ppinf")).split("|")[3]
                          )
                        ).userid),
                        (w = "login=1&userid=" + k)),
                      (w =
                        w +
                        "&year=" +
                        s[1] +
                        "&month=" +
                        s[2] +
                        "&utma=" +
                        $.cookie("__utma") +
                        "&muying_version=" +
                        f),
                      $("#hivestat").attr(
                        "src",
                        "//analysis.tuanimg.com/v1/ju/index/img/my.gif?" +
                          encodeURIComponent(w)
                      ),
                      $("#myform input[name=sex]").attr("value", s[4]),
                      $("#myform input[name=year]").attr("value", s[1]),
                      $("#myform input[name=month]").attr("value", s[2]),
                      $("#myform input[name=category]").attr("value", s[0]),
                      $("#myform").submit(),
                      $.Dialogs({
                        id: "waitingbox",
                        overlay: !1,
                        auto: !1,
                        closebtn: ".close",
                        msg: "<div class='waitingbox'></div>",
                      });
                  }
                },
                msg: t.toString(),
              }),
              $(".picd div").click(function () {
                var e = $(this),
                  t = $("." + e.attr("class") + "_birth"),
                  i = $("." + e.attr("class") + "_sex");
                if (e.hasClass("selected")) return !1;
                if (
                  (t.removeClass("hidden"),
                  i.removeClass("hidden"),
                  "" !== a &&
                    (a.removeClass("selected"),
                    $("." + a.attr("class") + "_birth").addClass("hidden"),
                    $("." + a.attr("class") + "_sex").addClass("hidden")),
                  e.addClass("selected"),
                  (a = $(this)),
                  0 !== t.find("select").length)
                ) {
                  var n = t.attr("class");
                  if (0 === n.search("ybb_birth")) {
                    if (0 === $("select.ybb_year").find("option").length) {
                      var o = new $.Buffers(),
                        s = 2004;
                      for (s; 2016 >= s; s++)
                        o.push(
                          "<option value ='" + s + "'>" + s + "å¹´</option>"
                        );
                      for (
                        $("select.ybb_year").append(o.toString()),
                          o.empty(),
                          s = 1;
                        12 >= s;
                        s++
                      )
                        o.push(
                          "<option value ='" + s + "'>" + s + "æ</option>"
                        );
                      $("select.ybb_month").append(o.toString());
                    }
                  } else if (
                    -1 !== n.search("jybb_birth") &&
                    0 === $("select.jybb_year").find("option").length
                  ) {
                    var r = new $.Buffers(),
                      c = 2016,
                      l = c + 2;
                    for (c; l >= c; c++)
                      r.push(
                        "<option value ='" + c + "'>" + c + "å¹´</option>"
                      );
                    for (
                      $("select.jybb_year").append(r.toString()),
                        r.empty(),
                        c = 1;
                      12 >= c;
                      c++
                    )
                      r.push("<option value ='" + c + "'>" + c + "æ</option>");
                    $("select.jybb_month").append(r.toString());
                  }
                }
              });
          }
          var r = (r = window.location.pathname);
          return /taomuying/.test(r) || /taoertong/.test(r)
            ? ($(document.body).on("muyingpop", function () {
                s();
              }),
              $(document.body).delegate(
                ".userinfo .mmdz,.userinfo .modify",
                "click",
                function () {
                  s();
                }
              ),
              void t())
            : void e.deferr.resolve();
        },
      });
  i.exports = s;
});
/*_combo_cut*/ define("statics/zhe/components/pop/weichatpop", function (
  e,
  i,
  o
) {
  var s = {
    ispopup: !0,
    init: function (e) {
      if (e.data.isalert) return void e.deferr.resolve({ isalert: !0 });
      if (
        -1 !==
          window.location.href.indexOf("www.zhe800.com/ju_tag/taomuying") ||
        !$.cookie("ppinf")
      )
        return void e.deferr.resolve();
      var i = this,
        o = $.parseJSON(Base64.decode($.cookie("ppinf").split("|")[3])).sigw,
        s = $.parseJSON(Base64.decode($.cookie("ppinf").split("|")[3])).uid;
      6 === o
        ? PubSub.onece("user_status", function (a) {
            var n = $.cookie("w_dialog_threetimes");
            if (0 !== a.wechat || $.cookie("weixin_dialog"))
              1 === a.wechat ? i.publicDialogFun(e) : e.deferr.resolve();
            else {
              if (
                -1 !==
                window.location.href.indexOf(
                  "www.zhe800.com/hd/firsttask/wechat"
                )
              )
                return void e.deferr.resolve();
              n && n === s
                ? n == s
                  ? i.publicDialogFun(e)
                  : e.deferr.resolve()
                : $.get(
                    "//www.zhe800.com/cn/user_wx_notice_nums",
                    function (a) {
                      1 == a.status && a.msg < 3
                        ? i.opengzdialog(o, e)
                        : 1 == a.status && a.msg >= 3
                        ? ($.cookie("w_dialog_threetimes", s, {
                            path: "/",
                            expires: 30,
                            domain: ".zhe800.com",
                          }),
                          i.publicDialogFun(e))
                        : e.deferr.resolve();
                    },
                    "JSONP"
                  );
            }
          })
        : e.deferr.resolve();
    },
    publicDialogFun: function (e) {
      if (
        -1 !==
        window.location.href.indexOf("www.zhe800.com/hd/firsttask/public")
      )
        return void e.deferr.resolve();
      var i = this;
      $.ajax({
        url: "//qqpub.zhe800.com/qqpub/api/subscrible?source=1",
        type: "get",
        dataType: "jsonp",
        jsonpCallback: "qqpublic",
        success: function (o) {
          1 == o.status && 0 == o.qq_public_followed.followed
            ? i.publicDialogtimes(e)
            : e.deferr.resolve();
        },
      });
    },
    publicDialogtimes: function (e) {
      var i = this,
        o = $.cookie("g_dialog_threetimes"),
        s = $.parseJSON(Base64.decode($.cookie("ppinf").split("|")[3])).uid;
      o === s || $.cookie("public_number_dialog")
        ? e.deferr.resolve()
        : $.get(
            "//www.zhe800.com/cn/user_qq_notice_nums",
            function (o) {
              1 == o.status && o.msg < 3
                ? i.openpulicdialog(e)
                : 1 == o.status && o.msg >= 3
                ? ($.cookie("g_dialog_threetimes", s, {
                    path: "/",
                    expires: 30,
                    domain: ".zhe800.com",
                  }),
                  e.deferr.resolve())
                : e.deferr.resolve();
            },
            "JSONP"
          );
    },
    opengzdialog: function (e, i) {
      var o = this,
        s = new $.Buffers();
      if (5 === e)
        s.push("<div class='logsuginfo'>æ­åæ¨ï¼ç»éæåï¼</div>"),
          s.push("<div class='dlo_guanzhu'>"),
          s.push("<span class='weiboicon'></span>"),
          s.push("<h2>å³æ³¨æ800å®æ¹å¾®åï¼ç»§ç»­äº«åç¬å®¶ææ£</h2>"),
          s.push("<p>"),
          s.push(
            '<iframe id="guanzhupop" width="130" scrolling="no" height="24" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0" border="0" src="//widget.weibo.com/relationship/followbutton.php?%20width=136&amp;height=24&amp;uid=2004121323&amp;style=2&amp;btn=light&amp;dpc=1"></iframe>'
          ),
          s.push("</p>");
      else if (6 === e) {
        try {
          _gaq.push([
            "_trackPageview",
            "/PageAction/daohang/unionLogin/qqFollow",
          ]);
        } catch (a) {}
        s.push(
          "<div class='guanzhuinfo'><span class='weixinicon'></span><p>å³æ³¨æ800å®æ¹å¾®ä¿¡</p><span></span></div>"
        ),
          s.push("<div class='wxguanzhuDalg'>"),
          s.push("<div>"),
          s.push("  <span class='wxerweima'></span>"),
          s.push(
            "  <h2>å¾®ä¿¡âæ«ä¸æ«âå·¦ä¾§äºç»´ç ææ¥æ¾å¾®ä¿¡å·âT80099â</h2><h3>æ¯æ¥å¥½è´§éå°ä½ ç¼åå¦ï¼</h3>"
          ),
          s.push("</div>"),
          s.push("<div class='wxDalg_bot'>"),
          s.push(
            "  <a href='//www.zhe800.com/hd/firsttask/wechat?utm_content=tanchuang' target='_blank'></a>"
          ),
          s.push("  <p>éé¢å¤30ç§¯åï¼å½é±è±ï¼ï¼å¿«è¡å¨å§~</p>"),
          s.push("</div>");
      }
      s.push("</div>"),
        $.Dialogs({
          id: "dialog_guanzhu",
          cls: "weixin_guanzhu",
          overlay: !0,
          auto: !1,
          openfun: function () {
            setTimeout(function () {
              $("#dialog_guanzhu .close").show();
            }, 5e3),
              $(".wxDalg_bot a").click(function () {
                $("#dialog_guanzhu").remove(), $(".dialog-overlay").remove();
              }),
              $.cookie("weixin_dialog", "1", {
                path: "/",
                expires: 1,
                domain: ".zhe800.com",
              });
          },
          closefun: function () {},
          msg: s.toString(),
        }),
        i.deferr.resolve({ isalert: !0 });
      var n = !0;
      $("#guanzhupop").bind("load", function () {
        return (
          n || (window.qq_gaTrack && window.qq_gaTrack()),
          (n = !1),
          o.ispopup
            ? ((o.ispopup = !1), !1)
            : void $("#dialog_guanzhu .close").trigger("click")
        );
      });
    },
    openpulicdialog: function (e) {
      var i = new $.Buffers();
      i.push("<div class='public_guanzhu'>"),
        i.push("  <span class='guanzhu_public'></span>"),
        i.push("  <div class='guanzhu_code'>"),
        i.push(
          "      <a class='code_a' href='//www.zhe800.com/hd/firsttask/public?utm_content=tanchuang' target='_blank'></a>"
        ),
        i.push("  </div>"),
        i.push("  <p class='code_p'>éé¢å¤20ç§¯åï¼å½é±è±ï¼ï¼å¿«è¡å¨å§~</p>"),
        i.push("</div>"),
        $.Dialogs({
          id: "pu_guanzhu",
          cls: "public_guanzhu",
          overlay: !0,
          auto: !1,
          msg: i.toString(),
          openfun: function () {
            $(".code_a").click(function () {
              $("#pu_guanzhu .close").trigger("click");
            }),
              $.cookie("public_number_dialog", "1", {
                path: "/",
                expires: 1,
                domain: ".zhe800.com",
              });
          },
          closefun: function () {},
        }),
        e.deferr.resolve({ isalert: !0 });
    },
  };
  o.exports = s;
});
/*_combo_cut*/ define("statics/zhe/components/pop/index", function (n, t, o) {
  var e = n("statics/zhe/components/pop/identpop"),
    i = n("statics/zhe/components/pop/npspop"),
    s = n("statics/zhe/components/pop/signpop"),
    p =
      (n("statics/zhe/components/pop/cookiepop"),
      n("statics/zhe/components/pop/muyingpop")),
    c = n("statics/zhe/components/pop/weichatpop"),
    r = { isalert: !1 },
    a = function (n) {
      var t = 0,
        o = n,
        e = n.length;
      return {
        next: function () {
          var n;
          return this.hasNext() ? ((n = o[t]), (t += 1), n) : null;
        },
        hasNext: function () {
          return e > t;
        },
        current: function () {
          return o[t];
        },
      };
    },
    u = function (n) {
      var t = $.Deferred(),
        o = function (t) {
          var o = function () {
            var o = n.next();
            o({ deferr: t, data: r });
          };
          return o(), t.promise();
        },
        e = o(t);
      $.when(e)
        .done(function (t) {
          t && t.isalert && (r.isalert = !0), n.hasNext() && u(n);
        })
        .fail(function (n) {
          console && console.log(n);
        });
    },
    f = [
      function (n) {
        e.pop(n);
      },
      function (n) {
        s.doublesign(n);
      },
      function (n) {
        c.init(n);
      },
      function (n) {
        p.init(n);
      },
      function (n) {
        i.willShow(n);
      },
    ],
    h = [
      function (n) {
        e.pop(n);
      },
      function (n) {
        p.init(n);
      },
    ];
  o.exports = {
    init: function (n) {
      if (
        (n && n.resetpop && (r.isalert = !1),
        (tasks = window.dacu160308 ? h : f),
        0 != tasks.length)
      )
        try {
          u(a(tasks));
        } catch (t) {
          console.log(t);
        }
    },
  };
});
/*_combo_cut*/ define("statics/zhe/components/zxt/index", function (t) {
  var e = t("statics/zhe/common/js/retinaImg"),
    a = {
      ready: function () {
        var t = this;
        PubSub.add("dealLoaded", function () {
          t.init();
        });
      },
      init: function () {
        function t(t, e) {
          try {
            var a = window.location.pathname,
              n = a.split(t),
              i = "";
            return (
              e && (i = e),
              n.length > 1 && n[n.length - 1].length > 1
                ? (i + n[n.length - 1])
                    .replace(new RegExp("^/"), "")
                    .split("/page/")[0]
                : e
                ? i
                : t.replace(new RegExp("^/"), "")
            );
          } catch (s) {
            return "";
          }
        }
        return $("#zxt_zheid").length < 1
          ? !1
          : ($("#zxt_zheid").data("created", "yes"),
            void (
              $("#zxt_zheid").find(".hot_ads").length > 0 ||
              ((window.isNewCus = window.isNewCus || 0),
              $.ajax({
                url:
                  "//status.tuanimg.com/n/hotSale/get_html?isNewCus=" +
                  window.isNewCus,
                type: "GET",
                dataType: "JSONP",
                jsonp: "callback",
                jsonpCallback: "getBottomHotSale",
                success: function (a) {
                  return 1 !== a.status
                    ? !1
                    : void (
                        $("#zxt_zheid").find(".hot_ads").length > 0 ||
                        ($("#zxt_zheid")
                          .removeClass()
                          .addClass("area hot_sale")
                          .append(
                            '<div class="hot_ads bottom" need-exposure="li" exposure-source-type="11" exposure-pos-val="bottom_' +
                              t("ju_tag") +
                              '" >' +
                              a.html +
                              "</div>"
                          ),
                        $("#zxt_zheid li.pic img").each(function () {
                          var t = e($(this).attr("src_n"));
                          $(this).attr("src", t);
                        }),
                        "" == $("#zxt_zheid").html() &&
                          $("#zxt_zheid").css({ "margin-bottom": "0" }))
                      );
                },
              }))
            ));
      },
    };
  PubSub.add("ready", a.ready, a);
});
/*_combo_cut*/ define("statics/zhe/common/js/feedbackPopup", function () {
  var e = {
    init: function () {
      var e = this;
      $("body").delegate(".feedback_popup_handler", "click", function (a) {
        var t = $(this),
          n = [],
          i = "è¯·è¾å¥æ¨çæè§æèå»ºè®®ï¼å¿å¡«ï¼",
          s = "ææºå·ç ï¼å¿å¡«ï¼";
        return (
          n.push("<h4>æè§åé¦</h4>"),
          n.push("<ul>"),
          n.push(
            '    <li class="hd"><p>æ800çè¯æ¬¢è¿æ¨çåé¦ï¼ä»¥æ´å¥½çä¸ºæ¨æå¡ï¼</p></li>'
          ),
          n.push('    <li class=""><span>åé¦ç±»å</span>'),
          n.push(
            '        <select><option value="-1" selected="true">è¯·éæ©</option><option value="0">æè§å»ºè®®</option><option value="2">æè¯</option><option value="1">å®åé®é¢</option><option  value="3">è´¦å·/ç§¯å/é¡µé¢å¼å¸¸</option><option  value="4">ååè¯¦æå¨è¯¢</option><option  value="5">æ800æ¥å</option><option  value="6">åå¡åä½</option></select>'
          ),
          n.push("    </li>"),
          n.push(
            '    <li class="exch_cont txt"><textarea class="gint">' +
              i +
              "</textarea></li>"
          ),
          n.push(
            '    <li class="exch_cont tip_normal"><p>ä¸ºäºæ¹ä¾¿æä»¬è¿ä¸æ­¥è·æ¨èç³»ï¼è¯·å¡«åå¦ä¸ä¿¡æ¯</p></li>'
          ),
          n.push(
            '    <li class="exch_cont inp"><span><i>*</i>&nbsp;<input type="text" class="gint qqinp" value="' +
              s +
              '" /></span></li>'
          ),
          n.push(
            '    <li class="exch_cont tip_consult"><p><span>è¯·å¨è¯¢</span><a target="_blank" href="//help.zhe800.com/" class="feedback_kf">å¨çº¿å®¢æ &gt;&gt;</a></p></li>'
          ),
          n.push(
            '    <li class="exch_cont tip_consultin"><p>è¯·æ¨å¨ååè¯¦æé¡µå¨è¯¢<span>åå®¶å¨çº¿å®¢æ</span>ï¼ä¾å¦ä¸å¾ï¼</p></li>'
          ),
          n.push(
            '    <li class="exch_cont tip_consultin_img"><div></div></li>'
          ),
          n.push(
            '    <li class="exch_cont tip_sign"><p>æ¥åæ800æ´»å¨è¯·å°<a href="https://zhaoshang.zhe800.com/" target="_blank">åå®¶ä¸­å¿&gt;&gt;</a></p></li>'
          ),
          n.push(
            '    <li class="exch_cont tip_business"><p>è¯·å°æ¨ç<span>å§å</span>ã<span>èç³»æ¹å¼</span>ã<span>å¬å¸åç§°</span>ä»¥å<span>åä½æ¹å¼</span>ç¼è¾é®ä»¶è³<a href="mailTo:contact@tuan800.com"><span>contact@tuan800.com</span></a>é®ç®±ï¼ä¼æç¸å³äººåä¸æ¨è¿è¡èç³»ã</p></li>'
          ),
          n.push(
            '    <li class="token hidden"><strong>éªè¯ç ï¼</strong><input type="text" class="gint" autocomplete="off" name="captcha"> <img class="captchaImg" src=""> <a href="#">æ¢ä¸æ¢</a></li>'
          ),
          n.push("</ul>"),
          n.push('<div class="submit">'),
          n.push(
            '    <i class="i_btn i_btn1"><a href="javascript:void(0);">ç¡®è®¤æäº¤</a></i>'
          ),
          n.push("</div>"),
          t.parent().addClass("on"),
          $.Dialogs({
            overlay: !1,
            cls: "feedbackpanel closeblock",
            auto: !1,
            msg: n.join(""),
            closefun: function () {
              t.parent().removeClass("on");
            },
            openfun: function () {
              $(".feedbackpanel textarea").bind({
                focus: function () {
                  $(this).val() == i && $(this).val(""),
                    $(".feedbackpanel .token").hasClass("hidden") &&
                      (e.getVericode(),
                      $(".feedbackpanel .token").removeClass("hidden"));
                },
                blur: function () {
                  "" == $(this).val() && $(this).val(i);
                },
              }),
                $(".feedbackpanel .qqinp").bind({
                  focus: function () {
                    $(this).val() == s && $(this).val(""),
                      $(".feedbackpanel .token").hasClass("hidden") &&
                        (e.getVericode(),
                        $(".feedbackpanel .token").removeClass("hidden"));
                  },
                  blur: function () {
                    "" == $(this).val() && $(this).val(s);
                  },
                }),
                $(".feedbackpanel .token a").click(function () {
                  return e.getVericode(), !1;
                }),
                $(".feedbackpanel .submit .i_btn1").click(function () {
                  e.formart(i, s);
                }),
                $(".feedbackpanel select").change(function () {
                  var e = $(this).parents("ul"),
                    a = $(this).val();
                  switch (
                    (e.find("li.exch_cont").hide(),
                    e.next("div.submit").hide(),
                    e.find("li.erroe").remove(),
                    a)
                  ) {
                    case "-1":
                      e.next("div.submit").hide(),
                        e.find("li.token").addClass("hidden");
                      break;
                    case "0":
                      (i = "è¯·è¾å¥æ¨çæè§æèå»ºè®®ï¼å¿å¡«ï¼"),
                        (s = "ææºå·ç ï¼å¿å¡«ï¼"),
                        e.find("li.txt textarea").val(i),
                        e.find("li.inp input").val(s),
                        e.find("li.txt").show(),
                        e.find("li.tip_normal").show(),
                        e.find("li.inp").show(),
                        e.next("div.submit").show();
                      break;
                    case "2":
                      (i = "è¯·è¾å¥æ¨çæè¯äºä»¶ï¼å¿å¡«ï¼"),
                        (s = "ææºå·ç ï¼å¿å¡«ï¼"),
                        e.find("li.txt textarea").val(i),
                        e.find("li.inp input").val(s),
                        e.find("li.txt").show(),
                        e.find("li.tip_normal").show(),
                        e.find("li.inp").show(),
                        e
                          .find("li.tip_consult span")
                          .text("å¦äºæç´§æ¥ï¼å¯å¨è¯¢"),
                        e.find("li.tip_consult").show(),
                        e.next("div.submit").show();
                      break;
                    case "1":
                      e.find("li.tip_consult span").text("è¯·å¨è¯¢"),
                        e.find("li.tip_consult").show(),
                        e.find("li.token").addClass("hidden");
                      break;
                    case "3":
                      e.find("li.tip_consult span").text("è¯·å¨è¯¢"),
                        e.find("li.tip_consult").show(),
                        e.find("li.token").addClass("hidden");
                      break;
                    case "4":
                      e.find("li.tip_consultin").show(),
                        e.find("li.tip_consultin_img").show(),
                        e.find("li.token").addClass("hidden");
                      break;
                    case "5":
                      e.find("li.tip_sign").show(),
                        e.find("li.token").addClass("hidden");
                      break;
                    case "6":
                      e.find("li.tip_business").show(),
                        e.find("li.token").addClass("hidden");
                  }
                });
            },
          }),
          a.preventDefault(),
          !1
        );
      });
    },
    formart: function (e, a) {
      function t() {
        var e = [],
          a = navigator.platform,
          t = $(window).width(),
          n = $(window).height(),
          i = "",
          s = navigator.userAgent.toLowerCase();
        return (
          /msie/.test(s)
            ? /msie\s10\.0/.test(s)
              ? (i = "IE10")
              : /msie\s9\.0/.test(s)
              ? (i = "IE9")
              : /msie\s8\.0/.test(s)
              ? (i = "IE8")
              : /msie\s7\.0/.test(s)
              ? (i = "IE7")
              : /msie\s6\.0/.test(s) && (i = "IE6")
            : (i = /trident\/7\.0/.test(s)
                ? "IE11"
                : /chrome/.test(s) && !/edge/.test(s)
                ? "Chrome"
                : /firefox/.test(s)
                ? "Firefox"
                : /edge/.test(s)
                ? "Win10 EDGE"
                : /safari/.test(s)
                ? "Safari"
                : /opera/.test(s)
                ? "Opera"
                : "æªç¥æµè§å¨"),
          e.push(
            "ç³»ç»ä¿¡æ¯",
            "æµè§å¨ï¼" + i + "ï¼",
            "æµè§å¨å°ºå¯¸ï¼" + t + "*" + n + "ï¼",
            "æä½ç³»ç»ï¼" + a + "ï¼"
          ),
          "ã" + e.join(" ") + "ã"
        );
      }
      var n = $(".feedbackpanel select").val();
      $(".feedbackpanel ul .erroe").remove();
      var i = this,
        s = $(".feedbackpanel ul")
          .append('<li class="erroe" />')
          .find(".erroe")
          .css("color", "#e20000"),
        l = /^1{1}\d{10}$/;
      if (0 == n) {
        if (
          "" == $(".feedbackpanel textarea").val() ||
          $(".feedbackpanel textarea").val() == e
        )
          return s.html("è¯·å¡«åæè§æèå»ºè®®"), !1;
        if (
          "" == $(".feedbackpanel .qqinp").val() ||
          $(".feedbackpanel .qqinp").val() == a
        )
          return s.html("è¯·å¡«åææºå·ç "), !1;
        if (!l.test($(".feedbackpanel .qqinp").val()))
          return s.html("ææºå·ç è¾å¥ä¸æ­£ç¡®"), !1;
      } else if (2 == n) {
        if (
          "" == $(".feedbackpanel textarea").val() ||
          $(".feedbackpanel textarea").val() == e
        )
          return s.html("è¯·å¡«åæè¯ä¿¡æ¯"), !1;
        if (
          "" == $(".feedbackpanel .qqinp").val() ||
          $(".feedbackpanel .qqinp").val() == a
        )
          return s.html("è¯·å¡«åææºå·ç "), !1;
        if (!l.test($(".feedbackpanel .qqinp").val()))
          return s.html("ææºå·ç è¾å¥ä¸æ­£ç¡®"), !1;
      }
      return "" == $(".feedbackpanel .token input").val()
        ? (s.html("è¯·è¾å¥éªè¯ç "), !1)
        : void $.get(
            "//www.zhe800.com/cn/remit/feedback",
            {
              "feedback[type]": $(".feedbackpanel select").val(),
              "feedback[content]": $(".feedbackpanel textarea").val() + t(),
              "feedback[contact]": $(".feedbackpanel .qqinp").val(),
              captcha: $(".feedbackpanel .token input").val(),
              keywords: i.keyword,
            },
            function (e) {
              $(".feedbackpanel").css("minHeight", 0),
                0 == e.status
                  ? ($(".feedbackpanel .diginfo ul").html(
                      '<li class="suc"><p><i class="gfail1"></i>æäº¤æåï¼</p>äº²ï¼æè°¢æ¨æä¾çå®è´µæè§ï¼</li>'
                    ),
                    $(".feedbackpanel .submit .i_btn1")
                      .html('<a href="javascript:void(0);">å³é­</a>')
                      .unbind()
                      .click(function () {
                        $(".feedbackpanel .close").trigger("click");
                      }))
                  : (e.messages.contact && s.html(e.messages.contact),
                    e.messages.qq && s.html(e.messages.qq),
                    e.messages.email && s.html(e.messages.email),
                    e.messages.content && s.html(e.messages.content),
                    e.messages.captcha && s.html(e.messages.captcha),
                    i.getVericode());
            },
            "JSONP"
          );
    },
    getVericode: function () {
      var e = this;
      $.ajax({
        url: "//acode.tuanimg.com/captcha/get_image?jsonp=1",
        type: "GET",
        dataType: "jsonp",
        jsonpCallback: "getVericode",
        success: function (a) {
          $(".feedbackpanel .token img").attr("src", a.url),
            (e.keyword = a.keywords);
        },
      });
    },
  };
  $(function () {
    e.init();
  });
});
/*_combo_cut*/ define("statics/zhe/common/js/yugaoPop", function () {
  var e = {
    init: function () {
      var e = this,
        s = $(window).height();
      $(".yu_intro .info a").click(function (t) {
        t.preventDefault(), $(".yugao").length || e.create($(this));
        var a = $(".yugao");
        a.css("top", (s - a.height()) / 2),
          "undefined" == typeof document.body.style.maxHeight &&
            a.css(
              "top",
              document.documentElement.scrollTop + (s - a.height()) / 2
            ),
          $(".deal").removeClass("poped");
      }),
        $(".dealbox").delegate(".saoma,.openAlert", "click", function () {
          if (
            !(
              ($(this).hasClass("openAlert") &&
                0 !== $(this).parents(".deal").find(".zt2").length &&
                0 == $(this).parents(".deal").hasClass("brand-index")) ||
              $(this).hasClass("note-tips")
            )
          ) {
            $(".yugao").length || e.create();
            var t = $(this).parents(".deal"),
              a = $(this).closest(".zt2,.zt3,.zt5"),
              n = $(".yugao"),
              o = t.find("img").data("original"),
              i = (t.find("h3 b").html() || "") + t.find("h3 a").html(),
              d = t.find("h4 em").text(),
              p = t.data("begin_time");
            e.toAlert(n),
              a.hasClass("zt3") &&
                (n.find(".goods .time").hide(), n.find(".ewm .price").hide()),
              n.tab({
                nav: ".tabs",
                pane: ".pop-con .tab-pane",
                delegater: "span",
                cls: "on",
                evt: "click",
              }),
              n.find(".toCode").click(function () {
                e.toAlert(n);
              }),
              a.length &&
                (a.hasClass("poped")
                  ? n.show()
                  : ($(".deal .con").removeClass("poped"),
                    a.addClass("poped"),
                    n.find(".goods img").attr("src", o),
                    n.find(".goods .tt").html(i),
                    n
                      .find(".ewm .qrcode")
                      .attr("src", a.closest(".deal").data("qrcode")),
                    n.find(".price span").html(d),
                    n.find(".goods .time span").html(p),
                    n.show(),
                    n.css("top", (s - n.height()) / 2),
                    "undefined" == typeof document.body.style.maxHeight &&
                      n.css(
                        "top",
                        document.documentElement.scrollTop +
                          (s - n.height()) / 2
                      )));
          }
        });
    },
    create: function () {
      var e = $(".yugao");
      if (!e.length) {
        var s = new $.Buffers();
        s.push('<div class="yugao"> '),
          s.push('<div class="pop-box">'),
          s.push('      <a class="icon-close close"></a>'),
          s.push('      <div class="pop-con">'),
          s.push(
            '        <h2 class="tit">ç¨æ800å®¢æ·ç«¯æ«æååäºç»´ç ï¼å¼æ¢å5åéå¾æéï¼</h2>'
          ),
          s.push('        <div class="how-code tab-pane on" >'),
          s.push("             <p>1ãé¦åä½ è¦æä¸ä¸ªææº</p>"),
          s.push(
            "             <p>2ãå®è£æ800å®¢æ·ç«¯ï¼ ç¨å¾®ä¿¡ãææºQQç­çæ«ç åè½ï¼å°æåå¤´å¯¹</p>"
          ),
          s.push("             <p>åååäºç»´ç è¿è¡æ«æå³å¯ä¸è½½</p>"),
          s.push(
            "             <p>3ãç¹å»å®¢æ·ç«¯çä¸ªäººä¸­å¿ <span>&rarr;</span> ç¹å»å³ä¸è§æ«ç é® <span>&rarr;</span> å°æåå¤´å¯¹å</p>"
          ),
          s.push("             <p>ååäºç»´ç è¿è¡æ«æ</p>"),
          s.push('             <div class="g-img"></div>'),
          s.push("        </div>"),
          s.push("      </div>"),
          s.push("    </div>"),
          s.push("  </div>"),
          (e = $(s.toString()).appendTo($("body")));
      }
      e.delegate(".close", "click", function (s) {
        s.preventDefault(), e.hide();
      });
    },
    toAlert: function () {
      var e = $(".yugao");
      return e
        ? (e.find(".tabs span").removeClass("on"),
          e.find(".tab-pane").removeClass("on"),
          e.find(".tabs .alert").addClass("on"),
          void e.find(".alert-con").addClass("on"))
        : !1;
    },
  };
  PubSub.add("ready", function () {
    e.init();
  });
});
/*_combo_cut*/ define("statics/zhe/common/js/layoutlogic", function (F, u, a) {
  function t() {
    PubSub.add("ready", function () {
      ($.tao_dingyue = function () {
        var F = $("#subscribe_email"),
          u = F.val();
        if ("" == u) return alert("è¯·è¾å¥æ¨çEmailå°åã"), !1;
        var a = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
        return a.test(u)
          ? /\yahoo.cn+$/.test(u) || /\yahoo.com.cn+$/.test(u)
            ? (alert("éèå®æ¹å³é­é®ç®±ä¸å¡ï¼è¯·æ¢å¶å®é®ç®±"), !1)
            : ($.ajax({
                url: "//www.zhe800.com/email_subscribe",
                type: "get",
                data: { email: u },
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "getDingyue_email_information",
                success: function (F) {
                  $.Dialogs({
                    id: "dialog_dingyue_bottom",
                    overlay: !1,
                    auto: !0,
                    msg: F.text,
                  });
                },
              }),
              !0)
          : (alert("é®ä»¶å°åæ ¼å¼éè¯¯ï¼è¯·æ£æ¥ã"), !1);
      }),
        $(".friendly_links .links").switchable({
          type: "slider",
          direction: "top",
          contentEle: ".scroll_link",
          mainItem: "li",
          mainSelectedClass: "",
          speed: 1e3,
          autoPlay: !0,
          stayTime: 5e3,
        }),
        i();
    });
  }
  function i() {
    if (
      window &&
      window.devicePixelRatio > 1 &&
      ($(".daiyanren_link a").html(
        "<img class='r_img' width='68 ' height='48' src='//z6.tuanimg.com/v3/src/img/common/toolbar_xiena_two.jpg'>"
      ),
      $(".header .l a span.l_img").html(
        "<img width='198' height='45' src='//z6.tuanimg.com/v3/src/img/common/logo_zhe800_two.png'>"
      ),
      $(".links .head_three_icon").html(
        "<img src='//z6.tuanimg.com/v3/src/img/common/toolbar_kuan_two.jpg' class='widescreen' width='402' height = '63'><img src='//z6.tuanimg.com/v3/src/img/common/toolbar_zai_two.jpg'  class='narrowscreen' width='376' height = '63'> "
      ),
      $(".tab_dacu").length)
    ) {
      var F = $(".tab_img").attr("src") || "",
        u = $(".tab_hover_img").attr("src") || "",
        a = e(F),
        t = e(u);
      $(".tab_img").attr("src", a), $(".tab_hover_img").attr("src", t);
    }
  }
  var e = F("statics/zhe/common/js/retinaImg");
  t(), (a.exports = { init: t });
});
/*_combo_cut*/ define("statics/zhe/common/js/fireReady", function (e, n, i) {
  function o() {
    $(document).ready(function () {
      PubSub.fire("ready");
    });
  }
  o(), (i.exports = { ready: o });
});
/*_combo_cut*/ define("statics/zhe/common/js/dealHistoryList", function (e) {
  var t = e("statics/zhe/common/js/cdStorage"),
    i = new t(
      window.location.protocol + "//www.zhe800.com",
      "/n/dealHistoryListAgent.html"
    ),
    s = window.setUnixTime ? new Date(window.setUnixTime) : new Date(),
    a = s.getFullYear(),
    n = s.getMonth(),
    o = s.getDate(),
    l = new Date(a, n, o, 0, 0, 0).getTime(),
    r = l - 2592e6;
  Array.prototype.indexOf ||
    (Array.prototype.indexOf = function (e) {
      var t = this.length,
        i = -1;
      if (!e) return i;
      for (var s = 0; t > s; s++)
        if (this[s] === e) {
          i = s;
          break;
        }
      return i;
    }),
    Array.prototype.lastIndexOf ||
      (Array.prototype.lastIndexOf = function (e) {
        var t = this.length,
          i = -1;
        if (!e) return i;
        for (var s = t - 1; s >= 0; s--)
          if (this[s] === e) {
            i = s;
            break;
          }
        return i;
      });
  var c = {
    setData: function (e) {
      var t = this;
      e &&
        (window.localStorage &&
          t.getData(function (t) {
            var s = t.ids.indexOf(e);
            -1 != s && (t.ids.splice(s, 1), t.times.splice(s, 1)),
              t.ids.push(e),
              t.times.push(l),
              i.setValue(
                "deal_history_list",
                JSON.stringify(t),
                function () {}
              );
          }),
        $.cookie("ppinf") && t.setSqlData(e));
    },
    deleteData: function (e, t) {
      var s = this;
      "[object Array]" === Object.prototype.toString.call(e) &&
        (window.localStorage &&
          s.getData(function (t) {
            for (var s = 0; s < e.length; s++) {
              var a = t.ids.indexOf(Number(e[s].split("|")[0]));
              -1 != a && (t.ids.splice(a, 1), t.times.splice(a, 1));
            }
            i.setValue("deal_history_list", JSON.stringify(t), function () {});
          }),
        $.cookie("ppinf") && s.deleteSqlData(e, t));
    },
    getData: function (e) {
      i.getValue("deal_history_list", function (t, i) {
        var s = JSON.parse(decodeURIComponent(i)) || { ids: [], times: [] };
        s.times.slice(0, s.ids.length);
        var a;
        $.each(s.times, function (e, t) {
          r >= t && (a = e);
        }),
          s.ids.splice(0, a + 1),
          s.times.splice(0, a + 1),
          (s.ids = s.ids.slice(-500)),
          (s.times = s.times.slice(-500));
        try {
          e(s);
        } catch (n) {
          console.info(n);
        }
      });
    },
    getRenderData: function (e) {
      var t = this;
      t.getSqlData(e);
    },
    getSqlData: function (e, t) {
      $.ajax({
        type: "get",
        url: "//zapi.zhe800.com/cn/zhe800_n_api/ft/list",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "dealHistoryList",
        success: function (i) {
          if (1 == i.status)
            if (t) {
              for (var s = {}, a = 0; a < i.results.list.length; a++) {
                var n = Number(i.results.list[a].deal_id),
                  o = Number(i.results.list[a].time);
                -1 != t.ids.indexOf(n) &&
                  Number(t.times[t.ids.indexOf(n)]) < o &&
                  (t.times[t.ids.indexOf(n)] = o);
              }
              $.each(t.times, function (e, i) {
                s[i] = t.ids[e];
              }),
                t.times.sort(function (e, t) {
                  return e - t;
                }),
                (t.ids = []),
                $.each(t.times, function (e, i) {
                  t.ids.push(s[i]);
                }),
                (t.ids = t.ids.slice(-500)),
                (t.times = t.times.slice(-500));
            } else {
              t = { ids: [], times: [] };
              for (var a = 0; a < i.results.list.length; a++) {
                var n = Number(i.results.list[a].deal_id),
                  o = Number(i.results.list[a].time);
                if ((t.ids.push(n), t.times.push(o), 500 == t.ids.length))
                  break;
              }
            }
          else t = t ? t : {};
          try {
            e(t);
          } catch (l) {
            console.info(l);
          }
        },
      });
    },
    setSqlData: function (e) {
      $.ajax({
        type: "get",
        url: "//zapi.zhe800.com/cn/zhe800_n_api/ft/add/" + e,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "addHistoryDeal",
        success: function () {},
      });
    },
    deleteSqlData: function (e, t) {
      $.ajax({
        type: "get",
        url: "//zapi.zhe800.com/cn/zhe800_n_api/ft/remove",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "deleteHistoryDeal",
        data: { deal_list: e.join(",") },
        success: function (e) {
          try {
            t(e);
          } catch (i) {
            console.info(i);
          }
        },
      });
    },
  };
  return (
    $("body").delegate(
      'a[href^="//out.zhe800.com/ju/deal/"], a[href^="//www.zhe800.com/ju_deal/"], a[href^="//shop.zhe800.com/products/"]',
      "click.history",
      function () {
        var e = $(this),
          t = $(this).attr("href"),
          i = "";
        -1 != t.indexOf("//out.zhe800.com/ju/deal/")
          ? (i = Number(
              t.split("?")[0].replace(/\/\//, "").split("/")[3].split("_")[1]
            ))
          : -1 != t.indexOf("//www.zhe800.com/ju_deal/")
          ? (i = Number(
              t.split("?")[0].replace(/\/\//, "").split("/")[2].split("_")[1]
            ))
          : -1 != t.indexOf("//shop.zhe800.com/products/") &&
            (i =
              e.parents(".deal").length && e.parents(".deal").attr("data-id")
                ? Number(e.parents(".deal").attr("data-id"))
                : ""),
          i && c.setData(i);
      }
    ),
    c
  );
});
/*_combo_cut*/ define("statics/zhe/common/js/ju/fixedJunav", function (s, t) {
  function e() {
    {
      var s = this,
        t = window.screen.width;
      1025 > t ? 0 : $("#junav").height();
    }
    if (!($("#junav").length <= 0)) {
      s._scrollHeight = $("#junav").offset().top;
      var e = $("#seclevel"),
        i = $("#junav"),
        a = $("#zw"),
        n = function () {
          var t = $(this).scrollTop();
          $.support.fixedPosition
            ? t > s._scrollHeight
              ? (e.removeClass("secjunav").addClass("secjunav_fix"),
                i.length && e.addClass("secjunav_fix_top"),
                i.addClass("junav_fix"))
              : (a.remove(),
                e.removeClass("secjunav_fix").addClass("secjunav"),
                i.removeClass("junav_fix"))
            : t > s._scrollHeight
            ? e.css({
                position: "absolute",
                left: 0,
                top: t + 20 + "px",
                width: "100%",
                "z-index": 9999,
                "border-bottom": "4px solid #BCBCBC",
              })
            : e.removeAttr("style");
        };
      $(window).scroll(function () {
        window.lazyExecute("junav", n);
      }),
        $("#junav .search .smt").click(function () {
          o.doStat("click_v0", { clickkey: "searchbutton_top" });
        });
    }
  }
  var o = s("statics/zhe/common/js/stat/picstat");
  e(), (t.init = e);
});
/*_combo_cut*/ define("statics/zhe/common/js/ju/visitIndexCookie", function (
  i,
  e
) {
  var o = {
    init: function () {
      var i = $("body").data("version");
      void 0 !== i &&
        "" !== i &&
        ($.cookie("unix_time", Math.round(new Date().getTime() / 1e3), {
          expires: 7,
          path: "/",
          domain: "zhe800.com",
        }),
        $.cookie("ju_version", $("body").data("version"), {
          expires: 7,
          path: "/",
          domain: "zhe800.com",
        }));
    },
  };
  PubSub.add("ready", function () {
    o.init();
  }),
    (e.init = o.init);
});
/*_combo_cut*/ define("statics/zhe/common/js/ju/rewrite_ju_rv", function (
  i,
  e
) {
  function o() {
    if (
      !/search\.zhe800|\/n\/similar\//.test(
        window.location.host + window.location.pathname
      )
    ) {
      var i = $.cookie("ju_version_new"),
        e = i.split("-")[1];
      if (i && 0 == e) {
        var o = $.cookie("ju_rv");
        o &&
          "null" !== o &&
          $.cookie("ju_rv", "null", {
            expires: new Date(Date.now() + 288e5),
            path: "/",
            domain: "zhe800.com",
          });
      }
    }
  }
  o(), (e.init = o);
});
/*_combo_cut*/ define("statics/zhe/common/js/stat/userId", function () {
  !(function (e, n) {
    var e = e,
      t =
        (e.document,
        function (t, o, i) {
          if (0 == arguments.length) {
            try {
              if (0 == navigator.cookieEnabled) return !1;
            } catch (c) {
              e.console && console.info(c);
            }
            return !0;
          }
          if (arguments.length > 1 && "[object Object]" !== String(o)) {
            if (
              ((null === o || o === n) && (i.expires = -1),
              "number" == typeof i.expires)
            ) {
              var r = i.expires,
                a = (i.expires = new Date());
              a.setDate(a.getDate() + r);
            }
            return (
              (o = String(o)),
              (document.cookie = [
                encodeURIComponent(t),
                "=",
                i.raw ? o : encodeURIComponent(o),
                i.expires ? "; expires=" + i.expires.toUTCString() : "",
                i.path ? "; path=" + i.path : "",
                i.domain ? "; domain=" + i.domain : "",
                i.secure ? "; secure" : "",
              ].join(""))
            );
          }
          i = o || {};
          var s,
            u = i.raw
              ? function (e) {
                  return e;
                }
              : decodeURIComponent;
          return (s = new RegExp(
            "(?:^|; )" + encodeURIComponent(t) + "=([^;]*)"
          ).exec(document.cookie))
            ? u(s[1])
            : "";
        }),
      o = function () {
        return Math.round(2147483647 * Math.random());
      },
      i = function () {
        return Math.round(new Date().getTime() / 1e3);
      };
    "" === t("session_id") &&
      t("session_id", o() + "." + i(), {
        expires: 730,
        domain: ".zhe800.com",
        path: "/",
      });
  })(window),
    jQuery(function (e) {
      var n =
          document.head ||
          document.getElementsByTagName("head")[0] ||
          document.documentElement,
        t = "//t.zhe800.com/cpc/userkey?callback=stopCpsBadClick",
        o = document.createElement("script");
      (o.src = t),
        (o.async = "async"),
        n.insertBefore(o, n.firstChild),
        (window.stopCpsBadClick = function (n) {
          n &&
            e.cookie("zhe_click", n, {
              path: "/",
              expires: 1,
              domain: ".zhe800.com",
            });
        });
    });
});
/*_combo_cut*/ define("statics/zhe/common/js/stat/panda", function (e) {
  function t(e, t) {
    var n = arguments.callee,
      o = window.setDealIDs,
      t = t || null;
    o
      ? "function" == typeof e
        ? e.call(t)
        : ""
      : setTimeout(function () {
          n(e, t);
        }, 100);
  }
  var n =
      (e("statics/zhe/common/js/stat/userId"),
      e("statics/zhe/common/js/stat/picstat")),
    o = {
      STATURL: "//analysis.tuanimg.com/panda/panda_v0.gif?",
      OnLoad: function () {
        this.addUtmsourceToCookie(),
          this.addScreenParameter(),
          this.userInfos(),
          window.devicePixelRatio &&
            window.devicePixelRatio > 1 &&
            n.doStat("click_v0", { clickkey: "retina" });
      },
      addUtmsourceToCookie: function () {
        var e,
          t = location.search.substring(1),
          n = "",
          o = document.referrer,
          i = o.substring(o.indexOf("//") + 2),
          r = i.substring(0, i.indexOf("/"));
        if (!(o.indexOf("zhe800.com") > -1)) {
          if (!(t.indexOf("utm_source") > -1))
            return "" == o
              ? void $.cookie("utm_csr", "direct", {
                  expires: 30,
                  path: "/",
                  domain: "zhe800.com",
                })
              : void $.cookie("utm_csr", r, {
                  expires: 30,
                  path: "/",
                  domain: "zhe800.com",
                });
          e = t.split("&");
          for (var a = 0, c = e.length; c > a; a++)
            if (e[a].indexOf("utm_source") > -1)
              return (
                (n = e[a].split("=")[1]),
                void $.cookie("utm_csr", n, {
                  expires: 30,
                  path: "/",
                  domain: "zhe800.com",
                })
              );
        }
      },
      clickStat: function () {
        var e = this;
        $("body").delegate("*[panda-click]", "click", function () {
          $("body").on("click", "a", function (t) {
            window.pandaStat._cn++;
            var n = new Date().getTime();
            e.createParam(this, {
              click: $(this).attr("panda-click"),
              objurl: $this.attr("href"),
              pp: t.pageX + "*" + t.pageY,
              cn: window.pandaStat._cn,
              ct:
                0 === window.pandaStat.ct
                  ? 0
                  : Math.floor((n - window.pandaStat.ct) / 1e3),
            }),
              (window.pandaStat.ct = n);
          });
        });
      },
      exposureStat: function () {
        var e = this;
        $(window).bind("scroll.panda", function () {
          $("*[panda-exposure]").each(function () {
            var t = $(this),
              n = t.outerHeight(),
              o = t.outerWidth(),
              i = t.offset(),
              r = $(window),
              a = r.scrollTop() + window.screen.availHeight - i.top,
              c = r.scrollLeft() + window.screen.availWidth - i.left;
            a >= n &&
              c >= o &&
              (e.createParam(this, { exposure: t.attr("panda-exposure") }),
              t.removeAttr("panda-exposure"));
          });
        });
      },
      loadStat: function () {
        var e = {
          ref: window.location.href,
          embed: window.top === window.self ? 0 : 1,
          type: "access",
          r: $.cookie("session_id"),
          v: "1.0",
          mainKey: window.mainKey,
          level: window.pageLevel,
          vp: window.panda_vp,
          t: this.formatTime(),
          uv: $.cookie("uv"),
        };
        this.doStat(e);
      },
      createParam: function (e, t) {
        var t = $.extend(
          {
            title: searchTitle($(e)),
            px: window.screen.width + "*" + window.screen.height,
            xp: searchXp($(e), e.nodeName),
            area: searchArea($(e)),
            panda: searchPanda($(e)),
            ver: "1.0",
            v: window.mainKey,
            uv: $.cookie("uv"),
            pt: Math.floor((time - window.pandaStat.starttime) / 1e3),
            t: formatTime(),
            r: $.cookie("session_id"),
          },
          t
        );
        this.doStat(t);
      },
      searchTitle: function (e) {
        var t = "";
        return 0 === e.children().length
          ? e.html()
          : (e.children().each(function (e, n) {
              void 0 !== $(n).attr("title") && (t = $(n).attr("title"));
            }),
            t);
      },
      searchXp: function (e, t) {
        var n,
          o = [];
        return (
          e.parents("*:not(body,html)").each(function (e, t) {
            (n = $(t).siblings().length + 1),
              o.push(t.nodeName.toLowerCase() + (1 === n ? "" : n));
          }),
          (n = e.siblings().length + 1),
          o.push(t.toLowerCase() + (1 === n ? "" : n)),
          (n = e.find("img").length),
          0 !== n && o.push("img" + (1 === n ? "" : n)),
          o.join("-")
        );
      },
      searchArea: function (e) {
        var t = e.closest("div[panda]");
        return 0 !== t.length ? t.attr("panda") : "";
      },
      searchPanda: function (e) {
        var t = [];
        return (
          e.parents("[panda]").each(function (e, n) {
            var o = $(n).attr("panda");
            o && t.push(o);
          }),
          t.reverse().join("-")
        );
      },
      formatTime: function (e) {
        var t = e ? e : new Date();
        return [
          t.getFullYear(),
          t.getMonth() + 1,
          t.getDate(),
          t.getHours(),
          t.getMinutes(),
          t.getSeconds(),
        ].join("-");
      },
      doStat: function (e) {
        var t = document.createElement("img"),
          n = [];
        for (var o in e) e.hasOwnProperty(o) && n.push(o + "=" + e[o]);
        (t.src = this.STATURL + n.join("&")),
          (t.onload = function () {
            $(this).remove();
          }),
          document.body.appendChild(t);
      },
      userInfos: function () {
        var e,
          t,
          n,
          o,
          i,
          r,
          a,
          c,
          d = window.location;
        (e = d.host),
          (t = new Date()),
          (n = d.pathname + d.search),
          (o = document.referrer),
          (i = navigator.userAgent),
          (r = document.cookie),
          (a = $.cookie("ju_version")),
          (c = {
            $http_host: e,
            $time_local: t,
            $request: n,
            $http_referer: o,
            $http_user_agent: i,
            $http_cookie: r,
            $ju_version_header: a,
          }),
          this.doStat(c);
      },
      addScreenParameter: function () {
        function e() {
          (this.normWidth1 = 1280), (this.normWidth2 = 1580);
        }
        (e.prototype.init = function () {
          var e = this,
            t = e.screenStatus(),
            n = $.cookie("screenversion").split(",");
          if (
            (0 == t
              ? n.splice(0, 1, 0)
              : 1 == t
              ? n.splice(0, 1, 1)
              : n.splice(0, 1, 2),
            window.is_home_page && "1" == window.is_home_page)
          ) {
            var o = e.indexVersion();
            n.splice(1, 1, o);
          }
          (n = n.join(",")), e.setScreenVersion(n);
        }),
          (e.prototype.indexVersion = function () {
            return 1 == window.is_versionB
              ? 1
              : 0 == window.is_versionB
              ? 0
              : void 0;
          }),
          (e.prototype.screenStatus = function () {
            var e = this,
              t = 0;
            return $.support.leadingWhitespace
              ? (e.currenScreenWidth() >= e.normWidth1 &&
                e.currenScreenWidth() <= e.normWidth2
                  ? (t = 1)
                  : e.currenScreenWidth() >= e.normWidth2 && (t = 2),
                t)
              : t;
          }),
          (e.prototype.currenScreenWidth = function () {
            var e = this;
            return window.document.documentElement.clientHeight <
              window.document.documentElement.offsetHeight
              ? $(window).outerWidth()
                ? $(window).outerWidth() + e.currentScrollWidth()
                : window.document.body.offsetWidth + e.currentScrollWidth()
              : $(window).outerWidth() || window.document.body.offsetWidth;
          }),
          (e.prototype.currentScrollWidth = function () {
            var e,
              t,
              n = document.createElement("p"),
              o = {
                width: "100px",
                height: "100px",
                position: "absolute",
                bottom: "0",
                overflowY: "scroll",
              };
            for (e in o) n.style[e] = o[e];
            return (
              document.body.appendChild(n),
              (t = n.offsetWidth - n.clientWidth),
              $(n).remove(),
              t
            );
          }),
          (e.prototype.setScreenVersion = function (e) {
            var t = new Date(),
              n = t.getFullYear(),
              o = t.getMonth(),
              i = t.getDate();
            $.cookie("screenversion", e, {
              expires: new Date(n, o, i + 1, 0),
              path: "/",
              domain: ".zhe800.com",
            });
          });
        var t = new e();
        t.init();
      },
    };
  PubSub.add("ready", function () {
    window.indexFirstPage ? t(o.OnLoad, o) : o.OnLoad();
  });
});
/*_combo_cut*/ define("statics/zhe/common/js/stat/exposure_new", function () {
  !(function (e) {
    function t(e, t) {
      if (t) return "ad";
      var n = e.data("type");
      return e.hasClass("brandstyle") ||
        e.hasClass("brand-index") ||
        "brand" == n
        ? "brand"
        : e.hasClass("taotbaoStore")
        ? "cpcstore"
        : 2 == n || 3 == n
        ? "tao"
        : 1 == n
        ? "zhe"
        : "banner" == n
        ? "ad"
        : "";
    }
    function n(e) {
      for (var t = 1; e.prev().length > 0; ) (e = e.prev()), t++;
      return t;
    }
    var r = {
        paths: e.location.pathname,
        parse: function (e) {
          var t = document.createElement("a");
          return (t.href = e), t.hostname + t.pathname;
        },
        has: function (e) {
          return this.paths.indexOf(e) > 0 ? !0 : !1;
        },
        hasByIndex: function (e) {
          var t = this.paths.split("/");
          return t[e] && "" != t[e] ? !0 : !1;
        },
        getIndex: function (e) {
          for (var t = this.paths.split("/"), n = 0; n < t.length - 1; n++)
            if (t[n] == e) return n;
        },
        getUrlParam: function (e) {
          var t = this.paths.split("/");
          return t[e] && "" != t[e] ? t[e] : null;
        },
        getNextParam: function (e, t, n) {
          var r = n ? n : this.paths,
            a = r.split(e),
            o = "";
          return (
            t && (o = t),
            a.length > 1 && a[a.length - 1].length > 1
              ? (o + a[a.length - 1])
                  .replace(new RegExp("^/"), "")
                  .split("/page/")[0]
              : t
              ? o
              : e
          );
        },
        getQueryParams: function () {
          for (
            var t,
              n = e.location.search.split("+").join(" "),
              r = {},
              a = /[?&]?([^=]+)=([^&]*)/g;
            (t = a.exec(n));

          )
            r[decodeURIComponent(t[1])] = decodeURIComponent(t[2]);
          return r;
        },
        getPage: function () {
          if (r.getQueryParams().page && !e.isNaN(r.getQueryParams().page))
            return r.getQueryParams().page;
          var t = r.getIndex("page");
          return !t || e.isNaN(t) || e.isNaN(r.getUrlParam(t - 0 + 1))
            ? 1
            : r.getUrlParam(t - 0 + 1);
        },
      },
      a = {
        needCheckModule: {},
        tickCheckModule: {},
        urlRule: {
          page: { type: "home" },
          ju_tag: {
            type: "jutag",
            val: function () {
              return r.getNextParam("ju_tag");
            },
          },
          "ju_type/baoyou": {
            type: "baoyo",
            val: function () {
              return r.getNextParam("ju_type/baoyou", "baoyou");
            },
          },
          "ju_type/fengding": {
            type: "fengd",
            val: function () {
              return r.getNextParam("ju_type/fengding", "fengding");
            },
          },
          jingxuanyugao: {
            type: "yugao",
            val: function () {
              return r.getNextParam("jingxuanyugao", "jingxuanyugao");
            },
          },
          search: {
            type: "searc",
            val: function () {
              return r.getQueryParams().keyword;
            },
          },
          "n/meirishijian": { type: "ten" },
          "n/youpinhui": {
            type: "youpi",
            val: function () {
              return r.getNextParam("n/youpinhui", "all_youpinhui");
            },
          },
          "n/youpinchubei": {
            type: "yphcb",
            val: function () {
              return r.getNextParam("n/youpinchubei", "deal_youpinchubei");
            },
          },
          "n/zhutiguan": {
            type: "theme",
            val: function () {
              return r.getNextParam("n/zhutiguan", "zhutiguan");
            },
          },
          "n/liangfantuan": {
            type: "liang",
            val: function () {
              return "deal_liangfantuan_jinrituijian";
            },
          },
          "n/daiyanrenzhuanti": {
            type: "daiya",
            val: function () {
              return "daiyanrenzhuanti";
            },
          },
          "n/xianshiqiangPC": { type: "qiang" },
          "n/xianshiqiang": { type: "flash" },
          "n/xinshoubimai": { type: "newbu" },
          tmall: { type: "tmall" },
          zhuanchang: {
            type: "topic",
            val: function () {
              return r.getNextParam("zhuanchang", "zhuanchang");
            },
          },
          pindao: {
            type: "topic",
            val: function () {
              return r.getNextParam("pindao", "pindao");
            },
          },
          zhuanti: {
            type: "topic",
            val: function () {
              return r.getNextParam("zhuanti", "zhuanti");
            },
          },
          huodong: {
            type: "topic",
            val: function () {
              return r.getNextParam("huodong", "huodong");
            },
          },
          p: { type: "seo" },
          word: { type: "seo" },
          "n/word": { type: "seo" },
          ju_deal: { type: "seo" },
          "profile/my_favorites/all": { type: "myfav" },
          "profile/my_favorites/oos": { type: "myfav" },
          "profile/my_favorites/has_begin": { type: "myfav" },
          "profile/my_favorites/not_begin": { type: "myfav" },
          "n/hd/APP0yuan": { type: "0yuan" },
          "n/xienayimai": {
            type: "xienayimai",
            val: function () {
              return "xienayimai";
            },
          },
          "n/pcxindacu": { type: "dacu" },
          "n/qudaoyinxin_lingquan": { type: "qdyhq" },
          "cn/history/list": {
            type: "track",
            val: function () {
              return "track";
            },
          },
          "n/similar": {
            type: "zxs",
            val: function () {
              return "similar_zxs";
            },
          },
          "n/cpcstore": {
            type: "cpcst",
            val: function () {
              return "cpcstore/" + r.getNextParam("n/cpcstore");
            },
          },
          "cn/list/taojingxuan/yugao": {
            type: "tjxyg",
            val: function () {
              return "deal";
            },
          },
          "cn/list/taojingxuan": {
            type: "taojx",
            val: function () {
              var e = "/cn/list/taojingxuan/ju_tag",
                t = r.getNextParam(e),
                n = t === e ? "deal" : "deal_ju_tag/" + t;
              return n;
            },
          },
        },
        brand: {
          host: "brand.zhe800.com",
          get: function () {
            return r.getUrlParam(1)
              ? { type: "bdlst", val: r.getUrlParam(1) }
              : { type: "brand", val: "brand" };
          },
        },
        guang: {
          host: "guang.zhe800.com",
          get: function () {
            return r.getUrlParam(1)
              ? { type: "guang", val: "/" + r.getUrlParam(1) }
              : { type: "guang", val: "guang" };
          },
        },
        last: {
          host: "last.zhe800.com",
          get: function () {
            return { type: "last", val: "last" };
          },
        },
        news: {
          host: "new.zhe800.com",
          get: function () {
            return {
              type: "today",
              val: r.getUrlParam(2)
                ? "jinrishangxin/" + r.getUrlParam(2)
                : "jinrishangxin",
            };
          },
        },
        top: {
          host: "top.zhe800.com",
          get: function () {
            return {
              type: "top",
              val: r.getUrlParam(1) ? "top/" + r.getUrlParam(1) : "top",
            };
          },
        },
      },
      o = function (t) {
        (this.delay = (t && t.delay) || 120),
          (this.urlPrefix = ""),
          (this.urlData = {
            picSrc: "//analysis.tuanimg.com/bgl_v2.gif",
            locationUrl: e.location.href,
            pos: (function () {
              function t(e, t, n) {
                return n.replace(new RegExp(e, "g"), t);
              }
              if (a.brand.host == e.location.host) return a.brand.get();
              if (a.guang.host == e.location.host) return a.guang.get();
              if (a.last.host == e.location.host) return a.last.get();
              if (a.news.host == e.location.host) return a.news.get();
              if (a.top.host == e.location.host) return a.top.get();
              var n = e.location.pathname;
              if (
                t("/", "", n).length <= 1 &&
                "www.zhe800.com" == e.location.host
              )
                return { type: "home", val: "" };
              var r = "";
              for (var o in a.urlRule)
                if (a.urlRule.hasOwnProperty(o) && n.indexOf(o) > 0) {
                  var i = n.split("/");
                  if (n.split(o)[0].length <= 1 && i[1] == o.split("/")[0])
                    return (
                      a.urlRule[o].val && (r = a.urlRule[o].val()),
                      "shop.zhe800.com" == e.location.host
                        ? { type: "shop", val: r }
                        : { type: a.urlRule[o].type, val: r }
                    );
                }
              return "shop.zhe800.com" == e.location.host
                ? { type: "shop", val: "" }
                : { type: "", val: "" };
            })(),
            getTao800UserId: function () {
              var e,
                t = "";
              return "" == $.cookie("ppinf")
                ? t
                : ($.cookie("ppinf") &&
                    ((e =
                      $.parseJSON(
                        Base64.decode($.cookie("ppinf").split("|")[3])
                      ) || {}),
                    (t = e.uid || "")),
                  t);
            },
          }),
          this.init();
      };
    (o.single = null),
      (o.prototype.parseHelper = r),
      (o.getSingleton = function () {
        return o.single || (o.single = new o()), o.single;
      }),
      (o.prototype.generateUUID = function () {
        var e = new Date().getTime(),
          t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
            t
          ) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            return (
              (e = Math.floor(e / 16)),
              ("x" == t ? n : (3 & n) | 8).toString(16)
            );
          });
        return t;
      }),
      (o.prototype.bind = function (e) {
        var t = this;
        return function () {
          e.apply(t, Array.prototype.slice.call(arguments, 0));
        };
      }),
      (o.prototype.checkModule = function () {
        var e = this;
        $("[need-exposure]").each(function () {
          var t = $(this),
            n = t.attr("exposure-key");
          if (void 0 === n) {
            if (
              ((n = e.generateUUID()),
              (a.needCheckModule[n] = {}),
              t.attr("exposure-key", n),
              t.attr("exposure-pos-type", e.urlData.pos.type),
              "recom" == t.data("recom") && $(".dsearch").length)
            ) {
              var r = $("#custumize_word").length
                ? "_" + $("#custumize_word").text()
                : "";
              t.attr("exposure-pos-val", "recommend" + r);
            } else
              t.attr("exposure-pos-val") ||
                t.attr("exposure-pos-val", e.urlData.pos.val);
            (a.needCheckModule[n].ele = t),
              t.attr("exposure-need-ticker") &&
                (a.tickCheckModule[n] = { ele: t });
            var o = 0,
              i = t.attr("need-exposure");
            if (i && i.length > 0) {
              var u = t.find(i);
              (a.needCheckModule[n].needexpEles = u),
                t.attr("exposure-need-ticker") &&
                  (a.tickCheckModule[n].needexpEles = u);
              for (var s = u.eq(0), p = t.width(); 0 == s.height(); )
                s = s.children().eq(0);
              (o = Math.floor(p / s.outerWidth(!0))),
                t.attr("exposure-columns", o);
            }
          } else {
            var i = t.attr("need-exposure"),
              u = t.find(i);
            (a.needCheckModule[n].needexpEles = u),
              t.attr("exposure-need-ticker") &&
                (a.tickCheckModule[n].needexpEles = u);
          }
        });
      }),
      (o.prototype.init = function () {
        function t() {
          n.getElesByViewArea(a.needCheckModule);
        }
        var n = this;
        n.setUrlPrefix(), n.checkModule(), t();
        e.setInterval(function () {
          n.checkModule();
        }, 2e3);
        !(function r() {
          n.getElesByViewArea(a.tickCheckModule), e.setTimeout(r, 1500);
        })(),
          $(e).on("scroll", _.debounce(t, 500));
      }),
      (o.prototype.checkExposuredEles = function (e) {
        var t = this;
        for (var n in e)
          if (e.hasOwnProperty(n)) {
            var r = e[n];
            r.attr("need-exposure") &&
              r.attr("need-exposure").length > 0 &&
              r.children().each(function () {
                var e = this,
                  n = $(this);
                (n.data("id") || 11 == r.attr("exposure-source-type")) &&
                  1 == n.attr("exposured") &&
                  t.viewHelper.elementOutViewport(e) &&
                  n.attr("exposured", -1);
              });
          }
      }),
      (o.prototype.getElesByViewArea = function (e) {
        var a = this,
          o = [];
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i].ele;
            if (!u) continue;
            var s = u.attr("exposure-columns"),
              p = e[i].needexpEles;
            if (p && p.length > 0) {
              var l = {};
              l[i] = { val: u.attr("exposure-pos-val"), listArray: [] };
              var f = u.children(".dealad").length - 0,
                c = u.attr("exposure-percent"),
                h = 11 == u.attr("exposure-source-type") ? !0 : !1,
                g = {
                  getX: function (e) {
                    return Math.floor((e + f) / s) - 0 + 1;
                  },
                  getY: function (e) {
                    var t = ((e + f) % s) - 0 + 1;
                    return ".saleDeal" == u.attr("need-exposure")
                      ? t + (n(u) - 1) * s
                      : t;
                  },
                  getN: function (e) {
                    var t = e - 0 + 1 + f;
                    return ".saleDeal" == u.attr("need-exposure")
                      ? t + (n(u) - 1) * s
                      : t;
                  },
                };
              p.each(function (e) {
                var n = this,
                  o = $(this),
                  s = a.viewHelper.getElementPosition(n, { percent: c });
                if ((o.data("id") || h) && 1 != o.attr("exposured") && s.ins) {
                  o.attr("exposured", 1),
                    o.attr("x-y", g.getX(e) + "-" + g.getY(e));
                  var p = o.attr("exposured-num");
                  p && "undefined" != p
                    ? o.attr("exposured-num", p - 0 + 1)
                    : o.attr("exposured-num", 1);
                  var f = t(o, h),
                    d = "",
                    y = h ? r.parse(o.find("a").attr("href")) : o.data("id"),
                    x = o.attr("zid") || "",
                    v = o.data("flag")
                      ? ",'op_deal_type':" + o.data("flag")
                      : "",
                    m =
                      "{'id':'" +
                      y +
                      "','sourcetype':'" +
                      f +
                      "','x':" +
                      g.getX(e) +
                      ",'y':" +
                      g.getY(e) +
                      ",'time':" +
                      new Date().getTime() +
                      ",'exposure_num':" +
                      o.attr("exposured-num") +
                      ",'n':" +
                      g.getN(e) +
                      ",'zid':'" +
                      x +
                      "'" +
                      v,
                    P = "}",
                    _ = o.attr("data-imgVer");
                  if (_ && "undefined" != _) {
                    var k = ",'imgver':" + _;
                    d = m + k + P;
                  } else d = m + P;
                  l[i].listArray.push(d);
                }
                (o.data("id") || 11 == u.attr("exposure-source-type")) &&
                  1 == o.attr("exposured") &&
                  s.outs &&
                  o.attr("exposured", -1);
              }),
                o.push(l);
            }
          }
        o.length > 0 && a.postReq(o);
      }),
      (o.prototype.viewHelper = {
        elementInViewport: function (t, n) {
          try {
            var r = n > 0 && 1 >= n ? n : 0.8;
            if ("none" == $(t).css("display")) return !1;
            for (; 0 == $(t).height(); ) t = $(t).children().eq(0)[0];
            var a = !0,
              o = t.offsetTop,
              i = t.offsetLeft,
              u = t.offsetWidth,
              s = t.offsetHeight;
            if (
              ((i >= t.offsetParent.offsetWidth || -u / 2 > i) && (a = !1),
              0 == o && 0 == i && 0 == u && 0 == s)
            )
              return !1;
            for (; t.offsetParent; )
              (t = t.offsetParent), (o += t.offsetTop), (i += t.offsetLeft);
            return (
              o + s * (1 - r) >= e.pageYOffset &&
              i + 0.2 * u >= e.pageXOffset &&
              o + s * r <= e.pageYOffset + e.innerHeight &&
              i + 0.8 * u <= e.pageXOffset + e.innerWidth &&
              a
            );
          } catch (p) {
            return !1;
          }
        },
        elementOutViewport: function (t) {
          try {
            for (; 0 == $(t).height(); ) t = $(t).children().eq(0)[0];
            var n = !0,
              r = t.offsetTop,
              a = t.offsetLeft,
              o = t.offsetWidth,
              i = t.offsetHeight;
            for (
              ((t.offsetParent && a >= t.offsetParent.offsetWidth) ||
                -o / 2 > a) &&
              (n = !1);
              t.offsetParent;

            )
              (t = t.offsetParent), (r += t.offsetTop), (a += t.offsetLeft);
            return (
              r + i <= e.pageYOffset ||
              a > e.pageXOffset + e.innerWidth ||
              r > e.pageYOffset + $(e).height() ||
              !n
            );
          } catch (u) {
            return !1;
          }
        },
        getElementPosition: function (t, n) {
          var n = $.extend({}, n),
            r = { ins: !1, outs: !1 };
          try {
            var a = n.percent > 0 && n.percent <= 1 ? n.percent : 0.8;
            if ("none" == $(t).css("display")) return r;
            for (; 0 == $(t).height(); ) t = $(t).children().eq(0)[0];
            var o = !0,
              i = t.offsetTop,
              u = t.offsetLeft,
              s = t.offsetWidth,
              p = t.offsetHeight;
            if (
              ((u >= t.offsetParent.offsetWidth || -s / 2 > u) && (o = !1),
              0 == i && 0 == u && 0 == s && 0 == p)
            )
              return r;
            for (; t.offsetParent; )
              (t = t.offsetParent), (i += t.offsetTop), (u += t.offsetLeft);
            var l = e.pageYOffset,
              f = e.pageXOffset,
              c = e.innerWidth;
            return l >= i + p || u > f + c || i > l + $(e).height() || !o
              ? ((r.outs = !0), (r.ins = !1), r)
              : i + p * (1 - a) >= l &&
                u + 0.2 * s >= f &&
                i + p * a <= l + e.innerHeight &&
                f + c >= u + 0.8 * s &&
                o
              ? ((r.outs = !1), (r.ins = !0), r)
              : ((r.outs = !1), (r.ins = !1), r);
          } catch (h) {
            return !1;
          }
        },
      }),
      (o.prototype.ajax = function (e, t) {
        if (e && e.length > 0) {
          var n =
              "&deals=[" +
              e.join(",") +
              "]&pos_value=" +
              t +
              "&listversion=" +
              $.cookie("ju_rv"),
            r = document.getElementById("calcExposureImg");
          if (r) r.src = this.urlPrefix + n;
          else {
            var a = new Image();
            (a.style.position = "absolute"),
              (a.src = this.urlPrefix + n),
              (a.id = "calcExposureImg"),
              document.body.appendChild(a);
          }
        }
      }),
      (o.prototype.postReq = function (e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t],
            r = (function () {
              for (var e in n) if (n.hasOwnProperty(e)) return e;
            })(),
            a = n[r];
          this.ajax(a.listArray, a.val);
        }
      }),
      (o.prototype.setUrlPrefix = function () {
        var t =
          $.cookie("utm_cmd") +
          "|" +
          $.cookie("utm_ctr") +
          "|" +
          $.cookie("utm_cct") +
          "|" +
          $.cookie("utm_ccn");
        this.urlPrefix =
          this.urlData.picSrc +
          "?pos_type=" +
          this.urlData.pos.type +
          "&uid=" +
          this.urlData.getTao800UserId() +
          "&deviceid=" +
          $.cookie("session_id") +
          "&cookieid=" +
          $.cookie("__utma") +
          "&fromsource=1&platform=&version=" +
          $.cookie("ju_version") +
          "&channel=" +
          $.cookie("utm_csr") +
          "&newversion=" +
          $.cookie("ju_version_new") +
          "&cdetail=" +
          t +
          "&userrole=" +
          $.cookie("user_version") +
          "&child=" +
          $.cookie("maternal") +
          "&url=" +
          e.encodeURIComponent(this.urlData.locationUrl) +
          "&refer=" +
          e.encodeURIComponent(document.referrer) +
          "&page=" +
          r.getPage() +
          "&screenversion=" +
          $.cookie("screenversion");
      }),
      (e.Exposure = o),
      "function" == typeof define &&
        define.amd &&
        define(function () {
          return o;
        }),
      $(function () {
        e.setTimeout(function () {
          o.getSingleton();
        }, 600);
      });
  })(window);
});
/*_combo_cut*/ define("statics/zhe/common/js/stat/zheStatistical", function () {
  var t = (function () {
      var t = new RegExp("^/(page/[1-9])?$"),
        e = window.location.pathname.replace(/,+/, ""),
        a = e.match(t),
        n = window.location.hostname.split(".")[0],
        o = "www" === n;
      return (
        null != a
          ? (e = o ? "index" + e : n + e)
          : (o || (e = n + e), "/" == e.charAt(0) && (e = e.replace("/", ""))),
        "/" != e.charAt(e.length - 1) && (e += "/"),
        e
      );
    })(),
    e = {
      ju_flag: function () {
        var t = window.location;
        return /www.zhe800.com\/ju_tag|www.zhe800.com\/page/i.test(t.href) ||
          (/^[^a-z\d]*$/i.test(t.pathname) === !0 &&
            /www.zhe800.com/i.test(t.hostname))
          ? "&ju_flag=1"
          : "";
      },
      source_type: function (t, e) {
        var a = 11 == e.attr("exposure-source-type") ? !0 : !1;
        if (a) return "ad";
        var n = t.data("type");
        return t.hasClass("brandstyle") ||
          t.hasClass("brand-index") ||
          "brand" == n
          ? "brand"
          : t.hasClass("taotbaoStore")
          ? "cpcstore"
          : 2 == n || 3 == n
          ? "tao"
          : 1 == n
          ? "zhe"
          : "banner" == n
          ? "ad"
          : "";
      },
      get_val: function (t, e) {
        var a = e.attr("exposure-pos-val");
        return (a = a ? a : "");
      },
      get_type: function (t, e) {
        var a = e.attr("exposure-pos-type");
        return (a = a ? a : "");
      },
      get_pos: function (t, e, a) {
        var n = e.attr("exposure-columns");
        n = n ? n : 3;
        var o = Math.floor(a / n) + 1,
          r = (a % n) + 1,
          s = a + 1;
        return { get_x: o, get_y: r, get_n: s };
      },
      get_op_type: function (t) {
        return t.data("flag") || "";
      },
      get_id: function (t) {
        var e = t.data("type"),
          a = t.data("id");
        return "brand" == e
          ? "&brandid=" + a
          : "banner" == e
          ? "&bannerid=" + a
          : "";
      },
    };
  window.add_page_stats_to_params = function (a, n, o) {
    var r = $(a).closest("[data-id=" + n + "]"),
      s = r.index(),
      i = "" != o ? t + o + "/" : t,
      p = a.href,
      l = p.match(/[&?](page_stats_w=[^& ]+)($|&)/),
      u = r.find("a[onclick] img");
    if (!(p.indexOf("?") > 0 && null != l)) {
      $(a).closest("tbody[exposure-pos-val=list][exposure-pos-type=myfav]")
        .length && (s -= 1),
        /top/.test(i) && (r.parent().hasClass("top3box") || (s += 2));
      var c = $(a).closest("[need-exposure]"),
        _ = e.source_type(r, c),
        d = e.get_val(r, c),
        g = e.get_type(r, c),
        f = e.get_pos(r, c, s),
        h = f.get_x,
        w = f.get_y,
        v = f.get_n,
        y = t + h + "*" + w,
        m = e.ju_flag(),
        x = e.get_op_type(r),
        b = x ? "&op_type=" + x : "",
        z = e.get_id(r);
      (i =
        "page_stats_w=" +
        y +
        m +
        "&pos_type=" +
        g +
        "&pos_value=" +
        d +
        "&x=" +
        h +
        "&y=" +
        w +
        "&n=" +
        v +
        "&listversion=" +
        $.cookie("ju_rv") +
        "&sourcetype=" +
        _ +
        b +
        z),
        (p += p.indexOf("?") > 0 ? "&" + i : "?" + i),
        (a.href = p),
        0 == u.length && (u = r.find("a.J_tklink_tmall img")),
        u.length > 0 && $(u[0]).parent().attr("info", p);
    }
  };
});
/*_combo_cut*/ define("statics/zhe/common/js/stat/utmCookie", function () {
  function t() {
    var t, e;
    t = (e = location.hostname.match(/^(ju|zhi)\.\w+\.com$/)) ? e[1] : "tao";
    var n;
    return (
      (n =
        "/" == location.pathname
          ? "home"
          : (e = location.pathname.match(
              /^\/(type|tag|deal|site|welfare)(\/|$)/
            ))
          ? e[1]
          : location.pathname.match(/^\/to\/jump\//)
          ? "out"
          : "others"),
      t + "." + n
    );
  }
  function e() {
    var t = {},
      e = location.search.slice(1);
    if (e.length <= 0) return t;
    e = e.split("&");
    for (var n, a = 0; void 0 !== (n = e[a]); a++) {
      var o = n.indexOf("=");
      if (o > 0)
        var m = n.slice(0, o),
          r = n.slice(o + 1);
      else
        var m = n,
          r = "";
      t[m] = r;
    }
    return t;
  }
  function n(t) {
    var e = t.match(/^(?:\w{1,9}:\/\/)?([\w-]+\.)+(\w+)/);
    return e ? e[1] + e[2] : "";
  }
  function a(t) {
    var e = t.match(/^(?:\w{1,9}:\/\/)?(([\w-]+\.)+\w+)/);
    return e ? e[1] : "";
  }
  function o(t) {
    var e = new Date();
    e.setDate(e.getDate() + 30);
    var a =
      "; domain=." + n(location.hostname) + "; path=/; expires=" + e.toString();
    for (var o in t) document.cookie = o + "=" + (t[o] || "") + a;
  }
  !(function () {
    if (n(document.referrer) != n(location.hostname)) {
      var m = e();
      m.utm_source ||
        ((m.utm_source = a(document.referrer) || "direct"),
        (m.utm_campaign = "notset_c0"),
        (m.utm_medium = ""),
        (m.utm_term = ""),
        (m.utm_content = "")),
        o({
          utm_csr: m.utm_source,
          utm_ccn: m.utm_campaign,
          utm_cmd: m.utm_medium,
          utm_ctr: m.utm_term,
          utm_cct: m.utm_content,
          utm_etr: t(),
        });
    }
  })();
});
/*_combo_cut*/ define("statics/zhe/common/js/stat/visitCookie", function () {
  !(function () {
    function e(e) {
      var t = e || new Date(),
        n = t.getFullYear(),
        r = t.getMonth() + 1,
        o = t.getDate();
      return (
        (r = 10 > r ? "0" + r : r),
        (o = 10 > o ? "0" + o : o),
        n + "-" + r + "-" + o
      );
    }
    function t() {
      var t, r, o, i, a, c, s, u;
      if (((r = new Date()), n("frequency"))) t = n("frequency").split(",");
      else {
        (t = []), (t.length = 90);
        for (var p = 1; p < t.length; p++) t[p] = 0;
        t[0] = 1;
      }
      if (
        ((i = n("lastTime")),
        (a = Date.parse(i.replace(/\-/g, "/"))),
        (c = Date.parse(e(r).replace(/\-/g, "/"))),
        (o = Math.abs(c - a) / 864e5),
        (s = []),
        o > 0)
      ) {
        for (var p = 0; o > p; p++) s[p] = 0;
        s[0] = 1;
      }
      return (u = s.concat(t)), (u.length = 90), u;
    }
    var n = function (e, t, n) {
        if (0 == arguments.length) {
          try {
            if (0 == navigator.cookieEnabled) return !1;
          } catch (r) {
            window.console && console.info(r);
          }
          return !0;
        }
        if (arguments.length > 1 && "[object Object]" !== String(t)) {
          if (
            ((n = $.extend({}, n)),
            (null === t || void 0 === t) && (n.expires = -1),
            "number" == typeof n.expires)
          ) {
            var o = n.expires,
              i = (n.expires = new Date());
            i.setDate(i.getDate() + o);
          }
          return (
            (t = String(t)),
            (document.cookie = [
              encodeURIComponent(e),
              "=",
              n.raw ? t : encodeURIComponent(t),
              n.expires ? "; expires=" + n.expires.toUTCString() : "",
              n.path ? "; path=" + n.path : "",
              n.domain ? "; domain=" + n.domain : "",
              n.secure ? "; secure" : "",
            ].join(""))
          );
        }
        n = t || {};
        var a,
          c = n.raw
            ? function (e) {
                return e;
              }
            : decodeURIComponent;
        return (a = new RegExp(
          "(?:^|; )" + encodeURIComponent(e) + "=([^;]*)"
        ).exec(document.cookie))
          ? c(a[1])
          : "";
      },
      r = { expires: 1825, path: "/", domain: ".zhe800.com" };
    n("firstTime") || (n("firstTime", e(), r), n("lastTime", e(), r)),
      n("frequency", t(), r),
      n("lastTime", e(), r);
  })();
});
/*_combo_cut*/ define("statics/zhe/common/js/stat/add_params", function () {
  $("body").delegate("a[add_params]", "mousedown.add_params", function () {
    var a = $(this),
      t = a.attr("href"),
      d = a.attr("add_params");
    if (t && d && t.indexOf(d) < 0) {
      var e = t.indexOf("?");
      (t += e >= 0 && e !== t.length - 1 ? "&" : "?"),
        (t += d),
        a.attr("href", t);
    }
  });
});
/*_combo_cut*/ define("statics/zhe/common/js/stat/ga", function () {
  "undefined" != typeof window.zhepub || (window.zhepub = {}),
    (window._gaq = window._gaq || []);
  var e = window.zhepub;
  (e.ga = {}),
    (function (e) {
      var t = [
          ["_setAccount", "UA-35760263-1"],
          ["_setDomainName", "zhe800.com"],
        ],
        o = 30081362,
        n = function () {
          if (
            (e.track(t),
            "" !== document.referrer ||
              /[?&]utm_source(=|&|$)/.test(location.search) ||
              /[?&]source_referer(=|&|$)/.test(location.search) ||
              ("" == $.cookie("utm_csr") && "" == $.cookie("cid")) ||
              e.track(["_setCustomVar", 1, "VisitType", "direct", 2]),
            void 0 !== $("body").data("version") &&
              "index" === $(".dealbox").data("current_view"))
          ) {
            var o = [
              "/oldUser/versionA",
              "/newUser/versionA",
              "/oldUser/versionB",
              "/newUser/versionB",
            ];
            e.track(o[$("body").data("version")]);
          } else e.track(null);
          var n = document.createElement("script");
          (n.type = "text/javascript"),
            (n.async = !0),
            (n.src =
              ("https:" == document.location.protocol
                ? "https://ssl"
                : "//www") + ".google-analytics.com/ga.js");
          var a = document.getElementsByTagName("script")[0];
          a.parentNode.insertBefore(n, a);
        },
        a = function () {
          var e = "https:" == document.location.protocol ? " https://" : " //",
            t = document.createElement("div");
          (t.innerHTML = unescape(
            "%3Cdiv style='display:none;' id='cnzz_stat_icon_" +
              o +
              "'%3E%3C/div%3E"
          )),
            document.body.appendChild(t.children[0]);
          var n = document.createElement("script");
          (n.type = "text/javascript"),
            (n.src = unescape(
              e + "w.cnzz.com/c.php%3Fid%3D" + o + "%26l%3D3%26async%3D1"
            ));
          var a = document.getElementsByTagName("script")[0];
          a.parentNode.insertBefore(n, a);
        },
        c = function (e) {
          for (var t in e)
            if (e.hasOwnProperty(t) && e[t] instanceof Array) return !1;
          return !0;
        };
      (e.getPath = function () {
        return window.location.pathname.replace(/^\//, "").replace(/\/$/, "");
      }),
        (e.initScripts = function (e) {
          if ((e.ga && ((t = e.ga.opts || t), n()), e.cnzz)) {
            o = e.cnzz.key || o;
            try {
              a();
            } catch (c) {
              console && console.log(c);
            }
          }
        }),
        (e.track = function () {
          var t = Array.prototype.slice.call(arguments);
          for (var o in t)
            if (t.hasOwnProperty(o)) {
              var n = t[o];
              n instanceof Array
                ? c(n)
                  ? _gaq.push(n)
                  : e.track.apply(this, n)
                : _gaq.push(
                    null == n ? ["_trackPageview"] : ["_trackPageview", n]
                  );
            }
        }),
        (e.kaiqiangtixi_ga_code = function () {
          var t = e.getPath();
          "" == t && (t = "total"),
            $(".openAlert").click(function () {
              $(this).closest(".zt2").length >= 1 &&
                e.track("/PageAction/" + t + "/purchaseInform"),
                $(this).closest(".zt3").length >= 1 &&
                  e.track("/PageAction/" + t + "/soldOut");
            });
        }),
        (e.error404Code = function () {
          e.track(
            "/404.html?page=" +
              document.location.pathname +
              document.location.search +
              "&from=" +
              document.referrer
          );
        }),
        (e.addCookieVisitor = function (e) {
          if ("" == $.cookie(e) || void 0 == $.cookie("gdt_ad")) {
            for (
              var t = location.hostname.match(
                  /^(?:\w{1,9}:\/\/)?([\w-]+\.)+(\w+)/
                ),
                o = t[1] + t[2],
                n = location.search.slice(1).split("&"),
                a = "",
                c = 0,
                r = n.length;
              r > c;
              c++
            )
              if (n[c].match(/utm_source/)) {
                a = n[c].split("=")[1];
                break;
              }
            var c = new Date(),
              i = c.getTime(),
              s = pagePath + "." + a + "." + i;
            $.cookie(e, s, { expires: 60, path: "/", domain: o });
          }
        });
    })(e.ga),
    e.ga.initScripts(
      window.gaconf ? window.gaconf : { ga: !0, cnzz: { key: 30081361 } }
    );
});
/*_combo_cut*/ define("statics/zhe/common/js/stat/dealGa", function (t) {
  function a() {
    var t = location.pathname.substring(1);
    return (
      "" == t && (t = "index"),
      "/" == t.charAt(t.length - 1) && (t = t.substring(0, t.length - 1)),
      t
    );
  }
  function e() {
    var t = window.location.pathname.replace(/^\//, "").replace(/\/$/, "");
    "" == t && (t = "total"),
      $(".openAlert").click(function () {
        $(this).closest(".zt2").length >= 1 &&
          _gaq.push(["_trackPageview", "/PageAction/" + t + "/purchaseInform"]),
          $(this).closest(".zt3").length >= 1 &&
            _gaq.push(["_trackPageview", "/PageAction/" + t + "/soldOut"]);
      });
  }
  t("statics/zhe/common/js/stat/ga");
  $(function () {
    $("a[href*='out.zhe800.com/ju/deal']").click(function () {
      zhepub.ga.track("/PageAction/out/ju/from_" + a());
    }),
      $(".kuaigoumai").live("click", function () {
        zhepub.ga.track([
          "_trackPageview",
          "/PageAction/out/ju/from_pop/signal",
        ]);
      }),
      $("#dialog_empty_deal .sellBtn a").live("click", function () {
        zhepub.ga.track("/PageAction/out/ju/from_pop/over");
      }),
      e();
  });
});
/*_combo_cut*/ define("statics/zhe/common/js/stat/taoTrac", function () {
  (window.add_js_tao_trac = function (a) {
    $("[" + a + "='Ju_youhui']").live("click", function () {
      _gaq.push(["_trackPageview", "/PageAction/jutao/youhui"]);
    }),
      $("[" + a + "='Ju_zhankai_chakan']").live("click", function () {
        _gaq.push(["_trackPageview", "/PageAction/jutao/zhankai_chakan"]);
      }),
      $("[" + a + "='Ju_zhankai']").live("click", function () {
        _gaq.push(["_trackPageview", "/PageAction/jutao/zhankai"]);
      }),
      $("[" + a + "='Ju_zhankai_wangqi']").live("click", function () {
        _gaq.push(["_trackPageview", "/PageAction/jutao/zhankai_wangqi"]);
      }),
      $("[" + a + "='Ju_jingxuan']").live("click", function () {
        _gaq.push(["_trackPageview", "/PageAction/jutao/jingxuan"]);
      }),
      $("[" + a + "='Jutao_Tao_B2c']").live("click", function () {
        _gaq.push(["_trackPageview", "/PageAction/jutao/tao_b2c"]);
      }),
      $("[" + a + "='Tao_Shangcheng_Deal']").live("click", function () {
        _gaq.push([
          "_trackPageview",
          "/PageAction/tao800/shangcheng/deal/" + $(this).attr("b2clk"),
        ]);
      }),
      $("[" + a + "='Jutao_Taotuangou']").live("click", function () {
        _gaq.push(["_trackPageview", "/PageAction/jutao/tao_tuangou"]);
      }),
      $("[" + a + "='Tao_Focus9']").live("click", function () {
        _gaq.push(["_trackPageview", "/PageAction/index/9_Focus"]);
      }),
      $("[" + a + "='Add_To_Favourite']").live("click", function () {
        _gaq.push(["_trackPageview", "/PageAction/jutao/top/shoucang_tanchu"]);
      }),
      $("[" + a + "='Header_Favourite']").live("click", function () {
        _gaq.push(["_trackPageview", "PageAction/jutao/top/shoucang_changgui"]);
      }),
      $("[" + a + "='Sold_Out_Favourite']").live("click", function () {
        _gaq.push([
          "_trackPageview",
          "PageAction/jutao/deal/shoucang_maiguang",
        ]);
      }),
      $("[" + a + "='Footer_Favourite']").live("click", function () {
        _gaq.push(["_trackPageview", "PageAction/jutao/right/shoucang_xuanfu"]);
      }),
      $("[" + a + "='Deal_Favourite']").live("click", function () {
        _gaq.push(["_trackPageview", "PageAction/jutao/deal/shoucang_deal"]);
      }),
      $("[" + a + "='Similar_Deal']").live("click", function () {
        _gaq.push([
          "_trackPageview",
          "PageAction/jutao/deal/deal_renqituijian",
        ]);
      }),
      $("[" + a + "='Over_Deal_Prompt']").live("click", function () {
        _gaq.push([
          "_trackPageview",
          "PageAction/jutao/deal/top/deal_toptuijian",
        ]);
      }),
      $("[" + a + "='Deal_Right_Prompt']").live("click", function () {
        _gaq.push([
          "_trackPageview",
          "PageAction/jutao/deal/deal_buttontuijian",
        ]);
      }),
      $("[" + a + "='Right_Share']").live("click", function () {
        _gaq.push(["_trackPageview", "PageAction/jutao/right/fenxiang_xuanfu"]);
      }),
      $("[" + a + "='Friend_Share']").live("click", function () {
        _gaq.push(["_trackPageview", "PageAction/jutao/deal/fenxiang_xuanfu"]);
      }),
      $("[" + a + "='Tuan_AD']").live("click", function () {
        _gaq.push([
          "_trackPageview",
          "PageAction/jutao/index/bottom/guanggao_rexiaotuangou",
        ]);
      }),
      $("[" + a + "='Taobao_AD']").live("click", function () {
        _gaq.push([
          "_trackPageview",
          "PageAction/jutao/jp/bottom/guanggao_rexiaotaobao",
        ]);
      }),
      $("[" + a + "='WG_Tags']").live("click", function () {
        _gaq.push([
          "_trackPageview",
          "PageAction/jutao/jp/bottom/guanggao_gengduofenlei",
        ]);
      });
  }),
    add_js_tao_trac("js_trac");
});
/*_combo_cut*/ define("statics/zhe/common/js/stat/statCommon", function (t) {
  t("statics/zhe/common/js/stat/userId"),
    t("statics/zhe/common/js/stat/panda"),
    t("statics/zhe/common/js/stat/exposure_new"),
    t("statics/zhe/common/js/stat/zheStatistical"),
    t("statics/zhe/common/js/stat/utmCookie"),
    t("statics/zhe/common/js/stat/visitCookie"),
    t("statics/zhe/common/js/stat/add_params"),
    t("statics/zhe/common/js/stat/dealGa"),
    t("statics/zhe/common/js/stat/taoTrac"),
    t("statics/zhe/common/js/stat/ga");
});
/*
page: http://www.zhe800.com/
url: http://status.tuanimg.com/zhe_statics/combojs?07b66/startIndexFirstPage-98cf8.js;23904/index-f18aa.js;0a413/index-e522b.js;42db4/tpl-539d0.js;1c39e/imgcaptchatpl-f1faf.js;037b5/picstat-8ceae.js;65434/validator-d777d.js;65434/aliyunValidator-44efa.js;65434/imgValidator-cf876.js;65434/geetestValidator-1fdf9.js;65434/validate-aa118.js;65434/validateStat-7bab8.js;42db4/index-4985d.js;67446/tpl-f3b36.js;df5b3/registertpl-84d95.js;df5b3/register-11ad1.js;67446/index-b0607.js;df5b3/tpl-ab63c.js;df5b3/index-6d828.js;cdec9/signin-bce99.js;cdec9/isLogin-957fb.js;357fd/tpl-a4025.js;357fd/index-17f25.js;cdec9/qdpost-f8536.js;07b66/drawUserInfo-ef8ac.js;1e725/similarDealPage-d6d13.js;07b66/indexNav-a6631.js;07b66/syncUserVer-5173f.js;07b66/addFavorite-8feb0.js;cdec9/retinaImg-2d5f5.js;07b66/navPop-8662d.js;3a67a/sidePop-3e0f2.js;07b66/index_hot_brand-e30cc.js;8231b/tpl-01e91.js;8231b/index-6e2c6.js;07b66/initFlashSale-5f564.js;e0d67/cache-276d2.js;e0d67/tools-c5ff2.js;8c21f/baseJson-102a9.js;8c21f/bussLogic-41187.js;fef07/existTpls-56632.js;fef07/config-20ffb.js;fef07/createTpl-9cba0.js;fef07/matchTpl-5961b.js;8c21f/tiger-a3a8e.js;3b220/openTuanAlert-9ad06.js;cdec9/user-80831.js;cdec9/myfav-edb56.js;3b220/dealFavorite-ff605.js;3b220/brandFavorite-7e120.js;3b220/dealEvent-bad18.js;07b66/loadIndexDeal-6be83.js;07b66/indexBg-f0c12.js;07b66/exposure_index-732d3.js;cdec9/fingerprint-c0df4.js;0bae4/index-78e2e.js;cdec9/start-5a61e.js;cdec9/cart-a533a.js;cdec9/msg-ded84.js;96482/index-cd813.js;3b220/index-c0eb7.js;cdec9/order-14529.js;cdec9/coupon-86bd7.js;cdec9/immsg-cec9d.js;626b9/gender-f19b8.js;9da03/login-cf2a3.js;9da03/unlogin-f5a6c.js;9da03/index-15574.js;626b9/sidebar_start-7e708.js;d75e1/index-12912.js;fe5b0/tpl-6a859.js;fe5b0/index-ce785.js;cdec9/cdStorage-1b490.js;cdec9/search-e90e7.js;eca1d/index-d5957.js;738d1/identpop-836b9.js;f8d57/clientDetail-38db6.js;f8d57/renderSurvey-21147.js;738d1/npspop-7c598.js;738d1/signpop-51fbb.js;738d1/cookiepop-c3d9b.js;738d1/muyingpop-98ae4.js;738d1/weichatpop-0577f.js;738d1/index-d6e4d.js;2862d/index-52b81.js;cdec9/feedbackPopup-dce17.js;cdec9/yugaoPop-6343f.js;cdec9/layoutlogic-67ff7.js;cdec9/fireReady-16b16.js;cdec9/dealHistoryList-25884.js;1e725/fixedJunav-9b490.js;1e725/visitIndexCookie-925ba.js;1e725/rewrite_ju_rv-327f5.js;037b5/userId-ba26d.js;037b5/panda-d0bc1.js;037b5/exposure_new-a9edc.js;037b5/zheStatistical-5dcb1.js;037b5/utmCookie-9a0c6.js;037b5/visitCookie-06657.js;037b5/add_params-b4650.js;037b5/ga-ee1e1.js;037b5/dealGa-d7fe3.js;037b5/taoTrac-731d4.js;037b5/statCommon-da443.js
*/
