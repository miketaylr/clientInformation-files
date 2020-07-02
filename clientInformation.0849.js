/*  */

// define the Util pseudo-namespace
var Util = Util || {};

(function () {
  var global = this;

  function doOpen(url, name, params) {
    var options = {
      toolbar: "yes",
      location: "yes",
      status: "yes",
      menubar: "yes",
      scrollbars: "yes",
      resizable: "yes",
    };
    for (var p in params) {
      options[p] = params[p];
    }
    var aOptions = [];
    for (var p in options) {
      aOptions.push(p + "=" + options[p]);
    }
    var w = window.open(url, name, aOptions.join(","));
    if (typeof w.focus != "undefined") {
      w.focus();
    }
  }

  function getWidth(options) {
    options = options || {};
    var w = options.width;
    if (w && w != 450 && w != 650) {
      throw new Error("help window width must be 450 or 650");
    }
    return w || 650;
  }

  // To open a help popup or tab (depends on browser settings)
  // <a href="/help/mkl.html" onclick="Util.openHelpPopup(this.href);return false;">mkl help</a>
  // can have optional width Util.openHelpPopup(this.href, {width:450})
  Util.openHelpPopup = function (url, options) {
    options = options || {};
    var w = getWidth(options);
    doOpen(url, "help", { height: 650, width: w });
  };

  Util.openPopup = function (url, name, options) {
    options = options || {};
    // next line will check allowed values of width
    var w = getWidth(options);
    doOpen(url, name, options);
  };

  global.pops = function (url, width, height) {
    doOpen(url, "upper", { width: width, height: height });
    return false;
  };
})();

// Used to show and hide an element based on the CSS "display" property.
// There are several ways to use this. If the element is a block-level element
// then only the first parameter is required. If the element is not a block-level
// element then the second parameter is require to specify what display value
// should be toggled. For example,
//
//  <style type="text/css">
//    #two {display: none;}
//  </style>
//
//  <p><a href="#" onclick="Util.toggle('one');return false;">toggle one</a></p>
//  <p id="one" style="display:none">one</p>
//
//  <p onclick="Util.toggle('two');">toggle two</p>
//  <p id="two">two</p>
//
//  <p><span onclick="Util.toggle('three', 'inline')">toggle three</span> <span id="three">three</span></p>
//
Util.toggle = function (el, display) {
  if (typeof el === "string") {
    el = document.getElementById(el);
  }

  var currentDisplay = (function (el) {
    // If the style is inline it is inexpensive to read directly from the style object.
    if (el.style && el.style.display) {
      return el.style.display;
    }

    var dv = document.defaultView,
      cs; // used to hold computed style

    // Try the W3C API as Opera (9?) has broken currentStyle for some properties
    if (dv && dv.getComputedStyle && (cs = dv.getComputedStyle(el, null))) {
      // yes just one equals sign
      if (cs.display) {
        return cs.display;
      }
    }

    // last resort is the IE currentStyle API
    if (el.currentStyle && el.currentStyle.display) {
      return el.currentStyle.display;
    }
  })(el);

  if (currentDisplay === "none") {
    el.style.display = display || "block";
  } else {
    el.style.display = "none";
  }
};

// This function is not for use in new pages. This is only for transition
// from old style POST links until they can be completely eradicated.
//
// The following two links send two parameter-value pairs with the post request.
//
// <a href="#" onclick="Util.postLink('/util/postLink', {paramOne:1, foo:'foo value'});return false;">post link test link</a>
//
// <p onclick="Util.postLink('/util/postLink', {paramOne:1, foo:'three'});">post link test link</p>
//
Util.postLink = function (url, params, target) {
  var form = document.createElement("form");
  form.action = url;
  form.method = "post";
  if (target) {
    form.target = target;
  }

  if (params) {
    for (var name in params) {
      var value = params[name],
        input = document.createElement("input");
      input.name = name;
      input.value = value;
      input.type = "hidden";
      var p = document.createElement("p");
      p.appendChild(input);
      form.appendChild(p);
    }
  }

  document.body.appendChild(form);
  form.submit();
};

