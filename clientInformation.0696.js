function ULShpi() {
  var o = new Object();
  o.ULSTeamName = "Search Server";
  o.ULSFileName = "Search.js";
  return o;
}
var i7F = parseInt("0x7F"),
  i7FF = parseInt("0x7FF"),
  iFFFF = parseInt("0xFFFF"),
  i1FFFFF = parseInt("0x1FFFFF"),
  i3FFFFFF = parseInt("0x3FFFFFF"),
  i7FFFFFFF = parseInt("0x7FFFFFFF"),
  logWAQuery = true,
  suggestedQuery = false;
function canonicalizedUtf8FromUnicode(i) {
  ULShpi:;
  var j = ' <>"#%{}|^~[]`&?+',
    c = "",
    h,
    g,
    f,
    k,
    b,
    a,
    d,
    e;
  i += "";
  for (h = 0; h < i.length; h++) {
    g = i.charAt(h);
    f = g.charCodeAt(0);
    if (f <= i7F)
      if (j.indexOf(g) != -1) c += "%" + f.toString(16).toUpperCase();
      else c += g;
    else {
      e = "";
      b = f.toString(2);
      if (f <= i7FF) {
        for (d = 11; d > b.length; d--) e += "0";
        b = e + b;
        a = "110" + b.substr(0, 5);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
        a = "10" + b.substr(5, 6);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
      } else if (f <= iFFFF) {
        for (d = 16; d > b.length; d--) e += "0";
        b = e + b;
        a = "1110" + b.substr(0, 4);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
        a = "10" + b.substr(4, 6);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
        a = "10" + b.substr(10, 6);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
      } else if (f <= i1FFFFF) {
        for (d = 21; d > b.length; d--) e += "0";
        b = e + b;
        a = "11110" + b.substr(0, 3);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
        a = "10" + b.substr(3, 6);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
        a = "10" + b.substr(9, 6);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
        a = "10" + b.substr(15, 6);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
      } else if (f <= i3FFFFFF) {
        for (d = 26; d > b.length; d--) e += "0";
        b = e + b;
        a = "111110" + b.substr(0, 2);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
        a = "10" + b.substr(2, 6);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
        a = "10" + b.substr(8, 6);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
        a = "10" + b.substr(14, 6);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
        a = "10" + b.substr(20, 6);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
      } else if (f <= i7FFFFFFF) {
        for (d = 31; d > b.length; d--) e += "0";
        b = e + b;
        a = "1111110" + b.substr(0, 1);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
        a = "10" + b.substr(1, 6);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
        a = "10" + b.substr(7, 6);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
        a = "10" + b.substr(13, 6);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
        a = "10" + b.substr(19, 6);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
        a = "10" + b.substr(25, 6);
        c += "%" + parseInt(a, 2).toString(16).toUpperCase();
      }
    }
  }
  return c;
}
function GetItemUrl(f) {
  ULShpi:;
  var d = false;
  if (null != window.clientInformation)
    d = window.clientInformation.userAgent.indexOf("MSIE ") > 0;
  var c = document.getElementById(f);
  if (null != c) {
    if (d) {
      var a = c.outerHTML,
        b = a.indexOf('href="');
      if (b > 0) {
        b += 6;
        var e = a.indexOf('"', b);
        if (e > 0) {
          a = a.substring(b, e);
          a = a.replace(/&#39;/gi, "'");
          a = a.replace(/&quot;/gi, '"');
          a = a.replace(/&amp;/gi, "&");
          return a;
        }
      }
    }
    return c.href;
  }
  return "";
}
function GoToItemUrl(a) {
  ULShpi:;
  window.location.href = GetItemUrl(a);
}
function GetCookieExpireTime() {
  ULShpi:;
  var a = new Date(),
    b = a.getMonth();
  if (b == 11) {
    a.setMonth(0);
    a.setYear(a.getYear() + 1);
  } else a.setMonth(b + 1);
  return a.toGMTString();
}
function _ppsi(b, a) {
  ULShpi:;
  return b + a;
}
function OnshdCB(a) {
  ULShpi:;
  Onshd(a, "c", "", "", "");
}
function Onshd(d, e, h, i, j) {
  ULShpi:;
  var b = document.forms[0],
    g = _ppsi(d, "shd"),
    a,
    c,
    f = document.styleSheets(g).rules[0].style;
  if (null == b || null == f) return;
  c = false;
  if ("a" == e) {
    a = _ppsi(d, "spssSHDH");
    if (null != b.elements[a]) c = b.elements[a].value == "false";
  } else {
    a = _ppsi(d, "spssSHDC");
    if (null != b.elements[a]) c = b.elements[a].checked;
  }
  if (c) {
    f.display = "";
    if ("a" == e) {
      if (null != b.elements[a]) b.elements[a].value = "true";
      document.links.item(h).innerText = i;
    }
    document.cookie = g + "=true; expires=" + GetCookieExpireTime();
  } else {
    f.display = "none";
    if ("a" == e) {
      if (null != b.elements[a]) b.elements[a].value = "false";
      document.links.item(h).innerText = j;
    }
    document.cookie = g + "=false; expires=" + GetCookieExpireTime();
  }
}
function OnPTP(b) {
  ULShpi:;
  var a = document.forms[0];
  if (null != a.elements[_ppsi(b, "spssWFEH")])
    a.elements[_ppsi(b, "spssWFEH")].value = "PageToPrevious";
  a.submit();
}
function OnPTN(b) {
  ULShpi:;
  var a = document.forms[0];
  if (null != a.elements[_ppsi(b, "spssWFEH")])
    a.elements[_ppsi(b, "spssWFEH")].value = "PageToNext";
  a.submit();
}
function OnPTT(f, c, b, e) {
  ULShpi:;
  var a = document.forms[0];
  if (e) {
    var d = String.fromCharCode(c.keyCode);
    if (d == "\n" || d == "\r") {
      if (null != a.elements[_ppsi(b, "spssWFEH")])
        a.elements[_ppsi(b, "spssWFEH")].value = "DirectPageTo";
      if (null != a.elements[_ppsi(b, "spssAPNH")])
        a.elements[_ppsi(b, "spssAPNH")].value = f.value;
      a.submit();
    }
  } else if (c.which == 10 || c.which == 13) {
    if (null != a.elements[_ppsi(b, "spssWFEH")])
      a.elements[_ppsi(b, "spssWFEH")].value = "DirectPageTo";
    a.submit();
  }
}
function OnPTD(c, b) {
  ULShpi:;
  var a = document.forms[0];
  if (null != a.elements[_ppsi(b, "spssWFEH")])
    a.elements[_ppsi(b, "spssWFEH")].value = "DirectPageTo";
  if (null != a.elements[_ppsi(b, "spssAPNH")])
    a.elements[_ppsi(b, "spssAPNH")].value = c.value;
  a.submit();
}
function OnChangeGroupBySelection(b, a) {
  ULShpi:;
  null != document.forms[0].elements[a] &&
    OnGroupBy(b, document.forms[0].elements[a].value);
}
function OnGroupBy(b, c) {
  ULShpi:;
  var a = document.forms[0];
  if (null != a.elements[_ppsi(b, "spssWFEH")])
    a.elements[_ppsi(b, "spssWFEH")].value = "GroupBy";
  if (null != a.elements[_ppsi(b, "spssGBKH")])
    a.elements[_ppsi(b, "spssGBKH")].value = c;
  a.submit();
}
function OnChangeSortBySelection(g, e) {
  ULShpi:;
  var a = "";
  if (null != document.forms[0].elements[e])
    a = document.forms[0].elements[e].value;
  var c = a.toUpperCase().lastIndexOf(" DESC");
  if (c >= 0) a = a.substring(0, c);
  var d = '"',
    b = a.indexOf(d),
    f = a.lastIndexOf(d);
  if (b >= 0) {
    if (f > b) a = a.substring(0, f);
    a = a.substring(b + d.length, a.length);
  }
  OnCCT(g, a, c >= 0 ? "DESC" : "ASC");
}
function OnCCT(a, d, e) {
  ULShpi:;
  var b = _ppsi(a, "spssSBCTH"),
    c = document.forms[0];
  if (null != c.elements[b]) {
    c.elements[b].value = '"' + d + '"';
    if (e.toUpperCase() == "DESC") c.elements[b].value += " DESC";
  }
  if (null != document.forms[0].elements[_ppsi(a, "spssWFEH")])
    document.forms[0].elements[_ppsi(a, "spssWFEH")].value = "SortBy";
  if (null != document.forms[0].elements[_ppsi(a, "SBCH")])
    document.forms[0].elements[_ppsi(a, "SBCH")].value = "1";
  document.forms[0].submit();
}
function OnGFL(a, b, c) {
  ULShpi:;
  if (null != document.forms[0].elements[_ppsi(a, "spssWFEH")])
    document.forms[0].elements[_ppsi(a, "spssWFEH")].value = "SeeFullListLink";
  if (null != document.forms[0].elements[_ppsi(a, "spssWMCH")])
    document.forms[0].elements[_ppsi(a, "spssWMCH")].value = b;
  if (null != document.forms[0].elements[_ppsi(a, "spssWMDH")])
    document.forms[0].elements[_ppsi(a, "spssWMDH")].value = c;
  document.forms[0].submit();
}
function SearchShowHideGroup(a, k, h) {
  ULShpi:;
  var f = document.getElementById(a);
  if (null == f) return;
  for (
    var i = a.substring(0, a.indexOf("_t")),
      j = new RegExp(i + "_g" + k + "_r"),
      g = document.getElementsByTagName("TR"),
      m = g.length,
      e = 0;
    e < m;
    e++
  ) {
    var b = g[e];
    if (b.id.search(j) >= 0)
      if (h) b.className = b.className.replace(/groupHide/g, "groupShow");
      else b.className = b.className.replace(/groupShow/g, "groupHide");
  }
  var d, c;
  if (h) d = a.replace("_te_", "_tc_");
  else d = a.replace("_tc_", "_te_");
  c = document.getElementById(d);
  if (null != c) c.style.display = "";
  f.style.display = "none";
  try {
    ResizePeopleImages();
  } catch (l) {}
}
function OnExpandCollapseAll(a, l, b) {
  ULShpi:;
  for (
    var k = new RegExp(_ppsi(a, "_g([\\d]+)_r[\\d]")),
      h = document.getElementsByTagName("TR"),
      m = h.length,
      n,
      o,
      i,
      e,
      g,
      c,
      d,
      j = -1,
      f = 0;
    f < m;
    f++
  ) {
    tmp = h[f];
    if (null != k.exec(tmp.id)) {
      d = RegExp.$1;
      if (d != j) {
        i = _ppsi(a, "_tc_" + RegExp.$1);
        e = document.links.item(i);
        g = _ppsi(a, "_te_" + RegExp.$1);
        c = document.links.item(g);
        if (null != c) {
          c.style.display = b ? "none" : "";
          if (null != e) e.style.display = b ? "" : "none";
        }
        j = d;
      }
      if (b) tmp.className = tmp.className.replace(/groupHide/g, "groupShow");
      else tmp.className = tmp.className.replace(/groupShow/g, "groupHide");
    }
  }
  if (null != document.forms[0].elements[_ppsi(a, "spssAGECH")])
    document.forms[0].elements[_ppsi(a, "spssAGECH")].value = b;
  document.cookie = l + "=" + b + "; expires=" + GetCookieExpireTime();
  if (null != document.forms[0].elements[_ppsi(a, "spssECAH")])
    document.forms[0].elements[_ppsi(a, "spssECAH")].value = b;
}
function GetPinLink(c) {
  ULShpi:;
  var a = document.forms[0].elements[_ppsi(c, "spssQI")];
  if (null != a) {
    var b = document.URL.indexOf("?");
    if (b >= 0) return document.URL.substring(0, b) + "?" + a.value;
    else return document.URL + "?" + a.value;
  } else return null;
}
function GetTaxonomyApplyFilterUrl(m, k) {
  ULShpi:;
  var i = document.getElementById("TaggingControl_" + m);
  if (i == null) return "";
  var j = new Microsoft.SharePoint.Taxonomy.ControlObject(i);
  if (j == null) return "";
  var e = new Microsoft.SharePoint.Taxonomy.Term.getTerms(j.getRawText());
  if (e && e.length > 0) {
    var f = document.URL.replace(/&start1=[0-9]+/gi, ""),
      c = /(r=.+?)&/g.exec(f);
    if (c == null || c.length == 0) c = /(r=.+)/g.exec(f);
    var d = "";
    if (c != null && c.length >= 1) d = c[1];
    for (var b = d, g = 0; g < e.length; g++) {
      var h = e[g].get_guid(),
        l = e[g].get_text();
      if (h == "00000000-0000-0000-0000-000000000000") return "";
      var a = "";
      if (k == "Tags")
        a = "owstaxIdMetadataAllTagsInfo=#0" + h + ':"' + l + '"';
      else a = '"owstaxId' + k + '"=#' + h + ':"' + l + '"';
      a = encodeURIComponent(a).replace(/-/g, "%2D");
      if (d.indexOf(a) < 0)
        if (b == "") b = a;
        else b = b + "%20" + a;
    }
    if (d == "") return f.replace(/&r=/, "") + "&r=" + b;
    else return f.replace(d, b);
  } else return "";
}
var containerIds = [];
function RenderTaggingControl(c, d, l, j, g, m, e, k, i, h) {
  ULShpi:;
  if (typeof RTE == "undefined") {
    var n = function () {
      ULShpi:;
      RenderTaggingControl(c, d, l, j, g, m, e, k, i, h);
    };
    RegisterSodDep("ScriptForWebTaggingUI.js", "sp.js");
    RegisterSodDep("ScriptForWebTaggingUI.js", "sp.ui.rte.js");
    SP.SOD.executeFunc("ScriptForWebTaggingUI.js", "undefined", n);
    return;
  }
  containerIds.push(c);
  var a = document.getElementById("TaggingControl_" + c);
  if (a == null) {
    alert("control is null");
    return;
  }
  if (a.childNodes.length <= 1) {
    a["InputFieldId"] = "MetadataHiddenInput_" + c;
    if (d) a["TermSetId"] = "00000000-0000-0000-0000-000000000000";
    else a["TermSetId"] = j;
    a["SspId"] = l;
    a["AnchorId"] = "00000000-0000-0000-0000-000000000000";
    a["IsMulti"] = true;
    a["ExcludeKeyword"] = false;
    a["FieldName"] = k;
    a["DisplayPickerButton"] = true;
    a["WebServiceUrl"] = g;
    a["Lcid"] = m;
    a["IsUIRightToLeft"] = h;
    a["IsAddTerms"] = false;
    a["IsIgnoreFormatting"] = true;
    a["IsIncludeDeprecated"] = true;
    a["IsIncludePathData"] = false;
    a["IsIncludeTermSetName"] = false;
    a["IsIncludeUnavailable"] = true;
    a["IsSpanTermSets"] = d;
    a["IsSpanTermStores"] = d;
    a["IsUseCommaAsDelimiter"] = false;
    if (i == true) {
      Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.onLoad(
        "TaggingControl_" + c
      );
      if (a.nextSibling != null) a.nextSibling.style.display = "";
    }
  }
  SetElementGroupDisplay(e, "none");
  var f = document.getElementById(e + "_" + c);
  if (f != null) {
    f.style.display = "none";
    var b = f.nextSibling;
    if (b != null) {
      b.style.display = "block";
      b = b.nextSibling;
      if (b != null) {
        b.style.display = "block";
        b.focus();
      }
    }
  }
}
function GoSearch(q, G, p, E, r, F, D, C, B, j, n, z, y, x, w, A, l, v) {
  ULShpi:;
  try {
    AddSearchoptionsToQuery();
  } catch (H) {}
  var i = document.forms[0].elements[G].value;
  i = i.replace(/\s*$/, "");
  var u = "1";
  if (q) u = document.forms[0].elements[q].Value;
  if (i == "" || u == "0") {
    alert(v);
    if (null != event) {
      event.returnValue = false;
      return false;
    } else return;
  }
  var b = "?";
  if (suggestedQuery) b += "sq=1&";
  b += "k=" + encodeURIComponent(i);
  for (
    var k = [
        "rm",
        "rm1",
        "rm2",
        "rm3",
        "rm4",
        "rm5",
        "ql",
        "ql1",
        "ql2",
        "ql3",
        "ql4",
        "ql5",
        "v",
        "v1",
        "v2",
        "v3",
        "v4",
        "v5",
        "hs",
        "hs1",
        "hs2",
        "hs3",
        "hs4",
        "hs5",
      ],
      h = 0;
    h < k.length;
    h++
  ) {
    var m = GetUrlKeyValue(k[h], true);
    if (m && m.length > 0) b += "&" + k[h] + "=" + m;
  }
  if (l != null && l != "") b += "&r=" + encodeURIComponent(l);
  if (null != p) {
    var t = document.forms[0].elements[p].value;
    if (E) b += canonicalizedUtf8FromUnicode(" " + t);
    else b += "&a=" + canonicalizedUtf8FromUnicode(" " + t);
  }
  var a = null,
    c = "",
    d = "",
    o = null != j;
  if (o) {
    c = j;
    d = j;
  } else if (r) {
    a = document.forms[0].elements[F];
    c = a.options[a.selectedIndex].getAttribute("scope");
    d = a.options[a.selectedIndex].value;
  }
  if (r || o) {
    var f = "",
      g = "",
      e = false;
    if (d == z) {
      f = d;
      c = "";
      g = document.forms[0].elements[D].value;
      e = true;
    }
    if (d == y) {
      f = d;
      c = "";
      g = document.forms[0].elements[C].value;
      e = true;
    }
    if (d == x) {
      f = c;
      c = "";
      g = document.forms[0].elements[B].value;
      e = true;
    }
    if (c == w) {
      c = a.options[a.selectedIndex].value;
      e = true;
    }
    if (e) n = A;
    if (c != "") {
      b += "&s=" + encodeURIComponent(c);
      if (a.options[a.selectedIndex].value != "" && !e)
        n = a.options[a.selectedIndex].value;
    }
    if (f != "") b += "&cs=" + encodeURIComponent(f);
    if (g != "") b += "&u=" + encodeURIComponent(g);
  }
  var I = document.forms[0];
  try {
    external.AutoCompleteSaveForm(I);
  } catch (s) {}
  window.location = n + b;
  try {
    if (null != event) event.returnValue = false;
  } catch (s) {}
  return;
}
function SetSpecialTermFilters(f, c, e) {
  ULShpi:;
  var a = e,
    b = document.forms[0].elements[f].value;
  b = b.replace(/\s*$/, "");
  if (b != "") {
    a += "&k=" + canonicalizedUtf8FromUnicode(b);
    delim = "&";
  }
  if (a == e)
    if (null != event) {
      event.returnValue = false;
      return false;
    } else return;
  if (null != c) {
    var d = document.forms[0].elements[c],
      g = d.options[d.selectedIndex].value;
    a += "&ft=" + canonicalizedUtf8FromUnicode(g);
  }
  window.location = a;
  if (null != event) event.returnValue = false;
  return false;
}
function XmlEscape(a) {
  ULShpi:;
  return a
    ? a.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;")
    : "";
}
function SendClick(w, t, m, v, l) {
  ULShpi:;
  var a = l.id,
    j = a
      .replace("_Url", "_Title")
      .replace("_Icon", "_Title")
      .replace("_VBlink", "_Title"),
    o = /\d+_Title/.exec(j),
    p = /\d+/.exec(o),
    b = p ? parseInt(p[0], 10) : 0,
    r = /^(CSR_RV|CSR_MRL|SRP_)/.exec(a),
    i = null,
    k = null,
    d = null,
    u = j.replace(/\d+_Title/, ""),
    e = null,
    s = a.match("_VBlink$") == "_VBlink",
    g = document.getElementById(j);
  if (g) {
    k = g.innerText;
    e = g.href;
  }
  if (/^BBR_/.exec(a)) {
    var f = /\d+$/.exec(a);
    b = f ? parseInt(f[0], 10) : 0;
    var q = document.getElementById("BBR_" + f);
    if (q) {
      i = q.innerHTML;
      k = i;
    }
  } else if (b > 0 && /^SRB_/.exec(a)) {
    d = "";
    for (var c = 1; c < b && c < 10; c++) {
      var x = u + o[0].replace(/\d+/, c),
        n = document.getElementById(x);
      if (n) d += "<z>" + XmlEscape(n.href) + "</z>";
    }
  } else if (l.attributes["mss_definition"] != null)
    m = m.replace("<df>false</df>", "<df>true</df>");
  var h = l.href;
  if (r) h = null;
  else if (s && e != null) h = e;
  SendSoap(w, t, m, h, b + v - 1, i, r, d, k);
}
function SendSoap(i, h, a, d, g, e, j, c, f) {
  ULShpi:;
  var b = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : window.ActiveXObject
    ? new ActiveXObject("Msxml2.XMLHTTP")
    : null;
  if (b) {
    b.open("POST", i, true);
    b.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
    b.setRequestHeader("SOAPAction", h);
    if (d) a = a.replace("</i>", "<c>" + XmlEscape(d) + "</c></i>");
    if (g) a = a.replace("<r>0", "<r>" + g);
    if (j) a = a.replace("<f>false", "<f>true");
    if (logWAQuery) a = a.replace("<lq>false", "<lq>true");
    logWAQuery = false;
    if (e) a = a.replace("</i>", "<y>" + XmlEscape(e) + "</y></i>");
    if (c) a = a.replace("</i>", c + "</i>");
    if (f) a = a.replace("</i>", "<ti>" + XmlEscape(f) + "</ti></i>");
    b.send(a);
  }
}
function SetElementDisplay(b, c) {
  ULShpi:;
  var a = document.getElementById(b);
  if (a) a.style.display = c;
}
function SetElementGroupDisplay(c, e) {
  ULShpi:;
  for (
    var b = document.getElementsByTagName("div"), c = new RegExp(c), a = 0;
    a < b.length;
    a++
  ) {
    var d = b[a];
    if (c.exec(d.id)) d.style.display = e;
  }
}
function ToggleRefMoreLessFilters(a, b) {
  ULShpi:;
  if (b) {
    a.nextSibling.style.display = "block";
    a.nextSibling.nextSibling.style.display = "block";
    a.previousSibling.style.display = "none";
    a.style.display = "none";
  } else {
    a.previousSibling.previousSibling.style.display = "block";
    a.previousSibling.previousSibling.previousSibling.style.display = "block";
    a.previousSibling.style.display = "none";
    a.style.display = "none";
    a.previousSibling.previousSibling.focus();
  }
}
function ToggleTaxonomyLessFilters(a) {
  ULShpi:;
  a.previousSibling.previousSibling.style.display = "block";
  a.style.display = "none";
  a.previousSibling.style.display = "none";
  a.previousSibling.previousSibling.focus();
}
if (!String.prototype.FST_startsWith)
  String.prototype.FST_startsWith = function (a) {
    ULShpi:;
    if (a == null) return false;
    if (!a.length) return false;
    if (a.length > this.length) return false;
    return this.substr(0, a.length) == a;
  };
function AjaxReplacementRequest(a) {
  ULShpi:;
  this._delegatePostFix = a;
}
AjaxReplacementRequest.prototype = {
  _iframeId: null,
  _callbackFunction: null,
  _url: null,
  set_url: function (a) {
    ULShpi:;
    this._url = a;
  },
  set_testurl: function (a) {
    ULShpi:;
    this._testImageUrl = a;
  },
  add_completed: function (a) {
    ULShpi:;
    this._callbackFunction = a;
  },
  invoke: function () {
    ULShpi:;
    if (this._testImageUrl) {
      var a = document.createElement("IMG");
      a.style.width = "0px";
      a.style.height = "0px";
      a.style.border = "0px";
      a.alt = "";
      a.onload = Function.createDelegate(this, this.invokeAfterTestImageLoad);
      a.onerror = Function.createDelegate(this, this.invokeOnErrorImageLoad);
      a.src = this._testImageUrl;
      try {
        var c = document.getElementsByTagName("body")[0];
        c.appendChild(a);
      } catch (b) {
        this.invokeAfterTestImageLoad();
      }
    } else this.invokeAfterTestImageLoad();
  },
  invokeOnErrorImageLoad: function () {
    ULShpi:;
    this.onCompletedHandler("ERROR: WAC not available!");
  },
  invokeAfterTestImageLoad: function () {
    ULShpi:;
    var c = Function.createDelegate(this, this.onCompletedHandler),
      b = "DelegateFn_" + this._delegatePostFix;
    window[b] = c;
    var d = document.getElementsByTagName("head")[0],
      a = document.createElement("script");
    a.type = "text/javascript";
    a.src = this._url + "&callbackFunctionName=" + b;
    d.appendChild(a);
  },
  onCompletedHandler: function (a) {
    ULShpi:;
    this._callbackFunction(a);
  },
};
FST_FlickScrollWindow = function (a, b, c) {
  ULShpi:;
  this._id = c;
  this._previewWindowId = a;
  this._previewDivId = b;
};
FST_FlickScrollWindow.prototype = {
  _id: null,
  _element: null,
  _previewWindow: null,
  _previewWindowId: null,
  _previewDiv: null,
  _previewDivId: null,
  _visible: false,
  _leftArrow: null,
  _rightArrow: null,
  _leftArrowDis: null,
  _rightArrowDis: null,
  _isDragging: false,
  _dragStartX: 0,
  _dragStartY: 0,
  _dragPrevX: 0,
  _dragPrevY: 0,
  _lastDragTime: 0,
  _animTimeLength: 1500,
  _lastSpeedX: 0,
  _lastSpeedY: 0,
  _currSpeedX: 0,
  _currSpeedY: 0,
  _floatScrollPosX: 0,
  _floatScrollPosY: 0,
  _tamperCheckX: 0,
  _tamperCheckY: 0,
  _animTimeStart: 0,
  _lastAnimTime: 0,
  _animTimeoutId: null,
  _isRtl: false,
  initialize: function () {
    ULShpi:;
    this._isRtl = document.dir == "rtl";
    this._previewWindow = document.getElementById(this._previewWindowId);
    this._previewDiv = document.getElementById(this._previewDivId);
    this._leftArrowDis = document.getElementById(
      "FST_leftArrowDis_" + this._id
    );
    this._rightArrowDis = document.getElementById(
      "FST_rightArrowDis_" + this._id
    );
    this._leftArrow = document.getElementById("FST_leftArrow_" + this._id);
    this._rightArrow = document.getElementById("FST_rightArrow_" + this._id);
    this._previewLink = document.getElementById("FST_previewLink_" + this._id);
    this._previewLinkClose = document.getElementById(
      "FST_previewLinkClose_" + this._id
    );
    if (this._isRtl) {
      var a = this._leftArrow.style.background;
      this._leftArrow.style.background = this._rightArrow.style.background;
      this._rightArrow.style.background = a;
      a = this._leftArrowDis.style.background;
      this._leftArrowDis.style.background = this._rightArrowDis.style.background;
      this._rightArrowDis.style.background = a;
    }
    this._previewDiv.onmousedown = Function.createDelegate(
      this,
      this.myBeginDrag
    );
    this._previewDiv.onmousemove = Function.createDelegate(this, this.myDrag);
    this._previewDiv.onmouseup = Function.createDelegate(this, this.myEndDrag);
  },
  ToggleVisible: function () {
    ULShpi:;
    this._visible = !this._visible;
    if (this._visible) {
      this._previewDiv.innerHTML = this.preparedHtml;
      this._previewWindow.style.width = "635px";
    }
    this._previewWindow.style.display = this._visible ? "block" : "none";
    this._leftArrow.style.display = this._visible ? "block" : "none";
    this._rightArrow.style.display = this._visible ? "block" : "none";
    this._leftArrowDis.style.display = this._visible ? "block" : "none";
    this._rightArrowDis.style.display = this._visible ? "block" : "none";
    this._previewLink.style.display = this._visible ? "none" : "inline-block";
    this._previewLinkClose.style.display = this._visible
      ? "inline-block"
      : "none";
    this._visible && this.checkButtons();
  },
  myBeginDrag: function (a) {
    ULShpi:;
    if (a == null) a = window.event;
    var b = a.target != null ? a.target : a.srcElement;
    this.stopAnimation();
    this._dragStartX = a.clientX;
    this._dragStartY = a.clientY;
    this._dragPrevX = a.clientX;
    this._dragPrevY = a.clientY;
    this._lastDragTime = new Date().getTime();
    this._isDragging = true;
    return false;
  },
  myDrag: function (a) {
    ULShpi:;
    if (a == null) a = window.event;
    if (this._isDragging) {
      var d = new Date().getTime(),
        b = this._dragPrevX - a.clientX,
        c = this._dragPrevY - a.clientY;
      if (!this._isRtl)
        var e = (this._previewWindow.scrollLeft += b),
          e = (this._previewWindow.scrollTop += c);
      else
        var e = (this._previewWindow.scrollLeft -= b),
          e = (this._previewWindow.scrollTop -= c);
      this.checkButtons();
      this._dragPrevX = a.clientX;
      this._dragPrevY = a.clientY;
      this._lastSpeedX = b / (d - this._lastDragTime + 1);
      this._lastSpeedY = c / (d - this._lastDragTime + 1);
      this._lastDragTime = d;
      return false;
    }
  },
  myEndDrag: function () {
    ULShpi:;
    if (this._isDragging) {
      this._isDragging = false;
      (Math.abs(this._lastSpeedX) > 0.2 || Math.abs(this._lastSpeedY) > 0.2) &&
        this.startAnimation();
    }
  },
  startAnimation: function () {
    ULShpi:;
    var a = new Date().getTime();
    this._animTimeStart = a;
    this._lastAnimTime = a;
    this._currSpeedX = this._lastSpeedX;
    this._currSpeedY = this._lastSpeedY;
    this._floatScrollPosX = this._previewWindow.scrollLeft;
    this._floatScrollPosY = this._previewWindow.scrollTop;
    this._tamperCheckX = this._previewWindow.scrollLeft;
    this._tamperCheckY = this._previewWindow.scrollTop;
    this._animTimeoutId = setTimeout(
      Function.createDelegate(this, this.animate),
      10
    );
  },
  stopAnimation: function () {
    ULShpi:;
    if (this._animTimeoutId) {
      clearTimeout(this._animTimeoutId);
      this._animTimeoutId = null;
    }
    this._lastSpeedX = 0;
    this._lastSpeedY = 0;
    this._currSpeedX = 0;
    this._currSpeedY = 0;
    this.checkButtons();
  },
  checkButtons: function () {
    ULShpi:;
    var a = this._previewWindow.clientWidth,
      b = parseInt(this._previewDiv.style.width);
    this._leftArrow.style.top = this._previewWindow.offsetTop + "px";
    this._leftArrowDis.style.top = this._previewWindow.offsetTop + "px";
    this._rightArrow.style.top = this._previewWindow.offsetTop + "px";
    this._rightArrow.style.left = a + "px";
    this._rightArrowDis.style.top = this._previewWindow.offsetTop + "px";
    this._rightArrowDis.style.left = a + "px";
    if (b <= a || !this._visible) {
      this.disableButton(this._leftArrow);
      this.disableButton(this._leftArrowDis);
      this.disableButton(this._rightArrow);
      this.disableButton(this._rightArrowDis);
      return;
    }
    if (this._previewWindow.scrollLeft == 0) {
      this.disableButton(this._leftArrow);
      this.enableButton(this._leftArrowDis);
    } else {
      this.disableButton(this._leftArrowDis);
      this.enableButton(this._leftArrow);
    }
    if (b - a == this._previewWindow.scrollLeft) {
      this.enableButton(this._rightArrowDis);
      this.disableButton(this._rightArrow);
    } else {
      this.disableButton(this._rightArrowDis);
      this.enableButton(this._rightArrow);
    }
  },
  disableButton: function (a) {
    ULShpi:;
    a.style.display = "none";
  },
  enableButton: function (a) {
    ULShpi:;
    a.style.display = "block";
  },
  animate: function () {
    ULShpi:;
    var c = new Date().getTime();
    if (this._currSpeedX != 0) {
      var a = (c - this._animTimeStart) / this._animTimeLength;
      if (a >= 0 && a < 1)
        if (
          Math.abs(this._previewWindow.scrollLeft != this._tamperCheckX) ||
          Math.abs(this._previewWindow.scrollTop != this._tamperCheckY)
        )
          this.stopAnimation();
        else {
          var b = c - this._lastAnimTime;
          this._currSpeedX = this._lastSpeedX * (1 - a) * (1 - a);
          this._currSpeedY = this._lastSpeedY * (1 - a) * (1 - a);
          if (!this._isRtl) {
            this._floatScrollPosX += this._currSpeedX * b;
            this._floatScrollPosY += this._currSpeedY * b;
          } else {
            this._floatScrollPosX -= this._currSpeedX * b;
            this._floatScrollPosY -= this._currSpeedY * b;
          }
          this._previewWindow.scrollLeft = this._floatScrollPosX;
          this._previewWindow.scrollTop = this._floatScrollPosY;
          this._tamperCheckX = this._previewWindow.scrollLeft;
          this._tamperCheckY = this._previewWindow.scrollTop;
          this._animTimeoutId = setTimeout(
            Function.createDelegate(this, this.animate),
            10
          );
          this.checkButtons();
        }
      else this.stopAnimation();
    }
    this._lastAnimTime = c;
  },
  dummyElementWithoutComma: null,
};
FST_ImageDisplayer = function (f, e, b, a, c, d) {
  ULShpi:;
  this._image = document.getElementById(f);
  if (this._image != null) {
    this._image.style.display = "none";
    this._image.width = 0;
    this._image.height = 0;
  }
  this._imageDiv = document.getElementById(e);
  if (this._imageDiv != null) this._imageDiv.style.display = "block";
  this._final_height = a;
  this._final_width = b;
  this._divClass = c;
  this._imgClass = d;
};
FST_ImageDisplayer.prototype = {
  _final_height: 80,
  _final_width: 100,
  _image: null,
  _animationSpeed: 20,
  _heightReached: 0,
  _withReached: 0,
  _imageWidth: 0,
  _imageHeight: 0,
  _imageWidthStepper: 9,
  _imageHeightStepper: 9,
  _stepperDecreasePercentage: 0.8,
  setImage: function (a) {
    ULShpi:;
    if (this._image != null) {
      this._image.style.display = "";
      this._image.className = this._imgClass;
      this._imageHeight = this._final_height * 0.7;
      this._imageWidth = this._final_width * 0.7;
      if (this._imageDiv) this._imageDiv.className = this._divClass;
      this._image.src = a;
      this.display();
    }
  },
  display: function () {
    ULShpi:;
    if (this._imageHeight < this._final_height && !this._heightReached) {
      this._imageHeight += this._imageHeightStepper;
      if (this._imageHeightStepper > 2)
        this._imageHeightStepper =
          this._imageHeightStepper * this._stepperDecreasePercentage;
      this._image.style.height = this._imageHeight + "px";
      if (this._imageHeight > this._final_height) this._heightReached = 1;
    } else this._heightReached = 1;
    if (this._imageWidth < this._final_width && !this._withReached) {
      this._imageWidth += this._imageWidthStepper;
      if (this._imageWidthStepper > 2)
        this._imageWidthStepper =
          this._imageWidthStepper * this._stepperDecreasePercentage;
      this._image.style.width = this._imageWidth + "px";
      if (this._imageWidth > this._final_width) this._withReached = 1;
    } else this._withReached = 1;
    (!this._withReached || !this._heightReached) &&
      setTimeout(
        Function.createDelegate(this, this.display),
        this._animationSpeed
      );
  },
};
var FST_fullViewImgSrc = null;
function FST_GetScrollLeft() {
  ULShpi:;
  var a =
    window.pageXOffset ||
    document.body.scrollLeft ||
    document.documentElement.scrollLeft;
  return a ? a : 0;
}
function FST_GetScrollTop() {
  ULShpi:;
  var a =
    window.pageYOffset ||
    document.body.scrollTop ||
    document.documentElement.scrollTop;
  return a ? a : 0;
}
function FST_ShowFullView() {
  ULShpi:;
  var a = document.getElementById("FST_fullSizePreviewWindow");
  if (!a) {
    a = document.createElement("div");
    a.id = "FST_fullSizePreviewWindow";
    a.style.position = "absolute";
    a.style.top = "0";
    a.style.left = "0";
    a.style.width = 800 + "px";
    a.style.height = 600 + "px";
    a.style.zIndex = "1000";
    document.body.appendChild(a);
  }
  var b = FST_GetScrollLeft(),
    c = FST_GetScrollTop();
  a.style.top = "" + c + "px";
  a.style.left = "" + b + "px";
  a.style.display = "block";
  a.innerHTML =
    '<center class="srch-ext-fullViewCenter"><table class="srch-ext-fullViewTable"><tr><td class="srch-ext-fullViewTr"><div onclick="FST_HideFullView();" class="srch-ext-fullViewClose">X</div></td></tr><tr><td class="srch-ext-fullViewTableTd" id="FST_fullViewTd"><img class="srch-ext-fullViewImg" src="' +
    FST_fullViewImgSrc +
    '" onclick="FST_HideFullView();" /></td></tr></table></center>';
}
function FST_HideFullView() {
  ULShpi:;
  document.getElementById("FST_fullSizePreviewWindow").style.display = "none";
}
var FST_displayPreview = [];
function FST_CheckForPreview(a, e, f, l, m, j, h, n) {
  ULShpi:;
  e = encodeURIComponent(e);
  var b = "FST_previewWindow_" + a,
    g = "FST_previewDiv_" + a,
    k = "FST_previewIcon_" + a,
    i = "FST_previewIconDiv_" + a,
    o = "FST_previewLink_" + a;
  if (document.getElementById(b) != null) {
    document.getElementById(b).style.height = l + "px";
    document.getElementById(b).style.display = "inline-block";
    var c = document.getElementById(b).clientHeight;
    if (c == 0) c = l - 4;
    else c = c - 4;
    document.getElementById(b).style.display = "none";
    var d = FST_displayPreview[a];
    if (!d) {
      d = new FST_FlickScrollWindow(b, g, a);
      d.initialize();
      FST_displayPreview[a] = d;
    }
  }
  f = f.toUpperCase();
  if (f.FST_startsWith("DO")) {
    var q = new FST_WordDocument();
    q.getPreviewImagesDoc(null, k, i, a, g, e, c, m, j, h, n);
  }
  if (f.FST_startsWith("PP")) {
    var p = new FST_PPTPresentation();
    p.getPreviewImagesPpt(o, k, i, a, g, e, c, m, j, h, n);
  }
}
function FST_Scroll(c, a) {
  ULShpi:;
  var b = FST_displayPreview[c];
  if (b) {
    if (this._isRtl) a = a * -1;
    b._previewWindow.scrollLeft += a;
  }
}
var FST_ScrollTimer = [];
function FST_ScrollRegister(a, b, e) {
  ULShpi:;
  var d = FST_ScrollTimer[a];
  if (d) {
    FST_Scroll(a, b);
    var c = 5;
    if (b < 0) c = -5;
    setTimeout("FST_ScrollRegister('" + a + "'," + (b + c) + ")", e);
  }
  FST_ScrollButtonCheck(a);
}
function FST_ScrollStart(a, b) {
  ULShpi:;
  FST_ScrollTimer[a] = new Date().getTime();
  setTimeout("FST_ScrollRegister('" + a + "'," + b + "," + 50 + ")", 200);
}
function FST_ScrollStop(a, c) {
  ULShpi:;
  var b = FST_ScrollTimer[a];
  if (b) {
    var d = new Date().getTime();
    b + 200 > d && FST_Scroll(a, c);
    FST_ScrollTimer[a] = null;
  }
  FST_ScrollButtonCheck(a);
}
function FST_ScrollButtonCheck(b) {
  ULShpi:;
  var a = FST_displayPreview[b];
  a && a.checkButtons();
}
function FST_ShowElement(a, b) {
  ULShpi:;
  if (a != null) a.style.display = b;
}
FST_PreviewRequests = [];
function FST_RegisterDocPreviewFetch(a) {
  ULShpi:;
  FST_PreviewRequests.push(a);
}
var gTotReq = 0,
  gTotReqSent = 0;
function FST_StartDocPreviewFetch(b, c) {
  ULShpi:;
  gTotReq = c;
  for (var a = 0; a < b; a++) FST_DocPreviewFetch();
}
function FST_DocPreviewFetch() {
  ULShpi:;
  if (FST_PreviewRequests.length > 0 && gTotReqSent < gTotReq) {
    FST_PreviewRequests.shift().invoke();
    gTotReqSent++;
  }
}
function FST_DocPreviewFetchFailed() {
  ULShpi:;
  gTotReqSent--;
  FST_DocPreviewFetch();
}
function FST_TogglePreviewWindow(b) {
  ULShpi:;
  var a = FST_displayPreview[b];
  if (a) a.imagesAvailable && a.ToggleVisible();
}
var gImageLoadErrors = [];
function FST_ImageLoadError(a) {
  ULShpi:;
  var b = document.getElementById(a);
  if (b == null) return;
  var c = b.src;
  if (gImageLoadErrors[a] == undefined) gImageLoadErrors[a] = 1;
  else gImageLoadErrors[a]++;
  if (gImageLoadErrors[a] > 2) {
    gImageLoadErrors[a] = undefined;
    return 0;
  } else {
    b.src = "";
    b.src = c;
    return 1;
  }
}
function FST_ThumbnailImageLoadError(c, d) {
  ULShpi:;
  if (FST_ImageLoadError("FST_previewIcon_" + c) == 0) {
    var a = document.getElementById("FST_previewIcon_" + c);
    if (a != null) {
      a.src = "/_layouts/images/blank.gif";
      a.title = d;
    }
    var b = document.getElementById("FST_prevIconDivError_" + c);
    if (b != null && a != null) {
      b.style.top = a.height / 2 + "px";
      b.style.left = a.width / 2 + "px";
      b.style.display = "block";
    }
  }
}
function FST_WordDocument() {}
FST_WordDocument.prototype = {
  slides: [],
  docId: null,
  previewLinksId: null,
  previewIconId: null,
  previewIconDivId: null,
  previewDivId: null,
  url: null,
  gDocRef: null,
  numPages: 0,
  docDataXml: null,
  imageHeight: 0,
  imageWidth: 0,
  previewTooltip: "",
  previewTooltipFailed: "",
  ajaxRequest: null,
  requestRetryCount: 0,
  getPreviewImagesDoc: function (h, i, g, l, j, f, e, b, d, c, k) {
    ULShpi:;
    this.docId = l;
    this.previewLinksId = h;
    this.previewIconId = i;
    this.previewDivId = j;
    this.previewIconDivId = g;
    this.imageHeight = e;
    this.imageWidth = Math.round(e * (3 / 4));
    if (d) this.previewTooltip = d;
    if (c) this.previewTooltipFailed = c;
    var a = new AjaxReplacementRequest(this.docId);
    a.set_url(
      b +
        "/_vti_bin/wacproxy.ashx?redirect=" +
        f +
        "&spsite=" +
        encodeURIComponent(b) +
        "&docType=docx&zone=" +
        k
    );
    a.set_testurl(b + "/_vti_bin/wacproxy.ashx?testImg=1");
    a.add_completed(Function.createDelegate(this, this.myOnCompleteDoc2));
    this.ajaxRequest = a;
    FST_RegisterDocPreviewFetch(a);
  },
  myOnCompleteDoc2: function (result) {
    ULShpi:;
    if (result.indexOf("ERROR:") != 0) {
      try {
        eval("var presInf = " + result + ";");
      } catch (ex) {
        this.DocPreviewFetchFailed();
        return;
      }
      if (presInf == null || presInf.images == null) {
        this.DocPreviewFetchFailed();
        return;
      }
      var html = "",
        elem = document.getElementById(this.previewIconId);
      if (presInf.images.length > 0 && elem != null) {
        var previewIconElem = document.getElementById(this.previewIconId);
        if (previewIconElem != null) {
          imgDisplayer = new FST_ImageDisplayer(
            this.previewIconId,
            this.previewIconDivId,
            64,
            84,
            "srch-ext-previewThumbnailDiv",
            "srch-ext-previewIconDocImg"
          );
          imgDisplayer.setImage(presInf.images[0]);
        }
      }
      FST_DocPreviewFetch();
    } else {
      if (
        this.requestRetryCount < 1 &&
        FST_CheckIfRetryWacRequest(result) == true
      ) {
        this.requestRetryCount++;
        this.ajaxRequest.invoke();
        return;
      }
      this.DocPreviewFetchFailed();
    }
  },
  DocPreviewFetchFailed: function () {
    ULShpi:;
    var a = document.getElementById(this.previewIconId);
    if (a != null) a.title = this.previewTooltipFailed;
    var b = document.getElementById("FST_prevIconDivError_" + this.docId);
    if (b != null && a != null) {
      b.style.top = a.height / 2 + "px";
      b.style.left = a.width / 2 + "px";
      b.style.display = "block";
    }
    FST_DocPreviewFetchFailed();
  },
  dummyElementWithoutTrailingComma: null,
};
function FST_PPTPresentation() {}
FST_PPTPresentation.prototype = {
  docId: null,
  previewLinksId: null,
  previewIconId: null,
  previewIconDivId: null,
  slides: [],
  previewDivId: null,
  url: null,
  gDocRef: null,
  imageHeight: 0,
  imageWidth: 0,
  previewTooltip: "",
  previewTooltipFailed: "",
  ajaxRequest: null,
  requestRetryCount: 0,
  getPreviewImagesPpt: function (h, i, g, l, j, f, e, b, d, c, k) {
    ULShpi:;
    this.docId = l;
    this.previewLinksId = h;
    this.previewIconId = i;
    this.previewIconDivId = g;
    this.previewDivId = j;
    this.previewMagIconId = "FST_magIcon_" + this.docId;
    this.imageHeight = e;
    this.imageWidth = Math.round(e * (4 / 3));
    if (d) this.previewTooltip = d;
    if (c) this.previewTooltipFailed = c;
    var a = new AjaxReplacementRequest(this.docId);
    a.set_url(
      b +
        "/_vti_bin/wacproxy.ashx?redirect=" +
        f +
        "&spsite=" +
        encodeURIComponent(b) +
        "&docType=pptx&zone=" +
        k
    );
    a.set_testurl(b + "/_vti_bin/wacproxy.ashx?testImg=1");
    a.add_completed(Function.createDelegate(this, this.myOnCompletePpt2));
    this.ajaxRequest = a;
    FST_RegisterDocPreviewFetch(a);
  },
  myOnCompletePpt2: function (result) {
    ULShpi:;
    if (result.indexOf("ERROR:") != 0) {
      var presInf = null;
      try {
        eval("presInf = " + result + ";");
      } catch (ex) {
        this.DocPreviewFetchFailed();
        return;
      }
      if (
        presInf == null ||
        presInf == "undefined" ||
        presInf.images == null ||
        presInf.images.length == 0
      ) {
        this.DocPreviewFetchFailed();
        return;
      }
      for (
        var html = "", encodedDocRef = encodeURIComponent(this.gDocRef), i = 0;
        i < presInf.images.length;
        i++
      ) {
        var imgSrc = presInf.images[i];
        if (i < presInf.images.length - 1)
          html +=
            '<img class="srch-ext-previewDivPptImg" src="' +
            imgSrc +
            '"  id="FST_PrevImg_' +
            this.docId +
            "_" +
            i +
            '" height="' +
            this.imageHeight +
            'px" width="' +
            this.imageWidth +
            'px" onError="FST_ImageLoadError(\'FST_PrevImg_' +
            this.docId +
            "_" +
            i +
            "')\" />";
        else
          html +=
            '<img class="srch-ext-previewDivPptImgLast" src="' +
            imgSrc +
            '"  id="FST_PrevImg_' +
            this.docId +
            "_" +
            i +
            '" height="' +
            this.imageHeight +
            'px" width="' +
            this.imageWidth +
            'px" onError="FST_ImageLoadError(\'FST_PrevImg_' +
            this.docId +
            "_" +
            i +
            "')\" />";
        if (i == 0) {
          imgDisplayer = new FST_ImageDisplayer(
            this.previewIconId,
            this.previewIconDivId,
            100,
            80,
            "srch-ext-previewThumbnailDiv",
            "srch-ext-previewIconPptImg"
          );
          imgDisplayer.setImage(presInf.images[0]);
        }
      }
      FST_displayPreview[this.docId].preparedHtml = html;
      FST_displayPreview[this.docId].imagesAvailable = true;
      document.getElementById("FST_leftArrow_" + this.docId).style.height =
        this.imageHeight + "px";
      document.getElementById("FST_rightArrow_" + this.docId).style.height =
        this.imageHeight + "px";
      document.getElementById("FST_leftArrow_" + this.docId).style.lineheight =
        this.imageHeight + "px";
      document.getElementById("FST_rightArrow_" + this.docId).style.lineheight =
        this.imageHeight + "px";
      document.getElementById(this.previewDivId).style.width =
        (this.imageWidth + 4) * presInf.images.length - 2 + "px";
      FST_ShowElement(document.getElementById(this.previewLinksId), "inline");
      FST_ShowElement(
        document.getElementById("FST_linkSep_" + this.docId),
        "inline"
      );
      FST_ShowElement(document.getElementById(this.previewMagIconId), "block");
      FST_DocPreviewFetch();
    } else {
      if (
        this.requestRetryCount < 1 &&
        FST_CheckIfRetryWacRequest(result) == true
      ) {
        this.requestRetryCount++;
        this.ajaxRequest.invoke();
        return;
      }
      this.DocPreviewFetchFailed();
    }
  },
  DocPreviewFetchFailed: function () {
    ULShpi:;
    var a = document.getElementById(this.previewIconId);
    if (a != null) a.title = this.previewTooltipFailed;
    var b = document.getElementById("FST_prevIconDivError_" + this.docId);
    if (b != null && a != null) {
      b.style.top = a.height / 2 - 8 + "px";
      b.style.left = a.width / 2 - 8 + "px";
      b.style.display = "block";
    }
  },
  dummyElementWithoutTrailingComma: null,
};
function FST_CheckIfRetryWacRequest(c) {
  ULShpi:;
  var d = /^ERROR:(\d+):/,
    a = d.exec(c);
  if (a != null && a.length > 1) {
    var b = a[1];
    if (b == 503) return true;
  }
  return false;
}
function PostToUrl(b) {
  ULShpi:;
  if (b == null || b.length <= 0) return;
  var a = document.forms[0];
  a.action = b;
  a.method = "post";
  a.onsubmit = function () {};
  a.submit();
}
function GetElementByIdSuffix(f, e) {
  ULShpi:;
  if (!e || !e) return null;
  for (var c = [], d = e.childNodes, b = 0; b < d.length; b++) {
    var a = d[b];
    if (a.nodeType == 1) c[c.length] = a;
  }
  while (c.length) {
    a = c.shift();
    if (a && a.id && a.id.endsWith(f)) return a;
    d = a.childNodes;
    for (b = 0; b < d.length; b++) {
      a = d[b];
      if (a.nodeType == 1) c[c.length] = a;
    }
  }
  return null;
}
function PrepareForPostBack(b, f, d) {
  ULShpi:;
  var e = $get("TabKeywordRelated", b),
    a = $get("TabRecentlyUpdated", b);
  if (e && a) {
    Sys.UI.DomElement.addCssClass(e, "psrch-TabSelected");
    Sys.UI.DomElement.removeCssClass(a, "psrch-TabSelected");
    DisableChildLinks(e);
    DisableChildLinks(a);
  } else if (a) {
    Sys.UI.DomElement.addCssClass(a, "psrch-TabSelected");
    DisableChildLinks(a);
  }
  if (d && f) {
    var c = $get("LinkRecentlyUpdated", b);
    if (c)
      if (c.textContent) c.textContent = String.format(d, f);
      else c.innerText = String.format(d, f);
  }
  var h = GetElementByIdSuffix(
    "PopupControl51A944753DF0430C8FE1EBAA70F3E945",
    b
  );
  if (h) h.innerHTML = "";
  var g = $get("MoreLink", b);
  if (g) g.innerHTML = "";
}
function PostbackUserName(f, b, g) {
  ULShpi:;
  if (!f || !b) return;
  var e = f.attributes.getNamedItem("PreferredName");
  if (e) {
    var a = e.value;
    if (a) {
      var c = $get("ControlUniqueID", b);
      if (c) {
        var d = c.value;
        if (d) {
          PrepareForPostBack(b, a, g);
          __doPostBack(d, UserNamePostbackPrefix + a);
        }
      }
    }
  }
}
function DisableChildLinks(d) {
  ULShpi:;
  if (!d) return;
  var a = d.getElementsByTagName("a");
  if (!a) return;
  for (var c = 0; c < a.length; c++) {
    var b = a[c];
    if (b) {
      b.disabled = true;
      b.removeAttribute("href");
    }
  }
}
NotifyScriptLoadedAndExecuteWaitingJobs("search.js");
/*
page: http://www.kfnl.org.sa/
url: http://www.kfnl.org.sa/_layouts/search.js?rev=3pPWp493ZcP8RyBeS4aKSQ%3D%3D
*/
