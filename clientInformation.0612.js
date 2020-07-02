var olShowId, o3_timerid, o3_delayid;
var nGlobalIEVersion = window.clientInformation ? 1 : 0;
if (
  nGlobalIEVersion > 0 &&
  String(window.navigator.appVersion).match(/MSIE (\d\.\d)/)
) {
  nGlobalIEVersion = Number(
    String(window.navigator.appVersion).match(/MSIE (\d\.\d)/)[1]
  );
}
function IsPointWithinRect(b, a, c) {
  return b >= c.left && b <= c.right && a >= c.top && a <= c.bottom;
}
function AnyCornerWithinRect(b, a) {
  return (
    IsPointWithinRect(b.left, b.top, a) ||
    IsPointWithinRect(b.left, b.bottom, a) ||
    IsPointWithinRect(b.right, b.top, a) ||
    IsPointWithinRect(b.right, b.bottom, a)
  );
}
function CheckIntersection(d, c, a, b, f, e) {
  if (d >= f && d <= e && b >= c && b <= a) {
    return true;
  }
  return false;
}
function DoesRectangleOverlap(b, a) {
  if (AnyCornerWithinRect(b, a) || AnyCornerWithinRect(a, b)) {
    return true;
  }
  return (
    CheckIntersection(b.left, b.top, b.bottom, a.top, a.left, a.right) ||
    CheckIntersection(b.left, b.top, b.bottom, a.bottom, a.left, a.right) ||
    CheckIntersection(b.right, b.top, b.bottom, a.top, a.left, a.right) ||
    CheckIntersection(b.right, b.top, b.bottom, a.bottom, a.left, a.right) ||
    CheckIntersection(a.left, a.top, a.bottom, b.top, b.left, b.right) ||
    CheckIntersection(a.left, a.top, a.bottom, b.bottom, b.left, b.right) ||
    CheckIntersection(a.right, a.top, a.bottom, b.top, b.left, b.right) ||
    CheckIntersection(a.right, a.top, a.bottom, b.bottom, b.left, b.right)
  );
}
function IsChildOf(c, b) {
  var a = b;
  while (a && a !== c) {
    a = a.parentNode;
  }
  return a === c;
}
function ProcessElement(c, b, e, a) {
  if (!c && a.oHiddenBy === b) {
    a.style.visibility = "visible";
    a.oHiddenBy = null;
  }
  if (c && !a.oHiddenBy) {
    var d = null;
    d = a.getBoundingClientRect();
    d.bottom -= 4;
    if (
      (DoesRectangleOverlap(d, e) || DoesRectangleOverlap(e, d)) &&
      !IsChildOf(b, a)
    ) {
      a.style.visibility = "hidden";
      a.oHiddenBy = b;
    }
  }
}
function AddIFrame(c, a, d) {
  if (a.oShimFrame && typeof a.oShimFrame === "object") {
    document.body.removeChild(a.oShimFrame);
    a.oShimFrame = null;
  }
  if (c) {
    var b = document.createElement("iframe");
    if (document.location.protocol === "https:") {
      b.src = "images/singlepixel.gif";
    } else {
      b.src = "#";
    }
    b.frameBorder = "0";
    b.scrolling = "no";
    b.style.top = d.top + document.body.scrollTop + "px";
    b.style.left = d.left + document.body.scrollLeft + "px";
    b.style.width = d.right - d.left + "px";
    b.style.height = d.bottom - d.top + "px";
    b.style.zIndex = a.currentStyle.zIndex - 1;
    if (b.style.zIndex === -1) {
      b.style.zIndex = 0;
      a.style.zIndex = 1;
    }
    b.style.visibility = "visible";
    b.style.display = "block";
    b.style.position = "absolute";
    b.style.filter =
      "progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)";
    document.body.appendChild(b);
    a.oShimFrame = b;
  }
}
function HideDDLBs(d, e) {
  if (nGlobalIEVersion > 4 && nGlobalIEVersion < 7) {
    var a = {};
    a.top = d.style.pixelTop - document.body.scrollTop;
    a.left = d.style.pixelLeft - document.body.scrollLeft;
    a.bottom = a.top + d.offsetHeight;
    a.right = a.left + d.offsetWidth;
    if (Number(nGlobalIEVersion) === 5) {
      var f = document.getElementsByTagName("IFRAME");
      for (var c = 0; c < f.length; c++) {
        var b = f[c];
        ProcessElement(e, d, a, b);
      }
    } else {
      AddIFrame(e, d, a);
    }
  }
}
function hideObject(b) {
  if (nGlobalIEVersion > 4 && nGlobalIEVersion < 7) {
    HideDDLBs(overDiv, false);
  }
  runHook("hideObject", FBEFORE);
  var a = olNs4 ? b : b.style;
  if (olNs6 && olShowId > 0) {
    clearTimeout(olShowId);
    olShowId = 0;
  }
  a.visibility = "hidden";
  a.top = a.left = (olIe4 && !olOp ? 0 : -10000) + (!olNs4 ? "px" : 0);
  if (o3_timerid > 0) {
    clearTimeout(o3_timerid);
  }
  if (o3_delayid > 0) {
    clearTimeout(o3_delayid);
  }
  o3_timerid = 0;
  o3_delayid = 0;
  self.status = "";
  if (b.onmouseout || b.onmouseover) {
    if (olNs4) {
      b.releaseEvents(Event.MOUSEOUT || Event.MOUSEOVER);
    }
    b.onmouseout = b.onmouseover = null;
  }
  runHook("hideObject", FAFTER);
}
/*
page: http://www.applyonline.com.au/
url: https://www.applyonline.com.au/include/IEDivPopupHelper.js?rev=131491
*/
