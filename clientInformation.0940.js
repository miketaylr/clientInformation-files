/**
 *
 */ var dayA = new Array();
var monthA = new Array();
var yearA = new Array();
var targetfield;
var field;
var calwin;
monthA[0] = "January";
monthA[1] = "February";
monthA[2] = "March";
monthA[3] = "April";
monthA[4] = "May";
monthA[5] = "June";
monthA[6] = "July";
monthA[7] = "August";
monthA[8] = "September";
monthA[9] = "October";
monthA[10] = "November";
monthA[11] = "December";
for (var i = 1; i <= 31; i++) {
  dayA[i] = i;
}
for (var i = -100; i < 100; i++) {
  yearA[i] = gy(i);
}
function gm(num) {
  var mydate = new Date();
  mydate.setDate(1);
  mydate.setMonth(num - 1);
  var datestr = "" + mydate;
  return datestr.substring(4, 7);
}
function gy(num) {
  var mydate = new Date();
  return eval(mydate.getFullYear()) - 4 + num;
}
function ud(mon) {
  var i = mon.selectedIndex;
  if (mon.options[i].value == "2") {
    document.forms[0].day.options[30] = null;
    document.forms[0].day.options[29] = null;
    var j = document.forms[0].year.selectedIndex;
    var year = eval(document.forms[0].year.options[j].value);
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
      if (document.forms[0].day.options[28] == null) {
        document.forms[0].day.options[28] = new Option("29");
        document.forms[0].day.options[28].value = "29";
      }
    } else {
      document.forms[0].day.options[28] = null;
    }
  }
  if (
    mon.options[i].value == "1" ||
    mon.options[i].value == "3" ||
    mon.options[i].value == "5" ||
    mon.options[i].value == "7" ||
    mon.options[i].value == "8" ||
    mon.options[i].value == "10" ||
    mon.options[i].value == "12"
  ) {
    if (document.forms[0].day.options[28] == null) {
      document.forms[0].day.options[28] = new Option("29");
      document.forms[0].day.options[28].value = "29";
    }
    if (document.forms[0].day.options[29] == null) {
      document.forms[0].day.options[29] = new Option("30");
      document.forms[0].day.options[29].value = "30";
    }
    if (document.forms[0].day.options[30] == null) {
      document.forms[0].day.options[30] = new Option("31");
      document.forms[0].day.options[30].value = "31";
    }
  }
  if (
    mon.options[i].value == "4" ||
    mon.options[i].value == "6" ||
    mon.options[i].value == "9" ||
    mon.options[i].value == "11"
  ) {
    if (document.forms[0].day.options[28] == null) {
      document.forms[0].day.options[28] = new Option("29");
      document.forms[0].day.options[28].value = "29";
    }
    if (document.forms[0].day.options[29] == null) {
      document.forms[0].day.options[29] = new Option("30");
      document.forms[0].day.options[29].value = "30";
    }
    document.forms[0].day.options[30] = null;
  }
  if (document.forms[0].day.selectedIndex == -1)
    document.forms[0].day.selectedIndex = 0;
}
function opencalendar(temptargetfield, wid, hei) {
  field = eval("document.forms[1]." + temptargetfield);
  targetfield = "opener.document.forms[1]." + temptargetfield + ".value";
  var ii = "0";
  var mydate = "";
  if (field.value == "" || field.value.length < 10 || field.value.length > 10) {
    mydate = new Date();
  } else {
    ii = "1";
    var tempmonth =
      field.value.charAt(0).toString() + field.value.charAt(1).toString();
    var tempday = field.value.charAt(3) + field.value.charAt(4);
    var tempyear = parseInt(
      field.value.charAt(6).toString() +
        field.value.charAt(7).toString() +
        field.value.charAt(8).toString() +
        field.value.charAt(9).toString()
    ).toString();
    mydate = new Date();
    if (date_format == "mm/dd/yyyy") {
      mydate.setMonth(tempmonth);
      mydate.setDate(tempday);
    } else {
      mydate.setMonth(tempday);
      mydate.setDate(tempmonth);
    }
    mydate.setFullYear(tempyear);
  }
  for (var i = 0; i <= monthA.length; i++) {
    if (mydate.getMonth() == i) {
      if (ii == 0) {
        month = i + 1;
      } else {
        if (i == 0) {
          i = 12;
        }
        month = i;
      }
    }
  }
  year = mydate.getFullYear();
  if (calwin == "[object]" || calwin != null) {
    calwin.close();
  }
  calwin = window.open(
    "",
    "calwin",
    "top=" + wid + ",left=" + hei + ",status=no,height=215,width=210"
  );
  calccal(calwin, month, year, targetfield);
}
function calccal(targetwin, month, year, targetfield) {
  var monthname = new Array(12);
  monthname[0] = "January";
  monthname[1] = "February";
  monthname[2] = "March";
  monthname[3] = "April";
  monthname[4] = "May";
  monthname[5] = "June";
  monthname[6] = "July";
  monthname[7] = "August";
  monthname[8] = "September";
  monthname[9] = "October";
  monthname[10] = "November";
  monthname[11] = "December";
  var ff = new Date();
  if (isNaN(parseInt(year.toString()))) {
    year = ff.getFullYear();
  }
  if (parseInt(year.toString()) < 1900) {
    year = "2002";
  }
  if (isNaN(parseInt(month.toString()))) {
    month = ff.getMonth();
  }
  if ((parseInt(month.toString()) > 12) | (parseInt(month.toString()) < 1)) {
    month = "2";
  }
  var endday = calclastday(eval(month), eval(year));
  mystr = month + "/01/" + year;
  mydate = new Date(mystr);
  firstday = mydate.getDay();
  var cnt = 0;
  var day = new Array(6);
  var dayd = new Array(6);
  for (var i = 0; i < 6; i++) {
    day[i] = new Array(7);
    dayd[i] = new Array(7);
  }
  for (var r = 0; r < 6; r++) {
    for (var c = 0; c < 7; c++) {
      if (cnt == 0 && c != firstday) continue;
      cnt++;
      day[r][c] = cnt;
      if (cnt == endday) break;
    }
    if (cnt == endday) break;
  }
  targetwin.document.write(
    "<html><head><style> td { font-family:Verdana, Arial, Helvetica, sans-serif; font-size:9px;color:#000000; }"
  );
  targetwin.document.write(
    "input { font-family:Verdana, Arial, Helvetica, sans-serif; font-size:9px; color:#000000; "
  );
  targetwin.document.write("width:24px;");
  targetwin.document.write("}</style></head>");
  targetwin.document.write("<TABLE border=0><TR VALIGN=TOP><FORM>");
  var prevyear = eval(year) - 1;
  targetwin.document.write(
    "<TD colspan=3>Yr <INPUT TYPE=text class=form NAME=yr size=4 maxlength=4>"
  );
  targetwin.document.write(
    "<INPUT TYPE=BUTTON class=form NAME=yearbutton VALUE='Go'" +
      " onclick='document.close();opener.calccal(opener.calwin," +
      month +
      ',document.forms[0].yr.value,"' +
      targetfield +
      "\")'></TD>"
  );
  targetwin.document.write(
    "<td></td><TD colspan=3>Mn <INPUT TYPE=text class=form NAME=mn size=2 maxlength=2>"
  );
  targetwin.document.write(
    "<INPUT TYPE=BUTTON class=form NAME=monthbutton VALUE='Go'" +
      " onclick='document.close();opener.calccal(opener.calwin,document.forms[0].mn.value," +
      year +
      ',"' +
      targetfield +
      "\")'></TD></tr>"
  );
  var prevmonth = calcprevmonth(month);
  var prevmonthyear = calcprevyear(month, year);
  targetwin.document.write(
    "<TD><INPUT TYPE=BUTTON class=form NAME=prevyearbutton VALUE='<<'" +
      " onclick='document.close();opener.calccal(opener.calwin," +
      month +
      "," +
      prevyear +
      ',"' +
      targetfield +
      "\")'></TD>"
  );
  targetwin.document.write(
    "<TD><INPUT TYPE=BUTTON class=form NAME=prevmonthbutton VALUE=' < '" +
      " onclick='document.close();opener.calccal(opener.calwin," +
      prevmonth +
      "," +
      prevmonthyear +
      ',"' +
      targetfield +
      "\")'></TD>"
  );
  targetwin.document.write("<TD COLSPAN=3 ALIGN=CENTER>");
  var index = eval(month) - 1;
  targetwin.document.write(
    "<B class=form>" + monthname[index] + " " + year + "</B></TD>"
  );
  var nextmonth = calcnextmonth(month);
  var nextmonthyear = calcnextyear(month, year);
  targetwin.document.write(
    "<TD><INPUT TYPE=BUTTON class=form NAME=nextmonthbutton VALUE=' > '" +
      " onclick='document.close();opener.calccal(opener.calwin," +
      nextmonth +
      "," +
      nextmonthyear +
      ',"' +
      targetfield +
      "\")'></TD>"
  );
  var nextyear = eval(year) + 1;
  targetwin.document.write(
    "<TD><INPUT TYPE=BUTTON class=form NAME=nextyearbutton VALUE='>>'" +
      " onclick='document.close();opener.calccal(opener.calwin," +
      month +
      "," +
      nextyear +
      ',"' +
      targetfield +
      "\")'></TD>"
  );
  targetwin.document.write("</TR><TR class=form>");
  targetwin.document.write("<TD>Sun</TD>");
  targetwin.document.write("<TD>Mon</TD>");
  targetwin.document.write("<TD>Tue</TD>");
  targetwin.document.write("<TD>Wed</TD>");
  targetwin.document.write("<TD>Thr</TD>");
  targetwin.document.write("<TD>Fri</TD>");
  targetwin.document.write("<TD>Sat</TD>");
  targetwin.document.write("</TR>");
  targetwin.document.write(
    "<TR><TD COLSPAN=7 bgcolor=#336699 height=3></TD></TR>"
  );
  targetwin.document.write("<TR><TD COLSPAN=7 height=1></TD></TR>");
  var selectedmonth = eval(month) - 1;
  var today = new Date();
  var thisyear = today.getFullYear();
  selectedyear = eval(year) - thisyear + 4;
  var conditionalpadder = "";
  for (r = 0; r < 6; r++) {
    targetwin.document.write("<TR>");
    for (c = 0; c < 7; c++) {
      targetwin.document.write("<TD>");
      if (day[r][c] != null) {
        if (day[r][c] < 10) conditionalpadder = " ";
        else conditionalpadder = "";
        dayd[r][c] = day[r][c];
        if (("" + dayd[r][c]).length == 1) {
          dayd[r][c] = "0" + dayd[r][c];
        }
        selectedmonth++;
        if (("" + selectedmonth).length == 1) {
          selectedmonth = "0" + selectedmonth;
        }
        if (date_format == "mm/dd/yyyy") {
          targetwin.document.write(
            "<INPUT TYPE=BUTTON class=form NAME=" +
              day[r][c] +
              " VALUE=" +
              conditionalpadder +
              day[r][c] +
              conditionalpadder +
              " onClick=\"window.close();window.opener.getOrgDate('" +
              selectedmonth +
              "/" +
              "" +
              dayd[r][c] +
              "/" +
              yearA[selectedyear.toString()] +
              "');\";>"
          );
        } else {
          targetwin.document.write(
            "<INPUT TYPE=BUTTON class=form NAME=" +
              day[r][c] +
              " VALUE=" +
              conditionalpadder +
              day[r][c] +
              conditionalpadder +
              " onClick=\"window.close();window.opener.getOrgDate('" +
              dayd[r][c] +
              "/" +
              "" +
              selectedmonth +
              "/" +
              yearA[selectedyear.toString()] +
              "');\";>"
          );
        }
        selectedmonth--;
      }
      targetwin.document.write("</TD>");
    }
    targetwin.document.write("</TR>");
  }
  targetwin.document.write("</FORM></TABLE>");
  targetwin.document.write(
    "<script>document.title='Calendar ';document.forms[0].bgcolor = '#f5f5f5';</script>"
  );
}
function calclastday(month, year) {
  if (month == 2 && year % 4 == 0) return 29;
  if (month == 2 && year % 4 != 0) return 28;
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  )
    return 31;
  return 30;
}
function calcnextmonth(month) {
  if (month == "12") return "1";
  else return eval(month) + 1;
}
function calcnextyear(month, year) {
  if (month == "12") return eval(year) + 1;
  else return year;
}
function calcprevmonth(month) {
  if (month == "1") return "12";
  else return eval(month) - 1;
}
function calcprevyear(month, year) {
  if (month == "1") return eval(year) - 1;
  else return year;
}
var dhtmlwindow = {
  imagefiles: [
    "../imagesnew/min.gif",
    "../imagesnew/close.gif",
    "../imagesnew/restore.gif",
    "../imagesnew/resize.gif",
  ],
  ajaxbustcache: true,
  minimizeorder: 0,
  tobjects: [],
  init: function (t) {
    var domwindow = document.createElement("div");
    domwindow.id = t;
    domwindow.className = "dhtmlwindow";
    var domwindowdata = "";
    domwindowdata = '<div class="drag-handle">';
    domwindowdata +=
      'DHTML Window <div class="drag-controls"><img src="' +
      this.imagefiles[0] +
      '" title="Minimize" /><span id=x1><img src="' +
      this.imagefiles[1] +
      '" title="Close" /></span></div>';
    domwindowdata += "</div>";
    domwindowdata += '<div class="drag-contentarea"></div>';
    domwindowdata +=
      '<div class="drag-statusarea"><div class="drag-resizearea" style="background: transparent url(' +
      this.imagefiles[3] +
      ') top right no-repeat;"> </div></div>';
    domwindowdata += "</div>";
    domwindow.innerHTML = domwindowdata;
    document.getElementById("dhtmlwindowholder").appendChild(domwindow);
    this.zIndexvalue = this.zIndexvalue ? this.zIndexvalue + 1 : 100;
    var t = document.getElementById(t);
    var divs = t.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
      if (/drag-/.test(divs[i].className))
        t[divs[i].className.replace(/drag-/, "")] = divs[i];
    }
    t.style.zIndex = this.zIndexvalue;
    t.handle._parent = t;
    t.resizearea._parent = t;
    t.controls._parent = t;
    t.onclose = function () {
      return true;
    };
    t.onmousedown = function () {
      dhtmlwindow.zIndexvalue++;
      this.style.zIndex = dhtmlwindow.zIndexvalue;
    };
    t.handle.onmousedown = dhtmlwindow.setupdrag;
    t.resizearea.onmousedown = dhtmlwindow.setupdrag;
    t.controls.onclick = dhtmlwindow.enablecontrols;
    t.show = function () {
      dhtmlwindow.show(this);
    };
    t.hide = function () {
      dhtmlwindow.close(this);
    };
    t.setSize = function (w, h) {
      dhtmlwindow.setSize(this, w, h);
    };
    t.moveTo = function (x, y) {
      dhtmlwindow.moveTo(this, x, y);
    };
    t.isResize = function (bol) {
      dhtmlwindow.isResize(this, bol);
    };
    t.isScrolling = function (bol) {
      dhtmlwindow.isScrolling(this, bol);
    };
    t.load = function (contenttype, contentsource, title) {
      dhtmlwindow.load(this, contenttype, contentsource, title);
    };
    this.tobjects[this.tobjects.length] = t;
    return t;
  },
  open: function (t, contenttype, contentsource, title, attr, recalonload) {
    var d = dhtmlwindow;
    function getValue(Name) {
      var config = new RegExp(Name + "=([^,]+)", "i");
      return config.test(attr) ? parseInt(RegExp.$1) : 0;
    }
    if (document.getElementById(t) == null) t = this.init(t);
    else t = document.getElementById(t);
    t.setSize(getValue("width"), getValue("height"));
    var xpos = getValue("center") ? "middle" : getValue("left");
    var ypos = getValue("center") ? "middle" : getValue("top");
    if (
      typeof recalonload != "undefined" &&
      recalonload == "recal" &&
      this.scroll_top == 0
    ) {
      if (window.attachEvent && !window.opera)
        this.addEvent(
          window,
          function () {
            setTimeout(function () {
              t.moveTo(xpos, ypos);
            }, 400);
          },
          "load"
        );
      else
        this.addEvent(
          window,
          function () {
            t.moveTo(xpos, ypos);
          },
          "load"
        );
    }
    t.isResize(getValue("resize"));
    t.isScrolling(getValue("scrolling"));
    t.style.visibility = "visible";
    t.style.display = "block";
    t.contentarea.style.display = "block";
    t.moveTo(xpos, ypos);
    t.load(contenttype, contentsource, title);
    if (t.state == "minimized" && t.controls.firstChild.title == "Restore") {
      t.controls.firstChild.setAttribute("src", dhtmlwindow.imagefiles[0]);
      t.controls.firstChild.setAttribute("title", "Minimize");
      t.state = "fullview";
    }
    return t;
  },
  setSize: function (t, w, h) {
    t.style.width = Math.max(parseInt(w), 150) + "px";
    if (h == 0 || h == "0") t.contentarea.style.height = "auto";
    else t.contentarea.style.height = Math.max(parseInt(h), 100) + "px";
  },
  moveTo: function (t, x, y) {
    this.getviewpoint();
    t.style.left =
      x == "middle"
        ? this.scroll_left + (this.docwidth - t.offsetWidth) / 2 + "px"
        : this.scroll_left + parseInt(x) + "px";
    t.style.top =
      y == "middle"
        ? this.scroll_top + (this.docheight - t.offsetHeight) / 2 + "px"
        : this.scroll_top + parseInt(y) + "px";
  },
  isResize: function (t, bol) {
    t.statusarea.style.display = bol ? "block" : "none";
    t.resizeBool = bol ? 1 : 0;
  },
  isScrolling: function (t, bol) {
    t.contentarea.style.overflow = bol ? "visible" : "hidden";
  },
  load: function (t, contenttype, contentsource, title) {
    var contenttype = contenttype.toLowerCase();
    if (typeof title != "undefined") t.handle.firstChild.nodeValue = title;
    if (contenttype == "inline") t.contentarea.innerHTML = contentsource;
    else if (contenttype == "div") {
      if (document.getElementById("x1") != null) {
        document.getElementById("x1").innerHTML = "";
      }
      t.style.borderColor = "#FF8000";
      if (contentsource == "sitenewsletter_calendar") {
        t.style.borderColor = "#449bbc";
      } else if (
        contentsource == "employee_advancesearch" ||
        contentsource == "confirm"
      ) {
        t.style.borderColor = "#3399CC";
      } else if (contentsource == "employee_advancesearchsavedsearch") {
        t.style.borderColor = "#3399CC";
      } else if (contentsource == "sitenewsletter_blue_border_active") {
        t.style.borderColor = "#67B3D8";
      } else if (contentsource == "sitenewsletter_blue_border_inactive") {
        t.style.borderColor = "#67B3D8";
      }
      t.contentarea.innerHTML = document.getElementById(
        contentsource
      ).innerHTML;
      document.getElementById(contentsource).style.display = "none";
    } else if (contenttype == "iframe") {
      t.contentarea.style.overflow = "hidden";
      if (
        !t.contentarea.firstChild ||
        t.contentarea.firstChild.tagName != "IFRAME"
      )
        t.contentarea.innerHTML =
          '<iframe src="" style="margin:0; padding:0; width:100%; height: 100%" name="_iframe-' +
          t.id +
          '"></iframe>';
      window.frames["_iframe-" + t.id].location.replace(contentsource);
    } else if (contenttype == "ajax") {
      this.ajax_connect(contentsource, t);
    }
    t.contentarea.datatype = contenttype;
  },
  setupdrag: function (e) {
    var d = dhtmlwindow;
    var t = this._parent;
    d.etarget = this;
    var e = window.event || e;
    d.initmousex = e.clientX;
    d.initmousey = e.clientY;
    d.initx = parseInt(t.offsetLeft);
    d.inity = parseInt(t.offsetTop);
    d.width = parseInt(t.offsetWidth);
    d.contentheight = parseInt(t.contentarea.offsetHeight);
    if (t.contentarea.datatype == "iframe") {
      t.style.backgroundColor = "#F8F8F8";
      t.contentarea.style.visibility = "hidden";
    }
    document.onmousemove = d.getdistance;
    document.onmouseup = function () {
      if (t.contentarea.datatype == "iframe") {
        t.contentarea.style.backgroundColor = "white";
        t.contentarea.style.visibility = "visible";
      }
      d.stop();
    };
    return false;
  },
  getdistance: function (e) {
    var d = dhtmlwindow;
    var etarget = d.etarget;
    var e = window.event || e;
    d.distancex = e.clientX - d.initmousex;
    d.distancey = e.clientY - d.initmousey;
    if (etarget.className == "drag-handle") d.move(etarget._parent, e);
    else if (etarget.className == "drag-resizearea")
      d.resize(etarget._parent, e);
    return false;
  },
  getviewpoint: function () {
    var ie = document.all && !window.opera;
    var domclientWidth =
      (document.documentElement &&
        parseInt(document.documentElement.clientWidth)) ||
      100000;
    this.standardbody =
      document.compatMode == "CSS1Compat"
        ? document.documentElement
        : document.body;
    this.scroll_top = ie ? this.standardbody.scrollTop : window.pageYOffset;
    this.scroll_left = ie ? this.standardbody.scrollLeft : window.pageXOffset;
    this.docwidth = ie
      ? this.standardbody.clientWidth
      : /Safari/i.test(navigator.userAgent)
      ? window.innerWidth
      : Math.min(domclientWidth, window.innerWidth - 16);
    this.docheight = ie ? this.standardbody.clientHeight : window.innerHeight;
  },
  rememberattrs: function (t) {
    this.getviewpoint();
    t.lastx = parseInt(t.style.left || t.offsetLeft) - dhtmlwindow.scroll_left;
    t.lasty = parseInt(t.style.top || t.offsetTop) - dhtmlwindow.scroll_top;
    t.lastwidth = parseInt(t.style.width);
  },
  move: function (t, e) {
    t.style.left = dhtmlwindow.distancex + dhtmlwindow.initx + "px";
    t.style.top = dhtmlwindow.distancey + dhtmlwindow.inity + "px";
  },
  resize: function (t, e) {
    t.style.width =
      Math.max(dhtmlwindow.width + dhtmlwindow.distancex, 150) + "px";
    t.contentarea.style.height =
      Math.max(dhtmlwindow.contentheight + dhtmlwindow.distancey, 100) + "px";
  },
  enablecontrols: function (e) {
    var d = dhtmlwindow;
    var sourceobj = window.event ? window.event.srcElement : e.target;
    if (/Minimize/i.test(sourceobj.getAttribute("title")))
      d.minimize(sourceobj, this._parent);
    else if (/Restore/i.test(sourceobj.getAttribute("title")))
      d.restore(sourceobj, this._parent);
    else if (/Close/i.test(sourceobj.getAttribute("title")))
      d.close(this._parent);
    return false;
  },
  minimize: function (button, t) {
    dhtmlwindow.rememberattrs(t);
    button.setAttribute("src", dhtmlwindow.imagefiles[2]);
    button.setAttribute("title", "Restore");
    t.state = "minimized";
    t.contentarea.style.display = "none";
    t.statusarea.style.display = "none";
    if (typeof t.minimizeorder == "undefined") {
      dhtmlwindow.minimizeorder++;
      t.minimizeorder = dhtmlwindow.minimizeorder;
    }
    t.style.left = "10px";
    t.style.width = "200px";
    var windowspacing = t.minimizeorder * 10;
    t.style.top =
      dhtmlwindow.scroll_top +
      dhtmlwindow.docheight -
      t.handle.offsetHeight * t.minimizeorder -
      windowspacing +
      "px";
  },
  restore: function (button, t) {
    dhtmlwindow.getviewpoint();
    button.setAttribute("src", dhtmlwindow.imagefiles[0]);
    button.setAttribute("title", "Minimize");
    t.state = "fullview";
    t.style.display = "block";
    t.contentarea.style.display = "block";
    if (t.resizeBool) t.statusarea.style.display = "block";
    t.style.left = parseInt(t.lastx) + dhtmlwindow.scroll_left + "px";
    t.style.top = parseInt(t.lasty) + dhtmlwindow.scroll_top + "px";
    t.style.width = parseInt(t.lastwidth) + "px";
  },
  close: function (t) {
    try {
      var closewinbol = t.onclose();
    } catch (err) {
      var closewinbol = true;
    } finally {
      if (typeof closewinbol == "undefined") {
        var closewinbol = true;
      }
    }
    if (closewinbol) {
      if (t.state != "minimized") dhtmlwindow.rememberattrs(t);
      t.style.display = "none";
    }
    return closewinbol;
  },
  show: function (t) {
    if (t.lastx) dhtmlwindow.restore(t.controls.firstChild, t);
    else t.style.display = "block";
    t.state = "fullview";
  },
  ajax_connect: function (url, t) {
    var page_request = false;
    var bustcacheparameter = "";
    if (window.XMLHttpRequest) page_request = new XMLHttpRequest();
    else if (window.ActiveXObject) {
      try {
        page_request = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          page_request = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
      }
    } else return false;
    page_request.onreadystatechange = function () {
      dhtmlwindow.ajax_loadpage(page_request, t);
    };
    if (this.ajaxbustcache)
      bustcacheparameter =
        url.indexOf("?") != -1
          ? "&" + new Date().getTime()
          : "?" + new Date().getTime();
    page_request.open("GET", url + bustcacheparameter, true);
    page_request.send(null);
  },
  ajax_loadpage: function (page_request, t) {
    if (
      page_request.readyState == 4 &&
      (page_request.status == 200 || window.location.href.indexOf("http") == -1)
    ) {
      t.contentarea.innerHTML = page_request.responseText;
    }
  },
  stop: function () {
    dhtmlwindow.etarget = null;
    document.onmousemove = null;
    document.onmouseup = null;
  },
  addEvent: function (target, functionref, tasktype) {
    var tasktype = window.addEventListener ? tasktype : "on" + tasktype;
    if (target.addEventListener)
      target.addEventListener(tasktype, functionref, false);
    else if (target.attachEvent) target.attachEvent(tasktype, functionref);
  },
  cleanup: function () {
    for (var i = 0; i < dhtmlwindow.tobjects.length; i++) {
      dhtmlwindow.tobjects[i].handle._parent = dhtmlwindow.tobjects[
        i
      ].resizearea._parent = dhtmlwindow.tobjects[i].controls._parent = null;
    }
    window.onload = null;
  },
};
document.write(
  '<div id="dhtmlwindowholder"><span style="display:none">.</span></div>'
);
window.onunload = dhtmlwindow.cleanup;
if (typeof dhtmlwindow == "undefined")
  alert(
    'ERROR: Modal Window script requires all files from "DHTML Window widget" in order to work!'
  );
