function ULSrLq() {
  var o = new Object();
  o.ULSTeamName = "InfoPath Forms Services";
  o.ULSFileName = "core.js";
  return o;
}
function UserAgentInfo() {}
UserAgentInfo.strBrowser = 0;
UserAgentInfo.strBrowserType = 0;
UserAgentInfo.intBrowserRmj = -1;
function CrossBrowserLibrary() {}
CrossBrowserLibrary.GetScrollY = function (c) {
  ULSrLq:;
  var a = 0;
  if (!CurrentFormData_IsV4UI(c)) a = document.body.scrollTop;
  else {
    var b = document.getElementById("s4-workspace");
    if (b == null) a = document.documentElement.scrollTop;
    else a = b.scrollTop;
  }
  return a;
};
CrossBrowserLibrary.GetScrollX = function (b) {
  ULSrLq:;
  var a = 0;
  if (window != null && window.pageXOffset != null) a = window.pageXOffset;
  else if (window != null && window.scrollX != null) a = window.scrollX;
  else if (document.body.scrollTop != null)
    if (!CurrentFormData_IsV4UI(b)) a = document.body.scrollLeft;
    else a = document.documentElement.scrollLeft;
  return a;
};
function CrossBrowserLibrary_GetScrollXRtlIE7(e) {
  ULSrLq:;
  var d = 0;
  if (document.body.scrollTop != null) {
    var b = 0,
      c = 0,
      a = 0;
    if (!CurrentFormData_IsV4UI(e)) {
      b = document.body.scrollWidth;
      c = document.body.scrollLeft;
      a = document.body.clientWidth;
    } else {
      b = document.documentElement.scrollWidth;
      c = document.documentElement.scrollLeft;
      a = document.documentElement.clientWidth;
    }
    d = b - c - a;
  }
  return d;
}
CrossBrowserLibrary.SetScrollY = function (a) {
  ULSrLq:;
  if (window != null && window.scrollY != null) window.scrollY = a;
  else if (document.body.scrollTop != null) document.body.scrollTop = a;
};
CrossBrowserLibrary.SetScrollX = function (a) {
  ULSrLq:;
  if (window != null && window.scrollX != null) window.scrollX = a;
  else if (document.body.scrollTop != null) document.body.scrollLeft = a;
};
CrossBrowserLibrary.SetStyleTop = function (a, b) {
  ULSrLq:;
  if (a.top != null) a.top = b;
  else a.pixelTop = b;
};
function CrossBrowserLibrary_GetEventSourceElement(a) {
  ULSrLq:;
  if (a == null) return null;
  else if (UserAgentInfo.strBrowser == 1) return a.srcElement;
  else return a.target;
}
var _PerfMetrics_boolStarted = false,
  _PerfMetrics_boolUseWss = false;
function PerfMetrics_Start() {
  ULSrLq:;
  if (_PerfMetrics_boolStarted) return;
  _PerfMetrics_boolStarted = true;
  PerfMetrics_CheckUseWss();
  PerfMetrics_Mark(7560);
}
function PerfMetrics_CheckUseWss() {
  ULSrLq:;
  if (typeof CUI != "undefined" && CUI != null && CUI.PMetrics != null)
    _PerfMetrics_boolUseWss = true;
}
function PerfMetrics_Stop() {
  ULSrLq:;
  PerfMetrics_Mark(7561);
}
function FormatThreeDigits(a) {
  ULSrLq:;
  return (a < 10 ? "00" : a < 100 ? "0" : "") + a;
}
function FormatTwoDigits(a) {
  ULSrLq:;
  return (a < 10 ? "0" : "") + a;
}
function DateTime_Format(b) {
  ULSrLq:;
  var a = Array();
  a.push(FormatTwoDigits(b.getMonth() + 1));
  a.push("/");
  a.push(FormatTwoDigits(b.getDate()));
  a.push("/");
  a.push(b.getFullYear());
  a.push(" ");
  a.push(FormatTwoDigits(b.getHours()));
  a.push(":");
  a.push(FormatTwoDigits(b.getMinutes()));
  a.push(":");
  a.push(FormatTwoDigits(b.getSeconds()));
  a.push(".");
  a.push(FormatThreeDigits(b.getMilliseconds()));
  return a.join("");
}
var g_records = [];
function PerfMetrics_Mark(b) {
  ULSrLq:;
  if (_PerfMetrics_boolUseWss) CUI.PMetrics.perfMark(b);
  else {
    var a = {};
    a.m = b;
    a.mt = new Date();
    if (g_records) {
      if (g_records.length == 1e3) g_records = [];
      g_records.push(a);
    }
  }
}
function PerfMetrics_Report() {
  ULSrLq:;
  PerfMetrics_CheckUseWss();
  if (_PerfMetrics_boolUseWss) CUI.PMetrics.perfReport();
  else {
    var a = null,
      b = false;
    if (a == null) {
      a = document.getElementById("perf-markers");
      if (a == null) {
        a = document.createElement("div");
        a.setAttribute("id", "perf-markers");
        a.style.display = "none";
      } else b = true;
    }
    if (!b) {
      var c = null;
      if (
        typeof _InfoPath != "undefined" &&
        typeof _InfoPath.GetFirstControl() == "function"
      )
        c = document.getElementById(_InfoPath.GetFirstControl().strFormId);
      if (c != null) {
        c.appendChild(a);
        b = true;
      }
      if (g_records != null) {
        for (var e = 0; e < g_records.length; e++) {
          var d = g_records[e],
            g = DateTime_Format(d.mt),
            f = document.createElement("p");
          f.innerHTML =
            "<span class='time' ticks='" +
            d.mt.getTime() +
            "'>" +
            g +
            "</span><span class='marker'>" +
            d.m +
            "</span>";
          a.appendChild(f);
        }
        g_records = [];
      }
    }
  }
}
function Util() {}
Util.g_arrImageServerHashes = [];
Util.IsNonEmptyString = Util_IsNonEmptyString;
function Util_IsNonEmptyString(a) {
  ULSrLq:;
  return a != null && a != "";
}
Util.IsNullOrEmptyString = Util_IsNullOrEmptyString;
function Util_IsNullOrEmptyString(a) {
  ULSrLq:;
  return !Util_IsNonEmptyString(a);
}
Util.IsEmptyArray = Util_IsEmptyArray;
function Util_IsEmptyArray(a) {
  ULSrLq:;
  return a.length < 1;
}
Util.StripWhitespace = Util_StripWhitespace;
function Util_StripWhitespace(a) {
  ULSrLq:;
  return a.replace(/^\s*/g, "").replace(/\s*$/g, "");
}
Util.StopEventProprogation = Util_StopEventProprogation;
function Util_StopEventProprogation(a) {
  ULSrLq:;
  if (a != null) {
    if (UserAgentInfo.strBrowser == 1 || UserAgentInfo.strBrowser == 2)
      a.cancelBubble = true;
    else a.stopPropagation();
    a.Canceled = true;
  }
}
function Util_KillEnterEvent(b) {
  ULSrLq:;
  var a = KeyboardService.GetVirtualKey(b);
  if (a == 1 || a == 0 || a == 2) {
    b.returnValue = false;
    Util.StopEventProprogation(b);
    return true;
  }
  return false;
}
Util.EscapeStringForScript = Util_EscapeStringForScript;
function Util_EscapeStringForScript(a) {
  ULSrLq:;
  a = a.replace(/\\/g, "\\\\");
  a = a.replace(/'/g, "\\'");
  a = a.replace(/"/g, '\\"');
  return a;
}
Util.RegExpEscape = RegExpEscape;
function RegExpEscape(c) {
  ULSrLq:;
  for (var d = ".$^{[(|)*+?\\", a = "", b = 0, b = 0; b < c.length; b++) {
    if (d.indexOf(c.charAt(b)) != -1) a = a + "\\";
    a = a + c.charAt(b);
  }
  return a;
}
function Util_HtmlEncodeSpecialValue(b, c) {
  ULSrLq:;
  var a = "";
  switch (c) {
    case 16384:
      a = b;
      break;
    case 49152:
      a = Util_HtmlEncodeAttributeValueUsingEncodings(b);
      break;
    case 114688:
      a = Util_HtmlEncodeInternal(b, Util_HtmlEncodeCharacterWithoutWhitespace);
      break;
    case 245760:
      a = Util_HtmlEncodeInternal(b, Util_HtmlEncodeUsingWhitespace);
  }
  return a;
}
function Util_HtmlEncodeAndQuoteAttributeValue(a) {
  ULSrLq:;
  if (a == null) return null;
  return '"' + Util_HtmlEncodeAttributeValueUsingEncodings(a) + '"';
}
function Util_HtmlEncodeAttributeValue(a) {
  ULSrLq:;
  return Util_HtmlEncodeAttributeValueUsingEncodings(a);
}
var g_Util_HtmlEncodeAttributeValueAllEncodings = new RegExp(
  "[&<>'\"\x0d]",
  "g"
);
function Util_HtmlCharacterAttributeEncodings() {
  ULSrLq:;
  var a = new Array(6);
  a["&amp;"] = new RegExp("&", "g");
  a["&#13;"] = new RegExp("\x0d", "g");
  a["&lt;"] = new RegExp("<", "g");
  a["&gt;"] = new RegExp(">", "g");
  a["&quot;"] = new RegExp('"', "g");
  a["&#39;"] = new RegExp("'", "g");
  return a;
}
var g_arrUtil_HtmlEncodeAttributeValueEncodingREs = Util_HtmlCharacterAttributeEncodings();
function Util_HtmlEncodeAttributeValueUsingEncodings(a) {
  ULSrLq:;
  if (a == null) return null;
  a = a.toString();
  if (g_Util_HtmlEncodeAttributeValueAllEncodings.test(a))
    for (var b in g_arrUtil_HtmlEncodeAttributeValueEncodingREs)
      a = a.replace(g_arrUtil_HtmlEncodeAttributeValueEncodingREs[b], b);
  g_Util_HtmlEncodeAttributeValueAllEncodings.lastIndex = 0;
  return a;
}
function Util_HtmlEncode(a) {
  ULSrLq:;
  return Util_HtmlEncodeInternal(a, Util_HtmlEncodeCharacterWithoutWhitespace);
}
function Util_HtmlEncodeUsingWhitespace(a) {
  ULSrLq:;
  return Util_HtmlEncodeInternal(a, Util_HtmlEncodeCharacterUsingWhitespace);
}
function Util_HtmlEncodeCharacterUsingWhitespace(a) {
  ULSrLq:;
  if (a < "A" || a > "z")
    switch (a) {
      case " ":
        return "&#160;";
      case "\t":
        return "&#09;";
      case "\n":
        return "&#10;";
      case "\r":
        return "&#13;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
    }
  return a;
}
function Util_HtmlEncodeCharacterWithoutWhitespace(a) {
  ULSrLq:;
  if (a < "A" || a > "z")
    switch (a) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
    }
  return a;
}
function Util_HtmlEncodeInternal(b, g) {
  ULSrLq:;
  if (b == null) return null;
  var h = b.length,
    d = [],
    c = 0,
    a = 0,
    e,
    f;
  while (a < h) {
    e = b.charAt(a);
    f = g(e);
    if (f != e) {
      a > c && d.push(b.substring(c, a));
      c = a + 1;
      d.push(f);
    }
    a++;
  }
  if (c == 0) return b;
  else c < a && d.push(b.substring(c));
  return d.join("");
}
Util.SetInnerText = Util_SetInnerText;
function Util_SetInnerText(a, b) {
  ULSrLq:;
  if (a != null) {
    a.innerHTML = "_";
    a.childNodes[0].nodeValue = b;
  }
}
Util.SetInnerHTMLtoNBSP = Util_SetInnerHTMLtoNBSP;
function Util_SetInnerHTMLtoNBSP(a) {
  ULSrLq:;
  if (a != null) a.innerHTML = "&nbsp;";
}
Util.GetInnerText = Util_GetInnerText;
function Util_GetInnerText(a) {
  ULSrLq:;
  if (a != null) if (a.childNodes.length != 0) return a.childNodes[0].nodeValue;
  return "";
}
Util.UnescapeString = Util_UnescapeString;
function Util_UnescapeString(a) {
  ULSrLq:;
  return Util_UnescapeStringEx(a, false);
}
Util.UnescapeStringEx = Util_UnescapeStringEx;
function Util_UnescapeStringEx(a, b) {
  ULSrLq:;
  var e = document.createElement("DIV"),
    c = a;
  if (b) c = a.replace(/\n/g, "__IPFS_BR__");
  try {
    e.innerHTML = c;
  } catch (f) {
    return a;
  }
  var d = e.innerHTML;
  return b ? d.replace(/__IPFS_BR__/g, "\n") : d;
}
Util.FindObjectInArray = Util_FindObjectInArray;
function Util_FindObjectInArray(c, b) {
  ULSrLq:;
  if (c == null || b == null) return -1;
  for (var a = 0; a < b.length; a++) if (b[a] == c) return a;
  return -1;
}
Util.ConvertNewlinesToHtml = Util_ConvertNewlinesToHtml;
function Util_ConvertNewlinesToHtml(c) {
  ULSrLq:;
  var b = new RegExp("\x0a", "g"),
    a = c.replace(b, "<br/>");
  return a;
}
Util.FormatString = Util_FormatString;
function Util_FormatString(d) {
  ULSrLq:;
  var b = Util.FormatString.arguments,
    c = new RegExp("{[0-9]}", "g"),
    a = Util_ReplacePlaceholders(d, c, b);
  return a;
}
function Util_ReplacePlaceholders(a, g, e) {
  ULSrLq:;
  var f = e.length;
  if (a == null) return null;
  var b = a.match(g);
  if (b != null)
    for (var c = 0; c < b.length; c++) {
      var d = b[c].charAt(1) - "0";
      if (d < 0 || d >= f) continue;
      a = a.replace(b[c], e[d + 1]);
    }
  return a;
}
Util.FormatStringEx = Util_FormatStringEx;
function Util_FormatStringEx(a) {
  ULSrLq:;
  var c = Util.FormatStringEx.arguments;
  a = a.replace(new RegExp("%%", "g"), "%");
  var d = [];
  d[0] = "";
  for (var b = 0; b < c.length; b++) d[b + 1] = c[b];
  var e = new RegExp("%[0-9]![ds]!", "g");
  a = Util_ReplacePlaceholders(a, e, [
    null,
    null,
    "{0}",
    "{1}",
    "{2}",
    "{3}",
    "{4}",
    "{5}",
    "{6}",
    "{7}",
    "{8}",
    "{9}",
  ]);
  var e = new RegExp("{[0-9]}", "g"),
    f = Util_ReplacePlaceholders(a, e, c);
  return f;
}
Util.FormatButtonAccelerator = Util_FormatButtonAccelerator;
function Util_FormatButtonAccelerator(a) {
  ULSrLq:;
  return a;
}
Util.GetDataType = Util_GetDataType;
function Util_GetDataType(a) {
  ULSrLq:;
  var b = typeof a;
  switch (b) {
    case "boolean":
      return 4;
    case "function":
      return 5;
    case "number":
      return 1;
    case "object":
      return a.constructor == Array ? 3 : 6;
    case "string":
      return 2;
    default:
      return 0;
  }
}
Util.IsNullOrUndefined = Util_IsNullOrUndefined;
function Util_IsNullOrUndefined(a) {
  ULSrLq:;
  return a == null || Util_GetDataType(a) == 0;
}
Util.Clone = Util_Clone;
function Util_Clone(a) {
  ULSrLq:;
  if (a == null) return a;
  var d = Util_GetDataType(a);
  switch (d) {
    case 3:
      for (var c = [], b = 0; b < a.length; b++) c[b] = Util_Clone(a[b]);
      return c;
    case 2:
      return a;
    case 1:
      return a;
    case 4:
      return a;
    case 5:
      return a;
    default:
      return null;
  }
}
Util.GetPlainTextFromValueObject = Util_GetPlainTextFromValueObject;
function Util_GetPlainTextFromValueObject(a) {
  ULSrLq:;
  if (Util_GetDataType(a) == 3) return a[0];
  else return a;
}
Util.IndexOf = Util_IndexOf;
function Util_IndexOf(b, c) {
  ULSrLq:;
  for (var a = 0; a < b.length; a++) if (b[a] == c) return a;
  return -1;
}
Util.InsertAt = Util_InsertAt;
function Util_InsertAt(a, e, d) {
  ULSrLq:;
  if (d >= a.length) {
    a.push(e);
    return a;
  } else {
    for (var c = [], b = 0; b < a.length; b++) {
      b == d && c.push(e);
      c.push(a[b]);
    }
    return c;
  }
}
Util.RemoveAt = Util_RemoveAt;
function Util_RemoveAt(c, d) {
  ULSrLq:;
  for (var b = [], a = 0; a < c.length; a++) a != d && b.push(c[a]);
  return b;
}
Util.Trim = Util_Trim;
function Util_Trim(a) {
  ULSrLq:;
  if (Util_IsNonEmptyString(a))
    return a.replace(/^\s*/, "").replace(/\s*$/, "");
  return a;
}
Util.SetListValue = Util_SetListValue;
function Util_SetListValue(a, i, g) {
  ULSrLq:;
  for (var h = a.options.length, b = null, d = 0; d < h; d++) {
    var c = a.options[d];
    if (c.value == i)
      if (c.selected) return;
      else if (b == null) b = c;
  }
  if (b != null) b.selected = true;
  else if (g) {
    var e = ViewDataNode_GetViewDataNodeFromHtml(a),
      f = e.SnippetElement;
    if (BaseList.IsDynamic(f)) View_SubmitForm(e.FormId, false, 102, 1, false);
    else a.value = "";
  } else a.value = "";
}
Util.Navigate = Util_Navigate;
function Util_Navigate(a) {
  ULSrLq:;
  if (UserAgentInfo.strBrowser == 1) window.navigate(a);
  else window.location.replace(a);
}
function Util_IsSecureURI(c) {
  ULSrLq:;
  var b = c.toLowerCase(),
    a = true;
  a = a && b.indexOf("javascript:") != 0;
  return a;
}
function Util_IsValidURI(c) {
  ULSrLq:;
  if (typeof g_SharePointAcceptedProtocols == "undefined") {
    g_SharePointAcceptedProtocols = [];
    g_SharePointAcceptedProtocols.push("http://");
    g_SharePointAcceptedProtocols.push("https://");
    g_SharePointAcceptedProtocols.push("file://");
    g_SharePointAcceptedProtocols.push("file:\\\\");
    g_SharePointAcceptedProtocols.push("ftp://");
    g_SharePointAcceptedProtocols.push("mailto:");
    g_SharePointAcceptedProtocols.push("msn:");
    g_SharePointAcceptedProtocols.push("news:");
    g_SharePointAcceptedProtocols.push("nntp:");
    g_SharePointAcceptedProtocols.push("pnm://");
    g_SharePointAcceptedProtocols.push("mms://");
    g_SharePointAcceptedProtocols.push("outlook:");
    g_SharePointAcceptedProtocols.push("rtsp://");
    g_SharePointAcceptedProtocols.push("tel:");
  }
  for (
    var b = c.toLowerCase(), a = 0;
    a < g_SharePointAcceptedProtocols.length;
    a++
  )
    if (Expr_xpath_StartsWith(b, g_SharePointAcceptedProtocols[a])) return true;
  return false;
}
function Util_EnsureTrailingSlash(a) {
  ULSrLq:;
  if (a.length > 0 && a.charAt(a.length - 1) != "/") return a + "/";
  else return a;
}
function Util_IsAlphaChar(a) {
  ULSrLq:;
  return (a >= "A" && a <= "Z") || (a >= "a" && a <= "z");
}
function Util_IsUnreservedChar(a) {
  ULSrLq:;
  return (
    Util_IsAlphaChar(a) ||
    Util_IsDigit(a) ||
    a == "-" ||
    a == "." ||
    a == "_" ||
    a == "~"
  );
}
function Util_IsWhiteSpace(a) {
  ULSrLq:;
  return (
    a == " " || a == "\t" || a == "\n" || a == "\r" || a == "\b" || a == "\f"
  );
}
function Util_IsDigit(a) {
  ULSrLq:;
  return a >= "0" && a <= "9";
}
function Util_DoubleFocus(a) {
  ULSrLq:;
  a.focus();
  a.focus();
}
function Util__FindFirstFocusableHtmlDescendantControl(a) {
  ULSrLq:;
  if (a.tabIndex >= 0) {
    var b = "";
    if (a.tagName != null) b = a.tagName.toLowerCase();
    if (
      (b == "input" && a.getAttribute("type") != "hidden") ||
      b == "select" ||
      b == "button" ||
      b == "a" ||
      b == "textarea"
    )
      return a;
  }
  if (a.childNodes == null || a.childNodes.length == 0) return null;
  for (var c, d, e = 0; e < a.childNodes.length; e++) {
    c = a.childNodes[e];
    d = c.style;
    if (d == null || d.display != "none") {
      var f = Util__FindFirstFocusableHtmlDescendantControl(c);
      if (f != null) return f;
    }
  }
  return null;
}
function Util_FindFirstFocusableHtmlDescendantControl(a) {
  ULSrLq:;
  if (a != null && !Util_IsHidden(a))
    return Util__FindFirstFocusableHtmlDescendantControl(a);
  return null;
}
function Util_IsHidden(a) {
  ULSrLq:;
  var b;
  while (a != null) {
    b = a.style;
    if (b != null && b.display == "none") return true;
    a = a.parentNode;
  }
  return false;
}
Util.CreateObjUnformatResult = Util_CreateObjUnformatResult;
function Util_CreateObjUnformatResult(c, b, d) {
  ULSrLq:;
  var a = {};
  a.strUnformattedValue = b;
  a.boolRespectCSA = d;
  a.strOriginalValue = c;
  return a;
}
Util.CreateObjDateTime = Util_CreateObjDateTime;
function Util_CreateObjDateTime(h, g, i, f, d, e, b, c) {
  ULSrLq:;
  var a = {};
  a.intYear = h;
  a.intMonth = g;
  a.intDay = i;
  a.intHours = f;
  a.intMinutes = d;
  a.intSeconds = e;
  a.intFraction = b;
  a.strTZOffset = c;
  return a;
}
Util.CreateDefaultObjDateTime = Util_CreateDefaultObjDateTime;
function Util_CreateDefaultObjDateTime() {
  ULSrLq:;
  var a = new Date();
  return Util_CreateObjDateTime(
    a.getFullYear(),
    a.getMonth() + 1,
    a.getDate(),
    0,
    0,
    0,
    0,
    ""
  );
}
Util.MergeTimeIntoDateTime = Util_MergeTimeIntoDateTime;
function Util_MergeTimeIntoDateTime(b, a) {
  ULSrLq:;
  a.intHours = b.intHours;
  a.intMinutes = b.intMinutes;
  a.intSeconds = b.intSeconds;
  a.intFraction = b.intFraction;
  a.strTZOffset = Util_GetNewestTimezone(b, a);
}
Util.MergeDateIntoDateTime = Util_MergeDateIntoDateTime;
function Util_MergeDateIntoDateTime(b, a) {
  ULSrLq:;
  a.intMonth = b.intMonth;
  a.intDay = b.intDay;
  a.intYear = b.intYear;
  a.strTZOffset = Util_GetNewestTimezone(b, a);
}
Util.GetNewestTimezone = Util_GetNewestTimezone;
function Util_GetNewestTimezone(b, a) {
  ULSrLq:;
  if (
    Util_GetDataType(a.strTZOffset) == 2 &&
    Util_IsNonEmptyString(a.strTZOffset)
  )
    return a.strTZOffset;
  else if (
    Util_GetDataType(b.strTZOffset) == 2 &&
    Util_IsNonEmptyString(b.strTZOffset)
  )
    return b.strTZOffset;
  return "";
}
var objStandardValues = [
    " ",
    "-",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    ":",
    " ",
    "-",
    ":",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    " ",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "-",
    " ",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    " ",
    " ",
    "-",
    " ",
    "-",
    "-",
    "-",
    ":",
    "-",
    "-",
    ":",
    "-",
    "-",
    "-",
    "/",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    ":",
    -1,
  ],
  strSpecialCharacters =
    " -0123456789:\u00a0\u058a\u05c3\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u09e6\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u0a66\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0ae6\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0b66\u0b67\u0b68\u0b69\u0b6a\u0b6b\u0b6c\u0b6d\u0b6e\u0b6f\u0be6\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0c66\u0c67\u0c68\u0c69\u0c6a\u0c6b\u0c6c\u0c6d\u0c6e\u0c6f\u0ce6\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0d66\u0d67\u0d68\u0d69\u0d6a\u0d6b\u0d6c\u0d6d\u0d6e\u0d6f\u0e50\u0e51\u0e52\u0e53\u0e54\u0e55\u0e56\u0e57\u0e58\u0e59\u0ed0\u0ed1\u0ed2\u0ed3\u0ed4\u0ed5\u0ed6\u0ed7\u0ed8\u0ed9\u0f20\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u1040\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1680\u17e0\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u1806\u180e\u1810\u1811\u1812\u1813\u1814\u1815\u1816\u1817\u1818\u1819\u1946\u1947\u1948\u1949\u194a\u194b\u194c\u194d\u194e\u194f\u19d0\u19d1\u19d2\u19d3\u19d4\u19d5\u19d6\u19d7\u19d8\u19d9\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2010\u2011\u2012\u2013\u2014\u2015\u202f\u205f\u2e17\u3000\u301c\u3030\u30a0\ufe30\ufe31\ufe32\ufe55\ufe58\ufe63\uff0d\uff0f\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19\uff1a";
Util.ReplaceNonLatinDigitsAndPunctuation = Util_ReplaceNonLatinDigitsAndPunctuatio;
function Util_ReplaceNonLatinDigitsAndPunctuatio(e) {
  ULSrLq:;
  for (var d = "", a = 0; a < e.length; a++) {
    var b = e.charAt(a),
      c = strSpecialCharacters.indexOf(b);
    d += c != -1 ? objStandardValues[c].toString() : b;
  }
  return d;
}
Util.FindHashForServerImage = Util_FindHashForServerImage;
function Util_FindHashForServerImage(c) {
  ULSrLq:;
  var a = "";
  if (UserAgentInfo.strBrowser != 2 && document.all != null) {
    a = Util.g_arrImageServerHashes[c];
    if (a == null) {
      var d = document.all.tags("img"),
        e = "?rev=";
      if (d != null)
        for (var f = 0; f < d.length; f++) {
          var b = d[f].getAttribute("src");
          if (b != null) {
            var g = b.indexOf(c + e);
            if (g != -1) {
              a = e + b.substring(g + c.length + e.length, b.length);
              Util.g_arrImageServerHashes[c] = a;
              break;
            }
          }
        }
    }
  }
  return a;
}
function Util_GetWindowQueryParameter(b) {
  ULSrLq:;
  if (window.location != null && window.location.search != null) {
    var a = window.location.search;
    if (a.length > 1) return Util_GetQueryParameter(a, b);
  }
  return null;
}
function Util_GetQueryParameter(d, f) {
  ULSrLq:;
  var e = d.indexOf("?");
  if (e != -1) d = d.substring(e + 1);
  for (var b = d.split("&"), a = 0; a < b.length; a++) {
    var c = b[a].indexOf("=");
    if (c != -1) {
      var g = b[a].substr(0, c);
      if (g.toLowerCase() == f)
        if (c + 1 < b[a].length) return b[a].substr(c + 1, b[a].length);
        else return "";
    }
  }
}
function Util_IsValidXmlString(c) {
  ULSrLq:;
  for (var b = 0; b < c.length; b++) {
    var a = c.charCodeAt(b);
    if (!(a == 9 || a == 10 || a == 13 || (a >= 32 && a <= 65533)))
      return false;
  }
  return true;
}
function Util_SetStyleDisplay(a, b) {
  ULSrLq:;
  if (a != null) a.style.display = b;
}
function Util_GetSpecialValue(a) {
  ULSrLq:;
  return (a | 245760) - 245760;
}
function Util_GetEncodingType(a) {
  ULSrLq:;
  return a - Util_GetSpecialValue(a);
}
function Util_AddTextChangeEventIntoEventLog(f, b, e, g) {
  ULSrLq:;
  var a,
    c = false,
    d = 0,
    h = f.getAttribute("FormId");
  if (b.getFormattingType() != 0) {
    a = b.Unformat(e);
    if (b.getFormattingType() == 1)
      if (b._intCalendar != 1) {
        c = true;
        d = 168;
      } else if (b.ShouldPostBackForTimeZone(a, g)) {
        c = true;
        d = 169;
        a.boolRespectCSA = false;
        a.strUnformattedValue = a.strOriginalValue;
      }
  } else {
    a = Util_CreateObjUnformatResult(e, e, false);
    if (NoFormatting_ShouldPostBackForTimeZone(e, g)) {
      c = true;
      d = 169;
    }
  }
  return EventLog_Add(
    h,
    0,
    f,
    BaseControl_GetOriginalId(f),
    a.boolRespectCSA ? "1" : "0",
    a.strUnformattedValue,
    c,
    false,
    false,
    d,
    1
  );
}
function Util_GetCurrentWidth(a) {
  ULSrLq:;
  if (UserAgentInfo.strBrowser == 1) return a.currentStyle.width;
  else return window.getComputedStyle(a, "").getPropertyValue("width");
}
function Util_SetWrappingSpanHidden(e, b, f, d) {
  ULSrLq:;
  var a = LeafControl_GetWrappingSpan(e);
  if (a != null)
    if (f) {
      if (a.style.display != "none")
        b.preservedWrappingDisplayStyle = a.style.display;
      a.style.display = "none";
    } else {
      var c;
      if (
        b.preservedWrappingDisplayStyle != null &&
        typeof b.preservedWrappingDisplayStyle != "undefined"
      )
        c = b.preservedWrappingDisplayStyle;
      else c = d;
      a.style.display = c;
    }
}
function Util_GetRecycleBinEnabledFlag(c, b) {
  ULSrLq:;
  try {
    Dialog_ShowModalDialog(c, "Progress", null, null);
    var a = function () {
      ULSrLq:;
      Util_GetRecycleBinEnabledAsync(b);
    };
    if (typeof SP != "undefined")
      EnsureScript("SP.js", typeof SP.ClientContext, a);
    else EnsureScript("SP.js", typeof SP, a);
  } catch (d) {
    Util_GetRecycleBinEnabledCallback(false, b);
  }
}
function Util_GetRecycleBinEnabledAsync(a) {
  ULSrLq:;
  try {
    var b = SP.ClientContext.get_current(),
      c = b.get_web();
    c.retrieve("RecycleBinEnabled");
    b.executeQueryAsync(
      function () {
        ULSrLq:;
        Util_GetRecycleBinEnabledCallback(true, a);
      },
      function () {
        ULSrLq:;
        Util_GetRecycleBinEnabledCallback(false, a);
      }
    );
  } catch (d) {
    Dialog_HideDialog();
  }
}
function Util_GetRecycleBinEnabledCallback(c, b) {
  ULSrLq:;
  Dialog_HideDialog();
  var a = false;
  if (c) {
    var d = SP.ClientContext.get_current(),
      e = d.get_web();
    a = e.get_recycleBinEnabled();
  }
  b(a);
}
function Perf_Start_Trace(a) {
  ULSrLq:;
  PerfMetrics_Start();
  PerfMetrics_Mark(a);
}
function Perf_End_Trace(a) {
  ULSrLq:;
  PerfMetrics_Start();
  PerfMetrics_Mark(a);
}
function PerfMarker(a) {
  ULSrLq:;
  PerfMetrics_Start();
  PerfMetrics_Mark(a);
}
LoadedScriptFiles.boolCoreLoaded = false;
LoadedScriptFiles.boolIntlCoreStringsLoaded = false;
LoadedScriptFiles.boolServerError = false;
LoadedScriptFiles.DetectAllScriptsLoaded = LoadedScriptFiles_DetectAllScriptsLoaded;
function LoadedScriptFiles_DetectAllScriptsLoaded(b, a) {
  ULSrLq:;
  if (
    b &&
    (typeof g_objSnippetTree == "undefined" ||
      typeof g_objSnippetTree[a] == "undefined") &&
    (CurrentFormData_GetCurrentFormData(a) == null ||
      CurrentFormData_UserMessages(a).length == 0)
  )
    return false;
  return (
    LoadedScriptFiles.boolCoreLoaded &&
    LoadedScriptFiles.boolIntlCoreStringsLoaded &&
    !LoadedScriptFiles.boolServerError
  );
  return true;
}
function XsdDatatype(a) {
  ULSrLq:;
  if (!(XsdDatatype.prototype instanceof XsdDatatypeTraits)) {
    XsdDatatype.prototype = new XsdDatatypeTraits();
    XsdDatatype.prototype.constructor = XsdDatatype;
    return new XsdDatatype(a);
  }
  this._objDatatype = a[0];
  this._arrConfiguration = a[1];
}
XsdDatatype.k_intValidityUnknown = -1;
XsdDatatype.k_intInvalid = 0;
XsdDatatype.k_intValid = 1;
function XsdDatatypeTraits() {
  ULSrLq:;
  this.GetErrorMessages = function () {
    ULSrLq:;
    return this._LookUpErrorMessages(this._arrConfiguration[1]);
  };
  this._LookUpErrorMessages = function (b) {
    ULSrLq:;
    var a = null;
    b = b.toLowerCase();
    switch (b) {
      case "boolean":
        a = [IntlCoreStrings.k_strValidationBooleanShort, ""];
        break;
      case "byte":
        a = [
          IntlCoreStrings.k_strValidationByteShort,
          IntlCoreStrings.k_strValidationByteLong,
        ];
        break;
      case "date":
        a = [IntlCoreStrings.k_strValidationDateShort, ""];
        break;
      case "datetime":
        a = [IntlCoreStrings.k_strValidationDateTimeShort, ""];
        break;
      case "decimal":
        a = [IntlCoreStrings.k_strValidationDecimalShort, ""];
        break;
      case "double":
        a = [IntlCoreStrings.k_strValidationDoubleShort, ""];
        break;
      case "float":
        a = [IntlCoreStrings.k_strValidationFloatShort, ""];
        break;
      case "integer":
        a = [IntlCoreStrings.k_strValidationIntegerShort, ""];
        break;
      case "int":
        a = [
          IntlCoreStrings.k_strValidationIntShort,
          IntlCoreStrings.k_strValidationIntLong,
        ];
        break;
      case "long":
        a = [
          IntlCoreStrings.k_strValidationLongShort,
          IntlCoreStrings.k_strValidationLongLong,
        ];
        break;
      case "negativeinteger":
        a = [IntlCoreStrings.k_strValidationNegativeIntegerShort, ""];
        break;
      case "nonnegativeinteger":
        a = [IntlCoreStrings.k_strValidationNonNegativeIntegerShort, ""];
        break;
      case "nonpositiveinteger":
        a = [IntlCoreStrings.k_strValidationNonPositiveIntegerShort, ""];
        break;
      case "positiveinteger":
        a = [IntlCoreStrings.k_strValidationPositiveIntegerShort, ""];
        break;
      case "unsignedbyte":
        a = [
          IntlCoreStrings.k_strValidationUnsignedByteShort,
          IntlCoreStrings.k_strValidationUnsignedByteLong,
        ];
        break;
      case "unsignedint":
        a = [
          IntlCoreStrings.k_strValidationUnsignedIntShort,
          IntlCoreStrings.k_strValidationUnsignedIntLong,
        ];
        break;
      case "unsignedlong":
        a = [
          IntlCoreStrings.k_strValidationUnsignedLongShort,
          IntlCoreStrings.k_strValidationUnsignedLongLong,
        ];
        break;
      case "unsignedshort":
        a = [
          IntlCoreStrings.k_strValidationUnsignedShortShort,
          IntlCoreStrings.k_strValidationUnsignedShortLong,
        ];
        break;
      case "short":
        a = [
          IntlCoreStrings.k_strValidationShortShort,
          IntlCoreStrings.k_strValidationShortLong,
        ];
        break;
      case "time":
        a = [IntlCoreStrings.k_strValidationTimeShort, ""];
        break;
      case "entity":
      case "id":
      case "idref":
      case "language":
      case "ncname":
      case "name":
      case "nmtoken":
      case "normalizedstring":
      case "string":
      case "token":
        a = ["", ""];
        break;
      case "anysimpletype":
      case "anyuri":
      case "base64binary":
      case "duration":
      case "gday":
      case "gmonth":
      case "gmonthday":
      case "gyear":
      case "gyearmonth":
      case "hexbinary":
      case "notation":
      case "qname":
        a = ["", ""];
        break;
      default:
        a = null;
    }
    return a;
  };
  this.IsValid = function (a) {
    ULSrLq:;
    return this._objDatatype.IsValidEx(this._arrConfiguration, a);
  };
  this.IsNillable = function () {
    ULSrLq:;
    return this._arrConfiguration[0];
  };
  this.GetUnderlyingDatatype = function () {
    ULSrLq:;
    return this._objDatatype;
  };
  this.GetDefaultValue = function () {
    ULSrLq:;
    return this._arrConfiguration[2];
  };
}
function AssumedValidDatatype() {}
AssumedValidDatatype.IsValidEx = function (b, a) {
  ULSrLq:;
  return AssumedValidDatatype.IsValid(a);
};
AssumedValidDatatype.IsValid = function () {
  ULSrLq:;
  return true;
};
AssumedValidDatatype.Compare = function (a, b) {
  ULSrLq:;
  return a == b;
};
function StringXsdDatatype() {}
StringXsdDatatype.IsValidEx = function (c, b) {
  ULSrLq:;
  var a;
  a = c[0];
  if (a && Util.IsNullOrEmptyString(b)) return true;
  return StringXsdDatatype.IsValid(b);
};
StringXsdDatatype.IsValid = function () {
  ULSrLq:;
  return true;
};
StringXsdDatatype.Compare = function (a, b) {
  ULSrLq:;
  return a == b;
};
function IntegerXsdDatatype() {}
IntegerXsdDatatype.IsValidEx = function (c, b) {
  ULSrLq:;
  var a;
  a = c[0];
  if (a && Util.IsNullOrEmptyString(b)) return true;
  return IntegerXsdDatatype.IsValid(b);
};
IntegerXsdDatatype.IsValid = function (b) {
  ULSrLq:;
  var a;
  a = new RegExp("^\\s*(?:\\+|-)?[0-9]+\\s*$");
  return a.test(b);
};
IntegerXsdDatatype.Compare = function (a, b) {
  ULSrLq:;
  return DoubleXsdDatatype.Compare(a, b);
};
function DecimalXsdDatatype() {}
DecimalXsdDatatype.IsValidEx = function (c, b) {
  ULSrLq:;
  var a;
  a = c[0];
  if (a && Util.IsNullOrEmptyString(b)) return true;
  return DecimalXsdDatatype.IsValid(b);
};
DecimalXsdDatatype.IsValid = function (b) {
  ULSrLq:;
  var a;
  a = new RegExp(
    "^\\s*(?:\\+|-)?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))\\s*$"
  );
  return a.test(b);
};
DecimalXsdDatatype.Compare = function (a, b) {
  ULSrLq:;
  return DoubleXsdDatatype.Compare(a, b);
};
function DoubleXsdDatatype() {}
DoubleXsdDatatype.IsValidEx = function (c, b) {
  ULSrLq:;
  var a;
  a = c[0];
  if (a && Util.IsNullOrEmptyString(b)) return true;
  return DoubleXsdDatatype.IsValid(b);
};
DoubleXsdDatatype.IsValid = function (i) {
  ULSrLq:;
  var j, b;
  j = new RegExp(
    "^\\s*(?:(?:\\+|-)?(?:(?:([0-9]+)(?:\\.([0-9]+))?)|(?:\\.([0-9]+)))(?:[eE](?:(\\+|-))?([0-9]+))?)\\s*$"
  );
  b = j.exec(i);
  if (b != null) {
    var k = -324,
      l = 308,
      e,
      c,
      a,
      d,
      h,
      g;
    a = b[1];
    d = Util.IsNonEmptyString(b[2]) ? b[2] : b[3];
    h = b[4];
    g = b[5];
    if (Util.GetDataType(a) != 2) a = "";
    if (Util.GetDataType(d) != 2) d = "";
    if (Util.GetDataType(h) != 2) h = "";
    if (Util.GetDataType(g) != 2) g = "";
    e = a.length - 1;
    for (var f = 0; f < a.length; f++) {
      if (a.charAt(f) != "0") break;
      e--;
    }
    if (e == 0 && a.charAt(a.length - 1) == "0") {
      e = -d.length;
      for (var f = d.length - 1; f >= 0; f--) {
        if (d.charAt(f) != "0") break;
        e++;
      }
    }
    c = 0;
    if (Util.IsNonEmptyString(g)) {
      try {
        c = parseInt(g, 10);
      } catch (m) {
        return false;
      }
      if (h == "-") c = -c;
    }
    c += e;
    return k < c && c < l;
  } else if (new RegExp("^-?INF|NaN$").test(i)) return true;
  return false;
};
DoubleXsdDatatype.Compare = function (a, b) {
  ULSrLq:;
  var c = parseFloat(a),
    d = parseFloat(b);
  if (c == NaN || d == NaN) return a == b;
  else return c == d;
};
function BooleanXsdDatatype() {}
BooleanXsdDatatype.IsValidEx = function (c, b) {
  ULSrLq:;
  var a;
  a = c[0];
  if (a && Util.IsNullOrEmptyString(b)) return true;
  return BooleanXsdDatatype.IsValid(b);
};
BooleanXsdDatatype.IsValid = function (b) {
  ULSrLq:;
  var a;
  a = new RegExp("^\\s*(?:true|false|1|0)\\s*$");
  return a.test(b);
};
BooleanXsdDatatype.Compare = function (a, b) {
  ULSrLq:;
  var c = a == "1" || a == "true",
    d = b == "1" || b == "true";
  return c == d;
};
function DateXsdDatatype() {}
DateXsdDatatype.IsValidEx = function (c, b) {
  ULSrLq:;
  var a;
  a = c[0];
  if (a && Util.IsNullOrEmptyString(b)) return true;
  return DateXsdDatatype.IsValid(b);
};
DateXsdDatatype.IsValid = function (g) {
  ULSrLq:;
  var f,
    a,
    d = -1,
    b = -1,
    e = -1,
    c = "";
  f = new RegExp("^\\s*-?(\\d{4})-(\\d{2})-(\\d{2})(.*)\\s*$");
  a = f.exec(g);
  if (a == null) return false;
  d = parseInt(a[1], 10);
  b = parseInt(a[2], 10);
  e = parseInt(a[3], 10);
  c = a[4];
  if (c != "" && !DateUtils.IsValidTimeZone(c)) return false;
  if (d == 0) return false;
  if (b < 1 || b > 12) return false;
  if (e < 1 || e > DateUtils.GetNumDaysInMonth(d, b)) return false;
  return true;
};
DateXsdDatatype.Compare = function (a, b) {
  ULSrLq:;
  return a == b;
};
function TimeXsdDatatype() {}
TimeXsdDatatype.IsValidEx = function (c, b) {
  ULSrLq:;
  var a;
  a = c[0];
  if (a && Util.IsNullOrEmptyString(b)) return true;
  return TimeXsdDatatype.IsValid(b);
};
TimeXsdDatatype.IsValid = function (h) {
  ULSrLq:;
  var f,
    a,
    e = -1,
    c = -1,
    d = -1,
    g = "",
    b = "";
  f = new RegExp("^\\s*(\\d{2}):(\\d{2}):(\\d{2})(?:\\.(\\d+))?(.*)\\s*$");
  a = f.exec(h);
  if (a == null) return false;
  e = parseInt(a[1], 10);
  c = parseInt(a[2], 10);
  d = parseInt(a[3], 10);
  g = a[4];
  b = a[5];
  if (b != "" && !DateUtils.IsValidTimeZone(b)) return false;
  if (e < 0 || e > 23) return false;
  if (c < 0 || c > 59) return false;
  if (d < 0 || d > 59) return false;
  return true;
};
TimeXsdDatatype.Compare = function (a, b) {
  ULSrLq:;
  return a == b;
};
function DateTimeXsdDatatype() {}
DateTimeXsdDatatype.IsValidEx = function (c, b) {
  ULSrLq:;
  var a;
  a = c[0];
  if (a && Util.IsNullOrEmptyString(b)) return true;
  return DateTimeXsdDatatype.IsValid(b);
};
DateTimeXsdDatatype.IsValid = function (c) {
  ULSrLq:;
  var b, a;
  b = new RegExp("^\\s*((?:[0-9]|-)+)T((?:[0-9]|[-\\+]|[\\.:Z])+)\\s*$");
  a = b.exec(c);
  if (a == null) return false;
  return DateXsdDatatype.IsValid(a[1]) && TimeXsdDatatype.IsValid(a[2]);
};
DateTimeXsdDatatype.Compare = function (a, b) {
  ULSrLq:;
  return a == b;
};
function XsdFacets(a) {
  ULSrLq:;
  if (!(XsdFacets.prototype instanceof XsdFacetsTraits)) {
    XsdFacets.prototype = new XsdFacetsTraits();
    XsdFacets.prototype.constructor = XsdFacets;
    return new XsdFacets(a);
  }
  this._arrFacetsInformation = a;
  this._arrInvalidFacetInformation = null;
}
function XsdFacetsTraits() {
  ULSrLq:;
  this.GetErrorMessages = function (a) {
    ULSrLq:;
    if (this._arrInvalidFacetInformation != null)
      return this._arrInvalidFacetInformation[0].GetErrorMessages(
        this._arrInvalidFacetInformation[1],
        a
      );
    return ["", ""];
  };
  this.IsValid = function (b, c) {
    ULSrLq:;
    this._strScreenTip = "";
    for (var d in this._arrFacetsInformation) {
      var a = this._arrFacetsInformation[d];
      if (!a[0].IsValid(a[1], b, c)) {
        this._arrInvalidFacetInformation = a;
        return false;
      }
    }
    return true;
  };
}
function MinLengthXsdFacet() {}
MinLengthXsdFacet.GetErrorMessages = function (c) {
  ULSrLq:;
  var a = [],
    b = c[0];
  if (b == 1) a.push(IntlCoreStrings.k_strValidationMinLengthIsOneShort);
  else
    a.push(
      Util.FormatStringEx(
        IntlCoreStrings.k_strValidationMinLengthShortFormat,
        "",
        "",
        b
      )
    );
  a.push("");
  return a;
};
MinLengthXsdFacet.IsValid = function (a, g, d) {
  ULSrLq:;
  var b = parseInt(a[0], 10),
    f = parseInt(a[1], 10) == 1;
  if (f) {
    var c = d.match(/[^\s]+/g),
      e = c == null ? 0 : c.length;
    return e >= b;
  } else return d.length >= b;
};
function MaxLengthXsdFacet() {}
MaxLengthXsdFacet.GetErrorMessages = function (b) {
  ULSrLq:;
  var a = [],
    c = b[0];
  a.push(
    Util.FormatStringEx(
      IntlCoreStrings.k_strValidationMaxLengthShortFormat,
      "",
      "",
      c
    )
  );
  a.push("");
  return a;
};
MaxLengthXsdFacet.IsValid = function (a, g, d) {
  ULSrLq:;
  var b = parseInt(a[0], 10),
    f = parseInt(a[1], 10) == 1;
  if (f) {
    var c = d.match(/[^\s]+/g),
      e = c == null ? 0 : c.length;
    return e <= b;
  } else return d.length <= b;
};
function LengthXsdFacet() {}
LengthXsdFacet.GetErrorMessages = function (b) {
  ULSrLq:;
  var a = [],
    c = b[0];
  a.push(
    Util.FormatStringEx(
      IntlCoreStrings.k_strValidationLengthShortFormat,
      "",
      "",
      c
    )
  );
  a.push("");
  return a;
};
LengthXsdFacet.IsValid = function (a, d, c) {
  ULSrLq:;
  var b = parseInt(a[0], 10);
  return c.length == b;
};
function PatternXsdFacet() {}
PatternXsdFacet.GetErrorMessages = function (a) {
  ULSrLq:;
  var c = [],
    d;
  d = a[0][0];
  for (var b = 1; b < a[0].length; b++) d += "|" + a[0][b];
  c.push(IntlCoreStrings.k_strValidationPatternShort);
  c.push(
    Util.FormatStringEx(
      IntlCoreStrings.k_strValidationPatternLongFormat,
      "",
      "",
      d
    )
  );
  return c;
};
PatternXsdFacet.IsValid = function (c, g, f) {
  ULSrLq:;
  var a = true;
  for (var d in c) {
    var b = false;
    for (var e in c[d]) {
      b = b || Expr.xdUtil_Match(f, c[d][e]);
      if (b) break;
    }
    a = a && b;
    if (!a) break;
  }
  return a;
};
function EnumerationXsdFacet() {}
EnumerationXsdFacet.GetErrorMessages = function (b) {
  ULSrLq:;
  var a = [],
    d = "",
    c;
  a.push(IntlCoreStrings.k_strValidationEnumerationShort);
  for (var f in b) {
    var e = b[f];
    d += "\n" + e;
  }
  c = IntlCoreStrings.k_strValidationEnumerationLongFormat.replace(
    new RegExp("%1!e!", "g"),
    "%1!s!"
  );
  a.push(Util.FormatStringEx(c, d));
  return a;
};
EnumerationXsdFacet.IsValid = function (c, b, e) {
  ULSrLq:;
  var a;
  if (b == null || b._objDatatype == null || b._objDatatype.Compare == null)
    a = null;
  else a = b._objDatatype;
  for (var f in c) {
    var d = c[f];
    if (a != null) {
      if (a.Compare(e, d)) return true;
    } else if (e == d) return true;
  }
  return false;
};
function MaxInclusiveXsdFacet() {}
MaxInclusiveXsdFacet.GetErrorMessages = function (d, e) {
  ULSrLq:;
  var a = [],
    c = d[0],
    b = null;
  switch (e.GetUnderlyingDatatype()) {
    case IntegerXsdDatatype:
      b = parseInt(c, 10);
    case DoubleXsdDatatype:
    case DecimalXsdDatatype:
      b = parseFloat(c);
  }
  if (b == -1)
    a.push(IntlCoreStrings.k_strValidationMaxInclusiveIsNegativeOneShort);
  else if (b == 0)
    a.push(IntlCoreStrings.k_strValidationMaxInclusiveIsZeroShort);
  else
    a.push(
      Util.FormatStringEx(
        IntlCoreStrings.k_strValidationMaxInclusiveShortFormat,
        "",
        "",
        c
      )
    );
  a.push("");
  return a;
};
MaxInclusiveXsdFacet.IsValid = function (c, d, b) {
  ULSrLq:;
  var a = c[0];
  switch (d.GetUnderlyingDatatype()) {
    case IntegerXsdDatatype:
      return parseInt(b, 10) <= parseInt(a, 10);
    case DoubleXsdDatatype:
    case DecimalXsdDatatype:
      return parseFloat(b) <= parseFloat(a);
    case DateXsdDatatype:
    case DateTimeXsdDatatype:
    case TimeXsdDatatype:
      return b <= a;
  }
  return true;
};
function MaxExclusiveXsdFacet() {}
MaxExclusiveXsdFacet.GetErrorMessages = function (d, e) {
  ULSrLq:;
  var a = [],
    b = d[0],
    c = null;
  switch (e.GetUnderlyingDatatype()) {
    case IntegerXsdDatatype:
      c = parseInt(b, 10);
    case DoubleXsdDatatype:
    case DecimalXsdDatatype:
      c = parseFloat(b);
  }
  if (c == 0) a.push(IntlCoreStrings.k_strValidationMaxExclusiveIsZeroShort);
  else
    a.push(
      Util.FormatStringEx(
        IntlCoreStrings.k_strValidationMaxExclusiveShortFormat,
        "",
        "",
        b
      )
    );
  a.push("");
  return a;
};
MaxExclusiveXsdFacet.IsValid = function (c, d, b) {
  ULSrLq:;
  var a = c[0];
  switch (d.GetUnderlyingDatatype()) {
    case IntegerXsdDatatype:
      return parseInt(b, 10) < parseInt(a, 10);
    case DoubleXsdDatatype:
    case DecimalXsdDatatype:
      return parseFloat(b) < parseFloat(a);
    case DateXsdDatatype:
    case DateTimeXsdDatatype:
    case TimeXsdDatatype:
      return b < a;
  }
  return true;
};
function MinExclusiveXsdFacet() {}
MinExclusiveXsdFacet.GetErrorMessages = function (d, e) {
  ULSrLq:;
  var a = [],
    b = d[0],
    c = null;
  switch (e.GetUnderlyingDatatype()) {
    case IntegerXsdDatatype:
      c = parseInt(b, 10);
    case DoubleXsdDatatype:
    case DecimalXsdDatatype:
      c = parseFloat(b);
  }
  if (c == 0) a.push(IntlCoreStrings.k_strValidationMinExclusiveIsZeroShort);
  else
    a.push(
      Util.FormatStringEx(
        IntlCoreStrings.k_strValidationMinExclusiveShortFormat,
        "",
        "",
        b
      )
    );
  a.push("");
  return a;
};
MinExclusiveXsdFacet.IsValid = function (c, d, b) {
  ULSrLq:;
  var a = c[0];
  switch (d.GetUnderlyingDatatype()) {
    case IntegerXsdDatatype:
      return parseInt(b, 10) > parseInt(a, 10);
    case DoubleXsdDatatype:
    case DecimalXsdDatatype:
      return parseFloat(b) > parseFloat(a);
    case DateXsdDatatype:
    case DateTimeXsdDatatype:
    case TimeXsdDatatype:
      return b > a;
  }
  return true;
};
function MinInclusiveXsdFacet() {}
MinInclusiveXsdFacet.GetErrorMessages = function (d, e) {
  ULSrLq:;
  var a = [],
    c = d[0],
    b = null;
  switch (e.GetUnderlyingDatatype()) {
    case IntegerXsdDatatype:
      b = parseInt(c, 10);
    case DoubleXsdDatatype:
    case DecimalXsdDatatype:
      b = parseFloat(c);
  }
  if (b == 0) a.push(IntlCoreStrings.k_strValidationMinInclusiveIsZeroShort);
  else if (b == 1)
    a.push(IntlCoreStrings.k_strValidationMinInclusiveIsOneShort);
  else
    a.push(
      Util.FormatStringEx(
        IntlCoreStrings.k_strValidationMinInclusiveShortFormat,
        "",
        "",
        c
      )
    );
  a.push("");
  return a;
};
MinInclusiveXsdFacet.IsValid = function (c, d, b) {
  ULSrLq:;
  var a = c[0];
  switch (d.GetUnderlyingDatatype()) {
    case IntegerXsdDatatype:
      return parseInt(b, 10) >= parseInt(a, 10);
    case DoubleXsdDatatype:
    case DecimalXsdDatatype:
      return parseFloat(b) >= parseFloat(a);
    case DateXsdDatatype:
    case DateTimeXsdDatatype:
    case TimeXsdDatatype:
      return b >= a;
  }
  return true;
};
function DateUtils() {}
DateUtils.k_strISODatePart = "(-?[0-9]{4})-(0[1-9]|1[0-2])-([0-2][0-9]|3[01])";
DateUtils.k_strISOTimePart =
  "([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])(?:\\.([0-9]+))?";
DateUtils.k_strISOZonePart = "(Z|[-\\+](?:(?:0[0-9]|1[0-3]):[0-5][0-9])|14:00)";
DateUtils.k_objREIsoDate = new RegExp(
  "^" + DateUtils.k_strISODatePart + DateUtils.k_strISOZonePart + "?$"
);
DateUtils.k_objREIsoTime = new RegExp(
  "^" + DateUtils.k_strISOTimePart + DateUtils.k_strISOZonePart + "?$"
);
DateUtils.k_objREIsoDateTime = new RegExp(
  "^" +
    DateUtils.k_strISODatePart +
    "T" +
    DateUtils.k_strISOTimePart +
    DateUtils.k_strISOZonePart +
    "?$"
);
DateUtils.k_objREIsoTimeZone = new RegExp(
  "^" + DateUtils.k_strISOZonePart + "$"
);
DateUtils.IsValidTimeZone = function (b) {
  ULSrLq:;
  var a = DateUtils.k_objREIsoTimeZone.exec(b);
  return a != null;
};
DateUtils.GetMonthAsLongTextual = function (a, b, c) {
  ULSrLq:;
  if (c) return a.k_objMonthGenitiveNames[b.intMonth - 1];
  else return a.k_objNamesOfMonths[b.intMonth - 1];
};
DateUtils.GetMonthAsShortTextual = function (a, b, c) {
  ULSrLq:;
  if (c) return a.k_objAbbrevMonthGenitiveNames[b.intMonth - 1];
  else return a.k_objAbbreviationsOfMonths[b.intMonth - 1];
};
DateUtils.GetMonthAsLongNumeric = function (c, a) {
  ULSrLq:;
  return DateUtils.FormatAsLong(a.intMonth);
};
DateUtils.GetMonthAsShortNumeric = function (c, a) {
  ULSrLq:;
  return a.intMonth.toString();
};
DateUtils.GetDayOfWeek = function (b, a) {
  ULSrLq:;
  return DateUtils.UnparseDayOfWeek(
    b,
    new Date(a.intYear, a.intMonth - 1, a.intDay).getDay() + 1
  );
};
DateUtils.GetDayOfWeekAsShortTextual = function (b, a) {
  ULSrLq:;
  return b.k_objAbbreviationsOfDays[
    new Date(a.intYear, a.intMonth - 1, a.intDay).getDay()
  ];
};
DateUtils.GetDayAsLongNumeric = function (c, a) {
  ULSrLq:;
  return DateUtils.FormatAsLong(a.intDay);
};
DateUtils.GetDayAsShortNumeric = function (c, a) {
  ULSrLq:;
  return a.intDay.toString();
};
DateUtils.GetYearAsLongNumeric = function (d, b) {
  ULSrLq:;
  var a = b.intYear.toString();
  switch (a.length) {
    case 1:
      a = "000" + a;
      break;
    case 2:
      a = "00" + a;
      break;
    case 3:
      a = "0" + a;
  }
  return a;
};
DateUtils.GetYearAsShortNumeric = function (c, a) {
  ULSrLq:;
  return DateUtils.FormatAsLong(a.intYear % 100);
};
DateUtils.GetYearAsShorterNumeric = function (c, a) {
  ULSrLq:;
  return a.intYear % 100;
};
DateUtils.GetEra = function (a) {
  ULSrLq:;
  return a.k_strEraInfo;
};
DateUtils.GetHoursAsShortNumeric12 = function (d, b) {
  ULSrLq:;
  var a = b.intHours % 12;
  return (a == 0 ? 12 : a).toString();
};
DateUtils.GetHoursAsLongNumeric12 = function (d, b) {
  ULSrLq:;
  var a = b.intHours % 12;
  return DateUtils.FormatAsLong(a == 0 ? 12 : a);
};
DateUtils.GetHoursAsShortNumeric24 = function (c, a) {
  ULSrLq:;
  return a.intHours.toString();
};
DateUtils.GetHoursAsLongNumeric24 = function (c, a) {
  ULSrLq:;
  return DateUtils.FormatAsLong(a.intHours);
};
DateUtils.GetMinutesAsShortNumeric = function (c, a) {
  ULSrLq:;
  return a.intMinutes.toString();
};
DateUtils.GetMinutesAsLongNumeric = function (c, a) {
  ULSrLq:;
  return DateUtils.FormatAsLong(a.intMinutes);
};
DateUtils.GetSecondsAsShortNumeric = function (c, a) {
  ULSrLq:;
  return a.intSeconds.toString();
};
DateUtils.GetSecondsAsLongNumeric = function (c, a) {
  ULSrLq:;
  return DateUtils.FormatAsLong(a.intSeconds);
};
DateUtils.GetAMPMFirstChar = function (a, c) {
  ULSrLq:;
  var b = c.intHours < 12 ? a.AMDesignator : a.PMDesignator;
  return b.substr(0, 1);
};
DateUtils.GetAMPM = function (a, c) {
  ULSrLq:;
  var b = c.intHours < 12 ? a.AMDesignator : a.PMDesignator;
  return b;
};
DateUtils.ParseMonth = function (b, d) {
  ULSrLq:;
  for (var c = -1, a = 0; a < b.k_objMonthREs.length; a++)
    if (b.k_objMonthREs[a].test(d)) {
      c = a + 1;
      break;
    }
  return c;
};
DateUtils.ParseYear = function (c, a) {
  ULSrLq:;
  if (a < 100) {
    var b = c.k_intTwoDigitYearMax;
    a = a + (b - (b % 100));
    if (a > b) a = a - 100;
  }
  return a;
};
DateUtils.UnparseDayOfWeek = function (b, a) {
  ULSrLq:;
  return b.k_objNamesOfDays[a - 1];
};
DateUtils.GetNumDaysInMonth = function (c, b) {
  ULSrLq:;
  var a = -1;
  switch (b) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      a = 31;
      break;
    case 2:
      a = DateUtils.IsLeapYear(c) ? 29 : 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      a = 30;
  }
  return a;
};
DateUtils.GetNumDaysInYear = function (a) {
  ULSrLq:;
  return DateUtils.IsLeapYear(a) ? 366 : 365;
};
DateUtils.IsLeapYear = function (a) {
  ULSrLq:;
  return a % 4 == 0 && !(a % 100 == 0 && a % 400 != 0);
};
DateUtils.FormatAsLong = function (b) {
  ULSrLq:;
  var a = b.toString();
  return a.length == 1 ? "0" + a : a;
};
DateUtils.ConvertToLocalTime = function (a) {
  ULSrLq:;
  if (!Util.IsNullOrEmptyString(a.strTZOffset)) {
    var b = a.strTZOffset.charAt(0);
    if (b == "+" || b == "-" || b == "Z") {
      var d = DateUtils.JScriptDateFromDateTime(a),
        c = d.getTime(),
        e = DateUtils.TimeZoneOffsetToMinutes(a.strTZOffset);
      c -= e * 6e4;
      c -= d.getTimezoneOffset() * 6e4;
      a = DateUtils.DateTimeFromJScriptDate(new Date(c), true, a.intFraction);
    }
  }
  return a;
};
DateUtils.TimeZoneOffsetToMinutes = function (a) {
  ULSrLq:;
  var b = 0;
  if (a != "Z") {
    b = parseInt(a.substr(0, 3), 10) * 60;
    var c = a.indexOf(":");
    if (c != -1) b += parseInt(a.substr(c + 1, 2), 10);
  }
  return b;
};
DateUtils.GetLocalTimeZoneOffsetString = function (e) {
  ULSrLq:;
  var d = DateUtils.JScriptDateFromDateTime(e),
    a = -d.getTimezoneOffset(),
    b = Math.abs(a) / 60,
    c = Math.floor(b),
    f = 60 * (b - c);
  return (
    (a < 0 ? "-" : "+") +
    DateUtils.FormatAsLong(c) +
    ":" +
    DateUtils.FormatAsLong(f)
  );
};
DateUtils.JScriptDateFromDateTime = function (a) {
  ULSrLq:;
  if ((a.intYear | a.intMonth | a.intDay) == 0) {
    var b = new Date();
    a.intYear = b.getFullYear();
    a.intMonth = b.getMonth() + 1;
    a.intDay = b.getDate();
  }
  return new Date(
    a.intYear,
    a.intMonth - 1,
    a.intDay,
    a.intHours,
    a.intMinutes,
    a.intSeconds
  );
};
DateUtils.DateTimeFromJScriptDate = function (a, c, d) {
  ULSrLq:;
  var b = Util.CreateObjDateTime(
    a.getFullYear(),
    a.getMonth() + 1,
    a.getDate(),
    a.getHours(),
    a.getMinutes(),
    a.getSeconds(),
    d,
    ""
  );
  if (c) b.strTZOffset = DateUtils.GetLocalTimeZoneOffsetString(b);
  return b;
};
function DateUtils_JScriptTicksFromDotNetTicks(a) {
  ULSrLq:;
  return a / 1e4 - 6.21355968e13;
}
function DigitSeparator() {}
DigitSeparator.Parse = function (a) {
  ULSrLq:;
  var b = a;
  if (a < -1 || a > 5) b = 0;
  return b;
};
function NoFormatting() {
  ULSrLq:;
  if (!(NoFormatting.prototype instanceof NoFormattingTraits)) {
    NoFormatting.prototype = new NoFormattingTraits();
    NoFormatting.prototype.constructor = NoFormatting;
    return new NoFormatting();
  }
}
NoFormatting._objSharedInstance = null;
NoFormatting.GetSharedInstance = function () {
  ULSrLq:;
  if (NoFormatting._objSharedInstance == null)
    NoFormatting._objSharedInstance = new NoFormatting();
  return NoFormatting._objSharedInstance;
};
function NoFormattingTraits() {
  ULSrLq:;
  this.getFormattingType = function () {
    ULSrLq:;
    return 0;
  };
  this.Reinit = function () {};
  this.Format = function (a) {
    ULSrLq:;
    return a;
  };
  this.Unformat = function (a) {
    ULSrLq:;
    return Util.CreateObjUnformatResult(a, a, false);
  };
}
function NoFormatting_ShouldPostBackForTimeZone(a, b) {
  ULSrLq:;
  if (b._nMultipleBindingClassId != -1 && !Util_IsNullOrEmptyString(a)) {
    var d = DateFormatting_GetDateFormattingModeAccordingToDataType(b);
    if (d != -1) {
      var c = DateFormatting_UnformatIso8601(a, d);
      if (c != null && !Util_IsNullOrEmptyString(c.strTZOffset)) return true;
    }
  }
  return false;
}
function NumberFormatting() {}
NumberFormatting.InitDerivedObject = function (a, k, h, i, e, f, g, j, c, d) {
  ULSrLq:;
  var b = DateFormatting_DefaultCultureObject(k);
  a._intDecimalSeparator = h != -1 ? h : b.k_intDecimalSeparator;
  a._intGroupSeparator = i != -1 ? i : b.k_intGroupSeparator;
  if (e != -1) a._intNonnegativeValueFormat = e;
  else
    a._intNonnegativeValueFormat =
      d == a.k_intModeCurrency ? b.k_intCurrencyNonNegativeFormat : 0;
  if (f != -1) a._intNegativeValueFormat = f;
  else
    a._intNegativeValueFormat =
      d == a.k_intModeCurrency
        ? b.k_intCurrencyNegativeFormat
        : b.k_intNegativeFormat;
  a._strCurrencySymbol = j == undefined ? "" : j;
  a._intMode = d == undefined ? this.k_intModeDouble : d;
  if ((c >= 0 && c <= 9) || c == 32) a._intGrouping = c;
  else a._intGrouping = c == -1 ? b.k_intGrouping : 0;
  if (g == undefined) {
    a._intDecimalDigitsCount = 0;
    a._strNumericPart =
      "[0-9][0-9" +
      a.k_objSeparatorsForRE[a._intGroupSeparator] +
      "]*" +
      a.k_objSeparatorsForRE[a._intDecimalSeparator] +
      "?";
  } else {
    a._intDecimalDigitsCount = g;
    a._strNumericPart =
      "[0-9" +
      a.k_objSeparatorsForRE[a._intGroupSeparator] +
      a.k_objSeparatorsForRE[a._intDecimalSeparator] +
      "Ee\\+\\-]+";
  }
};
function NumberFormattingTraits() {
  ULSrLq:;
  this.k_objSeparatorsForString = new Array(5);
  this.k_objSeparatorsForString[0] = "";
  this.k_objSeparatorsForString[1] = ".";
  this.k_objSeparatorsForString[2] = ",";
  this.k_objSeparatorsForString[3] = " ";
  this.k_objSeparatorsForString[4] = "'";
  this.k_objSeparatorsForString[5] = "\u060c";
  this.k_objSeparatorsForRE = new Array(5);
  this.k_objSeparatorsForRE[0] = "";
  this.k_objSeparatorsForRE[1] = "\\.";
  this.k_objSeparatorsForRE[2] = ",";
  this.k_objSeparatorsForRE[3] = " ";
  this.k_objSeparatorsForRE[4] = "'";
  this.k_objSeparatorsForRE[5] = "\\u060C";
  this.k_intMaxExponentToNormalize = 25;
  this.k_intModeUnknown = -1;
  this.k_intModeNumber = 1;
  this.k_intModePercentage = 2;
  this.k_intModeCurrency = 3;
  this.k_intModeNone = 4;
  this.getFormattingType = function () {
    ULSrLq:;
    return 2;
  };
  this.k_objNumberPositivePatterns = ["%1"];
  this.k_objNumberNegativePatterns = ["(%1)", "-%1", "- %1", "%1-", "%1 -"];
  this.k_objCurrencyPositivePatterns = ["%2%1", "%1%2", "%2 %1", "%1 %2"];
  this.k_objCurrencyNegativePatterns = [
    "(%2%1)",
    "-%2%1",
    "%2-%1",
    "%2%1-",
    "(%1%2)",
    "-%1%2",
    "%1-%2",
    "%1%2-",
    "-%1 %2",
    "-%2 %1",
    "%1 %2-",
    "%2 %1-",
    "%2 -%1",
    "%1- %2",
    "(%2 %1)",
    "(%1 %2)",
  ];
  this.k_objNonnegativeFormats = [
    "\\+\\s*(%1)",
    "(%1)\\s*\\+",
    "%2\\s*\\+\\s*(%1)",
    "\\+\\s*%2\\s*(%1)",
    "\\+\\s*(%1)\\s*%2",
    "%2\\s*(%1)\\s*\\+",
    "(%1)\\s*%2\\s*\\+",
    "(%1)\\s*\\+\\s*%2",
    "%2\\s*(%1)",
    "(%1)\\s*%2",
    "(%1)",
  ];
  this.k_objNegativeFormats = [
    "-\\s*(%1)",
    "(%1)\\s*-",
    "%2\\s*-\\s*(%1)",
    "-\\s*%2\\s*(%1)",
    "-\\s*(%1)\\s*%2",
    "%2\\s*(%1)\\s*-",
    "(%1)\\s*%2\\s*-",
    "(%1)\\s*-\\s*%2",
    "\\(\\s*(%1)\\s*\\)",
    "%2\\s*\\(\\s*(%1)\\s*\\)",
    "\\(\\s*%2\\s*(%1)\\s*\\)",
    "\\(\\s*(%1)\\s*%2\\s*\\)",
    "\\(\\s*(%1)\\s*\\)\\s*%2",
  ];
  this.Format = function (f) {
    ULSrLq:;
    var c = null,
      o = "",
      a = "",
      b = "",
      e = "",
      i = false,
      s = "",
      j = "",
      d = 0;
    if (Util.IsNullOrEmptyString(f) || Util.IsNullOrEmptyString(Util.Trim(f)))
      return f;
    var g = f * 1;
    if (isNaN(g)) return f;
    if (g < 0) {
      i = true;
      g = -g;
    }
    if (this._intDecimalDigitsCount >= 0) {
      if (this._intMode == this.k_intModePercentage) g *= 100;
      var m = ToFixed(g, this._intDecimalDigitsCount);
      if (m == null) return f;
      c = new RegExp("^(-?[0-9]+)(?:\\.([0-9]+))?$").exec(m);
      if (c == null) return f;
      a = c[1] == undefined ? "" : c[1];
      b = c[2] == undefined ? "" : c[2];
      e = "";
    } else {
      var y = ToExponential(g) + "";
      c = new RegExp("^(-?[0-9]+)(?:\\.([0-9]+))?(?:[Ee]([+-]?[0-9]+))?$").exec(
        y
      );
      a = c[1] == undefined ? "" : c[1];
      b = c[2] == undefined ? "" : c[2];
      e = c[3] == undefined ? "" : c[3];
      d = parseInt(e, 10);
      if (this._intMode == this.k_intModePercentage) d += 2;
      if (d - b.length < -9) {
        var m = ToFixed(g, 9);
        if (m == null) return f;
        if (i) m = "-" + m;
        return this.Format(m);
      } else if (d < this.k_intMaxExponentToNormalize)
        if (d == 0) e = "";
        else if (d < 0) {
          var h = [],
            p = -d;
          h.push(b);
          h.push(a);
          p--;
          for (var q = p; q >= 1; q--) h.push("0");
          a = "0";
          b = h.reverse().join("");
          e = "";
        } else {
          var h = [],
            p,
            n;
          if (b.length > d) {
            n = d;
            p = 0;
          } else {
            n = b.length;
            p = d - n;
          }
          h.push(a);
          h.push(b.substr(0, n));
          for (var q = p; q >= 1; q--) h.push("0");
          a = h.join("");
          b = b.substr(n);
          e = "";
        }
      if (a.length == 0) a = "0";
    }
    if (
      this.k_objSeparatorsForString[this._intGroupSeparator].length > 0 &&
      this._intGrouping > 0
    ) {
      var v = "",
        z = a,
        t = this._intGrouping;
      if (this._intGrouping == 32 && a.length > 3) {
        v = a.substr(a.length - 3, 3);
        a = a.substr(0, a.length - 3);
        t = 2;
      }
      var u = a.length % t,
        r = [];
      u != 0 && r.push(a.substr(0, u));
      for (var w = u; w < a.length; w += t) r.push(a.substr(w, t));
      Util.IsNonEmptyString(v) && r.push(v);
      s = r.join(this.k_objSeparatorsForString[this._intGroupSeparator]);
    } else s = a.toString();
    if (
      this._intDecimalDigitsCount == 0 ||
      (this._intDecimalDigitsCount < 0 && b.length == 0)
    )
      j = s;
    else j = s + this.k_objSeparatorsForString[this._intDecimalSeparator] + b;
    if (e.length > 0) j = j + "E" + e;
    if (i && (a + "." + b + (e.length > 0 ? "E" + e : "")) * 1 == 0) i = false;
    var k = 0,
      l = null;
    if (i && Util.IsNonEmptyString(this._strCurrencySymbol)) {
      l = this.k_objCurrencyNegativePatterns;
      k = this._intNegativeValueFormat;
    } else if (!i && Util.IsNonEmptyString(this._strCurrencySymbol)) {
      l = this.k_objCurrencyPositivePatterns;
      k = this._intNonnegativeValueFormat;
    } else if (i && Util.IsNullOrEmptyString(this._strCurrencySymbol)) {
      l = this.k_objNumberNegativePatterns;
      k = this._intNegativeValueFormat;
    } else {
      l = this.k_objNumberPositivePatterns;
      k = 0;
    }
    if (k >= l.length) o = j;
    else {
      var x = l[k];
      o = x.replace(new RegExp("%1"), j);
      o = o.replace(new RegExp("%2"), this._strCurrencySymbol);
    }
    return o;
  };
  this.Unformat = a;
  function a(f) {
    ULSrLq:;
    var d = Util.ReplaceNonLatinDigitsAndPunctuation(f);
    d = Util.StripWhitespace(d);
    var m = new RegExp(
        this.k_objSeparatorsForRE[this._intDecimalSeparator] + "$"
      ),
      l = new RegExp(
        this.k_objSeparatorsForRE[this._intDecimalSeparator] + "[eE]"
      ),
      g = [],
      h = [],
      a = null,
      i = false;
    for (var k in this.k_objNonnegativeFormats) {
      var b = this.k_objNonnegativeFormats[k];
      b = b.replace(new RegExp("%1"), this._strNumericPart);
      b = b.replace(new RegExp("%2"), RegExpEscape(this._strCurrencySymbol));
      g.push(new RegExp("^" + b + "$", "i"));
    }
    for (var k in this.k_objNegativeFormats) {
      var b = this.k_objNegativeFormats[k];
      b = b.replace(new RegExp("%1"), this._strNumericPart);
      b = b.replace(new RegExp("%2"), RegExpEscape(this._strCurrencySymbol));
      h.push(new RegExp("^" + b + "$", "i"));
    }
    for (var c = 0; c < h.length; c++) {
      var e = h[c].exec(d);
      if (e != null) {
        a = e[1];
        i = true;
        break;
      }
    }
    if (a == null)
      for (var c = 0; c < g.length; c++) {
        var e = g[c].exec(d);
        if (e != null) {
          a = e[1];
          i = false;
          break;
        }
      }
    if (a != null) {
      a = a.replace(m, "");
      a = a.replace(new RegExp("^ +| +$", "g"), "");
      a = a.replace(l, "E");
      a = a.replace(new RegExp("e"), "E");
      a = a.replace(new RegExp("E\\+"), "E");
      a = ParseNumber(
        a,
        this.k_objSeparatorsForString[this._intGroupSeparator],
        this.k_objSeparatorsForString[this._intDecimalSeparator]
      );
    }
    if (a != null) {
      if (i) a = "-" + a;
      if (this._intMode == this.k_intModePercentage) {
        var j = parseFloat(a);
        j = j / 100;
        a = "" + j;
      }
    } else a = f;
    return Util.CreateObjUnformatResult(f, a, true);
  }
}
function Fill(c, d) {
  ULSrLq:;
  for (var a = "", b = 0; b < d; b++) a += c;
  return a;
}
function ToFixed(b, d) {
  ULSrLq:;
  if (isNaN(b)) return null;
  var f = false;
  if (b < 0) {
    b = -b;
    f = true;
  }
  var c = Math.floor(b),
    h = b - c;
  if ((c + "").toUpperCase().indexOf("E") != -1) return b + "";
  var g = ("5E-" + (d + 1)) * 1,
    i = h < g ? 0 : h + g,
    a;
  if (i >= 1) {
    c = c + 1;
    a = Fill("0", d);
  } else {
    a = (i + "").toUpperCase();
    var e = a.indexOf("E-");
    if (e != -1) {
      var k = a.substr(e + 2) * 1;
      a = a.charAt(0) + a.slice(2, e);
      a = Fill("0", k - 1) + a;
    } else a = a.substr(2);
    if (a.length < d) a = a + Fill("0", d - a.length);
    else a = a.substr(0, d);
    if (a * 1 == 0 && c == 0) f = false;
  }
  var j = (f ? "-" : "") + c + (d != 0 ? "." : "") + a;
  return j;
}
function ToExponential(b) {
  ULSrLq:;
  var i = 0,
    d = -1,
    a = "",
    k = "",
    j = "";
  if (isNaN(b)) return "NaN";
  if (b == 0) return "0e+0";
  if (b < 0) {
    j = "-";
    b = -b;
  }
  for (var g = b.toString(), h = 0; h < g.length; h++) {
    var f = g.charAt(h);
    if (f == "e" || f == "E") {
      i = 2;
      k = g.substr(h + 1);
      d += parseInt(k);
      break;
    } else if (f == ".") i = 1;
    else if (i == 0) {
      d++;
      a = a + f;
    } else if (i == 1) a = a + f;
  }
  var c = 0;
  while (c < g.length && a.charAt(c) == "0") c++;
  d -= c;
  var e = a.substr(c + 1);
  if (e.length > 0 && e * 1 == 0) e = "";
  var m = e.length > 0 ? "." + e : "",
    l = d >= 0 ? "e+" + d : "e" + d;
  return j + a.substr(c, 1) + m + l;
}
function ParseNumber(o, q, p) {
  ULSrLq:;
  for (
    var l = 0,
      j = 1,
      i = 2,
      n = 3,
      k = 4,
      d = "",
      a = "",
      e = "",
      f = true,
      m = 0,
      b = l,
      m = 0;
    f && m < o.length;
    m++
  ) {
    var c = o.charAt(m);
    if (c >= "0" && c <= "9")
      switch (b) {
        case l:
          b = j;
          d = d + c;
          break;
        case j:
          if (d == "0") d = c;
          else d = d + c;
          break;
        case i:
          a = a + c;
          break;
        case n:
          e = e + c;
          break;
        case k:
          b = n;
          e = e + c;
      }
    else if (c == q) {
      if (!(b == j || b == i)) f = false;
    } else if (c == p)
      if (b == l) {
        d = "0";
        b = i;
      } else if (b == j) b = i;
      else f = false;
    else if (c == "e" || c == "E")
      if (b == j || b == i) b = k;
      else f = false;
    else if (c == "+" || c == "-")
      if (b == k) {
        e = e + c;
        b = n;
      } else f = false;
    else f = false;
  }
  if (b == l || b == k) f = false;
  if (f)
    while (a.length > 1 && a.substr(a.length - 1, 1) == "0")
      a = a.substr(0, a.length - 1);
  if (f && d.length > 1 && e != "") {
    var r = d.length - 1;
    a = d.substr(1) + a;
    d = d.substr(0, 1);
    e = e * 1 + r + "";
  } else if (f && d == "0" && a != "" && e != "") {
    for (var g = 0; g < a.length; g++) if (a.charAt(g) != "0") break;
    if (g == a.length) f = false;
    else {
      d = a.substr(g, 1);
      a = a.substr(g + 1);
      e = e * 1 - g - 1 + "";
    }
  }
  var h;
  if (f) {
    h = d;
    if (a != "") h = h + "." + a;
    if (e != "") h = h + "E" + e;
  } else h = "";
  return f ? h : null;
}
function DoubleFormatting() {
  ULSrLq:;
  if (!(DoubleFormatting.prototype instanceof DoubleFormattingTraits)) {
    DoubleFormatting.prototype = new DoubleFormattingTraits();
    DoubleFormatting.prototype.constructor = DoubleFormatting;
    return new DoubleFormatting();
  }
}
function DoubleFormattingTraits() {
  ULSrLq:;
  if (!(DoubleFormattingTraits.prototype instanceof NumberFormattingTraits)) {
    DoubleFormattingTraits.prototype = new NumberFormattingTraits();
    DoubleFormattingTraits.prototype.constructor = DoubleFormattingTraits;
    return new DoubleFormattingTraits();
  }
  this.Reinit = function (b, a) {
    ULSrLq:;
    NumberFormatting.InitDerivedObject(
      this,
      b,
      DigitSeparator.Parse(a[0]),
      DigitSeparator.Parse(a[1]),
      a[2],
      a[3],
      a[4],
      a[5],
      a[6],
      a[7]
    );
  };
}
function DateFormatting() {
  ULSrLq:;
  if (!(DateFormatting.prototype instanceof DateFormattingTraits)) {
    DateFormatting.prototype = new DateFormattingTraits();
    DateFormatting.prototype.constructor = DateFormatting;
    return new DateFormatting();
  }
}
DateFormatting.GetCalendarType = DateFormatting_GetCalendarType;
function DateFormatting_GetCalendarType(d, e, b) {
  ULSrLq:;
  var a = null,
    c = 1;
  switch (e) {
    case "1025":
    case "1125":
      a = "System.Globalization.HijriCalendar";
      break;
    case "1054":
      a = "System.Globalization.ThaiBuddhistCalendar";
      break;
    case "1065":
    case "1056":
      if (b) a = "System.Globalization.HijriCalendar";
      break;
    case "1041":
      if (b) a = "System.Globalization.JapaneseCalendar";
      break;
    case "1042":
      if (b) a = "System.Globalization.KoreanCalendar";
      break;
    case "1028":
      if (b) a = "System.Globalization.TaiwanCalendar";
  }
  if (b && e != "1025" && d.k_strLanguage.toLowerCase() == "ar")
    a = "System.Globalization.HijriCalendar";
  if (a == null) a = d.CalendarType;
  try {
    c = IP_DatePicker.SPCalendarType[a];
  } catch (f) {
    c = 1;
  }
  return c;
}
function DateFormatting_DefaultCultureObject(strFormId) {
  ULSrLq:;
  return eval("dateTime" + CurrentFormData.DefaultLcid(strFormId) * 1);
}
function DateFormatting_GetDateFormat(a, c) {
  ULSrLq:;
  if (c.length == 1) {
    var b = c - "0";
    if (b >= 0 && b < 9)
      switch (b) {
        case 0:
          return a.formatShortDate;
        case 1:
          return a.formatLongDate;
        case 2:
          return a.formatMonthYear;
        case 7:
          return a.formatShortTime;
        case 8:
          return a.formatLongTime;
      }
  }
  return c;
}
function DateFormatting_GetDateFormattingModeAccordingToDataType(b) {
  ULSrLq:;
  var c = ViewDataNode_GetUnderlyingDatatype(b),
    a = -1;
  switch (c) {
    case DateTimeXsdDatatype:
      a = 3;
      break;
    case DateXsdDatatype:
      a = 1;
      break;
    case TimeXsdDatatype:
      a = 2;
  }
  return a;
}
function DateFormatting_UnformatIso8601(c, d) {
  ULSrLq:;
  var a = null,
    b = {};
  switch (d) {
    case 1:
      a = DateUtils.k_objREIsoDate.exec(c);
      if (a == null) return null;
      b = Util.CreateObjDateTime(
        parseInt(a[1], 10),
        parseInt(a[2], 10),
        parseInt(a[3], 10),
        0,
        0,
        0,
        0,
        a[4]
      );
      break;
    case 2:
      a = DateUtils.k_objREIsoTime.exec(c);
      if (a == null) return null;
      b = Util.CreateObjDateTime(
        0,
        0,
        0,
        parseInt(a[1], 10),
        parseInt(a[2], 10),
        parseInt(a[3], 10),
        parseInt(a[4], 10),
        a[5]
      );
      break;
    case 3:
      a = DateUtils.k_objREIsoDateTime.exec(c);
      if (a == null) return null;
      b = Util.CreateObjDateTime(
        parseInt(a[1], 10),
        parseInt(a[2], 10),
        parseInt(a[3], 10),
        parseInt(a[4], 10),
        parseInt(a[5], 10),
        parseInt(a[6], 10),
        parseInt(a[7], 10),
        a[8]
      );
      break;
    case -1:
      return null;
    default:
      return null;
  }
  return b;
}
function DateFormattingTraits() {
  ULSrLq:;
  this.getFormattingType = function () {
    ULSrLq:;
    return 1;
  };
  this.k_objDynamicFormatMap = [
    { objFriendlyRE: /MMMM/, objFormatFn: DateUtils.GetMonthAsLongTextual },
    { objFriendlyRE: /MMM/, objFormatFn: DateUtils.GetMonthAsShortTextual },
    { objFriendlyRE: /MM/, objFormatFn: DateUtils.GetMonthAsLongNumeric },
    { objFriendlyRE: /M/, objFormatFn: DateUtils.GetMonthAsShortNumeric },
    { objFriendlyRE: /dddd/, objFormatFn: DateUtils.GetDayOfWeek },
    { objFriendlyRE: /ddd/, objFormatFn: DateUtils.GetDayOfWeekAsShortTextual },
    { objFriendlyRE: /dd/, objFormatFn: DateUtils.GetDayAsLongNumeric },
    { objFriendlyRE: /d/, objFormatFn: DateUtils.GetDayAsShortNumeric },
    { objFriendlyRE: /yyyy/, objFormatFn: DateUtils.GetYearAsLongNumeric },
    { objFriendlyRE: /yy/, objFormatFn: DateUtils.GetYearAsShortNumeric },
    { objFriendlyRE: /y/, objFormatFn: DateUtils.GetYearAsShorterNumeric },
    { objFriendlyRE: /gg/, objFormatFn: DateUtils.GetEra },
    { objFriendlyRE: /hh/, objFormatFn: DateUtils.GetHoursAsLongNumeric12 },
    { objFriendlyRE: /h/, objFormatFn: DateUtils.GetHoursAsShortNumeric12 },
    { objFriendlyRE: /HH/, objFormatFn: DateUtils.GetHoursAsLongNumeric24 },
    { objFriendlyRE: /H/, objFormatFn: DateUtils.GetHoursAsShortNumeric24 },
    { objFriendlyRE: /mm/, objFormatFn: DateUtils.GetMinutesAsLongNumeric },
    { objFriendlyRE: /m/, objFormatFn: DateUtils.GetMinutesAsShortNumeric },
    { objFriendlyRE: /ss/, objFormatFn: DateUtils.GetSecondsAsLongNumeric },
    { objFriendlyRE: /s/, objFormatFn: DateUtils.GetSecondsAsShortNumeric },
    { objFriendlyRE: /tt/, objFormatFn: DateUtils.GetAMPM },
    { objFriendlyRE: /t/, objFormatFn: DateUtils.GetAMPMFirstChar },
  ];
  this.k_intModeUnknown = -1;
  this.k_intModeDate = 1;
  this.k_intModeTime = 2;
  this.k_intModeDateTime = 3;
  this.k_intModeNoFormatting = 4;
  this.k_intDateFormatTypeCustom = 3;
  this.k_intDateFormatTypeNone = 4;
  this.k_intTimeFormatTypeCustom = 9;
  this.k_intTimeFormatTypeNone = 10;
  this.Reinit = p;
  function p(d, a) {
    ULSrLq:;
    var c;
    if (a[0] == false) c = DateFormatting_DefaultCultureObject(d);
    else c = a[0];
    var b = a[1];
    if (b != null && b.length > 2) {
      this._objCultureInfo = c;
      this._strDisplayFormat = b.substr(2, b.length);
      if (this._strDisplayFormat.length == 1)
        this._strDisplayFormat = DateFormatting_GetDateFormat(
          c,
          this._strDisplayFormat
        );
      this._intMode = parseInt(b.substr(0, 1), 10);
      this._intDateFormatType = a[2];
      this._intTimeFormatType = a[3];
      this._boolUseAltCalendar = a[4];
      this._boolEnglishStringsAlways = a[5];
      if (a.length > 6 && a[6] > 0) this._intCalendar = a[6];
      else if (this._objCultureInfo != null)
        this._intCalendar = DateFormatting.GetCalendarType(
          this._objCultureInfo,
          this._objCultureInfo.Lcid,
          this._boolUseAltCalendar
        );
      else this._intCalendar = 1;
    } else {
      this._objCultureInfo = null;
      this._strDisplayFormat = "";
      this._intMode = this.k_intModeUnknown;
      this._intDateFormatType = this.k_intDateFormatTypeCustom;
      this._intTimeFormatType = this.k_intTimeFormatTypeCustom;
      this._boolUseAltCalendar = false;
      this._boolEnglishStringsAlways = false;
      this._intCalendar = 1;
    }
    this.GenerateDisplayFormatMaps();
  }
  this.GenerateDisplayFormatMaps = e;
  function e() {
    ULSrLq:;
    this._objLiteralFormatMap = [];
    var c = this._strDisplayFormat,
      b = [],
      a = new RegExp(
        "^((?:\\\\'|\\\\\\\\|[^'\\\\])*)(?:'((?:\\\\'|\\\\\\\\|[^'\\\\])*)')",
        "g"
      );
    a.lastIndex = 0;
    var d = a.exec(c);
    while (d != null && a.lastIndex > 0) {
      b.push(d[1]);
      b.push("<L:");
      b.push(this._objLiteralFormatMap.length);
      b.push(">");
      this._objLiteralFormatMap[this._objLiteralFormatMap.length] = d[2];
      c = c.substring(a.lastIndex);
      a.lastIndex = 0;
      d = a.exec(c);
    }
    b.push(c);
    this._strFormatMap = b.join("");
    for (var e in this.k_objDynamicFormatMap)
      this._strFormatMap = this._strFormatMap.replace(
        this.k_objDynamicFormatMap[e].objFriendlyRE,
        "<D:" + e + ">"
      );
  }
  this.CultureInfo = s;
  function s() {
    ULSrLq:;
    return this._objCultureInfo;
  }
  this.Mode = x;
  function x() {
    ULSrLq:;
    return this._intMode;
  }
  this.IsUseGenitiveForm = i;
  function i(b) {
    ULSrLq:;
    for (var e = 0, a = 0, d = "d", c = 0, a = e; a < b.length; a++)
      if (b.charAt(a) == d) break;
    while (a < b.length && b.charAt(a) == d) {
      c++;
      a++;
    }
    return c == 1 || c == 2;
  }
  this.DateFormatType = k;
  function k() {
    ULSrLq:;
    return this._intDateFormatType;
  }
  this.TimeFormatType = m;
  function m() {
    ULSrLq:;
    return this._intTimeFormatType;
  }
  this.Format = w;
  function w(a) {
    ULSrLq:;
    if (this.CultureInfo() == null || this.Mode() == -1) return a;
    if (this.Mode() == this.k_intModeNoFormatting) return a;
    if (this._intCalendar != 1) return a;
    var c = this.UnformatIso8601(a, this.Mode());
    if (c == null) return a;
    if (!Util.IsNullOrEmptyString(c.strTZOffset))
      c = DateUtils.ConvertToLocalTime(c);
    var e = this.IsUseGenitiveForm(this._strDisplayFormat),
      b = this._strFormatMap;
    for (var d in this.k_objDynamicFormatMap)
      b = b.replace(
        new RegExp("<D:" + d + ">"),
        this.k_objDynamicFormatMap[d].objFormatFn(this.CultureInfo(), c, e)
      );
    for (var d in this._objLiteralFormatMap)
      b = b.replace(new RegExp("<L:" + d + ">"), this._objLiteralFormatMap[d]);
    return b;
  }
  this.Unformat = v;
  function v(a) {
    ULSrLq:;
    if (this.CultureInfo() == null || this.Mode() == -1)
      return Util.CreateObjUnformatResult(a, a, false);
    if (this.Mode() == this.k_intModeNoFormatting)
      return Util.CreateObjUnformatResult(a, a, false);
    if (this._intCalendar != 1 && this.Mode() != this.k_intModeTime)
      return Util.CreateObjUnformatResult(a, a, false);
    var c = Util.ReplaceNonLatinDigitsAndPunctuation(a),
      d = null,
      e = null,
      b = null;
    if (this.Mode() == this.k_intModeDateTime)
      b = this.UnformatIso8601(c, this.k_intModeDateTime);
    if (b == null) {
      if (
        this.Mode() == this.k_intModeDate ||
        (this.Mode() == this.k_intModeDateTime &&
          this.DateFormatType() != this.k_intDateFormatTypeNone)
      ) {
        d = this.UnformatIso8601(c, this.k_intModeDate);
        if (d == null) d = this.UnformatDate(c);
      } else if (
        this.Mode() == this.k_intModeTime ||
        (this.Mode() == this.k_intModeDateTime &&
          this.TimeFormatType() != this.k_intTimeFormatTypeNone)
      ) {
        e = this.UnformatTime(c);
        if (e == null) e = this.UnformatIso8601(c, this.k_intModeTime);
      } else return Util.CreateObjUnformatResult(a, a, false);
      b = Util.CreateDefaultObjDateTime();
      if (d != null) Util.MergeDateIntoDateTime(d, b);
      else if (e != null) Util.MergeTimeIntoDateTime(e, b);
      else b = null;
    }
    var g = this.UnformatFromDateTime(b, this.Mode(), a),
      f = Util.CreateObjUnformatResult(a, g, true);
    f.objDateTime = b;
    return f;
  }
  this.UnformatFromDateTime = h;
  function h(a, d, c) {
    ULSrLq:;
    var b = "";
    if (a == null) b = c;
    else
      switch (d) {
        case this.k_intModeDate:
          b =
            DateUtils.GetYearAsLongNumeric(this.CultureInfo(), a) +
            "-" +
            DateUtils.GetMonthAsLongNumeric(this.CultureInfo(), a) +
            "-" +
            DateUtils.GetDayAsLongNumeric(this.CultureInfo(), a);
          break;
        case this.k_intModeTime:
          b =
            DateUtils.GetHoursAsLongNumeric24(this.CultureInfo(), a) +
            ":" +
            DateUtils.GetMinutesAsLongNumeric(this.CultureInfo(), a) +
            ":" +
            DateUtils.GetSecondsAsLongNumeric(this.CultureInfo(), a);
          if (Util.IsNonEmptyString(a.strTZOffset)) b += a.strTZOffset;
          break;
        case this.k_intModeDateTime:
          b =
            DateUtils.GetYearAsLongNumeric(this.CultureInfo(), a) +
            "-" +
            DateUtils.GetMonthAsLongNumeric(this.CultureInfo(), a) +
            "-" +
            DateUtils.GetDayAsLongNumeric(this.CultureInfo(), a) +
            "T" +
            DateUtils.GetHoursAsLongNumeric24(this.CultureInfo(), a) +
            ":" +
            DateUtils.GetMinutesAsLongNumeric(this.CultureInfo(), a) +
            ":" +
            DateUtils.GetSecondsAsLongNumeric(this.CultureInfo(), a);
          if (Util.IsNonEmptyString(a.strTZOffset)) b += a.strTZOffset;
          break;
        default:
          b = c;
      }
    return b;
  }
  this.IsWeekDayName = n;
  function n(a) {
    ULSrLq:;
    var b = new RegExp("^(?:" + this.CultureInfo().k_objAnyNamesOfDays + ")$");
    return b.exec(a) != null;
  }
  this.IsMonthName = t;
  function t(a) {
    ULSrLq:;
    return DateUtils.ParseMonth(this.CultureInfo(), a) != -1 && a * 1 != a;
  }
  this.UnformatIso8601 = DateFormatting_UnformatIso8601;
  this.TrimLeadingDateSeparatorsAndIgnorableSubstrings = c;
  function c(c) {
    ULSrLq:;
    var a = [];
    a.push("^((");
    a.push("\\s*[\\\\,/\\s.-]\\s*");
    a.push(")|(");
    a.push(this.CultureInfo().k_reIgnorableDateformatStrings);
    a.push("))+");
    var b = new RegExp(a.join(""));
    return c.replace(b, "");
  }
  this.TrimIgnorableSubstrings = g;
  function g(b) {
    ULSrLq:;
    for (var c = 0; c < this.CultureInfo().k_arrIgnorableStrings.length; c++) {
      var d = Util.RegExpEscape(this.CultureInfo().k_arrIgnorableStrings[c]),
        e = RegExp("^\\s*(?:" + d + "(.+)|(.+)" + d + ")\\s*$"),
        a = e.exec(b);
      if (a != null) b = a[1] == "" ? a[2] : a[1];
    }
    return b;
  }
  this.GenerateRegularExpresionForDatePartName = d;
  function d(c, b) {
    ULSrLq:;
    var a = [];
    a.push("(^");
    if (!b) {
      a.push("|");
      a.push("\\s*[\\\\,/\\s.-]\\s*");
    }
    a.push(")(");
    a.push(this.CultureInfo().k_reIgnorableDateformatStrings);
    a.push(")?(");
    a.push(c);
    a.push(")(");
    a.push("\\s*[\\\\,/\\s.-]\\s*");
    a.push(")?(");
    a.push(this.CultureInfo().k_reIgnorableDateformatStrings);
    a.push(")?(");
    a.push("\\s*[\\\\,/\\s.-]\\s*");
    a.push("|$)");
    var d = a.join("").replace(/\xA0/g, " ");
    return new RegExp(d, "i");
  }
  this.ParseMonthName = l;
  function l(d, g) {
    ULSrLq:;
    var a = {};
    a.boolFoundMonth = false;
    a.intMonth = -1;
    a.strDateWithoutMonth = d;
    a.strMonthName = null;
    var e = 0;
    if (this.CultureInfo() != null)
      for (var c = 0, c = 0; c < this.CultureInfo().k_objMonthREs.length; c++)
        if (this.CultureInfo().k_objMonthREs[c].source != "") {
          var f = this.GenerateRegularExpresionForDatePartName(
              this.CultureInfo().k_objMonthREs[c].source.slice(2, -2),
              g
            ),
            b = d.match(f);
          if (
            !Util_IsNullOrUndefined(b) &&
            !Util_IsNullOrUndefined(b[3]) &&
            Util_IsNonEmptyString(b[3]) &&
            isNaN(b[3])
          )
            if (b[3].length > e) {
              e = b[3].length;
              a.boolFoundMonth = true;
              a.intMonth = c + 1;
              a.strDateWithoutMonth = d.replace(f, "$1");
              a.strMonthName = b[3];
            }
        }
    return a;
  }
  this.UnformatDate = q;
  function q(d) {
    ULSrLq:;
    if (this.CultureInfo() == null || this.Mode() == this.k_intModeUnknown)
      return d;
    if (this.Mode() == this.k_intModeNoFormatting) return d;
    d = d.replace(/\xA0/g, " ");
    d = d.replace(/\s{2,}/g, " ");
    var a = this.UnformatDateExact(d);
    if (a == null) {
      var j = false,
        e = false,
        i = false;
      a = Util.CreateDefaultObjDateTime();
      var q = this.ParseMonthName(d, false);
      e = q.boolFoundMonth;
      if (e) {
        a.intMonth = q.intMonth;
        d = q.strDateWithoutMonth;
      }
      var w = this.GenerateRegularExpresionForDatePartName(
          this.CultureInfo().k_objAnyNamesOfDays,
          false
        ),
        u = d.match(w);
      if (u != null && u[0] != "") d = d.replace(w, "$1");
      d = Util.Trim(d);
      var D = new RegExp("\\s*[\\\\,/\\s.-]\\s*"),
        k = d,
        b = [];
      while (k.length > 0) {
        var m = k.match(D),
          h = "";
        if (m == null) {
          h = k;
          k = "";
        } else if (m.index > 0) {
          h = k.substr(0, m.index);
          var C = m.index + m[0].length;
          k = k.substring(C, k.length);
        } else return null;
        var v = new RegExp("^\\s*0?(\\d+[^\\d\\s]+)"),
          n = v.exec(h);
        while (n != null) {
          b.push(n[1]);
          h = h.substring(n[0].length, h.length);
          n = v.exec(h);
        }
        h != "" && b.push(h);
      }
      for (
        var l = this.CultureInfo().k_objDateInfo[0].intDay,
          p = this.CultureInfo().k_objDateInfo[0].intMonth,
          r = this.CultureInfo().k_objDateInfo[0].intYear,
          z = r < p,
          B = p < l,
          A = (r < l && p > l) || (r > l && p < l),
          c = 0;
        c < b.length;
        c++
      ) {
        var f = b[c],
          x = this.TrimIgnorableSubstrings(f);
        if (!e && this.IsMonthName(f)) {
          a.intMonth = DateUtils.ParseMonth(this.CultureInfo(), f);
          b[c] = "month";
          e = true;
          continue;
        }
        if (
          Util.FindObjectInArray(f, this.CultureInfo().k_arrIgnorableStrings) >=
            0 ||
          this.IsWeekDayName(f) ||
          this.IsWeekDayName(x)
        ) {
          b[c] = null;
          continue;
        }
        f = b[c] = x;
        var E = new RegExp("^[0-9]*$"),
          g = parseInt(f, 10);
        if (isNaN(g) || E.exec(f) == null) {
          if (!e)
            if (this.IsMonthName(f)) {
              a.intMonth = DateUtils.ParseMonth(this.CultureInfo(), f);
              b[c] = "month";
              e = true;
              continue;
            } else if (this.IsMonthName(f + ".")) {
              a.intMonth = DateUtils.ParseMonth(this.CultureInfo(), f + ".");
              b[c] = "month";
              e = true;
              continue;
            }
          return null;
        }
        if (g > 31 && !i) {
          a.intYear = DateUtils.ParseYear(this.CultureInfo(), g);
          b[c] = "year";
          i = true;
          continue;
        }
        if (g < 1) return null;
        b[c] = g;
      }
      for (var y = e, c = 0; c < b.length; c++) {
        var g = b[c];
        if (typeof g != "number") continue;
        if (!i && (g > 31 || z || (j && e))) {
          a.intYear = DateUtils.ParseYear(this.CultureInfo(), g);
          b[c] = "year";
          i = true;
        } else if (!e && (B || j)) {
          a.intMonth = g;
          b[c] = "month";
          e = true;
        } else if (!j) {
          a.intDay = g;
          b[c] = "day";
          j = true;
        } else return null;
      }
      var o = Util.FindObjectInArray("day", b),
        s = Util.FindObjectInArray("month", b),
        t = Util.FindObjectInArray("year", b);
      if (j && e && i && !A && !y && ((o > t && o < s) || (o < t && o > s))) {
        var F = a.intMonth;
        a.intMonth = a.intDay;
        a.intDay = F;
      }
      if (!(j && e && i))
        if (!j && e && i) a.intDay = 1;
        else if (!(j && e && !i)) a = null;
    }
    if (a != null && a.intYear == 0) a = null;
    if (a != null && !this.IsDateValidDate(a)) a = null;
    return a;
  }
  this.UnformatDateExact = j;
  function j(a) {
    ULSrLq:;
    if (a == null || a == "") return null;
    if (this.CultureInfo() == null || this.Mode() == this.k_intModeUnknown)
      return null;
    if (this.Mode() == this.k_intModeNoFormatting) return null;
    if (typeof this._strFormatMap == "undefined") return null;
    var f = this._strFormatMap.match(/\d+/g);
    if (f == null) return null;
    for (
      var c = true, d = Util.CreateDefaultObjDateTime(), g = 0;
      c && g < f.length;
      g++
    ) {
      a = this.TrimLeadingDateSeparatorsAndIgnorableSubstrings(a);
      if (a != "") {
        var e = this.ParseDatePart(a, f[g], d);
        if (e != null && e != "") a = a.substring(e.length);
        else c = false;
      } else c = false;
    }
    a = this.TrimLeadingDateSeparatorsAndIgnorableSubstrings(a);
    if (!c || !Util.IsNullOrEmptyString(a) || !b(d)) d = null;
    return d;
  }
  this.ParseDatePart = o;
  function o(e, a, j) {
    ULSrLq:;
    var b = null,
      c = 0;
    if (a >= 0 && a <= 1) {
      var f = this.ParseMonthName(e, true);
      if (f.boolFoundMonth) {
        c = f.intMonth;
        b = f.strMonthName;
      }
    } else if (a >= 4 && a <= 5) {
      var i = this.GenerateRegularExpresionForDatePartName(
          this.CultureInfo().k_objAnyNamesOfDays,
          false
        ),
        g = e.match(i);
      if (g != null && g[0] != "") {
        b = g[0];
        c = 0;
      }
    } else if (a == 11) b = "";
    else if (a >= 8 && a <= 10) {
      var h = new RegExp("^\\d+", "g"),
        d = e.match(h);
      if (d != null && d[0].length <= 4) {
        b = d[0];
        if (a >= 9 && a <= 10)
          c = DateUtils.ParseYear(this.CultureInfo(), parseInt(b, 10));
        else c = parseInt(b, 10);
      }
    } else if (a >= 2 && a <= 7) {
      var h = new RegExp("^\\d+", "g"),
        d = e.match(h);
      if (d != null && d[0].length <= 2) {
        b = d[0];
        c = parseInt(b, 10);
      }
    } else if (a >= 12 && a <= 21) b = "";
    b != null && b != "" && this.SetDatePart(c, a, j);
    return b;
  }
  this.SetDatePart = u;
  function u(b, a, c) {
    ULSrLq:;
    if (a >= 0 && a <= 3) c.intMonth = b;
    else if (a >= 4 && a <= 7) c.intDay = b;
    else if (a >= 8 && a <= 10) c.intYear = b;
  }
  this.IsDateValidDate = b;
  function b(a) {
    ULSrLq:;
    var b = new Date(a.intYear, a.intMonth - 1, a.intDay, 1, 10, 0),
      c =
        a.intYear == b.getFullYear() &&
        a.intMonth == b.getMonth() + 1 &&
        a.intDay == b.getDate();
    return c;
  }
  this.UnformatTime = r;
  function r(c) {
    ULSrLq:;
    var d = this.CultureInfo().k_strUnformatTime;
    c = c.toUpperCase();
    var f = new RegExp("^\\s*" + d.strRegExp + "\\s*$"),
      b = f.exec(c);
    if (b == null) {
      c = this.TrimIgnorableSubstrings(c);
      b = f.exec(c);
    }
    if (b == null) return null;
    if (b.length != 5) return null;
    var a = Util.CreateDefaultObjDateTime();
    a.intHours = parseInt(b[d.intHours], 10);
    var g = parseInt(b[d.intMinutes], 10);
    a.intMinutes = isNaN(g) ? 0 : g;
    var h = parseInt(b[d.intSeconds], 10);
    a.intSeconds = isNaN(h) ? 0 : h;
    var e = b[d.intAMPM];
    if (Util.IsNonEmptyString(e))
      if (
        e == this.CultureInfo().PMDesignator &&
        a.intHours >= 0 &&
        a.intHours < 24
      )
        a.intHours = a.intHours >= 12 ? a.intHours : a.intHours + 12;
      else if (
        e == this.CultureInfo().AMDesignator &&
        a.intHours >= 0 &&
        a.intHours < 24
      )
        a.intHours = a.intHours == 12 ? 0 : a.intHours;
      else a = null;
    return a;
  }
  this.IsISO8601DateTimeString = a;
  function a(a) {
    ULSrLq:;
    var b = DateUtils.k_objREIsoDateTime.exec(a);
    return b != null;
  }
  this.ShouldPostBackForTimeZone = f;
  function f(b, c) {
    ULSrLq:;
    if (!Util_IsNullOrEmptyString(b.strOriginalValue)) {
      if (
        !Util_IsNullOrUndefined(b.objDateTime) &&
        !Util_IsNullOrEmptyString(b.objDateTime.strTZOffset)
      )
        return true;
      var g = ViewDataNode_GetUnderlyingDatatype(c);
      if (g == DateTimeXsdDatatype) if (a(b.strOriginalValue)) return false;
      var f = ViewDataNode_GetDatum(c),
        d = f.GetValue();
      if (!Util_IsNullOrEmptyString(d) && f.ValidateDataType()) {
        var e = this.UnformatIso8601(d, this.Mode());
        if (e != null && !Util_IsNullOrEmptyString(e.strTZOffset)) return true;
      }
    }
    return false;
  }
}
EventLog.boolPostbackOnStructuralChange = false;
function EventLogStaticData(a, b) {
  ULSrLq:;
  if (!(EventLogStaticData.prototype instanceof EventLogStaticDataTraits)) {
    EventLogStaticData.prototype = new EventLogStaticDataTraits();
    EventLogStaticData.prototype.constructor = EventLogStaticData;
    return new EventLogStaticData(a, b);
  }
  this.PostbackCounter = CurrentFormData.PostbackCounter(a);
  this.EditingSessionId = CurrentFormData.EditingSessionId(a);
  this.SolutionId = CurrentFormData.SolutionId(a);
  this.LoadedFromXmlDocument = CurrentFormData.LoadedFromXmlDocument(a);
  this.XmlLocation = encodeURIComponent(CurrentFormData.XmlLocation(a));
  this.XsnLocation = encodeURIComponent(CurrentFormData.XsnLocation(a));
  this.AbsoluteSolutionLocation = encodeURIComponent(
    CurrentFormData.AbsoluteSolutionLocation(a)
  );
  this.SaveLocation = encodeURIComponent(CurrentFormData.SaveLocation(a));
  this.WebUrl = encodeURIComponent(CurrentFormData.GetWebUrl(a));
  this.UrlToNavigateToOnClose = encodeURIComponent(
    CurrentFormData.UrlToNavigateToOnClose(a)
  );
  this.IsNew = CurrentFormData.IsNew(a) ? "1" : "0";
  this.IsHosted = CurrentFormData.IsHosted(a) ? "1" : "0";
  this.IsDocumentClosed = b == true ? "1" : "0";
  this.IsV4UI = CurrentFormData.IsV4UI(a) ? "1" : "0";
  this.PostbackReason = 0;
  this.PostbackType = 0;
  this.CreationTime = CurrentFormData.CreationTime(a);
  this.SessionState = CurrentFormData.SessionState(a);
  this.FormID = a;
  this.OnAfterSubmit = CurrentFormData_OnAfterSubmit(a);
  this.WebCurrentCulture = CurrentFormData_DefaultLcid(a);
  this.WebCurrentUICulture = CurrentFormData_LanguageLcid(a);
  this.OptimizedForFirstRequest = CurrentFormData_OptimizedForFirstRequest(a)
    ? "1"
    : "0";
  this.TimeZoneId = CurrentFormData_TimeZoneId(a);
}
function EventLogStaticDataTraits() {
  ULSrLq:;
  this.CreateEventLogStartEntry = function () {
    ULSrLq:;
    var a = [];
    a.push(8);
    a.push(this.PostbackCounter);
    a.push(this.EditingSessionId);
    a.push(encodeURIComponent(this.SolutionId));
    a.push(this.LoadedFromXmlDocument);
    a.push(this.XmlLocation);
    a.push(this.XsnLocation);
    a.push(this.AbsoluteSolutionLocation);
    a.push(this.SaveLocation);
    a.push(this.WebUrl);
    a.push(this.UrlToNavigateToOnClose);
    a.push(this.IsNew);
    a.push(this.IsHosted);
    a.push(this.IsDocumentClosed);
    a.push(this.IsV4UI);
    a.push(this.PostbackReason);
    a.push(this.PostbackType);
    a.push(this.CreationTime);
    a.push(this.SessionState);
    a.push(this.FormID);
    a.push(this.OnAfterSubmit);
    a.push(this.WebCurrentCulture);
    a.push(this.WebCurrentUICulture);
    a.push(this.OptimizedForFirstRequest);
    a.push(this.TimeZoneId);
    a.push(CurrentFormData_GetCanaryValue(this.FormID));
    return a.join(";");
  };
  this.CreateEventLogEntryWithVersion = function () {
    ULSrLq:;
    var b = this.CreateEventLogStartEntry(),
      a = [];
    a.push(1);
    a.push(b);
    return a.join(" ");
  };
  this.UpdateForCachedEventLogValue = function (d) {
    ULSrLq:;
    var b = d.split(" ");
    if (b.length > 0) {
      var c = b[0],
        a = c.split(";");
      if (a.length > 1 && a[0] == 8)
        if (parseInt(this.PostbackCounter) < parseInt(a[1]))
          this.PostbackCounter = a[1];
    }
  };
}
function EventLog() {}
EventLog.k_intEventIDClose = 15;
EventLog.k_intEventIDCancelClose = 16;
function EventLog_AddVerificationEvent(f, d, e, a, b, c) {
  ULSrLq:;
  EventLog_AddPrivate(f, d, e, a, b, c, false);
}
function EventLog_Add(b, a, g, j, k, m, e, c, i, l, f) {
  ULSrLq:;
  if (
    CurrentFormData.CustomControlsIDArray(b).length > 0 &&
    ((a == 1 && e) ||
      a == 15 ||
      a == 10 ||
      a == 19 ||
      a == 14 ||
      a == 13 ||
      a == 9 ||
      a == 31 ||
      a == 11)
  )
    PostbackBody.duringRender = true;
  EventLog_AddPrivate(b, a, g, j, k, m, c);
  if (EventLog_CanAddEntry(c)) {
    var h = a == 20 || a == 33 || a == 31,
      d = EventLog_PostBackIfImplicitRoundTrip(b, g, e, i, l, f, h);
    if (!d)
      switch (f) {
        case 2:
        case 3:
          EventLog.boolPostbackOnStructuralChange = true;
      }
    return d;
  }
  PostbackBody.duringRender = false;
  return true;
}
function EventLog_AddPrivate(c, i, j, e, f, g, d) {
  ULSrLq:;
  if (EventLog_CanAddEntry(d)) {
    var a = [];
    a.push(i);
    a.push(encodeURIComponent(e));
    a.push(encodeURIComponent(f));
    a.push(encodeURIComponent(g));
    var h = a.join(";"),
      b = EventLog_Deserialize(c);
    b.push(h);
    EventLog_Serialize(c, b);
  }
}
function EventLog_Remove(b) {
  ULSrLq:;
  var a = EventLog_Deserialize(b);
  a.pop();
  EventLog_Serialize(b, a);
}
function EventLog_Initialize(a, b) {
  ULSrLq:;
  var c = GlobalFormData.Get(a);
  c.eventLogStaticData = new EventLogStaticData(a, b);
  EventLog_Serialize(a, []);
}
function EventLog_Delete(a) {
  ULSrLq:;
  document.getElementById(a + "__EventLog").value = "";
}
function EventLog_Serialize(c, b) {
  ULSrLq:;
  var a = b.join(" ") + " ";
  document.getElementById(c + "__EventLog").value = a;
}
function EventLog_Deserialize(c) {
  ULSrLq:;
  var b = document.getElementById(c + "__EventLog").value,
    a = b.split(" ");
  a.pop();
  return a;
}
function EventLog_CanAddEntry(a) {
  ULSrLq:;
  return (
    a || (!Dialog_DialogPresent() && PostbackBody.intPostbacksInProgress == 0)
  );
}
function EventLog_PostBackIfImplicitRoundTrip(j, e, d, g, h, i, f) {
  ULSrLq:;
  var b = false,
    a = null;
  if (d) b = true;
  else if (e != null) {
    a = Snippet_GetSnippetElementFromHtml(e);
    if (BaseControl_RequiresImplicitRoundTrip(a) && a[2] != "CustomControl")
      b = true;
  }
  if (b) {
    var c = h;
    if (!d && a != null) c = a[9];
    View_SubmitForm(j, g, c, i, f);
    return false;
  }
  return true;
}
function EventLog_EnsureEventLogStartEntry(b) {
  ULSrLq:;
  var e = GlobalFormData.Get(b),
    c = e.eventLogStaticData;
  if (c == null) {
    EventLog_Initialize(b, false);
    c = e.eventLogStaticData;
  }
  var a = null,
    d = c.CreateEventLogStartEntry();
  if (!EventLog_IsEmpty(b)) {
    a = EventLog_Deserialize(b);
    a[1] = d;
  } else {
    a = [];
    a.push(1);
    a.push(d);
  }
  EventLog_Serialize(b, a);
}
function EventLog_IsEventLogFirstRequestOptimized(a) {
  ULSrLq:;
  return CurrentFormData_OptimizedForFirstRequest(a);
}
EventLog.Count = EventLog_Count;
function EventLog_Count(a) {
  ULSrLq:;
  var b = 0;
  if (!EventLog_IsEmpty(a)) {
    var c = EventLog_Deserialize(a);
    b = c.length - 1;
  }
  return b;
}
EventLog.Value = EventLog_Value;
function EventLog_Value(b) {
  ULSrLq:;
  var a = document.getElementById(b + "__EventLog");
  if (a != null) return a.value;
  else return null;
}
function EventLog_IsEmpty(b) {
  ULSrLq:;
  var a = EventLog_Value(b);
  return Util_IsNullOrEmptyString(a) || a == " ";
}
function SelectionService() {}
SelectionService.objSelectedControl = null;
SelectionService.arrStickyHighlightControls = [];
SelectionService.arrNonStickyHighlightControls = [];
SelectionService.IsSelected = SelectionService_IsSelected;
function SelectionService_IsSelected(b) {
  ULSrLq:;
  var a = SelectionService_GetSelectedControl();
  if (a == null) return false;
  else return b.id == a.id;
}
SelectionService.SelectId = SelectionService_SelectId;
function SelectionService_SelectId(b) {
  ULSrLq:;
  var a = document.getElementById(b);
  a != null && SelectionService_Select(a);
}
SelectionService.Select = SelectionService_Select;
function SelectionService_Select(a) {
  ULSrLq:;
  var e;
  if (HoverMenu.isVisible) {
    HoverMenu_HideMenu();
    SelectionService_RemoveAllNonStickyHighlight();
  }
  var b = SelectionService_GetSelectedControl();
  if (b != a) {
    b != null && SelectionService__Select(b, false);
    if (a != null) {
      var d = ViewDataNode_GetViewDataNodeFromHtml(a);
      if (BaseControl_IsInSelectableState(d)) SelectionService__Select(a, true);
      else {
        var c = BaseControl_FindFirstFocusableControl(a);
        c != null && SelectionService__Select(c, true);
      }
    }
  }
}
SelectionService.GetHighlightState = SelectionService_GetHighlightState;
function SelectionService_GetHighlightState(c) {
  ULSrLq:;
  var b =
      Util_FindObjectInArray(
        c.id,
        SelectionService.arrStickyHighlightControls
      ) >= 0,
    a =
      Util_FindObjectInArray(
        c.id,
        SelectionService.arrNonStickyHighlightControls
      ) >= 0;
  if (b && !a) return 1;
  else if (!b && a) return 2;
  else if (b && a) return 3;
  else return 0;
}
SelectionService.IsHoverInState = SelectionService_IsHoverInState;
function SelectionService_IsHoverInState(a) {
  ULSrLq:;
  return a == 2 || a == 3;
}
SelectionService.IsIpInState = SelectionService_IsIpInState;
function SelectionService_IsIpInState(a) {
  ULSrLq:;
  return a == 1 || a == 3;
}
SelectionService.GetSelectedControl = SelectionService_GetSelectedControl;
function SelectionService_GetSelectedControl() {
  ULSrLq:;
  return SelectionService.objSelectedControl;
}
SelectionService.Highlight = SelectionService_Highlight;
function SelectionService_Highlight(a, b, c) {
  ULSrLq:;
  var f;
  if (a == null) return;
  if (HoverMenu.strVisibleMenuID != null) return;
  if (b && !c) SelectionService_RemoveAllStickyHighlightExcept(a);
  else !b && !c && SelectionService_RemoveAllNonStickyHighlightExcept(a);
  var d = g_arrControlTypes[a.getAttribute("ScriptClass")]["Highlight"];
  if (
    b &&
    Util_FindObjectInArray(a.id, SelectionService.arrStickyHighlightControls) ==
      -1
  ) {
    SelectionService.arrStickyHighlightControls.push(a.id);
    d(a, b);
  } else if (
    !b &&
    Util_FindObjectInArray(
      a.id,
      SelectionService.arrNonStickyHighlightControls
    ) == -1
  ) {
    SelectionService.arrNonStickyHighlightControls.push(a.id);
    d(a, b);
  }
  var e =
    g_arrControlTypes[a.getAttribute("ScriptClass")]["RefreshVisualState"];
  e(a);
}
SelectionService.RemoveHighlight = SelectionService_RemoveHighlight;
function SelectionService_RemoveHighlight(a, b) {
  ULSrLq:;
  var h;
  if (a == null || a.parentNode == null) return;
  if (HoverMenu.strVisibleMenuID != null) return;
  var f = SelectionService_GetSelectedControl();
  if (b && f != null && a.id == f.id) return;
  var d = Util_FindObjectInArray(
      a.id,
      SelectionService.arrStickyHighlightControls
    ),
    c = Util_FindObjectInArray(
      a.id,
      SelectionService.arrNonStickyHighlightControls
    ),
    e = g_arrControlTypes[a.getAttribute("ScriptClass")]["RemoveHighlight"];
  if (!b && c >= 0) {
    SelectionService.arrNonStickyHighlightControls[c] = null;
    e(a, b);
  } else if (b && d >= 0) {
    SelectionService.arrStickyHighlightControls[d] = null;
    e(a, b);
  }
  var g =
    g_arrControlTypes[a.getAttribute("ScriptClass")]["RefreshVisualState"];
  g(a);
}
SelectionService.RemoveAllStickyHighlightExcept = SelectionService_RemoveAllStickyHighlightExcept;
function SelectionService_RemoveAllStickyHighlightExcept(d) {
  ULSrLq:;
  var c = "";
  if (d != null) c = d.id;
  for (var b = 0; b < SelectionService.arrStickyHighlightControls.length; b++) {
    var a = SelectionService.arrStickyHighlightControls[b];
    if (a == null || a == c) continue;
    var e = document.getElementById(a);
    e != null && SelectionService_RemoveHighlight(e, true);
  }
  SelectionService.arrStickyHighlightControls = [];
}
SelectionService.RemoveAllStickyHighlight = SelectionService_RemoveAllStickyHighlight;
function SelectionService_RemoveAllStickyHighlight() {
  ULSrLq:;
  SelectionService_RemoveAllStickyHighlightExcept(null);
}
SelectionService.RemoveAllNonStickyHighlightExcept = SelectionService_RemoveAllNonStickyHighlightExcept;
function SelectionService_RemoveAllNonStickyHighlightExcept(d) {
  ULSrLq:;
  var c = "";
  if (d != null) c = d.id;
  for (
    var b = 0;
    b < SelectionService.arrNonStickyHighlightControls.length;
    b++
  ) {
    var a = SelectionService.arrNonStickyHighlightControls[b];
    if (a == null || a == c) continue;
    var e = document.getElementById(a);
    e != null && SelectionService_RemoveHighlight(e, false);
  }
  SelectionService.arrNonStickyHighlightControls = [];
}
SelectionService.RemoveAllNonStickyHighlight = SelectionService_RemoveAllNonStickyHighlight;
function SelectionService_RemoveAllNonStickyHighlight() {
  ULSrLq:;
  SelectionService.RemoveAllNonStickyHighlightExcept(null);
}
SelectionService._Select = SelectionService__Select;
function SelectionService__Select(a, c) {
  ULSrLq:;
  var e = null,
    f = null;
  if (c) {
    SelectionService.objSelectedControl = a;
    var d = g_arrControlTypes[a.getAttribute("ScriptClass")]["Select"];
    d(a);
  } else {
    SelectionService.objSelectedControl = null;
    if (a.parentNode != null) {
      var b = g_arrControlTypes[a.getAttribute("ScriptClass")]["UnSelect"];
      b(a);
    }
  }
}
SelectionService.RememberFocus = SelectionService_RememberFocus;
function SelectionService_RememberFocus(b) {
  ULSrLq:;
  var a = ViewDataNode_GetViewDataNodeFromHtml(b);
  g_objCurrentFormDataSelection != null &&
    g_objCurrentFormDataSelection.BackupFocus(a);
  Dialog.boolModalDialogForFocusRestorationPresent &&
    Dialog_MaintainModalDialog();
}
SelectionService.RememberScrollPosition = SelectionService_RememberScrollPosition;
function SelectionService_RememberScrollPosition() {
  ULSrLq:;
  typeof g_objCurrentFormDataSelection != "undefined" &&
    g_objCurrentFormDataSelection != null &&
    g_objCurrentFormDataSelection.BackupScrollPosition();
}
SelectionService.RestoreFocus = SelectionService_RestoreFocus;
function SelectionService_RestoreFocus(a) {
  ULSrLq:;
  SelectionService_RestoreFocusInternal(a, false, false);
}
function SelectionService_RestoreFocusAfterPostback(a) {
  ULSrLq:;
  SelectionService_RestoreFocusInternal(a, true, false);
}
function SelectionService_RestoreFocusAfterUserMessages(a) {
  ULSrLq:;
  SelectionService_RestoreFocusInternal(a, false, true);
}
function SelectionService_RestoreFocusInternal(a, c, d) {
  ULSrLq:;
  Perf_Start_Trace(7596, "SelectionServiceRestoreFocusInternal");
  try {
    if (g_objCurrentFormDataSelection == null) {
      g_objCurrentFormDataSelection = new SelectionInformation();
      g_objCurrentFormDataSelection.Deserialize();
    }
    if (d && g_objCurrentFormDataSelection.strFormId != a) {
      g_objCurrentFormDataSelection = new SelectionInformation();
      g_objCurrentFormDataSelection.strFormId = a;
    }
    if (
      Util_IsNonEmptyString(g_objCurrentFormDataSelection.strFormId) &&
      Util_IsNonEmptyString(a) &&
      g_objCurrentFormDataSelection.strFormId != a
    )
      return;
    var b;
    if (Util_IsNullOrEmptyString(g_objCurrentFormDataSelection.strFormId))
      b = CurrentFormData_ViewDataTree(a);
    else
      b = CurrentFormData_ViewDataTree(g_objCurrentFormDataSelection.strFormId);
    (!c ||
      (g_objCurrentFormDataSelection.arrFocusBackupForPostback.length > 0 &&
        g_objCurrentFormDataSelection.boolIpfsCausedPostback) ||
      SelectionService_IsManagingPageFocus(a)) &&
      g_objCurrentFormDataSelection.RestoreFocus(b);
    g_objCurrentFormDataSelection.boolIpfsCausedPostback = false;
    g_objCurrentFormDataSelection.ClearSerializedForm();
  } catch (e) {}
  Perf_End_Trace(7597, "SelectionServiceRestoreFocusInternal");
}
function SelectionService_ResetState(a) {
  ULSrLq:;
  if (a) {
    SelectionService_RemoveAllStickyHighlight();
    try {
      SelectionService_Select(null);
    } catch (b) {}
  } else {
    SelectionService.arrStickyHighlightControls = [];
    SelectionService.arrNonStickyHighlightControls = [];
    SelectionService.objSelectedControl = null;
  }
}
SelectionService.ForgetAllSelection = SelectionService_ForgetAllSelection;
function SelectionService_ForgetAllSelection(a) {
  ULSrLq:;
  PostbackBody_DeleteDocumentCookie(PostbackBody_GetCookiePrefix(a), "_sel");
  g_objCurrentFormDataSelection != null &&
    g_objCurrentFormDataSelection.ClearSerializedForm();
  g_objCurrentFormDataSelection = new SelectionInformation();
  SelectionService_ResetState(CurrentFormData_IsValidViewDataTree(a));
}
function SelectionService_IsManagingPageFocus(a) {
  ULSrLq:;
  return CurrentFormData_IsHosted(a) || CurrentFormData_IsListItemPage(a);
}
function SelectionInformation() {
  ULSrLq:;
  if (!(SelectionInformation.prototype instanceof SelectionInformationTraits)) {
    SelectionInformation.prototype = new SelectionInformationTraits();
    SelectionInformation.prototype.constructor = SelectionInformation;
    return new SelectionInformation();
  }
  this.boolIpfsCausedPostback = false;
  this.strFormId = _InfoPath.GetFirstControl().strFormId;
  for (var c = _InfoPath.arrForms.length, b = 0; b < c; b++) {
    var a = _InfoPath.arrForms[b];
    if (a != null && CurrentFormData_IsListItemPage(a.strFormId)) {
      this.strFormId = a.strFormId;
      break;
    }
  }
  this.arrFocusBackupForPostback = [];
  this.boolTextSelected = false;
  this.boolStructuralInsertSelectFirst = false;
  this.boolStructuralInsertBefore = false;
  this.boolStructuralAppendAtEnd = false;
  this.intScrollXPosition = 0;
  this.intScrollYPosition = 0;
}
function SelectionInformationTraits() {
  ULSrLq:;
  this.k_strLastSelectionFieldId = "__LastSelection";
  this.BackupFocus = h;
  function h(a) {
    ULSrLq:;
    var b = a.FormId;
    if (!GlobalFormData.Get(b).viewTreesAreMerged) return;
    this.strFormId = b;
    this.arrFocusBackupForPostback = ViewDataNode_BuildViewDataPath(a);
    this.boolStructuralInsertSelectFirst = false;
    if (document.selection)
      try {
        this.boolTextSelected =
          document.selection.createRange().text.length > 0;
      } catch (c) {
        this.boolTextSelected = false;
      }
  }
  this.BackupScrollPosition = b;
  function b() {
    ULSrLq:;
    this.intScrollXPosition = CrossBrowserLibrary.GetScrollX(this.strFormId);
    this.intScrollYPosition = CrossBrowserLibrary.GetScrollY(this.strFormId);
  }
  this.BackupFocusForStructural = a;
  function a(c, b, d) {
    ULSrLq:;
    var a;
    if (b == null) a = ViewDataNode_GetViewDataNodeFromHtml(c);
    else a = ViewDataNode_GetViewDataNodeFromHtml(b);
    this.BackupFocus(a);
    this.BackupScrollPosition();
    this.boolStructuralInsertSelectFirst = true;
    this.boolStructuralAppendAtEnd = b == null;
    this.boolStructuralInsertBefore = d;
  }
  this.RestoreFocus = g;
  function g(g) {
    ULSrLq:;
    var a = ViewDataNode_SelectViewDataPath(g, this.arrFocusBackupForPostback);
    if (this.boolStructuralInsertSelectFirst) {
      if (this.boolStructuralAppendAtEnd) {
        var f = ViewDataNode_GetChildNodes(a);
        if (f.length > 0) a = f[f.length - 1];
      } else {
        var h = a._objViewDataNodeParent;
        if (h != null) {
          var e = ViewDataNode_GetChildNodes(h),
            b = Util.IndexOf(e, a);
          if (this.boolStructuralInsertBefore) {
            b--;
            if (b < 0) b = 0;
          } else {
            b++;
            if (b >= e.length) b = e.length - 1;
          }
          a = e[b];
        }
      }
      var d = document.getElementById(a[9]);
      d && StructuralEditingControl.FocusNewContainer(d);
    } else {
      var d = document.getElementById(a[9]);
      if (d == null) return;
      var c = BaseControl_FindFirstFocusableControl(d);
      if (c != null) {
        var i =
          g_arrControlTypes[c.getAttribute("ScriptClass")]["RestoreFocus"];
        try {
          i(c);
        } catch (j) {}
        SelectionService.RememberFocus(c);
      }
    }
    !(UserAgentInfo.strBrowserType == 6 && this.intScrollYPosition == 0) &&
      this.SetWindowScrollPosition(g.FormId);
  }
  this.SetWindowScrollPosition = d;
  function d(b) {
    ULSrLq:;
    if (!CurrentFormData_IsV4UI(b))
      window.scrollTo(this.intScrollXPosition, this.intScrollYPosition);
    else {
      var a = document.getElementById("s4-workspace");
      if (a != null)
        window.setTimeout(
          'document.getElementById("s4-workspace").scrollTop = ' +
            this.intScrollYPosition,
          0
        );
      else
        window.setTimeout(
          "document.documentElement.scrollTop = " + this.intScrollYPosition,
          0
        );
    }
  }
  this.Serialize = j;
  function j() {
    ULSrLq:;
    var b = "";
    if (this.arrFocusBackupForPostback.length == 0) b = "";
    else {
      var a = [];
      a.push(this.strFormId);
      a.push(this.boolTextSelected ? 1 : 0);
      a.push(this.boolStructuralInsertSelectFirst ? 1 : 0);
      a.push(this.boolStructuralInsertBefore ? 1 : 0);
      a.push(this.boolStructuralAppendAtEnd ? 1 : 0);
      a.push(this.intScrollXPosition);
      a.push(this.intScrollYPosition);
      a.push(this.boolIpfsCausedPostback ? 1 : 0);
      for (var c = 0; c < this.arrFocusBackupForPostback.length; c++)
        a.push(this.arrFocusBackupForPostback[c]);
      b = "[" + a.join(",") + "]";
    }
    this.SetStorageInput(b);
    return b;
  }
  this.Deserialize = i;
  function i() {
    ULSrLq:;
    var b = this.GetStorageInput();
    if (Util.IsNullOrEmptyString(b)) return;
    if (b.length < 2 || b.charAt(0) != "[" || b.charAt(b.length - 1) != "]")
      return;
    b = b.substring(1, b.length - 2);
    var a = b.split(",");
    if (a.length < 8) return;
    this.strFormId = a[0];
    if (!(a[1] == 0 || a[1] == 1)) return;
    this.boolTextSelected = a[1] != 0;
    if (!(a[2] == 0 || a[2] == 1)) return;
    this.boolStructuralInsertBefore = a[2] != 0;
    if (!(a[3] == 0 || a[3] == 1)) return;
    this.boolStructuralInsertBefore = a[3] != 0;
    if (!(a[4] == 0 || a[4] == 1)) return;
    this.boolStructuralAppendAtEnd = a[4] != 0;
    if (a[5] < 0) return;
    this.intScrollXPosition = a[5];
    if (a[6] < 0) return;
    this.intScrollYPosition = a[6];
    if (!(a[7] == 0 || a[7] == 1)) return;
    this.boolIpfsCausedPostback = a[7] != 0;
    var d = a[8];
    if (d == null || Util.GetDataType(d) != 2 || d.length == 0) return;
    this.arrFocusBackupForPostback = [];
    this.arrFocusBackupForPostback.push(a[8]);
    for (var e = 9; e < a.length; e++) {
      var c = a[e];
      if (c == null || c < 0 || Util.GetDataType(c * 1) != 1) return;
      this.arrFocusBackupForPostback.push(c * 1);
    }
  }
  this.GetStorageInput = e;
  function e() {
    ULSrLq:;
    var a = document.getElementById(this.k_strLastSelectionFieldId);
    if (a != null) return a.value;
  }
  this.SetStorageInput = f;
  function f(b) {
    ULSrLq:;
    var a = document.getElementById(this.k_strLastSelectionFieldId);
    if (a != null) a.value = b;
  }
  this.ClearSerializedForm = c;
  function c() {
    ULSrLq:;
    document.getElementById(this.k_strLastSelectionFieldId).value = "";
  }
}
function KeyboardService() {}
KeyboardService.VirtualKeyMap = [];
KeyboardService.VirtualKeyMap[1] = [
  "10falsetruefalse",
  "13falsefalsefalse",
  "13falsefalsetrue",
  "10truefalsetrue",
  "84falsetruetrue",
  "73falsetruetrue",
  "79falsetruetrue",
  "38falsefalsefalse",
  "40falsefalsefalse",
  "27falsefalsefalse",
  "40falsetruefalse",
  "46falsetruefalse",
  "67falsetruefalse",
  "68falsetruefalse",
  "75falsetruefalse",
  "86falsetruefalse",
  "88falsetruefalse",
  "90falsetruefalse",
  "32falsefalsefalse",
  "46falsefalsefalse",
  "8falsefalsefalse",
  "8falsetruefalse",
  "9falsefalsefalse",
  "9falsefalsetrue",
  "121truefalsetrue",
];
KeyboardService.VirtualKeyMap[2] = [
  "13falsetruefalse",
  "13falsefalsefalse",
  "13falsefalsetrue",
  "13truefalsetrue",
  "84falsetruetrue",
  "73falsetruetrue",
  "79falsetruetrue",
  "38falsefalsefalse",
  "40falsefalsefalse",
  "27falsefalsefalse",
  "40falsetruefalse",
  "46falsetruefalse",
  "67falsetruefalse",
  "68falsetruefalse",
  "75falsetruefalse",
  "86falsetruefalse",
  "88falsetruefalse",
  "90falsetruefalse",
  "32falsefalsefalse",
  "46falsefalsefalse",
  "8falsefalsefalse",
  "8falsetruefalse",
  "9falsefalsefalse",
  "9falsefalsetrue",
  "121truefalsetrue",
];
KeyboardService.VirtualKeyMap[3] = [
  "13falsetruefalse",
  "13falsefalsefalse",
  "13falsefalsetrue",
  "13truefalsetrue",
  "84falsetruetrue",
  "73falsetruetrue",
  "79falsetruetrue",
  "38falsefalsefalse",
  "40falsefalsefalse",
  "27falsefalsefalse",
  "40falsetruefalse",
  "46falsetruefalse",
  "67falsetruefalse",
  "68falsetruefalse",
  "75falsetruefalse",
  "86falsetruefalse",
  "88falsetruefalse",
  "90falsetruefalse",
  "32falsefalsefalse",
  "46falsefalsefalse",
  "8falsefalsefalse",
  "8falsetruefalse",
  "9falsefalsefalse",
  "9falsefalsetrue",
  "121truefalsetrue",
];
KeyboardService.OnKeyPress = KeyboardService_OnKeyPress;
function KeyboardService_OnKeyPress(c, a) {
  ULSrLq:;
  if (HoverMenu.isVisible) if (!HoverMenu.OnKeyPress(c, a)) return false;
  var d = KeyboardService_GetVirtualKey(a),
    b = false;
  switch (d) {
    case 0:
      KeyboardService_ProcessStructuralOperations(c, 0);
      b = true;
  }
  if (b) {
    Util.StopEventProprogation(a);
    return false;
  } else return true;
}
KeyboardService.OnKeyDown = KeyboardService_OnKeyDown;
function KeyboardService_OnKeyDown(b, d) {
  ULSrLq:;
  if (HoverMenu.isVisible) if (!HoverMenu_OnKeyDown(b, d)) return false;
  var f = KeyboardService_GetVirtualKey(d),
    a = false;
  switch (f) {
    case 0:
      if (UserAgentInfo.strBrowser == 2 || UserAgentInfo.strBrowser == 7) {
        KeyboardService_ProcessStructuralOperations(b, 0);
        a = true;
      }
      break;
    case 11:
      KeyboardService_ProcessStructuralOperations(b, 1);
      a = true;
      break;
    case 4:
      KeyboardService_ProcessToolbarAccess(b);
      a = true;
      break;
    case 5:
      ErrorVisualization_VirtualKeyMoreInfoErrorVisAccess(b, d);
      a = true;
      break;
    case 6:
      var c = SelectionService.GetSelectedControl();
      if (c != null) {
        c.blur();
        c.focus();
      }
      var e = [];
      e.push(
        'KeyboardService_ProcessGotoNextError("',
        b,
        '",',
        c == null ? "null" : 'document.getElementById("' + c.id + '")',
        ");"
      );
      window.setTimeout(e.join(""), 1);
      a = true;
      break;
    case 10:
    case 24:
      KeyboardService_ProcessStructuralOperations(b, 2);
      a = true;
  }
  if (a) {
    Util.StopEventProprogation(d);
    return false;
  } else return true;
}
KeyboardService.ProcessGotoNextError = KeyboardService_ProcessGotoNextError;
function KeyboardService_ProcessGotoNextError(b, a) {
  ULSrLq:;
  !ErrorVisualization_FocusNextInvalidControl(b, a) &&
    UserMessages.ShowAlertMessage(
      IntlCoreStrings.k_strNoAdditionalErrors,
      true
    );
}
KeyboardService.GetVirtualKey = KeyboardService_GetVirtualKey;
function KeyboardService_GetVirtualKey(a) {
  ULSrLq:;
  a = Window_EnsureEvent(a);
  var c = KeyboardService.VirtualKeyMap[UserAgentInfo.strBrowser];
  if (c == null) return -1;
  for (
    var d = "" + a.keyCode + a.altKey + a.ctrlKey + a.shiftKey, b = 0;
    b < c.length;
    b++
  )
    if (c[b] == d) return b;
  return -1;
}
KeyboardService.ProcessStructuralOperations = KeyboardService_ProcessStructuralOperations;
function KeyboardService_ProcessStructuralOperations(c, b) {
  ULSrLq:;
  var a = SelectionService_GetSelectedControl();
  if (a == null) return;
  HoverMenu.objMenuAccessSourceControl = a;
  KeyboardService_ProcessStructuralOperationsHelper(a, b);
}
KeyboardService.ProcessStructuralOperationsHelper = KeyboardService_ProcessStructuralOperationsHelper;
function KeyboardService_ProcessStructuralOperationsHelper(a, c) {
  ULSrLq:;
  var b = a.getAttribute("ScriptClass");
  if (
    UserAgentInfo.strBrowser != 1 &&
    b == "Container" &&
    a.parentNode != null
  ) {
    var l = a.parentNode.getAttribute("ScriptClass");
    if (l == "RichTextCollection") {
      a = document.getElementById(a.id + "_RT1");
      b = a.getAttribute("ScriptClass");
    }
  }
  if (b == "MultiSelectListBoxItem" && a.tagName.toLowerCase() == "input")
    a = a.parentNode;
  if (b != "Container" && b != "RepeatingTableRow") {
    var e = Snippet_GetSnippetElementFromHtml(a);
    if (e[5] == 3) {
      var m = e.ControlType["OnChange"];
      if (c == 0 || c == 1) PostbackBody.boolPostbacksBlocked = true;
      m(a, null);
      PostbackBody.boolPostbacksBlocked = false;
      if (PostbackBody.IsPostingBack()) return;
    }
    if (b == "RichTextBox") {
      a = BaseControl_GetParentInfoPathControl(a);
      a = BaseControl_GetParentInfoPathControl(a);
    }
    a = BaseControl_GetParentInfoPathControl(a);
    if (a == null) return;
    e = Snippet_GetSnippetElementFromHtml(a);
    if (e[5] != 6) return;
    b = "Container";
  }
  var j = BaseControl_GetContainerId(a.id);
  if (Util_IsNullOrEmptyString(j)) return;
  var d = document.getElementById(j);
  if (d == null) return;
  var f = ViewDataNode_GetViewDataNodeFromHtml(d);
  if (ViewDataNode_IsDisabled(f)) return;
  b = d.getAttribute("ScriptClass");
  var h = false;
  switch (c) {
    case 0:
      if (b == "RepeatingSection" || b == "RepeatingTable") {
        var j = BaseControl.GetContainerId(a.id),
          d = document.getElementById(j),
          k = ViewDataNode_GetChildNodes(f),
          o = ViewDataNode_GetChildNodes(k[0]),
          g = HoverMenu.GetXmlToEdit(f);
        Util.IsNonEmptyString(g) && xCollectionControl_InsertAfter(a.id, g);
      } else h = true;
      break;
    case 1:
      var g = HoverMenu.GetXmlToEdit(f);
      if (Util.IsNonEmptyString(g) && b != "MultiSelectListBoxCollection") {
        var i = null;
        if (b == "RepeatingSection" || b == "RepeatingTable")
          i = xCollectionControl_Remove;
        else if (b == "Section" || b == "ChoiceSection") i = Section_Remove;
        i != null && i(a.id, g);
      } else h = true;
      break;
    case 2:
      if (HoverMenu_ShouldShowWidget(a)) {
        var n = HoverMenu_GetWidgetIdForContainer(a);
        KeyboardService_ToolbarAccessSteps(n, a.id);
      } else h = true;
  }
  PostbackBody_HasBlockedPostback() && PostbackBody_ExecuteBlockedPostback();
  h && KeyboardService_ProcessStructuralOperationsHelper(d, c);
}
KeyboardService.ToolbarAccessSteps = KeyboardService_ToolbarAccessSteps;
function KeyboardService_ToolbarAccessSteps(b, a) {
  ULSrLq:;
  KeyboardService_DelayedFunctionCall(
    "KeyboardService_ToolbarAccessStep1",
    b,
    a,
    10
  );
}
function KeyboardService_ToolbarAccessStep1(a, b) {
  ULSrLq:;
  try {
    document.getElementById(a).childNodes[0].focus();
  } catch (c) {}
  KeyboardService_DelayedFunctionCall(
    "KeyboardService_ToolbarAccessStep2",
    a,
    b,
    50
  );
}
function KeyboardService_ToolbarAccessStep2(c, a) {
  ULSrLq:;
  var b = document.getElementById(a),
    d = b.getAttribute("FormId");
  SelectionService.Select(b);
  KeyboardService_DelayedFunctionCall(
    "KeyboardService_ToolbarAccessStep3",
    c,
    a,
    100
  );
}
function KeyboardService_ToolbarAccessStep3(a, b) {
  ULSrLq:;
  try {
    document.getElementById(a).childNodes[0].focus();
  } catch (c) {}
  KeyboardService_DelayedFunctionCall(
    "KeyboardService_ToolbarAccessStep4",
    a,
    b,
    100
  );
}
function KeyboardService_ToolbarAccessStep4(a) {
  ULSrLq:;
  document.getElementById(a).childNodes[0].onclick();
}
function KeyboardService_DelayedFunctionCall(a, c, b, d) {
  ULSrLq:;
  window.setTimeout(a + '("' + c + '", "' + b + '");', d);
}
KeyboardService.ProcessToolbarAccess = KeyboardService_ProcessToolbarAccess;
function KeyboardService_ProcessToolbarAccess(a) {
  ULSrLq:;
  var e = GlobalFormData.Get(a);
  if (e.objFocusedToolbarControl == null) {
    Toolbar.arrLastFocusedFormControl =
      g_objCurrentFormDataSelection.arrFocusBackupForPostback;
    for (
      var b = null,
        d = [
          a + "__toolbar_top_button0",
          a + "__toolbar_top_viewdropdown",
          a + "__toolbar_bottom_button0",
          a + "__toolbar_bottom_viewdropdown",
        ],
        c = 0;
      c < d.length && b == null;
      c++
    )
      b = document.getElementById(d[c]);
    b != null && b.focus();
  } else if (Toolbar.arrLastFocusedFormControl != null) {
    g_objCurrentFormDataSelection.arrFocusBackupForPostback =
      Toolbar.arrLastFocusedFormControl;
    SelectionService_RestoreFocus(a);
    g_objCurrentFormDataSelection.arrFocusBackupForPostback =
      Toolbar.arrLastFocusedFormControl;
    Toolbar.arrLastFocusedFormControl = null;
  }
}
function Body() {}
Body.OnClick = function () {
  ULSrLq:;
  Body_UnselectAll(Window_GetEvent(), false);
};
function Body_UnselectAll(d) {
  ULSrLq:;
  if (IP_DatePicker.Close != null)
    for (var a = 0; a < _InfoPath.arrForms.length; a++)
      _InfoPath.arrForms[a] != null &&
        IP_DatePicker.Close(_InfoPath.arrForms[a].strFormId);
  if (RichTextBox_IsV4RTESelected()) return;
  var c = CrossBrowserLibrary_GetEventSourceElement(d),
    b = c != null ? c.getAttribute("unselectable") : "";
  if (Util_IsNullOrEmptyString(b) || b.toLowerCase() != "on") {
    SelectionService.Select(null);
    SelectionService.RemoveAllStickyHighlight();
  }
}
function Body_OnWebPartClick(a) {
  ULSrLq:;
  var c = Window_GetEvent();
  Body_UnselectAll(c, true);
  var b = GlobalFormData.Get(a);
  !b.boolDocumentClosed && IPFSRibbon_SetFocusedForm(a);
  return true;
}
function UserMessage(c, b, d, a) {
  ULSrLq:;
  this._strShortMessage = c;
  this._strDetailMessage = b;
  this._strLogId = d;
  this._strCorrelationId = a;
}
function UserMessageError() {}
UserMessageError.ShowMessageFromQueue = function (a, c, b) {
  ULSrLq:;
  var e = false,
    f = Toolbar.GetWidth(a);
  if (b == 1) {
    var d = View_GetViewFormFieldIDControl(a);
    Toolbar.Show(a, false);
    Util.SetInnerText(d, c);
  } else {
    UserMessageError.ShowDialog(a, c, b, UserMessages.CloseCurrentMessage);
    return;
  }
};
function UserMessageError_IsStartOverSupported(a) {
  ULSrLq:;
  if (
    Util_IsNullOrEmptyString(CurrentFormData_XmlLocation(a)) &&
    Util_IsNullOrEmptyString(CurrentFormData_XsnLocation(a))
  )
    return false;
  return true;
}
UserMessageError.ShowDialog = UserMessageError_ShowDialog;
function UserMessageError_ShowDialog(b, d, f, m) {
  ULSrLq:;
  var j = [
      0,
      Util.FormatButtonAccelerator(
        IntlCoreStrings.k_strWarningDialogButtonContinue,
        IntlCoreStrings.k_strWarningDialogButtonContinueAccel
      ),
      "Dialog.OnTerminateButton();Util.StopEventProprogation(event);",
      IntlCoreStrings.k_strWarningDialogButtonContinueAccel,
      "button",
    ],
    i = [
      0,
      Util.FormatButtonAccelerator(
        IntlCoreStrings.k_strErrorDialogButtonStartAgain,
        IntlCoreStrings.k_strErrorDialogButtonStartAgainAccel
      ),
      "UserMessageError_StartAgainClicked('" +
        b +
        "');Util.StopEventProprogation(event);",
      IntlCoreStrings.k_strErrorDialogButtonStartAgainAccel,
      "button",
    ],
    c = [
      0,
      Util.FormatButtonAccelerator(
        IntlCoreStrings.k_strErrorDialogButtonClose,
        IntlCoreStrings.k_strErrorDialogButtonCloseAccel
      ),
      "UserMessageError_CloseClicked();Util.StopEventProprogation(event);",
      IntlCoreStrings.k_strErrorDialogButtonCloseAccel,
      "button",
    ],
    g = null,
    a = [];
  if (f == 4 || f == 9) {
    a[1] = IntlCoreStrings.k_strWarningDialogTitle;
    a[2] = [j];
    var o = IntlCoreStrings.k_strWarningDialogButtonContinue;
    a[11] = Util.FormatString(
      IntlCoreStrings.k_strWarningDialogContinueDesc,
      o
    );
    g = UserMessageError.CombineWarningDetails(b);
  } else if (f == 12) {
    var l = [
        0,
        Util.FormatButtonAccelerator(
          IntlCoreStrings.k_strErrorDialogButtonTryAgain,
          IntlCoreStrings.k_strErrorDialogButtonTryAgainAccel
        ),
        "UserMessageError_StartAgainClicked('" +
          b +
          "');Dialog.SetupPostbackWaitChangeMessage();Util.StopEventProprogation(event);",
        IntlCoreStrings.k_strErrorDialogButtonTryAgainAccel,
        "button",
      ],
      h = [
        1,
        Util.FormatButtonAccelerator(
          IntlCoreStrings.k_strOfflineWarningDialogButtonExitForm,
          IntlCoreStrings.k_strOfflineWarningDialogButtonExitFormAccel
        ),
        "UserMessageError_CloseClicked();Util.StopEventProprogation(event);",
        IntlCoreStrings.k_strOfflineWarningDialogButtonExitFormAccel,
        "button",
      ];
    a[1] = IntlCoreStrings.k_strWarningDialogTitle;
    if (UserMessageError_IsStartOverSupported(b)) a[2] = [l, h];
    else a[2] = [h];
    g = UserMessageError.FormatDetails(d._strDetailMessage, d._strLogId);
    a[11] = null;
    a[12] = null;
  } else {
    var e = IntlCoreStrings.k_strErrorDialogButtonClose,
      n;
    if (Print_IsPrintWindow(b)) {
      a[1] = IntlCoreStrings.k_strErrorDialogTitle;
      a[2] = [c];
      a[12] = Util.FormatString(IntlCoreStrings.k_strErrorDialogCloseDesc, e);
    } else if (f == 11) {
      a[1] = IntlCoreStrings.k_strLoadErrorDialogTitle;
      var k = [
        0,
        Util.FormatButtonAccelerator(
          IntlCoreStrings.k_strErrorDialogButtonTryAgain,
          IntlCoreStrings.k_strErrorDialogButtonTryAgainAccel
        ),
        "UserMessageError_StartAgainClicked('" +
          b +
          "');Util.StopEventProprogation(event);",
        IntlCoreStrings.k_strErrorDialogButtonTryAgainAccel,
        "button",
      ];
      if (UserMessageError_IsStartOverSupported(b)) {
        a[2] = [k, c];
        var p = IntlCoreStrings.k_strErrorDialogButtonTryAgain;
        a[12] =
          Util.FormatString(IntlCoreStrings.k_strErrorDialogTryAgainDesc, p) +
          "<BR/><BR/>" +
          Util.FormatString(IntlCoreStrings.k_strErrorDialogCloseDesc, e);
      } else {
        a[2] = [c];
        a[12] = Util.FormatString(IntlCoreStrings.k_strErrorDialogCloseDesc, e);
      }
    } else if (f == 13) {
      a[1] = IntlCoreStrings.k_strLoadErrorDialogTitle;
      a[2] = [c];
      a[12] = Util.FormatString(IntlCoreStrings.k_strErrorDialogCloseDesc, e);
    } else {
      a[1] = IntlCoreStrings.k_strErrorDialogTitle;
      if (UserMessageError_IsStartOverSupported(b)) {
        a[2] = [i, c];
        var n = IntlCoreStrings.k_strErrorDialogButtonStartAgain;
        a[12] =
          Util.FormatString(IntlCoreStrings.k_strErrorDialogStartAgainDesc, n) +
          "<BR/><BR/>" +
          Util.FormatString(IntlCoreStrings.k_strErrorDialogCloseDesc, e);
      } else {
        a[2] = [c];
        a[12] = Util.FormatString(IntlCoreStrings.k_strErrorDialogCloseDesc, e);
      }
    }
    g = UserMessageError.FormatDetails(
      d._strDetailMessage,
      d._strLogId,
      d._strCorrelationId
    );
  }
  if (a[2].length > 1) a[2][1][0] = 1;
  a[0] = "";
  a[3] = CurrentFormData.Direction(b);
  a[5] = Dialog.TextAlignmentStyle();
  a[10] = d._strShortMessage;
  a[13] = Util.IsNullOrEmptyString(g) ? "display:none;" : "display:inline";
  a[16] = g;
  a[14] = IntlCoreStrings.k_strErrorDialogDetailsAccel;
  a[15] = IntlCoreStrings.k_strErrorDialogShowDetails;
  Dialog.ShowModalDialog(b, "ErrorDialog", a, m);
}
UserMessageError.FormatDetails = function (e, g, d) {
  ULSrLq:;
  var a = null,
    c = false;
  if (Util.IsNonEmptyString(e)) a = Util.ConvertNewlinesToHtml(e);
  if (Util.IsNonEmptyString(g)) {
    c = true;
    var f = Util.FormatString(
      "<DIV>{0}</DIV><DIV><SPAN class='ErrorPageEmphasisText'>{1}</SPAN><SPAN>{2}</SPAN></DIV> ",
      IntlCoreStrings.k_strErrorDialogLogEntryText,
      IntlCoreStrings.k_strErrorDialogLogIdLabel,
      g
    );
    if (a == null) a = f;
    else a = a + "<BR/><BR/>" + f;
  }
  if (Util.IsNonEmptyString(d)) {
    var b = Util.FormatString(
      "<DIV><SPAN class='ErrorPageEmphasisText'>{0}</SPAN><SPAN>{1}</DIV>",
      IntlCoreStrings.k_strErrorDialogLogCorrelationIDText,
      d
    );
    if (a == null) a = b;
    else if (c) a = a + "<BR/>" + b;
    else a = a + "<BR/><BR/>" + b;
  }
  return a;
};
UserMessageError.CombineWarningDetails = function () {
  ULSrLq:;
  for (
    var a = [],
      d = UserMessages_GetReturnedMessages(),
      c = UserMessages.intNextMessage;
    c < d.length;
    c++
  ) {
    var b = d[c];
    if (b[0] != 4) break;
    a.length != 0 && a.push("<HR/>");
    a.push(UserMessageError.FormatDetails(b[2], b[3], b[4]));
  }
  return a.join("");
};
UserMessageError.ToggleDetails = function () {
  ULSrLq:;
  var c = document.getElementById("ErrorDialogDetailsLink"),
    a = document.getElementById("ErrorDialogDetailsSection");
  if (c == null || a == null) return;
  var b = a.style.display != "none";
  Util.SetInnerText(
    c,
    b
      ? IntlCoreStrings.k_strErrorDialogShowDetails
      : IntlCoreStrings.k_strErrorDialogHideDetails
  );
  a.style.display = b ? "none" : "inline";
  b
    ? a.setAttribute("aria-hidden", "true")
    : a.setAttribute("aria-hidden", "false");
};
function UserMessageError_StartAgainClicked(a) {
  ULSrLq:;
  var d = GlobalFormData.Get(a),
    b = UserMessages_GetReturnedMessages()[UserMessages.intNextMessage][0];
  switch (b) {
    case 4:
      var c =
        Util.UnescapeString(IntlCoreStrings.k_strStartOverAlertLine1) +
        "\n\n" +
        Util.UnescapeString(IntlCoreStrings.k_strStartOverAlertLine2);
      if (UserMessages.ShowConfirmMessage(c, false)) {
        UserMessages.StartNewForm(a, true);
        Dialog.HideDialog();
      }
      break;
    case 5:
      UserMessages.StartNewForm(a, true);
      break;
    case 12:
    case 11:
    default:
      Dialog.OnTerminateButton();
  }
}
function UserMessageError_CloseClicked() {
  ULSrLq:;
  if (Print_IsPrintWindow(Dialog.strFormId)) window.close();
  else {
    var a = GlobalFormData.Get(Dialog.strFormId);
    a.boolDocumentClosed = true;
    a.boolNeedPostBack = false;
    UserMessages_GetReturnedMessages()[UserMessages.intNextMessage][0] != 9 &&
      Dialog.HideDialog();
    View.OnFinishUserMessages();
  }
}
UserMessageError.ShowTemplatedMessage = function (b, f, a, d) {
  ULSrLq:;
  try {
    Toolbar.Show(b, false);
  } catch (e) {}
  if (!d) {
    var c = View_GetViewFormFieldIDControl(b);
    c.innerHTML = a;
  } else if (UserAgentInfo.strBrowser == 1 || UserAgentInfo.strBrowser == 2)
    DeferredHtmlLoader.Load(a);
  else {
    document.open("text/html", "replace");
    document.write(a);
    document.close();
  }
};
function DeferredHtmlLoader() {}
DeferredHtmlLoader._objTimer = null;
DeferredHtmlLoader._objHtml = null;
DeferredHtmlLoader._intLoadDelay = 1;
DeferredHtmlLoader.TimerProc = function () {
  ULSrLq:;
  if (DeferredHtmlLoader._objTimer != null) DeferredHtmlLoader._objTimer = null;
  UserAgentInfo.strBrowser != 2 && document.open("text/html", "replace");
  document.write(DeferredHtmlLoader._objHtml);
  document.close();
};
DeferredHtmlLoader.Load = function (a) {
  ULSrLq:;
  DeferredHtmlLoader._objHtml = a;
  DeferredHtmlLoader._objTimer = window.setTimeout(
    DeferredHtmlLoader.TimerProc,
    DeferredHtmlLoader._intLoadDelay
  );
};
function UserMessages() {}
UserMessages.MessageMetadata = [];
UserMessages.MessageMetadata[0] = [true, true, false];
UserMessages.MessageMetadata[1] = [false, true, false];
UserMessages.MessageMetadata[2] = [false, true, false];
UserMessages.MessageMetadata[3] = [false, true, true];
UserMessages.MessageMetadata[4] = [false, false, false];
UserMessages.MessageMetadata[5] = [false, false, true];
UserMessages.MessageMetadata[6] = [false, true, false];
UserMessages.MessageMetadata[7] = [false, true, false];
UserMessages.MessageMetadata[8] = [true, false, false];
UserMessages.MessageMetadata[9] = [false, false, true];
UserMessages.MessageMetadata[10] = [false, true, false];
UserMessages.MessageMetadata[11] = [false, false, true];
UserMessages.MessageMetadata[12] = [false, false, true];
UserMessages.MessageMetadata[13] = [false, false, true];
UserMessages.arrReturnedUserMessages = null;
UserMessages.arrFormIdIndexes = null;
UserMessages.intNextMessage = 0;
UserMessages.boolViewDisplayed = false;
UserMessages.funcOnFinishUserMessagesCallback = null;
function UserMessages_BuildReturnedUserMessagesIfNeeded() {
  ULSrLq:;
  if (
    UserMessages.arrReturnedUserMessages == null ||
    typeof UserMessages.arrReturnedUserMessages == "undefined"
  ) {
    UserMessages.arrReturnedUserMessages = [];
    UserMessages.arrFormIdIndexes = [];
    for (var a = 0; a < _InfoPath.arrForms.length; a++)
      if (_InfoPath.arrForms[a] != null) {
        for (
          var e = _InfoPath.arrForms[a].strFormId,
            b = CurrentFormData.UserMessages(e),
            d = b.length,
            c = 0;
          c < d;
          c++
        )
          UserMessages.arrFormIdIndexes.push(a);
        UserMessages.arrReturnedUserMessages = UserMessages.arrReturnedUserMessages.concat(
          b
        );
      }
  }
}
function UserMessages_ResetCachedValues() {
  ULSrLq:;
  UserMessages.arrReturnedUserMessages = null;
  UserMessages.arrFormIdIndexes = null;
  UserMessages.intNextMessage = 0;
}
function UserMessages_GetReturnedMessages() {
  ULSrLq:;
  UserMessages_BuildReturnedUserMessagesIfNeeded();
  return UserMessages.arrReturnedUserMessages;
}
function UserMessages_GetCurrentFormId() {
  ULSrLq:;
  UserMessages_BuildReturnedUserMessagesIfNeeded();
  return _InfoPath.arrForms[
    UserMessages.arrFormIdIndexes[UserMessages.intNextMessage]
  ].strFormId;
}
function UserMessages_GetLastFormId() {
  ULSrLq:;
  UserMessages_BuildReturnedUserMessagesIfNeeded();
  var a = UserMessages.arrFormIdIndexes.length - 1;
  return _InfoPath.arrForms[UserMessages.arrFormIdIndexes[a]].strFormId;
}
function UserMessages_GetPostbackNeeded() {
  ULSrLq:;
  for (var a = 0; a < _InfoPath.arrForms.length; a++)
    if (_InfoPath.arrForms[a] != null) {
      var b = GlobalFormData.Get(_InfoPath.arrForms[a].strFormId);
      if (b.boolNeedPostBack) return true;
    }
  return false;
}
UserMessages.ShowMessages = UserMessages_ShowMessages;
function UserMessages_ShowMessages(b) {
  ULSrLq:;
  var a = UserMessages_GetReturnedMessages();
  if (a != null && a.length > 0) {
    UserMessages.intNextMessage = 0;
    UserMessages.boolViewDisplayed = false;
    UserMessages.funcOnFinishUserMessagesCallback = b;
    UserMessages_ShowNextMessage();
    return true;
  } else return false;
}
UserMessages.ShowMessage = UserMessages_ShowMessage;
function UserMessages_ShowMessage(a, d, e) {
  ULSrLq:;
  var f = UserMessages_GetReturnedMessages();
  if (d == 12) PostbackBody.RetryingPostback = true;
  UserMessages.intNextMessage = 0;
  UserMessages.arrFormIdIndexes = new Array(1);
  for (var c = 0; c < _InfoPath.arrForms.length; c++)
    if (_InfoPath.arrForms[c] != null)
      if (e == _InfoPath.arrForms[c].strFormId) {
        UserMessages.arrFormIdIndexes[0] = c;
        break;
      }
  UserMessages.arrReturnedUserMessages = new Array(1);
  var b = new Array(4);
  b[0] = d;
  b[1] = a._strShortMessage == null ? a : a._strShortMessage;
  b[2] = a._strDetailMessage;
  b[3] = a._strLogId;
  UserMessages.arrReturnedUserMessages[0] = b;
  UserMessages.funcOnFinishUserMessagesCallback = null;
  UserMessages.boolViewDisplayed = true;
  UserMessages_ShowNextMessage();
  return !UserMessages.IsSync(d);
}
UserMessages.NeedsView = UserMessages_NeedsView;
function UserMessages_NeedsView(a) {
  ULSrLq:;
  return UserMessages.MessageMetadata[a][0];
}
UserMessages.IsSync = UserMessages_IsSync;
function UserMessages_IsSync(a) {
  ULSrLq:;
  return UserMessages.MessageMetadata[a][1];
}
UserMessages.AbortProcessingView = UserMessages_AbortProcessingView;
function UserMessages_AbortProcessingView(a) {
  ULSrLq:;
  return UserMessages.MessageMetadata[a][2];
}
function UserMessages_ShowNextMessage() {
  ULSrLq:;
  var c = UserMessages_GetReturnedMessages(),
    b = UserMessages_GetCurrentFormId(),
    a = c[UserMessages.intNextMessage];
  if (
    !UserMessages_GetPostbackNeeded() &&
    !UserMessages.boolViewDisplayed &&
    UserMessages.NeedsView(a[0])
  ) {
    View_RenderAfterPostback(false);
    UserMessages.boolViewDisplayed = true;
  }
  switch (a[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 6:
    case 7:
    case 8:
    case 10:
      UserMessages.ShowMessageFromQueue(b, a[1], a[0]);
      break;
    case 4:
    case 5:
    case 9:
    case 11:
    case 12:
    case 13:
      UserMessages.ShowMessageFromQueue(
        b,
        new UserMessage(a[1], a[2], a[3], a[4]),
        a[0]
      );
  }
}
function UserMessages_IsDialogStyleUserMessage(a) {
  ULSrLq:;
  if (
    a[0] == 4 ||
    a[0] == 5 ||
    a[0] == 9 ||
    a[0] == 11 ||
    a[0] == 12 ||
    a[0] == 13 ||
    a[0] == 8
  )
    return true;
  else return false;
}
UserMessages.ShowAlertMessage = UserMessages_ShowAlertMessage;
function UserMessages_ShowAlertMessage(a, b) {
  ULSrLq:;
  if (b) a = Util.UnescapeString(a);
  alert(a);
}
UserMessages.ShowConfirmMessage = UserMessages_ShowConfirmMessage;
function UserMessages_ShowConfirmMessage(a, b) {
  ULSrLq:;
  if (b) a = Util.UnescapeString(a);
  return window.confirm(a);
}
UserMessages.ShowMessageFromQueue = function (a, c, d) {
  ULSrLq:;
  var b = GlobalFormData.Get(a);
  switch (d) {
    case 0:
      UserMessages.ShowAlertMessage(c, false);
      break;
    case 2:
    case 7:
      b.boolNeedPostBack = true;
      break;
    case 3:
      UserMessages_ReloadPage();
      break;
    case 6:
      b.boolDocumentClosed = true;
      SelectionService.ForgetAllSelection(a);
      var e = parseInt(c);
      b.boolNeedPostBack = (e & 1) == 1;
      b.boolSavedOrSubmitted = (e & 2) == 2;
      break;
    case 8:
      Dialog.ShowModalDialogWithDataFromServer(
        a,
        c,
        UserMessages.CloseCurrentMessage
      );
      break;
    case 10:
      CurrentFormData_IsV4UI(a) && Print_OpenWindow(a, true);
      break;
    default:
      UserMessageError.ShowMessageFromQueue(a, c, d);
  }
  UserMessages.IsSync(d) && UserMessages.CloseCurrentMessage();
};
UserMessages.CloseCurrentMessage = UserMessages_CloseCurrentMessage;
function UserMessages_CloseCurrentMessage() {
  ULSrLq:;
  var b = UserMessages_GetReturnedMessages();
  if (
    b == null ||
    b.length <= UserMessages.intNextMessage ||
    b[UserMessages.intNextMessage] == null
  )
    return;
  var e = UserMessages_GetCurrentFormId(),
    d = GlobalFormData.Get(e),
    a = b[UserMessages.intNextMessage][0];
  if (a == 5 || a == 11 || a == 13)
    !d.boolDocumentClosed && UserMessages_ReloadPage();
  else if (a == 4) {
    for (var c = UserMessages.intNextMessage; c < b.length; c++)
      if (b[c][0] != 4) break;
    UserMessages.intNextMessage = c - 1;
  } else if (a == 9) {
    document.getElementById(e + "_InfoPathContinueLoading").value = "1";
    PostbackBody_Submit(true, true);
  } else if (a == 12)
    if (!d.boolDocumentClosed) {
      UserMessages_ResetCachedValues();
      PostbackBody_Submit(PostbackBody_boolLastPostBackWasFull, true);
    }
  if (!UserMessages.AbortProcessingView(a))
    if (
      UserMessages.intNextMessage <
      UserMessages_GetReturnedMessages().length - 1
    ) {
      UserMessages.intNextMessage++;
      UserMessages_ShowNextMessage();
    } else {
      if (!UserMessages_GetPostbackNeeded() && !d.boolDocumentClosed) {
        !UserMessages.boolViewDisplayed && View_RenderAfterPostback(false);
        SelectionService_RestoreFocusAfterUserMessages(
          UserMessages_GetLastFormId()
        );
      }
      UserMessages.funcOnFinishUserMessagesCallback != null &&
        UserMessages.funcOnFinishUserMessagesCallback();
    }
}
function UserMessages_ReloadPage() {
  ULSrLq:;
  if (UserAgentInfo.strBrowser == 1)
    window.navigate(UserMessages.GetRefreshUrl());
  else window.location.reload(true);
}
UserMessages.GetRefreshUrl = function () {
  ULSrLq:;
  var a = document.location.href;
  if (a.lastIndexOf("#") > a.indexOf("?"))
    return a.substring(0, a.lastIndexOf("#"));
  else return a;
};
UserMessages.StartNewForm = function (a, c) {
  ULSrLq:;
  var d = GlobalFormData.Get(a),
    b = c;
  d.boolNeedPostBack = false;
  UserMessages.intNextMessage = UserMessages_GetReturnedMessages().length;
  if (Util_IsNullOrEmptyString(CurrentFormData_GetCanaryValue(a))) b = false;
  EventLog_Add(a, 10, null, b ? "1" : "0", "", "", true, true, c, 15, 0);
};
function Dialog() {}
Dialog.enumModalDialogState = 0;
Dialog.objShowDialogTimer = null;
Dialog.objChangePostbackMessageTimer = null;
Dialog.intMinimumHeartBeatsUntilDialogShow = 0;
Dialog.intMinimumHeartBeatsToShow = 0;
Dialog.arrDialogTemplate = null;
Dialog.boolTemplatesInitialized = false;
Dialog.funcCallbackOnClose = null;
Dialog.funcCallbackSetValues = null;
Dialog.enumPageBackGround = 0;
Dialog.boolFirstHeartBeatAfterShowing = false;
Dialog.strCurrentMessageText = "";
Dialog.boolModalDialogForFocusRestorationPresent = false;
function Dialog_GetDialogObject(b, a) {
  ULSrLq:;
  return document.getElementById(b + a);
}
Dialog.ShowModalDialog = Dialog_ShowModalDialog;
function Dialog_ShowModalDialog(d, c, a, b) {
  ULSrLq:;
  Dialog.funcCallbackOnClose = b;
  return Dialog_ShowModalDialogEx(d, c, 1, 1, false, a, null);
}
Dialog.ShowModalDialogWithDataFromServer = Dialog_ShowModalDialogWithDataFromServer;
function Dialog_ShowModalDialogWithDataFromServer(c, b, a) {
  ULSrLq:;
  Dialog.funcCallbackOnClose = a;
  return Dialog_ShowModalDialogEx(c, b, 1, 1, true, null, null);
}
function Dialog_GetFormDirection() {
  ULSrLq:;
  var a = View_GetViewFormFieldIDControl(Dialog.strFormId);
  if (a != null && Util_IsNonEmptyString(a.parentNode.style.direction))
    return a.parentNode.style.direction;
  return Dialog_GetDirection();
}
Dialog.GetDirection = Dialog_GetDirection;
function Dialog_GetDirection() {
  ULSrLq:;
  return CurrentFormData_Direction(_InfoPath.GetFirstControl().strFormId);
}
function Dialog_ShowModalDialogEx(f, b, l, m, h, p, j) {
  ULSrLq:;
  switch (b) {
    case "Progress":
    case "SaveAs":
    case "FinalMessage":
    case "Alert":
    case "FileAttachment":
    case "InlinePictureDialog":
    case "InstallDSigCtrl":
    case "ErrorDialog":
    case "TwoButtonTemplateDialog":
      break;
    default:
      return;
  }
  var e = Dialog_GetInfo(b);
  SelectionService.RememberScrollPosition();
  if (Util_IsNullOrUndefined(e)) return;
  Util_IsNonEmptyString(Dialog.strFormId) &&
    Dialog.strFormId != f &&
    Dialog__HideTable(Dialog.strFormId);
  Dialog.strFormId = f;
  Dialog.type = b;
  var r = DialogInfo_GetDialogName(e),
    q = DialogInfo_GetPageBackgroundType(e),
    d = null,
    a = null;
  if (h) {
    if (typeof __dialogTemplate_ != "undefined" && __dialogTemplate_ != null) {
      d = __dialogTemplate_;
      __dialogTemplate_ = null;
    }
    if (typeof __GetDialogData_ != "undefined" && __GetDialogData_ != null) {
      a = __GetDialogData_();
      __GetDialogData_ = null;
    }
  }
  if (a == null) a = p;
  if (a == null) a = Dialog_GetData(b);
  if (d == null) d = Dialog_GetTemplate(b);
  var g = false,
    n = !Util_IsNullOrUndefined(d) && !Util_IsNullOrUndefined(a),
    o = DialogInfo.GetDataType(e) == 1;
  if (n) {
    if (o && !h) g = true;
  } else if (!h) g = true;
  if (g) {
    EventLog_Add(
      Dialog.strFormId,
      13,
      null,
      b,
      "true",
      DialogInfo.GetDataType(e) == 1 ? "true" : "false",
      true,
      true,
      false,
      6,
      0
    );
    return;
  }
  Dialog.arrDialogTemplate = d;
  Dialog.arrDialogData = a;
  Dialog.intMinimumHeartBeatsUntilDialogShow = l;
  Dialog.intMinimumHeartBeatsToShow = m;
  Dialog.enumPageBackGround = q;
  if (j != null) Dialog.objClientSideData = j;
  var k = document.getElementById(f + "__BrowserFormTopLevelSpan"),
    i = document.getElementById(f + "__XmlFormView");
  if (
    "FinalMessage" == b &&
    typeof k != "undefined" &&
    k != null &&
    typeof i != "undefined" &&
    i != null
  ) {
    var c = new Array(5);
    c[0] =
      "<TABLE style='WIDTH: 100%; HEIGHT: 100%'><TBODY><TR><TD style='WIDTH: 35px'></TD><TD style='VERTICAL-ALIGN: middle; TEXT-ALIGN: center'><SPAN style='POSITION: relative'><DIV class=DialogContainer id=";
    c[1] = f;
    c[2] =
      "__DialogContainer style='DISPLAY: block; LEFT: 0px; POSITION: relative; TOP: 0px'>";
    c[3] = Dialog_RenderDialogTemplate(
      Dialog.arrDialogTemplate,
      Dialog.arrDialogData
    );
    c[4] =
      "</DIV></SPAN></TD><TD style='WIDTH: 35px'></TD></TR></TBODY></TABLE>";
    i.innerHTML = c.join("");
  } else {
    Dialog__ShowTable();
    Dialog.enumModalDialogState = 1;
    Dialog.boolModalDialogForFocusRestorationPresent = true;
    if (Dialog.objShowDialogTimer == null)
      Dialog.objShowDialogTimer = window.setInterval(Dialog._HeartBeat, 50);
  }
}
Dialog.HideDialog = Dialog_HideDialog;
function Dialog_HideDialog() {
  ULSrLq:;
  if (
    Dialog.intMinimumHeartBeatsToShow == 0 ||
    Dialog.enumModalDialogState == 0 ||
    Dialog.enumModalDialogState != 1
  ) {
    for (var b = 0; b < _InfoPath.arrForms.length; b++) {
      var a = _InfoPath.arrForms[b].strFormId,
        c = GlobalFormData.Get(a);
      if (c.boolFinalMessageShown != true) {
        Dialog__HideTable(a);
        Dialog__HideDialog(a);
      }
    }
    Dialog_DoCallbackOnClose();
  } else Dialog.enumModalDialogState = 3;
}
Dialog.HideDialogWithCallback = Dialog_HideDialogWithCallback;
function Dialog_HideDialogWithCallback(a) {
  ULSrLq:;
  Dialog.funcCallbackOnClose = a;
  Dialog_HideDialog();
}
Dialog._HeartBeat = Dialog__HeartBeat;
function Dialog__HeartBeat() {
  ULSrLq:;
  if (Dialog.enumModalDialogState != 0)
    if (Dialog.enumModalDialogState == 1) {
      Dialog.intMinimumHeartBeatsUntilDialogShow--;
      Dialog.intMinimumHeartBeatsUntilDialogShow == 0 && Dialog__ShowDialog();
      Dialog__RestoreSizeAndPosition();
    } else if (Dialog.enumModalDialogState == 2) {
      if (Dialog.boolFirstHeartBeatAfterShowing) {
        Dialog.boolFirstHeartBeatAfterShowing = false;
        var e = Dialog_GetDialogObject(Dialog.strFormId, "__DialogTable"),
          b = Dialog.arrDialogData[4],
          a = null;
        if (Util_IsNullOrEmptyString(b)) Dialog_MaintainModalDialog();
        else a = document.getElementById(b);
        if (a != null)
          try {
            Util_DoubleFocus(a);
          } catch (d) {}
      }
      if (Dialog.intMinimumHeartBeatsToShow > 0)
        Dialog.intMinimumHeartBeatsToShow--;
      Dialog__RestoreSizeAndPosition();
    } else if (Dialog.enumModalDialogState == 3) {
      Dialog.intMinimumHeartBeatsToShow--;
      if (Dialog.intMinimumHeartBeatsToShow <= 0) {
        var c = GlobalFormData.Get(Dialog.strFormId);
        if (c.boolFinalMessageShown != true) {
          Dialog__HideTable(Dialog.strFormId);
          Dialog__HideDialog(Dialog.strFormId);
        }
        Dialog_DoCallbackOnClose();
      }
    }
}
Dialog.DialogPresent = Dialog_DialogPresent;
function Dialog_DialogPresent() {
  ULSrLq:;
  return Dialog.enumModalDialogState != 0;
}
Dialog.TextAlignmentStyle = Dialog_TextAlignmentStyle;
function Dialog_TextAlignmentStyle() {
  ULSrLq:;
  return Dialog_GetDirection() == "rtl"
    ? "text-align:left"
    : "text-align:right";
}
function Dialog_DefaultTextAlignmentStyle() {
  ULSrLq:;
  return Dialog_GetDirection() == "ltr" ? "left" : "right";
}
Dialog._ShowDialog = Dialog__ShowDialog;
function Dialog__ShowDialog() {
  ULSrLq:;
  var a = Dialog_GetDialogObject(Dialog.strFormId, "__DialogContainer");
  a.innerHTML = Dialog_RenderDialogTemplate(
    Dialog.arrDialogTemplate,
    Dialog.arrDialogData
  );
  Dialog__RestoreSizeAndPosition();
  a.style.display = "block";
  a.style.textAlign = Dialog_DefaultTextAlignmentStyle();
  if (Dialog.type == "Progress") a.style.width = "300px";
  else a.style.width = "";
  if (UserAgentInfo.strBrowser == 1) {
    var d = Dialog_GetDialogObject(Dialog.strFormId, "__DialogContainer"),
      c = IFrameUtils_InsertIframe(d, "__DialogIFrame", true, "Default");
    if (c != null) c.style.display = "block";
  }
  var a = Dialog_GetDialogObject(Dialog.strFormId, "__DialogTable"),
    b = Dialog_GetDialogObject(Dialog.strFormId, "__DialogSemiTransparent");
  if (a != null)
    switch (Dialog.enumPageBackGround) {
      case 0:
        a.className = a.getAttribute("class1");
        if (typeof b != "undefined" && b != null) b.style.display = "block";
        break;
      case 2:
        a.className = a.getAttribute("class2");
    }
  Dialog.enumModalDialogState = 2;
  UserAgentInfo.strBrowser == 1 && Toolbar.EnableViewDropdown(false);
  Dialog.boolFirstHeartBeatAfterShowing = true;
}
Dialog.SetupPostbackWaitChangeMessage = Dialog_SetupPostbackWaitChangeMessage;
function Dialog_SetupPostbackWaitChangeMessage() {
  ULSrLq:;
  Dialog.objChangePostbackMessageTimer = window.setTimeout(
    Dialog__PostbackWaitChangeMessage,
    25000
  );
}
function Dialog__PostbackWaitChangeMessage() {
  ULSrLq:;
  Dialog.objChangePostbackMessageTimer = null;
  var a = document.getElementById("DialogProgressMessage");
  if (a != null) {
    a.innerHTML = IntlCoreStrings.k_strWaitUIMainTimeoutText;
    a.style.color = "red";
  }
}
function Dialog__HideDialog(c) {
  ULSrLq:;
  var a = Dialog_GetDialogObject(c, "__DialogContainer");
  if (a == null) return;
  a.style.display = "none";
  a.innerHTML = "";
  if (UserAgentInfo.strBrowser == 1)
    if (IFrameUtils_IsIframeCreated("__DialogIFrame")) {
      var e = Dialog_GetDialogObject(c, "__DialogContainer"),
        d = IFrameUtils_InsertIframe(e, "__DialogIFrame", true, "Default");
      if (d != null) d.style.display = "none";
    }
  var a = Dialog_GetDialogObject(c, "__DialogTable");
  if (a != null) a.className = a.getAttribute("class0");
  var b = Dialog_GetDialogObject(Dialog.strFormId, "__DialogSemiTransparent");
  if (typeof b != "undefined" && b != null) b.style.display = "none";
  Dialog.enumModalDialogState = 0;
  Dialog.boolModalDialogForFocusRestorationPresent = false;
  if (Dialog.objShowDialogTimer != null) {
    window.clearInterval(Dialog.objShowDialogTimer);
    Dialog.objShowDialogTimer = null;
  }
  if (Dialog.objChangePostbackMessageTimer != null) {
    window.clearInterval(Dialog.objChangePostbackMessageTimer);
    Dialog.objChangePostbackMessageTimer = null;
  }
  UserAgentInfo.strBrowser == 1 && Toolbar.EnableViewDropdown(true);
}
function Dialog_DoCallbackOnClose() {
  ULSrLq:;
  Dialog.funcCallbackOnClose != null && Dialog.funcCallbackOnClose();
  Dialog_ReturnFocusToControl();
}
function Dialog__ShowTable() {
  ULSrLq:;
  var a = Dialog_GetDialogObject(Dialog.strFormId, "__DialogTable");
  if (a != null)
    if (a.style.display != "block" || a.style.zIndex == "-250") {
      a.style.display = "block";
      a.style.zIndex = "";
      Dialog__RestoreSizeAndPosition();
    }
}
function Dialog__HideTable(b) {
  ULSrLq:;
  var a = Dialog_GetDialogObject(b, "__DialogTable");
  if (a != null) {
    a.style.zIndex = "-250";
    a.style.top = 0;
    a.style.left = 0;
    a.style.width = 0;
    a.style.height = 0;
  }
}
function Dialog__RestoreSizeAndPosition() {
  ULSrLq:;
  var g = false,
    a = Dialog_GetDialogObject(Dialog.strFormId, "__DialogContainer"),
    d = document.body;
  if (a != null)
    if (UserAgentInfo.strBrowser != 1) {
      if (
        a.childNodes != null &&
        a.childNodes.length > 0 &&
        a.childNodes[0] != null &&
        (a.childNodes[0].offsetWidth > window.innerWidth ||
          a.childNodes[0].offsetHeight > window.innerHeight)
      )
        g = true;
    } else if (a.offsetWidth > d.clientWidth || a.offsetHeight > d.clientHeight)
      g = true;
  var e = Dialog_GetDialogObject(Dialog.strFormId, "__DialogTable");
  if (e != null && !g) {
    var c = 1,
      b = e.style;
    if (!CurrentFormData_IsV4UI(Dialog.strFormId)) {
      b.top = CrossBrowserLibrary.GetScrollY(Dialog.strFormId) / c;
      if (
        Dialog_GetFormDirection() == "rtl" &&
        UserAgentInfo.strBrowser == 1 &&
        UserAgentInfo.intBrowserRmj < 8
      ) {
        b.left = "";
        b.right =
          CrossBrowserLibrary_GetScrollXRtlIE7(Dialog.strFormId) / c + "px";
      } else
        b.left = CrossBrowserLibrary.GetScrollX(Dialog.strFormId) / c + "px";
    } else {
      if (UserAgentInfo.strBrowserType == 5) {
        var j = d.getBoundingClientRect();
        c = (j.right - j.left) / d.clientWidth;
      }
      b.top = "0px";
      if (b.position != "fixed") {
        b.position = "fixed";
        if (UserAgentInfo.strBrowser == 2) {
          var i = e.parentElement;
          i.removeChild(e);
          i.appendChild(e);
        }
      }
    }
    if (
      UserAgentInfo.strBrowser != 1 ||
      CurrentFormData_IsV4UI(Dialog.strFormId)
    ) {
      b.width = "100%";
      b.height = "100%";
    } else {
      b.width = d.clientWidth / c;
      b.height = d.clientHeight / c;
    }
  }
  if (Dialog.enumModalDialogState == 2 && UserAgentInfo.strBrowser == 1) {
    var k = Dialog_GetDialogObject(Dialog.strFormId, "__DialogContainer"),
      h = IFrameUtils_InsertIframe(k, "__DialogIFrame", true, "Default");
    if (h != null) {
      var f = h.style;
      f.top = a.style.top;
      f.left = a.style.left;
      f.width = a.offsetWidth;
      f.height = a.offsetHeight;
    }
  }
}
function Dialog_MaintainModalDialog() {
  ULSrLq:;
  var c = Dialog_GetDialogObject(Dialog.strFormId, "__DialogTable"),
    a = Util_FindFirstFocusableHtmlDescendantControl(c);
  if (a != null)
    try {
      Util_DoubleFocus(a);
    } catch (d) {
      var b = Dialog_GetDialogObject(Dialog.strFormId, "__DialogFocusRetainer");
      Util_DoubleFocus(b);
    }
  else {
    var b = Dialog_GetDialogObject(Dialog.strFormId, "__DialogFocusRetainer");
    Util_DoubleFocus(b);
  }
}
function Dialog_GetInfo(enumDialog) {
  ULSrLq:;
  var arrDialogData = null;
  try {
    arrDialogData = eval("__dialogInfo_" + enumDialog);
  } catch (e) {}
  return arrDialogData;
}
function Dialog_GetTemplate(enumDialog) {
  ULSrLq:;
  var arrDialogTemplate = null;
  try {
    arrDialogTemplate = eval("__dialogTemplate_" + enumDialog);
  } catch (e) {}
  return arrDialogTemplate;
}
function Dialog_GetData(enumDialog) {
  ULSrLq:;
  var funcGetDialogData = null;
  try {
    funcGetDialogData = eval("__GetDialogData_" + enumDialog);
  } catch (e) {}
  var arrDialogData = null;
  if (!Util_IsNullOrUndefined(funcGetDialogData))
    arrDialogData = funcGetDialogData();
  return arrDialogData;
}
function Dialog_RenderDialogTemplate(c, g) {
  ULSrLq:;
  for (var d = [], b = 0; b < c.length; b++)
    switch (Util_GetDataType(c[b])) {
      case 2:
        d.push(c[b]);
        break;
      case 1:
        var l = Util_GetSpecialValue(c[b]),
          k = Util_GetEncodingType(c[b]);
        d.push(Util_HtmlEncodeSpecialValue(g[l], k));
        break;
      case 3:
        var a = c[b];
        if (
          !(
            a.length != 2 ||
            Util_GetDataType(a[0]) != 1 ||
            Util_GetDataType(a[1]) != 3 ||
            Util_GetDataType(a[1][0]) != 3 ||
            Util_GetDataType(a[1][1]) != 3
          )
        )
          for (
            var f = g[a[0]], j = a[1][0], i = a[1][1], h = true, e = 0;
            e < f.length;
            e++
          )
            if (f[e] != null) {
              !h && d.push(Dialog_RenderDialogTemplate(i, f[e]));
              d.push(Dialog_RenderDialogTemplate(j, f[e]));
              h = false;
            }
    }
  return d.join("");
}
Dialog.GetOnDemandData = Dialog_GetOnDemandData;
function Dialog_GetOnDemandData(a, b) {
  ULSrLq:;
  __dialogTemplate_ = a;
  __GetDialogData_ = b;
}
Dialog.OnTerminateButton = Dialog_OnTerminateButton;
function Dialog_OnTerminateButton() {
  ULSrLq:;
  Dialog_HideDialog();
}
function Dialog_DisableButtons() {
  ULSrLq:;
  var a = document.getElementById("__DialogButtons");
  if (a != null && a.childNodes != null)
    for (var c = a.childNodes, b = c.length - 1; b >= 0; b--)
      c[b].setAttribute("disabled", "disabled");
}
function Dialog_EnableButtons() {
  ULSrLq:;
  var a = document.getElementById("__DialogButtons");
  if (a != null && a.childNodes != null)
    for (var c = a.childNodes, b = c.length - 1; b >= 0; b--)
      c[b].removeAttribute("disabled");
}
Dialog.ShowPostbackDialog = Dialog_ShowPostbackDialog;
function Dialog_ShowPostbackDialog(a) {
  ULSrLq:;
  if (Util_IsNonEmptyString(Dialog.strFormId)) a = Dialog.strFormId;
  Dialog_ShowModalDialogEx(
    a,
    "Progress",
    500 / 50,
    200 / 50,
    false,
    null,
    null
  );
}
Dialog.Alert = Dialog_Alert;
function Dialog_Alert(c, b) {
  ULSrLq:;
  var a = [];
  a[0] = "";
  a[1] = IntlCoreStrings.k_strAlertButtonOK;
  a[2] = [
    [0, IntlCoreStrings.k_strAlertButtonOK, "Dialog_OnTerminateButton();"],
  ];
  a[10] = c;
  Dialog.ShowModalDialog("Alert", a, b);
}
Dialog.Save = Dialog_Save;
function Dialog_Save(c, a, b) {
  ULSrLq:;
  EventLog_Add(Dialog.strFormId, 14, null, c, a, b, true, true, false, 7, 0);
}
Dialog.TwoButtonTemplateDialog_OnKeyPress = Dialog_TwoButtonTemplateDialog_OnKeyPress;
function Dialog_TwoButtonTemplateDialog_OnKeyPress(d, b) {
  ULSrLq:;
  var a = KeyboardService_GetVirtualKey(b);
  if (a == 1) {
    var c = document.getElementById("DialogButton0");
    c.click();
  } else if (a == 9) {
    Dialog_OnTerminateButton();
    Util_StopEventProprogation(b);
  }
}
function Dialog_OnKeyPress(c, a) {
  ULSrLq:;
  var b = KeyboardService_GetVirtualKey(a);
  if (b == 9) {
    if (Dialog.type == "ErrorDialog") UserMessageError_CloseClicked();
    else Dialog_OnTerminateButton();
    Util_StopEventProprogation(a);
  }
}
Dialog.FileAttachmentServerRequest = Dialog_FileAttachmentServerRequest;
function Dialog_FileAttachmentServerRequest() {
  ULSrLq:;
  return Dialog_UploadServerRequest(20);
}
Dialog.InlinePictureServerRequest = Dialog_InlinePictureServerRequest;
function Dialog_InlinePictureServerRequest() {
  ULSrLq:;
  return Dialog_UploadServerRequest(33);
}
function Dialog_UploadServerRequest(e) {
  ULSrLq:;
  Dialog_DisableButtons();
  var d = Dialog.objClientSideData,
    b = document.getElementById("FileAttachmentUpload");
  if (b != null && b.value == null) {
    Dialog_EnableButtons();
    return;
  }
  var a = b.value;
  if (Util_IsNonEmptyString(a)) a = Util_Trim(a);
  if (a.length == 0) {
    Dialog_EnableButtons();
    Dialog_ShowError(
      IntlCoreStrings.k_strFileAttachmentDialogNoFileSelectedErr
    );
  } else
    try {
      EventLog_Add(
        Dialog.strFormId,
        e,
        d,
        BaseControl.GetOriginalId(d),
        null,
        null,
        true,
        true,
        true,
        0,
        0
      );
    } catch (c) {
      Dialog_EnableButtons();
      if (UserAgentInfo.strBrowser == 1 && c.number == -2147024891) {
        EventLog_Remove(Dialog.strFormId, e);
        Dialog_ShowError(
          IntlCoreStrings.k_strFileAttachmentUploadFileMissingError
        );
      } else UserMessages_ShowAlertMessage(c.message, false);
    }
}
function Dialog_LinkUrlInsert() {
  ULSrLq:;
  Dialog_DisableButtons();
  var b = false,
    e = Dialog.objClientSideData,
    d = document.getElementById("textBox"),
    c = document.getElementById("textBox-display"),
    a = d.value;
  if (Util_IsNonEmptyString(a)) a = Util_Trim(a);
  if (a.length == 0) {
    if (Util_Trim(c.value).length > 0) {
      Dialog_ShowError(IntlCoreStrings.k_strAttachLinkDiaglogNoUri);
      b = true;
    }
  } else if (a.length > 2083) {
    Dialog_ShowError(IntlCoreStrings.k_strAttachLinkDiaglogLinkTooLongErr);
    b = true;
  } else if (!Util_IsValidURI(a) || !Hyperlink_IsSafeHref(a)) {
    Dialog_ShowError(IntlCoreStrings.k_strAttachLinkDiaglogUriValidErr);
    b = true;
  }
  if (!b) {
    Dialog.funcCallbackSetValues(e, a, c.value, true);
    Dialog_OnTerminateButton();
  } else Dialog_EnableButtons();
}
function Dialog_ShowError(b) {
  ULSrLq:;
  var a = document.getElementById("errorDiv");
  if (a != null) {
    a.style.paddingBottom = 10;
    a.innerHTML = '<span role="alert">' + b + "</span>";
  } else UserMessages_ShowAlertMessage(b, false);
}
Dialog.ShowFinalMessage = Dialog_ShowFinalMessage;
function Dialog_ShowFinalMessage(b, d, c) {
  ULSrLq:;
  var a = GlobalFormData.Get(b);
  a.boolFinalMessageShown = true;
  a.boolDocumentClosed = c;
  Dialog.strCurrentMessageText = d;
  Dialog_ShowModalDialogEx(b, "FinalMessage", 1, 1, false, null, null);
}
Dialog.ReturnFocusToControl = Dialog_ReturnFocusToControl;
function Dialog_ReturnFocusToControl() {
  ULSrLq:;
  var a = Dialog.type;
  if (a == null || Dialog.type == "Progress") return;
  switch (a) {
    case "SaveAs":
      if (!IPFSRibbon_IsEnabled(Dialog.strFormId)) {
        if (Dialog.objClientSideData == null) break;
        Toolbar_Focus(Dialog.strFormId, Dialog.objClientSideData.id);
      }
      break;
    case "Alert":
      if (!IPFSRibbon_IsEnabled(Dialog.strFormId)) {
        if (Dialog.objClientSideData == null) break;
        Toolbar_Focus(Dialog.strFormId, Dialog.objClientSideData.id);
      }
      break;
    case "FileAttachment":
      SelectionService_RestoreFocus(Dialog.strFormId);
      break;
    case "TwoButtonTemplateDialog":
    case "InlinePictureDialog":
      SelectionService_RestoreFocus(Dialog.strFormId);
  }
  Dialog.type = null;
  return;
}
var __dialogInfo_Progress = ["Progress", 1, 0, 0],
  __dialogTemplate_Progress = [
    '<table role="alert" class="ProgressDialogBorder"><tr id="DialogProgress"><td class="ProgressDialogTableCell"><img src="/_layouts/images/gears_anv4.gif" alt="" /></td><td class="ProgressDialogTableCell"><div id="ProgressDialogMessage">',
    114698,
    "</div></td></tr></table>",
  ];
function __GetDialogData_Progress() {
  ULSrLq:;
  var a = [];
  a[0] = "";
  a[1] = "";
  a[3] = Dialog_GetDirection();
  a[4] = "";
  a[5] = Dialog_TextAlignmentStyle();
  a[2] = [];
  a[10] = IntlCoreStrings.k_strWaitUIMainText;
  return a;
}
var __dialogInfo_SaveAs = ["SaveAs", 0, 1, 1],
  __dialogInfo_Alert = ["Alert", 0, 0, 0],
  __dialogTemplate_Alert = [
    '<table onKeyPress="Dialog_OnKeyPress(this, event);" onKeyDown="Dialog_OnKeyPress(this, event);" cellpadding="0px" cellspacing="0px" role="alertdialog" style="height:262px;width:447px;border:1px solid #5c7da4;background-color:white;direction:',
    49155,
    ';"><tr><td style="height:32px" class="StandardDialogTitle" id="DialogAlert"><h3 class="StandardDialogTitleText" style="border:none;display:inline;">',
    114689,
    '</h3></td></tr><tr><td class="StandardDialogBody"><div style="padding-top:17px;padding-bottom:17px"><div id="DialogAlertMessage" style="font-size:10pt;">',
    16394,
    '</div></div><input autocomplete="off" type="text" tabindex="-1" style="width:0px;height:0px;border:none;padding:0;border:0;position:absolute;" /></td></tr><tr><td class="StandardDialogButtonArea" style="',
    49157,
    '" id="__DialogButtons">',
    [
      2,
      [
        [
          '<input class="DialogButton" type="',
          49156,
          '" id="DialogButton',
          49152,
          '" onClick="',
          49154,
          '" accesskey="',
          49155,
          '" value="',
          49153,
          '" />',
        ],
        ['<span style="margin-left:3px;margin-right:3px;"></span>'],
      ],
    ],
    '<a class="ms-hidden" onFocus="Dialog_MaintainModalDialog();" href="#"></a></td></tr></table>',
  ];
function __GetDialogData_Alert() {
  ULSrLq:;
  var a = [];
  a[0] = "Alert";
  a[1] = "Alert";
  a[3] = Dialog_GetDirection();
  a[4] = "";
  a[5] = Dialog_TextAlignmentStyle();
  a[2] = [];
  a[10] = "";
  return a;
}
var __dialogInfo_FileAttachment = ["FileAttachment", 0, 0, 0],
  __dialogTemplate_FileAttachment = [
    '<table onKeyPress="Dialog_OnKeyPress(this, event);" onKeyDown="Dialog_OnKeyPress(this, event);" cellpadding="0px" cellspacing="0px" role="alertdialog" style="height:262px;width:447px;border:1px solid #5c7da4;background-color:white;direction:',
    49155,
    ';"><tr><td style="height:32px" class="StandardDialogTitle" id="DialogFileAttachment"><h3 class="StandardDialogTitleText" style="border:none;display:inline;">',
    114689,
    '</h3></td></tr><tr><td class="StandardDialogBody"><div style="padding-top:17px;padding-bottom:17px"><div id="errorDiv" style="font-size:10pt;color:#FF0000;"></div><div style="font-size:10pt;">',
    114699,
    '</div><div><input style="font-size:10pt;width:100%;" type="file" id="FileAttachmentUpload" name="FileAttachmentUpload" title="',
    49163,
    '" /></div></div><input autocomplete="off" type="text" tabindex="-1" style="width:0px;height:0px;border:none;padding:0;border:0;position:absolute;" /></td></tr><tr><td class="StandardDialogButtonArea" style="',
    49157,
    '" id="__DialogButtons">',
    [
      2,
      [
        [
          '<input class="DialogButton" type="',
          49156,
          '" id="DialogButton',
          49152,
          '" onClick="',
          49154,
          '" accesskey="',
          49155,
          '" value="',
          49153,
          '" />',
        ],
        ['<span style="margin-left:3px;margin-right:3px;"></span>'],
      ],
    ],
    '<a class="ms-hidden" onFocus="Dialog_MaintainModalDialog();" href="#"></a></td></tr></table>',
  ];
function __GetDialogData_FileAttachment() {
  ULSrLq:;
  var a = [];
  a[0] = "Attach File";
  a[1] = "Attach File";
  a[3] = Dialog_GetDirection();
  a[4] = "";
  a[5] = Dialog_TextAlignmentStyle();
  a[2] = [
    [
      0,
      "Attach",
      "Dialog_FileAttachmentServerRequest();;Util_StopEventProprogation(event);return false;",
      "",
      "submit",
    ],
    [
      1,
      "Cancel",
      "Dialog_OnTerminateButton();;Util_StopEventProprogation(event);return false;",
      "",
      "button",
    ],
  ];
  a[11] = IntlCoreStrings.k_strFileAttachmentDialogMessage;
  return a;
}
var __dialogInfo_FinalMessage = ["FinalMessage", 2, 0, 0],
  __dialogTemplate_FinalMessage = [
    '<div id="DialogFinalMessage" role="alert" class="FinalMessageDialog"><div>',
    114698,
    "</div></div>",
  ];
function __GetDialogData_FinalMessage() {
  ULSrLq:;
  var a = [];
  a[0] = "";
  a[1] = "";
  a[3] = Dialog_GetDirection();
  a[4] = "";
  a[5] = Dialog_TextAlignmentStyle();
  a[2] = [];
  a[10] = Dialog.strCurrentMessageText;
  return a;
}
var __dialogInfo_InstallDSigCtrl = ["InstallDSigCtrl", 0, 0, 0],
  __dialogTemplate_InstallDSigCtrl = [
    '<table onKeyPress="Dialog_OnKeyPress(this, event);" onKeyDown="Dialog_OnKeyPress(this, event);" cellpadding="0px" cellspacing="0px" role="alertdialog" style="height:262px;width:447px;border:1px solid #5c7da4;background-color:white;direction:',
    49155,
    ';"><tr><td style="height:32px" class="StandardDialogTitle" id="DialogInstallDSigCtrl"><h3 class="StandardDialogTitleText" style="border:none;display:inline;">',
    114689,
    '</h3></td></tr><tr><td class="StandardDialogBody"><div style="padding-top:17px;padding-bottom:17px"><div id="DialogInstallDSigCtrlMessage" role="alertdialog" style="font-size:10pt;">',
    114698,
    '</div></div><input autocomplete="off" type="text" tabindex="-1" style="width:0px;height:0px;border:none;padding:0;border:0;position:absolute;" /></td></tr><tr><td class="StandardDialogButtonArea" style="',
    49157,
    '" id="__DialogButtons">',
    [
      2,
      [
        [
          '<input class="DialogButton" type="',
          49156,
          '" id="DialogButton',
          49152,
          '" onClick="',
          49154,
          '" accesskey="',
          49155,
          '" value="',
          49153,
          '" />',
        ],
        ['<span style="margin-left:3px;margin-right:3px;"></span>'],
      ],
    ],
    '<a class="ms-hidden" onFocus="Dialog_MaintainModalDialog();" href="#"></a></td></tr></table>',
  ];
function __GetDialogData_InstallDSigCtrl() {
  ULSrLq:;
  var a = [];
  a[0] = "Install Digital Signature Control";
  a[1] = "Install Digital Signature Control";
  a[3] = Dialog_GetDirection();
  a[4] = "";
  a[5] = Dialog_TextAlignmentStyle();
  a[2] = [
    [
      0,
      "Yes",
      "InDocSign_InstallAXControls();;Util_StopEventProprogation(event);return false;",
      "",
      "submit",
    ],
    [
      1,
      "No",
      "Dialog_OnTerminateButton();InDocSign_InstallAXControlsDone();;Util_StopEventProprogation(event);return false;",
      "",
      "button",
    ],
  ];
  a[10] = "IntlCoreStrings.k_strPromptInstallAXControls";
  return a;
}
var __dialogInfo_ErrorDialog = ["ErrorDialog", 0, 0, 0],
  __dialogTemplate_ErrorDialog = [
    '<table onKeyPress="Dialog_OnKeyPress(this, event);" onKeyDown="Dialog_OnKeyPress(this, event);" cellpadding="0px" cellspacing="0px" role="alertdialog" style="height:262px;width:447px;border:1px solid #5c7da4;background-color:white;direction:',
    49155,
    ';"><tr><td style="height:32px" class="StandardDialogTitle" id="DialogErrorDialog"><h3 class="StandardDialogTitleText" style="border:none;display:inline;">',
    114689,
    '</h3></td></tr><tr><td class="StandardDialogBody"><div style="padding-top:17px;padding-bottom:17px"><div id="DialogErrorDialogMessage"><table style="table-layout:fixed"><tr><td class="ErrorPageNormalText" id="ErrorDialogShortMessage">',
    16394,
    '</td></tr><tr><td class="ErrorPageNormalText">',
    16395,
    '</td></tr><tr><td class="ErrorPageNormalText">',
    16396,
    '</td></tr></table></div><table style="margin:0px;',
    49165,
    '"><tr><td><a onClick="UserMessageError.ToggleDetails();Util_StopEventProprogation(event);" href="#" id="ErrorDialogDetailsLink" class="ErrorPageItalicText" accesskey="',
    49166,
    '">',
    114703,
    '</a></td></tr><tr><td><span style="display:none;" id="ErrorDialogDetailsSection" role="alert" aria-hidden="true"><div readonly="true" class="ErrorPageDetailsText">',
    16400,
    '</div></span></td></tr></table></div><input autocomplete="off" type="text" tabindex="-1" style="width:0px;height:0px;border:none;padding:0;border:0;position:absolute;" /></td></tr><tr><td class="StandardDialogButtonArea" style="',
    49157,
    '" id="__DialogButtons">',
    [
      2,
      [
        [
          '<input class="DialogButton" type="',
          49156,
          '" id="DialogButton',
          49152,
          '" onClick="',
          49154,
          '" accesskey="',
          49155,
          '" value="',
          49153,
          '" />',
        ],
        ['<span style="margin-left:3px;margin-right:3px;"></span>'],
      ],
    ],
    '<a class="ms-hidden" onFocus="Dialog_MaintainModalDialog();" href="#"></a></td></tr></table>',
  ];
function __GetDialogData_ErrorDialog() {
  ULSrLq:;
  var a = [];
  a[0] = "";
  a[1] = "";
  a[3] = Dialog_GetDirection();
  a[4] = "";
  a[5] = Dialog_TextAlignmentStyle();
  a[2] = [];
  return a;
}
var __dialogInfo_TwoButtonTemplateDialog = ["TwoButtonTemplateDialog", 0, 0, 0],
  __dialogTemplate_TwoButtonTemplateDialog = [
    '<table onKeyPress="Dialog_OnKeyPress(this, event);" onKeyDown="Dialog_OnKeyPress(this, event);" cellpadding="0px" cellspacing="0px" role="alertdialog" style="height:262px;width:447px;border:1px solid #5c7da4;background-color:white;direction:',
    49155,
    ';"><tr><td style="height:32px" class="StandardDialogTitle" id="DialogTwoButtonTemplateDialog"><h3 class="StandardDialogTitleText" style="border:none;display:inline;">',
    114689,
    '</h3></td></tr><tr><td class="StandardDialogBody"><div style="padding-top:17px;padding-bottom:17px"><div id="errorDiv" style="font-size:10pt;color:#FF0000;"></div><div style="font-size:10pt;">',
    114699,
    '</div><div><input style="font-size:10pt;width:390px;" type="text" id="textBox" onKeyPress="Dialog_TwoButtonTemplateDialog_OnKeyPress(this, event);" title="',
    49163,
    '" value="',
    49164,
    '" /></div><div style="font-size:8pt;color:#878787;">',
    114701,
    '</div><br /><div style="',
    49167,
    '"><div style="font-size:10pt;">',
    114702,
    '</div><div><input style="font-size:10pt;width:390px;" type="text" id="textBox-display" onKeyPress="Dialog_TwoButtonTemplateDialog_OnKeyPress(this, event);" title="',
    49166,
    '" value="',
    49168,
    '" /></div></div><br /><div style="font-size:10pt;">',
    114705,
    '</div></div><input autocomplete="off" type="text" tabindex="-1" style="width:0px;height:0px;border:none;padding:0;border:0;position:absolute;" /></td></tr><tr><td class="StandardDialogButtonArea" style="',
    49157,
    '" id="__DialogButtons">',
    [
      2,
      [
        [
          '<input class="DialogButton" type="',
          49156,
          '" id="DialogButton',
          49152,
          '" onClick="',
          49154,
          '" accesskey="',
          49155,
          '" value="',
          49153,
          '" />',
        ],
        ['<span style="margin-left:3px;margin-right:3px;"></span>'],
      ],
    ],
    '<a class="ms-hidden" onFocus="Dialog_MaintainModalDialog();" href="#"></a></td></tr></table>',
  ];
function __GetDialogData_TwoButtonTemplateDialog() {
  ULSrLq:;
  var a = [];
  a[0] = "";
  a[1] = "";
  a[3] = Dialog_GetDirection();
  a[4] = "";
  a[5] = Dialog_TextAlignmentStyle();
  a[2] = [];
  return a;
}
var __dialogInfo_InlinePictureDialog = ["InlinePictureDialog", 0, 0, 0],
  __dialogTemplate_InlinePictureDialog = [
    '<table onKeyPress="Dialog_OnKeyPress(this, event);" onKeyDown="Dialog_OnKeyPress(this, event);" cellpadding="0px" cellspacing="0px" role="alertdialog" style="height:262px;width:447px;border:1px solid #5c7da4;background-color:white;direction:',
    49155,
    ';"><tr><td style="height:32px" class="StandardDialogTitle" id="DialogInlinePictureDialog"><h3 class="StandardDialogTitleText" style="border:none;display:inline;">',
    114689,
    '</h3></td></tr><tr><td class="StandardDialogBody"><div style="padding-top:17px;padding-bottom:17px"><div id="errorDiv" style="font-size:10pt;color:#FF0000;"></div><div style="font-size:10pt;">',
    114699,
    '</div><div><input style="font-size:10pt;width:100%;" type="file" id="FileAttachmentUpload" name="FileAttachmentUpload" title="',
    49163,
    '" /></div><div style="font-size:8pt;color:#878787;">',
    114700,
    '</div></div><input autocomplete="off" type="text" tabindex="-1" style="width:0px;height:0px;border:none;padding:0;border:0;position:absolute;" /></td></tr><tr><td class="StandardDialogButtonArea" style="',
    49157,
    '" id="__DialogButtons">',
    [
      2,
      [
        [
          '<input class="DialogButton" type="',
          49156,
          '" id="DialogButton',
          49152,
          '" onClick="',
          49154,
          '" accesskey="',
          49155,
          '" value="',
          49153,
          '" />',
        ],
        ['<span style="margin-left:3px;margin-right:3px;"></span>'],
      ],
    ],
    '<a class="ms-hidden" onFocus="Dialog_MaintainModalDialog();" href="#"></a></td></tr></table>',
  ];
function __GetDialogData_InlinePictureDialog() {
  ULSrLq:;
  var a = [];
  a[0] = "Insert Picture";
  a[1] = "Insert Picture";
  a[3] = Dialog_GetDirection();
  a[4] = "";
  a[5] = Dialog_TextAlignmentStyle();
  a[2] = [
    [
      0,
      "Insert",
      "Dialog_InlinePictureServerRequest();;Util_StopEventProprogation(event);return false;",
      "",
      "submit",
    ],
    [
      1,
      "Cancel",
      "Dialog_OnTerminateButton();;Util_StopEventProprogation(event);return false;",
      "",
      "button",
    ],
  ];
  a[11] = IntlCoreStrings.k_strInlinePictureDialogMessage;
  a[12] = IntlCoreStrings.k_strInlinePictureDialogExample;
  return a;
}
function DialogInfo() {}
DialogInfo.GetDialogName = DialogInfo_GetDialogName;
function DialogInfo_GetDialogName(a) {
  ULSrLq:;
  return DialogInfo._GetDataValue(a, 0);
}
DialogInfo.GetPageBackgroundType = DialogInfo_GetPageBackgroundType;
function DialogInfo_GetPageBackgroundType(a) {
  ULSrLq:;
  return DialogInfo._GetDataValue(a, 1);
}
DialogInfo.GetTemplateType = DialogInfo_GetTemplateType;
function DialogInfo_GetTemplateType(a) {
  ULSrLq:;
  return DialogInfo._GetDataValue(a, 2);
}
DialogInfo.GetDataType = DialogInfo_GetDataType;
function DialogInfo_GetDataType(a) {
  ULSrLq:;
  return DialogInfo._GetDataValue(a, 3);
}
DialogInfo._GetDataValue = DialogInfo__GetDataValue;
function DialogInfo__GetDataValue(b, c) {
  ULSrLq:;
  var a = null;
  try {
    a = b[c];
  } catch (d) {}
  return a;
}
var g_arrStructuralEditingContextMenu = null;
function HoverMenu() {}
HoverMenu.arrWidgetMap = [];
HoverMenu.strVisibleMenuID = null;
HoverMenu.isVisible = false;
HoverMenu.objSelectedMenuItem = null;
HoverMenu.objMenuAccessSourceControl = null;
HoverMenu.ActionXCollectionInsert = "xCollection::insert";
HoverMenu.ActionXCollectionInsertBefore = "xCollection::insertBefore";
HoverMenu.ActionXCollectionInsertAfter = "xCollection::insertAfter";
HoverMenu.ActionXCollectionRemove = "xCollection::remove";
HoverMenu.ActionXCollectionRemoveAll = "xCollection::removeAll";
HoverMenu.ActionXOptionalInsert = "xOptional::insert";
HoverMenu.ActionXReplace = "xReplace::replace";
HoverMenu.ActionXOptionalRemove = "xOptional::remove";
HoverMenu.ActionXCollectionRefreshFilter = "xCollection::refreshFilter";
HoverMenu.xRichTextEdit = "xRichText:edit";
HoverMenu.xFileAttachmentAttach = "xFileAttachment::attach";
HoverMenu.xFileAttachmentDownload = "xFileAttachment::download";
HoverMenu.xFileAttachmentRemove = "xFileAttachment::remove";
HoverMenu.xTextListInsert = "xTextList::insert";
HoverMenu.ScriptToExecute = [];
HoverMenu.ScriptToExecute[HoverMenu.ActionXCollectionInsert] =
  "xCollectionControl_Insert";
HoverMenu.ScriptToExecute[HoverMenu.ActionXCollectionInsertBefore] =
  "xCollectionControl_InsertBefore";
HoverMenu.ScriptToExecute[HoverMenu.ActionXCollectionInsertAfter] =
  "xCollectionControl_InsertAfter";
HoverMenu.ScriptToExecute[HoverMenu.ActionXCollectionRemove] =
  "xCollectionControl_Remove";
HoverMenu.ScriptToExecute[HoverMenu.ActionXCollectionRemoveAll] =
  "xCollectionControl_RemoveAll";
HoverMenu.ScriptToExecute[HoverMenu.ActionXCollectionRefreshFilter] =
  "xCollectionControl_RefreshFilter";
HoverMenu.ScriptToExecute[HoverMenu.ActionXOptionalInsert] = "Section_Insert";
HoverMenu.ScriptToExecute[HoverMenu.ActionXOptionalRemove] = "Section_Remove";
HoverMenu.ScriptToExecute[HoverMenu.ActionXReplace] = "ChoiceSection_Replace";
HoverMenu.ScriptToExecute[HoverMenu.xRichTextEdit] = "RichTextBox_InvokeEditor";
HoverMenu.ScriptToExecute[HoverMenu.xFileAttachmentAttach] =
  "FileAttachment_InvokeAttach";
HoverMenu.ScriptToExecute[HoverMenu.xFileAttachmentDownload] =
  "FileAttachment_InvokeDownload";
HoverMenu.ScriptToExecute[HoverMenu.xFileAttachmentRemove] =
  "FileAttachment_InvokeRemove";
HoverMenu.ScriptToExecute[HoverMenu.xTextListInsert] = "TextList_InvokeInsert";
HoverMenu.FunctionToExecute = [];
HoverMenu.FunctionToExecute[
  HoverMenu.ActionXCollectionInsert
] = xCollectionControl_Insert;
HoverMenu.FunctionToExecute[
  HoverMenu.ActionXCollectionInsertBefore
] = xCollectionControl_InsertBefore;
HoverMenu.FunctionToExecute[
  HoverMenu.ActionXCollectionInsertAfter
] = xCollectionControl_InsertAfter;
HoverMenu.FunctionToExecute[
  HoverMenu.ActionXCollectionRemove
] = xCollectionControl_Remove;
HoverMenu.FunctionToExecute[
  HoverMenu.ActionXCollectionRemoveAll
] = xCollectionControl_RemoveAll;
HoverMenu.FunctionToExecute[
  HoverMenu.ActionXCollectionRefreshFilter
] = xCollectionControl_RefreshFilter;
HoverMenu.FunctionToExecute[HoverMenu.ActionXOptionalInsert] = Section_Insert;
HoverMenu.FunctionToExecute[HoverMenu.ActionXOptionalRemove] = Section_Remove;
HoverMenu.FunctionToExecute[HoverMenu.ActionXReplace] = ChoiceSection_Replace;
HoverMenu.FunctionToExecute[HoverMenu.xRichTextEdit] = RichTextBox_InvokeEditor;
HoverMenu.FunctionToExecute[
  HoverMenu.xFileAttachmentAttach
] = FileAttachment_InvokeAttach;
HoverMenu.FunctionToExecute[
  HoverMenu.xFileAttachmentDownload
] = FileAttachment_InvokeDownload;
HoverMenu.FunctionToExecute[
  HoverMenu.xFileAttachmentRemove
] = FileAttachment_InvokeRemove;
HoverMenu.FunctionToExecute[HoverMenu.xTextListInsert] = TextList_InvokeInsert;
HoverMenu.ShowMenu = HoverMenu_ShowMenu;
function HoverMenu_ShowMenu(k) {
  ULSrLq:;
  if (k == null) return;
  var f, g, e, b;
  g = k.parentNode;
  f = g.id;
  if (!Util.IsNonEmptyString(f)) return;
  e = BaseControl.GetContainerId(g.id);
  b = document.getElementById(e);
  if (b == null) return;
  var c = b.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(c) != 1
    )
  )
    return;
  var d, a;
  IP_DatePicker.Close != null && IP_DatePicker.Close(c);
  d = f + "_Menu";
  if (HoverMenu.strVisibleMenuID != null && HoverMenu.strVisibleMenuID == d) {
    HoverMenu.HideMenu();
    return;
  }
  HoverMenu.HideMenu();
  a = document.getElementById(d);
  if (a == null || a.style == null) return;
  var i = ViewDataNode_GetViewDataNodeFromHtml(b),
    j = ViewDataNode_GetChildNodes(i),
    h = i._objViewDataNodeParent;
  if (
    ViewDataNode_IsDisabled(h) &&
    h.SnippetElement[2] != "FileAttachmentCollection"
  )
    return;
  if (j.length == 1) {
    var m = j[0].SnippetElement;
    if (m[2] == "RichTextBox") {
      RichTextBox_InvokeEditor(e);
      return;
    }
  }
  SelectionService.Select(b);
  SelectionService.RemoveAllNonStickyHighlight();
  var l = HoverMenu.GenerateMenuHtml(c, b);
  if (!Util.IsNonEmptyString(l));
  a.innerHTML = l;
  a.style.display = "block";
  a.style.zIndex = "50";
  HoverMenu.strVisibleMenuID = d;
  HoverMenu.isVisible = true;
  HoverMenu.SelectMenuItem(c, a.childNodes[0].childNodes[0]);
  AccessibilityIFrame_RefreshIFrame();
}
HoverMenu.HideMenu = HoverMenu_HideMenu;
function HoverMenu_HideMenu() {
  ULSrLq:;
  var b = HoverMenu.strVisibleMenuID;
  HoverMenu.strVisibleMenuID = null;
  if (b != null) {
    var a;
    a = document.getElementById(b);
    if (a != null) {
      a.style.display = "none";
      a.innerHTML = "";
      AccessibilityIFrame_RefreshIFrame();
    }
    HoverMenu.objMenuAccessSourceControl = null;
  }
  HoverMenu.isVisible = false;
}
HoverMenu.GetXmlToEdit = HoverMenu_GetXmlToEdit;
function HoverMenu_GetXmlToEdit(c) {
  ULSrLq:;
  var b = c.SnippetElement,
    a = b[5];
  if (a == 4 || a == 7 || a == 2) return IP_Collection.GetXmlToEdit(b);
  else return null;
}
function HoverMenu_ResetWidgetMap() {
  ULSrLq:;
  HoverMenu.arrWidgetMap = [];
}
function HoverMenu_ShouldShowWidget(a) {
  ULSrLq:;
  var b = HoverMenu.arrWidgetMap[a.id];
  if (b == null) {
    var d = a.getAttribute("FormId"),
      c = HoverMenu.GenerateMenuHtml(d, a);
    b = Util.IsNonEmptyString(c);
    HoverMenu.arrWidgetMap[a.id] = b;
  }
  return b;
}
HoverMenu.GenerateMenuHtml = HoverMenu_GenerateMenuHtml;
function HoverMenu_GenerateMenuHtml(o, i) {
  ULSrLq:;
  var v = "",
    b,
    s,
    l,
    f = [],
    h,
    e = g_arrStructuralEditingContextMenu[o],
    k = ViewDataNode_GetViewDataNodeFromHtml(i);
  if (e == null || e.length == 0) return "";
  s = BaseControl.GetContainerId(i.id);
  l = document.getElementById(s);
  if (
    Container.IsSigned(k) &&
    l.getAttribute("ScriptClass") != "FileAttachmentCollection"
  )
    return "";
  h = HoverMenu.GetXmlToEdit(ViewDataNode_GetViewDataNodeFromHtml(l));
  if (!Util.IsNonEmptyString(h)) return "";
  f.push("<ul class='menuUnsortedList'");
  UserAgentInfo.strBrowser == 1 &&
    UserAgentInfo.intBrowserRmj < 8 &&
    CurrentFormData_IsV4UI(o) &&
    CurrentFormData_Direction(o) == "rtl" &&
    f.push(" style='zoom:100%;'");
  f.push(">");
  for (
    var p = false, x = HoverMenu_GetMenuItemTabIndex(i), j = 0;
    j < e.length;
    j++
  ) {
    var d = null,
      q = false,
      r = false,
      a = e[j][0],
      b = e[j][1],
      g = e[j][2],
      C = e[j][3];
    C = "immediate";
    switch (a) {
      case "xCollection::insertBefore":
      case "xCollection::insertAfter":
      case "xCollection::remove":
      case "xCollection::removeAll":
      case "xOptional::remove":
      case "xCollection::refreshFilter":
        if (b == h) {
          d = HoverMenu.ScriptToExecute[a] + "('" + i.id + "','" + b + "');";
          if (a == "xCollection::insertAfter") q = true;
          if (!p && (a == "xCollection::remove" || a == "xOptional::remove")) {
            r = true;
            p = true;
          }
        }
        break;
      case HoverMenu.xRichTextEdit:
        if (b == h) {
          var m = ViewDataNode_GetChildNodes(k);
          d = HoverMenu.ScriptToExecute[a] + "('" + m[0][9] + "','" + b + "');";
        }
        break;
      case HoverMenu.xFileAttachmentAttach:
      case HoverMenu.xFileAttachmentDownload:
      case HoverMenu.xFileAttachmentRemove:
        g = FileAttachment_LocalizeMenuItemCaption(a, g);
        if (b == h) {
          var m = ViewDataNode_GetChildNodes(k),
            t = m[0];
          if (FileAttachment.IsActionEnabled(a, t))
            d = HoverMenu.ScriptToExecute[a] + "('" + t[9] + "','" + b + "');";
        }
        break;
      case HoverMenu.xRichTextEdit:
        if (b == h) {
          var m = ViewDataNode_GetChildNodes(k);
          d = HoverMenu.ScriptToExecute[a] + "('" + m[0][9] + "','" + b + "');";
        }
        break;
      case "xReplace::replace":
        if (
          ViewDataNode_GetViewDataNodeFromHtml(l).SnippetElement[2] ==
          "ChoiceSection"
        ) {
          var z = ViewDataNode_GetViewDataNodeFromHtml(l),
            y = z._objViewDataNodeParent._objViewDataNodeParent;
          switch (ChoiceGroup_CanReplace(y, b)) {
            case 2:
              continue;
            case 1:
              d =
                HoverMenu.ScriptToExecute[a] +
                "('" +
                i.id +
                "','" +
                ChoiceGroup_MatchingSection()[9] +
                "');";
          }
        }
        break;
      case "xCollection::insert":
      case "xOptional::insert":
        for (
          var E = null, m = ViewDataNode_GetChildNodes(k), n = 0;
          n < m.length;
          n++
        ) {
          var c = m[n];
          if (c.SnippetElement[2] == "ChoiceGroup") {
            var A = ChoiceGroup_CanInsert(c, b);
            switch (A) {
              case 2:
                continue;
              case 1:
                c = ChoiceGroup_MatchingSection();
                d =
                  HoverMenu.ScriptToExecute[a] +
                  "('" +
                  c[9] +
                  "','" +
                  b +
                  "');";
            }
          }
          var u = HoverMenu.GetXmlToEdit(c);
          if (u != null && u == b) {
            if (a == "xOptional::insert" && c.SnippetElement[2] == "Section") {
              var w = ViewDataNode_GetChildNodes(c),
                B = w.length;
              if (B > 0) break;
            }
            if (!ViewDataNode_IsDisabled(c))
              d =
                HoverMenu.ScriptToExecute[a] + "('" + c[9] + "','" + b + "');";
            break;
          }
        }
    }
    if (d != null) {
      var D;
      if (q) g = Util.FormatString(IntlCoreStrings.k_strCtrlEnterFormat, g);
      else if (r)
        g = Util.FormatString(IntlCoreStrings.k_strCtrlDeleteFormat, g);
      var D = HoverMenu.GetMenuItemHtml(i.getAttribute("FormId"), g, d, x);
      f.push(D);
    }
  }
  if (f.length > 1) {
    f.join("</ul>");
    v = f.join("");
  }
  return v;
}
HoverMenu.GetMenuItemHtml = HoverMenu_GetMenuItemHtml;
function HoverMenu_GetMenuItemHtml(b, c, d, e) {
  ULSrLq:;
  var f =
      UserAgentInfo.strBrowser == 1
        ? "style='overflow: visible; white-space:nowrap;'"
        : "",
    a = [];
  a.push("<li class='menuItem_");
  a.push(CurrentFormData.Direction(b));
  a.push("' ");
  a.push(f);
  a.push(" OnMouseOver='HoverMenu.SelectMenuItem(\"");
  a.push(b);
  a.push("\", this);' OnMouseOut='HoverMenu.SelectMenuItem(\"");
  a.push(b);
  a.push(
    "\", null);' OnMouseDown='Util.StopEventProprogation(event); return false;' alt=\""
  );
  a.push(c);
  a.push('" OnClick="HoverMenu.SelectMenuItem(\'');
  a.push(b);
  a.push("', null); HoverMenu.HideMenu(); ");
  a.push(d);
  a.push("\"><a href='#' class='menuItemA_");
  a.push(CurrentFormData.Direction(b));
  a.push(" menuItemA:visited' style='color:#23272C;' tabindex=");
  a.push(e);
  a.push(" OnFocus='Util.StopEventProprogation(event);return false;'>");
  a.push(c);
  a.push("</a></li>");
  return a.join("");
}
HoverMenu.GetWidgetForVisibleMenu = HoverMenu_GetWidgetForVisibleMenu;
function HoverMenu_GetWidgetForVisibleMenu() {
  ULSrLq:;
  var b = null,
    a = null;
  if (HoverMenu.isVisible) {
    b = document.getElementById(HoverMenu.strVisibleMenuID);
    if (UserAgentInfo.strBrowser == 1) a = b.parentNode;
    else a = b.parentNode.previousSibling;
  }
  return a;
}
function HoverMenu_GetMenuItemTabIndex(c) {
  ULSrLq:;
  var a = 0,
    b = HoverMenu_GetWidgetForContainer(c);
  if (b != null) a = b.childNodes[0].tabIndex;
  return !Util_IsNullOrUndefined(a) ? a : 0;
}
function HoverMenu_SetWidgetTabIndex(b, c) {
  ULSrLq:;
  var a = HoverMenu_GetWidgetForContainer(b);
  if (a != null) a.childNodes[0].tabIndex = c;
}
HoverMenu.GetWidgetForContainer = HoverMenu_GetWidgetForContainer;
function HoverMenu_GetWidgetForContainer(a) {
  ULSrLq:;
  return document.getElementById(HoverMenu_GetWidgetIdForContainer(a));
}
HoverMenu.GetWidgetIdForContainer = HoverMenu_GetWidgetIdForContainer;
function HoverMenu_GetWidgetIdForContainer(a) {
  ULSrLq:;
  return a.id + "_Widget";
}
HoverMenu.HandleWidgetClick = HoverMenu_HandleWidgetClick;
function HoverMenu_HandleWidgetClick(e, a) {
  ULSrLq:;
  var c = false,
    b = false;
  if (a != null && a.type == "keypress") {
    var d = KeyboardService.GetVirtualKey(a);
    switch (d) {
      case 1:
        c = !HoverMenu.isVisible;
        b = true;
    }
  } else {
    c = true;
    b = true;
  }
  if (b == true) {
    if (c == true) HoverMenu.ShowMenu(e);
    else HoverMenu.HideMenu();
    a != null && Util.StopEventProprogation(a);
    return false;
  }
  return true;
}
HoverMenu.SelectMenuItem = HoverMenu_SelectMenuItem;
function HoverMenu_SelectMenuItem(c, b) {
  ULSrLq:;
  var a = CurrentFormData.Direction(c);
  if (HoverMenu.objSelectedMenuItem != null) {
    HoverMenu.objSelectedMenuItem.className = "menuItem_" + a;
    if (HoverMenu.objSelectedMenuItem.childNodes[0] != null)
      HoverMenu.objSelectedMenuItem.childNodes[0].className = "menuItemA_" + a;
  }
  HoverMenu.objSelectedMenuItem = b;
  if (HoverMenu.objSelectedMenuItem != null) {
    HoverMenu.objSelectedMenuItem.className = "menuItemHover_" + a;
    HoverMenu.objSelectedMenuItem.childNodes[0].className =
      "menuItemAHover_" + a + " menuItemAHover:visited ";
    UserAgentInfo.strBrowser == 1 &&
      b.parentNode.parentNode.childNodes[0].focus();
    b.childNodes[0].focus();
  }
}
HoverMenu.OnKeyPress = HoverMenu_OnKeyPress;
function HoverMenu_OnKeyPress(b, a) {
  ULSrLq:;
  if (
    UserAgentInfo.strBrowser != 1 &&
    (KeyboardService.GetVirtualKey(a) != 1 || UserAgentInfo.strBrowser != 2)
  )
    return HoverMenu.OnKeyEvent(b, a);
  else return true;
}
HoverMenu.OnKeyDown = HoverMenu_OnKeyDown;
function HoverMenu_OnKeyDown(b, a) {
  ULSrLq:;
  if (
    UserAgentInfo.strBrowser == 1 ||
    (UserAgentInfo.strBrowser == 2 && KeyboardService.GetVirtualKey(a) == 1)
  )
    return HoverMenu.OnKeyEvent(b, a);
  else return true;
}
HoverMenu.OnKeyEvent = HoverMenu_OnKeyEvent;
function HoverMenu_OnKeyEvent(f, g) {
  ULSrLq:;
  var b = false,
    e = KeyboardService.GetVirtualKey(g);
  switch (e) {
    case 1:
      if (HoverMenu.objSelectedMenuItem != null) {
        HoverMenu.objSelectedMenuItem.onclick();
        b = true;
      }
      break;
    case 7:
    case 23:
      var a = null;
      if (HoverMenu.objSelectedMenuItem != null) {
        b = true;
        a = HoverMenu.objSelectedMenuItem.previousSibling;
        if (a == null) {
          if (e == 7) a = HoverMenu.objSelectedMenuItem;
          else {
            var d = HoverMenu_GetWidgetForVisibleMenu();
            HoverMenu.HideMenu();
            d != null && d.childNodes[0].focus();
          }
          b = false;
        }
        HoverMenu.SelectMenuItem(f, a);
      }
      break;
    case 8:
    case 22:
      var a = null,
        k = false;
      b = true;
      if (HoverMenu.objSelectedMenuItem != null) {
        a = HoverMenu.objSelectedMenuItem.nextSibling;
        if (a == null) {
          if (e == 8) a = HoverMenu.objSelectedMenuItem;
          b = false;
        }
      } else {
        a = document.getElementById(HoverMenu.strVisibleMenuID);
        if (a != null) a = a.childNodes[0].childNodes[0];
      }
      HoverMenu.SelectMenuItem(f, a);
      break;
    case 9:
      var c = HoverMenu.objMenuAccessSourceControl,
        d = HoverMenu_GetWidgetForVisibleMenu();
      HoverMenu.HideMenu();
      if (c != null)
        try {
          c.focus();
        } catch (h) {}
      else d != null && d.childNodes[0].focus();
      b = true;
      break;
    default:
      var c = HoverMenu.objMenuAccessSourceControl;
      if (c != null) {
        var j = ViewDataNode_GetViewDataNodeFromHtml(c),
          i = j.SnippetElement;
        if (i[2] == "RichTextBox") {
          HoverMenu.HideMenu();
          try {
            c.focus();
          } catch (h) {}
          b = false;
        }
      }
  }
  if (b) {
    Util.StopEventProprogation(g);
    return false;
  } else return true;
}
function IP_Collection() {}
IP_Collection.GetDataToInsert = function (a) {
  ULSrLq:;
  return a[6][0][0];
};
IP_Collection.GetHtmlTemplate = function (a) {
  ULSrLq:;
  return a[6][1];
};
IP_Collection.GetXmlToEdit = function (a) {
  ULSrLq:;
  return a[6][2][0];
};
IP_Collection.GetContainerSnippet = function (a) {
  ULSrLq:;
  return a[6][3];
};
IP_Collection.ResolveSpecialValue = BaseControl.ResolveSpecialValue;
function IP_Collection_Render(c, b, f, h, g) {
  ULSrLq:;
  var a = c.OriginalId;
  if (typeof a == "undefined" || a == "") {
    if (f == null) a = b[1];
    else a = f + "_" + b[1];
    ViewDataNode_SetHtmlId(c, a);
  }
  var j = b[2] == "RichTextCollection";
  if (ViewDataNode_IsHidden(c) && !j) return;
  var e = b[6];
  if (e.length != 9) return;
  for (var d = 0; d < g.length; d++)
    var i = g[d],
      k = IP_Collection.RenderSpecialValueContainer(i, c, b, a, h, e, a);
}
IP_Collection.RenderSpecialValueContainer = Collection_RenderSpecialValueContainer;
function Collection_RenderSpecialValueContainer(b, d, f, g, c, e, h) {
  ULSrLq:;
  var a = false;
  if (Util.GetDataType(b) == 1 && Util_GetSpecialValue(b) == 5) {
    IP_Collection.RenderSpecialValue(d, c, e, h);
    a = true;
  } else if (BaseControl.RenderTemplateItem(b, d, f, g, c)) a = true;
  return a;
}
IP_Collection.GetChildViewDataNodes = Collection_GetChildViewDataNodes;
function Collection_GetChildViewDataNodes(a) {
  ULSrLq:;
  return a[1][0];
}
IP_Collection.SetChildViewDataNodes = Collection_SetChildViewDataNodes;
function Collection_SetChildViewDataNodes(b, a) {
  ULSrLq:;
  b[1][0] = a;
}
IP_Collection.IsSigned = Collection_IsSigned;
function Collection_IsSigned(a) {
  ULSrLq:;
  return a[1][1];
}
IP_Collection.GetCollectionContent = Collection_GetCollectionContent;
function Collection_GetCollectionContent(a) {
  ULSrLq:;
  return a[1][2];
}
IP_Collection.IsReadOnly = Collection_IsReadOnly;
function Collection_IsReadOnly(a) {
  ULSrLq:;
  var b = a.FormId;
  return IP_Collection.IsSigned(a) || View_IsReadOnly(b);
}
IP_Collection.RenderSpecialValue = Collection_RenderSpecialValue;
function Collection_RenderSpecialValue(f, h, d, k) {
  ULSrLq:;
  for (
    var g = d[1],
      c = d[3],
      e = IP_Collection.GetChildViewDataNodes(f),
      i = k + "_" + c[1],
      b = 0;
    b < e.length;
    b++
  ) {
    var a = e[b];
    if (ViewDataNode_GetFilterRowVisibility(a)) {
      a._objViewDataNodeParent = f;
      var j = c.ControlType["Render"];
      j(a, c, i + a.StableId, g, h);
    }
  }
}
function ErrorVisualization() {}
ErrorVisualization.strServerImageHash = null;
ErrorVisualization.Timer = null;
function ErrorVisualization_FindInfoPathControl(a) {
  ULSrLq:;
  var b = BaseControl.GetChildInfoPathControls(a);
  if (b.length == 0)
    if (a.getAttribute("ScriptClass") == "RichTextBox") return a;
    else return a.parentNode;
  else if (b.length > 0) return b[0];
  else return null;
}
function ErrorVisualization_FindHelperForInfoPathControl(a, e) {
  ULSrLq:;
  var d, c, b;
  d = a.getAttribute("id");
  c = d + "_" + e;
  b = document.getElementById(c);
  if (
    b == null &&
    UserAgentInfo.strBrowser == 1 &&
    typeof a.offsetParent != "unknown" &&
    a.offsetParent != null
  )
    b = a.offsetParent.children(c);
  return b;
}
function ErrorVisualization_HasInvalidControlInView(a) {
  ULSrLq:;
  return ErrorVisualization_FindNextInvalidControl(a, null) != null;
}
function ErrorVisualization_FocusNextInvalidControl(d, b) {
  ULSrLq:;
  var a = ErrorVisualization_FindNextInvalidControl(d, b);
  if (a != null) {
    var b = document.getElementById(a[9]);
    if (b != null) {
      var c = a.SnippetElement.ControlType["RestoreFocus"];
      c(b);
      return true;
    }
  }
  return false;
}
function ErrorVisualization_FindNextInvalidControl(f, e) {
  ULSrLq:;
  var b, h, c, a;
  if (e == null) b = CurrentFormData_ViewDataTree(f);
  else b = ViewDataNode_GetViewDataNodeFromHtml(e);
  c = b;
  do {
    a = ViewDataNode_FindNext(c);
    if (a == null) a = CurrentFormData_ViewDataTree(f);
    var d = a.SnippetElement;
    if (d[2] != "HiddenLeaf") {
      var g = d.ControlType["IsValid"];
      if (!g(a)) return a;
    }
    c = a;
  } while (c != b);
  return null;
}
function ErrorVisualization_PositionVisualizationObject(a, e, h, r, d) {
  ULSrLq:;
  var j = h.FormId,
    b = h.SnippetElement,
    l = BaseControl_GetDirection(j, b),
    f = l == 2;
  a.style.position = "absolute";
  a.style.display = "inline";
  ErrorVisualization_SetErrorVisualizationObjectIsVisible(h, d, true);
  a.style.direction = BaseControl.k_strDirection[l];
  a.style.zIndex = d == "ErrorTip" ? "48" : "45";
  var g = 0,
    c = 0;
  if (d == "Asterisk" || d == "SignIcon") {
    var o = b.ControlType["GetAsteriskOffsetNormal"];
    c = o(b);
    if (!f)
      if (d == "Asterisk") c -= 9;
      else {
        var k = b[2];
        if (!(k == "RadioButton" || k == "CheckBox")) c -= 12;
      }
    var p = b.ControlType["ShouldShiftAsteriskIn"];
    if (p(e))
      if (f) c += BaseControl_EnsureScrollWidth(j);
      else c -= BaseControl_EnsureScrollWidth(j);
    var q = b.ControlType["GetAsteriskOffsetTop"];
    g = q(b);
  } else if (d == "ErrorTip") {
    var n = b.ControlType["GetErrorMessageOffset"],
      m = b.ControlType["GetErrorMessageOffsetTop"],
      i = ErrorVisualization_GetLeftOffset(e);
    c = n(b);
    g = m(b) - a.offsetHeight;
    if (f)
      if (i > a.offsetWidth) c -= a.offsetWidth;
      else c -= e.offsetWidth;
    else if (a.offsetWidth < i + e.offsetWidth && i + a.offsetWidth > r)
      c -= a.offsetWidth - e.offsetWidth;
  } else if (d == "PictureIcon") {
    c = LeafControl_GetAsteriskOffsetNormal(b);
    g = LeafControl_GetErrorMessageOffsetTop(b);
    if (f) c = c - a.offsetWidth + a.parentNode.offsetWidth;
  }
  a.style.top = g + "px";
  a.style.left = c + "px";
}
function ErrorVisualization_SetErrorVisualizationObjectIsVisible(b, a, c) {
  ULSrLq:;
  a += "IsVisible";
  b[a] = c;
}
function ErrorVisualization_GetErrorVisualizationObjectIsVisible(b, a) {
  ULSrLq:;
  a += "IsVisible";
  return b[a] == true;
}
function ErrorVisualization_GetLeftOffset(a) {
  ULSrLq:;
  var b = 0;
  if (a.offsetParent != null) {
    b += a.offsetLeft;
    a = a.offsetParent;
    while (a != null && a.offsetParent != null) {
      b += a.offsetLeft;
      a = a.offsetParent;
    }
  } else if (a.x != null) b += a.x;
  return b;
}
function ErrorVisualization_ComputeAbsolutePosition(c) {
  ULSrLq:;
  for (
    var d = c,
      b = { top: d.offsetTop, left: d.offsetLeft },
      e = document.body,
      a = c.offsetParent;
    typeof a != "unknown" && a != null && a != e && a.style.position == "";
    a = a.offsetParent
  ) {
    b.top += a.offsetTop;
    b.left += a.offsetLeft;
    if (UserAgentInfo.strBrowser == 1) {
      b.top += a.clientTop;
      b.left += a.clientLeft;
    }
  }
  return b;
}
function ErrorVisualization_GetViewDataNodeForErrorVisualization(f, a) {
  ULSrLq:;
  if (ViewDataNode_IsValid(a)) {
    var d = a.SnippetElement.ControlType["GetSecondaryDataNodes"],
      b = d(a);
    if (b != null)
      for (var e = b.length, c = 0; c < e; c++)
        if (!ViewDataNode_IsValid(b[c])) return b[c];
  }
  return a;
}
function ErrorVisualization_ShowMoreInfo(e, b, k) {
  ULSrLq:;
  var j = b.SnippetElement.ControlType["IsValid"];
  if (j(b)) return;
  var f = b.FormId,
    h = ErrorVisualization_GetViewDataNodeForErrorVisualization(e, b),
    a = "",
    d = "",
    i = b.SnippetElement;
  if (i[2] == "MultiSelectListBoxCollection")
    a = IntlCoreStrings.k_strValidationCannotBeEmpty;
  else {
    var g = ViewDataNode_GetDatum(h);
    a = g.GetErrorMessage();
    d = g.GetDetailedErrorMessage();
  }
  if (a == "" && d == "") return;
  var c = [];
  a != "" && c.push(a);
  if (d != "") {
    c.length != 0 && c.push("\n\n");
    c.push(d);
  }
  var l = CrossBrowserLibrary.GetScrollY(f);
  SelectionService.RememberFocus(e, k);
  SelectionService.RememberScrollPosition();
  UserMessages.ShowAlertMessage(c.join(""), false);
  SelectionService.RestoreFocus(f);
}
function ErrorVisualization_ClearAriaInvalid(c, b) {
  ULSrLq:;
  var a = b.SnippetElement.ControlType["SetAriaInvalidAttribute"];
  a(c, "false");
}
function ErrorVisualization_SetAriaInvalid(a, c) {
  ULSrLq:;
  if (a == null) return;
  var b = ErrorVisualization_GetViewDataNodeForErrorVisualization(a, c),
    d = ViewDataNode_GetDatum(b),
    h = b.SnippetElement.ControlType["IsValid"];
  if (h(b) || d == null) {
    ErrorVisualization_ClearAriaInvalid(a, c);
    return;
  }
  var f = d.GetErrorMessage(),
    g = d.GetDetailedErrorMessage().length > 0;
  if (f.length == 0 && !g) {
    ErrorVisualization_ClearAriaInvalid(a, c);
    return;
  }
  var e = b.SnippetElement.ControlType["SetAriaInvalidAttribute"];
  e(a, "true");
}
function ErrorVisualization_HideErrorVisualization(e, d, c) {
  ULSrLq:;
  var b = ErrorVisualization_FindHelperForInfoPathControl(e, c);
  if (b == null) return;
  var a = b.childNodes[0];
  if (a == null) return;
  a.style.display = "none";
  ErrorVisualization_SetErrorVisualizationObjectIsVisible(d, c, false);
  a.style.top = 0;
  a.innerHTML = "";
}
function ErrorVisualization_AbleToShowVisualization(b, a) {
  ULSrLq:;
  if (ViewDataNode_IsHidden(a)) return false;
  return !HoverMenu.isVisible && View.GetTemplateType(b) != 1;
}
function ErrorVisualization_HideAllVisualizations(b, a) {
  ULSrLq:;
  ErrorVisualization_IsAsteriskVisible(a) &&
    ErrorVisualization_HideAsterisk(b, a);
  ErrorVisualization_IsShortMessageVisible(a) &&
    ErrorVisualization_HideShortMessage(b, a);
  ErrorVisualization_IsSignatureIconVisible(a) &&
    ErrorVisualization_HideSignatureIcon(b, a);
}
function ErrorVisualization_UpdateAsterisk(b, a) {
  ULSrLq:;
  ErrorVisualization_IsAsteriskVisible(a) &&
    ErrorVisualization_ShowAsterisk(b, a);
}
function ErrorVisualization_UpdateAllAsterisks() {
  ULSrLq:;
  if (UserAgentInfo.strBrowser != 1 || UserAgentInfo.intBrowserRmj > 6) return;
  if (ErrorVisualization.Timer != null) return;
  ErrorVisualization.Timer = window.setTimeout(
    ErrorVisualization_UpdateAllAsterisks_Real,
    1
  );
}
function ErrorVisualization_UpdateAllAsterisks_Real() {
  ULSrLq:;
  for (var a, b = 0; b < _InfoPath.arrForms.length; b++)
    if (_InfoPath.arrForms[b] != null) {
      ErrorVisualization.strFormId = _InfoPath.arrForms[b].strFormId;
      a = CurrentFormData_ViewDataTree(ErrorVisualization.strFormId);
      while (a != null) {
        var d = a.SnippetElement;
        if (d[13]) {
          var c = document.getElementById(a[9]);
          c != null && ErrorVisualization_UpdateAsterisk(c, a);
        }
        a = ViewDataNode_FindNext(a);
      }
    }
  ErrorVisualization.Timer = null;
}
function ErrorVisualization_ShowAsterisk(c, a) {
  ULSrLq:;
  var f = a.FormId,
    d = a.SnippetElement;
  if (!ErrorVisualization_AbleToShowVisualization(f, a)) return;
  if (ErrorVisualization_IsAsteriskVisible(a)) {
    var e = d[2];
    if (e != "MultiSelectListBoxCollection" && e != "ListBox") return;
  }
  var g = ErrorVisualization_GetViewDataNodeForErrorVisualization(c, a);
  if (
    ViewDataNode_IsSigned(g) &&
    d[15] &&
    ErrorVisualization_IsSignatureIconVisible(a)
  )
    return;
  var b = ErrorVisualization_GetSpanForIconVisualization(c, a, "Asterisk");
  if (b == null) return;
  ErrorVisualization.strServerImageHash = Util.FindHashForServerImage(
    "MergedImage1.gif"
  );
  b.innerHTML =
    '<span class=\'asteriskIcon\' style="display: inline; position: absolute;"><div style="display: inline-block; vertical-align:top;overflow: hidden; width: 9px; position: relative;height: 10px"><img style="left: -46px; position: absolute; top: -10px" alt="" src="/_layouts/inc/MergedImage1.gif' +
    ErrorVisualization.strServerImageHash +
    '"/></div></span>';
  var h = b.childNodes[0],
    j = View_GetViewFormFieldIDControl(f),
    i = j.offsetWidth;
  ErrorVisualization_PositionVisualizationObject(h, c, a, i, "Asterisk");
}
function ErrorVisualization_GetSpanForIconVisualization(d, a, b) {
  ULSrLq:;
  var c = null,
    e =
      a.SnippetElement.ControlType["IsRenderingErrorVisualizationSpansItself"];
  if (
    (b == "Asterisk" && a.HasAsteriskHelpingSpan != true) ||
    (b == "SignIcon" && a.HasSignIconHelpingSpan != true)
  )
    if (!e()) {
      var c = ErrorVisualization_CreateSpanForErrorVisualization(a, b, "45");
      c = LeafControl_GetWrappingSpan(d).appendChild(c);
      if (b == "Asterisk") a.HasAsteriskHelpingSpan = true;
      else a.HasSignIconHelpingSpan = true;
    } else c = ErrorVisualization_FindHelperForInfoPathControl(d, b);
  else c = ErrorVisualization_FindHelperForInfoPathControl(d, b);
  return c;
}
function ErrorVisualization_CreateSpanForErrorVisualization(b, c, d) {
  ULSrLq:;
  var a = document.createElement("span");
  a.style.cursor = "default";
  a.style.display = "inline-block";
  a.style.position = "relative";
  a.style.verticalAlign = "top";
  a.style.cursor = "default";
  a.style.zIndex = d;
  a.setAttribute(
    "id",
    LeafControl_CreateAttributeIdExValue(b, b.OriginalId, c)
  );
  return a;
}
function ErrorVisualization_HideAsterisk(b, a) {
  ULSrLq:;
  ErrorVisualization_IsAsteriskVisible(a) &&
    ErrorVisualization_HideErrorVisualization(b, a, "Asterisk");
}
function ErrorVisualization_IsAsteriskVisible(a) {
  ULSrLq:;
  var b = a.AsteriskIsVisible == true;
  return b;
}
function ErrorVisualization__BuildErrorTipHtml(d, j, c, f) {
  ULSrLq:;
  var b = d.childNodes[0],
    h = j;
  if (b == null || b.getAttribute("boolShowMore") != c) {
    var l = f.FormId,
      i = f.SnippetElement,
      g = BaseControl.k_strDirection[BaseControl.GetDirection(l, i)],
      e = g == "rtl" ? "right" : "left",
      m = c ? "errorDivClickable" : "errorDiv",
      k = c ? " ErrorVisualization_ProcessMoreInfoClick(this, event);" : "",
      a = [];
    a.push("<span class='");
    a.push(m);
    a.push("' align=");
    a.push(e);
    a.push(' onMouseOver="return LeafControl.OnMouseOver(this, event);"');
    a.push(' onMouseOut="return LeafControl.OnMouseOut(this, event);"');
    a.push(' onClick="');
    a.push(k);
    a.push('"');
    a.push(" style='display:inline;direction:");
    a.push(g);
    a.push(";text-alignment:");
    a.push(e);
    a.push(";'></span>");
    d.innerHTML = a.join("");
    b = d.childNodes[0];
    b.setAttribute("boolShowMore", c);
  }
  Util.GetInnerText(b) != h && Util.SetInnerText(b, h);
  return b;
}
function ErrorVisualization_ShowShortMessage(b, a, g) {
  ULSrLq:;
  var h = g[2],
    d = "",
    e = null;
  if (!ErrorVisualization_HasToShowShortMessage(b, a, g)) return;
  var j = ErrorVisualization_GetViewDataNodeForErrorVisualization(b, a);
  if (h == "MultiSelectListBoxCollection")
    d = IntlCoreStrings.k_strValidationCannotBeEmpty;
  else {
    e = ViewDataNode_GetDatum(j);
    d = e.GetErrorMessage();
  }
  if (d.length == 0) return;
  var f = "";
  if (e != null) f = e.GetDetailedErrorMessage();
  var k = f.length > 0,
    c = null,
    n = a.FormId;
  if (a.HasErrorTipHelpingSpan != true) {
    var i =
      a.SnippetElement.ControlType["IsRenderingErrorVisualizationSpansItself"];
    if (!i()) c = ErrorVisualization__InsertErrorTipSpan(b, a, h);
    else c = ErrorVisualization_FindHelperForInfoPathControl(b, "ErrorTip");
  } else c = ErrorVisualization_FindHelperForInfoPathControl(b, "ErrorTip");
  if (c == null) return;
  var o = View_GetViewFormFieldIDControl(n),
    l = o.offsetWidth,
    m = ErrorVisualization__BuildErrorTipHtml(c, d, k, a);
  ErrorVisualization_PositionVisualizationObject(m, b, a, l, "ErrorTip");
}
function ErrorVisualization__InsertErrorTipSpan(b, c, d) {
  ULSrLq:;
  var a = ErrorVisualization_CreateSpanForErrorVisualization(
    c,
    "ErrorTip",
    "48"
  );
  if (d == "ComboBox" || d == "ListItem")
    a = LeafControl_GetWrappingSpan(b).insertBefore(a, b.parentNode);
  else a = LeafControl_GetWrappingSpan(b).insertBefore(a, b);
  c.HasErrorTipHelpingSpan = true;
  return a;
}
function ErrorVisualization_HasToShowShortMessage(d, a, b) {
  ULSrLq:;
  if (ErrorVisualization_IsShortMessageVisible(a) || !b[14]) return false;
  var f = a.FormId;
  if (!ErrorVisualization_AbleToShowVisualization(f, a)) return false;
  var c = b[2];
  if (c == "RichTextBox" && d._disableShortMessage) return false;
  if (c == "MultiSelectListBoxCollection") {
    if (MultiSelectListBoxCollection_IsValid(a)) return false;
  } else {
    var e = ErrorVisualization_GetViewDataNodeForErrorVisualization(d, a),
      g = ViewDataNode_GetDatum(e);
    if (g.IsValid()) return false;
  }
  return true;
}
function ErrorVisualization_HideShortMessage(b, a) {
  ULSrLq:;
  ErrorVisualization_IsShortMessageVisible(a) &&
    ErrorVisualization_HideErrorVisualization(b, a, "ErrorTip");
}
function ErrorVisualization_IsShortMessageVisible(a) {
  ULSrLq:;
  var b = a.ErrorTipIsVisible == true;
  return b;
}
function ErrorVisualization_ShowSignatureIcon(c, a, e) {
  ULSrLq:;
  if (!ErrorVisualization_HasToShowSignatureIcon(a, e)) return;
  ErrorVisualization_IsAsteriskVisible(a) &&
    ErrorVisualization_HideAsterisk(c, a);
  var b = ErrorVisualization_GetSpanForIconVisualization(c, a, "SignIcon");
  if (b == null) return;
  b.innerHTML =
    "<span class='signatureIcon' style=\"display: inline; position: absolute;\"><img src='/_layouts/inc/signaturehover.gif'/ width=12 height=12></span>";
  var d = b.childNodes[0],
    g = a.FormId,
    h = View_GetViewFormFieldIDControl(g),
    f = h.offsetWidth;
  ErrorVisualization_PositionVisualizationObject(d, c, a, f, "SignIcon");
}
function ErrorVisualization_HasToShowSignatureIcon(a, b) {
  ULSrLq:;
  if (ErrorVisualization_IsSignatureIconVisible(a) || !b[15]) return false;
  if (
    (Snippet_IsFromLeafControl(b) && !a[1][5]) ||
    (a.SnippetElement[2] == "MultiSelectListBoxCollection" &&
      !MultiSelectListBoxCollection.IsSigned(a))
  )
    return false;
  var c = a.FormId;
  if (!ErrorVisualization_AbleToShowVisualization(c, a)) return false;
  return true;
}
function ErrorVisualization_HideSignatureIcon(b, a) {
  ULSrLq:;
  ErrorVisualization_IsSignatureIconVisible(a) &&
    ErrorVisualization_HideErrorVisualization(b, a, "SignIcon");
}
function ErrorVisualization_IsSignatureIconVisible(a) {
  ULSrLq:;
  var b = a.SignIconIsVisible == true;
  return b;
}
function ErrorVisualization_VirtualKeyMoreInfoErrorVisAccess(d, e) {
  ULSrLq:;
  var b = SelectionService.GetSelectedControl();
  if (b == null) return;
  var a = ViewDataNode_GetViewDataNodeFromHtml(b);
  if (a == null) return;
  var d = a.FormId;
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(d) != 1
    )
  )
    return;
  var c = a.SnippetElement;
  if (
    !Snippet_IsFromLeafControl(c) &&
    a.SnippetElement[2] != "MultiSelectListBoxCollection"
  )
    return;
  ErrorVisualization_ShowMoreInfo(b, a, e);
}
function ErrorVisualization_ProcessMoreInfoClick(c, e) {
  ULSrLq:;
  var b = ErrorVisualization_FindInfoPathControl(c.parentNode.parentNode),
    a = ViewDataNode_GetViewDataNodeFromHtml(b),
    d = a.FormId;
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(d) != 1
    )
  )
    return;
  ErrorVisualization_ShowMoreInfo(b, a, e);
}
function ErrorVisualization_Highlight(b, d) {
  ULSrLq:;
  if (d) return;
  var a = ViewDataNode_GetViewDataNodeFromHtml(b),
    e = a.FormId;
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(e) != 1
    )
  )
    return;
  var c = a.SnippetElement;
  ErrorVisualization_ShowShortMessage(b, a, c);
  ErrorVisualization_ShowSignatureIcon(b, a, c);
}
function ErrorVisualization_RemoveHighlight(b, c) {
  ULSrLq:;
  if (c) return;
  var a = ViewDataNode_GetViewDataNodeFromHtml(b),
    d = a.FormId;
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(d) != 1
    )
  )
    return;
  ErrorVisualization_IsShortMessageVisible(a) &&
    ErrorVisualization_HideShortMessage(b, a);
  ErrorVisualization_IsSignatureIconVisible(a) &&
    ErrorVisualization_HideSignatureIcon(b, a);
}
function ErrorVisualization_ClearViewDataNodeErrorVisualizationState(a) {
  ULSrLq:;
  a.HasAsteriskHelpingSpan = false;
  a.HasSignIconHelpingSpan = false;
  a.HasErrorTipHelpingSpan = false;
  a.AsteriskIsVisible = false;
  a.ErrorTipIsVisible = false;
  a.SignIconIsVisible = false;
}
function ErrorVisualization_CopyErrorVisualizationStateAfterIncrementalReapply(
  a,
  b
) {
  ULSrLq:;
  b.HasAsteriskHelpingSpan = a.HasAsteriskHelpingSpan;
  b.HasSignIconHelpingSpan = a.HasSignIconHelpingSpan;
  b.HasErrorTipHelpingSpan = a.HasErrorTipHelpingSpan;
  b.AsteriskIsVisible = a.AsteriskIsVisible;
  b.ErrorTipIsVisible = a.ErrorTipIsVisible;
  b.SignIconIsVisible = a.SignIconIsVisible;
}
function ViewDataNode() {}
ViewDataNode.boolErrorVisRefreshNeeded = false;
function ViewDataNode_InitializeViewDataNode(a) {
  ULSrLq:;
  a._boolDirty = false;
  a._boolDeleted = false;
  a._nMultipleBindingClassId = -1;
  a._changedOnClient = false;
}
function ViewDataNode_Disable(a) {
  ULSrLq:;
  a[3] = true;
  var c = document.getElementById(a[9]);
  if (c != null) {
    var b = a.SnippetElement,
      d = b[5];
    if (d != 4) {
      var e = b.ControlType["SetDisable"];
      e(c, true);
    }
  }
}
function ViewDataNode_UnDisable(a) {
  ULSrLq:;
  a[3] = false;
  var b = document.getElementById(a[9]);
  if (b != null) {
    var c = a.SnippetElement.ControlType["SetDisable"];
    c(b, false);
  }
}
function ViewDataNode_IsHidden(c) {
  ULSrLq:;
  var b = c[4],
    a = c._objViewDataNodeParent;
  while (!b && a != null) {
    b = a[4];
    a = a._objViewDataNodeParent;
  }
  return b;
}
function ViewDataNode_GetZeroViewDataNode(b) {
  ULSrLq:;
  var a = GlobalFormData.Get(b);
  if (typeof a.objZeroViewDataNode == "undefined")
    a.objZeroViewDataNode = ViewDataNode_CreateUnparentedViewDataNode(b, "0");
  return a.objZeroViewDataNode;
}
function ViewDataNode_CreateUnparentedViewDataNode(d, e) {
  ULSrLq:;
  var a = [];
  a.push(-1);
  a.push("");
  a.push("");
  a.push(["", "", "", "", ""]);
  a.push(0);
  a.push(3);
  a.push([]);
  a.push([]);
  var c = new LeafDatum();
  c.SetValue(e);
  var b = [];
  b.push(a);
  b.push([]);
  b.push("_dummy");
  b.SnippetElement = a;
  b[1].push("");
  b[1].push(c);
  b.FormId = d;
  return b;
}
function ViewDataNode_IsDisabled(b) {
  ULSrLq:;
  if (b == null) return false;
  var c = b[3];
  if (!c) {
    var e = b.SnippetElement,
      a = e[5];
    if (a == 3 || a == 8) c = b[1][4];
    else if (a == 2 || a == 7 || a == 4) {
      var d = document.getElementById(b[9]);
      if (d == null) return true;
      if (a == 2) c = StructuralEditingControl_IsReadOnly(d);
      else if (a == 4 || a == 7) c = Collection_IsReadOnly(b);
    }
  }
  return c;
}
function ViewDataNode_IsBlank(c) {
  ULSrLq:;
  var b = false,
    d = c.SnippetElement;
  if (d[5] == 3) {
    var e = ViewDataNode_GetDatum(c),
      a = e.GetValue();
    if (Util_GetDataType(a) == 3) if (a.length > 0) a = a[0];
    b = Util_IsNullOrEmptyString(a);
  } else b = false;
  return b;
}
function ViewDataNode_IsSigned(b) {
  ULSrLq:;
  var c = false;
  if (b != null) {
    var d = b.SnippetElement,
      a = d[5];
    if (a == 3) c = LeafControl.IsSigned(b);
    else if (a == 2 || a == 7 || a == 4)
      c = StructuralEditingControl.IsSigned(b);
    else if (a == 6) c = Container.IsSigned(b);
  }
  return c;
}
function ViewDataNode_Delete(d) {
  ULSrLq:;
  var b = d._objViewDataNodeParent,
    e = -1;
  if (b == null) return;
  for (var c = ViewDataNode_GetChildNodes(b), a = 0; a < c.length; a++)
    if (c[a] == d) {
      e = a;
      break;
    }
  var f = Util_RemoveAt(c, e);
  IP_Collection.SetChildViewDataNodes(b, f);
  RichTextBox_CleanupContainer(d);
}
function ViewDataNode_CreateDatum(c) {
  ULSrLq:;
  var a,
    b = c[1][1][3];
  if (b == -1) {
    a = new LeafDatum();
    ViewDataNode_InitializeDatum(c, a);
  } else {
    if (
      typeof g_objMultipleBindingIdMap != "undefined" &&
      g_objMultipleBindingIdMap != null
    ) {
      var d = g_objMultipleBindingIdMap[b];
      if (d == null) {
        d = StructuralEditingControl._CreateNewMBId();
        g_objMultipleBindingIdMap[b] = d;
      }
      b = d;
      c[1][1][3] = b;
    }
    a = g_objMultipleBindingMap[b];
    if (a == null) {
      a = new LeafDatum();
      ViewDataNode_InitializeDatum(c, a);
      g_objMultipleBindingMap[b] = a;
    } else {
      ViewDataNode_InitializeViewDataNode(c);
      c[1][1] = a;
    }
    c._nMultipleBindingClassId = b;
  }
  return a;
}
function ViewDataNode_InitializeDatum(a, b) {
  ULSrLq:;
  var d = a.SnippetElement,
    c = d[7];
  ViewDataNode_InitializeViewDataNode(a);
  b.Initialize(a[1][1], c, ViewDataNode_IsSigned(a));
  a[1][1] = b;
}
function ViewDataNode_GetDatum(a) {
  ULSrLq:;
  return a[1][1];
}
function ViewDataNode_SetHidden(a, b) {
  ULSrLq:;
  var g = a[4];
  if (g != b) {
    a[4] = b;
    var h = a.SnippetElement,
      c = h[5];
    if (c == 2 || c == 4 || c == 7 || c == 6) {
      var j = a.FormId;
      GlobalFormData.Get(j).viewDataNodeNeedReRendering = true;
    }
  }
  ViewDataNode.boolErrorVisRefreshNeeded = true;
  if (g != b)
    for (var e = ViewDataNode_GetChildNodes(a), d = 0; d < e.length; d++)
      ViewDataNode_SetHidden(e[d], b);
  var f = document.getElementById(a[9]);
  if (f != null) {
    var i = a.SnippetElement.ControlType["SetHidden"];
    i(a, f, b);
  }
}
function ViewDataNode_SetContent(a, e) {
  ULSrLq:;
  a[1] = e;
  for (var c = ViewDataNode_GetChildNodes(a), b = 0; b < c.length; b++) {
    var d = c[b];
    d._objViewDataNodeParent = a;
  }
}
function ViewDataNode_IsValid(b) {
  ULSrLq:;
  var c = b.SnippetElement,
    a;
  if (c[5] == 3) {
    var d = ViewDataNode_GetDatum(b);
    a = d.IsValid();
  } else a = true;
  return a;
}
function ViewDataNode_SetHtmlId(a, b) {
  ULSrLq:;
  a.OriginalId = b;
  a[9] = a.FormId + "_" + b;
}
function ViewDataNode_GetFilterRowVisibility(a) {
  ULSrLq:;
  if (typeof a[6] == "undefined") return true;
  else return a[6];
}
function ViewDataNode_GetViewDataNodeFromHtml(a) {
  ULSrLq:;
  var e = a.getAttribute("FormId"),
    b = GlobalFormData.Get(e).viewDataHtmlMap,
    d = a.getAttribute("viewDataNode"),
    c = b[d];
  return c;
}
function ViewDataNode_GetChildNodes(b) {
  ULSrLq:;
  if (b == null) return [];
  var a = b.SnippetElement[5];
  if (a == 3 || a == 8) return [];
  else if (a == 4 || a == 7 || a == 2)
    return IP_Collection.GetChildViewDataNodes(b);
  else if (a == 6) return Container.GetChildViewDataNodes(b);
  else return b[1];
}
function ViewDataNode_FindNext(d) {
  ULSrLq:;
  var e, a, b;
  if (!ViewDataNode_IsHidden(d)) {
    e = ViewDataNode_GetChildNodes(d);
    if (e.length > 0) return e[0];
  }
  a = d;
  b = a._objViewDataNodeParent;
  while (b != null) {
    for (var f = ViewDataNode_GetChildNodes(b), c = 1; c < f.length; c++)
      if (f[c - 1] == a) return f[c];
    a = b;
    b = a._objViewDataNodeParent;
  }
  return null;
}
function ViewDataNode_FindPreviousSibling(c) {
  ULSrLq:;
  var a = null,
    f = c._objViewDataNodeParent;
  if (f != null)
    for (var d = ViewDataNode_GetChildNodes(f), b = 0; b < d.length; b++) {
      var e = d[b];
      if (e == c) return a;
      a = e;
    }
  return a;
}
function ViewDataNode_ProcessDeclarativeValidation(a, e) {
  ULSrLq:;
  for (
    var b = ViewDataNode_GetDatum(a),
      i = a.SnippetElement[7][1],
      m = a.FormId,
      n = GlobalFormData.Get(m),
      f = i[1],
      d = 0;
    d < f.length;
    d++
  ) {
    var c = f[d],
      g = c[0];
    if (g) continue;
    var j = c[1],
      l = c[2],
      k = c[3];
    if (!b.ValidateDataType()) continue;
    if (!e.Contains(a)) {
      b.ClearError();
      a._boolDirty = true;
      e.Add(a);
    } else if (!b.IsValid()) continue;
    var h = Expr_Evaluate(j, a, 1);
    if (Expr.Boolean(h)) {
      b.SetError(l, k);
      a._boolDirty = true;
    }
  }
}
function ViewDataNode_ProcessDataActions(a, m, q, h, c, e) {
  ULSrLq:;
  var u = m,
    k = a.SnippetElement[7][1],
    E = a.FormId,
    L = GlobalFormData.Get(E),
    f = a.SnippetElement,
    w = Snippet_GetRoundTripModel(f);
  if (m && w == 1) {
    var J = c ? (e ? 2 : 3) : 1;
    View_SubmitForm(E, false, f[9], J, false);
    return 1;
  }
  if (w == 2) u = false;
  if (q > 15) return 2;
  var f = a.SnippetElement,
    j = k[0],
    t = c && e && f[5] == 3;
  if (t) {
    for (var D = false, p = 0; p < j.length; p++)
      if (!j[p][0]) {
        D = true;
        break;
      }
    if (!D) t = false;
  }
  if (!c || f[5] == 6) {
    var A = ViewDataNode_IterateRules(a, m, q, h, c, e);
    if (A != 0) return A;
  }
  for (var n = 0; n < j.length; n++) {
    var l = j[n],
      i = l[0],
      r,
      b;
    if (!i && !h) continue;
    if (i) {
      var C = l[1];
      r = l[2];
      b = Expr.vpath_SelectViewPath(a, C);
    } else {
      r = l[1];
      b = [];
      b.push(a);
    }
    for (var d = 0; d < b.length; d++) {
      var g = b[d],
        y = ViewDataNode_GetDatum(g),
        x = Expr.String(Expr_Evaluate(r, g, 1));
      if (y.GetValue() != x) {
        y.SetValue(x);
        if (i) {
          var v = ViewDataNode_ProcessDataActions(g, u, q + 1, h, c, e);
          if (v != 0) return v;
        }
      }
    }
  }
  for (var z = k[1], I = new Set(), o = 0; o < z.length; o++) {
    var B = z[o],
      i = B[0],
      b;
    if (i) {
      var C = B[1];
      b = Expr.vpath_SelectViewPath(a, C);
    } else {
      b = [];
      b.push(a);
    }
    for (var d = 0; d < b.length; d++) {
      var g = b[d],
        K = !c || (e && a == g);
      ViewDataNode_ProcessDeclarativeValidation(g, I, K);
    }
  }
  var H = f[5];
  if (H != 8) {
    var F = ViewDataNode_GetDatum(a);
    F.ValidateDataType();
    var s = document.getElementById(a[9]);
    if (s != null)
      if (!F.IsValid()) ErrorVisualization_SetAriaInvalid(s, a);
      else ErrorVisualization_ClearAriaInvalid(s, a);
  }
  var G = k[2];
  if (ViewDataNode_ProcessConditionalFormatting(a, G, new Set()) == 1) return 1;
  if (ViewDataNode_ProcessRefresh(a, k, h) == 1) return 1;
  return 0;
}
function ViewDataNode_ProcessConditionalFormatting(k, f, g) {
  ULSrLq:;
  for (var e = 0; e < f.length; e++) {
    for (
      var c = f[e],
        A = c[0],
        w = c[1],
        r = c[2],
        z = c[3],
        p = c[4],
        q = c[5],
        s = c[6],
        a = k,
        v = Expr.vpath_SelectViewPathNoStrip(k, A),
        o = 0;
      o < v.length;
      o++
    ) {
      var b = v[o],
        y = b.SnippetElement,
        C = y[5],
        j = Expr.vpath_SelectViewPathNoStrip(b, r);
      if (j.length == 0) {
        b = b._objViewDataNodeParent;
        j = Expr.vpath_SelectViewPathNoStrip(b, r);
      }
      for (var n = 0; n < j.length; n++) {
        a = j[n];
        if (g.Contains(a)) continue;
        var t = a.SnippetElement,
          u = t[5];
        if (u == 4 && t[2] != "MultiSelectListBoxCollection")
          if (
            ViewDataNode_ConditionalFormattingLogic(a, true, w, p, q, -1, b, g)
          ) {
            a._boolDirty = true;
            break;
          }
        if (u == 6) {
          a[2] = -1;
          var h = a.SnippetElement[7][1][2];
          if (h.length == 0) {
            a = a._objViewDataNodeParent;
            h = a.SnippetElement[7][1][2];
          }
          for (var m = 0; m < h.length; m++) {
            var d = h[m],
              b = a;
            if (d[4] == true) {
              b = a._objViewDataNodeParent;
              b = b._objViewDataNodeParent;
              a = a._objViewDataNodeParent;
            }
            if (
              ViewDataNode_ConditionalFormattingLogic(
                a,
                true,
                d[1],
                d[4],
                d[5],
                d[3],
                b,
                g
              )
            ) {
              a._boolDirty = true;
              break;
            }
          }
        } else {
          var x = a.SnippetElement;
          if (x[2] == "RichTextBox") {
            b = b._objViewDataNodeParent;
            b = b._objViewDataNodeParent;
          }
          if (ViewDataNode_ConditionalFormattingLogic(a, s, w, p, q, z, b, g))
            break;
        }
      }
    }
    if (s) {
      var i = false;
      if (k == a)
        if (e + 1 < f.length)
          for (var l = e + 1; l < f.length; l++) {
            var B = f[l];
            i = B[6];
            if (i) break;
          }
        else i = true;
      if (i) continue;
      else g.Add(k);
    }
  }
}
function ViewDataNode_ConditionalFormattingLogic(a, i, m, g, h, k, l, e) {
  ULSrLq:;
  if (a != null) {
    var b = a.SnippetElement,
      c = b[5];
    if (!i) {
      if ((c != 6 && c != 4) || b[2] == "MultiSelectListBoxCollection") {
        var f = a.SnippetElement[7][1][2];
        return ViewDataNode_ProcessConditionalFormatting(a, f, e);
      }
    } else {
      var j = Expr_Evaluate(m, l, 0);
      a._boolDirty = true;
      if (Expr.Boolean(j)) {
        e.Add(a);
        g && ViewDataNode_Disable(a);
        ViewDataNode_SetHidden(a, h);
        a[2] = k;
        return true;
      } else {
        a[2] = null;
        ViewDataNode_UnDisable(a);
        ViewDataNode_SetHidden(a, false);
        var b = a.SnippetElement,
          c = b[5];
        if (c == 6) {
          var d = a._objViewDataNodeParent;
          d[4] = false;
          d[2] = null;
        }
      }
    }
  }
  return false;
}
function ViewDataNode_ProcessRenderingActions(a) {
  ULSrLq:;
  var e = CurrentFormData_ViewDataTree(a),
    f = GlobalFormData.Get(a);
  if (f.viewDataNodeNeedReRendering == true) {
    ViewDataNode__MarkViewDataTreeDirty(e);
    SelectionService.RememberScrollPosition();
    var c = document.getElementById("RTEDialogHelper");
    if (c != null) {
      c.parentNode.removeChild(c);
      g_oExtendedRichTextSupport = null;
    }
    var b = document.getElementById("RTETextEditorPullDownMenu");
    if (b != null) {
      b.parentNode.removeChild(b);
      g_fRTEFirstTimeGenerateCalled = true;
    }
    View_CleanupRichTextStructures();
    CustomControl_OnBeforeDestruction(a);
    View_GenerateAndInsertHtmlView(a);
    var d = SelectionService.GetSelectedControl();
    if (d && d.parentNode == null) {
      var g = document.getElementById(d.id);
      f.selectedControl = g;
    }
    var f = GlobalFormData.Get(a);
    !(
      typeof g_objCurrentFormDataSelection == "undefined" ||
      g_objCurrentFormDataSelection == null
    ) && SelectionService_RestoreFocus(a);
    f.viewDataNodeNeedReRendering = false;
  }
  ViewDataNode_ProcessRenderingAction(e);
  ViewDataNode_UndirtySubtree(e);
  if (ViewDataNode.boolErrorVisRefreshNeeded) {
    ViewDataNode.boolErrorVisRefreshNeeded = false;
    ErrorVisualization_UpdateAllAsterisks();
  }
}
function ViewDataNode_UndirtySubtree(a) {
  ULSrLq:;
  var d = a.SnippetElement[5];
  a._boolDirty = false;
  switch (d) {
    case 6:
    case 3:
    case 8:
      var e = ViewDataNode_GetDatum(a);
      e.UnDirty();
  }
  for (var c = ViewDataNode_GetChildNodes(a), b = 0; b < c.length; b++)
    ViewDataNode_UndirtySubtree(c[b]);
}
function ViewDataNode_ProcessRenderingAction(a) {
  ULSrLq:;
  var j = a.SnippetElement,
    k = j[5];
  switch (k) {
    case 6:
      if (ViewDataNode_IsHidden(a)) return;
      var h = ViewDataNode_GetDatum(a);
      if (h.IsDirty() || a._boolDirty) {
        var b = document.getElementById(a[9]);
        b != null && BaseControl__ApplyCssClasses(b, 0);
      }
      for (var d = ViewDataNode_GetChildNodes(a), c = 0; c < d.length; c++)
        ViewDataNode_ProcessRenderingAction(d[c]);
      break;
    case 3:
    case 8:
      if (a._keyPressed === true) a._keyPressed = false;
      var h = ViewDataNode_GetDatum(a);
      if (a._boolDirty) {
        var g = document.getElementById(a[9]);
        if (g != null) {
          var i = a.SnippetElement.ControlType["RefreshControlData"];
          i(a, g);
        }
      }
      (h.IsDirty() || a._boolDirty) && ViewDataNode_Render(a);
      break;
    case 4:
      if (ViewDataNode_IsHidden(a)) return;
      var o = a.SnippetElement,
        e = o[2];
      if (e == "RichTextCollection") {
        var b = document.getElementById(a[9]);
        null != b && BaseControl__ApplyCssClasses(b, 0);
      } else if (e == "MultiSelectListBoxCollection") {
        var b = document.getElementById(a[9]);
        if (null != b) {
          MultiSelectListBoxCollection.RefreshControlData(a, b);
          if (a._boolDirty) {
            b = document.getElementById(a[9]);
            var f = a.SnippetElement.ControlType["RefreshVisualState"];
            f(b);
          }
        }
      } else if (e == "RepeatingSection") {
        var l = a.SnippetElement[7][1],
          m = ViewDataNode_DoesNodeHaveFilter(l);
        if (m && a._boolDirty) {
          var p = a.FormId,
            n = GlobalFormData.Get(p);
          n.viewDataNodeNeedReRendering = true;
          var b = document.getElementById(a[9]),
            f = a.SnippetElement.ControlType["RefreshVisualState"];
          f(b);
        }
      }
    default:
      if (ViewDataNode_IsHidden(a)) return;
      for (var d = ViewDataNode_GetChildNodes(a), c = 0; c < d.length; c++)
        ViewDataNode_ProcessRenderingAction(d[c]);
  }
}
function ViewDataNode_IterateRules(a, f, h, c, e, d) {
  ULSrLq:;
  var g = a.SnippetElement[7][1],
    b = g[3];
  if (b.length == 0) return 0;
  return ViewDataNode_ProcessRules(b, a, f, h, c, e, d);
}
function ViewDataNode_ProcessRules(j, m, l, n, k, h, g) {
  ULSrLq:;
  var i = "",
    d = "";
  if (h && !g) return 0;
  for (var f = 0; f < j.length; f++) {
    var a = j[f],
      c = m,
      e = a[4],
      p = a[3];
    if (!p) c = c._objViewDataNodeParent;
    if (!(d && e == i)) {
      var o = a[1];
      d = Expr_Evaluate(o, c, 1);
    }
    e = a[4];
    var b = ViewDataNode_ProcessRule(c, a, d, l, n, k, h, g);
    if (b == -1) return 1;
    if (b == 3) return 0;
    if (b != 0) return b;
    i = e;
  }
  return 0;
}
function ViewDataNode_ProcessRule(f, g, v, p, w, s, o, n) {
  ULSrLq:;
  var l = f.FormId,
    A = GlobalFormData.Get(l),
    z = g[2];
  if (v) {
    var b = 0,
      h = false;
    switch (z) {
      case 0:
        for (
          var t = g[5], e = Expr_Evaluate(t, f, 1), y = g[6], j = [], c = 0;
          c < y;
          c++
        )
          j.push(g[7 + c]);
        for (var c = 0; c < j.length; c++)
          for (
            var q = Expr.vpath_SelectViewPath(f, j[c]), m = 0;
            m < q.length;
            m++
          ) {
            var i = q[m],
              d = ViewDataNode_GetDatum(i),
              a = 0,
              k = true,
              u = i[1];
            if (u[3]) return 0;
            if (Util_GetDataType(e) == 3 && e.length >= 1 && e[0] != null) {
              a = Expr.String(ViewDataNode_GetDatum(e[0]).GetValue());
              if (a == d.GetValue()) k = false;
              d.SetValue(a);
            } else {
              a = Expr.String(e);
              if (a == d.GetValue()) k = false;
              else d.SetValue(a);
            }
            if (d.GetValue() != a) return -1;
            f._boolDirty = true;
            if (k) {
              var r = ViewDataNode_ProcessDataActions(i, p, w + 1, s, o, n);
              if (r != 0) return r;
            }
          }
        break;
      case 1:
        b = 20;
        break;
      case 2:
        b = 21;
        break;
      case 3:
        b = 22;
        break;
      case 4:
        b = 23;
        h = true;
        break;
      case 7:
        if (CurrentFormData.ProvidesWebPartData(l) == true) {
          b = 27;
          PostbackBody.webPartConnectionTriggered = true;
          h = true;
        }
        break;
      case 6:
        return 3;
    }
    if (p && b != 0) {
      var x = o ? (n ? 2 : 3) : 1;
      View_SubmitForm(l, h, b, x, false);
      return 1;
    }
  }
  return 0;
}
function ViewDataNode_ProcessRefresh(g, i, h) {
  ULSrLq:;
  for (var e = i[4], b = 0; b < e.length; b++) {
    var f = e[b],
      d = f[0],
      a;
    if (!d && !h) continue;
    if (d) {
      var k = f[1];
      a = Expr.vpath_SelectViewPathNoStrip(g, k);
    } else {
      a = [];
      a.push(g);
    }
    for (var c = 0; c < a.length; c++) {
      var j = a[c];
      j._boolDirty = true;
    }
  }
  return 0;
}
function ViewDataNode_FireOnAfterCreate(c) {
  ULSrLq:;
  var e = c.SnippetElement,
    b = e[5],
    f = c[5];
  if (f == 2) e[4] = 1;
  BaseControl_FireOnAfterCreate(c);
  if (b == 3) return;
  else if (b == 4 || b == 7 || b == 2)
    for (
      var d = IP_Collection.GetChildViewDataNodes(c), a = 0;
      a < d.length;
      a++
    )
      ViewDataNode_FireOnAfterCreate(d[a]);
  else if (b == 6)
    for (var d = Container.GetChildViewDataNodes(c), a = 0; a < d.length; a++)
      ViewDataNode_FireOnAfterCreate(d[a]);
}
function ViewDataNode_MarkSubtreeAsDeleted(c) {
  ULSrLq:;
  c._boolDeleted = true;
  for (var b = ViewDataNode_GetChildNodes(c), a = 0; a < b.length; a++)
    ViewDataNode_MarkSubtreeAsDeleted(b[a]);
}
function ViewDataNode_OnStructuralChange(a, c, b) {
  ULSrLq:;
  var e = a.FormId;
  GlobalFormData.Get(e).viewDataNodeNeedReRendering = false;
  if (ViewDataNode_OnStructuralChangeInternal(a, c, b)) {
    var g = a._objViewDataNodeParent,
      d = g.SnippetElement,
      f = Snippet_GetRoundTripModel(d),
      h = d[7][1][3];
    ViewDataNode_ProcessRules(h, a, c && f != 2, 0, b, true, b);
    ViewDataNode_ProcessRenderingActions(e);
    return true;
  } else return false;
}
function ViewDataNode_OnStructuralChangeInternal(a, j, d) {
  ULSrLq:;
  var i = a.SnippetElement,
    b = i[5],
    l = Snippet_GetRoundTripModel(i),
    f = j && l != 2;
  if (b == 3 || b == 6 || b == 8) {
    var c = document.getElementById(a[9]);
    if (b != 8) {
      var m = ViewDataNode_GetDatum(a);
      m.ValidateDataType();
      c != null && BaseControl_RefreshVisualState(c);
      var g = ViewDataNode_ProcessDataActions(a, f, 0, d, true, d);
      if (g == 1) return false;
      g == 2 &&
        UserMessages.ShowAlertMessage(
          IntlCoreStrings.k_strDataActionsMaxDepthExceeded,
          true
        );
    }
    if (c != null) {
      var k = a.SnippetElement.ControlType["RefreshControlData"];
      k(a, c);
    }
  }
  for (var h = ViewDataNode_GetChildNodes(a), e = 0; e < h.length; e++)
    if (!ViewDataNode_OnStructuralChangeInternal(h[e], f, d)) return false;
  return true;
}
function ViewDataNode_ProcessEditingActions(a, e, d) {
  ULSrLq:;
  var g = d[5];
  if (g != 8) {
    var c = ViewDataNode_GetDatum(e),
      f = d.ControlType["GetFormatting"],
      h = f(e),
      b = h.Unformat(a).strUnformattedValue;
    if (Util_GetDataType(a) == 3) {
      a = a;
      b = a;
    }
    if (IsValueValidForDatumBaseType(c, b)) c.SetValue(b);
    else c.SetValue(a);
  }
}
function ViewDataNode_OnControlChange(b) {
  ULSrLq:;
  var a = ViewDataNode_GetViewDataNodeFromHtml(b),
    c = a.SnippetElement.ControlType["GetValueFromControl"],
    d = c(b);
  return ViewDataNode_OnControlChangeInternal(a, d);
}
function ViewDataNode_OnControlChangeSecondary(b, a) {
  ULSrLq:;
  var d = a.SnippetElement,
    c =
      g_arrControlTypes[b.getAttribute("ScriptClass")][
        "GetSecondaryValueFromControl"
      ],
    e = c(b);
  if (d[5] != 6) return ViewDataNode_OnControlChangeInternal(a, e);
}
function ViewDataNode_OnControlChangeInternal(a, f) {
  ULSrLq:;
  var d = a.FormId,
    c = a.SnippetElement,
    e = Snippet_GetRoundTripModel(c);
  ViewDataNode_ProcessEditingActions(f, a, c);
  GlobalFormData.Get(d).viewDataNodeNeedReRendering = false;
  var b = ViewDataNode_ProcessDataActions(a, e != 2, 0, false, false, false);
  if (b == 1) return false;
  b == 2 &&
    UserMessages.ShowAlertMessage(
      IntlCoreStrings.k_strDataActionsMaxDepthExceeded,
      true
    );
  ViewDataNode_ProcessRenderingActions(d);
  return true;
}
function ViewDataNode_Render(a) {
  ULSrLq:;
  var b = document.getElementById(a[9]);
  if (b == null) return;
  var g = ViewDataNode_GetDatum(a);
  if (g.IsDirty()) {
    var d = a.SnippetElement.ControlType["GetFormattedValue"],
      f = d(a),
      e = a.SnippetElement.ControlType["SetValueOfControl"];
    b = e(b, f);
    a._boolDirty = true;
  }
  if (a._boolDirty) {
    var c = a.SnippetElement.ControlType["RefreshVisualState"];
    c(b);
  }
}
function ViewDataNode_BuildViewDataPath(f) {
  ULSrLq:;
  var c = [],
    a = f,
    h = f.FormId,
    g = CurrentFormData_ViewName(h);
  c.push(g);
  while (a != null) {
    var d = a._objViewDataNodeParent;
    if (d != null)
      for (var e = ViewDataNode_GetChildNodes(d), b = 0; b < e.length; b++)
        if (a == e[b]) {
          c.push(b);
          break;
        }
    a = d;
  }
  return c;
}
function ViewDataNode_SelectViewDataPath(f, b) {
  ULSrLq:;
  var c = f,
    i = f.FormId;
  if (b.length > 0) {
    var g = CurrentFormData_ViewDataTree(i).SnippetElement,
      h = View.GetName(g);
    if (h != b[0]) return c;
    for (var e = b.length - 1; e >= 1; e--) {
      var a = ViewDataNode_GetChildNodes(c);
      if (a.length == 0) break;
      var d = b[e];
      if (d >= a.length) d = a.length - 1;
      c = a[d];
    }
  }
  return c;
}
function ViewDataNode_GetFilterPredicateAsViewPath(a) {
  ULSrLq:;
  if (a[5][0] != "undefined" && a[5][0][0] != "undefined" && a[5][0][2] == true)
    return a[5][0][3];
  return false;
}
function ViewDataNode_GetFilterFunction(a) {
  ULSrLq:;
  if (a[5].length >= 1 && a[5][0] != "undefined" && a[5][0][0] == true)
    return a[5][0][5];
  return null;
}
function ViewDataNode_DoesNodeHaveFilter(a) {
  ULSrLq:;
  if (a[5].length >= 1 && a[5][0] != "undefined" && a[5][0][0] == true)
    return true;
  else return false;
}
function ViewDataNode_GetFilterComplexity(a) {
  ULSrLq:;
  if (a[5].length >= 1 && a[5][0] != "undefined") return a[5][0][2];
  return false;
}
function ViewDataNode_GetFilterSourceToTargetViewPath(a) {
  ULSrLq:;
  if (ViewDataNode_DoesNodeHaveFilter(a)) return a[5][0][4];
}
function ViewDataNode__MarkViewDataTreeDirty(a) {
  ULSrLq:;
  if (ViewDataNode_IsHidden(a)) return;
  var d = a.SnippetElement,
    e = d[5];
  if (e == 8) return;
  a._boolDirty = true;
  for (var c = ViewDataNode_GetChildNodes(a), b = 0; b < c.length; b++)
    ViewDataNode__MarkViewDataTreeDirty(c[b]);
}
function ViewDataNode_MoveAuxDomsFromCache(f) {
  ULSrLq:;
  for (
    var b = GlobalFormData.Get(f), c = b.auxDomCache, d = 0;
    d < c.length;
    d++
  ) {
    var e = c.pop(),
      a = b.viewDataHtmlMap["Snippet_" + e.SnippetElement[0]];
    if (a[1][0].length == 0) a[1] = e[1];
  }
}
function ViewDataNode_GetPositionInParentArray(c) {
  ULSrLq:;
  var b = c._objViewDataNodeParent;
  if (b != null) {
    for (var d = ViewDataNode_GetChildNodes(b), a = 0; a < d.length; a++)
      if (d[a] == c) return a;
  } else return 0;
}
function ViewDataNode_GetUnderlyingDatatype(b) {
  ULSrLq:;
  var c = ViewDataNode_GetDatum(b),
    a = c.GetDataInformation();
  return DataInformation.GetDataType(a).GetUnderlyingDatatype();
}
function Snippet_GetSnippetElementFromHtml(b) {
  ULSrLq:;
  var a = ViewDataNode_GetViewDataNodeFromHtml(b);
  return a.SnippetElement;
}
function Snippet_GetRoundTripModel(a) {
  ULSrLq:;
  return a[4];
}
function Snippet_GetChildNodes(a) {
  ULSrLq:;
  var c = a[5];
  switch (c) {
    case 3:
      return [];
    case 2:
    case 7:
    case 4:
      var b = [];
      b.push(a[6][3]);
      return b;
    case 6:
      return a[6][0];
    default:
      return null;
  }
}
function Snippet_IsFromLeafControl(b) {
  ULSrLq:;
  var a = b[5];
  return a == 3 || a == 8;
}
function Snippet_BuildSnippetList(b) {
  ULSrLq:;
  var a = GlobalFormData.Get(b);
  a.snippetTree = [];
  Snippet_AddSnippetToList(a.snippetTree, g_objSnippetTree[b]);
}
function Snippet_AddSnippetToList(d, a) {
  ULSrLq:;
  d[a[0]] = a;
  var e = g_arrControlTypes[a[2]];
  a.ControlType = e;
  if (a[5] == 2 || a[5] == 7 || a[5] == 4) Snippet_AddSnippetToList(d, a[6][3]);
  else if (a[5] == 6)
    for (var c = a[6][0], b = 0; b < c.length; b++)
      Snippet_AddSnippetToList(d, c[b]);
  else if (a[2] == "Hyperlink" && !Hyperlink_HasDynamicDisplay(a))
    for (var c = Hyperlink_GetChildSnippets(a), b = 0; b < c.length; b++)
      Snippet_AddSnippetToList(d, c[b]);
}
function Expr() {}
function Expr_Evaluate(c, a, e) {
  ULSrLq:;
  var b,
    d = Expr.strFormId;
  Expr.strFormId = a.FormId;
  b = c(a, e);
  Expr.strFormId = d;
  return b;
}
function Expr_EvaluateEx(c, e, a, f) {
  ULSrLq:;
  var b,
    d = Expr.strFormId;
  Expr.strFormId = a.FormId;
  b = c(e, a, f);
  Expr.strFormId = d;
  return b;
}
function Expr_StripMultiplyBoundNodes(b) {
  ULSrLq:;
  for (var c = [], e = [], a = 0; a < b.length; a++) {
    var d = b[a]._nMultipleBindingClassId;
    if (d == -1) c.push(b[a]);
    else if (e[d] == null) {
      c.push(b[a]);
      e[d] = 1;
    }
  }
  return c;
}
Expr.vpath_SelectViewPathNoStrip = Expr_vpath_SelectViewPathNoStrip;
function Expr_vpath_SelectViewPathNoStrip(a, b) {
  ULSrLq:;
  return Expr.vpath_SelectViewPathInternal(a, b, false);
}
Expr.vpath_SelectViewPath = Expr_vpath_SelectViewPath;
function Expr_vpath_SelectViewPath(a, b) {
  ULSrLq:;
  return Expr.vpath_SelectViewPathInternal(a, b, true);
}
Expr.vpath_SelectViewPathInternal = Expr_vpath_SelectViewPathInternal;
function Expr_vpath_SelectViewPathInternal(n, j, m) {
  ULSrLq:;
  var a = [];
  a.push(n);
  for (var e = false, g = 0; g < j.length; g++) {
    var f = [],
      i = j[g],
      l = i[0],
      k = i[1];
    e = false;
    if (l == 1)
      for (var b = 0; b < a.length; b++) {
        var h = a[b]._objViewDataNodeParent;
        if (h != null) {
          if (h._nMultipleBindingClassId != -1) e = true;
          f.push(h);
        }
      }
    else if (l == 0)
      for (var b = 0; b < a.length; b++)
        for (var d = ViewDataNode_GetChildNodes(a[b]), c = 0; c < d.length; c++)
          if (k == -1 || k == d[c].SnippetElement[0])
            if (!d[c]._boolDeleted) {
              if (d[c]._nMultipleBindingClassId != -1) e = true;
              f.push(d[c]);
            }
    a = f;
  }
  if (e && m) a = Expr_StripMultiplyBoundNodes(a);
  return a;
}
Expr.vpath_Select = Expr_vpath_Select;
function Expr_vpath_Select(j, h) {
  ULSrLq:;
  for (var a = [], c = 0; c < h.length; c++)
    for (
      var i = Expr.vpath_SelectViewPathInternal(j, h[c], true), e = 0;
      e < i.length;
      e++
    )
      a.push(i[e]);
  for (var f = [], g = false, d = 0; d < a.length; d++) {
    var b = a[d]._nMultipleBindingClassId;
    if (b != -1)
      if (f[b] == null) f[b] = 1;
      else {
        g = true;
        break;
      }
  }
  if (g) a = Expr_StripMultiplyBoundNodes(a);
  return a;
}
Expr.Filter = Expr_Filter;
function Expr_Filter(e, d, g, f) {
  ULSrLq:;
  for (var c = [], b = Expr_Evaluate(g, e, d), a = 0; a < b.length; a++)
    Expr.Boolean(Expr_Evaluate(f, b[a], d)) && c.push(b[a]);
  return c;
}
Expr.vpath_RelativeSelect = Expr_vpath_RelativeSelect;
function Expr_vpath_RelativeSelect(c, f) {
  ULSrLq:;
  for (var e = [], a = 0; a < c.length; a++)
    for (var d = Expr.vpath_Select(c[a], f), b = 0; b < d.length; b++)
      e.push(d[b]);
  return e;
}
Expr._ParseFloat = Expr__ParseFloat;
function Expr__ParseFloat(a) {
  ULSrLq:;
  if (a == "") return NaN;
  else return parseFloat(a);
}
Expr.String = Expr_String;
function Expr_String(a) {
  ULSrLq:;
  var b = "",
    c = Util.GetDataType(a);
  switch (c) {
    case 3:
      if (a.length > 0) b = "" + ViewDataNode_GetDatum(a[0]).GetValue();
      break;
    case 2:
      b = a;
      break;
    case 1:
      b = a.toString();
      break;
    case 4:
      if (a) b = "true";
      else b = "false";
  }
  return b;
}
Expr._StringToNumber = Expr__StringToNumber;
function Expr__StringToNumber(a) {
  ULSrLq:;
  if (DoubleXsdDatatype.IsValid(a))
    if (a.charAt(0) == "+") return NaN;
    else return Expr._ParseFloat(a);
  else return NaN;
}
Expr.Number = Expr_Number;
function Expr_Number(b) {
  ULSrLq:;
  var a = NaN,
    c = Util.GetDataType(b);
  switch (c) {
    case 3:
      a = Expr._StringToNumber(Expr.String(b));
      break;
    case 2:
      a = Expr._StringToNumber(b);
      break;
    case 1:
      a = b;
      break;
    case 4:
      if (b) a = 1;
      else a = 0;
  }
  return a;
}
Expr.Boolean = Expr_Boolean;
function Expr_Boolean(a) {
  ULSrLq:;
  var b = false,
    c = Util.GetDataType(a);
  switch (c) {
    case 3:
      b = a.length > 0;
      break;
    case 2:
      b = a.length > 0;
      break;
    case 1:
      b = a != 0 && !isNaN(a);
      break;
    case 4:
      b = a;
  }
  return b;
}
Expr.xpath_Plus = Expr_xpath_Plus;
function Expr_xpath_Plus(b, a) {
  ULSrLq:;
  return Expr.Number(b) + Expr.Number(a);
}
Expr.xpath_Minus = Expr_xpath_Minus;
function Expr_xpath_Minus(b, a) {
  ULSrLq:;
  return Expr.Number(b) - Expr.Number(a);
}
Expr.xpath_Mul = Expr_xpath_Mul;
function Expr_xpath_Mul(b, a) {
  ULSrLq:;
  return Expr.Number(b) * Expr.Number(a);
}
Expr.xpath_Mod = Expr_xpath_Mod;
function Expr_xpath_Mod(b, a) {
  ULSrLq:;
  return Expr.Number(b) % Expr.Number(a);
}
Expr.xpath_Div = Expr_xpath_Div;
function Expr_xpath_Div(b, a) {
  ULSrLq:;
  return Expr.Number(b) / Expr.Number(a);
}
Expr._gt = Expr__gt;
function Expr__gt(b, a) {
  ULSrLq:;
  return Expr.Number(b) > Expr.Number(a);
}
Expr._lt = Expr__lt;
function Expr__lt(b, a) {
  ULSrLq:;
  return Expr.Number(b) < Expr.Number(a);
}
Expr._le = Expr__le;
function Expr__le(b, a) {
  ULSrLq:;
  return Expr.Number(b) <= Expr.Number(a);
}
Expr._ge = Expr__ge;
function Expr__ge(b, a) {
  ULSrLq:;
  return Expr.Number(b) >= Expr.Number(a);
}
Expr._getCastFunction = Expr__getCastFunction;
function Expr__getCastFunction(c) {
  ULSrLq:;
  var a = null,
    b = Util.GetDataType(c);
  switch (b) {
    case 2:
      a = Expr.String;
      break;
    case 1:
      a = Expr.Number;
      break;
    case 4:
      a = Expr.Boolean;
  }
  return a;
}
Expr._simpleEq = Expr__simpleEq;
function Expr__simpleEq(b, a) {
  ULSrLq:;
  return b == a;
}
Expr._simpleNe = Expr__simpleNe;
function Expr__simpleNe(b, a) {
  ULSrLq:;
  return b != a;
}
Expr._eq = Expr__eq;
function Expr__eq(a, c) {
  ULSrLq:;
  var b = Expr._getCastFunction(a);
  return a == b(c);
}
Expr._ne = Expr__ne;
function Expr__ne(a, c) {
  ULSrLq:;
  var b = Expr._getCastFunction(a);
  return a != b(c);
}
Expr._numberComparison = Expr__numberComparison;
function Expr__numberComparison(a, b, c) {
  ULSrLq:;
  var e = Util.GetDataType(a),
    d = Util.GetDataType(b);
  if (e == 3 && d == 3) {
    for (var f in a) {
      var g = Expr._FindNonNodeSetInNodeSet(
        ViewDataNode_GetDatum(a[f]).GetValue(),
        b,
        c,
        true
      );
      if (g) return true;
    }
    return false;
  } else if (e == 3) return Expr._FindNonNodeSetInNodeSet(b, a, c, false);
  else if (d == 3) return Expr._FindNonNodeSetInNodeSet(a, b, c, true);
  else return c(a, b);
}
Expr.xpath_Lt = Expr_xpath_Lt;
function Expr_xpath_Lt(b, a) {
  ULSrLq:;
  return Expr._numberComparison(b, a, Expr._lt);
}
Expr.xpath_Gt = Expr_xpath_Gt;
function Expr_xpath_Gt(b, a) {
  ULSrLq:;
  return Expr._numberComparison(b, a, Expr._gt);
}
Expr.xpath_Le = Expr_xpath_Le;
function Expr_xpath_Le(b, a) {
  ULSrLq:;
  return Expr._numberComparison(b, a, Expr._le);
}
Expr.xpath_Ge = Expr_xpath_Ge;
function Expr_xpath_Ge(b, a) {
  ULSrLq:;
  return Expr._numberComparison(b, a, Expr._ge);
}
Expr._FindNonNodeSetInNodeSet = Expr__FindNonNodeSetInNodeSet;
function Expr__FindNonNodeSetInNodeSet(d, a, c, f) {
  ULSrLq:;
  for (var e in a) {
    var b = false;
    if (f) b = c(d, ViewDataNode_GetDatum(a[e]).GetValue());
    else b = c(ViewDataNode_GetDatum(a[e]).GetValue(), d);
    if (b) return true;
  }
  return false;
}
Expr._eqComparison = Expr__eqComparison;
function Expr__eqComparison(a, b, f, e) {
  ULSrLq:;
  var d = Util.GetDataType(a),
    c = Util.GetDataType(b);
  if (d == 3 && c == 3) {
    for (var g in a) {
      var h = Expr._FindNonNodeSetInNodeSet(
        ViewDataNode_GetDatum(a[g]).GetValue(),
        b,
        e,
        true
      );
      if (h) return true;
    }
    return false;
  } else if (d == 3) return Expr._FindNonNodeSetInNodeSet(b, a, f, false);
  else if (c == 3) return Expr._FindNonNodeSetInNodeSet(a, b, f, true);
  else if (c == 4 || d == 4) return e(Expr.Boolean(a), Expr.Boolean(b));
  else if (c == 1 || d == 1) return e(Expr.Number(a), Expr.Number(b));
  else return e(Expr.String(a), Expr.String(b));
}
Expr.xpath_Eq = Expr_xpath_Eq;
function Expr_xpath_Eq(b, a) {
  ULSrLq:;
  return Expr._eqComparison(b, a, Expr._eq, Expr._simpleEq);
}
Expr.xpath_Ne = Expr_xpath_Ne;
function Expr_xpath_Ne(b, a) {
  ULSrLq:;
  return Expr._eqComparison(b, a, Expr._ne, Expr._simpleNe);
}
Expr.xpath_Or = Expr_xpath_Or;
function Expr_xpath_Or(b, a) {
  ULSrLq:;
  return Expr.Boolean(b) || Expr.Boolean(a);
}
Expr.xpath_And = Expr_xpath_And;
function Expr_xpath_And(b, a) {
  ULSrLq:;
  return Expr.Boolean(b) && Expr.Boolean(a);
}
Expr.xpath_Union = Expr_xpath_Union;
function Expr_xpath_Union(a, d) {
  ULSrLq:;
  var b = [];
  for (var h in a) b.push(a[h]);
  for (var f in d) {
    var c = d[f],
      e = true;
    for (var g in a)
      if (a[g] == c) {
        e = false;
        break;
      }
    e && b.push(c);
  }
  return b;
}
Expr.xpath_Count = Expr_xpath_Count;
function Expr_xpath_Count(a) {
  ULSrLq:;
  var b = Util.GetDataType(a);
  return a.length;
}
Expr.xpath_True = Expr_xpath_True;
function Expr_xpath_True() {
  ULSrLq:;
  return true;
}
Expr.xpath_False = Expr_xpath_False;
function Expr_xpath_False() {
  ULSrLq:;
  return false;
}
Expr.xpath_Not = Expr_xpath_Not;
function Expr_xpath_Not(a) {
  ULSrLq:;
  return !Expr.Boolean(a);
}
Expr.xpath_Contains = Expr_xpath_Contains;
function Expr_xpath_Contains(c, a) {
  ULSrLq:;
  var d = Expr.String(c),
    b = Expr.String(a);
  return d.indexOf(b) >= 0;
}
Expr.xpath_StartsWith = Expr_xpath_StartsWith;
function Expr_xpath_StartsWith(c, a) {
  ULSrLq:;
  var d = Expr.String(c),
    b = Expr.String(a);
  return d.indexOf(b) == 0;
}
Expr.xpath_SubstringBefore = Expr_xpath_SubstringBefore;
function Expr_xpath_SubstringBefore(e, c) {
  ULSrLq:;
  var a = Expr.String(e),
    d = Expr.String(c),
    b = a.indexOf(d);
  if (b >= 0) return a.substr(0, b);
  else return "";
}
Expr.xpath_SubstringAfter = Expr_xpath_SubstringAfter;
function Expr_xpath_SubstringAfter(e, d) {
  ULSrLq:;
  var b = Expr.String(e),
    a = Expr.String(d),
    c = b.indexOf(a);
  if (c >= 0) return b.substr(c + a.length);
  else return "";
}
Expr.xpath_Substring = Expr_xpath_Substring;
function Expr_xpath_Substring(e, f, d) {
  ULSrLq:;
  var c = Expr.String(e),
    a = Expr.xpath_Round(f) - 1;
  if (a < 0) a = 0;
  if (isNaN(a)) return "";
  if (typeof d == "undefined") return c.substr(a);
  else {
    var b = Expr.xpath_Round(d);
    if (b < 0) b = 0;
    if (isNaN(b)) return "";
    return c.substr(a, b);
  }
}
Expr.xpath_StringLength = Expr_xpath_StringLength;
function Expr_xpath_StringLength(a) {
  ULSrLq:;
  var b = Expr.String(a);
  return b.length;
}
Expr.xpath_Concat = Expr_xpath_Concat;
function Expr_xpath_Concat(a) {
  ULSrLq:;
  var b = [];
  for (var c in a) b.push(a[c]);
  return b.join("");
}
Expr.xpath_Floor = Expr_xpath_Floor;
function Expr_xpath_Floor(a) {
  ULSrLq:;
  return Math.floor(Expr.Number(a));
}
Expr.xpath_Ceiling = Expr_xpath_Ceiling;
function Expr_xpath_Ceiling(a) {
  ULSrLq:;
  return Math.ceil(Expr.Number(a));
}
Expr.xpath_Round = Expr_xpath_Round;
function Expr_xpath_Round(b) {
  ULSrLq:;
  var a = Expr.Number(b);
  return a > 0 ? Math.floor(a + 0.5) : Math.ceil(a - 0.5);
}
Expr.xpath_Sum = Expr_xpath_Sum;
function Expr_xpath_Sum(a) {
  ULSrLq:;
  var b = 0;
  for (var c in a) b += Expr.Number(ViewDataNode_GetDatum(a[c]).GetValue());
  return b;
}
Expr.msXsl_StringCompare = Expr_msXsl_StringCompare;
function Expr_msXsl_StringCompare(d, c) {
  ULSrLq:;
  var b = Expr.String(d),
    a = Expr.String(c);
  if (b > a) return 1;
  else if (b < a) return -1;
  else return 0;
}
Expr.xdMath_Avg = Expr_xdMath_Avg;
function Expr_xdMath_Avg(a) {
  ULSrLq:;
  var d = 0,
    c = 0;
  for (var e in a) {
    var b = ViewDataNode_GetDatum(a[e]).GetValue();
    if (b == "") continue;
    if (DoubleXsdDatatype.IsValid(b)) {
      d = d + Expr._ParseFloat(b);
      c++;
    } else return NaN;
  }
  if (c > 0) return d / c;
  else return Expr.String(a);
}
Expr.xdMath_Max = Expr_xdMath_Max;
function Expr_xdMath_Max(a) {
  ULSrLq:;
  var d = 0,
    c = 0;
  for (var f in a) {
    var b = ViewDataNode_GetDatum(a[f]).GetValue();
    if (b == "") continue;
    if (DoubleXsdDatatype.IsValid(b)) {
      var e = Expr._ParseFloat(b);
      if (c == 0 || e > d) d = e;
      c++;
    } else return NaN;
  }
  if (c > 0) return d;
  else return Expr.String(a);
}
Expr.xdMath_Min = Expr_xdMath_Min;
function Expr_xdMath_Min(a) {
  ULSrLq:;
  var d = 0,
    c = 0;
  for (var f in a) {
    var b = ViewDataNode_GetDatum(a[f]).GetValue();
    if (b == "") continue;
    if (DoubleXsdDatatype.IsValid(b)) {
      var e = Expr._ParseFloat(b);
      if (c == 0 || e < d) d = e;
      c++;
    } else return NaN;
  }
  if (c > 0) return d;
  else return Expr.String(a);
}
Expr.xdMath_Nz = Expr_xdMath_Nz;
function Expr_xdMath_Nz(c) {
  ULSrLq:;
  var a = [];
  for (var e in c) {
    var b = c[e],
      d = ViewDataNode_GetDatum(b).GetValue();
    if (d == "") a.push(ViewDataNode_GetZeroViewDataNode(Expr.strFormId));
    else a.push(b);
  }
  return a;
}
Expr.xdMath_Eval = Expr_xdMath_Eval;
function Expr_xdMath_Eval(b) {
  ULSrLq:;
  for (var e = [], j = b.length / 2, a = 0; a < j; a++)
    for (var d = b[a * 2], i = b[a * 2 + 1], c = 0; c < d.length; c++) {
      var h = d[c],
        g = Expr.String(i(h)),
        f = ViewDataNode_CreateUnparentedViewDataNode(Expr.strFormId, g);
      e.push(f);
    }
  return e;
}
Expr.xdEnvironment_IsBrowser = Expr_xdEnvironment_IsBrowser;
function Expr_xdEnvironment_IsBrowser() {
  ULSrLq:;
  return true;
}
Expr.xdEnvironment_IsMobile = Expr_xdEnvironment_IsMobile;
function Expr_xdEnvironment_IsMobile() {
  ULSrLq:;
  return CurrentFormData.IsMobile(_InfoPath.GetFirstControl().strFormId);
}
Expr._k_strLettersRanges =
  "\\u0041-\\u005A\\u0061-\\u007A\\u00AA-\\u00AA\\u00B5-\\u00B5\\u00BA-\\u00BA\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u021F\\u0222-\\u0233\\u0250-\\u02AD\\u02B0-\\u02B8\\u02BB-\\u02C1\\u02D0-\\u02D1\\u02E0-\\u02E4\\u02EE-\\u02EE\\u037A-\\u037A\\u0386-\\u0386\\u0388-\\u038A\\u038C-\\u038C\\u038E-\\u03A1\\u03A3-\\u03CE\\u03D0-\\u03D7\\u03DA-\\u03F3\\u0400-\\u0481\\u048C-\\u04C4\\u04C7-\\u04C8\\u04CB-\\u04CC\\u04D0-\\u04F5\\u04F8-\\u04F9\\u0531-\\u0556\\u0559-\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0621-\\u063A\\u0640-\\u064A\\u0671-\\u06D3\\u06D5-\\u06D5\\u06E5-\\u06E6\\u06FA-\\u06FC\\u0710-\\u0710\\u0712-\\u072C\\u0780-\\u07A5\\u0905-\\u0939\\u093D-\\u093D\\u0950-\\u0950\\u0958-\\u0961\\u0985-\\u098C\\u098F-\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2-\\u09B2\\u09B6-\\u09B9\\u09DC-\\u09DD\\u09DF-\\u09E1\\u09F0-\\u09F1\\u0A05-\\u0A0A\\u0A0F-\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32-\\u0A33\\u0A35-\\u0A36\\u0A38-\\u0A39\\u0A59-\\u0A5C\\u0A5E-\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8B\\u0A8D-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2-\\u0AB3\\u0AB5-\\u0AB9\\u0ABD-\\u0ABD\\u0AD0-\\u0AD0\\u0AE0-\\u0AE0\\u0B05-\\u0B0C\\u0B0F-\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32-\\u0B33\\u0B36-\\u0B39\\u0B3D-\\u0B3D\\u0B5C-\\u0B5D\\u0B5F-\\u0B61\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99-\\u0B9A\\u0B9C-\\u0B9C\\u0B9E-\\u0B9F\\u0BA3-\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB5\\u0BB7-\\u0BB9\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C33\\u0C35-\\u0C39\\u0C60-\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CDE-\\u0CDE\\u0CE0-\\u0CE1\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D28\\u0D2A-\\u0D39\\u0D60-\\u0D61\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD-\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32-\\u0E33\\u0E40-\\u0E46\\u0E81-\\u0E82\\u0E84-\\u0E84\\u0E87-\\u0E88\\u0E8A-\\u0E8A\\u0E8D-\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5-\\u0EA5\\u0EA7-\\u0EA7\\u0EAA-\\u0EAB\\u0EAD-\\u0EB0\\u0EB2-\\u0EB3\\u0EBD-\\u0EBD\\u0EC0-\\u0EC4\\u0EC6-\\u0EC6\\u0EDC-\\u0EDD\\u0F00-\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6A\\u0F88-\\u0F8B\\u1000-\\u1021\\u1023-\\u1027\\u1029-\\u102A\\u1050-\\u1055\\u10A0-\\u10C5\\u10D0-\\u10F6\\u1100-\\u1159\\u115F-\\u11A2\\u11A8-\\u11F9\\u1200-\\u1206\\u1208-\\u1246\\u1248-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258-\\u1258\\u125A-\\u125D\\u1260-\\u1286\\u1288-\\u1288\\u128A-\\u128D\\u1290-\\u12AE\\u12B0-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0-\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12CE\\u12D0-\\u12D6\\u12D8-\\u12EE\\u12F0-\\u130E\\u1310-\\u1310\\u1312-\\u1315\\u1318-\\u131E\\u1320-\\u1346\\u1348-\\u135A\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u1676\\u1681-\\u169A\\u16A0-\\u16EA\\u1780-\\u17B3\\u1820-\\u1877\\u1880-\\u18A8\\u1E00-\\u1E9B\\u1EA0-\\u1EF9\\u1F00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59-\\u1F59\\u1F5B-\\u1F5B\\u1F5D-\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE-\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u207F-\\u207F\\u2102-\\u2102\\u2107-\\u2107\\u210A-\\u2113\\u2115-\\u2115\\u2119-\\u211D\\u2124-\\u2124\\u2126-\\u2126\\u2128-\\u2128\\u212A-\\u212D\\u212F-\\u2131\\u2133-\\u2139\\u3005-\\u3006\\u3031-\\u3035\\u3041-\\u3094\\u309D-\\u309E\\u30A1-\\u30FA\\u30FC-\\u30FE\\u3105-\\u312C\\u3131-\\u318E\\u31A0-\\u31B7\\u3400-\\u3400\\u4DB5-\\u4DB5\\u4E00-\\u4E00\\u9FA5-\\u9FA5\\uA000-\\uA48C\\uAC00-\\uAC00\\uD7A3-\\uD7A3\\uF900-\\uFA2D\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D-\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E-\\uFB3E\\uFB40-\\uFB41\\uFB43-\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE72\\uFE74-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC";
Expr._k_strNotLettersRanges =
  "\\u0000-\\u0040\\u005B-\\u0060\\u007B-\\u00A9\\u00AB-\\u00B4\\u00B6-\\u00B9\\u00BB-\\u00BF\\u00D7-\\u00D7\\u00F7-\\u00F7\\u0220-\\u0221\\u0234-\\u024F\\u02AE-\\u02AF\\u02B9-\\u02BA\\u02C2-\\u02CF\\u02D2-\\u02DF\\u02E5-\\u02ED\\u02EF-\\u0379\\u037B-\\u0385\\u0387-\\u0387\\u038B-\\u038B\\u038D-\\u038D\\u03A2-\\u03A2\\u03CF-\\u03CF\\u03D8-\\u03D9\\u03F4-\\u03FF\\u0482-\\u048B\\u04C5-\\u04C6\\u04C9-\\u04CA\\u04CD-\\u04CF\\u04F6-\\u04F7\\u04FA-\\u0530\\u0557-\\u0558\\u055A-\\u0560\\u0588-\\u05CF\\u05EB-\\u05EF\\u05F3-\\u0620\\u063B-\\u063F\\u064B-\\u0670\\u06D4-\\u06D4\\u06D6-\\u06E4\\u06E7-\\u06F9\\u06FD-\\u070F\\u0711-\\u0711\\u072D-\\u077F\\u07A6-\\u0904\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962-\\u0984\\u098D-\\u098E\\u0991-\\u0992\\u09A9-\\u09A9\\u09B1-\\u09B1\\u09B3-\\u09B5\\u09BA-\\u09DB\\u09DE-\\u09DE\\u09E2-\\u09EF\\u09F2-\\u0A04\\u0A0B-\\u0A0E\\u0A11-\\u0A12\\u0A29-\\u0A29\\u0A31-\\u0A31\\u0A34-\\u0A34\\u0A37-\\u0A37\\u0A3A-\\u0A58\\u0A5D-\\u0A5D\\u0A5F-\\u0A71\\u0A75-\\u0A84\\u0A8C-\\u0A8C\\u0A8E-\\u0A8E\\u0A92-\\u0A92\\u0AA9-\\u0AA9\\u0AB1-\\u0AB1\\u0AB4-\\u0AB4\\u0ABA-\\u0ABC\\u0ABE-\\u0ACF\\u0AD1-\\u0ADF\\u0AE1-\\u0B04\\u0B0D-\\u0B0E\\u0B11-\\u0B12\\u0B29-\\u0B29\\u0B31-\\u0B31\\u0B34-\\u0B35\\u0B3A-\\u0B3C\\u0B3E-\\u0B5B\\u0B5E-\\u0B5E\\u0B62-\\u0B84\\u0B8B-\\u0B8D\\u0B91-\\u0B91\\u0B96-\\u0B98\\u0B9B-\\u0B9B\\u0B9D-\\u0B9D\\u0BA0-\\u0BA2\\u0BA5-\\u0BA7\\u0BAB-\\u0BAD\\u0BB6-\\u0BB6\\u0BBA-\\u0C04\\u0C0D-\\u0C0D\\u0C11-\\u0C11\\u0C29-\\u0C29\\u0C34-\\u0C34\\u0C3A-\\u0C5F\\u0C62-\\u0C84\\u0C8D-\\u0C8D\\u0C91-\\u0C91\\u0CA9-\\u0CA9\\u0CB4-\\u0CB4\\u0CBA-\\u0CDD\\u0CDF-\\u0CDF\\u0CE2-\\u0D04\\u0D0D-\\u0D0D\\u0D11-\\u0D11\\u0D29-\\u0D29\\u0D3A-\\u0D5F\\u0D62-\\u0D84\\u0D97-\\u0D99\\u0DB2-\\u0DB2\\u0DBC-\\u0DBC\\u0DBE-\\u0DBF\\u0DC7-\\u0E00\\u0E31-\\u0E31\\u0E34-\\u0E3F\\u0E47-\\u0E80\\u0E83-\\u0E83\\u0E85-\\u0E86\\u0E89-\\u0E89\\u0E8B-\\u0E8C\\u0E8E-\\u0E93\\u0E98-\\u0E98\\u0EA0-\\u0EA0\\u0EA4-\\u0EA4\\u0EA6-\\u0EA6\\u0EA8-\\u0EA9\\u0EAC-\\u0EAC\\u0EB1-\\u0EB1\\u0EB4-\\u0EBC\\u0EBE-\\u0EBF\\u0EC5-\\u0EC5\\u0EC7-\\u0EDB\\u0EDE-\\u0EFF\\u0F01-\\u0F3F\\u0F48-\\u0F48\\u0F6B-\\u0F87\\u0F8C-\\u0FFF\\u1022-\\u1022\\u1028-\\u1028\\u102B-\\u104F\\u1056-\\u109F\\u10C6-\\u10CF\\u10F7-\\u10FF\\u115A-\\u115E\\u11A3-\\u11A7\\u11FA-\\u11FF\\u1207-\\u1207\\u1247-\\u1247\\u1249-\\u1249\\u124E-\\u124F\\u1257-\\u1257\\u1259-\\u1259\\u125E-\\u125F\\u1287-\\u1287\\u1289-\\u1289\\u128E-\\u128F\\u12AF-\\u12AF\\u12B1-\\u12B1\\u12B6-\\u12B7\\u12BF-\\u12BF\\u12C1-\\u12C1\\u12C6-\\u12C7\\u12CF-\\u12CF\\u12D7-\\u12D7\\u12EF-\\u12EF\\u130F-\\u130F\\u1311-\\u1311\\u1316-\\u1317\\u131F-\\u131F\\u1347-\\u1347\\u135B-\\u139F\\u13F5-\\u1400\\u166D-\\u166E\\u1677-\\u1680\\u169B-\\u169F\\u16EB-\\u177F\\u17B4-\\u181F\\u1878-\\u187F\\u18A9-\\u1DFF\\u1E9C-\\u1E9F\\u1EFA-\\u1EFF\\u1F16-\\u1F17\\u1F1E-\\u1F1F\\u1F46-\\u1F47\\u1F4E-\\u1F4F\\u1F58-\\u1F58\\u1F5A-\\u1F5A\\u1F5C-\\u1F5C\\u1F5E-\\u1F5E\\u1F7E-\\u1F7F\\u1FB5-\\u1FB5\\u1FBD-\\u1FBD\\u1FBF-\\u1FC1\\u1FC5-\\u1FC5\\u1FCD-\\u1FCF\\u1FD4-\\u1FD5\\u1FDC-\\u1FDF\\u1FED-\\u1FF1\\u1FF5-\\u1FF5\\u1FFD-\\u207E\\u2080-\\u2101\\u2103-\\u2106\\u2108-\\u2109\\u2114-\\u2114\\u2116-\\u2118\\u211E-\\u2123\\u2125-\\u2125\\u2127-\\u2127\\u2129-\\u2129\\u212E-\\u212E\\u2132-\\u2132\\u213A-\\u3004\\u3007-\\u3030\\u3036-\\u3040\\u3095-\\u309C\\u309F-\\u30A0\\u30FB-\\u30FB\\u30FF-\\u3104\\u312D-\\u3130\\u318F-\\u319F\\u31B8-\\u33FF\\u3401-\\u4DB4\\u4DB6-\\u4DFF\\u4E01-\\u9FA4\\u9FA6-\\u9FFF\\uA48D-\\uABFF\\uAC01-\\uD7A2\\uD7A4-\\uF8FF\\uFA2E-\\uFAFF\\uFB07-\\uFB12\\uFB18-\\uFB1C\\uFB1E-\\uFB1E\\uFB29-\\uFB29\\uFB37-\\uFB37\\uFB3D-\\uFB3D\\uFB3F-\\uFB3F\\uFB42-\\uFB42\\uFB45-\\uFB45\\uFBB2-\\uFBD2\\uFD3E-\\uFD4F\\uFD90-\\uFD91\\uFDC8-\\uFDEF\\uFDFC-\\uFE6F\\uFE73-\\uFE73\\uFE75-\\uFE75\\uFEFD-\\uFF20\\uFF3B-\\uFF40\\uFF5B-\\uFF65\\uFFBF-\\uFFC1\\uFFC8-\\uFFC9\\uFFD0-\\uFFD1\\uFFD8-\\uFFD9\\uFFDE-\\uFFFF";
Expr._TranslateCategoriesForMatchPattern = Expr__TranslateCategoriesForMatchPattern;
function Expr__TranslateCategoriesForMatchPattern(a) {
  ULSrLq:;
  for (var c = false, b = 0; b < a.length; b++)
    if (a.charAt(b) == "\\") {
      b++;
      if (b < a.length && (a.charAt(b) == "p" || a.charAt(b) == "P"))
        if (b + 1 < a.length && a.substr(b + 1, "{L}".length) == "{L}") {
          var g = a.charAt(b) == "P",
            f = a.length - (b + 1 + "{L}".length),
            d = a.substr(0, b - 1),
            e = a.substr(a.length - f);
          if (!c) {
            d = d + "[";
            e = "]" + e;
          }
          a =
            d +
            (g ? Expr._k_strNotLettersRanges : Expr._k_strLettersRanges) +
            e;
          b = a.length - f - 1;
        }
    } else if (!c && a.charAt(b) == "[") {
      c = true;
      if (b + 1 < a.length && a.charAt(b + 1) == "^") b++;
      if (b + 1 < a.length && a.charAt(b + 1) == "]") b++;
    } else if (a.charAt(b) == "]") c = false;
  return a;
}
Expr.xdUtil_Match = Expr_xdUtil_Match;
function Expr_xdUtil_Match(h, d) {
  ULSrLq:;
  var a, c, f, g;
  d = Expr._TranslateCategoriesForMatchPattern(d);
  a = [];
  c = false;
  for (var b = 0; b < d.length; b++) {
    var e;
    e = d.charAt(b);
    switch (e) {
      case "\\":
        a.push("\\");
        b++;
        if (b < d.length) {
          e = d.charAt(b);
          a.push(e);
        }
        break;
      case "[":
        if (!c) c = true;
        a.push("[");
        break;
      case "]":
        if (c) c = false;
        a.push("]");
        break;
      case "$":
        if (b == d.length - 1) break;
        !c && a.push("\\");
        a.push("$");
        break;
      case "^":
        if (b == 0) break;
        !c && a.push("\\");
        a.push("^");
        break;
      default:
        a.push(e);
    }
  }
  f = "^" + a.join("") + "$";
  g = new RegExp(f);
  return g.test(h);
}
function Expr_GetDateTimeInServerTimezone(f) {
  ULSrLq:;
  var a = new Date(),
    e = a.getTime(),
    c = CurrentFormData.ServerTimeZone(f) * 60 * 1e3,
    b = -a.getTimezoneOffset() * 60 * 1e3,
    d = e - b + c;
  return DateUtils.DateTimeFromJScriptDate(new Date(d), false, 0);
}
function Expr_FormatDateInServerTimezone(b, f) {
  ULSrLq:;
  var e = Expr_GetDateTimeInServerTimezone(b),
    a = BaseControl._objDateFormatting,
    c = DateFormatting_DefaultCultureObject(b);
  a.Reinit(b, [c, a.k_intModeDate + "," + c.formatShortDate]);
  var d = a.UnformatFromDateTime(
    e,
    f ? a.k_intModeDate : a.k_intModeDateTime,
    ""
  );
  return d;
}
Expr.xdDate_Now = Expr_xdDate_Now;
function Expr_xdDate_Now(a) {
  ULSrLq:;
  switch (a) {
    case 1:
      return Expr_FormatDateInServerTimezone(Expr.strFormId, false);
    case 0:
      return CurrentFormData.Now(Expr.strFormId);
    default:
      return "";
  }
}
Expr.xdDate_Today = Expr_xdDate_Today;
function Expr_xdDate_Today(a) {
  ULSrLq:;
  switch (a) {
    case 1:
      return Expr_FormatDateInServerTimezone(Expr.strFormId, true);
    case 0:
      return CurrentFormData.Today(Expr.strFormId);
    default:
      return "";
  }
}
Expr.xdDate_AddDays = Expr_xdDate_AddDays;
function Expr_xdDate_AddDays(l, m) {
  ULSrLq:;
  var a, b;
  if (Util.GetDataType(l) == 3) {
    var o = ViewDataNode_GetDatum(l[0]);
    a = Expr.String(o.GetValue());
  } else a = Expr.String(l);
  if (Util.GetDataType(m) == 3) {
    var p = ViewDataNode_GetDatum(m[0]);
    b = Expr.String(p.GetValue());
  } else b = Expr.String(m);
  if (a == "" || b == "") return "";
  if (b.indexOf(".") != -1 || b.indexOf(",") != -1) return "#ERR?";
  var c = a.split("T");
  if (c.length == 2) a = c[0];
  var f = a.split("-"),
    n = Number(b);
  if (f.length != 3 || isNaN(n)) return "#ERR?";
  var q = Number(f[1]) - 1,
    r = Number(f[2]) + n,
    g = new Date();
  g.setFullYear(f[0], q, r);
  var i = Number(g.getMonth()) + 1,
    e;
  if (i < 10) e = "0" + String(i);
  else e = String(i);
  var j = g.getDate(),
    a;
  if (j < 10) a = "0" + String(j);
  else a = String(j);
  var k = g.getFullYear(),
    h;
  if (k < 100) h = String("19" + k);
  else h = String(k);
  if (isNaN(h) || isNaN(e) || isNaN(a)) return "#ERR?";
  else {
    var d;
    d = h + "-" + e + "-" + a;
    if (c.length == 2) d = d.concat("T" + c[1]);
    return d;
  }
}
Expr.xdDate_AddSeconds = Expr_xdDate_AddSeconds;
function Expr_xdDate_AddSeconds(r, s) {
  ULSrLq:;
  var e, b;
  if (Util.GetDataType(r) == 3) {
    var y = ViewDataNode_GetDatum(r[0]);
    e = Expr.String(y.GetValue());
  } else e = Expr.String(r);
  if (Util.GetDataType(s) == 3) {
    var w = ViewDataNode_GetDatum(s[0]);
    b = Expr.String(w.GetValue());
  } else b = Expr.String(s);
  if (e == "" || b == "") return "";
  if (b.indexOf(".") != -1 || b.indexOf(",") != -1) return "#ERR?";
  var h = Number(b);
  if (isNaN(h)) return "#ERR?";
  var d = "",
    a = new Date(),
    f = e.split("T");
  if (f.length == 2) {
    d = f[0];
    e = f[1];
  } else if (f[0].indexOf("-") != -1 || f[0].indexOf("/") != -1) {
    d = f[0];
    e = "00:00:00";
  } else e = f[0];
  var c = d.split("-");
  if (c.length == 3) {
    var u = Number(c[1]) - 1,
      v = Number(c[2]);
    a.setFullYear(c[0], u, v);
  } else {
    c = d.split("/");
    if (c.length == 3) {
      var u = Number(c[0]) - 1,
        v = Number(c[1]);
      a.setFullYear(c[2], u, v);
    }
  }
  var k = e.split(":");
  if (k.length == 3) {
    a.setHours(k[0]);
    a.setMinutes(k[1]);
    a.setSeconds(k[2]);
  }
  a.setSeconds(Number(a.getSeconds()) + h);
  var o = Number(a.getMonth()) + 1,
    j;
  if (o < 10) j = "0" + String(o);
  else j = String(o);
  var p = a.getDate(),
    d;
  if (p < 10) d = "0" + String(p);
  else d = String(p);
  var q = a.getFullYear(),
    l;
  if (q < 100) l = "19" + q;
  else l = q;
  var x = l + "-" + j + "-" + d,
    n = a.getHours(),
    i;
  if (n < 10) i = "0" + n;
  else i = n;
  var m = a.getMinutes(),
    g;
  if (m < 10) g = "0" + m;
  else g = m;
  var h = a.getSeconds(),
    b;
  if (h < 10) b = "0" + h;
  else b = h;
  var t = i + ":" + g + ":" + b,
    z;
  if (c.length > 1) {
    if (isNaN(l) || isNaN(j) || isNaN(d) || isNaN(i) || isNaN(g) || isNaN(b))
      return "#ERR?";
    return x + "T" + t;
  } else {
    if (isNaN(i) || isNaN(g) || isNaN(b)) return "#ERR?";
    return t;
  }
}
Expr.xdUser_GetUserName = Expr_xdUser_GetUserName;
function Expr_xdUser_GetUserName() {
  ULSrLq:;
  return CurrentFormData.UserName(Expr.strFormId);
}
function Expr_xdServerInfo_GetSharePointServerRootUrl() {
  ULSrLq:;
  return Util_EnsureTrailingSlash(CurrentFormData.ServerUrl(Expr.strFormId));
}
function Expr_xdServerInfo_GetSharePointSiteUrl() {
  ULSrLq:;
  return Util_EnsureTrailingSlash(CurrentFormData.GetWebUrl(Expr.strFormId));
}
function Expr_xdServerInfo_GetSharePointListUrl() {
  ULSrLq:;
  return Util_EnsureTrailingSlash(CurrentFormData_ListUrl(Expr.strFormId));
}
function Expr_xdServerInfo_GetSharePointSiteCollectionUrl() {
  ULSrLq:;
  return Util_EnsureTrailingSlash(CurrentFormData.SiteUrl(Expr.strFormId));
}
function LeafDatum() {
  ULSrLq:;
  if (!(LeafDatum.prototype instanceof LeafDatumTraits)) {
    LeafDatum.prototype = new LeafDatumTraits();
    LeafDatum.prototype.constructor = LeafDatum;
    return new LeafDatum();
  }
  this._objDataInformation = null;
  this._strValue = null;
  this._strErrorMessage = null;
  this._strDetailedErrorMessage = null;
  this._boolIsValid = true;
  this._boolIsSigned = false;
  this._boolModifiedOnClient = false;
  this._changedOnClient = false;
}
function LeafDatumTraits() {
  ULSrLq:;
  this.GetDataInformation = function () {
    ULSrLq:;
    return this._objDataInformation;
  };
  this.Initialize = function (a, d, e) {
    ULSrLq:;
    var f = a[0],
      c = a[1],
      b = a[2];
    this._objDataInformation = d;
    this.SetValueInternal(f, false);
    if (Util.IsNullOrEmptyString(c) && Util.IsNullOrEmptyString(b))
      this.ClearError();
    else this.SetError(c, b);
    this._boolDirty = false;
    this._boolIsSigned = e;
    this._boolModifiedOnClient = false;
  };
  this.GetValue = function () {
    ULSrLq:;
    return this._strValue;
  };
  this.SetValue = function (a) {
    ULSrLq:;
    this.SetValueInternal(a, true);
  };
  this.SetValueInternal = function (b, a) {
    ULSrLq:;
    if (!this._boolIsSigned) {
      this._boolModifiedOnClient = true;
      this._strValue = b;
      this.ClearError();
      this._Dirty();
      if (a) this._changedOnClient = true;
    }
  };
  this.IsValid = function () {
    ULSrLq:;
    return this._boolIsValid;
  };
  this.ModifiedOnClient = function () {
    ULSrLq:;
    return this._boolModifiedOnClient;
  };
  this.GetErrorMessage = function () {
    ULSrLq:;
    return this._strErrorMessage;
  };
  this.GetDetailedErrorMessage = function () {
    ULSrLq:;
    return this._strDetailedErrorMessage;
  };
  this.SetError = function (b, a) {
    ULSrLq:;
    this._boolIsValid = false;
    this._strErrorMessage = b == null ? "" : b;
    this._strDetailedErrorMessage = a == null ? "" : a;
  };
  this.ClearError = function () {
    ULSrLq:;
    this._boolIsValid = true;
  };
  this._Dirty = function () {
    ULSrLq:;
    this._boolDirty = true;
  };
  this.UnDirty = function () {
    ULSrLq:;
    this._boolDirty = false;
  };
  this.IsDirty = function () {
    ULSrLq:;
    return this._boolDirty;
  };
  this.toString = function () {
    ULSrLq:;
    return this._strValue;
  };
  this.ValidateDataType = a;
  function a() {
    ULSrLq:;
    var f = this.GetDataInformation(),
      b = DataInformation.GetDataType(f),
      g = DataInformation.GetFacets(f),
      c = this.GetValue();
    if (c == "") c = b.GetDefaultValue();
    var d = b.IsValid(c),
      a = null;
    if (!d) a = b.GetErrorMessages();
    else if (!(Util.IsNullOrEmptyString(c) && b.IsNillable())) {
      d = g.IsValid(b, c);
      if (!d) a = g.GetErrorMessages(b);
    }
    if (!d) {
      if (a != null)
        for (var e = 0; e < a.length; e++)
          if (Util.IsNonEmptyString(a[e]))
            a[e] = Util.UnescapeStringEx(a[e], true);
      this.SetError(a[0], a[1]);
    }
    return d;
  }
}
function IsValueValidForDatumBaseType(c, d) {
  ULSrLq:;
  var a = c.GetDataInformation(),
    b = DataInformation.GetDataType(a);
  return b.IsValid(d);
}
function DataInformation() {}
DataInformation.GetDataType = function (a) {
  ULSrLq:;
  return new XsdDatatype(a[0][1]);
};
DataInformation.GetFacets = function (a) {
  ULSrLq:;
  return new XsdFacets(a[0][2]);
};
DataInformation.IsValidDataInformation = function (a) {
  ULSrLq:;
  if (a == null || Util.GetDataType(a) != 3 || a.length != 2) return false;
  if (
    Util.GetDataType(a[0]) != 3 ||
    Util.GetDataType(a[0][0]) != 4 ||
    Util.GetDataType(a[0][1]) != 3 ||
    Util.GetDataType(a[0][2]) != 3
  )
    return false;
  if (Util.GetDataType(a[1]) != 3 || a[1].length != 3) return false;
  return true;
};
Toolbar.arrLastFocusedFormControl = null;
function Toolbar() {}
Toolbar.ExecuteAction = Toolbar_ExecuteAction;
function Toolbar_ExecuteAction(b, a, c) {
  ULSrLq:;
  return Toolbar_ExecuteActionEx(b, a, c, false);
}
function Toolbar_ExecuteActionEx(a, e, f, b) {
  ULSrLq:;
  if (!b && !Toolbar_CanHandleEvents(a)) return false;
  var c = GlobalFormData.Get(a),
    d = c.objFocusedToolbarControl;
  Dialog.objClientSideData = d;
  switch (e) {
    case "refresh":
      document.forms[0] != null && View_SubmitForm(a, false, 24, 0, false);
      break;
    case "submit":
    case "submitListItem":
      View.PreSubmitActions(a) &&
        EventLog_Add(a, 9, null, "", "", "", true, b, false, 9, 0);
      break;
    case "save":
      View.PreSaveActions(a) &&
        EventLog_Add(a, 14, null, "", false, false, true, b, false, 10, 0);
      break;
    case "saveAs":
      View.PreSaveActions(a) &&
        EventLog_Add(a, 14, null, "", true, false, true, b, false, 11, 0);
      break;
    case "close":
    case "closeListItem":
    case "listDisplayCloseItem":
      Toolbar_Close(a);
      break;
    case "print":
      Print.Show(a);
      break;
    case "alertMe":
      Toolbar_HandleAlertMe(a);
      break;
    case "deleteItem":
    case "listDisplayDeleteItem":
      Toolbar_HandleDeleteItem(a);
      break;
    case "editItem":
      Toolbar_HandleEditItem(a);
      break;
    case "newItem":
      Toolbar_HandleNewItem(a);
  }
  Util.StopEventProprogation(f);
  return false;
}
Toolbar.Show = Toolbar_Show;
function Toolbar_Show(c, d) {
  ULSrLq:;
  var b = d ? "block" : "none",
    a = document.getElementById(c + "__toolbar_top");
  if (a != null) a.style.display = b;
  a = document.getElementById(c + "__toolbar_bottom");
  if (a != null) a.style.display = b;
}
Toolbar.RefreshViewDropdown = Toolbar_RefreshViewDropdown;
function Toolbar_RefreshViewDropdown(a) {
  ULSrLq:;
  var e = CurrentFormData.ViewDataTree(a).SnippetElement,
    d = View.GetName(e),
    c = document.getElementById(a + "__toolbar_top_viewdropdown");
  c != null && Util.SetListValue(c, d, false);
  var b = document.getElementById(a + "__toolbar_bottom_viewdropdown");
  b != null && Util.SetListValue(b, d, false);
}
Toolbar.EnableViewDropdown = Toolbar_EnableViewDropdown;
function Toolbar_EnableViewDropdown(d) {
  ULSrLq:;
  for (var a = 0; a < _InfoPath.arrForms.length; a++)
    if (_InfoPath.arrForms[a] != null) {
      var c = document.getElementById(
        _InfoPath.arrForms[a].strFormId + "__toolbar_top_viewdropdown"
      );
      if (c != null) c.disabled = !d;
      var b = document.getElementById(
        _InfoPath.arrForms[a].strFormId + "__toolbar_bottom_viewdropdown"
      );
      if (b != null) b.disabled = !d;
    }
}
Toolbar.GetWidth = Toolbar_GetWidth;
function Toolbar_GetWidth(b) {
  ULSrLq:;
  var a = Toolbar_GetDefaultToolbar(b);
  if (a != null && a.offsetWidth != null) return a.offsetWidth + "px";
  else return "542px";
}
function Toolbar_GetDefaultToolbar(b) {
  ULSrLq:;
  var a = document.getElementById(b + "__toolbar_top");
  if (a == null) a = document.getElementById(b + "__toolbar_bottom");
  return a;
}
Toolbar.HandleViewDropdown = Toolbar_HandleViewDropdown;
function Toolbar_HandleViewDropdown(a, c) {
  ULSrLq:;
  var b = GlobalFormData.Get(a);
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(a) != 1
    ) ||
    b.intKeyboardViewSwitchOldIndex != -1
  )
    return;
  Toolbar_HandleViewChange(a, c.value);
}
function Toolbar_HandleViewChange(b, a) {
  ULSrLq:;
  var c = CurrentFormData.ViewDataTree(b).SnippetElement,
    d = View.GetName(c);
  a != d && EventLog_Add(b, 11, null, "", "", a, true, false, true, 14, 0);
}
Toolbar.OnFocus = Toolbar_OnFocus;
function Toolbar_OnFocus(c, b) {
  ULSrLq:;
  if (Dialog.boolModalDialogForFocusRestorationPresent) {
    Dialog_MaintainModalDialog();
    return;
  }
  var a = GlobalFormData.Get(c);
  a.objFocusedToolbarControl = b;
  SelectionService.Select(null);
}
Toolbar.OnBlur = Toolbar_OnBlur;
function Toolbar_OnBlur(b) {
  ULSrLq:;
  var a = GlobalFormData.Get(b);
  a.objFocusedToolbarControl = null;
}
Toolbar.ViewsOnBlur = Toolbar_ViewsOnBlur;
function Toolbar_ViewsOnBlur(c, b) {
  ULSrLq:;
  var a = GlobalFormData.Get(c);
  if (a.intKeyboardViewSwitchOldIndex != -1) {
    b.selectedIndex = a.intKeyboardViewSwitchOldIndex;
    a.intKeyboardViewSwitchOldIndex = -1;
  }
  Toolbar.OnBlur(c, b);
}
Toolbar.ViewsOnKeyDown = Toolbar_ViewsOnKeyDown;
function Toolbar_ViewsOnKeyDown(b, c) {
  ULSrLq:;
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(b) != 1
    )
  )
    return;
  var a = GlobalFormData.Get(b),
    d = KeyboardService.GetVirtualKey(c);
  switch (d) {
    case 1:
      a.intKeyboardViewSwitchOldIndex = -1;
      Toolbar.HandleViewDropdown(b, a.objFocusedToolbarControl);
      break;
    case 7:
    case 8:
      if (a.intKeyboardViewSwitchOldIndex == -1)
        a.intKeyboardViewSwitchOldIndex =
          a.objFocusedToolbarControl.selectedIndex;
    default:
      return KeyboardService.OnKeyDown(c);
  }
}
Toolbar.Focus = Toolbar_Focus;
function Toolbar_Focus(d, c) {
  ULSrLq:;
  var a = document.getElementById(c),
    b = GlobalFormData.Get(d);
  b.objFocusedToolbarControl = a;
  SelectionService.Select(null);
  a.focus();
}
function Toolbar_FocusDefaultControl(c) {
  ULSrLq:;
  var b = Toolbar_GetDefaultToolbar(c);
  if (b != null) {
    var a = document.getElementById(b.id + "_button0");
    a != null && Toolbar_Focus(c, a.id);
  }
}
function Toolbar_HandleAlertMe(b) {
  ULSrLq:;
  var d = CurrentFormData_ListItemQueryParameter(b),
    a = [];
  a.push(CurrentFormData_GetWebUrl(b));
  a.push("/_layouts/SubNew.aspx?List=");
  a.push(d);
  View_IsPopUI() && a.push("&IsDlg=1");
  a.push("&Source=");
  a.push(Toolbar_GetSourceUrl());
  var c = a.join("");
  Util_Navigate(c);
}
function Toolbar_HandleNewItem(b) {
  ULSrLq:;
  var d = CurrentFormData_ListItemQueryParameter(b),
    a = [];
  a.push(CurrentFormData_GetWebUrl(b));
  a.push("/_layouts/ListForm.aspx?ListId=");
  a.push(d);
  a.push("&PageType=8");
  a.push("&Source=");
  a.push(Toolbar_GetSourceUrl());
  var c = a.join("");
  Util_Navigate(c);
}
function Toolbar_HandleDeleteItem(a) {
  ULSrLq:;
  Util_GetRecycleBinEnabledFlag(a, function (b) {
    ULSrLq:;
    Toolbar_HandleDeleteItemCallback(b, a);
  });
}
function Toolbar_HandleDeleteItemCallback(b, a) {
  ULSrLq:;
  if (a != null)
    if (Toolbar_DeleteItemConfirmation(b))
      if (View_GetTemplateType(a) != 1 && !View_IsPopUI())
        EventLog_Add(a, 34, null, "1", "", "", true, true, true, 12, 0);
      else
        try {
          var c = function () {
            ULSrLq:;
            Toolbar_DeleteItemAsync(a, b);
          };
          if (typeof SP != "undefined")
            EnsureScript("SP.js", typeof SP.ClientContext, c);
          else EnsureScript("SP.js", typeof SP, c);
        } catch (d) {
          Toolbar_OnItemDeleted(a, false);
        }
}
function Toolbar_DeleteItemConfirmation(a) {
  ULSrLq:;
  return UserMessages_ShowConfirmMessage(
    a ? L_STSRecycleConfirm_Text : L_STSDelConfirm_Text,
    false
  );
}
function Toolbar_DeleteItemAsync(a, d) {
  ULSrLq:;
  var c = null;
  try {
    c = new SP.ClientContext();
  } catch (e) {}
  var b = Toolbar_GetSPListItem(c, a);
  if (b != null) {
    if (d) b.recycle();
    else b.deleteObject();
    c.executeQueryAsync(
      function () {
        ULSrLq:;
        Toolbar_OnItemDeleted(a, true);
      },
      function () {
        ULSrLq:;
        Toolbar_OnItemDeleted(a, false);
      }
    );
    Dialog_ShowModalDialog(a, "Progress", null, null);
  } else Toolbar_OnItemDeleted(a, false);
}
function Toolbar_GetSPListItem(e, f) {
  ULSrLq:;
  var a = null,
    c = CurrentFormData_ListItemQueryParameter(f);
  if (!Util_IsNullOrEmptyString(c)) a = c.toUpperCase().split("&ID=");
  if (a == null || a.length != 2) return;
  var b = null;
  try {
    var g = e.get_web();
    b = g.get_lists();
  } catch (h) {}
  if (b != null) {
    var d = b.getById(new SP.Guid(a[0]));
    if (d != null) return d.getItemById(a[1]);
  }
  return null;
}
function Toolbar_OnItemDeleted(b, a) {
  ULSrLq:;
  Dialog_HideDialog();
  if (!a)
    UserMessages_ShowAlertMessage(
      IntlCoreStrings.k_strDeleteListItemFailed,
      true
    );
  else if (View_IsPopUI())
    window.frameElement.navigateParent(window.parent.location.href);
  else View_Close(b, true);
}
function Toolbar_HandleEditItem(b) {
  ULSrLq:;
  var c = CurrentFormData_ListItemQueryParameter(b),
    a = [];
  a.push(CurrentFormData_GetWebUrl(b));
  a.push("/_layouts/ListForm.aspx?ListId=");
  a.push(c);
  a.push("&PageType=6");
  View_IsPopUI() && a.push("&IsDlg=1");
  a.push("&Source=");
  a.push(Toolbar_GetSourceUrl());
  STSNavigateWithCheckoutAlert(
    a.join(""),
    false,
    false,
    null,
    CurrentFormData_GetWebUrl(b)
  );
}
function Toolbar_GetSourceUrl() {
  ULSrLq:;
  var a = Util_GetWindowQueryParameter("source");
  if (a == null) a = encodeURIComponent(UserMessages.GetRefreshUrl());
  return a;
}
function Toolbar_CanHandleEvents(a) {
  ULSrLq:;
  return (
    !Dialog_DialogPresent() &&
    PostbackBody.intPostbacksInProgress == 0 &&
    (View_GetTemplateType(a) != 1 || CurrentFormData_IsListItemMode(a))
  );
}
function Toolbar_Close(a) {
  ULSrLq:;
  if (View_GetTemplateType(a) != 1)
    EventLog_Add(a, 15, null, 0, "", "", true, true, false, 12, 0);
  else View_Close(a, false);
}
function Set() {
  ULSrLq:;
  if (!(Set.prototype instanceof SetTraits)) {
    Set.prototype = new SetTraits();
    Set.prototype.constructor = Set;
    return new Set();
  }
  this._arrSetItems = [];
}
function SetTraits() {
  ULSrLq:;
  this.Contains = function (b) {
    ULSrLq:;
    for (var a = 0; a < this._arrSetItems.length; a++)
      if (this._arrSetItems[a] == b) return true;
    return false;
  };
  this.Add = function (a) {
    ULSrLq:;
    !this.Contains(a) && this._arrSetItems.push(a);
  };
}
function CurrentFormData() {}
CurrentFormData.UserMessages = CurrentFormData_UserMessages;
function CurrentFormData_UserMessages(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[0];
}
CurrentFormData.ViewDataTree = CurrentFormData_ViewDataTree;
function CurrentFormData_ViewDataTree(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[1];
}
function CurrentFormData_SetViewDataTree(b, a) {
  ULSrLq:;
  CurrentFormData_GetCurrentFormData(b)[1] = a;
}
function CurrentFormData_IsValidViewDataTree(b) {
  ULSrLq:;
  var a = CurrentFormData_GetCurrentFormData(b);
  return a[1] != null && a[1].length != null && a[1].length > 0;
}
CurrentFormData.PostbackCounter = CurrentFormData_PostbackCounter;
function CurrentFormData_PostbackCounter(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[2];
}
CurrentFormData.EditingSessionId = CurrentFormData_EditingSessionId;
function CurrentFormData_EditingSessionId(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[3];
}
CurrentFormData.SolutionId = CurrentFormData_SolutionId;
function CurrentFormData_SolutionId(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[4];
}
CurrentFormData.DefaultLcid = CurrentFormData_DefaultLcid;
function CurrentFormData_DefaultLcid(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[5];
}
CurrentFormData.Now = CurrentFormData_Now;
function CurrentFormData_Now(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[6];
}
CurrentFormData.Today = CurrentFormData_Today;
function CurrentFormData_Today(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[7];
}
CurrentFormData.LoadedFromXmlDocument = CurrentFormData_LoadedFromXmlDocument;
function CurrentFormData_LoadedFromXmlDocument(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[8][0];
}
CurrentFormData.XmlLocation = CurrentFormData_XmlLocation;
function CurrentFormData_XmlLocation(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[8][1];
}
CurrentFormData.XsnLocation = CurrentFormData_XsnLocation;
function CurrentFormData_XsnLocation(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[8][2];
}
CurrentFormData.SaveLocation = CurrentFormData_SaveLocation;
function CurrentFormData_SaveLocation(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[8][3];
}
CurrentFormData.AbsoluteSolutionLocation = CurrentFormData_AbsoluteSolutionLocation;
function CurrentFormData_AbsoluteSolutionLocation(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[8][4];
}
CurrentFormData.UrlToNavigateToOnClose = CurrentFormData_UrlToNavigateToOnClose;
function CurrentFormData_UrlToNavigateToOnClose(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[8][5];
}
CurrentFormData.IsHosted = CurrentFormData_IsHosted;
function CurrentFormData_IsHosted(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[8][6] == 1;
}
CurrentFormData.IsMobile = CurrentFormData_IsMobile;
function CurrentFormData_IsMobile(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[8][7] == 1;
}
CurrentFormData.ProvidesWebPartData = CurrentFormData_ProvidesWebPartData;
function CurrentFormData_ProvidesWebPartData(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[8][9] == 1;
}
CurrentFormData.ViewName = CurrentFormData_ViewName;
function CurrentFormData_ViewName(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[9];
}
CurrentFormData.RefreshViewBeforeSubmit = CurrentFormData_RefreshViewBeforeSubmit;
function CurrentFormData_RefreshViewBeforeSubmit(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[10] == 1;
}
CurrentFormData.ShouldFocusFirstInvalidControl = CurrentFormData_ShouldFocusFirstInvalidControl;
function CurrentFormData_ShouldFocusFirstInvalidControl(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[11];
}
CurrentFormData.GetPageTitle = CurrentFormData_GetPageTitle;
function CurrentFormData_GetPageTitle(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[12];
}
CurrentFormData.IsNew = CurrentFormData_IsNew;
function CurrentFormData_IsNew(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[13] == 1;
}
CurrentFormData.SessionState = CurrentFormData_SessionState;
function CurrentFormData_SessionState(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[14];
}
CurrentFormData.SetSessionState = CurrentFormData_SetSessionState;
function CurrentFormData_SetSessionState(b, a) {
  ULSrLq:;
  CurrentFormData_GetCurrentFormData(b)[14] = a;
}
CurrentFormData.SiteUrl = CurrentFormData_SiteUrl;
function CurrentFormData_SiteUrl(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[15];
}
CurrentFormData.Direction = CurrentFormData_Direction;
function CurrentFormData_Direction(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[16];
}
CurrentFormData.GetWebUrl = CurrentFormData_GetWebUrl;
function CurrentFormData_GetWebUrl(b) {
  ULSrLq:;
  var a = CurrentFormData_GetCurrentFormData(b);
  return a[17];
}
CurrentFormData.CreationTime = CurrentFormData_CreationTime;
function CurrentFormData_CreationTime(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[18];
}
CurrentFormData.ServerTimeZone = CurrentFormData_ServerTimeZone;
function CurrentFormData_ServerTimeZone(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[19];
}
CurrentFormData.UserName = CurrentFormData_UserName;
function CurrentFormData_UserName(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[20];
}
CurrentFormData.IsFileAttachmentPresent = CurrentFormData_IsFileAttachmentPresent;
function CurrentFormData_IsFileAttachmentPresent(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[21] == true;
}
function CurrentFormData_LanguageLcid(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[22];
}
CurrentFormData.ServerUrl = CurrentFormData_ServerUrl;
function CurrentFormData_ServerUrl(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[23];
}
CurrentFormData.CustomControlsIDArray = CurrentFormData_CustomControlsIDArray;
function CurrentFormData_CustomControlsIDArray(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[24];
}
CurrentFormData.IsListItemMode = CurrentFormData_IsListItemMode;
function CurrentFormData_IsListItemMode(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[25] == true;
}
CurrentFormData.IsListItemPage = CurrentFormData_IsListItemPage;
function CurrentFormData_IsListItemPage(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[8][10] == true;
}
CurrentFormData.IsListItemDisplay = CurrentFormData_IsListItemDisplay;
function CurrentFormData_IsListItemDisplay(a) {
  ULSrLq:;
  return View.GetTemplateType(a) == 1 && CurrentFormData_IsListItemMode(a);
}
CurrentFormData.IsV4UI = CurrentFormData_IsV4UI;
function CurrentFormData_IsV4UI(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[26];
}
function CurrentFormData_ListItemQueryParameter(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[27];
}
function CurrentFormData_SelectingControlId(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[28];
}
function CurrentFormData_OnAfterSubmit(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[29];
}
function CurrentFormData_HasSignature(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[30];
}
function CurrentFormData_ListUrl(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[31];
}
function CurrentFormData_GetCanaryValue(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[37];
}
function CurrentFormData_SetCanaryValue(b, a) {
  ULSrLq:;
  CurrentFormData_GetCurrentFormData(b)[37] = a;
}
CurrentFormData.OptimizedForFirstRequest = CurrentFormData_OptimizedForFirstRequest;
function CurrentFormData_OptimizedForFirstRequest(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[32];
}
CurrentFormData.TimeZoneId = CurrentFormData_TimeZoneId;
function CurrentFormData_TimeZoneId(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[33];
}
function CurrentFormData_DSigCtrlVersion(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[34];
}
function CurrentFormData_DSigResVersion(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[35];
}
function CurrentFormData_IdnDomain(a) {
  ULSrLq:;
  return CurrentFormData_GetCurrentFormData(a)[36];
}
CurrentFormData.IsValid = CurrentFormData_IsValid;
function CurrentFormData_IsValid(a) {
  ULSrLq:;
  if (a != null && a.length == 37 + 1) return true;
  else return false;
}
function CurrentFormData_SetFormData(b, a) {
  ULSrLq:;
  CurrentFormData.g_objCurrentFormData[b] = a;
  UserMessages_ResetCachedValues();
}
function CurrentFormData_GetCurrentFormData(a) {
  ULSrLq:;
  if (CurrentFormData.g_objCurrentFormData == null) return null;
  return CurrentFormData.g_objCurrentFormData[a];
}
function PostbackBody() {}
PostbackBody.duringRender = null;
PostbackBody._boolXmlHttpSupported = false;
PostbackBody._objCurrentXmlHttp = null;
var PostbackBody_boolLastPostBackWasFull = false;
PostbackBody.intPostbacksInProgress = 0;
PostbackBody.boolPostbacksBlocked = false;
PostbackBody._arrBlockedPostbackData = null;
PostbackBody.duringRender = null;
function PostbackBody_GetWasSubmittedObject() {
  ULSrLq:;
  return document.getElementById("__WasSubmitted");
}
PostbackBody.GetPostbackPage = PostbackBody_GetPostbackPage;
function PostbackBody_GetPostbackPage(b) {
  ULSrLq:;
  var a = CurrentFormData.GetWebUrl(b);
  if (!Util.IsNonEmptyString(a)) a = CurrentFormData.SiteUrl(b);
  return a + "/_layouts/Postback.FormServer.aspx";
}
PostbackBody.OnLoad = function (a) {
  ULSrLq:;
  PerfMarker(7594, "FormLoadStart");
  try {
    typeof _spBodyOnLoadWrapper != "undefined" &&
      !_spBodyOnLoadCalled &&
      _spBodyOnLoadWrapper();
    PostbackBody.duringRender = true;
    PostbackBody.DetectAndCreateXmlHttp();
    if (PostbackBody.EnsureFormStateIsValid(a)) View_PostbackComplete(a);
    else {
      var d = GlobalFormData.Get(a),
        c = d.boolDocumentClosed == true;
      c && View_Close(a, true);
    }
    Window.AttachEventHandlers(window);
    IPFSRibbon_Initialize(a);
    PostbackBody.duringRender = false;
  } catch (b) {
    PostbackBody.duringRender = false;
    PostbackBody.HandleInitialLoadException(a, b);
  }
};
PostbackBody.OnUnload = function (a) {
  ULSrLq:;
  PostbackBody_SaveFormState(a);
  IPFSRibbon_Dispose();
  View_CleanupRichTextStructures();
};
function PostbackBody_Submit(a, b) {
  ULSrLq:;
  if (b) PostbackBody.intPostbacksInProgress++;
  Perf_Start_Trace(7602, "FormSubmit");
  SelectionService.RememberScrollPosition();
  PostbackBody.RetryingPostback = false;
  PostbackBody_boolLastPostBackWasFull = a;
  if (PostbackBody._boolXmlHttpSupported && !a) PostbackBody_SubmitXmlHttp();
  else PostbackBody_PerformFullPagePostback();
  Perf_End_Trace(7603, "FormSubmit");
}
function PostbackBody_PerformFullPagePostback() {
  ULSrLq:;
  if (__doPostBack != null) {
    PostbackBody_GetWasSubmittedObject().value = "1";
    if (
      typeof g_objCurrentFormDataSelection != "undefined" &&
      g_objCurrentFormDataSelection != null
    ) {
      g_objCurrentFormDataSelection.boolIpfsCausedPostback = true;
      g_objCurrentFormDataSelection.Serialize();
    }
    eval(_InfoPath.GetFirstControl().strPostbackCall);
  } else if (UserAgentInfo.strBrowser == 2) {
    PostbackBody_GetWasSubmittedObject().value = "1";
    document.forms[0].submit();
  } else {
    UserMessages.ShowMessage(
      new UserMessage(IntlCoreStrings.k_strOtherPostbackFailure),
      12,
      _InfoPath.GetFirstControl().strFormId
    );
    PostbackBody.intPostbacksInProgress--;
  }
}
function PostbackBody_SubmitXmlHttp() {
  ULSrLq:;
  Dialog.ShowPostbackDialog(_InfoPath.GetFirstControl().strFormId);
  var e = PostbackBody.DetectAndCreateXmlHttp();
  if (PostbackBody.OpenConnection(e))
    try {
      var b = _InfoPath.arrForms.length,
        c = new Array(b * 6 + 2);
      c.push(b.toString(), "\r\n");
      for (var a = 0; a < b; a++) {
        var d = EventLog.Value(_InfoPath.arrForms[a].strFormId);
        c.push(
          _InfoPath.arrForms[a].strFormId.length.toString(),
          "\r\n",
          _InfoPath.arrForms[a].strFormId,
          d.length.toString(),
          "\r\n",
          d
        );
      }
      if (
        typeof g_objCurrentFormDataSelection != "undefined" &&
        g_objCurrentFormDataSelection != null
      )
        g_objCurrentFormDataSelection.boolIpfsCausedPostback = true;
      e.send(c.join(""));
    } catch (f) {
      UserMessages.ShowMessage(
        new UserMessage(IntlCoreStrings.k_strNetworkPostbackFailure),
        12,
        _InfoPath.GetFirstControl().strFormId
      );
    }
}
PostbackBody.OpenConnection = function (a) {
  ULSrLq:;
  try {
    a.open(
      "POST",
      PostbackBody.GetPostbackPage(_InfoPath.GetFirstControl().strFormId),
      true
    );
  } catch (b) {
    UserMessages.ShowMessage(
      new UserMessage(IntlCoreStrings.k_strNetworkPostbackFailure),
      12,
      _InfoPath.GetFirstControl().strFormId
    );
    return false;
  }
  return true;
};
PostbackBody.RetryingPostback = false;
PostbackBody.OnReadyStateChangeCallback = function () {
  ULSrLq:;
  PostbackBody.RetryingPostback = false;
  var objXmlHttp = PostbackBody._objCurrentXmlHttp;
  if (objXmlHttp != null && objXmlHttp.readyState == 4) {
    PostbackBody._objCurrentXmlHttp = null;
    var responseText = "[]",
      nStatus = objXmlHttp.status;
    if (nStatus != 200) {
      if (nStatus == 404)
        PostbackBody_HandlePostbackError(
          IntlCoreStrings.k_strNotAvailablePostbackFailure,
          5
        );
      else if (nStatus == 301 || nStatus == 401)
        PostbackBody_HandlePostbackError(
          IntlCoreStrings.k_strPermissionPostbackFailure,
          12
        );
      else if (
        nStatus == 408 ||
        nStatus == 502 ||
        (nStatus >= 12001 && nStatus <= 12156)
      )
        PostbackBody_HandlePostbackError(
          IntlCoreStrings.k_strNetworkPostbackFailure,
          12
        );
      else if (nStatus == 599 || nStatus == 503)
        PostbackBody_HandlePostbackError(
          IntlCoreStrings.k_strServerErrorPostbackFailure,
          12
        );
      else if (nStatus == 400)
        PostbackBody_HandlePostbackError(
          IntlCoreStrings.k_strServerErrorPostbackFailure,
          12
        );
      else if (nStatus == 2) {
        Dialog.HideDialog();
        PostbackBody.intPostbacksInProgress--;
      } else {
        Dialog.HideDialog();
        UserMessages.ShowMessage(
          new UserMessage(
            IntlCoreStrings.k_strOtherPostbackFailure,
            objXmlHttp.statusText
          ),
          5,
          Dialog.strFormId
        );
        PostbackBody.intPostbacksInProgress--;
      }
      return;
    }
    PerfMarker(7567, "PostbackHandlingResponseStart");
    Perf_Start_Trace(7580, "PostbackHandleResponseText");
    try {
      Perf_Start_Trace(7582, "PostbackXmlHttpResponseText");
      responseText = objXmlHttp.responseText;
      Perf_End_Trace(7583, "PostbackXmlHttpResponseText");
    } catch (exception) {
      PostbackBody_HandlePostbackError(
        IntlCoreStrings.k_strNetworkPostbackFailure,
        12
      );
      return;
    }
    Perf_Start_Trace(7584, "PostBackSliceResponseText");
    if (responseText.substr(0, 1) == "<") {
      Dialog.HideDialog();
      UserMessageError.ShowTemplatedMessage(
        Dialog.strFormId,
        null,
        responseText,
        true
      );
      PostbackBody.intPostbacksInProgress--;
      return;
    }
    for (
      var arrResponse = responseText.split(";"),
        arrResponseText = [],
        iResponse = 0;
      iResponse < arrResponse.length;
      iResponse++
    )
      if (
        iResponse + 1 < arrResponse.length &&
        Util.Trim(arrResponse[iResponse + 1]).indexOf("<html>") == 0
      ) {
        for (
          var iResponseText = 0;
          iResponseText < iResponse + 1;
          iResponseText++
        ) {
          arrResponseText.push(arrResponse[0]);
          arrResponse.shift();
        }
        break;
      }
    var responseText = arrResponseText.join(";"),
      responceHTML = arrResponse.join(";");
    Perf_End_Trace(7585, "PostBackSliceResponseText");
    for (var i = 0; i < _InfoPath.arrForms.length; i++)
      if (_InfoPath.arrForms[i] != null) {
        var strFormId = _InfoPath.arrForms[i].strFormId,
          globalFormData = GlobalFormData.Get(strFormId),
          currentViewData = CurrentFormData.ViewDataTree(strFormId);
        if (
          currentViewData != null &&
          typeof currentViewData.SnippetElement != "undefined"
        ) {
          globalFormData.oldViewTree = currentViewData;
          globalFormData.oldViewDataHtmlMap = globalFormData.viewDataHtmlMap;
        } else {
          globalFormData.oldViewTree = null;
          globalFormData.oldViewDataHtmlMap = null;
        }
      }
    try {
      Perf_Start_Trace(7586, "PostBackEvalResponseText");
      eval(responseText);
      Perf_End_Trace(7587, "PostBackEvalResponseText");
    } catch (exception) {
      if (responseText.substring(1, 5).toUpperCase() == "HTML") {
        Dialog.HideDialog();
        UserMessageError.ShowTemplatedMessage(
          Dialog.strFormId,
          null,
          responseText,
          true
        );
        PostbackBody.intPostbacksInProgress--;
        return;
      } else {
        PostbackBody_HandlePostbackError(
          IntlCoreStrings.k_strOtherPostbackFailure,
          5
        );
        return;
      }
    }
    Perf_Start_Trace(7588, "PostBackRenderCustomControls");
    for (var i = 0; i < _InfoPath.arrForms.length; i++)
      if (_InfoPath.arrForms[i] != null) {
        var objCurrentFormData = CurrentFormData_GetCurrentFormData(
          _InfoPath.arrForms[i].strFormId
        );
        if (
          responceHTML != "" &&
          CurrentFormData.CustomControlsIDArray(_InfoPath.arrForms[i].strFormId)
            .length > 0
        ) {
          var objCustomControlsDiv = document.getElementById(
            _InfoPath.arrForms[i].strFormId + "_customControlHostDiv"
          );
          if (objCustomControlsDiv == null) {
            objCustomControlsDiv = document.createElement("div");
            objCustomControlsDiv.id =
              _InfoPath.arrForms[i].strFormId + "_customControlHostDiv";
          } else
            objCustomControlsDiv.parentNode.removeChild(objCustomControlsDiv);
          objCustomControlsDiv.style.display = "none";
          objCustomControlsDiv.innerHTML = responceHTML;
          document.body.appendChild(objCustomControlsDiv);
          for (
            var objChildNodes = objCustomControlsDiv.childNodes,
              iChildNodes = 0;
            iChildNodes < objChildNodes.length;
            iChildNodes++
          ) {
            var objNewHostingForm =
              objCustomControlsDiv.childNodes[iChildNodes];
            if (
              objNewHostingForm != null &&
              objNewHostingForm.tagName != null &&
              objNewHostingForm.tagName.toLowerCase() == "form"
            )
              if (
                objNewHostingForm.id == "HostingForm" ||
                objNewHostingForm.id == "aspnetForm"
              ) {
                objCustomControlsDiv.innerHTML = objNewHostingForm.innerHTML;
                break;
              }
          }
        }
      }
    Perf_End_Trace(7589, "PostBackRenderCustomControls");
    var objTemplate = null,
      funcGetDialogData = null;
    if (typeof __dialogTemplate_ != "undefined" && __dialogTemplate_ != null)
      objTemplate = __dialogTemplate_;
    if (typeof __GetDialogData_ != "undefined" && __GetDialogData_ != null)
      funcGetDialogData = __GetDialogData_;
    Dialog.GetOnDemandData(objTemplate, funcGetDialogData);
    var successExecutePBData = true;
    Perf_End_Trace(7581, "PostbackHandleResponseText");
    try {
      PostbackBody.duringRender = true;
      for (var i = 0; i < _InfoPath.arrForms.length; i++)
        if (
          !PostbackBody.ExecutePostBackdata(
            _InfoPath.arrForms[i].strFormId,
            CurrentFormData_GetCurrentFormData(_InfoPath.arrForms[i].strFormId)
          )
        ) {
          successExecutePBData = false;
          break;
        }
      if (successExecutePBData) {
        View_PostbackComplete2();
        PostbackBody.intPostbacksInProgress--;
      }
      if (EventLog.boolPostbackOnStructuralChange) {
        EventLog.boolPostbackOnStructuralChange = false;
        AccessibilityIFrame_RefreshIFrame();
      }
      PostbackBody.duringRender = false;
    } catch (exception) {
      PostbackBody.duringRender = false;
    }
  }
};
function PostBackBody_DetectAndRunScript(objControl) {
  ULSrLq:;
  if (objControl.tagName == "SCRIPT") {
    var strScript = objControl.innerHTML;
    strScript = strScript.replace("/*", "");
    strScript = strScript.replace("// */", "");
    strScript = strScript.replace("//<![CDATA[", "");
    strScript = strScript.replace("// <![CDATA[", "");
    strScript = strScript.replace("//]]>", "");
    strScript = strScript.replace("// ]]>", "");
    var strScriptWithoutCallback = strScript.replace(
      "WebForm_InitCallback();",
      ""
    );
    if (Util_IsNonEmptyString(strScript)) {
      PostbackBody.duringRender = true;
      if (UserAgentInfo.strBrowser == 2) window.setTimeout(strScript, 0);
      else {
        if (
          UserAgentInfo.strBrowser == 1 &&
          Util_IsNonEmptyString(strScriptWithoutCallback) &&
          strScriptWithoutCallback.indexOf("function") != -1
        )
          try {
            window.execScript(strScriptWithoutCallback);
          } catch (e) {}
        try {
          eval(strScript);
        } catch (e) {}
      }
      PostbackBody.duringRender = false;
    }
  } else
    for (
      var iChildren = 0;
      iChildren < objControl.childNodes.length;
      iChildren++
    )
      PostBackBody_DetectAndRunScript(objControl.childNodes[iChildren]);
}
function PostbackBody_HandlePostbackError(b, a) {
  ULSrLq:;
  PostbackBody_HandlePostbackDetailedError(b, null, null, a);
}
function PostbackBody_HandlePostbackDetailedError(d, b, e, a) {
  ULSrLq:;
  if (a == 12) PostbackBody.RetryingPostback = true;
  var f = GlobalFormData.Get(Dialog.strFormId);
  Dialog.HideDialog();
  var c = UserMessages_GetReturnedMessages();
  UserMessages.intNextMessage = c.length;
  UserMessages.ShowMessage(new UserMessage(d, b, e), a, Dialog.strFormId);
  PostbackBody.intPostbacksInProgress--;
}
PostbackBody.ExecutePostBackdata = function (c, d) {
  ULSrLq:;
  if (CurrentFormData.IsValid(d)) {
    var b = CurrentFormData.UserMessages(c);
    if (b != null && b.length > 0) {
      var a = b[0];
      if (a[0] == 12) {
        PostbackBody_HandlePostbackDetailedError(a[1], a[2], a[3], 12);
        return false;
      }
    }
    View_PostbackComplete(c);
  }
  return true;
};
PostbackBody.HandleInitialLoadException = function (b, a) {
  ULSrLq:;
  if (
    UserMessages != null &&
    IntlCoreStrings != null &&
    View != null &&
    "__ViewContainer" != null
  )
    UserMessages.ShowMessage(
      new UserMessage(
        IntlCoreStrings.k_strErrorClientScriptFailure,
        a.message != null ? a.message : a
      ),
      5,
      b
    );
  else {
    if (Toolbar != null)
      try {
        Toolbar.Show(b, false);
      } catch (a) {}
    if (IntlCoreStrings != null && View != null && "__ViewContainer" != null) {
      var c = View_GetViewFormFieldIDControl(b);
      if (c != null) {
        Util.SetInnerText(
          c,
          IntlCoreStrings.k_strErrorClientScriptFailure + "\r\n" + a
        );
        return true;
      }
    }
    throw a;
  }
};
PostbackBody.DetectAndCreateXmlHttp = function () {
  ULSrLq:;
  var a = PostbackBody_DetectAndCreateXmlHttpHelper();
  if (a != null) {
    PostbackBody._objCurrentXmlHttp = a;
    a.onreadystatechange = PostbackBody.OnReadyStateChangeCallback;
  }
  return a;
};
function PostbackBody_DetectAndCreateXmlHttpHelper() {
  ULSrLq:;
  var a = null;
  try {
    a = new XMLHttpRequest();
  } catch (b) {}
  if (a == null && typeof ActiveXObject != "undefined")
    try {
      a = new ActiveXObject("MSXML2.XMLHTTP");
    } catch (b) {}
  if (a != null) {
    PostbackBody._boolXmlHttpSupported = true;
    return a;
  } else {
    PostbackBody._boolXmlHttpSupported = false;
    return null;
  }
}
function PostbackBody_SaveFormState(b) {
  ULSrLq:;
  var a = PostbackBody_GetCookiePrefix(b);
  if (true == false || a == "__IPFS_") return;
  var c = GlobalFormData.Get(b);
  if (
    !c.submitCalled &&
    !c.boolDocumentClosed &&
    !PostbackBody.webPartConnectionTriggered
  ) {
    var e = CurrentFormData.PostbackCounter(b);
    PostbackBody_CreateDocumentCookie(a, "_pb", e);
    if (EventLog.Count(b) > 1) {
      PostbackBody_CreateDocumentCookie(a, "_log", EventLog.Value(b));
      var d = PostbackBody_ReadDocumentCookie(a, "_log");
      if (d == null || d.length == 0) {
        PostbackBody_DeleteDocumentCookie(a, "_log");
        PostbackBody_CreateDocumentCookie(a, "_err", "true");
      }
    }
    if (
      !(
        typeof g_objCurrentFormDataSelection == "undefined" ||
        g_objCurrentFormDataSelection == null
      )
    ) {
      var f = g_objCurrentFormDataSelection.Serialize();
      PostbackBody_CreateDocumentCookie(a, "_sel", f);
    }
  } else
    c.boolDocumentClosed && PostbackBody_CreateDocumentCookie(a, "_dc", "true");
}
function PostbackBody_VerifyCookiesEnabled(f) {
  ULSrLq:;
  var c = document.getElementById("__PerformSentinelDetection"),
    d = PostbackBody_ReadCookie("_InfoPath_Sentinel") != null;
  if (!d) {
    var a = window.location.href;
    if (
      c.value == "2" ||
      a.indexOf("?_InfoPath_Sentinel=") >= 0 ||
      a.indexOf("&_InfoPath_Sentinel=") >= 0
    ) {
      PostbackBody_HideWaitUI();
      Dialog.ShowFinalMessage(f, IntlCoreStrings.k_strNoCookiesDefined, false);
    } else {
      c.value = "1";
      var b;
      if (a.indexOf("?") >= 0) b = "&";
      else b = "?";
      var e = a + b + "_InfoPath_Sentinel=1";
      Util.Navigate(e);
    }
    return false;
  }
  return true;
}
PostbackBody.EnsureFormStateIsValid = function (a) {
  ULSrLq:;
  var h = null,
    b = PostbackBody_GetCookiePrefix(a),
    g = GlobalFormData.Get(a);
  g.submitCalled = false;
  PostbackBody.webPartConnectionTriggered = false;
  var c = false,
    e = false,
    f = 0,
    n = g_objSnippetTree[a],
    m = CurrentFormData_ViewDataTree(a);
  if (
    !(
      typeof n == "undefined" ||
      n == null ||
      typeof m == "undefined" ||
      m == null ||
      m.length == 0
    )
  )
    if (View.GetName(n) != CurrentFormData.ViewName(a)) {
      c = true;
      e = true;
      f = 8;
    } else if (
      PostbackBody_GetWasSubmittedObject() != null &&
      PostbackBody_GetWasSubmittedObject().value != ""
    ) {
      c = true;
      e = true;
      f = 25;
    }
  if (true == false) return true;
  var s = PostbackBody_ReadDocumentCookie(b, "_dc");
  if (s == "true") {
    Dialog.ShowFinalMessage(a, IntlCoreStrings.k_strErrorFormClosed, true);
    return false;
  }
  var r = PostbackBody_ReadDocumentCookie(b, "_err");
  if (r != null && r.length > 0) {
    var p = document.getElementById(a + "__BrowserFormTopLevelSpan");
    (CurrentFormData.IsHosted(a) || (typeof p != "undefined" && p != null)) &&
      UserMessages.ShowAlertMessage(
        IntlCoreStrings.k_strErrorCookieDataLost,
        true
      );
    c = true;
    PostbackBody_DeleteDocumentCookie(b, "_err");
  } else {
    var l = PostbackBody_ReadDocumentCookie(b, "_log");
    if (l != null && l.length > 0) {
      h = l;
      PostbackBody_DeleteDocumentCookie(b, "_log");
    }
  }
  if (c == false) {
    var i = PostbackBody_ReadDocumentCookie(b, "_pb"),
      o = CurrentFormData.PostbackCounter(a);
    if (i != null)
      if (i > o) {
        c = true;
        f = 19;
      } else if (i == o) c = false;
      else {
        c = false;
        h = null;
      }
  }
  PostbackBody_DeleteDocumentCookie(b, "_pb");
  if (h != null) {
    var d = document.getElementById(a + "__EventLog");
    if (d != null) {
      d.value = h;
      var u = EventLog_Deserialize(a);
      EventLog_Initialize(a, false);
      EventLog_Serialize(a, u);
    }
  }
  if (c == true) {
    var d = document.getElementById(a + "__EventLog");
    if (d == null || d.value.length <= 1) EventLog_EnsureEventLogStartEntry(a);
    else {
      var q = d.value,
        j = g.eventLogStaticData;
      if (j == null) {
        EventLog_Initialize(a, false);
        EventLog_Serialize(a, q.split(" "));
        j = g.eventLogStaticData;
      }
      j.UpdateForCachedEventLogValue(q);
    }
    View_SubmitForm(a, e, f, 0, false);
    if (e) return false;
  }
  var k = PostbackBody_ReadDocumentCookie(b, "_sel");
  if (k != null && k.length > 0) {
    var t = new SelectionInformation();
    t.SetStorageInput(k);
    PostbackBody_DeleteDocumentCookie(b, "_sel");
  }
  g.submitCalled = false;
  PostbackBody.webPartConnectionTriggered = false;
  return true;
};
function PostbackBody_GetCookiePrefix(a) {
  ULSrLq:;
  return encodeURIComponent("__IPFS_" + CurrentFormData.EditingSessionId(a));
}
function PostbackBody_RemoveUnusedIpfsCookies() {
  ULSrLq:;
  PostbackBody_RemoveFormCookies("");
}
function PostbackBody_RemoveFormCookies(j) {
  ULSrLq:;
  for (var i = _InfoPath.arrForms.length, f = [], b = 0; b < i; b++)
    if (_InfoPath.arrForms[b] != null && _InfoPath.arrForms[b].strFormId != j) {
      var c = PostbackBody_GetCookiePrefix(_InfoPath.arrForms[b].strFormId);
      if (Util_IsNonEmptyString(c) && c != "__IPFS_") f[c] = 1;
    }
  for (var h = document.cookie.split(";"), b = 0; b < h.length; b++) {
    var a = h[b],
      e = a.charAt(0) == " " ? 1 : 0;
    if (a.indexOf("__IPFS_") == e) {
      var d = a.indexOf("=");
      if (d < 0) d = a.length;
      var g = a.lastIndexOf("_", d);
      if (g > -1) {
        var c = a.substring(e, g);
        if (f[c] != 1) {
          a = a.substring(e, d);
          PostbackBody_DeleteCookie(a, null);
        }
      }
    }
  }
}
function PostbackBody_CreateDocumentCookie(b, d, c) {
  ULSrLq:;
  var a = encodeURIComponent(b + d);
  PostbackBody_CreateCookie(a, c, null, null, false);
}
function PostbackBody_ReadDocumentCookie(b, c) {
  ULSrLq:;
  var a = b + c;
  return PostbackBody_ReadCookie(a);
}
function PostbackBody_DeleteDocumentCookie(b, c) {
  ULSrLq:;
  var a = b + c;
  PostbackBody_DeleteCookie(a, null);
}
function PostbackBody_CreateCookie(j, i, a, b, g) {
  ULSrLq:;
  var c = j + "=" + encodeURIComponent(i) + ";",
    d = a == null ? "" : "domain=" + a + ";",
    f = b == null ? "" : "path=" + b + ";",
    e = g == false ? "" : "secure;",
    h = c + d + f + e;
  document.cookie = h;
}
function PostbackBody_ReadCookie(f) {
  ULSrLq:;
  for (
    var c = f + "=", d = document.cookie.split(";"), b = 0;
    b < d.length;
    b++
  ) {
    var a = d[b],
      e = a.charAt(0) == " " ? 1 : 0;
    if (a.indexOf(c) == e) {
      var a = decodeURIComponent(a.substring(c.length + e, a.length));
      return a;
    }
  }
  return null;
}
function PostbackBody_DeleteCookie(f, b) {
  ULSrLq:;
  var a = new Date();
  a.setTime(a.getTime() - 8.64e7);
  var c = "expires=" + a.toGMTString() + ";",
    d = b == null ? "" : "path=" + b + ";",
    e = f + "=;" + c + d;
  document.cookie = e;
}
PostbackBody.IsPostingBack = function () {
  ULSrLq:;
  return PostbackBody.intPostbacksInProgress > 0 || Dialog_DialogPresent();
};
function PostbackBody_SaveBlockedPostbackState(a) {
  ULSrLq:;
  PostbackBody._arrBlockedPostbackData = a;
}
function PostbackBody_HasBlockedPostback() {
  ULSrLq:;
  return PostbackBody._arrBlockedPostbackData != null;
}
function PostbackBody_ExecuteBlockedPostback() {
  ULSrLq:;
  var a = PostbackBody._arrBlockedPostbackData;
  View_SubmitForm(a[0], a[1], a[2], a[3], a[4]);
  PostbackBody._arrBlockedPostbackData = null;
}
function PostbackBody_HideWaitUI() {
  ULSrLq:;
  var a = document.getElementById("_InfoPath_WaitUI");
  if (a != null) {
    a.style.display = "none";
    a.innerHTML = "";
  }
}
function Window() {}
Window._OriginalOnResize = null;
Window.AttachEventHandlers = function (a) {
  ULSrLq:;
  if (UserAgentInfo.strBrowser == 3)
    a.addEventListener("resize", Window.OnResize, false);
  else if (
    Window._OriginalOnResize == null &&
    Window._ResizeReassigned != true
  ) {
    Window._ResizeReassigned = true;
    Window._OriginalOnResize = a.onresize;
    a.onresize = new Function("Window.OnResize(event);");
  }
  UserAgentInfo.strBrowser != 1 &&
    a.addEventListener("dragdrop", Window.OnDrop, true);
};
Window.OnResize = function () {
  ULSrLq:;
  Window._OriginalOnResize != null && Window._OriginalOnResize();
  for (var a = 0; a < _InfoPath.arrForms.length; a++)
    if (_InfoPath.arrForms[a] != null) {
      var b = GlobalFormData.Get(_InfoPath.arrForms[a].strFormId);
      if (b.boolDocumentClosed || !b.viewTreesAreMerged) return;
      ErrorVisualization_UpdateAllAsterisks();
      break;
    }
};
Window.OnDrop = function (b) {
  ULSrLq:;
  var a = CrossBrowserLibrary_GetEventSourceElement(b);
  a != null && window.setTimeout("BaseControl_OnDrop('" + a.id + "');");
};
function Window_EnsureEvent(a) {
  ULSrLq:;
  if (a == null) if (UserAgentInfo.strBrowser == 1) return Window_GetEvent();
  return a;
}
function Window_GetEvent() {
  ULSrLq:;
  var a = window;
  return a["event"];
}
function IFrameUtils_IsIframeCreated(a) {
  ULSrLq:;
  var b = document.getElementById(a);
  return b != null;
}
function IFrameUtils_InsertIframe(a, e, c, f) {
  ULSrLq:;
  var b = IFrameUtils_BuildIFrame(e, f);
  if (a == null) {
    document.body.appendChild(b);
    return b;
  }
  var d = a.parentNode;
  if (d == null) return null;
  if (!((c && a.nextSibling == b) || (!c && a.previousSibling == b)))
    if (a.nextSibling != null) d.insertBefore(b, c ? a.nextSibling : a);
    else d.appendChild(b);
  return b;
}
function IFrameUtils_BuildIFrame(c, e) {
  ULSrLq:;
  var a = document.getElementById(c);
  if (a == null) {
    var d = "",
      b = document.createElement("div");
    if (b == null) return null;
    try {
      if (document.location.protocol == "https:")
        d =
          document.location.protocol +
          "//" +
          document.location.host +
          "/_layouts/FormResource.aspx?iframe=Yes";
    } catch (f) {}
    b.innerHTML =
      "<iframe tabindex='-1' id='" +
      c +
      "' style='display:none;left:0px;top:0px;position:absolute;' src='" +
      d +
      "' frameborder='0' scrolling='no' ></iframe>";
    a = b.firstChild;
    if (a == null) return null;
  }
  if (e != "Default") a.style.zIndex = e;
  return a;
}
function RichClientDetector() {}
RichClientDetector.OpenInInfoPath = function (i, d, g, f, c) {
  ULSrLq:;
  var b = false,
    a = null;
  try {
    a = new ActiveXObject("SharePoint.OpenXMLDocuments");
  } catch (h) {}
  if (a != null)
    if (d == null || d.length == 0) b = a.CreateNewDocument(g, f);
    else b = a.EditDocument(d, "InfoPath.Document");
  if (b && c != null && c.length > 0) Util.Navigate(c);
  else {
    var e = document.getElementById("DetectInfoPath");
    if (e != null) {
      e.value = "1";
      funcFullPagePostBack != null && funcFullPagePostBack();
    }
  }
};
function Print() {}
Print.Show = function (a) {
  ULSrLq:;
  if (EventLog.Count(a) > 1 && document.forms[0] != null) {
    !CurrentFormData_IsV4UI(a) &&
      UserMessages.ShowAlertMessage(
        IntlCoreStrings.k_strPrintPromptForRefresh,
        true
      );
    EventLog_Add(a, 19, null, "", "", "", true, false, false, 13, 0);
  } else Print_OpenWindow(a, true);
};
function Print_ShowFromRibbon(a) {
  ULSrLq:;
  var b = true;
  if (EventLog.Count(a) <= 1 || document.forms[0] == null)
    b = Print_OpenWindow(a, false);
  b && IPFSRibbon_HandleButtonClick(a, "print");
}
function Print_OpenWindow(b, c) {
  ULSrLq:;
  if (Print._lastPrintWindow == null || !Print._boolWaitingToDisplayView) {
    var a = "PrintWindow" + CurrentFormData.EditingSessionId(b),
      d;
    while ((d = a.replace(/[-+=\/]/, "_")) != a) a = d;
    Print._boolDelayCustomControlPostback = true;
    Print._lastPrintWindow = window.open(
      CurrentFormData_GetWebUrl(b) + "/_layouts/PrintLoader.FormServer.aspx",
      a,
      "menubar=1,resizable=1,scrollbars=1,status=1,toolbar=1,location=0",
      true
    );
    Print._boolDelayCustomControlPostback = false;
  }
  if (Print._lastPrintWindow == null) {
    UserMessages.ShowAlertMessage(
      IntlCoreStrings.k_strPromptOpenWindowFailed,
      true
    );
    return false;
  } else {
    Print._boolWaitingToDisplayView = !c;
    if (c && Print._lastPrintWindowTimer == null) {
      Print._strFormID = b;
      Print._lastPrintWindowTimer = window.setTimeout(Print.PrintCallback, 25);
    }
    return true;
  }
}
Print._lastPrintWindow = null;
Print._lastPrintWindowTimer = null;
Print._strFormID = "";
Print._boolWaitingToDisplayView = false;
Print._boolDelayCustomControlPostback = false;
Print.PrintCallback = function () {
  ULSrLq:;
  var a, b;
  window.clearTimeout(Print._lastPrintWindowTimer);
  Print._lastPrintWindowTimer = null;
  if (Print._lastPrintWindow == null) return;
  if (
    (a = Print._lastPrintWindow.document.getElementById("__EventLog")) ==
      null ||
    (b = Print._lastPrintWindow.document.getElementById("PrintLoaderForm")) ==
      null ||
    -1 ==
      Print._lastPrintWindow.document.URL.indexOf(
        "/_layouts/PrintLoader.FormServer.aspx"
      )
  ) {
    Print._lastPrintWindowTimer = window.setTimeout(Print.PrintCallback, 25);
    return;
  }
  EventLog_EnsureEventLogStartEntry(Print._strFormID);
  var c = EventLog.Value(Print._strFormID);
  a.value = c;
  b.submit();
  Print._lastPrintWindow.focus();
  Print._lastPrintWindow = null;
};
function Print_IsPrintWindow(b) {
  ULSrLq:;
  var a = window.name;
  return (
    (a != null && a.length >= 11 && a.substring(0, 11) == "PrintWindow") ||
    View.GetTemplateType(b) == 1
  );
}
function IP_DebugComplexity() {}
IP_DebugComplexity.CountElements = IP_DebugComplexity_CountElements;
function IP_DebugComplexity_CountElements() {
  ULSrLq:;
  return IP_DebugComplexity._CountOverDOM(function () {
    ULSrLq:;
    return true;
  });
}
IP_DebugComplexity.CountIPControls = IP_DebugComplexity_CountIPControls;
function IP_DebugComplexity_CountIPControls() {
  ULSrLq:;
  return IP_DebugComplexity._CountOverDOM(function (a) {
    ULSrLq:;
    return BaseControl.IsInfoPathControl(a);
  });
}
IP_DebugComplexity.CountVDTSize = IP_DebugComplexity_CountVDTSize;
function IP_DebugComplexity_CountVDTSize(a) {
  ULSrLq:;
  return IP_DebugComplexity._CountOverVDT(a, function () {
    ULSrLq:;
    return true;
  });
}
IP_DebugComplexity.CountVDTHiddenSize = IP_DebugComplexity_CountVDTHiddenSize;
function IP_DebugComplexity_CountVDTHiddenSize(a) {
  ULSrLq:;
  return IP_DebugComplexity._CountOverVDT(a, function (a) {
    ULSrLq:;
    return ViewDataNode_IsHidden(a);
  });
}
IP_DebugComplexity.ComposeSummary = IP_DebugComplexity_ComposeSummary;
function IP_DebugComplexity_ComposeSummary() {
  ULSrLq:;
  for (var a = "", b = 0; b < _InfoPath.arrForms.length; b++)
    if (_InfoPath.arrForms[b] != null) {
      a += "Form ID: " + _InfoPath.arrForms[b].strFormId + "\n";
      a +=
        "Site: " +
        CurrentFormData.SiteUrl(_InfoPath.arrForms[b].strFormId) +
        "\n";
      a +=
        "Web: " +
        CurrentFormData.GetWebUrl(_InfoPath.arrForms[b].strFormId) +
        "\n";
      a +=
        "View Data Tree Nodes: " +
        IP_DebugComplexity.CountVDTSize(_InfoPath.arrForms[b].strFormId) +
        " (" +
        IP_DebugComplexity.CountVDTHiddenSize(_InfoPath.arrForms[b].strFormId) +
        " hidden)\n\n";
    }
  a += "Complexity Summary:\n";
  a += "HTML InfoPath Controls: " + IP_DebugComplexity.CountIPControls() + "\n";
  a += "Total HTML Elements: " + IP_DebugComplexity.CountElements() + "\n";
  return a;
}
IP_DebugComplexity._CountOverDOM = IP_DebugComplexity__CountOverDOM;
function IP_DebugComplexity__CountOverDOM(a) {
  ULSrLq:;
  return IP_DebugComplexity._CountOverDOMRecurs(document.body, a);
}
IP_DebugComplexity._CountOverDOMRecurs = function (a, c) {
  ULSrLq:;
  if (a == null) return 0;
  for (var d = c(a) ? 1 : 0, b = 0; b < a.childNodes.length; b++)
    d += IP_DebugComplexity._CountOverDOMRecurs(a.childNodes[b], c);
  return d;
};
IP_DebugComplexity._CountOverVDT = IP_DebugComplexity__CountOverVDT;
function IP_DebugComplexity__CountOverVDT(b, a) {
  ULSrLq:;
  return IP_DebugComplexity._CountOverVDTRecurs(
    CurrentFormData.ViewDataTree(b),
    a
  );
}
IP_DebugComplexity._CountOverVDTRecurs = function (a, d) {
  ULSrLq:;
  if (a == null) return 0;
  for (
    var e = d(a) ? 1 : 0, c = ViewDataNode_GetChildNodes(a), b = 0;
    b < c.length;
    b++
  )
    e += IP_DebugComplexity._CountOverVDTRecurs(c[b], d);
  return e;
};
function RegisterAJAXClasses() {
  ULSrLq:;
  try {
    eval("Type.registerNamespace('IPFSRibbon');");
  } catch (exception) {
    eval("IPFSRibbon = new function() {}");
  }
}
RegisterAJAXClasses();
IPFSRibbon.g_arrAlwaysEnabledCommands = [
  "InfoPathHomeTab",
  "InfoPathListTab",
  "InfoPathListDisplayTab",
  "InfoPathClipboard",
  "InfoPathCut",
  "InfoPathCopy",
  "InfoPathPaste",
];
IPFSRibbon.g_arrCommands = [
  ["InfoPathHomeTab", null],
  ["InfoPathHomeTabCtxGroup", null],
  ["InfoPathHomeTabFormActions", null],
  ["InfoPathHomeTabUpdate", null],
  ["InfoPathHomeTabViews", null],
  ["InfoPathHomeTabSurvey", null],
  ["InfoPathFormSave", [2]],
  ["InfoPathFormSaveAs", [2]],
  ["InfoPathFormClose", [2, 23]],
  ["InfoPathFormPrintView", [4]],
  ["InfoPathFormUpdate", [3]],
  ["InfoPathFormSubmit", [2, 23]],
  ["InfoPathFormViews", [15, 14, 16, 13, 4, 24]],
  ["InfoPathCurrentView", null],
  ["InfoPathQuerySelectedView", null],
  ["InfoPathPopulateViews", null],
  ["InfoPathSelectView", null],
  ["InfoPathClipboard", null],
  ["InfoPathCut", null],
  ["InfoPathCopy", null],
  ["InfoPathPaste", null],
  ["InfoPathListTab", null],
  ["InfoPathListTabCtxGroup", null],
  ["InfoPathListTabCommit", null],
  ["InfoPathListTabViews", null],
  ["InfoPathListTabSurvey", null],
  ["InfoPathListTabActions", null],
  ["InfoPathListDeleteItem", [26]],
  ["InfoPathListDisplayTab", null],
  ["InfoPathListDisplayCtxGroup", null],
  ["InfoPathListDisplayTabManage", null],
  ["InfoPathListDisplayTabClose", null],
  ["InfoPathListDisplayEdit", [30]],
  ["InfoPathListDisplayAlertMe", [30]],
  ["InfoPathListDisplayDelete", [30]],
  ["InfoPathListDisplayClose", [31]],
];
IPFSRibbon.g_richTextComponent = null;
function FormRibbonData(a, c, b) {
  ULSrLq:;
  this._objFormPageComponent = a;
  this._arrRibbonData = c;
  this._arrEnabledCommands = b;
}
IPFSRibbon.g_boolRegistered = false;
IPFSRibbon.g_boolAutoHide = false;
IPFSRibbon.g_strFocusedFormId = null;
IPFSRibbon.g_boolChangingFocus = false;
IPFSRibbon.g_arrFormRibbonData = null;
IPFSRibbon.g_funcPreviousKeyboardHandler = null;
function IPFSRibbon_GetAvailableCommandNames(a) {
  ULSrLq:;
  if (IPFSRibbon.g_arrFormRibbonData[a] != null)
    return IPFSRibbon.g_arrFormRibbonData[a]._arrEnabledCommands;
  var e = IPFSRibbon_GetRibbonData(a);
  if (Util.IsEmptyArray(e)) return [];
  var f = e[0],
    d = [],
    c = Util_Clone(IPFSRibbon.g_arrAlwaysEnabledCommands);
  c.push(
    CurrentFormData_IsListItemMode(a)
      ? CurrentFormData_IsListItemDisplay(a)
        ? "InfoPathListDisplayCtxGroup"
        : "InfoPathListTabCtxGroup"
      : "InfoPathHomeTabCtxGroup"
  );
  IPFSRibbon_GetDependentCommands(f, d);
  for (var b = 0; b < d.length; b++)
    d[b] && c.push(IPFSRibbon.g_arrCommands[b][0]);
  return c;
}
function IPFSRibbon_GetDependentCommands(e, a) {
  ULSrLq:;
  for (var c = 0; c < e.length; c++) {
    var b = e[c];
    if (!a[b]) {
      a[b] = true;
      var d = IPFSRibbon.g_arrCommands[b][1];
      d != null && IPFSRibbon_GetDependentCommands(d, a);
    }
  }
}
function IPFSRibbon_IsEnabled(a) {
  ULSrLq:;
  if (!IPFSRibbon_IsFrameworkPresent()) return false;
  if (
    IPFSRibbon.g_arrFormRibbonData == null ||
    IPFSRibbon.g_arrFormRibbonData[a] == null
  )
    return !Util.IsEmptyArray(IPFSRibbon_GetGlobalScript(a));
  else
    return !Util.IsEmptyArray(IPFSRibbon.g_arrFormRibbonData[a]._arrRibbonData);
}
function IPFSRibbon_IsFrameworkPresent() {
  ULSrLq:;
  var a = false;
  try {
    a = Type.registerNamespace != null && window.EnsureScript != null;
  } catch (b) {
    a = false;
  }
  return a;
}
function IPFSRibbon_ResolveRibbonId(c) {
  ULSrLq:;
  for (var d = _InfoPath.arrForms.length, b = 0; b < d; b++) {
    var a = _InfoPath.arrForms[b];
    if (a != null) if (a.strRibbonId == c) return a;
  }
  return null;
}
function IPFSRibbon_ResolveFormId(d) {
  ULSrLq:;
  for (var c = _InfoPath.arrForms.length, b = 0; b < c; b++) {
    var a = _InfoPath.arrForms[b];
    if (a != null) if (a.strFormId == d) return a;
  }
  return null;
}
function IPFSRibbon_SetWebPartForForm(e) {
  ULSrLq:;
  var a = IPFSRibbon_ResolveRibbonId(e),
    b = null,
    d = null;
  if (a == null || CurrentFormData_GetCurrentFormData(a.strFormId) == null)
    return;
  b = a.strFormId;
  d = a.strClientId;
  var c = document.getElementById(d);
  if (c != null)
    c.onclick = function () {
      ULSrLq:;
      return Body_OnWebPartClick(b);
    };
  IPFSRibbon_SetFocusedForm(b);
}
function IPFSRibbon_SetFocusedForm(a) {
  ULSrLq:;
  if (IPFSRibbon.g_strFocusedFormId != a) {
    IPFSRibbon.g_strFocusedFormId = a;
    if (IPFSRibbon.g_arrFormRibbonData != null) {
      IPFSRibbon.g_boolChangingFocus = true;
      IPFSRibbon_RegisterWithPageManager(a);
      IPFSRibbon.g_boolChangingFocus = false;
    }
  }
}
function IPFSRibbon_SetInitialFocus(a) {
  ULSrLq:;
  SelectionService_IsManagingPageFocus(a) && IPFSRibbon_SetFocusedForm(a);
}
function IPFSRibbon_EnsureFocusOnForm(a) {
  ULSrLq:;
  IPFSRibbon_SetFocusedForm(a);
  return true;
}
function IPFSRibbon_GetFocusedFormControlId() {
  ULSrLq:;
  return IPFSRibbon.g_strFocusedFormId;
}
function IPFSRibbon_GetRibbonData(a) {
  ULSrLq:;
  if (IPFSRibbon.g_arrFormRibbonData[a] != null)
    return IPFSRibbon.g_arrFormRibbonData[a]._arrRibbonData;
  return IPFSRibbon_GetGlobalScript(a);
}
function IPFSRibbon_GetGlobalScript(strFormId) {
  ULSrLq:;
  try {
    var objData = eval("g_objIPFSRibbon_" + strFormId);
    return objData;
  } catch (exception) {
    return [];
  }
}
function IPFSRibbon_SelectInitialView(f, g) {
  ULSrLq:;
  var a = IPFSRibbon_GetRibbonData(f)[1],
    e = CurrentFormData_ViewName(f),
    b = null;
  if (a != null)
    for (var c = 0; c < a.length; c++)
      if (a[c][0] == e) {
        b = a[c][1];
        break;
      }
  if (Util_IsNullOrEmptyString(b)) {
    b = "";
    e = "";
  }
  g.SelectedCommandId = e;
  g.Value = b;
  if (a == null) {
    var d = IPFSRibbon_GetAvailableCommandNames(f);
    d.pop();
    d.pop();
    d.pop();
    SP.Ribbon.PageManager.get_instance()
      .get_commandDispatcher()
      .executeCommand(Commands.CommandIds.ApplicationStateChanged, null);
  }
}
function IPFSRibbon_GetViewsDropdownXML() {
  ULSrLq:;
  var e = IPFSRibbon_GetRibbonData(IPFSRibbon_GetFocusedFormControlId()),
    c = e[1],
    a = [];
  a.push(
    "<Menu Id='menuIPFSViews'><MenuSection Id='menuIPFSViews1'><Controls>"
  );
  for (var b = 0; b < c.length; b++) {
    var d = Util_HtmlEncodeAttributeValue(c[b][0]);
    a.push("<Button Id='");
    a.push(d);
    a.push("' Command='InfoPathSelectView' CommandValueId='");
    a.push(d);
    a.push("' LabelText='");
    a.push(Util_HtmlEncodeAttributeValue(c[b][1]));
    a.push("' TemplateAlias='c1Option' />");
  }
  a.push("</Controls></MenuSection></Menu>");
  return a.join("");
}
function IPFSRibbon_HandleButtonClick(b, c) {
  ULSrLq:;
  if (!Toolbar_CanHandleEvents(b)) return;
  PostbackBody.boolPostbacksBlocked = true;
  var a = null;
  try {
    a = IPFSRibbon_BlurSelectedControl(b);
  } catch (d) {}
  window.setTimeout(
    "IPFSRibbon_ExecuteClick('" +
      b +
      "','" +
      c +
      "','" +
      a.strControlId +
      "'," +
      a.boolIsRichText +
      ", null)",
    0
  );
}
function IPFSRibbon_HandleViewChange(a, b) {
  ULSrLq:;
  if (!Toolbar_CanHandleEvents(a)) return;
  IPFSRibbon_BlurSelectedControl(a);
  window.setTimeout(function () {
    ULSrLq:;
    Toolbar_HandleViewChange(a, b);
  }, 0);
}
function IPFSRibbon_BlurSelectedControl(h) {
  ULSrLq:;
  var c = {},
    a = SelectionService_GetSelectedControl(),
    b = null;
  if (a != null && a.id.indexOf("RTI") != -1) {
    var g = RichTextBox_GetLeafControlFromSelectedRTE(a);
    if (g.fV4RTE) a = RichTextBox_BlurV4Control(g, a);
    else if (UserAgentInfo.strBrowser == 1) {
      var d = RTE_EditorWithTheFocus();
      if (d != null) {
        b = document.getElementById(d.replace("_plainText", ""));
        b.ondeactivate();
        a = b;
      }
    }
  } else if (
    a != null &&
    a.getAttribute("ScriptClass") == "ViewContainer" &&
    document.activeElement != null
  ) {
    var e = BaseControl_GetParentInfoPathControl(document.activeElement);
    if (e != null && e.getAttribute("ScriptClass") == "CustomControl")
      a = document.activeElement;
  }
  if (a != null && a.getAttribute("ScriptClass") != null) {
    var f = ViewDataNode_GetViewDataNodeFromHtml(a);
    if (f.SnippetElement[2] == "CustomControl") {
      a = document.activeElement;
      CustomControl_LoadCustomControlsArray(h, false, true, true, f);
      a = null;
    }
  } else
    a == null &&
      CustomControl_LoadCustomControlsArray(h, false, true, false, null);
  if (a != null && a.parentNode != null)
    try {
      a.blur();
    } catch (i) {}
  c.strControlId = a != null ? a.id : "null";
  c.boolIsRichText = b != null;
  return c;
}
function IPFSRibbon_ExecuteClick(c, e, b, d) {
  ULSrLq:;
  PostbackBody.boolPostbacksBlocked = false;
  Toolbar_ExecuteActionEx(c, e, null, true);
  if (
    PostbackBody.intPostbacksInProgress == 0 &&
    !GlobalFormData.Get(c).boolDocumentClosed
  ) {
    if (PostbackBody_HasBlockedPostback()) {
      PostbackBody_ExecuteBlockedPostback();
      return;
    }
    if (b != null) {
      var a = document.getElementById(b);
      a != null && typeof a.focus == "function" && a.focus();
    }
    if (d) {
      var a = document.getElementById(b);
      a != null && a.setActive();
    }
  }
}
function IPFSRibbon_ExecuteClipboardCommand(f) {
  ULSrLq:;
  Util_StopEventProprogation(Window_GetEvent());
  var e = f.substring(8),
    a = document.body.ownerDocument,
    b = SelectionService_GetSelectedControl();
  if (
    b != null &&
    b.id.indexOf("RTI") != -1 &&
    UserAgentInfo.strBrowser == 1 &&
    window.RTE_EditorWithTheFocus != null
  ) {
    var c = RichTextBox_GetLeafControlFromSelectedRTE(b);
    if (c != null && !c.fV4RTE) {
      var g = RTE_EditorWithTheFocus(),
        d = RTE_GetEditorDocument(g);
      if (d != null) a = d;
    }
  }
  try {
    a.queryCommandEnabled(e) && a.execCommand(e, false, null);
  } catch (h) {
    window.alert(SP.Res.errorClipboard);
  }
}
function IPFSRibbon_Initialize(a) {
  ULSrLq:;
  Perf_Start_Trace(7592, "RibbonInitialize");
  if (CurrentFormData_IsV4UI(a)) {
    var b = true;
    if (window.EnsureScript != null) {
      IPFSRibbon_SetInitialFocus(a);
      IPFSRibbon_RunWhenRibbonIsReady(IPFSRibbon_OnRibbonAvailable);
      b = Util_IsEmptyArray(IPFSRibbon_GetGlobalScript(a));
    }
    if (b && CurrentFormData_IsHosted(a)) {
      document.body.removeAttribute("scroll");
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }
  Perf_End_Trace(7593, "RibbonInitialize");
}
function IPFSRibbon_RunWhenRibbonIsReady(b) {
  ULSrLq:;
  var a = "undefined";
  try {
    a = typeof SP.Ribbon.PageManager;
  } catch (c) {}
  EnsureScript("ribbon", a, b);
}
function IPFSRibbon_OnRibbonAvailable() {
  ULSrLq:;
  if (
    IPFSRibbon_IsFrameworkPresent() &&
    SP.Ribbon.PageManager.get_instance() != null &&
    !IPFSRibbon.g_boolRegistered
  ) {
    IPFSRibbon.FormPageComponent.registerClass(
      "IPFSRibbon.FormPageComponent",
      CUI.Page.PageComponent
    );
    IPFSRibbon.g_arrFormRibbonData = [];
    IPFSRibbon.g_boolRegistered = true;
    if (IPFSRibbon.g_strFocusedFormId != null) {
      IPFSRibbon_RegisterWithPageManager(IPFSRibbon.g_strFocusedFormId);
      CurrentFormData_IsListItemDisplay(IPFSRibbon.g_strFocusedFormId) &&
        window.setTimeout(IPFSRibbon_FocusCurrentlySelectedTab, 0);
    }
  }
}
function IPFSRibbon_FocusCurrentlySelectedTab() {
  ULSrLq:;
  try {
    SP.Ribbon.PageManager.get_instance().get_ribbon().setFocusOnCurrentTab();
  } catch (a) {}
}
function IPFSRibbon_Dispose() {
  ULSrLq:;
  if (IPFSRibbon_IsFrameworkPresent() && IPFSRibbon.g_boolRegistered) {
    IPFSRibbon.g_strFocusedFormId = null;
    for (var b = 0; b < _InfoPath.arrForms.length; b++) {
      var a = IPFSRibbon.g_arrFormRibbonData[_InfoPath.arrForms[b].strFormId];
      a != null &&
        a._objFormPageComponent != null &&
        SP.Ribbon.PageManager.get_instance().removePageComponent(
          a._objFormPageComponent
        );
    }
    IPFSRibbon.g_arrFormRibbonData = null;
    IPFSRibbon.g_boolRegistered = false;
  }
}
function IPFSRibbon_RegisterGlobalKeyboardHandler() {
  ULSrLq:;
  if (
    IPFSRibbon.g_funcPreviousKeyboardHandler == null &&
    document.body.onkeydown != IPFSRibbon_OnKeyDown
  ) {
    IPFSRibbon.g_funcPreviousKeyboardHandler = document.body.onkeydown;
    document.body.onkeydown = IPFSRibbon_OnKeyDown;
  }
}
function IPFSRibbon_UnregisterGlobalKeyboardHandler() {
  ULSrLq:;
  if (document.body.onkeydown == IPFSRibbon_OnKeyDown)
    document.body.onkeydown = IPFSRibbon.g_funcPreviousKeyboardHandler;
  IPFSRibbon.g_funcPreviousKeyboardHandler = null;
}
function IPFSRibbon_OnKeyDown(c) {
  ULSrLq:;
  var a = true,
    b = IPFSRibbon.g_strFocusedFormId;
  if (
    b != null &&
    !Dialog_DialogPresent() &&
    PostbackBody.intPostbacksInProgress == 0 &&
    View_GetTemplateType(b) != 1
  )
    a = KeyboardService_OnKeyDown(b, c);
  if (a && IPFSRibbon.g_funcPreviousKeyboardHandler != null)
    a = IPFSRibbon.g_funcPreviousKeyboardHandler(c);
  return a;
}
IPFSRibbon.FormPageComponent = function (a) {
  ULSrLq:;
  IPFSRibbon.FormPageComponent.initializeBase(this);
  var b = IPFSRibbon_ResolveFormId(a);
  if (b != null) {
    this._id = b.strRibbonId;
    this._formId = a;
  }
};
IPFSRibbon.RichTextEditorFormPageComponent = function () {
  ULSrLq:;
  IPFSRibbon.RichTextEditorFormPageComponent.initializeBase(this);
  this._id = "IPFSRibbonRTEComponent";
  this._unsupportedCommands = [
    RTE.RibbonCommandNames.editingGroup,
    RTE.RibbonCommandNames.linkBehaviorGroup,
    RTE.RibbonCommandNames.tableStyleGroup,
    RTE.RibbonCommandNames.imageStyleGroup,
    RTE.CommandNames.uploadDocumentRTE,
    RTE.CommandNames.insertImageUpload,
    RTE.CommandNames.editImageUpload,
  ];
};
function IPFSRibbon_RegisterWithPageManager(a) {
  ULSrLq:;
  var f = false,
    c,
    e = IPFSRibbon.g_arrFormRibbonData[a];
  if (e != null) c = e._objFormPageComponent;
  else {
    c = new IPFSRibbon.FormPageComponent(a);
    var d = IPFSRibbon_GetRibbonData(a),
      g = [];
    if (!Util.IsEmptyArray(d)) g = IPFSRibbon_GetAvailableCommandNames(a);
    e = new FormRibbonData(c, d, g);
    IPFSRibbon.g_arrFormRibbonData[a] = e;
    f = true;
  }
  var b = IPFSRibbon_GetAvailableCommandNames(a);
  if (!Util.IsEmptyArray(b)) {
    if (_InfoPath.arrForms.length > 1) {
      var d = IPFSRibbon_GetRibbonData(a);
      if (d != null && d[1] == null)
        if (b[b.length - 1] != "InfoPathQuerySelectedView") {
          b.push(
            CurrentFormData.IsListItemMode(a)
              ? "InfoPathListTabViews"
              : "InfoPathHomeTabViews"
          );
          b.push("InfoPathFormViews");
          b.push("InfoPathQuerySelectedView");
        }
    }
    f && SP.Ribbon.PageManager.get_instance().addPageComponent(c);
    IPFSRibbon_FocusForm(a, c);
  }
}
function IPFSRibbon_FocusForm(c, d) {
  ULSrLq:;
  var b = null,
    e = SP.Ribbon.WebPartComponent.get_instance();
  if (e != null) {
    var a = document.getElementById(c);
    if (
      a != null &&
      Util_IsNonEmptyString(a.parentNode.getAttribute("WebPartID"))
    ) {
      b = a.parentNode.id;
      b != null && e.selectWebPartById(b, true);
    }
  }
  if (!d._isFocused) {
    var f = SP.Ribbon.PageManager.get_instance();
    f.get_focusManager().requestFocusForComponent(d);
    f.get_commandDispatcher().executeCommand(
      Commands.CommandIds.ApplicationStateChanged,
      null
    );
    !SelectionService_IsManagingPageFocus(c) && IPFSRibbon_TryToSelectTab(c);
  }
  IPFSRibbon_RegisterGlobalKeyboardHandler();
}
function IPFSRibbon_UnregisterWithPageManager(b) {
  ULSrLq:;
  if (IPFSRibbon.g_arrFormRibbonData == null) return;
  IPFSRibbon_UnregisterGlobalKeyboardHandler();
  var a = IPFSRibbon.g_arrFormRibbonData[b];
  if (a != null) {
    SP.Ribbon.PageManager.get_instance().removePageComponent(
      a._objFormPageComponent
    );
    SP.Ribbon.PageManager.get_instance()
      .get_commandDispatcher()
      .executeCommand(Commands.CommandIds.ApplicationStateChanged, null);
    IPFSRibbon.g_arrFormRibbonData[b] = null;
  }
}
function IPFSRibbon_TryToSelectTab(b) {
  ULSrLq:;
  var a;
  if (!CurrentFormData_IsListItemMode(b)) a = "InfoPathHomeTab";
  else if (CurrentFormData_IsListItemDisplay(b)) a = "InfoPathListDisplayTab";
  else a = "InfoPathListTab";
  window.setTimeout(function () {
    ULSrLq:;
    SelectRibbonTab("Ribbon.ContextualTabs." + a, false);
  }, 0);
}
function IPFSRibbon_IsRichTextEnabled() {
  ULSrLq:;
  var a = SelectionService_GetSelectedControl();
  if (a != null) {
    var c = a.getAttribute("ScriptClass"),
      b = ViewDataNode_GetViewDataNodeFromHtml(a);
    if (c == "Container") {
      var d = ViewDataNode_GetChildNodes(b)[0];
      a = document.getElementById(d[9]);
      c = a.getAttribute("ScriptClass");
    }
    if (c == "RichTextBox") {
      var b = ViewDataNode_GetViewDataNodeFromHtml(a);
      if (b != null) return !ViewDataNode_IsDisabled(b);
      return false;
    }
  } else {
    if (typeof RTE != "undefined" && RTE != null && RTE.Canvas != null)
      return RTE.Canvas.currentEditableRegion();
    return false;
  }
}
IPFSRibbon.FormPageComponent.prototype = {
  _id: null,
  _isFocused: false,
  init: function () {},
  getFocusedCommands: function () {
    ULSrLq:;
    var a = IPFSRibbon_GetFocusedFormControlId();
    return a != null ? IPFSRibbon_GetAvailableCommandNames(a) : [];
  },
  getGlobalCommands: function () {
    ULSrLq:;
    return [];
  },
  canHandleCommand: function (a) {
    ULSrLq:;
    var d = IPFSRibbon_GetFocusedFormControlId();
    if (d == this.getFormId()) {
      if (a.length < 8 || a.substring(0, 8) != "InfoPath") return false;
      for (
        var c = IPFSRibbon_GetAvailableCommandNames(d), b = 0;
        b < c.length;
        b++
      )
        if (c[b] == a) return true;
    }
    return false;
  },
  handleCommand: function (b, c) {
    ULSrLq:;
    var a = IPFSRibbon_GetFocusedFormControlId();
    if (a != this.getFormId()) return false;
    if (b.length < 8 || b.substring(0, 8) != "InfoPath") return false;
    switch (b) {
      case "InfoPathFormSave":
        IPFSRibbon_HandleButtonClick(a, "save");
        break;
      case "InfoPathFormSaveAs":
        IPFSRibbon_HandleButtonClick(a, "saveAs");
        break;
      case "InfoPathFormClose":
      case "InfoPathListDisplayClose":
        IPFSRibbon_HandleButtonClick(a, "close");
        break;
      case "InfoPathFormPrintView":
        Print_ShowFromRibbon(a);
        break;
      case "InfoPathFormUpdate":
        IPFSRibbon_HandleButtonClick(a, "refresh");
        break;
      case "InfoPathFormSubmit":
      case "InfoPathListSubmit":
        IPFSRibbon_HandleButtonClick(a, "submit");
        break;
      case "InfoPathListDeleteItem":
      case "InfoPathListDisplayDelete":
        IPFSRibbon_HandleButtonClick(a, "deleteItem");
        break;
      case "InfoPathQuerySelectedView":
        IPFSRibbon_SelectInitialView(a, c);
        break;
      case "InfoPathPopulateViews":
        c.PopulationXML = IPFSRibbon_GetViewsDropdownXML();
        break;
      case "InfoPathSelectView":
        IPFSRibbon_HandleViewChange(a, c.CommandValueId);
        break;
      case "InfoPathCut":
      case "InfoPathPaste":
      case "InfoPathCopy":
        IPFSRibbon_ExecuteClipboardCommand(b);
        break;
      case "InfoPathFormViews":
      case "InfoPathListViews":
        break;
      case "InfoPathListDisplayEdit":
        IPFSRibbon_HandleButtonClick(a, "editItem");
        break;
      case "InfoPathListDisplayAlertMe":
        IPFSRibbon_HandleButtonClick(a, "alertMe");
        break;
      default:
        return false;
    }
    return true;
  },
  isFocusable: function () {
    ULSrLq:;
    return true;
  },
  receiveFocus: function () {
    ULSrLq:;
    this._isFocused = true;
    IPFSRibbon_SetFocusedForm(this.getFormId());
    IPFSRibbon.g_richTextComponent != null &&
      IPFSRibbon.g_richTextComponent.receiveFocus();
    return true;
  },
  yieldFocus: function () {
    ULSrLq:;
    this._isFocused = false;
    IPFSRibbon.g_richTextComponent != null &&
      IPFSRibbon.g_richTextComponent.yieldFocus();
    if (!IPFSRibbon.g_boolChangingFocus) {
      IPFSRibbon_UnregisterGlobalKeyboardHandler();
      IPFSRibbon.g_strFocusedFormId = null;
    }
    return true;
  },
  getId: function () {
    ULSrLq:;
    return this._id;
  },
  getFormId: function () {
    ULSrLq:;
    return this._formId;
  },
};
IPFSRibbon.RichTextEditorFormPageComponent.prototype = {
  _id: null,
  _previousProvider: null,
  _unsupportedCommands: null,
  _isFocused: false,
  init: function (a) {
    ULSrLq:;
    if (a != this) this._previousProvider = a;
    if (IPFSRibbon.g_strFocusedFormId != null) this._isFocused = true;
  },
  getFocusedCommands: function () {
    ULSrLq:;
    return this._previousProvider != null
      ? this._previousProvider.getFocusedCommands()
      : [];
  },
  getGlobalCommands: function () {
    ULSrLq:;
    return this._previousProvider != null
      ? this._previousProvider.getGlobalCommands()
      : [];
  },
  canHandleCommand: function (a) {
    ULSrLq:;
    if (this._isFocused && Util_IndexOf(this._unsupportedCommands, a) >= 0)
      return false;
    return this._previousProvider != null
      ? this._previousProvider.canHandleCommand(a)
      : false;
  },
  handleCommand: function (a, b, c) {
    ULSrLq:;
    if (this._previousProvider != null) {
      if (this._isFocused)
        switch (a) {
          case RTE.CommandNames.insertImage:
            a = RTE.CommandNames.insertImageWeb;
            break;
          case RTE.CommandNames.imageEdit:
            a = RTE.CommandNames.editImageWeb;
        }
      return this._previousProvider.handleCommand(a, b, c);
    }
    return false;
  },
  isFocusable: function () {
    ULSrLq:;
    return true;
  },
  receiveFocus: function () {
    ULSrLq:;
    if (
      typeof RTE != "undefined" &&
      RTE != null &&
      IPFSRibbon.g_strFocusedFormId != null
    )
      this._isFocused = true;
    return true;
  },
  yieldFocus: function () {
    ULSrLq:;
    if (typeof RTE != "undefined" && RTE != null) this._isFocused = false;
    return true;
  },
  getId: function () {
    ULSrLq:;
    return this._id;
  },
};
function IPFSRibbon_EnsureRichTextEditorFormPageComponent() {
  ULSrLq:;
  if (IPFSRibbon.g_richTextComponent == null) {
    IPFSRibbon.g_richTextComponent = new IPFSRibbon.RichTextEditorFormPageComponent();
    RTE.RichTextEditorComponentProvider.register(
      IPFSRibbon.g_richTextComponent
    );
  }
}
function GlobalFormData() {}
function GlobalFormData_InitializeDefaultValues(a) {
  ULSrLq:;
  a.viewTreesAreMerged = false;
  a.submitCalled = false;
  a.viewDataNodeNeedReRendering = false;
  a.boolFinalMessageShown = false;
  a.selectedControl = null;
  a.stickyHighlightControls = [];
  a.nonStickyHighlightControls = [];
  a.boolNeedPostBack = false;
  a.objFocusedToolbarControl = null;
  a.intKeyboardViewSwitchOldIndex = -1;
  a.arrLastFocusedFormControl = null;
  a.g_rgControlsTabOrder = null;
  a._arrChoiceGroupsMultipleBindingMap = null;
  a.auxDomCache = [];
  a.g_hasFormBeenSaved = false;
  a.mslbCollectionScrollPosition = [];
  a.mslbCollectionCheckboxToFocus = -1;
  a.v3RichTextControlOnFormInIE = false;
}
GlobalFormData.Get = function (b) {
  ULSrLq:;
  if (GlobalFormData.g_objGlobalFormData == null)
    GlobalFormData.g_objGlobalFormData = [];
  var a = GlobalFormData.g_objGlobalFormData[b];
  if (a == null) {
    a = {};
    GlobalFormData_InitializeDefaultValues(a);
    GlobalFormData.g_objGlobalFormData[b] = a;
  }
  return a;
};
function AccessibilityIFrame_RefreshIFrame() {}
function Canary() {}
function Canary_Initialize() {
  ULSrLq:;
  if (typeof Canary.intCanaryTimer == "undefined") {
    Canary.intCanaryTimer = null;
    Canary.intFailedRequests = 0;
    Canary.objXMLHttp = null;
    Canary.intActiveSessionsTimeout = (1.8e6 * 2) / 6e4;
    Canary_StartTimer(1.8e6);
  }
}
function Canary_StartTimer(a) {
  ULSrLq:;
  Canary_StopTimer();
  Canary.intCanaryTimer = window.setInterval(Canary_RefreshTimerCallback, a);
}
function Canary_StopTimer() {
  ULSrLq:;
  if (Canary.intCanaryTimer != null) {
    window.clearInterval(Canary.intCanaryTimer);
    Canary.intCanaryTimer = null;
  }
}
function Canary_CreateRequestMessage() {
  ULSrLq:;
  if (CurrentFormData.g_objCurrentFormData == null) return null;
  var a = [],
    e = new Date();
  for (var b in CurrentFormData.g_objCurrentFormData)
    if (Canary_GetSessionExpirationTime(b) > e) {
      var d = Util_Trim(CurrentFormData_SolutionId(b));
      if (Util_IsNonEmptyString(d)) {
        var c = Util_Trim(CurrentFormData_GetCanaryValue(b));
        if (Util_IsNonEmptyString(c)) {
          a.push(d);
          a.push(c);
        }
      }
    }
  return a.join("\n");
}
function Canary_GetSessionExpirationTime(b) {
  ULSrLq:;
  var a = new Date(
    DateUtils_JScriptTicksFromDotNetTicks(CurrentFormData_CreationTime(b))
  );
  a.setMinutes(a.getMinutes() + Canary.intActiveSessionsTimeout);
  return a;
}
function Canary_GetRequestURL() {
  ULSrLq:;
  return (
    CurrentFormData.SiteUrl(_InfoPath.GetFirstControl().strFormId) +
    "/_layouts/Postback.FormServer.aspx?canary=Y"
  );
}
function Canary_SendCanaryRequest(a) {
  ULSrLq:;
  try {
    a.open("POST", Canary_GetRequestURL(), true);
    var b = Canary_CreateRequestMessage();
    Util_IsNonEmptyString(b) && a.send(b);
  } catch (c) {
    Canary_HandleConnectionProblems();
  }
}
function Canary_HandleConnectionProblems() {
  ULSrLq:;
  Canary.intFailedRequests += 1;
  if (Canary.intFailedRequests == 1) Canary_StartTimer(3e5);
  else Canary.intFailedRequests > 6 && Canary_StopTimer();
}
function Canary_RefreshTimerCallback() {
  ULSrLq:;
  if (PostbackBody._boolXmlHttpSupported) {
    var a = Canary_DetectAndCreateXmlHttp();
    a != null && Canary_SendCanaryRequest(a);
  } else Canary_StopTimer();
}
function Canary_DetectAndCreateXmlHttp() {
  ULSrLq:;
  var a = PostbackBody_DetectAndCreateXmlHttpHelper();
  if (a != null) {
    Canary.objXMLHttp = a;
    a.onreadystatechange = Canary_OnReadyStateChangeCallback;
  } else Canary_StopTimer();
  return a;
}
function Canary_OnReadyStateChangeCallback() {
  ULSrLq:;
  var objXmlHttp = Canary.objXMLHttp;
  if (objXmlHttp != null && objXmlHttp.readyState == 4) {
    Canary.objXMLHttp = null;
    if (objXmlHttp.status == 200) {
      if (Canary.intFailedRequests > 0) {
        Canary_StartTimer(1.8e6);
        Canary.intFailedRequests = 0;
      }
      var objServerReply = eval("(" + objXmlHttp.responseText + ")");
      Canary.intActiveSessionsTimeout = objServerReply.intActiveSessionsTimeout;
      if (!Util_IsNullOrUndefined(objServerReply.objNewCanaries))
        Canary_UpdateCanaryValues(objServerReply.objNewCanaries);
      else Canary_StopTimer();
    } else Canary_HandleConnectionProblems();
  }
}
function Canary_UpdateCanaryValues(b) {
  ULSrLq:;
  if (CurrentFormData.g_objCurrentFormData == null) return;
  if (typeof b == "object")
    for (var a in CurrentFormData.g_objCurrentFormData) {
      var c = CurrentFormData_SolutionId(a);
      if (Util_IsNonEmptyString(c)) {
        var d = b[c];
        if (Util_IsNonEmptyString(d)) {
          CurrentFormData_SetCanaryValue(a, d);
          EventLog_EnsureEventLogStartEntry(a);
        }
      }
    }
}
function BaseControl() {}
BaseControl._objDoubleFormatting = new DoubleFormatting();
BaseControl._objDateFormatting = new DateFormatting();
BaseControl._objNoFormatting = new NoFormatting();
BaseControl.GetValueFromControl = BaseControl_GetValueFromControl;
function BaseControl_GetValueFromControl() {
  ULSrLq:;
  return null;
}
BaseControl.GetSecondaryValueFromControl = BaseControl_GetSecondaryValueFromControl;
function BaseControl_GetSecondaryValueFromControl() {
  ULSrLq:;
  return null;
}
BaseControl.SetValueOfControl = BaseControl_SetValueOfControl;
function BaseControl_SetValueOfControl(a) {
  ULSrLq:;
  return a;
}
BaseControl.RefreshControlData = BaseControl_RefreshControlData;
function BaseControl_RefreshControlData() {}
BaseControl.GetFormatting = BaseControl_GetFormatting;
function BaseControl_GetFormatting(c) {
  ULSrLq:;
  var e = c.FormId,
    b = c.SnippetElement,
    f = b[5],
    a = LeafControl_GetFormatting(b),
    d = a[0];
  d.Reinit(e, a[1]);
  return d;
}
BaseControl.k_strDirection = [];
BaseControl.k_strDirection[0] = "inherit";
BaseControl.k_strDirection[1] = "ltr";
BaseControl.k_strDirection[2] = "rtl";
BaseControl.GetOriginalId = BaseControl_GetOriginalId;
function BaseControl_GetOriginalId(a) {
  ULSrLq:;
  if (a != null) return a.getAttribute("OriginalId");
  return null;
}
BaseControl.OnClick = BaseControl_OnClick;
function BaseControl_OnClick(a, d) {
  ULSrLq:;
  var c = ViewDataNode_GetViewDataNodeFromHtml(a);
  if (ViewDataNode_IsDisabled(c)) return;
  var b = c.FormId;
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(b) != 1
    )
  ) {
    SelectionService_Select(a);
    return;
  }
  IP_DatePicker.Close != null && IP_DatePicker.Close(b);
  IPFSRibbon_SetFocusedForm(b);
  SelectionService_Select(a);
  Util_StopEventProprogation(d);
  return false;
}
BaseControl.OnChange = BaseControl_OnChange;
function BaseControl_OnChange(a) {
  ULSrLq:;
  var b = ViewDataNode_GetViewDataNodeFromHtml(a),
    c = b.FormId;
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(c) != 1
    )
  ) {
    b._boolDirty = true;
    return;
  }
  a.getAttribute("serverProcessed") == "true" &&
    a.setAttribute("serverProcessed", "false");
}
BaseControl.RequiresImplicitRoundTrip = BaseControl_RequiresImplicitRoundTrip;
function BaseControl_RequiresImplicitRoundTrip(b) {
  ULSrLq:;
  var a = Snippet_GetRoundTripModel(b);
  return a == 1;
}
BaseControl.OnMouseOver = BaseControl_OnMouseOver;
function BaseControl_OnMouseOver(a, d) {
  ULSrLq:;
  var c = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(c) != 1
    )
  )
    return;
  var b = LeafControl_IsLeafControl(a);
  SelectionService_Highlight(a, false, !b);
  !b && Util_StopEventProprogation(d);
  return false;
}
BaseControl.ShouldShiftAsteriskIn = BaseControl_ShouldShiftAsteriskIn;
function BaseControl_ShouldShiftAsteriskIn() {
  ULSrLq:;
  return false;
}
BaseControl.OnMouseOut = BaseControl_OnMouseOut;
function BaseControl_OnMouseOut(a, c) {
  ULSrLq:;
  var b = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(b) != 1
    )
  )
    return;
  SelectionService_RemoveHighlight(a, false);
  !LeafControl_IsLeafControl(a) && Util_StopEventProprogation(c);
  return false;
}
BaseControl.OnMouseDown = BaseControl_OnMouseDown;
function BaseControl_OnMouseDown() {}
BaseControl.OnMouseUp = BaseControl_OnMouseUp;
function BaseControl_OnMouseUp() {}
BaseControl.OnAfterCreate = BaseControl_OnAfterCreate;
function BaseControl_OnAfterCreate() {}
BaseControl.OnFocus = BaseControl_OnFocus;
function BaseControl_OnFocus(a, c) {
  ULSrLq:;
  var b = ViewDataNode_GetViewDataNodeFromHtml(a),
    d = b.FormId;
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(d) != 1
    )
  ) {
    SelectionService_Select(a);
    SelectionService_RememberFocus(a, c);
    Util_StopEventProprogation(c);
    return false;
  }
  SelectionService_Select(a);
  SelectionService_RememberFocus(a, c);
  IP_DatePicker.Close != null && IP_DatePicker.Close(d);
  IPFSRibbon_SetFocusedForm(d);
  Util_StopEventProprogation(c);
  var g = b.SnippetElement.ControlType["IsInFocusableState"];
  if (!g(b))
    if (a.tagName == "SELECT") {
      var e = ViewDataNode_FindNext(b);
      if (e != null) {
        var f = document.getElementById(e[9]);
        f != null && f.focus();
      }
    }
  return false;
}
BaseControl.IsFocusable = BaseControl_IsFocusable;
function BaseControl_IsFocusable() {
  ULSrLq:;
  return false;
}
BaseControl.IsInFocusableState = BaseControl_IsInFocusableState;
function BaseControl_IsInFocusableState(a) {
  ULSrLq:;
  if (a.SnippetElement[17] < 0 || !BaseControl_IsInSelectableState(a))
    return false;
  var b = a.SnippetElement.ControlType["IsFocusable"];
  return b();
}
BaseControl.IsInSelectableState = BaseControl_IsInSelectableState;
function BaseControl_IsInSelectableState(a) {
  ULSrLq:;
  return !ViewDataNode_IsHidden(a);
}
BaseControl.SetAriaInvalidAttribute = BaseControl_SetAriaInvalidAttribute;
function BaseControl_SetAriaInvalidAttribute(b, a) {
  ULSrLq:;
  var c = b.getAttribute("aria-invalid");
  c != a && b.setAttribute("aria-invalid", a);
}
BaseControl.OnKeyPress = BaseControl_OnKeyPress;
function BaseControl_OnKeyPress() {
  ULSrLq:;
  return true;
}
BaseControl.OnBlur = BaseControl_OnBlur;
function BaseControl_OnBlur(a, d) {
  ULSrLq:;
  var c = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(c) != 1
    )
  )
    return;
  if (PostbackBody.IsPostingBack()) return;
  var b = SelectionService_GetSelectedControl();
  b == a && SelectionService_Select(null);
  Util_StopEventProprogation(d);
  return false;
}
BaseControl.IsSelected = BaseControl_IsSelected;
function BaseControl_IsSelected(a) {
  ULSrLq:;
  return SelectionService_IsSelected(a);
}
BaseControl.Select = BaseControl_Select;
function BaseControl_Select(b) {
  ULSrLq:;
  SelectionService_Highlight(b, true, false);
  var c = b.getAttribute("ScriptClass");
  if (c != "Container") {
    var a = BaseControl_GetParentInfoPathControl(b);
    if (c == "RichTextBox") {
      var d = BaseControl_GetParentInfoPathControl(a);
      a = BaseControl_GetParentInfoPathControl(d);
    }
    a != null && SelectionService_Highlight(a, true, true);
  }
}
BaseControl.UnSelect = BaseControl_UnSelect;
function BaseControl_UnSelect(a) {
  ULSrLq:;
  SelectionService_RemoveHighlight(a, true);
  if (a.getAttribute("ScriptClass") != "Container") {
    var b = BaseControl_GetParentInfoPathControl(a);
    b != null && SelectionService_RemoveHighlight(b, true);
  }
}
BaseControl.RefreshVisualState = BaseControl_RefreshVisualState;
function BaseControl_RefreshVisualState(b) {
  ULSrLq:;
  var c,
    d = true,
    a = ViewDataNode_GetViewDataNodeFromHtml(b),
    j = a.FormId,
    e = a.SnippetElement,
    i = a.SnippetElement[2];
  if (i == "Container") {
    var f = "HasEditingActions",
      g = b.getAttribute(f);
    if (g == null) {
      d = HoverMenu.GenerateMenuHtml(j, b) != "";
      b.setAttribute(f, d ? "true" : "false");
    } else d = g == "true";
  }
  if (!d) {
    c = 0;
    HoverMenu_SetWidgetTabIndex(b, -1);
  } else {
    if (i == "Container") {
      var l = Container_GetWidgetTabIndexFromSnippet(e);
      HoverMenu_SetWidgetTabIndex(b, l);
    }
    var h = SelectionService_GetHighlightState(b);
    if (BaseControl_IsSelected(b)) c = 2;
    else if (
      SelectionService_IsIpInState(h) ||
      SelectionService_IsHoverInState(h)
    )
      c = 1;
    else c = 0;
  }
  if (LeafControl_IsLeafControl(b) && View_GetTemplateType(j) != 1)
    if (!ViewDataNode_IsHidden(a)) {
      var n = a.SnippetElement.ControlType["IsValid"],
        e = a.SnippetElement;
      if (n(a))
        e[13] &&
          ErrorVisualization_IsAsteriskVisible(a) &&
          ErrorVisualization_HideAsterisk(b, a);
      else if (e[13]) {
        var m = a.SnippetElement.ControlType["IsBlank"];
        if (m(a))
          a._keyPressed !== true && ErrorVisualization_ShowAsterisk(b, a);
        else {
          ErrorVisualization_IsAsteriskVisible(a) &&
            ErrorVisualization_HideAsterisk(b, a);
          c = 3;
        }
      } else c = 3;
    }
  BaseControl__ApplyCssClasses(b, c);
  var k = a.SnippetElement.ControlType["MoveStyles"];
  k(b);
}
BaseControl.MoveStyles = BaseControl_MoveStyles;
function BaseControl_MoveStyles() {}
BaseControl.SelectText = BaseControl_SelectText;
function BaseControl_SelectText(a) {
  ULSrLq:;
  var c =
      g_arrControlTypes[a.getAttribute("ScriptClass")][
        "GetControlForSelectText"
      ],
    b = c(a);
  if (b != null)
    try {
      var d =
        g_arrControlTypes[a.getAttribute("ScriptClass")]["SelectTextOnControl"];
      d(b);
    } catch (e) {}
}
BaseControl.SelectTextOnControl = BaseControl_SelectTextOnControl;
function BaseControl_SelectTextOnControl(a) {
  ULSrLq:;
  BaseControl_Focus(a);
  a.select();
}
BaseControl.GetControlForSelectText = BaseControl_GetControlForSelectText;
function BaseControl_GetControlForSelectText(a) {
  ULSrLq:;
  return a;
}
BaseControl.RestoreFocus = BaseControl_RestoreFocus;
function BaseControl_RestoreFocus(a) {
  ULSrLq:;
  BaseControl_Focus(a);
}
BaseControl.Focus = BaseControl_Focus;
function BaseControl_Focus(a) {
  ULSrLq:;
  SelectionService_Select(a);
  try {
    a.focus();
  } catch (b) {}
}
BaseControl.Highlight = BaseControl_Highlight;
function BaseControl_Highlight() {}
BaseControl.RemoveHighlight = BaseControl_RemoveHighlight;
function BaseControl_RemoveHighlight() {}
BaseControl.GetSecondaryDataNodes = BaseControl_GetSecondaryDataNodes;
function BaseControl_GetSecondaryDataNodes() {
  ULSrLq:;
  return null;
}
BaseControl.IsValid = BaseControl_IsValid;
function BaseControl_IsValid(a) {
  ULSrLq:;
  return ViewDataNode_IsValid(a);
}
BaseControl.IsBlank = BaseControl_IsBlank;
function BaseControl_IsBlank(a) {
  ULSrLq:;
  return ViewDataNode_IsBlank(a);
}
BaseControl.GetDirection = BaseControl_GetDirection;
function BaseControl_GetDirection(c, b) {
  ULSrLq:;
  var a = 0;
  if (g_objSnippetTree[c] != b) a = b[10];
  if (a == undefined || a == 0) a = View_GetDirection(c);
  return a;
}
function BaseControl_GetDirectionString(b, a) {
  ULSrLq:;
  return BaseControl.k_strDirection[BaseControl_GetDirection(b, a)];
}
function BaseControl_GetTextAlignment(b, a) {
  ULSrLq:;
  switch (BaseControl_GetDirection(b, a)) {
    case 0:
      return "inherit";
    case 2:
      return "right";
    default:
      return "left";
  }
}
BaseControl.GetContainerId = BaseControl_GetContainerId;
function BaseControl_GetContainerId(a) {
  ULSrLq:;
  return a.substr(0, a.lastIndexOf("_"));
}
BaseControl.FindFirstFocusableDescendantControl = BaseControl_FindFirstFocusableDescendantControl;
function BaseControl_FindFirstFocusableDescendantControl(c) {
  ULSrLq:;
  var b = null,
    a;
  if (c != null) {
    a = ViewDataNode_GetViewDataNodeFromHtml(c);
    if (a.SnippetElement[2] == "DatePickerButton") {
      var d = IP_DatePicker.GetTextBoxControl(c);
      if (d != null) {
        c = d;
        a = ViewDataNode_GetViewDataNodeFromHtml(c);
      }
    }
    if (a.SnippetElement[18] >= 1)
      b = BaseControl__FindNextFocusableViewDataNodeInSubtree(a, 1);
    if (b == null)
      b = BaseControl__FindNextFocusableViewDataNodeInSubtree(a, 0);
  }
  if (b == null) return null;
  else return document.getElementById(b[9]);
}
BaseControl.FindFirstFocusableControl = BaseControl_FindFirstFocusableControl;
function BaseControl_FindFirstFocusableControl(c) {
  ULSrLq:;
  if (c != null) {
    var b = ViewDataNode_GetViewDataNodeFromHtml(c),
      f = b.SnippetElement[2];
    if (f == "DatePickerButton") {
      var h = IP_DatePicker.GetTextBoxControl(c);
      if (h != null) {
        c = h;
        b = ViewDataNode_GetViewDataNodeFromHtml(c);
        f = b.SnippetElement[2];
      }
    }
    var i = b.SnippetElement.ControlType["IsInFocusableState"];
    if (i(b)) return c;
    var e = CurrentFormData_ViewDataTree(b.FormId),
      j = e.SnippetElement,
      a;
    if (e.SnippetElement[18] <= 0) a = 0;
    else {
      var g = b.SnippetElement;
      a = g[17];
      if (a <= 0 || a == null)
        if (f == "Container") {
          a = Container_GetWidgetTabIndexFromSnippet(g);
          if (a < 0 || a == null) a = 1;
        } else a = 1;
    }
    var d = null;
    if (j[18] >= a) d = BaseControl__FindNextFocusableViewDataNode(b, a);
    if (d == null) d = BaseControl__FindNextFocusableViewDataNode(e, 0);
    if (d != null) return document.getElementById(d[9]);
  }
  return null;
}
function BaseControl__FindNextFocusableViewDataNode(g, b) {
  ULSrLq:;
  var d = g,
    a,
    c,
    h,
    i,
    e;
  a = BaseControl__FindNextFocusableViewDataNodeInSubtree(d, b);
  c = BaseControl__GetTabIndexFromViewData(a);
  if (c == b) return a;
  e = g._objViewDataNodeParent;
  while (e != null) {
    h = BaseControl__FindNextFocusableViewDataNodeInFollowingSiblingsAndTheirSubtrees(
      d,
      b
    );
    i = BaseControl__GetTabIndexFromViewData(h);
    if (i < c) {
      a = h;
      c = i;
      if (c == b) return a;
    }
    d = e;
    e = e._objViewDataNodeParent;
  }
  b = b + 1;
  if (c == b) return a;
  var j = g.SnippetElement.ControlType["IsInFocusableState"];
  if (j(g)) {
    var f = BaseControl__GetTabIndexFromViewData(d);
    if (f < c && f >= b) {
      a = d;
      c = f;
      if (f == b) return a;
    }
  }
  a = BaseControl__FindNextFocusableViewDataNodeInSubtree(d, b);
  return a;
}
function BaseControl__FindNextFocusableViewDataNodeInSubtree(b, c) {
  ULSrLq:;
  var a = ViewDataNode_GetChildNodes(b);
  if (
    a == null ||
    a.length == 0 ||
    b.SnippetElement[18] < c ||
    ViewDataNode_IsHidden(b)
  )
    return null;
  return BaseControl__FindNextFocusableViewDataNodeInArray(
    a,
    0,
    a.length - 1,
    c
  );
}
function BaseControl__FindNextFocusableViewDataNodeInFollowingSiblingsAndTheirSubtrees(
  b,
  e
) {
  ULSrLq:;
  var a = b._objViewDataNodeParent;
  if (a == null) return null;
  var d = ViewDataNode_GetPositionInParentArray(b),
    c = ViewDataNode_GetChildNodes(a);
  return BaseControl__FindNextFocusableViewDataNodeInArray(
    c,
    d + 1,
    c.length - 1,
    e
  );
}
function BaseControl__FindNextFocusableViewDataNodeInArray(j, k, l, g) {
  ULSrLq:;
  for (
    var b,
      a,
      d = null,
      c = BaseControl__GetTabIndexFromViewData(d),
      e,
      f,
      h = k;
    h <= l;
    h++
  ) {
    a = j[h];
    if (a != null) {
      var i = a.SnippetElement.ControlType["IsInFocusableState"];
      if (i(a)) {
        b = BaseControl__GetTabIndexFromViewData(a);
        if (b >= g && b < c) {
          if (b == g) return a;
          d = a;
          c = b;
        }
      }
      e = BaseControl__FindNextFocusableViewDataNodeInSubtree(a, g);
      f = BaseControl__GetTabIndexFromViewData(e);
      if (f < c) {
        if (f == g) return e;
        c = f;
        d = e;
      }
    }
  }
  return d;
}
BaseControl.GetChildInfoPathControls = BaseControl_GetChildInfoPathControls;
function BaseControl_GetChildInfoPathControls(b) {
  ULSrLq:;
  var a = [];
  BaseControl__FindInfoPathChildControls(b, a);
  return a;
}
BaseControl.GetParentInfoPathControl = BaseControl_GetParentInfoPathControl;
function BaseControl_GetParentInfoPathControl(b) {
  ULSrLq:;
  var a = b.parentNode;
  while (
    !(a == null || a.tagName == null || a.tagName.toLowerCase() == "body")
  ) {
    if (BaseControl_IsInfoPathControl(a)) return a;
    a = a.parentNode;
  }
  return null;
}
BaseControl.GetPreviousSiblingInfoPathControl = BaseControl_GetPreviousSiblingInfoPathControl;
function BaseControl_GetPreviousSiblingInfoPathControl(c) {
  ULSrLq:;
  var e = BaseControl_GetParentInfoPathControl(c),
    b = BaseControl_GetChildInfoPathControls(e);
  if (!BaseControl_IsInfoPathControl(c)) return null;
  for (var d = b.length, a = 0; a < d; a++)
    if (c == b[a])
      if (a == 0) return null;
      else return b[a - 1];
  return null;
}
BaseControl.GetNextSiblingInfoPathControl = BaseControl_GetNextSiblingInfoPathControl;
function BaseControl_GetNextSiblingInfoPathControl(d) {
  ULSrLq:;
  var e = BaseControl_GetParentInfoPathControl(d),
    c = BaseControl_GetChildInfoPathControls(e);
  if (!BaseControl_IsInfoPathControl(d)) return null;
  var b = c.length;
  if (b > 0) {
    b--;
    for (var a = 0; a < b; a++) if (d == c[a]) return c[a + 1];
  }
  return null;
}
function BaseControl__FindInfoPathChildControls(e, c) {
  ULSrLq:;
  for (var d = e.childNodes, b = 0; b < d.length; b++) {
    var a = d[b];
    if (BaseControl_IsInfoPathControl(a)) c.push(a);
    else BaseControl__FindInfoPathChildControls(a, c);
  }
}
BaseControl.IsInfoPathControl = BaseControl_IsInfoPathControl;
function BaseControl_IsInfoPathControl(a) {
  ULSrLq:;
  var b = null;
  if (a != null && a.getAttribute != null) b = a.getAttribute("ScriptClass");
  return Util_IsNonEmptyString(b);
}
function BaseControl_NotSupportedFunction() {}
function BaseControl_FireOnAfterCreate(a) {
  ULSrLq:;
  var b = a.SnippetElement.ControlType["OnAfterCreate"];
  b(a);
}
BaseControl.SetDisable = BaseControl_SetDisable;
function BaseControl_SetDisable(a, b) {
  ULSrLq:;
  if (b) a.setAttribute("disabled", "disabled");
  else a.removeAttribute("disabled");
}
function BaseControl_CanHandleEventsNoPrintCheck() {
  ULSrLq:;
  return !Dialog_DialogPresent() && PostbackBody.intPostbacksInProgress == 0;
}
BaseControl.SetHidden = BaseControl_SetHidden;
function BaseControl_SetHidden() {}
BaseControl.SetDisplay = BaseControl_SetDisplay;
function BaseControl_SetDisplay(b, a) {
  ULSrLq:;
  b.style.display = a;
}
function BaseControl__ApplyCssClasses(b, d) {
  ULSrLq:;
  var a = ViewDataNode_GetViewDataNodeFromHtml(b),
    c = a.SnippetElement,
    g = c[2];
  if (g == "MultiSelectListBoxItem")
    MultiSelectListBoxItem_SetCssClasses(b, c[3], d, a);
  else {
    BaseControl__SetCssClasses(b, c[3], d, a);
    if (c[5] == 3 || c[5] == 8)
      if (b.getAttribute("wrapped") == "true") {
        var h = LeafControl_GetWrappingSpan(b);
        BaseControl__SetCssClasses(h, c[6][4], d, a);
      }
  }
  var f = c.ControlType["SetDisable"];
  f(b, ViewDataNode_IsDisabled(a));
  var e = c.ControlType["SetDisplay"];
  if (ViewDataNode_IsHidden(a)) {
    if (a.backUpDisplay == null && b.style.display == "none")
      a.backUpDisplay = b.style.display;
    e(b, "none");
  } else if (b.style.display == "none")
    if (a.backUpDisplay == null || a.backUpDisplay == "none") {
      e(b, "");
      a.backUpDisplay = null;
    } else e(b, a.backUpDisplay);
}
function BaseControl__SetCssClasses(b, e, c, d) {
  ULSrLq:;
  var a = BaseControl_ComputeCssClasses(d, e, c, true);
  if (b.className != a) b.className = a;
}
BaseControl.RenderTemplateItem = BaseControl_RenderTemplateItem;
function BaseControl_RenderTemplateItem(a, g, b, h, f) {
  ULSrLq:;
  var c = false;
  switch (Util_GetDataType(a)) {
    case 2:
      f.push(a);
      c = true;
      break;
    case 1:
      var i = b.ControlType["ResolveSpecialValue"],
        j = Util_GetSpecialValue(a),
        d = i(j, g, b, h);
      if (d != null) {
        var k = Util_GetEncodingType(a);
        d = Util_HtmlEncodeSpecialValue(d, k);
        f.push(d);
      }
      c = true;
      break;
    case 3:
      var i = b.ControlType["ResolveSpecialValue"],
        j = Util_GetSpecialValue(a[0]),
        l = i(j, g, b, h);
      if (l != null)
        for (var e = 1; e < a.length; e++)
          var m = BaseControl_RenderTemplateItem(a[e], g, b, h, f);
      c = true;
  }
  return c;
}
function BaseControl_ComputeCssClasses(d, b, h, j) {
  ULSrLq:;
  for (
    var e = [],
      l = ViewDataNode_IsDisabled(d),
      i = d.FormId,
      g = d.SnippetElement,
      m = View_GetTemplateType(i),
      k = CurrentFormData_IsListItemMode(i) && m == 1,
      a = 0;
    a <= h;
    a++
  ) {
    if (a == 1 && !g[11]) continue;
    if (a == 2 && !g[12]) continue;
    if ((a == 1 || a == 2) && l) continue;
    Util_IsNonEmptyString(b[a]) && e.push(b[a]);
  }
  k && h == 0 && Util_IsNonEmptyString(b[4]) && e.push(b[4]);
  if (j) {
    var c = d[2];
    if (c != null && c >= 0) {
      var f = b[5].split(" ");
      f != null && Util_IsNonEmptyString(f[c]) && e.push(f[c]);
    }
  }
  return e.join(" ");
}
BaseControl.ResolveSpecialValue = BaseControl_ResolveSpecialValue;
function BaseControl_ResolveSpecialValue(f, b, c, d) {
  ULSrLq:;
  var a = null;
  switch (f) {
    case 1:
      var e = [];
      e.push(b.FormId, "_", d);
      a = e.join("");
      break;
    case 2:
      a = c[3][0];
      break;
    case 3:
      a = c[2];
      break;
    case 4:
      a = GlobalFormData.Get(b.FormId).viewDataHtmlMap.push(b);
      a--;
      break;
    case 100:
      a = BaseControl_GetDirectionString(b.FormId, c);
      break;
    case 101:
      a = BaseControl_GetTextAlignment(b.FormId, c);
      break;
    case 102:
      a = b.FormId + "_" + d;
      break;
    case 103:
      a = b.FormId;
      break;
    case 104:
      a = d;
  }
  return a;
}
BaseControl.GetFormattedValue = BaseControl_GetFormattedValue;
function BaseControl_GetFormattedValue(a) {
  ULSrLq:;
  var d = ViewDataNode_GetDatum(a),
    b = null;
  if (
    !d.ModifiedOnClient() &&
    (a.SnippetElement[5] == 3 || a.SnippetElement[5] == 8)
  )
    b = a[1][0];
  else {
    var c = d.GetValue();
    if (IsValueValidForDatumBaseType(d, c)) {
      var e = a.SnippetElement.ControlType["GetFormatting"],
        f = e(a);
      b = f.Format(c);
    } else b = c;
  }
  return b;
}
function BaseControl__GetTabIndexFromViewData(a) {
  ULSrLq:;
  if (a == null) return Number.MAX_VALUE;
  else return a.SnippetElement[17];
}
function BaseControl_OnDrop(c) {
  ULSrLq:;
  var a = SelectionService_GetSelectedControl();
  if (a != null) {
    var d = g_arrControlTypes[a.getAttribute("ScriptClass")]["OnBlur"];
    d != null && d(a, null);
  }
  if (!Util_IsNullOrEmptyString(c)) {
    var b = document.getElementById(c);
    b != null && BaseControl_IsInfoPathControl(b) && BaseControl_Focus(b);
  }
}
BaseControl.EnsureScrollWidth = BaseControl_EnsureScrollWidth;
function BaseControl_EnsureScrollWidth(c) {
  ULSrLq:;
  if (CurrentFormData.scrollBarWidth == -1) {
    var b = c + "_scrollBar",
      a = document.getElementById(b);
    a.style.display = "";
    if (a.offsetWidth > 0) {
      CurrentFormData.scrollBarWidth = a.offsetWidth - a.clientWidth;
      a.parentNode.removeChild(a);
    }
  }
  return CurrentFormData.scrollBarWidth;
}
function BaseControl_RenderDivForScrollWidthCalculation(a, b) {
  ULSrLq:;
  if (CurrentFormData.scrollBarWidth == null) {
    a.push(
      '<div id="' +
        b +
        '_scrollBar" style="display: none; position:absolute; left: -10000px; width:30px; height: 50px; overflow: scroll"><div style="height: 100px">nbsp;</div></div>'
    );
    CurrentFormData.scrollBarWidth = -1;
  }
}
function BaseControl_OutputControlHelpingSpan(b, a, c, e) {
  ULSrLq:;
  var d = "Has" + b + "HelpingSpan";
  c[d] = true;
  a.push("<span ");
  LeafControl_OutputAttributeIdEx(c, e, b, a);
  a.push(
    'style="cursor:default;position:relative;vertical-align:top;display:inline-block;'
  );
  a.push(b == "ErrorTip" ? "white-space:nowrap;" : "");
  a.push("z-index:");
  a.push(b == "ErrorTip" ? "48" : "45");
  a.push(';"></span>');
}
BaseControl.IsRenderingErrorVisualizationSpansItself = BaseControl_IsRenderingErrorVisualizationSpansItself;
function BaseControl_IsRenderingErrorVisualizationSpansItself() {
  ULSrLq:;
  return false;
}
BaseControl.GetHeight = BaseControl_GetHeight;
function BaseControl_GetHeight(b) {
  ULSrLq:;
  var c = 0,
    a = null;
  if (UserAgentInfo.strBrowser == 3 || UserAgentInfo.strBrowser == 2)
    a = LeafControl_ParseLength(
      window.getComputedStyle(b, "").getPropertyValue("height")
    );
  else if (b.currentStyle != null)
    a = LeafControl_ParseLength(b.currentStyle.height);
  if (a != null) c = a;
  return c;
}
function LeafControl() {}
LeafControl.ResolveSpecialValue = LeafControl_ResolveSpecialValue;
function LeafControl_ResolveSpecialValue(d, c, b, e) {
  ULSrLq:;
  var a = BaseControl_ResolveSpecialValue(d, c, b, e);
  if (a == null)
    switch (d) {
      case 5:
        a = b[6][1];
        break;
      case 6:
        a = b[17];
        break;
      case 7:
        a = LeafControl_GetTitle(c, b);
        break;
      case 8:
        a = b[6][4][0];
    }
  return a;
}
LeafControl.GetAriaInvalidValue = LeafControl_GetAriaInvalidValue;
function LeafControl_GetAriaInvalidValue(a) {
  ULSrLq:;
  var b = ViewDataNode_GetDatum(a);
  if (!b.IsValid()) return "true";
  else return "false";
}
LeafControl.GetFormatting = LeafControl_GetFormatting;
function LeafControl_GetFormatting(a) {
  ULSrLq:;
  return a[6][3];
}
LeafControl.IsSigned = LeafControl__IsSigned;
function LeafControl__IsSigned(a) {
  ULSrLq:;
  return a[1][5];
}
LeafControl.Render = LeafControl_Render;
function LeafControl_Render(c, d, g, f, e) {
  ULSrLq:;
  var a = c.OriginalId;
  if (typeof a == "undefined" || a == "") {
    a = g + "_" + d[1];
    ViewDataNode_SetHtmlId(c, a);
  }
  for (var b = 0; b < e.length; b++)
    var h = BaseControl_RenderTemplateItem(e[b], c, d, a, f);
}
function LeafControl_InitializeViewDataNode(d, b, c) {
  ULSrLq:;
  ErrorVisualization_ClearViewDataNodeErrorVisualizationState(b);
  var a = b.OriginalId;
  if (typeof a == "undefined" || a == "") {
    a = d + "_" + c[1];
    ViewDataNode_SetHtmlId(b, a);
  }
  return a;
}
function LeafControl_ComputeRenderStyle(a, b, c) {
  ULSrLq:;
  if (ViewDataNode_IsValid(a) || View_GetTemplateType(a.FormId) == 1)
    return BaseControl_ComputeCssClasses(a, b, 0, true);
  else if (c && ViewDataNode_IsBlank(a))
    return BaseControl_ComputeCssClasses(a, b, 0, true);
  else return BaseControl_ComputeCssClasses(a, b, 3, true);
}
function LeafControl_RenderBeginWrappingSpan(d, c, b, a) {
  ULSrLq:;
  return LeafControl_RenderBeginWrappingSpanEx(d, c, b, "", a);
}
function LeafControl_RenderBeginWrappingSpanEx(h, c, d, g, a) {
  ULSrLq:;
  var e = d[8];
  if (e) {
    ErrorVisualization_ClearViewDataNodeErrorVisualizationState(c);
    a.push('<span style="');
    var b = c.SnippetElement[2];
    UserAgentInfo.strBrowser == 1 &&
      UserAgentInfo.intBrowserRmj == 7 &&
      b != "Button" &&
      b != "MultiSelectListBoxItem" &&
      a.push("zoom:100%;");
    b != "ExpressionBox" &&
      b != "SharePointFileAttachmentItem" &&
      b != "CustomControl" &&
      a.push("white-space:nowrap;");
    a.push(g);
    a.push('" ');
    if (!View_IsPrintingTemplate(c)) {
      a.push(
        'onMouseOver="return LeafControl.OnWrappingSpanMouseOver(this, event);" onMouseOut="return LeafControl.OnWrappingSpanMouseOut(this, event);"'
      );
      b == "CustomControl" &&
        UserAgentInfo.strBrowserType == 6 &&
        a.push(' onResize="CustomControl.OnResize(this);"');
    }
    var f = d[6][4];
    f != null &&
      LeafControl_OutputAttribute(
        " class",
        LeafControl_ComputeRenderStyle(c, f, d[13]),
        a
      );
    a.push(">");
    LeafControl_RenderHelpingErrorTipSpan(d, c, h, a);
  }
  return e;
}
function LeafControl_RenderEndWrappingSpan(d, c, b, a) {
  ULSrLq:;
  LeafControl_RenderHelpingIconSpans(b, c, d, a);
  a.push("</span>");
}
function LeafControl_OutputAttribute(d, b, a) {
  ULSrLq:;
  var c = Util_HtmlEncodeAndQuoteAttributeValue(b);
  a.push(d);
  a.push("=");
  a.push(c);
}
function LeafControl_OutputConditionalAttribute(c, a, b) {
  ULSrLq:;
  a != null && LeafControl_OutputAttribute(c, a, b);
}
function LeafControl_RenderLeafAttributes(f, e, d, c, a, b) {
  ULSrLq:;
  LeafControl_RenderLeafAttributesEx(f, e, d, c, a, true, null, b);
}
function LeafControl_RenderLeafAttributesEx(j, b, c, l, k, m, d, a) {
  ULSrLq:;
  var g = c[2];
  LeafControl_OutputAttributeId(b, j, a);
  a.push(' ScriptClass="');
  a.push(g);
  a.push('" class = "');
  a.push(LeafControl_ComputeRenderStyle(b, c[3], c[13]));
  c[6][4] != null && a.push('" wrapped="true');
  var n = ViewDataNode_GetDatum(b);
  if (!n.IsValid()) {
    a.push('" ');
    a.push("aria-invalid");
    a.push('="true"');
  }
  var i = BaseControl_GetDirection(b.FormId, c);
  if (i != 0) {
    a.push('" direction="');
    a.push(BaseControl.k_strDirection[i]);
  }
  var f = GlobalFormData.Get(b.FormId).viewDataHtmlMap.push(b);
  f--;
  a.push('" ViewDataNode = "');
  a.push("" + f);
  a.push('" FormId = "');
  a.push(b.FormId);
  a.push('" OriginalId = "');
  a.push(j);
  a.push('"');
  if (l && ViewDataNode_IsDisabled(b)) {
    a.push(" ");
    a.push("disabled");
    a.push('="true"');
  }
  if (k) {
    if (m) {
      LeafControl_OutputConditionalAttribute(" accessKey", c[6][1], a);
      LeafControl_OutputConditionalAttribute(" tabIndex", c[17], a);
    }
    LeafControl_OutputConditionalAttribute(
      " title",
      LeafControl_GetTitle(b, c),
      a
    );
  }
  if (d != null)
    for (var e = 0; e < d.length; e++) {
      var h = d[e];
      LeafControl_OutputAttribute(
        " " + h,
        "return (" + g + "." + h + "(this, event));",
        a
      );
    }
}
function LeafControl_OutputAttributeId(b, c, a) {
  ULSrLq:;
  a.push(' id="');
  a.push(b.FormId);
  a.push("_");
  a.push(c);
  a.push('" ');
}
function LeafControl_OutputAttributeIdEx(b, d, c, a) {
  ULSrLq:;
  a.push(' id="');
  a.push(LeafControl_CreateAttributeIdExValue(b, d, c));
  a.push('" ');
}
function LeafControl_CreateAttributeIdExValue(b, d, c) {
  ULSrLq:;
  var a = [];
  a.push(b.FormId);
  a.push("_");
  a.push(d);
  a.push("_");
  a.push(c);
  return a.join("");
}
function LeafControl_GetWrappingSpan(a) {
  ULSrLq:;
  var b = a.getAttribute("ScriptClass");
  if (b == "ComboBox" || b == "ListItem") return a.parentNode.parentNode;
  return a.parentNode;
}
LeafControl.GetMarginLeft = LeafControl_GetMarginLeft;
function LeafControl_GetMarginLeft(c) {
  ULSrLq:;
  var d = 0,
    a;
  if (c.getAttribute("wrapped") == "true") a = LeafControl_GetWrappingSpan(c);
  else a = c;
  var b = null;
  if (UserAgentInfo.strBrowser == 3 || UserAgentInfo.strBrowser == 2)
    b = LeafControl_ParseLength(
      window.getComputedStyle(a, "").getPropertyValue("margin-left")
    );
  else if (a.currentStyle != null)
    b = LeafControl_ParseLength(a.currentStyle.marginLeft);
  if (b != null) d = b;
  return d;
}
LeafControl.GetMarginTop = LeafControl_GetMarginTop;
function LeafControl_GetMarginTop(c) {
  ULSrLq:;
  var d = 0,
    a;
  if (c.getAttribute("wrapped") == "true") a = LeafControl_GetWrappingSpan(c);
  else a = c;
  var b = null;
  if (UserAgentInfo.strBrowser == 3 || UserAgentInfo.strBrowser == 2)
    b = LeafControl_ParseLength(
      window.getComputedStyle(a, "").getPropertyValue("margin-top")
    );
  else if (a.currentStyle != null)
    b = LeafControl_ParseLength(a.currentStyle.marginTop);
  if (b != null) d = b;
  return d;
}
LeafControl.GetBorderLeft = LeafControl_GetBorderLeft;
function LeafControl_GetBorderLeft(c) {
  ULSrLq:;
  var d = 0,
    a;
  if (c.getAttribute("wrapped") == "true") a = LeafControl_GetWrappingSpan(c);
  else a = c;
  var b = null;
  if (UserAgentInfo.strBrowser == 3 || UserAgentInfo.strBrowser == 2)
    b = LeafControl_ParseLength(
      window.getComputedStyle(a, "").getPropertyValue("border-left-width")
    );
  else if (a.currentStyle != null)
    b = LeafControl_ParseLength(a.currentStyle.borderLeftWidth);
  if (b != null) d = b;
  return d;
}
LeafControl.GetBorderTop = LeafControl_GetBorderTop;
function LeafControl_GetBorderTop(c) {
  ULSrLq:;
  var d = 0,
    a;
  if (c.getAttribute("wrapped") == "true") a = LeafControl_GetWrappingSpan(c);
  else a = c;
  var b = null;
  if (UserAgentInfo.strBrowser == 3 || UserAgentInfo.strBrowser == 2)
    b = LeafControl_ParseLength(
      window.getComputedStyle(a, "").getPropertyValue("border-top-width")
    );
  else if (a.currentStyle != null)
    b = LeafControl_ParseLength(a.currentStyle.borderTopWidth);
  if (b != null) d = b;
  return d;
}
LeafControl.GetBorderBottom = LeafControl_GetBorderBottom;
function LeafControl_GetBorderBottom(c) {
  ULSrLq:;
  var d = 0,
    a;
  if (c.getAttribute("wrapped") == "true") a = LeafControl_GetWrappingSpan(c);
  else a = c;
  var b = null;
  if (UserAgentInfo.strBrowser == 3 || UserAgentInfo.strBrowser == 2)
    b = LeafControl_ParseLength(
      window.getComputedStyle(a, "").getPropertyValue("border-bottom-width")
    );
  else if (a.currentStyle != null)
    b = LeafControl_ParseLength(a.currentStyle.borderBottomWidth);
  if (b != null) d = b;
  return d;
}
LeafControl.GetBorderRight = LeafControl_GetBorderRight;
function LeafControl_GetBorderRight(c) {
  ULSrLq:;
  var d = 0,
    a;
  if (c.getAttribute("wrapped") == "true") a = LeafControl_GetWrappingSpan(c);
  else a = c;
  var b = null;
  if (UserAgentInfo.strBrowser == 3 || UserAgentInfo.strBrowser == 2)
    b = LeafControl_ParseLength(
      window.getComputedStyle(a, "").getPropertyValue("border-right-width")
    );
  else if (a.currentStyle != null)
    b = LeafControl_ParseLength(a.currentStyle.borderRightWidth);
  if (b != null) d = b;
  return d;
}
function LeafControl_GetTitle(b, a) {
  ULSrLq:;
  var c = a[6][0];
  return LeafControl_CreateTitleString(b, c);
}
function LeafControl_CreateTitleString(c, b) {
  ULSrLq:;
  var a = [];
  if (ViewDataNode_IsSigned(c)) {
    a.push(IntlCoreStrings.k_strDigitallySignedTitleText);
    !Util_IsNullOrEmptyString(b) && a.push(" ");
  }
  !Util_IsNullOrEmptyString(b) && a.push(b);
  return a.join("");
}
LeafControl.ParseLength = LeafControl_ParseLength;
function LeafControl_ParseLength(b) {
  ULSrLq:;
  var a = null,
    c = b.indexOf("px");
  if (c > 0) a = 0 + Expr._StringToNumber(b.substring(0, c));
  return a;
}
LeafControl.IsLeafControl = LeafControl_IsLeafControl;
function LeafControl_IsLeafControl(b) {
  ULSrLq:;
  var a = Snippet_GetSnippetElementFromHtml(b);
  return Snippet_IsFromLeafControl(a);
}
LeafControl.Highlight = LeafControl_Highlight;
function LeafControl_Highlight(b, a) {
  ULSrLq:;
  ErrorVisualization_Highlight(b, a);
  BaseControl_Highlight(b, a);
}
LeafControl.RemoveHighlight = LeafControl_RemoveHighlight;
function LeafControl_RemoveHighlight(b, a) {
  ULSrLq:;
  ErrorVisualization_RemoveHighlight(b, a);
  BaseControl_RemoveHighlight(b, a);
}
LeafControl.OnChange = LeafControl_OnChange;
function LeafControl_OnChange(b, d) {
  ULSrLq:;
  var a = ViewDataNode_GetViewDataNodeFromHtml(b);
  if (ErrorVisualization_IsShortMessageVisible(a)) {
    var c = a.SnippetElement;
    ErrorVisualization_HideShortMessage(b, a);
    ErrorVisualization_ShowShortMessage(b, a, c);
  }
  BaseControl_OnChange(b, d);
}
LeafControl.SetHidden = LeafControl_SetHidden;
function LeafControl_SetHidden(a, b, c) {
  ULSrLq:;
  var d = a.SnippetElement.ControlType["RefreshVisualState"];
  d(b);
  c && ErrorVisualization_HideAllVisualizations(b, a);
  BaseControl_SetHidden(a, b, c);
}
LeafControl.OnMouseOver = LeafControl_OnMouseOver;
function LeafControl_OnMouseOver(b, c) {
  ULSrLq:;
  var a;
  if (BaseControl_IsInfoPathControl(b)) a = b;
  else a = ErrorVisualization_FindInfoPathControl(b.parentNode.parentNode);
  if (a == null) return;
  BaseControl_OnMouseOver(a, c);
}
LeafControl.OnMouseOut = LeafControl_OnMouseOut;
function LeafControl_OnMouseOut(b, c) {
  ULSrLq:;
  var a = null;
  if (BaseControl_IsInfoPathControl(b)) a = b;
  else if (b.parentNode != null)
    a = ErrorVisualization_FindInfoPathControl(b.parentNode.parentNode);
  else return;
  if (a == null) return;
  BaseControl_OnMouseOut(a, c);
}
LeafControl.OnWrappingSpanMouseOver = LeafControl_OnWrappingSpanMouseOver;
function LeafControl_OnWrappingSpanMouseOver(d, b) {
  ULSrLq:;
  var a = ErrorVisualization_FindInfoPathControl(d);
  if (a.disabled) {
    var c = g_arrControlTypes[a.getAttribute("ScriptClass")]["OnMouseOver"];
    c(a, b);
    Util_StopEventProprogation(b);
  }
}
LeafControl.OnWrappingSpanMouseOut = LeafControl_OnWrappingSpanMouseOut;
function LeafControl_OnWrappingSpanMouseOut(d, b) {
  ULSrLq:;
  var a = ErrorVisualization_FindInfoPathControl(d);
  if (a.disabled) {
    var c = g_arrControlTypes[a.getAttribute("ScriptClass")]["OnMouseOut"];
    c(a, b);
    Util_StopEventProprogation(b);
  }
}
function LeafControl_FocusParentInfoPathControl(a, b) {
  ULSrLq:;
  if (!BaseControl_IsInfoPathControl(a))
    a = BaseControl_GetParentInfoPathControl(a);
  a != null && LeafControl.OnFocus(a, b);
}
LeafControl.RenderHelpingIconSpans = LeafControl_RenderHelpingIconSpans;
function LeafControl_RenderHelpingIconSpans(c, a, d, b) {
  ULSrLq:;
  var e =
    a.SnippetElement.ControlType["IsRenderingErrorVisualizationSpansItself"];
  if (e()) return;
  if (LeafControl_DelayHelpingErrorSpansInsertion(a)) return;
  c[13] && BaseControl_OutputControlHelpingSpan("Asterisk", b, a, d);
  c[15] && BaseControl_OutputControlHelpingSpan("SignIcon", b, a, d);
}
LeafControl.RenderHelpingErrorTipSpan = LeafControl_RenderHelpingErrorTipSpan;
function LeafControl_RenderHelpingErrorTipSpan(d, a, e, c) {
  ULSrLq:;
  var b =
    a.SnippetElement.ControlType["IsRenderingErrorVisualizationSpansItself"];
  if (b()) return;
  if (LeafControl_DelayHelpingErrorSpansInsertion(a)) return;
  d[14] && BaseControl_OutputControlHelpingSpan("ErrorTip", c, a, e);
}
function LeafControl_DelayHelpingErrorSpansInsertion(a) {
  ULSrLq:;
  var c = a.FormId,
    b = CurrentFormData_IsV4UI(a.FormId);
  if (!b) return false;
  else if (UserAgentInfo.strBrowser == 1 && UserAgentInfo.intBrowserRmj == 7)
    return false;
  return true;
}
LeafControl.GetAsteriskOffsetTop = LeafControl_GetAsteriskOffsetTop;
function LeafControl_GetAsteriskOffsetTop(a) {
  ULSrLq:;
  return a[6][5];
}
LeafControl.GetAsteriskOffsetNormal = LeafControl_GetAsteriskOffsetNormal;
function LeafControl_GetAsteriskOffsetNormal(a) {
  ULSrLq:;
  return a[6][6];
}
LeafControl.GetErrorMessageOffset = LeafControl_GetErrorMessageOffset;
function LeafControl_GetErrorMessageOffset(a) {
  ULSrLq:;
  return a[6][7];
}
LeafControl.GetErrorMessageOffsetTop = LeafControl_GetErrorMessageOffsetTop;
function LeafControl_GetErrorMessageOffsetTop(a) {
  ULSrLq:;
  return a[6][8];
}
LeafControl.OnKeyPressKillEnterEvent = LeafControl_OnKeyPressKillEnterEvent;
function LeafControl_OnKeyPressKillEnterEvent(b, a) {
  ULSrLq:;
  LeafControl.OnKeyPress(b, a);
  UserAgentInfo.strBrowser == 2 && Util_KillEnterEvent(a);
}
LeafControl.HideAsteriskAfterTyping = LeafControl_HideAsteriskAfterTyping;
function LeafControl_HideAsteriskAfterTyping(b, c) {
  ULSrLq:;
  if (UserAgentInfo.strBrowser == 1 || c.which != 0) {
    var a = ViewDataNode_GetViewDataNodeFromHtml(b);
    if (ErrorVisualization_IsAsteriskVisible(a)) {
      a._keyPressed = true;
      ErrorVisualization_HideAsterisk(b, a);
    }
  }
}
LeafControl.IsSelected = BaseControl.IsSelected;
LeafControl.IsValid = BaseControl.IsValid;
LeafControl.OnAfterCreate = BaseControl.OnAfterCreate;
LeafControl.OnBlur = BaseControl.OnBlur;
LeafControl.OnClick = BaseControl.OnClick;
LeafControl.OnFocus = BaseControl.OnFocus;
LeafControl.OnMouseUp = BaseControl.OnMouseUp;
LeafControl.OnMouseDown = BaseControl.OnMouseDown;
LeafControl.OnKeyPress = BaseControl.OnKeyPress;
LeafControl.RestoreFocus = BaseControl.RestoreFocus;
LeafControl.Select = BaseControl.Select;
LeafControl.UnSelect = BaseControl.UnSelect;
function HiddenCollection() {}
HiddenCollection.GetFormatting = BaseControl.GetFormatting;
HiddenCollection.GetValueFromControl = function () {
  ULSrLq:;
  return null;
};
HiddenCollection.SetDisable = function () {};
HiddenCollection.OnAfterCreate = HiddenCollection_OnAfterCreate;
function HiddenCollection_OnAfterCreate() {}
HiddenCollection.RestoreFocus = HiddenCollection_RestoreFocus;
function HiddenCollection_RestoreFocus() {}
HiddenCollection.Render = HiddenCollection_Render;
function HiddenCollection_Render() {}
HiddenCollection.OnClick = BaseControl.OnClick;
HiddenCollection.OnFocus = BaseControl.OnFocus;
HiddenCollection.OnMouseOver = BaseControl.OnMouseOver;
HiddenCollection.OnMouseOut = BaseControl.OnMouseOut;
HiddenCollection.OnMouseDown = BaseControl.OnMouseDown;
HiddenCollection.OnMouseUp = BaseControl.OnMouseUp;
HiddenCollection.OnKeyPress = BaseControl.OnKeyPress;
HiddenCollection.IsValid = BaseControl.IsValid;
HiddenCollection.OnBlur = BaseControl.OnBlur;
HiddenCollection.IsSelected = BaseControl.IsSelected;
HiddenCollection.Select = BaseControl.Select;
HiddenCollection.SetValueOfControl = BaseControl.SetValueOfControl;
HiddenCollection.UnSelect = BaseControl.UnSelect;
HiddenCollection.IsSigned = StructuralEditingControl_IsSigned;
function HiddenContainer() {}
HiddenContainer.GetFormatting = BaseControl.GetFormatting;
HiddenContainer.GetValueFromControl = function () {
  ULSrLq:;
  return null;
};
HiddenContainer.SetDisable = function () {};
HiddenContainer.OnAfterCreate = HiddenContainer_OnAfterCreate;
function HiddenContainer_OnAfterCreate() {}
HiddenContainer.RestoreFocus = HiddenContainer_RestoreFocus;
function HiddenContainer_RestoreFocus() {}
HiddenContainer.Render = HiddenContainer_Render;
function HiddenContainer_Render() {}
HiddenContainer.OnClick = BaseControl.OnClick;
HiddenContainer.OnFocus = BaseControl.OnFocus;
HiddenContainer.OnMouseOver = BaseControl.OnMouseOver;
HiddenContainer.OnMouseOut = BaseControl.OnMouseOut;
HiddenContainer.OnMouseDown = BaseControl.OnMouseDown;
HiddenContainer.OnMouseUp = BaseControl.OnMouseUp;
HiddenContainer.OnKeyPress = BaseControl.OnKeyPress;
HiddenContainer.IsValid = BaseControl.IsValid;
HiddenContainer.OnBlur = BaseControl.OnBlur;
HiddenContainer.IsSelected = BaseControl.IsSelected;
HiddenContainer.Select = BaseControl.Select;
HiddenContainer.SetValueOfControl = BaseControl.SetValueOfControl;
HiddenContainer.UnSelect = BaseControl.UnSelect;
function HiddenLeaf() {}
HiddenLeaf.GetFormatting = BaseControl.GetFormatting;
HiddenLeaf.GetValueFromControl = function () {
  ULSrLq:;
  return null;
};
HiddenLeaf.SetDisable = function () {};
HiddenLeaf.OnAfterCreate = HiddenLeaf_OnAfterCreate;
function HiddenLeaf_OnAfterCreate() {}
HiddenLeaf.RestoreFocus = HiddenLeaf_RestoreFocus;
function HiddenLeaf_RestoreFocus() {}
HiddenLeaf.Render = HiddenLeaf_Render;
function HiddenLeaf_Render() {}
HiddenLeaf.OnClick = BaseControl.OnClick;
HiddenLeaf.OnFocus = BaseControl.OnFocus;
HiddenLeaf.OnMouseOver = BaseControl.OnMouseOver;
HiddenLeaf.OnMouseOut = BaseControl.OnMouseOut;
HiddenLeaf.OnMouseDown = BaseControl.OnMouseDown;
HiddenLeaf.OnMouseUp = BaseControl.OnMouseUp;
HiddenLeaf.OnKeyPress = BaseControl.OnKeyPress;
HiddenLeaf.IsValid = BaseControl.IsValid;
HiddenLeaf.OnBlur = BaseControl.OnBlur;
HiddenLeaf.IsSelected = BaseControl.IsSelected;
HiddenLeaf.Select = BaseControl.Select;
HiddenLeaf.SetValueOfControl = BaseControl.SetValueOfControl;
HiddenLeaf.UnSelect = BaseControl.UnSelect;
HiddenLeaf.Highlight = LeafControl.Highlight;
HiddenLeaf.RemoveHighlight = LeafControl.RemoveHighlight;
function TextBox() {}
TextBox.GetFormatting = BaseControl.GetFormatting;
TextBox.GetValueFromControl = TextBox_GetValueFromControl;
function TextBox_GetValueFromControl(a) {
  ULSrLq:;
  return a.value;
}
TextBox.SetValueOfControl = TextBox_SetValueOfControl;
function TextBox_SetValueOfControl(a, c) {
  ULSrLq:;
  a.value = Util.GetPlainTextFromValueObject(c);
  var b = Snippet_GetSnippetElementFromHtml(a);
  TextBox_IsResizable(b) && TextBox_Resize(a);
  return a;
}
TextBox.AddEventLogEntry = TextBox_AddEventLogEntry;
function TextBox_AddEventLogEntry(d, a, c) {
  ULSrLq:;
  var b = TextBox.GetFormatting(a);
  return Util_AddTextChangeEventIntoEventLog(d, b, c, a);
}
TextBox.SetDisable = TextBox_SetDisable;
function TextBox_SetDisable(a, b) {
  ULSrLq:;
  if (b) a.setAttribute("readOnly", "true");
  else a.removeAttribute("readOnly");
}
function TextBox_NormalizeCRLF(b) {
  ULSrLq:;
  var a = document.getElementById("__crlfnorm");
  if (a == null) {
    a = document.createElement("textarea");
    a.id = "__crlfnorm";
    a.style.display = "none";
  }
  a.value = b;
  return a.value;
}
TextBox.OnChange = TextBox_OnChange;
function TextBox_OnChange(f, i) {
  ULSrLq:;
  var a = ViewDataNode_GetViewDataNodeFromHtml(f),
    b = ViewDataNode_GetDatum(a),
    e = f.value,
    d = false;
  if (
    b.GetValue() != "" &&
    DataInformation.GetDataType(
      b.GetDataInformation()
    ).GetUnderlyingDatatype() != AssumedValidDatatype &&
    (b.IsValid() || b.ValidateDataType())
  )
    if (b.ModifiedOnClient()) {
      var h = TextBox.GetFormatting(a),
        c = h.Format(b.GetValue());
      if (e != c || a._keyPressed) d = true;
    } else {
      var g = a.SnippetElement;
      c = a[1][0];
      if (TextBox.IsMultiLine(g)) c = TextBox_NormalizeCRLF(c);
      if (e != c || a._keyPressed) d = true;
    }
  else if (e != b.GetValue() || a._keyPressed) d = true;
  d && TextBox__OnChange(f, a, e, i);
}
function TextBox__OnChange(c, b, a, g) {
  ULSrLq:;
  var f = b.SnippetElement;
  if (!Util_IsValidXmlString(a)) {
    UserMessages.ShowAlertMessage(
      IntlCoreStrings.k_strInvalidCharacterInText,
      true
    );
    a = BaseControl_GetFormattedValue(b);
    c.value = a;
    return;
  }
  if (!TextBox.IsMultiLine(f)) {
    var d = new RegExp(
      UserAgentInfo.strBrowser == 2 ? "[\\t\\n\\r\\f]" : "[\\t\\n\\r\\f\\v]",
      "g"
    );
    if (d.exec(a) != null) {
      a = a.replace(d, " ");
      c.value = a;
    }
  }
  a = TextBox__AdjustValue(c, b, a);
  var e = TextBox_AddEventLogEntry(c, b, a);
  LeafControl.OnChange(c, g);
  if (e) e = ViewDataNode_OnControlChangeInternal(b, a);
}
TextBox.OnBlur = TextBox_OnBlur;
function TextBox_OnBlur(a, b) {
  ULSrLq:;
  var c = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(c) != 1
    )
  )
    return;
  LeafControl.OnBlur(a, b);
  TextBox.OnChange(a, b);
}
function TextBox__AdjustValue(l, i, b) {
  ULSrLq:;
  var a = TextBox.GetFormatting(i),
    e = null;
  if (a.getFormattingType() == 1) {
    var j = ViewDataNode_GetDatum(i),
      c = j.GetValue();
    if (c != b) {
      var k = j.GetDataInformation(),
        g = DataInformation.GetDataType(k).GetUnderlyingDatatype(),
        f = a.Unformat(b).strUnformattedValue;
      if (
        g == DateTimeXsdDatatype ||
        (g == AssumedValidDatatype && a.Mode() == 3)
      ) {
        if (!a.IsISO8601DateTimeString(b))
          e = TextBox._AdjustValueForDateTimeNode(a, c, f);
      } else if (g == TimeXsdDatatype)
        if (!Util.IsNullOrEmptyString(c)) {
          var d = a.UnformatIso8601(f, a.k_intModeTime);
          if (d != null && Util.IsNullOrEmptyString(d.strTZOffset)) {
            var h = a.UnformatIso8601(c, a.k_intModeTime);
            if (h != null) {
              TextBox._AddLocalTimezone(h, d);
              e = a.UnformatFromDateTime(d, a.k_intModeTime, f);
            }
          }
        }
    }
  }
  if (e != null) return e;
  else return b;
}
TextBox._AdjustValueForDateTimeNode = TextBox__AdjustValueForDateTimeNode;
function TextBox__AdjustValueForDateTimeNode(a, h, f) {
  ULSrLq:;
  var d = a.DateFormatType(),
    e = a.TimeFormatType(),
    g = null;
  if (d != a.k_intDateFormatTypeNone || e != a.k_intTimeFormatTypeNone) {
    var c = a.UnformatIso8601(h, a.k_intModeDateTime);
    if (c != null)
      if (Util.IsNullOrEmptyString(c.strTZOffset)) {
        var b = a.UnformatIso8601(f, a.k_intModeDateTime);
        if (b != null)
          if (Util.IsNullOrEmptyString(b.strTZOffset)) {
            if (
              d != a.k_intDateFormatTypeNone &&
              e == a.k_intTimeFormatTypeNone
            )
              Util.MergeTimeIntoDateTime(c, b);
            else
              d == a.k_intDateFormatTypeNone &&
                e != a.k_intTimeFormatTypeNone &&
                Util.MergeDateIntoDateTime(c, b);
            g = a.UnformatFromDateTime(b, a.k_intModeDateTime, f);
          }
      }
  }
  return g;
}
TextBox._AddLocalTimezone = TextBox__AddLocalTimezone;
function TextBox__AddLocalTimezone(b, a) {
  ULSrLq:;
  if (!Util.IsNullOrEmptyString(a.strTZOffset)) return;
  if (!Util.IsNullOrEmptyString(b.strTZOffset))
    if (b.strTZOffset == "Z") a.strTZOffset = "Z";
    else a.strTZOffset = DateUtils.GetLocalTimeZoneOffsetString(a);
}
TextBox.OnAfterCreate = TextBox_OnAfterCreate;
function TextBox_OnAfterCreate(b) {
  ULSrLq:;
  var c = b.SnippetElement,
    a = null;
  if (TextBox_IsResizable(c)) {
    a = document.getElementById(b[9]);
    if (a == null) return;
    TextBox_Resize(a);
  }
  if (!ViewDataNode_IsValid(b)) {
    if (a == null) a = document.getElementById(b[9]);
    if (a == null) return;
    ViewDataNode_IsBlank(b) && ErrorVisualization_ShowAsterisk(a, b);
  }
}
TextBox.RestoreFocus = TextBox_RestoreFocus;
function TextBox_RestoreFocus(a) {
  ULSrLq:;
  LeafControl.RestoreFocus(a);
  if (document.selection && g_objCurrentFormDataSelection.boolTextSelected)
    a.select();
  else {
    var b = ViewDataNode_GetViewDataNodeFromHtml(a);
    BaseControl_IsInFocusableState(b) && a.focus();
    Util.IsNullOrEmptyString(a.value) && a.select();
  }
}
TextBox.IsMultiLine = TextBox_IsMultiLine;
function TextBox_IsMultiLine(a) {
  ULSrLq:;
  return a[6][2][0] == 1;
}
TextBox.GetMaxLength = TextBox_GetMaxLength;
function TextBox_GetMaxLength(b) {
  ULSrLq:;
  var a = b[6][2][1];
  return Util.IsNonEmptyString(a) ? a : null;
}
TextBox.GetVCardName = TextBox_GetVCardName;
function TextBox_GetVCardName(b) {
  ULSrLq:;
  var a = b[6][2][2];
  return Util.IsNonEmptyString(a) ? a : null;
}
TextBox.GetAutoAdvance = TextBox_GetAutoAdvance;
function TextBox_GetAutoAdvance(a) {
  ULSrLq:;
  return a[6][2][4] != 0;
}
TextBox.GetAutoComplete = TextBox_GetAutoComplete;
function TextBox_GetAutoComplete(b) {
  ULSrLq:;
  var a = b[6][2][3];
  return Util.IsNonEmptyString(a) ? a : null;
}
TextBox.Render = TextBox_Render;
function TextBox_Render(d, c, k, a) {
  ULSrLq:;
  var b,
    h = View.GetTemplateType(d.FormId),
    g = TextBox.IsMultiLine(c);
  if (g) {
    b = TextBox_Template_MultiLine;
    if (h == 1) b = TextBox_Template_MultiLine_Print;
  } else {
    b = TextBox_Template_Simple;
    if (h == 1) b = TextBox_Template_Simple_Print;
  }
  var e = LeafControl_InitializeViewDataNode(k, d, c),
    i = LeafControl_RenderBeginWrappingSpan(e, d, c, a);
  a.push(b[0]);
  LeafControl_RenderLeafAttributes(e, d, c, false, true, a);
  if (ViewDataNode_IsDisabled(d)) {
    a.push("readOnly");
    a.push('="true"');
  }
  LeafControl_OutputConditionalAttribute(
    "maxLength",
    TextBox.GetMaxLength(c),
    a
  );
  if (UserAgentInfo.strBrowser == 1) {
    LeafControl_OutputConditionalAttribute(
      "VCARD_NAME",
      TextBox.GetVCardName(c),
      a
    );
    LeafControl_OutputConditionalAttribute(
      "autocomplete",
      TextBox.GetAutoComplete(c),
      a
    );
  }
  var f = BaseControl_GetFormattedValue(d);
  if (g) {
    a.push(b[1]);
    var j = Util_GetEncodingType(b[2]);
    a.push(Util_HtmlEncodeSpecialValue(f, j));
    a.push(b[3]);
  } else {
    LeafControl_OutputAttribute("value", f, a);
    a.push(b[1]);
  }
  i && LeafControl_RenderEndWrappingSpan(e, d, c, a);
}
TextBox.OnFocus = TextBox_OnFocus;
function TextBox_OnFocus(a, b) {
  ULSrLq:;
  LeafControl.OnFocus(a, b);
}
TextBox.OnMouseDown = TextBox_OnMouseDown;
function TextBox_OnMouseDown(a, c) {
  ULSrLq:;
  var b = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(b) != 1
    )
  )
    return;
  LeafControl.OnMouseDown(a, c);
  UserAgentInfo.strBrowser == 1 &&
    a.setAttribute("IsSelecting", true.toString());
}
TextBox.OnMouseUp = TextBox_OnMouseUp;
function TextBox_OnMouseUp(a, c) {
  ULSrLq:;
  var b = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(b) != 1
    )
  )
    return;
  LeafControl.OnMouseUp(a, c);
  UserAgentInfo.strBrowser == 1 &&
    a.setAttribute("IsSelecting", false.toString());
}
TextBox.IsFocusable = TextBox_IsFocusable;
function TextBox_IsFocusable() {
  ULSrLq:;
  return true;
}
TextBox.OnKeyPress = TextBox_OnKeyPress;
function TextBox_OnKeyPress(a, b) {
  ULSrLq:;
  LeafControl_HideAsteriskAfterTyping(a, b);
  LeafControl.OnKeyPress(a, b);
  var c = Snippet_GetSnippetElementFromHtml(a);
  if (UserAgentInfo.strBrowser != 2) {
    if (TextBox_IsResizable(c))
      (UserAgentInfo.strBrowser != 3 || b.keyCode != 35) && TextBox_Resize(a);
  } else if (Util_KillEnterEvent(b))
    TextBox_IsMultiLine(c) &&
      window.setTimeout("TextBox_InsertNewLine('" + a.id + "')", 1);
  else TextBox_IsResizable(c) && TextBox_Resize(a);
}
function TextBox_InsertNewLine(c) {
  ULSrLq:;
  var a = document.getElementById(c);
  a.value = a.value + "\n";
  var b = Snippet_GetSnippetElementFromHtml(a);
  TextBox_IsResizable(b) && TextBox_Resize(a);
}
TextBox.OnPropertyChange = TextBox_OnPropertyChange;
function TextBox_OnPropertyChange(a, d) {
  ULSrLq:;
  var c = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(c) != 1
    )
  )
    return;
  if (d.propertyName != "value") return;
  var b = Snippet_GetSnippetElementFromHtml(a);
  TextBox_IsResizable(b) && TextBox_Resize(a);
  TextBox_AutoAdvance(c, a, b);
}
TextBox.OnInput = TextBox_OnInput;
function TextBox_OnInput(a) {
  ULSrLq:;
  var c = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(c) != 1
    )
  )
    return;
  var b = Snippet_GetSnippetElementFromHtml(a);
  TextBox_IsResizable(b) && TextBox_Resize(a);
  TextBox_AutoAdvance(c, a, b);
}
function TextBox_AutoAdvance(b, a, c) {
  ULSrLq:;
  if (TextBox_IsMoveToNextControlNeeded(b, a, c))
    if (UserAgentInfo.strBrowser != 2)
      TextBox__MoveSelectionToNextControl(b, a);
    else
      window.setTimeout(
        'TextBox__MoveSelectionToNextControlById("' + a.id + '");',
        10
      );
}
function TextBox_IsMoveToNextControlNeeded(g, e, a) {
  ULSrLq:;
  if (!TextBox.GetAutoAdvance(a)) return;
  var c = TextBox.GetMaxLength(a);
  if (Util.IsNonEmptyString(c)) {
    var b = e.value;
    if (Util.IsNonEmptyString(b)) {
      var f = b.length,
        d = parseInt(c);
      if (f >= d) return true;
    }
  }
  return false;
}
function TextBox__MoveSelectionToNextControl(c, f) {
  ULSrLq:;
  var a = TextBox.GetNextControlInTabOrder(c, f);
  while (
    !BaseControl_IsInFocusableState(ViewDataNode_GetViewDataNodeFromHtml(a)) &&
    a != null
  )
    a = TextBox.GetNextControlInTabOrder(c, a);
  if (a != null) {
    var e = ViewDataNode_GetViewDataNodeFromHtml(a),
      b = e.SnippetElement,
      d = b.ControlType["RestoreFocus"];
    d(a);
    b[2] == "TextBox" && a.select();
  }
}
function TextBox__MoveSelectionToNextControlById(b) {
  ULSrLq:;
  var a = document.getElementById(b),
    c = a.getAttribute("FormId");
  TextBox__MoveSelectionToNextControl(c, a);
}
TextBox.GetNextControlInTabOrder = TextBox_GetNextControlInTabOrder;
function TextBox_GetNextControlInTabOrder(strFormId, objControl) {
  ULSrLq:;
  var globalFormData = GlobalFormData.Get(strFormId),
    objReturn = null;
  if (globalFormData.g_rgControlsTabOrder == null) {
    globalFormData.g_rgControlsTabOrder = [];
    TextBox.RefreshTabIndexArray(
      strFormId,
      CurrentFormData.ViewDataTree(strFormId)
    );
  }
  for (
    var nTabIndex = objControl.tabIndex, strId = objControl.id, intIndex = 0;
    intIndex < globalFormData.g_rgControlsTabOrder[nTabIndex].length;
    intIndex++
  )
    if (globalFormData.g_rgControlsTabOrder[nTabIndex][intIndex] == strId) {
      var strNextId = null;
      if (intIndex < globalFormData.g_rgControlsTabOrder[nTabIndex].length - 1)
        strNextId =
          globalFormData.g_rgControlsTabOrder[nTabIndex][intIndex + 1];
      else if (globalFormData.g_rgControlsTabOrder[nTabIndex + 1] != null)
        strNextId = globalFormData.g_rgControlsTabOrder[nTabIndex + 1][0];
      else {
        var intLowestTabIndex = 0;
        while (
          intLowestTabIndex < nTabIndex &&
          globalFormData.g_rgControlsTabOrder[intLowestTabIndex] == null
        )
          intLowestTabIndex++;
        strNextId = globalFormData.g_rgControlsTabOrder[intLowestTabIndex][0];
      }
      if (strNextId != null) {
        if (UserAgentInfo.strBrowser == 1)
          objReturn = document.getElementById(strNextId);
        else eval(" objReturn = document.getElementById(strNextId);");
        break;
      }
    }
  return objReturn;
}
TextBox.RefreshTabIndexArray = TextBox_RefreshTabIndexArray;
function TextBox_RefreshTabIndexArray(f, h) {
  ULSrLq:;
  for (
    var c = GlobalFormData.Get(f), e = ViewDataNode_GetChildNodes(h), d = 0;
    d < e.length;
    d++
  ) {
    var b = e[d],
      g = b.SnippetElement,
      a = g[17];
    if (a >= 0) {
      var i = b[9];
      if (c.g_rgControlsTabOrder[a] == null) c.g_rgControlsTabOrder[a] = [];
      c.g_rgControlsTabOrder[a].push(i);
    }
    TextBox.RefreshTabIndexArray(f, b);
  }
}
function TextBox_IsHeightSet(a) {
  ULSrLq:;
  return a[6][2][5] == 1;
}
function TextBox_IsResizable(a) {
  ULSrLq:;
  return TextBox_IsMultiLine(a) && !TextBox_IsHeightSet(a);
}
function TextBox_Resize(a) {
  ULSrLq:;
  if (UserAgentInfo.strBrowser != 1) a.style.height = "0px";
  var d = a.scrollHeight;
  d = a.scrollHeight;
  var e = d != a.clientHeight;
  if (e) {
    var c = 0;
    if (UserAgentInfo.strBrowser == 3 || UserAgentInfo.strBrowser == 2) {
      var b = window.getComputedStyle(a, "");
      c =
        LeafControl_ParseLength(b.getPropertyValue("border-top-width")) +
        LeafControl_ParseLength(b.getPropertyValue("border-bottom-width"));
      if (UserAgentInfo.strBrowser == 3)
        c +=
          LeafControl_ParseLength(b.getPropertyValue("padding-top")) +
          LeafControl_ParseLength(b.getPropertyValue("padding-bottom"));
    } else if (a.currentStyle != null)
      c =
        LeafControl_ParseLength(a.currentStyle.borderTopWidth) +
        LeafControl_ParseLength(a.currentStyle.borderBottomWidth);
    a.style.height = d + c + "px";
  }
}
TextBox.OnClick = LeafControl.OnClick;
TextBox.IsValid = LeafControl.IsValid;
TextBox.IsSelected = LeafControl.IsSelected;
TextBox.Select = LeafControl.Select;
TextBox.UnSelect = LeafControl.UnSelect;
TextBox.Highlight = LeafControl.Highlight;
TextBox.RemoveHighlight = LeafControl.RemoveHighlight;
TextBox.OnMouseOver = LeafControl.OnMouseOver;
TextBox.OnMouseOut = LeafControl.OnMouseOut;
TextBox.SetHidden = LeafControl.SetHidden;
TextBox.GetAsteriskOffsetNormal = LeafControl.GetAsteriskOffsetNormal;
TextBox.GetAsteriskOffsetTop = LeafControl.GetAsteriskOffsetTop;
TextBox.GetErrorMessageOffset = LeafControl.GetErrorMessageOffset;
TextBox.GetErrorMessageOffsetTop = LeafControl.GetErrorMessageOffsetTop;
function DatePickerOnClose() {
  ULSrLq:;
  var a = document.getElementById("DatePickerIFrame");
  if (a != null && a.style.display != "none") {
    a.style.display = "none";
    SelectionService.RestoreFocus(IP_DatePicker.strFormId);
    IP_DatePicker.objCurrentTextBox = null;
  }
  this.Picker = null;
}
function IP_DatePicker() {}
IP_DatePicker.SPCalendarType = [];
IP_DatePicker.SPCalendarType["System.Globalization.GregorianCalendar"] = 1;
IP_DatePicker.SPCalendarType["System.Globalization.HebrewCalendar"] = 8;
IP_DatePicker.SPCalendarType["System.Globalization.HijriCalendar"] = 6;
IP_DatePicker.SPCalendarType["System.Globalization.JapaneseCalendar"] = 3;
IP_DatePicker.SPCalendarType["System.Globalization.JulianCalendar"] = 0;
IP_DatePicker.SPCalendarType["System.Globalization.KoreanCalendar"] = 5;
IP_DatePicker.SPCalendarType["System.Globalization.TaiwanCalendar"] = 4;
IP_DatePicker.SPCalendarType["System.Globalization.ThaiBuddhistCalendar"] = 0;
IP_DatePicker.objCurrentTextBox = null;
IP_DatePicker.GetFormattingInfo = function (g) {
  ULSrLq:;
  var e = ViewDataNode_GetViewDataNodeFromHtml(g),
    f = e.SnippetElement.ControlType["GetFormatting"],
    c = f(e),
    b = null,
    d = "";
  if (c.CultureInfo != null) b = c.CultureInfo();
  if (b != null) d = b.Lcid;
  if (d == "") d = "" + CurrentFormData.DefaultLcid(e.FormId);
  var a = {};
  a.objFormatting = c;
  a.objCultureInfo = b;
  a.strCulture = d;
  a.intCalendarType = c._intCalendar;
  return a;
};
IP_DatePicker.OnClick = IP_DatePicker_OnClick;
function IP_DatePicker_OnClick(objButtonControl, objEvent) {
  ULSrLq:;
  IP_DatePicker.strFormId = objButtonControl.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(IP_DatePicker.strFormId) != 1
    )
  )
    return;
  var strIframeId = "DatePickerIFrame",
    strIframeSrc,
    intCalendarType = 1,
    objTextBox = IP_DatePicker.GetTextBoxControl(objButtonControl);
  if (objTextBox == null) return false;
  var boolDisabled = objTextBox.getAttribute("readOnly");
  if (boolDisabled) return false;
  var strTextBoxId = objTextBox.id,
    strCurrentDate = objTextBox.value,
    objReturn = IP_DatePicker.GetFormattingInfo(objTextBox),
    objFormatting = objReturn.objFormatting,
    objCultureInfo = objReturn.objCultureInfo,
    strCulture = objReturn.strCulture;
  if (objCultureInfo == null)
    objCultureInfo = eval("dateTime" + strCulture * 1);
  intCalendarType = objReturn.intCalendarType;
  if (Util.IsNonEmptyString(strCurrentDate)) {
    var objViewDataNode = ViewDataNode_GetViewDataNodeFromHtml(objTextBox);
    if (objViewDataNode != null) {
      var objDatum = ViewDataNode_GetDatum(objViewDataNode);
      if (objDatum != null && objDatum.IsValid())
        strCurrentDate = objDatum.GetValue().substring(0, 10);
    }
  }
  var strFDOW = "0";
  if (objCultureInfo.k_intFirstDayOfWeek >= 0)
    strFDOW = "" + objCultureInfo.k_intFirstDayOfWeek;
  var objXmlFormView = View_GetViewObjectByFormId(IP_DatePicker.strFormId),
    objIframe = IFrameUtils_InsertIframe(
      objXmlFormView,
      strIframeId,
      true,
      "46"
    ),
    objDatePickerImage = objButtonControl.childNodes[0];
  objIframe.style.width = "175px";
  IP_DatePicker.objCurrentTextBox = objTextBox;
  var arrIframeSrc = [],
    webUrl = CurrentFormData.GetWebUrl(IP_DatePicker.strFormId);
  if (Util_IsNullOrEmptyString(webUrl))
    webUrl = CurrentFormData.SiteUrl(IP_DatePicker.strFormId);
  arrIframeSrc.push(webUrl);
  arrIframeSrc.push("/_layouts/iframe.aspx?&cal=");
  arrIframeSrc.push(intCalendarType);
  arrIframeSrc.push("&lcid=");
  arrIframeSrc.push(strCulture);
  arrIframeSrc.push("&langid=");
  arrIframeSrc.push(CurrentFormData_LanguageLcid(IP_DatePicker.strFormId));
  arrIframeSrc.push("&fdow=");
  arrIframeSrc.push(strFDOW);
  arrIframeSrc.push("&idate=");
  strIframeSrc = arrIframeSrc.join("");
  SelectionService_RememberFocus(objButtonControl, objEvent);
  SelectionService_RememberScrollPosition();
  clickDatePickerHelper(
    strTextBoxId,
    strIframeId,
    objDatePickerImage,
    strCurrentDate,
    strIframeSrc,
    IP_DatePicker.OnSelectDate,
    DatePickerOnClose
  );
  Util.StopEventProprogation(objEvent);
  return false;
}
IP_DatePicker.Close = function (a) {
  ULSrLq:;
  IP_DatePicker.strFormId = a;
  DatePickerOnClose();
};
IP_DatePicker.OnSelectDate = IP_DatePicker_OnSelectDate;
function IP_DatePicker_OnSelectDate(d, e) {
  ULSrLq:;
  if (
    IP_DatePicker.objCurrentTextBox == null ||
    d.id != IP_DatePicker.objCurrentTextBox.id
  )
    return;
  var k = d.getAttribute("FormId"),
    h = ViewDataNode_GetViewDataNodeFromHtml(d),
    f = ViewDataNode_GetDatum(h),
    g = f.GetDataInformation(),
    i = DataInformation.GetDataType(g).GetUnderlyingDatatype(),
    j = IP_DatePicker.GetFormattingInfo(d);
  if (i == DateTimeXsdDatatype) {
    var a = j.objFormatting;
    if (
      a.DateFormatType() != a.k_intDateFormatTypeNone ||
      a.TimeFormatType() != a.k_intTimeFormatTypeNone
    ) {
      var b = a.UnformatIso8601(f.GetValue(), a.k_intModeDateTime);
      if (b != null) {
        var c = a.UnformatIso8601(e, a.k_intModeDateTime);
        if (c != null) {
          b = DateUtils.ConvertToLocalTime(b);
          c.intHours = b.intHours;
          c.intMinutes = b.intMinutes;
          c.intSeconds = b.intSeconds;
          TextBox._AddLocalTimezone(b, c);
          e = a.UnformatFromDateTime(c, a.k_intModeDateTime, e);
        }
      }
    }
  }
  d.value = e;
  TextBox.OnChange(d, null);
}
IP_DatePicker.GetTextBoxControl = function (c) {
  ULSrLq:;
  var a = BaseControl.GetChildInfoPathControls(
      c.parentNode.parentNode.parentNode
    ),
    b = null;
  if (a.length == 2) b = a[0];
  return b;
};
function DatePickerButton() {}
DatePickerButton.OnClick = DatePickerButton_OnClick;
function DatePickerButton_OnClick(b, a) {
  ULSrLq:;
  IP_DatePicker.OnClick(b, a);
  Util.StopEventProprogation(a);
  return false;
}
DatePickerButton.OnAfterCreate = DatePickerButton_OnAfterCreate;
function DatePickerButton_OnAfterCreate(a) {
  ULSrLq:;
  if (ViewDataNode_IsDisabled(a)) {
    var b = document.getElementById(a[9]);
    b != null && DatePickerButton_SetDisable(b, true);
  }
}
DatePickerButton.OnKeyDown = DatePickerButton_OnKeyDown;
function DatePickerButton_OnKeyDown(a, b) {
  ULSrLq:;
  var d = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(d) != 1
    )
  )
    return true;
  var c = KeyboardService_GetVirtualKey(b);
  if (c == 1 || c == 18) return DatePickerButton_OnClick(a, b);
  return LeafControl.OnKeyPress(a, b);
}
DatePickerButton.Render = DatePickerButton_Render;
function DatePickerButton_Render(b, d, g, a) {
  ULSrLq:;
  var e = LeafControl_InitializeViewDataNode(g, b, d),
    h = View.GetTemplateType(b.FormId),
    c = DatePickerButton_Template;
  if (h == 1) {
    c = DatePickerButton_PrintTemplate;
    return;
  }
  var i = b.FormId;
  if (UserAgentInfo.strBrowser != 1 && !CurrentFormData_IsV4UI(i)) return;
  var f = LeafControl_RenderBeginWrappingSpan(e, b, d, a);
  a.push(c[0]);
  LeafControl_RenderLeafAttributes(e, b, d, false, true, a);
  a.push(c[1]);
  LeafControl_OutputAttribute(
    "title",
    IntlCoreStrings.k_strDatePickerButtonTitle,
    a
  );
  a.push(c[2]);
  LeafControl_OutputAttribute(
    "title",
    IntlCoreStrings.k_strDatePickerButtonTitle,
    a
  );
  LeafControl_OutputAttribute(
    "alt",
    IntlCoreStrings.k_strDatePickerButtonAlt,
    a
  );
  a.push(c[3]);
  f && LeafControl_RenderEndWrappingSpan(e, b, d, a);
}
DatePickerButton.SetDisable = DatePickerButton_SetDisable;
function DatePickerButton_SetDisable(c, b) {
  ULSrLq:;
  var a = c.childNodes[0];
  if (b) {
    a.style.opacity = "0.4";
    a.style.filter = "alpha(opacity=40);";
  } else {
    a.style.opacity = "1";
    a.style.filter = "alpha(opacity=100);";
  }
}
DatePickerButton.IsFocusable = DatePickerButton_IsFocusable;
function DatePickerButton_IsFocusable() {
  ULSrLq:;
  return true;
}
DatePickerButton.OnFocus = LeafControl.OnFocus;
DatePickerButton.OnBlur = LeafControl.OnBlur;
function Button() {}
Button.GetFormatting = Button_GetFormatting;
function Button_GetFormatting() {
  ULSrLq:;
  return null;
}
Button.GetValueFromControl = BaseControl.GetValueFromControl;
Button.SetValueOfControl = BaseControl.SetValueOfControl;
Button.AddEventLogEntry = Button_AddEventLogEntry;
function Button_AddEventLogEntry(a) {
  ULSrLq:;
  var c = BaseControl.GetContainerId(a.id),
    b = document.getElementById(c);
  return EventLog_Add(
    a.getAttribute("FormId"),
    1,
    a,
    a.getAttribute("buttonid"),
    BaseControl.GetOriginalId(b),
    "",
    false,
    false,
    false,
    0,
    1
  );
}
Button.OnClick = Button_OnClick;
function Button_OnClick(a, c) {
  ULSrLq:;
  var b = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(b) != 1
    )
  )
    return;
  Button_OnClickImpl(a, c);
}
function Button_OnClickImpl(a, d) {
  ULSrLq:;
  var i = a.getAttribute("FormId"),
    f = ViewDataNode_GetViewDataNodeFromHtml(a),
    c = f.SnippetElement,
    e = true;
  if (Button_GetButtonType(c) == 3 || Button_HasOnlySubmitRule(f))
    if (!View.PreSubmitActions(i)) return;
  SelectionService.RememberFocus(a, d);
  if (Button_GetButtonType(c) == 6) {
    var h = Snippet_GetRoundTripModel(c);
    if (h == 2) e = false;
  }
  var b = true;
  if (e) b = Button.AddEventLogEntry(a);
  var j = a.Id;
  if (b) b = ViewDataNode_OnControlChange(a);
  var g = document.getElementById(j);
  g != null && LeafControl.OnClick(a, d);
  Util_StopEventProprogation(d);
}
Button.RefreshControlData = Button_RefreshControlData;
function Button_RefreshControlData(b, e) {
  ULSrLq:;
  var d = b.SnippetElement,
    c = b._objViewDataNodeParent,
    a = Button_GetValueFunction(d);
  if (a != null) {
    var f = Expr.String(Expr_Evaluate(a, c, 0));
    e.setAttribute("value", f);
  }
}
Button.Render = Button_Render;
function Button_Render(b, c, g, a) {
  ULSrLq:;
  var e = LeafControl_InitializeViewDataNode(g, b, c),
    h = View.GetTemplateType(b.FormId),
    d = Button_Template;
  if (h == 1) d = Button_PrintTemplate;
  var f = LeafControl_RenderBeginWrappingSpan(e, b, c, a);
  a.push(d[0]);
  LeafControl_RenderLeafAttributes(e, b, c, true, true, a);
  LeafControl_OutputAttribute("buttonid", Button_GetButtonId(c), a);
  LeafControl_OutputAttribute("value", Button_GetButtonText(b), a);
  a.push(d[1]);
  f && LeafControl_RenderEndWrappingSpan(e, b, c, a);
}
function Button_GetButtonText(a) {
  ULSrLq:;
  return a[1][2][0];
}
function Button_GetButtonId(a) {
  ULSrLq:;
  return a[6][2][0];
}
function Button_GetButtonType(a) {
  ULSrLq:;
  return a[6][2][1];
}
function Button_HasDynamicValue(a) {
  ULSrLq:;
  return a[6][2][2] == 1;
}
function Button_GetValueFunction(a) {
  ULSrLq:;
  return a[6][2][3];
}
Button.IsFocusable = Button_IsFocusable;
function Button_IsFocusable() {
  ULSrLq:;
  return true;
}
function Button_HasOnlySubmitRule(b) {
  ULSrLq:;
  var c = b.SnippetElement[7][1],
    a = c[3];
  if (a != null && a.length == 1) {
    var d = a[0],
      e = d[2];
    return e == 2;
  }
  return false;
}
Button.OnChange = LeafControl.OnChange;
Button.OnFocus = LeafControl.OnFocus;
Button.OnBlur = LeafControl.OnBlur;
Button.OnMouseOver = LeafControl.OnMouseOver;
Button.OnMouseOut = LeafControl.OnMouseOut;
Button.OnMouseDown = LeafControl.OnMouseDown;
Button.OnMouseUp = LeafControl.OnMouseUp;
Button.OnKeyPress = LeafControl.OnKeyPress;
Button.OnAfterCreate = LeafControl.OnAfterCreate;
Button.IsValid = LeafControl.IsValid;
Button.IsSelected = LeafControl.IsSelected;
Button.Select = LeafControl.Select;
Button.UnSelect = LeafControl.UnSelect;
Button.RestoreFocus = LeafControl.RestoreFocus;
Button.Highlight = LeafControl.Highlight;
Button.RemoveHighlight = LeafControl.RemoveHighlight;
InDocSign.currentControl = null;
InDocSign.strFormId = "";
InDocSign.boolDownloadControls = false;
InDocSign.boolIsAXControlInstalled = false;
function InDocSign() {}
function InDocSign_ControlRequiresDownload() {
  ULSrLq:;
  var a = false;
  try {
    var b = new ActiveXObject("InfoPathFormServer.DigitalSignatures");
    if (b == null) a = true;
  } catch (c) {
    a = true;
  }
  return a;
}
InDocSign.OnAfterCreate = InDocSign_OnAfterCreate;
function InDocSign_OnAfterCreate(b) {
  ULSrLq:;
  var a = document.getElementById(b[9]);
  if (a == null) return;
  InDocSign.strFormId = a.getAttribute("FormId");
  var d = Snippet_GetSnippetElementFromHtml(a),
    f = BaseControl.GetDirection(InDocSign.strFormId, d);
  a.setAttribute("rtl", f == 2);
  if (
    InDocSign.boolIsAXControlInstalled == false &&
    CurrentFormData_HasSignature(InDocSign.strFormId)
  )
    InDocSign.boolIsAXControlInstalled =
      InDocSign_ControlRequiresDownload() == false;
  if (!InDocSign.IsSigned(b)) {
    var c = InDocSign.GetCollectionForInDocSign(b);
    if (c != null) {
      var d = c.SnippetElement;
      if (d[5] == 4) {
        var e = ViewDataNode_GetChildNodes(c);
        e != null && e.length == 0 && InDocSign.ShowClickToSignLink(a, false);
      }
    }
  } else InDocSign.CanAddSignature(b) && InDocSign.ShowClickToSignLink(a, true);
  LeafControl.OnAfterCreate(b);
}
InDocSign.ShowClickToSignLink = InDocSign_ShowClickToSignLink;
function InDocSign_ShowClickToSignLink(c, a) {
  ULSrLq:;
  var d = a ? "block" : "none",
    b = c.childNodes[0];
  b.style.display = a ? "block" : "none";
}
InDocSign._lastVerifyWindowTimer = null;
InDocSign.OnClick = InDocSign_OnClick;
function InDocSign_OnClick(c, a) {
  ULSrLq:;
  var b;
  InDocSign.strFormId = c.getAttribute("FormId");
  var k = GlobalFormData.Get(InDocSign.strFormId);
  a.returnValue = false;
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(InDocSign.strFormId) != 1
    )
  )
    return;
  BaseControl.OnClick(c, a);
  var o = ViewDataNode_GetViewDataNodeFromHtml(c);
  b = CrossBrowserLibrary_GetEventSourceElement(a);
  if (InDocSign.IsEventInsideAddSignature(b)) {
    if (b.tagName.toLowerCase() != "a") return;
    if (
      UserAgentInfo.strBrowser == 1 &&
      window.navigator.appVersion.indexOf("Win64") == -1
    ) {
      SelectionService.RememberFocus(c, a);
      SelectionService.RememberScrollPosition();
      if (!window.clientInformation.onLine) {
        UserMessages.ShowAlertMessage(
          IntlCoreStrings.k_strSignatureAddOffline,
          true
        );
        Util.StopEventProprogation(a);
        return;
      }
      c.setAttribute(
        "eventLog",
        k.eventLogStaticData.CreateEventLogEntryWithVersion()
      );
      if (
        EventLog.Count(InDocSign.strFormId) > 1 ||
        EventLog_IsEventLogFirstRequestOptimized(InDocSign.strFormId)
      ) {
        UserMessages.ShowAlertMessage(
          IntlCoreStrings.k_strSignaturesPromptForRefresh,
          true
        );
        View_SubmitForm(InDocSign.strFormId, false, 17, 0, false);
        return;
      } else {
        if (ErrorVisualization_HasInvalidControlInView(InDocSign.strFormId))
          if (
            !UserMessages.ShowConfirmMessage(
              IntlCoreStrings.k_strSignaturesPromptForValidation,
              true
            )
          ) {
            Util.StopEventProprogation(a);
            return;
          }
        try {
          if (InDocSign.HasInvalidSignatures(o))
            if (
              !UserMessages.ShowConfirmMessage(
                IntlCoreStrings.k_strSignaturesPromptForInvalidSig,
                true
              )
            ) {
              Util.StopEventProprogation(a);
              return;
            }
          InDocSign.AddSignature(c, a);
        } catch (p) {
          InDocSign.currentControl = null;
        }
        SelectionService.RestoreFocus(InDocSign.strFormId);
        c.scrollIntoView(false);
      }
    } else {
      if (UserAgentInfo.strBrowser != 1) {
        a.preventDefault();
        a.stopPropagation();
      }
      UserMessages.ShowAlertMessage(
        IntlCoreStrings.k_strAddSignatureNotSupported,
        true
      );
      return;
    }
  } else {
    var f = InDocSign.GetTableRowIndex(b);
    if (f >= 0) {
      if (b.tagName.toLowerCase() == "img" && b.parentNode != null)
        b = b.parentNode;
      if (b.parentNode.getAttribute("canremovesignature") != null)
        InDocSign.RemoveSignature(c, b, f);
      else if (b.tagName.toLowerCase() == "a") {
        var g,
          i = null,
          h = null,
          j = null,
          l = false,
          m = window.screenLeft + document.body.offsetWidth / 2 - 688 / 2,
          n = window.screenTop + document.body.offsetHeight / 2 - 550 / 2;
        if (CurrentFormData.SessionState(InDocSign.strFormId).length == 0)
          g =
            CurrentFormData.SiteUrl(InDocSign.strFormId) +
            "/_layouts/SignatureDetails.FormServer.aspx?EventLog=" +
            encodeURIComponent(
              k.eventLogStaticData.CreateEventLogEntryWithVersion()
            ) +
            "&datadefinition=" +
            encodeURIComponent(c.getAttribute("signedblock")) +
            "&index=" +
            f;
        else {
          l = true;
          g =
            CurrentFormData.SiteUrl(InDocSign.strFormId) +
            "/_layouts/SignatureDetailsLoader.FormServer.aspx";
          h = c.getAttribute("signedblock");
          j = f;
          EventLog_EnsureEventLogStartEntry(InDocSign.strFormId);
          i = EventLog.Value(InDocSign.strFormId);
        }
        SelectionService.RememberFocus(c, a);
        if (UserAgentInfo.strBrowser == 1)
          if (window.clientInformation.onLine) {
            var e = [];
            e.push(i);
            e.push(h);
            e.push(j);
            e.push("");
            window.showModalDialog(
              g,
              e,
              "dialogLeft: " +
                m +
                "; dialogTop: " +
                n +
                "; dialogHeight: " +
                550 +
                "px; dialogWidth: " +
                688 +
                "px; status: no; scrollbars: yes; menubar: no; resizable: yes; help: no"
            );
          } else {
            UserMessages.ShowAlertMessage(
              IntlCoreStrings.k_strSignatureDetailsOffline,
              true
            );
            Util.StopEventProprogation(a);
            return;
          }
        else {
          var d = window.open(
            g,
            null,
            "top=" +
              n +
              ", left=" +
              m +
              ", height=" +
              550 +
              ", width=" +
              688 +
              ", status=no, scrollbars=yes, toolbar=no, menubar=no, resizable=yes, location=no"
          );
          if (d == null)
            UserMessages.ShowAlertMessage(
              IntlCoreStrings.k_strPromptOpenWindowFailed,
              true
            );
          else if (l) {
            InDocSign._lastVerifyWindowTimer != null &&
              window.clearTimeout(InDocSign._lastVerifyWindowTimer);
            InDocSign._lastVerifyWindowTimer = window.setTimeout(function () {
              ULSrLq:;
              if (d.document.getElementById("__EventLog") != null) {
                window.clearTimeout(InDocSign._lastVerifyWindowTimer);
                InDocSign._lastVerifyWindowTimer = null;
                d.document.getElementById("__EventLog").value = i;
                d.document.getElementById("datadefinition").value = h;
                d.document.getElementById("index").value = j;
                d.document.getElementById("bounce").submit();
              }
            }, 25);
          }
        }
        SelectionService.RestoreFocus(InDocSign.strFormId);
      }
    }
  }
}
function InDocSign_InstallAXControlsDone() {
  ULSrLq:;
  Dialog.HideDialog();
  if (Dialog.objShowDialogTimer != null) {
    window.clearInterval(Dialog.objShowDialogTimer);
    Dialog.objShowDialogTimer = null;
  }
  InDocSign.boolIsAXControlInstalled &&
    InDocSign.InsertAXControls(InDocSign.currentControl);
}
InDocSign._CallbackInstallAXControlsTimer = null;
function CallbackInstallAXControls() {
  ULSrLq:;
  InDocSign.boolIsAXControlInstalled =
    InDocSign_ControlRequiresDownload() == false;
  if (g_eulaWindow == null || InDocSign.boolIsAXControlInstalled == true) {
    window.clearInterval(InDocSign._CallbackInstallAXControlsTimer);
    InDocSign._CallbackInstallAXControlsTimer = null;
    InDocSign_InstallAXControlsDone();
  }
}
function InDocSign_InstallAXControls() {
  ULSrLq:;
  Dialog.HideDialog();
  try {
    InDocSign.strFormId = Dialog.strFormId;
    InDocSign.ShowEULA();
    if (InDocSign._CallbackInstallAXControlsTimer != null) {
      window.clearInterval(InDocSign._CallbackInstallAXControlsTimer);
      InDocSign._CallbackInstallAXControlsTimer = null;
    }
    InDocSign._CallbackInstallAXControlsTimer = window.setInterval(
      CallbackInstallAXControls,
      500
    );
  } catch (a) {}
}
InDocSign.ShowInstallAXControls = InDocSign_ShowInstallAXControls;
function InDocSign_ShowInstallAXControls() {
  ULSrLq:;
  var a = __GetDialogData_InstallDSigCtrl();
  a[1] = IntlCoreStrings.k_strInstallDSigCtrlDialogTitle;
  a[3] = Dialog.GetDirection();
  a[5] = Dialog.TextAlignmentStyle();
  a[10] = IntlCoreStrings.k_strPromptInstallAXControls;
  a[2][0][1] = IntlCoreStrings.k_strAlertButtonYes;
  a[2][1][1] = IntlCoreStrings.k_strAlertButtonNo;
  return Dialog_ShowModalDialog(Dialog.strFormId, "InstallDSigCtrl", a, null);
}
InDocSign.AddSignature = InDocSign_AddSignature;
function InDocSign_AddSignature(a, f) {
  ULSrLq:;
  var b = a.children.tags("OBJECT");
  if (b.length != 2) {
    b.length == 1 && a.removeChild(b[0]);
    for (var e = a.children.tags("IMG"), c = 0; c < e.length; c++)
      a.removeChild(e[c]);
    if (!PostbackBody._boolXmlHttpSupported) {
      InDocSign.boolDownloadControls = true;
      InDocSign.currentControl = a;
      InDocSign.OnInsertFailure(false);
      return;
    }
    try {
      InDocSign.currentControl = a;
      if (InDocSign.boolIsAXControlInstalled) InDocSign.InsertAXControls(a);
      else InDocSign.ShowInstallAXControls();
    } catch (d) {
      InDocSign.boolDownloadControls = false;
    }
  } else if (b[1].children.tags("span").length == 0)
    try {
      Util.StopEventProprogation(f);
      InDocSign.boolSignatureInProgress = true;
      b[1].ShowSignatureDlg(a.id);
    } catch (d) {
      InDocSign.boolSignatureInProgress = false;
      UserMessages.ShowMessage(
        new UserMessage(IntlCoreStrings.k_strShowSignatureDlgFailure),
        4,
        InDocSign.strFormId
      );
    }
}
InDocSign.IsEventInsideAddSignature = InDocSign_IsEventInsideAddSignature;
function InDocSign_IsEventInsideAddSignature(a) {
  ULSrLq:;
  for (var b = false, c = 0; c < 5; c++) {
    if (a.getAttribute("ScriptClass") == "InDocSign") {
      b = true;
      break;
    }
    a = a.parentNode;
    if (a == null) break;
  }
  return b;
}
var g_eulaWindow = null;
InDocSign.ShowEULA = InDocSign_ShowEULA;
function InDocSign_ShowEULA() {
  ULSrLq:;
  var c =
      CurrentFormData.SiteUrl(InDocSign.strFormId) +
      "/_layouts/SignatureEULA.FormServer.aspx",
    a = window.screenLeft + document.body.offsetWidth / 4,
    b = window.screenTop + document.body.offsetHeight / 4;
  g_eulaWindow = window.open(
    c,
    "Eula",
    "left=" +
      a +
      ",top=" +
      b +
      ",height=400,width=600,status=no,scrollbars=no,menubar=no,resizable=no,help=no",
    true
  );
  if (g_eulaWindow == null)
    UserMessages.ShowAlertMessage(
      IntlCoreStrings.k_strPromptOpenWindowFailed,
      true
    );
  else
    InDocSign._SetEulaParamtersTimer = window.setTimeout(
      "SetEulaParamters()",
      50
    );
}
InDocSign._SetEulaParamtersTimer = null;
function SetEulaParamters() {
  ULSrLq:;
  window.clearTimeout(InDocSign._SetEulaParamtersTimer);
  InDocSign._SetEulaParamtersTimer = null;
  var a = g_eulaWindow.document.getElementById("idDirection");
  if (a == null) {
    InDocSign._SetEulaParamtersTimer = window.setTimeout(
      "SetEulaParamters()",
      50
    );
    return;
  }
  g_eulaWindow.document.getElementById("idDirection").value = View.GetDirection(
    InDocSign.strFormId
  );
  g_eulaWindow.document.getElementById(
    "idSiteUrl"
  ).value = CurrentFormData.SiteUrl(InDocSign.strFormId);
  if (document.getElementById("idSiteUrl") == null) {
    var b =
      "<INPUT type='hidden' id='idSiteUrl' value='" +
      CurrentFormData.SiteUrl(InDocSign.strFormId) +
      "' /><INPUT type='hidden' id='idDirection' value='" +
      View.GetDirection(InDocSign.strFormId) +
      "' />";
    InDocSign.currentControl.innerHTML = InDocSign.currentControl.innerHTML + b;
  }
  g_eulaWindow.focus();
}
InDocSign.InsertAXControls = InDocSign_InsertAXControls;
function InDocSign_InsertAXControls(a) {
  ULSrLq:;
  var b = a.getAttribute("FormId");
  a.onpropertychange = InDocSign.OnPropertyChange;
  a.innerHTML =
    a.innerHTML +
    "<object VIEWASTEXT STYLE='display:none';  TABINDEX ='-1' id='" +
    a.id +
    ".DSigResCtrl' CLASSID='CLSID:8D5D65AC-273D-491e-8874-BBB4B63DEA67' CODEBASE='" +
    CurrentFormData.SiteUrl(b) +
    "/_layouts" +
    a.lcid +
    "/DSigRes.cab#Version=" +
    CurrentFormData_DSigResVersion(InDocSign.strFormId) +
    "'><img style='display:none' src='/_layouts/inc/signaturevalid.png' onload='InDocSign.OnInsertFailure(true);' /><param name='DSigControlID' value='" +
    a.id +
    "' /></object>";
}
InDocSign.OnFirstControlReady = InDocSign_OnFirstControlReady;
function InDocSign_OnFirstControlReady() {
  ULSrLq:;
  var a = InDocSign.currentControl;
  if (a != null)
    if (a.children.tags("OBJECT").length == 1) {
      var b = a.getAttribute("FormId");
      a.innerHTML =
        a.innerHTML +
        "<object VIEWASTEXT STYLE='display:none;' TABINDEX ='-1' id='" +
        a.id +
        ".DSigCtrl' CLASSID='CLSID:5EEE5BF6-DC9E-43be-9100-BF19643943C5' CODEBASE='" +
        CurrentFormData.SiteUrl(b) +
        "/_layouts/DSigCtrl.cab#Version=" +
        CurrentFormData_DSigCtrlVersion(InDocSign.strFormId) +
        "'><img style='display:none' src='/_layouts/inc/signaturevalid.png' onload='InDocSign.OnInsertFailure(true);' /><param name='DSigControlID' value='" +
        a.id +
        "' /></object>";
    }
}
InDocSign.OnSecondControlReady = InDocSign_OnSecondControlReady;
function InDocSign_OnSecondControlReady() {
  ULSrLq:;
  var a = InDocSign.currentControl;
  if (a != null)
    try {
      if (EventLog.Count(InDocSign.strFormId) > 1) {
        InDocSign.currentControl = null;
        UserMessages.ShowAlertMessage(
          IntlCoreStrings.k_strSignaturesPromptForRefresh,
          true
        );
        View_SubmitForm(InDocSign.strFormId, false, 17, 0, false);
      } else {
        var b = a.children.tags("OBJECT");
        if (b.length > 1) {
          var e =
            CurrentFormData.SiteUrl(InDocSign.strFormId) +
            "/_layouts/Signature.FormServer.aspx";
          a.setAttribute("signaturePage", e);
          var d = CurrentFormData_IdnDomain(InDocSign.strFormId);
          a.setAttribute("WebIRI", d);
          b[1].ShowSignatureDlg(a.id);
        }
      }
    } catch (c) {
      InDocSign.currentControl = null;
      UserMessages.ShowMessage(
        new UserMessage(IntlCoreStrings.k_strShowSignatureDlgFailure),
        4,
        InDocSign.strFormId
      );
    }
}
InDocSign.OnInsertFailure = InDocSign_OnInsertFailure;
function InDocSign_OnInsertFailure(c) {
  ULSrLq:;
  if (InDocSign.currentControl != null) {
    var a = InDocSign.currentControl;
    InDocSign.currentControl = null;
    var b = a.children.tags("OBJECT");
    b.length > 0 && a.removeChild(b[0]);
    if (InDocSign.boolDownloadControls) {
      InDocSign.boolDownloadControls = false;
      UserMessages.ShowAlertMessage(
        IntlCoreStrings.k_strErrorAXInstantiation,
        true
      );
    }
  } else if (!c)
    if (InDocSign.boolDownloadControls) {
      InDocSign.boolDownloadControls = false;
      UserMessages.ShowAlertMessage(
        IntlCoreStrings.k_strErrorAXInstantiation,
        true
      );
    }
}
InDocSign.RemoveSignature = InDocSign_RemoveSignature;
function InDocSign_RemoveSignature(a, b, c) {
  ULSrLq:;
  if (b.parentNode.getAttribute("canremovesignature") == "true")
    UserMessages.ShowConfirmMessage(
      IntlCoreStrings.k_strSignaturesPromptForDelete,
      true
    ) &&
      EventLog_Add(
        a.getAttribute("FormId"),
        17,
        a,
        "true",
        c,
        a.getAttribute("signedblock"),
        true,
        false,
        false,
        3,
        0
      );
  else
    UserMessages.ShowAlertMessage(
      IntlCoreStrings.k_strDeleteConterSignatureNotAllowed,
      true
    );
}
InDocSign.OnPropertyChange = InDocSign_OnPropertyChange;
function InDocSign_OnPropertyChange() {
  ULSrLq:;
  var b,
    a = false;
  if (Window_GetEvent().propertyName == "signcode") a = true;
  if (a) {
    if (this.signcode != -2 && this.signcode != -1) {
      InDocSign.boolDownloadControls = false;
      b = this.viewstate;
      GlobalFormData.Get(
        InDocSign.strFormId
      ).eventLogStaticData.SessionState = b;
    }
    switch (this.signcode) {
      case -2:
        window.setTimeout("InDocSign.OnFirstControlReady()", 500);
        break;
      case -1:
        window.setTimeout("InDocSign.OnSecondControlReady()", 500);
        break;
      case 1:
        View_SubmitForm(InDocSign.strFormId, false, 16, 0, false);
        break;
      case 0:
        break;
      case 3:
        UserMessages.ShowMessage(
          new UserMessage(IntlCoreStrings.k_strShowSignatureDlgNodeRO),
          4,
          InDocSign.strFormId
        );
        break;
      case 4:
        UserMessages.ShowMessage(
          new UserMessage(IntlCoreStrings.k_strShowSignatureDlgSessionClosed),
          5,
          InDocSign.strFormId
        );
        break;
      case 5:
        UserMessages.ShowMessage(
          new UserMessage(IntlCoreStrings.k_strShowSignatureDlgFatalError),
          5,
          InDocSign.strFormId
        );
        break;
      case 6:
        UserMessages.ShowAlertMessage(
          IntlCoreStrings.k_strShowSignatureDlgFailure,
          true
        );
        break;
      case 7:
        UserMessages.ShowMessage(
          new UserMessage(IntlCoreStrings.k_strActiveSessionsTimeout),
          5,
          InDocSign.strFormId
        );
        break;
      default:
        UserMessages.ShowMessage(
          new UserMessage(IntlCoreStrings.k_strShowSignatureDlgFailure),
          4,
          InDocSign.strFormId
        );
    }
  }
}
InDocSign.GetInDocSignForCollection = InDocSign_GetInDocSignForCollection;
function InDocSign_GetInDocSignForCollection(b) {
  ULSrLq:;
  var a = BaseControl.GetNextSiblingInfoPathControl(b);
  if (a != null && a.getAttribute("ScriptClass") == "InDocSign") return a;
  else return null;
}
InDocSign.GetCollectionForInDocSign = InDocSign_GetCollectionForInDocSign;
function InDocSign_GetCollectionForInDocSign(a) {
  ULSrLq:;
  return ViewDataNode_FindPreviousSibling(a);
}
InDocSign.OnMouseOver = InDocSign_OnMouseOver;
function InDocSign_OnMouseOver(a, d) {
  ULSrLq:;
  var c = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(c) != 1
    )
  )
    return;
  var b = ViewDataNode_GetViewDataNodeFromHtml(a);
  if (!InDocSign.IsSigned(b)) a.runtimeStyle.textDecoration = "underline";
  LeafControl.OnMouseOver(a, d);
}
InDocSign.OnMouseOut = InDocSign_OnMouseOut;
function InDocSign_OnMouseOut(a, d) {
  ULSrLq:;
  var c = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(c) != 1
    )
  )
    return;
  var b = ViewDataNode_GetViewDataNodeFromHtml(a);
  if (!InDocSign.IsSigned(b)) a.runtimeStyle.textDecoration = "none";
  LeafControl.OnMouseOut(a, d);
}
InDocSign.GetIsSigned = InDocSign_GetIsSigned;
function InDocSign_GetIsSigned(a) {
  ULSrLq:;
  return a[1][2][0];
}
InDocSign.IsSigned = InDocSign_IsSigned;
function InDocSign_IsSigned(a) {
  ULSrLq:;
  return InDocSign.GetIsSigned(a) != "0";
}
InDocSign.CanAddSignature = InDocSign_CanAddSignature;
function InDocSign_CanAddSignature(b) {
  ULSrLq:;
  var a = b[1][2][1];
  return a != "0";
}
InDocSign.HasInvalidSignatures = InDocSign_HasInvalidSignatures;
function InDocSign_HasInvalidSignatures(a) {
  ULSrLq:;
  if (!InDocSign.IsSigned(a)) return false;
  else {
    var b = a[1][2][2];
    return b != "0";
  }
}
InDocSign.GetCanAddSignature = InDocSign_GetCanAddSignature;
function InDocSign_GetCanAddSignature(a) {
  ULSrLq:;
  return a[1][2][1];
}
InDocSign.GetSignaturesInfo = InDocSign_GetSignaturesInfo;
function InDocSign_GetSignaturesInfo(a) {
  ULSrLq:;
  return a[1][2][3];
}
InDocSign.GetSignedDataBlock = InDocSign_GetSignedDataBlock;
function InDocSign_GetSignedDataBlock(a) {
  ULSrLq:;
  return a[6][2][0];
}
InDocSign.GetVerifyMessage = InDocSign_GetVerifyMessage;
function InDocSign_GetVerifyMessage(a) {
  ULSrLq:;
  return a[6][2][1];
}
InDocSign.GetCurrentViewName = InDocSign_GetCurrentViewName;
function InDocSign_GetCurrentViewName(a) {
  ULSrLq:;
  return a[6][2][2];
}
InDocSign.GetUIText = InDocSign_GetUIText;
function InDocSign_GetUIText(a) {
  ULSrLq:;
  return a[6][2][3];
}
InDocSign.GetSolutionFingerprint = InDocSign_GetSolutionFingerprint;
function InDocSign_GetSolutionFingerprint(a) {
  ULSrLq:;
  return a[6][2][4];
}
InDocSign.GetServerVersion = InDocSign_GetServerVersion;
function InDocSign_GetServerVersion(a) {
  ULSrLq:;
  return a[6][2][5];
}
InDocSign.GetLcid = InDocSign_GetLcid;
function InDocSign_GetLcid(a) {
  ULSrLq:;
  return a[6][2][6];
}
InDocSign.GetControlVersion = InDocSign_GetControlVersion;
function InDocSign_GetControlVersion(a) {
  ULSrLq:;
  return a[6][2][7];
}
InDocSign.GetWebIRI = InDocSign_GetWebIRI;
function InDocSign_GetWebIRI(a) {
  ULSrLq:;
  return a[6][2][8];
}
InDocSign.GetTableRowIndex = InDocSign_GetTableRowIndex;
function InDocSign_GetTableRowIndex(a) {
  ULSrLq:;
  var d = -1;
  while (a != null && a.tagName.toLowerCase() != "table") {
    if (a.tagName.toLowerCase() == "body") return -1;
    a = a.parentNode;
  }
  if (a != null) {
    var c,
      b = a.parentNode.parentNode.parentNode;
    while (b != null) {
      c = b.tagName;
      if (c != null && c.toLowerCase() == "tr") {
        d = d + 1;
        b = b.previousSibling;
      } else break;
    }
  }
  return d;
}
InDocSign.RestoreFocus = InDocSign_RestoreFocus;
function InDocSign_RestoreFocus(a) {
  ULSrLq:;
  if (a == null) return;
  var b = Util_FindFirstFocusableHtmlDescendantControl(a);
  if (b)
    try {
      b.focus();
      b.focus();
    } catch (c) {
      BaseControl.Focus(a);
    }
  else BaseControl.Focus(a);
}
InDocSign.ResolveSpecialValue = InDocSign_ResolveSpecialValue;
function InDocSign_ResolveSpecialValue(d, c, b, e) {
  ULSrLq:;
  var a = LeafControl.ResolveSpecialValue(d, c, b, e);
  if (a == null)
    switch (d) {
      case 10:
        a = InDocSign.GetSignedDataBlock(b);
        break;
      case 11:
        a = InDocSign.GetVerifyMessage(b);
        break;
      case 12:
        a = InDocSign.GetCurrentViewName(b);
        break;
      case 13:
        a = InDocSign.GetUIText(b);
        break;
      case 14:
        a = InDocSign.GetIsSigned(c);
        break;
      case 15:
        a = InDocSign.GetCanAddSignature(c);
        break;
      case 16:
        a = InDocSign.GetSignaturesInfo(c);
        break;
      case 17:
        a = InDocSign.GetSolutionFingerprint(b);
        break;
      case 18:
        a = InDocSign.GetServerVersion(b);
        break;
      case 19:
        a = InDocSign.GetLcid(b);
        break;
      case 20:
        a = InDocSign.GetControlVersion(b);
    }
  return a;
}
InDocSign.Render = InDocSign_Render;
function InDocSign_Render(b, e, f, d) {
  ULSrLq:;
  var c = View.GetTemplateType(b.FormId),
    a;
  if (InDocSign.IsSigned(b)) {
    a = InDocSign_Template_Verify;
    if (c == 1) a = InDocSign_PrintTemplate_Verify;
  } else {
    a = InDocSign_Template_Sign;
    if (c == 1) a = InDocSign_PrintTemplate_Sign;
  }
  LeafControl.Render(b, e, f, d, a);
}
InDocSign.IsFocusable = InDocSign_IsFocusable;
function InDocSign_IsFocusable() {
  ULSrLq:;
  return true;
}
InDocSign.OnChange = BaseControl.OnChange;
InDocSign.OnFocus = BaseControl.OnFocus;
InDocSign.OnBlur = BaseControl.OnBlur;
InDocSign.OnKeyPress = BaseControl.OnKeyPress;
InDocSign.IsValid = BaseControl.IsValid;
InDocSign.IsSelected = BaseControl.IsSelected;
InDocSign.Select = BaseControl.Select;
InDocSign.UnSelect = BaseControl.UnSelect;
function ExpressionBox() {}
ExpressionBox.GetFormatting = BaseControl.GetFormatting;
ExpressionBox.GetValueFromControl = ExpressionBox_GetValueFromControl;
function ExpressionBox_GetValueFromControl() {
  ULSrLq:;
  return null;
}
ExpressionBox.RefreshControlData = ExpressionBox_RefreshControlData;
function ExpressionBox_RefreshControlData(a, d) {
  ULSrLq:;
  var g = a.SnippetElement,
    f = g[6][2],
    e = a._objViewDataNodeParent,
    b = f[0];
  if (b != null) {
    var h = ExpressionBox.GetFormatting(a),
      c = Expr.String(Expr_Evaluate(b, e, 0));
    if (c.length > 0) Util.SetInnerText(d, h.Format(c));
    else Util_SetInnerHTMLtoNBSP(d);
  }
}
ExpressionBox.SetDisable = ExpressionBox_SetDisable;
function ExpressionBox_SetDisable() {}
ExpressionBox.OnAfterCreate = ExpressionBox_OnAfterCreate;
function ExpressionBox_OnAfterCreate() {}
ExpressionBox.RestoreFocus = ExpressionBox_RestoreFocus;
function ExpressionBox_RestoreFocus() {}
ExpressionBox.Render = ExpressionBox_Render;
function ExpressionBox_Render(b, c, h, a) {
  ULSrLq:;
  var d = LeafControl_InitializeViewDataNode(h, b, c),
    f = LeafControl_RenderBeginWrappingSpan(d, b, c, a);
  a.push(ExpressionBox_Template[0]);
  LeafControl_RenderLeafAttributes(d, b, c, false, true, a);
  a.push(ExpressionBox_Template[1]);
  var e = BaseControl_GetFormattedValue(b),
    g = Util_GetEncodingType(ExpressionBox_Template[2]);
  if (e.length > 0) a.push(Util_HtmlEncodeSpecialValue(e, g));
  else a.push("&nbsp;");
  a.push(ExpressionBox_Template[3]);
  f && LeafControl_RenderEndWrappingSpan(d, b, c, a);
}
ExpressionBox.OnClick = LeafControl.OnClick;
ExpressionBox.OnFocus = LeafControl.OnFocus;
ExpressionBox.OnMouseOver = LeafControl.OnMouseOver;
ExpressionBox.OnMouseOut = LeafControl.OnMouseOut;
ExpressionBox.OnMouseDown = LeafControl.OnMouseDown;
ExpressionBox.OnMouseUp = LeafControl.OnMouseUp;
ExpressionBox.OnKeyPress = LeafControl.OnKeyPress;
ExpressionBox.IsValid = LeafControl.IsValid;
ExpressionBox.OnBlur = LeafControl.OnBlur;
ExpressionBox.IsSelected = LeafControl.IsSelected;
ExpressionBox.Select = LeafControl.Select;
ExpressionBox.SetValueOfControl = BaseControl.SetValueOfControl;
ExpressionBox.UnSelect = LeafControl.UnSelect;
ExpressionBox.Highlight = LeafControl.Highlight;
ExpressionBox.RemoveHighlight = LeafControl.RemoveHighlight;
function CheckBox() {}
CheckBox.GetFormatting = BaseControl.GetFormatting;
CheckBox.GetValueFromControl = function (a) {
  ULSrLq:;
  if (a.checked) return CheckBox.GetOnValue(a);
  else return CheckBox.GetOffValue(a);
};
CheckBox.SetValueOfControl = function (a, b) {
  ULSrLq:;
  var c = Util.GetPlainTextFromValueObject(b);
  if (c == CheckBox.GetOnValue(a)) a.checked = true;
  else a.checked = false;
  return a;
};
CheckBox.AddEventLogEntry = function (a) {
  ULSrLq:;
  var c = CheckBox.GetOnValue(a),
    b = CheckBox.GetOffValue(a);
  return EventLog_Add(
    a.getAttribute("FormId"),
    0,
    a,
    BaseControl.GetOriginalId(a),
    "",
    a.checked ? c : b,
    false,
    false,
    false,
    0,
    1
  );
};
CheckBox.OnClick = CheckBox_OnClick;
function CheckBox_OnClick(a, b) {
  ULSrLq:;
  var e = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(e) != 1
    )
  ) {
    SelectionService_Select(a);
    return;
  }
  var c = CheckBox.AddEventLogEntry(a);
  SelectionService.RememberFocus(a, b);
  LeafControl.OnChange(a, b);
  var f = a.Id;
  if (c) c = ViewDataNode_OnControlChange(a);
  var d = document.getElementById(f);
  if (d != null) LeafControl.OnClick(a, b);
  else Util_StopEventProprogation(b);
  return true;
}
CheckBox.OnAfterCreate = CheckBox_OnAfterCreate;
function CheckBox_OnAfterCreate() {}
CheckBox.RestoreFocus = CheckBox_RestoreFocus;
function CheckBox_RestoreFocus(a) {
  ULSrLq:;
  LeafControl.RestoreFocus(a);
  a.select();
}
CheckBox.GetOnValue = function (a) {
  ULSrLq:;
  return CheckBox.GetOnValueFromSnippet(Snippet_GetSnippetElementFromHtml(a));
};
CheckBox.GetOnValueFromSnippet = function (a) {
  ULSrLq:;
  return a[6][2][0];
};
CheckBox.GetOffValue = function (b) {
  ULSrLq:;
  var a = Snippet_GetSnippetElementFromHtml(b);
  return a[6][2][1];
};
CheckBox.Render = CheckBox_Render;
function CheckBox_Render(b, c, i, a) {
  ULSrLq:;
  var e = LeafControl_InitializeViewDataNode(i, b, c),
    f = View.GetTemplateType(b.FormId),
    d = CheckBox_Template;
  if (f == 1) d = CheckBox_PrintTemplate;
  var g = LeafControl_RenderBeginWrappingSpan(e, b, c, a);
  a.push(d[0]);
  LeafControl_RenderLeafAttributes(e, b, c, true, true, a);
  var h = BaseControl_GetFormattedValue(b);
  if (h == CheckBox.GetOnValueFromSnippet(c)) a.push("checked");
  else f == 1 && a.push(" unchecked=true");
  a.push(d[1]);
  g && LeafControl_RenderEndWrappingSpan(e, b, c, a);
}
CheckBox.IsFocusable = CheckBox_IsFocusable;
function CheckBox_IsFocusable() {
  ULSrLq:;
  return true;
}
CheckBox.OnFocus = CheckBox_OnFocus;
function CheckBox_OnFocus(a) {
  ULSrLq:;
  a.focus();
  a.focus();
}
CheckBox.OnChange = LeafControl.OnChange;
CheckBox.OnFocus = LeafControl.OnFocus;
CheckBox.OnBlur = LeafControl.OnBlur;
CheckBox.OnMouseDown = LeafControl.OnMouseDown;
CheckBox.OnMouseUp = LeafControl.OnMouseUp;
CheckBox.OnKeyPress = LeafControl.OnKeyPressKillEnterEvent;
CheckBox.IsValid = LeafControl.IsValid;
CheckBox.IsSelected = LeafControl.IsSelected;
CheckBox.Select = LeafControl.Select;
CheckBox.UnSelect = LeafControl.UnSelect;
CheckBox.Highlight = LeafControl.Highlight;
CheckBox.RemoveHighlight = LeafControl.RemoveHighlight;
CheckBox.OnMouseOver = LeafControl.OnMouseOver;
CheckBox.OnMouseOut = LeafControl.OnMouseOut;
CheckBox.SetHidden = LeafControl.SetHidden;
CheckBox.GetErrorMessageOffset = LeafControl.GetErrorMessageOffset;
CheckBox.GetErrorMessageOffsetTop = LeafControl.GetErrorMessageOffsetTop;
CheckBox.GetAsteriskOffsetNormal = LeafControl.GetAsteriskOffsetNormal;
CheckBox.GetAsteriskOffsetTop = LeafControl.GetAsteriskOffsetTop;
function RadioButton() {}
RadioButton.GetFormatting = BaseControl.GetFormatting;
RadioButton.GetValueFromControl = RadioButton_GetValueFromControl;
function RadioButton_GetValueFromControl(a) {
  ULSrLq:;
  if (a.checked) return RadioButton.GetOnValue(a);
  else return null;
}
RadioButton.SetValueOfControl = RadioButton_SetValueOfControl;
function RadioButton_SetValueOfControl(a, b) {
  ULSrLq:;
  var c = Util.GetPlainTextFromValueObject(b);
  if (c == RadioButton.GetOnValue(a)) a.checked = true;
  else a.checked = false;
  return a;
}
RadioButton.AddEventLogEntry = function (a) {
  ULSrLq:;
  return EventLog_Add(
    a.getAttribute("FormId"),
    0,
    a,
    BaseControl.GetOriginalId(a),
    "",
    RadioButton.GetOnValue(a),
    false,
    false,
    false,
    0,
    1
  );
};
RadioButton.OnClick = RadioButton_OnClick;
function RadioButton_OnClick(a, b) {
  ULSrLq:;
  var e = a.Id;
  if (a.checked) {
    var c = RadioButton.AddEventLogEntry(a);
    LeafControl.OnChange(a, b);
    if (c) c = ViewDataNode_OnControlChange(a);
  }
  var d = document.getElementById(e);
  if (d != null) LeafControl.OnClick(a, b);
  else Util_StopEventProprogation(b);
}
RadioButton.GetOnValue = function (a) {
  ULSrLq:;
  return RadioButton.GetOnValueFromSnippet(
    Snippet_GetSnippetElementFromHtml(a)
  );
};
RadioButton.GetOnValueFromSnippet = function (a) {
  ULSrLq:;
  return a[6][2][0];
};
RadioButton.OnAfterCreate = RadioButton_OnAfterCreate;
function RadioButton_OnAfterCreate() {}
RadioButton.Render = RadioButton_Render;
function RadioButton_Render(b, c, j, a) {
  ULSrLq:;
  var g = LeafControl_InitializeViewDataNode(j, b, c),
    e = View.GetTemplateType(b.FormId),
    f = RadioButton_Template;
  if (e == 1) f = RadioButton_PrintTemplate;
  var h = LeafControl_RenderBeginWrappingSpan(g, b, c, a);
  a.push(f[0]);
  LeafControl_RenderLeafAttributes(g, b, c, true, true, a);
  if (e != 1) {
    var d = [];
    d.push(b.FormId);
    d.push("_");
    d.push(RadioButton_GetNameFromSnippet(c));
    d.push("_");
    d.push(b._objViewDataNodeParent.OriginalId);
    LeafControl_OutputAttribute("name", d.join(), a);
  }
  var i = BaseControl_GetFormattedValue(b);
  if (i == RadioButton.GetOnValueFromSnippet(c)) a.push("checked");
  else e == 1 && a.push(" unchecked=true");
  a.push(f[1]);
  h && LeafControl_RenderEndWrappingSpan(g, b, c, a);
}
RadioButton.IsFocusable = RadioButton_IsFocusable;
function RadioButton_IsFocusable() {
  ULSrLq:;
  return true;
}
function RadioButton_GetNameFromSnippet(a) {
  ULSrLq:;
  return a[6][2][1];
}
RadioButton.OnChange = LeafControl.OnChange;
RadioButton.OnFocus = LeafControl.OnFocus;
RadioButton.OnBlur = LeafControl.OnBlur;
RadioButton.OnMouseDown = LeafControl.OnMouseDown;
RadioButton.OnMouseUp = LeafControl.OnMouseUp;
RadioButton.OnKeyPress = LeafControl.OnKeyPressKillEnterEvent;
RadioButton.IsValid = LeafControl.IsValid;
RadioButton.IsSelected = LeafControl.IsSelected;
RadioButton.Select = LeafControl.Select;
RadioButton.UnSelect = LeafControl.UnSelect;
RadioButton.RestoreFocus = LeafControl.RestoreFocus;
RadioButton.Highlight = LeafControl.Highlight;
RadioButton.RemoveHighlight = LeafControl.RemoveHighlight;
RadioButton.OnMouseOver = LeafControl.OnMouseOver;
RadioButton.OnMouseOut = LeafControl.OnMouseOut;
RadioButton.SetHidden = LeafControl.SetHidden;
RadioButton.GetErrorMessageOffset = LeafControl.GetErrorMessageOffset;
RadioButton.GetErrorMessageOffsetTop = LeafControl.GetErrorMessageOffsetTop;
RadioButton.GetAsteriskOffsetNormal = LeafControl.GetAsteriskOffsetNormal;
RadioButton.GetAsteriskOffsetTop = LeafControl.GetAsteriskOffsetTop;
function BaseList() {}
BaseList.SetHidden = LeafControl.SetHidden;
BaseList.GetValueFromControl = BaseList_GetValueFromControl;
function BaseList_GetValueFromControl(a) {
  ULSrLq:;
  return a.value;
}
BaseList.SetValueOfControl = BaseList_SetValueOfControl;
function BaseList_SetValueOfControl(a, b) {
  ULSrLq:;
  var c = Util.GetPlainTextFromValueObject(b);
  Util.SetListValue(a, c, true);
  return a;
}
BaseList.RefreshFilteredDynamicControl = BaseList_RefreshFilteredDynamicControl;
function BaseList_RefreshFilteredDynamicControl(a) {
  ULSrLq:;
  var b = ViewDataNode_GetViewDataNodeFromHtml(a),
    d = b.SnippetElement[7][1],
    c = ViewDataNode_GetFilterComplexity(d);
  if (c) {
    BaseList.ClearList(a);
    EventLog_Add(
      a.getAttribute("FormId"),
      30,
      a,
      b.OriginalId,
      b.OriginalId,
      "",
      true,
      false,
      false,
      0,
      0
    );
  }
  return c;
}
BaseList.RefreshControlData = BaseList_RefreshControlData;
function BaseList_RefreshControlData(b, a) {
  ULSrLq:;
  var l = b.SnippetElement,
    k = l[6][2],
    q = k[2],
    r = k[3],
    t = k[4];
  if (
    BaseList.IsDynamic(l) &&
    BaseList.GetDynamicList(b).length > 1 &&
    BaseList.GetDynamicList(b)[0] == ""
  ) {
    var i = b.SnippetElement[7][1];
    if (
      ViewDataNode_DoesNodeHaveFilter(i) &&
      BaseList.RefreshFilteredDynamicControl(a)
    )
      return;
  }
  if (q == null || r == null || t == null) return;
  a.boolIsRefreshed = true;
  var e = ViewDataNode_GetDatum(b).GetValue(),
    s = BaseList.IsListUnique(l),
    c = [],
    u = Expr.vpath_SelectViewPath(b, q),
    n = null;
  if (s) n = [];
  var p = false,
    i = b.SnippetElement[7][1],
    z = ViewDataNode_GetFilterComplexity(i),
    h = ViewDataNode_GetFilterFunction(i),
    x = null,
    y = null;
  if (h != null) {
    x = ViewDataNode_GetFilterSourceToTargetViewPath(i);
    y = Expr.vpath_SelectViewPath(b, x);
  }
  if (z == true) {
    var B = a.getAttribute("FormId");
    SelectionService_RememberFocus(a, null);
    SelectionService_RememberScrollPosition();
    EventLog_Add(
      B,
      30,
      a,
      BaseControl_GetOriginalId(a),
      "",
      "",
      true,
      false,
      false,
      0,
      0
    );
    return;
  }
  for (var j = 0; j < u.length; j++) {
    var w = u[j],
      v = true,
      m = Expr.vpath_SelectViewPath(w, r),
      o = Expr.vpath_SelectViewPath(w, t);
    m.length == 0 && m.push("");
    o.length == 0 && o.push("");
    var d = ViewDataNode_GetDatum(m[0]).GetValue(),
      f,
      g;
    if (typeof d == "object" && typeof d[0] == "string") f = Util.Trim(d[0]);
    else f = Util.Trim(d);
    d = ViewDataNode_GetDatum(o[0]).GetValue();
    if (typeof d == "object" && typeof d[0] == "string") g = Util.Trim(d[0]);
    else g = Util.Trim(d);
    if (s)
      if (n[f] == null) n[f] = true;
      else v = false;
    if (g == e) p = true;
    if (v) {
      var A = Expr.strFormId;
      Expr.strFormId = b.FormId;
      if (h != null && h(g, y[j])) {
        c.push(g);
        c.push(f);
      }
      Expr.strFormId = A;
      if (h == null) {
        c.push(g);
        c.push(f);
      }
    }
  }
  if (!p && e != "") {
    c.unshift(e);
    c.unshift(e);
  }
  c.unshift("");
  c.unshift("");
  BaseList.ClearList(a);
  BaseList.PopulateListFromArray(a, c);
  b.delayOptionLoad = false;
  if (h != null && a.options.length > 0) e = c[0];
  BaseList.SetListValue(a, e);
  BaseControl.RefreshVisualState(a);
}
BaseList.AddEventLogEntry = BaseList_AddEventLogEntry;
function BaseList_AddEventLogEntry(a) {
  ULSrLq:;
  if (a.selectedIndex == -1) return;
  var b = a.options[a.selectedIndex].value;
  return EventLog_Add(
    a.getAttribute("FormId"),
    0,
    a,
    BaseControl.GetOriginalId(a),
    "",
    b,
    false,
    false,
    false,
    0,
    1
  );
}
BaseList.OnChange = BaseList_OnChange;
function BaseList_OnChange(a, d) {
  ULSrLq:;
  var c = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(c) != 1
    )
  )
    return;
  var b = BaseList.AddEventLogEntry(a);
  LeafControl.OnChange(a, d);
  if (b) b = ViewDataNode_OnControlChange(a);
}
BaseList.OnAfterCreate = BaseList_OnAfterCreate;
function BaseList_OnAfterCreate(a) {
  ULSrLq:;
  if (!ViewDataNode_IsValid(a))
    if (ViewDataNode_IsBlank(a)) {
      var b = document.getElementById(a[9]);
      if (b == null) return;
      ErrorVisualization_ShowAsterisk(b, a);
    }
  BaseControl_EnsureScrollWidth(a.FormId);
}
BaseList.GetStaticList = BaseList_GetStaticList;
function BaseList_GetStaticList(a) {
  ULSrLq:;
  return a[6][2][1];
}
BaseList.IsListUnique = BaseList_IsListUnique;
function BaseList_IsListUnique(a) {
  ULSrLq:;
  return a[6][2][5];
}
BaseList.IsDynamic = BaseList_IsDynamic;
function BaseList_IsDynamic(a) {
  ULSrLq:;
  return a[6][2][0];
}
BaseList.GetDynamicList = BaseList_GetDynamicList;
function BaseList_GetDynamicList(a) {
  ULSrLq:;
  return a[1][2];
}
BaseList.SetDynamicList = BaseList_SetDynamicList;
function BaseList_SetDynamicList(a, b) {
  ULSrLq:;
  a[1][2] = b;
}
BaseList.GetList = BaseList_GetList;
function BaseList_GetList(b) {
  ULSrLq:;
  var a = b.SnippetElement,
    c = BaseList.IsDynamic(a);
  if (c) return BaseList.GetDynamicList(b);
  else return BaseList.GetStaticList(a);
}
BaseList.ClearList = BaseList_ClearList;
function BaseList_ClearList(a) {
  ULSrLq:;
  if (a.options == null) a.options = [];
  for (var d = a.options, c = a.options.length, b = 0; b < c; b++) d[0] = null;
}
BaseList.PopulateListFromArray = BaseList_PopulateListFromArray;
function BaseList_PopulateListFromArray(e, b) {
  ULSrLq:;
  if (b == null) return;
  for (var i = b.length / 2, c = e.options, a = 0; a < i; a++) {
    var h = b[a * 2],
      g = b[a * 2 + 1],
      c = e.options,
      d;
    if (c.length < 0) d = 0;
    else d = c.length;
    var f = new Option(g, h);
    c[d] = f;
  }
}
BaseList.SetListValue = BaseList_SetListValue;
function BaseList_SetListValue(a, b) {
  ULSrLq:;
  Util.SetListValue(a, b, true);
}
function BaseList_Render(a, d, r, b, h, u, p) {
  ULSrLq:;
  var u = View.GetTemplateType(a.FormId),
    f;
  if (!p) {
    var n = {};
    ErrorVisualization_CopyErrorVisualizationStateAfterIncrementalReapply(a, n);
    f = LeafControl_InitializeViewDataNode(r, a, d);
    ErrorVisualization_CopyErrorVisualizationStateAfterIncrementalReapply(n, a);
  } else {
    f = LeafControl_InitializeViewDataNode(r, a, d);
    BaseList_RenderBeginingWrappingSpan(a, d, f, b);
  }
  if (
    BaseList.IsDynamic(d) &&
    BaseList.GetDynamicList(a).length == 2 &&
    BaseList.GetDynamicList(a)[0] == ""
  ) {
    var c = a._objViewDataNodeParent,
      w = c._objViewDataNodeParent,
      k = ViewDataNode_GetChildNodes(w);
    if (k.length > 1)
      for (var j = 0; j < k.length; j++) {
        var C = k[j],
          i = C[9],
          v = c[9];
        if (i != null && v != i) {
          var A = a[9],
            y = A.replace(v, i),
            s = document.getElementById(y);
          if (s != null) {
            var x = ViewDataNode_GetViewDataNodeFromHtml(s);
            BaseList.SetDynamicList(a, BaseList.GetDynamicList(x));
          }
        }
      }
    else {
      var q = c;
      while (c != null) {
        if (c[9].indexOf("New") == -1) {
          q.baseListNeedsPostback = true;
          break;
        }
        q = c;
        c = c._objViewDataNodeParent;
      }
    }
  }
  b.push(h[0]);
  LeafControl_RenderLeafAttributes(f, a, d, true, true, b);
  var z = "direction:" + BaseControl_GetDirectionString(a.FormId, d);
  LeafControl_OutputAttribute(" style", z, b);
  if (u == 1) {
    var B = BaseList_OptionGenerationAlgorithm(a, false);
    LeafControl_OutputAttribute("value", B, b);
  }
  b.push(h[1]);
  if (u != 1) {
    var o = BaseControl_GetFormattedValue(a),
      t = d[2],
      g =
        (t == "DropDownList" || t == "ComboBox") &&
        a.ForceOptionsLoading != true;
    a.delayOptionLoad = g;
    for (var m = BaseList.GetList(a), E = m.length / 2, e = 0; e < E; e++) {
      var l = m[e * 2];
      if ((g && (l == o || e == 0)) || !g) {
        var D = m[e * 2 + 1];
        b.push("<option value=");
        b.push(Util_HtmlEncodeAndQuoteAttributeValue(l));
        if (o == l) b.push(" selected>");
        else b.push(">");
        b.push(Util_HtmlEncode(D));
        b.push("</option>");
      }
    }
  }
  b.push(h[3]);
  p && BaseList_RenderEndWrappingSpan(a, d, f, b);
}
function BaseList_RenderBeginingWrappingSpan(a, c, d, b) {
  ULSrLq:;
  if (a.ForceOptionsLoading == true) {
    if (!LeafControl_DelayHelpingErrorSpansInsertion(a)) {
      ErrorVisualization_ClearViewDataNodeErrorVisualizationState(a);
      LeafControl_RenderHelpingErrorTipSpan(c, a, d, b);
    }
  } else LeafControl_RenderBeginWrappingSpan(d, a, c, b);
}
function BaseList_RenderEndWrappingSpan(a, c, d, b) {
  ULSrLq:;
  if (a.ForceOptionsLoading == true)
    !LeafControl_DelayHelpingErrorSpansInsertion(a) &&
      LeafControl_RenderHelpingIconSpans(c, a, d, b);
  else LeafControl_RenderEndWrappingSpan(d, a, c, b);
}
BaseList.OptionGenerationAlgorithm = BaseList_OptionGenerationAlgorithm;
function BaseList_OptionGenerationAlgorithm(d, f) {
  ULSrLq:;
  var c = null,
    h = ViewDataNode_GetDatum(d),
    g = h.GetValue(),
    b = BaseList.GetList(d),
    e = b.length / 2;
  if (e > 0 && !f) c = b[1];
  for (var a = 0; a < e; a++) {
    var i = b[a * 2];
    if (g == i) {
      c = b[a * 2 + 1];
      break;
    }
  }
  return c;
}
function DropDownList() {}
DropDownList.GetFormatting = BaseControl.GetFormatting;
DropDownList.GetValueFromControl = BaseList.GetValueFromControl;
DropDownList.SetValueOfControl = DropDownList_SetValueOfControl;
function DropDownList_SetValueOfControl(a, c) {
  ULSrLq:;
  var b = ViewDataNode_GetViewDataNodeFromHtml(a);
  a = DropDownList_LoadOptions(a, b);
  DropDownList_RefreshControlDataBaseIfFilteringExist(a, b);
  a = BaseList.SetValueOfControl(a, c);
  return a;
}
DropDownList.AddEventLogEntry = BaseList.AddEventLogEntry;
DropDownList.OnChange = BaseList.OnChange;
DropDownList.OnAfterCreate = BaseList.OnAfterCreate;
DropDownList.SetHidden = BaseList.SetHidden;
DropDownList.RefreshControlData = BaseList.RefreshControlData;
DropDownList.Render = DropDownList_Render;
function DropDownList_Render(a, e, f, b) {
  ULSrLq:;
  var c = View.GetTemplateType(a.FormId),
    d = DropDownList_Template;
  if (c == 1) d = DropDownList_PrintTemplate;
  BaseList_Render(a, e, f, b, d, c, true);
  BaseControl_RenderDivForScrollWidthCalculation(b, a.FormId);
}
function DropDownList_LoadOptions(b, a) {
  ULSrLq:;
  return DropDownList__LoadOptions(
    b,
    a,
    DropDownList_Render,
    DropDownList.OnAfterCreate,
    DropDownList_SetViewDateNodeIndex
  );
}
function DropDownList_SetViewDateNodeIndex(b, a) {
  ULSrLq:;
  b.setAttribute("viewDataNode", a);
}
function DropDownList__LoadOptions(b, a, m, g, i) {
  ULSrLq:;
  if (a.delayOptionLoad == true) {
    var h = a.SnippetElement,
      k = a._objViewDataNodeParent.OriginalId,
      n = a.FormId,
      f = GlobalFormData.Get(n).viewDataHtmlMap,
      e = b.getAttribute("viewDataNode"),
      l = a[9];
    a.ForceOptionsLoading = true;
    var c = [];
    m(a, h, k, c);
    var j = LeafControl_GetWrappingSpan(b);
    j.innerHTML = c.join("");
    b = document.getElementById(l);
    var d = b.getAttribute("viewDataNode");
    i(b, e);
    delete f[d];
    g(a);
    a.ForceOptionsLoading = false;
  }
  return b;
}
function DropDownList_RefreshControlDataBaseIfFilteringExist(d, a) {
  ULSrLq:;
  var b = a.SnippetElement[7][1],
    c = ViewDataNode_GetFilterFunction(b);
  c != null && BaseList.RefreshControlData(a, d);
}
DropDownList.IsFocusable = DropDownList_IsFocusable;
function DropDownList_IsFocusable() {
  ULSrLq:;
  return true;
}
DropDownList.OnClick = LeafControl.OnClick;
DropDownList.OnBlur = LeafControl.OnBlur;
DropDownList.OnFocus = DropDownList_OnFocus;
function DropDownList_OnFocus(b, d) {
  ULSrLq:;
  var c = ViewDataNode_GetViewDataNodeFromHtml(b),
    a = DropDownList_LoadOptions(b, c);
  if (a == b) {
    DropDownList_RefreshControlDataBaseIfFilteringExist(a, c);
    LeafControl.OnFocus(a, d);
  } else BaseControl_Focus(a);
}
DropDownList.OnMouseOver = DropDownList_OnMouseOver;
function DropDownList_OnMouseOver(a, c) {
  ULSrLq:;
  var b = ViewDataNode_GetViewDataNodeFromHtml(a);
  a = DropDownList_LoadOptions(a, b);
  DropDownList_RefreshControlDataBaseIfFilteringExist(a, b);
  LeafControl.OnMouseOver(a, c);
}
DropDownList.OnMouseOut = LeafControl.OnMouseOut;
DropDownList.ShouldShiftAsteriskIn = DropDownList_ShouldShiftAsteriskIn;
function DropDownList_ShouldShiftAsteriskIn() {
  ULSrLq:;
  return true;
}
DropDownList.OnMouseDown = LeafControl.OnMouseDown;
DropDownList.OnMouseUp = LeafControl.OnMouseUp;
DropDownList.OnKeyPress = LeafControl.OnKeyPress;
DropDownList.IsValid = LeafControl.IsValid;
DropDownList.IsSelected = LeafControl.IsSelected;
DropDownList.Select = LeafControl.Select;
DropDownList.UnSelect = LeafControl.UnSelect;
DropDownList.RestoreFocus = LeafControl.RestoreFocus;
DropDownList.Highlight = LeafControl.Highlight;
DropDownList.RemoveHighlight = LeafControl.RemoveHighlight;
DropDownList.GetAsteriskOffsetNormal = LeafControl.GetAsteriskOffsetNormal;
DropDownList.GetAsteriskOffsetTop = LeafControl.GetAsteriskOffsetTop;
DropDownList.GetErrorMessageOffset = LeafControl.GetErrorMessageOffset;
DropDownList.GetErrorMessageOffsetTop = LeafControl.GetErrorMessageOffsetTop;
Hyperlink.arrAllowedProtocols = [
  "http://",
  "https://",
  "file://",
  "file:\\\\",
  "ftp://",
  "mailto:",
  "msn:",
  "news:",
  "nntp:",
  "pnm://",
  "mms://",
  "outlook:",
];
function Hyperlink() {}
Hyperlink.GetFormatting = BaseControl.GetFormatting;
Hyperlink.GetValueFromControl = Hyperlink_GetValueFromControl;
function Hyperlink_GetValueFromControl() {
  ULSrLq:;
  return null;
}
Hyperlink.SetValueOfControl = Hyperlink_SetValueOfControl;
function Hyperlink_SetValueOfControl() {}
function Hyperlink_IsSafeHref(a) {
  ULSrLq:;
  var b = false;
  a = a.toLowerCase();
  for (var c in Hyperlink.arrAllowedProtocols)
    if (a.indexOf(Hyperlink.arrAllowedProtocols[c]) == 0) {
      b = true;
      break;
    }
  return b;
}
function Hyperlink_SafeSetHref(a, b) {
  ULSrLq:;
  if (Hyperlink_IsSafeHref(b)) a.setAttribute("href", b);
  else a.setAttribute("href", "");
}
Hyperlink.RefreshControlData = Hyperlink_RefreshControlData;
function Hyperlink_RefreshControlData(e, f) {
  ULSrLq:;
  var c = e.SnippetElement,
    a = e._objViewDataNodeParent,
    d = Hyperlink_GetHrefFunction(c),
    b = Hyperlink_GetDisplayFunction(c);
  if (d != null) {
    var h = Expr.String(Expr_Evaluate(d, a, 0));
    Hyperlink_SafeSetHref(f, h);
  }
  if (b != null) {
    var g = Expr.String(Expr_Evaluate(b, a, 0));
    Util.SetInnerText(f, g);
  }
}
Hyperlink.SetDisable = Hyperlink_SetDisable;
function Hyperlink_SetDisable() {}
Hyperlink.OnAfterCreate = Hyperlink_OnAfterCreate;
function Hyperlink_OnAfterCreate(a) {
  ULSrLq:;
  var c = a.SnippetElement;
  if (Hyperlink_HasDynamicDisplay(c)) {
    var b = document.getElementById(a[9]);
    b != null && Hyperlink_RefreshControlData(a, b);
  }
}
Hyperlink.RestoreFocus = Hyperlink_RestoreFocus;
function Hyperlink_RestoreFocus(a) {
  ULSrLq:;
  LeafControl.RestoreFocus(a);
  a.focus();
  a.focus();
}
function Hyperlink_HasDynamicDisplay(a) {
  ULSrLq:;
  return a[6][2][0] == 1;
}
function Hyperlink_GetHrefFunction(a) {
  ULSrLq:;
  return a[6][2][1];
}
function Hyperlink_GetDisplayFunction(a) {
  ULSrLq:;
  return a[6][2][2];
}
function Hyperlink_GetStaticDisplayArray(a) {
  ULSrLq:;
  return a[6][2][3];
}
function Hyperlink_GetChildSnippets(a) {
  ULSrLq:;
  return a[6][2][4];
}
function Hyperlink_GetHref(a) {
  ULSrLq:;
  return a[1][2][0];
}
function Hyperlink_GetDisplay(a) {
  ULSrLq:;
  return a[1][2][1];
}
function Hyperlink_GetChildViewDataNodes(a) {
  ULSrLq:;
  return a[1][2][2];
}
Hyperlink.Render = Hyperlink_Render;
function Hyperlink_Render(b, c, m, a) {
  ULSrLq:;
  var f = Hyperlink_GetHref(b),
    n = Hyperlink_GetDisplay(b);
  if (!Hyperlink_IsSafeHref(f)) f = "";
  var g = View.GetTemplateType(b.FormId),
    d;
  if (Hyperlink_HasDynamicDisplay(c)) {
    d = HyperLink_Template_DynamicDisplay;
    if (g == 1) d = HyperLink_PrintTemplate_DynamicDisplay;
  } else {
    d = HyperLink_Template_StaticDisplay;
    if (g == 1) d = HyperLink_PrintTemplate_StaticDisplay;
  }
  var e = LeafControl_InitializeViewDataNode(m, b, c),
    i = LeafControl_RenderBeginWrappingSpan(e, b, c, a);
  a.push(d[0]);
  LeafControl_RenderLeafAttributes(e, b, c, false, true, a);
  LeafControl_OutputAttribute("href", f, a);
  a.push(d[1]);
  if (!Hyperlink_HasDynamicDisplay(c)) {
    var j = Hyperlink_GetStaticDisplayArray(c),
      h = Hyperlink_GetChildSnippets(c),
      k = Hyperlink_GetChildViewDataNodes(b);
    Container.RenderSpecialValue(b, a, j, h, k, e);
  } else {
    var l = Util_GetEncodingType(d[2]);
    a.push(Util_HtmlEncodeSpecialValue(n, l));
  }
  a.push(d[3]);
  i && LeafControl_RenderEndWrappingSpan(e, b, c, a);
}
Hyperlink.IsFocusable = Hyperlink_IsFocusable;
function Hyperlink_IsFocusable() {
  ULSrLq:;
  return true;
}
Hyperlink.OnClick = Hyperlink_OnClick;
function Hyperlink_OnClick(a, c) {
  ULSrLq:;
  var b = a.getAttribute("FormId");
  if (View_GetTemplateType(b) == 1 && !CurrentFormData_IsListItemMode(b)) {
    Util.StopEventProprogation(c);
    return false;
  }
  LeafControl.OnClick(a, c);
  return true;
}
Hyperlink.OnFocus = Hyperlink_OnFocus;
function Hyperlink_OnFocus(a, b) {
  ULSrLq:;
  LeafControl.OnFocus(a, b);
}
Hyperlink.OnMouseOver = LeafControl.OnMouseOver;
Hyperlink.OnMouseOut = LeafControl.OnMouseOut;
Hyperlink.OnMouseDown = LeafControl.OnMouseDown;
Hyperlink.OnMouseUp = LeafControl.OnMouseUp;
Hyperlink.OnKeyPress = LeafControl.OnKeyPress;
Hyperlink.IsValid = LeafControl.IsValid;
Hyperlink.OnBlur = LeafControl.OnBlur;
Hyperlink.IsSelected = LeafControl.IsSelected;
Hyperlink.Select = LeafControl.Select;
Hyperlink.UnSelect = LeafControl.UnSelect;
Hyperlink.Highlight = LeafControl.Highlight;
Hyperlink.RemoveHighlight = LeafControl.RemoveHighlight;
var HyperlinkBox_k_strButtonSuffix = "_button",
  HyperlinkBox_k_strAnchorSuffix = "_anchor",
  HyperlinkBox_k_strPromptSuffix = "_prompt";
function HyperlinkBox() {}
HyperlinkBox.GetFormatting = BaseControl.GetFormatting;
function HyperlinkBox_GetButton(a) {
  ULSrLq:;
  return document.getElementById(a.id + HyperlinkBox_k_strButtonSuffix);
}
function HyperlinkBox_GetAnchor(a) {
  ULSrLq:;
  return document.getElementById(a.id + HyperlinkBox_k_strAnchorSuffix);
}
function HyperlinkBox_GetPlaceholder(a) {
  ULSrLq:;
  return document.getElementById(a.id + HyperlinkBox_k_strPromptSuffix);
}
function HyperlinkBox_GetPrimaryBindingFunction(a) {
  ULSrLq:;
  return a[6][2][0];
}
function HyperlinkBox_GetSecondaryBindingFunction(a) {
  ULSrLq:;
  return a[6][2][1];
}
function HyperlinkBox_GetPromptText(a) {
  ULSrLq:;
  return a[6][2][2];
}
function HyperlinkBox_GetColor(a) {
  ULSrLq:;
  return a[6][2][3];
}
function HyperlinkBox_HasWidth100Percent(a) {
  ULSrLq:;
  return a[6][2][4];
}
HyperlinkBox.GetValueFromControl = HyperlinkBox_GetValueFromControl;
function HyperlinkBox_GetValueFromControl(a) {
  ULSrLq:;
  return a.getAttribute("primaryValue");
}
HyperlinkBox.GetSecondaryValueFromControl = HyperlinkBox_GetSecondaryValueFromControl;
function HyperlinkBox_GetSecondaryValueFromControl(a) {
  ULSrLq:;
  return a.getAttribute("secondaryValue");
}
HyperlinkBox.RefreshControlData = HyperlinkBox_RefreshControlData;
function HyperlinkBox_RefreshControlData(a, f) {
  ULSrLq:;
  var b,
    e = HyperlinkBox_GetPrimaryDataNodeValue(a),
    c = HyperlinkBox_GetSecondaryDataNodes(a);
  if (c != null) b = Expr.String(c);
  else {
    var d = a.SnippetElement;
    b = HyperlinkBox_GetPromptText(d);
  }
  HyperlinkBox_SetValues(f, e, b, false);
}
function HyperlinkBox_GetPrimaryDataNodeValue(a) {
  ULSrLq:;
  var d = a.SnippetElement,
    c = a._objViewDataNodeParent,
    b = HyperlinkBox_GetPrimaryBindingFunction(d);
  if (b != null) {
    var e = Expr_Evaluate(b, c, 0);
    return Expr_String(e);
  } else return Expr_String(ViewDataNode_GetDatum(a).GetValue());
}
HyperlinkBox.GetSecondaryDataNodes = HyperlinkBox_GetSecondaryDataNodes;
function HyperlinkBox_GetSecondaryDataNodes(b) {
  ULSrLq:;
  var d = b.SnippetElement,
    c = b._objViewDataNodeParent,
    a = HyperlinkBox_GetSecondaryBindingFunction(d);
  if (a != null) {
    var e = Expr_Evaluate(a, c, 0);
    return e;
  }
  return null;
}
function HyperlinkBox_UpdateAnchorText(c, b, d, a) {
  ULSrLq:;
  c.setAttribute("secondaryValue", a);
  a = Util_Trim(a);
  if (Util_IsNullOrEmptyString(a))
    b.innerHTML = Util_HtmlEncode(Util_Trim(d).substring(0, 255));
  else b.innerHTML = Util_HtmlEncode(a.substring(0, 255));
}
HyperlinkBox.SetValueOfControl = function (a, b) {
  ULSrLq:;
  HyperlinkBox_SetValues(a, b, null, true);
  return a;
};
function HyperlinkBox_ShowHidePlaceholderAnchor(f, b, d, a, c, i) {
  ULSrLq:;
  var g = Snippet_GetSnippetElementFromHtml(f),
    h = View_GetTemplateType(f.getAttribute("FormId")),
    e = null;
  if (Util_IsNullOrEmptyString(i)) {
    if (c) Util_SetStyleDisplay(a, "none");
    else Util_SetStyleDisplay(a, "inline-block");
    Util_SetStyleDisplay(d, "none");
    e = g[6][1];
  } else {
    Util_SetStyleDisplay(a, "none");
    Util_SetStyleDisplay(d, "inline-block");
  }
  if (h != 1) {
    b.accessKey = e;
    if (c) Util_SetStyleDisplay(b, "none");
    else Util_SetStyleDisplay(b, "inline-block");
  }
}
function HyperlinkBox_SetValues(a, c, b, i) {
  ULSrLq:;
  var d = ViewDataNode_GetViewDataNodeFromHtml(a);
  if (d.fSettingValues == true) return;
  else d.fSettingValues = true;
  var g = HyperlinkBox_GetAnchor(a),
    e = HyperlinkBox_GetSecondaryDataNodes(d),
    j = ViewDataNode_GetDatum(d).GetValue(),
    f = null,
    h = i;
  if (e != null) f = Expr_String(e);
  if (j == c && (b == null || e == null || f == b)) h = false;
  var m = HyperlinkBox_GetPlaceholder(a),
    o = HyperlinkBox_GetButton(a),
    n = ViewDataNode_IsDisabled(d);
  Hyperlink_SafeSetHref(g, c);
  a.setAttribute("primaryValue", c);
  HyperlinkBox_ShowHidePlaceholderAnchor(a, o, g, m, n, c);
  if (b != null) HyperlinkBox_UpdateAnchorText(a, g, c, b);
  else HyperlinkBox_UpdateAnchorText(a, g, c, f);
  if (h) {
    var k = EventLog_Add(
      a.getAttribute("FormId"),
      35,
      a,
      BaseControl_GetOriginalId(a),
      c,
      b,
      false,
      true,
      false,
      0,
      1
    );
    if (k) {
      e != null &&
        b != null &&
        f != b &&
        ViewDataNode_OnControlChangeSecondary(a, e[0]);
      var l = a.id;
      ViewDataNode_OnControlChange(a);
      a = document.getElementById(l);
    }
  }
  HyperlinkBox_UpdateTitle(a);
  BaseControl_RefreshVisualState(a);
  d.fSettingValues = false;
}
function HyperlinkBox_EnsureControl(a) {
  ULSrLq:;
  if (a.id.indexOf(HyperlinkBox_k_strButtonSuffix) != -1) {
    var b = a.id.replace(HyperlinkBox_k_strButtonSuffix, "");
    a = document.getElementById(b);
  } else if (a.id.indexOf(HyperlinkBox_k_strAnchorSuffix) != -1) {
    var b = a.id.replace(HyperlinkBox_k_strAnchorSuffix, "");
    a = document.getElementById(b);
  } else if (a.id.indexOf(HyperlinkBox_k_strPromptSuffix) != -1) {
    var b = a.id.replace(HyperlinkBox_k_strPromptSuffix, "");
    a = document.getElementById(b);
  }
  return a;
}
HyperlinkBox.OnClick = HyperlinkBox_OnClick;
function HyperlinkBox_OnClick(b, m, k) {
  ULSrLq:;
  b = HyperlinkBox_EnsureControl(b);
  var d = b.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(d) != 1
    )
  )
    return;
  var c = ViewDataNode_GetViewDataNodeFromHtml(b);
  if (ViewDataNode_IsDisabled(c)) return;
  LeafControl.OnClick(b, m);
  var e = ViewDataNode_GetDatum(c).GetValue();
  if (k == false && Util_IsNonEmptyString(e)) return;
  var h = "",
    f = false,
    g = HyperlinkBox_GetSecondaryDataNodes(c);
  if (g != null) {
    f = true;
    h = Expr_String(g);
  }
  ErrorVisualization_HideAllVisualizations(b, c);
  Dialog.funcCallbackOnClose = null;
  Dialog.funcCallbackSetValues = HyperlinkBox_SetValues;
  var a = [],
    l = Dialog.strFormId;
  Dialog.strFormId = d;
  if (Util_IsNonEmptyString(e))
    a[1] = IntlCoreStrings.k_strEditHyperlinkDialogTitle;
  else a[1] = IntlCoreStrings.k_strInsertHyperlinkDialogTitle;
  a[3] = CurrentFormData_Direction(d);
  a[5] = Dialog_TextAlignmentStyle();
  var j = [
      0,
      IntlCoreStrings.k_strAlertButtonOK,
      "Dialog_LinkUrlInsert();Util_StopEventProprogation(event);return false;",
      "",
      "button",
    ],
    i = [
      1,
      IntlCoreStrings.k_strCancelButtonText,
      "Dialog_OnTerminateButton();Util_StopEventProprogation(event);return false;",
      "",
      "button",
    ];
  a[2] = [j, i];
  a[11] = IntlCoreStrings.k_strInsertHyperlinkDialogAboveText;
  a[12] = e;
  a[13] = IntlCoreStrings.k_strInsertHyperlinkDialogBelowText;
  a[14] = IntlCoreStrings.k_strInsertHyperlinkDialogDisplayText;
  if (f) {
    a[15] = "";
    a[17] = IntlCoreStrings.k_strInsertHyperlinkDialogDeleteInstructionsText;
  } else {
    a[15] = "display:none";
    a[17] =
      IntlCoreStrings.k_strInsertHyperlinkDialogDeleteInstructionsSingleBindText;
  }
  a[16] = h;
  Dialog.strFormId = l;
  return Dialog_ShowModalDialogEx(
    d,
    "TwoButtonTemplateDialog",
    1,
    1,
    false,
    a,
    b
  );
}
HyperlinkBox.OnAfterCreate = HyperlinkBox_OnAfterCreate;
function HyperlinkBox_OnAfterCreate(b) {
  ULSrLq:;
  var a = document.getElementById(b[9]);
  if (a == null) return;
  BaseControl_RefreshVisualState(a);
  HyperlinkBox_MoveStyles(a);
  HyperlinkBox_SetHidden(b, a, ViewDataNode_IsHidden(b));
}
function HyperlinkBox_GetSrc(a) {
  ULSrLq:;
  return Util_Trim(HyperlinkBox_GetPrimaryDataNodeValue(a));
}
HyperlinkBox.MoveStyles = HyperlinkBox_MoveStyles;
function HyperlinkBox_MoveStyles(a) {
  ULSrLq:;
  var f = HyperlinkBox_GetAnchor(a),
    l = HyperlinkBox_GetPlaceholder(a),
    c = "",
    b = "",
    i = false,
    h = ViewDataNode_GetViewDataNodeFromHtml(a),
    d = h[2],
    k = h.SnippetElement,
    m = k[3];
  if (d != null && d >= 0) {
    var g = m[5].split(" ");
    if (g != null) {
      f.className = g[d];
      i = true;
    }
  }
  if (!i) f.className = "";
  if (UserAgentInfo.strBrowser == 1) {
    c = a.currentStyle.textDecoration + " underline";
    b = a.currentStyle.textDecoration;
  } else {
    var j = window.getComputedStyle(a, "");
    if (j != null) {
      var e;
      a.style.textDecoration = "";
      e = j.getPropertyValue("text-decoration");
      b = e;
      c = e + " underline";
      a.style.textDecoration = "none";
    }
  }
  f.style.textDecoration = c;
  l.style.textDecoration = b;
}
function HyperlinkBox_GetTitle(c, b) {
  ULSrLq:;
  var e = c.FormId,
    d = View_GetTemplateType(e),
    a = LeafControl_GetTitle(c, b);
  if (Util_IsNullOrEmptyString(a))
    if (d == 1) a = IntlCoreStrings.k_strConverterHyperlinkBoxPrint;
    else a = HyperlinkBox_GetPromptText(b);
  return a;
}
function HyperlinkBox_UpdateTitle(a) {
  ULSrLq:;
  var i = a.getAttribute("FormId"),
    g = HyperlinkBox_GetAnchor(a),
    c = ViewDataNode_GetViewDataNodeFromHtml(a),
    e = c.SnippetElement,
    f = View_GetTemplateType(i),
    d = HyperlinkBox_GetTitle(c, e),
    b = HyperlinkBox_GetValueFromControl(a);
  if (Util_IsNullOrEmptyString(b)) {
    b = "";
    a.title = d;
  } else a.title = "";
  g.title = b;
  if (f != 1) {
    var h = HyperlinkBox_GetButton(a);
    h.title = d;
  }
}
HyperlinkBox.Render = HyperlinkBox_Render;
function HyperlinkBox_Render(b, a, e, c) {
  ULSrLq:;
  var d;
  if (View_IsPrintingTemplate(b)) d = HyperlinkBox_PrintTemplate;
  else d = HyperlinkBox_Template;
  var f = LeafControl_InitializeViewDataNode(e, b, a),
    h =
      "display:" + HyperlinkBox_GetDisplayStyle(a) + ";margin:1px;padding:1px;",
    g = LeafControl_RenderBeginWrappingSpanEx(f, b, a, h, c);
  LeafControl_Render(b, a, e, c, d);
  g && LeafControl_RenderEndWrappingSpan(f, b, a, c);
}
HyperlinkBox.ResolveSpecialValue = HyperlinkBox_ResolveSpecialValue;
function HyperlinkBox_ResolveSpecialValue(f, b, c, j) {
  ULSrLq:;
  var a = null;
  switch (f) {
    case 7:
      var e = HyperlinkBox_GetSrc(b);
      e = Util_Trim(e);
      if (
        Util_IsNullOrEmptyString(e) ||
        !Util_IsValidURI(e) ||
        !Util_IsSecureURI(e)
      )
        a = HyperlinkBox_GetTitle(b, c);
      else a = "";
      break;
    case 10:
      a = HyperlinkBox_GetSrc(b);
      if (!Util_IsValidURI(a) || !Util_IsSecureURI(a)) a = "";
      a = Util_Trim(a);
      break;
    case 11:
      var g = HyperlinkBox_GetSecondaryDataNodes(b);
      if (g != null) a = Util_Trim(Expr_String(g)).substring(0, 255);
      if (Util_IsNullOrEmptyString(a))
        a = Util_Trim(HyperlinkBox_GetSrc(b)).substring(0, 255);
      break;
    case 12:
      var h = HyperlinkBox_GetPrimaryDataNodeValue(b),
        d = [];
      if (h == "") d.push("display:none;");
      else d.push("display:inline-block;");
      var i = HyperlinkBox_GetColor(c);
      if (Util_IsNonEmptyString(i)) {
        d.push("color:");
        d.push(i);
      }
      a = d.join("");
      break;
    case 13:
      var h = HyperlinkBox_GetPrimaryDataNodeValue(b);
      if (h != "") a = "display:none;";
      else a = "display:inline-block;";
      break;
    case 14:
      a = HyperlinkBox_GetSrc(b);
      if (
        Util_IsValidURI(a) &&
        Util_IsSecureURI(a) &&
        Util_IsNonEmptyString(Util_Trim(a))
      )
        a = "";
      else a = c[6][1];
      break;
    case 15:
      a = LeafControl_GetTitle(b, c);
      if (Util_IsNullOrEmptyString(a)) a = HyperlinkBox_GetPromptText(c);
      break;
    case 16:
      a = HyperlinkBox_GetPromptText(c);
      break;
    case 17:
      a = HyperlinkBox_GetSpanStyles(b, c);
      break;
    default:
      a = LeafControl_ResolveSpecialValue(f, b, c, j);
  }
  return a;
}
function HyperlinkBox_GetDisplayStyle(a) {
  ULSrLq:;
  if (HyperlinkBox_HasWidth100Percent(a)) return "block";
  else return "inline-block";
}
function HyperlinkBox_GetSpanStyles(d, c) {
  ULSrLq:;
  var b = d.FormId,
    a = [];
  View_GetTemplateType(b) == 1 &&
    CurrentFormData_IsListItemMode(b) &&
    a.push("border-width:0px;");
  a.push("text-align:");
  a.push(BaseControl_GetTextAlignment(b, c));
  a.push(";");
  return a.join("");
}
HyperlinkBox.IsFocusable = HyperlinkBox_IsFocusable;
function HyperlinkBox_IsFocusable() {
  ULSrLq:;
  return true;
}
HyperlinkBox.SetDisable = HyperlinkBox_SetDisable;
function HyperlinkBox_SetDisable(a, d) {
  ULSrLq:;
  var c = HyperlinkBox_GetAnchor(a),
    e = HyperlinkBox_GetButton(a),
    b = HyperlinkBox_GetPlaceholder(a),
    f = HyperlinkBox_GetValueFromControl(a);
  HyperlinkBox_ShowHidePlaceholderAnchor(a, e, c, b, d, f);
}
HyperlinkBox.OnChange = LeafControl.OnChange;
HyperlinkBox.OnMouseDown = LeafControl.OnMouseDown;
HyperlinkBox.OnMouseUp = LeafControl.OnMouseUp;
HyperlinkBox.OnKeyPress = LeafControl.OnKeyPress;
HyperlinkBox.OnKeyDown = HyperlinkBox_OnKeyDown;
function HyperlinkBox_OnKeyDown(a, b) {
  ULSrLq:;
  a = HyperlinkBox_EnsureControl(a);
  var c = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(c) != 1
    )
  )
    return true;
  var d = KeyboardService_GetVirtualKey(b);
  if (d == 19) {
    var e = HyperlinkBox_GetButton(a);
    HyperlinkBox_SetValues(a, "", "", true);
    SelectionService_RestoreFocus(c);
    Util_StopEventProprogation(b);
    return false;
  } else return LeafControl.OnKeyPress(a, b);
}
HyperlinkBox.OnFocus = HyperlinkBox_OnFocus;
function HyperlinkBox_OnFocus(a) {
  ULSrLq:;
  a = HyperlinkBox_EnsureControl(a);
  LeafControl.OnFocus(a);
}
HyperlinkBox.OnBlur = HyperlinkBox_OnBlur;
function HyperlinkBox_OnBlur(a) {
  ULSrLq:;
  a = HyperlinkBox_EnsureControl(a);
  LeafControl.OnBlur(a);
}
HyperlinkBox.RestoreFocus = HyperlinkBox_RestoreFocus;
function HyperlinkBox_RestoreFocus(a) {
  ULSrLq:;
  a = HyperlinkBox_EnsureControl(a);
  var b = HyperlinkBox_GetButton(a);
  SelectionService_Select(a);
  try {
    b.focus();
    b.focus();
  } catch (c) {}
}
HyperlinkBox.IsValid = HyperlinkBox_IsValid;
function HyperlinkBox_IsValid(b) {
  ULSrLq:;
  if (ViewDataNode_IsValid(b)) {
    var a = HyperlinkBox_GetFirstSecondaryDataNode(b);
    if (a != null) return ViewDataNode_IsValid(a);
    return true;
  }
  return false;
}
HyperlinkBox.IsBlank = HyperlinkBox_IsBlank;
function HyperlinkBox_IsBlank(a) {
  ULSrLq:;
  if (!ViewDataNode_IsValid(a)) return ViewDataNode_IsBlank(a);
  else {
    var b = HyperlinkBox_GetFirstSecondaryDataNode(a);
    return ViewDataNode_IsBlank(b);
  }
}
HyperlinkBox.GetFirstSecondaryDataNode = HyperlinkBox_GetFirstSecondaryDataNode;
function HyperlinkBox_GetFirstSecondaryDataNode(b) {
  ULSrLq:;
  var a = HyperlinkBox_GetSecondaryDataNodes(b);
  if (a && a.length > 0) return a[0];
  else return null;
}
HyperlinkBox.SetHidden = HyperlinkBox_SetHidden;
function HyperlinkBox_SetHidden(a, b, c) {
  ULSrLq:;
  var d = a.SnippetElement,
    e = HyperlinkBox_GetDisplayStyle(d);
  LeafControl.SetHidden(a, b, c);
  Util_SetWrappingSpanHidden(b, a, c, e);
}
HyperlinkBox.IsSelected = LeafControl.IsSelected;
HyperlinkBox.Select = LeafControl.Select;
HyperlinkBox.UnSelect = LeafControl.UnSelect;
HyperlinkBox.Highlight = LeafControl.Highlight;
HyperlinkBox.RemoveHighlight = LeafControl.RemoveHighlight;
HyperlinkBox.OnMouseOver = LeafControl.OnMouseOver;
HyperlinkBox.OnMouseOut = LeafControl.OnMouseOut;
HyperlinkBox.GetAsteriskOffsetNormal = LeafControl.GetAsteriskOffsetNormal;
HyperlinkBox.GetAsteriskOffsetTop = LeafControl.GetAsteriskOffsetTop;
HyperlinkBox.GetErrorMessageOffset = LeafControl.GetErrorMessageOffset;
HyperlinkBox.GetErrorMessageOffsetTop = LeafControl.GetErrorMessageOffsetTop;
function ListBox() {}
ListBox.GetFormatting = BaseControl.GetFormatting;
ListBox.GetValueFromControl = BaseList.GetValueFromControl;
ListBox.SetValueOfControl = BaseList.SetValueOfControl;
ListBox.AddEventLogEntry = BaseList.AddEventLogEntry;
ListBox.OnChange = BaseList.OnChange;
ListBox.OnAfterCreate = ListBox_OnAfterCreate;
function ListBox_OnAfterCreate(b) {
  ULSrLq:;
  if (UserAgentInfo.strBrowser != 1) {
    var a = document.getElementById(b[9]);
    if (a == null) return;
    var c = LeafControl_GetWrappingSpan(a);
    c.style.fontSize = a.offsetHeight * 0.82;
  }
  BaseList.OnAfterCreate(b);
}
ListBox.RefreshControlData = BaseList.RefreshControlData;
ListBox.Render = ListBox_Render;
function ListBox_Render(a, e, f, b) {
  ULSrLq:;
  var c = View.GetTemplateType(a.FormId),
    d = ListBox_Template;
  if (c == 1) d = ListBox_PrintTemplate;
  BaseList_Render(a, e, f, b, d, c, true);
  BaseControl_RenderDivForScrollWidthCalculation(b, a.FormId);
}
ListBox.IsFocusable = ListBox_IsFocusable;
function ListBox_IsFocusable() {
  ULSrLq:;
  return true;
}
ListBox.ShouldShiftAsteriskIn = ListBox_ShouldShiftAsteriskIn;
function ListBox_ShouldShiftAsteriskIn(a) {
  ULSrLq:;
  if (UserAgentInfo.strBrowser == 2 || UserAgentInfo.strBrowser == 3) {
    var d = a.getAttribute("FormId"),
      b = Snippet_GetSnippetElementFromHtml(a),
      c = BaseControl_GetDirection(d, b),
      e = c == 2;
    if (!e) return true;
  } else if (a.clientHeight < a.scrollHeight) return true;
  return false;
}
ListBox.OnClick = LeafControl.OnClick;
ListBox.OnBlur = LeafControl.OnBlur;
ListBox.OnFocus = LeafControl.OnFocus;
ListBox.OnMouseDown = LeafControl.OnMouseDown;
ListBox.OnMouseUp = LeafControl.OnMouseUp;
ListBox.OnKeyPress = LeafControl.OnKeyPressKillEnterEvent;
ListBox.IsValid = LeafControl.IsValid;
ListBox.IsSelected = LeafControl.IsSelected;
ListBox.Select = LeafControl.Select;
ListBox.UnSelect = LeafControl.UnSelect;
ListBox.RestoreFocus = LeafControl.RestoreFocus;
ListBox.Highlight = LeafControl.Highlight;
ListBox.RemoveHighlight = LeafControl.RemoveHighlight;
ListBox.OnMouseOver = LeafControl.OnMouseOver;
ListBox.OnMouseOut = LeafControl.OnMouseOut;
ListBox.SetHidden = BaseList.SetHidden;
ListBox.GetAsteriskOffsetNormal = LeafControl.GetAsteriskOffsetNormal;
ListBox.GetAsteriskOffsetTop = LeafControl.GetAsteriskOffsetTop;
ListBox.GetErrorMessageOffset = LeafControl.GetErrorMessageOffset;
ListBox.GetErrorMessageOffsetTop = LeafControl.GetErrorMessageOffsetTop;
function StructuralEditingControl() {}
StructuralEditingControl._intNewSectionIDCounter = 0;
StructuralEditingControl._intNewMultipleBindingIDCounter = -2;
function StructuralEditingControl_OnStructuralEdit() {
  ULSrLq:;
  HoverMenu_ResetWidgetMap();
}
StructuralEditingControl.ResolveSpecialValue = StructuralEditingControl_ResolveSpecialValue;
function StructuralEditingControl_ResolveSpecialValue(c, d, b, e) {
  ULSrLq:;
  var a = BaseControl.ResolveSpecialValue(c, d, b, e);
  if (a == null)
    if (c == 6) a = StructuralEditingControl_GetTitle(b);
    else if (c == 7) a = StructuralEditingControl_GetAlign(b);
  return a;
}
StructuralEditingControl.GetTitle = StructuralEditingControl_GetTitle;
function StructuralEditingControl_GetTitle(b) {
  ULSrLq:;
  var a = b[6][5];
  if (Util.IsNonEmptyString(a)) return a;
  else return null;
}
StructuralEditingControl.GetAlign = StructuralEditingControl_GetAlign;
function StructuralEditingControl_GetAlign(a) {
  ULSrLq:;
  return a[6][6];
}
StructuralEditingControl.GetMinChildCount = StructuralEditingControl_GetMinChildCount;
function StructuralEditingControl_GetMinChildCount(a) {
  ULSrLq:;
  return a[6][7];
}
StructuralEditingControl.GetMaxChildCount = StructuralEditingControl_GetMaxChildCount;
function StructuralEditingControl_GetMaxChildCount(a) {
  ULSrLq:;
  return a[6][8];
}
StructuralEditingControl.DetermineChildCountValidity = StructuralEditingControl_DetermineChildCountValidity;
function StructuralEditingControl_DetermineChildCountValidity(f, c) {
  ULSrLq:;
  var g = ViewDataNode_GetViewDataNodeFromHtml(f),
    d = g.SnippetElement,
    b = StructuralEditingControl.GetMinChildCount(d),
    a = StructuralEditingControl.GetMaxChildCount(d);
  if (Util.GetDataType(b) == 1 && Util.GetDataType(a) == 1) {
    var e = c >= b && c <= a;
    return e ? XsdDatatype.k_intValid : XsdDatatype.k_intInvalid;
  }
  if (
    Util.GetDataType(b) == 1 &&
    Util.GetDataType(a) == 2 &&
    a.toLowerCase() == "unbounded"
  ) {
    var e = c >= b;
    return e ? XsdDatatype.k_intValid : XsdDatatype.k_intInvalid;
  }
  return XsdDatatype.k_intValidityUnknown;
}
StructuralEditingControl.GetChildCount = StructuralEditingControl_GetChildCount;
function StructuralEditingControl_GetChildCount(b) {
  ULSrLq:;
  var a;
  a = BaseControl.GetChildInfoPathControls(b);
  return a == null ? 0 : a.length;
}
function StructuralEditingControl_Remove(i, a, v, t, n) {
  ULSrLq:;
  var r = GlobalFormData.Get(i),
    b,
    g;
  if (a == null) {
    SelectionService.Select(null);
    return false;
  }
  g = BaseControl.GetContainerId(a.id);
  b = document.getElementById(g);
  if (b == null) return false;
  var s = StructuralEditingControl.GetChildCount(b),
    j = StructuralEditingControl.DetermineChildCountValidity(b, s - 1),
    q = ViewDataNode_GetViewDataNodeFromHtml(b),
    l = q.SnippetElement,
    k = Snippet_GetRoundTripModel(l);
  r.g_rgControlsTabOrder = null;
  if (j == XsdDatatype.k_intInvalid) {
    var m = StructuralEditingControl.GetMinChildCount(l);
    UserMessages.ShowAlertMessage(
      Util.FormatString(IntlCoreStrings.k_strValidationMinChildCountFormat, m),
      true
    );
    return false;
  }
  var h = false;
  if (a.getAttribute("ScriptClass") == "MultiSelectListBoxContainer") h = true;
  else
    h = UserMessages.ShowConfirmMessage(
      IntlCoreStrings.k_strConfirmRemoveSection,
      true
    );
  if (h) {
    StructuralEditingControl_OnStructuralEdit();
    var f = ViewDataNode_GetViewDataNodeFromHtml(a),
      g = BaseControl.GetContainerId(a.id),
      b = document.getElementById(g);
    if (
      !EventLog_Add(
        i,
        t,
        b,
        BaseControl.GetOriginalId(a),
        "",
        "",
        j == XsdDatatype.k_intValidityUnknown && k != 2,
        false,
        false,
        1,
        3
      )
    )
      return false;
    var e = a,
      c = null,
      d = BaseControl.GetNextSiblingInfoPathControl(a);
    if (d == null) {
      d = BaseControl.GetPreviousSiblingInfoPathControl(a);
      if (d == null) {
        d = InDocUI.GetInDocUIForCollection(b);
        if (d == null) {
          ViewDataNode_SetHidden(f, true);
          d = BaseControl_FindFirstFocusableControl(a);
        }
      }
    }
    if (d != null) c = BaseControl_FindFirstFocusableControl(d);
    StructuralEditingControl.UpdateBackgroundImagePath(a, i);
    ViewDataNode_MarkSubtreeAsDeleted(f);
    if (!ViewDataNode_OnStructuralChange(f, k != 2, false)) return false;
    ViewDataNode_Delete(f);
    b = document.getElementById(g);
    a = document.getElementById(a.id);
    if (UserAgentInfo.strBrowser == 2)
      try {
        SelectionService.GetSelectedControl().blur();
      } catch (u) {}
    SelectionService.Select(null);
    if (b != null && a.parentNode != null) {
      var p = a.parentNode;
      StructuralEditingControl.UpdateBackgroundImagePath(a, i);
      p.removeChild(a);
    }
    ErrorVisualization_UpdateAllAsterisks();
    if (n) {
      if (c == null && b != null) {
        e = b;
        do {
          c = BaseControl_FindFirstFocusableControl(e);
          e = BaseControl.GetParentInfoPathControl(e);
        } while (c == null && e != null);
      } else if (c != null) c = document.getElementById(c.id);
      if (c != null) {
        var o =
          g_arrControlTypes[c.getAttribute("ScriptClass")]["RestoreFocus"];
        o(c);
      }
    }
  }
  AccessibilityIFrame_RefreshIFrame();
  return h && j == XsdDatatype.k_intValid;
}
StructuralEditingControl.InsertRelative = StructuralEditingControl_InsertRelative;
function StructuralEditingControl_InsertRelative(n, m, d, a) {
  ULSrLq:;
  if (a == null) return false;
  var h = a.getAttribute("FormId"),
    u = GlobalFormData.Get(h),
    f = ViewDataNode_GetViewDataNodeFromHtml(a),
    e = f.SnippetElement,
    v = StructuralEditingControl.GetChildCount(a),
    l = StructuralEditingControl.DetermineChildCountValidity(a, v + 1);
  if (l == XsdDatatype.k_intInvalid) {
    var t = ViewDataNode_GetViewDataNodeFromHtml(a),
      s = t.SnippetElement,
      q = StructuralEditingControl.GetMaxChildCount(s);
    UserMessages.ShowAlertMessage(
      Util.FormatString(IntlCoreStrings.k_strValidationMaxChildCountFormat, q),
      true
    );
    return false;
  }
  var p = IP_Collection.GetHtmlTemplate(e),
    i = IP_Collection.GetContainerSnippet(e),
    o = IP_Collection.GetDataToInsert(e),
    b = Util.Clone(o);
  u.g_rgControlsTabOrder = null;
  var c = null,
    g = false;
  if (!(Snippet_GetRoundTripModel(e) == 1) && b != null) {
    b._objViewDataNodeParent = f;
    g = ViewDataNode_IsHidden(b);
    g_objMultipleBindingMap = [];
    g_objMultipleBindingIdMap = [];
    Container_InitializeViewDataNodes(h, f, i, b, true);
    StructuralEditingControl._InsertRelativeIntoViewData(m, d, b, f);
    var w = StructuralEditingControl._RenderHtml(b, i, a, p);
    if (!g) c = StructuralEditingControl._InsertRelativeIntoHtml(w, m, d, a);
    g_objMultipleBindingMap = null;
    g_objMultipleBindingIdMap = null;
  }
  StructuralEditingControl_OnStructuralEdit();
  var k = Snippet_GetRoundTripModel(i);
  if (c == null && !g) {
    g_objCurrentFormDataSelection != null &&
      g_objCurrentFormDataSelection.BackupFocusForStructural(a, d, m);
    var r = EventLog_Add(
      h,
      n,
      a,
      BaseControl.GetOriginalId(a),
      d == null ? "" : BaseControl.GetOriginalId(d),
      StructuralEditingControl._CreateNewId(BaseControl.GetOriginalId(a)),
      k != 2,
      false,
      false,
      e[9],
      2
    );
    return r;
  } else {
    if (
      !EventLog_Add(
        h,
        n,
        a,
        BaseControl.GetOriginalId(a),
        d == null ? "" : BaseControl.GetOriginalId(d),
        c == null
          ? StructuralEditingControl._CreateNewId(BaseControl.GetOriginalId(a))
          : BaseControl.GetOriginalId(c),
        k != 2 &&
          (l == XsdDatatype.k_intValidityUnknown || b.baseListNeedsPostback),
        false,
        false,
        1,
        2
      )
    )
      return false;
    var f = ViewDataNode_GetViewDataNodeFromHtml(a);
    ViewDataNode_FireOnAfterCreate(b);
    var j = BaseControl.GetNextSiblingInfoPathControl(a);
    j != null &&
      j.getAttribute("ScriptClass") == "InDocSign" &&
      InDocSign.ShowClickToSignLink(j, true);
    ViewDataNode.boolErrorVisRefreshNeeded = true;
    if (!ViewDataNode_OnStructuralChange(b, k != 2, true)) return false;
    if (!ViewDataNode_IsHidden(f) && !g) {
      c = document.getElementById(c.id);
      c != null && StructuralEditingControl.FocusNewContainer(c);
    }
    AccessibilityIFrame_RefreshIFrame();
    return l == XsdDatatype.k_intValid;
  }
}
StructuralEditingControl._CreateNewId = StructuralEditingControl_CreateNewId;
function StructuralEditingControl_CreateNewId(a) {
  ULSrLq:;
  var b = a + "_New" + StructuralEditingControl._intNewSectionIDCounter;
  StructuralEditingControl._intNewSectionIDCounter++;
  return b;
}
StructuralEditingControl._CreateNewMBId = StructuralEditingControl_CreateNewMBId;
function StructuralEditingControl_CreateNewMBId() {
  ULSrLq:;
  return StructuralEditingControl._intNewMultipleBindingIDCounter--;
}
StructuralEditingControl._IsIdCreatedClientSide = StructuralEditingControl_IsIdCreatedClientSide;
function StructuralEditingControl_IsIdCreatedClientSide(a) {
  ULSrLq:;
  return a.indexOf("New") != -1;
}
StructuralEditingControl._RenderHtml = StructuralEditingControl__RenderHtml;
function StructuralEditingControl__RenderHtml(e, b, f, d) {
  ULSrLq:;
  var c = "",
    a = [],
    g = StructuralEditingControl._CreateNewId(BaseControl.GetOriginalId(f)),
    h = b.ControlType["Render"];
  h(e, b, g, d, a);
  if (a.length == 0) return;
  c = a.join("");
  return c;
}
StructuralEditingControl._InsertRelativeIntoViewData = StructuralEditingControl__InsertRelativeIntoViewData;
function StructuralEditingControl__InsertRelativeIntoViewData(i, d, f, c) {
  ULSrLq:;
  var a = IP_Collection.GetChildViewDataNodes(c);
  if (d == null) a.push(f);
  else {
    var b = 0,
      g = ViewDataNode_GetViewDataNodeFromHtml(d),
      e = Util.IndexOf(a, g);
    if (i) b = e;
    else b = e + 1;
    var h = Util.InsertAt(a, f, b);
    IP_Collection.SetChildViewDataNodes(c, h);
  }
}
StructuralEditingControl._InsertRelativeIntoHtml = StructuralEditingControl__InsertRelativeIntoHtml;
function StructuralEditingControl__InsertRelativeIntoHtml(g, h, e, c) {
  ULSrLq:;
  var b = document.createElement("DIV");
  if (b == null) return null;
  if (c.getAttribute("ScriptClass") == "RepeatingTable") {
    b.innerHTML = "<TABLE><TBODY>" + g + "</TBODY></TABLE>";
    var a = b.firstChild.firstChild.firstChild;
  } else {
    b.innerHTML = g;
    var a = b.firstChild;
  }
  StructuralEditingControl.UpdateBackgroundImagePath(
    a,
    a.getAttribute("FormId")
  );
  var d = null;
  if (!h && e != null) d = e.nextSibling;
  else d = e;
  var f = c;
  if (c.getAttribute("ScriptClass") == "MultiSelectListBoxCollection")
    f = c.firstChild;
  if (d == null) f.appendChild(a);
  else f.insertBefore(a, d);
  return a;
}
StructuralEditingControl.UpdateBackgroundImagePath = StructuralEditingControl_UpdateBackgroundImagePath;
function StructuralEditingControl_UpdateBackgroundImagePath(a, f) {
  ULSrLq:;
  if (
    a.style != null &&
    a.style.backgroundImage != "" &&
    a.style.backgroundImage != "none"
  ) {
    var d = a.style.backgroundImage.indexOf("(") + 1,
      c = a.style.backgroundImage.substring(
        d,
        a.style.backgroundImage.length - d
      ),
      e = CurrentFormData.ServerUrl(f);
    if (c.indexOf(e) == -1) a.style.backgroundImage = "url(" + e + c + ")";
  }
  for (var b = 0; b < a.childNodes.length; b++)
    StructuralEditingControl.UpdateBackgroundImagePath(a.childNodes[b], f);
}
StructuralEditingControl.FocusNewContainer = StructuralEditingControl_FocusNewContainer;
function StructuralEditingControl_FocusNewContainer(a) {
  ULSrLq:;
  var c = BaseControl_FindFirstFocusableDescendantControl(a);
  if (c != null)
    window.setTimeout(
      "StructuralEditingControl_RestoreFocusHelper('" + c.id + "')",
      10
    );
  else {
    var b = HoverMenu_GetWidgetForContainer(a);
    if (b != null && HoverMenu_GetMenuItemTabIndex(a) >= 0)
      window.setTimeout(
        "document.getElementById('" + b.id + "').childNodes[0/*<A>*/].focus()",
        10
      );
    else {
      var d = BaseControl_FindFirstFocusableControl(a);
      window.setTimeout(
        "StructuralEditingControl_RestoreFocusHelper('" + d.id + "')",
        10
      );
    }
  }
}
function StructuralEditingControl_RestoreFocusHelper(b) {
  ULSrLq:;
  var a = document.getElementById(b);
  if (a != null) {
    var c = g_arrControlTypes[a.getAttribute("ScriptClass")]["RestoreFocus"];
    c(a);
  }
}
StructuralEditingControl.IsSigned = StructuralEditingControl_IsSigned;
function StructuralEditingControl_IsSigned(a) {
  ULSrLq:;
  return a[1][1];
}
StructuralEditingControl.IsReadOnly = StructuralEditingControl_IsReadOnly;
function StructuralEditingControl_IsReadOnly(a) {
  ULSrLq:;
  var b = ViewDataNode_GetViewDataNodeFromHtml(a),
    c = a.getAttribute("FormId");
  return StructuralEditingControl_IsSigned(b) || View_IsReadOnly(c);
}
function xCollectionControl() {}
xCollectionControl.boolIsControlFiltered = false;
function xCollectionControl_InsertBefore(d, e) {
  ULSrLq:;
  var a = document.getElementById(d),
    f = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(f) != 1
    )
  )
    return;
  var b, g, c;
  if (a == null) return false;
  c = BaseControl.GetContainerId(a.id);
  b = document.getElementById(c);
  if (b == null) return false;
  return xCollectionControl._InsertRelative(true, a, b, e);
}
function xCollectionControl_InsertAfter(d, e) {
  ULSrLq:;
  var a = document.getElementById(d),
    f = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(f) != 1
    )
  )
    return;
  var b, g, c;
  if (a == null) return false;
  c = BaseControl.GetContainerId(a.id);
  b = document.getElementById(c);
  if (b == null) return false;
  return xCollectionControl._InsertRelative(false, a, b, e);
}
function xCollectionControl_Insert(b, c) {
  ULSrLq:;
  var a = document.getElementById(b),
    d = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(d) != 1
    )
  )
    return;
  if (a == null) return false;
  return xCollectionControl._InsertRelative(false, null, a, c);
}
function xCollectionControl_Remove(c, d) {
  ULSrLq:;
  var a = document.getElementById(c),
    b = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(b) != 1
    )
  )
    return;
  return StructuralEditingControl_Remove(b, a, d, 4, true);
}
function xCollectionControl_RefreshFilter(m, q, f) {
  ULSrLq:;
  var g = document.getElementById(m),
    e = g.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(e) != 1
    )
  )
    return;
  var h, a;
  if (typeof f == "undefined") f = true;
  if (f) {
    h = BaseControl.GetContainerId(g.id);
    a = document.getElementById(h);
  } else a = document.getElementById(g.id);
  var d = ViewDataNode_GetViewDataNodeFromHtml(a),
    j = d.SnippetElement[7][1],
    k = ViewDataNode_GetFilterFunction(j),
    l,
    b;
  d.boolIsFiltered = true;
  if (k != null) {
    l = ViewDataNode_GetFilterSourceToTargetViewPath(j);
    b = Expr.vpath_SelectViewPath(d, l);
    if (b != null) {
      for (var i = false, c = 0; c < b.length; c++) {
        var p = Expr.strFormId;
        Expr.strFormId = e;
        var n = Expr_EvaluateEx(
          k,
          ViewDataNode_GetDatum(b[c]),
          b[c]._objViewDataNodeParent,
          1
        );
        if (!n) {
          b[c]._objViewDataNodeParent[6] = false;
          i = true;
        } else b[c]._objViewDataNodeParent[6] = true;
        Expr.strFormId = p;
      }
      if (i) {
        d._boolDirty = true;
        EventLog_Add(
          a.getAttribute("FormId"),
          29,
          a,
          BaseControl.GetOriginalId(a),
          "1",
          "",
          false,
          false,
          false,
          0,
          0
        );
      }
    }
    var o = GlobalFormData.Get(e);
    o.viewDataNodeNeedReRendering = true;
    ViewDataNode_ProcessRenderingActions(e);
    AccessibilityIFrame_RefreshIFrame();
  } else
    EventLog_Add(
      a.getAttribute("FormId"),
      29,
      a,
      BaseControl.GetOriginalId(a),
      "1",
      "",
      true,
      false,
      false,
      0,
      1
    );
}
function xCollectionControl_RemoveAll(l) {
  ULSrLq:;
  var e = document.getElementById(l),
    k = e.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(k) != 1
    )
  ) {
    SelectionService.Select(null);
    return;
  }
  var a, i;
  if (e == null) return false;
  i = BaseControl.GetContainerId(e.id);
  a = document.getElementById(i);
  if (a == null) return false;
  var f,
    j = false;
  j = UserMessages.ShowConfirmMessage(
    IntlCoreStrings.k_strConfirmRemoveAll,
    true
  );
  if (j) {
    StructuralEditingControl_OnStructuralEdit();
    if (
      !EventLog_Add(
        k,
        5,
        a,
        BaseControl.GetOriginalId(a),
        "",
        "",
        false,
        false,
        false,
        0,
        3
      )
    )
      return false;
    var n = Snippet_GetSnippetElementFromHtml(a),
      m = Snippet_GetRoundTripModel(n);
    f = BaseControl.GetChildInfoPathControls(a);
    for (var g = 0; g < f.length; g++) {
      var h = f[g],
        p = h.getAttribute("ScriptClass"),
        d = ViewDataNode_GetViewDataNodeFromHtml(h);
      ViewDataNode_MarkSubtreeAsDeleted(d);
      if (!ViewDataNode_OnStructuralChange(d, m != 2, false)) return false;
      ViewDataNode_Delete(d);
      SelectionService.Select(null);
      a.removeChild(h);
    }
    AccessibilityIFrame_RefreshIFrame();
    var c = a,
      b = null;
    do {
      b = BaseControl_FindFirstFocusableControl(c);
      c = BaseControl.GetParentInfoPathControl(c);
    } while (b == null && c != null);
    if (b != null) {
      var o = g_arrControlTypes[b.getAttribute("ScriptClass")]["RestoreFocus"];
      o(b);
    }
  }
}
xCollectionControl._InsertRelative = xCollectionControl__InsertRelative;
function xCollectionControl__InsertRelative(c, b, d, e) {
  ULSrLq:;
  var a;
  if (b == null) a = 2;
  else if (c) a = 2;
  else a = 3;
  return StructuralEditingControl.InsertRelative(a, c, b, d, e);
}
xCollectionControl.IsSigned = StructuralEditingControl_IsSigned;
function Container() {}
Container.OnClick = Container_OnClick;
function Container_OnClick(b, a) {
  ULSrLq:;
  BaseControl.OnClick(b, a);
  Util.StopEventProprogation(a);
}
Container.OnFocus = Container_OnFocus;
function Container_OnFocus(b, e) {
  ULSrLq:;
  var d = b.getAttribute("FormId");
  if (
    CurrentFormData_IsV4UI(d) &&
    b.parentNode.getAttribute("ScriptClass") == "RichTextCollection"
  ) {
    var a = document.getElementById(b.id + "_RT1");
    if (a != null) {
      var c = ViewDataNode_GetViewDataNodeFromHtml(a);
      (!ViewDataNode_IsHidden(c) || ViewDataNode_IsDisabled(c)) && a.focus();
    }
  }
  Util.StopEventProprogation(e);
  return false;
}
Container.OnBlur = Container_OnBlur;
function Container_OnBlur() {}
function Container_ShowWidgetOnFocus(b) {
  ULSrLq:;
  if (b == null) return;
  var c, a;
  c = BaseControl.GetContainerId(b.parentNode.id);
  a = document.getElementById(c);
  if (a == null) return;
  b.ignoreHideWidget = true;
  SelectionService_Highlight(a, true, true);
  Container_ShowWidget(a, 1);
  b.childNodes[0].style.border = "black dotted 1px";
}
function Container_HideWidgetOnBlur(a) {
  ULSrLq:;
  if (a != null) {
    if (a.ignoreHideWidget) {
      a.ignoreHideWidget = false;
      return;
    }
    a.childNodes[0].style.border = "transparent dotted 1px";
  }
  if (HoverMenu.isVisible == true || a == null) return;
  var c, b;
  c = BaseControl.GetContainerId(a.parentNode.id);
  b = document.getElementById(c);
  if (b == null) return;
  Container_HideWidget(b);
}
Container.ShowWidget = Container_ShowWidget;
function Container_ShowWidget(l, t) {
  ULSrLq:;
  var k = BaseControl.GetParentInfoPathControl(l);
  if (k == null) return;
  var f = ViewDataNode_GetViewDataNodeFromHtml(k),
    p = ViewDataNode_GetChildNodes(f),
    g = false,
    j = null;
  if (p.length > 0) {
    var o = ViewDataNode_GetChildNodes(p[0]);
    if (o.length > 0) {
      j = o[0];
      var s = j.SnippetElement;
      if (s[2] == "RichTextBox") g = true;
    }
  }
  if (g && UserAgentInfo.strBrowser == 1) return;
  if (g) f = j;
  var c = k.getAttribute("ScriptClass");
  if (!ViewDataNode_IsDisabled(f) || c == "FileAttachmentCollection")
    if (g || HoverMenu_ShouldShowWidget(l)) {
      var b = HoverMenu_GetWidgetForContainer(l);
      if (b != null && b.style != null) {
        var d = null,
          e = null,
          m = "-3px",
          i = null,
          a = SelectionService.IsIpInState(t);
        if (c == "Section") {
          d = a ? "rect(3px 75px 21px 57px)" : "rect(3px 147px 21px 129px)";
          e = a ? "-57px" : "-129px";
        } else if (c == "RichTextCollection") {
          d = a ? "rect(5px 95px 23px 77px)" : "rect(5px 167px 23px 149px)";
          e = a ? "-75px" : "-147px";
        } else if (c == "FileAttachmentCollection") {
          d = a ? "rect(3px 20px 21px 2px)" : "rect(3px 111px 21px 93px)";
          e = a ? "-2px" : "-93px";
        } else if (c == "ChoiceSection")
          if (
            Util.IsNonEmptyString(
              ChoiceSection_GetReplaceXmlToEdit(f.SnippetElement)
            )
          ) {
            var h = a
              ? "IPFSxReplaceSelected.png"
              : "IPFSxReplaceUnselected.png";
            d = "rect(0px 18px 18px 0px)";
            var r = Util.FindHashForServerImage(h);
            i = "/_layouts/inc/" + h + r;
            m = "0px";
            e = "0px";
          } else {
            d = a ? "rect(3px 75px 21px 57px)" : "rect(3px 147px 21px 129px)";
            e = a ? "-57px" : "-129px";
          }
        else if (c == "RepeatingTable" || c == "RepeatingSection") {
          d = a ? "rect(3px 183px 21px 165px)" : "rect(3px 129px 21px 111px)";
          e = a ? "-165px" : "-111px";
          if (f.boolIsFiltered != "undefined" && f.boolIsFiltered == true) {
            d = a ? "rect(0px 18px 18px 0px)" : "rect(0px 18px 18px 0px)";
            m = "0px";
            e = "0px";
            var h = a
                ? "IPFSFilterRefreshSelected.png "
                : "IPFSFilterRefreshUnselected.png",
              r = Util.FindHashForServerImage(h);
            i = "/_layouts/inc/" + h + r;
          }
        }
        if (c == "RepeatingTable" && b.style.display == "none") {
          var n = b.parentNode,
            q = n.parentNode;
          q.removeChild(n);
          q.appendChild(n);
        }
        if (i != null)
          b.childNodes[0].childNodes[0].childNodes[0].childNodes[0].src = i;
        b.childNodes[0].childNodes[0].childNodes[0].style.clip = d;
        b.childNodes[0].childNodes[0].childNodes[0].style.left = e;
        b.childNodes[0].childNodes[0].childNodes[0].style.top = m;
        b.childNodes[0].childNodes[0].style.display = "block";
      }
    }
}
Container.HideWidget = Container_HideWidget;
function Container_HideWidget(b) {
  ULSrLq:;
  HoverMenu.HideMenu();
  var a = HoverMenu_GetWidgetForContainer(b);
  if (a != null && a.childNodes[0] != null && !a.childNodes[0].ignoreHideWidget)
    if (
      a != null &&
      a.childNodes[0] != null &&
      a.childNodes[0].childNodes[0] != null &&
      a.childNodes[0].childNodes[0].style != null
    )
      a.childNodes[0].childNodes[0].style.display = "none";
}
Container.Highlight = Container_Highlight;
function Container_Highlight(a, b) {
  ULSrLq:;
  BaseControl.Highlight(a, b);
  Container.ShowWidget(a, SelectionService.GetHighlightState(a));
}
Container.RemoveHighlight = Container_RemoveHighlight;
function Container_RemoveHighlight(a, c) {
  ULSrLq:;
  BaseControl.RemoveHighlight(a, c);
  var b = SelectionService.GetHighlightState(a);
  if (SelectionService.IsIpInState(b) || SelectionService.IsHoverInState(b))
    Container.ShowWidget(a, b);
  else Container.HideWidget(a);
}
Container.Select = Container_Select;
function Container_Select(a) {
  ULSrLq:;
  BaseControl.Select(a);
}
Container.UnSelect = Container_UnSelect;
function Container_UnSelect(a) {
  ULSrLq:;
  var d = ViewDataNode_GetViewDataNodeFromHtml(a),
    c = d._objViewDataNodeParent;
  if (c != null) {
    var e = c.SnippetElement[2];
    if (e == "RichTextCollection") {
      var f = a.getAttribute("FormId"),
        b = RichTextBox_GetLeafControlFromSelectedRTE(a);
      b != null &&
        b.fV4RTE &&
        !Dialog_DialogPresent() &&
        PostbackBody.intPostbacksInProgress == 0 &&
        View_GetTemplateType(f) != 1 &&
        RichTextBox_BlurV4Control(b, a);
    }
  }
  BaseControl.UnSelect(a);
}
Container.GetChildSnippetElements = Container_GetChildSnippetElements;
function Container_GetChildSnippetElements(a) {
  ULSrLq:;
  return a[6][0];
}
Container.GetMenuTopOffset = Container_GetMenuTopOffset;
function Container_GetMenuTopOffset(a) {
  ULSrLq:;
  return a[6][1][0];
}
Container.GetMenuHorizontalPositionStyle = Container_GetMenuHorizontalPositionStyle;
function Container_GetMenuHorizontalPositionStyle(a) {
  ULSrLq:;
  return a[6][1][1];
}
Container.GetWidgetTopOffset = Container_GetWidgetTopOffset;
function Container_GetWidgetTopOffset(a) {
  ULSrLq:;
  return a[6][1][2];
}
Container.GetWidgetLeftOffset = Container_GetWidgetLeftOffset;
function Container_GetWidgetLeftOffset(a) {
  ULSrLq:;
  return a[6][1][3];
}
function Container_GetWidgetTabIndexFromSnippet(a) {
  ULSrLq:;
  return a[6][1][4];
}
function Container_GetWidgetAltText(c) {
  ULSrLq:;
  var a = IntlCoreStrings.k_strWidgetTitle,
    b = Container_GetCollectionType(c);
  switch (b) {
    case "Section":
    case "RepeatingSection":
    case "ChoiceSection":
    case "ChoiceGroup":
      a = IntlCoreStrings.k_strWidgetAltOptionalSection;
      break;
    case "FileAttachmentCollection":
      a = IntlCoreStrings.k_strWidgetAltFileAttachmentControl;
      break;
    case "RepeatingTable":
      a = IntlCoreStrings.k_strWidgetAltRepeatingTable;
  }
  return a;
}
function Container_GetCollectionType(c) {
  ULSrLq:;
  var b = c._objViewDataNodeParent,
    a = b.SnippetElement;
  return a[2];
}
Container.GetTemplateName = Container_GetTemplateName;
function Container_GetTemplateName(a) {
  ULSrLq:;
  return a[6][2];
}
Container.GetPrintTemplateName = Container_GetPrintTemplateName;
function Container_GetPrintTemplateName(a) {
  ULSrLq:;
  return a[6][3];
}
Container.Render = Container_Render;
function Container_Render(
  objViewDataNode,
  objSnippetElement,
  strParentHtmlId,
  arrHtmlTemplateFragments,
  arrHtmlToInsertBuilder
) {
  ULSrLq:;
  var arrChildSnippets = Snippet_GetChildNodes(objSnippetElement),
    fAbortRender =
      arrChildSnippets.length == 1 && arrChildSnippets[0][2] == "RichTextBox";
  if (ViewDataNode_IsHidden(objViewDataNode) && !fAbortRender) return;
  var templateType = View.GetTemplateType(objViewDataNode.FormId),
    arrTemplate = [];
  if (templateType == 1)
    arrTemplate = eval(Container.GetPrintTemplateName(objSnippetElement));
  else arrTemplate = eval(Container.GetTemplateName(objSnippetElement));
  Container.RenderHelper(
    objViewDataNode,
    objSnippetElement,
    strParentHtmlId,
    arrHtmlTemplateFragments,
    arrHtmlToInsertBuilder,
    arrTemplate
  );
}
Container.RenderHelper = Container_RenderHelper;
function Container_RenderHelper(a, g, l, j, k, h) {
  ULSrLq:;
  var d = l,
    c = a.OriginalId;
  if (typeof c == "undefined" || c == "") ViewDataNode_SetHtmlId(a, d);
  else d = c;
  var e = Container.GetChildSnippetElements(g),
    f = Container.GetChildViewDataNodes(a);
  if (e.length != f.length) return;
  for (var b = 0; b < h.length; b++)
    var i = h[b],
      m = Container.RenderSpecialValueContainer(i, a, g, d, k, j, e, f);
}
Container.RenderSpecialValueContainer = Container_RenderSpecialValueContainer;
function Container_RenderSpecialValueContainer(b, d, i, e, c, g, f, h) {
  ULSrLq:;
  var a = false;
  if (Util.GetDataType(b) == 1 && Util_GetSpecialValue(b) == 5) {
    Container.RenderSpecialValue(d, c, g, f, h, e);
    a = true;
  } else if (BaseControl.RenderTemplateItem(b, d, i, e, c)) a = true;
  return a;
}
Container.RenderSpecialValue = Container_RenderSpecialValue;
function Container_RenderSpecialValue(j, f, e, d, h, k) {
  ULSrLq:;
  for (var b = 0; b < e.length; b++) {
    var c = e[b];
    switch (Util.GetDataType(c)) {
      case 2:
        f.push(c);
        break;
      case 1:
        var a = Util_GetSpecialValue(c);
        if (a >= d.length || a >= h.length) continue;
        var g = d[a],
          i = h[a];
        i._objViewDataNodeParent = j;
        var l = g.ControlType["Render"];
        l(i, g, k, f);
    }
  }
}
function Container_GetStableIds(a) {
  ULSrLq:;
  return a[1][3];
}
function Container_InitializeViewDataNodes(f, n, c, a, h) {
  ULSrLq:;
  var p = c[5];
  a.SnippetElement = c;
  a._objViewDataNodeParent = n;
  a.FormId = f;
  switch (p) {
    case 4:
    case 7:
    case 2:
      ViewDataNode_InitializeViewDataNode(a);
      for (
        var d = Snippet_GetChildNodes(c),
          g = ViewDataNode_GetChildNodes(a),
          o = Container_GetStableIds(a),
          q = c[2],
          l = q == "HiddenCollection",
          b = 0;
        b < g.length;
        b++
      ) {
        var k = g[b];
        k.StableId = o[b];
        Container_InitializeViewDataNodes(f, a, d[0], k, !l && h);
      }
      if (l && h) {
        var j = GlobalFormData.Get(f),
          i = j.auxDomCache,
          e = "Snippet_" + a.SnippetElement[0];
        if (j.viewDataHtmlMap[e] == null) j.viewDataHtmlMap[e] = a;
        var m = ViewDataNode_GetChildNodes(a);
        if (m.length > 0) i[e] = a;
        else
          m.length == 0 && i[e] != null && ViewDataNode_SetContent(a, i[e][1]);
      }
      break;
    case 6:
      ViewDataNode_CreateDatum(a);
      for (
        var d = Snippet_GetChildNodes(c),
          g = ViewDataNode_GetChildNodes(a),
          b = 0;
        b < d.length;
        b++
      )
        Container_InitializeViewDataNodes(f, a, d[b], g[b], h);
      break;
    case 8:
    case 3:
      ViewDataNode_CreateDatum(a);
      if (c[2] == "Hyperlink" && !Hyperlink_HasDynamicDisplay(c))
        for (
          var d = Hyperlink_GetChildSnippets(c),
            g = Hyperlink_GetChildViewDataNodes(a),
            b = 0;
          b < d.length;
          b++
        )
          Container_InitializeViewDataNodes(f, a, d[b], g[b], h);
  }
}
Container.ResolveSpecialValue = Container_ResolveSpecialValue;
function Container_ResolveSpecialValue(d, c, b, f) {
  ULSrLq:;
  if (d == 2) return BaseControl_ComputeCssClasses(c, b[3], 0, true);
  var a = BaseControl.ResolveSpecialValue(d, c, b, f);
  if (a == null)
    switch (d) {
      case 6:
        a = Container.GetMenuTopOffset(b);
        break;
      case 7:
        a = Container.GetMenuHorizontalPositionStyle(b);
        break;
      case 8:
        a = Container.GetWidgetTopOffset(b);
        break;
      case 9:
        a = Container.GetWidgetLeftOffset(b);
        break;
      case 10:
        var e = c._objViewDataNodeParent;
        a = StructuralEditingControl.GetTitle(e.SnippetElement);
        if (a == null) a = "";
        break;
      case 11:
        a = Container_GetWidgetTabIndexFromSnippet(b);
        break;
      case 12:
        a = IntlCoreStrings.k_strWidgetTitle;
        break;
      case 13:
        a = Container_GetWidgetAltText(c);
    }
  return a;
}
Container.GetChildViewDataNodes = Container_GetChildViewDataNodes;
function Container_GetChildViewDataNodes(a) {
  ULSrLq:;
  return a[1][2];
}
Container.IsSigned = Container_IsSigned;
function Container_IsSigned(a) {
  ULSrLq:;
  return a[1][3];
}
Container.SetDisable = Container_SetDisable;
function Container_SetDisable() {}
Container.OnChange = BaseControl.OnChange;
Container.OnKeyPress = BaseControl.OnKeyPress;
Container.OnAfterCreate = BaseControl.OnAfterCreate;
Container.OnMouseOver = Container_OnMouseOver;
function Container_OnMouseOver(a, d) {
  ULSrLq:;
  var b = BaseControl_GetParentInfoPathControl(a),
    c = b.getAttribute("ScriptClass");
  if (c == "RichTextCollection") a = BaseControl_GetParentInfoPathControl(b);
  BaseControl.OnMouseOver(a, d);
}
Container.OnMouseOut = BaseControl.OnMouseOut;
Container.OnMouseDown = BaseControl.OnMouseDown;
Container.OnMouseUp = BaseControl.OnMouseUp;
Container.IsSelected = BaseControl.IsSelected;
Container.RestoreFocus = BaseControl.RestoreFocus;
Container.MoveStyles = Container_MoveStyles;
function Container_MoveStyles(c) {
  ULSrLq:;
  var e = ViewDataNode_GetViewDataNodeFromHtml(c),
    b = ViewDataNode_GetChildNodes(e);
  if (b.length == 1) {
    var a = b[0],
      f = a.SnippetElement[2];
    if (
      f == "RichTextBox" &&
      !ViewDataNode_IsValid(a) &&
      !ErrorVisualization_IsAsteriskVisible(a)
    ) {
      var d = document.getElementById(a[9]);
      RichTextBox_MoveStyles(d);
      return;
    }
  }
  BaseControl_MoveStyles(c);
}
function RepeatingTableRow() {}
RepeatingTableRow.OnClick = Container.OnClick;
RepeatingTableRow.ShowWidget = Container.ShowWidget;
RepeatingTableRow.HideWidget = Container.HideWidget;
RepeatingTableRow.Highlight = Container.Highlight;
RepeatingTableRow.RemoveHighlight = Container.RemoveHighlight;
RepeatingTableRow.Select = Container.Select;
RepeatingTableRow.UnSelect = Container.UnSelect;
RepeatingTableRow.GetChildSnippetElements = Container.GetChildSnippetElements;
RepeatingTableRow.GetPaddingLeft = Container.GetPaddingLeft;
RepeatingTableRow.GetPaddingTop = Container.GetPaddingTop;
RepeatingTableRow.Render = RepeatingTableRow_Render;
function RepeatingTableRow_Render(a, e, f, c, d) {
  ULSrLq:;
  var g = View.GetTemplateType(a.FormId),
    b = RepeatingTableRow_Template;
  if (g == 1) b = RepeatingTableRow_PrintTemplate;
  ViewDataNode_GetFilterRowVisibility(a) == true &&
    Container.RenderHelper(a, e, f, c, d, b);
}
RepeatingTableRow.ResolveSpecialValue = Container.ResolveSpecialValue;
RepeatingTableRow.OnChange = BaseControl.OnChange;
RepeatingTableRow.OnFocus = BaseControl.OnFocus;
RepeatingTableRow.OnBlur = BaseControl.OnBlur;
RepeatingTableRow.OnKeyPress = BaseControl.OnKeyPress;
RepeatingTableRow.OnAfterCreate = BaseControl.OnAfterCreate;
RepeatingTableRow.OnMouseOver = BaseControl.OnMouseOver;
RepeatingTableRow.OnMouseOut = BaseControl.OnMouseOut;
RepeatingTableRow.IsSelected = BaseControl.IsSelected;
RepeatingTableRow.RestoreFocus = BaseControl.RestoreFocus;
function ViewContainer() {}
ViewContainer.OnClick = Container.OnClick;
ViewContainer.ShowWidget = Container.ShowWidget;
ViewContainer.HideWidget = Container.HideWidget;
ViewContainer.Highlight = Container.Highlight;
ViewContainer.RemoveHighlight = Container.RemoveHighlight;
ViewContainer.Select = Container.Select;
ViewContainer.UnSelect = Container.UnSelect;
ViewContainer.GetChildSnippetElements = Container.GetChildSnippetElements;
ViewContainer.GetPaddingLeft = Container.GetPaddingLeft;
ViewContainer.GetPaddingTop = Container.GetPaddingTop;
ViewContainer.Render = ViewContainer_Render;
function ViewContainer_Render(a, e, f, c, d) {
  ULSrLq:;
  var g = View.GetTemplateType(a.FormId),
    b = ViewContainer_Template;
  if (g == 1) b = ViewContainer_PrintTemplate;
  Container.RenderHelper(a, e, f, c, d, b);
}
ViewContainer.OnDrop = ViewContainer_OnDrop;
function ViewContainer_OnDrop(c, b) {
  ULSrLq:;
  var a = CrossBrowserLibrary_GetEventSourceElement(b);
  BaseControl_OnDrop(a != null ? a.id : "");
}
ViewContainer.ResolveSpecialValue = Container.ResolveSpecialValue;
ViewContainer.OnChange = BaseControl.OnChange;
ViewContainer.OnFocus = ViewContainer_OnFocus;
function ViewContainer_OnFocus(a, b) {
  ULSrLq:;
  BaseControl_OnFocus(a, b);
}
ViewContainer.OnBlur = BaseControl.OnBlur;
ViewContainer.OnKeyPress = BaseControl.OnKeyPress;
ViewContainer.OnAfterCreate = BaseControl.OnAfterCreate;
ViewContainer.OnMouseOver = BaseControl.OnMouseOver;
ViewContainer.OnMouseOut = BaseControl.OnMouseOut;
ViewContainer.IsSelected = BaseControl.IsSelected;
ViewContainer.RestoreFocus = BaseControl.RestoreFocus;
function Section() {}
Section.OnChange = BaseControl.OnChange;
Section.OnClick = BaseControl.OnClick;
Section.OnFocus = BaseControl.OnFocus;
Section.OnBlur = BaseControl.OnBlur;
Section.OnMouseOver = BaseControl.OnMouseOver;
Section.OnMouseOut = BaseControl.OnMouseOut;
Section.OnMouseDown = BaseControl.OnMouseDown;
Section.OnMouseUp = BaseControl.OnMouseUp;
Section.OnKeyPress = BaseControl.OnKeyPress;
Section.IsValid = BaseControl.IsValid;
Section.IsSelected = BaseControl.IsSelected;
Section.Select = BaseControl.Select;
Section.UnSelect = BaseControl.UnSelect;
Section.ResolveSpecialValue = StructuralEditingControl.ResolveSpecialValue;
Section.IsSigned = StructuralEditingControl.IsSigned;
function Section_Remove(i, j) {
  ULSrLq:;
  var c = document.getElementById(i),
    g = c.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(g) != 1
    )
  )
    return;
  var d = BaseControl.GetContainerId(c.id),
    b = document.getElementById(d);
  if (b == null) return false;
  Perf_Start_Trace(7600, "SectionRemove");
  var f = StructuralEditingControl_Remove(g, c, j, 7, true);
  if (f) {
    var b = document.getElementById(d),
      a = InDocUI.GetInDocUIForCollection(b);
    if (a != null) {
      var h = ViewDataNode_GetViewDataNodeFromHtml(a);
      ViewDataNode_SetHidden(h, false);
      a.style.display = "block";
      InDocUI.RefreshVisualState(a);
      ErrorVisualization_UpdateAllAsterisks();
      window.setTimeout('Section_RestoreFocusOnIndocUI("' + a.id + '")', 1);
    }
    var e = InDocSign.GetInDocSignForCollection(b);
    if (e != null) e.style.display = "none";
    Perf_End_Trace(7601, "SectionRemove");
    return f;
  }
  Perf_End_Trace(7601, "SectionRemove");
  return true;
}
Section.OnAfterCreate = Section_OnAfterCreate;
function Section_OnAfterCreate() {}
function Section_RestoreFocusOnIndocUI(c) {
  ULSrLq:;
  var a = document.getElementById(c),
    b = g_arrControlTypes[a.getAttribute("ScriptClass")]["RestoreFocus"];
  b(a);
}
function Section_Insert(c, i) {
  ULSrLq:;
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(c) != 1
    )
  )
    return;
  var a = document.getElementById(c),
    e = BaseControl.GetContainerId(a.id),
    f = document.getElementById(e),
    j = null;
  if (f == null) return;
  Perf_Start_Trace(7598, "SectionInsert");
  var b = InDocUI.GetInDocUIForCollection(a);
  if (b != null) {
    var g = ViewDataNode_GetViewDataNodeFromHtml(b);
    ViewDataNode_SetHidden(g, true);
  }
  var d = InDocSign.GetInDocSignForCollection(a);
  if (d != null) d.style.display = "block";
  var h = StructuralEditingControl.InsertRelative(6, false, null, a, i);
  a = document.getElementById(c);
  b = InDocUI.GetInDocUIForCollection(a);
  if (b != null) {
    InDocUI.RefreshVisualState(b);
    ErrorVisualization_UpdateAllAsterisks();
  }
  Perf_End_Trace(7599, "SectionInsert");
  return h;
}
Section.Render = Section_Render;
function Section_Render(c, b, d, a) {
  ULSrLq:;
  IP_Collection_Render(c, b, d, a, Section_Template);
}
function RepeatingSection() {}
RepeatingSection.Render = RepeatingSection_Render;
function RepeatingSection_Render(c, b, d, a) {
  ULSrLq:;
  IP_Collection_Render(c, b, d, a, RepeatingSection_Template);
}
RepeatingSection.ResolveSpecialValue =
  StructuralEditingControl.ResolveSpecialValue;
RepeatingSection.OnChange = BaseControl.OnChange;
RepeatingSection.OnClick = BaseControl.OnClick;
RepeatingSection.OnFocus = BaseControl.OnFocus;
RepeatingSection.OnBlur = BaseControl.OnBlur;
RepeatingSection.OnMouseOver = BaseControl.OnMouseOver;
RepeatingSection.OnMouseOut = BaseControl.OnMouseOut;
RepeatingSection.OnMouseDown = BaseControl.OnMouseDown;
RepeatingSection.OnMouseUp = BaseControl.OnMouseUp;
RepeatingSection.OnKeyPress = BaseControl.OnKeyPress;
RepeatingSection.OnAfterCreate = BaseControl.OnAfterCreate;
RepeatingSection.IsValid = BaseControl.IsValid;
RepeatingSection.IsSelected = BaseControl.IsSelected;
RepeatingSection.Select = BaseControl.Select;
RepeatingSection.UnSelect = BaseControl.UnSelect;
RepeatingSection.RestoreFocus = BaseControl.RestoreFocus;
RepeatingSection.IsSigned = StructuralEditingControl.IsSigned;
function RepeatingTable() {}
RepeatingTable.Render = RepeatingTable_Render;
function RepeatingTable_Render(c, b, d, a) {
  ULSrLq:;
  IP_Collection_Render(c, b, d, a, RepeatingTable_Template);
}
RepeatingTable.SetDisable = function () {};
RepeatingTable.ResolveSpecialValue =
  StructuralEditingControl.ResolveSpecialValue;
RepeatingTable.OnChange = BaseControl.OnChange;
RepeatingTable.OnClick = BaseControl.OnClick;
RepeatingTable.OnFocus = BaseControl.OnFocus;
RepeatingTable.OnBlur = BaseControl.OnBlur;
RepeatingTable.OnMouseOver = BaseControl.OnMouseOver;
RepeatingTable.OnMouseOut = BaseControl.OnMouseOut;
RepeatingTable.OnMouseDown = BaseControl.OnMouseDown;
RepeatingTable.OnMouseUp = BaseControl.OnMouseUp;
RepeatingTable.OnKeyPress = BaseControl.OnKeyPress;
RepeatingTable.OnAfterCreate = BaseControl.OnAfterCreate;
RepeatingTable.IsValid = BaseControl.IsValid;
RepeatingTable.IsSelected = BaseControl.IsSelected;
RepeatingTable.Select = BaseControl.Select;
RepeatingTable.UnSelect = BaseControl.UnSelect;
RepeatingTable.IsSigned = StructuralEditingControl.IsSigned;
function RichTextBox() {}
RichTextBox.GetFormatting = BaseControl.GetFormatting;
RichTextBox.g_boolRTEScriptLoaded = false;
RichTextBox.GetRichValueFromControl = RichTextBox_GetRichValueFromControl;
function RichTextBox_GetRichValueFromControl(a) {
  ULSrLq:;
  var f = a.getAttribute("FormId");
  if (a.fV4RTE) {
    var c = RichTextBox_GetNewRichTextControl(a),
      b = c.innerHTML;
    return RichTextBox_IsEquilvalentToBlank(b) ? "" : b;
  } else if (UserAgentInfo.strBrowser == 1) {
    var e = RTE_GetEditorDocument(a.id + "_plainText"),
      b = e.body.innerHTML;
    return RichTextBox_IsEquilvalentToBlank(b) ? "" : b;
  } else {
    var d = RichTextBox_GetDisplayControl(a);
    return d.innerHTML;
  }
}
function RichTextBox_IsEquilvalentToBlank(b) {
  ULSrLq:;
  var a = b.toLowerCase();
  return (
    a == "<p></p>" ||
    a == "<div></div>" ||
    a == "<p>&nbsp;</p>" ||
    a == "<div>&nbsp;</div>"
  );
}
RichTextBox.GetValueFromControl = function (b) {
  ULSrLq:;
  var a = [];
  if (b.fV4RTE) {
    var c = RichTextBox_GetNewRichTextControl(b);
    if (UserAgentInfo.strBrowser != 3) a.push(c.innerText);
    else a.push(c.textContent);
    a.push(c.innerHTML);
  } else if (UserAgentInfo.strBrowser == 1) {
    var f = b.getAttribute("FormId"),
      e = RTE_GetEditorDocument(b.id + "_plainText");
    a.push(e.body.innerText);
    a.push(e.body.innerHTML);
  } else {
    var d = RichTextBox_GetDisplayControl(b);
    if (UserAgentInfo.strBrowser == 2) a.push(d.innerText);
    else a.push(d.textContent);
    a.push(d.innerHTML);
  }
  return a;
};
function RichTextBox_InsertValueIfDirty(c, b) {
  ULSrLq:;
  var a = b;
  if (Util_GetDataType(b) == 3) a = b[1];
  else a = RichTextBox.QuickEncode(b);
  if (a.indexOf("<") == -1) a = "<div>" + a + "</div>";
  var d = c.innerHTML;
  if (d != a) c.innerHTML = a;
}
RichTextBox.SetValueOfControl = function (a, b) {
  ULSrLq:;
  if (a.fV4RTE) {
    var f = RichTextBox_GetNewRichTextControl(a);
    RichTextBox_InsertValueIfDirty(f, b);
  } else if (UserAgentInfo.strBrowser == 1) {
    var g = a.getAttribute("FormId"),
      d = RTE_GetEditorDocument(a.id + "_plainText");
    d != null && RichTextBox_InsertValueIfDirty(d.body, b);
  } else if (a != null && a.innerText != b) {
    var e = b,
      c = document.getElementById(a.id + "_plainText");
    if (Util_GetDataType(b) == 3) {
      e = b[1];
      RichTextBox.SetRichValueOfControl(a, e);
      Util.SetInnerText(c, b[0]);
    } else {
      Util.SetInnerText(a, b);
      Util.SetInnerText(c, b);
    }
  }
  return a;
};
RichTextBox.SetRichValueOfControl = function (b, a) {
  ULSrLq:;
  var i = b.getAttribute("FormId");
  if (b.fV4RTE) {
    var e = RichTextBox_GetNewRichTextControl(b);
    a = RichTextBox_NormalizeValue(b.fV4RTE, a);
    e.innerHTML = a;
  } else if (UserAgentInfo.strBrowser == 1) {
    a = RichTextBox_NormalizeValue(b.fV4RTE, a);
    var g = RTE_GetEditorTextArea(b.id + "_plainText");
    g.innerText = a;
    var d = RTE_GetEditorDocument(b.id + "_plainText");
    if (d) d.body.innerHTML = a;
  } else if (Util_GetDataType(a) == 3) {
    var h = a[1];
    RichTextBox.SetRichValueOfControl(b, h);
    var c = document.getElementById(b.id + "_plainText");
    c != null && Util.SetInnerText(c, a[0]);
  } else {
    var f = RichTextBox_GetDisplayControl(b);
    f.innerHTML = a;
  }
};
function RichTextBox_NormalizeValue(b, a) {
  ULSrLq:;
  if (a == "")
    if (b) return "";
    else a = "<div></div>";
  if (a.indexOf("<") == -1) a = "<div>" + a + "</div>";
  return a;
}
RichTextBox.NeedToCreateDropDown = function () {
  ULSrLq:;
  if (typeof g_strRTETextEditorPullDownMenuID != "undefined") {
    var a = document.getElementById(g_strRTETextEditorPullDownMenuID);
    return a == null;
  }
  return false;
};
RichTextBox.SetHidden = RichTextBox_SetHidden;
function RichTextBox_SetHidden(d, e, f) {
  ULSrLq:;
  var b = d._objViewDataNodeParent,
    a = b._objViewDataNodeParent,
    h = document.getElementById(a[9]);
  b[4] = f;
  b._boolDirty = true;
  a[4] = f;
  a._boolDirty = true;
  var k = d.FormId;
  if (UserAgentInfo.strBrowser == 1) {
    var i = g_strRTETextEditorWithTheFocus,
      g = e.id + "_plainText";
    if (i == g) {
      var c = BaseControl_FindFirstFocusableControl(e);
      if (c != null) {
        var j =
          g_arrControlTypes[c.getAttribute("ScriptClass")]["RestoreFocus"];
        j(c);
      } else RTE_OnBlur(g);
    }
  }
  BaseControl_RefreshVisualState(h);
  LeafControl.SetHidden(d, e, f);
}
function RichTextBox_GetNewRichTextControl(a) {
  ULSrLq:;
  if (a.id.indexOf("_newRichText") == -1)
    return document.getElementById(a.id + "_newRichText");
  else return a;
}
function RichTextBox_GetInfoPathControlFromNewRichTextControl(a) {
  ULSrLq:;
  if (
    Util_IsNullOrEmptyString(a.id) ||
    a.id.indexOf("_newRichText") == -1 ||
    a.parentNode == null ||
    document.getElementById(a.id) != a
  )
    return null;
  else {
    var b = a.parentNode.parentNode;
    if (b == null) return null;
    return BaseControl_IsInfoPathControl(b) ? b : null;
  }
}
RichTextBox.SetDisable = function (a, c) {
  ULSrLq:;
  var f = a.getAttribute("FormId");
  if (a.fV4RTE) {
    var e = ViewDataNode_GetViewDataNodeFromHtml(a);
    if (
      View.GetTemplateType(e.FormId) == RichTextBox_PrintTemplate &&
      UserAgentInfo.strBrowser == 1
    ) {
      var b = RTE_GetEditorDocument(a.id);
      if (b != null)
        if (c) b.body.setAttribute("readOnly", "true");
        else b.body.removeAttribute("readOnly");
    } else {
      var d = RichTextBox_GetNewRichTextControl(a);
      if (d != null) {
        d.contentEditable = !c;
        RichTextBox.g_boolRTEScriptLoaded &&
          RTE.Canvas.setRestriction(d, "DisableRibbonCommands", c);
      }
    }
  } else if (UserAgentInfo.strBrowser == 1) {
    var b = RTE_GetEditorDocument(a.id + "_plainText");
    b != null && b.body.setAttribute("contentEditable", !c);
  }
};
RichTextBox.AddEventLogEntry = function (a) {
  ULSrLq:;
  var c = Snippet_GetSnippetElementFromHtml(a),
    b = Snippet_GetRoundTripModel(c);
  return EventLog_Add(
    a.getAttribute("FormId"),
    12,
    a,
    BaseControl.GetOriginalId(a),
    "",
    RichTextBox.GetRichValueFromControl(a),
    b == 1,
    false,
    false,
    4,
    1
  );
};
RichTextBox.AddEventLogEntryValue = function (a, d) {
  ULSrLq:;
  var c = Snippet_GetSnippetElementFromHtml(a),
    b = Snippet_GetRoundTripModel(c);
  return EventLog_Add(
    a.getAttribute("FormId"),
    12,
    a,
    BaseControl.GetOriginalId(a),
    "",
    d,
    b == 1,
    false,
    false,
    4,
    1
  );
};
function RichTextBox_RenderV4Control(c, a) {
  ULSrLq:;
  var d = CurrentFormData_IsV4UI(a);
  if (d) {
    var b = c.SnippetElement,
      e = RichTextBox_IsBasicRichTextBox(b);
    if (!e && IPFSRibbon_IsEnabled(a)) return true;
  }
  return false;
}
function RichTextBox_PrepareV4ControlForEditing(a, e) {
  ULSrLq:;
  RichTextBox_OnRteV4ScriptLoaded();
  var d = RichTextBox_GetInfoPathControlFromNewRichTextControl(
    document.getElementById(a)
  );
  d.setAttribute("rendered", "false");
  RTE.Canvas.fixRegion(a);
  var b = ViewDataNode_GetViewDataNodeFromHtml(d),
    f = ViewDataNode_GetDatum(b),
    c = document.getElementById(a);
  if (ViewDataNode_IsBlank(b)) b.fBlank = true;
  f._strValue = c.innerHTML;
  if (ViewDataNode_IsDisabled(b)) {
    c.contentEditable = false;
    RTE.Canvas.setRestriction(c, "DisableRibbonCommands", true);
  }
  if (e) {
    RichTextBox_EnsureV4RTESelection(d);
    var c = document.getElementById(a);
    RTE.Cursor.get_range().moveToStartOfNode(c);
    RTE.Cursor.update();
  }
  d.setAttribute("rendered", "true");
  IPFSRibbon_EnsureRichTextEditorFormPageComponent();
}
RichTextBox.OnAfterCreate = RichTextBox_OnAfterCreate;
function RichTextBox_OnAfterCreate(b) {
  ULSrLq:;
  var a = b.FormId,
    e = GlobalFormData.Get(a);
  if (e.boolDocumentClosed) return;
  var f = View.GetTemplateType(a),
    d = document.getElementById(b[9]);
  if (d == null) return;
  LeafControl.OnAfterCreate(b);
  var c = d.id;
  if (
    RichTextBox.g_boolRTEScriptLoaded ||
    !CurrentFormData_IsV4UI(a) ||
    f == 1 ||
    !IPFSRibbon_IsEnabled(a)
  )
    RichTextBox_OnRteComponentAvailable(c);
  else
    IPFSRibbon_RunWhenRibbonIsReady(function () {
      ULSrLq:;
      RichTextBox_OnRteComponentAvailable(c);
    });
}
function RichTextBox_OnRteV4ScriptLoaded() {
  ULSrLq:;
  if (!RichTextBox.g_boolRTEScriptLoaded) {
    var a = IPFSRibbon.g_strFocusedFormId;
    a != null &&
      window.setTimeout(function () {
        ULSrLq:;
        IPFSRibbon_EnsureFocusOnForm(a);
      }, 1);
    RTE.Canvas.load();
    RTE.CanvasEvents.registerListener(
      RTE.CanvasEvents.editableRegionBlurEvent,
      RichTextBox_V4UI_RTECanvasBlur
    );
    RTE.CanvasEvents.registerListener(
      RTE.CanvasEvents.editableRegionFocusEvent,
      RichTextBox_V4UI_RTECanvasFocus
    );
    RichTextBox.g_boolRTEScriptLoaded = true;
  }
}
function RichTextBox_GetDisplayControl(b) {
  ULSrLq:;
  var a = b;
  if (b.id.indexOf("_RichTextValue") == -1)
    a = document.getElementById(b.id + "_RichTextValue");
  if (a == null) a = RichTextBox_GetNewRichTextControl(b);
  return a;
}
function RichTextBox_IPFSAdjustHeight(d, e) {
  ULSrLq:;
  var a = RTE_GetEditorDocument(d),
    b = document.getElementById(e),
    c = document.getElementById(RTE_GetEditorIFrameID(d));
  if (a != null && b != null && c != null) {
    b.style.minHeight = a.body.scrollHeight + "px";
    c.height = a.body.scrollHeight + "px";
  }
}
function RichTextBox_MoveErrorVisuals(d, e) {
  ULSrLq:;
  var a = document.getElementById(e + "_Asterisk"),
    c = document.getElementById(e + "_SignIcon"),
    b = document.getElementById(e + "_ErrorTip"),
    f = d.childNodes[0];
  if (b != null) {
    b.parentNode.removeChild(b);
    d.insertBefore(b, f);
    b.style.position = "absolute";
  }
  if (c != null) {
    c.parentNode.removeChild(c);
    d.appendChild(c);
    c.style.position = "absolute";
  }
  if (a != null) {
    a.parentNode.removeChild(a);
    d.appendChild(a);
    a.style.position = "absolute";
  }
}
function RichTextBox_V4MoveErrorVisuals(a) {
  ULSrLq:;
  var f = document.getElementById(a),
    e = f.parentNode,
    c = document.getElementById(a + "_Asterisk"),
    d = document.getElementById(a + "_SignIcon"),
    b = document.getElementById(a + "_ErrorTip");
  if (b != null) {
    e.insertBefore(b, e.childNodes[0]);
    b.style.position = "absolute";
  }
  if (d != null) d.style.position = "absolute";
  if (c != null) c.style.position = "absolute";
}
RichTextBox.CheckDropDown = function () {
  ULSrLq:;
  var a = RTE_DD_GetMenuElement();
  if (a.parentNode != document.body) {
    a.parentNode.removeChild(a);
    document.body.appendChild(a);
    a.onactivate = RichTextBox.DropDownActivate;
    a.ondeactivate = RichTextBox.DropDownDeactivate;
  }
};
RichTextBox.FixLayoutGrid = function (a) {
  ULSrLq:;
  if (
    a.currentStyle.layoutGridType != "loose" &&
    a.style.layoutGridChar == 0 &&
    a.style.layoutGridLine == 0
  ) {
    a.style.layoutGridType = "loose";
    a.style.layoutGridChar = 0;
    a.style.layoutGridLine = 0;
  }
};
RichTextBox.DropDownActivate = function () {
  ULSrLq:;
  var c = RTE_DD_GetMenuElement(),
    a = "",
    e = g_strRTEPrevTextEditor,
    d = g_strRTETextEditorWithTheFocus;
  if (d) a = d;
  else if (e) a = e;
  else return;
  var i = RTE_GetEditorToolBar(a);
  i.style.display = "";
  var f = a.lastIndexOf("_"),
    h = a.substring(0, f),
    b = document.getElementById(h),
    g = ViewDataNode_GetViewDataNodeFromHtml(b);
  ErrorVisualization_HideShortMessage(b, g);
  b._disableShortMessage = true;
  if (b.currentStyle.direction == "rtl") {
    var j = document.getElementById(a + "_" + g_strRTEFontNameMnemonic);
    c.style.left =
      LeafControl.ParseLength(c.style.left) - c.offsetWidth + j.offsetWidth;
  }
};
RichTextBox.DropDownDeactivate = function () {
  ULSrLq:;
  var a = g_strRTEDDBaseElementID;
  if (a != null) {
    var b = document.getElementById(a.replace("_plainText", ""));
    b.ondeactivate();
  }
};
RichTextBox.PreserveHoverMenu = function (a) {
  ULSrLq:;
  var b = RichTextBox.GetContainerFromChild(a.parentNode.parentNode);
  SelectionService.Highlight(b, false, true);
};
RichTextBox.MoveStyles = RichTextBox_MoveStyles;
function RichTextBox_MoveStyles(a) {
  ULSrLq:;
  if (a.fV4RTE || UserAgentInfo.strBrowser != 1) {
    var e = ViewDataNode_GetViewDataNodeFromHtml(a),
      f = e._objViewDataNodeParent,
      c = document.getElementById(f[9]),
      g = e.SnippetElement,
      h = g[3],
      d = h[3];
    if (a.className.indexOf(d) != -1) c.className = c.className + " " + d;
    else c.className.indexOf(d) != -1 && BaseControl__ApplyCssClasses(c, 0);
  } else if (UserAgentInfo.strBrowser == 1) {
    var b = RTE_GetEditorDocument(a.id + "_plainText");
    if (b != null && b.body != null) {
      if (b.body.style.backgroundColor != a.currentStyle.backgroundColor)
        b.body.style.backgroundColor = a.currentStyle.backgroundColor;
      if (b.body.style.color != a.currentStyle.color)
        b.body.style.color = a.currentStyle.color;
    }
  }
}
RichTextBox.RemoveHoverMenu = function (a) {
  ULSrLq:;
  var b = RichTextBox.GetContainerFromChild(a.parentNode);
  SelectionService.RemoveHighlight(b, false);
};
RichTextBox.GetContainerFromChild = function (c) {
  ULSrLq:;
  var a = BaseControl.GetContainerId(c.id),
    b = document.getElementById(a);
  return b;
};
function RichTextBox_InvokeEditor(h) {
  ULSrLq:;
  var a = document.getElementById(h + "_RT1");
  if (a == null) return;
  var d = ViewDataNode_GetViewDataNodeFromHtml(a);
  if (ViewDataNode_IsDisabled(d)) return;
  var e = ViewDataNode_GetViewDataNodeFromHtml(a);
  if (UserAgentInfo.strBrowser != 1) {
    var b = document.getElementById(a.id + "_plainText"),
      c = RichTextBox_GetDisplayControl(a);
    if (
      d._boolDirty ||
      d._plainTextQueried ||
      UserMessages.ShowConfirmMessage(IntlCoreStrings.k_strRichToPlain, true)
    ) {
      if (c.offsetWidth > 0) b.style.width = a.offsetWidth;
      if (c.offsetHeight > 0) b.style.height = a.offsetHeight;
      b.style.display = "inline";
      c.style.display = "none";
      if (a.fNonIEBasicRT) a.style.display = "none";
      e[4] = true;
      b.className = a.className;
      b.focus();
      var g = e._objViewDataNodeParent,
        f = document.getElementById(g[9]);
      SelectionService.RemoveHighlight(a, true);
      Container.HideWidget(f);
    }
  }
}
RichTextBox.OnKeyPress = function (strRichTextId) {
  ULSrLq:;
  var objControl = document.getElementById(strRichTextId),
    objEditorDocument = RTE_GetEditorDocument(objControl.id + "_plainText"),
    objEvent = eval("objEditorDocument.parentWindow.event");
  if (objEvent != null) {
    var strFormId = objControl.getAttribute("FormId");
    KeyboardService.OnKeyPress(strFormId, objEvent);
  }
};
RichTextBox.OnKeyDown = function (strRichTextId) {
  ULSrLq:;
  var objControl = document.getElementById(strRichTextId),
    objEditorDocument = RTE_GetEditorDocument(objControl.id + "_plainText"),
    objEvent = eval("objEditorDocument.parentWindow.event");
  HoverMenu.isVisible && HoverMenu.HideMenu();
  if (objEditorDocument.body.disabled) {
    objEvent.returnValue = false;
    return;
  }
  if (objEvent != null) {
    var strFormId = objControl.getAttribute("FormId");
    KeyboardService.OnKeyDown(strFormId, objEvent) &&
      RTE_OnKeyDown(objControl.id + "_plainText", objEditorDocument.body);
  }
};
RichTextBox.OnMouseUp = function (strRichTextId) {
  ULSrLq:;
  var objControl = document.getElementById(strRichTextId),
    objEditorDocument = RTE_GetEditorDocument(objControl.id + "_plainText"),
    objEvent = eval("objEditorDocument.parentWindow.event");
  objEditorDocument.body.disabled &&
    RTE_OnMouseUp(objControl.id + "_plainText");
};
RichTextBox.OnBlur = function (strRichTextId) {
  ULSrLq:;
  var strControlId = strRichTextId + "_plainText",
    objActiveEditor = RTE_EditorWithTheFocus();
  if (objActiveEditor == null || strControlId != objActiveEditor.id) return;
  var objEditorDocument = RTE_GetEditorDocument(strControlId),
    objEvent = eval("objEditorDocument.parentWindow.event");
  objEditorDocument.body.disabled && RTE_OnBlur(strControlId);
};
RichTextBox.QuickEncode = function (a) {
  ULSrLq:;
  a = a.replace(/&/g, "&amp;");
  a = a.replace(/</g, "&lt;");
  a = a.replace(/>/g, "&gt;");
  a = a.replace(/\"/g, "&quot;");
  a = a.replace(/\n/g, "<br/>");
  return a;
};
RichTextBox.PersistPlainText = function (c) {
  ULSrLq:;
  var b = RichTextBox.GetContainerFromChild(c),
    g = RichTextBox_GetDisplayControl(b),
    a = c.value,
    d = ViewDataNode_GetViewDataNodeFromHtml(b),
    i = ViewDataNode_GetDatum(d);
  if (!Util_IsValidXmlString(a)) {
    UserMessages.ShowAlertMessage(
      IntlCoreStrings.k_strInvalidCharacterInText,
      true
    );
    c.style.display = "none";
    g.style.display = "block";
    if (b.fNonIEBasicRT) b.style.display = "block";
    var e = i.GetValue();
    if (Util.GetDataType(e) == 3) e = e[0];
    c.value = e;
  } else {
    var h = [];
    h.push(a);
    a = RichTextBox.QuickEncode(a);
    var f = "";
    if (!Util_IsNullOrEmptyString(a)) f = "<div>" + a + "</div>";
    c.style.display = "none";
    g.style.display = "block";
    h.push(f);
    RichTextBox.AddEventLogEntryValue(b, f);
    RichTextBox.SetRichValueOfControl(g, f);
  }
  d[4] = false;
  d._boolDirty = true;
  ViewDataNode_OnControlChange(b);
  d._plainTextQueried = true;
  ErrorVisualization_UpdateAllAsterisks();
};
RichTextBox.Render = RichTextBox_Render;
function RichTextBox_Render(b, d, e, c) {
  ULSrLq:;
  var a,
    f = View.GetTemplateType(b.FormId);
  a = RichTextBox_Template;
  if (f == 1) a = RichTextBox_PrintTemplate;
  LeafControl.Render(b, d, e, c, a);
}
RichTextBox.ResolveSpecialValue = RichTextBox_ResolveSpecialValue;
function RichTextBox_ResolveSpecialValue(d, c, b, e) {
  ULSrLq:;
  var a = LeafControl_ResolveSpecialValue(d, c, b, e);
  if (a == null)
    switch (d) {
      case 10:
        a = LeafControl_ComputeRenderStyle(c, b[3], true);
    }
  return a;
}
RichTextBox.IsFocusable = RichTextBox_IsFocusable;
function RichTextBox_IsFocusable() {
  ULSrLq:;
  return true;
}
RichTextBox.OnFocus = RichTextBox_OnFocus;
function RichTextBox_OnFocus(a, e) {
  ULSrLq:;
  var b = a.id + "_plainText",
    c = GlobalFormData.Get(a.getAttribute("FormId")).viewTreesAreMerged;
  if (c == null || typeof c == "undefined" || c == false)
    window.setTimeout('RichTextBox_PostCreate("' + b + '")', 5);
  else if (!a.fV4RTE) {
    if (UserAgentInfo.strBrowser == 1 && RTE_GetEditorIFrame(b) != null) {
      RTE_GiveEditorFocus(b);
      RTE_OnFocus(b);
    }
    LeafControl.OnFocus(a, e);
  } else {
    var d = RichTextBox_GetNewRichTextControl(a);
    try {
      d.focus();
    } catch (f) {}
  }
}
function RichTextBox_PostCreate(b) {
  ULSrLq:;
  if (typeof RTE_GetEditorDocument != "undefined") {
    var a = RTE_GetEditorDocument(b);
    a != null && a.body.setActive();
  }
}
RichTextBox.Highlight = function (b, a) {
  ULSrLq:;
  LeafControl.Highlight(b, a);
  if (!a) {
    var c = RichTextBox.GetContainerFromChild(b);
    SelectionService.Highlight(c, a, true);
    Container.ShowWidget(c, SelectionService.GetHighlightState(b));
  }
};
RichTextBox.RemoveHighlight = function (a, c) {
  ULSrLq:;
  LeafControl.RemoveHighlight(a, c);
  var b = RichTextBox.GetContainerFromChild(a);
  SelectionService.RemoveHighlight(b, false);
};
RichTextBox.Select = LeafControl.Select;
RichTextBox.UnSelect = LeafControl.UnSelect;
RichTextBox.OnClick = LeafControl.OnClick;
RichTextBox.OnChange = RichTextBox_OnChange;
function RichTextBox_OnChange(a) {
  ULSrLq:;
  RichTextBox_OnChangeInternal(a, false, false);
}
function RichTextBox_OnChangeInternal(a, f, g) {
  ULSrLq:;
  var c = RichTextBox_GetRichValueFromControl(a);
  if (!Util_IsValidXmlString(c)) {
    RichTextBox_HandleInValidXml(a, f);
    return;
  }
  if (!a.fV4RTE)
    if (UserAgentInfo.strBrowser == 1) a.ondeactivate();
    else {
      var h = document.getElementById(a.id + "_plainText");
      RichTextBox.PersistPlainText(h);
    }
  else {
    var b = ViewDataNode_GetViewDataNodeFromHtml(a),
      e = ViewDataNode_GetDatum(b),
      i = RichTextBox_GetRichValueFromDatum(e);
    if (!f && RichTextBox.g_boolRTEScriptLoaded) {
      var d = RTE.Cursor.get_range().getEditableRegion();
      if (
        d != null &&
        RichTextBox_GetInfoPathControlFromNewRichTextControl(d) == a
      ) {
        RTE.Selection.get_hasSelection() &&
          RTE.Selection.getSelection().clear();
        RTE.Cursor.get_range().clear();
        RTE.Cursor.cursorRangeIsNowOutdated();
      }
      c = RichTextBox_GetRichValueFromControl(a);
    }
    if (
      c != i &&
      (g ||
        (!RTE.Cursor.get_pasteInProgress() &&
          SP.UI.UIUtility.focusValidOnThisNode(document.activeElement)))
    ) {
      b.fBlank = false;
      e.SetValue(c);
      RichTextBox.AddEventLogEntry(a);
      b._boolDirty = true;
      ViewDataNode_OnControlChange(a);
      b.fBlank = false;
    }
  }
  LeafControl.OnChange(a);
}
function RichTextBox_GetRichValueFromDatum(b) {
  ULSrLq:;
  var a = b.GetValue();
  if (Util.GetDataType(a) == 3) return a[1];
  return a;
}
function RichTextBox_HandleInValidXml(b, f) {
  ULSrLq:;
  UserMessages.ShowAlertMessage(
    IntlCoreStrings.k_strInvalidCharacterInText,
    true
  );
  var d = ViewDataNode_GetViewDataNodeFromHtml(b),
    e = ViewDataNode_GetDatum(d),
    a = e.GetValue();
  if (Util.GetDataType(a) == 3) a = a[1];
  RichTextBox.SetRichValueOfControl(b, a);
  if (!f) {
    var c = RTE.Cursor.get_range().getEditableRegion();
    c != null &&
      RichTextBox_GetInfoPathControlFromNewRichTextControl(c) == b &&
      RTE.Cursor.get_range().clear();
  }
}
function RichTextBox_RemoveCursorSpans(a) {
  ULSrLq:;
  var b = a.replace(
    /(<span( id=(\"|)ms-rterangecursor([^-]*)-(end|start)(\"|)([^<]*)|)><\/span>|<span\/>)/gi,
    ""
  );
  return b;
}
RichTextBox.GetFormattedValue = RichTextBox_GetFormattedValue;
function RichTextBox_GetFormattedValue(c) {
  ULSrLq:;
  var b = ViewDataNode_GetDatum(c),
    a = null;
  if (!b.ModifiedOnClient()) {
    a = [];
    a.push(b.GetValue());
    a.push(c[1][0]);
  } else a = b.GetValue();
  return a;
}
function RichTextBox_IsBasicRichTextBox(a) {
  ULSrLq:;
  return a[6][2][0];
}
function RichTextBox_Has100PercentWidth(a) {
  ULSrLq:;
  return a[6][2][1];
}
RichTextBox.OnMouseOver = RichTextBox_OnMouseOver;
function RichTextBox_OnMouseOver(b, a) {
  ULSrLq:;
  LeafControl.OnMouseOver(b, a);
  Util_StopEventProprogation(a);
  return false;
}
RichTextBox.OnMouseOut = LeafControl.OnMouseOut;
RichTextBox.OnMouseDown = LeafControl.OnMouseDown;
RichTextBox.IsSelected = LeafControl.IsSelected;
RichTextBox.RestoreFocus = RichTextBox_RestoreFocus;
function RichTextBox_RestoreFocus(a) {
  ULSrLq:;
  if (a.fV4RTE) {
    var b = RichTextBox_GetNewRichTextControl(a);
    b.focus();
    SelectionService_Select(a);
  } else LeafControl.RestoreFocus(a);
}
RichTextBox.ShouldRenderReverseVisuals = LeafControl.ShouldRenderReverseVisuals;
RichTextBox.GetErrorMessageOffset = LeafControl.GetErrorMessageOffset;
RichTextBox.GetErrorMessageOffsetTop = LeafControl.GetErrorMessageOffsetTop;
RichTextBox.GetAsteriskOffsetNormal = RichTextBox_GetAsteriskOffsetNormal;
function RichTextBox_GetAsteriskOffsetNormal() {
  ULSrLq:;
  return 0;
}
RichTextBox.GetAsteriskOffsetTop = RichTextBox_GetAsteriskOffsetTop;
function RichTextBox_GetAsteriskOffsetTop() {
  ULSrLq:;
  return 0;
}
function RichTextBox_V4UI_Blur(a) {
  ULSrLq:;
  !a.fV4RTE && RichTextBox_OnChangeInternal(a, true, false);
}
function RichTextBox_V4UI_Focus(a) {
  ULSrLq:;
  if (!a.fNonIEBasicRT)
    if (!a.fV4RTE) LeafControl.OnFocus(a);
    else {
      RichTextBox_EnsureV4RTESelection(a);
      SelectionService_RememberFocus(a, null);
    }
}
function RichTextBox_V4UI_OnResize(a) {
  ULSrLq:;
  if (a == null) return;
  if (a.getAttribute("rendered") != "true") return;
  var g = ViewDataNode_GetViewDataNodeFromHtml(a),
    f = g._objViewDataNodeParent,
    b = document.getElementById(f[9]);
  if (b != null) {
    var c = "";
    if (UserAgentInfo.strBrowser == 1 && UserAgentInfo.intBrowserRmj < 8)
      c = a.currentStyle.minHeight;
    else c = a.offsetHeight + "px";
    b.style.minHeight = c;
  }
  var d = RichTextBox_GetNewRichTextControl(a);
  if (d != null) {
    var h = RichTextBox_ResizeHostedControlsBasedOnBorder(b),
      e = a.offsetWidth - h[0] - (a.offsetWidth - a.clientWidth);
    if (e > 0) d.style.width = e + "px";
  }
}
function RichTextBox_V4UI_Click(a, b) {
  ULSrLq:;
  !a.fV4RTE && !a.fNonIEBasicRT && RichTextBox.OnClick(a, b);
}
function RichTextBox_IsV4RTESelected() {
  ULSrLq:;
  var a = SelectionService_GetSelectedControl();
  if (a != null && a.id.indexOf("RTI") != -1)
    return RichTextBox_GetLeafControlFromSelectedRTE(a).fV4RTE;
  return false;
}
function RichTextBox_EnsureV4RTESelection(b) {
  ULSrLq:;
  var a = BaseControl_GetParentInfoPathControl(b);
  !SelectionService_IsSelected(a) && SelectionService_Select(a);
}
function RichTextBox_GetLeafControlFromSelectedRTE(a) {
  ULSrLq:;
  var c = ViewDataNode_GetViewDataNodeFromHtml(a),
    d = a;
  if (!LeafControl_IsLeafControl(a)) {
    var b = ViewDataNode_GetChildNodes(c)[0];
    if (b == null && a.getAttribute("ScriptClass") == "RichTextBox") b = c;
    d = document.getElementById(b[9]);
  }
  return d;
}
function RichTextBox_BlurV4Control(b, a) {
  ULSrLq:;
  if (b.getAttribute("rendered") == "true") {
    var c = RichTextBox_GetNewRichTextControl(b);
    if (c != null) {
      a = c;
      RichTextBox_OnChangeInternal(b, false, true);
      try {
        a.blur();
      } catch (d) {}
    }
  }
  return a;
}
function RichTextBox_V4UI_RTECanvasBlur(c, b) {
  ULSrLq:;
  if (b != null && b.oldEditableRegion != null) {
    var a = RichTextBox_GetInfoPathControlFromNewRichTextControl(
      b.oldEditableRegion
    );
    a != null &&
      a.getAttribute("rendered") == "true" &&
      RichTextBox_OnChangeInternal(a, true, false);
  }
}
function RichTextBox_ResizeHostedControlsBasedOnBorder(a) {
  ULSrLq:;
  var f = LeafControl_GetBorderTop(a),
    c = LeafControl_GetBorderBottom(a),
    d = LeafControl_GetBorderRight(a),
    e = LeafControl_GetBorderLeft(a),
    b = new Array(2);
  b[0] = d + e;
  b[1] = f + c;
  return b;
}
function RichTextBox_V4UI_RTECanvasFocus(c, b) {
  ULSrLq:;
  if (b != null && b.newEditableRegion != null) {
    var a = RichTextBox_GetInfoPathControlFromNewRichTextControl(
      b.newEditableRegion
    );
    if (a != null && a.getAttribute("rendered") == "true")
      !a.fNonIEBasicRT && RichTextBox_EnsureV4RTESelection(a);
  }
}
function RichTextBox_CreateV4Control(x) {
  ULSrLq:;
  var a = document.getElementById(x),
    d = ViewDataNode_GetViewDataNodeFromHtml(a),
    z = d.FormId,
    y = View.GetTemplateType(z),
    l = d._objViewDataNodeParent,
    c = document.getElementById(l[9]),
    o = ViewDataNode_GetDatum(d),
    k = l._objViewDataNodeParent,
    h = document.getElementById(k[9]),
    n = Snippet_GetSnippetElementFromHtml(a),
    b = RichTextBox_GetNewRichTextControl(a);
  b.UseInlineStyle = "True";
  var q = "";
  if (o.ModifiedOnClient()) q = RichTextBox_GetRichValueFromDatum(o);
  else q = d[1][0];
  b.innerHTML = RichTextBox_NormalizeValue(a.fV4RTE, q);
  o._strValue = b.innerHTML;
  if (y != 1) {
    var w = SelectionService_IsSelected(a),
      v = b.id;
    RichTextBox_RunWhenV4RTEIsReady(function () {
      ULSrLq:;
      RichTextBox_PrepareV4ControlForEditing(v, w);
    });
  } else {
    h.style.overflowX = "hidden";
    ViewDataNode_Disable(d);
  }
  b.setAttribute("FormId", a.getAttribute("FormId"));
  b.fV4RTE = true;
  a.tabIndex = -1;
  var k = l._objViewDataNodeParent,
    u = k.SnippetElement,
    p = StructuralEditingControl_GetTitle(u);
  if (p != null) {
    a.title = p;
    b.title = p;
  }
  c.setAttribute("RteRedirect", b.id);
  a.setAttribute("RteRedirect", b.id);
  var m = document.getElementById(b.id.replace("_RT1_newRichText", "_Widget"));
  m != null && m.parentNode.removeChild(m);
  var e = document.getElementById(a.id + "_plainText");
  e != null && e.parentNode.removeChild(e);
  RichTextBox_ComputeAndAssignCSSClasses(d, n, a);
  RichTextBox_V4MoveErrorVisuals(a.id);
  c.style.padding = "0px";
  c.style.margin = "0px";
  a.style.border = "0px";
  var t = RichTextBox_ResizeHostedControlsBasedOnBorder(c),
    j = null,
    f = null;
  if (UserAgentInfo.strBrowser == 1) j = a.offsetWidth;
  else j = c.offsetWidth;
  if (j > 0) f = j - t[0] + "px";
  else f = "0px";
  var i = null,
    g = null;
  if (UserAgentInfo.strBrowser == 1 && UserAgentInfo.intBrowserRmj < 8)
    i = c.offsetHeight;
  else i = a.offsetHeight;
  if (i > 0) g = i - t[1] + "px";
  else g = "0px";
  b.style.minHeight = g;
  var s = LeafControl_ParseLength(f) - (a.offsetWidth - a.clientWidth);
  if (s > 0) b.style.width = s + "px";
  else b.style.width = f;
  a.style.width = f;
  a.style.minHeight = g;
  c.style.minHeight = g;
  if (UserAgentInfo.strBrowser == 1 && UserAgentInfo.intBrowserRmj < 8) {
    if (!RichTextBox_Has100PercentWidth(n)) {
      h.style.display = "inline";
      c.style.display = "inline";
    }
    var r = c.childNodes(0);
    if (r.tagName.toLowerCase() == "fieldset") r.style.width = f;
    a.style.border = "0px";
    c.style.width = a.offsetWidth + "px";
    h.style.display = "inline";
    c.style.display = "inline";
  } else if (
    (UserAgentInfo.strBrowser == 1 && c.currentStyle.width != "100%") ||
    !RichTextBox_Has100PercentWidth(n)
  )
    h.style.display = "inline-block";
  var e = document.getElementById(a.id + "_plainText");
  e != null && e.parentNode.removeChild(e);
  ViewDataNode_IsHidden(d) && ViewDataNode_SetHidden(k, true);
  BaseControl_RefreshVisualState(a);
  a.setAttribute("rendered", "true");
}
function RichTextBox_CreateV3Control(strControlId) {
  ULSrLq:;
  var objControl = document.getElementById(strControlId),
    objViewDataNode = ViewDataNode_GetViewDataNodeFromHtml(objControl),
    strFormId = objViewDataNode.FormId,
    templateType = View.GetTemplateType(strFormId),
    objParentViewDataNode = objViewDataNode._objViewDataNodeParent,
    objParentControl = document.getElementById(objParentViewDataNode[9]),
    objDatum = ViewDataNode_GetDatum(objViewDataNode),
    objServerFormattedValue = RichTextBox_GetFormattedValue(objViewDataNode),
    objCollectionViewDataNode = objParentViewDataNode._objViewDataNodeParent,
    objCollectionControl = document.getElementById(
      objCollectionViewDataNode[9]
    ),
    objServerUnFormattedValue = objDatum.GetValue(),
    objSnippetElement = Snippet_GetSnippetElementFromHtml(objControl);
  if (Util.GetDataType(objServerFormattedValue) == 3)
    objServerFormattedValue = objServerFormattedValue[1];
  if (UserAgentInfo.strBrowser == 1) {
    var offsetHeight = 0,
      offsetWidth = 0,
      globalFormData = GlobalFormData.Get(strFormId);
    globalFormData.v3RichTextControlOnFormInIE = true;
    var objFocusedControl = SelectionService_GetSelectedControl();
    objFocusedControl == objControl && objFocusedControl.blur();
    var fHidden = ViewDataNode_IsHidden(objViewDataNode);
    RichTextBox_ComputeAndAssignCSSClasses(
      objViewDataNode,
      objSnippetElement,
      objControl
    );
    offsetHeight = objControl.currentStyle.height;
    offsetWidth = objControl.currentStyle.width;
    var arrBorderSizes = RichTextBox_ResizeHostedControlsBasedOnBorder(
      objControl
    );
    if (offsetHeight == "auto") offsetHeight = objControl.offsetHeight + "px";
    if (CurrentFormData_IsV4UI(strFormId) && offsetWidth.indexOf("%") == -1)
      offsetWidth =
        LeafControl_ParseLength(offsetWidth) - arrBorderSizes[0] + "px";
    var strOverflowY = objControl.currentStyle.overflowY,
      strOverflowX = objControl.currentStyle.overflowX,
      strRichTextId = objControl.id + "_plainText",
      iPixelPerLine = g_iLineHeight,
      iminSize = offsetHeight / iPixelPerLine;
    if (Util_GetDataType(offsetHeight) != 1) {
      var strHeight = LeafControl.ParseLength(Expr.String(offsetHeight));
      iminSize = Expr.Number(strHeight) / iPixelPerLine;
    }
    var fDynamicHeightSizing =
        strOverflowY != "scroll" &&
        strOverflowY != "auto" &&
        strOverflowY != "hidden",
      fDynamicWidthSizing = objControl.currentStyle.width == "auto";
    if (CurrentFormData_IsListItemMode(strFormId) && templateType == 1)
      fDynamicHeightSizing = true;
    var strDirection = objControl.currentStyle.direction,
      strLcid = CurrentFormData_LanguageLcid(strFormId);
    L_Language_Text = strLcid;
    g_fRTEFirstTimeGenerateCalled = RichTextBox.NeedToCreateDropDown();
    var strMode = "FullHtml",
      fBasic = RichTextBox_IsBasicRichTextBox(objSnippetElement);
    if (fBasic) strMode = "Compatible";
    RTE_ConvertTextAreaToRichEdit(
      strRichTextId,
      fBasic,
      !fBasic,
      strDirection,
      strLcid,
      false,
      true,
      fDynamicHeightSizing,
      Number.MAX_VALUE,
      iminSize,
      strMode,
      CurrentFormData.GetWebUrl(objControl.getAttribute("FormId")),
      null,
      null,
      null,
      null,
      fDynamicWidthSizing,
      Number.MAX_VALUE,
      0,
      false,
      false,
      false,
      false
    );
    RichTextBox.SetRichValueOfControl(objControl, objServerFormattedValue);
    var objDocument = RTE_GetEditorDocument(strRichTextId),
      objDropdownMenu = RTE_DD_GetMenuElement(),
      ifmContainer = RTE_GetEditorElement(strRichTextId);
    if (objDropdownMenu != null) {
      objDropdownMenu.onactivate = RichTextBox.DropDownActivate;
      objDropdownMenu.ondeactivate = RichTextBox.DropDownDeactivate;
    }
    var iStyleSheets = 0;
    for (
      iStyleSheets;
      iStyleSheets < document.styleSheets.length;
      iStyleSheets++
    )
      document.styleSheets[iStyleSheets].href.indexOf("FormResource.aspx") !=
        -1 &&
        objDocument.styleSheets[0].addImport(
          document.styleSheets[iStyleSheets].href
        );
    for (
      var objErrorHtmlControl = null, iChild = 0;
      iChild < objControl.childNodes.length;
      iChild++
    )
      if (objControl.childNodes[iChild].tagName.toLowerCase() == "div") {
        objErrorHtmlControl = objControl.childNodes[iChild];
        break;
      }
    RichTextBox_MoveErrorVisuals(objErrorHtmlControl, objControl.id);
    RichTextBox.MoveStyles(objControl);
    objDocument.body.onresize = new Function(
      'RichTextBox_OnResize("' + objControl.id + '")'
    );
    objDocument.body.ondrop = function () {
      ULSrLq:;
      BaseControl_OnDrop(null);
      objDocument.body.setActive();
    };
    objDocument.body.onkeypress = function () {
      ULSrLq:;
      RichTextBox.OnKeyPress(objControl.id);
    };
    objDocument.body.className = objControl.className;
    objDocument.body.style.fontFamily = objControl.currentStyle.fontFamily;
    objDocument.body.style.fontSize = objControl.currentStyle.fontSize;
    objDocument.body.backgroundColor = objControl.currentStyle.backgroundColor;
    RichTextBox.FixLayoutGrid(objControl, objDocument);
    if (objControl.currentStyle.overflowY != "hidden")
      objDocument.body.style.overflowY = objControl.currentStyle.overflowY;
    objDocument.body.style.textAlign = objControl.currentStyle.textAlign;
    objDocument.body.style.overflow = "visible";
    objControl.parentNode.parentNode.parentNode.parentNode.style.overflowY =
      "visible";
    objDocument.body.style.lineHeight = objControl.currentStyle.lineHeight;
    objDocument.body.accessKey = objControl.accessKey;
    ifmContainer.tabIndex = objControl.tabIndex;
    objDocument.body.title = objControl.title;
    objControl.accessKey = "";
    objControl.tabIndex = "-1";
    objControl.style.overflowY = "visible";
    objControl.style.overflowX = "visible";
    if (strOverflowY == "hidden") objParentControl.style.overflowY = "visible";
    var objDocumentFrame = document.getElementById(
      RTE_GetEditorIFrameID(strRichTextId)
    );
    objDocumentFrame.allowTransparency = true;
    if (objControl.currentStyle.width.indexOf("%") != -1)
      ifmContainer.style.width = objControl.currentStyle.width;
    else ifmContainer.style.width = offsetWidth;
    if (objControl.currentStyle.height.indexOf("%") != -1)
      ifmContainer.style.height = objControl.currentStyle.height;
    else if (CurrentFormData_IsV4UI(strFormId))
      ifmContainer.style.height =
        LeafControl_ParseLength(offsetHeight) - arrBorderSizes[1] + "px";
    else ifmContainer.style.height = objControl.currentStyle.height;
    objParentControl.style.display = "inline-block";
    if (templateType == 1) {
      objCollectionControl.style.display = "inline-block";
      objCollectionControl.style.width = offsetWidth;
    } else if (
      UserAgentInfo.strBrowser == 1 &&
      UserAgentInfo.intBrowserRmj < 8
    ) {
      var objFieldSet = objParentControl.childNodes(0);
      if (objFieldSet.tagName.toLowerCase() == "fieldset")
        objFieldSet.style.width = offsetWidth;
      objCollectionControl.style.display = "inline";
      objParentControl.style.display = "inline";
      objControl.style.display = "inline-block";
    } else objCollectionControl.display = "inline-block";
    objCollectionControl.setAttribute("rendered", "true");
    var objParentViewDataNode = objViewDataNode._objViewDataNodeParent,
      objParentControl = document.getElementById(objParentViewDataNode[9]);
    if (objParentControl != null) {
      objDocumentFrame.style.border = "0px";
      objParentControl.style.borderWidth = "0px";
      objParentControl.style.padding = "0px";
    }
    fDynamicHeightSizing &&
      window.setTimeout(
        'try{RTE_DocEditor_AdjustHeight("' +
          strRichTextId +
          '");RichTextBox_IPFSAdjustHeight("' +
          strRichTextId +
          '", "' +
          objCollectionControl.id +
          '");}catch(exception){Undefined(exception);}',
        1
      );
    if (fDynamicWidthSizing)
      try {
        RTE_DocEditor_AdjustWidth(objControl.id + "_plainText");
      } catch (exception) {}
    if (templateType != 1) {
      ifmContainer.onactivate = function () {
        ULSrLq:;
        var objViewDataNode = ViewDataNode_GetViewDataNodeFromHtml(objControl),
          strControlId = objControl.id + "_plainText";
        if (
          ViewDataNode_IsHidden(objViewDataNode) ||
          ViewDataNode_IsDisabled(objViewDataNode)
        )
          return;
        HoverMenu.HideMenu();
        IP_DatePicker.Close != null && IP_DatePicker.Close(strFormId);
        var objEditorDoc = RTE_GetEditorDocument(objControl.id + "_plainText");
        if (ifmContainer.onfocus != null) ifmContainer.onfocus = null;
        if (ifmContainer.onblur != null) ifmContainer.onblur = null;
        if (!objEditorDoc.body.disabled) {
          var edToolbar = document.getElementById(strControlId + "_toolbar");
          if (edToolbar == null) {
            var objPlainTextControl = document.getElementById(strRichTextId),
              arrSettings = RTE_GetEditorInstanceVariables(strControlId),
              strToolBarHtml = RTE_GenerateToolBarHtmlFromSettings(
                strControlId,
                strLcid,
                objPlainTextControl,
                arrSettings.aSettings
              ),
              objEditorFrame = document.getElementById(
                RTE_GetEditorIFrameID(strControlId)
              );
            objEditorFrame.parentElement.insertAdjacentHTML(
              "beforeBegin",
              strToolBarHtml
            );
            RTE_ToolBarMnemonicInitialization(strControlId);
            edToolbar = document.getElementById(strControlId + "_toolbar");
            RTE_DisableToolBar(strControlId);
          }
          var objEditorDoc = RTE_GetEditorDocument(strControlId);
          objEditorDoc.selection.createRange();
          RTE_OnFocus(strControlId);
          RTE_GiveEditorFocus(strControlId);
          var objEvent = eval("window.event");
          LeafControl.OnFocus(objControl, objEvent);
          window.setTimeout(
            'SelectionService.SelectId("' + objControl.id + '")',
            1
          );
          objControl.backUpData = objEditorDoc.body.innerHTML;
          if (objEditorDoc.body.onselectstart == null) {
            RTE_EventHookUp(strControlId);
            objEditorDoc.body.onkeydown = function () {
              ULSrLq:;
              RichTextBox.OnKeyDown(objControl.id);
            };
            objEditorDoc.body.onmouseup = function () {
              ULSrLq:;
              RichTextBox.OnMouseUp(objControl.id);
            };
            objEditorDoc.body.onblur = function () {
              ULSrLq:;
              RichTextBox.OnBlur(objControl.id);
            };
          }
          var objTextControl = document.getElementById(
            objControl.id + "_plainText"
          );
          RichTextBox.CheckDropDown();
          var objToolBar = RTE_GetEditorToolBar(strControlId);
          if (objToolBar.style.position != "absolute") {
            objToolBar.parentNode.style.textAlign =
              objToolBar.currentStyle.textAlign;
            objToolBar.style.position = "absolute";
            objToolBar.style.top = -objToolBar.offsetHeight;
            objToolBar.style.zIndex = "50";
            if (strDirection == "rtl")
              objToolBar.style.left = objToolBar.offsetLeft;
          }
          objToolBar.style.display = "";
          var objDropDownFrame = document.getElementById(
            g_strRTETextEditorPullDownMenuID
          );
          objToolBar.parentNode.appendChild(
            objDropDownFrame.parentNode.removeChild(objDropDownFrame)
          );
          var objOffset;
          if (objToolBar.offsetParent == objControl) {
            var intTopBorderWidth = LeafControl_ParseLength(
              objControl.currentStyle.borderTopWidth
            );
            if (intTopBorderWidth == null) intTopBorderWidth = 0;
            objOffset = { top: -intTopBorderWidth, left: 0 };
          } else
            objOffset = ErrorVisualization_ComputeAbsolutePosition(objControl);
          if (objToolBar.offsetTop != objOffset.top - objToolBar.offsetHeight)
            objToolBar.style.top = objOffset.top - objToolBar.offsetHeight;
          if (objToolBar.offsetLeft != objOffset.left)
            objToolBar.style.left = objOffset.left;
          ErrorVisualization_HideShortMessage(objControl, objViewDataNode);
          objControl._disableShortMessage = true;
        }
      };
      objControl.ondeactivate = function () {
        ULSrLq:;
        RichTextBox.CheckDropDown();
        var objEditorDoc = RTE_GetEditorDocument(objControl.id + "_plainText");
        RichTextBox.OnBlur(objControl.id);
        var objToolBar = document.getElementById(strRichTextId + "_toolbar");
        objToolBar != null && RTE_OnBlur(strRichTextId);
        var objEditorElement = RTE_GetEditorElement(strRichTextId);
        objEditorElement.blur();
        if (objToolBar != null) objToolBar.style.display = "none";
        if (RTE_DD_MenuIsOpen()) {
          var strOpenToolBarId = g_strRTEDDBaseElementID,
            objToolBar = RTE_GetEditorToolBar(strOpenToolBarId);
          objToolBar.style.display = "none";
        }
        if (
          objControl.backUpData != null &&
          objControl.backUpData != objEditorDoc.body.innerHTML
        ) {
          var objEvent = eval("window.event");
          if (
            objEvent != null &&
            objEvent.toElement != null &&
            objEvent.toElement.id == g_strRTETextEditorPullDownMenuID
          )
            return;
          var strValue = objEditorDoc.body.innerHTML;
          if (!Util_IsValidXmlString(strValue)) {
            UserMessages.ShowAlertMessage(
              IntlCoreStrings.k_strInvalidCharacterInText,
              true
            );
            var strOldValue = objDatum.GetValue();
            if (Util.GetDataType(strOldValue) == 3)
              strOldValue = strOldValue[1];
            objEditorDoc.body.innerHTML = strOldValue;
            objEditorDoc.body.setActive();
          } else {
            objDatum.SetValue(strValue);
            RichTextBox.AddEventLogEntry(objControl);
            objViewDataNode._boolDirty = true;
            ViewDataNode_OnControlChange(objControl);
            RichTextBox.SetRichValueOfControl(objControl, strValue);
          }
        }
        objControl.backUpData = null;
        objEditorDoc.body.getAttribute(g_strRTEUseDynamicHeightSizing) ==
          "true" && RTE_DocEditor_AdjustHeight(strRichTextId);
        objEditorDoc.body.getAttribute(g_strRTEUseDynamicWidthSizing) ==
          "true" && RTE_DocEditor_AdjustWidth(strRichTextId);
        BaseControl.RefreshVisualState(objControl);
        objControl._disableShortMessage = false;
      };
    }
    objDocument.body.onclick = function () {
      ULSrLq:;
      var objEvent = eval("objDocument.parentWindow.event");
      if (objEvent != null) {
        var objElement = objEvent.srcElement;
        while (
          objElement != null &&
          objElement != document.body &&
          objElement.tagName != null
        )
          if (objElement.tagName.toLowerCase() == "a") {
            open(objElement.href);
            break;
          } else objElement = objElement.parentNode;
      }
      Util.StopEventProprogation(objEvent);
      return false;
    };
    if (CurrentFormData_IsListItemMode(strFormId))
      ifmContainer.style.borderStyle = "none";
    objFocusedControl && SelectionService._Select(objFocusedControl, true);
    var objNewRichTextBox = RichTextBox_GetNewRichTextControl(objControl);
    objNewRichTextBox != null &&
      objNewRichTextBox.parentNode.removeChild(objNewRichTextBox);
    (templateType == 1 || ViewDataNode_IsDisabled(objViewDataNode)) &&
      ViewDataNode_Disable(objViewDataNode);
    if (UserAgentInfo.intBrowserRmj < 8)
      objControl.style.width = objParentControl.offsetWidth + "px";
    ViewDataNode_IsHidden(objViewDataNode) &&
      ViewDataNode_SetHidden(objCollectionViewDataNode, true);
    BaseControl_RefreshVisualState(objControl);
    objControl.setAttribute("rendered", "true");
  } else if (UserAgentInfo.strBrowser != 1) {
    BaseControl.RefreshVisualState(objControl);
    var objRichTextDataSpan = RichTextBox_GetDisplayControl(objControl);
    objRichTextDataSpan.setAttribute("FormId", strFormId);
    objParentControl.style.width = objControl.offsetWidth;
    objParentControl.style.padding = "0px";
    objParentControl.style.margin = "0px";
    objControl.style.border = "0px";
    objControl.style.width = objControl.offsetWidth - 3;
    objRichTextDataSpan.style.width = objControl.offsetWidth - 3;
    if (!RichTextBox_Has100PercentWidth(objSnippetElement))
      objCollectionControl.style.display = "inline-block";
    objRichTextDataSpan.contentEditable = false;
    objRichTextDataSpan.fNonIEBasicRT = true;
    objControl.fNonIEBasicRT = true;
    var objPlainText = document.getElementById(objControl.id + "_plainText"),
      strPlainText = objServerUnFormattedValue.replace(/&lt;/g, "<");
    strPlainText = strPlainText.replace(/&gt;/g, ">");
    var objPlainText = document.getElementById(objControl.id + "_plainText");
    objPlainText.parentNode.removeChild(objPlainText);
    objControl.parentNode.appendChild(objPlainText);
    if (templateType != 1) {
      RichTextBox.SetRichValueOfControl(
        objRichTextDataSpan,
        objServerFormattedValue
      );
      objPlainText.innerHTML = strPlainText;
    } else {
      objControl.innerHTML = objServerFormattedValue;
      if (CurrentFormData_IsListItemMode(strFormId))
        objControl.style.minHeight = objControl.scrollHeight + "px";
      objCollectionControl.style.overflowX = "hidden";
    }
    if (!ViewDataNode_IsValid(objViewDataNode))
      ViewDataNode_IsBlank(objViewDataNode) &&
        ErrorVisualization_ShowAsterisk(objControl, objViewDataNode);
    ViewDataNode_IsHidden(objViewDataNode) &&
      ViewDataNode_SetHidden(objCollectionViewDataNode, true);
  }
}
RichTextBox.GetControlForSelectText = RichTextBox_GetControlForSelectText;
function RichTextBox_GetControlForSelectText(a) {
  ULSrLq:;
  if (a.fV4RTE) return RichTextBox_GetNewRichTextControl(a);
  else {
    var b = RTE_GetEditorDocument(a.id + "_plainText");
    return b.body;
  }
}
RichTextBox.SelectTextOnControl = RichTextBox_SelectTextOnControl;
function RichTextBox_SelectTextOnControl(b) {
  ULSrLq:;
  if (UserAgentInfo.strBrowser == 1) {
    var a = null;
    if (b.tagName.toLowerCase() == "body") a = b.createTextRange();
    else a = document.body.createTextRange();
    a.moveToElementText(b);
    a.select();
  } else {
    a = document.createRange();
    a.selectNode(b);
    window.getSelection().addRange(a);
  }
}
function RichTextBox_OnRteComponentAvailable(a) {
  ULSrLq:;
  var d = document.getElementById(a),
    c = ViewDataNode_GetViewDataNodeFromHtml(d),
    e = c.FormId,
    b = RichTextBox_RenderV4Control(c, e);
  d.fV4RTE = b;
  if (b) RichTextBox_CreateV4Control(a);
  else RichTextBox_CreateV3Control(a);
}
function RichTextBox_OnResize(e) {
  ULSrLq:;
  ErrorVisualization_UpdateAllAsterisks();
  for (
    var c = document.getElementsByTagName("IFRAME"), g = c.length, b = 0;
    b < g;
    b++
  ) {
    var a = c[b];
    if (a.id.indexOf("_RT1_plainText_iframe") != -1) {
      a.height = a.offsetHeight - 1;
      a.height = a.height + 1;
    }
  }
  var d = document.getElementById(e),
    f = d.getAttribute("FormId");
  CurrentFormData_IsV4UI(f) && RichTextBox_V4UI_OnResize(d);
}
function RichTextBox_RunWhenV4RTEIsReady(b) {
  ULSrLq:;
  var a = "undefined";
  try {
    a = typeof RTE.Canvas;
  } catch (c) {}
  EnsureScript("SP.UI.Rte.js", a, b);
}
function RichTextBox_ComputeAndAssignCSSClasses(a, b, d) {
  ULSrLq:;
  var c = BaseControl_ComputeCssClasses(
    a,
    b[3],
    ViewDataNode_IsValid(a) ? 0 : 3,
    false
  );
  d.className = c;
}
RichTextBox.IsBlank = RichTextBox_IsBlank;
function RichTextBox_IsBlank(a) {
  ULSrLq:;
  return ViewDataNode_IsBlank(a) || a.fBlank;
}
RichTextBox.RichTextCommandsProvider = RichTextBox_RichTextCommandsProvider;
function RichTextBox_RichTextCommandsProvider() {}
RichTextBox.IsRenderingErrorVisualizationSpansItself = RichTextBox_IsRenderingErrorVisualizationSpansItself;
function RichTextBox_IsRenderingErrorVisualizationSpansItself() {
  ULSrLq:;
  return true;
}
function RichTextBox_CleanupContainer(m) {
  ULSrLq:;
  for (var g = ViewDataNode_GetChildNodes(m), b = 0; b < g.length; b++) {
    var a = g[b],
      e = a.SnippetElement,
      k = e[2],
      h = e[5];
    if (k == "RichTextCollection") {
      var j = ViewDataNode_GetChildNodes(a),
        i = ViewDataNode_GetChildNodes(j[0]),
        l = i[0],
        f = RTE_GetEditorIFrame(l[9] + "_plainText");
      f != null && View_CleanupRichTextIFrame(f.frameElement);
    } else if (h == 4 || h == 7)
      for (var d = ViewDataNode_GetChildNodes(a), c = 0; c < d.length; c++)
        RichTextBox_CleanupContainer(d[c]);
  }
}
var FileAttachment_k_strRenderModeNormal = "Normal";
function FileAttachment() {}
FileAttachment.GetValueFromControl = FileAttachment_GetValueFromControl;
function FileAttachment_GetValueFromControl() {
  ULSrLq:;
  return null;
}
function FileAttachment_IsNormalRendering(a) {
  ULSrLq:;
  var b = a[1][2][0],
    c = a.FormId;
  if (
    b == FileAttachment_k_strRenderModeNormal &&
    CurrentFormData_IsFileAttachmentPresent(c)
  )
    return true;
  return false;
}
function FileAttachment_IsAttachAllowed(a) {
  ULSrLq:;
  if (
    FileAttachment_IsNormalRendering(a) == false ||
    a[1][2][1] == false ||
    a[1][5]
  )
    return false;
  return true;
}
function FileAttachment_IsDownloadAllowed(a) {
  ULSrLq:;
  if (FileAttachment_IsNormalRendering(a) == false || a[1][2][2] == false)
    return false;
  return FileAttachment_GetHasAttachment(a) == true;
}
function FileAttachment_IsRemoveAllowed(a) {
  ULSrLq:;
  if (
    FileAttachment_IsNormalRendering(a) == false ||
    a[1][2][3] == false ||
    a[1][5]
  )
    return false;
  return FileAttachment_GetHasAttachment(a) == true;
}
function FileAttachment_GetHasAttachment(a) {
  ULSrLq:;
  return a[1][2][4];
}
function FileAttachment_GetFileName(a) {
  ULSrLq:;
  return a[1][2][5];
}
function FileAttachment_GetFileSizeText(a) {
  ULSrLq:;
  return a[1][2][6];
}
function FileAttachment_IsUnsafeExtension(a) {
  ULSrLq:;
  return a[1][2][7];
}
function FileAttachment_GetStyle(b) {
  ULSrLq:;
  var a = b[6][2][0];
  if (a == null) a = "";
  return a;
}
function FileAttachment_GetBackgroundColor(b) {
  ULSrLq:;
  var a = b[6][2][1];
  if (a == null) a = "";
  return a;
}
function FileAttachment_GetSrc(b) {
  ULSrLq:;
  var a = b.FormId;
  return (
    CurrentFormData_SiteUrl(a) +
    "/_layouts/FormServerAttachments.aspx?dl=fa&fid=" +
    encodeURIComponent(a) +
    "&sid=" +
    encodeURIComponent(CurrentFormData.SolutionId(a)) +
    "&key=" +
    encodeURIComponent(b[1][2][8])
  );
}
FileAttachment.AddEventLogEntry = function () {
  ULSrLq:;
  return;
};
function FileAttachment_InvokeAttach(d, h) {
  ULSrLq:;
  var b = document.getElementById(d),
    c = b.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(c) != 1
    )
  )
    return;
  SelectionService_RememberFocus(b, h);
  var g = ViewDataNode_GetViewDataNodeFromHtml(b);
  if (FileAttachment_IsAttachAllowed(g) == false) return true;
  Dialog.funcCallbackOnClose = null;
  var a = [];
  a[1] = IntlCoreStrings.k_strFileAttachmentDialogTitle;
  a[3] = CurrentFormData_Direction(c);
  a[5] = Dialog_TextAlignmentStyle();
  var f = [
      0,
      IntlCoreStrings.k_strUploadButtonText,
      "Dialog_FileAttachmentServerRequest();Util_StopEventProprogation(event);return false;",
      "",
      "submit",
    ],
    e = [
      1,
      IntlCoreStrings.k_strCancelButtonText,
      "Dialog_OnTerminateButton();Util_StopEventProprogation(event);return false;",
      "",
      "button",
    ];
  a[2] = [f, e];
  a[11] = IntlCoreStrings.k_strFileAttachmentDialogMessage;
  a[12] = IntlCoreStrings.k_strFileAttachmentDialogExample;
  return Dialog_ShowModalDialogEx(c, "FileAttachment", 1, 1, false, a, b);
}
function FileAttachment_InvokeDownload(d) {
  ULSrLq:;
  var b = document.getElementById(d),
    f = b.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(f) != 1
    )
  )
    return true;
  var a = ViewDataNode_GetViewDataNodeFromHtml(b);
  if (FileAttachment_IsDownloadAllowed(a) == false) return true;
  if (StructuralEditingControl_IsIdCreatedClientSide(b.id)) {
    UserMessages_ShowAlertMessage(
      IntlCoreStrings.k_strFileAttachmentPromptForRefresh,
      true
    );
    return true;
  } else if (FileAttachment_IsUnsafeExtension(a)) {
    UserMessages_ShowAlertMessage(IntlCoreStrings.k_strBlockedFileType, true);
    return true;
  } else {
    var e = UserMessages_ShowConfirmMessage(
      IntlCoreStrings.k_strFileAttachmentDownloadPrompt,
      true
    );
    if (e) {
      var c = FileAttachment_GetSrc(a);
      if (typeof window.open != "undefined") window.open(c);
      else Util_Navigate(c);
      return false;
    }
  }
}
function FileAttachment_InvokeRemove(c) {
  ULSrLq:;
  var a = document.getElementById(c),
    b = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(b) != 1
    )
  )
    return;
  var d = ViewDataNode_GetViewDataNodeFromHtml(a);
  if (FileAttachment_IsRemoveAllowed(d) == false) return true;
  var e = UserMessages_ShowConfirmMessage(
    IntlCoreStrings.k_strFileAttachmentPromptRemoveFile,
    true
  );
  e &&
    EventLog_Add(
      b,
      0,
      a,
      BaseControl_GetOriginalId(a),
      "0",
      "",
      true,
      false,
      false,
      0,
      1
    );
  return true;
}
FileAttachment.OnClick = FileAttachment_OnClick;
function FileAttachment_OnClick(a, b) {
  ULSrLq:;
  var c = ViewDataNode_GetViewDataNodeFromHtml(a);
  LeafControl.OnClick(a, b);
  FileAttachment_GetHasAttachment(c) == false &&
    FileAttachment_InvokeAttach(a.id, b);
}
FileAttachment.OnDblClick = FileAttachment_OnDblClick;
function FileAttachment_OnDblClick(a) {
  ULSrLq:;
  FileAttachment_InvokeDownload(a.id);
}
FileAttachment.OnKeyDown = FileAttachment_OnKeyDown;
function FileAttachment_OnKeyDown(a, c) {
  ULSrLq:;
  var e = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(e) != 1
    )
  )
    return true;
  var b = KeyboardService_GetVirtualKey(c);
  if (b == 1 || b == 18) {
    var d = ViewDataNode_GetViewDataNodeFromHtml(a);
    if (FileAttachment_GetHasAttachment(d) == true)
      FileAttachment_InvokeDownload(a.id);
    else FileAttachment_InvokeAttach(a.id, c);
  } else b == 19 && FileAttachment_InvokeRemove(a.id);
  return LeafControl.OnKeyPress(a, c);
}
function FileAttachment_ImageSpanStyle(b) {
  ULSrLq:;
  var a = FileAttachment_GetHasAttachment(b);
  if (a) return "border-width:0px;margin-top:0px;margin-left: -65px;";
  else return "border-width:0px;margin-top:-10px;margin-left: -76px;";
}
function FileAttachment_IconDivStyle(b) {
  ULSrLq:;
  var a = FileAttachment_GetHasAttachment(b);
  if (a)
    return "width: 11px; display: inline-block; height: 30px; overflow: hidden; direction: ltr;";
  else
    return "width: 7px; display: inline-block; height: 10px; overflow: hidden; direction: ltr;";
}
function FileAttachment_FileNameInformation(a) {
  ULSrLq:;
  var b = FileAttachment_GetHasAttachment(a);
  if (b)
    return (
      Util_HtmlEncode(FileAttachment_GetFileName(a)) +
      " <br>" +
      FileAttachment_GetFileSizeText(a)
    );
  else if (View_IsPrintingTemplate(a))
    return IntlCoreStrings.k_strNoFileAttached;
  else return IntlCoreStrings.k_strClickHereToAttachFile;
}
FileAttachment.MoveStyles = FileAttachment_MoveStyles;
function FileAttachment_MoveStyles(a) {
  ULSrLq:;
  BaseControl_MoveStyles(a);
  FileAttachment_SetWrappingSpanWidthHelper(
    ViewDataNode_GetViewDataNodeFromHtml(a),
    a
  );
}
FileAttachment.OnAfterCreate = FileAttachment_OnAfterCreate;
function FileAttachment_OnAfterCreate(a) {
  ULSrLq:;
  if (!ViewDataNode_IsValid(a)) {
    var b = document.getElementById(a[9]);
    if (b == null) return;
    if (FileAttachment_IsBlank(a)) ErrorVisualization_ShowAsterisk(b, a);
    else BaseControl__ApplyCssClasses(b, 3);
  }
  FileAttachment_SetWrappingSpanWidth(a);
}
function FileAttachment_ShouldFixWrappingSpanWidth(b) {
  ULSrLq:;
  var a = b.FormId;
  return (
    UserAgentInfo.strBrowser == 1 &&
    View_GetDirection(a) == 2 &&
    (UserAgentInfo.intBrowserRmj < 8 || !CurrentFormData_IsV4UI(a))
  );
}
function FileAttachment_SetWrappingSpanWidth(a) {
  ULSrLq:;
  if (a != null)
    FileAttachment_ShouldFixWrappingSpanWidth(a) &&
      FileAttachment_SetWrappingSpanWidthHelper(
        a,
        document.getElementById(a[9])
      );
}
function FileAttachment_SetWrappingSpanWidthHelper(b, a) {
  ULSrLq:;
  if (b != null)
    if (a != null && FileAttachment_ShouldFixWrappingSpanWidth(b)) {
      var c = a.parentNode;
      c.style.width =
        a.clientWidth + FileAttachment_CalculateBorderWidth(a, b) + "px";
    }
}
function FileAttachment_CalculateBorderWidth(b, a) {
  ULSrLq:;
  var c;
  if (ViewDataNode_IsValid(a) || !FileAttachment_GetHasAttachment(a)) {
    if (Util_IsNullOrUndefined(a.intNormalBorderSize))
      a.intNormalBorderSize =
        LeafControl_GetBorderLeft(b) + LeafControl_GetBorderRight(b);
    c = a.intNormalBorderSize;
  } else {
    if (Util_IsNullOrUndefined(a.intErrorBorderSize))
      a.intErrorBorderSize =
        LeafControl_GetBorderLeft(b) + LeafControl_GetBorderRight(b);
    c = a.intErrorBorderSize;
  }
  return c;
}
FileAttachment.Render = FileAttachment_Render;
function FileAttachment_Render(a, b, c, e) {
  ULSrLq:;
  var f = View_GetTemplateType(a.FormId),
    d = FileAttachment_Template;
  if (f == 1) d = FileAttachment_PrintTemplate;
  var g = LeafControl_InitializeViewDataNode(c, a, b);
  LeafControl_Render(a, b, c, e, d);
}
FileAttachment.IsActionEnabled = function (b, a) {
  ULSrLq:;
  switch (b) {
    case HoverMenu.xFileAttachmentAttach:
      return FileAttachment_IsAttachAllowed(a);
    case HoverMenu.xFileAttachmentDownload:
      return FileAttachment_IsDownloadAllowed(a);
    case HoverMenu.xFileAttachmentRemove:
      return FileAttachment_IsRemoveAllowed(a);
  }
  return false;
};
FileAttachment.ResolveSpecialValue = FileAttachment_ResolveSpecialValue;
function FileAttachment_ResolveSpecialValue(d, b, c, e) {
  ULSrLq:;
  var a = LeafControl_ResolveSpecialValue(d, b, c, e);
  if (d == 7)
    if (FileAttachment_GetHasAttachment(b)) a = "";
    else if (Util_IsNullOrEmptyString(a))
      if (View_IsPrintingTemplate(b))
        return IntlCoreStrings.k_strNoFileAttached;
      else return IntlCoreStrings.k_strClickHereToAttachFile;
  if (a == null) {
    var f = c[6][2];
    switch (d) {
      case 10:
        a = FileAttachment_ImageSpanStyle(b);
        break;
      case 11:
        a = FileAttachment_FileNameInformation(b);
        break;
      case 12:
        a = FileAttachment_IconDivStyle(b);
        break;
      case 13:
        a =
          "/_layouts/inc/MergedImage1.gif" +
          Util_FindHashForServerImage("MergedImage1.gif");
        break;
      case 14:
        a = LeafControl_GetAriaInvalidValue(b);
        break;
      case 15:
        a = FileAttachment_GetStyle(c);
        break;
      case 16:
        a = FileAttachment_GetBackgroundColor(c);
    }
  }
  return a;
}
FileAttachment.IsFocusable = FileAttachment_IsFocusable;
function FileAttachment_IsFocusable() {
  ULSrLq:;
  return true;
}
FileAttachment.SetDisable = FileAttachment_SetDisable;
function FileAttachment_SetDisable() {}
FileAttachment.IsBlank = FileAttachment_IsBlank;
function FileAttachment_IsBlank(a) {
  ULSrLq:;
  return !FileAttachment_GetHasAttachment(a);
}
FileAttachment.IsRenderingErrorVisualizationSpansItself = FileAttachment_IsRenderingErrorVisualizationSpansItself;
function FileAttachment_IsRenderingErrorVisualizationSpansItself() {
  ULSrLq:;
  return true;
}
function FileAttachment_LocalizeMenuItemCaption(c, b) {
  ULSrLq:;
  var a = b;
  switch (c) {
    case HoverMenu.xFileAttachmentAttach:
      a = IntlCoreStrings.k_strFileAttachmentMenuItemAttach;
      break;
    case HoverMenu.xFileAttachmentDownload:
      a = IntlCoreStrings.k_strFileAttachmentMenuItemDownload;
      break;
    case HoverMenu.xFileAttachmentRemove:
      a = IntlCoreStrings.k_strFileAttachmentMenuItemRemove;
  }
  return a;
}
FileAttachment.GetFormatting = BaseControl.GetFormatting;
FileAttachment.Highlight = LeafControl.Highlight;
FileAttachment.IsSelected = LeafControl.IsSelected;
FileAttachment.IsValid = LeafControl.IsValid;
FileAttachment.OnChange = LeafControl.OnChange;
FileAttachment.OnBlur = LeafControl.OnBlur;
FileAttachment.OnFocus = LeafControl.OnFocus;
FileAttachment.OnMouseDown = LeafControl.OnMouseDown;
FileAttachment.OnMouseUp = LeafControl.OnMouseUp;
FileAttachment.OnMouseOver = LeafControl.OnMouseOver;
FileAttachment.OnMouseOut = LeafControl.OnMouseOut;
FileAttachment.OnKeyPress = LeafControl.OnKeyPress;
FileAttachment.RestoreFocus = LeafControl.RestoreFocus;
FileAttachment.Select = LeafControl.Select;
FileAttachment.SetValueOfControl = BaseControl.SetValueOfControl;
FileAttachment.RemoveHighlight = LeafControl.RemoveHighlight;
FileAttachment.UnSelect = LeafControl.UnSelect;
FileAttachment.GetAsteriskOffsetNormal = LeafControl.GetAsteriskOffsetNormal;
FileAttachment.GetAsteriskOffsetTop = LeafControl.GetAsteriskOffsetTop;
FileAttachment.GetErrorMessageOffset = LeafControl.GetErrorMessageOffset;
FileAttachment.GetErrorMessageOffsetTop = LeafControl.GetErrorMessageOffsetTop;
function InDocUI() {}
InDocUI.SetDisable = InDocUI_SetDisable;
function InDocUI_SetDisable() {}
InDocUI.SetFormIdOnControl = InDocUI_SetFormIdOnControl;
function InDocUI_SetFormIdOnControl(a) {
  ULSrLq:;
  if (Util.IsNullOrEmptyString(a.getAttribute("FormId"))) {
    var b = BaseControl.GetParentInfoPathControl(a);
    b != null && a.setAttribute("FormId", b.getAttribute("FormId"), 0);
  }
}
InDocUI.OnClick = InDocUI_OnClick;
function InDocUI_OnClick(a, i) {
  ULSrLq:;
  Util.StopEventProprogation(i);
  InDocUI.SetFormIdOnControl(a);
  var h = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(h) != 1
    )
  )
    return false;
  a = BaseControl.GetParentInfoPathControl(a);
  var c = ViewDataNode_GetViewDataNodeFromHtml(a);
  if (ViewDataNode_IsDisabled(c)) return false;
  var d = c.SnippetElement,
    e = InDocUI.GetXmlToEdit(d);
  if (!Util.IsNonEmptyString(e)) return false;
  var f = InDocUI.GetAction(d);
  if (!Util.IsNonEmptyString(f)) return false;
  if (a.style.display == "none") return false;
  var c = ViewDataNode_GetViewDataNodeFromHtml(a),
    b = InDocUI.GetCollectionForInDocUI(c);
  if (!ViewDataNode_IsDisabled(b) && !IP_Collection.IsSigned(b)) {
    var g = HoverMenu.FunctionToExecute[f];
    try {
      g(b[9], e);
    } catch (j) {}
  }
  return false;
}
InDocUI.OnMouseOver = InDocUI_OnMouseOver;
function InDocUI_OnMouseOver(a, c) {
  ULSrLq:;
  InDocUI.SetFormIdOnControl(a);
  var e = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(e) != 1
    )
  )
    return;
  var b = BaseControl.GetParentInfoPathControl(a);
  if (b != null) {
    var d = g_arrControlTypes[b.getAttribute("ScriptClass")]["OnMouseOver"];
    d(b, c);
  }
  LeafControl.OnMouseOver(a, c);
}
InDocUI.OnMouseOut = InDocUI_OnMouseOut;
function InDocUI_OnMouseOut(a, c) {
  ULSrLq:;
  InDocUI.SetFormIdOnControl(a);
  var e = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(e) != 1
    )
  )
    return;
  var b = BaseControl.GetParentInfoPathControl(a);
  if (b != null) {
    var d = g_arrControlTypes[b.getAttribute("ScriptClass")]["OnMouseOut"];
    d(b, c);
  }
  LeafControl.OnMouseOut(a, c);
}
InDocUI.GetInDocUIForCollection = InDocUI_GetInDocUIForCollection;
function InDocUI_GetInDocUIForCollection(b) {
  ULSrLq:;
  var a = BaseControl.GetNextSiblingInfoPathControl(b);
  if (
    b.getAttribute("ScriptClass") == "Section" &&
    a != null &&
    a.getAttribute("ScriptClass") == "InDocSign"
  )
    a = BaseControl.GetNextSiblingInfoPathControl(a);
  if (a != null) if (a.getAttribute("ScriptClass") != "InDocUI") a = null;
  return a;
}
InDocUI.GetCollectionForInDocUI = InDocUI_GetCollectionForInDocUI;
function InDocUI_GetCollectionForInDocUI(b) {
  ULSrLq:;
  var a = InDocUI_GetCollectionViewDataForInDocUI(b);
  return a;
}
function InDocUI_GetCollectionViewDataForInDocUI(d) {
  ULSrLq:;
  for (
    var c = null,
      b = ViewDataNode_GetChildNodes(d._objViewDataNodeParent),
      e = false,
      a = b.length - 1;
    a >= 0;
    a--
  )
    if (e) {
      var f = b[a].SnippetElement[5];
      if (f == 4 || f == 2) {
        c = b[a];
        break;
      }
    } else if (b[a] == d) e = true;
  return c;
}
InDocUI.RestoreFocus = InDocUI_RestoreFocus;
function InDocUI_RestoreFocus(a) {
  ULSrLq:;
  if (a == null) return;
  InDocUI.SetFormIdOnControl(a);
  if (a.style.display == "none") {
    var f = ViewDataNode_GetViewDataNodeFromHtml(a),
      c = InDocUI.GetCollectionForInDocUI(f),
      d = document.getElementById(c[9]),
      b = BaseControl.GetChildInfoPathControls(d);
    b.length > 0 && SelectionService.Select(b[b.length - 1]);
    return;
  }
  var e = InDocUI_GetFocusableControl(a);
  e.focus();
  window.setTimeout(
    "InDocUI_GetFocusableControl(document.getElementById('" +
      a.id +
      "')).focus()",
    10
  );
}
InDocUI.OnFocus = InDocUI_OnFocus;
function InDocUI_OnFocus(b, c) {
  ULSrLq:;
  var a = BaseControl.GetParentInfoPathControl(b);
  a != null && LeafControl.OnFocus(a, c);
}
InDocUI.GetXmlToEdit = InDocUI_GetXmlToEdit;
function InDocUI_GetXmlToEdit(a) {
  ULSrLq:;
  return a[6][2][0];
}
InDocUI.GetAction = InDocUI_GetAction;
function InDocUI_GetAction(a) {
  ULSrLq:;
  return a[6][2][1];
}
InDocUI.GetInDocUIType = InDocUI_GetInDocUIType;
function InDocUI_GetInDocUIType(a) {
  ULSrLq:;
  return a[6][2][2];
}
InDocUI.GetUIText = InDocUI_GetUIText;
function InDocUI_GetUIText(a) {
  ULSrLq:;
  return a[6][2][3];
}
function InDocUI_GetAlignStyle(a) {
  ULSrLq:;
  return a[6][2][4];
}
function InDocUI_GetTextAlignStyle(b, a) {
  ULSrLq:;
  var c = b.FormId;
  return "text-align:" + BaseControl_GetTextAlignment(c, a) + ";";
}
InDocUI.GetImageStyle = InDocUI_GetImageStyle;
function InDocUI_GetImageStyle(a) {
  ULSrLq:;
  var b = InDocUI.GetInDocUIType(a);
  switch (b) {
    case 0:
      return "left:-20px;top:-7px;position:absolute";
    case 1:
      return "left:-55px;top:-10px;position:absolute";
  }
}
InDocUI.GetImageSource = InDocUI_GetImageSource;
function InDocUI_GetImageSource(b) {
  ULSrLq:;
  var c = InDocUI.GetInDocUIType(b);
  switch (c) {
    case 0:
      var a = Util.FindHashForServerImage("MergedImage2.png");
      return "/_layouts/inc/MergedImage2.png" + a;
    case 1:
      var a = Util.FindHashForServerImage("MergedImage1.gif");
      return "/_layouts/inc/MergedImage1.gif" + a;
  }
}
InDocUI.CheckIfShouldShow = InDocUI_CheckIfShouldShow;
function InDocUI_CheckIfShouldShow(d) {
  ULSrLq:;
  var b = InDocUI_GetCollectionViewDataForInDocUI(d);
  if (b != null) {
    if (IP_Collection.IsSigned(b)) return false;
    var e = b.SnippetElement[2],
      a = ViewDataNode_GetChildNodes(b);
    if (e == "Section") if (a != null && a.length >= 1) return false;
    for (var c = 0; c < a.length; c++)
      if (Container.IsSigned(a[c])) return false;
  }
  return true;
}
InDocUI.Render = InDocUI_Render;
function InDocUI_Render(b, c, i, a) {
  ULSrLq:;
  var e = LeafControl_InitializeViewDataNode(i, b, c),
    k = View.GetTemplateType(b.FormId),
    d = InDocUI_Template;
  if (k == 1) {
    d = InDocUI_PrintTemplate;
    return;
  }
  var h = LeafControl_RenderBeginWrappingSpan(e, b, c, a);
  a.push(d[0]);
  var j = InDocUI.CheckIfShouldShow(b),
    g = j
      ? "padding-left:0px;display:block;"
      : "padding-left:0px; display:none;";
  g += InDocUI_GetAlignStyle(c);
  a.push(" ");
  LeafControl_OutputAttribute("style", g, a);
  LeafControl_RenderLeafAttributes(e, b, c, false, false, a);
  for (var f = 1; f < d.length; f++)
    var l = BaseControl_RenderTemplateItem(d[f], b, c, e, a);
  h && LeafControl_RenderEndWrappingSpan(e, b, c, a);
}
InDocUI.ResolveSpecialValue = InDocUI_ResolveSpecialValue;
function InDocUI_ResolveSpecialValue(d, c, b, e) {
  ULSrLq:;
  var a = LeafControl_ResolveSpecialValue(d, c, b, e);
  if (a == null)
    switch (d) {
      case 10:
        a = InDocUI_GetImageSource(b);
        break;
      case 11:
        a = InDocUI_GetUIText(b);
        break;
      case 12:
        a = b[17];
        break;
      case 13:
        a = InDocUI_GetImageStyle(b);
        break;
      case 14:
        a = InDocUI_GetTextAlignStyle(c, b);
    }
  return a;
}
InDocUI.IsFocusable = InDocUI_IsFocusable;
function InDocUI_IsFocusable() {
  ULSrLq:;
  return true;
}
InDocUI.RefreshVisualState = InDocUI_RefreshVisualState;
function InDocUI_RefreshVisualState(c) {
  ULSrLq:;
  var a = ViewDataNode_GetViewDataNodeFromHtml(c),
    b = ViewDataNode_IsHidden(a);
  if (!b) {
    var d = InDocUI.CheckIfShouldShow(a);
    a[4] = !d;
  }
  BaseControl.RefreshVisualState(c);
  if (!b) a[4] = false;
}
InDocUI.GetFocusableControl = InDocUI_GetFocusableControl;
function InDocUI_GetFocusableControl(b) {
  ULSrLq:;
  var a = Util_FindFirstFocusableHtmlDescendantControl(b);
  return a;
}
InDocUI.OnAfterCreate = LeafControl.OnAfterCreate;
InDocUI.Select = LeafControl.Select;
InDocUI.UnSelect = LeafControl.UnSelect;
InDocUI.Highlight = LeafControl.Highlight;
InDocUI.RemoveHighlight = LeafControl.RemoveHighlight;
InDocUI.SetHidden = LeafControl.SetHidden;
function View() {}
View.k_nPostbackReasonDefault = 0;
View.k_nPostbackReasonNoButton = 5;
View.k_nPostbackReasonBrowserBack = 25;
View.k_nPostbackTypeOther = 0;
function View_GetViewFormFieldIDControl(a) {
  ULSrLq:;
  return document.getElementById(a + "__ViewContainer");
}
function View_IsReadOnly(a) {
  ULSrLq:;
  return (
    Collection_GetCollectionContent(CurrentFormData_ViewDataTree(a))[0] == 1
  );
}
function View_OnPostback(a) {
  ULSrLq:;
  var b = GlobalFormData.Get(a);
  HoverMenu_ResetWidgetMap();
}
function View_SubmitForm(a, b, d, i, h) {
  ULSrLq:;
  if (PostbackBody.intPostbacksInProgress > 0 && !b) return;
  if (PostbackBody.boolPostbacksBlocked) {
    PostbackBody_SaveBlockedPostbackState([a, b, d, i, h]);
    return;
  } else PostbackBody_SaveBlockedPostbackState(null);
  var e = GlobalFormData.Get(a);
  e.submitCalled = true;
  PostbackBody.intPostbacksInProgress++;
  try {
    View_OnPostback(a);
    if (View_GetTemplateType(a) == 1 && !CurrentFormData_IsListItemMode(a)) {
      PostbackBody.intPostbacksInProgress--;
      return;
    }
    var c = e.eventLogStaticData;
    if (c != null) {
      c.PostbackReason = d;
      c.PostbackType = i;
    }
    d != 19 && EventLog_EnsureEventLogStartEntry(a);
    if (UserAgentInfo.strBrowser == 1)
      for (var f = 0; f < document.forms.length; f++)
        try {
          window.external.AutoCompleteSaveForm(document.forms[f]);
        } catch (g) {}
    e.g_hasFormBeenSaved = true;
    PostbackBody_Submit(b, false);
  } catch (g) {
    if (h) {
      PostbackBody.intPostbacksInProgress--;
      typeof _spResetFormOnSubmitCalledFlag != "undefined" &&
        _spResetFormOnSubmitCalledFlag();
      throw g;
    }
    PostbackBody_HandlePostbackError(
      IntlCoreStrings.k_strOtherPostbackFailure,
      5
    );
  }
}
function View_PostbackComplete(a) {
  ULSrLq:;
  var b = GlobalFormData.Get(a);
  b.submitCalled = false;
  PostbackBody.webPartConnectionTriggered = false;
  View_OnPostback(a);
  SelectionService_ResetState(CurrentFormData_IsValidViewDataTree(a));
  EventLog_Initialize(a, false);
  EventLog_EnsureEventLogStartEntry(a);
  View_SetBodyDirection(a);
}
function View_PostbackComplete2() {
  ULSrLq:;
  PerfMarker(7562, "ViewPostbackComplete2Start");
  var c = true;
  PostbackBody_HideWaitUI();
  for (var d = _InfoPath.arrForms, f = d.length, b = 0; b < f; b++) {
    var e = d[b];
    if (e != null) {
      var a = CurrentFormData_UserMessages(e.strFormId);
      if (
        a != null &&
        a.length > 0 &&
        UserMessages_IsDialogStyleUserMessage(a[0])
      ) {
        c = false;
        break;
      }
    }
  }
  if (c) {
    if (Util_IsNullOrEmptyString(Dialog.strFormId))
      Dialog.strFormId = _InfoPath.GetFirstControl().strFormId;
    Dialog_HideDialogWithCallback(View_PostbackComplete3);
  } else View_PostbackComplete3();
  PerfMarker(7563, "ViewPostbackComplete2End");
}
function View_PostbackComplete3() {
  ULSrLq:;
  var e = false;
  Dialog.funcCallbackOnClose = null;
  if (PostbackBody.RetryingPostback) return;
  var d = _InfoPath.arrForms,
    f = d.length;
  if (
    typeof _InfoPath.blnImmediateFullPostbackNeededForPartToPart !=
      "undefined" &&
    _InfoPath.blnImmediateFullPostbackNeededForPartToPart == true
  )
    for (var a = 0; a < f; a++) {
      var b = d[a];
      if (b != null && CurrentFormData_ProvidesWebPartData(b.strFormId)) {
        View_SubmitForm(b.strFormId, true, 27, 0, false);
        return;
      }
    }
  if (typeof g_strRTEDialogHelperID != "undefined") {
    var c = document.getElementById(g_strRTEDialogHelperID);
    c != null && c.parentNode.removeChild(c);
  }
  View_CleanupRichTextStructures();
  for (var a = 0; a < f; a++) {
    var b = d[a];
    if (b != null) {
      var g = b.strFormId;
      ChoiceGroup_ClearMultipleBindingMap(g);
      View_UpdatePostbackCounter(g);
    }
  }
  e = UserMessages_ShowMessages(View_OnFinishUserMessages);
  if (!e) {
    View_RenderAfterPostback(true);
    View_OnFinishUserMessages();
  }
}
function View_CleanupRichTextStructures() {
  ULSrLq:;
  var a = document.getElementsByTagName("IFRAME");
  if (a != null)
    for (var d = a.length, b = 0; b < d; b++) {
      var c = a[b];
      c.id != null &&
        c.id.indexOf("_RT1_plainText_iframe") != -1 &&
        View_CleanupRichTextIFrame(c);
    }
  g_aToolBarButtons = null;
  g_fRTEMenuMoved = true;
}
function View_CleanupRichTextIFrame(e) {
  ULSrLq:;
  var c = e.id.replace("_iframe", ""),
    a = RTE_GetEditorDocument(c),
    b = RTE_GetEditorElement(c),
    d = BaseControl_GetParentInfoPathControl(e);
  if (a != null && a.body != null) {
    a.body.ondrop = null;
    a.body.onkeypress = null;
    a.body.onkeydown = null;
    a.body.onkeyup = null;
    a.body.onmouseup = null;
    a.body.onblur = null;
    a.body.onselectstart = null;
    a.body.oncontextmenu = null;
    a.body.onclick = null;
  }
  if (b != null) {
    b.onactivate = null;
    b.ondeactivate = null;
    b.onblur = null;
    b.onfocus = null;
    b.onresize = null;
  }
  if (d != null) d.ondeactivate = null;
}
function View_CanNavigateToUrl(a) {
  ULSrLq:;
  if (Util_IsNonEmptyString(a))
    return (
      window.parent == null ||
      window.parent == window ||
      encodeURIComponent(window.parent.location.href) != encodeURIComponent(a)
    );
  return false;
}
View.OnFinishUserMessages = View_OnFinishUserMessages;
function View_OnFinishUserMessages() {
  ULSrLq:;
  for (var b = _InfoPath.arrForms, d = b.length, a = 0; a < d; a++) {
    var c = b[a];
    c != null && View_OnFinishUserMessagesIndividual(c.strFormId);
  }
  UserMessages_GetPostbackNeeded() && PostbackBody_Submit(true, true);
}
function View_OnFinishUserMessagesIndividual(a) {
  ULSrLq:;
  var c = GlobalFormData.Get(a);
  CurrentFormData_ShouldFocusFirstInvalidControl(a) &&
    ErrorVisualization_FocusNextInvalidControl(a, null);
  var b = c.boolDocumentClosed == true;
  EventLog_Initialize(a, b);
  EventLog_EnsureEventLogStartEntry(a);
  b && View_Close(a, true);
}
function View_Remove(c) {
  ULSrLq:;
  var a = View_GetViewObjectByFormId(c);
  if (!(typeof a == "undefined" || a == null)) {
    Util_SetInnerText(a, "");
    Dialog.type = null;
    var b = document.getElementById("RibbonWrapper");
    if (b != null) b.style.display = "none";
  }
}
function View_Close(a, h) {
  ULSrLq:;
  IPFSRibbon_UnregisterWithPageManager(a);
  var b = CurrentFormData_UrlToNavigateToOnClose(a),
    g = View_IsPopUI(),
    f =
      g &&
      Util_IsNonEmptyString(b) &&
      Util_GetQueryParameter(b, "pagetype") == "8",
    e = h && !CurrentFormData_IsHosted(a) && !CurrentFormData_IsListItemPage(a);
  if (g && !f) {
    var d = UserMessages_GetReturnedMessages(),
      c = 6;
    if (d != null && d.length > UserMessages.intNextMessage)
      c = d[UserMessages.intNextMessage][0];
    if (c == 1 || c == 2 || GlobalFormData.Get(a).boolSavedOrSubmitted)
      if (e) GlobalFormData.Get(a).boolNeedPostBack = true;
      else window.frameElement.commitPopup();
    else window.frameElement.cancelPopUp();
  } else if (e) GlobalFormData.Get(a).boolNeedPostBack = true;
  else if (View_CanNavigateToUrl(b)) {
    View_Remove(a);
    if (f && !Util_GetQueryParameter(b, "isdlg")) b = b + "&IsDlg=1";
    PostbackBody_RemoveFormCookies(a);
    EventLog_Delete(a);
    Util_Navigate(b);
  } else {
    View_Remove(a);
    Dialog_ShowFinalMessage(a, IntlCoreStrings.k_strErrorFormClosed, true);
  }
}
function View_IsPopUI() {
  ULSrLq:;
  return Util_GetWindowQueryParameter("isdlg") != null;
}
function View_SetBodyDirection(b) {
  ULSrLq:;
  if (CurrentFormData_IsHosted(b)) {
    var a = View_GetViewFormFieldIDControl(b);
    if (a != null && a.parentNode.style.direction == "rtl")
      document.body.style.direction = "rtl";
  }
}
function View_RenderAfterPostback(i) {
  ULSrLq:;
  var g = _InfoPath.arrForms,
    j = g.length;
  View_UpdatePageTitle();
  for (var d = 0; d < j; d++) {
    var h = g[d];
    if (h != null) {
      var a = h.strFormId,
        b = GlobalFormData.Get(a);
      b.viewDataHtmlMap = [];
      Toolbar.Show(a, true);
      if (
        CurrentFormData_EditingSessionId(a) != "" &&
        b.boolDocumentClosed != true &&
        b.boolFinalMessageShown != true
      ) {
        var c = CurrentFormData_ViewDataTree(a);
        Snippet_BuildSnippetList(a);
        g_objMultipleBindingMap = [];
        g_objMultipleBindingIdMap = [];
        Perf_Start_Trace(7576, "ContainerInitializeViewDataNodes");
        Container_InitializeViewDataNodes(
          a,
          null,
          g_objSnippetTree[a],
          c,
          true
        );
        Perf_End_Trace(7577, "ContainerInitializeViewDataNodes");
        var e = false;
        if (typeof b.oldViewTree != "undefined" && b.oldViewTree != null) {
          Perf_Start_Trace(7578, "IncrementalReapplyDiffViewTrees");
          var f = IncrementalReapply_DiffViewTrees(c, b.oldViewTree);
          Perf_End_Trace(7579, "IncrementalReapplyDiffViewTrees");
          if (!IncrementalReapply_IsFullReapply(f))
            e = IncrementalReapply_TryRender(c, b, f);
        }
        b.oldViewTree = null;
        b.oldViewDataHtmlMap = null;
        !e && View_GenerateAndInsertHtmlView(a);
        if (View_GetTemplateType(a) != 1) {
          Toolbar.RefreshViewDropdown(a);
          i && SelectionService_RestoreFocusAfterPostback(a);
        } else
          CurrentFormData_IsListItemPage(a) && Toolbar_FocusDefaultControl(a);
      }
    }
  }
}
View.UpdatePageTitle = View_UpdatePageTitle;
function View_UpdatePageTitle() {
  ULSrLq:;
  var b = _InfoPath.arrForms;
  if (b.length == 1) {
    var a = b[0].strFormId;
    if (CurrentFormData_IsHosted(a))
      document.title = CurrentFormData_GetPageTitle(a);
  }
}
function View_UpdatePostbackCounter(d) {
  ULSrLq:;
  if (UserAgentInfo.strBrowser == 1) {
    var b = document.getElementById(d + "__PostbackCounter");
    if (b != null) {
      var c = 0,
        a = b.innerHTML;
      if (Util_IsNonEmptyString(a)) {
        a = Util_Trim(a);
        c = parseInt(a, 10);
      } else c = CurrentFormData_PostbackCounter(d);
      var e = "" + (c + 1);
      b.innerHTML = e;
    }
  }
}
View.PreSubmitActions = View_PreSubmitActions;
function View_PreSubmitActions(a) {
  ULSrLq:;
  var b = ErrorVisualization_FindNextInvalidControl(a, null);
  if (b != null) {
    var d = [];
    d.push(
      IntlCoreStrings.k_strSubmitBeforeErrors,
      "\n\n",
      IntlCoreStrings.k_strSaveSubmitErrorInformation
    );
    UserMessages_ShowAlertMessage(d.join(""), false);
    var c = document.getElementById(b[9]);
    c != null && BaseControl_RestoreFocus(c);
    return false;
  } else if (
    EventLog.Count(a) > 1 &&
    CurrentFormData_RefreshViewBeforeSubmit(a)
  ) {
    UserMessages_ShowAlertMessage(
      IntlCoreStrings.k_strSubmitPromptForRefresh,
      true
    );
    View_SubmitForm(a, false, 18, 0, false);
    return false;
  }
  return true;
}
View.PreSaveActions = View_PreSaveActions;
function View_PreSaveActions(d) {
  ULSrLq:;
  var b = true,
    a = [];
  a.push(
    IntlCoreStrings.k_strSaveWithErrors,
    "\n\n",
    IntlCoreStrings.k_strSaveSubmitErrorInformation,
    "\n\n",
    IntlCoreStrings.k_strSavePromptToContinue
  );
  var c = ErrorVisualization_FindNextInvalidControl(d, null);
  if (c != null) b = UserMessages_ShowConfirmMessage(a.join(""), false);
  return b;
}
View.GenerateAndInsertHtmlView = View_GenerateAndInsertHtmlView;
function View_GenerateAndInsertHtmlView(a) {
  ULSrLq:;
  var d = GlobalFormData.Get(a),
    c = View_GetViewFormFieldIDControl(a);
  d.g_rgControlsTabOrder = null;
  if (c != null) {
    Perf_Start_Trace(7572, "ViewGenerateAndInsertHtmlView");
    if (typeof g_objMultipleBindingMap == "undefined") {
      g_objMultipleBindingMap = [];
      g_objMultipleBindingIdMap = [];
    }
    Perf_Start_Trace(7570, "ViewRender");
    var b = [];
    View_Render(
      CurrentFormData_ViewDataTree(a),
      g_objSnippetTree[a],
      null,
      b,
      a
    );
    Perf_End_Trace(7571, "ViewRender");
    Perf_Start_Trace(7568, "ViewUpdateHtml");
    View_UpdateHtml(b, c);
    Perf_End_Trace(7569, "ViewUpdateHtml");
    PerfMarker(7564, "ViewSchedulePostCreate");
    window.setTimeout("View_PostCreate('" + a + "');", 15);
    Perf_End_Trace(7573, "ViewGenerateAndInsertHtmlView");
  }
}
function View_PostCreate(a) {
  ULSrLq:;
  Perf_Start_Trace(7574, "ViewPostCreate");
  var d = CurrentFormData_ViewDataTree(a),
    f = CurrentFormData_GetCurrentFormData(a);
  ViewDataNode_FireOnAfterCreate(d);
  var b = document.getElementById(a + "_customControlHostDiv");
  b != null && PostBackBody_DetectAndRunScript(b);
  var e = GlobalFormData.Get(a);
  if (e.v3RichTextControlOnFormInIE) {
    var c = SelectionService_GetSelectedControl();
    c != null && c.focus();
  }
  View_SelectText(a);
  GlobalFormData.Get(a).viewTreesAreMerged = true;
  g_objMultipleBindingMap = null;
  View_SetupEventListeners(d);
  Perf_End_Trace(7575, "ViewPostCreate");
  PerfMarker(7595, "FormLoadEnd");
}
function View_SetupEventListeners(b) {
  ULSrLq:;
  if (View_IsPrintingTemplate(b)) return;
  var a = document.getElementById(b[9]);
  if (a != null) {
    View__AttachEvent(a, "keydown", View__OnKeyDown);
    View__AttachEvent(a, "keypress", View__OnKeyPress);
    View__AttachEvent(a, "mouseup", View__OnMouseUp);
    View__AttachEvent(a, "mousedown", View__OnMouseDown);
    View__AttachEvent(a, "mouseout", View__OnMouseOut);
    View__AttachEvent(a, "mouseover", View__OnMouseOver);
    View__AttachEvent(a, "click", View__OnClick);
  }
}
function View__AttachEvent(b, c, a) {
  ULSrLq:;
  if (UserAgentInfo.strBrowser == 1) b.attachEvent("on" + c, a);
  else b.addEventListener(c, a, false);
}
function View__OnKeyDown(a) {
  ULSrLq:;
  return View__RouteEvent("OnKeyDown", 4, a);
}
function View__OnKeyPress(a) {
  ULSrLq:;
  return View__RouteEvent("OnKeyPress", 2, a);
}
function View__OnMouseUp(a) {
  ULSrLq:;
  return View__RouteEvent("OnMouseUp", 64, a);
}
function View__OnMouseDown(a) {
  ULSrLq:;
  return View__RouteEvent("OnMouseDown", 8, a);
}
function View__OnMouseOut(a) {
  ULSrLq:;
  return View__RouteEvent("OnMouseOut", 32, a);
}
function View__OnMouseOver(a) {
  ULSrLq:;
  return View__RouteEvent("OnMouseOver", 16, a);
}
function View__OnClick(a) {
  ULSrLq:;
  return View__RouteEvent("OnClick", 1, a);
}
function View__RouteEvent(g, i, a) {
  ULSrLq:;
  var c;
  if (UserAgentInfo.strBrowser == 1) {
    a = Window_GetEvent();
    c = a.srcElement;
  } else c = a.target;
  a.Canceled = false;
  if (c == null) return;
  var b = c,
    e = b.parentNode,
    f = undefined;
  while (e != null) {
    var d = b.getAttribute("ScriptClass");
    if (Util_IsNonEmptyString(d)) {
      var h = g_arrControlTypes[d];
      if (typeof h[g] == "function") {
        var k = b.getAttribute("viewDataNode");
        if (Util_IsNonEmptyString(k)) {
          var j = Snippet_GetSnippetElementFromHtml(b);
          if ((j[19] & i) == i) f = h[g](b, a);
        }
      }
      if (a.Canceled || d == "ViewContainer") {
        f === false && a.preventDefault != undefined && a.preventDefault();
        return f;
      }
    }
    b = e;
    e = b.parentNode;
  }
}
function View_SelectText(b) {
  ULSrLq:;
  if (!Util_IsNullOrEmptyString(CurrentFormData_SelectingControlId(b))) {
    var c = CurrentFormData_SelectingControlId(b),
      a = document.getElementById(c);
    a != null && BaseControl_SelectText(a);
  }
}
View.UpdateHtml = View_UpdateHtml;
function View_UpdateHtml(a, b) {
  ULSrLq:;
  if (a == null || b == null) return;
  var c = a.join("");
  b.innerHTML = c;
}
View.Render = View_Render;
function View_Render(a, c, d, b) {
  ULSrLq:;
  a._objViewDataNodeParent = null;
  IP_Collection_Render(a, c, d, b, View_Template);
}
View.GetName = View_GetName;
function View_GetName(b) {
  ULSrLq:;
  var a = "";
  try {
    a = b[6][4][0];
  } catch (c) {}
  return a;
}
View.GetDirection = View_GetDirection;
function View_GetDirection(b) {
  ULSrLq:;
  var a = 0;
  try {
    a = g_objSnippetTree[b][10];
  } catch (c) {}
  return a;
}
View.GetTemplateType = View_GetTemplateType;
function View_GetTemplateType(b) {
  ULSrLq:;
  var a = 0;
  try {
    a = Collection_GetCollectionContent(CurrentFormData_ViewDataTree(b))[1];
  } catch (c) {}
  return a;
}
function View_IsPrintingTemplate(a) {
  ULSrLq:;
  var b = View_GetTemplateType(a.FormId);
  return b == 1;
}
View.RestoreFocus = View_RestoreFocus;
function View_RestoreFocus(b) {
  ULSrLq:;
  var d = b.getAttribute("FormId");
  if (View_GetTemplateType(d) == 1) return;
  var a = BaseControl_FindFirstFocusableControl(b);
  if (a != null) {
    var c = g_arrControlTypes[a.getAttribute("ScriptClass")]["RestoreFocus"];
    c(a);
  }
}
View.SetDisable = View_SetDisable;
function View_SetDisable() {}
function View_GetViewObjectByFormId(a) {
  ULSrLq:;
  return document.getElementById(a + "__XmlFormView");
}
View.OnAfterCreate = BaseControl.OnAfterCreate;
View.OnClick = BaseControl.OnClick;
View.OnFocus = BaseControl.OnFocus;
View.OnBlur = BaseControl.OnBlur;
View.OnMouseOver = BaseControl.OnMouseOver;
View.OnMouseOut = BaseControl.OnMouseOut;
View.OnMouseDown = BaseControl.OnMouseDown;
View.OnMouseUp = BaseControl.OnMouseUp;
View.OnKeyPress = BaseControl.OnKeyPress;
View.IsValid = BaseControl.IsValid;
View.IsSelected = BaseControl.IsSelected;
View.ResolveSpecialValue = StructuralEditingControl.ResolveSpecialValue;
View.Select = BaseControl.Select;
View.UnSelect = BaseControl.UnSelect;
function RichTextCollection() {}
RichTextCollection.Render = RichTextCollection_Render;
function RichTextCollection_Render(a, c, d, b) {
  ULSrLq:;
  a[2] = -1;
  IP_Collection_Render(a, c, d, b, RichTextCollection_Template);
}
RichTextCollection.ResolveSpecialValue = RichTextCollection_ResolveSpecialValue;
function RichTextCollection_ResolveSpecialValue(a, c, b, d) {
  ULSrLq:;
  if (a == 6) return null;
  return StructuralEditingControl.ResolveSpecialValue(a, c, b, d);
}
RichTextCollection.OnChange = BaseControl.OnChange;
RichTextCollection.OnClick = BaseControl.OnClick;
RichTextCollection.OnFocus = BaseControl.OnFocus;
RichTextCollection.OnBlur = BaseControl.OnBlur;
RichTextCollection.OnMouseOver = BaseControl.OnMouseOver;
RichTextCollection.OnMouseOut = BaseControl.OnMouseOut;
RichTextCollection.OnMouseDown = BaseControl.OnMouseDown;
RichTextCollection.OnMouseUp = BaseControl.OnMouseUp;
RichTextCollection.OnKeyPress = BaseControl.OnKeyPress;
RichTextCollection.OnAfterCreate = RichTextCollection_OnAfterCreate;
function RichTextCollection_OnAfterCreate(a) {
  ULSrLq:;
  var b = document.getElementById(a[9]);
  if (b == null) return;
  BaseControl.RefreshVisualState(b);
  BaseControl.OnAfterCreate(a);
}
RichTextCollection.IsValid = BaseControl.IsValid;
RichTextCollection.IsSelected = BaseControl.IsSelected;
RichTextCollection.Select = BaseControl.Select;
RichTextCollection.UnSelect = BaseControl.UnSelect;
RichTextCollection.RestoreFocus = BaseControl.RestoreFocus;
RichTextCollection.IsSigned = StructuralEditingControl.IsSigned;
function FileAttachmentCollection() {}
FileAttachmentCollection.Render = FileAttachmentCollection_Render;
function FileAttachmentCollection_Render(a, c, d, b) {
  ULSrLq:;
  a[2] = -1;
  IP_Collection_Render(a, c, d, b, FileAttachmentCollection_Template);
}
FileAttachmentCollection.SetHidden = function (b, a, c) {
  ULSrLq:;
  BaseControl.RefreshVisualState(a);
  BaseControl.SetHidden(b, a, c);
};
FileAttachmentCollection.SetDisable = FileAttachmentCollection_SetDisable;
function FileAttachmentCollection_SetDisable(d, c) {
  ULSrLq:;
  var b = d.firstChild;
  if (b != null) {
    var a = b.childNodes[1];
    a != null && BaseControl.SetDisable(a, c);
  }
}
FileAttachmentCollection.ResolveSpecialValue = FileAttachmentCollection_ResolveSpecialValue;
function FileAttachmentCollection_ResolveSpecialValue(a, c, b, d) {
  ULSrLq:;
  if (a == 6) return "";
  return StructuralEditingControl.ResolveSpecialValue(a, c, b, d);
}
FileAttachmentCollection.OnChange = BaseControl.OnChange;
FileAttachmentCollection.OnClick = BaseControl.OnClick;
FileAttachmentCollection.OnFocus = BaseControl.OnFocus;
FileAttachmentCollection.OnBlur = BaseControl.OnBlur;
FileAttachmentCollection.OnMouseOver = BaseControl.OnMouseOver;
FileAttachmentCollection.OnMouseOut = BaseControl.OnMouseOut;
FileAttachmentCollection.OnMouseDown = BaseControl.OnMouseDown;
FileAttachmentCollection.OnMouseUp = BaseControl.OnMouseUp;
FileAttachmentCollection.OnKeyPress = BaseControl.OnKeyPress;
FileAttachmentCollection.OnAfterCreate = FileAttachmentCollection_OnAfterCreate;
function FileAttachmentCollection_OnAfterCreate(a) {
  ULSrLq:;
  var b = document.getElementById(a[9]);
  if (b == null) return;
  BaseControl.RefreshVisualState(b);
  BaseControl.OnAfterCreate(a);
}
FileAttachmentCollection.IsValid = BaseControl.IsValid;
FileAttachmentCollection.IsSelected = BaseControl.IsSelected;
FileAttachmentCollection.Select = BaseControl.Select;
FileAttachmentCollection.UnSelect = BaseControl.UnSelect;
FileAttachmentCollection.RestoreFocus = BaseControl.RestoreFocus;
FileAttachmentCollection.IsSigned = StructuralEditingControl.IsSigned;
var PictureControl_k_strPictureIconSuffix = "_icon",
  PictureControl_k_strPromptSuffix = "_prompt",
  PictureControl_k_strPromptTextSuffix = "_prompttext",
  PictureControl_k_strPictureSuffix = "_picture",
  PictureControl_k_strPictureAnchorSuffix = "_pictureanchor";
function PictureControl_GetPictureIcon(a) {
  ULSrLq:;
  return document.getElementById(a.id + PictureControl_k_strPictureIconSuffix);
}
function PictureControl_GetPromptAnchor(a) {
  ULSrLq:;
  return document.getElementById(a.id + PictureControl_k_strPromptSuffix);
}
function PictureControl_GetPromptText(a) {
  ULSrLq:;
  return document.getElementById(a.id + PictureControl_k_strPromptTextSuffix);
}
function PictureControl_GetPicture(a) {
  ULSrLq:;
  return document.getElementById(a.id + PictureControl_k_strPictureSuffix);
}
function PictureControl_GetPictureAnchor(a) {
  ULSrLq:;
  return document.getElementById(
    a.id + PictureControl_k_strPictureAnchorSuffix
  );
}
function PictureControl_ShowPicture(b, a) {
  ULSrLq:;
  PictureControl__ShowPicture(b, a, true);
}
function PictureControl__ShowPicture(a, e, d) {
  ULSrLq:;
  var c = PictureControl_GetPromptAnchor(a),
    b = PictureControl_GetPictureAnchor(a);
  if (e) {
    Util_SetStyleDisplay(c, "none");
    Util_SetStyleDisplay(b, "inline-block");
  } else {
    Util_SetStyleDisplay(c, "inline-block");
    Util_SetStyleDisplay(b, "none");
  }
  d && BaseControl_RefreshVisualState(a);
}
function PictureControl_ShowErrorVisuals(b) {
  ULSrLq:;
  var a = document.getElementById(b[9]);
  if (a == null) return;
  BaseControl_RefreshVisualState(a);
}
function PictureControl_EnsureControl(b) {
  ULSrLq:;
  var a = b.id;
  if (a.indexOf(PictureControl_k_strPictureIconSuffix) != -1)
    a = a.replace(PictureControl_k_strPictureIconSuffix, "");
  else if (a.indexOf(PictureControl_k_strPromptSuffix) != -1)
    a = a.replace(PictureControl_k_strPromptSuffix, "");
  else if (a.indexOf(PictureControl_k_strPictureAnchorSuffix) != -1)
    a = a.replace(PictureControl_k_strPictureAnchorSuffix, "");
  else if (a.indexOf(PictureControl_k_strPictureSuffix) != -1)
    a = a.replace(PictureControl_k_strPictureSuffix, "");
  else return b;
  return document.getElementById(a);
}
function PictureControl_ShowPictureIcon(b, d, c) {
  ULSrLq:;
  var a = PictureControl_GetPictureIcon(b);
  if (c) {
    Util_SetStyleDisplay(a, "");
    ErrorVisualization_PositionVisualizationObject(a, b, d, 0, "PictureIcon");
  } else Util_SetStyleDisplay(a, "none");
}
function PictureControl_GetAlt(b) {
  ULSrLq:;
  var a = b[6][2][0];
  if (a == null) a = "";
  return a;
}
function PictureControl_GetStyle(b) {
  ULSrLq:;
  var a = b[6][2][1];
  if (a == null) a = "";
  return a;
}
function PictureControl_GetWrappingSpanStyle(d, c) {
  ULSrLq:;
  var a = c[6][2][2];
  if (a == null) a = "";
  a += "white-space:nowrap;";
  var b = d.FormId;
  if (View_GetTemplateType(b) == 1 && CurrentFormData_IsListItemMode(b))
    a += ";border-width:0px;";
  return a;
}
function PictureControl_GetAnchorStyle(d, c) {
  ULSrLq:;
  var a = [],
    e = c[6][2][3];
  if (!Util_IsNullOrEmptyString(e)) {
    a.push(e);
    a.push(";");
  }
  var b = d.FormId;
  View_GetTemplateType(b) == 1 &&
    CurrentFormData_IsListItemMode(b) &&
    a.push("border-width:0px;");
  a.push("text-align:");
  var b = d.FormId;
  a.push(BaseControl_GetTextAlignment(b, c));
  a.push(";");
  return a.join("");
}
function PictureControl_GetAnchorTitle(c, b) {
  ULSrLq:;
  var a = c[6][2][4];
  if (Util_IsNullOrEmptyString(a))
    if (View_IsPrintingTemplate(b)) a = IntlCoreStrings.k_strNoPictureAttached;
    else if (!ViewDataNode_IsDisabled(b))
      a = IntlCoreStrings.k_strClickHereToInsertPicture;
  return LeafControl_CreateTitleString(b, a);
}
function PictureControl_GetSecondaryBindingFunction(a) {
  ULSrLq:;
  return a[6][2][5];
}
function PictureControl_GetPromptTextHolderWidth(a) {
  ULSrLq:;
  return a[6][2][6];
}
function PictureControl_GetPrimaryBindingFunction(a) {
  ULSrLq:;
  return a[6][2][7];
}
function PictureControl_GetPictureTitle(b) {
  ULSrLq:;
  var a = PictureControl_GetSecondaryDataNodes(b);
  if (a == null) return null;
  else return Expr.String(a);
}
function PictureControl_GetSecondaryDataNodes(b) {
  ULSrLq:;
  var d = b.SnippetElement,
    a = PictureControl_GetSecondaryBindingFunction(d);
  if (a != null) {
    var c = b._objViewDataNodeParent,
      e = Expr_Evaluate(a, c, 0);
    return e;
  }
  return null;
}
function PictureControl_RenderHelper(a, b, e, c, h) {
  ULSrLq:;
  var f = LeafControl_InitializeViewDataNode(e, a, b),
    d = PictureControl_GetWrappingSpanStyle(a, b) + ";padding:2px;",
    i = a.FormId;
  if (
    !(
      UserAgentInfo.strBrowser == 1 &&
      (!CurrentFormData_IsV4UI(i) || UserAgentInfo.intBrowserRmj == 7)
    )
  )
    d += "max-width:100%;";
  var g = LeafControl_RenderBeginWrappingSpanEx(f, a, b, d, c);
  LeafControl_Render(a, b, e, c, h);
  g && LeafControl_RenderEndWrappingSpan(f, a, b, c);
}
function PictureControl_ResolveSpecialValue(d, b, c, e) {
  ULSrLq:;
  var a = null;
  switch (d) {
    case 11:
      a = PictureControl_ResolveAlt(b, c);
      break;
    case 12:
      a = PictureControl_GetStyle(c);
      break;
    case 13:
      a = PictureControl_ResolveShowPicture(b);
      break;
    case 14:
      a = PictureControl_ResolveShowPrompt(b, c);
      break;
    case 15:
      a = PictureControl_GetAnchorStyle(b, c);
      break;
    case 16:
      a = PictureControl_GetAnchorTitle(c, b);
      break;
    case 17:
      a = LeafControl_GetAriaInvalidValue(b);
      break;
    case 18:
      a = PictureControl_ResolvePictureTitle(b, c);
      break;
    case 19:
      a = PictureControl_ResolvePromptTextStyle(b, c);
      break;
    case 20:
      a = PictureControl_ResolvePromptText(b);
      break;
    case 21:
      a = PictureControl_ResolvePromptStyle(b);
      break;
    default:
      a = LeafControl_ResolveSpecialValue(d, b, c, e);
  }
  return a;
}
function PictureControl_ResolveAlt(c, b) {
  ULSrLq:;
  var a = PictureControl_GetPictureTitle(c);
  if (a == null) a = PictureControl_GetAlt(b);
  return a;
}
function PictureControl_ResolveShowPicture(a) {
  ULSrLq:;
  if (Util_IsNullOrEmptyString(PictureControl_GetPrimaryDataNodeValue(a)))
    return "display:none;";
  else return "";
}
function PictureControl_ResolveShowPrompt(a) {
  ULSrLq:;
  if (!Util_IsNullOrEmptyString(PictureControl_GetPrimaryDataNodeValue(a)))
    return "display:none;";
  else return "display:inline-block;";
}
function PictureControl_ResolvePictureTitle(b, c) {
  ULSrLq:;
  var a = PictureControl_GetPictureTitle(b);
  if (Util_IsNullOrEmptyString(a)) {
    a = PictureControl_GetPictureTitle(b);
    if (a == null) a = PictureControl_GetAlt(c);
  }
  return a;
}
function PictureControl_ResolvePromptTextStyle(c, b) {
  ULSrLq:;
  var a = [];
  a.push(
    "font-family:Tahoma; font-size: 8pt; padding: 5px; word-wrap:break-word; text-overflow:ellipsis;overflow-x:hidden; OVERFLOW-Y: hidden; WHITE-SPACE:nowrap;"
  );
  a.push(PictureControl_GetPromptTextHolderWidth(b));
  if (ViewDataNode_IsDisabled(c)) a.push("display:none;");
  else a.push("display:inline-block;");
  return a.join("");
}
function PictureControl_ResolvePromptText(b) {
  ULSrLq:;
  var a = " ";
  if (View_IsPrintingTemplate(b)) a += IntlCoreStrings.k_strNoPictureAttached;
  else if (!ViewDataNode_IsDisabled(b))
    a += IntlCoreStrings.k_strClickHereToInsertPicture;
  return a;
}
function PictureControl_ResolvePromptStyle(b) {
  ULSrLq:;
  var a = b.FormId;
  if (View_GetTemplateType(a) == 1 && CurrentFormData_IsListItemMode(a))
    return "border-width:0px;";
  else return "border: #dcdcdc 1px solid;";
}
function PictureControl_SetDisable(a, e) {
  ULSrLq:;
  var d = PictureControl_GetPromptText(a),
    c = PictureControl_GetPromptAnchor(a),
    b = PictureControl_GetPictureAnchor(a);
  if (!e) {
    Util_SetStyleDisplay(d, "inline-block");
    c.setAttribute("href", "#");
    b.setAttribute("href", "#");
  } else {
    Util_SetStyleDisplay(d, "none");
    c.removeAttribute("href");
    b.removeAttribute("href");
  }
  BaseControl_SetDisable(a, e);
}
function PictureControl_EnsureHrefInCorrectStateAfterRender(b) {
  ULSrLq:;
  if (ViewDataNode_IsDisabled(b)) {
    var a = document.getElementById(b[9]);
    if (a != null) {
      var d = PictureControl_GetPromptAnchor(a),
        c = PictureControl_GetPictureAnchor(a);
      d.removeAttribute("href");
      c.removeAttribute("href");
    }
  }
}
function PictureControl_RestoreFocus(a) {
  ULSrLq:;
  if (a != null) {
    var b = PictureControl_GetPictureAnchor(a);
    if (b.style.display != "none") b.focus();
    else {
      var c = PictureControl_GetPromptAnchor(a);
      c.focus();
    }
  }
}
function PictureControl_SetDisplay(a, b) {
  ULSrLq:;
  var d = PictureControl_GetPromptAnchor(a),
    c = PictureControl_GetPictureAnchor(a);
  if (b != "none") {
    Util_SetStyleDisplay(a, b);
    var e = ViewDataNode_GetViewDataNodeFromHtml(a);
    PictureControl__ShowPicture(a, ViewDataNode_GetDatum(e) != "", false);
  } else {
    Util_SetStyleDisplay(a, "none");
    Util_SetStyleDisplay(d, "none");
    Util_SetStyleDisplay(c, "none");
  }
}
function PictureControl_MoveStyles(f) {
  ULSrLq:;
  var d = ViewDataNode_GetViewDataNodeFromHtml(f),
    g = d.SnippetElement,
    e = PictureControl_GetPromptText(f),
    a = d[2],
    b = "";
  if (a != null && a >= 0) {
    var c = g[3][5].split(" ");
    if (c != null) b = c[a];
  }
  if (e.className != b) e.className = b;
}
function PictureControl_OnError(a) {
  ULSrLq:;
  a = PictureControl_EnsureControl(a);
  if (a != null) {
    var b = ViewDataNode_GetViewDataNodeFromHtml(a);
    if (!ViewDataNode_IsBlank(b)) {
      var c = " ";
      if (!View_IsPrintingTemplate(b) && !ViewDataNode_IsDisabled(b))
        c = IntlCoreStrings.k_strClickHereToInsertPicture;
      var d = PictureControl_GetPromptText(a);
      Util_SetInnerText(d, c);
      PictureControl_ShowPicture(a, false);
    }
  }
}
function PictureControl_GetPrimaryDataNodeValue(a) {
  ULSrLq:;
  var d = a.SnippetElement,
    c = a._objViewDataNodeParent,
    b = PictureControl_GetPrimaryBindingFunction(d);
  if (b != null) {
    var e = Expr_Evaluate(b, c, 0);
    return Expr_String(e);
  } else return Expr_String(ViewDataNode_GetDatum(a).GetValue());
}
function PictureControl_SetHidden(a, b, c) {
  ULSrLq:;
  LeafControl.SetHidden(a, b, c);
  Util_SetWrappingSpanHidden(b, a, c, "");
}
function InlineImage() {}
InlineImage.GetFormatting = function () {
  ULSrLq:;
  return null;
};
InlineImage.Render = InlineImage_Render;
function InlineImage_Render(c, b, d, a) {
  ULSrLq:;
  var e = InlineImage_Template;
  LeafControl.Render(c, b, d, a, e);
}
function InlineImage_GetImageFile(a) {
  ULSrLq:;
  return a[6][2][0];
}
InlineImage.IsFocusable = InlineImage_IsFocusable;
function InlineImage_IsFocusable() {
  ULSrLq:;
  return false;
}
InlineImage.ResolveSpecialValue = InlineImage_ResolveSpecialValue;
function InlineImage_ResolveSpecialValue(e, d, b, g) {
  ULSrLq:;
  var a = LeafControl_ResolveSpecialValue(e, d, b, g);
  if (a == null)
    switch (e) {
      case 10:
        var c = InlineImage_GetImageFile(b);
        if (Util_IsNullOrEmptyString(c)) a = "";
        else {
          var f = d.FormId;
          a =
            CurrentFormData.SiteUrl(f) +
            "/_layouts/FormResource.aspx?solutionId=" +
            encodeURIComponent(CurrentFormData.SolutionId(f)) +
            "&solutionFile=" +
            encodeURIComponent(c);
        }
        break;
      case 11:
        a = b[6][2][1];
        if (a == null) a = "";
    }
  return a;
}
InlineImage.GetValueFromControl = BaseControl.GetValueFromControl;
InlineImage.Highlight = LeafControl.Highlight;
InlineImage.IsSelected = LeafControl.IsSelected;
InlineImage.IsValid = LeafControl.IsValid;
InlineImage.OnAfterCreate = LeafControl.OnAfterCreate;
InlineImage.OnBlur = LeafControl.OnBlur;
InlineImage.OnChange = LeafControl.OnChange;
InlineImage.OnFocus = LeafControl.OnFocus;
InlineImage.OnKeyPress = LeafControl.OnKeyPress;
InlineImage.OnMouseDown = LeafControl.OnMouseDown;
InlineImage.OnMouseOver = LeafControl.OnMouseOver;
InlineImage.OnMouseOut = LeafControl.OnMouseOut;
InlineImage.OnMouseUp = LeafControl.OnMouseUp;
InlineImage.RemoveHighlight = LeafControl.RemoveHighlight;
InlineImage.RestoreFocus = LeafControl.RestoreFocus;
InlineImage.Select = LeafControl.Select;
InlineImage.SetValueOfControl = BaseControl.SetValueOfControl;
InlineImage.UnSelect = LeafControl.UnSelect;
var InlinePicture_k_strRenderModeNormal = "Normal";
function InlinePicture() {}
InlinePicture.GetValueFromControl = InlinePicture_GetValueFromControl;
function InlinePicture_GetValueFromControl(a) {
  ULSrLq:;
  var c = ViewDataNode_GetViewDataNodeFromHtml(a),
    b = InlinePicture_GetHasAttachment(c);
  if (b) {
    var d = PictureControl_GetPicture(a);
    return d.src;
  } else return "";
}
InlinePicture.SetValueOfControl = InlinePicture_SetValueOfControl;
function InlinePicture_SetValueOfControl(a, b) {
  ULSrLq:;
  EventLog_Add(
    a.getAttribute("FormId"),
    0,
    a,
    BaseControl_GetOriginalId(a),
    "1",
    b,
    true,
    true,
    true,
    0,
    1
  );
  return a;
}
var boolInInsert = false;
InlinePicture.InvokeInsert = InlinePicture_InvokeInsert;
function InlinePicture_InvokeInsert(b, h) {
  ULSrLq:;
  b = PictureControl_EnsureControl(b);
  var d = b.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(d) != 1
    )
  )
    return;
  SelectionService_RememberFocus(b, h);
  var c = ViewDataNode_GetViewDataNodeFromHtml(b);
  if (
    InlinePicture_IsNormalRendering(c) != InlinePicture_k_strRenderModeNormal ||
    !InlinePicture_IsAttachAllowed(c) ||
    ViewDataNode_IsDisabled(c) ||
    c[1][5]
  )
    return;
  Dialog.funcCallbackOnClose = null;
  var a = [],
    g = Dialog.strFormId;
  Dialog.strFormId = d;
  a[1] = IntlCoreStrings.k_strInlinePictureDialogTitle;
  a[3] = CurrentFormData_Direction(d);
  a[5] = Dialog_TextAlignmentStyle();
  var f = [
      0,
      IntlCoreStrings.k_strUploadButtonText,
      "Dialog_InlinePictureServerRequest();Util_StopEventProprogation(event);return false;",
      "",
      "submit",
    ],
    e = [
      1,
      IntlCoreStrings.k_strCancelButtonText,
      "Dialog_OnTerminateButton();Util_StopEventProprogation(event);return false;",
      "",
      "button",
    ];
  a[2] = [f, e];
  a[11] = IntlCoreStrings.k_strInlinePictureDialogMessage;
  a[12] = IntlCoreStrings.k_strInlinePictureDialogExample;
  Dialog.strFormId = g;
  return Dialog_ShowModalDialogEx(d, "InlinePictureDialog", 1, 1, false, a, b);
}
InlinePicture.InvokeRemove = InlinePicture_InvokeRemove;
function InlinePicture_InvokeRemove(a, e) {
  ULSrLq:;
  var c = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(c) != 1
    )
  )
    return;
  SelectionService_RememberFocus(a, e);
  SelectionService_RememberScrollPosition();
  var b = ViewDataNode_GetViewDataNodeFromHtml(a);
  if (
    InlinePicture_GetHasAttachment(b) &&
    InlinePicture_IsNormalRendering(b) == InlinePicture_k_strRenderModeNormal &&
    InlinePicture_IsRemoveAllowed(b) &&
    !ViewDataNode_IsDisabled(b) &&
    !b[1][5]
  ) {
    var d = UserMessages_ShowConfirmMessage(
      IntlCoreStrings.k_strFileAttachmentPromptRemoveFile,
      true
    );
    if (d) {
      a = PictureControl_EnsureControl(a);
      a = InlinePicture_SetValueOfControl(a, "");
    }
  }
  SelectionService_RestoreFocus(c);
}
InlinePicture.IsFocusable = InlinePicture_IsFocusable;
function InlinePicture_IsFocusable() {
  ULSrLq:;
  return true;
}
InlinePicture.OnMouseOver = InlinePicture_OnMouseOver;
function InlinePicture_OnMouseOver(a, c) {
  ULSrLq:;
  var b = ViewDataNode_GetViewDataNodeFromHtml(a);
  InlinePicture_GetHasAttachment(b) &&
    PictureControl_ShowPictureIcon(a, b, true);
  LeafControl_OnMouseOver(a, c);
}
InlinePicture.OnMouseOut = InlinePicture_OnMouseOut;
function InlinePicture_OnMouseOut(a, c) {
  ULSrLq:;
  var b = ViewDataNode_GetViewDataNodeFromHtml(a);
  InlinePicture_GetHasAttachment(b) &&
    PictureControl_ShowPictureIcon(a, b, false);
  LeafControl_OnMouseOut(a, c);
}
InlinePicture.OnKeyPress = InlinePicture_OnKeyPress;
function InlinePicture_OnKeyPress(a, b) {
  ULSrLq:;
  a = PictureControl_EnsureControl(a);
  var d = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(d) != 1
    )
  )
    return true;
  var c = KeyboardService_GetVirtualKey(b);
  if (c == 19) {
    InlinePicture_InvokeRemove(a, b);
    Util_StopEventProprogation(b);
    return false;
  } else if (c == 1 || c == 18) {
    InlinePicture_InvokeInsert(a, b);
    Util_StopEventProprogation(b);
    return false;
  } else return LeafControl.OnKeyPress(a, b);
}
function InlinePicture_OnClick(a, b) {
  ULSrLq:;
  a = PictureControl_EnsureControl(a);
  var c = LeafControl.OnClick(a, b);
  InlinePicture_InvokeInsert(a, b);
  return c;
}
function InlinePicture_IsNormalRendering(a) {
  ULSrLq:;
  return a[1][2][0];
}
function InlinePicture_IsAttachAllowed(a) {
  ULSrLq:;
  return a[1][2][1];
}
function InlinePicture_IsRemoveAllowed(a) {
  ULSrLq:;
  return a[1][2][2];
}
function InlinePicture_GetHasAttachment(a) {
  ULSrLq:;
  return a[1][2][3];
}
function InlinePicture_GetSrc(a) {
  ULSrLq:;
  var c = InlinePicture_GetHasAttachment(a);
  if (c) {
    var b = a.FormId;
    return (
      CurrentFormData_SiteUrl(b) +
      "/_layouts/FormServerAttachments.aspx?dl=ip&fid=" +
      encodeURIComponent(b) +
      "&sid=" +
      encodeURIComponent(CurrentFormData.SolutionId(b)) +
      "&key=" +
      encodeURIComponent(a[1][2][4])
    );
  }
  return "";
}
InlinePicture.OnAfterCreate = InlinePicture_OnAfterCreate;
function InlinePicture_OnAfterCreate(a) {
  ULSrLq:;
  PictureControl_ShowErrorVisuals(a);
  PictureControl_EnsureHrefInCorrectStateAfterRender(a);
  if (ViewDataNode_IsHidden(a)) {
    var b = document.getElementById(a[9]);
    b != null && PictureControl_SetHidden(a, b, true);
  }
}
InlinePicture.Render = InlinePicture_Render;
function InlinePicture_Render(b, d, e, c) {
  ULSrLq:;
  var a;
  if (View_IsPrintingTemplate(b)) a = InlinePicture_PrintTemplate;
  else a = InlinePicture_Template;
  PictureControl_RenderHelper(b, d, e, c, a);
}
InlinePicture.ResolveSpecialValue = InlinePicture_ResolveSpecialValue;
function InlinePicture_ResolveSpecialValue(c, b, d, e) {
  ULSrLq:;
  var a = null;
  switch (c) {
    case 10:
      a = InlinePicture_GetSrc(b);
      break;
    default:
      a = PictureControl_ResolveSpecialValue(c, b, d, e);
  }
  return a;
}
InlinePicture.SetDisable = PictureControl_SetDisable;
InlinePicture.GetFormatting = BaseControl.GetFormatting;
InlinePicture.Highlight = LeafControl.Highlight;
InlinePicture.IsSelected = LeafControl.IsSelected;
InlinePicture.IsValid = LeafControl.IsValid;
InlinePicture.OnBlur = LeafControl.OnBlur;
InlinePicture.OnChange = LeafControl.OnChange;
InlinePicture.OnClick = InlinePicture_OnClick;
InlinePicture.OnFocus = LeafControl_FocusParentInfoPathControl;
InlinePicture.OnMouseDown = LeafControl.OnMouseDown;
InlinePicture.OnMouseUp = LeafControl.OnMouseUp;
InlinePicture.OnKeyDown = InlinePicture_OnKeyPress;
InlinePicture.RemoveHighlight = LeafControl.RemoveHighlight;
InlinePicture.RestoreFocus = PictureControl_RestoreFocus;
InlinePicture.Select = LeafControl.Select;
InlinePicture.SetHidden = PictureControl_SetHidden;
InlinePicture.SetDisplay = PictureControl_SetDisplay;
InlinePicture.UnSelect = LeafControl.UnSelect;
InlinePicture.MoveStyles = PictureControl_MoveStyles;
InlinePicture.GetAsteriskOffsetNormal = LeafControl.GetAsteriskOffsetNormal;
InlinePicture.GetAsteriskOffsetTop = LeafControl.GetAsteriskOffsetTop;
InlinePicture.GetErrorMessageOffset = LeafControl.GetErrorMessageOffset;
InlinePicture.GetErrorMessageOffsetTop = LeafControl.GetErrorMessageOffsetTop;
function MultiSelectListBoxCollection() {}
MultiSelectListBoxCollection.ListIndexWhileRendering = 0;
MultiSelectListBoxCollection.Render = MultiSelectListBoxCollection_Render;
function MultiSelectListBoxCollection_Render(c, b, i, a) {
  ULSrLq:;
  ErrorVisualization_ClearViewDataNodeErrorVisualizationState(c);
  var d = c.OriginalId;
  if (typeof d == "undefined" || d == "") {
    if (i == null) d = b[1];
    else d = i + "_" + b[1];
    ViewDataNode_SetHtmlId(c, d);
  }
  a.push("<span ");
  a.push('style="vertical-align:bottom;text-decoration:none;');
  if (MultiSelectListBoxCollection_HasWidth100Percent(b))
    a.push("display:block;");
  else a.push("display:inline-block;");
  a.push('"');
  var g = b[6];
  if (g.length != 14) return;
  var h = MultiSelectListBoxCollection_GetWrappedCssClasses(b);
  if (!Util_IsNullOrEmptyString(h)) {
    a.push('class="');
    a.push(h);
    a.push('" ');
  }
  a.push(">");
  b[14] &&
    MultiSelectListBoxCollection.GetSelectionRequired(b) &&
    BaseControl_OutputControlHelpingSpan("ErrorTip", a, c, d);
  var k = View.GetTemplateType(c.FormId),
    e;
  if (k == 1) e = MultiSelectListBoxCollectionPrint_Template;
  else e = MultiSelectListBoxCollection_Template;
  for (var f = 0; f < e.length; f++)
    var j = e[f],
      l = IP_Collection.RenderSpecialValueContainer(j, c, b, d, a, g, d);
  b[13] &&
    MultiSelectListBoxCollection_GetSelectionRequired(b) &&
    BaseControl_OutputControlHelpingSpan("Asterisk", a, c, d);
  b[15] &&
    MultiSelectListBoxCollection.IsSigned(c) &&
    BaseControl_OutputControlHelpingSpan("SignIcon", a, c, d);
  a.push("</span>");
  BaseControl_RenderDivForScrollWidthCalculation(a, c.FormId);
}
MultiSelectListBoxCollection.ResolveSpecialValue = MultiSelectListBoxCollection_ResolveSpecialValue;
function MultiSelectListBoxCollection_ResolveSpecialValue(h, c, b, e) {
  ULSrLq:;
  var a = null,
    d = MultiSelectListBoxCollection.GetOptionArray(c);
  switch (h) {
    case 10:
      for (var f = [], g = 0; g < d.length / 2; g++) {
        var j = MultiSelectListBoxCollection.RenderPopulatedItem(g, c, b, e);
        f.push(j);
      }
      var i = MultiSelectListBoxCollection.RenderPlaceholderIfNeeded(c, b, e);
      f.push(i);
      a = f.join("");
      break;
    case 11:
      a = d[MultiSelectListBoxCollection.ListIndexWhileRendering * 2];
      break;
    case 12:
      a = d[MultiSelectListBoxCollection.ListIndexWhileRendering * 2 + 1];
      break;
    case 13:
      a = d[MultiSelectListBoxCollection.ListIndexWhileRendering * 2 + 1];
      break;
    case 14:
      a = b[17];
      break;
    case 15:
      a = IntlCoreStrings.k_strMSLBCustomCheckboxTitle;
      break;
    case 16:
      a = MultiSelectListBoxCollection_GetTitle(b);
      break;
    case 17:
      a = MultiSelectListBoxCollection_GetQuirksSpanStyle(b, c.FormId);
      break;
    default:
      a = StructuralEditingControl.ResolveSpecialValue(h, c, b, e);
  }
  return a;
}
MultiSelectListBoxCollection.RenderPopulatedItem = MultiSelectListBoxCollection_RenderPopulatedItem;
function MultiSelectListBoxCollection_RenderPopulatedItem(h, c, e, j) {
  ULSrLq:;
  var a = [],
    m = c.FormId,
    g = View.GetTemplateType(m),
    b,
    l = MultiSelectListBoxCollection.GetOptionArray(c),
    f = MultiSelectListBoxCollection.GetItemChecked(c, l[h * 2]);
  if (g == 1) {
    if (!f) return "";
    b = MultiSelectListBoxPopulatedItemPrint_Template;
  } else b = MultiSelectListBoxPopulatedItem_Template;
  a.push(b[0]);
  if (f) a.push(" checked ");
  else g == 1 && a.push(" unchecked=true ");
  var k = IP_Collection.GetXmlToEdit(e);
  if (Util_IsNullOrEmptyString(k)) {
    a.push("disabled");
    a.push('="true"');
  }
  for (var d = 1; d < b.length; d++) {
    var i = b[d];
    MultiSelectListBoxCollection.ListIndexWhileRendering = h;
    if (!BaseControl.RenderTemplateItem(i, c, e, j, a)) return "";
  }
  return a.join("");
}
MultiSelectListBoxCollection.RenderPlaceholderIfNeeded = MultiSelectListBoxCollection_RenderPlaceholderIfNeeded;
function MultiSelectListBoxCollection_RenderPlaceholderIfNeeded(c, d, k) {
  ULSrLq:;
  if (!MultiSelectListBoxCollection.GetAllowCustom(d)) return "";
  var m = View.GetTemplateType(c.FormId);
  if (m == 1) return "";
  for (
    var j = MultiSelectListBoxCollection.GetDataViewPath(d),
      f = Expr.vpath_SelectViewPath(c, j),
      h = true,
      e = 0;
    e < f.length;
    e++
  ) {
    var n = f[e];
    if (!MultiSelectListBoxItem.IsPopulatedItem(n)) {
      h = false;
      break;
    }
  }
  if (h) {
    for (
      var a = [], g = MultiSelectListBoxCustomPlaceholder_Template, b = 0;
      b < g.length;
      b++
    ) {
      var i = g[b];
      if (!BaseControl.RenderTemplateItem(i, c, d, k, a)) return "";
      var l = IP_Collection.GetXmlToEdit(d);
      if (
        b == 2 &&
        (MultiSelectListBoxCollection.IsDisabled(c) ||
          Util_IsNullOrEmptyString(l))
      ) {
        a.push(" ");
        a.push("disabled");
        a.push('="true"');
      }
      if (b == 5 && MultiSelectListBoxCollection.IsDisabled(c)) {
        a.push(" ");
        a.push("readOnly");
        a.push('="true"');
      }
    }
    return a.join("");
  }
  return "";
}
MultiSelectListBoxCollection.RefreshControlData = MultiSelectListBoxCollection_RefreshControlData;
function MultiSelectListBoxCollection_RefreshControlData(a, w) {
  ULSrLq:;
  var c = a.SnippetElement,
    n = MultiSelectListBoxCollection.GetContentViewPath(c),
    o = MultiSelectListBoxCollection.GetDisplayViewPath(c),
    q = MultiSelectListBoxCollection.GetValueViewPath(c),
    v = null;
  if (n != null && o != null && q != null) {
    var r = Expr.vpath_SelectViewPath(a, n);
    v = MultiSelectListBoxCollection.GetOptionArray(a);
    var b = [],
      y = MultiSelectListBoxCollection.GetIsUnique(c),
      f = a.SnippetElement[7][1],
      m = ViewDataNode_DoesNodeHaveFilter(f),
      k = null;
    if (m) k = ViewDataNode_GetFilterFunction(f);
    for (var h = 0; h < r.length; h++) {
      var s = r[h],
        d = Expr.vpath_SelectViewPath(s, o),
        g = Expr.vpath_SelectViewPath(s, q),
        j = "";
      if (g != null && g.length > 0 && g[0] != null)
        j = Util.Trim(ViewDataNode_GetDatum(g[0]).GetValue());
      var i = "";
      if (d != null && d.length > 0 && d[0] != null)
        i = Util.Trim(ViewDataNode_GetDatum(d[0]).GetValue());
      var p = true;
      if (y)
        for (var e = 1; e < b.length; e = e + 2)
          if (i == b[e]) {
            p = false;
            break;
          }
      if (p) {
        var A = true;
        if (m)
          if (ViewDataNode_GetFilterComplexity(f) && null != k) {
            var u = ViewDataNode_GetFilterSourceToTargetViewPath(f),
              z = Expr.vpath_SelectViewPath(a, u);
            Expr.vpath_SelectViewPath(a, u);
            if (k(j, z[h])) {
              b.push(j);
              b.push(i);
            }
          } else {
            EventLog_Add(
              w.getAttribute("FormId"),
              30,
              w,
              a.OriginalId,
              a.OriginalId,
              "",
              true,
              false,
              false,
              0,
              0
            );
            return;
          }
        else {
          b.push(j);
          b.push(i);
        }
      }
    }
    for (
      var x = MultiSelectListBoxCollection.GetDataViewPath(c),
        t = Expr.vpath_SelectViewPath(a, x),
        B = true,
        l = 0;
      l < t.length;
      l++
    )
      t[l]._boolDirty = true;
    MultiSelectListBoxCollection.SetOptionArray(a, b);
    MultiSelectListBoxCollection.Repopulate(a, b.length - v.length);
  } else MultiSelectListBoxCollection.Repopulate(a, 0);
}
MultiSelectListBoxCollection.Repopulate = MultiSelectListBoxCollection_Repopulate;
function MultiSelectListBoxCollection_Repopulate(c, n) {
  ULSrLq:;
  for (
    var j = c.SnippetElement,
      m = c._objViewDataNodeParent,
      k = m.OriginalId,
      q = document.getElementById(c[9]),
      e = MultiSelectListBoxCollection.GetOptionArray(c),
      d = MultiSelectListBoxCollection_GetPrepopulatedItemSpan(q),
      a = 0;
    a < e.length / 2 || a < d.childNodes.length;
    a++
  ) {
    var i = d.childNodes[a],
      b = null;
    if (i != null)
      if (a >= (e.length - n) / 2 || a >= e.length / 2) {
        d.removeChild(i);
        a--;
        continue;
      } else {
        var f = i.firstChild;
        b = f.firstChild;
        b.value = e[a * 2];
        b.title = e[a * 2 + 1];
        var g = f.childNodes[1];
        if (g == null) {
          g = document.createTextNode("");
          f.appendChild(g);
        }
        g.nodeValue = e[a * 2 + 1];
        for (var h = f.childNodes.length - 1; h > 1; h--)
          f.removeChild(f.childNodes[h]);
      }
    else {
      var o = MultiSelectListBoxCollection_RenderPopulatedItem(a, c, j, k);
      MultiSelectListBoxCollection.AppendChildHtmlString(d, o);
      var p = d.lastChild;
      b = p.firstChild.firstChild;
    }
    if (b != null)
      if (MultiSelectListBoxCollection.GetItemChecked(c, b.value))
        b.checked = true;
      else b.checked = false;
  }
  var l = MultiSelectListBoxCollection.RenderPlaceholderIfNeeded(c, j, k);
  l != "" && MultiSelectListBoxCollection.AppendChildHtmlString(d, l);
}
MultiSelectListBoxCollection.AppendChildHtmlString = MultiSelectListBoxCollection_AppendChildHtmlString;
function MultiSelectListBoxCollection_AppendChildHtmlString(b, c) {
  ULSrLq:;
  var a = document.createElement("span");
  a = b.appendChild(a);
  a.innerHTML = c;
  b.appendChild(a.firstChild);
  b.removeChild(a);
}
MultiSelectListBoxCollection.GetDataViewPath = MultiSelectListBoxCollection_GetDataViewPath;
function MultiSelectListBoxCollection_GetDataViewPath(a) {
  ULSrLq:;
  return a[6][4][0];
}
MultiSelectListBoxCollection.GetIsDynamic = MultiSelectListBoxCollection_GetIsDynamic;
function MultiSelectListBoxCollection_GetIsDynamic(a) {
  ULSrLq:;
  return a[6][4][1];
}
MultiSelectListBoxCollection.GetIsUnique = MultiSelectListBoxCollection_GetIsUnique;
function MultiSelectListBoxCollection_GetIsUnique(a) {
  ULSrLq:;
  return a[6][4][2];
}
MultiSelectListBoxCollection.GetAllowCustom = MultiSelectListBoxCollection_GetAllowCustom;
function MultiSelectListBoxCollection_GetAllowCustom(a) {
  ULSrLq:;
  return a[6][4][3];
}
MultiSelectListBoxCollection.GetContentViewPath = MultiSelectListBoxCollection_GetContentViewPath;
function MultiSelectListBoxCollection_GetContentViewPath(a) {
  ULSrLq:;
  return a[6][4][4];
}
MultiSelectListBoxCollection.GetDisplayViewPath = MultiSelectListBoxCollection_GetDisplayViewPath;
function MultiSelectListBoxCollection_GetDisplayViewPath(a) {
  ULSrLq:;
  return a[6][4][5];
}
MultiSelectListBoxCollection.GetValueViewPath = MultiSelectListBoxCollection_GetValueViewPath;
function MultiSelectListBoxCollection_GetValueViewPath(a) {
  ULSrLq:;
  return a[6][4][6];
}
function MultiSelectListBoxCollection_GetTitle(a) {
  ULSrLq:;
  return a[6][5];
}
function MultiSelectListBoxCollection_GetQuirksSpanStyle(b, c) {
  ULSrLq:;
  var a = [];
  a.push("margin:0px;");
  if (UserAgentInfo.strBrowser == 1) {
    a.push("display:inline-block;");
    CurrentFormData_IsV4UI(c) && a.push("width:100%;");
  } else
    MultiSelectListBoxCollection_HasWidth100Percent(b) &&
      a.push("display:inline-block;width:100%;");
  return a.join("");
}
MultiSelectListBoxCollection.GetSelectionRequired = MultiSelectListBoxCollection_GetSelectionRequired;
function MultiSelectListBoxCollection_GetSelectionRequired(a) {
  ULSrLq:;
  return a[6][4][7];
}
function MultiSelectListBoxCollection_HasWidth100Percent(a) {
  ULSrLq:;
  return a[6][4][8];
}
MultiSelectListBoxCollection.GetOptionArray = MultiSelectListBoxCollection_GetOptionArray;
function MultiSelectListBoxCollection_GetOptionArray(a) {
  ULSrLq:;
  return Collection_GetCollectionContent(a);
}
MultiSelectListBoxCollection.SetOptionArray = MultiSelectListBoxCollection_SetOptionArray;
function MultiSelectListBoxCollection_SetOptionArray(a, b) {
  ULSrLq:;
  a[1][2] = b;
}
MultiSelectListBoxCollection.IsDisabled = MultiSelectListBoxCollection_IsDisabled;
function MultiSelectListBoxCollection_IsDisabled(a) {
  ULSrLq:;
  return (
    a[3] ||
    IP_Collection.IsReadOnly(a) ||
    MultiSelectListBoxCollection_GetRenderDisabledDueToMissingBoundXmlNode(a)
  );
}
MultiSelectListBoxCollection.GetRenderDisabledDueToMissingBoundXmlNode = MultiSelectListBoxCollection_GetRenderDisabledDueToMissingBoundXmlNode;
function MultiSelectListBoxCollection_GetRenderDisabledDueToMissingBoundXmlNode(
  a
) {
  ULSrLq:;
  return a[1][4];
}
MultiSelectListBoxCollection.GetItemChecked = MultiSelectListBoxCollection_GetItemChecked;
function MultiSelectListBoxCollection_GetItemChecked(c, b) {
  ULSrLq:;
  var e = c.SnippetElement,
    f = MultiSelectListBoxCollection.GetDataViewPath(e),
    d = Expr.vpath_SelectViewPath(c, f);
  b = Util.Trim(b);
  for (var a = 0; a < d.length; a++) {
    var g = d[a],
      h = Util.Trim(ViewDataNode_GetDatum(g).GetValue());
    if (h == b) return true;
  }
  return false;
}
MultiSelectListBoxCollection.OnClick = MultiSelectListBoxCollection_OnClick;
function MultiSelectListBoxCollection_OnClick(m, u) {
  ULSrLq:;
  var c = m,
    a = MultiSelectListBoxCollection_GetCollectionControlFromCheckBox(m);
  if (a.getAttribute("ScriptClass") != "MultiSelectListBoxCollection")
    return false;
  var t = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(t) != 1
    )
  )
    return false;
  SelectionService.RememberFocus(a, u);
  var b = ViewDataNode_GetViewDataNodeFromHtml(a);
  if (MultiSelectListBoxCollection.IsDisabled(b)) return false;
  var g = MultiSelectListBoxCollection_GetPrepopulatedItemSpan(a),
    d = -1;
  if (c.type == "checkbox" && g != null) {
    var j = c.parentNode.childNodes[1],
      r = j != null && j.tagName != null;
    if (!r)
      for (var p = c.parentNode.parentNode, f = 0; f < g.childNodes.length; f++)
        if (g.childNodes[f] == p) {
          d = f;
          break;
        }
  }
  var i = b.SnippetElement,
    s = IP_Collection.GetXmlToEdit(i),
    e = false;
  if (c.checked == true || c.type == "text")
    e = TextList.Insert(a, a, c.value, "");
  else
    for (
      var o = MultiSelectListBoxCollection.GetDataViewPath(i),
        k = Expr.vpath_SelectViewPath(b, o),
        q = Util.Trim(c.value),
        h = 0;
      h < k.length;
      h++
    ) {
      var l = k[h],
        v = Util.Trim(ViewDataNode_GetDatum(l).GetValue());
      if (v == q) {
        var n = l._objViewDataNodeParent;
        e = StructuralEditingControl_Remove(
          a.getAttribute("FormId"),
          document.getElementById(n[9]),
          s,
          4,
          false
        );
      }
    }
  if (e && d > -1) {
    var x = document.getElementById(b[9]);
    try {
      MultiSelectListBoxCollection.FocusCheckboxByIndex(b, a, d);
      MultiSelectListBoxCollection.RestoreScrollPosition(a, b);
    } catch (w) {}
  } else MultiSelectListBoxCollection.SetCheckboxToFocus(b, d);
  return e;
}
MultiSelectListBoxCollection.IsFocusable = MultiSelectListBoxCollection_IsFocusable;
function MultiSelectListBoxCollection_IsFocusable() {
  ULSrLq:;
  return true;
}
MultiSelectListBoxCollection.OnFocus = MultiSelectListBoxCollection_OnFocus;
function MultiSelectListBoxCollection_OnFocus(a, b) {
  ULSrLq:;
  BaseControl_OnFocus(
    MultiSelectListBoxCollection_GetCollectionControlFromCheckBox(a),
    b
  );
}
MultiSelectListBoxCollection.OnScroll = MultiSelectListBoxCollection_OnScroll;
function MultiSelectListBoxCollection_OnScroll(a) {
  ULSrLq:;
  var d = GlobalFormData.Get(a.getAttribute("FormId")),
    b = d.mslbCollectionScrollPosition,
    c = a.id,
    e = a.scrollTop;
  if (e == 0) b[c] = null;
  else b[c] = a.scrollTop;
}
MultiSelectListBoxCollection.RestoreScrollPosition = MultiSelectListBoxCollection_RestoreScrollPosition;
function MultiSelectListBoxCollection_RestoreScrollPosition(e, b) {
  ULSrLq:;
  var d = GlobalFormData.Get(b.FormId),
    c = d.mslbCollectionScrollPosition,
    f = b[9],
    a = c[f];
  if (a != null && a > 0) e.scrollTop = a;
}
MultiSelectListBoxCollection.RestoreFocus = MultiSelectListBoxCollection_RestoreFocus;
function MultiSelectListBoxCollection_RestoreFocus(a) {
  ULSrLq:;
  SelectionService.Select(null);
  try {
    var e = MultiSelectListBoxCollection_GetPrepopulatedItemSpan(a),
      b = ViewDataNode_GetViewDataNodeFromHtml(a),
      c = MultiSelectListBoxCollection.GetCheckboxToFocus(b);
    MultiSelectListBoxCollection.FocusCheckboxByIndex(b, a, c);
  } catch (d) {}
}
MultiSelectListBoxCollection.IsInFocusableState = MultiSelectListBoxCollection_IsInFocusableState;
function MultiSelectListBoxCollection_IsInFocusableState(b) {
  ULSrLq:;
  var a;
  if (!BaseControl_IsInFocusableState(b)) return false;
  a = document.getElementById(b[9]);
  return a != null && MultiSelectListBoxCollection_GetFirstCheckBox(a) != null;
}
MultiSelectListBoxCollection.FocusCheckboxByValue = MultiSelectListBoxCollection_FocusCheckboxByValue;
function MultiSelectListBoxCollection_FocusCheckboxByValue(c, d, h) {
  ULSrLq:;
  for (
    var i = MultiSelectListBoxCollection_GetPrepopulatedItemSpan(d),
      b = i.childNodes,
      g = b.length,
      a = 0;
    a < g;
    a++
  ) {
    var f = b[a].firstChild.childNodes[1];
    if (f != null && f.nodeValue == h) {
      var e = b[a].firstChild.firstChild;
      MultiSelectListBoxCollection_RestoreScrollPosition(d, c);
      e.focus();
      MultiSelectListBoxCollection.OnFocus(e, null);
    }
  }
  MultiSelectListBoxCollection.SetCheckboxToFocus(c, -1);
}
MultiSelectListBoxCollection.FocusCheckboxByIndex = MultiSelectListBoxCollection_FocusCheckboxByIndex;
function MultiSelectListBoxCollection_FocusCheckboxByIndex(a, b, f) {
  ULSrLq:;
  var e = MultiSelectListBoxCollection_GetPrepopulatedItemSpan(b),
    d = e.childNodes,
    c = d[f].firstChild.firstChild;
  MultiSelectListBoxCollection_RestoreScrollPosition(b, a);
  c.focus();
  MultiSelectListBoxCollection.OnFocus(c, null);
  MultiSelectListBoxCollection.SetCheckboxToFocus(a, -1);
}
MultiSelectListBoxCollection.SetCheckboxToFocus = MultiSelectListBoxCollection_SetCheckboxToFocus;
function MultiSelectListBoxCollection_SetCheckboxToFocus(a, c) {
  ULSrLq:;
  var b = GlobalFormData.Get(a.FormId);
  b.mslbCollectionCheckboxToFocus = c;
}
MultiSelectListBoxCollection.GetCheckboxToFocus = MultiSelectListBoxCollection_GetCheckboxToFocus;
function MultiSelectListBoxCollection_GetCheckboxToFocus(b) {
  ULSrLq:;
  var a = GlobalFormData.Get(b.FormId);
  if (a.mslbCollectionCheckboxToFocus > -1)
    return a.mslbCollectionCheckboxToFocus;
  else return 0;
}
MultiSelectListBoxCollection.OnAfterCreate = MultiSelectListBoxCollection_OnAfterCreate;
function MultiSelectListBoxCollection_OnAfterCreate(b) {
  ULSrLq:;
  var a = document.getElementById(b[9]);
  if (a == null) return;
  var d = b.SnippetElement;
  MultiSelectListBoxCollection.GetSelectionRequired(d) &&
    !MultiSelectListBoxCollection_IsValid(b) &&
    ErrorVisualization_ShowAsterisk(a, b);
  MultiSelectListBoxCollection_RestoreScrollPosition(a, b);
  BaseControl__ApplyCssClasses(a, 0);
  var c = b.FormId,
    e = View.GetTemplateType(c);
  if (e == 1)
    if (!(UserAgentInfo.strBrowser == 1 && !CurrentFormData_IsV4UI(c))) {
      var f = BaseControl_GetHeight(a);
      a.style.height = "auto";
      a.style.minHeight = f + "px";
    }
  MultiSelectListBoxCollection_MoveStyles(a);
  BaseControl_EnsureScrollWidth(b.FormId);
}
MultiSelectListBoxCollection.IsValid = MultiSelectListBoxCollection_IsValid;
function MultiSelectListBoxCollection_IsValid(d) {
  ULSrLq:;
  var e = d.SnippetElement,
    c = true;
  if (MultiSelectListBoxCollection.GetSelectionRequired(e)) {
    c = false;
    for (var b = ViewDataNode_GetChildNodes(d), a = 0; a < b.length; a++)
      if (
        !b[a]._boolDeleted &&
        Util_IsNonEmptyString(ViewDataNode_GetDatum(b[a]).GetValue())
      ) {
        c = true;
        break;
      }
  }
  return c;
}
MultiSelectListBoxCollection.MoveStyles = MultiSelectListBoxCollection_MoveStyles;
function MultiSelectListBoxCollection_MoveStyles(h) {
  ULSrLq:;
  var d = MultiSelectListBoxCollection_GetWrappingSpan(h);
  if (d != null) {
    var c = ViewDataNode_GetViewDataNodeFromHtml(h),
      b = c[2],
      f = c.SnippetElement,
      i = f[3],
      a = "",
      j =
        CurrentFormData_IsV4UI(c.FormId) &&
        UserAgentInfo.strBrowser == 1 &&
        UserAgentInfo.intBrowserRmj < 8;
    if (j && b != null && b >= 0) {
      var g = i[5].split(" ");
      if (g != null) a = " " + g[b];
    }
    var e = MultiSelectListBoxCollection_GetWrappedCssClasses(f);
    if (!Util_IsNullOrEmptyString(e)) d.className = e + a;
    else d.className = a;
  }
}
MultiSelectListBoxCollection.SetDisplay = MultiSelectListBoxCollection_SetDisplay;
function MultiSelectListBoxCollection_SetDisplay(c, b) {
  ULSrLq:;
  var a = MultiSelectListBoxCollection_GetWrappingSpan(c);
  a != null && Util_SetStyleDisplay(a, b);
}
MultiSelectListBoxCollection.GetWrappingSpan = MultiSelectListBoxCollection_GetWrappingSpan;
function MultiSelectListBoxCollection_GetWrappingSpan(a) {
  ULSrLq:;
  var b = null;
  if (a != null && a.parentNode != null && a.parentNode.parentNode != null)
    b = a.parentNode.parentNode;
  return b;
}
MultiSelectListBoxCollection.GetWrappedCssClasses = MultiSelectListBoxCollection_GetWrappedCssClasses;
function MultiSelectListBoxCollection_GetWrappedCssClasses(b) {
  ULSrLq:;
  var a = b[6];
  if (a.length != 14) return null;
  if (a[9] != null) return a[9][0];
  return null;
}
MultiSelectListBoxCollection.GetAsteriskOffsetNormal = MultiSelectListBoxCollection_GetAsteriskOffsetNormal;
function MultiSelectListBoxCollection_GetAsteriskOffsetNormal(b) {
  ULSrLq:;
  var a = b[6];
  if (a.length != 14) return null;
  return a[10];
}
MultiSelectListBoxCollection.GetAsteriskOffsetTop = MultiSelectListBoxCollection_GetAsteriskOffsetTop;
function MultiSelectListBoxCollection_GetAsteriskOffsetTop(b) {
  ULSrLq:;
  var a = b[6];
  if (a.length != 14) return null;
  return a[11];
}
MultiSelectListBoxCollection.GetErrorMessageOffset = MultiSelectListBoxCollection_GetErrorMessageOffset;
function MultiSelectListBoxCollection_GetErrorMessageOffset(b) {
  ULSrLq:;
  var a = b[6];
  if (a.length != 14) return null;
  return a[12];
}
MultiSelectListBoxCollection.GetErrorMessageOffsetTop = MultiSelectListBoxCollection_GetErrorMessageOffsetTop;
function MultiSelectListBoxCollection_GetErrorMessageOffsetTop(b) {
  ULSrLq:;
  var a = b[6];
  if (a.length != 14) return null;
  return a[13];
}
MultiSelectListBoxCollection.GetFirstCheckBox = MultiSelectListBoxCollection_GetFirstCheckBox;
function MultiSelectListBoxCollection_GetFirstCheckBox(c) {
  ULSrLq:;
  var b = null,
    a = MultiSelectListBoxCollection_GetPrepopulatedItemSpan(c);
  if (
    a != null &&
    a.firstChild != null &&
    a.firstChild.firstChild != null &&
    a.firstChild.firstChild.firstChild != null
  )
    b = a.firstChild.firstChild.firstChild;
  return b;
}
MultiSelectListBoxCollection.GetPrepopulatedItemSpan = MultiSelectListBoxCollection_GetPrepopulatedItemSpan;
function MultiSelectListBoxCollection_GetPrepopulatedItemSpan(a) {
  ULSrLq:;
  var b = null;
  if (a != null && a.firstChild != null && a.firstChild.childNodes[1] != null)
    b = a.firstChild.childNodes[1];
  return b;
}
MultiSelectListBoxCollection.GetCollectionControlFromCheckBox = MultiSelectListBoxCollection_GetCollectionControlFromCheckBox;
function MultiSelectListBoxCollection_GetCollectionControlFromCheckBox(b) {
  ULSrLq:;
  var a = b.parentNode.parentNode.parentNode.parentNode.parentNode;
  return a;
}
MultiSelectListBoxCollection.ShouldShiftAsteriskIn = MultiSelectListBoxCollection_ShouldShiftAsteriskIn;
function MultiSelectListBoxCollection_ShouldShiftAsteriskIn(a) {
  ULSrLq:;
  if (a.clientHeight < a.scrollHeight) {
    var d = a.getAttribute("FormId"),
      b = Snippet_GetSnippetElementFromHtml(a),
      c = BaseControl_GetDirection(d, b),
      e = c == 2;
    if (!e) return true;
  }
  return false;
}
MultiSelectListBoxCollection.Highlight = MultiSelectListBoxCollection_Highlight;
function MultiSelectListBoxCollection_Highlight(b, a) {
  ULSrLq:;
  ErrorVisualization_Highlight(b, a);
  BaseControl_Highlight(b, a);
}
MultiSelectListBoxCollection.RemoveHighlight = MultiSelectListBoxCollection_RemoveHighlight;
function MultiSelectListBoxCollection_RemoveHighlight(b, a) {
  ULSrLq:;
  ErrorVisualization_RemoveHighlight(b, a);
  BaseControl_RemoveHighlight(b, a);
}
MultiSelectListBoxCollection.IsRenderingErrorVisualizationSpansItself = MultiSelectListBoxCollection_IsRenderingErrorVisualizationSpansItself;
function MultiSelectListBoxCollection_IsRenderingErrorVisualizationSpansItself() {
  ULSrLq:;
  return true;
}
MultiSelectListBoxCollection.SetDisable = MultiSelectListBoxCollection_SetDisable;
function MultiSelectListBoxCollection_SetDisable(c, b) {
  ULSrLq:;
  if (UserAgentInfo.strBrowser == 1) BaseControl_SetDisable(c.firstChild, b);
  else
    for (
      var e = MultiSelectListBoxCollection_GetPrepopulatedItemSpan(c),
        k = e.childNodes.length,
        a = 0;
      a < k;
      a++
    ) {
      var l = e.childNodes[a],
        j = l.firstChild.firstChild;
      BaseControl_SetDisable(j, b);
    }
  var d = ViewDataNode_GetViewDataNodeFromHtml(c),
    i = d.SnippetElement;
  if (
    UserAgentInfo.strBrowser != 1 ||
    MultiSelectListBoxCollection.GetAllowCustom(i)
  )
    for (var f = ViewDataNode_GetChildNodes(d), a = 0; a < f.length; a++) {
      var h = f[a],
        g = ViewDataNode_GetChildNodes(h)[0];
      if (b) ViewDataNode_Disable(g);
      else ViewDataNode_UnDisable(g);
    }
}
MultiSelectListBoxCollection.IsSelected = BaseControl.IsSelected;
MultiSelectListBoxCollection.Select = BaseControl.Select;
MultiSelectListBoxCollection.UnSelect = BaseControl.UnSelect;
MultiSelectListBoxCollection.OnMouseOver = BaseControl.OnMouseOver;
MultiSelectListBoxCollection.OnMouseOut = BaseControl.OnMouseOut;
MultiSelectListBoxCollection.IsSigned = StructuralEditingControl.IsSigned;
function MultiSelectListBoxItem() {}
MultiSelectListBoxItem.Render = MultiSelectListBoxItem_Render;
function MultiSelectListBoxItem_Render(b, c, q, a) {
  ULSrLq:;
  var g = LeafControl_InitializeViewDataNode(q, b, c),
    d = null,
    p = b._objViewDataNodeParent,
    i = p._objViewDataNodeParent,
    k = i.SnippetElement,
    f = View.GetTemplateType(b.FormId),
    h = MultiSelectListBoxCollection.GetAllowCustom(k) && f != 1;
  if (h) d = MultiSelectListBoxCustom_Template;
  else {
    d = MultiSelectListBoxItem_Template;
    if (f == 1) d = MultiSelectListBoxItemPrint_Template;
  }
  if (f == 1) {
    var s =
      CurrentFormData_IsV4UI(b.FormId) &&
      !(UserAgentInfo.strBrowser == 1 && UserAgentInfo.intBrowserRmj < 8);
    if (s && MultiSelectListBoxItem.IsPopulatedItem(b)) return "";
  }
  var j = false;
  if (h) {
    var o = "text-decoration:inherit;";
    if (MultiSelectListBoxItem.IsPopulatedItem(b)) o += "display: none;";
    j = LeafControl_RenderBeginWrappingSpanEx(g, b, c, o, a);
  }
  a.push(d[0]);
  a.push(' id="');
  a.push(b.FormId);
  a.push("_");
  a.push(g);
  a.push('" FormId="');
  a.push(b.FormId);
  a.push('" OriginalId="');
  a.push(g);
  a.push('" ScriptClass="');
  a.push(c[2]);
  c[6][4] != null && a.push('" wrapped="true');
  var n = Collection_IsReadOnly(i);
  if (n) {
    a.push('" ');
    a.push("disabled");
    a.push('="true');
  }
  var m = BaseControl.GetDirection(b.FormId, c);
  if (m != 0) {
    a.push('" direction="');
    a.push(BaseControl.k_strDirection[m]);
  }
  var l = GlobalFormData.Get(b.FormId).viewDataHtmlMap.push(b);
  l--;
  a.push('" ViewDataNode = "');
  a.push("" + l);
  a.push('"');
  if (f == 1) a.push(' style="text-decoration:inherit;');
  else a.push(' style="white-space:nowrap;text-decoration:inherit;');
  if (
    MultiSelectListBoxItem.IsPopulatedItem(b) ||
    (Util_IsNullOrEmptyString(ViewDataNode_GetDatum(b).GetValue()) && !h)
  ) {
    ViewDataNode_SetHidden(b, true);
    a.push("display: none;");
  }
  a.push('" ');
  for (var e = 1; e < d.length; e++) {
    var t = BaseControl.RenderTemplateItem(d[e], b, c, g, a);
    if (e == 2 && f != 1) {
      var k = i.SnippetElement,
        r = IP_Collection.GetXmlToEdit(k);
      !Util.IsNonEmptyString(r) && a.push('" disabled="true');
    }
    if (h && e == 6) {
      if (n) {
        a.push('" ');
        a.push("readOnly");
        a.push('="true');
      }
      a.push('" class="');
      a.push(LeafControl_ComputeRenderStyle(b, c[3], c[13]));
    }
  }
  j && LeafControl_RenderEndWrappingSpan(g, b, c, a);
}
MultiSelectListBoxItem.IsPopulatedItem = MultiSelectListBoxItem_IsPopulatedItem;
function MultiSelectListBoxItem_IsPopulatedItem(c) {
  ULSrLq:;
  var f = c._objViewDataNodeParent,
    b = f._objViewDataNodeParent,
    g = b.SnippetElement,
    d = MultiSelectListBoxCollection.GetOptionArray(b),
    e = ViewDataNode_GetDatum(c).GetValue();
  if (e == "" && MultiSelectListBoxCollection.GetAllowCustom(g)) return false;
  for (var a = 0; a < d.length; a = a + 2) if (d[a] == e) return true;
  return false;
}
MultiSelectListBoxItem.ResolveSpecialValue = MultiSelectListBoxItem_ResolveSpecialValue;
function MultiSelectListBoxItem_ResolveSpecialValue(c, b, d, e) {
  ULSrLq:;
  var a = null;
  switch (c) {
    case 10:
    case 11:
    case 12:
      a = BaseControl_GetFormattedValue(b);
      break;
    case 13:
      a = IntlCoreStrings.k_strMSLBCustomTextboxTitle;
      break;
    case 14:
      a = IntlCoreStrings.k_strMSLBCustomCheckboxTitle;
      break;
    default:
      a = LeafControl.ResolveSpecialValue(c, b, d, e);
  }
  return a;
}
MultiSelectListBoxItem.SetCssClasses = MultiSelectListBoxItem_SetCssClasses;
function MultiSelectListBoxItem_SetCssClasses(c, i, h, a) {
  ULSrLq:;
  if (Util.IsNullOrEmptyString(c.innerHTML)) return;
  var g = a._objViewDataNodeParent,
    f = g._objViewDataNodeParent,
    e = f.SnippetElement,
    j = MultiSelectListBoxCollection.GetAllowCustom(e);
  if (j) {
    var d = MultiSelectListBoxItem_GetTextBox(c),
      b = BaseControl_ComputeCssClasses(a, i, h, true);
    if (d.className != b) d.className = b;
  }
}
MultiSelectListBoxItem.OnClick = MultiSelectListBoxItem_OnClick;
function MultiSelectListBoxItem_OnClick(a, h) {
  ULSrLq:;
  var i = a;
  a = a.parentNode;
  var e = ViewDataNode_GetViewDataNodeFromHtml(a),
    b = e._objViewDataNodeParent,
    d = b._objViewDataNodeParent,
    c = d.SnippetElement,
    f = IP_Collection.GetXmlToEdit(c);
  LeafControl.OnClick(a, h);
  var g = xCollectionControl_Remove(b[9], f);
  if (!g) i.checked = true;
}
MultiSelectListBoxItem.OnBlur = MultiSelectListBoxItem_OnBlur;
function MultiSelectListBoxItem_OnBlur(a, b) {
  ULSrLq:;
  a = a.parentNode;
  var c = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(c) != 1
    )
  )
    return;
  LeafControl.OnBlur(a, b);
  MultiSelectListBoxItem.OnChange(a, b);
}
MultiSelectListBoxItem.OnChange = MultiSelectListBoxItem_OnChange;
function MultiSelectListBoxItem_OnChange(c, i) {
  ULSrLq:;
  var a = ViewDataNode_GetViewDataNodeFromHtml(c),
    j = a.SnippetElement,
    b = ViewDataNode_GetDatum(a),
    e = MultiSelectListBoxItem_GetValueFromControl(c),
    d = false;
  if (
    b.GetValue() != "" &&
    DataInformation.GetDataType(
      b.GetDataInformation()
    ).GetUnderlyingDatatype() != AssumedValidDatatype &&
    (b.IsValid() || b.ValidateDataType())
  )
    if (b.ModifiedOnClient()) {
      var h = MultiSelectListBoxItem.GetFormatting(a),
        g = h.Format(b.GetValue());
      if (e != g || a._keyPressed) d = true;
    } else {
      g = a[1][0];
      if (e != g || a._keyPressed) d = true;
    }
  else if (e != b.GetValue() || a._keyPressed) d = true;
  if (d) {
    var f = MultiSelectListBoxItem.AddTextChangeEventLogEntry(c, a, e);
    LeafControl.OnChange(c, i);
    if (f) {
      f = ViewDataNode_OnControlChange(c);
      f && AccessibilityIFrame_RefreshIFrame();
    }
  }
}
MultiSelectListBoxItem.AddTextChangeEventLogEntry = MultiSelectListBoxItem_AddTextChangeEventLogEntry;
function MultiSelectListBoxItem_AddTextChangeEventLogEntry(d, a, b) {
  ULSrLq:;
  var c = MultiSelectListBoxItem.GetFormatting(a);
  return Util_AddTextChangeEventIntoEventLog(d, c, b, a);
}
MultiSelectListBoxItem.OnKeyPress = MultiSelectListBoxItem_OnKeyPress;
function MultiSelectListBoxItem_OnKeyPress(a, b) {
  ULSrLq:;
  a = a.parentNode;
  return TextList.OnKeyPress(a, b);
}
MultiSelectListBoxItem.OnKeyDown = MultiSelectListBoxItem_OnKeyDown;
function MultiSelectListBoxItem_OnKeyDown(a, b) {
  ULSrLq:;
  var c = a;
  a = a.parentNode;
  return TextList.OnKeyDown(a, c.value, b);
}
MultiSelectListBoxItem.IsFocusable = MultiSelectListBoxItem_IsFocusable;
function MultiSelectListBoxItem_IsFocusable() {
  ULSrLq:;
  return true;
}
MultiSelectListBoxItem.RestoreFocus = MultiSelectListBoxItem_RestoreFocus;
function MultiSelectListBoxItem_RestoreFocus(a) {
  ULSrLq:;
  var c = ViewDataNode_GetViewDataNodeFromHtml(a);
  if (ViewDataNode_IsHidden(c)) {
    var e = c._objViewDataNodeParent,
      d = e._objViewDataNodeParent;
    MultiSelectListBoxCollection_FocusCheckboxByValue(
      d,
      MultiSelectListBoxItem_GetCollection(a),
      MultiSelectListBoxItem_GetValueFromControl(a)
    );
  } else {
    var b = MultiSelectListBoxItem_GetFocusableItem(a);
    SelectionService.Select(b);
    try {
      b.focus();
      b.focus();
    } catch (f) {}
  }
}
MultiSelectListBoxItem.IsInFocusableState = MultiSelectListBoxItem_IsInFocusableState;
function MultiSelectListBoxItem_IsInFocusableState(b) {
  ULSrLq:;
  var c,
    a,
    d,
    g = b._objViewDataNodeParent,
    f = g._objViewDataNodeParent;
  if (ViewDataNode_IsHidden(f)) return false;
  c = document.getElementById(b[9]);
  var e = b.SnippetElement[17];
  if (c != null && e != null && e >= 0) {
    a = MultiSelectListBoxItem_GetFocusableItem(c);
    if (a != null) {
      d = a.style;
      if (d != null && d.disabled != true) return true;
    }
  }
  return false;
}
function MultiSelectListBoxItem_GetContainer(b) {
  ULSrLq:;
  var a = BaseControl_GetParentInfoPathControl(b);
  return a;
}
function MultiSelectListBoxItem_GetCollection(c) {
  ULSrLq:;
  var b = MultiSelectListBoxItem_GetContainer(c),
    a = BaseControl_GetParentInfoPathControl(b);
  return a;
}
MultiSelectListBoxItem.GetValueFromControl = MultiSelectListBoxItem_GetValueFromControl;
function MultiSelectListBoxItem_GetValueFromControl(a) {
  ULSrLq:;
  var b = "";
  if (a.childNodes[1] != null)
    if (a.childNodes[1].nodeType == 3) b = a.childNodes[1].data;
    else {
      var c = MultiSelectListBoxItem_GetTextBox(a);
      b = c.value;
    }
  return b;
}
MultiSelectListBoxItem.SetValueOfControl = MultiSelectListBoxItem_SetValueOfControl;
function MultiSelectListBoxItem_SetValueOfControl(b, d) {
  ULSrLq:;
  var e = ViewDataNode_GetViewDataNodeFromHtml(b),
    c = Util.GetPlainTextFromValueObject(d),
    a = b.childNodes[1];
  if (a == null) b.appendChild(document.createTextNode(c));
  else if (a.nodeType == 3) a.data = c;
  else a.value = c;
  return b;
}
MultiSelectListBoxItem.RefreshControlData = MultiSelectListBoxItem_RefreshControlData;
function MultiSelectListBoxItem_RefreshControlData(b, a) {
  ULSrLq:;
  MultiSelectListBoxItem_RefreshVisualState(a);
}
MultiSelectListBoxItem.RefreshVisualState = MultiSelectListBoxItem_RefreshVisualState;
function MultiSelectListBoxItem_RefreshVisualState(a) {
  ULSrLq:;
  if (a.tagName.toLowerCase() == "input") a = a.parentNode;
  var b = ViewDataNode_GetViewDataNodeFromHtml(a);
  if (
    MultiSelectListBoxItem.IsPopulatedItem(b) ||
    (Util_IsNullOrEmptyString(ViewDataNode_GetDatum(b).GetValue()) &&
      a.getAttribute("customItem") == "false")
  )
    ViewDataNode_SetHidden(b, true);
  else ViewDataNode_SetHidden(b, false);
  BaseControl.RefreshVisualState(a);
}
MultiSelectListBoxItem.OnAfterCreate = MultiSelectListBoxItem_OnAfterCreate;
function MultiSelectListBoxItem_OnAfterCreate(a) {
  ULSrLq:;
  var b = document.getElementById(a[9]);
  if (b == null) return;
  ViewDataNode_IsHidden(a) && MultiSelectListBoxItem_MoveStyles(b);
  if (!ViewDataNode_IsValid(a))
    if (ViewDataNode_IsBlank(a)) {
      var d = a._objViewDataNodeParent,
        c = d._objViewDataNodeParent,
        e = c.SnippetElement,
        f = MultiSelectListBoxCollection.GetAllowCustom(e);
      f && ErrorVisualization_ShowAsterisk(b, a);
    }
}
MultiSelectListBoxItem.OnFocus = MultiSelectListBoxItem_OnFocus;
function MultiSelectListBoxItem_OnFocus(a, b) {
  ULSrLq:;
  a = a.parentNode;
  LeafControl.OnFocus(MultiSelectListBoxItem_GetFocusableItem(a), b);
}
MultiSelectListBoxItem.GetFocusableItem = MultiSelectListBoxItem_GetFocusableItem;
function MultiSelectListBoxItem_GetFocusableItem(a) {
  ULSrLq:;
  var b = null;
  if (a.childNodes[1] == null || a.childNodes[1].nodeType == 3)
    b = a.childNodes[0];
  else b = a.childNodes[1];
  return b;
}
MultiSelectListBoxItem.OnMouseOver = MultiSelectListBoxItem_OnMouseOver;
function MultiSelectListBoxItem_OnMouseOver(a, b) {
  ULSrLq:;
  if (a.tagName.toLowerCase() == "input") a = a.parentNode;
  LeafControl.OnMouseOver(a, b);
}
MultiSelectListBoxItem.OnMouseOut = MultiSelectListBoxItem_OnMouseOut;
function MultiSelectListBoxItem_OnMouseOut(a, b) {
  ULSrLq:;
  if (a.tagName.toLowerCase() == "input") a = a.parentNode;
  LeafControl.OnMouseOut(a, b);
}
MultiSelectListBoxItem.GetCheckBox = MultiSelectListBoxItem_GetCheckBox;
function MultiSelectListBoxItem_GetCheckBox(a) {
  ULSrLq:;
  if (a.tagName.toLowerCase() == "span") a = a.childNodes[0];
  return a;
}
MultiSelectListBoxItem.TextBox = MultiSelectListBoxItem_GetTextBox;
function MultiSelectListBoxItem_GetTextBox(b) {
  ULSrLq:;
  var a = null;
  if (b.tagName.toLowerCase() == "span") a = b.childNodes[1];
  if (a == null || a.nodeType == 3) return null;
  return a;
}
MultiSelectListBoxItem.MoveStyles = MultiSelectListBoxItem_MoveStyles;
function MultiSelectListBoxItem_MoveStyles(b) {
  ULSrLq:;
  var a = LeafControl_GetWrappingSpan(b);
  if (
    UserAgentInfo.strBrowser == 1 &&
    (UserAgentInfo.intBrowserRmj < 8 ||
      !CurrentFormData_IsV4UI(b.getAttribute("FormId"))) &&
    a.getAttribute("ScriptClass") != "MultiSelectListBoxContainer"
  )
    a = a.parentNode;
  if (b.style.display == "none") Util_SetStyleDisplay(a, "none");
  else Util_SetStyleDisplay(a, "");
}
MultiSelectListBoxItem.SetDisable = MultiSelectListBoxItem_SetDisable;
function MultiSelectListBoxItem_SetDisable(b, a) {
  ULSrLq:;
  var d = MultiSelectListBoxItem_GetCheckBox(b);
  BaseControl_SetDisable(d, a);
  var c = MultiSelectListBoxItem_GetTextBox(b);
  c != null && TextBox_SetDisable(c, a);
}
MultiSelectListBoxItem.IsValid = LeafControl.IsValid;
MultiSelectListBoxItem.IsSelected = LeafControl.IsSelected;
MultiSelectListBoxItem.Select = LeafControl.Select;
MultiSelectListBoxItem.UnSelect = LeafControl.UnSelect;
MultiSelectListBoxItem.IsSigned = LeafControl.IsSigned;
MultiSelectListBoxItem.Highlight = LeafControl.Highlight;
MultiSelectListBoxItem.RemoveHighlight = LeafControl.RemoveHighlight;
MultiSelectListBoxItem.OnBeforeDialog = LeafControl.OnBeforeDialog;
MultiSelectListBoxItem.OnAfterDialog = LeafControl.OnAfterDialog;
MultiSelectListBoxItem.GetFormatting = BaseControl.GetFormatting;
MultiSelectListBoxItem.GetAsteriskOffsetNormal =
  LeafControl.GetAsteriskOffsetNormal;
MultiSelectListBoxItem.GetAsteriskOffsetTop = LeafControl.GetAsteriskOffsetTop;
MultiSelectListBoxItem.GetErrorMessageOffset =
  LeafControl.GetErrorMessageOffset;
MultiSelectListBoxItem.GetErrorMessageOffsetTop =
  LeafControl.GetErrorMessageOffsetTop;
function MultiSelectListBoxContainer() {}
MultiSelectListBoxContainer.Render = MultiSelectListBoxContainer_Render;
function MultiSelectListBoxContainer_Render(d, c, e, a, b) {
  ULSrLq:;
  Container.RenderHelper(d, c, e, a, b, MultiSelectListBoxContainer_Template);
}
MultiSelectListBoxContainer.IsSelected = MultiSelectListBoxContainer_IsSelected;
function MultiSelectListBoxContainer_IsSelected(b) {
  ULSrLq:;
  var a = BaseControl.GetChildInfoPathControls(b)[0];
  if (a != null) return MultiSelectListBoxItem.IsSelected(a);
  return false;
}
MultiSelectListBoxContainer.Select = MultiSelectListBoxContainer_Select;
function MultiSelectListBoxContainer_Select(b) {
  ULSrLq:;
  var a = BaseControl.GetChildInfoPathControls(b)[0];
  if (a != null) return MultiSelectListBoxItem.Select(a);
  var c = BaseControl_GetParentInfoPathControl(b);
  return MultiSelectListBoxCollection.Select(c);
}
MultiSelectListBoxContainer.UnSelect = MultiSelectListBoxContainer_UnSelect;
function MultiSelectListBoxContainer_UnSelect(b) {
  ULSrLq:;
  var a = BaseControl.GetChildInfoPathControls(b)[0];
  if (a != null) return MultiSelectListBoxItem.UnSelect(a);
  var c = BaseControl_GetParentInfoPathControl(b);
  return MultiSelectListBoxCollection.UnSelect(c);
}
MultiSelectListBoxContainer.ResolveSpecialValue =
  BaseControl.ResolveSpecialValue;
function ComboBox() {}
ComboBox.TextBoxIdSuffix = "_textBox";
ComboBox.GetFormatting = BaseControl.GetFormatting;
ComboBox.GetValueFromControl = BaseList.GetValueFromControl;
ComboBox.SetDisable = ComboBox_SetDisable;
function ComboBox_SetDisable(e, b) {
  ULSrLq:;
  var d = ViewDataNode_GetViewDataNodeFromHtml(e),
    a = document.getElementById(d[9]),
    c = ComboBox_GetTextBox(a);
  a != null && BaseControl.SetDisable(a, b);
  c != null && TextBox.SetDisable(c, b);
}
ComboBox.SetValueOfControl = ComboBox_SetValueOfControl;
function ComboBox_SetValueOfControl(a, f) {
  ULSrLq:;
  var b = ViewDataNode_GetViewDataNodeFromHtml(a);
  a = ComboBox_LoadOptions(a, b);
  var d = document.getElementById(b[9]),
    e = ComboBox_GetTextBox(d),
    c = BaseList_OptionGenerationAlgorithm(b, true);
  if (c == null) TextBox.SetValueOfControl(e, f);
  else TextBox.SetValueOfControl(e, c);
  ComboBox_SelectOption(d, f);
  return a;
}
ComboBox.OnTextChange = ComboBox_OnTextChange;
function ComboBox_OnTextChange(a) {
  ULSrLq:;
  var b = ViewDataNode_GetViewDataNodeFromHtml(a),
    c = BaseList_OptionGenerationAlgorithm(b, true);
  if (a.value != c) {
    TextBox_AddEventLogEntry(a, b, a.value);
    ViewDataNode_OnControlChange(a);
    var d = ComboBox_GetDropDown(a);
    ComboBox_SelectOption(d, a.value);
  }
}
function ComboBox_SelectOption(a, d) {
  ULSrLq:;
  if (a != null) {
    a.value = d;
    if (!Util_IsNullOrEmptyString(d))
      for (var e = a.options, c = 0; c < e.length; c++) {
        var b = e[c],
          f = UserAgentInfo.strBrowser == 1 ? b.innerText : b.textContent;
        if (f == d) {
          a.value = b.value;
          return;
        }
      }
  }
  a.selectedIndex = -1;
}
ComboBox.AddEventLogEntry = BaseList.AddEventLogEntry;
ComboBox.GetTextBox = ComboBox_GetTextBox;
function ComboBox_GetTextBox(b) {
  ULSrLq:;
  var c = b.id + ComboBox.TextBoxIdSuffix,
    a = document.getElementById(c);
  if (a != null) return a;
  return b;
}
ComboBox.GetDropDown = ComboBox_GetDropDown;
function ComboBox_GetDropDown(b) {
  ULSrLq:;
  var c = b.id.replace(ComboBox.TextBoxIdSuffix, ""),
    a = document.getElementById(c);
  if (a != null) return a;
  return b;
}
ComboBox.OnKeyDown = ComboBox_OnKeyDown;
function ComboBox_OnKeyDown(a, b) {
  ULSrLq:;
  UserAgentInfo.strBrowser == 2 && ComboBox_OnChange(a, b);
}
ComboBox.OnChange = ComboBox_OnChange;
function ComboBox_OnChange(a, d) {
  ULSrLq:;
  var b = ComboBox_GetTextBox(a);
  if (a == b) return ComboBox_OnTextChange(a, d);
  if (a.selectedIndex == -1) return;
  var b = ComboBox_GetTextBox(a),
    c = ViewDataNode_GetViewDataNodeFromHtml(a);
  if (a.id.indexOf(ComboBox.TextBoxIdSuffix) != -1)
    a = document.getElementById(a.id.replace(ComboBox.TextBoxIdSuffix, ""));
  if (a.selectedIndex == null || a.selectedIndex == -1) a.selectedIndex = 0;
  var f = ViewDataNode_GetDatum(c);
  (a.options[a.selectedIndex].value != f.GetValue() || c._keyPressed) &&
    !a.keyBoardSession &&
    DropDownList.OnChange(a, d);
  if (b != null) {
    var e = c.SnippetElement;
    if (a.keyBoardSession || BaseList.IsDynamic(e))
      if (UserAgentInfo.strBrowser == 1)
        b.value = a.options[a.selectedIndex].innerText;
      else b.value = a.options[a.selectedIndex].textContent;
    else b.value = BaseList_OptionGenerationAlgorithm(c, false);
  }
  if (a.keyBoardSession !== true && UserAgentInfo.strBrowser == 2)
    a.selectedIndex = -1;
}
ComboBox.ResizeTextBox = ComboBox_ResizeTextBox;
function ComboBox_ResizeTextBox(e) {
  ULSrLq:;
  var a = document.getElementById(e),
    c = ComboBox_GetTextBox(a),
    d = a.getAttribute("FormId");
  if (
    CurrentFormData_IsV4UI(d) &&
    UserAgentInfo.strBrowser == 1 &&
    UserAgentInfo.strBrowserType != 6
  ) {
    c.style.width = a.offsetWidth - 4 - BaseControl_EnsureScrollWidth(d) + "px";
    c.style.height = a.offsetHeight - 4 + "px";
  } else {
    var b = 0;
    if (UserAgentInfo.strBrowserType == 6)
      b = LeafControl_ParseLength(a.currentStyle["borderRightWidth"]);
    else if (UserAgentInfo.strBrowser == 2) b = 3;
    else if (UserAgentInfo.strBrowser == 3) b = 1;
    c.style.width = a.offsetWidth - b - BaseControl_EnsureScrollWidth(d) + "px";
    c.style.height = a.offsetHeight + "px";
  }
}
ComboBox.OnAfterCreate = ComboBox_OnAfterCreate;
function ComboBox_OnAfterCreate(b) {
  ULSrLq:;
  var a = document.getElementById(b[9]);
  if (a == null) return;
  var c = ComboBox_GetTextBox(a);
  if (c == null) c = a;
  if (a != c && !ViewDataNode_IsHidden(b)) {
    if (a.offsetWidth > 0) ComboBox_ResizeTextBox(a.id);
    else window.setTimeout('ComboBox_ResizeTextBox("' + a.id + '");');
    var d = BaseList_OptionGenerationAlgorithm(b, true);
    if (d == null) {
      d = BaseControl_GetFormattedValue(b);
      a.selectedIndex = -1;
    }
    c.value = d;
    a.tabIndex = -1;
    a.accessKey = "";
    a.style.position = "relative";
  }
  var e = a.getAttribute("FormId"),
    f = View_GetTemplateType(e);
  if (CurrentFormData.IsListItemMode(e) && f == 1) c.style.borderStyle = "none";
  BaseList.OnAfterCreate(b);
}
ComboBox.Render = ComboBox_Render;
function ComboBox_Render(b, c, i, a) {
  ULSrLq:;
  var g = View.GetTemplateType(b.FormId),
    d = ComboBox_Template;
  if (g == 1) d = ComboBox_PrintTemplate;
  var f = LeafControl_InitializeViewDataNode(i, b, c),
    k = b.FormId;
  BaseList_RenderBeginingWrappingSpan(b, c, f, a);
  a.push(d[0]);
  a.push(' FormId="');
  a.push(k);
  a.push('" OriginalId="');
  a.push(f);
  a.push('" class="');
  a.push(LeafControl_ComputeRenderStyle(b, c[3], c[13]));
  a.push('" ');
  var l = ViewDataNode_GetDatum(b),
    h = l.GetValue();
  if (Util.IsNullOrEmptyString(h) || g == 1) {
    var j = BaseList_OptionGenerationAlgorithm(b, true);
    if (j != null) h = j;
  }
  LeafControl_OutputAttribute("value", h, a);
  LeafControl_OutputConditionalAttribute(" accessKey", c[6][1], a);
  LeafControl_OutputConditionalAttribute(" tabIndex", c[17], a);
  LeafControl_OutputConditionalAttribute(
    " title",
    LeafControl_GetTitle(b, c),
    a
  );
  for (var e = 1; e < d.length; e++) {
    if (d[e + 1] == ">") break;
    var m = BaseControl.RenderTemplateItem(d[e], b, c, f, a);
  }
  e != d.length && BaseList_Render(b, c, i, a, d.slice(e), g, false);
  BaseList_RenderEndWrappingSpan(b, c, f, a);
  BaseControl_RenderDivForScrollWidthCalculation(a, k);
}
ComboBox.ResolveSpecialValue = ComboBox_ResolveSpecialValue;
function ComboBox_ResolveSpecialValue(c, b, e, f) {
  ULSrLq:;
  var a = null;
  switch (c) {
    case 4:
      var d = GlobalFormData.Get(b.FormId).viewDataHtmlMap;
      a = d.length;
      break;
    case 10:
      a = LeafControl_GetAriaInvalidValue(b);
      break;
    default:
      a = LeafControl_ResolveSpecialValue(c, b, e, f);
  }
  return a;
}
ComboBox.IsFocusable = ComboBox_IsFocusable;
function ComboBox_IsFocusable() {
  ULSrLq:;
  return true;
}
ComboBox.OnBlur = ComboBox_OnBlur;
function ComboBox_OnBlur(a, b) {
  ULSrLq:;
  if (a.keyBoardSession === true) {
    a.keyBoardSession = null;
    ComboBox_OnChange(a, b);
    a.selectedIndex = -1;
  }
  LeafControl.OnBlur(a, b);
}
ComboBox.OnFocus = ComboBox_OnFocus;
function ComboBox_OnFocus(b, e) {
  ULSrLq:;
  var d = ViewDataNode_GetViewDataNodeFromHtml(b),
    a = ComboBox_LoadOptions(b, d);
  if (a == b) {
    var c = ComboBox_GetDropDown(a);
    ComboBox.RefreshControlDataBaseIfFilteringExist(c, d);
    LeafControl.OnFocus(c, e);
    if (a != c) {
      a.select();
      LeafControl.OnFocus(a, e);
    }
  } else {
    if (b.tagName == "INPUT") a = ComboBox_GetTextBox(a);
    Util_DoubleFocus(a);
  }
}
ComboBox.OnMouseDown = LeafControl.OnMouseDown;
ComboBox.OnMouseUp = LeafControl.OnMouseUp;
ComboBox.OnKeyPress = ComboBox_OnKeyPress;
function ComboBox_OnKeyPress(b, c) {
  ULSrLq:;
  var h = b.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(h) != 1
    )
  )
    return true;
  var d = KeyboardService.GetVirtualKey(c);
  if (d == 8 || d == 7) {
    var f = ViewDataNode_GetViewDataNodeFromHtml(b),
      e = f[9],
      a = document.getElementById(e),
      g = ComboBox_GetDropDown(b);
    LeafControl_HideAsteriskAfterTyping(g, c);
    a != null && a.focus();
    a.keyBoardSession = true;
    (UserAgentInfo.strBrowser == 3 || UserAgentInfo.strBrowser == 2) &&
      ComboBox_OnChange(a, null);
  } else LeafControl_OnKeyPressKillEnterEvent(b, c);
}
ComboBox.OnTextBoxKeyPress = ComboBox_OnTextBoxKeyPress;
function ComboBox_OnTextBoxKeyPress(b, c) {
  ULSrLq:;
  var e = b.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(e) != 1
    )
  )
    return true;
  var a = KeyboardService.GetVirtualKey(c);
  if (a != 1 && a != 0 && a != 2 && a != 3) {
    var d = ComboBox_GetDropDown(b);
    LeafControl_HideAsteriskAfterTyping(d, c);
  }
}
ComboBox.IsValid = LeafControl.IsValid;
ComboBox.IsSelected = LeafControl.IsSelected;
ComboBox.Select = ComboBox_Select;
function ComboBox_Select(b) {
  ULSrLq:;
  var a = ComboBox_GetTextBox(b);
  a != null && LeafControl.Select(a);
}
ComboBox.UnSelect = LeafControl.UnSelect;
ComboBox.RestoreFocus = ComboBox_RestoreFocus;
function ComboBox_RestoreFocus(b) {
  ULSrLq:;
  var a = ComboBox_GetTextBox(b);
  a != null && LeafControl.RestoreFocus(a);
}
ComboBox.Highlight = LeafControl_Highlight;
ComboBox.RemoveHighlight = LeafControl.RemoveHighlight;
ComboBox.OnMouseOver = ComboBox_OnMouseOver;
function ComboBox_OnMouseOver(b, d) {
  ULSrLq:;
  var a = ViewDataNode_GetViewDataNodeFromHtml(b);
  b = ComboBox_LoadOptions(b, a);
  var c = document.getElementById(a[9]);
  ComboBox.RefreshControlDataBaseIfFilteringExist(c, a);
  LeafControl.OnMouseOver(c, d);
}
ComboBox.OnMouseOut = ComboBox_OnMouseOut;
function ComboBox_OnMouseOut(c, d) {
  ULSrLq:;
  var a = ViewDataNode_GetViewDataNodeFromHtml(c),
    b = document.getElementById(a[9]);
  LeafControl.OnMouseOut(b, d);
}
ComboBox.OnBeforeDialog = DropDownList.OnBeforeDialog;
ComboBox.OnAfterDialog = DropDownList.OnAfterDialog;
ComboBox.RefreshVisualState = ComboBox_RefreshVisualState;
function ComboBox_RefreshVisualState(a) {
  ULSrLq:;
  BaseControl.RefreshVisualState(a);
  var b = ComboBox_GetTextBox(a);
  BaseControl.RefreshVisualState(b);
}
ComboBox.SetAriaInvalidAttribute = ComboBox_SetAriaInvalidAttribute;
function ComboBox_SetAriaInvalidAttribute(b, a) {
  ULSrLq:;
  BaseControl.SetAriaInvalidAttribute(b, a);
  var c = ComboBox_GetTextBox(b);
  BaseControl.SetAriaInvalidAttribute(c, a);
}
ComboBox.SetHidden = function (e, c, b) {
  ULSrLq:;
  var a = c.parentNode;
  a = a.parentNode;
  if (a != null) {
    var d = ComboBox_GetTextBox(c);
    a.style.display = b ? "none" : "";
    d.style.display = b ? "none" : "";
    c.style.display = b ? "none" : "";
    !b && window.setTimeout('ComboBox_ResizeTextBox("' + c.id + '");');
  }
};
ComboBox.ShouldShiftAsteriskIn = ComboBox_ShouldShiftAsteriskIn;
function ComboBox_ShouldShiftAsteriskIn() {
  ULSrLq:;
  return true;
}
ComboBox.GetControlForSelectText = ComboBox_GetControlForSelectText;
function ComboBox_GetControlForSelectText(a) {
  ULSrLq:;
  var b = ViewDataNode_GetViewDataNodeFromHtml(a);
  a = ComboBox_LoadOptions(a, b);
  return ComboBox_GetTextBox(a);
}
function ComboBox_SetViewDateNodeIndex(b, a) {
  ULSrLq:;
  var d = ComboBox_GetTextBox(b),
    c = ComboBox_GetDropDown(b);
  d.setAttribute("viewDataNode", a);
  c.setAttribute("viewDataNode", a);
}
function ComboBox_LoadOptions(b, a) {
  ULSrLq:;
  return DropDownList__LoadOptions(
    b,
    a,
    ComboBox_Render,
    ComboBox_OnAfterCreate,
    ComboBox_SetViewDateNodeIndex
  );
}
ComboBox.RefreshControlDataBaseIfFilteringExist = DropDownList_RefreshControlDataBaseIfFilteringExist;
ComboBox.RefreshControlData = BaseList.RefreshControlData;
ComboBox.OnBeforeDialog = BaseList.OnBeforeDialog;
ComboBox.OnAfterDialog = BaseList.OnAfterDialog;
ComboBox.OnClick = LeafControl.OnClick;
ComboBox.GetAsteriskOffsetNormal = LeafControl.GetAsteriskOffsetNormal;
ComboBox.GetAsteriskOffsetTop = LeafControl.GetAsteriskOffsetTop;
ComboBox.GetErrorMessageOffset = LeafControl.GetErrorMessageOffset;
ComboBox.GetErrorMessageOffsetTop = LeafControl.GetErrorMessageOffsetTop;
function ChoiceGroup() {}
ChoiceGroup.OnChange = Section.OnChange;
ChoiceGroup.OnClick = Section.OnClick;
ChoiceGroup.OnFocus = Section.OnFocus;
ChoiceGroup.OnBlur = Section.OnBlur;
ChoiceGroup.OnMouseOver = Section.OnMouseOver;
ChoiceGroup.OnMouseOut = Section.OnMouseOut;
ChoiceGroup.OnMouseDown = Section.OnMouseDown;
ChoiceGroup.OnMouseUp = Section.OnMouseUp;
ChoiceGroup.OnKeyPress = Section.OnKeyPress;
ChoiceGroup.IsValid = Section.IsValid;
ChoiceGroup.IsSelected = Section.IsSelected;
ChoiceGroup.Select = Section.Select;
ChoiceGroup.UnSelect = Section.UnSelect;
ChoiceGroup.ResolveSpecialValue = Section.ResolveSpecialValue;
ChoiceGroup.IsSigned = Section.IsSigned;
ChoiceGroup._objMatchingSectionNode = null;
function ChoiceGroup_IteratorData(a) {
  ULSrLq:;
  this._objNode = null;
  this._strXmlToEdit = a;
  this._bEmpty = true;
}
ChoiceGroup.Render = ChoiceGroup_Render;
function ChoiceGroup_Render(c, b, d, a) {
  ULSrLq:;
  IP_Collection_Render(c, b, d, a, ChoiceGroup_Template);
}
ChoiceGroup.OnAfterCreate = ChoiceGroup_OnAfterCreate;
function ChoiceGroup_OnAfterCreate(a) {
  ULSrLq:;
  var h = a.FormId,
    b = GlobalFormData.Get(h);
  Section.OnAfterCreate(a);
  var g = a[9],
    i = document.getElementById(g),
    d = ChoiceGroup_MultipleBindingClass(a);
  if (d != -1) {
    if (b._arrChoiceGroupsMultipleBindingMap == null)
      b._arrChoiceGroupsMultipleBindingMap = [];
    var c = b._arrChoiceGroupsMultipleBindingMap[d];
    if (c == null) {
      c = [];
      b._arrChoiceGroupsMultipleBindingMap[d] = c;
    }
    for (
      var f = ViewDataNode_GetChildNodes(ViewDataNode_GetChildNodes(a)[0]),
        e = 0;
      e < f.length;
      e++
    )
      c.push(f[e]);
  }
}
function ChoiceGroup_MultipleBindingClass(b) {
  ULSrLq:;
  var a = ViewDataNode_GetChildNodes(b);
  return a[0][1][4];
}
function ChoiceGroup_ClearMultipleBindingMap(b) {
  ULSrLq:;
  var a = GlobalFormData.Get(b);
  a._arrChoiceGroupsMultipleBindingMap = null;
}
function ChoiceGroup_MatchingSection() {
  ULSrLq:;
  return ChoiceGroup._objMatchingSectionNode;
}
function ChoiceGroup_CanReplace(c, d) {
  ULSrLq:;
  ChoiceGroup._objMatchingSectionNode = null;
  var a = new ChoiceGroup_IteratorData(d);
  ChoiceGroup_Iterate(c, ChoiceGroup_CanReplaceCallback, a);
  if (a._objNode == null) return 2;
  else {
    var b = ViewDataNode_GetChildNodes(a._objNode);
    if (b != null && b.length > 0) return 0;
    else {
      ChoiceGroup._objMatchingSectionNode = a._objNode;
      return 1;
    }
  }
}
function ChoiceGroup_CanReplaceCallback(a, b) {
  ULSrLq:;
  if (a.SnippetElement[2] != "ChoiceSection") return;
  var c = ChoiceSection_GetReplaceXmlToEdit(a.SnippetElement);
  if (c == b._strXmlToEdit) b._objNode = a;
}
function ChoiceGroup_CanInsert(b, c) {
  ULSrLq:;
  ChoiceGroup._objMatchingSectionNode = null;
  var a = new ChoiceGroup_IteratorData(c);
  ChoiceGroup_Iterate(b, ChoiceGroup_CanInsertCallback, a);
  if (!a._bEmpty) return 0;
  if (a._objNode == null) return 2;
  else {
    ChoiceGroup._objMatchingSectionNode = a._objNode;
    return 1;
  }
}
function ChoiceGroup_CanInsertCallback(a, b) {
  ULSrLq:;
  var d = HoverMenu.GetXmlToEdit(a);
  if (d == b._strXmlToEdit) b._objNode = a;
  var c = ViewDataNode_GetChildNodes(a);
  if (c != null && c.length > 0) b._bEmpty = false;
}
function ChoiceGroup_Iterate(b, g, i) {
  ULSrLq:;
  var h = b.FormId,
    e = GlobalFormData.Get(h),
    a = ViewDataNode_GetChildNodes(b),
    d = ChoiceGroup_MultipleBindingClass(b);
  if (d == -1 || e._arrChoiceGroupsMultipleBindingMap == null)
    a = ViewDataNode_GetChildNodes(a[0]);
  else a = e._arrChoiceGroupsMultipleBindingMap[d];
  for (var c = 0; c < a.length; c++) {
    var f = a[c];
    g(f, i);
  }
}
function ChoiceSection() {}
ChoiceSection.OnChange = Section.OnChange;
ChoiceSection.OnClick = Section.OnClick;
ChoiceSection.OnFocus = Section.OnFocus;
ChoiceSection.OnBlur = Section.OnBlur;
ChoiceSection.OnMouseOver = Section.OnMouseOver;
ChoiceSection.OnMouseOut = Section.OnMouseOut;
ChoiceSection.OnMouseDown = Section.OnMouseDown;
ChoiceSection.OnMouseUp = Section.OnMouseUp;
ChoiceSection.OnKeyPress = Section.OnKeyPress;
ChoiceSection.OnAfterCreate = Section.OnAfterCreate;
ChoiceSection.IsValid = Section.IsValid;
ChoiceSection.IsSelected = Section.IsSelected;
ChoiceSection.Select = Section.Select;
ChoiceSection.UnSelect = Section.UnSelect;
ChoiceSection.ResolveSpecialValue = Section.ResolveSpecialValue;
ChoiceSection.IsSigned = Section.IsSigned;
ChoiceSection.Render = function (c, b, d, a) {
  ULSrLq:;
  IP_Collection_Render(c, b, d, a, ChoiceSection_Template);
};
function ChoiceSection_GetReplaceXmlToEdit(a) {
  ULSrLq:;
  return a[6][4][0];
}
function ChoiceSection_Replace(f, g) {
  ULSrLq:;
  var a = document.getElementById(f),
    c = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(c) != 1
    )
  )
    return false;
  var d = BaseControl.GetContainerId(a.id),
    e = document.getElementById(d),
    b = document.getElementById(g);
  StructuralEditingControl_OnStructuralEdit();
  g_objCurrentFormDataSelection != null &&
    g_objCurrentFormDataSelection.BackupFocusForStructural(b, null, false);
  if (
    !EventLog_Add(
      c,
      24,
      e,
      BaseControl_GetOriginalId(a),
      BaseControl_GetOriginalId(b),
      "",
      true,
      false,
      false,
      1,
      3
    )
  )
    return false;
  return true;
}
function CustomControl() {}
CustomControl.GetFormatting = BaseControl.GetFormatting;
CustomControl.SizeOfSeperator = 2;
CustomControl.GetIDFromCurrentFormArrayObject = CustomControl_GetIDFromCurrentFormArrayObject;
function CustomControl_GetIDFromCurrentFormArrayObject(a) {
  ULSrLq:;
  return a[0];
}
CustomControl.GetInputFromCurrentFormArrayObject = CustomControl_GetInputFromCurrentFormArrayObject;
function CustomControl_GetInputFromCurrentFormArrayObject(a) {
  ULSrLq:;
  return a[1];
}
CustomControl.GetXmlDataFromCurrentFormArrayObject = CustomControl_GetXmlDataFromCurrentFormArrayObject;
function CustomControl_GetXmlDataFromCurrentFormArrayObject(a) {
  ULSrLq:;
  return a[3];
}
function CustomControl_GetControlName(a) {
  ULSrLq:;
  return a[6][2][0];
}
function CustomControl_GetControlIndexFromViewData(b) {
  ULSrLq:;
  var a = b[1][2][0];
  return Util_GetDataType(a) != 1 ? -1 : a;
}
function CustomControl_CompareIds(f, c) {
  ULSrLq:;
  var b = false,
    a = CustomControl.GetIDFromCurrentFormArrayObject(f);
  if (a == c) b = true;
  else {
    var e = a.indexOf("__", 0);
    if (e > 0) {
      var d = a.substring(e + CustomControl.SizeOfSeperator);
      if (d != null && d == c) b = true;
    }
  }
  return b;
}
CustomControl.GatherPostData = CustomControl_GatherPostData;
function CustomControl_GatherPostData(
  strFormId,
  strControlId,
  bForcePostBack,
  bOverrideAllPostbackSettings,
  bCompareViewDataNodes,
  objViewDataCompareNode
) {
  ULSrLq:;
  for (
    var arrCustomControls = CurrentFormData.CustomControlsIDArray(strFormId),
      iarrCustomControl = 0;
    iarrCustomControl < arrCustomControls.length;
    iarrCustomControl++
  ) {
    if (
      !CustomControl_CompareIds(
        arrCustomControls[iarrCustomControl],
        strControlId
      )
    )
      continue;
    var objCustomControlInput = CustomControl_GetCustomControlInputFromHtml(
        strFormId,
        arrCustomControls[iarrCustomControl]
      ),
      objCustomControl = CustomControl_GetCustomControlObjectFromHtml(
        strFormId,
        arrCustomControls[iarrCustomControl]
      );
    if (
      objCustomControlInput != null &&
      objCustomControl != null &&
      objCustomControl.parentNode.getAttribute("FormId") != null
    ) {
      eval('copyUplevelToHidden("' + objCustomControl.id + '");');
      if (bCompareViewDataNodes) {
        var objParentInfoPathControl = objCustomControl.parentNode,
          objViewDataParentNode = ViewDataNode_GetViewDataNodeFromHtml(
            objParentInfoPathControl
          );
        if (
          objViewDataCompareNode != null &&
          objViewDataParentNode != null &&
          objViewDataCompareNode == objViewDataParentNode
        ) {
          CustomControl_AddToEventLog(
            objCustomControl,
            strFormId,
            objCustomControlInput.value,
            bForcePostBack,
            bOverrideAllPostbackSettings
          );
          return;
        }
      } else
        CustomControl_AddToEventLog(
          objCustomControl,
          strFormId,
          objCustomControlInput.value,
          bForcePostBack,
          bOverrideAllPostbackSettings
        );
    } else CustomControl.AddExternalControlEvent(objCustomControl, strFormId);
  }
}
CustomControl.GetCustomControlInputFromHtml = CustomControl_GetCustomControlInputFromHtml;
function CustomControl_GetCustomControlInputFromHtml(c, a) {
  ULSrLq:;
  var b = document.getElementById(
    c +
      "_" +
      CustomControl.GetIDFromCurrentFormArrayObject(a) +
      "_" +
      CustomControl.GetInputFromCurrentFormArrayObject(a)
  );
  if (b == null)
    b = document.getElementById(
      c +
        "__" +
        CustomControl.GetIDFromCurrentFormArrayObject(a) +
        "_" +
        CustomControl.GetInputFromCurrentFormArrayObject(a)
    );
  if (b == null)
    b = document.getElementById(
      CustomControl.GetIDFromCurrentFormArrayObject(a) +
        "_" +
        CustomControl.GetInputFromCurrentFormArrayObject(a)
    );
  if (b == null)
    b = document.getElementById(
      c +
        "_" +
        CustomControl.GetIDFromCurrentFormArrayObject(a) +
        "_hiddenSpanData"
    );
  return b;
}
CustomControl.GetCustomControlObjectFromHtml = CustomControl_GetCustomControlObjectFromHtml;
function CustomControl_GetCustomControlObjectFromHtml(d, b) {
  ULSrLq:;
  var c = CustomControl.GetIDFromCurrentFormArrayObject(b),
    a = document.getElementById(d + "_" + c);
  if (a == null) a = document.getElementById(d + "__" + c);
  if (a == null)
    a = document.getElementById(
      CustomControl.GetIDFromCurrentFormArrayObject(b)
    );
  return a;
}
CustomControl.AddExternalControlEvent = CustomControl_AddExternalControlEvent;
function CustomControl_AddExternalControlEvent(a, d) {
  ULSrLq:;
  try {
    if (
      a != null &&
      typeof Microsoft != "undefined" &&
      Microsoft.SharePoint &&
      Microsoft.SharePoint.Taxonomy &&
      Microsoft.SharePoint.Taxonomy.ControlObject
    )
      if (
        a.children.length == 2 &&
        a.children[1].className.indexOf("ms-taxonomy") != -1
      ) {
        var b = new Microsoft.SharePoint.Taxonomy.ControlObject(a.children[1]);
        b != null &&
          b.isEnabled() &&
          CustomControl_AddToEventLog(a, d, b.getRawText(), false, false);
      }
  } catch (c) {}
}
function CustomControl_AddToEventLog(g, e, i, a, f) {
  ULSrLq:;
  var c = g.parentNode,
    d = ViewDataNode_GetViewDataNodeFromHtml(c);
  if (d != null) {
    var b = false;
    if (f) b = a;
    else {
      var h = d.SnippetElement[7][1];
      if (a == undefined) a = false;
      if (!a) b = CustomControl_GetPostbackDataActions(h, e);
      else b = a;
    }
    EventLog_Add(
      e,
      23,
      c,
      BaseControl.GetOriginalId(c),
      i,
      "",
      b,
      true,
      false,
      0,
      1
    );
  }
}
CustomControl.LoadCustomControlsArray = CustomControl_LoadCustomControlsArray;
function CustomControl_LoadCustomControlsArray(c, g, d, e, f) {
  ULSrLq:;
  for (
    var b = CurrentFormData.CustomControlsIDArray(c), a = 0;
    a < b.length;
    a++
  )
    CustomControl_GatherPostData(
      c,
      CustomControl.GetIDFromCurrentFormArrayObject(b[a]),
      g,
      d,
      e,
      f
    );
}
CustomControl.GetPostbackDataActions = CustomControl_GetPostbackDataActions;
function CustomControl_GetPostbackDataActions(arrDataActions, strFormId) {
  ULSrLq:;
  var hasPostedBack = false,
    objGlobalFormData = GlobalFormData.Get(strFormId);
  if (Print._boolDelayCustomControlPostback) return false;
  try {
    hasPostedBack = eval("g_objHasFormPostedBack_" + strFormId);
  } catch (exception) {}
  if (hasPostedBack || objGlobalFormData.g_hasFormBeenSaved) return true;
  for (
    var iCurrentDataAction = 0;
    iCurrentDataAction < arrDataActions.length;
    iCurrentDataAction++
  )
    if (
      arrDataActions[iCurrentDataAction] != undefined &&
      arrDataActions[iCurrentDataAction].length > 0
    )
      if (
        iCurrentDataAction == 2 ||
        iCurrentDataAction == 6 ||
        iCurrentDataAction == 0
      )
        for (
          var arrCurrentDataAction = arrDataActions[iCurrentDataAction],
            iPostBack = 0;
          iPostBack < arrCurrentDataAction.length;
          iPostBack++
        )
          if (arrCurrentDataAction[iPostBack][0] != undefined) return true;
  return false;
}
function CustomControl_GetContainerDivId(a) {
  ULSrLq:;
  return a + "_customControlHostDiv";
}
CustomControl.OnBeforeDestruction = CustomControl_OnBeforeDestruction;
function CustomControl_OnBeforeDestruction(d) {
  ULSrLq:;
  var f = CurrentFormData.CustomControlsIDArray(d),
    e = CustomControl_GetContainerDivId(d),
    a = document.getElementById(e);
  if (a == null) {
    a = document.createElement("DIV");
    var h = document.getElementById(d);
    h.appendChild(a);
    a.style.display = "none";
    a.id = e;
  }
  for (var c = 0; c < f.length; c++) {
    var g = f[c][0],
      b = document.getElementById(g);
    if (b != null) {
      b.parentNode.removeChild(b);
      a.appendChild(b);
    }
  }
}
CustomControl.OnAfterCreate = CustomControl_OnAfterCreate;
function CustomControl_OnAfterCreate(e) {
  ULSrLq:;
  var j = View.GetTemplateType(e.FormId),
    h = e.SnippetElement,
    i = CustomControl_GetControlName(h);
  if (j == 1 && i == "Person/Group Picker") return;
  var g = e.FormId,
    d = CurrentFormData.CustomControlsIDArray(g),
    n = GlobalFormData.Get(g),
    c = CustomControl_GetControlIndexFromViewData(e);
  if (c == -1) return;
  var b = g + "_" + d[c][0],
    a = document.getElementById(b);
  if (a == null) {
    b = g + "__" + d[c][0];
    a = document.getElementById(b);
  }
  if (a == null) {
    b = d[c][0];
    a = document.getElementById(b);
  }
  var f = document.getElementById(e[9]);
  if (f == null) {
    d[c][0] = b;
    return;
  }
  if (a != null) {
    var h = Snippet_GetSnippetElementFromHtml(f),
      m = BaseControl.k_strDirection[BaseControl.GetDirection(g, h)],
      l = m == "rtl" ? "right" : "left";
    d[c][0] = b;
    a.parentNode.removeChild(a);
    f.appendChild(a);
    f.style.minHeight = a.style.height;
    f.style.textAlign = l;
    a.style.height = "";
    a.style.display = "";
    var k = CustomControl.GetXmlDataFromCurrentFormArrayObject(d[c]);
    Util_IsNonEmptyString(k) && EntityEditorCallback(k, a.id);
    ViewDataNode_IsDisabled(e) && CustomControl_RecursiveSetDisable(a, true);
    d[c][2] = true;
    j != 1 && i == "Person/Group Picker" && PickerAdjustHeight(b, 3);
  }
}
CustomControl.FindFocusableElement = CustomControl_FindFocusableElement;
function CustomControl_FindFocusableElement(a) {
  ULSrLq:;
  var g = ViewDataNode_GetViewDataNodeFromHtml(a),
    f = g.SnippetElement,
    c = CustomControl_GetControlName(f),
    b = a;
  if (c == "Person/Group Picker" || c == "Microsoft External Item Picker") {
    var d = a.children[0];
    if (d != null) {
      var e = d.id + "_upLevelDiv";
      b = document.getElementById(e);
    }
  }
  return b;
}
CustomControl.RestoreFocus = CustomControl_RestoreFocus;
function CustomControl_RestoreFocus(a) {
  ULSrLq:;
  SelectionService_Select(a);
  var b = CustomControl_FindFocusableElement(a);
  try {
    b.focus();
  } catch (c) {}
}
CustomControl.IsInFocusableState = CustomControl_IsInFocusableState;
function CustomControl_IsInFocusableState(a) {
  ULSrLq:;
  if (!BaseControl_IsInFocusableState(a)) return false;
  var b = document.getElementById(a[9]);
  return b != null && CustomControl_FindFocusableElement(b) != null;
}
CustomControl.SetDisable = CustomControl_SetDisable;
function CustomControl_SetDisable(b, a) {
  ULSrLq:;
  CustomControl_RecursiveSetDisable(b, a);
}
CustomControl.OnFocus = CustomControl_OnClick;
CustomControl.OnClick = CustomControl_OnClick;
function CustomControl_OnClick(a, b) {
  ULSrLq:;
  SelectionService_Select(a);
  Util_StopEventProprogation(b);
}
function CustomControl_RecursiveSetDisable(a, b) {
  ULSrLq:;
  if (a.tagName != null)
    if (a.tagName.toLowerCase() == "a")
      if (b) {
        if (!Util_IsNullOrEmptyString(a.href)) {
          a.setAttribute("hrefbak", a.href);
          a.removeAttribute("href");
        }
        if (a.onclick != null) {
          a.onclickBak = a.onclick;
          a.onclick = null;
        }
      } else {
        if (!Util_IsNullOrEmptyString(a.getAttribute("hrefbak"))) {
          a.setAttribute("href", a.getAttribute("hrefbak"));
          a.removeAttribute("hrefbak");
        }
        if (a.onclickBak != null) {
          a.onclick = a.onclickBak;
          a.onclickBak = null;
        }
      }
    else BaseControl_SetDisable(a, b);
  for (var c = 0; c < a.childNodes.length; c++)
    CustomControl_RecursiveSetDisable(a.childNodes[c], b);
}
CustomControl.Render = CustomControl_Render;
function CustomControl_Render(a, c, f, b) {
  ULSrLq:;
  var e = LeafControl_InitializeViewDataNode(f, a, c),
    h = View.GetTemplateType(a.FormId),
    d = CustomControl_Template;
  if (h == 1) d = CustomControl_PrintTemplate;
  var g = LeafControl_RenderBeginWrappingSpan(e, a, c, b);
  b.push(d[0]);
  LeafControl_RenderLeafAttributes(e, a, c, true, true, b);
  LeafControl.Render(a, c, f, b, d.slice(1));
  g && LeafControl_RenderEndWrappingSpan(e, a, c, b);
}
function ParseFormIdFromControl(b) {
  ULSrLq:;
  var c = b.indexOf("__", 0);
  if (c > 0) {
    var a = b.substring(0, c);
    if (a != null) {
      if (CurrentFormData_GetCurrentFormData(a) == null)
        a = a.substring(0, a.length / 2);
      return a;
    }
  }
}
function ParseControlIdFromControl(a) {
  ULSrLq:;
  var b = a.indexOf("__", 0);
  if (b > 0) {
    var c = a.substring(b + CustomControl.SizeOfSeperator);
    return c;
  }
}
function ExternalCustomControlCallback(a) {
  ULSrLq:;
  if (a != null) {
    var b = ParseFormIdFromControl(a),
      c = ParseControlIdFromControl(a);
    b != null &&
      CurrentFormData_GetCurrentFormData(b) != null &&
      c != null &&
      CustomControl_GatherPostData(b, c, false, false, false, null);
  }
}
function ExternalOnFocus(d) {
  ULSrLq:;
  for (
    var f = ParseControlIdFromControl(d),
      e = ParseFormIdFromControl(d),
      b = CurrentFormData.CustomControlsIDArray(e),
      a = 0;
    a < b.length;
    a++
  ) {
    if (!CustomControl_CompareIds(b[a], f)) continue;
    var c = CustomControl_GetCustomControlObjectFromHtml(e, b[a]);
    if (c != null && c.parentNode != null) {
      SelectionService_Select(c.parentNode);
      break;
    }
  }
}
function CustomControl_OnValueChanged(a) {
  ULSrLq:;
  !PostbackBody.duringRender &&
    CurrentFormData.g_objCurrentFormData != null &&
    ExternalCustomControlCallback(a);
}
CustomControl.IsFocusable = CustomControl_IsFocusable;
function CustomControl_IsFocusable() {
  ULSrLq:;
  return true;
}
CustomControl.OnResize = CustomControl_OnResize;
function CustomControl_OnResize(b) {
  ULSrLq:;
  var a = b.parentElement;
  a.style.height = a.offsetHeight;
  a.style.height = "";
}
CustomControl.ResolveSpecialValue = CustomControl_ResolveSpecialValue;
function CustomControl_ResolveSpecialValue(d, b, c, e) {
  ULSrLq:;
  var a = LeafControl.ResolveSpecialValue(d, b, c, e);
  if (a == null) {
    var g = b.FormId;
    switch (d) {
      case 10:
        var f = CustomControl_GetControlName(c);
        if (f == "Person/Group Picker") a = BaseControl_GetFormattedValue(b);
        else a = "";
    }
  }
  return a;
}
CustomControl.OnChange = LeafControl.OnChange;
CustomControl.OnFocus = LeafControl.OnFocus;
CustomControl.OnBlur = LeafControl.OnBlur;
CustomControl.OnMouseDown = LeafControl.OnMouseDown;
CustomControl.OnMouseUp = LeafControl.OnMouseUp;
CustomControl.OnKeyPress = LeafControl.OnKeyPress;
CustomControl.IsValid = LeafControl.IsValid;
CustomControl.IsSelected = LeafControl.IsSelected;
CustomControl.Select = LeafControl.Select;
CustomControl.UnSelect = LeafControl.UnSelect;
CustomControl.Highlight = LeafControl.Highlight;
CustomControl.RemoveHighlight = LeafControl.RemoveHighlight;
CustomControl.OnMouseOver = LeafControl.OnMouseOver;
CustomControl.OnMouseOut = LeafControl.OnMouseOut;
CustomControl.OnBeforeDialog = LeafControl.OnBeforeDialog;
CustomControl.OnAfterDialog = LeafControl.OnAfterDialog;
CustomControl.SetHidden = LeafControl.SetHidden;
CustomControl.HelpingSpansInTemplate = LeafControl.HelpingSpansInTemplate;
function LinkedPicture() {}
LinkedPicture.GetValueFromControl = LinkedPicture_GetValueFromControl;
function LinkedPicture_GetValueFromControl(a) {
  ULSrLq:;
  return a.getAttribute("primaryValue");
}
LinkedPicture.GetSecondaryValueFromControl = LinkedPicture_GetSecondaryValueFromControl;
function LinkedPicture_GetSecondaryValueFromControl(a) {
  ULSrLq:;
  return a.getAttribute("secondaryValue");
}
LinkedPicture.SetValueOfControl = LinkedPicture_SetValueOfControl;
function LinkedPicture_SetValueOfControl(a, b) {
  ULSrLq:;
  LinkedPicture_SetValues(a, b, null, true);
  return a;
}
function LinkedPicture_SetValues(b, c, a, o) {
  ULSrLq:;
  var d = ViewDataNode_GetViewDataNodeFromHtml(b);
  if (d.fSettingValues == true) return;
  else d.fSettingValues = true;
  var f = PictureControl_GetPicture(b),
    l = PictureControl_GetPictureIcon(b),
    j = PictureControl_GetPromptAnchor(b),
    i = PictureControl_GetPictureAnchor(b),
    p = PictureControl_GetPromptText(b),
    s = d.SnippetElement,
    n = !ViewDataNode_IsHidden(d),
    e = PictureControl_GetSecondaryDataNodes(d),
    q = ViewDataNode_GetDatum(d).GetValue(),
    g = null,
    k = o;
  if (Util_IsNonEmptyString(c)) c = c.substring(0, 255);
  if (Util_IsNonEmptyString(a)) a = a.substring(0, 255);
  if (e != null) g = Expr_String(e);
  if (q == c && (a == null || e == null || g == a)) k = false;
  if (!(Util_IsValidURI(c) && Util_IsSecureURI(c))) c = "";
  if (e != null) {
    if (a == null) a = "";
    else b.setAttribute("secondaryValue", a);
    f.alt = a;
    f.title = a;
    l.alt = a;
    l.title = a;
  }
  b.setAttribute("primaryValue", c);
  if (c == "") {
    if (n) {
      Util_SetStyleDisplay(j, "inline-block");
      Util_SetStyleDisplay(i, "none");
      var m = " ";
      if (!ViewDataNode_IsDisabled(d))
        m += IntlCoreStrings.k_strClickHereToInsertPicture;
      Util_SetInnerText(p, m);
    }
  } else {
    if (n) {
      Util_SetStyleDisplay(j, "none");
      Util_SetStyleDisplay(i, "");
    }
    try {
      f.src = c;
      LinkedPicture_EnsureSuccessfulUpload(d);
    } catch (r) {
      f.src = "";
    }
  }
  if (k) {
    var h = EventLog_Add(
      b.getAttribute("FormId"),
      35,
      b,
      BaseControl_GetOriginalId(b),
      c,
      a,
      false,
      true,
      false,
      0,
      1
    );
    if (h) {
      e != null &&
        a != null &&
        g != a &&
        ViewDataNode_OnControlChangeSecondary(b, e[0]);
      h = ViewDataNode_OnControlChange(b);
    }
  }
  d.fSettingValues = false;
}
LinkedPicture.RefreshControlData = LinkedPicture_RefreshControlData;
function LinkedPicture_RefreshControlData(a, f) {
  ULSrLq:;
  var b,
    e = PictureControl_GetPrimaryDataNodeValue(a),
    c = PictureControl_GetSecondaryDataNodes(a);
  if (c != null) b = Expr.String(c);
  else {
    var d = a.SnippetElement;
    b = PictureControl_GetAlt(d);
  }
  LinkedPicture_SetValues(f, e, b, false);
}
LinkedPicture.InvokeInsert = LinkedPicture_InvokeInsert;
function LinkedPicture_InvokeInsert(b, k) {
  ULSrLq:;
  b = PictureControl_EnsureControl(b);
  var d = b.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(d) != 1
    )
  )
    return;
  SelectionService_RememberFocus(b, k);
  var c = ViewDataNode_GetViewDataNodeFromHtml(b);
  if (ViewDataNode_IsDisabled(c)) return;
  var l = ViewDataNode_GetDatum(c).GetValue(),
    g = "",
    f = false,
    e = PictureControl_GetSecondaryDataNodes(c);
  if (e != null) {
    f = true;
    g = Expr.String(e);
  }
  ErrorVisualization_IsShortMessageVisible(c) &&
    ErrorVisualization_HideShortMessage(b, c);
  Dialog.funcCallbackOnClose = null;
  Dialog.funcCallbackSetValues = LinkedPicture_SetValues;
  var a = [],
    j = Dialog.strFormId;
  Dialog.strFormId = d;
  a[1] = IntlCoreStrings.k_strAttachLinkedPictureDialogTitle;
  a[3] = CurrentFormData_Direction(d);
  a[5] = Dialog_TextAlignmentStyle();
  var i = [
      0,
      IntlCoreStrings.k_strAlertButtonOK,
      "Dialog_LinkUrlInsert();Util_StopEventProprogation(event);return false;",
      "",
      "button",
    ],
    h = [
      1,
      IntlCoreStrings.k_strCancelButtonText,
      "Dialog_OnTerminateButton();Util_StopEventProprogation(event);return false;",
      "",
      "button",
    ];
  a[2] = [i, h];
  a[11] = IntlCoreStrings.k_strAttachLinkDiaglogAboveTextBoxText;
  a[12] = l;
  a[13] = IntlCoreStrings.k_strAttachLinkDiaglogBelowTextBoxText;
  a[14] = IntlCoreStrings.k_strInsertLinkDialogDisplayText;
  if (f) {
    a[15] = "";
    a[16] = g;
    a[17] = IntlCoreStrings.k_strAttachLinkDiaglogDeleteInstructionsText;
  } else {
    a[15] = "display:none;";
    a[16] = "";
    a[17] =
      IntlCoreStrings.k_strAttachLinkDiaglogDeleteInstructionsSingleBindText;
  }
  Dialog.strFormId = j;
  return Dialog_ShowModalDialogEx(
    d,
    "TwoButtonTemplateDialog",
    1,
    1,
    false,
    a,
    b
  );
}
function LinkedPicture_InvokeRemove(a, c) {
  ULSrLq:;
  var b = a.getAttribute("FormId");
  SelectionService_RememberFocus(a, c);
  SelectionService_RememberScrollPosition();
  LinkedPicture_SetValues(a, "", "", true);
  SelectionService_RestoreFocus(b);
}
function LinkedPicture_GetSrc(a) {
  ULSrLq:;
  return Util_Trim(PictureControl_GetPrimaryDataNodeValue(a));
}
LinkedPicture.IsFocusable = LinkedPicture_IsFocusable;
function LinkedPicture_IsFocusable() {
  ULSrLq:;
  return true;
}
LinkedPicture.OnMouseOver = LinkedPicture_OnMouseOver;
function LinkedPicture_OnMouseOver(a, c) {
  ULSrLq:;
  var b = ViewDataNode_GetViewDataNodeFromHtml(a),
    d = PictureControl_GetPrimaryDataNodeValue(b);
  a = PictureControl_EnsureControl(a);
  d != "" && PictureControl_ShowPictureIcon(a, b, true);
  LeafControl_OnMouseOver(a, c);
}
LinkedPicture.OnMouseOut = LinkedPicture_OnMouseOut;
function LinkedPicture_OnMouseOut(a, c) {
  ULSrLq:;
  var b = ViewDataNode_GetViewDataNodeFromHtml(a),
    d = PictureControl_GetPrimaryDataNodeValue(b);
  a = PictureControl_EnsureControl(a);
  d != "" && PictureControl_ShowPictureIcon(a, b, false);
  LeafControl_OnMouseOut(a, c);
}
LinkedPicture.OnKeyPress = LinkedPicture_OnKeyPress;
function LinkedPicture_OnKeyPress(a, b) {
  ULSrLq:;
  a = PictureControl_EnsureControl(a);
  var d = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(d) != 1
    )
  )
    return true;
  var c = KeyboardService_GetVirtualKey(b);
  if (c == 19) {
    LinkedPicture_InvokeRemove(a, b);
    Util_StopEventProprogation(b);
    return false;
  } else if (c == 1 || c == 18) {
    LinkedPicture_InvokeInsert(a, b);
    Util_StopEventProprogation(b);
    return false;
  } else return LeafControl.OnKeyPress(a, b);
}
LinkedPicture.OnAfterCreate = LinkedPicture_OnAfterCreate;
function LinkedPicture_OnAfterCreate(a) {
  ULSrLq:;
  PictureControl_ShowErrorVisuals(a);
  PictureControl_EnsureHrefInCorrectStateAfterRender(a);
  LinkedPicture_EnsureSuccessfulUpload(a);
  if (ViewDataNode_IsHidden(a)) {
    var b = document.getElementById(a[9]);
    b != null && PictureControl_SetHidden(a, b, true);
  }
}
function LinkedPicture_EnsureSuccessfulUpload(b) {
  ULSrLq:;
  if (UserAgentInfo.strBrowser == 3)
    if (!Util_IsNullOrEmptyString(LinkedPicture_GetSrc(b))) {
      var a = document.getElementById(b[9]);
      if (a != null) {
        var c = PictureControl_GetPicture(a);
        (c.height == 0 || c.width == 0) && PictureControl_OnError(a);
      }
    }
}
LinkedPicture.OnClick = LinkedPicture_OnClick;
function LinkedPicture_OnClick(a, b) {
  ULSrLq:;
  a = PictureControl_EnsureControl(a);
  var c = LeafControl.OnClick(a, b);
  LinkedPicture_InvokeInsert(a, b);
  return c;
}
LinkedPicture.Render = LinkedPicture_Render;
function LinkedPicture_Render(b, d, e, c) {
  ULSrLq:;
  var a;
  if (View_IsPrintingTemplate(b)) a = LinkedPicture_PrintTemplate;
  else a = LinkedPicture_Template;
  PictureControl_RenderHelper(b, d, e, c, a);
}
LinkedPicture.ResolveSpecialValue = LinkedPicture_ResolveSpecialValue;
function LinkedPicture_ResolveSpecialValue(c, b, d, e) {
  ULSrLq:;
  var a = null;
  switch (c) {
    case 10:
      a = LinkedPicture_GetSrc(b);
      if (!Util_IsValidURI(a) && !Util_IsSecureURI(a)) a = "";
      break;
    default:
      a = PictureControl_ResolveSpecialValue(c, b, d, e);
  }
  return a;
}
LinkedPicture.IsValid = LinkedPicture_IsValid;
function LinkedPicture_IsValid(b) {
  ULSrLq:;
  if (ViewDataNode_IsValid(b)) {
    var a = LinkedPicture_GetFirstSecondaryDataNode(b);
    if (a != null) return ViewDataNode_IsValid(a);
    return true;
  }
  return false;
}
LinkedPicture.IsBlank = LinkedPicture_IsBlank;
function LinkedPicture_IsBlank(a) {
  ULSrLq:;
  if (!ViewDataNode_IsValid(a)) return ViewDataNode_IsBlank(a);
  else {
    var b = LinkedPicture_GetFirstSecondaryDataNode(a);
    return ViewDataNode_IsBlank(b);
  }
}
LinkedPicture.GetFirstSecondaryDataNode = LinkedPicture_GetFirstSecondaryDataNode;
function LinkedPicture_GetFirstSecondaryDataNode(b) {
  ULSrLq:;
  var a = LinkedPicture.GetSecondaryDataNodes(b);
  if (a && a.length > 0) return a[0];
  else return null;
}
LinkedPicture.GetSecondaryDataNodes = PictureControl_GetSecondaryDataNodes;
LinkedPicture.GetFormatting = BaseControl.GetFormatting;
LinkedPicture.Highlight = LeafControl.Highlight;
LinkedPicture.IsSelected = LeafControl.IsSelected;
LinkedPicture.OnBlur = LeafControl.OnBlur;
LinkedPicture.OnChange = LeafControl.OnChange;
LinkedPicture.OnClick = LinkedPicture_OnClick;
LinkedPicture.OnFocus = LeafControl_FocusParentInfoPathControl;
LinkedPicture.OnMouseDown = LeafControl.OnMouseDown;
LinkedPicture.OnMouseUp = LeafControl.OnMouseUp;
LinkedPicture.OnKeyDown = LinkedPicture_OnKeyPress;
LinkedPicture.RemoveHighlight = LeafControl.RemoveHighlight;
LinkedPicture.RestoreFocus = PictureControl_RestoreFocus;
LinkedPicture.Select = LeafControl.Select;
LinkedPicture.SetDisable = PictureControl_SetDisable;
LinkedPicture.SetHidden = PictureControl_SetHidden;
LinkedPicture.SetDisplay = PictureControl_SetDisplay;
LinkedPicture.UnSelect = LeafControl.UnSelect;
LinkedPicture.MoveStyles = PictureControl_MoveStyles;
LinkedPicture.GetAsteriskOffsetNormal = LeafControl.GetAsteriskOffsetNormal;
LinkedPicture.GetAsteriskOffsetTop = LeafControl.GetAsteriskOffsetTop;
LinkedPicture.GetErrorMessageOffset = LeafControl.GetErrorMessageOffset;
LinkedPicture.GetErrorMessageOffsetTop = LeafControl.GetErrorMessageOffsetTop;
function ListCollection() {}
ListCollection.Render = ListCollection_Render;
function ListCollection_Render(c, b, d, a) {
  ULSrLq:;
  IP_Collection_Render(c, b, d, a, ListCollection_Template);
}
ListCollection.ResolveSpecialValue = ListCollection_ResolveSpecialValue;
function ListCollection_ResolveSpecialValue(c, d, b, e) {
  ULSrLq:;
  var a = null;
  switch (c) {
    case 10:
      a = ListCollection.GetListType(b);
      break;
    case 11:
      a = ListCollection.GetListStartValue(b);
      break;
    default:
      a = StructuralEditingControl.ResolveSpecialValue(c, d, b, e);
  }
  return a;
}
ListCollection.GetListType = ListCollection_GetListType;
function ListCollection_GetListType(a) {
  ULSrLq:;
  return a[6][4][0];
}
ListCollection.GetListStartValue = ListCollection_GetListStartValue;
function ListCollection_GetListStartValue(a) {
  ULSrLq:;
  return a[6][4][1];
}
ListCollection.OnChange = BaseControl.OnChange;
ListCollection.OnClick = BaseControl.OnClick;
ListCollection.OnFocus = BaseControl.OnFocus;
ListCollection.OnBlur = BaseControl.OnBlur;
ListCollection.OnMouseOver = BaseControl.OnMouseOver;
ListCollection.OnMouseOut = BaseControl.OnMouseOut;
ListCollection.OnMouseDown = BaseControl.OnMouseDown;
ListCollection.OnMouseUp = BaseControl.OnMouseUp;
ListCollection.OnKeyPress = BaseControl.OnKeyPress;
ListCollection.OnAfterCreate = BaseControl.OnAfterCreate;
ListCollection.IsValid = BaseControl.IsValid;
ListCollection.IsSelected = BaseControl.IsSelected;
ListCollection.Select = BaseControl.Select;
ListCollection.UnSelect = BaseControl.UnSelect;
ListCollection.IsSigned = StructuralEditingControl.IsSigned;
function ListContainer() {}
ListContainer.Render = ListContainer_Render;
function ListContainer_Render(d, c, e, a, b) {
  ULSrLq:;
  Container.RenderHelper(d, c, e, a, b, ListContainer_Template);
}
ListContainer.ResolveSpecialValue = BaseControl.ResolveSpecialValue;
function ListItem() {}
ListItem.Render = ListItem_Render;
function ListItem_Render(a, d, j, b) {
  ULSrLq:;
  var e;
  if (View.GetTemplateType(a.FormId) == 1) e = ListItemPrint_Template;
  else e = ListItem_Template;
  for (
    var f = LeafControl_InitializeViewDataNode(j, a, d),
      i = CurrentFormData_IsV4UI(a.FormId),
      h = i ? "display:block;" : "",
      g = LeafControl_RenderBeginWrappingSpanEx(f, a, d, h, b),
      c = 0;
    c < 3;
    c++
  )
    var k = BaseControl.RenderTemplateItem(e[c], a, d, f, b);
  LeafControl_RenderLeafAttributes(f, a, d, false, false, b);
  if (ViewDataNode_IsDisabled(a)) {
    b.push(" ");
    b.push("disabled");
    b.push('="true" ');
  }
  for (var c = 3; c < e.length; c++)
    var k = BaseControl.RenderTemplateItem(e[c], a, d, f, b);
  g && LeafControl_RenderEndWrappingSpan(f, a, d, b);
}
ListItem.ResolveSpecialValue = ListItem_ResolveSpecialValue;
function ListItem_ResolveSpecialValue(c, b, h, i) {
  ULSrLq:;
  var a = null;
  switch (c) {
    case 7:
      var g = b._objViewDataNodeParent,
        f = g._objViewDataNodeParent,
        e = f.SnippetElement,
        d = StructuralEditingControl.GetTitle(e);
      if (d != null) a = d;
      else a = "";
      break;
    case 10:
      a = BaseControl_GetFormattedValue(b);
      break;
    default:
      a = LeafControl.ResolveSpecialValue(c, b, h, i);
  }
  return a;
}
ListItem.OnBlur = ListItem_OnBlur;
function ListItem_OnBlur(a, c) {
  ULSrLq:;
  var b = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(b) != 1
    )
  )
    return;
  if (UserAgentInfo.strBrowser == 2 && CurrentFormData_IsV4UI(b)) {
    var d = LeafControl_GetWrappingSpan(a);
    d.style.outline = "";
  }
  LeafControl.OnBlur(a, c);
  ListItem.OnChange(a, c);
}
ListItem.OnChange = ListItem_OnChange;
function ListItem_OnChange(a, g) {
  ULSrLq:;
  var b = ViewDataNode_GetViewDataNodeFromHtml(a),
    h = b.SnippetElement,
    f = ViewDataNode_GetDatum(b),
    e = a.value,
    d = e != f.GetValue() || b._keyPressed;
  if (d) {
    var c = ListItem.AddTextChangeEventLogEntry(a, b);
    LeafControl.OnChange(a, g);
    if (c) {
      c = ViewDataNode_OnControlChange(a);
      c && AccessibilityIFrame_RefreshIFrame();
    }
  }
}
ListItem.ResizeTextArea = ListItem_ResizeTextArea;
function ListItem_ResizeTextArea(b) {
  ULSrLq:;
  var a = document.getElementById(b);
  a != null && ListItem_CalculateHeight(a);
}
ListItem.DelayedResize = ListItem_DelayedResize;
function ListItem_DelayedResize(a, b) {
  ULSrLq:;
  window.setTimeout(function () {
    ULSrLq:;
    ListItem_ResizeTextArea(a.id);
  }, b);
}
ListItem.AddTextChangeEventLogEntry = ListItem_AddTextChangeEventLogEntry;
function ListItem_AddTextChangeEventLogEntry(b, a) {
  ULSrLq:;
  var d = ListItem.GetFormatting(a),
    c = b.value;
  return Util_AddTextChangeEventIntoEventLog(b, d, c, a);
}
ListItem.GetValueFromControl = ListItem_GetValueFromControl;
function ListItem_GetValueFromControl(a) {
  ULSrLq:;
  return a.value;
}
ListItem.OnKeyPress = ListItem_OnKeyPress;
function ListItem_OnKeyPress(a, b) {
  ULSrLq:;
  ListItem_DelayedResize(a, 1);
  return TextList.OnKeyPress(a, b);
}
ListItem.OnKeyDown = ListItem_OnKeyDown;
function ListItem_OnKeyDown(a, b) {
  ULSrLq:;
  ListItem_DelayedResize(a, 1);
  return TextList.OnKeyDown(a, a.value, b);
}
ListItem.RestoreFocus = ListItem_RestoreFocus;
function ListItem_RestoreFocus(a) {
  ULSrLq:;
  try {
    SelectionService.Select(a);
    a.focus();
    a.focus();
  } catch (b) {}
}
ListItem.SetValueOfControl = ListItem_SetValueOfControl;
function ListItem_SetValueOfControl(a, c) {
  ULSrLq:;
  var b = Util.GetPlainTextFromValueObject(c);
  a.valueOf != b && ListItem_DelayedResize(a, 1);
  a.value = b;
  return a;
}
ListItem.IsFocusable = ListItem_IsFocusable;
function ListItem_IsFocusable() {
  ULSrLq:;
  return true;
}
ListItem.OnAfterCreate = ListItem_OnAfterCreate;
function ListItem_OnAfterCreate(a) {
  ULSrLq:;
  var b = document.getElementById(a[9]);
  if (!ViewDataNode_IsValid(a))
    if (ViewDataNode_IsBlank(a)) {
      if (b == null) return;
      ErrorVisualization_ShowAsterisk(b, a);
    }
  b != null && ListItem_DelayedResize(b, 1);
}
ListItem.Highlight = ListItem_HighLight;
function ListItem_HighLight(a, b) {
  ULSrLq:;
  var d = CurrentFormData_IsV4UI(a.getAttribute("FormId"));
  if (b) {
    if (UserAgentInfo.strBrowser == 2 && d) {
      var c = LeafControl_GetWrappingSpan(a);
      c.style.outline = "auto 4px -webkit-focus-ring-color";
    }
    a.focus();
    a.select();
  }
  LeafControl.Highlight(a, b);
}
ListItem.CalculateHeight = ListItem_CalculateHeight;
function ListItem_CalculateHeight(a) {
  ULSrLq:;
  if (UserAgentInfo.strBrowser != 1) a.style.height = "0px";
  var d = CurrentFormData_IsV4UI(a.getAttribute("FormId")),
    b = a.scrollHeight,
    c = b != a.clientHeight;
  if (c)
    if (!d && UserAgentInfo.strBrowser == 3)
      a.style.height = a.scrollHeight + 2 + "px";
    else a.style.height = b + "px";
}
ListItem.IsRenderingErrorVisualizationSpansItself = ListItem_IsRenderingErrorVisualizationSpansItself;
function ListItem_IsRenderingErrorVisualizationSpansItself() {
  ULSrLq:;
  return true;
}
ListItem.OnClick = LeafControl.OnClick;
ListItem.OnMouseDown = LeafControl.OnMouseDown;
ListItem.OnMouseUp = LeafControl.OnMouseUp;
ListItem.IsValid = LeafControl.IsValid;
ListItem.IsSelected = LeafControl.IsSelected;
ListItem.Select = LeafControl.Select;
ListItem.UnSelect = LeafControl.UnSelect;
ListItem.GetFormatting = BaseControl.GetFormatting;
ListItem.RemoveHighlight = LeafControl.RemoveHighlight;
ListItem.GetAsteriskOffsetNormal = LeafControl.GetAsteriskOffsetNormal;
ListItem.GetAsteriskOffsetTop = LeafControl.GetAsteriskOffsetTop;
ListItem.GetErrorMessageOffset = LeafControl.GetErrorMessageOffset;
ListItem.GetErrorMessageOffsetTop = LeafControl.GetErrorMessageOffsetTop;
ListItem.OnMouseOver = LeafControl.OnMouseOver;
ListItem.OnMouseOut = LeafControl.OnMouseOut;
ListItem.OnFocus = LeafControl.OnFocus;
function TextList() {}
TextList.boolKeyEventsBlocked = false;
TextList.GetFormatting = BaseControl.GetFormatting;
TextList.OnKeyPress = TextList_OnKeyPress;
function TextList_OnKeyPress(b, a) {
  ULSrLq:;
  var c = KeyboardService.GetVirtualKey(a),
    i = b.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(i) != 1
    )
  ) {
    if (Util_KillEnterEvent(a)) return false;
    if (UserAgentInfo.strBrowser == 2) {
      a.returnValue = false;
      return false;
    }
    return true;
  }
  LeafControl_HideAsteriskAfterTyping(b, a);
  if (c == 1 || c == 0 || c == 2) {
    if (!TextList.boolKeyEventsBlocked) {
      var g = ViewDataNode_GetViewDataNodeFromHtml(b),
        f = g._objViewDataNodeParent,
        e = f._objViewDataNodeParent,
        d = e.SnippetElement,
        h = IP_Collection.GetXmlToEdit(d);
      if (!Util.IsNonEmptyString(h)) {
        Util.StopEventProprogation(a);
        a.returnValue = false;
        return false;
      }
      TextList.boolKeyEventsBlocked = true;
      window.setTimeout("TextList.DoInsert('" + b.id + "')", 1);
    }
    a.returnValue = false;
    Util.StopEventProprogation(a);
    return false;
  } else return LeafControl.OnKeyPress(b, a);
  Util.StopEventProprogation(a);
  return true;
}
TextList.OnKeyDown = TextList_OnKeyDown;
function TextList_OnKeyDown(b, d, c) {
  ULSrLq:;
  var e = b.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(e) != 1
    )
  )
    return true;
  var a = KeyboardService.GetVirtualKey(c);
  if ((a == 20 || a == 21) && !TextList.boolKeyEventsBlocked) {
    TextList.boolKeyEventsBlocked = true;
    window.setTimeout(function () {
      ULSrLq:;
      TextList_Delete(b.id, Util.EscapeStringForScript(d), false);
    }, 1);
  } else if ((a == 19 || a == 11) && !TextList.boolKeyEventsBlocked) {
    TextList.boolKeyEventsBlocked = true;
    window.setTimeout(function () {
      ULSrLq:;
      TextList_Delete(b.id, Util.EscapeStringForScript(d), true);
    }, 1);
  } else if (a == 1 || a == 0 || a == 2)
    if (UserAgentInfo.strBrowser == 3) {
      c.returnValue = false;
      Util.StopEventProprogation(c);
      return false;
    }
}
function TextList_InvokeInsert(b) {
  ULSrLq:;
  var a = document.getElementById(b);
  TextList.Insert(a, a, "", "");
}
TextList.DoInsert = TextList_DoInsert;
function TextList_DoInsert(m) {
  ULSrLq:;
  var f = document.getElementById(m),
    a = ViewDataNode_GetViewDataNodeFromHtml(f);
  if (View_IsPrintingTemplate(a)) return;
  var d = a._objViewDataNodeParent,
    i = d._objViewDataNodeParent,
    j = a.SnippetElement.ControlType["GetValueFromControl"],
    c = j(f),
    e = true,
    b,
    g = TextList.GetFormatting(a);
  if (g.getFormattingType() != 0) b = g.Unformat(c);
  else b = Util.CreateObjUnformatResult(c, c, false);
  var h = ViewDataNode_GetDatum(a);
  h.SetValue(b.strUnformattedValue);
  h.ValidateDataType();
  var k = document.getElementById(i[9]),
    l = document.getElementById(d[9]);
  e = TextList.Insert(k, l, c, b.strUnformattedValue);
  TextList.boolKeyEventsBlocked = false;
  return e;
}
TextList.Insert = TextList_Insert;
function TextList_Insert(b, a, z, o) {
  ULSrLq:;
  var i = b.getAttribute("FormId"),
    A = GlobalFormData.Get(i),
    g = ViewDataNode_GetViewDataNodeFromHtml(b),
    h = g.SnippetElement,
    r = IP_Collection.GetHtmlTemplate(h),
    j = IP_Collection.GetContainerSnippet(h),
    q = IP_Collection.GetDataToInsert(h),
    d = Util.Clone(q),
    k = null,
    e = true,
    c;
  if (a != b) c = "";
  else c = z;
  if (a != b) {
    var s = ViewDataNode_GetViewDataNodeFromHtml(a),
      n = ViewDataNode_GetChildNodes(s)[0];
    if (ViewDataNode_IsDisabled(n)) {
      TextList.boolKeyEventsBlocked = false;
      return e;
    }
    var m,
      p = TextList.GetFormatting(n);
    if (p.getFormattingType() != 0) m = p.Unformat(c);
    else m = Util.CreateObjUnformatResult(c, c, false);
    c = m.strUnformattedValue;
  }
  if (!(Snippet_GetRoundTripModel(h) == 1) && d != null) {
    d._objViewDataNodeParent = g;
    g_objMultipleBindingMap = [];
    g_objMultipleBindingIdMap = [];
    Container_InitializeViewDataNodes(i, g, j, d, true);
    StructuralEditingControl._InsertRelativeIntoViewData(
      false,
      a == b ? null : a,
      d,
      g
    );
    var u = ViewDataNode_GetChildNodes(d)[0],
      x = ViewDataNode_GetDatum(u);
    x.SetValue(c);
    var y = StructuralEditingControl._RenderHtml(d, j, b, r);
    k = StructuralEditingControl._InsertRelativeIntoHtml(
      y,
      false,
      a == b ? null : a,
      b
    );
    g_objMultipleBindingMap = null;
    g_objMultipleBindingIdMap = null;
  }
  var l = Snippet_GetRoundTripModel(j);
  if (k == null) {
    g_objCurrentFormDataSelection != null &&
      g_objCurrentFormDataSelection.BackupFocusForStructural(
        b,
        a != b ? a : null,
        false
      );
    e = EventLog_Add(
      i,
      21,
      a,
      BaseControl_GetOriginalId(a),
      "",
      o + c,
      l != 2,
      false,
      false,
      0,
      2
    );
    return e;
  } else {
    e = EventLog_Add(
      i,
      21,
      a,
      BaseControl_GetOriginalId(a),
      BaseControl_GetOriginalId(k),
      o + c,
      l == 1,
      false,
      false,
      0,
      2
    );
    if (e) {
      ViewDataNode_FireOnAfterCreate(g);
      if (
        !ViewDataNode_OnStructuralChange(d, l != 2, !Util.IsNonEmptyString(c))
      )
        return false;
      AccessibilityIFrame_RefreshIFrame();
      var t = ViewDataNode_GetChildNodes(d)[0],
        f = document.getElementById(t[9]);
      if (f != null) {
        f = BaseControl_FindFirstFocusableControl(f);
        if (f != null) {
          var v = ViewDataNode_GetViewDataNodeFromHtml(f),
            w = v.SnippetElement.ControlType["RestoreFocus"];
          w(f);
        }
      }
    }
  }
  return e;
}
TextList.Delete = TextList_Delete;
function TextList_Delete(A, C, p) {
  ULSrLq:;
  var e = document.getElementById(A),
    E = e.getAttribute("FormId");
  if (e == null) {
    SelectionService.Select(null);
    TextList.boolKeyEventsBlocked = false;
    return;
  }
  var d = ViewDataNode_GetViewDataNodeFromHtml(e);
  if (ViewDataNode_IsDisabled(d)) {
    SelectionService.Select(null);
    TextList.boolKeyEventsBlocked = false;
    return;
  }
  var l = d.SnippetElement.ControlType["GetValueFromControl"],
    g = l(e);
  if (g != C) {
    TextList.boolKeyEventsBlocked = false;
    return;
  }
  var c = d._objViewDataNodeParent,
    a = document.getElementById(c[9]);
  if (a == null) {
    TextList.boolKeyEventsBlocked = false;
    return;
  }
  var j = c._objViewDataNodeParent,
    y = j.SnippetElement,
    B = IP_Collection.GetXmlToEdit(y);
  if (!Util.IsNonEmptyString(B)) {
    TextList.boolKeyEventsBlocked = false;
    return;
  }
  var s = false,
    b = p ? a.nextSibling : a.previousSibling;
  while (b != null && b.id != "") {
    if (
      b.innerHTML == "" ||
      (b.getAttribute("ScriptClass") == "MultiSelectListBoxContainer" &&
        ViewDataNode_IsHidden(
          ViewDataNode_GetChildNodes(ViewDataNode_GetViewDataNodeFromHtml(b))[0]
        ))
    ) {
      b = p ? b.nextSibling : b.previousSibling;
      continue;
    }
    s = true;
    break;
  }
  if (!s) {
    TextList.boolKeyEventsBlocked = false;
    return;
  }
  if (p) {
    var D = a;
    a = b;
    b = D;
    c = ViewDataNode_GetViewDataNodeFromHtml(a);
    d = ViewDataNode_GetChildNodes(c)[0];
    e = document.getElementById(d[9]);
    g = l(e);
  }
  var w = ViewDataNode_GetViewDataNodeFromHtml(b),
    f = ViewDataNode_GetChildNodes(w)[0],
    x = document.getElementById(f[9]),
    m = document.getElementById(j[9]),
    v = c.SnippetElement,
    r = Snippet_GetRoundTripModel(v),
    i,
    u = TextList.GetFormatting(d);
  if (u.getFormattingType() != 0) i = u.Unformat(g);
  else i = Util.CreateObjUnformatResult(g, g, false);
  var o = l(x),
    h,
    q = TextList.GetFormatting(f);
  if (q.getFormattingType() != 0) h = q.Unformat(o);
  else h = Util.CreateObjUnformatResult(o, o, false);
  if (
    !EventLog_Add(
      E,
      22,
      a,
      BaseControl_GetOriginalId(a),
      i.strUnformattedValue,
      h.strUnformattedValue,
      r == 1,
      false,
      false,
      0,
      3
    )
  ) {
    TextList.boolKeyEventsBlocked = false;
    return;
  }
  var t = ViewDataNode_GetDatum(f);
  t.SetValue(h.strUnformattedValue + i.strUnformattedValue);
  t.ValidateDataType();
  ViewDataNode_MarkSubtreeAsDeleted(c);
  if (!ViewDataNode_OnStructuralChange(j, r != 2, false)) {
    TextList.boolKeyEventsBlocked = false;
    return;
  }
  ViewDataNode_Delete(c);
  var m = document.getElementById(m.id);
  a = document.getElementById(a.id);
  if (UserAgentInfo.strBrowser == 2)
    try {
      SelectionService.objSelectedControl.blur();
    } catch (F) {}
  SelectionService.Select(null);
  if (m != null && a.parentNode != null) {
    var n = m;
    if (a.getAttribute("ScriptClass") == "MultiSelectListBoxContainer")
      n = n.firstChild;
    n.removeChild(a);
  }
  ErrorVisualization_UpdateAllAsterisks();
  AccessibilityIFrame_RefreshIFrame();
  var k = document.getElementById(f[9]);
  if (k != null && k.disabled != true) {
    var z = f.SnippetElement.ControlType["RestoreFocus"];
    z(k);
  }
  TextList.boolKeyEventsBlocked = false;
}
function SharePointFileAttachmentCollection() {}
SharePointFileAttachmentCollection.Render = SharePointFileAttachmentCollection_Render;
function SharePointFileAttachmentCollection_Render(b, d, e, c) {
  ULSrLq:;
  var a;
  if (View.GetTemplateType(b.FormId) == 1)
    a = SharePointFileAttachmentCollectionPrint_Template;
  else a = SharePointFileAttachmentCollection_Template;
  IP_Collection_Render(b, d, e, c, a);
}
SharePointFileAttachmentCollection.ResolveSpecialValue = SharePointFileAttachmentCollection_ResolveSpecialValue;
function SharePointFileAttachmentCollection_ResolveSpecialValue(c, d, b, e) {
  ULSrLq:;
  var a = null;
  switch (c) {
    case 6:
      a = StructuralEditingControl.ResolveSpecialValue(c, d, b, e);
      if (!a) a = IntlCoreStrings.k_strClickHereToAttachFile;
      break;
    case 10:
      a = IntlCoreStrings.k_strSPAttachmentAddFileText;
      break;
    case 11:
      a = SharePointFileAttachmentCollection_GetAccessKey(b);
      break;
    case 12:
      a = SharePointFileAttachmentCollection_GetStyle(b);
      break;
    default:
      a = StructuralEditingControl.ResolveSpecialValue(c, d, b, e);
  }
  return a;
}
SharePointFileAttachmentCollection.IsDisabled = SharePointFileAttachmentCollection_IsDisabled;
function SharePointFileAttachmentCollection_IsDisabled(a) {
  ULSrLq:;
  return Collection_GetCollectionContent(a)[0] || ViewDataNode_IsDisabled(a);
}
SharePointFileAttachmentCollection.GetAccessKey = SharePointFileAttachmentCollection_GetAccessKey;
function SharePointFileAttachmentCollection_GetAccessKey(b) {
  ULSrLq:;
  var a = b[6][4][0];
  if (a == null) a = "";
  return a;
}
SharePointFileAttachmentCollection.GetStyle = SharePointFileAttachmentCollection_GetStyle;
function SharePointFileAttachmentCollection_GetStyle(b) {
  ULSrLq:;
  var a = b[6][4][1];
  if (a == null) a = "";
  return a;
}
SharePointFileAttachmentCollection.OnClick = SharePointFileAttachmentCollection_OnClick;
function SharePointFileAttachmentCollection_OnClick(a, b) {
  ULSrLq:;
  var c = ViewDataNode_GetViewDataNodeFromHtml(a);
  if (!SharePointFileAttachmentCollection_IsDisabled(c)) {
    LeafControl.OnClick(a, b);
    SharePointFileAttachmentCollection.InvokeAttach(a.id, b);
  }
  return false;
}
SharePointFileAttachmentCollection.InvokeAttach = SharePointFileAttachmentCollection_InvokeAttach;
function SharePointFileAttachmentCollection_InvokeAttach(d, g) {
  ULSrLq:;
  var b = document.getElementById(d),
    c = b.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(c) != 1
    )
  )
    return;
  SelectionService_RememberFocus(b, g);
  var h = ViewDataNode_GetViewDataNodeFromHtml(b),
    a = [];
  Dialog.funcCallbackOnClose = null;
  a[1] = IntlCoreStrings.k_strFileAttachmentDialogTitle;
  a[3] = CurrentFormData.Direction(c);
  a[5] = Dialog.TextAlignmentStyle();
  var e = [
      0,
      IntlCoreStrings.k_strAttachButtonText,
      "SharePointFileAttachmentCollection_FileAttachmentServerRequest();Util_StopEventProprogation(event);return false;",
      "",
      "submit",
    ],
    f = [
      1,
      IntlCoreStrings.k_strCancelButtonText,
      "Dialog_OnTerminateButton();Util_StopEventProprogation(event);return false;",
      "",
      "button",
    ];
  a[2] = [e, f];
  a[11] = IntlCoreStrings.k_strFileAttachmentDialogMessage;
  return Dialog_ShowModalDialogEx(c, "FileAttachment", 1, 1, false, a, b);
}
function SharePointFileAttachmentCollection_ValidateFilename(d, i) {
  ULSrLq:;
  for (
    var c = i.split("\\"),
      f = c[c.length - 1],
      b = ViewDataNode_GetChildNodes(d),
      a = 0;
    a < b.length;
    a++
  ) {
    var e = b[a],
      g = Container.GetChildViewDataNodes(e)[0],
      h = SharePointFileAttachmentItem_GetFileName(g);
    if (f.toLowerCase() == h.toLowerCase()) {
      UserMessages.ShowAlertMessage(
        IntlCoreStrings.k_strSPAttachmentFileAlreadyExists,
        true
      );
      return false;
    }
  }
  return true;
}
SharePointFileAttachmentCollection.FileAttachmentServerRequest = SharePointFileAttachmentCollection_FileAttachmentServerRequest;
function SharePointFileAttachmentCollection_FileAttachmentServerRequest() {
  ULSrLq:;
  Dialog_DisableButtons();
  var a = document.getElementById("FileAttachmentUpload");
  if (a != null && (a.value == null || a.value.length == 0)) {
    Dialog_EnableButtons();
    return false;
  }
  var b = Dialog.objClientSideData,
    c = a.value;
  if (Util_IsNonEmptyString(c)) c = Util_Trim(c);
  if (c.length == 0) {
    Dialog_ShowError(
      IntlCoreStrings.k_strFileAttachmentDialogNoFileSelectedErr
    );
    Dialog_EnableButtons();
    return false;
  }
  var e = ViewDataNode_GetViewDataNodeFromHtml(b);
  if (!SharePointFileAttachmentCollection_ValidateFilename(e, a.value)) {
    Dialog_EnableButtons();
    return false;
  }
  var f = b.getAttribute("FormId");
  try {
    EventLog_Add(
      f,
      31,
      b,
      BaseControl.GetOriginalId(b),
      "",
      "",
      true,
      true,
      true,
      0,
      2
    );
  } catch (d) {
    Dialog_EnableButtons();
    if (UserAgentInfo.strBrowser == 1 && d.number == -2147024891) {
      EventLog_Remove(Dialog.strFormId, 31);
      Dialog_ShowError(
        IntlCoreStrings.k_strFileAttachmentUploadFileMissingError
      );
    } else UserMessages_ShowAlertMessage(d.message, false);
  }
  return true;
}
SharePointFileAttachmentCollection.IsFocusable = SharePointFileAttachmentCollection_IsFocusable;
function SharePointFileAttachmentCollection_IsFocusable() {
  ULSrLq:;
  return true;
}
SharePointFileAttachmentCollection.OnKeyPress = SharePointFileAttachmentCollection_OnKeyPress;
function SharePointFileAttachmentCollection_OnKeyPress(a, b) {
  ULSrLq:;
  var e = a.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(e) != 1
    )
  )
    return true;
  var c = KeyboardService_GetVirtualKey(b);
  if (c == 1 || c == 18) {
    var d = ViewDataNode_GetViewDataNodeFromHtml(a);
    !SharePointFileAttachmentCollection_IsDisabled(d) &&
      SharePointFileAttachmentCollection.InvokeAttach(a.id, b);
  }
  return LeafControl.OnKeyPress(a, b);
}
SharePointFileAttachmentCollection.IsInFocusableState = SharePointFileAttachmentCollection_IsInFocusableState;
function SharePointFileAttachmentCollection_IsInFocusableState(a) {
  ULSrLq:;
  return (
    BaseControl_IsInFocusableState(a) &&
    !SharePointFileAttachmentCollection_IsDisabled(a)
  );
}
SharePointFileAttachmentCollection.OnAfterCreate = SharePointFileAttachmentCollection_OnAfterCreate;
function SharePointFileAttachmentCollection_OnAfterCreate(a) {
  ULSrLq:;
  if (SharePointFileAttachmentCollection_IsDisabled(a)) {
    var b = document.getElementById(a[9]);
    if (b == null) return;
    BaseControl_SetDisable(b, true);
  }
}
SharePointFileAttachmentCollection.OnChange = BaseControl.OnChange;
SharePointFileAttachmentCollection.OnFocus = LeafControl_FocusParentInfoPathControl;
SharePointFileAttachmentCollection.OnBlur = BaseControl.OnBlur;
SharePointFileAttachmentCollection.OnMouseOver = BaseControl.OnMouseOver;
SharePointFileAttachmentCollection.OnMouseOut = BaseControl.OnMouseOut;
SharePointFileAttachmentCollection.OnMouseDown = BaseControl.OnMouseDown;
SharePointFileAttachmentCollection.OnMouseUp = BaseControl.OnMouseUp;
SharePointFileAttachmentCollection.IsValid = BaseControl.IsValid;
SharePointFileAttachmentCollection.IsSelected = BaseControl.IsSelected;
SharePointFileAttachmentCollection.Select = BaseControl.Select;
SharePointFileAttachmentCollection.UnSelect = BaseControl.UnSelect;
SharePointFileAttachmentCollection.IsSigned = StructuralEditingControl.IsSigned;
function SharePointFileAttachmentItem() {}
SharePointFileAttachmentItem.Render = SharePointFileAttachmentItem_Render;
function SharePointFileAttachmentItem_Render(a, c, h, b) {
  ULSrLq:;
  var d;
  if (View.GetTemplateType(a.FormId) == 1)
    d = SharePointFileAttachmentItemPrint_Template;
  else d = SharePointFileAttachmentItem_Template;
  var e = LeafControl_InitializeViewDataNode(h, a, c),
    g = LeafControl_RenderBeginWrappingSpan(e, a, c, b);
  b.push(d[0]);
  LeafControl_RenderLeafAttributes(e, a, c, true, false, b);
  for (var f = 1; f < d.length; f++)
    var i = BaseControl.RenderTemplateItem(d[f], a, c, e, b);
  g && LeafControl_RenderEndWrappingSpan(e, a, c, b);
}
function SharePointFileAttachmentItem_GetFileName(a) {
  ULSrLq:;
  return a[1][2][0];
}
function SharePointFileAttachmentItem_GetDisplayValue(a) {
  ULSrLq:;
  return a[1][2][1];
}
function SharePointFileAttachmentItem_IsServerURL(a) {
  ULSrLq:;
  return a[1][2][2];
}
function SharePointFileAttachmentItem_GetDeleteButtonTitle(a) {
  ULSrLq:;
  return SharePointFileAttachmentItem_GetDeleteAltText(a);
}
function SharePointFileAttachmentItem_GetDeleteAltText(b) {
  ULSrLq:;
  var a = [];
  a.push(IntlCoreStrings.k_strSPAttachmentFileDeleteAltText);
  a.push(" ");
  if (SharePointFileAttachmentItem_IsServerURL(b))
    a.push(SharePointFileAttachmentItem_GetFileName(b));
  else a.push(SharePointFileAttachmentItem_GetDisplayValue(b));
  return a.join("");
}
SharePointFileAttachmentItem.ResolveSpecialValue = SharePointFileAttachmentItem_ResolveSpecialValue;
function SharePointFileAttachmentItem_ResolveSpecialValue(d, b, e, f) {
  ULSrLq:;
  var a = null;
  switch (d) {
    case 10:
      var c = SharePointFileAttachmentItem_GetDisplayValue(b);
      if (SharePointFileAttachmentItem_IsServerURL(b)) a = c;
      else a = Util_HtmlEncodeSpecialValue(c, 49152);
      break;
    case 11:
      a = SharePointFileAttachmentItem_GetDeleteAltText(b);
      break;
    case 12:
      a = SharePointFileAttachmentItem_GetDeleteButtonTitle(b);
      break;
    default:
      a = LeafControl.ResolveSpecialValue(d, b, e, f);
  }
  return a;
}
SharePointFileAttachmentItem.RestoreFocus = SharePointFileAttachmentItem_RestoreFocus;
function SharePointFileAttachmentItem_RestoreFocus(b) {
  ULSrLq:;
  SelectionService.Select(b);
  var a = b.firstChild;
  if (a != null)
    try {
      a.focus();
      a.focus();
    } catch (c) {}
}
SharePointFileAttachmentItem.IsFocusable = SharePointFileAttachmentItem_IsFocusable;
function SharePointFileAttachmentItem_IsFocusable() {
  ULSrLq:;
  return true;
}
SharePointFileAttachmentItem.OnClick = SharePointFileAttachmentItem_OnClick;
function SharePointFileAttachmentItem_OnClick(c, d) {
  ULSrLq:;
  var a = c.parentNode,
    b = ViewDataNode_GetViewDataNodeFromHtml(a);
  if (b != null)
    if (!SharePointFileAttachmentItem_IsDisabled(b)) {
      LeafControl.OnClick(a, d);
      SharePointFileAttachmentItem_Delete(a, b);
    }
  return false;
}
function SharePointFileAttachmentItem_Delete(b, a) {
  ULSrLq:;
  if (SharePointFileAttachmentItem_IsServerURL(a)) {
    var c = b.id;
    Util_GetRecycleBinEnabledFlag(a.FormId, function (a) {
      ULSrLq:;
      SharePointFileAttachmentItem_DeleteCallback(a, c);
    });
  } else SharePointFileAttachmentItem_DeleteCore(b, a);
}
function SharePointFileAttachmentItem_DeleteCallback(c, a) {
  ULSrLq:;
  if (a != null) {
    var d = c
        ? IntlCoreStrings.k_strSPAttachmentConfirmRecycleText
        : IntlCoreStrings.k_strSPAttachmentConfirmDeleteText,
      f = UserMessages.ShowConfirmMessage(d, true);
    if (f) {
      if (Dialog.enumModalDialogState != 0) {
        Dialog.intMinimumHeartBeatsToShow = 0;
        Dialog_HideDialog();
      }
      var b = document.getElementById(a),
        e = ViewDataNode_GetViewDataNodeFromHtml(b);
      SharePointFileAttachmentItem_DeleteCore(b, e);
    }
  }
}
function SharePointFileAttachmentItem_DeleteCore(d, e) {
  ULSrLq:;
  if (d == null || e == null) return;
  var h = d.getAttribute("FormId"),
    b = e._objViewDataNodeParent,
    a = document.getElementById(b[9]);
  ViewDataNode_SetHidden(e, true);
  var c = BaseControl_FindFirstFocusableControl(d);
  ViewDataNode_MarkSubtreeAsDeleted(b);
  ViewDataNode_Delete(b);
  var f = a.parentNode;
  if (f != null) {
    f.removeChild(a);
    AccessibilityIFrame_RefreshIFrame();
  }
  EventLog_Add(
    h,
    32,
    a,
    BaseControl_GetOriginalId(a),
    "",
    "",
    false,
    false,
    false,
    0,
    3
  );
  if (c != null) {
    var g = g_arrControlTypes[c.getAttribute("ScriptClass")]["RestoreFocus"];
    g(c);
  }
}
SharePointFileAttachmentItem.OnKeyPress = SharePointFileAttachmentItem_OnKeyPress;
function SharePointFileAttachmentItem_OnKeyPress(e, d) {
  ULSrLq:;
  var a = e.parentNode,
    b = ViewDataNode_GetViewDataNodeFromHtml(a);
  if (b != null)
    if (!SharePointFileAttachmentItem_IsDisabled(b)) {
      var c = KeyboardService_GetVirtualKey(d);
      if (c == 1 || c == 0 || c == 2) {
        SharePointFileAttachmentItem_Delete(a, b);
        Util_StopEventProprogation(d);
        return false;
      }
    }
  return LeafControl.OnKeyPress(a, d);
}
SharePointFileAttachmentItem.IsInFocusableState = SharePointFileAttachmentItem_IsInFocusableState;
function SharePointFileAttachmentItem_IsInFocusableState(a) {
  ULSrLq:;
  return (
    BaseControl_IsInFocusableState(a) &&
    !SharePointFileAttachmentItem_IsDisabled(a)
  );
}
SharePointFileAttachmentItem.IsDisabled = SharePointFileAttachmentItem_IsDisabled;
function SharePointFileAttachmentItem_IsDisabled(a) {
  ULSrLq:;
  return ViewDataNode_IsDisabled(a);
}
SharePointFileAttachmentItem.IsValid = LeafControl.IsValid;
SharePointFileAttachmentItem.GetFormatting = BaseControl.GetFormatting;
SharePointFileAttachmentItem.OnFocus = LeafControl_FocusParentInfoPathControl;
SharePointFileAttachmentItem.GetAsteriskOffsetNormal =
  LeafControl.GetAsteriskOffsetNormal;
SharePointFileAttachmentItem.GetAsteriskOffsetTop =
  LeafControl.GetAsteriskOffsetTop;
SharePointFileAttachmentItem.GetErrorMessageOffset =
  LeafControl.GetErrorMessageOffset;
SharePointFileAttachmentItem.GetErrorMessageOffsetTop =
  LeafControl.GetErrorMessageOffsetTop;
SharePointFileAttachmentItem.SetValueOfControl = BaseControl.SetValueOfControl;
function SharePointFileAttachmentContainer() {}
SharePointFileAttachmentContainer.Render = SharePointFileAttachmentContainer_Render;
function SharePointFileAttachmentContainer_Render(d, c, e, a, b) {
  ULSrLq:;
  Container.RenderHelper(
    d,
    c,
    e,
    a,
    b,
    SharePointFileAttachmentContainer_Template
  );
}
SharePointFileAttachmentContainer.ResolveSpecialValue =
  BaseControl.ResolveSpecialValue;
function PictureButton() {}
PictureButton.GetFormatting = Button.GetFormatting;
PictureButton.GetValueFromControl = BaseControl.GetValueFromControl;
PictureButton.SetValueOfControl = BaseControl.SetValueOfControl;
PictureButton.AddEventLogEntry = Button.AddEventLogEntry;
PictureButton.OnClick = PictureButton_OnClick;
function PictureButton_OnClick(b, c) {
  ULSrLq:;
  var a = ViewDataNode_GetViewDataNodeFromHtml(b),
    e = a.SnippetElement,
    f = View.GetTemplateType(a.FormId),
    d = CurrentFormData_IsListItemMode(a.FormId) && f == 1;
  if (d && PictureButton_ClickableInDisplayView(e))
    BaseControl_CanHandleEventsNoPrintCheck() && Button_OnClickImpl(b, c);
  else Button_OnClick(b, c);
  return false;
}
PictureButton.RefreshControlData = PictureButton_RefreshControlData;
function PictureButton_RefreshControlData() {}
PictureButton.Render = PictureButton_Render;
function PictureButton_Render(c, b, l, a) {
  ULSrLq:;
  var e = LeafControl_InitializeViewDataNode(l, c, b),
    i = View.GetTemplateType(c.FormId),
    d = PictureButton_Template;
  if (i == 1) {
    d = PictureButton_PrintTemplate;
    if (PictureButton_HideInPrintView(b)) return;
  }
  var j = LeafControl_RenderBeginWrappingSpan(e, c, b, a);
  a.push(d[0]);
  LeafControl_RenderLeafAttributes(e, c, b, true, true, a);
  LeafControl_OutputAttribute("buttonid", Button_GetButtonId(b), a);
  if (d == PictureButton_PrintTemplate) {
    var g = true;
    if (PictureButton_ClickableInDisplayView(b)) {
      var k = CurrentFormData_IsListItemMode(c.FormId) && i == 1;
      if (k) {
        var h = "OnClick";
        LeafControl_OutputAttribute(
          " " + h,
          "return (PictureButton." + h + "(this, event));",
          a
        );
        g = false;
      }
    }
    if (g) {
      a.push(" ");
      a.push("disabled");
      a.push('="true"');
    }
  }
  for (var f = 1; f < d.length; f++)
    var m = BaseControl.RenderTemplateItem(d[f], c, b, e, a);
  j && LeafControl_RenderEndWrappingSpan(e, c, b, a);
}
PictureButton.IsFocusable = Button.IsFocusable;
function PictureButton_Image(a) {
  ULSrLq:;
  return a[6][2][2];
}
function PictureButton_HoverImage(a) {
  ULSrLq:;
  return a[6][2][3];
}
function PictureButton_Style(a) {
  ULSrLq:;
  return a[6][2][4];
}
function PictureButton_Title(a) {
  ULSrLq:;
  return a[6][2][5];
}
function PictureButton_HideInPrintView(a) {
  ULSrLq:;
  return a[6][2][6] == 1;
}
function PictureButton_ClickableInDisplayView(a) {
  ULSrLq:;
  return a[6][2][7] == 1;
}
PictureButton.ResolveSpecialValue = PictureButton_ResolveSpecialValue;
function PictureButton_ResolveSpecialValue(g, f, c, i) {
  ULSrLq:;
  var a = LeafControl.ResolveSpecialValue(g, f, c, i);
  if (a == null) {
    var d = f.FormId;
    switch (g) {
      case 10:
        var b = PictureButton_Image(c);
        if (Util.IsNullOrEmptyString(b)) a = "";
        else if (b.substring(0, 14) == "/_layouts/inc/") a = b;
        else
          a =
            CurrentFormData.SiteUrl(d) +
            "/_layouts/FormResource.aspx?solutionId=" +
            encodeURIComponent(CurrentFormData.SolutionId(d)) +
            "&solutionFile=" +
            encodeURIComponent(b);
        break;
      case 11:
        var b = PictureButton_HoverImage(c);
        if (Util.IsNullOrEmptyString(b)) a = "";
        else
          a =
            CurrentFormData.SiteUrl(d) +
            "/_layouts/FormResource.aspx?solutionId=" +
            encodeURIComponent(CurrentFormData.SolutionId(d)) +
            "&solutionFile=" +
            encodeURIComponent(b);
        break;
      case 12:
        var e = PictureButton_Style(c);
        if (Util.IsNullOrEmptyString(e)) a = "";
        else {
          if (UserAgentInfo.strBrowser != 1) e = "margin-top: -1px; " + e;
          a = e;
        }
        break;
      case 13:
        var h = PictureButton_Title(c);
        if (Util.IsNullOrEmptyString(h)) a = "";
        else a = h;
    }
  }
  return a;
}
PictureButton.OnMouseOver = PictureButton_OnMouseOver;
function PictureButton_OnMouseOver(b) {
  ULSrLq:;
  var d = b.getAttribute("FormId");
  if (
    !(
      !Dialog_DialogPresent() &&
      PostbackBody.intPostbacksInProgress == 0 &&
      View_GetTemplateType(d) != 1
    )
  )
    return;
  var a = b.childNodes[0],
    c = a.getAttribute("hoverSrc");
  b.style.cursor = "hand";
  if (a != null && !Util.IsNullOrEmptyString(c)) {
    var e = a.getAttribute("src");
    a.setAttribute("src", c);
    a.setAttribute("hoverSrc", e);
  }
  SelectionService_Highlight(b, false, false);
  return false;
}
PictureButton.OnMouseOut = PictureButton_OnMouseOut;
function PictureButton_OnMouseOut(b, d) {
  ULSrLq:;
  var a = b.childNodes[0],
    c = a.getAttribute("hoverSrc");
  if (a != null && !Util.IsNullOrEmptyString(c)) {
    var e = a.getAttribute("src");
    a.setAttribute("src", c);
    a.setAttribute("hoverSrc", e);
  }
  UserAgentInfo.strBrowser != 1 && PictureButton_ShiftUp(b, d);
  LeafControl.OnMouseOut(b, d);
}
PictureButton.OnMouseDown = PictureButton_OnMouseDown;
function PictureButton_OnMouseDown(a, b) {
  ULSrLq:;
  UserAgentInfo.strBrowser != 1 && PictureButton_ShiftDown(a, b);
  LeafControl.OnMouseDown(a, b);
}
PictureButton.OnMouseUp = PictureButton_OnMouseUp;
function PictureButton_OnMouseUp(a, b) {
  ULSrLq:;
  UserAgentInfo.strBrowser != 1 && PictureButton_ShiftUp(a, b);
  LeafControl.OnMouseUp(a, b);
}
PictureButton.OnFocus = PictureButton_OnFocus;
function PictureButton_OnFocus(a, b) {
  ULSrLq:;
  UserAgentInfo.strBrowser != 1 && LeafControl.OnFocus(a, b);
}
PictureButton.OnFocusIn = LeafControl.OnFocus;
PictureButton.OnKeyDown = PictureButton_OnKeyDown;
function PictureButton_OnKeyDown(c, a) {
  ULSrLq:;
  var b = KeyboardService_GetVirtualKey(a);
  UserAgentInfo.strBrowser == 2 && b == 18 && PictureButton_ShiftDown(c, a);
  return true;
}
PictureButton.OnKeyUp = PictureButton_OnKeyUp;
function PictureButton_OnKeyUp(c, a) {
  ULSrLq:;
  var b = KeyboardService_GetVirtualKey(a);
  UserAgentInfo.strBrowser == 2 && b == 18 && PictureButton_ShiftUp(c, a);
  return true;
}
function PictureButton_ShiftDown(b) {
  ULSrLq:;
  var a = b.childNodes[0];
  if (a != null && a.style.position != "relative") {
    a.style.marginTop = "";
    a.style.marginLeft = "1px";
    a.style.marginBottom = "-1px";
    a.style.marginRight = "-1px";
  }
}
function PictureButton_ShiftUp(b) {
  ULSrLq:;
  var a = b.childNodes[0];
  if (a != null && a.style.position != "relative") {
    a.style.marginTop = "-1px";
    a.style.marginLeft = "";
    a.style.marginBottom = "";
    a.style.marginRight = "";
  }
}
PictureButton.IsValid = LeafControl.IsValid;
PictureButton.IsSelected = LeafControl.IsSelected;
PictureButton.Select = LeafControl.Select;
PictureButton.UnSelect = LeafControl.UnSelect;
PictureButton.RestoreFocus = LeafControl.RestoreFocus;
PictureButton.Highlight = LeafControl.Highlight;
PictureButton.RemoveHighlight = LeafControl.RemoveHighlight;
function IncrementalReapply() {}
function ReapplyChangeRecord(b, a, c) {
  ULSrLq:;
  this.objOldViewNode = b;
  this.objNewViewNode = a;
  this.changeType = c;
}
var g_AllowIncrementalReapply = true;
function IncrementalReapply_DiffViewTrees(b, c) {
  ULSrLq:;
  var a = [];
  a.IsFullReapply = false;
  a.NodeCount = 0;
  if (!g_AllowIncrementalReapply || c.SnippetElement == null) {
    a.IsFullReapply = true;
    return a;
  }
  b.SnippetElement.ControlType.CompareNodes(b, c, a);
  return a;
}
function IncrementalReapply_RequestFullReapply(a) {
  ULSrLq:;
  a.IsFullReapply = true;
}
function IncrementalReapply_IsFullReapply(a) {
  ULSrLq:;
  return a.IsFullReapply;
}
function IncrementalReapply_ApplyLeafChange(e, g) {
  ULSrLq:;
  var a = e.objNewViewNode,
    b = e.objOldViewNode;
  a._objViewDataNodeParent = b._objViewDataNodeParent;
  if (a.SnippetElement[2] != "HiddenLeaf") {
    ViewDataNode_SetHtmlId(a, b.OriginalId);
    var f = document.getElementById(b[9]);
    if (f != null) {
      var i = f.getAttribute("viewDataNode");
      g[i] = a;
    }
  }
  for (
    var d = ViewDataNode_GetChildNodes(b._objViewDataNodeParent), c = 0;
    c < d.length;
    c++
  )
    if (d[c] == b) {
      d[c] = a;
      break;
    }
  a._boolDirty = true;
  ErrorVisualization_CopyErrorVisualizationStateAfterIncrementalReapply(b, a);
  var h = a.SnippetElement[5];
  h != 8 && ViewDataNode_GetDatum(a)._Dirty();
}
function IncrementalReapply_TryRender(c, a, g) {
  ULSrLq:;
  Perf_Start_Trace(7590, "IncrementalReapplyTryIncrementalRender");
  for (
    var i = a.oldViewTree,
      h = a.oldViewDataHtmlMap,
      e = i.FormId,
      b = true,
      d = 0;
    d < g.length;
    d++
  ) {
    var f = g[d];
    if (f.changeType != 1) {
      b = false;
      break;
    }
    IncrementalReapply_ApplyLeafChange(f, h);
  }
  if (b) {
    CurrentFormData_SetViewDataTree(e, a.oldViewTree);
    a.viewDataHtmlMap = a.oldViewDataHtmlMap;
    c = CurrentFormData_ViewDataTree(e);
    ViewDataNode_ProcessRenderingAction(c);
    ViewDataNode_UndirtySubtree(c);
    ViewDataNode.boolErrorVisRefreshNeeded = false;
    ErrorVisualization_UpdateAllAsterisks();
    GlobalFormData.Get(e).viewTreesAreMerged = true;
    g_objMultipleBindingMap = null;
  }
  Perf_End_Trace(7591, "IncrementalReapplyTryIncrementalRender");
  return b;
}
Button.CompareNodes = CompareViewNodeButton;
PictureButton.CompareNodes = CompareViewNodeButton;
CheckBox.CompareNodes = CompareViewNodeLeafControlBase;
ChoiceGroup.CompareNodes = CompareViewNodeChildrens;
ChoiceSection.CompareNodes = CompareViewNodeChildrens;
ComboBox.CompareNodes = CompareViewNodeDropDown;
Container.CompareNodes = CompareViewNodeChildrens;
CustomControl.CompareNodes = CompareViewNodesRequestFullReapply;
IP_DatePicker.CompareNodes = CompareViewNodeLeafControlBase;
DatePickerButton.CompareNodes = CompareViewNodeLeafControlBase;
DropDownList.CompareNodes = CompareViewNodeDropDown;
ExpressionBox.CompareNodes = CompareViewNodeExpressionBox;
FileAttachment.CompareNodes = CompareViewNodeFileAttachment;
FileAttachmentCollection.CompareNodes = CompareViewNodeChildrens;
HiddenCollection.CompareNodes = CompareViewNodeChildrens;
HiddenContainer.CompareNodes = CompareViewNodeChildrens;
HiddenLeaf.CompareNodes = CompareViewNodeLeafControlBase;
Hyperlink.CompareNodes = CompareViewNodeHyperlink;
HyperlinkBox.CompareNodes = CompareViewNodesRequestFullReapply;
InDocSign.CompareNodes = CompareViewNodeInDocSign;
InDocUI.CompareNodes = CompareViewNodeLeafControlBase;
InlineImage.CompareNodes = CompareViewNodeLeafControlBase;
InlinePicture.CompareNodes = CompareViewNodeFileAttachment;
LinkedPicture.CompareNodes = CompareViewNodesRequestFullReapply;
ListBox.CompareNodes = CompareViewNodeListBox;
ListCollection.CompareNodes = CompareViewNodeChildrens;
ListContainer.CompareNodes = CompareViewNodesRequestFullReapply;
ListItem.CompareNodes = CompareViewNodeLeafControlBase;
MultiSelectListBoxCollection.CompareNodes = CompareViewNodeChildrens;
MultiSelectListBoxContainer.CompareNodes = CompareViewNodeChildrens;
MultiSelectListBoxItem.CompareNodes = CompareViewNodeMSLBItem;
RadioButton.CompareNodes = CompareViewNodeLeafControlBase;
RepeatingSection.CompareNodes = CompareViewNodeChildrens;
RepeatingTable.CompareNodes = CompareViewNodeChildrens;
RepeatingTableRow.CompareNodes = CompareViewNodeChildrens;
RichTextBox.CompareNodes = CompareViewNodeRichText;
RichTextCollection.CompareNodes = CompareViewNodesRequestFullReapply;
Section.CompareNodes = CompareViewNodeChildrens;
SharePointFileAttachmentCollection.CompareNodes = CompareViewNodeChildrens;
SharePointFileAttachmentContainer.CompareNodes = CompareViewNodeChildrens;
SharePointFileAttachmentItem.CompareNodes = CompareViewNodeSharePointFileAttachmentItem;
TextBox.CompareNodes = CompareViewNodeLeafControlBase;
View.CompareNodes = CompareViewNodeChildrens;
ViewContainer.CompareNodes = CompareViewNodeChildrens;
function CompareViewNodesRequestFullReapply(c, b, a) {
  ULSrLq:;
  IncrementalReapply_RequestFullReapply(a);
}
function CompareViewNodeListBox(b, a, c) {
  ULSrLq:;
  return CompareViewNodeBaseList(b, a, c);
}
function CompareViewNodeDropDown(b, a, c) {
  ULSrLq:;
  return CompareViewNodeBaseList(b, a, c);
}
function CompareViewNodeBaseList(c, a, d) {
  ULSrLq:;
  var e = CompareViewNodeLeafControlBase(c, a, d),
    b = ListChoicesAreSame(c, a);
  !b && IncrementalReapply_RequestFullReapply(d);
  return e && b;
}
function ListChoicesAreSame(c, h) {
  ULSrLq:;
  var a = true;
  if (BaseList.IsDynamic(c.SnippetElement)) {
    var e = c.SnippetElement[7][1],
      g = ViewDataNode_DoesNodeHaveFilter(e);
    if (g && ViewDataNode_GetFilterComplexity(e)) a = false;
    else {
      var d = BaseList.GetDynamicList(c),
        f = BaseList.GetDynamicList(h);
      a = a && d.length == f.length;
      for (var b = 0; a && b < d.length; b++) a = a && d[b] == f[b];
    }
  }
  return a;
}
function CompareLeafContent(f, e) {
  ULSrLq:;
  var a = true,
    c = f[1][2],
    d = e[1][2];
  a = a && c.length == d.length;
  for (var b = 0; a && b < c.length; b++) a = a && c[b] == d[b];
  return a;
}
function CompareViewNodeButton(c, b, d) {
  ULSrLq:;
  var a = CompareViewNodeLeafControlBase(c, b, d);
  if (a) {
    a = CompareLeafContent(c, b);
    !a && d.push(new ReapplyChangeRecord(b, c, 1));
  }
  return a;
}
function CompareViewNodeRichText(a, b, c) {
  ULSrLq:;
  if (CurrentFormData.IsV4UI(a.FormId))
    return CompareViewNodeLeafControlBase(a, b, c);
  else return CompareViewNodesRequestFullReapply(a, b, c);
}
function CompareViewNodeFileAttachment(c, b, d) {
  ULSrLq:;
  var a = CompareViewNodeLeafControlBase(c, b, d);
  if (a) a = CompareLeafContent(c, b);
  !a && IncrementalReapply_RequestFullReapply(d);
  return a;
}
function CompareViewNodeHyperlink(c, b, d) {
  ULSrLq:;
  var a = CompareViewNodeLeafControlBase(c, b, d);
  if (a) {
    a = a && Hyperlink_GetHref(c) == Hyperlink_GetHref(b);
    a = a && Hyperlink_GetDisplay(c) == Hyperlink_GetDisplay(b);
    if (!a) d.push(new ReapplyChangeRecord(b, c, 1));
    else
      CompareChildNodes(
        c,
        b,
        Hyperlink_GetChildViewDataNodes(c),
        Hyperlink_GetChildViewDataNodes(b),
        d
      );
  }
  return a;
}
function CompareViewNodeMSLBItem(d, c, b) {
  ULSrLq:;
  var a = CompareViewNodeLeafControlBase(d, c, b);
  !a && IncrementalReapply_RequestFullReapply(b);
  return a;
}
function CompareViewNodeInDocSign(c, b, d) {
  ULSrLq:;
  var a = CompareViewNodeLeafControlBase(c, b, d);
  if (a) {
    a = CompareLeafContent(c, b);
    !a && IncrementalReapply_RequestFullReapply(d);
  }
  return a;
}
function CompareViewNodeSharePointFileAttachmentItem(c, b, d) {
  ULSrLq:;
  var a = CompareViewNodeLeafControlBase(c, b, d);
  if (a) {
    a = CompareLeafContent(c, b);
    !a && d.push(new ReapplyChangeRecord(b, c, 1));
  }
  return a;
}
function CompareViewNodeExpressionBox(b, c, d) {
  ULSrLq:;
  var a = CompareViewNodeLeafControlBase(b, c, d);
  if (a) {
    a = a && b[1][0] == c[1][0];
    a = a && CompareDatums(ViewDataNode_GetDatum(b), ViewDataNode_GetDatum(c));
    !a && d.push(new ReapplyChangeRecord(c, b, 1));
  }
  if (!a) {
    var g = b.SnippetElement,
      f = g[6][2],
      e = f[0];
    e == null && IncrementalReapply_RequestFullReapply(d);
  }
  return a;
}
function CompareViewNodeLeafControlBase(b, c, d) {
  ULSrLq:;
  d.NodeCount++;
  var a = true;
  if (b._nMultipleBindingClassId != -1) {
    IncrementalReapply_RequestFullReapply(d);
    return false;
  }
  a = a && !c._boolDirty;
  a = a && b[0] == c[0];
  a = a && b[2] == c[2];
  a = a && b[3] == c[3];
  a = a && b[4] == c[4];
  a = a && b[5] == c[5];
  a =
    a &&
    ViewDataNode_GetFilterRowVisibility(b) ==
      ViewDataNode_GetFilterRowVisibility(c);
  var e = b.SnippetElement[5];
  if (e != 8) {
    a = a && b[1][0] == c[1][0];
    a = a && CompareDatums(ViewDataNode_GetDatum(b), ViewDataNode_GetDatum(c));
  }
  a = a && b[1][3] == c[1][3];
  a = a && b[1][4] == c[1][4];
  a = a && b[1][5] == c[1][5];
  !a && d.push(new ReapplyChangeRecord(c, b, 1));
  return a;
}
function CompareDatums(b, c) {
  ULSrLq:;
  var a = true;
  a = a && c._boolIsSigned == b._boolIsSigned;
  a = a && c._strValue == b._strValue;
  a = a && c._boolDirty == b._boolDirty;
  a = a && c._boolModifiedOnClient == b._boolModifiedOnClient;
  a = a && c._strErrorMessage == b._strErrorMessage;
  a = a && c._strDetailedErrorMessage == b._strDetailedErrorMessage;
  a = a && c._boolIsValid == b._boolIsValid;
  a = a && c._changedOnClient == b._changedOnClient;
  return a;
}
function CompareViewNodeChildrens(c, b, d) {
  ULSrLq:;
  d.NodeCount++;
  var a = true;
  a = a && c[0] == b[0];
  a = a && c[2] == b[2];
  a = a && c[3] == b[3];
  a = a && c[4] == b[4];
  a = a && c[5] == b[5];
  a =
    a &&
    ViewDataNode_GetFilterRowVisibility(c) ==
      ViewDataNode_GetFilterRowVisibility(b);
  if (!a) {
    IncrementalReapply_RequestFullReapply(d);
    return;
  } else {
    var e = ViewDataNode_GetChildNodes(c),
      f = ViewDataNode_GetChildNodes(b);
    CompareChildNodes(c, b, e, f, d);
  }
}
function CompareChildNodes(j, i, c, d, b) {
  ULSrLq:;
  if (c.length != d.length) {
    IncrementalReapply_RequestFullReapply(b);
    return;
  } else
    for (var g = true, a = 0; a < c.length && g; a++) {
      var h = d[a].SnippetElement.ControlType,
        f = d[a],
        e = c[a];
      if (f.StableId === e.StableId) h.CompareNodes(e, f, b);
      else IncrementalReapply_RequestFullReapply(b);
      g = !IncrementalReapply_IsFullReapply(b);
    }
}
function BaseControl_SetupControlTypesTable() {
  ULSrLq:;
  var c = {
      Button: Button,
      CheckBox: CheckBox,
      ChoiceGroup: ChoiceGroup,
      ChoiceSection: ChoiceSection,
      ComboBox: ComboBox,
      Container: Container,
      CustomControl: CustomControl,
      IP_DatePicker: IP_DatePicker,
      DatePickerButton: DatePickerButton,
      DropDownList: DropDownList,
      ExpressionBox: ExpressionBox,
      FileAttachment: FileAttachment,
      FileAttachmentCollection: FileAttachmentCollection,
      HiddenCollection: HiddenCollection,
      HiddenContainer: HiddenContainer,
      HiddenLeaf: HiddenLeaf,
      Hyperlink: Hyperlink,
      HyperlinkBox: HyperlinkBox,
      InDocSign: InDocSign,
      InDocUI: InDocUI,
      InlineImage: InlineImage,
      LinkedPicture: LinkedPicture,
      InlinePicture: InlinePicture,
      ListBox: ListBox,
      ListCollection: ListCollection,
      ListContainer: ListContainer,
      ListItem: ListItem,
      MultiSelectListBoxCollection: MultiSelectListBoxCollection,
      MultiSelectListBoxContainer: MultiSelectListBoxContainer,
      MultiSelectListBoxItem: MultiSelectListBoxItem,
      RadioButton: RadioButton,
      RepeatingSection: RepeatingSection,
      RepeatingTable: RepeatingTable,
      RepeatingTableRow: RepeatingTableRow,
      RichTextBox: RichTextBox,
      RichTextCollection: RichTextCollection,
      Section: Section,
      SharePointFileAttachmentCollection: SharePointFileAttachmentCollection,
      SharePointFileAttachmentContainer: SharePointFileAttachmentContainer,
      SharePointFileAttachmentItem: SharePointFileAttachmentItem,
      TextBox: TextBox,
      View: View,
      ViewContainer: ViewContainer,
      PictureButton: PictureButton,
    },
    e = [
      "GetFormattedValue",
      "Highlight",
      "IsFocusable",
      "IsInFocusableState",
      "IsRenderingErrorVisualizationSpansItself",
      "SetCssClasses",
      "SetDisplay",
      "MoveStyles",
      "GetSecondaryDataNodes",
      "GetSecondaryValueFromControl",
      "IsBlank",
      "IsValid",
      "OnAfterCreate",
      "OnChange",
      "OnMouseOver",
      "OnMouseOut",
      "RefreshControlData",
      "RefreshVisualState",
      "RemoveHighlight",
      "RestoreFocus",
      "Select",
      "SetDisable",
      "SetHidden",
      "UnSelect",
      "SetAriaInvalidAttribute",
      "GetControlForSelectText",
      "SelectTextOnControl",
      "ShouldShiftAsteriskIn",
    ],
    d = ["GetFormatting", "GetValueFromControl", "SetValueOfControl"],
    g = BaseControl;
  for (var h in c) {
    var b = c[h],
      a = null;
    for (var f in e) {
      a = e[f];
      if (typeof b[a] != "function") b[a] = g[a];
    }
    for (var f in d) {
      a = d[f];
      if (typeof b[a] != "function") b[a] = BaseControl_NotSupportedFunction;
    }
  }
  return c;
}
var g_arrControlTypes = BaseControl_SetupControlTypesTable();
LoadedScriptFiles.boolCoreLoaded = true;
/*
page: http://www.ucn.edu.co/
url: http://www.ucn.edu.co/_layouts/inc/Core.js?rev=D9rcLY97a1ECurcRSuOf8A%3D%3D
*/