// BEGIN bubble help ----------------------------------------------------------

// the link to open the bubble help
// <a href="#sitesellHelp" onclick="showHelpBubble(this);return false;">SiteSell</a>
//
// somewhere else in the page define the bubble help
// <div id="sitesellHelp" class="helpBubbleContent">
//   <p>some content for the bubble help</p>
// </div>
//
// It is possible to control the width of the bubble help by setting the width
// on the element with class="helpBubbleContent" either directly or in a CSS file.
//
(function () {
  var global = this;
  var zIndex = 1000;
  var padding = 50; // pixels
  // The transparent fade borders are borderSize pixels wide
  var borderSize = 40; // pixels

  // -----------------

  // The styles critical to the functioning of the bubble popup widget.
  // The width of the popup can be controlled elsewhere by setting
  // .helpBubbleContent{width:350};
  // or it can be set in the style attribute of the html element for the content
  document.write(
    '<style type="text/css">',
    ".helpBubbleShell {position:absolute;margin:0;padding:" +
      padding +
      "px;overflow:hidden;}",
    ".helpBubbleContent {display:none;}",
    ".helpBubbleShell .helpBubbleContent {display:block;}",
    ".helpBubbleContent {width:350px;}",
    ".closeLink {padding:0;margin:-12px;}",
    "</style>"
  );

  // ------------------

  // IE6 has trouble with png alpha transparency. We need a few lines to workaround the problem
  // using a "filter". When IE6 is finally dead then just "background-image:url(shadow.png);"
  // can be moved to the css file which styles the bubble help

  // See http://groups.google.com/group/comp.lang.javascript/msg/39cb067b6b34a819
  var isWindowsIE5To6 =
    typeof clientInformation == "object" &&
    typeof CollectGarbage == "function" &&
    typeof ActiveXObject == "function" &&
    typeof external == "object" &&
    typeof ScriptEngine == "function" &&
    typeof showModalDialog == "object" &&
    document.documentElement &&
    typeof document.documentElement.currentStyle == "object" &&
    typeof document.documentElement.behaviorUrns == "object" &&
    typeof document.documentElement.filters == "object" &&
    typeof XMLHttpRequest == "undefined";

  var imagePrefix = "/ssimgs/common/bubbleShadow";

  document.write('<style type="text/css">');
  if (isWindowsIE5To6) {
    for (var i = 1; i <= 4; i++) {
      document.write(
        ".helpBubbleShell .IE" +
          i +
          " {filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
          imagePrefix +
          i +
          ".png', sizingMethod='crop');}"
      );
    }
  } else {
    for (var i = 1; i <= 4; i++) {
      document.write(
        ".helpBubbleShell .IE" +
          i +
          " {background-image:url(" +
          imagePrefix +
          i +
          ".png);}"
      );
    }
  }
  document.write("</style>");

  // --------------

  function trimHelpBubbleId(id) {
    return id.replace(/^.*#/, "");
  }

  function findAncestorWithClassName(el, className) {
    var re = new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    while (el) {
      if (el.className && el.className.match(re)) {
        return el;
      }
      el = el.parentNode;
    }
  }

  // id is a string to avoid making
  // IE circular memory leak
  function makeCloseLink(id) {
    return function (e) {
      e = e || event;
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      hideHelpBubble(id);
      return false;
    };
  }

  function getElementPosition(el) {
    var x = 0,
      y = 0;
    for (var e = el; e; e = e.offsetParent) {
      x += e.offsetLeft;
      y += e.offsetTop;
    }
    for (e = el.parentNode; e && e != document.body; e = e.parentNode) {
      if (e.scrollLeft) {
        x -= e.scrollLeft;
      }
      if (e.scrollTop) {
        y -= e.scrollTop;
      }
    }
    return { x: x, y: y };
  }

  // link parameter is the DOM anchor element that has the name of that
  // help bubble as it's href attribute value
  global.showHelpBubble = function (link) {
    var id = trimHelpBubbleId(link.href);
    var el = document.getElementById(id);
    if (!el) {
      return;
    }
    if (findAncestorWithClassName(el, "helpBubbleShell")) {
      hideHelpBubble(id);
    }

    var pos = getElementPosition(link);
    var shell = document.createElement("div");
    var innerShell = document.createElement("div");
    innerShell.style.position = "relative";
    innerShell.style.zIndex = zIndex + 1;
    shell.appendChild(innerShell);

    shell.style.visibility = "hidden";
    shell.className = "helpBubbleShell";

    var closeLinkPara = document.createElement("p");
    closeLinkPara.className = "closeLink";
    var closeLink = document.createElement("a");
    closeLink.href = "#closeHelpBubble";
    closeLink.onclick = makeCloseLink(id);
    closeLink.innerHTML = "close";
    closeLinkPara.appendChild(closeLink);
    innerShell.appendChild(closeLinkPara);

    innerShell.appendChild(el);

    shell.style.zIndex = zIndex;

    // insert at top of page in case the page has not
    // yet finished parsing
    document.body.insertBefore(shell, document.body.firstChild);

    // if the bubble will go above the top of the page then put the bubble below the link
    var fixedShift = 5;
    var fadeShift = 12;
    var top = pos.y - shell.offsetHeight - fixedShift + fadeShift;
    var vside = top < 0 ? "Below" : "Above";
    if (vside == "Above") {
      shell.style.top = top + "px";
    } else {
      shell.style.top =
        pos.y + link.offsetHeight + fixedShift - fadeShift + "px";
    }

    // if the middle of the element is in the left of the viewport then want to show bubble help in right
    var side =
      pos.x + link.offsetWidth / 2 < document.body.offsetWidth / 2
        ? "Right"
        : "Left";
    shell.className += " " + side + vside + "HelpBubble";
    // for a very narrow link, 40 may be too much shift so use 75% of the link's width.
    var fixedShift = Math.min(40, link.offsetWidth * 0.75);
    var shift =
      side == "Left"
        ? fixedShift - shell.offsetWidth
        : link.offsetWidth - fixedShift;
    shell.style.left = pos.x + shift + "px";

    function makeIeElement(top, left, width, height, number) {
      var el1 = document.createElement("div");
      el1.style.width = width + "px";
      el1.style.height = height + "px";
      el1.className = "IE" + number;
      el1.style.position = "absolute";
      el1.style.top = top + "px";
      el1.style.left = left + "px";
      shell.appendChild(el1);
    }

    closeLinkPara.style.width = el.offsetWidth + "px";

    shellWidth = el.offsetWidth + 2 * padding;
    shell.style.width = shellWidth + "px";

    makeIeElement(
      0,
      0,
      shellWidth - borderSize,
      shell.offsetHeight - borderSize,
      1
    );
    makeIeElement(
      shell.offsetHeight - borderSize,
      0,
      shellWidth - borderSize,
      borderSize,
      4
    );
    makeIeElement(
      shell.offsetHeight - borderSize,
      shellWidth - borderSize,
      borderSize,
      borderSize,
      3
    );
    makeIeElement(
      0,
      shellWidth - borderSize,
      borderSize,
      shell.offsetHeight - borderSize,
      2
    );

    shell.style.visibility = "";
    zIndex += 2;
  };

  // id parameter can be the id of the help bubble to hid
  // or it can be an DOM element that is inside the help bubble to close.
  global.hideHelpBubble = function (id) {
    var el;
    if (typeof id == "string") {
      el = document.getElementById(trimHelpBubbleId(id));
    } else {
      // assume a DOM element
      el = findAncestorWithClassName(id, "helpBubbleContent");
    }
    if (!el) {
      return;
    }

    var shell = findAncestorWithClassName(el, "helpBubbleShell");

    document.body.insertBefore(el, document.body.firstChild);
    document.body.removeChild(shell);
  };
})();

// END bubble help ------------------------------------------------------------

/*
page: http://www.sitesell.com/
url: http://www.sitesell.com/ssjs/common/util_DEVELOPMENT.js
*/