var dhtmlmodal = {
  veilstack: 0,
  open: function (t, contenttype, contentsource, title, attr, recalonload) {
    var d = dhtmlwindow;
    this.interVeil = document.getElementById("interVeil");
    this.veilstack++;
    this.loadveil();
    if (
      typeof recalonload != "undefined" &&
      recalonload == "recal" &&
      d.scroll_top == 0
    )
      d.addEvent(
        window,
        function () {
          dhtmlmodal.loadveil();
        },
        "load"
      );
    var t = d.open(t, contenttype, contentsource, title, attr, recalonload);
    t.controls.firstChild.style.display = "none";
    t.controls.onclick = function () {
      dhtmlmodal.forceclose(this._parent);
    };
    t.show = function () {
      dhtmlmodal.show(this);
    };
    t.hide = function () {
      dhtmlmodal.close(this);
    };
    return t;
  },
  loadveil: function () {
    var d = dhtmlwindow;
    d.getviewpoint();
    this.docheightcomplete =
      d.standardbody.offsetHeight > d.standardbody.scrollHeight
        ? d.standardbody.offsetHeight
        : d.standardbody.scrollHeight;
    this.interVeil.style.width = d.docwidth + "px";
    this.interVeil.style.height = this.docheightcomplete + "px";
    this.interVeil.style.left = 0;
    this.interVeil.style.top = 0;
    this.interVeil.style.visibility = "visible";
    this.interVeil.style.display = "block";
  },
  adjustveil: function () {
    if (this.interVeil && this.interVeil.style.display == "block")
      this.loadveil();
  },
  close: function (t) {
    t.contentDoc =
      t.contentarea.datatype == "iframe"
        ? window.frames["_iframe-" + t.id].document
        : t.contentarea;
    var closewinbol = dhtmlwindow.close(t);
    if (closewinbol) {
      this.veilstack--;
      if (this.veilstack == 0) this.interVeil.style.display = "none";
    }
  },
  forceclose: function (t) {
    dhtmlwindow.rememberattrs(t);
    t.style.display = "none";
    this.veilstack--;
    if (this.veilstack == 0) {
      this.interVeil.style.display = "none";
    }
    document.getElementsByTagName("iframe")[0].src = "about:blank";
  },
  show: function (t) {
    dhtmlmodal.veilstack++;
    dhtmlmodal.loadveil();
    dhtmlwindow.show(t);
  },
};
document.write('<div id="interVeil"></div>');
dhtmlwindow.addEvent(
  window,
  function () {
    if (typeof dhtmlmodal != "undefined") dhtmlmodal.adjustveil();
  },
  "resize"
);
function showDate(dateS) {
  if (dateS != null && dateS != "") {
    var arrD = dateS.split("-");
    if (date_format == "mm/dd/yyyy") {
      return arrD[1] + "/" + arrD[2] + "/" + arrD[0];
    } else {
      return arrD[2] + "/" + arrD[1] + "/" + arrD[0];
    }
  } else return "";
}
function showDateH(dateS) {
  if (dateS != null && dateS != "") {
    var arrD = dateS.split("-");
    if (date_format == "mm/dd/yyyy") {
      return arrD[1] + "/" + arrD[2];
    } else {
      return arrD[2] + "/" + arrD[1];
    }
  } else return "";
}
function callwindow(winhref, winname, options) {
  var loc = unescape(location.href);
  var lstr = loc.substring(0, loc.indexOf("/servlet"));
  var tmp = "ggs.erm.servlet.setup4.HomePageS?_redurl=" + lstr + "/servlet/";
  tmp += _rep(winhref);
  if (winname == 0) winname = "";
  if (options == 0) {
    ht = screen.height - 200;
    wd = screen.width - 10;
    options =
      "left=1,top=1,menubar=yes, resizable=yes, location=yes, toolbar=yes, status=yes, scrollbars=yes,height=" +
      ht +
      ",width=" +
      wd;
  }
  window.open(tmp, winname, options);
}
function _rep(str) {
  var arr = str.split("&");
  var st = "";
  for (var i = 0; i < arr.length; i++) st += arr[i] + "~~";
  if (st.length > 0) st = st.substring(0, st.length - 2);
  return st;
}
function display_msg(idi, typ) {
  var message = "";
  var row = 1;
  MsgErr.recordset.absoluteposition = row;
  for (var j = 0; j < MsgErr.documentElement.childNodes.length; j++) {
    var i = MsgErr.recordset("error_id");
    if (i == idi) {
      message = MsgErr.recordset("description");
    }
    x = MsgErr.recordset;
    x.movenext();
  }
  return_obj = "";
  show_msg(message, typ, "");
}
function display_msg(idi, typ, ret) {
  var message = "";
  var row = 1;
  var st = "";
  MsgErr.recordset.absoluteposition = row;
  for (var j = 0; j < MsgErr.documentElement.childNodes.length; j++) {
    var i = MsgErr.recordset("err");
    if (i == 3) {
      st = MsgErr.recordset("desc");
      st = st + "";
    }
    if (i == idi) {
      message1 = MsgErr.recordset("desc");
      message1 = message1 + "";
      message = message1.replace("~3~", st);
      break;
    }
    x = MsgErr.recordset;
    x.movenext();
  }
  return_obj = ret;
  show_msg(message, typ, ret);
}
function display_label(idi) {
  var message = "";
  var row = 1;
  var z = lbl.recordset;
  z.absoluteposition = row;
  flag = false;
  for (var j = 0; j < lbl.documentElement.childNodes.length; j++) {
    var i = z("label_id");
    if (i == idi) {
      message = z("description");
      flag = true;
    }
    if (flag == true) break;
    z.movenext();
  }
  return message;
}
function hidel() {
  document.all.div1.style.visibility = "hidden";
  if (return_obj != "") {
    var obj_r = eval(return_obj);
    if (obj_r == "[object]") {
      obj_r.focus();
    }
  }
}
function show_msg(message, typ, ret) {
  top.scroll(0);
  document.all.div1.style.visibility = "visible";
  document.all.div2.innerHTML = "<br>" + message;
  document.all.div1.focus();
  document.all.ok.focus();
}
function chkKey(evt) {
  var mykey;
  if (!window.Event) {
    mykey = evt.keyCode;
    if (mykey == 27) {
      if (document.all.div1.style.visibility == "visible") {
        document.all.div1.style.visibility = "hidden";
      }
    }
  }
  return true;
}
function openpolicy() {
  if ((location.href + "").indexOf("ctplerm") > -1) {
    window.open("http://www.mysmilescrm.com/policies/index.html");
  } else {
    openhome();
  }
}
function showDateS1(dateS) {
  if (dateS != null && dateS != "") {
    var arrD = dateS.split("-");
    var arrd = arrD[2].split(" ");
    return arrd[0] + "-" + month(arrD[1]) + "-" + arrD[0];
    return month(arrD[1]) + "" + arrd[0] + "," + arrD[0];
  } else return "";
}

function showDateS2(dateS) {
  if (dateS != null && dateS != "") {
    var arrD = dateS.split("/");
    var arrd = arrD[2].split(" ");
    return arrD[0] + "-" + month(arrD[1]) + "-" + arrd[0];
    return month(arrD[1]) + "" + arrd[0] + "," + arrD[0];
  } else return "";
}

