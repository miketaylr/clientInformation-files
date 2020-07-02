function compare_version(ver1, ver2) {
  "string" == typeof ver1
    ? (ver1 = ver1.split("."))
    : "number" == typeof ver1 && (ver1 = [ver1]),
    "string" == typeof ver2
      ? (ver2 = ver2.split("."))
      : "number" == typeof ver2 && (ver2 = [ver2]);
  for (var i = 0; ; ) {
    if (!ver1[i]) return ver2[i] ? 1 : 0;
    if (!ver2[i]) return -1;
    if (parseInt(ver1[i]) > parseInt(ver2[i])) return -1;
    if (parseInt(ver1[i]) < parseInt(ver2[i])) return 1;
    i++;
  }
}
function PageQuery(q) {
  if (
    (q.length > 1 ? (this.q = q.substring(1, q.length)) : (this.q = null),
    (this.keyValuePairs = new Array()),
    q)
  )
    for (var i = 0; i < this.q.split("&").length; i++)
      this.keyValuePairs[i] = this.q.split("&")[i];
  (this.getKeyValuePairs = function () {
    return this.keyValuePairs;
  }),
    (this.getValue = function (s) {
      for (var j = 0; j < this.keyValuePairs.length; j++)
        if (this.keyValuePairs[j].split("=")[0] == s)
          return this.keyValuePairs[j].split("=")[1];
      return -1;
    }),
    (this.getParameters = function () {
      for (
        var a = new Array(this.getLength()), j = 0;
        j < this.keyValuePairs.length;
        j++
      )
        a[j] = this.keyValuePairs[j].split("=")[0];
      return a;
    }),
    (this.getLength = function () {
      return this.keyValuePairs.length;
    });
}
function queryString(key) {
  var page = new PageQuery(window.location.search);
  return unescape(page.getValue(key));
}
function isInArray(needle, arrayHaystack) {
  if (!arrayHaystack || 0 == arrayHaystack.length) return !1;
  for (var x in arrayHaystack)
    if (arrayHaystack[x].split(":")[0] == needle) return !0;
  return !1;
}
function setCookie(name, value, expires, path, domain, secure) {
  var today = new Date();
  today.setTime(today.getTime()),
    expires && (expires = 1e3 * expires * 60 * 60 * 24);
  var expires_date = new Date(today.getTime() + expires);
  document.cookie =
    name +
    "=" +
    escape(value) +
    (expires ? ";expires=" + expires_date.toGMTString() : "") +
    (path ? ";path=" + path : "") +
    (domain ? ";domain=" + domain : "") +
    (secure ? ";secure" : "");
}
function deleteCookie(name, path, domain) {
  getCookie(name) &&
    (document.cookie =
      name +
      "=" +
      (path ? ";path=" + path : "") +
      (domain ? ";domain=" + domain : "") +
      ";expires=Thu, 01-Jan-1970 00:00:01 GMT");
}
function setFeatureVal(_feat, _id) {
  var Item = "string" == typeof _id ? getElementById(_id) : _id,
    cookie_str = getCookie("features"),
    feat_elements = Item.length;
  if (cookie_str && cookie_str.indexOf(_feat) >= 0)
    for (
      var feature = parseInt(
          cookie_str.substr(cookie_str.indexOf(_feat + ":") + _feat.length + 1)
        ),
        i = 0;
      i < feat_elements;
      i++
    )
      feature == Item.options[i].value && (Item.options[i].selected = !0);
}
function setRadioVal() {
  var cookie_str = getCookie("features");
  if (cookie_str && cookie_str.indexOf("st") >= 0)
    for (
      var feature = cookie_str.substr(cookie_str.indexOf("st:") + 3), j = 0;
      j < document.f.st.length;
      j++
    )
      document.f.st[j].value == feature && (document.f.st[j].checked = !0);
}
function getAdTypeFromCaller() {
  var type;
  if (queryString("ca") < 0) type = "s";
  else {
    var caller = queryString("ca"),
      split_ca = caller.split("_");
    type = split_ca[split_ca.length - 1];
  }
  return type;
}
function showField() {
  var ShowItem = document.getElementById(showField.arguments[0]);
  ShowItem && (ShowItem.style.display = showField.arguments[1]),
    3 == showField.arguments.length &&
      (ShowItem.innerHTML = showField.arguments[2]);
}
function showElement(id, showHide, retval) {
  var element = document.getElementById(id);
  if (
    (element && (element.style.display = 1 == showHide ? "block" : "none"),
    null != retval)
  )
    return retval;
}
function scrollToTop() {
  window.scrollTo(0, 0);
}
function scrollToBottom() {
  window.scrollTo(0, 1e4);
}
function scrollToObject(offsetTrail) {
  for (var offsetLeft = 0, offsetTop = 0; offsetTrail; )
    (offsetLeft += offsetTrail.offsetLeft),
      (offsetTop += offsetTrail.offsetTop),
      (offsetTrail = offsetTrail.offsetParent);
  "undefined" != typeof document.body.leftMargin &&
    ((offsetLeft += document.body.leftMargin),
    (offsetTop += document.body.topMargin)),
    window.scrollTo(0, offsetTop);
}
function scrollToError(elemId) {
  if (!focused) {
    var offsetTrail = document.getElementById(elemId);
    scrollToObject(offsetTrail),
      document.getElementById(elemId) &&
        document.getElementById(elemId).focus(),
      (focused = !0);
  }
}
function setFocus(_field) {
  document.getElementById(_field) && document.getElementById(_field).focus();
}
function setChecked(_Id, _check) {
  var Item = document.getElementById(_Id);
  null != Item && (Item.checked = _check);
}
function setValue(_Id, _check) {
  var Item = "string" == typeof _Id ? document.getElementById(_Id) : _Id;
  null != Item && (Item.value = _check);
}
function popUp(page, name, details) {
  return (newWin = window.open(page, name, details)), newWin.focus(), !1;
}
function newsPopUp(page) {
  return (
    (newWin = window.open(
      page,
      "_blank",
      " width=800, height=" +
        Math.round(0.8 * window.screen.availHeight) +
        ", scrollbars=yes, screenX = 0, screenY = 0, top = 0, left = 0"
    )),
    newWin.focus(),
    !1
  );
}
function enable_field(_name) {
  var Item = "string" == typeof _name ? document.getElementById(_name) : _name;
  null != Item && Item.disabled && (Item.disabled = !1);
}
function disable_field(_name) {
  var Item = "string" == typeof _name ? document.getElementById(_name) : _name;
  null != Item && (Item.disabled || (Item.disabled = !0));
}
function check_dc(_key) {
  var date = new Date(),
    time = date.getTime();
  last_clicked_at + 2500 >= time
    ? (document.getElementById(_key).value = 1)
    : (document.getElementById(_key).value = 0),
    (last_clicked_at = time);
}
function maxlength(e, obj, max) {
  if ((e || (e = window.event), e.which))
    var keycode = e.which,
      ie = !1;
  else
    var keycode = e.keyCode,
      ie = !0;
  if (
    ((x = obj.value.length),
    x > max && ((obj.value = obj.value.substr(0, max)), (x = max)),
    0 == keycode && ie)
  ) {
    var select_range = document.selection.createRange(),
      max_insert = max - x + select_range.text.length,
      data = window.clipboardData.getData("Text").substr(0, max_insert);
    select_range.text = data;
  } else if (x == max && 8 != keycode && 46 != keycode) return !1;
  return !0;
}
function findPosX(obj, end) {
  var curleft = 0,
    width = obj.clientWidth;
  if (obj.offsetParent)
    for (; obj.offsetParent; )
      (curleft += obj.offsetLeft), (obj = obj.offsetParent);
  else obj.x && (curleft += obj.x);
  return curleft + (end ? width : 0);
}
function findPosY(obj, end) {
  var curtop = 0,
    height = obj.clientHeight;
  if (obj.offsetParent)
    for (; obj.offsetParent; )
      (curtop += obj.offsetTop), (obj = obj.offsetParent);
  else obj.y && (curtop += obj.y);
  return curtop + (end ? height : 0);
}
function ProgressBar(_container) {
  (this.progress = []),
    (this.container = _container || "progressbar_container"),
    (this.completed = !1),
    (this.ESTIMATE_MIN_PROGRESS = 10),
    (this.SPEED_CALC_LATEST = 30),
    this.clear();
  var container = document.getElementById(this.container);
  if (container) {
    var progress_bar = document.createElement("div");
    progress_bar.className = "progress_bar";
    var progress_cell = document.createElement("div");
    (progress_cell.className = "progress_blue"),
      (progress_cell.style.width = "0px");
    var debug = document.createElement("div");
    (debug.className = "progress_debug"),
      (debug.id = "progress_debug_id"),
      progress_bar.appendChild(progress_cell),
      container.appendChild(progress_bar),
      container.appendChild(debug),
      container.appendChild(document.createElement("br"));
  }
}
function progressBar(text) {
  document.write(
    '<div id="loading" class="progressBar">' +
      text +
      '<span id="loading_dots"></span></div>'
  );
}
function startProgressBar(pos) {
  var loading = document.getElementById("loading"),
    dots = "";
  pos %= 4;
  for (var i = 0; i < pos; i++) dots += ".";
  (document.getElementById("loading_dots").innerHTML = dots),
    pos++,
    (loading.timer = setTimeout("startProgressBar(" + pos + ")", 500));
}
function showProgressBar(obj, posY, posX) {
  var loading = document.getElementById("loading");
  posY || (posY = 0),
    posX || (posX = 0),
    startProgressBar(1),
    (loading.style.top = "" + (findPosY(obj, !0) + posY) + "px"),
    (loading.style.left = "" + (findPosX(obj, !0) + posX + 20) + "px"),
    (loading.style.display = "inline");
}
function hideProgressBar() {
  var loading = document.getElementById("loading");
  clearTimeout(loading.timer), (loading.style.display = "none");
}
function select_all_weeks(_name, _form, _select) {
  for (var i = 1; i < 53; i++) {
    var week = eval("document." + _form + "." + _name + i);
    week.checked = _select;
  }
}
function waitForNextImage(next_image, ad_id) {
  var ad_id = ad_id ? ad_id : "",
    image = document.getElementById("display_image" + ad_id).firstChild;
  next_image.width > 0
    ? ((image.width = next_image.width), (image.height = next_image.height))
    : setTimeout(function () {
        waitForNextImage(next_image, ad_id);
      }, 100);
}
function resizeImage(image, path, next_image, admin) {
  if (
    (next_image || ((next_image = new Image()), (next_image.src = path)),
    0 == next_image.width)
  )
    return void (next_image.onload = setTimeout(function () {
      resizeImage(image, path, next_image, admin);
    }, 0));
  if (((image.src = next_image.src), admin && next_image.width > 400)) {
    var factor = (next_image.width - 400) / next_image.width;
    (image.height = next_image.height * (1 - factor)), (image.width = 400);
  } else (image.width = next_image.width), (image.height = next_image.height);
}
function showLargeImage(strDisplayPath, ad_id, admin) {
  var ad_id = ad_id ? ad_id : "",
    admin = !!admin && admin,
    image = document.getElementById("display_image" + ad_id).firstChild;
  if (admin) resizeImage(image, strDisplayPath, null, admin);
  else {
    var ctrl = $("#display_image" + ad_id + " img:first-child");
    ctrl.attr("src", "/img/wait.gif"),
      ctrl
        .fadeOut(200, function () {
          ctrl.attr("src", strDisplayPath);
        })
        .fadeIn(200);
  }
}
function next_image(clicked) {
  if (!images[counter]) return (counter = 0), reset_scroll(), !1;
  var thumb = document.getElementById("thumb" + counter),
    image = new Image();
  (image.src = image_url + images[counter]),
    counter % scroll_images_visible == 0 &&
      1 == clicked &&
      0 != counter &&
      scroll_right(images.length, 1),
    showLargeImage(image_url + images[counter]),
    thumbnailBorder(thumb, images.length),
    set_alt_title("main_pict"),
    counter++;
}
function reset_scroll() {
  var image_num = images.length;
  for (i = 0; i < image_num; i++)
    i < scroll_images_visible
      ? (document.getElementById("thumb" + i).className = " ")
      : (document.getElementById("thumb" + i).className = "hidden ");
  showLargeImage(image_url + images[0]),
    thumbnailBorder(document.getElementById("thumb0"), image_num),
    (document.getElementById("arrow_left").style.display = "none"),
    (document.getElementById("arrow_right").style.display = "inline"),
    (counter = 1);
}
function set_alt_title(call_div) {
  var main_image = document.getElementById("main_image"),
    adder = 0;
  "thumb" == call_div && (adder = 1),
    (main_image.alt = js_info.CLICK_FOR_NEXT_IMAGE),
    (main_image.title = js_info.CLICK_FOR_NEXT_IMAGE);
}
function thumbnailBorder(thumb, image_num, ad_id) {
  var ad_id = ad_id ? ad_id : "";
  if (thumb)
    for (i = 0; i < image_num; i++) {
      var thumb_obj = document.getElementById("thumb" + i + ad_id);
      thumb_obj.className.match(/selected/) &&
        (thumb_obj.className.match(/hidden/)
          ? (thumb_obj.className = "hidden")
          : (thumb_obj.className = "")),
        thumb.id == thumb_obj.id && (thumb_obj.className = "selected");
    }
}
function scroll_right(image_num, inner_call) {
  var k = image_num + 1;
  for (i = 0; i < image_num; i++) {
    var thumb_obj = document.getElementById("thumb" + i),
      classn = thumb_obj.className;
    classn.match(/hidden/)
      ? i > k &&
        i < k + (scroll_images_visible + 1) &&
        (thumb_obj.className = " ")
      : ((k = i), (thumb_obj.className = "hidden"));
  }
  if (
    (k >= image_num - (scroll_images_visible + 1)
      ? ((document.getElementById("arrow_right").style.display = "none"),
        (document.getElementById("arrow_left").style.display = "inline"))
      : ((document.getElementById("arrow_right").style.display = "inline"),
        (document.getElementById("arrow_left").style.display = "inline")),
    1 != inner_call)
  ) {
    var large_index = k + 1;
    (counter = large_index + 1),
      showLargeImage(image_url + images[large_index]),
      (document.getElementById("thumb" + large_index).className = "selected");
  }
}
function scroll_left(image_num) {
  var k = 0,
    last = 0;
  for (i = image_num - 1; i >= 0; i--) {
    var thumb_obj = document.getElementById("thumb" + i),
      classn = thumb_obj.className;
    classn.match(/hidden/)
      ? i < k &&
        i > k - (scroll_images_visible + 1) &&
        ((thumb_obj.className = " "), (last = i))
      : ((k = i), (thumb_obj.className = "hidden"));
  }
  k <= scroll_images_visible
    ? ((document.getElementById("arrow_left").style.display = "none"),
      (document.getElementById("arrow_right").style.display = "inline"))
    : ((document.getElementById("arrow_left").style.display = "inline"),
      (document.getElementById("arrow_right").style.display = "inline")),
    (counter = last + 1),
    showLargeImage(image_url + images[last]),
    (document.getElementById("thumb" + last).className = " selected");
}
function delete_image(element_show, element_hide, hidden) {
  var obj1 = document.getElementById(element_show),
    obj2 = document.getElementById(element_hide);
  return (
    showField(obj1.id, "block"),
    (obj2.innerHTML = "<input type='hidden' name='" + hidden + "' value='1'>"),
    !1
  );
}
function getElementsByClassName(oElm, strTagName, strClassName) {
  var arrElements =
      "*" == strTagName && oElm.all
        ? oElm.all
        : oElm.getElementsByTagName(strTagName),
    arrReturnElements = new Array();
  strClassName = strClassName.replace(/\-/g, "\\-");
  for (
    var oElement,
      oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)"),
      i = 0;
    i < arrElements.length;
    i++
  )
    (oElement = arrElements[i]),
      oRegExp.test(oElement.className) &&
        (arrReturnElements[arrReturnElements.length] = oElement);
  return arrReturnElements;
}
function show_hidden_elements() {
  for (
    var elements = getElementsByClassName(document, "*", "hide"), i = 0;
    i < elements.length;
    i++
  )
    elements[i].className = elements[i].className.replace(/hide/, "");
}
function show_tabbed_data() {
  (document.getElementById("tabbed_data").style.display = "block"),
    (document.getElementById("show_tabbed_text").style.display = "none");
}
function hide_tabbed_data() {
  (document.getElementById("tabbed_data").style.display = "none"),
    (document.getElementById("show_tabbed_text").style.display = "block");
}
function get_settings(setting_name, keylookup_func, settings_root, extra) {
  settings_root || (settings_root = settings);
  var res;
  for (var i in settings_root[setting_name]) {
    var val,
      setting = settings_root[setting_name][i];
    if (((val = null), settings_root[setting_name][i].keys)) {
      for (var j in settings_root[setting_name][i].keys) {
        var key = settings_root[setting_name][i].keys[j],
          key_val = keylookup_func(key, extra);
        if (setting[key_val]) setting = setting[key_val];
        else {
          if (!setting["*"]) break;
          setting = setting["*"];
        }
      }
      setting.value && (val = setting.value);
    } else
      settings_root[setting_name][i].default &&
        (val = settings_root[setting_name][i].default);
    if (
      val &&
      (res ? (res += "," + val) : (res = val),
      !settings_root[setting_name][i].continue)
    )
      break;
  }
  return res;
}
function split_setting(val) {
  if (!val) return {};
  var arr = val.split(","),
    res = {};
  for (i = 0; i < arr.length; i++) {
    var kv = arr[i].split(":", 2);
    kv && kv.length > 1 ? (res[kv[0]] = kv[1]) : (res[arr[i]] = 1);
  }
  return res;
}
function mergeElementValues(arr, htmlCollection) {
  for (var ii = 0; ii < htmlCollection.length; ii++) {
    var elem = htmlCollection[ii];
    if (elem.getAttribute("name")) {
      var key = null,
        options = null;
      if (elem.className) {
        var element_group = elem.className.replace(
          /.*element_group([0-9]+).*/,
          "$1"
        );
        if (
          ("" != element_group && (element_group += "."),
          (key = element_group + elem.getAttribute("name")),
          elem.className.match(/(^| )cat_data_select($| )/))
        ) {
          for (var a = [], i = 0; i < elem.options.length; i++)
            a[i] = elem.options[i];
          options = a;
        }
      } else key = elem.getAttribute("name");
      key.match(/\[\]$/) && elem.value && (key += elem.value),
        ("radio" != elem.type && "checkbox" != elem.type) || elem.checked
          ? (!elem.value && !options) || elem.disabled
            ? ((arr[key] = ""),
              "undefined" != typeof arr[key + ".options"] &&
                delete arr[key + ".options"])
            : ((arr[key] = elem.value),
              options && (arr[key + ".options"] = options))
          : "undefined" != typeof arr[key] && delete arr[key];
    }
  }
  return arr;
}
function setElementValues(arr, htmlCollection) {
  for (var ii = 0; ii < htmlCollection.length; ii++) {
    var elem = htmlCollection[ii],
      options = null;
    if (elem.className) {
      var element_group = elem.className.replace(
        /.*element_group([0-9]+).*/,
        "$1"
      );
      "" != element_group && (element_group += "."),
        (key = element_group + elem.getAttribute("name")),
        elem.className.match(/(^| )cat_data_select($| )/) &&
          (options = arr[key + ".options"]);
    } else key = elem.getAttribute("name");
    key.match(/\[\]$/) && elem.value && (key += elem.value);
    var value = arr[key];
    if ("radio" == elem.type || "checkbox" == elem.type)
      value == elem.value && (elem.checked = !0);
    else if (value || options) {
      if (options) {
        elem.options.length = 0;
        for (var i = 0; i < options.length; i++) elem.options[i] = options[i];
        elem.disabled = !1;
      }
      elem.value = value;
    }
  }
}
function ajax_request(dest, post, callback, params, evaluate, method) {
  var xmlhttp = !1;
  null == method && (method = "POST"),
    "undefined" == typeof evaluate && (evaluate = !0);
  try {
    xmlhttp = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
  } catch (e) {}
  xmlhttp !== !1 &&
    ((xmlhttp.onreadystatechange = function () {
      ajax_callback(callback, params, xmlhttp, evaluate);
    }),
    xmlhttp.open(method, dest, !0),
    xmlhttp.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    ),
    xmlhttp.send(post));
}
function ajax_callback(callback, params, xmlhttp, evaluate) {
  4 == xmlhttp.readyState &&
    (200 == xmlhttp.status && xmlhttp.responseText.indexOf("<!DOCTYPE") < 0
      ? evaluate
        ? callback(eval("(" + xmlhttp.responseText + ")"), xmlhttp, params)
        : callback(xmlhttp.responseText, xmlhttp, params)
      : callback(!1, xmlhttp, params));
}
function setabusereport(url, list_id, abuse_type, lang, category) {
  var xmlhttp = !1,
    reporter_id = getCookie("uid");
  try {
    xmlhttp = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
  } catch (e) {
    return !1;
  }
  xmlhttp.onreadystatechange = function () {
    if (4 == xmlhttp.readyState) {
      var layer = document.getElementById("abuse_wrapper");
      if (
        (sendTealiumTag($("#abuse_wrapper").attr("data-tealium-click-ok"), !1),
        200 == xmlhttp.status && xmlhttp.responseText.indexOf("<!DOCTYPE") < 0)
      ) {
        var newuid = document.getElementById("new_uid");
        if (newuid && reporter_id != newuid.value) {
          var expiration_time = 31536e4;
          setCookie("uid", newuid.value, expiration_time, "/");
        }
        sendTealiumTag($("#abuse_wrapper").attr("data-tealium-view-ok"), !0);
        try {
          var xtcustom = document.getElementById("xtcustom_" + abuse_type)
              .value,
            xtclick = document.getElementById("xtclick_" + abuse_type).value;
          xt_med("C", "", xtclick, "N"), xt_med("F", "", "foo&stc=" + xtcustom);
        } catch (e) {}
        (layer.innerHTML = xmlhttp.responseText),
          $("#darktooltip-abusebutton_link") &&
            $("#darktooltip-abusebutton_link").data("hide-link", "true");
      } else {
        sendTealiumTag($("#abuse_wrapper").attr("data-tealium-view-error"), !0);
        var xtcustom = document.getElementById("xtcustom_error").value,
          xtcustom_var = get_page_custom_variables();
        xt_med("F", "", "foo&stc=" + xtcustom + "&" + xtcustom_var),
          (layer.innerHTML = '<div><span class="error">Error</span></div>');
      }
    }
  };
  var address =
      url +
      "?action=insert&id=" +
      list_id +
      "&abuse_type=" +
      abuse_type +
      "&lang=" +
      lang +
      "&cg=" +
      category,
    reporter_id = getCookie("uid");
  null != reporter_id && (address = address + "&uid=" + reporter_id),
    xmlhttp.open("GET", address, !0),
    xmlhttp.setRequestHeader(
      "If-Modified-Since",
      "Thu, 1 Jan 1970 00:00:00 GMT"
    ),
    xmlhttp.setRequestHeader("Cache-Control", "no-cache, no-store"),
    xmlhttp.setRequestHeader("Pragma", "no-cache"),
    xmlhttp.send(null);
}
function sendAbuseFormErrorXitiTag() {
  var xtcustom = document.getElementById("xtcustom_error").value,
    xtcustom_var = get_page_custom_variables();
  xt_med("F", "", "foo&stc=" + xtcustom + "&" + xtcustom_var);
}
function sendAbuseFormSuccessXitiTag() {
  var xtcustom = document.getElementById("xtcustom_success").value,
    xtcustom_var = get_page_custom_variables();
  xt_med("F", "", "foo&stc=" + xtcustom + "&" + xtcustom_var);
}
function updateabusereport(url, list_id, abuse_type, report_id) {
  var xmlhttp = !1,
    email = document.getElementById("abuse_email").value,
    message = document.getElementById("abuse_message").value;
  if (0 == email.trim().length) {
    var $error_message_box = $("#err_abuse_message"),
      error_message = $error_message_box.data("error-email-missing");
    return (
      $error_message_box.text(error_message),
      $error_message_box.show(),
      sendAbuseFormErrorXitiTag(),
      !1
    );
  }
  if (0 == message.trim().length) {
    var $error_message_box = $("#err_abuse_message"),
      error_message = $error_message_box.data("error-message-missing");
    return (
      $error_message_box.text(error_message),
      $error_message_box.show(),
      sendAbuseFormErrorXitiTag(),
      !1
    );
  }
  var reporter_id = getCookie("uid");
  try {
    xmlhttp = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
  } catch (e) {
    return !1;
  }
  xmlhttp.onreadystatechange = function () {
    if (4 == xmlhttp.readyState) {
      var layer = document.getElementById("reportabuseform");
      if (
        200 == xmlhttp.status &&
        xmlhttp.responseText.indexOf("<!DOCTYPE") < 0
      ) {
        if (
          ((layer.innerHTML = xmlhttp.responseText),
          0 == $(".error-scarface").length)
        ) {
          data = { email: $.trim(email).toLowerCase() };
          try {
            showAbuseThanks(data);
          } catch (e) {}
        }
        var newuid = document.getElementById("new_uid").value;
        if (reporter_id != newuid) {
          var expiration_time = 31536e4;
          setCookie("uid", newuid, expiration_time, "/");
        }
        $("#err_abuse_message").is(":visible")
          ? sendAbuseFormErrorXitiTag()
          : sendAbuseFormSuccessXitiTag();
      } else layer.innerHTML = '<div class="error">Error</div>';
    }
  };
  var category = $("input[data-cg]").data("cg"),
    address =
      url +
      "?action=update&id=" +
      list_id +
      "&abuse_type=" +
      abuse_type +
      "&report_id=" +
      report_id +
      "&cg=" +
      category;
  if (
    ((message = message.replace(/\n/g, "<br>")),
    "" != email && (address += "&email=" + email),
    "" != message &&
      (address += "&abuse_message=" + encodeURIComponent(message)),
    null != reporter_id)
  )
    address += "&uid=" + reporter_id;
  else {
    var newuid = document.getElementById("new_uid").value;
    null != newuid && (address += "&uid=" + newuid);
  }
  xmlhttp.open("GET", address, !0),
    xmlhttp.setRequestHeader(
      "If-Modified-Since",
      "Thu, 1 Jan 1970 00:00:00 GMT"
    ),
    xmlhttp.setRequestHeader("Cache-Control", "no-cache, no-store"),
    xmlhttp.setRequestHeader("Pragma", "no-cache"),
    xmlhttp.send(null);
}
function toggleJobCategories() {
  try {
    (elm = document.getElementById("all_job_cat")),
      "none" == elm.style.display
        ? (elm.style.display = "block")
        : (elm.style.display = "none");
  } catch (e) {}
}
function getValueFromSq(s) {
  var sq_value = getCookie("sq");
  if (sq_value)
    for (var pairs = sq_value.split("&"), j = 0; j < pairs.length; j++)
      if (pairs[j].split("=")[0] == s) return pairs[j].split("=")[1];
  return -1;
}
function getRegionFromSq() {
  var ca_value = getValueFromSq("ca");
  return ca_value != -1 ? ca_value.split("_")[0] : null;
}
function next_image(clicked) {
  if (!images[counter]) return (counter = 1), reset_scrollB(), !1;
  var thumb = document.getElementById("thumb" + counter),
    image = new Image();
  (image.src = image_url + images[counter]),
    counter % scroll_images_visible == 0 &&
      1 == clicked &&
      0 != counter &&
      scroll_right(images.length, 1),
    showLargeImage(image_url + images[counter]),
    thumbnailBorder(thumb, images.length),
    set_alt_title("main_pict"),
    counter++;
}
function reset_scrollB() {
  var image_num = images.length;
  for (i = 0; i < image_num; i++)
    i < scroll_images_visible
      ? (document.getElementById("thumb" + i).className = " ")
      : (document.getElementById("thumb" + i).className = "hidden ");
  showLargeImage(image_url + images[0]),
    thumbnailBorder(document.getElementById("thumb0"), image_num),
    (document.getElementById("arrow_left").style.display = "none"),
    (document.getElementById("arrow_right").style.display = "inline"),
    (counter = 1);
}
function format_phone() {
  var phone = document.getElementById("phone").value,
    phone_rep = phone.replace(/\D/g, "");
  phone_rep.length > 11 && (phone_rep = phone_rep.substring(0, 11)),
    phone_rep != phone && (document.getElementById("phone").value = phone_rep);
}
function addDot(a) {
  var b = "";
  for (i = 0; i < a.length; i++)
    0 != i && i % 3 == a.length % 3
      ? (b = b + "." + a.charAt(i))
      : (b += a.charAt(i));
  return b;
}
function real_format_price(num, noLeftZeros) {
  noLeftZeroes = noLeftZeros || !1;
  var nums,
    str = "";
  if (!isNaN(num))
    return (
      noLeftZeroes && (num = num.replace(/^[0,\.]+/g, "")),
      (str = num + ""),
      (nums = str.split(".")),
      2 == nums.length && nums[1].length <= 2 && (str = str.replace(".", ",")),
      (nums = str.split(",")),
      nums[0].search("\\.") == -1 &&
        ((nums[0] = addDot(nums[0])), (str = nums[0])),
      2 == nums.length && (str = nums[0] + "," + nums[1]),
      str
    );
}
function redirect_to_url(e, args) {
  var eventObj = e;
  if (
    (eventObj || (eventObj = window.event),
    eventObj.preventDefault
      ? eventObj.preventDefault()
      : (eventObj.returnValue = !1),
    navigator.appName.indexOf("Microsoft") > -1)
  ) {
    var referLink = document.createElement("a");
    (referLink.href = args.url),
      document.body.appendChild(referLink),
      referLink.click();
  } else location.href = args.url;
}
function array_unique(t) {
  var i,
    j,
    a = [],
    l = t.length;
  for (i = 0; i < l; i++) {
    for (j = i + 1; j < l; j++) t[i] === t[j] && (j = ++i);
    a.push(t[i]);
  }
  return a;
}
function sort_desc(a, b) {
  return parseInt(b, 10) - parseInt(a, 10);
}
function get_page_custom_variables() {
  for (
    var fs = "",
      amp = "",
      elems = document.getElementsByClassName("error"),
      i = 0;
    i < elems.length;
    i++
  ) {
    var id = elems[i].getAttribute("id"),
      f = elems[i].getAttribute("f");
    f &&
      document.getElementById(id).offsetHeight > 0 &&
      document.getElementById(id).offsetWidth > 0 &&
      ((text = document.getElementById(id).innerHTML),
      (fs = fs + amp + f + "=" + encodeURIComponent(text)),
      (amp = "&"));
  }
  return fs;
}
function selectRegionCommunes(region) {
  region > 0 &&
    (1 == region ? (region = 15) : (region -= 100),
    $.ajax({
      method: "GET",
      url: "/templates/common/communes.html?region=" + region,
      success: function (result, xmlhttp, arg) {
        var $communes = $("#communes_cmn"),
          communes = eval("[" + result + "]"),
          option,
          obj,
          default_option = $communes.find("option").first();
        for (var index in communes)
          for (var key in communes[index])
            (obj = communes[index][key]),
              (option =
                '<option value="' + key + '">' + obj.yapo_name + "</option>"),
              $communes.append(option);
      },
    }));
}
function startpage_set_default_ca(ca, domain, xtn2, region) {
  return (
    setCookie("default_ca", ca, 365, "/", domain, !1),
    xtn2 && region && xt_med("C", xtn2, region, "N"),
    !0
  );
}
var last_clicked_at = 0,
  Base64 = {
    _keyStr:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    isBase64: function (input) {
      return (
        input.length % 4 == 0 &&
        !(input.split(",") || input.split(".") || input.split("%"))
      );
    },
    encode: function (input) {
      var chr1,
        chr2,
        chr3,
        enc1,
        enc2,
        enc3,
        enc4,
        output = "",
        i = 0;
      for (input = Base64._utf8_encode(input); i < input.length; )
        (chr1 = input.charCodeAt(i++)),
          (chr2 = input.charCodeAt(i++)),
          (chr3 = input.charCodeAt(i++)),
          (enc1 = chr1 >> 2),
          (enc2 = ((3 & chr1) << 4) | (chr2 >> 4)),
          (enc3 = ((15 & chr2) << 2) | (chr3 >> 6)),
          (enc4 = 63 & chr3),
          isNaN(chr2) ? (enc3 = enc4 = 64) : isNaN(chr3) && (enc4 = 64),
          (output =
            output +
            this._keyStr.charAt(enc1) +
            this._keyStr.charAt(enc2) +
            this._keyStr.charAt(enc3) +
            this._keyStr.charAt(enc4));
      return output;
    },
    decode: function (input) {
      var chr1,
        chr2,
        chr3,
        enc1,
        enc2,
        enc3,
        enc4,
        output = "",
        i = 0;
      for (input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); i < input.length; )
        (enc1 = this._keyStr.indexOf(input.charAt(i++))),
          (enc2 = this._keyStr.indexOf(input.charAt(i++))),
          (enc3 = this._keyStr.indexOf(input.charAt(i++))),
          (enc4 = this._keyStr.indexOf(input.charAt(i++))),
          (chr1 = (enc1 << 2) | (enc2 >> 4)),
          (chr2 = ((15 & enc2) << 4) | (enc3 >> 2)),
          (chr3 = ((3 & enc3) << 6) | enc4),
          (output += String.fromCharCode(chr1)),
          64 != enc3 && (output += String.fromCharCode(chr2)),
          64 != enc4 && (output += String.fromCharCode(chr3));
      return (output = Base64._utf8_decode(output));
    },
    _utf8_encode: function (string) {
      string = string.replace(/\r\n/g, "\n");
      for (var utftext = "", n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        c < 128
          ? (utftext += String.fromCharCode(c))
          : c > 127 && c < 2048
          ? ((utftext += String.fromCharCode((c >> 6) | 192)),
            (utftext += String.fromCharCode((63 & c) | 128)))
          : ((utftext += String.fromCharCode((c >> 12) | 224)),
            (utftext += String.fromCharCode(((c >> 6) & 63) | 128)),
            (utftext += String.fromCharCode((63 & c) | 128)));
      }
      return utftext;
    },
    _utf8_decode: function (utftext) {
      for (var string = "", i = 0, c = (c1 = c2 = 0); i < utftext.length; )
        (c = utftext.charCodeAt(i)),
          c < 128
            ? ((string += String.fromCharCode(c)), i++)
            : c > 191 && c < 224
            ? ((c2 = utftext.charCodeAt(i + 1)),
              (string += String.fromCharCode(((31 & c) << 6) | (63 & c2))),
              (i += 2))
            : ((c2 = utftext.charCodeAt(i + 1)),
              (c3 = utftext.charCodeAt(i + 2)),
              (string += String.fromCharCode(
                ((15 & c) << 12) | ((63 & c2) << 6) | (63 & c3)
              )),
              (i += 3));
    },
  },
  BrowserDetect = {
    init: function () {
      (this.browser =
        this.searchString(this.dataBrowser) || "An unknown browser"),
        (this.version =
          this.searchVersion(navigator.userAgent) ||
          this.searchVersion(navigator.appVersion) ||
          "an unknown version"),
        (this.OS = this.searchString(this.dataOS) || "an unknown OS");
    },
    searchString: function (data) {
      for (var i = 0; i < data.length; i++) {
        var dataString = data[i].string,
          dataProp = data[i].prop;
        if (
          ((this.versionSearchString =
            data[i].versionSearch || data[i].identity),
          dataString)
        ) {
          if (dataString.indexOf(data[i].subString) != -1)
            return data[i].identity;
        } else if (dataProp) return data[i].identity;
      }
    },
    searchVersion: function (dataString) {
      var index = dataString.indexOf(this.versionSearchString);
      if (index != -1) {
        var version = dataString.substring(
          index + this.versionSearchString.length + 1
        );
        return (
          version.indexOf(" ") > 0 &&
            (version = version.substring(0, version.indexOf(" "))),
          version
        );
      }
    },
    isValid: function (browsers) {
      var i = 0,
        valid = !1;
      for (i = 0; i < browsers.length; i++)
        if (
          browsers[i].agent == this.browser &&
          compare_version(browsers[i].version, this.version) >= 0
        ) {
          valid = !0;
          break;
        }
      return valid;
    },
    dataBrowser: [
      {
        string: navigator.userAgent,
        subString: "OmniWeb",
        versionSearch: "OmniWeb/",
        identity: "OmniWeb",
      },
      { string: navigator.vendor, subString: "Apple", identity: "Safari" },
      { prop: window.opera, identity: "Opera" },
      { prop: window.clientInformation, identity: "Chrome" },
      { string: navigator.vendor, subString: "iCab", identity: "iCab" },
      { string: navigator.vendor, subString: "KDE", identity: "Konqueror" },
      {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox",
      },
      { string: navigator.vendor, subString: "Camino", identity: "Camino" },
      {
        string: navigator.userAgent,
        subString: "Netscape",
        identity: "Netscape",
      },
      {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer",
        versionSearch: "MSIE",
      },
      {
        string: navigator.userAgent,
        subString: "Gecko",
        identity: "Mozilla",
        versionSearch: "rv",
      },
      {
        string: navigator.userAgent,
        subString: "Mozilla",
        identity: "Netscape",
        versionSearch: "Mozilla",
      },
    ],
    dataOS: [
      { string: navigator.platform, subString: "Win", identity: "Windows" },
      { string: navigator.platform, subString: "Mac", identity: "Mac" },
      { string: navigator.platform, subString: "Linux", identity: "Linux" },
    ],
  };
