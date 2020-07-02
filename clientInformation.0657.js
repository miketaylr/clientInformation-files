var mobileKeyWords = new Array(
  "iPhone",
  "iPod",
  "iPad",
  "BlackBerry",
  "Android",
  "Windows CE",
  "LG",
  "MOT",
  "SAMSUNG",
  "SonyEricsson",
  "Mobile"
);

var mobileBoolean;

for (var word in mobileKeyWords) {
  //alert(navigator.userAgent.match(mobileKeyWords[word]));

  if (navigator.userAgent.match(mobileKeyWords[word]) != null) {
    //alert(navigator.userAgent.match(mobileKeyWords[word]));

    mobileBoolean = true;

    break;
  } else {
    mobileBoolean = false;
  }
}

//(this.isEventSupported('touchstart'))? mobileBoolean = true : mobileBoolean = false;

if (typeof SHOP_JS == "undefined") {
  // ÇÑ¹ø¸¸ ½ÇÇà

  var SHOP_JS = true;

  // Å«ÀÌ¹ÌÁö Ã¢

  function popup_large_image(it_id, img, width, height, cart_dir) {
    var top = 10;

    var left = 10;

    url = cart_dir + "/largeimage.php?it_id=" + it_id + "&img=" + img;

    width = width + 50;

    height = height + 100;

    opt =
      "scrollbars=yes,width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      top +
      ",left=" +
      left;

    popup_window(url, "largeimage", opt);
  }
}

function show(url, _width, _height) {
  //alert("MobileÁ¢¼Ó"+navigator.userAgent.match(mobileKeyWords[word]));

  if (window.clientInformation.userAgent.indexOf("SV1") > 0) {
    //--WindowXP SP2°¡ ¼³Ä¡µÈ È¯°æ¿¡¼­ÀÇ ¼¼ÆÃÀÔ´Ï´Ù.

    newWin = window.open(
      url,
      "",
      "toolbar=no location=no directories=no status=no menubar=no scrollbars=no resizable=no width=1024 height=768 top=0 left=0"
    );

    newWin.moveTo(0, 0);

    left1 = (screen.availWidth - 1024 - 5) / 2; //--1024X768 ÇØ»óµµ¿¡¼­ÀÇ eBook Popup Ã¢ÀÇ °¡·Î Áß¾Ó À§Ä¡¸¦ ÁöÁ¤.

    top1 = (screen.availHeight - 768 - 10) / 2; //--1024X768 ÇØ»óµµ¿¡¼­ÀÇ eBook Popup Ã¢ÀÇ ¼¼·Î Áß¾Ó À§Ä¡¸¦ ÁöÁ¤.

    //À§ 1024, 768 ÀÇ Á¶Á¤À¸·Î Ã¢ÀÌ ³ªÅ¸³ª´Â À§Ä¡¸¦ Á¶Á¤ÇÒ ¼ö ÀÖ½À´Ï´Ù.

    newWin.resizeTo(1024, 768);

    newWin.moveTo(left1, top1);
  } else {
    //--Windows XP SP2 °¡ ¼³Ä¡µÈ È¯°æÀ» Á¦¿ÜÇÑ È¯°æ

    if (screen.width == _width && screen.height == _height) {
      window.open(url, "", "fullscreen");

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

function openWin2(url) {
  //alert(mobileBoolean)

  if (!mobileBoolean) {
    //alert("MobileÁ¢¼Ó"+navigator.userAgent.match(mobileKeyWords[word]));

    window.open(
      url,
      "NewWindow",
      "left=0, top=0, toolbar=no, location=no, directories=no, status=no, fullscreen=no, menubar=no, scrollbars=no, resizable=yes, width=" +
        eval(screen.availWidth - 10) +
        ", height=" +
        eval(screen.availHeight - 38) +
        ""
    );
  } else {
    //alert("MobileÁ¢¼Ó"+navigator.userAgent.match(mobileKeyWords[word]));

    location.href = url;
  }
}

function openWin3(url) {
  if (!mobileBoolean) {
    window.open(
      url,
      "NewWindow",
      "left=0, top=0, toolbar=no, location=no, directories=no, status=no, fullscreen=no, menubar=no, scrollbars=no, resizable=yes, width=600, height=444"
    );
  } else {
    location.href = url;
  }
}

function openWin4(url) {
  if (!mobileBoolean) {
    window.open(
      url,
      "NewWindow",
      "left=0, top=0, toolbar=no, location=no, directories=no, status=no, fullscreen=no, menubar=no, scrollbars=no, resizable=yes, width=1024, height=768"
    );
  } else {
    location.href = url;
  }
}

function openWin5(url) {
  if (!mobileBoolean) {
    window.open(
      url,
      "NewWindow",
      "left=0, top=0, toolbar=no, location=no, directories=no, status=no, fullscreen=no, menubar=no, scrollbars=no, resizable=yes, width=800, height=" +
        eval(screen.availHeight - 38) +
        ""
    );
  } else {
    location.href = url;
  }
}
/*
page: http://www.ebook.co.kr/
url: http://www.ebook.co.kr/js/shop.js
*/