function showDateS(dateS) {
  if (dateS != null && dateS != "") {
    var arrD = dateS.split("-");
    var arrd = arrD[2].split(" ");
    return arrd[0] + "-" + month(arrD[1]) + "-" + arrD[0];
  } else return "";
}
function showDateSE(sdate, edate) {
  if (
    sdate != null &&
    sdate != "" &&
    edate != null &&
    edate != "" &&
    sdate != "null" &&
    edate != "null"
  ) {
    var sarrD = sdate.split("-");
    var sarrd = sarrD[2].split(" ");
    var smonth = "";
    var earrD = edate.split("-");
    var earrd = earrD[2].split(" ");
    var emonth = "";
    return (
      month(sarrD[1]) +
      " " +
      sarrd[0] +
      " - " +
      month(earrD[1]) +
      " " +
      earrd[0] +
      " , " +
      earrD[0] +
      "."
    );
  } else return "";
}
function month(month) {
  if (month.charAt(0) == "0") month = month.charAt(1);
  switch (parseInt(month)) {
    case 1:
      month = "Jan";
      break;
    case 2:
      month = "Feb";
      break;
    case 3:
      month = "Mar";
      break;
    case 4:
      month = "Apr";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "Jun";
      break;
    case 7:
      month = "Jul";
      break;
    case 8:
      month = "Aug";
      break;
    case 9:
      month = "Sep";
      break;
    case 10:
      month = "Oct";
      break;
    case 11:
      month = "Nov";
      break;
    case 12:
      month = "Dec";
      break;
  }
  return month;
}
function monthN(month) {
  if (month.charAt(0) == "0") month = month.charAt(1);
  switch (parseInt(month)) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
  }
  return month;
}
function showDateN(dateS) {
  if (dateS != null && dateS != "") {
    var arrD = dateS.split("-");
    var arrd = arrD[2].split(" ");
    return arrd[0] + " " + monthN(arrD[1]) + "," + arrD[0];
  } else return "";
}
function setnumber(number) {
  for (ln = 0; ln < number.length; ln++) {
    number = number.replace(",", "");
  }
  return number;
}
function sepcomma(number) {
  var eve = "0";
  var neg = "";
  if (number < 0) {
    neg = "-";
    number = Math.abs(number) + "";
  }
  if (number.length > 3) {
    if (number.length % 2 == 0) var eve = "-1";
    val = number.substring(number.length - 2, number.length);
    for (p = number.length - 3; p > -1; p--) {
      if (eve == "-1") {
        if (p % 2 == 0) val = number.charAt(p) + "," + val;
        else val = number.charAt(p) + val;
      } else {
        if (p % 2 == 1) val = number.charAt(p) + "," + val;
        else val = number.charAt(p) + val;
      }
    }
    return neg + val;
  }
  return neg + number;
}
function show_comma(obj1, number2) {
  if (obj1.value == "NaN") {
    obj1.value = "0";
  } else {
    var number1 = "" + number2;
    if (number1.indexOf(".") > 0) {
      var arr = number1.split(".");
      if (arr.length > 1) {
        if (arr[1].length < 2) arr[1] = arr[1] + "0";
        else arr[1] = arr[1].substring(0, 2);
        number2 = arr[0];
        arr[0] = sepcomma(number2);
        obj1.value = arr[0] + "." + arr[1];
      }
    } else {
      obj1.value = sepcomma(number1) + ".00";
    }
  }
}
function show_comma_view(number2) {
  var number1 = "" + number2;
  if (number1.indexOf(".") > 0) {
    var arr = number1.split(".");
    if (arr.length > 1) {
      if (arr[1].length < 2) arr[1] = arr[1] + "0";
      else arr[1] = arr[1].substring(0, 2);
      number2 = arr[0];
      arr[0] = sepcomma(number2);
      return arr[0] + "." + arr[1];
    }
  } else {
    return sepcomma(number1) + ".00";
  }
}
function Menu(
  label,
  mw,
  mh,
  fnt,
  fs,
  fclr,
  fhclr,
  bg,
  bgh,
  halgn,
  valgn,
  pad,
  space,
  to,
  sx,
  sy,
  srel,
  opq,
  vert,
  idt,
  aw,
  ah
) {
  this.version = "020320 [Menu; mm_menu.js]";
  this.type = "Menu";
  this.menuWidth = mw;
  this.menuItemHeight = mh;
  this.fontSize = fs;
  this.fontWeight = "plain";
  this.fontFamily = fnt;
  this.fontColor = fclr;
  this.fontColorHilite = fhclr;
  this.bgColor = "#555555";
  this.menuBorder = 1;
  this.menuBgOpaque = opq;
  this.menuItemBorder = 1;
  this.menuItemIndent = idt;
  this.menuItemBgColor = bg;
  this.menuItemVAlign = valgn;
  this.menuItemHAlign = halgn;
  this.menuItemPadding = pad;
  this.menuItemSpacing = space;
  this.menuLiteBgColor = "#ffffff";
  this.menuBorderBgColor = "#777777";
  this.menuHiliteBgColor = bgh;
  this.menuContainerBgColor = "#cccccc";
  this.childMenuIcon = "arrows.gif";
  this.submenuXOffset = sx;
  this.submenuYOffset = sy;
  this.submenuRelativeToItem = srel;
  this.vertical = vert;
  this.items = new Array();
  this.actions = new Array();
  this.childMenus = new Array();
  this.hideOnMouseOut = true;
  this.hideTimeout = to;
  this.addMenuItem = addMenuItem;
  this.writeMenus = writeMenus;
  this.MM_showMenu = MM_showMenu;
  this.onMenuItemOver = onMenuItemOver;
  this.onMenuItemAction = onMenuItemAction;
  this.hideMenu = hideMenu;
  this.hideChildMenu = hideChildMenu;
  if (!window.menus) window.menus = new Array();
  this.label = " " + label;
  window.menus[this.label] = this;
  window.menus[window.menus.length] = this;
  if (!window.activeMenus) window.activeMenus = new Array();
}
function addMenuItem(label, action) {
  this.items[this.items.length] = label;
  this.actions[this.actions.length] = action;
}
function FIND(item) {
  if (window.mmIsOpera) return document.getElementById(item);
  if (document.all) return document.all[item];
  if (document.getElementById) return document.getElementById(item);
  return false;
}
function writeMenus(container) {
  if (window.triedToWriteMenus) return;
  var agt = navigator.userAgent.toLowerCase();
  window.mmIsOpera = agt.indexOf("opera") != -1;
  if (!container && document.layers) {
    window.delayWriteMenus = this.writeMenus;
    var timer = setTimeout("delayWriteMenus()", 500);
    container = new Layer(100);
    clearTimeout(timer);
  } else if (document.all || document.hasChildNodes || window.mmIsOpera) {
    document.writeln('<span id="menuContainer"></span>');
    container = FIND("menuContainer");
  }
  window.mmHideMenuTimer = null;
  if (!container) return;
  window.triedToWriteMenus = true;
  container.isContainer = true;
  container.menus = new Array();
  for (var i = 0; i < window.menus.length; i++)
    container.menus[i] = window.menus[i];
  window.menus.length = 0;
  var countMenus = 0;
  var countItems = 0;
  var top = 0;
  var content = "";
  var lrs = false;
  var theStat = "";
  var tsc = 0;
  if (document.layers) lrs = true;
  for (var i = 0; i < container.menus.length; i++, countMenus++) {
    var menu = container.menus[i];
    if (menu.bgImageUp || !menu.menuBgOpaque) {
      menu.menuBorder = 0;
      menu.menuItemBorder = 0;
    }
    if (lrs) {
      var menuLayer = new Layer(100, container);
      var lite = new Layer(100, menuLayer);
      lite.top = menu.menuBorder;
      lite.left = menu.menuBorder;
      var body = new Layer(100, lite);
      body.top = menu.menuBorder;
      body.left = menu.menuBorder;
    } else {
      content +=
        "" +
        '<div id="menuLayer' +
        countMenus +
        '" style="position:absolute;z-index:1;left:10px;top:' +
        i * 100 +
        "px;visibility:hidden;color:" +
        menu.menuBorderBgColor +
        ';">\n' +
        '  <div id="menuLite' +
        countMenus +
        '" style="position:absolute;z-index:1;left:' +
        menu.menuBorder +
        "px;top:" +
        menu.menuBorder +
        'px;visibility:hide;" onmouseout="mouseoutMenu();">\n' +
        '  <div id="menuFg' +
        countMenus +
        '" style="position:absolute;left:' +
        menu.menuBorder +
        "px;top:" +
        menu.menuBorder +
        'px;visibility:hide;">\n' +
        "";
    }
    var x = i;
    for (var i = 0; i < menu.items.length; i++) {
      var item = menu.items[i];
      var childMenu = false;
      var defaultHeight = menu.fontSize + 2 * menu.menuItemPadding;
      if (item.label) {
        item = item.label;
        childMenu = true;
      }
      menu.menuItemHeight = menu.menuItemHeight || defaultHeight;
      var itemProps = "";
      if (menu.fontFamily != "")
        itemProps += "font-family:" + menu.fontFamily + ";";
      itemProps +=
        "font-weight:" + menu.fontWeight + ";fontSize:" + menu.fontSize + "px;";
      if (menu.fontStyle) itemProps += "font-style:" + menu.fontStyle + ";";
      if (document.all || window.mmIsOpera)
        itemProps +=
          "font-size:" +
          menu.fontSize +
          'px;" onmouseover="onMenuItemOver(null,this);" onclick="onMenuItemAction(null,this);';
      else if (!document.layers) {
        itemProps += "font-size:" + menu.fontSize + "px;";
      }
      var l;
      if (lrs) {
        var lw = menu.menuWidth;
        if (menu.menuItemHAlign == "right") lw -= menu.menuItemPadding;
        l = new Layer(lw, body);
      }
      var itemLeft = 0;
      var itemTop = i * menu.menuItemHeight;
      if (!menu.vertical) {
        itemLeft = i * menu.menuWidth;
        itemTop = 0;
      }
      var dTag =
        '<div id="menuItem' +
        countItems +
        '" style="position:absolute;left:' +
        itemLeft +
        "px;top:" +
        itemTop +
        "px;" +
        itemProps +
        '">';
      var dClose = "</div>";
      if (menu.bgImageUp)
        dTag =
          '<div id="menuItem' +
          countItems +
          '" style="background:url(' +
          menu.bgImageUp +
          ");position:absolute;left:" +
          itemLeft +
          "px;top:" +
          itemTop +
          "px;" +
          itemProps +
          '">';
      var left = 0,
        top = 0,
        right = 0,
        bottom = 0;
      left = 1 + menu.menuItemPadding + menu.menuItemIndent;
      right =
        left + menu.menuWidth - 2 * menu.menuItemPadding - menu.menuItemIndent;
      if (menu.menuItemVAlign == "top") top = menu.menuItemPadding;
      if (menu.menuItemVAlign == "bottom")
        top = menu.menuItemHeight - menu.fontSize - 1 - menu.menuItemPadding;
      if (menu.menuItemVAlign == "middle")
        top = menu.menuItemHeight / 2 - menu.fontSize / 2 - 1;
      bottom = menu.menuItemHeight - 2 * menu.menuItemPadding;
      var textProps =
        "position:absolute;left:" + left + "px;top:" + top + "px;";
      if (lrs) {
        textProps += itemProps + "right:" + right + ";bottom:" + bottom + ";";
        dTag = "";
        dClose = "";
      }
      if (document.all && !window.mmIsOpera) {
        item = '<div align="' + menu.menuItemHAlign + '">' + item + "</div>";
      } else if (lrs) {
        item =
          '<div style="text-align:' +
          menu.menuItemHAlign +
          ';">' +
          item +
          "</div>";
      } else {
        var hitem = null;
        if (menu.menuItemHAlign != "left") {
          if (window.mmIsOpera) {
            var operaWidth =
              menu.menuItemHAlign == "center"
                ? -(menu.menuWidth - 2 * menu.menuItemPadding)
                : menu.menuWidth - 6 * menu.menuItemPadding;
            hitem =
              '<div id="menuItemHilite' +
              countItems +
              'Shim" style="position:absolute;top:1px;left:' +
              menu.menuItemPadding +
              "px;width:" +
              operaWidth +
              "px;text-align:" +
              menu.menuItemHAlign +
              ';visibility:visible;">' +
              item +
              "</div>";
            item =
              '<div id="menuItemText' +
              countItems +
              'Shim" style="position:absolute;top:1px;left:' +
              menu.menuItemPadding +
              "px;width:" +
              operaWidth +
              "px;text-align:" +
              menu.menuItemHAlign +
              ';visibility:visible;">' +
              item +
              "</div>";
          } else {
            hitem =
              '<div id="menuItemHilite' +
              countItems +
              'Shim" style="position:absolute;top:1px;left:1px;right:-' +
              (left + menu.menuWidth - 3 * menu.menuItemPadding) +
              "px;text-align:" +
              menu.menuItemHAlign +
              ';visibility:visible;">' +
              item +
              "</div>";
            item =
              '<div id="menuItemText' +
              countItems +
              'Shim" style="position:absolute;top:1px;left:1px;right:-' +
              (left + menu.menuWidth - 3 * menu.menuItemPadding) +
              "px;text-align:" +
              menu.menuItemHAlign +
              ';visibility:visible;">' +
              item +
              "</div>";
          }
        } else hitem = null;
      }
      if (document.all && !window.mmIsOpera)
        item =
          '<div id="menuItemShim' +
          countItems +
          '" style="position:absolute;left:0px;top:0px;">' +
          item +
          "</div>";
      var dText =
        '<div id="menuItemText' +
        countItems +
        '" style="' +
        textProps +
        "color:" +
        menu.fontColor +
        ';">' +
        item +
        " </div>\n" +
        '<div id="menuItemHilite' +
        countItems +
        '" style="' +
        textProps +
        "color:" +
        menu.fontColorHilite +
        ';visibility:hidden;">' +
        (hitem || item) +
        " </div>";
      if (childMenu)
        content +=
          dTag +
          dText +
          '<div id="childMenu' +
          countItems +
          '" style="position:absolute;left:0px;top:3px;"><img src="' +
          menu.childMenuIcon +
          '"></div>\n' +
          dClose;
      else content += dTag + dText + dClose;
      if (lrs) {
        l.document.open("text/html");
        l.document.writeln(content);
        l.document.close();
        content = "";
        theStat += "-";
        tsc++;
        if (tsc > 50) {
          tsc = 0;
          theStat = "";
        }
        status = theStat;
      }
      countItems++;
    }
    if (lrs) {
      var focusItem = new Layer(100, body);
      focusItem.visiblity = "hidden";
      focusItem.document.open("text/html");
      focusItem.document.writeln(" ");
      focusItem.document.close();
    } else {
      content +=
        '<div id="focusItem' +
        countMenus +
        '" style="position:absolute;left:0px;top:0px;visibility:hide;" onclick="onMenuItemAction(null,this);"> </div>\n';
      content += "</div>\n  </div>\n</div>\n";
    }
    i = x;
  }
  if (document.layers) {
    container.clip.width = window.innerWidth;
    container.clip.height = window.innerHeight;
    container.onmouseout = mouseoutMenu;
    container.menuContainerBgColor = this.menuContainerBgColor;
    for (var i = 0; i < container.document.layers.length; i++) {
      proto = container.menus[i];
      var menu = container.document.layers[i];
      container.menus[i].menuLayer = menu;
      container.menus[i].menuLayer.Menu = container.menus[i];
      container.menus[i].menuLayer.Menu.container = container;
      var body = menu.document.layers[0].document.layers[0];
      body.clip.width = proto.menuWidth || body.clip.width;
      body.clip.height = proto.menuHeight || body.clip.height;
      for (var n = 0; n < body.document.layers.length - 1; n++) {
        var l = body.document.layers[n];
        l.Menu = container.menus[i];
        l.menuHiliteBgColor = proto.menuHiliteBgColor;
        l.document.bgColor = proto.menuItemBgColor;
        l.saveColor = proto.menuItemBgColor;
        l.onmouseover = proto.onMenuItemOver;
        l.onclick = proto.onMenuItemAction;
        l.mmaction = container.menus[i].actions[n];
        l.focusItem = body.document.layers[body.document.layers.length - 1];
        l.clip.width = proto.menuWidth || body.clip.width;
        l.clip.height = proto.menuItemHeight || l.clip.height;
        if (n > 0) {
          if (l.Menu.vertical)
            l.top =
              body.document.layers[n - 1].top +
              body.document.layers[n - 1].clip.height +
              proto.menuItemBorder +
              proto.menuItemSpacing;
          else
            l.left =
              body.document.layers[n - 1].left +
              body.document.layers[n - 1].clip.width +
              proto.menuItemBorder +
              proto.menuItemSpacing;
        }
        l.hilite = l.document.layers[1];
        if (proto.bgImageUp) l.background.src = proto.bgImageUp;
        l.document.layers[1].isHilite = true;
        if (l.document.layers.length > 2) {
          l.childMenu = container.menus[i].items[n].menuLayer;
          l.document.layers[2].left = l.clip.width - 13;
          l.document.layers[2].top = l.clip.height / 2 - 4;
          l.document.layers[2].clip.left += 3;
          l.Menu.childMenus[l.Menu.childMenus.length] = l.childMenu;
        }
      }
      if (proto.menuBgOpaque) body.document.bgColor = proto.bgColor;
      if (proto.vertical) {
        body.clip.width = l.clip.width + proto.menuBorder;
        body.clip.height = l.top + l.clip.height + proto.menuBorder;
      } else {
        body.clip.height = l.clip.height + proto.menuBorder;
        body.clip.width = l.left + l.clip.width + proto.menuBorder;
        if (body.clip.width > window.innerWidth)
          body.clip.width = window.innerWidth;
      }
      var focusItem = body.document.layers[n];
      focusItem.clip.width = body.clip.width;
      focusItem.Menu = l.Menu;
      focusItem.top = -30;
      focusItem.captureEvents(Event.MOUSEDOWN);
      focusItem.onmousedown = onMenuItemDown;
      if (proto.menuBgOpaque) menu.document.bgColor = proto.menuBorderBgColor;
      var lite = menu.document.layers[0];
      if (proto.menuBgOpaque) lite.document.bgColor = proto.menuLiteBgColor;
      lite.clip.width = body.clip.width + 1;
      lite.clip.height = body.clip.height + 1;
      menu.clip.width = body.clip.width + proto.menuBorder * 3;
      menu.clip.height = body.clip.height + proto.menuBorder * 3;
    }
  } else {
    if (!document.all && container.hasChildNodes && !window.mmIsOpera) {
      container.innerHTML = content;
    } else {
      container.document.open("text/html");
      container.document.writeln(content);
      container.document.close();
    }
    if (!FIND("menuLayer0")) return;
    var menuCount = 0;
    for (var x = 0; x < container.menus.length; x++) {
      var menuLayer = FIND("menuLayer" + x);
      container.menus[x].menuLayer = "menuLayer" + x;
      menuLayer.Menu = container.menus[x];
      menuLayer.Menu.container = "menuLayer" + x;
      menuLayer.style.zindex = 1;
      var s = menuLayer.style;
      s.pixeltop = -300;
      s.pixelleft = -300;
      s.top = "-300px";
      s.left = "-300px";
      var menu = container.menus[x];
      menu.menuItemWidth = menu.menuWidth || menu.menuIEWidth || 140;
      if (menu.menuBgOpaque)
        menuLayer.style.backgroundColor = menu.menuBorderBgColor;
      var top = 0;
      var left = 0;
      menu.menuItemLayers = new Array();
      for (var i = 0; i < container.menus[x].items.length; i++) {
        var l = FIND("menuItem" + menuCount);
        l.Menu = container.menus[x];
        l.Menu.menuItemLayers[l.Menu.menuItemLayers.length] = l;
        if (l.addEventListener || window.mmIsOpera) {
          l.style.width = menu.menuItemWidth + "px";
          l.style.height = menu.menuItemHeight + "px";
          l.style.pixelWidth = menu.menuItemWidth;
          l.style.pixelHeight = menu.menuItemHeight;
          l.style.top = top + "px";
          l.style.left = left + "px";
          if (l.addEventListener) {
            l.addEventListener("mouseover", onMenuItemOver, false);
            l.addEventListener("click", onMenuItemAction, false);
            l.addEventListener("mouseout", mouseoutMenu, false);
          }
          if (menu.menuItemHAlign != "left") {
            l.hiliteShim = FIND("menuItemHilite" + menuCount + "Shim");
            l.hiliteShim.style.visibility = "inherit";
            l.textShim = FIND("menuItemText" + menuCount + "Shim");
            l.hiliteShim.style.pixelWidth =
              menu.menuItemWidth -
              2 * menu.menuItemPadding -
              menu.menuItemIndent;
            l.hiliteShim.style.width = l.hiliteShim.style.pixelWidth;
            l.textShim.style.pixelWidth =
              menu.menuItemWidth -
              2 * menu.menuItemPadding -
              menu.menuItemIndent;
            l.textShim.style.width = l.textShim.style.pixelWidth;
          }
        } else {
          l.style.pixelWidth = menu.menuItemWidth;
          l.style.pixelHeight = menu.menuItemHeight;
          l.style.pixelTop = top;
          l.style.pixelLeft = left;
          if (menu.menuItemHAlign != "left") {
            var shim = FIND("menuItemShim" + menuCount);
            shim[0].style.pixelWidth =
              menu.menuItemWidth -
              2 * menu.menuItemPadding -
              menu.menuItemIndent;
            shim[1].style.pixelWidth =
              menu.menuItemWidth -
              2 * menu.menuItemPadding -
              menu.menuItemIndent;
            shim[0].style.width = shim[0].style.pixelWidth + "px";
            shim[1].style.width = shim[1].style.pixelWidth + "px";
          }
        }
        if (menu.vertical)
          top =
            top +
            menu.menuItemHeight +
            menu.menuItemBorder +
            menu.menuItemSpacing;
        else
          left =
            left +
            menu.menuItemWidth +
            menu.menuItemBorder +
            menu.menuItemSpacing;
        l.style.fontSize = menu.fontSize + "px";
        l.style.backgroundColor = menu.menuItemBgColor;
        l.style.visibility = "inherit";
        l.saveColor = menu.menuItemBgColor;
        l.menuHiliteBgColor = menu.menuHiliteBgColor;
        l.mmaction = container.menus[x].actions[i];
        l.hilite = FIND("menuItemHilite" + menuCount);
        l.focusItem = FIND("focusItem" + x);
        l.focusItem.style.pixelTop = -30;
        l.focusItem.style.top = "-30px";
        var childItem = FIND("childMenu" + menuCount);
        if (childItem) {
          l.childMenu = container.menus[x].items[i].menuLayer;
          childItem.style.pixelLeft = menu.menuItemWidth - 11;
          childItem.style.left = childItem.style.pixelLeft + "px";
          childItem.style.pixelTop = menu.menuItemHeight / 2 - 4;
          childItem.style.top = childItem.style.pixelTop + "px";
          l.Menu.childMenus[l.Menu.childMenus.length] = l.childMenu;
        }
        l.style.cursor = "pointer";
        menuCount++;
      }
      if (menu.vertical) {
        menu.menuHeight = top - 1 - menu.menuItemSpacing;
        menu.menuWidth = menu.menuItemWidth;
      } else {
        menu.menuHeight = menu.menuItemHeight;
        menu.menuWidth = left - 1 - menu.menuItemSpacing;
      }
      var lite = FIND("menuLite" + x);
      var s = lite.style;
      s.pixelHeight = menu.menuHeight + menu.menuBorder * 2;
      s.height = s.pixelHeight + "px";
      s.pixelWidth = menu.menuWidth + menu.menuBorder * 2;
      s.width = s.pixelWidth + "px";
      if (menu.menuBgOpaque) s.backgroundColor = menu.menuLiteBgColor;
      var body = FIND("menuFg" + x);
      s = body.style;
      s.pixelHeight = menu.menuHeight + menu.menuBorder;
      s.height = s.pixelHeight + "px";
      s.pixelWidth = menu.menuWidth + menu.menuBorder;
      s.width = s.pixelWidth + "px";
      if (menu.menuBgOpaque) s.backgroundColor = menu.bgColor;
      s = menuLayer.style;
      s.pixelWidth = menu.menuWidth + menu.menuBorder * 4;
      s.width = s.pixelWidth + "px";
      s.pixelHeight = menu.menuHeight + menu.menuBorder * 4;
      s.height = s.pixelHeight + "px";
    }
  }
  if (document.captureEvents) document.captureEvents(Event.MOUSEUP);
  if (document.addEventListener)
    document.addEventListener("mouseup", onMenuItemOver, false);
  if (document.layers && window.innerWidth) {
    window.onresize = NS4resize;
    window.NS4sIW = window.innerWidth;
    window.NS4sIH = window.innerHeight;
    setTimeout("NS4resize()", 500);
  }
  document.onmouseup = mouseupMenu;
  window.mmWroteMenu = true;
  status = "";
}
function NS4resize() {
  if (NS4sIW != window.innerWidth || NS4sIH != window.innerHeight)
    window.location.reload();
}
function onMenuItemOver(e, l) {
  MM_clearTimeout();
  l = l || this;
  var a = window.ActiveMenuItem;
  if (document.layers) {
    if (a) {
      a.document.bgColor = a.saveColor;
      if (a.hilite) a.hilite.visibility = "hidden";
      if (a.Menu.bgImageOver) a.background.src = a.Menu.bgImageUp;
      a.focusItem.top = -100;
      a.clicked = false;
    }
    if (l.hilite) {
      l.document.bgColor = l.menuHiliteBgColor;
      l.zIndex = 1;
      l.hilite.visibility = "inherit";
      l.hilite.zIndex = 2;
      l.document.layers[1].zIndex = 1;
      l.focusItem.zIndex = this.zIndex + 2;
    }
    if (l.Menu.bgImageOver) l.background.src = l.Menu.bgImageOver;
    l.focusItem.top = this.top;
    l.focusItem.left = this.left;
    l.focusItem.clip.width = l.clip.width;
    l.focusItem.clip.height = l.clip.height;
    l.Menu.hideChildMenu(l);
  } else if (l.style && l.Menu) {
    if (a) {
      a.style.backgroundColor = a.saveColor;
      if (a.hilite) a.hilite.style.visibility = "hidden";
      if (a.hiliteShim) a.hiliteShim.style.visibility = "inherit";
      if (a.Menu.bgImageUp)
        a.style.background = "url(" + a.Menu.bgImageUp + ")";
    }
    l.style.backgroundColor = l.menuHiliteBgColor;
    l.zIndex = 1;
    if (l.Menu.bgImageOver)
      l.style.background = "url(" + l.Menu.bgImageOver + ")";
    if (l.hilite) {
      l.hilite.style.visibility = "inherit";
      if (l.hiliteShim) l.hiliteShim.style.visibility = "visible";
    }
    l.focusItem.style.pixelTop = l.style.pixelTop;
    l.focusItem.style.top = l.focusItem.style.pixelTop + "px";
    l.focusItem.style.pixelLeft = l.style.pixelLeft;
    l.focusItem.style.left = l.focusItem.style.pixelLeft + "px";
    l.focusItem.style.zIndex = l.zIndex + 1;
    l.Menu.hideChildMenu(l);
  } else return;
  window.ActiveMenuItem = l;
}
function onMenuItemAction(e, l) {
  l = window.ActiveMenuItem;
  if (!l) return;
  hideActiveMenus();
  if (l.mmaction) eval("" + l.mmaction);
  window.ActiveMenuItem = 0;
}
function MM_clearTimeout() {
  if (mmHideMenuTimer) clearTimeout(mmHideMenuTimer);
  mmHideMenuTimer = null;
  mmDHFlag = false;
}
function MM_startTimeout() {
  if (window.ActiveMenu) {
    mmStart = new Date();
    mmDHFlag = true;
    mmHideMenuTimer = setTimeout(
      "mmDoHide()",
      window.ActiveMenu.Menu.hideTimeout
    );
  }
}
function mmDoHide() {
  if (!mmDHFlag || !window.ActiveMenu) return;
  var elapsed = new Date() - mmStart;
  var timeout = window.ActiveMenu.Menu.hideTimeout;
  if (elapsed < timeout) {
    mmHideMenuTimer = setTimeout("mmDoHide()", timeout + 100 - elapsed);
    return;
  }
  mmDHFlag = false;
  hideActiveMenus();
  window.ActiveMenuItem = 0;
}
function MM_showMenu(menu, x, y, child, imgname) {
  if (!window.mmWroteMenu) return;
  MM_clearTimeout();
  if (menu) {
    var obj =
      FIND(imgname) ||
      document.images[imgname] ||
      document.links[imgname] ||
      document.anchors[imgname];
    x = moveXbySlicePos(x, obj);
    y = moveYbySlicePos(y, obj);
  }
  if (document.layers) {
    if (menu) {
      var l = menu.menuLayer || menu;
      l.top = l.left = 1;
      hideActiveMenus();
      if (this.visibility) l = this;
      window.ActiveMenu = l;
    } else {
      var l = child;
    }
    if (!l) return;
    for (var i = 0; i < l.layers.length; i++) {
      if (!l.layers[i].isHilite) l.layers[i].visibility = "inherit";
      if (l.layers[i].document.layers.length > 0)
        MM_showMenu(null, "relative", "relative", l.layers[i]);
    }
    if (l.parentLayer) {
      if (x != "relative") l.parentLayer.left = x || window.pageX || 0;
      if (l.parentLayer.left + l.clip.width > window.innerWidth)
        l.parentLayer.left -=
          l.parentLayer.left + l.clip.width - window.innerWidth;
      if (y != "relative") l.parentLayer.top = y || window.pageY || 0;
      if (l.parentLayer.isContainer) {
        l.Menu.xOffset = window.pageXOffset;
        l.Menu.yOffset = window.pageYOffset;
        l.parentLayer.clip.width = window.ActiveMenu.clip.width + 2;
        l.parentLayer.clip.height = window.ActiveMenu.clip.height + 2;
        if (l.parentLayer.menuContainerBgColor && l.Menu.menuBgOpaque)
          l.parentLayer.document.bgColor = l.parentLayer.menuContainerBgColor;
      }
    }
    l.visibility = "inherit";
    if (l.Menu) l.Menu.container.visibility = "inherit";
  } else if (FIND("menuItem0")) {
    var l = menu.menuLayer || menu;
    hideActiveMenus();
    if (typeof l == "string") l = FIND(l);
    window.ActiveMenu = l;
    var s = l.style;
    s.visibility = "inherit";
    if (x != "relative") {
      s.pixelLeft = x || window.pageX + document.body.scrollLeft || 0;
      s.left = s.pixelLeft + "px";
    }
    if (y != "relative") {
      s.pixelTop = y || window.pageY + document.body.scrollTop || 0;
      s.top = s.pixelTop + "px";
    }
    l.Menu.xOffset = document.body.scrollLeft;
    l.Menu.yOffset = document.body.scrollTop;
  }
  if (menu) window.activeMenus[window.activeMenus.length] = l;
  MM_clearTimeout();
}
function onMenuItemDown(e, l) {
  var a = window.ActiveMenuItem;
  if (document.layers && a) {
    a.eX = e.pageX;
    a.eY = e.pageY;
    a.clicked = true;
  }
}
function mouseupMenu(e) {
  hideMenu(true, e);
  hideActiveMenus();
  return true;
}
function getExplorerVersion() {
  var ieVers = parseFloat(navigator.appVersion);
  if (navigator.appName != "Microsoft Internet Explorer") return ieVers;
  var tempVers = navigator.appVersion;
  var i = tempVers.indexOf("MSIE ");
  if (i >= 0) {
    tempVers = tempVers.substring(i + 5);
    ieVers = parseFloat(tempVers);
  }
  return ieVers;
}
function mouseoutMenu() {
  if (
    navigator.appName == "Microsoft Internet Explorer" &&
    getExplorerVersion() < 4.5
  )
    return true;
  hideMenu(false, false);
  return true;
}
function hideMenu(mouseup, e) {
  var a = window.ActiveMenuItem;
  if (a && document.layers) {
    a.document.bgColor = a.saveColor;
    a.focusItem.top = -30;
    if (a.hilite) a.hilite.visibility = "hidden";
    if (mouseup && a.mmaction && a.clicked && window.ActiveMenu) {
      if (
        a.eX <= e.pageX + 15 &&
        a.eX >= e.pageX - 15 &&
        a.eY <= e.pageY + 10 &&
        a.eY >= e.pageY - 10
      ) {
        setTimeout("window.ActiveMenu.Menu.onMenuItemAction();", 500);
      }
    }
    a.clicked = false;
    if (a.Menu.bgImageOver) a.background.src = a.Menu.bgImageUp;
  } else if (window.ActiveMenu && FIND("menuItem0")) {
    if (a) {
      a.style.backgroundColor = a.saveColor;
      if (a.hilite) a.hilite.style.visibility = "hidden";
      if (a.hiliteShim) a.hiliteShim.style.visibility = "inherit";
      if (a.Menu.bgImageUp)
        a.style.background = "url(" + a.Menu.bgImageUp + ")";
    }
  }
  if (!mouseup && window.ActiveMenu) {
    if (window.ActiveMenu.Menu) {
      if (window.ActiveMenu.Menu.hideOnMouseOut) MM_startTimeout();
      return true;
    }
  }
  return true;
}
function hideChildMenu(hcmLayer) {
  MM_clearTimeout();
  var l = hcmLayer;
  for (var i = 0; i < l.Menu.childMenus.length; i++) {
    var theLayer = l.Menu.childMenus[i];
    if (document.layers) theLayer.visibility = "hidden";
    else {
      theLayer = FIND(theLayer);
      theLayer.style.visibility = "hidden";
      if (theLayer.Menu.menuItemHAlign != "left") {
        for (var j = 0; j < theLayer.Menu.menuItemLayers.length; j++) {
          var itemLayer = theLayer.Menu.menuItemLayers[j];
          if (itemLayer.textShim)
            itemLayer.textShim.style.visibility = "inherit";
        }
      }
    }
    theLayer.Menu.hideChildMenu(theLayer);
  }
  if (l.childMenu) {
    var childMenu = l.childMenu;
    if (document.layers) {
      l.Menu.MM_showMenu(null, null, null, childMenu.layers[0]);
      childMenu.zIndex = l.parentLayer.zIndex + 1;
      childMenu.top = l.Menu.menuLayer.top + l.Menu.submenuYOffset;
      if (l.Menu.vertical) {
        if (l.Menu.submenuRelativeToItem)
          childMenu.top += l.top + l.parentLayer.top;
        childMenu.left =
          l.parentLayer.left +
          l.parentLayer.clip.width -
          2 * l.Menu.menuBorder +
          l.Menu.menuLayer.left +
          l.Menu.submenuXOffset;
      } else {
        childMenu.top += l.top + l.parentLayer.top;
        if (l.Menu.submenuRelativeToItem)
          childMenu.left =
            l.Menu.menuLayer.left +
            l.left +
            l.clip.width +
            2 * l.Menu.menuBorder +
            l.Menu.submenuXOffset;
        else
          childMenu.left =
            l.parentLayer.left +
            l.parentLayer.clip.width -
            2 * l.Menu.menuBorder +
            l.Menu.menuLayer.left +
            l.Menu.submenuXOffset;
      }
      if (childMenu.left < l.Menu.container.clip.left)
        l.Menu.container.clip.left = childMenu.left;
      var w =
        childMenu.clip.width + childMenu.left - l.Menu.container.clip.left;
      if (w > l.Menu.container.clip.width) l.Menu.container.clip.width = w;
      var h = childMenu.clip.height + childMenu.top - l.Menu.container.clip.top;
      if (h > l.Menu.container.clip.height) l.Menu.container.clip.height = h;
      l.document.layers[1].zIndex = 0;
      childMenu.visibility = "inherit";
    } else if (FIND("menuItem0")) {
      childMenu = FIND(l.childMenu);
      var menuLayer = FIND(l.Menu.menuLayer);
      var s = childMenu.style;
      s.zIndex = menuLayer.style.zIndex + 1;
      if (document.all || window.mmIsOpera) {
        s.pixelTop = menuLayer.style.pixelTop + l.Menu.submenuYOffset;
        if (l.Menu.vertical) {
          if (l.Menu.submenuRelativeToItem) s.pixelTop += l.style.pixelTop;
          s.pixelLeft =
            l.style.pixelWidth +
            menuLayer.style.pixelLeft +
            l.Menu.submenuXOffset;
          s.left = s.pixelLeft + "px";
        } else {
          s.pixelTop += l.style.pixelTop;
          if (l.Menu.submenuRelativeToItem)
            s.pixelLeft =
              menuLayer.style.pixelLeft +
              l.style.pixelLeft +
              l.style.pixelWidth +
              2 * l.Menu.menuBorder +
              l.Menu.submenuXOffset;
          else
            s.pixelLeft =
              menuLayer.style.pixelWidth -
              4 * l.Menu.menuBorder +
              menuLayer.style.pixelLeft +
              l.Menu.submenuXOffset;
          s.left = s.pixelLeft + "px";
        }
      } else {
        var top = parseInt(menuLayer.style.top) + l.Menu.submenuYOffset;
        var left = 0;
        if (l.Menu.vertical) {
          if (l.Menu.submenuRelativeToItem) top += parseInt(l.style.top);
          left =
            parseInt(menuLayer.style.width) -
            4 * l.Menu.menuBorder +
            parseInt(menuLayer.style.left) +
            l.Menu.submenuXOffset;
        } else {
          top += parseInt(l.style.top);
          if (l.Menu.submenuRelativeToItem)
            left =
              parseInt(menuLayer.style.left) +
              parseInt(l.style.left) +
              parseInt(l.style.width) +
              2 * l.Menu.menuBorder +
              l.Menu.submenuXOffset;
          else
            left =
              parseInt(menuLayer.style.width) -
              4 * l.Menu.menuBorder +
              parseInt(menuLayer.style.left) +
              l.Menu.submenuXOffset;
        }
        s.top = top + "px";
        s.left = left + "px";
      }
      childMenu.style.visibility = "inherit";
    } else return;
    window.activeMenus[window.activeMenus.length] = childMenu;
  }
}
function hideActiveMenus() {
  if (!window.activeMenus) return;
  for (var i = 0; i < window.activeMenus.length; i++) {
    if (!activeMenus[i]) continue;
    if (activeMenus[i].visibility && activeMenus[i].Menu && !window.mmIsOpera) {
      activeMenus[i].visibility = "hidden";
      activeMenus[i].Menu.container.visibility = "hidden";
      activeMenus[i].Menu.container.clip.left = 0;
    } else if (activeMenus[i].style) {
      var s = activeMenus[i].style;
      s.visibility = "hidden";
      s.left = "-200px";
      s.top = "-200px";
    }
  }
  if (window.ActiveMenuItem) hideMenu(false, false);
  window.activeMenus.length = 0;
}
function moveXbySlicePos(x, img) {
  if (!document.layers) {
    var onWindows = navigator.platform ? navigator.platform == "Win32" : false;
    var macIE45 = document.all && !onWindows && getExplorerVersion() == 4.5;
    var par = img;
    var lastOffset = 0;
    while (par) {
      if (par.leftMargin && !onWindows) x += parseInt(par.leftMargin);
      if (par.offsetLeft != lastOffset && par.offsetLeft)
        x += parseInt(par.offsetLeft);
      if (par.offsetLeft != 0) lastOffset = par.offsetLeft;
      par = macIE45 ? par.parentElement : par.offsetParent;
    }
  } else if (img.x) x += img.x;
  return x;
}
function moveYbySlicePos(y, img) {
  if (!document.layers) {
    var onWindows = navigator.platform ? navigator.platform == "Win32" : false;
    var macIE45 = document.all && !onWindows && getExplorerVersion() == 4.5;
    var par = img;
    var lastOffset = 0;
    while (par) {
      if (par.topMargin && !onWindows) y += parseInt(par.topMargin);
      if (par.offsetTop != lastOffset && par.offsetTop)
        y += parseInt(par.offsetTop);
      if (par.offsetTop != 0) lastOffset = par.offsetTop;
      par = macIE45 ? par.parentElement : par.offsetParent;
    }
  } else if (img.y >= 0) y += img.y;
  return y;
}
sfHover = function () {
  if (
    document.getElementById("nav") != null &&
    document.getElementById("nav") != ""
  )
    var sfEls = document.getElementById("nav").getElementsByTagName("LI");
  var sel = document.getElementById("hide-this");
  if (sfEls != null && sfEls != "")
    for (var i = 0; i < sfEls.length; i++) {
      sfEls[i].onmouseover = function () {
        this.className += " sfhover";
        if ((this.id == "hide") | (this.id == "hide2") | (this.id == "hide3")) {
        }
      };
      sfEls[i].onmouseout = function () {
        this.className = this.className.replace(new RegExp(" sfhover\\b"), "");
      };
    }
};
if (window.attachEvent) window.attachEvent("onload", sfHover);