BrowserDetect.init();
var focused = !1,
  newWin;
(ProgressBar.prototype.clear = function () {
  this.progress = [];
  var container = document.getElementById(this.container);
  if (container)
    for (; container.childNodes.length > 0; )
      container.removeChild(container.childNodes[0]);
}),
  (ProgressBar.prototype.update = function (progress, total) {
    if (!this.completed) {
      var id = this.progress.length,
        time = new Date();
      (this.progress[id] = {
        progress: progress,
        total: total,
        time: time.getTime(),
      }),
        (this.completed = progress == total);
    }
  }),
  (ProgressBar.prototype.current = function () {
    var id = this.progress.length;
    if (0 != id) return this.progress[id - 1];
  }),
  (ProgressBar.prototype.procent = function (_id) {
    var progress = this.progress[_id] || this.current();
    return progress && progress.progress
      ? Math.round((progress.progress / progress.total) * 100)
      : 0;
  }),
  (ProgressBar.prototype.speed = function () {
    if (0 != this.progress.length) {
      var start_at =
        this.progress.length -
        Math.floor((this.progress.length * this.SPEED_CALC_LATEST) / 100) -
        1;
      start_at < 0 && (start_at = 0);
      var first = this.progress[start_at],
        current = this.current(),
        current_progress = current.progress - first.progress,
        time = current.time - first.time;
      return current_progress / time;
    }
  }),
  (ProgressBar.prototype.estimate = function () {
    if (!(this.procent() < this.ESTIMATE_MIN_PROGRESS)) {
      var speed = this.speed(),
        progress = this.current(),
        remaining_progress = progress.total - progress.progress,
        remaining_time = Math.round(remaining_progress / speed);
      return remaining_time;
    }
  }),
  (ProgressBar.prototype.draw = function () {
    var container = document.getElementById(this.container);
    if (container) {
      container.style.display = "block";
      var estimate = this.estimate() / 1e3,
        procent = (this.speed(), this.procent());
      if (container.childNodes.length) {
        var progress_bar = container.getElementsByTagName("div")[0],
          progress_cell = container.getElementsByTagName("div")[1];
        progress_cell.style.width =
          Math.round(((progress_bar.offsetWidth - 2) * procent) / 100) + "px";
        var debug = container.getElementsByTagName("div")[2],
          minutes_left = Math.floor(estimate / 60),
          seconds_left = Math.round(estimate - 60 * minutes_left),
          time_left = "";
        minutes_left + seconds_left > 0 &&
          (time_left = js_info.TIME_LEFT + ": "),
          minutes_left > 0 && (time_left += minutes_left + " min "),
          seconds_left > 0 && (time_left += seconds_left + " s"),
          (debug.innerHTML = procent + "%&nbsp;&nbsp;&nbsp;" + time_left);
      }
    }
  }),
  (ProgressBar.prototype.update_draw = function (progress, total) {
    this.completed || (this.update(progress, total), this.draw());
  }),
  document.getElementsByClassName ||
    ((document.getElementsByClassName = function (className) {
      return this.querySelectorAll("." + className);
    }),
    (Element.prototype.getElementsByClassName =
      document.getElementsByClassName)),
  (function () {
    function overRegionName() {
      var $elem = getRegionElement($(this)),
        classes = $elem.attr("class");
      $elem.attr("class", classes + " hover");
    }
    function outRegionName() {
      var $elem = getRegionElement($(this)),
        classes = $elem.attr("class").replace("hover", "");
      $elem.attr("class", classes);
    }
    function clickRegion() {
      var $element = $(this),
        url = $element.attr("href"),
        xtClickName = $element.data("xtclick-name"),
        domain = $element.data("domain"),
        regionOrder = $element.data("region-order");
      xt_med("C", "", xtClickName, "N"),
        startpage_set_default_ca(regionOrder, domain),
        (location.href = url);
    }
    function overRegion() {
      var region = $(this).data("region") + 1;
      $(".region-links li:nth-child(" + region + ")").css(
        "text-decoration",
        "underline"
      );
    }
    function outRegion() {
      var region = $(this).data("region") + 1;
      $(".region-links li:nth-child(" + region + ")").css(
        "text-decoration",
        "none"
      );
    }
    function getRegionElement($element) {
      var region = $element.data("region");
      return $("#r" + region);
    }
    $(document).on("mouseover", ".region-links li", overRegionName),
      $(document).on("mouseout", ".region-links li", outRegionName),
      $(document).on("click", ".region-link", clickRegion),
      $(document).on("mouseover", ".region-link", overRegion),
      $(document).on("mouseout", ".region-link", outRegion);
  })();
/*
page: http://www.yapo.cl/
url: http://www.yapo.cl/js-34719/home.js
*/