function getBrowserForStyle() {
  if (navigator.userAgent.indexOf("Chrome") != -1) {
    return "Chrome";
  } else if (navigator.userAgent.indexOf("Opera") != -1) {
    return "Opera";
  } else if (navigator.userAgent.indexOf("MSIE") != -1) {
    return "IE";
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    return "Firefox";
  } else {
    return "unknown";
  }
}

function getVersionOfIE() {
  if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
    //test for MSIE x.x;
    var ieversion = new Number(RegExp.$1); // capture x.x portion and store as a number
    if (ieversion >= 8) ieversion = 8;
    else if (ieversion >= 7) ieversion = 7;
    else if (ieversion >= 6) ieversion = 6;
    else if (ieversion >= 5) ieversion = 5;
    return ieversion;
  }
}

function anothermenuclicked1(image) {
  var currclickedid = image;
  if (
    currclickedid.substring(1, 3) == lastclickedid.substring(1, 3) ||
    lastclickedid == ""
  ) {
    changeimage1(image);
  } else {
    closeallothers1(image);
    lastclickedid = "";
    changeimage1(image);
  }
}

function getPgpIdByImgId(imgid) {
  var pgpid = "o" + imgid.substring(1, 5) + "pgp" + imgid.substring(8);
  return pgpid;
  //alert("getting pgpid after doing the substring from 1 to 5 and 8 char" +pgpid);
}

function changeimage1(imageid) {
  //alert("given image id"+imageid);
  var remain_id = imageid.substring(1);

  //alert("after substring"+remain_id);
  var pgpid = "";
  //alert("again substring from 1 to 5 char" +imageid.substring(1,5));
  //alert("again substring from 8 to 10 char" +imageid.substring(8,10));

  var hiddendiv =
    "o" + imageid.substring(1, 5) + "div" + "a1" + imageid.substring(8, 10);

  //alert("aftr concating id of hidden string" +hiddendiv);

  pgpid = getPgpIdByImgId(imageid);
  //alert("image id====>"+imageid);
  //alert("pgp id====>"+pgpid);
  //alert(document.getElementById(pgpid));
  //alert("getting first char of image" +imageid.substring(0,1));
  if (imageid.substring(0, 1) == "p") {
    lastclickedid = imageid;
    var minusid = "m" + remain_id;

    document.getElementById(imageid).src =
      "../images/pms_images/W26_dropdownarrow_selected.png";
    document.getElementById(imageid).id = minusid;
    if (oldcoloredid != "" && oldcoloredid != null && oldcoloredid != "null") {
      if (
        getBrowserForStyle() == "IE" &&
        (getVersionOfIE() == 7 || getVersionOfIE() == 8)
      ) {
      } else
        document.getElementById(
          oldcoloredid
        ).style.textDecoration = oldcoloredclass;
    }

    if (hiddendiv == "ob2a2diva1a2") {
      if (document.getElementById("ob2a2diva1a3") != null)
        document.getElementById("ob2a2diva1a3").style.display = "none";

      if (document.getElementById("mb2a2imga3a1") != null) {
        document.getElementById("mb2a2imga3a1").src =
          "../images/pms_images/W26_rightarrow_normal.png";
        document.getElementById("mb2a2imga3a1").id = "pb2a2imga3a1";
      }
      if (document.getElementById("ob2a1diva1a1") != null)
        document.getElementById("ob2a1diva1a1").style.height = "130px";
    } else if (hiddendiv == "ob2a2diva1a3") {
      if (document.getElementById("ob2a2diva1a2") != null)
        document.getElementById("ob2a2diva1a2").style.display = "none";
      if (document.getElementById("mb2a2imga2a1") != null) {
        document.getElementById("mb2a2imga2a1").src =
          "../images/pms_images/W26_rightarrow_normal.png";
        document.getElementById("mb2a2imga2a1").id = "pb2a2imga2a1";
      }
      if (document.getElementById("ob2a1diva1a1") != null)
        document.getElementById("ob2a1diva1a1").style.height = "130px";
    }

    //alert("hidden div" +hiddendiv);
    oldcoloredclass = document.getElementById(pgpid).className;
    oldcoloredid = pgpid;
    document.getElementById(pgpid).className = "SecNavSelectedTxt PL2";
    document.getElementById(hiddendiv).style.display = "block";
    document.getElementById("treeimage").style.display = "block";
  } else if (imageid.substring(0, 1) == "m") {
    lastclickedid = imageid;
    var plusid = "p" + remain_id;
    document.getElementById(imageid).src =
      "../images/pms_images/W26_rightarrow_normal.png";
    document.getElementById(imageid).id = plusid;

    document.getElementById(hiddendiv).style.display = "none";
    if (imageid == "mb2a2imga2a1" || imageid == "mb2a2imga3a1") {
      if (
        document.getElementById("ob2a2diva1a2") != null &&
        document.getElementById("ob2a2diva1a2").style.display == "none" &&
        document.getElementById("ob2a2diva1a3") != null &&
        document.getElementById("ob2a2diva1a3").style.display == "none"
      ) {
        if (document.getElementById("ob2a1diva1a1") != null)
          document.getElementById("ob2a1diva1a1").style.height = "90px";
      }
    }

    //document.getElementById('treeimage').style.display="none";
  } else if (imageid.substring(0, 1) == "a") {
    lastclickedid = imageid;
    if (oldcoloredid != "" && oldcoloredid != "null" && oldcoloredid != null) {
      if (
        getBrowserForStyle() == "IE" &&
        (getVersionOfIE() == 7 || getVersionOfIE() == 8)
      ) {
      } else document.getElementById(oldcoloredid).className = oldcoloredclass;
    }
    //alert("pgpid"+pgpid);
    //alert("pgpid class"+pgpid);
    document.getElementById(imageid).className = "SecNavSelectedTxt PL1";
    oldcoloredclass = document.getElementById(pgpid).className;
    oldcoloredid = pgpid;
    document.getElementById(pgpid).className = "sprite_img W17_B";

    sendrequest(imageid);
  }
  ////alert("image id====>"+imageid);
}

function closeallothers1(image) {
  var lastindex = parseInt(lastclickedid.charAt(4));
  while (lastindex > 0) {
    var lastindex1 = lastindex;
    while (lastindex1 > 0) {
      var minid1 =
        "m" +
        lastclickedid.substring(1, 4) +
        lastindex +
        "imga" +
        lastindex +
        "a" +
        lastindex1;
      if (document.getElementById(minid1)) {
        changeimage1(minid1);
      }
      lastindex1 = lastindex1 - 1;
    }
    lastindex = lastindex - 1;
  }
}

function anothermenuclicked(image) {
  //alert("image_id in anothermenuclicked() method====>"+image);
  var currclickedid = image;
  if (
    currclickedid.substring(1, 3) == lastclickedid.substring(1, 3) ||
    lastclickedid == ""
  ) {
    changeimage(image);
  } else {
    closeallothers(image);
    lastclickedid = "";
    changeimage(image);
  }
}

function changeimage(imageid) {
  var remain_id = imageid.substring(1);

  var pgpid = "";

  var hiddendiv =
    "o" + imageid.substring(1, 5) + "div" + "a1" + imageid.substring(8, 10);

  pgpid = getPgpIdByImgId(imageid);

  if (imageid.substring(0, 1) == "p") {
    lastclickedid = imageid;
    var minusid = "m" + remain_id;
    //alert("html objet of image id====>"+document.getElementById(imageid));
    //alert("minus id====>"+minusid);
    //alert("imageid=====>"+imageid);
    //alert("hiddendiv=======>"+hiddendiv);
    document.getElementById(imageid).src =
      "../images/pms_images/W26_dropdownarrow_selected.png";
    document.getElementById(imageid).id = minusid;
    if (oldcoloredid != "") {
      document.getElementById(oldcoloredid).className = oldcoloredclass;
    }
    oldcoloredclass = document.getElementById(pgpid).className;
    oldcoloredid = pgpid;
    document.getElementById(pgpid).className = "SecNavSelectedTxt PL2";
    document.getElementById(hiddendiv).style.display = "block";
    //document.getElementById('treeimage').style.display="block";
  } else if (imageid.substring(0, 1) == "m") {
    lastclickedid = imageid;
    var plusid = "p" + remain_id;
    document.getElementById(imageid).src =
      "../images/pms_images/W26_rightarrow_normal.png";
    document.getElementById(imageid).id = plusid;
    document.getElementById(hiddendiv).style.display = "none";
    //document.getElementById('treeimage').style.display="none";
  } else if (imageid.substring(0, 1) == "a") {
    lastclickedid = imageid;
    if (oldcoloredid != "") {
      document.getElementById(oldcoloredid).className = oldcoloredclass;
    }
    //alert("pgpid"+pgpid);
    //alert("pgpid class"+pgpid);

    oldcoloredid = pgpid;
    document.getElementById(pgpid).className = "SecNavSelectedTxt PL1";
    oldcoloredclass = document.getElementById(pgpid).className;

    sendrequest(imageid);
  }
  ////alert("image id====>"+imageid);
}

function closeallothers(image) {
  var lastindex = parseInt(lastclickedid.charAt(4));
  while (lastindex > 0) {
    var lastindex1 = lastindex;
    while (lastindex1 > 0) {
      var minid1 =
        "m" +
        lastclickedid.substring(1, 4) +
        lastindex +
        "imga" +
        lastindex +
        "a" +
        lastindex1;
      if (document.getElementById(minid1)) {
        changeimage(minid1);
      }
      lastindex1 = lastindex1 - 1;
    }
    lastindex = lastindex - 1;
  }
}

function dispprevstate() {
  //alert("image form request"+imageidfrmreq);
  if (imageidfrmreq != null && imageidfrmreq != "null") {
    //alert("imageidfrmreq===>"+imageidfrmreq);
    var indeximage = parseInt(imageidfrmreq.charAt(4));
    var relationimage = parseInt(imageidfrmreq.charAt(11));
    // alert("indeximage====>"+indeximage);
    //alert("relationimage====>"+relationimage);
    var s = 1;
    while (s < indeximage) {
      var idshow = "";
      //alert("substring"+imageidfrmreq.substring(11,12));
      if (
        parseInt(imageidfrmreq.substring(11, 12)) == s ||
        (s > 1 && relationimage == 3)
      ) {
        if (parseInt(imageidfrmreq.substring(11, 12)) == s)
          idshow =
            "p" + imageidfrmreq.substring(1, 4) + s + "img" + "a" + s + "a1";
        else if (s > 1 && relationimage == 3)
          idshow =
            "p" +
            imageidfrmreq.substring(1, 4) +
            s +
            "img" +
            "a" +
            relationimage +
            "a1";

        lastclickedid = idshow;
        //alert("idshow when equals=s===>>>"+idshow);
      } else {
        idshow = "p" + imageidfrmreq.substring(1, 4) + s + "img" + "a1a" + s;
        //alert("idshow when not equals to s===>>>"+idshow);
      }
      changeimage1(idshow);
      s++;
      //alert("s after s++====>"+s);
    }
    if (oldcoloredid != null && oldcoloredid != "" && oldcoloredid != "null") {
      document.getElementById(oldcoloredid).className = oldcoloredclass;
      oldcoloredid = imageidfrmreq;
      oldcoloredclass = document.getElementById(imageidfrmreq).className;
      document.getElementById(imageidfrmreq).className =
        "SecNavSelectedTxt PL1";
      document.getElementById(imageidfrmreq).style.textDecoration = "underline";
    }
  }
}

var sessionIdValue = "";
function getCurrSessionId(sessionidval) {
  //alert("jsp session id----*/"+sessionidval);
  sessionIdValue = sessionidval;
  return sessionIdValue;
}
function sendrequest(imageid) {
  //var sessionidvalue="";
  //var sessionidvalue = getSessionIdValue();
  //alert("sessionid_value1111================>"+sessionIdValue);
  //alert("sessionid_value2222================>"+sessionid_value);

  /////alert(imageid);
  var path =
    "ggs.erm.servlet.setup5.ConfControllerS?hrefid=" + imageid + "&_redurl=";
  switch (imageid) {
    case "aa1a2hrea1a1":
      path = path + "ggs.erm.servlet.setup3.ViewServer";
      break;
    case "aa1a2pgpa1a1":
      path = path + "ggs.erm.servlet.setup3.ViewMessage";
      break;
    case "aa1a2pgpa1a2":
      path = path + "ggs.erm.servlet.setup3.ViewNewMessage";
      break;
    case "aa1a2hrea3a1":
      path = path + "ggs.erm.servlet.setup8.EmployeeSetupS?mode=view";
      break;
    case "aa1a2hrea4a1":
      path = path + "ggs.erm.servlet.setup9.CompanyLogoS";
      break;
    case "aa1a2hrea5a1":
      path = path + "ggs.erm.servlet.setup9.CompanyS?mode=view";
      break;
    case "aa4a2pgpa1a9":
      path = path + "ggs.erm.servlet.setup11.ViewMailContentS";
      break;
    case "aa1a2hrea7a1":
      path = path + "ggs.erm.servlet.setup1.ConfigS?mode=emptab_view";
      break;
    case "aa1a2hrea8a1":
      path = path + "ggs.erm.servlet.setup1.ConfigS?mode=emprights_view";
      break;
    case "aa1a2hrea9a1":
      path = path + "ggs.erm.servlet.setup1.ConfigS?mode=empedit_view";
      break;
    case "aa1a2hrea10a1":
      path = path + "ggs.erm.servlet.agent.AgentControlS?mode=agent_view";
      break;
    case "aa4a2pgpa1a8":
      path = path + "ggs.erm.servlet.setup3.ViewCompanyAlert";
      break;
    case "ab3a2pgpa1a1":
      path =
        path + "ggs.erm.servlet.setup6.ViewNavigation?modulename=Setup_Account";
      break;
    case "aa2a2pgpa1a1":
      path =
        path + "ggs.erm.servlet.setup6.ViewNavigation?modulename=Setup_Company";
      break;
    case "aa2a2pgpa1a2":
      path =
        path +
        "ggs.erm.servlet.setup6.ViewNavigation?modulename=Setup_BusinessUnit";
      break;
    //case'aa2a3hrea2a2':path=path+"ggs.erm.servlet.setup6.ViewNavigation?modulename=Setup_LocationHierarchy";break;
    case "aa2a2pgpa1a3":
      path =
        path +
        "ggs.erm.servlet.setup6.ViewNavigation?modulename=Setup_Location";
      break;
    case "aa2a2pgpa1a4":
      path =
        path +
        "ggs.erm.servlet.setup6.ViewNavigation?modulename=Setup_wrk_location";
      break;
    case "aa7a2pgpa1a3":
      path =
        path + "ggs.erm.servlet.setup6.ViewNavigation?modulename=setup_holiday";
      break;
    case "aa7a2pgpa1a4":
      path = path + "ggs.erm.servlet.setup4.ViewDiverseHoliday?mode=";
      break;
    //case'aa2a3hrea9a2':path=path+"ggs.erm.servlet.setup6.ViewNavigation?modulename=Setup_Business";break;
    case "aa2a2pgpa1a5":
      path =
        path +
        "ggs.erm.servlet.setup6.ViewNavigation?modulename=Setup_Function";
      break;
    case "aa2a2pgpa1a6":
      path =
        path + "ggs.erm.servlet.setup6.ViewNavigation?modulename=setup_role";
      break;
    case "aa2a2pgpa1a7":
      path =
        path + "ggs.erm.servlet.setup6.ViewNavigation?modulename=Setup_Grade";
      break;
    case "aa9a2pgpa1a3":
      path =
        path +
        "ggs.erm.servlet.setup6.ViewNavigation?modulename=Setup_GradeLevel";
      break;
    case "aa5a1pgpa1a1":
      path =
        path +
        "ggs.erm.servlet.setup6.ViewNavigation?modulename=hraccess_right";
      break;
    case "aa2a3hreb4a2":
      path = path + "ggs.erm.servlet.setup3.ViewRole";
      break;
    case "aa2a3hreb5a2":
      path = path + "ggs.erm.servlet.setup4.ViewRoleVariantS";
      break;
    case "aa2a3hreb6a2":
      path = path + "ggs.erm.servlet.setup4.ViewAccessRightS?mode=";
      break;
    case "aa2a3hreb7a2":
      path = path + "ggs.erm.servlet.setup2.UserRole";
      break;
    case "ab6a2pgpa1a2":
      path = path + "ggs.erm.servlet.ViewRatingTypeS?mode=";
      break;
    case "aa2a3hreb9a2":
      path = path + "ggs.erm.servlet.setup1.SkillTypeS?mode=";
      break;
    case "aa2a3hrec1a2":
      path = path + "ggs.erm.servlet.setup1.ViewOrgzSkillS?mode=";
      break;
    case "aa2a3hrec2a2":
      path = path + "ggs.erm.servlet.setup1.ViewRoleReqr?mode=";
      break;
    case "aa2a2pgpa1a8":
      path =
        path +
        "ggs.erm.servlet.setup6.ViewNavigation?modulename=setup_emp_type";
      break;
    case "aa3a2pgpa1a1":
      path = path + "ggs.erm.servlet.setup5.View_EIDSetup";
      break;
    case "aa9a2pgpa1a2":
      path = path + "ggs.erm.servlet.setup2.ViewCompensation";
      break;
    case "aa6a2pgpa1b4":
      path =
        path + "ggs.erm.servlet.setup3.ViewConsultant1?mode=gotoConsultantView";
      break;
    case "ab6a2pgpa1a1":
      path = path + "ggs.erm.servlet.setup4.ViewSingleFieldMasterS";
      break;
    case "ab6a2pgpa1a3":
      path = path + "ggs.erm.servlet.setup4.ViewTraining_ListMasterS";
      break;
    case "aa2a3hrec9a2":
      path = path + "ggs.erm.servlet.setup6.ViewApprovalSetup";
      break;
    case "aa2a2pgpa1a9":
      path = path + "ggs.erm.servlet.setup6.ViewProcessMasterS";
      break;
    case "aa2a3hred2a2":
      path = path + "ggs.erm.servlet.setup4.ConfigurationS?mode=edit";
      break;
    case "ab3a2pgpa1a4":
      path = path + "ggs.erm.servlet.setup3.ChangePasswordS?mode=create";
      break;
    case "aa4a2pgpa1b1":
      path =
        path + "ggs.erm.servlet.setup6.ViewNavigation?modulename=useful_links";
      break;
    case "ab6a2pgpa1a4":
      path = path + "ggs.erm.servlet.setup3.WebServiceRegistrationS?mode=view";
      break;
    case "aa9a2pgpa1a1":
      path = path + "ggs.erm.servlet.setup1.PayrollEntityS?mode=view";
      break;
    //case'aa2a3hree1a2':path=path+"ggs.erm.servlet.setup6.ViewNavigation?modulename=setup_rolegroup";break;
    case "aa4a2pgpa1a4":
      path =
        path +
        "ggs.erm.servlet.setup6.ViewNavigation?modulename=setup_education";
      break;
    //case'aa2a3href2a2':path=path+"ggs.erm.servlet.recordUpload.RolesUploadS?mode=rolesUpload";break;
    case "aa4a2pgpa1a5":
      path =
        path +
        "ggs.erm.servlet.setup6.ViewNavigation?modulename=setup_industry_verticals";
      break;
    //case'aa2a3hreg3a2':path=path+"ggs.erm.servlet.setup6.ViewNavigation?modulename=setup_project_value";break;
    case "aa2a2pgpa1b2":
      path =
        path +
        "ggs.erm.servlet.setup6.MyViewNavigation?modulename=setup_ts_account";
      break;
    case "aa2a2pgpa1b1":
      path =
        path + "ggs.erm.servlet.setup6.ViewNavigation?modulename=setup_project";
      break;
    //case'aa3a2hrea1a1':path=path+"ggs.erm.servlet.setup2.ApplicationBlank";break;
    case "aa6a2pgpa1a2":
      path = path + "ggs.erm.servlet.setup3.ViewReason";
      break;
    case "aa6a2pgpa1a3":
      path = path + "ggs.erm.servlet.setup3.ViewSelStage";
      break;
    case "ab1a2pgpa1b4":
      path =
        path +
        "ggs.erm.servlet.setup6.MyViewNavigation?modulename=setup_accounts";
      break;
    case "ab1a2pgpa1b5":
      path =
        path +
        "ggs.erm.servlet.setup6.MyViewNavigation?modulename=travel_request_approval_workflow";
      break;
    case "ab1a2pgpa1b6":
      path =
        path +
        "ggs.erm.servlet.setup6.MyViewNavigation?modulename=travel_request_advance_workflow";
      break;
    case "ab1a2pgpa1b7":
      path =
        path +
        "ggs.erm.servlet.setup6.MyViewNavigation?modulename=travel_request_booking_workflow";
      break;
    case "ab1a2pgpa1b8":
      path =
        path +
        "ggs.erm.servlet.setup6.MyViewNavigation?modulename=expense_approval_workflow";
      break;
    case "ab1a2pgpa1b9":
      path =
        path +
        "ggs.erm.servlet.setup6.MyViewNavigation?modulename=expense_account_approval_workflow";
      break;
    case "ab1a2pgpa1c1":
      path =
        path +
        "ggs.erm.servlet.setup6.MyViewNavigation?modulename=expense_payer_workflow";
      break;
    case "aa6a2pgpa1a4":
      path = path + "ggs.erm.servlet.setup3.ViewResumeData";
      break;
    case "aa6a2pgpa1a5":
      path = path + "ggs.erm.servlet.setup3.ViewAppStatus";
      break;
    case "aa6a2pgpa1a6":
      path = path + "ggs.erm.servlet.setup3.ViewAppReason";
      break;
    case "aa6a2pgpa1a7":
      path = path + "ggs.erm.servlet.setup1.ConfigS?mode=education_view";
      break;
    case "aa6a2pgpa1a8":
      path = path + "ggs.erm.servlet.setup1.ConfigS?mode=experience_view";
      break;
    case "aa6a2pgpa1a9":
      path = path + "ggs.erm.servlet.setup1.AllowAppS?mode=allow_application";
      break;
    case "aa6a2pgpa1b1":
      path =
        path +
        "ggs.erm.servlet.setup6.ViewNavigation?modulename=setup_education";
      break;
    case "aa6a2pgpa1a1":
      path = path + "ggs.erm.servlet.setup1.AllowAppS?mode=rfr_setup";
      break;
    case "aa6a2pgpa1b2":
      path =
        path + "ggs.erm.servlet.setup6.ViewNavigation?modulename=setup_recfunc";
      break;
    case "aa6a2pgpa1b3":
      path =
        path +
        "ggs.erm.servlet.setup6.ViewNavigation?modulename=setup_roletype";
      break;
    case "aa4a2pgpa1a3":
      path = path + "ggs.erm.servlet.setup5.ViewCustomField";
      break;
    case "ab4a2pgpa1a1":
      path = path + "ggs.erm.servlet.training.TrainingYearS?mode=view";
      break;
    case "ab4a2pgpa1a2":
      path = path + "ggs.erm.servlet.setup8.ViewFeedbackTemplate";
      break;
    case "ab4a2pgpa1a3":
      path = path + "ggs.erm.servlet.setup8.ViewTrainingOrganisation?mode=";
      break;
    case "ab4a2pgpa1a4":
      path = path + "ggs.erm.servlet.setup8.ViewExternalFaculty?mode=";
      break;
    case "ab4a2pgpa1a5":
      path = path + "ggs.erm.servlet.setup1.ConfigS?mode=workflow_view";
      break;
    case "aa7a2pgpa1a1":
      path = path + "ggs.erm.servlet.setup6.LeaveYearS?mode=view";
      break;
    case "aa7a2pgpa1a2":
      path = path + "ggs.erm.servlet.LeaveSetupS";
      break;
    //case'aa6a2hrea3a1':path=path+"ggs.erm.servlet.setup6.ViewEncashRule";break;
    case "aa7a2pgpa1b4":
      path = path + "ggs.erm.servlet.setup6.ViewAttendanceUploadS";
      break;
    case "aa7a2pgpa1a7":
      path =
        path + "ggs.erm.servlet.attendance.AttendanceSetupRulesS?mode=view";
      break;
    case "aa6a2hrea7a1":
      path = path + "ggs.erm.servlet.setup6.ViewAttendanceRuleS";
      break;
    case "aa7a2pgpa1b2":
      path = path + "ggs.erm.servlet.setup6.Report_SetupS";
      break;
    case "aa7a2pgpa1a8":
      path = path + "ggs.erm.servlet.setup1.ConfigS?mode=attendance_view";
      break;
    //case'aa6a2hreb1a1':path=path+"ggs.erm.servlet.setup1.ConfigS?mode=attendance_master_view";break;
    case "aa7a2pgpa1a9":
      path = path + "ggs.erm.servlet.setup6.LateComingPenaltyS?mode=viewNedit";
      break;
    case "aa7a2pgpa1b3":
      path = path + "ggs.erm.servlet.setup6.PAThroughSMSRulesS?mode=create";
      break;
    case "aa7a2pgpa1a5":
      path = path + "ggs.erm.servlet.setup6.ViewApprovalSetup";
      break;
    case "aa7a2pgpa1a6":
      path = path + "ggs.erm.servlet.setup6.ViewApprovalSetupODPA";
      break;
    case "aa7a2pgpa1a10":
      path =
        path + "ggs.erm.servlet.attendance.AttendanceSetupRulesS?mode=view";
      break;
    case "aa7a2pgpa1a11":
      path = path + "ggs.erm.servlet.LeaveSetupS";
      break;

    //case'aa7a2hrea1a1':path=path+"ggs.erm.servlet.setup5.ViewTravelMode";break;
    //case'aa7a2hrea2a1':path=path+"ggs.erm.servlet.setup5.ViewAccomodation";break;
    case "ab1a2pgpa1a1":
      path = path + "ggs.erm.servlet.setup6.ViewTravelLimit";
      break;
    case "ab1a2pgpa1a2":
      path = path + "ggs.erm.servlet.setup5.ViewPurpose";
      break;
    case "aa7a2hrea5a1":
      path = path + "ggs.erm.servlet.setup5.ViewTravelexpense";
      break;
    case "ab1a2pgpa1a5":
      path = path + "ggs.erm.servlet.setup10.ViewExpenseType";
      break;
    case "ab1a2pgpa1a6":
      path = path + "ggs.erm.servlet.setup6.ViewEligibilityS";
      break;
    case "ab1a2pgpa1a7":
      path = path + "ggs.erm.servlet.setup1.ConfigS?mode=city_category_view";
      break;
    case "ab1a2pgpa1a8":
      path = path + "ggs.erm.servlet.setup1.ConfigS?mode=expense_head_view";
      break;
    case "ab1a2pgpa1b3":
      path = path + "ggs.erm.servlet.setup1.ConfigS?mode=expense_setup";
      break;
    //case'aa7a2hrea11a1':path=path+"ggs.erm.servlet.setup5.ShipnetDetailsS?mode=setup_shipnet";break;
    case "ab1a2pgpa1a4":
      path = path + "ggs.erm.servlet.setup1.ConfigS?mode=general_rules";
      break;
    case "ab1a2pgpa1a9":
      path = path + "ggs.erm.servlet.setup1.ConfigS?mode=head_view";
      break;
    case "ab1a2pgpa1b1":
      path =
        path + "ggs.erm.servlet.setup6.ViewNavigation?modulename=currency_view";
      break;
    case "ab1a2pgpa1b2":
      path =
        path +
        "ggs.erm.servlet.setup6.ViewNavigation?modulename=currency_conversion_view";
      break;
    // case'aa8a2hrea1a1':path=path+"ggs.erm.servlet.setup5.ViewSRule";break;
    // case'aa8a2hrea2a1':path=path+"ggs.erm.servlet.setup5.ViewSReason";break;
    //case'aa8a2hrea3a1':path=path+"ggs.erm.servlet.setup1.ViewSeparation";break;
    //case'aa9a2hrea1a1':path=path+"ggs.erm.servlet.prm.ReviewPeriodS?mode=view";break;
    //case'aa9a2hrea2a1':path=path+"ggs.erm.servlet.prm.ProcessTimelineS";break;
    //case'aa9a2hrea3a1':path=path+"ggs.erm.servlet.setup7.ViewKpi";break;
    //case'aa9a2hrea4a1':path=path+"ggs.erm.servlet.setup7.ViewRoleKpi";break;
    //case'aa9a2hrea5a1':path=path+"ggs.erm.servlet.setup1.ConfigS?mode=kpi_view";break;
    case "aa1a2pgpa1a3":
      path = path + "ggs.erm.servlet.setup6.ViewEscalationS";
      break;
    case "ab1a2hrea2a1":
      path = path + "ggs.erm.servlet.setup6.Application_initmation";
      break;
    case "ab1a2hrea3a1":
      path = path + "ggs.erm.servlet.setup6.Application_initmation?mode=Att";
      break;
    case "aa7a2pgpa1b1":
      path = path + "ggs.erm.servlet.setup6.EscalationS?mode=absenceLCDSetup";
      break;
    case "aa9a2pgpa1a5":
      path = path + "ggs.erm.servlet.setup5.ViewReimbursementExpense";
      break;
    case "ab3a2pgpa1a3":
      path = path + "ggs.erm.servlet.setup9.CompanyS?mode=account_settings";
      break;
    case "ab3a2pgpa1a6":
      path =
        path +
        "ggs.erm.servlet.setup3.CustomerB?pentaho=customerbill_new&name=leave";
      break;
    case "ab3a2pgpa1a7":
      path =
        path +
        "ggs.erm.servlet.setup3.CustomerB?pentaho=customerbill_details&name=leave";
      break;
    case "ab3a2pgpa1a8":
      path =
        path +
        "ggs.erm.servlet.setup3.CustomerB?pentaho=customerstatsdash&name=leave";
      break;
    case "aa4a2pgpa1a1":
      path = path + "ggs.erm.servlet.setup8.EmployeeSetupS?mode=TabRights";
      break;
    case "ab4a2hrea2a1":
      path = path + "ggs.erm.servlet.setup8.EmployeeSetupS?mode=EIPFields";
      break;
    case "aa4a2pgpa1a2":
      path = path + "ggs.erm.servlet.setup8.EmployeeSetupS?mode=TabSequencing";
      break;
    case "ab1a2pgpa1a3":
      path =
        path + "ggs.erm.servlet.setup6.ViewNavigation?modulename=group_member";
      break;
    case "aa2a2pgpa1b3":
      path =
        path +
        "ggs.erm.servlet.setup6.ViewNavigation?modulename=costcenter_master";
      break;
    //KNOWLEDGE BASE ***********************************BY SANSKRITI[;D]
    case "aa4a2pgpa1a7":
      path =
        path + "ggs.erm.servlet.setup6.ViewNavigation?modulename=KnowledgeBase";
      break;
    case "ab5a2pgpa1a2":
      path =
        path + "ggs.erm.servlet.setup6.MyViewNavigation?modulename=sep_reason";
      break; //Reason to leave

    case "aa8a2pgpa1a1":
      path =
        path +
        "ggs.erm.servlet.setup6.MyViewNavigation?modulename=setup_ts_rule";
      break;
    case "aa8a2pgpa1a2":
      path =
        path +
        "ggs.erm.servlet.setup6.MyViewNavigation?modulename=setup_ts_workflow";
      break;
    case "aa8a2pgpa1a3":
      path =
        path +
        "ggs.erm.servlet.setup6.MyViewNavigation?modulename=setup_account_group";
      break;
    case "aa8a2pgpa1a4":
      path =
        path +
        "ggs.erm.servlet.setup6.MyViewNavigation?modulename=setup_account_subgroup";
      break;
    case "aa8a2pgpa1a5":
      path =
        path +
        "ggs.erm.servlet.setup6.MyViewNavigation?modulename=setup_activity";
      break;
    case "ab1a2pgpa1c2":
      path = path + "ggs.erm.servlet.setup1.PaymentModeS?mode=";
      break;
    case "ab1a2pgpa1c3":
      path = path + "ggs.erm.servlet.setup1.TravelSetupS?mode=";
      break;
    case "ab1a2pgpa1c4":
      path = path + "ggs.erm.servlet.setup1.OtherSetupS?mode=";
      break;
    case "aa4a2pgpa1b2":
      path =
        path +
        "eipletter.LetterGeneratorS?mode=opendhtmlwindow&tabid=0&showsettings=Y";
      break;

    // from here for pms

    case "ab2a2pgpa1a1":
      path =
        path +
        "ggs.erm.servlet.prm.PerformanceSetupS?mode=pms_common_config&escape_id=" +
        sessionIdValue;
      break;
    case "ab2a3pgpa0a2":
      path =
        path +
        "ggs.erm.servlet.setup6.MyViewNavigation?modulename=setup_goal_perspective&linktxt=N";
      break;
    case "ab2a3pgpa1a2":
      path =
        path +
        "ggs.erm.servlet.setup6.MyViewNavigation?modulename=setup_role_goal_map&removerolegoalmapsearch=Y";
      break;
    case "ab2a3pgpa0a3":
      path =
        path +
        "ggs.erm.servlet.setup6.MyViewNavigation?modulename=setup_capability_group&flag=N";
      break;
    case "ab2a3pgpa1a3":
      path =
        path +
        "ggs.erm.servlet.setup6.MyViewNavigation?modulename=setup_role_capability_map&removerolecapmapsearch=Y";
      break;
    case "ab2a2pgpa1a2":
      path =
        path +
        "ggs.erm.servlet.setup6.MyViewNavigation?modulename=setup_performance_plan";
      break;
    // till here for pms

    case "aa9a2pgpa1a4":
      path =
        path +
        "ggs.erm.servlet.setup6.ViewNavigation?modulename=setup_component";
      break;

    case "aa7a2pgpa1b5":
      path =
        path +
        "ggs.erm.servlet.setup6.MyViewNavigation?modulename=absence_type";
      break;
    case "aa3a2pgpa1a2":
      path =
        path +
        "ggs.erm.servlet.setup1.EmployeeConfirmationProcessS?mode=create";
      break;
    case "aa4a2pgpa1a6":
      path = path + "ggs.erm.servlet.setup1.AssetCategoryS?mode=view";
      break;
    //from here separation
    case "ab5a2pgpa1a1":
      path =
        path + "ggs.erm.servlet.setup5.SeparationSetupS?mode=sep_notifications";
      break;
    case "ab6a2hrea1a2":
      path =
        path + "ggs.erm.servlet.setup5.SeparationSetupS?mode=sep_clearance";
      break;
    case "ab5a2pgpa1a3":
      path =
        path +
        "ggs.erm.servlet.setup5.SeparationSetupS?mode=separation_clearance";
      break;
    case "ab5a2pgpa1a4":
      path =
        path + "ggs.erm.servlet.setup5.SeparationSetupS?mode=exit_interview";
      break;
    case "ab5a2pgpa1a5":
      path =
        path +
        "ggs.erm.servlet.setup5.SeparationSetupS?mode=sep_notificationsOld";
      break; //it's seems to exist somewhere else too
    case "ac9a2pgpa1a1":
      path =
        path + "ggs.erm.payrollJava.PayRollController?mode=gotoPayrollSetup";
      break;
    case "ac9a2pgpa1a2":
      path = path + "ggs.erm.payrollJava.MyTeamController?mode=saturatory_form";
      break;
    default:
      alert("default");
  }

  //alert(document.getElementById(imageid));
  //	alert(path);

  document.getElementById(imageid).href = path;
  //alert("object of image id in sendrequest() method====>"+document.getElementById(imageid));
}
var IE = false;
try {
  if (window.clientInformation.appName == "Microsoft Internet Explorer") {
    IE = true;
  }
} catch (err) {}
function removeError(obj) {
  if (
    document.organization_role.flag != null &&
    document.organization_role.flag.value == 1
  ) {
    document.getElementById("Error_Msg").style.display = "block";
  } else {
    document.getElementById("Error_Msg").style.display = "none";
    obj.style.border = "1px #93A8A9 solid";
  }
}
/*function checkit()  
{
if(document.organization_role.role_name.value==0)
{document.getElementById('Error_Msg').style.display="block";eval("document.organization_role.role_name").style.border="1px red solid ";document.getElementById('Error_Msg').innerHTML="<h4>"+msg[1033]+"</h4>";eval("document.organization_role.role_name").focus();return false;}
else if(document.organization_role.function_id.length==0)
{document.getElementById('Error_Msg').style.display="block";eval("document.organization_role.funct").style.border="1px red solid ";document.getElementById('Error_Msg').innerHTML="<h4>"+msg[1000]+"</h4>";eval("document.organization_role.funct").focus();return false;}
else if(document.organization_role.grade.selectedIndex==0)
{document.getElementById('Error_Msg').style.display="block";eval("document.organization_role.grade").style.border="1px red solid ";document.getElementById('Error_Msg').innerHTML="<h4>"+msg[1103]+"</h4>";eval("document.organization_role.grade").focus();return false;}
else if(document.organization_role.level.selectedIndex==0)
{document.getElementById('Error_Msg').style.display="block";eval("document.organization_role.level").style.border="1px red solid ";document.getElementById('Error_Msg').innerHTML="<h4>"+msg[1106]+"</h4>";eval("document.organization_role.level").focus();return false;}
else if(document.organization_role.confirmation_flag.options[document.organization_role.confirmation_flag.selectedIndex].value=="Y")
{var flag=true;if(document.organization_role.confirm_period.value.length==0)
{document.getElementById('Error_Msg').style.display="block";eval("document.organization_role.confirm_period").style.border="1px red solid ";document.getElementById('Error_Msg').innerHTML="<h4>"+msg[1493]+"</h4>";eval("document.organization_role.confirm_period").focus();return false;}
else{var i;var s=document.organization_role.confirm_period.value;for(i=0;i<s.length;i++)
{var c=s.charAt(i);if((c<"0")||(c>"9"))
{flag=false;document.getElementById('Error_Msg').style.display="block";eval("document.organization_role.confirm_period").style.border="1px red solid ";document.getElementById('Error_Msg').innerHTML="<h4>"+msg[1494]+"</h4>";eval("document.organization_role.confirm_period").focus();return false;}}}
if(flag)return true;}else if(document.organization_role.role_group.value==0){document.getElementById('Error_Msg').style.display="block";eval("document.organization_role.role_group").style.border="1px red solid ";document.getElementById('Error_Msg').innerHTML="<h4>"+msg[3516]+"</h4>";window.scrollBy(0,150);return false;}
else if(document.organization_role.std_hire_time.value!=0&&isNaN(document.organization_role.std_hire_time.value))
{document.getElementById('Error_Msg').style.display="block";eval("document.organization_role.std_hire_time").style.border="1px red solid ";document.getElementById('Error_Msg').innerHTML="<h4>"+msg[3517]+"</h4>";return false;}
else return true;}*/
// For Browser Version Below
if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
  //test for MSIE x.x;
  var ieversion = new Number(RegExp.$1); // capture x.x portion and store as a number
  if (ieversion >= 8) ieversion = 8;
  else if (ieversion >= 7) ieversion = 7;
  else if (ieversion >= 6) ieversion = 6;
  else if (ieversion >= 5) ieversion = 5;
} else ieversion = 0;
// For Browser Version  Above
function changegrade() {
  selectall();
  document.organization_role.mode.value = "changegrade";
  document.organization_role.submit();
}
function changebu() {
  document.organization_role.mode.value = "changebu";
  document.organization_role.submit();
}
function deselectrole() {
  var a = document.organization_role.dreporting_role.selectedIndex;
  var repi = 0;
  var no = new Option();
  no.value = 0;
  no.text = "";
  repi++;
  for (
    var i = 1;
    i < document.organization_role.dreporting_role.options.length;
    i++
  ) {
    if (i != a) {
      var no = new Option();
      no.value = document.organization_role.dreporting_role.options[i].value;
      no.text = document.organization_role.dreporting_role.options[i].text;
      repi++;
    }
  }
}
function cancelit() {
  document.organization_role.action =
    "ggs.erm.servlet.setup1.ViewOrganizationRoles?mode=";
  document.organization_role.submit();
}
function textCounter(field, maxlimit) {
  if (field.value.length > maxlimit)
    field.value = field.value.substring(0, maxlimit);
}
function setRolename(obj) {
  if (document.organization_role.arole_name.value == 0) {
    document.organization_role.arole_name.value = obj.value;
  }
}
function move(fbox, tbox) {
  var arrFbox = new Array();
  var arrTbox = new Array();
  var arrLookup = new Array();
  var i;
  for (i = 0; i < tbox.options.length; i++) {
    arrLookup[tbox.options[i].text] = tbox.options[i].value;
    arrTbox[i] = tbox.options[i].text;
  }
  var fLength = 0;
  var tLength = arrTbox.length;
  for (i = 0; i < fbox.options.length; i++) {
    arrLookup[fbox.options[i].text] = fbox.options[i].value;
    if (fbox.options[i].selected && fbox.options[i].value != "") {
      arrTbox[tLength] = fbox.options[i].text;
      tLength++;
    } else {
      arrFbox[fLength] = fbox.options[i].text;
      fLength++;
    }
  }
  arrFbox.sort();
  arrTbox.sort();
  fbox.length = 0;
  tbox.length = 0;
  var c;
  for (c = 0; c < arrFbox.length; c++) {
    var no = new Option();
    no.value = arrLookup[arrFbox[c]];
    no.text = arrFbox[c];
    fbox[c] = no;
  }
  for (c = 0; c < arrTbox.length; c++) {
    var no = new Option();
    no.value = arrLookup[arrTbox[c]];
    no.text = arrTbox[c];
    tbox[c] = no;
  }
}
var qstring = "ggs.erm.servlet.AttachS?module=organizationrole";
function _clickattach() {
  winnew = window.open(
    qstring,
    "newwin",
    "width=610,height=435,scrollbars=yes,left=30,top=30"
  );
  winnew.focus();
}
function selectall() {
  if (eval("document.organization_role.function_id")) {
    for (i = 0; i < document.organization_role.function_id.length; i++) {
      document.organization_role.function_id.options[i].selected = true;
    }
  }
}
function addfield() {
  var temp =
    document.organization_role.confirmation_flag.options[
      document.organization_role.confirmation_flag.selectedIndex
    ].value;
  if (temp == "Y") {
    var tb, otr, otd;
    if (IE) {
      tb = document.all.addconfirmperiod;
      otr = tb.insertRow();
      otd = otr.insertCell();
      otd.style.background = "#eeeeee";
      otd.innerHTML = "Confirmation Period(months)";
      otd = otr.insertCell();
      otd.colSpan = 4;
      otd.style.background = "#F5F5F5";
      otd.innerHTML =
        "<input type='text' name='confirm_period'  onkeyup='removeError(this);'>";
    } else {
      tb = document.getElementById("addconfirmperiod");
      otr = tb.insertRow(tb.rows.length);
      otd = otr.insertCell(0);
      otd.style.background = "#eeeeee";
      otd.innerHTML = "Confirmation Period(months)";
      otd = otr.insertCell(1);
      otd.colSpan = 4;
      otd.style.background = "#F5F5F5";
      otd.innerHTML =
        "<input type='text' name='confirm_period'  onkeyup='removeError(this);'>";
    }
  } else {
    cleanup(document.all.addconfirmperiod);
  }
}
function cleanup(t) {
  if (eval(t)) {
    while (t.rows.length > 0) {
      t.deleteRow(t.rows.length - 1);
    }
  }
}
function active(a) {
  document.organization_role.mode.value = "mark";
  if (a == 0) {
    document.organization_role.active_flag.value = "N";
  } else {
    document.organization_role.active_flag.value = "Y";
  }
  if (eval("document.organization_role.reporting_role")) {
    for (
      var j = 0;
      j < document.organization_role.reporting_role.options.length;
      j++
    ) {
      document.organization_role.reporting_role.options[j].selected = true;
    }
  }
  selectall();
  document.organization_role.submit();
}
function changegrade_edit() {
  document.organization_role.mode.value = "changegrade";
  if (eval("document.organization_role.reporting_role")) {
    for (
      var j = 0;
      j < document.organization_role.reporting_role.options.length;
      j++
    ) {
      document.organization_role.reporting_role.options[j].selected = true;
    }
  }
  selectall();
  document.organization_role.submit();
}
function deselectrole_edit() {
  var a = document.organization_role.dreporting_role.selectedIndex;
  var repi = 0;
  var no = new Option();
  no.value = 0;
  no.text = "";
  repi++;
  if (eval("document.organization_role.reporting_role"))
    for (
      var i = 1;
      i < document.organization_role.dreporting_role.options.length;
      i++
    ) {
      var found = "false";
      if (i != a) {
        for (
          var j = 0;
          j < document.organization_role.reporting_role.options.length;
          j++
        ) {
          if (
            document.organization_role.dreporting_role.options[i].value ==
            document.organization_role.reporting_role.options[j].value
          ) {
            found = "true";
          }
        }
        if (found == "false") {
          var no = new Option();
          no.value =
            document.organization_role.dreporting_role.options[i].value;
          no.text = document.organization_role.dreporting_role.options[i].text;
          repi++;
        }
      }
    }
}
/*function checkit_edit()
{if(document.organization_role.role_name.value==0)
{document.getElementById('Error_Msg').style.display="block";eval("document.organization_role.role_name").style.border="1px red solid ";document.getElementById('Error_Msg').innerHTML="<h4>"+msg[1033]+"</h4>";eval("document.organization_role.role_name").focus();return false;}
else if(document.organization_role.function_id.length==0)
{document.getElementById('Error_Msg').style.display="block";eval("document.organization_role.funct").style.border="1px red solid ";document.getElementById('Error_Msg').innerHTML="<h4>"+msg[1000]+"</h4>";eval("document.organization_role.funct").focus();return false;}
else if(document.organization_role.grade.selectedIndex==0)
{document.getElementById('Error_Msg').style.display="block";eval("document.organization_role.grade").style.border="1px red solid ";document.getElementById('Error_Msg').innerHTML="<h4>"+msg[1103]+"</h4>";eval("document.organization_role.grade").focus();return false;}
else if(document.organization_role.level.selectedIndex==0)
{document.getElementById('Error_Msg').style.display="block";eval("document.organization_role.level").style.border="1px red solid ";document.getElementById('Error_Msg').innerHTML="<h4>"+msg[1106]+"</h4>";eval("document.organization_role.level").focus();return false;}
else if(document.organization_role.role_group.value==0)
{document.getElementById('Error_Msg').style.display="block";eval("document.organization_role.role_group").style.border="1px red solid ";document.getElementById('Error_Msg').innerHTML="<h4>"+msg[3516]+"</h4>";eval("document.organization_role.role_group").focus();return false;}
else if(document.organization_role.std_hire_time.value!=0 && isNaN(document.organization_role.std_hire_time.value))
{document.getElementById('Error_Msg').style.display="block";eval("document.organization_role.std_hire_time").style.border="1px red solid ";document.getElementById('Error_Msg').innerHTML="<h4>"+msg[3517]+"</h4>";eval("document.organization_role.std_hire_time").focus();return false;}
else{if(eval("document.organization_role.reporting_role"))
{for(var j=0;j<document.organization_role.reporting_role.options.length;j++)
{document.organization_role.reporting_role.options[j].selected=true;}}
if(document.organization_role.confirmation_flag.options[document.organization_role.confirmation_flag.selectedIndex].value=="Y")
{if(document.organization_role.confirm_period.value.length==0)
{document.getElementById('Error_Msg').style.display="block";eval("document.organization_role.confirm_period").style.border="1px red solid ";document.getElementById('Error_Msg').innerHTML="<h4>"+msg[1493]+"</h4>";eval("document.organization_role.confirm_period").focus();return false;}
else{var flag=true;var i;var s=document.organization_role.confirm_period.value;for(i=0;i<s.length;i++)
{var c=s.charAt(i);if((c<"0")||(c>"9"))
{flag=false;document.getElementById('Error_Msg').style.display="block";eval("document.organization_role.confirm_period").style.border="1px red solid ";document.getElementById('Error_Msg').innerHTML="<h4>"+msg[1494]+"</h4>";eval("document.organization_role.confirm_period").focus();return false;}
}}if(flag)return true;else return false;
}return true;}}*/
function xmlPost(url, toSend, responseHandler) {
  xmlOpen("POST", url, toSend, responseHandler);
}
function xmlGet(url, responseHandler) {
  xmlOpen("GET", url, null, responseHandler);
}
function xmlOpen(method, url, toSend, responseHandler) {
  if (window.XMLHttpRequest) {
    req = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    req = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (req) {
    req.open(method, url, true);
    req.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = responseHandler;
    req.send(toSend);
  } else {
    alert("Your browser does not seem to support XMLHttpRequest.");
  }
}
function xmlOpen1(method, url, toSend, responseHandler) {
  if (window.XMLHttpRequest) {
    req1 = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    req1 = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (req1) {
    req1.open(method, url, true);
    req1.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    req1.onreadystatechange = responseHandler;
    req1.send(toSend);
  } else {
    alert("Your browser does not seem to support XMLHttpRequest.");
  }
}
function xmlOpen2(method, url, toSend, responseHandler) {
  if (window.XMLHttpRequest) {
    req2 = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    req2 = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (req2) {
    req2.open(method, url, true);
    req2.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    req2.onreadystatechange = responseHandler;
    req2.send(toSend);
  } else {
    alert("Your browser does not seem to support XMLHttpRequest.");
  }
}
function xmlOpen3(method, url, toSend, responseHandler) {
  if (window.XMLHttpRequest) {
    req3 = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    req3 = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (req3) {
    req3.open(method, url, true);
    req3.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    req3.onreadystatechange = responseHandler;
    req3.send(toSend);
  } else {
    alert("Your browser does not seem to support XMLHttpRequest.");
  }
}
function xmlOpen4(method, url, toSend, responseHandler) {
  if (window.XMLHttpRequest) {
    req4 = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    req4 = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (req4) {
    req4.open(method, url, true);
    req4.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    req4.onreadystatechange = responseHandler;
    req4.send(toSend);
  } else {
    alert("Your browser does not seem to support XMLHttpRequest.");
  }
}
//new request created for benefit component
function xmlOpenBen(method, url, toSend, responseHandler) {
  if (window.XMLHttpRequest) {
    reqBen = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    reqBen = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (reqBen) {
    reqBen.open(method, url, true);
    reqBen.setRequestHeader(
      "content-type",
      "application/x-www-form-urlencoded"
    );
    reqBen.onreadystatechange = responseHandler;
    reqBen.send(toSend);
  } else {
    alert("Your browser does not seem to support XMLHttpRequest.");
  }
}
//new request created for benefit component closed
var msg = new Array(2000);
msg[1] = "Your present role does not allow you to perform this Operation.";
msg[2] = "Your session has expired. Please login to EmployWise again.";
msg[3] = " to proceed.";
msg[4] = "Error processing the Request.";
msg[5] = "Enter ";
msg[6] =
  "Your present rights does not authorize you to view this record. Contact your ERM Admininstrator for details.";
msg[7] = "Your session has expired. Please login to EmployWise again.";
msg[501] = "Please Enter tour summary.";
msg[502] = "Please enter reason for changing the travelling period.";
msg[503] = "Please select mode.";
msg[504] = "Please select class.";
msg[505] = "Please Enter from-to.";
msg[506] = "Please select payment mode.";
msg[507] = "Please Enter Transaction Amount.";
msg[508] = "Transaction Amount can only be numeric.";
msg[509] = "Please select stay type.";
msg[510] = "Please select city category.";
msg[511] = "Please Enter city.";
msg[512] = "Please select Conveyance  mode.";
msg[513] = "Please enter distance.";
msg[514] = "Please select type.";
msg[515] = "Please select others type.";
msg[516] = "Please enter cost center.";
msg[517] = "distance can be only numeric.";
msg[518] =
  "Expense detail dates can not be out side the expense start date and expense end date.";
msg[519] = "Please Enter approved amount.";
msg[520] = "approved amount can only be numeric.";
msg[521] = "Please Enter paid amount.";
msg[522] = "paid amount can only be numeric.";
msg[523] = "Please Enter Purpose.";
msg[524] = "You have already made this entry once for this date.";
msg[525] =
  "Please check the amount. You are exceeding your limit for this day. However, you can still continue by pressing Continue button.";
msg[601] = "Select leave type to proceed";
msg[602] = "Enter start date to proceed";
msg[603] = "Enter end date to proceed";
msg[604] = "Enter reason to proceed";
msg[605] = "Start date cannot be more than end date";
msg[606] = "Leave start date cannot be less than date of joining";
msg[607] = "Enter date to proceed";
msg[608] = "Enter start time to proceed";
msg[609] = "Enter end time to proceed";
msg[610] = "Select diversity holiday to proceed";
msg[611] = "Start Date Time cannot be more than the End Date Time";
msg[612] =
  "Leave Balance for this Leave Type does not exist. You cannot apply for this leave type";
msg[613] = "The day applied for leave is holiday";
msg[614] = "Duplicate leave application";
msg[615] = "Enter email id to proceed";
msg[616] = "Leave end date cannot be greater than Separation date";
msg[800] = "Date can not be left blank";
msg[801] = "In Time can not be left blank";
msg[802] = "Out Time can not be left blank";
msg[803] = "Select Nature of Work/Reason for not marking Attendance";
msg[804] = "To date Should be Greater than or Equal to From Date";
msg[805] = "Date must be smaller than or equal to Current Date";
msg[806] = "Date must be greater than Current Date";
msg[807] = "In Time and Out Time can not be left blank";
msg[820] = "Work Date cannot be left blank";
msg[821] = "Work Date must be less than or equal to Current Date";
msg[822] = "Reason cannot be left blank";
msg[823] =
  "Compensatory Off can not be applied because your calculated no of days is 0";
msg[830] = "Request For On Duty Exist For Applied Date";
msg[831] = "Request For Past Attendance Exist For Applied Date";
msg[850] = "Compensatory Off Request of entered date already exists";
msg[851] = "There is no LeaveBalance for this User";
msg[852] = "Invalid WorkDate in relation with Credit CompOff Balances";
msg[870] = "Enter old password";
msg[871] = "Enter new password";
msg[872] = "Enter confirm password";
msg[873] = "Both passwords do not match";
msg[874] = "Please enter your Valid Customer Code and Username";
msg[875] = "Not Applicable for the Work Date";
msg[1000] = "Enter Function name to proceed.";
msg[1001] = "This Business Unit already Exist.";
msg[1002] = "Vertical Segment can not be left blank.";
msg[1003] = "This Vertical Segment already exist.";
msg[1004] = "Team can not be left blank.";
msg[1005] = "Team already exist with this name.";
msg[1006] = "Enter Reason to proceed.";
msg[1007] = "The reason for this status already exist.";
msg[1008] = "Select Location to proceed.";
msg[1009] = "Select floor price to proceed.";
msg[1010] = "Grade Id can not be left blank.";
msg[1011] = "from can not be left blank.";
msg[1012] = "to can not be left blank.";
msg[1013] = "Select Next Higher Grade to proceed.";
msg[1014] = "to should be greater than from";
msg[1015] = "Enter Valid no. format for from";
msg[1016] = "Enter Valid no. format for to";
msg[1017] = "Server Name can not be left blank.";
msg[1018] = "Module can not be left blank.";
msg[1019] = "Category can not be left blank.";
msg[1020] = "Subject can not be left blank.";
msg[1021] = "Mail Message can not be left blank.";
msg[1022] = "Level Name can not be left blank.";
msg[1023] = "This Level Name already exist.";
msg[1024] = "Location Level can not be left blank.";
msg[1025] = "Location Name can not be left blank.";
msg[1026] = "Address1 can not be left blank.";
msg[1027] = "City can not be left blank.";
msg[1028] = "Country  can not be left blank.";
msg[1029] = "Select Time Zone to proceed.";
msg[1030] = "Reason can not be left blank.";
msg[1031] = "Select Stage to proceed.";
msg[1032] = "Status  Name can not be left blank.";
msg[1033] = "Role Name can not be left blank.";
msg[1034] = "Select Function to proceed.";
msg[1035] = "Select Role  to Proceed";
msg[1036] = "Select  Indicate Location  to Proceed";
msg[1037] = "Select  Application Blank  to proceed.";
msg[1038] = "Select  Hr User  to Proceed";
msg[1039] = "Name can not be left blank.";
msg[1040] = "Street can not be left blank.";
msg[1041] = "Zip can not be left blank.";
msg[1042] = "Country can not be left blank.";
msg[1043] = "E mail can not be left blank.";
msg[1044] = "Login Id can not be left blank.";
msg[3005] = "invalid email";
msg[3004] = "Login id already exist";
msg[1045] = "Password can not be left blank.";
msg[1046] = "Referral Name can not be left blank.";
msg[1047] = "Confirm password and Password must be same.";
msg[1048] = "User Name or Password is not Correct";
msg[1049] = "No. of Position cannot be left blank.";
msg[1050] = "Category cannot be left blank.";
msg[1051] = "Target Closing Date label cannot be left blank.";
msg[1052] = "Closing Date cannot be left blank.";
msg[1053] = "Position Role Label cannot be left blank.";
msg[1054] = "Position Role cannot be left blank.";
msg[1055] = "Position Role Description Label cannot be left blank.";
msg[1056] = "Position Role Description cannot be left blank.";
msg[1057] = "Function Label cannot be left blank.";
msg[1058] = "Function cannot be left blank.";
msg[1059] = "Desired Profile Label cannot be left blank.";
msg[1060] = "Desired Profile cannot be left blank.";
msg[1061] = "Minimum Experience Label cannot be left blank.";
msg[1062] = "Minimum Experience cannot be left blank.";
msg[1063] = "Maximum Experience Label cannot be left blank.";
msg[1064] = "Maximum Experience cannot be left blank.";
msg[1065] = "Remuneration Label cannot be left blank.";
msg[1066] = "Remuneration cannot be left blank.";
msg[1067] = "Location Label cannot be left blank.";
msg[1068] = "Location cannot be left blank.";
msg[1069] = "Select Atleast One Consultant to proceed.";
msg[1070] = "Select an Application to proceed.";
msg[1071] = "Enter From Email Address to proceed.";
msg[1072] = "Enter To Email Address to proceed.";
msg[1073] = "Select a HR User to proceed.";
msg[1074] = "Interview Date cannot be left blank.";
msg[1075] = "Start Time cannot be left blank.";
msg[1076] = "This Mail Message already exists.";
msg[1077] = "Old password is incorrect.";
msg[1078] = "Select Month to proceed.";
msg[1079] = "Enter Maximum Leave Days Accumulatable in a Year to proceed.";
msg[1080] = "Enter Maximum Leave Days Accumulatable to proceed.";
msg[1081] =
  "The Maximum Leave Days Accumulatable cannot be less than the Maximum Leaves Accumulatable in a Year.";
msg[1082] =
  "Enter a valid value for Maximum Leave Days Accumulatable in a Year.";
msg[1083] = "Enter a valid value for Maximum Leave Days Accumulatable.";
msg[1084] = "Enter the Minimum Accumulated Balance for Encashment to proceed.";
msg[1085] =
  "Enter a valid value for the Minimum Accumulated Balance for Encashment.";
msg[1086] =
  "Enter the Minimum Tenure in Organization in No. of Months to proceed.";
msg[1087] =
  "Enter a valid value for the Minimum Tenure in Organization in No. of Months.";
msg[1088] = "Enter the Maximum Leave Days Encashable to proceed.";
msg[1089] = "Enter a valid value for the Maximum Leave Days Encashable.";
msg[1090] =
  "Enter the Minimum gap in months between for Encashment to proceed.";
msg[1091] =
  "Enter a valid value for the Minimum gap in months between for Encashment.";
msg[1092] = "Select Approval By to proceed.";
msg[1093] =
  "Enter No. of Days after which the request will go to next Level Supervisor.";
msg[1094] =
  "Enter a valid value for No. of Days after which the request will go to next Level Supervisor.";
msg[1095] = "Select Leave Type to proceed.";
msg[1096] = "Enter Start Date to proceed.";
msg[1097] = "Enter End Date to proceed.";
msg[1098] = "Enter Reason to proceed.";
msg[1099] = "Start Date Time cannot be less than the End Date Time.";
msg[1100] = "The Expense From Date cannot be less than the Expense To Date.";
msg[1101] = "Level id with the same name exists.";
msg[1102] =
  "Same grade level can not be the next grade level for two grade levels.";
msg[1103] = "Grade can not be left blank.";
msg[1104] = "Level Id can not be left blank.";
msg[1105] = "Enter Level Designation to proceed.";
msg[1106] = "Level can not be left blank.";
msg[1107] = "There already exists a Role with same name.";
msg[1108] = "Date of Holiday cannot be left blank.";
msg[1109] = "Holiday cannot be left blank.";
msg[1110] = "At least one location must be selected.";
msg[1111] = "All time values are mandatory.";
msg[1112] = "Enter valid time durations.";
msg[1113] = "Custom field with the same label already exists.";
msg[1114] = "No Role exists whose setup has not yet been done.";
msg[1115] = "Select Number of stages to proceed.";
msg[1116] = "Stages can not be same.";
msg[1117] = "Enter First name to proceed.";
msg[1160] = "Enter Full Name to proceed.";
msg[1161] = "Select Date Of Retirement to proceed.";
msg[1162] = "Date Of Retirement can not be less then Date Of Joining.";
msg[1118] = "Enter Last name to proceed.";
msg[1119] = "Enter Email to proceed.";
msg[1120] = "Select Employee Type to proceed.";
msg[1121] = "Select Location to proceed.";
msg[1122] = "Select Function to proceed.";
msg[1123] = "Select Business Unit to proceed.";
msg[1124] = "Select Role to proceed.";
msg[1125] = "Select Grade to proceed.";
msg[1126] = "Select Grade Level to proceed.";
msg[1127] = "Enter Date of joining to proceed.";
msg[1128] = "Enter Date of Birth to proceed.";
msg[1129] = "Enter Street to proceed.";
msg[1130] = "Enter Zip to proceed.";
msg[1131] = "Enter Phone to proceed.";
msg[1132] = "Enter Emergency contact person to proceed.";
msg[1133] = "Enter Emergency contact Phone to proceed.";
msg[1134] = "Select basis.";
msg[1135] = "At least one grade must be selected.";
msg[1136] = "Select Position to proceed.";
msg[1137] = "Enter Old Password to proceed.";
msg[1138] = "Enter New Password to proceed.";
msg[1139] = "Enter Confirm Password to proceed.";
msg[1140] = "Organization Setup has not been done.";
msg[1141] = "No locations have been defined.";
msg[1142] = "Error accessing Access Right Information.";
msg[1143] = "At least one Business Unit must be selected.";
msg[1144] = "The Access Right Setup for the specified role already Exist.";
msg[1145] = "The password's don not match.";
msg[1146] = "Login Id already exists.";
msg[1147] = "Select Application Source to proceed.";
msg[1148] = "Select the Consultant to proceed.";
msg[1149] = "Select Employee to proceed.";
msg[1150] = "Mandatory Fields marked with '*' have been left blank.";
msg[1151] = "LWP has already exists.";
msg[1201] = "Enter Leave type to proceed.";
msg[1202] = "Select atleast one grade";
msg[1203] = "Select Employee Type to proceed.";
msg[1204] = "Enter Annual Entitlement to proceed.";
msg[1205] = "Invalid data for annual entitlement.";
msg[1206] = "Enter Minimum no of days for leave to proceed.";
msg[1207] = "Invalid data for minimum days of leave.";
msg[1208] = "Enter Maximum no of days for leave to proceed.";
msg[1209] = "Invalid data for maximum days of leave.";
msg[1210] = "Give Reason for exceeding the limit.";
msg[12121] = "Please Enter User Name";
msg[12122] = "Please Enter LoginId";
msg[12123] = "Please Enter Password";
msg[12124] = "Please select View Status";
msg[12125] = "Please select Update Status";
msg[1211] = "Select Type of Work to proceed.";
msg[1212] = "Select Travel Type  to proceed.";
msg[1213] = "Make at least one travel detail to proceed";
msg[1214] = "Enter Client Name to proceed.";
msg[1215] = "Select Billable(Y/N) to proceed.";
msg[1216] = "Select Currency to proceed.";
msg[1217] = "Enter Requested Amount to proceed.";
msg[1218] = "Select purpose of travel to proceed.";
msg[1219] = "Select reason for separation.";
msg[1220] = "Enter Requested relieving date to proceed.";
msg[1221] = "Approve the Deviations before Approving the request.";
msg[1222] = "Enter Expense From Date to proceed.";
msg[1223] = "Enter Expense To Date to proceed.";
msg[1224] = "Enter Client Name to proceed.";
msg[1225] = "Requested Relieving date can not be less then the current date.";
msg[1226] = "Enter Relieving date to proceed.";
msg[1227] = "Enter Reason for separation to proceed.";
msg[1228] = "Enter Client Name to proceed.";
msg[1229] = "Enter Amount to proceed.";
msg[1230] = "Enter Reason for Rejection to proceed.";
msg[1231] = "Enter Approved Amount to proceed.";
msg[1232] = "Enter Comments to proceed.";
msg[1233] = "Enter Comments for the changed approved amount .";
msg[1234] = "Initial setup incomplete.";
msg[1235] = "Target Closing Date cannot be less than the Current Date.";
msg[1236] = "Select Accommodation Type to proceed.";
msg[1237] = "Enter Purpose to proceed.";
msg[1238] = "Enter Travel Mode to proceed.";
msg[1239] = "Select & Add Employee Type to proceed.";
msg[1240] = "Select & Add Domestic Travel Mode to proceed.";
msg[1241] = "Select & Add Overseas Travel Mode to proceed.";
msg[1242] = "Select & Add Accommodation Types to proceed.";
msg[1243] = "Select & Add Grades to proceed.";
msg[1244] = "Select Accounts Role to proceed.";
msg[1245] = "Select Administrator Role to proceed.";
msg[1246] = "A combination of Employee Type and Grade already Exists.";
msg[1247] = "Enter Accommodation Types to proceed.";
msg[1248] = "Enter From City to proceed.";
msg[1249] = "Enter To City to proceed.";
msg[1250] = "Enter From Date to proceed.";
msg[1251] = "Enter To Date to proceed.";
msg[1252] = "Enter Travel Mode to proceed.";
msg[1253] = "Enter Accomodation Type to proceed.";
msg[1254] = "Actual Value must be valid.";
msg[1255] = "A request for separation already exists.";
msg[1256] = "Avalied value must not be greater than Added value.";
msg[1257] =
  "Leave Balance for this Leave Type does not exist. You cannot apply for this leave type.";
msg[1258] = "Enter Value for Number of Ratings";
msg[1259] = "Enter Rating Name to proceed.";
msg[1260] = "Enter All Ratings  to proceed.";
msg[1261] = "This Rating Type already Exists.";
msg[1262] = "This Organization Skill already Exists.";
msg[1263] = "Enter Skill Name to proceed.";
msg[1264] = "Select Skills To proceed.";
msg[1265] = "Select Required Level To proceed.";
msg[1266] = "Requirements have already been setup up for the Role.";
msg[1267] = "Select Type of Rating to proceed.";
msg[1268] = "Minimum value must be less than the Maximum value.";
msg[1269] = "Enter all the Level Names to proceed.";
msg[1270] = " Level Names must be unique.";
msg[1271] = " Click OK to get Rating Levels.";
msg[1272] = "Enter Minimum Value to proceed.";
msg[1273] = "Enter Maximum Value to proceed.";
msg[1274] = "Select Rating Type to proceed.";
msg[1275] = "Eneter value for Required level to proceed.";
msg[1276] =
  "Value for Required Level must lie between Minimum and maximum value";
msg[1277] = "Select & Add atleast one Display Field to proceed.";
msg[1278] = "Enter values for all filter fields to proceed.";
msg[1279] = "Enter a valid value for all filter fields to proceed.";
msg[1280] = "Enter Report Title to proceed.";
msg[1281] = "Enter a valid valid value for No of Column.";
msg[1282] = "This Report Title already exists. Enter a new one.";
msg[1283] = "Enter the Emploee Id to proceed.";
msg[1285] = "Enter the KPI to proceed.";
msg[1286] = "Enter the Rating to proceed.";
msg[1287] = "Enter the numeric vaule for maximun achivement to proceed.";
msg[1288] = "Enter the numeric vaule for minimum achivement to proceed.";
msg[1289] =
  "Maximun achivement vaule should be greter than minimum achivement to proceed.";
msg[1290] = "This Kpi already exists.";
msg[1291] = "Enter Actual to proceed.";
msg[1292] = "Enter Target to proceed.";
msg[1293] = "Select Start Year to proceed.";
msg[1294] = "Select End Year to proceed.";
msg[1295] = "Enter %Achieved to proceed.";
msg[1296] = "Select the organizational role to proceed.";
msg[1297] = "Select the atleast one kpi to proceed.";
msg[1298] = "Enter the numeric vaule for kpi weightage to proceed.";
msg[1299] = "Sum of kpi weightage is not equal to 1 to proceed.";
msg[1300] = "Duplicate organizational role";
msg[1301] = "Enter no of Days to proceed.";
msg[1302] = "Enter the numeric vaule for weightage to proceed.";
msg[1303] = "Weightage value sould be between 0.0 and 1.0 to proceed.";
msg[1304] = "Enter Title to proceed.";
msg[1305] = "Enter Details to proceed.";
msg[1306] = "Enter numeric value for rate to proceed.";
msg[1307] = "Enter expense type  to proceed.";
msg[1308] = "Select Applicable to  to proceed.";
msg[1309] = "Enter rate  to proceed.";
msg[1310] = "Enter Unit of Distance  to proceed.";
msg[1311] = "Please select employee  to proceed.";
msg[1312] = "Duplicate employee target";
msg[1313] = "Please enter target  to proceed.";
msg[1314] = "Select travel request  to proceed.";
msg[1315] = "Select expense type  to proceed.";
msg[1316] = "Enter transaction amount  to proceed.";
msg[1317] = "Select payment mode  to proceed.";
msg[1318] = "Enter Actual to proceed.";
msg[1319] = "Enter Percentage Achieved to proceed.";
msg[1320] = "Travel Request doen't exist. Unable to proceed.";
msg[1321] = "Select mode to proceed.";
msg[1322] = "Enter From place to proceed.";
msg[1323] = "Enter To place Unable to proceed.";
msg[1324] = "Enter distance to proceed.";
msg[1325] = "Enter amount to proceed.";
msg[1326] = "Enter Schedule Date to proceed.";
msg[1327] = "Enter Schedule Time to proceed.";
msg[1328] = "A Organization Target for this Period already exists.";
msg[1329] = "Enter the numeric vaule for intiation to proceed.";
msg[1330] = "Enter the numeric vaule for closure to proceed.";
msg[1331] = "Closure value must be geater than or equal to initiation value.";
msg[1332] =
  "Initiation timeline must be geater than or equal to previous events closure timeline";
msg[1333] = "Select Claim Type  to proceed.";
msg[1334] = "No details entered. Unable  to proceed.";
msg[1335] = "Enter start date  to proceed.";
msg[1336] = "Enter end date  to proceed.";
msg[1337] = "Enter claim reference  to proceed.";
msg[1338] =
  "The percentage Achieved should lie between the Maximum Achievable and Minimum Achievable.";
msg[1339] = "Enter paid amount  to proceed.";
msg[1340] = "Enter claim reference  to proceed.";
msg[1341] = "Enter claim amount  to proceed.";
msg[1342] = "Select component  to proceed.";
msg[1343] = "Select month  to proceed.";
msg[1344] =
  "The workflow rules for your role have not been setup. Please contact your administrator.";
msg[1345] = "Role Kpi not found for employee.";
msg[1346] = "Enter cost center  to proceed.";
msg[1347] = "Select forwarding user  to proceed.";
msg[1348] = "Enter email id   to proceed.";
msg[1349] = "Schedule Date and time cannot be less than present Date Time.";
msg[1350] = "Enter Reason  to proceed.";
msg[1351] =
  "These modifications cannot be saved since there are pending requests of this employee which require action from the current manager.";
msg[1352] = "Applicable should also be checked for mandatory field.";
msg[1353] =
  "Changes Applicable From  date cannot be greater than present date.";
msg[1354] = "Display As field cannot be left blank as applicable is selected.";
msg[1355] = "Enter stage owner to proceed.";
msg[1356] = "Enter numeric value for weightage to proceed.";
msg[1357] = "Weightage value must be between 0 and 1.";
msg[1358] = "Sum of weightage should be equal to 1";
msg[1359] =
  "Fields denoted by * are mandatory. Select/Enter values to proceed.";
msg[1360] = "Enter numeric value for current level skills to proceed.";
msg[1361] = "Enter target value  to proceed.";
msg[1362] = "Claim Amount cannot be greater than Balance Entitlement.";
msg[1363] = "Duplicate leave application.";
msg[1364] = "The day applied for leave is holiday.";
msg[1365] = "Enter organization name.";
msg[1366] =
  "This Claim Reference No already exists. Re-create your claim to save these details.";
msg[1367] = "Select at least one location";
msg[1368] = "Enter maximum hours";
msg[1369] = "Enter number for maximum hour";
msg[1370] = "Enter value in first hour field";
msg[1371] = "Enter number for hour";
msg[1372] = "Hour cannot be greater than max hour";
msg[1373] = "Cannot skip hour field";
msg[1374] = "Hour must be filled in ascending order";
msg[1375] = "No location available";
msg[1376] = "Select escalate to";
msg[1377] = "Enter Numeric value  to proceed.";
msg[1378] = "Number of Sections cannot be less than one. Reenter to proceed.";
msg[1379] = "Enter Number of Sections  to proceed.";
msg[1380] = "Enter Template Name to proceed.";
msg[1381] = "Select Rating Type to proceed.";
msg[1382] = "Enter Section Name to proceed.";
msg[1383] = "Enter Section Weight to proceed.";
msg[1384] = "Section Weight cannot be greater than 1. Reenter";
msg[1385] =
  "No Questions entered. Enter atleast one question for each section to proceed.";
msg[1386] = "Sum of Section Weights is greater than 1 or less than 1. Reenter";
msg[1387] = "Select training manager to proceed.";
msg[1388] = "Select training year to proceed.";
msg[1389] = "Enter amount to proceed.";
msg[1390] = "Enter numeric value for amount to proceed.";
msg[1391] = "Either Select training or Describe your training need to proceed.";
msg[1392] = "Enter Calendar Name to proceed.";
msg[1393] = "Enter Venue to proceed.";
msg[1394] = "Enter module name to proceed.";
msg[1395] = "Select training  to proceed.";
msg[1396] = "Enter objectives to proceed.";
msg[1397] = "Select faculty  to proceed.";
msg[1398] = "Enter duration  to proceed.";
msg[1399] = "Enter numeric value for duration to proceed.";
msg[1400] = "Enter Rating between given range.";
msg[1401] =
  "Rating field cannot be left blank. Please enter Rating to proceed.";
msg[1402] = "Enter Training Name to proceed.";
msg[1403] = "Enter Training Objective to proceed.";
msg[1404] = "Select Training Type to proceed.";
msg[1405] = "Select Training Organization to proceed.";
msg[1406] = "Enter Training Cordinator name to proceed.";
msg[1407] = "Select Cost Type to proceed.";
msg[1408] = "Enter Training Cost to proceed.";
msg[1409] = "Select Currency to proceed.";
msg[1410] = "Select training manager to proceed.";
msg[1411] = "Select applicable feedback to proceed.";
msg[1412] = "Maximum capacity should be greater or equal to minimum capacity";
msg[1413] = "Select atleast one applicable function to proceed.";
msg[1414] = "Select atleast one applicable role to proceed.";
msg[1415] = "Enter minimum capacity to proceed.";
msg[1416] = "Enter maxmimum capacity to proceed.";
msg[1417] = "Enter ideal capacity to proceed.";
msg[1418] = "Enter numeric value for minimum capacity to proceed.";
msg[1419] = "Enter numeric value for maxmimum capacity to proceed.";
msg[1420] = "Enter numeric value for ideal capacity to proceed.";
msg[1421] = "Enter required level to proceed.";
msg[1422] = "Enter numeric value for required level to proceed.";
msg[1423] =
  "Ideal capacity should lie between minimum capacity and maximum capacity.";
msg[1425] =
  "Required level should lie between minimum range and maximum range.";
msg[1427] = "Enter Details for atleat one module to proceed.";
msg[1428] = "Enter Session to proceed.";
msg[1429] = "Enter Schedule Date to proceed.";
msg[1430] = "Enter Session Start From Time to proceed.";
msg[1431] = "Enter Session End From Time to proceed.";
msg[1432] =
  "Enter Module Details for All Training Programs to Authorize to proceed.";
msg[1433] = "Select Program to proceed.";
msg[1434] = "Enter Details for Atleast one Training Program to proceed.";
msg[1435] = "No nomination program available.";
msg[1436] = "Duplicate training program selected.";
msg[1437] = "Enter Faculty Name to proceed.";
msg[1438] = "Enter training need description to proceed.";
msg[1439] = "Enter nomination cut off to proceed.";
msg[1440] = "Enter numeric value for nomination cut off to proceed.";
msg[1441] = "Enter registration cut off to proceed.";
msg[1442] = "Enter numeric value for registration cut off to proceed.";
msg[1443] = "Enter cancellation cut off to proceed.";
msg[1444] = "Enter numeric value for cancellation cut off to proceed.";
msg[1445] = "Registration cannot be done after cut off date";
msg[1446] = "Cancellation cannot be done after cut off date";
msg[1447] = "Nomination cannot be done after cut off date";
msg[1448] = "Registration cut off date cannot be greater than start date";
msg[1449] = "Cancellation cut off date cannot be greater than start date";
msg[1450] = "Nomination cut off date cannot be greater than start date";
msg[1451] =
  "Fields denoted with * are mandatory. Enter/Select value to proceed.";
msg[1452] = "Select Training to proceed.";
msg[1453] =
  "Expense Claim already created with the selected Travel Request. Reenter to proceed.";
msg[1454] = "Enter Employee Relationship Officer to proceed.";
msg[1455] = "Enter Employee Id to proceed.";
msg[1456] =
  "No. of Times cannot be less than one. Enter No of Times to proceed.";
msg[1457] = "Please indicate the role you might be interested in to proceed.";
msg[1458] = "Enter List Type to proceed.";
msg[1459] =
  "Date of Joining cannot be before current date. Please reenter to proceed.";
msg[1460] =
  "Date of Joining cannot be after current date. Please reenter to proceed.";
msg[1461] = "Your approver has not been setup. Please contact your HR.";
msg[1462] = "Enter Date of Holiday to proceed.";
msg[1463] = "Enter Holiday to proceed.";
msg[1464] = "Select Diversity Holiday to proceed.";
msg[1465] = "Select a Separation Type to proceed.";
msg[1466] = "Select a Role to proceed.";
msg[1467] = "Select a Location to proceed.";
msg[1468] = "Select a Separation Date to proceed.";
msg[1469] = "Select a Termination Date to proceed.";
msg[1470] = "Attach a Termination Case to proceed.";
msg[1471] = "Attach a Termination Letter to proceed.";
msg[1472] = "Select a Reason for Termination to proceed.";
msg[1473] = "Value cannot be left blank to proceed.";
msg[1474] = "Select a Type to proceed.";
msg[1475] = "Enter a Process to proceed.";
msg[1476] =
  "Record of this Date and Holiday combination already Exist to proceed.";
msg[1477] = "Select the user who can generate the Offer.";
msg[1478] = "Select the Leave Recommendation Options to proceed.";
msg[1479] = "Enter the reason to proceed.";
msg[1480] = "Process of Holiday cannot be left blank.";
msg[1481] = "Actual amount is not in given range. Reenter to proceed.";
msg[1482] = "Enter Reminders To Applicants In Days";
msg[1483] = "Enter Stop Sending Reminders In Days";
msg[1484] = "Enter  No Of Days To Purge Record In Days";
msg[1485] = "Enter First Reminders To ERO In Days";
msg[1486] = "Enter Second Reminders To ERO In Days";
msg[1487] = "Select at Least one Location . to proceed.";
msg[1488] = "Select at Least one Role . to proceed.";
msg[1489] = "Sum of all ESI - Nominee Percentage should be 100%.";
msg[1490] = "Sum of all PF - Nominee Percentage should be 100%.";
msg[1491] =
  "Sum of all Group Insurance - Beneficiary Percentage should be 100%.";
msg[1492] = "Sum of all General Nominee Percentage should be 100%.";
msg[1493] = "Enter Confirmation Period.";
msg[1494] = "Enter integer value for Confirmation Period.";
msg[1495] = "Reason cannot be left blank.";
msg[1496] = "Work Date must be less than or equal to Current Date.";
msg[1497] = "Work Date cannot be left blank.";
msg[1498] = "Compensatory Off Request of entered date already exists.";
msg[1499] = "There is no LeaveBalance for this User.";
msg[1500] = "Invalid WorkDate in relation with Credit CompOff Balances.";
msg[1501] = "Please select gender.";
msg[1502] = "Employee name must contain minimum 3 characters.";
msg[1503] = "Access Code already exists.";
msg[1504] = "Date cannot be left blank.";
msg[1505] = "Date must be greater than Current Date.";
msg[1506] = "OD Request/Past Attendance already exists for the Applied Date.";
msg[1507] = "In Time cannot be left blank.";
msg[1508] = "Out Time cannot be left blank.";
msg[1509] = "Date must be smaller than or equal to Current Date.";
msg[1510] =
  "Select Nature of Work/Reason for not marking Attendance to proceed.";
msg[1511] = "Rejection reason cannot be left blank.";
msg[1512] = "Please Enter the leave days.";
msg[1513] = "Enter Date to proceed.";
msg[1514] = "Enter Start Time to proceed.";
msg[1515] = "Enter End Time to proceed.";
msg[1516] = "Shift name cannot be left blank.";
msg[1517] = "Shift already exist.";
msg[1518] = "Please Enter the Notice period.";
msg[1519] = "Please Enter Max hours of leave allowed.";
msg[1520] = "Please Enter the Declaration Text.";
msg[1521] = "This is not a unique shift.";
msg[1522] = "Standard Shift Start time can not be blank.";
msg[1523] = "Standard Shift Duration can not be blank.";
msg[1524] = "Start time can not be less than end time.";
msg[1525] = "Only one shift can be general Shift for each location.";
msg[1526] = "Enter/Select Rating to proceed.";
msg[1527] = "Roster End Date must be greater than Roster Start Date.";
msg[1528] = "Date To must be greater than Date From.";
msg[1529] = "Departure Date Should Not Be Blank.";
msg[1530] = "Departure Time Should Not Be Blank.";
msg[1531] = " Time Should Not Be Blank.";
msg[1532] = " Remarks Should Not Be Left Blank.";
msg[1533] = " Enter Departure Date.";
msg[1534] = " Enter Depature Time.";
msg[1535] = " Paid amount cannot be greater than sanctioned amount.";
msg[1536] = " Tour Summary should not be Blank";
msg[1537] = " Advance Adjusted Amount can not be greater then Payable Amount";
msg[1538] = " Select Status To Proceed.";
msg[1539] =
  " Travel Workflow Exist For Selected Combination of Location and Grade.";
msg[1540] =
  " Travel Workflow Exist For Selected Combination of Location and Role.";
msg[1541] = " Enter Asset Name.";
msg[1542] = " Enter Date Of Issue.";
msg[1543] = " Enter Date Of Return.";
msg[1544] = " Enter Program Name.";
msg[1545] = " Enter Depart On Date.";
msg[1546] = " Enter arrive On Date.";
msg[1547] = " Please Fill Previous Travel Line To Add More.";
msg[1548] = " Please Fill Previous Accommodation Line To Add More.";
msg[1549] = " Enter Leaving from.";
msg[1550] = " Enter Place Of Stay.";
msg[1551] = " Arrive date Should be Greater than or Equal to Depart Date.";
msg[1552] = " To date Should be Greater than or Equal to From Date.";
msg[1553] =
  " Depart date Should be Greater than or Equal to Arrive Date of Previous Travel Line.";
msg[1554] =
  " From date Should be Greater than or Equal to To Date of Previous Accommodation Line .";
msg[1555] = " Enter Approver Reason .";
msg[1556] = " Enter Employee Id .";
msg[1557] = " Employee Id Already Exist .";
msg[1558] = " Enter Cancellation Request Reason.";
msg[1559] = " Enter Reason For Cancellation Rejection.";
msg[1560] = " Enter Reason For Cancellation Approval .";
msg[1560] = " enter the value of min halfday hours ";
msg[1560] = " enter the value of max fullday hours ";
msg[1564] = "Leave start date cannot be less than date of joining.";
msg[1566] = "Select leave category to proceed.";
msg[1567] =
  "The Leave Workflow setup has not been defined for your Role. Please contact your ERM Administrator";
msg[1568] =
  "The Workflow setup has not been defined for your Role. Please contact your ERM Administrator";
msg[1569] = "Enter Rating to proceed.";
msg[1570] = "Enter Comment to proceed.";
msg[1571] = "Enter rating in all the sections to proceed.";
msg[1572] = "Total Points should be equal to specified performance weightage";
msg[1573] = " Employee target already exist";
msg[1574] = " Please fill one row completely to proceed.";
msg[1575] = " First row is mandatory to proceed.";
msg[1576] = " Enter Compensation Name to proceed.";
msg[1577] = " Select Compensation Frequency to proceed.";
msg[1578] = "Select CostCenter";
msg[1579] = "Select a Reason for Separation to proceed.";
msg[1580] = "Enter Designation to proceed.";
msg[1581] = "Email Id already exists.";
msg[1582] = "Date of Return Should be Greater than or Equal to Date of Issue";
msg[1583] = "Date of separation cannot be less than the Request date";
msg[1584] = "Shift not applicable for current user's location";
msg[1585] =
  "Start Date and End date must be equal or greater than current date.";
msg[1586] = " Your target already exist";
msg[2000] = " Please enter your Valid Customer Code and Username";
msg[3001] = "Please select at least one Training.";
msg[3002] = "Please select any one Training.";
msg[3003] = "No Program Available.";
msg[3006] = "Effective From is mandatory.";
// Mayank for roster
msg[10051] = "You can not generate modify back dated rosters.";
msg[10052] = "You can not generate modify current and future dated rosters.";
msg[10054] = "You can not generate modify back dated rosters for self.";
msg[10055] =
  "You can not generate modify current and future dated rosters for self.";
msg[10053] = "You don't have rights to modify rosters of this employee.";

msg[3601] = "Enter non-numeric value in session to proceed";
msg[3602] = "Session value can not be numeric.";
msg[3603] = "Enter Calendar Name to proceed.";
msg[3604] = "Enter Details for Atleast one Training Program to proceed.";
msg[3605] = "Enter Start Date to proceed. ";
msg[3606] = "Enter End Date to proceed.";
msg[3607] = "Start Date Time cannot be greater than the End Date Time.";
msg[3608] = "Enter Venue to proceed.";
msg[3609] = "Enter Reason to proceed.";
msg[3610] = "Enter Numeric value to proceed.";
msg[3611] = "Enter Business Unit to proceed";
msg[3612] = "Enter Level Name to proceed";
msg[3599] = "Enter Role Group Name to proceed";
msg[3598] = "Select Education Level to proceed";
msg[3597] = "Enter Education Type to proceed";
msg[3596] = "Enter Industry Vertical to proceed";
msg[3595] = "Enter Project Value to proceed";
msg[3594] = "Duplicate Industry Vertical";
msg[3593] = "Duplicate Project Value";
msg[3592] = "Duplicate Role Group";
msg[3591] = "Duplicate Recruitment Function";
msg[3590] = "Duplicate Role Type";
msg[3589] = "Enter Function Name to proceed";
msg[3588] = "Enter Role Type to proceed";
msg[3613] = "Enter Relieving date to proceed";
msg[3614] = "Enter Reason for separation to proceed.";
msg[3615] = "";
msg[3616] = "";
msg[3617] = "Password must be between ";
msg[3618] = "Password must contain at least ";
msg[3619] = "Password must not contain your login id ";
msg[3620] = "Password must not contain your first name";
msg[3621] = "Password must not contain your last name";
msg[3622] = "You can not reuse any of your last";
msg[3623] = "Please enter place of birth to proceed.";
msg[3624] = "Please enter religion to proceed.";
msg[3625] = "Please select native language to proceed";
msg[3626] = "Please select ethnic group to proceed";
msg[3627] = "Please enter nationality to proceed";
msg[3628] = "Please select marital status to proceed";
msg[3629] = "Please enter anniversary date to proceed";
msg[3630] = "Date of issue can not be left blank";
msg[3631] = "Valid till date can not be left blank";
msg[3632] = "Date of issue cannot be future date";
msg[3633] = "Date of Expiry can not be left blank ";
msg[3634] = "Date of birth can not be future date.";
msg[3635] = "Anniversary date can not be future date.";
msg[3636] = "Date of Issue should be less than Date of Expiry";
msg[3301] = "Enter date to proceed.";
msg[3302] = "Please select any one Training.";
msg[3303] = "No Program Available.";
msg[3304] = "Date of Expiry Should be Greater than Date of Issue";
msg[3305] = "Valid till Should be Greater than Date of Issue";
msg[3306] = "Executable file are not allowed ";
msg[3307] = "Batch file are not allowed ";
msg[3308] = ".sh extension file are not allowed ";
msg[3309] = "Select cost center to proceed ";
msg[3310] = "Select functional supervisor to proceed ";
msg[1602] = "Enter Replacement to proceed";
msg[1603] = "Enter No. of Position to proceed";
msg[1604] = "Enter Request closing date";
msg[1605] = "Select Requester to proceed";
msg[1606] = "Enter Skills to proceed";
msg[1607] = "Enter Qualification details to proceed";
msg[1608] = "Enter Experience details to proceed";
msg[1609] = "Select Owner Location to proceed";
msg[1610] = "Select Owner Name to proceed";
msg[1690] = "Enter Consultant Name to proceed";
msg[1691] = "Enter City to proceed";
msg[1692] = "Enter Country to proceed";
msg[1693] = "Enter Email id to proceed";
msg[1694] = "Enter Zip to proceed";
msg[1695] = "Enter Login Id to proceed";
msg[1696] = "Enter Password to proceed";
msg[1697] = "Enter Referral Name to proceed";
msg[1698] = "Enter Contact Name to proceed";
msg[1699] = "Select Title to proceed";
msg[1700] = "Enter First Name to proceed";
msg[1701] = "Enter Middle Name to proceed";
msg[1702] = "Enter Last Name to proceed";
msg[1703] = "Enter Email to proceed";
msg[1704] = "Experience in Numbers Only";
msg[1705] = "Enter Mobile No. to proceed";
msg[1706] = "Enter DOB to proceed";
msg[1707] = "Select Gender to proceed";
msg[1708] = "Enter Resume Summary to proceed";
msg[1709] = "Enter Total Experience to proceed";
msg[1710] = "Enter Preferred Location to proceed";
msg[1711] = "Enter Current Employer to proceed";
msg[1712] = "Enter Current Designation to proceed";
msg[1713] = "Enter Current CTC to proceed";
msg[1714] = "Select Highest Education to proceed";
msg[1715] = "Select Highest Education Type to proceed";
msg[1716] = "Upload Resume to proceed";
msg[1717] = "Cut & Paste Resume to proceed";
msg[1718] = "Select Education level to proceed";
msg[1719] = "Select Education type to proceed";
msg[1720] = "Enter Degree to proceed";
msg[1721] = "Enter Institute to proceed";
msg[1722] = "Enter passing year to proceed";
msg[1723] = "Enter score/rank to proceed";
msg[1724] = "Enter Organization to proceed";
msg[1725] = "Enter Orgz location to proceed";
msg[1726] = "Select period-from to proceed";
msg[1727] = "Select period-to to proceed";
msg[1728] = "Enter Designation to proceed";
msg[1729] = "Enter Achievements to proceed";
msg[1730] = "Enter ctc to proceed";
msg[1731] = "Select Relationship to proceed";
msg[1732] = "Select Title to proceed";
msg[1733] = "Enter First name to proceed";
msg[1734] = "Enter Middle name to proceed";
msg[1735] = "Enter Last name to proceed";
msg[1736] = "Enter Designation to proceed";
msg[1737] = "Enter Email id to proceed";
msg[1738] = "Enter company forwing for to proceed";
msg[1739] = "Enter Land line no. to proceed";
msg[1740] = "Enter Mobile no. to proceed";
msg[1741] = "Enter Remarks to proceed";
msg[1742] = "Correct error to proceed";
msg[1743] = "Select street to proceed";
msg[1744] = "Select city to proceed";
msg[1745] = "Select state to proceed";
msg[1746] = "Select zip to proceed";
msg[1747] = "Select country to proceed";
msg[1748] = "Select phone to proceed";
msg[1749] = "Select closing date label to proceed";
msg[1750] = "Select closing date value to proceed";
msg[1751] = "Select position label to proceed";
msg[1752] = "Select position value to proceed";
msg[1753] = "Select function label to proceed";
msg[1754] = "Select function value to proceed";
msg[1755] = "Select role profile label to proceed";
msg[1756] = "Select role profile value to proceed";
msg[1757] = "Select skill label to proceed";
msg[1758] = "Select skill value to proceed";
msg[1759] = "Select qualification label to proceed";
msg[1760] = "Select qualification value to proceed";
msg[1761] = "Select experience label to proceed";
msg[1762] = "Select experience value to proceed";
msg[1763] = "Select others label to proceed";
msg[1764] = "Select others value to proceed";
msg[1765] = "Select location label to proceed";
msg[1766] = "Select location value to proceed";
msg[1767] = "Select remarks label to proceed";
msg[1768] = "Select remarks value to proceed";
msg[1769] = "To Year is less then From Year";
msg[1770] = "To Month is less then From Month";
msg[1771] = "Select Short Close Reason";
msg[1772] = "Select Recruitment Function to proceed";
msg[1773] = "Select Role type to proceed";
msg[700] = "Employee Code Cannot Be Blank";
msg[701] = "FirstName Cannot Be Blank";
msg[702] = "MiddleName Cannot Be Blank";
msg[703] = "LastName Cannot Be Blank";
msg[704] = "Invalid EmailId";
msg[705] = "Not A Leap Year.Invalid Date Of Birth";
msg[706] = "Not A Leap Year.Invalid Date Of Joining";
msg[707] = "Day Of Birth Not Mapped";
msg[708] = "Day Of Joining Not Mapped";
msg[709] = "Month Of Birth Not Mapped";
msg[710] = "Year Of Birth Not Mapped";
msg[711] = "Month Of Joining Mapped";
msg[712] = "Year Of Joining Not Mapped";
msg[713] = "Select your Base Currency.";
msg[4000] = "Select schedule date to proceed";
msg[4001] = "Select schedule time to proceed";
msg[4002] = "Schedule Date and time cannot be less than current Date Time.";
msg[4003] = "Please rate all the KPIs before submitting";
msg[4004] = "Please rate all the KPIs before submitting";
msg[4005] = "Please rate all the Competencies before submitting";
msg[3901] = "Password's Maximum Length cannot be less than Minimum Length";
msg[3902] = "Minimum Password Length cannot be less than 4.";
msg[3903] = "Password must be at least 60% strong";
msg[3904] =
  "Time allowed for number of invalid attempts must fall within the range of 1 to 10 mins";
msg[3905] = "Days to Force password change must be greater than 0";
msg[3906] =
  "Minimum Number of symbols Allowed/Mandatory must be greater than or equal to 1";
msg[3907] =
  "Minimum number of Numbers Allowed/Mandatory  must be greater than or equal to 2";
msg[3908] =
  "Your total number of Numbers,Symbols or Alphabets together exceeds your Maximum Limit.";
msg[3909] =
  "Your total number of Numbers,Symbols or Alphabets together cannot be less than your Minimum Limit.";
msg[3910] =
  "Minimum number of Alphabets Allowed/Mandatory  must be greater than or equal to 4";
msg[3911] =
  "No of last passwords which cannot be re-used must be greater than 0 ";
msg[3912] = "Time in mins for clearance must be greater than or equal to 10";
msg[3913] =
  "Number of Invalid Login Attempts must be greater than or equal to 1";
msg[3914] =
  "Warning to user days before expiry must be >= 0 and less than the value set above.";
msg[3915] = "More than one recorder Id cannot be the same.";
msg[3516] = "Select Role Group to proceed.";
msg[3517] = "Please enter only numbers for Standard Hiring Time.";
msg[3518] = "Mandatory fields (*) cannot be left blank.";
msg[3519] = "Please enter List Value to proceed.";
msg[1587] = "Select an Assessment Template to proceed.";
msg[8800] = "Please Select Travel Type to Proceed.";
msg[1594] = "Please select Company to Proceed.";
msg[1595] = "Please select Business Unit to Proceed.";
msg[9999] = "Stage name already exists.";

/***************   (5000 - 6000) FOR NEW TRAVEL WORKFLOW by Jagdeep   ************/
msg[5001] = "Please enter name for this workflow.";
msg[5002] =
  "Workflow for this Company, Business Unit, Role, Location, Grade is already exist.";
msg[5003] =
  "Workflow for this Company, Business Unit, Role and Location is already exist.";
msg[5004] = "Please select domestic Account Approval Group.";
msg[5005] = "Please select international Account Approval Group.";
msg[5006] = "This rule name is already exist for another workflow.";
msg[5007] = "Please select Approval By for Domestic Request";
msg[5008] = "Please select Approval By for International Request";
msg[5009] = "Please select Supervisor Level for Domestic Request";
msg[5010] = "Please select Supervisor Level for International Request";
msg[5011] = "Please select Role Group for Domestic Request";
msg[5012] = "Please select Role Group for International Request";
msg[5013] = "Please select Role for Domestic Request";
msg[5014] = "Please select Role for International Request";
msg[5015] = "Please select Second Approval By for Domestic Request";
msg[5016] = "Please select Second Approval By for International Request";
msg[5017] = "Please select Second Approver Level for Domestic Request";
msg[5018] = "Please select Second Approver Level for International Request";
msg[5019] = "Please select Second Approver's Role Group for Domestic Request";
msg[5020] =
  "Please select Second Approver's Role Group for International Request";
msg[5021] = "Please select Second Approver's Role for Domestic Request";
msg[5022] = "Please select Second Approver's Role for International Request";
msg[5023] = "Please select Second Approval For in Domestic";
msg[5024] = "Please select Second Approval For in International";
msg[5025] = "Please select between Booking Required/Will Book Myself";
/*************   End of (5000 - 6000) FOR NEW TRAVEL WORKFLOW by Jagdeep   ********/

/***************   (9000 - 10000) FOR NEW TRAVEL WORKFLOW by Abhishek Kumar   ************/
msg[9000] = "Please select any expense type for this workflow.";
msg[9001] = "Please select Other type if Other All is to be selected.";
msg[9002] = "Enter Reason For Cancellation Approval";
/***************Added By Shilpi**************/
msg[3611] = "Business Unit name can not be left blank.";
msg[11101] = "Business Unit Code already exists.";
msg[11102] = "Business Unit name already exists.";
msg[1996] = "Function Code already exists.";
msg[19961] = "Login Id already exists.";
msg[19962] = "Applicable Type already exists.";
msg[19963] = "Employee Code already exists.";
msg[19964] = "Applicable Type cannot be blank.";
msg[19965] = "An Applicable type with the same name is already active ";
msg[1995] = "Function Name already exists.";
msg[1999] = "Grade Code already exists.";
msg[1997] = "Grade Name already exist.";
msg[11111] = "Role Code already exist.";
msg[11112] = "Role Name already exist for another Role Code.";
msg[11113] = "Role Name already exist.";
msg[11114] = "RoleGroup Code already exists.";
msg[11115] = "RoleGroup Name already exists.";

/*************   End of (9000 - 10000) FOR NEW TRAVEL WORKFLOW by Abhishek Kumar   ********/

/***************   (10001 - 15000) FOR Gopi Nath Tiwari   ************/

//---------Start Attendance & Leave (10001-11000) --------------

msg[10001] = "Select at least one transaction for approval";

// --------End Attendance & Leave--------------

// -----------Start Travel & Expense (11001-12000)--------------

msg[11001] = "Remarks Should Not Be Left Blank.";
msg[11002] = "Select Status To Proceed.";
msg[11003] = "Select Travel Mode.";
msg[11004] = "Enter Departure Date.";
msg[11005] = "Enter Depature Time.";
msg[11006] = "Select Accomodation Type.";
msg[11007] = "Enter From Date.";
msg[11008] = "Enter To Date.";
msg[11009] = "Select Conveyance Mode.";
msg[11010] = "Select Travel Class.";
msg[11011] = "Select City Category.";
msg[11012] = "Enter ERP ID.";
msg[11013] = "Please select First Approval For in Domestic";
msg[11014] = "Please select First Approval For in International";
msg[11015] = "Please select Grade type in domestic";
msg[11016] = "Please select Grade type in International";
//------------- End Travel & Expense---------------------------

//---------Start EIP (12001-13000) --------------

// --------End EIP--------------

/*************   End of (10001 - 15000)  by Gopi Nath Tiwari   ********/

// added by Jagdeep
function isNumeric(eve) {
  var key = eve.charCode || eve.keyCode || 0;
  // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
  return (
    key == 8 ||
    key == 9 ||
    key == 190 ||
    key == 46 ||
    (key >= 37 && key <= 40) ||
    (key >= 48 && key <= 57) ||
    (key >= 96 && key <= 105)
  );
}

//By gnt080911
function EWRemoveSpecialChars(str) {
  var aStr = str.value;
  var len = aStr.length;
  aRes = [];
  for (var i = 0; i < len; i++) {
    var iC = aStr.charCodeAt(i);
    //  alert("chartacter is "+str.value+" code is= "+iC);
    //  if (iC > 126 || iC<1)
    if (iC == 39) {
      // single quotes
      aRes.push("");
    } else {
      aRes.push(aStr.charAt(i));
    }
  }
  str.value = aRes.join("");
}
function removeSpecialChars(str) {
  var aStr = str.value;
  //alert(aStr);
  var len = aStr.length;
  aRes = [];

  for (var i = 0; i < len; i++) {
    var iC = aStr.charCodeAt(i);
    if (iC > 126 || iC < 1) {
      aRes.push("");
    } else {
      aRes.push(aStr.charAt(i));
    }
  }
  str.value = aRes.join("");
}

// added by Arzoo
function removeSpecialChars4mStr(str) {
  // console.log("initial str== "+str);

  var len = str.length;
  aRes = [];

  for (var i = 0; i < len; i++) {
    var iC = str.charCodeAt(i);
    if (iC > 126 || iC < 1) {
      aRes.push("");
    } else {
      aRes.push(str.charAt(i));
    }
  }
  str = aRes.join("");
  //  str.replace(/^\s+|\s+$/g, '' );
  //console.log("final str== "+str);
  return decodeMe(str);
}

function decodeMe(argVal) {
  if (argVal != null && argVal != undefined) {
    var decoded = argVal.replace(/&amp;/g, "&");
    decoded = decoded.replace(/&gt;/g, ">");
    decoded = decoded.replace(/&lt;/g, "<");
    decoded = decoded.replace(/&quot;/g, '"');
    decoded = decoded.replace(/&#39;/g, "'");
    return decoded;
  } else {
    return argVal;
  }
}

//gnt080911

function HTMLEncode(str) {
  var aStr = str.value;
  //alert(aStr);
  (i = aStr.length), (aRet = []);

  for (var i = 0; i < aStr.length; i++) {
    var iC = aStr.charCodeAt(i);
    if (iC > 126) {
      aRet.push("&#" + iC + ";");
    } else {
      aRet.push(aStr.charAt(i));
    }
  }
  str.value = aRet.join("");
  // return aRet.join('');
}

function textCounter(field, maxlimit) {
  txtstr = field.value;
  var isExceed = false;
  while (getEstimatedTextLength(txtstr) > maxlimit) {
    //alert(getEstimatedTextLength(txtstr));
    txtstr = txtstr.substring(0, txtstr.length - 1);
    isExceed = true;
  }
  if (isExceed) field.value = txtstr;
}

function escapesingleQuote(str) {
  var aStr = str;
  var val = "";
  //alert(aStr);
  (i = aStr.length), (aRet = []);

  for (var i = 0; i < aStr.length; i++) {
    var ch = aStr.charAt(i);
    if (ch == "'") {
      aRet.push("'");
    } else {
      aRet.push(aStr.charAt(i));
    }
  }
  val = aRet.join("");
  return val;
}
function trim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}
function getEstimatedTextLength(str) {
  // replace all special character by caret sign
  var str = str.replace(
    /[^a-zA-Z 0-9\^~`\.!@#\$%&\?\\\/\|=\-\{\}\[\]:;'"<,>\*\(\)_\+]/gi,
    "^"
  );
  //alert(str);
  var temp = new Array();
  temp = str.split("^");

  var special_char_len = 3 * (str.split("^").length - 1);
  var normal_char_len = str.length - (str.split("^").length - 1);
  var total_len = special_char_len + normal_char_len;

  return total_len;
}
function getNumberWithTwoDecimal(obj) {
  if (obj != "") {
    var obj_value = obj.value;
    if (isNaN(obj_value)) {
      if (obj_value.length > 0) {
        obj.value = 0;
      }
      return false;
    } else {
      if (obj_value.indexOf("-") == -1) {
        if (obj_value.indexOf(".") !== -1) {
          if (obj_value.length <= 6) {
            var val_index = obj_value.indexOf(".");
            obj_value = obj_value.substring(0, val_index + 3);
          } else if (obj_value.length > 6) {
            obj_value = obj_value.substring(0, 6);
          }
        } else {
          obj_value = obj_value.substring(0, 3);
        }
        obj.value = obj_value;
      } else {
        obj.value = 0;
      }
      return true;
    }
  }
}

function helpurlOpen(url, width, height, is_iframe, topic_name) {
  if (is_iframe == "dhtml")
    help_url_open = dhtmlmodal.open(
      topic_name,
      "iframe",
      url,
      "Download Logs",
      "width=" +
        width +
        "px,height=" +
        height +
        "px,center=1,resize=1,scrolling=0",
      "recal"
    );
  else
    window.open(
      url,
      topic_name,
      "width=" +
        width +
        ",height=" +
        height +
        ",resizable=yes,scrollbars=yes,toolbar=no,location=no,directories=no,status=no"
    );
}

function imageUrlLoad(topic_id) {
  var urlArray = new Array();
  var str = "";
  $.ajax({
    type: "POST",
    url: "ggs.erm.servlet.AjexServletS?mode=ImageUrl&TOPIC_ID=" + topic_id,
    dataType: "JSON",
    cache: false,
    success: function (data) {
      if (data != null && data.root.top_url != null) {
        urlArray = eval(data).root.top_url.url;
        if (urlArray.length > 0) {
          var length = urlArray.length;
          //	alert(urlArray.length);
          for (var i = length - 1; i >= 0; i--) {
            if (
              urlArray[i] != null &&
              urlArray[i].url_name != null &&
              urlArray[i].url_name != "" &&
              urlArray[i].url_name != "null"
            ) {
              str +=
                "<div style='float:right;cusror:pointer' title='" +
                urlArray[i].text_message +
                "' >";

              if (urlArray[i].isframe == "tab") {
                str +=
                  "<a href='" +
                  urlArray[i].url_name +
                  "' target='_blank'  style='text-decoration:none' > <img src='../images/" +
                  urlArray[i].url_image +
                  "' width=" +
                  urlArray[i].image_width +
                  " height=" +
                  urlArray[i].image_height +
                  " ) style='text-decoration:none;border:0px;'></img></a>";
              } else if (urlArray[i].isframe == "dhtml") {
                str +=
                  "<a href='javascript:void(0);' onclick=helpurlOpen('" +
                  urlArray[i].url_name +
                  "','" +
                  urlArray[i].window_width +
                  "','" +
                  urlArray[i].window_height +
                  "','" +
                  urlArray[i].isframe +
                  "','" +
                  urlArray[i].ew_topic_name +
                  "')  style='text-decoration:none'  > <img src='../images/" +
                  urlArray[i].url_image +
                  "' width=" +
                  urlArray[i].image_width +
                  " height=" +
                  urlArray[i].image_height +
                  " )   style='text-decoration:none;border:0px;' ></img></a>";
              } else {
                str +=
                  "<a href='javascript:void(0);' onclick=helpurlOpen('" +
                  urlArray[i].url_name +
                  "','" +
                  urlArray[i].window_width +
                  "','" +
                  urlArray[i].window_height +
                  "','" +
                  urlArray[i].isframe +
                  "','" +
                  urlArray[i].ew_topic_name +
                  "')  style='text-decoration:none'  > <img src='../images/" +
                  urlArray[i].url_image +
                  "' width=" +
                  urlArray[i].image_width +
                  " height=" +
                  urlArray[i].image_height +
                  " )  style='text-decoration:none;border:0px;' ></img></a>";
              }

              str += "</div>";
            }
          }
          if (str != null && str != "" && str != "null") {
            if (document.getElementById("help_url") != null)
              document.getElementById("help_url").innerHTML = str;
          }
        }
      } else {
        if (document.getElementById("help_url") != null)
          document.getElementById("help_url").innerHTML = "";
      }
    },
  });
}

function getDay_format(val) {
  if (val == 1) return "Mon";
  else if (val == 2) return "Tue";
  else if (val == 3) return "Wed";
  else if (val == 4) return "Thu";
  else if (val == 5) return "Fri";
  else if (val == 6) return "Sat";
  else if (val == 0) return "Sun";
}

function EWDatesformat(
  dateS,
  dateformat,
  dayrequired,
  timerequired,
  timeformat
) {
  // dateS in ( yyyy-mm-dd hh:mm:ss format or yyyy-mm-dd ) ,(2) dateformat should be from logininfo.getDateformat()  (3) dayrequired should be 1/0 1 means requitred 0 means not required
  if (dateS != null && dateS != "" && dateformat == 1) {
    var arrD = dateS.split("-");
    var arrd = arrD[2].split(" ");
    var date_ab = new Date(
      arrD[0],
      parseInt(arrD[1], 10) - 1,
      arrd[0],
      0,
      0,
      0
    );
    if (dayrequired == 1) {
      return (
        getDay_format(date_ab.getDay()) +
        " " +
        arrd[0] +
        " " +
        month(arrD[1]) +
        ", " +
        arrD[0].substring(2)
      );
    } else {
      return arrd[0] + " " + month(arrD[1]) + ", " + arrD[0].substring(2);
    }
  } else {
    return "";
  }
}

function EWPeriodsDatesformat(
  dateS,
  dateS1,
  dateformat,
  dayrequired,
  timerequired,
  timeformat
) {
  if (dateS != null && dateS != "" && dateformat == 1) {
    /* for date_format==1
                 Dates in same month and year    dd-dd mmm, yy  08-10 Jul, 14    Tue 08- Wed 10 Jul, 14
           Dates in different month, same year    dd mmm-dd mmm, yy    28 Jul-05 Aug, 14    Mon 28 Jul- Tue 05 Aug, 14
        Dates in different month and year    dd mmm, yy-dd mmm, yy  28 Dec, 13-03 Jan, 14    Sat 28 Dec, 13-Fri 03 Jan, 14
        Same date (eg - single day leave)    dd mmm, yy    05 Jul, 14    Sat 05 Jul, 14*/
    var arrD = dateS.split("-");
    var arrd = arrD[2].split(" ");
    var date_ab = new Date(
      arrD[0],
      parseInt(arrD[1], 10) - 1,
      arrd[0],
      0,
      0,
      0
    );
    var arrD1 = dateS1.split("-");
    var arrd1 = arrD1[2].split(" ");
    var date_ab1 = new Date(
      arrD1[0],
      parseInt(arrD1[1], 10) - 1,
      arrd1[0],
      0,
      0,
      0
    );
    if (dayrequired == 1) {
      return (
        getDay_absent(date_ab.getDay()) +
        " " +
        arrd[0] +
        " " +
        month(arrD[1]) +
        ", " +
        arrD[0].substring(2)
      );
    } else {
      if (date_ab.getFullYear() == date_ab1.getFullYear()) {
        if (date_ab.getMonth() == date_ab1.getMonth()) {
          if (date_ab.getDate() == date_ab1.getDate()) {
            return arrd[0] + " " + month(arrD[1]) + ", " + arrD[0].substring(2);
          } else if (date_ab.getDate() != date_ab1.getDate()) {
            return (
              arrd[0] +
              "-" +
              arrd1[0] +
              " " +
              month(arrD[1]) +
              ", " +
              arrD[0].substring(2)
            );
          }
        } else if (date_ab.getMonth() != date_ab1.getMonth()) {
          if (date_ab.getDate() == date_ab1.getDate()) {
            return (
              arrd[0] +
              " " +
              month(arrD[1]) +
              "-" +
              arrd1[0] +
              " " +
              month(arrD1[1]) +
              ", " +
              arrD[0].substring(2)
            );
          } else if (date_ab.getDate() != date_ab1.getDate()) {
            return (
              arrd[0] +
              " " +
              month(arrD[1]) +
              "-" +
              arrd1[0] +
              " " +
              month(arrD1[1]) +
              ", " +
              arrD[0].substring(2)
            );
          }
        }
      } else if (date_ab.getFullYear() != date_ab1.getFullYear()) {
        return (
          arrd[0] +
          " " +
          month(arrD[1]) +
          ", " +
          arrD[0].substring(2) +
          "-" +
          arrd1[0] +
          " " +
          month(arrD1[1]) +
          ", " +
          arrD1[0].substring(2)
        );
      }
      return arrd[0] + " " + month(arrD[1]) + ", " + arrD[0].substring(2);
    }
  }
}

function checkCharacter(str) {
  str = unescape(str);
  flag = true;
  var aStr = str.value;
  var len = aStr.length;
  aRes = [];
  for (var i = 0; i < len; i++) {
    var iC = aStr.charCodeAt(i);
    if (iC > 126 || iC < 1) {
      flag = false;
    }
  }
  return flag;
}

function EWRemoveSpecialChars(str) {
  var aStr = str.value;
  var len = aStr.length;
  aRes = [];
  for (var i = 0; i < len; i++) {
    var iC = aStr.charCodeAt(i);
    //  alert("chartacter is "+str.value+" code is= "+iC);
    //  if (iC > 126 || iC<1)
    if (iC == 39) {
      // single quotes
      aRes.push("");
    } else {
      aRes.push(aStr.charAt(i));
    }
  }
  str.value = aRes.join("");
}

function EWTextCounter(field, maxlimit) {
  var EW_field_length = toUTF8Array(unescape(encodeURIComponent(field.value)));

  //	alert("field is "+field.value+" length is ="+EW_field_length+" maxlimit is "+maxlimit);

  if (EW_field_length > maxlimit) {
    if (field.value.length > maxlimit && checkCharacter(escape(field.value)))
      // Check if keyboard character then old metholodgy else remove all character as substring is not working till now.
      field.value = field.value.substring(0, maxlimit);
    else field.value = "";

    //alert("new String is -"+field.value.substring(0,maxlimit));
    //	field.value=(encodeURIComponent(field.value)).substring(0,maxlimit);
    //	return false;
  }
}
function toUTF8Array(str) {
  var utf8 = unescape(encodeURIComponent(str));
  var arr = new Array(utf8.length);
  /*   for (var i= 0; i<utf8.length; i++)arr[i]= utf8.charCodeAt(i); return arr; */ return utf8.length;
}

var progressBarElements = new Array();

progressBarElements[0] = "next";
progressBarElements[1] = "previous";
progressBarElements[2] = "page_no";
progressBarElements[3] = "edit";
progressBarElements[4] = "my";
progressBarElements[5] = "all";
progressBarElements[6] = "needtoact";

function arrayContainsCommon(theArray, value) {
  var len = progressBarElements.length;
  for (i = 0; i < len; i++) {
    if (value == progressBarElements[i]) {
      return true;
    }
  }
  return false;
}

function dragByClassCommon(e) {
  var fobj = event.srcElement;

  var ev = e || event;
  var offsetx = ev.clientX;
  var offsety = ev.clientY;
  if (arrayContainsCommon(sortname, fobj.id)) {
    document.getElementById("progressbarCommon").style.display = "";
    if (document.body.scrollTop > 0) {
      document.getElementById("progressbarCommon").style.left =
        offsetx + document.body.scrollLeft;
      document.getElementById("progressbarCommon").style.top =
        offsety + document.body.scrollTop;
      document.body.scrollTop = 0;
      document.body.scrollLeft = 0;
    } else {
      document.getElementById("progressbarCommon").style.left = offsetx - 130;
      document.getElementById("progressbarCommon").style.top = offsety;
    }
  }
}

function autocompleteCommon(
  fieldName,
  Url,
  include_alumni_obj,
  isForcedIncludeAluminy
) {
  var pteam_userId = new Array();
  $("#" + fieldName).autocomplete(Url, {
    minChars: 3,
    cacheLength: 0,
    extraParams: {
      include_alumni: function () {
        var include_user_id = document.getElementById(include_alumni_obj);
        if (include_user_id != null) {
          if (include_user_id.checked == true) {
            include_user_id = "N";
          } else {
            include_user_id = "Y";
          }
        }
        if (isForcedIncludeAluminy == "Y") {
          include_user_id = "Y";
        }
        return include_user_id;
      },
    },
  });
  $("#" + fieldName).result(function (event, data, formatted) {
    var length = pteam_userId.length;
    pteam_userId[length] = data[1];
    document.getElementById(fieldName).value = data[0];
    actionAutoCompleteCommon(data[1]);
  });
}

/*
page: http://www.myemploywise.com/
url: https://www.myemploywise.com/asperm/style/include_home_all_v48.js
*/
